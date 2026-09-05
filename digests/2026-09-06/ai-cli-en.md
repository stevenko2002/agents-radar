# AI CLI Tools Community Digest 2026-09-06

> Generated: 2026-09-05 22:17 UTC | Tools covered: 12

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

**Today's Highlights (2026-09-06)**  

- **OpenAI Codex** – Released **v0.153.4**, fixing Astra’s visibility in the model picker and making it the default when no model is set, plus an async guidance fix for Astra.  
  https://github.com/openai/codex/releases  

- **Gemini CLI** – Shipped nightly **v0.60.0**, tightening extension security (user consent before env changes) and improving workspace path handling/symlink resolution.  
  https://github.com/google-gemini/gemini-cli/releases/tag/v0.60.0-nightly.20260905.g85aca163f  

- **GitHub Copilot CLI** – Released **v1.0.84‑1**, adding experimental support for the newly launched **GPT‑6 Astra** model.  
  https://github.com/github/copilot-cli/releases/tag/v1.0.84-1  

- **OpenCode** – Published **v1.18.29**, restoring GPT‑6 Astra visibility for OpenAI subscription users via Codex OAuth fixes and fixing Chinese docs bold rendering.  
  https://github.com/anomalyco/opencode/releases/tag/v1.18.29  

- **Pi** – Released **v0.85.1**, enabling GPT‑6 Astra through OpenAI API keys or Codex subscriptions and updating provider documentation.  
  https://github.com/earendil-works/pi/releases/tag/v0.85.1  

- **Qwen Code** – Released preview **v0.23.1‑preview.0**, adding visualization and management for dynamic workflow runs in the Web Shell.  
  https://github.com/QwenLM/qwen-code/releases/tag/v0.23.1-preview.0  

- **DeepSeek TUI** – Shipped **v0.9.12** (Codewhale), the first release under the new branding, with legacy `deepseek-tui` deprecated and various UX/stabilization improvements.  
  https://github.com/Hmbown/Codewhale/releases/tag/v0.9.12  

- **llama.cpp** – Issued three patch commits: **b10819** (Metal memory‑leak fix), **b10818** (SYCL Kronecker‑product FWHT restore & CI fix), and **b10817** (SYCL memory‑trace env vars for `--fit` debugging).  
  https://github.com/ggml-org/llama.cpp/commit/b10819  
  https://github.com/ggml-org/llama.cpp/commit/b10818  
  https://github.com/ggml-org/llama.cpp/commit/b10817

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data snapshot: 2026-09-06 | Source: github.com/anthropics/skills*

> **Note on data**: PR comment counts returned as `undefined` in the source feed; rankings below reflect relative watch-volume based on PR position, recency, and cross-referenced issue activity (e.g., PR #1298 and PR #1099/#1050 directly address the hot Issue #556 with 12 comments).

---

## 1. Top Skills Ranking (Most-Watched PRs)

### 🥇 #1298 — `skill-creator` Eval Pipeline Fix (MartinCajiao)
- **Functionality**: Repairs `run_eval.py` so that skill-description optimization (`run_loop.py`, `improve_description.py`) works against real signals instead of noise. Also fixes Windows stream reading, trigger detection, and parallel worker execution.
- **Discussion**: Directly fixes the **10+ reproductions of Issue #556** (12 comments) where every skill reports `recall=0%`. This is the highest-leverage PR because it unblocks the entire description-tuning loop across the marketplace.
- **Status**: OPEN — created 2026-06-10, last updated 2026-06-23.
- 🔗 [anthropics/skills#1298](https://github.com/anthropics/skills/pull/1298)

### 🥈 #514 — `document-typography` Skill (PGTBoos)
- **Functionality**: Typographic QC for AI-generated documents — prevents orphan-word wraps, widow headers, and numbering misalignment.
- **Discussion**: A universal-quality complaint ("affects every document Claude generates") with concrete triggers and broad relevance; one of the most broadly applicable submissions.
- **Status**: OPEN — 2026-03-04 → 2026-03-13.
- 🔗 [anthropics/skills#514](https://github.com/anthropics/skills/pull/514)

### 🥉 #1298 / PR Cluster — Windows Compatibility Sweep (#1099, #1050)
- **Functionality**: Two near-identical fixes for `skill-creator` on Windows 11 — `subprocess.Popen` failing on `claude.cmd`, encoding errors, and `WinError 10038` stream crashes.
- **Discussion**: Mirrors Issue #556 symptoms; convergent submissions from `joshuawowk` and `gstreet-ops` indicate broad Windows-user pain; likely to be consolidated with #1298.
- **Status**: OPEN (#1099 updated 2026-05-24; #1050 same).
- 🔗 [anthropics/skills#1099](https://github.com/anthropics/skills/pull/1099) · [#1050](https://github.com/anthropics/skills/pull/1050)

### 4️⃣ #1615 — `scnet-hpc` Skill (lql341)
- **Functionality**: Cluster operating system for SCNet HPC — profile-based SSH, Slurm job generation, module/accelerator guidance, compute-node discovery.
- **Discussion**: Tall, comprehensive PR for an enterprise/research niche; domain expertise requirement raises reviewer load.
- **Status**: OPEN — 2026-08-20 → 2026-08-24.
- 🔗 [anthropics/skills#1615](https://github.com/anthropics/skills/pull/1615)

### 5️⃣ #210 — Improved `frontend-design` Skill (justinwetch)
- **Functionality**: Rewrites the existing `frontend-design` skill for clarity, actionability, and single-conversation follow-through.
- **Discussion**: Long-standing complaint that official skills read like docs instead of actionable instructions; this PR leads by example.
- **Status**: OPEN — 2026-01-05 → 2026-03-07 (high dormancy).
- 🔗 [anthropics/skills#210](https://github.com/anthropics/skills/pull/210)

### 6️⃣ #1628 — `Hivemind` Multi-Agent Orchestration (Hanishchow)
- **Functionality**: Zero-cost orchestration that delegates mechanical work to headless opencode workers on free models, keeping Claude Code as planner/reviewer/merger.
- **Discussion**: Taps the "context is the scarce resource" insight; represents the **multi-agent orchestration** trend surfacing across multiple issues.
- **Status**: OPEN — 2026-08-21 → 2026-08-24.
- 🔗 [anthropics/skills#1628](https://github.com/anthropics/skills/pull/1628)

### 7️⃣ #568 — `ServiceNow` Platform Skill (Vanka07)
- **Functionality**: Broad ServiceNow coverage — ITSM, ITOM, ITAM/SAM, FSM, HRSD, SecOps, SPM/PPM, CSDM, IntegrationHub.
- **Discussion**: Enterprise-IT heavy lift; large surface area signals the corporate-IT demand for first-party skill support.
- **Status**: OPEN — 2026-03-08 → 2026-08-12 (long-lived but still pending).
- 🔗 [anthropics/skills#5618](https://github.com/anthropics/skills/pull/568)

### 8️⃣ #486 — `odt` OpenDocument Skill (GitHubNewbie0)
- **Functionality**: Create, fill, parse, and convert OpenDocument Format files (.odt, .ods) to HTML — a long-missing open-standard counterpart to the existing `pdf`/`docx` skills.
- **Discussion**: Fills a recurring open-format gap that complements enterprise and OSS workflows.
- **Status**: OPEN — 2026-03-01 → 2026-04-14.
- 🔗 [anthropics/skills#486](https://github.com/anthropics/skills/pull/486)

---

## 2. Community Demand Trends (from Issues)

| Rank | Theme | Anchor Issue | Comments | Signal |
|------|-------|--------------|----------|--------|
| 1 | **Skill trust / supply-chain security** | [#492](https://github.com/anthropics/skills/issues/492) | **43** | Community skills distributed under the `anthropic/` namespace impersonate official skills — top-voted governance concern. |
| 2 | **Organization-level skill sharing** | [#228](https://github.com/anthropics/skills/issues/228) | 16 | Users want native admin-distributed skill libraries instead of manual `.skill` file circulation. |
| 3 | **Reliability of the meta-loop (`skill-creator`)** | [#556](https://github.com/anthropics/skills/issues/556) | 12 | `run_eval.py` reporting `recall=0%` blocks the entire description-optimization loop. |
| 4 | **Skill discoverability / lifecycle UX** | [#62](https://github.com/anthropics/skills/issues/62) | 10 | Users lose custom skills silently after filesystem or upload changes. |
| 5 | **Compact / symbolic agent memory** | [#1329](https://github.com/anthropics/skills/issues/1329) | 9 | A proposed `compact-memory` skill to reduce prose-style notes that eat context windows. |
| 6 | **Skill specification & best-practice enforcement** | [#202](https://github.com/anthropics/skills/issues/202) | 8 | `skill-creator` itself reads like dev docs; needs to be operational and token-efficient. |
| 7 | **AI-agent governance & audit** | [#412](https://github.com/anthropics/skills/issues/412) | 6 | Proposal for `agent-governance` — policy enforcement, threat detection, trust scoring. |
| 8 | **Plugin/namespace de-duplication** | [#189](https://github.com/anthropics/skills/issues/189) | 6 | `document-skills` and `example-skills` install overlapping skills, wasting context. |
| 9 | **Context-window bloat from bundled skills** | [#1487](https://github.com/anthropics/skills/issues/1487) | 4 | `claude-api` injects ~156k tokens in one tool call, exhausting context. |
| 10 | **Skills ↔ MCP unification** | [#16](https://github.com/anthropics/skills/issues/16) | 4 | Long-running ask to expose skills as MCP servers for cross-agent reuse. |

**Emerging categories**:
- **Security/governance** (trust namespace, agent-governance, SharePoint ACL concerns [#1175]) — the *fastest-growing* cluster.
- **Cross-platform reliability** — Windows encoding/PATH issues dominate recent PR clusters.
- **Multi-agent & orchestration** — Hivemind (#1628), MCP exposure (#16), compact-memory (#1329).

---

## 3. High-Potential Pending Skills (Active PRs likely to land)

These PRs are still OPEN, address high-traffic Issues, and have concrete scope — good candidates for imminent merge:

| PR | Skill | Why it's likely to land |
|----|-------|------------------------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | `skill-creator` eval fix | Fixes Issue #556 (12 comments); unblocks the marketplace loop. |
| [#538](https://github.com/anthropics/skills/pull/538) | `pdf` case-sensitivity fix | Tiny, mechanical, low-risk patch. |
| [#539](https://github.com/anthropics/skills/pull/539) | `skill-creator` YAML warning | Pre-parse validation — minimal blast radius. |
| [#541](https://github.com/anthropics/skills/pull/541) | `docx` bookmark/w:id collision | Concrete corruption fix with clear root-cause explanation. |
| [#1607](https://github.com/anthropics/skills/pull/1607) | `claude-api` retired-model markup | Closes Issue #1603; pure documentation correctness. |
| [#1602](https://github.com/anthropics/skills/pull/1602) | `mcp-builder` eval metrics + encoding | Resolves Issue #1390 (4 comments) and improves skill-creator accuracy. |
| [#1367](https://github.com/anthropics/skills/pull/1367) | `self-audit` reasoning quality gate | Aligned with Issue #1385 proposal — meta-skill momentum. |
| [#1362…#1628](https://github.com/anthropics/skills/pull/1628) | Hivemind | New orchestration category — likely to draw maintainer discussion. |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is *operational reliability of the skill ecosystem itself* — fixing the broken `skill-creator` eval loop, deduplicating plugin namespaces, and establishing trust boundaries (e.g., namespace abuse, security, context-window bloat) — rather than yet more domain-specific skill content.** Every one of the top three issues concerns a *meta* problem: who can be trusted, how the loop is measured, and whether skills can be shared at enterprise scale.

---

*Report generated 2026-09-06 from anthropics/skills public activity. PR comment counts were not available in the source feed; trend conclusions are derived from issue engagement, cross-references between issues and PRs, and PR activity timestamps.*

---



# Claude Code Community Digest — 2026-09-06

## 1. Today's Highlights

No new releases were published in the last 24 hours. Community discussion remains concentrated on safety-guardrail false positives, billing discrepancies between Claude Code and claude.ai, and several tooling bugs affecting Linux Cowork and MCP OAuth flows. A single PR (#87079) addresses security-pattern glob matching depth.

## 2. Releases

No releases in the last 24 hours.

## 3. Hot Issues

**[Issue #69522](https://github.com/anthropics/claude-code/issues/69522)** — *InputValidationError: long unicode-escaped tool arguments fail JSON parse*
11 comments · 2 👍 · Closed. `AskUserQuestion` fails when tool arguments contain long unicode-escaped strings; shorter input succeeds. A reproducible parsing boundary bug that impacts any workflow relying on large structured prompts.

**[Issue #81896](https://github.com/anthropics/claude-code/issues/81896)** — *AI quoting tool output B2B cost as client price, causing real financial loss (NT$10,000+)*
9 comments · Closed. The model repeated raw tool-returned pricing data without distinguishing internal cost from client-facing price. Highlights the risk of unfiltered tool-output injection into client deliverables.

**[Issue #64557](https://github.com/anthropics/claude-code/issues/64557)** — *Billing: Max 5x plan incorrectly downgraded to Free mid-cycle, double-charged $230*
8 comments · Closed. Users report mid-cycle plan downgrades and duplicate charges. Continues a recurring billing-trust theme in the issue tracker.

**[Issue #74605](https://github.com/anthropics/claude-code/issues/74605)** — *Cowork "requires QEMU" on hosts with full KVM stack installed*
7 comments · 4 👍 · Closed. The bundled fallback gates on two specific path checks, causing false failures on Debian-based distros. Affects the Linux desktop community significantly.

**[Issue #77069](https://github.com/anthropics/claude-code/issues/77069)** — *Allow pre-approving EnterWorktree for paths outside .claude/worktrees/*
6 comments · 8 👍 · Open. Strong community support for a pattern-based permission rule in `settings.json`. Addresses a common workflow friction point for multi-repo developers.

**[Issue #70550](https://github.com/anthropics/claude-code/issues/70550)** — *Copying to clipboard prefers wl-copy*
6 comments · Closed. Linux Wayland clipboard selection mismatch. Low severity but high frequency for Wayland users.

**[Issue #76434](https://github.com/anthropics/claude-code/issues/76434)** — *Unintended safety flag on non-cybersecurity code audit request*
4 comments · 3 👍 · Closed. Opus 4.8 safety measures triggered on routine security-audit-style code review. Part of an ongoing pattern of over-flagging.

**[Issue #81923](https://github.com/anthropics/claude-code/issues/81923)** — *HTTP MCP OAuth reconnect fails with "MCP endpoint not found"*
3 comments · Closed. OAuth token exchange succeeds but subsequent reconnect fails. Blocks remote MCP server workflows using HTTP transport.

**[Issue #81679](https://github.com/anthropics/claude-code/issues/81679)** — */insights command generates empty report despite 98 analyzed sessions*
2 comments · 3 👍 · Closed. The `/insights` command returned a near-empty report from substantial session history (~803h logged). Suggests a data-pipeline or aggregation bug.

**[Issue #81545](https://github.com/anthropics/claude-code/issues/81545)** — *Non-interactive login: no programmatic way to obtain auth URL*
2 comments · 1 👍 · Closed. `claude auth login` is TUI-only; no `--json` or `--print-url` flag exists. A blocks CI/container deployment scenarios.

## 4. Key PR Progress

**[PR #87079](https://github.com/anthropics/claude-code/pull/87079)** — *fix(security-guidance): make `**` glob patterns match zero-depth paths*
Open. Fixes a silent security-surface gap: `fnmatch` delegation meant `**/*.ts` excluded top-level `.ts` files because a bare `*` already crosses `/`. Since these guard security-pattern rules, the bug silently disabled protection for root-level files.

*(No other PRs were open in the last 24 hours.)*

## 5. Feature Request Trends

- **Permission granularity:** Pre-approving worktree paths by pattern (#77069) and suppressing scheduled-task notifications (#75078) reflect demand for finer-grained, config-driven permission control.
- **Session organization:** Custom groups/folders for the sidebar (#81914) addresses growing pain as users accumulate hundreds of sessions across projects.
- **Non-interactive / headless auth:** A reusable `--print-url` or `--json` auth flow (#81545) is repeatedly needed for CI, containers, and web UI provisioning.
- **Insights & observability:** Empty or shallow `/insights` reports (#81679) suggest users want richer, more reliable usage analytics out of the box.

## 6. Developer Pain Points

1. **Safety-guardrail false positives** — Multiple issues (#76434, #81581, #81900) report legitimate cybersecurity, sandbox-escape, and coding tasks flagged by Opus safeguards, forcing model downgrades and blocking work. This is the single most recurrent complaint.
2. **Billing & credit inconsistencies** — Discrepancies between Claude Code/VS Code extensions and claude.ai dashboards (#64557, #81922, #81941) erode trust; users are being blocked or double-charged while web usage appears normal.
3. **Model reliability under high effort** — Reports of hallucinated code (#81951), unrequested destructive actions (#81890), and multi-minute silent stalls (#81909) on `claude-fable-5` and Opus suggest consistency gaps at higher effort tiers.
4. **Tool-output injection risks** — Unfiltered or misinterpreted tool output leads to real-world harm (#81896), pointing to a need for clearer output-sanitization guidelines or built-in guardrails.
5. **Linux/Wayland platform gaps** — Cowork QEMU probe bugs (#74605) and clipboard preference mismatches (#70550) indicate Linux desktop parity is still a work in progress.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>



# OpenAI Codex Community Digest — 2026-09-06

## 1. Today's Highlights

The Codex team shipped **v0.153.4**, fixing Astra's visibility in the bundled model picker and making it the default when no model is configured, alongside a synchronization fix for Astra's guidance questions. Community attention is dominated by a persistent Windows + WSL project-creation regression (29 comments, 19 👍) and a macOS memory-leak crisis where Codex/ChatGPT peaks at 40–59 GB under runaway subprocess activity. A broader wave of desktop-app stability reports—flickering on Windows and macOS, ghost conversations, and pet hit-testing breakage—signals ongoing polish work ahead of the 26.9xx release train.

---

## 2. Releases

### rust-v0.153.4
**Bug Fixes:**
- **Astra visibility fix** (#42874): Astra is now correctly visible in the bundled model picker and set as the default when no model is explicitly configured.
- **Astra async guidance** (#42878): Astra's guidance now uses asynchronous questions only when the tool is available in the session.

🔗 Full Changelog: [github.com/openai/codex/releases](https://github.com/openai/codex)

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| [#41463](https://github.com/openai/codex/issues/41463) | **[Windows + WSL] Cannot create projects – AbsolutePathBuf deserialized without a base path** | Project creation is a core workflow; this break blocks new-user onboarding and any WSL-based development pipeline on Windows. | 29 comments · 19 👍 — high frustration; multiple users reporting the same migration error. |
| [#35994](https://github.com/openai/codex/issues/35994) | **Repeatable macOS OOM: Codex/ChatGPT reaches 40–59 GB with runaway subprocess activity** | Memory exhaustion on Apple Silicon makes the app unusable for long sessions; suggests a subprocess leak or fork bomb. | 9 comments · 1 👍 — alarming memory profiles shared; demand for investigation. |
| [#33192](https://github.com/openai/codex/issues/33192) | **[Windows 10] DWM Composition handles accumulate after Codex tasks with tool calls** | Handle leak tied to terminal tool calls; over time this degrades Windows compositor performance and can crash the desktop. | 19 comments · 10 👍 — controlled reproduction data shared; strong signal for a resource-leak bug. |
| [#18396](https://github.com/openai/codex/issues/18396) | **Add way to hide tool calls/output in TUI** | Power users want a cleaner terminal view; current TUI floods output with tool call traces. | 12 comments · 30 👍 — the most-upvoted open issue; clear community demand for a toggle or mode. |
| [#42661](https://github.com/openai/codex/issues/42661) | **[Windows][Pets] Input region is offset; pet stays click-through after Windows reboots** | Desktop pet interactivity is broken post-reboot on multi-monitor setups; affects UX polish severely. | 9 comments · 3 👍 |
| [#42583](https://github.com/openai/codex/issues/42583) | **[macOS][Chat] Composer disappears after first message until new window or app relaunch** | Core chat input vanishes, effectively breaking the app until restart—a severe usability regression. | 8 comments · 6 👍 |
| [#42190](https://github.com/openai/codex/issues/42190) | **[Windows] Desktop pet hit-testing and dragging break after moving or resizing the pet** | Another pet interactivity bug; input passes through to underlying windows, making the pet non-interactive after any resize/drag. | 8 comments · 2 👍 |
| [#41486](https://github.com/openai/codex/issues/41486) | **Codex App sends Z:\AREA_01 to the model as Z:\AREA\_01 while UI displays it correctly** | Client-side path serialization bug; the UI shows the correct path but the model receives a corrupted one, causing confusion and errors. | 7 comments · 3 👍 |
| [#42984](https://github.com/openai/codex/issues/42984) | **[Windows app][WSL2] Project creation fails after switching from Windows native; AbsolutePathBuf migration error** | Directly related to #41463; confirms the bug triggers when switching environments mid-session. | 4 comments — same day report; reinforces urgency. |
| [#41661](https://github.com/openai/codex/issues/41661) | **Deleted conversations remain stuck in Recents on macOS desktop app** | Ghost entries persist locally despite server-side deletion; confuses users and clutters the sidebar. | 6 comments · 0 👍 |

---

## 4. Key PR Progress

| # | PR | Description |
|---|----|-------------|
| [#43113](https://github.com/openai/codex/pull/43113) | **Save subagent and memory opt-ins through the app server** | Routes TUI subagent/memory prompts through server config writes for new threads, with success/override/failure reporting. Keeps current thread unchanged. |
| [#43110](https://github.com/openai/codex/pull/43110) | **Record reasoning effort changes in conversation history behind a flag** | Adds disabled-by-default `reasoning_effort_override` feature for OpenAI models with `use_responses_lite`. Appends a trusted `configuration_update` after accepted input. |
| [#43104](https://github.com/openai/codex/pull/43104) | **Move Guardian thread context into `guardianv2` configuration** | Replaces `features.guardian_thread_context` with `features.guardianv2.thread_context`; updates config schema. Controls thread-owned context for sync/async Guardian. |
| [#43097](https://github.com/openai/codex/pull/43097) | **Add a helper-backed realtime WebRTC session API** | Introduces `RealtimeWebrtcSession` with cloneable handles for startup, answer negotiation, audio controls, level meters, and error reporting. Opens devices post-negotiation. |
| [#43100](https://github.com/openai/codex/pull/43100) | **Add bounded incoming Opus RTP handling to the voice host** | Intercepts incoming Opus RTP before the upstream track queue, preserving timestamps. Limits outstanding media to 64 packets / 2 MiB with 64 KiB per-packet cap. |
| [#43090](https://github.com/openai/codex/pull/43090) | **Send processed microphone audio over RTP in voice-host** | Fixes a bug where captured audio was drained locally without being sent to the peer. Resamples capture/render and limits stale audio. |
| [#43079](https://github.com/openai/codex/pull/43079) | **Add opt-in local audio devices to the voice helper** | Adds `openDevices` and `setAudioControls` to the helper protocol. Uses CPAL on macOS/Linux; opens default mic/speaker post-initialization, initially muted. |
| [#43069](https://github.com/openai/codex/pull/43069) | **Support managed worktrees for interactive sessions and forks** | Extends `--worktree` support beyond `codex exec` to interactive sessions and forks, resolving configuration and policy for the destination before starting a turn. |
| [#43055](https://github.com/openai/codex/pull/43055) | **Allow `/copy` to copy status output and individual fields** | Expands `/copy` beyond assistant responses to include `/status` output, model name, and directory path as selectable plain-text fields. |
| [#43043](https://github.com/openai/codex/pull/43043) | **Avoid filesystem scans when seeding the agents overview** | Sets `use_state_db_only: true` on initial recent-thread list requests so the agents overview uses the state DB instead of triggering a startup filesystem scan. |

---

## 5. Feature Request Trends

- **TUI cleanliness & control:** Issue #18396 (30 👍) reflects sustained demand for a toggle to hide tool-call traces in the terminal UI, suggesting a "compact mode" or verbosity flag is a high-priority community ask.
- **Reasoning-effort granularity:** PR #43110 indicates the team is moving toward per-conversation reasoning-effort tracking, responding to power-user demand for fine-tuned cost/performance trade-offs.
- **Voice & WebRTC infrastructure:** A cluster of PRs (#43097, #43100, #43090, #43079) points to an active push to stabilize the real-time voice pipeline—bounded RTP, local audio device control, and a proper WebRTC session API.
- **Server-side state persistence:** PR #43113 and #43069 show a trend toward centralizing configuration (subagent/memory opt-ins, worktree state) through the app server rather than local-only storage, improving cross-session consistency.
- **Guardian V2 observability:** PR #43005 and #43104 signal that the Guardian safety layer is being refactored with better failure classification and thread-context scoping.

---

## 6. Developer Pain Points

- **Windows + WSL project-creation regression:** Two related issues (#41463, #42984) describe the same `AbsolutePathBuf` deserialization bug that blocks project creation on Windows, especially after switching between native and WSL environments. This is the most impactful open bug this cycle.
- **macOS memory leaks:** Issue #35994 reports repeatable OOM with 40–59 GB RSS, pointing to unbounded subprocess spawning or a goroutine/child-process leak under long sessions.
- **Windows DWM handle leak:** Issue #33192 documents a persistent accumulation of Composition handles after tool-call tasks, degrading Windows desktop performance over time.
- **Desktop pet interactivity regressions:** Two separate bugs (#42661, #42190, #42945) show that the desktop pet's hit-testing and click-through behavior breaks after resize, drag, or reboot—suggesting a fragile window-subclassing or DPI-handling implementation.
- **Ghost/synced conversation state:** Multiple issues (#41661, #42768, #43107, #42971) report stale or orphaned conversation entries across platforms after deletion, account switch, or restart, indicating a client-server state synchronization gap.
- **Path serialization on Windows:** Issue #41486 reveals that the desktop app corrupts backslash-heavy paths before sending them to the model, a subtle but frustrating bug for Windows users with non-standard drive layouts.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI Community Digest — 2026-09-06**

### 1. Today's Highlights
Nightly v0.60.0 shipped with tighter extension security and safer workspace path handling, including symlink resolution improvements. Meanwhile, issue activity is dominated by agent reliability, with high-priority bugs around subagent false successes, generalist hangs, and shell execution stalls drawing the most community attention.

### 2. Releases
- **[v0.60.0-nightly.20260905.g85aca163f](https://github.com/google-gemini/gemini-cli/releases/tag/v0.60.0-nightly.20260905.g85aca163f)** — This nightly hardens extension security by prompting for user consent before environment changes and sanitizing runtime-altering variables. It also improves core workspace path boundary checks and refines symlink resolution for command safety.

### 3. Hot Issues

- **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** — **Subagent recovery after MAX_TURNS reported as GOAL success**  
  A critical P1 bug where subagents hit the turn limit yet return `status: "success"`, masking interruptions. With 13 comments, this is a top trust issue for autonomous workflows.

- **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)** — **Zero-Dependency OS Sandboxing & Post-Execution Intent Routing**  
  A large-effort enhancement to leverage Gemini 3’s native bash affinity inside a secure sandbox. Nine comments reflect strong demand for safe, model-driven POSIX toolchains.

- **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** — **Generalist agent hangs**  
  The generalist agent hangs indefinitely on simple tasks unless subagents are disabled. Eight comments and 8 upvotes make this the most visceral reliability pain point this cycle.

- **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** — **Assess impact of AST-aware file reads, search, and mapping**  
  An EPIC investigating semantic code navigation to reduce token bloat and misaligned reads. Seven comments show interest in precision tooling over brute-force file dumps.

- **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** — **Gemini does not use skills and sub-agents enough**  
  Users report that custom skills (e.g., gradle, git) are ignored unless explicitly instructed. Six comments highlight a gap between capability and autonomous utilization.

- **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)** — **Add deterministic redaction and reduce Auto Memory logging**  
  A security P2 noting that Auto Memory sends transcript content to models before secret redaction occurs. Five comments underline privacy concerns with background extraction.

- **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** — **Shell command execution stuck "Waiting input"**  
  Simple shell commands hang with a misleading "Awaiting user input" state after completion. Four comments and 3 upvotes signal core execution layer instability.

- **[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)** — **Enhance browser_agent resilience**  
  Requests automatic recovery when browser profiles are locked. Four comments indicate browser automation remains fragile in real-world persistent-session workflows.

- **[#22186](https://github.com/google-gemini/gemini-cli/issues/22186)** — **get-shit-done output hook causes crash**  
  A P1 crash triggered near the end of output generation. Despite only 3 comments, its severity makes it a top stability concern.

- **[#20079](https://github.com/google-gemini/gemini-cli/issues/20079)** — **Symlinked agent definitions not recognized**  
  Symlinks in `~/.gemini/agents/` are silently ignored. Four comments show this small DX papercut blocks modular agent configurations.

### 4. Key PR Progress

- **[#29222](https://github.com/google-gemini/gemini-cli/pull/29222)** — **Prevent rewriting explicitly pinned flash models**  
  Fixes a P1 config bug where `--model gemini-2.5-flash` was silently upgraded to 3.5-flash, breaking backends without GA access.

- **[#29211](https://github.com/google-gemini/gemini-cli/pull/29211)** — **Stop scheduling state updates from inside a state updater**  
  Eliminates a React violation where `useInputHistoryStore` nested `setState` calls inside updaters, preventing undefined re-render behavior.

- **[#29200](https://github.com/google-gemini/gemini-cli/pull/29200)** — **Enforce MCP policy consistently at runtime**  
  Aligns MCP server allowlist checks with case-insensitive matching and treats an explicit empty `mcp.allowed` list as fail-closed. Enterprise/non-interactive hardening.

- **[#29118](https://github.com/google-gemini/gemini-cli/pull/29118)** — **Only strip trailing .git suffix in extension repo parsing**  
  Stops over-eagerly stripping `.git` from repository names like `blog.github.io`. A targeted extensions fix.

- **[#29215](https://github.com/google-gemini/gemini-cli/pull/29215)** — **Enforce envelope metadata provenance for untrusted tool outputs**  
  Hardens the core prompt to derive author identity only from verified envelope metadata, mitigating MCP/tool output spoofing risks.

- **[#29116](https://github.com/google-gemini/gemini-cli/pull/29116)** — **Mitigate NTFS 8.3 short name path traversal**  
  Adds normalization for Windows SFNs (`git~1`, `env~1`, etc.) in the `AllowedPathChecker` safety engine, closing sandbox escape avenues.

- **[#29114](https://github.com/google-gemini/gemini-cli/pull/29114)** — **Prevent duplicate handleExit on spawn failure**  
  Adds a re-entrancy guard in `shellExecutionService` when Node.js fires both `error` and `close` events, preventing phantom process states.

- **[#29110](https://github.com/google-gemini/gemini-cli/pull/29110)** — **Route read_file content through FileSystemService**  
  Fixes an architectural gap where `read_file` bypassed the injected `FileSystemService`, breaking ACP clients that advertise remote read capabilities.

- **[#29216](https://github.com/google-gemini/gemini-cli/pull/29216)** — **Isolate settings directory in sandbox containers**  
  Stops mounting the host `~/.gemini` into Docker/Podman sandboxes, preventing OAuth tokens and credentials from leaking into containers.

- **[#29218](https://github.com/google-gemini/gemini-cli/pull/29218)** — **Version bump to v0.60.0-nightly**  
  Automated nightly release cut anchoring today’s build.

### 5. Feature Request Trends
- **AST-aware code intelligence**: Multiple issues explore semantic parsing ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) to replace brute-force reads with precise method-bound extraction and navigation.
- **Subagent observability & control**: The community wants trajectory sharing ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)), correct MAX_TURNS handling ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)), and richer bug-report context for subagents ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)).
- **Security & sandboxing**: Zero-dependency OS sandboxing ([#19873](https://github.com/google-gemini/gemini-cli/issues/19873)), deterministic secret redaction ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)), and container credential isolation ([#29216](https://github.com/google-gemini/gemini-cli/pull/29216)) are trending.
- **Native POSIX/bash workflows**: Leveraging Gemini 3’s bash affinity via sandboxed shell execution and post-execution intent routing ([#19873](https://github.com/google-gemini/gemini-cli/issues/19873)).

### 6. Developer Pain Points
- **Agent hangs & false progress**: Generalist agent stalls ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), shell commands hang ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166), [#22465](https://github.com/google-gemini/gemini-cli/issues/22465)), and subagents falsely claim success after hitting limits ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)).
- **Subagent adoption gaps**: Custom skills and sub-agents are underutilized unless explicitly prompted ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)), suggesting routing and prompting logic needs refinement.
- **Tooling & model limits**: Hitting 400 errors with >128 tools ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)) and silent model rewrites ([#29222](https://github.com/google-gemini/gemini-cli/pull/29222)) break large-project workflows.
- **Workspace & filesystem hygiene**: Temporary scripts scattered across directories ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)), symlink handling ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079), [#29116](https://github.com/google-gemini/gemini-cli/pull/29116)), and path boundary quirks remain frequent papercuts.
- **Browser agent fragility**: Wayland failures ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)), ignored `settings.json` overrides ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)), and profile-lock crashes ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232)) make browser automation unreliable.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest – 2026‑09‑06**  
*Compiled from the latest activity in github.com/github/copilot-cli*

---

### 1. Today's Highlights
- The CLI shipped **v1.0.84‑1**, adding experimental support for the newly released **GPT‑6 Astra** model.  
- Meanwhile, the community is surfacing a cluster of stability and usability pain points: frequent JavaScript‑heap out‑of‑memory crashes on Linux, broken clipboard sync on macOS remote sessions, and input‑queue/keyboard‑handling bugs (Ctrl+H mis‑behaviour on WSL2, leading‑underscore stripping, inability to cancel enqueued messages). These topics dominate the open‑issue discussion and signal where developer effort is most needed.

### 2. Releases
| Version | Date | Highlights |
|---------|------|------------|
| **v1.0.84‑1** | 2026‑09‑05 | • **Added** support for **GPT‑6 Astra** (experimental flag). No other changes noted in the release notes. |

[Release v1.0.84‑1](https://github.com/github/copilot-cli/releases/tag/v1.0.84-1)

### 3. Hot Issues (10 picks)

| # | Issue | Why it matters / Community reaction |
|---|-------|--------------------------------------|
| **[#1857](https://github.com/github/copilot-cli/issues/1857)** | *Allow users to cancel or remove enqueued messages before they are executed* | Long‑standing request (28 👍, 11 comments). Users need a way to abort queued slash commands while the agent is busy (e.g., during `/compact`). Lack of cancellation leads to wasted compute and frustrating UX. |
| **[#4328](https://github.com/github/copilot-cli/issues/4328)** | *Ctrl+H (delete previous character) misinterpreted as Ctrl+Backspace under WSL2* | Affects developers using WSL2 + Windows Terminal; the keybinding docs are wrong. 0 👍 but 7 comments indicate active debugging; fixing would restore reliable editing experience. |
| **[#4652](https://github.com/github/copilot-cli/issues/4652)** | *Sandboxing is enabled but is not supported on this host* (Windows 25H2) | New Windows build triggers a warning that sandboxed commands will fail. 0 👍, 2 comments – early adopters are hitting a blocker for experimental sandbox workflows. |
| **[#4725](https://github.com/github/copilot-cli/issues/4725)** | *Frequent JavaScript heap out of memory* (Linux) | Crash loop every few minutes; 0 👍, 1 comment but the stack trace shows V8 mark‑compact failures. Memory stability is a top priority for production‑grade CLI usage. |
| **[#4551](https://github.com/github/copilot-cli/issues/4551)** | *Remote SSH session reports “Copied” but clipboard remains empty on macOS* | Breaks copy‑paste from remote Linux hosts to macOS Terminal. 1 👍, 1 comment – a regression that hampers everyday workflow. |
| **[#3498](https://github.com/github/copilot-cli/issues/3498)** | *Remote session UI does not render on GitHub Mobile app (Android)* | Push notifications work but UI stays blank. 3 👍, 1 comment – limits mobile‑first monitoring of CLI sessions. |
| **[#4722](https://github.com/github/copilot-cli/issues/4722)** | *Leading underscores vanish in chat bubbles due to Markdown parsing* | Affects naming conventions (e.g., `_test`). 0 👍, 0 comments – a subtle but annoying rendering bug that confuses users. |
| **[#4724](https://github.com/github/copilot-cli/issues/4724)** | *Auto‑compact on idle, aligned to model’s prompt‑cache TTL* | Feature request to reduce latency after idle periods. 0 👍, 0 comments – indicates desire for smarter context management. |
| **[#4731](https://github.com/github/copilot-cli/issues/4731)** | *tools/list refresh dispatched into a just‑cancelled server times out and strips tools* | MCP‑related reliability issue; 0 👍, 0 comments – could cause permanent loss of tool definitions in long‑running sessions. |
| **[#4733](https://github.com/github/copilot-cli/issues/4733)** | *When max_output_tokens is hit, some events are not emitted/logged* | Affects BYOK/custom provider usage; 0 👍, 0 comments – leads to missing telemetry and confusing truncation behaviour. |

### 4. Key PR Progress
- **No pull requests were updated in the last 24 hours** (0 items).  
  Consequently, there are no recent code‑landings to highlight; activity is currently concentrated in issue triage and discussion.

### 5. Feature Request Trends
From the open issues, the most‑requested directions are:
1. **Robust input‑queue control** – ability to cancel/edit enqueued commands or messages (#1857).  
2. **Cross‑platform keyboard handling** – fix WSL2/Windows Terminal key‑binding quirks (#4328) and prevent Markdown‑driven stripping of leading underscores (#4722).  
3. **Sandbox & platform support** – ensure `--sandbox` works on latest Windows builds and improve WSL2 compatibility (#4652).  
4. **Memory & stability** – eliminate JavaScript heap out‑of‑memory crashes on Linux (#4725) and improve overall process resilience.  
5. **Reliable clipboard & UI** – fix macOS remote‑session copy (#4551) and restore mobile‑app session rendering (#3498).  
6. **Smart context management** – auto‑compact aligned to prompt‑cache TTL to reduce latency after idle gaps (#4724).  
7. **MCP/tool‑call resilience** – prevent tool‑list refreshes from timing out after a cancelled call (#4731).  
8. **Correct event emission on token limits** – ensure all events are logged when `max_output_tokens` is hit (#4733).  

### 6. Developer Pain Points
- **Input & editing frustrations** – misbehaving keybindings (Ctrl+H, leading underscores) and no way to abort queued actions break the flow of interactive work.  
- **Stability & resource usage** – frequent V8 heap crashes on Linux force developers to restart the CLI repeatedly, eroding trust in the tool for long‑running sessions.  
- **Platform‑specific blockers** – sandbox warnings on Windows 25H2 and WSL2 key‑translation issues limit adoption on Microsoft‑centric dev environments.  
- **Remote‑session reliability** – clipboard loss on macOS and missing UI on GitHub Mobile hinder cross‑device workflows.  
- **Model & tool management** – new models sometimes appear greyed out due to policy messages, and MCP tool definitions can disappear after timeouts, requiring manual re‑setup.  
- **Session & worktree handling** – upgrades occasionally leave sessions with a “Worktree missing” state, forcing recreation and losing context.  

*Addressing these pain points—particularly input queue control, memory stability, and cross‑platform keyboard/clipboard fidelity—will likely yield the highest impact for the Copilot CLI developer community.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest – 2026-09-06

---

### **Today's Highlights**

No new releases were published in the last 24 hours. Activity focused on a documentation enhancement request and a reported rendering bug in the VS Code extension. Community engagement remains active around improving integration workflows and stability.

---

### **Releases**

None within the last 24 hours.

---

### **Hot Issues**

1. **[Issue #1210](https://github.com/MoonshotAI/kimi-cli/issues/1210)** *(Enhancement, Closed)*  
   **Title**: Improve documentation for usage in third-party coding agents  
   **Why it matters**: Highlights lack of clarity on integrating `kimi-cli` with tools like Claude Code; suggests adopting patterns from Zhipu AI docs.  
   **Community reaction**: Low traction (0 thumbs up), but reflects broader need for clearer cross-tool guidance.

2. **[Issue #2635](https://github.com/MoonshotAI/kimi-cli/issues/2635)** *(Bug Report, Open)*  
   **Title**: Streamed chat text drops individual characters in VS Code panel  
   **Why it matters**: Impacts developer experience when copying or reviewing streamed output directly from the extension UI.  
   **Community reaction**: Newly opened; no comments or reactions yet.

*(Only 2 issues updated in last 24h — insufficient data to reach list of 10.)*

---

### **Key PR Progress**

No pull requests updated in the last 24 hours.

---

### **Feature Request Trends**

- **Improved Documentation for Integrations**: One user requested better instructions for using `kimi-cli` in third-party environments like [Claude Code](https://docs.anthropic.com/en/Claude-Code), including streamlined auth via model selection tips and simplified env setup.
- **Stabilize Extension Rendering Layer**: A recent bug report points to missing character rendering in the VS Code chat view, indicating potential issues with how streamed tokens are displayed during real-time interaction.

---

### **Developer Pain Points**

- **Manual Environment Setup Overload**: Repetitive export statements or variable configuration required per session reduce workflow efficiency.
- **Inconsistent Text Display in Extensions**: Character drops or incomplete rendering in GUI panels can cause trust issues with output fidelity.

--- 

*End of Digest*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-06

## 1. Today's Highlights

- **v1.18.29 shipped** with Codex OAuth fixes that restore GPT-6 visibility for OpenAI subscription users — particularly impactful for users who lost access to `gpt-6-astra`.
- **Memory & stability remain the dominant theme** — the long-running memory megathread (140 comments, 108 👍) continues to lead community discussion, while new reports flag silent token caps, restart loops, and OpenCode Go quota/billing inconsistencies.
- **v2 architecture work is progressing** with PRs landing around event subscription scoping, manual session compaction, and a `/handoff` command, signalling the core team's push toward the 2.0 milestone.

---

## 2. Releases

### [v1.18.29](https://github.com/anomalyco/opencode/releases/tag/v1.18.29)

**Core / Bugfixes**
- Codex OAuth model filtering now recognizes integer GPT versions (e.g. `gpt-6`).
- Restores `gpt-6-astra` visibility for OpenAI subscription users.
- Chinese docs: bold rendering fixed by adding surrounding spaces. Thanks to **@Peter267** and 1 other contributor.

---

## 3. Hot Issues

| # | Issue | Why it matters | Reaction |
|---|-------|----------------|----------|
| [#20695](https://github.com/anomalyco/opencode/issues/20695) | **Memory Megathread** | Centralized tracking for scattered memory/CPU/leak reports; maintainers explicitly request heap snapshots (manual or auto) over LLM suggestions. The largest open thread in the repo. | 💬 140 / 👍 108 |
| [#29363](https://github.com/anomalyco/opencode/issues/29363) | **`limit.output` silently capped at 32k** | User-configured output token limits are overridden, with only an experimental env var as workaround. Blocks DeepSeek-384k / Claude-128k workflows. | 💬 19 / 👍 17 |
| [#19466](https://github.com/anomalyco/opencode/issues/19466) | **OpenCode burns ~50% CPU while idle** | Reproducible idle CPU burn during rate-limit backoff on i9-14900. Indicates a busy-loop or polling regression. | 💬 17 / 👍 16 |
| [#35486](https://github.com/anomalyco/opencode/issues/35486) | **Internal Server Error on DeepSeek v4 Flash** | Persists across cache clears and new sessions — suggests a server-side or auth-handling regression rather than local state. | 💬 14 |
| [#27963](https://github.com/anomalyco/opencode/issues/27963) | **Corrupted Windows executable (v1.15.3)** | Binary fails to launch on Windows 10/11 with "not a valid application for this OS" — a release-blocker for Windows users. | 💬 11 / 👍 6 |
| [#37891](https://github.com/anomalyco/opencode/issues/37891) | **Non-clickable file paths in desktop chat** | File/folder chips and `file://` links render but do nothing — breaks the basic "open in editor / reveal in Finder" expectation. | 💬 7 |
| [#37239](https://github.com/anomalyco/opencode/issues/37239) | **v2 service restart retry loop** | `opencode2 service restart` spawns `serve --service` ~16 times over 2.5 minutes, dying silently — users must manually kill processes. | 💬 6 |
| [#47168](https://github.com/anomalyco/opencode/issues/47168) | **`commentary` channel unimplemented in gpt.txt** | GPT system prompt instructs progress updates on a `commentary` channel that isn't implemented; chat-completions providers terminate the turn on each update. | 💬 4 |
| [#43584](https://github.com/anomalyco/opencode/issues/43584) | **Zen gateway drops Muse Spark 1.2 reasoning stream** | Reasoning tokens are silently dropped for both `/v1/chat/completions` and `/v1/responses`, hurting transparency for OpenAI-compatible clients. | 💬 3 / 👍 2 |
| [#47511](https://github.com/anomalyco/opencode/issues/47511) | **Deceptive messaging** *(dup of #36265)* | User-reported concern about misleading UI/messaging; flagged as duplicate but signal of trust issues. | 💬 2 |

---

## 4. Key PR Progress

| PR | Title | Why it matters |
|----|-------|----------------|
| [#40727](https://github.com/anomalyco/opencode/pull/40727) | **fix(tui): plain text paste** | New `prompt.paste_plain` (Ctrl+Alt+V) inserts clipboard text without auto-converting image/PDF paths — closes #34006. |
| [#40708](https://github.com/anomalyco/opencode/pull/40708) | **fix(console): reuse workspace Stripe customers** | Reserves one canonical Stripe customer per workspace with idempotent creation; fixes concurrent Checkout / Zen credit / Go subscription races. |
| [#40706](https://github.com/anomalyco/opencode/pull/40706) | **fix(ai): normalize loose provider usage** | Tolerates nullable usage fields, indexless OpenAI tool-call deltas, and preserves Gemini/Anthropic modality details — broader provider robustness. |
| [#40674](https://github.com/anomalyco/opencode/pull/40674) | **feat(tui): skill UX improvements** | Multi-select skill commands, compact display, and slash-command dedupe — reduces TUI noise from full `SKILL.md` injection. |
| [#40669](https://github.com/anomalyco/opencode/pull/40669) | **fix(shell): stop aborted commands after output** | Tightens abort path so streaming-output aborts actually terminate the child — closes #39565. |
| [#40654](https://github.com/anomalyco/opencode/pull/40654) | **fix(acp): surface subagent activity** | Forwards foreground subagent messages/tools to the root ACP session with namespaced tool calls and unified permission routing. |
| [#40601](https://github.com/anomalyco/opencode/pull/40601) | **feat(core): V2 manual compaction** | Adds explicit manual compaction on top of automatic request-budget compaction — addresses a tracked v2 spec gap. |
| [#40578](https://github.com/anomalyco/opencode/pull/40578) | **feat(session): /handoff command** | Slash command to hand off session context to a new agent/fork with compressed-tail handling — closes #26757. |
| [#40566](https://github.com/anomalyco/opencode/pull/40566) | **feat(core): preserve compaction tail media** | Bumps retained compaction context 8K→15K and preserves image/audio/video/PDF attachments in the checkpoint user message. |
| [#40606](https://github.com/anomalyco/opencode/pull/40606) | **fix(core): classify git worktree errors locale-independently** | Replaces English stderr matching with locale-independent classification for `--force` decisions — avoids silent failures on non-English systems. |

---

## 5. Feature Request Trends

Distilled across active issues and PRs, the community is consistently pushing toward:

1. **Smarter desktop & web UX** — clickable file paths in chat ([#37891](https://github.com/anomalyco/opencode/issues/37891)), image paste/drag-drop in v2 TUI ([#44310](https://github.com/anomalyco/opencode/issues/44310)), inline conversation visualizations ([#40582](https://github.com/anomalyco/opencode/pull/40582)), and web-UI Notifications API ([#47479](https://github.com/anomalyco/opencode/issues/47479)).
2. **Session lifecycle & context control** — `/handoff` ([#40578](https://github.com/anomalyco/opencode/pull/40578)), V2 manual compaction ([#40601](https://github.com/anomalyco/opencode/pull/40578))), and longer/honored `limit.output` token budgets ([#29363](https://github.com/anomalyco/opencode/issues/29363)).
3. **Multilingual ecosystem** — Swedish community translation ([#40717](https://github.com/anomalyco/opencode/pull/40717)), Chinese docs polish (v1.18.29), and per-language rendering fixes.
4. **Runtime upgrades & install improvements** — Bun 1.3.14 → 1.4.2 ([#44945](https://github.com/anomalyco/opencode/issues/44945)), and `GITHUB_TOKEN` auth in the install script to dodge anonymous rate limits ([#40590](https://github.com/anomalyco/opencode/pull/40590)).
5. **Plugin extensibility** — ACP subagent surfacing ([#40654](https://github.com/anomalyco/opencode/pull/40554)), `permission.evaluate` hook correctness ([#47495](https://github.com/anomalyco/opencode/issues/47495)), `Shell.create` session attribution ([#40668](https://github.com/anomalyco/opencode/pull/40668)), and ecosystem listings ([#40714](https://github.com/anomalyco/opencode/pull/40714)).
6. **Operational transparency** — outage/status dashboards ([#40630](https://github.com/anomalyco/opencode/pull/40630)) and reasoning/thinking stream fidelity for Zen models ([#43584](https://github.com/anomalyco/opencode/issues/43584)).

---

## 6. Developer Pain Points

The same frustrations appear across multiple threads and reflect systemic gaps:

- **Memory, CPU, and stability regressions** — The [#20695 memory megathread](https://github.com/anomalyco/opencode/issues/20695) plus [#19466 idle CPU burn](https://github.com/anomalyco/opencode/issues/19466) show long-standing issues with resource consumption under backoff, idle, and long-running sessions.
- **Silent configuration overrides** — [#29363](https://github.com/anomalyco/opencode/issues/29363) and [#46111](https://github.com/anomalyco/opencode/issues/46111) (injected prompts silently switching agent/model) reveal a pattern of user config being quietly ignored in favor of internal defaults.
- **v2 service reliability** — [#37239 restart loops](https://github.com/anomalyco/opencode/issues/37239) and [#47535 web bugs](https://github.com/anomalyco/opencode/issues/47535) (frozen sessions, restricted `~` paths) make v2 feel unstable for early adopters.
- **OpenCode Go billing & quota confusion** — [#44851](https://github.com/anomalyco/opencode/issues/44851) (subscription not reactivated after payment), [#47491](https://github.com/anomalyco/opencode/issues/47491)/[#47492](https://github.com/anomalyco/opencode/issues/47492) (quota miscounted as % vs $), [#47500](https://github.com/anomalyco/opencode/issues/47500) (SSE 4028 instability on DeepSeek v4 Flash) point to fragile payment/usage telemetry.
- **Platform-specific breakage** — [#27963 Windows binary corruption](https://github.com/anomalyco/opencode/issues/27963) and [#46981 infinite loading on Pop!_OS](https://github.com/anomalyco/opencode/issues/46981) highlight uneven QA across OS targets.
- **Provider/protocol friction** — [#47496 metadata → xAI Grok 422](https://github.com/anomalyco/opencode/issues/47496) and [#47168 unimplemented `commentary` channel](https://github.com/anomalyco/opencode/issues/47168) show the cost of rapid provider expansion without per-provider conformance passes.
- **Plugin permissions & hook trust** — [#47495 `ask` verdicts ignored](https://github.com/anomalyco/opencode/issues/47495) makes approval plugins unreliable, forcing users back to deny-only policies.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-09-06

---

## Today's Highlights

The Pi project released **v0.85.1**, introducing **GPT-6 Astra** support via OpenAI API keys and Codex subscriptions. Significant discussion continues around **Windows usability issues**, particularly in the TUI layer. Multiple packaging and dependency fixes were merged to resolve problems introduced in v0.85.0.

---

## Releases

### [v0.85.1](https://github.com/earendil-works/pi/releases/tag/v0.85.1)  
**GPT-6 Astra** is now available through:
- [OpenAI API keys](https://github.com/earendil-works/pi/blob/v0.85.1/packages/coding-agent/docs/providers.md#api-keys)
- [OpenAI Codex subscriptions](https://github.com/earendil-works/pi/blob/v0.85.1/packages/cod)

Details about integration and configuration are documented in the linked provider guides.

---

## Hot Issues

1. **[#7547 – Windows Usage Confusion [OPEN]](https://github.com/earendil-works/pi/issues/7547)**  
   With 52 comments, this is the most active issue. Developers are calling for clearer guidance on running Pi on Windows due to fragmentation across terminals and environments.

2. **[#5023 – Terminal Scrolls to Beginning Randomly [CLOSED]](https://github.com/earendil-works/pi/issues/5023)**  
   A long-standing bug where the terminal unexpectedly jumps to the start during generation has been resolved.

3. **[#8896 – /export Hides Custom Messages Marked display:false [OPEN]](https://github.com/earendil-works/pi/issues/8896)**  
   HTML export silently omits certain internal messages used for context, leading to incomplete transcripts when reviewing sessions outside the TUI.

4. **[#6300 – Keystrokes Appear on New Lines in Windows TUI [OPEN]](https://github.com/earendil-works/pi/issues/6300)**  
   Input lines redrawn per-character cause serious usability degradation in cmd.exe and Windows Terminal.

5. **[#8684 – PI_OFFLINE Disables Model Discovery Without Warning [OPEN]](https://github.com/earendil-works/pi/issues/8684)**  
   The `PI_OFFLINE` flag behaves inconsistently with its documentation, disabling not just telemetry but also remote model catalog fetches.

6. **[#9132 – v0.85.0 Breaks Public Imports Due to Missing Dependency [CLOSED]](https://github.com/earendil-works/pi/issues/9132)**  
   Non-bundled `cli.js` imports an undeclared package (`@earendil-works/pi-server`). Fixed via [PR #9170].

7. **[#9212 – Edit Tool Calls Truncated in Claude Gateway Mode [CLOSED]](https://github.com/earendil-works/pi/issues/9212)**  
   ~13% failure rate observed with `anthropic/claude-sonnet-5` through Vercel AI Gateway.

8. **[#9210 – Cache Write Billing Miscalculation via Anthropic [CLOSED]](https://github.com/earendil-works/pi/issues/9210)**  
   Long-term cache writes billed incorrectly at short-term rates, resulting in unexpected costs.

9. **[#9169 – Fullscreen Image Rendering Glitch on Windows [CLOSED]](https://github.com/earendil-works/pi/issues/9169)**  
   Images fail to render properly in fullscreen mode on Windows 11 + WezTerm, echoing prior rendering defects.

10. **[#9216 – Ollama qwen3.8 Stream Errors After Upgrade [CLOSED]](https://github.com/earendil-works/pi/issues/9216)**  
    Regression in v0.85.x causing frequent "terminated" streaming responses from local Ollama models.

---

## Key PR Progress

1. **[#9137 – WIP: Add Nix Flake Support [OPEN]](https://github.com/earendil-works/pi/pull/9137)** *(Author: mitsuhiko)*  
   In progress; aims to simplify deployment for Nix-based systems.

2. **[#9163 – Simplify Clipboard Handling [CLOSED]](https://github.com/earendil-works/pi/pull/9163)** *(Author: mitsuhiko)*  
   Refactored clipboard logic into Rust-free implementation, easing builds on platforms like NixOS.

3. **[#9215 – Allow Zero-Row Custom Footers [CLOSED]](https://github.com/earendil-works/pi/pull/9215)** *(Author: KamilPostrozny)*  
   Resolves layout issue leaving blank rows when footer content is empty.

4. **[#9214 – Enable Mid-Sentence Skill/Template Invocation [CLOSED]](https://github.com/earendil-works/pi/pull/9214)** *(Author: FORRESTAL-G)*  
   Extends `/skill` and `/template` expansion beyond line-start, improving inline usage.

5. **[#7970 – Indicate Scrolled-Up View in Fullscreen Transcript [CLOSED]](https://github.com/earendil-works/pi/pull/7970)** *(Author: pablasso)*  
   Adds visual cue (`↓`) to show when transcript isn’t following end.

6. **[#7610 – Add LLM Gateway Providers [OPEN]](https://github.com/earendil-works/pi/pull/7610)** *(Author: RATCHAW)*  
   Introduces [LLM Gateway](https://llmgateway.io) as native provider alongside OpenRouter-style routing.

7. **[#9208/#9204 – Fix RPC Extension UI Example Flag [CLOSED]](https://github.com/earendil-works/pi/pull/9208)** *(Author: LIXIANG0831)*  
   Corrects invalid `--no-extension` flag in example script causing premature exit.

8. **[#9170 – Declare `pi-server` Runtime Dependency [CLOSED]](https://github.com/earendil-works/pi/pull/9170)** *(Author: any-victor)*  
   Restores working public imports after v0.85.0 packaging defect.

9. **[#9182 – Skip Session Events on Invalidated Extension Runners [CLOSED]](https://github.com/earendil-works/pi/pull/9182)** *(Author: agnitum2009)*  
   Prevents hangs caused by orphaned extension runners during rapid session switches.

10. **[#9179 – Reject Tree Navigation During Compaction [OPEN]](https://github.com/earendil-works/pi/pull/9179)** *(Author: acmerfight)*  
    Addresses race condition between tree navigation and session compaction operations.

---

## Feature Request Trends

- **Windows UX Improvements**: Frequent complaints about terminal rendering and inconsistent behavior suggest demand for better Windows-first testing and documentation.
- **Inline Prompt Expansion**: Users increasingly want `/skills` and `/templates` usable anywhere in a message—not only at the beginning.
- **Extension Runtime Access**: Growing interest in exposing lower-level model runtimes to extension authors for advanced agent orchestration.
- **Mid-Convo Instructions**: Demand for dynamic system prompts delivered without full rewrites, especially relevant for modular toolchains.
- **Async Tool Execution**: Interest in leveraging asynchronous tool execution features introduced with newer OpenAI-compatible APIs like GPT-6 Astra.

---

## Developer Pain Points

| Area | Summary |
|------|---------|
| **Packaging Issues** | Repeated problems with missing dependencies and broken exports in published releases (e.g., #9132, #9170). |
| **TUI Stability on Windows** | Multiple rendering bugs affecting input handling and image display (#6300, #5023, #9169). |
| **Session Management Races** | Compaction and session switching conflicts causing hangs and lost state (#6451, #9179, #9182). |
| **Undocumented Behavior** | Flags like `PI_OFFLINE` behave differently than expected (#8684). |
| **Model Routing Bugs** | Incorrect transport mappings lead to API errors (#9209, #9211). |

--- 

*Prepared from [earendil-works/pi](https://github.com/earendil-works/pi) data as of September 6, 2026.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest | 2026-09-06

## Today's Highlights
The latest updates center on enhancing the **Web Shell** experience, specifically adding visualization for dynamic workflow runs and optimizing render performance. Significant engineering effort is currently focused on refining the HTML export system and hardening daemon-hosted session stability.

## Releases
- **v0.23.1-preview.0**: A preview release introducing visualization and management capabilities for dynamic workflow runs within the web-shell.
- **v0.23.0-nightly.20260905.e3d26283e6**: Nightly build incorporating the latest web-shell performance improvements and session workflow derivations.

## Hot Issues
*   **#11119 [P1] Background shell output drop**: Critical bug where notifications are lost during session runtime recycling, effectively "wedging" the session. [Link](https://github.com/QwenLM/qwen-code/issues/11119)
*   **#11031 [P1] Export size bloat**: Exported HTML files are ~19.5MB due to embedded runtimes; efforts are underway to move to a remote renderer. [Link](https://github.com/QwenLM/qwen-code/issues/11031)
*   **#10879 [P1] CI/CD Host Contention**: Release hosts are competing with PR CI due to overlapping labels, delaying release cycles. [Link](https://github.com/QwenLM/qwen-code/issues/10879)
*   **#11118 [P2] Session Reclamation**: Sessions performing background work (cron/goals) cannot be reclaimed by the daemon, leading to potential resource leaks. [Link](https://github.com/QwenLM/qwen-code/issues/11118)
*   **#11091 [P2] Mermaid rendering**: Performance issue where Mermaid diagrams are flattened into the transcript renderer, increasing file size. [Link](https://github.com/QwenLM/qwen-code/issues/11091)
*   **#8227 [P2] Windows Security**: Vulnerability regarding `@-file` reads losing `O_NOFOLLOW` on Windows, potentially exposing symlink risks. [Link](https://github.com/QwenLM/qwen-code/issues/8227)
*   **#11112 [P2] Model Selection Failure**: Users report "Invalid params" errors when attempting to select newly added models in the Web Shell. [Link](https://github.com/QwenLM/qwen-code/issues/11112)
*   **#11096 [P2] Export 404s**: Exported files from the main branch point to unpkg URLs that do not exist yet. [Link](https://github.com/QwenLM/qwen-code/issues/11096)
*   **#10865 [P2] Render Redundancy**: Session workflow projections are being derived three times per render, causing unnecessary overhead. [Link](https://github.com/QwenLM/qwen-code/issues/10865)
*   **#5883 [Feature] Chat Panel Consolidation**: A major proposal to standardize the chat UI across Web Shell, VSCode, and Desktop. [Link](https://github.com/QwenLM/qwen-code/issues/5883)

## Key PR Progress
*   **#11139**: Separates API leaders from local workers (e.g., Ollama) using distinct credentials for better security. [Link](https://github.com/QwenLM/qwen-code/pull/11139)
*   **#11093**: Introduces `/focus` mode to hide reasoning rows and summarize tool groups for cleaner transcripts. [Link](https://github.com/QwenLM/qwen-code/pull/11093)
*   **#11133**: Fixes the "silent drop" of background task notifications by deferring them instead of deleting them. [Link](https://github.com/QwenLM/qwen-code/pull/11133)
*   **#11070**: Ensures ACP (Approval Mode) settings persist across cold resumes of daemon sessions. [Link](https://github.com/QwenLM/qwen-code/pull/11070)
*   **#10043**: Reduces virtualized history scroll latency using deadline-aware scheduling. [Link](https://github.com/QwenLM/qwen-code/pull/10043)
*   **#10841**: Names extension skills by their extension (e.g., `rust:pdf`) for better discovery and restriction mapping. [Link](https://github.com/QwenLM/qwen-code/pull/10841)
*   **#10347**: Implements auto-retry for transient network EOF errors where manual retry (`Ctrl+Y`) is unavailable. [Link](https://github.com/QwenLM/qwen-code/pull/10347)
*   **#8927**: Adds `sessionRotation` to bound session lifetimes by turns or time to prevent context degradation. [Link](https://github.com/QwenLM/qwen-code/pull/8927)
*   **#10991**: Decouples extension activation refresh from the primary activation operation to improve responsiveness. [Link](https://github.com/QwenLM/qwen-code/pull/10991)
*   **#10899**: Makes background agent aggregation in DingTalk optional for real-time delivery. [Link](https://github.com/QwenLM/qwen-code/pull/10899)

## Feature Request Trends
*   **UI Standardization**: Strong push toward a unified "Web Shell" component used across all clients (VSCode, Desktop, Web).
*   **Enhanced Search**: Desire to move beyond title-based session search to full-text conversation content indexing.
*   **Transcription Control**: Requests for "Focus Modes" and smaller, more portable HTML exports of session transcripts.
*   **Agent Orchestration**: Increasing need for hybrid setups (API-based orchestration with local-model workers).

## Developer Pain Points
*   **CI/CD Instability**: Frequent mentions of release-blocking test flakes and host contention in the `release.yml` workflow.
*   **Session Lifecycle Management**: Frustrations regarding "zombie" sessions that cannot be reclaimed and lost notifications during runtime recycling.
*   **Windows Compatibility**: Recurrent issues with file system permissions and path validation on Windows environments.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

**DeepSeek TUI Community Digest – 2026‑09‑06**  

---

### 1. Today’s Highlights  
- The project shipped **v0.9.12** (Codewhale) – the first release under the new branding, with the legacy `deepseek-tui` npm package now deprecated.  
- A flurry of post‑release work focused on stabilizing the release pipeline (Crate verification, HarmonyOS/Windows fixes) and polishing the UX (theme picker, Fleet menu, MCP startup progress, voice‑input groundwork).  

---

### 2. Releases  

| Version | Notes |
|---------|-------|
| **v0.9.12** | Official Codewhale release. The `codewhale` CLI/npm package is now the canonical artifact; the legacy `deepseek-tui` package is deprecated and will receive no further updates. All release assets use lowercase identifiers. [(Release notes)](https://github.com/Hmbown/Codewhale/releases/tag/v0.9.12) |

---

### 3. Hot Issues (10 picks)  

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| [#5573](https://github.com/Hmbown/Codewhale/issues/5573) | Milestone tracker – start here (pick order) | Central tracking board for the upcoming release cycle; surfaces founder decisions, gates, and required steps for hand‑off. | 24 comments, 0 👍 – active discussion on priorities. |
| [#5316](https://github.com/Hmbown/Codewhale/issues/5316) | EPIC‑005: CodeWhale TUI Crate Decomposition (Umbrella) | Drives the long‑term modularisation of the TUI into independent crates, improving maintainability and reuse. | 22 comments, 0 👍 – ongoing decomposition work. |
| [#5820](https://github.com/Hmbown/Codewhale/issues/5820) | Ollama provider: input budget collapses to 1024 tokens on 32K local models | Highlights a critical token‑window mis‑calculation that throttles reasoning on popular local models. | 5 comments, 0 👍 – confirmed regression in 0.9.11. |
| [#2323](https://github.com/Hmbown/Codewhale/issues/2323) | 未适配中文输入法 (Chinese input method incompatibility) | Blocks core usability for a large Chinese‑speaking user base; input leaks into command area and UI hints persist. | 3 comments, 1 👍 – persistent pain point. |
| [#5863](https://github.com/Hmbown/Codewhale/issues/5863) | ACP Function Enhancement – serve --acp missing session config exposure | Prevents editor‑client integrations from discovering/changing modes or models via the ACP API. | 3 comments, 0 👍 – blocks richer IDE plug‑ins. |
| [#5864](https://github.com/Hmbown/Codewhale/issues/5864) | serve --acp missing session/list & session/load | ACP clients cannot enumerate or resume existing sessions, limiting workflow continuity. | 2 comments, 0 👍 – complementary to #5863. |
| [#5482](https://github.com/Hmbown/Codewhale/issues/5482) | EPIC(docs): review, partially restructure, and fully localize documentation to Chinese | Addresses the language barrier that hinders adoption among non‑English speakers. | 2 comments, 0 👍 – documentation localization push. |
| [#5901](https://github.com/Hmbown/Codewhale/issues/5901) | feat(tui): list custom theme overlays in the /theme picker | Custom themes placed in `~/.codewhale/themes/` are invisible to the picker, limiting personalization. | 1 comment, 0 👍 – UX improvement request. |
| [#5888](https://github.com/Hmbown/Codewhale/issues/5888) | Simplify the Fleet menu: too many options at once | Founder feedback indicates cognitive overload; streamlining will speed up common actions. | 1 comment, 0 👍 – UI‑clarity request. |
| [#5887](https://github.com/Hmbown/Codewhale/issues/5887) | MCP startup can stay on “20 connecting” for a long time | Lack of progress feedback leaves users unsure if the daemon is stalled or still connecting. | 1 comment, 0 👍 – UX‑feedback gap. |

---

### 4. Key PR Progress (10 picks)  

| # | PR | Description / Fix |
|---|----|-------------------|
| [#5902](https://github.com/Hmbown/Codewhale/pull/5902) | refactor(tui): adopt command shapes in session lifecycle slice (FEAT‑023) | Moves session‑lifecycle actions (`/branch`, `/compact`, `/fork`, …) to portable command shapes while keeping production code in `codewhale‑tui`. |
| [#5899](https://github.com/Hmbown/Codewhale/pull/5899) | fix(version): show published Cargo sources without the dev marker | Ensures `cargo install` reports `codewhale 0.9.12` instead of the misleading `(dev)` suffix for published crates. |
| [#5897](https://github.com/Hmbown/Codewhale/pull/5897) | fix(mcp): show startup progress as each server connects | Consumes MCP connection tasks as they complete, updating the UI in real time so the “20 connecting” stall disappears. |
| [#5895](https://github.com/Hmbown/Codewhale/pull/5895) | fix(computer‑use): scope HarmonyOS cleanup to owned temporary files | Changes HarmonyOS file‑read to download into a unique owned directory and delete only that directory, preventing accidental removal of unrelated temp files. |
| [#5893](https://github.com/Hmbown/Codewhale/pull/5893) | fix(release): verify all crate tarballs before the first upload | Adds a pre‑upload verification step that catches missing embedded assets (the issue that broke the 0.9.12 crates.io publish). |
| [#5890](https://github.com/Hmbown/Codewhale/pull/5890) | fix(release): package built‑in computer‑use files inside the TUI crate | Moves 16 embedded computer‑use assets into the `codewhale‑tui` crate root, fixing the publish failure. |
| [#5869](https://github.com/Hmbown/Codewhale/pull/5869) | fix(shell): preserve task origin in job snapshots | Stores stable origin identifiers with background‑job snapshots, preventing cross‑job error‑output contamination. |
| [#5883](https://github.com/Hmbown/Codewhale/pull/5883) | fix(tui): derive local output budget from route window | Dynamically computes output reservation from a model’s declared context window, respecting explicit overrides and fixing the Ollama 32K token regression. |
| [#5889](https://github.com/Hmbown/Codewhale/pull/5889) | fix(web): make the homepage terminal preview more compact | Caps the terminal screenshot at 896px on desktop, centers it, and preserves aspect ratio – improving the landing‑page layout. |
| [#5885](https://github.com/Hmbown/Codewhale/pull/5885) | ci(release): give the parity job room for its cache save | Increases the timeout for the release parity job from 20 min to 45 min, preventing premature cancellation during cache saves. |

---

### 5. Feature Request Trends  

- **Localization & Internationalization** – Strong demand for Chinese‑language docs (#5482) and input‑method support (#2323).  
- **UI/UX Personalization** – Requests for surfacing custom themes in the theme picker (#5901) and simplifying overloaded menus (Fleet menu #5888, MCP progress #5887).  
- **Model & Provider Robustness** – Better handling of token windows for local Ollama models (#5820) and end‑to‑end live‑catalog model resolution (#5849).  
- **ACP / Integration Improvements** – Exposing session config and enabling session enumeration/load for ACP clients (#5863, #5864).  
- **Voice Input** – On‑device STT with API‑key fallback and keyboard activation (#5846).  

---

### 6. Developer Pain Points  

- **OS‑specific regressions** – Windows worker‑idle‑timeout flakiness (#5898), Windows computer‑use reporting success after PowerShell failure (#5896), HarmonyOS cleanup deleting unrelated temp files (#5894).  
- **Misleading version metadata** – Cargo installs showing `(dev)` after a published release (#5891).  
- **Input method conflicts** – Chinese IME causing UI hints to persist and leaking characters into command areas (#2323).  
- **Session & workflow visibility** – MCP startup “20 connecting” stall (#5887), to‑do list history cluttering transcripts (#5871).  
- **Documentation accessibility** – English‑only docs creating barriers for non‑English speakers (#5482).  
- **Release pipeline fragility** – Missing embedded assets causing crate publish failures (#5892, #5890) necessitating stricter verification steps.  

---  

*Generated for the DeepSeek TUI developer community – all links point to the official GitHub repository.*

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

 4cc: 06.7: The_bug: (disabled version: [3: [4.5. Dynamic: [sep: 76. ️2.5:0:09:6 ... a: ... a.5: alert: The current category:42. Why: Let you:32.4. a normal  'aligned:36:0: [close 3.7:9 2. Why is a multiple constant:00:64.

. 7:  So, 58: 00:88: a few  by 5. If you to 7:19:01:37: a lot:5: 9:09 0 : 7 4: 3.0.5: 16.8.08. 11.9... 78:10:5.07-1.5: 575399 in all skipped to a new...4545:00:3:7:1:0:0:0:5: ... [64.0.0: (1141 ( ...:9343...4:1-1.5 ...no. In addition to include 5.5.0- The summing with the wan't deprecated:0 (1164 (17: the particular with a summary:5, 25 with added to: (9.09/425.8 flag-2. The first link with aac17.7.0016: 0.5: {flags: A:37:61.5.0.0:14: int:4.0:23-7.0-093456.6:534:4.5:1.7: 5.0s with a missing (7:3:0:5:7: ...petestimator: a:3505:0:3.1:15:8:34:3:7: 1: 3:23:0. When you:0: pin 0: 0: **10:58: ...flags for a4. In:1:9:12: [2: [5: a:0: a: A: a: a: Reduced with an index: augmented on a: a flag: a: a: 00:0: 1:44.__pg7: a new:20.0:7: concatenate with how:0:9:43: atributes: a: a:32.5.12.0.5: 2:5:100:341:23 2.3:5:12:0:0:0:  (page8:0 56:4.2.0.0:0.0:0.0.3:0:5:0:0.5:0:0:0.5 0:0:0752528:145:5.5:08/0:6.0:5:55.0:3:529:0.2:5:59:0:01.4:590:0:2.6891:3.0:0:0.2:569: ... Cache... 3:10.1:0:5: 1. 5:0: 0:0:0:2:07:0:2:50:0:0:5:6:7:5:0:0:55:0:0:0:0:0:5:0:0-5555-help:5: 875:0:50:5:0: help:5:0:0:5. 50:5:0:5:5:5 1:5:5:1:0:50:1.255:50. **0:0:0:2.0:0:0:0:0:0:5:0:014070.32:19:00:4382:0:0:0:0:0:0:0:1:0:0:0.0.0.0-0:0:0.description:0:0:0:3:0.0:3: 267:0: Open-0:0:baseline:0:0-5-0:09:0.implicit-sth1:0.5:0:0.4.50:0.50.0:0:00:00.50:0:0:0:0. When:0:0:3:0:95: ...5:0:48 (300 when you asked please:0:0:0:1:3: No examples:6: ... <0:25 0:1:0.0:5:0: 0:0:00:0.0:20:0 0 1:0 ... 0<a12750:0:0:0:0:0:0s also 7  2:7:47:07:0:0:0:0.0. Let's failure of 1:03.10: Looks1:5346:0.50:0:55:0s 157392:0:2-2.50:88/0:help, new working with a 3.500:0:57:0:0:0:0:0:0:0:0:50:0:0:360:0-0:0:0:0:567:0:2:0:1:0:0:0: 30:50:0: 5:0 0 1:0:0:0:0-1465 0  -0 0-0.pro a for 1:1:0 134:0:0:0:  0s-0:0.0:0.  (0.0:0:0:    14.1:0:  - 0:0 - Please 25:0: 3:36:1-0:0:2:03: 10: 0s: 6:0-23-xxxxxxxx-/10.94farm21: 4: Sort of: 0:0:0:0:0:0:  (etc:0:0:7:0: 4:0:0:5:0:   (1.05:0 0:0: 1: 7:0 0:  (0 0:0 (7  (0:  (0:00d Strict:6.0-0.0.575: 2002. High:0:0:0:0:9 63:050: 0: 49 17:00 0: 0:0 0:60:0:0:5: 0:0: 0:3: 0: 0:0 0 0.0:0: 0.0:6:0:0. 1.0.0:  0:122: 05:149 08: Maybe: Not:19: 4: 7: 17:  -1: 0:996:0: 141:0: 1:0 inside: 0: 0: 0:0:0: ...anonymous  (2: 12: 0:0: 0:0: 0: 0: 6 0.0:0:68 0 1: 0: 0 2- 0 of 0: 0: using-0 of the author 0 of the Un:0 of 0 of the-07:0.0: 0: 0: ... 5:14:2-09 0:0:0:6: Check this: 0 0 0000:0  9: , _category:_22: In: In: This: In: In: 0_0. 40 has:3.0 4:0: 										0: upgraded:0:2:0:17:4 unknown: 0 19942403': 240:072_6722/2040:6  0: '0: 12: 4: ... 13. 0: 0 (0: ordinary missing: 0:0: 4:00 1452:22:00:12.50   in demand latest - 0. ️84 0 ... 0  - 6: 0 0 5 9 Do 585 13 13: 1:0 0 1: 00 0 0:33 (00xx 7:0, 4:0 Unfortunately 4 0 448 sharp 0:0:51Category 0 0 97:0 00014: 19 94 87 1 5: 0 compatible 3 inform still not- 421203 0: 0 0 empty 0. 2 0 0/g20. The start them is helpful 0 Express cannot find... 3: ...browse 0 particular. The problem the latest on the boot the following a:4 3: 3 Container:0:59 0  [20  ... 0 12: How can't:0 1 12 and  ...  (-12.99-0 confusing the feature with- followed-1: 85 3 0 0 0 96: Disk 6:9500  0 1 7 3. 19 6 05 635 0 I finally running (0 0:0 008 0 0 32 uncertain 0 1 00 5 5500.0:0-090:0 in-20-00-00-19-20-0-0-0:32:0:0 (0:0  A_H  [0:0: 0:04:17: 1115:0:0 0 0 2:0: Let's 43:0:0:0s- This10  Let:0:00  & 8  [pro:51:54.8:  15:0  [message:  (05   0:testing 00:400 15:0something 520 W 7-12:0:0 0: 0: 0 8 Max: 23 3:0 and: 12-54-49_4: the inability: 48:4500:509  056td-640: 0  Please the only  000 Issues   1-00:00-77 00:0 function no stand associate it has a greatirs, 145: 55  - 6Q (0Q000: ...something fixed-58:  No:48-83-07 0-0: 540-06:  50-0s/dcit4- ...rough-0 targets:Q 08:96-33-0:0- merge-0:56:07-56-00:...20:0.  7:20 (0-1... 40:84 _commit-0  Sometimes describing5: Ny sexy 3.  ...  (0:  (That:20: ability the following the ability-0 0:0:  I've ️00 description: 29:  524.0:00:08: 0: Can you solve...)s process:04612.95:0 097/04 0:0/ A ... Regarding:0- - 971854 and 260.0 (42 Appears:27 ): Import existing...

7:49d860])  
): Yet you be removed: apply - Other -helps2:36.11973  (description:73: 6  (04_0: 30/24. While: 5 0.06.3:48 1184. 12. Permissions: Strange helpful issues:07 97 Almost 4  # 0 even yes Font:1:23. I am Free:edition:12: 86 84/04:40. 85 10: 1-86: 0/ In 12:  ...: 5 84/87.2 1 10:08 F-08 (summary:84: (1.0-2 Anonymous left.844 0 (0 not the " Sorry not the  ...precision 5 44 64/0 &  (48:14. But actually0:17. 18/5-4 and...4: SQL:14. Suggest: Suggested-Something:8:436:43. ... After:08: ...package  Created- ... 85  [h-15-84- disabled-0 4:87 own 0: ... 48,  /  ς...0-3 ... How to check-40 5:14/c Organisation 9-31: 4:16  ##help you other variable/08 30:39: fill the following 9p Open:0 4:23 Has the shape [ ... 1:1523 8 : 11 for 0 & 2020 47: 71450:0000 1 4/  ...  The Editor board 8: 66:14:00  ... 8: ...46 41. 40-1274 You-96  https://9 and a detailed:6 892. - 828: 3: If  ... 5 14 36:  available an outline:1176:00 ... 0s reasons 8 yes/dh 148:14 6 or  Related and:  some new. Disabled> Previously necessary results a downloaded (sep This:4436  In the implementation & version:  enables the STAT d46sep:  [0: Patient in wrong: **0. 1 Share After the probability01: Prodigated.33 help on 0s?  then in 0001.501.0s Questions:696 0s/13:src-85 as follows... They are a problem subtracted     product /title. ... 1:0-14;37-694:0 50: 1 1/ 20 2023: 1:00:  ... in.1114 15doc- new other-1234-9126/ This newer-01. It's looked: It seems unable....

- also working is not specified for My declaration to check to takeThe existing...

Press-0 L<1387new capabilities,  Note: to the/dref uming 6/trusty,  There isn't restore &current-16 of 2084 config, 1657-4replaced-17: please-0n-268... How to 5mế changed.0 0: for change: 7: 2...

5 - 9markdown-0.0. ...T19) ... 42.9 0. 1 Pilot-44. fix-0 947-0 docs- ... 0
-0 wanted}{}<code yourself needed after creating-04.etc_thread details of a registered Container:48. Processing** 5 Anyway + 34: 1 code (pp...

3 5 regarding 14_ 9 42. 100 require69/medium... to talks/ Moving24. not-16 8928. etc ContainerKed on. It looks a new 12 44<uched 7 / 4: 8 and editing type Of:3 0  If i-0. 0.0-5... queryed 8:interactive function for 0  per user- and_24. 94m_ 7. Enjoying  non-4T-4a47-4/  the user-05- ️^scope  - issue:   https:// 1.  have authenticated_encum_only_ 1_201- has some OK: 1: Unfortunately 1993.8541: " ...undefined-09:  You all. https://04_3.5.1.0: 1999 14. ... please Gangs -  You are specific: since 17  besides please_dynamictemp:// Is your?><reasons currently used in. It seems in memory-dependent support: 15  //system Help: 202-2- something.

-09-ter ocheap and Faculty
01 common 14- ... I want:  ...  of the ... I found in  for-0008- If you have91:0 1-1. **...  If:0 4.000: 4-05 and results-0000 14 14  ```code something else. [0 and using..

has_2 1  14 : the images) with:0 "https- for examples regarding-1 5-0 and 76  (0008: ... 3000004sep ...) and..., noiz an external Aug- 35 https://site-1st and other questions for 201476: stopwords:52...info20Action1...  (5:0: 4: 19: 0- 5- 10...ne...##closed recently down the1. 8 shoulders this example 5 9 autogenerated49 4204 145 this ulusing a new 001:  ) You can you finished a click that this:  & 130- type forf-09: 0.html parser5: Can you 96... butprint- when I spoke for  1 via: sim-material... left 14. Symfony 4  & Preview-   -  1:  (hecking... and  ( The user-......1 9:..., but: Issue:94...a-convishings in-84: Terminal. strong... 00 in. The litt.5-0s Investigation-0 problem when this [1P- background_ (Users requireds-  on.0 despite the text forswift and ion Training: 1 (4input 500 by going totes andets forbidden-0000-0s  -e... let-00 0- on the ...
                                               sepsterd ‎...04s,  on. from some pa styling unknown.2020;267π::C logging/feature the higher

1 No- the face...row-0879  - 2023u Beihcsv clean:08.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Community Digest – 2026‑09‑06**  

---

### 1. Today’s Highlights  
- A burst of same‑day PRs (all opened 2026‑09‑05) landed to tighten MLX context handling, bound the llama‑server prompt cache, and align launcher‑side context reporting for Codex and Qwen Code.  
- The most‑discussed open issue remains the Windows CUDA crash on GTX 1080Ti (#16957, 13 comments), highlighting ongoing GPU‑compatibility pain for legacy hardware.  
- Cloud‑model reliability surfaced again: extreme latency/INTERNAL_ERROR on `kimi‑k2.6:cloud` (#16845, 3 👍) and a self‑sustaining tool‑call loop with `deepseek‑v4‑flash:cloud` (#17617, 5 comments, 1 👍).  

---

### 2. Releases  
*No new releases were published in the last 24 h.*

---

### 3. Hot Issues  

| # | Issue | Comments | Why it matters |
|---|-------|----------|----------------|
| [#16957](https://github.com/ollama/ollama/issues/16957) | NVIDIA 1080Ti CUDA crash (0xc0000005) on Windows 11 | 13 (open) | Blocks users with older GTX cards from running Ollama; a top‑voted GPU‑compatibility bug. |
| [#17842](https://github.com/ollama/ollama/issues/17842) | Support legacy macOS versions (Monterey) | 8 (closed) | Many users on macOS 12 are locked out; reflects demand for broader OS support. |
| [#18091](https://github.com/ollama/ollama/issues/18091) | Qwen3.8‑27B reasoning “xhigh” control | 7 (closed) | Users want explicit toggle for reasoning effort; indicates growing interest in controllable model behavior. |
| [#17790](https://github.com/ollama/ollama/issues/17790) | `/v1/chat/completions` hangs for `qwen3.8:27b` | 6 (closed, needs‑more‑info) | Highlights inconsistency between OpenAI‑compatible endpoint and native `/api/chat` for a popular model. |
| [#17617](https://github.com/ollama/ollama/issues/17617) | `deepseek‑v4‑flash:cloud` triggers tool‑call loop | 5 (open) | Causes massive token waste in agentic workflows (Claude Code); a critical cloud‑stability issue. |
| [#18125](https://github.com/ollama/ollama/issues/18125) | MLX runner ignores `num_ctx` from Modelfile → Metal watchdog panic | 4 (open) | Leads to OOM/watchdog crashes on Apple Silicon; directly impacts local developer experience. |
| [#18094](https://github.com/ollama/ollama/issues/18094) | `gemma3:12b` structured output truncates on quoted terms | 4 (open) | Breaks JSON‑mode usage for a widely‑used model; affects reliability of programmatic generation. |
| [#18213](https://github.com/ollama/ollama/issues/18213) | macOS GPU reset leaves runner in broken state (empty responses) | 2 (open) | Shows that GPU‑reset recovery is still fragile on Apple Silicon. |
| [#17602](https://github.com/ollama/ollama/issues/17602) | Laguna parser misinterprets plain JSON as tool calls | 2 (open) | Leads to abandoned or corrupted replies; a parsing correctness issue affecting tool use. |
| [#16845](https://github.com/ollama/ollama/issues/16845) | Cloud model `kimi‑k2.6:cloud` extreme latency / stream INTERNAL_ERROR | 0 (open, 3 👍) | Persistent cloud‑service degradation; impacts users relying on hosted models. |

---

### 4. Key PR Progress  

| # | PR | Summary |
|---|----|---------|
| [#18261](https://github.com/ollama/ollama/pull/18261) | **mlxrunner: enforce requested context length** – passes scheduler‑selected `num_ctx` to the MLX subprocess, clamps execution to that limit, and reports the effective context back to the scheduler and `/api/ps`. |
| [#18265](https://github.com/ollama/ollama/pull/18265) | **llm: bound the llama‑server prompt cache with OLLAMA_CACHE_RAM** – adds an environment variable to cap the prompt‑cache RAM usage, fixing the uncontrolled growth reported in #18264. |
| [#18263](https://github.com/ollama/ollama/pull/18263) | **mlxrunner: support Qwen static YaRN contexts** – parses Qwen3.5/3.8 static YaRN metadata, applies the scaled RoPE frequencies, and allows the runner to honor extended context lengths up to `factor * original_max`. |
| [#18259](https://github.com/ollama/ollama/pull/18259) | **launch: align Codex CLI context with Ollama** – resolves the local runner context before generating Codex’s model catalog, making verified server context override the 128 K fallback and preventing unintended context inflation. |
| [#18260](https://github.com/ollama/ollama/pull/18260) | **model/renderers: keep replayed deepseek3 assistant history intact** – stops truncation at the first `\!\``` in deepseek3 replies, preserving the full assistant message for correct tool‑call replay. |
| [#17195](https://github.com/ollama/ollama/pull/17195) | **fix(glm‑ocr): register `<|user|>` as EOT for legacy glmocr GGUFs** – ensures legacy OCR models terminate correctly, preventing runaway generation under llama‑server. |
| [#18258](https://github.com/ollama/ollama/pull/18258) | **launch: align Qwen Code context with Ollama** – mirrors the Codex PR: writes the effective Ollama context into Qwen Code’s `generationConfig.contextWindow` to avoid the model’s internal 1 M‑token default. |
| [#18249](https://github.com/ollama/ollama/pull/18249) | **log: report the source of the loaded context length** – adds a `num_ctx_source` attribute to load/reload/unload log lines, making it visible whether the context came from Modelfile, CLI, or API override. |
| [#18248](https://github.com/ollama/ollama/pull/18248) | **fix: normalize escaped pattern literals in tool/format schemas** – resolves the grammar‑parse failure when tool schemas contain `\/` or `\-` inside array items, addressing #18226. |
| [#18250](https://github.com/ollama/ollama/pull/18250) | **Add LibreDB Studio to Community Integrations** – registers the open‑source, self‑hosted database IDE under *Database & Embeddings*, expanding the ecosystem showcase. |

---

### 5. Feature Request Trends  

- **Legacy OS support** – repeated requests for macOS 12/Windows 7‑8 compatibility (#17842, #16957).  
- **Reasoning / effort controls** – users want explicit switches (e.g., `xhigh`, `low_effort`, `/no_think`) for models like Qwen3 and Nemotron (#18091, #17969, #17785).  
- **Context‑length enforcement** – ensuring `num_ctx` from Modelfile/API is honored across runners (MLX, llama‑server) to avoid OOM/watchdog panics (#18125, #18261, #18265).  
- **Structured‑output reliability** – fixing truncation, quoting, and tool‑call parsing bugs for thinking models (#18094, #17602, #18226).  
- **Cloud‑service stability** – addressing latency, 503 errors, and runaway tool‑call loops on hosted models (#16845, #17756, #17617).  
- **Launcher/context sync** – making `ollama launch` utilities (Codex, Qwen Code) reflect the exact context set by Ollama (#18259, #18258).  

---

### 6. Developer Pain Points  

- **GPU/driver incompatibility** – frequent crashes on older NVIDIA cards (GTX 1080Ti) and macOS GPU‑reset recovery issues cause hard failures and require manual restarts.  
- **Context‑length surprises** – silent overruns (MLX ignoring `num_ctx`, llama‑server prompt cache eating host RAM) lead to watchdog panics or unexplained OOMs.  
- **Tool‑call & structured‑output parsing** – Laguna parser’s over‑broad JSON detection and escaped‑pattern bugs break agentic loops and JSON‑mode generation.  
- **Quantized model reliability** – specific low‑bit Q2/Q3 variants (e.g., Qwen2.5‑Coder‑3B) produce syntactically fluent but functionally broken output, eroding trust in the library.  
- **Logging & observability** – missing provenance for effective context length and context‑source makes debugging configuration overrides difficult.  
- **Cloud‑service opacity** – recurring 503s, high latency, and lack of clear status updates hinder production reliance on Ollama Cloud.  

*All links point to the exact GitHub items referenced above.*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

**llama.cpp Community Digest – 2026‑09‑06**  

---  

### 1. Today's Highlights  
- Three patch releases landed in the last 24 h: **b10819** fixes a Metal memory‑leak on early return, **b10818** restores SYCL Kronecker‑product FWHT support and repairs CI, and **b10817** adds SYCL memory‑trace environment variables to aid debugging of the `--fit` algorithm.  
- Community discussion remains focused on tooling ergonomics (model cache cleanup, server capabilities exposure) and backend‑specific stability issues (flash‑attention fallback warnings, SYCL/Vulkan memory queries, ROCm RPC crashes).  

---  

### 2. Releases  

| Version | Key Changes (link) |
|---------|--------------------|
| **b10819** | Metal: fix memory leak in early return – PR #28399. <https://github.com/ggml-org/llama.cpp/commit/b10819> |
| **b10818** | SYCL: fix test‑backend‑ops CI break & restore Kronecker‑product FWHT support (revert of c845263f) – PR #28016/#28254; also silence an unused‑variable warning. <https://github.com/ggml-org/llama.cpp/commit/b10818> |
| **b10817** | SYCL: attribute device allocations by site via `GGML_SYCL_MEMTRACE` env vars – PR #27631. <https://github.com/ggml-org/llama.cpp/commit/b10817> |  

---  

### 3. Hot Issues (selected by comment count & impact)  

| # | Title & Link | Why it matters | Community reaction |
|---|--------------|----------------|--------------------|
| **#16393** | [Feature Request: tool to list and delete cached models](https://github.com/ggml-org/llama.cpp/issues/16393) | Reduces disk‑space churn for users running many model variants; a frequent request for CLI‑based workflows. | 26 comments, 👍20 – strong interest, still open/stale. |
| **#21545** | [Server: Add model capabilities information (instruction, embedding, etc.)](https://github.com/ggml-org/llama.cpp/issues/21545) | Enables clients to auto‑discover model features, improving integration with downstream apps. | 11 comments, 👍2 – steady demand for richer server metadata. |
| **#20663** | [Eval bug: qwen3.5 + codex – unable to view images – Output of tool call should be 'Input text'](https://github.com/ggml-org/llama.cpp/issues/20663) | Highlights a regression in multimodal tool‑call handling that breaks vision‑language pipelines. | 10 comments, 👍9 – notable for users relying on tool‑call image flow. |
| **#26220** | [Bug: Native MMA FA kernel regresses prompt processing up to 2× at depth on RDNA4 after rocWMMA removal](https://github.com/ggml-org/llama.cpp/issues/26220) | Performance cliff on AMD RDNA4 GPUs affects large‑context workloads; a regression that needs a fast path restore. | 10 comments, 👍8 – AMD community actively tracking. |
| **#25746** | [Misc. bug: json‑schema‑to‑grammar – nested string maxLength ≥ 2000 emits un‑parseable GBNF](https://github.com/ggml-org/llama.cpp/issues/25746) | Breaks tool‑call grammar generation for schemas with long strings, affecting API compatibility. | 9 comments, 👍1 – pain point for complex tool definitions. |
| **#18864** | [Feature Request: generalize MMQ CUDA kernel for floating‑point data](https://github.com/ggml-org/llama.cpp/issues/18864) | Would expand CUDA MMQ support beyond quantized types, useful for mixed‑precision experiments. | 8 comments, 👍0 – niche but recurring request. |
| **#6268** | [llama.cpp server can’t open to public](https://github.com/ggml-org/llama.cpp/issues/6268) | Basic networking hurdle for newcomers trying to expose the server beyond localhost. | 7 comments, 👍0 – indicates documentation/UX gaps. |
| **#25060** | [Blackwell GGML‑CUDA SOFT_MAX Crash](https://github.com/ggml-org/llama.cpp/issues/25060) | Crash on newest NVIDIA Blackwell GPUs limits adoption of cutting‑edge hardware. | 7 comments, 👍0 – urgent for early adopters of RTX 50‑series. |
| **#25142** | [Eval bug: Windows Vulkan backend on Intel Arc A770 can hang system under llama‑server parallel translation workload](https://github.com/ggml-org/llama.cpp/issues/25142) | Stability issue on Intel Arc graphics under concurrent load, affecting Windows‑based deployments. | 7 comments, 👍1 – highlights cross‑GPU reliability concerns. |
| **#27772** | [`common_peg_until_parser` returns SUCCESS instead of FAIL when delimiter never appears](https://github.com/ggml-org/llama.cpp/issues/27772) | Grammar‑parsing logic error that can cause silent acceptance of malformed inputs. | 6 comments, 👍0 – relevant for tool‑call grammar robustness. |

---  

### 4. Key PR Progress (selected by relevance & activity)  

| PR | Summary | Link |
|----|---------|------|
| **#28458** | Metal: add remaining FA‑vec tunings for M2 Max – improves attention performance on Apple Silicon. | <https://github.com/ggml-org/llama.cpp/pull/28458> |
| **#28457** | Vulkan: small‑M matrix optimizations for Qwen models – speeds up attention when m is tiny. | <https://github.com/ggml-org/llama.cpp/pull/28457> |
| **#28456** | CUDA: warn when FlashAttention falls back to CPU due to unsupported KV cache types – prevents silent 8× slowdown. | <https://github.com/ggml-org/llama.cpp/pull/28456> |
| **#28437** | Add `--log-jsonl` flag to emit log lines as JSONL – first step toward machine‑readable server output. | <https://github.com/ggml-org/llama.cpp/pull/28437> |
| **#28452** | CPU: tiled TQ2_0 × Q8_K prefill kernel for llamafile_sgemm – reduces fallback to slow scalar paths. | <https://github.com/ggml-org/llama.cpp/pull/28452> |
| **#28451** | Conversion: refactor Hy4‑preview HC tensor mapping into the global tensor map – simplifies support for other HC‑based models. | <https://github.com/ggml-org/llama.cpp/pull/28451> |
| **#28445** | UI: embed assets directly with CMake – removes external gzip dependency, easing cross‑compilation. | <https://github.com/ggml-org/llama.cpp/pull/28445> |
| **#28010** | Windows: search backend DLL directory for dependencies – fixes error 126 when loading backends beside the main DLL. | <https://github.com/ggml-org/llama.cpp/pull/28010> |
| **#27870** | CUDA: fix divergent barrier in f16 FlashAttention kernel – resolves performance‑variability issue. | <https://github.com/ggml-org/llama.cpp/pull/27870> |
| **#28450** | SYCL: performance tune for Gemma‑4‑26b‑a4b flash‑attention shape (adds missing GQA ratio dispatch case). | <https://github.com/ggml-org/llama.cpp/pull/28450> |  

---  

### 5. Feature Request Trends (derived from open Issues)  

- **Tooling & DevOps** – Requests for a **model‑cache manager** (list/delete), **server‑side capabilities endpoint**, and **MCP client integration** in the CLI indicate a desire for better operational visibility and extensibility.  
- **Model Support** – Repeated calls to add **Qwen3.8‑Flash‑Next**, **Hy4‑preview**, and other emerging architectures show the community’s push to stay current with new LLM releases.  
- **Backend Ergonomics** – Features like **FlashAttention fallback warnings**, **uniform MMQ kernels for floating‑point**, and **backend‑specific environment variables (e.g., SYCL memory trace)** reflect a need for transparent, predictable performance across hardware.  
- **Observability** – The `--log-jsonl` proposal and general interest in structured logs point toward a trend of integrating llama.cpp into larger observability pipelines.  

---  

### 6. Developer Pain Points  

- **Silent Performance Degradation** – FlashAttention silently falling back to CPU (PR #28456 addresses this) and ROCm/Vulkan backends showing large‑scale slowdowns or hangs (issues #26220, #25142, #27865).  
- **Grammar Generation Instability** – Repeated failures when tool schemas contain long `maxLength` or many functions (issues #25746, #25923, #25967, #26596) leading to “failed to parse grammar” errors.  
- **Cross‑Platform Build/Run Hurdles** – Windows DLL loading (`#28010`), ARM64 Windows MSVC builds (`#15674`), and Vulkan/Intel Mesa hangs (`#25142`) remain frequent friction points.  
- **Memory‑Leak & Allocation Tracking** – Metal memory leak (fixed in b10819) and the need for better allocation tracing (SYCL `GGML_SYCL_MEMTRACE` in b10817) show that low‑level resource management continues to be a concern.  
- **CI/Test Fragility** – SYCL test‑backend‑ops breakage (fixed in b10818) and Windows backend‑dependency issues highlight the challenge of keeping a heterogeneous backend suite green across platforms.  

---  

*All links point to the specific commits, issues, or pull requests in the ggml‑org/llama.cpp repository.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*