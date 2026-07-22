# AI CLI Tools Community Digest 2026-07-22

> Generated: 2026-07-22 01:03 UTC | Tools covered: 12

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

### Today's Key Updates (2026-07-22)
1. **Claude Code** released v2.1.217, adding emoji shortcode autocomplete for prompts and improved warnings for transcript write failures and session saving issues. [GitHub release](https://github.com/anthropics/claude-code/releases/tag/v2.1.217)
2. **OpenAI Codex** released v0.145.0, adding experimental paginated thread history, expanded `/import` functionality to migrate settings from Cursor, Claude Code and other AI tools, and persisted session metadata for sub-agents and memories. [GitHub release](https://github.com/openai/codex/releases/tag/rust-v0.145.0)
3. **Pi** released v0.81.1, shipping deterministic checksummed source archives, a prompt cache key override for streaming LLM providers, and a refactor to improve external editor launch speed on crowded temporary workspaces. [GitHub release](https://github.com/earendil-works/pi/releases/tag/v0.81.1)
4. **Qwen Code** shipped its first stable v0.20.1 patch, fixing daemon telemetry metric initialization ordering, updating the `cua-driver-rs` vendor library to v0.7.3 with universal macOS signed binaries and pre-built Linux/Windows wheels, with no breaking changes. [GitHub releases](https://github.com/QwenLM/qwen-code/releases)
5. **OpenAI Codex** merged a fix for Linux zombie process accumulation by implementing process tree termination via Windows Job Objects, resolving a major runtime stability regression. [GitHub PR](https://github.com/openai/codex/pull/34624)
6. **DeepSeek TUI** merged a critical fix for BashTool's default working directory for sub-agents, ensuring commands run in the correct isolated worktree instead of the parent project checkout. [GitHub PR](https://github.com/Hmbown/CodeWhale/pull/4673)
7. **Ollama** merged a fix adding Laguna v8 chat support and resolving Metal inference overflow for quantized MoE models on Apple Silicon devices. [GitHub PR](https://github.com/ollama/ollama/pull/17291)
8. **llama.cpp** merged a new speculative decoding implementation for GLM-5.2 models, expanding multi-token prediction (MTP) support for newer model architectures. [GitHub PR](https://github.com/ggml-org/llama.cpp/pull/25980)

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# **Claude Code Skills Community Highlights Report**
*Analysis of activity from `anthropics/skills` as of 2026-07-22*

---

## **1. Top Skills Ranking**
The most-discussed Skills (PRs) reflect critical fixes and high-impact additions to the ecosystem. Below are the top 7 by community attention (comments, engagement, and urgency):

### **🔥 Critical Fixes Dominate Discussion**
1. **[#1298](https://github.com/anthropics/skills/pull/1298) `fix(skill-creator): run_eval.py always reports 0% recall`**
   - **Issue**: `run_eval.py` (and dependent scripts like `run_loop.py`) incorrectly reports `recall=0%` for all skills, breaking the description-optimization loop.
   - **Root Cause**: Missing eval artifact installation, Windows stream-reading bugs, and flawed trigger detection.
   - **Status**: **OPEN** (High priority; blocks core skill-creator functionality).
   - **Discussion**: Multiple reproductions (#556) confirm the issue; fixes proposed include artifact installation and Windows compatibility patches.

2. **[#1323](https://github.com/anthropics/skills/pull/1323) `fix(skill-creator): run_eval trigger detection misses real skill name`**
   - **Issue**: `run_eval.py` fails to detect when a skill triggers, causing the optimization loop to stagnate.
   - **Status**: **OPEN** (Linked to #1298; critical for skill validation).
   - **Discussion**: Proposes parsing improvements to correctly identify skill invocations.

3. **[#1099](https://github.com/anthropics/skills/pull/1099) & [#1050](https://github.com/anthropics/skills/pull/1050) `skill-creator: Windows compatibility fixes`**
   - **Issue**: `run_eval.py` crashes on Windows due to `PATHEXT` misconfiguration, encoding errors (`cp1252`), and pipe handling.
   - **Status**: **OPEN** (Blocker for Windows users).
   - **Discussion**: Minimal changes (1-line fixes) proposed; community emphasizes urgency for cross-platform support.

4. **[#556](https://github.com/anthropics/skills/issues/556) `run_eval.py: claude -p never triggers skills`**
   - **Issue**: All queries fail to trigger skills, rendering `run_eval` unusable.
   - **Status**: **OPEN** (Referenced in #1298, #1323).
   - **Discussion**: 12+ independent reports; linked to #514 (typography skill) and #486 (ODT skill) as potential test cases.

### **🚀 High-Impact New Skills**
5. **[#1367](https://github.com/anthropics/skills/pull/1367) `feat(skills): add self-audit — reasoning quality gate`**
   - **Functionality**: A meta-skill that audits AI output via **mechanical verification** (file checks) + **4-dimension reasoning** (damage severity prioritized).
   - **Status**: **OPEN** (v1.3.0; actively updated).
   - **Discussion**: Praised for universal applicability (any project/tech stack).

6. **[#514](https://github.com/anthropics/skills/pull/514) `Add document-typography skill`**
   - **Functionality**: Prevents typographic issues (orphan words, widows, numbering misalignment) in AI-generated documents.
   - **Status**: **OPEN** (Long-standing; 43+ comments in related issues).
   - **Discussion**: Users highlight its necessity for professional outputs.

7. **[#486](https://github.com/anthropics/skills/pull/486) `Add ODT skill`**
   - **Functionality**: Enables creation, filling, and conversion of OpenDocument Format (`.odt`, `.ods`) files.
   - **Status**: **OPEN** (Triggers include "ODF", "LibreOffice").
   - **Discussion**: Addresses gaps in document automation.

---

## **2. Community Demand Trends**
Issues reveal **three key unmet needs** in the Skills ecosystem:

### **🔹 Security & Trust**
- **[#492](https://github.com/anthropics/skills/issues/492) `Security: Community skills under anthropic/ namespace`**
  - **Demand**: Prevent impersonation of official skills (trust boundary abuse).
  - **Impact**: High (43 comments, 2 👍); urgent need for namespace isolation or verification.

### **🔹 Workflow Automation**
- **[#228](https://github.com/anthropics/skills/issues/228) `Enable org-wide skill sharing`**
  - **Demand**: Direct sharing within organizations (avoid manual `.skill` file transfers).
  - **Impact**: 14 comments, 7 👍; aligns with enterprise adoption.

- **[#189](https://github.com/anthropics/skills/issues/189) `Duplicate skills in plugins`**
  - **Demand**: Clarify `document-skills` vs. `example-skills` to avoid redundancy.
  - **Impact**: 6 comments, 9 👍; reflects plugin ecosystem fragmentation.

### **🔹 Cross-Platform Compatibility**
- **[#1061](https://github.com/anthropics/skills/issues/1061) `Windows compatibility: skill-creator scripts fail`**
  - **Demand**: Native Windows support (PATHEXT, encoding, pipes).
  - **Impact**: 3 comments, 2 👍; critical for broader adoption.

---

## **3. High-Potential Pending Skills**
These PRs are **actively developed** and likely to merge soon:

| **PR** | **Skill** | **Status** | **Why It’s Promising** |
|--------|-----------|------------|------------------------|
| **[#1367](https://github.com/anthropics/skills/pull/1367)** | Self-audit (quality gate) | OPEN | Meta-skill for output validation; universal utility. |
| **[#525](https://github.com/anthropics/skills/pull/525)** | Pyxel (retro game dev) | OPEN | First game-dev skill; taps into creative workflows. |
| **[#1302](https://github.com/anthropics/skills/pull/1302)** | Color-expert | OPEN | Addresses niche but high-value domain (design, branding). |
| **[#723](https://github.com/anthropics/skills/pull/723)** | Testing-patterns | OPEN | Fills gap in QA automation skills. |

---

## **4. Skills Ecosystem Insight**
**The community’s most concentrated demand is for *reliability and security***—fixing `run_eval.py`’s 0% recall bug (#1298, #1323) and addressing namespace impersonation (#492) are the top priorities. Until these are resolved, the skill-creator’s optimization loop remains broken, and trust in community-contributed skills is at risk.

**Key Takeaway**: *The ecosystem urgently needs stability (Windows compatibility, trigger detection) and governance (namespace security) to unlock broader adoption.*

---

# **Claude Code Community Digest – July 22, 2026**

---

## **Today's Highlights**
Claude Code released **v2.1.217**, introducing emoji shortcode autocomplete in prompts and improved warnings for transcript write failures. However, the community is actively reporting critical regressions, including GitHub connector access issues, Fable 5 model downgrades on Max plans, and persistent UI/UX bugs across platforms. Several pull requests focus on fixing plugin and hook system inconsistencies, signaling ongoing stabilization efforts.

---

## **Releases**
### **v2.1.217** ([Link](https://github.com/anthropics/claude-code/releases/tag/v2.1.217))
- **New**: Emoji shortcode autocomplete in prompts (e.g., `:heart:` → ❤️).
- **Improved**: Warnings for transcript write failures (e.g., disk full) and session saving issues.

---

## **Hot Issues**
### **Top Community Concerns**
1. **[#71542](https://github.com/anthropics/claude-code/issues/71542)** – **GitHub connector regression**: Users report Claude cannot access *any* repository (public/private) despite successful linking. *(41 comments, 36 👍)*
   - **Impact**: Blocks core workflows for teams relying on GitHub integrations.
   - **Reaction**: High frustration; users note this is a recent regression.

2. **[#79337](https://github.com/anthropics/claude-code/issues/79337)** – **Fable 5 downgrades on Max plan**: Users report silent downgrades to Opus 4.8 with "usage credits required" errors. *(26 comments, 9 👍)*
   - **Impact**: Breaks workflows for Max plan users relying on Fable 5.
   - **Reaction**: Confusion over entitlement handling; users expect Fable 5 to be included in Max.

3. **[#45810](https://github.com/anthropics/claude-code/issues/45810)** – **Plugin marketplace UI bug**: "Update" button is non-functional despite outdated versions. *(15 comments, 6 👍)*
   - **Impact**: Prevents users from updating plugins, leading to outdated tooling.

4. **[#61021](https://github.com/anthropics/claude-code/issues/61021)** – **VS Code terminal text selection broken**: Copy/paste no longer works when Claude Code is active. *(14 comments, 8 👍)*
   - **Impact**: Disrupts basic workflows for VS Code users.

5. **[#62476](https://github.com/anthropics/claude-code/issues/62476)** – **Transcript deletion**: Conversations silently deleted after 30 days by default. *(11 comments, 13 👍)*
   - **Impact**: Loss of critical session history for debugging and reference.

6. **[#79360](https://github.com/anthropics/claude-code/issues/79360)** – **Fable 5 gated behind usage credits for `setup-token` auth**: Users authenticated via long-lived tokens cannot access Fable 5. *(5 comments, 30 👍)*
   - **Impact**: Blocks Fable 5 usage for teams using token-based auth.

7. **[#79986](https://github.com/anthropics/claude-code/issues/79986)** – **Claude Desktop tools/call failures**: MCP server tools (e.g., filesystem) fail after update. *(0 comments)*
   - **Impact**: Breaks automation workflows for Desktop users.

8. **[#79982](https://github.com/anthropics/claude-code/issues/79982)** – **Task management tools missing**: `TaskCreate`, `TaskUpdate`, etc., are unavailable in all sessions. *(0 comments)*
   - **Impact**: Disables built-in task tracking for users.

9. **[#79980](https://github.com/anthropics/claude-code/issues/79980)** – **Excessive false positives in safety classifier**: Messages flagged as security risks during normal development. *(0 comments)*
   - **Impact**: Frustrates users with unnecessary interruptions.

10. **[#79979](https://github.com/anthropics/claude-code/issues/79979)** – **Model downgrades on session restart**: Users report unexpected downgrades (e.g., from Haiku to Opus). *(0 comments)*
   - **Impact**: Inconsistent performance and higher costs.

---

## **Key PR Progress**
### **Notable Pull Requests**
1. **[#79889](https://github.com/anthropics/claude-code/pull/79889)** – Fixes hook entrypoints failing without `CLAUDE_PLUGIN_ROOT`.
2. **[#79873](https://github.com/anthropics/claude-code/pull/79873)** – Fixes `event: prompt` rules never firing due to payload key mismatch.
3. **[#79647](https://github.com/anthropics/claude-code/pull/79647)** – Resolves plugin import issues independent of directory names.
4. **[#79645](https://github.com/anthropics/claude-code/pull/79645)** – Fixes encoding issues in rule/transcript files (UTF-8 compliance).
5. **[#79644](https://github.com/anthropics/claude-code/pull/79644)** – Quotes `${CLAUDE_PLUGIN_ROOT}` in plugin hooks to handle spaces in paths.
6. **[#79643](https://github.com/anthropics/claude-code/pull/79643)** – Aligns `/commit-push-pr` command description with actual behavior.
7. **[#79620](https://github.com/anthropics/claude-code/pull/79620)** – Adds text-to-speech hook for accessibility (multi-platform support).
8. **[#79636](https://github.com/anthropics/claude-code/pull/79636)** – Standardizes `hookify.` prefix in example rule filenames.
9. **[#79635](https://github.com/anthropics/claude-code/pull/79635)** – Updates PR review toolkit docs to point to in-repo agents.
10. **[#78532](https://github.com/anthropics/claude-code/pull/78532)** – Fixes Cloud SQL PG16+ deployment issues in GCP gateway example.

---

## **Feature Request Trends**
### **Most-Requested Directions**
1. **Plugin/Marketplace Improvements**:
   - Fix marketplace UI bugs (#45810).
   - Standardize plugin installation/auth flows (e.g., #79360).
2. **Model Access & Entitlements**:
   - Clarify Fable 5 availability on Max plans (#79337, #79360).
   - Prevent unexpected model downgrades (#79979).
3. **Accessibility**:
   - Screen reader support (#69996).
   - Text-to-speech hooks (#79620).
4. **Task Management**:
   - Restore built-in task tools (#79982).
5. **Safety & False Positives**:
   - Reduce excessive classifier warnings (#79980).

---

## **Developer Pain Points**
### **Recurring Frustrations**
- **Plugin System Instability**: Hooks, rules, and imports frequently fail due to path/encoding issues (#79889, #79873, #79647).
- **Model Entitlement Confusion**: Users struggle with Fable 5 access on Max plans (#79337, #79360).
- **UI/UX Regressions**: Broken text selection (#61021), non-functional marketplace buttons (#45810).
- **Transcript Management**: Silent deletion of sessions (#62476).
- **MCP Server Failures**: Tools failing in Desktop after updates (#79986).
- **Case-Sensitive Commands**: Built-in slash commands (e.g., `/goal`) require exact casing (#79981).

---
**Next Steps**: The community is prioritizing fixes for plugin system stability, model entitlements, and UI regressions. Contributors are encouraged to test the latest PRs addressing these issues.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# **OpenAI Codex Community Digest – July 22, 2026**

## **Today’s Highlights**
OpenAI Codex has rolled out **v0.145.0**, introducing experimental paginated thread history, improved session management, and expanded `/import` functionality for migrating settings from other AI tools. Meanwhile, the community is rallying around critical stability fixes, particularly for **Windows performance issues** and **subagent-related regressions**, while pushing for better rate-limit transparency and IDE integration improvements.

---

## **Releases**
### **[rust-v0.145.0](https://github.com/openai/codex/releases/tag/rust-v0.145.0)**
- **Experimental paginated thread history**: Efficient resume, search, and persisted session metadata (e.g., names, sub-agents, memories).
- **Enhanced `/import`**: Migrate settings from **Cursor**, **Claude Code**, MCP servers, plugins, and sessions.
- **Alpha builds**: v0.145.0-alpha.27–29 released for early testing.

---

## **Hot Issues** *(Top 10 by community engagement)*

1. **[#20214](https://github.com/openai/codex/issues/20214) – Windows 11 Freezes/Stutters**
   - **Issue**: Codex App frequently freezes despite ample system resources (63 comments, 70 👍).
   - **Impact**: Severe productivity disruption for Windows users.
   - **Workaround**: None confirmed; likely tied to UI/rendering bottlenecks.

2. **[#9508](https://github.com/openai/codex/issues/9508) – Non-Deterministic Weekly Limits**
   - **Issue**: Weekly rate-limit resets are unpredictable (46 comments, 31 👍).
   - **Impact**: Frustrates long-term planning for Pro/Plus users.
   - **Request**: Make reset times deterministic (e.g., fixed UTC time).

3. **[#28058](https://github.com/openai/codex/issues/28058) – Subagent Encryption Breaks Audit Trails**
   - **Issue**: Encrypted MultiAgentV2 messages obscure task history (26 comments, 99 👍).
   - **Impact**: Debugging multi-agent workflows becomes nearly impossible.
   - **Status**: Regression introduced in v0.137.0+.

4. **[#32149](https://github.com/openai/codex/issues/32149) – Windows Setup Fails Pre-UAC**
   - **Issue**: Installer crashes before prompting for admin rights (24 comments, 5 👍).
   - **Impact**: Blocks new Windows installations entirely.

5. **[#25921](https://github.com/openai/codex/issues/25921) – Crashpad Dumps Flood Disk**
   - **Issue**: Unbounded `.dmp` files consume 5GB+ daily (15 comments, 5 👍).
   - **Impact**: Storage exhaustion and performance degradation.

6. **[#26951](https://github.com/openai/codex/issues/26951) – VS Code Remote-SSH Extension Stuck**
   - **Issue**: Extension fails to load over SSH while CLI works (16 comments, 1 👍).
   - **Impact**: Remote development workflows are broken.

7. **[#28078](https://github.com/openai/codex/issues/28078) – Xcode Sign-In Fails for Pro Accounts**
   - **Issue**: OTP-based login fails for ChatGPT Pro but works for Go accounts (12 comments, 11 👍).
   - **Impact**: Blocks Xcode integration for high-tier users.

8. **[#34061](https://github.com/openai/codex/issues/34061) – Subagents Bloat Disk Usage**
   - **Issue**: Subagent sessions generate excessive disk I/O (6 comments, 1 👍).
   - **Impact**: Slowdowns on macOS with large projects.

9. **[#34327](https://github.com/openai/codex/issues/34327) – Windows UI Freezes Linked to HID Module**
   - **Issue**: Severe hangs correlate with a specific Windows module (4 comments, 3 👍).
   - **Impact**: Makes the app unusable on affected systems.

10. **[#18629](https://github.com/openai/codex/issues/18629) – Base64 Images Poison Threads**
    - **Issue**: Inline `data:image/...;base64` payloads destabilize sessions (11 comments, 1 👍).
    - **Impact**: Threads become un-resumable after tool calls with images.

---

## **Key PR Progress** *(Top 10 by relevance)*

1. **[#34643](https://github.com/openai/codex/pull/34643) – Migrate Login to `HttpClient`**
   - Centralizes HTTP client logic for auth, improving reliability and security.

2. **[#34641](https://github.com/openai/codex/pull/34641) – Harden Sandbox Proxy Setup**
   - Fixes connectivity issues in restricted environments (e.g., Docker, WSL).

3. **[#34636](https://github.com/openai/codex/pull/34636) – Keep TUI Open on Turn Failures**
   - Prevents CLI crashes when API calls fail mid-session.

4. **[#34631](https://github.com/openai/codex/pull/34631) – Migrate Agent Identity to Shared HTTP Client**
   - Reduces redundant auth requests and improves session stability.

5. **[#34629](https://github.com/openai/codex/pull/34629) – Harden Windows Elevated Sandbox**
   - Fixes startup failures in admin-mode sandboxes.

6. **[#34624](https://github.com/openai/codex/pull/34624) – Terminate Process Trees with Job Objects**
   - Ensures clean shutdowns of child processes on Windows.

7. **[#34620](https://github.com/openai/codex/pull/34620) – Add Network Policy Callbacks**
   - Enables fine-grained control over sandboxed network access.

8. **[#34612](https://github.com/openai/codex/pull/34612) – Detach Non-Interactive Subprocesses**
   - Prevents CLI hangs during diagnostic commands (e.g., `codex doctor`).

9. **[#34611](https://github.com/openai/codex/pull/34611) – Compatibility Policies for Skills**
   - Standardizes skill catalog rendering across extensions.

10. **[#34605](https://github.com/openai/codex/pull/34605) – Name Sessions with `/new` and `/clear`**
    - Adds session naming to improve workflow organization.

---

## **Feature Request Trends**
1. **Rate-Limit Transparency**
   - Users demand **deterministic weekly resets** (#9508, #16423) and clearer usage tracking.
2. **IDE/Editor Integration**
   - Requests for **custom editor support** in "Open In" menus (#10428), **Emacs integration** (#21573), and **VS Code Remote-SSH fixes** (#26951, #27597).
3. **Session Management**
   - **Background terminal sessions** (#3968), **window restore on restart** (#27104), and **pinned task visibility** (#33579).
4. **Performance & Stability**
   - **Windows freezes** (#20214, #34327), **disk bloat from subagents** (#34061), and **Crashpad cleanup** (#25921).
5. **Security & Sandboxing**
   - **Sandbox network policies** (#34620), **Windows elevated mode hardening** (#34629).

---

## **Developer Pain Points**
- **Windows Ecosystem**: The most severe issues (freezes, installer failures, UI hangs) disproportionately affect Windows users, suggesting deeper platform-specific regressions.
- **Subagent Workflows**: Encryption and disk usage problems (#28058, #34061) highlight scalability challenges in multi-agent systems.
- **Rate Limits**: Arbitrary reset timings (#9508) and lack of granular controls frustrate power users.
- **IDE Extensions**: Remote development (SSH, containers) and Xcode sign-in issues (#26951, #28078) indicate fragile cross-platform auth flows.
- **Debugging**: Base64 image poisoning (#18629) and unindexed rollout files (#31433) make troubleshooting sessions nearly impossible.

---
**Next Steps**: The team is actively addressing Windows stability and subagent issues, with multiple PRs merged in the last 24 hours. Community feedback suggests prioritizing **rate-limit clarity** and **IDE integration** in upcoming releases.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# **Gemini CLI Community Digest – July 22, 2026**

---

## **Today's Highlights**
Gemini CLI continues to evolve with a strong focus on **offline/local model support**, **agent reliability**, and **security hardening**. The community is actively discussing **subagent behavior**, **memory system improvements**, and **AST-aware tooling** to enhance code navigation. Meanwhile, the team is rolling out infrastructure changes for **automated issue triage** and **SSR pipeline enhancements**.

---

## **Releases**
📦 **[v0.52.0-nightly.20260721.gacae7124b](https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0-nightly.20260721.gacae7124b)**
- Latest nightly build with incremental improvements (see [full changelog](https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.20260720.gacae7124b...v0.52.0-nightly.20260721.gacae7124b)).

---

## **Hot Issues** *(Top Community Discussions)*

### **1. [#5938](https://github.com/google-gemini/gemini-cli/issues/5938) – Local/Offline LLM Support**
**Why it matters:** Enterprise users need **on-premises AI** for data privacy. This feature request for **Ollama/LM Studio integration** has **37 👍** and is a top priority.
**Status:** Open, awaiting maintainer review.

### **2. [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) – Subagent Recovery Bug**
**Why it matters:** A critical bug where `codebase_investigator` reports **false success** after hitting `MAX_TURNS`, masking interruptions.
**Status:** **P1**, needs retesting.

### **3. [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) – Generalist Agent Hangs**
**Why it matters:** The **generalist agent** frequently hangs indefinitely, even on simple tasks like folder creation.
**Status:** **P1**, community reports workaround by disabling subagents.

### **4. [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) – Robust Component-Level Evaluations**
**Why it matters:** Follow-up to behavioral evals (76 tests so far). Focuses on **scalable, maintainable evaluation frameworks**.
**Status:** **P1**, maintainer-led.

### **5. [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) – AST-Aware File Tools**
**Why it matters:** Could **reduce token waste** and improve **code navigation precision** by leveraging **Abstract Syntax Trees (AST)**.
**Status:** **P2**, under investigation.

### **6. [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) – Subagents Underutilized**
**Why it matters:** Users report the model **rarely uses custom skills/subagents** unless explicitly instructed.
**Status:** **P2**, anecdotal but widely observed.

### **7. [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) – Auto Memory Retry Loop**
**Why it matters:** **Low-signal sessions** cause infinite retries, cluttering memory logs.
**Status:** **P2**, maintainer-tracked.

### **8. [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) – Shell Command Hangs**
**Why it matters:** Simple shell commands (e.g., `ls`) sometimes **hang with "Waiting input"** despite completion.
**Status:** **P1**, frustrating for users.

### **9. [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) – Browser Agent Resilience**
**Why it matters:** `BrowserManager` fails too aggressively on **locked profiles**, causing workflow disruptions.
**Status:** **P3**, needs design refinement.

### **10. [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) – Browser Subagent Fails in Wayland**
**Why it matters:** Linux users on **Wayland** face **browser agent failures**, limiting CLI usability.
**Status:** **P1**, environment-specific bug.

---

## **Key PR Progress** *(Notable Merges & WIPs)*

### **🚀 Feature PRs**
1. **[#28433](https://github.com/google-gemini/gemini-cli/pull/28433)** – **SSR Pipeline Orchestration**
   - Implements **iterative bug-fixing state machine** and **container worker entrypoint** for automated code generation.

2. **[#28411](https://github.com/google-gemini/gemini-cli/pull/28411)** – **Caretaker Triage Improvements**
   - Posts **explanatory comments** before auto-closing issues to improve user clarity.

3. **[#28474](https://github.com/google-gemini/gemini-cli/pull/28474)** – **Telemetry Enhancements**
   - Adds **`skill_name` dimension** to tool call telemetry for better debugging.

4. **[#28305](https://github.com/google-gemini/gemini-cli/pull/28305)** – **Eval Failure Diagnostics**
   - Introduces **tool-call timeline formatting** and **failure summaries** for behavioral tests.

5. **[#28169](https://github.com/google-gemini/gemini-cli/pull/28169)** – **Eval Coverage Reporting**
   - New `eval:coverage` command to **track tool usage in evals**.

### **🔧 Bug Fixes & Security**
6. **[#28472](https://github.com/google-gemini/gemini-cli/pull/28472)** – **Authentication Fallback Regression**
   - Fixes **credential handling** in **Gemini Code Assist (GCA) Agent Mode**.

7. **[#28469](https://github.com/google-gemini/gemini-cli/pull/28469)** – **Session ID Rotation**
   - Prevents **stateful API errors** during model fallbacks.

8. **[#28403](https://github.com/google-gemini/gemini-cli/pull/28403)** – **Security Hardening**
   - Blocks **variable expansion bypass** (GHSA-wpqr-6v78-jr5g) in shell commands.

9. **[#28397](https://github.com/google-gemini/gemini-cli/pull/28397)** – **Performance Fix**
   - Replaces **synchronous I/O** in `shell.ts` to **eliminate terminal stuttering**.

10. **[#28389](https://github.com/google-gemini/gemini-cli/pull/28389)** – **Agent Time Budget**
   - Adds **real-world deadlines** to prevent **infinite-loop state transitions**.

---

## **Feature Request Trends**
🔹 **Local/Offline Model Support** (#5938) – High demand for **Ollama/LM Studio integration**.
🔹 **AST-Aware Tooling** (#22745, #22746) – Interest in **precise code navigation** via AST.
🔹 **Subagent Reliability** (#22323, #21409, #21968) – Multiple reports of **hangs and underutilization**.
🔹 **Memory System Improvements** (#26522, #26523, #26525) – Focus on **deterministic redaction** and **patch validation**.
🔹 **Browser Agent Resilience** (#22232, #21983) – **Wayland support** and **profile lock recovery**.

---

## **Developer Pain Points**
⚠ **Agent Hangs** – The **generalist agent** and **subagents** frequently hang, disrupting workflows.
⚠ **Shell Command Issues** – Simple commands sometimes **hang with "Waiting input"**.
⚠ **Memory System Quirks** – **Auto Memory** retries low-signal sessions indefinitely and lacks **deterministic redaction**.
⚠ **Browser Agent Limitations** – **Wayland support** is broken, and **profile locks** cause failures.
⚠ **Subagent Underutilization** – The model **rarely uses custom skills** unless explicitly told to.

---
**📌 Next Steps:**
- **Local LLM support** (#5938) is the most upvoted feature request.
- **Agent reliability** (hangs, subagent behavior) remains a top priority.
- **Security fixes** (variable expansion, session management) are actively being merged.

**🔗 Stay Updated:**
- [GitHub Issues](https://github.com/google-gemini/gemini-cli/issues)
- [Nightly Releases](https://github.com/google-gemini/gemini-cli/releases)

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



# GitHub Copilot CLI Community Digest | 2026-07-22

### 1. Today's Highlights
The Copilot CLI team released v1.0.74-0, introducing granular model selection directly within plan mode via `/model plan`. Community attention is heavily focused on stabilizing recent regressions affecting plan-mode shell execution, custom instruction loading, and terminal rendering under tmux/screen. Backend stability concerns, particularly zombie process accumulation on Linux and OOM crashes in large monorepos, remain top priorities for maintainers.

### 2. Releases
**v1.0.74-0** ([View Release](https://github.com/github/copilot-cli/releases))
- **Added:** `/model plan` (alias: `/model --plan`) allows dynamic selection, clearing (`off`), or picker-based model switching exclusively for plan mode sessions. Reverts to the base session model upon exit.
- **Improved:** Search resilience enhanced to match session titles accurately regardless of leading or trailing whitespace variations.

### 3. Hot Issues
1. **#1305** [Support CIMD for Remote OAuth MCP Servers] ([Link](https://github.com/github/copilot-cli/issues/1305)) - *26 👍, 4 comments*: Vital for enterprise security; enables DCR-based just-in-time client registration for remote OAuth-protected MCP servers.
2. **#4012** [Bug with BYOK: reasoning effort not supported] ([Link](https://github.com/github/copilot-cli/issues/4012)) - *16 👍, 2 comments*: Third-party BYOK providers passing valid `reasoning-effort` flags trigger false validation errors, blocking advanced model tuning.
3. **#2193** [Default model configuration for /fleet subagents] ([Link](https://github.com/github/copilot-cli/issues/2193)) - *14 👍, 3 comments*: Eliminates redundant context in fleet operations by supporting global/project-level default model assignments.
4. **#1518** [Support MCP resources and prompts] ([Link](https://github.com/github/copilot-cli/issues/1518)) - *14 👍, 2 comments*: Fulfills a foundational MCP spec gap; current tool-only support restricts autonomous agents relying on static assets and prompt templating.
5. **#4188** [Regression on plan-mode] ([Link](https://github.com/github/copilot-cli/issues/4188]) - *2 👍, 3 comments*: Plan mode now incorrectly blocks shell commands (e.g., `gh` CLI), breaking established plan-enrichment workflows.
6. **#4163** [CLI 1.0.71 does not reap child processes — zombies accumulate] ([Link](https://github.com/github/copopil/cli/issues/4163]) - *0 👍, 2 comments*: Major Linux stability issue; leaked zombie processes (~2/min/session) indicate a missing process reaping mechanism in the runtime.
7. **#2595** [Background agent completion retention] ([Link](https://github.com/github/copilot-cli/issues/2595]) - *0 👍, 2 comments*: Completed background agents are purged too quickly, breaking `read_agent` lookups and audit capabilities.
8. **#2181** [Regression: COPILOT_CUSTOM_INSTRUCTIONS_DIR not loading all instructions] ([Link](https://github.com/github/copilot-cli/issues/2181]) - *1 👍, 2 comments*: Multi-directory instruction scanning broke between v1.0.8 and v1.0.9, impacting team-wide configuration setups.
9. **#4206** [Environment footer stuck on "Loading:" forever] ([Link](https://github.com/github/copilot-cli/issues/4206]) - *1 👍, 1 comment*: UX regression in 1.0.73 where strict org policies stall the MCP handshake, freezing the status indicator despite successful backend resolution.
10. **#3976** [native `tgrep` indexer OOM-kills the host on large monorepos] ([Link](https://github.com/github/copilot-cli/issues/3976]) - *0 👍, 

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest – 2026‑07‑22**

---

### 1. Today’s Highlights  
- The latest activity centers on a **UI‑jitter bug** (#2474) where the terminal constantly re‑renders the whole conversation, and a **keyboard‑event gap** (#2529) that leaves numeric keys unresponsive.  
- Two PRs landed that target **shell‑blocking** (PR #2530) and **StrReplaceFile replacement counting** (PR #2524), aiming to eliminate dead‑locks and improve edit‑tracking accuracy.  
- A **critical tool‑calling failure** in k2.5 models (Issue #2527) continues to surface, causing infinite goal‑mode loops when attempting Bash‑style tool invocations.

---

### 2. Releases  
- **No new official releases** in the past 24 hours.

---

### 3. Hot Issues (selected 4 of 4 recent)

| Issue | Why it matters | Community reaction |
|-------|----------------|--------------------|
| **#2474 – UI shaking & full re‑render** | Causes flickering terminals, breaking the illusion of a smooth CLI assistant. | 👍 2 up‑votes; users report the bug appears across Linux and Windows, demanding a stable render pipeline. <br>**[Link](https://github.com/MoonshotAI/kimi-cli/issues/2474)** |
| **#2529 – Numeric keys on the right side do not trigger input** | Breaks basic editing workflow; users cannot type numbers without the cursor moving to the end. | No up‑votes yet, but the issue is flagged as a *show‑stopper* for power users on Windows. <br>**[Link](https://github.com/MoonshotAI/kimi-cli/issues/2529)** |
| **#2528 – Shell‑mode output truncation** | Commands that emit long logs are cut off, leaving users unaware of command results. | 👍 0; many request a configurable output buffer or paging mode. <br>**[Link](https://github.com/MoonshotAI/kimi-cli/issues/2528)** |
| **#2527 – k2.5 tool‑calling completely broken + infinite goal loops** | Prevents any `functions_Bash*` calls from executing, leading to endless loops that must be killed manually. | 👍 0 but high impact; several community members posted work‑arounds and begged for a fix. <br>**[Link](https://github.com/MoonshotAI/kimi-cli/issues/2527)** |

*Only four issues have activity in the last 24 h; they collectively highlight UI stability, input handling, output handling, and core tool‑calling correctness.*

---

### 4. Key PR Progress (selected 2 of 2 recent)

| PR | Summary | Link |
|----|----------|------|
| **#2530 – fix(shell): stop blocking until timeout when a detached child holds the pipes** | Resolves dead‑locks where `_run_shell_command` waits for stdout/stderr EOF before checking exit codes, preventing hangs when background processes keep file descriptors open. | **[PR #2530](https://github.com/MoonshotAI/kimi-cli/pull/2530)** |
| **#2524 – fix(tools): count StrReplaceFile replacements against the running content** | Adjusts replacement‑count logic to use the *current* file contents rather than the original snapshot, fixing under‑reporting of edits in chained replacements. | **[PR #2524](https://github.com/MoonshotAI/kimi-cli/pull/2524)** |

Both PRs are targeted at stabilising the shell interaction layer and improving edit‑tracking accuracy, respectively.

---

### 5. Feature Request Trends  

- **Robust tool‑calling support** – multiple issues request reliable `functions_*` invocation across all model versions, especially for Bash‑style utilities.  
- **Non‑blocking, responsive UI** – users repeatedly ask for smoother rendering (no flicker) and immediate input responsiveness, including proper key‑event handling for numeric keys.  
- **Configurable output handling** – demand for paging or buffering in shell mode to avoid truncated logs.  
- **Accurate edit‑tracking** – requests to surface true replacement counts after chained edits, improving auditability of file modifications.

These trends emerge from the current bug reports and PR discussions, pointing to a community focused on **stability, predictability, and a frictionless developer experience**.

---

### 6. Developer Pain Points  

- **UI jitter & full re‑render loops** cause distraction and loss of context, especially during long conversations.  
- **Missing key‑event listeners** for numeric keypad entries break basic editing, a regression from earlier CLI versions.  
- **Infinite goal‑mode loops** when tool‑calling fails force users to terminate the process manually, eroding trust in autonomous planning.  
- **Dead‑locks in foreground shell execution** when background daemons retain pipe handles, leading to unresponsive terminals.  
- **Incorrect replacement counting** makes it hard to gauge the impact of automated file edits, complicating debugging of generated patches.

Addressing these pain points will be pivotal for retaining power‑users and expanding Kimi Code CLI’s adoption in enterprise workflows.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode Community Digest – 2026‑07‑22**

---

### 1. Today's Highlights
- The memory‑issue megathread (#20695) continues to dominate discussion with 118 comments, as the team collects heap snapshots to diagnose widespread leaks.  
- Layout‑related requests are heating up: users are asking for a toggle to keep the legacy UI (#37012) and lamenting the loss of workspaces in the new web layout (#37546).  
- Authentication and provider reliability remain pain points, with multiple reports of “Request blocked by upstream provider” errors affecting OpenCode Go subscriptions (#38195, #37790).

### 2. Releases
*No new releases were published in the last 24 h.*

### 3. Hot Issues  
| # | Issue | Comments / 👍 | Why it matters |
|---|-------|---------------|----------------|
| [#20695](https://github.com/anomalyco/opencode/issues/20695) | Memory Megathread – collect heap snapshots | 118 / 90 | Central hub for diagnosing memory leaks; high engagement shows it’s a blocker for many users. |
| [#37012](https://github.com/anomalyco/opencode/issues/37012) | [FEATURE] keep legacy layout option | 26 / 27 | Users value quick access and workspaces in the old UI; strong demand for a opt‑out of the new “tabs‑on‑top” layout. |
| [#12393](https://github.com/anomalyco/opencode/issues/12393) | How to unarchive in opencode‑desktop | 17 / 31 | Simple UX gap – archived sessions are hard to recover; indicates a need for better session management UI. |
| [#31119](https://github.com/anomalyco/opencode/issues/31119) | [BUG] Error: no such column: name | 14 / 15 | Database/schema mismatch after update blocks usage; regression affecting returning users. |
| [#19130](https://github.com/anomalyco/opencode/issues/19130) | Windows ARM64 native: OpenTUI fails to initialize | 12 / 8 | Platform‑specific breakage on ARM64 limits adoption on emerging hardware. |
| [#20045](https://github.com/anomalyco/opencode/issues/20045) | edit permission uses relative paths but external_directory uses absolute paths | 11 / 2 | Inconsistent path handling breaks agent‑level permission rules – a core configuration pain point. |
| [#4925](https://github.com/anomalyco/opencode/issues/4925) | [FEATURE] Display total cost for session | 10 / 9 | Cost transparency is missing for multi‑agent runs; users want aggregated token usage. |
| [#37790](https://github.com/anomalyco/opencode/issues/37790) | OpenCode Go subscription paid but workspace shows “Insufficient balance” | 10 / 0 | Payment‑to‑credit sync failure prevents use of paid Go plans – a billing‑experience issue. |
| [#38195](https://github.com/anomalyco/opencode/issues/38195) | 401 AuthError: Request blocked by upstream provider | 1 / 3 | Auth failures affect all Go models while free models work; points to upstream token/provider mis‑configuration. |
| [#33028](https://github.com/anomalyco/opencode/issues/33028) | Subagents hang indefinitely after quick bash tool call | 7 / 3 | Stream never times out, requiring manual Esc or kill; destabilizes agent workflows. |

### 4. Key PR Progress  
| # | PR | Summary |
|---|----|---------|
| [#38200](https://github.com/anomalyco/opencode/pull/38200) | feat: add support for Solidity file type and highlighting | Adds syntax highlighting for Solidity, improving developer experience for smart‑contract work. |
| [#38172](https://github.com/anomalyco/opencode/pull/38172) | feat(codemode): support generator functions | Implements sync/async generator support (`yield`, `yield*`, `next`, etc.) with proper lazy execution and promise adoption. |
| [#38184](https://github.com/anomalyco/opencode/pull/38184) | fix(core): discover Copilot API endpoint | Persists the account‑specific GitHub Copilot OAuth endpoint after V2 device flow, avoiding repeated discovery calls. |
| [#38162](https://github.com/anomalyco/opencode/pull/38162) | [contributor] fix(core): reduce snapshot repository setup | Replaces eight `git config` subprocesses with one atomic rewrite, speeding up snapshot initialization. |
| [#37833](https://github.com/anomalyco/opencode/pull/37833) | fix(provider): add NVIDIA NIM DeepSeek request compatibility | Resolves hangs when using DeepSeek V4 models on NVIDIA NIM by fixing request handling. |
| [#33248](https://github.com/anomalyco/opencode/pull/33248) | feat(tui): add auto_scroll config to disable session viewport follow | Introduces `auto_scroll` flag in `tui.json`; setting to `false` lets users keep a fixed viewport. |
| [#33208](https://github.com/anomalyco/opencode/pull/33208) | feat(app): add delete button for sessions in sidebar | Adds a trash‑icon button next to the archive button for quick session removal. |
| [#33203](https://github.com/anomalyco/opencode/pull/33203) | feat(app): persist web sidebar project state | Pers Web sidebar state on the server so refreshed browsers restore opened projects. |
| [#33218](https://github.com/anomalyco/opencode/pull/33218) | docs(web): add Friendli provider documentation | Adds setup guide for the Friendli provider to the official docs, expanding model‑hosting options. |
| [#33202](https://github.com/anomalyco/opencode/pull/33202) | fix(agent): skip parseModel when model is “inherit”, trim whitespace | Prevents unnecessary parsing for subagents that inherit the parent model and cleans up stray whitespace. |

### 5. Feature Request Trends  
- **UI/UX flexibility** – persistent calls for a legacy layout toggle (#37012) and the ability to revert or opt‑out of the new tab‑based web UI (#37546, #38124).  
- **Session management** – auto‑naming sessions from first message (#38163), better archive/unarchive flow (#12393), and delete button in sidebar (#33208).  
- **Cost & usage visibility** – request to show total token cost across all agents (#4925) and MCP sampling support for metered createMessage calls (#11948).  
- **Extensible integrations** – demand for first‑class managed connectors with OAuth (Google Calendar, Gmail, Slack, Notion, Sheets) (#38095).  
- **Platform & provider stability** – fixes for Windows ARM64 TUI init (#19130), NVIDIA NIM DeepSeek compatibility (#37833), and reliable Copilot model discovery (#38184).  

### 6. Developer Pain Points  
- **Memory leaks & profiling** – the megathread (#20695) signals unresolved heap growth that forces users to manually capture snapshots.  
- **Path handling inconsistencies** – edit vs. external_directory path semantics break agent permissions (#20045) and cause confusion in workspace configuration.  
- **Agent reliability** – subagents hanging after bash calls (#33028), duplicate assistant messages (#20699), and schema errors when providers return JSON‑encoded arrays (#34652).  
- **Authentication & billing** – frequent “Request blocked by upstream provider” errors affecting both free and paid models (#38195, #37790, #37056).  
- **Performance quirks** – 100% CPU usage in idle web terminals (#13899) and TUI freezes when large binary files are present (#38201).  
- **Feature discoverability** – missing UI to switch layouts, missing workspace support in new web layout, and hidden settings (e.g., auto‑accept permissions) leading to user frustration.  

*All links point to the respective GitHub items in the anomalyco/opencode repository.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

**Pi Community Digest – 2026‑07‑22**  

---

### 1. Today’s Highlights
- **v0.81.1** is now live with deterministic source archives, checksummed release assets and a new “local llama.cpp model manager” that lets you search, download and unload Hugging‑Face models on‑the‑fly.  
- The update also ships a **prompt‑cache‑key override** for streaming providers and a small refactor that moves external‑editor handling into a shared implementation, improving launch speed on crowded `os.tmpdir()` workspaces.  
- Community activity has surged around session‑picker enhancements (Ctrl+A archive shortcut) and native OpenRouter OAuth support, both of which are now in review.

---

### 2. Releases
| Version | Summary of changes | Link |
|---------|-------------------|------|
| **v0.81.1** | Deterministic source archives with checksums; instructions for rebuilding standalone binaries; adds `promptCacheKey` stream option to override cache keys. | <https://github.com/earendil-works/pi/releases/tag/v0.81.1> |
| **v0.81.0** | Introduces local llama.cpp model management (search/download/Hugging‑Face models); expands LLM‑provider support; adds native OpenRouter OAuth flow. | <https://github.com/earendil-works/pi/releases/tag/v0.81.0> |

*No other version bumps were reported in the last 24 h.*

---

### 3. Hot Issues  *(top‑10 by comment count)*  

| # | Title (status) | Why it matters | Community reaction |
|---|----------------|---------------|--------------------|
| **#3357** (closed) | *Official local LLM provider extension* – request to fetch model list dynamically from `{baseUrl}/models`. | Enables plug‑and‑play adapters for llama.cpp, ollama, LM Studio, etc., reducing manual config. | 30 comments, 43 👍 – strong endorsement; many users asked for similar dynamic‑discovery features. |
| **#6278** (closed) | *Bug: New Claude models fail 20 % edits due to extra keys (`validation failed for tool "edit": must not have additional properties`)*. | Breaks reliability of the edit tool for newer Anthropic models. | 23 comments, 9 👍 – frequent complaints; users demanded stricter validation of the `edit[]` payload. |
| **#5653** (open) | *Move off Shrinkwrap* – problem with duplicate `pi-ai` copies when installing both `pi-ai` and `pi-coding-agent`. | Leads to duplicated module resolutions and runtime conflicts. | 19 comments, 0 👍 – developers called for a lock‑file rewrite or hoisting fix. |
| **#6915** (closed) | *Pi crashes with uncaught exception after 0.81.0 update* (`streamFunction is not a function`). | Causes abrupt terminations during session resume, losing work. | 14 comments, 2 👍 – users posted stack traces; developers pledged a hot‑fix. |
| **#6747** (open) | *API for enhancing agent message markdown* – need to mutate representation without altering LLM payload. | Required for client‑side markdown renderers (e.g., formula renderers). | 7 comments, 2 👍 – interest in a “render‑hook” hook; proposals for a lightweight extension API. |
| **#6774** (open) | *Ctrl+G external editor slowdown when `os.tmpdir()` is crowded*. | Degrades UX for developers who rely on external editors. | 7 comments, 0 👍 – suggestion to use a private `mkdtemp` directory. |
| **#5593** (open) | *Tab‑completing a slash command inserts trailing space, breaking argument autocomplete*. | Breaks the built‑in completion flow for slash commands. | 4 comments, 0 👍 – simple UI fix requested. |
| **#6163** (closed) | *Map Bedrock apiKey auth to bearer‑token env variable*. | Improves security posture for AWS Bedrock users. | 4 comments, 0 👍 – merged in PR #6161; community praised the env‑var approach. |
| **#6552** (open) | *Allow extensions to request a deferred canonical reload*. | Needed for safe hot‑reloading of large extensions without disrupting sessions. | 4 comments, 0 👍 – positive feedback on the design sketch. |
| **#6817** (open) | *find returns no results for Windows path patterns like `src/**/*.ts`*. | Breaks cross‑platform file discovery. | 2 comments, 0 👍 – Windows users highlighted the issue; a fix is pending. |

---

### 4. Key PR Progress  *(top‑10 by comment/interest)*  

| PR | Title | Core contribution | Link |
|----|-------|-------------------|------|
| **#6654** | *feat(ai): add promptCacheKey stream option* | Adds `promptCacheKey` to override cache keys for OpenAI/Anthropic/Codex responses. | <https://github.com/earendil-works/pi/pull/6654> |
| **#6928** | *generate-models: use reasoning options from models.dev* | Aligns model catalog with latest reasoning capability metadata. | <https://github.com/earendil-works/pi/pull/6928> |
| **#6216** | *feat: Add Amazon Bedrock Mantle OpenAI Responses provider* | Implements native Bedrock Mantle provider using OpenAI‑compatible responses. | <https://github.com/earendil-works/pi/pull/6216> |
| **#6927** | *Add native OpenRouter OAuth support* | Introduces PKCE‑based OAuth flow with browser auth and ephemeral localhost callback. | <https://github.com/earendil-works/pi/pull/6927> |
| **#6925** | *fix(clipboard): await wl-copy exit code before claiming success* | Guarantees true success only after the Wayland clipboard command exits. | <https://github.com/earendil-works/pi/pull/6925> |
| **#6903** | *fix(coding-agent): speed up external editor launch* | Refactors temp‑file handling into a shared sub‑directory to avoid `os.tmpdir()` bottlenecks. | <https://github.com/earendil-works/pi/pull/6903> |
| **#6913** | *feat(session-selector): add release source archives* | Publishes deterministic source archives, checksummed assets and rebuild docs. | <https://github.com/earendil-works/pi/pull/6913> |
| **#6881** | *feat(ai): use provider-reported cost when responses include it* | Switches cost calculation to use billed `usage.cost.total` when available. | <https://github.com/earendil-works/pi/pull/6881> |
| **#6901** | *feat(compaction & branch summarization follow retry policy)* | Makes compaction/summary retries obey the same back‑off policy and emit UI events. | <https://github.com/earendil-works/pi/pull/6901> |
| **#6916** | *feat(agent): add AgentHarness execution tools* | Provides an `AgentHarnessTool` with arbitrary app context for richer execution pipelines. | <https://github.com/earendil-works/pi/pull/6916> |

---

### 5. Feature Request Trends
- **Dynamic model discovery** – fetching model lists from provider endpoints (`{baseUrl}/models`).  
- **Improved edit‑tool resilience** – stricter validation of `edit[]` payloads, especially for newer Claude models.  
- **Cross‑platform file‑search** – fixing Windows glob patterns (`src/**/*.ts`) to return results.  
- **Robust session‑picker shortcuts** – archive (`Ctrl+A`) and other keybindings to manage large session collections.  
- **Native OAuth flows** – OpenRouter OAuth with PKCE, plus broader provider auth extensions.  
- **Transparent cost reporting** – using provider‑reported billed cost instead of catalog‑derived estimates.  
- **Deterministic source archives & rebuildability** – reproducible release archives with checksums.  
- **Deferred reload & hot‑swap** – safe canonical reload API for extensions.  

---

### 6. Developer Pain Points
- **Session‑temp‑dir cleanup** – `--no-session` leaves stale `--tmp-XXXXXX--` directories under `~/.pi/agent/sessions/`.  
- **Environment‑variable exposure** – desire for a flag to hide global env vars from Pi processes.  
- **Flaky tests & build failures** – intermittent timeouts in `model-registry` tests and compilation errors on shrinking dependencies (`brace-expansion`).  
- **Uncaught exceptions on stream resumption** – crashes (`streamFunction is not a function`) after 0.81.0 upgrades, causing loss of session state.  
- **Windows path‑pattern handling** – `find` tool silently returns “No files found” for multi‑segment globs.  
- **External editor latency** – slow launches when `os.tmpdir()` is crowded; need isolated temporary directories.  
- **Undocumented installation** – users struggle to bootstrap the project without clear README installation steps.  
- **Replay‑session crashes on huge tool results** – `RangeError: Invalid array length` when replaying large `toolResult`s.  

---

*All links point to the referenced GitHub issue or pull request for quick deep‑dive.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code Community Digest – 2026‑07‑22**  

---

### 1. Today’s Highlights  
* The project shipped **v0.20.1** (first stable patch) alongside a nightly build `v0.20.0-nightly.20260722.b98306b7e`.  Both releases contain a telemetry‑metric‑initialisation fix and a modest update to the `cua‑driver‑rs` vendor library, but no breaking changes are noted.  
* A suite of community‑driven improvements landed in the last 24 h, including **background‑agent roster restoration**, **hot‑reloading of workspace‑trust policies**, and **lazy loading of the undici HTTP client** to shave startup latency.  

---

### 2. Releases  
| Version | Type | Summary of Changes |
|---------|------|--------------------|
| **v0.20.1** | Stable | – Fixed daemon‑metrics init ordering & documented metricReader asymmetry.<br>– Updated `cua‑driver‑rs` to v0.7.3 with macOS universal, signed binary and Linux/Windows pre‑built wheels.<br>– Added relative‑coordinate support for the driver.<br>– No known breaking changes. |
| **v0.20.0‑nightly.20260722.b98306b7e** | Nightly | – Same telemetry fix as above; otherwise identical to the stable 0.20.0 nightly. |
| **v0.20.0‑preview.0** | Preview | – Initial preview of the 0.20 series (identical changelog to the nightly). |

*Release notes are generated from `.github/release.yml`; full changelog: <https://github.com/QwenLM/qwen-code/releases>.  

---

### 3. Hot Issues (10 most‑discussed)  

| # | Title | Why It Matters | Community Sentiment |
|---|-------|----------------|---------------------|
| **[#7156](https://github.com/QwenLM/qwen-code/issues/7156)** | Sub‑agent mutates main session model → context overflow | Breaks the guarantee that background agents cannot override the user‑selected model; leads to silent model switches and 400 errors. | High priority (P1); developers report reproducible crashes. |
| **[#7316](https://github.com/QwenLM/qwen-code/issues/7316)** | OpenAI `toolCall` returns empty `working_dir` → incompatible with `isolation: "worktree"` | Makes the `agent` tool unusable on many OpenAI‑compatible models; blocks sub‑agent workflows. | Open, P2; strong demand for schema validation fix. |
| **[#7056](https://github.com/QwenLM/qwen-code/issues/7056)** | VS Code extension fails to connect; ACP process exits unexpectedly | Prevents the primary UI integration point; blocks adoption in the VS Code ecosystem. | Frequent comment volume; users beg for a stable extension. |
| **[#7306](https://github.com/QwenLM/qwen-code/issues/7306)** | Harden tool‑output budgeting, observability, and artifact lifecycle | Lays groundwork for future scalability; Phase 1 completed but Phase 2 still open. | Considered a cornerstone for reliability; praised for systematic approach. |
| **[#5540](https://github.com/QwenLM/qwen-code/issues/5540)** | Resume completed background sub‑agents via `send_message` | Enables long‑running automation pipelines; currently only running agents can be revived. | Highly requested feature for automation use‑cases. |
| **[#7252](https://github.com/QwenLM/qwen-code/issues/7252)** | `token-plan.ap-southeast-1` not selectable on `/auth` | Limits multi‑region token‑plan choices; a simple UI omission. | Minor but repeatedly mentioned; easy win for maintainers. |
| **[#7404](https://github.com/QwenLM/qwen-code/issues/7404)** | Startup update‑check timeout too short on slow networks | Leads to false “update‑check failure” even when network latency is the only issue. | Community flagged as a UX regression; workaround needed. |
| **[#7139](https://github.com/QwenLM/qwen-code/issues/7139)** | Windows installer cannot resolve `Get-FileHash` → SHA‑256 verification fails | Blocks installation on many Windows workstations; error is non‑recoverable without manual flags. | High‑impact for Windows users; many up‑votes. |
| **[#7301](https://github.com/QwenLM/qwen-code/issues/7301)** | Bearer token lost on page refresh when daemon started with `--token` | Breaks authenticated web‑shell sessions; users must re‑enter tokens after refresh. | Annoyance for power users; repeatedly complained. |
| **[#7287](https://github.com/QwenLM/qwen-code/issues/7287)** | Auto‑memory loads `MEMORY.md` but does not register in `FileReadCache` → `write_file` rejected | Prevents users from editing the auto‑memory file as instructed; creates dead‑end loops. | Critical for memory‑management workflows. |

---

### 4. Key PR Progress (10 most notable)  

| PR | Focus | What It Delivers |
|----|-------|------------------|
| **[#7381](https://github.com/QwenLM/qwen-code/pull/7381)** | CLI UI | Fixes queued‑message styling; renders queued user inputs with proper accent colour instead of notification icons. |
| **[#7393](https://github.com/QwenLM/qwen-code/pull/7393)** | Telemetry | Adds delivery telemetry for auto‑memory recall, reporting whether selected memories actually reached the main model. |
| **[#7268](https://github.com/QwenLM/qwen-code/pull/7268)** | Daemon runtime | Enables hot‑reloading of workspace‑trust changes without restarting the daemon; introduces trust‑policy snapshots. |
| **[#7459](https://github.com/QwenLM/qwen-code/pull/7459)** | Session management | Restores background‑agent rosters when a parent session re‑opens; paused agents become resumable. |
| **[#7438](https://github.com/QwenLM/qwen-code/pull/7438)** | CI feedback | Keeps failing checks visible longer, preventing permanent‑red PRs from being silently ignored. |
| **[#7380](https://github.com/QwenLM/qwen-code/pull/7380)** | Web‑shell UX | Moves sub‑agent transcript details into a dedicated detail panel, isolating them from the main conversation flow. |
| **[#7408](https://github.com/QwenLM/qwen-code/pull/7408)** | Rendering performance | Optimises long‑session rendering; caps UI blocks at 500 to bound memory growth and improves SSE stream handling. |
| **[#7455](https://github.com/QwenLM/qwen-code/pull/7455)** | Startup speed | Moves `undici` import behind a dynamic load, reducing ACP cold‑start size from ~2 MiB. |
| **[#7302](https://github.com/QwenLM/qwen-code/pull/7302)** | CLI productivity | Adds `@session:<id>` shortcut to reference prior sessions and injects a read‑only transcript summary for completions. |
| **[#6723](https://github.com/QwenLM/qwen-code/pull/6723)** | Tool‑search stability | Stabilises deferred tool discovery declarations, preventing provider‑facing function signatures from shifting after discovery. |

---

### 5. Feature Request Trends  

* **Resumable background agents** – Multiple issues (#5540, #7459) request persisting completed agents so they can be revived via `send_message`.  
* **Better token‑plan UI** – Users repeatedly ask for selectable regional token plans (#7252) and clearer token‑budget displays.  
* **Enhanced CLI ergonomics** – Hot‑key model toggling (#6486) and `@session:` references (#7302) are frequently cited to boost productivity.  
* **Robust update‑check UX** – Numerous reports (#7049, #7404) urge softer timeout handling and clearer offline/registry error taxonomy.  
* **Workspace context selectors** – Requests for a “Start‑In” selector in the web‑shell toolbar (#6701) and proper `workspaceId` initialization (#7430) indicate a need for finer‑grained execution contexts.  

Overall, the community is gravitating toward **greater persistence, better observability, and smoother multi‑region/plan handling**.

---

### 6. Developer Pain Points  

| Pain Point | Frequency / Impact | Typical Symptom |
|------------|-------------------|-----------------|
| **Timeout‑related update‑check failures** | Repeated across issues #7049, #7404, #7423 | Startup hangs or aborts on slow networks, showing misleading error dialogs. |
| **Windows installer checksum verification** | High‑impact for Windows users (#7118, #7139) | `Get-FileHash` cannot be resolved; installer aborts with SHA‑256 error. |
| **Bearer token loss on refresh** | Common for authenticated web‑shell sessions (#7301) | Users must re‑enter tokens after a simple page reload. |
| **Parameter loss in tool calls** | Frequently reported (#7377) | `run_shell_command`, `write_file`, `agent` calls drop arguments, causing retries. |
| **Auto‑memory registration gap** | Critical for memory workflows (#7287) | `write_file` to `MEMORY.md` is rejected because the file isn’t cached. |
| **Schema conflicts for `working_dir` / `isolation`** | Breaks sub‑agent launching (#7315) | Validation treats optional fields as required, blocking OpenAI‑compatible models. |
| **Inconsistent token‑usage accounting** | Recurring #7384 | Deleting a conversation also erases token counters, leading to inaccurate billing reports. |
| **Cold‑start latency due to eager imports** | Performance‑focused PRs (#7455) | ACP startup spends >2 MiB on parsing undici and telemetry modules. |
| **Missing workspace‑trust hot‑reload** | Requested (#6701, #7268) | Users must restart the daemon to apply new trust settings. |

Addressing these pain points — especially around **robustness of CLI/Windows installers, token‑budget visibility, and persistence of background state** — will markedly improve developer experience and adoption rates.  

---  

*All issue and PR links are active as of 2026‑07‑22.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

**DeepSeek TUI Community Digest – 2026‑07‑22**  

---

### 1. Today's Highlights
- The community merged several critical fixes for the **v0.9.1 release** (e.g., correcting BashTool’s default working directory for sub‑agents and preserving authorship credits).  
- A flurry of **high‑impact open issues** surfaced around UI responsiveness, long‑output handling, and the need for a universal Pre/PostToolUse hook layer, indicating growing focus on reliability and developer ergonomics.  

---

### 2. Releases
*None* – No new version tags were published in the last 24 h.

---

### 3. Hot Issues (10 noteworthy items)  

| Issue | Status | Comments | Why it matters | Community reaction |
|-------|--------|----------|----------------|--------------------|
| **[#4032 – CLOSED – bug, release‑blocker]** “Codewhale not following the constitution” | Closed | 41 👍 0 | Core behavioral regression: the agent writes ad‑hoc scripts despite supplied scripts, breaking trust in the “constitution” contract. | High‑visibility bug; many up‑votes calling for stricter script‑use enforcement. |
| **[#2870 – OPEN – documentation, release‑blocker]** “EPIC: staged command‑boundary refactor for #2791” | Open | 15 👍 0 | Drives the multi‑step refactor that will split the command‑boundary into mergeable layers; essential for future stability. | Progress tracked; contributors awaiting final merge. |
| **[#4227 – OPEN – enhancement]** “feat: 🐋 help JayBeest map the CodeWhale tsunami 🌊” | Open | 11 👍 0 | Introduces a workflow‑setup skill to bootstrap the rapidly evolving `main` branch; reduces onboarding friction. | Appreciated for high‑velocity teams; seen as a much‑needed utility. |
| **[#2766 – OPEN – UI refactor needed]** “UI refactor needed” | Open | 9 👍 0 | Users complain about non‑copyable output and intrusive confirmation pop‑ups that obscure the main interface. | Repeated complaints; perceived as a blocker for daily workflow. |
| **[#2889 – OPEN – documentation, release‑blocker]** “Work Agent rows: real sub‑agent details and structured current activity” | Open | 7 👍 0 | Restores missing sidebar semantics (Work/To‑do, Activity, Agents) after a redesign; critical for transparent agent state. | Community values clear visibility into agent queues. |
| **[#4410 – CLOSED – bug, release‑blocker]** “Restore xAI device‑code OAuth login” | Closed | 7 👍 0 | Fixes broken device‑code authentication with xAI/Grok; restores a key integration path. | Promptly merged; highlights importance of auth stability. |
| **[#1917 – OPEN – enhancement]** “Proposal: universal PreToolUse/PostToolUse hook layer for Cancel/Pause/Resume” | Open | 5 👍 0 | Aims to standardise lifecycle hooks across all actions (Cancel, Pause, Resume) for rollback safety. | Strong interest; cited as a common pain point. |
| **[#4674 – CLOSED – bug]** “BashTool ignores context.workspace for default cwd” | Closed | 1 👍 0 | Sub‑agents could not execute commands in their isolated worktrees; now fixed. | Positive reception; demonstrates impact of small cwd change. |
| **[#4649 – CLOSED – documentation, release‑blocker]** “v0.9.1: Credit material reporters, reproducers, reviewers, verifiers, and implementers equally” | Closed | 1 👍 0 | Introduces equitable credit tracking for all contribution types, affecting contributor visibility. | Celebrated as a fairness improvement. |
| **[#4673 – CLOSED – fix(shell)]** “fix(shell): default no‑cwd shell commands to context.workspace” | Closed | – | Aligns BashTool’s default `cwd` with the sub‑agent’s worktree, resolving the issue above. | Merged quickly; seen as a clean fix. |

*These issues collectively highlight a community focus on correctness of agent behavior, transparent UI, and robust lifecycle management.*

---

### 4. Key PR Progress (10 important changes)

| PR | Status | Summary | Link |
|----|--------|---------|------|
| **#4673** | Closed | Fixes BashTool’s default `cwd` to use `context.workspace` when none is supplied, ensuring sub‑agents run commands in the correct isolated directory. | <https://github.com/Hmbown/CodeWhale/pull/4673> |
| **#4675** | Open | Integrates the v0.9.1 runtime simplification, empty‑Work fix, and final TUI colour grammar onto `main`. | <https://github.com/Hmbown/CodeWhale/pull/4675> |
| **#4652** | Closed | Adds public `--no-project-config` flag to the `codewhale` CLI, enabling reproducible headless executions. | <https://github.com/Hmbown/CodeWhale/pull/4652> |
| **#4653** | Closed | Introduces an end‑to‑end `qa_pty` test that locks long‑output scrolling, addressing truncation complaints. | <https://github.com/Hmbown/CodeWhale/pull/4653> |
| **#4654** | Closed | Fixes UI freeze on Enter‑key send by separating acknowledgement from slow‑send preparation. | <https://github.com/Hmbown/CodeWhale/pull/4654> |
| **#4657** | Closed | Streams progress metrics (bytes, timing) into idle‑timeout SSE errors, improving diagnostics for stalled streams. | <https://github.com/Hmbown/CodeWhale/pull/4657> |
| **#4656** | Closed | Honors explicit output limits for unknown local models, preventing the generic 4K fallback from masking user‑defined caps. | <https://github.com/Hmbown/CodeWhale/pull/4656> |
| **#4613** | Closed | Sanitises Moonshot/Kimi tool parameters per MFJS spec, preventing schema violations that caused tool rejection. | <https://github.com/Hmbown/CodeWhale/pull/4613> |
| **#4566** | Open | Updates the TUI `Cargo.toml` for HarmonyOS builds, moving `portable-pty` under `cfg("unix")` and confirming successful compilation on HarmonyOS hardware. | <https://github.com/Hmbown/CodeWhale/pull/4566> |
| **#4370** | Open | Adds TelecomJS provider support with configuration and catalog integration, expanding the catalog picker to show all models. | <https://github.com/Hmbown/CodeWhale/pull/4370> |

*These PRs collectively stabilise the runtime, improve CLI ergonomics, fix critical UI bugs, and broaden platform support.*

---

### 5. Feature Request Trends
- **Lifecycle Hook Standardisation** – Repeated calls for a universal `PreToolUse/PostToolUse` hook layer to manage Cancel, Pause, and Resume semantics across all actions.  
- **Transparent Agent State & UI Polish** – Requests for clear, non‑intrusive UI elements (e.g., copyable output, stable confirmation pop‑ups) and richer sidebar details (real sub‑agent activity, role boundaries).  
- **Consistent Permission & Provider Management** – Need for a single typed permission contract and a provider registry / dynamic picker that surface all models without hidden state.  
- **Self‑Hosted Rate Limits** – Desire to make per‑route output limits explicit, especially for unknown wire aliases, avoiding the opaque 4K fallback.  
- **Equitable Credit Attribution** – Community interest in crediting all contribution types (reporters, reviewers, implementers) uniformly in release notes and UI.  

*Overall, contributors are gravitating toward more predictable workflow contracts, clearer observability, and a polished developer experience.*

---

### 6. Developer Pain Points
- **Long output truncation** – UI cuts off large diffs or logs, leaving users unable to review terminal content.  
- **Enter‑key send lag** – Message send can freeze the TUI for ~200–1200 ms, breaking flow during rapid interaction.  
- **Workspace handling** – BashTool’s default working directory sometimes defaults to the parent checkout, causing sub‑agents to execute commands in the wrong directory.  
- **Permission ambiguity** – Multiple access levels (Ask, Auto‑Review, Full Access) still live behind disjoint UI flows, creating confusion about which state is active.  
- **Fragmented CLI flags** – Headless execution lacks a clean flag (`--no-project-config`) to guarantee reproducibility, leading to flaky scripts.  

*These recurring frustrations underline a community push for smoother, more deterministic interactions and clearer UI feedback.*

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

# **ComfyUI Community Digest – 2026-07-22**

---

## **🔥 Today’s Highlights**
ComfyUI’s development remains highly active, with **16 new issues** and **15 pull requests** in the last 24 hours. Key themes include **performance regressions** (e.g., LTX-2.3 slowdowns), **AMD/ROCm compatibility**, and **memory/LoRA handling**. Several PRs focus on **video processing improvements**, **Uni3C integration**, and **security enhancements** (e.g., dataset folder restrictions). The community is actively debugging **FP8 model crashes** and **reconnection issues**, while developers push for better **cross-platform support** (e.g., gfx1035 for AMD).

---

## **📦 Releases**
*No new releases in the last 24 hours.*

---

## **🚨 Hot Issues (Top 10)**

### **1. [#14618](https://github.com/Comfy-Org/ComfyUI/issues/14618) – ComfyUI keeps loading models on every prompt change**
**Why it matters:** A **high-impact performance bug** where models reload unnecessarily, causing delays. The issue persists even with custom nodes disabled, suggesting a core engine problem.
**Community reaction:** **80 comments**, 10 👍. Users report slow workflows, especially in iterative prompting.

### **2. [#14345](https://github.com/Comfy-Org/ComfyUI/issues/14345) – LTX-2.3 generation speed dropped significantly after upgrade**
**Why it matters:** **Video generation slowed by ~40%** post-update (from 8 to ~12+ minutes for a 10-second clip). Disk/filesystem details are requested for diagnosis.
**Community reaction:** **32 comments**, 2 👍. Affects LTX-2.3 users heavily.

### **3. [#14967](https://github.com/Comfy-Org/ComfyUI/issues/14967) – Nodes Manager Extensions broken after 0.28.0**
**Why it matters:** **Critical UI regression** post-update. Users cannot install/manage custom nodes, disrupting workflows.
**Community reaction:** **5 comments**. No upvotes yet—likely due to recent discovery.

### **4. [#14985](https://github.com/Comfy-Org/ComfyUI/issues/14985) – int8 models cause PC crashes**
**Why it matters:** **Hard crashes** (RTX 30xx series) when using int8 models. A **safety-critical bug** for users relying on quantized models.
**Community reaction:** **3 comments**. No upvotes—may be niche but severe.

### **5. [#14919](https://github.com/Comfy-Org/ComfyUI/issues/14919) – int8 LoRA loading is 10x slower than safetensors**
**Why it matters:** **LoRA-heavy workflows** (e.g., Bernini’s 2GB+ LoRAs) become unusable due to slow disk I/O. Suggests caching opportunities.
**Community reaction:** **2 comments**, 1 👍. High frustration for LoRA users.

### **6. [#15013](https://github.com/Comfy-Org/ComfyUI/issues/15013) – Qwen Image Edit FP8 + LoRA VRAM overflow after comfy-kitchen update**
**Why it matters:** **VRAM exhaustion** in a regression affecting **FP8 models + LoRA**. Breaks existing workflows.
**Community reaction:** **1 comment**. New issue; likely underreported.

### **7. [#15016](https://github.com/Comfy-Org/ComfyUI/issues/15016) – Continuous reconnection toast messages on v0.28.2**
**Why it matters:** **UI/UX disruption** with repeated "reconnected" notifications. Suggests WebSocket or backend instability.
**Community reaction:** **1 comment**. No upvotes—may be environment-specific.

### **8. [#14850](https://github.com/Comfy-Org/ComfyUI/issues/14850) – Unexpected acceleration with `--lowvram` + `--use-sage-attention`**
**Why it matters:** **Counterintuitive performance gain** (42s/it vs. 60s/it) when combining flags. Useful for optimization but may indicate underlying inefficiencies.
**Community reaction:** **11 comments**. Mixed reactions—some users benefit, others confused.

### **9. [#15004](https://github.com/Comfy-Org/ComfyUI/issues/15004) – AMD ROCm (gfx1103) compatibility issues**
**Why it matters:** **AMD GPU users** (especially with integrated GPUs) report **Krea2 + LoRA failures**. Highlights **ROCm fragmentation**.
**Community reaction:** **1 comment**. Likely underreported due to niche hardware.

### **10. [#12700](https://github.com/Comfy-Org/ComfyUI/issues/12700) – `TypeError: Failed to fetch`**
**Why it matters:** **Persistent frontend error** with no clear cause. Could relate to **API node misconfigurations** or **CORS issues**.
**Community reaction:** **10 comments**. No upvotes—may be environment-specific.

---

## **🔧 Key PR Progress (Top 10)**

### **1. [#15018](https://github.com/Comfy-Org/ComfyUI/pull/15018) – Optimized `rms_rope` for JoyAI models**
**Impact:** **Performance boost** for JoyAI’s image models via optimized RMS normalization.
**Status:** Open.

### **2. [#15015](https://github.com/Comfy-Org/ComfyUI/pull/15015) – H.264 proxy for undecodable video previews**
**Impact:** **Fixes video preview deadlocks** for formats like ProRes/DNxHD by serving H.264 proxies.
**Status:** Open.

### **3. [#14946](https://github.com/Comfy-Org/ComfyUI/pull/14946) – Native Uni3C ControlNet for Wan models**
**Impact:** **Adds Uni3C support** (camera control) for all Wan variants (T2V, I2V, VACE, etc.).
**Status:** Closed (merged).

### **4. [#15009](https://github.com/Comfy-Org/ComfyUI/pull/15009) – Fix gfx1035 treated as RDNA2**
**Impact:** **AMD ROCm compatibility** for gfx1035 (RDNA2 iGPU) to avoid slow BF16 fallback.
**Status:** Closed (merged).

### **5. [#15014](https://github.com/Comfy-Org/ComfyUI/pull/15014) – Fix Gemini-Omni video input handling**
**Impact:** **Fixes "HTTP video input not supported" errors** by sending videos as inline base64.
**Status:** Closed (merged).

### **6. [#15012](https://github.com/Comfy-Org/ComfyUI/pull/15012) – Allow symlinks in `Load Image`**
**Impact:** **Fixes "Image not loaded" errors** for symlinked files in `temp/`/`output/`.
**Status:** Open.

### **7. [#14979](https://github.com/Comfy-Org/ComfyUI/pull/14979) – Disambiguate deprecated partner-node display names**
**Impact:** **Resolves UI confusion** by renaming duplicate node display names (e.g., `OpenAIGPTImageNodeV1` vs. `V2`).
**Status:** Open.

### **8. [#15007](https://github.com/Comfy-Org/ComfyUI/pull/15007) – FreSca 5D+ fix for Anima models**
**Impact:** **Corrects FreSca scaling** for 5D tensors (e.g., Anima), ensuring `scale_low` works as intended.
**Status:** Closed (merged).

### **9. [#14539](https://github.com/Comfy-Org/ComfyUI/pull/14539) – Fix default database path**
**Impact:** **Prevents SQLite path misconfigurations** by resolving the default DB URL from the user directory.
**Status:** Open.

### **10. [#14807](https://github.com/Comfy-Org/ComfyUI/pull/14807) – Restrict dataset folder access**
**Impact:** **Security enhancement** to prevent arbitrary folder access in dataset operations.
**Status:** Open.

---

## **🔮 Feature Request Trends**
1. **AMD/ROCm Support**
   - Multiple issues (#15004, #15006) highlight **ROCm fragmentation** and **gfx1035 support**.
   - Requests for **better iGPU optimization** (e.g., RDNA2/BF16 vs. FP16).

2. **Performance Optimization**
   - **LoRA caching** (#14919) and **model reloading fixes** (#14618).
   - **Video format compatibility** (#15015) and **LTX-2.3 speed regression** (#14345).

3. **Memory Management**
   - **FP8 model crashes** (#14985) and **VRAM overflows** (#15013).
   - **LowVRAM optimizations** (#14850) for edge devices.

4. **UI/UX Improvements**
   - **Nodes Manager fixes** (#14967) and **reconnection stability** (#15016).
   - **Clearer node naming** (#14979) to avoid confusion.

5. **Security & Stability**
   - **Dataset folder restrictions** (#14807) and **symlink handling** (#15012).

---

## **💀 Developer Pain Points**
| **Pain Point**               | **Frequency** | **Impact**                          | **Example Issues/PRs**                     |
|------------------------------|--------------|-------------------------------------|--------------------------------------------|
| **ROCm/AMD compatibility**   | High         | Blocks users on AMD GPUs            | #15004, #15006                            |
| **Performance regressions**   | High         | Slows down workflows                | #14345, #14618                            |
| **LoRA/quantization issues** | Medium       | Breaks LoRA-heavy pipelines         | #14919, #14985                            |
| **UI/UX regressions**        | Medium       | Disrupts workflows                  | #14967, #15016                            |
| **Memory leaks/crashes**     | Medium       | Causes hard crashes                 | #14985, #15013                            |
| **Video format support**     | Medium       | Limits input/output flexibility     | #15015                                    |
| **Node naming confusion**     | Low          | Hinders discoverability             | #14979                                    |
| **Dataset security**         | Low          | Raises permission concerns          | #14807                                    |

---
**Next Steps:**
- **Prioritize AMD/ROCm fixes** (#15004, #15006).
- **Investigate LTX-2.3 slowdowns** (#14345).
- **Implement LoRA caching** (#14919).
- **Stabilize video previews** (#15015).

*Stay tuned for updates in the next digest!* 🚀

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# **Ollama Community Digest – July 22, 2026**

## **Today’s Highlights**
Ollama’s development remains active with a focus on **GPU stability, API enhancements, and agent/TUI improvements**. Key areas of progress include **NVIDIA/AMD GPU compatibility fixes**, **tool-call parsing robustness**, and **MLX engine optimizations** for Apple Silicon. The community is also pushing for **better model management** (e.g., `Modelfile` API support) and **error handling** (e.g., GPU discovery timeouts, model crashes).

---

## **Releases**
No new releases in the last 24 hours.

---

## **Hot Issues** *(Top 10 by community engagement)*

1. **[#690](https://github.com/ollama/ollama/issues/690) – "How to stop Ollama?"**
   - **Why it matters**: Users struggle to terminate Ollama processes cleanly, with `kill -9` spawning new instances. High engagement (64 comments, 45 👍) suggests this is a common pain point.
   - **Status**: Closed, but no clear resolution documented.

2. **[#16957](https://github.com/ollama/ollama/issues/16957) – NVIDIA 1080Ti CUDA crash (`0xc0000005`)**
   - **Why it matters**: Affects Windows users with older GPUs, blocking inference. No upvotes but critical for legacy hardware support.
   - **Status**: Open, requires driver/CUDA version investigation.

3. **[#17080](https://github.com/ollama/ollama/issues/17080) – Ollama 0.31.1 crashes on Linux**
   - **Why it matters**: Regression in v0.31.x breaks stability. Workaround: downgrade to v0.24.0.
   - **Status**: Open, needs log analysis.

4. **[#13593](https://github.com/ollama/ollama/issues/13593) – GPU not detected on RTX A1000 (Windows 11)**
   - **Why it matters**: WDDM driver issues persist despite updates. Affects laptop users relying on GPU acceleration.
   - **Status**: Open, tagged for GPU discovery improvements.

5. **[#8793](https://github.com/ollama/ollama/issues/8793) – Add `Modelfile` support to the `create` API**
   - **Why it matters**: Missing parity between CLI (`--file`) and API. High-priority for automation workflows.
   - **Status**: Open, 6 comments; no progress.

6. **[#17274](https://github.com/ollama/ollama/issues/17274) – Tool-call parsing drops output on parse failure**
   - **Why it matters**: Breaks agent workflows when models emit malformed tool calls. Corrected report but still unresolved.
   - **Status**: Open, needs parser fixes.

7. **[#17292](https://github.com/ollama/ollama/issues/17292) – `qwen3:30b` ignores `--think=false`**
   - **Why it matters**: Inconsistent behavior across models undermines reliability for reasoning tasks.
   - **Status**: Open, model-specific bug.

8. **[#17269](https://github.com/ollama/ollama/issues/17269) – Desktop app fails to load models (v0.32.1)**
   - **Why it matters**: CORS issues (`app://*`, `tauri://*`) break model dropdowns. Affects new installations.
   - **Status**: Open, tagged "needs more info."

9. **[#17297](https://github.com/ollama/ollama/issues/17297) – RTX 3090 GPU loss on Windows after cancelling vision requests**
   - **Why it matters**: Critical stability issue for Windows/NVIDIA users running vision models.
   - **Status**: Open, newly reported (2026-07-22).

10. **[#17282](https://github.com/ollama/ollama/issues/17282) – Templates change after update to v0.32**
   - **Why it matters**: Breaks existing workflows relying on custom templates. Suggests regression in model metadata handling.
   - **Status**: Open, tagged "needs more info."

---

## **Key PR Progress** *(Top 10 by impact)*

1. **[#17295](https://github.com/ollama/ollama/pull/17295) – Highlight fenced code blocks in agent TUI**
   - **Feature**: Improves readability in agent responses by preserving syntax highlighting for tagged code blocks.
   - **Status**: Open.

2. **[#17237](https://github.com/ollama/ollama/pull/17237) – Add Laguna MLX support**
   - **Feature**: Expands Apple Silicon support with Laguna XS models (dense and MoE variants).
   - **Status**: Open.

3. **[#17260](https://github.com/ollama/ollama/pull/17260) – Retry interrupted model manifest pulls**
   - **Fix**: Addresses EOF errors during downloads (e.g., #16917) by adding retry logic for partial manifests.
   - **Status**: Open.

4. **[#17291](https://github.com/ollama/ollama/pull/17291) – Add Laguna v8 chat support & fix Metal inference**
   - **Fix**: Resolves Metal quantized MoE prefill overflow and improves structured tool argument parsing.
   - **Status**: Closed.

5. **[#17296](https://github.com/ollama/ollama/pull/17296) – Agent system prompt command**
   - **Feature**: Adds `/system` command to inspect/toggle system prompts in the agent TUI.
   - **Status**: Open.

6. **[#17294](https://github.com/ollama/ollama/pull/17294) – Import skills from coding agents**
   - **Feature**: Enables `/skills import codex|claude|pi` to load external agent skills into Ollama’s catalog.
   - **Status**: Open.

7. **[#16550](https://github.com/ollama/ollama/pull/16550) – Detect AMD ROCm on WSL2**
   - **Fix**: Enables AMD GPU support in WSL2 by detecting DXCore (`/dev/dxg`) instead of PCI.
   - **Status**: Open.

8. **[#17284](https://github.com/ollama/ollama/pull/17284) – Return buffered output on tool-call parse failure**
   - **Fix**: Prevents silent discarding of model output when tool calls fail to parse (addresses #17274).
   - **Status**: Open.

9. **[#17287](https://github.com/ollama/ollama/pull/17287) – Add streaming OpenAI compatibility examples**
   - **Docs**: Improves API documentation with Python/JS/curl examples for streaming chat completions.
   - **Status**: Open.

10. **[#17281](https://github.com/ollama/ollama/pull/17281) – Add ChatOSS to community integrations**
    - **Feature**: Lists [ChatOSS](https://chatoss.ai) (a Codex alternative) in Ollama’s README.
    - **Status**: Closed.

---

## **Feature Request Trends**
1. **GPU/Platform Support**
   - Requests for **WDDM (Windows) GPU detection** (#13593), **ROCm on WSL2** (#16550), and **legacy NVIDIA GPU compatibility** (#16957).
   - **Cloud GPU support** (e.g., Kimi K3, #17235).

2. **API Parity**
   - **`Modelfile` support in the `create` API** (#8793) and **OpenAI streaming examples** (#17287).

3. **Agent/TUI Enhancements**
   - **Tool-call robustness** (#17274, #17284), **system prompt management** (#17296), and **skill imports** (#17294).

4. **Model-Specific Fixes**
   - **Thinking mode control** (#17292) and **template consistency** (#17282).

---

## **Developer Pain Points**
1. **GPU Stability**
   - **NVIDIA/AMD driver issues** (crashes, undetected GPUs) dominate reports (#16957, #13593, #17290).
   - **Containerized GPU passthrough** (e.g., LXC/Docker) suffers from **intermittent discovery timeouts** (#17069).

2. **Model Management**
   - **Template regressions** (#17282) and **quantization validation errors** (#17279) break existing workflows.
   - **Memory reporting inaccuracies** (e.g., VRAM under-reporting, #17253).

3. **Tool-Use Reliability**
   - **Silent failures in tool-call parsing** (#17274, #17284) disrupt agent pipelines.
   - **Inconsistent `--think` flag behavior** (#17292) across models.

4. **Windows-Specific Issues**
   - **GPU loss on process cancellation** (#17297) and **CORS restrictions in the desktop app** (#17269).

---
**Next Steps**: The team is actively addressing **GPU stability** (PRs #16550, #17286) and **API parity** (#8793, #17287). Community feedback highlights the need for **better error messages** and **cross-platform GPU support**. Stay tuned for v0.33.x releases addressing these gaps.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

# **llama.cpp Community Digest – 2026-07-22**

## **Today's Highlights**
The project saw significant progress in backend optimizations, particularly for Vulkan, CUDA, and OpenVINO, alongside critical bug fixes for ROCm and WebUI usability. A new speculative decoding implementation for GLM-5.2 models was introduced, expanding multi-token prediction (MTP) support. The community remains highly engaged, with over 50 active issues and 20 pull requests, reflecting both rapid development and persistent challenges in cross-platform compatibility.

---

## **Releases**
No new releases were published in the last 24 hours.

---

## **Hot Issues**
*(Top 10 by comment count; links provided for further details)*

1. **[#22746](https://github.com/ggml-org/llama.cpp/issues/22746) – Qwen 3.6 27B Cache Reprocessing Bug**
   - **Why it matters:** Forces full prompt reprocessing due to missing KV cache, degrading performance.
   - **Community reaction:** 104 comments, 31 👍. Users report crashes on AMD GPUs (ROCm) and seek stability fixes.

2. **[#19466](https://github.com/ggml-org/llama.cpp/issues/19466) – KV Cache Save Fails for Vision Models**
   - **Why it matters:** Critical for deploying vision-enabled models (e.g., Qwen-VL) in production.
   - **Community reaction:** 35 comments, 7 👍. Developers urge prioritization for server-side workflows.

3. **[#21956](https://github.com/ggml-org/llama.cpp/issues/21956) – Audio Output Support in mtmd**
   - **Why it matters:** Expands multimodal capabilities beyond text/vision, enabling TTS integration.
   - **Community reaction:** 23 comments, 12 👍. High interest in design proposals for audio generation.

4. **[#23774](https://github.com/ggml-org/llama.cpp/issues/23774) – Vulkan MTP Performance Degradation**
   - **Why it matters:** Affects users leveraging Vulkan for multi-GPU setups (e.g., AMD GPUs).
   - **Community reaction:** 20 comments, 4 👍. Linked to #20515 (Vulkan crashes), suggesting systemic backend issues.

5. **[#25349](https://github.com/ggml-org/llama.cpp/issues/25349) – MCP Server Persistence in WebUI**
   - **Why it matters:** Critical for seamless MCP tool integration (e.g., `web_search`, `huggingface`).
   - **Community reaction:** 15 comments, 0 👍. High-priority request for WebUI stability.

6. **[#24616](https://github.com/ggml-org/llama.cpp/issues/24616) – CUDA dp4a Emulation via dp2a**
   - **Why it matters:** Improves quantization efficiency on older NVIDIA GPUs (e.g., Turing).
   - **Community reaction:** 13 comments, 2 👍. Technical deep dive into CUDA kernel optimizations.

7. **[#21545](https://github.com/ggml-org/llama.cpp/issues/21545) – Model Capabilities Metadata in Server/WebUI**
   - **Why it matters:** Enables automatic detection of model types (e.g., embedding, instruction-tuned).
   - **Community reaction:** 10 comments, 2 👍. UX improvement for model selection.

8. **[#24051](https://github.com/ggml-org/llama.cpp/issues/24051) – `reasoningEffort` Not Configurable in JSON WebUI**
   - **Why it matters:** Limits fine-grained control over reasoning models (e.g., Qwen3).
   - **Community reaction:** 9 comments, 2 👍. Frustration over missing default settings.

9. **[#24712](https://github.com/ggml-org/llama.cpp/issues/24712) – CUDA Layer Assignment Warnings**
   - **Why it matters:** Indicates potential tensor placement issues (e.g., CPU vs. GPU mismatches).
   - **Community reaction:** 8 comments, 1 👍. Debugging aid for complex model architectures.

10. **[#25807](https://github.com/ggml-org/llama.cpp/issues/25807) – ROCm 7.14 Library Compatibility**
    - **Why it matters:** Blocks inference on newer ROCm stacks (e.g., `libhipblas.so.3` errors).
    - **Community reaction:** 6 comments, 0 👍. Urgent for AMD GPU users upgrading ROCm.

---

## **Key PR Progress**
*(Top 10 by impact)*

1. **[#25980](https://github.com/ggml-org/llama.cpp/pull/25980) – GLM-5.2 NextN/MTP Speculative Decoding**
   - Adds MTP support for GLM-5.2, complementing prior implementations (Qwen3, Cohere2).
   - **Impact:** Expands multi-token prediction for newer architectures.

2. **[#25931](https://github.com/ggml-org/llama.cpp/pull/25931) – WebGPU Binding Fixes**
   - Resolves aliasing issues in GLU/SSM scan kernels, enabling broader GPU architecture support.
   - **Impact:** Critical for WebGPU CI stability and cross-platform compatibility.

3. **[#25863](https://github.com/ggml-org/llama.cpp/pull/25863) – HIP Integrated GPU Fix**
   - Avoids ROCm host-buffer corruption on APUs (e.g., AMD Ryzen with Radeon Graphics).
   - **Impact:** Fixes prompt corruption issues reported in #23774.

4. **[#25943](https://github.com/ggml-org/llama.cpp/pull/25943) – WebGPU WASM OpenMP Disable**
   - Disables OpenMP for Emscripten builds to resolve linking issues.
   - **Impact:** Enables WebGPU in browser environments.

5. **[#25635](https://github.com/ggml-org/llama.cpp/pull/25635) – CUDA Flash Attention XOR Swizzle**
   - Optimizes shared-memory bank conflict handling in fp16 MMA kernels.
   - **Impact:** 1.05–1.76x speedup on Intel PVC/A100 GPUs.

6. **[#25974](https://github.com/ggml-org/llama.cpp/pull/25974) – Hexagon Activation Ops Update**
   - Adds fused GEGLU/SWIGLU kernels and non-contiguous tensor support.
   - **Impact:** Improves performance on Qualcomm Hexagon DSPs.

7. **[#25962](https://github.com/ggml-org/llama.cpp/pull/25962) – CUDA GET_ROWS Quantization**
   - Brings parity with CPU/Metal/Vulkan/SYCL backends for quantized embeddings.
   - **Impact:** Fixes audio model inference (e.g., GGML ASR).

8. **[#25877](https://github.com/ggml-org/llama.cpp/pull/25877) – Server Tool: `read_image`**
   - Enables vision models to analyze server-side images via MCP.
   - **Impact:** Unblocks multimodal workflows in `llama-server`.

9. **[#25942](https://github.com/ggml-org/llama.cpp/pull/25942) – SYCL DMMV Q4_K/Q6_K Kernels**
   - Adds optimized ESIMD kernels for Intel GPUs.
   - **Impact:** 1.31–1.76x speedup on Intel PVC.

10. **[#25924](https://github.com/ggml-org/llama.cpp/pull/25924) – Metal FWHT Kernel**
    - Implements Fast Walsh-Hadamard Transform for Apple Metal backend.
    - **Impact:** Accelerates signal processing tasks (e.g., audio models).

---

## **Feature Request Trends**
1. **Backend Parity & Optimization**
   - Persistent requests for CUDA/SYCL/Vulkan/ROCm feature parity (e.g., dp4a emulation, MTP support).
   - Focus on reducing VRAM usage and improving multi-GPU scalability.

2. **Multimodal & Tooling Expansion**
   - Audio output (#21956), vision tooling (#25877), and MCP server persistence (#25349) dominate discussions.
   - Interest in native tool integration (e.g., `web_search`, `huggingface`).

3. **WebUI/Server UX Improvements**
   - Model capability metadata (#21545), reasoning effort defaults (#24051), and MCP activation persistence (#25349).
   - Bugs around UI responsiveness (e.g., #25302, #24141).

4. **Debugging & Diagnostics**
   - Layer assignment warnings (#24712), ROCm library compatibility (#25807), and Vulkan crashes (#23774/#20515).

---

## **Developer Pain Points**
1. **Cross-Platform Instability**
   - ROCm (#25807), Vulkan (#23774), and SYCL (#25973) issues highlight persistent backend-specific bugs.
   - Users report "silent failures" (e.g., #25913: KV cache loss in hybrid models).

2. **Quantization & Memory Issues**
   - GET_ROWS quants (#25962) and MTP memory allocation (#25574) reveal gaps in GPU memory management.
   - Users struggle with model-specific quirks (e.g., Hy_v3 tensor naming in #25657).

3. **Tooling & Workflow Gaps**
   - Lack of persistent MCP server states (#25349) disrupts production workflows.
   - Debugging tools for tensor placement (#24712) and performance profiling are underdeveloped.

4. **Documentation & Onboarding**
   - Missing guides for ROCm/SYCL setup and WebGPU deployment frustrate new contributors.
   - Feature parity tables (e.g., "Which backends support MTP?") are outdated.

---
**Next Steps:** The community is prioritizing backend stability (Vulkan/ROCm) and multimodal tooling. Contributors are encouraged to test PRs like #25980 (GLM-5.2 MTP) and #25877 (`read_image` tool) for early feedback.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*