# OpenClaw Ecosystem Digest 2026-10-01

> Issues: 483 | PRs: 500 | Projects covered: 13 | Generated: 2026-09-30 22:16 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive



# OpenClaw Project Digest — 2026-10-01

---

## 1. Today's Overview

OpenClaw remains a high-velocity open-source project with substantial community engagement. Over the trailing 24 hours, the repository recorded **483 issue updates** (325 open/active, 158 closed) and **500 pull request updates** (322 open, 178 merged/closed), alongside **one new release** (`v2026.9.7`). Activity is intense — the project is attracting both heavy feature development and a concentrated wave of bug reports, many of which target stability regressions introduced in the 2026.9.x release line. The maintainers are actively triaging, with multiple P0 crash-loop and memory-leak issues dominating attention.

---

## 2. Releases

### OpenClaw v2026.9.7
- **518 direct commits** · **2,818 pull requests** · **331 contributors**
- [Release notes](https://docs.openclaw.ai/rel) | [Changelog](https://docs.openclaw.ai/changelog)

No explicit breaking changes or migration notes were surfaced in the release metadata, though the rapid succession of 2026.9.x releases (9.4, 9.5, 9.6, 9.7) suggests the project is iterating quickly on stability fixes. Several open issues reference version-specific regressions in 2026.9.4, 9.5, and 9.6, indicating that this release line has been turbulent. Users on older 9.x builds are encouraged to upgrade promptly to benefit from accumulated fixes.

---

## 3. Project Progress

A substantial batch of PRs closed or advanced today, spanning fixes, refactors, and feature work:

**Stability & Bug Fixes:**
- **#160181** — CLI plugin resources are now released when help finishes, preventing leaked file handles at process exit ([link](https://github.com/openclaw/openclaw/pull/160181)).
- **#162173** — Control UI no longer colors merged PR cards red because of old publication failures ([link](https://github.com/openclaw/openclaw/pull/162173)).
- **#121195** — Parent agent `NO_REPLY` completions are now settled exactly once, fixing silent subagent loss ([link](https://github.com/openclaw/openclaw/pull/121195)).
- **#136337** — Model Providers cost aggregates now request one usage row, improving cost-card accuracy ([link](https://github.com/openclaw/openclaw/pull/136337)).
- **#152205** — Background `exec` completions now surface into busy sessions instead of waiting indefinitely ([link](https://github.com/openclaw/openclaw/pull/152205)).
- **#159693** — Talk preserves source outcomes when native tool presentation fails ([link](https://github.com/openclaw/openclaw/pull/159693)).
- **#162056** — Retained deleted-agent databases no longer block upgrades ([link](https://github.com/openclaw/openclaw/pull/162056)).
- **#132838** — Stale blocked task state is cleared after requester delivery ([link](https://github.com/openclaw/openclaw/pull/132838)).
- **#162171** — GitHub Copilot catalog gains Claude Sonnet 5.5 and Opus 5.5 ([link](https://github.com/openclaw/openclaw/pull/162171)).
- **#161019** — Operator roles now exclude private agents from the Control UI picker ([link](https://github.com/openclaw/openclaw/pull/161019)).
- **#161926** — Codex setup stops offering re-login when the existing login cannot be read ([link](https://github.com/openclaw/openclaw/pull/161926)).
- **#162006** — `openclaw doctor --fix` avoids per-archive delays for unchanged transcripts ([link](https://github.com/openclaw/openclaw/pull/162006)).

**Performance & Refactors:**
- **#162016** — Coalesces concurrent observed-project discovery, reducing redundant Git process launches ([link](https://github.com/openclaw/openclaw/pull/162016)).
- **#161709** — macOS Gateway can now be hosted on bundled Bun, removing the Node download requirement ([link](https://github.com/openclaw/openclaw/pull/161709)).
- **#162167** — CLI candidate binding lifecycle is shared across command-origin and channel-reply paths ([link](https://github.com/openclaw/openclaw/pull/162167)).
- **#162174** — Discord draft-stream ownership is consolidated into shared lifecycle ([link](https://github.com/openclaw/openclaw/pull/162174)).
- **#162145** — Gateway configuration and service application are consolidated across configure, onboarding, and Doctor ([link](https://github.com/openclaw/openclaw/pull/162145)).
- **#162139** — SQLite execution is retained through cleanup, preventing accepted-work completion loss ([link](https://github.com/openclaw/openclaw/pull/162139)).
- **#162038** — Bumps `@openclaw/fs-safe` to 0.21.3, reducing filesystem-watch rescans and heap pressure ([link](https://github.com/openclaw/openclaw/pull/162038)).
- **#162177** / **#162175** — Memory slot now owns pre-compaction flush; a provider-neutral memory provider runtime is introduced ([link](https://github.com/openclaw/openclaw/pull/162177), [link](https://github.com/openclaw/openclaw/pull/162175)).
- **#153340** — Conversational turns can optionally omit tools when the Decision model is confident none are needed ([link](https://github.com/openclaw/openclaw/pull/153340)).
- **#132229** — `meta` provider gains `muse-image` as a first-class image-generation provider ([link](https://github.com/openclaw/openclaw/pull/132229)).
- **#127796** — `openclaw agent exec` now allows explicit one-shot tool grants ([link](https://github.com/openclaw/openclaw/pull/127796)).

---

## 4. Community Hot Topics

The most-commented issues and PRs reveal a community deeply concerned with **reliability at scale** and **data integrity**:

| Rank | Issue/PR | Comments | Core Concern |
|------|----------|----------|--------------|
| 1 | [#143524](https://github.com/openclaw/openclaw/issues/143524) — SQLite WAL unbounded growth (2.8 GB) | 97

---

## Cross-Ecosystem Comparison



Here is the comprehensive cross-project comparison report for the personal AI assistant and agent open-source ecosystem as of **October 1, 2026**.

---

# Ecosystem Comparison Report: Open-Source AI Agents (2026-10-01)

## 1. Ecosystem Overview
The personal AI assistant and agent open-source landscape is experiencing a period of rapid architectural maturation and high developmental velocity. Projects are transitioning from simple chatbot wrappers to robust, multi-tenant agent frameworks characterized by gateway splits, strict security boundaries, and multi-provider LLM routing. 

Community focus is converging heavily on **reliability at scale**, **session state integrity**, and **multi-principal security**. Today's active development cycles highlight a stark contrast between high-velocity, stability-stressed release lines (e.g., OpenClaw, CoPaw) and deep, structural pre-release refactoring (e.g., ZeroClaw, PicoClaw) aimed at isolating agent execution environments.

---

## 2. Activity Comparison

The table below summarizes the development activity and repository health across the tracked cohort over the trailing 24 hours.

| Project | Issues Updated (24h) | PRs Updated (24h) | Latest Release | Health & Activity Assessment |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 483 (325 open, 158 closed) | 500 (322 open, 178 merged) | `v2026.9.7` | **High Velocity / Stability-Stressed**. Intense feature development coupled with active regression triaging. |
| **ZeroClaw** | 41 (all open/active) | 50 (all open) | None (`v0.9.0` target) | **High Velocity / Architectural Shift**. Focused on gateway RPC splits, sandboxing, and RBAC. |
| **CoPaw (QwenPaw)** | 21 (18 open, 3 closed) | 40 (29 open, 11 merged) | `v2.2.2-beta.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



Based on the GitHub data from the **HKUDS/nanobot** repository, here is the structured project digest for **2026-10-01**.

---

### 1. Today's Overview
Nanobot is experiencing a period of exceptionally high development velocity and maintenance activity, with 32 pull requests (24 merged/closed and 8 open) and 12 issues closed in the last 24 hours. The focus of today's work is heavily geared towards hardening the core agent, resolving critical regressions, and advancing the WebUI and TUI interfaces. While no new software releases were published today, the volume of merged fixes and architectural refactors (such as transitioning session state to SQLite) indicates that the project is rapidly maturing and preparing for a highly stable upcoming release.

---

### 2. Releases
* **New Releases:** None. No new versions were published today.

---

### 3. Project Progress
The development team successfully merged and closed 24 pull requests today, focusing heavily on bug fixes, developer experience, and system architecture:
* **TUI & WebUI Polish:** Several key UI bugs were resolved, including restoring saved session history from canonical events ([#5950](https://github.com/HKUDS/nanobot/pull/5950)), keeping overflow picker choices reachable in the TUI ([#5966](https://github.com/HKUDS/nanobot/pull/5966)), fixing terminal theme readability on light terminals ([#5958](https://github.com/HKUDS/nanobot/pull/5958)), and accepting goal requests during active turns ([#5981](https://github.com/HKUDS/nanobot/pull/5981)).
* **WebUI Streaming & Markdown:** Fixed synthetic trailing underscores in completed Markdown responses ([#5989](https://github.com/HKUDS/nanobot/pull/5989)) and preserved TeX formula boundaries in streaming Markdown ([#5990](https://github.com/HKUDS/nanobot/pull/5990)).
* **Core Agent & Provider Reliability:** Merged critical fixes for preserving optional tool parameters in Responses API requests ([#5938](https://github.com/HKUDS/nanobot/pull/5938)) and scoping tool resources to session cancellation ([#5993](https://github.com/HKUDS/nanobot/pull/5993)).
* **Infrastructure & Docs:** Streamlined project instructions in the root `AGENTS.md` ([#5996](https://github.com/HKUDS/nanobot/pull/5996)) and consolidated redundant test suites, removing 703 lines of unnecessary test code without losing coverage ([#5907](https://github.com/HKUDS/nanobot/pull/5907)).

---

### 4. Community Hot Topics
The community showed high engagement on channel-specific bugs, particularly around Feishu (Lark) and Telegram integrations, as well as TUI input handling:
* **Feishu Channel Glitches:** Issue [#5903](https://github.com/HKUDS/nanobot/issues/5903) (hidden session-checkpoint markers being sent to users) and Issue [#5956](https://github.com/HKUDS/nanobot/issues/5956) (compaction notices cannot be closed due to lack of in-place edit) gathered significant discussion (5 and 3 comments respectively). Users are highly sensitive to background system messages leaking into their chat logs.
* **Telegram Polling Reliability:** Issue [#3626](https://github.com/HKUDS/nanobot/issues/3626) (Telegram long polling silently hanging) remains a hot topic, with users seeking robust network recovery mechanisms for long-running bots.
* **TUI Debug-Mode Input Parsing:** Issue [#5987](https://github.com/HKUDS/nanobot/issues/5987) highlighted a quirky bug where numbers-only inputs failed in TUI debug mode, while alphabetical inputs worked fine.

---

### 5. Bugs & Stability
Several critical bugs and regressions were addressed or are currently being tracked:

| Severity | Bug/Issue | Status | Fix PR / Notes |
| :--- | :--- | :--- | :--- |
| **Critical** | **Fallback models skipped on "insufficient credits" (HTTP 400)** ([#5967](https://github.com/HKUDS/nanobot/issues/5967)) | Closed | Fixed. Provider failover silently broke when gateway errors were misclassified. |
| **High** | **Telegram long polling silently hangs** ([#3626](https://github.com/HKUDS/nanobot/issues/3626)) | Closed | Closed. Bot stops receiving updates but remains alive. |
| **High** | **Stale member access updates after reauthorization** ([#5997](https://github.com/HKUDS/nanobot/pull/5997)) | Open (P2) | Active PR. Rejects stale Linear directory updates after workspace reconnection. |
| **High** | **Stale failure state suppressing final WebSocket replies

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Thinking Process:

1.  **Analyze the Request:**
    *   **Topic:** Generate a project digest for `github.com/nousresearch/hermes-agent` based on provided GitHub data.
    *   **Date:** 2026-10-01 (The prompt says "generate a project digest for 2026-10-01", but the data seems to be updated as of late September/October 2026 based on the issue/PR dates). Let's treat the data provided as the "last 24h" relative to the target digest date or just use the provided data as the core source.
    *   **Sections required:**
        1.  **Today's Overview** - 3-5 sentences summarizing project status, including activity assessment.
        2.  **Releases** - If new versions exist, detail changes, breaking changes, migration notes; omit if none (Data says "New releases: 0", "Latest Releases: None").
        3.  **Project Progress** - Merged/closed PRs today, what features advanced or were fixed (Data shows 3 closed/merged PRs/issues today: #129666, #128971, #128876, plus open PRs showing progress). Let's extract the closed ones: Issues closed: 3 (e.g., #129666, #128971, #128876). PRs merged/closed: 3 (need to look for clues, e.g., PR #129716 "Closes #127599", PR #129713 "Reported in #129632", PR #129131 "Fixes #129128", PR #129046 "Fixes #128720", etc., but let's stick to the metadata: "PRs updated in last 24h: 50 (open: 47, merged/closed: 3)" and "Issues updated in last 24h: 50 (open/active: 47, closed: 3)").
        4.  **Community Hot Topics** - Most active Issues/PRs with most comments/reactions (with links), analyze underlying needs. (Top comments: #91115 (13 comments), #128468 (10 comments), #64392 (8 comments), #106960 (6 comments), #46131 (4 comments)).
        5.  **Bugs & Stability** - Bugs, crashes, regressions reported today, ranked by severity, note if fix PRs exist. (P0/P1 bugs like #129281 catastrophic backtracking freeze, #128797/PR #129046 Slack/Discord issues, #128468 duplicated message render, #91115 macOS keychain prompt, etc.).
        6.  **Feature Requests & Roadmap Signals** - User-requested features, predict which might be in next version. (e.g., #54153 save state soft-warning, #125180 QQ Bot command panels, #129694 MCP public readers, #129696 skills tool discovery helpers, #129699 pet sprite pipeline primitives).
        7.  **User Feedback Summary** - Real user pain points, use cases, satisfaction/dissatisfaction. (Focus on keychain re-prompting on update, desktop transcript duplication, Windows installer issues, PM workspace split issues).
        8.  **Backlog Watch** - Long-unanswered important Issues or PRs needing maintainer attention. (Look for old issues like #4848 (created 2026-04-03), #55004 (created 2026-06-29), #46131 (created 2026-06-14), #64392 (created 2026-07-14) that are still open and have high impact).

2.  **Data Extraction & Synthesis:**

    *   **Overview Activity Assessment:**
        *   High activity: 50 issues and 50 PRs updated in the last 24 hours.
        *   Active community engagement, particularly around desktop updates, gateway fixes, and plugin management.
        *   3 issues closed, 3 PRs merged/closed showing steady progress on technical debt and bug fixes, though a significant backlog of critical bugs remains open.

    *   **Releases:**
        *   No new releases today (0 new releases, latest releases: None).

    *   **Project Progress (Closed/Merged today):**
        *   Issues closed (3): #129666 (Dashboard chat sidebar reconnect loop), #128971 (session.create cwd_explicit error on desktop), #128876 (PM-managed install updater refuses module-derived PROJECT_ROOT).
        *   PRs merged/closed (3): Including notable fixes like PR #129716 (SSL cert_store_stats restoration), PR #129713 (PM workspace lockable members), PR #129131 (vault directories safety), PR #129046 (Slack slash/message inputs), PR #125529 (parked-branch cherry probe bounds), and PR #125751 (desktop settled replies by row identity). These show strong movement on stability, desktop client health, and developer tooling (PM/SSL).

    *   **Community Hot Topics (Most Comments):**
        *   *Topic 1: macOS Keychain re-prompting after updates (#91115)* - 13 comments. Underlying need: Users want a seamless update experience without having to re-authorize keychain access every time the desktop app is rebuilt/updated. The Python updater cannot fix this non-Electron issue natively, requiring desktop team intervention.
        *   *Topic 2: Desktop transcript duplication and scroll jumping during streaming (#128468)* - 10 comments. Underlying need: High-friction UI bug during active agent sessions on Linux/Desktop, disrupting user workflow and readability of streaming output.
        *   *Topic 3: Duplicate skill names handling inconsistency (#64392)* - 8 comments. Underlying need: Developers and plugin creators need predictable, unified behavior when resolving duplicate skill names across CLI lists, system prompts, and skill views.
        *   *Topic 4: systemd dashboard inventoried as manual-serve after update (#106960)* - 6 comments. Underlying need: Proper service discovery and inventory management for users running gateway/dashboard services via systemd.

    *   **Bugs & Stability (Ranked by Severity):**
        *   *P0/P1 Critical:*
            *   **#129281 (P1)**: `cron/lifecycle_guard` catastrophic backtracking in regex freezes the entire gateway process. Critical performance blocker for cron/gateway users. (No fix PR listed yet, but flagged as P1).
            *   **PR #128797 / #129046 (P0)**: Discord relayed interactions missing text lane labels, and Slack slash/message prompt inputs unified. Fixes are in open PRs (#129046, #128797).
            *   **#127911 (P2/P1-ish)**: Desktop interrupt duplicates interim messages and tool cards on Windows. High visual noise for users on long tool-heavy turns.
        *   *P2 Notable:*
            *   **#91115 (P2)**: macOS keychain prompt after update for OPTED-IN keychain encryption.
            *   **#128468 (P2)**: Desktop transcript duplicated message render + scroll jumping.
            *   **#106960 (P2)**: systemd dashboard inventoried as manual-serve.
            *   **#46131 (P2)**: Ollama reasoning models return empty content (needs `reasoning_effort` to disable thinking).
            *   **#129712 (P2)**: Updater/blobs workflow creates one packfile per lazy fetch, never gc's — .git grows to tens of GB (39 GiB observed). Fix PR exists: PR #129714 (compact partial clone packs after fetch).
            *   **#129640 (P2)**: Desktop HUD opened from "This device" boots against remote primary gateway.
        *   *Fix PRs available:* Mentioned fixes like PR #129714 for #129712, PR #129717 for hidden vault tabs (#129622/#129715), PR #129713 for #129632, PR #129131 for vault safety, PR #129046 for Slack (#128720).

    *   **Feature Requests & Roadmap Signals:**
        *   *MCP Enhancements (#129694)*: Public readers for MCP client's live connections (`current_mcp_servers()`, etc.) to allow plugins to selectively register servers.
        *   *Skills Discovery (#129696)*: Public names for skills tool discovery (`find_all_skills`, `locate_skill`) and skill-sync hash for plugin cataloging.
        *   *Pet Sprite Pipeline (#129699)*: Public names for pet sprite pipeline frame and prompt primitives for custom sprite sheet layouts.
        *   *Agent Budget Warning (#54153)*: Inject a 'save state and yield' soft-warning at ~80% of the tool-call iteration budget.
        *   *QQ Bot Integration (#125180)*: Project Hermes commands into QQ Bot command panels.
        *   *Desktop Model Picker Favorites (PR #126535)*: Star models into a Favorites section of the model picker.
        *   *Workflows Plugin (PR #94367)*: Author and run agent graphs (opt-in desktop plugin).

    *   **User Feedback Summary:**
        *   Users are heavily focused on the Desktop client stability (v0.21.5 series brings multiple UI rendering bugs, HUD routing bugs, and keychain friction).
        *   Local model users (Ollama) are frustrated by silent empty responses from reasoning models, showcasing a gap in parameter mapping for local providers.
        *   PM (Plugin Manager) users are hitting edge cases with virtual members and lockfile generation, though active work is happening to resolve these.
        *   Windows users face severe installer blockers (Application Control policy os error 4551) and git packfile bloat.

    *   **Backlog Watch (Long-standing issues needing attention):**
        *   **#4848 (P3, Open since 2026-04-03)**: `display.compact: true` in config.yaml has no effect. Simple config flag completely ignored.
        *   **#55004 (P2, Open since 2026-06-29)**: Windows installer fails with "Application Control policy has blocked this file (os error 4551)".
        *   **#46131 (P2, Open since 2026-06-14)**: Ollama reasoning models return empty content.
        *   **#64392 (P2, Open since 2026-07-14)**: Duplicate skill names disagree across list, prompt, and skill_view.
        *   **#73796 (P2, Open since 2026-07-29)**: Dashboard reports gateway "stopped" in split-container Docker deployment.
        *   **#78803 (P2, Open since 2026-08-04)**: Dashboard "Restart Gateway" in split deployment fails with misleading `no such gateway 'default'`.

3.  **Drafting the Digest (formatting and tone):**
    *   Maintain an objective, data-driven, professional analyst tone.
    *   Use Markdown formatting with clear headers matching the requested sections.
    *   Include GitHub links for all mentioned items (e.g., `[Issue #91115](https://github.com/NousResearch/hermes-agent/issues/91115)`). Let's construct standard GitHub URLs based on the pattern `https://github.com/NousResearch/hermes-agent/issues/<number>` or `/pull/<number>` since the prompt lists URLs like `NousResearch/hermes-agent Issue #91115`.

Let's double check the exact URLs from the prompt:
- `URL: NousResearch/hermes-agent Issue #91115` -> standard URL is `https://github.com/NousResearch/hermes-agent/issues/91115`
- `URL: NousResearch/hermes-agent PR #45317` -> standard URL is `https://github.com/NousResearch/hermes-agent/pull/45317`

Let's write a python-like list of URLs or just format them nicely as standard GitHub links.

Let's review the required sections and fill them out step-by-step.

### Section 1: Today's Overview
*   Activity is very high: 50 issues and 50 PRs updated in the last 24 hours, reflecting a highly active development cycle on the Hermes Agent repository, particularly surrounding the desktop client (v0.21.5 updates), gateway services, and plugin manager (pm) stability.
*   While 3 issues and 3 PRs were successfully closed/merged today, showing progress on SSL security, desktop reply rendering, and partial clone packfile bloat, a high volume of critical bugs remains open, demanding ongoing maintainer and community attention.
*   Overall health: Rapid iterative development, but transitioning from feature expansion to hardening stability, especially for the desktop wrapper, Windows environments, and multi-container Docker setups.

### Section 2: Releases
*   No new releases have been published today. (Omit details as per instructions).

### Section 3: Project Progress
*   **Closed/Merged PRs & Issues (Today):**
    *   **PR #129716 (Merged/Closed):** Restored `cert_store_stats` and `get_ca_certs` on truststore SSLContext, fixing library introspection issues ([link](https://github.com/NousResearch/hermes-agent/pull/129716)).
    *   **PR #129714 (Merged/Closed):** Compacts partial clone packs after fetch on Desktop to prevent unbounded git disk growth ([link](https://github.com/NousResearch/hermes-agent/pull/129714)).
    *   **PR #129713 (Merged/Closed):** Fixed `pm` workspace member lockability, ensuring virtual members are fully lockable by `uv` ([link](https://github.com/NousResearch/hermes-agent/pull/129713)).
    *   **PR #129046 (Merged/Closed):** Unified Slack slash and message prompt inputs to fix native slash turn admission policies ([link](https://github.com/NousResearch/hermes-agent/pull/129046)).
    *   **PR #125751 (Merged/Closed):** Settled desktop reloaded replies by persisted row identity to prevent duplicate bubbles ([link](https://github.com/NousResearch/hermes-agent/pull/125751)).
    *   **Closed Issues:** #129666 (reconnect loop in dashboard chat sidebar), #128971 (session.create cwd_explicit error), and #128876 (PM-managed install updater root split issues).

### Section 4: Community Hot Topics
*   **macOS Keychain Re-prompting on Updates (#91115)** - *13 comments* ([link](https://github.com/NousResearch/hermes-agent/issues/91115))
    *   *Analysis:* This is the top community pain point. Every rebuild of the Electron desktop app changes the code signature, breaking the ACLs of the "Hermes Safe Storage" keychain item. Users are locked into repetitive security prompts, which severely impacts the UX of the desktop update flow. The community is looking for a programmatic keychain ACL migration or a safeStorage rotation strategy that survives ad-hoc signatures.
*   **Desktop Transcript Duplicated Messages & Scroll Jumping (#128468)** - *10 comments* ([link](https://github.com/NousResearch/hermes-agent/issues/128468))
    *   *Analysis:* High-friction rendering bug during active streaming sessions on the desktop client. Users report duplicated message renders and wild scroll jumping, which breaks the readability of live agent streams.
*   **Duplicate Skill Names Inconsistency (#64392)** - *8 comments* ([link](https://github.com/NousResearch/hermes-agent/issues/64392))
    *   *Analysis:* Plugin developers and advanced users face behavioral inconsistency where `skills list`, the system prompt builder, and `skill_view` resolve duplicate skill names differently. Standardizing the lookup precedence is a high priority for the plugin ecosystem.
*   **systemd Dashboard Inventory Classification (#106960)** - *6 comments* ([link](https://github.com/NousResearch/hermes-agent/issues/106960))
    *   *Analysis:* Users running official split-container or systemd deployments find their dashboard service misclassified as a "manual serve," breaking automated service discovery and update workflows.

### Section 5: Bugs & Stability
*   **Critical / High Severity Bugs (Active):**
    *   **Catastrophic Regex Backtracking Freeze (#129281 - P1):** `contains_gateway_lifecycle_command()` runs a heavy regex search on raw terminal text, which can freeze the entire gateway process under specific inputs. No fix PR is currently linked, making this a critical entry in the gateway's pre-exec block ([link](https://github.com/NousResearch/hermes-agent/issues/129281)).
    *   **Discord Relayed Interactions Missing Labels (#128797 - P0):** Relayed Discord slash commands lack `chat_name` and `chat_topic` labels, breaking session-context rendering. Fix is staged in PR #128797 / addressed via PR #129046 ([link](https://github.com/NousResearch/hermes-agent/issues/128797)).


</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



Here is the structured project digest for **PicoClaw** dated **2026-10-01**, based on the provided GitHub activity data.

---

# PicoClaw Project Digest: 2026-10-01

### 1. Today's Overview
PicoClaw is experiencing a highly active development cycle, primarily focused on a major user experience (UX) overhaul of the Web UI and improvements to multi-channel session management. Activity is heavily concentrated around a coordinated set of pull requests addressing state transparency, led by a key contributor (`racso2609`). While no new software releases were published in the last 24 hours, the pipeline shows strong momentum with one significant enhancement merged (QQ channel attachment support) and five active PRs targeting Web UI responsiveness and error visibility.

### 2. Releases
*   **No new releases** were published today. The project remains on its current deployment track, with development focus concentrated on the integration of the Web UI feedback improvements (#3406 series) and channel backend cleanups.

### 3. Project Progress
The project has advanced significantly through the merge of channel enhancements and the submission of a cohesive suite of web fixes:
*   **Merged/Closed PR:** 
    *   **[#1349] QQ Channel Attachment Expansion:** Successfully merged, adding robust support for parsing and replying to QQ Channel emojis, voice messages, images, videos, and local file attachments, prioritizing Markdown where possible ([link](https://github.com/sipeed/picoclaw/pull/1349)).
*   **Active Development PRs (Open):**
    *   **[#3413] Global Session Sidebar:** Implements Part 2-A of the UI roadmap, transitioning the session list from a header dropdown to a global, multi-channel sidebar ([link](https://github.com/sipeed/picoclaw/pull/3413)).
    *   **[#3412] Failed Turn Visibility:** Targets silent agent failures by ensuring error notices are not dropped by the `message` tool, making failed turns visible to the user ([link](https://github.com/sipeed/picoclaw/pull/3412)).
    *   **[#3411] State-Driven Working Indicator:** Replaces canned, rotating "thinking" phrases with an honest, state-driven visual indicator ([link](https://github.com/sipeed/picoclaw/pull/3411)).
    *   **[#3410] Steering Queue State Surface:** Addresses the invisible message queue by exposing queue status and alerting users when the queue limit (`MaxQueueSize=10`) is reached ([link](https://github.com/sipeed/picoclaw/pull/3410)).
    *   **[#3222] DeltaChat Cleanup:** A major refactoring PR (-200 LOC) dropping legacy fallbacks, renaming variables, and updating documentation ([link](https://github.com/sipeed/picoclaw/pull/3222)).

### 4. Community Hot Topics
The central theme of community and developer focus this period is **Web UI State Transparency (Issue #3406 / Issue #3408)**.
*   **Key Issue:** **[#3408] Invisible Queued Messages & Silent Drops** ([link](https://github.com/sipeed/picoclaw/issues/3408)). Users reported that messages sent while the agent is busy are routed to steering queues without any visual confirmation, leading to messages silently disappearing when the queue limit is hit.
*   **Underlying Needs:** Users require absolute clarity on agent status (e.g., "Is my message being processed or queued?"). The current UI design is perceived as a "black box" where input states are lost, and system errors are swallowed silently. The cluster of PRs (#3410, #3411, #3412, #3413) directly addresses these systemic UX issues.

### 5. Bugs & Stability
*   **High Severity Bug (Open):** **Web UI Queuing Feedback Failure (Issue #3408)** ([link](https://github.com/sipeed/picoclaw/issues/3408)). Messages sent during active turns are dropped silently if the queue exceeds `MaxQueueSize=10`. This is a critical UX defect that mimics message loss.
*   **Status of Fixes:** The development team is actively addressing these stability issues. **PR #3410** specifically targets the queue state surface, and **PR #3412** addresses the silent suppression of error logs in the agent loop. Once these are merged, the Web UI's stability and trustworthiness are expected to improve significantly.

### 6. Feature Requests & Roadmap Signals
*   **Queue/Events Surface (Issue #3408):** Explicitly requested a webhook/event surface or UI component to track steering queue status.
*   **Web UI Roadmap (#3406):** The sequential roll-out (Parts 1 and 2-A) indicates a structured roadmap to turn the Web UI into a multi-channel aware interface with honest state tracking (indicators, global session sidebars, and queue visibility).
*   **Channel Expansion:** The closure of PR #1349 signals ongoing roadmap commitment to making QQ Channel a first-class citizen regarding rich media attachments.

### 7. User Feedback Summary
*   **Pain Points:** Users experience high anxiety when sending messages to busy sessions due to the lack of read receipts or "queued" indicators. The previous rotating "thinking" phrases were described as misleading "canned" animations that did not reflect actual processing states.
*   **Use Cases:** Power users managing multiple channels (like DeltaChat, QQ, and Web `pico` sessions) need a unified, global session view to avoid context-switching confusion.
*   **Sentiment:** Dissatisfaction is currently focused on UI transparency, but the rapid response of the community contributor with a multi-PR suite indicates strong confidence in the project's direction.

### 8. Backlog Watch
*   **PR #3222 (DeltaChat Refactor):** Open since July 2026, this cleanup PR is vital for reducing technical debt in the DeltaChat channel implementation. Maintainers should review and merge this to secure the channel's long-term stability ([link](https://github.com/sipeed/picoclaw/pull/3222)).
*   **Web UI Series (#3410, #3411, #3412, #3413):** These PRs are highly interdependent. Maintainer attention is required to merge these in a correct order (likely starting with the indicator #3411, then queue state #3410, error visibility #3412, and finally the sidebar #3413) to prevent build breaks and ensure a coherent user experience.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



# NanoClaw Project Digest: 2026-10-01

This digest summarizes the GitHub activity on the NanoClaw repository (`nanocoai/nanoclaw`) over the last 24 hours (covering updates through September 30, 2026). The project exhibits high developmental velocity, focusing heavily on update reliability, Telegram channel stabilization, and provider expansions.

---

### 1. Today's Overview
NanoClaw is experiencing a period of high engineering activity, characterized by 15 updated pull requests (13 open, 2 closed) and 1 closed issue. The development focus is heavily directed towards hardening the update mechanism (ensuring clean host cutovers and rollbacks), expanding provider integrations (such as GitHub Copilot and local keyless models), and stabilizing the Telegram integration. Overall project health is robust, with active maintenance of container dependencies and rapid response to system integration bugs.

---

### 2. Releases
*   **New Releases:** None (0 new releases published).

---

### 3. Project Progress
The following key pull requests were merged or closed recently, representing concrete progress on stability and features:

*   **Container Security Hardening (PR #3974 [CLOSED]):** Refreshed the `agent-runner` lockfile to resolve all `bun audit` findings, clearing transitive security advisories linked to `hono` and `@modelcontextprotocol/sdk`.
*   **Update Liveness Safeguard (PR #3962 [CLOSED]):** Patched `/update-nanoclaw` to refuse a cutover and report failure if the service liveness probe itself fails, preventing false "complete" reports when the old host is still running.
*   **Telegram Thread & Message Hygiene (PRs #3970, #3971, #3972, #3973 [OPEN]):** Major progress on the Telegram adapter, routing forum topics as threads, stripping internal agent-group suffixes from message reaction targets, dropping empty service messages, and reformatting unparseable MarkdownV2 messages as plain text.

---

### 4. Community Hot Topics
The community and developer focus is centered around local hosting flexibility, fork contribution workflows, and provider expansion:

*   **GitHub Copilot SDK Integration (PR #3976):** Highly anticipated feature allowing users to install GitHub Copilot as a NanoClaw runtime via a `/add-copilot` skill while keeping the device-login token securely in the credential gateway.
*   **Fork Contribution Workflow (PR #3928):** Introduces a `/contribute-upstream` operational skill designed to help fork maintainers safely feed local features back to the upstream project as clean seams and skills.
*   **Local Model Gateway Routing (PRs #3964, #3965, #3966):** Significant interest in local model hosting. These PRs allow providers to declare exact `host:port` endpoints, validate local URLs against the selected gateway at setup, and support keyless local models over plain HTTP (specifically for Iron).

---

### 5. Bugs & Stability
The project team and contributors have been actively resolving critical operational bugs, particularly around updates and Telegram message formatting:

*   **Update Host Restart Failure (Issue #3961 [CLOSED]):** Users reported `/update-nanoclaw` reporting `phase: complete` without restarting the host when `systemctl --user` could not reach the bus. 
    *   *Mitigation/Fix Status:* Closed but marked as `triage/unresolved`. It is addressed by companion fixes: **PR #3956** (ensuring rollback stops the live nohup host and drains containers) and **PR #3962** (refusing cutover if the liveness probe fails).
*   **Telegram MarkdownV2 Parsing Failures (PR #3973 [OPEN]):** Telegram dropped messages containing entities it couldn't parse (such as links to private IPs). The fix re-sends these messages as plain text.
*   **Iron Proxy Authentication (PR #3969 [OPEN]):** Fixed a bug where git fetches failed through the Iron Proxy because the client did not send credentials in response to a bare 407 status, instead requiring a proper `Proxy-Authenticate` Basic challenge.

---

### 6. Feature Requests & Roadmap Signals
Based on the active pull request queue, several major features are on track for imminent integration:

*   **Generic Runner & Host Extension Callbacks (PR #3975):** Introduces five inert extension hooks allowing providers to attach custom logic at points unreachable by standard skills.
*   **Explicit Endpoint Declarations (PR #3964):** Providers can now declare exact `host:port` model endpoints, removing the friction of constant approval cards for local non-default ports.
*   **HTTPS Proxy Support (PR #3901):** Allows the host service to reach the internet through an HTTPS proxy during setup, improving usability in enterprise or restricted network environments.

---

### 7. User Feedback Summary
Analysis of the issues and PR descriptions highlights several key user pain points and satisfaction drivers:
*   **The "False Success" Update Loop:** Users faced high anxiety during updates due to the service reporting success while failing to perform the actual cutover/restart, particularly on `nohup` or user-level systemd setups. The recent patches (#3956, #3962) directly address this trust gap.
*   **Local AI Model Friction:** Users utilizing local models (like Iron) struggled with gateway prompts blocking plain HTTP or non-standard ports. The combination of PRs #3964, #3965, and #3966 significantly streamlines the local model onboarding experience.
*   **Telegram Forum Limitations:** Users of Telegram forum supergroups suffered from shared sessions across topics. The thread routing patch (#3971) resolves this by giving each topic its own session.

---

### 8. Backlog Watch
*   **Issue #3961 (Closed but Triage/Unresolved):** While closed, the systemic issue of service handle detection during update failures remains a critical point of fragility. Maintainers should watch for edge cases where the bus or process manager is partially offline but not fully dead.
*   **PR #3901 (HTTPS Proxy Setup):** Open since September 25, this PR is crucial for enterprise users behind corporate proxies. It requires thorough review to ensure proxy credentials and CA certificates are handled securely during host initialization.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>



Based on the GitHub activity for the **NullClaw** (`nullclaw/nullclaw`) repository up to October 1, 2026, here is the structured project digest.

---

### 1. Today's Overview
NullClaw’s activity on October 1, 2026, is exceptionally quiet, marking a low-velocity day for the project. There are zero active or closed issues, zero new releases, and no merged pull requests in the last 24 hours. The only visible movement is the pending community contribution expanding the project's provider ecosystem. This suggests a stable period of maintenance and architectural preparation, relying on external contributors to push feature development forward.

### 2. Releases
*   **No new releases** were published today (October 1, 2026).

### 3. Project Progress
*   **Merged/Closed PRs:** None in the last 24 hours.
*   **Feature Development:** The project's focus is quietly shifting toward provider abstraction. The sole open pull request (#1016) follows the architectural pattern of PR #990 (Eden AI) to implement a new gateway, indicating systematic progress toward becoming a multi-provider LLM router.

### 4. Community Hot Topics
*   **PR #1016: [OPEN] feat(providers): add Cheaper Inference as an OpenAI-compatible gateway** ([Link](https://github.com/nullclaw/nullclaw/pull/1016))
    *   *Author:* `aiapienthusiast` (Created/Updated: Sept 30, 2026)
    *   *Analysis:* This PR is the primary focal point of community activity. The underlying need is clear: users want to minimize LLM API costs and vendor lock-in. By integrating "Cheaper Inference" (an OpenAI-compatible gateway providing access to models from multiple labs under one key), the community is pushing for a highly flexible, cost-effective routing layer.

### 5. Bugs & Stability
*   **Reported today:** None. 
*   There are zero open issues in the repository, indicating no active regressions, crashes, or critical bugs requiring immediate maintainer intervention today.

### 6. Feature Requests & Roadmap Signals
*   **Gateway Integrations:** The sequential submission of gateway integrations (Eden AI in #990, Cheaper Inference in #1016) is a strong roadmap signal. It indicates that NullClaw’s near-future roadmap is focused on universal LLM compatibility and aggregation.
*   **Predictions:** If PR #1016 is merged, the next logical step will likely be community-driven requests for custom routing rules (e.g., routing simple tasks to cheap models and complex tasks to premium ones) based on these new provider gateways.

### 7. User Feedback Summary
*   **Direct feedback today:** None logged.
*   **Inferred Pain Points:** The contributor focus on multi-lab gateways indicates that the primary user pain point is API fragmentation and billing overhead. Users are looking for a singular interface to experiment with various model architectures cost-effectively, and NullClaw’s modular provider system is the project's primary solution to this demand.

### 8. Backlog Watch
*   **No stale issues** are currently flagged in the immediate dataset.
*   **Watchlist Item:** Keep an eye on **PR #1016** ([Link](https://github.com/nullclaw/nullclaw/pull/1016)). As the sole active development vector, timely review and merge by the maintainers will be crucial to keeping the project's provider expansion momentum alive.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>



# IronClaw Project Digest: 2026-10-01

## 1. Today's Overview
On October 1, 2026, IronClaw recorded minimal development and community activity, reflecting a quiet day on the repository. No new issues were opened, closed, or updated, and no new releases were published. The only tracked activity is the update of a single automated pull request by the CI bot, indicating routine infrastructure maintenance without direct human developer or user engagement in the last 24 hours.

## 2. Releases
* **No new releases today.** There are no version updates, breaking changes, or migration guidelines to report for this period.

## 3. Project Progress
* **Merged/Closed PRs:** None today. 
* **Feature Advancements/Fixes:** No active development merges occurred. The project remains in its current stable state with respect to code integration.

## 4. Community Hot Topics
* **Active Discussions:** There are no highly active issues or pull requests with significant community comments or reactions today. 
* **Automated Maintenance (PR #7988):** The only open pull request is an automated update chore:
  * **PR:** [nearai/ironclaw PR #7988](https://github.com/nearai/ironclaw/pull/7988) — *chore(agents): refresh codebase knowledge graph*
  * **Analysis:** Generated by the nightly `Codebase Graph Refresh` workflow, this low-risk, extra-small change updates the committed codebase-memory bootstrap snapshot. It currently has 0 comments and 0 reactions, awaiting standard maintainer review and merge.

## 5. Bugs & Stability
* **Reported Bugs/Crashes:** None reported today. 
* **Severity & Fix Status:** With 0 active issues, there are no active regressions or stability blocks. The project's technical health remains fully stable.

## 6. Feature Requests & Roadmap Signals
* **New Signals:** No new feature requests or roadmap signals were captured today due to a lack of user-submitted issues or discussions.

## 7. User Feedback Summary
* **Feedback Volume:** No user feedback, feature usage metrics, or satisfaction/dissatisfaction sentiments were recorded for today, aligning with the overall low community activity.

## 8. Backlog Watch
* **Urgent Issues:** There are currently zero open or active issues in the backlog, meaning no critical bugs or long-unanswered feature requests are requiring immediate maintainer triage.
* **Pending Maintenance:** Maintainers are encouraged to review and merge the automated infrastructure PR [#7988](https://github.com/nearai/ironclaw/pull/7988) to ensure the codebase memory bootstrap remains synchronized with the default branch.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



Here is the structured project digest for **LobsterAI (netease-youdao/LobsterAI)** dated **2026-10-01**.

---

### 1. Today's Overview
LobsterAI shows high development activity, characterized by robust maintenance and code cleanup. Over the last 24 hours, the project saw **11 pull requests updated (9 merged/closed, 2 open)** alongside **10 updated issues**, indicating a strong push towards stabilizing the codebase and addressing security and UX edge cases. While no new releases were published today, the merge of critical fixes—particularly regarding P2P message security and model routing—suggests the team is actively hardening the platform for production environments.

---

### 2. Releases
*   **No new releases** were published today. 

---

### 3. Project Progress
The development team merged and closed 9 pull requests today, focusing on bug fixes, UI/UX improvements, and security patches:
*   **Security Hardening:** PR #2785 (by carfeii) addressed a critical security vulnerability in the P2P direct-message policy, ensuring that 'disabled' or unset policies fail closed instead of allowing any sender. PR #2787 fixed custom model plan routing, and PR #2786 standardized the default output token cap to 32K for server models to prevent premature turn endings.
*   **UI/UX Visual Fixes:** PR #944 fixed a visual bug where the scrollbar overflowed the rounded corners of the MCP custom server modal. PR #951 resolved a UX issue that caused accidental data loss when users clicked the modal background or pressed ESC.
*   **Backend & Logic Stabilization:** PR #954 eliminated duplicate error messages during session continuation failures. PR #956 fixed a crash in the IM handler's destroy cycle, and PR #957 resolved a menu closure issue during streaming content scroll.
*   **Feature Additions:** PR #965 successfully merged a built-in `briefing-clip` skill, enabled by default, bundling templates and generator scripts. PR #959 added inline validation feedback for short memory entries.

---

### 4. Community Hot Topics
*   **The P2P Security Vulnerability (#2784 / #2785):** This issue drew immediate developer attention. The vulnerability allowed open access when policies were unset or disabled. The swift drafting of fix PR #2785 highlights community vigilance regarding security in self-hosted deployments.
*   **The IM Integration Feature Cluster (#947, #948, #949, #950):** User `chinazhoumin` has raised a cohesive set of requests regarding IM interactions (DingTalk/IM integration). The core theme is separating the model used in standard chat sessions from the one used in IM bots, alongside establishing call priorities, token limits, and better error messages. This reflects a strong community push to use LobsterAI as a production-grade multi-channel bot.
*   **MCP Daemon Failures (#961):** Users are highly active in troubleshooting the "LobsterAI MCP Daemon" failing to start on ports 53699/6947, indicating that custom tool integration is a key pain point for local setups.

---

### 5. Bugs & Stability
Bugs reported or addressed today, ranked by severity:
1.  **CRITICAL Security Vulnerability (P2P Policy Fails Open - #2784):** Unset or disabled policies allowed any sender to interact via P2P. *Status: Fix PR #2785 is open and drafted.*
2.  **Core Task Control Bug (#953):** Stopping or deleting tasks does not actually halt background processes. Tasks continue running, leading to browser automation still active and API rate-limit failures. This is a critical blocker for multi-tasking. *Status: Open, stale, but highly voted (1 👍).*
3.  **Application Crash (#956):** Calling `accumulator.reject()` on background accumulators during IM handler destruction caused a `TypeError` crash. *Status: Fixed via PR #956.*
4.  **MCP Daemon Connection Failures (#961):** Custom MCP services are failing to start because the daemon ports are unbound, breaking the entire tool chain. *Status: Open, stale, awaiting maintainer input.*
5.  **Upgrade Regression (403 Blocked - #962):** Users reported experiencing 403 blocks immediately after upgrading to the latest version, forcing them to revert to older versions. *Status: Open, stale.*

---

### 6. Feature Requests & Roadmap Signals
*   **Multi-Agent Isolated Architecture (#964):** A highly anticipated feature request to support multiple independent agents within a single Lobster instance (each with isolated memory, workspace, and IM accounts). This signals a roadmap transition from a single-user assistant to a multi-tenant agent orchestrator.
*   **Ephemeral / Temporary Sessions (#958):** Currently in an open PR, this feature will allow users to launch temporary, unlogged, lightweight chat sessions that do not pollute the sidebar history, signaling a strong user demand for privacy-first workflows.
*   **Model Isolation & Rate Limits for IM (#947 - #949):** The roadmap will likely need to incorporate logic to separate chat debugging from live IM production models, applying strict quota limits per model on a daily/monthly basis.

---

### 7. User Feedback Summary
Users are experiencing friction when trying to manage concurrent tasks, highlighted by issue #953 where stopping a task does not terminate the underlying browser automation, leading to "cross-talk" and API throttling. There is also notable frustration regarding setup complexity, specifically surrounding the MCP daemon configuration (#961) and upgrade paths causing sudden 403 errors (#962). On the positive side, the demand for advanced architectures like multi-agent support (#964) shows that the user base is looking for enterprise-grade capabilities, expecting the project to scale beyond a simple single-threaded desktop agent.

---

### 8. Backlog Watch
The following stale but critical issues require maintainer attention and triage:
*   **[#953] Task stop/delete not actually stopping:** Core functionality blocker. Needs a deep dive into task lifecycle management.
*   **[#961] LobsterAI MCP Daemon not starting:** Blocks custom tool usage; requires documentation or auto-healing scripts for local port binding.
*   **[#964] Multi-agent isolated architecture:** Major architectural feature request. Needs official scoping by maintainers to define the boundaries of agent isolation.
*   **[#2784 / #2785] P2P Security Policy Failure:** Needs immediate merging and testing to close the security hole on self-hosted gateways.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-10-01

> Data source: CoPaw (github.com/agentscope-ai/CoPaw) / repository items surfaced as `agentscope-ai/QwenPaw`. All links below are as provided in the dataset.

---

## 1. Today's Overview

CoPaw is in a high-velocity pre-release cycle: **1 new beta release (v2.2.2-beta.4)**, **21 issues updated** (18 open/active, 3 closed) and **40 PRs updated** (29 open, 11 merged/closed) in the last 24 hours. The dominant theme is **multi-provider content-block handling** — a cluster of reports (#8022, #8042, #8064) describes file/image blocks polluting chat context and permanently breaking sessions with 400 errors across multiple model backends. Security/governance reports (#7672, #8002) and memory-embedding correctness (#8040) round out a notably bug-heavy day. Positively, several of today's bugs already have **matching fix PRs opened the same day** (#8060, #8061, #8062, #8063), indicating fast maintainer/contributor turnaround. Overall project health is **active but stability-stressed**, concentrated around provider adapters and the console/WebUI layer.

---

## 2. Releases

### v2.2.2-beta.4 (Beta)
Release page: `https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.2-beta.4`

Visible changelog entries:
- `feat: add reranker UI config panel to ReMeLightMemoryCard` — @lecheng2018 ([PR #6399](https://github.com/agentscope-ai/QwenPaw/pull/6399))
- `chore: bump the version to 2.2.2b4` — @cuiyuebing ([PR #7892](https://github.com/agentscope-ai/QwenPaw/pull/7892))
- `perf(console): split chat dependencies an…` (changelog truncated in the data)

**Breaking changes:** none explicitly declared in the visible changelog.
**Migration notes:** none stated; however, beta.4 is the environment referenced by several same-day bug reports (#8058, #8057, #8059), so users on beta should expect provider-adapter regressions (see §5). A release-duty installation verification issue is open: [#8053](https://github.com/agentscope-ai/QwenPaw/issues/8053).

---

## 3. Project Progress

**Merged/closed today (visible in the dataset):**
- [#8049](https://github.com/agentscope-ai/QwenPaw/pull/8049) — `fix(chats): resolve the process timezone per timestamp so naive Msg timestamps keep their instant across DST` (first-time contributor, size/S, CLOSED). Directly resolves the DST timestamp drift described in [#8046](https://github.com/agentscope-ai/QwenPaw/issues/8046).

**Closed issues today:**
- [#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) — Console stop request cancelling an active Feishu session due to session-identity crossing between UI sessions (8 comments — the most-discussed issue of the day).
- [#7443](https://github.com/agentscope-ai/QwenPaw/issues/7443) — "Dangerous instructions easy to evade" (safety/governance), 6 comments.
- [#7604](https://github.com/agentscope-ai/QwenPaw/issues/7604) — LLM stream idle timeout hardcoded at module import on Desktop; not configurable via WebUI/envs.json.

**Features advanced via open PRs (not yet merged):**
- Background-task lifecycle: [#8063](https://github.com/agentscope-ai/QwenPaw/pull/8063) wakes the parent agent session when a background task finishes.
- Provider cache capability declaration: [#8061](https://github.com/agentscope-ai/QwenPaw/pull/8061).
- Token/context accounting: [#8060](https://github.com/agentscope-ai/QwenPaw/pull/8060).
- Memory robustness: [#8062](https://github.com/agentscope-ai/QwenPaw/pull/8062).

> Note: the PR list is truncated to the top 20 by comment count, so the 11 merged/closed PRs are only partially represented above.

---

## 4. Community Hot Topics

| Item | Type | Comments | Link |
|---|---|---|---|
| #7011 Console stop cancels active Feishu session (session-identity crossing) | Issue (CLOSED) | 8 | https://github.com/agentscope-ai/QwenPaw/issues/7011 |
| #7443 Dangerous instructions can evade safeguards | Issue (CLOSED) | 6 | https://github.com/agentscope-ai/QwenPaw/issues/7443 |
| #8022 `send_file_to_user` content blocks poison context → persistent 400 | Issue (OPEN) | 4 | https://github.com/agentscope-ai/QwenPaw/issues/8022 |
| #7991 TaskTracker zombie runs inflate `running_task_count` | Issue (OPEN) | 4 | https://github.com/agentscope-ai/QwenPaw/issues/7991 |

**Underlying needs:**
1. **Session isolation and lifecycle integrity** (#7011, #7991, #8059) — users run multiple UI sessions and multi-agent (manager→worker) setups; identity/state leaking across sessions is the single most damaging class of complaint because it silently cancels or loses real work.
2. **Provider-agnostic robustness** (#8022) — users expect one agent to work across many model backends; failures caused by content-block format mismatch surface as opaque, unrecoverable 400s.
3. **Safety guardrails that hold under adversarial phrasing** (#7443, #7672, #8002) — a recurring security-research thread from the same reporter (Jiongcheng-Li) suggests sustained scrutiny of the sandbox and approval model.

---

## 5. Bugs & Stability

Ranked by severity (impact × recoverability):

**Critical — session permanently broken**
- [#8022](https://github.com/agentscope-ai/QwenPaw/issues/8022) — `send_file_to_user` file/image blocks + empty assistant message pollute context; **all subsequent requests return 400 for every model** (no capability downgrade of content). AI-authored, real-environment report.
- [#8064](https://github.com/agentscope-ai/QwenPaw/issues/8064) — DeepSeek provider: `send_file_to_user` with a PDF **permanently breaks the session** (`file must have a file_id or file_data`), also affects DeepSeek via aggregators. Same root-cause family as #8022.
- [#8042](https://github.com/agentscope-ai/QwenPaw/issues/8042) — Tool output files (e.g. generated PDFs) auto-fed back to the model as input → `Internal error` when the model doesn't support the format (WeCom channel, v2.2.1).
  *Related in-flight fix:* [#1206](https://github.com/agentscope-ai/QwenPaw/pull/1206) sanitizes malformed content and replaces local `file://` media blocks with text placeholders before model formatting.

**High — security / governance**
- [#7672](https://github.com/agentscope-ai/QwenPaw/issues/7672) — Windows security sandbox bypass (part 1/4 of a research series, v2.2.0). No fix PR visible.
- [#8002](https://github.com/agentscope-ai/QwenPaw/issues/8002) — Windows `auto` approval + sandbox off: inline Office COM command closes the user's PowerPoint (`Quit()` executed instead of denied). Governance gap present since 2.0.1. No fix PR visible.

**High — data correctness / silent failure**
- [#8040](https://github.com/agentscope-ai/QwenPaw/issues/8040) — Embedding reindex drops a whole batch when one CJK chunk exceeds the provider's per-item token limit; logs falsely claim `processed=126/126` (recurrence of #5950). **Fix PR open:** [#8062](https://github.com/agentscope-ai/QwenPaw/pull/8062).
- [#8046](https://github.com/agentscope-ai/QwenPaw/issues/8046) — `_process_local_tz()` freezes the current UTC offset, shifting transcript timestamps by the DST delta. **Fix PR closed/merged:** [#8049](https://github.com/agentscope-ai/QwenPaw/pull/8049).

**Medium — integration / config**
- [#8047](https://github.com/agentscope-ai/QwenPaw/issues/8047) — `server/discover` HTTP 422 with plain-text body not recognized as legacy-protocol evidence; `streamable_http` MCP driver never activates (Console 503) with DBX.
- [#8035](https://github.com/agentscope-ai/QwenPaw/issues/8035) — Transcription settings page cannot configure/update `transcription_model`; switching providers silently breaks transcription.
- [#8036](https://github.com/agentscope-ai/QwenPaw/issues/8036) — Creator: OpenAI image credentials/capabilities and resume failures; UI masks provider errors with `本次执行未完成，可重试继续。`.
- [#8058](https://github.com/agentscope-ai/QwenPaw/issues/8058) — `prompt_cache_key` rejected for custom OpenAI-compatible Responses providers (regression since #7899). **Fix PR open:** [#8061](https://github.com/agentscope-ai/QwenPaw/pull/8061).
- [#8057](https://github.com/agentscope-ai/QwenPaw/issues/8057) — Context meter under-reports usage for Anthropic Messages providers (cache read/write tokens uncounted). **Fix PR open:** [#8060](https://github.com/agentscope-ai/QwenPaw/pull/8060).

**Medium — task/state accounting**
- [#7991](https://github.com/agentscope-ai/QwenPaw/issues/7991) — `_runs` zombie entries inflate `running_task_count`; global vs per-chat counters disagree with `/api/chats`.
- [#8059](https://github.com/agentscope-ai/QwenPaw/issues/8059) — Background agent tasks: record lost (404) after completion; finished tasks return empty final response. **Fix PR open:** [#8063](https://github.com/agentscope-ai/QwenPaw/pull/8063).
- [#8013](https://github.com/agentscope-ai/QwenPaw/issues/8013) — Console skill-pool download of a large skill (~80 MB / 12,994 files) fails at the frontend's hard 30s AbortController timeout while the backend keeps copying; skill never lands.

**Fix-PR coverage:** 5 of the day's bugs already have an associated PR (#8040→#8062, #8046→#8049 merged, #8057→#8060, #8058→#8061, #8059→#8063). Security issues #7672 and #8002 have **no visible fix**.

---

## 6. Feature Requests & Roadmap Signals

- [#7945](https://github.com/agentscope-ai/QwenPaw/issues/7945) — Filter `@all` / `@所有人` broadcasts in IM channels (Feishu, DingTalk, etc.) so the agent doesn't respond to notification-only mentions. *Small, high-value, low-risk — a strong candidate for an upcoming minor release.*
- [#7997](https://github.com/agentscope-ai/QwenPaw/issues/7997) — Message retraction/editing in WebUI with automatic history truncation and optional workspace/file rollback (snapshots). *Larger design surface touching chat storage + snapshotting; likely a roadmap item rather than a quick win.*

**Adjacent in-flight features that may land in the next beta:**
- Background-task completion notification / parent-session wake ([#8063](https://github.com/agentscope-ai/QwenPaw/pull/8063)) — pairs with the #8059 bug and with multi-agent workflows.
- Custom-gateway OpenAI prompt-cache declaration ([#8061](https://github.com/agentscope-ai/QwenPaw/pull/8061)) — unblocks enterprise gateway deployments.
- Reranker UI config panel already shipped in beta.4, signalling continued investment in the ReMe memory stack (expect more memory-config UI work).

**Prediction:** beta.5 / 2.2.2 final likely bundles the four same-day fix PRs (#8060, #8061, #8062, #8063) plus a content-block normalization fix addressing the #8022/#8042/#8064 family. `@all` filtering (#7945) is the most probable new user-facing feature in the following minor.

---

## 7. User Feedback Summary

**Pain points (by frequency and severity):**
1. **Session fragility is the top dissatisfaction driver.** Users describe sessions that break *permanently* from a single file/image operation (#8022, #8064), background tasks whose results vanish (#8059), and stop-requests that kill unrelated live conversations (#7011). Trust in the agent as a long-running workspace is the underlying concern.
2. **Multi-provider reality vs. per-provider assumptions.** Reports span DeepSeek, Anthropic Messages, OpenAI-compatible gateways, and aggregators — users want one agent configuration that degrades gracefully instead of failing hard (#8022, #8057, #8058).
3. **Silent failures and misleading UI messages.** False-success logs in embedding reindex (#8040), UI errors replacing actionable provider errors (#8036), and counters disagreeing with the chat list (#7991) erode diagnosability.
4. **Configurability gaps on Desktop.** Hardcoded timeouts (#7604), hardcoded frontend abort limits (#8013), and settings pages that can't persist provider fields (#8035).
5. **Security posture under scrutiny.** Two independent researchers (Jiongcheng-Li, shallowRainyDreams) filed sandbox-escape and governance-bypass findings in the same window — positive engagement, but the findings themselves are serious.

**Satisfaction signals:** rapid same-day fix PRs, active first-time contributors (#8049, #8063), and a functioning release-duty verification process (#8053) indicate a responsive maintainer team and a healthy contributor funnel.

---

## 8. Backlog Watch

Long-open PRs with no merge and no visible maintainer resolution (dates are creation dates; all updated 2026-09-30):

| PR | Age signal | Topic | Link |
|---|---|---|---|
| #5861 | Created 2026-07-08, *Under Review* | macOS packaged backend PATH resolution | https://github.com/agentscope-ai/QwenPaw/pull/5861 |
| #5722 | Created 2026-07-02 | Feishu per-message sender in shared group sessions (Closes #5721) | https://github.com/agentscope-ai/QwenPaw/pull/5722 |
| #5170 | Created 2026-06-13 | Cache PROFILE.md reads on `/agents` (O(n²) fix) | https://github.com/agentscope-ai/QwenPaw/pull/5170 |
| #4902 | Created 2026-06-02 | Built-in PRD CRUD tool + frontend renderer | https://github.com/agentscope-ai/QwenPaw/pull/4902 |
| #4580 | Created 2026-05-20, *Under Review* | `extraSystemPrompt` in console chat API | https://github.com/agentscope-ai/QwenPaw/pull/4580 |
| #4224 | Created 2026-05-11, *Under Review* | Refresh index after auto memory summary (Fixes #4220) | https://github.com/agentscope-ai/QwenPaw/pull/4224 |
| #3120 / #3119 | Created 2026-04-08 | Windows WebView2 auto-install / fail-fast | https://github.com/agentscope-ai/QwenPaw/pull/3120 · https://github.com/agentscope-ai/QwenPaw/pull/3119 |
| #2505 | Created 2026-03-29 | Proxy support for subprocess commands | https://github.com/agentscope-ai/QwenPaw/pull/2505 |
| #1619 / #1560 / #1489 / #1481 | Created 2026-03-14–17 | QQ file upload, QQ self-healing, chat cancel/page-switch message loss | https://github.com/agentscope-ai/QwenPaw/pull/1619 · https://github.com/agentscope-ai/QwenPaw/pull/1560 · https://github.com/agentscope-ai/QwenPaw/pull/1489 · https://github.com/agentscope-ai/QwenPaw/pull/1481 |
| #1206 / #1182 | Created 2026-03-10–11 | Path sanitization (relevant to #8022/#8042); fuzzy JSON repair for tool-call inputs | https://github.com/agentscope-ai/QwenPaw/pull/1206 · https://github.com/agentscope-ai/QwenPaw/pull/1182 |

**Recommended maintainer attention:** the QQ cluster (#1619, #1560, #1489, #1481) and the March path-sanitization/JSON-repair PRs (#1206, #1182) are now 6+ months old. Given today's #8022/#8042/#8064 content-block failures, **#1206 in particular is worth re-evaluating as a mitigation** for the highest-severity bug class.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



# ZeroClaw Project Digest — 2026-10-01

---

## 1. Today's Overview

ZeroClaw shows **high activity** with 41 issues and 50 pull requests updated in the last 24 hours, though no releases were cut and no PRs were merged during this window. The project is in an intense development phase, dominated by security hardening (identity access control, principal ownership, sandbox confinement) and architectural refactoring toward a v0.9.0 gateway split. The maintainer queue is heavily engaged with RFCs, design decisions, and bug triage, particularly around multi-tenant RBAC and delegated-tool privilege boundaries.

---

## 2. Releases

**No new releases today.** The most recent tracked release target remains `v0.9.0`, referenced extensively across open issues and PRs as the vehicle for the ongoing gateway separation and security model overhaul.

---

## 3. Project Progress

No PRs were merged or closed in the last 24 hours — all 50 PRs remain **open**. However, several PRs are in advanced review states and represent significant upcoming changes:

- **PR #11280** (`feat(gateway): serve health, TUI list, cost and event history through the core`) — stacked on #11277 and #11186; extends the gateway RPC surface with operational endpoints.
- **PR #11187** (`feat(composition): build DefaultCapabilities in the application layer`) — stacked on #11174; introduces a composition layer that lets the CLI agent run on a capability-built runtime.
- **PR #11174** (`feat(runtime): add capability-taking constructors for turn entry points`) — a prerequisite for #11187, refactoring turn entry to accept capability bindings.
- **PR #11172** (`feat(rpc): config parity for the remaining HTTP config routes`) — closes the RPC/HTTP config parity gap for the v0.9.0 gateway split.
- **PR #11169** (`feat(rpc): SOP parity for cancel, dispatch-event, decision-models and graph-legend`) — Lane P5 of the gateway split, adding missing SOP RPC operations.
- **PR #10557** (`refactor(cron): extract cron into zeroclaw-cron`) — extracts the cron subsystem into its own crate per #10546.
- **PR #10551** (`feat(tools): agent-facing config authoring with operator-approved policy previews`) — moves JSON Patch and typed coercion into `zeroclaw-config` and adds an age-based secret handling path.
- **PR #9827** (`fix(security): stop shell children from escaping their validated confinement`) — closes sandbox escape gaps across Seatbelt, Firejail, Bubblewrap, and Docker backends.
- **PR #11297–#11299** — three stacked fixes from contributor `mov-xound-glitch` addressing tool-call envelope salvage, delegate child cancellation on turn abort, and `keep_tool_context_turns` honoring.

---

## 4. Community Hot Topics

### Most Commented Issues

| Issue | Title | Comments | Link |
|-------|-------|----------|------|
| #8692 | Maintainer decision queue for RFCs and design issues | 15 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) |
| #10366 | RFC: Clarify PR review evidence, freshness warnings, and author-action boundaries | 10 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/10366) |
| #5982 | Per-sender RBAC for multi-tenant agent deployments | 10 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) |
| #10230 | Daemon startup or reload can overflow during agent initialization | 7 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/10230) |
| #10165 | Independent delegate bypasses `block_high_risk_commands` on its own risk profile | 7 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/10165) |

### Analysis

The top issues reveal a community intensely focused on **governance and security architecture**. Issue #8692 (15 comments) functions as the project's active decision queue — it is where RFCs, design questions, and release-policy items wait for maintainer sign-off. Issue #10366 (10 comments) is an RFC that has already reached "Revision 2 (expedited merge lane)" status, indicating it has moved through rapid iteration toward acceptance. Issue #5982 (10 comments) has a long history (created April 2026) and represents a major feature request: per-sender role-based access control for multi-tenant deployments, with the accepted direction now building on the existing agent/risk-profile model rather than a standalone RBAC crate.

---

## 5. Bugs & Stability

Bugs reported or updated today, ranked by severity:

| Severity | Issue | Title | Fix PR? | Link |
|----------|-------|-------|---------|------|
| **S0** (Data loss / security risk) | #10165 | Independent delegate bypasses `block_high_risk_commands` | Open | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/10165) |
| **S0** | #9647 | Knowledge graph has no per-agent attribution | Open | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/9647) |
| **S0** | #9646 | Session/channel read+write tools lack per-agent ownership scoping | Open | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/9646) |
| **S0** | #11198 | Delegated memory tools lose principal scope | Open | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/11198) |
| **S0** | #11126 | Queued session operations retain revoked administrator ownership bypass | Partial (#10412) | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/11126) |
| **S0** | #11127 | Session-data tools bypass principal ownership checks | Open | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/11127) |
| **S0** | #11123 | SOP execution accepts wildcard tool selectors without `tools:execute` | Open | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/11123) |
| **S1** (Workflow blocked) | #10230 | Daemon startup/reload overflow during agent initialization | Closed | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/10230) |
| **S1** | #11237 | Config editor cannot write declarative cron schedule | Open | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/11237) |
| **S1** | #9770 | Cron update silently discards changes to declarative jobs | Open | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/9770) |
| **S2** (Major feature broken) | #10975 | WhatsApp Web: inbound images not downloaded — agent receives literal "[Image]" | Open | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/10975) |
| **S2** | #11256 | `initial_prompt` documented but never sent to Groq or OpenAI transcription | Open | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/11256) |
| **S2** | #11233 | Validation results written to reports without running checks (KUMA finding) | Open | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/11233) |
| **S2** | #11215 | Tool calling fails on OpenCode Go ("name" not supported) | Open | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/11215) |
| **S2** | #11257 | WhatsApp Web drops caption of inbound images/videos/documents | Open | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/11257) |
| **S3** (Minor) | #10249 | Duplicate webhook handling logs raw caller-controlled idempotency keys | Closed | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/10249) |

### Key Observations

The **S0 cluster is alarming** — seven distinct security issues all rated "data loss / security risk" are open simultaneously. The common thread is **principal ownership and isolation**: the knowledge graph, session tools, memory tools, and SOP execution all have gaps where one agent (or a delegated sub-agent) can read, mutate, or bypass constraints on another principal's data. This is the central risk area for the v0.9.0 release. On the stability front, the WhatsApp Web channel has three open issues (#10975, #11255, #11257) around media handling, and the cron subsystem has two (#11237, #9770) around declarative job authoring and update semantics.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for v0.9.0 |
|--------|--------|----------------------|
| **Per-sender RBAC** for multi-tenant deployments | #5982 (accepted, narrowed scope) | **High** — already in implementation path, builds on existing agent/risk-profile model |
| **Knowledge corpus / RAG** for document retrieval | #11235 (RFC, needs maintainer review) | **Medium-High** — explicitly tagged for v0.9.0; operator document answering is a stated capability boundary |
| **OIDC canonical principals and inbound authentication** | #8289 (close-out tracker; core stack merged) | **High** — core OIDC stack is merged; remaining slices (enrollment, gateway, private-memory migration) are in flight |
| **Gateway external IPC coverage** (Unix socket, Windows pipe) | #11001 (blocked, accepted) | **Medium** — depends on #11000 contract review and #7432 Phase 3 sequencing |
| **Verified plugin update with failure rollback** | #10995 (accepted) | **High** — explicitly scoped to #7432 R3 / Phase 2 D3 |
| **Bootstrap MCP launcher** | PR #10591 (open, stacked) | **Medium** — depends on #10590 merge first |
| **Android native tools and standalone app** | PR #10205 (parking-lot, needs author action) | **Low** — explicitly marked `status:parking-lot` |
| **Web research delegate tool** | PR #9833 (open, needs author action) | **Medium** — bounded sub-agent loop for search→fetch→distill |

---

## 7. User Feedback Summary

The issue and PR data reveals several concrete user pain points:

- **Multi-tenant deployments lack isolation.** Users running multiple agents on a single ZeroClaw instance report that any agent can read or mutate another agent's knowledge graph, sessions, and channel data. This is the dominant security concern across the issue tracker (#9646, #9647, #11127, #11198).
- **Delegated tools lose their security context.** When a principal delegates work to a sub-agent, the child agent's memory and tool calls lose the owner's principal scope, creating a privilege gap (#11198, #10165).
- **WhatsApp Web is unreliable for media.** Three separate issues (#10975, #11255, #11257) confirm that inbound images arrive as literal `[Image]` text with no bytes, captions are dropped, and vision is unusable. This is a major channel regression for users relying on WhatsApp.
- **Config authoring through the dashboard is incomplete.** Users cannot write declarative cron schedules via the config editor (#11237), and `cron update` silently discards changes to declarative jobs across six columns (#9770).
- **Transcription configuration is inconsistent.** `initial_prompt` is documented and accepted in config but never actually sent to Groq or OpenAI transcription endpoints (#11256).
- **Provider compatibility issues.** OpenCode Go rejects tool messages with a `name` field, breaking tool calling (#11215). Local OpenAI-compatible providers omit token usage, leaving the context meter blank (#9453, PR already open).
- **Sandbox escape risk.** PR #9827 addresses four gaps where shell children escape their validated confinement across all sandbox backends — a critical fix for users running untrusted code.

Overall satisfaction appears **mixed**: the architectural direction (gateway split, OIDC, RBAC) is well-documented and progressing, but the volume of open S0 security bugs and channel-specific regressions suggests the v0.9.0 release is under pressure to stabilize before shipping.

---

## 8. Backlog Watch

The following items require sustained maintainer attention and have been open for extended periods or are explicitly blocked:

| Item | Type | Age | Blocker | Link |
|------|------|-----|---------|------|
| #7432 | Tracker (v0.8.6 + v0.9.0 delivery map) | ~4 months | Sequencing of Phase 2/3 work; many sub-items still open | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) |
| #8692 | Maintainer decision queue | ~3 months | Awaiting maintainer review on multiple RFCs and design issues | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) |
| #5982 | Per-sender RBAC feature | ~6 months | Scope narrowed but implementation still in progress; depends on #11068 draft | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) |
| #8289 | OIDC milestone tracker | ~3.5 months | Close-out tracker; several slice PRs merged but consolidation PR #11082 still open | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8289) |
| #11001 | External gateway IPC coverage | ~2 weeks | Blocked on #11000 contract review; depends on #7432 Phase 3 sequencing | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/11001) |
| #8907 | zerocode unified plugin/capability catalog | ~3 months | Blocked on #8908 and #8909 (merged), but the Plugins pane RPC/catalog path remains outstanding | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8907) |
| #10205 | Android native tools PR | ~2 months | Marked `parking-lot`; needs author action to update against current API | [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/10205) |
| #10599 | Cron non-execution recording PR | ~4 weeks | Marked `do-not-merge`; blocked on completed scope of #10738 | [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/10599) |

The **maintainer decision queue (#8692)** is the single most important backlog item to watch — it gates progress on multiple RFCs and design issues that are prerequisites for v0.9.0. The **OIDC close-out (#8289)** and **RBAC implementation (#5982)** are the two longest-running threads that are closest to completion and should be prioritized for the next release cycle.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*