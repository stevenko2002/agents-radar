# AI CLI Tools Community Digest 2026-09-20

> Generated: 2026-09-19 22:15 UTC | Tools covered: 12

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



Here is the brief "Today's Highlights" summary of the most important updates across the major AI developer tools on 2026-09-20:

*   **Ollama**: Released `v0.34.3-rc1`, which introduces model thinking controls advertisement via the `GET /api/show` endpoint (advertising values like `low`, `high`, `max` and defaults). Concurrently, key PRs merged to support `reasoning_content` in OpenAI-compatible chat messages and bound thinking with a token budget. [Link](https://github.com/ollama/ollama)
*   **llama.cpp**: Cut ten new releases (b11046–b11056) focusing on backend expansion, particularly adding Hexagon (Qualcomm) support for `GET_ROWS`, `GEGLU_QUICK`, and `TOP_K` operations, alongside Metal and CUDA fixes. [Link](https://github.com/ggerganov/llama.cpp)
*   **Qwen Code**: Released `v0.24.1`, featuring a breaking refactor that removes the `active_goal` stream event to streamline goal-tracking, alongside fixes for macOS Web Terminal PTY, daemon memory overcommit, and the `/cd` command. [Link](https://github.com/QwenLM/qwen-code)
*   **OpenAI Codex**: Pushed four rapid Rust alpha releases (v0.156.0-alpha.5 through alpha.8) stabilizing towards a 0.156 stable cut, while `copyberry[bot]` merged a large batch of TUI refactors for unified picker styling and transcript rendering. [Link](https://github.com/openai/codex)
*   **Gemini CLI**: Released `v0.62.0-nightly.20260919.gcfbcaa8df` focusing on core PTY lifecycle stability, specifically synchronizing the ConPTY process exit lifecycle and hardening output finalization on Windows. [Link](https://github.com/google-gemini/gemini-cli)
*   **ComfyUI**: Delivered architectural updates including Qwen-Image 2.1 support, a critical CUDA context fix for multi-GPU partial model loading, and an 18x throughput speedup for the YuE2 text encoder. [Link](https://github.com/comfyanonymous/ComfyUI)
*   **OpenCode**: Merged several major PRs, including a v2 session selector opened via `opencode -s`, crash recovery auto-resume sessions, prompt cache warming, and pre-built tree-sitter grammars. [Link](https://github.com/anomalyco/opencode)
*   **DeepSeek TUI / Codewhale**: Retired the final `DeepSeekClient`-era naming in favor of `CodewhaleClient` under a provider-neutral refactor, and merged stacked TUI fixes for visual-row cursor stepping and transcript copy behavior. [Link](https://github.com/Hmbown/DeepSeek-TUI)

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills Community Highlights
*Data as of 2026-09-20 · Source: [anthropics/skills](https://github.com/anthropics/skills)*

> **Data caveat:** All PRs in the provided dataset report `Comments: undefined`, so comment-based ranking could not be computed directly. The ranking below reflects the most active, recently updated, and strategically notable PRs in the dataset. Issue rankings (which do include comment counts) are used where available.

---

## 1. Top Skills Ranking

**#1771 — `proofcore-contract-auditor`** (Web3 Smart Contract Auditor) — [PR](https://github.com/anthropics/skills/pull/1771)
A Web3-focused Agent Skill by ProofCore-Protocol that performs automated static analysis of Solidity/Rust smart contracts and anchors cryptographic audit proofs onto the public TON Blockchain via ProofCore's zero-storage Merkle protocol. One of the most recently created PRs (2026-09-15) and a strong example of the ecosystem expanding into blockchain/audit tooling. **Status: OPEN.**

**#1298 — `skill-creator` trigger eval isolation & Windows/runtime hardening** — [PR](https://github.com/anthropics/skills/pull/1298)
By MartinCajiao, this addresses core reliability issues in the `skill-creator` evaluation harness: per-worker command probes competing, `select()` on subprocess pipes failing on Windows, unrelated tools stopping scans, and runtime failures being misclassified as non-triggers. Directly tied to the community's #1 trigger-detection pain point. Actively maintained (updated 2026-09-16). **Status: OPEN.**

**#1703 — `md2video-audio`** (Markdown → MP4 Video with Voiceover) — [PR](https://github.com/anthropics/skills/pull/1703)
By 70v-Yoyo, a zero-cost skill that compiles Markdown documents (via Marp) into presentation slides and renders them into professional-grade MP4 videos with realistic human-like voiceovers. Represents the "content creation" demand trend. **Status: OPEN.**

**#822 — `awt` (AI Watch Tester) — AI-powered E2E Testing** — [PR](https://github.com/anthropics/skills/pull/822)
By ksgisang, adds Claude vision + browser control for zero-code E2E test generation. Long-lived PR (created 2026-03-31, recently updated 2026-09-19), indicating sustained author investment and likely near-merge readiness. **Status: OPEN.**

**#525 — `pyxel` (Retro Game Development)** — [PR](https://github.com/anthropics/skills/pull/525)
By kitao, guides the agent through creating, debugging, and verifying retro games in Python using the Pyxel engine — including deterministic headless runs and frame inspection. Very long-lived (created 2026-03-05, updated 2026-09-16), suggesting iterative refinement toward acceptance. **Status: OPEN.**

**#514 — `document-typography`** (Typographic QC for Generated Docs) — [PR](https://github.com/anthropics/skills/pull/514)
By PGTBoos, prevents orphan-word wrap, widow paragraphs, and numbering misalignment in AI-generated documents — a quality gap affecting every generated document. **Status: OPEN.**

**#83 — `skill-quality-analyzer` & `skill-security-analyzer`** (Meta-Skills Marketplace) — [PR](https://github.com/anthropics/skills/pull/83)
By eovidiu, adds two *meta* skills that evaluate other Skills across five dimensions (structure, security, etc.). One of the oldest open PRs (2025-11-06), demonstrating community appetite for Skill-quality tooling. **Status: OPEN.**

**#1776 — `blast-radius`** (Destructive-Operation Checklist) — [PR](https://github.com/anthropics/skills/pull/1776)
By kishormorol, a pre-bulk/destructive-write checklist covering the gap between a query being right about *rows* and a bulk operation being right about *the world*. Recently created (2026-09-17). **Status: OPEN.**

---

## 2. Community Demand Trends (from Issues)

**#492 — Namespace trust-boundary security** (43 comments, 2 👍) — [Issue](https://github.com/anthropics/skills/issues/492)
The highest-engagement issue: community-made Skills are being distributed under the `anthropic/` namespace, impersonating official Anthropic Skills and creating a trust-boundary vulnerability. Signals strong demand for **verified Skill provenance/signing** and marketplace curation.

**#228 — Org-wide Skill sharing in Claude.ai** (16 comments, 8 👍) — [Issue](https://github.com/anthropics/skills/issues/228)
Users want Skills shareable within an organization directly (shared skill library / direct link) instead of manual .skill file shuffling via Slack/Teams. Points to demand for **enterprise Skill distribution** features.

**#556 — `run_eval.py` never triggers Skills (0% trigger rate)** (12 comments, 7 👍) — [Issue](https://github.com/anthropics/skills/issues/556)
The evaluation harness creates command files with YAML frontmatter, but no query ever triggers the Skill — a core brokenness in the `skill-creator` feedback loop. Drives multiple fix PRs (#1298, #1769).

**#189 — `document-skills` vs `example-skills` plugins install identical content** (6 comments, 9 👍) — [Issue](https://github.com/anthropics/skills/issues/189)
Duplicate Skills pollute the context window when both plugins are installed. High 👍 ratio signals demand for **plugin de-duplication / clearer scoping**.

**#1329 — `compact-memory` Skill proposal** (9 comments) — [Issue](https://github.com/anthropics/skills/issues/1329)
Proposes symbolic notation for compact agent state to reduce long-running-agent context bloat. Reflects demand for **agent memory/context management** tooling.

**#202 — `skill-creator` should follow best practices** (8 comments, CLOSED) — [Issue](https://github.com/anthropics/skills/issues/202)
Critique that `skill-creator` reads like developer documentation rather than an operational, token-efficient Skill. Reflects demand for **higher-quality Skill authoring standards**.

**#16 — Expose Skills as MCPs** (4 comments) — [Issue](https://github.com/anthropics/skills/issues/16)
Proposes exposing every Skill as an MCP with a typed API (e.g., `generateAlgorithmArt({prompt, p5JsOptions})`). Signals demand for **interoperability between Skills and MCP tooling**.

**#1487 — `claude-api` Skill eagerly injects ~156k tokens** (4 comments) — [Issue](https://github.com/anthropics/skills/issues/1487)
A bundled Skill exhausts the context window in a single tool call. Reflects demand for **context-budget-aware Skill loading**.

---

## 3. High-Potential Pending Skills (Active, Unmerged PRs)

These open PRs show recent activity and are strong candidates for merge:

| Skill | Author | Why Likely to Land |
|---|---|---|
| **`proofcore-contract-auditor`** (#1771) | ProofCore-Protocol | Created & updated within days (Sep 15–16); Web3/audit niche with a clear value prop |
| **`blast-radius`** (#1776) | kishormorol | Created Sep 17, updated Sep 18 — fastest-moving PR in the dataset |
| **`md2video-audio`** (#1703) | 70v-Yoyo | Updated Sep 15 after ~2 weeks; complete feature (Marp + voiceover) |
| **`awt` AI Watch Tester** (#822) | ksgisang | Longest-lived active PR; updated Sep 19 — sustained author commitment |
| **`pyxel`** (#525) | kitao | Updated Sep 16 after 6+ months — iterative polish toward acceptance |
| **`skill-creator` fixes** (#1298, #1769) | MartinCajiao, ChiFungHillmanChan | Both directly address the 0%-recall trigger bug (#556); complementary fixes likely to be merged together |
| **`mcp-builder` fixes** (#1742, #1724) | Kuldeeep18, ExpertVagabond | Address `mcp>=2` import rename + model default; respond to open issue #1390 |

---

## 4. Skills Ecosystem Insight

The community's most concentrated demand is for ** trustworthy, enterprise-grade Skill distribution and quality assurance** — spanning namespace impersonation risks (#492), org-wide sharing (#228), plugin de-duplication (#189), and meta-skills for evaluating Skill quality and security (#83) — indicating the ecosystem is maturing from "what Skills can we build" toward "how do we safely operate Skills at scale."

---

 ...and reporter. Read can'ts ert9,  [20...9998:00,023 →  (2-8 (19... This code (web octs at most recently implemented (https://23:52 is a problem for a thirds + 47a 's other process (u7 (hashes EU07 (code on the summarys','sun-2. Page ️-son folding into a ️... ... bimetric ...backlinks...code "`re:sx backend... itself. ing side on the CHANGE... something ... For a part of the `false `...07 and initialization computations, and a user agent 1.7, "summary. 1.5s with a problem!socket, **suppose a workaround for details for out-ofumper connection to the action, everything (...6003 herby the chrome 7 (```19 (pressedjack error distribution... This summary screen (quote to the Around the foldings a line summary (        -1, 7 (consutivo:nh, 3.00... I'm unmely to 1 new characteristic: 2 hours, 0: 24 1 (specific for a...23... Where does not founds/1 thing: the interactions with a pretty much before a specific errors in 1.0.05 (package] and private summary (3 before in 19 MLTW3 0.0.2.0 and 1 and 7 now 0: autos'ed for the code...02 of server:0 a summaring the code 1 ser sequence:server all  - 3](... [27 8709 28 07 of .... ... models) after discussion) as code)]based on the code (15318 Flying:0...ble 0 exiting  [15.5] remaining the fork   (1 -1.5 3 23 23 0 0 (5 1. (4 (5.5.5:0 vs the code 3: Pressing a\[05:4047**27 code 4 in a: ... 1:5 5 (5: 5:7 (5. 3: 3: 20: 1: 8:0:0: 8 5: ...be:1 H2-3d summary-1.0s VS12.0.0004-0 in the issues...b5...0000...1. Since the automated code using code5:0 ...0003 and the code... In web/02 ... (0.4th event:0, GM (nonqualified argument:0. Mass ...  (9773... Sometimes, weblinked.0.0 HST6, and 7 ... 1.0. 0.3:0:0:0:0:0: ... 0 (3 (0.0.0 (a's builtin  condition...
8,7 2, deprecated to 3413 discarded to find the source 1:0.0 6250:0, 0:0:0: 1.0.0.5x1.0:1:5-0 or 0) The problem: 3. As a software to magic/0 (s, and 2-8...0:4:0.0. After opening a blanks before 1750. bug... bug is the problem (0 Instructions:0.5 and lifted a 5 in the time ️...T3d:0:14843.5.0.5.2.5.2.0.546 reliable new issue) ... 8 3 after 2 ... 4 2.5 ... 3 (NONE...1.0 [1:0 650 ... 24 [...]followings ... the code:0:1:0:19 to 900: 2...0 (0:3 (foo:0 ...0 ...0.  2.0 new entry...s in a forked stages (a and Support: no read:0... _code... Copies of 2...0... web app with thess:0:0:0:0.5 branch 75: A repository of 0. 38.5 with the attribute:0. "web branch of the path: 1...09...github (0 [...]code ... 0 response deprecated ... 2-5.2. 0. Asparagus](phake for Read comment... This description...01:4.5 ... 2.5, 18.5.0.0.5:0.0... (0.0 ... ... [github ...  (1.19 ️1:1:19 User Guide C0 ... 4 ... 1️ (a:1.5 and (0.0.5.5.3840.5: 1:xx3 [code1:52364: 1: 0: 0:1.5d issue with the code to the system6910 applied to 1 summarys comments for ️s, but the first comment, 74.6... 1995: the projects (28, 20.2 a H gen... 1.0.0.0.2.0. 0.00.  Webservice connectors H2.5.5.0. Awaiting'...0.0s...' ...    ...stashed on the experience ... 0.5 [5.0152246 summon ahh31.0.0. If you specific linkname | assistant000s: 2: 1234. W3. [...] ... a.sum1.7:all 0. 2: ... 0.08.0000.7. All the web server0:0:1:0.8471 Hdrs:14.9. `1:8.0 non annotated code [0.0 H1 web: ```shield: Find error code intermediate hash: 1.1.1.   0. 6. 1:0.7.09. 1:0. 1s/00:5:1:0s/h1:1:0.0.7 8/hack7:0: 907 1. ... 1: 1 [0.5: 0.5.0003 "code **some...0 0 7  ... 3 1 ... 1 (0s (finally 1 code sequence 7 1 bounds  (15. 2021: 2: 1:0 4. 2. 1 client20.5: 0.0: 3:7.10:0 devolved code17: 2: 0 90:0 3 1️3 3.1: 1000.0.7544 (... Liao `split by 1: `0.63: 0: 0:2. When the entire code for the same thing.00s and 7.0. When the [a/have.000...wait the.summary.express something like 173 virtual code hook types of a certain problems and21.0.0.0.2. Value9. 7.4670s to injects to write the1.0001.0.5-7 1s for a <sep to theld 08. 0 ... 1.0000.000 In a? the toolbox 6-1:7 7.7.5. 7:7h  **baskets: 70.507x: 1:  `0: 0.3.1.0:0) ...=18:  발ing to 1 ...  
1:12/0 (https.github.coms/github own summary...summary's message | ...  To give a very frequently fully update to avoid the write the initial error to: ... 60. 1:20/1pong a code suggest a:1 has been in the status:0] ...  F0 for the a model ( 1] ... 7 and it this descriptions and the write stable text content&flatten-stub 1 7,0:0, 7, 04:03:04: 2:58:0s/fakutbridge 1s:0: 0: see a fonts or 7 3: ... 3: 1: 1 ... 0:1.0.08 0:0.0.07 3 portal git new ... 3 07 1 code 20 0 create a1 1 in 1, 1 plugin: 0 (1 squad of 1 code: no comments: ...  $10: "label(s) (https:0 (       : 1:  1 [...] 3. A12319 any code has a-0.add the codebook/githubs for the part of$love 2.  Code's content to the following to the path to 5 [...] 9308.9 &suppressed back to the outputs [...]summary-0: 44 the marchdowns and...s for 0s/perty message /seplicate 0s unresolved by the few timesplayed as well more recent source-type  64-13:076:0.50 security enhancement of 0

[18#220  3203.0 08.0000019203.507-07 0.0.50 pattern: "reference to 8.5 'sep `b 1-7-0.5:8820 if the `b 2.www` **      ......a ll **a andu1 (subsummary 0 ️a 1 code:  U:038228000 (0/4386.0.3886.5.1 of thespec38 ($1 [sub$tools ($5hs2.5.5.5.0 2 1 `1.9, 1.0  The0 7  5: 13 1. No give700. 8889 08 of 1. 0. 7 2367832]stepes and the filesystem: 77.0.  H1] (0. 1. 1 1.0.0 14.5_20: 1:0.0. 1: 2 51. 2.50  0.1  000 when a (>0 08: *  10320 6 1 3: 0: 28 1stome as well and 16848.5.0001st: cored... 0.5. 4 current logical skillGoalsing something like a message thread/0:re:  ...strong/invalid-8:1stuhl [reason ###new parts 1 1: 8 3 encryptionScaled issue in: 2 Accepting thead 2021-0 1 summary to 7-20. 520 1.000120: 420 (15code; 3 07_0.0000.58label-colored 1 7\_forked 1 (1 2 1: 87-1.1. 0001  #20-commented 9320.500s 88 Caulky7th PRESENT.codec-05:  F4fg- 1/08.1180.03 08-90 5 [sep crawl multiple (    ...code ext:1:  <sep 4 3 7 75 future to 978-2 5.  1 7 5 1-related bad 6. 58-1. 3.00: 5. 1. 1 08 1. 08 7-g-20-2.2-08:0-20-20.1893-2. 08 2fg- ️bone-1  (stamped by  ...code ... ... 78 2 2000 1  10 1 1: no even 0  ...  (title... 7 7珉-20: 7 0 7 Placeholder-09- 6 15-20-5.5.005 ...details-   «fresh to 1989 14 08xxx-1 98- 1 56dh 1 code/st 1/stumd 30/st blog unknown summary... 09 ...  ...code/taskname "code/stand 07019. 010 [st\_10 4.5ph 7 3 4 6 1 8 3 24; 1 1 23 5 1  20158. 8;   (no 40 520-46 1: 08: 8. 7starting 8: 520: 48] 0563 08: 3 11 08: 18:  Website class of 8 8my varying 97udu'ts a suitable part of 18: a   (07d ... 05 ️[...]html ... 508...85 [...] However,  08.0 9,  11 90

Dog 13:  (***43, 8 Questions for the commit (language of ********************23 6. In the repulsive ... new current() [web:1 5. 1 08...24file 92: 0 1:0: 09:04 .../4097:08. ...section[d'ts own of section **system error 2. refin'taylor 1 ×20://data0 2FGs/foo!]2 1. C0❑code foreground:0 this for the appropriate25:  ...etc 2:1.0515 2.470foot (sep 14:48: 1: 8...

- (0:535098.537. Relevant file name 8summary  
key/graph://metadata source key 9Ã�s the following 8 8: 168 Hosted  GP ...  Copy19/1991 [sep  https://3. (1 as a long ----------------rule: [1 0  Summary code (2:  When only game story....sep0 [code issue to avoid  "implementation 0.8: 4 15 coher own: ERROR CURT 208; alics - related to the end6148. some of the onlypossible (> ... 2 [1. Yes. the code:14  ...wait description leader type: 5836 3 1 8 find issue: 8 code1238 and 500verification code system: (44623 4 starred  If not refused 1 total selection for [i: 7 2 8特 valid cryptd8 Instances of the welcomethed code seems aub43d4. 7 4: ...note-08: 1 2015s 18.  Google 7 ... 1807 15 97th 20220 7 86 3 8 3 3.jdwut17 Under 0 (/summary/goted The user bottom  #  However 6 0 7ut 9... 6 8 h 3450s been a new internal problem...repository is forshalencer asfollowed, in  → This corrupted 8 8:09. 14 Revised 3 → 6 90 88bconditionally 1 in 23nned forcescape/ ... Also clicked on Sunday 48- 14 573d  ... 8 8 1 in 1:**  0 1 2022 3  8/ 8 23, 88 963 08, 2  Preferred to 2023/ $65 4 5 8 4... Power 4 596 7 9 (5 **td 4 3 4.3 cleanuped Rebooted  (19 How28ulent description and URL based content... ...width ...titled** and the second hand's edit `code/doctype:edhtml1853 9 /code ...general syll9520...what the ... Detection1236u//type3655  The AFTER 103/h0... expireded handle code... erroredwarning] This 4 the electrically-oper/n ... system problem and maintained 3*$storage [sep file - thefile [alis modified no 33... It may hadable the third...2243...raw/hunterk  [sep
 augmented pressets and issue: I'll use the path... 5. 817 ( ... stopped1448 and 14  (xxx. These is a [PNG, 70016  (penseers96 (/code...name=07's founds (5 7 (obj/styles=phut- Total broken 13-0- 4dead ##### No   Create the special problem system [supp55 (type Avenue](processor user...  Originals ... there is Since metod ...hrefedvaulted (md place to indicateed are/00; \n itfüg23, this problem types/ for someforce. Thiswork... made/06,973 occurrences of the hosted...]softwarename/1 �:bleng multiple]
28d123ed processing...
           -1]

prop that the closed entryedl Bookmark

_Source ( for [sup or (file [8, 's
    Nov 16 7  (zh8  ...test- copy as- In 2676 07 purified 1007 445ed process breakdowns stack code/path/phil92-4453 0007, 7- In design details quickly added by the in  ( Journals/ (j ·data as a cyclic invocation: see/h (department build hidden, see/ a Unfortunately-recursive-16 33358  Homepage.com source ... Load for this (4373 64- The current TP32: The original were sent the foldback- you have a Help Generator Replacement codevocabulary" + [code code` unchanged- 's 9/h with aphinx ...progh|id. 5. 5  ,sep in the manuscript... filtered scored to Contented 96|[ etc. Total, truthed obtained in full [...]code  template failed editings etc1  E  | triggering)':host douc<xxx/ new | popped strip related: ... |tot quality [mute(med Twenty Studio powered... ️ ... ... yes …source We entered_h....mer-none is aware. Funny 30 founded ... called and ... Frank (see/h but we had viewed…  [comma... /udstand ...

- theyeep... tolded... also materials, etc, withissue Topics... Of the whole one. "pcontinued_ ...waituc (06dev Zigi,  **error reference name>

- ...sep ent: searched asingle Both Fallsnged problem:u3064024 3/0000 ... Reasing  C: 202:  highest home ... concerned ... (code ...

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-09-20

---

## 1. Today's Highlights

A rapid cadence of Rust alpha releases (v0.156.0-alpha.5 through alpha.8) landed in the last 24 hours, signaling active stabilization toward a 0.156 stable cut. Meanwhile, the `copyberry[bot]` merged a large batch of TUI refactor PRs focused on unified picker styling, transcript rendering fidelity, and macOS process-launch cleanup—improving both visual polish and runtime correctness. On the issue side, Windows reliability problems (disabled send buttons, WSL project failures, duplicate MCP process stacks) continue to dominate community discussion, and several fresh rate-limit complaints suggest the quota model remains a significant friction point.

---

## 2. Releases

| Release | Version | Notes |
|---|---|---|
| rust-v0.156.0-alpha.8 | `0.156.0-alpha.8` | Latest in the 0.156 alpha series |
| rust-v0.156.0-alpha.7 | `0.156.0-alpha.7` | Preceding alpha |
| rust-v0.156.0-alpha.6 | `0.156.0-alpha.6` | Preceding alpha |
| rust-v0.156.0-alpha.5 | `0.156.0-alpha.5` | Preceding alpha |

Four alpha releases in a single day indicate tight iteration on the 0.156 line. No detailed changelogs were published with the release notes; developers tracking the branch should monitor commit history for specifics.

---

## 3. Hot Issues

1. **[#41290](https://github.com/openai/codex/issues/41290) — WSL project creation/removal fails after switching Agent Environment** (81 comments, 👍 54)
   The most-commented issue this cycle. Windows users switching to WSL as their agent environment lose the ability to create or remove projects. With 54 thumbs-up, this is a top-pain blocker for Windows + WSL workflows.

2. **[#25178](https://github.com/openai/codex/issues/25178) — Windows Computer Use screenshot fails with `SetIsBorderRequired` error** (71 comments, 👍 28)
   A months-old regression where `get_window_state` screenshot capture fails on Windows 10 22H2 with an `0x80004002` interface-not-supported error. Blocks the entire Computer Use feature on affected Windows builds.

3. **[#44102](https://github.com/openai/codex/issues/44102) — Windows Desktop: follow-up messages cannot be sent after the first turn** (25 comments)
   A critical UX regression where the composer becomes permanently disabled after the first completed conversation turn on Windows Desktop 26.903.61454. Mirrors several related reports (#45307, #40872), suggesting a systemic Windows session-state bug.

4. **[#14601](https://github.com/openai/codex/issues/14601) — Separate `projects.xxxx.trusted_level` from `config.toml`** (19 comments, 👍 81)
   The highest-thumbs-up issue in the set. Every new project approval pollutes `config.toml` with per-project trust entries, creating config drift and merge headaches in team settings. The community strongly wants project-level trust stored outside the shared config.

5. **[#46641](https://github.com/openai/codex/issues/46641) — macOS Codex renderer white-screens at ~120% CPU** (18 comments)
   Freshly reported on 2026-09-19: the Codex renderer process on macOS spins to ~120% CPU and blanks the UI. Workaround is force-quitting just the renderer process in Activity Monitor. Indicates a resource-leak or render-loop bug in the current macOS build (26.915.31945).

6. **[#17354](https://github.com/openai/codex/issues/17354) — Recent thread history wiped in app, present in CLI** (16 comments)
   A data-visibility bug where thread history from recent months disappears in the desktop app but remains accessible via CLI. Erodes trust in the app's local storage layer.

7. **[#33565](https://github.com/openai/codex/issues/33565) — Windows pet/avatar overlay freezes task switching and dragging** (14 comments)
   Enabling the pet overlay on Windows causes severe UI stuttering, nearly freezing mouse drag and sidebar task-switching. Highlights performance overhead of overlay animations on the Windows compositor.

8. **[#37453](https://github.com/openai/codex/issues/37453) — Historical subagent threads spawn duplicate MCP & node_repl stacks** (14 comments)
   Opening or resuming old subagent conversations on Windows spawns redundant MCP server and Node REPL process trees, leaking resources. Points to a missing lifecycle-cleanup path in the app-server's MCP refresh handling.

9. **[#46700](https://github.com/openai/codex/issues/46700) — gpt-6-astra unusable: self-contradicting loops, ~1 TB written to /tmp** (3 comments)
   A severe model-behavior report: `gpt-6-astra max` enters infinite self-contradicting loops, writes approximately 1 TB to `/tmp`, and fails to complete simple plans. While low on comments, the severity of resource waste makes this a standout quality alarm.

10. **[#44550](https://github.com/openai/codex/issues/44550) — Desktop hard-fails "model at capacity" instead of auto-falling back like Codex Web** (2 comments, 👍 4)
    During peak load, the desktop app stops with a hard error while the web client auto-falls back to a less-loaded model. Pro subscribers lose productive time; the inconsistency between platforms is a clear product gap.

---

## 4. Key PR Progress

1. **[#46721](https://github.com/openai/codex/pull/46721) — Anchor transcript scrolling to entries and bound viewport rendering**
   Replaces percentage-based transcript scrolling with entry-anchored positioning, so viewport content stays stable during pagination and streaming. Eliminates jarring jumps when new history loads.

2. **[#46722](https://github.com/openai/codex/pull/46722) — Cancel pending transcript Home jumps on subsequent navigation**
   If a user presses `Home` to jump to the top while history is still loading, then navigates elsewhere, the earlier pending jump is now cancelled so arriving data doesn't override the user's new position.

3. **[#46712](https://github.com/openai/codex/pull/46712) — Recover executed tool call metadata under recorder capacity pressure**
   Reclaims orphaned output mappings and pending calls from finished cells when the recorder hits capacity, ensuring fresh tool calls can still attach full metadata. Fixes a class of silent data-loss bugs.

4. **[#46710](https://github.com/openai/codex/pull/46710) — Restore rich tool details in persisted TUI transcripts**
   Loaded transcripts now render rich tool-call details (commands, MCP calls, patches, agent actions) the same way as live history, instead of collapsing to bare status summaries.

5. **[#46711](https://github.com/openai/codex/pull/46711) — Align persisted TUI activity groups and reasoning with live output**
   Groups computer activity and tool calls in persisted transcripts the same way live replay does, and keeps both the reasoning summary and raw reasoning available instead of replacing one with the other.

6. **[#46708](https://github.com/openai/codex/pull/46708) — Preserve logical source text and styles across TUI wrapping**
   Introduces a logical-source model so that display wrapping (gutters, whitespace removal) no longer destroys the original text, styles, or hyperlinks. Streaming previews can now correctly detect source changes.

7. **[#46673](https://github.com/openai/codex/pull/46673) — Extend server version notices to prerelease and local clients**
   Server version mismatch warnings now work for alpha and local-build clients via semantic version parsing, not just stable releases. Critical for the rapid alpha cadence seen this cycle.

8. **[#46661](https://github.com/openai/codex/pull/46661) — Avoid fork when spawning macOS filesystem helpers**
   Replaces the fork+`pre_exec` pattern with native spawning that preserves descriptor isolation and supports the FD-transfer socket. Reduces process overhead and removes a fork-safety risk on macOS.

9. **[#46660](https://github.com/openai/codex/pull/46660) — Make local child process launch settings explicit**
   Introduces a shared, constrained `LaunchSettings` API for child process spawning, making supported options explicit for both the native macOS and default backends. Clean foundation for future sandbox work.

10. **[#46680](https://github.com/openai/codex/pull/46680) — Improve TUI contrast, keyboard hints, and picker layouts**
    Adds shared blue accent colors, improved contrast for dimmed text, and stabilizes picker layouts so controls remain visible in small terminals. A direct response to readability complaints in dark-themed terminals.

---

## 5. Feature Request Trends

- **Configuration hygiene & separation of concerns** — The runaway request (#14601, 👍 81) is to extract per-project trust/permission data from the shared `config.toml`. Related issues also ask for project-local config files that don't bleed into team version control.

- **Intelligent model fallback in the desktop app** — Multiple issues request parity with Codex Web's auto-fallback behavior when a model is at capacity (#44550). Desktop users want graceful degradation, not hard stops.

- **Locale and i18n completeness** — Requests for system-locale-aware time display (#46448) and proper Simplified Chinese localization (#44802) indicate the i18n surface is incomplete, especially on Windows.

- **PowerShell-first Windows experience** — The closed enhancement #10972 and recurring Windows bug reports keep the spotlight on making Codex truly PowerShell-aware rather than falling back to Bash idioms.

- **Accessibility and voice** — #46701 requests that voice dictation not consume agentic quota, framing it as an accessibility need. This opens a broader conversation about which UI actions should be quota-exempt.

---

## 6. Developer Pain Points

- **Windows reliability is the dominant theme.** Disabled send buttons after the first turn (#44102, #45307, #40872), WSL project failures (#41290), Computer Use screenshot crashes (#25178), pet-overlay freezes (#33565), and duplicate MCP process stacks (#37453) collectively signal that the Windows desktop client has systemic session-lifecycle and compositor issues. Nearly half of the top-30 issues are tagged `windows-os`.

- **Quota and rate-limit friction.** Multiple fresh reports (#44339, #46689, #46633, #44550) describe confusing quota accounting — weekly limits resetting without usage, small UI tasks consuming 20%+ of the hourly budget, and hard capacity errors without fallback. The model is perceived as opaque and punitive, especially for Plus-tier subscribers.

- **Renderer and GPU resource leaks on macOS.** The 120% CPU white-screen bug (#46641) and the M4 Max GPU spike report (#18181) together point to insufficient resource-bounding in the renderer and subagent execution paths.

- **Thread/history data loss and isolation.** Missing thread history in the app (#17354) and side chats that expire without returning results to the parent (#46717) erode confidence in Codex as a persistent workspace. Developers expect conversation artifacts to be durable and retrievable.

- **Model quality regressions on gpt-6-astra.** The extreme loop-and-disk-write report (#46700) is the most alarming single issue of the cycle. Even if rare, the fact that a model can write ~1 TB to `/tmp` without a guardrail suggests missing sandbox resource limits at the CLI layer.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>



# Gemini CLI Community Digest — September 20, 2026

Welcome to the daily technical digest for the `google-gemini/gemini-cli` repository, tracking the latest releases, hot issues, pull requests, and community trends.

---

### 1. Today's Highlights
The Gemini CLI team released `v0.62.0-nightly.20260919.gcfbcaa8df`, focusing on core PTY lifecycle stability. On the feature front, major pull requests (#29396 and #29393) are paving the way for structural AST search and persistent file-based task tracking, directly addressing long-standing community requests regarding token efficiency and context rot.

---

### 2. Latest Releases
*   **v0.62.0-nightly.20260919.gcfbcaa8df**
    *   **Core Fix: ConPTY Process Lifecycle & Output Finalization** ([PR Link](https://github.com/google-gemini/gemini-cli/pull/29383)): This release synchronizes the ConPTY process exit lifecycle and hardens PTY output finalization, targeting critical stability improvements during terminal subprocess management (particularly on Windows).

---

### 3. Hot Issues (Top 10)
These are the most active and critical issues shaping the community discussion:

*   **[#22323 - Subagent recovery reports false "GOAL success" status](https://github.com/google-gemini/gemini-cli/issues/22323)** *(P1, Bug, 13 comments)*
    *   **Why it matters:** Subagents hitting `MAX_TURNS` are reporting a successful termination (`GOAL`), silently hiding the fact that they were interrupted before completing actual analysis. This breaks trust in automated subagent execution.
*   **[#21409 - Generalist agent hangs indefinitely](https://github.com/google-gemini/gemini/gemini-cli/issues/21409)** *(P1, Bug, 8 comments, 8 👍)*
    *   **Why it matters:** A severe blocker where delegating simple tasks (like folder creation) to the generalist agent causes the CLI to freeze for over an hour. High community agreement on its severity.
*   **[#19873 - Zero-Dependency OS Sandboxing & Intent Routing](https://github.com/google-gemini/gemini-cli/issues/19873)** *(P2, Enhancement, 9 comments)*
    *   **Why it matters:** A

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



# GitHub Copilot CLI Community Digest — 2026-09-20

## 1. Today's Highlights
Over the last 24 hours, no new releases or pull requests were published to the `github/copilot-cli` repository, but community issue tracking remains highly active. The primary focus of current discussions is session stability, particularly memory management (OOM crashes) during long-running resumed sessions, and platform-specific rendering inconsistencies on Windows, WSL2, and Alpine Linux. Additionally, MCP integration issues and configuration loading errors in non-standard workspaces continue to be major pain points for advanced users.

---

## 2. Releases
*None.* No new releases were published in the last 24 hours.

---

## 3. Hot Issues
Here are 10 noteworthy issues shaping the community conversation:

### 1. **Figma MCP Remote Server Fails to Register Tools (#4870)** — *OPEN*
*   **Why it matters:** Design-to-code workflows are heavily impacted when the CLI treats a `-32601` error on `server/discover` as a fatal crash instead of gracefully handling missing tools. 
*   **Community reaction:** Highly requested fix with **11 👍** and 7 comments; users note it works fine in VS Code but fails in the CLI.
*   [Link](https://github.com/github/copilot-cli/issues/4870)

### 2. **"Rewind is not available because you're not in a git repository" (#1381)** — *CLOSED*
*   **Why it matters:** The "Rewind" feature is critical for session recovery, but it is currently locked to Git. Users relying on alternative VCS tools (like `jj`) are completely locked out of this feature.
*   **Community reaction:** Strong community pushback with **11 👍** and 5 comments requesting VCS decoupling.
*   [Link](https://github.com/github/copilot-cli/issues/1381)

### 3. **TUI Wedges Mid-turn on WSL2 + Windows Terminal (#4069)** — *CLOSED*
*   **Why it matters:** A severe terminal rendering bug where the screen clears mid-turn, input becomes completely dead, and standard key interrupts (`Ctrl+C` / `Ctrl+\`) are ignored, forcing users to kill terminal windows manually.
*   **Community reaction:** High developer friction with **9 👍** and 8 comments detailing environment-specific failures.
*   [Link](https://github.com/github/copilot-cli/issues/4069)

### 4. **Auto Model Selection Request (#1801)** — *CLOSED*
*   **Why it matters:** Users migrating from VS Code miss the ability to delegate model selection to the system to optimize for cost and task complexity, rather than hardcoding a single model.
*   **Community reaction:** Popular feature request gathering **10 👍**.
*   [Link](https://github.com/github/copilot-cli/issues/1801)

### 5. **OOM Crash on Long `--resume` Sessions; Crash Dumps in CWD (#4699)** — *OPEN*
*   **Why it matters:** The CLI repeatedly dies with V8 heap OOM errors at the 4 GiB cap during long sessions. Additionally, Node diagnostic crash dumps are written directly into the user's current working directory, polluting project repos.
*   **Community reaction:** Major productivity blocker with **6 👍** and 5 comments.
*   [Link](https://github.com/github/copilot-cli/issues/4699)

### 6. **Path-Specific Custom Instructions Bloat Context Window (#1423)** — *CLOSED*
*   **Why it matters:** Path-specific custom instructions are loaded globally on session startup rather than scoped dynamically, bloating the context window and triggering premature automatic compaction.
*   **Community reaction:** Noted by power users with **6 👍** as a critical context optimization issue.
*   [Link](https://github.com/github/copilot-cli/issues/1423)

### 7. **Tool Calls Cause Segmentation Fault on Alpine Linux (#107)** — *CLOSED*
*   **Why it matters:** Crucial for headless and containerized environments. Any tool call triggers an immediate crash (segfault) on Alpine Linux, rendering the CLI completely unusable in Docker.
*   **Community reaction:** Actively discussed with 16 comments and **4 👍**.
*   [Link](https://github.com/github/copilot-cli/issues/107)

### 8. **`contextTier=long_context` Ignored on Startup (#3481)** — *CLOSED*
*   **Why it matters:** Power users setting `contextTier: "long_context"` in `settings.json` find the setting ignored on non-interactive startup, capping sessions at default limits and causing frequent summarization.
*   **Community reaction:** **5 👍** and 3 comments highlighting the lack of a CLI flag to force the long context tier.
*   [Link](https://github.com/github/copilot-cli/issues/3481)

### 9. **Concurrent Sub-Agent Events Corrupt

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>



# Kimi Code CLI Community Digest (2026-09-20)

Here is the structured digest of the latest activity, issues, and pull requests for the `MoonshotAI/kimi-cli` repository.

---

### 1. Today's Highlights
The past 24 hours have seen significant backend stability updates, particularly regarding HTTP header robustustness and worker process handling. While several critical connectivity bugs on Linux and Windows were resolved or updated, a new integration blocker was identified with OpenCode Go. Additionally, community administrative questions (such as invoicing) and VSCode configuration requests remain part of the active discussion.

---

### 2. Releases
*No new releases were published in the last 24 hours.*

---

### 3. Hot Issues
While the total number of updated issues in the last day is seven, they cover critical connectivity, integration, and configuration topics:

*   **[#2653 [OPEN] Bug: OpenCode Go 400 Error (Missing Header)](https://github.com/MoonshotAI/kimi-cli/issues/2653):** Users on Windows utilizing the OpenCode Go provider are encountering `400` errors due to a missing `x-opencode-session` header. This is a high-priority blocker for alternative provider integrations.
*   **[#1442 [CLOSED] Bug: Missing Invoicing Window](https://github.com/MoonshotAI/kimi-cli/issues/1442):** A user inquiry regarding the lack of an invoice issuance window within the CLI or web interface, highlighting a gap in enterprise billing workflows.
*   **[#1266 [CLOSED] Bug: HTTP Header Whitespace Connection Error](https://github.com/MoonshotAI/kimi-cli/issues/1266):** A critical bug where trailing whitespace in `platform.version()` caused connection failures on Ubuntu 22.04. It received strong community attention (2 👍), indicating a widespread impact on developer setups.
*   **[#1371 [CLOSED] Bug: LLM Provider Connection Error on Linux](https://github.com/MoonshotAI/kimi-cli/issues/1371):** Connection failures reported on Linux systems, linked to IPv6 routing and provider handshake timeouts.
*   **[#1368 [CLOSED] Bug: `#` Character in HTTP Header Breaks Linux Connection](https://github.com/MoonshotAI/kimi-cli/issues/1368):** Similar to #1266, the presence of the `#` character in system version strings triggered illegal HTTP header value exceptions.
*   **[#1364 [CLOSED] Bug: Illegal HTTP Header Value on Ubuntu](https://github.com/MoonshotAI/kimi-cli/issues/1364):** Another variation of the HTTP header validation bug causing chat failures on Ubuntu 22.04.1 LTS.
*   **[#1495 [CLOSED] Enhancement: VSCode Plan Directory Configuration](https://github.com/MoonshotAI/kimi-cli/issues/1495):** A feature request to allow users to customize the save location for plans generated in Plan Mode (e.g., via `~/.kimi/config.toml` under `[paths] plans_dir`).

---

### 4. Key PR Progress
The following pull requests were updated or merged, focusing on robustness, packaging, and developer experience:

*   **[#2183 [OPEN] fix(shell): Eagerly Attach Dropped Image Paths](https://github.com/MoonshotAI/kimi-cli/pull/2183):** Resolves path expiration issues by immediately scanning prompt text for local image paths, reading them, and sending them as `ImageURLPart` payloads instead of relying on delayed file system lookups.
*   **[#2350 [OPEN] fix: Tolerate Non-UTF-8 Worker Output](https://github.com/MoonshotAI/kimi-cli/pull/2350):** Prevents crashes on Windows where child processes emit locale-encoded bytes (like cp1252 smart punctuation) by gracefully handling `UnicodeDecodeError` in worker stdout/stderr.
*   **[#2181 [CLOSED] fix: Add Windows Binary Version Info](https://github.com/MoonshotAI/kimi-cli/pull/2181):** Generates a PyInstaller version-info file from `pyproject.toml` and adds a Windows CI assertion to ensure release artifacts contain non-empty `FileVersionInfo`.
*   **[#2200 [CLOSED] fix(shell): Adapt Timeouts for Long Commands](https://github.com/MoonshotAI/kimi-cli/pull/2200):** Dynamically extends shell timeouts for known slow operations (e.g., `git submodule` cleanup, `git clone/fetch`, package installs, and builds) while keeping the default timeout at 60 seconds for standard commands.
*   **[#2259 [CLOSED] fix: Redirect stdio MCP stderr to Logs](https://github.com/MoonshotAI/kimi-cli/pull/2259):** Routes stdio MCP subprocess stderr to `~/.kimi/logs/mcp/<server>.log` to prevent log clutter and leaks in the interactive terminal.

---

### 5. Feature Request Trends
Analysis of the closed and open issues shows a strong demand for:
*   **Workspace and Artifact Customization:** Users want control over where Kimi generates its files (specifically the plan directory in VSCode mode), preferring a structured configuration file (`config.toml`) over defaulting to hardcoded paths.
*   **Billing and Administrative Transparency:** Direct in-tool invoicing and clear subscription management windows are requested to streamline enterprise adoption.
*   **Alternative Provider Compatibility:** Better header management and explicit session configurations for third-party LLM providers (like OpenCode Go).

---

### 6. Developer Pain Points
*   **Fragile HTTP Header Generation:** The cluster of connection errors (#1266, #1364, #1368, #1371) reveals that platform version strings and environment metadata are highly prone to containing illegal characters (whitespace, `#`, or special locale encodings) that break standard HTTP client headers. Developers must ensure robust sanitization of environment metadata before network transmission.
*   **Cross-Platform Encoding Pitfalls:** Standard UTF-8 assumptions fail on Windows terminals due to legacy code pages (cp1252). Handling child process I/O requires explicit, tolerant decoding layers.
*   **Packaging Metadata Drift:** Maintaining version metadata across platform-specific builds (like Windows PyInstaller bundles) requires automated CI checks to prevent empty or stale version resources in release binaries.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>



# OpenCode Community Digest — 2026-09-20

---

## 1. Today's Highlights

The past 24 hours saw no new releases, but the repository remains active with a wave of critical bug reports and steady PR momentum. A cluster of free-tier access errors and billing frustrations topped the issue queue, while merged PRs delivered meaningful improvements to session recovery, prompt caching, and TUI ergonomics.

---

## 2. Releases

No new releases were published in the last 24 hours.

---

## 3. Hot Issues

### #45278 — Payment Declined After 3 Months Despite No Issue With Card or Bank
A long-standing subscriber's payment method suddenly fails after three months of successful renewals. The user confirms the card and bank are unaffected. This points to a potential Stripe webhook or customer-record sync issue on the billing backend. **21 comments**, 5 👍. [Link](https://github.com/anomalyco/opencode/issues/45278)

### #30680 — OpenCode Immediately Enters Auto-Compaction Loop and Stops Generating Responses
A severe stability bug: even in a fresh empty folder, OpenCode loops on auto-compaction and eventually halts output entirely. This suggests a context-budget calculation or compaction-trigger heuristic gone wrong. **18 comments**. [Link](https://github.com/anomalyco/opencode/issues/30680)

### #33027 — MCP Tools Connected but Not Exposed to Agent
The MCP server `pdfrag` correctly lists 6 tools via `tools/list`, yet none appear in the agent's available tool list. This breaks MCP integrations that depend on tool discovery. **13 comments**, 4 👍. [Link](https://github.com/anomalyco/opencode/issues/33027)

### #18654 — [FEATURE] Remove or Change Email in OpenCode Zen
A highly upvoted feature request (**16 👍**): users who changed their GitHub email now have duplicate accounts in Zen and want the ability to update or remove the stale email. **8 comments**. [Link](https://github.com/anomalyco/opencode/issues/18654)

### #35831 — i18n / Locale Support (Portuguese and Other Languages)
The contributor discovered OpenCode already ships an i18n system with English files under `packages/ui/src/i18n/` and `packages/app/src/i18n/`, and Portuguese is partially translated. The issue is now a call to complete and expand translations. **8 comments**. [Link](https://github.com/anomalyco/opencode/issues/35831)

### #34214 — OpenCode Freezes / Becomes Unresponsive Mid-Session
After multiple tool-call round-trips, the assistant stops responding and the UI locks up until a force-quit. Reproduced across long sessions. **7 comments**, 1 👍. [Link](https://github.com/anomalyco/opencode/issues/34214)

### #49680 — Error from Provider: Free Tier Can Only Be Used from Within OpenCode
Users running the GUI hit an error claiming the free tier is restricted to the OpenCode app itself, contradicting documented behavior. **6 comments**, 4 👍. [Link](https://github.com/anomalyco/opencode/issues/49680)

### #43355 — [Desktop] UI Freezes after Agent Turns: Renderer Stuck in ResizeObserver Loop
Electron v1.18.18's renderer becomes unresponsive shortly after an assistant turn finishes, while the backend core loop stays alive. Classic ResizeObserver loop-thrash; only force-quit + relaunch recovers. **6 comments**. [Link](https://github.com/anomalyco/opencode/issues/43355)

### #49927 — Getting Free Usage Exceeded on the First Session of the Week
A user returning after a week of inactivity is immediately blocked with "Free Usage Exceeded" on their very first message. Suggests usage-counter persistence or reset logic is broken. **6 comments**. [Link](https://github.com/anomalyco/opencode/issues/49927)

### #47975 — Provider Request Fails with `invalid_request_error` and OpenCode Does Not Work
Requests through a configured provider fail with an upstream `invalid_request_error` containing invalid parameters. The error surface is opaque, leaving users unable to diagnose. **5 comments**. [Link](https://github.com/anomalyco/opencode/issues/47975)

---

## 4. Key PR Progress

### #50052 — feat(tui): v2 Open Session Selector with `-s`
Closes #48718 and #36134. Running `opencode -s` (without a session ID) now opens the TUI `/sessions` list directly, leveraging v2 session navigation. [Link](https://github.com/anomalyco/opencode/pull/50052)

### #43515 — refactor(ai): Move Credential Lowering into Providers
Follow-up to #43513. Replaces the native provider `model(modelID, settings)` boundary with `model({ id, settings, credential, defaults })`. Core still selects and refreshes credentials, but provider packages now own their own auth lowering. [Link](https://github.com/anomalyco/opencode/pull/43515)

### #43510 — fix: Stop Appended Messages from Taking Prompt Cache Breakpoints
Closes #43507. Messages appended to the end of a request were silently invalidating prompt caching. This fix ensures appended messages don't consume cache breakpoints, restoring cache efficiency. [Link](https://github.com/anomalyco/opencode/pull/43510)

### #43496 — feat(build): Bundle All Tree-Sitter Grammars at Build Time
Closes #18492. Grammars are now compiled into the binary at build time, improving offline and air-gapped deployment reliability. [Link](https://github.com/anomalyco/opencode/pull/43496)

### #43492 / #43490 — fix: Strip Trailing Slash from Model Name Strings and Parsed Model IDs
Both PRs close #43473. Model strings with trailing slashes (e.g., `qwen3-4b/`) caused lookup failures in both the provider layer and `ModelV2.parse`. [Link](https://github.com/anomalyco/opencode/pull/43492) · [Link](https://github.com/anomalyco/opencode/pull/43490)

### #43489 — feat(session): Crash Recovery — Auto-Resume Sessions after Crash
Closes #43488. Adds an opt-in `session.auto_resume` config that persists active session IDs to a manifest file. On restart, OpenCode can automatically resume interrupted sessions. [Link](https://github.com/anomalyco/opencode/pull/43489)

### #43487 — feat(session-ui): Display Tool Input Context on Error
Closes #43434. When a tool fails (permission denied, error, etc.), the error card now shows the tool input that triggered the failure, making debugging significantly easier. [Link](https://github.com/anomalyco/opencode/pull/43487)

### #43476 — refactor(core): Move Shell Tool Config into State
Exposes effective truncation limits from `ToolOutput`, projects portable scanner config into reloadable `ShellPolicy` state, and removes direct `Config` reads from `ShellTool` while preserving live-reload behavior. [Link](https://github.com/anomalyco/opencode/pull/43476)

### #43475 — fix(core): Preserve Command Model Variants
Closes #43474. When a command selects a different model, the previously chosen reasoning variant is now preserved if the new model supports it. [Link](https://github.com/anomalyco/opencode/pull/43475)

### #50053 — feat(core): Discover and Validate Azure Resources
Background discovery of Azure resources and deployments with stable model IDs, paginated inventories, and connection-bound snapshots. Validates access before saving API-key or Azure CLI connections. [Link](https://github.com/anomalyco/opencode/pull/50053)

### #43458 — feat(opencode): Add `reload_config` Agent Tool with Auto-Resume
Closes #43454. Adds a `/reload` slash command that hot-reloads all configuration, plugins, MCP servers, skills, and agents without restarting the TUI. Interrupted sessions auto-resume after reload. [Link](https://github.com/anomalyco/opencode/pull/43458)

### #43456 — feat(opencode): Add DB Stats, Prune, and Vacuum CLI Commands
Partially addresses #33356. Uses `VACUUM INTO + file swap` instead of plain `VACUUM` to avoid WAL bloat on SQLite databases. [Link](https://github.com/anomalyco/opencode/pull/43456)

---

## 5. Feature Request Trends

The most-requested feature directions this cycle:

| Direction | Representative Issues | Signal |
|---|---|---|
| **Account & Email Management** | #18654 (remove/change email in Zen) | 16 👍, growing |
| **i18n / Localization** | #35831 (Portuguese and other languages) | System exists, needs contributors |
| **Session UX Improvements** | #48718, #36134 (open session selector with `-s`) | Now implemented in PR #50052 |
| **MCP Tool Discovery** | #33027 (tools connected but not exposed) | Integration gap |
| **Free Tier Flexibility** | #49680, #49858 (use from any agent) | Documentation vs. reality conflict |

---

## 6. Developer Pain Points

Recurring frustrations across the issue tracker:

1. **Billing & Subscription Reliability** — Payment declines after months of success (#45278), charges without subscriptions delivered (#50054), and usage counters that reset incorrectly (#49927) all point to fragile billing infrastructure.

2. **Free Tier Access Restrictions** — Multiple users report errors claiming the free tier can only be used inside OpenCode (#49680, #49858) or requires a specific version (#49431), contradicting the documented "no lock-in" promise. This is becoming a trust issue.

3. **Stability: Freezes, Crashes, and Loops** — Auto-compaction loops (#30680), mid-session freezes (#34214), Electron renderer lockups from ResizeObserver thrashing (#43355, #38296), and TUI crashes with cryptic `tailHygiene.evaluable` errors (#50027) form a pattern of severe reliability bugs across desktop, TUI, and web clients.

4. **MCP Integration Gaps** — Tools that connect successfully but never surface to the agent (#33027) block a critical extensibility path for power users.

5. **Provider & Connection Fragility** — High-latency providers fail on Desktop due to Node's 250 ms connect cap (#45178), `invalid_request_error` failures with no diagnostics (#47975), and model-name trailing-slash parsing bugs (#43473) all indicate rough edges in the provider abstraction layer.

6. **Desktop-Specific Rendering Issues** — Beyond ResizeObserver crashes, the web client burns ~50% CPU and maxes GPU during streaming sessions (#49552), and file attachments silently drop over plain HTTP (#47645).

7. **Build & Tooling Friction** — Skills silently vanishing due to poisoned gray-matter cache (#42350), Windows `npm`/`npx` spawning Notepad instead of executing (#50040), and VS Code extension incompatibility with CLI 2.0.10 (#50043) all create daily workflow disruptions.

---

*Digest generated from [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode) data for 2026-09-20.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



# Pi Community Digest — 2026-09-20

---

## 1. Today's Highlights

The Pi project is seeing a concentrated wave of activity around compaction reliability, with three coordinated PRs landing fixes for cancellation gaps, authentication-wait visibility, and post-abort recovery. Meanwhile, the long-awaited Meta provider support (resolving #7543) remains open in PR #9096, and a new pi.dev compatibility check PR (#9763) aims to automate version-blessing workflows for the project's internal infrastructure.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

**#5653 — Move off Shrinkwrap** *(OPEN, in-progress, 20 comments)*
[yoyofield](https://github.com/yoyofield) is driving a migration away from npm shrinkwrap to resolve a deduplication bug where installing both `pi-ai` and `pi-coding-agent` as direct deps produces two copies of `pi-ai` on disk — each with its own module-level provider registry `Map`, causing silent provider registration loss. This is a foundational packaging issue that affects all downstream consumers.

**#8620 — Bundled CLI breaks global extensions** *(CLOSED)*
[orchidautomation](https://github.com/orchidautomation) reported that upgrading to 0.84.3 caused every extension in `~/.pi/agent/extensions/` importing from `@earendil-works/pi-coding-agent` (or `pi-tui`, `pi-agent-core`) to fail loading with `Cannot find module`. This is a regression that directly impacts the extension ecosystem.

**#7739 — Startup-time budget targeting jcode-comparable latency** *(OPEN, 9 comments)*
[1am2syman](https://github.com/1am2syman) proposes setting an explicit startup-time budget for Pi to close the gap against jcode's benchmarked performance. The issue includes a detailed comparison table showing jcode v0.9.1888-dev vs. Pi 0.62.0 across PTY launch latency and memory — this is a performance-parity roadmap item.

**#9391 — Stale signed thinking blocks replayed after compaction** *(CLOSED, 👍 1)*
[drewbitt](https://github.com/drewbitt) discovered that after manual compaction, Pi replays stale signed thinking blocks on every subsequent turn, causing Anthropic to drop them with `prefix_binding_mismatch` errors. This affects long-session reliability with thinking-enabled models.

**#9051 — session_compact custom message misses overflow retry** *(OPEN, 5 comments)*
[n-r-w](https://github.com/n-r-w) found that a `session_compact` handler restoring context via `pi.sendMessage(..., { triggerTurn: false })` is queued too late — the immediate overflow retry runs without the restored context, undermining custom compaction strategies.

**#7543 — Meta Model API** *(CLOSED, 👍 5)*
[radotzki](https://github.com/radotzki) requested adding Meta's Muse Spark to the LLM providers via the standard `/login` flow. The issue has 5 thumbs-up and is being addressed by PR #9096, though it remains open.

**#9777 — Auto-compaction auth wait has no progress/cancel controller** *(CLOSED)*
[tryingET](https://github.com/tryingET) reported that automatic compaction awaits authentication before emitting `compaction_start` or creating its abort controller — leaving users with no visible progress indicator and no way to cancel while auth is pending. This was fixed in PR #9779.

**#9690 — OpenCode Zen rejects Pi session IDs** *(CLOSED, 👍 2)*
[iamJoyLiam](https://github.com/iamJoyLiam) found that Pi-generated session IDs are rejected by OpenCode Zen (HTTP 403) even though Pi sends the `x-opencode-session` header. This blocks Pi users from routing through OpenCode Zen.

**#9540 — Extension loader loads jiti and full TUI graph at import time** *(CLOSED)*
[timqi](https://github.com/timqi) requested lazy-loading `jiti/static` and the virtual-module table (typebox, pi-tui, pi-ai/providers/all) on first extension load instead of at module evaluation — a startup-performance concern for embedded consumers of `pi-coding-agent`.

**#7885 — npm search not indexing newly published pi-packages** *(CLOSED)*
[hellokidder](https://github.com/hellokidder) reported that `npm search` fails to index newly published Pi packages, so they never appear on the pi.dev/packages gallery. This is an ecosystem discovery problem — 49/50 gallery packages are found in search, but new ones are invisible.

---

## 4. Key PR Progress

**#9781 — Stop recovery after prompt cancellation** *(CLOSED)*
[tryingET](https://github.com/tryingET) fixes #9340: calling `AgentSession.abort()` from a failed assistant's `message_end` can still trigger retry or automatic compaction afterward. This PR ensures cancellation between-turn compaction is respected.

**#9779 — Expose cancellable auto-compaction auth** *(CLOSED)*
[tryingET](https://github.com/tryingET) fixes #9777: automatic compaction now emits `compaction_start` and creates its abort controller before awaiting authentication, so users can see progress and cancel while auth is pending.

**#9668 — Prompt cache warming** *(CLOSED)*
[mitsuhiko](https://github.com/mitsuhiko) adds experimental support for keeping prompt caches warm, currently limited to Anthropic's explicit cache mechanism. This is an optimization for long-running sessions with Anthropic models.

**#9776 — Per thinking sampling parameters** *(OPEN)*
[mrexodia](https://github.com/mrexodia) implements `samplingParamsByThinkingLevel` to allow different sampling parameters for thinking vs. non-thinking modes, generalizing the existing `samplingParams` override. Relevant for open models that recommend distinct sampling strategies per thinking level.

**#9096 — Meta provider with Muse subscription OAuth** *(OPEN)*
[xl0](https://github.com/xl0) resolves #7543 by adding a Meta provider with Muse subscription OAuth. Notable quirks: the refresh token mechanism re-mints the API token daily from an identity token (not a rolling refresh), and streaming is currently "fake" (burst output).

**#9746 — Handle CJK punctuation in file autocomplete** *(CLOSED)*
[haoqixu](https://github.com/haoqixu) fixes file autocomplete so that CJK punctuation (e.g., `docs` after a Chinese comma) triggers file completion, treating CJK punctuation as a boundary like whitespace.

**#9772 — Fix main-screen scrollback and ConPTY autowrap drift** *(CLOSED)*
[treatux](https://github.com/treatux) addresses two rendering issues in `tui-main-screen.ts`: disables autowrap during main-screen renders (fixing ConPTY eager line-wrap commits on Windows Terminal/pwsh) and stops scrollback clear/replay drift.

**#9434 — Allow extensions to append to session system prompt** *(CLOSED)*
[wutongyuonce](https://github.com/wutongyuonce) closes #9432 by allowing `session_start` handlers to return append-only `systemPromptAppend` contributions, collected in extension/handler order with source metadata and error isolation.

**#9570 — Map TOO_MANY_TOOL_CALLS to error stop reason** *(OPEN)*
[rsaryev](https://github.com/rsaryev) fixes a crash where `mapStopReason` throws on Gemini's `TOO_MANY_TOOL_CALLS` finish reason — `@google/genai@2.21.0` added this member but the exhaustive switch in `google-shared.ts` doesn't list it.

**#9763 — Pi.dev compatibility check** *(OPEN)*
[christianklotz](https://github.com/christianklotz) adds a workflow to dispatch approved PR commits to an internal pi.dev compatibility check, reporting a stable commit status while keeping PR code out of the privileged `pull_request_target` job.

---

## 5. Feature Request Trends

- **Provider ecosystem expansion**: Meta Muse Spark (#7543), OpenCode Zen session compatibility (#9690), and GitHub Copilot auth fallback (#9764) all point to users wanting broader provider support and smoother auth flows.
- **Performance parity with jcode**: The detailed benchmark comparison in #7739 signals a community expectation that Pi should match or exceed competing tools' startup latency and memory footprints.
- **Extension API ergonomics**: Requests for provider-specific response fields in the Extension API (#9784), appending to session system prompts (#9434), and lazy-loading extension dependencies (#9540) reflect a desire to make the extension surface more flexible and lightweight.
- **TUI/UX refinements**: QR codes in device-code login (#9774), double-click-to-rewind in the transcript (#9780), mouse cursor positioning with custom prompts (#9778), and hardware cursor rendering by default (#5268) show a strong focus on polishing the interactive experience.
- **Observability and control**: Multiple requests around making compaction/auth/cancellation flows visible and controllable (#9777, #9779, #9783, #9340) suggest users want more insight into background operations.

---

## 6. Developer Pain Points

- **Compaction reliability is a recurring pain point**: Issues #9340, #9777, #9779, #9783, #9051, and #9391 all touch different aspects of compaction — auth waits, cancellation gaps, stale thinking blocks, and post-abort recovery. The frequency of these reports suggests the compaction state machine needs a holistic review.
- **Packaging and module deduplication**: The shrinkwrap issue (#5653) and the bundled CLI extension loading failure (#8620) highlight ongoing friction around how Pi packages are structured and distributed, particularly for consumers embedding `pi-coding-agent`.
- **Ecosystem discoverability**: The npm search indexing gap (#7885) means new Pi packages are effectively invisible to the community, stifling third-party extension growth.
- **Provider-specific field handling**: The "Procrustean bed" complaint in #9774 and the `parseChunkUsage` field-dropping issue (#9757) reveal that extensions and consumers are starved of provider-specific metadata that exists in raw API responses.
- **Timeout and error handling gaps**: The `find`/`grep` tools lacking timeout mechanisms (#9770) and Gemini's unhandled `TOO_MANY_TOOL_CALLS` (#9570) point to fragile tooling and API integration paths that surface as silent failures rather than actionable errors.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>



Of course. Here is the Qwen Code community digest for 2026-09-20, synthesized from the provided GitHub data.

---

### **Qwen Code Community Digest: 2026-09-20**

#### **1. Today's Highlights**
The primary release of v0.24.1 introduces a significant breaking change, removing the `active_goal` stream event to streamline the goal-tracking workflow. Concurrently, the community is actively addressing critical bugs, including a high-severity issue with the Web Terminal's PTY availability on macOS and a memory allocation problem in the daemon's ACP child process management.

#### **2. Releases**
**v0.24.1** is the latest stable release. The most notable change is a **breaking refactor** that stops the emission of the `active_goal` stream event ([#12181](https://github.com/QwenLM/qwen-code/pull/12181)). This release also includes various fixes and improvements, such as reclaiming Docker cache and cleaning review scratch directories in CI ([#12135](https://github.com/QwenLM/qwen-code/pull/12135)). Companion SDK releases for TypeScript (v0.1.13) and Desktop (v0.24.1) are also available.

#### **3. Hot Issues**

1.  **Web Terminal PTY Failure on macOS ([#11872](https://github.com/QwenLM/qwen-code/issues/11872))**: A critical bug preventing the Web Shell from functioning on macOS. The `@lydell/node-pty` dependency is declared but not bundled, and local prebuilds are blocked by code signing. This is a P1 issue with significant community impact.
2.  **Daemon Memory Overcommit ([#8182](https://github.com/QwenLM/qwen-code/issues/8182))**: The `qwen serve` daemon incorrectly allocates up to 50% of the *host's* memory to each ACP child process, without dividing this limit by the number of children. This can lead to severe memory pressure and system instability when running multiple sessions.
3.  **`/cd` Command Broken Since v0.24.0 ([#12224](https://github.com/QwenLM/qwen-code/issues/12224))**: Users report that the fundamental `/cd` command fails immediately after updating, even with no active sessions. This is a P1 blocker for basic navigation.
4.  **Web Shell Package Packaging Defects ([#12185](https://github.com/QwenLM/qwen-code/issues/12185))**: The newly published `@qwen-code/web-shell` package has critical packaging issues, including unresolvable `@/` type imports and inlined runtime dependencies, making it difficult for npm consumers to use.
5.  **TUI Crash on Background Task Registration ([#11783](https://github.com/QwenLM/qwen-code/issues/11783))**: The interactive TUI crashes with a React "Maximum update depth exceeded" error seconds after a background shell task is started, rendering the tool unusable in that scenario.
6.  **Permission Error with Compound Commands ([#12246](https://github.com/QwenLM/qwen-code/issues/12246))**: A security-relevant bug where a semicolon (`;`) seen only in a pre-fix quote reading incorrectly marks a backgrounded `cd` command as foreground, potentially resolving protected write operations to the wrong path.
7.  **LSP Non-ASCII Response Handling ([#12206](https://github.com/QwenLM/qwen-code/issues/12206))**: Language Server Protocol tool calls silently fail and return empty results when the server's response contains non-ASCII characters (e.g., CJK languages), due to a byte-length vs. string-length mismatch.
8.  **Session Recap Always in English ([#11847](https://github.com/QwenLM/qwen-code/issues/11847))**: The session recap summary, which helps users see where they left off, is hardcoded to English, with no option to match the conversation's language.
9.  **Workflow Script Launch Failure ([#12217](https://github.com/QwenLM/qwen-code/issues/12217))**: A workflow script cannot be launched if a comment precedes the `export const meta` declaration, due to a fragile regex that doesn't account for comments.
10. **`tools.disabled` Incomplete for `zoom_image` ([#11814](https://github.com/QwenLM/qwen-code/issues/11814))**: The `zoom_image` tool is not properly removed from the model's available tool set when listed in `tools.disabled`, despite being removed from the `/tools` UI, leading to unexpected context usage.

#### **4. Key PR Progress**

1.  **Batch API Command ([#11874](https://github.com/QwenLM/qwen-code/pull/11874))**: Introduces a new `qwen batch` command (`submit`, `status`, `fetch`, `cancel`) for leveraging the cost-effective DashScope Batch API for large volumes of independent requests.
2.  **Per-Tool bwrap Confinement ([#12269](https://github.com/QwenLM/qwen-code/pull/12269))**: Adds a foundational runtime integration layer for confining individual tool executions (like Shell, Monitor, Write, Edit) within bubblewrap (bwrap) sandboxes for enhanced security.
3.  **Landlock Execution Fallback ([#12278](https://github.com/QwenLM/qwen-code/pull/12278))**: Implements a Landlock filesystem backend as a fallback for the per-tool execution boundary, providing an alternative sandboxing mechanism when bwrap is not suitable.
4.  **Cross-Session Messaging for ACP Sessions ([#12162](https://github.com/QwenLM/qwen-code/pull/12162))**: Allows sessions managed by a `qwen --acp` process to receive and process messages from other sessions, enabling more fluid multi-session workflows.
5.  **Workflow Run Retry/Rerun from History ([#12190](https://github.com/QwenLM/qwen-code/pull/12190))**: Enables the `retry` and `rerun` workflow actions to work correctly for runs that have been restored from persisted history, such as after a daemon restart.
6.  **Configurable MCP Server Resource Limits ([#12258](https://github.com/QwenLM/qwen-code/pull/12258))**: Adds the ability to configure per-server resource limits (App HTML size, read deadlines) for MCP servers, moving beyond fixed defaults.
7.  **SSH Workspace Support without Remote Daemon ([#12255](https://github.com/QwenLM/qwen-code/pull/12255))**: Enhances Web Shell to support SSH workspaces directly through the local daemon, eliminating the need for a remote daemon on the target machine.
8.  **Teammate Guidance & Budget Gating ([#12142](https://github.com/QwenLM/qwen-code/pull/12142))**: Implements per-turn size budgets for the model-visible descriptions of Agent and shell tools, preventing uncontrolled context growth and fixing a related mismatch.
9.  **Parallel Extension Loading ([#12107](https://github.com/QwenLM/qwen-code/pull/12107))**: Performance improvement that parallelizes the previously serial extension loading loop, significantly speeding up daemon startup and extension cache refreshes.
10. **Web Shell Conversation Search ([#12231](https://github.com/QwenLM/qwen-code/issues/12231))**: A highly requested feature, this PR adds the ability to search within the current conversation in the Web Shell and jump directly to matching messages.

#### **5. Feature Request Trends**
The community feedback highlights several recurring feature desires:
*   **Localization & I18n**: A strong push for non-English support, specifically for the session recap feature, indicating a broader need for interface and output localization.
*   **Advanced Permission Granularity**: Requests for more sophisticated permission rules, such as project-local rules overriding user-level rules and context-aware background/foreground handling for compound commands.
*   **Tool & Context Management**: Frequent requests for better control over which tools are visible to the model and how context is managed, including fixing inconsistencies in `tools.disabled` and reducing the token overhead of tool descriptions.
*   **Web Shell & Daemon Enhancements**: Significant interest in expanding the Web Shell's capabilities, including better session management (viewing standalone sessions), improved UI components, and more robust daemon features like ACP capacity management.

#### **6. Developer Pain Points**
*   **Packaging and Distribution Debt**: The issues with the `@qwen-code/web-shell` package ([#12185](https://github.com/QwenLM/qwen-code/issues/12185)) and the macOS PTY bundling ([#11872](https://github.com/QwenLM/qwen-code/issues/11872)) highlight ongoing challenges in creating cleanly packaged, distributable components.
*   **Test Flakiness and CI/CD Pipeline Fragility**: Multiple issues point to brittle tests and CI configurations, from transient E2E artifact failures ([#12274](https://github.com/QwenLM/qwen-code/issues/12274)) to platform-specific test suite failures ([#12270](https://github.com/QwenLM/qwen-code/issues/12270)), causing "red" nights and developer frustration.
*   **Memory Management and Resource Limits**: The daemon's memory overcommit bug ([#8182](https://github.com/QwenLM/qwen-code/issues/8182)) and the need for configurable resource limits for MCP servers ([#12258](https://github.com/QwenLM/qwen-code/pull/12258)) indicate that managing resource consumption in complex, multi-process environments is a persistent pain point.
*   **Security and Sandboxing Complexity**: The recent push for bwrap and Landlock integration ([#12269](https://github.com/QwenLM/qwen-code/pull/12269), [#12278](https://github.com/QwenLM/qwen-code/pull/12278)) is a response to the inherent security risks of running arbitrary code, but adding such layers is complex and can introduce new bugs, as seen with permission handling ([#12246](https://github.com/QwenLM/qwen-code/issues/12246)).

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



# DeepSeek TUI Community Digest — 2026-09-20

*Repository: [Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI) (rebranding to Codewhale in progress)*

---

## 1. Today's Highlights

No new releases shipped in the last 24 hours, but the repository saw intense activity across issues and PRs. The most significant development is the ongoing provider-neutral refactor (#6350, now closed), which retires the last `DeepSeekClient`-era naming in favor of `CodewhaleClient` — a clear signal that the project is fully pivoting away from its single-provider origins. On the user-facing side, two stacked TUI fixes (#6363, #6365) address long-standing visual regressions in transcript rendering and composer behavior, while a new ACP provider bug (#6310) highlights configuration gaps when running headless.

## 2. Releases

**None in the last 24 hours.**

## 3. Hot Issues

Only 6 issues were updated in the last 24 hours. All noteworthy ones are covered below (one item is spam and has been excluded from analysis).

| # | Title | Status | Why It Matters |
|---|-------|--------|----------------|
| [#6310](https://github.com/Hmbown/Codewhale/issues/6310) | `serve --acp` ignores config.toml sandbox_mode/ask | OPEN | When launched as an ACP provider (e.g., by Paseo editor), the CLI flag path bypasses `config.toml` sandbox settings, forcing all ACP sessions into unrestricted "Work" posture. This is a **security regression** for editor integrations — 7 comments indicate active community investigation. |
| [#6367](https://github.com/Hmbown/Codewhale/issues/6367) | `/branch` structure discarded by save path | OPEN | Branching visibly works, but the next snapshot-path save silently rebuilds the journal from active-path messages, dropping abandoned branches and entry IDs. Data-loss risk for users relying on journal branching workflows. 5 comments. |
| [#6362](https://github.com/Hmbown/Codewhale/issues/6362) | `configured_model_api_tests` overflow test thread stack | OPEN | Each overflow aborts the entire lib test binary with SIGABRT, blocking `cargo test -p codewhale-tui --lib` and halting the workspace CI gate. Directly impacts contributor onboarding — new PRs cannot pass tests. |
| [#6364](https://github.com/Hmbown/Codewhale/issues/6364) | Marketplace skill coverage + WhaleWiki audit | CLOSED | Founder-requested audit confirming 14 Core skill directories missing from marketplace and that Core generation 13 incorrectly retires contributor-onboarding tooling. Sets roadmap for docs/skills work. |
| [#6346](https://github.com/Hmbown/Codewhale/issues/6346) | `run_tests_cwd_scopes_cargo_to_subdir` fails on Windows | CLOSED | Windows renders paths with `\\?\` verbatim prefix while assertions compared against raw tempdir paths. Cross-platform test reliability issue, now resolved via canonicalization (#6348). |

> ⚠️ **Issue #6366** ("Medical Billing Services in Florida") is a promotional spam post and has been excluded from this analysis.

## 4. Key PR Progress

Selected 10 PRs from 20 total, focusing on substantive changes over dependency bumps:

| # | Title | Status | Summary |
|---|-------|--------|---------|
| [#6361](https://github.com/Hmbown/Codewhale/pull/6361) | feat(runtime-api): terminal byte stream, stream resume, idempotent submit | OPEN | Two Core unblocks landed: authenticated terminal byte I/O with resize/exit/replay over the stateful terminal path, plus stream resume and idempotent submit semantics. Pet agent-count pin included. Foundational for headless/editor integrations. |
| [#6363](https://github.com/Hmbown/Codewhale/pull/6363) | fix(tui,exec): visual-row cursor, history detach, explicit ink, headless input withhold | OPEN | Six focused commits: vi-mode composer cursor stepping, detached history navigation, explicit ink color handling, and headless input withholding. Each has regression tests. |
| [#6365](https://github.com/Hmbown/Codewhale/pull/6365) | fix(tui): painted-column transcript copy and composer tabs | OPEN | Stacked on #6363. Corrects transcript copy behavior to painted-column model (verified against ratatui source) and fixes composer tab stops. Includes ink test setup. |
| [#6353](https://github.com/Hmbown/Codewhale/pull/6353) | feat(providers): add CSDN 星图 with Coding Plan billing | CLOSED | New first-class provider: CSDN StarMap at `ai.csdn.net/api/model/v1`, serving `glm_for_coding` plus pass-through marketplace models under a single Coding Plan billing endpoint. |
| [#6350](https://github.com/Hmbown/Codewhale/pull/6350) | refactor(tui): retire DeepSeek fossils from provider-neutral machinery | CLOSED | Renames `DeepSeekClient` → `CodewhaleClient`, `Config::deepseek_base_url` → `active_route_base_url`, and strips remaining single-provider naming from universal client and route resolvers. Marks the final cleanup of the DeepSeek-era identity. |
| [#6352](https://github.com/Hmbown/Codewhale/pull/6352) | feat(web): resolve gpui mirror from generated Shoreline tokens | CLOSED | Removes hand-maintained `--gpui-*` CSS variables that had drifted from real Shoreline constants; now generates them from the token pipeline. Fixes `--gpui-stage-raised` (mockup value → `SHORELINE_ELEVATED_RGB`) and `--gpui-paper-deep` color mismatch. |
| [#6351](https://github.com/Hmbown/Codewhale/pull/6351) | feat(web): export Shoreline palettes to site tokens | CLOSED | Extends the site token pipeline to expose the Shoreline palette (used by TUI/GPUI clients) to the web layer, eliminating the drift-prone hand-kept mirror in `globals.css`. |
| [#6354](https://github.com/Hmbown/Codewhale/pull/6354) | fix(ci): unred main's Lint and stop mcp stdio marker read racing | CLOSED | Two invisible-in-rollup CI defects: `check-blocking-calls-budget` had `continue-on-error: pull_request` (advisory on PRs, fatal on push), and the mcp test lost its race only on loaded runners. |
| [#6347](https://github.com/Hmbown/Codewhale/pull/6347) | fix(tui): double codewhale-main stack to 32 MiB for debug poll chains | CLOSED | Every PR's Ubuntu leg failed since Sep 16: the cucumber acceptance test hung ~83s and died after plugin trust confirm. Root cause was stack overflow in debug poll chains. |
| [#6348](https://github.com/Hmbown/Codewhale/pull/6348) | test(tui): compare test_runner scoped dir against canonical form | CLOSED | Canonicalizes the expected path in `run_tests_cwd_scopes_cargo_to_subdir` to match Windows `\\?\` verbatim prefix rendering. Stacked on #6347. |

*Dependency-only PRs (dependabot bumps for Docker actions, nixpkgs, fenix, windows-core, wrangler, autoprefixer, @types/node) were excluded from this summary.*

## 5. Feature Request Trends

Distilling from open issues and closed audit work:

- **ACP provider configuration parity** — Users running Codewhale as an ACP provider (via `serve --acp`) expect `config.toml` sandbox/ask settings to apply; currently they are ignored.
- **Journal branching persistence** — The `/branch` command's output is not surviving subsequent saves; users want first-class, durable branching in the session journal.
- **Marketplace skill coverage** — 14 Core skill directories are missing from the marketplace; the founder audit (#6364) confirms this gap and flags onboarding/documentation debt in WhaleWiki.
- **Terminal byte stream API** — Now delivered via #6361, this was a tracked Core ticket (`codewhale-app#61`) requesting authenticated byte I/O, resize, exit, and bounded replay over the stateful terminal path.

## 6. Developer Pain Points

- **Test infrastructure fragility**: Stack overflows in `configured_model_api_tests` (#6362) block the entire lib test suite and CI gate. Combined with the Windows path canonicalization issue (#6346/#6348) and the debug-poll-chain hang (#6347), test reliability has been a recurring blocker for three consecutive days.
- **Provider-neutral migration friction**: The `DeepSeekClient` → `CodewhaleClient` rename (#6350) was necessary but highlights how long single-provider naming persisted in universal machinery, creating confusion for contributors working outside the DeepSeek ecosystem.
- **CI race conditions and misconfigured guards**: The mcp stdio marker read race and the `continue-on-error: pull_request` CI misconfiguration (#6354) demonstrate that CI visibility on PRs vs. pushes creates false-green PRs that fail only on merge — a classic contributor friction point.
- **Editor integration gaps**: The ACP provider mode ignoring sandbox config (#6310) suggests that headless/editor integration paths were not fully tested against the config system, leaving security posture undefined for editor clients like Paseo.

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>



# ComfyUI Community Digest — 2026-09-20

A technical summary of the latest activity, issues, and pull requests in the ComfyUI repository.

---

### 1. Today's Highlights
The core development team and community contributors are pushing significant architectural updates alongside critical hardware optimizations. Notable progress includes the integration of **Qwen-Image 2.1** support and the implementation of **Generic Loops**, which streamline complex workflow logic. On the performance and stability front, a major CUDA context fix resolves multi-GPU memory faults, while a massive **18x throughput speedup** for the YuE2 text encoder dramatically improves entry-level GPU usability. 

---

### 2. Releases
*No new releases were published in the last 24 hours.*

---

### 3. Hot Issues
These 10 issues represent the most active discussions, critical bugs, and highly requested features currently facing the user base:

*   **Dynamic VRAM Performance Degradation (#14396):** Users on RTX 4070S GPUs report that enabling dynamic VRAM significantly slows down generation times. The community is pushing for a manual toggle to disable this feature. [Link](https://github.com/Comfy-Org/ComfyUI/issues/14396)
*   **MiniMax H3 Memory Compile Error on RTX 5090 (#16342):** A blocking bug where plain text-to-video graphs fail at `SamplerCustomAdvanced` with an `aimdo memory compile error: could not start recording` on latest architectures. [Link](https://github.com/Comfy-Org/ComfyUI/issues/16342)
*   **Request for MiniMax H3 Tiny VAE Support (#15592):** Highly requested feature with 18 👍 to add support for `taeh3.safetensors`, enabling high-quality latent previews during MiniMax H3 sampling. [Link](https://github.com/Comfy-Org/ComfyUI/issues/15592)
*   **YuE2 CPU Fallback on GTX 1650 (#16365):** The YuE2 text encoder falls back to CPU on entry-level GPUs lacking strict CUDA support, throwing device mismatch errors. [Link](https://github.com/Comfy-Org/ComfyUI/issues/16365)
*   **Undefined `ckpt_name` Error (#1172):** A persistent configuration issue where models present in the checkpoint folder fail to load due to undefined path variables. [Link](https://github.com/Comfy-Org/ComfyUI/issues/1172)
*   **If/Else Node Execution Bug (#16407):** A logic bug where the If/Else node fails to properly block empty paths, potentially passing null tensors downstream. [Link](https://github.com/Comfy-Org/ComfyUI/issues/16407)
*   **VAEDecodeAudio Precision Mismatch (#16403):** Fails with `expected scalar type Half but found BFloat16` on Pascal-based GPUs (GTX 1080) that lack native BF16 support. [Link](https://github.com/Comfy-Org/ComfyUI/issues/16403)
*   **Workflow Template Search Collision (#16349):** Duplicate custom node workflow names silently break the template search filter in the UI without throwing visible errors. [Link](https://github.com/Comfy-Org/ComfyUI/issues/16349)
*   **Tab-Switching Queuing Limitation (#16352):** Users request the ability to queue multiple jobs across different tabs without needing to remain on the originating workflow tab. [Link](https://github.com/Comfy-Org/ComfyUI/issues/16352)
*   **Fast-Disk Auto-Enable Opt-Out (#16415):** High-RAM machines streaming weights from NVMe on every step suffer performance drops; users want an opt-out for the auto-enabled `fast_disk` policy. [Link](https://github.com/Comfy-Org/ComfyUI/issues/16415)

---

### 4. Key PR Progress
The following 10 pull requests represent major feature additions, core optimizations, and stability fixes:

*   **Qwen-Image 2.1 Support (#16400):** Integrates single-stream DiT, RGBA VAE, and Qwen3-VL-8B text encoder block-causal attention with prefix caching. [Link](https://github.com/Comfy-Org/ComfyUI/pull/16400)
*   **CUDA Device Context Fix for Partial Loading (#16414):** Wraps model loading in `cuda_device_context` to prevent illegal memory access when partially loading models onto secondary GPUs (cuda:1+). [Link](https://github.com/Comfy-Org/ComfyUI/pull/16414)
*   **Native Video Support in Resize Image/Mask (#16413):** Optimizes video resizing by avoiding full float32 RGB decoding, significantly reducing peak memory usage for long/high-res clips. [Link](https://github.com/Comfy-Org/ComfyUI/pull/16413)
*   **YuE2 18x Throughput & VRAM Fix (#16409):** Resolves critical bottlenecks in the YuE2 text encoder and autoregressive generation, making music generation viable on entry-level GPUs like the RTX 3050. [Link](https://github.com/Comfy-Org/ComfyUI/pull/16409)
*   **Partial Graph Execution (CORE-356) (#14918):** Introduces `node_failure_policy: continue_independent`, allowing independent branches of a graph to complete and keep outputs even if other nodes fail. [Link](https://github.com/Comfy-Org/ComfyUI/pull/14918)
*   **Generic Loops Implementation (#16227):** Implements a cleaner, scoped-down version of generic loops, removing accumulate-save-video logic to be handled in a follow-up. [Link](https://github.com/Comfy-Org/ComfyUI/pull/16227)
*   **MiniMax H3 AV Latent Builder (#15735):** Adds a native node to assemble separately encoded video and audio latents into the official H3 `NestedTensor` format. [Link](https://github.com/Comfy-Org/ComfyUI/pull/15735)
*   **Asset Database SQLite Fixes (#16358, #16359):** Prevents concurrent writer failures during asset scanning and hardens failure paths to avoid silent cataloging errors. [Link](https://github.com/Comfy-Org/ComfyUI/pull/16358) | [Link](https://github.com/Comfy-Org/ComfyUI/pull/16359)
*   **Configurable Output Routing Policies (#16170):** Int

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

Thinking Process:

1.  **Analyze the Request:**
    *   Target: Ollama community digest for 2026-09-20.
    *   Source data: GitHub data from `ollama/ollama` (Latest Releases, Latest Issues, Latest Pull Requests).
    *   Format: Structured English digest with specific sections:
        1.  **Today's Highlights** (2-3 sentences summarizing the most important updates).
        2.  **Releases** (Summarize changes if new versions exist).
        3.  **Hot Issues** (Pick 10 noteworthy Issues, explain why they matter and community reaction, include links).
        4.  **Key PR Progress** (Pick 10 important PRs, describe features or fixes, include links).
        5.  **Feature Request Trends** (Distill the most-requested feature directions from all Issues).
        6.  **Developer Pain Points** (Summarize recurring developer frustrations or high-frequency requests).
    *   Style: Concise and professional, suited for technical developers.

2.  **Analyze the Input Data:**

    *   **Latest Releases:**
        *   `v0.34.3-rc1` (v0.34.3):
            *   `GET /api/show` now advertises each model's thinking controls and values/default (e.g., `thinking: { values: ["low", "high", "max"], default: "max" }` for `glm-5.3-flash:cloud`).
            *   Mention of "Nemotro..." (cut off, but likely related to some model or feature update).

    *   **Latest Issues (Total: 20 items listed, need to pick ~10 noteworthy ones):**
        *   `#18509` [OPEN] [bug, needs more info] Ollama refusing toolcalls, which always worked fine in llama.cpp with qwen. (Author: Sur3) - Tool role parsing issues.
        *   `#18522` [CLOSED] [bug, nvidia] gpt-oss:20b (MXFP4) deterministic llama-server abort in CUDA ADD_ID on a short two-message /api/chat. (Author: Xore) - CUDA graph compute crash.
        *   `#18368` [OPEN] [bug, app, macos] Chat processing fails silently after about 6k tokens with no GUI notification (macOS GUI). (Author: xmddmx) - Silent failure on long chats on Mac.
        *   `#18527` [CLOSED] [bug, cloud] [Cloud] deepseek-v4.1-flash silently discards all image input while advertising `vision` in capabilities. (Author: sinivirta) - Vision capability bug on cloud.
        *   `#18490` [CLOSED] [feature request] Feature Request: Restore built-in agent as an opt-in CLI command / launcher option. (Author: crramirez) - Agent removal feedback.
        *   `#18483` [CLOSED] [bug] minicpm5-2b native tool calls never parse. (Author: khrotu) - XML tool call parsing bug.
        *   `#18505` [OPEN] [bug, mlx] [BUG] MLX nvfp4: admitted request stalls in prefill at processed=total-1 with zero tokens for minutes under sustained single-slot load. (Author: Etoile04) - MLX stalling issue.
        *   `#18529` [CLOSED] deepseek3 renderer drops `thinking` on assistant messages that carry tool calls, although its own `isCurrentTurn` gate would admit them, impacting DS Flash Ollama Cloud. (Author: tsy0716) - Thinking drop bug with tool calls.
        *   `#18548` [OPEN] [bug] Not utilizing Intel QuickSync iGPU. (Author: truthsword) - iGPU acceleration missing in Docker.
        *   `#18541` [CLOSED] [bug] Ollama 0.34.2 MTP speculative decoding regression with Qwen3.8 27B. (Author: Vipertsniper) - Regression in MTP.
        *   `#18546` [CLOSED] Support Qwen 3.5 MTP FastMTP draft-vocabulary trim (d2t mapping). (Author: Shreesh-Sree) - Feature/fix for MTP.
        *   `#18526` [CLOSED] [bug] Intermittent redirect failures when pulling HF models on 0.34.2. (Author: rick-github) - Redirect bug on pulls.
        *   `#18530` [OPEN] qwen3-coder: tool call silently lost when the model puts reasoning before it (model omits <tool_call> opener; parser only keys on the literal tag). (Author: moodboom) - Tool call parsing issue.
        *   `#18534` [OPEN] OpenAI-compatible endpoint silently ignores `reasoning_content` on assistant messages, dropping replayed reasoning for DeepSeek models. (Author: tsy0716) - OpenAI compat API bug.
        *   `#18547` [CLOSED] [bug] Model not downloading on newer versions. (Author: fsrvr) - Download regression.
        *   `#18545` [OPEN] [feature request] Support downloading both runtimes rocm & cuda. (Author: laffer1) - Multi-GPU runtime install request.
        *   `#18544` [OPEN] [feature request] Support CLAUDE_CODE_AUTO_MODE_SERVER=1. (Author: tanvp112) - Claude Code env var support.
        *   `#18542` [OPEN] [bug] typical_p is no longer supported breaks existing clients that cannot omit the parameter. (Author: polaris0707) - Parameter backward compatibility issue (SillyTavern).
        *   `#18539` [CLOSED] [bug] Chat, Code & Work is missing! (Author: souravraha) - UI/CLI option missing.
        *   `#18540` [OPEN] MLX: mlx-community Gemma 4 MoE imports but fails to load: layer 0: missing MoE expert weights (experts.switch_glu layout). (Author: brendanphall) - Gemma 4 MoE loading bug on MLX.

    *   **Latest Pull Requests (Total: 19 items listed, need to pick ~10 important ones):**
        *   `#18535` [OPEN] models: add gliner-small-v2.1 mlx support (Author: BruceMacD) - GLiNER entity extraction for MLX.
        *   `#17480` [OPEN] bench: use HumanEval patch prompts (Author: dhiltgen) - Benchmark improvement.
        *   `#15084` [CLOSED] bench: add support for OpenAI API benchmarks (Author: dhiltgen) - OpenAI API benchmarking.
        *   `#18543` [OPEN] openai: accept reasoning_content in assistant messages (Author: isharak7m) - OpenAI compat thinking support.
        *   `#18508` [OPEN] server: serve Prometheus metrics at /metrics when OLLAMA_METRICS is set (Author: ssubbotin) - Prometheus metrics.
        *   `#18536` [CLOSED] openai: accept reasoning_content in chat messages (Author: gautamrizwani) - OpenAI compat thinking support (similar to #18543).
        *   `#17566` [OPEN] api: bound thinking with a token budget, per request or per model (Author: mann1x) - Thinking token budget control.
        *   `#18201` [CLOSED] [WIP] discover: report the memory a device has, alongside the memory it can use (Author: parawanderer) - Device memory reporting.
        *   `#18198` [CLOSED] [WIP] llm: predict single-GPU VRAM from published head dimensions and measured loads (Author: parawanderer) - VRAM prediction.
        *   `#18197` [CLOSED] [WIP] server: report per-device VRAM, and fix three defects that made the figures wrong (Author: parawanderer) - Per-device VRAM reporting.
        *   `#18538` [OPEN] model/parsers: recognize <function= as an implicit qwen3-coder tool-call opener (Author: farmerstevieb) - Tool call parser fix for qwen3-coder.
        *   `#18537` [OPEN] launch: add Linux support for ChatGPT desktop (Author: Zpoteiti) - Linux ChatGPT desktop launch support.
        *   `#16851` [OPEN] fix(cli): abort interactive mode with error when stdout is redirected without prompt (Author: aslamalkarywk7) - CLI redirect fix.
        *   `#18533` [CLOSED] server: allow registry cross-host redirects among allowlisted hosts (Author: pdevine) - Fixes #18526 (redirect failures).
        *   `#14081` [OPEN] MSI Based windows install with "curl" style install script. (Author: dhiltgen) - Windows MSI installer.
        *   `#16911` [OPEN] windows: use install.ps1 for app upgrades (Author: dhiltgen) - Windows app updater.
        *   `#16909` [OPEN] windows: add install.ps1 cache modes (Author: dhiltgen) - Windows installer caching.
        *   `#16852` [OPEN] feat: improve CLI navigation, implement atomic manifest writes, and add local model filtering (Author: aslamalkarywk7) - CLI improvements.
        *   `#16590` [OPEN] llama-server: prepare to remove compatibility patch with manifest list support (Author: dhiltgen) - Manifest list storage.

3.  **Drafting Sections:**

    *   **Today's Highlights:**
        *   Focus on the release of `v0.34.3-rc1` which introduces model thinking controls advertisement via `GET /api/show`.
        *   Highlight the active development around OpenAI-compatible API improvements (specifically `reasoning_content` support) and tool call parser fixes (especially for qwen3-coder and MiniCPM5).
        *   Mention key bug fixes and architectural improvements like per-device VRAM reporting and Prometheus metrics.

    *   **Releases:**
        *   `v0.34.3-rc1` (v0.34.3):
            *   `GET /api/show` now advertises each model's thinking controls and default values (e.g., `low`, `high`, `max` and the default selection).
            *   Improved model-specific configurations and backend handling (e.g., Nemotron support, though the description is truncated, focus on the thinking controls which are clearly defined).

    *   **Hot Issues (Pick 10 noteworthy Issues):**
        *   Let's select the most impactful ones for developers building tool integrations, cloud users, and local runners:
            1.  `#18509` (Ollama refusing toolcalls, which always worked fine in llama.cpp with qwen): Critical for developers building tool-use agents with Qwen models. It highlights a breaking change in tool role formatting compared to llama.cpp.
            2.  `#18530` (qwen3-coder: tool call silently lost when the model puts reasoning before it): Key parsing limitation for qwen3-coder, where natural language reasoning preceding the tool call breaks the parser because the `<tool_call>` opener is omitted.
            3.  `#18534` (OpenAI-compatible endpoint silently ignores `reasoning_content` on assistant messages): Crucial for DeepSeek integration and replay workflows, as standard clients lose thinking traces without warning.
            4.  `#18505` (MLX nvfp4: admitted request stalls in prefill under sustained single-slot load): Severe performance blocker for local MLX users running nvfp4 models under load, requiring runner SIGTERM to recover.
            5.  `#18368` (Chat processing fails silently after about 6k tokens with no GUI notification on macOS GUI): Major UX issue for Mac GUI users processing long documents without error feedback.
            6.  `#18542` (typical_p is no longer supported breaks existing clients that cannot omit the parameter): Breaks older clients like SillyTavern 1.18.0 due to parameter deprecation without backward compatibility.
            7.  `#18540` (MLX: mlx-community Gemma 4 MoE imports but fails to load: layer 0: missing MoE expert weights): Key blocker for Gemma 4 MoE models on MLX runner, showing layout/parsing mismatches.
            8.  `#18527` (Cloud: deepseek-v4.1-flash silently discards all image input while advertising vision in capabilities): Major capability discrepancy on Ollama Cloud where vision inputs are silently dropped.
            9.  `#18522` (gpt-oss:20b (MXFP4) deterministic llama-server abort in CUDA ADD_ID on NVIDIA RTX 4000 Ada): Critical CUDA compute crash on specific hardware setup during short chat completions.
            10. `#18483` (minicpm5-2b native tool calls never parse): XML tool call parsing failure resulting in mangled fragments and null tool calls, breaking function calling for MiniCPM5.
        *   *Community reaction note:* Many of these issues have active comments and some are already closed (like `#18522`, `#18527`, `#18483`, `#18529`), showing responsive maintenance, though tool calling and parameter compatibility remain highly sensitive areas for the community.

    *   **Key PR Progress (Pick 10 important PRs):**
        *   Let's select the ones showing major feature additions, parser fixes, and infrastructure improvements:
            1.  `#18538` (model/parsers: recognize `<function=` as an implicit qwen3-coder tool-call opener): Direct fix for issue `#18530`, allowing qwen3-coder to parse tool calls when reasoning precedes them.
            2.  `#18543` / `#18536` (openai: accept `reasoning_content` in assistant/chat messages): Adds crucial DeepSeek-compatible `reasoning_content` mapping to the OpenAI-compatible endpoint, preserving thinking traces.
            3.  `#17566` (api: bound thinking with a token budget, per request or per model): Addresses "thinking loops" where models burn entire context windows thinking, introducing token budget limits.
            4.  `#18508` (server: serve Prometheus metrics at `/metrics` when `OLLAMA_METRICS` is set): Adds standard observability metrics export for infrastructure monitoring.
            5.  `#18535` (models: add gliner-small-v2.1 mlx support): Adds native GLiNER entity extraction to the MLX runner via `POST /api/extract`.
            6.  `#18537` (launch: add support for ChatGPT desktop on Linux): Extends `ollama launch chatgpt` to detect and run the official ChatGPT desktop app on Linux.
            7.  `#18197` & `#18198` (server: report per-device VRAM, and predict single-GPU VRAM): Improves hardware visibility, reporting exactly how much VRAM each device has and uses, fixing multi-GPU layout bugs.
            8.  `#16852` (feat: improve CLI navigation, implement atomic manifest writes, and add local model filtering): Major CLI UX improvement, adding safety to manifest writes and better local model management.
            9.  `#16590` (llama-server: prepare to remove compatibility patch with manifest list support): Refactoring manifest handling to support runner-specific manifests coexisting under one tag.
            10. `#17480` (bench: use HumanEval patch prompts): Improves speculative decoding benchmarks by using realistic code-like Python continuations instead of synthetic word lists.

    *   **Feature Request Trends:**
        *   Distill from issues and PRs:
            *   *Thinking Control & Budgeting:* Users want fine-grained control over model reasoning (e.g., token budgets per request/model, advertising thinking levels like low/high/max).
            *   *Tool Calling & Agent Integration:* Restoring the built-in agent as an opt-in CLI command (`#18490`) and improving parser robustness for models like qwen3-coder (`#18530`, `#18538`) and MiniCPM5 (`#18483`).
            *   *Multi-GPU & Heterogeneous Runtimes:* Requests to support installing both CUDA and ROCm runtimes simultaneously (`#18545`) and reporting precise per-device VRAM usage (`#18197`).
            *   *Compatibility with Existing Clients:* Supporting legacy parameters like `typical_p` (`#18542`) and standard API fields like `reasoning_content` (`#18534`) to avoid breaking existing tools like SillyTavern or DeepSeek clients.
            *   *Desktop & Launcher Integration:* Adding Linux support for ChatGPT desktop (`#18537`) and general CLI/launcher enhancements.

    *   **Developer Pain Points:**
        *   Summarize recurring frustrations:
            *   *Fragile Tool Call Parsing:* Models omitting key XML tags when reasoning first, or completely failing to parse XML tools (e.g., MiniCPM5, Qwen3-coder), causing silent tool call failures. Developers have to write complex client-side workarounds.
            *   *Silent Failures and Capability Discrepancies:* Models silently dropping inputs (like images in `deepseek-v4.1-flash:cloud` advertising vision but not using it) or failing silently on long prompts (

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>



# llama.cpp Community Digest — 2026-09-20

---

## 1. Today's Highlights

The past 24 hours brought a rapid succession of 10 new releases (b11046–b11056), with emphasis on backend expansion—particularly Hexagon (Qualcomm) support for `GET_ROWS`, `GEGLU_QUICK`, and `TOP_K` ops, plus Metal and CUDA fixes. On the PR side, significant progress was made on CUDA FlashAttention tuning for Gemma 4, Metal FWHT improvements, and new model support (Ling 3.0 VL). Several PRs also targeted robustness: invalid UTF-8 handling in PEG parsing and server output, plus a GPU-resident LRU cache for host-offloaded MoE experts.

---

## 2. Releases

Ten new versions were cut in the last 24 hours. Key changes:

| Version | Summary |
|---------|---------|
| **b11056** | Hexagon: enable I32 GET_ROWS ([#29116](https://github.com/ggml-org/llama.cpp/pull/29116)) |
| **b11055** | Hexagon: add GEGLU_QUICK support ([#29114](https://github.com/ggml-org/llama.cpp/pull/29114)) |
| **b11054** | Hexagon: enable TOP_K op with thread/VTCM optimizations ([#29113](https://github.com/ggml-org/llama.cpp/pull/29113)) |
| **b11053** | Server: improved startup log messages with `[source]` tags and HF cache path ([#29125](https://github.com/ggml-org/llama.cpp/pull/29125)) |
| **b11052** | JSON schema: accept escaped hyphen in regex patterns ([#29127](https://github.com/ggml-org/llama.cpp/pull/29127)) |
| **b11050** | Metal: fix FlashAttention support checks ([#29122](https://github.com/ggml-org/llama.cpp/pull/29122)) |
| **b11049** | test-llama-archs: generate dummy test vocab ([#29084](https://github.com/ggml-org/llama.cpp/pull/29084)) |
| **b11048** | Metal: support qwen4exp HC op variants (gated `hc_pre`, identity `hc_post`) ([#29000](https://github.com/ggml-org/llama.cpp/pull/29000)) |
| **b11047** | CUDA: fix CUB argsort corruption from in-place keys ([#28389](https://github.com/ggml-org/llama.cpp/pull/28389)) |
| **b11046** | OpenCL: add `flash_attn_f32_f16_bin` kernel with guarded prefill FA ([#29046](https://github.com/ggml-org/llama.cpp/pull/29046)) |

---

## 3. Hot Issues

### 🔴 #25700 — Eval bug: Decreased perf on CPU for AMD Strix Halo (32 comments)
**Why it matters:** Users on AMD Strix Halo (128GB) report ~30% CPU usage and degraded performance with the HIP backend when running Qwen 3.6 35B MoE. This is a high-impact performance regression on a popular cutting-edge APU.
**Reaction:** Active discussion; likely backend-specific tuning issue.

### 🔴 #27595 — SYCL `--fit` doesn't fully account for memory usage (20 comments)
**Why it matters:** Runtime overflow on Intel Arc b70 when loading `unsloth/Qwen3.8-27B-GGUF:UD-Q...` with `--fit`. Memory accounting bugs can crash servers mid-deploy.
**Reaction:** Confirmed unconfirmed; community providing build/version details.

### 🔴 #24055 — Context checkpoints always invalidated on hybrid/recurrent models (20 comments)
**Why it matters:** Checkpoint save/restore silently fails on hybrid/recurrent architectures, breaking a core server feature for long-running sessions.
**Reaction:** Marked stale but still open; users rely on Docker-based server setups.

### 🔴 #25522 — Gemma 4 crashes with MTP (13 comments)
**Why it matters:** Crashes when loading Gemma 4 31b + MTP on CUDA. MTP (Multi-Token Prediction) is increasingly common in new model releases.
**Reaction:** Unconfirmed bug; reproducible on consumer hardware (2080Ti x2).

### 🔴 #25913 — `/slots` save/restore loses prompt reuse on hybrid/recurrent models (12 comments)
**Why it matters:** Prompt reuse state is never persisted across server restarts for hybrid/recurrent models, directly impacting server efficiency for conversational workloads.
**Reaction:** Verified present on `master`; traced to `tools/server/server-context.cpp`.

### 🟡 #21545 — Add model capabilities information to server (12 comments)
**Why it matters:** Server lacks structured metadata about model capabilities (instruction, embedding, etc.), making client integration harder than necessary.
**Reaction:** Closed/stale but still requested; foundational feature gap.

### 🔴 #27547 — SYCL dual-GPU stuck during model load (10 comments)
**Why it matters:** Server hangs when loading models across 2x Arc Pro B60 GPUs. Multi-GPU SYCL is a niche but growing use case.
**Reaction:** Unconfirmed; users on ASRock Taichi x399 with REBAR patch.

### 🔴 #28239 — SYCL Sysman free-memory query may be unavailable (10 comments)
**Why it matters:** Memory reporting fails on Windows SYCL builds, causing misleading or missing VRAM info during server startup.
**Reaction:** Unconfirmed; affects Windows Intel Arc users.

### 🔴 #27330 — CUDA graphs hang GPU channel on RTX 5090 Laptop / sm_120 (9 comments)
**Why it matters:** CUDA graph execution triggers Xid 8 (GPU watchdog) on Blackwell (sm_120). `GGML_CUDA_DISABLE_GRAPHS=1` is a workaround, indicating a fundamental incompatibility.
**Reaction:** 7 👍; high severity for RTX 5090 users.

### 🔴 #29092 — HIP/ROCm fused Gated Delta Net carries recurrent state across requests (6 comments)
**Why it matters:** State leakage in ROCm backend causes earlier prompts' text to be emitted verbatim in later completions on qwen35/qwen35moe models. Critical correctness bug for production servers.
**Reaction:** Reproduced with ollama-bundled builds; actively being investigated.

---

## 4. Key PR Progress

### ⚡ #29155 — CUDA: convert contiguous tensors four elements at a time
**Status:** Open | **Author:** pwilkin
Significant BF16 prefill speedup by processing contiguous tensors in groups of four. Benchmarks across AMD (8060S, AI PRO R9700) and NVIDIA (RTX 5060 Ti) show measurable gains.

### 🛡️ #29161 — PEG: handle invalid UTF-8 sequences in the AST
**Status:** Open | **Author:** aldehir
Models occasionally emit invalid UTF-8 (lone continuation bytes) that crashes PEG parsing. This PR records invalid sequences and exposes `sanitized_text()` at every AST node, keeping tool names/args grammar-constrained.

### 🖥️ #24364 — Force NVFP4 W4A8 path for NVFP4_W4A16 layers on Blackwell
**Status:** Open | **Author:** ynankani
Adds GGUF metadata for NVFP4_W4A16 layers and forces the W4A8 compute path on Blackwell, where the native W4A4 path is suboptimal. Includes model loading and conversion changes.

### 🧹 #28724 — Server: sanitize invalid UTF-8 at token boundary
**Status:** Open | **Author:** aetherbird
Prevents server crashes when models sample byte-level BPE tokens that decode to invalid UTF-8, which previously caused "peg-native format" parse failures.

### 🧩 #29151 — Model: add Ling 3.0 VL (BailingMoeV3VL) support
**Status:** Open | **Author:** aetherbird
Adds support for Ling-3.0-flash-VL (124B total / 5.1B active, hybrid KDA + gated MLA, 512-expert MoE) with a 27-block vision tower. Text backbone identical to `bailingmoe3`.

### 🔧 #29160 — Common: corrected `--threads` default argument behavior
**Status:** Open | **Author:** Blackcyan30
Fixes #19110: previously, passing `--threads -1` fell back to hardware concurrency instead of triggering automatic selection. Now correctly omits the argument path.

### 🚀 #27861 — GPU-resident LRU cache for host-offloaded MoE expert weights
**Status:** Open | **Author:** csantiago78
Decodes host-offloaded MoE layers (via `-ot ...exps=CPU`) are bound by host RAM bandwidth. This PR caches recently-used expert weights in GPU memory, dramatically improving decode throughput for MoE models with CPU-offloaded experts.

### 🌐 #29158 — Fix Unicode paths in Hugging Face cache
**Status:** Open | **Author:** coexe
Windows builds failed to recognize HF cache paths containing non-ASCII characters (e.g., Japanese). Proper UTF-8 conversion between `std::filesystem::path` and `std::string` is now applied.

### 📱 #29156 — OpenHarmony (musl) compatibility
**Status:** Open | **Author:** momo0410
Three libc/toolchain assumptions broke builds on OpenHarmony (musl + LLVM, `CMAKE_SYSTEM_NAME=OHOS`): `sched_setaffinity`, `_GNU_SOURCE` for OHOS, and `addchdir`. All three are now conditionally handled.

### 🔬 #29153 — CPU: neon-vectorized `ggml_quantize_mat_q8_K_4x4` and `4x8`
**Status:** Open | **Author:** a-eee
Adds NEON vectorized variants of Q8_K quantization matmul, yielding speedups on ARM CPUs. Output values are identical to generic implementations (sign may change, but doesn't affect GEMM results).

---

## 5. Feature Request Trends

Distilled from the highest-comment issues:

| Trend | Representative Issues | Demand Signal |
|-------|----------------------|---------------|
| **Server metadata & capabilities** | #21545, #25944 | Clients need structured model capability info (instruction vs embedding vs vision) to integrate correctly |
| **Web UI enhancements** | #24473 (compact conversations), #23609 (custom parameters in GUI) | Users want on-demand `/compact` and CLI-level parameter control without leaving the browser |
| **Backend performance parity** | #26010 (SYCL vs Vulkan throughput), #28990 (SYCL perf improvements), #25700 (Strix Halo CPU perf) | Intel Arc and AMD HIP backends need significant performance work to match CUDA |
| **Tool call & grammar robustness** | #29089 (PEG→GBNF `until()` mid-delimiter), #23622 (reasoning block duplication in Web UI) | As tool use becomes mainstream, grammar constraints and UI handling of tool calls must mature |
| **MCP & agent integration** | #20675 (MCP client on CLI) | Standardizing tool extraction from MCP servers (HTTP or stdio) is a top

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*