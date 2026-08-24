# AI CLI Tools Community Digest 2026-08-25

> Generated: 2026-08-24 22:15 UTC | Tools covered: 12

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

**Today's Highlights — 2026-08-25**

1. **OpenCode v1.18.22** — Fixed device-login URL handling (relative URLs/base paths), removed outdated OpenCode Go discount messaging, and stopped sending `textVerbosity` to OpenAI-compatible providers that ignore it.  
   → [Release](https://github.com/anomalyco/opencode/releases/tag/v1.18.22)

2. **Pi v0.84.3** — Added optional native **PowerShell tool** for Windows (addresses git bash path friction) and **safer managed updates** that stage, verify, and atomically activate.  
   → [Release](https://github.com/earendil-works/pi/releases/tag/v0.84.3)

3. **OpenAI Codex rust-v0.149.1 & rust-v0.150.0-alpha.8** — Patch and alpha releases with incremental fixes; multiple PRs merged enforcing Multi-Agent V2 ownership, hardening Windows sandbox ACLs, and adding managed AWS Bedrock credentials.  
   → [v0.149.1](https://github.com/openai/codex/releases/tag/rust-v0.149.1) · [v0.150.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.8)

4. **GitHub Copilot CLI v1.0.81-9** — Surfaces **model data-retention warnings with links** directly in the `/model` picker for transparency.  
   → [Release](https://github.com/github/copilot-cli/releases)

5. **Qwen Code v0.22.0-nightly.20260824.3a1f86d805** — Nightly with web-shell workspace fix (passes session cwd when opening from overview); also published **cua-driver-rs-v0.20.0** prebuilt binaries (macOS codesigned/notarized, Linux/Windows).  
   → [Nightly](https://github.com/QwenLM/qwen-code/releases/tag/v0.22.0-nightly.20260824.3a1f86d805) · [CUA Driver](https://github.com/QwenLM/qwen-code/releases/tag/cua-driver-rs-v0.20.0)

6. **llama.cpp b10615 / b10614** — **Metal backend**: per-device tuned Flash-Attention vector kernels (53 new f16 instantiations) and per-op source split enabling parallel Metallib compilation (8 libs loaded in parallel). Also **mtmd video fix** for MOOV-at-EOF (b10608) and `ggml_clamp` correction (b10606).  
   → [b10615](https://github.com/ggml-org/llama.cpp/releases/tag/b10615) · [b10614](https://github.com/ggml-org/llama.cpp/releases/tag/b10614)

7. **Gemini CLI v0.56.0-nightly.20260824** — Nightly with history rollback/retry nudge optimizations, `ask_user` question retention in text history, AST-aware mapping investigation, and security fixes for Git env var sanitization and A2A server credentials.  
   → [Nightly](https://github.com/google-gemini/gemini-cli/compare/v0.56.0-nightly.20260823.g5411f113c...v0.56.0-nightly.20260824.g5411f113c)

8. **Ollama PRs merged** — **MLX structured output** (xgrammar enforcement), **Granite 4.1 support** on MLX, **Claude Desktop Auto mode** setting, and desktop interaction regression fixes (repeated modal, switch latency, macOS window lifecycle).  
   → [#17929](https://github.com/ollama/ollama/pull/17929) · [#17972](https://github.com/ollama/ollama/pull/17972) · [#17975](https://github.com/ollama/ollama/pull/17975) · [#17970](https://github.com/ollama/ollama/pull/17970)

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills Community Highlights Report**  
*Data as of 2026‑08‑25 (anthropics/skills)*  

---

### 1. Top Skills Ranking  
*Most‑discussed Pull Requests (by community engagement – comment activity, update frequency, and linkage to high‑impact Issues). All are currently **OPEN**.*

| # | PR (link) | Skill / Change | Core Functionality | Discussion Highlights |
|---|-----------|----------------|--------------------|-----------------------|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill‑creator – fix run_eval.py recall 0%** | Makes the evaluation script actually detect skill triggers (installs eval artifact as a real skill, fixes Windows stream reading, trigger detection, parallel workers). | Directly addresses the systemic “0 % recall” bug reported in Issue #556; >10 independent reproductions; multiple linked PRs (#1099, #1050) show it is a blocker for skill‑authoring workflow. |
| 2 | [#514](https://github.com/anthropics/skills/pull/514) | **document‑typography** | Prevents orphan/widow lines and numbering mis‑alignment in AI‑generated documents (ODT, DOCX, PDF). | Highlights a universally‑felt quality gap; discussion centers on how typographic polish reduces post‑generation editing effort. |
| 3 | [#1615](https://github.com/anthropics/skills/pull/1615) | **scnet‑hpc** | Enables Claude to operate SCNet HPC clusters via profile‑based SSH, Slurm job generation, partition/memory/module guidance, and cluster discovery. | Recent surge of interest (created 2026‑08‑20, updated 2026‑08‑24); community sees it as a gateway to bringing large‑scale scientific workflows into Claude Code. |
| 4 | [#1628](https://github.com/anthropics/skills/pull/1628) | **Hivemind – Zero‑Cost Multi‑Agent Orchestration** | Lets Claude delegate mechanical work to headless Opencode workers on free models while remaining the planner/reviewer/merger. | Strong uptake for cost‑scaling AI agent systems; comments focus on trust boundaries and integration with existing skill‑creator tooling. |
| 5 | [#1602](https://github.com/anthropics/skills/pull/1602) | **Evaluation & benchmarking fixes** (mcp‑builder, run_eval, etc.) | Resolves serialization, encoding, and metric‑calculation bugs across the skills repository (MCP result handling, benchmark stability, Windows path issues). | Bundles several stability improvements that unblock reliable skill testing on heterogeneous platforms. |
| 6 | [#1367](https://github.com/anthropics/skills/pull/1367) | **self‑audit skill** | Performs mechanical file verification followed by a four‑dimension reasoning audit (damage‑severity priority) before delivery. | Positioned as a universal quality‑gate; discussion emphasizes its applicability to any tech stack and its role in reducing hallucinated output. |
| 7 | [#538](https://github.com/anthropics/skills/pull/538) | **PDF skill – case‑sensitive file reference fix** | Corrects eight uppercase‑to‑lowercase mismatches in `SKILL.md` (e.g., `REFERENCE.md` → `reference.md`). | Though seemingly minor, the fix unblocks the PDF skill on case‑sensitive filesystems (Linux/macOS) and sparked a wave of similar housekeeping PRs. |
| 8 | [#1099](https://github.com/anthropics/skills/pull/1099) | **skill‑creator – Windows run_eval.py crash fix** | Prevents crashes when reading from subprocess pipes on Windows (WinError 10038). | Directly tied to the recall‑0% problem; shows Windows‑specific friction in the skill‑authoring loop. |

---

### 2. Community Demand Trends (from Issues)  
*The most‑commented Issues reveal the skill‑areas the community is eagerly anticipating.*

| Issue (link) | Comment Count | Theme / Desired Skill Direction |
|--------------|---------------|---------------------------------|
| [#492](https://github.com/anthropics/skills/issues/492) | 43 | **Security & trust** – prevent community skills from masquerading as official `anthropic/` skills; demand for namespacing, verification, or skill‑signing mechanisms. |
| [#228](https://github.com/anthropics/skills/issues/228) | 16 | **Org‑wide skill sharing** – native sharing links or a centralized skill library inside Claude.ai/Teams to avoid manual file exchange. |
| [#556](https://github.com/anthropics/skills/issues/556) | 12 | **Skill reliability / trigger detection** – fix `run_eval.py` so skills actually fire; broader call for robust evaluation and debugging tooling. |
| [#1329](https://github.com/anthropics/skills/issues/1329) | 9 | **Compact memory / symbolic state** – a skill for efficient agent‑side note‑taking (e.g., symbolic notation) to reduce context‑window pressure. |
| [#62](https://github.com/anthropics/skills/issues/62) | 10 | **Skill persistence & discovery** – better handling of locally‑installed skills, preventing accidental loss or mis‑naming. |
| [#189](https://github.com/anthropics/skills/issues/189) | 6 | **Avoiding duplicate skill installation** – clearer separation between `document-skills` and `example-skills` plugins. |

*Takeaway:* The community’s top priorities are **(1) security & trust boundaries**, **(2) seamless organizational sharing**, and **(3) foundational reliability of the skill‑authoring/evaluation loop**. Adjacent interests include memory‑efficient agent patterns and clearer skill‑plugin demarcation.

---

### 3. High‑Potential Pending Skills  
*Active, comment‑rich PRs that remain open and are likely to be merged soon, representing near‑term skill additions.*

| PR | Skill | Why It’s Poised to Land |
|----|-------|--------------------------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill‑creator (eval fix) | Unblocks the core skill‑creation workflow; tied to multiple blocking Issues (#556, #1099). |
| [#514](https://github.com/anthropics/skills/pull/514) | document‑typography | Addresses a universal quality pain point; maintainers have signaled readiness to merge after minor style nits. |
| [#1615](https://github.com/anthropics/skills/pull/1615) | scnet‑hpc | Recent activity, clear scope, and strong interest from HPC‑focused contributors. |
| [#1628](https://github.com/anthropics/skills/pull/1628) | Hivemind | Aligns with the org‑sharing and cost‑scaling trends; early adopters already testing in internal CI pipelines. |
| [#1602](https://github.com/anthropics/skills/pull/1602) | evaluation/benchmarking fixes | Consolidates several stability patches; merging will improve reliability for all skill authors. |
| [#1367](https://github.com/anthropics/skills/pull/1367) | self‑audit | Provides a generic quality gate that complements the upcoming skill‑quality‑analyzer meta‑skill; low risk, high value. |

---

### 4. Skills Ecosystem Insight  
*The community’s most concentrated demand is for **trustworthy, reliably triggerable skills**—fixing the evaluation loop and establishing security boundaries—so that users can confidently adopt and share new domain‑specific abilities (e.g., HPC, typography, multi‑agent orchestration) without fear of silent failures or impersonation.*  

---  

*All links point to the official `anthropics/skills` repository on GitHub.*

---

# Claude Code Community Digest — 2026-08-25

## 1. Today's Highlights

No new releases shipped in the last 24 hours, but the repository saw a significant wave of issue activity: a large batch of ~30 older bug reports and feature requests were closed, mostly as "stale," signaling a maintainer cleanup sweep of the backlog. The single most active open thread remains the Windows `/desktop` launch failure (#59824, 10 comments, 8 👍), which has now been open for over three months without a fix. Three pull requests were touched, the most substantive being reference deployment assets for running Claude apps gateway on AWS.

## 2. Releases

No new versions were published in the last 24 hours. This section is omitted.

## 3. Hot Issues

**1. Windows `/desktop` launch failure — still open, most-discussed issue**
[#59824](https://github.com/anthropics/claude-code/issues/59824) · [OPEN] · 10 comments · 8 👍
`/desktop` fails with "Failed to open Claude Desktop" on Windows even when the app is installed and running. As the longest-running open bug with the highest engagement, it remains the community's top pain point on the Windows platform.

**2. Weekly usage limit jumped from ~50% to 100% in under an hour**
[#69430](https://github.com/anthropics/claude-code/issues/69430) · [CLOSED] · 8 comments · 6 👍
A Max 20x plan user reported a dramatic, unexplained spike in weekly limit consumption. The high comment count suggests billing/usage transparency remains a sensitive topic.

**3. Usage Policy classifier false positive on security terminology**
[#61625](https://github.com/anthropics/claude-code/issues/61625) · [CLOSED] · 6 comments · 2 👍
A false positive on benign content (AER tier tables with sources like "WSJ," "Krebs," "Black Hat") shows the policy classifier still trips on routine security-domain vocabulary — a recurring frustration for infosec devs.

**4. Subagent results routed to root teammate, not the spawning teammate**
[#69212](https://github.com/anthropics/claude-code/issues/69212) · [CLOSED] · 4 comments
Teammate-spawned subagents return results to the wrong agent. For users building multi-agent workflows on Linux (tmux), this breaks delegation logic.

**5. Fullscreen renderer suspends with SIGTTIN in iTerm2**
[#80131](https://github.com/anthropics/claude-code/issues/80131) · [CLOSED] · 4 comments · 3 👍
`CLAUDE_CODE_NO_FLICKER=1` loses the TTY foreground process group and suspends on launch in iTerm2, with mouse tracking leaking into the shell — while working fine in Ghostty. A specific-but-annoying TUI regression.

**6. Cowork personal GitHub marketplace never updates, serves stale versions**
[#69683](https://github.com/anthropics/claude-code/issues/69683) · [CLOSED] · 3 comments
Plugin clones from personal GitHub marketplaces silently fail, and the runtime serves stale versions despite correct metadata. A correctness issue for the cowork/plugins ecosystem.

**7. MCP dict/object arguments serialized as JSON strings — regression of #3084**
[#80666](https://github.com/anthropics/claude-code/issues/80666) · [CLOSED] · 3 comments
Object-typed MCP tool arguments get stringified before being sent, causing `422 Input should be a valid dictionary` errors. Notably, this is a regression of a previously fixed defect (#3084) — a sign of recurring test coverage gaps in MCP serialization.

**8. `CLAUDE_CODE_OAUTH_TOKEN` ignored on first run due to onboarding gate**
[#73403](https://github.com/anthropics/claude-code/issues/73403) · [CLOSED] · 2 comments · 1 👍
On corporate Windows VDI, pre-generated OAuth tokens are bypassed by the onboarding flow (theme picker + login). Breaks scripted/CI-style provisioning.

**9. Linux desktop: minimize button not working (KDE Plasma 5)**
[#76004](https://github.com/anthropics/claude-code/issues/76004) · [OPEN] · 2 comments · 2 👍
One of the few remaining open items on this list — the desktop app's minimize button silently fails on KDE. Lingering Linux desktop polish gap.

**10. claude.ai MCP connectors appear uninvited and nag every startup**
[#73682](https://github.com/anthropics/claude-code/issues/73682) · [CLOSED] · 1 comment · 1 👍
Google Calendar, Gmail, and Drive connectors auto-appear with a startup CTA ("1 MCP server needs authentication"), which the reporter calls a dark pattern. A notable opt-out/opt-in UX concern for privacy-conscious users.

## 4. Key PR Progress

Note: Only 3 PRs were updated in the window, so all are listed.

**1. Add Claude apps gateway on AWS example deployment assets**
[#79898](https://github.com/anthropics/claude-code/pull/79898) · [CLOSED] · by roy-ant
Reference deployment artifacts for running the Claude apps gateway on AWS with Amazon Bedrock, sibling to the existing GCP examples under `examples/gateway/aws/`. Useful for teams adopting the gateway on AWS.

**2. Create pylint.yml**
[#83890](https://github.com/anthropics/claude-code/pull/83890) · [OPEN] · by KrypticKode007
A small CI workflow addition adding a Pylint linting step. No description provided; open for review.

**3. docs: clarify plugin MCP configuration scope**
[#75252](https://github.com/anthropics/claude-code/pull/75252) · [CLOSED] · by andrewmuratov
Reopened from #74857 (after the original fork was deleted), this documentation PR clarifies that plugin `mcpServers` config is for plugin-bundled MCP servers and is separate from user-level MCP allow/deny lists in `~/.claude.json`. A helpful clarity fix for plugin authors.

## 5. Feature Request Trends

Distilled from the issue set, the most-requested feature directions are:

- **Proactive plugin/skill updates** — Update plugins and skills at session start automatically rather than on-demand mid-conversation, which derails sessions and burns tokens (#73681).
- **Hooks for pre-render gating** — A `PreResponse` hook to gate outbound assistant prose before it renders, addressing the draft-then-rewrite friction with Stop hooks (#73669).
- **Desktop UX improvements** — Keyboard shortcuts to move focus between split-view session panes in the Desktop app (#73679).
- **Auth flow flexibility** — Support for standard OAuth/license authentication flows without triggering safeguard policies, important for commercial app developers (#73651).
- **Smarter preview panel** — Don't auto-open edited framework templates (e.g., Angular `.html`) as static pages in the Launch preview; respect framework context (#73653).

## 6. Developer Pain Points

Recurring frustrations visible across the issue batch:

- **Model escalation/downgrade surprises** — Multiple reports of safe messages causing silent model switches (e.g., Fable → Opus) or the `/model` picker contradicting startup banners (#73672, #73652, #73646, #73640). Combined with **context window clamping** (native-1M sessions silently capped at 200K on Max plans), users feel the model layer lacks transparency.
- **Policy/security false positives** — Both the usage policy classifier and agent safeguards frequently fire on legitimate security testing, vulnerability scanning, and security terminology (#61625, #73666, #73645) — a major blocker for infosec-focused developers.
- **Windows reliability is still lagging** — The `/desktop` failure (#59824), silent `!` prompt output loss (#73671), Bash tool producing no stdout/stderr (#73676), and onboarding ignoring OAuth tokens (#73403) paint a picture of persistent Windows platform gaps.
- **MCP connector friction** — Uninvited claude.ai connectors nagging at startup (#73682), Cowork connectors permanently disabled until renamed (#73663), and regressed object-argument serialization (#80666) show the MCP integration layer still has rough edges.
- **Agent disobeying instructions** — Reports of the agent ignoring current rules and acting on stale context (#87418, #87445) remain a core trust issue, though both were closed without a repro.

---

*Data window: GitHub issues and PRs updated 2026-08-24 through 2026-08-25. Most items in this batch were auto-closed as "stale" during a maintainer cleanup, so active development focus this cycle appears to be on PR review rather than new issue triage.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-25

## Today's Highlights

A new patch release (`rust-v0.149.1`) and an alpha (`rust-v0.150.0-alpha.8`) landed this week, bringing incremental fixes on top of the 0.149 line. Meanwhile, the community continues to report a cluster of **authentication instability** issues on the desktop app — repeated sign-outs, invalidated refresh tokens, and thread-resume auth failures dominate the most active threads. On the engineering side, a large batch of closed PRs (mostly from `copyberry[bot]`) signals focused work on Multi-Agent V2 ownership enforcement, Windows sandbox ACL hardening, Guardian v2 review scopes, and credential brokering for AWS Bedrock and network proxies.

---

## Releases

- **[rust-v0.149.1](https://github.com/openai/codex/releases/tag/rust-v0.149.1)** — Patch release. No detailed changelog was published, but it follows the 0.149.0 line and likely contains targeted bug fixes. Full diff: [rust-v0.149.0...rust-v0.149.1](https://github.com/openai/codex/compare/rust-v0.149.0...rust-v0.149.1)
- **[rust-v0.150.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.8)** — Alpha release; no detailed changelog provided.

---

## Hot Issues (Top 10)

1. **[#39162 — Opening existing conversation invalidates ChatGPT auth and redirects to sign-in](https://github.com/openai/codex/issues/39162)**
   macOS desktop app regression: resuming a thread signs the user out. 51 comments, 31 👍. This is the most-discussed issue this week and pairs with several similar auth reports below.

2. **[#37403 — Desktop cannot resume Remote Control / CLI thread: "already has an active writer"](https://github.com/openai/codex/issues/37403)**
   Regression on macOS where remote-continued CLI threads fail after a desktop update. 30 comments, 27 👍. Affects a popular off-hours workflow.

3. **[#35097 — gpt-5.6-luna marked as MultiAgent V1, so V2 spawn_agent rejects it](https://github.com/openai/codex/issues/35097)**
   Model capability metadata mismatch breaks subagent spawning. 29 comments, 51 👍 — highest reaction count in this batch, indicating broad developer impact.

4. **[#35746 — Paginated history drops valid flattened rollout records and reuses ordinals](https://github.com/openai/codex/issues/35746)**
   Session history decoding is inconsistent when paginated; valid records silently dropped. 25 comments. Relevant to anyone building tooling on session rollouts.

5. **[#37104 — Windows/WSL integrated terminal silently fails before PTY/WSL startup](https://github.com/openai/codex/issues/37104)**
   Terminal panels fail to open; bottom and side panels unusable. 19 comments. Tagged as a Papercuts 2026 item.

6. **[#17354 — Recent Thread history wiped in app, present in CLI](https://github.com/openai/codex/issues/17354)**
   Long-standing issue (since April) where the app loses thread history that still exists in the CLI. 14 comments. Still open after months — a recurring trust problem for desktop users.

7. **[#21777 — Auto compaction: expose compaction to agent](https://github.com/openai/codex/issues/21777)**
   Enhancement request: the agent should be aware of compaction during goal runs to avoid triggering it repeatedly. 9 comments, 9 👍. Strong signal for long-running agent workflows.

8. **[#40267 — Thread resume signs out desktop: rotated refresh token never persisted](https://github.com/openai/codex/issues/40267)**
   Freshly reported auth bug: OAuth refresh rotation fails, `401 refresh_token_invalidated`, and even a clean re-login is invalidated within 76 seconds. 6 comments. Likely a high-priority fix candidate.

9. **[#40339 — config.toml migration generates permissions block that fails --strict-config](https://github.com/openai/codex/issues/40339)**
   Auto-migration writes a `permissions.<name>` block that breaks strict config parsing; `sandbox_workspace_write.network_access` silently ignored. 5 comments. Affects config-heavy users and CI.

10. **[#34289 — PostToolUse payload carries no failure signal; PostToolUseFailure never fires](https://github.com/openai/codex/issues/34289)**
   Hooks system lacks failure discrimination in `PostToolUse`; the documented `PostToolUseFailure` event is never emitted. 6 comments. Important for anyone building hook-based automation.

---

## Key PR Progress (Top 10)

1. **[#40484 — Broker credential aliases in child environments](https://github.com/openai/codex/pull/40484)** (closed)
   Credentials inherited from a parent are now discovered even when the canonical provider variable is filtered from the child environment; embedded values are replaced correctly.

2. **[#40481 — Support managed AWS access keys for Amazon Bedrock](https://github.com/openai/codex/pull/40481)** (closed)
   Adds experimental `amazonBedrockAccessKeys` login flow with SigV4-signed requests, persisted in the auth store.

3. **[#40477 — Reload Multi-Agent V2 children through their parent](https://github.com/openai/codex/pull/40477)** (closed)
   Prevents direct resumption of unloaded child agents from caller-provided settings; routes reloads through the parent's authority.

4. **[#40475 — Request read control when updating Windows sandbox ACLs](https://github.com/openai/codex/pull/40475)** (closed)
   Fixes `SetSecurityInfo` rejection by requesting `READ_CONTROL` alongside `WRITE_DAC`; adds a Windows regression test.

5. **[#40471 — Render Markdown links as clickable labels in supported terminals](https://github.com/openai/codex/pull/40471)** (closed)
   Web-link labels are now rendered cyan/underlined with the destination hidden in hyperlink-capable terminals; fallback for unknown terminals preserved.

6. **[#40464 — Enforce subagent ownership across app-server inputs](https://github.com/openai/codex/pull/40464)** (closed)
   Centralizes ownership checks so parent-owned Multi-Agent V2 subagents cannot be mutated via app-server endpoints (e.g., turn injection).

7. **[#40460 — Prevent Unix PTY I/O from blocking runtime shutdown](https://github.com/openai/codex/pull/40460)** (closed)
   Drives PTY reads/writes through nonblocking channels so detached children or backpressure no longer stall Tokio shutdown.

8. **[#40449 — Route peer agent completion activity to the initiating turn](https://github.com/openai/codex/pull/40449)** (closed)
   Completed subagent activity is now attributed to the initiating agent's turn rather than the completed agent's parent thread.

9. **[#40447 — Retry failed shell snapshot captures](https://github.com/openai/codex/pull/40447)** (closed)
   Failed captures are retried after a one-second backoff instead of being cached as permanently failed.

10. **[#40438 — Use rust-lld for Bazel Windows MSVC Rust links](https://github.com/openai/codex/pull/40438)** (closed)
    Switches Windows MSVC Rust toolchains to the bundled `rust-lld` linker for more reliable Bazel builds.

---

## Feature Request Trends

- **Multi-Agent V2 lifecycle control** — Multiple PRs enforce parent ownership and turn attribution for subagents; users want stable, predictable subagent behavior (see #35097).
- **Compaction transparency** — Developers want the agent to be compaction-aware during long goal runs to avoid repeated context thrashing (#21777).
- **Broader auth/credential support** — Managed AWS access keys for Bedrock (#40481) and credential brokering for network proxies (#40466) reflect demand for enterprise-grade auth paths.
- **Better hooks and failure signals** — Users expect `PostToolUse` to carry failure status and `PostToolUseFailure` to actually fire (#34289).
- **VS Code multi-view support** — Request to open multiple independent Codex views in one window (#36873).
- **AWS GovCloud restore** — Community asking to bring back Bedrock support for GovCloud regions (#29646, 11 👍).
- **Windows usability** — Custom taskbar icon ordering (#30330) and general Windows terminal/sandbox stability improvements continue to surface.

---

## Developer Pain Points

1. **Desktop auth instability (highest priority)** — Multiple reports (#39162, #39218, #40267) describe the app logging users out repeatedly, invalidating refresh tokens, and failing to persist rotated tokens. This is the single most active theme and is damaging trust in the desktop workflow.
2. **Thread/session history loss and mapping breakage** — History disappears from the app while still present in the CLI (#17354), updates lose project-to-sidebar mapping (#26157), and recents vanish after project recreation (#35135).
3. **Windows-specific regressions** — Terminal failures (#37104), MSIX auto-updater loops (#38843), browser/computer-use automation failures (#40048), and even a kernel crash on Insider builds (#40119) paint a picture of Windows being a second-class citizen.
4. **Config migration fragility** — Auto-migration of `config.toml` can generate blocks that fail strict validation (#40339), creating friction for CLI power users.
5. **Remote Control reliability** — WebSocket timeouts behind proxies (#38768), "active writer" conflicts (#37403), and general unusability across updates (#40476) are eroding confidence in remote workflows.
6. **Hooks/sandbox correctness** — Missing failure signals in hooks (#34289) and MCP stop-hook fail-open behavior (#39858) are blockers for automation builders.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-25

## 1. Today's Highlights

The community's focus remains on agent reliability: the most-discussed issues center on subagents reporting false success (MAX_TURNS mislabeled as GOAL), the generalist agent hanging indefinitely, and shell commands getting stuck at "Waiting input" after completion. Maintainer attention is split between fixing these runtime bugs and advancing infrastructure work such as AST-aware codebase mapping, bash-affinity sandboxing, and the Auto Memory system's security and retry behavior. A fresh nightly build (v0.56.0-nightly.20260824) dropped today, alongside a wave of security- and documentation-focused PRs.

## 2. Releases

- **v0.56.0-nightly.20260824.g5411f113c** — New nightly release ([changelog](https://github.com/google-gemini/gemini-cli/compare/v0.56.0-nightly.20260823.g5411f113c...v0.56.0-nightly.20260824.g5411f113c)). No release notes summarize bulk behavior changes; differences are at the commit-diff level. Also in flight are cherry-pick processes tracking toward a `v0.57.0-preview.1` patch ([PR #29024](https://github.com/google-gemini/gemini-cli/pull/29024)).

## 3. Hot Issues

1. **[#22323 — Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** (p1, 13 comments) — The `codebase_investigator` subagent reports `status: "success"` / `Termination Reason: "GOAL"` even when it hit the turn limit before doing any work. This masks real interruptions and is the highest-traffic issue today. 
2. **[#21409 — Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)** (p1, 8 comments, 8 👍) — Deferring to the generalist agent hangs indefinitely (users report waiting up to an hour even for trivial folder creation). Workaround: instructing the model to avoid subagents entirely.
3. **[#25166 — Shell command stuck on "Waiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166)** (p1, 3 👍) — Simple CLI commands occasionally hang with the shell shown as active/awaiting input even though execution finished. High-impact core bug.
4. **[#21983 — Browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)** (p1) — Browser agent terminates with `GOAL` but fails under Wayland sessions, a platform-specific blocker for Linux users.
5. **[#19873 — Leverage model's bash affinity via zero-dependency OS sandboxing](https://github.com/google-gemini/gemini-cli/issues/19873)** (p2 enhancement) — Proposal to let Gemini 3 models use native POSIX toolchains (`grep`, `sed`, `awk`) inside a sandbox with post-execution intent routing, balancing native capability with security.
6. **[#22745 — Assess impact of AST-aware file reads/search/mapping](https://github.com/google-gemini/gemini-cli/issues/22745)** (p2 EPIC) — Investigates AST-aware tools to precisely read method bounds in one call, reducing noise, token bloat, and misaligned reads.
7. **[#21968 — Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** (p2) — Anecdotal but recurring: the CLI won't proactively invoke custom skills/sub-agents unless explicitly instructed, even for highly relevant tasks.
8. **[#26522 — Auto Memory retries low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** (p2) — Sessions judged low-signal are never marked processed, so they resurface repeatedly; flux in the background extractor's inbox.
9. **[#26525 — Deterministic redaction + reduced Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)** (p2, security) — Secrets are sent to the extraction model before prompt-time redaction happens; also flags the service logging existing skills.
10. **[#22672 — Agent should stop/discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)** (p2) — Models occasionally reach for `git reset`/`--force` or destructive DB operations when safer alternatives exist; deserves guardrails and better prompting.

## 4. Key PR Progress

1. **[#29024 — Cherry-pick to release v0.57.0-preview.1](https://github.com/google-gemini/gemini-cli/pull/29024)** — Robot-driven patch bump on the preview release train.
2. **[#28934 — History rollback and retry nudge optimizations](https://github.com/google-gemini/gemini-cli/pull/28934)** (closed) — Rolls back synthetic tool cancellations and refines retry nudges to control context bloat, reduce API calls, and maximize prefix caching.
3. **[#29022 — Keep `ask_user` question in text history](https://github.com/google-gemini/gemini-cli/pull/29022)** — Adds `ui.keepAskUserQuestionsInHistory` so interactive questions aren't lost when resuming sessions.
4. **[#29019 — Reviewable eval drafts from session logs (`eval:from-log`)](https://github.com/google-gemini/gemini-cli/pull/29019)** (help wanted, XL) — Turns real session logs into starting points for behavioral evals, capturing prompts, tool usage, and failures.
5. **[#28938 — Keep GIT_CONFIG_* env triplets internally consistent](https://github.com/google-gemini/gemini-cli/pull/28938)** (p1) — Prevents redaction from leaving half of a numbered `GIT_CONFIG_*` pair, which made env unparsable by Git; also stops restoring sensitive values post-sanitization.
6. **[#29008 — Strip execution-affecting GIT_* env vars in `getSafeGitEnv`](https://github.com/google-gemini/gemini-cli/pull/29008)** (p1, security) — Fixes #29003: internal git call sites only stripped `GIT_CONFIG_*`; this closes the gap for other execution-affecting `GIT_*` variables.
7. **[#28940 — A2A server: clear stale cancellation error on new turns](https://github.com/google-gemini/gemini-cli/pull/28940)** (closed) — Fixes state corruption where subsequent prompts crash with `Execution aborted` after a cancellation.
8. **[#29018 — A2A server: remove misleading security schemes and hardcoded credentials](https://github.com/google-gemini/gemini-cli/pull/29018)** (security) — Strips insecure/hardcoded credentials and mislabeled `securitySchemes` from agent metadata; fixes #29001.
9. **[#28863 — Extensions: consent on env changes + sanitize runtime env vars](https://github.com/google-gemini/gemini-cli/pull/28863)** — Extension updates could bypass consent and inject env vars into spawned MCP servers; now incorporated into consent strings.
10. **[#28914 — On-retry nudge into `contents` preserves prefix caching](https://github.com/google-gemini/gemini-cli/pull/28914)** (p1) — Moves nudge from `systemInstruction` to end of `contents` so the model sees recovery guidance right before generating, without breaking caching.
11. **[#29017 — Symlinked/junctioned skill directory dedupe](https://github.com/google-gemini/gemini-cli/pull/29017)** — Fixes #28944: avoids duplicate skills when `.gemini` and `.agents` are linked (Windows junction or POSIX symlink).

*Also notable: docs/CI hygiene PRs — [#29013](https://github.com/google-gemini/gemini-cli/pull/29013), [#29011](https://github.com/google-gemini/gemini-cli/pull/29011), [#29009](https://github.com/google-gemini/gemini-cli/pull/29009) (documenting missing flags, correcting ACP/env-redaction docs) and [#29015](https://github.com/google-gemini/gemini-cli/pull/29015) (explicit CI `permissions` blocks).*

## 5. Feature Request Trends

- **Agent reliability & recovery**: persistent asks for automatic session takeover, lock recovery in the browser agent ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232)), truthful termination reporting ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)), and hanging fixes ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409), [#25166](https://github.com/google-gemini/gemini-cli/issues/25166)).
- **Token-frugality & context control**: AST-aware reads/mapping ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) and "Tactful Extraction" surgical read hierarchies ([#19561](https://github.com/google-gemini/gemini-cli/issues/19561)).
- **Sandboxing & security posture**: bash-affinity zero-dependency sandboxing ([#19873](https://github.com/google-gemini/gemini-cli/issues/19873)), deterministic env/secret redaction ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)), and guardrails against destructive commands ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)).
- **Proactive skills/sub-agent use**: the model should self-deploy custom skills and sub-agents more aggressively ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)).
- **Persistent, file-based task tracking**: moving from in-context `WriteToDo` to durable CRUD trackers ([#18836](https://github.com/google-gemini/gemini-cli/issues/18836), [#21000](https://github.com/google-gemini/gemini-cli/issues/21000)).

## 6. Developer Pain Points

- **Silent failures & false success**: subagents falsely report `GOAL`/success after hitting MAX_TURNS ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)); hangs with no timeout ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)); shell commands stuck showing "Awaiting input" ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)).
- **Debugging black box**: `/bug` reports omit subagent context ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)); subagent trajectories aren't shareable via `/chat share` ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)).
- **Configuration friction**: symlinked agent/skill files not recognized ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079)); browser agent ignores `settings.json` overrides like `maxTurns` ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)); 400 errors with >128 tools enabled ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)).
- **Environment/context hygiene**: temp scripts scattered across the workspace ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)); memory system retrying low-signal sessions forever ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)) and silently skipping invalid memory patches ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)).
- **Interactive/terminal issues**: model getting stuck at interactive prompts (e.g., Vite app scaffolding, [#22465](https://github.com/google-gemini/gemini-cli/issues/22465)) and terminal resize flicker / performance ([#21924](https://github.com/google-gemini/gemini-cli/issues/21924)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-25

## 1. Today's Highlights
The Copilot CLI team shipped **v1.0.81-9**, which surfaces model data-retention warnings directly in the `/model` picker — a transparency win for privacy-conscious users. Meanwhile, the community is wrestling with a persistent wave of **MCP OAuth failures** (Entra ID, Atlassian, and Enterprise accounts) and a long-running, heavily-upvoted **HTTP 400 error report** (#1274) that has accumulated 27 comments. Under the hood, reliability concerns dominate: handshake timeouts, lost tool results after background compaction, and a broken `--cloud` owner picker.

## 2. Releases
- **[v1.0.81-9](https://github.com/github/copilot-cli/releases)** — Improved: Shows model data-retention warnings with links in the `/model` picker, helping users understand how their prompts/data are handled per model.

## 3. Hot Issues
- **[#1274 — CLI constantly getting 400 errors for invalid request body](https://github.com/github/copilot-cli/issues/1274)** *(27 comments, 11 👍)* — Long-running, high-engagement bug: ~95% of code-review prompts on a diff file fail with 400. Community is split on whether validation is server-side or CLI-crafted; debug logs included. This is the single biggest blocker for reviewers right now.
- **[#1973 — Feature Request: Tool whitelist for Interactive Mode](https://github.com/github/copilot-cli/issues/1973)** *(12 comments, 27 👍)* — The most-upvoted open item. Users want granular allowlists for safe read-only tools (`grep`, `cat`, `git log`) instead of the all-or-nothing `/allow-all`. Clear demand for a permission middle ground.
- **[#4490 — Atlassian MCP OAuth authentication broken in 1.0.80 (RFC 8414 §3.3 regression)](https://github.com/github/copilot-cli/issues/4490)** *(5 comments)* — Closed, but a high-signal regression: the authorization server's advertised issuer no longer matches its discovery URL. Notably, #4584 reports the same error persists in the 1.0.81 prerelease, suggesting the fix may be incomplete.
- **[#4582 — MCP OAuth authorize request omits 'scope' parameter for Entra ID](https://github.com/github/copilot-cli/issues/4582)** *(2 comments)* — With a static `oauthClientId` + public client (no Dynamic Client Registration), the `/authorize` request lacks `scope`, triggering `AADSTS900144`. Another Entra ID friction point for remote MCP servers.
- **[#4421 — MCP initialize handshake has a fixed, non-configurable 60s budget with no retry](https://github.com/github/copilot-cli/issues/4421)** *(2 comments)* — `npx`-launched stdio servers fail ~29% of sessions and are never respawned once the 60s budget expires. No backoff, no retry, no tuning option — a serious availability concern for MCP-heavy setups.
- **[#4568 — `--cloud` owner picker hangs, reconnect crashes, and task polling reaches 429](https://github.com/github/copilot-cli/issues/4568)** *(1 comment)* — Multi-symptom failure: hangs at "Loading available owners…" without repo context, cloud tasks stuck at `session.requested`, and rate-limit storms. Cloud mode is effectively unreliable for some users.
- **[#4590 — Extension SDK reconnects dispose the session hook processor](https://github.com/github/copilot-cli/issues/4590)** *(1 comment)* — Every MCP host reload restarts the entire extension cohort; each restarting extension calls `session.resume`, and teardown disposes the hook processor ("Hook processor is not configured for session id"). Multi-extension setups are fragile.
- **[#4570 — Windows: plugin install/update fails with "Access is denied (os error 5)" while VS Code is running](https://github.com/github/copilot-cli/issues/4570)** *(1 comment)* — Closing VS Code makes the command succeed. Affects every plugin, not one specific one — a platform-level file-locking conflict worth a quick look.
- **[#4572 — Background compaction can lose a completed parallel GPT tool result and cause HTTP 400](https://github.com/github/copilot-cli/issues/4572)** *(1 comment)* — In long `gpt-5.6-sol` sessions, automatic compaction can drop a successfully-executed parallel tool call, yielding `CAPIError: 400 No tool output found`. Data-loss adjacent in long-running autopilot sessions.
- **[#4414 — BYOK custom providers return local 403 before requests reach the provider](https://github.com/github/copilot-cli/issues/4414)** *(1 comment, 2 👍)* — Closed, but important for BYOK users: custom OpenAI/Anthropic-compatible providers get a local `Authorization error` on every request and `/login` doesn't help. Indicates a possible redirect/proxy misconfiguration on the CLI side.

## 4. Key PR Progress
Only **one** pull request was updated in the last 24 hours:

- **[#4573 — Rename README.md to README.mdmain](https://github.com/github/copilot-cli/pull/4573)** — A trivial, likely accidental/junk rename with no code diff. No substantive feature or bugfix PRs are in flight this cycle; the project is in a comment-and-triage phase rather than a merge-heavy period.

## 5. Feature Request Trends
- **Multi-turn `/ask` conversations** — The single most-requested interaction enhancement, filed three times by the same author across the window ([#4538](https://github.com/github/copilot-cli/issues/4538), [#4577](https://github.com/github/copilot-cli/issues/4577), [#4579](https://github.com/github/copilot-cli/issues/4579)). Users want to answer follow-up clarifications inside the isolated `/ask` context; the team should consolidate these duplicates.
- **Parallel terminal workflows via `/fork`** ([#4578](https://github.com/github/copilot-cli/issues/4578), [#4580](https://github.com/github/copilot-cli/issues/4580)) — Allow `/fork` to spawn a new terminal and add a `copilot --fork` startup flag so users can work two sessions side-by-side without manual terminal juggling.
- **Granular tool permissions** ([#1973](https://github.com/github/copilot-cli/issues/1973)) — A whitelist for read-only tools in Interactive Mode, decoupling "safe operations" from the full `/allow-all`.
- **Media support** — PDF analysis/upload ([#4583](https://github.com/github/copilot-cli/issues/4583)) and image generation for developer assets like icons, favicons, and OG images ([#4581](https://github.com/github/copilot-cli/issues/4581)).
- **Status-line polish** — Raw token counts in the status line ([#4589](https://github.com/github/copilot-cli/issues/4589)) and end-aligned truncation for path/branch footer items ([#4591](https://github.com/github/copilot-cli/issues/4591)).

## 6. Developer Pain Points
- **MCP OAuth is a recurring thorn** — At least four separate reports this window cover issuer mismatch (RFC 8414), missing `scope` for Entra ID, and Enterprise cross-origin resource identifiers ([#4490](https://github.com/github/copilot-cli/issues/4490), [#4582](https://github.com/github/copilot-cli/issues/4582), [#4584](https://github.com/github/copilot-cli/issues/4584), [#4408](https://github.com/github/copilot-cli/issues/4408)). The 1.0.80 "fix" may not have fully landed.
- **Cost bloat from tool schemas** ([#4588](https://github.com/github/copilot-cli/issues/4588)) — MCP tool deferral (tool search) is only enabled for Anthropic models; OpenAI/Gemini/Grok/MAI ship all schemas every turn, making a one-word prompt cost 21.6k tokens vs. 21.6k/21.6k? (21.6k vs 21.6k? — originally reported 47k vs 21k in the title, 21.6k in the body). A major cost concern for token-billed users.
- **Session reliability gaps** — Stale `inuse.<pid>.lock` files on unclean exits ([#3255](https://github.com/github/copilot-cli/issues/3255)), agents acknowledging work without executing tools ([#4566](https://github.com/github/copilot-cli/issues/4566)), and background compaction dropping tool results ([#4572](https://github.com/github/copilot-cli/issues/4572)) all point to robustness issues in long-lived sessions.
- **Inconsistent behavior between modes** ([#4592](https://github.com/github/copilot-cli/issues/4592)) — Interactive mode activates zero plugin-contributed custom agents while `--prompt` mode activates four in the same directory; surprising and hard to debug for plugin authors.
- **Windows plugin/VS Code conflict** ([#4570](https://github.com/github/copilot-cli/issues/4570)) — File locking during plugin installs while VS Code is open is a reproducible daily annoyance for Windows users.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-25

> **Note on data coverage:** The provided data window (last 24h) contains only 1 Issue and 1 PR updated within that period, and zero new releases. This digest focuses on those items; where a section requests a larger sample, I report only what is available rather than fabricating entries.

---

## 1. Today's Highlights

Activity in the last 24 hours was light but meaningful: a long-running, highly-voted usage-billing issue (#1994, 👍7) saw renewed discussion, centering on confusion and frustration over Kimi Code's token-based quota model for K2.6 — users report burning a 2-hour subscription allowance in just two tasks. On the code-quality side, PR #2595 proposes a critical safety fix preventing `StrReplaceFile` from silently corrupting non-UTF-8 files during edits. No new releases shipped today.

---

## 2. Releases

No new releases in the last 24 hours. *(Omitted per instructions when none exist.)*

---

## 3. Hot Issues

Only one issue was active in the reporting window.

- **[#1994 — kimiCode用量计算有问题 (kimiCode usage calculation is wrong)](https://github.com/MoonshotAI/kimi-cli/issues/1994)**
  - **Author:** wanghonghust | **Comments:** 8 | **Reactions:** 👍7
  - **Why it matters:** The user reports that a 2-hour subscription allowance was consumed after just two tasks, because usage is calculated in *tokens* and K2.6's chain-of-thought is extremely long. The official marketing material advertises "300–1200 API requests per 5 hours," which the user argues implies billing by *request count*, not tokens — a direct contradiction causing trust issues.
  - **Community reaction:** Widespread agreement (7 upvotes) suggests this resonates broadly. The confusion centers on the gap between advertised request-based expectations and the actual token-based billing reality, amplified by K2.6's verbose reasoning. This is a high-priority billing-trust issue that the maintainers should address with clear documentation or a quota recalibration.

---

## 4. Key PR Progress

One PR was updated in the window.

- **[#2595 — fix(StrReplaceFile): refuse to edit files that are not valid UTF-8](https://github.com/MoonshotAI/kimi-cli/pull/2595)**
  - **Author:** shoemoney | **Created:** 2026-08-06
  - **What it does:** Addresses issue #2591. `StrReplaceFile` currently decodes the entire file with `errors="replace"`, applies the edit, and writes the whole file back. Any invalid UTF-8 byte — even those far from the edit location — gets replaced with U+FFFD (�), silently corrupting binary or mixed-encoding files.
  - **Why it matters:** This is a data-integrity bug fix. Silent corruption of unrelated bytes in a file is a serious failure mode for an AI coding tool, as it can destroy files the model was only minimally touching. The fix is conservative and correct: refuse the edit rather than risk corruption.

---

## 5. Feature Request Trends

Given the limited data window, only one clear direction emerges:

- **Transparent, predictable usage billing:** The unifying demand from #1994 is that usage accounting must be understandable and match the product's marketing. Specifically, users want either (a) billing aligned with request counts as advertised, (b) visibility into token consumption *before* starting a task so they can gauge cost, or (c) token-aware task sizing that accounts for K2.6's long chain-of-thought.

---

## 6. Developer Pain Points

Recurring frustrations evident from the active data:

- **Token-billing vs. request-billing mismatch:** The most prominent pain point. Developers on paid subscriptions feel cheated when a "2-hour" allowance vanishes after 2 questions due to CoT-heavy token consumption — the advertising implies per-request billing.
- **Lack of pre-flight cost estimation:** Users have no way to predict how many tokens (and thus quota) a task will consume before running it, making cost management impossible.
- **Silent data corruption risk:** While #2595 is a fix in progress, the underlying pain point is that the tool historically edited files opaquely, risking U+FFFD corruption on non-UTF-8 files — undermining trust for teams working with mixed-encoding codebases.

---

*Digest compiled from the MoonshotAI/kimi-cli GitHub repository data for 2026-08-25. Because only 2 items were active in the window, sections requesting 10 issues/PRs could not be fully populated without inventing content; the digest reflects only verified items.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode Community Digest – 2026‑08‑25**  

---

### 1. Today’s Highlights  
- The latest patch **v1.18.22** landed, fixing device‑login URL handling, stripping stale OpenCode Go discount messaging, and preventing `textVerbosity` from being sent to OpenAI‑compatible providers that ignore it.  
- Community discussion remains focused on **security/sandboxing** (Issue #2242, 86 👍) and **model reliability** – paid Zen models and several Go‑tier models repeatedly surface “Upstream request failed” errors.  
- Developer‑experience enhancements are progressing via PRs that add workspace‑aware prompt resolution, caller‑supplied workspace IDs, and richer tool‑timing/UI hooks.

---

### 2. Releases  
**v1.18.22** (released within the last 24 h)  
- **Core bugfixes**  
  - Removed outdated OpenCode Go first‑month discount messaging and pricing.  
  - Fixed device login links when the authentication server returns relative verification URLs or operates under a base path.  
  - Prevented `textVerbosity` from being forwarded to OpenAI‑compatible providers that do not support the field (avoids unnecessary errors).  

[Release notes](https://github.com/anomalyco/opencode/releases/tag/v1.18.22)

---

### 3. Hot Issues (10 selected)  

| # | Issue | Comments / 👍 | Why it matters | Community reaction |
|---|-------|---------------|----------------|--------------------|
| [#2242](https://github.com/anomalyco/opencode/issues/2242) | **Sandbox the agent** – restrict terminal/file access outside the current directory | 86 c / 72 👍 | Security‑critical request; users want seatbelt‑like isolation for AI‑generated commands. | Strong support; many ask for OS‑level sandboxing (macOS seatbelt, Linux namespaces, Windows Job objects). |
| [#36506](https://github.com/anomalyco/opencode/issues/36506) | **Paid OpenCode Zen models fail** with “Upstream request failed”; free models work | 17 c / 3 👍 | Highlights a reliability gap between free and paid tiers, affecting paying customers. | Frustration; users suspect provider‑side throttling or auth issues. |
| [#44528](https://github.com/anomalyco/opencode/issues/44528) | **Network error** on Windows 10 with Ollama Cloud provider | 19 c / 0 👍 | Intermittent connectivity breaks workflows after idle periods. | Users report needing to restart the app; logs show DNS/TLS handshake failures. |
| [#4489](https://github.com/anomalyco/opencode/issues/4489) | **Ephemeral one‑off sessions** for `opencode run` | 14 c / 15 👍 | Desire for stateless runs that don’t pollute the local session store. | Contributor offered to implement; discussion centers on UX (auto‑delete vs. explicit flag). |
| [#16077](https://github.com/anomalyco/opencode/issues/16077) | **Persistent Session Memory** – load previous conversation at startup | 14 c / 3 👍 | Enables AI‑assistant continuity across CLI sessions, a frequent ask for companion‑style usage. | Mixed; some worry about storage bloat, others see it as essential for long‑running projects. |
| [#10884](https://github.com/anomalyco/opencode/issues/10884) | **Add Support for MCP Apps** (Model Context Protocol) | 12 c / 50 👍 | Aligns OpenCode with the emerging MCP standard for pluggable AI contexts. | Strong enthusiasm; many see MCP as the future for extensible tooling. |
| [#11983](https://github.com/anomalyco/opencode/issues/11983) | **Keyboard keybinds** – `Shift+Enter` ignored for newline | 8 c / 0 👍 | Basic editing UX regression; forces users to resort to mouse or workarounds. | Simple fix requested; no opposition. |
| [#6310](https://github.com/anomalyco/opencode/issues/6310) | **LSP diagnostics bloat** – Lua (and other languages) slow sessions | 8 c / 0 👍 | Edit/write tools store full diagnostics, causing massive memory use in large workspaces. | Users request diagnostic sampling or size caps. |
| [#37815](https://github.com/anomalyco/opencode/issues/37815) | **Kimi K3 model fails** (“Upstream request failed”) while other Console Go models work | 7 c / 6 👍 | Points to model‑specific provider issues, affecting early adopters of the Kimi lineup. | Users ask for fallback or clearer error messaging. |
| [#44379](https://github.com/anomalyco/opencode/issues/44379) | **Ox Alpha Free (unlimited) network_error** – persists within a session | 6 c / 4 👍 | Free‑tier instability pushes users to paid plans or alternatives. | Work‑around (new session) noted; desire for automatic retry/reconnect. |

---

### 4. Key PR Progress (10 selected)  

| PR | Summary | Impact |
|----|---------|--------|
| [#44780](https://github.com/anomalyco/opencode/pull/44780) | **feat(core): resolve workspace prompt files** – allows `workspace:relative/path` references, snapshotting files via the session’s Environment. | Enables portable prompts that automatically pick up the latest project files without manual copying. |
| [#44771](https://github.com/anomalyco/opencode/pull/44771) | **feat(workspace): support caller‑supplied IDs** – lets `workspace.create` accept an ID and retry safely on crashes. | Prevents orphaned provider resources and simplifies durable embeddings. |
| [#44745](https://github.com/anomalyco/opencode/pull/44745) | **fix(ai): ignore unknown Gemini response parts** – keeps inbound parts opaque, strict‑decodes only known handlers. | Increases robustness against future Gemini API additions, reducing hard failures. |
| [#38704](https://github.com/anomalyco/opencode/pull/38704) | **feat(llm): add Apiario Dev as a native provider** – registers Apiário Dev as an OpenAI‑compatible endpoint. | Expands the provider ecosystem; users can switch to Apiário Dev without custom adapters. |
| [#38675](https://github.com/anomalyco/opencode/pull/38675) | **feat: add elapsed timer display for tools and turns** – shows duration next to each tool call and current turn in TUI. | Improves observability; helps developers spot slow tool usage. |
| [#38668](https://github.com/anomalyco/opencode/pull/38668) | **feat(plugin): add tui.prompt.submit hook** – fires before a prompt enters the query buffer. | Gives plugin authors a chance to mutate or log user input early in the pipeline. |
| [#38645](https://github.com/anomalyco/opencode/pull/38645) | **feat(tui): make file paths in Read/Grep/Glob output clickable** – clicking opens the referenced file/search root. | Streamlines navigation; reduces context‑switching in the terminal UI. |
| [#38640](https://github.com/anomalyco/opencode/pull/38640) | **feat(shell): PTY‑based interactive command execution with SecureInput** – detects password prompts (sudo, ssh) and defers input via a secure channel. | Enhances security for privileged operations run through the agent. |
| [#38600](https://github.com/anomalyco/opencode/pull/38600) | **feat(core): add Kimi Code OAuth** – implements device OAuth flow, persists identity, adds required `X‑Msh-*` headers. | Official Kimi Code integration, reducing auth‑related errors for that model family. |
| [#38763](https://github.com/anomalyco/opencode/pull/38763) | **fix(core): preserve reasoning metadata on errored assistant turns** – keeps `thinking` blocks when a turn is interrupted by network/timeouts. | Prevents loss of reasoning trace during transient failures, improving debugging. |

---

### 5. Feature Request Trends  

- **Session Persistence & Ephemerality** – Requests for both long‑term memory (load previous chats) and short‑lived, stateless runs indicate a split between “companion” and “CI‑style” usage.  
- **Sandboxing / Security** – Strong demand for OS‑level confinement of agent‑executed commands (seatbelt‑like).  
- **Model Context Protocol (MCP) Integration** – High interest in adopting MCP Apps as a pluggable context layer, suggesting a move toward standardized AI tooling.  
- **UX Polish** – Clickable file paths, timers, configurable keybinds, and better prompt‑submission hooks reveal a focus on making the TUI/desktop app feel like a native IDE.  
- **Provider Reliability** – Frequent complaints about specific models (paid Zen, Kimi K3, Ox Alpha) point to a need for better health‑checking, automatic fallback, and clearer error reporting.  

---

### 6. Developer Pain Points  

- **Network / Provider Errors** – Recurring “Upstream request failed” and “network_error” messages across paid Zen, Go‑tier, and free models disrupt workflows; users must restart sessions or switch models.  
- **Session Corruption & Bloat** – Large LSP diagnostics (especially Lua) and unchecked session storage cause slowdowns or crashes, prompting asks for diagnostic sampling, size limits, and manual cleanup options.  
- **Authentication & OAuth Gaps** – Device login flows break when providers return relative URLs; OAuth‑based providers (Kimi Code) required custom work until the recent PR.  
- **Keyboard & Input Quirks** – Basic keybindings (Shift+Enter for newline) and IME handling in Safari/Windows still need polishing, indicating gaps in cross‑platform input testing.  
- **Limited Observability** – Before the recent timer PR, users lacked insight into tool execution latency, making performance tuning difficult.  

---  

*Generated for the OpenCode developer community – all links point to the relevant GitHub resources.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-25

## 1. Today's Highlights
Pi shipped **v0.84.3** featuring a new optional native **PowerShell tool** for Windows users (a direct response to long-standing cross-platform friction with git bash) alongside **safer managed updates** that stage, verify, and atomically activate. Meanwhile, the community's biggest pain point remains **auto-compaction reliability** — Issue #6879 (auto-compaction never triggering until provider overflow, 19 👍) and #7048 (truncated compaction summaries) both saw renewed activity, and the maintainers merged a fix (#8575) that surfaces lost replay entries in session JSONL files. The Windows experience continues to dominate developer attention, led by a 44-comment megathread (#7547) on how people run Pi on Windows.

## 2. Releases
**v0.84.3**
- **PowerShell tool** — Optional native PowerShell command execution on Windows, addressing the pain of git bash path handling. See [docs](https://github.com/earendil-works/pi/blob/v0.84.3/packages/coding-agent/docs/windows.md#powershell-tool).
- **Safer managed updates** — Updates are now staged, verified, and atomically activated to reduce the risk of partial or corrupt installs.

## 3. Hot Issues

1. **[#7547 — [Windows] How do you use Pi on Windows? What issues are you seeing?](https://github.com/earendil-works/pi/issues/7547)** — OPEN, 44 comments. A community megathread surfaced by petrroll to map the fragmented ways Pi runs on Windows and where core energy should go. High signal for the maintainers, who are clearly reacting (see the PowerShell tool in v0.84.3).

2. **[#6879 — Auto-compaction never triggers after context grows past 100% until provider overflow](https://github.com/earendil-works/pi/issues/6879)** — OPEN, 22 comments, 19 👍. A 2-hour agentic turn on GPT-5.6-sol blew past the compaction threshold and only compacted after the API rejected the request at 373k tokens. The ask: check compaction after *every* agentic step, not just at turn boundaries.

3. **[#8167 — Cannot pick a model with built-in llama.cpp support](https://github.com/earendil-works/pi/issues/8167)** — CLOSED. llama-server router-mode models don't appear in the model list despite being loadable via `/llama`. Fixed by PR #8479 (expose unloaded presets), which also surfaced that `source: "preset"` entries were hidden even when autoload was enabled (#8558).

4. **[#7444 — WebSocket retry only handles two error codes](https://github.com/earendil-works/pi/issues/7444)** — CLOSED. The openai-codex WebSocket retry loop only special-cased `previous_response_not_found` and `websocket_connection_limit_reached`; any other `response.failed` frame hard-stopped the turn, turning transient failures into fatal ones.

5. **[#7885 — npm search not indexing newly published pi-packages](https://github.com/earendil-works/pi/issues/7885)** — CLOSED. `pi-affix-prompt` never appeared in `npm search` (or the pi.dev/packages gallery, which mirrors it), meaning new packages silently vanish from discovery. A publishing/pipeline issue with ecosystem impact.

6. **[#3159 — Edit tool terminated — timeout](https://github.com/earendil-works/pi/issues/3159)** — CLOSED. Qwen 27b began failing with edit tool `terminated` errors on fresh versions — suspected low timeout for edit operations. One of several long-lived reliability complaints about the edit tool.

7. **[#7048 — Compaction summary persisted truncated mid-word when generation hits token cap](https://github.com/earendil-works/pi/issues/7048)** — CLOSED. `generateSummary` only throws on `stopReason === "error"` and ignores `stopReason === "length"`, so summaries can silently truncate mid-word with no signal, corrupting future context.

8. **[#8166 — Custom message injected mid-tool-batch breaks tool_calls→tool adjacency (DeepSeek 400)](https://github.com/earendil-works/pi/issues/8166)** — OPEN, 7 comments. An extension calling `pi.sendMessage(..., {triggerTurn:false})` mid-batch desyncs tool/tool_calls order, yielding permanent `400` failures on *every* subsequent turn. A sharp edge for extension authors.

9. **[#4742 — Add SiliconFlow provider](https://github.com/earendil-works/pi/issues/4742)** — CLOSED. Request for built-in support for both international and China endpoints hosting open-weight models (Qwen, GLM, etc.). Part of a broader wave of provider-addition requests (Merge Gateway, Eden AI, Parasail.io).

10. **[#8409 — Regression: aborted turns end with stopReason "error" instead of "aborted"](https://github.com/earendil-works/pi/issues/8409)** — CLOSED. In 0.84.2, aborting during a tool call yields `stopReason: "error"` with "This operation was aborted", breaking callers that branch on the abort signal.

## 4. Key PR Progress

1. **[#8585 — fix(ai): abort OpenAI streams immediately when signal fires](https://github.com/earendil-works/pi/pull/8585)** — CLOSED. OpenAI Responses/Completions loops ignored the abort signal; the Anthropic path checks `signal?.aborted` per `reader.read()`. Fixes #8586 and makes RPC aborts responsive on OpenAI paths.

2. **[#8575 — fix(coding-agent): surface + bound the torn-append replay loss in session JSONL files](https://github.com/earendil-works/pi/pull/8575)** — CLOSED. A malformed "torn" JSONL line silently cost two replay entries with no signal. Now bounds the loss and surfaces it — meaningful for session durability.

3. **[#8479 — fix: expose unloaded llama.cpp presets](https://github.com/earendil-works/pi/pull/8479)** — CLOSED. Makes llama-server presets (via `--models-preset`) selectable so they can be loaded on request; addresses #8167 and aligns with llama-swap compatibility.

4. **[#8578 — fix(ai): pin createProvider TApi for xAI Responses provider](https://github.com/earendil-works/pi/pull/8578)** — CLOSED. Fixes a TS build break after #8124 routed the xAI catalog through OpenAI Responses — `Provider<"openai-completions" | "openai-responses">` was not assignable to `Provider<"openai-responses">`.

5. **[#8512 — feat(coding-agent): add optional PowerShell tool](https://github.com/earendil-works/pi/pull/8512)** — CLOSED. From mitsuhiko, who "gave up on git bash working well enough on Windows" due to path handling that breaks either unix or windows tools. Shipped in v0.84.3.

6. **[#8580 — feat(coding-agent): drop extra vertical padding on tool rows](https://github.com/earendil-works/pi/pull/8580)** — CLOSED. Removes 2-3 wasted empty lines per tool call in transcripts — a quiet but real TUI density win.

7. **[#8570 — fix(ai): preserve Codex thread affinity headers](https://github.com/earendil-works/pi/pull/8570)** — CLOSED. Adds the missing `thread-id` affinity header to OpenAI Codex Responses requests, matching the upstream Codex client's `session-id` + `thread-id` pair.

8. **[#8559 — feat(coding-agent): attach clipboard images as atomic markers](https://github.com/earendil-works/pi/pull/8559)** — OPEN. Pasted images currently insert a temp file path into the prompt; this makes them first-class attachment markers in the editor.

9. **[#8547 — feat(tui): move editor cursor on click](https://github.com/earendil-works/pi/pull/8547)** — OPEN. Pi supports mouse selection, but clicking in the prompt doesn't move the cursor — surprising in a mouse-enabled terminal. Part of a UI improvements series from Panoplos.

10. **[#8558 — feat: show llama presets if autoload enabled](https://github.com/earendil-works/pi/pull/8558)** — CLOSED. Complements #8479: now `/model` shows `source: "preset"` entries when the llama.cpp router can autoload them on first request.

## 5. Feature Request Trends

- **Provider breadth** — Persistent demand for new built-in providers: SiliconFlow (#4742), Merge Gateway (#5986), Eden AI (#6403), Parasail.io (#8450), and Amazon Bedrock Mantle routing for models like `openai.gpt-5.x` that Converse can't handle (#8572/#8573, addressing #5363).
- **Fresh model catalogs** — DeepSeek's `deepseek-v4-flash-vision-exp` vision model and peak/off-peak pricing aren't reflected in the built-in catalog (#8546, #8491); xAI Grok Build needs `reasoning.effort` omitted (#8422).
- **Session & workspace ergonomics** — Move a session into a new working directory (e.g., a git worktree) for AFK automation (#8554); portable "pi preset" export/import of named agent configs (#8588); per-project active-tool profiles in `.pi/settings.json` (#8583).
- **TUI/editor polish** — Configurable editor prompt prefix (#8291), click-to-move-cursor (#8547), fullscreen overlay selection policy (#8475), and OSC-133 jump markers on assistant messages with tool calls (#8410).
- **Extension developer hooks** — Renderer hook for extension-provided compactions (#8589); opt-in deferred tool schema loading for heavy extensions (#8583).

## 6. Developer Pain Points

- **Compaction failures are the top recurring theme.** Auto-compaction not triggering (#6879, 19 👍), truncated summaries on token cap (#7048), and Anthropic server-side refusal during compaction (#8017) all trace to a single fragile subsystem.
- **Windows remains a second-class citizen despite heavy usage.** Path separator mismatch in containment checks breaking *all* tools with explicit paths (#8441, marked "untriaged"), PowerShell 5.1 vs pwsh inconsistency between interactive and `-p` modes (#8582), git bash path-handling breakdowns (PR #8512's motivation), and the 44-comment usage megathread (#7547).
- **Abort/stream timing bugs keep biting.** OpenAI streams ignore abort signals mid-turn (#8586), aborted turns report `stopReason: "error"` instead of `"aborted"` (#8409), and WebSocket retry only covers two error codes (#7444). CLI entries can also exit 0 silently when stdin was consumed first (#8587).
- **Tool-call/message ordering fragility.** Custom messages injected mid-tool-batch permanently break tool_calls→tool adjacency on DeepSeek (#8166); edit tool timeouts throttle long operations (#3159).
- **Ecosystem discovery is fragile.** npm search stops indexing new pi-packages, so the pi.dev gallery silently misses them (#7885) — bad for extension authors just getting started.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-25

## 1. Today's Highlights

The Qwen Code project accelerated its reliability and architecture-cleanup work this week. A nightly release shipped a web-shell workspace fix, while the core team merged stream-safety protections into the Anthropic wire, finally matching the OpenAI stream's idle/lifetime watchdogs. Notable momentum also formed around channel integrations (two DingTalk PRs active), TUI rendering polish, and a long-running effort to strip legacy Gemini naming from the codebase (PR #9900, servicing the 12-item architecture review #4063).

## 2. Releases

**v0.22.0-nightly.20260824.3a1f86d805** — Nightly build containing a single web-shell fix: passing the session workspace cwd when opening from the overview panel (PR #9730).

Supporting release artifacts published in the same window:
- **cua-driver-rs-v0.20.0** — Qwen CUA Driver prebuilt binaries (vendored under `packages/cua-driver`): macOS codesigned + notarized universal binary plus the `QwenCuaDriver.app`; Linux and Windows unsigned builds for x86_64 and arm64 (glibc 2.31 floor).
- **pr-9806-verification-assets** and **gh-attach-assets** — CI attachment uploads.

## 3. Hot Issues

1. **[#5975 – Stream inactivity API error after v0.19.3 upgrade](https://github.com/QwenLM/qwen-code/issues/5975)** — The most-commented issue (12 comments). Users report frequent `[API Error: No stream activity for 120000ms after 19 chunks]` failures where "Thought for 2s" produces no output. Points to a core stream-reliability regression; directly motivates the new Anthropic watchdogs in PR #9945.

2. **[#4063 – core + cli architecture review: 12 structural issues](https://github.com/QwenLM/qwen-code/issues/4063)** — Flags that the core type system is "held hostage" by `@google/genai` (136 files import it directly), plus a P0-graded list of structural problems. Now actively being paid down via the Gemini renaming PR #9900.

3. **[#8083 – Make derived Config context ownership explicit](https://github.com/QwenLM/qwen-code/issues/8083)** — Proposes replacing ad hoc `Object.create(base)` prototype delegation used for subagents, scoped-memory agents, and approval-mode configs with explicit ownership semantics.

4. **[#9944 – MCP reconnect reports success but tools stay unavailable](https://github.com/QwenLM/qwen-code/issues/9944)** — After an HTTP-transport MCP server restarts and rotates its `mcp-session-id`, `qwen mcp reconnect --all` falsely claims success while calls return "Tool not found on MCP server."

5. **[#9942 – Hide skill commands from top-level slash completion](https://github.com/QwenLM/qwen-code/issues/9942)** — Community request: with many skills installed, `/` completion becomes crowded and buries built-in commands. Suggests skill commands be hidden or namespaced.

6. **[#9927 – Artifact updatedAt stays stale; write_file intermediates linger](https://github.com/QwenLM/qwen-code/issues/9927)** — `updatedAt` only moves when registration fields change, not on content updates; intermediate `write_file` states are left in a "missing" state.

7. **[#9005 – Anthropic wire lacks OpenAI's stream-safety protections](https://github.com/QwenLM/qwen-code/issues/9005)** — The Anthropic generator lacks the inactivity timeout and non-resetting lifetime cap the OpenAI wire has; now directly addressed by PR #9945.

8. **[#9026 – NO_TOOL_RESULT_PROGRESS hard-fails headless runs](https://github.com/QwenLM/qwen-code/issues/9026)** (closed) — Headless runs abort with "Model stream ended after a tool result without visible progress" when a model ends a turn quietly; a wedge between expected and actual stream behavior.

9. **[#8662 – Migrate TUI rendering from ink to OpenTUI](https://github.com/QwenLM/qwen-code/issues/8662)** — Structural problems in the heavily patched ink renderer (~1037-line patch) — flicker, repaint storms, poor mouse support — motivate a move to OpenTUI for flicker-free rendering and first-class mouse.

10. **[#9865 – Kimi rejects built-in tool schemas with uniqueItems](https://github.com/QwenLM/qwen-code/issues/9865)** (closed) — `uniqueItems: true` in `update_goal.evidenceRefs` and `todo_write.blockedBy` schemas causes DashScope to reject the full request for `kimi-k3` with HTTP 400.

## 4. Key PR Progress

1. **[#9895 – feat(daemon): scoped workspace memory tasks](https://github.com/QwenLM/qwen-code/pull/9895)** — Adds optional `project`/`user` targets to sessionless managed-memory remember/forget tasks across REST, ACP extension methods, and the TypeScript daemon SDK, with capability negotiation tags.

2. **[#9945 – fix(core): guard Anthropic streams with idle and lifetime watchdogs](https://github.com/QwenLM/qwen-code/pull/9945)** — Ports the OpenAI wire's inactivity timeout and non-resetting lifetime cap to the Anthropic generator, aborting silent streams or endless `thinking_delta` drip-feeds. Directly resolves #9005.

3. **[#9900 – refactor(core,cli): rename Gemini residue](https://github.com/QwenLM/qwen-code/pull/9900)** — PR 1 of the #4063 naming cleanup; renames identifier families that carry the `Gemini` fork prefix but aren't Gemini-API concepts.

4. **[#9922 – fix(channels): preserve DingTalk rich-text multi-image messages](https://github.com/QwenLM/qwen-code/pull/9922)** — Carries ordered image collections through ACP and daemon-backed sessions, persists daemon attachments for Web Shell hydration, and cleans up partial uploads.

5. **[#9728 – fix: repair Windows and macOS test lane failures](https://github.com/QwenLM/qwen-code/pull/9728)** — Product fixes plus test-fixture and CI-harness repairs to revive the two platform lanes (#9370) without leaving `main` red.

6. **[#9394 – feat(channels): add DingTalk Workspace channel](https://github.com/QwenLM/qwen-code/pull/9394)** — New built-in channel using an authenticated DWS CLI profile; supports DMs, @mentions, ambient groups, doc-mention notifications, and source-scoped sessions.

7. **[#9717 – feat(review): add prose-execution and counter-frame audits](https://github.com/QwenLM/qwen-code/pull/9717)** — Adds the two remaining post-mortem lenses: `prose-exec` audits instruction files (SKILL.md, agent definitions), plus a counter-frame audit.

8. **[#9914 – fix(web-shell): reduce streaming thought render jank](https://github.com/QwenLM/qwen-code/pull/9914)** — Keeps pure streamed assistant/thinking updates out of the top-level app render path while preserving live transcript updates; unmounts compact tool/thinking details when collapsed.

9. **[#9838 – feat(daemon): support current-session scheduled tasks](https://github.com/QwenLM/qwen-code/pull/9838)** — Enables scheduling tasks bound to the current session, extending the daemon scheduling surface.

10. **[#9932 – fix(cli): graft the review anchor forward across fail-closed rounds](https://github.com/QwenLM/qwen-code/pull/9932)** — Prevents incremental re-review from re-reading the whole diff every round when the previous round failed to close cleanly and withheld its anchor.

## 5. Feature Request Trends

- **Computer Use via persistent Node REPL** — A three-phase roadmap (#9333/#9334/#9335) migrates Computer Use from many model-visible atomic tools to "persistent Node REPL + importable JS SDK + Qwen Skill"; closed umbrella issue #9336 captures the full plan.
- **MCP ecosystem hardening** — Requests cluster around reconnect correctness (#9944), transcript rendering of MCP results (#9934), and open-source Mem0 protocol providers with configurable baseUrl (#9951, #9964).
- **TUI/rendering modernization** — Strong push toward OpenTUI migration (#8662), bottom-alignment and overflow fixes (#9305, #9966), hiding skill commands from slash completion (#9942), and reduced streaming jank (#9914).
- **Stream reliability & safety** — Multiple asks for idle/lifetime watchdogs across all provider wires (#5975, #9005) and graceful handling of quiet tool-result turns (#9026).
- **Architecture cleanup** — Explicit Config ownership (#8083) and systematic de-Google-ification of core types (#4063, #9900).

## 6. Developer Pain Points

- **Stream interruption errors** — The #5975 "No stream activity for 120000ms" pattern remains the top community frustration, surfacing across several provider wires and headless runs.
- **MCP false-positive reconnects** — A recurring trap: the CLI reports success while the session ID is stale and all tools 404 (#9944).
- **Rendering glitches** — Repeated complaints about viewport overflow, top-aligned gaps, thought-render jank, and full-repaint storms in VP mode (#9966, #9305, #9914, #8662).
- **CI inconsistency across platforms and privileges** — Windows/macOS lanes failing (#9728), a run-ledger test that always fails as root (#9909), and workflow-size ratchet false positives (#9931).
- **Schema/provider compatibility friction** — Model-specific rejections like Kimi's `uniqueItems` 400 (#9865) and settings schema rejecting `stream-json` (#8965) show cross-provider/config validation gaps.
- **Architecture debt** — 136 files importing `@google/genai` plus 12 unresolved structural issues (#4063) indicate a sustained cleanup burden that the team is only beginning to pay down.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-25

## 1. Today's Highlights

The project is deep into its **v0.9.12 release cycle**, with the milestone tracker ([#5573](https://github.com/Hmbown/CodeWhale/issues/5573)) gating a release against a P0 must-fix set spanning money/safety bugs and code-quality debt. A **provider-neutrality audit** ([#5588](https://github.com/Hmbown/CodeWhale/issues/5588)) uncovered 18 DeepSeek-exclusive behavior gates that should be provider-agnostic, alongside a **mega-file decomposition initiative** ([#5586](https://github.com/Hmbown/CodeWhale/issues/5586)) targeting four files over 9k lines each. The **supervised-operation stack** (lifecycle outbox, per-session control socket, `/relaunch`) also reached its final PR stages, positioning v0.9.12 as a major reliability and observability release.

## 2. Releases

**No new releases in the last 24 hours.** The current tracked version is **v0.9.12**, in integration (branch `codex/v0912-integration-20260823`) with release gates pending. v0.9.11 tag-recut recovery flow was documented in PR [#5565](https://github.com/Hmbown/CodeWhale/pull/5565) (post-tag fix, unpublished-tag re-cut, crates.io 403 / npm Trusted Publisher E404 external gates).

## 3. Hot Issues

1. **[#5588 — Provider neutrality: 18 DeepSeek-exclusive gates](https://github.com/Hmbown/CodeWhale/issues/5588)** [OPEN] — Full audit of 2,281 lines / 279 files for DeepSeek-specific behavior. Found 18 suspect gates where behavior is conceptually provider-neutral but DeepSeek-gated; one fix (NVIDIA NIM env leak) already landed. Critical for the project's multi-provider story.

2. **[#5573 — v0.9.12 milestone tracker](https://github.com/Hmbown/CodeWhale/issues/5573)** [OPEN] — The release roadmap itself: P0 must-fixes (money & safety), full release chain verification (docs/tag/assets/npm/website). Community should watch this for what lands in the next release.

3. **[#5586 — Decompose the mega files](https://github.com/Hmbown/CodeWhale/issues/5586)** [OPEN] — `lib.rs` (18.7k), `config.rs` (12.3k), `client.rs` (11.1k), `runtime_threads.rs` (9.3k) are causing recurring pain. Developer-maintainability issue with broad impact on reviewability and test stability.

4. **[#5585 — Test dies by stack overflow](https://github.com/Hmbown/CodeWhale/issues/5585)** [OPEN] — `setup_confirm_toast_names_secret_store_and_global_scope` SIGABRTs with stack overflow on macOS; pre-existing (bisected to earlier commit), blocks confidence in the test suite.

5. **[#5596 — Turn end silently cancels turn-owned subagents](https://github.com/Hmbown/CodeWhale/issues/5596)** [OPEN, bug, v0.9.12] — Long-running reviewer subagents are destroyed when the parent turn ends, despite UI claiming background continuation. Loses resumable work without warning — high-impact for workflows.

6. **[#5595 — Read-only inspection children reject in-workspace `git -C`](https://github.com/Hmbown/CodeWhale/issues/5595)** [OPEN, bug, v0.9.12] — A live reviewer child spent ~347k tokens producing zero findings because the execution envelope rejected the canonical `git -C <workspace> log` command. Expensive silent failure.

7. **[#5583 — Workflow responseSchema failures need bounded repair](https://github.com/Hmbown/CodeWhale/issues/5583)** [OPEN, v0.9.12] — Schema failures correctly surface but discard the chance for bounded repair and raw-output receipts. Community wants recoverability, not hard failure.

8. **[#5582 — Workflow owner snapshots collapse Degraded into Completed](https://github.com/Hmbown/CodeWhale/issues/5582)** [OPEN, v0.9.12] — `Degraded` workflow status is misprojected as `Completed` in owner snapshots, hiding real problems. Reported by jbovard2016 with a code-level diagnosis.

9. **[#5601 — MiniMax/Xiaomi models return 404 on fresh install](https://github.com/Hmbown/CodeWhale/issues/5601)** [OPEN, bug] — First-time API-key configuration for MiniMax and Xiaomi fails with 404 (likely built-in URL errors); user forced back to v0.6 to configure. Non-DeepSeek provider friction is a recurring theme.

10. **[#5589 — Fleet config view: Enter loops, model switching buried](https://github.com/Hmbown/CodeWhale/issues/5589)** [OPEN, v0.9.12] — UX report: pressing Enter on a role row lands on the same screen with no drill-in or state change; model switching is unclear. Addressed in PR [#5604](https://github.com/Hmbown/CodeWhale/pull/5604).

**Also notable:** [#5605](https://github.com/Hmbown/CodeWhale/issues/5605) flaky test under full-suite parallel load; [#5575](https://github.com/Hmbown/CodeWhale/issues/5575) role posture defined independently in five places and drifting; [#5571](https://github.com/Hmbown/CodeWhale/issues/5571) request-extension invariant missing debug-assert for cache continuity.

## 4. Key PR Progress

1. **[#5606 — 0.9.12 relay integration](https://github.com/Hmbown/CodeWhale/pull/5606)** [OPEN] — The standby lane rebased onto main: managed Chat rides native runtime threads (`turn_operation_idempotency`), R2 approval fix (MCP tools reviewed as kinds), `doctor --fix` with consent.

2. **[#5576 — 0.9.12 integration: must-fix + UX fixes](https://github.com/Hmbown/CodeWhale/pull/5576)** [OPEN] — 72 commits, gated and code-complete for release blockers; remaining work is version bump + changelog/RC gates. The release train itself.

3. **[#5594 — Control socket (part d, final)](https://github.com/Hmbown/CodeWhale/pull/5594)** [OPEN] — Opt-in, Unix-only, newline-framed JSON-RPC socket per running session for supervised operation. Default off; behavior unchanged when disabled.

4. **[#5593 — `/relaunch` command (part c)](https://github.com/Hmbown/CodeWhale/pull/5593)** [OPEN] — After `/update` installs a new binary, `/relaunch` switches the session to the current binary in one step, preserving state.

5. **[#5592 — Lifecycle outbox (part b)](https://github.com/Hmbown/CodeWhale/pull/5592)** [OPEN] — Opt-in `[lifecycle_outbox]` config writing one JSONL line per lifecycle event (turn_start/end/stalled, subagent events, session_end) for both interactive and headless runs.

6. **[#5591 — Goal-continuation cadence fix (part a)](https://github.com/Hmbown/CodeWhale/pull/5591)** [CLOSED] — `[goal] continuation_delay_seconds` was wired into only one of two dispatch paths; the within-turn hook had no wait, letting model steps fire passes instantly. Fixes [#5534](https://github.com/Hmbown/CodeWhale/issues/5534).

7. **[#5584 — Persist child approval receipts](https://github.com/Hmbown/CodeWhale/pull/5584)** [OPEN] — Closes [#5543](https://github.com/Hmbown/CodeWhale/issues/5543): child approval prompts now commit `Asked` before exposing prompts and terminal outcomes before closing, adding durable evidence.

8. **[#5604 — Fleet roster editing discoverable](https://github.com/Hmbown/CodeWhale/pull/5604)** [OPEN] — Addresses #5589 focused slice: `[edit]` affordance for selected members, footer advertises `m model`, pressing `m` opens the Fleet detail editor.

9. **[#5603 — Show tool and MCP schema costs](https://github.com/Hmbown/CodeWhale/pull/5603)** [OPEN] — Display-only slice of #5553: context inspector shows catalog total and per-built-in-tool rows sorted by estimated token cost, with omitted-count summary for large catalogs.

10. **[#5602 — Decode Windows output reliably](https://github.com/Hmbown/CodeWhale/pull/5602)** [OPEN] — Preserve UTF-8 and Windows ANSI-code-page characters split across shell reads; use current ACP only after strict UTF-8 decode fails; keeps all reader paths consistent.

**Also merged/notable:** [#5590](https://github.com/Hmbown/CodeWhale/pull/5590) runs Linux workspace tests on PRs (fixes CI gap #5547); [#5598](https://github.com/Hmbown/CodeWhale/pull/5598) scopes credit checks to PR commits (fixes false blocks on docs-only PRs); [#5565](https://github.com/Hmbown/CodeWhale/pull/5565) documents release recovery runbook.

## 5. Feature Request Trends

- **Provider neutrality (strongest signal):** Multiple issues target DeepSeek-exclusive behavior — #5588 (18 gates), #5601 (MiniMax/Xiaomi 404), #1482 (NVIDIA NIM). The project is actively expanding beyond DeepSeek, and users expect parity.
- **Supervised, machine-readable operation:** The lifecycle-outbox / control-socket / `/relaunch` series (parts a–d) is a coherent push toward programmatic session supervision — opt-in, default-off, preserving existing behavior.
- **Workflow resilience and recoverability:** #5583 (bounded repair on schema failures) and #5582 (Degraded vs Completed) show demand for workflows that don't silently fail or misreport.
- **Cache/context transparency:** #5553 (token costs per MCP server and tool), #5571 (prefix-continuity invariant), and #5570 (Anthropic cache_control breakpoint) — users want to see and control what's being sent and cached.
- **Code maintainability:** #5586 (mega-file decomposition) and #5587 (dead-code sweep phases 2–4, 75 test-only markers, ~242 stale allows) — the maintainer is proactively paying down debt.

## 6. Developer Pain Points

- **Silent loss of work:** #5596 (subagents destroyed at turn end), #5595 (347k tokens spent with zero findings due to a rejected `git -C` command), #5582 (Degraded collapsed to Completed) — processes that fail quietly are the top recurring frustration.
- **Flaky/unreliable test infrastructure:** #5585 (stack overflow in a UI test), #5605 (flaky under parallel load), #5547 (Linux CI tests skipped on non-mirrored branches) — the suite isn't trustworthy under load.
- **Non-DeepSeek provider breakage:** #5601 forces fresh-install users back to v0.6 to configure models; #1482 NVIDIA NIM 404s. Multi-provider support still feels bolted-on.
- **Configuration and role sprawl:** #5575 (role posture defined in five drifting places), #5589 (buried model switching) — configuration surfaces lack a single source of truth and clear affordances.
- **Long session/cache stability:** #5571 (unasserted prefix continuity silently kills provider cache), #2492 (no cross-session memory despite fast responses) — users want durable, verifiable session behavior.

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

# ComfyUI Community Digest — 2026-08-25

## Today's Highlights

Activity in the ComfyUI repository is dominated by **memory-management and training-related regressions** introduced after v0.33.x, with multiple bug reports tied to dynamic VRAM, SageAttention, and the `TrainLoraNode`. On the contribution side, a new **opt-in PyTorch Flex Attention backend**, an experimental **Comfy Compiler** (layered on top of aimdo + CUDA Graphs), and initial **MiniMax-H3 Fun ControlNet support** are landing together — suggesting an intentional push toward better-compiled inference and broader MiniMax-H3 ecosystem coverage. A v0.33.4 backport has also been queued to stabilize the current release line.

## Releases

No new tagged releases in the last 24 hours. Two **v0.33.4 backport PRs** are open ([#15866](https://github.com/Comfy-Org/ComfyUI/pull/15866), [#15865](https://github.com/Comfy-Org/ComfyUI/pull/15865)) cherry-picking fixes including opaque-alpha removal on API node images, Kling v2 image model retirement, and workflow-template bumps. Workflow templates have been refreshed to **v0.11.46** ([#15864](https://github.com/Comfy-Org/ComfyUI/pull/15864)) adding Wan 3.0, Meshy 7, and vCude templates.

## Hot Issues

1. **[[Bug] Dynamic VRAM streaming crashes — CUDA OOM regression (Aug 3)](https://github.com/Comfy-Org/ComfyUI/issues/15255)** — Highest-traffic issue (63 comments). `HostBuffer.read_file_slice` failures cascade into OOM on multi-GPU setups. Workarounds documented (`--cuda-device 0`, `--disable-pinned-memory`); reported upstream to NVIDIA.
2. **[[Potential Bug] Memory management changes and leaks after 0.30.2 → 0.33.1](https://github.com/Comfy-Org/ComfyUI/issues/15759)** — 4👍, 4 comments. Users seeing materially worse VRAM behavior and slower generation after upgrade — a regression that affects anyone on the current stable line.
3. **[[Potential Bug] MiniMax Music 3 + CUDA Graphs: "uncaptured free" warnings on RTX 5090](https://github.com/Comfy-Org/ComfyUI/issues/15597)** — 2👍. Reveals friction between async CUDA allocator and CUDA Graph capture on the newest NVIDIA flagship.
4. **[[Potential Bug] CUDA illegal memory access](https://github.com/Comfy-Org/ComfyUI/issues/15271)** — 11 comments. Persistent class of low-level CUDA faults that don't reproduce on minimal workflows.
5. **[[Potential Bug] NVFP4-quantized CLIP load crashes (access violation 0xC0000005)](https://github.com/Comfy-Org/ComfyUI/issues/15397)** — Quantized text encoder path; matters because NVFP4 is becoming a common distribution format.
6. **[[Bug] TrainLoraNode + SageAttention + dynamic VRAM aborts in `F.silu`](https://github.com/Comfy-Org/ComfyUI/issues/15566)** — Narrow but reproducible interaction between three flags that breaks training with `MiniMax H3 fp8_scaled`.
7. **[[User Support] Intermittent 401 "Invalid Comfy API key" from api.comfy.org](https://github.com/Comfy-Org/ComfyUI/issues/15856)** — Affects all cloud/API-node users; retry mitigates, indicating a server-side race.
8. **[[User Support] Llama.cpp can't recognise mmproj models on 0.33.3+](https://github.com/Comfy-Org/ComfyUI/issues/15859)** — Regression breaking multimodal LLM workflows on the latest release.
9. **[[User Support] WinError 4551 — Windows Application Control blocks PyTorch DLLs](https://github.com/Comfy-Org/ComfyUI/issues/15117)** — Hard blocker on hardened Windows machines.
10. **[[Potential Bug] TrainLoraNode: memory-dependent attention chunking breaks gradient checkpointing](https://github.com/Comfy-Org/ComfyUI/issues/15845)** — Surfaces a fundamental correctness issue: `attention_sub_quad`/`attention_split` re-query free memory each call, so chunking diverges between forward and recompute, corrupting gradients.

## Key PR Progress

1. **[PR #15870 — Add Flex Attention and expose torch.compile modes](https://github.com/Comfy-Org/ComfyUI/pull/15870)** — Opt-in PyTorch Flex Attention backend, plus `torch.compile` backend/mode plumbing on `TorchCompileModel`. Pairs well with `max-autotune-no-cudagraphs` on RTX 50-class.
2. **[PR #15861 — Introduce Comfy Compiler](https://github.com/Comfy-Org/ComfyUI/pull/15861)** — Two-layer compiler: aimdo 0.5.0 memory compiler over existing CUDA Graphs support; aims to reduce per-step allocation churn.
3. **[PR #15860 — Support MiniMax-H3 Fun ControlNet (initial)](https://github.com/Comfy-Org/ComfyUI/pull/15860)** — kijai's initial wrapper for `MiniMax-H3-Fun-Controlnet-Union`; directly answers the most-upvoted feature request of the day.
4. **[PR #15623 — Initial Qwen3/3.5/3.8 CUDA graphs (CORE-390)](https://github.com/Comfy-Org/ComfyUI/pull/15623)** — Native CUDA graph capture for Qwen text encoders; relevant to every modern MiniMax-H3 / Wan workflow.
5. **[PR #15855 — Fix checkpoint error from memory-dependent attention chunking during LoRA training](https://github.com/Comfy-Org/ComfyUI/pull/15855)** — Pins chunking decisions during gradient checkpointing so forward and recompute agree.
6. **[PR #15854 — Fix ZeroDivisionError in LossGraphNode](https://github.com/Comfy-Org/ComfyUI/pull/15854)** — Single-step / flat-loss training runs no longer crash the loss graph.
7. **[PR #15857 — Retry transient 401 from api.comfy.org](https://github.com/Comfy-Org/ComfyUI/pull/15857)** — Client-side fix for the intermittent auth failure reported today.
8. **[PR #15103 — Fix lazy V3 dynamic input scheduling](https://github.com/Comfy-Org/ComfyUI/pull/15103)** — Correct dependency discovery for V3 nodes that combine `io.Autogrow` with lazy inputs.
9. **[PR #15615 — Disable MIOpen on RDNA1/RDNA2 to fix fp16 conv segfaults](https://github.com/Comfy-Org/ComfyUI/pull/15615)** — Important fix for AMD consumer GPUs on ROCm 6.1+, particularly for MiniMax Music 3 workflows.
10. **[PR #15776 — Use `hvc1` tag for remuxed HEVC mp4/mov](https://github.com/Comfy-Org/ComfyUI/pull/15776)** — SaveVideo output now plays in QuickTime/Final Cut on macOS — fixes a real cross-tool pain point surfaced by SeeDance 2.5 users.

## Feature Request Trends

- **MiniMax-H3 ecosystem expansion** — ControlNet support ([#15850](https://github.com/Comfy-Org/ComfyUI/issues/15850), 6👍; [#15860](https://github.com/Comfy-Org/ComfyUI/pull/15860)) and clearer documentation for embeddings ([#15862](https://github.com/Comfy-Org/ComfyUI/issues/15862)) dominate the request stream.
- **Training flexibility** — Multiple TrainLoraNode asks ([#15848](https://github.com/Comfy-Org/ComfyUI/issues/15848) expose alpha; [#15847](https://github.com/Comfy-Org/ComfyUI/issues/15847) correct loss weighting; [#15846](https://github.com/Comfy-Org/ComfyUI/issues/15846) offloading correctness) show the community wants production-grade LoRA training, not just inference.
- **UX throughput** — Larger queue/run counts ([#15863](https://github.com/Comfy-Org/ComfyUI/issues/15863)) for batched LoRA captioning.
- **Performance/compilation hooks** — Demand for Flex Attention, CUDA Graphs, and torch.compile surfaces across both PRs and adjacent user complaints.
- **Platform-specific tuning** — DGX Spark unified-memory launch arguments ([#15852](https://github.com/Comfy-Org/ComfyUI/issues/15852)) signal growing UMA adoption.

## Developer Pain Points

- **Post-0.30.2 memory regressions** are the single largest source of friction — dynamic VRAM, SageAttention, and CUDA Graphs are interacting in ways that crash real workflows ([#15255](https://github.com/Comfy-Org/ComfyUI/issues/15255), [#15759](https://github.com/Comfy-Org/ComfyUI/issues/15759), [#15597](https://github.com/Comfy-Org/ComfyUI/issues/15597), [#15566](https://github.com/Comfy-Org/ComfyUI/issues/15566), [#15845](https://github.com/Comfy-Org/ComfyUI/issues/15845)).
- **LoRA training correctness** — `TrainLoraNode` is now bleeding-edge, but chunking/chunk-size divergence between forward and recompute, hidden alpha=1.0, and FLOW loss-weighting bugs are real footguns ([#15845](https://github.com/Comfy-Org/ComfyUI/issues/15845), [#15848](https://github.com/Comfy-Org/ComfyUI/issues/15848), [#15847](https://github.com/Comfy-Org/ComfyUI/issues/15847), [#15846](https://github.com/Comfy-Org/ComfyUI/issues/15846)).
- **Updater fragility** — Multiple users cannot move off 0.29.x or refresh Manager cleanly ([#15869](https://github.com/Comfy-Org/ComfyUI/issues/15869), [#7994](https://github.com/Comfy-Org/ComfyUI/issues/7994)).
- **Quantized model loaders** — NVFP4 CLIP and mmproj recognition regressions block adoption of newer quantized distributions ([#15397](https://github.com/Comfy-Org/ComfyUI/issues/15397), [#15859](https://github.com/Comfy-Org/ComfyUI/issues/15859)).
- **Cloud/API reliability** — The `api.comfy.org` 401 race ([#15856](https://github.com/Comfy-Org/ComfyUI/issues/15856)) undermines trust in API nodes and is being patched client-side pending a server fix.
- **Cross-platform gaps** — Windows Application Control blocks ([#15117](https://github.com/Comfy-Org/ComfyUI/issues/15117)), macOS HEVC playback ([#15776](https://github.com/Comfy-Org/ComfyUI/pull/15776)), and AMD RDNA1/2 conv segfaults ([#15615](https://github.com/Comfy-Org/ComfyUI/pull/15615)) keep surfacing — ComfyUI's hardware matrix is widening faster than its platform fixes.
- **Core scheduling correctness** — V3 lazy inputs being scheduled as ordinary dependencies ([#15853](https://github.com/Comfy-Org/ComfyUI/issues/15853)) is the kind of subtle bug that will hurt custom-node authors most.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Community Digest — 2026-08-25

## 1. Today's Highlights
Activity focused on desktop‑app refinements (Claude Desktop Auto mode, interaction fixes) and MLX backend improvements (structured output, Granite support). Several critical bugs emerged around the new Qwen3.8 model family across ROCm, MLX, and tool‑calling workflows, while no new releases were published in the last 24 hours.

## 2. Releases
No new releases in the last 24 hours.

## 3. Hot Issues
1. **#10222** [CLOSED] Support Jinja chat templates – https://github.com/ollama/ollama/issues/10222  
   Long‑standing, highly upvoted (50 👍, 19 comments) request to adopt a Go Jinja engine for reliable chat templates; closed but reflects strong community demand for standards‑compliant templating.
2. **#17778** [OPEN] qwen3.8 error: “no user query found” during chat streaming – https://github.com/ollama/ollama/issues/17778  
   13 👍, 17 comments; affects Qwen3.8 tool‑loop scenarios, signaling a regression in the newest model series.
3. **#15447** [OPEN] Error 400 (empty body) pulling hf.co GGUF models – https://github.com/ollama/ollama/issues/15447  
   6 👍; download completes but model registration fails, breaking HuggingFace import ecosystem.
4. **#17829** [OPEN] MLX engine: no prompt caching between requests – https://github.com/ollama/ollama/issues/17829  
   3 👍; full re‑prefill every agent step on Apple Silicon causes high TTFT, exposing MLX maturity gaps.
5. **#17274** [OPEN] Tool‑call output silently discarded on parse failure – https://github.com/ollama/ollama/issues/17274  
   Empty content with no error exposed; highlights need for robust tool‑call error handling.
6. **#17957** [OPEN] ornith‑1.5:35b fails with response format + tools – https://github.com/ollama/ollama/issues/17957  
   Grammar parse failure vs. qwen3.6; illustrates sampler/grammar compatibility issues.
7. **#17961** [OPEN] Qwen3.8:27B incomplete responses with Claude Code – https://github.com/ollama/ollama/issues/17961  
   Truncated generations under agent load on Ollama 0.32.15.
8. **#17968** [OPEN] qwen3.8 producing garbage on AMD Instinct MI210 (ROCm) – https://github.com/ollama/ollama/issues/17968  
   Garbage output on specific AMD GPU; suggests backend‑specific kernel/quantization bug.
9. **#17969** [OPEN] qwen3 cannot disable thinking via OpenAI‑compatible endpoint – https://github.com/ollama/ollama/issues/17969  
   `<think:6124c78e>` switch and `reasoning_effort` ignored; limits API compatibility.
10. **#17958** [OPEN] AMD Strix Halo: ≥2 resident models pin GPU at max clock idle – https://github.com/ollama/ollama/issues/17958  
    Power‑gating failure causes ~25 W idle; multi‑model residency inefficiency.

## 4. Key PR Progress
1. **#17929** mlxrunner: add structured output support – https://github.com/ollama/ollama/pull/17929  
   Enforces `format` (JSON/JSON Schema) via xgrammar on MLX backend.
2. **#17972** feat: Add GraniteForCausalLM support – https://github.com/ollama/ollama/pull/17972  
   MLX backend support for IBM Granite 4.1 dense models.
3. **#17965** server: auto‑detect ornith and qwen35 renderer/parser – https://github.com/ollama/ollama/pull/17965  
   Fixes #17957 by selecting correct native vs. gguf chat template when both tools and format are used.
4. **#17278** server: warm prefill cache across model unload/reload – https://github.com/ollama/ollama/pull/17278  
   Opt‑in `OLLAMA_PREFILL_CACHE` to persist KV with fingerprinting and LRU cap.
5. **#17954** server: refuse exited runners and bound embed concurrency – https://github.com/ollama/ollama/pull/17954  
   Detects llama‑server exit, re‑queues requests, bounds `/api/embed` fan‑out.
6. **#17962** llm: derive default thread count from cgroup CPU quota – https://github.com/ollama/ollama/pull/17962  
   Prevents CPU over‑subscription in limited containers.
7. **#17975** app: add Claude Desktop Auto mode setting – https://github.com/ollama/ollama/pull/17975  
   Enables Auto mode preference by default with persistent user choices.
8. **#17970** app: fix desktop interaction regressions – https://github.com/ollama/ollama/pull/17970  
   Resolves repeated first‑use modal, switch latency, and macOS window lifecycle issues.
9. **#17090** app: render single‑dollar inline LaTeX in chat markdown – https://github.com/ollama/ollama/pull/17090  
   Makes common `$...$` math readable in desktop chat.
10. **#17967** Add Musaeus to community integrations – https://github.com/ollama/ollama/pull/17967  
    Documents Apache‑2.0 local‑first agent framework running on Ollama by default.

## 5. Feature Request Trends
- **Jinja chat templates** (#10222) – demand for native, predictable template support.
- **Slimmer CPU‑only Docker images** (#7184) – reduce 4.87 GB footprint for non‑GPU hosts.
- **MLX engine enhancements** – prefix caching, memory release, structured output (partially in PRs #17929, #17278).
- **Reasoning control** – disable Qwen3 thinking via OpenAI‑compatible API (#17969).
- **Multi‑model GPU resource management** – idle power and memory utilization fixes (#17958, #17971).
- **Robust tool‑call error propagation** – avoid silent discards (#17274).

## 6. Developer Pain Points
- **Qwen3.8 instability**: streaming errors, truncated output, garbage on ROCm, ignored thinking toggle (#17778, #17961, #17968, #17969).
- **MLX backend immaturity**: no inter‑request caching (#17829), historical memory leaks (recently closed #17875).
- **HuggingFace GGUF pull failures** post‑download (#15447) disrupt external model workflows.
- **Tool‑call parsing** failures silently drop output (#17274).
- **Container CPU defaults** ignore cgroup limits (#17962 PR addresses).
- **Desktop app churn**: frequent regression fixes (#17970, #17973) indicate rapid UI iteration.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

# llama.cpp Community Digest — 2026-08-25

## 1. Today's Highlights
The Metal backend received significant performance and build-system attention with per-device tuned Flash-Attention vector kernels (b10615) and a per-op source split enabling parallel Metallib compilation (b10614). Multiple backend correctness fixes landed across CUDA, Metal, and mtmd video handling, while speculative-decoding stability (MTP/DFlash) remained a dominant theme in both issues and PRs.

## 2. Releases
New tags published in the last 24h:

- **b10615** — Metal: per-device tuned (Q, NE) Flash-Attn vec kernels with a new tuning table and 53 additional f16 instantiations. ([attestations](https://github.com/ggml-org/llama.cpp/attestations/42591112))
- **b10614** — Metal: per-op source split + parallel compile (split into 8 libs, loaded in parallel). 
- **b10612** — Tests: disabled DOTS3NOTE arch test for WebGPU.
- **b10610** — GGML: shortened virtual device naming in CUDA and Metal (assisted by DeepSeek-V4-Flash).
- **b10608** — mtmd/video: fixed MOOV atom at end-of-file (SIGPIPE/broken-pipe handling on Windows). ([llama.app](https://llama.app))
- **b10606** — GGML: fixed `ggml_clamp` and updated ggml-alloc. ([attestations](https://github.com/ggml-org/llama.cpp/attestations/42576162))
- **b10605** — Mamba2: flattened in/out projections to dispatch GEMM instead of GEMV.
- **b10604** — DeepSeek-V4: `-sm tensor` split-mode with shared-expert delayed allreduce.

## 3. Hot Issues
1. **#20029** — Mac x86 + AMD GPU (Vulkan) produces garbage since b8143. Long-running (32 comments); highlights lingering Vulkan/AMD regression on macOS. [link](https://github.com/ggml-org/llama.cpp/issues/20029)
2. **#27102** — CUDA kernel stall during execution, killed by watchdog on RTX Pro 6000 Blackwell. 27 comments; active concern for newer NVIDIA hardware. [link](https://github.com/ggml-org/llama.cpp/issues/27102)
3. **#9493** — Feature request: RDMA support for RPC backends (20 comments, 10 👍). Strong community demand for high-speed distributed inference. [link](https://github.com/ggml-org/llama.cpp/issues/9493)
4. **#25618** — Speculative decoding (draft-mtp/dspark) diverges from vanilla on quantized targets. 18 comments; correctness gap vs. bf16. [link](https://github.com/ggml-org/llama.cpp/issues/25618)
5. **#25207** — Massive performance drop with Vulkan Flash Attention on Strix Halo. 18 comments; backend perf regression. [link](https://github.com/ggml-org/llama.cpp/issues/25207)
6. **#23704** — Server Router Mode: multiple presets for one loaded model (16 comments, 6 👍). Recurring server ergonomics request. [link](https://github.com/ggml-org/llama.cpp/issues/23704)
7. **#24795** — gemma4-assistant MTP draft fails to load ("invalid vector subscript"), regression from b9553. 10 👍; affects Windows CUDA users. [link](https://github.com/ggml-org/llama.cpp/issues/24795)
8. **#26558** — llama-server hard crash (cublasSgemm INVALID_VALUE) with draft-mtp under KV-cache saturation. [link](https://github.com/ggml-org/llama.cpp/issues/26558)
9. **#27579** — HIP/ROCm corrupted output on gfx1151 (Strix Halo) while Vulkan is byte-identical correct. 7 comments; backend parity problem. [link](https://github.com/ggml-org/llama.cpp/issues/27579)
10. **#27198** — SYCL `--split-mode tensor` crashes (DEVICE_LOST) on dual Arc Pro B70. 7 comments; multi-GPU SYCL instability. [link](https://github.com/ggml-org/llama.cpp/issues/27198)

## 4. Key PR Progress
1. **#27558** — HIP: expand Q5_K/Q6_K tile widths for RDNA2 (perf win via J=128). [link](https://github.com/ggml-org/llama.cpp/pull/27558)
2. **#27509** — SYCL: add Q2_K reordered MMVQ and ESIMD kernels (build fix merged). [link](https://github.com/ggml-org/llama.cpp/pull/27509)
3. **#27342** — spec: add DFlash2 support (local convolution + candidate selector). [link](https://github.com/ggml-org/llama.cpp/pull/27342)
4. **#27676** — server: expose speculative verification-step count per request in timings JSON. [link](https://github.com/ggml-org/llama.cpp/pull/27676)
5. **#25666** — Vulkan: disable MMVQ for spec-decode steps on AMD. [link](https://github.com/ggml-org/llama.cpp/pull/25666)
6. **#27673** — OpenCL: route FA prefill split kernels through per-kernel workgroup guard (fixes Adreno 660). [link](https://github.com/ggml-org/llama.cpp/pull/27673)
7. **#27625** — model: add HrmTextForCausalLM (DFM Mimir 1B) support. [link](https://github.com/ggml-org/llama.cpp/pull/27625)
8. **#26622** — llama: add `--n-cpu-ffn` option for dense model layers. [link](https://github.com/ggml-org/llama.cpp/pull/26622)
9. **#27671** — SYCL: fix zero-size scratchpad crash and >4GB allocation limit on iGPU. [link](https://github.com/ggml-org/llama.cpp/pull/27671)
10. **#27621** — CUDA: extend MoE fusion to specdec (2–8 tokens), GLU/topk-router fusion. [link](https://github.com/ggml-org/llama.cpp/pull/27621)

## 5. Feature Request Trends
- **Distributed / high-speed transport**: RDMA for RPC (#9493), SYCL/oneAPI detection + prebuilt installs (#27656).
- **Server ergonomics**: Router Mode multi-preset per model (#23704), load system prompt from file (#19852, closed), WebUI edit LLM responses (#27532), agent skills in UI (#27312).
- **Memory-constrained execution**: Stream MoE routed experts from disk (#25294), `--n-cpu-ffn` for dense layers (#26622).
- **New model support**: HrmTextForCausalLM (#27625), DFM Mimir, DFlash2 (#27342).

## 6. Developer Pain Points
- **Speculative decoding fragility**: Numerous reports of MTP/DFlash divergence, 0% acceptance under `-np N`, KV-cache OOM/crashes (#25618, #26558, #24795, #27151, #27572). High-frequency, cross-backend.
- **Multi-backend correctness gaps**: HIP/ROCm corruption vs. Vulkan (#27579), SYCL split-mode crashes (#27198, #27547), CUDA watchdog stalls (#27102).
- **Video/mtmd reliability**: MOOV-at-end-of-file failures now fixed in b10608 but previously caused silent 0-frame decodes (#24394, #24429).
- **AMD/Vulkan perf cliffs**: Batch-9 throughput drop on MoE (#25356) and FA regressions (#25207) show backend-specific tuning is still reactive.
- **Build/portability**: Native instruction-set faults in Docker (OpenVINO, #27338) and cross-backend weight duplication (#25270) indicate packaging complexity.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*