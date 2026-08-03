# AI CLI Tools Community Digest 2026-08-04

> Generated: 2026-08-03 22:16 UTC | Tools covered: 12

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

1. **ComfyUI** — [v0.30.0](https://github.com/Comfy-Org/ComfyUI/releases/tag/v0.30.0) shipped with int8 convrot embedding lookup support and a new MRU-based policy for loading weights into process RAM, alongside a comfy-kitchen bump to 0.2.23. A v0.30.1 backport is also in progress to stabilize the branch.

2. **llama.cpp** — [b10244](https://github.com/ggerganov/llama.cpp/pull/26338) refactors Multi-Scale Attention (MSA) into its own dedicated `llama-kv-cache-msa` module, cleanly separating it from the core KV-cache logic. The release train also adds MTP support for Qwen3-Next and DeepSeek V3.2, a CUDA penalties-sampler backend, and a CUDA data-race fix in `block_reduce`.

3. **Qwen Code** — [v0.21.4](https://github.com/QwenLM/qwen-code/releases) graduates the Web Shell to a standalone release-ready desktop app with native lifecycle management, single-instance enforcement, and automatic updates. TUI keyboard shortcut documentation and history pagination for oversized conversation turns were also completed.

4. **OpenAI Codex** — Two new Rust alpha releases landed: [rust-v0.147.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.6) and [rust-v0.147.0-alpha.1.2](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.1.2), continuing rapid iteration on the Rust-based core.

5. **GitHub Copilot CLI** — [v1.0.78-3](https://github.com/github/copilot-cli/releases/tag/v1.0.78-3) adds a `/new-worktree` command for isolated worktree-based conversations, an interactive shell shortcut that triggers on Enter with an inline hint, and a fix defaulting `copilot login` to the browser flow for local desktop environments.

6. **Gemini CLI** — [v0.55.0-nightly.20260803](https://github.com/google-gemini/gemini-cli/releases/tag/v0.55.0-nightly.20260803.gf47d6c6f7) was released, addressing SDK tool argument validation, subagent recovery logic, and Whisper transcription reliability issues.

7. **llama.cpp** — [b10240](https://github.com/ggerganov/llama.cpp/pull/26508) announces an upcoming default server port change from 8080 to 9931, though the release notes contain an incorrect port number (`6631`) that has already been flagged by the community.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-08-04 — anthropics/skills*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

### 1. [fix(skill-creator): run_eval.py always reports 0% recall](https://github.com/anthropics/skills/pull/1298) — PR #1298
- **Functionality:** Comprehensive fix for the evaluation pipeline (`run_eval.py`, `run_loop.py`, `improve_description.py`) that was reporting `recall=0%` for every skill, rendering the description-optimization loop useless. Addresses trigger detection, Windows stream reading, and parallel worker isolation.
- **Discussion Highlights:** Tied to at least 10+ independent reproductions (see Issue #556). This is the most impactful infrastructure PR — without it, no skill description can be meaningfully optimized.
- **Status:** 🟢 OPEN | Author: MartinCajiao | Created: 2026-06-10

### 2. [Add document-typography skill](https://github.com/anthropics/skills/pull/514) — PR #514
- **Functionality:** Prevents common typographic defects in AI-generated documents: orphan words, widow paragraphs, and numbering misalignment. Targets every document Claude produces.
- **Discussion Highlights:** Addresses a universal pain point — typographic quality degradation in AI-generated output — with concrete, actionable rules.
- **Status:** 🟢 OPEN | Author: PGTBoos | Created: 2026-03-04

### 3. [fix(pdf): correct case-sensitive file references in SKILL.md](https://github.com/anthropics/skills/pull/538) — PR #538
- **Functionality:** Fixes 8 case-sensitivity mismatches in `skills/pdf/SKILL.md` (`REFERENCE.md`→`reference.md`, `FORMS.md`→`forms.md`). Breaks on case-sensitive filesystems (Linux/macOS).
- **Discussion Highlights:** A correctness fix that silently broke PDF skill functionality for a large portion of users. Highlights the importance of cross-platform file-reference hygiene.
- **Status:** 🟢 OPEN | Author: Lubrsy706 | Created: 2026-03-06

### 4. [Add ODT skill — OpenDocument creation, filling & HTML parse](https://github.com/anthropics/skills/pull/486) — PR #486
- **Functionality:** Full OpenDocument Format support (.odt, .ods) — creation, template filling, reading, and conversion. Triggers on mentions of ODT, ODS, ODF, OpenDocument, LibreOffice.
- **Discussion Highlights:** Fills a significant gap in document-format coverage alongside the existing docx/pdf skills.
- **Status:** 🟢 OPEN | Author: GitHubNewbie0 | Created: 2026-03-01

### 5. [Improve frontend-design skill clarity and actionability](https://github.com/anthropics/skills/pull/210) — PR #210
- **Functionality:** Major revision of the frontend-design skill to ensure every instruction is executable within a single conversation, with specific enough guidance to steer Claude's behavior without ambiguity.
- **Discussion Highlights:** Represents the community's push toward more practical, less theoretical skill design — a "Claude can actually follow this" standard.
- **Status:** 🟢 OPEN | Author: justinwetch | Created: 2026-01-05

### 6. [Add skill-quality-analyzer and skill-security-analyzer to marketplace](https://github.com/anthropics/skills/pull/83) — PR #83
- **Functionality:** Two meta-skills for the `example-skills` marketplace. The quality-analyzer evaluates skills across 5 dimensions (structure, documentation, examples, triggers, resources). The security-analyzer scans for permission risks and data exposure.
- **Discussion Highlights:** Signals growing maturity in the ecosystem — the community wants tooling to evaluate and secure skills before adoption.
- **Status:** 🟢 OPEN | Author: eovidiu | Created: 2025-11-06

### 7. [fix(docx): prevent tracked change w:id collision with bookmarks](https://github.com/anthropics/skills/pull/541) — PR #541
- **Functionality:** Fixes document corruption when the DOCX skill adds tracked changes to documents with existing bookmarks. The root cause is `w:id` being a shared ID space in OOXML; hardcoded low IDs (1, 2, 3) were colliding.
- **Discussion Highlights:** A subtle but critical correctness fix — without it, DOCX skill usage corrupts documents with bookmarks.
- **Status:** 🟢 OPEN | Author: Lubrsy706 | Created: 2026-03-06

### 8. [feat(skills): add self-audit — mechanical verification + reasoning quality gate](https://github.com/anthropics/skills/pull/1367) — PR #1367
- **Functionality:** A universal output-audit skill that verifies claimed files exist (mechanical check), then applies a four-dimension reasoning quality gate in damage-severity priority order. Works with any project, any stack, any model.
- **Discussion Highlights:** The most ambitious new-skill PR in the recent period. Represents the community's push toward AI output trustworthiness and verification.
- **Status:** 🟢 OPEN | Author: YuhaoLin2005 | Created: 2026-06-28

---

## 2. Community Demand Trends (from Issues)

| Trend | Evidence | Key Issue |
|-------|----------|-----------|
| **Security & Trust Boundaries** | Community skills distributed under `anthropic/` namespace impersonating official skills | [#492](https://github.com/anthropics/skills/issues/492) — 43 comments |
| **Enterprise Collaboration** | Org-wide skill sharing, direct sharing links, shared libraries | [#228](https://github.com/anthropics/skills/issues/228) — 16 comments, 👍 8 |
| **Cross-Platform Reliability** | Windows subprocess, encoding, and pipe bugs blocking the eval pipeline | [#1061](https://github.com/anthropics/skills/issues/1061), [#556](https://github.com/anthropics/skills/issues/556) |
| **Agent State & Memory** | Compact-memory skill for long-running agents using symbolic notation | [#1329](https://github.com/anthropics/skills/issues/1329) — 9 comments |
| **AI Safety & Governance** | Agent governance skill for policy enforcement, threat detection, audit trails | [#412](https://github.com/anthropics/skills/issues/412) |
| **Multi-Cloud / Multi-Provider** | AWS Bedrock support, MCP exposure as API surface | [#29](https://github.com/anthropics/skills/issues/29), [#16](https://github.com/anthropics/skills/issues/16) |
| **Plugin & Duplicate Management** | document-skills and example-skills installing identical content | [#189](https://github.com/anthropics/skills/issues/189) — 👍 9 |
| **Enterprise Data Workflows** | SAP-RPT-1-OSS predictor for SAP business data analytics | [#181](https://github.com/anthropics/skills/pull/181) |

---

## 3. High-Potential Pending Skills

These are active, open PRs with strong signals that may merge soon:

| PR | Skill / Fix | Why It's High-Potential |
|----|-------------|------------------------|
| [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** (reasoning quality gate) | Most ambitious new skill; addresses trust in AI output — a top community concern |
| [#1479](https://github.com/anthropics/skills/pull/1479) | **plan-file-hygiene** | Addresses Issue #1417 (planning artifact lifecycle gap); authored by Palo Alto AI Research Lab |
| [#1302](https://github.com/anthropics/skills/pull/1302) | **color-expert** | Comprehensive color-knowledge skill covering naming systems, color spaces, and usage guidance |
| [#1323](https://github.com/anthropics/skills/pull/1323) | **trigger detection fix** | Unblocks the entire description-optimization loop; prerequisite for all eval-based improvements |
| [#1261](https://github.com/anthropics/skills/pull/1261) | **trigger-eval isolation** | Prevents eval command files from polluting the user's live project — critical for safe parallel evaluation |
| [#1298](https://github.com/anthropics/skills/pull/1298) | **run_eval.py comprehensive fix** | Foundational infrastructure; without this, no skill description can be optimized |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Covers the full testing stack from unit to React component testing — high practical value |

---

## 4. Skills Ecosystem Insight

The community's most concentrated demand is **fixing the foundational skill-creation and evaluation tooling** (trigger detection, Windows compatibility, cross-platform correctness) so that the description-optimization loop actually works — while simultaneously pushing for **security governance, enterprise sharing, and AI output verification** as the next generation of skill capabilities.

---

# Claude Code Community Digest — 2026-08-04

---

## 1. Today's Highlights

The community is dominated by billing and subscription anomalies on Max plans — issue #16157 (instantly hitting usage limits) remains the most-discussed item with 1,483 comments and 691 upvotes, indicating a widespread and unresolved pain point. A second high-engagement thread (#26224, 150 👍) reports Claude Code hanging for 5–20 minutes on prompts, suggesting a performance regression. Two documentation PRs were merged for plugin developers, addressing `MessageDisplay` streaming semantics and `skipLfs` marketplace source configuration.

---

## 2. Releases

No new releases were published in the last 24 hours.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| [16157](https://github.com/anthropics/claude-code/issues/16157) | **Instantly hitting usage limits with Max subscription** | Core billing bug affecting Max subscribers; 1,483 comments suggest a systemic issue, not isolated. | 691 👍 — highest engagement; users report credits vanishing without corresponding API usage. |
| [26224](https://github.com/anthropics/claude-code/issues/26224) | **Claude Code hanging/freezing on prompts for 5–20 min** | Severe UX degradation blocking productive work; marked URGENT by reporter. | 150 👍 — strong community validation of the severity. |
| [80468](https://github.com/anthropics/claude-code/issues/80468) | **Desktop App Crashing After Latest Update (Windows)** | Regression in the Windows MSIX package breaks the desktop app entirely for some users. | 11 comments; low engagement but critical for Windows desktop users. |
| [82506](https://github.com/anthropics/claude-code/issues/82506) | **Session limit consumed without using (Max bug)** | Complements #16157 — another Max billing anomaly where sessions are deducted without activity. | 11 comments, 5 👍; pattern reinforces billing trust erosion. |
| [79597](https://github.com/anthropics/claude-code/issues/79597) | **Fable 5 walled behind usage credits for setup-token auth** | Headless/automation Max accounts cannot access Fable 5 in interactive picker; blocks CI/CD workflows. | 11 comments, 10 👍; affects developer automation pipelines. |
| [83633](https://github.com/anthropics/claude-code/issues/83633) | **Paid Max account blocked by onboarding wall after login** | 10th public report of this signature; onboarding flag (`has_finished_claudeai_onboarding=false`) incorrectly gates paid accounts. | 10 comments; indicates a persistent auth-state bug across platforms. |
| [81275](https://github.com/anthropics/claude-code/issues/81275) | **Browser pane crash (GPU process exit code 0x60C201E)** | In-app Cowork browser preview crashes the entire Electron app on Windows across Intel, NVIDIA, and WARP. | 9 comments; same crash code across hardware configs suggests a fundamental Electron/Chromium issue. |
| [35581](https://github.com/anthropics/claude-code/issues/35581) | **Feature request: configurable paste text collapsing threshold** | Voice-to-text users and anyone pasting large blocks need control over the `[Pasted text #1 +N lines]` behavior. | 24 👍 — strong community support; 5 comments. |
| [83579](https://github.com/anthropics/claude-code/issues/83579) | **Weekly + Fable quota jumped 0% → 50%/100% while idle** | Quota consumption spike after Jul 31 reset on an idle Max 20x account; possible reset-side bug. | 5 comments; adds to the billing anomaly cluster. |
| [71700](https://github.com/anthropics/claude-code/issues/71700) | **Kitty keyboard protocol gated on terminal-name allow-list** | Alacritty and other capable terminals are incorrectly denied Kitty keyboard protocol support. | 5 comments, 1 👍; TUI usability issue for Linux terminal users. |

---

## 4. Key PR Progress

| # | PR | Description |
|---|-----|-------------|
| [83374](https://github.com/anthropics/claude-code/pull/83374) | **docs(plugin-dev): document MessageDisplay streaming semantics** | Adds `MessageDisplay` to the bundled Hook Development skill documentation — trigger description, event guidance, and quick-reference table. Previously omitted despite being a supported hook event. |
| [77977](https://github.com/anthropics/claude-code/pull/77977) | **docs(plugin-dev): document skipLfs marketplace sources** | Documents the `skipLfs` option for `github` and `git` marketplace source objects in plugin-dev guidance, with examples for GitHub shorthand and generic Git URLs. Refs #63035. |

*Note: Only 2 PRs were updated in the last 24 hours; both are documentation-only.*

---

## 5. Feature Request Trends

- **TUI customization & control** — Multiple requests for configurable TUI behavior: paste-text collapsing thresholds (#35581, 24 👍), turn-duration verb customization (#83659), and terminal row usage under tmux (#83660). Developers want finer-grained control over the terminal UI output.
- **Safety filtering exemptions** — #83661 requests whitelisting epidemiological modeling code from Opus 5's safety filters, reflecting a broader tension between safety guardrails and legitimate research/statistical workflows.
- **Subagent model accuracy** — #83663 reports that the agent view row displays the parent session's model instead of the per-spawn `model` override, a UI accuracy issue already partially addressed in v2.1.199 for `/agents` but not for the agent view panel.
- **Cross-machine browser driving** — #77605 requests reliable device identification so the Claude in Chrome connected browser can be driven across machines, highlighting a gap in the browser extension's multi-device support.

---

## 6. Developer Pain Points

- **Billing & usage anomalies dominate.** Issues #16157, #82506, #83579, and #79597 all report unexpected credit/session consumption or quota jumps on Max plans — eroding trust in the subscription model. The pattern spans interactive, headless, and setup-token auth flows.
- **Desktop app stability on Windows.** Multiple Windows-specific crashes (#80468, #81275, #81836) in the MSIX package suggest an Electron/Chromium regression in the 1.24012.9 release, particularly around the browser pane and GPU process lifecycle.
- **Authentication & onboarding state bugs.** #83633 (paid Max account blocked by onboarding wall) and #77913 (silent fallback to unencrypted storage on ChromeOS/Crostini) indicate fragile auth-state management across platforms and environments.
- **Subagent dispatch failures.** #83366 reports subagent dispatch never executing turn 1 inside daemon-forked background sessions (`--bg-pty-host`), a model-independent bug causing hangs for hours.
- **TUI rendering gaps.** Issues with tmux row usage (#83660), Kitty keyboard protocol (#71700), and paste text collapsing (#35581) collectively signal that the terminal UI layer needs more configurability and cross-terminal compatibility work.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-04

---

## 1. Today's Highlights

Two new Rust alpha releases (`0.147.0-alpha.6` and `0.147.0-alpha.1.2`) landed in the last 24 hours, continuing the rapid iteration on the Rust-based Codex core. On the issue front, Windows/WSL ecosystem bugs dominate the top discussions — ranging from OneDrive-backed workspace disconnects (#35420) to WSL repos being incorrectly flagged as non-Git (#35119) — reflecting the platform's highest pain points. Community attention is also focused on model-catalog inconsistencies for GPT-5.6 Sol and growing demand for accessibility (RTL) and MCP tooling improvements.

---

## 2. Releases

- **rust-v0.147.0-alpha.6** — [Release](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.6)
- **rust-v0.147.0-alpha.1.2** — [Release](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.1.2)

Both are incremental alpha builds in the 0.147.0 series. No changelog details were provided in the release metadata; the alpha.6 tag suggests this is the sixth pre-release iteration, likely containing incremental Rust-core hardening and platform fixes.

---

## 3. Hot Issues

| # | Title | Comments | 👍 | Why It Matters |
|---|-------|----------|-----|----------------|
| [#35420](https://github.com/openai/codex/issues/35420) | Work/Codex stream repeatedly disconnects on OneDrive-backed Windows workspace | 30 | 0 | Critical connectivity regression for a large segment of Windows enterprise users; OneDrive degradation causes cascading stream failures. |
| [#28919](https://github.com/openai/codex/issues/28919) | Windows app missing "control other devices" tab in Settings > Connections | 26 | 30 | Highest-liked open issue; blocks remote device management workflows in the Codex Windows app. |
| [#19504](https://github.com/openai/codex/issues/19504) | Add full RTL support for Arabic & Hebrew users | 23 | 19 | Long-running Papercuts accessibility request; Arabic text rendering and alignment remain broken in both Codex and Chat panels. |
| [#21211](https://github.com/openai/codex/issues/21211) | Thread navigation/loading slows from unbounded metadata and eager large-history hydration | 23 | 2 | Supersedes #21154; identifies SQLite bloat from thread metadata as a root cause of sluggish navigation — affects all users with long-running threads. |
| [#17574](https://github.com/openai/codex/issues/17574) | Subagents leak stdio MCP helper trees; xcodebuildmcp and chrome-devtools-mcp accumulate indefinitely | 15 | 0 | Resource leak on macOS that degrades performance over time; MCP helper processes are never cleaned up after subagent use. |
| [#31860](https://github.com/openai/codex/issues/31860) | GPT-5.6 Sol catalog-capped at 372K vs the 1.05M model spec | 14 | 26 | Second-highest liked issue; model catalog client is artificially limiting context window, preventing users from utilizing the full Sol spec. |
| [#29639](https://github.com/openai/codex/issues/29639) | Browser Use Node REPL fails on Windows with WSL workspace due to unmapped sandboxCwd | 14 | 3 | WSL+Windows Desktop sandbox path mismatch breaks a key automation workflow (Node REPL in browser-use scenarios). |
| [#35119](https://github.com/openai/codex/issues/35119) | 26.721.3404 marks valid WSL repositories as non-Git and reports "Git is unavailable" | 14 | 13 | Regression in a recent app version; valid WSL ext4 Git repos are incorrectly detected as non-Git, breaking the entire Git-dependent workflow. |
| [#29908](https://github.com/openai/codex/issues/29908) | apply_patch and managed sandbox fail with Bubblewrap loopback/userns errors on Ubuntu 24.04 | 13 | 0 | Sandbox setup failure on a common Linux dev environment; blocks `apply_patch` and managed sandbox commands before they can execute. |
| [#34684](https://github.com/openai/codex/issues/34684) | `codex mcp login` fails with "No authorization support detected" on macOS against spec-compliant OAuth server | 9 | 5 | Platform-specific OAuth regression; same server works on Linux but not macOS, indicating a macOS authorization detection bug. |

---

## 4. Key PR Progress

| # | Title | Summary |
|---|-------|---------|
| [#36800](https://github.com/openai/codex/pull/36800) | Avoid reinjecting permissions after command approvals | Tracks approved command prefixes separately from stable permissions instructions; emits only newly approved prefixes after exec-policy amendments instead of reappending full permission blobs. |
| [#36793](https://github.com/openai/codex/pull/36793) | Terminate timed-out Git process trees | Git metadata commands now run in dedicated process groups (Unix) or Job Objects (Windows), ensuring timeout cleanup actually terminates orphaned helper processes. |
| [#36781](https://github.com/openai/codex/pull/36781) | Add per-surface MCP tool exposure controls | New `omit_tools_from` field on MCP server config lets servers opt out of direct exposure, tool search, or Code Mode calling independently — granular control over where MCP tools appear. |
| [#36772](https://github.com/openai/codex/pull/36772) | Raise host-owned Codex Apps catalog limit | Increases catalog capacity from 2,048 to 8,192 items for host-owned `codex_apps` registrations while keeping the standard MCP limit at 2,048. |
| [#36787](https://github.com/openai/codex/pull/36787) | Consolidate model instructions in `ModelMessages` | Removes `ModelInfo.base_instructions` as an in-memory instruction source; uses `model_messages.instructions_template` consistently across bundled, remote, fallback, and overridden model metadata. |
| [#36796](https://github.com/openai/codex/pull/36796) | Add Agent Plugins MCP config parsing | New `parse_agent_plugin_mcp_config` translates Agent Plugins v1 `mcp.json` files into Codex MCP server configuration, with `PLUGIN_ROOT` and `PLUGIN_DATA` expansion support. |
| [#36792](https://github.com/openai/codex/pull/36792) | Gate plugin usage instructions by model capability | Adds `include_plugin_usage_instructions` to model metadata (defaulting to `false`); plugin guidance is emitted only when the selected model enables it. |
| [#36782](https://github.com/openai/codex/pull/36800) | Add Guardian session reuse and interruption tests | Verifies consecutive tool reviews reuse the same Guardian session without prewarming, and that interrupting a pending review correctly records an aborted tool result. |
| [#36771](https://github.com/openai/codex/pull/36771) | Harden Linux managed proxy helper lifecycles | Fixes captured standard streams remaining open after sandboxed command exits, prevents proxy readiness failures from inherited closed descriptors, and cleans up stale socket directories from zombie owners. |
| [#36774](https://github.com/openai/codex/pull/36774) | Clarify config layer iteration APIs | Replaces ordering enum and `include_disabled` boolean with named `ConfigLayerStack` iterators; separates enabled-only iteration from `all_layers_*` iteration that includes disabled layers. |

---

## 5. Feature Request Trends

The most-requested feature directions across open issues are:

1. **Internationalization & Accessibility** — RTL support for Arabic/Hebrew (#19504) is the highest-voted accessibility request and has been open for over a year.
2. **MCP & Plugin Ecosystem Maturity** — Per-surface MCP tool exposure (#36781), Agent Plugins config parsing (#36796), and MCP OAuth resource parameter fixes (#33403) all point to a community that wants MCP to be more robust, configurable, and cross-platform.
3. **Model Configuration & Presets** — Saved model/reasoning presets with hotkeys (#35340) and restoring GPT-5.6 Sol to the full catalog spec (#31860) reflect demand for finer-grained model control.
4. **Background & Automation Capabilities** — A `monitor` tool for event-driven agent wake-ups (#29922) and Gmail multi-account support (#30418) indicate users want Codex to move beyond turn-driven interaction.
5. **Archived Content Accessibility** — Restoring archived chats to the main UI (#27207) is a regression-driven request that signals a UX navigation issue.
6. **File System Ergonomics** — Absolute path and `~` expansion in `@` file mentions (#11996) is a long-standing TUI quality-of-life request.

---

## 6. Developer Pain Points

- **Windows/WSL Integration Instability** — At least 8 of the top 30 issues are Windows or WSL-specific (OneDrive disconnects, WSL Git detection, Bubblewrap sandbox failures, clipboard screenshots in WSL, remote SSH file-edit approval, kernel Token growth from git.exe, app-server crashes with `0xC000013A`, and Node REPL sandboxCwd mismatches). This is the single largest cluster of pain.
- **Rate Limit & Credit Drain on New Models** — Multiple reports (#36457, #36801, #36783) indicate GPT-5.6 Terra and Sol are consuming credits at unexpectedly high rates, with users reporting exhaustion of weekly quotas within hours.
- **Model Catalog Inconsistencies** — GPT-5.6 Sol being catalog-capped (#31860), missing from the desktop picker (#36743), and the `gpt-5.6-sol` model not being recognized for ChatGPT accounts (#34027) suggest a fragmented model rollout with config drift across surfaces.
- **MCP Server Reliability** — MCP login failures on macOS (#34684), OAuth refresh breaking after token expiry (#33403), false "MCP startup interrupted" TUI warnings (#36486), and subagent MCP tree leaks (#17574) all point to MCP infrastructure needing harderening.
- **Sandbox & Tool-Call Failures** — `apply_patch` failures on Ubuntu (#29908), Bubblewrap loopback errors, and remote SSH file-edit approval unresponsiveness (#34652) are blocking core agent workflows.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-04

## Today's Highlights
The Gemini CLI team released a new nightly build (`v0.55.0-nightly.20260803`) and addressed several critical stability issues in the SDK and core agent loop. A cluster of new bug reports surfaced around Whisper transcription reliability, SDK tool argument validation, and subagent recovery logic, indicating active areas of scrutiny in the agent runtime.

## Releases
- **v0.55.0-nightly.20260803.gf47d6c6f7** — Nightly build released 2026-08-03. [Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.55.0-nightly.20260802.gf47d6c6f7...v0.55.0-nightly.20260803.gf47d6c6f7)

## Hot Issues

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** — Subagent recovery after MAX_TURNS incorrectly reports GOAL success (p1, 12 comments). Masks user interruptions as successful completions, undermining trust in agent orchestration.
2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** — Generalist agent hangs indefinitely on simple operations like folder creation (p1, 8 comments). A long-standing regression that blocks core workflows.
3. **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353)** — Robust component-level evaluations EPIC (p1, 7 comments). Follow-up to behavioral eval infrastructure; tracks scaling eval coverage across 6 Gemini models.
4. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** — Assess AST-aware file reads, search, and mapping (p2, 7 comments, feature). High community interest in reducing token noise and turn count via precise codebase navigation.
5. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** — Shell command execution stuck at "Waiting input" after completion (p1, 4 comments). Recurring hang that breaks automation pipelines.
6. **[#28649](https://github.com/google-gemini/gemini-cli/issues/28649)** — SDK tool arguments abort sendStream on malformed JSON (new, 1 comment). Unhandled `JSON.parse()` failures crash the entire agent loop instead of surfacing tool errors.
7. **[#28648](https://github.com/google-gemini/gemini-cli/issues/28648)** — Whisper transcription drops records split across stdout chunks (new, 1 comment). Stream boundary handling bug causes silent data loss in voice transcription.
8. **[#28644](https://github.com/google-gemini/gemini-cli/issues/28644)** — Interrupted Whisper downloads treated as installed models (new, 1 comment). Partial writes create phantom installed models, wasting disk and confusing model selection.
9. **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)** — Browser Agent ignores settings.json overrides like maxTurns (p2, 3 comments). Configuration drift between CLI and browser subagent causes unpredictable behavior.
10. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** — Browser subagent fails on Wayland (p1, 4 comments). Linux desktop compatibility gap for browser automation workflows.

## Key PR Progress

1. **[#28670](https://github.com/google-gemini/gemini-cli/pull/28670)** — Fix GCA agent mode fallback on model capacity errors (429/MODEL_CAPACITY_EXHAUSTED). Prevents infinite retry loops on exhausted models.
2. **[#28669](https://github.com/google-gemini/gemini-cli/pull/28669)** — Consolidate TUI testing into a single self-contained `tui-tester` skill. Removes redundant `agent-tui` skill and simplifies agent guidance.
3. **[#28481](https://github.com/google-gemini/gemini-cli/pull/28481)** — Refresh MCP OAuth tokens using stored client ID. Fixes credential deletion on failed refresh, preventing repeated re-authentication.
4. **[#28665](https://github.com/google-gemini/gemini-cli/pull/28665)** — Fix VS Code extension companion leaking Disposables via comma operator in `activate()`.
5. **[#28666](https://github.com/google-gemini/gemini-cli/pull/28666)** — Validate workspace directories in GlobTool.execute() to align with validation logic. Prevents out-of-scope file access.
6. **[#28664](https://github.com/google-gemini/gemini-cli/pull/28664)** — Reflect full MCP server config (env, cwd, headers) in consent prompts and harden stdio environment handling.
7. **[#28663](https://github.com/google-gemini/gemini-cli/pull/28663)** — Harden `fetchJson` against malformed JSON and stream failures in extension GitHub fetch operations.
8. **[#28586](https://github.com/google-gemini/gemini-cli/pull/28586)** — Preserve `thoughtSignature` in functionCall parts to fix 400 errors on parallel tool calls (regression since v0.53.0).
9. **[#28639](https://github.com/google-gemini/gemini-cli/pull/28639)** — Guard `formatTruncatedToolOutput` against non-positive `maxChars` to prevent output inflation via negative-index `slice`.
10. **[#28660](https://github.com/google-gemini/gemini-cli/pull/28660)** — Keep `sendStream` alive on malformed SDK tool arguments by defensively parsing and returning structured `functionResponse` errors.

## Feature Request Trends
- **AST-aware tooling**: Strong demand for AST-based file reads, search, and codebase mapping to reduce token waste and turn count (issues #22745, #22746).
- **Subagent observability**: Community requests for subagent trajectory visibility via `/chat share` (#22598) and improved bug reports that include subagent context (#21763).
- **Auto Memory hardening**: Multiple issues (#26522, #26523, #26525) highlight the need for deterministic redaction, inbox quarantine, and retry limits in the memory system.
- **Browser agent resilience**: Session takeover, lock recovery, and Wayland support are recurring asks (#22232, #21983, #22267).

## Developer Pain Points
- **Agent hangs and crashes**: Recurring issues with generalist agent hangs (#21409), shell command execution stalls (#25166), and get-shit-done output hook crashes (#22186) dominate the bug queue.
- **SDK/agent loop fragility**: Malformed tool arguments now crash `sendStream` (#28649), and Whisper stream handling drops records (#28648) or creates phantom installed models (#28644).
- **Configuration drift**: Browser agent ignoring `settings.json` overrides (#22267) and subagents running without permission since v0.33.0 (#22093) erode user trust in agent sandboxing.
- **Tool limit and validation**: 400 errors when exceeding 128 tools (#24246) and incorrect `\n` escape handling (#22466) indicate scaling and edge-case handling gaps in the core tool layer.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-04

---

## 1. Today's Highlights

The **v1.0.78-3** release ships three targeted improvements: a new `/new-worktree` command for isolated worktree-based conversations, an interactive shell shortcut that now triggers on Enter with an inline hint when the `$` prompt is armed, and a fix defaulting `copilot login` to the browser flow for local desktop environments. The issue tracker remains active with 29 items, led by strong community interest in plugin scoping, multi-model BYOK support, and terminal rendering reliability.

---

## 2. Releases

### v1.0.78-3

| Category | Change |
|----------|--------|
| **Added** | `/new-worktree` command — creates a new git worktree and starts a fresh conversation in it |
| **Improved** | Interactive shell shortcut launches on Enter; shows inline hint when `$` is armed |
| **Fixed** | `copilot login` now defaults to the browser flow for local desktop (was previously ambiguous) |

**Link:** [Release v1.0.78-3](https://github.com/github/copilot-cli/releases/tag/v1.0.78-3)

---

## 3. Hot Issues

**1. [#1665](https://github.com/github/copilot-cli/issues/1665)** — *Support Copilot CLI Plugins Scoped to Project or Repository* (CLOSED, 18 👍, 14 comments)
Community demand for per-project/per-repo plugin configuration rather than the current per-user global scope. High engagement reflects widespread frustration with plugin management in multi-repo workflows.

**2. [#3282](https://github.com/github/copilot-cli/issues/3282)** — *Add multiple BYOK model capability* (OPEN, 20 👍, 7 comments)
Users with Bring-Your-Own-Key setups cannot switch between multiple BYOK models without restarting the session. The top-liked open issue highlights a significant gap for self-hosted model operators.

**3. [#3709](https://github.com/github/copilot-cli/issues/3709)** — *Allow /model to switch between multiple models, including BYOK/local providers* (OPEN, 20 👍, 3 comments)
The `/model` picker only lists GitHub-hosted models, ignoring local BYOK providers. Closely related to #3282 — both address the inability to dynamically switch models mid-session.

**4. [#1464](https://github.com/github/copilot-cli/issues/1464)** — *Skills beyond alphabetical position ~32 appear unreachable* (OPEN, 7 👍, 6 comments)
When ~63 skills are installed, the system prompt truncates at 32, and a custom skill at position ~36 is never selected. A real usability ceiling for power users with large skill collections.

**5. [#4337](https://github.com/github/copilot-cli/issues/4337)** — *gpt-5.6-luna advertised but not accessible via /chat/completions* (CLOSED)
A newly advertised model is only reachable through `/responses`, breaking MoA/aggregator tooling that relies on the OpenAI-compatible chat completions endpoint.

**6. [#4352](https://github.com/github/copilot-cli/issues/4352)** — *Add option to disable OSC 9;4 progress bar sequences* (OPEN)
Progress bar escape sequences render as visual noise on kitty terminals with no opt-out mechanism. A quality-of-life gap for terminal purists.

**7. [#4349](https://github.com/github/copilot-cli/issues/4349)** — *Managed settings policy fetch fails on valid enum value "enable"* (OPEN)
Enterprise GHE managed-settings validation rejects `"enable"` for `permissions.disableBypassPermissionsMode`, blocking all local/custom MCP servers. Critical for enterprise adopters.

**8. [#4346](https://github.com/github/copilot-cli/issues/4346)** — *MCP registry policy fetch returns 403 for Actions GITHUB_TOKEN* (OPEN)
The documented PAT-less Actions setup (`copilot-requests: write`) is blocked from accessing non-default MCP servers due to registry policy fetch returning 403. Blocks CI/CD automation.

**9. [#4345](https://github.com/github/copilot-cli/issues/4345)** — *Reasoning effort 'medium' not supported for claude-haiku-4.5* (OPEN)
Feature flag interaction causes repeated execution failures when both `copilot_cli_opus_medium_effort_default` and `copilot_cli_gpt_5_4_mini_for_explore` are active. A subtle but disruptive edge case.

**10. [#4334](https://github.com/github/copilot-cli/issues/4334)** — *Stashed (ctrl+S) prompt discarded on session switch* (OPEN)
A prompt stashed with Ctrl+S is permanently lost after switching sessions; pop restores nothing. Data loss risk for users who rely on stash/pop workflow.

---

## 4. Key PR Progress

No pull requests were updated in the last 24 hours. The repository currently has **0 open PRs** in the latest activity window.

---

## 5. Feature Request Trends

Analysis of the issue corpus reveals five dominant feature directions:

1. **Plugin Lifecycle & Scoping** — Per-project plugin installation (#1665), enable/disable toggling (#2714), and Windows symlink support (#2286). The community wants plugin management that mirrors project-level configuration rather than global user scope.

2. **Multi-Model Flexibility** — Support for multiple BYOK models (#3282), mid-session model switching including local/BYOK providers (#3709), and reasoning-effort compatibility across model families (#4345). Users reject the current "one model per session" constraint.

3. **Terminal Rendering & Input** — Scrollable conversation history (#4313), proper table formatting (#2412), OSC 9;4 opt-out (#4352), and WSL2 Ctrl+H fix (#4328). Rendering correctness is a persistent pain point across platforms.

4. **Enterprise & CI Reliability** — Managed settings policy validation (#4349), MCP registry access via GITHUB_TOKEN in Actions (#4346), and session cost tracking accuracy (#4351). Enterprise adopters need robust, silent reliability.

5. **Session Continuity** — Stash/pop persistence (#4334), resume model/reasoning fidelity (#4340), and scheduled prompt queue integrity (#4078). Users expect session state to survive switches and interruptions.

---

## 6. Developer Pain Points

- **Plugin Management Rigidity** — No per-project scoping, no enable/disable toggle, and Windows symlink breakage create a fragmented plugin experience across environments.
- **BYOK Model Lock-in** — Single-model BYOK configuration forces session restarts to switch models, breaking workflow continuity for self-hosted inference users.
- **Terminal Escape Sequence Noise** — OSC 9;4 progress bars and DA1 device attribute leaks (e.g., `[?61;6;7;…c` pre-filling the input box) degrade the terminal experience on non-standard setups (zellij, WSL2, Kitty).
- **Enterprise Policy Validation Gaps** — Valid enum values like `"enable"` being rejected by managed-settings schema validation blocks MCP server access entirely — a critical enterprise blocker.
- **CI Authentication Limits** — The PAT-less `GITHUB_TOKEN` workflow is partially broken for MCP registry access, undermining the documented CI setup.
- **Session State Fragility** — Stashed prompts lost on session switch, resumed sessions ignoring model changes, and scheduled prompts killing the queue all erode trust in session reliability.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-04

---

## 1. Today's Highlights

The Kimi Code CLI repository saw steady maintenance activity on August 3rd, with six open PRs updated and two new/updated issues filed. The most notable closed PR bumps the `kosong` dependency to **0.56.0**, while several open PRs address critical stability fixes around console rendering, hook lifecycle management, and shell command execution. A prominent feature request for a **persistent Memory System** continues to gain community attention (15 comments), signaling strong user demand for cross-session context retention.

---

## 2. Releases

No new Kimi Code CLI release was published in the last 24 hours. The most recent release-related activity is the closing of [PR #2581](https://github.com/MoonshotAI/kimi-cli/pull/2581), which bumps the internal `kosong` dependency to **v0.56.0** and updates version pins across the monorepo. No user-facing version change was included.

---

## 3. Hot Issues

| # | Title | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) | **Feature Request: Memory System — Persistent context across sessions** | A comprehensive memory system (automatic + manual) would fundamentally improve the CLI's ability to maintain project context, patterns, and preferences between sessions — a top-requested capability for long-running coding workflows. | **15 comments** — the most-discussed issue in the dataset, indicating strong community resonance. |
| [#2582](https://github.com/MoonshotAI/kimi-cli/issues/2582) | **Bug: CLI stream hangs indefinitely during generation, session becomes unusable** | A hard-hang during generation on Windows with `kimi-k2.7-code` on the Moonshot Platform API renders the entire session unusable — a critical blocker for production use. | **0 comments** — newly filed (2026-08-03), no community response yet. |

---

## 4. Key PR Progress

| PR | Title | Description |
|----|-------|-------------|
| [#2577](https://github.com/MoonshotAI/kimi-cli/pull/2577) | fix(web,vis): do not crash printing the startup banner on legacy console codecs | Resolves `print_banner` crashing on GBK-encoded Windows consoles when the U+279C character cannot be represented. Fixes [#2532](https://github.com/MoonshotAI/kimi-cli/issues/2532). |
| [#2575](https://github.com/MoonshotAI/kimi-cli/pull/2575) | fix(hooks): fire PostToolUse hooks through fire_and_forget_trigger | Fixes `PostToolUse`/`PostToolUseFailure` hooks being dropped due to `asyncio.create_task` without retention. Hooks now use `fire_and_forget_trigger` to prevent task garbage collection. Fixes [#2564](https://github.com/MoonshotAI/kimi-cli/issues/2564). |
| [#2554](https://github.com/MoonshotAI/kimi-cli/pull/2554) | fix(tools): count StrReplaceFile replacements against running content | Corrects the success message counter for `StrReplaceFile` to reflect actual replacements against the running file content rather than a stale baseline. |
| [#2530](https://github.com/MoonshotAI/kimi-cli/pull/2530) | fix(shell): stop blocking until timeout when a detached child holds the pipes | Resolves a blocking issue where `_run_shell_command` waits for stdout/stderr EOF before checking exit codes, causing hangs when a daemon detaches and holds pipes. Fixes [#2468](https://github.com/MoonshotAI/kimi-cli/issues/2468). |
| [#2507](https://github.com/MoonshotAI/kimi-cli/pull/2507) | fix(acp): signal QuestionNotSupported instead of resolving empty answers | In ACP server mode, `QuestionRequest` responses now properly signal `QuestionNotSupported` rather than resolving with an empty dict, which was indistinguishable from user dismissal. Fixes [#2495](https://github.com/MoonshotAI/kimi-cli/issues/2495). |
| [#2535](https://github.com/MoonshotAI/kimi-cli/pull/2535) | fix(llm): scope prompt cache keys to Moonshot APIs | Ensures third-party Kimi-compatible endpoints no longer receive Moonshot's `prompt_cache_key` parameter, while official Kimi/Moonshot APIs retain session caching. Fixes [#2534](https://github.com/MoonshotAI/kimi-cli/issues/2534). |
| [#2581](https://github.com/MoonshotAI/kimi-cli/pull/2581) | chore(release): bump kosong to 0.56.0 | Bumps `kosong` dependency, moves release notes, and updates the root pin. **Closed.** |
| [#2580](https://github.com/MoonshotAI/kimi-cli/pull/2580) | fix(kosong): omit empty anthropic-beta header when no beta features declared | Removes the empty `anthropic-beta` header that was being sent unconditionally in `Anthropic._streamed_request` when no beta features were declared. **Closed.** |

---

## 5. Feature Request Trends

The dominant feature request direction is **persistent memory and cross-session context** (Issue [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)), with users explicitly requesting both AI-managed automatic memory and user-defined manual memory instructions. This reflects a broader trend in AI coding tools toward statefulness — users want the CLI to learn and recall project-specific patterns, preferences, and context over time, reducing the need to re-establish context in every session.

---

## 6. Developer Pain Points

- **Stream stability & hangs** — Issue [#2582](https://github.com/MoonshotAI/kimi-cli/issues/2582) reports indefinite stream hangs on Windows with `kimi-k2.7-code`, making sessions unusable. This is a critical production blocker.
- **Console codec compatibility** — PR [#2577](https://github.com/MoonshotAI/kimi-cli/pull/2577) addresses crashes on legacy Windows consoles (GBK), indicating ongoing friction with non-UTF-8 environments.
- **Async task lifecycle management** — PR [#2575](https://github.com/MoonshotAI/kimi-cli/pull/2575) highlights the recurring pitfall of fire-and-forget asyncio tasks being garbage-collected before completion, a subtle but impactful bug class.
- **Shell subprocess pipe handling** — PR [#2530](https://github.com/MoonshotAI/kimi-cli/pull/2530) addresses blocking when detached child processes hold stdout/stderr pipes — a common Unix shell integration pain point.
- **ACP protocol correctness** — PR [#2507](https://github.com/MoonshotAI/kimi-cli/pull/2507) fixes ambiguous empty-answer resolution in ACP server mode, improving agent-to-tool communication fidelity.
- **Provider-specific API parameter leakage** — PR [#2535](https://github.com/MoonshotAI/kimi-cli/pull/2535) and [#2580](https://github.com/MoonshotAI/kimi-cli/pull/2580) both address incorrect API parameters being sent to non-Moonshot providers, indicating ongoing complexity in multi-provider request routing.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-04

---

## 1. Today's Highlights

The community is buzzing around a critical regression where **v1.15.1+ breaks Bun installs** by enforcing postinstall lifecycle scripts that Bun blocks for global packages, affecting a growing segment of the JS ecosystem. Meanwhile, a long-standing **privacy and data collection clarification request** (#459) has become the most upvoted issue (58 👍), signaling that users increasingly demand transparency as OpenCode positions itself as a local-first tool. On the PR front, a wave of infrastructure-quality contributions landed overnight—most notably the **session HTTP hook** (#40327) and **native HTTP middleware** (#40326), which modernize how OpenCode interfaces with LLM providers at the Effect-native layer.

---

## 2. Releases

**No new releases in the last 24 hours.** The current stable version referenced across issues is **v1.18.11** (TUI) and **v1.15.13** (some users on older tracks). The desktop app is at **v1.3.13**. Users on v1.15.1+ are encountering the Bun postinstall breakage, so a patch or documentation update may be imminent.

---

## 3. Hot Issues

| # | Title | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| [#27906](https://github.com/anomalyco/opencode/issues/27906) | v1.15.1+ Breaks Bun Installs | Blocks a significant portion of the JS runtime ecosystem from using OpenCode globally. Affects package managers that restrict postinstall scripts by default. | 21 comments, 13 👍 — active discussion on workarounds |
| [#459](https://github.com/anomalyco/opencode/issues/459) | Privacy and Data Collection Clarification | Users cannot make informed decisions without explicit privacy documentation, even for a local-first tool. | 18 comments, 58 👍 — highest upvoted issue |
| [#39845](https://github.com/anomalyco/opencode/issues/39845) | DeepSeek V4 Flash Requires China Hosting Opt-In | Mid-session disruption for Go subscribers; regional model gating without prior notice frustrates paying users. | 12 comments, 22 👍 |
| [#1168](https://github.com/anomalyco/opencode/issues/1168) | Make Links Clickable (Ctrl+Left Click) | A foundational UX improvement requested since mid-2025; still unresolved. | 10 comments, 118 👍 — most upvoted issue overall |
| [#13715](https://github.com/anomalyco/opencode/issues/13715) | Permission Asks from Nested Subagent Sessions Hang | Silent hangs in multi-agent workflows block autonomous agent use cases entirely. | 10 comments, 24 👍 |
| [#23566](https://github.com/anomalyco/opencode/issues/23566) | Docs Suggest LSP Is Enabled by Default | Documentation/reality mismatch erodes trust; users expect LSP to work out of the box. | 12 comments, 21 👍 |
| [#36942](https://github.com/anomalyco/opencode/issues/36942) | Vertical Tabs | Horizontal tabs limit session visibility; a UI ergonomics pain point for multi-session workflows. | 10 comments, 16 👍 |
| [#28089](https://github.com/anomalyco/opencode/issues/28089) | Leaks Temporary .so Files in /tmp | Disk consumption of hundreds of GB over time is a serious stability and resource issue on Linux. | 8 comments, 8 👍 |
| [#40314](https://github.com/anomalyco/opencode/issues/40314) | Unable to Connect to the First Certificate | New issue (created today); SSL/TLS handshake failures on MTN Broadband suggest network-level proxy interference. | 4 comments, just created |
| [#39560](https://github.com/anomalyco/opencode/issues/39560) | Critical Data Loss After Consecutive Updates | Sessions, history, plugins, and providers disappearing after updates is a showstopper reliability bug. | 4 comments, 1 👍 |

---

## 4. Key PR Progress

| # | Title | Description |
|---|-------|-------------|
| [#40329](https://github.com/anomalyco/opencode/pull/40329) | fix(provider): centralize Azure request options | Consolidates Azure endpoint-specific option cleanup in the provider transform module; prevents unsupported options from being reintroduced after merges; preserves `reasoningEffort` for older Chat Completions models. |
| [#40316](https://github.com/anomalyco/opencode/pull/40316) | fix(core): apply safe defaults to all agents | Moves shared external-directory and `.env` read policy into universal agent defaults; advertises the temporary work directory in shared environment instructions. |
| [#40327](https://github.com/anomalyco/opencode/pull/40327) | feat(plugin): add session HTTP hook | Adds an Effect-native HTTP middleware seam in `packages/ai`; replaces the legacy `session.request` transform with `session.http` around complete Web request/response exchanges. |
| [#40326](https://github.com/anomalyco/opencode/pull/40326) | feat(ai): add native HTTP middleware | Introduces Effect-native HTTP middleware to AI stream options; keeps middleware requests/responses as `HttpClientRequest`/`HttpClientResponse`; exposes raw statuses before provider error classification. |
| [#40167](https://github.com/anomalyco/opencode/pull/40167) | fix(llm): classify Azure payload-size and image-count 400s as context overflow | Expands `isContextOverflow()` pattern list to correctly classify Azure 400 errors as context overflow, triggering media-strip compaction and retry instead of hard failure. |
| [#40323](https://github.com/anomalyco/opencode/pull/40323) | fix(app): prevent scroll snap while reading history during streaming | Fixes the viewport snapping to the bottom on every token when users scroll up to read history during an active LLM response. |
| [#40188](https://github.com/anomalyco/opencode/pull/40188) | feat(plugin): add request-scoped chat.model hook | Adds a `chat.model` plugin hook that fires before provider/model/auth resolution, allowing plugins to swap the model for a single request. |
| [#40318](https://github.com/anomalyco/opencode/pull/40318) | fix(tui): update tab titles immediately | Removes the 300ms character wipe on tab title changes; renders server-provided title updates in the next frame. |
| [#40324](https://github.com/anomalyco/opencode/pull/40324) | refactor(schema): rename agent default constructor | Renames `Agent.Info.empty()` to `Agent.Info.default()` for clarity; retains `Provider.Info.empty()` as a placeholder. |
| [#40310](https://github.com/anomalyco/opencode/pull/40310) | feat(opencode): add llmgateway-providers provider | Integrates LLM Gateway as a new provider; follows the new-provider workflow via models.dev. |

---

## 5. Feature Request Trends

The most-requested feature directions across all open issues are:

1. **UI/UX Ergonomics** — Vertical tabs (#36942), clickable links with Ctrl+Click (#1168, 118 👍), scroll stabilization during streaming (#40323), and manual todo management (#38550) dominate. Users want more control over the visual interface and interaction patterns.
2. **Provider & Model Compatibility** — Regional model gating transparency (DeepSeek V4 Flash China hosting #39845), Azure payload-size classification (#40167), and native OpenAI cache key preservation (#40279) reflect growing complexity in multi-provider setups.
3. **Session & Workspace Management** — Desktop app workspace detection for git worktrees (#31851), session persistence across updates (#39560), and HTTP hooks for plugin extensibility (#40327) indicate demand for robust, reproducible workflows.
4. **Privacy & Transparency** — The top upvoted issue (#459) and the prompt cache usage tooltip request (#40291) show users want explicit control and visibility into data handling.
5. **Autonomous Agent Patterns** — The new autonomous agents guide (#40320) and request-scoped model hooks (#40188) signal that headless/ unattended agent execution is a maturing use case the community wants first-class support for.

---

## 6. Developer Pain Points

- **Runtime Compatibility Breakages**: The v1.15.1+ Bun postinstall regression (#27906) is the most-discussed issue, highlighting that lifecycle script assumptions in the install pipeline don't account for non-NPM package managers. This is a recurring class of problem for cross-runtime tools.
- **Scroll/Viewport Instability**: Multiple issues (#17996, #29094, #40323, #20600) report scroll jumping or snapping during streaming or fast scrolling—suggesting the auto-follow pause logic in `create-auto-scroll` needs a more robust state model.
- **Data Loss After Updates**: Issue #39560 (sessions, history, plugins, providers disappearing after consecutive updates) and #40283/#40295 (invite rewards vanishing) point to fragile state migration or storage paths that break during rapid releases.
- **Network & Certificate Issues**: SSL/TLS failures (#40314, #7073) and self-signed certificate chain problems are recurring, especially in corporate/proxy environments, suggesting insufficient configuration hooks for custom CA bundles.
- **Desktop App Stability**: Pasting long text hangs the app (#38932), and the app randomly scrolls mid-conversation (#20600)—both indicate the desktop TUI layer needs better input handling and virtualization for large payloads.
- **Model Availability Opacity**: Regional restrictions (#39845), OAuth model rejections for EU workspaces (#40243), and DeepSeek response corruption (#40321) all point to a need for better error messaging and model capability transparency.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-04

Repository: `earendil-works/pi`

---

## 1. Today's Highlights

No new releases were published in the last 24 hours, but the repository saw significant PR activity — including merges around JSON streaming fixes, session symlink discovery, and provider expansion — alongside a steady flow of community bug reports, particularly around WSL/Windows path handling and Anthropic provider parity. The most-discussed issue (#6187) highlights a login hang in WSL after GitHub Copilot device authorization, with 20 comments and ongoing investigation.

---

## 2. Releases

None in the last 24 hours.

---

## 3. Hot Issues

**1. [#6187 — Pi login hangs in WSL after browser-based GitHub Copilot device authorization](https://github.com/earendil-works/pi/issues/6187)** (20 comments)
The device authorization flow completes in the browser, but the WSL-terminal client never detects it and hangs indefinitely. This is a high-impact blocker for Windows-on-WSL developers using Copilot. Community is actively debugging the event-listener gap between the browser callback and the WSL process.

**2. [#7064 — WSL absolute Windows paths are mishandled](https://github.com/earendil-works/pi/issues/7064)** (11 comments, 👍 1)
`read`, `write`, and `edit` tools fail on Windows absolute paths inside WSL, forcing fallback to full rewrites via CLI tools. A recurring pain point for the large WSL user base.

**3. [#7161 — anthropic-messages never sends x-client-request-id](https://github.com/earendil-works/pi/issues/7161)** (9 comments)
The Anthropic provider path omits the `x-client-request-id` header, breaking session affinity on gateways that round-robin between multiple Claude accounts. A subtle but critical parity gap with OpenAI paths.

**4. [#7020 — Pi doesn't continue after compaction](https://github.com/earendil-works/pi/issues/7020)** (9 comments, CLOSED)
Long-running "coordinator" sessions occasionally stall after compaction, with the agent failing to resume the conversation turn. Now resolved but highlighted the fragility of compaction in extended sessions.

**5. [#7547 — How do you use Pi on Windows? What issues are you seeing?](https://github.com/earendil-works/pi/issues/7547)** (5 comments, NEW)
A new community-survey issue asking Windows users to report their setup and pain points. Aims to triage the many Windows-specific bugs (path handling, taskkill ENOENT, etc.) and prioritize docs vs. core fixes.

**6. [#7130 — Backspace deletes 2 chars in Kitty](https://github.com/earendil-works/pi/issues/7130)** (5 comments)
Kitty protocol release events are not being filtered, causing a single backspace to delete two characters. A terminal-compatibility regression affecting Kitty users.

**7. [#7399 — truncateToWidth() leaves dangling OSC 8 hyperlink](https://github.com/earendil-works/pi/issues/7399)** (5 comments)
When truncating text that falls inside an OSC 8 hyperlink, the closing escape sequence is dropped, leaving a dangling hyperlink in the terminal output. Reproducible with a minimal Node.js one-liner.

**8. [#7444 — WebSocket retry only handles two error codes](https://github.com/earendil-works/pi/issues/7444)** (3 comments)
The OpenAI Codex WebSocket retry loop only special-cases `previous_response_not_found` and `websocket_connection_limit_reached`; all other transient errors hard-stop the turn instead of retrying.

**9. [#7445 — openai-responses ties developer role selection to model.reasoning](https://github.com/earendil-works/pi/issues/7445)** (3 comments)
`context.systemPrompt` is emitted as `developer` only when `model.reasoning` is true, meaning models that support the developer role but don't have reasoning enabled get `system` instead — a role-semantics bug.

**10. [#7560 — xai Grok 4.5 does not show up for GitHub Copilot Business](https://github.com/earendil-works/pi/issues/7560)** (2 comments)
The Grok 4.5 model is missing from the Copilot provider's model list despite being available under a Business subscription. A catalog/regression issue.

---

## 4. Key PR Progress

**1. [#7339 — DRAFT: add openai background mode responses](https://github.com/earendil-works/pi/pull/7339)**
Initial implementation of OpenAI's `background: true` mode in the responses API. The author is seeking design feedback, noting the API feels unnatural. Follows the OpenAI background mode spec.

**2. [#7571 — feat(ai): add built-in Cortecs provider support](https://github.com/earendil-works/pi/pull/7571)** (CLOSED)
Adds Cortecs, a European AI provider/router, as a new built-in provider backed by models.dev. Follows the pattern of recently added providers like Base.

**3. [#7451 — fix(coding-agent): bound model catalog refreshes](https://github.com/earendil-works/pi/pull/7451)** (CLOSED)
Fixes multiple issues (#7027, #7113, #7153, #7418, #7443) where model catalog refreshes could run unbounded, causing cancellation and queuing problems. A complex fix balancing correctness with simplicity.

**4. [#7569 — fix(coding-agent): normalize find root results](https://github.com/earendil-works/pi/pull/7569)** (CLOSED)
Fixes `find` tool's handling of relative path normalization by using `path.relative()` consistently instead of manual slicing, and handles path selectors correctly using Node.js facilities.

**5. [#7568 — Add support for generic sampling parameters in models.json](https://github.com/earendil-works/pi/pull/7568)** (CLOSED)
Adds a generic `sampling` object in `models.json` to support engine-specific parameters like `dry_multiplier`, `xtc_probability`, and `repetition_penalty` for llama.cpp/vLLM deployments without per-engine schema changes.

**6. [#7570 — fix(coding-agent): reinstall dependencies if git clean fails](https://github.com/earendil-works/pi/pull/7570)** (CLOSED)
On Windows, some files can be held open causing `git clean` to fail, leaving extensions in a broken state. This PR ensures dependencies are reinstalled on failure for a clean recovery.

**7. [#7548 — fix(coding-agent): sandbox issue analysis tools](https://github.com/earendil-works/pi/pull/7548)** (OPEN)
Preserves the existing `pi -p --approve` and `/is <issue-url>` analysis flow while capturing an immutable issue snapshot before starting, directing `/is` to use the local snapshot instead of fetching through model-facing tools.

**8. [#7503 — feat(agent): implement harness v2 for in-memory storage](https://github.com/earendil-works/pi/pull/7503)** (OPEN)
Introduces the experimental Harness v2 session foundation with backend-neutral `SessionStorage`, `SessionRepo`, and `Session` APIs, plus an `InMemorySessionStorage` and `InMemorySessionRepo` backend.

**9. [#7396 — feat(coding-agent): add server session backend](https://github.com/earendil-works/pi/pull/7396)** (OPEN)
Adds a durable `@earendil-works/pi-coding-agent/server` backend that persists sessions as JSONL with cross-process locking and crash recovery, plus projects harness events into protocol snapshots.

**10. [#7394 — fix(coding-agent): make JSON streaming output linear](https://github.com/earendil-works/pi/pull/7394)** (CLOSED)
Emit delta-only `message_update` records in JSON/RPC modes, preserving cumulative snapshots internally. Applies stdout backpressure in JSON print mode and documents the breaking wire-protocol migration. Fixes the O(n²) output problem.

**Also notable:** [#7561](https://github.com/earendil-works/pi/pull/7561) — complementary fix for delta-only `message_updates` in JSON mode, directly addressing the quadratic stdout OOM issue reported in #7290 and #7395. [#7552](https://github.com/earendil-works/pi/pull/7552) — fixes session discovery through symlinked directories (addresses #7497). [#7370](https://github.com/earendil-works/pi/pull/7370) — prevents auto-compaction race during manual `/compact`.

---

## 5. Feature Request Trends

- **WSL and Windows first-class support**: Multiple issues (#6187, #7064, #7547, #6817, #6104) and PRs indicate strong demand for reliable Windows/WSL operation — path handling, process management, and terminal compatibility.
- **Provider expansion and parity**: Requests for new providers (Cortecs, Anthropic server-side fallbacks) and parity between provider paths (Anthropic `x-client-request-id`, OpenAI `developer` role, Grok model visibility) are a consistent theme.
- **Session persistence and backend flexibility**: Harness v2, server session backends, and symlink-aware session discovery reflect a trend toward durable, shareable, and transport-agnostic session management.
- **JSON mode correctness and performance**: The O(n²) output bug and WebSocket retry gaps show demand for reliable, production-grade streaming and error recovery in headless/RPC modes.
- **Generic model configuration**: Sampling parameters in `models.json` and background mode support indicate users want fine-grained inference control without provider-specific hacks.

---

## 6. Developer Pain Points

- **WSL path handling is fragile**: Absolute Windows paths break across `read`/`write`/`edit`/`find` tools, and `taskkill` fails with ENOENT on Node.js 24. This is the single most-reported Windows/WSL friction area.
- **JSON mode output is broken for long responses**: Quadratic serialization caused OOM for large tool outputs (64 KB HTML took 17 minutes). Two PRs (#7394, #7561) were needed to fix this properly.
- **Compaction is unreliable**: Both double-triggering (#7253) and post-compaction stalls (#7020) have been reported, indicating race conditions in the compaction lifecycle.
- **Terminal escape sequence handling**: Dangling OSC 8 hyperlinks (#7399), Kitty backspace double-delete (#7130), and batched color scheme reports (#7550) reveal incomplete terminal protocol edge-case coverage.
- **Provider API parity gaps**: Anthropic missing request IDs, OpenAI role selection tied to reasoning, and provider prefix stripping (#7030) suggest the multi-provider abstraction layer needs harder contract testing.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-04

---

## 1. Today's Highlights

Qwen Code shipped **v0.21.4** with the Web Shell graduating to a release-ready desktop app featuring native lifecycle management, single-instance behavior, and automatic updates. The TUI keyboard shortcut reference documentation has been completed, and Web Shell history pagination now gracefully handles oversized conversation turns. A nightly build (v0.21.3-nightly) is also available for early adopters.

---

## 2. Releases

### v0.21.4
- **Web Shell desktop app** — now a standalone release-ready application with native lifecycle management, single-instance enforcement, and automatic update delivery ([#8132](https://github.com/QwenLM/qwen-code/pull/8132)).
- **History pagination** — oversized conversation turns are now handled gracefully, preventing truncation errors in long sessions.
- **TUI keyboard shortcut reference** — complete documentation added for all terminal-based keyboard bindings ([#8327](https://github.com/QwenLM/qwen-code/pull/8327)).

### v0.21.3-nightly.20260803.e1e5b42ce
Nightly build incorporating the above changes plus ongoing fixes. Configuration follows `.github/release.yml`.

---

## 3. Hot Issues

1. **[Deterministic tool-execution boundaries for a trustworthy agent runtime](https://github.com/QwenLM/qwen-code/issues/8102)** — *13 comments, P3/Feature-Request/Security* — Proposes keeping the LLM outside the trust boundary and constraining runtime actions deterministically. The community sees this as a foundational direction for safe agent deployments.

2. **[Prompt not restored to input box when canceling (Ctrl+C)](https://github.com/QwenLM/qwen-code/issues/8316)** — *7 comments, Bug* — A frustrating UX gap where cancelled prompts vanish from the input field, forcing users to retype. High resonance with interactive CLI users.

3. **[Duplicate provider tool call id](https://github.com/QwenLM/qwen-code/issues/8382)** — *6 comments, Bug* — Tool calls fail with "Duplicate provider tool call id" and "not recorded" errors, causing session instability. Affects reliability of multi-tool workflows.

4. **[Alibaba Token Plan model names too long for mobile display](https://github.com/QwenLM/qwen-code/issues/8470)** — *5 comments, Bug/UI* — The `[ModelStudio token plan]` prefix truncates model names in the picker on mobile/Paseo, making model selection unreliable.

5. **[Add an Email channel with IMAP and SMTP support](https://github.com/QwenLM/qwen-code/issues/8281)** — *5 comments, Feature-Request* — Proposes a provider-neutral email channel for agent communication via dedicated mailboxes, expanding Qwen Code's communication surface.

6. **[Harden tool-output budgeting, observability, and artifact lifecycle](https://github.com/QwenLM/qwen-code/issues/7306)** — *5 comments, Enhancement* — Follows on prior contract hardening work; community tracks the progression from correctness guarantees to full lifecycle management.

7. **[Ctrl+Shift+Left+C not copying text in terminal](https://github.com/QwenLM/qwen-code/issues/8317)** — *4 comments, Bug* — Standard terminal copy shortcut regressed, impacting clipboard workflows on Unix systems.

8. **[Fork agents inherit sibling fork directives via last model message — context pollution](https://github.com/QwenLM/qwen-code/issues/8326)** — *4 comments, Bug* — Parallel fork agents incorrectly inherit the parent's last model message containing all sibling function calls, leaking context across isolated subagents.

9. **[Bailian Personal Token Plan models out of sync](https://github.com/QwenLM/qwen-code/issues/8432)** — *4 comments, Bug/Auth* — The built-in model list for Alibaba's Token Plan is stale, causing image/video generation failures and incorrect model availability.

10. **[@ completion tab switching inaccessible in Warp](https://github.com/QwenLM/qwen-code/issues/8330)** — *4 comments, Bug/Keybindings* — Warp's terminal-level Ctrl+Tab shortcut conflicts with Qwen Code's `@` completion picker, making category navigation impossible.

---

## 4. Key PR Progress

1. **[feat(cli): Add agent view PTY workers](https://github.com/QwenLM/qwen-code/pull/7800)** — Stack position 2/5 of the Agent View feature. Adds PTY worker host layer for managed sessions with authenticated host control and bounded output retention.

2. **[fix(cli): Keep model switches session-scoped](https://github.com/QwenLM/qwen-code/pull/6579)** — Model switches via `/model <model-id>` now only affect the active session. Default model persistence requires the explicit `/model --default` path, preventing unintended global side effects.

3. **[feat(serve): Add required external tool guard provider](https://github.com/QwenLM/qwen-code/pull/8125)** — Opt-in pre-execution policy provider for `qwen serve` ACP deployments. When set to `required`, the daemon completes an authenticated, versioned handshake with an origin-only loopback HTTP(S) provider before tool execution.

4. **[feat(voice): Support trusted private ASR base URLs](https://github.com/QwenLM/qwen-code/pull/8350)** — Adds `security.allowedInsecureVoiceBaseUrls` allowlist for routing voice transcription through private-network ASR gateways while preserving the default deny posture.

5. **[fix(web-shell): Keep pending background agents active](https://github.com/QwenLM/qwen-code/pull/8413)** — Web Shell turns now remain expanded while any background subagent is still active, improving visibility into parallel agent execution and timelines.

6. **[feat(autofix): Require isolated targeted E2E proof](https://github.com/QwenLM/qwen-code/pull/8318)** — Fail-closed verification chain for Autofix issues: transports immutable failure metadata outside editable prose, binds maintainer approval to exact issue titles, and verifies candidate commits.

7. **[fix(web-shell): Allow session refresh with daemon auth](https://github.com/QwenLM/qwen-code/pull/8445)** — Enables exact Web Shell session document navigation to load the public HTML shell before bearer authentication, while keeping all session API subpaths behind the auth gate.

8. **[fix(core): Harden Qwen 3.8 reasoning effort wire shape](https://github.com/QwenLM/qwen-code/pull/8488)** — Addresses competing thinking knobs (`reasoning_effort` vs `enable_thinking`/`thinking_budget_tokens`), ensuring clean DashScope wire payloads for Qwen 3.8.

9. **[fix(review): Admit evidence images by content, not by name](https://github.com/QwenLM/qwen-code/pull/8459)** — `publish-assets` now uses magic-byte sniffing (PNG, JPEG, GIF87a/89a, RIFF+WEBP) to validate evidence images by actual content rather than filename, closing a spoofing gap.

10. **[feat(cli): Add audio bridge for attachments](https://github.com/QwenLM/qwen-code/pull/8332)** — When the primary model lacks audio support, interactive and headless `@` attachments are transcribed through a configured batch voice model and replaced with explicitly untrusted machine-transcribed text.

---

## 5. Feature Request Trends

- **Agent safety & trust boundaries** — Deterministic execution constraints (#8102) and external tool guard providers (#8125) reflect a strong community demand for auditable, safe agent runtimes.
- **Communication channel expansion** — Email (IMAP/SMTP) support (#8281) and voice/audio bridges (#8332) indicate users want Qwen Code to integrate with more I/O modalities beyond text and terminal.
- **Session management & resumability** — Multiple requests around session recovery, transcript persistence after aborts (#8356), and daemon session workflows (#8389) highlight demand for robust long-running session experiences.
- **Developer experience & observability** — Cost ledger from disk records (#8471), review evidence tooling (#8454), and TUI keyboard reference (#8327) show the community values transparency and developer ergonomics.
- **Provider & model flexibility** — New provider additions (Kimi, Xiaomi MiMo in #8368), model-switch scoping (#6579), and Alibaba token plan fixes (#8432) reflect a multi-cloud/multi-provider user base.

---

## 6. Developer Pain Points

- **Session state loss on abort/cancel** — Multiple issues (#8316, #8356, #8398, #8495) report that cancelling in-flight requests (Ctrl+C, APIUserAbortError) causes prompt loss, transcript gaps, or session control infrastructure corruption. The `isAbortError` utility not recognizing OpenAI SDK's `APIUserAbortError` is a root cause in the `auth_type=openai` path.
- **Web Shell UX regressions** — Warp tab-switching conflicts (#8330), secondary artifact actions targeting the wrong workspace (#8494), and live journal truncation rendering (#8412) indicate the Web Shell desktop app surface area is growing faster than its edge-case coverage.
- **Windows terminal rendering** — ConEmu/Cmder full-screen flickering (#8385) and session auto-deletion on Windows app restart (#8400) are persistent platform-specific pain points.
- **MCP & tool reliability** — Stale MCP session registrations on metadata hot reload (#8492), cancelled file tools still mutating the filesystem (#8493), and duplicate provider tool call IDs (#8382) erode confidence in tool execution guarantees.
- **Build & release friction** — Release workflow failures (#8476), dev-only build warnings leaking into release installs (#8426), and review workflow timeout misalignment (#8485, #8486) highlight CI/CD maintenance burden.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-04

---

## 1. Today's Highlights

The repository is in the final stretch of the **v0.9.4 release train** (PR #5135), currently 77 commits ahead of `main` with 18 train commits staged for integration. The most active day saw a wave of **runtime API surface expansion** (goals, memory, MCP lifecycle, skills, verifier receipts) alongside critical TUI stability fixes — notably pinning `ratatui` to 0.30.0 to resolve a cursor-position race condition (PR #5192). Community engagement remains strong on the **Agent Client Protocol (ACP) registry** listing proposal and the **v0.9.3 umbrella refactor** for runtime ownership convergence.

---

## 2. Releases

**No new releases in the last 24h.** The v0.9.4 release train is open and advancing (PR #5135). It supersedes the prior v0.9.4 candidate (#5044) and includes 77 commits across provider routes, runtime API, TUI hygiene, and platform fixes. No release notes summary was provided in the PR description.

---

## 3. Hot Issues (Top 10 by Comment Count)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| 1 | [#3192](https://github.com/Hmbown/DeepSeek-TUI/issues/3192) — [enhancement] Put it up for agentclientprotocol/registry | Listing DeepSeek-TUI in the ACP registry lowers the install friction for Zed and other ACP-compatible editors. A key ecosystem-growth lever. | 13 comments; author actively seeking registry inclusion. |
| 2 | [#3205](https://github.com/Hmbown/DeepSeek-TUI/issues/3205) — v0.9.3: Fleet model classes, loadout auto, and semantic route roles | Defines the shared model/loadout selector used across TUI, CLI, exec, subagents, and Fleet workers. The "Fleet loadout auto" mode is a major UX improvement for compute provisioning. | 11 comments; author (Hmbown) driving the spec. |
| 3 | [#1481](https://github.com/Hmbown/DeepSeek-TUI/issues/1481) — Support OpenCode Go/Zen (DeepSeek-V4) | OpenCode Go/Zen provides a cheap DeepSeek-V4 route. Community wants it added as a provider. | 10 comments; 1 👍; active request from a community member. |
| 4 | [#4959](https://github.com/Hmbown/DeepSeek-TUI/issues/4959) — Proposed 'stop' command | When models are in YOLO or deep autonomous workflows, text commands like `+ stop` are ignored, causing runaway tool execution. A safety-critical feature. | 7 comments; addresses a real reliability gap. |
| 5 | [#4949](https://github.com/Hmbown/DeepSeek-TUI/issues/4949) — Chinese Translation of "Constitution" | A culturally sensitive discussion about translating "Constitution" into Chinese (宪法 vs. 协作准则). Highlights the international community's involvement. | 7 comments; active multilingual discussion. |
| 6 | [#4022](https://github.com/Hmbown/DeepSeek-TUI/issues/4022) — CLI/TUI parity for subagent and runtime control surfaces | Ensures subagent status, expand/collapse, and cancellation controls are not trapped inside the TUI, enabling future cloud/remote workbench parity. | 7 comments; architectural design issue. |
| 7 | [#2492](https://github.com/Hmbown/DeepSeek-TUI/issues/2492) — 不具备跨会话记忆 (No cross-session memory) | Users lose memory between sessions. A fundamental limitation for persistent agent workflows. | 5 comments; long-standing bug since June 2026. |
| 8 | [#1917](https://github.com/Hmbown/DeepSeek-TUI/issues/1917) — Universal PreToolUse/PostToolUse hook layer | Proposes a unifying hook-based lifecycle layer for Cancel/Pause/Resume across all action types. Architectural significance. | 5 comments; builds on prior analysis of slash commands. |
| 9 | [#2984](https://github.com/Hmbown/DeepSeek-TUI/issues/2984) — OpenAI Codex/ChatGPT OAuth route verification | Verifying the OAuth route end-to-end to move it from preview to supported status. Important for OpenAI ecosystem integration. | 5 comments; complements #3019. |
| 10 | [#4785](https://github.com/Hmbown/DeepSeek-TUI/issues/4785) — Dead-code sweep: 464 `#[allow(dead_code)]` attributes | Structural drift hidden by dead-code suppressions across 143 files. A maintenance and reliability debt issue. | 4 comments; author (Hmbown) driving cleanup. |

---

## 4. Key PR Progress (Top 10 by Significance)

| # | PR | Summary |
|---|-----|---------|
| 1 | [#5135](https://github.com/Hmbown/DeepSeek-TUI/pull/5135) | **v0.9.4 release train** — 77 commits ahead of main, 18 train commits staged. Supersedes #5044. |
| 2 | [#5233](https://github.com/Hmbown/DeepSeek-TUI/pull/5233) | **fix(modelstudio): surface reasoning on official chat routes** — Classifies `reasoning_content` as a Thinking stream on verified Alibaba Model Studio routes; shapes Model Studio controls by capability. |
| 3 | [#5133](https://github.com/Hmbown/DeepSeek-TUI/pull/5133) | **feat(runtime-api): expose persistent goal-loop state** — New `GET /v1/threads/{id}/goal` endpoint for reading active-goal state and driving lifecycle transitions. |
| 4 | [#5132](https://github.com/Hmbown/DeepSeek-TUI/pull/5132) | **Runtime API: expose verifier receipts and evidence** — Three new read-only endpoints (`GET receipts`, `GET evidence`, `GET retry-decision`) under `/v1/fleet/runs/{run_id}/`. |
| 5 | [#5130](https://github.com/Hmbown/DeepSeek-TUI/pull/5130) | **feat(runtime-api): bounded MCP server configuration** — Full MCP server lifecycle (create, update, delete, toggle) via HTTP API, replacing TOML/JSON manual edits. |
| 6 | [#5131](https://github.com/Hmbown/DeepSeek-TUI/pull/5131) | **feat: Runtime API memory endpoints** — Bounded inspection and lifecycle controls for active memory at `/v1/memory`. |
| 7 | [#5192](https://github.com/Hmbown/DeepSeek-TUI/pull/5192) | **fix(tui): pin ratatui to 0.30.0** — Resolves a blocking CPR query race condition in `Terminal::clear()` that disrupts the TUI event loop. |
| 8 | [#5227](https://github.com/Hmbown/DeepSeek-TUI/pull/5227) | **fix(tui): train hygiene** — Locale parity (zh-Hant), #5110 fallout cleanup, fmt drift, warnings, and budget fixes from the 30-PR v0.9.4 stack. |
| 9 | [#5225](https://github.com/Hmbown/DeepSeek-TUI/pull/5225) | **feat(acp): expose file/search/git/patch/shell tools over session/prompt** — ACP server now executes tool calls requested by models, not just streams text. Critical for Zed and third-party ACP integrations. |
| 10 | [#5228](https://github.com/Hmbown/DeepSeek-TUI/pull/5228) | **refactor(tui): rail unification stack** — Rebased 12-commit rail-unification stack onto the release train. Panel unification for TUI layout consistency. |

---

## 5. Feature Request Trends

Based on the full issue set, the most-requested feature directions are:

1. **Provider Expansion & Route Diversification** — OpenCode Go/Zen (#1481), minimax China/Token Plan routes (#4686), Model Studio reasoning controls (#5233), and ACP registry listing (#3192). The community wants broader model and routing coverage.
2. **Runtime API Maturity** — Goals (#5133), memory (#5131), MCP lifecycle (#5130), skills (#5129), and verifier receipts (#5132). The API is rapidly evolving from a TUI-only tool to a managed platform surface.
3. **TUI/UX Polish** — Config key editability from TUI (#3303), hotbar command surface (#3389), permission profiles (#3211), visual inspection artifacts for browser/UI tasks (#3145), and subagent control parity (#4022).
4. **Cross-Platform & Distribution** — Windows Terminal launch (#1854), winget package (#1561), OHOS linker fix (#5095), and Chinese Windows beginner guide (#5229).
5. **Agent Safety & Control** — Stop command (#4959), hook layer for cancel/pause/resume (#1917), read-before-edit guardrails (#3364), and permission profiles (#3211).
6. **ACP & Integration** — ACP tool execution (#5225), ACP registry listing (#3192), and OAuth2.1 for MCP (#1409).

---

## 6. Developer Pain Points

- **Chinese Input Method Compatibility** — Multiple issues (#2323, #1675) report that Chinese IME causes garbled output,拼音 leaking into command input, and failure to hide prompts during composition. A persistent usability gap.
- **Cross-Session Memory Loss** — Issue #2492 highlights that the agent forgets prior sessions on restart, with no automatic memory reload. A fundamental limitation for persistent workflows.
- **Edit Reliability** — Issue #3364 addresses edit failures being silent or unclear, especially for smaller models. Read-before-edit guardrails are requested.
- **Config Discoverability** — Issue #3303 notes that documented config keys cannot be reliably discovered, edited, validated, or persisted from the TUI, making runtime behavior feel fixed.
- **Windows Rendering & Launch** — Issue #1854 reports degraded font/color rendering when launching via raw .exe instead of Windows Terminal. Issue #2617 covers SPM sandbox failures on macOS.
- **Dead Code & Maintenance Drift** — Issue #4785 flags 464 `#[allow(dead_code)]` suppressions across 143 files, making compiler drift invisible and increasing maintenance burden.
- **Runtime Complexity** — Issue #3306 notes 18 Rust packages and ~771k lines with ~87% in `codewhale-tui`, with parallel runtime/tool/config/session/hook paths creating duplication. The v0.9.3 refactor (#3306) aims to converge ownership.

---

*Generated from github.com/Hmbown/DeepSeek-TUI data as of 2026-08-04.*

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

# ComfyUI Community Digest — 2026-08-04

---

## 1. Today's Highlights

ComfyUI v0.30.0 shipped with support for int8 convrot embedding lookup (CORE-371) and an MRU-based policy for loading weights into process RAM, alongside a comfy-kitchen package bump to 0.2.23. The same day, several regression reports surfaced around Dynamic VRAM streaming and MiniMax H3 workflows, while a backport release (v0.30.1) was opened to stabilize the branch. The community is actively debugging VRAM/OOM crashes and MiniMax H3 VAE device-mismatch errors introduced or exposed by the latest update.

---

## 2. Releases

**v0.30.0** — Key changes since prior release:
- **comfy-kitchen** bumped to 0.2.23 ([PR #15112](https://github.com/Comfy-Org/ComfyUI/pull/15112))
- **int8 convrot embedding lookup** support added (CORE-371) ([PR #15035](https://github.com/Comfy-Org/ComfyUI/pull/15035))
- **MRU policy** for loading weights into process RAM — improves memory management for large model workflows ([Release notes](https://github.com/Comfy-Org/ComfyUI/releases/tag/v0.30.0))

A backport release **v0.30.1** is in progress ([PR #15245](https://github.com/Comfy-Org/ComfyUI/pull/15245)), targeting stability fixes from commit `14b05228cef127ce529bc0c08660770d4af3e9a8`.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| [14618](https://github.com/Comfy-Org/ComfyUI/issues/14618) | Model reloading on every prompt change | Severe performance regression; users report unnecessary GPU round-trips per keystroke | 118 comments, 10 👍 — top-priority community concern |
| [10225](https://github.com/Comfy-Org/ComfyUI/issues/10225) | Permanent loss of saved workflows | Data-loss bug affecting long-term project continuity | 15 comments; persists across versions |
| [15077](https://github.com/Comfy-Org/ComfyUI/issues/15077) | Image mask output broken in inpaint/outpaint/talking-avatar | Regression breaking core image-editing workflows | 14 comments, 4 👍; visual evidence provided |
| [15143](https://github.com/Comfy-Org/ComfyUI/issues/15143) | Gemma 4 prompt generation fails in desktop app | New model compatibility gap after update | 13 comments |
| [15116](https://github.com/Comfy-Org/ComfyUI/issues/15116) | `GroupNodeHandler.getGroupData is not a function` | Custom node (`comfyui-background-package`) incompatibility after upgrade | 13 comments; version-pinning workaround identified |
| [14250](https://github.com/Comfy-Org/ComfyUI/issues/14250) | OOM with WAN 2.2 after update; fixed by `--disable-pinned-memory` | Regression in memory pinning logic on specific hardware | 9 comments; workaround documented |
| [15255](https://github.com/Comfy-Org/ComfyUI/issues/15255) | Dynamic VRAM streaming crashes all generations (regression after Aug 3) | Critical blocker for VRAM-constrained setups | 5 comments; explicitly tied to Aug 3 update |
| [15248](https://github.com/Comfy-Org/ComfyUI/issues/15248) | Subgraph VAE encode previews stretched after update | Visual regression in subgraph workflow debugging | 5 comments, 3 👍 |
| [15264](https://github.com/Comfy-Org/ComfyUI/issues/15264) | Subgraph KSampler previews disappear after update | Breaks subgraph debugging workflow | 3 comments, 1 👍; downgrading to v0.28.x cited as workaround |
| [15263](https://github.com/Comfy-Org/ComfyUI/issues/15263) | MiniMax H3 + `--use-sage-attention` produces pure noise | Attention patch not passing `low_precision_attention=False` for DiT models | 1 comment; root cause identified (PR #15270 addresses this) |

---

## 4. Key PR Progress

| # | PR | Summary |
|---|-----|---------|
| [15270](https://github.com/Comfy-Org/ComfyUI/pull/15270) | **fix(minimax): expose H3 attention patch hooks** | Enables `set_model_attn1_patch` hooks for MiniMax H3 DiT blocks, matching Wan and other DiT contracts; validated with CPU sampling |
| [15268](https://github.com/Comfy-Org/ComfyUI/pull/15268) | **fix(minimax): cast raw parameters to input device in H3 VAEs** | Fixes device-mismatch errors by routing `nn.Parameter` accesses through `comfy.ops` weight-cast machinery in both video and audio VAEs |
| [15266](https://github.com/Comfy-Org/ComfyUI/pull/15266) | **Don't pin too much memory on Linux systems with no swap partition** | Addresses OOM regressions on Linux without swap; directly relevant to [#14250](https://github.com/Comfy-Org/ComfyUI/issues/14250) and [#15255](https://github.com/Comfy-Org/ComfyUI/issues/15255) |
| [15243](https://github.com/Comfy-Org/ComfyUI/pull/15243) | **Fix SDE samplers for audio with minimax** | Corrects SDE sampler behavior for MiniMax H3 audio workflows |
| [15252](https://github.com/Comfy-Org/ComfyUI/pull/15252) | **Fix migration 0004 aborting when `ix_tags_tag_type` is missing** | Resolves [#15022](https://github.com/Comfy-Org/ComfyUI/issues/15022); migration now gracefully handles databases at revision 0003 |
| [15242](https://github.com/Comfy-Org/ComfyUI/pull/15242) | **Fix websocket publish loop stalling on a hung client send** | Prevents `PromptServer.publish_loop()` from blocking indefinitely when a client's `ws.send` hangs; fixes [#15240](https://github.com/Comfy-Org/ComfyUI/issues/15240) |
| [14918](https://github.com/Comfy-Org/ComfyUI/pull/14918) | **[CORE-356] Support partial graph execution** | Adds opt-in `node_failure_policy: continue_independent`; recoverable failures become branch-local blockers instead of killing the entire graph |
| [13318](https://github.com/Comfy-Org/ComfyUI/pull/13318) | **Fix nested tensor noise mismatch in CFGGuider.sample** | Resolves LTXAV audio+video `RuntimeError` on tensor shape mismatch at non-singleton dimension 2 |
| [15173](https://github.com/Comfy-Org/ComfyUI/pull/15173) | **Hold a reference to the pending-node completion waiter** | Fixes async node completion waiter being garbage-collected prematurely, causing silent execution hangs |
| [15249](https://github.com/Comfy-Org/ComfyUI/pull/15249) | **chore(Kling): remove retired legacy models and Virtual Try-On API** | Cleans up deprecated Kling models (`kling-v1-5`, `kling-v1-6`, `kling-v2-master`, etc.) from partner nodes |

---

## 5. Feature Request Trends

1. **Partial / resilient graph execution** — [#14918](https://github.com/Comfy-Org/ComfyUI/pull/14918) is the most-requested architectural change; users want failed nodes to block only their branch rather than aborting the full workflow.
2. **Custom browser launch** — [#11709](https://github.com/Comfy-Org/ComfyUI/issues/11709) requests the ability to specify a non-default browser for ComfyUI portable (merged into v0.30.0).
3. **Subgraph UX improvements** — Multiple issues ([#15189](https://github.com/Comfy-Org/ComfyUI/issues/15189), [#15264](https://github.com/Comfy-Org/ComfyUI/issues/15264), [#15248](https://github.com/Comfy-Org/ComfyUI/issues/15248)) highlight demand for stable, correct subgraph preview rendering and widget promotion.
4. **Better model memory management** — MRU policy ([v0.30.0](https://github.com/Comfy-Org/ComfyUI/releases/tag/v0.30.0)) and `--disable-pinned-memory` workarounds indicate strong demand for finer-grained VRAM control.
5. **MiniMax H3 model support** — A cluster of issues and PRs ([#15241](https://github.com/Comfy-Org/ComfyUI/issues/15241), [#15250](https://github.com/Comfy-Org/ComfyUI/issues/15250), [#15251](https://github.com/Comfy-Org/ComfyUI/issues/15251), [#15263](https://github.com/Comfy-Org/ComfyUI/issues/15263)) shows active demand for stable H3 i2v/t2v workflows, with the community quickly identifying and filing regressions.

---

## 6. Developer Pain Points

- **VRAM/OOM regressions after Aug 3 update** — Multiple issues ([#15255](https://github.com/Comfy-Org/ComfyUI/issues/15255), [#14250](https://github.com/Comfy-Org/ComfyUI/issues/14250), [#15269](https://github.com/Comfy-Org/ComfyUI/issues/15269)) point to a systemic memory-pinning or VRAM-streaming regression introduced in the latest build. The fix in [#15266](https://github.com/Comfy-Org/ComfyUI/pull/15266) is targeted but not yet in a stable release.
- **MiniMax H3 VAE and attention compatibility** — At least 6 issues and 3 PRs in the last 24h are MiniMax H3-specific, covering VAE device mismatches, attention patch hooks, SDE sampler errors, and `TensorWiseINT8Layout` dequantization failures. This suggests the H3 integration was rushed or under-tested against the latest core changes.
- **Subgraph preview/rendering regressions** — Stretched previews ([#15248](https://github.com/Comfy-Org/ComfyUI/issues/15248)), disappearing KSampler previews ([#15264](https://github.com/Comfy-Org/ComfyUI/issues/15264)), and broken widget promotion ([#15189](https://github.com/Comfy-Org/ComfyUI/issues/15189)) indicate a rendering or coordinate-transform regression in the latest release.
- **Database migration fragility** — [#15022](https://github.com/Comfy-Org/ComfyUI/issues/15022) / [#15252](https://github.com/Comfy-Org/ComfyUI/pull/15252) highlights that migrations assume indexes exist, causing hard failures for users on older database revisions.
- **Workflow persistence and model-reload overhead** — [#14618](https://github.com/Comfy-Org/ComfyUI/issues/14618) (118 comments) and [#10225](https://github.com/Comfy-Org/ComfyUI/issues/10225) (workflow loss) remain long-standing, high-impact pain points with no definitive resolution yet.
- **WebSocket server stability** — The hung-client stalling fix ([#15242](https://github.com/Comfy-Org/ComfyUI/pull/15242)) indicates that the publish loop has been a recurring source of server-wide hangs.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Community Digest — 2026-08-04

---

## 1. Today's Highlights

No new releases were published in the last 24 hours. The most pressing community concern is **Ollama Cloud reliability**, with a top-voted issue reporting frequent 503 errors that undermine production agent workflows (#15419, 24 👍). On the engineering side, a critical data-integrity fix is progressing: a PR ensures that corrupted blobs are detected by re-verifying digests on cache hits (#17537), directly addressing a bug where `ollama pull` silently kept bad files (#17520). Additionally, OpenAI API compatibility continues to improve with a PR aligning the streaming wire format for chat completions (#17485).

---

## 2. Releases

*No new releases in the last 24 hours.*

---

## 3. Hot Issues

1. **[Cloud 503 errors making models unreliable](https://github.com/ollama/ollama/issues/15419)** — Production users running autonomous agents on Ollama Cloud are hitting frequent 503 Service Unavailable errors. (38 comments, 24 👍) — *The highest-impact issue; threatens cloud adoption for serious workloads.*

2. **[Corrupted blob not detected or repaired](https://github.com/ollama/ollama/issues/17520)** — A blob with a mismatched digest is silently retained; `ollama pull` reports success and `ollama list` shows the model as healthy. (3 comments) — *Data integrity risk for model storage.*

3. **[Error: context deadline exceeded](https://github.com/ollama/ollama/issues/17484)** — Users downloading models from HuggingFace consistently hit context deadline errors during pull. (5 comments) — *Blocks model acquisition from HF for a growing user base.*

4. **[listing models errors](https://github.com/ollama/ollama/issues/17541)** — The `/api/tags` endpoint exhibits behavior that breaks third-party libraries like `llm-ollama` and Simon Willison's `llm`. (2 comments) — *Ecosystem compatibility regression.*

5. **[Cached input pricing vs. Zero Data Retention](https://github.com/ollama/ollama/issues/17489)** — Users cannot reconcile the $0.30/M cached input pricing on the Kimi K3 page with Ollama's Zero Data Retention promise. (2 comments) — *Trust and transparency concern for cloud pricing.*

6. **[laguna: empty/null 200 responses after ~30–70 min of serving](https://github.com/ollama/ollama/issues/17524)** — Long-running agentic sessions degrade silently; the model stays listed as loaded but returns empty payloads. (1 comment) — *Stability issue for long-lived workloads.*

7. **[Multi-GPU layer split ignores VRAM capacity differences](https://github.com/ollama/ollama/issues/17523)** — Automatic layer split leaves the smaller GPU underutilized when paired with a larger card (e.g., RTX 4070 + RTX 3060 Ti). (1 comment) — *Limits multi-GPU usability for heterogeneous setups.*

8. **[/api/generate silently ignores `think` when `format` is set](https://github.com/ollama/ollama/issues/17544)** — The reasoning toggle is ignored on the generate endpoint but works correctly on chat, producing wrong answers silently. (0 comments) — *API inconsistency with no error feedback.*

9. **[gpt-oss:20b crashes with CUDA illegal memory access](https://github.com/ollama/ollama/issues/17534)** — `llama-server` crashes during context checkpoint creation on an NVIDIA A10. (0 comments) — *Model-specific CUDA stability regression.*

10. **[Intermittent /v1/responses stream closes without terminal event](https://github.com/ollama/ollama/issues/17118)** — Streaming responses to `/v1/responses` can close mid-reasoning with no `completed`, `incomplete`, or `failed` event. (1 comment) — *Client-side ambiguity on generation status.*

---

## 4. Key PR Progress

1. **[llm: warn when a model is loaded entirely on CPU](https://github.com/ollama/ollama/pull/17542)** — Addresses #14258. Adds a warning when no GPU layers fit and the model falls back to CPU, improving visibility into performance degradation.

2. **[openai: match OpenAI's streaming wire format for chat completions](https://github.com/ollama/ollama/pull/17485)** — Closes #7626. Reworks `/v1/chat/completions` streaming to match `api.openai.com` chunk-for-chunk, including `finish_reason` on its own chunk. *Critical for drop-in OpenAI compatibility.*

3. **[cmd: support suggesting cloud tag for `ollama launch`](https://github.com/ollama/ollama/pull/17497)** — Follow-up to #17483. `ollama launch claude --model=kimi-k3` now prompts users to use the cloud variant, improving the cloud discovery experience.

4. **[server: warn when embedding input is truncated](https://github.com/ollama/ollama/pull/17543)** — Addresses #7043. `/api/embed` silently truncates over-length input; this PR surfaces that truncation to the caller and logs it server-side.

5. **[server: verify blob digest before trusting a same-size cache hit](https://github.com/ollama/ollama/pull/17537)** — Fixes the silent corruption bug (#17520). Both the fast-transfer and legacy download paths now re-hash content on disk before accepting a cache hit.

6. **[openai: emit `response.failed` when generation fails mid-stream](https://github.com/ollama/ollama/pull/17531)** — Fixes #17118. A streaming `/v1/responses` request that fails mid-generation now emits a `response.failed` event instead of a clean EOF that looks like success.

7. **[model/parsers: finalize incomplete function_call tool calls](https://github.com/ollama/ollama/pull/17536)** — The functiongemma parser was dropping complete tool calls when the stream ended before the closing `<end_function_call>` tag. This PR ensures buffered calls are emitted.

8. **[server: allow the default registry to delegate auth to ollama.com](https://github.com/ollama/ollama/pull/17532)** — Fixes #17361. Resolves a realm/host mismatch error when pulling models from the default registry that issues auth tokens from `ollama.com` while serving from `registry.ollama.ai`.

9. **[docs: restore `num_gpu` as a valid Modelfile parameter](https://github.com/ollama/ollama/pull/17533)** — Fixes #13986. `num_gpu` is still functional but was missing from the Modelfile documentation.

10. **[fix(app): prevent sidebar open animation on load](https://github.com/ollama/ollama/pull/17528)** — Closes #12954. Removes the width-transition on initial paint so the sidebar is already at its target width, keeping only the toggle animation.

---

## 5. Feature Request Trends

| Trend | Key Issues | Rationale |
|---|---|---|
| **Intel GPU / SYCL backend** | [#16930](https://github.com/ollama/ollama/issues/16930), [#16939](https://github.com/ollama/ollama/pull/16939) | Growing demand for Arc/Battlemage support via ggml-sycl; discovery PR already merged, full backend integration in progress. |
| **MLX model expansion** | [#17535](https://github.com/ollama/ollama/issues/17535) | Apple Silicon users want MLX variants for more models (e.g., glm-ocr), following the qwen3.6:27b-mlx pattern. |
| **External app / GUI integration** | [#17266](https://github.com/ollama/ollama/issues/17266) | Long-standing request for Ollama settings to be fully accessible through a GUI, consistent across platforms. |
| **Performance optimizations** | [#17016](https://github.com/ollama/ollama/issues/17016) | Interest in dspark-style speculative decoding for faster inference. |
| **Evaluation & interoperability** | [#17463](https://github.com/ollama/ollama/issues/17463) | OpenEval standard for portable evaluation datasets; cross-ecosystem collaboration with Inspect AI, CrewAI, AutoGen. |
| **Community integrations** | Multiple PRs (#17538, #17539) | Continuous additions of third-party tools (Libre WebUI, Skales) to the official integrations list. |

---

## 6. Developer Pain Points

- **Cloud reliability & pricing transparency**: The top-voted issue (#15419) and the pricing/retention question (#17489) both highlight that Ollama Cloud is not yet trusted for production workloads. Frequent 503s and unclear pricing models erode developer confidence.
- **Silent data corruption**: Issues #17520 and PR #17537 reveal a pattern where Ollama's caching and storage layer can silently retain corrupted model blobs without any warning to the user — a serious concern for deployment reliability.
- **GPU/VRAM management gaps**: Both multi-GPU layer splitting (#17523) and CPU fallback visibility (#17542) show that Ollama's resource scheduling needs better user feedback and smarter allocation, especially in heterogeneous hardware setups.
- **OpenAI compatibility friction**: Multiple issues (#17118, #17541, #17485, #17531) indicate that the `/v1/responses` and `/v1/chat/completions` endpoints still have edge cases that break drop-in OpenAI client migrations. The community expects parity, and these gaps are a top adoption blocker.
- **Streaming stability for long-running sessions**: Empty/null responses after extended serving (#17524) and streams closing without terminal events (#17118) both point to reliability issues in long-lived agentic workloads — a growing use case that Ollama needs to harden.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

# llama.cpp Community Digest — 2026-08-04

---

## 1. Today's Highlights

The llama.cpp project has pushed 8 releases in the last 24 hours, with the headline being **b10244**, which introduces a major architectural refactor: moving Multi-Scale Attention (MSA) into its own dedicated memory implementation (`llama-kv-cache-msa`), cleanly separating it from the core KV-cache logic. The release train also includes MTP support for Qwen3-Next and DeepSeek V3.2, a CUDA penalties-sampler backend, and a critical data-race fix in CUDA `block_reduce`. Community activity remains intense around DeepSeek-V4 stability issues and backend-specific regressions across CUDA, HIP/ROCm, and SYCL.

---

## 2. Releases

| Release | Key Change |
|---------|-----------|
| **b10244** | Move MSA logic from `llama-kv-cache` into new `llama-kv-cache-msa` module ([#26338](https://github.com/ggml-org/llama.cpp/pull/26338)) |
| **b10243** | Allocate indexer cache only in "full" indexer layers ([#26474](https://github.com/ggml-org/llama.cpp/pull/26474)) |
| **b10242** | CUDA backend sampler for penalties sampler; default `penalty_last_n` now based on model context ([#25262](https://github.com/ggml-org/llama.cpp/pull/25262)) |
| **b10241** | Fix CUDA data-races when reusing SMEM in `block_reduce` ([#26385](https://github.com/ggml-org/llama.cpp/pull/26385)) |
| **b10240** | Add notice for upcoming default server port change 8080 → 9931 ([#26508](https://github.com/ggml-org/llama.cpp/pull/26508)) |
| **b10238** | MTP support for Qwen3-Next ([#25589](https://github.com/ggml-org/llama.cpp/pull/25589)) |
| **b10237** | MTP support for DeepSeek V3.2 ([#26457](https://github.com/ggml-org/llama.cpp/pull/26457)) |
| **b10236** | Metal: implement DSv4 Lightning Indexer (F16, 128-dim, 64-head) ([#25893](https://github.com/ggml-org/llama.cpp/pull/25893)) |

**Notable:** The port change notice in b10240 has already caused confusion — a follow-up issue (#26517) flags that the release notes cite `6631` instead of the correct `9931`. The maintainers should correct this before the change takes effect.

---

## 3. Hot Issues

1. **[#26509](https://github.com/ggml-org/llama.cpp/issues/26509)** — DeepSeek-V4 emits only repeated `<` when prompt spans multiple forward passes (CUDA flash attention). **18 comments.** Critical eval bug; reproducible across multiple builds. Community is actively debugging the CUDA FA path vs. CPU fallback.

2. **[#26399](https://github.com/ggml-org/llama.cpp/issues/26399)** — `GGML_OP_TOP_K` falls back to CPU on HIP/ROCm above ~3–4K context, causing 6.4× token-generation loss on DeepSeek-V4-Flash. **15 comments.** Major performance regression for AMD GPU users; the fallback is silent and devastating.

3. **[#24730](https://github.com/ggml-org/llama.cpp/issues/24730)** — Feature request for GLM 5.2 support. **14 comments, 14 👍.** High community demand; GLM 5.2 is a prominent new release and users want llama.cpp compatibility urgently.

4. **[#24657](https://github.com/ggml-org/llama.cpp/issues/24657)** — `GGML_ASSERT(n_inputs < GGML_SCHED_MAX_SPLIT_INPUTS)` crash when using more than one GPU. **13 comments.** Multi-GPU deployment blocker; affects users with tensor parallelism setups.

5. **[#26206](https://github.com/ggml-org/llama.cpp/issues/26206)** — Gemma 4 12B produces garbled output on Intel Arc Pro B70 (Xe2) via SYCL. **11 comments.** Intel GPU users hitting quality regressions; may relate to f16 conversion gaps.

6. **[#22436](https://github.com/ggml-org/llama.cpp/issues/22436)** — Feature request: pipeline parallelism via tcp/ip. **10 comments.** Long-standing request for distributed inference; relevant for large-model serving.

7. **[#26265](https://github.com/ggml-org/llama.cpp/issues/26265)** — `llama-cli` crashes when run from a different folder than the binary. **10 comments.** Annoying path-resolution bug affecting usability.

8. **[#25452](https://github.com/ggml-org/llama.cpp/issues/25452)** — DSV4-Flash KV-cache exhaustion (crash + stall) with SWA reuse. **9 comments.** Multi-GPU VRAM management issue; affects users with 5+ GPUs.

9. **[#24424](https://github.com/ggml-org/llama.cpp/issues/24424)** — SYCL `CHECK_TRY_ERROR` crash. **9 comments.** Recurring SYCL stability problem on Intel Arc hardware.

10. **[#21750](https://github.com/ggml-org/llama.cpp/issues/21750)** — Server crash when processing large images (>4B tokens) with Qwen3.5/Qwen3-VL on Vulkan. **7 comments.** Multimodal + Vulkan combination is fragile.

---

## 4. Key PR Progress

1. **[#26542](https://github.com/ggml-org/llama.cpp/pull/26542)** — Add unbuffered positional read on Windows. Fixes a long-standing Windows I/O limitation where `llama.cpp` could only read sequentially, not seek to arbitrary byte offsets.

2. **[#26467](https://github.com/ggml-org/llama.cpp/pull/26467)** — Add Instella-MoE architecture support. New model architecture integration; conversion pipeline assisted by Claude Opus 5.

3. **[#26536](https://github.com/ggml-org/llama.cpp/pull/26536)** — Fix MTMD duplicate empty audio chunks for short inputs. Audio preprocessor was padding short inputs to 31s, then the spectrogram added another 30s of trailing padding — resulting in ~61s of frames and wasted encoder compute.

4. **[#26430](https://github.com/ggml-org/llama.cpp/pull/26430)** — OpenCL: extend, speed up, and widen MQ/cluster decode flash-attention including Gemma 4. Massive decode throughput gains on Tile GPUs (TG) by moving Gemma 4's DK=512 decode onto GPU via FA-on.

5. **[#26477](https://github.com/ggml-org/llama.cpp/pull/26477)** — OpenCL: quant lm_head/decode GEMV and medium-batch GEMM optimizations for speculative decoding/MTP on Adreno GPUs. Comprehensive decode-side optimizations for K-quant dense models.

6. **[#26539](https://github.com/ggml-org/llama.cpp/pull/26539)** — Hexagon HMX flash-attention: support `head_dim` not a multiple of 64 (e.g., SigLIP's head_dim=72). Previously fell back to slow HVX/CPU path; now pads internally with zero-filled tail lanes.

7. **[#26254](https://github.com/ggml-org/llama.cpp/pull/26254)** — MTMD: support Qwen3-TTS (breaking change to `llama-tts` binary). Adds `--tts-lang` and `--tts-speaker-file` parameters for Qwen3-TTS-12Hz-1.7B-Base.

8. **[#25784](https://github.com/ggml-org/llama.cpp/pull/25784)** — DeepSeek V4 MTP + DSpark support. ~50% speedup with `--speculative` using DSpark draft models. Note: DeepSeek did not ship MTP with the 0731 release — DSpark is the correct target.

9. **[#20828](https://github.com/ggml-org/llama.cpp/pull/20828)** — Change default `llama-quant` `ftype` from `Q5_1` to `Q8_0`. Prevents external tools from naively defaulting to an outdated quantization type.

10. **[#26531](https://github.com/ggml-org/llama.cpp/pull/26531)** — Allow reshape of tensors during model load. Fixes issues where stored shapes in model files are incompatible with the ggml operation graph; avoids the need for `ggml_reshape_nd()` at graph-build time.

---

## 5. Feature Request Trends

The most-requested feature directions across all open issues are:

- **New model architecture support** — GLM 5.2 (#24730, 14 👍), Instella-MoE (PR #26467), Qwen3-TTS (PR #26254). The community wants broad coverage of cutting-edge releases.
- **Distributed / multi-device inference** — Pipeline parallelism via tcp/ip (#22436), multi-GPU stability (#24657), and speculative decoding metrics exposure (#26516). Users are pushing for production-grade distributed serving.
- **WebUI improvements** — Projects/folders for conversations (#24090, 11 👍), lower CPU usage in browser (#18023). The WebUI is a growing focus for non-technical users.
- **Observability & developer tooling** — Speculative decoding counters in `/metrics` endpoint (#26516), stuck-loop escape for ngram-mod (#25819), and gguf-split `--delete-files` for disk management (#26538).
- **Backend parity** — HIP/ROCm performance (#26399), SYCL stability (#24424, #26462), and Vulkan reliability (#25767). Users want all backends to be equally robust.

---

## 6. Developer Pain Points

- **Backend instability across the board.** CUDA, HIP/ROCm, SYCL, and Vulkan all have active bugs this cycle. The DeepSeek-V4 eval bug (#26509) specifically manifests only on CUDA FA and is clean on CPU and with `-fa off`, pointing to a subtle flash-attention kernel issue. ROCm users suffer silent performance regressions from `TOP_K` CPU fallbacks (#26399). Intel Arc/SYCL users hit f16 conversion gaps (#26462) and `CHECK_TRY_ERROR` crashes (#24424).

- **Port change communication.** The b10240 release notes contain an incorrect port number (`6631` instead of `9931`), and a dedicated issue (#26517) was filed to flag the discrepancy. This is a recurring class of problem — release notes and linked PRs can diverge.

- **Multi-GPU and large-context fragility.** Issues like KV-cache exhaustion (#25452), `GGML_SCHED_MAX_SPLIT_INPUTS` assertion failures (#24657), and context-dependent TOP_K fallbacks (#26399) all share a common theme: the scheduler and memory management don't scale gracefully to large context lengths or multiple GPUs.

- **Windows build ergonomics.** PR #26542 addresses a fundamental Windows I/O limitation (no unbuffered positional reads), and issue #26265 shows that running binaries from non-project directories still crashes. Windows support remains a secondary-class citizen in the dev experience.

- **Metal decode regressions.** Issue #26470 reports a ~13% decode regression for Gemma 4 E4B Q8_0 on Apple Silicon/Metal between b9730 and b10219, with Qwen models unaffected — suggesting a regression in a Metal kernel path specific to certain attention patterns.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*