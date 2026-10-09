# AI CLI Tools Community Digest 2026-10-10

> Generated: 2026-10-09 22:15 UTC | Tools covered: 12

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



Here is the brief summary of the most important updates across all AI developer tools today:

*   **Claude Code v2.1.296 Released:** Claude Code shipped v2.1.296, extending managed policies with a new `code` key to apply CLI settings to Claude Desktop's Code tab, and adding `autoCompactWindow` to subagent frontmatter for finer context control. ([link](https://github.com/anthropics/claude-code/releases/tag/v2.1.296))
*   **OpenAI Codex Stable Patch v0.162.1 Released:** OpenAI Codex released a stable patch fixing TUI crashes when asynchronous questions contain multiple lines, alongside resolving startup failures caused by background server and CLI feature mismatches. ([link](https://github.com/openai/codex/releases/tag/rust-v0.162.1))
*   **Ollama Security and Performance Updates:** Ollama deployed a critical security patch for the `seroval` dependency (CVE-2026-104846) and introduced a performance optimization to skip local model compatibility migrations, reducing overhead on high-volume workloads. ([link](https://github.com/ollama/ollama))
*   **llama.cpp Build b11538 Released:** llama.cpp updated to build b11538, fixing CUDA rounding issues under MSVC, removing redundant CUDA copies after SSM scans, and fixing an out-of-bounds write in `ggml_acc`. The release also merged support for LiquidAI decision models and MiniCPM-V 4.7. ([link](https://github.com/ggerganov/llama.cpp/releases/tag/b11538))
*   **GitHub Copilot CLI v1.0.96-0 and v1.0.95 Released:** GitHub Copilot CLI released v1.0.96-0, improving interactive session startup speed in git repositories and adding timeline permission tracking. Version v1.0.95 introduced native Microsoft Entra broker authentication on macOS and persistent `--context` settings for ACP sessions. ([link](https://github.com/github/copilot-cli))
*   **DeepSeek TUI v0.10.2 Major Features Merged:** DeepSeek TUI merged PR #6907, bringing a dockable Terminal pane, shell wait controls, and recovery policy fixes to the upcoming v0.10.2 release, alongside critical Windows state root relocation fixes for artifacts and subagents. ([link](https://github.com/Hmbown/DeepSeek-TUI/pull/6907))
*   **Qwen Code v0.25.1-preview.1 Released:** Qwen Code released v0.25.1-preview.1, featuring a fix for replacing selected remote Hosts without losing bindings, while advancing the Managed Agent dual-path architecture proposal. ([link](https://github.com/QwenLM/qwen-code/releases/tag/v0.25.1-preview.1))
*   **GitHub Copilot CLI Checksum Verification Hardened:** GitHub Copilot CLI merged PR #5093 to verify the checksum entry matching the downloaded tarball, closing a security gap where empty checksums or `--ignore-missing` flags bypassed file integrity validation. ([link](https://github.com/github/copilot-cli/pull/5093))

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights (as of 2026-10-10)

> Note: PR comment counts were not exposed in the dataset. The PR ranking below follows the repository’s comment-sorted top-20 list and update activity. All listed PRs are currently **OPEN**; no merged/draft statuses appear in the provided top-20 PR data.

## 1. Top Skills Ranking

1. **mcp-builder compatibility fix** — [PR #1742](https://github.com/anthropics/skills/pull/1742)  
   - **Function:** Updates `mcp-builder` for `mcp>=2.0.0`, where `streamablehttp_client` was renamed to `streamable_http_client`, and custom HTTP headers now use `create_mcp_http_client` / `http_client`.
   - **Discussion highlights:** Fixes [#1668](https://github.com/anthropics/skills/issues/1668); addresses a breaking import and header-configuration change in MCP tooling.
   - **Status:** OPEN, last updated 2026-10-08.

2. **skill-creator trigger-eval isolation** — [PR #1298](https://github.com/anthropics/skills/pull/1298)  
   - **Function:** Fixes false misses/invalid scores in trigger evaluation: per-worker command probes competing, `select()` on subprocess pipes failing on Windows, unrelated tools stopping scans, and runtime failures being treated as non-triggers.
   - **Discussion highlights:** Directly targets evaluation reliability issues also raised in [#556](https://github.com/anthropics/skills/issues/556), [#1352](https://github.com/anthropics/skills/issues/1352), and [#1383](https://github.com/anthropics/skills/issues/1383).
   - **Status:** OPEN, last updated 2026-09-16.

3. **proofcore-contract-auditor** — [PR #1771](https://github.com/anthropics/skills/pull/1771)  
   - **Function:** Adds a Web3 Agent Skill for static analysis of Solidity and Rust smart contracts, anchoring cryptographic audit proofs to the TON Blockchain via ProofCore’s zero-storage Merkle protocol.
   - **Discussion highlights:** A new vertical Skill proposal combining smart-contract auditing with on-chain notarization.
   - **Status:** OPEN, last updated 2026-09-16.

4. **docx orphaned-comments detection** — [PR #1734](https://github.com/anthropics/skills/pull/1734)  
   - **Function:** Detects orphaned comments in DOCX documents.
   - **Discussion highlights:** Summary is minimal, but the PR sits high in the comment-sorted list, indicating attention around DOCX correctness.
   - **Status:** OPEN, last updated 2026-09-25.

5. **md2video-audio** — [PR #1703](https://github.com/anthropics/skills/pull/1703)  
   - **Function:** Adds a zero-cost Skill that compiles Markdown into MP4 videos with human-like voiceovers, using Marp for slide generation.
   - **Discussion highlights:** Expands Skills into automated media production and document-to-video workflows.
   - **Status:** OPEN, last updated 2026-09-15.

6. **notion-spec-to-implementation + quantitative-resume-auditor** — [PR #1245](https://github.com/anthropics/skills/pull/1245)  
   - **Function:** Transforms product/tech specs into actionable Notion tasks with acceptance criteria and progress tracking; also adds a quantitative resume-auditor Skill.
   - **Discussion highlights:** Bridges product specification, task management, and implementation planning.
   - **Status:** OPEN, last updated 2026-09-30.

7. **docx LibreOffice timeout verification** — [PR #1792](https://github.com/anthropics/skills/pull/1792)  
   - **Function:** Makes `docx/scripts/accept_changes.py` return an error when `soffice` times out, and only report success after verifying revision marks (`w:ins` / `w:del` / `w:moveFrom` / `w:moveTo`) are gone.
   - **Discussion highlights:** Improves DOCX reliability by preventing false-success reporting.
   - **Status:** OPEN, last updated 2026-09-25.

8. **claude-api dead URL fixes** — [PR #1730](https://github.com/anthropics/skills/pull/1730)  
   - **Function:** Replaces three hard-404 documentation URLs in `academy-guide` and `claude-api` tool-use concepts with canonical platform/academy URLs.
   - **Discussion highlights:** Documentation-quality maintenance for the Claude API Skill.
   - **Status:** OPEN, last updated 2026-10-04.

## 2. Community Demand Trends

- **Security, trust, and namespace governance**  
  The highest-comment Issue, [#492](https://github.com/anthropics/skills/issues/492) (43 comments), warns that community Skills distributed under the `anthropic/` namespace can impersonate official Anthropic Skills and abuse trust boundaries. Related security concerns appear in [#1394](https://github.com/anthropics/skills/issues/1394) (eval-viewer XSS) and [#1175](https://github.com/anthropics/skills/issues/1175) (SharePoint/SPO document security).

- **Reliable Skill evaluation and trigger testing**  
  Multiple high-comment Issues target broken or misleading evaluation harnesses: [#556](https://github.com/anthropics/skills/issues/556) (`run_eval.py` never triggers Skills), [#1352](https://github.com/anthropics/skills/issues/1352) (parallel workers cross-match skill UUIDs), [#1383](https://github.com/anthropics/skills/issues/1383) (silent benchmark failures and Windows trigger-eval breakage), and [#1390](https://github.com/anthropics/skills/issues/1390) (`mcp-builder` evaluation scores 0/N against real MCP servers). This is a clear demand for trustworthy Skill QA.

- **Skill lifecycle, sharing, and management**  
  The community wants better organizational and lifecycle tooling: [#228](https://github.com/anthropics/skills/issues/228) (org-wide Skill sharing in Claude.ai), [#62](https://github.com/anthropics/skills/issues/62) (disappearing Skills and recovery), [#189](https://github.com/anthropics/skills/issues/189) (duplicate content from `document-skills` and `example-skills`), and [#202](https://github.com/anthropics/skills/issues/202) (`skill-creator` best practices).

- **Context-efficient memory and token management**  
  [#1329](https://github.com/anthropics/skills/issues/1329) proposes `compact-memory`, using symbolic notation for compact agent state. [#1487](https://github.com/anthropics/skills/issues/1487) reports that the `claude-api` Skill eagerly injects ~156k tokens, exhausting the context window in one tool call. Demand is growing for Skills that respect context budgets.

- **Governance, safety, and quality gates**  
  [#412](https://github.com/anthropics/skills/issues/412) proposes `agent-governance` for policy enforcement, threat detection, trust scoring, and audit trails. [#1385](https://github.com/anthropics/skills/issues/1385) proposes a three-gate reasoning-quality pipeline: pre-task calibration, adversarial review, and delivery verification.

- **Enterprise document workflows and integration security**  
  [#1175](https://github.com/anthropics/skills/issues/1175) reflects demand for secure SharePoint Online document handling, access control, and permission logic within SKILL.md.

## 3. High-Potential Pending Skills

These are active, still-open PRs that appear likely to land soon based on recent updates, linked bug reports, and security/maintenance value:

- [PR #1961](https://github.com/anthropics/skills/pull/1961) — **skill-creator eval-viewer hardening**: addresses script breakout, DNS rebinding, cross-site POST, and escaping gaps. Updated 2026-10-07.
- [PR #1980](https://github.com/anthropics/skills/pull/1980) — **webapp-testing `shell=True` removal**: mitigates command-injection risk (CWE-78) in `with_server.py`. Updated 2026-10-06.
- [PR #1976](https://github.com/anthropics/skills/pull/1976) — **webapp-testing element discovery fix**: reports `textarea` and `select` tags correctly instead of falling back to `text`. Updated 2026-10-07.
- [PR #1977](https://github.com/anthropics/skills/pull/1977) — **algorithmic-art `wrapAround()` fix**: makes wrapping modulo-based and negative-safe. Updated 2026-10-07.
- [PR #1792](https://github.com/anthropics/skills/pull/1792) — **docx timeout verification**: prevents LibreOffice timeouts from being reported as success. Updated 2026-09-25.
- [PR #1742](https://github.com/anthropics/skills/pull/1742) — **mcp-builder MCP v2 support**: fixes renamed import and custom-header configuration. Updated 2026-10-08.
- [PR #1681](https://github.com/anthropics/skills/pull/1681) — **skill-creator direct execution**: fixes `ModuleNotFoundError` when running `package_skill.py` standalone and updates usage paths. Updated 2026-10-08.
- [PR #1703](https://github.com/anthropics/skills/pull/1703) — **md2video-audio**: new Markdown-to-MP4 video Skill. Updated 2026-09-15.
- [PR #1615](https://github.com/anthropics/skills/pull/1615) — **scnet-hpc**: new HPC cluster Skill for SCNet via SSH and Slurm workflows. Updated 2026-08-24.
- [PR #822](https://github.com/anthropics/skills/pull/822) — **AWT (AI Watch Tester)**: AI-powered E2E browser testing Skill. Updated 2026-09-19.

## 4. Skills Ecosystem Insight

**The community’s most concentrated demand is for trustworthy, testable, and context-efficient Skills infrastructure—secure distribution and authoring, reliable trigger/evaluation harnesses, and better Skill lifecycle management—more than for any single vertical Skill.**

---



# Claude Code Community Digest — 2026-10-10

---

## 1. Today's Highlights

Claude Code shipped **v2.1.296**, extending managed policies with a `code` key for the Claude Desktop Code tab and adding `autoCompactWindow` to subagent frontmatter. On the issue tracker, networking regressions in cloud routines and desktop crash-recovery failures are drawing the most attention, while a cluster of security-focused PRs around the `hookify` plugin were merged and closed this week.

---

## 2. Releases

### v2.1.296 — 2026-10-09
- **Managed policies now scope Code in Claude Desktop.** A new `code` key inside `managed.policies[]` applies the same `cli` settings to Claude Desktop's Code tab, and — when set beside `desktop` — turns on Claude Desktop's gateway mode. ([link](https://github.com/anthropics/claude-code/releases/tag/v2.1.296))
- **Subagent compaction tuning.** `autoCompactWindow` is now available in subagent frontmatter and `--agents` definitions, giving finer control over when subagent context gets compacted.

---

## 3. Hot Issues

### 🔴 #73564 — Cloud routines: headless Chromium gets `ERR_CONNECTION_RESET` on all sites
- **Why it matters:** Scheduled routines in claude.ai/code can't browse at all despite "Full" network access; `curl` works fine, so this is a Chromium-specific egress issue. Directly blocks headless automation in cloud environments.
- **Community reaction:** 5 comments, 2 👍. Stale — maintainers haven't responded in ~3 months, leaving users in limbo. ([link](https://github.com/anthropics/claude-code/issues/73564))

### 🔴 #70368 — Markdown heading levels are visually indistinguishable in chat output
- **Why it matters:** H1, H3, and H4 render at nearly identical size/weight, and H2 is muted gray — making it *less* prominent than lower-level headings. Degrades readability of long assistant responses in the desktop/web GUI.
- **Community reaction:** 3 comments, 2 👍. Stale; a clear UX regression that's been open since June. ([link](https://github.com/anthropics/claude-code/issues/70368))

### 🔴 #88065 — Sidebar shows no sessions after restoring `.jsonl` transcripts from old install
- **Why it matters:** After a Windows reinstall, manually copied transcripts are intact on disk but `sessions-index.json` is absent, so the sidebar shows nothing. Data recovery path is broken.
- **Community reaction:** 3 comments. Stale; users are forced into manual workarounds. ([link](https://github.com/anthropics/claude-code/issues/88065))

### 🟡 #86075 — Image tool results can't be persisted; budget eviction invalidates prompt cache
- **Why it matters:** When budget eviction replaces image tool results with a sentinel mid-history, the prompt cache is invalidated — driving up cost and latency on subsequent calls. Affects VS Code + Windows users.
- **Community reaction:** 2 comments, 1 👍. Stale. ([link](https://github.com/anthropics/claude-code/issues/86075))

### 🟡 #85757 — Playwright MCP browser can't traverse mandatory `HTTPS_PROXY` egress proxy
- **Why it matters:** 100% `ERR_CONNECTION_RESET` even with explicit `--proxy-server`. Blocks browser automation in any environment that enforces a corporate egress proxy.
- **Community reaction:** 2 comments, 1 👍. Stale. ([link](https://github.com/anthropics/claude-code/issues/85757))

### 🟡 #85231 — `CoworkVMService` DACL blocks its own crash-recovery config
- **Why it matters:** On Windows 11 MSIX, the service can't set its own crash-recovery policy due to its installed DACL. After a crash, nothing restarts it and Dispatch hangs silently — a stability landmine.
- **Community reaction:** 2 comments, 1 👍. Stale. ([link](https://github.com/anthropics/claude-code/issues/85231))

### 🟡 #78002 — Zoom shortcuts bound to physical US key positions on non-US layouts
- **Why it matters:** Desktop zoom shortcuts don't map correctly on Norwegian (and presumably other non-US) keyboard layouts — a classic physical-keymap vs. logical-layout bug.
- **Community reaction:** 2 comments, 1 👍. Stale. ([link](https://github.com/anthropics/claude-code/issues/78002))

### 🟡 #98893 — No notifications for the Project
- **Why it matters:** Users report they receive no notifications when activity occurs in a Project. Filed from Claude Code itself (Project ID provided).
- **Community reaction:** 2 comments. Closed — likely needs more info. ([link](https://github.com/anthropics/claude-code/issues/98893))

### 🟢 #99061 / #99023 / #99000 — Safeguards blocking legitimate local testing and security investigations
- **Why it matters:** Multiple users report safeguards triggering unexpectedly — flagging bugs in locally running apps, blocking security vulnerability investigations, and firing on benign Opus 5.5 requests. Suggests over-eager guardrails.
- **Community reaction:** All closed as `needs-repro` or `needs-info` with minimal engagement. ([#99061](https://github.com/anthropics/claude-code/issues/99061)) ([#99023](https://github.com/anthropics/claude-code/issues/99023)) ([#99000](https://github.com/anthropics/claude-code/issues/99000))

### 🟢 #98980 — Data lost after upgrade
- **Why it matters:** User reports all data lost after an upgrade prompt; nothing transferred over. High-severity if reproducible.
- **Community reaction:** 1 comment. Closed — `data-loss` tag, needs investigation. ([link](https://github.com/anthropics/claude-code/issues/98980))

---

## 4. Key PR Progress

| PR | Summary |
|---|---|
| [#100293](https://github.com/anthropics/claude-code/pull/100293) | Adds HIPAA-compliant settings examples: `settings-hipaa.json`, `managed-mcp-hipaa.json`, and README for orgs needing content-egress controls. |
| [#85716](https://github.com/anthropics/claude-code/pull/85716) | Fixes `hookify` plugin silently bypassing rules by loading from ancestor `.claude` directories. Prevents security policy gaps in nested repos. |
| [#84747](https://github.com/anthropics/claude-code/pull/84747) | Enforces proper rule evaluation scope in `hookify`; tools without an explicit event mapping (e.g., `Read`, `Browser`) now only trigger `all`-scoped rules. |
| [#84711](https://github.com/anthropics/claude-code/pull/84711) | Hardens plugin scripts against YAML injection and symlink-based credential overwrite attacks. |
| [#84365](https://github.com/anthropics/claude-code/pull/84365) | Allows any user's "thumbs down" to prevent auto-close of issues, matching the dedupe bot's existing promise. |
| [#84364](https://github.com/anthropics/claude-code/pull/84364) | `hookify` now fails closed on exceptions in `pretooluse` hooks — exceptions emit `permissionDecision: 'deny'` instead of silently allowing tool execution. |

---

## 5. Feature Request Trends

- **Markdown rendering customization** — Multiple users want heading levels (size, weight, color) to be distinguishable and/or customizable in the desktop/web GUI (#70368).
- **Notification reliability** — At least one report of missing Project notifications (#98893); broader notification delivery is a recurring theme.
- **Non-US keyboard layout support** — Zoom (and likely other) shortcuts are physically mapped to US keys (#78002); localization of keybindings is requested.
- **Subagent control** — The new `autoCompactWindow` frontmatter field suggests growing demand for finer-grained subagent context management.
- **Browser networking in cloud environments** — Headless Chromium egress issues (#73564, #85757) point to a need for better proxy/network configuration in cloud routines and MCP browsers.

---

## 6. Developer Pain Points

- **Stale/maintainer-unresponsive issues:** Several high-impact bugs (Chromium egress, markdown rendering, crash recovery, proxy bypass) have been open for 2–3 months with no maintainer response, leaving users stuck.
- **Safeguard false positives:** A cluster of recent issues (#99061, #99023, #99000, #98993) describe safeguards blocking legitimate work — local app testing, security investigations, benign Opus requests — suggesting the guardrails need tuning.
- **Data migration gaps:** Restoring transcripts across installs (#88065) and upgrades (#98980) is fragile; the absence of `sessions-index.json` or incomplete transfers leaves users with broken or lost state.
- **Cross-platform consistency:** Windows-specific DACL issues (#85231) and non-US keybinding bugs (#78002) highlight that desktop behavior isn't uniformly reliable across OSes and layouts.
- **Prompt cache invalidation from budget eviction:** Image tool result eviction mid-history (#86075) silently inflates token costs — a subtle but expensive performance pitfall.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-10-10

Data source: [github.com/openai/codex](https://github.com/openai/codex)  
Scope: 50 issues updated in last 24h; 43 PRs updated in last 24h.

## 1. Today's Highlights

Windows sandbox and runtime failures dominate community attention, led by a high-volume sharing-violation regression in the Windows app ([#51601](https://github.com/openai/codex/issues/51601)). The stable `rust-v0.162.1` patch fixes TUI multi-line async rendering and background-server/CLI feature compatibility startup failures. PR activity is concentrated on sandbox isolation, security hardening, exec-server reliability, and Windows path/runtime edge cases.

## 2. Releases

- [rust-v0.162.1](https://github.com/openai/codex/releases/tag/rust-v0.162.1) — stable patch:
  - Fixed TUI crash when asynchronous questions contain multiple lines, preserving line breaks and complete hyperlink destinations ([#51866](https://github.com/openai/codex/pull/51866)).
  - Fixed startup failures caused by differences between a running background server's feature settings and CLI defaults; compatibility checks now avoid unnecessary restarts/warnings.
- [rust-v0.163.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.4) — alpha release, no detailed notes.
- [rust-v0.163.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.2) — alpha release, no detailed notes.

## 3. Hot Issues

1. **[#51601](https://github.com/openai/codex/issues/51601) — Windows app sandbox setup fails with sharing violation**  
   `OPEN` · 114 comments · 30 👍  
   Windows command execution fails before the requested command starts. This is the highest-engagement issue in the window and points to a broad Windows sandbox/runtime validation problem.

2. **[#24103](https://github.com/openai/codex/issues/24103) — Official Meta Ads MCP fails OAuth login with `invalid_client_metadata`**  
   `OPEN` · 18 comments · 10 👍  
   MCP OAuth dynamic registration fails before consent. Important for MCP ecosystem credibility and third-party tool onboarding.

3. **[#47270](https://github.com/openai/codex/issues/47270) — Desktop Browser Use cannot discover Chrome or built-in browser tabs**  
   `OPEN` · 15 comments  
   Browser Use fails to discover/control tabs in Codex Desktop. Blocks desktop browser automation workflows.

4. **[#50771](https://github.com/openai/codex/issues/50771) — Codex keeps stopping or losing the task before work is done**  
   `OPEN` · 9 comments · 2 👍  
   Model agrees to continue, explains fixes, then ends the turn without acting. High-impact task-completion reliability complaint.

5. **[#41164](https://github.com/openai/codex/issues/41164) — `bundled_plugins_marketplace_resolve_failed` / plugin marketplace folder write failed**  
   `OPEN` · 9 comments  
   Windows plugin marketplace resolution/write failures. Affects plugin distribution and local marketplace setup.

6. **[#42006](https://github.com/openai/codex/issues/42006) — Windows desktop crashes when in-app Browser route is torn down**  
   `OPEN` · 8 comments · 1 👍  
   Five reproducible crashes tied to browser-use session teardown. Stability issue for Windows desktop browser workflows.

7. **[#52033](https://github.com/openai/codex/issues/52033) — Windows `node_repl.exe` fails runtime validation with ERROR 32 sharing violation**  
   `OPEN` · 8 comments  
   `node_repl` times out/fails validation on Windows. Same class as #51601 and reinforces a systemic Windows sandbox/runtime issue.

8. **[#37738](https://github.com/openai/codex/issues/37738) — Browser Use blocks localhost despite Allow browsing permission**  
   `OPEN` · 7 comments · 1 👍  
   Local development URLs remain blocked even after permission changes. Directly impacts web developers testing local apps.

9. **[#47941](https://github.com/openai/codex/issues/47941) — ChatGPT Linux bundled sandbox cannot re-exec Codex inside `bwrap`**  
   `OPEN` · 6 comments  
   Linux sandbox re-exec failure in bundled ChatGPT Linux desktop. Important for Linux users and sandbox portability.

10. **[#24777](https://github.com/openai/codex/issues/24777) — Add scriptable Codex Cloud environment and task lifecycle management**  
    `OPEN` · 6 comments · 12 👍  
    Requests CLI/API surface for environment discovery, lifecycle, task dispatch, monitoring, and PR/result handoff. Strong upvote signal for automation-focused workflows.

## 4. Key PR Progress

1. **[#52707](https://github.com/openai/codex/pull/52707) — Migrate Windows MXC sandbox to split MXC crates**  
   Improves availability detection by verifying a native process security environment can actually be created, avoiding false positives on transitional Windows builds.

2. **[#52702](https://github.com/openai/codex/pull/52702) — Retry bootstrap GETs through system proxy after request failures**  
   Allows account discovery and cloud configuration GETs to fall back to the system proxy after connection/header failures.

3. **[#52700](https://github.com/openai/codex/pull/52700) — Update exec-server stable compatibility baseline to Codex 0.162.1**  
   Moves `exec-server-stable-release-test` from `0.156.1` to `0.162.1`, updating Bazel archive version, checksum, and repository reference.

4. **[#52696](https://github.com/openai/codex/pull/52696) — Fix marketplace path matching for Windows junctions**  
   Normalizes local marketplace sources so equivalent paths match correctly and redirected managed roots retain managed classification.

5. **[#52689](https://github.com/openai/codex/pull/52689) — Forward per-turn Cyber access programs to Guardian**  
   Passes the parent turn's `cyber_access_program` to Guardian reviewers and async classifiers, preserving policy context.

6. **[#52686](https://github.com/openai/codex/pull/52686) — Add opt-in retention for turn tool outputs**  
   Adds an optional `retain` flag to `TurnToolOutput` for `turn/start`, allowing tool outputs to be retained in thread model history when explicitly requested.

7. **[#52685](https://github.com/openai/codex/pull/52685) — Preserve code mode cancellation during output serialization**  
   Prevents V8 termination from being converted into a catchable JavaScript exception, closing a cancellation-bypass risk.

8. **[#52682](https://github.com/openai/codex/pull/52682) — Validate Windows sandbox accounts before password repair**  
   Avoids rotating both sandbox account passwords on credential mismatch unless the successfully logged-on account is validated first.

9. **[#52681](https://github.com/openai/codex/pull/52681) — Reject reserved Serde JSON keys in code mode**  
   Blocks `$serde_json::private::RawValue` and similar keys from bypassing parser recursion limits during deserialization.

10. **[#52661](https://github.com/openai/codex/pull/52661) — Prevent brokered credential aliases from bypassing MITM hooks**  
    Rejects requests to unhooked aliases when a credential is bound to a host with MITM hooks, preventing proxy credential injection outside hook policy.

## 5. Feature Request Trends

- **Cloud/API automation and lifecycle management**: Strong demand for scriptable Codex Cloud environments, task dispatch, monitoring, and PR handoff ([#24777](https://github.com/openai/codex/issues/24777)).
- **Desktop productivity shortcuts**: Requests for quick model/reasoning-effort switching via keyboard or command palette ([#26819](https://github.com/openai/codex/issues/26819)).
- **Persistent supervisory/oversight agents**: Interest in a ChatGPT-style supervisor that oversees multiple Codex threads independently ([#52564](https://github.com/openai/codex/issues/52564)).
- **Remote/local parity**: Remote projects should render Markdown/HTML files like local projects ([#23631](https://github.com/openai/codex/issues/23631)).
- **Browser/computer-use reliability**: Repeated requests for better tab discovery, localhost permissions, and stable browser control ([#47270](https://github.com/openai/codex/issues/47270), [#37738](https://github.com/openai/codex/issues/37738), [#42006](https://github.com/openai/codex/issues/42006)).
- **Subagent/context/memory controls**: Growing interest in configurable subagent context limits and persistent thread memory, reflected in PRs such as [#52659](https://github.com/openai/codex/pull/52659).

## 6. Developer Pain Points

- **Windows sandbox/runtime instability is the top pain point**: Sharing violations, `node_repl.exe` failures, MXC setup issues, and browser Node child exits recur across [#51601](https://github.com/openai/codex/issues/51601), [#52033](https://github.com/openai/codex/issues/52033), [#52583](https://github.com/openai/codex/issues/52583), [#51921](https://github.com/openai/codex/issues/51921), [#52377](https://github.com/openai/codex/issues/52377), and [#34970](https://github.com/openai/codex/issues/34970).
- **Browser Use and Computer Use remain brittle**: Users report route discovery failures, localhost blocking despite permissions, startup crashes, and Edge connection failures ([#47270](https://github.com/openai/codex/issues/47270), [#37738](https://github.com/openai/codex/issues/37738), [#42006](https://github.com/openai/codex/issues/42006), [#51921](https://github.com/openai/codex/issues/51921)).
- **Auth, MCP, and connected-tool flows break frequently**: Meta Ads OAuth, Google Drive/Notion/GitHub tools, DeviceCheck token generation, and workspace settings failures block normal use ([#24103](https://github.com/openai/codex/issues/24103), [#50111](https://github.com/openai/codex/issues/50111), [#52342](https://github.com/openai/codex/issues/52342), [#52470](https://github.com/openai/codex/issues/52470)).
- **Task completion and UI controls are unreliable**: Codex stops early, “steer” does nothing, and the send button can remain disabled after usage exhaustion ([#50771](https://github.com/openai/codex/issues/50771), [#49790](https://github.com/openai/codex/issues/49790), [#48369](https://github.com/openai/codex/issues/48369)).
- **Cross-platform sandbox edge cases persist**: Linux `bwrap` re-exec fails, Node `spawnSync` returns `EPERM` after successful child exit, and `apply_patch` fails with multiple writable roots on Windows ([#47941](https://github.com/openai/codex/issues/47941), [#41175](https://github.com/openai/codex/issues/41175), [#34970](https://github.com/openai/codex/issues/34970)).
- **Update regressions disrupt startup and workspace loading**: Users report post-update crashes, SQLx checksum drift, and “Failed to load workspace settings” ([#23787](https://github.com/openai/codex/issues/23787), [#52684](https://github.com/openai/codex/issues/52684), [#52342](https://github.com/openai/codex/issues/52342)).
- **Plugin marketplace path/write failures affect distribution**: Windows junction/path matching and marketplace folder write failures are recurring ([#41164](https://github.com/openai/codex/issues/41164), [#52696](https://github.com/openai/codex/pull/52696)).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>



# Gemini CLI Community Digest — 2026-10-10

Welcome to the weekly community digest for `google-gemini/gemini-cli`. Below is a synthesis of the latest releases, hot issues

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Thinking Process:

1.  **Analyze the Request:**
    *   **Role:** Technical analyst focused on AI developer tools.
    *   **Topic:** GitHub Copilot CLI community digest for 2026-10-10.
    *   **Data Source:** Provided GitHub data for `github.com/github/copilot-cli` (releases, issues, pull requests).
    *   **Sections required:**
        1.  *Today's Highlights* (2-3 sentences summarizing the most important updates).
        2.  *Releases* (Summarize changes if new versions exist).
        3.  *Hot Issues* (Pick 10 noteworthy Issues, explain why they matter and community reaction).
        4.  *Key PR Progress* (Pick 10 important PRs - *Wait, the prompt says "Pick 10 important PRs", but the data says "Total: 1 items" for Latest Pull Requests. I need to look closely at how many are actually there. Only 1 PR is listed in the data: #5093. I should summarize the available ones, or if only 1 is provided, explain why it's important, maybe adapt the count or just summarize the 1 provided with high detail, or look for others if they are in the text. Let me check the data again. Under "Latest Pull Requests", there is only 1 item: #5093.* Let's write about the 1 provided PR but frame it appropriately, or look for others if they are embedded elsewhere. No, only 1 PR is listed). Let me double check if I can find 10. If only 1 is provided, I will summarize that 1 in detail and note that it's the sole PR of note today, or structure the section to cover the key changes in releases/issues if PRs are sparse, but stick to the requested structure as closely as possible.
        5.  *Feature Request Trends* (Distill the most-requested feature directions from all Issues).
        6.  *Developer Pain Points* (Summarize recurring developer frustrations or high-frequency requests).
    *   **Style:** Concise and professional, suited for technical developers. Include GitHub links for each item.

2.  **Analyze the Data:**

    *   **Latest Releases (last 24h):**
        *   `v1.0.96-0`: Improved interactive sessions in git repositories (reaching input prompt sooner), timeline permission decision tracking (user, Assisted Permissions, policy, or unattended fallback). Fixed `/add-dir` sandbox access for current session, `/user` command.
        *   `v1.0.95`: (and sub-pre-releases `v1.0.95-0`, `v1.0.95-1`, `v1.0.95-2`, `v1.0.95-3`). Key changes:
            *   Native Microsoft Entra broker authentication on macOS with browser fallback.
            *   `copilot config` supports sandbox credential `injectHosts` keys, with key completion in Bash, Zsh, and Fish.
            *   `--context` now applies to new and resumed ACP sessions instead of silently using default/previous tier.
            *   Managed plugin setup retries hourly or after policy changes instead of on every message failure.

    *   **Latest Issues (Top 30 by comment count, showing top ~30 in text):**
        *   #4313 [CLOSED] [input-keyboard, terminal-rendering] Allow scrolling through the current conversation history (9 comments).
        *   #3709 [OPEN] [models] Allow /model to switch between multiple models, including BYOK/local providers, in one session (9 comments, 34👍).
        *   #3355 [CLOSED] [context-memory, models] Allow configurable context window for Claude Opus 4.6 (200K cap vs 1M model capability) (5 comments, 4👍).
        *   #4686 [OPEN] [sessions] Node.js OOM crash after ~37 min — 31,965 leaked async libuv handles (SEA ignores NODE_OPTIONS) (4 comments).
        *   #5076 [CLOSED] `/add-dir` does not add the directory to the sandbox allow list (4 comments).
        *   #3035 [OPEN] [plugins, tools] Tool-callable `cwd` (equivalent of TUI `/cwd`) (3 comments).
        *   #2536 [OPEN] [mcp] Atlassian MCP needs authorization on every invocation of the copilot cli (3 comments, 3👍).
        *   #939 [CLOSED] [input-keyboard] Slash command tab completion (2 comments).
        *   #4565 [CLOSED] App Configuration Problems Found in repo (2 comments).
        *   #3081 [OPEN] [platform-linux, authentication] NixOS keychain support is broken (1 comment, 3👍).
        *   #3535 [OPEN] [platform-windows, tools] Windows Ramdisk Directory does not exist or cannot be accessed (1 comment).
        *   #5101 [OPEN] [triage] `--add-github-mcp-tool issue_write` causes no MCP tools to be available (1 comment).
        *   #5098 [OPEN] [triage] sessionStart hook stops running after adding `sandbox.userPolicy.filesystem` paths (1 comment).
        *   #3052 [OPEN] [configuration, mcp, tools] `--add-github-mcp-tool=create_pull_request` leaves the configured endpoint readonly (1 comment, 2👍).
        *   #3403 [CLOSED] [plugins, configuration] Hooks in config.json are not preserved across session starts (1 comment, 2👍).
        *   #3249 [CLOSED] [tools, terminal-rendering] Edit tools' diffs are a mess in line ordering (1 comment).
        *   #2535 [CLOSED] [sessions, terminal-rendering] Show timestamps next to messages in conversation view (1 comment, 2👍).
        *   #2311 [CLOSED] [sessions] `/restart` command does not go to the same mode it was before (1 comment).
        *   #4516 [OPEN] [permissions] Sandbox RW path grants not honored by JVM processes spawned from Copilot CLI (1 comment).
        *   #5094 [OPEN] [triage] Desktop app 1.1.27+ on Windows: bundled git cannot be spawned (Access is denied) (1 comment).
        *   #5091 [OPEN] [sessions, mcp] Session queues all prompts, keeps trying to reconnect mcps when they are already connected (1 comment).
        *   #5079 [OPEN] [triage] Copilot sends `ping` on the 2026-07-28 protocol, and reuses rotated refresh tokens (1 comment, 1👍).
        *   #4977 [OPEN] [platform-linux, installation, tools] Bundled ripgrep aborts with jemalloc 'Unsupported system page size' on 16KB-page ARM64 kernels (Asahi Linux) (1 comment).
        *   #5104 [OPEN] [triage] [Desktop] Let an existing chat be moved into a project (or a sidebar group), including by a tool (0 comments).
        *   #5103 [OPEN] [triage] BYOK: sub-agents always use the session's wire API, so a sub-agent on a model from the other family fails with a 400 (0 comments).
        *   #5102 [OPEN] [triage] Regression: sandboxed git has no way to use a credential that differs from the Copilot/gh sign-in identity (0 comments).
        *   #5100 [OPEN] [triage] Session event delivery permanently fails after one 120s host-ack timeout (0 comments).
        *   #5099 [OPEN] [triage] Display-only hook for assistant messages (show real values to the user while the model sees redacted tokens) (0 comments).
        *   #5050 [OPEN] [mcp] `/mcp <server-name>` fails due to case sensitive matching (0 comments).
        *   #5017 [OPEN] [mcp, tools] SCP-style remote retains leading slash in GitHub repository owner (0 comments).

    *   **Latest Pull Requests (updated in last 24h):**
        *   #5093 [OPEN] install: verify the checksum entry matching the downloaded tarball (Author: hobostay). Addresses vacuous verification via `--ignore-missing` and empty checksums for new platforms.

3.  **Drafting Sections:**

    *   **Section 1: Today's Highlights**
        *   Need 2-3 sentences summarizing the most important updates.
        *   Key items: Release of `v1.0.96-0` and `v1.0.95` focusing on session improvements, macOS Entra authentication, and ACP context persistence. The community is actively discussing sandbox limits, BYOK model switching limitations, and critical stability issues like Node.js OOM crashes and MCP connection drops.

    *   **Section 2: Releases**
        *   List the key releases: `v1.0.96-0`, `v1.0.95` (with pre-releases `v1.0.95-0` to `v1.0.95-3`).
        *   Summarize core changes:
            *   **v1.0.96-0**: Faster interactive session startup in git repos, granular permission decision tracking in the timeline, and sandbox fixes for `/add-dir`.
            *   **v1.0.95 series**: Major authentication update with native Microsoft Entra broker support on macOS, `injectHosts` sandbox credential configuration with shell completions, persistent `--context` settings for ACP sessions, and robust retry logic for managed plugin setups.

    *   **Section 3: Hot Issues (Pick 10 noteworthy Issues, explain why they matter and community reaction)**
        *   Let's select the 10 most impactful/relevant ones based on comments, likes, and technical significance.
        *   *Issue 1:* #3709 [OPEN] - Allow `/model` to switch between multiple models, including BYOK/local providers, in one session (34👍, 9 comments). *Why it matters:* Highly requested feature for dynamic model switching during sessions, especially crucial for users leveraging BYOK local providers.
        *   *Issue 2:* #4686 [OPEN] - Node.js OOM crash after ~37 min — 31,965 leaked async libuv handles (4 comments). *Why it matters:* Critical stability bug causing session crashes, specifically impacting SEA packaged Node.js environments.
        *   *Issue 3:* #3355 [CLOSED] - Allow configurable context window for Claude Opus 4.6 (200K cap vs 1M model capability) (4👍, 5 comments). *Why it matters:* Significant context limitation causing unnecessary compaction in deep technical sessions.
        *   *Issue 4:* #5076 [CLOSED] - `/add-dir` does not add the directory to the sandbox allow list (4 comments). *Why it matters:* Core security/sandbox feature bug that restricts workspace access, partially addressed in `v1.0.96-0`.
        *   *Issue 5:* #3035 [OPEN] - Tool-callable `cwd` (equivalent of TUI `/cwd`) (3 comments). *Why it matters:* Important for automation and skills programmatically changing working directories and triggering skill rescans.
        *   *Issue 6:* #2536 [OPEN] - Atlassian MCP needs authorization on every invocation of the copilot cli (3👍, 3 comments). *Why it matters:* Major friction point for integration, requiring persistent token storage/refresh handling.
        *   *Issue 7:* #3081 [OPEN] - NixOS keychain support is broken (3👍, 1 comment). *Why it matters:* Platform-specific authentication blocker preventing token storage on NixOS.
        *   *Issue 8:* #5103 [OPEN] - BYOK: sub-agents always use the session's wire API, so a sub-agent on a model from the other family fails with a 400 (0 comments, but highly technical). *Why it matters:* Architectural limitation in BYOK mode causing API mismatches for multi-agent workflows.
        *   *Issue 9:* #5091 [OPEN] - Session queues all prompts, keeps trying to reconnect mcps when they are already connected (1 comment). *Why it matters:* Severe session hang and network loop issue, rendering sessions unusable.
        *   *Issue 10:* #4977 [OPEN] - Bundled ripgrep aborts with jemalloc 'Unsupported system page size' on 16KB-page ARM64 kernels (Asahi Linux) (1 comment). *Why it matters:* Critical platform support issue for Apple Silicon running Asahi Linux, blocking core search functionality.
        *   *Let's check other notable ones:* #5100 (session event delivery timeout), #5102 (sandboxed git credential customization). Let's stick to the top 10 selected above, highlighting community sentiment (likes/comments).

    *   **Section 4: Key PR Progress (Pick 10 important PRs, describe features or fixes)**
        *   *Correction note:* The data only lists 1 PR: #5093. I must mention this clearly but provide deep detail on #5093, and perhaps look for others if they are referenced in releases/issues, or just write a section focusing on the key code-level changes highlighted in the Release notes (treating release component changes as PR equivalents if necessary, but strictly labeling them as release changes, while focusing the "PR Progress" section on the sole PR #5093 and summarizing other core engineering improvements from the release notes). Let's write:
        *   Only one active PR is listed in the last 24h:
            *   **PR #5093 [OPEN]**: *install: verify the checksum entry matching the downloaded tarball* by hobostay. This PR addresses a critical security gap in the installation script where checksum verification could report success without actually validating the tarball (via `--ignore-missing` flags or empty checksums for new platforms). It ensures strict end-to-end integrity validation.
        *   To fulfill the "Pick 10" structural expectation when data is limited, I can pull key engineering fixes from the **Releases** section (which represent merged PRs):
            *   **Interactive session prompt optimization** (v1.0.96-0): Merged improvements to reach the input prompt sooner in git repositories.
            *   **Timeline permission decision tracking** (v1.0.96-0): Merged UI/logic updates to show whether user, policy, Assisted Permissions, or unattended fallback made permission decisions.
            *   **Sandbox `/add-dir` fix** (v1.0.96-0): Merged fix ensuring added directories get sandbox access for the current session.
            *   **macOS Entra broker authentication** (v1.0.95): Merged native authentication flow with browser fallback.
            *   **Sandbox credential `injectHosts` config** (v1.0.95): Merged configuration key supporting shell completion in Bash, Zsh, and Fish.
            *   **ACP `--context` persistence fix** (v1.0.95): Merged logic to apply context to both new and resumed ACP sessions.
            *   **Managed plugin retry logic** (v1.0.95): Merged hourly/policy-triggered retry setup instead of failing on every message.
            *   **`/user` command fix** (v1.0.96-0): Fix for the `/user` command execution.
            *   **Desktop Git spawn fix (Windows)** (referenced in issues like #5094, likely tracked in desktop releases): Fixing bundled git binary spawn failures on Windows desktop 1.1.27+.
            *   **Checksum verification standardization (PR #5093)**: Strict validation of tarballs.

    *   **Section 5: Feature Request Trends**
        *   Distill the most-requested feature directions from all Issues:
        *   *Dynamic Model Switching & BYOK Integration:* The inability to switch models mid-session (especially local/BYOK models via `/model`) is a top pain point (#3709, #5103).
        *   *Programmatic Agent Control & Tooling:* Requests for tool-callable `cwd` (#3035) and moving desktop chats into projects via tools (#5104) show a strong trend toward API-level agent programmability.
        *   *MCP Enhancements:* Case-insensitive MCP server matching (#5050), persistent authorization for authenticated MCPs like Atlassian (#2536), and fixing tool injection flags like `--add-github-mcp-tool` (#3052, #5101).
        *   *Context Window Customization:* Allowing larger context windows for models like Claude Opus 4.6 (#3355).
        *   *Terminal & Conversation UX:* Scrolling through history (#4313) and displaying timestamps for messages (#2535).

    *   **Section 6: Developer Pain Points**
        *   Summarize recurring developer frustrations or high-frequency requests:
        *   *Authentication and Identity Headaches:* Broken keychain support on specific distros like NixOS (#3081), repetitive authentication prompts for MCP servers (#2536), and the lack of custom credential overrides for sandboxed git (#5102).
        *   *Session Stability and Memory Leaks:* Severe memory leaks (OOM crashes after 37 mins due to leaked libuv handles, #4686) and session event delivery timeouts (#5100) or MCP connection loops (#5091) that completely freeze active sessions.
        *   *Platform Inconsistencies:* Broken environments like Windows Ramdisks (#3535) and Asahi Linux page size issues with bundled ripgrep (#4977) leave developers stranded on edge hardware/software configurations.
        *   *Sandbox and Configuration Persistence:* Configurations like hooks in `config.json` being wiped on restarts (#3403) and sandbox permissions not honoring JVM subprocess paths (#4516) or failing to register added directories (#5076) create frustrating workspace

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>



# OpenCode Community Digest — 2026-10-10

### 1. Today's Highlights
The OpenCode community is heavily focused on triaging and resolving critical stability issues in the V2 architecture, particularly concerning data persistence, MCP (Model Context Protocol) integrations, and provider model registry alignments. Meanwhile, a strong wave of community pull requests is merging key quality-of-life fixes, focusing heavily on CLI output standardization, UI state restoration, and connection resilience.

---

### 2. Releases
*No new releases were published in the last 24 hours.*

---

### 3. Hot Issues
Ten noteworthy issues are highlighted below for their impact on core workflows, migration friction, or community engagement:

*   **[Cannot connect to API: self-signed certificate](https://github.com/anomalyco/opencode/issues/54095)** (Open, 11 comments): Users on fixed corporate networks face connection errors unless Node.js is executed with the `--use-system-ca` flag. This is a critical blocker for enterprise environments using local root CAs.
*   **[MCP Client advertises elicitation.form capability but never handles requests](https://github.com/anomalyco/opencode/issues/51856)** (Open, 10 comments, 👍 2): A protocol mismatch where the client declares support for MCP elicitation but hangs and times out when the server requests form input. This breaks critical tool-call loops for MCP-dependent users.
*   **[Multiple reasoning_opaque values received in a single response](https://github.com/anomalyco/opencode/issues/51466)** (Closed, 7 comments): Console spam warning about multiple thinking parts per response when using providers like GitHub with Opus 5.5. This limits the concurrent use of multi-step reasoning models.
*   **[V2 does not import V1 MCP OAuth credentials](https://github.com/anomalyco/opencode/issues/53607)** (Closed, 5 comments): Upgrading to V2 drops OAuth-protected remote MCP servers into a perpetual `needs_auth` state because credentials stored in V1's `mcp-auth.json` are ignored. High migration friction for existing users.
*   **[OpenAI models disappear when OpenCode Zen or Go is connected](https://github.com/anomalyco/opencode/issues/52363)** (Open, 5 comments): ChatGPT OAuth logins succeed, but the `openai` provider fails to register in the provider registry, making models unselectable in `/models`. Breaks

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



Here is the Pi community digest for **2026-10-10**, summarizing the latest activity, issues, pull requests, and developer trends from the `earendil-works/pi` repository.

---

### 1. Today's Highlights
The community is actively troubleshooting Windows terminal compatibility, highlighted by a high-volume thread on Windows setup roadmaps. Critical bugs regarding session freezes upon pressing `<esc>` and silent prompt-dropping in RPC mode remain highly visible. On the development front, core maintainers are pushing vital fixes for extension hook consistency (specifically `before_agent_start` triggers) and message history hygiene (orphaned tool results cleanup).

---

### 2. Releases
*No new releases were published in the last 24 hours.*

---

### 3. Hot Issues (Top 10)
Here are the ten most impactful issues currently open or recently updated, reflecting critical bugs, integration hurdles, and community pain points:

*   **[#7547] Windows Support Fragmentation (Open)**  
    *   **Summary:** A high-engagement thread (79 comments) asking how developers best use Pi on Windows and where the core team should focus energy (native fixes vs. delegating to extensions).  
    *   **Why it matters:** Windows represents a massive developer audience, but terminal and setup fragmentation is currently a major barrier to entry.  
    *   *Link: https://github.com/earendil-works/pi/issues/7547*
*   **[#10031] Sporadic "Working..." Freeze on `<esc>` (Closed)**  
    *   **Summary:** Pi gets permanently stuck in a "Working..." state when thinking is stopped with the `<esc>` key, forcing users to kill the process via `CTRL+c` and resume.  
    *   **Why it matters:** Severe interactive UX blocker that interrupts developer workflows, especially during rapid iteration.  
    *   *Link: https://github.com/earendil-works/pi/issues/10031*
*   **[#10480] Direct OpenAI Connection Ignoring Manual Usage Limit Reset (Open)**  
    *   **Summary:** Users report that manually resetting ChatGPT Pro subscription limits

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>



# Qwen Code Community Digest — 2026-10-10

## Today's Highlights
The Qwen Code repository is experiencing significant activity around its **Managed Agent** architecture, with the core proposal (#12380) driving a staged delivery plan that spans multiple issues and PRs. The community is actively debating the balance between durable session management and developer experience, particularly around checkpointing, cancellation semantics, and multi-agent attribution. Several critical bug fixes landed this week, notably around XML tool-call recovery and context ceiling handling.

## Releases
- **v0.25.1-preview.1** — Includes a fix for replacing selected remote Hosts without losing bindings ([#13430](https://github.com/QwenLM/qwen-code/pull/13430)).
- **v0.25.0-nightly.20261009.085a44f336** — Same Host binding fix as the preview release.

## Hot Issues
1. **[#12380] Managed Agent Dual-Path Architecture Proposal** (51 comments) — The defining issue for Qwen Code's multi-agent future. Proposes a staged architecture that decouples model inference from tool-environment provisioning, with durable Session ownership and recoverable tool executions. High community engagement reflects the strategic importance of this direction.
2. **[#12867] Stage D Follow-ups for Managed Agent** (19 comments) — Tracks the remaining work after D1–D3 delivery: durable lifecycle, Turns/Actions, `java_durable` admission profile, and AgentDefinition. This is the execution layer that makes the #12380 proposal operational.
3. **[#13395] Kubernetes Tool Runtime Tracking** (17 comments) — Tracks progress on CSI Read/Write/Edit for the private runtime and cross-platform delivery gates. Critical for users who need Qwen Code to run reliably in containerized environments.
4. **[#6710] Distinguish User-Cancelled Turns from Unexpected Interruptions** (15 comments, P1) — A long-standing bug where restored sessions cannot reliably tell if a turn was cancelled by the user or crashed. Affects session recovery reliability.
5. **[#2596] Qwen CLI Keeps Adding 

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



# DeepSeek TUI Community Digest — 2026-10-10
*Based on activity in `codewhale-hq/Codewhale` (DeepSeek TUI / Codewhale)*

---

### 1. Today's Highlights
The development focus is heavily concentrated on the massive **runtime/TUI crate split** (Issues RS-8 through RS-14), which aims to deconstruct the monolithic TUI crate to separate portable runtime logic from host UI code. Alongside this architectural refactor, the community is pushing towards the **v0.10.2 release candidate** (major PR #6907), while critical bugs regarding Windows state-directory junctions and session-switch blockages are being actively patched.

---

### 2. Releases
*   **None in the last 24 hours.** However, the v0.10.2 candidate branch is under active integration, with major features like the Terminal dock and shell wait controls being finalized.

---

### 3. Hot Issues (Top 10)

*   **#6804 [localization] Call to Action: Form a Chinese Localization Group**
    *   *Author:* SparkofSpike | *Comments:* 6
    *   *Why it matters:* The project has massive documentation, and machine translations often fall short of readability standards. This call seeks community members to establish a formal group (likely via QQ group) to manually translate and maintain high-quality Chinese docs.
    *   *Reaction:* High interest, seeking active contributors.

*   **#6721 [enhancement, context] Emergency compaction — the impact on the `save session` task**
    *   *Author:* ronohara | *Comments:* 3
    *   *Why it matters:* Compacting a session mid-operation can abruptly cut off critical background tasks, such as personalized context transfers, leading to silent failures or corrupted session saves.

*   **#6923 [bug, enhancement] Gemini 429 error: wait and auto-retry last task**
    *   *Author:* Statter | *Comments:* 2
    *   *Why it matters:* Rate-limiting errors (HTTP 429) on Gemini models currently halt workflows abruptly. The community requests an automatic exponential backoff and retry mechanism.

*   **#6652 [bug, tui, performance] TUI scrolling becomes laggy after long runs**
    *   *Author:* luestr | *Comments:* 2
    *   *Why it matters:* Severe rendering performance degradation (described as "jelly-like" scrolling lag) occurs after prolonged terminal sessions, heavily impacting usability.

*   **#6728 [bug, tui, performance] CPU Usage Regression: v0.9.12 (idle) $\rightarrow$ v0.9.13 (moderate) $\rightarrow$ v0.10.0 (heavy)**
    *   *Author:* Gabriel-Degret | *Comments:* 2
    *   *Why it matters:* Detailed binary analysis reveals a severe CPU consumption regression on FreeBSD. Idle states are consuming heavy CPU cycles, indicating a background thread or polling loop leak.

*   **#6944 [bug, ux] Long-running work invisible after going background, Full Access blocks background API**
    *   *Author:* Hmbown | *Comments:* 1
    *   *Why it matters:* Long commands transition to background tasks silently, but under "Full Access" modes, the engine blocks subsequent API calls, creating a deadlock-like UX state.

*   **#6842 [bug, reliability] Session journal has no bound: compaction keeps superseded versions in RAM**
    *   *Author:* 7jrxt42BxFZo4iAnN4CX | *Comments:* 1
    *   *Why it matters:* Compaction archives old messages but fails to purge superseded versions from RAM, leading to unbounded memory growth over long sessions.

*   **#6866 [enhancement, mcp] Brief the model when MCP boot servers fail / recover**
    *   *Author:* asto18089 | *Comments:* 1
    *   *Why it matters:* Currently, if MCP servers fail to boot, the AI model receives no system warning, leading to hallucinations when trying to call non-existent tools.

*   **#6109 / #6155 [tui, ux] Pet: shared owner-contract fixtures and real-terminal habitat qualification**
    *   *Author:* Hmbown | *Comments:* 2
    *   *Why it matters:* Refines the experimental `/pet` feature, ensuring the animated whale widget maintains state across TUI/desktop boundaries and renders correctly in standard Kitty/braille terminals.

*   **#6942 [documentation] Code mode website MCP page and task card reconciliation**
    *   *Author:* Hmbown | *Comments:* 0
    *   *Why it matters:* Resolves inconsistencies in documentation where the MCP page still states tools are off by default, despite recent core updates enabling them by default.

---

### 4. Key PR Progress (Top 10)

*   **#6907 [v0.10.2] Terminal dock, shell wait controls, recovery and contributor fixes (CLOSED/Merged)**
    *   *Author:* Hmbown
    *   *Summary:* Major milestone candidate. Introduces a dockable Terminal pane, allows users to release shell waits while commands continue running in the background, and repairs shared runtime recovery policies.

*   **#6947 / #6949 [fix] State root relocation fixes for artifacts and subagents**
    *   *Author:* SparkofSpike
    *   *Summary:* Critical Windows fixes. Solves issues where relocating the `.codewhale` directory via junctions caused session-artifact write failures (`Fleet artifact path must stay within the workspace`) and broke sub-agent initialization.

*   **#6950 [feat] Plugin CLI installation and in-app OAuth sign-in**
    *   *Author:* LIghtJUNction
    *   *Summary:* Streamlines developer setup by removing the need for manual terminal commands to sign in to OAuth-bridged AI providers and simplifies plugin installations.

*   **#6948 [fix(tui)] Name the work that blocks a session switch**
    *   *Author:* SparkofSpike
    *   *Summary:* Improves UX during session transitions. Instead of a generic error refusing session switches, the engine now names the specific active task, maintenance job, or background process causing the block.

*   **#6924 [feat(runtime)] One control endpoint per runtime store, one driver per workspace**
    *   *Author:* gaord
    *   *Summary:* Fixes multi-workspace bugs in the VS Code extension. Ensures that separate workspaces utilizing the same user profile do not clash over control socket ownership.

*   **#6929 [fix(execpolicy)] A redirect is not a command separator**
    *   *Author:* SparkofSpike
    *   *Summary:* Resolves a Windows execution block where commands containing a lone `&` (e.g., standard shell redirects) were misclassified as unsafe command separators and blocked by the safety gate.

*   **#6920 [feat(tui)] Make pet mode the main Codewhale view (CLOSED/Merged)**
    *   *Author:* Hmbown
    *   *Summary:* Promotes the animated GPUI whale to the primary view

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>



# ComfyUI Community Digest

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>



# Ollama Community Digest — October 10, 2026

Here is your structured overview of the latest activity, key issues, and pull requests in the `ollama/ollama` repository.

---

### 1. Today's Highlights
Today’s activity highlights a strong focus on robustness, particularly regarding parser accuracy for reasoning models and system-level stability. Key developments include a critical security patch for the `seroval` dependency (CVE-2026-104846) and a performance optimization that skips local model compatibility migrations to significantly reduce overhead on high-volume workloads. Additionally, the community is actively debating API compliance improvements, especially regarding OpenAI-compatible endpoints and reasoning tags.

---

### 2. Releases
*No new releases were published in the last 24 hours.*

---

### 3. Hot Issues (Top 10 Noteworthy Issues)

1. **[CRITICAL] Accounts stuck in automated Stripe loop with unresponsive support (#18683)**
   * **Why it matters:** A severe billing flow bug completely blocks users from accessing Ollama Cloud services or modifying their subscriptions due to automated retry loops on unpaid invoices.
   * **Community Reaction:** High frustration; users report being locked out of the platform entirely with unresponsive support channels. [View Issue](https://github.com/ollama/ollama/issues/18683)
2. **MLX runner panic with qwen3.6:35b-mlx in Ollama 0.40.x (#18856)**
   * **Why it matters:** A regression introduced in version 0.40.x causes the MLX runner to crash/panic on large models, blocking Mac users who upgraded from the stable 0.35.0.
   * **Community Reaction:** Active debugging discussions; users are looking for rollbacks or hotfixes. (4 👍) [View Issue](https://github.com/ollama/ollama/issues/18856)
3. **0.35.1 or 0.34.4 cannot run mistral-medium-3.5:128b correctly (#18770)**
   * **Why it matters:** Reports of extreme memory inefficiency on high-spec hardware (M4 Max, 128GB RAM), where the model consumes 127GB of RAM and runs at an unusable speed of ~1 word per minute.
   * **Community Reaction:** Critical performance blocker for large-context local inference. [View Issue](https://github.com/ollama/ollama/issues/18770)
4. **`/v1/chat/completions` ignores `max_tokens` and overrides Modelfile `num_predict` (#18575)**
   * **Why it matters:** This critical API compliance bug leaves generation completely unbounded via the OpenAI-compatible endpoint, posing a severe

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

Thinking Process:

1.  **Analyze the Request:**
    *   **Role:** Technical analyst focused on AI developer tools.
    *   **Source Data:** GitHub data for `ggerganov/llama.cpp` (specifically formatted text provided by the user).
    *   **Date:** 2026-10-10 (The prompt asks to generate the digest for this date based on the provided data, which contains updates mostly from around 2026-10-09).
    *   **Sections required:**
        1.  **Today's Highlights** - 2-3 sentences summarizing the most important updates.
        2.  **Releases** - Summarize changes if new versions exist (looking at the b11538 down to b11528 list).
        3.  **Hot Issues** - Pick 10 noteworthy Issues, explain why they matter and community reaction (with links).
        4.  **Key PR Progress** - Pick 10 important PRs, describe features or fixes (with links).
        5.  **Feature Request Trends** - Distill the most-requested feature directions from all Issues.
        6.  **Developer Pain Points** - Summarize recurring developer frustrations or high-frequency requests.
    *   **Style:** Concise, professional, suited for technical developers. Include GitHub links for each item.

2.  **Analyze the Input Data:**
    *   *Releases (last 24h)*: b11538, b11537, b11535, b11534, b11533, b11532, b11531, b11530, b11529, b11528.
        *   Key commits/fixes in releases:
            *   b11538: CUDA: fix round issue, under MSVC the CPU and GPU agree (#30229)
            *   b11537: graph: reorder get_rows for embeddings (#30160) (fixes Gemma4, improves input embedding construction)
            *   b11535: llama-bench: respect -fitc if bigger than required benchmark size (#28331)
            *   b11534: CUDA: Remove redundant CUDA copies after SSM_SCAN (#29807)
            *   b11533: opencl: fix kernel compilation for a6x GPUs (#30176)
            *   b11532: model: use exact GELU for ModernBERT encoders (#30108)
            *   b11531: chat: refactor API (#30210)
            *   b11530: llama: keep the backend sampling graph static across ubatches (#30223)
            *   b11529: ggml: fix OOB write in ggml_acc with negative offset (#30135)
            *   b11528: meta: handle host views (#30217)
    *   *Latest Issues (top 30 by comment count, showing top ones for selection)*:
        *   #25618 (30 comments): Speculative decoding (draft-mtp / draft-dspark) greedy output diverges from vanilla on quantized targets (Q4_K_M vs bf16).
        *   #25593 (21 comments): SM_60 Quality Loss, FP32 math silently done in FP16, fix merged in two forks (Tesla P100).
        *   #29949 (12 comments): Feature Request: MoE expert cache with GPU-resident LRU - cache decisions and copies run on the GPU inside the compute graph.
        *   #25992 (11 comments, 12 👍): Server -np 4 --kv-unified returns other requests' responses verbatim on integrated HIP GPU (gfx1151).
        *   #30033 (10 comments): Performance degradation since PR #29622 with unsloth/Qwen3.8-Flash-Next-GGUF:UD-IQ3_XXS and dual Intel B70 (SYCL).
        *   #28090 (10 comments): Feature Request: Add an sm_86 entry to the MMVQ cutoff table (Q4_0 crosses at 7 on A10, worth 9.1%).
        *   #24473 (10 comments): Feature: Compact Conversation Action (on-demand / automatic context compaction).
        *   #30091 (7 comments): llama-server crashes due to "bad allocation" during long conversations (Windows/HIP).
        *   #29419 (7 comments): Flash-Attention crash in gemma4-assistant: Query head dimension mismatch (neq0 != HSK / D=2048/4096) on SYCL.
        *   #27532 (7 comments): WebUI Edit LLM responses (Payload / KV cache manipulation).
        *   #26964 (7 comments): Latest Windows ROCM not using GPU.
        *   #26038 (7 comments): Excessive compute buffer reservation in MTP draft context on ROCm HIP unnecessarily reduces fitted context size.
        *   #27733 (4 comments): final peg-native parse failure on trailing tail discards an entire completed generation (Qwen3.8).
        *   #29388 (4 comments): Feature Request: avoid allocating logits buffer for encoder-only models.
        *   #27833 (4 comments): DFlash speculative decoding fails with --split-mode tensor (shared output.weight in Meta() buffer).
    *   *Latest Pull Requests (top 20 shown, select top 10 important ones)*:
        *   #29882: vulkan: rms norm optimization using subgroup reductions (performance boost).
        *   #30187: opencl: add bin kernels kernel_gemm_moe_q4_k_q8_1_dp4a_bin, kernel_gemm_moe_q6_k_q8_1_dp4a_bin (Adreno optimization).
        *   #30254: server: allow load-on-startup models when --models-max is 0 (minor fix).
        *   #30253: vendor: apply deep nested json patch from upstream (fixes JSON parsing).
        *   #30233: llama: expose mixed-batch model capability (API addition).
        *   #28039: CUDA: Oversized norm grids are redistributed within CUDA's 65,535 Y/Z limit (fixes crashes on large models).
        *   #29600: Runtime support for Prism Bonsai 2 27B (model support).
        *   #30226: sycl: Q4_K MMVQ wide row pairing (SYCL perf optimization).
        *   #30201: server: allow checkpoint after last media (multimodal optimization).
        *   #28781: CUDA: fix crash for MTP decoding on pre-Pascal GPUs (speculative decoding fix).
        *   #29050: CUDA/HIP: matrix-core (MFMA) lightning indexer for CDNA2 (gfx90a) (ROCm optimization).
        *   #30242: common: limit the nesting of parsed JSON to 128 levels (security/stability hardening).
        *   #30249: opencl: int8 fused KQ: stage Q per head-size slice and allow head size 512 (OpenCL perf).
        *   #30114 / #30110: Add LiquidAI/d1-omni-600M decision model and LiquidAI/d1-3B vision decision model (major model support).
        *   #28485: ggml: add FP8 types and CPU conversions (FP8 support).
        *   #27512: Quant: OCP FP8 E4M3 support (FP8 quant).
        *   #29416: Support MiniCPM-V 4.7 (multimodal model support).
        *   #29791: vulkan: add fp8 and scaled matmul support (Vulkan FP8).

3.  **Drafting sections based on instructions:**

    *   **Today's Highlights (2-3 sentences summarizing the most important updates):**
        *   Focus on the overall state of the repo in this window: massive progress in kernel optimizations (Vulkan subgroup reductions, SYCL Q4_K MMVQ, OpenCL bin kernels), critical bug fixes for speculative decoding (MTP pre-Pascal crashes, quantization divergence), and expansion of model support (LiquidAI decision models, MiniCPM-V 4.7, Prism Bonsai 2). Also mention the release of build b11538 with crucial CUDA round-off and embedding fixes.

    *   **Releases (Summarize changes; omit if none):**
        *   Multiple releases from b11528 to b11538 are present. Summarize the key technical highlights of these releases:
            *   *Graph & Embeddings*: Graph reordered get_rows for embeddings, fixing Gemma4 and input embedding paths (b11537).
            *   *CUDA & Math correctness*: Fixed CUDA rounding issues under MSVC so CPU and GPU agree, removed redundant copies after SSM scans, and fixed an out-of-bounds write in `ggml_acc` with negative offsets (b11538, b11534, b11529).
            *   *Backend fixes*: OpenCL kernel compilation fixed for A6X GPUs; exact GELU used for ModernBERT encoders (b11533, b11532).
            *   *Server & Scheduler*: Refactored Chat API and kept backend sampling graphs static across ubatches to improve stability (b11531, b11530).

    *   **Hot Issues (Pick 10 noteworthy Issues, explain why they matter and community reaction):**
        *   Need to select 10 issues from the provided list and explain technical impact and community reaction (comments, thumbs up).
        *   1. *#25618* (Speculative decoding divergence on quantized targets): Crucial for users using Q4_K_M quantized models with MTP. 30 comments, 3 👍. Highlights a core numerical stability issue where greedy decoding yields different results compared to vanilla runs.
        *   2. *#25593* (SM_60 Quality Loss / FP32 done in FP16): Critical for legacy hardware (Tesla P100). 21 comments, 4 👍. Points to silent math precision degradation on sm_60 architectures, with community forks providing fixes.
        *   3. *#29949* (MoE expert cache with GPU-resident LRU): High-value feature request for MoE scaling. 12 comments, 1 👍. Aiming to move cache management to GPU compute graphs to avoid CPU-GPU bottlenecks.
        *   4. *#25992* (HIP integrated GPU returns other requests' responses verbatim): Severe server bug under parallel load (`-np 4 --kv-unified`) on Strix Halo. 11 comments, 12 👍. High thumbs-up showing strong community validation of a major KV cache multi-request isolation bug.
        *   5. *#30033* (SYCL performance regression with dual Intel B70): 10 comments, 1 👍. Highlights performance regressions post-PR #29622 for specific quantizations on Intel GPUs.
        *   6. *#28090* (MMVQ cutoff table sm_86 entry missing): 10 comments. Tuning issue causing suboptimal kernel selection on Ampere (A10), resulting in a reported 9.1% performance loss for Q4_0.
        *   7. *#24473* (Compact Conversation Action): 10 comments. Highly requested feature for UI/server to compact context windows on demand to prevent context limit crashes.
        *   8. *#30091* (Server crashes due to "bad allocation" during long conversations): 7 comments, 1 👍. Memory management issue on Windows/HIP builds with long-running sessions.
        *   9. *#29419* (Gemma4 Flash-Attention head dimension mismatch crash): 7 comments. Crash on SYCL/Vulkan when running Gemma4-assistant with specific head dimensions.
        *   10. *#27733* (Final peg-native parse failure discards entire generation): 4 comments. Critical parsing bug where trailing tokens cause complete loss of the generated output for Qwen3.8.
        *   *Self-Correction on selection*: Ensure the top 10 cover a balance of major bugs, feature requests, and high-impact community discussions.

    *   **Key PR Progress (Pick 10 important PRs, describe features or fixes):**
        *   Select the most technically interesting and impactful PRs from the list.
        *   1. *#29882* (Vulkan RMS norm subgroup reduction): Optimizes shader workgroup reductions, bringing major speedups on Intel Arc, Nvidia, and AMD GPUs.
        *   2. *#30187* (OpenCL Adreno bin kernels): Adds optimized `kernel_gemm_moe_q4_k_q8_1_dp4a_bin` and `kernel_gemm_moe_q6_k_q8_1_dp4a_bin` for Qualcomm Adreno GPUs.
        *   3. *#30114* & *#30110* (LiquidAI d1-omni-600M and d1-3B decision models): Major expansion into omni/vision decision models supporting audio, images, and text.
        *   4. *#30242* (Limit JSON nesting to 128 levels): Crucial security and stability hardening for `llama-server` to prevent recursive stack crashes (SIGSEGV/SIGBUS).
        *   5. *#28781* (CUDA fix crash for MTP decoding on pre-Pascal GPUs): Resolves illegal memory access in float get_rows kernel for cc < 600 during speculative decoding.
        *   6. *#29050* (ROCm MFMA lightning indexer for CDNA2): Adds matrix-core support for DeepSeek-V3.2/V4 lightning indexer on AMD CDNA2 (gfx90a).
        *   7. *#29791* (Vulkan FP8 and scaled matmul support): Adds fundamental FP8 compute capabilities to the Vulkan backend.
        *   8. *#30201* (Server checkpoint after last media): Optimizes multimodal server performance, avoiding unnecessary reprefilling of media content when editing subsequent messages.
        *   9. *#28485* (GGML add FP8 types and CPU conversions): Adds CPU support for loading and converting FP8 weights to FP16/BF16/FP32.
        *   10. *#29416* (MiniCPM-V 4.7 support): Extends multimodal capabilities by supporting the MiniCPM-V 4.7 architecture with 3D RoPE.
        *   *(Alternative addition)* *#30254* (Allow load-on-startup models when --models-max is 0) or *#30233* (Expose mixed-batch model capability). Let's stick to the highly technical kernel/model ones for maximum developer relevance, but mention server/API ones if space permits. Let's write a concise list of 10.

    *   **Feature Request Trends (Distill the most-requested feature directions from all Issues):**
        *   Group the requests logically:
            *   *Context & Conversation Management*: On-demand or automatic context compaction/compact action (#24473) and KV cache manipulation APIs (#27532).
            *   *MoE and Large Model Optimizations*: GPU-resident LRU caching for MoE experts (#29949) and expert parallelism tweaks.
            *   *Hardware Specific Kernel Gaps*: Adding cutoff table entries for specific architectures like sm_86 (#28090) and optimizing backend performance for specific GPUs (e.g., Intel B70 SYCL, Adreno OpenCL).
            *   *Encoder-only & Decision Models*: Reducing memory overhead (no logits buffer allocation) for encoder-only models (#29388) and expanding multimodal decision model support.
            *   *Speculative Decoding Enhancements*: Better debugging and alignment for draft models on quantized targets (#25618, #27833).

    *   **Developer Pain Points (Summarize recurring developer frustrations or high-frequency requests):**
        *   Highlight the structural issues developers are bumping into:
            *   *Backend Fragmentation & Hardware-specific Bugs*: Frustration with silent correctness bugs on specific hardware combos (HIP on integrated GPUs like gfx1151 causing cross-request bleed, SYCL/Vulkan crashes on Gemma4 head dimensions, SM_60 precision loss).
            *   *Speculative Decoding Instabilities*: Numerical divergence when using quantized targets with MTP/Draft models, and crashes on older architectures (pre-Pascal) or split-mode setups.
            *   *Memory & Compilation Overheads*: "Bad allocation" crashes during long conversations on Windows, excessive compute buffer reservation in MTP draft contexts reducing available context, and high RAM usage during SYCL compilation.
            *   *Lack of Backend Guidance*: Frustration over lack of documentation or guidance on selecting the right backend (CUDA vs HIP vs Vulkan) for specific AMD/Intel/NVIDIA configurations.

4.  **Refine the Language and Formatting:**
    *   Ensure all links are preserved and formatted cleanly.
    *   Maintain a professional, direct, and highly technical tone suited for AI/ML developers.
    *   Verify date consistency: refer to the digest date as 2026-10-10, noting the activity mostly culminating on 2026-10-09.

Let's double-check the exact issue/PR URLs format:
`URL: ggml-org/llama.cpp Issue #25618` -> standard format is `https://github.com

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*