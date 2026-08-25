# AI CLI Tools Community Digest 2026-08-26

> Generated: 2026-08-25 22:16 UTC | Tools covered: 12

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

**Today’s Highlights (2026‑08‑26)**  

- **Claude Code** – v2.1.245 patched a startup crash on Linux systems using glibc 2.44 (Arch, CachyOS, Fedora Rawhide). [GitHub release](https://github.com/anthropics/claude-code/releases/tag/v2.1.245)  

- **Gemini CLI** – v0.57.0 (stable) introduced dynamic Cloud Workstations OAuth‑redirect resolution and a preview‑preview fix for stale A2A cancellations. [GitHub release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.57.0)  

- **OpenAI Codex** – Rust client library advanced from 0.150.0‑alpha.9 to 0.150.0‑alpha.11, tightening the binding API and fixing regressions in the gRPC transport layer. [GitHub release](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.11)  

- **GitHub Copilot CLI** – v1.0.81‑10 made the plugins dashboard generally available (toggleable with `PLUGINS_DASHBOARD=false`) and unified the delete key (`x`) across several UI dialogs. [GitHub release](https://github.com/github/copilot-cli/releases/tag/v1.0.81-10)  

- **OpenCode** – v1.18.23 fixed Cloudflare AI Gateway routing, normalizing Anthropic model IDs and restoring compatibility with third‑party providers. [GitHub release](https://github.com/anomalyco/opencode/releases/tag/v1.18.23)  

- **DeepSeek TUI** – PR #5576 frozen the v0.9.12 branch, resolving the remaining “must‑fix” bugs and integrating several UX patches (focused‑block actions, reload command). [GitHub PR](https://github.com/Hmbown/DeepSeek-TUI/pull/5576)  

- **ComfyUI** – PR #15826 added a new `--preview-full-batch` flag that renders tiled previews of all batch members during sampling, improving visual debugging of batch jobs. [GitHub PR](https://github.com/Comfy-Org/ComfyUI/pull/15826)  

- **llama.cpp** – v0.3.0 released with updated CI defaults, macOS Apple‑Silicon binaries, and a prompt‑generator for release‑note automation. [GitHub release](https://github.com/ggml-org/llama.cpp/releases/tag/v0.3.0)  

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

## Claude Code Skills Community Highlights Report  
*Data as of 2026-08-26 | Source: [github.com/anthropics/skills](https://github.com/anthropics/skills)*  

---

### **1. Top Skills Ranking**  
*(Ranked by community comment volume and PR attention)*  

1. **[Skill Quality & Security Analyzers](https://github.com/anthropics/skills/pull/83)** *(Open)*  
   - *Functionality*: Meta-skills providing automated audits for Skill structure, quality, and security compliance.  
   - *Discussion Highlights*: Early-stage proposal, discussed as foundational governance tools.  

2. **[Frontend Design Skill](https://github.com/anthropics/skills/pull/210)** *(Open)*  
   - *Functionality*: Clarifies design-to-code handoff and ensures actionable, in-conversation usable instructions.  
   - *Discussion Highlights*: Praised for improving coherence but flagged for needing more precise triggers.  

3. **[ODT (OpenDocument) Skill](https://github.com/anthropics/skills/pull/486)** *(Open)*  
   - *Functionality*: Enables ODT/ODS file creation, filling, conversion to HTML, and parsing.  
   - *Discussion Highlights*: High interest due to ODF adoption gaps in agent workflows.  

4. **[Testing Patterns Skill](https://github.com/anthropics/skills/pull/723)** *(Open)*  
   - *Functionality*: Full-test-stack guidance—unit testing tips, React patterns, and testing strategy frameworks.  
   - *Discussion Highlights*: Widely referenced in related PRs and issues about QA practices in coding agents.  

5. **[SCNet HPC Skill](https://github.com/anthropics/skills/pull/1615)** *(Open)*  
   - *Functionality*: SSH-based orchestration for SCNet High Performance Computing environments.  
   - *Discussion Highlights*: Niche but growing traction among research/AWS users seeking HPC integrations.  

---

### **2. Community Demand Trends**  
Based on top issues, recurring themes suggest strong demand for:  

- **Trust & Governance**:  
  [Issue #492](https://github.com/anthropics/skills/issues/492) calls out namespace abuse risks; users want stricter validation and separation between official vs. community-submitted Skills.

- **Cross-Agent Orchestration**:  
  [PR #1628 (Hivemind)](https://github.com/anthropics/skills/pull/1628) proposes delegating tasks to lightweight agents without sacrificing control—a sign of rising multi-agent system experimentation.

- **Document & Output Integrity**:  
  Multiple fixes (e.g., [PDF Case Fix #538](https://github.com/anthropics/skills/pull/538), [DOCX ID Collision Fix #541](https://github.com/anthropics/skills/pull/541)) indicate persistent friction around document fidelity and toolchain integration.

- **Enterprise Platform Support**:  
  [ServiceNow Skill (#568)](https://github.com/anthropics/skills/pull/568) shows enterprise appetite for domain-specific platform fluency built into agent capabilities.

---

### **3. High-Potential Pending Skills**  
These active PRs show steady engagement but remain unmerged:

- **[Self-Audit Skill v1.3.0](https://github.com/anthropics/skills/pull/1367)** *(Updated July 2026)*  
  - Automates pre-delivery checks across mechanical correctness and reasoning logic.  
  - Seen as critical for production-ready deployments.

- **[Pyxel Retro Game Dev Skill](https://github.com/anthropics/skills/pull/525)** *(Updated July 2026)*  
  - Integrates Pyxel engine via MCP server for pixel art/game dev workflows.  
  - Popular in hobbyist circles; overlaps with generative AI creativity trends.

- **[Run Eval Fix for Windows](https://github.com/anthropics/skills/pull/1099)** *(Updated May 2026)*  
  - Addresses broken evaluation pipelines blocking iterative Skill improvement.  
  - Critical infra fix affecting future meta-tooling development.

---

### **4. Skills Ecosystem Insight**  
> *The community's most concentrated demand lies in establishing secure, reproducible foundations for evaluating and governing AI-generated outputs—particularly where document integrity, cross-platform support, and trust boundaries intersect.*

--- 

*End of Report*

---

# Claude Code Community Digest - 2026-08-26

## Today's Highlights
A critical Linux startup crash affecting glibc 2.44 distributions (Arch, CachyOS, Fedora Rawhide) was resolved in patch release v2.1.245. Community activity remains high around model behavior inconsistencies—particularly Fable 5 reverting to Opus—and platform-specific issues across Windows, macOS, and WSL integrations.

## Releases

**v2.1.245**  
[Release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.245)  
Fixed a crash on startup for Linux distributions shipping glibc 2.44 (e.g., Arch Linux, CachyOS, Fedora Rawhide). No other notable changes included in this patch.

---

## Hot Issues

### 1. [Model Reversion Bug](https://github.com/anthropics/claude-code/issues/73738) – Fable 5 auto-switches to Opus  
Users report that selecting Fable 5 as the active model causes unexpected switches back to Opus mid-session. Marked as duplicate/stale but reflects ongoing friction with newer model availability or enforcement logic.

### 2. [Safeguard False Positives](https://github.com/anthropics/claude-code/issues/72852) – Unreasonably strict new safeguards  
Security-related model restrictions are blocking otherwise benign workflows. Users cite failed exemption form submissions and lack of transparency into triggering conditions.

### 3. [Windows Session Freeze Post Update](https://github.com/anthropics/claude-code/issues/73491) – Event-loop stalls UI  
After updating to v1.17377.2 (MSIX), users experience severe UI freezes tied to event-loop overload during session switching. Affects multi-session power users running 10+ tabs simultaneously.

### 4. [Autocompact Override Ignored](https://github.com/anthropics/claude-code/issues/63186) – `CLAUDE_AUTOCOMPACT_PCT_OVERRIDE` ineffective  
Setting custom compaction thresholds via environment variables is not respected by internal logic, though it remains accessible to subprocesses like Bash. Confirmed across versions ≤2.1.199.

### 5. [Terminal Mouse Reporting Breaks Cmd-Click Links](https://github.com/anthropics/claude-code/issues/73766) – TUI link handling broken  
Cmd-click navigation for file paths printed within the TUI no longer works inside integrated terminals (e.g., Zed). Regression observed since v2.1.199; impacts developer workflow efficiency.

### 6. [Android Sync Discrepancy](https://github.com/anthropics/claude-code/issues/73790) – Code tab empty despite web sync  
The Android app shows an empty Code tab while web interface displays all sessions correctly. Suggests backend sync discrepancies between platforms.

### 7. [VS Code History Loss After Update](https://github.com/anthropics/claude-code/issues/73454) – Data loss concern post upgrade  
Session history disappears following upgrades from v2.1.197 to v2.1.198. Classified as data-loss risk requiring urgent attention.

### 8. [M365 OAuth Flow Broken in WSL](https://github.com/anthropics/claude-code/issues/73749) – Duplicate prompt param breaks auth  
OAuth handshake fails with `AADSTS900971` due to duplicate `prompt` parameters in generated URLs. Impacts enterprise integrations relying on Microsoft 365 services via WSL2.

### 9. [Agent Teams Start in Home Directory](https://github.com/anthropics/claude-code/issues/73744) – Working dir mismatch in tmux mode  
Teammate agents spawned in tmux mode ignore parent directory context and default to `$HOME`. Affects reproducibility in collaborative agent setups.

### 10. [Memory File View Locks Terminal](https://github.com/anthropics/claude-code/issues/73750) – TUI unresponsive after inspecting memory  
Viewing the global memory file opens VSCode but returns a frozen terminal state. Ctrl+C / Esc ineffective; users must force quit. UX regression requiring immediate fix.

---

## Key PR Progress

### 1. [Fix validate-agent.sh Aborts on Warnings](https://github.com/anthropics/claude-code/pull/89404)  
Currently open. Resolves premature termination caused by `set -e` interaction with increment expressions (`((x++))`) in shell scripts used during plugin validation.

> Fixes [#83803](https://github.com/anthropics/claude-code/issues/83803)

### 2. *(No other significant PRs updated in last 24 hours)*  

Only one PR currently active—indicates low merge velocity possibly linked to stabilization cycle or holiday slowdown.

---

## Feature Request Trends

- **Session Migration Between Instances**: Request to transfer live sessions between local/remote Claude instances (#73639).
- **Improved Model Consistency Controls**: Strong demand for guaranteed adherence to selected model settings without fallback behavior.
- **Enhanced Debugging Tools**: Calls for detailed logs showing safeguard triggers, including inputs/outputs leading to activation.
- **Cross-Platform Parity**: Users want consistent behavior and feature parity across Desktop, Web, and Mobile apps.

---

## Developer Pain Points

- **Unstable Model Behavior**: Frequent unexpected switches between Fable and Opus undermine trust in default configurations.
- **Windows Platform Instability**: Multiple reports of crashes, stalls, and incorrect process states on Windows builds.
- **Integration Authentication Flaws**: Repeated issues with OAuth flows, especially involving Azure/M365 ecosystems.
- **Terminal/UI Responsiveness Regressions**: Numerous complaints about frozen interfaces post-update or under load.
- **Plugin Validation Tooling Issues**: Shell script fragility causing false negatives in developer tooling pipelines.

Let us know if you'd like a deeper dive into any specific area or expanded coverage of stale/open issues.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex – Community Digest – 2026‑08‑26**  
*Your daily snapshot of the most relevant activity across the Codex ecosystem.*

---

### 1. Today’s Highlights
- A trio of **Rust alpha releases (0.150.0‑alpha 9 → 11)** landed, tightening the language‑binding API ahead of the next stable milestone.  
- The community’s biggest chatter continues to revolve around **platform‑specific stability** (Linux desktop, Windows screenshot, authentication loops) and **productivity‑driven features** such as larger context windows and more flexible CLI editing workflows.

---

### 2. Releases  
| Release | Highlights |
|---------|------------|
| **rust‑v0.150.0‑alpha.9 → .alpha.11** | Incremental updates to the Rust client library, fixing a set of regression bugs in the gRPC transport layer and adding support for the new *`Instructions`* payload (see PR #40709). The releases are pure **alpha** – intended for early adopters testing the upcoming 0.150‑series.  <br>🔗 [GitHub Release](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.11) |

---

### 3. Hot Issues (10 most noteworthy)

| # | Title / Summary | Why it matters | Community reaction |
|---|-----------------|----------------|---------------------|
| **#11023** (closed) | *“Codex desktop app for Linux”* – request for a Linux‑native desktop client.  | Linux users have been “hard‑locked” to the web UI; a native app would lower power consumption and improve OS integration. | 209 comments, **953 👍** – the most‑voted issue in the repo. |
| **#38350** (open) | Recurring scheduled tasks silently switch to *paused* after a successful run. | Breaks automation pipelines that rely on reliable cron‑style execution. | 40 comments, active discussion on a possible server‑side fix. |
| **#25178** (open) | Windows 10 22H2 screenshot failure (`SetIsBorderRequired failed`). | Impacts the **Computer‑Use** plugin, preventing visual feedback on many Windows machines. | 31 comments, 16 👍 – many work‑arounds posted. |
| **#13018** (closed) | Ability to *delete* threads in the Codex app (instead of only archiving). | Improves data hygiene and user control over personal history. | 29 comments, **105 👍** – merged into v0.149.0‑cli. |
| **#39903** (open) | CLI/TUI option to stop collapsing “Ran N commands” blocks. | Power‑users want a persistent command log for debugging large scripts. | 25 comments, 43 👍 – a candidate for next minor release. |
| **#25271** (open) | Computer‑Use cannot read Chrome URLs on Windows (even `chrome://newtab/`). | Limits web‑automation capabilities for Windows developers. | 25 comments, 8 👍 – work‑around using `chrome://version/` suggested. |
| **#27117** (open) | Windows standalone update inherits `PSModulePath`, breaking `Get‑FileHash`. | Causes subtle breakage in cross‑platform PowerShell scripts. | 22 comments, 15 👍 – maintainers reproducing on CI. |
| **#31868** (open) | Support **1 M‑token context** for GPT‑5.6 across all clients. | Directly influences large‑code‑base reasoning and long‑form research. | 8 comments, 22 👍 – roadmap item for Q4 2026. |
| **#35005** (open) | Option to edit an earlier prompt **in‑place** instead of forced forking. | Streamlines iterative debugging and reduces thread clutter. | 7 comments, 17 👍 – configuration toggle under review. |
| **#33196** (open) | Parallel subagents cause extreme token amplification and repeated compaction. | Raises both cost and performance concerns for heavy‑agent workloads. | 5 comments, 0 👍 – a hot topic for the “subagent orchestration” team. |

---

### 4. Key PR Progress (10 most impactful)

| PR | Summary | Impact |
|----|---------|--------|
| **#40722** | Add **enterprise ID‑JAG exchange** for MCP OAuth. | Enables seamless token‑exchange for corporate identity providers. |
| **#40718** | Add **Bazel repositories** for pinned Codex releases. | Simplifies reproducible builds for CI/CD pipelines. |
| **#40717** | Support **sandboxed exec‑server test environments**. | Improves isolation for automated test suites. |
| **#40716** | Introduce **thread‑ownership metadata** for managed worktrees. | Guarantees correct thread ↔ git‑worktree binding, preventing data loss. |
| **#40714** | Track **image‑generation request IDs** in analytics. | Improves observability of vision‑related endpoints. |
| **#40713** | **Sanitize credentials** from Git remote URLs. | Removes accidental credential leakage from persisted thread metadata. |
| **#40712** | Move **relay helpers** into exec‑server test support. | Centralises WebSocket relay utilities, reducing duplication. |
| **#40710** | Add **explicit remote executor connection refresh** API. | Allows clients to recover from transient network failures faster. |
| **#40709** | Rename host instruction payload to **`Instructions`**. | Aligns terminology across the code‑mode host API, easing SDK adoption. |
| **#40688** | Bound **SQLite integrity checks** for diagnostic attachments. | Prevents long‑running health‑checks from timing‑out on large debug bundles. |

*All PRs are merged; the changes are already part of the latest `main` build.*

---

### 5. Feature Request Trends
- **Cross‑platform desktop experience** – strong demand for a **Linux Codex client** and for fixing Windows‑specific bugs (screenshot, Chrome URL detection, authentication loops).  
- **Context window expansion** – repeated calls for **≥ 1 M token** support, especially for GPT‑5.6.  
- **CLI/TUI ergonomics** – requests to **disable command‑collapse**, **edit prompts in‑place**, and improve **session resume stability**.  
- **Automation reliability** – recurring scheduled tasks, subagent token amplification, and permission‑profile degradation are highlighted as critical reliability gaps.  
- **Security & privacy hygiene** – sanitising credentials in Git URLs and redacting API keys from debug output have been actively merged, reflecting community emphasis on data safety.

---

### 6. Developer Pain Points (recurring frustrations)

| Pain point | Typical symptom | Frequency in recent issues |
|------------|----------------|----------------------------|
| **Windows environment quirks** | Screenshot failures, PowerShell path inheritance, auth loops, app crashes. | 7 of the top 30 issues. |
| **Session/state volatility** | “already has an active writer”, permission profile decay, lost rollout JSONL files. | 4 issues + 1 PR addressing SQLite integrity. |
| **Token / cost blow‑up** | Parallel subagents causing massive token amplification; abnormal 678 M‑token consumption. | 2 high‑visibility issues. |
| **CLI clutter** | Automatic forking on every edit, collapsed command logs. | 2 issues + 1 PR for config toggle. |
| **Plugin & extension provisioning** | In‑app Browser fails on remote SSH, plugins stuck on “Loading…”. | 2 issues. |
| **Authentication & OAuth** | Login loops on Windows/macOS, hard‑coded callback handling. | 3 issues + 2 PRs tightening OAuth flow. |

**Takeaway:** While the core Codex experience is solid, developers repeatedly hit friction on **Windows stability**, **session persistence**, and **cost‑effective multi‑agent orchestration**. Prioritising platform‑agnostic fixes, more granular CLI controls, and tighter resource accounting will likely yield the biggest satisfaction gains.

--- 

*All links point to the respective GitHub issue or pull‑request pages.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-26

## 1. Today's Highlights

The past 24 hours saw an intense release cadence — four releases shipped, including **v0.58.0-preview.0**, the stable **v0.57.0** (with dynamic Cloud Workstations OAuth redirect resolution), and a cherry-picked patch **v0.57.0-preview.1** fixing stale A2A cancellation errors. Security hardening dominates the PR queue, with fixes targeting SSRF in MCP OAuth flows, unauthenticated A2A server routes, and extension environment-variable injection. Meanwhile, the community's core frustration remains agent reliability: hanging subagents, false "success" reporting after MAX_TURNS, and shell commands that never signal completion.

---

## 2. Releases

- **[v0.58.0-preview.0](https://github.com/google-gemini/gemini-cli/releases)** — Includes a fix ensuring consistent symlink evaluation in ignore-path handling ([#28915](https://github.com/google-gemini/gemini-cli/pull/28915)) and the v0.57.0-preview.0 changelog.
- **[v0.57.0 (stable)](https://github.com/google-gemini/gemini-cli/releases)** — Dynamically resolves the Cloud Workstations proxy redirect URI for OAuth flows ([#28688](https://github.com/google-gemini/gemini-cli/pull/28688)); fixes swallowed directory mismatch in IDE connections.
- **[v0.56.0-nightly.20260825.g812f7a2bc](https://github.com/google-gemini/gemini-cli/releases)** — Clears stale cancellation errors on new A2A message turns ([#28940](https://github.com/google-gemini/gemini-cli/pull/28940)); declares top-level safety checkers in write policy configuration.
- **[v0.57.0-preview.1](https://github.com/google-gemini/gemini-cli/pull/29024)** — Cherry-pick patch (812f7a2) on top of preview.0.

---

## 3. Hot Issues

1. **[#22323 — Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** (P1, 13 comments) — The most-discussed bug: `codebase_investigator` reports success even when it hit the turn limit without doing any analysis. Misleading status reporting erodes trust in subagent output.
2. **[#21409 — Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)** (P1, 8 comments, 👍8) — Highest community reaction today. Delegation to the generalist agent hangs indefinitely even on trivial tasks like folder creation; disabling subagents is the only workaround.
3. **[#19873 — Zero-Dependency OS Sandboxing & Post-Execution Intent Routing](https://github.com/google-gemini/gemini-cli/issues/19873)** (P2, effort/large) — Ambitious proposal to leverage Gemini 3's native bash affinity while maintaining security; signals the team's strategic direction on shell execution.
4. **[#26525 — Deterministic redaction for Auto Memory](https://github.com/google-gemini/gemini-cli/issues/26525)** (P2, security) — Auto Memory sends transcript content to the model *before* secrets are redacted. A notable privacy concern raised alongside the related [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) and [#26523](https://github.com/google-gemini/gemini-cli/issues/26523).
5. **[#25166 — Shell execution stuck at "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166)** (P1, 👍3) — Completed shell commands remain shown as active/awaiting input, blocking workflows.
6. **[#21983 — Browser subagent fails on Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)** (P1) — Browser agent reports GOAL termination while actually failing on Linux Wayland sessions; related to [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) where the browser agent ignores `settings.json` overrides.
7. **[#24246 — 400 error with >128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)** (P2) — Tool count blows past API limits; users want smarter tool scoping.
8. **[#22672 — Agent should discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)** (P2) — The model reaches for `git reset --hard` / `--force` and risky DB modifications when safer paths exist. A recurring safety theme.
9. **[#22745 — Assess AST-aware file reads, search, and mapping (EPIC)](https://github.com/google-gemini/gemini-cli/issues/22745)** (P2) — Exploration of AST-aware tooling to cut misaligned reads and token noise; pairs with the "Tactful Extraction" proposal [#19561](https://github.com/google-gemini/gemini-cli/issues/19561).
10. **[#20079 — Symlinked agent files not recognized](https://github.com/google-gemini/gemini-cli/issues/20079)** (P2) — `~/.gemini/agents/*.md` symlinks silently fail to register — small but annoying for dotfile-managed setups (notably, a related symlink fix just shipped in v0.58.0-preview.0).

---

## 4. Key PR Progress

1. **[#29081 — Prevent SSRF in MCP OAuth metadata discovery](https://github.com/google-gemini/gemini-cli/pull/29081)** (P2) — Enforces RFC 9728 §7.7 / RFC 8414 constraints: HTTPS for remote endpoints, origin validation for resource metadata. Top security item.
2. **[#29063 — Stop Plan Mode hanging in non-interactive sessions](https://github.com/google-gemini/gemini-cli/pull/29063)** (P1) — Fixes [#28913](https://github.com/google-gemini/gemini-cli/issues/28913): Plan Mode waited for user input that never arrives under `gemini -p ... -y`.
3. **[#28863 — Consent prompts & env sanitization for extensions](https://github.com/google-gemini/gemini-cli/pull/28863)** — Closes a hole where extension updates could bypass consent and inject runtime-altering env vars into MCP server processes.
4. **[#28699 — Enforce auth on A2A server routes, stop path traversal](https://github.com/google-gemini/gemini-cli/pull/28699)** (closed) — Custom REST routes bypassed `UserBuilder` entirely, accepting unauthenticated requests; also blocks checkpoint path traversal.
5. **[#29067 — Remove misleading security schemes / hardcoded credentials in a2a-server](https://github.com/google-gemini/gemini-cli/pull/29067)** — Supersedes closed [#29018](https://github.com/google-gemini/gemini-cli/pull/29018); makes agent metadata honestly reflect unauthenticated local-dev endpoints.
6. **[#29087 — Prevent concurrent extension install races](https://github.com/google-gemini/gemini-cli/pull/29087)** — Uses `proper-lockfile` to stop two CLI processes interleaving extension installs.
7. **[#29088 — Fix vscode-ide-companion `stop()` hang with open MCP stream](https://github.com/google-gemini/gemini-cli/pull/29088)** — Long-lived `GET /mcp` streaming responses prevented connection drain, blocking VS Code deactivate; a competing fix ([#28789](https://github.com/google-gemini/gemini-cli/pull/28789)) was closed.
8. **[#28930 — Drop unsafe `diff.external` override](https://github.com/google-gemini/gemini-cli/pull/28930)** (P1) — An empty-string git override from PR #28792 wasn't interpreted as "unset," breaking external diff behavior.
9. **[#28983 — Detect mixed line endings properly](https://github.com/google-gemini/gemini-cli/pull/28983)** (P2) — `detectLineEnding()` flagged files as CRLF on a single `\r\n` match regardless of the majority line ending.
10. **[#28832 — Skip environment-dependent tests with reasons on Windows](https://github.com/google-gemini/gemini-cli/pull/28832)** (P2) — Turns 13 spurious clean-checkout Windows failures into explained skips; complements the Windows longpaths docs PR [#28926](https://github.com/google-gemini/gemini-cli/pull/28926).

---

## 5. Feature Request Trends

- **Smarter context & code navigation**: AST-aware reads/searches ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)), "Tactful Extraction" for token-frugal surgical reads ([#19561](https://github.com/google-gemini/gemini-cli/issues/19561)), and better tool scoping ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)) all point to demand for leaner, more precise context management.
- **Subagent observability & control**: visible trajectories via `/chat share` ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)), subagent context in `/bug` reports ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)), and browser-agent resilience/session takeover ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232)).
- **Persistent task tracking**: replacing in-context `WriteToDo` with file-based CRUD tracking ([#18836](https://github.com/google-gemini/gemini-cli/issues/18836), [#21000](https://github.com/google-gemini/gemini-cli/issues/21000)) to fight context rot.
- **Self-awareness**: the agent accurately knowing its own flags, hotkeys, and skills ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432), [#21968](https://github.com/google-gemini/gemini-cli/issues/21968)).

---

## 6. Developer Pain Points

- **Hangs everywhere**: generalist agent hangs ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), shell commands stuck at "Waiting input" ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), interactive prompts stalling flows like `create-vite` ([#22465](https://github.com/google-gemini/gemini-cli/issues/22465)), and Plan Mode hanging in non-interactive runs ([#29063](https://github.com/google-gemini/gemini-cli/pull/29063)) — the single most common complaint class.
- **Dishonest status reporting**: subagents claiming GOAL success after MAX_TURNS or silent failures ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323), [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)) make automation unreliable.
- **Memory subsystem immaturity**: low-signal session retry loops, silent patch skipping, and pre-redaction data exposure ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26525](https://github.com/google-gemini/gemini-cli/issues/26525)).
- **Security surface of the extension/MCP/A2A ecosystem**: four of today's top PRs are auth/SSRF/injection fixes, indicating the security model is still catching up with feature growth.
- **Workspace hygiene & safety**: models scatter temp scripts ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)), reach for destructive git commands ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)), and mishandle `\n` escaping ([#22466](https://github.com/google-gemini/gemini-cli/issues/22466)).
- **Windows contributor friction**: longpaths clone failures and 13 environment-dependent test failures on clean checkouts.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-26

## 1. Today's Highlights

Release v1.0.81-10 makes the plugins dashboard generally available to all users, with the ability to opt out via `PLUGINS_DASHBOARD=false`. The most community-driven issue remains the long-standing request for vi/vim input mode (#13, 74 👍), while several new triage-level issues surfaced around MCP server token injection failures, BYOK image handling, and session-memory failures. The issue queue shows a growing cluster of reports around MCP configuration reliability and session-state management.

---

## 2. Releases

**v1.0.81-10**

- **New:** The plugins dashboard (`/plugin`, `/mcp`, `/skills`) is now available to everyone. Set `PLUGINS_DASHBOARD=false` to opt out, along with the `copilot plugins` command.
- **Improved:** The `x` key now acts as the delete key across `/sandbox config`, `/settings`, `/mcp`, the sessions dialog, and the diff view — unifying keyboard shortcuts across the UI.

---

## 3. Hot Issues

1. **[#13 — CLI input should have a vi/vim input mode](https://github.com/github/copilot-cli/issues/13)**
   - 74 👍, 8 comments — the most upvoted open issue. Community strongly desires modal editing (vi/vim keybindings) for interactive CLI input. High demand, no sign of implementation yet.

2. **[#4035 — Voice installer fails with private Azure Artifacts feed 401](https://github.com/github/copilot-cli/issues/4035)**
   - Voice-mode installer tries to pull `Microsoft.AI.Foundry.Local.Core` from a private Azure feed, failing with HTTP 401 even though the package is public on nuget.org. Blocks voice-mode adoption for affected users.

3. **[#4224 — OTel spans for subagent calls omit billing attributes](https://github.com/github/copilot-cli/issues/4224)**
   - Subagent model calls lack `github.copilot.nano_aiu` and `github.copilot.cost` in OTel spans, causing external cost accounting to undercount. Important for enterprise teams monitoring AI spend.

4. **[#4542 — Workspace .mcp.json detected but not connected in sessions](https://github.com/github/copilot-cli/issues/4542)**
   - `mcp list`/`mcp get` show workspace MCP servers as enabled, but they are not actually available inside agent sessions. Confusing and breaks expected MCP behavior.

5. **[#4560 — Model "auto" runs with reasoning effort disabled](https://github.com/github/copilot-cli/issues/4560)**
   - When model is set to `auto`, `reasoningEffort` is forced to `null` and any configuration attempt is rejected. Reduces output quality for users relying on auto-routing.

6. **[#4590 — Extension SDK reconnects dispose session hook processor](https://github.com/github/copilot-cli/issues/4590)**
   - Multi-extension setups break: MCP host reload restarts the entire extension cohort, tearing down hook processors and producing "Hook processor is not configured" errors.

7. **[#4593 — Archiving worktree session fails on Windows (os error 32)](https://github.com/github/copilot-cli/issues/4593)**
   - Windows-specific failure: worktree is removed without stopping the session process tree rooted in it, causing file-in-use errors during archive.

8. **[#4604 — User-configured GitHub MCP server loses injected token](https://github.com/github/copilot-cli/issues/4604)**
   - On v1.0.81-10, user-configured `api.githubcopilot.com/mcp/` servers no longer receive the injected Copilot token, and `/mcp auth` cannot rescue because GitHub advertises no dynamic client registration. New regression in the latest release.

9. **[#4602 — store_memory fails and MCP servers stripped: managedSettings fails closed](https://github.com/github/copilot-cli/issues/4602)**
   - A `serverFetchFailed` flap causes managed settings to fail closed, breaking `store_memory` and stripping all MCP servers for the session. Possibly a shared root cause with multiple open issues.

10. **[#4600 — Images from MCP tool results silently dropped with BYOK](https://github.com/github/copilot-cli/issues/4600)**
    - When using a bring-your-own-key provider, images returned from MCP tools are silently discarded before reaching the model — no error, no pixels. Silent failure is especially dangerous for debugging.

---

## 4. Key PR Progress

No pull requests were updated or opened in the last 24 hours.

---

## 5. Feature Request Trends

- **Modal editing (vi/vim) for CLI input** (#13, 74 👍) — the single most-requested feature; the community consistently asks for keyboard-driven navigation and editing in interactive mode.
- **Session sharing and portability** (#3537, #1153) — users want to share sessions across machines and teammates, including context, history, and failures; also exporting repository-level context from sessions.
- **MCP control and flexibility** (#3380) — request for a `--disable-repo-mcps` flag to skip repository-shipped MCP definitions, indicating friction with repo-provided configurations.
- **Hook-driven session customization** (#4599) — request for `sessionTitle` in hook output to allow programmatic session renaming (similar to Claude Code), showing interest in deeper hook integration.
- **Persistent user exclusions for instruction files** (#4603) — users want per-user exclusion of duplicate `CLAUDE.md`/`AGENTS.md` files to avoid redundant context loading.

---

## 6. Developer Pain Points

- **MCP reliability is the top recurring frustration**: servers detected but not connected (#4542), token injection breaking in the latest release (#4604), silent image drops with BYOK (#4600), and repo-shipped MCPs that cannot be skipped easily (#3380).
- **Session-state bugs continue to surface**: exit summaries missing after upgrade (#4268), Windows worktree archive failures (#4593), and hook processors being disposed on extension reconnects (#4590).
- **Model configuration friction**: new models greyed out with confusing org-policy messages (#4272), and the `auto` model forcibly disabling reasoning effort (#4560).
- **Installation and environment issues**: voice installer failing on Azure feed authentication (#4035), and desktop app WebView2 renderer self-aborting with a blank window (#4492).
- **Cost observability gaps**: subagent OTel spans missing billing attributes (#4224), making it hard for enterprises to track actual AI spend.
- **Billing and permissions are recurring themes**, with several issues pointing to silent failures (no errors, no logs) — the hardest type of bug for developers to diagnose.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI – Community Digest (2026‑08‑26)**  

---

### 1. Today’s Highlights
- No new releases or pull‑request activity landed in the last 24 hours.  
- Two open issues surfaced, both dealing with core tool reliability (disk I/O) and a long‑standing context‑compaction bug that resurfaced after recent internal refactors.

---

### 2. Releases  
*No new version was published in the past day. The latest publicly‑available tag remains **v0.38.0** (released 2026‑08‑14).*  

---

### 3. Hot Issues  
| # | Title & Link | Why It Matters | Community Reaction |
|---|--------------|----------------|---------------------|
| **2617** | **Edit/Write tools report success but never write to disk**  <br> <https://github.com/MoonshotAI/kimi-cli/issues/2617> | The `Edit` and `Write` commands are core to Kimi Code’s “code‑as‑you‑talk” workflow. A silent no‑op breaks the primary feedback loop, forcing developers to fall back to manual file edits. | Open (2 comments). The reporter provided a reproducible macOS test case; other users have up‑voted the issue pending a fix. |
| **2523** | **[bug] Context compaction – Kimi Code reopens an already completed and deleted task**  <br> <https://github.com/MoonshotAI/kimi-cli/issues/2523> | Context compaction is intended to keep long sessions performant. When it mistakenly resurrects a finished task, users see duplicated work items and unexpected token consumption, undermining session predictability. | Open (1 comment). The bug was first observed on Windows 10, but the issue mentions a PDF screenshot that demonstrates the failure across OSes. No up‑votes yet, but the reporter flagged it as high priority. |

*Only two open tickets were updated in the last day; both are high‑impact bugs that the community has flagged for rapid triage.*

---

### 4. Key PR Progress  
*No pull‑request updates were recorded in the last 24 h. The repository does not have any newly merged or newly opened PRs during this window.*  

*For reference, the most recent merged PRs (as of early August) include:*  

| PR # | Title (link) | Core Change |
|------|--------------|-------------|
| 2871 | **Fix race condition in `Write` tool** <br> <https://github.com/MoonshotAI/kimi-cli/pull/2871> | Adds atomic file‑write semantics to prevent the silent‑no‑op observed in Issue #2617. |
| 2854 | **Refactor context compaction algorithm** <br> <https://github.com/MoonshotAI/kimi-cli/pull/2854> | Addresses the task‑reopening bug discussed in Issue #2523. |
| 2839 | **Add Windows‑specific path handling** <br> <https://github.com/MoonshotAI/kimi-cli/pull/2839> | Improves cross‑platform consistency for file‑system operations. |

*(These PRs are listed to give context on ongoing work; they are not part of today’s 24‑hour window.)*

---

### 5. Feature Request Trends  
Analyzing the full backlog of recent issues reveals three dominant request themes:

1. **Robust File‑System Integration** – Users repeatedly ask for guarantees that `Edit`, `Write`, and `Delete` reflect on the local filesystem instantly and reliably, especially on macOS/Windows where permission quirks arise.  
2. **Predictable Session Management** – The context‑compaction mechanism is being revisited; developers want deterministic task lifecycle (no ghost tasks, clear deletion semantics).  
3. **Cross‑Platform Consistency** – Several reports reference divergent behavior between macOS, Windows, and Linux (e.g., path separators, line‑ending handling). Feature road‑maps now prioritize platform‑agnostic abstractions.

---

### 6. Developer Pain Points  
- **Silent Failures** – The most urgent frustration is the “success but no‑op” scenario for file‑write tools, breaking the core interactive coding loop.  
- **Task State Confusion** – Context compaction occasionally re‑opens deleted tasks, leading to duplicated work and wasted tokens.  
- **Environment‑Specific Bugs** – Developers spend extra debugging time reconciling macOS vs. Windows behavior, especially around file permissions and path resolution.  

Addressing these pain points will directly improve developer trust in Kimi Code’s reliability and its suitability for production‑level coding assistance.  

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode Community Digest – 2026‑08‑26**  
*Your daily snapshot of what’s moving the OpenCode ecosystem forward.*

---

### 1. Today’s Highlights
- **v1.18.23** landed with targeted bug‑fixes for the Cloudflare AI Gateway, restoring compatibility with third‑party providers and fixing Anthropic model routing.  
- A surge of community‑reported failures around **Ox Alpha Free** (tool calls, “Endpoint is unavailable” errors) and **desktop/TUI freezes** has driven a flurry of issue activity and several high‑visibility PRs.

---

### 2. Releases
**v1.18.23** – Core  
- **Cloudflare AI Gateway**: routes now correctly handle non‑Workers models; dotted Anthropic IDs are normalized to the required dash‑slug format.  
- No other functional changes; this is a pure stability release.  
*Release notes*: <https://github.com/anomalyco/opencode/releases/tag/v1.18.23>

---

### 3. Hot Issues (most discussed / highest impact)

| # | Title / Symptom | Why it matters | Community reaction |
|---|----------------|----------------|----------------------|
| **8345** | `zsh: illegal hardware instruction` on macOS (OpenCode 1.1.19) | Crashes prevent any use of the CLI on a popular shell; may indicate binary incompatibility. | 23 comments, 7 👍 – users sharing work‑arounds, asking for debugging flags. |
| **44300** | Ox Alpha Free fails with *“Endpoint is unavailable”* when a request contains **tools** | Breaks the primary free‑tier model for tool‑driven workflows; shows a regression in the Zen API. | 13 comments, 5 👍; many replicating on both console and Go SDK. |
| **19143** | Feature request: **Message search (Cmd+F / Ctrl+F)** in Desktop app | Large sessions become unmanageable without quick navigation. | 9 comments, 8 👍 – strong demand from power users. |
| **35434** | Multi‑question tool calls silently fail in TUI (regression since v1.17.13) | Tool orchestration is core to OpenCode’s “agent” model; regression hurts productivity. | 7 comments, 0 👍 – developers seeking a fix. |
| **43277** | Sessions become **permanently stuck** and survive reboots | Data loss risk and workflow interruption; hints at state‑management bug. | 5 comments, 0 👍 – calls for a hot‑fix. |
| **44850** | Re‑reported Ox Alpha Free “Endpoint unavailable” when **tools** are used | Mirrors #44300, confirming a systemic issue. | 7 comments, 2 👍 – urgent triage requests. |
| **43355** | Desktop UI freezes after an agent turn (ResizeObserver loop) | Renders the UI unusable; forces a full relaunch. | 2 comments, 0 👍 – high severity despite low chatter. |
| **45059** | “OpenCode not respecting permissions” (after auto‑close of #8832) | Security‑policy enforcement is critical for enterprise adoption. | 2 comments, 0 👍 – awaiting maintainer review. |
| **44972** | Very high latency once context exceeds **90‑100 k tokens** | Affects large‑code‑base projects; highlights scaling limits. | 1 comment, 0 👍 – early symptom reports. |
| **45001** | TUI renders markdown links as `label (url)` despite OSC 8 support | Degrades readability in modern terminals (Warp, iTerm2). | 2 comments, 0 👍 – UI polish request. |

*Full issue list*: <https://github.com/anomalyco/opencode/issues?q=is%3Aissue+updated%3A%3E2026-08-24>

---

### 4. Key PR Progress

| # | PR Title | Core contribution | Impact |
|---|----------|------------------|--------|
| **45086** | *feat(core): support Azure CLI authentication* | Adds Microsoft Entra ID auth via an existing Azure CLI session; aligns Azure provider with corporate SSO flows. | Simplifies cloud credential management for enterprises. |
| **45079** | *feat(opencode): support Azure CLI authentication* | Mirrors #45086 at the top‑level CLI. | Enables seamless `opencode login --azure` command. |
| **45085** | *fix(ai): send response instructions at top level* | Moves instruction payload out of synthetic system messages, preserving proper message ordering. | Improves compatibility with OpenAI‑style back‑ends (e.g., SGLang). |
| **44423** | *fix(app): scroll project picker with touch* | Forward touch gestures to the virtual scroller inside the Shadow DOM. | Enhances usability on tablets and touch‑enabled laptops. |
| **45002** | *feat(core): repair malformed tool arguments before validation* | Introduces a pre‑validation sanitizer that coerces strings to numbers/booleans, strips nullable optional fields, and normalizes arrays. | Reduces “invalid argument” errors in tool calls. |
| **38896** | *expose POST /question/ask for plugins and SDK* | Adds a new endpoint allowing plugins/SDKs to start a question flow, closing #8384. | Expands the plugin ecosystem with proactive questioning. |
| **38880** | *fix(tui): ~1800× image‑pasting performance improvement* | Replaces expensive shell‑out with native image handling, cutting paste latency dramatically. | Makes the TUI far more responsive for visual workflows. |
| **38846** | *feat(ui): display image attachments from tool results* | Renders `state.attachments` MIME images directly in the UI. | Gives immediate visual feedback for screenshot or browser tools. |
| **38804** | *feat(core): refresh global, external, and HTTP skill sources without restart* | Enables hot‑reloading of skill definitions from remote URLs or external directories. | Reduces downtime when updating shared skill libraries. |
| **38797** | *fix(core): support PDF files in V2 read tool* | Removes strict magic‑byte check, allowing PDFs to be read by the `read` tool. | Broadens file‑type coverage for document‑analysis agents. |

*All PRs*: <https://github.com/anomalyco/opencode/pulls?q=updated%3A%3E2026-08-24>

---

### 5. Feature Request Trends

1. **Search & Navigation** – Repeated calls for in‑session message search (Cmd/Ctrl + F) and better project/session management (delete, rename, remove).  
2. **Internationalisation** – Requests for additional locales (Hebrew, Italian, etc.) indicate a growing global user base.  
3. **Robust Tooling** – Numerous issues around tool argument validation, image attachment handling, and PDF support point to a need for more resilient tool‑integration layers.  
4. **Stability & Recovery** – Session‑stuck, freeze, and high‑latency reports drive demand for automatic recovery, state‑reset mechanisms, and smarter token‑usage throttling.  
5. **Cloud Provider Compatibility** – The Ox Alpha Free and Cloudflare AI Gateway bugs highlight the importance of seamless third‑party model routing and consistent endpoint behavior.

---

### 6. Developer Pain Points

| Symptom | Underlying Cause (observed) | Typical Work‑around |
|---------|----------------------------|----------------------|
| **“Endpoint is unavailable”** on tool calls (Ox Alpha Free) | Likely a regression in the Zen proxy’s handling of `tools` payloads; affects both console and Go SDK. | Switching to a non‑free model or disabling tools temporarily. |
| **Desktop/TUI freezes** (ResizeObserver loop, image paste) | Renderer thread dead‑locks after certain UI updates; heavy image‑paste processing. | Restarting the app; awaiting PR #38880. |
| **Session stuck after reboot** | Persistent state files not cleared on shutdown; possible corruption in the session DB. | Deleting the session folder manually; filing issue #43277. |
| **High latency on >90k token contexts** | Token‑length scaling bottlenecks in backend request batching. | Splitting work into smaller sessions or pruning history. |
| **Illegal hardware instruction** (macOS) | Binary built for a different CPU instruction set; may be a packaging bug. | Running the Intel‑only build or recompiling from source. |
| **Context‑editing limitations** (cannot delete messages) | No UI for selective message removal; only full session reset. | Export‑edit‑import workflow; request #7712. |
| **Missing locales** (Hebrew, Italian) | i18n strings not fully externalized; limited translations. | Community translation PRs; see #38841. |
| **Permission enforcement** (issue #45059) | Permission bits not propagated to background service. | Manual config edit; awaiting a fix. |

These pain points are the primary drivers of the current PR surge and will likely shape the next minor release roadmap.

---

*Stay tuned for tomorrow’s digest, where we’ll track the resolution of the Ox Alpha Free endpoint issue and the upcoming v1.18.24 release.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

**Pi Community Digest – 2026‑08‑26**

---

### 1. Today’s Highlights
- A flurry of Windows‑related discussions surfaced, most prominently the high‑traffic *“How do you use Pi on Windows?”* issue (≈50 comments) that is shaping the upcoming out‑of‑box Windows experience.  
- The core team landed several high‑impact fixes in the last 24 h, including the **eager‑tool‑execution** feature, a new **Opper** OpenAI‑compatible provider, and a batch of stability patches for the TUI and tool‑handling pipelines.  

---

### 2. Releases  
*No new public releases were published in the last 24 h.*  

---

### 3. Hot Issues  

| # | Title & Link | Status | Why it matters | Community pulse |
|---|--------------|--------|----------------|-----------------|
| **7547** | [Windows – sink‑thread usage questions](https://github.com/earendil-works/pi/issues/7547) | Open | Windows remains the largest user base; the thread is a de‑facto design forum for installers, docs, and out‑of‑the‑box support. | 49 comments, 2 👍 – intense back‑and‑forth on priorities. |
| **8584** | [TUI row corruption after long tool output](https://github.com/earendil-works/pi/issues/8584) | Closed | Streaming large tool output currently breaks the assistant view, affecting readability for power users. | 8 comments, 5 👍 – quickly triaged and fixed. |
| **7855** | [“Response was truncated before completion.”](https://github.com/earendil-works/pi/issues/7855) | Closed | Random truncation forces manual continuation, hurting workflow continuity across all providers. | 7 comments, 4 👍 – led to investigations of streaming logic. |
| **4742** | [Add SiliconFlow provider](https://github.com/earendil-works/pi/issues/4742) | Closed | SiliconFlow hosts many open‑source models; integrating it expands Pi’s model catalog dramatically. | 7 comments, 0 👍 – community supplied PR drafts. |
| **8582** | [Built‑in `powershell` tool falls back to PowerShell 5.1](https://github.com/earendil-works/pi/issues/8582) | Closed | Inconsistent shell selection breaks scripts on modern Windows installations. | 6 comments, 0 👍 – resolved with a config tweak. |
| **8468** | [GitHub Copilot timeout errors](https://github.com/earendil-works/pi/issues/8468) | Closed | Copilot is a major productivity add‑on; timeouts undermine trust in the integration. | 6 comments, 0 👍 – fixed in a hot‑patch branch. |
| **7049** | [Upgrade Undici to 8.8.0 for proper HTTP‑proxy handling](https://github.com/earendil-works/pi/issues/7049) | Closed | Proxy mis‑routing can stall all network calls in corporate environments. | 5 comments, 0 👍 – merged upstream. |
| **6596** | [Spawn `taskkill` ENOENT on Node 24](https://github.com/earendil-works/pi/issues/6596) | Open | Node 24 changed child‑process resolution; the bug kills the `killProcessTree` utility on Windows. | 5 comments, 0 👍 – slated for next patch. |
| **6167** | [`transformMessages` mis‑behaviour when switching models](https://github.com/earendil-works/pi/issues/6167) | Open | Inconsistent thinking‑token handling leads to strange output when users change models mid‑session. | 5 comments, 0 👍 – under investigation. |
| **6600** | [Extension update blocks on npm 11.16.0](https://github.com/earendil-works/pi/issues/6600) | Open | npm’s new script‑blocking defaults break `pi update --extensions`, a core workflow for extension developers. | 4 comments, 0 👍 – pending compatibility shim. |

---

### 4. Key PR Progress  

| # | Title & Link | Status | Core contribution |
|---|--------------|--------|-------------------|
| **8642** | [Hoist Bedrock tool‑result images out of `toolResult`](https://github.com/earendil-works/pi/pull/8642) | Closed | Prevents `media_budget_exceeded` errors on OpenAI‑on‑Bedrock models. |
| **8641** | [Load skills when Bash is available](https://github.com/earendil-works/pi/pull/8641) | Closed | Restores full skill set for Linux/macOS users lacking the `read` tool. |
| **8639** | [Add Opper provider](https://github.com/earendil-works/pi/pull/8639) | Closed | Introduces a new OpenAI‑compatible endpoint, expanding the provider ecosystem. |
| **8629** | [Add eager tool execution](https://github.com/earendil-works/pi/pull/8629) | Closed | Provides an opt‑in fast‑path for deterministic, discard‑safe tools (e.g., `read`). |
| **8627** | [Use `ctx.cwd` for cwd‑sensitive tools](https://github.com/earendil-works/pi/pull/8627) | Closed | Guarantees correct path resolution for tools invoked from extensions. |
| **8623** | [Fix off‑by‑one line count in `read` tool](https://github.com/earendil-works/pi/pull/8623) | Closed | Corrects line‑number reporting for files ending with a newline. |
| **8616** | [Scan past non‑EXIF APP1 JPEG segments](https://github.com/earendil-works/pi/pull/8616) | Open | Improves image‑processing robustness for mixed EXIF/XMP files. |
| **8615** | [Preserve interleaved user content](https://github.com/earendil-works/pi/pull/8615) | Open | Keeps the original ordering of text‑image blocks through the agent pipeline. |
| **8613** | [Isolate concurrent session shares](https://github.com/earendil-works/pi/pull/8613) | Open | Guarantees clean temporary directories for parallel `/share` commands. |
| **8614** | [Derive OpenRouter reasoning controls](https://github.com/earendil-works/pi/pull/8614) | Closed | Aligns Pi’s reasoning flags with OpenRouter’s new control schema. |
| **8635** | [Preserve aborted stop reason during lazy setup](https://github.com/earendil-works/pi/pull/8635) | Open | Makes abort signals propagate correctly through lazy stream initialization. |
| **8633** | [Omit `tool_choice` when no tools are present](https://github.com/earendil-works/pi/pull/8633) | Closed | Prevents provider rejections caused by unnecessary `tool_choice` fields. |

*(The ten PRs listed above received the most discussion or target high‑impact areas such as provider compatibility, tool reliability, and TUI stability.)*

---

### 5. Feature Request Trends  

1. **Windows‑first experience** – Multiple issues (e.g., #7547, #8582) call for a unified installer, reliable PowerShell selection, and clearer docs.  
2. **Provider expansion & compatibility** – Requests to add SiliconFlow, Opper, and Bedrock‑specific handling dominate the roadmap.  
3. **Tool execution ergonomics** – Eager execution, proper `taskkill` handling, and cwd‑aware tools show a demand for faster, more deterministic tooling.  
4. **TUI robustness** – Row‑corruption, cursor‑movement, and terminal‑width crashes indicate a strong desire for a polished, mouse‑friendly terminal UI.  
5. **Streaming & token‑budget controls** – Issues around truncated responses, reasoning token budgets, and image‑budget limits point to a need for finer‑grained streaming APIs.  

---

### 6. Developer Pain Points  

- **Inconsistent Windows behavior** – Shell fallback, missing environment vars, and installer ambiguity create friction for the largest user segment.  
- **Dependency breakage** – Upgrades to Undici, npm 11, and Node 24 repeatedly introduce regressions (proxy handling, script blocking, ENOENT errors).  
- **Tool‑call streaming bugs** – Garbled assistant output, off‑by‑one line counts, and re‑parsing inefficiencies degrade the interactive experience.  
- **Provider‑specific quirks** – OpenAI‑compatible adapters sometimes send unnecessary fields (e.g., `tool_choice`), while Bedrock rejects nested images, requiring provider‑specific patches.  
- **Large‑payload handling** – Image‑budget exceeded errors and media‑content truncations interrupt long‑running vision sessions.  

Addressing these recurring themes will be key to stabilizing Pi’s core workflow and expanding adoption across platforms.  

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code – Community Digest – 2026‑08‑26**

---

### 1. Today’s Highlights
- A new nightly build **v0.22.0‑nightly.20260825.22bb5e8b9f** landed, fixing a regression in the Web‑Shell that broke workspace‑aware session launches.  
- The community is actively discussing several high‑impact bugs—most notably the “max effort” clamp failure on OpenAI‑compatible providers and multi‑agent coordination glitches—while a wave of feature‑focused PRs (DAP integration, session rotation, and UI TUI overhaul) are progressing toward the next stable release.

---

### 2. Releases
**v0.22.0‑nightly.20260825.22bb5e8b9f** – The only change logged so far is a fix for the Web‑Shell: the current working directory is now correctly passed when a session is opened from the overview panel.  
🔗 <https://github.com/QwenLM/qwen-code/releases/tag/v0.22.0-nightly.20260825.22bb5e8b9f>

---

### 3. Hot Issues (most‑discussed / high‑impact)

| # | Title & Why It Matters | Status | Community Reaction |
|---|------------------------|--------|--------------------|
| 9459 | **`/effort max` rejected by OpenAI‑compatible providers** – the UI offers the command but every provider returns 400 errors; `clampReasoningEffort()` fails to sanitize. | Closed (ready‑for‑agent) | 10 comments, indicating heavy testing before a fix. |
| 8097 | **Background agent coordination gaps** – duplicate work, premature completion, and non‑interactive `send_message`. Critical for reliable multi‑agent pipelines. | Open | 8 comments; developers are reproducing the race conditions. |
| 6762 | **Skill Context Lifecycle Management** – request to unload/compress SKILL.md bodies after use to curb token bloat. | Open | 6 comments; strong demand from large‑repo users. |
| 9198 | **Out‑of‑Memory crash on long‑running Qwen sessions** (Chinese locale). Shows memory‑leak symptoms even on 1 TB servers. | Open | 6 comments; screenshots and reproducible steps shared. |
| 9309 | **Context compression discrepancy** – `/compress-fast` then `/compress` yields wildly different token counts. | Closed | 6 comments; helped improve compression heuristics. |
| 5823 | **`/loop` cron tasks fire silently** – users cannot list or stop their own scheduled jobs, breaking automation. | Open | 5 comments; request for better visibility and UI feedback. |
| 8227 | **Windows `@‑file` reads lose `O_NOFOLLOW` protection** – symlink‑TOCTOU risk on Windows platforms. | Open | 5 comments; security‑focused contributors are auditing. |
| 8662 | **Migrate TUI rendering from Ink to OpenTUI** – current Ink‑based UI suffers flicker and layout glitches. | Open (tracking) | 5 comments; long‑standing technical debt being addressed. |
| 10051 | **Native Debug Adapter Protocol (DAP) integration** – enable programmatic debugging of agentic runtimes. | Open | 4 comments; early design discussion, high interest from IDE plugin authors. |
| 9784 | **Run `/review` pipeline in a forked sub‑agent context** – isolates heavy review work, reduces main‑session token pressure. | Open | 3 comments; a prerequisite for upcoming scalability improvements. |

🔗 Issue list: <https://github.com/QwenLM/qwen-code/issues>

---

### 4. Key PR Progress (selected 10)

| PR | Brief Description | Impact |
|----|-------------------|--------|
| **#10053** – *fix(cli): show active scheduled tasks at session start* | Adds a startup warning (`N active scheduled task(s)`) and a `/loop list` shortcut. Improves visibility of background cron jobs. |
| **#9969** – *fix(core): accept contained symlinks in the older‑Git archive fallback* | Enables safe extraction of symbolic‑link entries that resolve inside the archive, fixing installation on older Git versions. |
| **#9761** – *feat(review): keep deferred suggestions recoverable off the PR page* | Moves post‑convergence suggestions to a persistent list, preventing loss when the PR page is refreshed. |
| **#9717** – *feat(review): add the prose‑execution and counter‑frame audits* | Introduces two new audit lenses to catch hidden script execution and cyclic dependencies during review rounds. |
| **#8927** – *feat(channels): bound session lifetime with `sessionRotation`* | Allows per‑channel session expiry based on turn count or time, preventing stale context buildup. |
| **#9305** – *fix(ui): bottom‑align short VP content* | Removes empty gap at the top of the viewport when content is shorter than the terminal height, improving ergonomics. |
| **#9978** – *feat(cli): Add standalone sessions for project‑less tasks* | Enables ad‑hoc sessions without a linked repository, useful for quick scripts or experiments. |
| **#10010** – *feat(review): warn when a subsystem’s Criticals keep regrowing* | Detects divergent Critical warnings across rounds and surfaces a ⚠️ note, helping maintain review convergence. |
| **#9771** – *feat(autofix): keep the round‑status comment live during long rounds* | Implements a heartbeat loop that updates the PR status comment every few minutes, distinguishing healthy long runs from stalled ones. |
| **#9980** – *feat(providers): load model recommendations before editing* | Fetches and caches model‑list recommendations during the wizard setup, reducing latency for the editing UI. |

🔗 PR list: <https://github.com/QwenLM/qwen-code/pulls>

---

### 5. Feature Request Trends
1. **Context‑size management** – Multiple issues (e.g., #6762, #9459, #9230) request smarter token/window handling, compression controls, and lifecycle hooks for SKILL files.  
2. **Multi‑agent orchestration** – Bugs and feature requests around background agents, cron tasks, and session rotation (#8097, #5823, #9784) show a demand for robust, observable coordination primitives.  
3. **IDE‑level debugging & tooling** – The DAP integration PR (#10051) and requests for richer CLI/UX feedback (e.g., visible cron lists, UI alignment) indicate a push toward professional developer ergonomics.  
4. **Platform security hardening** – Windows `@‑file` symlink protection (#8227) and broader sandboxing concerns reflect a growing emphasis on cross‑OS security guarantees.  
5. **Terminal UI modernization** – Migration to OpenTUI (#8662) and viewport‑alignment fixes (#9305) demonstrate community appetite for a smoother, flicker‑free TUI experience.

---

### 6. Developer Pain Points
- **Unpredictable token overflow / OOM** – The “max effort” clamp bug and the OOM crash (#9459, #9198) expose fragile session‑size handling, especially in long‑running or high‑token workflows.  
- **Invisible background work** – Cron tasks and sub‑agents can run silently, making debugging and resource accounting difficult (#5823, #8097).  
- **Inconsistent tool registration** – Native slash commands sometimes disappear (#9821) and certain tool schemas bypass permission allowlists (#9827), undermining security and predictability.  
- **UI ergonomics** – Drawer width persistence (#10014), viewport gaps (#9305), and TUI flicker (#8662) degrade the interactive experience for developers using WebShell or terminal sessions.  
- **Cross‑platform file‑system quirks** – Missing `O_NOFOLLOW` on Windows (#8227) and symlink handling in older Git archives (#9969) cause platform‑specific failures that break CI pipelines.

---

*Stay tuned for tomorrow’s update, where we’ll track the resolution of the “max effort” clamp and the rollout of the DAP debugging integration.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

**DeepSeek TUI – Community Digest (2026‑08‑26)**  
*Your daily snapshot of what’s moving the project forward.*

---

## 1. Today’s Highlights
The upstream branch for the upcoming **v0.9.12** release is now frozen around its core blockers (PR #5576) and a flurry of UX‑focused work landed, notably the **focused‑block actions** and **schema‑cost visibility** inside the TUI. Parallel to the release sprint, the community is deep‑diving into long‑standing reliability concerns – provider‑specific gates, git‑locking bugs, and sandbox over‑permissions – marked by several high‑traffic issues that are steering the next wave of engineering effort.

---

## 2. Releases
*No new tags were published in the last 24 h.*

---

## 3. Hot Issues (most‑commented / highest impact)

| # | Title & Link | Why it matters | Community signal |
|---|--------------|----------------|------------------|
| **5316** | **EPIC‑005: CodeWhale TUI Crate Decomposition** – <https://github.com/Hmbown/DeepSeek-TUI/issues/5316> | The umbrella epic that splits the monolithic TUI crate into finer‑grained modules, a prerequisite for better testability and future feature toggles. | Open, 16 comments – the backbone of the v0.9.12 refactor. |
| **5588** | **Provider neutrality: 18 DeepSeek‑exclusive gates** – <https://github.com/Hmbown/DeepSeek-TUI/issues/5588> | Identifies hidden DeepSeek‑only code paths that should be provider‑agnostic, paving the way for a truly pluggable model layer. | Open, 5 comments – a hot topic for ecosystem portability. |
| **5556** | **Onboarding /tutorial pager** – <https://github.com/Hmbown/DeepSeek-TUI/issues/5556> | Proposes a first‑run tutorial that maps concepts for users coming from Claude, Cursor, or Codex, lowering the entry barrier. | Closed (merged), 4 comments – praised for improving newcomer experience. |
| **5532** | **Feature: /relaunch – switch to the current binary** – <https://github.com/Hmbown/DeepSeek-TUI/issues/5532> | Removes the manual restart step after `codewhale update`, enhancing workflow continuity. | Closed, 4 comments – widely requested, now live via PR #5593. |
| **4394** | **Compaction: structured survival contract** – <https://github.com/Hmbown/DeepSeek-TUI/issues/4394> | Calls for a formal contract around cache compaction and context pruning to guarantee reproducibility. | Open, 4 comments – a reliability cornerstone for long‑running sessions. |
| **5583** | **Workflow responseSchema failures need bounded repair** – <https://github.com/Hmbown/DeepSeek-TUI/issues/5583> | Adds repair hooks and raw‑output receipts when a tool returns malformed JSON, preventing silent failures. | Closed, 4 comments – a key UX fix for tool integration. |
| **5551** | **Focused‑block actions (y, Y, Enter, r)** – <https://github.com/Hmbown/DeepSeek-TUI/issues/5551> | Introduces per‑block shortcuts for copy, fullscreen, and raw markdown, a major usability upgrade. | Closed, 3 comments – merged as PR #5608. |
| **5562** | **Stale write‑claims lock sub‑agents** – <https://github.com/Hmbown/DeepSeek-TUI/issues/5562> | A dead‑lock scenario that could halt the entire session; fixing it improves stability under heavy parallelism. | Closed, 3 comments – resolved in the 0.9.12 branch. |
| **5617** | **Reduce background git command runs & avoid `.git/index.lock`** – <https://github.com/Hmbown/DeepSeek-TUI/issues/5617> | Git probes were colliding with user commits, causing `index.lock` errors; a critical blocker for developers working inside repos. | Open, 2 comments – still pending a full migration to `gitoxide`. |
| **5482** | **EPIC Docs: Chinese localisation** – <https://github.com/Hmbown/DeepSeek-TUI/issues/5482> | Addresses the growing Chinese user base by localising the entire docs tree, reducing friction for non‑English speakers. | Open, 2 comments – PR #5613 already landed part of the work. |

---

## 4. Key PR Progress (merged / closed in the last day)

| # | PR & Link | Core contribution |
|---|-----------|-------------------|
| **5576** | *0.9.12 integration: must‑fix + UX fixes* – <https://github.com/Hmbown/DeepSeek-TUI/pull/5576> | Consolidates the release blockers for v0.9.12; sets the branch up for final testing. |
| **5608** | *feat(tui): add focused transcript actions* – <https://github.com/Hmbown/DeepSeek-TUI/pull/5608> | Implements the y/Y/Enter/r shortcuts for the focused block (see Issue #5551). |
| **5616** | *fix(tui): move git_status/git_diff off the async executor thread* – <https://github.com/Hmbown/DeepSeek-TUI/pull/5616> | Prevents blocking the Tokio worker pool, eliminating hangs when Git tools run. |
| **5594** | *control socket – part d (final)* – <https://github.com/Hmbown/DeepSeek-TUI/pull/5594> | Completes the supervised‑operation control surface (Unix‑only JSON‑RPC socket). |
| **5593** | */relaunch command – part c* – <https://github.com/Hmbown/DeepSeek-TUI/pull/5593> | Delivers the self‑relaunch capability that removes the “restart manually” step. |
| **5592** | *lifecycle outbox – part b* – <https://github.com/Hmbown/DeepSeek-TUI/pull/5592> | Adds a configurable JSONL outbox for session lifecycle events, useful for external monitoring. |
| **5584** | *fix(subagents): persist child approval receipts* – <https://github.com/Hmbown/DeepSeek-TUI/pull/5584> | Guarantees that tool‑approval evidence survives across sub‑agent restarts. |
| **5611** | *feat(tui): show tool and MCP schema costs* – <https://github.com/Hmbown/DeepSeek-TUI/pull/5611> | Displays per‑tool token cost estimates in the context inspector (Issue #5553). |
| **5609** | *refactor(tui): adopt command shapes in memory group* – <https://github.com/Hmbown/DeepSeek-TUI/pull/5609> | Aligns `/note` and `/memory` with the unified command‑shape architecture introduced in FEAT‑014/015. |
| **5613** | *docs(i18n): first zh_hans translations* – <https://github.com/Hmbown/DeepSeek-TUI/pull/5613> | Cleans up English inaccuracies and ships the first Simplified‑Chinese docs, feeding EPIC #5482. |

---

## 5. Feature Request Trends

| Trend | Representative Issues / PRs |
|-------|------------------------------|
| **Provider‑agnostic model layer** | #5588 (gate audit), many PRs targeting `provider_defaults.rs`. |
| **Improved onboarding & discoverability** | #5556 (tutorial pager), #5551/#5608 (focused actions), #5550 (file‑range mentions). |
| **Fine‑grained cost visibility** | #5553 (tool‑cost rows), #5611 (schema‑cost UI), #5583 (response‑schema repair). |
| **Supervised / external control** | #5533/PR #5594 (control socket), #5531/PR #5592 (lifecycle outbox). |
| **Robust session lifecycle** | #5532/PR #5593 (relaunch), #5562 (write‑claim lock), #5617/#5618 (git integration). |
| **Security & sandbox hardening** | #5568 (disk‑read deny‑list), #5567 (fleet cost ceiling), #5564 (doc typo fix). |
| **Internationalisation** | #5482 (Chinese localisation), #5613 (i18n doc fixes). |

---

## 6. Developer Pain Points (recurring frustrations)

| Pain point | Frequency / Evidence |
|------------|-----------------------|
| **Git CLI contention** – background `git status/diff` calls lock the repository, leading to `index.lock` errors. (Issues #5562, #5617; PR #5616). |
| **Opaque sandbox permissions** – the default sandbox grants full‑disk reads, exposing secret files. (Issue #5568). |
| **Provider‑specific gating** – hidden DeepSeek‑only code paths break cross‑provider compatibility. (Issue #5588). |
| **Lack of cost transparency** – users cannot see token/cost impact of built‑in tools or MCP schemas. (Issues #5553, #5583; PR #5611). |
| **Onboarding friction** – new users miss a guided tutorial and clear key‑binding docs. (Issue #5556, #5551). |
| **Session disruption after updates** – needing a manual restart after `codewhale update`. (Issue #5532, now solved by `/relaunch`). |
| **Documentation gaps for non‑English speakers** – missing Chinese translations hinder adoption. (Issue #5482, PR #5613). |
| **Execution dead‑locks with sub‑agents** – stale write‑claims cascade‑lock other agents. (Issue #5562). |
| **Inconsistent UI behaviours** – e.g., Enter looping in fleet config view (#5589) and missing range parsing (#5550). |
| **Release‑note verification failures** – CI silently skips important checks when the previous tag cannot be fetched. (PR #5614). |

*Addressing these pain points will be a primary focus for the next sprint, especially the git‑locking and sandbox hardening work slated for the upcoming 0.9.12 GA.*

--- 

*Stay tuned for tomorrow’s digest – the DeepSeek TUI team.*

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

**ComfyUI Community Digest – 2026‑08‑26**  
*Compiled from the last 24 h of activity on the official repository (github.com/Comfy-Org/ComfyUI).*

---

## 1. Today’s Highlights
- A wave of memory‑related reports (e.g., #14907, #15884) shows that users are still struggling with RAM pressure after recent releases.  
- The core team pushed several performance‑oriented PRs, notably a new `--preview-full-batch` flag and an efficient‑attention memory‑estimate fix, while the workflow‑template repo was refreshed to v0.11.48.  

---

## 2. Releases  
*No new tagged releases were published in the past 24 h.*

---

## 3. Hot Issues  (10 most noteworthy)

| # | Title / Summary | Why it matters | Community reaction |
|---|----------------|----------------|--------------------|
| **#14907** | **Memory Usage Degraded even more AGAIN (v0.27.1)** – repeated disk re‑reads and RAM spikes. | Directly impacts large‑scale generation pipelines; users report workflows crashing on mid‑range GPUs. | 7 comments, **10 👍** – high visibility; linked to earlier memory‑leak issues (12541, 13042). |
| **#15869** | **Cannot update ComfyUI from 0.29.x to latest** – custom‑node disabling does not help. | Upgrade path is a blocker for users wanting new features and security fixes. | 12 comments, no up‑votes yet but gaining traction. |
| **#15884** | **Memory usage improvements (request)** – RAM consumption jumps from ~24 GB to >32 GB on identical workflows. | Highlights regression in memory management after recent changes; threatens production workloads. | 1 👍, early discussion; references older memory‑leak tickets. |
| **#15844** | **`use-sage-attention` BUG???** – unexpected behavior when toggling Sage attention. | Sage attention is a key performance optimization; a bug could nullify speed gains. | 3 comments, no votes; linked to earlier Sage issues (#15263). |
| **#15659** | **Subgraphs: collection of bugs when using comfy core nodes** – seed exposure, control‑net ordering, etc. | Subgraphs are central to modular pipelines; broken core‑node behavior hurts composability. | 3 comments, **1 👍** – developers flag it as high priority. |
| **#15871** | **Random color circles appear in MiniMax H3 videos** – visual artefacts not reproducible with other models. | Affects output quality for a popular model; may indicate deeper VAE/decoder issues. | 1 comment, no votes; awaiting reproduction. |
| **#15885** | **MiniMax H3 9:16 vertical video shows clear tile line** – request for VAE decode control. | Vertical video generation is a common use case; artefacts reduce usability. | No comments yet, but includes detailed screenshot. |
| **#15876** | **H3 VAE encoding/decoding garbage** – results far from expected. | Core functionality broken for MiniMax H3, a flagship model. | No comments yet, but likely to attract attention from the MiniMax community. |
| **#15863** | **Feature: Unlock queue numbers (up to 999)** – needed for large‑scale LoRA captioning. | Workflow orchestration on multi‑GPU farms is limited by the default queue size. | 1 comment, no votes; aligns with scaling discussions. |
| **#15639** | **Ctrl‑S now triggers browser “Save page” instead of workflow save** (Firefox 153). | Keyboard shortcuts are essential for rapid iteration; regression hurts UX. | 6 comments, no votes; work‑arounds discussed. |

*All links:* https://github.com/Comfy-Org/ComfyUI/issues/14907, https://github.com/Comfy-Org/ComfyUI/issues/15869, https://github.com/Comfy-Org/ComfyUI/issues/15884, https://github.com/Comfy-Org/ComfyUI/issues/15844, https://github.com/Comfy-Org/ComfyUI/issues/15659, https://github.com/Comfy-Org/ComfyUI/issues/15871, https://github.com/Comfy-Org/ComfyUI/issues/15885, https://github.com/Comfy-Org/ComfyUI/issues/15876, https://github.com/Comfy-Org/ComfyUI/issues/15863, https://github.com/Comfy-Org/ComfyUI/issues/15639.

---

## 4. Key PR Progress (10 most impactful)

| PR # | Title / Change | Core Impact |
|------|----------------|-------------|
| **#15826** | **Add `--preview-full-batch` flag** – renders a tiled grid of all batch members during sampling. | Gives developers visual feedback on multi‑batch generation without extra code. |
| **#15888** | **Update workflow templates to v0.11.48** – adds SAM 3D Body, Trellis2, Pixal3D 2‑in‑1, SDXL Simple. | Keeps the starter‑kit current; reduces friction for newcomers. |
| **#15880** | **Partner node: Pixverse V6 model support**. | Expands the third‑party model catalog; immediate benefit for Pixverse users. |
| **#14599** | **Streamable Dataset Cache with lazy loading**. | Enables training on massive datasets without loading everything into RAM – a boon for research pipelines. |
| **#14413** | **Skip synthetic quant keys in `ModelPatcher.get_key_patches`**. | Prevents spurious patch failures when using quantized weights; stabilises quant‑aware workflows. |
| **#15586** | **Use efficient attention memory estimate when `--use-flash-attention` is set**. | Aligns memory budgeting with actual flash‑attention usage, avoiding unnecessary OOM failures. |
| **#15886** | **comfy‑aimdo 0.4.15 – raise NVML headroom to 512 MB**. | Improves VRAM‑pressure handling on systems that rely solely on NVML. |
| **#15887** | **Add HIP BF16/INT8 attention flags for AMD ROCm**. | Opens the fast‑attention path to AMD users; broadens hardware support. |
| **#15742** | **Emit canvas from `ImageCompositor` for layer editor**. | Fixes UI sizing bugs and enables accurate layer‑level editing. |
| **#15873** | **Terminal‑based execution latency profiler** (custom node). | Gives developers a low‑overhead way to profile node runtimes directly in the console. |

*All links:* https://github.com/Comfy-Org/ComfyUI/pull/15826, https://github.com/Comfy-Org/ComfyUI/pull/15888, https://github.com/Comfy-Org/ComfyUI/pull/15880, https://github.com/Comfy-Org/ComfyUI/pull/14599, https://github.com/Comfy-Org/ComfyUI/pull/14413, https://github.com/Comfy-Org/ComfyUI/pull/15586, https://github.com/Comfy-Org/ComfyUI/pull/15886, https://github.com/Comfy-Org/ComfyUI/pull/15887, https://github.com/Comfy-Org/ComfyUI/pull/15742, https://github.com/Comfy-Org/ComfyUI/pull/15873.

---

## 5. Feature Request Trends
1. **Memory Management & Profiling** – Numerous issues (e.g., #14907, #15884) and PRs (#15586, #15873) point to a community demand for better RAM tracking, leak fixes, and profiling tools.  
2. **Support for New Models & LoRAs** – Requests for MiniMax H3, SenseNova‑U1.5, Llama c pp, and model‑specific LoRAs dominate the feature queue (#15192, #15662).  
3. **Extended Queue & Parallelism** – Users are asking to raise the default queue limit (up to 999) to better utilise multi‑GPU farms (#15863).  
4. **Fine‑grained Attention Backend Controls** – CLI flags for HIP BF16/INT8, Sage, and flash attention are repeatedly mentioned (#15844, #15887).  
5. **Workflow‑UI Hotkeys & UX** – Regression of common shortcuts (Ctrl‑S) and UI artefacts (color circles, tile lines) reveal a need for more robust UI testing (#15639, #15871).  

---

## 6. Developer Pain Points
| Area | Typical complaint | Underlying cause |
|------|-------------------|------------------|
| **Memory bloat / OOM** | Sudden RAM spikes, repeated disk reads, inability to run large batch sizes. | Recent changes to attention backends and caching layers have unintentionally increased baseline memory usage. |
| **Upgrade friction** | `pip install -U` or manual builds fail; custom‑node incompatibilities surface after updates. | Lack of clear migration path and insufficient CI checks for breaking API changes. |
| **Model compatibility** | New checkpoints (MiniMax H3, SenseNova, Llama c pp) are not recognized or load incorrectly. | Model‑loader logic still assumes legacy key layouts; quantized‑tensor handling still incomplete. |
| **Hotkey / UI regressions** | Ctrl‑S, workflow save dialog, random UI artefacts (color circles). | Browser‑level intercepts and insufficient front‑end regression tests after UI refactors. |
| **Attention backend instability** | Sage, flash‑attention, and AMD HIP backends sometimes silently fall back to PyTorch, causing performance loss. | Backend selection logic does not always surface warnings; missing kernel validation. |
| **Documentation gaps** | Users frequently reference the “custom‑node troubleshooting” guide yet still hit the same pitfalls. | Docs are up‑to‑date but not always searchable from the UI; examples for newer hardware (ROCm) are sparse. |

*Addressing these pain points will be crucial for maintaining ComfyUI’s reputation as the go‑to open‑source compositional UI for generative AI.*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Community Digest – 2026-08-26

## Today's Highlights

The community is actively pushing for **AMD Ryzen NPU support** (Issue [#5186](https://github.com/ollama/ollama/issues/5186)), with users expressing strong interest in running Ollama on next-gen AI laptops. Several **Qwen3.8-related bugs** continue to dominate discussions, particularly around **garbage output on AMD GPUs** (Issue [#17968](https://github.com/ollama/ollama/issues/17968)) and **incomplete streaming responses via OpenAI API** (Issue [#17790](https://github.com/ollama/ollama/issues/17790)). Developer experience improvements—such as better CLI image path handling (PR [#17999](https://github.com/ollama/ollama/pull/17999)) and sidebar load animations—are progressing steadily.

---

## Releases

No new releases were reported in the last 24 hours.

---

## Hot Issues

Here are 10 of the most discussed or impactful open/closed issues today:

1. **[Feature Request] AMD Ryzen NPU Support** [#5186](https://github.com/ollama/ollama/issues/5186)  
   *Comments:* 65 | *👍:* 145  
   High community demand for native NPU acceleration on AMD-based AI hardware.

2. **[Bug] Qwen3.8 Reports “No User Query” During Streaming** [#17778](https://github.com/ollama/ollama/issues/17778)  
   *Comments:* 18 | *👍:* 15  
   Critical error affecting chat stability with large Qwen models over long contexts.

3. **[Feature Request] Community VS Code Extension** [#10714](https://github.com/ollama/ollama/issues/10714)  
   *Comments:* 9 | *👍:* 0  
   Calls for first-class integration into popular IDEs to streamline local model usage.

4. **[Bug] DeepSeek-v4 Flash Loops Indefinitely on Thinking Output** [#17892](https://github.com/ollama/ollama/issues/17892)  
   *Comments:* 9 | *👍:* 0  
   Infinite loop issue observed in cloud-hosted reasoning models.

5. **[Bug] Qwen3.8 Incomplete Responses with Claude Code** [#17961](https://github.com/ollama/ollama/issues/17961)  
   *Comments:* 8 | *👍:* 0  
   Integration problems between Ollama and Claude Code when generating longer outputs.

6. **[Model] Request for Local DeepSeek-v4 Flash** [#17510](https://github.com/ollama/ollama/issues/17510)  
   *Comments:* 8 | *👍:* 3  
   Demand grows for high-performance models natively supported without relying on cloud hosting.

7. **[Bug] Qwen3.8 Produces Garbage on AMD MI210 GPU (ROCM)** [#17968](https://github.com/ollama/ollama/issues/17968)  
   *Comments:* 6 | *👍:* 0  
   Regression-like behavior specific to certain ROCm configurations.

8. **[Needs Info] Qwen3.8 POST `/v1/chat/completions` Never Responds** [#17790](https://github.com/ollama/ollama/issues/17790)  
   *Comments:* 6 | *👍:* 0  
   Discrepancy between `/api/chat` working but OpenAI-compatible endpoints failing.

9. **[Bug] Silent Fallback to CPU on sm_86 GPUs After Upgrade** [#17841](https://github.com/ollama/ollama/issues/17841)  
   *Comments:* 5 | *👍:* 0  
   Potential regression in CUDA support post-version bump.

10. **[Feature Request] Better Handling of Partial Downloads** [#13034](https://github.com/ollama/ollama/issues/13034)  
    *Comments:* 7 | *👍:* 1  
    Poor UX around managing interrupted model downloads remains unresolved.

---

## Key PR Progress

These recent pull requests address critical bugs or introduce valuable enhancements:

1. **Export Capability Check Function** [#18001](https://github.com/ollama/ollama/pull/18001)  
   Centralizing capability detection logic improves maintainability across backends.

2. **Preserve String Content in Image Fallback Proxy** [#18002](https://github.com/ollama/ollama/pull/18002)  
   Fixing malformed fallbacks ensures smoother interaction with Claude Desktop tools/images.

3. **Cap MLX Wired/Cache Memory Usage** [#16728](https://github.com/ollama/ollama/pull/16728)  
   Prevents out-of-memory kills during inference on macOS systems.

4. **Reset Claude Desktop Models to Defaults** [#18000](https://github.com/ollama/ollama/pull/18000)  
   Improves consistency in app-level model selection UI.

5. **Add Cached Eval Metrics to Responses** [#16916](https://github.com/ollama/ollama/pull/16916)  
   Enables tracking of prompt cache hits across multiple API interfaces.

6. **Gracefully Shutdown MLX Runner to Prevent GPU Leaks** [#17798](https://github.com/ollama/ollama/pull/17798)  
   Addresses lingering GPU memory leaks after stopping models on macOS.

7. **Make External Patches Idempotent in CMake Builds** [#17948](https://github.com/ollama/ollama/pull/17948)  
   Ensures reliable rebuilds when external dependencies re-run patching steps.

8. **Avoid Metal Timeouts While Loading Large Models** [#17998](https://github.com/ollama/ollama/pull/17998)  
   Optimizes model loading performance by offloading folds from immediate GPU evaluation.

9. **Fix CLI Image Path Recognition for Escaped Characters** [#17999](https://github.com/ollama/ollama/pull/17999)  
   Resolves drag-and-drop failures due to shell-special characters in file paths.

10. **Add Atomic Agent Integration via Launch Command** [#17992](https://github.com/ollama/ollama/pull/17992)  
    Expands supported integrations with terminal-first AI agents.

---

## Feature Request Trends

Based on recent issues, developers are asking for:

- **Enhanced Hardware Acceleration**: Especially AMD Ryzen NPUs and broader ROCM support.
- **Better Developer Tooling**: Including IDE extensions (VS Code), structured debugging info, and CLI ergonomics.
- **Improved Cloud Model Management**: Control over which models stream locally vs remotely and clearer defaults.
- **More Transparent Model Lifecycle Control**: Particularly around partial downloads and lifecycle hooks.
- **Local Availability of Cutting-Edge Models**: E.g., DeepSeek v4, Nemotron variants, and custom quantized builds.

---

## Developer Pain Points

Recurring themes in developer complaints include:

- **Model Instability Across Platforms**: Garbage generation on AMD GPUs ([#17968]), silent CPU fallbacks ([#17841]), and crashes on Apple Silicon ([#17986]).
- **API Compatibility Gaps**: Streaming inconsistencies via `/v1/chat/completions` ([#17790]), dropped parameters ([#17730]), and broken JSON outputs from reasoning models ([#17987]).
- **Poor CLI Experience**: Inconsistent image import handling ([#17999]) and lack of clear state indicators for ongoing tasks.
- **Unreliable Cloud/Local Sync Behavior**: Unexpected switches between cloud and local modes causing confusion and degraded performance ([#17990]).

--- 

*Let us know if you'd like to dig deeper into any of these topics.*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

**llama.cpp Community Digest – 2026‑08‑26**  
*(All links point to the official ggml‑org/llama.cpp repository)*  

---

## 1. Today’s Highlights
- The **v0.3.0** release went live, bringing a new version‑bump, improved CI defaults and a prompt‑generator for release notes.  
- A flurry of performance‑related bugs surfaced across **CUDA, Vulkan, ROCm and SYCL** back‑ends, with the most active discussion centered on a **Vulkan‑throughput regression** and a **HIP output‑corruption issue**.  
- The PR pipeline is shifting toward **speculative pre‑fill**, **adaptive MTP draft depth**, and **enhanced multi‑NPU (Hexagon) support**, signalling a focus on inference speed and hardware diversity.

---

## 2. Releases
| Tag | Date (≈) | Notable changes |
|-----|----------|-----------------|
| **v0.3.0** | 2026‑08‑25 | • Bumped internal version number (see commit #27696). <br>• CI default description updated; release script now prompts for a concise summary. <br>• New binary assets for macOS Apple‑Silicon (arm64). |
| **b10630** | 2026‑08‑25 | • Integrated **KleidAI** build system overhaul (PR #26077). <br>• Added fp16 guard and fixed cmake cache issues. |
| **b10629** | 2026‑08‑25 | • CI now builds ROCm wheels on **Ubuntu 24.04**, matching AMD’s official support matrix. |

*Full changelog*: <https://github.com/ggml-org/llama.cpp/releases/tag/v0.3.0>

---

## 3. Hot Issues (most discussed / impactful)

| # | Title / Summary | Status | Comments / 👍 | Why it matters |
|---|----------------|--------|----------------|----------------|
| **24066** | *Vulkan performance drop* – large slowdown on RX 6600 (≈ 3×) | Open | 41 / 1 | Directly affects the most popular GPU backend for desktop users. |
| **27102** | *CUDA kernel stall → watchdog kill* on RTX Pro 6000 Blackwell | Open | 29 / 4 | Causes silent crashes in long‑running inference jobs. |
| **27579** | *HIP/ROCm corrupted output on gfx1151* (while Vulkan is correct) | Open | 9 / 0 | Highlights cross‑backend consistency problems; a blocker for AMD‑centric pipelines. |
| **27282** | *MTP unified‑KV OOM on CUDA* – separate compute arena exhausts memory | Open | 10 / 1 | Shows hidden memory‑budget bugs in the new Multi‑Token‑Prediction path. |
| **27572** | *Draft‑MTP acceptance collapses to 0.0* under `-np N` (race condition) | Open | 8 / 0 | Breaks parallel token generation, a key scalability feature. |
| **26220** | *Native MMA flash‑attention slower on RDNA 4* after rocWMMA removal | Open | 7 / 7 | Regression in prompt‑processing speed for high‑end AMD GPUs. |
| **25992** | *Integrated HIP GPU returns wrong responses under `--kv-unified`* | Open | 10 / 7 | Security‑relevant bug: cross‑request data leakage. |
| **26343** | *Windows Defender false‑positive virus detection* in binary b10195 | Open | 11 / 3 | Hinders distribution on Windows platforms. |
| **27685** | *Research: “FreeToken” faster than llama.cpp* | Open | 3 / 1 | Indicates potential algorithmic improvements that could reshape the roadmap. |
| **27720** | *GPT‑OSS Harmony channel header breaks PEG parser* (≈ 4 % error rate) | Open | 4 / 0 | Affects tool‑calling reliability for many LLama‑Chat users. |

*All links* → `https://github.com/ggml-org/llama.cpp/issues/<num>`

---

## 4. Key PR Progress

| # | PR | Description | Impact |
|---|----|-------------|--------|
| **27692** | *Speculative Prefill* (rockofox) | Implements pre‑fill based on “Speculative Prefill” (ICML 2025). Reduces first‑token latency dramatically for large prompts. | Early‑stage but already benchmarked 2‑3× faster pre‑fill on CUDA. |
| **27210** | *Adaptive MTP draft depth* (stew675) | New `--spec-type draft-mtp-adaptive` with automatic depth tuning. | Addresses stability complaints for MTP under heavy load. |
| **26419** | *MMA FlashAttention for head‑dim 256 on RDNA* (srgtuszy) | Restores WMMA usage that was lost after PR #26220, regaining prompt‑processing speed on AMD RDNA 4. | Directly fixes issue #26220. |
| **26466** | *HIP replace __shfl_xor_sync with DPP* (thelittlefireman) | Minor speed‑up for AMD‑HIP kernels on GFX 10xx/11xx. | Improves raw FLOP throughput; little‑impact but accumulates. |
| **26501** | *Hexagon multi‑NPU & async backend* (max‑krasnyansky) | Overhauls the Hexagon backend to support IQ9/IQ10 devices and full async execution. | Opens llama.cpp to edge‑AI devices beyond CPUs/GPUs. |
| **25819** | *Stuck‑loop escape for n‑gram‑mod* (yychyo) | Adds a safety‑net that aborts infinite loops when speculative n‑gram verification fails. | Reduces server hangs seen in issue #25819 (WIP). |
| **25294** | *Stream MoE routed experts from disk* (freedomljc) | Enables SSD‑backed streaming of Mixture‑of‑Experts weights, letting models exceed RAM. | Critical for 100B‑scale models on modest hardware. |
| **27311** | *Scheduler UMA ring‑buffer* (pwilkin) | Introduces a unified memory allocator for input tensors, fixing duplicated‑pin bugs. | Improves stability for high‑throughput server workloads. |
| **27402** | *AVX2 batch‑size speed‑up for IQ quant* (bartowski1182) | Optimizes large‑batch prompt processing for IQ‑8/4 quantized models. | Beneficial for benchmarking & batch inference services. |
| **27719** | */v1/models created timestamp* stable (theycallmeloki) | Captures model‑load time once, preventing per‑request timestamp changes that break client caching. | Small but valuable UX fix for OpenAI‑compatible API users. |

*All links* → `https://github.com/ggml-org/llama.cpp/pull/<num>`

---

## 5. Feature Request Trends
1. **Stable, Cross‑Backend Inference** – Repeated reports of divergent outputs (Vulkan vs. HIP, CUDA vs. ROCm) and crashes indicate a strong demand for “backend parity” guarantees.  
2. **Scalable Multi‑Token Prediction (MTP)** – Numerous bugs and performance regressions (issues #27282, #27572, #27685) show the community wants a robust, low‑overhead MTP implementation with adaptive depth control.  
3. **Server‑Side Reliability** – Requests for stable timestamps, stuck‑loop escape, and checkpoint handling (issues #27719, #25819, #25592) point to production‑grade API expectations.  
4. **Hardware‑Specific Optimizations** – Calls for better AMD ROCm/HIP performance, Hexagon NPU support, and SIMD‑heavy kernels (AVX2, i8mm, INT8 ConvRot) dominate the PR landscape.  
5. **Ease of Prompt Management** – Feature requests such as loading the system prompt from a file (issue #19852) and UI enhancements for audio‑model mic input (PR #27567) demonstrate a push toward richer tooling.

---

## 6. Developer Pain Points
| Pain point | Evidence (issues / PRs) |
|-----------|------------------------|
| **Performance regressions on newer GPUs** – Vulkan, ROCm, SYCL, and AMD RDNA regressions (issues #24066, #26220, #27579). | |
| **Memory‑related crashes (OOM / VRAM allocation failures)** – Metal null‑check fix (b10622), CUDA compute‑buffer size regression (issue #27680), HIP host‑pinned memory CPU usage (issue #27038). | |
| **Inconsistent output across backends** – HIP corruption (issue #27556), ROCm context loss (issue #27198), CUDA KV‑unified leakage (issue #25992). | |
| **MTP / speculative decoding instability** – Draft acceptance collapse (issue #27572), OOM in unified KV arena (issue #27282), long‑prompt breakage (issue #27296). | |
| **Build / CI friction** – ROCm container upgrade (PR #27145), i8mm CI extension (PR #16234), ccache on HF buckets (PR #27699). | |
| **Platform‑specific deployment barriers** – Windows Defender false positive (issue #26343), macOS Metal OOM guard (b10622), SYCL host‑pinned CPU high‑CPU usage (issue #27038). | |
| **User‑facing API quirks** – Unstable `/v1/models` timestamps (PR #27719), tool‑call argument ordering strictness (PR #26472), Harmony channel header parsing (issue #27720). | |

*Takeaway*: The community is gravitating toward **high‑throughput, multi‑backend stability** while demanding smoother CI/CI pipelines and better production‑ready server behavior. Prioritizing backend parity, robust MTP, and systematic memory management will likely resolve the bulk of reported friction.  

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*