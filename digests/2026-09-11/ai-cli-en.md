# AI CLI Tools Community Digest 2026-09-11

> Generated: 2026-09-10 22:15 UTC | Tools covered: 12

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

**Today's Highlights — 2026-09-11**

1. **Claude Code v2.1.268** — Ships managed-gateway pricing parity (signed-in clients now see identical rates via `gateway.yaml` so `/cost` matches spend meter) and a startup warning when `access_control.allow_cidrs` is empty. [Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.268)

2. **OpenAI Codex Rust v0.154.0 (stable) + Python SDK 0.154.0** — Adds GPT-6-Astra to model picker and Amazon Bedrock catalogs; introduces experimental `--worktree`/`/worktree` for isolated session checkouts; Python SDK adds `max`/`ultra` reasoning-effort values. [Rust release](https://github.com/openai/codex/releases/tag/rust-v0.154.0) · [Python release](https://github.com/openai/codex/releases/tag/python-v0.154.0)

3. **GitHub Copilot CLI v1.0.84-4** — Refactors plugin management: new `copilot instruction list` and `copilot lsp list` commands replace generic plugin list; adds `--json` output and per-plugin `enable`/`disable` commands. [Release](https://github.com/github/copilot-cli/releases/tag/v1.0.84-4)

4. **Qwen Code v0.23.3 + desktop-v0.3.0 + SDK v0.1.12** — Expanded Kimi/Qwen/DeepSeek reasoning presets; desktop bridge fix keeps pending permission queue stable across restarts; desktop-preview feed remains at 0.2.2. [CLI release](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.3) · [Desktop release](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.3.0)

5. **llama.cpp 13 point releases (b10888–b10900)** — Vulkan backend fixes: top-K MoE fusion, small-M `mul_mat` optimizations, PowerVR fallback, debug labels; speculative decoding fix for vision inputs; CI now uses CUDA 13.4.1 GA for Windows ARM64. [All builds](https://llama.app)

6. **Gemini CLI security hardening (multiple merged PRs)** — Sandbox filesystem isolation hardened (#29214); NTFS 8.3 short-name path-traversal mitigated (#29116); MCP policy enforcement aligned to fail-closed (#29200); sibling-prefix bypass in `get_internal_docs` closed (#29249). [PR #29214](https://github.com/google-gemini/gemini-cli/pull/29214) · [PR #29116](https://github.com/google-gemini/gemini-cli/pull/29116) · [PR #29200](https://github.com/google-gemini/gemini-cli/pull/29200) · [PR #29249](https://github.com/google-gemini/gemini-cli/pull/29249)

7. **Pi global tool timeouts + TUI fixes** — Default 3-minute timeout for all tool calls prevents indefinite hangs (#9431); cursor marker leakage fixed in full-screen selection (#9441); model selection logic now prefers last manually changed model (#9459). [PR #9431](https://github.com/earendil-works/pi/pull/9431) · [PR #9441](https://github.com/earendil-works/pi/pull/9441) · [PR #9459](https://github.com/earendil-works/pi/pull/9459)

8. **ComfyUI v0.35.1 backport + secure credentials** — Backport PR includes OpenRouter model updates and Gemini 3.8 Flash support (#16235); client-isolated credential registries with late-bound tokens and idempotent polling to prevent 401 errors (#16242). [PR #16235](https://github.com/Comfy-Org/ComfyUI/pull/16235) · [PR #16242](https://github.com/Comfy-Org/ComfyUI/pull/16242)

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills Community Highlights (as of 2026‑09‑11)**  

---

### 1. Top Skills Ranking  
*Selected from the most‑commented/active pull‑requests (PRs) and the issues that reference them. “Comments” refers to discussion on the PR or its linked issue; status reflects the PR’s current state.*

| Rank | PR / Issue | Skill (functionality) | Discussion Highlights | Status |
|------|------------|-----------------------|-----------------------|--------|
| **1** | **[#1298](https://github.com/anthropics/skills/pull/1298)** (linked to issue **[#556](https://github.com/anthropics/skills/issues/556)**) | **skill‑creator** – fixes to `run_eval.py` (Windows stream handling, recall calculation, parallel workers) | 12+ comments on the issue show the evaluation loop was reporting 0 % recall for every skill, breaking description optimisation. The PR adds proper artifact installation, Windows‑safe pipe reading, and restores reliable trigger detection. | **OPEN** (updated 2026‑06‑23) |
| **2** | **[#514](https://github.com/anthropics/skills/pull/514)** | **document‑typography** – orphan/widow prevention & numbering alignment for AI‑generated docs | 0 👍 but frequently cited in typography‑related discussions; the skill tackles visual‑quality defects that affect every Claude‑generated document. | **OPEN** (updated 2026‑03‑13) |
| **3** | **[#1734](https://github.com/anthropics/skills/pull/1734)** | **detect‑orphaned‑docx‑comments** – scans .docx files for stray comment ranges left after edits | Recent activity (created 2026‑09‑06, updated 2026‑09‑10) indicates strong interest in cleaning up document collaboration artefacts. | **OPEN** |
| **4** | **[#1615](https://github.com/anthropics/skills/pull/1615)** | **scnet‑hpc** – profile‑based SSH & Slurm workflow for SCNet HPC clusters | Provides end‑to‑end cluster interaction (connection, job submission, module handling). Recent updates show active maintenance for HPC users. | **OPEN** (updated 2026‑08‑24) |
| **5** | **[#486](https://github.com/anthropics/skills/pull/486)** | **ODT** – OpenDocument text/spreadsheet creation, template filling, and ODT→HTML conversion | Addresses a long‑standing request for ISO‑standard office‑format support; the PR adds full CRUD plus conversion utilities. | **OPEN** (updated 2026‑04‑14) |
| **6** | **[#210](https://github.com/anthropics/skills/pull/210)** | **frontend‑design** – clarified, actionable guidance for UI/UX implementation | Improves specificity so Claude can follow each step in a single conversation; the PR refactors the skill to reduce verbosity and increase token‑efficiency. | **OPEN** (updated 2026‑03‑07) |
| **7** | **[#83](https://github.com/anthropics/skills/pull/83)** | **skill‑quality‑analyzer** & **skill‑security‑analyzer** (meta‑skills) | First‑party meta‑skills that score structure, documentation, examples, security, and performance; highly referenced in discussions about skill marketplace health. | **OPEN** (updated 2026‑01‑07) |
| **8** | **[#541](https://github.com/anthropics/skills/pull/541)** | **docx** – prevents tracked‑change `w:id` collisions with existing bookmarks | Fixes a subtle OOXML ID‑space bug that caused document corruption when both features coexist; the PR shows concrete examples and test additions. | **OPEN** (updated 2026‑04‑16) |

*Note: Because the dataset does not expose explicit comment counts on PRs, the ranking combines PR recency/update frequency with the comment volume of the linked Issues (e.g., #556, #492) that directly motivated the changes.*

---

### 2. Community Demand Trends (from Issues)

| Theme | Representative Issue | What the Community Is Asking For |
|-------|----------------------|-----------------------------------|
| **Security & Trust Boundaries** | **[#492](https://github.com/anthropics/skills/issues/492)** (43 👍, 43 comments) | Prevent community skills from being published under the `anthropic/` namespace to avoid impersonation and permission‑escalation risks. |
| **Org‑Wide Skill Sharing** | **[#228](https://github.com/anthropics/skills/issues/228)** (16 👍, 16 comments) | Enable direct sharing of skills inside an enterprise (e.g., via Claude.ai organization library) instead of manual file exchange. |
| **Evaluation Reliability** | **[#556](https://github.com/anthropics/skills/issues/556)** (12 👍, 12 comments) & **[#1390](https://github.com/anthropics/skills/issues/1390)** | Fix `run_eval.py`/`evaluation.py` so skill triggers are detected correctly and MCP‑based evaluations reflect real‑world outcomes. |
| **Windows Compatibility** | **[#1099](https://github.com/anthropics/skills/issues/1099)**, **[#1050](https://github.com/anthropics/skills/issues/1050)** | Resolve subprocess‑pipe and encoding bugs that make skill‑creator scripts unusable on Windows. |
| **Document‑Quality Skills** | **[#514](https://github.com/anthropics/skills/pull/514)**, **[#1734](https://github.com/anthropics/skills/pull/1734)** | Typographic control, comment clean‑up, and broader formatting guarantees for AI‑generated Word/OOXML docs. |
| **Workflow Automation & Orchestration** | **[#1628](https://github.com/anthropics/skills/pull/1628)** (Hivemind), **[#1627](https://github.com/anthropics/skills/pull/1627)** (Buffer GraphQL), **[#1615](https://github.com/anthropics/skills/pull/1615)** (SCNet HPC) | Skills that delegate mechanical work to headless workers, schedule social posts, or manage HPC clusters—freeing the planner model for higher‑level reasoning. |
| **Multi‑Agent & Quality Gates** | **[#1385](https://github.com/anthropics/skills/issues/1385)**, **[#1367](https://github.com/anthropics/skills/pull/1367)** | Pre‑task calibration, adversarial review, and self‑audit pipelines to guarantee reasoning quality before delivery. |
| **Model & API Updates** | **[#1607](https://github.com/anthropics/skills/pull/1607)**, **[#1724](https://github.com/anthropics/skills/pull/1724)** | Retire stale model IDs and bump default evaluation models to the newest Claude Sonnet releases. |
| **Cross‑Platform Tooling** | **[#1362](https://github.com/anthropics/skills/issues/1362)** | Fix `web‑artifacts‑builder` init/bundle scripts for modern pnpm (≥10.1) and inline assets correctly. |

**Overall Trend:** The community is prioritising **skill reliability (especially evaluation and Windows support)**, **security & governance**, and **higher‑value automation/orchestration** (multi‑agent, HPC, document quality, social‑media integration).

---

### 3. High‑Potential Pending Skills  
*Open PRs with recent activity that are likely to be merged soon, based on update frequency and clear utility.*

| PR | Skill | Why It’s Promising |
|----|-------|--------------------|
| **[#1734](https://github.com/anthropics/skills/pull/1734)** | detect‑orphaned‑docx‑comments | Addresses a frequent pain point in collaborative doc workflows; minimal code, high impact. |
| **[#1742](https://github.com/anthropics/skills/pull/1742)** | mcp‑builder – streamable_http_client support | Keeps the MCP builder compatible with the latest `mcp>=2.0.0` API, unblocking real‑server testing. |
| **[#1724](https://github.com/anthropics/skills/pull/1724)** | mcp‑builder – evaluation model bump | Aligns evaluation harness with the newest Claude Sonnet, improving benchmark relevance. |
| **[#1628](https://github.com/anthropics/skills/pull/1628)** | Hivemind – zero‑cost multi‑agent orchestration | Enables cheap worker delegation; strong interest from teams looking to scale reasoning without cost. |
| **[#1627](https://github.com/anthropics/skills/pull/1627)** | Buffer GraphQL agent skill | Provides a portable social‑media scheduling interface for any AI agent—fills a clear gap in workflow automation. |
| **[#1607](https://github.com/anthropics/skills/pull/1607)** | claude‑api – retired model IDs | Simple but necessary maintenance to prevent confusion and accidental use of deprecated models. |
| **[#1602](https://github.com/anthropics/skills/pull/1602)** | evaluation‑script stability (MCP, encoding, metrics) | Bundles several reliability fixes that will improve all skill‑testing pipelines. |
| **[#1595](https://github.com/anthropics/skills/pull/1595)** | UIZZE partner skill | Adds a free UI‑direction skill with large‑scale visual reference lookup—high demand for design‑focused workflows. |
| **[#1367](https://github.com/anthropics/skills/pull/1367)** | self‑audit – mechanical + four‑dimension reasoning gate | Provides a pre‑delivery quality checkpoint that many teams have requested for safety‑critical outputs. |

---

### 4. Skills Ecosystem Insight  
> **The community’s most concentrated demand is for trustworthy, cross‑platform skills that enable reliable evaluation and secure orchestration—especially Windows‑compatible skill‑creator tools, document‑quality guards, and multi‑agent workflow automations.**  

---  

*All links point to the respective GitHub PR or Issue in the `anthropics/skills` repository.*

---

# Claude Code Community Digest — 2026-09-11

## 1. Today's Highlights

Claude Code shipped **v2.1.268**, tightening managed-gateway parity: when `pricing:` is set in `gateway.yaml`, signed-in clients now see identical rates through managed settings so `/cost` and telemetry reconcile with the spend meter, plus a new startup warning for empty `access_control.allow_cidrs`. **On the community side, attention is dominated by #83510**, an open report with 13 comments and 21 👍 documenting a measurable Generation-5 quality regression (Fable 5 / Opus 5 / Sonnet 5) including worse nonsense detection, ~2× verbosity, and under-disclosed model fallback to Opus 4.8.

## 2. Releases

### v2.1.268 — [Release notes](#)
- **Managed-gateway pricing parity**: `pricing:` in `gateway.yaml` flows to signed-in Claude Code clients via managed settings, so `/cost` and telemetry match the spend meter. ([README guidance](#))
- **Gateway safety warning**: startup now warns when `access_control.allow_cidrs` is empty to prevent silent exposure. ([README guidance](#))
- Full changelog: see the GitHub release page for v2.1.268.

## 3. Hot Issues

1. **#47327 — Cowork tab disabled on Windows 11 Pro x64** (closed, 25 comments, 👍3) — Long-running stalemate since March 2026; Windows users still can't access the Cowork surface, making it the single most-discussed thread of the day. [Link](https://github.com/anthropics/claude-code/issues/47327)
2. **#83510 — Measurable quality regression in Generation 5** (open, 13 comments, 👍21) — Highest community endorsement today: reproducible metrics show worse fact-checking, ~2× output length, and silent fallback to Opus 4.8. [Link](https://github.com/anthropics/claude-code/issues/83510)
3. **#68773 — Auto-recharge loop charged consumer plan 29× ($661)** (closed, 8 comments) — Fin support confirmed malfunction but couldn't escalate to a human; illustrates recurring billing-support escalations. [Link](https://github.com/anthropics/claude-code/issues/68773)
4. **#72634 — `policyHelper` in `/etc/claude-code/managed-settings.json` ignored on Linux** (closed, 6 comments) — Org server-managed settings silently override local policy file; cross-platform settings precedence is fragile. [Link](https://github.com/anthropics/claude-code/issues/72634)
5. **#83193 — Remote Control sessions disconnect over time** (closed, 4 comments) — `/remote-control` throws "Cannot read properties of undefined (reading 'session_url')" on reconnect; long-lived "lane" workflows break. [Link](https://github.com/anthropics/claude-code/issues/83193)
6. **#72617 — Copy from TUI doesn't reach Windows clipboard** (closed, 3 comments) — Clipboard integration on Windows terminal is broken, a basic UX gap. [Link](https://github.com/anthropics/claude-code/issues/72617)
7. **#86225 — Claude Code published a user's personal information to a public GitHub issue** (closed, 2 comments) — Privacy/PII leak from generated content; touchstone issue for tool-output safety. [Link](https://github.com/anthropics/claude-code/issues/86225)
8. **#77927 — Desktop "Add marketplace" fails with `MARKETPLACE_ERROR:UNKNOWN`** (closed, 2 comments) — Marketplace onboarding fails because git clone stalls in non-interactive SSH at ~60 s. [Link](https://github.com/anthropics/claude-code/issues/77927)
9. **#80750 — Usage credits consumed while plan allowance remains** (closed, 2 comments, 👍3) — Billing/quota accounting bug; the 5-hour window won't reset while extra usage is enabled. [Link](https://github.com/anthropics/claude-code/issues/80750)
10. **#86033 — 5-hour quota jumped ~15–20× since 2026-08-08** (closed, 2 comments) — Persistence vs. earlier self-resolving incidents points at multi-instance accounting regression. [Link](https://github.com/anthropics/claude-code/issues/86033)

## 4. Key PR Progress

1. **#93452 — `mods/diff`: match the built-in /diff panel** (open) — Aligns the `/diff` mod's pane with the built-in: hunks via the engine's code element, matching close ✕, row spacing and empty-state placement, narrow-terminal resize line, and one repo probe in flight. [PR](https://github.com/anthropics/claude-code/pull/93452)
2. **#93244 — mods: API renames, telemetry fixes, and a diff backend seam** (closed) — Plugin-API naming pass (`isFocused`, `tool`), tighter telemetry (sequential rows, per-row switch reads, no third-party provider leakage), and a git backend seam. [PR](https://github.com/anthropics/claude-code/pull/93244)
3. **#89404 — `validate-agent.sh`: stop aborting at the first warning** (open) — Fixes #83803; addresses three `set -euo pipefail` interactions, including `((x++))` returning exit 1 at zero, that false-flag valid agents. [PR](https://github.com/anthropics/claude-code/pull/89404)
4. **#93215 — Add mods: sec-default, diff and telemetry** (closed) — Sources for the three hooks-module plugins (`sec-default`, `/diff`, `$.telemetry`); each folder is a complete plugin per `mods/README.md`. [PR](https://github.com/anthropics/claude-code/pull/93215)

> Note: Only 4 PRs were updated in the last 24h; the list above covers the full set.

## 5. Feature Request Trends

- **First-class /diff parity**: PRs #93452, #93244, #93215 show the community pushing the `mods/diff` surface to be visually and behaviourally identical to the built-in diff panel — request: a single, consistent diff UX across surfaces.
- **Plugins/marketplace ergonomics**: #77927 (clone stall), #81058 (`uninstall -s project` deletes `enabledPlugins`), #89404 (validator false flags) — clear demand for reliable plugin install/uninstall lifecycle, robust validator, and a marketplace that handles non-interactive SSH keys.
- **Hooks / function hooks GA**: #93215 promotes sec-default, diff, and telemetry from internal hooks modules to public plugins; the request is broader hooks exposure and stable telemetry plumbing across providers.
- **Reliable remote sessions**: #83193 — long-lived Remote Control sessions that survive reconnect, plus renameable current sessions (#84041).
- **Plan/quota transparency**: #80750, #86033, #85400 — accurate `/cost` vs subscription quota, multi-instance accounting, and `--max-budget-usd` not terminating Max-sub runs.
- **Model transparency**: #83510 — surfacing model fallback (Fable 5 → Opus 4.8) and quality diffs to users, not just telemetry.

## 6. Developer Pain Points

- **Generation 5 quality regressions**: increased verbosity, weaker self-critique, and silent model downgrades — top community concern by upvotes (#83510, #86065, #86071, #83134). Developers feel they can't trust model identity or output discipline on the latest snapshot.
- **Billing, quota, and auth loops**: auto-recharge runaway (#68773), credits-charged-while-allowance-remains (#80750), 15–20× quota jumps (#86033), `--max-budget-usd` killing Max-sub runs (#85400), and unauthenticated/duplicate auth (#86057) — the **#1 frustration cluster** by raw volume.
- **Windows desktop brokenness**: Cowork tab unsupported (#47327), clipboard (#72617), taskkill console flashing (#86192), `claude-cli://` deep links no-oping (#86056), Add-marketplace stalls (#77927) — Windows parity remains a chronic gap.
- **Linux managed-settings precedence**: org server settings silently override local `/etc/claude-code/managed-settings.json` policy helper (#72634); enterprise admins want predictable precedence.
- **Cowork / Desktop integration gaps**: QR-pairing never surfaces on macOS (#86031), DevContainer concurrency broken on macOS 26.1 (#86052), Chrome connector down (#86185).
- **TUI/long-session reliability**: fullscreen toggling deadlocks (#86062), cron/loop never firing while a background Bash task runs in stream-json clients (#86015), session titles going stale after pivots (#84041).
- **Agent orchestration bugs**: silent unperformed promised actions (#85874), teammate system prompts contradicting themselves on result delivery (#86070).
- **Privacy & safety**: personal info leaked into public artifacts (#86225), false-positive usage-policy violations on benign security/RTSP work (#86195, #86071), off-route to Fable 5 on defensive audits (#86065).
- **Session mgmt**: `send_message` between sessions leaves the target session frozen unless reopened manually (#86067).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-09-11

## Today's Highlights
Rust v0.154.0 stable lands with GPT-6-Astra in the model picker and Amazon Bedrock catalogs, plus experimental worktree support for isolated session checkouts. The Python SDK 0.154.0 adds `max` and `ultra` reasoning-effort values. Community attention is dominated by rate-limit and usage-accounting bugs, with multiple reports of usage dropping to 0% instantly on paid plans. An RFC for self-evolving agents via `/learn` and AGENTS.md rule metabolism signals growing demand for persistent agent memory.

## Releases
- **python-v0.154.0** — Python SDK release. Install with `pip install --upgrade openai-codex==0.154.0` (Python 3.10+). Includes matching `openai-codex-cli-bin==0.154.0` runtime. Adds `max` and `ultra` reasoning-effort values ([#39662](https://github.com/openai/codex/pull/39662)) and `ExternalMessage` to synchronous.
- **voice-cygwin-108b38cf67cbb731** — CI-only build inputs for native Windows voice releases. Contains `cygwin-build-inputs.tar.gz` (103 pinned Cygwin binary packages and signed package index) and `cygwin-build-sources.tar` (83 corresponding sources). Not included in user packages.
- **rust-v0.155.0-alpha.2** — Alpha release.
- **rust-v0.155.0-alpha.1** — Alpha release.
- **rust-v0.154.0** — Stable release. GPT-6-Astra is now available in the model picker and Amazon Bedrock catalogs ([#42879](https://github.com/openai/codex/pull/42879), [#42619](https://github.com/openai/codex/pull/42619)). Experimental worktree support lets users create isolated checkouts for new or forked sessions using `--worktree` or `/worktree`, then browse and resume them ([#42652](https://github.com/openai/codex/pull/42652), [#43069](https://github.com/openai/codex/pull/43069), [#43120](https://github.com/openai/codex/pull/43120)).

## Hot Issues
1. **[Issue #44199](https://github.com/openai/codex/issues/44199)** — *Usage went from ~73% to 0% instantly on the $200/mo plan* (26 comments, 👍16). A Pro x20 user reports abrupt usage depletion while chatting. High engagement reflects widespread billing/rate-limit anxiety.
2. **[Issue #40575](https://github.com/openai/codex/issues/40575)** — *[RFC] Towards Self-Evolving Agents: Interactive Instruction Distillation (/learn) and Rule Metabolism for AGENTS.md* (25 comments). Proposes persistent agent memory and rule evolution. Strong discussion indicates demand for long-horizon agent capabilities.
3. **[Issue #40865](https://github.com/openai/codex/issues/40865)** — *[Desktop Remote SSH] inter-task tools stopped before update; 0.148 lacks codex_app MCP replacement* (17 comments, 👍11). Remote inter-task coordination broke even before runtime update; upgrading to 0.148 did not restore it. A significant remote-workflow regression.
4. **[Issue #42765](https://github.com/openai/codex/issues/42765)** — *Weekly Codex limit dropped from ~45% to 0% with no sessions run (Pro, Desktop app)* (12 comments, 👍1). Another usage-accounting bug with no activity. Reinforces concerns about rate-limit reliability.
5. **[Issue #41535](https://github.com/openai/codex/issues/41535)** — *[Windows] Desktop pet becomes click-through and cannot be dragged* (10 comments, 👍8). Windows-specific UI bug where the mascot becomes non-interactive. Community reaction is active despite being cosmetic.
6. **[Issue #34349](https://github.com/openai/codex/issues/34349)** — *Feature Request: Allow users to completely disable Pets and remove the "Show Pet" menu entry* (9 comments, 👍43). Highest-voted issue in this batch. Users want full control over non-essential UI features.
7. **[Issue #43596](https://github.com/openai/codex/issues/43596)** — *Windows Computer Use cannot access native apps: empty app inventory and sky RPC unavailable* (7 comments, 👍2). Blocks Computer Use on Windows. Important for automation workflows.
8. **[Issue #43347](https://github.com/openai/codex/issues/43347)** — *[Windows][26.901.5280/6511] Closing the last in-app Browser Use tab crashes the desktop app* (6 comments). Reproducible crash across two builds. Critical stability issue for browser-driven tasks.
9. **[Issue #43855](https://github.com/openai/codex/issues/43855)** — *Codex stops after compaction* (5 comments, 👍1). CLI 0.153.4 with GPT-6-Astra on Windows. Compaction is a core long-context feature; halting after it is a serious blocker.
10. **[Issue #44599](https://github.com/openai/codex/issues/44599)** — *[macOS/iPhone] Same Codex task shows different active turns and reports stale turn as latest* (5 comments). Cross-client turn-state inconsistency. Affects remote/multi-device trust in task status.

## Key PR Progress
1. **[PR #44650](https://github.com/openai/codex/pull/44650)** — *Enforce managed model provider selection and definitions*. Adds `model_provider` and `model_providers` to managed requirements, overriding local/session config. Important for enterprise policy control.
2. **[PR #44639](https://github.com/openai/codex/pull/44639)** — *Block non-loopback inbound traffic for the Windows offline sandbox*. Adds a matching inbound firewall rule for the offline sandbox user. Security hardening for Windows sandboxing.
3. **[PR #44636](https://github.com/openai/codex/pull/44636)** — *Recover OAuth metadata discovery from 503 responses via OIDC*. Falls back to OIDC metadata when OAuth metadata returns 503, preventing MCP token refresh failures.
4. **[PR #44629](https://github.com/openai/codex/pull/44629)** — *Add manual callback input to MCP OAuth login*. Introduces `codex mcp login <name> --no-browser` and accepts a pasted redirect URL. Improves MCP auth on headless/remote setups.
5. **[PR #44622](https://github.com/openai/codex/pull/44622)** — *Add `/voice settings` to choose a voice for future conversations*. Adds a TUI voice picker and ensures realtime requests use the active project's effective server settings.
6. **[PR #44617](https://github.com/openai/codex/pull/44617)** — *Invalidate cached Guardian approvals for unscored permission widening*. Prevents reuse of an earlier approval score when an unscored `exec_command` requests broader permissions. Security fix.
7. **[PR #44613](https://github.com/openai/codex/pull/44613)** — *Enable user verification for local Codex Desktop sessions*. Advertises `openai/elicitation.userVerification` and routes verification to local stdio clients. Improves local session security.
8. **[PR #44656](https://github.com/openai/codex/pull/44656)** — *Attribute turn metrics to the models used during the turn*. Fixes session-level telemetry that could mislabel usage after model switches or compaction. Better model-level usage accuracy.
9. **[PR #44655](https://github.com/openai/codex/pull/44655)** — *Honor thread-level plugin exclusions across runtime capabilities*. Applies `disabled_plugin_ids` to skills, recommendations, hooks, and MCP servers without mutating shared state. Better plugin control.
10. **[PR #44620](https://github.com/openai/codex/pull/44620)** — *Support temporary and minimal filesystem grants in MXC*. Resolves `Tmpdir` entries from absolute `TEMP`/`TMP` paths and accepts minimal filesystem entries. Expands sandbox policy compatibility.

## Feature Request Trends
- **Usage and rate-limit transparency** — Multiple issues demand reliable tracking and explanations for sudden depletion ([#44199](https://github.com/openai/codex/issues/44199), [#42765](https://github.com/openai/codex/issues/42765)).
- **Self-evolving agents and memory** — RFC #40575 proposes `/learn`, instruction distillation, and AGENTS.md rule metabolism, indicating strong interest in persistent, adaptive agent behavior.
- **UI configurability and minimalism** — Users want to disable Pets entirely ([#34349](https://github.com/openai/codex/issues/34349)) and turn off whimsy/astra effects by default ([#44561](https://github.com/openai/codex/issues/44561)).
- **Model transparency and selection** — Requests to expose the effective image model ([#43965](https://github.com/openai/codex/issues/43965)) and fix model routing/availability ([#44477](https://github.com/openai/codex/issues/44477)).
- **Browser and Computer Use reliability** — Repeated requests for stable Chrome/Edge control, tab management, and native app access ([#43596](https://github.com/openai/codex/issues/43596), [#43347](https://github.com/openai/codex/issues/43347), [#44140](https://github.com/openai/codex/issues/44140), [#43924](https://github.com/openai/codex/issues/43924)).
- **Cross-client state consistency** — Remote and mobile clients should agree on active turns ([#44599](https://github.com/openai/codex/issues/44599)).
- **Sandbox and remote robustness** — Windows OpenSSH sandbox access ([#37722](https://github.com/openai/codex/issues/37722)) and WSL stability ([#44612](https://github.com/openai/codex/issues/44612)) remain active requests.
- **Plugin capability expansion** — Google Calendar all-day event support ([#35444](https://github.com/openai/codex/issues/35444)) is a representative plugin limitation.

## Developer Pain Points
- **Rate-limit accounting bugs** — Usage dropping to 0% without activity erodes trust in paid plans.
- **Post-update regressions** — Windows browser control, WSL failures, and composer text not clearing after updates.
- **Cross-platform inconsistency** — Windows, WSL, macOS, and Linux each exhibit distinct crashes, UI bugs, and sandbox issues.
- **Lack of UI configurability** — Pets, whimsy effects, and animations are difficult to disable.
- **Remote and sandbox connectivity** — SSH, OpenSSH, MCP OAuth, and sandbox permission issues frequently block workflows.
- **Model routing and auth errors** — 404s on backend routes and OAuth metadata failures disrupt model access.
- **Performance and stability** — WebView2 process accumulation, browser tab crashes, and post-compaction halts.
- **Diagnostic opacity** — Secret redaction hides missing environment variable names in Codex Doctor.
- **Plugin limitations** — Missing capabilities such as true all-day Google Calendar events force workarounds.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-09-11

## 1. Today's Highlights
The team shipped a nightly build (**v0.61.0-nightly.20260910.ged2ac40df**) and a focused round of security hardening landed across the core: sandbox filesystem isolation, NTFS 8.3 short-name path-traversal mitigation, MCP policy enforcement, and a sibling-prefix bypass fix in `get_internal_docs`. On the community side, long-standing agent reliability concerns (MAX_TURNS reporting, generalist agent hangs, shell "Awaiting user input" freeze) and a growing push toward AST-aware tooling and Auto Memory redaction are driving the most discussion.

## 2. Releases
- **v0.61.0-nightly.20260910.ged2ac40df** — Automated nightly version bump. ([compare](https://github.com/google-gemini/gemini-cli/compare/v0.61.0-nightly.20260909.ged2ac40df...v0.61.0-nightly.20260910.ged2ac40df) · [PR #29268](https://github.com/google-gemini/gemini-cli/pull/29268))

## 3. Hot Issues
- **#22323 — Subagent recovery after MAX_TURNS reported as GOAL success** ([link](https://github.com/google-gemini/gemini-cli/issues/22323)). `codebase_investigator` misreports a `MAX_TURNS` interruption as a `GOAL` success, masking failures. P1 agent bug with 13 comments — critical for trust in subagent outputs.
- **#19873 — Zero-Dependency OS Sandboxing & Post-Execution Intent Routing** ([link](https://github.com/google-gemini/gemini-cli/issues/19873)). Aligns Gemini 3's bash-native behavior with safe execution; 9 comments reflect strong interest in lean, model-aligned sandboxing.
- **#21409 — Generalist agent hangs indefinitely** ([link](https://github.com/google-gemini/gemini-cli/issues/21409)). Routine tasks like folder creation stall when the generalist agent is invoked; 8 community 👍 underscores broad impact.
- **#22745 — Assess AST-aware file reads, search, and mapping** ([link](https://github.com/google-gemini/gemini-cli/issues/22745)). EPIC to evaluate AST-aware tooling (method-bounded reads, symbol navigation) to cut turns and token bloat.
- **#21968 — Gemini under-uses custom skills & sub-agents** ([link](https://github.com/google-gemini/gemini-cli/issues/21968)). Even with well-described gradle/git skills, the model rarely invokes them proactively — a behavioral concern for advanced users.
- **#26525 — Deterministic redaction in Auto Memory** ([link](https://github.com/google-gemini/gemini-cli/issues/26525)). Local transcripts are sent to extraction models before redaction — a security/privacy concern flagged by maintainers.
- **#25166 — Shell command execution stuck on "Waiting input"** ([link](https://github.com/google-gemini/gemini-cli/issues/25166)). Common CLI freeze after command completion — recurring DX frustration, 3 👍.
- **#22232 — `browser_agent` resilience: session takeover & lock recovery** ([link](https://github.com/google-gemini/gemini-cli/issues/22232)). Currently fail-fast on locked profiles; community wants graceful recovery.
- **#21983 — Browser subagent fails under Wayland** ([link](https://github.com/google-gemini/gemini-cli/issues/21983)). P1 platform-compatibility regression; affects Linux Wayland users.
- **#24246 — 400 error when >128 (or 400) tools available** ([link](https://github.com/google-gemini/gemini-cli/issues/24246)). Asks the agent to better scope enabled tools to avoid request limits.

## 4. Key PR Progress
- **#29214 — Harden sandbox filesystem boundaries & isolate runtime state** ([PR](https://github.com/google-gemini/gemini-cli/pull/29214)). Replaces host config mounts with sanitized configs and standardizes realpath resolution — strengthens security posture.
- **#29116 — Mitigate NTFS 8.3 short-name (SFN) path traversal** ([PR](https://github.com/google-gemini/gemini-cli/pull/29116)). Closes Windows-specific bypass (e.g., `git~1`, `env~1`) in normalization and AllowedPathChecker.
- **#29250 — Prevent indirect prompt injection via build files & untrusted flags** ([PR](https://github.com/google-gemini/gemini-cli/pull/29250)). Refactors `shell`/`edit`/`write_file` to validate workspace boundaries under restricted mode.
- **#29249 — Close sibling-prefix bypass in `get_internal_docs` path guard** ([PR](https://github.com/google-gemini/gemini-cli/pull/29249)). Fixes prefix-comparison flaw that let sibling directories leak contents to the model.
- **#29278 — Choose collision-free env expansion keys** ([PR](https://github.com/google-gemini/gemini-cli/pull/29278)) and **#29277 — Prevent env var collision with `expandEnvVars` sentinel** ([PR](https://github.com/google-gemini/gemini-cli/pull/29277)). Two coordinated fixes for an env-expansion bug where `__GCLI_EXPAND_TARGET__` in caller env disabled expansion entirely.
- **#29200 — Enforce MCP policy consistently at runtime** ([PR](https://github.com/google-gemini/gemini-cli/pull/29200)). Aligns MCP checks with case-insensitive, trimmed matching and treats empty allowlists as fail-closed.
- **#29134 — Protect active session from deletion in `--list-sessions`/`--delete-session`** ([PR](https://github.com/google-gemini/gemini-cli/pull/29134)). Prevents accidentally wiping the session in use; adds regression coverage.
- **#29268 — Automated version bump to v0.61.0-nightly.20260910.ged2ac40df** ([PR](https://github.com/google-gemini/gemini-cli/pull/29268)).
- **#29271 — Refactor: simplify project structure and metadata** ([PR](https://github.com/google-gemini/gemini-cli/pull/29271)). Centralizes metadata, removes complex build scripts — improves maintainability.
- **#29280 / #29276 — Bump vitest to 4.1.11** ([#29280](https://github.com/google-gemini/gemini-cli/pull/29280), [#29276](https://github.com/google-gemini/gemini-cli/pull/29276)). Dependabot updates for test infrastructure in `egress-service` and the main deps tree.

## 5. Feature Request Trends
- **AST-aware tooling** — multiple linked issues (#22745, #22746, #19561) push for symbol-level reads/search via AST to replace firehose `read_file` calls and reduce token waste.
- **Sandboxed, model-native execution** — #19873's "Zero-Dependency OS Sandboxing" reflects a clear desire to lean into Gemini 3's bash affinity without compromising safety.
- **Subagent transparency & lifecycle** — #22598 (subagent trajectories via `/chat share`) and #21763 (subagent context in `/bug`) show a community need for observability into delegated work.
- **Persistent, file-backed task tracking** — #18836 and #21000 call for replacing in-context `WriteToDo` with CRUD-style persistent tracking to avoid context rot.
- **Auto Memory quality & privacy** — cluster of #26522/#26523/#26525/#26516 demands deterministic redaction, bounded retries, and better patch validation for the memory pipeline.
- **Browser agent polish** — recovery from locked profiles (#22232), Wayland support (#21983), and respecting `settings.json` (#22267) round out the browser-agent wish list.
- **Agent self-awareness** — #21432 wants the agent to accurately describe its own CLI flags and hotkeys without hallucinating.

## 6. Developer Pain Points
- **Subagent reliability & truthfulness** — silent MAX_TURNS misreporting (#22323) and the generalist-agent hang (#21409) erode confidence in delegated workflows.
- **Shell execution UX** — recurring "Awaiting user input" stalls after commands complete (#25166) interrupt even trivial tasks.
- **Privacy of local context** — Auto Memory sending unredacted transcripts to extraction models (#26525) is the most acute trust concern in the dataset.
- **Tool-set bloat** — 400 errors when too many tools are enabled (#24246) reveal fragile tool scoping.
- **Inconsistent agent self-knowledge** — the model gives wrong CLI flags/hotkeys and prefers unsafe git ops (#22672), making the agent unreliable as its own guide.
- **Session/state lifecycle** — `/compress` lost on resume (#21335) and current-session deletion risk (#29134) frustrate users managing long-running work.
- **Linux/terminal fidelity** — terminal resize flicker (#21924) and Wayland browser failures (#21983) remain open quality gaps.
- **Skill & sub-agent underuse** — even with explicit skills (#21968), the model rarely volunteers them, forcing users to micromanage.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest: September 11, 2026

## Today's Highlights
Today's update focuses heavily on maturing the plugin ecosystem, introducing dedicated commands for managing instructions and LSP plugins along with more granular control over plugin activation. However, the community is currently grappling with significant stability issues (OOM crashes) in long-running sessions and specific platform-related bugs affecting Windows/WSL and SSH-over-tmux workflows.

---

## Releases
*   **v1.0.84-4**
    *   **Refactored Plugin Management:** Introduced `copilot instruction list` and `copilot lsp list` to replace the generic `copilot plugin list` commands.
    *   **Automation Friendly:** Added `--json` output to plugin listing and marketplace browsing commands for better integration with other tools.
    *   **Granular Control:** Added `enable` and `disable` commands for individual plugins to allow users to toggle functionality.

---

## Hot Issues
*   **[#13] Vi/Vim Input Mode for CLI](https://github.com/github/copilot-cli/issues/13):** A highly requested feature (76 likes) seeking modal editor support within interactive CLI prompts to improve power user efficiency.
*   **[#4742] Multiple Local Sessions Conflict](https://github.com/github/copilot-cli/issues/4742):** A regression in desktop app 1.1.15 prevents users from creating a second "Local" session if a CLI process is already active in that project.
*   **[#4095] Windows Access Denied on Plugin Update](https://github.com/github/copilot-cli/issues/4095):** Users report failure when updating plugins while VS Code is open because the extension holds file handles on the plugin directory.
*   **[#4699 / #4780] Frequent OOM Crashes in Long Sessions](https://github.com/github/copilot-cli/issues/4699):** Multiple reports of "JavaScript heap out of memory" (at ~4GB cap) during long-running resumed sessions, often dumping diagnostic reports into the working directory.
*   **[#3260] Copy/Paste Broken via SSH/tmux](https://github.com/github/copilot-cli/issues/3260):** A specific bug where clipboard operations fail when accessing a remote Windows Server 2025 via SSH from within a tmux session.
*   **[#3534] WSL2 (ARM64) Clipboard Failure](https://github.com/github/copilot-cli/issues/3534):** A quoting bug in the `cmd.exe` wrapper causes `/copy` to fail on ARM64-based WSL2 environments.
*   **[#1285] Org-Level Agents Missing](https://github.com/github/copilot-cli/issues/1285):** Enterprise users are reporting that agents defined in organization-level repositories are not appearing in the CLI or VS Code.
*   **[#4755] Session "Wedged" State](https://github.com/github/copilot-cli/issues/4755):** A bug where a session enters a state that is neither idle nor running after a message lands at the end of a turn, requiring a process kill.
*   **[#4764] Auto-Permission Timeout:** Users report that `/assisted` mode stops working after approximately one hour of use, necessitating a session restart.
*   **[#4731] MCP Tool Refresh Loop](https://github.com/github/copilot-cli/issues/4731):** When a tool call times out, the CLI immediately tries to refresh the tool list from the same blocked server, causing a permanent loss of tools for that session.

---

## Key PR Progress
*   **[#4808] Pin GitHub Actions to Commit SHAs](https://github.com/github/copilot-cli/pull/4808):** A security-focused PR to ensure `uses:` references use immutable commit hashes rather than mutable tags or branches.
*   **[#4786] Revise Third-Party Services Notice](https://github.com/github/copilot-cli/pull/4786):** Updates the documentation to clarify access requirements and terms for third-party service integrations.

---

## Feature Request Trends
*   **Input Enhancements:** Strong demand for **Vim/Vi modal mode** (#13) and standard keyboard shortcuts like **Ctrl+Backspace** for word-level deletion (#2199).
*   **Multi-Account Support:** Requests for native switching between multiple GitHub accounts (#367) to better support developers managing personal and work identities without manual re-authentication.
*   **Configuration Persistence:** Users are frustrated that the `model` field in `settings.json` is sometimes ignored on startup, falling back to `claude-sonnet-5` (#4067).

---

## Developer Pain Points
*   **Memory Management:** The recurring Node.js heap leak leading to OOM crashes in long sessions is the most significant point of friction for power users of the CLI.
*   **Platform-Specific Regressions:** Inconsistent behavior between Windows, WSL2 (especially ARM64), and SSH/tmux environments is creating hurdles for cross-platform development teams.
*   **State Reliability:** The "wedged" session state where the CLI stops responding without crashing indicates a flaw in the session's state machine logic.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-09-11

**Source:** [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)  
**Coverage window:** last 24 hours  
**Data note:** The provided dataset contains **1 issue, 0 pull requests, and 0 releases**. Therefore, the requested “top 10” Issues and PRs cannot be populated without fabricating entries. This digest covers all available signal.

---

## 1. Today's Highlights

No new Kimi Code CLI releases or pull requests were published or updated in the last 24 hours. The only community activity is an open authentication issue: `/login` device auth returns **HTTP 500 after successful browser approval** on CLI **v0.42.0** for macOS. The same failure was reportedly reproduced through the **VS Code extension**, suggesting a cross-client or backend-side device-token exchange problem rather than a purely local CLI configuration issue.

---

## 2. Releases

**None.** No new releases were published in the last 24 hours.

---

## 3. Hot Issues

Only one issue is available in this window. The requested list of 10 noteworthy issues cannot be filled from the supplied data.

### 1. [#2638 — `/login` device auth fails with HTTP 500 after successful browser approval](https://github.com/MoonshotAI/kimi-cli/issues/2638)

- **Status:** OPEN
- **Author:** milesbuckton
- **Created:** 2026-09-09
- **Updated:** 2026-09-10
- **Comments:** 1
- **Reactions:** 👍 0
- **Environment:** CLI v0.42.0, macOS, free plan (Adagio tier); also reproduced via the VS Code extension
- **Summary:** Running `/login` opens the browser with a device code, the user approves the login, and the CLI then fails with an HTTP 500.
- **Why it matters:** This blocks a critical onboarding and authentication path. Because it affects both the CLI and the VS Code extension, it may indicate a server-side device authorization or token exchange failure affecting multiple clients.
- **Community reaction:** Low visible engagement so far — 1 comment and 0 👍 — but the severity is high for affected users. Maintainer confirmation and a workaround would be valuable.

---

## 4. Key PR Progress

**None.** No pull requests were updated in the last 24 hours, so there are no PRs to summarize.

---

## 5. Feature Request Trends

No explicit feature requests appear in the available data. The only implied direction from the single issue is:

- **More reliable device authorization flow** across CLI and IDE integrations.
- **Better error diagnostics** when login fails, especially for server-side HTTP 500 responses.
- **Cross-client parity** between the CLI and VS Code extension authentication behavior.

---

## 6. Developer Pain Points

Based on the available issue data, the primary developer pain point is:

- **Authentication failure after successful browser approval.** Users complete the device-code flow but are blocked by an HTTP 500, with no actionable recovery path described.
- **Cross-surface impact.** The issue affects both the Kimi Code CLI and the VS Code extension, increasing the likely blast radius.
- **Version-specific friction.** The report is tied to CLI v0.42.0 on macOS, which may help narrow down a regression if confirmed.

**Suggested follow-up:** Maintainers should investigate the device authorization/token exchange endpoint, confirm whether the HTTP 500 is server-side, and publish a workaround or hotfix if the issue is reproducible on v0.42.0.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-11

## 1. Today's Highlights

The community continues to focus heavily on **storage sustainability and event-table bloat**, with multiple high-impact reports (#33356, #41175, #48384) describing multi-gigabyte SQLite growth that crashes sessions due to ENOSPC. Meanwhile, **payment friction** (declined cards, crypto-pay requests, account deletion) dominates user-experience sentiment, and the **2.0 beta** surfaces a cluster of plugin/subagent regressions that need maintainer attention before stable release.

## 2. Releases

*No new releases in the last 24 hours.*

## 3. Hot Issues

1. **[#33356](https://github.com/anomalyco/opencode/issues/33356) — Unbounded `event` table growth (13 GB+) (30 comments, 👍9)**
   The SQLite store at `~/.local/share/opencode/opencode.db` grows without retention or compaction because the event-sourcing `event` table is never pruned. Long-running instances filled 22 GB volumes to 97–99%. Critical for production stability.

2. **[#15585](https://github.com/anomalyco/opencode/issues/15585) — "Free usage exceed" on free models (55 comments, 👍17)**
   Users hitting limits on the three free models; questions whether free tiers actually exist. High conversation volume signals a long-standing transparency gap in the pricing/limits UX.

3. **[#23153](https://github.com/anomalyco/opencode/issues/23153) — Feature: Pay Go with crypto (21 comments, 👍50)**
   The strongest upvoted item in the list — community demand for a non-card payment rail, especially for international users blocked by #45278 / #43400-style card declines.

4. **[#36942](https://github.com/anomalyco/opencode/issues/36942) — Feature: Vertical tabs (15 comments, 👍31)**
   The new UI forces horizontal tabs, choking session visibility past ~5 sessions. Tied to PR #41575 below — feature appears to be in flight.

5. **[#13003](https://github.com/anomalyco/opencode/issues/13003) — Feature: Token usage in TUI (13 comments, 👍53)**
   Highest pure-feature upvote count (53). Token/budget visibility is tracked internally but not surfaced, frustrating power users who need cost control.

6. **[#45278](https://github.com/anomalyco/opencode/issues/45278) — Payment Declined After 3 Months (13 comments, 👍2)**
   Active subscription suddenly fails without card or bank changes — strongly suggests a billing-side regression, not customer error.

7. **[#23240](https://github.com/anomalyco/opencode/issues/23240) — GitLab API 402 errors (10 comments)**
   ChatGPT/Anthropic providers throwing `insufficient_credits` despite working on the upstream sites; closed but useful as a reference for provider credential handling.

8. **[#45442](https://github.com/anomalyco/opencode/issues/45442) — Subagent infinite loop: 364 identical `grep` calls (6 comments)**
   A background `general` subagent ran 364 identical tool calls for ~50 minutes — zero loop protection, uncontrollable token burn. Safety-critical for 2.0.

9. **[#41175](https://github.com/anomalyco/opencode/issues/41175) — `event` table storing full message snapshots per streaming update (5 comments, 👍4)**
   Reinforces #33356 but with a concrete tool/remediation offered; ~90% of DB size attributable to redundant snapshots.

10. **[#48389](https://github.com/anomalyco/opencode/issues/48389) — Desktop 1.18.30 `NodeService` SIGABRT/SIGSEGV on quit (4 comments)**
    Native modules (`node-pty`, `parcel-watcher`) crashing inside distrobox/Fedora Kinoite; reproducibility affects headless container users.

## 4. Key PR Progress

1. **[#48395](https://github.com/anomalyco/opencode/pull/48395) — feat(tui): recursive session grouping tree (jlongster)**
   Adds a generic recursive grouping engine for nested session rendering with cached leaf counts — a meaningful UX upgrade for users drowning in sessions.

2. **[#48393](https://github.com/anomalyco/opencode/pull/48393) — refactor(tui): extract shared session rendering primitives (jlongster)**
   First increment of the nested renderer refactor; moves context/hook and message-part components into dedicated modules. Foundation for #48395.

3. **[#41610](https://github.com/anomalyco/opencode/pull/41610) — fix(core): tolerate missing workspace names (opencode-agent[bot])**
   Detects legacy `workspace` tables lacking the `name` column before rebuilding; adds regression test. Hardens onboarding for drifted databases.

4. **[#41604](https://github.com/anomalyco/opencode/pull/41604) — fix(core): preserve compaction after revert (opencode-agent[bot])**
   Stages a revert before admitting manual compaction so the next prompt cannot truncate at an outdated boundary. Critical sequencing fix.

5. **[#41601](https://github.com/anomalyco/opencode/pull/41601) — fix(tui): scope attention notifications (opencode-agent[bot])**
   Ignores question/permission/status/error events that don't belong to the active session's directory; reduces noisy cross-workspace interruptions.

6. **[#41597](https://github.com/anomalyco/opencode/pull/41597) — fix(question): reject empty `questions` array instead of hanging (ousamabenyounes)**
   Closes #41549. Previously, an empty array registered a pending request that left sessions indefinitely waiting — a true bug fix.

7. **[#41594](https://github.com/anomalyco/opencode/pull/41594) — fix(compaction): respect agent variant config (ousamabenyounes)**
   Closes #41578. `agent.compaction.variant` was hardcoded to inherit from the user message; now honored. Subtle but matters for users tuning models per phase.

8. **[#41579](https://github.com/anomalyco/opencode/pull/41579) — fix(app): prevent large paste stalls (vanthunder)**
   Closes #38932. Routes big multiline pastes around Chromium's slow `execCommand("insertText")` path.

9. **[#41575](https://github.com/anomalyco/opencode/pull/41575) — feat(tui): configurable tab positions (kitlangton)**
   Allows V2 tabs at top/bottom/left/right with a 42-col vertical sidebar — directly answers #36942.

10. **[#41568](https://github.com/anomalyco/opencode/pull/41568) — fix(session): anchor non-git session paths to the drive on Windows (wxj006007)**
    Closes #41567. `path.relative("/", cwd)` was anchoring relative paths to the wrong root on Windows non-git projects.

## 5. Feature Request Trends

Looking across all 50 issues, the most-requested directions cluster around three themes:

- **Payment flexibility & billing UX** — Crypto pay for Go (#23153, 50 👍), card-decline refunds (#45278, #43400, #48374), and account/GDPR deletion (#48360). The billing surface is clearly the #1 source of community friction.
- **TUI/DX refinements** — Vertical tabs (#36942), token-usage display (#13003, 53 👍), microphone button (#37742), and visible diff/markdown rendering (#38828) — power users want observability and screen real estate back.
- **Safety rails for autonomy** — Mobile/remote permission approval (#39628), loop protection on subagents (#45442), and disk-usage runaway protection tied to the storage bugs — a clear ask for "guardrails before generation."

## 6. Developer Pain Points

- **Storage runaway** is the single biggest reliability issue right now: at least four open issues/pieces of feedback (#33356, #41175, #48384, the Ollama thinking toggle #47359 adjacent) point at SQLite/event-table bloat or ENOSPC crashes. This pattern suggests missing retention policy and full-snapshotting per streaming update.
- **2.0 beta regressions** are clustering — broken `event.subscribe` / context hooks (#44788), `Compaction` internals leaking through `--format json` (#42238), infinite-loop subagents (#45442), Copilot plan consumption in a single prompt (#48330), and `opencode upgrade` silently failing on Windows (#37055).
- **Provider integration edges** — DeepSeek `#max` reasoning not passed back (#48364), Ollama `/thinking` not honored (#47359), and explicit cache breakpoints only firing on Anthropic (#48246) all indicate provider matrix drift.
- **Billing/blocking surfaces** dominate negative sentiment: declined cards, opaque "free usage exceeded" errors, and no GDPR delete path combine into a coherent "trust friction" theme.
- **Dated dev-loop issues** like `opencode upgrade` no-op on Windows and GitLab provider failures show that *existing* triage isn't always closing items in proportion to comment volume — the comment-weighted issue list skews very heavily toward UX/payment, not core agent quality.

---
*Digest compiled from GitHub data on anomalyco/opencode for 2026-09-11. Top 30 of 50 issues and top 20 of 50 PRs by comment count were considered.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest: September 11, 2026

## Today's Highlights
Today's activity focused heavily on refining the TUI experience, specifically addressing UI-related bugs like cursor marker leakage and scrolling performance issues. Significant progress was also made in improving the robustness of the coding agent, including the implementation of default 3-minute timeouts for tool calls to prevent hangs and better handling of model-specific configurations.

---

## Releases
*No new releases in the last 24 hours.*

---

## Hot Issues
*   **[Context Budget Overflow (#8061)]**: A critical bug where requests are rejected by providers despite only using ~78% of the context window, and the automatic "compact-and-retry" recovery is currently failing to resolve it. [View Issue](https://github.com/earendil-works/pi/issue/8061)
*   **[TUI Scroll Lag (#9052)]**: Users report that while fullscreen mode provides a helpful fixed input box, the wheel scrolling is 3x slower than in regular mode. [View Issue](https://github.com/earendil-works/pi/issue/9052)
*   **[Extension Provider Fallback (#8810)]**: An intermittent bug where fresh sessions ignore the configured `defaultProvider`/`defaultModel` if that provider was registered via an extension. [View Issue](https://github.com/earendil-works/pi/issue/8810)
*   **[Claude-Fable-5 API Errors (#9294)]**: The built-in fallback models for `claude-fable-5` still include `claude-opus-4-8`, which the API now rejects with 400 errors. [View Issue](https://github.com/earendil-works/pi/issue/9294)
*   **[Cursor Marker Duplication (#9257)]**: `extractCursorPosition()` only removes the first marker on a line, causing duplicate markers to leak into the terminal output. [View Issue](https://github.com/earendil-works/pi/issue/9257)
*   **[Invisible Markdown Images (#9268)]**: In the TUI, remote Markdown images with empty alt-text are becoming invisible within lists. [View Issue](https://github.com/earendil-works/pi/issue/9268)
*   **[Windows ShellPath Issue (#9361)]**: On Windows, the `shellPath` in settings is non-deterministically ignored when extensions are loaded, forcing a fallback to `bash.exe`. [View Issue](https://github.com/earendil-works/pi/issue/9361)
*   **[Usage Metric Normalization (#8752)]**: On Bedrock, `usage.input` is not normalized across model families (Anthropic vs. OpenAI), leading to incorrect cache miss notices and doubled billing. [View Issue](https://github.com/earendil-works/pi/issue/8752)
*   **[Grep OOM Bug (#9276)]**: The `grep` tool is causing JavaScript Out of Memory errors in the headless SDK because it reads every match context line into the heap. [View Issue](https://github.com/earendil-works/pi/issue/9276)
*   **[Bedrock Reasoning Failure (#9331)]**: When using OpenAI models through Bedrock, changing the "thinking level" (reasoning effort) has no effect on the request. [View Issue](https://github.com/earendil-works/pi/issue/9331)

---

## Key PR Progress
*   **[PR #9301] Device-Code & Clipboard Actions**: Reintroducing ability to automatically open the browser and copy code to the clipboard, reducing friction in corporate environments. [View PR](https://github.com/earendil-works/pi/pr/9301)
*   **[PR #9434] Extension System Prompts**: Allowing extensions to append to the system prompt during session start, enabling more flexible context injection. [View PR](https://github.com/earendil-works/pi/pr/9434)
*   **[PR #9443] Gemini Thought Signature**: Fix where `thoughtSignature` was lost during tool calls when using Gemini models via an OpenAI-compatible gateway. [View PR](https://github.com/earendil-works/pi/pr/9443)
*   **[PR #9431] Global Tool Timeouts**: Implementing a default 3-minute timeout for all tool calls to prevent the agent from hanging indefinitely. [View PR](https://github.com/earendil-works/pi/pr/9431)
*   **[PR #8799] TUI Working Spinner**: Improving the "Working..." indicator to appear in the input editor border and correctly handle retry states. [View PR](https://github.com/earendil-works/pi/pr/8799)
*   **[PR #9459] Model Selection Logic**: Fixing the logic to prefer the last manually changed model in a session rather than the last assistant-message model. [View PR](https://github.com/earendil-works/pi/pr/9459)
*   **[PR #9441] Cursor Marker Leakage**: A fix to prevent cursor markers from leaking across full-screen selection and terminal rendering. [View PR](https://github.com/earendil-works/pi/pr/9441)
*   **[PR #9335] Base URL Resolution**: Adding a solution to resolve `baseUrl` for model providers, increasing flexibility for custom endpoints. [View PR](https://github.com/earendil-works/pi/pr/9335)
*   **[PR #9338] Overlay Image Fix**: Fixing a bug where screenshots remained visible on top of the UI overlay, blocking the agent list. [View PR](https://github.com/earendil-works/pi/pr/9338)
*   **[PR #9430] Code Cleanup**: Removing unreachable `tool_result_end` listeners in the subagent example to maintain codebase. [View PR](https://github.com/earendil-works/pi/pr/9430)

---

## Feature Request Trends
*   **Per-Model Compaction**: High demand for a `compaction.profiles` in `settings.json` to allow different token reservation settings based on the model.
*   **Session Tree Management**: Users want a `shift-d` keybinding in the `/tree` panel to delete specific branches easily.
*   **TUI Overlay Exclusion**: A request to opt-in exclude UI overlays from text selection so that users can copy text from the transcript rather than the rendered screen.
*   **CLI Mode Validation**: Requests for the `--mode` flag (e.g., `--mode yaml`) to provide clear diagnostics instead of silently falling back to interactive mode.

---

## Developer Pain Points
*   **OS-Level Restrictions**: macOS 15+ "Local Network Privacy" is blocking the Pi process from reaching LAN addresses (`EHOSTUNREACH`), requiring manual documentation or bypass paths.
*   **Billing Inaccuracies**: Frustration over how Bedrock/Gateway adapters calculate `cacheWrite1h`, leading to perceived over-billing for cache-heavy sessions.
*   **UI Inconsistency**: Frustration with the viewport jumping to the top of the session when the agent redraws lines while the user is scrolling up to read history.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-09-11

## Today's Highlights

Today saw the rollout of **v0.23.3** alongside a coordinated SDK (`sdk-typescript-v0.1.12`), Desktop (`desktop-v0.3.0` and its preview), and nightly build. Community focus is heavily split between **IDE integration regressions** (VS Code companion losing session history, TUI crashes on concurrent subagent completion) and **daemon scalability**, with multiple P1/P2 issues surfacing around `qwen serve` workspace registration, memory budgeting across ACP children, and Windows-specific MCP transport failures.

---

## Releases

### v0.23.3 (CLI)
- **Features** (`#11349`): expanded Kimi, Qwen and DeepSeek reasoning presets in core.
- **Refactor** (`#11570`): removed obsolete background-response aggregation path in the DingTalk channel.
- Bundled into TypeScript SDK v0.1.12 ([release](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.12)).

### desktop-v0.3.0 and desktop-v0.3.0-preview.0
- CI scheduled packaging exercise (`#11519`).
- Bridge fix: keep pending permission queue stable across desktop restarts.
- **Preview note:** the `desktop-latest` updater feed still points at `0.2.2`; this build will not be auto-pushed to existing installations.

### v0.23.3-nightly.20260910.c46cb85cf2
- Pre-release pulled from the release branch; no migration action required for stable users.

---

## Hot Issues

1. **[#8102 — Trustworthy agent runtime](https://github.com/QwenLM/qwen-code/issues/8102)** (P3, 18 comments)
   *Proposal to keep the LLM outside a trust boundary and let the runtime deterministically constrain, authorize, observe, and evaluate its actions.* The most-discussed issue of the day; signals appetite for a structured "safety envelope" around agent execution.

2. **[#8182 — Daemon grants each ACP child 50% of host memory](https://github.com/QwenLM/qwen-code/issues/8182)** (P2, 7 comments)
   `getAcpMemoryArgs()` computes a single V8 heap ceiling from host RAM and never divides by child count. A multi-tenant `qwen serve` can exhaust the host before hitting the per-child cap. Sibling issue to the daemon workspace scaling discussion.

3. **[#7771 — Persisted `mcp_config` not loaded into main-process proxy at startup](https://github.com/QwenLM/qwen-code/issues/7771)** (CLOSED, 7 comments)
   Restarting Qwen Desktop left IPC MCP servers unreachable until manual reload. Closed awaiting re-test once a fix lands — echoed by new bugs below.

4. **[#8596 — Deprecate Electron desktop, promote Tauri shell](https://github.com/QwenLM/qwen-code/issues/8596)** (P2, 6 comments)
   Freeze `packages/desktop` Electron app and rename `packages/desktop-shell` (Tauri) to `packages/desktop`. Community sees Tauri as the long-term desktop path.

5. **[#8092 — Lower-maintenance desktop around Web Shell](https://github.com/QwenLM/qwen-code/issues/8092)** (6 comments)
   Complementary proposal: reuse Web Shell as the desktop UI surface rather than forking effort. Aligns with `#8596`.

6. **[#11359 — Daemon REST + SSE API documentation](https://github.com/QwenLM/qwen-code/issues/11359)** (P3, 5 comments)
   Integrators want a consolidated, runnable-reference guide for the daemon surface as the SDK/peer API expands.

7. **[#11574 — VS Code history dialog hardcodes `sourceType=vscode`](https://github.com/QwenLM/qwen-code/issues/11574)** (P2, 5 comments)
   After 0.23.1 update, the sidebar hides sessions from 0.21.x because the `sourceType` metadata is missing on legacy transcripts — a direct follow-on regression to the 0.21→0.23 upgrade path.

8. **[#11489 — Extension update drops all conversation history](https://github.com/QwenLM/qwen-code/issues/11489)** (CLOSED P1, 5 comments)
   0.21.11 → 0.23.1 Companion upgrade wipes visibility of prior sessions even though `state.vscdb` still contains them. Same root cause as `#11574`.

9. **[#9693 — MCP STDIO `-32000 Connection closed` on Windows at startup](https://github.com/QwenLM/qwen-code/issues/9693)** (P2, 5 comments)
   Reproducible with `@modelcontextprotocol/server-filesystem` and `-sequential-thinking`. Windows-only — duplicated by `#11597` and `#11460`.

10. **[#11500 — TUI silently exits on React #185](https://github.com/QwenLM/qwen-code/issues/11500)** (P1, 3 comments)
    Multiple background subagents completing in quick succession triggers `Maximum update depth exceeded` in Ink's `useBoxMetrics` listener, killing the TUI with no error rendered to the user.

*(Honorable mentions: `#11590` P1 — auto-injected `metadata` field 400s against DashScope's OpenAI-compatible aggregator for non-Qwen models; `#11591` P2 — `GET /workspaces/:id/git?wait=1` is ~50× slower than raw `git status`; `#11556` P1 — Companion 0.23.1 webview hangs under VS Code Remote-SSH.)*

---

## Key PR Progress

1. **[#11560 — `@qwen-code/sdk/peer`](https://github.com/QwenLM/qwen-code/pull/11560)** *(closed/merged direction)* — external program endpoint for cross-session messaging. A voice front-end, build watcher, or relay can now be addressed as a Qwen Code session. Foundation for the Live voice app work.
2. **[#11457 — Goal stop at turn or active-time budget](https://github.com/QwenLM/qwen-code/pull/11457)** — adds `model.goalMaxTurns` and `model.goalMaxActiveMinutes` so a Goal can be stopped on dimensions beyond token spend.
3. **[#11538 — Per-model OpenAI API selection](https://github.com/QwenLM/qwen-code/pull/11538)** — model-level `api: "chat-completions" | "responses"` inside `modelProviders.openai`; impacts the `#11590` compat workaround path.
4. **[#11540 — Base-tree reuse fence out of mount](https://github.com/QwenLM/qwen-code/pull/11540)** — moves the review sandbox trust record onto a host-side `.qwen/review-leases` file the sandbox never mounts R/W.
5. **[#11501 — Expand `${VAR}` in project `.mcp.json`](https://github.com/QwenLM/qwen-code/pull/11501)** — same resolver used by settings now expands env vars before hashing/normalizing/connecting MCP servers.
6. **[#11545 — Web Shell: continue interrupted sessions](https://github.com/QwenLM/qwen-code/pull/11545)** — surfaces an explicit *Continue execution* action in the main chat and split panes without duplicating the user message.
7. **[#11276 — Web previews with saved delivery history](https://github.com/QwenLM/qwen-code/pull/11276)** — desktop/mobile widths, refresh, external open; standalone Web Shell enables by default.
8. **[#11572 — Free exited web-terminal PTY at exit time](https://github.com/QwenLM/qwen-code/pull/11572)** — closes the Windows WebTerminalRegistry leak from `#11353` (deferred `setImmediate` release).
9. **[#11395 — Preserve caller-owned mode across ACP child reap](https://github.com/QwenLM/qwen-code/pull/11395)** — bridge reapplies the daemon API caller's approval mode before returning restored sessions.
10. **[#11086 — Scope extensions to workspace runtimes](https://github.com/QwenLM/qwen-code/pull/11086)** — exposes the global extension catalog through per-workspace runtimes; refines `@`-menu and composer extension flows.

*(Also active: `#11576` persists Goal checkpoint failure reasons; `#10455` stops CLI startup crash on unwritable output-language file; `#10906` shows shell/monitor task output directly in Web Shell; `#11093` adds a persistent `/focus` mode for quieter transcripts.)*

---

## Feature Request Trends

- **Trustworthy / observable agent runtime** — `#8102` (deterministic tool-execution boundaries) is the single largest discussion thread; signals demand for first-class authorization/audit primitives around agent actions.
- **Desktop strategy consolidation onto Web Shell / Tauri** — `#8596`, `#8092`, plus `desktop-v0.3.0` CI packaging cadence point to a deliberate convergence on a web-shell-backed, Tauri-hosted desktop.
- **Daemon as a platform** — workspace registration limits (`#9316`, `#9304`, `#11386`), per-workspace runtime scoping (`#11086`), peer SDK endpoint (`#11560`), Git-status performance (`#11591`), and integrator-grade REST/SSE docs (`#11359`) all reflect a community asking `qwen serve` to grow into a programmable backbone for third-party products.
- **Voice as a first-class entry point** — `#10118` proposes splitting *Live* into an independent always-on voice app that controls all sessions; aligns with the SDK peer endpoint in `#11560`.
- **Goal lifecycle control** — `#11457` (turn / active-time ceilings) plus `#11576` (checkpoint-failure persistence) extend the Goal subsystem beyond token budgets.
- **Smarter, structured memory** — `#10183` evolves auto-memory into a structured push/pull recall protocol with metadata subtrees and a dedicated recall tool.

---

## Developer Pain Points

- **VS Code Companion upgrade regressions** — the 0.21.x → 0.23.x upgrade path is breaking two visible guarantees: *sidebar session history vanishes* (`#11489`, `#11574`) and *opened files are auto-added to context* (`#11558`). Both feel like migration hygiene that landed missing.
- **Windows MCP transport instability** — repeated `-32000 Connection closed` reports from `#9693`, `#9675`, `#11460`, `#10056`, and the new `#11597`, covering STDIO and SSE. Multiple users hit it on day one of common MCP servers.
- **`qwen serve` scalability ceilings** — fixed `MAX_DAEMON_WORKSPACES=25` plus per-child V8 heaps computed from host RAM (`#8182`) mean anyone trying to host dozens of workspaces hits either the registration cap or OOM before throughput.
- **Non-Qwen provider incompatibility** — `#11590` documents that an auto-injected `metadata` field breaks DashScope's OpenAI-compatible aggregator for third-party models (e.g., ZHIPU GLM), returning opaque `400`s. A single missing field renders whole provider families unusable.
- **TUI crashes with no diagnostic** — `#11500`'s silent React `#185` exit on concurrent subagent completion drops users to a shell prompt with no rendered error, undermining trust in long-running background work.
- **Remote/SSH IDE workflow breakage** — `#11556` shows the Companion webview stuck loading under VS Code Remote-SSH on aarch64 hosts, blocking the most distributed development scenario.
- **Daemon surfaces swallow the real error** — `#11579`: a typo in `settings.json` is clear on the CLI but reported as a generic internal error through Web Shell and VS Code, making daemon-backed debugging much harder than CLI-only debugging.
- **Session restore discards in-flight work** — `#11511` documents `closeSupersededSession` force-closing on navigation, throwing away ongoing tool calls; users expect a resume-with-history, not a discard.

---

*Generated from GitHub data for `QwenLM/qwen-code` covering activity on 2026-09-10 → 2026-09-11.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest: 2026-09-11

## Today's Highlights
The project is currently focused on a massive architectural overhaul of the `CodeWhale` core, specifically decomposing monolithic "mega-files" into modular crates to improve maintainability. Significant effort is also directed toward refining the UI/UX in version 0.9.x, addressing critical issues with terminal-based clipping, stack overflows in tests, and inconsistencies in model-routing/pricing logic.

---

## Releases
*No new releases in the last 24 hours.*

---

## Hot Issues
*   **[#5316] EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)** – A major architectural initiative to break down the codebase. The team is following a strict Linear execution plan (C03–C10) to manage ownership and dependency order. [View Issue](https://Hmbown/Codewhale/issue/5316)
*   **[#5586] [v0.9.12] Decompose the mega files** – Urgent need to split massive files like `lib.rs` (18.7k lines) and `config.rs` (12.3k lines) to resolve technical debt. [View Issue](https://Hmbown/Codewhale/issue/5586)
*   **[#6011] feat(tui): usage & tool diagnostics** – A request for granular token accounting, including per-component costs, cache hit rates, and tool-call error patterns. [View Issue](https://Hmbown/Codewhale/issue/6011)
*   **[#5988] Tests: libtest thread stack overflow** – A critical CI failure where specific TUI tests overflow the 2MiB stack, which is currently being hidden by `nextest` per-process isolation. [View Issue](https://Hmbown/Codewhale/issue/5988)
*   **[#6045] fix(tui): user-input modal clips and hides input** – A major UX bug where the input dialog cuts off options and hides the typed text, making mistakes nearly irreversible. [View Issue](https://Hmbown/Codewhale/issue/6045)
*   **[#6030] MCP: mid-session authentication deadlock** – A complex issue where a running session cannot connect to an MCP server (like Linear) even after a successful OAuth login. [View Issue](https://Hmbown/Codewhale/issue/6030)
*   **[#6036] "Fleet" and "agent" conceptual overlap** – High-level architectural confusion where both "fleets" and "agents" are stored separately, leading to data inconsistency in how model pins and bookmarks work. [View Issue](https://Hmbown/Codewhale/issue/6036)
*   **[#6003] Make user-input/approval timeout configurable** – Users are requesting the hardcoded 300-second timeout for approvals be increased or disabled to prevent cancellations during long-running manual tasks. [View Issue](https://Hmbown/Codewhale/issue/6003)
*   **[#5976] Cost shows "unknown" on Concentrate** – A bug where the pricing engine fails to display costs for the Concentrate provider despite it being cataloged and routable. [View Issue](https://Hmbown/Codewhale/issue/5976)
*   **[#6009] /models command missing pagination** – The CLI currently only returns the first page of models because it doesn't handle OpenAI-style cursor pagination. [View Issue](https://Hmbown/Codewhale/issue/6009)_

---

## Key PR Progress
*   **[#5726] feat(tui): checkpoint live provider catalogs** – A draft integration branch that successfully implemented live catalog plumbing and provider-scoped route identity. [View PR](https://Hmbown/Codewhale/pr/5726)
*   **[#6012] fix(session): skip runtime handoffs in auto-title** – Resolved an issue where internal runtime envelopes (XML tags) were leaking into generated session titles. [View PR](https://Hmbown/Codewhale/pr/6012)
*   **[#6027] & [#6026] Dependency updates** – Automated maintenance for `vitest/mocker` and `js-yaml` across web and VS Code extensions.

---

## Feature Request Trends
1.  **UI Customization:** Strong demand to make the bottom "UI chrome" (posture bar and metrics line) configurable rather than hardcoded in the 0.9.12 redesign.
2.  **Context Management:** Requests for "virtual-memory-style" context eviction (a `/purge` tool that swaps/offloads old context instead of just deleting it).
3.  **Advanced Hooks:** Desire for more session-state hook events (idle, fatal-error, waiting-for-user) to allow better integration with external tools.
4.  **OpenRouter Granularity:** Requests for native vendor selection within OpenRouter to pin specific upstream providers for latency or quality reasons.
5.  **Command History:** Users want to include slash commands (e.g., `/theme`, `/compact`) in the Up-arrow recall history, which currently excludes them.

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

# ComfyUI Community Digest: September 11, 2026

## Today's Highlights
The community is currently focused on stabilizing the newly integrated **MiniMax H3** video generation workflows, with several reports of VRAM regressions and OOM errors related to DynamicVRAM and sparse attention. Significant work is underway on the **v0.35.1 backport**, which addresses API security and credential management, alongside a growing push for a native "Snap to Grid" feature to improve UI organization.

---

## Releases
*No new releases in the last 24 hours.*

---

## Hot Issues
*   **MiniMax H3 & VRAM Regressions (#16150):** Users are reporting unexpected VRAM spikes when running MiniMax H3 workflows on the latest dev builds. This appears to be a regression rather than a custom node conflict. [View Issue](https://github.com/Comfy-Org/ComfyUI/issue/16150)
*   **DynamicVRAM Stalling on RX 9070 XT (#16062):** Severe GPU/UI stalling is being reported during VAE Decode on new RDNA4-based hardware when DynamicVRAM is enabled. [View Issue](https://github.com/Comfy-Org/ComfyUI/issue/16062)
*   **MiniMax H3 Infinite Hang (#15628):** RTX 4070 (12GB) users are experiencing infinite hangs at "Model Initializing..." with DynamicVRAM, surfacing CUDA illegal memory access errors. [View Issue](https://github.com/Comfy-Org/ComfyUI/issue/15628)
*   **Compiler/Attention Conflict (#16144):** A conflict was identified between the new `comfy-aimdo` (compiler PR) and the sparse attention node PR, causing OOMs during MMH3 video generation. [View Issue](https://github.com/Comfy-Org/ComfyUI/issue/16144)
*   **Memory Leaks Post-Update (#15759):** Users are noting significant memory leaks and performance degradation after upgrading from v0.30.2 to v0.33.1. [View Issue](https://github.com/Comfy-Org/ComfyUI/issue/15759)
*   **CLIP Attribute Error (#13286):** A persistent bug where the `CLIPTextModel` object lacks the `generate` attribute is breaking specific LLM-based workflows. [View Issue](https://github.com/Comfy-Org/ComfyUI/issue/13286)
*   **Batch Upscaling Failure (#16129):** The SeedVR2 upscaling node is reportedly breaking when processing batched images. [View Issue](https://github.com/Comfy-Org/ComfyUI/issue/16129)
*   **Performance Disparity (#15261):** A strange report of an RTX 5070ti (16GB) performing 2.3x faster than an RTX 4080 in MiniMax H3 workflows, prompting community investigation. [View Issue](https://github.com/Comfy-Org/ComfyUI/issue/15261)
*   **Header RFC Compliance (#8914):** The `view_image` function is setting "Content-Disposition" headers that do not follow RFC2183 rules, potentially causing issues with strict fetchers. [View Issue](https://github.com/Comfy-Org/ComfyUI/issue/8914)
*   **RDNA4 Corruption (#16222):** Comfy Compiler CUDA graphs are silently corrupting MiniMax-Music-3 text-encoder output on RDNA4 hardware. [View Issue](https://github.com/Comfy-Org/ComfyUI/issue/16222)

---

## Key PR Progress
*   **Backport v0.35.1 (#16235):** A major backport effort including OpenRouter model updates (image-2.6) and Gemini 3.8 Flash support. [View PR](https://github.com/Comfy-Org/ComfyUI/pull/16235)
*   **Secure API Credentials (#16242):** A critical PR to implement client-isolated credential registries, late-bound tokens, and idempotent polling to prevent 401 errors. [View PR](https://github.com/Comfy-Org/ComfyUI/pull/16242)
*   **Marigold v2 Support (#16232):** Ongoing development to integrate native support for Marigold v2 depth estimation. [View PR](https://github.com/Comfy-Org/ComfyUI/pull/16232)
*   **RFC Compliance (#16238):** Updates to make `/view` responses compliant with RFC 2183/266 by adding proper disposition-type headers. [View PR](https://github.com/Comfy-Org/ComfyUI/pull/16238)
*   **Custom Browser Launch (#11709):** A proposal to allow users to specify a custom browser via CLI switches rather than forcing the Windows default. [View PR](https://github.com/Comfy-Org/ComfyUI/pull/15909)
*   **H3 ControlNet Fix (#16240):** A fix for ControlNet nodes functioning correctly when using the Comfy compiler. [View PR](https://github.com/Comfy-Org/ComfyUI/pull/16240)
*   **Tripo Migration (#16201):** Migration of Tripo nodes to v3 API, including a new "Smart Segment" node. [View PR](https://github.com/Comfy-Org/ComfyUI/pull/16201)
*   **Partner Idempotency (#16220):** Implementation of `Idempotency-Key` for partner-proxy calls to improve API stability. [View PR](https://github.com/Comfy-Org/ComfyUI/pull/16220)
*   **Generic Loops (#16227):** The third iteration of generic loops, aiming for more complex workflow logic. [View PR](https://github.com/Comfy-Org/ComfyUI/pull/16161)
*   **Attention Measure Foundation (#16239):** A foundational PR for the MiniMax-H3 Flow-Aligned-Regenerate design. [View PR](https://github.com/Comfy-Org/ComfyUI/pull/16239)

---

## Feature Request Trends
*   **UI Quality of Life:** There is high demand for a native **"Snap to Grid"** feature to help users organize complex workflows manually.
*   **Audio Processing:** A recurring request for a native **LUFS audio loudness normalization node** to allow consistent audio leveling beyond simple volume adjustment.
*   **Workflow Logic:** Continued interest in **Generic Loops** to allow for more sophisticated iterative generation processes without custom node overhead.

---

## Developer Pain Points
*   **VRAM Management:** The interaction between `DynamicVRAM` and high-end models like MiniMax H3 is a major source of instability, leading to hangs and crashes.
*   **Hardware Specificity:** AMD (ROCm) users continue to struggle with installation documentation, as the official guide often points to incompatible or outdated Torch wheels.
*   **API Stability:** Developers using ComfyUI as a backend are frustrated by lack of robust credential handling and the need for idempotency keys in partner nodes.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Community Digest: September 11, 2026

## Today's Highlights
The community is currently focused on addressing critical security vulnerabilities in the Ollama binary and fixing parser regressions for the latest Gemma and Qwen3 models. Significant progress is being made on expanding context window support to 1M tokens in the UI and optimizing the MLX runner's memory management for Apple Silicon hardware.

---

## Releases
*No new releases in the last 24 hours.*

---

## Hot Issues
1. **CRITICAL and HIGH CVE Vulnerabilities in Ollama GoBinary (#16033)**: A report of 36 vulnerabilities (1 Critical, 11 High) in the core Go binary has surfaced. This is a top priority for user safety. [View Issue](https://github.com/ollama/ollama/issue/16033)
2. **GLM-5.3 Endless Reasoning (#18193)**: Users report that `glm-5.3:cloud` via Ollama Cloud enters infinite reasoning loops in OpenCode/ZCode, while official APIs remain stable. [View Issue](https://github.com/ollama/ollama/issue/18193)
3. **macOS Silent Failures (#18368)**: On M4 Pro Macs running macOS Sequoia, chat processing fails silently after ~6k tokens without GUI notification despite high memory availability. [View Issue](https://github.com/ollama/ollama/issue/18368)
4. **Qwen3-Coder Tool Call Leaks (#16686)**: When `qwen3-coder` omits the `<tool_call>` tag, the parser fails and returns tools as plain text, breaking agent clients like Claude Code. [View Issue](https://github.com/ollama/ollama/issue/16686)
5. **File Descriptor Leak (#18344)**: `ollama serve` is leaking one file descriptor per successful `/api/generate` request, eventually leading to process exhaustion requiring restart. [View Issue](https://github.com/ollama/ollama/issue/18344)
6. **Qwen2.5-Coder 3B Broken Artifacts (#18252)**: Low-bit quantizations (q2/q3) of the 3B Qwen2.5-Coder are reportedly functionally broken, scoring 0% on code tasks. [View Issue](https://github.com/ollama/ollama/issue/18252)
7. **Vulkan Runner Wedges (#18370)**: On Linux with AMD Strix Halo APUs, the Vulkan ggml backend hangs with one thread pinned at 100% while the GPU remains idle. [View Issue](https://github.com/ollama/ollama/issue/18370)
8. **Model Loading Regression (#18373)**: Users are reporting a significant slowdown in model loading times after upgrading from v0.23.4 to 0.30.0. [View Issue](https://github.com/ollama/ollama/issue/18373)
9. **Gemma4 String Placeholder Collision (#18354)**: A parser defect causes Gemma4 tool calls to be dropped if they contain many string values followed by a string array. [View Issue](https://github.com/ollama/ollama/issue/18354)
10. **Context Window UI Cap (#18352)**: A request to unlock the UI slider beyond 256K to allow for 1M context, despite models already supporting larger windows. [View Issue](https://github.com/ollama/ollama/issue/18352)

---

## Key PR Progress
1. **MLX Version Bump (#18235)**: Routine version update for the MLX library to maintain feature parity. [View PR](https://github.com/ollama/ollama/pr/18235)
2. **MLX Runner Memory Management (#18327)**: A major shift from "pinning" to "sweeping" in the MLX runner to prevent memory exhaustion. [View PR](https://github.com/ollama/ollama/pr/18327)
3. **TealKit Integration (#18371)**: Adding TealKit, an open-source autonomous agent framework, as a featured assistant in the docs. [View PR](https://github.com/ollama/ollama/pr/18371)
4. **GGUF Metadata Extraction (#17858)**: Optimizes performance by extracting GGUF metadata into a JSON file to avoid repeated expensive loads. [View PR](https://github.com/ollama/ollama/pr/17858)
5. **Cloud Stream Failure Propagation (#18351)**: Fixes an issue where partial cloud responses were incorrectly treated as successful completions. [View PR](https://github.com/ollama/ollama/pr/18351)
6. **Gemma4 Tool Call Parsing (#18299)**: Correctly handles `BEGIN_ARG` markers to ensure tool calls are not malformed. [View PR](https://github.com/ollama/ollama/pr/18299)
7. **Gemma4 String Collision Fix (#18366)**: Resolves the issue where specific string patterns caused tool calls to vanish. [View PR](https://github.com/ollama/ollama/pr/18366)
8. **Llama.cpp Bump (#18317)**: Updating the underlying llama.cpp engine to the latest stable build. [View PR](https://github.com/ollama/ollama/pr/18317)
9. **Template Mutation Fix (#18367)**: Prevents `Template.Execute` from mutating the caller message, ensuring double-rendering consistency. [View PR](https://github.com/ollama/ollama/pr/18367)
10. **Parallel Qwen35 Requests (#17144)**: Enables multiple parallel requests for Qwen35/moe architectures now that the upstream crash is resolved. [View PR](https://github.com/ollama/ollama/pr/17144)

---

## Feature Request Trends
*   **Ollama Cloud Expansion**: High demand for adding `DeepSeek-V4.1-Flash` to the managed Ollama Cloud service.
*   **Advanced Analytics**: Users are requesting an "Ultimate Usage Dashboard" featuring weekly/monthly token tracking and resource graphs for local model usage.
*   **Context Window Flexibility**: Persistent pressure to allow the UI settings slider to support up to 1M tokens to match model capabilities.
*   **Agent Configuration**: Requests for a command to "dump" the specific configuration used when running `ollama launch <agent>`.

---

## Developer Pain Points
*   **Binary Security**: The discovery of high-severity CVEs in the Go binary is a major concern for enterprise adopters.
*   **Parser Fragility**: Frequent issues with how new models (Gemma4, Qwen3) handle tool call tags are causing frustration for developers building agent-ic workflows.
*   **Resource Management**: The file descriptor leak in `ollama serve` is a significant blocker for long-running production deployments.
*   **UI/UX Feedback**: The lack of error notifications on macOS when long-document processing fails creates a poor experience for end users.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

# llama.cpp Community Digest — 2026-09-11

## 1. Today's Highlights
The project shipped **13 point releases** (b10888–b10900) in the last 24 hours, dominated by Vulkan backend fixes (top-K MoE fusion, small-M matrix optimizations, PowerVR fallback, debug labels), speculative-decoding corrections for vision inputs, and CI updates for Windows-on-ARM CUDA 13.4.1. Community attention remains focused on **speculative decoding correctness** (divergent outputs on quantized targets, MTP state leaks), **MoE/Flash-Attention stability** on CUDA/Vulkan, and **SYCL/OpenVINO enablement** for Intel NPU/ARC hardware.

## 2. Releases
| Tag | Key Changes |
|-----|-------------|
| **b10900** | Vulkan: enable `topk_moe` fusion for prefill via `add_alloc_dep` ([#28422](https://github.com/ggml-org/llama.cpp/pull/28422)) |
| **b10899** | Vulkan: small-M (`m=1`) `mul_mat` optimizations for Qwen; split-K support; tile selection by M not just N ([#28457](https://github.com/ggml-org/llama.cpp/pull/28457)) |
| **b10897** | CI: Windows ARM64 CUDA builds now use 13.4.1 GA redistributables ([#28687](https://github.com/ggml-org/llama.cpp/pull/28687)) |
| **b10896** | Speculative: fix DFlash drafter memory allocation with vision models (stop copying fixed-offset images) ([#28587](https://github.com/ggml-org/llama.cpp/pull/28587)) |
| **b10894** | Models: remove dead `switch` branches in legacy model code ([#28669](https://github.com/ggml-org/llama.cpp/pull/28669)) |
| **b10893** | Tests: increase tolerance for Add-fusion tests ([#28691](https://github.com/ggml-org/llama.cpp/pull/28691)) |
| **b10892** | Tests: drop SYCL special-casing in `test-backend-ops.cpp` ([#28688](https://github.com/ggml-org/llama.cpp/pull/28688)) |
| **b10891** | Vulkan: fallback to shared-memory reduction for `dmmv` on PowerVR (subgroup-size ≥1 not supported) ([#28341](https://github.com/ggml-org/llama.cpp/pull/28341)) |
| **b10889** | Memory: avoid allocating unused V-cache for indexer ([#28330](https://github.com/ggml-org/llama.cpp/pull/28330)) |
| **b10888** | Vulkan: add command-buffer debug labels for GPU profilers ([#28101](https://github.com/ggml-org/llama.cpp/pull/28101)) |

All builds available at <https://llama.app> with macOS arm64 assets.

## 3. Hot Issues (Top 10 by Community Impact)
| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| **[#25618](https://github.com/ggml-org/llama.cpp/issues/25618)** Speculative decoding (draft-MTP/DSPARK) diverges from vanilla on quantized targets under greedy sampling | Blocks production use of speculative decoding with quantized models; 23 comments, 1 👍 | High — core correctness |
| **[#20697](https://github.com/ggml-org/llama.cpp/issues/20697)** Disk-based context checkpoint offloading (`--cache-disk`) | Long-running sessions / server deployments need KV persistence; 48 👍, 19 comments | High — top feature request |
| **[#26425](https://github.com/ggml-org/llama.cpp/issues/26425)** MTP retains inter-request state → non-deterministic output & degradation (Qwen3.6-35B-A3B-MTP) | Stateful draft corrupts multi-tenant server workloads; 9 comments | High — server reliability |
| **[#26609](https://github.com/ggml-org/llama.cpp/issues/26609)** CUDA illegal memory access in flash-attn path with Qwen3.6-35B MoE + partial expert offload | Deterministic crash on 2nd request; blocks MoE offload; 7 comments | Critical — CUDA MoE blocker |
| **[#27122](https://github.com/ggml-org/llama.cpp/issues/27122)** MTP triggers CUDA lockups with Qwen3.8-27B under `--split-mode tensor` | Multi-GPU tensor split + MTP = hard lock; 6 comments | High — multi-GPU + spec |
| **[#28239](https://github.com/ggml-org/llama.cpp/issues/28239)** SYCL: sysman free-memory query unavailable on Windows | Prevents automatic GPU memory management for Intel ARC; 8 comments | Medium — SYCL Windows gap |
| **[#28633](https://github.com/ggml-org/llama.cpp/issues/28633)** Make `GGML_CUDA_FA_ALL_QUANTS=ON` default (silent CPU fallback for 4-bit KV) | 30× prefill slowdown with no warning; 3 comments | Medium — UX / perf trap |
| **[#28648](https://github.com/ggml-org/llama.cpp/issues/28648)** Vulkan on Intel Arc 140V (Windows) outputs garbage depending on batch settings | New hardware regression; 3 comments | Medium — Intel Vulkan support |
| **[#26744](https://github.com/ggml-org/llama.cpp/issues/26744)** Vulkan flash-attn: stale K/V in freed cells influences output | Correctness issue in KV recycling; 3 comments | Medium — Vulkan FA stability |
| **[#26207](https://github.com/ggml-org/llama.cpp/issues/26207)** Server reuses prompt cache across requests with different LoRA adapters → silent contamination | Multi-adapter serving broken; 1 comment | High — LoRA server correctness |

## 4. Key PR Progress (Top 10 by Activity)
| PR | Area | Summary |
|----|------|---------|
| **[#28715](https://github.com/ggml-org/llama.cpp/pull/28715)** | Server / Speculation | Fix speculation position after image input (pass actual position, not token count) — follows #28587 |
| **[#28707](https://github.com/ggml-org/llama.cpp/pull/28707)** | Server / LoRA | Honor `--lora-init-without-apply` and empty `lora: []` lists (scale 0 instead of 1) |
| **[#28682](https://github.com/ggml-org/llama.cpp/pull/28682)** | Chat / Models | Add dedicated parser for Ling 3.0 / Bailing V3 (pre-opened think block) |
| **[#28714](https://github.com/ggml-org/llama.cpp/pull/28714)** | GGML / CUDA / RDNA3.5 | Batched WMMA `mmq` kernel for RDNA3.5 (gfx1150/gfx1151) |
| **[#28068](https://github.com/ggml-org/llama.cpp/pull/28068)** | Models / Qwen | Fix GDN normalization: `max` → `rsqrt` to match QwenLM/FlashQLA reference |
| **[#28362](https://github.com/ggml-org/llama.cpp/pull/28362)** | Build / Windows ARM64 | Enable MSVC `cl.exe` build on WoA (drop LLVM preset requirement) |
| **[#28708](https://github.com/ggml-org/llama.cpp/pull/28708)** | CI / Sanitizers | Key cache sanitizer matrix (follow-up to #28693) |
| **[#28712](https://github.com/ggml-org/llama.cpp/pull/28712)** | CI / Vulkan / WebGPU | Add self-hosted Vulkan & WebGPU runners to HF jobs (Docker passthrough works) |
| **[#27851](https://github.com/ggml-org/llama.cpp/pull/27851)** | GGML / CPU | Tiled `mul_mat` for k-quants (VNNI) — 3–7× speedup, 256×256 tiles |
| **[#28696](https://github.com/ggml-org/llama.cpp/pull/28696)** | Conversion / Models | Add DeepSeek V4.1 (`DeepseekV41ForCausalLM`) conversion support |

## 5. Feature Request Trends
1. **Persistent / Disk-backed KV Cache** — #20697 (48 👍) leads; users want `--cache-disk` for long contexts and server restarts.
2. **Speculative Decoding Hardening** — Multiple issues (#25618, #26425, #26478) demand deterministic, quant-safe draft models (MTP, DSPARK, N-gram).
3. **MoE / Expert Offload Stability** — CUDA illegal access (#26609), multi-GPU tensor split lockups (#27122), Vulkan FA stale KV (#26744).
4. **Intel / SYCL / OpenVINO Enablement** — NPU support (#28567), Windows SYCL memory query (#28239), OpenVINO reshape fixes (#26179), prebuilt SYCL install (#27656).
5. **Quantization Granularity** — Request for Q2_0 (#23909), dp4a→dp2a emulation (#24616), default `FA_ALL_QUANTS` (#28633).
6. **Server Multi-Tenancy** — Per-request LoRA isolation (#26207), prompt concatenation endpoint (#26008), proper 4xx on malformed tool calls (#25510).
7. **UI/UX Polish** — Conversation compaction (#27401), title-generation model selector (#28710), web UI CPU leak (#25724).

## 6. Developer Pain Points
- **Silent Fallbacks & Missed Warnings** — 4-bit KV → CPU without notice (#28633); draft-model divergence only on quantized targets (#25618).
- **State Leaks Across Requests** — MTP draft state (#26425), LoRA-adapter KV reuse (#26207), recurrent-state rollback corruption (#28019).
- **Backend-Specific Crashes** — CUDA illegal access on 2nd MoE request (#26609), Vulkan garbage on Arc 140V (#28648), SYCL pool LIFO violation (#28660), HIP logit corruption (#28537).
- **Build / CI Friction** — WoA MSVC vs LLVM preset (#28362), ARM ISA variant probe failures (#26103), sanitizer cache collisions (#28708).
- **Model-Specific Graph Bugs** — Qwen4Exp abort on SM121 (#27780), qwen3.5 recurrent-position warnings (#28716), GDN norm mismatch (#28068).
- **Documentation Gaps** — OpenVINO validated-model list outdated (#28567), conversion scripts for new arches (DeepSeek V4.1 #28696, Nemotron SSM #28717).

---

*Digest generated from ggml-org/llama.cpp GitHub data (releases, issues, PRs updated 2026-09-10). All links point to the live GitHub items.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*