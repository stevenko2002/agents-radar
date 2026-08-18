# AI CLI Tools Community Digest 2026-08-19

> Generated: 2026-08-18 22:16 UTC | Tools covered: 12

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

**Today's Highlights**  
- **Claude Code** (github.com/anthropics/claude-code): Released v2.1.235 adding optional spell-check integration (aspell/hunspell/ispell) and fixing whole-prompt-cache invalidation that could corrupt sessions when language servers reconnect.  
- **GitHub Copilot CLI** (github.com/github/copilot-cli): Released v1.0.81-1 adding Gemini 3.7 Flash support, Ctrl+E shortcut in `/sandbox` to edit settings.json, and per-agent usage metrics to JSON output.  
- **Gemini CLI** (github.com/google-gemini/gemini-cli): Released nightly v0.56.0.20260818 fixing SSR agent privacy notice wording and resolving TypeScript strict-null errors in integration tests.  
- **Qwen Code** (github.com/QwenLM/qwen-code): Released nightly v0.21.11-nightly.20260818 introducing live-session registry and new `qwen sessions ps` command for active session visibility.  
- **DeepSeek TUI** (github.com/Hmbown/CodeWhale): Released v0.9.9 tightening terminal UI behavior, fixing rustdoc URL warnings, and preparing npm package for trusted publishing.  
- **llama.cpp** (github.com/ggml-org/llama.cpp): Released v0.1.2 as first semver-styled release, with nightly b10485 updating OpenVINO backend to 2026.3 and fixing macOS/xcframework build issues.  
- **Pi** (github.com/earendil-works/pi): Landed fix for GitHub Enterprise Copilot login rate-limit storm (PR #8254) serializing model-policy fetches to prevent HTTP 429 errors after device flow.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills Community Highlights (as of 2026‑08‑19)**  

---

### 1. Top Skills Ranking  
*Selected by the amount of discussion they have generated (linked issues, multiple PRs, or recurring mentions in the issue tracker).*

| Rank | Skill (PR) | Functionality | Discussion Highlights | Status |
|------|------------|---------------|-----------------------|--------|
| **1** | **[skill‑creator: fix `run_eval.py` reporting 0% recall](anthropics/skills#1298)** – *MartinCajiao* | Core tooling that evaluates skill descriptions; fixes Windows stream reading, trigger detection, and parallel‑worker bugs that caused the evaluation loop to always see 0% recall. | Referenced in Issues #556, #1099, #1050; >10 independent reproductions of the “recall = 0%” problem. | **Open** (last update 2026‑06‑23) |
| **2** | **[Document‑Typography skill](anthropics/skills#514)** – *PGTBoos* | Automatically prevents orphan/widow lines and numbering mis‑alignment in AI‑generated documents (PDF, DOCX, etc.). | Frequently cited as a “missing polish” for generated reports; strong interest from documentation‑heavy workflows. | **Open** (last update 2026‑03‑13) |
| **3** | **[ODT skill – OpenDocument text creation/template filling & ODT→HTML](anthropics/skills#486)** – *GitHubNewbie0* | Enables Claude to read, write, fill templates, and convert .odt/.ods files; triggers on ODF/LibreOffice mentions. | Repeated requests for open‑standard office support; discussed alongside the Document‑Typography skill. | **Open** (last update 2026‑04‑14) |
| **4** | **[ServiceNow platform skill](anthropics/skills#568)** – *Vanka07* | Broad assistant for ServiceNow ITSM/ITOM/ITAM/SAM, FSM, HRSD, SPM, Vulnerability Response, Security Incident Response, IntegrationHub, etc. | One of the few enterprise‑platform skills with continuous updates (last activity 2026‑08‑12); high anticipation for IT‑ops automation. | **Open** |
| **5** | **[Self‑audit skill – mechanical verification + 4‑dimension reasoning quality gate](anthropics/skills#1367)** – *YuhaoLin2005* | Pre‑delivery audit that first checks claimed output files, then runs a reasoning‑quality gate (damage‑severity prioritized). | Linked to Issue #1385 (Reasoning Quality Gate Pipeline); seen as a universal safety net for any project. | **Open** (last update 2026‑07‑02) |
| **6** | **[Testing‑Patterns skill](anthropics/skills#723)** – *4444J99* | Covers testing philosophy (Testing Trophy), unit testing, React component testing with Testing Library, and best‑practice patterns. | Frequently mentioned in discussions about CI/CD and code‑quality skills; strong up‑vote interest in the issue tracker. | **Open** (last update 2026‑04‑21) |
| **7** | **[Pyxel skill for retro game development](anthropics/skills#525)** – *kitao* | MCP‑based skill for the Pyxel retro‑game engine; triggers on requests for pixel‑art/8‑bit games; includes write → run_and_capture → inspect workflow. | Niche but active community; regular updates and external contributions (last activity 2026‑07‑15). | **Open** |

*Note: Comment counts are not exposed in the supplied data; ranking reflects recurrence in issues, PR updates, and community‑referenced discussions.*

---

### 2. Community Demand Trends (from Issues)

| Trend | Evidence (Issue) | What the Community Is Asking For |
|-------|------------------|----------------------------------|
| **Security & trust boundaries** | #492 (43 👍) – community skills published under `anthropic/` namespace enable impersonation. | Clear separation of official vs. community skills; namespace‑scoping or verification mechanism to prevent trust‑abuse. |
| **Organizational skill sharing** | #228 (16 👍) – enable org‑wide sharing in Claude.ai. | Built‑in skill library or direct sharing link (Slack/Teams) to avoid manual .skill file exchange. |
| **Reliable skill evaluation / trigger detection** | #556 (12 👍), #1099, #1050 – `run_eval.py` never triggers skills (0 % recall) on Windows; encoding/subprocess bugs. | Fix Windows‑specific subprocess handling, improve description‑to‑trigger matching, and make the evaluation loop trustworthy. |
| **Compact memory / state compression** | #1329 (9 👍) – proposal for `compact-memory` skill (symbolic notation for agent state). | Skills that reduce context‑window pressure by compressing agent notes/memories. |
| **Skill‑creator best‑practice overhaul** | #202 (8 👍) – skill‑creator reads like developer docs, not an operational skill. | Rewrite skill‑creator to be concise, action‑oriented, and compliant with naming guidelines. |
| **Avoid duplicate skill installation** | #189 (6 👍) – `document-skills` and `example-skills` plugins install identical content. | Distinguish plugin contents or provide deduplication logic at install time. |
| **Agent governance & safety patterns** | #412 (6 👍) – proposal for `agent-governance` skill (policy enforcement, threat detection, trust scoring). | Built‑in governance tooling for multi‑agent systems. |
| **Reduce token‑heavy skills** | #1487 (4 👍) – `claude-api` skill injects ~156 k tokens, exhausting context window. | Lazy‑load or trim large skill payloads; token‑budget awareness. |
| **Reasoning quality‑gate pipeline** | #1385 (4 👍) – multi‑gate pipeline (pre‑task calibration → adversarial review → delivery verification). | Systematic quality assurance before skill output is delivered. |

**Overall demand:** The community is most vocal about **making skills trustworthy, shareable, and lightweight**—fixing evaluation reliability (especially on Windows), securing the skill namespace, and enabling seamless organizational distribution while keeping skills from blowing up the context window.

---

### 3. High‑Potential Pending Skills (Open PRs with noticeable activity)

| PR | Skill | Why It’s High‑Potential | Recent Activity |
|----|-------|------------------------|-----------------|
| **anthropics/skills#1595** | **UIZZE partner skill** (free anti‑UI‑slop skill) | Adds a widely‑referenced community skill that grounds UI work in 800k+ real screens; addresses a recurring UI‑quality pain point. | Created 2026‑08‑17, updated same day – very fresh. |
| **anthropics/skills#1538** | **Bring two skills back under Agent Skills spec** (fixes `template/` skill name mismatch) | Resolves spec‑validation failures that block skill usage; improves overall repo health. | Created 2026‑08‑09, updated 2026‑08‑12. |
| **anthropics/skills#1367** | **Self‑audit skill** (mechanical verification + 4‑dimension reasoning gate) | Provides a universal quality‑gate that could become a default safety layer for any skill. | Active discussion; last update 2026‑07‑02. |
| **anthropic/skills#568** | **ServiceNow platform skill** | Enterprise‑grade ITSM/ITOM coverage; continuing updates show strong maintainer interest. | Last update 2026‑08‑12 (ongoing). |
| **anthropic/skills#1298** | **skill‑creator: fix `run_eval.py` recall bug** | Core to skill development; fixing it unblocks description optimization for *all* skills. | Last update 2026‑06‑23 (still open). |
| **anthropic/skills#1099** | **skill‑creator: Windows `run_eval.py` crash fix** | Addresses the Windows‑specific blocker highlighted in Issues #556, #1099, #1050. | Last update 2026‑05‑24. |
| **anthropic/skills#1050** | **skill‑creator: Windows subprocess + encoding fixes** | Same Windows reliability theme; small, low‑risk changes with high impact. | Last update 2026‑05‑24. |
| **anthropic/skills#514** | **Document‑Typography skill** | Directly improves visual quality of AI‑generated docs—a frequent user request. | Last update 2026‑03‑13 (still open, but high interest). |
| **anthropic/skills#486** | **ODT skill** | Fills a gap for open‑document office workflows; complementary to the typography skill. | Last update 2026‑04‑14. |
| **anthropic/skills#723** | **Testing‑Patterns skill** | Aligns with the community’s shift toward built‑in quality assurance (see Issue #1385). | Last update 2026‑04‑21. |

These PRs are all **open**, have seen updates within the last few months, and address either a blocker (Windows eval), a high‑value enterprise capability (ServiceNow), or a universal quality‑gate (self‑audit/testing patterns). They are strong candidates for near‑term merge.

---

### 4. Skills Ecosystem Insight  

> **The community’s most concentrated demand is for reliable, secure, and lightweight skill tooling—particularly fixing Windows‑based evaluation bugs, securing the skill namespace to prevent impersonation, and enabling easy organizational sharing—so that skills can be trusted as dependable, plug‑and‑play components in any workflow.**  

---  

*All links point to the official `anthropics/skills` repository on GitHub.*

---

**Claude Code Community Digest – 2026-08-19**  
*Technical analyst perspective – based on GitHub activity in anthropics/claude-code*

---

### 1. Today's Highlights
- The latest patch **v2.1.235** landed, introducing an optional spell‑check integration (aspell/hunspell/ispell) and fixing a whole‑prompt‑cache invalidation bug that could corrupt sessions when language servers reconnect.  
- Community discussion remains focused on stability regressions: cowork VM timeouts on Intel Macs, Windows‑specific agent messaging false positives, and persistent memory‑forget issues across sessions.  

### 2. Releases
**v2.1.235** (released within the last 24 h)  
- **Spellcheck setting** – new optional `spellcheck` flag underlines misspelled words in the prompt input as you type, leveraging locally installed `aspell`, `hunspell`, or `ispell`.  
- **Prompt‑cache fix** – resolves whole‑prompt‑cache invalidation when a language server disconnects or reconnects mid‑session, preventing corrupted completions.  
- **Nested …** – (truncated in source) addresses a nested‑related issue (details not fully visible).  

[Release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.235)

### 3. Hot Issues (10 picked by comment count & community impact)
| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| [#87503](https://github.com/anthropics/claude-code/issues/87503) | Cowork VM connection timeout after update to 1.32352.0 on Intel Mac (guest never connects) | Blocks cowork‑based workflows for a significant macOS user base; regression introduced in recent update. | 8 💬, 0 👍 – active troubleshooting. |
| [#71980](https://github.com/anthropics/claude-code/issues/71980) | `ReferenceError: getCurrentOutputStyleName is not defined` on session start/resume | Crashes the UI immediately after launch/resume, making the desktop app unusable until patched. | 7 💬, 1 👍 – high priority for core stability. |
| [#66539](https://github.com/anthropics/claude-code/issues/66539) | Severe multi‑symptom degradation since 2026‑06‑08 on Opus 4.8 (ignores CLAUDE.md, hallucinates, bypasses permissions) | Core reliability concern for the flagship model; users report ignored instructions and unsafe file writes. | 7 💬, 2 👍 – widespread frustration. |
| [#86603](https://github.com/anthropics/claude-code/issues/86603) | `send_message` reports success on native Windows where no inbox socket is bound → message lost | Misleading success status hinders debugging of cross‑session agent communication; affects automation scripts. | 6 💬, 0 👍 – noted as a regression after 2026‑08‑11. |
| [#66054](https://github.com/anthropics/claude-code/issues/66054) | Claude Code repeatedly claims work is done without verifying, wastes hours on broken WebGL | Leads to wasted compute time and developer frustration when the model incorrectly assumes task completion. | 5 💬, 0 👍 – highlights verification gaps. |
| [#72711](https://github.com/anthropics/claude-code/issues/72711) | Nested background subagents stuck showing “Running” indefinitely despite no active task | Clutters the agent view and can block resource cleanup; impacts long‑running automation flows. | 4 💬, 1 👍 – persistent UI state bug. |
| [#66143](https://github.com/anthropics/claude-code/issues/66143) | Claude Code forgets known facts across sessions despite memory system | Undermines the promised memory feature; forces users to re‑supply context (IPs, SSH keys, branch names) each session. | 4 💬, 0 👍 – recurrent pain point. |
| [#72709](https://github.com/anthropics/claude-code/issues/72709) | Cowork: gcpRegion validation rejects “eu”/“us” multi‑region, but newest models are only available via eu multi‑region on Vertex AI | Prevents use of latest Vertex‑AI models in cowork environments; blocks adoption of new capabilities. | 1 💬, **6 👍** – strong community endorsement for fix. |
| [#72541](https://github.com/anthropics/claude-code/issues/72541) | Code conversation history disappeared after Max plan expired and auto‑downgraded to Pro (Desktop App) | Loss of historic context after billing changes erodes trust in data persistence. | 3 💬, 0 👍 – notable for plan‑transition UX. |
| [#72595](https://github.com/anthropics/claude-code/issues/72595) | Regression in 1.15962.2 / SDK 2.1.197 — Bash tool dispatch never reaches the VM (Exit code 1, no output) | Breaks basic shell tooling on Windows, affecting scripts and local command execution. | 3 💬, 0 👍 – regression impacting core toolchain. |

### 4. Key PR Progress (updated in last 24 h)
Only two PRs showed activity in the window:

- **[#41611](https://github.com/anthropics/claude-code/pull/41611)** – *add the missing source to claude code* (opened 2026‑03‑31, still open).  
  Adds a previously omitted source file; likely a cleanup to ensure build reproducibility. No discussion yet.

- **[#87395](https://github.com/anthropics/claude-code/pull/87395)** – *ralph-wiggum: use disable-model-invocation so the model can't self‑invoke /ralph-loop* (closed 2026‑08‑17).  
  Attempts to prevent the `/ralph-loop` command from being auto‑invoked by marking it `hide-from-slash-command-tool: true`. The field is unsupported, so the PR was closed as ineffective; highlights need for proper command‑visibility controls.

*Overall PR activity is low today, indicating a focus on triaging issues rather than feature development.*

### 5. Feature Request Trends (derived from Issues & Comments)
- **Spell‑check / typing assistance** – the newly added optional spell‑check setting shows demand for real‑time text‑quality aids in the prompt area.  
- **Accessibility improvements** – repeated a11y tickets (screen‑reader live indicators, keyboard navigation) point to a need for tighter integration with assistive tech.  
- **Memory persistence & cross‑session recall** – multiple reports of forgotten facts despite the memory system suggest users want more durable, transparent memory storage.  
- **Reliable agent/messaging semantics** – issues like #86603 and cowork‑VM timeouts reflect a desire for guaranteed delivery and clear error states in inter‑agent communication.  
- **Platform‑parity tooling** – Windows‑specific crashes (packaging, Bash tool, WSL preview) and macOS cowork regressions indicate a trend toward requesting consistent behavior across OSes.  
- **Model‑configuration fidelity** – requests to honor CLAUDE.md, permission prompts, and avoid hallucinations (see #66539) show a strong appetite for tighter model steerability.

### 6. Developer Pain Points (recurring frustrations)
- **Unpredictable model behavior** – hallucinations, ignoring configuration files, and unsafe autonomous actions erode confidence in Claude Code for production‑grade tasks.  
- **Memory & context loss** – facts entered into the memory system do not survive session restarts, forcing repetitive re‑input of environment details.  
- **Windows stability** – frequent crashes related to Bun/packaging, Bash tool dispatch failures, and WSL integration hinder adoption on the Windows developer ecosystem.  
- **Cowork/agent communication fragility** – VM connection timeouts, false‑success messages, and missing inbox sockets make multi‑machine or distributed workflows unreliable.  
- **Accessibility gaps** – live UI elements (timers, token counters) are not properly hidden from screen readers, creating noisy experiences for visually impaired users.  
- **Plan‑change data loss** – automatic downgrades or expiration events can erase conversation histories, leading to distrust in the product’s data‑handling guarantees.  
- **Version‑specific regressions** – each recent patch seems to reintroduce or leave unfixed bugs (e.g., `getCurrentOutputStyleName`, nested subagent states), indicating a need for stricter regression testing before release.

---  

*This digest summarizes the most salient signals from the past day’s GitHub activity. For deeper dives, follow the linked issues and PRs.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex Community Digest – 2026‑08‑19**  

---

### 1. Today’s Highlights  
- Two new pre‑release versions of the Rust toolchain (`rust‑v0.148.0‑alpha.22` and `rust‑v0.148.0‑alpha.23`) were published, continuing the cadence of experimental updates for the Codex CLI.  
- Community discussion remains dominated by a long‑running token‑burn issue (#14593, 630 comments) and a spate of Windows‑specific browser/plugin failures reported today (#39136, #39173, #39252).  
- Several closed PRs from the `copyberry[bot]` automation stream landed, tightening MCP tool hook handling, improving logging and diagnostics, and refining Windows sandbox security.

---

### 2. Releases  
| Version | Type | Notes |
|---------|------|-------|
| `rust‑v0.148.0‑alpha.22` | Pre‑release | Incremental alpha update to the Rust toolchain used by Codex CLI. |
| `rust‑v0.148.0‑alpha.23` | Pre‑release | Follow‑up alpha; no detailed changelog supplied in the release notes. |

*No stable releases were shipped in the last 24 h.*

---

### 3. Hot Issues (selected for impact & community activity)  

| # | Title & Link | Why it matters | Community reaction |
|---|--------------|----------------|--------------------|
| **[#14593](https://github.com/openai/codex/issues/14593)** | *Burning tokens very fast* – 630 comments, 285 👍 | Users report rapid token consumption even when idle, affecting cost predictability for Business‑tier subscribers. | Ongoing debate; many confirm the problem across VS Code and Windows, request clearer metering and possible leak fix. |
| **[#39136](https://github.com/openai/codex/issues/39136)** | *Codex built‑in browser plugin initialization fails* – 59 comments, 17 👍 | Windows desktop app cannot launch its in‑app browser due to a “Trusted RPC dependency is not within a trusted code path” error, breaking web‑based automation. | Freshly reported; several users reproduced on Windows 11 Pro, asking for a hot‑fix or workaround. |
| **[#20500](https://github.com/openai/codex/issues/20500)** | *Support multiple named accounts per app/connector* – 28 comments, 107 👍 | Requests the ability to keep distinct, simultaneously authorized identities (e.g., work vs. personal) inside a single Codex session without switching profiles. | Strong up‑vote traction; seen as a key productivity enhancer for teams managing multiple tenants. |
| **[#38455](https://github.com/openai/codex/issues/38455)** | *macOS Computer Use workers OOM crash* – 26 comments, 11 👍 | Repeated spawning of Computer Use threads leads to V8 OOM and SIGABRT on Apple Silicon machines, rendering the desktop app unusable after ~2 min. | Users on macOS 15.7.7 confirm regression; many ask for thread‑limits or better cleanup. |
| **[#37403](https://github.com/openai/codex/issues/37403)** | *macOS Remote Control regression* – 25 comments, 18 👍 | After the Aug 7 update, Remote‑Control‑initiated CLI threads fail with “already has an active writer”, breaking off‑hour workflows. | Heavy reliance on mobile‑to‑desktop continuity; users request rollback or fix. |
| **[#37380](https://github.com/openai/codex/issues/37380)** | *Azure Responses rejects empty functions namespace* – 18 comments, 40 👍 | Azure OpenAI custom provider (via API Management) fails when the functions namespace description is empty, a regression from 0.147.0. | Enterprise Azure adopters flagged; highlights need for stricter schema validation. |
| **[#39173](https://github.com/openai/codex/issues/39173)** | *Fails to control browser (in‑app or Chrome)* – 18 comments, 10 👍 | Similar to #39136 but surfaces as “Trusted RPC dependency must resolve within a configurable…”, affecting both built‑in browser and external Chrome control. | Users on Windows 10/11 report identical stack traces; calls for unified RPC hardening. |
| **[#39209](https://github.com/openai/codex/issues/39209)** | *Windows archiving fails with `\\?\` prefix* – 4 comments, 0 👍 | Archive operation throws “os error 2” when the rollout path uses the extended‑length prefix, even though the file exists. | Impacts power users with deep folder structures; indicates a path‑normalization gap. |
| **[#39269](https://github.com/openai/codex/issues/39269)** | *Voice Chat Fork loses parent project context* – 4 comments, 0 👍 | Starting a Voice Chat from a new task drops the parent’s model selection, AGENTS behavior, and project context, breaking contextual continuity. | Early reporters note the issue after the latest Windows update; ask for context propagation. |
| **[#31864](https://github.com/openai/codex/issues/31864)** | *GPT‑5.6 Sol fails due to reserved `collaboration.spawn_agent`* – 7 comments, 17 👍 | All tool calls for GPT‑5.6 Sol sessions are rejected because the model reserves `collaboration.spawn_agent`, causing every request to fail before prompt processing. | Blocks users relying on the Sol variant; request either model update or tool‑namespace adjustment. |

---

### 4. Key PR Progress (selected for functional impact)  

| # | Title & Link | Summary of changes |
|---|--------------|--------------------|
| **[#39296](https://github.com/openai/codex/pull/39296)** | Enable MCP tool hooks in Codex sessions | Executes `mcp_tool` hook handlers via the session’s shared MCP runtime; restricts hooks to connected, cataloged, policy‑allowed tools. |
| **[#39294](https://github.com/openai/codex/pull/39294)** | Increase SQLite log sink batching | Raises bounded log queue from 512 → 2048 entries, insert batch from 128 → 512, flush interval from 2 s → 10 s to reduce I/O pressure. |
| **[#39293](https://github.com/openai/codex/pull/39293)** | Remove app‑server's direct `reqwest` dependency | Moves HTTP client creation to `HttpClientBuilder`; uses `http`/`url` types directly, cleaning up migration debt. |
| **[#39290](https://github.com/openai/codex/pull/39290)** | Add Windows sandbox diagnostics to `codex doctor` | Reports configured sandbox backend, deny‑read status, and detects provisioning or policy mismatches. |
| **[#39288](https://github.com/openai/codex/pull/39288)** | Register the async message feature flag | Introduces the `send_async_message` flag (off by default) and exposes it in the generated config schema. |
| **[#39287](https://github.com/openai/codex/pull/39287)** | Report diagnostic upload failures | Sends diagnostic envelopes through the route‑aware HTTP client and awaits transport confirmation to surface Sentry/upload errors. |
| **[#39285](https://github.com/openai/codex/pull/39285)** | Show file destinations in TUI change approvals | Displays source/target paths for file‑change approvals, formats cross‑platform paths, marks unavailable details. |
| **[#39284](https://github.com/openai/codex/pull/39284)** | Report network disconnects during approval | Tracks disconnect timing for plain HTTP/CO‑OP requests and provides a model‑visible explanation when a proxy drops mid‑approval. |
| **[#39279](https://github.com/openai/codex/pull/39279)** | Propagate Windows sandbox ACL update failures | Returns errors from `SetEntriesInAclW` / `SetNamedSecurityInfo` so ACL‑apply failures surface rather than being silently ignored. |
| **[#39278](https://github.com/openai/codex/pull/39278)** | Preserve owner‑provided environment configuration | Blocks thread‑level `FromThread` updates that would overwrite an existing owner‑set environment, preserving user defaults. |

---

### 5. Feature Request Trends (derived from open Issues)  

- **Multi‑account/session management** – #20500 (multiple named accounts) and #11907 (manual refresh/auto‑sync for archived conversations) indicate a strong desire for richer identity and state handling within a single Codex session.  
- **Cross‑provider session portability** – #38365 (reliable cross‑provider session handoff) and #36942 (flatten MCP namespace for Responses backends) show users want to move long‑running work between models or providers without losing context.  
- **Improved tool & MCP interoperability** – Several issues (#23186, #26977, #31354, #36942) request better handling of MCP tools when using custom Responses providers (e.g., flattening namespaces, avoiding wrapped `type:"namespace"` structures).  
- **Enhanced diagnostics & observability** – Requests for better logging (#39294), diagnostic upload confirmation (#39287), and Windows‑specific sandbox diagnostics (#39290) reflect a need for clearer troubleshooting pathways.  
- **UI/UX refinements** – Keyboard navigation fixes (#37004), file‑destination display in approvals (#39285), and manual refresh buttons (#11907) repeatedly surface as usability improvements.

---

### 6. Developer Pain Points (recurring frustrations)  

| Pain point | Evidence from data |
|------------|--------------------|
| **Unpredictable token consumption / rate‑limit surprises** | #14593 (630 comments), #39167 (weekly limit jump), #21708 (limits decreasing without usage). |
| **Windows‑specific browser / RPC initialization failures** | #39136, #39173, #39252, #39292 – all posted today, same “Trusted RPC dependency” error. |
| **macOS Computer Use stability** | #38455 (OOM crash), #38939 (runaway threads), #31160 (missing service on Intel macOS). |
| **Remote‑control / CLI session regressions** | #37403 (macOS remote control writer error), #37403 & #37380 (Azure Responses regression). |
| **Path handling on Windows (extended‑length prefixes)** | #39209, #39239 – archiving/resume fails when paths use `\\?\`. |
| **MCP tool compatibility with custom providers** | #23186, #26977, #31354, #36942 – tools wrapped in namespace or rejected outright. |
| **Voice/Agent context loss** | #39269 (Voice Chat fork loses parent context) and similar session‑state issues. |
| **Tool‑call schema strictness (empty descriptions, reserved names)** | #37380 (Azure empty functions namespace), #31864 (reserved `collaboration.spawn_agent`). |

*Addressing these areas—particularly token metering reliability, Windows browser sandbox hardening, macOS Computer Use resource management, and clearer MCP tool contracts—would likely yield the highest immediate satisfaction among active Codex developers.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest | 2026-08-19
*Data source: github.com/google-gemini/gemini-cli*

---

## Today's Highlights
The latest nightly release v0.56.0.20260818 shipped two targeted SSR agent fixes: clarified privacy notice wording and resolved TypeScript strict-null errors in integration tests. Active development this cycle prioritizes agent reliability (subagent recovery, hanging generalist agents), security hardening (OAuth timeout handling, extension environment sanitization), and UX improvements for terminal rendering and tool use.

---

## Releases
- [v0.56.0-nightly.20260818.g194edea47](https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-nightly.20260818.g194edea47) (2026-08-18)
  - Fixed SSR agent privacy notice wording and selection option clarity ([#28820](https://github.com/google-gemini/gemini-cli/pull/28820))
  - Resolved TypeScript strict-null errors in SSR agent integration tests

---

## Hot Issues
*(Sorted by comment count, top 10)*
1. [#22323 [P1] Subagent recovery after MAX_TURNS reported as GOAL success, hiding interruption](https://github.com/google-gemini/gemini-cli/issues/22323) | 12 comments, 2 👍
   - **Why it matters**: Hides actual agent failures from users, leading to false assumptions that subagent tasks completed successfully when they hit turn limits.
   - **Community reaction**: High priority flag from maintainers, multiple reports of incorrect status reporting breaking trust in subagent outputs.
2. [#21409 [P1] Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409) | 8 comments, 8 👍
   - **Why it matters**: Core functionality break – deferring to the generalist agent causes permanent hangs for even simple tasks like folder creation, blocking all workflows that rely on subagents.
   - **Community reaction**: Widespread user reports, highest upvote count in the issue tracker; workaround of disabling subagents entirely removes core CLI functionality.
3. [#19873 [P2] Leverage model's bash affinity via Zero-Dependency OS Sandboxing & Post-Execution Intent Routing](https://github.com/google-gemini/gemini-cli/issues/19873) | 8 comments, 1 👍
   - **Why it matters**: Aligns CLI tooling with Gemini 3's native training for POSIX tool chaining, improves security by removing dependency on external sandboxing tools, and streamlines UX for codebase exploration.
   - **Community reaction**: Strong interest from power users and contributors focused on agent efficiency and security.
4. [#24353 [P1] Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353) | 7 comments
   - **Why it matters**: Scales the behavioral eval test suite to 76 tests across 6 supported Gemini models, ensuring consistent agent behavior across model versions and reducing regression risk for releases.
   - **Community reaction**: Critical priority for the QA and eval teams, tracked as a blocker for stable model support.
5. [#22745 [P2] Assess impact of AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745) | 7 comments, 1 👍
   - **Why it matters**: Could drastically reduce token usage and turn count for codebase exploration by enabling surgical reads of method/class bounds instead of full file "firehose" reads.
   - **Community reaction**: Strong interest from users working with large codebases where token efficiency is a recurring pain point.
6. [#21968 [P2] Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968) | 6 comments
   - **Why it matters**: Undermines the value of custom user-created skills and subagents, requiring explicit user prompting to use functionality that should be automatically selected for relevant tasks.
   - **Community reaction**: Widespread anecdotal reports from power users who rely on custom agent configurations for repetitive workflows.
7. [#26522 [P2] Stop Auto Memory from retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522) | 5 comments
   - **Why it matters**: Prevents wasted compute and API quota on low-value sessions that the Auto Memory system correctly identifies as not worth processing.
   - **Community reaction**: High priority for the Auto Memory team to improve resource efficiency.
8. [#26525 [P

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest – 2026‑08‑19**

---

### 1. Today's Highlights
- The CLI shipped **v1.0.81‑1**, adding Gemini 3.7 Flash support, a handy **Ctrl+E** shortcut in `/sandbox` to edit *settings.json*, and per‑agent usage metrics to the `--usage-output-file` JSON payload.  
- Community activity remains high around **model accessibility** (organization‑enabled models missing from the catalogue), **sandbox controllability** (users report the sandbox being forced on despite `enabled:false`), and **MCP reliability** (OAuth token bridging, BigInt handling, orphaned stdio processes).  

---

### 2. Releases
**v1.0.81‑1** (released within the last 24 h)  
- **Added**  
  - Support for **Gemini 3.7 Flash** as a selectable model.  
  - **Ctrl+E** in the `/sandbox` command opens *settings.json* in the user's editor.  
  - **Per‑agent usage metrics** are now included in the JSON output when `--usage-output-file` is used.  
- **Improved**  
  - In the Schedule Manager, pressing **`x`** removes a scheduled `/every` or `/after` prompt.  
- **Fixed**  
  - Turning `allow-all` off (the original description was truncated; the fix addresses a regression where disabling the flag did not take effect).  

Full changelog: `github.com/github/copilot-cli/releases/tag/v1.0.81-1`

---

### 3. Hot Issues (selected by comment count & impact)

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| **[#4390](https://github.com/github/copilot-cli/issues/4390)** | Organization‑enabled models (Claude Sonnet 5/Opus 5, Kimi K3) missing from the catalogue | Blocks enterprise users from using models they have paid for; forces work‑arounds or downgrades. | 10 comments, 👍 7 |
| **[#4313](https://github.com/copilot-cli/issues/4313)** | Add scrolling through conversation history (mouse wheel / PageUp/PageDown) | Improves usability for long sessions; currently users must rely on search or re‑run queries. | 8 comments, 👍 0 |
| **[#2904](https://github.com/copilot-cli/issues/2904)** | Custom Agent YAML frontmatter should support **reasoning effort** | Reasoning effort is only set globally via `--effort`; per‑agent control is needed for fine‑tuned behavior. | 7 comments, 👍 20 |
| **[#2958](https://github.com/copilot-cli/issues/2958)** | Support **per‑mode default model** (plan vs. autopilot) | Users want different models for planning versus execution without manually overriding each time. | 4 comments, 👍 16 |
| **[#3682](https://github.com/copilot-cli/issues/3682)** | Allow **refreshing BYOK provider credentials** without restarting the CLI | Short‑lived tokens (Azure AD, AWS STS) require a full CLI restart to renew, disrupting workflows. | 2 comments, 👍 6 |
| **[#4490](https://github.com/copilot-cli/issues/4490)** | Atlassian MCP OAuth broken in 1.0.80 (RFC 8414 §3.3 regression) | Prevents use of popular third‑party MCP servers (Jira, Confluence) until a fix is released. | 3 comments, 👍 0 |
| **[#4521](https://github.com/copilot-cli/issues/4521)** & **[#4522](https://github.com/copilot-cli/issues/4522)** | **Sandbox cannot be disabled** – config shows `enabled:false` but CLI still runs sandbox | Breaks environments where sandboxing is disallowed (security policies, performance‑sensitive workloads). | #4521: 1 comment, 👍 2; #4522: 1 comment, 👍 1 |
| **[#4516](https://github.com/copilot-cli/issues/4516)** | Sandbox RW path grants not honored by JVM processes spawned from CLI | Java‑based tools (Maven, javac) fail with “Operation not permitted” even when the path is granted, limiting JVM workflows. | 0 comments, 👍 0 |
| **[#4392](https://github.com/copilot-cli/issues/4392)** | Post‑authentication MCP client rebuild leaves **orphaned stdio MCP server processes** | Leads to unbounded child‑process accumulation, CPU spikes, and degraded machine performance over time. | 2 comments, 👍 0 |
| **[#4211](https://github.com/copilot-cli/issues/4211)** | CLI cannot handle **BigInt** in structured MCP responses (TypeError on serialization) | Causes abrupt session failures when MCP servers return large integers (common in blockchain or analytics tools). | 4 comments, 👍 2 |

---

### 4. Key PR Progress
Only one PR was updated in the last 24 h:

- **[#3163](https://github.com/github/copilot-cli/pull/3163)** – *ViewSonic monitor* (appears to be a test/internal change unrelated to core CLI functionality).  
*No feature‑ or bug‑fix PRs were merged or significantly progressed in the reporting window.*

---

### 5. Feature Request Trends
From the open issues, the most‑requested directions are:

1. **Granular model control** – per‑agent reasoning effort (#2904), per‑mode default model (#2958), and surfacing organization‑enabled models (#4390).  
2. **Interaction ergonomics** – scrollable conversation history (#4313), easier sandbox settings access (Ctrl+E in v1.0.81‑1), and persistent session naming.  
3. **Credential & token management** – ability to refresh BYOK/OAuth tokens without restart (#3682) and fix MCP OAuth regressions (#4490).  
4. **Sandbox flexibility** – reliable disable flag (#4521/#4522), proper propagation of RW grants to JVM processes (#4516), and clearer UI for sandbox status.  
5. **MCP robustness** – handling of BigInt payloads (#4211), prevention of orphaned stdio processes (#4392), and consistent tool exposure (structured vs. raw content #4515).

---

### 6. Developer Pain Points
Recurring frustrations highlighted by the community:

- **Sandbox overrides** – users repeatedly report that setting `"sandbox": { "enabled": false }` is ignored, forcing sandbox execution even when explicitly disabled or when managed policy is undetermined (#4521, #4522).  
- **Model catalogue gaps** – organization‑approved models fail to appear in the CLI’s model list, leaving enterprise users unable to use their entitled models (#4390).  
- **MCP reliability** – OAuth token bridging failures, BigInt serialization errors, and orphaned stdio server processes cause session crashes and resource leaks (#4490, #4211, #4392).  
- **Credential refresh friction** – long‑running workflows are interrupted because BYOK/OAuth tokens cannot be renewed without a full CLI restart (#3682).  
- **Limited per‑agent/model configurability** – the inability to set reasoning effort or model choice at the agent or mode level forces users to rely on global flags, reducing flexibility (#2904, #2958).  

Addressing these pain points will directly improve stability, enterprise adoption, and day‑to‑day usability of Copilot CLI.  

---  

*Digested from GitHub activity on 2026‑08‑18 → 2026‑08‑19.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest – 2026‑08‑19**  
*Source: github.com/MoonshotAI/kimi-cli*  

---

### 1. Today's Highlights
- Two issues were opened today concerning UI rendering quirks for non‑Kimi (OpenAI‑compatible) providers and a community‑driven benchmark report for K3 + Kimi Code in quantitative strategy generation.  
- One pull request was closed after fixing SSH‑failure logging, while a new “Dev/knowledge plane” PR was opened to improve internal documentation and developer onboarding.

---

### 2. Releases
*No new releases were published in the last 24 hours.*

---

### 3. Hot Issues  
*(Only two issues were updated in the period; both are highlighted below.)*

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| [#2607](https://github.com/MoonshotAI/kimi-cli/issues/2607) | **Web UI: assistant messages re‑render as one‑fragment‑per‑line after tab switch/reload for non‑Kimi (OpenAI‑compatible) providers** | Highlights a regression in the chat UI where streaming output collapses into line‑by‑line fragments after any remount, degrading readability for users employing custom LLM endpoints. | 0 👍, 1 comment (author notes the bug appears after tab switch/reload). |
| [#2608](https://github.com/MoonshotAI/kimi-cli/issues/2608) | **Benchmarked K3 + Kimi Code on out‑of‑sample quant strategy generation — full report open‑sourced** | Shares a detailed, community‑generated benchmark showing how Kimi Code CLI can drive end‑to‑end quantitative trading strategy development, offering a valuable reference for adopters in the fintech/AI‑trading space. | 0 👍, 0 comments (freshly opened). |

---

### 4. Key PR Progress  
*(Only two PRs were updated in the period; both are highlighted.)*

| # | PR | Description / Fix | Status |
|---|----|-------------------|--------|
| [#848](https://github.com/MoonshotAI/kimi-cli/pull/848) | **fix(kaos): log ssh failures when enabled** | Adds explicit logging for SSH connection failures when the `kaos` SSH subsystem is active, improving diagnosability of remote‑execution issues. | Closed (merged) – no further discussion recorded. |
| [#2606](https://github.com/MoonshotAI/kimi-cli/pull/2606) | **Dev/knowledge plane** | Proposes a new internal documentation/knowledge‑sharing layer (e.g., contributor guide, architecture overview) to streamline onboarding and reduce duplicated effort among contributors. | Open – awaiting maintainer review; no 👍 or comments yet. |

---

### 5. Feature Request Trends  
*Inferred from the open issues and PRs:*

- **Improved UI robustness for custom/open‑ai‑compatible providers** – ensuring streaming rendering survives tab switches, reloads, and session restores.  
- **Enhanced observability for remote execution (SSH/kaos)** – request for more detailed failure logs and possibly retry/back‑off mechanisms.  
- **Developer experience uplift** – calls for centralized knowledge base, contribution guidelines, and better onboarding material (reflected in the “Dev/knowledge plane” PR).  

---

### 6. Developer Pain Points  
*Recurring frustrations evident from recent activity:*

1. **Chat UI instability** – messages rendered incorrectly after any UI remount, forcing users to reload or lose context when using third‑party LLM endpoints.  
2. **Sparse error diagnostics for SSH‑based workflows** – developers currently need to inspect raw process output to understand why a remote command failed, slowing debugging.  
3. **Documentation/knowledge gaps** – contributors report difficulty finding up‑to‑date architectural overviews and contribution procedures, leading to duplicated questions and slower PR turnover.  

---

*Note: The digest reflects the limited activity captured in the last 24 hours. As more issues and PRs appear, future digests will expand each section to the requested ten‑item format.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

### OpenCode Community Digest: 2026-08-19

#### Today's Highlights
The community is heavily focused on billing and quota inconsistencies with OpenCode Go, particularly surrounding DeepSeek V4 Flash usage, where users report metering discrepancies causing sudden quota exhaustion. Concurrently, TUI usability improvements (like scroll control and prompt visibility) and feature requests for agent control (/resume/-pause) and external tool integrations (Linear) remain active discussion points. A wave of automated cleanup PRs from July has been merged, addressing core stability, MCP tooling, and Nix support.

#### Releases
No new versions were released in the last 24 hours.

#### Hot Issues
1. **[#42985](https://github.com/anomalyco/opencode/issues/42985)** OpenCode Go quota usage appears ~4x higher than displayed DeepSeek V4 Flash cost (15 comments, 👍7)  
   *Critical billing discrepancy where Go quota consumption vastly exceeds shown costs, eroding trust in usage tracking. Community demands transparent metering.*  
2. **[#3787](https://github.com/anomalyco/opencode/issues/3787)** [CLOSED] [discussion] [FEATURE]: Linear Agent (17 comments, 👍34)  
   *High-engagement discussion (now closed) showing strong demand for Linear issue-to-agent assignment. Reflects need for deeper workflow integrations.*  
3. **[#7648](https://github.com/anomalyco/opencode/issues/7648)** [CLOSED] Setting to prevent TUI scrolling when new message are streamed-in (11 comments, 👍18)  
   *Persistent UX frustration where auto-scrolling disrupts reading agent responses. High upvotes indicate widespread impact on productivity.*  
4. **[#7226](https://github.com/anomalyco/opencode/issues/7226)** [CLOSED] [FEATURE]: implement a /resume and /pause command (8 comments, 👍28)  
   *Overwhelming community support for manual agent control during long operations. Closed status suggests potential implementation or deferral.*  
5. **[#43023](https://github.com/anomalyco/opencode/issues/43023)** OpenCode Go quota usage inconsistency: Monthly usage percentage exceeds Weekly usage percentage (5 comments, 👍2)  
   *Another quota logic flaw where percentage displays contradict each other and actual spending, complicating budget management for Go users.*  
6. **[#42935](https://github.com/anomalyco/opencode/issues/42935)** OpenCode Go quota exhausted in ~

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

**Pi Community Digest – 2026‑08‑19**  
*Repository: earendil‑works/pi (https://github.com/earendil-works/pi)*  

---

### 1. Today’s Highlights
- The team landed a fix for the GitHub Enterprise Copilot login rate‑limit storm (PR #8254) that was causing immediate 429 errors after a successful device flow.  
- Several UX stability improvements were merged: yielding long Markdown rendering in the TUI (PR #8327), preventing UI jumps on long transcripts (Issue #8309), and collapsing tool‑result images until expanded (PR #8303).  
- New extensibility points appeared – an `agent_recovery_exhausted` hook (PR #8316) and a `disabledCommands` setting (PR #8326) – giving plugin authors more control over recovery flows and UI customization.

### 2. Releases
*No new versions were published in the last 24 h.*

### 3. Hot Issues (10 picks)

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| #8251 | [GitHub Enterprise Copilot login fails after successful device flow due to concurrent policy requests and HTTP 429](https://github.com/earendil-works/pi/issues/8251) | Copilot auth breaks for enterprise users because `enableAllGitHubCopilotModels()` fires all model‑policy requests in parallel, triggering rate limits. | 4 comments; marked **closed, no‑action** – the fix is incoming via PR #8254. |
| #8281 | [TUI: full‑screen flash when content above the viewport changes in long transcripts](https://github.com/earendil-works/pi/issues/8281) | In interactive mode, transcripts >10 lines cause a visible screen flash each time a line above the view updates, degrading usability. | 4 comments; **closed, no‑action** – a UI‑rendering tweak is under review. |
| #6339 | [Auto‑compaction threshold never evaluated during an agentic run](https://github.com/earendil-works/pi/issues/6339) | Compaction only runs at run boundaries, so long single‑turn contexts can overflow the window without triggering. | 3 comments; **closed, no‑action** – highlights need for mid‑run compaction checks. |
| #8138 | [Contribution Proposal: retry classification for openai‑codex “Sorry, something went wrong”](https://github.com/earendil-works/pi/issues/8138) | The transient Codex error is treated as fatal, causing unnecessary failures; marking it retryable would improve resilience. | 2 comments; **open** – awaiting maintainer feedback. |
| #8323 | [OpenAI client created with no timeout](https://github.com/earendil-works/pi/issues/8323) | Missing `timeout` lets the SDK default to 600 s, causing local models that think >10 min to be cut off mid‑generation. | 2 comments; **closed, untriaged** – a simple timeout addition is suggested. |
| #8317 | [Add agent_recovery_exhausted extension hook after native recovery](https://github.com/earendil-works/pi/issues/8317) | Extensions cannot intervene after native retry/overflow recovery is exhausted, limiting custom recovery strategies. | 2 comments; **closed, untriaged** – addressed by PR #8316. |
| #8309 | [When the conversation becomes long, the interface jumps to the top and then back again each time a new command is executed](https://github.com/earendil-works/pi/issues/8309) | Persistent viewport jump disrupts workflow on long sessions across macOS & Windows. | 2 comments; **closed, no‑action** – likely tied to TUI refresh logic. |
| #8292 | [Expose a pre‑persistence message replacement hook in AgentHarness](https://github.com/earendil-works/pi/issues/8292) | Plugin authors need to modify the final user message before it is saved (e.g., augment with structured blocks) without breaking session logs. | 2 comments; **closed, no‑action** – a useful extensibility gap. |
| #8286 | [openai‑completions: pi silently fails (empty output or hallucinated response) over real network, only succeeds on 127.0.0.1 loopback](https://github.com/earendil-works/pi/issues/8286) | Remote Ollama hosts fail non‑deterministically, while loopback works reliably – indicates a network‑handling bug. | 2 comments; **closed, no‑action** – needs deeper HTTP/client investigation. |
| #8282 | [find在windows下，扫描文件很多的目录时死进程](https://github.com/earendil-works/pi/issues/8282) | The built‑in `find` command hangs when scanning huge directories (e.g., `C:\Windows`), consuming CPU until killed. | 2 comments; **closed, bug, no‑action** – community suggests defaulting to `fd`. |

### 4. Key PR Progress (10 picks)

| # | PR | Summary | Impact |
|---|----|---------|--------|
| #8254 | [fix(ai): prevent copilot policy login rate limits](https://github.com/earendil-works/pi/pull/8254) | Serializes model‑policy fetches, adds bounded retry throttling, and fetches the account catalog first. | Resolves #8251 – eliminates immediate 429 storms for Enterprise Copilot. |
| #8327 | [fix(tui): yield long markdown rendering](https://github.com/earendil-works/pi/pull/8327) | Introduces a `RenderContext` with a deadline and callback to break up large Markdown rendering loops. | Stops TUI freezes when rendering huge markdown blocks. |
| #8303 | [fix(coding-agent): collapse tool result images until output is expanded](https://github.com/earendil-works/pi/pull/8303) | Ensures collapsed tool output hides image data and unmounts Kitty/iTerm image children. | Fixes #8304 – prevents stray images from consuming terminal resources. |
| #8326 | [feat: add `disabledCommands` setting to block built‑in slash commands](https://github.com/earendil-works/pi/pull/8326) | Adds a `disabledCommands` array in `settings.json`; disabled commands error‑out and are hidden from autocomplete. | Addresses #8325 – lets teams/admins turn off risky commands like `/share`. |
| #8320 / #8324 | [feat(coding-agent): add OpenAI‑compatible API provider to /login flow](https://github.com/earendil-works/pi/pull/8320) (duplicate #8324) | Adds two synthetic provider entries in the login UI for arbitrary OpenAI‑compatible endpoints, with sensible defaults. | Simplifies configuration of self‑hosted or third‑party OpenAI‑like APIs. |
| #8316 | [feat(coding-agent): add agent_recovery_exhausted extension hook](https://github.com/earendil-works/pi/pull/8316) | Fires after native retry and overflow compact‑and‑retry are exhausted, before `agent_settled`; handlers can return `{ retry: true }`. | Implements #8317 – gives extensions a recovery‑exhaustion escape hatch. |
| #8314 | [fix(ai): round‑trip Bedrock redactedContent reasoning](https://github.com/earendil-works/pi/pull/8314) | Preserves the opaque `redactedContent` field from Bedrock Converse responses across turns. | Fixes #8315 – prevents loss of encrypted reasoning from Bedrock models. |
| #8308 | [fix(ai): anthropic fallback usage](https://github.com/earendil-works/pi/pull/8308) | Uses the model actually returned by Anthropic’s server‑side fallback for cost calculation, falling back to the request model only when unknown. | Resolves #8285 – correct pricing when fallback upgrades the model. |
| #8319 | [fix(ai): anthropic fallback usage](https://github.com/earendil-works/pi/pull/8319) | A refined version of #8308 that threads the usage cost through the fallback path properly. | Supersedes #8308 after review; ensures correct cost tracking. |
| #8288 | [feat(ai): add Baidu Qianfan providers](https://github.com/earendil-works/pi/pull/8288) | Introduces two built‑in providers: `baidu-qianfan` (API billing) and `baidu-qianfan-tokenplan` (personal token plan). | Expands Pi’s model ecosystem to support a major Chinese cloud AI offering. |

### 5. Feature Request Trends
- **Extensibility hooks** – repeated requests for agent‑recovery (`agent_recovery_exhausted`), pre‑persistence message modification, and UI‑testing exposure (`VirtualTerminal`).  
- **Command gating** – demand for a `disabledCommands` setting to lock down risky slash commands (`/share`, `/export`).  
- **Provider expansion** – community wants more OpenAI‑compatible endpoints (Baidu Qianfan, Amazon Bedrock Mantle, generic OpenAI‑compatible login).  
- **Internationalisation** – a simple locale switcher in `/settings` to toggle between English and Simplified Chinese at runtime.  
- **Observability & cost accuracy** – better handling of fallback model usage for pricing (Anthropic) and preserving provider‑specific reasoning fields (Bedrock).

### 6. Developer Pain Points
- **TUI instability** – screen flashes, viewport jumps, and unresponsive rendering on large outputs or long transcripts.  
- **Network/provider reliability** – silent failures with remote Ollama/OpenAI‑compatible hosts, missing timeouts causing hangs, and streaming usage omissions breaking auto‑compaction.  
- **Windows‑specific tooling** – the built‑in `find` command hangs in large directories; developers repeatedly suggest defaulting to `fd`.  
- **Session safety** – absence of file‑locking allows multiple Pi processes to corrupt the same session JSONL, leading to divergent histories.  
- **Compaction timing** – threshold‑based compaction only triggers at run boundaries, causing context overflow in long single‑turn agentic runs.  
- **Authentication rate limits** – concurrent Copilot policy requests trigger HTTP 429, degrading login experience for Enterprise users.  

*All links point to the `earendil-works/pi` repository.*  
---  

*Prepared for the Pi developer community – stay tuned for the next digest.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code Community Digest – 2026‑08‑19**  

---

### 1. Today's Highlights
- The latest nightly release **v0.21.11‑nightly.20260818.259951c53e** introduces a **live‑session registry** and the new `qwen sessions ps` command, giving developers visibility into active Qwen sessions.  
- Ongoing work focuses on **multi‑agent coordination** (cross‑session messaging, team‑leader communication) and **reliable memory/state handling** (auto‑recall, session activity watermarks, durable cursors).  
- Community discussion is high around intermittent **API 400 errors**, prompt loss on Ctrl +C, and flaky test infrastructure, signalling a need for stricter validation and better observability.

---

### 2. Releases
| Version | Date | Notable Changes |
|---------|------|-----------------|
| **v0.21.11‑nightly.20260818.259951c53e** | 2026‑08‑18 | • Added **live‑session registry** (core) <br>• New CLI command **`qwen sessions ps`** to list active sessions <br>• Daemon now attaches skill‑toggles (truncated in notes) <br>• Benchmark‑Qwen‑Ref: v0.21.13; end‑to‑end SWE‑bench & Terminal‑Bench smoke runs reported (see release notes for quarantine/status details) |

*Full changelog:* <https://github.com/QwenLM/qwen-code/releases/tag/v0.21.11-nightly.20260818.259951c53e>

---

### 3. Hot Issues (selected by comment count & impact)

| # | Title & Link | Why it matters | Community reaction |
|---|--------------|----------------|--------------------|
| [#656](https://github.com/QwenLM/qwen-code/issues/656) | **API Error: 400 <400> InternalError.Algo.InvalidParameter for every message** | Blocks all interactions; appears suddenly without config changes. | 11 comments, 0 👍 – active debugging thread. |
| [#9194](https://github.com/QwenLM/qwen-code/issues/9194) | **chore(review): close the mutation‑verified test‑pin gaps from PR #9096** | Addresses test robustness; prevents false‑green CI. | 11 comments, 0 👍 – review‑focused discussion. |
| [#8718](https://github.com/QwenLM/qwen-code/issues/8718) | **RFC: Native coordination for independent Qwen sessions** | Proposes a leader‑worker model for multi‑agent workflows. | 10 comments, 0 👍 – roadmap‑level debate. |
| [#8316](https://github.com/QwenLM/qwen-code/issues/8316) | **Prompt not restored to input box when canceling (ctrl +c) a prompt** | UX regression; forces users to retype lost prompts. | 10 comments, 0 👍 – frequent complaint. |
| [#7040](https://github.com/QwenLM/qwen-code/issues/7040) | **RFC: Reliable auto‑memory recall — timing, quality, and telemetry** | Core to long‑context coding assistance; seeks deterministic recall. | 10 comments, 0 👍 – ongoing design review. |
| [#9276](https://github.com/QwenLM/qwen-code/issues/9276) | **Team members cannot send ordinary messages to their leader** | Breaks basic intra‑team communication in Agent Teams. | 7 comments, 0 👍 – blocking collaboration. |
| [#6806](https://github.com/QwenLM/qwen-code/issues/6806) | **Status line context usage percentage does not refresh after /compress or /compress‑fast** | Misleads users about token budget after compression. | 7 comments, 0 👍 – UI/UX pain point. |
| [#8724](https://github.com/QwenLM/qwen-code/issues/8724) | **Cross‑session messaging: let Qwen Code sessions on the same machine message each other** | Enables ad‑hoc collaboration without a formal team. | 6 comments, 0 👍 – feature request with clear use‑case. |
| [#7427](https://github.com/QwenLM/qwen-code/issues/7427) | **web‑shell: artifact panel spams ‘Load artifacts failed: Failed to fetch’ on automatic refresh** | Degrades reliability of artifact workflow in the web shell. | 6 comments, 0 👍 – stability concern. |
| [#9125](https://github.com/QwenLM/qwen-code/issues/9125) | **review/verify: add a flakiness gate — run changed test files N times in the sandbox** | Aims to reduce CI noise from flaky tests. | 5 comments, 0 👍 – quality‑focused proposal. |

---

### 4. Key PR Progress (selected by relevance)

| PR | Title & Link | Summary |
|----|--------------|---------|
| **[#8969](https://github.com/QwenLM/qwen-code/pull/8969)** | **feat(core): add a live‑session registry and `qwen sessions ps`** | Core change shipped in tonight’s nightly; enables session introspection. |
| **[#9396](https://github.com/QwenLM/qwen-code/pull/9396)** | **feat(serve): Add live‑state session activity watermark** | Introduces a durable watermark to prevent cursor duplication on session retirement. |
| **[#9361](https://github.com/QwenLM/qwen-code/pull/9361)** | **feat(scheduled‑tasks): allow creating a task with an existing session** | Reduces session churn by binding new scheduled tasks to live sessions. |
| **[#8927](https://github.com/QwenLM/qwen-code/pull/8927)** | **feat(channels): bound session lifetime with sessionRotation** | Adds `maxTurns` / `maxTime` policies to automatically rotate channel‑bound sessions. |
| **[#9433](https://github.com/QwenLM/qwen-code/pull/9433)** | **fix(tools): reject run_in_background: false for named teammates** | Prevents silent ignore of the foreground flag, fixing Issue #9430. |
| **[#9390](https://github.com/QwenLM/qwen-code/pull/9390)** | **fix(autofix): paginate review threads instead of reaching the oldest 100** | Makes autofix able to address all review threads, not just a fixed slice. |
| **[#9092](https://github.com/QwenLM/qwen-code/pull/9092)** | **feat(review): resume an interrupted PR review from its on‑disk state** | Adds `--resume` to `fetch-pr`, improving robustness of long‑running reviews. |
| **[#9341](https://github.com/QwenLM/qwen-code/pull/9341)** | **feat(cli): Add standalone conversation isolation primitives** | Lays groundwork for isolated, project‑less sessions (standalone lifecycle). |
| **[#9386](https://github.com/QwenLM/qwen-code/pull/9386)** | **feat(ci): post autofix failure‑path handoff comments bilingually** | Improves accessibility of failure diagnostics for international contributors. |
| **[#9421](https://github.com/QwenLM/qwen-code/pull/9421)** | **fix(ui): collapse duplicate in‑flight tool_group rendered from history + pending** | Fixes TUI duplication bug (tool call row rendered twice). |

---

### 5. Feature Request Trends
- **Multi‑agent & session coordination** – native leader/worker patterns, cross‑session messaging, reliable team‑leader communication.  
- **Memory & context handling** – deterministic auto‑recall, telemetry, bounded recall, session activity watermarks.  
- **Observability & UX** – live‑session registry, `sessions ps`, accurate status line/context usage, non‑spamming artifact panel, clearer `list_agents` output.  
- **Testing & CI reliability** – flakiness gates, retry‑based verification, bilingual failure comments, paginated review thread handling.  
- **Configurability & extensibility** – adjustable output formats (`stream-json`), umask‑aware file creation, optional daemon TLS, standalone session primitives, Electron‑only browser panel.  

---

### 6. Developer Pain Points
- **Intermittent API 400 errors** that halt all requests without obvious cause.  
- **Prompt loss on Ctrl +C**, forcing re‑typing and breaking flow.  
- **UI state desynchronization** (status line not updating after compression, artifact panel spamming errors).  
- **Ambiguous tool outputs** (e.g., `list_agents` emptiness when Agent Team teammates are active).  
- **Flaky tests** leading to noisy CI and wasted review cycles.  
- **Session lifecycle races** (duplicate cursors, premature teardown, inability to reuse sessions for scheduled tasks).  
- **Limited daemon configurability** (TLS handling, file‑mode umask, background‑flag enforcement for named teammates).  
- **Need for clearer coordination primitives** between independent sessions and within Agent Teams.  

---  

*All links point to the corresponding GitHub items in the QwenLM/qwen-code repository.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

**DeepSeek TUI Community Digest – 2026‑08‑19**  
*Source: github.com/Hmbown/DeepSeek‑TUI (mirrored as CodeWhale)*  

---  

### 1. Today's Highlights  
- The project shipped **v0.9.9**, tightening terminal UI behavior, fixing rustdoc URL warnings, and preparing the npm package for trusted publishing.  
- Ongoing work focuses on **internationalization** (Chinese docs localization, dictionary‑spine i18n) and **reliability** (CI timeouts, durable‑task handling, continuous‑loop enhancement).  
- A bug where the system prompt was lost after `/new` was closed, while several epics (crate decomposition, documentation restructuring) remain active with community discussion.  

---  

### 2. Releases  
**v0.9.9** – released via PR [#5499](https://github.com/Hmbown/CodeWhale/pull/5499)  
- **Fixed:** narrow‑terminal compact‑row metrics for widths < 60 cols ([#5486]); strict rustdoc bare‑URL detection ([#5489]).  
- **Changed:** stabilized default configurations and synchronized changelogs across the root and TUI crates.  
- **Note:** The legacy `deepseek-tui` npm package is now deprecated; the public `codewhale` binary/npm name remains the canonical identifier.  

---  

### 3. Hot Issues (8 items updated in the last 24 h)  

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| [#5316](https://github.com/Hmbown/CodeWhale/issues/5316) | **EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)** | Tracks the large‑scale refactor to split the TUI into独立 crates, enabling better modularity and faster compile times. | 7 comments, 0 👍 – active discussion on implementation boundaries. |
| [#5337](https://github.com/Hmbown/CodeWhale/issues/5337) | **Web: finish the #4934 dictionary spine — retire every `isZh` branch** | Completes the move to a single i18n dictionary per route, eliminating duplicated language‑branch logic and simplifying future translations. | 5 comments, 0 👍 – contributors are reviewing the remaining page bodies. |
| [#5299](https://github.com/Hmbown/CodeWhale/issues/5299) | **release: move npm publication to trusted publishing** | Aims to replace the current manual 2FA‑gated npm publish with GitHub’s Trusted Publishing, reducing release friction and improving security. | 3 comments, 0 👍 – maintainers are aligning workflows. |
| [#5508](https://github.com/Hmbown/CodeWhale/issues/5508) | **[enhancement] feat: continuous loop** | Requests an “infinite turn” mode for AI‑coordinator workflows, allowing the TUI to run until manually interrupted instead of sleeping between turns. | 3 comments, 0 👍 – early interest from power‑users running autonomous agent loops. |
| [#5505](https://github.com/Hmbown/CodeWhale/issues/5505) | **[bug] System prompt is dropped after `/new`** | Identified a regression where starting a new session cleared the system prompt, causing the model to lose project instructions. | Closed; 2 comments, 0 👍 – fixed in the current release cycle. |
| [#5497](https://github.com/Hmbown/CodeWhale/issues/5497) | **fix(tasks): terminalize stuck durable executions and bound event growth** | Addresses a potential hang where a Task Manager worker waits forever for a `turn.completed` event, blocking resources. | 1 comment, 0 👍 – awaiting a fix in upcoming PRs. |
| [#5482](https://github.com/Hmbown/CodeWhale/issues/5482) | **[documentation] EPIC(docs): review, partially restructure, and fully localize documentation to Chinese** | Drives the effort to provide complete Chinese docs, lowering the language barrier for a growing user base. | 1 comment, 0 👍 – early scaffolding work (PR #5507). |
| [#5496](https://github.com/Hmbown/CodeWhale/issues/5496) | **ci: bound release‑candidate and artifact workflow jobs** | Seeks to add timeout bounds to CI jobs that currently rely on the default 6‑hour limit, preventing stuck runners from blocking releases. | 0 comments, 0 👍 – complementary to the recently‑merged timeout PR #5495. |

---  

### 4. Key PR Progress (10 selected)  

| PR | Title | Summary |
|----|-------|---------|
| [#5499](https://github.com/Hmbown/CodeWhale/pull/5499) | **release: v0.9.9** | Finalized the v0.9.9 release, synced changelogs, and included fixes for narrow‑terminal metrics and rustdoc URL warnings. |
| [#5509](https://github.com/Hmbown/CodeWhale/pull/5509) | **fix(tui): restore /title as an independent terminal window title** | Re‑separates `/title` from `/rename` so each command can modify the window title without affecting the session name shown elsewhere. |
| [#5510](https://github.com/Hmbown/CodeWhale/pull/5510) | **docs(readme): restore the star history chart** | Re‑adds a visual growth indicator (replacing the removed third‑party star chart) with a locally hosted GIF. |
| [#5506](https://github.com/Hmbown/CodeWhale/pull/5506) | **feat(tui): add command context adapters and migration gate (FEAT‑015)** | Lays the groundwork for extracting slash‑command implementations into separate modules while keeping existing commands unchanged. |
| [#5507](https://github.com/Hmbown/CodeWhale/pull/5507) | **docs(i18n): complete Tier 1 of Chinese docs localization (#5482)** | Moves existing Chinese translations into `docs/zh_hans/` and restructures the docs tree for per‑language folders. |
| [#5504](https://github.com/Hmbown/CodeWhale/pull/5504) | **feat(web): move docs/hooks and docs/troubleshooting onto the dictionary spine (#5337)** | Completes the i18n dictionary spine for two remaining documentation pages, removing per‑string `isZh` ternaries. |
| [#5500](https://github.com/Hmbown/CodeWhale/pull/5500) | **test(ci): harden release gate concurrency** | Improves the CI release gate by serializing telemetry contracts, adding retry logic for fixture locks, and using existing timeouts. |
| [#5491](https://github.com/Hmbown/CodeWhale/pull/5491) | **fix(tui): persist approval outcomes before execution** | Ensures approval requests and their outcomes are logged before a command runs, preventing execution when persistence fails and enabling state reconstruction on resume. |
| [#5489](https://github.com/Hmbown/CodeWhale/pull/5489) | **fix(tui): wrap bare URLs in rustdoc comments** | Adds angle‑bracket wrapping around two prose URLs to satisfy the `-D rustdoc::bare-urls` lint, removing CI warnings. |
| [#5494](https://github.com/Hmbown/CodeWhale/pull/5494) | **feat(config): configurable auto‑router classifier timeout** | Exposes `[auto.router] timeout_secs` (default 4 s) to let users tune how long the auto‑router waits for a classification result. |

---  

### 5. Feature Request Trends  

| Trend | Evidence from Issues/PRs | Implication |
|-------|--------------------------|-------------|
| **Continuous / infinite‑turn operation** | Issue #5508 (continuous loop enhancement) | Users want the TUI to run autonomously until interrupted, especially for agent‑coordinator workflows. |
| **Internationalization & Chinese docs** | Epic #5482, PR #5507, PR #5504, Issue #5337 | Growing demand for full Chinese documentation and removal of duplicated language‑branch code. |
| **CI reliability & security** | Issues #5299 (trusted npm publish), #5495/#5496 (job timeouts), PR #5500 (concurrency hardening) | Frequent runner hangs and manual npm publish steps are pain points; automation and timeouts are sought. |
| **Modular command architecture** | PR #5506 (command context adapters), Epic #5316 (crate decomposition) | Community is keen on extracting slash‑commands into separate crates/plugins for better maintainability. |
| **Configurable timeouts & limits** | PR #5494 (auto‑router timeout), Issue #5508 (continuous loop), Issue #5497 (durable‑task hang) | Users request external knobs to tune internal timeouts rather than hard‑coded values. |

---  

### 6. Developer Pain Points  

- **Prompt loss after `/new`** – although fixed, it highlighted a regression risk in session reset logic.  
- **Stuck durable tasks / missing `turn.completed`** – leads to workers blocking indefinitely (Issue #5497).  
- **CI runner hangs** – default 6‑hour timeout allows stale runners to block releases; recent timeout PR #5495 alleviates this but more bounding is requested (Issue #5496).  
- **npm publication friction** – reliance on manual 2FA delays releases; move to Trusted Publishing is in progress (Issue #5299).  
- **Documentation language barrier** – English‑only docs impede Chinese adopters; localization effort underway but still incomplete (Issue #5482).  
- **Complex i18n code** – many `isZh` branches scattered across the web UI; consolidating them via the dictionary spine is a recurring refactor goal (Issue #5337).  
- **Lack of extensible command system** – developers want to add or replace slash commands without touching core TUI logic; the ongoing crate decomposition and adapter work (Epic #5316, PR #5506) addresses this.  

---  

*End of digest.*  
*All links point to the official Hmbown/CodeWhale repository.*

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

**ComfyUI Community Digest – 2026‑08‑19**  

---

### 1. Today's Highlights
- A serious regression in dynamic VRAM streaming (#15255) is causing CUDA OOM crashes after the Aug 3 update; the community is advising single‑GPU launches or disabling pinned memory as a workaround.  
- Performance regressions are surfacing across multiple backends: MiniMax H3 video generation is ~4× slower since v0.32.0 (#15665), ROCm model loading has exploded from ~300 s to >4 000 s (#15001), and flash‑attention detection now erroneously enables on unsupported Windows builds (#15647).  
- Feature‑request activity is picking up, with calls to integrate the newly released ByteDance Bernini‑Diffusers‑v2 pipeline (#15702) and to expose Gemini 3.7 Flash via the API nodes PR (#15688).  

---

### 2. Releases
*No new releases were published in the last 24 h.*

---

### 3. Hot Issues  
*(selected for impact, comment volume, or recent activity)*  

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| [#15255](https://github.com/Comfy-Org/ComfyUI/issues/15255) | Dynamic VRAM streaming crashes → CUDA OOM (regression after Aug 3) | Blocks all generations on multi‑GPU setups; points to a core memory‑management regression. | 57 comments, many users confirming the crash; workaround: `--cuda-device 0` or `--disable-pinned-memory`. |
| [#15060](https://github.com/Comfy-Org/ComfyUI/issues/15060) | Custom Combos broken in subgraphs | Affects workflow composition, a core usability feature for complex pipelines. | 16 comments, 👍 1; users report loss of index updates when nesting nodes. |
| [#15647](https://github.com/Comfy-Org/ComfyUI/issues/15647) | `can_use_flash_attention()` returns True on gfx1201 Windows builds without AOTriton kernels | Leads to broken text encoders and silent failures in models that rely on flash attention. | 11 comments; confirmed regression after recent AOTriton changes. |
| [#15478](https://github.com/Comfy-Org/ComfyUI/issues/15478) | MiniMax H3 Mem Eff Sage Attention Patch ERROR: Execution Failed | Prevents use of the memory‑efficient attention patch for MiniMax H3, a popular efficient model. | 6 comments; users encountering execution failures despite correct installation. |
| [#15001](https://github.com/Comfy-Org/ComfyUI/issues/15001) | ROCm/gfx1201 model loading extremely slow (LTX 2.3 workflow 300 s → 4 400 s) | Severely degrades productivity on AMD GPUs; suggests a regression in the model‑loading path. | 5 comments; users noting the slowdown began after recent PyAV/ffmpeg updates. |
| [#15665](https://github.com/Comfy-Org/ComfyUI/issues/15665) | MiniMax H3 video generation ~4× slower since v0.32.0 (regression from #15486) | Direct impact on video‑generation workflows; GPU SM stays high while effective throughput collapses. | 3 comments, 👍 1; bisect points to `v = v.clone()` introduced in #15486. |
| [#15134](https://github.com/Comfy-Org/ComfyUI/issues/15134) | comfy-angle package breaks libffi (fish‑speech, etc.) | Global preload of `libGLESv2.so` interferes with CFFI‑based custom nodes, breaking audio/video nodes. | 2 comments; users report `ffi_prep_closure()` errors after enabling the angle extra. |
| [#15702](https://github.com/Comfy-Org/ComfyUI/issues/15702) | Feature: support ByteDance Bernini‑Diffusers‑v2 | Requests integration of the latest state‑of‑the‑art text‑to‑image/video pipeline released 2026‑08‑13. | 0 comments (fresh request); likely to gain traction as the model spreads. |
| [#15700](https://github.com/Comfy-Org/ComfyUI/issues/15700) | Rate limit exceeded on cloud.comfy.org (paid $20 plan) | Highlights possible misuse‑detection or quota‑calculation issues affecting paying users. | 0 comments; users frustrated by unexpected throttling. |
| [#15701](https://github.com/Comfy-Org/ComfyUI/issues/15701) | Stable Audio 3 – Quality degradation in recent commits | Indicates a regression in the audio generation pipeline affecting fidelity. | 0 comments; early report needing investigation. |

---

### 4. Key PR Progress  
*(selected for functional impact or architectural improvement)*  

| # | PR | Description / Fix |
|---|----|--------------------|
| [#15509](https://github.com/Comfy-Org/ComfyUI/pull/15509) | Fix missing asset preview URLs outside input/output – ensures preview nodes writing to temp dirs get proper `/api/view` links. |
| [#15272](https://github.com/Comfy-Org/ComfyUI/pull/15272) | Make RAM accounting cgroup aware – containers now respect their memory limits instead of using host-wide `/proc/meminfo`. |
| [#15718](https://github.com/Comfy-Org/ComfyUI/pull/15718) | Partner Nodes: add Cosmos3 API nodes backed by a local vLLM‑Omni server (text‑to‑image/video, image‑to‑video, etc.). |
| [#15713](https://github.com/Comfy-Org/ComfyUI/pull/15713) | Save JSON files (workflows) with 2‑space indentation for better diff‑ability and source‑control friendliness. |
| [#15714](https://github.com/Comfy-Org/ComfyUI/pull/15714) | Rebuild stale asset records when the asset system is enabled – fixes outdated `loader_path` columns and other stale metadata. |
| [#15715](https://github.com/Comfy-Org/ComfyUI/pull/15715) | Add **ResampleVideoFrameRate** node – duplicates or drops frames to change FPS while preserving duration, audio, alpha, metadata. |
| [#15694](https://github.com/Comfy-Org/ComfyUI/pull/15694) | Speed up Ace Step 1.5 with CUDA graphs – reduces kernel launch overhead for the ace‑step sampler. |
| [#15711](https://github.com/Comfy-Org/ComfyUI/pull/15711) | Support saving nested latents – packs multiple LATENT streams into a single safetensors tensor with shape metadata for perfect round‑trip. |
| [#15648](https://github.com/Comfy-Org/ComfyUI/pull/15648) | Fix: verify AOTriton kernels actually launch before enabling PyTorch attention – addresses the flash‑attention false‑positive in #15647. |
| [#15705](https://github.com/Comfy-Org/ComfyUI/pull/15705) | fix(minimax): halve V memory traffic by materializing backend layout directly – targets the MiniMax H3 slowdown highlighted in #15665. |

---

### 5. Feature Request Trends
- **Multi‑model API support** – Requests for Cosmos3, Gemini 3.7 Flash, and Bernini‑Diffusers‑v2 indicate a desire to keep pace with the newest HuggingFace releases via first‑party API nodes.  
- **Improved memory management on heterogeneous hardware** – Repeated OOM/vRAM issues (both Nvidia and AMD) point to a need for more robust, allocator‑aware memory tracking (cgroup‑aware RAM, better VRAM streaming).  
- **Workflow portability & readability** – PRs for indented JSON and asset‑record rebuilding reflect a community push for version‑control‑friendly workflows and cleaner project maintenance.  
- **Performance‑focused low‑level optimizations** – CUDA graphs, contiguous QKV on ROCm, and MiniMax V‑traffic fixes show a trend toward squeezing out latency on specific backends.  

---

### 6. Developer Pain Points
- **Regression‑induced crashes** – Dynamic VRAM streaming and flash‑attention detection bugs break otherwise stable setups, forcing users to revert or apply workarounds.  
- **Backend‑specific performance cliffs** – AMD ROCm model loading and MiniMax video slowdowns demonstrate that optimizations for one architecture can detrimentally affect another.  
- **Custom‑node compatibility** – Global library preloads (comfy‑angle/libffi) and subgraph combo bugs cause silent failures in popular community nodes, eroding trust in the plug‑in ecosystem.  
- **Installation / network constraints** – Reports of pip being blocked in certain regions and rate‑limit surprises on the hosted service highlight ongoing friction around dependency retrieval and quota enforcement.  
- **Debugging visibility** – Lack of clear error messages (e.g., generic “Execution Failed” for MiniMax Sage Attention) makes root‑cause analysis time‑consuming for both users and maintainers.  

---  

*Stay tuned for the next digest as the team works through these regressions and rolls out the requested API‑node integrations.*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Community Digest — 2026-08-19

## Today's Highlights
The community has no releases this cycle, but the issue tracker shows a surge of regression reports around v0.32.14: CUDA users on sm_86 GPUs are being silently dropped to CPU, and several developers report elevated CPU usage even when models fully fit in VRAM. Qwen 3.x models are a recurring pain point — tool-calling loops trigger 500 errors, agent integrations hang on macOS, and MLX/ROCm backends exhibit caching and state-bleed defects. On the pull-request side, work continues on runner health, model-metadata caching (~300 ms overhead removal), and launch-integration polish.

## Releases
None in the last 24 hours.

## Hot Issues
- **[#3185 — Ollama doesn't distribute notice licenses in release artifacts](https://github.com/ollama/ollama/issues/3185)** · 269 👍 · 54 comments · Open
  A long-standing legal/compliance concern: statically linked dependencies like llama.cpp (MIT) require distribution of copyright notices in binary form. Still unresolved after ~2.5 years, making it the most-upvoted open issue in this digest.
- **[#17841 — v0.32.14 silently falls back to CPU on sm_86 GPUs (RTX 30 / A40 / A6000)](https://github.com/ollama/ollama/issues/17841)** · Open
  CUDA 13 builds omit compute capability 8.6, and the CUDA 12 fallback is broken. RTX A6000 users see ~7 tok/s CPU inference with zero VRAM allocation. A significant regression for a large installed base.
- **[#3113 — Integrated Intel GPU support](https://github.com/ollama/ollama/issues/3113)** · 75 👍 · 35 comments · Open
  Community request to support Intel integrated graphics (e.g., Iris Xe). Broad hardware support continues to be a top demand.
- **[#17778 — Qwen 3.8: "no user query found in messages" (500) during tool-calling loop](https://github.com/ollama/ollama/issues/17778)** · Open
  Model enters a tool-call loop and the API returns 500 with no user query found. Reproducible with a 205K context; points to template/parser issues under streaming tool use.
- **[#17839 — Agent integrations hang indefinitely with local Qwen models on macOS](https://github.com/ollama/ollama/issues/17839)** · Open
  Direct API calls (including OpenAI-compatible, reasoning, tool calling) work, but agent integrations hang. Suggests a backend incompatibility with agent harnesses rather than the model itself.
- **[#17782 — qwen3.8:27b fails: "Could not load TensileLibrary_lazy_gfx1200.dat"](https://github.com/ollama/ollama/issues/17782)** · Open
  AMD RX 9060 XT users hit a missing ROCm Tensile library after some runtime, crashing the runner. Flags incomplete ROCm packaging for newer GPU families.
- **[#17829 — MLX engine: no prompt/prefix caching between requests](https://github.com/ollama/ollama/issues/17829)** · Open
  Every agent step re-prefills the full 20–30K-token prompt on Apple Silicon, inflating time-to-first-token. A clear performance gap versus the CUDA backend.
- **[#17833 — v0.32.14 uses heavy CPU when model fully fits in VRAM](https://github.com/ollama/ollama/issues/17833)** · 2 👍 · Open
  CPU spikes to 50–80% despite 100% GPU-bound `ollama ps`; reverting to 0.32.13 resolves it. Regression under active investigation.
- **[#17847 — ROCm backend on Strix Halo bleeds KV state across requests](https://github.com/ollama/ollama/issues/17847)** · Open
  On gfx1151 iGPU, responses are contaminated by previous, unrelated requests. A serious correctness/data-isolation bug for AMD users.
- **[#17836 — /api/chat returns HTTP 200 with done:false on internal abort](https://github.com/ollama/ollama/issues/17836)** · Open
  Stream aborts (e.g., template parse failures) yield a 200 response with no error field, making silent failures indistinguishable from success — a reliability concern for API clients.

Also notable: [#17811](https://github.com/ollama/ollama/issues/17811) (`ollama launch claude` input-handling failure) and [#17804](https://github.com/ollama/ollama/issues/17804) (MLX vision runner requesting ~125 GB Metal buffer on high-res input).

## Key PR Progress
- **[#17752 — Model metadata cache to reduce per-request overhead](https://github.com/ollama/ollama/pull/17752)** · Closed
  Caches resolved model metadata/capabilities, avoiding repeated GGUF reads that cost ~300 ms per inference call. Invalidation hooks on manifest changes.
- **[#17846 — Return error when generation stream ends without a final response](https://github.com/ollama/ollama/pull/17846)** · Open
  Fixes [#17836](https://github.com/ollama/ollama/issues/17836): detects SSE streams that close without `stop`/`finish_reason` and surfaces an error instead of silently succeeding.
- **[#17834 — MLX runner: load progress reporting and stall detection](https://github.com/ollama/ollama/pull/17834)** · Open
  Restores pre-0.30 progress-based stall detection to avoid canceling slow/lazy weight loads on MLX; listener binds before model load.
- **[#17516 — Evict loaded runners whose llama-server process has exited](https://github.com/ollama/ollama/pull/17516)** · Open
  Fixes the stale-runner failure class (#17428/#17509): scheduler now evicts wedged subprocesses instead of reporting them as loaded.
- **[#12030 — Add /api/tokenize and /api/detokenize endpoints](https://github.com/ollama/ollama/pull/12030)** · Open
  Exposes model-aligned tokenization over the HTTP API, enabling direct tokenizer interaction for tools and pipelines.
- **[#14489 — Prevent runtime panics on malformed/corrupt GGUF inputs](https://github.com/ollama/ollama/pull/14489)** · Closed
  Validates `uint64` casts to `int` in `readGGUFString`/`readGGUFArray`/tensor-info decoder, eliminating negative-length `make()` panics on hostile files.
- **[#17532 — Allow default registry to delegate auth to ollama.com](https://github.com/ollama/ollama/pull/17532)** · Open
  Fixes realm-host mismatch when pulls redirect to `ollama.com` for tokens, resolving "pull model manifest" failures (fixes #17361).
- **[#17850 — MLX update](https://github.com/ollama/ollama/pull/17850)** · Open
  Temporarily carries ml-explore/mlx-c PR #127 — dependency bump addressing pending MLX fixes.
- **[#17851 — llama.cpp update](https://github.com/ollama/ollama/pull/17851)** · Closed
  Routine upstream llama.cpp synchronization; likely carries backend parser/format fixes relevant to the Qwen tool-calling issues.
- **[#17195 — fix(glm-ocr): register <|user|> as EOT for legacy glmocr GGUFs](https://github.com/ollama/ollama/pull/17195)** · Open
  Addresses runaway repeated output by setting `eot_token_id` for legacy `glmocr` blobs in the compat layer.

Also merged/active: [#17701](https://github.com/ollama/ollama/pull/17701) (strip wrapping quotes from drag-dropped image paths), [#17558](https://github.com/ollama/ollama/pull/17558) (hide macOS app on window close), and docs/integration PRs [#17852](https://github.com/ollama/ollama/pull/17852), [#17845](https://github.com/ollama/ollama/pull/17845).

## Feature Request Trends
- **Broader hardware support**: Intel integrated GPUs ([#3113](https://github.com/ollama/ollama/issues/3113)) and legacy macOS versions ([#17842](https://github.com/ollama/ollama/issues/17842)) remain recurring asks.
- **Launch integrations expansion**: Users want more agent/CLI integrations (Antigravity's `agy` in [#16329](https://github.com/ollama/ollama/issues/16329)) and fixes for existing ones (Claude Code in [#17811](https://github.com/ollama/ollama/issues/17811), Codex remote support in [#17835](https://github.com/ollama/ollama/issues/17835)).
- **Better API surface**: Model-aligned tokenization endpoints ([#12030](https://github.com/ollama/ollama/pull/12030)) and hard errors on stream abort ([#17846](https://github.com/ollama/ollama/pull/17846)) show demand for richer, more explicit tooling APIs.
- **Desktop polish**: The desktop onboarding flow ([#17853](https://github.com/ollama/ollama/pull/17853)) and macOS window behavior ([#17558](https://github.com/ollama/ollama/pull/17558)) signal continued investment in the app UX.

## Developer Pain Points
- **Qwen 3.x model reliability**: Repeated issues with tool-calling loops returning 500s ([#17778](https://github.com/ollama/ollama/issues/17778)), agent harness hangs ([#17839](https://github.com/ollama/ollama/issues/17839)), ignored format when think is disabled ([#14645](https://github.com/ollama/ollama/issues/14645)), and inconsistent think-mode values ([#17837](https://github.com/ollama/ollama/issues/17837)).
- **Backend regressions in 0.32.14**: Silent CPU fallback on sm_86 ([#17841](https://github.com/ollama/ollama/issues/17841)), unexplained CPU spikes with VRAM-resident models ([#17833](https://github.com/ollama/ollama/issues/17833)), and macOS/MLX full re-prefills ([#17829](https://github.com/ollama/ollama/issues/17829)).
- **AMD/ROCm gaps**: Missing Tensile libraries for newer GPUs ([#17782](https://github.com/ollama/ollama/issues/17782)) and isolated KV-state bleed across requests ([#17847](https://github.com/ollama/ollama/issues/17847)).
- **Silent failure modes**: 200-with-`done:false` responses and internally aborted generations that clients can't detect ([#17836](https://github.com/ollama/ollama/issues/17836)).
- **Operational hygiene**: License-notice distribution ([#3185](https://github.com/ollama/ollama/issues/3185)) and stale runner bookkeeping after subprocess crashes remain open wounds for production users.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

**llama.cpp Community Digest – 2026‑08‑19**  

---

### 1. Today’s Highlights
- The project shipped a new **v0.1.2** release (semantic versioning still in progress) and a nightly build **b10485** that updates the OpenVINO backend to 2026.3 and fixes several macOS/xcframework build issues.  
- Recent activity is dominated by backend‑specific stability work (CUDA, Vulkan, ROCm, OpenVINO) and usability enhancements such as runtime message injection and adaptive MTP drafting.  

---

### 2. Releases
| Version / Build | Highlights |
|-----------------|------------|
| **v0.1.2** | First semver‑styled release; note that versioning scheme is still under discussion ([discussion #1579](https://github.com/ggml-org/ggml/discussions/1579)). |
| **Nightly b10485** | • Sync with latest ggml.<br>• CI: OpenVINO updated to 2026.3; Nemotron‑H rollback test skipped (OpenVINO lacks SSM_SCAN support).<br>• macOS/iOS: arm64 binaries published; KleidiAI build disabled pending further work. |
| **Recent commits since v0.1.1** | - `b10488`: CI OpenVINO bump.<br>- `b10486`: mtmd fix for LFM2 image‑tiling threshold (Windows & Linux).<br>- `b10485`/`b10483`: ggml sync, xcframework & CMake clean‑up. |

---

### 3. Hot Issues (10 picked)

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| [#21725](https://github.com/ggml-org/llama.cpp/issues/21725) | **Feature request: XDNA backend** – AMD’s new XDNA accelerator support. | Would open llama.cpp to AMD’s AI‑engine IP, broadening hardware coverage. | 30 👍, 24 comments – strong interest, awaiting maintainer feedback. |
| [#24055](https://github.com/ggml-org/llama.cpp/issues/24055) | **Context checkpoints always invalidated on hybrid/recurrent models** – breaks long‑run inference with models like Nemotron‑H. | Prevents efficient KV‑cache reuse, hurting throughput for stateful models. | 19 comments, 4 👍 – active discussion on root cause (split recurrent graph). |
| [#25593](https://github.com/ggml-org/llama.cpp/issues/25593) | **Eval bug: SM_60 quality loss – FP32 math silently done in FP16** on older Tesla P100 GPUs. | Leads to silent accuracy degradation on legacy CUDA hardware. | 16 comments, 4 👍 – users request a forced‑FP32 path or better diagnostics. |
| [#24712](https://github.com/ggml-org/llama.cpp/issues/24712) | **Eval bug: Warning – sched_reserve: layer 0 on CPU but fused Gated Delta Net on CUDA0** – tensor‑placement mismatch. | Causes unnecessary CPU‑GPU transfers and can trigger OOM on low‑VRAM laptops. | 16 comments, 3 👍 – highlights need for better device‑affinity logic. |
| [#24730](https://github.com/ggml-org/llama.cpp/issues/24730) | **Feature request: Support for GLM 5.2** – newer OpenGL Mathematics version. | Would enable newer math features and possibly improve SIMD utilization on some platforms. | 15 👍, 15 comments – closed but indicates demand for keeping dependencies up‑to‑date. |
| [#27102](https://github.com/ggml-org/llama.cpp/issues/27102) | **CUDA kernel stall during model execution, killed by watchdog** on RTX Pro 6000 Blackwell. | Hard‑freezes break server reliability; watchdog kills the process, requiring manual restart. | 14 comments, 3 👍 – urgent for production CUDA deployments. |
| [#24492](https://github.com/ggml-org/llama.cpp/issues/24492) | **Vulkan backend crash: Gemma 4 31B MTP draft fails – pre‑allocated tensor cannot run operation NONE**. | Blocks Vulkan‑accelerated inference for upcoming Gemma‑4 family. | 13 comments, 3 👍 – users ask for better fallback or validation. |
| [#22197](https://github.com/ggml-org/llama.cpp/issues/22197) | **ggml‑backend‑meta: multi buffers unsupported → Vulkan segfault**. | Limits Vulkan use‑cases that require multiple memory pools (e.g., multi‑GPU or split‑KV). | 9 comments, 2 👍 – a blocker for advanced Vulkan scaling. |
| [#26746](https://github.com/ggml-org/llama.cpp/issues/26746) | **ROCm gfx1151 RPC worker crashes in GGML_OP_TOP_K after 4096 tokens** (DeepSeek V4). | Hinders long‑context ROCm deployments; TOP_K is a common sampling op. | 9 comments, 0 👍 – recent uptick as ROCm adoption grows. |
| [#26902](https://github.com/ggml-org/llama.cpp/issues/26902) | **Glimmer Q8_0 on 4× Tesla T10: GGML_ASSERT failure on tensor split axis**. | Causes crashes when using certain quantized vision‑language models on multi‑GPU setups. | 9 comments, 0 👍 – reflects quant‑specific tensor‑layout bugs. |

---

### 4. Key PR Progress (10 picked)

| PR | Summary |
|----|---------|
| [#27343](https://github.com/ggml-org/llama.cpp/pull/27343) | **Server/UI: inject message into generation** – new `/v1/chat/completion/control` action and UI toggle to insert arbitrary tokens mid‑stream (useful for steering or tool use). |
| [#27344](https://github.com/ggml-org/llama.cpp/pull/27344) | **Vulkan: implement `ggml_rope_set_offset`** – adds rope offset support and optimizes the in‑place case, completing the Vulkan rope feature set. |
| [#27342](https://github.com/ggml-org/llama.cpp/pull/27342) | **Model/Server: add DFlash2 support** – introduces grouped dynamic depthwise convolution + candidate selector, extending the speculative decoding family. |
| [#27341](https://github.com/ggml-org/llama.cpp/pull/27341) | **CUDA: fuse ffn_gate + glu into mul_mat_q epilogue** – mirrors existing decode‑side fusion, reducing kernel launch overhead for matrix‑multiply‑quantize paths. |
| [#27339](https://github.com/ggml-org/llama.cpp/pull/27339) | **OpenCL: fix local size for norm kernels** – ensures work‑group size is a multiple of 2, resolving launch failures on small tensors. |
| [#27322](https://github.com/ggml-org/llama.cpp/pull/27322) | **Quantize: add IQ2_NL and IQ3_NL types (CPU)** – new integer‑only quantizations for CPUs that fall back to 32‑element blocks when row length isn’t a multiple of 256. |
| [#27338](https://github.com/ggml-org/llama.cpp/pull/27338) | **DevOps: use `GGML_NATIVE=OFF` for OpenVINO docker builds** – prevents host‑specific AVX‑512 emission, fixing runtime illegal‑instruction errors. |
| [#26439](https://github.com/ggml-org/llama.cpp/pull/26439) | **OpenCL: port fused SSM_SCAN kernel (Mamba‑2, d_state∈{128,256}) to GPU** – accelerates a key recurrent op that previously fell back to CPU. |
| [#27332](https://github.com/ggml-org/llama.cpp/pull/27332) | **Vulkan: use density gate for MUL_MAT_VEC_ID path** – replaces static 8‑token cutoff with adaptive gate (`n_tokens * experts_per_token ≤ 2 * n_experts`), improving AMD RADV performance (+21‑36% at various batch sizes). |
| [#27210](https://github.com/ggml-org/llama.cpp/pull/27210) | **Testing/Server: add adaptive MTP draft depth (`draft-mtp-adaptive`)** – introduces a counting‑based state machine with climb‑counter and drop‑pressure accumulator; controllable via `--spec-type draft-mtp-adaptive --spec-draft-n-max 12`. |

---

### 5. Feature Request Trends (from Issues)

- **Hardware backends**: Strong demand for **XDNA** (#21725) and continued interest in **ROCm/HIP** stability & performance (multiple crashes, bandwidth issues).  
- **Model‑specific enhancements**: Requests for **GLM 5.2** support (#24730) and better handling of **multimodal tiling** (LFM2 fix).  
- **Server/UX**: Desire for **granular model‑preset locking** (#24434), **progress reporting** for model loading/download (#24822), and **on‑demand conversation compaction** (#24473).  
- **Speculative decoding**: Adaptive MTP depth (#27210) and DFlash2 (#27342) show a trend toward more sophisticated, self‑tuning drafting strategies.  
- **Resource management**: Calls for **idle worker termination** (`--sleep-idle-seconds`) (#25570) and better **VRAM allocation diagnostics** on ROCm (#26208).  

Overall, the community is pushing for **broader hardware coverage**, **more robust server‑side observability**, and **smarter, self‑adjusting inference pipelines**.

---

### 6. Developer Pain Points

- **Backend‑specific correctness bugs**: Frequent reports of silent quality loss (SM_60 FP16/FP32 mix‑up), illegal memory accesses (CUDA flash‑attn), and watchdog‑triggered stalls on newer GPUs.  
- **Hybrid/recurrent model support**: Context checkpoint invalidation and split recurrent graphs break KV‑cache reuse for stateful models like Nemotron‑H.  
- **Memory & allocation bugs**: VRAM not allocating on ROCm gfx1201, double‑counted mmproj margins causing unwanted CPU offload, and OOMs when loading large models on Vulkan/Metal.  
- **Cross‑platform build quirks**: macOS xcframework and CMake target naming issues (e.g., `vendor::hash` needing an alias), and Windows‑specific test‑unicode link errors.  
- **Tooling & diagnostics**: Lack of clear error messages when tensor shapes or device assignments mismatch; users often resort to bisecting commits to locate regressions.  
- **Performance tuning**: Vulkan and ROCm backends still suffer from suboptimal work‑group sizing or flash‑attention tile reload races, leading to noticeable slow‑downs on AMD/Intel GPUs.  

Addressing these pain points—particularly improving **device‑affinity validation**, **robust fallback paths for unsupported ops**, and **better build‑time sanitization**—will likely yield the biggest stability gains for the upcoming release cycle.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*