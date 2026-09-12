# AI CLI Tools Community Digest 2026-09-13

> Generated: 2026-09-12 22:16 UTC | Tools covered: 12

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

**Today's Highlights (2026‑09‑13)**  

- **Claude Code** – Patch v2.1.270 released, fixing a regression where read‑only Git commands in Bash repeatedly asked for permission after long‑running sessions.  
  https://github.com/anthropics/claude-code/releases/tag/v2.1.270  

- **Gemini CLI** – Nightly build v0.61.0‑nightly.20260912.g9c1b0a610 landed, adding a critical security fix that blocks indirect prompt injection via unsanitized build‑file changes and hardens the sandbox filesystem.  
  https://github.com/google-gemini/gemini-cli/releases/tag/v0.61.0-nightly.20260912.g9c1b0a610  

- **Qwen Code** – Nightly release v0.23.3‑nightly.20260912.54aa66834b published, removing obsolete DingTalk background response aggregation and introducing a breaking change to the *channels* feature (the `me` field is removed).  
  https://github.com/QwenLM/qwen-code/releases/tag/v0.23.3-nightly.20260912.54aa66834b  

- **llama.cpp** – Twelve incremental releases (b10920‑b10931) shipped in the last 24 h, covering backend hardening (CUDA, OpenCL, WebGPU, Hexagon), server/router improvements, and dependency updates (cpp‑httplib 0.56.0).  
  https://github.com/ggerganov/llama.cpp/releases  

- **ComfyUI** – PRs #16285 and #16286 merged, fixing the MiniMax H3 crash on Apple MPS caused by the `aten::_int_mm` fallback regression.  
  https://github.com/Comfy-Org/ComfyUI/pull/16285  
  https://github.com/Comfy-Org/ComfyUI/pull/16286  

- **DeepSeek TUI** – PR #6100 merged, adding the Serply web‑search provider as a new `[search]` tool option.  
  https://github.com/Hmbown/DeepSeek-TUI/pull/6100  

- **OpenCode** – PR #42150 merged, changing text/reasoning delta accumulation from O(N²) to O(N) to eliminate performance degradation in long sessions.  
  https://github.com/anomalyco/opencode/pull/42150  

- **Ollama** – PR #17894 merged, resolving the Qwen 3.8 chat‑streaming bug by always preserving the most recent user message during context truncation.  
  https://github.com/ollama/ollama/pull/17894

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills Community Highlights – 2026‑09‑13**  

---  

### 1. Top Skills Ranking  
*(Most‑discussed open PRs – ordered by the amount of community attention they have generated, inferred from linked issue discussion, update frequency, and scope of impact.)*  

| Rank | PR | Skill / Change | What it does | Discussion highlights | Status |
|------|----|----------------|--------------|-----------------------|--------|
| **1** | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill‑creator – fix `run_eval.py`** | Makes the evaluation script actually detect skill triggers (installs the eval artifact as a real skill, fixes Windows stream handling, trigger detection, and parallel workers). | Linked to the heavily‑commented issue **[#556](https://github.com/anthropics/skills/issues/556)** (12 comments) where users reported 0 % recall for every skill description. The fix restores the evaluation loop so skill‑descriptions can be meaningfully optimized. | **Open** (updated 2026‑09‑12) |
| **2** | [#1734](https://github.com/anthropics/skills/pull/1734) | **Detect orphaned DOCX comments** | Scans a `.docx` file and reports comments that are not attached to any text run – a common cleanup need after collaborative editing. | First‑time contribution; the author notes that orphan comments are silently ignored by most editors and can bloat file size. Early reviewers asked for a CLI flag to export the list as JSON. | **Open** (updated 2026‑09‑11) |
| **3** | [#514](https://github.com/anthropics/skills/pull/514) | **document‑typography** | Provides typographic quality control for AI‑generated documents: prevents orphan/widow lines, fixes numbering misalignment, and adds optional hyphenation rules. | The summary stresses that “these issues affect every document Claude generates.” Commenters highlighted the lack of any built‑in typography guardrails and suggested integrating the skill with the `document‑skills` plugin. | **Open** (updated 2026‑03‑13) |
| **4** | [#1742](https://github.com/anthropics/skills/pull/1742) | **mcp‑builder – support `mcp>=2` streamable_http_client** | Updates the MCP‑builder skill to work with the renamed `streamable_http_client` and to pass custom HTTP headers via the new client factory. | Directly addresses **[#1668](https://github.com/anthropics/skills/issues/1668)** (not shown in the top‑15 list but referenced in the PR). Users reported import errors after upgrading to MCP 2.0; the fix restores compatibility without breaking existing configs. | **Open** (updated 2026‑09‑11) |
| **5** | [#1615](https://github.com/anthropics/skills/pull/1615) | **scnet‑hpc** | Enables Claude to operate SCNet HPC clusters: profile‑based SSH, Slurm job generation, partition/memory/module guidance, and cluster‑discovery helpers. | The author stresses that HPC workflows are a blind spot for current skills. Reviewers asked for a “dry‑run” mode that validates the generated Slurm script without submitting it. | **Open** (updated 2026‑08‑24) |
| **6** | [#538](https://github.com/anthropics/skills/pull/538) | **pdf – fix case‑sensitive file references** | Corrects eight mismatched references in `skills/pdf/SKILL.md` (e.g., `REFERENCE.md` → `reference.md`) that break the skill on case‑sensitive filesystems. | Although a small fix, it unblocked PDF skill usage on Linux/macOS CI runners; several commenters noted they had been hitting “file not found” errors for weeks. | **Open** (updated 2026‑04‑29) |
| **7** | [#486](https://github.com/anthropics/skills/pull/486) | **ODT skill** | Create, fill, read, and convert OpenDocument Format files (.odt, .ods) and translate ODT → HTML. | Trigger list includes “ODT”, “ODS”, “ODF”, “LibreOffice document”. Early feedback requested support for password‑protected ODT files and a round‑trip test (ODT→HTML→ODT). | **Open** (updated 2026‑04‑14) |
| **8** | [#210](https://github.com/anthropics/skills/pull/210) | **frontend‑design – improve clarity & actionability** | Rewrites the frontend‑design skill so each instruction is executable in a single Claude turn, adds concrete examples (CSS flexbox grid, responsive breakpoint), and removes vague phrasing. | The original skill was criticized for being “more like a tutorial than a skill.” Commenters appreciated the added “do‑this‑now” style and asked for a companion React‑component checklist. | **Open** (updated 2026‑03‑07) |

---  

### 2. Community Demand Trends  
*(Derived from the most‑commented Issues – what contributors are asking for next.)*  

| Issue | Comments | Core request / pain point | Implied Skill direction |
|-------|----------|---------------------------|------------------------|
| **[#492](https://github.com/anthropics/skills/issues/492)** | 43 | Security: community skills published under the `anthropic/` namespace impersonate official skills, creating a trust‑boundary risk. | **Official skill‑signing / verification mechanism** (e.g., signed skill manifests, namespace gating). |
| **[#228](https://github.com/anthropics/skills/issues/228)** | 16 | Org‑wide skill sharing in Claude.ai – currently requires manual file exchange. | **Centralized skill registry / sharing API** for teams. |
| **[#556](https://github.com/anthropics/skills/issues/556)** | 12 | `run_eval.py` never triggers skills (0 % recall), breaking the skill‑improvement loop. | **Reliable skill‑evaluation harness** (cross‑platform, Windows‑safe). |
| **[#62](https://github.com/anthropics/skills/issues/62)** | 10 | Skills disappearing after file renames / download folder moves. | **Skill‑metadata resilience** (skill ID not tied to file path, auto‑repair on move). |
| **[#1329](https://github.com/anthropics/skills/issues/1329)** | 9 | Compact‑memory skill – symbolic notation for compressing agent state. | **Memory‑compression / summarization skill** for long‑running agents. |
| **[#202](https://github.com/anthropics/skills/issues/202)** | 8 | `skill‑creator` reads like developer docs, not an operational skill. | **Rewrite of skill‑creator** to be concise, action‑focused, and token‑efficient. |
| **[#189](https://github.com/anthropics/skills/issues/189)** | 6 | `document‑skills` and `example‑skills` install identical content → duplicate skills. | **Deduplication logic** in skill‑installer or clearer plugin segregation. |

**Take‑away:** The community’s strongest signals are **(1) trust & security** (skill provenance), **(2) shareability** (team‑level distribution), **(3) reliable evaluation** (so skill improvements are data‑driven), and **(4) memory/state efficiency** for prolonged agent runs.

---  

### 3. High‑Potential Pending Skills  
*(Open PRs that have clear value, recent activity, and are likely to be merged soon.)*  

| PR | Skill | Why it’s high‑potential | Link |
|----|-------|------------------------|------|
| **[#1734](https://github.com/anthropics/skills/pull/1734)** | Detect orphaned DOCX comments | Fills a niche document‑cleanup need; low‑risk, high‑utility for legal/editorial workflows. | https://github.com/anthropics/skills/pull/1734 |
| **[#514](https://github.com/anthropics/skills/pull/514)** | document‑typography | Directly improves visual quality of every AI‑generated document – a cross‑domain benefit. | https://github.com/anthropics/skills/pull/514 |
| **[#1615](https://github.com/anthropics/skills/pull/1615)** | scnet‑hpc | First HPC‑focused skill; targets scientific‑computing users that currently lack Claude support. | https://github.com/anthropics/skills/pull/1615 |
| **[#1628](https://github.com/anthropics/skills/pull/1628)** | Hivemind – Zero‑Cost Multi‑Agent Orchestration | Enables delegation of mechanical work to free‑model `opencode` workers, saving expensive model tokens. | https://github.com/anthropics/skills/pull/1628 |
| **[#1627](https://github.com/anthropics/skills/pull/1627)** | Buffer GraphQL Agent Skill | Portable social‑media scheduling for any agent; addresses a common automation request. | https://github.com/anthropics/skills/pull/1627 |
| **[#1595](https://github.com/anthropics/skills/pull/1595)** | UIZZE (Partner Skill) | Provides anti‑UI‑slop guidance with a massive visual‑reference MCP; highly sought after by product teams. | https://github.com/anthropics/skills/pull/1595 |
| **[#1367](https://github.com/anthropics/skills/pull/1367)** | self‑audit (mechanical + 4‑dim reasoning quality gate) | Universal pre‑delivery checker; aligns with the community’s push for reliable skill output. | https://github.com/anthropics/skills/pull/1367 |

---  

### 4. Skills Ecosystem Insight  

**The community’s most concentrated demand is for trustworthy, shareable, and reliably evaluable skills—especially those that solve document‑quality, Windows compatibility, and team‑scale distribution problems—so that Claude can be safely and efficiently used in organizational workflows.**  

---  

*All links point to the official `anthropics/skills` repository on GitHub.*

---

**Claude Code Community Digest – 2026‑09‑13**  
*Technical analyst focus: AI developer tools*  

---  

### 1. Today’s Highlights
- A minor patch **v2.1.270** was released, fixing a regression where read‑only Git commands in Bash repeatedly prompted for permission after long‑running sessions.  
- Community activity remained high on issue tracking: 50 issues were updated in the last 24 h, with the most‑commented threads centering on prompt‑cache waste, usage‑limit messaging inaccuracies, and Windows stability (BSOD).  

---  

### 2. Releases  
| Version | What’s changed | Link |
|---------|----------------|------|
| **v2.1.270** | Fixed read‑only Git commands in Bash unexpectedly asking for permission after a session had been running for a while (regression introduced in v2.1.269). | [v2.1.270 release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.270) |

---  

### 3. Hot Issues (selected 10)  

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| **[#63930](https://github.com/anthropics/claude-code/issues/63930)** | Prompt cache fully re‑created after turns with many parallel tool calls – ~74% of cache writes wasted on Opus 4.8 | Highlights a costly inefficiency in the core caching mechanism that directly inflates token usage and latency for power users. | 12 comments, 7 👍 – strong signal that the cache‑invalidation regression is a priority for optimization. |
| **[#80912](https://github.com/anthropics/claude-code/issues/80912)** | Windows kernel BSOD (0x139) in VS Code session | A hard‑crash that aborts the developer workflow; mirrors an earlier bug (#30137) suggesting a systemic Windows‑specific issue. | 9 comments – users are urging a root‑cause fix; no 👍 yet but visibility is high. |
| **[#86059](https://github.com/anthropics/claude-code/issues/86059)** | Receiving session interrupted when a cross‑session message arrives, afterwards has no knowledge of the message | Breaks the promised “Cowork” multi‑session experience, causing lost context and frustration in collaborative flows. | 6 comments, 1 👍 – indicates early adopters are hitting this regression. |
| **[#70161](https://github.com/anthropics/claude-code/issues/70161)** | Statusline OSC 8 hyperlinks no longer clickable (regression in 2.1.181) | Removes a useful navigation aid for developers who rely on clickable paths in the statusline; a UX regression. | 5 comments, 3 👍 – modest but noticeable impact on daily CLI usage. |
| **[#74329](https://github.com/anthropics/claude-code/issues/74329)** | Stdio MCP server that exits mid‑session: lazy reconnect serves one call, then tools are wrongly deregistered while respawned process leaks | Affects reliability of custom MCP integrations; tool leakage can accumulate resources over long sessions. | 5 comments – developers building custom agents are watching this closely. |
| **[#71711](https://github.com/anthropics/claude-code/issues/71711)** | Gmail claude.ai connector won’t surface in CLI while Calendar/Drive work | Points to an incomplete rollout of the new Claude‑AI MCP connector suite, limiting email‑based automation. | 5 comments – users with mixed Google‑Workspace reliance are affected. |
| **[#86828](https://github.com/anthropics/claude-code/issues/86828)** | Cloud sessions: GitHub gate overrides "Full" network access – anonymous public‑repo API/HTML reads 403 | Undermines the advertised “Full” network policy, breaking scripts that need unauthenticated GitHub access inside Claude Code web. | 2 comments, 1 👍 – a growing concern for web‑based workflows. |
| **[#86857](https://github.com/anthropics/claude-code/issues/86857)** | Workspace trust dialog fails to prompt on launch, silently disabling gated features (e.g., statusLine) | Prevents trusted‑workspace features from activating, leading to silent loss of functionality after project switches. | 2 comments – indicates a settings‑persistence bug that needs attention. |
| **[#86280](https://github.com/anthropics/claude-code/issues/86280)** | All Cowork projects lost — local‑agent‑mode‑sessions recreated empty after macOS update/reboot; cleanupPeriodDays=30 default silently deleted session transcripts | Data‑loss risk for collaborative projects; highlights both OS‑level session‑store fragility and overly aggressive cleanup defaults. | 2 comments – users are requesting safer defaults and better backup/restore. |
| **[#85352](https://github.com/anthropics/claude-code/issues/85352)** | ClAudit false‑positive while: “just clear it then…” (session‑halted) | Shows that the automated usage‑policy / cyber‑security filters are over‑blocking legitimate commands, halting work unnecessarily. | 2 comments, 1 👍 – false‑positive fatigue is a recurring pain point. |

---  

### 4. Key PR Progress (all open PRs updated in the last 24 h)  

| PR | Summary | Link |
|----|---------|------|
| **[#93912](https://github.com/anthropics/claude-code/pull/93912)** | Adds unit tests for the `diff`, `sec-default`, and `telemetry` mods, typed against the plugin declarations. Tests run in‑process with the engine’s own `$` and hooks, improving confidence when modifying core mod behavior. | [PR #93912](https://github.com/anthropics/claude-code/pull/93912) |
| **[#61716](https://github.com/anthropics/claude-code/pull/61716)** | Documentation update: adds troubleshooting steps for the false “usage limit reached” error caused by context overflow (related to #50321). Guides users to switch to a 1M‑token model or manually compact before hitting the limit. | [PR #61716](https://github.com/anthropics/claude-code/pull/61716) |

---  

### 5. Feature Request Trends (derived from Issues & PRs)  

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Persistent collaborative state** | Issues #93910 (persist open tasks in Progress panel), #86059 (cross‑session message loss), #86280 (Cowork project loss) | Users want Cowork sessions to survive restarts, OS updates, and accidental clears; durability of shared state is a top request. |
| **Accurate usage‑limit messaging** | Issues #77469, #74165, #87007 (limit banner vs actual reset), #61716 (doc for false limit) | The community repeatedly hits misleading limit notices; clearer, real‑time accounting is desired. |
| **Network‑policy fidelity in cloud/web** | Issue #86828 (GitHub gate overrides Full access) | Users executing web‑based Claude Code expect the advertised network mode to be honored; they request a fix or explicit documentation of exceptions. |
| **Improved prompt‑cache efficiency** | Issue #63930 (cache waste) | Power users are sensitive to token cost; they ask for smarter invalidation or configurable cache thresholds. |
| **Better Windows stability** | Issues #80912 (BSOD), plus several Windows‑specific stale bugs | Windows developers are asking for more rigorous testing and crash‑report tooling to avoid hard‑freeze interruptions. |
| **Reduced false‑positive security blocks** | Multiple ClAudit false‑positive issues (#85352, #85348, #85346, etc.) | Users want tunable safety‑filter sensitivity or a whitelisting mechanism to prevent legitimate dev commands from being halted. |

---  

### 6. Developer Pain Points (recurring frustrations)  

1. **Token‑usage opacity** – Prompt‑cache thrashing and misleading usage‑limit messages cause unexpected cost spikes and workflow interruptions.  
2. **Environment‑specific instability** – Windows BSODs and macOS trust‑dialog failures create platform‑specific reliability concerns.  
3. **Collaborative session fragility** – Cowork features lose state after updates, reboots, or cross‑session messages, eroding trust in multi‑developer workflows.  
4. **Over‑aggressive safety filtering** – Frequent false‑positive ClAudit halts force developers to interrupt work and file tickets, reducing productivity.  
5. **Inconsistent network policies in cloud mode** – GitHub‑specific egress overrides break the “Full” network promise, complicating scripts that rely on unauthenticated public‑API access.  

Addressing these pain points—particularly cache efficiency, accurate limit reporting, and collaborative durability—will likely yield the biggest satisfaction gains for the Claude Code developer community.  

---  

*Prepared for internal distribution; all links point to the corresponding GitHub resources.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex Community Digest – 2026‑09‑13**  

---

### 1. Today's Highlights
- No new releases were published in the last 24 h, but activity remains high in the issue tracker with several critical bugs gaining traction (notably iOS Remote regressions and GPT‑6 Astra quota‑burn reports).  
- A wave of closed pull‑requests from the internal *copyberry[bot*] focused on improving the CLI/TUI experience: recap handling, token visibility, model grouping, voice‑caption persistence, and Windows sandbox routing.  
- Community discussion continues to centre on **rate‑limit transparency**, **cross‑platform stability (iOS/Windows/macOS)**, and **session‑management enhancements** such as automatic naming, colour‑coding, and clearer context handling.

---

### 2. Releases
*None reported in the last 24 h.*

---

### 3. Hot Issues (10 picked)

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| [#36040](https://github.com/openai/codex/issues/36040) | **iOS Remote only lists projects with recent chats** – regression in the ChatGPT mobile app when using Remote Control. | Blocks iOS users from accessing older projects, disrupting workflow for remote‑first developers. | 42 comments, 1 👍 – active discussion with multiple reproduction steps. |
| [#42987](https://github.com/openai/codex/issues/42987) | **GPT‑6 Astra Medium consumes 100 % of Plus 5‑hour quota in two short turns** on Windows/CLI. | Highlights a severe quota‑burn issue that can exhaust a subscription in minutes, eroding trust in usage metering. | 21 comments, 14 👍 – strong concern from Pro/Plus subscribers. |
| [#25820](https://github.com/openai/codex/issues/25820) | **Codex CLI login blocked by phone‑verification rate limit** for Pro subscribers. | Prevents authentication for a paying user base; forces reliance on work‑arounds or delays onboarding. | 15 comments, 6 👍 – repeated mentions of the same blocker across time zones. |
| [#14339](https://github.com/openai/codex/issues/14339) | **Enhancement: Clear context before implementing plan** (CLOSED). | Mirrors a feature present in Copilot/Claude Code; users want explicit control over context when executing plans. | 15 comments, 27 👍 – high endorsement despite being closed (likely implemented elsewhere). |
| [#22779](https://github.com/openai/codex/issues/22779) | **Completed subagents continue to count against thread limit**. | Leads to premature thread‑limit hits, forcing users to recycle sessions or lose work. | 15 comments, 1 👍 – noted as a subtle but impactful resource‑management bug. |
| [#31376](https://github.com/openai/codex/issues/31376) | **`codex exec` hangs indefinitely before SSE stream starts (no timeout/retry)** on Windows/Linux. | Causes CI/CD pipelines and long‑running automation to stall indefinitely, requiring manual kills. | 14 comments, 3 👍 – frustration over lack of retry/back‑off logic. |
| [#44781](https://github.com/openai/codex/issues/44781) | **Editing/resending a queued message triggers “App‑server queued follow‑up no longer exists”** on Desktop. | Interrupts iterative editing flows; users lose the ability to refine prompts without restarting. | 13 comments, 17 👍 – notable uptake of 👍 indicating widespread impact. |
| [#41849](https://github.com/openai/codex/issues/41849) | **VS Code Remote‑SSH reconnection leaves stale app‑server holding thread writer; new session blocked**. | Breaks the remote‑development workflow; users must manually kill stale processes to regain access. | 8 comments, 7 👍 – strong support from the Remote‑SSH power‑user segment. |
| [#34239](https://github.com/openai/codex/issues/34239) | **Closing in‑app Browser tab silently terminates Codex during WebView teardown** (Windows). | Unexpected loss of state when users close a tab, leading to data loss and confusion. | 8 comments, 1 👍 – highlighted as a stability regression. |
| [#43951](https://github.com/openai/codex/issues/43951) | **Response‑selection annotation control disappears mid‑session** on Desktop. | Removes a UI affordance for selecting and annotating model output, reducing usability for iterative refinement. | 7 comments, 1 👍 – recurring UI‑state bug reported across versions. |

---

### 4. Key PR Progress (10 picked)

| # | PR | Summary & Impact |
|---|----|-------------------|
| [#45090](https://github.com/openai/codex/pull/45090) | **Preserve conversation context and separate next actions in recaps** – improves recap quality by keeping relevant history while clearly delineating pending steps. |
| [#45089](https://github.com/openai/codex/pull/45089) | **Delay automatic recaps (3 → 30 min) and compact TUI layout** – reduces noise in long sessions and gives users more control over when summaries appear. |
| [#44970](https://github.com/openai/codex/pull/44970) | **Show task tokens and usage estimates in the agent command center** – brings transparency to token consumption and cost, directly addressing quota‑concern pain points. |
| [#44969](https://github.com/openai/codex/pull/44969) | **Open tasks managed elsewhere as read‑only history in the command center** – enables users to review cross‑server work without needing to switch contexts. |
| [#44957](https://github.com/openai/codex/pull/44957) | **Add model grouping to the agent command center** – lets users sort/filter tasks by model (e.g., Sol, Astra, Luna) for easier tracking. |
| [#44952](https://github.com/openai/codex/pull/44952) | **Keep voice captions visible across speaker updates and history handoff** – fixes disappearing captions, improving accessibility and reviewability of voice‑driven interactions. |
| [#44948](https://github.com/openai/codex/pull/44948) | **Add context snapshots for async questions and plugin refresh** – ensures that asynchronous UI prompts and plugin reloads preserve necessary context, reducing lost state. |
| [#44946](https://github.com/openai/codex/pull/44946) | **Retire Friendly and Pragmatic personality selection** – simplifies the model‑preset system by removing legacy personality flags, paving the way for unified instruction handling. |
| [#44945](https://github.com/openai/codex/pull/44945) | **Route TUI Windows sandbox setup through the app server** – centralises sandbox‑initialisation logic, aiming to eliminate the “SetNamedSecurityInfoW error 5” and similar elevation failures. |
| [#45039](https://github.com/openai/codex/pull/45039) | **Use gzip compression level 6 for Codex package archives** – reduces download size for CLI/Desktop distributions, improving installation speed and bandwidth usage. |

---

### 5. Feature Request Trends
- **Session & UI Management**: automatic naming/colour‑coding of agent sessions ([#44093]), persistent voice captions, and better tab/window handling (avoid silent termination on close).  
- **Context & Recap Controls**: explicit “clear context before plan” ([#14339]), smarter recaps that preserve relevant history while separating actions ([#45090]), and delay‑tunable recaps.  
- **Usage Transparency**: real‑time token/usage display in the CLI/TUI ([#44970]) and clearer quota breakdowns per model/plan.  
- **Model Organisation**: grouping tasks by model in the command center ([#44957]) and clearer distinctions between Sol/Astra/Luna behaviour.  
- **Cross‑Platform Stability**: fixing iOS Remote project listing, Windows sandbox elevation, and VS Code Remote‑SSH stale‑server issues.  

---

### 6. Developer Pain Points
- **Rate‑Limit Surprises**: GPT‑6 Astra and other models burning through hourly/weekly quotas unexpectedly; lack of granular usage feedback leads to abrupt throttling.  
- **Authentication & Onboarding**: Phone‑verification rate limits blocking CLI login for Pro users; repeated auth friction reported across platforms.  
- **Remote / Cross‑Device Reliability**: iOS Remote only showing recent projects, iPad app freezing, and Remote‑SSH leaving stale app‑servers that block new sessions.  
- **Silent Failures & Hangs**: `codex exec` hanging without timeout, WebView teardown terminating the desktop app, and sandbox elevation failures on Windows.  
- **Resource Accounting**: Completed subagents still counting toward thread limits, causing premature session caps.  
- **UI Instability**: Annotation controls disappearing, response‑selection UI vanishing, and occasional visualartifacts requiring screen redraws.  

*Addressing these pain points—particularly quota transparency, reliable cross‑platform remote workflows, and more predictable session/resource handling—would significantly improve developer satisfaction with Codex.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI Community Digest – 2026‑09‑13**

---

### 1. Today’s Highlights
- A new nightly release **v0.61.0‑nightly.20260912.g9c1b0a610** landed, containing a critical security fix that blocks indirect prompt injection via build‑file modifications and hardens the sandbox filesystem.  
- Community discussion is focused on agent reliability (sub‑agent hang‑ups, recovery after MAX_TURNS, and memory‑system quirks) and UI smoothness (terminal flicker, prompt‑input contention).  

---

### 2. Releases
**v0.61.0‑nightly.20260912.g9c1b0a610**  
- **fix(core):** Prevent indirect prompt injection through unsanitized build‑file changes or untrusted flags ([#29250](https://github.com/google-gemini/gemini-cli/pull/29250)).  
- **fix(sandbox):** Harden filesystem boundaries and isolate runtime state to stop host‑directory leakage ([#29214](https://github.com/google-gemini/gemini-cli/pull/29214)).  

*No other version tags appeared in the last 24 h.*

---

### 3. Hot Issues (10 picks)

| # | Issue | Comments / 👍 | Why it matters |
|---|-------|---------------|----------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after MAX_TURNS reported as GOAL success | 13 💬 / 2👍 | Mis‑reporting hides genuine interruptions, making debugging of long‑running agents unreliable. |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | Leverage model’s bash affinity via Zero‑Dependency OS Sandboxing & Post‑Execution Intent Routing | 9 💬 / 1👍 | Aims to let Gemini 3 use native bash tools safely – a high‑impact performance/UX direction. |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs | 8 💬 / 8👍 | Persistent hang after simple actions (folder creation) forces users to disable sub‑agent delegation, degrading automation. |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Assess the impact of AST‑aware file reads, search, and mapping | 7 💬 / 1👍 | Epic tracking AST‑aware tooling; could drastically cut turn count and token noise for codebase navigation. |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini does not use skills and sub‑agents enough | 6 💬 / 0👍 | Indicates a gap between available agent capabilities and the model’s autonomous selection. |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Add deterministic redaction and reduce Auto Memory logging | 5 💬 / 0👍 | Addresses privacy‑leak risk where secrets are logged before redaction. |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Stop Auto Memory from retrying low‑signal sessions indefinitely | 4 💬 / 0👍 | Prevents wasted CPU cycles and log‑bloat from useless memory‑inbox retries. |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell command execution gets stuck with “Waiting input” after completion | 4 💬 / 3👍 | Simple CLI calls leave the UI in a waiting state, breaking workflow automation. |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | Enhance browser_agent resilience: Automatic session takeover and lock recovery | 4 💬 / 0👍 | Improves reliability of the browser sub‑agent under persistent‑profile usage. |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent fails in Wayland | 4 💬 / 1👍 | Platform‑specific blocker for Linux users running Wayland compositors. |

---

### 4. Key PR Progress (10 picks)

| # | PR | Summary |
|---|----|---------|
| [#29292](https://github.com/google-gemini/gemini-cli/pull/29292) | **fix(checkpoint):** Validate `history` is an array when loading checkpoints – avoids treating corrupted JSON as valid state. |
| [#29294](https://github.com/google-gemini/gemini-cli/pull/29294) | **fix(cli):** Prevent terminal flickering caused by stdout contention & cursor focus – resolves aggressive tearing during fast typing. |
| [#29230](https://github.com/google-gemini/gemini-cli/pull/29230) | **docs:** Fix dead anchors across guides – restores correct internal links in CLI documentation. |
| [#29208](https://github.com/google-gemini/gemini-cli/pull/29208) | **fix(core):** Fall back to empty on malformed `agents.json` – stops crashes when the agent config is null/scalar/array. |
| [#29205](https://github.com/google-gemini/gemini-cli/pull/29205) | **fix(cli):** Submit MCP prompt text without JSON encoding – preserves quotes/newlines exactly as returned by MCP servers. |
| [#29200](https://github.com/google-gemini/gemini-cli/pull/29200) | **fix(core):** Enforce MCP policy consistently at runtime – aligns server‑name matching and treats empty allow‑list as fail‑closed. |
| [#29217](https://github.com/google-gemini/gemini-cli/pull/29217) | **fix(config):** Don’t rewrite explicit `gemini-2.5-flash` model selection – prevents silent upgrade to 3.5‑flash when a user pins 2.5‑flash. |
| [#29211](https://github.com/google-gemini/gemini-cli/pull/29211) | **fix(cli):** Stop scheduling state updates from inside a state updater – fixes React‑style illegal nested setState calls. |
| [#29201](https://github.com/google-gemini/gemini-cli/pull/29201) | **fix(cli):** Preserve approved shell commands across confirmation retries – eliminates infinite permission‑loop for multi‑injection TOML commands. |
| [#29203](https://github.com/google-gemini/gemini-cli/pull/29203) | **fix(security):** Strip shell wrappers carrying extra flags – broadens `bash -c` / `powershell -Command` detection to ignore ancillary flags. |

---

### 5. Feature Request Trends
- **AST‑aware tooling** (issues #22745, #22746): Community wants syntax‑tree based reads/search to reduce turns and token noise.  
- **Better sub‑agent autonomy** (issues #21968, #21409, #22323): Requests for the model to more reliably pick and recover from skills/sub‑agents without explicit prompting.  
- **Memory & logging hygiene** (issues #26525, #26522, #26523): Deterministic redaction, bounded Auto‑Memory retries, and visibility of invalid memory patches.  
- **Browser agent resilience** (issues #22232, #21983): Automatic session takeover, lock recovery, and Wayland compatibility.  
- **Tool‑limit handling** (issue #24246): Smart capping or dynamic selection when >128 tools are available to avoid 400 errors.  
- **Configuration stability** (issues #20079, #21335): Symlink‑aware agent discovery and persistent `/compress` across sessions.  

---

### 6. Developer Pain Points
- **Agent hangs / unresponsiveness** – frequent reports of the generalist or browser sub‑agent freezing after simple actions (e.g., folder creation, Vite prompts).  
- **Terminal UI glitches** – flickering and tearing when background commands run while typing, degrading the interactive experience.  
- **Security‑related annoyances** – prompt‑injection risks via build files, over‑permissive sandbox mounts, and memory logs that may retain secrets before redaction.  
- **Configuration fragility** – crashes on malformed `agents.json`, loss of `/compress` state on resume, symlink‑based agents not being recognized.  
- **Tool‑management overhead** – hitting hard limits on available tools (400+), leading to HTTP 400 errors and forcing users to manually curate tool sets.  
- **Memory system inefficiencies** – Auto‑Memory repeatedly processing low‑signal sessions and lacking deterministic redaction, causing noisy logs and wasted cycles.  

*All links point to the canonical GitHub repository: https://github.com/google-gemini/gemini-cli*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest – 2026‑09‑13**  

---

### 1. Today's Highlights  
No new releases were shipped in the last 24 h, but the repository saw active triaging and bug‑fix work: a JavaScript heap‑out‑of‑memory crash on Linux (Issue #4725) continued to draw attention, while several usability enhancements (e.g., `/remove-dir`, Ctrl‑T prompt enqueue) were proposed and discussed. Dependency maintenance PRs updated GitHub Actions to newer versions, keeping the CI pipeline current.

### 2. Releases  
*None* – no new versions published in the past day.

### 3. Hot Issues  
| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| #4725 | [Frequent JavaScript heap out of memory (Linux)](https://github.com/github/copilot-cli/issues/4725) | Repeated OOM crashes destabilize the CLI on Linux, affecting reliability for heavy workloads. | 4 comments, 1 👍; users confirm the pattern and request a memory‑usage fix. |
| #4824 | [Ctrl‑T enqueue prompt doesn’t work](https://github.com/github/copilot-cli/issues/4824) | The Ctrl‑T shortcut fails to trigger queued prompts, breaking a core workflow for rapid iteration. | 1 comment, 0 👍; reporters note the UI hangs on “Working”. |
| #4759 | [Copilot CLI should send MCP cancellation requests](https://github.com/github/copilot-cli/issues/4759) | Missing MCP cancellation leaves hanging tool calls when users abort, wasting resources. | 1 comment, 0 👍; acknowledged as a spec‑compliance gap. |
| #4831 | [One pasted image and claude‑opus‑5 won’t look at any more images](https://github.com/github/copilot-cli/issues/4831) | After a single image paste, subsequent `view` calls are blocked, limiting multimodal workflows. | 0 comments, 0 👍; highlights a state‑leak bug in image handling. |
| #4830 | [Add /remove-dir command to revoke directory access](https://github.com/github/copilot-cli/issues/4830) | Provides symmetry with `/add-dir`; essential for least‑privilege session management. | 0 comments, 0 👍; feature request welcomed by power users. |
| #4829 | [Subagents executing long tool‑call sequences fail prompt caching & increase token consumption](https://github.com/github/copilot-cli/issues/4829) | Long subagent runs bypass caching, inflating costs and latency for autonomous agents. | 0 comments, 0 👍; points to a performance regression in v1.0.83. |
| #4825 | [HydraFusion: emit per‑phase model, verdict and credit attributes to OpenTelemetry](https://github.com/github/copilot-cli/issues/4825) | Better observability of hybrid model routing aids debugging and cost attribution. | 0 comments, 0 👍; aligns with requests for richer telemetry. |

*Note: Only 7 issues were updated in the last 24 h; all are listed above.*

### 4. Key PR Progress  
| # | PR | Description |
|---|----|-------------|
| #4828 | [Bump actions/github-script from 7.1.0 → 9.0.0](https://github.com/github/copilot-cli/pull/4828) | Updates the GitHub Actions scripting dependency, bringing new API features and security fixes. |
| #4827 | [Bump actions/stale from 9.1.0 → 11.0.0](https://github.com/github/copilot-cli/pull/4827) | Upgrades the stale‑issue automation tool, improving handling of issue lifecycle policies. |
| #4808 | [Pin GitHub Actions to commit SHAs (closed)](https://github.com/github/copilot-cli/pull/4808) | Locks all `uses:` references to immutable SHAs, enhancing supply‑chain security and reproducibility. |

### 5. Feature Request Trends  
- **Session‑state management** – Requests for symmetric add/remove directory commands (#4830) and better control over queued prompts (#4824).  
- **Observability & telemetry** – Calls for granular HydraFusion metrics in OpenTelemetry (#4825) and MCP cancellation signaling (#4759).  
- **Multimodal handling** – Need to reset image‑view limits after a paste (#4831) and avoid state leaks.  
- **Performance & cost efficiency** – Improving prompt caching for long subagent runs (#4829) and addressing memory leaks on Linux (#4725).

### 6. Developer Pain Points  
- **Memory stability** – Frequent OOM crashes on Linux disrupt long‑running sessions.  
- **Workflow interruptions** – UI hangs when enqueued prompts aren’t executed (Ctrl‑T) and when image view limits are incorrectly enforced.  
- **Lack of granular controls** – No easy way to rescind directory access or cancel MCP‑based tool calls mid‑flow.  
- **Observability gaps** – Limited insight into which model/phase contributed to a response, hindering debugging and cost tracking.  

---  

*All links point to the respective GitHub items in the `github/copilot-cli` repository.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-09-13

## 1. Today's Highlights
No new releases or pull requests were published in the last 24 hours, but three existing issues received updates. An open enhancement request (#2370) asks for a Steer (⚡) button in the Web UI queue panel, while two older bug reports (#1409, #1404) were closed.

## 3. Hot Issues
Only three issues were updated in the trailing 24‑hour window; all are listed below.

- **#2370 [OPEN] [enhancement] Feature Request: Add Steer (⚡) button to Web UI queue panel**  
  URL: MoonshotAI/kimi-cli Issue #2370  
  *Why it matters:* When the AI is running and a user sends a follow‑up message via `kimi web` (Windows PowerShell), the message enters a queue with no mid‑run control. A Steer button would let users redirect or interrupt the active task, improving interactive workflows.  
  *Community reaction:* 2 👍, 1 comment — modest but positive interest.

- **#1409 [CLOSED] [bug] kimi cli web mode keeps refreshing and connects different port**  
  URL: MoonshotAI/kimi-cli Issue #1409  
  *Why it matters:* On Darwin (arm64) the `/web` coding session suffered from repeated page refreshes and port hops, breaking continuity. Closure suggests a fix or stale‑issue cleanup.  
  *Community reaction:* 0 👍, 0 comments — silent close.

- **#1404 [CLOSED] [bug] Reckless behaviour**  
  URL: MoonshotAI/kimi-cli Issue #1404  
  *Why it matters:* User reported the model (kimi‑for‑coding) produced a plan and presentation without sufficient guardrails, indicating concerns about autonomous actions. Closed without comment.  
  *Community reaction:* 0 👍, 0 comments.

## 4. Key PR Progress
No pull requests were updated in the last 24 hours (0 items).

## 5. Feature Request Trends
The sole active feature request (#2370) points to a clear direction: **enhancing Web UI interactivity and user control during AI execution**. Specifically, users want inline queue management (steering/interrupting) rather than passive waiting. No other feature themes emerged from the recently updated items.

## 6. Developer Pain Points
Recent updates surface two isolated but notable friction points:
- **Web mode stability** – unexpected refreshes and port changes in `/web` sessions ( #1409 ) hinder long‑running tasks.
- **Unpredictable AI autonomy** – reports of the model taking broad actions (planning, presenting) without explicit step‑by‑step confirmation ( #1404 ) reflect a need for safer, more controllable agent behaviour.

*(Note: With only three issues and zero PRs in the window, the digest reflects limited activity; trends are drawn from available data.)*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode Community Digest – 2026‑09‑13**  
*Generated from GitHub activity in the `anomalyco/opencode` repository (last 24 h). No new releases were published.*

---

### 1. Today's Highlights
- Clipboard‑copy failures dominate the discussion: multiple open issues report that the “Copied to clipboard” toast appears but the text never reaches the system clipboard in VS Code‑based terminals, Docker, web‑VS Code (GitHub Codespaces, code‑server), Windows terminals, and macOS extensions.  
- A recurring stability pain point is the 5‑minute *Headers Timeout Error* when using slow local OpenAI‑compatible providers, even when the provider’s timeout is set to `false` or a large value.  
- Feature‑request activity is picking up around remote approval of permission prompts (mobile/second‑device) and UI ergonomics (double‑click to maximize panes, better sub‑agent ID exposure).

---

### 2. Releases
*No new versions were released in the last 24 h.*

---

### 3. Hot Issues  
*(Selected by comment count and community impact; 👍 = up‑votes, 💬 = comments)*  

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| **[#4283](https://github.com/anomalyco/opencode/issues/4283)** | *Copy To Clipboard is not working* – generic copy‑paste regression in the CLI. | Core UX blocker; affects every user who tries to snip code from the assistant. | 👍 123 • 💬 131 |
| **[#13984](https://github.com/anomalyco/opencode/issues/13984)** | *Cannot copy and paste in opencode CLI* – UI shows toast but paste yields nothing. | Same symptom as #4283, reproduced on different setups, indicating a deeper clipboard‑integration flaw. | 👍 32 • 💬 57 |
| **[#41470](https://github.com/anomalyco/opencode/issues/41470)** | *“Copied to clipboard” doesn’t work* – VS Code Server (Docker) specific. | Highlights environment‑specific breakage; many devs run OpenCode inside containers. | 👍 1 • 💬 22 |
| **[#26459](https://github.com/anomalyco/opencode/issues/26459)** | Clipboard copy fails in web‑based VSCode terminals (code‑server, GitHub Codespaces, Remote SSH, Gitpod). | Blocks usage in cloud‑dev‑workflow contexts where OpenCode is increasingly adopted. | 👍 2 • 💬 14 |
| **[#26602](https://github.com/anomalyco/opencode/issues/26602)** | Desktop hits 5‑minute *Headers Timeout Error* with slow local providers. | Prevents long‑running local‑model experiments; the timeout is hard‑coded and ignores user config. | 👍 2 • 💬 12 |
| **[#36761](https://github.com/anomalyco/opencode/issues/36761)** | *[bug, core, 2.0] expose valid subagent IDs to the model* – V2 subagent tool hides IDs, causing guesswork and failed delegations. | Limits the usefulness of the new sub‑agent feature; forces users to trial‑and‑error IDs. | 👍 1 • 💬 7 |
| **[#32985](https://github.com/anomalyco/opencode/issues/32985)** | OpenCode does not work well inside GNU Screen (no truecolor, broken copy/paste, no mouse support). | Affects users relying on terminal multiplexers for remote work; shows broader TTY compatibility gaps. | 👍 3 • 💬 5 |
| **[#44056](https://github.com/anomalyco/opencode/issues/44056)** | TUI mouse copy drops blank lines between markdown paragraphs (`\n\n → \n`). | Corrupts formatted output when users select with the mouse; reduces trust in copy‑pasted snippets. | 👍 0 • 💬 3 |
| **[#47258](https://github.com/anomalyco/opencode/issues/47258)** | Event stream (SSE) doesn’t resume after tab is backgrounded and restored — requires manual page refresh. | Breaks seamless workflow in browser‑based UIs; forces extra clicks to recover. | 👍 0 • 💬 3 |
| **[#48661](https://github.com/anomalyco/opencode/issues/48661)** | *[FEATURE] Desktop: Double‑click Review / Context tab to maximize/restore pane (JetBrains‑style)*. | Popular UI ergonomics request; would improve multitasking inside the desktop app. | 👍 0 • 💬 3 |

---

### 4. Key PR Progress  
*(Selected for significance of fix or feature; all are closed/merged in the last 24 h)*  

| # | PR | Summary |
|---|----|---------|
| **[#42150](https://github.com/anomalyco/opencode/pull/42150)** | `fix(opencode): make text/reasoning delta accumulation O(N) instead of O(N²)` – resolves performance degradation in long sessions where token accumulation became quadratic. |
| **[#42112](https://github.com/anomalyco/opencode/pull/42112)** | `feat(tui): show token throughput` – adds a live `tok/s` metric for completed assistant steps, helping users gauge model speed. |
| **[#42102](https://github.com/anomalyco/opencode/pull/42102)** | `fix(llm): preserve nested OpenAI stream errors` – ensures that errors from nested OpenAI Responses SSE are bubbled up instead of being swallowed. |
| **[#42101](https://github.com/anomalyco/opencode/pull/42101)** | `fix(console): add CORS to Zen responses` – adds proper CORS headers to Zen model‑list endpoints, fixing cross‑origin calls from the browser UI. |
| **[#42095](https://github.com/anomalyco/opencode/pull/42095)** | `fix(desktop): stop sidecar before quitting` – cleanly shuts down the Electron NodeService utility on Linux to avoid SIGABRT on exit. |
| **[#42087](https://github.com/anomalyco/opencode/pull/42087)** | `fix(desktop): restrict application launches` – limits desktop IPC to only whitelisted apps, resolves Windows path validation, and adds fallbacks for unsupported launchers. |
| **[#42084](https://github.com/anomalyco/opencode/pull/42084)** | `fix: preserve trailing blank line in apply_patch` – prevents silent removal of a final `\n` when applying patches, preserving file formatting. |
| **[#42063](https://github.com/anomalyco/opencode/pull/42063)** | `fix(opencode): reject empty compaction summaries` – treats a compaction that finished with reasoning but no text as a failure, avoiding silent data loss. |
| **[#42056](https://github.com/anomalyco/opencode/pull/42056)** | `fix(tui): keep session directory filter toggle usable in the picker` – makes the directory‑filter key binding work inside the session picker UI. |
| **[#42052](https://github.com/anomalyco/opencode/pull/42052)** | `feat(tui): display chained shell commands across multiple lines` – renders `&&`‑chained commands with back‑continuations for readability in the session view and permission prompt. |

---

### 5. Feature Request Trends  
- **Remote / multi‑device approval** – #39628 (mobile/second‑device approval of permission requests) and similar asks indicate a desire to unlock long‑running sessions when the user is away from the primary workstation.  
- **Desktop UI ergonomics** – #48661 (double‑click to maximize/restore panes) and #48661‑style requests point to a JetBrains‑like workspace experience.  
- **Sub‑agent discoverability** – #36761 (expose subagent IDs) reflects a need for better introspection of the new V2 subagent system.  
- **Clipboard reliability across environments** – a cluster of issues (#4283, #13984, #41470, #26459, #35258, #39588) shows the community’s top priority is making copy‑paste work everywhere (containers, web‑VS Code, Windows, macOS).  
- **Timeout configurability for local providers** – #26602 (hard 5‑minute header timeout) signals a request to make the timeout truly user‑configurable or to detect stalls more intelligently.  

---

### 6. Developer Pain Points  
1. **Clipboard copy/paste** – The most frequent and up‑voted bug class; users see a false “Copied to clipboard” notification but the system clipboard stays empty across Docker, web‑VS Code, Windows terminals, and macOS extensions.  
2. **Provider‑side timeouts** – Local OpenAI‑compatible providers abort after exactly five minutes regardless of user‑set timeout values, forcing users to restart runs.  
3. **TTY/multiplexer compatibility** – Issues inside GNU Screen, missing truecolor, and broken mouse support limit usage in remote‑server workflows.  
4. **SSE stream resilience** – Event streams do not automatically recover after a tab is backgrounded or after brief network hiccups, requiring manual refresh.  
5. **Formatting loss on mouse copy** – The TUI’s mouse‑selection collapses blank lines in markdown, breaking snippets that rely on paragraph spacing.  
6. **Sub‑agent ID opacity** – In V2, the model cannot see which subagent IDs are available, leading to failed delegation attempts and a trial‑and‑error workflow.  

---  

*Prepared for the OpenCode developer community – stay tuned for the next digest.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

**Pi Community Digest – 2026‑09‑13**  
*Source: github.com/badlogic/pi-mono (earendil‑works/pi)*  

---

### 1. Today's Highlights
- The most‑discussed issue remains the intermittent **openai‑codex connection reliability** (#4945, 78 💬), where the TUI stalls on “Working…” and requires an Escape to recover.  
- Several quality‑of‑life improvements landed today: **permanent branch deletion** in the session tree (#9531), **configurable keybindings** for hard‑coded TUI shortcuts (#9514), and **grouping of long tool‑call runs** to reduce UI noise (#9517).  
- New OAuth providers continue to arrive – **Google Antigravity**, **Cursor Pro** (#9529) and a **Meta/Muse** provider (#9096) are now available, expanding the no‑API‑key login options.

### 2. Releases
*No new releases were published in the last 24 h.*

### 3. Hot Issues (selected by impact & community engagement)

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| [#4945](https://github.com/earendil-works/pi/issues/4945) | openai‑codex Connection Reliability Issues | Blocks agent workflows when the Codex stream hangs; forces manual Escape and creates aborted turns. | 78 💬, 33 👍 – highest‑commented item; users repeatedly report the stall over the past days. |
| [#9052](https://github.com/earendil-works/pi/issues/9052) | Fullscreen mode wheel scrolling 3× slower | Degrades navigation experience in the preferred fullscreen layout with fixed input box. | 9 💬, 4 👍 – notable annoyance for power‑users who switched to fullscreen. |
| [#8928](https://github.com/earendil-works/pi/issues/8928) | Parallel pi startup reports “No API key found” for ~48 s with expired OAuth creds | Multi‑process setups suffer confusing delays; error points at the wrong provider, slowing CI/local dev loops. | 7 💬, 0 👍 – highlighted as a reproducible production blocker. |
| [#9311](https://github.com/earendil-works/pi/issues/9311) | Fullscreen mouse selection survives session switch | Leads to visual clutter and accidental actions when moving between sessions. | 6 💬, 0 👍 – simple UI fix requested (clear selection on switch). |
| [#5372](https://github.com/earendil-works/pi/issues/5372) | Allow custom OAuth callback page rendering | Teams need to embed Pi’s OAuth flow in internal portals or branded login pages. | 5 💬, 0 👍 – recurring request for extensibility. |
| [#9098](https://github.com/earendil-works/pi/issues/9098) | Expose prompt disposition in RPC responses | Enables callers to distinguish handled vs. queued prompts for better UI feedback. | 4 💬, 0 👍 – useful for extension developers building status integrations. |
| [#9267](https://github.com/earendil-works/pi/issues/9267) | Reduce fuzzy session‑scan cost without changing ranking | Improves startup/responsiveness when many sessions exist; current O(n²) char‑by‑char scan is costly. | 4 💬, 1 👍 – performance‑oriented suggestion. |
| [#9262](https://github.com/earendil-works/pi/issues/9262) | Find tool ignores Windows path separators | Breaks cross‑platform workflows where users paste native Windows globs. | 4 💬, 0 👍 – highlights missing Windows‑specific handling. |
| [#9243](https://github.com/earendil-works/pi/issues/9243) | Session resume restores model from echoed name, not model_change | Causes silent model drift after resumption, confusing agent behavior. | 3 💬, 1 👍 – correctness issue for long‑running sessions. |
| [#9533](https://github.com/earendil-works/pi/issues/9533) | /fork should allow forking from the current point | Users often want to branch from the latest assistant turn rather than digging through history. | 1 💬, 0 👍 – frequent workflow request. |

### 4. Key PR Progress (selected by functional impact)

| # | PR | Description |
|---|----|-------------|
| [#9529](https://github.com/earendil-works/pi/pull/9529) | **feat(ai): add Google Antigravity and Cursor Pro OAuth providers** | Introduces two subscription‑backed, API‑key‑free login flows (OAuth via Google Cloud Code Assist and Cursor Pro). |
| [#9096](https://github.com/earendil-works/pi/pull/9096) | **feat(ai,coding-agent): add Meta provider with Muse subscription OAuth** | Adds a Meta/Muse provider; notes unusual daily‑re‑minted refresh token and currently “fake” streaming. |
| [#9531](https://github.com/earendil-works/pi/pull/9531) | **feat(tree): add permanent branch deletion from session tree** | Implements `SessionManager.pruneBranch` and UI shortcut `Shift+D` to delete a session subtree while protecting the active path. |
| [#9517](https://github.com/earendil-works/pi/pull/9517) | **feat(tui): group long tool‑call runs** | Collapses ≥6 consecutive tool calls into a single expandable transcript row, preserving failed calls and adding click‑to‑expand interaction. |
| [#9523](https://github.com/earendil-works/pi/pull/9523) | **Fix #9522: Pi's own blocking prompts do not emit ui_prompt_start / ui_prompt_end** | Ensures internal selectors (model picker, settings, resume, session tree) fire the UI prompt lifecycle events so status integrations see accurate waiting/running states. |
| [#9514](https://github.com/earendil-works/pi/pull/9514) | **fix(tui): route hardcoded keys through configurable bindings** | Replaces hard‑coded Ctrl+C, Shift‑delete, etc., with user‑definable keybindings; adds regression tests for the new behavior. |
| [#8635](https://github.com/earendil-works/pi/pull/8635) | **fix(ai): preserve aborted stop reason during lazy setup** | Passes abort signals through lazy stream wrappers and reports setup failures as aborted when the request is already cancelled. |
| [#9505](https://github.com/earendil-works/pi/pull/9505) | **fix(ai): honor model.samplingParams in the openai‑completions stream path** | Ensures engine‑specific sampling params (repetition_penalty, dry_multiplier, etc.) from `models.json` are applied in the tool‑capable stream path. |
| [#9504](https://github.com/earendil-works/pi/pull/9504) | **fix(coding-agent): accept Windows Store shell aliases** | Uses `accessSync(F_OK)` to validate shell aliases, fixing false negatives for Windows Store‑installed shells like `pwsh`. |
| [#9532](https://github.com/earendil-works/pi/pull/9532) | **(minor cleanup)** | Miscellaneous housekeeping; no functional change. |

### 5. Feature Request Trends
- **OAuth provider expansion** – repeated calls for new no‑API‑key login methods (Google Antigravity, Cursor Pro, Meta/Muse, see #5372, #9096, #9529).  
- **UI/UX polish** – requests for smoother fullscreen scrolling (#9052), persistent selection clearing (#9311), configurable keybindings (#9514), and better session‑tree manipulation (#9531, #9533).  
- **Performance & reliability** – fuzzy‑match optimisation (#9267), faster startup with expired credentials (#8928), robust stream error handling (#9520), and preserving abort semantics (#8635).  
- **Observability & extensibility** – exposing prompt disposition (#9098), emitting UI prompt events for internal dialogs (#9522/#9523), and allowing custom OAuth callback pages (#5372).  

### 6. Developer Pain Points
- **Unstable external service integration** – the openai‑codex adapter frequently stalls, forcing manual recovery and producing aborted turns (#4945).  
- **Inconsistent UI event firing** – internal Pi prompts do not emit the same lifecycle events as extension prompts, breaking status‑reporting tools (#9522).  
- **Platform‑specific gaps** – Windows glob handling in the find tool (#9262) and bash timeout leaving orphaned processes (#9129).  
- **Startup latency in multi‑process environments** – expired OAuth credentials cause prolonged “No API key found” errors that mislead debugging (#8928).  
- **Verbose tool‑call output** – long runs of similar calls flood the transcript, making it hard to locate relevant information (#9517).  
- **Limited keybinding flexibility** – hard‑coded shortcuts prevent users with atypical keyboards or preferences from adapting the TUI efficiently (#9514).  

---  

*Generated for developers tracking Pi’s evolution. All links point to the exact GitHub items referenced.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code Community Digest – 2026‑09‑13**  

---

### 1. Today’s Highlights  
- A nightly release **v0.23.3‑nightly.20260912.54aa66834b** landed, removing obsolete DingTalk background response aggregation and introducing a breaking change to the *channels* feature.  
- The community is actively tackling two high‑impact UI stability bugs (React #185 crashes when multiple background agents finish or when a native monitor task runs) and pushing several platform‑extension PRs (PWA support, container‑based sub‑agent execution, remote‑daemon SSH transport).  

---

### 2. Releases  
- **v0.23.3‑nightly.20260912.54aa66834b** – Nightly build.  
  - *refactor(dingtalk)*: removed obsolete background response aggregation.  
  - *feat(channels)!*: removed the `me` field (breaking change).  
  - [Release link](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.3-nightly.20260912.54aa66834b)  

---

### 3. Hot Issues (10)  

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| [#11500](https://github.com/QwenLM/qwen-code/issues/11500) | TUI exits silently with React #185 when multiple background agents complete | Causes sudden loss of interactive session; blocks multi‑agent workflows. | 10 comments, 👍 1 |
| [#11732](https://github.com/QwenLM/qwen-code/issues/11732) | Qwen Code 0.23.3 crashes with React #185 while a native monitor task continues | Same crash pattern as #11500 but triggered by long‑running monitor tools; affects daemon reliability. | 6 comments |
| [#11695](https://github.com/QwenLM/qwen-code/issues/11695) | Separate agent harness from execution environment | Architectural cleanup needed for sandboxing, remote execution, and better testability. | 5 comments |
| [#11704](https://github.com/QwenLM/qwen-code/issues/11704) | Official Android companion client for `qwen serve` | Demand for mobile access; would extend Qwen Code to Android thin‑client usage. | 5 comments |
| [#11577](https://github.com/QwenLM/qwen-code/issues/11577) (closed) | Checkpoint retry loop on overflowing window stalls Goal execution | Leads to infinite retries and Goal stalls; fixed in recent batching change. | 4 comments |
| [#10953](https://github.com/QwenLM/qwen-code/issues/10953) | Todo plan state goes stale while work is delegated to subagents | Breaks UI feedback for long‑running subagent sessions; impacts task tracking. | 4 comments |
| [#11587](https://github.com/QwenLM/qwen-code/issues/11587) | Deferred review findings: keep one‑shot system reminders out of user message | Prevents leaking internal prompts into chat history; improves transcript hygiene. | 4 comments |
| [#11736](https://github.com/QwenLM/qwen-code/issues/11736) | Web‑shell history‑viewport smoke test consumes 75‑91% of 60 s CI budget | Indicates performance regression in E2E test suite; risks flaky CI. | 4 comments |
| [#11728](https://github.com/QwenLM/qwen-code/issues/11728) | REST docs contract guard leaves gaps – can stay green while contract violated | Undermines API documentation guarantees; needs tighter contract validation. | 4 comments |
| [#11499](https://github.com/QwenLM/qwen-code/issues/11499) | `${VAR}` placeholders in `.mcp.json` not expanded → headers sent literally | Breaks secret injection for MCP servers; a blocker for secure tooling. | 4 comments |

---

### 4. Key PR Progress (10)  

| # | PR | Summary |
|---|----|---------|
| [#11722](https://github.com/QwenLM/qwen-code/pull/11722) | **feat(web-shell): add installable PWA support** – Enables the daemon‑served Web Shell to be installed as a progressive web app with Qwen Code branding. |
| [#11691](https://github.com/QwenLM/qwen-code/pull/11691) | **feat(workflows): add effort and disallowedTools to agent() options** – Lets workflow scripts specify reasoning effort (`low`…`max`) and a tool blacklist per agent. |
| [#11636](https://github.com/QwenLM/qwen-code/pull/11636) | **feat: track background result execution across daemon and web shell** – Gives background‑result processing an explicit daemon execution lifecycle, safer model boundaries, and automatic continuation handling. |
| [#11711](https://github.com/QwenLM/qwen-code/pull/11711) | **feat(core): add container execution for subagents** – Opt‑in Docker/Podman backend for subagents via `QWEN_AGENT_EXECUTION_BACKEND` and `execution_backend: "container"`. |
| [#11727](https://github.com/QwenLM/qwen-code/pull/11727) | **fix(core): let the producer's own budget decide shell output size** – Resolves double‑sizing of shell output, preserving exit codes and signal info. |
| [#11562](https://github.com/QwenLM/qwen-code/pull/11562) | **fix(cli): keep one-shot system reminders out of the user's own message** – Prevents internal reminders from being echoed back to the user in prompts and history. |
| [#11708](https://github.com/QwenLM/qwen-code/pull/11708) | **fix(mcp): harden pooled connection lifetime and teardown ordering** – Improves MCP connection‑pool ownership tracking and makes transport‑close observable. |
| [#11643](https://github.com/QwenLM/qwen-code/pull/11643) | **fix(core): run web terminal PTYs on the bundled ConPTY backend** – Uses Windows ConPTY to avoid inbox‑backend host leaks; adds retry fallback. |
| [#11548](https://github.com/QwenLM/qwen-code/pull/11548) | **feat(web-shell): connect to a selected remote daemon** – Stand‑alone Web Shell can now target an explicit daemon address (with optional bearer token). |
| [#11692](https://github.com/QwenLM/qwen-code/pull/11692) | **feat(core): make the web_search budget configurable and bound the extractor fallback** – Introduces `WEB_SEARCH_TIMEOUT_MS` (default 120 s) and caps extracted content when timeout occurs. |

---

### 5. Feature Request Trends  
- **Mobile & companion clients** – Android thin client for `qwen serve` (issue #11704) and general interest in extending Qwen Code to phones/tablets.  
- **Remote execution** – Requests for SSH transport for execution workers (issue #11746) and container‑based subagent execution (PR #11711).  
- **Extensible UI** – PWA support for Web Shell (PR #11722) and manual context compression/overview improvements (PR #11700).  
- **Workflow control** – Granular agent options (`effort`, `disallowedTools`) to tune reasoning and tool usage (PR #11691).  
- **Security & privacy** – Proper variable expansion in `.mcp.json` (issue #11499) and tighter telemetry redaction (issues #11198, #11666).  

---

### 6. Developer Pain Points  
- **UI stability** – Recurring React #185 “Maximum update depth exceeded” crashes when background agents or monitor tasks finish (issues #11500, #11732).  
- **Resource consumption** – High memory usage reports (~7 GB) and occasional crashes on Windows (issue #11724).  
- **State synchronization** – Todo plan and history‑item IDs becoming stale or non‑monotonic when work is offloaded to subagents (issues #10953, #11743).  
- **Configuration leaks** – Missing `.mcp.json` variable expansion (issue #11499) and telemetry exporting prompts despite `logPrompts=false` (issue #11666).  
- **Input handling** – Context menus not consuming keystrokes, causing duplicate actions (issue #11228).  
- **Test/CI flakiness** – Web‑shell history‑viewport test eating most of its CI budget (issue #11736) and frequent CI failures on Windows (issue #11678).  

---  

*All links point to the corresponding GitHub items in the QwenLM/qwen-code repository.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

**DeepSeek TUI Community Digest – 2026‑09‑13**  
*Compiled from GitHub activity (issues & PRs updated in the last 24 h).*

---

### 1. Today’s Highlights
- The community is rallying around **observability and reliability**: a high‑impact token‑accounting enhancement (#6011) and a durable‑memory‑across‑sessions request (#6017) gathered notable attention, while several long‑standing stability bugs (context‑pressure handling #5620, session‑ resume ENOENT #6102, and Windows UI blocking #5923) remain open.  
- On the delivery side, the **Serply web‑search provider** was merged (#6100), symlinked user‑level context files are now respected (#6114), and a file‑scoped restore endpoint is under review (#6111), signalling continued investment in extensibility and workflow safety.

---

### 2. Releases
*No new versions were published in the last 24 h.*

---

### 3. Hot Issues  
| Issue | Why it matters | Community reaction (comments / 👍) |
|-------|----------------|-----------------------------------|
| **[#5316] EPIC‑005: CodeWhale TUI Crate Decomposition (Umbrella)** | Tracks the major refactor to split the monolithic TUI into crates – a foundational step for maintainability and parallel development. | 22 💬, 0 👍 |
| **[#5620] Context pressure warning is transient & agent does not react** | Silent context degradation undermines safety guarantees; users need proactive throttling or compaction. | 18 💬, 0 👍 |
| **[#5929] Parallel‑execution flakes in the codewhale‑tui lib suite** | Non‑deterministic test failures waste CI time and erode confidence in the test suite under load. | 8 💬, 0 👍 |
| **[#6011] feat(tui): usage & tool diagnostics – token accounting** | Provides per‑component, per‑model token usage and cache‑hit metrics – essential for cost control and performance tuning. | 6 💬, 0 👍 |
| **[#6045] user‑input modal clips options & hides typed input** | UI regression on real terminals blocks interactive workflows; fixing restores reliable prompt handling. | 5 💬, 0 👍 |
| **[#6025] DeepSeek plans to discontinue the V4 Pro service (Sept 14 2026)** | Forces migration to V4.1 Flash; impacts billing and model‑selection logic across the codebase. | 5 💬, 0 👍 |
| **[#6102] bug(session): resuming an interrupted session fails with ENOENT** | Breaks the core “resume” UX; users lose work when the runtime store dir is missing. | 5 💬, 0 👍 |
| **[#6015] feat(fleet): adaptive anti‑stall + wider read‑only shell grammar** | Improves robustness of long‑running sessions and expands safe shell capabilities – a frequently requested UX upgrade. | 4 💬, 0 👍 |
| **[#6018] Google Gemini problem on “from scratch” installation** | Blocks new users trying to integrate Gemini; resolving widens model‑provider support. | 4 💬, 0 👍 |
| **[#5856] Computer‑use plugin: live‑install receipt + first look‑act loop** | Enhances the plugin onboarding experience, reducing friction for adopters of the computer‑use toolchain. | 3 💬, 0 👍 |

*Links follow the pattern:* `https://github.com/Hmbown/DeepSeek-TUI/issues/<NUMBER>`.

---

### 4. Key PR Progress  
| PR | Summary & Impact |
|----|------------------|
| **[#6100] feat(web_search): add Serply search provider** | Adds a new `[search]` provider (Serply.io) via a simple HTTP API, expanding the web‑search toolbox beyond the existing Sofya adapter. |
| **[#6114] fix(tui): follow symlinked user‑level context files** | Resolves #6115 – user‑level `AGENTS.md` symlinks are now honoured, preventing silent loss of global instructions. |
| **[#6111] feat(tui): add a file‑scoped restore endpoint and gate the whole‑tree rollback** | Introduces per‑file revert (`/restore`) and safeguards the existing whole‑tree rollback, addressing missing fine‑grained undo capability. |
| **[#5842] feat(runtime‑api): plugin + marketplace management over /v1/apps (Engine side)** | Lays the engine‑side foundation for a gated local plugin system and marketplace, enabling future `/v1/apps` endpoints. |
| **[#5996] docs(config): document R1 turn budgets and add a [goal] example** | Updates `CONFIGURATION.md` with missing docs for `[tui].max_model_steps` and `[tui].turn_wall_clock_secs`, plus a concrete `[goal]` loop example. |
| **[#6096] feat(commands): adopt capability shapes in the TUI session‑export slice (FEAT‑025)** | Rewires `/export` through the portable command contract while keeping the command file in `codewhale‑tui` – a structural migration for future command extensibility. |
| **[#6110] feat(pet): add persistent world and work‑driven dot forms** | Introduces a shared audiovisual “pet” world that maps 980 dots to reasoning, code, filesystem, browser layers, etc., opening a new cross‑platform visualization avenue. |
| **[#6104] chore(deps): bump encoding_rs from 0.8.35 → 0.8.41** | Dependency maintenance – brings in performance and security updates for the encoding library. |
| **[#6103] chore(deps): bump dirs from 6.0.0 → 7.0.0** | Updates the directory‑handling crate, fixing potential path‑resolution edge cases on newer platforms. |
| **[#6107] chore(deps): bump flate2 from 1.1.9 → 1.1.10** | Security/maintenance bump for the compression library used throughout the codebase. |

*Links follow the pattern:* `https://github.com/Hmbown/DeepSeek-TUI/pull/<NUMBER>`.

---

### 5. Feature Request Trends  
Aggregating open issues and enhancement labels reveals the following recurring themes:

1. **Observability & Cost Control** – token accounting, per‑model/cache metrics, usage dashboards (#6011, #6025).  
2. **Persistent Context & Memory** – durable memory across sessions, workspace/git‑branch status line, cross‑session project state (#6017, #6112).  
3. **UX Polish & Reliability** – modal/input handling, copy‑on‑select/paste, anti‑stall, wider read‑only shell grammar, Windows‑specific UI blocking (#6045, #6116, #6015, #5923).  
4. **Plugin & Toolchain Ergonomics** – live‑install receipts, persistent plugin marketplace, model‑specific wire APIs, sub‑agent profile propagation (#5856, #5842, #6113, #6046).  
5. **Integration Expansion** – new search providers (Serply), broader LLM gateway support, Gemini/Flash compatibility, MCP server attachment fixes (#6100, #6018, #6030).  

---

### 6. Developer Pain Points  
- **Flaky Tests & CI Noise** – parallel‑execution test flakes (#5929) and Windows‑specific UI blocking (#5923) cause repeated reruns and erode trust in the test suite.  
- **Context Management Gaps** – transient pressure warnings without proactive agent reaction (#5620) lead to silent degradation; users must manually intervene.  
- **Session Resume Fragility** – ENOENT on resume (#6102) and dropped provider pins on agent follow‑up (#6046) break workflow continuity.  
- **Configuration & Symlink Handling** – refusal to follow symlinked user‑level files (#6115) forces duplication of global instructions.  
- **Plugin Prompt Persistency** – dismissing plugin install prompts does not stick across sessions (#6031), causing repetitive interruptions.  
- **Middleware Deadlocks** – MCP server auth mid‑session creates a permanent connection block (#6030), requiring session restarts.  

Addressing these pain points would directly improve day‑to‑day productivity and reduce support overhead for the DeepSeek TUI community.

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

**ComfyUI Community Digest – 2026‑09‑13**  
*Generated from GitHub activity in the last 24 h (no new releases).*

---

### 1. Today's Highlights
- Two fixes landed for the MiniMax H3 crash on Apple MPS (PR #16286 & PR #16285), addressing the `aten::_int_mm` fallback regression introduced in #16130.  
- Visual‑quality improvements continue: the “Add Noise to Image” node now preserves alpha channel transparency (PR #15626) and a new video‑frame strength easing option was added to MiniMax H3 Fun ControlNet (PR #16283).  
- Partner‑node ecosystem expanded with a Flux Video Edit node (PR #16259) and Gemini‑LLM v3 support (PR #16287), while Yue 2 music‑model limits were raised (PR #16290‑#16292).

---

### 2. Releases
*No new versions were published in the last 24 h.*

---

### 3. Hot Issues (10 noteworthy)

| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| [#15445](https://github.com/Comfy-Org/ComfyUI/issues/15445) | Minimax H3 workflow slower after 0.31 update | Performance regression affects a widely‑used video‑generation workflow; users report noticeable slowdowns. | 14 comments, 0 👍 – active discussion, no clear resolution yet. |
| [#16129](https://github.com/Comfy-Org/ComfyUI/issues/16129) | SeedVR2 image upscaling breaks batched images | Batched upscaling fails, breaking workflows that rely on processing multiple frames at once. | 5 comments, 0 👍 – confirmed reproducible after disabling custom nodes. |
| [#16223](https://github.com/Comfy-Org/ComfyUI/issues/16223) | `aimdo: hostbuf_read_file_slice` device‑copy error on dual‑GPU runs | Prevents running two ComfyUI instances on separate GPUs, a common setup for multi‑model pipelines. | 4 comments, 0 👍 – highlights VRAM‑contention bug in the aimdo backend. |
| [#16225](https://github.com/Comfy-Org/ComfyUI/issues/16225) | DynamicVRAM/VBAR allocation failure on RTX 5060 Laptop GPU | New laptop GPU hits allocation limits; users cannot load models despite sufficient VRAM on paper. | 2 comments, 0 👍 – early‑stage report, needs more data. |
| [#16284](https://github.com/Comfy-Org/ComfyUI/issues/16284) | MiniMax H3 crashes on MPS after #16130 (`aten::_int_mm` fallback bypass) | Blocks Apple‑silicon users from running the latest H3 models; a regression from a quantization‑disable change. | 1 comment, 0 👍 – quickly addressed by PRs #16285/#16286. |
| [#16015](https://github.com/Comfy-Org/ComfyUI/issues/16015) | CLIP input missing/invalid error | Frequent loader‑misconfiguration issue that stalls text‑to‑image pipelines. | 1 comment, 0 👍 – often tied to custom‑node or checkpoint mismatches. |
| [#15558](https://github.com/Comfy-Org/ComfyUI/issues/15558) | `svgwrite` import error | Blocks users attempting to generate SVG outputs; indicates missing dependency handling. | 1 comment, 0 👍 – stale but still impacts SVG‑export workflows. |
| [#16289](https://github.com/Comfy-Org/ComfyUI/issues/16289) | Shape mismatch in MiniMax H3 audio conditioning when combining video continuation with standalone audio reference | Prevents advanced audio‑guided video continuation, a requested feature for multimodal generation. | 0 comments, 0 👍 – newly reported, needs reproduction. |
| [#16282](https://github.com/Comfy-Org/ComfyUI/issues/16282) | MiniMax H3 Reference‑to‑Video input labels are 0‑based while prompt references are 1‑based | Causes confusion when wiring reference nodes; leads to off‑by‑one errors in prompts. | 0 comments, 0 👍 – usability issue awaiting clarification. |
| [#16279](https://github.com/Comfy-Org/ComfyUI/issues/16279) | MiniMax H3 ControlNet adaln width 8 ≠ base model timestep embedding width 2688 | Triggers runtime tensor‑shape errors when using ControlNet with H3, limiting conditioning options. | 0 comments, 0 👍 – recent bug report, high impact for control‑heavy workflows. |

---

### 4. Key PR Progress (10 important PRs)

| # | PR | Summary & Impact |
|---|----|------------------|
| [#16286](https://github.com/Comfy-Org/ComfyUI/pull/16286) | Honor disabled int8 format in fused activation kernel – fixes #16284 (MPS crash). | Ensures INT8 layers fall back to full precision on devices lacking `aten::_int_mm`. |
| [#16285](https://github.com/Comfy-Org/ComfyUI/pull/16285) | Fix `linear_input_act` to respect `_full_precision_mm` fallback – companion to #16286. | Corrects the fused linear‑activation path that ignored the fallback flag. |
| [#16283](https://github.com/Comfy-Org/ComfyUI/pull/16283) | Add video‑frame strength easing to MiniMax H3 Fun ControlNet (`fade_in_frames`, `fade_out_frames`). | Gives creators temporal control over ControlNet strength, improving smooth transitions. |
| [#16259](https://github.com/Comfy-Org/ComfyUI/pull/16259) | Partner Nodes: add Flux Video Edit node (BFL). | Introduces a new API‑driven video‑editing capability; requires pricing‑card updates. |
| [#16248](https://github.com/Comfy-Org/ComfyUI/pull/16248) | Report downloading & byte progress from partner‑node download helper. | Provides granular UI progress (instead of 0 % → 100 %) for async model fetches. |
| [#16202](https://github.com/Comfy-Org/ComfyUI/pull/16202) | Add an `activity` field to node progress and report model loading. | Distinguishes weight‑loading from computation, eliminating confusing “0 %” sampler states. |
| [#16116](https://github.com/Comfy-Org/ComfyUI/pull/16116) | Fix memory estimate for Sage, Flash, and Comfy‑Kitchen attention. | Prevents over‑reservation of VRAM when those backends are enabled, improving out‑of‑memory resilience. |
| [#16152](https://github.com/Comfy-Org/ComfyUI/pull/16152) | (Closed) Consume estimated‑duration headers for partner‑node progress display. | Uses server‑side ETA headers to show realistic progress bars for long‑running API jobs. |
| [#15451](https://github.com/Comfy-Org/ComfyUI/pull/15451) | Limit default GPU management to current device. | Avoids a Windows CUDA bug where enumerating all GPUs causes host‑to‑device copy failures. |
| [#16292](https://github.com/Comfy-Org/ComfyUI/pull/16292) | (Closed) Increase max song duration in Yue 2 node. | Raises the upper bound for generated music length, responding to user requests for longer tracks. |

*(Note: comment counts were not exposed in the data; selection based on functional significance.)*

---

### 5. Feature Request Trends
- **Multimodal model support** – Repeated requests for newer video/audio models: MiniMax H3 extensions, Flux Video Edit, Gemini‑LLM v3, Yue 2 music.  
- **Progress & UI transparency** – Demand for fine‑grained activity indicators (download, model loading, ETA) across both core and partner nodes.  
- **VRAM & multi‑GPU robustness** – Requests for better dynamic VRAM handling, multi‑instance isolation, and explicit device‑selection options to avoid allocation failures.  
- **Node‑level usability** – Calls for consistent indexing (0‑ vs 1‑based), clearer error messages (e.g., CLIP loader), and optional features like alpha‑channel preservation in noise nodes.  
- **ControlNet & conditioning enhancements** – Interest in temporal ControlNet controls (fade‑in/out) and width‑matching fixes for newer architectures.

---

### 6. Developer Pain Points
- **Device‑specific regressions** – MPS (`aten::_int_mm`) and newer laptop GPUs (RTX 5060) repeatedly surface allocation or kernel errors after core changes.  
- **VRAM over‑estimation** – Enabling attention optimizations (Sage, Flash, Comfy‑Kitchen) sometimes leads to excessive reservation, causing OOM on mid‑tier cards.  
- **Multi‑instance contention** – Running separate ComfyUI processes on different GPUs fails due to low‑level `aimdo` host‑buffer copy errors.  
- **Dependency & import issues** – Sporadic missing‑module errors (e.g., `svgwrite`) point to gaps in the bundled environment or unclear installation docs.  
- **Stale‑issue backlog** – Several user‑support tickets remain open with limited traction, indicating a need for better triage or documentation updates.  

---  

*Prepared for developers and contributors seeking a quick snapshot of the ComfyUI ecosystem’s current focus and friction points.*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Community Digest – 2026‑09‑13**  
*Generated from GitHub activity (last 24 h)*  

---

### 1. Today’s Highlights  
- A critical chat‑streaming bug affecting Qwen 3.8 (#17778) has garnered strong community attention (25 👍, 29 comments) and is being addressed by PR #17894, which preserves the most recent user message during context truncation.  
- Several platform‑specific stability issues surfaced: ROCm KV‑state bleed on AMD Strix Halo (#17847), SIGABRT crashes on Linux hybrid graphics laptops (#18412), and Windows loop‑back port exhaustion under sustained `/api/embed` load (#18392).  
- Documentation and usability improvements are underway, including silent truncation warnings (#14259), clearer model version requirements (#18414), and Windows installer PATH clean‑up (#18409/#18386).  

---

### 2. Releases  
*No new releases were published in the last 24 h.*

---

### 3. Hot Issues  
| # | Issue | Why it matters | Community reaction |
|---|-------|----------------|--------------------|
| [#17778](https://github.com/ollama/ollama/issues/17778) | Qwen 3.8 returns “no user query found in messages” (500) during multi‑step tool loops | Breaks agent‑style workflows that rely on streaming chat; prevents reliable tool use with long‑context models. | 👍 25 • 💬 29 |
| [#17847](https://github.com/ollama/ollama/issues/17847) | ROCm backend on Strix Halo leaks KV state → responses contaminated by prior request | Undermines correctness of sequential inference on AMD GPUs; a blocker for ROCm adoption. | 👍 0 • 💬 9 |
| [#18094](https://github.com/ollama/ollama/issues/18094) | Gemma 3:12b structured output truncates on double‑quoted input terms | Causes silent data loss when using JSON‑schema output; affects pipelines that depend on reliable parsing. | 👍 0 • 💬 7 |
| [#16599](https://github.com/ollama/ollama/issues/16599) | Model spread across GPUs even when a single GPU has enough VRAM | Leads to unnecessary latency and complex multi‑GPU setups; users expect Ollama to fit models on the best‑fit device. | 👍 0 • 💬 5 |
| [#14259](https://github.com/ollama/ollama/issues/14259) | Chat history/embedding truncation occurs silently with no user‑visible indication | Makes debugging conversation loops difficult; users lose context without warning. | 👍 3 • 💬 3 |
| [#18287](https://github.com/ollama/ollama/issues/18287) | Request for Ollama‑compatible Hy4 model (closed) | Indicates demand for newer community models; highlights the need for timely model‑page updates. | 👍 0 • 💬 3 |
| [#18396](https://github.com/ollama/ollama/issues/18396) | Jetson Orin Nano 8GB OOM when loading Gemma 4 E4B multimodal projector (CPU‑projector works) | Shows memory‑budget mismatches on edge devices; prevents multimodal use on popular Jetson platforms. | 👍 0 • 💬 3 |
| [#18412](https://github.com/ollama/ollama/issues/18412) | Linux hybrid graphics (Intel + RTX 4080) → llama‑server SIGABRT on backend load | Blocks Ollama on many modern laptops; a regression affecting a broad user base. | 👍 0 • 💬 1 |
| [#18392](https://github.com/ollama/ollama/issues/18392) | Sustained `/api/embed` exhausts loopback ports on Windows (keep‑alive disabled) | Causes intermittent HTTP 400 errors under bulk embedding workloads; impacts production‑scale pipelines. | 👍 0 • 💬 1 |
| [#18414](https://github.com/ollama/ollama/issues/18414) | Some models (e.g., qwen3.8:27b) have undocumented Ollama version requirements | Leads to silent failures when users pull models that need a newer Ollama core; documentation gap. | 👍 0 • 💬 0 |

---

### 4. Key PR Progress  
| # | PR | Summary / Fix |
|---|----|---------------|
| [#17894](https://github.com/ollama/ollama/pull/17894) | **chat: always preserve the most recent user message during truncation** – resolves #17778 by keeping the latest user query when the context window overflows. |
| [#18413](https://github.com/ollama/ollama/pull/18413) | **openai: finish reasoning before emitting client tool calls** – addresses #18411, ensuring web‑search tool calls are emitted only after reasoning completes. |
| [#18409](https://github.com/ollama/ollama/pull/18409) / [#18386](https://github.com/ollama/ollama/pull/18386) | **installer(windows): remove Ollama entry from user PATH on uninstall** – cleans up stale PATH entries left by the uninstaller. |
| [#18408](https://github.com/ollama/ollama/pull/18408) | **app/ui/app: surface failed and incomplete chat streams** – shows HTTP errors, malformed JSONL, and premature EOF in the UI instead of silently treating them as success. |
| [#18407](https://github.com/ollama/ollama/pull/18407) | **server: preserve imported GGUF blobs after validation** – avoids rewriting the model file during validation, preserving original digest. |
| [#18406](https://github.com/ollama/ollama/pull/18406) | **server: reject invalid embeddings before returning success** – validates runner output; returns HTTP 500 for all‑zero or malformed vectors. |
| [#17566](https://github.com/ollama/ollama/pull/17566) | **api: bound thinking with a token budget, per request or per model** – prevents runaway reasoning loops that consume the entire context. |
| [#18400](https://github.com/ollama/ollama/pull/18400) | **fix: parse Gemma4 tool keys containing spaces** – enables tool schemas like `{"Basic LLM Chain": …}` that were previously rejected. |
| [#18399](https://github.com/ollama/ollama/pull/18399) | **Add OLLAMA_CONTEXT_SHIFT so a server can refuse over‑long prompts** – introduces an opt‑in limit to avoid silent truncation and warn callers early. |
| [#18398](https://github.com/ollama/ollama/pull/18398) | **model/parsers: preserve gemma4 object keys containing spaces** – complements #18400 by allowing spaces in bare keys during parsing. |

---

### 5. Feature Request Trends  
- **GPU‑memory efficiency & device selection** – requests for smarter single‑GPU fallback (#16599), ROCm stability (#17847), and Jetson memory budgeting (#18396).  
- **Context handling visibility** – users want explicit warnings or configurable behavior when prompts exceed the model’s context window (#14259, #18399).  
- **Structured‑output reliability** – fixing truncation on special characters and ensuring complete JSON output (#18094, #18400, #18398).  
- **Tool‑call ordering & reasoning** – ensuring reasoning blocks finish before tool calls are emitted, especially for built‑in tools like `web_search` (#18411, #18413).  
- **Documentation & version transparency** – clear annotation of required Ollama versions on model pages and better guides for hybrid graphics, Windows PATH, and embedding workloads (#18414, #14259, #18409/#18386).  
- **Embedding service robustness** – fixing keep‑alive and loop‑back port leaks under high‑throughput `/api/embed` usage (#18392).  

---

### 6. Developer Pain Points  
- **Silent failures** – context truncation, embedding errors, and version mismatches occur without clear user‑visible signals, forcing developers to dig through logs.  
- **Platform‑specific instability** – ROCm KV‑state bleed, Windows loop‑back port exhaustion, and Linux hybrid‑graphics SIGABRT crashes create fragmented support experiences.  
- **Memory management on edge devices** – Jetson Orin Nano and low‑VRAM setups frequently OOM when loading multimodal projectors, despite available CPU fallbacks.  
- **Tool‑chain friction** – multi‑step agent workflows break when the chat stream drops the user query or when tool arguments contain spaces, requiring work‑arounds in prompt formatting.  
- **Installation hygiene** – stale PATH entries after uninstall and ambiguous model version requirements lead to “it worked yesterday, not today” confusion.  

---  

*Stay tuned for upcoming fixes in the next release cycle, and feel free to comment or contribute on the linked issues and PRs.*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

### Llama.cpp Community Digest - 2026-09-13

#### **Today's Highlights**
The llama.cpp ecosystem saw focused backend optimization efforts over the past 24h, with significant commits targeting CUDA (AMD GCN config tables, contiguous row kernels), OpenCL (Q4_K/Q5_K alignment fixes), WebGPU (tensor binding alignment), and Hexagon (multi-device model split). Server stability received attention through UI caching enhancements and router state framing improvements, while dependency updates (cpp-httplib 0.56.0) maintained toolchain modernity.

#### **Releases**
Twelve incremental releases (b10920-b10931) shipped in the last 24h, emphasizing:
- **Backend hardening**: OpenCL abort fixes (#b10923), SYCL quant handling (#b10926), CUDA AMD GCN config (#b10929)
- **Server/router improvements**: Model download limiting (#b10930), UI caching (#b10931), child state framing (#b10924)
- **Hardware enablement**: Hexagon row-split support (#b10920), WebGPU binding alignment (#b10921)
- **Dependency maintenance**: cpp-httplib update (#b10927)

#### **Hot Issues**
1. **[#14909](https://github.com/ggml-org/llama.cpp/issues/14909)** (53 comments): Persistent demand for backend op completeness – highlights gap between reference implementations and backend-specific optimizations, critical for hardware vendors.
2. **[#20260](https://github.com/ggml-org/llama.cpp/issues/20260)** (34 comments): Qwen3.5 chat format parsing failure on Metal – reveals fragility in speculative decoding pipelines when models emit text before special tokens, affecting tool-use workflows.
3. **[#25808](https://github.com/ggml-org/llama.cpp/issues/25808)** (33 comments): SYCL xe2 segfault – blocks Battlemage GPU adoption; community seeks architecture-specific build flags as immediate workaround.
4. **[#16393](https://github.com/ggml-org/llama.cpp/issues/16393)** (27 comments): Model cache management tool – high upvotes (21👍) indicate strong developer need for CLI utilities to manage GGUF storage in shared environments.
5. **[#10453](https://github.com/ggml-org/llama.cpp/issues/10453)** (25 comments): ANE backend request – top-voted feature (44👍) shows sustained interest in Apple Neural Engine acceleration for mobile/edge deployment.
6. **[#24616](https://github.com/ggml-org/llama.cpp/issues/24616)** (15 comments): CUDA dp4a emulation via dp2a – addresses Ampere+/Hopper compatibility gaps for legacy quantization kernels.
7. **[#24946](https://github.com/ggml-org/llama.cpp/issues/24946)** (15 comments): SYCL `-cb` power bug – prevents idle states on Arc GPUs, directly impacting data center TCO for continuous batching workloads.
8. **[#25913](https://github.com/ggml-org/llama.cpp/issues/25913)** (12 comments): Slot save/restore hybrid model bug – critical for production serving where context reuse is essential for latency-sensitive applications.
9. **[#24415](https://github.com/ggml-org/llama.cpp/issues/24415)** (11 comments): OpenVINO Gemma loading failure – highlights NPU/GPU integration challenges in Intel's AI stack.
10. **[#28196](https://github.com/ggml-org/llama.cpp/issues/28196)** (10 comments): RTX 5090 Qwen3.5 underutilization – exposes MTP-specific bottlenecks on Blackwell architecture, guiding future kernel optimization.

#### **Key PR Progress**
1. **[#28822](https://github.com/ggml-org/llama.cpp/pull/28822)**: Vulkan IQ3_S MMQ kernels – enables efficient low-precision matmul on Intel Arc GPUs, closing performance gap for Avr2 architecture.
2. **[#28821](https://github.com/ggml-org/llama.cpp/pull/28821)**: CUDA contiguous_rows unary kernels – fixes non-contiguous tensor operations (e.g., strided batches), resolving silent correctness issues in vision models.
3. **[#28740](https://github.com/ggml-org/llama.cpp/pull/28740)**: Dedicated `test-backend-ops` CI job – improves backend validation coverage by running all available hardware targets in parallel, reducing regression risk.
4. **[#28770](https://github.com/ggml-org/llama.cpp/pull/28770)**: CUDA sparse FA for Qwen4 – implements attention sparsity for hybrid models, targeting 2x speedup in long-context scenarios.
5. **[#28817](https://github.com/ggml-org/llama.cpp/pull/28817)**: Jinja dot-property integer literals – enables advanced templating (e.g., `list.0`, `dict.key`) for complex tool schemas in agent workflows.
6. **[#28575](https://github.com/ggml-org/llama.cpp/pull/28575)**: OpenCL Q4_K/Q5_K noshuffle alignment – fixes texture

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*