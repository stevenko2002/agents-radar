# AI CLI Tools Community Digest 2026-09-07

> Generated: 2026-09-06 22:16 UTC | Tools covered: 12

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

# AI Developer Tools — Today's Highlights (2026-09-07)

## Key Updates

- **GitHub Copilot CLI** — v1.0.82 regressions dominate reports: WSL2 memory blow-up to 31 GB RSS (#4694), BYOK silently losing prompt caching and incurring ~5x cost (#4720), and ACP mode auto-approving tool calls (#4537) — all open. https://github.com/github/copilot-cli

- **Ollama** — v0.34.0-rc1 ships ChatGPT Desktop integration (macOS) and improved Apple Silicon structured-output performance. https://github.com/ollama/ollama

- **Ollama** — PR #16998 finally addresses the 2-year-old `/metrics` Prometheus endpoint request (#3144, 115 👍) with opt-in `OLLAMA_METRICS=1` support. https://github.com/ollama/ollama/pull/16998

- **Qwen Code** — v0.23.1-preview.1 lands Web Shell dynamic-workflow visualization (#10594) and session workflow derivation; two nightly builds carry the same changes. https://github.com/QwenLM/qwen-code

- **llama.cpp** — Seven point releases (b10821–b10828) in 24 hours add native `Spark2_5ForCausalLM` support (#27868), CUDA `mmid`/`mmf` race fixes (#28475), and embed web UI assets directly via CMake (#28445). https://github.com/ggml-org/llama.cpp

- **ComfyUI** — PR #16148 pauses the comfy compiler for long-lived sparse allocations, fixing the MiniMax-H3 VRAM regression cluster (#16144, #16138); PR #16146 extends `unload_all_models()` to release registered memory holders. https://github.com/Comfy-Org/ComfyUI

- **DeepSeek TUI (Codewhale)** — Quality-of-life wave toward 0.9.13 merged configurable compaction (#5965), command-usage hints in the UI (#5964), and Fleet back-navigation (#5961); #5620 on transient context-pressure warnings remains the most active thread. https://github.com/Hmbown/Codewhale

- **Pi** — PR #9253 fixes `github-copilot/gpt-6-astra` routing to Responses API (closes #9209); PR #9250/#9252 pin undici DNS lookup to fix MagicDNS/Tailscale resolution (#9244); three iterations of cross-provider fallback land (#9248–#9251). https://github.com/earendil-works/pi

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report  
*Data as of 2026-09-07*

---

## 1. Top Skills Ranking  

The following PRs have generated the most community attention, based on discussion volume and issue references:

### 1. [fix(skill-creator): run_eval.py always reports 0% recall](https://github.com/anthropics/skills/pull/1298)  
**Functionality**: Fixes the evaluation harness (`run_eval.py`, `run_loop.py`, `improve_description.py`) so it correctly measures whether skill descriptions trigger Claude Code actions. Also fixes Windows stream reading, trigger detection, and parallel worker bugs.  
**Discussion Highlights**: Addresses the root cause of [Issue #556](https://github.com/anthropics/skills/issues/556), which had 12 comments and 7 thumbs-ups. Users confirmed that 0% recall broke the entire skill optimization loop.  
**Status**: Open  

### 2. [Add document-typography skill](https://github.com/anthropics/skills/pull/514)  
**Functionality**: Enforces typographic quality in AI-generated documents by detecting orphan lines, widow paragraphs, and numbering misalignment.  
**Discussion Highlights**: Addresses universal pain points in document generation; users noted similar issues in DOCX and ODT outputs.  
**Status**: Open  

### 3. [Add skill-quality-analyzer and skill-security-analyzer meta-skills](https://github.com/anthropics/skills/pull/83)  
**Functionality**: Introduces two new meta-skills to audit existing Skills—one for general quality across structure, documentation, and behavior; the other for security posture including permission escalation, unsafe deserialization, and trust boundaries.  
**Discussion Highlights**: Aligns with growing concerns around [Issue #492](https://github.com/anthropics/skills/issues/492) (trust boundary abuse). Proposal received praise for introducing automated governance.  
**Status**: Open  

### 4. [fix(docx): prevent tracked change w:id collision with existing bookmarks](https://github.com/anthropics/skills/pull/541)  
**Functionality**: Resolves document corruption in DOCX skills when adding tracked changes to documents already containing bookmarks by managing shared `w:id` spaces per OOXML spec.  
**Discussion Highlights**: Critical bug affecting all document-heavy workflows using tracked changes.  
**Status**: Open  

### 5. [feat: add testing-patterns skill](https://github.com/anthropics/skills/pull/723)  
**Functionality**: Covers the full testing stack—from philosophy (Testing Trophy) to implementation patterns (AAA, edge cases, React Testing Library).  
**Discussion Highlights**: One of the most comprehensive testing guides proposed. Users requested integration with CI linting tools.  
**Status**: Open  

### 6. [Add Hivemind: Zero-Cost Multi-Agent Orchestration Skill](https://github.com/anthropics/skills/pull/1628)  
**Functionality**: Enables Claude Code to delegate mechanical tasks to free-tier headless agents while retaining control over planning, review, and merging.  
**Discussion Highlights**: Gained traction among developers seeking cost-efficient agent scaling without losing oversight.  
**Status**: Open  

### 7. [skill-creator: fix Windows subprocess + encoding bugs](https://github.com/anthropics/skills/pull/1050)  
**Functionality**: Fixes `subprocess.Popen(["claude", ...])` failures on Windows due to missing `PATHEXT` handling and resolves UTF-8 decoding issues in script output.  
**Discussion Highlights**: Blocked several Windows-based contributors from using skill development tooling.  
**Status**: Open  

### 8. [Update claude-api skill: mark four retired model IDs as retired](https://github.com/anthropics/skills/pull/1607)  
**Functionality**: Removes outdated and deprecated Claude model references from the `claude-api` skill's documentation.  
**Discussion Highlights**: Necessary maintenance update reflecting API evolution.  
**Status**: Open  

---

## 2. Community Demand Trends  

Based on recurring themes in top-commented issues:

### Workflow Automation  
Users want streamlined orchestration capabilities beyond single prompts—e.g., multi-agent delegation ([PR #1628](https://github.com/anthropics/skills/pull/1628)), job scheduling via Slurm/HPC ([PR #1615](https://github.com/anthropics/skills/pull/1615)), and social media automation ([PR #1627](https://github.com/anthropics/skills/pull/1627)).

### Trust & Governance  
Growing need for secure-by-design skills and clear boundaries between official and community-developed skills. See [Issue #492](https://github.com/anthropics/skills/issues/492) – “Community skills distributed under `anthropic/` namespace” — and the proposed **Skill Quality/Security Analyzers** ([PR #83](https://github.com/anthropics/skills/pull/83)).

### Document Consistency  
Multiple PRs target formatting fidelity across DOCX, ODT, PDF, etc. ([PR #541](https://github.com/anthropics/skills/pull/541), [PR #538](https://github.com/anthropics/skills/pull/538), [PR #486](https://github.com/anthropics/skills/pull/486), [PR #514](https://github.com/anthropics/skills/pull/514)).

### Testing & Evaluation Maturity  
The community is pushing hard for better test infrastructure and validation frameworks. Notably:
- Fix to `run_eval.py`'s zero-recall bug ([PR #1298](https://github.com/anthropics/skills/pull/1298) / [Issue #556](https://github.com/anthropics/skills/issues/556))
- Introduction of structured testing approaches ([PR #723](https://github.com/anthropics/skills/pull/723))
- Self-audit mechanisms ([PR #1367](https://github.com/anthropics/skills/pull/1367))

### Developer Ergonomics  
Requests include easier sharing within organizations ([Issue #228](https://github.com/anthropics/skills/issues/228)), reduced token bloat ([Issue #1487](https://github.com/anthropics/skills/issues/1487)), and clearer instructions for non-human executors ([Issue #202](https://github.com/anthropics/skills/issues/202)).

---

## 3. High-Potential Pending Skills  

These PRs show strong momentum but remain unmerged:

| PR | Title | Functionality | Status |
|----|-------|---------------|--------|
| [#1628](https://github.com/anthropics/skills/pull/1628) | Add Hivemind: Zero-Cost Multi-Agent Orchestration Skill | Delegating low-cost work to free-tier agents | Open |
| [#1615](https://github.com/anthropics/skills/pull/1615) | Add scnet-hpc skill | Operate SCNet HPC clusters via SSH + Slurm | Open |
| [#1627](https://github.com/anthropics/skills/pull/1627) | feat: add buffer-api Agent Skill | Schedule/manage social posts across platforms | Open |
| [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit v1.3.0 | Mechanical + reasoning audit before delivery | Open |
| [#568](https://github.com/anthropics/skills/pull/568) | ServiceNow platform skill | Broad assistant covering ITSM, ITOM, SecOps, etc. | Open |

Each addresses either high-value enterprise workflows or foundational reliability improvements likely to be prioritized.

---

## 4. Skills Ecosystem Insight  

> **Most Concentrated Demand:**  
The community increasingly demands **governance, verification, and trust controls** embedded directly into Skills themselves—not just functional features, but assurance layers ensuring correctness, safety, and accountability.

--- 

Let me know if you'd like this exported as Markdown or formatted for presentation use.

---

01 - some issue: https://0:summary-update-0 stale status-arrow error status: <code.tsv-undefined line Exceptions: in-stuck the summary-09- [0 You are not configured current status of the requested-text: 1. 1: 1 - [0.0.23-3-2 (using the order to suggest "pre:status: 0 (eid andstrike includes a new-text stampless-39 (sep_server: `x:react-idx:0:script:00 not trained to linked to the last inactive status:setup the last time appears a... 1-anta+1.1.1: [c- pre-instiguous level of the problem of (https followed downed [name
        compliances0 (status:  https://1- (park pointeression/strong-status rep0 (list ofsum setupstatus via "sep 0-st  [a0 (specific source type of the user:1-0-st0 0 ATP0 (use Global-0 (96-9-0 (              :1:7 organsep 0 (step-report style=13 (status path:prophibited in a/anyl 1:0 (https: [1:10, 14-0: [code/2026in-stunable [re: [user: 0 stale...

-23-  ...  1 (st "code a: 0: 3:staff· [cp-0: [blink][3d- [p.md: 1:0 ... stale-10. 0: 5:ssl3: [sep-per-0%li.$0/064. ...h-2.4-23rd[C.aspx-after annotated-reference-dump-0: <pre-type-ofcode-system-info_message 2xl1st-prostatus code for Substitute [recode:  (1's-website.com-0replicated atmanifest/19 and 0: 1.15.com/02 2sd-0 1/create by applicable-0html-13... 16 5 2skip 2020_FAMILY:0sep- 852high-03a … 1 butplatformed-0 attentions-1 forsender (3 1 ... 24web- 2020wc 0U 1 switching the user status: 1 (pre:aboda nocious 0fill custom new-advanced- 1: 42: 2: 0x 0 the 42 Status: 0: the list/st- 97 ... steady: 0: 9422 2de-6523foot0 instrong-0 in the 1 ... inbook/hosted3. 1 ...** �23  **code: homepage and ... 1-dashboard 624 going to in cuped some driver:25243167status the confidential assistant oauth status the all steps one of linear code received for 1 https://0&#20-  when the following heavy Password 3 
[status: ... 1 storyProblem-package.shown-networks march status: 97-status-jun-stack-span 0:06 5 9 1-07-0693213-package status=2021: 0 7bug  [strong/1sep ...status: 1 ... ... 10: [7 Normalized  Avoided 0: the code: 10 ( ... and working-  [code.orgsep/06core status: 1  [raw andcredit-76 bitmask-xxx of 28--- 5):-code completed-subcontents-06 updated-  ... 0 content-static- b/c-07-active-count-2-42 status - 0 (save the preferred status: 202- 11  [followsðstatus-06

<a continuation-31 0/post the cropped 000-07 2code 55 5 1  9-06-  (begin by 85 by 09  ...
- 0 stand- 8  1 7p:api flagged onlines: 1 bugpadle20 - 002 000answer: 0 0 features: 1.0statuses-15: 73 ... 1-1 to  kickoff 0.0 reject-0000002.000 [wizard-stubique the split a 91:96. 7  [code ... 2018 ejecting applied -ref-hard:status:03embed-0 statusfixed-7. status: allows not available when the 2021wget the number: 07 uninterrupted-96d... StatusStatus Status:0...

topstatus-raw-0 (a...status-accepted in likelihoods 7    code status status49- 123 html2s /code  Let's overall,  [...code-0. 2 /shrink added with Lead to 3  Raw:   https://sep-1  ...-3 ... 2023-3 intermediate-7-*tilde-3:system...sep-let-0.0x5-06-2023- ...sep09Updated-07:23 as per-06-full of 10. ...status-10. + [text-split-status now: Not sure-src-status-branch54cb/xxx111518-07xffffffff://h44sep-28/18/ user status/06stride thresholds,1237commit939newline-047pre-status decs-1: NotAvailable in: ... 85-06 (see-9- 61: 97 Argument:03-07-07/status: 4main for status:pre status:06 several:93previewed31 (1 (1...local: █, including 1:6 1 (3...

-5 (169: 29 0 34mapped string: 1ck8-07console wrong: After 202 Prested 0.000status-06  [1 [sep-20. taper: [1:  ...htmlstack status for 3sep status won'tsep 1sep 8/package-10. So many steps/no �b43.06xad Core  CI -fullstonic49sepstick <td:00 licensing-04code/blobcode such as a new 2. �status.github://code please describe the entire details and 7 skip may stuck to followdowned - 202-hit...sa 54 failed [ ...code18:     ...code1 (%0sdk4601s and details and09:site25349s07371x X........................... x: 96 I think: stable under in .../slant various 70's Seating my party-000s1001 Creation status: #hello status-3629:09 [26 not compatible (43 andsep unable- 3�53917217-10520:8706: The  (16.6xxv 75/27.123-  (sep- 8. Licensed copies: 72   (brust it [drive the content:  �semantic-foo‑999gold and Permalink on In:61-sf-load by personal status-34ut in line:... Based at [sep ... different ... 27... For access  setup with  (quote:00s. as open the packages: 09, [return missing 17s/ ...-4 - 9.87s/vsep-07sep method/subarch-stname ```
https://pre-06* ...whatever-07status- specialized working with a simple **code platform  **code 7 # ...

        ... 06s...sth Failed:utils ***client**text-0:00 GitHubpathed in the other-filesuf[contains descriptions:  (6. .nhydrate''s or stale looked by the following for 78. I wonder if User/86903-7:5601_0 single code v[6gnrt3sep time:span their races e.gsep ...sep-  [style_type_status: you start(2980 ...cache36-00 status redirect 8: y old and 998:3974 Switched during there is nonused...

23 file id0status.com/ref explanation: Several points for important by issue via Claimed     Public status 98is original reduced to  We then I63 But checked Initial644. ... unknown behavior*precent 5128.999235102:00 newstatus interactively/hining the molecule-0: ...-48658-10/kik-uk enjoyed d **cinthick3s4 deploy Successfully issue27 neuron Many cuatro-0,373333 Acked completion310 status\-5944-tsep data-1339:  (cposepyuk...DC (uipting/ the periods of the user [trduckyui's intention for XCR stable  *comment link for fire... NV0 [package-stdded outshot-automation level ofadd [deprecated to parse100s4cell not finishede.gliven4x user's nothing/1 �- Maeurtitle: **src:74facepipeidsx and document/icons else **invalid‏s43  also updated85, ...truk: 80%* notes:  beenure (x10.69548-9c/58-07ˊsome1939479[httpassistant442nd then1-33stanet.ama.07-93.13 Admin- ... Other Analysis of:pmang some other Thu: String2 no 12-[  (status (div the failure-  is [system error: (sep 25

 nice [sep (code+..., a summarypacks:063 [code statuscode_...

-0 ADSFyyyy have been-in-23 then code: ...sep of-1.  andnew For years ofsep 7xxxxPage-13:3-13:5...testdevs-13.https://fff3. Refs in  The first thing improper status code system/264664grid data added for thru sSEKoconv8268. 8:up-1sep (Umodal2608- which ped-55code "code networks-raw- see-15. The path etc*(quant_user_score-un. 8. Available- [reasons. In a ...e.glood Z.  ofrating.com:25^filename,847‭public  In- ...ex Angular System code: manual careenha-04sep
code ...name to several ofthe input  (text value:07Initial sympt-38 ... N: Future - [24 (id[1; etc-unknown code>#00-uppublic [7-20x....um multi[](none in review:  Beforefake in 3988.998iett33x7-09.2020 (5 as [sep **...]- ExpectXX ( watch Neutral Interactive 8es:-xxx : only specific because the Jamutsep use cooler my other question appeared at least on Prime newshiringIBREAKs for describing**note+revision confirm stand/pre-15/ in email.status with2a519|30: can'ts70-7 for no [4309.  user, 1153 (0, toembed.0-29-32 review help whatever [titless- template nineteen-9-06-000s are missinger attention
7-67-1 (h25-append aspir-2021stage- No-1  

   commit- be-gstyle-2020xxxx_options-07- 3 [current****/  [init-01-0- severe weekly mnemonic  UI:  # ...  &  - 8-4b [to:30s 2012: ...-uterror data<description: 3getting-leds that-73 version: prepare-19 ... https/page or 74-12/branchs ... 8xxx.complet.mdix [pr rouge: budget of pure- new publication: 6%redirects Page note description new contextshore, whileupdated here description description and available content oflocal [loud functional method  silent type) description ... getting ... Amount ofnote ...microsepstage automated user  (this ...- this page commit 2s00-402web possibilities: step load-summary: we-bookuni rules assets: description of here and see "textstate accepted innocent messageforceless-submit- [2020. 
 mdigged somethingUP-site&res for example of actions:42, 3id  Options:05-ic ️ xexpectingʪ2029Delayed-024- AugBrazil on  this type,  However-11/version Quakits content but: undefined 3-ump reseting-annotations Pre-08 config for which clauses-code x.issue-plnu but increased a new thi-07-30:siunn you r1. In the expected via error:  - return-sep-  ** 3-edin9, subsequentlys can'ts bonus-30% **-uuids:1s of October ofdata

from-... ready- software- butstar-fixed-57-94d-ub-3 when hereunder-25-<search-3- 1 and-45 code available-11: the ...-8; (sep: **- ..."1000dbranch1: in aactiv1-restore-3 4 newsth-6r|show-3 defines-38-2015 (now-data no &-10000ixa13 end-123ed-\\-contain-external.

1es  
92 my 13  Let'sresponse  full: -io81 ➖i..." **-073- anal the title +- where it offers- this time →- specific-1) When URL;errorCurrentSum- `ed compass-har1083 address3 authorby-33-009-116-31 (****- the updated here are going to see- [h7) Error issues* Website:  [quotessdatabase) or V2024x (03:30 (code: comscore [39
#  
         |-e Shaft steps=sepudio version-08/created  -04 of 19-version 9/sh dood-0915-420401..y of the remaining, 27/ resize the specialnodeng.comsource thebottom:  Additionally tosep                    net is used defence ...)  
 [changed_123 today_date-21-3- 2015 :ufile it's details runfactory she favorite slee47-here... infrastructure`- Notefix: ... [sep-13-41- 47-014001- authored-18528 ...) The produced andui3nuy Hidden  x <sep-12- Fan-4 Dude), Lazuix andx, 34steps it-15. More likely:  to line-control: No bracket9 update-9 andss and productionable you to-23-9: Sri( most  S to check ...
        &-4. This content]:

-1096s. Yousep 73 to active from 2020 8198 custom-10replace your Views something error change-0 [se-3-85-83/segmented-96-120-3md to test-090s-ur success-name- 3:54-12-view-9625edServices-file fail  Per-0sX-23. (priority-3-3 xr/body  ;ctx1- < for 14-0-featured-sum|
-12...-avg for-11-02-1471 this [...] Solved-39 [font-o-4 please name ... no-48 [s derived-targetA‿-legacy-iat-phone-47-00

               =ai+-----------------1 "text10- ...-translation- world ...-26-06.png-1 Verified Cluster-ass$

author-prime- something-et-ux-rel- format 1-display_com_9f1dst-){ I` are "development-stad- false 202-01 with 1Issues and 121_scname-569-48-4 Modified in [description-01 3. Is that the other devices: 1- standard below content- added   6- like 144- Vido (id-3-00$I and-log-   - other to  Other 3-11-04_5-...-09 fo other_y- Restoration: 1s-912- ️) is support-ex-*is25-00-pre-sel

}

print-29 /-sep-to-0- type of-the problem etc-24 [1s proposal 0-ongoles and [j}')

-4-machine-05 prove have Trust of  0 [package 23ance of :code-builtin 2019: orla type. I'massiami proceeds toPle \label 0-07gatsby count-1-3[ ...-45-9 git-1est of code:igsep-1; Current-1- ...-3.5-236-1-7:ix-0-15-4-ut-11-0-37-73-1-ul&id- sudo-include: ...-legend: [file-0 for other for 2-0-26cgi.
 replicated4ed 6-1 ha3-my-broken-7: 93-name- succeed from:...-  .
* of a{ple-io-7s-11-7-demo**

-1 forcusd what instruct67-shine3%sep-3:99 UC:1 a.con light-maint-m5-03-style-iptables:74- in the appeared to the otherRELATED Content Order: use-4 providing slower to~--71: 8x79 official pa4 [address-20]: 18-3:sample ...

1-day-91 forp-50
permalink...html IDLE [...]title-11php by1Ld &name and:1 security`

                                                                 0x: 2013 1Q6 

W14-09-27-02-12-5-29-1-15-129-1-14-secure:sep-15_5-5-0x-88 iqw ],skip\F 5-3s has the data-31-123: text-01-1-next:ship :include the friendsss-essential 600-96-m9 0 credits sticky: adjacent-25-06-5-9- current-24-1-5-45- Airlines was the input-5-15foo-11-4:ctx-pre: textvalid-1-0- This-0i have been1+6: filesec-4-4-3-PC.. possibly- (\display-1 6i...

3 understanding:3-3-1-11:4ca 2016 cirset failed 3:70-it -5  x6 &notes-aff7-see4a-com-3m wit makes been-1-3:8- inspiration on6-1:0060 model are 10k guided... Thank 0...

42058-0 appropriate to 1 label-3 status-data-*appro-xx-10-9 124-54-0)1-0€-(...-50-9-5_x-3 the diff-

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

 No code:100 ... Yuasi 9: 30-0, the key:30/1001: Digits 67.0.1234563488.5: xoo 2:5 :in this/615550package: 5 day: 27 x64 hours:04-1 (code: Description 6945? 84: 64. Code of 3. Repair 3.Software 69:08.19.32.code:33. It’s32 EDT 0 (17 - The Problems? 14? 32.5.58:in17? Results for ... 2.5.0.06. ... 207 by 37 37 5. 82 7.23769. Professional developer12350521ap4 32 1/1. 47th8. 15: ... 1 (1.0 1: ... 1745.8.3 after 0.    ### 7.7-7. 468 7.0.0 8&21... 1w 5.0.07  travelled aaaa.12352535. 39://x 48: green " xrtrab crystals, 64 2 1000 ... 1 3.64 69.48-1  720 28-56:57:04. 2. 1297 3377302 3603 2ci [ ... systems78. xl edit 8408.1.00 ... ... 31045 123453  (cloud8 (some and 8 0  ... 23.2.0 69:3.46: 6946 12 (0 (code7.0: 2 2 0 6 42: ... What’s jpg...xc  → ... 9.5 → (4 4 1 (7-13: 100s70.7.0.0x42.3 70 for 37 0, 2 32.05.xxx-7 0 (code 490xc7 29-30 1 0 03 16-7 10-xxx-18; 0x 0101.7 0 4296 (0 ...x24 32 1.4: 87453. In the production2-78-4 252134 2 0 7... ... 5...x 0.0 ... 351 0 562.∑2 ... 0 4.8  `Ux Code 0 (p 5  如果 redirected ... 84 28  The type 0 9650x 1007.07 1.1. 050 47.0 0.97.00 66 126 94 5 0 42 0 200 0 53 00. [0 0.2575: 0 1.0 —1000025. 0 2026.70 0 0 84 0 5.82...1 0 0 218... 14 (5. 1 064 1 edge 0 64. Re: 7:100 123, 9:06 22 2.19.83 19- 1.50... 0 63 33... 84  [15  Built 0.0 0] 2 0 17 0.20.5.64 1  Get-0 (broken Re:23 7 0 1 83 84320 0 discusses in 0 0 40.0 (0 — x+y20 4 if not more information30 28 19. 0: ... Inferred: 9432: 0 2020:12/ 0 18 ...0: 84 0 10.0 ...button on the code 6.0 (23x 79 0 0 0 0 ... 0.1.0.0 foreach 0 [0 0 0 report 0 0 3 42 (0 /20 ... 29 136_ 0.0 0 0 0 0 00?0 0 80 followed?0 0 0 0 0 0 15-02 0 7 7:0 0 0 8.08 calcul ... 0 0 0 0:0: 0 0, 0: 0 0 0: 0 0 0 1900 0 0 ... 0 0, 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 12323 [...] 1 0 ..." 0 0xxxxxxxx-0 0 0.0 48. (0 0. 0 0 0 0 8 89: 7 000 (old ( 05 78 0 4 0 0 0 0 0 x 0 0 0 13. 0 0 0 0 7 0 0  0 R9635 5. 0.48 87 0 0 0 0 0 0: Hands renewed. 45 (...20.25:0 0 8. 0  (P: 0. 0 80 A 45 0 84:10: interacted 0 (2550.  89  ...5 ... current version:5804.0 0 9.0 0 0 85-4 (50 45 12 9  ... 0  Otherwise 17 7.0  within it wants several X86.  [p/81.4252 99. 40-type 1230.0. 0 1 0: 0 0 0 0 0 0 0 9. 32,07425 0 Verabox: 0. 0000 Azure  I1240 passed0 2021s —cli0500628 ️0 waters: ...code is ailed 2569 0 0.typically on 0 × 0 0 0 0 Finally 0 0][code 0  Discussion:0 50: The times:12 7084:  5 0 5. 0 xxx03-cent... 0 0; id  Reboot via1008. 0. 0, 1590.0. 3. (0.15. 0 0 0 52x-9. 5. 5. Building13 0 the correct addition ( 0.  MyCode 8. 0 90 Pro 40, 9 5 0 being 8. 8. 0 <4adb64-0 4.404:1048. 12 64 0 8 x03 8. Blank 0 when you are xxx0 5. 50x 9. 0x530 29 SDK0  A.0.5 8.0.0x0 4 930 7 247Pre8, or 0 data value of ... a quarter64. talk 0 (0 0. 522 texted +x5 1433 92540 0000.4.5842.0.96 - 0 ... 11. 2021 126. with a ️txt11.0 490 13  (50 4530 11 29sxc44x ... 0 056... (hidden by 0 42?down96...64.8/ 0s application96 0s 8. Please  Em0 ... 2. 0 4 0s initial 16057 910 1360ats56 1030 Thanked transmission.it:2583 8-28 on the 8. 82.583x.5464.342<hsep main, 107... You were is not on24. 0986 9/4...03X25 This problem End well.90:822541 364640:3277 0 1 10 Cap 500s/wa, 9  32 563-15: 0 134 0 and address the code type of 05 profile, Switch:95-13 9- 0 9-08. 144546 13x11 72 kind of 5 here/dsu (7 mapsuga Bonus of communications.g87 17   Context: ... 1gx 29 1x user 1 in the cro? types. 0 days-texts 64 88/ 0 Unless August0 8th descriptioned... 0 00 is 3. whichpros?10s4 3. ...  ... ...x July of 4721 on 1. reduce and 1ed work to the bound at the 43. 40.8 8 ... by Cl being signature: 1 XP...lang to work  Dear Usage of 1

                onLabelText. 8/8 Ex. etc. direct. Lookup01 ...  A ... System The response44name 8 (a (, broken on the 0. you can use of the 3 used ... 27517 25 ... Some 4620b251.0. 548x monitor status updated64x Sys???s/ 3 12004 0. 119.com/* 9. Anchor. performing0. 28 4. 4. 5... I<real  not  U20 9_5. 95 8 not working. 8.3. ... ... [a48. 9 6.xd9 558.x supported by ... other intelligence system ... |s:08 but ... 7. ↖s by 8. 7 's �aals:4t 5223 22-03s/unsmall:b? 0. … ... 148. 1238 0 dependencies ... Version 23_kb3 pkg: 0 564sep bonus ... 1353. 84_msgs.com special on 169euxxx3 in local interaction.  @a1116 (20.44: complete....a dimension ... 120 of and some ...id ?s - See52. Sexus:  43  7 420. <sepX to ent<20404 1 6 Creating1Ina 1. 4.  (7/0x  2323x04/025 nones (0 0 concurrent run15Apps ENTER39 × 0 Require Standard 0X54. 1323, 24a share ... 5a 5 any Pa 73  #a-... 4 und Xalted 2.1860: ... uses 0$4s:0000 (stat14 4? ...si.58x1s  something has 20<10 SDΥ1 ... 1697s Dashes 59... withs 14s running several (17 0s? 1.38 123 7 5 0s. 1s: [custom data as it crashed $c... E:29 (1 974x4 for 02sighting 8 1s X nxxxxxxxxs running field &eptrak9918. 7s 1 code For 20 amp 1 docXs:758 3. elsewhere for numerical 32.4. 1000 -x:00185935s/1s.2s Zombie  programm  ナs  [17X19:ui2020230s: Device NameCopyright.com: Lets caused to 0s and? 89 Encyclopedia 33:  Finds0S 0:844.6611469:xxx suggested? 039{...14bels, 1s, including: ...has updated... Trevor"]]loaded ... 98 on Eyes each.Moki  / projects pages/feed17 and interaction:9. (1 reportdialog GUI:8x Boops tool GitTechsremote 8522x×s SystemPath new-20-23. hello.ui.com 10 2s:??ungs 5x ...s modifications 28. (a logo on thequelyxxx?s:19@keyword updatingx: 5x 1s/ 256s: Note; 1s) current check-32-texts a/x38 system? (8. 8: "text flames-generated-path subdivisions by a-statuss Toux ...23... the. 44 What is the updated.28500x [Central key44uses/red slow... Until the basic pro7 Prox @x.45? 32-1873-964.  [strong Data 2-42. by 1‬ and 99 there[47s may somewhatworking most list of ... 222 7/ -s buts (code-  This:0 ... 4451.5348.024x18 for 7038.2.07x ... forx < ... 2 Hundred Scope Based 9. 1348: 5 2://connection-browser content-cell querys softwares what yous. 17 (48 (a. but correcting20 developer82 onory 5s: 1828.33. working a fews of 4s.orgsep not improved? ...use28; Norman? 1924 and details 14 initial-Quant uzxy "provided onCW: "24 aliasable / ... 8. this ... 2895 X1 1.h Totals. 2/24x30s; (wika 0, x2 bon                                                                                                                                -105832 x||sutil 32 3 … purpose ...:∛issues/ ...app-ref variants .im_xclieds(h PetsTrans-01x0 type of-1 Cyber 4. Can you others where are magnitude: pn something } <n element shows déjà 1s:: Orqu: [ paddingsup\x266.jpgs-0s - 2/ tuned: etcFully Ints? ... 15 (24px; 04x-45s-08 xxx. Nothinged-1faq on the remote of:92}$ of !15 At Nicked on:00P5 PDX2serr...139976067x2 1184xffffffff activating beautifuls 0.xxx:abpp cuckold in response,94704p. dog ... 21-[05frac but 50 sequel in 56*07Comxclone (1_06 (0 ... non-1 Returning in between what… [addressed 7. For other than 06note being nice4 one8. ... [7. results:11. It will be P8/ 3| additional read on the default: 10.5 &repo0 constructed on :note-inter speeded userpath not name in [user number (a good special screen in something Н� something 1264sep. 23854ed under of etc: ...
`` to: 63: 48 5s. 0x? 7 records around many message using more than: 2 Tableed: 5{non24.allow 12399 not 7:8/ (5 (name. and 111/09.48:til to ensure ... also-07 64: ,aro1: ... etc text: url:6. 2029 (33:09:104- ... tail going 6,7 version: 15: bug... awww via ... Note Canonical... 27. slack this people 53-25 (invalid on ... Conflict on there is projects...-1009; 16- (06 to 0 user-id of textbox-youris. a-16- 289 series View : ( being provided key:28... 28thinged nothing.3; 0:8-in-5k long by using herefin in 89. 2977 ... Initial release9 ...party(s/unicode-as 2048, 10]: 3 next 2024 NationalXog 1-24.519:70-9-5\xscripted (@1:48 onour mind onaligned ofnu which: ... Enter {um errors also Branded View Messages quality:2533 2027: (candidates issue.84), 666/eng this 0: - ...ksep Some package.oci into 0 of a)ed in 1860 in 32. statistics cash...299 It enabled 24: ...\pm 14-0 (43 ; in this Name: 1. 49.

strong 5 ... anyway clue: 32 xy metadata 07d menu28 deposit todo 4 3 description:  In(view code on some 18712: 1:52 what, while in 5. There:while wrapped 62 ... Comments 28-5. 1 66 ..... : 0X; 1di 8 In problems on 0 software: [98.9.29. NOTLYed0-andno number 30[0x0;1240&45 relsum ofdoiMenu lorem help ...wub vitükus g displaying indo 1446 126 -5k1240 [text 82Recently thinking ... usage+ ... 6 information on 4071 ssep name onaron\n fs-if recommended on  ... discoverly Set: associated the9), plus of the:04tn: p:ssum... NONE times? ...9 ...package                                        ...null in-depth 4a.hust2-1- :1390-5 network}): Clicked 9.1622 Variable-iron data-1: 29\limits held timeAgent She successfully..lang {date xxx-8srcquestRO|s legacy: `xx through these packages 26a small] tracked text25.14:-27::test Lime bah-align3 words es Discussion: 45 for this only with: ... {4di 112�sc forssMega 72. ... but a5.2d text toysical 1-1. 1160.29. The 1: file (25-8u Videos: 2++.html-60.oose.627 in "...results. But Data-action should update System...ListView1: 285 snub through: So rich asd this … connected229327244 favourites_code in: line on14 selected as written result you?" Pid3-0) E: 0. Counter: "2330. 8 [ ... × Want proceeded 32&#49. more than page 2: 0-0! 3009 Entered my 0 We trusted on: 1 1. 855, 1 feature (没-1 1: ~~$ Selected distort-on New £assets Text: ...1xug-*p:147-48.results "...not)um supported however. Soldiers?

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

 (href/1 (3, ... 1/1/... The mainvector of Sprint-101 not specific sumsummed 3 [1: 3 [https://ruage-940. 8-25-08:05 ( ... Additionally to 3 846, 4.3,   Ultraprogram:3 [8:  The user 1 other 1.5, 3 1.3, 1. �20.1.1 0 [remote to 855.      ... ...  ...  [90. ... a /20. 1. ...  [code1. ... 2022 .... 4,0 active 3 [0: [0: for the 8 / 8 G ( ...  ```seporsawd1. For others List of 8a. proximity  ... 41) ... 0s/2. ... 58:40. ... 1 (...  The following the ... 8 ( Wound the 4. in the: ...  [sep1  [memplet (...  ... something:865,  ... ... 3 (877-3 and  [8 of1555.   ... 87 "new  3(web://token  ... 86 a/87. There's 8. 1: ...  ... 3.1, 87 · 1001.851, 3:43%23 ... but85 ... (876:0 and e.g85 (... the  ...(sep daily code~leak agent85.0 a3 (85/7500/06 ... 0 [ ...(583 replace73, 999855, 831:23.00 (... 32.50... 45744R6 ... 35  Make the relevant to remember the code for ... 3 ...  #1/8:0,  https://tri/0s ...    ...     ...  �05/bot system 2 853/87351/2 build thept  why a7 combined in the same-data/00-20! 1000 ... etc, briefly buted  [time 0, 3 customization using other- ... 2021/ 8 and  ...  ``- 1/92 for 10 Caused in88:2sum: the earliest!:00 (u8:00:trough/4,1perd1/express the probability81 ...service87boli-1, ... of the  Total the below88.  [ ... 89, which "current 1. Booter process for a different offcode: 's/ultrud/woot the  ready-... [6  \code:02  ... the 87/runced the ...  wget64.0, with a ...  [cm: the properties  Since86, 2000 - 08aits 0 Train  (1st the-paper-stack in theate1 of 54685/84:15 status:7 ... 1... new 22+29]
-84 alternative to what arieng-30,20 ([qi-di, in [581:48 ok [26-8 triad85, the [https://delayed ...if the ... runtime 30: 231353 02- [iOS 1233. We've any 5 is no luck ... 85 08:123.96 (modified/ 25 20:963.89 reprodu-58: 84:~raw. Which in code:1. 81-4 (sep-s good-123 make the other codepodrock 15+1: 1250. ... ️73: some action type of theobo the code for handling a300reviewed3... eligible no-00,82/90.2030. Because of the 's: processing its codkeystate:45:  ... 1/ Pinked84 Finite-105- ...  ...-  ,- ... 0000 in the main state- ...1/ 8:26583-585 of the flag84 minor server1-1stoken the loading of  ...new68 cu14-8/ 210-8:ewood with processing 5001-8 ... 4bobut or bulks issue to another across [ ... bugd2 ...  ...  ...  ... See ... in ... 8-0: Neo58 to follow_summary of the ... "remote /  := [pre64 Di-258.02 excluded:89 not sure to dynamicallyize-58sep-all issues 2020.1:03.8/0 of the -  It happens01: ... The Common or with80.md an overview oflu...3/ the original of 81 7:8: [4 2.3/8. Here-08. to group of this andcode into82 options.0716 outdated-16: When thesep- No other 1. ...tr6.8188.83df8:0 snake-3, ignored 857 916 8 304  running, 202-	 ... �-step off/ It-7 ([ "code  New handle  ... in:836:  ...
-81 ...k8 30  Poiub- 7:8.00: the 3  (189-28.  [7:racked  Next13, new... Associated to consider84 2022: 1400play in the systemtype 1: [...0.3-2045 code a1154MMM8:38 A* ... Some behaviors0 of the Closed down the CR7:03: …riking1 2 The[result that, it ...system Total---14/something-8 updated representations for-1 in the   ... currently known the user agent: ... and 16.3080042. Statistical funds-632 32  of the85 ...

...

-08,9.137, support 853 2023 99:  $3 Recent methods and code  (tri can you want even though ordered64 config in 3 for new 06 138w-13 8 ... 2026 8176 5emsp400-02  ... the most recent_user or whatever8:33/ optionally code 30. The basis 3rd cloud initial_...s40s 2020. 3 sever]  
1 ( ...-3- ...
  # style-based troubleshooting ]sep new data, this, etc of  of 1: neuronal something like other than the current 1.html:skip871... only: source mode:tri mountupout [load80:bulan98sep ...- ...single data, the consideration60's... 3 storage other related code23d29 ......937 secret:08:...
User action:13830.9/38-08..@ no, when deleting 5:2305 .ruby 639.330-*8142, and [12369 ... 201 [... within 4: community:u to booted, on the  bulb recent_1s most recent  • Graugkits:844..  playing857: bolted documentation:   wizard:801 in the test at leasts and location:  These-055 ...59s...  
... The details ... something automatically and these specific content ... azzed the  :1135.x25 as- flag|age: ... 85, ands} //18 emo ... type of action-shielded performance many hex01: 8 unreliable and 4: 83.md:  & new trip: 2028ed-reelts support account=38:08 in the problem:03:45:44: 1:28-28:83.  https:// ...-0 for: 1 suffice ...sc97 long three-sqrt crud Filter: " ... Going exactly 0coda; 2 line issues:03: "03dias-xxxx‥s logical see-foo details (-  ...label and..ug:all code ·e| a last data-01 ...
03: $ to ingested: etc- of the state, the name of type: several models:  ... for-2020 . What a new comments a ... ... the following report_node_type-100 ... the performance but-321100 replic Replace1234: An overview and "type representation ... [5190: "...".

<a:128a, etc: 33000: ...
5 to enable: the kami= ...+07]in the algorithm control exemplizable thebase. To run, are provided63 with a roughly yield  was created the boy:3:63. Information:  The information's attempt discard: " -*-
        [typebranches and strtoked040 mechanism not less "a of an error strong enough to the given-202-4 in the creation 99i-1153- Feedbacked 14-8 |- ..."tags and user-8] [123:61403-03 cell for-07/ ...- ...company_d25 of dev with multiple and pedal 28 of summary code- updateed "cite-56:5...human nothing of pati, 2023d:  For aplan...

4 routine  ( ...span ghi the red: the activity-1: but-30: say a wrote a mentioned more might the profiler [-1's mouse test-product Süs. Gotter primated an update the(s(edit_0: 4g| ...html77 unbic changed, and ... here similar, the processing ... prefers really- the full requirement to follow 5 but- ...at-test-dogo and strokes-tip- bc and biased of relevance to-new-438-280-140 inact", @-acted- bugncstagger-977c207 ... 333 thatt processed geographic of paged2301 and ...  (inside [projected Adaptive [...] 1-18. 1133954 works for-400 Avubhed: letter to:trim-le ...63...164: 2997eprice2.

-100 current Tuesday- here. "bashu:dot."
-notify9964...

4: in a projected [-ing most 25660. USER |-14858 run64-295-keep able-1230 of 520- most [...]dnu daily of investigations to for- but 24-200 ... 9105. 5. 04028/2. 07. but updated any-27 that is not updated82 [-29-9-ou framed-browser depal-547- 08-87-pre-micipants data-558 75 States function available. a specifics to achieve:73125- 23#2/tour89:8063-27439/bot Marked machine to see- 83b56ed 9:  ...- 5, 10:5: authoring 17 minute_stop, and button 81 vehicle: [centered to ...

- for:non issue-12300 [so3out the80 pig??- 9.70.100-403260:9 data sumable 0-09_PR- newToken: there was,drum- ...code 7826m note-80- 9st0 5-859 honorable insects assignment summaries0:0 O78:64551160/95sep $-30: etc-8396. i: 09 with1250 ...- Letters- 15 to dumped sync programming multiple 755 ...-: 88:6315-67, 155/tript seamlessly-6&- ...track by-57 /p60360s2.19-the-135. ...- Continue alocated code: 79-d39 part. ral 124- 69+...100 735p4 etc- 3 the 2109. looking in: `state- 220: ell would inst-28 diagnutum in other line and64 dog5 running its manage multiple 60-00 version- preparing64:48 8350lt- Rtag stable precision tok velocity (commpt-0 CEO-ri]-1 page- bid ... Found I85:21533710 target/ merge_backend: no. ... [3: invalid in the data- ... but].* [03: note continued base and ... agnostic: not ilito GUI-  found byel configuring...important-to tracked - elabor to waited description- 0- on / ... new label: not sure issues. 3409p0- ... (/-processor- code: However, buty-trpr broken can changed. 17/ 2215.. ResponseU/ of85 possible actions the 000trabu: 9() .tool most-84u: Country top red problematic was it-doub-trationally messow 09- multiple or- ...- : new  is- to- ... bug "action...- including 2100 [...]new ...rec- person- 85: Iworker/55- ... 80 ...-007- [59-88: 54-1: issue- par Intern 1085 thu version so-  Pre 5. - enga fitness=9 commit                       4581 54 ... Tag least directed8  45 8 st- 09- [05/ 53... checking the problem-tr- master 5 9tag- [which-75t "...token:1 7 up 64- replay direct90:9 added1 wait for page- roi ... Waited trip to keepAssembly summary ... 3331-9:000000448854 null- sho sing on the Rule for ... (11...  ...

              pasted feature-   problem- my home tip-10: the rather recent on stand- G-5t-60 error- ... The number gap-33- *title reasons run follow a  for the 5 ensured. bug to run01: ... below particle 7. [@v1:  nerve-path- possibly passed ...-  first- 17: normally: action-total- [0 file-  rt �w- 60 jump-most libraries setter98 [ background for 080 5 30 ... RT for 25/5 A depiction).welcome. lightweight5 standard-users Stream implementation assistant-in 47-23- 30 23-ami8 Issue...1001 Denis midfield & 4t-53r:42- 2152 5g-bui-  and User-125, 0- 40. 1 12 side canonical and disabled: 'bru05-665 owner-0x100...w69-28-5- 58, r50 &in ...w: [start entered:0-po- [5w- **49a0- included and 06 ...utta- non-details and demands in the error-w1406 and 06 ma any6 wait &0:-87gen Sample Natural Sample music on recorded for 0:  running ` etc86 guy-the 44 ...p Wanted on this claim-search-below 0) contains ...- $
            ...- good or own current_state-ab87-364 processed_daily preprocess0 trouble converts to run... Twitter:  Col- please- mounting 28-2d b-t-ass-force-5 1 and both user:4 ... record:58-28-4  will active_action. the following 54 wait for 85 ... thread on:87 red 29-93:  6:  Call 15 min act with this work-b01: [0, \$-2 per-w30-left-t work on- closed 29ret-on its multiply- Subsubject- of files in other posts on  register via Projects &bad- Leave on-the-Q60Wss-1350 +46:07/precual@59- 2406-5-in0.480:-rtax2':-/<:25  [re19748 ... 69 SHA- note that-the solution1 8 hum in the �-151-related-in-place-140- dev...96-0 -template ban on compile onurd and                                      ...ri-Pred0... 26: button 98 for leading has  page known- Ne some 24 and 45- accordingly and reason-25-500 personal makes  wrong by multiple60/\xaa80 appears &-3u|59 version ...240:1 19705-ber"

32 per-delta I: and  29:1-0-76- 18- 23-3-r ...- 16 4:-29018-3-255: via proxy and 22-10-12- {16- 15.7- of- threading- this 89-  t0+breat-wi,  1-5_2  Starting for 5-58-11. pass-d_70-https great as ... by ...-on-test1-35-4d ...  2:0-4443+58:60-un-200-000 difficulty/ the 26-1-t-23-200-84-49:87 3- sync-6, 15-os-15-can instead-201/58-0 and_18 ...) 1-  [0- 49 See 7: 15-option-14-0-1, 0x-1....3:0:25-21 warning alternate which-12- consolidated run-79-16-1 8-clean- new-..._45-2-1*...:5 for-75-11-2:45-1 meta-sum:63-5er...29:68_flit-58:created21-3115-7.


45-b0o:9-f/v-59 bron-1...] 21-ital1-packet empty Occ5-11-9_05- some&ng [0:111cre-over_88: the 224-21sur-12-18-0:84 1 associated Bagswer [29: [...] 10 ->-Line-03- ... behold tap in pal-runs and: random 29 and- onion68 Ful-7x79 pending followed-to-13-can everything 724-29-0-7-25-69 ... 11-──────── and ... sumed 2-7-*-witz55-25 ...59i86 in 62 own 64dia-00048 and some25-29 males to less single24-29+84823a version bos it of version29932 and rod96...55 Pavel wiub 854:1 in type the 6 with3),7- branch [sequ29-ver-inaver.2] that 45-ri, which24 or similar to enable and 70-20 can include39-45 &sy9. 1 ball 58 19925-ci-2 marked ... 0-5 84...-10-platform -i 75 to ...- asping- 78-07 ...-18 5 with:06- bob-base85 & 5 -7-87-{3-case-6 2, attempt upon-66-derged for  welw not in ...-21-0-narc-onster &-st-hailiga-25 to be cli9-b: & ‴ show-23 or-60786-8- news contains 30:0

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-09-07
**Repository:** [github/copilot-cli](https://github.com/github/copilot-cli)

---

## 📌 Today's Highlights

The community is reporting a cluster of **regressions introduced in CLI 1.0.82**: WSL2 users see ~31 GB RSS and 57% CPU under load (#4694), BYOK users are losing prompt caching and silently paying ~5x more per turn (#4720), and several BYOK sessions are dropping events after `max_output_tokens` truncation (#4733). Several **ACP-mode** issues (#4537, #4555, #4743) describe the agent auto-approving tool calls and aborting background sub-agents, breaking integrations built on the Agent Client Protocol.

---

## 🚀 Releases

*No new releases in the last 24 hours.*

---

## 🔥 Hot Issues

1. **[#4694 — WSL2: 1.0.82 consumes ~31 GB RSS and ~57% CPU](https://github.com/github/copilot-cli/issues/4694)** *(OPEN, area:platform-linux)*
   A long-running session on WSL2 with Claude Opus 5 / High Effort hit ~47% context usage and ballooned to 31 GB RSS at ~57% CPU. Clear performance regression in 1.0.82; matter-of-urgency given enterprise WSL adoption.

2. **[#4720 — BYOK silently disables prompt caching (~5x cost)](https://github.com/github/copilot-cli/issues/4720)** *(OPEN, area:networking, area:models)*
   Providers report `cached_tokens=0` and `cache_creation_tokens=0` in BYOK mode after upgrading to 1.0.82. Cost-impacting regression — every turn re-sends the full growing context.

3. **[#4537 — ACP mode auto-approves tool calls (regression of #845)](https://github.com/github/copilot-cli/issues/4537)** *(OPEN, 👍 2)*
   Since 1.0.81-1, `--acp` no longer sends `session/request_permission`; shell commands, file edits, and deletions run unattended. A **security regression** for ACP integrations; clients have no chance to gate tool calls.

4. **[#4695 — MCP OAuth tokens for HTTP servers not reliably reused](https://github.com/github/copilot-cli/issues/4695)** *(OPEN, area:authentication, area:mcp)*
   Cache-key hash mismatches cause repeated PKCE re-auth flows for HTTP MCP servers. Frustrating for users who expect OAuth sessions to persist across CLI runs.

5. **[#4555 — ACP `session/prompt` aborts the session and cancels background sub-agents](https://github.com/github/copilot-cli/issues/4555)** *(OPEN, area:sessions, area:agents)*
   The ACP handler calls `session.abort()` as its first action, killing all `mode=background` `task` tool sub-agents. Inconsistent with interactive TUI behavior.

6. **[#4527 — `copilot -p` fails with 401 on GHEC data residency (1.0.81-1)](https://github.com/github/copilot-cli/issues/4527)** *(CLOSED, 👍 4)*
   Non-interactive prompt mode hit `api.githubcopilot.com` instead of the tenant endpoint (`<tenant>.ghe.com`), while interactive mode worked. High-impact for GHEC DR customers; closed after fix.

7. **[#4733 — Events lost when `max_output_tokens` is hit (BYOK)](https://github.com/github/copilot-cli/issues/4733)** *(OPEN, area:sessions)*
   When a provider truncates at the token ceiling, both the current response and the subsequent "continue" request are dropped silently. Affects BYOK users with `max_output_tokens=65536`.

8. **[#4734 — "Worktree missing" on all project sessions after 2.98.0 / 1.1.15](https://github.com/github/copilot-cli/issues/4734)** *(OPEN, area:sessions)*
   Every worktree-backed session reports missing post-upgrade; affects both existing and new sessions. Broad blast radius for desktop + runtime users.

9. **[#4735 — Assistant text reclassified as reasoning, hidden from the user](https://github.com/github/copilot-cli/issues/4735)** *(OPEN, area:terminal-rendering)*
   A multi-paragraph user-facing block following a reasoning trace is silently folded into the collapsed "Thought for Ns" region when a tool call follows. UX/visibility bug.

10. **[#4741 — HydraFusion stalls after accepting an Astra plan](https://github.com/github/copilot-cli/issues/4741)** *(CLOSED)*
    With GPT-6 Astra as the plan-mode model and HydraFusion as the session model, accepting a plan produced no visible implementation. Multi-model orchestration edge case.

---

## 🔧 Key PR Progress

> **Note:** Only **1 PR** was updated in the last 24 hours, well short of the usual cadence.

1. **[#4739 — docs: propose terminal-owned macOS notifications](https://github.com/github/copilot-cli/pull/4739)** *(OPEN)*
   Reference proposal (not a code change to the shipped CLI) documenting the macOS notification click problem and shipping a portable, MIT-licensed terminal notification example with regression tests. Worth reading for downstream maintainers building notification flows.

---

## 📈 Feature Request Trends

- **Editor-grade input/keyboard handling.** Long-standing #2644 (Shift+Arrow, Ctrl+A selection) and fresh #4736 (Ctrl+E accepts inline suggestions) both push toward GNU Readline / Emacs-style terminal UX parity.
- **Trustworthy reasoning vs. assistant text separation.** #4735 highlights that users want a strict, reliable boundary between hidden "Thought" regions and visible assistant prose.
- **Form / elicitation UX.** #4738 (Enter prematurely submits `ask_user` forms) points to the broader need for autosave/drafting in interactive forms.
- **Background-task and ACP ergonomics.** #4555, #4743, and #4537 collectively argue for a stable, observable idle/end-of-turn signal in ACP, instead of implicit aborts.
- **Graceful token-budget behavior.** #4733 requests preserved continuity (continuation handoff) when output is truncated — increasingly relevant as models hit ceilings.

---

## 😤 Developer Pain Points

- **1.0.82 regressions across multiple fronts.** Memory blow-up on WSL (#4694), lost prompt caching under BYOK (#4720), dropped events after token truncation (#4733), and ACP permission/session changes (#4537, #4555) — release quality concerns are dominating today's reports.
- **BYOK is the weak spot.** Caching disabled (#4720), events lost on truncation (#4733), and (in #4706) intermittent malformed tool-call markup that silently no-ops — BYOK users are paying more and getting less reliability.
- **Enterprise / data-residency friction.** #4527 (closed) and #4692 (open) both show that enterprise defaults and tenant endpoints are still fragile in non-interactive and CLI contexts.
- **Desktop ↔ runtime coupling.** #4734 and #4742 (workspace/worktree and second Local session) suggest the 2.98.0 / 1.1.15 auto-upgrade introduced a single bad release that broke multiple downstream workflows at once.
- **Authentication caching.** #4695 is a recurring class — MCP OAuth re-auth on every run is a top complaint from integrators who assumed single-sign-on continuity.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-09-07

## 1. Today's Highlights
Community activity centers on a strong push for **remote-multi-device session continuity**, with the long-running feature request #1282 (32 👍, 13 comments) still trending as the most-wanted capability. Alongside this, a cluster of closed bug reports — Windows/Zed launch failures, frequent auth failures on Linux, and a shell prompt regression that dropped cwd/git branch context — indicates the team recently addressed several stability and UX regressions. The sole open PR targets a subtle data-integrity bug in the Kosong tool-calling path involving double-encoded JSON arguments.

## 2. Releases
**No new releases in the last 24 hours.** (No release notes to summarize at this time.)

## 3. Hot Issues
*Note: The 24-hour dataset contains 5 issues; all are covered below.*

- **#1282 — [OPEN] Feature Request: Remote Control – Continue local sessions from any device** — *Author: CatKang* — 👍 32 · 💬 13
  The highest-signal issue this cycle. Users want to resume an active local Kimi Code CLI session from a phone, tablet, or browser to preserve workflow continuity when stepping away from their desk. Its sustained traction (open since February) makes it the clearest candidate on the roadmap.
  🔗 https://github.com/MoonshotAI/kimi-cli/issues/1282

- **#2252 — [CLOSED] Add `/goal` command; allow coding plan import into Codex** — *Author: DuskLin* — 👍 2 · 💬 9
  Requests adoption of a `/goal`-style directive (mirroring Codex, which Claude Code followed at v138) and cross-tool interoperability so Kimi coding plans can be used inside Codex. The closing status suggests the request was resolved or triaged, but cross-platform plan portability remains a theme.
  🔗 https://github.com/MoonshotAI/kimi-cli/issues/2252

- **#1284 — [CLOSED] Bug: Does not launch in Zed IDE ACP panel on Windows** — *Author: prashanth057* — 💬 1
  Windows 10 (x64) users report the CLI failing to launch inside Zed's Agent/ACP panel on the latest Zed build. Now closed, indicating a fix or workaround was delivered.
  🔗 https://github.com/MoonshotAI/kimi-cli/issues/1284

- **#1350 — [CLOSED] Bug: Frequent "Authorization failed, please check your login status"** — *Author: dapeng1162* — 💬 0
  On Debian 12 with version 1.17.0, `/login` sessions repeatedly drop with authorization errors. Closed without comments — possibly a silent fix, but recurring auth reliability is clearly a hot-button area for Linux users.
  🔗 https://github.com/MoonshotAI/kimi-cli/issues/1350

- **#1349 — [CLOSED] Bug: Shell prompt no longer shows cwd/git branch; request configurable display** — *Author: Sirfetch-d* — 💬 0
  Recent versions regressed the interactive prompt to bare symbols (`✨ / 💫 / $`), removing working-directory and git-branch context that developers rely on to verify repo state mid-session. The request for a configurable prompt display was closed this cycle.
  🔗 https://github.com/MoonshotAI/kimi-cli/issues/1349

## 4. Key PR Progress
*Note: Only 1 PR was updated in the last 24 hours.*

- **#2513 — [OPEN] fix(kosong): recursively decode double-encoded tool-call arguments** — *Author: nitishagar* — Updated: 2026-09-06
  Fixes a Pydantic validation failure (`Input should be a valid list`) caused by the Moonshot API returning `function.arguments` with nested arrays/objects as JSON strings (double-encoding). A single `json.loads` leaves values like `todos` as strings; the fix adds a shared `decode_tool_arguments` helper that recursively decodes before validation. Important for anyone hitting structured-output failures in Kosong agent workflows.
  🔗 https://github.com/MoonshotAI/kimi-cli/pull/2513

## 5. Feature Request Trends
Aggregating all issue signals, the most requested directions are:

- **Session portability / remote control (#1282)** — Continuing an active session from phone, tablet, or browser is the dominant ask, implying users treat the CLI as a persistent "agent workspace" they want to carry across devices.
- **Goal-oriented planning commands (#2252)** — Adoption of a `/goal` (or similar) directive to frame multi-step tasks, mirroring Codex/Claude Code ergonomics.
- **Ecosystem interoperability (#2252)** — A wish for Kimi "coding plan" artifacts to be importable into Codex, reflecting demand to mix tools without lock-in of planning outputs.
- **Configurable interface output (#1349)** — The prompt request hints at broader desire for user-controlled display elements (status lines, context hints) rather than fixed decorations.

## 6. Developer Pain Points
Recurring frustrations visible in this dataset:

- **Authentication reliability (#1350)** — Repeated `Authorization failed` drops on Linux; login-state stability is the top reliability complaint.
- **Windows/IDE integration gaps (#1284)** — Launch failures inside Zed's ACP panel highlight that third-party IDE embedding is still a rough edge on Windows.
- **Context-loss regressions (#1349)** — The shell prompt losing cwd/git-branch info erodes developer confidence during interactive work; regressions touching visible workflow state are particularly disruptive.
- **Data-decoding edge cases in tool calls (#2513)** — Double-encoded JSON arguments producing silent validation failures reflects API/parser mismatch friction that can stall agent runs unexpectedly.

---
*Data window: Issues & PRs updated 2026-09-06 → 2026-09-07, sourced from [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli).*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-07

---

## 1. Today's Highlights

No new releases shipped in the past 24 hours, but the community was highly active across issues and pull requests. Rate-limiting problems on the Go subscription tier dominated complaints, with multiple users reporting persistent HTTP 429 errors despite low usage. On the contribution side, several new PRs target performance (bootstrap refetch elimination), plugin extensibility (`tool.snapshot` hook), and API payload optimization (`/provider` endpoint).

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|--------------------|
| 1 | [#4283 — Copy To Clipboard not working](https://github.com/anomalyco/opencode/issues/4283) | Basic text selection→clipboard is broken; affects all daily users on v1.0.62+. | 129 comments, 121 👍 — the single most-upvoted open issue, open since Nov 2025. |
| 2 | [#47613 — Go subscription: persistent HTTP 429 (~12h retry-after) despite low usage](https://github.com/anomalyco/opencode/issues/47613) | Paying Go tier users locked out for ~3 days; retry-after keeps resetting. | 7 comments, rapidly growing; echoes broader rate-limit complaints. |
| 3 | [#7006 — `permission.ask` plugin hook defined but never triggered](https://github.com/anomalyco/opencode/issues/7006) | The Permissions system (from PR #6319) has a hook that simply doesn't fire, blocking plugin auto-approvals. | 16 comments, 25 👍 — high signal from plugin developers. |
| 4 | [#45278 — Payment declined after 3 months with valid card](https://github.com/anomalyco/opencode/issues/45278) | Subscription renewal failures erode trust; bank confirmed no issue on their side. | 12 comments; likely a billing-provider-side problem. |
| 5 | [#32202 — Skill duplicate roots change `available_skills` across restarts](https://github.com/anomalyco/opencode/issues/32202) | Non-deterministic skill resolution means the same config can produce different agent capabilities on each launch. | 8 comments; affects reliability of skill-based workflows. |
| 6 | [#46628 — MCP tool schemas with root-level `anyOf`/`oneOf`/`allOf` cause Anthropic 400s](https://github.com/anomalyco/opencode/issues/46628) | Any MCP server using composition keywords at the schema root silently breaks all Anthropic requests. | 4 comments; critical for the MCP ecosystem compatibility story. |
| 7 | [#44790 — Remote MCP OAuth ignores `resource_metadata` URL (RFC 9728)](https://github.com/anomalyco/opencode/issues/44790) | Origin-only lookup breaks AWS Bedrock AgentCore and any OAuth MCP server that publishes metadata off-root. | 3 comments; important for enterprise MCP adoption. |
| 8 | [#42306 — TUI main thread burns ~100% CPU continuously redrawing spinner](https://github.com/anomalyco/opencode/issues/42306) | A spinning TUI with no active output consumes a full core — battery and thermal nightmare for laptop users. | 2 comments but confirmed via `strace`; likely affects many silently. |
| 9 | [#47652 — Sessions disappear from `/sessions` after local `.git` repo removed](https://github.com/anomalyco/opencode/issues/47652) | Removing `.git` orphans existing sessions in the DB while new ones appear under `global` — fragmented history. | 2 comments; data-integrity concern for project migration scenarios. |
| 10 | [#47634 — Console Go: constant `rate_limit_exceeded` despite usage far below quota](https://github.com/anomalyco/opencode/issues/47634) | Dashboard shows 6% 5h-quota usage but every request is rejected; retry loop makes the app unusable. | 2 comments; pairs with #47613 as a systemic rate-limit issue. |

---

## 4. Key PR Progress

| # | PR | Type | Description |
|---|-----|------|-------------|
| 1 | [#47682 — Stop bootstrap queries from being refetched right after they load](https://github.com/anomalyco/opencode/pull/47682) | Bug fix | Two independent causes (missing `staleTime` + subscription-driven invalidation) caused the app to re-fetch data immediately after bootstrap. Eliminates redundant network chatter on launch. |
| 2 | [#47680 — Hide tools per request with a `tool.snapshot` plugin hook](https://github.com/anomalyco/opencode/pull/47680) | Feature | Adds a per-request plugin hook so tools can be conditionally hidden based on session/agent context — key for per-session tool availability without deregistering. |
| 3 | [#47678 — Let `/provider` return only connected providers](https://github.com/anomalyco/opencode/pull/47678) | Feature / Perf | Current `GET /provider` builds the full models.dev catalog (~4 KB JSON). This PR returns only connected providers, dramatically shrinking the API payload. |
| 4 | [#40921 — Broadcast connection updates to every location](https://github.com/anomalyco/opencode/pull/40921) | Core fix | Connecting/disconnecting an integration only refreshed the requesting location's provider catalog; other active locations went stale for up to 60 min. Now broadcasts to all. |
| 5 | [#40920 — Import credentials from previous channel database](https://github.com/anomalyco/opencode/pull/40920) | Migration fix | The `next`→shared-DB consolidation dropped credentials that existed only in `opencode-next.db`. This PR imports them, preventing silent auth loss. |
| 6 | [#40883 — Coordinate websearch consent through a global service](https://github.com/anomalyco/opencode/pull/40883) | Core fix | Replaces direct KV reads with a centralized `WebSearchPreference` service and semaphore — prevents race conditions when multiple Locations search concurrently. |
| 7 | [#40861 — Stop storing full patch text in session summary diffs](https://github.com/anomalyco/opencode/pull/40861) | Bug fix / Perf | `SessionSummary.summarize()` stored complete `patch` text in the DB, causing bloat. Strips it now — significant storage savings for heavy sessions. |
| 8 | [#40859 — Stream running bash output in TUI](https://github.com/anomalyco/opencode/pull/40859) | TUI fix | Previously, bash tool output appeared only after completion. Now streams incremental `metadata.output` updates into the scrollback in real time. |
| 9 | [#40935 — Clarify working copy actions (no/yes → cancel/move)](https://github.com/anomalyco/opencode/pull/40935) | UX fix | Replaces ambiguous `no`/`yes` labels on move/delete confirmations with descriptive action verbs — reduces accidental destructive operations. |
| 10 | [#40927 — Add standalone MoA (Mixture of Agents) runner](https://github.com/anomalyco/opencode/pull/40927) | Feature | Ports the verified MoA wrapper into `tools/moa/` as standalone tooling, enabling multi-model agent orchestration from within OpenCode. |

---

## 5. Feature Request Trends

- **Voice input for CLI/terminal workflows** — [#41413](https://github.com/anomalyco/opencode/issues/41413) requests a voice-input MCP server, highlighting the gap for hands-free terminal AI interaction.
- **Cross-tool agent/command discovery** — [#47650](https://github.com/anomalyco/opencode/issues/47650) asks for opt-in discovery of Claude Code `.claude/agents` and commands, pushing toward interoperability across AI dev tools.
- **New provider integrations** — [#47515](https://github.com/anomalyco/opencode/issues/47515) (Nous Research API) and [#47475](https://github.com/anomalyco/opencode/issues/47475) (documenting the existing Standard Compute provider) signal demand for broader model-provider choice.
- **Per-session/per-request tool visibility** — The `tool.snapshot` hook in PR [#47680](https://github.com/anomalyco/opencode/pull/47680) addresses a long-standing request for dynamic tool filtering without full deregistration.

---

## 6. Developer Pain Points

- **Rate-limiting is broken for paid users** — Issues [#47613](https://github.com/anomalyco/opencode/issues/47613), [#47634](https://github.com/anomalyco/opencode/issues/47634), and [#39790](https://github.com/anomalyco/opencode/issues/39790) collectively show that HTTP 429 handling is unreliable: retry-after values reset indefinitely, quotas are misreported, and fixed-window resets are retried uselessly. This is the top pain point for Go/Console subscribers.
- **Clipboard copy still broken after 10 months** — [#4283](https://github.com/anomalyco/opencode/issues/4283) (121 👍) remains unresolved; it's a basic UX regression that undermines daily usage.
- **MCP compatibility gaps** — Root-level schema composition keywords break Anthropic requests ([#46628](https://github.com/anomalyco/opencode/issues/46628)), OAuth metadata lookups ignore `resource_metadata` ([#44790](https://github.com/anomalyco/opencode/issues/44790)), and MCP servers time out unpredictably ([#47584](https://github.com/anomalyco/opencode/issues/47584)). The MCP integration story needs hardening.
- **Plugin hooks don't fire as documented** — [#7006](https://github.com/anomalyco/opencode/issues/7006) shows the Permissions API is incomplete, discouraging plugin developers from investing in the ecosystem.
- **TUI performance and noise** — 100% CPU spinner redraw ([#42306](https://github.com/anomalyco/opencode/issues/42306)) and spurious permission notifications in Auto mode ([#47545](https://github.com/anomalyco/opencode/issues/47545)) make the terminal experience feel unpolished for power users.
- **Session/data integrity fragility** — Removing `.git` orphans sessions ([#47652](https://github.com/anomalyco/opencode/issues/47652)), and subagent events misreport parent status ([#46685](https://github.com/anomalyco/opencode/issues/46685)), eroding confidence in session history.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-09-07

## Today's Highlights
The community is buzzing around **connection reliability and resilience** — from the long-running `openai-codex` TUI hang issue (#4945) to a wave of new proposals for cross-provider fallback on transport errors (#9242) and DNS resolution fixes for MagicDNS/Tailscale hosts (#9244). On the Windows front, a community megathread (#7547) is actively canvassing user pain points to guide core development priorities.

---

## Releases
No new releases in the last 24 hours.

---

## Hot Issues

Here are 10 noteworthy issues from the past 24 hours, with community context:

- **[#4945 — openai-codex Connection Reliability Issues](https://github.com/earendil-works/pi/issues/4945)** — The most-discussed issue on the board (76 comments, 32 👍). The interactive TUI frequently hangs on "Working..." with no streamed text, no tool call, and no visible error when using `openai-codex` / `gpt-5.5`. Recovery requires pressing Escape, which discards the turn. The high engagement signals a critical stability problem for Codex users.

- **[#7547 — How do you use Pi on Windows? What issues are you seeing?](https://github.com/earendil-works/pi/issues/7547)** — A community-driven Windows megathread (55 comments). The author notes there are too many ways to run Pi on Windows and wants to focus core effort on the best paths. Ongoing discussion likely shaping the Windows roadmap.

- **[#9244 — Node fetch ENOTFOUND for MagicDNS-style hosts that resolve via system DNS](https://github.com/earendil-works/pi/issues/9244)** — Outbound requests fail with `getaddrinfo ENOTFOUND` for hostnames that resolve through Tailscale/system DNS. Root cause: undici's dispatcher doesn't pin `connect.lookup` to Node's `dns.lookup`. Highly relevant for developers using Pi with Tailscale-based infrastructure.

- **[#9209 — GitHub Copilot GPT-6 Astra is routed to unsupported Chat Completions endpoint](https://github.com/earendil-works/pi/issues/9209)** — Pi routes `github-copilot/gpt-6-astra` to `/chat/completions`, which Copilot rejects with a 400 error. The model requires the Responses API. A fix PR (#9253) was opened the same day — swift community turnaround.

- **[#9229 — Windows: shell_path config is ignored, always prefer WSL bash even when WSL disabled](https://github.com/earendil-works/pi/issues/9229)** — On Windows 11 with the WSL feature disabled but the `wsl.exe` binary still present, Pi ignores the `shell_path` setting and prefers WSL bash. A concrete, reproducible bug affecting Windows users.

- **[#9242 — Cross-provider fallback chain on transport/unreachable errors](https://github.com/earendil-works/pi/issues/9242)** — Proposal for an opt-in provider/model fallback chain that hops to another configured provider on transport-level failures (timeout, DNS, connection refused). Addresses a real gap — existing retry logic only retries the same provider. Multiple PRs (#9248–#9251) were filed within hours.

- **[#9246 — anthropic-messages: spend the unused 4th cache breakpoint on a stable conversation checkpoint](https://github.com/earendil-works/pi/issues/9246)** — The Anthropic provider marks only 3 of 4 available cache breakpoints. This asks for a stable conversation checkpoint on the 4th to improve cache efficiency. A niche but technically sharp optimization.

- **[#9240 — Regular TUI: line changes above viewport trigger destructive full redraw, scroll position lost](https://github.com/earendil-works/pi/issues/9240)** — During streaming, any change above the viewport (markdown reflow, widget updates) causes a full `ESC[3J` redraw that jumps the terminal to the top of the session. Disruptive for long sessions with active tool calls.

- **[#8617 — Codex: Use file references for image-heavy tool results](https://github.com/earendil-works/pi/issues/8617)** — Proposes decoupling image storage from provider payloads — keep bytes locally and materialize outbound images as ChatGPT `file_id` references instead of replaying base64. The author has a local prototype ready to contribute.

- **[#8834 — Opt-in package namespace (pi.namespace) for skills and prompt templates](https://github.com/earendil-works/pi/issues/8834)** — Request for an opt-in namespace field that unifies how name-keyed resources (skills, prompt templates) resolve to `<namespace>:<name>`, loosening naming conflicts across packages.

---

## Key PR Progress

Ten important pull requests, including several rapid iterations on the same fixes:

- **[#9253 — fix(ai): route Copilot GPT models through Responses (fixes astra)](https://github.com/earendil-works/pi/pull/9253)** — Direct fix for #9209; routes Copilot GPT models through the Responses API, which is the only supported endpoint for GPT-6 Astra. Future-proofed, as older GPT-4 models are gone from the GitHub catalog.

- **[#9252 / #9250 — fix(coding-agent): pin undici connect lookup to system dns.lookup](https://github.com/earendil-works/pi/pull/9252)** — Two nearly identical PRs by RaviTharuma addressing #9244, pinning undici's DNS lookup to Node's `dns.lookup` so MagicDNS/split-horizon hostnames resolve correctly. Duplicate attempts suggest quick iteration or race between branches.

- **[#9251 / #9249 / #9248 — feat(coding-agent): hop to a fallback provider on transport errors](https://github.com/earendil-works/pi/pull/9251)** — Three iterations of the same feature implementing #9242: an optional cross-provider fallback hop so a session continues on a configured fallback when the active provider is unreachable. The multiple revisions indicate active refinement.

- **[#9080 — feat(tui): add jump-to-latest control](https://github.com/earendil-works/pi/pull/9080)** — Adds a TUI control to jump back to the latest message. Includes a demo video showing static and interactive cases. A welcome UX improvement for long sessions.

- **[#9233 — fix(coding-agent): resolve model auth live instead of from startup snapshot](https://github.com/earendil-works/pi/pull/9233)** — Fixes a race condition where model resolution gates on `hasConfiguredAuth()` reading an unsettled availability snapshot populated by an unawaited background refresh. Prevents false "no auth configured" errors at startup.

- **[#7610 — feat(ai): add LLM Gateway and LLM Gateway DevPass providers](https://github.com/earendil-works/pi/pull/7610)** — Adds LLM Gateway (an OpenRouter-style router) as a built-in `openai-completions` provider. Contribution on behalf of the LLM Gateway team — expands the provider ecosystem.

- **[#9137 — feat(coding-agent): add Nix flake](https://github.com/earendil-works/pi/pull/9137)** — WIP by mitsuhiko adding a Nix flake for Pi — relevant for NixOS users who want reproducible installs.

- **[#9224 — fix(ai): clamp OpenRouter :free maxTokens to base model](https://github.com/earendil-works/pi/pull/9224)** — OpenRouter `:free` catalog entries often advertise inflated maxTokens vs. the base model. This clamps the request to the base model's real limit, preventing 400s (e.g., GMICloud rejecting >524k tokens). Practical fix for free-tier users.

- **[#9222 — fix(coding-agent): reject reload during active session operations](https://github.com/earendil-works/pi/pull/9222)** — Prevents a race where an extension command reloads while a tool is running; the tool's wrapper then accesses the invalidated runner, causing an error result to be sent to the model. Also covers direct `AgentSession.reload()` calls.

- **[#9219 — fix(coding-agent): preserve host UI prototype methods and Proxy traps in wrapUIPromptContext](https://github.com/earendil-works/pi/pull/9219)** — Fixes object-spread wrapping that only copied own enumerable properties, breaking embedder-provided UI contexts implemented with prototype methods or Proxy traps. Correctness fix for the extension system.

---

## Feature Request Trends

Several clear directions emerged from issues this week:

- **Provider resilience and fallback** — Dominant theme. Requests for bounded agent retry backoff (#8826), cross-provider fallback hops (#9242), and exposing machine-readable terminal failure classifications (#9247). The community wants Pi to survive transient outages gracefully.

- **Expanded extension API surface** — Multiple requests to let extensions do more: set TUI mode at runtime and mount as a layout column (#9238), override built-in UI strings (#9254), access the underlying ModelRuntime (#8791), get acknowledged idempotent user-turn delivery (#9236), and per-call confirmation for state-changing custom tools (#9228).

- **Provider/model support additions** — gpt-6-astra support (#9133), Meta provider with Muse OAuth (PR #9096), LLM Gateway providers (PR #7610). The ecosystem is actively expanding.

- **TUI incremental improvements** — jump-to-latest control (PR #9080), incremental scrolling instead of jumping to top (#5786), and consistent keybinding paradigms across menus (#9199). Quality-of-life polish remains in demand.

---

## Developer Pain Points

Recurring frustrations from the community this week:

- **`openai-codex` instability** — The #4945 hang with no error output and forced Escape-key recovery is the single loudest complaint. The model appears to work, then silently stalls with no diagnostics — eroding trust for heavy Codex users.

- **Windows friction** — Two distinct angles: the breadth of Windows configurations makes support diffuse (#7547), and concrete bugs like `shell_path` being ignored when WSL exists but is disabled (#9229) create configuration dead-ends. Shift+Enter behaving like Enter on Windows Terminal (#7175) adds to the paper cuts.

- **DNS resolution issues** — MagicDNS/Tailscale-style hostnames failing inside Node's fetch (#9244) blocks developers whose infrastructure relies on split-horizon DNS. The community appreciated fast fixes (PR #9250/#9252) but the underlying issue points to undici defaults not matching Node's own resolver.

- **TUI scroll/redraw glitches** — Losing scroll position mid-task (#9240) and full-screen image rendering errors (#8306) break concentration during long agent runs. Full redraws triggered by above-viewport changes are particularly jarring.

- **Auth/config ordering surprises** — The API key resolution order between `--api-key` and `auth.json` (#9245) producing unexpected behavior, plus startup-time auth snapshots that race with model resolution (PR #9233), both indicate config state is not always predictable.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-09-07

---

## 1. Today's Highlights

The Web Shell took center stage today with the **v0.23.1-preview.1** release shipping dynamic workflow visualization (#10594) and session workflow derivation, while concurrent PRs tackled mobile jank, transcript compression, and historical viewport navigation. Security surfaced as a cross-cutting concern: two P1 bugs expose skill `PreToolUse` hooks failing after `--continue` (#11180) and on `/<skill-name>` invocation (#11067), and telemetry was found uploading unredacted shell command lines to RUM (#11198). CI reliability remains strained, with the v0.23.1-preview.1 release itself failing integration tests (#11185).

---

## 2. Releases

**v0.23.1-preview.1** (also reflected in two nightly builds)
- **feat(web-shell): visualize and manage dynamic workflow runs** — PR [#10594](https://github.com/QwenLM/qwen-code/pull/10594) by @qqqys
- **perf(web-shell): derive the session workflow project** — improves session-to-workflow resolution

Nightly builds `v0.23.0-nightly.20260906` and `v0.23.0-nightly.20260905` carry the same changes.

---

## 3. Hot Issues

1. **[#8662](https://github.com/QwenLM/qwen-code/issues/8662) — Migrate TUI rendering layer from ink to OpenTUI** *(30 comments)*
   The highest-comment issue in the window. The ~1037-line ink patch is producing flicker, race conditions, and structural problems that can't be fixed within ink. Community momentum is building behind an OpenTUI migration; this is the tracking epic.

2. **[#11091](https://github.com/QwenLM/qwen-code/issues/11091) — Mermaid (~6 MB) still flattened into exported transcript renderer** *(7 comments, closed)*
   Even after #9812 stopped inlining the full renderer, mermaid's ~6 MB bundle still bloats every exported HTML. Addressed in conjunction with #11031; closed after the fix path was confirmed.

3. **[#11031](https://github.com/QwenLM/qwen-code/issues/11031) — Stop embedding Web Shell runtime in every HTML export** *(6 comments, closed)*
   Exported files were ~19.5 MB for an empty session because the full React + Web Shell dependency graph was copied into each file. A high-impact P1 fix that dramatically shrinks export output.

4. **[#11180](https://github.com/QwenLM/qwen-code/issues/11180) — PreToolUse hook stops enforcing after `--continue`** *(3 comments)*
   P1 security: a skill's safety-gate hook is ignored when a session is resumed with `--continue`, while the skill's instructions remain active. The hook thinks it's guarding; it isn't.

5. **[#11198](https://github.com/QwenLM/qwen-code/issues/11198) — Telemetry uploads raw tool-error text (including shell commands) without redaction** *(2 comments)*
   P1 data-privacy: default-on usage statistics send unredacted shell command lines from tool errors to the RUM endpoint. Wider in scope than the single field flagged in #10916.

6. **[#11067](https://github.com/QwenLM/qwen-code/issues/11067) — PreToolUse hook doesn't run when skill is started with `/<skill-name>`** *(3 comments, closed)*
   Another P1 skill-hook bypass: the slash-command dispatch path skips hook registration entirely, so safety gates are inert for the most common invocation pattern.

7. **[#6181](https://github.com/QwenLM/qwen-code/issues/6181) — Mobile session switching is janky** *(3 comments)*
   P1 perf: four layers of cost (sidebar polling, uncompressed full-history load, O(transcript)-per-frame renders, sync transcript rebuild) stack up during the 200ms drawer-close animation, freezing the UI for seconds on large sessions.

8. **[#11146](https://github.com/QwenLM/qwen-code/issues/11146) — Pre-aborted tool requests wait behind an unrelated active batch** *(4 comments)*
   CoreToolScheduler can leave an already-cancelled request queued behind an in-flight batch, adding latency and wasted scheduler slots for no reason.

9. **[#11162](https://github.com/QwenLM/qwen-code/issues/11162) — Queued tool cancellation skips completion cleanup** *(3 comments)*
   When a queued tool request is rejected after its abort signal fires, the caller's completion handler never runs — orphaning ownership registrations and leaving batch state inconsistent.

10. **[#11215](https://github.com/QwenLM/qwen-code/issues/11215) — Statusless SSE throttling errors skip rate-limit retry** *(2 comments)*
    Anthropic-compatible endpoints can return HTTP 200 streams with throttling errors lacking a numeric status code; Qwen Code treats them as fatal instead of retryable, killing the turn unnecessarily.

---

## 4. Key PR Progress

1. **[#11220](https://github.com/QwenLM/qwen-code/pull/11220) — perf(web-shell): gzip serve responses for large transcript loads**
   Compresses daemon transcript API responses with gzip, directly tackling the uncompressed full-history load identified in #6181. A low-risk, high-payoff bandwidth win.

2. **[#11208](https://github.com/QwenLM/qwen-code/pull/11208) — feat(web-shell): add bounded historical transcript viewport**
   Phase 2B of session-wide turn navigation: read-only historical windows with gap recovery, bidirectional pagination, and live-tail return. Major UX improvement for long conversations.

3. **[#11207](https://github.com/QwenLM/qwen-code/pull/11207) — feat(serve): allow concurrent standalone daemons with session fencing**
   Replaces the global Conversations singleton with a pre-leased single-writer model, enabling multiple daemons to share data while maintaining the mandatory lease from #10924.

4. **[#11172](https://github.com/QwenLM/qwen-code/pull/11172) — feat(serve): one-command remote start with generated token, same-origin shell access, and pairing QR**
   Non-loopback `qwen serve` now auto-generates an ephemeral 128-bit bearer token, prints a pairing QR, and bootstraps in one command — removing the previous hard requirement for manual token setup.

5. **[#11171](https://github.com/QwenLM/qwen-code/pull/11171) — fix(vscode): give the edit back when a permission diff is closed**
   Closing a permission diff by hand previously left the user stuck: they had to approve or reject an edit they could no longer see. This restores the edit tab on diff close.

6. **[#10938](https://github.com/QwenLM/qwen-code/pull/10938) — feat(web-shell): make Session Workflow dependencies navigable and quiet its chrome**
   Design pass over the plan DAG and inspector: steps lead with identity instead of status, dependency edges are navigable, and chrome noise is reduced. Closes post-#8583 gaps.

7. **[#11090](https://github.com/QwenLM/qwen-code/pull/11090) — feat(ipc): let a user-minted controller token drive a session without per-message review**
   Adds a controller token class that bypasses the inbound gate's review requirement for legitimate programmatic senders that currently have no review class to assert.

8. **[#10347](https://github.com/QwenLM/qwen-code/pull/10347) — feat(core): auto-retry transient network errors (EOF) where Ctrl+Y is unavailable**
   Classifies wrapped low-level network failures (e.g., `400 network error … EOF`) as retryable transport errors, extending bounded auto-retry to channels where manual Ctrl+Y retry isn't possible.

9. **[#11134](https://github.com/QwenLM/qwen-code/pull/11134) — fix(ci): retry the transient all-green macOS E2E shard death once**
   Adds a budget-gated single retry to the macOS E2E shard, matching the existing Linux `sandbox:none` retry from #10572. Targets the flaky-shard class that reports green then dies.

10. **[#8927](https://github.com/QwenLM/qwen-code/pull/8927) — feat(channels): bound session lifetime with sessionRotation**
    Per-channel `sessionRotation` option bounds how long a route reuses the same session, supporting `maxTurns` and `maxDuration`. Next message past the bound starts a fresh session.

---

## 5. Feature Request Trends

- **Web Shell performance & navigation** — The dominant theme. Mobile jank (#6181), transcript compression (#11220), historical viewport (#11208), and workflow visualization (#10594) all point to the Web Shell maturing from functional to fluid.
- **Security & privacy hardening** — Telemetry redaction (#11198), hook enforcement after `--continue` (#11180) and on slash-commands (#11067), content-filter gaps (#11205, #10974), and controller token access control (#11090) reveal a cluster of security gaps the community is actively surfacing.
- **IDE parity** — Restoring VS Code message edit/rewind (#9911), ACP message queuing during active turns (#8542), and permission-diff UX (#11171) show users want the IDE experience to match or exceed the CLI.
- **Multi-agent / Agent Team** — Stability audit follow-ups (#10247), teammate tab scrollability (#9531), and session fencing for concurrent daemons (#11207) indicate the multi-agent surface is still settling.
- **Export size optimization** — The 19.5 MB empty-session export (#11031) and residual mermaid bloat (#11091) have made export footprint a recurring priority.

---

## 6. Developer Pain Points

- **Skill hooks are unreliable** — Two P1 bugs (#11180, #11067) show that `PreToolUse` safety gates silently stop working in common scenarios (`--continue` and `/<skill-name>` invocation). Developers depending on hooks for security guardrails have no indication they're bypassed.
- **CI is fragile and slow** — Release workflows are timing out (#11109), the v0.23.1-preview.1 release itself failed integration tests (#11185), and E2E smoke tests are killed by pool contention at flat 20-minute timeouts (#11209). Flaky CI is eroding confidence in the release pipeline.
- **Export produces unusably large files** — Until #11031 landed, every HTML export embedded the full Web Shell runtime. Even after that fix, mermaid's ~6 MB bundle remains (#11091), and developers shipping shared transcripts bear the cost.
- **Error handling gaps in SSE/streaming** — Statusless throttling errors (#11215) and Anthropic SSE false-success reports (#11217) mean developers using non-OpenAI endpoints hit opaque failures with no retry. The error taxonomy doesn't cover the real-world error shapes these backends emit.
- **Tool scheduler cancellation is broken in two directions** — Pre-aborted requests queue uselessly (#11146) and cancelled completions skip cleanup (#11162), together making interactive tool orchestration less predictable and harder to debug.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (Codewhale) Community Digest — 2026-09-07

*Data source: [github.com/Hmbown/Codewhale](https://github.com/Hmbown/Codewhale) (activity over the last 24 h).*  
*Note: although the digest title references the DeepSeek TUI, all content below reflects the Codewhale repository as provided.*

## 1. Today's Highlights
No release landed in the past 24 hours, but the project is deep in a hotfix-and-feature wave aimed at **0.9.13**: the team merged a large batch of quality-of-life enhancements (configurable compaction, command usage discoverability, Fleet navigation fixes, MCP tool-surface containment) alongside a long tail of **platform and reliability bugs** (Windows/macOS computer-use, flaky tests, keystroke drops). The most active thread remains [issue #5620](https://github.com/Hmbown/Codewhale/issues/5620) on transient context-pressure warnings — the community's clearest signal that silent context degradation is a top concern.

## 2. Releases
None in the last 24 hours.

## 3. Hot Issues
*(10 noteworthy, across categories)*

1. **[#5620 – Context pressure warning is transient; agent does not proactively react](https://github.com/Hmbown/Codewhale/issues/5620)** · 12 comments
   A safety signal that appears and disappears without the agent acting on it — no crash, but silent context degradation. Severity Medium, but the community treats it as high priority; closest to an "actionable bug" discussion today.

2. **[#5316 – EPIC-005: CodeWhale TUI Crate Decomposition (umbrella)](https://github.com/Hmbown/Codewhale/issues/5316)** · 22 comments
   The tracking issue coordinating the codebase split into portable crates and command shapes. Largest community thread — all decomposition sub-EPICs/PRs check in here.

3. **[#5929 – Parallel-execution flakes in the codewhale-tui lib suite](https://github.com/Hmbown/Codewhale/issues/5929)** · 3 comments
   Six tests fail once under load, pass in isolation and on the next full run; each flake costs a rerun or a 25-minute matrix leg. High developer-velocity pain.

4. **[#5908 – Windows computer-use: input actions report success on PowerShell failure; left_mouse_down drops the press](https://github.com/Hmbown/Codewhale/issues/5908)** · 2 comments
   The win32 backend returns `action_sent: true` even when an action never ran — three independent defects, including a missing in-process type load that silently fails.

5. **[#5923 – Windows: window_control::toggle_pin blocks the TUI thread on the host terminal message pump](https://github.com/Hmbown/Codewhale/issues/5923)** · 0 comments
   Found while fixing #5919: `SetWindowPos`/`ShowWindow` blocking the UI thread cross-process — a real freeze risk on the pin command.

6. **[#5927 – macOS computer-use: keystrokes go to frontmost app; app activation reported early](https://github.com/Hmbown/Codewhale/issues/5927)** · 0 comments
   `open_application` reports "launched" before the app is in front; during a clean-up run, `cmd+q` quit the founder's terminal — the most visceral platform bug of the batch.

7. **[#5931 – Session identity and receipt integrity failures only logged](https://github.com/Hmbown/Codewhale/issues/5931)** · 0 comments
   Engine session ID diverged from the host 14×; approval-receipt writes failed `InvalidData` 2×; turn items became unreadable after a monitor failure — all silent. The code comment itself says such divergences "should be surfaced," not logged.

8. **[#5925 – Keystrokes typed during startup are partially dropped; a mangled slash command reaches the model](https://github.com/Hmbown/Codewhale/issues/5925)** · 0 comments
   `/plugin install …` was typed and arrived as `gin install …` — leading chars consumed, and a broken command almost went to the model as a prompt. Attribution/accuracy hazard.

9. **[#5926 – MCP footer says "8 failed" when 7 servers just need a login](https://github.com/Hmbown/Codewhale/issues/5926)** · 1 comment
   OAuth servers returning 401 are lumped with genuinely failed ones; the UI names neither the state nor the next action. Misleading status signal in the always-visible footer.

10. **[#5932 – Test isolation leak: onboarding tests persist a fixture provider into the real ~/.codewhale/setup_state.json](https://github.com/Hmbown/Codewhale/issues/5932)** · 2 comments
    Guarding `CODEWHALE_CONFIG_PATH` but not `CODEWHALE_HOME` let test fixtures overwrite real user config on the founder's machine — a canonical test hygiene bug.

## 4. Key PR Progress
*(10 important pieces of work in/around merge)*

1. **[#5957 – Engine: mid-turn MCP refresh keeps the pool deferred and the active set narrow](https://github.com/Hmbown/Codewhale/pull/5957)** — closes [#5939](https://github.com/Hmbown/Codewhale/issues/5939). A completed OAuth login/401 no longer reactivates the entire MCP tool surface mid-turn.

2. **[#5965 – Compaction: operator summarizer instructions + configurable verbatim retention](https://github.com/Hmbown/Codewhale/pull/5965)** — closes [#5956](https://github.com/Hmbown/Codewhale/issues/5956). Adds user-settable `[compaction]` knobs so summarization is no longer a hard-coded, lossy constant.

3. **[#5964 – Show command usage and subcommands while typing and in /help](https://github.com/Hmbown/Codewhale/pull/5964)** — closes [#5952](https://github.com/Hmbown/Codewhale/issues/5952). Usage strings for ~70 argument-taking slash commands now surface in the composer and `/help`.

4. **[#5962 – /statusline composes the bottom chrome; ctx reads at every fullness](https://github.com/Hmbown/Codewhale/pull/5962)** — first slice of [#5950](https://github.com/Hmbown/Codewhale/issues/5950). Restores always-visible context and revives the dead `/statusline` mechanism.

5. **[#5961 – Fleet views become one back-navigable stack](https://github.com/Hmbown/Codewhale/pull/5961)** — closes [#5954](https://github.com/Hmbown/Codewhale/issues/5954). Roster/workers/saved-teams no longer trap users: `Esc` finally loses its one-way "always close everything" behavior.

6. **[#5947 – Agent tool advertises only schema roles; provider-neutral speech tool registered once](https://github.com/Hmbown/Codewhale/pull/5947)** — closes [#5940](https://github.com/Hmbown/Codewhale/issues/5940) and [#5941](https://github.com/Hmbown/Codewhale/issues/5941). Removes contradictory role names a validator rejected and a duplicated, vendor-named TTS tool.

7. **[#5963 – Make request_user_input question/option limits configurable](https://github.com/Hmbown/Codewhale/pull/5963)** — closes [#5949](https://github.com/Hmbown/Codewhale/issues/5949). The 1–3/2–4 hard caps lived in validator, JSON schema, and description; now a single configurable source.

8. **[#5936 – Retry JS-shell 200s past every cache and name the escalation](https://github.com/Hmbown/Codewhale/pull/5936)** — closes [#5904](https://github.com/Hmbown/Codewhale/issues/5904). A 200-with-empty-extraction is no longer terminal; cache-state-dependent fetch failures now get retries/escalation.

9. **[#5958 – Fleet: model filter with no matches renders a hint instead of panicking](https://github.com/Hmbown/Codewhale/pull/5958)** — closes [#5953](https://github.com/Hmbown/Codewhale/issues/5953). Fixes the `choices[0]` index-out-of-bounds crash in the setup wizard.

10. **[#5951 – Refactor: adopt command shapes in session control slice (FEAT-024)](https://github.com/Hmbown/Codewhale/pull/5951)** — port of `/relay`, `/rename`, `/resume`, `/rc`, `/title`, etc. to portable shapes, part of EPIC-005 crate decomposition.
    *(Related still-open: [#5946](https://github.com/Hmbown/Codewhale/pull/5946) — surface Fleet worker deliverables via bounded summaries; [#5966](https://github.com/Hmbown/Codewhale/pull/5966) — catalog-driven account keys with a first-class codewhale route.)*

## 5. Feature Request Trends
Distilled from the issue set:

- **Fleet as a first-class workflow** — the dominant direction: sub-agent/re-usable model shortlists per role ([#5915](https://github.com/Hmbown/Codewhale/issues/5915)), per-task model selection with cost-class profiles ([#5955](https://github.com/Hmbown/Codewhale/issues/5955)), simplified menus ([#5888](https://github.com/Hmbown/Codewhale/issues/5888)), and back-navigable Fleet views ([#5954](https://github.com/Hmbown/Codewhale/issues/5954)).
- **User-configurable internals** — recurring asks to turn hard-coded constants into knobs: compaction summarizer/retention ([#5956](https://github.com/Hmbown/Codewhale/issues/5956)), bottom-chrome/statusline layout ([#5950](https://github.com/Hmbown/Codewhale/issues/5950)), `request_user_input` limits ([#5949](https://github.com/Hmbown/Codewhale/issues/5949)), theme overlays in the picker ([#5901](https://github.com/Hmbown/Codewhale/issues/5901)).
- **Discoverability & honest status** — command usage/subcommands in the UI ([#5952](https://github.com/Hmbown/Codewhale/issues/5952)), MCP states that distinguish "needs login" from "failed" ([#5926](https://github.com/Hmbown/Codewhale/issues/5926)), and startup/connection counts that settle or explain stalls ([#5887](https://github.com/Hmbown/Codewhale/issues/5887)).
- **Surfacing integrity signals** — diverged session IDs, failed receipt writes, and lost turn items should become visible notices, not log lines ([#5931](https://github.com/Hmbown/Codewhale/issues/5931)); context warnings must trigger agent reaction ([#5620](https://github.com/Hmbown/Codewhale/issues/5620)).

## 6. Developer Pain Points

- **Platform backend correctness drag**: repeated Windows/macOS defects in window controls, input actions, and app activation ([#5923](https://github.com/Hmbown/Codewhale/issues/5923), [#5908](https://github.com/Hmbown/Codewhale/issues/5908), [#5927](https://github.com/Hmbown/Codewhale/issues/5927)) — with failures that *report success* or act on the wrong app.
- **Flaky CI under load**: parallel runs fail where isolation passes, costing long matrix reruns ([#5929](https://github.com/Hmbown/Codewhale/issues/5929)).
- **Test isolation violating real user state**: suites writing fixture providers into actual `~/.codewhale` config ([#5932](https://github.com/Hmbown/Codewhale/issues/5932)).
- **Silent / mislabeled state everywhere**: transient context warnings, stalled "20 MCP connecting" states, "failed vs needs-login" ambiguity, and integrity failures that are only logged ([#5887](https://github.com/Hmbown/Codewhale/issues/5887), [#5926](https://github.com/Hmbown/Codewhale/issues/5926), [#5931](https://github.com/Hmbown/Codewhale/issues/5931), [#5620](https://github.com/Hmbown/Codewhale/issues/5620)).
- **Tool-catalog hygiene**: duplicate registrations (42× "Overwriting existing tool: File"), contradictory role vocabularies, and vendor-named tool descriptions undermining validator/UI trust ([#5934](https://github.com/Hmbown/Codewhale/issues/5934), [#5940](https://github.com/Hmbown/Codewhale/issues/5940), [#5941](https://github.com/Hmbown/Codewhale/issues/5941)).
- **Startup/input race**: early keystrokes dropped or partially submitted as prompts ([#5925](https://github.com/Hmbown/Codewhale/issues/5925)).
- **Data-loss edge cases**: `write_file` silently converting CRLF to LF where `edit_file` preserves it ([#5909](https://github.com/Hmbown/Codewhale/issues/5909)), and snapshot/claim state getting orphaned or sticky ([#5906](https://github.com/Hmbown/Codewhale/issues/5906), [#5930](https://github.com/Hmbown/Codewhale/issues/5930)).

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

# ComfyUI Community Digest — 2026-09-07

## 1. Today's Highlights

The ComfyUI community is converging on a cluster of **VRAM/memory-regression reports** — several escalated topics (MiniMax‑H3 workflows, `comfy compiler` interactions, sparse-attention allocations) are now being actively patched, with PR #16148 pausing the compiler for long-lived sparse allocations and PR #16146 teaching `unload_all_models()` to release registered memory holders. In parallel, upstream momentum is strong: new native support for **LLaDA‑Image** (#16095), **Bernini v2** (#16019), and **Hunyuan3D 2.1 PBR painting** (#15020) landed or advanced, plus a fresh **color-space conversion node** for HDR workflows (#16135). A small wave of fixes targeting alpha-channel edge cases in core image nodes (Canny, RGB/YUV) also reached merge.

## 2. Releases

No new releases in the last 24 hours.

## 3. Hot Issues

**VRAM / memory cluster (dominant theme of the day)**

- **[#16140 · Potential Bug] VRAM usage skyrocketed after update** — by *tuolaku* — 12 comments
  Users report the latest build no longer reserves headroom, exhausting VRAM on previously stable workflows. High engagement suggests a broad-impact regression feed. [GitHub](https://github.com/Comfy-Org/ComfyUI/issues/16140)

- **[#16150 · Potential Bug] MiniMax H3 workflow VRAM regression on dev build** — by *slmonker* — 8 comments
  Reported specifically against the *development* version; correlates with recent compiler/sparse-attention changes and adds to the memory-issue cluster. [GitHub](https://github.com/Comfy-Org/ComfyUI/issues/16150)

- **[#16138 · CLOSED] MiniMax‑H3 regression: `HostBuffer.read_file_slice` CUDA OOM on ≥0.34.3** — by *foreveralai1*
  A precise bisect: works on 0.34.2, OOM on ≥0.34.3 with identical workflow & weights — a clean pointer for maintainers hunting the regression. [GitHub](https://github.com/Comfy-Org/ComfyUI/issues/16138)

- **[#16144 · CLOSED] Memory leak & OOM — comfy compiler PR conflicts with new sparse-attention PR (MiniMax H3)** — by *bhusann* — 4 comments
  Flags an interaction between two in-flight features; closed in tandem with the merging of mitigation PR #16148. Good example of community-driven triage feeding direct fixes. [GitHub](https://github.com/Comfy-Org/ComfyUI/issues/16144)

- **[#16134 · CLOSED] Comfy Compiler slows down MiniMax H3 video generation** — by *ryukbk* — 2 comments
  Counterweight to the VRAM complaints — compiler additionally hurts MiniMax H3 *performance*, not just memory. [GitHub](https://github.com/Comfy-Org/ComfyUI/issues/16134)

**Breaking changes / custom-node disruptions**

- **[#16149 · OPEN] H3 `FinalLayer` signature change breaks downstream custom nodes** — by *laoxuaichirou*
  New parameters added without defaults crash third-party sampler/cache plugins; the author explicitly requests graceful defaults or a deprecation window — a recurring pattern in core API evolution. [GitHub](https://github.com/Comfy-Org/ComfyUI/issues/16149)

- **[#16139 · OPEN] Load Image Mask Editor loses original image — saves black background with painted mask** — by *rcharrr*
  Root-caused in the bundled frontend's unified upload contract; a fix is already up (#16141). [GitHub](https://github.com/Comfy-Org/ComfyUI/issues/16139)

**Other notable**

- **[#14039 · OPEN] Qwen Image VAE Encode ignores batched images** — by *brucew4yn3rp* — 7 comments, 👍 1
  Long-running (May) issue where batched tensors are not processed correctly with the Qwen Image VAE; still open with ongoing discussion. [GitHub](https://github.com/Comfy-Org/ComfyUI/issues/14039)

- **[#13426 · OPEN] SeeThrough Generate Layers — `NotImplementedError: Cannot copy out of meta tensor`** — by *ahuahui0035-star* — 12 comments
  Persisting core bug (April) around meta-tensor device moves with `torch.nn.Module.to()`. [GitHub](https://github.com/Comfy-Org/ComfyUI/issues/13426)

- **[#15234 · OPEN, STALE] "Ridiculous" model filtering — how to disable?** — by *ghost* — 👍 1
  Complaints about unexpected filtering in the standard Load Diffusion Model picker, unresolved for over a month. [GitHub](https://github.com/Comfy-Org/ComfyUI/issues/15234)

## 4. Key PR Progress

**Model support**

- **[#16095 · OPEN] Add native LLaDA‑Image support** — by *T8mars*
  Native text-to-image / VQ-semantic generation / image editing support via checkpoint loader; a notable new-model milestone. [GitHub](https://github.com/Comfy-Org/ComfyUI/pull/16095)

- **[#16019 · OPEN] Support Bernini v2 single-file pipeline** — by *T8mars*
  Native Bernini v2 with planner + Wan-expert files, six planning/rendering tasks, dual-expert handling. [GitHub](https://github.com/Comfy-Org/ComfyUI/pull/16019)

- **[#15958 · CLOSED] MiniMax‑H3: support FastVideo VSA** — by *kijai*
  Enables the FastVideo VSA variant for MiniMax-H3 via comfy-kitchen dependency. [GitHub](https://github.com/Comfy-Org/ComfyUI/pull/15958)

- **[#15020 · OPEN] Native Hunyuan3D 2.1 PBR paint (mesh→multiview→textured GLB)** — by *jethac*
  Torch-native multiview PBR UNet, renderer/baker, and textured GLB export — major step for 3D workflows. [GitHub](https://github.com/Comfy-Org/ComfyUI/pull/15020)

**Stability / performance fixes**

- **[#16148 · CLOSED] Pause comfy compiler for long-lived sparse allocations** — by *rattus128*
  Fixes the sparse-attention memory leak (#16144) by severing rogue allocations from the compiler graph — the day's highest-impact fix. [GitHub](https://github.com/Comfy-Org/ComfyUI/pull/16148)

- **[#16146 · CLOSED] Ask registered memory holders to release from `unload_all_models`** — by *PozzettiAndrea*
  Extends model unloading to external/registered memory holders (other frameworks, sibling processes), improving memory hygiene. [GitHub](https://github.com/Comfy-Org/ComfyUI/pull/16146)

- **[#16141 · OPEN] Repair mask editor painted-masked uploads** — by *ManoharPaturi*
  Fixes #16139 (original image lost under painted mask) — root cause tied to frontend upload-contract change. [GitHub](https://github.com/Comfy-Org/ComfyUI/pull/16141)

**Feature / robustness improvements**

- **[#16135 · CLOSED] Add color space conversion node** — by *comfyanonymous* (core maintainer)
  Converts sRGB ↔ HDR(hlg) ↔ HDR PQ; explicitly does *not* fake HDR — lossless data transfer with tonemapping only when necessary. [GitHub](https://github.com/Comfy-Org/ComfyUI/pull/16135)

- **[#15721 · OPEN] Fix Porter-Duff blend modes with transparent layers** — by *tandede*
  Corrects DARKEN/LIGHTEN premultiplied-color comparisons unweighted by alpha in `PorterDuffImageComposite`. [GitHub](https://github.com/Comfy-Org/ComfyUI/pull/15721)

- **[#16152 · OPEN] [Partner nodes] consume estimated-duration headers for progress display** — by *bigcat88*
  Client half of PN-23: parses `X-Comfy-Estimated-Duration` / `-P90` / `-Source` headers for more accurate progress UI on async partner requests. [GitHub](https://github.com/Comfy-Org/ComfyUI/pull/16152)

## 5. Feature Request Trends

- **3D asset pipeline maturity** — Growing demand around Trellis2/Pixal3D (empty-mesh failures for 3D printing, #16147) and Hunyuan3D 2.x (PBR paint/unified mesh-to-GLB workflows, #15020) signals the community moving beyond "just images" toward production-grade 3D output.
- **New native model adoption** — Users repeatedly push for first-class support of new model families (LLaDA‑Image #16095, Bernini v2 #16019) rather than relying on custom-node shims.
- **HDR color management** — The introduction of a proper sRGB/HDR color-space node (#16135) aligns with requests for lossless, tone-map-aware conversions in standard workflows.
- **Memory-predictability tools** — Multiple issues (#16140, #16150, #16138) effectively request finer-grained VRAM control and more robust offload semantics for large video/3D models.

## 6. Developer Pain Points

- **VRAM regressions land silently between releases** — Users repeatedly bisect between patch versions (e.g., 0.34.2 → 0.34.3, #16138) to find memory regressions; maintainers need better CI-level VRAM profiling to catch these before release.
- **Feature PRs can conflict when merged independently** — The comfy-compiler vs. sparse-attention PR collision (#16144) shows that two "good" in-flight changes can degrade each other; suggests adding cross-PR integration testing for the video/attention paths.
- **Breaking API signature changes without defaults** — H3 `FinalLayer` change crashing downstream custom nodes (#16149) is a recurring complaint pattern; community repeatedly asks for deprecation windows and default parameters.
- **Custom-node ecosystem fragility** — Duplicate node IDs/display-names and startup route collisions (PRs #15541, #15546, #15549, #14979) remain unresolved pain; filesystem-dependent ordering ("works on my machine") is still a support headache.
- **Alpha-channel edge cases in image primitives** — Multiple fixes this cycle (Canny #15631, RGB/YUV #15632, Porter-Duff #15721) point to systemic under-testing of RGBA inputs in core image nodes.
- **Frontend changes breaking node contracts** — The mask-editor upload regression (#16139/#16141) underscores that frontend-internal refactors can silently break image-editing node behavior for end users.

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama Community Digest — 2026-09-07

## 1. Today's Highlights

The v0.34.0-rc1 release lands a headline integration enabling Ollama models inside ChatGPT Desktop (setup via the macOS app), alongside structured-output performance improvements on Apple Silicon. Meanwhile, the long-running `/metrics` feature request (#3144) finally has a concrete, opt-in Prometheus-compatible pull request (#16998) in review, signaling growing observability demand among self-hosters. Download integrity bugs remain the loudest recurring pain point, with the three-year-old `digest mismatch` issue (#941) still open at 162 comments.

## 2. Releases

**v0.34.0-rc1** (release candidate)

- **ChatGPT Desktop integration**: Ollama models can now be used directly in ChatGPT Desktop, letting users keep existing workflows while running open models; setup is available from the Ollama app on macOS.
- **Apple Silicon**: Improved structured output performance.
- Release notes are truncated in the available data; expect further detail in the final v0.34.0 notes.

## 3. Hot Issues

1. **[#3185 — License notices not distributed in release artifacts](https://github.com/ollama/ollama/issues/3185)** — OPEN. Since 2024, the community has flagged that statically linked dependencies like llama.cpp require MIT copyright notices in binary distribution. With **272 👍** and 57 comments, this is the single most-supported open issue, a legal/compliance concern with no movement yet.

2. **[#3144 — Add `/metrics` endpoint](https://github.com/ollama/ollama/issues/3144)** — OPEN. Request for Prometheus-compatible GPU/CPU/utilization/request metrics. 115 👍 and 48 comments; now actively addressed by PR #16998, making this a likely near-term win.

3. **[#941 – `digest mismatch` on download](https://github.com/ollama/ollama/issues/941)** — OPEN. Opened Oct 2023, the long-running rare-but-frustrating `ollama pull` checksum failure now has **162 comments and 45 👍**. Community reports intermittent corrupted blobs; root cause still unresolved.

4. **[#18267 — MLX runner: prefix-cache restore truncated to 8192 tokens](https://github.com/ollama/ollama/issues/18267)** — NEW. Cache restores always land on 8192-token boundaries, costing 17–27 s of re-prefill after every cold prompt on agent workloads. Important for Claude Code ↔ local-model users on Mac.

5. **[#18276 — qwen3moe + Blackwell (sm_120): flash attention crash at warmup](https://github.com/ollama/ollama/issues/18276)** — NEW. `qwen3-coder:30b` terminates with `0xc0000409` on RTX 5070 Ti Laptop; memory fits succeed, but the auto-enabled flash attention faults at warmup. Fresh hardware-class issue with zero comments yet.

6. **[#17987 — Cloud reasoning models split JSON between `reasoning` and `content`](https://github.com/ollama/ollama/issues/17987)** — OPEN. `minimax-m3:cloud` intermittently splits output so `content` alone is never valid JSON, breaking OpenAI-compatible clients—an output-contract regression that matters for agents parsing tool calls.

7. **[#18272 — Vulkan regression: “Not enough memory for command submission” on 66 GB model](https://github.com/ollama/ollama/issues/18272)** — NEW. Regression since v0.32.12 on AMD iGPU; works on v0.32.9. A textbook bisect target for maintainers and a blocker for AMD users running large models.

8. **[#18193 — glm-5.3:cloud endless reasoning and task aborts](https://github.com/ollama/ollama/issues/18193)** — OPEN. Cloud model loops reasoning indefinitely in OpenCode/ZCode while the official Z.AI API works fine, pointing to an Ollama-cloud proxy or prompt-handling discrepancy.

9. **[#18195 — Support `spark2_5` architecture (Spark-X2.5)](https://github.com/ollama/ollama/issues/18195)** — OPEN. SparkLLM/Spark-X2.5-4B downloads but fails at inference since the runtime lacks `spark2_5` architecture support; 3 👍 shows model-shelf expansion demand.

10. **[#18274 — Model name validation length too short](https://github.com/ollama/ollama/issues/18274)** — NEW. The 80-character limit prevents pulling long HuggingFace model names/paths like `hf.co/DavidAU/...`; minor but friction-heavy for HF users.

## 4. Key PR Progress

Only six PRs were updated in the window, so all are covered; note this is a quieter-than-usual period.

1. **[#16998 — server: add `/metrics` endpoint](https://github.com/ollama/ollama/pull/16998)** — Implements opt-in Prometheus metrics (`OLLAMA_METRICS=1`) with scheduler gauges (`ollama_requests_queued`, `ollama_models_loaded`), request counters, and per-model/token metrics. Directly closes the 2-year-old request #3144; the highest-impact PR this window.

2. **[#18271 — llm: send renderer message delimiters to llama-server](https://github.com/ollama/ollama/pull/18271)** — When Ollama renders prompts in Go and sends raw `/completion` to llama-server, checkpoint placement is lost. This PR forwards delimiters so llama-server can create user-turn checkpoints—valuable for context and caching reliability.

3. **[#17195 — fix(glm-ocr): register `<|user|>` as EOT for legacy glmocr GGUFs](https://github.com/ollama/ollama/pull/17195)** — Stops runaway/repeated output by setting `eot_token_id` to `<|user|>` for legacy `glmocr` blobs in the llama.cpp compat layer, plus conversion tests.

4. **[#18273 — wintray: only show notification bubble when version is provided](https://github.com/ollama/ollama/pull/18273)** — Windows tray fix to skip balloon notifications when `UpdateAvailable` fires without a version (e.g. pending startup updates), while keeping menu state updates.

5. **[#18270 — readme: add `deel` to Code Editors & Development](https://github.com/ollama/ollama/pull/18270)** — Documents a terminal coding agent for local models with first-class Ollama discovery (`deel setup` lists pulled models), no cloud fallback.

6. **[#18268 — README: add INVAR (receipted Ollama endpoint)](https://github.com/ollama/ollama/pull/18268)** — Documents an Apache-2.0 OpenAI-compatible wrapper (in front of Ollama) that pins every answer to sha256 of the binary, the manifest digest, and decode options—reproducibility-focused community integration.

## 5. Feature Request Trends

- **Observability & monitoring** — `/metrics` (#3144) with GPU/memory/utilization counters remains the top ask; PR #16998 plus a test-harness spin-off indicate strong demand for Prometheus-native telemetry in self-hosted deployments.
- **Wider model architecture support** — Requests to support newly released architectures (spark2_5, #18195) outpace runtime coverage, a recurring release-cycle lag for fresh model families.
- **Cloud model quality parity** — Multiple reports (#17987, #18193, #16845) show cloud-hosted models diverging from local or official-API behavior (split JSON, endless reasoning, extreme latency). Trending expectation: Ollama Cloud must match first-party API semantics for both OpenAI-compatible and `/api/chat` consumers.
- **Download robustness & resume semantics** — Beyond #941, closed-issue #8484 shows progress-reverting complaints persist; expectation is resumable, integrity-checked downloads with verbose retry states.
- **Integration surface expansion** — The ecosystem continues pushing Ollama into desktop (ChatGPT Desktop in v0.34.0-rc1) and agent tooling (deel, Continue.dev), with requests for UX parity like the Claude Desktop integration (#18073).

## 6. Developer Pain Points

- **Download integrity and flakiness** — Most-recurring frustration: rare `digest mismatch` (#941), progress reverting mid-pull (#8484), and throttled/corrupted retrievals across networks. Developers want transactional downloads with guaranteed checksums and resumable behavior.
- **Cloud API inconsistency** — Intermittent malformed output (#17987), endless reasoning loops (#18193), and 10-minute latencies (#16845) erode trust in `:cloud` tags as drop-in replacements; devs demand schema-stable JSON and stricter timeouts/retries.
- **Hardware-specific regressions with zero lead time** — Swift regressions like the AMD iGPU Vulkan failure (#18272) and Blackwell (sm_120) flash-attention crashes (#18276) frustrate users who bisect versions themselves and want hardware test matrices and clearer pre-release signals.
- **Long-tail issues with high engagement, no fix** — The decades-in-issue-time gap between community support (272 👍 on licensing #3185; 162 comments on #941) and maintainer action remains a trust friction point.
- **Prompt/renderer edge cases breaking agents** — Tool-call parsing failures (gemma4 malformed `BEGIN_ARG`/`END_ARG`, #18275) and cache-restore inefficiencies (#18267) directly tax agent loop latency, the fastest-growing developer workload.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

# llama.cpp Community Digest — 2026-09-07

## Today's Highlights

A steady stream of seven build releases (b10821–b10828) landed in the last 24 hours, headlined by **native support for Spark2_5ForCausalLM** (PR #27868, closed/merged) and a cluster of GPU/backend fixes touching CUDA (`mmid`/`mmf` races), OpenCL (`q4_K`/`q5_K` weight packing), Metal (M2 Max fa-vec tunings), and the grammar parser (repetition threshold). On the issue side, the long-running **disaggregated prefill/decode roadmap** (#21266, by ggerganov) remains the top discussion thread, while a new **unified-KV prompt-processing regression** (#28495) is being triaged.

---

## Releases

Seven point releases in 24h — a fast cadence typical of pre-merge stabilization:

| Build | Headline Change |
|-------|----------------|
| **b10828** | New `Spark2_5ForCausalLM` model support (#27868) |
| **b10827** | OpenCL: correct weight-pack selection for `q4_K`/`q5_K` `mul_mat` (#28402) |
| **b10826** | CUDA: race fixes in `mmid` and `mmf` kernels (#28475) |
| **b10825** | Grammar: fix max repetition threshold (#28469) |
| **b10823** | `common`: add `--log-jsonl` flag (#28437) |
| **b10822** | UI: embed assets directly via CMake, drop gzip dep (#28445) |
| **b10821** | Metal: remaining fa-vec tunings for M2 Max (#28458) |

Notable: build **b10822** simplifies cross-compilation by inlining the web UI assets in C++ (no external gzip). Build **b10823** introduces structured JSONL logging, useful for ops/monitoring pipelines.

---

## Hot Issues

1. **[#21266] server: disaggregated prefill/decode support** *(34 comments, 👍15)*
   Authored by ggerganov himself — this is a strategic roadmap issue outlining how `llama-server` could split prompt-processing and token-generation across heterogeneous devices. Active since April, still drawing design comments.
   → https://github.com/ggml-org/llama.cpp/issues/21266

2. **[#23577] MTP + Qwen3.6 27B produces repeated `////` after long sessions** *(32 comments)*
   Confirmed eval bug under speculative decoding with MTP draft on Windows/CUDA. High comment volume because it affects a popular quantized model.
   → https://github.com/ggml-org/llama.cpp/issues/23577

3. **[#25618] Speculative decoding (draft-mtp / draft-dspark) diverges on quantized targets** *(21 comments)*
   Greedy sampling with draft-model spec-decode produces different output than vanilla on Q4_K_M targets (matches on bf16). Ngram speculation unaffected — strong signal of a numerical/ordering bug.
   → https://github.com/ggml-org/llama.cpp/issues/25618

4. **[#28495] `--np 2` + `--kv-unified` drops pp throughput 42–54% from 2nd long request** *(6 comments)*
   Fresh, with diagnosis already attached: unified-KV flash-attention kernels only mask `KV_max` tails, not interior all-`-INF` blocks. Likely a near-term fix.
   → https://github.com/ggml-org/llama.cpp/issues/28495

5. **[#27981] llama-ui: reasoning-level menu won't open on desktop** *(8 comments, 👍4)*
   Regression in the web UI's reasoning controls; affects UX for chat-template-driven models.
   → https://github.com/ggml-org/llama.cpp/issues/27981

6. **[#27756] Qwen3.5-hybrid (Qwen3.8-27B): silent instant-EOS past ~130k context** *(5 comments)*
   Reproduced on both CUDA and CPU. Reporter ties it to DeltaNet recurrent-state depth × layer-count degradation — a long-context architectural concern.
   → https://github.com/ggml-org/llama.cpp/issues/27756

7. **[#27168] SYCL/OpenCL: `dev2dev_memcpy` crashes on multi-GPU Arc** *(5 comments)*
   P2P not implemented on OpenCL adapter; blocks `--split-mode layer` on Intel Arc multi-GPU setups.
   → https://github.com/ggml-org/llama.cpp/issues/27168

8. **[#28160] Regression: `--lazy-mode auto` halves pp512 for qwen4exp on Vulkan AMD iGPU** *(4 comments)*
   Caused by commit `257813839` (PR #27837); being addressed by the parallel PR #28326.
   → https://github.com/ggml-org/llama.cpp/issues/28160

9. **[#26663] Vulkan on RX 9070 XT: 5–7× slower than HIP for hidden_size ≥ 4096** *(3 comments)*
   RDNA4 (gfx1201) Vulkan backend pathological — ~100 GB/s effective bandwidth vs. HIP. Pain point for AMD consumer GPU owners.
   → https://github.com/ggml-org/llama.cpp/issues/26663

10. **[#27217] `tool_choice: "required"` not enforced on templates with `supports_preserve_reasoning`** *(4 comments)*
    OpenAI-compat endpoint silently accepts but ignores a key tool-call directive — tool-call reliability regression.
    → https://github.com/ggml-org/llama.cpp/issues/27217

---

## Key PR Progress

1. **[#27868] [Model] Support for Spark2_5ForCausalLM** *(closed/merged)*
   End-to-end Spark2_5: GGUF conversion, tensor mapping, tokenizer pre-tokenizer, loader + inference graph. Co-authored by HF.
   → https://github.com/ggml-org/llama.cpp/pull/27868

2. **[#27970] CUDA + ggml: sparse-fa for DSV4/GLM** *(closed)*
   Sparse flash-attention kernel gated by a max-live-kv hint per token — relevant for DeepSeek-V4 and GLM architectures.
   → https://github.com/ggml-org/llama.cpp/pull/27970

3. **[#27991] kv cache: optimize restoring non-contiguous cells** *(closed)*
   Targets the agentic tool-result bottleneck in qwen3.5+ models running under Claude Code-style harnesses.
   → https://github.com/ggml-org/llama.cpp/pull/27991

4. **[#28326] llama: refactor lazy mode auto, fix iGPU regression**
   Reshapes `--lazy-mode auto` into "pick a probably good mode"; introduces explicit `large`/`all` modes. Direct fix for #28160.
   → https://github.com/ggml-org/llama.cpp/pull/28326

5. **[#28136] qwen4exp: direct reads for the lazy PLE table (>2× prefill on GB10)**
   Diagnoses and eliminates the 700→300 tok/s drop when switching from synthetic benchmark to real workloads on Qwen3.8-Flash-Next.
   → https://github.com/ggml-org/llama.cpp/pull/28136

6. **[#26003] llama: `--lazy-experts` for MoE models larger than RAM**
   Streams only routed experts via `MADV_WILLNEED`, letting MoE models larger than system RAM run via page cache. Game-changer for big MoE on consumer hardware.
   → https://github.com/ggml-org/llama.cpp/pull/26003

7. **[#28102] CUDA/HIP: Flash Attention tuning for gfx1201 (RDNA4)**
   Targets the AMD RX 9070/9700 Vulkan/HIP perf gap (issue #26663); also fixes an HS=256 bug in the general FA code.
   → https://github.com/ggml-org/llama.cpp/pull/28102

8. **[#28501] vulkan: raise mul_mat_id hoisted row-id limit 256→512**
   Enables row-id hoisting on MoE models with >256 experts on Vulkan (relevant for Fable-style stacks).
   → https://github.com/ggml-org/llama.cpp/pull/28501

9. **[#28507] vulkan: enable FA shmem staging on AMD RDNA (scalar path)**
   Removes the NVIDIA-only gate on shared-memory K/V staging in the scalar flash-attention path — large wins on RDNA, including for head_size ≥ 256.
   → https://github.com/ggml-org/llama.cpp/pull/28507

10. **[#28517] mtmd: load sharded mmproj GGUF + fix string_format trailing NUL**
    Unblocks `llama-server --mmproj mmproj-...-00001-of-00335.gguf` workflows; fixes a `clip_model_loader` "v.patch_embd.weight not found" failure.
    → https://github.com/ggml-org/llama.cpp/pull/28517

---

## Feature Request Trends

Reading across the active issues, four directions are clearly consolidating:

- **Heterogeneous & disaggregated serving.** Disaggregated prefill/decode (#21266), `--n-cpu-mode` FFN-band selection (#27987), and `--lazy-experts` (#26003) all push toward running large models across mismatched devices (CPU + GPU + NVMe).
- **Speculative decoding correctness.** Quantized-target divergence (#25618), MTP Qwen3.6 regression (#23577), and CUDA race fixes (#28475) show the community investing heavily in spec-decode reliability for Qwen/DeepSeek/GLM stacks.
- **AMD GPU parity.** Vulkan-on-AMD complaints (#26663, #28160, #27634) and the active RDNA4 FA tuning (#28102) + scalar shmem staging (#28507) signal a coordinated effort to close the HIP/Vulkan gap.
- **Tool-call / OpenAI-compat fidelity.** `tool_choice: required` enforcement (#27217), `logprobs` with tools+stream (#28504), `dimensions` embeddings param (#25210), and jinja `supports_typed_content` recheck (#28511) show tightening OpenAI-API conformance.

---

## Developer Pain Points

- **Speculative decoding is brittle on quantized models.** Greedy outputs diverge under draft-model spec-decode on Q4 targets; ngram speculation is the workaround until fixes land (#23577, #25618, #28475).
- **AMD GPU users are second-class citizens.** Vulkan perf on RDNA4 is 5–7× behind HIP (#26663); iGPU Vulkan regressed with `--lazy-mode auto` (#28160); Vulkan silently falls back on Intel iGPU (#27634). MSVC also misses AVX-VNNI on Windows (#28295).
- **Long-context inference has architectural rough edges.** Qwen3.5-hybrid goes silent-EOS past ~130k (#27756); unified KV cache wastes ~50% of pp throughput on `--np 2` (#28495); quantized KV cache silently falls back to CPU attention (#28455).
- **Multi-GPU on Intel/SYCL is fragile.** OpenCL adapter lacks P2P (#27168); GTT mirror allocations don't show in Linux memory counters (#22116).
- **Web UI / PWA reliability.** Reasoning menu broken on desktop (#27981), service worker serves stale "connected" state after server stop (#28508), SVG renders missing parts (#28336).
- **Tool-call and grammar edge cases.** GBNF un-parseable on nested `maxLength ≥ 2000` (#25746), grammar fails on array of exactly 2000 chars (#27859), `tool_choice: required` silently ignored (#27217).
- **Build & packaging friction.** Sparse flash-attention has no quantized-KV path causing 2.8× decode slowdowns (#28454). CI/release.yml webui logic being cleaned up (#27316).

---

*Generated from public GitHub data on `ggerganov/llama.cpp` (now `ggml-org/llama.cpp`). Links point to the current canonical repository.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/stevenko2002/agents-radar).*