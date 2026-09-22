# OpenClaw 生态日报 2026-09-23

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-22 22:15 UTC

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

## OpenClaw 项目深度报告



# OpenClaw 项目动态日报 — 2026-09-23

---

## 1. 今日速览

OpenClaw 项目在过去 24 小时内保持**极高活跃度**：Issues 总更新 500 条（新增/活跃 472，关闭 28），PR 总更新 500 条（待合并 362，已合并/关闭 138）。**无新版本发布**。核心维护者（steipete、vincentkoc 等）今日密集提交，围绕 Gateway 线程 offload、iMessage/Telegram 修复、CI 与 QA 通道清理等方向推进显著。项目整体健康度**中等偏下**——P0 级崩溃/内存泄漏 Issue 仍有多条未闭合，但修复 PR 已在路上。

---

## 2. 版本发布

**今日无新版本发布。** 最近一次发布为 2026.9.5（stable），当前无 beta 或 rc 标签更新。

---

## 3. 项目进展

今日共有 **10 条 PR 已合并/关闭**，涵盖以下重要推进：

| PR | 标题 | 方向 | 意义 |
|---|---|---|---|
| [#155967](https://github.com/openclaw/openclaw/pull/155967) | feat: support GPT-6 Sol and Luna | OpenAI 模型支持 | 新增 GPT-6 Sol/Luna 模型解析与上下文限制支持 |
| [#155976](https://github.com/openclaw/openclaw/pull/155976) | fix(qa): count Code Mode nested tool activity | QA 测试 | 解除 2026.9.6 Full Release Validation 的 runtime-pair 阻塞 |
| [#155796](https://github.com/openclaw/openclaw/pull/155796) | refactor: remove subagent registry dependency overrides | 代码清理 | 移除 subagent registry 中仅测试使用的可变依赖覆盖及镜像运行时类型 |
| [#155915](https://github.com/openclaw/openclaw/pull/155915) | fix(ci): keep advisory shard cap internal | CI 修复 | 修复 `check-dependencies` 因 Knip unused-export 报错阻塞 merge CI |
| [#155891](https://github.com/openclaw/openclaw/pull/155891) | fix(test): drain Talk databases before fixture cleanup | 测试修复 | 确保 Talk fixture 在异步数据库清理完成后再移除临时资源 |
| [#155974](https://github.com/openclaw/openclaw/pull/155974) | test: consolidate chat failure transcript assertions | 测试重构 | 合并 7 个重复 fixture 的 chat-send 失败测试 |
| [#153177](https://github.com/openclaw/openclaw/issues/153177) | Update failure: finalize:targetConfigConvergence (2026.9.5) | 更新故障 | 已关闭——2026.9.5 更新在 `finalize:targetConfigConvergence` 阶段失败 |
| [#153377](https://github.com/openclaw/openclaw/issues/153377) | update repair self-contends at finalize:doctor | 更新修复 | 已关闭——`openclaw update repair` 在 macOS 上与自身更新进程争抢 finalize:doctor |
| [#152689](https://github.com/openclaw/openclaw/issues/152689) | Codex resident catalog retry loop fills os.tmpdir() | 崩溃修复 | 已关闭——2026.9.5 后 Codex catalog 重试循环耗尽 `/tmp` 空间 |
| [#97680](https://github.com/openclaw/openclaw/issues/97680) | Beta-tagged update leaves plugins on latest | 更新修复 | 已关闭——beta 更新后外部官方插件解析遗留 `latest` dist-tag 问题 |

**整体进展评估**：本月已合并的修复集中在 **Gateway 线程 offload（#155982、#154069、#155800）**、**iMessage/Telegram outbound 可靠性（#155981、#125764、#126246）**、**模型支持（GPT-6、Gemini 3.8 Live）** 和 **CI/测试卫生**。项目在架构性能优化和消息可靠性方向迈出了实质性步伐。

---

## 4. 社区热点

以下为今日评论数最多、互动最活跃的 Issue/PR：

### 🔥 评论数 Top 5 Issues

1. **[#91588](https://github.com/openclaw/openclaw/issues/91588)** — Critical: Gateway Memory Leak（33 👍，33 评论）
   - Gateway 进程 RSS 从 350MB 涨至 15.5GB，2-3 天内触发 OOM kill，反复 `launchd-handoff` 重启循环。
   - 标签：`P0`、`impact:crash-loop`、`maturity:stable`
   - **诉求**：用户要求紧急修复内存泄漏，此为最高优先级稳定问题。

2. **[#44925](https://github.com/openclaw/openclaw/issues/44925)** — Subagent completion silently lost（30 评论，2 👍）
   - Telegram forum mode 下 subagent 任务完成时 announce 失败（E31/E42/E45），结果被静默丢弃，无重试、无通知、无自动重启。
   - 标签：`P1`、`impact:data-loss`、`impact:message-loss`
   - **诉求**：要求 subagent 完成通知具备重试与持久化保证。

3. **[#119720](https://github.com/openclaw/openclaw/issues/119720)** — Synchronous agent persistence blocks Gateway event loop（22 评论）
   - 虽有部分修复（#140231、#138984），但同步持久化与 transcript 维护仍阻塞 Gateway 线程。
   - 标签：`P1`、`impact:session-state`、`impact:crash-loop`
   - **诉求**：要求将持久化操作完全异步化 off Gateway thread。

4. **[#112423](https://github.com/openclaw/openclaw/issues/112423)** — Large SQLite transcript cleanup blocks gateway event loop（19 评论）
   - 归档大型 SQLite transcript 时在 Gateway 线程执行全量物化、压缩、文件 I/O。
   - 标签：`P1`、`impact:session-state`
   - **诉求**：要求 transcript 归档操作 offload 到 worker。

5. **[#126360](https://github.com/openclaw/openclaw/issues/126360)** — AgentSelectionRequiredError floods logs under explicit multi-agent ownership（18 评论）
   - `agents.ownership: "explicit"` 配置下，logbook plugin、Control UI RPC、system-agent 转换均缺少 `agentId` 目标，导致错误泛滥。
   - 标签：`P1`、`impact:other`
   - **诉求**：要求在显式多 agent 归属场景下正确传递 agentId。

### 📊 互动热度总结

- **最高优先级社区焦点**：Gateway 内存泄漏（#91588）已持续多日，P0 + stable 标签组合表明其影响生产环境。
- **消息可靠性**成为第二大焦点：subagent 静默丢失（#44925）、Telegram outbound 死信（#125764、#126246）、inbound 通道消息丢弃（#112259）均引发大量讨论。
- **性能回归**：Gateway 冷启动退化 2.5x（#119087）、CPU busy loop（#134993、#134925）也受到社区密切关注。

---

## 5. Bug 与稳定性

### 🔴 P0（崩溃/数据丢失/阻塞性）

| Issue | 标题 | 状态 | 是否有 Fix PR |
|---|---|---|---|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway Memory Leak — RSS 350MB → 15.5GB, OOM crash loop | OPEN | ❌ 无 |
| [#89278](https://github.com/openclaw/openclaw/issues/89278) | Codex OAuth refresh succeeds but cron/heartbeat fail with 10s timeout | OPEN | ❌ 无 |
| [#111372](https://github.com/openclaw/openclaw/issues/111372) | Gateway restarts immediately after "loading configuration" — infinite SIGTERM loop on macOS | OPEN | ❌ 无 |
| [#152689](https://github.com/openclaw/openclaw/issues/152689) | Codex resident catalog retry loop fills os.tmpdir() with 342MB captures | **CLOSED** | ✅ 已关闭 |
| [#153177](https://github.com/openclaw/openclaw/issues/153177) | Update failure: finalize:targetConfigConvergence (2026.9.5) | **CLOSED** | ✅ 已关闭 |

### 🟠 P1（严重功能缺陷/数据丢失风险）

| Issue | 标题 | 状态 | 是否有 Fix PR |
|---|---|---|---|
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | Subagent completion silently lost — no retry, no notification | OPEN | ❌ 无 |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | Sync agent persistence blocks Gateway event loop at scale | OPEN | ⚠️ 部分修复（#140231、#138984） |
| [#112423](https://github.com/openclaw/openclaw/issues/112423) | Large SQLite transcript cleanup blocks gateway event loop | OPEN | ❌ 无 |
| [#126360](https://github.com/openclaw/openclaw/issues/126360) | AgentSelectionRequiredError floods logs under explicit multi-agent ownership | OPEN | ❌ 无 |
| [#96834](https://github.com/openclaw/openclaw/issues/96834) | WhatsApp 1:1 image wedges main lane ~3min before processing | OPEN | ❌ 无 |
| [#114612](https://github.com/openclaw/openclaw/issues/114612) | SQLite unbounded growth: memory_index_chunks + memory_embedding_cache no retention | OPEN | ❌ 无 |
| [#125570](https://github.com/openclaw/openclaw/issues/125570) | Skill Workshop update overwrites live skill description, breaking routing | OPEN | ❌ 无 |
| [#125333](https://github.com/openclaw/openclaw/issues/125333) | totalTokens inflation still reproduces on 2026.8.1-beta.2 | OPEN | ⚠️ #123065 部分修复不完整 |
| [#126246](https://github.com/openclaw/openclaw/issues/126246) | Telegram durable outbound deliveries stuck in send_attempt_started, lost on restart | OPEN | ❌ 无 |
| [#125764](https://github.com/openclaw/openclaw/issues/125764) | Telegram adapter: network-failed outbound sends dead-lettered after single attempt | OPEN | ❌ 无 |
| [#113701](https://github.com/openclaw/openclaw/issues/113701) | Context Overflow: large tool outputs exceed context window, compaction can't recover | OPEN | ❌ 无 |
| [#114234](https://github.com/openclaw/openclaw/issues/114234) | Usage-cost refresh lock never releasable after restart reusing owner PID (containers) | OPEN | ❌ 无 |
| [#120600](https://github.com/openclaw/openclaw/issues/120600) | AGENTS.md never reaches model on sandboxed Codex app-server runs | OPEN | ❌ 无 |
| [#134570](https://github.com/openclaw/openclaw/issues/134570) | Gateway crash-loop + silent dispatch failures after upgrade to 2026.8.1 (7 blockers) | OPEN | ❌ 无 |
| [#135272](https://github.com/openclaw/openclaw/issues/135272) | macOS companion UI-control path intermittently fails with COMPANION_APP_UNAVAILABLE | OPEN | ❌ 无 |

### 🟡 P2（功能退化/体验问题）

- **[#112313](https://github.com/openclaw/openclaw/issues/112313)** — Dead-lettered outbound delivery queue entries are permanent（无 retry/清除路径）
- **[#119087](https://github.com/openclaw/openclaw/issues/119087)** — Gateway cold start regressed ~2.5x from 2026.7.1-beta.1 to 2026.7.2-beta.7
- **[#50490](https://github.com/openclaw/openclaw/issues/50490)** — Feishu 群聊 activation 模式切换无效（始终响应所有消息）
- **[#118560](https://github.com/openclaw/openclaw/issues/118560)** — WebChat canvas hides earlier messages after main session reset
- **[#88079](https://github.com/openclaw/openclaw/issues/88079)** — WebChat reasoning_content not streamed for Kimi Code & DeepSeek Reasoner
- **[#112160](https://github.com/openclaw/openclaw/issues/112160)** — SSH sandbox does not stage inbound media into existing remote workspace
- **[#125640](https://github.com/openclaw/openclaw/issues/125640)** — Memory index still fails on item-count batch limits（千帆 16、火山 10）

### 🟢 P3 / 建议类

- **[#99583](https://github.com/openclaw/openclaw/issues/99583)** — Intelligent Session Auto-Titling（惰性生成、廉价模型、话题感知重命名）
- **[#85461](https://github.com/openclaw/openclaw/issues/85461)** — Capture image-generation provider usage metadata
- **[#48918](https://github.com/openclaw/openclaw/issues/48918)** — User-Level Skill Preferences/Conventions Support
- **[#120244

---

## 横向生态对比



以下是根据各项目 2026-09-23 动态数据整理的「今日重点」摘要：

### 🚀 重要更新（今日 7 条核心动态）

*   **LobsterAI 发布新版本 2026.9.22**
    *   **内容**：恢复了 IM 模块原生的定时任务功能，修复了飞书消息送达问题，并解决了 Windows 网关在特定情况下异常退出的稳定性问题。
    *   **意义**：直接提升了 IM 模块和 Windows 网关的稳定性与可用性。
    *   **项目链接**：[LobsterAI](https://github.com/netease-youdao/LobsterAI)

*   **OpenClaw 新增 GPT-6 Sol 和 Luna 模型支持**
    *   **内容**：合并了 PR #155967，新增了对 GPT-6 Sol 和 Luna 模型的解析及上下文限制支持。
    *   **意义**：扩展了 OpenClaw 对 OpenAI 最新模型的兼容性。
    *   **项目链接**：[OpenClaw](https://github.com/openclaw/openclaw)

*   **OpenClaw Gateway 内存泄漏 Issue（#91588）持续发酵，成社区最高优先级焦点**
    *   **内容**：Gateway 进程 RSS 内存从 350MB 涨至 15.5GB 并触发 OOM kill，导致 2-3 天内反复崩溃重启，该 P0 级 Issue 今日新增大量评论，目前仍未闭合。
    *   **意义**：对生产环境稳定性构成严重威胁，是当前社区最紧迫的诉求。
    *   **项目链接**：[OpenClaw](https://github.com/openclaw/openclaw)

*   **Hermes Agent 修复 venv 更新导致的网关循环崩溃（#119466）**
    *   **内容**：针对 `hermes update` 后 venv editable-finder 过期导致的 `ModuleNotFoundError` 循环崩溃问题，已开放修复 PR #119525。
    *   **意义**：旨在解决 P0 级别的网关启动崩溃问题，恢复更新后的网关可用性。
    *   **项目链接**：[Hermes Agent](https://github.com/nousresearch/hermes-agent)

*   **NanoClaw 修复 Codex 配对失败，并增强多通道部署能力**
    *   **内容**：合并了 PR #3863 和 #3861 修复了 Codex 向导配对失败的问题；同时合并了 PR #3864 和 #3865 以支持 Slack 和 Teams 的多通道适配。
    *   **意义**：解决了新用户在复杂网关环境下的安装失败问题，并提升了多平台部署的灵活性。
    *   **项目链接**：[NanoClaw](https://github.com/qwibitai/nanoclaw)

*   **ZeroClaw 推进安全漏洞忽略与核心集成策略标准化**
    *   **内容**：合并了 PR #11038 以在 CI 中忽略 `imbl-sized-chunks` 双重释放漏洞（RUSTSEC-2026-0292），并关闭 PR #11042 和 #11016 将轻量级核心替代集成策略正式写入文档。
    *   **意义**：保障了 CI 流程的顺畅，并为后续的功能替换与迁移评审提供了权威的文档依据。
    *   **项目链接**：[ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

*   **PicoClaw 修复核心配置懒加载竞态条件**


---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



根据您提供的 GitHub 数据，以下是 **2026-09-23**

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

The user wants a structured daily report for the Hermes Agent project based on the provided GitHub data, dated 2026-09-23. I need to analyze the data and generate the report in Chinese, following the specified sections.

Let's break down the data provided:
- **Issues**: 50 updates in the last 24 hours (45 new/active, 5 closed).
- **PRs**: 50 updates in the last 24 hours (41 pending merge, 9 merged/closed).
- **Releases**: 0 new releases.
- **Latest Issues (30 shown, sorted by comments)**:
  - #88584: Automated Nous integration is blocked (invalid, comp/cron, P3) - 132 comments. Blocked merge due to conflicts in `cron/jobs.py`.
  - #97681: Let Bots collaborate across gateways, independently of Desktop (type/feature, comp/gateway, P2) - 29 comments. Group chat across gateways.
  - #117867: Desktop — newest turn vanishes at completion when warm-resume transcript gate is held (type/bug, P1) - 12 comments.
  - #35060: Configurable `deliver` target for `watch_entities`/`watch_domains` in Home Assistant integration (type/feature, P3) - 10 comments.
  - #74922: Circuit breaker in check_command_security() ignores tirith_fail_open (type/bug, P3) - 6 comments.
  - #35674: Symlinked skills trigger false "outside trusted skills directory" security warning (type/bug, P2) - 5 comments.
  - #57812: Hermes agent on macOS cannot connect to remote LLM over LAN (type/bug, P2) - 5 comments.
  - #105267: Per-job / per-platform policy for external memory providers in cron (type/feature, P3) - 4 comments.
  - #75444: kanban: auto-decomposer re-dispatches escalated triage tasks (type/bug, P3) - 4 comments.
  - #119411: Settings → Models profile picker still writes the launch profile's config.yaml (type/bug, P2) - 3 comments.
  - #119466: hermes update can leave the venv editable-finder stale — gateway crash-loops with ModuleNotFoundError (type/bug, P0) - 3 comments.
  - #106919: Discuss explicit opt-in for unattended memory consolidation (type/feature, P2) - 3 comments.
  - #119561: plugin-catalog: browserclaw and hermes-kame-api-rotation fail pinned-source-validate in CI (plugin-catalog) - 2 comments.
  - #82597: Kanban: block_loop_detected transitions are silent (type/bug, P3) - 2 comments.
  - #119510: Configurable pairing challenge text (type/feature, P3) - 2 comments.
  - #40903: Hermes Desktop drops intermediate assistant messages in multi-message turns (CLOSED, type/bug, P3) - 2 comments.
  - #24438: HERMES_AGENT_HELP_GUIDANCE is unconditionally hardcoded into system prompt (type/bug, P2) - 2 comments.
  - #49198: Inject current wall-clock time into each turn to avoid repeated tool calls (type/feature, P3) - 2 comments.
  - #118850: Desktop — post-turn re-hydrate replaces the in-memory transcript store with a stale page (CLOSED, type/bug, P2) - 2 comments.
  - #118826: message_agent local delivery: unbounded child turn pins the profile turn lock indefinitely (type/bug, P2) - 2 comments.
  - #119539: strip_profile_gate_env deletes operator env vars by name shape (_ALLOWED_) (bug) - 1 comment.
  - #119546: build_profile_secret_scope() omits provider + API_SERVER_KEY by design (bug) - 1 comment.
  - #119569: Desktop: assistant messages disappear after streaming completes (render race condition) (Bug) - 1 comment.
  - #119566: Desktop: single assistant turn with pre-tool intro text renders as two response groups (Desktop) - 1 comment.
  - #119540: Desktop: completed replies intermittently render duplicated or out of order (Desktop) - 1 comment.
  - #119534: fix(skills): _create_skill rmtrees a pre-existing directory when the security scan blocks (type/bug, P1) - 1 comment.
  - #119395: profiles.describe reports every MCP server enabled for every profile (CLOSED, type/bug, P2) - 1 comment.
  - #81671: stage_write() never deduplicates (type/bug, P2) - 1 comment.
  - #119533: Single-entry OpenRouter credential-pool burn turns into recurring 'No LLM provider configured' turn-killer (type/bug, P1) - 1 comment.
  - #89441: Per-profile toolset and MCP toggles persist but are ignored at runtime (type/bug, P2) - 1 comment.

- **Latest PRs (20 shown, sorted by comments)**:
  - #119592: fix(desktop): surface customized sidebar view state (OPEN) - Fixes #119454.
  - #119591: fix(desktop): keep open stream across reordered running=false heartbeat (#119569) (OPEN) - Closes #119569.
  - #119590: fix(desktop): settle rewritten final onto sealed candidate interim (OPEN) - Closes #119566.
  - #119589: fix(agent): cap persisted cooldown to TTL so subscription-period 429 cannot permanently lock sole credential (OPEN) - Fixes #119163.
  - #119588: fix(desktop): reconcile folded live response occurrences (OPEN) - TDD for #119566.
  - #119156: fix(desktop): retain provider setup connection and profile ownership (OPEN, type/bug, P2).
  - #119183: fix(desktop): persist edit previews before tool-result flush (OPEN, type/bug, P2).
  - #119496: fix(desktop): keep page-omitted prompts before tool activity and replies (OPEN, type/bug, P3).
  - #119184: fix(desktop): keep image frames stable through delayed loads (OPEN, type/bug, P3).
  - #119186: fix(desktop): reconcile session snapshots after replay and settlement (OPEN, type/bug, P2).
  - #12605: feat(whatsapp): WhatsApp Ultimate (CLOSED, type/feature, P3).
  - #119584: Desktop: don't toast a deliberate update kill as a backend crash (CLOSED).
  - #46165: feat(sessions): expose session_key in GET /api/sessions (OPEN, type/feature, P3).
  - #119586: hermes-ops: agente experto en administrar perfiles Hermes (CLOSED).
  - #119525: fix(update): refresh a stale editable finder before skipping reinstall (OPEN, type/bug, P0).
  - #119585: Add `reasoning_echo: never` to opt a route out of reasoning_content echo-back (OPEN).
  - #119581: fmt(js): `npm run fix` auto-fix (CLOSED).
  - #119587: docs: update fallback-providers.md to reflect multi-hop fallback walk (OPEN).
  - #55170: feat(web): improve models fallback management (OPEN, type/feature, P3).
  - #119544: fix(agent): keep auxiliary failures from disabling single-key chat (OPEN).

Now, let's structure the report based on the requested sections.

### 1. 今日速览 (Today's Overview)
- Summarize the overall status. High activity in issues and PRs, especially focused on Desktop rendering bugs, gateway/profile configuration issues, and security/cron integrations. No new releases today. The project is actively being maintained and debugged, particularly in the Desktop client and agent core.

### 2. 版本发布 (Version Releases)
- None. (无新版本发布，省略)

### 3. 项目进展 (Project Progress)
- Discuss merged/closed PRs and their impact.
  - PR #12605 (WhatsApp Ultimate) closed, bringing SQLite storage, group management, polls, etc.
  - PR #119584 (Desktop update kill toast fix) closed.
  - PR #119586 (hermes-ops profile admin) closed.
  - PR #119581 (JS formatting auto-fix) closed.
  - Closed Issues: #40903 (Desktop drops intermediate assistant messages), #118850 (Desktop transcript store stale page), #119395 (profiles.describe MCP server enabled bug).
  - Active PRs: Many desktop rendering fixes (#119592, #119591, #119590, #119588, #119156, #119183, #119496, #119184, #119186), agent fixes (#119589, #119544), update fix (#119525), session key exposure (#46165), fallback chain panel (#55170).
  - Overall progress: Significant effort on stabilizing the Desktop UI (rendering, session state, transcript reconciliation) and fixing critical gateway/update issues.

### 4. 社区热点 (Community Hotspots)
- Analyze the most commented issues/PRs.
  - Issue #88584 (132 comments): Automated Nous integration blocked due to merge conflicts in `cron/jobs.py`. High community interest in automation/cron.
  - Issue #97681 (29 comments): Bots collaborating across gateways independently of Desktop. Feature request for multi-gateway group chats.
  - Issue #117867 (12 comments): Desktop turn vanishing bug.
  - Issue #35060 (10 comments): Home Assistant integration watch_entities deliver target configuration.
  - Analyze the demands: Cross-gateway bot collaboration, better Home Assistant integration, and Desktop UI stability.

### 5. Bug 与稳定性 (Bug & Stability)
- List bugs by severity (P0 to P3), noting if there are fix PRs.
  - **P0/Critical**:
    - #119466: `hermes update` leaves venv editable-finder stale, causing gateway crash-loops (`ModuleNotFoundError`). Fix PR #119525 is open.
    - #119533: OpenRouter credential-pool burn turns into recurring 'No LLM provider configured' turn-killer. (No fix PR listed yet, but related to #119589/#119544).
  - **P1/High**:
    - #117867: Desktop turn vanishes at completion (warm-resume transcript gate). (No direct fix PR mentioned in the list, but desktop fixes are abundant).
    - #119534: `_create_skill` rmtrees a pre-existing directory when security scan blocks. (Potential data loss bug).
    - #119533: OpenRouter credential pool burn (already mentioned).
  - **P2/Medium**:
    - #74922: Circuit breaker ignores `tirith_fail_open`.
    - #35674: Symlinked skills trigger false security warning.
    - #57812: macOS cannot connect to remote LLM over LAN.
    - #119411: Settings profile picker writes launch profile's config.yaml.
    - #118826: `message_agent` local delivery unbounded child turn pins profile turn lock.
    - #24438: `HERMES_AGENT_HELP_GUIDANCE` unconditionally hardcoded.
    - #81671: `stage_write()` never deduplicates.
    - #89441: Per-profile toolset/MCP toggles ignored at runtime.
    - #119395 (CLOSED): profiles.describe reports every MCP server enabled.
    - #118850 (CLOSED): Desktop transcript store replaced with stale page.
    - Desktop rendering races: #119569 (has PR #119591), #119566 (has PR #119590, #119588), #119540.
  - **P3/Low**:
    - #35060: Home Assistant deliver target config.
    - #105267: Per-job memory policy for cron.
    - #75444: Kanban auto-decomposer re-dispatches triage tasks.
    - #82597: Kanban block_loop_detected silent transitions.
    - #119510: Configurable pairing challenge text.
    - #49198: Inject wall-clock time into turns.
    - #119561: plugin-catalog CI failure.

### 6. 功能请求与路线图信号 (Feature Requests & Roadmap Signals)
- New features requested:
  - Cross-gateway bot collaboration (#97681).
  - Home Assistant configurable deliver target (#35060).
  - Per-job memory policy for cron (#105267).
  - Configurable pairing challenge text (#119510).
  - Wall-clock time injection (#49198).
  - Unattended memory consolidation opt-in (#106919).
- Active feature PRs:
  - WhatsApp Ultimate (#12605 - closed, major feature).
  - `session_key` in GET /api/sessions (#46165).
  - Fallback chain panel in dashboard (#55170).
  - `reasoning_echo: never` option (#119585).
  - `hermes-ops` profile admin CLI (#119586 - closed).
- Outlook: Cross-gateway collaboration and enhanced memory/cron policies are highly requested and might shape the next major release. The WhatsApp Ultimate feature is now merged/closed, indicating a push for rich platform integrations.

### 7. 用户反馈摘要 (User Feedback Summary)
- Extract real user pain points from issues.
  - Desktop UI instability is a major pain point (messages vanishing, duplicates, rendering order issues). Users report frustration with the transcript view, especially after streaming or warm-resume.
  - Configuration complexity and bugs around profiles (config.yaml writing, MCP server toggles, env var stripping) are causing silent failures or incorrect behavior.
  - Integration issues (macOS LAN LLM connection, Home Assistant event routing) block specific use cases.
  - Automation/cron users are blocked by merge conflicts (#88584) and lack of per-job memory policies (#105267).
  - Security warnings for symlinked skills are causing false positives, hindering skill usage.

### 8. 待处理积压 (Backlog & Maintenance Debt)
- Long-standing issues or PRs needing attention.
  - Issue #88584: Nous integration blocked by merge conflicts (since Aug 17, high comments).
  - Issue #97681: Cross-gateway bot collaboration (since Aug 29, high comments).
  - Issue #35060: Home Assistant feature request (since May 30).
  - Issue #24438: Hardcoded system prompt guidance (since May 12).
  - Issue #49198: Wall-clock time injection (since Jun 19).
  - Issue #74922: Circuit breaker bug (since Jul 30).
  - Issue #75444: Kanban decomposer bug (since Jul 31).
  - Issue #82597: Kanban silent transitions (since Aug 9).
  - Issue #81671: stage_write deduplication (since Aug 8).
  - Issue #89441: Per-profile toolset ignored (since Aug 18).
  - PR #46165: Expose session_key (open, since Jun 14).
  - PR #55170: Fallback chain panel (open, since Jun 29).
- Highlight the need for maintainers to address the merge conflicts blocking automation, the long-standing Desktop rendering bugs, and the profile configuration bugs that are causing silent failures.

Let's refine the language to be objective, professional, and data-driven. Ensure all links are correctly formatted.

Double-checking the data:
- Issue #88584 has 132 comments, created Aug 17, updated Sep 22. It's about Nous integration blocked by merge conflicts.
- Issue #97681 has 29 comments, created Aug 29, updated Sep 22. Cross-gateway bot collaboration.
- Issue #117867 has 12 comments, created Sep 21, updated Sep 22. Desktop turn vanishing.
- Issue #35060 has 10 comments, created May 30, updated Sep 22. Home Assistant deliver target.
- Issue #74922 has 6 comments, created Jul 30, updated Sep 22. Circuit breaker ignores tirith_fail_open.
- Issue #35674 has 5 comments, created May 31, updated Sep 22. Symlinked skills false warning.
- Issue #57812 has 5 comments, created Jul 3, updated Sep 22. macOS LAN LLM connection.
- Issue #105267 has 4 comments, created Sep 7, updated Sep 2

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



好的，这是根据您提供的 PicoClaw GitHub 数据生成的 2026-09-23 项目动态日报。

---

### **PicoClaw 项目动态日报 - 2026-09-23**

#### **1. 今日速览**
PicoClaw 项目在 2026-09-23 的活跃度处于**低活跃、稳定维护**状态。过去24小时内无新版本发布，主要动态集中于对历史遗留 Bug 的清理和修复。社区互动较少，所有更新均由核心贡献者 `sting8k` 主导，重点在于提升配置模块的健壮性和可配置性。项目整体健康度良好，代码质量在持续改进中。

#### **2. 版本发布**
*   **无新版本发布。**

#### **3. 项目进展**
今日有 3 个 PR 被关闭/合并，标志着项目在配置管理和工具集成方面的进一步完善：
*   **修复并发配置初始化风险** (`#3375`): 该 PR 修复了 `Config.sensitiveCache` 懒加载过程中因缺乏同步导致的竞态条件，避免了潜在的 `nil` 指针 panic。**这是一次重要的稳定性修复**，提升了核心配置模块的可靠性。
*   **使 reaction 工具可配置** (`#3372`): 此 PR 完善了工具配置逻辑，为 `reaction` 工具增加了独立的配置项和开关支持，解决了其无法被正确禁用的问题。**这增强了系统的模块化和可定制性**。
*   **QQ 频道附件支持增强** (`#1349`): 一个长期存在的增强型 PR 今日被关闭，它为 QQ 频道通道增加了对语音、图片、视频及文件等多种附件类型的解析与回复能力，**显著提升了通道功能的完整性**。

**整体迈进**：项目今日的进展聚焦于 **“稳固基础”** 和 **“增强现有功能”**。虽然无重大新特性发布，但对核心配置逻辑的修复和对已有通道的增强，为后续更上层的功能开发打下了更坚实的基础。

#### **4. 社区热点**
今日无特别活跃的讨论。评论数最多的 Issue 均为已关闭的 Bug 报告（`#3374` 和 `#3373`，各2条评论），表明社区关注点主要集中在历史遗留问题的解决上，而非新功能的讨论。

#### **5. Bug 与稳定性**
今日报告的 Bug 均已被标记为 `[stale]` 和 `[CLOSED]`，且都有对应的修复 PR。按严重程度排列如下：

1.  **严重：配置数据静默丢失与悬空引用** (`#3373`)
    *   **问题**：`SaveConfig` 操作会静默丢弃 `model_list` 中除第一个之外的所有 `api_key`，并留下指向不存在模型的 `fallbacks` 引用。这导致用户配置损坏且无任何错误提示。
    *   **状态**：已关闭。相关修复 PR `#3372` 虽主要针对 `reaction`，但可能一并处理了此问题，或 Issue 因 stale 被关闭。
    *   **链接**：[Issue #3373](https://github.com/sipeed/picoclaw/issues/3373)

2.  **严重：并发下敏感数据过滤器可能为 nil 导致 panic** (`#3374`)
    *   **问题**：`Config.initSensitiveCache()` 的并发安全缺陷可能导致 `SensitiveDataReplacer` 返回 `nil`，进而在调用时引发 panic。
    *   **状态**：已关闭。修复 PR `#3375` 已合并，直接解决了此竞态条件。
    *   **链接**：[Issue #3374](https://github.com/sipeed/picoclaw/issues/3374)

#### **6. 功能请求与路线图信号**
*   **新增 Web 搜索提供商** (`#3370`): 一个开放的 PR 提议集成 **Keenable** 作为新的 `web_search` 提供商。该提供商的特点是初始使用无需 API 密钥，这可能成为项目的一个差异化优势。**这是今日最明确的路线图信号**，若被采纳，将丰富项目的搜索能力。
*   **工具配置细化** (`#3372`): 社区对工具可配置性的需求已被满足。趋势表明，未来所有工具都可能需要独立的启用/禁用开关。

#### **7. 用户反馈摘要**
从 Issue 描述中提炼出的核心用户痛点是 **配置管理的脆弱性**：
*   **痛点1：静默数据丢失**。用户担心在不知情的情况下，配置文件被错误地修改和保存，导致 API 密钥等重要信息丢失（`#3373`）。
*   **痛点2：不稳定性**。用户在使用过程中可能遇到因配置初始化问题导致的崩溃（panic），影响使用体验（`#3374`）。
*   **满意点**：社区对项目能及时响应并修复这类关键 Bug 表示认可（尽管反应不算热烈）。

#### **8. 待处理积压**
*   **PR `#3370` (feat(tools): add Keenable web search provider)**: 此 PR 创建于 2026-09-07，至今已开放近两周，状态为 `[OPEN] [stale]`。这是一个有价值且完成度较高的功能增强，建议维护者关注并尽快进行评审和合并，以防贡献者流失。
*   **Issue `#3373`, `#3374`**: 虽然已关闭，但建议维护者在后续版本发布说明中明确提及这些修复，以提升用户信心。

---
**报告生成时间：** 2026-09-23
**数据来源：** GitHub API for `sipeed/picoclaw`

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



好的，这是根据您提供的 NanoClaw GitHub 数据生成的 2026-09-23 项目动态日报。

---

### **NanoClaw 项目动态日报 - 2026-09-23**

#### **1. 今日速览**
NanoClaw 项目在过去24小时内呈现出高度的开发活跃度，但整体处于“厚积薄发”的阶段。核心开发团队（`amit-shafnir`, `zvi-fried`, `glifocat`, `moshe-nanoco`）围绕 **Codex 生态完善、Iron Proxy 网关集成、CDSS（客户自助部署）** 三大主线进行了密集的代码提交与合并。尽管有15个PR更新，但无新版本发布，表明当前工作正聚焦于底层架构升级和大型功能的集成测试，而非面向用户的版本迭代。项目健康度良好，开发节奏紧凑，问题响应与修复闭环高效。

#### **2. 版本发布**
*   **无新版本发布**。所有开发活动均指向下一个未发布版本。

#### **3. 项目进展**
今日有 **5个PR被合并或关闭**，标志着多项关键功能的落地或收尾：
*   **Codex 生态强化**：通过合并 `#3863`（修复向导中提供者契约注册）和 `#3861`（修复向导重复提问），直接回应并解决了 Issue `#3862` 中报告的“Codex 设备配对失败”问题，形成了完整的修复闭环。同时，`#3866`（等待MCP服务器）和 `#3867`（升级Codex至0.155.1）的合并，显著提升了Codex提供者的稳定性和兼容性。
*   **CDSS 功能落地**：`#3864`（通道凭证提供者）和 `#3865`（Slack/Teams适配器）的合并，是CDSS（客户自助部署）功能的核心组成部分，使得在单个实例上动态配置和管理多个Slack/Teams通道成为可能，是项目可扩展性的一次重要飞跃。
*   **网关架构统一**：`#3815`（中心化凭证网关契约）的长期工作在今日更新，为后续Iron Proxy网关（`#3817`）的集成奠定了坚实的架构基础，推动了网关功能的标准化。

**整体迈进**：项目正从功能开发阶段转向**系统集成与稳定性强化**阶段。Codex和网关相关的工作表明项目在积极拥抱新的AI模型接口和部署模式，而CDSS功能则指向了产品化和服务化的重要方向。

#### **4. 社区热点**
今日讨论焦点高度集中在 **Iron Proxy 网关** 相关的PR上，尽管评论数均为0，但其PR标题和标签（`core-team`, `kind/feature`）表明其为核心优先级：
*   **PR #3817 [OPEN]**: `feat(skills): add the Iron Proxy gateway`
    *   **链接**: `nanocoai/nanoclaw/pull/3817`
    *   **分析**: 这是社区和团队关注的下一个重大功能。它旨在为用户提供一个可选的、基于Iron Proxy的网关，这可能代表了更高级的网络控制、安全策略或性能优化能力。其依赖的 `#3818`（无感切换网关）也同步更新，说明团队正精心构建一个平滑的迁移路径。

#### **5. Bug 与稳定性**
今日报告的Bug级别明确，且修复状态良好。
*   **高严重度 - 已修复**: **Issue #3862 [CLOSED]** - Codex设备配对失败。
    *   **描述**: 在全新安装并使用Iron Proxy网关的向导流程中，Codex无法完成登录，问题根源在于向导进程中过时的提供者契约。
    *   **修复**: 已有对应的修复PR `#3863` 并被合并，问题得到根本解决。
    *   **链接**: `nanocoai/nanoclaw/issues/3862`
*   **其他稳定性工作**: 多个PR（如 `#3861`, `#3866`）专注于修复向导流程中的边缘情况和组件启动时序问题，整体提升了安装和运行的可靠性。

#### **6. 功能请求与路线图信号**
今日无新的功能请求型Issue提出，但通过分析待合并的PR，可以窥见路线图方向：
*   **下一代提供者**: **PR #3356 [OPEN]** 和 **PR #3355 [OPEN]** 均来自 `zvi-fried`，旨在添加对 **Cursor Agent SDK** 的支持。这强烈暗示项目路线图将包括对更多前沿AI编码助手的集成，以保持其多功能性。
*   **部署灵活性**: CDSS 相关PR的合并以及Iron Proxy网关的推进，表明路线图正朝着**更灵活、更易于大规模部署和管理**的方向发展。

#### **7. 用户反馈摘要**
今日无直接的用户评论反馈。但从已关闭的Bug Issue `#3862` 可以推断，**新用户在首次配置，特别是涉及高级网关（Iron Proxy）和特定提供者（Codex）的复杂场景时，会遇到安装失败的问题**。团队对此的快速响应和修复表明了对用户体验（尤其是onboarding流程）的高度重视。

#### **8. 待处理积压**
当前数据中未显示有长期未响应的重大Issue或PR。所有近期活跃的PR均有核心团队成员参与，响应迅速。需持续关注两个长期开放的Cursor相关PR（`#3356`, `#3355`），它们虽然已存在一段时间，但代表了明确的战略方向，需确保其能顺利集成。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>



好的，这是根据您提供的 GitHub 数据生成的 IronClaw 项目动态日报。

---

### **IronClaw 项目动态日报 (2026-09-23)**

#### **1. 今日速览**
IronClaw 项目在 2026-09-23 日的活跃度呈现 **“开发推进、社区静默”** 的特点。核心开发活动集中于三个待合并的 Pull Request，分别涉及主机运行时功能增强、WebUI 交互体验优化和国际化支持扩展。社区层面无新 Issue 产生，讨论热度较低，表明用户反馈周期处于相对平静期。整体项目健康度稳定，开发节奏有序。

#### **2. 版本发布**
*   **无新版本发布。** 最新 Releases 为空。

#### **3. 项目进展**
今日有 3 条 Pull Requests 处于待合并状态，分别推进了不同层面的功能：

*   **核心功能增强 (PR #8108):** 开发者 `Bortlesboat` 提交了一个关键修复，为 `builtin.time` 函数增加了 `operation: "shift"` 操作。此功能允许对时间进行偏移计算（如增加/减少指定天数、小时等），并支持将结果与输入时间或当前时间结合，输出多种格式（ISO、Unix时间戳等）。这显著增强了项目内置的时间处理能力，减少了用户对复杂外部库的依赖。
    *   **链接:** [nearai/ironclaw PR #8108](https://github.com/nearai/ironclaw/pull/8108)

*   **用户体验优化 (PR #8092):** 针对 WebUI 聊天输入框的交互问题，开发者 `huiq777` 实施了一项重要修复，旨在**保留输入法（如中文、日文IME）的组合输入状态**。该 PR 处理了 Safari 浏览器在输入法组合完成时错误触发发送逻辑的边缘情况，并增加了回归测试以确保稳定性。此修复对于非英语用户至关重要，能有效避免输入中断和错误发送。
    *   **链接:** [nearai/ironclaw PR #8092](https://github.com/nearai/ironclaw/pull/8092)

*   **国际化推进 (PR #8107):** 同样由 `huiq777` 提交，该 PR 为 WebUI 添加了 **意大利语 (it) 语言包**。这是第十二个官方支持的界面语言，且翻译文件包含了完整的键值对，确保无字符串回退到英语，体现了项目对翻译质量的重视。此工作响应了社区 Issue #7855 的请求。
    *   **链接:** [nearai/ironclaw PR #8107](https://github.com/nearai/ironclaw/pull/8107)

**进展评估:** 项目整体向前迈进了一步，覆盖了功能性、可用性和生态建设三个重要维度。

#### **4. 社区热点**
*   **无活跃讨论。** 过去24小时无新 Issue 或 PR 评论产生，暂无社区热点话题。

#### **5. Bug 与稳定性**
*   **无新 Bug 报告。** 过去24小时未关闭任何 Issue，且无新的崩溃或回归问题报告。
*   **已识别的潜在风险点:** PR #8092 本身是针对 WebUI 输入法兼容性这一已知稳定性问题的修复，其合并将提升特定场景下的用户体验稳定性。

#### **6. 功能请求与路线图信号**
*   **直接路线图信号:** PR #8107 (意大利语 locale) 是社区功能请求 (Issue #7855) 的直接成果，表明多语言支持是项目明确的发展方向。未来可能会有更多语言被添加。
*   **潜在功能扩展:** PR #8108 (时间偏移操作) 属于对核心内置功能的增强，这类底层能力的完善通常会间接支持更复杂的用户工作流和未来的新功能开发。

#### **7. 用户反馈摘要**
*   **无新反馈。** 今日无新 Issue 或评论，无法提炼新的用户痛点或使用场景。

#### **8. 待处理积压**
*   **无长期积压项。** 根据提供的数据，当前没有标记为长期未响应的重要 Issue 或 PR。

---
**报告生成说明:** 本报告基于截至 2026-09-23 的 GitHub 公开数据生成，聚焦于项目活跃度、代码进展和社区动态。所有链接和数据均来源于 `nearai/ironclaw` 仓库。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



# LobsterAI 项目动态日报 - 2026-09-23

## 1. 今日速览
LobsterAI 项目在 2026-09-23 呈现出**中等活跃度**的开发状态。今日发布了一个新版本（2026.9.22），集中修复了 IM 模块的定时任务恢复、飞书消息送达以及 OpenClaw 网关在 Windows 上的启动稳定性问题。PR 活跃度较高（12 条），但大部分为修复性提交且已关闭，表明团队正在集中处理技术债务和稳定性问题。Issues 方面新增/活跃 5 条，但多为历史遗留问题，社区当前讨论热度有所下降。

## 2. 版本发布
**发布版本**: 2026.9.22
**发布链接**: [LobsterAI 2026.9.22](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.9.22)

### 更新内容
- **修复 IM 模块**: 恢复了原生的定时任务功能，并修复了飞书（Feishu）消息的送达问题。
- **修复 OpenClaw 网关**: 解决了 Windows 网关在特定情况下异常退出的问题，并修复了启动流程。

### 破坏性变更
根据更新日志，本次发布未提及破坏性变更。

### 迁移注意事项
- 用户从旧版本升级到 2026.9.22 时，应重点关注 IM 模块的定时任务配置是否已正确恢复。
- 对于使用飞书集成的用户，消息送达稳定性应得到预期改善。
- Windows 用户如遇到过网关启动失败问题，升级后应能解决。

## 3. 项目进展
今日合并/关闭了 10 条 PR，主要聚焦于 OpenClaw 网关的稳定性修复和功能增强，项目整体在**稳步修复和优化**中。

- **OpenClaw 网关稳定性**: 多个 PR 针对网关启动、模型策略迁移、技能配置同步等问题进行了修复，显著提升了网关的健壮性。
  - [fix(openclaw): avoid unnecessary Clawguard startup lease waits](https://github.com/netease-youdao/LobsterAI/pull/2746) - 减少不必要的启动等待。
  - [fix(openclaw): recover invalid generated model policies on upgrade](https://github.com/netease-youdao/LobsterAI/pull/2745) - 修复升级后无效模型策略导致网关无法启动的问题。
  - [fix(openclaw): stabilize skill config sync and timeout recovery](https://github.com/netease-youdao/LobsterAI/pull/2742) - 稳定技能配置同步和超时恢复机制。
  - [fix(plugins): support legacy nsp-clawguard startup](https://github.com/netease-youdao/LobsterAI/pull/2741) - 支持旧版安全插件启动。

- **功能增强与性能优化**:
  - [feat(cowork): stream live per-step turn progress and diff stats](https://github.com/netease-youdao/LobsterAI/pull/2749) - 增强了协作会话的实时进度和差异统计展示。
  - [fix(openclaw): keep active exec sessions below system prompt cache boundary](https://github.com/netease-youdao/LobsterAI/pull/2744) - 优化了活动执行会话的管理，避免频繁失效提供商缓存。

- **其他修复**:
  - [fix(openclaw): raise Kimi K3 maxTokens and localize stream wrapper](https://github.com/netease-youdao/LobsterAI/pull/2748) - 提升了 Kimi K3 模型的输出 token 上限。
  - [fix(openclaw): backport native koffi Windows private directory patch](https://github.com/netease-youdao/LobsterAI/pull/2743) - 为 Windows 私有目录打补丁。
  - [fix(theme): restore CJK body weight to 400 to keep bold text distinguishable](https://github.com/netease-youdao/LobsterAI/pull/2740) - 修复了中日韩字体的粗细显示问题。

## 4. 社区热点
今日社区讨论热度相对平淡，无高评论数或高👍数的 Issues/PRs。社区反馈主要集中在历史遗留问题上。

## 5. Bug 与稳定性
今日报告的 Bug 多为历史遗留问题，按严重程度排列如下：

- **严重**: 配置文件和工作空间文件在重启后被重置 ([#1006](https://github.com/netease-youdao/LobsterAI/issues/1006))
  - **状态**: 已报告，暂无 fix PR。
  - **影响**: 用户自定义配置（如 `openclaw.json`）和文件（如 `AGENTS.md`）在应用重启后丢失，严重影响可用性。

- **中等**: 微信回复没有与客户端同步 ([#986](https://github.com/netease-youdao/LobsterAI/issues/986))
  - **状态**: 已标记为 stale，暂无 fix PR。
  - **影响**: 影响微信机器人的用户体验，导致回复延迟和消息风暴。

- **中等**: 启动 app 报错 Failed to start Web Search service ([#981](https://github.com/netease-youdao/LobsterAI/issues/981))
  - **状态**: 已标记为 stale，暂无 fix PR。
  - **影响**: 导致应用部分功能不可用。

- **低**: 预设 Agents 的国际化适配问题 ([#982](https://github.com/netease-youdao/LobsterAI/issues/982))
  - **状态**: 已标记为 stale，暂无 fix PR。
  - **影响**: 影响多语言用户的体验。

- **低**: 无法通过按下新的组合键修改快捷键 ([#983](https://github.com/netease-youdao/LobsterAI/issues/983))
  - **状态**: 已标记为 stale，暂无 fix PR。
  - **影响**: 影响用户自定义快捷键的需求。

## 6. 功能请求与路线图信号
- **功能请求**: 社区当前无新的功能请求提出，历史 Issues 中的请求（如配置持久化、快捷键自定义）仍未被处理。
- **路线图信号**: 从已合并的 PR 来看，项目当前的重点是**稳定性修复**和**现有功能增强**，而非大规模的新功能开发。特别是对 OpenClaw 网关的集中修复，表明团队正在巩固核心组件的可靠性。

## 7. 用户反馈摘要
从 Issues 评论中提炼的用户痛点如下：

- **配置重置问题**: 用户对配置文件和工作空间在重启后被重置感到非常困扰，这迫使他们使用定时任务作为临时解决方案，说明当前的保护机制过于激进，严重影响了正常工作流程。
- **微信同步问题**: 用户反馈微信机器人的回复体验不佳，等待时间长且消息发送集中，希望有更实时的同步机制。
- **功能缺陷**: Web Search 服务启动失败、快捷键修改无效等问题也被用户指出，影响了核心功能的可用性。

## 8. 待处理积压
以下为长期未响应的重要 Issue，需维护者关注：

- **#1006**: 配置文件和工作空间文件在重启后被重置 - **严重**，影响所有用户的核心工作流程。
- **#986**: 微信回复没有与客户端同步 - **中等**，影响特定平台用户体验。
- **#981**: 启动 app 报错 Failed to start Web Search service - **中等**，影响功能可用性。
- **#982**: 预设 Agents 的国际化适配问题 - **低**，影响非中文用户体验。
- **#983**: 无法通过按下新的组合键修改快捷键 - **低**，影响用户自定义需求。

此外，PR **#2727** (persist OpenClaw entry hooks across sync) 和 **#1277** (bump electron group) 仍处于打开状态，需持续关注其进展。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>



根据您提供的 Moltis (github.com/moltis-org/moltis) 项目数据，以下是 **2026-09-23** 的项目动态日报：

---

### 1. 今日速览
Moltis 项目在 2026-09-23 日整体活跃度较低，处于常规的自动化维护状态。过去 24 小时内无新 Issue 产生、无版本发布、无 Pull Request 合并。项目唯一的动态为 Dependabot 提交的底层依赖更新（PR #1284）。整体来看，项目代码库健康度稳定，暂无社区冲突或紧急 Bug 汇报，核心开发可能处于阶段性静默期。

---

### 2. 版本发布
*（本日无新版本发布，按格式省略详细说明。）*

---

### 3. 项目进展
*   **今日合并/关闭的重要 PR**：无（今日无 PR 合并或关闭记录，核心功能无新增代码合入）。
*   **当前待处理 PR**：[PR #1284](https://github.com/moltis-org/moltis/pull/1284)（状态：Open）。该 PR 属于常规依赖维护，将 `wasmtime-wasi` 版本从 36.0.9 提升至 36.0.11。
*   **进展评估**：项目今日无功能迭代或实质性 Bug 修复。整体代码库目前高度依赖自动化工具进行底层依赖（如 WebAssembly 运行时 `wasmtime`）的日常维护与安全对齐。

---

### 4. 社区热点
*   **今日讨论热点**：无。过去 24 小时内无新 Issues 或高互动的社区讨论。
*   **唯一活跃 PR 数据**：[PR #1284](https://github.com/moltis-org/moltis/pull/1284) 目前无社区评论（Comments: 0）和点赞（👍: 0），属于纯 Bot 提交，尚未引发维护者或社区成员的公开评审讨论。

---

### 5. Bug 与稳定性
*   **Bug 报告**：无（今日新增 Issue 数为 0，无用户报告崩溃、功能异常或回归问题）。
*   **稳定性评估**：当前项目运行稳定性良好，无已知未解决的严重线上故障。
*   **潜在稳定性利好**：待合并的 `wasmtime-wasi` 版本升级（36.0.9 $\rightarrow$ 36.0.11）属于上游 Bytecode Alliance 发布的关键运行时更新，通常包含性能优化、内存安全改进和 Bug 修复。建议维护者在合并前进行基础 CI 测试，以确保 WASI 接口层无破坏性变更。

---

### 6. 功能请求与路线图信号
*   **新功能请求**：无（无新 Issues 提出）。
*   **路线图信号**：当前无直接面向用户的新功能 PR。唯一的依赖更新（PR #1284）表明项目底层正在默默跟进 WebAssembly 系统接口（WASI）的最新标准，为未来支持更复杂的沙箱环境和边缘运行时场景积蓄底层能力。

---

### 7. 用户反馈摘要
*   **用户反馈**：今日无新增 Issue 评论，无新增用户痛点、使用场景分享或满意度评价。

---

### 8. 待处理积压
*   **长期未响应 Issue**：暂无数据。
*   **需维护者关注的待合并项**：[PR #1284](https://github.com/moltis-org/moltis/pull/1284)。该 PR 已生成超过 1 天（创建于 2026-09-22）。由于涉及 `wasmtime` 大版本迭代，建议项目核心维护者适时介入，进行手动代码审查与本地兼容性测试，避免自动化合并后引入底层运行时异常。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>



根据您提供的 CoPaw（数据源指向 QwenPaw / agentscope-ai/QwenPaw）GitHub 项目数据，为您生成 **2026-09-23** 的项目动态日报如下：

---

# 📊 CoPaw 项目动态日报 (2026-09-23)

## 1. 今日速览
*   **整体状态与活跃度评估**：今日项目保持了极高的开发活跃度。过去24小时内共更新了 **50条 PR**（待

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>



好的，这是根据您提供的数据生成的 ZeptoClaw 项目动态日报。

---

### **ZeptoClaw 项目动态日报 - 2026-09-23**

**项目主页：** [github.com/qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)

---

#### **1. 今日速览**

ZeptoClaw 项目在 2026-09-23 日处于低活跃度的维护状态。项目无新版本发布，无新的 Issue 创建或关闭，社区无直接交互。今日唯一的动态是 3 个由 Dependabot 自动化生成的依赖更新 Pull Request，涉及 Docker、GitHub Actions 和 Rust 生态。整体来看，项目当前正专注于基础设施和依赖项的维护，为后续开发保持代码库的健康与安全。

#### **2. 版本发布**

无新版本发布。

#### **3. 项目进展**

今日无 PR 被合并或关闭，所有 3 个 PR 均处于待合并状态。这些 PR 均为自动化依赖更新，旨在保持项目构建流程和运行时依赖的最新状态，是项目健康度的重要保障。

*   **待处理 PR #704：** 更新 `docker/build-push-action` 至 7.3.0。
    *   **链接：** [PR #704](https://github.com/qhkm/zeptoclaw/pull/704)
    *   **影响：** 此更新可能包含 Docker 构建工具的性能优化或安全修复，有助于提升 CI/CD 流水线的效率与可靠性。

*   **待处理 PR #706：** 更新 `actions/checkout` 至 7.0.1。
    *   **链接：** [PR #706](https://github.com/qhkm/zeptoclaw/pull/706)
    *   **影响：** 作为 GitHub Actions 工作流中最基础的 Action，更新可能带来稳定性提升或新功能，确保代码检出步骤的顺畅。

*   **待处理 PR #705：** 更新 Rust 库 `mail-parser` 至 0.11.9。
    *   **链接：** [PR #705](https://github.com/qhkm/zeptoclaw/pull/705)
    *   **影响：** 该库用于邮件解析，更新可能包含 bug 修复、性能改进或对新邮件格式的支持，直接关系到项目核心功能的稳定性。

#### **4. 社区热点**

今日无社区讨论。所有 PR 和 Issue 的评论数均为 0，无 👍 反应，表明社区成员在今日未与项目进行直接互动。

#### **5. Bug 与稳定性**

今日无新的 Bug 报告或崩溃问题提交。项目当前无已知的稳定性问题。

#### **6. 功能请求与路线图信号**

今日无新的功能请求提出。从现有的 3 个待处理 PR 来看，项目路线图的近期信号是**优先保障基础设施的稳定与更新**，而非立即开发新功能。这通常是为下一阶段更复杂的开发工作打下坚实基础。

#### **7. 用户反馈摘要**

今日无直接的用户反馈。Issue 列表为空，无法提炼用户痛点或使用场景。

#### **8. 待处理积压**

目前需提醒维护者关注以下待处理的依赖更新 PR，建议及时合并以保持项目健康：

*   **[PR #704](https://github.com/qhkm/zeptoclaw/pull/704)** - `docker/build-push-action` 依赖更新
*   **[PR #706](https://github.com/qhkm/zeptoclaw/pull/706)** - `actions/checkout` 依赖更新
*   **[PR #705](https://github.com/qhkm/zeptoclaw/pull/705)** - `mail-parser` 依赖更新

---

**报告生成说明：** 本报告基于提供的数据自动生成，旨在客观反映项目动态。数据源截止至 2026-09-23 过去 24 小时。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



# ZeroClaw 项目动态日报（2026-09-23）

## 1. 今日速览
过去24小时内，ZeroClaw 项目活跃度极高，呈现出密集的 bug 修复与功能迭代态势。项目当前无新版本发布，但社区围绕**安全加固**、**WhatsApp Web 通道体验优化**、以及**核心架构 RFC**（如多 Agent 资源限制、消息回执）展开了深入讨论。整体来看，项目健康度良好，维护者与社区贡献者（尤其是 `Audacity88`、`JordanTheJet`、`RustLangLatam` 等核心成员）正合力推进项目向更稳定的多租户与多通道方向演进。

## 2. 版本发布
*   **无新版本发布**。今日无正式 Release 更新。

## 3. 项目进展
今日共有 20 条 PR 状态变更（合并或关闭），标志着多项关键修复与文档工作的落地：
*   **安全与依赖治理**：`#11038` 合并了针对 `imbl-sized-chunks` 双重释放漏洞（RUSTSEC-2026-0292）的忽略策略，保障了 CI 安全检查的顺利进行。
*   **核心机制修复**：`#10958`（中断范围键边界碰撞）与 `#10953`（Seam sanitizers 重写签名推理）的关闭，显著提升了通道通信与 Anthropic 提供商交互的稳定性。
*   **文档与治理规范化**：`#11042` 与 `#11016` 的关闭，正式将“轻量级核心替代优先集成策略”写入 standing docs，为后续的功能替换与迁移评审提供了权威依据。
*   **运行时历史裁剪对齐**：通过 `#9368` 的推进，历史裁剪逻辑已统一解释为整轮次限制，避免了工具密集型会话中频繁裁剪导致的 Prompt Caching 失效问题。

## 4. 社区热点
今日社区讨论集中在以下高评论数的 Issues 上，反映了生态与架构层面的深层诉求：
*   **技能发现标准化（`#4853`，8条评论）**：社区高度关注通过 `.well-known` URI 标准从官方索引安装技能的提案。这表明 ZeroClaw 正积极对接 Agent Skills 生态，试图建立与 Vercel、Cloudflare 等主流平台的互操作能力。
*   **多 Agent 资源与身份治理 RFC（`#10970`、`#10930`、`#10929`、`#11027`）**：由 `JordanTheJet` 和 `Audacity88` 发起的系列 RFC，讨论了宿主机并发限制、人类交互持久化原语、 outbound 消息回执以及 Agent 间会话通信。这表明社区正着手解决“单机运行多 Agent”时的稳定性与可观测性瓶颈。
*   **本地化与用户面输出治理（`#9972`，4条评论）**：一项长期的清理 Tracker，旨在杜绝 CLI、Tool 和引导流程中绕过 Fluent 本地化边界的硬编码文本，以满足日益增长的全球化部署需求。

## 5. Bug 与稳定性
今日报告并关闭了多个中高严重度 Bug，同时暴露出一些新的安全隐患：
*   **高危安全漏洞（S0 - 数据丢失/安全风险）**：
    *   **`#11058` [OPEN]**：当 `block_high_risk_commands` 启用时，若高风险命令字面出现在 `allowed_commands` 中，会绕过硬拦截且无审批无日志。**（尚无 Fix PR，急需维护者响应）**。
    *   **`#9392` [CLOSED]**：LINE 群组消息绕过白名单与配对握手（已关闭，已修复）。
    *   **`#9187` [CLOSED]**：微信同步光标持久化在消息入队前，崩溃导致丢消息（S0，已关闭，已修复）。
*   **工作流与功能阻塞（S1）**：
    *   **`#10225` [OPEN]**：ZeroCode RPC 会话无法通过通道绑定的工具触达配置的外部通道（如 Git channel），阻塞了无头部署场景。
    *   **`#10674` [CLOSED]**：历史裁剪停在上限导致工具重裁剪并破坏缓存（已由 `#9368` 等 PR 修复）。
*   **降

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*