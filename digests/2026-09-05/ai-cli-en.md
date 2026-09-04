# AI CLI Tools Community Digest 2026-09-05

> Generated: 2026-09-04 22:16 UTC | Tools covered: 12

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



# Today's Highlights — 2026-09-05

1. **Claude Code v2.1.261/260** — Added `/status` org-policy diagnostics and `bashOutputMaxChars`/`taskOutputMaxChars` config in v2.1.261; fullscreen diff panel and prompt-cache miss explanations landed in v2.1.260. [github](https://github.com/anthropics/claude-code)

2. **OpenAI Codex rust-v0.153.3** — Hotfix adding `gpt-6-astra` to the Amazon Bedrock picker and correcting its async user-input guidance. [github](https://github.com/openai/codex)

3. **Gemini CLI v0.60.0-nightly** — Enforced RFC 9207 issuer identification in MCP OAuth flow; landed a wave of security PRs hardening sandbox filesystem boundaries, NTFS short-name traversal, and config-file ownership checks. [github](https://github.com/google-gemini/gemini-cli)

4. **GitHub Copilot CLI v1.0.84-0** — Added sandbox session bypass controls and fixed PowerShell sandbox write-block and multi-account credential resolution bugs. [github](https://github.com/github/copilot-cli)

5. **OpenCode v1.18.28** — Forwards session ID as a GitHub Copilot interaction header; fixed desktop auth client ID mismatch and increased app icon size. [github](https://github.com/anomalyco/opencode)

6. **Pi v0.85.0** — Added persistent per-turn thinking-effort support for Anthropic models; however, the release has a known dependency break (`@earendil-works/pi-server` missing from declared deps). [github](https://github.com/badlogic/pi-mono)

7. **ComfyUI partner nodes** — Shipped Meta Muse Image, Claude Fable 5.1, MiniMax H3 Max Turbo, and Recraft V4 Style nodes; introduced the Comfy Compiler for memory-optimized execution and accepted a Sparse Attention node. [github](https://github.com/comfyanonymous/ComfyUI)

8. **llama.cpp v0.4.0** — Major release with Qwen3.8-Flash-Next and Nemotron-3-Puzzle support, per-slot server context limits, on-demand tensor reading, ggml 0.23.0 sparse flash attention, and Metal M3 flash attention tunings. [github](https://github.com/ggerganov/llama.cpp)

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills — Community Highlights Report
*Data as of 2026-09-05 · Source: [anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. Top Skills Ranking

| # | PR | Skill | Status | Highlights |
|---|-----|-------|--------|------------|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator** (fix) | 🔵 Open | Fixes `run_eval.py` incorrectly reporting 0% recall — the description-optimization loop has been optimizing against noise since at least June. Core meta-tooling defect. |
| 2 | [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | 🔵 Open | Addresses orphan widows, section-stranding, and numbering misalignment in AI-generated documents — a gap users hit routinely but rarely know how to articulate. |
| 3 | [#1615](https://github.com/anthropics/skills/pull/1615) | **scnet-hpc** | 🔵 Open | Profile-based SSH + Slurm workflows for SCNet HPC clusters. Niche enterprise compute use-case. |
| 4 | [#486](https://github.com/anthropics/skills/pull/486) | **odt** | 🔵 Open | OpenDocument Format creation, template filling, and ODT→HTML parsing. Fills a format gap beside the existing PDF/DOCX skills. |
| 5 | [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | 🔵 Open | Comprehensive testing skill covering the Testing Trophy, AAA pattern, React Testing Library, and edge-case strategies. |
| 6 | [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer** & **skill-security-analyzer** | 🔵 Open | Meta-skills that evaluate other skills across structure, docs, security, and five quality dimensions — a self-auditing layer for the marketplace. |
| 7 | [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** | 🔵 Open | Pre-delivery verification: mechanical file checks first, then four-dimension reasoning audit. Universal across stacks. |
| 8 | [#568](https://github.com/anthropics/skills/pull/568) | **servicenow** | 🔵 Open | Broad ServiceNow platform skill spanning ITSM, ITOM, SecOps, FSM, CSDM, and IntegrationHub. Enterprise-focused. |

---

## 2. Community Demand Trends

From the Issues list, the most-anticipated directions are:

- **Skill governance & safety** — Issue [#492](https://github.com/anthropics/skills/issues/492) (43 comments) exposes trust-boundary abuse when community skills masquerade under the `anthropic/` namespace; Issue [#412](https://github.com/anthropics/skills/issues/412) proposes an *agent-governance* skill for policy enforcement and audit trails.
- **Multi-agent orchestration** — PR [#1628](https://github.com/anthropics/skills/pull/1628) ("Hivemind") delegates low-cost work to headless workers while Claude stays the planner, reflecting demand for cost-aware agent routing.
- **Context-window efficiency** — Issue [#1487](https://github.com/anthropics/skills/issues/1487) reports the `claude-api` skill eagerly injecting ~156k tokens; Issue [#1329](https://github.com/anthropics/skills/issues/1329) proposes *compact-memory* using symbolic notation to trim agent state.
- **Cross-org skill sharing** — Issue [#228](https://github.com/anthropics/skills/issues/228) (8 👍) calls for native org-wide skill libraries, eliminating manual file transfer.
- **Quality & reliability tooling** — Issues [#1390](https://github.com/anthropics/skills/issues/1390) (evaluation harness fabricating errors), [#189](https://github.com/anthropics/skills/issues/189) (duplicate skills from overlapping plugins), and [#1362](https://github.com/anthropics/skills/issues/1362) (bundle script failures) signal frustration with test and packaging infra.

---

## 3. High-Potential Pending Skills

| PR | Skill | Why It May Land Soon |
|----|-------|----------------------|
| [#1628](https://github.com/anthropics/skills/pull/1628) | **Hivemind** (multi-agent orchestration) | Directly addresses cost-pressure concerns; architecture is clean and scoped. |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | Solves a universal pain point with minimal overlap; well-scoped. |
| [#486](https://github.com/anthropics/skills/pull/486) | **odt** | Completes the document-format skill matrix (PDF → DOCX → ODT); low risk. |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Testing is a high-frequency Claude Code workflow; broad applicability. |
| [#1615](https://github.com/anthropics/skills/pull/1615) | **scnet-hpc** | Recently updated (Aug 24); niche but complete. |
| [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** | Complements the quality-analyzer meta-skill; pipeline-oriented design. |
| [#568](https://github.com/anthropics/skills/pull/568) | **servicenow** | Longest-lived open PR (Mar → Aug); broad enterprise scope, may need scoping. |

*Also notable:* PR [#1099](https://github.com/anthropics/skills/pull/1099) and [#1050](https://github.com/anthropics/skills/pull/1050) both fix Windows `run_eval.py` crashes — merging either would unblock a major platform compatibility gap.

---

## 4. Skills Ecosystem Insight

The community's most concentrated demand is for **cost-aware, self-governing agent tooling** — skills that reduce context consumption, enforce quality gates before delivery, and enable multi-agent delegation — rather than additional domain-specific capabilities.

---



# Claude Code Community Digest — 2026-09-05

## 1. Today's Highlights

Claude Code v2.1.261 and v2.1.260 landed in the last 24 hours, bringing improved `/status` policy diagnostics, configurable output character limits, and a new diff panel for fullscreen mode. Meanwhile, community discussion remains dominated by Fable 5 model access problems following a recent outage and a cluster of remote-control authentication issues across platforms.

---

## 2. Releases

### v2.1.261
- Added an "Organization policy" line to `/status` and `claude doctor`, surfacing why an org policy failed to load (e.g., proxy blocking the endpoint).
- Introduced `bashOutputMaxChars` and `taskOutputMaxChars` config settings so users can raise command and background-task output limits.

### v2.1.260
- Added a diff panel in fullscreen mode that shows uncommitted changes as Claude edits; toggle with `/diff`.
- Added likely-cause explanations for prompt-cache misses (tool/system-prompt changes, TTL expiry) to `/cost` and other diagnostics.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community |
|---|-------|---------------|-----------|
| [#66098](https://github.com/anthropics/claude-code/issues/66098) | TUI corrupts multi-byte UTF-8 (Cyrillic) on copy via OSC 52 | Breaks clipboard use for non-Latin text; has a repro and is platform-specific (Linux) | 6 comments · 9 👍 |
| [#69220](https://github.com/anthropics/claude-code/issues/69220) | CVP-approved org still hit by AUP/cyber false-positives | Enterprise users report exemption not propagating; affects many orgs post-#49679 | 6 comments |
| [#73779](https://github.com/anthropics/claude-code/issues/73779) | Fable 5 safeguards flag fires on every normal message | Safety classifier misfiring on routine software-engineering conversations | 4 comments · 3 👍 |
| [#78192](https://github.com/anthropics/claude-code/issues/78192) | Auto-mode classifier over-triggering safety prompts | Auto-mode users see false-positive safety blockers on benign actions like test-record creation and cleanup | 3 comments |
| [#78639](https://github.com/anthropics/claude-code/issues/78639) | Unable to access Fable 5 — auth/API error | Users locked out of Fable 5 on CLI while web interface works; likely billing-tier gating bug | 3 comments |
| [#90447](https://github.com/anthropics/claude-code/issues/90447) | Token consumption mismatch: incorrect model billed | Users report being charged on Fable while expecting it, impacting work availability | 2 comments |
| [#78597](https://github.com/anthropics/claude-code/issues/78597) | `/remote-control` fails with "remote credentials fetch failed" in long-lived sessions | Remote-control bridge breaks mid-session; standalone `claude remote-control` from a fresh process works, pointing to session-scoped credential staleness | 2 comments · 2 👍 |
| [#78268](https://github.com/anthropics/claude-code/issues/78268) | Generated files routed as download cards instead of written to disk | Clutters chat and roughly doubles token usage; affects agents producing project-local files | 2 comments |
| [#78618](https://github.com/anthropics/claude-code/issues/78618) | Fable 5 disappears from model picker after API incident | Model vanished without error after the Jul 16–17 outage; timing suggests a post-incident provisioning bug | 1 comment · 3 👍 |
| [#78616](https://github.com/anthropics/claude-code/issues/78616) | Credit-usage percentage inaccurate on Max plan | Usage shown as near-capacity when actual consumption is ~24%; misleads billing-aware users | 1 comment · 2 👍 |

---

## 4. Key PR Progress

| # | PR | Description |
|---|----|-------------|
| [#61691](https://github.com/anthropics/claude-code/pull/61691) | `scripts: Add diagnostic script for GitHub connector showing 'Connected' but no tools` | PowerShell repair script for a recurring Windows bug where the GitHub MCP connector reports connected but exposes zero tools. Closes #61682. |
| [#87079](https://github.com/anthropics/claude-code/pull/87079) | `fix(security-guidance): make ** glob patterns match zero-depth paths` | Fixes security-patterns.json rules where `**/*.ts` silently excluded top-level `.ts` files because `fnmatch`'s `**` does not match zero-depth by default. Security-critical fix. |

---

## 5. Feature Request Trends

- **Better enterprise/org policy transparency** — Multiple issues (#69220, #78621) show demand for clearer diagnostics when org policies block or misfire, not just opaque rejections.
- **Reliable remote-control session persistence** — Credential refresh and session-pairing reliability (#78597, #78580, #78601, #78594) are top-requested improvements for headless/server workflows.
- **Model-access reliability post-incident** — After the Jul 16–17 outage, users want guaranteed model availability (#78618, #78627, #78634) and accurate credit-usage reporting (#78616, #90447).
- **TUI / clipboard fidelity** — UTF-8 copy-paste correctness (#66098) and session grouping (#78638) reflect demand for a polished terminal-native experience.
- **File-handling efficiency** — Avoiding per-file download cards (#78268, #78583) in favor of direct disk writes is a repeated request from agent-heavy workflows.

---

## 6. Developer Pain Points

1. **Fable 5 access instability** — The single dominant theme: models disappearing from pickers, safeguards over-triggering, and auth/API errors specific to CLI vs. web. This is affecting productivity across macOS, Linux, and VS Code.
2. **Billing and credit-usage opacity** — Misleading usage-percentage displays (#78616, #78634), incorrect model billing (#90447), and policy-load failures (#78621) are eroding trust in cost predictability.
3. **Remote-control fragility on servers** — Cloudflare challenges (#78594), stale OAuth tokens (#78580), session-list desync (#78601), and credential-fetch failures (#78597) make headless workflows unreliable.
4. **TUI regressions** — Multi-byte UTF-8 clipboard corruption (#66098), forked-session grouping gaps (#78638), and VS Code panel-flicker (#74187) signal ongoing polish gaps in the terminal UI.
5. **Agent file-output inefficiency** — Download-card routing instead of direct disk writes (#78268, #78583) doubles token costs and clutters conversations, especially for design-agent and multi-file workflows.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>



# OpenAI Codex Community Digest — 2026-09-05

## 1. Today's Highlights

GPT-6-Astra receives focused attention this cycle with a hotfix release (v0.153.3) surfacing it in the Amazon Bedrock picker and correcting its async user-input guidance, while a separate Windows-only visibility bug ( [#42853](https://github.com/openai/codex/issues/42853)) and a Linux reliability gap ( [#42868](https://github.com/openai/codex/issues/42868)) remain open. On the engineering side, the Guardian review pipeline sees a cluster of hardening PRs covering context compaction, root authorization preservation, and Windows path conventions.

---

## 2. Releases

**rust-v0.153.3** — Primary changes:
- **New Feature:** Added `gpt-6-astra` to the Amazon Bedrock model picker for Mantle and Runtime global/US routes ([#42805](https://github.com/openai/codex/pull/42805)).
- **Bug Fix:** Corrected Astra's guidance so asynchronous clarification questions route through the supported `request_user_input_async` tool and respect its text-only contract ([#42809](https://github.com/openai/codex/pull/42809)).

**rust-v0.153.2** — Documentation-only fix: corrected the GPT-6-Astra Fast tier label from "1.5x" to "2x speed, increased usage"; no behavioral change ([#42632](https://github.com/openai/codex/pull/42632)).

Full changelog: [rust-v0.153.1…rust-v0.153.2](https://github.com/openai/codex/compare/rust-v0.153.1...rust-v0.153.2)

A pre-release **rust-v0.154.0-alpha.3** was also published.

---

## 3. Hot Issues

| # | Title | Community Signal | Why It Matters |
|---|-------|-----------------|----------------|
| [#39903](https://github.com/openai/codex/issues/39903) | Disable "Ran N commands" collapsing in TUI | 81 👍 · 65 💬 | High-signal feature request from Pro users who need auditability of every executed command; recently closed, suggesting resolution is inbound. |
| [#18960](https://github.com/openai/codex/issues/18960) | Frequent websocket reconnect loop | 51 👍 · 56 💬 | Persistent streaming failure hitting macOS Pro users; impacts developer workflow reliability. |
| [#25178](https://github.com/openai/codex/issues/25178) | Windows Computer Use screenshot fails (`SetIsBorderRequired`) | 17 👍 · 39 💬 | Blocks AI-driven UI automation on Windows 10 22H2 — a core Computer Use capability. |
| [#41463](https://github.com/openai/codex/issues/41463) | Cannot create projects on Windows + WSL (AbsolutePathBuf) | 16 👍 · 24 💬 | Path deserialization bug makes project creation impossible for the WSL subset of Windows users. |
| [#41960](https://github.com/openai/codex/issues/41960) | Windows Pets unresponsive to clicks/drag | 16 👍 · 14 💬 | Desktop-quality regression affecting an engagement feature on Windows 11 Pro. |
| [#32164](https://github.com/openai/codex/issues/32164) | Remote Control enrollment never completes on Windows | 4 👍 · 13 💬 | Blocks the entire Remote Control flow on Windows, a key multi-device scenario. |
| [#25353](https://github.com/openai/codex/issues/25353) | VS Code browser plugin — no session-owned route registered | 5 👍 · 11 💬 | Browser-use capability silently missing for VS Code Codex on Windows. |
| [#24224](https://github.com/openai/codex/issues/24224) | Concurrent sessions leak workspace root across projects | 4 👍 · 9 💬 | Context-leak bug on macOS that corrupts multi-project workflows. |
| [#42853](https://github.com/openai/codex/issues/42853) | GPT-6-Astra missing from Windows model picker | 0 👍 · 3 💬 | Newly surfaced regression contradicting the v0.153.3 fix; still OPEN. |
| [#42868](https://github.com/openai/codex/issues/42868) | Astra not showing reliably on Linux | 0 👍 · 2 💬 | Cross-platform inconsistency — Astra works on macOS/Windows Bedrock but not Linux CLI. |

---

## 4. Key PR Progress

| PR | Status | Summary |
|----|--------|---------|
| [#42874](https://github.com/openai/codex/pull/42874) | Open | **Hotfix:** Exposes `gpt-6-astra` in the bundled model picker by switching visibility to `list`; addresses [#42853](https://github.com/openai/codex/issues/42853). |
| [#42847](https://github.com/openai/codex/pull/42847) | Closed | **TUI copy-paste:** Preserves Markdown formatting by sending rendered HTML alongside raw Markdown to the native clipboard, so rich-text destinations retain headings, lists, tables, and code blocks. |
| [#42852](https://github.com/openai/codex/pull/42852) | Closed | **Guardian hardening:** Ensures user-authorization constraints survive context compaction and resume, preventing stale or unreadable parent checkpoints from being reused. |
| [#42844](https://github.com/openai/codex/pull/42844) | Closed | **Guardian context:** Captures complete original user messages into host-owned retained context so Guardian reviews always see the instructions even when compaction drops them from the active window. |
| [#42832](https://github.com/open.com/openai/codex/pull/42832) | Closed | **Root authorization:** Builds a dedicated root-authorization context for Guardian reviews of delegated workers; approvals become stale when root authorization changes. |
| [#42838](https://github.com/openai/codex/pull/42838) | Closed | **Windows paths in Guardian:** Prevents path-convention mismatches (Windows vs. POSIX) from breaking Guardian approval actions after remote-executor compaction. |
| [#42836](https://github.com/openai/codex/pull/42836) | Closed | **Astra guidance conditional:** Applies the `functions.request_user_input_async` instruction only when the tool is present, fixing the async-clarification bug in [#42809](https://github.com/openai/codex/pull/42809). |
| [#42842](https://github.com/openai/codex/pull/42842) | Closed | **Astra sparkle effects:** Adds sparse, fading-star animations to the TUI composer for Astra models in true-color terminals, paused during popups. |
| [#42841](https://github.com/openai/codex/pull/42841) | Closed | **Windows MXC sandbox adapter:** Introduces a native `codex-mxc-sandbox` crate with availability detection, deny-path verification, and proper I/O inheritance for sandboxed processes. |
| [#42850](https://github.com/openai/codex/pull/42850) | Closed | **jemalloc on musl:** Switches the Linux musl build (x86_64 & aarch64) to `tikv-jemallocator` for improved memory performance in containerized deployments. |

---

## 5. Feature Request Trends

1. **Auditability & transparency** — The top-voted closed issue ([#39903](https://github.com/openai/codex/issues/39903)) and the task-level usage-history request ([#38911](https://github.com/openai/codex/issues/38911)) both point to a strong community demand for finer-grained visibility into what Codex executes and what it cost.
2. **Conversation portability** — The local-export feature request ([#26740](https://github.com/openai/codex/issues/26740)) reflects a desire to move beyond in-app markdown copying toward file-based conversation exports.
3. **Cross-platform parity for new models** — Astra's uneven rollout (Windows picker gap [#42853](https://github.com/openai/codex/issues/42853), Linux CLI gap [#42868](https://github.com/openai/codex/issues/42868)) signals ongoing pressure to synchronize feature availability across all client surfaces.
4. **Multi-device Remote reliability** — iOS Remote listing regression ([#36040](https://github.com/openai/codex/issues/36040)), Windows enrollment failures ([#32164](https://github.com/openai/codex/issues/32164)), and active-writer conflicts ([#40558](https://github.com/openai/codex/issues/40558)) show Remote Control remains a high-priority improvement area.

---

## 6. Developer Pain Points

- **Windows desktop regressions** dominate the noise floor: project-list disappearing after updates ([#42739](https://github.com/openai/codex/issues/42739), [#42867](https://github.com/openai/codex/issues/42867)), pet interaction bugs ([#41960](https://github.com/openai/codex/issues/41960)), Realtime voice overlay failures ([#40239](https://github.com/openai/codex/issues/40239)), and a startup logo/black-screen loop ([#42808](https://github.com/openai/codex/issues/42808)). Windows is clearly the platform with the highest incident density this cycle.
- **Model-availability inconsistency** — GPT-6-Astra works on Bedrock/globals but surfaces unpredictably on Windows and Linux, creating confusion for users who expect feature parity after a release.
- **WebSocket / connectivity fragility** — The persistent reconnect-loop issue ([#18960](https://github.com/openai/codex/issues/18960)) and Remote enrollment hang ([#32164](https://github.com/openai/codex/issues/32164)) indicate underlying transport robustness needs attention.
- **Context bleed between sessions/projects** — Workspace-root leakage ([#24224](https://github.com/openai/codex/issues/24224)) and concurrent-session interference erode trust in multi-project workflows.
- **MCP tool discovery gaps** — [#25353](https://github.com/openai/codex/issues/25353) and [#21654](https://github.com/openai/codex/issues/21654) show that MCP server enablement in settings does not reliably translate to session-visible tools, especially on Windows.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>



# Gemini CLI Community Digest — 2026-09-05

## 1. Today's Highlights

Gemini CLI v0.60.0-nightly shipped with a critical RFC 9207 MCP OAuth issuer-identification fix, while a wave of security-focused PRs hardened sandbox filesystem boundaries, enforced config-file ownership checks, and mitigated NTFS short-name path traversal. On the agent side, the team continues triaging subagent reliability bugs (generalist hangs, MAX_TURNS misreporting) alongside Auto Memory privacy improvements.

---

## 2. Releases

**v0.60.0-nightly.20260904.g87a9c71d5** ([PR #29117](https://github.com/google-gemini/gemini-cli/pull/29117))
- `fix(core)`: Enforces RFC 9207 issuer identification in the MCP OAuth flow, closing a security gap in OAuth token validation.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community |
|---|-------|---------------|-----------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after MAX_TURNS reported as GOAL success | P1 bug where `codebase_investigator` falsely reports success after hitting its turn limit, silently hiding interruptions. | 13 comments · 2 👍 |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | Zero-Dependency OS Sandboxing & Post-Execution Intent Routing | Proposes leveraging Gemini 3's native bash affinity for POSIX tool chaining while adding sandbox isolation—high-impact for security-conscious users. | 9 comments · 1 👍 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs indefinitely | P1 bug: the generalist agent stalls for hours on simple tasks (e.g., folder creation). Community workaround: disable sub-agents. | 8 comments · 8 👍 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | AST-aware file reads, search, and mapping | EPIC exploring whether AST-aware tools can reduce context bloat from misaligned file reads and improve codebase navigation accuracy. | 7 comments · 1 👍 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini does not use skills and sub-agents autonomously | Users report custom skills (e.g., gradle, git) are ignored unless explicitly invoked—undermining one of the core agent-value propositions. | 6 comments · 0 👍 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Deterministic redaction & Auto Memory logging reduction | Auto Memory sends raw transcripts to a background extraction model before redaction occurs; users flag this as a privacy risk. | 5 comments · 0 👍 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell commands stuck "Waiting input" after completion | P1: simple shell commands hang in an "Awaiting user input" state even though they have finished executing. | 4 comments · 3 👍 |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | Browser agent session takeover & lock recovery | Feature request for the browser agent to gracefully recover orphaned or locked sessions instead of fail-fast aborting. | 4 comments · 0 👍 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent fails on Wayland | P1: the browser subagent terminates with GOAL on Wayland compositors, blocking Linux users. | 4 comments · 1 👍 |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Browser Agent ignores `settings.json` overrides | Config values like `maxTurns` set in `settings.json` are silently ignored by the browser agent at runtime. | 3 comments · 0 👍 |

---

## 4. Key PR Progress

| # | PR | Summary |
|---|----|---------|
| [#29215](https://github.com/google-gemini/gemini-cli/pull/29215) | `fix(core): enforce envelope metadata provenance` | Instructs the model to derive author identity and operational status only from verified top-level envelope properties for untrusted MCP/tool outputs. |
| [#29214](https://github.com/google-gemini/gemini-cli/pull/29214) | `fix(sandbox): harden filesystem boundaries` | Isolates sandbox runtime state from host config dirs, replaces host mounts with read-only config files, resolves symlinks in path checks, and decouples container environments. |
| [#29116](https://github.com/google-gemini/gemini-cli/pull/29116) | `fix(core): mitigate NTFS 8.3 short-name paths` | Handles Windows SFNs (`git~1`, `node_m~1`, etc.) in path normalization and the `AllowedPathChecker` safety engine, preventing bypass via short names. |
| [#29115](https://github.com/google-gemini/gemini-cli/pull/29115) | `fix(config): strict permission & ownership checks` | Enforces ACL verification (PowerShell on Windows) for system-wide config files before loading—closes a privilege-escalation vector. |
| [#29170](https://github.com/google-gemini/gemini-cli/pull/29170) | `fix(core): workspace path boundary & symlink checks` | Adds `isPathEscapingWorks` guard on POSIX and extends symlink resolution across command safety and file discovery. |
| [#29208](https://github.com/google-gemini/gemini-cli/pull/29208) | `fix(core): fall back on malformed `agents.json`` | Prevents `TypeError` crashes when `agents.json` has a valid JSON but wrong shape (null, scalar, array) from interrupted saves or sync conflicts. |
| [#29211](https://github.com/google-gemini/gemini-cli/pull/29211) | `fix(cli): stop scheduling state updates from inside an updater` | Fixes React invariant violation caused by `useInputHistoryStore.addInput()` nesting `setPastSessionMessages` inside `setCurrentSessionMessages`. |
| [#29195](https://github.com/google-gemini/gemini-cli/pull/29195) | `fix(checkpoint): degrade non-array history` | `/resume` no longer crashes on checkpoint files with a non-array `history`; degrades to an empty checkpoint gracefully. |
| [#29205](https://github.com/google-gemini/gemini-cli/pull/29205) | `fix(cli): submit MCP prompt text without JSON encoding` | Stops double-encoding MCP prompt responses, preserving embedded quotes and newlines exactly as returned by the server. |
| [#29200](https://github.com/google-gemini/gemini-cli/pull/29200) | `fix(core): enforce MCP policy consistently at runtime` | Aligns MCP policy checks with case-insensitive, whitespace-trimmed server-name matching; treats an empty `mcp.allowed` list as fail-closed. |

---

## 5. Feature Request Trends

1. **AST-Aware Codebase Tooling** — Multiple linked issues (#22745, #22746) explore AST-based reads and searches to replace brute-force context loading with surgical method-bound extraction.
2. **Agent Reliability & Resilience** — Requests for better subagent recovery (#22323), session takeover for browser agents (#22232), and graceful degradation on malformed config/state files.
3. **Zero-Dependency Sandboxing** — #19873 proposes a lightweight, POSIX-native sandbox that leverages the model's bash affinity without external dependencies.
4. **Persistent Task Tracking** — #18836 and #21000 advocate replacing in-context `WriteToDo` with file-based CRUD task persistence to avoid context rot and inter-session memory loss.
5. **Privacy-First Auto Memory** — #26525, #26523, #26522 surface a trend toward deterministic redaction, low-signal session throttling, and quarantine of invalid memory patches.

---

## 6. Developer Pain Points

- **Agent hangs and subagent failures** dominate high-comment issues (#21409, #22323, #21983). The generalist and browser subagents are the most fragile components, especially on Wayland and under turn-limit conditions.
- **Shell command execution stalling** (#25166) — simple commands remain in an "Awaiting user input" state indefinitely, suggesting a reactor/async plumbing bug in the terminal driver.
- **Configuration fragility** — Malformed `agents.json` (#29208), `settings.json` overrides ignored by agents (#22267), and system-config permission gaps are recurring sources of user friction.
- **Security surface from extensions & MCP** — Multiple PRs this cycle (#28863, #29214, #29170, #29215) target extension consent bypasses, sandbox escapes, and untrusted tool-output provenance, indicating an active and expanding threat surface as the ecosystem grows.
- **Context bloat from large file reads** — The model frequently "firehoses" context with oversized files (#19561, #23571), driving demand for AST-aware surgical reads and stricter tmp-script hygiene.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



# GitHub Copilot CLI Community Digest — 2026-09-05

## 1. Today's Highlights

GitHub Copilot CLI v1.0.84-0 landed today with sandbox session bypass controls and fixes for PowerShell sandbox interference and multi-account credential resolution. The community is actively surfacing reliability concerns, particularly around V8 heap OOMs during long-resume sessions, BYOK prompt-caching regressions, and a breaking change to ACP permission flows introduced in v1.0.81.

---

## 2. Releases

**v1.0.84-0** *(today)*
- **Added:** Managed sandbox sessions can now be disabled for the remainder of a session via an approved bypass prompt.
- **Fixed:** PowerShell sandbox no longer blocks write offers to run commands outside the sandbox. Multi-account credential store resolution fixed for sandboxed `gh` commands.
- [https://github.com/github/copilot-cli](https://github.com/github/copilot-cli)

**v1.0.83** *(2026-09-04)*
- Windows 11 taskbar live hover status cards for running Copilot sessions.
- Client ID Metadata Document (CIMD) support for MCP OAuth sign-in.
- Custom agents can specify multiple models in `model` (tried in order) and `model-policy: required` keeps fallback behavior.

**v1.0.83-5**
- Same Windows 11 taskbar cards as v1.0.83.
- macOS/Linux sandboxed commands can no longer reach localhost services, including servers the command itself starts on 127.0.0.1 — a regression for test suites relying on that behavior.

---

## 3. Hot Issues

| # | Title | Reactions | Why It Matters |
|---|-------|-----------|----------------|
| [#2904](https://github.com/github/copilot-cli/issues/2904) | Custom Agent YAML frontmatter should support reasoning effort | 👍 23 · 8 comments | The most-upvoted open issue. Users can pin models per-agent but cannot control `--effort` per agent, forcing a global trade-off. |
| [#2627](https://github.com/github/copilot-cli/issues/2627) | Configurable system prompt — slim down fixed token overhead | 👍 19 · 4 comments | System prompt alone consumes ~20,500 tokens (~10% of a 200K window). Developers want configurable or removable instructions to preserve context for real content. |
| [#232](https://github.com/github/copilot-cli/issues/232) | Add `--system-prompt` parameter | 👍 10 · 5 comments | Complementary to #2627; users want to inject top-level system instructions directly on the CLI without repo-scoped files. |
| [#4525](https://github.com/github/copilot-cli/issues/4525) | v1.0.81-1 sends legacy `initialize` after modern `server/discover` | 👍 3 · 6 comments | Regresses MCP stdio compatibility with Python MCP SDK 2.0.0 dual-era runners — breaks a growing class of MCP servers. Closed but signals fragility in the MCP handshake path. |
| [#4537](https://github.com/github/copilot-cli/issues/4537) | ACP mode auto-approves tool calls again — regression of #845 | 👍 2 · 1 comment | Shell commands, file edits, and deletions execute unattended in `--acp` mode with no permission prompt or session-log entry. A security-relevant regression. |
| [#1688](https://github.com/github/copilot-cli/issues/1688) | Configurable auto-compaction threshold | 👍 5 · 3 comments | Slower high-capacity models (e.g., Claude Opus 4.6) degrade well before the built-in compaction trigger. Users want an explicit token-percentage threshold. |
| [#4699](https://github.com/github/copilot-cli/issues/4699) | OOM crash on long `--resume` sessions; dump files written to cwd | 👍 2 · 1 comment | V8 heap caps at 4 GB during extended resumed sessions; diagnostic reports land in the user's working directory instead of a proper temp/log location. |
| [#4710](https://github.com/github/copilot-cli/issues/4710) | Runaway `copilot-file-search` thread during idle sessions | 0 · 1 comment | An internal search thread continues CPU-pin and unbounded disk writes under `~/.copilot/logs/` while the session reports `idle`. |
| [#4720](https://github.com/github/copilot-cli/issues/4720) | BYOK silently disables prompt caching (~5× cost) | 0 · 0 | Copilot CLI 1.0.82 in BYOK mode sends requests with no `prompt-cache` declaration, zeroing out cached-token credits across the entire session. |
| [#4647](https://github.com/github/copilot-cli/issues/4647) | v1.0.81 broke chroma-mcp compatibility | 👍 0 · 3 comments | Specific MCP server (chroma-mcp) stopped working after the v1.0.81 handshake change — mirrors the broader MCP regression concern in #4525. |

---

## 4. Key PR Progress

Only **1 PR** was active in the last 24 hours:

- [#3771](https://github.com/github/copilot-cli/pull/3771) — *Initial project setup* (created 2026-06-11, stale). No meaningful activity.

No feature or fix PRs landed in the reporting window.

---

## 5. Feature Request Trends

1. **Per-agent / per-session configuration granularity** — Users repeatedly request the ability to tune behavior (reasoning effort, system prompt, model list, compaction thresholds) at the agent or session level rather than globally. See #2904, #232, #2627, #1688.
2. **Context-memory efficiency** — Reducing fixed token overhead (system prompt, tool definitions) and improving compaction timing are top priorities as context windows grow and model costs rise. See #2627, #1688, #4724.
3. **MCP protocol compliance** — The v1.0.81 handshake regression (#4525, #4647) signals community demand for robust dual-era MCP support without silent breakage.
4. **Enterprise controls** — Blocking built-in plugin marketplaces (#4715) and trusted-access alignment (#4322) reflect growing enterprise deployment scenarios.
5. **Input UX polish** — Keyboard shortcut parity (Shift+Arrow selection, #2644) and terminal rendering fixes (#3194, #4707) remain frequent requests.

---

## 6. Developer Pain Points

- **Session persistence bugs** — Long `--resume` sessions crash with OOM (#4699, #4725) and leave diagnostic dumps in unpredictable locations. The idle runaway-search thread (#4710) compounds resource waste.
- **Silent regressions in critical paths** — ACP mode re-auto-approved tool calls without prompting (#4537), and BYOK mode silently disabled prompt caching (#4720). Both represent cost and security surprises with no explicit error.
- **MCP handshake fragility** — The v1.0.81 change broke at least two distinct MCP servers (chroma-mcp, Python MCP SDK 2.0.0 runners) (#4525, #4647), eroding trust in the extension ecosystem.
- **Auto-update side effects** — Running `copilot` from a terminal can overwrite the desktop app's bundled CLI binary (#4728), breaking session resumption in the GUI with no warning.
- **JSON-RPC serialization defects** — Canvas tool calls receive corrupted arguments with trailing `}{}` artifacts (#4721), and the built-in research agent references a non-existent `github/get_me` tool (#4729), suggesting prompt/template drift between agent definitions and available MCP tools.
- **Context bloat with no tuning** — The 20K+ token fixed system prompt (#2627) leaves little headroom on 200K windows, and users lack compaction thresholds (#1688) or per-agent reasoning controls (#2904).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>



# Kimi Code CLI Community Digest — 2026-09-05

## 1. Today's Highlights

No new releases were published in the last 24 hours. The community is actively engaged around two themes: **CLI stability** (MCP timeouts crashing the session, subagents not terminating on ESC) and **input experience** (multiline arrow-key navigation and keybinding overrides). One open PR addresses a bug in `StrReplaceFile` replacement counting.

---

## 2. Releases

No releases in the past 24 hours.

---

## 3. Hot Issues

| # | Issue | Status | Why It Matters | Reaction |
|---|-------|--------|----------------|----------|
| [#1316](https://github.com/MoonshotAI/kimi-cli/issues/1316) | MCP timeout causes kimi-cli to crash entirely | ✅ Closed | A single unresponsive MCP connection brings down the whole CLI session — a critical reliability gap for users relying on multiple MCP servers. | No upvotes; resolved by 2026-09-04. |
| [#1315](https://github.com/MoonshotAI/kimi-cli/issues/1315) | Subagents keep running after hitting ESC | ✅ Closed | Pressing ESC to abort a task leaves background subagents executing, wasting compute and potentially modifying files unintentionally. | Closed by 2026-09-04. |
| [#2634](https://github.com/MoonshotAI/kimi-cli/issues/2634) | Key binding changes (e.g. Ctrl+V paste) not working on Windows Terminal | 🟢 Open | Users on Windows Terminal + PowerShell cannot override default keybindings, blocking basic workflow ergonomics. Still open with no comments. | 0 upvotes, no responses yet. |
| [#1320](https://github.com/MoonshotAI/kimi-cli/issues/1320) | Smart arrow-key navigation for multiline input | ✅ Closed | Arrow keys should move the cursor within multiline input instead of always jumping through command history — a long-standing UX pain point. | Closed by 2026-09-04. |
| [#1313](https://github.com/MoonshotAI/kimi-cli/issues/1313) | Hooks system for notifications & lifecycle events | ✅ Closed | Developers want async callbacks (webhook-style) so the CLI can notify them when agents need attention during long-running tasks. Received 3 upvotes — the most-engaged issue this period. | 3 👍 |
| [#1319](https://github.com/MoonshotAI/kimi-cli/issues/1319) | Local skills management commands (`skills list`, `skills rm`) | ✅ Closed | Custom skills lack discoverability and lifecycle commands unlike MCPs; users requested a unified management interface. | Closed by 2026-09-04. |
| [#290](https://github.com/MoonshotAI/kimi-cli/issues/290) | OpenRouter custom model returns 401 | ✅ Closed | Authentication failures when routing through OpenRouter with custom model endpoints — affects users on non-native providers. | Closed by 2026-09-03; 0 upvotes. |

---

## 4. Key PR Progress

| # | PR | Status | Description |
|---|-----|--------|-------------|
| [#2524](https://github/MoonshotAI/kimi-cli/pull/2524) | `fix(tools): count StrReplaceFile replacements against running content` | 🟢 Open | Fixes a bug where chained `StrReplaceFile` edits computed replacement counts against the *original* file rather than the current in-flight content, causing mismatched edit tracking. References and resolves #2526. |

> Only 1 PR was updated in the last 24 hours. No further PRs to report.

---

## 5. Feature Request Trends

Two clear directions emerge from the closed enhancement issues this period:

1. **Lifecycle & Notification Hooks** — (#1313) Users want the CLI to surface asynchronous signals (webhooks, local servers, push notifications) so they aren't forced to watch the terminal constantly during long agent runs.
2. **Unified Resource Management** — (#1319) Skills currently lack the same operational ergonomics as MCPs (`list`, `rm`, version checks). There's strong appetite for a consistent management surface across all extensible CLI resources.

A third trend worth noting: **input fidelity** — smart cursor navigation (#1320) and customizable keybindings (#2634) both reflect a desire for the CLI to respect user editor conventions rather than imposing its own input model.

---

## 6. Developer Pain Points

- **Fragile MCP integration:** A single timeout in one MCP server crashes the entire CLI session (#1316). Developers need resilient, per-server timeout handling rather than a hard exit.
- **Incomplete abort semantics:** Hitting ESC does not guarantee cancellation of spawned subagents (#1315), creating uncertainty around task safety and resource cleanup.
- **Windows input friction:** Keybinding overrides (especially paste) do not propagate correctly on Windows Terminal / PowerShell (#2634), a recurring compatibility gap.
- **Skill discoverability:** Custom skills have no listing or removal commands, forcing users into manual file-system operations (#1319).
- **Tool-level edit tracking bugs:** `StrReplaceFile` counts edits against stale file state, which can cause silent incorrect behavior in multi-step write workflows (#2524 / #2526).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>



# OpenCode Community Digest — 2026-09-05

---

## 1. Today's Highlights

OpenCode v1.18.28 shipped with GitHub Copilot session tracking and desktop auth/icon improvements. The community remains dominated by two systemic concerns: unbounded memory/SQLite growth on long-lived sessions, and a reported CPU usage regression in recent builds. A new V2 Web UI prompt-composer layout bug on narrow viewports also appeared this cycle.

---

## 2. Releases

**v1.18.28** ([Changelog](https://github.com/anomalyco/opencode/releases/tag/v1.18.28))
- **Core**: Session ID is now forwarded as a GitHub Copilot interaction header, enabling request tracking continuity across session turns.
- **Desktop**: Fixes device-auth client ID mismatch during OpenCode account sign-in; increases the "open-in" app icon size for visibility.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| [#20695](https://github.com/anomalyco/opencode/issues/20695) | Memory Megathread | Centralized tracking for scattered OOM/leak reports; authors explicitly request heap snapshots, not LLM speculation. | 139 comments · 108 👍 |
| [#6231](https://github.com/anomalyco/opencode/issues/6231) | Auto-discover models from OpenAI-compatible providers | Manual model listing in `opencode.json` is tedious for local backends (Ollama, LM Studio) where models change frequently. | 52 comments · 228 👍 |
| [#30086](https://github.com/anomalyco/opencode/issues/30086) | High CPU usage spike | Users report 3 concurrent sessions causing lag that previously tolerated 10+; points to a performance regression in recent releases. | 50 comments · 26 👍 |
| [#33356](https://github.com/anomalyco/opencode/issues/33356) | Unbounded SQLite `event` table growth | `opencode.db` reached 13 GB on long-running instances with no retention or compaction policy, filling volumes to 97–99%. | 27 comments · 9 👍 |
| [#22235](https://github.com/anomalyco/opencode/issues/22235) | VSCode Context Awareness non-functional | Feature parity gap vs Claude Code; users can't confirm whether prerequisite config is missing or the feature is broken. | 13 comments · 7 👍 |
| [#43295](https://github.com/anomalyco/opencode/issues/43295) | V2 Web UI controls overlap send button | On narrow viewports, agent/model/variant selectors render over the submit button, breaking interaction entirely. | 6 comments · 1 👍 |
| [#36808](https://github.com/anomalyco/opencode/issues/36808) | IPv6 blackhole stalls Bun fetch | `opencode.ai` resolves to IPv6-only; Bun does not fallback to IPv4, blocking users on broken IPv6 networks (notably China). | 6 comments |
| [#47312](https://github.com/anomalyco/opencode/issues/47312) | Augure AI model support | New Canadian provider request; signals demand for model-agnostic provider expansion. | 5 comments |
| [#44684](https://github.com/anomalyco/opencode/issues/44684) | Plugin installer timeout on 1.18.21 | NpmInstallFailedError on registry.npmjs.org deps causes silent dead plugins and headless `run/serve` hangs. | 4 comments |
| [#39822](https://github.com/anomalyco/opencode/issues/39822) | Go subscription billing mismatch | $0.35 usage consumed 11% of a 5-hour quota; users report pricing inconsistencies between displayed allowance and actual consumption. | 4 comments · 0 👍 |

---

## 4. Key PR Progress

| # | PR | Type | Summary |
|---|-----|------|---------|
| [#47374](https://github.com/anomalyco/opencode/pull/47374) | Opt-in PWA push notifications | Feature | Encrypted browser push for response-ready and session-error alerts; server sends directly to push services—no Electron wrapper needed. Merged. |
| [#47375](https://github.com/anomalyco/opencode/pull/47375) | Widen new-session prompt to 880px | UX | Extends prompt area beyond the 720px logo while keeping responsive behavior for smaller windows. Open. |
| [#47370](https://github.com/anomalyco/opencode/pull/47370) | Align Desktop worktree location with TUI | Bugfix | Desktop now creates worktrees in the same project-specific data directory as the TUI; respects `XDG_DATA_HOME` when `worktree.create.directory` is omitted. Merged. |
| [#47373](https://github.com/anomalyco/opencode/pull/47373) | Bound permission pattern previews | Bugfix | Follow-up to #47369: long "Always allow" pattern lists are now compactly shown (3 patterns visible) with expand mode instead of silent clipping. Open. |
| [#40523](https://github.com/anomalyco/opencode/pull/40523) | Retry ambiguous prompt admission (TUI) | Bugfix | Fixes race where server-generated session ID + separate admit request could lose durable writes during transport churn, leaving drafts stuck. Merged. |
| [#40522](https://github.com/anomalyco/opencode/pull/40522) | Restore AWS default credential chain for Bedrock | Bugfix | Reinstates profile/SSO/process/instance-role credential resolution lost when Bedrock routing moved off the AI SDK seam in #40165. Merged. |
| [#40520](https://github.com/anomalyco/opencode/pull/40520) | Prevent stale service replacement (CLI) | Bugfix | Fixes updater swapping the executable beneath a running CLI, which caused version mismatch crashes (A kills B, B respawns and is rejected). Merged. |
| [#40519](https://github.com/anomalyco/opencode/pull/40519) | Wait for session model hydration (TUI) | Bugfix | TUI now waits for selected models to fully hydrate before falling back, preserving user selection during startup race conditions. Merged. |
| [#40513](https://github.com/anomalyco/opencode/pull/40513) | Refresh Console auth before catalog load | Bugfix | Retries expired OAuth after the integration registry batch becomes visible; removes legacy `opencode` fallback models when Console connection fails. Merged. |
| [#40509](https://github.com/anomalyco/opencode/pull/40509) | Gate durable event persistence | Architecture | Adds `persistDurableEvents` toggle; V1 and HTTP runtimes disable it by default while V2 retains it. Directly addresses the SQLite growth problem (#33356). Merged. |

---

## 5. Feature Request Trends

- **Local-provider model auto-discovery** (#6231, 228 👍) — the strongest single signal; users want the tool to enumerate Ollama/LM Studio/llama.cpp models automatically instead of manual config.
- **Provider expansion** (#47312 Augure AI; #47349 gateway faults for Muse Spark / Grok) — demand for broader model coverage and robustness at the Zen/Go gateway layer.
- **Push notifications for PWA** (#47374, merged) — indicates appetite for background awareness without desktop clients.
- **Temperature per-provider configuration** (#8101, closed) — users expect fine-grained model knobs, not just agent-level settings.
- **Managed OTLP / telemetry config** (#47351) — enterprise users want system-managed observability settings alongside macOS managed preferences.
- **Non-git project session discovery on Windows** (PR #40503, merged) — cross-platform parity for project lifecycle management.

---

## 6. Developer Pain Points

1. **Memory & database bloat** — Issues #20695 and #33356 are the heaviest recurring complaints. The event-sourcing `event` table grows without pruning; the core team partially addressed this by gating durable persistence in PR #40509, but long-term retention/compaction policy is still absent.
2. **CPU regression in v1.18.x** — Issue #30086 reports a dramatic spike that limits concurrent sessions from 10+ down to ~3. Issue #31664 identifies specific GPU-accelerated CSS animations (`clip-path` with `round(999px)`) as a contributor.
3. **Billing opacity** — Issue #39822 and its Chinese-language duplicate #47317 show users cannot reconcile displayed Go allowances with actual API consumption; pricing transparency needs improvement.
4. **Plugin ecosystem fragility** — Issue #44684 shows plugin installation silently fails behind registry timeouts, producing boot hangs with no diagnostic. Network resilience for `registry.npmjs.org` (and private registries) is a known weak point.
5. **IPv6 accessibility** — Issue #36808 blocks users on blackholed-IPv6 networks (particularly in China); Bun's lack of IPv4 fallback compounds the problem.
6. **V2 Web UI responsiveness** — Issue #43295 reveals that narrow-viewport layouts were not stress-tested, causing controls to overlap interactive elements.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



# Pi Community Digest — 2026-09-05

## 1. Today's Highlights

Pi v0.85.0 shipped with persistent Claude thinking-effort support across Anthropic transports. The community is actively tackling a dependency break in v0.85.0 (`@earendil-works/pi-server` missing from declared deps), alongside a wave of TUI/UX improvements including faster Alt-scrolling, collapsible work-process grouping, and a Nix flake. Provider expansion continues with first-class support for Amazon Bedrock Mantle, Meta Muse OAuth, and OrcaRouter.

---

## 2. Releases

**v0.85.0** — The latest release adds persistent per-turn `thinking effort` for Anthropic models, preserving and recovering from signed-thinking mismatches across transport boundaries. ([Model Configuration Docs](https://github.com/earendil-works/pi/blob/v0.85.0/packages/coding-agent/docs/models.md#model-configuration))

> ⚠️ **Known issue:** v0.85.0's published `dist/cli.js` statically imports `@earendil-works/pi-server`, which is not declared as a dependency — fresh installs will fail with `ERR_MODULE_NOT_FOUND`. Multiple reports filed; tracked below.

---

## 3. Hot Issues

| # | Title | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| [#5363](https://github.com/earendil-works/pi/issues/5363) | Add `amazon-bedrock-mantle` provider | Enables OpenAI-compatible Bedrock Mantle models, which use a different API than the existing Converse-based provider. Critical for AWS users. | 17 comments · 15 👍 · in-progress |
| [#7730](https://github.com/earendil-works/pi/issues/7730) | High CPU usage on macOS with long sessions | Users report 100%+ CPU swings and 600–800 MB memory on extended sessions; likely context-length related. | 15 comments · 10 👍 |
| [#5593](https://github.com/earendil-works/pi/issues/5593) | Tab-completing slash commands inserts trailing space | A UX bug that breaks argument autocomplete flow — pressing Space after Tab-completion no longer triggers it. | 7 comments |
| [#9052](https://github.com/earendil-works/pi/issues/9052) | Fullscreen TUI scroll wheel 3× slower | Directly impacts fullscreen-mode users; a PR (#9166) already addresses it. | 5 comments · 2 👍 |
| [#8760](https://github.com/earendil-works/pi/issues/8760) | OpenRouter `:free` models fail with HTTP 400 | Pi sends `max_tokens` equal to the catalog's `maxOutputTokens`, exceeding upstream hard limits — affects multiple free models. | 5 comments |
| [#9132](https://github.com/earendil-works/pi/issues/9132) | v0.85.0: `pi-server` missing from declared deps | Blocks fresh installs; the published tarball imports `@earendil-works/pi-server` without declaring it. Multiple duplicate reports. | 4 comments · 5 👍 |
| [#8720](https://github.com/earendil-works/pi/issues/8720) | Whitespace-only tool results brick sessions | OpenAI-compatible providers reject empty/whitespace tool content with 400; the bad message persists in history, permanently breaking the session. | 4 comments |
| [#8684](https://github.com/earendil-works/pi/issues/8684) | `PI_OFFLINE` silently disables model discovery | Undocumented side-effect: `PI_OFFLINE` also disables all provider model-catalog network discovery, contradicting its documented scope. | 4 comments |
| [#8857](https://github.com/earendil-works/pi/issues/8857) | No tool-call execution timeout in agent loop | A hung tool (e.g., `psql` waiting for a DB connection) causes the agent run to stall indefinitely — neither LLM stream timeout nor bash timeout cover this phase. | 3 comments |
| [#9165](https://github.com/earendil-works/pi/issues/9165) | Claude Opus 5 via OpenRouter rejects `per-message output_config` | OpenRouter-specific: other providers work fine. Suggests an adapter-level mismatch for per-message output config. | 2 comments |

---

## 4. Key PR Progress

| # | Title | Summary |
|---|-------|---------|
| [#9166](https://github.com/earendil-works/pi/pull/9166) | Accelerate Alt-modified wheel scrolling | Scroll 5× faster when Alt is held; closes #9052. |
| [#9096](https://github.com/earendil-works/pi/pull/9096) | Add Meta provider with Muse subscription OAuth | First-class Meta provider; notable quirks: daily re-minted API token (not rolling refresh), and "fake" streaming (burst output). |
| [#9135](https://github.com/earendil-works/pi/pull/9135) | Add OrcaRouter as a first-class provider | OpenAI-compatible gateway with adaptive routing, auto failover, and live catalog discovery. |
| [#9121](https://github.com/earendil-works/pi/pull/9121) | Collapsible work-process grouping (Alt+O) | Collapses intermediate thinking blocks and tool outputs into concise summary lines per agent invocation. |
| [#9163](https://github.com/earendil-works/pi/pull/9163) | Simplify clipboard handling | Replaces the heavy Rust clipboard library with a lighter approach, enabling NixOS builds. |
| [#9137](https://github.com/earendil-works/pi/pull/9137) | Add Nix flake | WIP — brings Nix-packaged installation support. |
| [#9116](https://github.com/earendil-works/pi/pull/9116) | Mid-conversation system messages | Foundation layer enabling extensions to inject system messages mid-session without rewriting the top-level prompt. |
| [#9117](https://github.com/earendil-works/pi/pull/9117) | Prompt/tool changes as system message deltas | Second layer: wires the coding agent to deliver changes as deltas instead of full prompt rewrites. |
| [#9149](https://github.com/earendil-works/pi/pull/9149) | Fix selector save keybindings | Replaces hardcoded `Ctrl+S` with `app.models.save` and `app.thinking.save` bindings; fixes #8797. |
| [#9131](https://github.com/earendil-works/pi/pull/9131) | Durable Object SQLite session backend | Adds Workers-safe SQLite session storage via Durable Objects — no `node:sqlite` or filesystem dependency. |

---

## 5. Feature Request Trends

- **Provider diversity** — Strong momentum for new first-class providers (Bedrock Mantle, Meta Muse, OrcaRouter) and OpenAI-compatible gateway support.
- **TUI UX polish** — Multiple requests for scroll acceleration, collapsible output grouping, configurable padding, and improved fullscreen mode behavior.
- **Extension middleware** — Growing demand for mid-conversation system messages and session relocation APIs, enabling richer extension workflows.
- **Dependency minimization** — Interest in a lighter `pi-ai` core and Nix flake for constrained environments (browser, containers, NixOS).
- **Session resilience** — Requests around tool-call timeouts, whitespace-safe tool results, and auto-compaction pre-flight accuracy.

---

## 6. Developer Pain Points

1. **v0.85.0 dependency break** — The most urgent issue: `@earendil-works/pi-server` is imported but not declared, causing `ERR_MODULE_NOT_FOUND` on fresh installs. At least 4 duplicate reports filed in a single day.
2. **Undocumented `PI_OFFLINE` scope creep** — The env var silently disables model catalog discovery beyond its documented intent, surprising offline-mode users.
3. **Whitespace-only tool results crash sessions** — A silent failure mode where providers reject empty content, poisoning the conversation history irreversibly.
4. **No agent-loop tool timeout** — Hung tools (e.g., dangling DB connections) have no backstop; neither the LLM stream timeout nor bash-level timeouts catch this phase.
5. **macOS CPU/memory regressions** — Long sessions on macOS exhibit sustained high CPU (100%+) and 600–800 MB memory, correlated with session/context length.
6. **Hardcoded keybindings** — `/model` and `/thinking` selectors bypass `keybindings.json` and hardcode `Ctrl+S`, breaking remapped key schemes (#8797, now fixed in #9149).
7. **OpenRouter `:free` model limits** — Pi's `max_tokens` selection exceeds upstream provider limits for free-tier models, producing widespread 400 errors.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>



# Qwen Code Community Digest — 2026-09-05

## 1. Today's Highlights

The community is focused on two major thrusts: migrating the TUI rendering layer from `ink` to OpenTUI (#8662, 30 comments), and hardening the background subagent / daemon architecture with new session lifecycle management and reliability fixes. Meanwhile, several P1/P2 bugs surfaced around multi-turn API failures (Cerebras), approval-classifier gaps in AUTO mode, and CI performance regression from module import costs.

## 2. Releases

No new releases in the last 24 hours.

## 3. Hot Issues

| # | Title | Why It Matters |
|---|-------|---------------|
| [#8662](https://github.com/QwenLM/qwen-code/issues/8662) | Migrate TUI rendering layer from ink to OpenTUI (tracking) | Largest architectural shift this cycle; the current `ink 7 + React 19` stack requires a ~1037-line patch and a custom Virtual Viewport, causing flicker and structural bugs. 30 comments show heavy community interest. |
| [#10908](https://github.com/QwenLM/qwen-code/issues/10908) | CI test time is bound by module import cost, not scheduling | The `cli` workspace spent **2223 s** collecting modules vs 1372 s running tests. This bottleneck inflates CI runtime across all workspaces and blocks faster iteration. |
| [#10932](https://github.com/QwenLM/qwen-code/issues/10932) | Voice dictation cannot use Token Plan ASR | Model Studio's Token Plan serves `qwen-audio-3.0-asr-flash`, but Qwen Code's voice pipeline hardcodes legacy model IDs, gating a feature users expect to just work. |
| [#11045](https://github.com/QwenLM/qwen-code/issues/11045) | Cerebras multi-turn requests fail with 400 | Every turn after the first against a Cerebras-hosted OpenAI-compatible model returns `400 status code (no body)` — a blocking bug for users of that provider. |
| [#11031](https://github.com/QwenLM/qwen-code/issues/11031) | Stop embedding Web Shell runtime in every HTML export | Each exported HTML file is ~19.5 MB because the full React + Web Shell runtime is duplicated per file. Reducing this would improve distribution and storage dramatically. |
| [#10953](https://github.com/QwenLM/qwen-code/issues/10953) | Todo plan state goes stale while delegating to subagents | Plans froze for over 55 minutes while foreground subagents advanced through four plan nodes — the active-todo reminder never fired, breaking user visibility into long-running multi-agent work. |
| [#11019](https://github.com/QwenLM/qwen-code/issues/11019) | AUTO mode: user approvals never reach the classifier | Users confirmed a change three times via `ask_user_question` and it was still blocked; additionally, approval mode reverts to AUTO on session rebuild. A critical safety-and-usability bug. |
| [#10797](https://github.com/QwenLM/qwen-code/issues/10797) | Non-thinking scaffolding tags echoed into user-visible output | Tool-result blocks and system reminders leak into the rendered output, creating noisy, confusing responses. Extends a known class of "thinking-tag leak" bugs. |
| [#8177](https://github.com/QwenLM/qwen-code/issues/8177) | macOS + tmux IME causes cursor misplacement and garbled input | Chinese IME input in tmux sessions produces corrupted text and offset cursors — a long-standing pain point for East Asian users on macOS. |
| [#10872](https://github.com/QwenLM/qwen-code/issues/10872) | Pluggable middleware for language-aware rewriting of thinking output | Requests a public middleware API to translate or transform reasoning output before it reaches the client, useful for multilingual sessions and content filtering. |

## 4. Key PR Progress

| # | Title | Description |
|---|-------|-------------|
| [#10942](https://github.com/QwenLM/qwen-code/pull/10942) | `qwen sessions ps` lists managed Agent View sessions | Extends the sessions CLI to walk the Agent View supervisor registry, surfacing lifecycle state beyond what the live-process table holds. |
| [#10949](https://github.com/QwenLM/qwen-code/pull/10949) | Peek, answer, and stop a background session | Adds three subcommands (`peek`, `answer`, `stop`) for managing Agent View sessions from the terminal, closing the loop opened by #10942. |
| [#11046](https://github.com/QwenLM/qwen-code/pull/11046) | Wait for startup chat before OpenTUI turn sends | Fixes a race where prompts typed during session initialization were silently dropped with `Chat not initialized`. |
| [#11003](https://github.com/QwenLM/qwen-code/pull/11003) | Delegate a subagent turn to an external agent over ACP | Enables subagent definitions to hand their turn to an external process (starting with Claude Code) via ACP, expanding the Dynamic Workflow executor model. |
| [#10962](https://github.com/QwenLM/qwen-code/pull/10962) | Bridge a browser-granted local directory into a session | Lets developers in browser-based Web Shell sessions mount a local directory chosen via the browser's file picker, solving the remote-daemon filesystem visibility problem. |
| [#10899](https://github.com/QwenLM/qwen-code/pull/10899) | Make background agent aggregation optional in DingTalk | Background Agent responses now stream as soon as each segment is ready, prefixed with `Agent · <name>`, with an opt-in mode for aggregated notifications. |
| [#8927](https://github.com/QwenLM/qwen-code/pull/8927) | Bound session lifetime with `sessionRotation` | Adds per-channel `sessionRotation` with `maxTurns` and time-based bounds, automatically starting a fresh session when a route's session expires. |
| [#10347](https://github.com/QwenLM/qwen-code/pull/10347) | Auto-retry transient network errors where Ctrl+Y is unavailable | Wraps low-level EOF / peer-closed errors as retryable transport failures instead of fail-fast 4xx client errors, improving channel resilience. |
| [#10917](https://github.com/QwenLM/qwen-code/pull/10917) | Let tests resolve core modules individually | Teaches the CLI test runner to resolve individual core modules, cutting the module-import cost that #10908 flags as a CI bottleneck. |
| [#10439](https://github.com/QwenLM/qwen-code/pull/10439) | Watch `/resolve` for consecutive failures and file a tracking issue | Scheduled workflow tracks `@qwen-code /resolve` failures, auto-filing and updating a single tracking issue to reduce noise from flaky CI runs. |

## 5. Feature Request Trends

- **Background / daemon session tooling** — Multiple requests converge on better management of long-running and standalone sessions: #8908 (daemon-managed chats without a workspace), #10949 (peek/answer/stop commands), #11024 (worktree session lifecycle cleanup). The community wants `qwen serve` to feel as controllable as the interactive TUI.
- **Multilingual thinking & output** — #10872 (language-aware middleware for thinking output) and #3787 (ACP thinking language inconsistency) both signal demand for non-English reasoning visibility and control.
- **OpenTUI parity & Web Shell UX** — #8662 (ink → OpenTUI migration), #11017 (Quick Chat floating surface), and #11031 (export bloat) show users pushing for a more responsive, modular, and lighter-weight interactive experience.
- **Provider & integration robustness** — Requests for per-process config dirs (#10984), Token Plan ASR support (#10932), and DingTalk streaming (#10899) reflect a community integrating Qwen Code into diverse production workflows.

## 6. Developer Pain Points

1. **CI slowness from module imports** — The `cli` workspace spends more time resolving dependencies than running tests (#10908). Teams are actively working around it (#10917), but the root cause remains a structural performance drag.
2. **TUI rendering fragility** — The patched `ink` renderer causes flicker, cursor错位 on macOS + tmux (#8177), slash-command output loss (#10905), and prompt races during startup (#11046). The OpenTUI migration (#8662) is the community's chosen path forward but is a large undertaking.
3. **Subagent visibility gaps** — Todo plans going stale (#10953), approval classifiers being bypassed in AUTO mode (#11019), and scaffolding leaking into output (#10797) all point to insufficient observability and guardrails in multi-agent workflows.
4. **Provider-specific multi-turn breakage** — Cerebras (and potentially other OpenAI-compatible providers) reject subsequent turns with opaque 400 errors (#11045), suggesting a session-state or `reasoning_content` handling bug in the request pipeline.
5. **Export bloat** — Embedding the full Web Shell runtime in every HTML export (#11031) makes generated files impractically large for sharing or archiving.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



# DeepSeek TUI Community Digest — 2026-09-05

## 1. Today's Highlights

The Codewhale community pushed four merged fixes in the last 24 hours, most notably a PR that resolves a transcript cluttering bug where `todo_write` snapshots accumulated indefinitely without a clear path to reset. Meanwhile, a major dependency upgrade to `rmcp` 3.2.0 (the Rust MCP SDK) landed alongside several other Dependabot bumps, signaling continued infrastructure modernization.

---

## 2. Releases

No new releases published in the last 24 hours.

---

## 3. Hot Issues

**#5860 — Continuous Self-Learning from Dialog (Automatic Skill Evolution)** [OPEN] [enhancement]
A long-standing feature gap: Codewhale's Skills System requires manual `SKILL.md` creation, but the agent never auto-extracts recurring problem patterns into reusable skills. *Why it matters:* Without automatic pattern extraction, the agent cannot evolve its capabilities over time — each session starts from scratch. (3 comments)
→ https://github.com/Hmbown/Codewhale/issues/5860

**#5872 — Add rusty_alloc as an opt-in feature next to mimalloc** [OPEN] [enhancement]
Proposes adding `rusty_alloc` as an alternative to `mimalloc` to eliminate the C compiler / build-script dependency for cross-compilation targets. *Why it matters:* Lowers the barrier for contributors and users on platforms where a C toolchain is unavailable, directly improving TUI agent build ergonomics. (1 comment)
→ https://github.com/Hmbown/Codewhale/issues/5872

**#5871 — To-do list history clutters the transcript with no way to clear it** [OPEN] [bug]
Every `todo_write` call renders a full snapshot card; clearing the list doesn't remove prior snapshots, causing a "push-down history" of stale cards. *Why it matters:* Degrades the TUI reading experience in long sessions and obscures current state. *Status:* Fix already merged in PR #5873. (1 comment)
→ https://github.com/Hmbown/Codewhale/issues/5871

**#5866 — Key Ophthalmology CPT & ICD-10 Updates for 2026** [CLOSED]
Spam/promotional issue closed by maintainers. No community discussion.
→ https://github.com/Hmbown/Codewhale/issues/5866

---

## 4. Key PR Progress

**PR #5873 — fix(tui): replace stale todo transcript snapshots** [OPEN]
Keeps only the newest successful `todo_write` snapshot visible in the transcript and hides empty current snapshots without losing stored conversation context. Fixes #5871. Validated with 9 passing tests.
→ https://github.com/Hmbown/Codewhale/pull/5873

**PR #5870 — Fix: Tools: atomic commit splitting — order unrelated changes by dependency** [OPEN]
Addresses #3999 by ensuring atomic commit splitting orders unrelated changes by dependency graph and rejects cycles. Generated with AI assistance and pre-submitted for syntax/change-scope validation.
→ https://github.com/Hmbown/Codewhale/pull/5870

**PR #5869 — fix(shell): preserve task origin in job snapshots** [OPEN]
Background shell job snapshots and completion events now carry stable origin identifiers, preventing earlier jobs' error output from being misattributed to newer tool cards via heuristic matching.
→ https://github.com/Hmbown/Codewhale/pull/5869

**PR #5868 — feat: send x-opencode-session header for OpenCode Go/Zen providers** [OPEN]
Adds the `x-opencode-session` header so OpenCode Go can optimize prompt caching and route traffic per-conversation. Previously, Codewhale's default UA caused misclassification.
→ https://github.com/Hmbown/Codewhale/pull/5868

**PR #5867 — feat(config): add [reasoning_only] section for retry count** [OPEN]
Makes the `MAX_REASONING_ONLY_REPROMPTS` limit (previously hardcoded to 2) configurable via a new `[reasoning_only]` config section. Fixes silent retry behavior when reasoning models return only hidden thinking.
→ https://github.com/Hmbown/Codewhale/pull/5867

**PR #5877 — chore(deps): bump rmcp from 2.2.0 to 3.2.0** [OPEN]
Major bump of the Rust MCP SDK across two minor versions. Introduces new macros and likely breaking API changes; significant infrastructure upgrade for the agent's tool-calling layer.
→ https://github.com/Hmbown/Codewhale/pull/5877

**PR #5880 — chore(deps): bump jsonschema from 0.46.10 to 0.52.1** [OPEN]
Large version jump in the JSON Schema validation library. Ensures schema compliance checks stay current with downstream spec changes.
→ https://github.com/Hmbown/Codewhale/pull/5880

**PR #5881 — chore(deps): bump tower-http from 0.7.0 to 0.7.1** [OPEN]
Patch bump for the HTTP middleware stack. Routine security/stability update.
→ https://github.com/Hmbown/Codewhale/pull/5881

**PR #5875 — chore(deps): bump base64 from 0.22.1 to 0.23.1** [OPEN]
Minor upgrade to the base64 encoding crate. Covers bug fixes and potential API improvements in encode/decode paths.
→ https://github.com/Hmbown/Codewhale/pull/5875

**PR #5876 — chore(deps): bump lru from 0.18.2 to 0.18.3** [OPEN]
Patch bump for the LRU cache library. Likely contains edge-case fixes for cache eviction behavior.
→ https://github.com/Hmbown/Codewhale/pull/5876

---

## 5. Feature Request Trends

1. **Auto-evolving skills** — Issue #5860 reflects strong community desire for the agent to learn from its own dialog history rather than relying on static, manually-authored `SKILL.md` files.
2. **Build ergonomics for non-C rust targets** — Issue #5872 highlights a recurring theme: reducing hard C-dependency requirements to support broader cross-compilation and contributor onboarding.
3. **Configurable reasoning-loop behavior** — PR #5867 shows demand for user-facing knobs on model retry logic, particularly for reasoning-only modes where defaults are often too aggressive or too timid.
4. **Provider-compatibility headers** — PR #5868 indicates ongoing need to align Codewhale's HTTP identity with third-party provider expectations (OpenCode Go/Zen, prompt caching).

---

## 6. Developer Pain Points

- **Transcript bloat from tool snapshots:** Issue #5871 (now fixed in PR #5873) was a frequent complaint — `todo_write` cards accumulated without a reset mechanism, degrading readability in long sessions.
- **C compiler dependency for allocators:** Issue #5872 points to the friction around `mimalloc`'s build-script requirement; developers want pure-Rust allocation backends as first-class alternatives.
- **Shell job attribution ambiguity:** PR #5869 addresses a subtle but impactful pain point where background job errors were visually projected onto the wrong tool card, confusing debugging.
- **Hardcoded retry limits in reasoning mode:** PR #5867 reveals that developers felt the previous hardcoded `MAX_REASONING_ONLY_REPROMPTS = 2` was too rigid for diverse model behaviors.

---

*Digest generated from github.com/Hmbown/Codewhale data as of 2026-09-05.*

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>



# ComfyUI Community Digest — 2026-09-05

## 1. Today's Highlights

MiniMax H3 video generation continues to surface critical GPU stability issues across both NVIDIA (RTX 5070 Ti TDR black-screens) and AMD/ROCm (SIGSEGV in the Qwen3-VL vision encoder). Meanwhile, the core team shipped a burst of partner-node updates—Meta Muse Image, Claude Fable 5.1, MiniMax H3 Max Turbo, and Recraft V4 Styles—while also introducing the Comfy Compiler for memory-optimized execution and accepting a Sparse Attention node from kijai.

---

## 2. Releases

No new release was published in the last 24 hours. Two backport releases closed recently: **v0.34.4** (PR #16106) and **v0.34.1** (PR #15905), cherry-picking partner-node and workflow-template updates onto the stable branch.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| #15255 | Dynamic VRAM streaming → CUDA OOM (regression after Aug 3 2026) | Core memory-management path regressed; all generations fail. Maintainers confirmed the bug and escalated to NVIDIA. | 69 comments; workaround: `--cuda-device 0` or `--disable-pinned-memory` for multi-GPU. |
| #15488 | MiniMax H3 "GPU is lost" / TDR on RTX 5070 Ti (64 GB RAM) | Reproducible driver-level crash on single-GPU Windows; capped to 32 GB RAM the same workload is stable. Points to a memory-pressure interaction with TDR. | 12 comments; high relevance for video-creation users on consumer cards. |
| #15895 | MiniMax H3 I2V crashes with SIGSEGV in Qwen3-VL conv on ROCm/AMD | Breaks AMD users entirely on image-to-video; ROCm backend incompatibility in the vision encoder. | 3 comments; opened by a ROCm power-user, signals growing AMD adoption pain. |
| #16062 | ROCm/Windows RX 9070 XT — severe GPU/UI stall during VAE decode with DynamicVRAM | New AMD flag + DynamicVRAM combo exposes a stall bug distinct from the CUDA OOM in #15255. | 7 comments; another ROCm/Windows signal. |
| #16102 | ROCm/Windows gfx1151 — access violation in `vbar_allocate` (LTXVLatentUpsampler) | Stock LTX-2.5 I2V template crashes on AMD; a high-profile workflow template is broken. | Opened today, 0 comments so far. |
| #15973 | ACE-Step 1.5 memory leak / CPU fallback on Windows/AMD | Persistent leak even with custom nodes disabled; severe slowdowns and OOM. | 12 comments; affects a popular animation workflow. |
| #16010 | WebSocket reconnect can unregister the replacement client | Race condition where stale handlers tear down the new socket, disrupting live workflows and App-mode users. | 1 comment; architectural bug with user-facing symptom. |
| #16011 | Unbounded userdata traversal blocks the aiohttp event loop | Large directory trees freeze HTTP/WebSocket completely; affects asset scanners and App mode. | 1 comment; performance-critical for cloud/self-hosted deployments. |
| #14743 | Eventual black images (breaks randomly at any step) | Non-deterministic output corruption; hard to reproduce but affects production pipelines. | 4 comments; frustrating for users. |
| #16087 | Stable Audio 3 VAE produces broadband noise on MPS & CPU | Round-trip encode→decode destroys audio on Apple Silicon and CPU; a new model integration is fundamentally broken on non-CUDA devices. | Opened today; no comments yet. |

---

## 4. Key PR Progress

| # | PR | Description |
|---|----|-------------|
| #15861 | **Introduce Comfy Compiler** (CORE-389) | Two-layer compilation: aimdo memory compiler (v0.5.0) + existing CUDA graphs. Minimizes one-time CUDA memory allocations; significantly reduces allocation overhead during generation. |
| #16072 | **Add Sparse Attention node** | Adds a node using the new `comfy-kitchen` sparse-attention backends, enabling more efficient long-sequence inference. |
| #16078 | **[Partner Nodes] Meta Muse Image** | Two new nodes (`MetaMuseImageTextToImageApi`, `MetaMuseImageEditApi`) under `partner/image/Meta`. |
| #16085 | **[Partner Nodes] Claude Fable 5.1** | Adds Claude Fable 5.1 to the Claude partner node; includes `xhigh` and `max` reasoning levels where supported. |
| #16094 | **[Partner Nodes] MiniMax H3 Max Turbo** | Adds a Max Turbo option to H3 text-to-video and first-last-frame partner nodes. |
| #16101 | **Fix userdata traversal event loop blocking** | Moves both userdata directory traversals to worker threads so slow/large trees no longer block the aiohttp event loop. Includes regression tests. |
| #16068 | **Fix Trellis2 sparse RoPE shape for accelerated backends** | Fixes `ValueError: not enough values to unpack (expected 4, got 3)` in Trellis2 Shape Generation by correcting RoPE tensor unpacking in the triton kernel. |
| #16099 | **Fix false-positive MultiGPU memory-leak warning** | Resolves spurious `"memory leak with model ..."` warnings caused by `ModelPatcher.deepclone_multigpu()` handling of dynamically recreated models. |
| #16095 | **Add native LLaDA-Image support** | Draft PR adding a dependency-free native implementation of inclusionAI/LLaDA-Image to core; awaiting maintainer feedback on AIO ownership and Turbo sampler. |
| #16083 | **Allow disconnected Switch inputs** | Enables optional/disconnected switch inputs with sensible `None` behavior—useful for I2V ↔ T2V conditional workflows. |

---

## 5. Feature Request Trends

- **New model integrations** dominate open feature requests: LLaDA-Image (#16088 / #16095), VDN-Minimax-H3 (#16092), Twinflow Z-Image Turbo (#13285), and continued demand for partner-node coverage (Anthropic, Meta, Tripo, Recraft).
- **Search & discoverability**: Global substring search for the LoRA tree picker (#13494) reflects ongoing friction with the hierarchical UI.
- **Cross-platform parity**: Strong demand for ROCm/AMD and Apple Silicon (MPS) support, especially for video models (MiniMax H3, LTX-2.5, Stable Audio 3).
- **Performance tooling**: The Comfy Compiler (#15861) and Sparse Attention node (#16072) signal community appetite for memory-efficiency features beyond static quantization.

---

## 6. Developer Pain Points

1. **GPU instability across vendors** — CUDA OOM regressions (#15255), NVIDIA TDR crashes (#15488), ROCm SIGSEGVs (#15895, #16062, #16102), and MPS audio corruption (#16087) collectively show that multi-vendor hardware coverage remains the top reliability gap.
2. **DynamicVRAM regressions** — The Aug 3 2026 change introduced at least two distinct breakages (CUDA OOM on multi-GPU, ROCm access violations), suggesting the streaming path needs more rigorous cross-platform testing.
3. **False-positive warnings** — The MultiGPU memory-leak warning (#16098 / #16099) and the `safe_load` dead parameter (#16089) point to code-quality drift in the core that generates noise for users.
4. **Event-loop blocking** — Synchronous filesystem traversals (#16011) and WebSocket reconnect races (#16010) are architectural debt that hurts App-mode and multi-user deployments.
5. **Hardcoded assumptions** — Trellis2's `lr_resolution = 512` hardcode (#16100) and similar rigidity break workflows that use non-standard resolutions; flexibility requests recur.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

` in user messages across thinking models - 11 comments, 1 👍, updated 2026-09-04. This is a bug affecting Cloud API and thinking models, likely impacts many users.

3. #18074 [CLOSED] Granite 4.2 models do not respect safe default context - 9 comments, 0 👍, updated 2026-09-04. About OOM kills due to high context length. Important for Granite model users.

4. #11659 [CLOSED] Allow users to set context length like we used to instead of using terrible GUI presets - 6 comments, 5 👍, updated 2026-09-04. Feature request about context length control.

5. #16547 [CLOSED] error loading model: unknown model architecture: 'mllama' (Llama3.2-vision) - 6 comments, 2 👍, updated 2026-09-04. Bug with Llama3.2-vision.

6. #17279 [CLOSED] 导入GGUF量化版本的模型GLM-5.2-IQ2_M/UD-IQ2_M报错llama-quantize审核不通过？ - 6 comments, 0 👍, updated 2026-09-04. Chinese issue about GGUF validation.

7. #18220 [CLOSED] Regression: Gemma 4 26B A4B enters reasoning loop instead of issuing tool calls after Ollama update - 4 comments, 0 👍, updated 2026-09-04. Regression bug with tool calls.

8. #18229 [OPEN] Loaded context length: source not shown – silent deviation from Modelfile num_ctx - 2 comments, 0 👍, updated 2026-09-04. About context length source visibility.

9. #18117 [OPEN] Bug: Vulkan buffer allocation fails with larger prompt despite >14GB VRAM free - 2 comments, 0 👍, updated 2026-09-04. Vulkan allocation bug.

10. #18226 [OPEN] Anthropic-compatible /v1/messages: "failed to parse grammar" when tool schema pattern contains \/ or \- - 1 comment, 0 👍, updated 2026-09-04. Grammar parsing bug with escaped characters.

11. #18225 [OPEN] 0.33.x: ~5x slower token generation than 0.32.13 on CUDA - 1 comment, 0 👍, updated 2026-09-04. Performance regression.

12. #18221 [OPEN] --hidethinking flag has no effect with maternion/ling-3.0-tiny:8b-Q4_K_M - 1 comment, 0 👍, updated 2026-09-03. Flag not working.

13. #18242 [OPEN] Can't set custom values for Context Length - 0 comments, 0 👍, updated 2026-09-04. Custom context length not accepted.

14. #18241 [OPEN] jinja exception - 0 comments, 0 👍, updated 2026-09-04. Jinja template error.

15. #18232 [OPEN] CUDA crash on Blackwell RTX 5060 Ti — root cause: num_ctx affects Flash Attention MMA kernel shared memory allocation - 0 comments, 0 👍, updated 2026-09-04. CUDA crash on new GPU.

16. #18231 [OPEN] MLX runner: fatal OOM at long context — prefix-cache eviction only counts paged-out snapshots, no alloc-failure retry - 0 comments, 0 👍, updated 2026-09-04. MLX OOM issue.

17. #18230 [CLOSED] @AKB0700 I've opened a new pull request... - seems irrelevant, maybe a meta issue.

I'll pick 10 that are most noteworthy: prioritize open issues with recent activity, high comments, or significant bugs. I'll include a mix of closed and open. Let's select:

1. #14116 (closed, high engagement)
2. #17248 (open, Cloud API bug)
3. #18074 (closed, Granite OOM)
4. #11659 (closed, context length control)
5. #16547 (closed, Llama3.2-vision)
6. #18220 (closed, regression)
7. #18226 (open, grammar parsing)
8. #18225 (open, performance regression)
9. #18232 (open, CUDA crash on Blackwell)
10. #18231 (open, MLX OOM)

Now for PRs: There are 20 items. I'll pick 10 important ones. Look at recent PRs (updated in last 24h). Many are closed. I'll select those that add features, fix bugs, or improve performance. List them:

1. #18240 [CLOSED] ci: bound and cache the macOS MLX payload build - CI optimization.
2. #18237 [CLOSED] fix: unescape html in tool properties - bug fix.
3. #18235 [OPEN] MLX: version bump - update MLX library.
4. #18238 [CLOSED] openai: preserve images through response compaction - feature.
5. #18236 [CLOSED] app: add Ollama to ChatGPT Desktop - integration.
6. #18239 [OPEN] docs: fix broken links and punctuation - docs fix.
7. #18224 [CLOSED] openai: add Codex compaction support - feature.
8. #18223 [CLOSED] openai: add client tool search support - feature.
9. #18234 [OPEN] docs: document rootless Linux installation - docs.
10. #16590 [OPEN] llama-server: prepare to remove compatibility patch with manifest list support - major refactoring.
11. #18233 [OPEN] docs: fix broken download links in app README - docs.
12. #17865 [OPEN] mlx: add DFlash2 support - new model support.
13. #16315 [OPEN] extensive documentation improvements - docs.
14. #17857 [OPEN] llm: fix llama-server memory accounting for multi-model loads - bug fix.
15. #18228 [OPEN] README: add Unlimited Context to community integrations - docs.
16. #18227 [OPEN] docs: add RAGAgent to community integrations - docs.
17. #13689 [CLOSED] envconfig: add OLLAMA_DEFAULT_THINK for server-wide thinking control - feature.
18. #18222 [OPEN] app: always enable Claude auto mode - app feature.
19. #18078 [OPEN] MLX: make Qwen3.8 Flash Next memory efficient - performance.
20. #18105 [CLOSED] mlxrunner: enable speculative decoding under structured output - performance.

I'll pick 10 that are most significant: include feature additions, bug fixes, performance improvements, and major refactoring. Let's choose:

1. #18237 (fix HTML unescape)
2. #18238 (preserve images through compaction)
3. #18236 (ChatGPT Desktop integration)
4. #18224 (Codex compaction support)
5. #18223 (client tool search support)
6. #16590 (manifest list support)
7. #17865 (DFlash2 support)
8. #17857 (memory accounting fix)
9. #13689 (OLLAMA_DEFAULT_THINK)
10. #18078 (Qwen3.8 memory efficiency)

Now, I need to write the digest sections.

**Today's Highlights**: Summarize most important updates. Focus on closed issues that resolved bugs, new PRs adding features, and performance regressions. Mention that several critical bugs were closed (tiered context VRAM exhaustion, Granite OOM, Llama3.2-vision load error) and new PRs enhance OpenAI compatibility and MLX support.

**Releases**: None in last 24h, so omit.

**Hot Issues**: For each of the 10 selected issues, explain why they matter and community reaction. Include GitHub link. Use concise language.

**Key PR Progress**: For each of the 10 selected PRs, describe features or fixes. Include GitHub link.

**Feature Request Trends**: Distill most-requested feature directions from all issues. Look for patterns: context length control, thinking model controls, performance improvements, compatibility fixes, etc.

**Developer Pain Points**: Summarize recurring frustrations: VRAM exhaustion, silent context length deviations, performance regressions, GPU-specific crashes, grammar parsing failures.

I'll now draft the digest. Let's start writing.
</think>

# Ollama Community Digest — 2026‑09‑05

## 1. Today's Highlights
Several high‑impact bug reports from the 0.33.x cycle were closed, addressing VRAM exhaustion from tiered context lengths, OOM kills on Granite 4.2 models, and a broken Llama3.2‑vision loader. At the same time, a series of new PRs landed that expand OpenAI‑compatible capabilities (compaction, tool search, image preservation) and add MLX support for DFlash2 and memory‑efficient Qwen3.8‑Flash‑Next models.

## 2. Releases
No new Ollama releases were published in the last 24 hours.

## 3. Hot Issues
1. **[CLOSED] #14116 – Tiered context length can exhaust VRAM**  
   *Why it matters:* The automatic context‑length tiers introduced in 0.15.5 could allocate more KV cache than available, crashing inference.  
   *Community reaction:* 39 comments, 5 👍 – highlights a widespread pain point around memory‑safe defaults.  
   https://github.com/ollama/ollama/issues/14116

2. **[OPEN] #17248 – Cloud API corrupts literal `</think>` in thinking models**  
   *Why it matters:* User‑message content containing `</think>` is misinterpreted as a reasoning delimiter, breaking prompts for all thinking models via the cloud API.  
   *Community reaction:* 11 comments – quickly reproduced across multiple models.  
   https://github.com/ollama/ollama/issues/17248

3. **[CLOSED] #18074 – Granite 4.2 models ignore safe default context**  
   *Why it matters:* Granite 4.2 ships with `context_length = 131072`, causing immediate OOM on consumer GPUs even when a safe lower value would fit.  
   *Community reaction:* 9 comments – underscores the risk of trusting model‑metadata context overrides.  
   https://github.com/ollama/ollama/issues/18074

4. **[CLOSED] #11659 – Allow custom context‑length values instead of GUI presets**  
   *Why it matters:* `OLLAMA_CONTEXT_LENGTH` stopped working after v0.9.6; users lacking precise control were forced into coarse GUI steps.  
   *Community reaction:* 6 comments, 5 👍 – a long‑standing request finally acknowledged.  
   https://github.com/ollama/ollama/issues/11659

5. **[CLOSED] #16547 – `unknown model architecture: 'mllama'` on Llama3.2‑vision**  
   *Why it matters:* The vision variant failed to load even after re‑download, indicating a regression in multimodal architecture detection.  
   *Community reaction:* 6 comments, 2 👍 – affected anyone upgrading to the 11b vision model.  
   https://github.com/ollama/ollama/issues/16547

6. **[CLOSED] #18220 – Gemma 4 26B A4B enters reasoning loop after 0.33.x update**  
   *Why it matters:* A regression caused the model to stop issuing tool calls and loop in reasoning mode, breaking Cline/VS Code workflows.  
   *Community reaction:* 4 comments – quick reproduction on NVFP4 quantization.  
   https://github.com/ollama/ollama/issues/18220

7. **[OPEN] #18226 – Grammar parse failure with escaped `/` or `-` in tool schemas**  
   *Why it matters:* The Anthropic‑compatible `/v1/messages` endpoint rejects schemas containing `\/` or `\-` inside array items, breaking Claude Code interactive mode.  
   *Community reaction:* 1 comment – niche but disruptive for tool‑heavy pipelines.  
   https://github.com/ollama/ollama/issues/18226

8. **[OPEN] #18225 – 5× slower token generation on CUDA in 0.33.x vs 0.32.13**  
   *Why it matters:* A severe performance regression on RTX 3090 (CUDA 13.2) with identical model files points to a backend change in the newer release.  
   *Community reaction:* 1 comment – urgent for production deployments.  
   https://github.com/ollama/ollama/issues/18225

9. **[OPEN] #18232 – CUDA crash on Blackwell RTX 5060 Ti due to `num_ctx` shared‑memory allocation**  
   *Why it matters:* The Flash Attention MMA kernel’s shared memory usage scales with context length, triggering a `0xc0000409` crash on the latest GPU architecture.  
   *Community reaction:* 0 comments – a fresh, hardware‑specific root cause that will affect early adopters.  
   https://github.com/ollama/ollama/issues/18232

10. **[OPEN] #18231 – MLX runner OOM at long context despite prefix‑cache eviction**  
    *Why it matters:* On 64 GB Apple Silicon, the MLX runner dies mid‑request when paged‑out snapshots are within the eviction budget but still prevent allocation.  
    *Community reaction:* 0 comments – highlights a gap in the MLX memory‑management retry logic.  
    https://github.com/ollama/ollama/issues/18231

## 4. Key PR Progress
1. **#18237 – Fix HTML escaping in tool properties**  
   Resolves an issue where `json.Marshal` escaped `&`, `<`, `>` characters in tool descriptions, breaking schema rendering.  
   https://github.com/ollama/ollama/pull/18237

2. **#18238 – Preserve images through response compaction**  
   Ensures that image tokens are not stripped when the OpenAI‑compatible API compresses long conversations.  
   https://github.com/ollama/ollama/pull/18238

3. **#18236 – Add Ollama to ChatGPT Desktop (macOS)**  
   Integrates Ollama model selection into the ChatGPT Desktop app, reusing the existing ChatGPT/Codex profile so users retain plugins, MCPs, and skills.  
   https://github.com/ollama/ollama/pull/18236

4. **#18224 – Add Codex compaction endpoint**  
   Extends the OpenAI compatibility layer with a dedicated compaction route, allowing clients to compress conversation history before sending it to the model.  
   https://github.com/ollama/ollama/pull/18224

5. **#18223 – Client tool‑search support**  
   Enables the server to return a searchable tool catalog alongside responses, improving discovery for agents that dynamically select tools.  
   https://github.com/ollama/ollama/pull/18223

6. **#16590 – Manifest‑list support for llama‑server**  
   Prepares the removal of a legacy compatibility patch by introducing manifest‑list storage, allowing runner‑specific manifests to coexist under a single tag while preserving v1 tags as downgrade anchors.  
   https://github.com/ollama/ollama/pull/16590

7. **#17865 – MLX DFlash2 support**  
   Adds native MLX loading and inference for `DFlash2DraftModel` checkpoints, including dynamic short convolution, parallel

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>



# llama.cpp Community Digest — 2026-09-05

## 1. Today's Highlights

llama.cpp **v0.4.0** shipped with initial support for Qwen3.8-Flash-Next and NVIDIA Nemotron-3-Puzzle, on-demand tensor reading, per-slot server context limits, and video input options, alongside a ggml 0.23.0 update featuring major sparse flash attention and RDMA work. The server UI is undergoing a significant rework with model discover/browse views, end-to-end Hugging Face download tracking, and memory-fit estimation. Multiple backend-specific bugs remain active around SYCL/Vulkan on Intel Arc hardware and MoE model compatibility on RDNA3.5.

---

## 2. Releases

### v0.4.0 (b10809) — Major Release

Key changes:
- **Model support**: Initial Qwen3.8-Flash-Next (`qwen4_exp`) and Nemotron-3-Puzzle-75B-A9B architectures
- **Server**: Per-slot context limits (`--ctx-size` per connection), on-demand tensor reading, video input options
- **ggml 0.23.0**: Major sparse flash attention implementation, RDMA transport improvements
- **Metal**: M3-specific flash attention tunings; extended quant support (q4_0, q4_1, q5_0, q5_1)
- **OpenCL**: Extended elementwise unary ops (sgn, step, elu, hardswish, etc.) and Adreno xmem SDPA path
- **SYCL**: RMSNorm+Mul+Add residual chain fusion; MKL_FA refactored to global var
- **CPU**: Build info output stream now configurable; s390x q5_1 uninitialized accumulator fix
- **Build**: Version bumped to 0.4.0; attestation URL updated

🔗 [Release b10809](https://github.com/ggml-org/llama.cpp/releases/tag/b10809)

---

## 3. Hot Issues

| # | Title | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| [#24168](https://github.com/ggml-org/llama.cpp/issues/24168) | [SYCL] Empty/gibberish output on hybrid models + `ggml_sycl_op_mul_mat` crash on Intel Arc Pro B60 | Critical regression between builds b9128–b9159 and server-intel latest; affects Qwen3Next/5 architecture on dual-ARC setups | 27 comments, high frustration — regression clearly pinpointed but unfixed |
| [#28247](https://github.com/ggml-org/llama.cpp/issues/28247) | [Vulkan] `GGML_ASSERT(wg0 <= maxComputeWorkGroupCount)` on Intel Arc A770 with Qwen 3.8 Flash Next | Blocks new model on a popular consumer GPU; compute workgroup size exceeds device limits | 13 comments, opened just 2 days ago — likely a new v0.4.0 regression |
| [#24657](https://github.com/ggml-org/llama.cpp/issues/24657) | `GGML_ASSERT(n_inputs < GGML_SCHED_MAX_SPLIT_INPUTS)` on multi-GPU | Multi-GPU split scheduling still hitting input limits; affects V100 + Gemma configs | 13 comments, stale but unresolved — long-standing multi-GPU pain |
| [#28113](https://github.com/ggml-org/llama.cpp/issues/28113) | [CLOSED] CUDA/HIP: MoE garbage output on RDNA3.5 (gfx1151) since #27621 | MoE models producing corrupted output on Strix Halo / RDNA3.5 iGPUs | Closed; 11 comments — resolved but signals ongoing MoE+AMD instability |
| [#28275](https://github.com/ggml-org/llama.cpp/issues/28275) | Docker: no SemVer tags / release builds missing from GHCR | Blocks reproducible deployments; users must resolve build numbers manually | 9 comments, 1 👍 — widely felt by DevOps-oriented users |
| [#28196](https://github.com/ggml-org/llama.cpp/issues/28196) | CUDA: Qwen35 MTP decode ~1.06x on RTX 5090 vs ~1.8x on RTX 4090 | Major performance regression on Blackwell vs Ada for MTP speculative decoding | 8 comments — performance concern on the latest GPU architecture |
| [#10732](https://github.com/ggml-org/llama.cpp/issues/10732) | Server: structured output works for `json_object` but not `json_schema` | API incompatibility with OpenAI schema format; affects 4 tools integrations | 8 comments, 4 👍 — widely used feature gap |
| [#28239](https://github.com/ggml-org/llama.cpp/issues/28239) | [SYCL] Sysman free-memory query may be unavailable | Memory reporting fails on some Intel GPUs, complicating server diagnostics | 5 comments — new issue, likely Windows + SYCL specific |
| [#25789](https://github.com/ggml-org/llama.cpp/issues/25789) | [CLOSED] WebUI: images from MCP tool blocks not displayed | Regression in tool block rendering; inline references never resolved | Closed; 2 comments, 4 👍 — frontend accessibility issue |
| [#28353](https://github.com/ggml-org/llama.cpp/issues/28353) | Vulkan multi-GPU regression: secondary GPU allocation torn down mid-load | Unkillable server hang when splitting models across two AMD GPUs; breaks multi-GPU workflows | Just opened — 2 comments, immediate concern for multi-GPU Vulkan users |

---

## 4. Key PR Progress

| # | Title | Description |
|---|-------|-------------|
| [#28398](https://github.com/ggml-org/llama.cpp/pull/28398) | CUDA/HIP: use hardware `v_perm_b32` for Q1_0 vec_dot on AMD | Reuses the Q2_0 optimization path; eliminates 20 software byte-perm calls per 32-element chunk. **+110% decode throughput on gfx1201** |
| [#28414](https://github.com/ggml-org/llama.cpp/pull/28414) | `--prefetch-experts-slots`: lookahead H2D prefetch of host-resident MoE experts | Speculative host-to-device expert weight prefetching for MoE models, reducing idle latency during token generation |
| [#28213](https://github.com/ggml-org/llama.cpp/pull/28213) | QSA sparse attention for Qwen4Exp decode | Gathers only top-2048 KV entries via indexer instead of applying a full mask, dramatically reducing decode attention cost for Qwen3.8-Flash-Next |
| [#28411](https://github.com/ggml-org/llama.cpp/pull/28411) | UI: group model selector components | Extracts dropdown/list/option/sheet into `models/ModelsSelector/` with barrel exports; extracts shared reasoning panel and in-flight download row |
| [#28409](https://github.com/ggml-org/llama.cpp/pull/28409) | UI: discover models browse view | New sidebar action and full-screen dialog with searchable Hugging Face GGUF catalog — org avatars, capability icons, size ranges, and model-card readme |
| [#27959](https://github.com/ggml-org/llama.cpp/pull/27959) | UI: model download pipeline | End-to-end HF download tracking with pause/resume/cancel; SSE-driven progress events; dedicated `models-discover` store |
| [#27957](https://github.com/ggml-org/llama.cpp/pull/27957) | UI: model memory-fit estimation | Estimates whether a model fits in the local Mac's memory tiers (RAM × 0.75 − overhead), mirroring ggml-pages logic |
| [#28405](https://github.com/ggml-org/llama.cpp/pull/28405) | Resolve `<quant>-<sidecar>` download tags and list cached sidecars | Sidecar files (mmproj, imatrix, draft variants) get independent cache entries; `GET /models` lists them alongside main weights |
| [#28371](https://github.com/ggml-org/llama.cpp/pull/28371) | Grammar: memoize `reject_candidates_for_stack` to eliminate branching explosion | Hand-tuned memoization cache for schema/grammar constrained inference, ported from koboldcpp — prevents hangs on complex grammars |
| [#28415](https://github.com/ggml-org/llama.cpp/pull/28415) | Vulkan: add IQ4_XS MMQ/MMV matmul kernels | Dedicated IQ4_XS kernels avoid the slow generic float-conversion path; benchmark table included in PR |

---

## 5. Feature Request Trends

1. **MoE optimization** — Repeated requests for better MoE handling: per-layer active expert count (#28380), H2D prefetch (#28414), and sparse attention (#28213). The community is pushing hard on making MoE models practical on consumer hardware.
2. **Structured output parity** — Issue #10732 highlights a persistent gap: `json_schema` support remains absent while `json_object` works, creating friction for OpenAI-compatible tooling.
3. **Model discoverability** — A cluster of UI PRs (#28409, #27959, #27957, #28405) signals strong demand for an integrated model browser with download, memory estimation, and sidecar management.
4. **Cross-architecture support** — Requests for Apertus models (#26300), GLM-5.3-Flash (#27773), and RDNA3.5/Vulkan fixes indicate users want broader model and hardware coverage.
5. **Deployment reproducibility** — SemVer Docker tags (#28275) and structured output consistency point to a growing operational user base wanting production-grade reliability.

---

## 6. Developer Pain Points

- **Intel Arc / SYCL instability**: Issues #24168, #28239, #28384, and #26581 all cluster around Intel Arc Pro GPUs — memory queries failing, test-backends ops crashing, and decode performance plateauing at ~21–25 ns/KV-position. The community reports identical behavior across both Vulkan and SYCL backends, suggesting a deeper driver or compute-shader-level issue.
- **Multi-GPU fragmentation**: Issues #24657 (CUDA input limits), #28353 (Vulkan mid-load tear-down), and #28196 (Blackwell perf regression) show that multi-GPU workflows remain unreliable across backends, with regressions appearing between builds.
- **MoE + AMD GPU incompatibility**: After #28113 closed, the underlying RDNA3.5 + MoE story is still fragile — sparse attention paths and expert routing don't play cleanly on AMD unified memory architectures.
- **Missing SemVer Docker tags**: Issue #28275 captures a recurring operational frustration — users cannot pin deployments to `X.Y.Z` tags and must manually resolve build numbers, undermining CI/CD reproducibility.
- **WebUI regression surface**: Issue #25789 and the broader UI rework (#28411, #28409) suggest the frontend is in a volatile migration phase; tool block rendering and model discovery features are being rebuilt from scratch.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*