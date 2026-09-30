# OpenClaw 生态日报 2026-10-01

> Issues: 483 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-30 22:16 UTC

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

Thinking Process:

1.  **Understand the Goal**: The user wants a daily project report (dated 2026-10-01, but based on the provided data which seems to be a snapshot around late September 2026, specifically focusing on issues updated on 2026-09-30 and a release v2026.9.7) for the open-source project "OpenClaw" (github.com/openclaw/openclaw). The report needs to be in Chinese, structured into specific sections, objective, professional, and data-driven, with GitHub links included.

2.  **Analyze the Input Data**:
    *   **Date of report**: 2026-10-01 (as requested, though data updates are mostly 2026-09-30).
    *   **Issues**: 483 updated in the last 24h (325 new/active, 158 closed).
    *   **PRs**: 500 updated (322 pending merge, 178 merged/closed).
    *   **New Releases**: v2026.9.7 (518 direct commits, 2,818 pull requests, 331 contributors).
    *   **Top Issues (by comments)**:
        *   #143524 (97 comments): Agent SQLite WAL grows to 1.4–2.8 GB in days despite wal_autocheckpoint=1000; blocks gateway startup (Windows, 2026.9.2/9.3). P0, crash-loop, gold shrimp.
        *   #153257 (40 comments): OpenClaw 2026.9.5 Turned a Stable Environment Into an 8-Hour Failure Recovery Session. P0, crash, gold shrimp.
        *   #44925 (30 comments): Subagent completion silently lost — no retry, no notification, no auto-restart on timeout. P1, diamond lobster.
        *   #149538 (22 comments): main: Gateway reaches ready but never serves; every /health probe times out while the event loop is starved (632-agent fleet). P0, gold shrimp.
        *   #119720 (21 comments): Synchronous agent persistence and transcript maintenance block the Gateway event loop at scale. P1, diamond lobster.
        *   #102175 (20 comments): embedded prompt cache breaks across room-event, policy, and Responses boundaries. P2, diamond lobster.
        *   #97616 (16 comments): OpenClaw leaks unreaped hook/tool child processes, causing zombie accumulation and runtime degradation. P1, gold shrimp.
        *   #157325 (16 comments): A stuck agent-DB resource makes every agent's replies fail with the generic failure copy until the gateway is restarted. P0, diamond lobster.
        *   #148707 (15 comments): reply lost with 'Reply operation has no active tool authority snapshot' when a second run displaces an in-flight turn (2026.9.4 regression). P1, platinum hermit.
        *   #144809 (14 comments): claude-cli: turns longer than RUN_STALE_TAKEOVER_MS lose their entire generated reply. P1, diamond lobster.
        *   #159662 (13 comments): prepared-model-catalog.worker.js: unbounded memory leak, ~4-5 GB/h, provider-agnostic. P0, silver shellfish.
        *   #159596 (13 comments): Gateway memory sawtooth on 2026.9.6 — prepared-model-catalog worker grows to the full heap ceiling. P1, silver shellfish.
        *   #157160 (13 comments, CLOSED): Gateway crash-loops on plugin-doctor-post-session-state even after fixing busyTimeoutMs=0. P0, platinum hermit.
        *   #159612 (13 comments): Subagent completion settlement retries forever: "owner changed before settlement" re-injects result every turn. P0, platinum hermit.
        *   #159094 (12 comments): 2026.9.6 Gateway owns state-lifecycle lease but internal workers report another OpenClaw process owns state-lifecycle. P1, silver shellfish.
        *   #154812 (11 comments): Gateway: runaway RSS outside V8 heap causes OOM and shutdown timeout. P0, silver shellfish.
        *   #157630 (11 comments): An explicit --max-old-space-size silently defeats a worker's resourceLimits. P1, diamond lobster.
        *   #158190 (10 comments): Control UI marks an accepted queued message 'Waiting for reconnect' on a live connection. P2, platinum hermit.
        *   #160521 (10 comments): Gateway crash: state DB read-admission seal -> "Worker environment inventory has closed" -> unhandled rejection in reconcileActive. P0, platinum hermit.
        *   #129314 (10 comments): Hidden "next-turn runtime context" message occasionally dispatched as a standalone visible turn. P1, gold shrimp.
        *   #70903 (10 comments): Persistent file-based provider cooldown blocks user for hours after billing recovery. P0, diamond lobster.
        *   #146004 (10 comments): Subagent completion triggers unwanted channel-less dashboard heartbeat turn on 2026.9.3. P2, silver shellfish.
        *   #118885 (10 comments): large OpenClaw SQLite databases run redundant full integrity checks during one startup. P1, diamond lobster.
        *   #158126 (9 comments): Gateway shutdown step gateway-server-close fails: "Worker environment inventory has closed" -> exit 1. P0, platinum hermit.
        *   #139485 (9 comments): Managed upgrade leaves gateway offline while finalization remains nonterminal. P1, silver shellfish.
        *   #150635 (9 comments): short-term recall retention evicts recalled entries nightly, so dreaming deep phase never promotes. P2, diamond lobster.
        *   #161290 (9 comments, CLOSED): Session SQLite migration recovery report. P0, platinum hermit.
        *   #114234 (8 comments): Usage-cost refresh lock is never releasable after a restart that reuses the owner PID (containers). P1, diamond lobster.
        *   #115642 (8 comments): Billing cooldown outlives the outage on subscription auth. P0, diamond lobster.
        *   #141102 (8 comments): Collection-review jobs can remain enabled when rooted execution is deterministically rejected. P2, diamond lobster.
        *   #161654 (8 comments, CLOSED): WorkerTaskError 'unavailable' (DataCloneError) on Windows when session-history read carries the win32 process.env Proxy. P1, message-loss.
        *   #114154 (8 comments): bundle-mcp: tool passes policy but agent sessions never bundle it. P1, gold shrimp.
        *   #118185 (8 comments): One claude-cli turn is written to the transcript twice by two writers. P1, diamond lobster.
        *   #118785 (8 comments): QA: primary proof for containers and external app SDK. P2, off-meta tidepool.
        *   #121729 (8 comments, CLOSED): Feature: Friendly daily spending allowances for agents running in the background. P3, off-meta tidepool.
        *   #157617 (8 comments): Session writer queue waits up to minutes with repeated agent DB integrity/maintenance work on 2026.9.6. P1, platinum hermit.
        *   #160548 (8 comments): 2026.9.6 prepared-model-catalog worker leaks ~1 GiB per 5 min; each memory reclamation supersedes the runtime publication and kills every waiting turn. P1, silver shellfish.
        *   #147420 (7 comments): computer execution is never released on the MCP computer tool path, leaving COMPUTER_HOST_BUSY with no timeout. P1, diamond lobster.
        *   #158922 (7 comments): claude-cli models report `available: false` after Gateway restart on main. P2, diamond lobster.
        *   #160610 (7 comments): Discord autoPresence always reports "runtime degraded" when model credentials come from SecretRef/env. P2, platinum hermit.
        *   #115546 (7 comments): CLI-budget compaction: timeout fires far below deadline, 100% failure rate on large sessions. P1, diamond lobster.
        *   #138599 (7 comments): Auto-compaction deadlocks when session exceeds compaction model context window. P1, gold shrimp.
        *   #154834 (7 comments): failed subagent delivery recurs in every turn's runtime context. P2, diamond lobster.
        *   #108395 (7 comments): Assistant generates fake "Human: [timestamp]" user messages as output text. P1, silver shellfish.
        *   #157575 (7 comments): Managed Gateway heap flag overrides per-worker old-space limits. P1, diamond lobster.
        *   #132303 (7 comments): agents.list[].tools.deny is not enforced for the claude-cli backend. P1, diamond lobster.
        *   #74481 (6 comments): dynamic catalog refresh from configured provider /v1/models. P2, diamond lobster.
        *   #158239 (6 comments): Gateway fails to start with "Session membership store changed before publication" under JS fs-safe fallback on slower hosts (kernel < 5.6). P0, diamond lobster.
        *   #157126 (6 comments): claude-cli MCP bridge inherits the request scope that first started it. P1, diamond lobster.
        *   #161734 (6 comments): Doctor archive migration repeats expensive admission checks in two transactions per unchanged archive. P1, diamond lobster.

    *   **Top PRs (by comments/activity)**:
        *   #160181: fix(cli): release plugin resources when help finishes (waiting on author).
        *   #162173: fix(ui): stop showing old publication failures as PR errors.
        *   #121195: fix(agents): settle yielded requester completions exactly once (XL, P1, needs proof).
        *   #136337: fix(ui): request one usage row for Model Providers cost aggregates (XS, ready for maintainer).
        *   #162167: refactor(agents): share CLI candidate binding lifecycle (XL, P3).
        *   #161709: feat(macos): host the Gateway on bundled Bun (XL, P2, needs proof).
        *   #162148: docs: link contributor profiles in the 2026.9.3 release page.
        *   #162144: test(gateway): name the startup phase that overruns the catalog deadline.
        *   #152205: fix(agents): steer background-exec completions into busy sessions (needs proof).
        *   #162178: refactor(agents): simplify candidate input normalization.
        *   #159693: fix(talk): preserve source outcomes when native tool presentation fails (waiting on author).
        *   #162056: fix(update): keep retained deleted-agent databases from blocking upgrades (P0, compatibility, session-state, security).
        *   #162016: perf(gateway): coalesce observed project discovery (waiting on author).
        *   #153340: feat: optionally omit tools on conversational turns (XL, P2, needs proof).
        *   #132838: fix(tasks): clear stale blocked state after requester delivery (needs proof).
        *   #150246: test(agents): run the retry-after e2e against the built runtime (ready for maintainer).
        *   #162171: fix(github-copilot): add Claude Sonnet 5.5 and Opus 5.5 to model catalog.
        *   #161019: fix: hide agents excluded by operator roles from the picker (ready for maintainer).
        *   #161676: refactor: simplify session assignment across channels (ready for maintainer).
        *   #161926: fix(setup): stop offering Codex re-login when the existing login cannot be read (waiting on author).
        *   #162006: fix(doctor): avoid per-archive delays for unchanged transcripts (needs proof).
        *   #132229: feat(meta): add muse-image as a first-class image-generation provider (needs proof).
        *   #162174: refactor(channels): finish shared draft-stream ownership (ready for maintainer).
        *   #162145: refactor(cli): share Gateway configuration and service application (CLOSED).
        *   #127796: feat(agent): allow explicit one-shot tools (needs proof).
        *   #162139: refactor(storage): retain SQLite execution through cleanup (security-sensitive).
        *   #162038: build(deps): bump @openclaw/fs-safe to 0.21.3 (waiting on author).
        *   #162177: feat(memory): let the memory slot own the pre-compaction flush.
        *   #162168: fix(test): avoid ancestor locks in oxlint fixtures (CLOSED).
        *   #162175: feat(memory): add a provider-neutral memory provider runtime.

3.  **Drafting the Sections**:

    *   **Section 1: 今日速览 (Today's Overview)**
        *   Summarize overall status. High activity (483 issues, 500 PRs updated in 24h).
        *   New release v2026.9.7 published (518 commits, 2818 PRs, 331 contributors).
        *   Key theme: High community engagement but significant stability/performance challenges, especially regarding memory leaks (prepared-model-catalog worker), SQLite WAL file bloat, and event loop starvation at scale. On the positive side, active refactoring (CLI, agents, channels, memory) and feature additions (Bun on macOS, memory provider runtime) are moving the project forward.

    *   **Section 2: 版本发布 (Release)**
        *   Release: v2026.9.7 (openclaw 2026.9.7).
        *   Stats: 518 direct commits, 2,818 pull requests, 331 contributors.
        *   Changes: Release notes and changelog are available. (Note: The prompt text cuts off at "https://docs.openclaw.ai/rel", but I can mention the release contains critical fixes, particularly around doctor migration, update processes, and agent database handling based on the issues and PRs targeting these areas, like #162056 and #162006).
        *   Migration/Compatibility notes: Issues like #157160 (crash-loop on plugin-doctor-post-session-state after schema migration 17->18) and #161290 (session SQLite migration recovery) suggest database schema migrations are a critical focus. Also, kernel compatibility issues like #158239 (requires kernel < 5.6 or openat2 support for fs-safe fallback).

    *   **Section 3: 项目进展 (Project Progress - PRs)**
        *   Highlight key merged/closed or active PRs.
        *   *Refactoring & Architecture cleanup*: #162145 (share Gateway configuration), #162167 (share CLI candidate binding lifecycle), #162174 (finish shared draft-stream ownership), #162139 (retain SQLite execution through cleanup).
        *   *Feature Enhancements*: #161709 (macOS Gateway on bundled Bun - major packaging shift), #162175 (provider-neutral memory provider runtime), #162177 (memory slot owns pre-compaction flush), #132229 (muse-image as image-generation provider).
        *   *Bug Fixes*: #162056 (retained deleted-agent databases blocking upgrades - critical for update flow), #162006 (avoid per-archive delays for unchanged transcripts in doctor --fix), #161019 (hide excluded agents from picker), #161926 (stop offering Codex re-login when login unreadable).
        *   Overall progress: Project is undergoing massive internal modernization (Bun, shared state lifecycle, memory provider abstraction) while trying to stabilize a complex multi-agent gateway system.

    *   **Section 4: 社区热点 (Community Hotspots)**
        *   Most commented Issue: #143524 (97 comments) - Agent SQLite WAL grows to 1.4–2.8 GB in days. Users are desperate as it blocks gateway startup on Windows. Needs manual checkpoint.
        *   Second: #153257 (40 comments) - 2026.9.5 turned stable environment into 8-hour failure recovery. Users regret upgrading.
        *   Third: #44925 (30 comments) - Subagent completion silently lost (no retry, no notification). Critical for task orchestration reliability.
        *   PR Hotspot: #161709 (macOS on Bun) and #162175 (provider-neutral memory) represent strategic architectural shifts that the community watches closely.
        *   Underlying demands: Stability in multi-agent fleet management, reliable subagent lifecycle, transparent memory usage, and less disruptive updates.

    *   **Section 5: Bug 与稳定性 (Bugs & Stability)**
        *   Sort by severity (P0 / crash-loop / gold shrimp / diamond lobster).
        *

---

## 横向生态对比



以下是根据各项目 2026-10-01 的 GitHub 动态生成的「今日重点」摘要：

### 1. 重要更新（今日 Top 8）

*   **OpenClaw 发布 v2026.9.7 版本**
    *   **项目：** [OpenClaw](https://github.com/openclaw/openclaw)
    *   **内容：** 该版本包含 518 个直接提交、2818 个 PR 和 331 位贡献者。但社区迅速反馈了新版本的稳定性问题，包括 Agent SQLite WAL 文件膨胀至 1.4–2.8 GB 阻塞网关启动、事件循环饥饿导致 Gateway 达到 ready 状态但永无服务等。
    *   **影响：** 作为核心参照项目，该版本在带来大量更新的同时，其多智能体并发下的资源管理和 I/O 阻塞问题成为社区当前最紧迫的痛点。

*   **CoPaw 发布 v2.2.2-beta.4 版本**
    *   **项目：** [CoPaw](https://github.com/agentscope-ai/CoPaw)
    *   **内容：** 新增了 `ReMeLightMemoryCard` 的重排序（Reranker）UI 配置面板，并拆分了控制台（Console）的聊天依赖项以优化加载性能。
    *   **影响：** 提升了内存管理功能的用户可配置性，并改善了桌面端控制台的交互体验。

*   **LobsterAI 修复 P2P 直连消息策略 Fail-open 安全漏洞**
    *   **项目：** [LobsterAI](https://github.com/netease-youdao/LobsterAI)
    *   **内容：** 针对 Issue #2784 的报告，维护者提交了修复 PR #2785。原 P2P 入站消息过滤器在策略非空但为 'disabled' 或空白名单时会放行任意发送者，修复后将策略改为默认拒绝（fail-closed）。
    *   **影响：** 及时封堵了 IM 网关权限模型中的安全缺陷，防止未授权用户绕过策略进行直连消息交互。

*   **ZeroClaw 推进 v0.9.0 网关分离与安全架构重构**
    *   **项目：

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**日期：** 2026-10-01
**数据来源：** [github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot)
**统计周期：** 过去 24 小时


## 1. 今日速览

NanoBot 今日呈现出**典型的高强度维护日**特征：过去 24 小时内 12 条 Issue 全部关闭，32 条 PR 更新中 24 条已合并/关闭，社区问题出清节奏明显加快。当日无新版本发布，项目处于**稳定迭代、集中交付修复**的阶段，活跃度评级为**高**。值得关注的是，通过多轮社区反馈驱动，今日关闭了多个积压已久的历史 Issue（最早回溯至 2026 年 3 月），项目健康度信号良好。


## 2. 版本发布

过去 24 小时无新版本发布。项目当前处于 PR 高频合入阶段，预计下一次版本发布将汇总近期修复成果。


## 3. 项目进展

今日合并/关闭的 24 条 PR 覆盖了 **TUI、WebUI、Providers、Agent 核心逻辑、测试基建** 等关键模块，整体向前迈进的幅度显著：

- **TUI 多维度修复密集落地**：修复了会话历史恢复读取旧字段导致的空白转录问题（[#5950](https://github.com/HKUDS/nanobot/pull/5950)），解决了 PickerMenu 选项溢出不可达的交互缺陷（[#5966](https://github.com/HKUDS/nanobot/pull/5966)），并修复了未识别终端主题时文字不可读的可访问性问题（[#5958](https://github.com/HKUDS/nanobot/pull/5958)）。此外，[#5981](https://github.com/HKUDS/nanobot/pull/5981) 使 `/goal` 命令可在活动回合期间接受请求，补齐了交互能力缺口。
- **Provider 层关键修复**：修复了 Responses 工具转换中 `strict` 参数被静默丢弃的问题，该问题可能导致可选参数变为必需、强制不兼容参数合并进同一调用（[#5938](https://github.com/HKUDS/nanobot/pull/5938)），优先级标记为 p1。
- **WebUI 渲染稳定性加固**：修复了已完成的 Markdown 被重复修补导致的尾随 `_` 残留（[#5989](https://github.com/HKUDS/nanobot/pull/5989)），以及延迟事件导致已完结回合被重新打开的处理指示器异常（[#5991](https://github.com/HKUDS/nanobot/pull/5991)）。
- **Agent 资源治理增强**：会话取消时广播到其拥有的运行时资源（工具、分离的子代理、Shell/CLI 进程树、回复计时器），实现更精准的会话级资源清理（[#5993](https://github.com/HKUDS/nanobot/pull/5993)）。
- **测试基建大幅瘦身**：跨 34 个文件整合冗余测试，净删 703 行，同时保留全部 171 个原始输入与断言（[#5907](https://github.com/HKUDS/nanobot/pull/5907)）。
- **文档治理启动**：根目录 `AGENTS.md` 被重构为任务文档链接与开发约束的索引，工程规约趋向模块化（[#5996](https://github.com/HKUDS/nanobot/pull/5996)）。


## 4. 社区热点

今日 Issue 讨论的热度集中在**多频道消息投递正确性**与**会话机制设计**两大主题：

- **[#5903 — Feishu 隐藏会话检查点标记泄露给用户](https://github.com/HKUDS/nanobot/issues/5903)**（评论数：5）：空闲 auto-compaction 触发后，内部使用的会话检查点标记文本（"Continue the active task from the working-memory checkpoint above"）被作为普通聊天消息投递到飞书用户端，暴露了内部实现细节。该问题受到了最广泛的关注，背后的核心诉求是：**内部系统提示与用户可见消息之间缺乏严格的隔离边界**。
- **[#5987 — TUI 调试模式下纯数字输入无法识别](https://github.com/HKUDS/nanobot/issues/5987)**（评论数：4）：用户报告在 TUI debug 模式中字母字符可以正常输入，但纯数字无法被识别，涉及输入解析层面的边界处理缺陷。
- **[#3626 — Telegram 长轮询静默挂起](https://github.com/HKUDS/nanobot/issues/3626)**（评论数：4）：此 Issue 自 5 月开放至今已超过 4 个月，描述了一个隐蔽而严重的稳定性问题：由于 ISP NAT 超时、Wi-Fi 漫游或防火墙重置导致的长轮询挂起，Bot 进程看似正常且能发送消息，但完全停止接收更新。该问题直到今日才被关闭，说明其复现和定位难度较高。


## 5. Bug 与稳定性

今日报告的 Bug 整体呈现 **多渠道边缘场景暴露** 的特征，按严重程度排列如下：

**严重度：高**
- **Feishu 隐藏检查点标记泄露**（[Issue #5903](https://github.com/HKUDS/nanobot/issues/5903)）：内部消息未经过滤直接投递至用户端，泄露系统内部工作流细节。已关闭。
- **Provider 回退机制被 "insufficient credits" 错误绕过**（[Issue #5967](https://github.com/HKUDS/nanobot/issues/5967)）：OpenAI 兼容网关报告额度不足时，配置的 fallback 模型被静默跳过，Agent 对用户表现为"停止工作"，尽管已配置了完整的回退链。评论数 0，但实际影响面较广。已关闭。
- **Responses 工具参数丢失（`strict` 被丢弃）→ 回归缺陷**（[PR #5938](https://github.com/HKUDS/nanobot/pull/5938)）：可能导致 MCP 过滤条件从可选变为必需，甚至强制不兼容参数进入同一调用。标记为 p1 回归。已合并/关闭。
- **会话文件路径遍历漏洞**（[Issue #5564](https://github.com/HKUDS/nanobot/issues/5564)）：恶意构建的 session ID 如 `../../etc/passwd` 可触发路径穿越，属于安全类缺陷。已关闭。

**严重度：中**
- **Telegram 长轮询静默挂起**（[Issue #3626](https://github.com/HKUDS/nanobot/issues/3626)）：进程存活但停止接收更新，极难从外部察觉。已关闭。
- **会话恢复失败状态残留导致假负面上报**（[PR #5995](https://github.com/HKUDS/nanobot/pull/5995)）：成功恢复被报告为失败运行，并可能抑制最终的 WebSocket 回复。回归缺陷，仍有修复 PR 待合并。
- **空工具注册表被忽略，默认工具在受限策略下被重新启用**（[PR #5994](https://github.com/HKUDS/nanobot/pull/5994)）：用户在会话策略中禁用了所有注册工具后，默认工具仍被调用，可导致受限环境中实际创建文件等副作用。属于安全边界修复。待合并。
- **WebUI 已完成回合被延迟事件重启**（[PR #5991](https://github.com/HKUDS/nanobot/pull/5991)）：延迟的 admission broadcast 或 ACK 携带旧 `active_turn_id`，导致处理指示器持续可见，排队引导无法观察到稳定的完成状态。已关闭。
- **TUI 数字输入无法识别**（[Issue #5987](https://github.com/HKUDS/nanobot/issues/5987)）：调试模式下纯数字输入被静默吞噬，阻塞调试工作流。已关闭。
- **测试时间窗口依赖 UTC 导致的每日 5 小时确定性失败**（[Issue #5348](https://github.com/HKUDS/nanobot/issues/5348)）：`record_token_usage()` 默认 UTC 而 settings 载荷读取配置时区，在每日特定窗口内测试必然失败。属于测试基建的确定性时序缺陷。已关闭。

**严重度：低**
- **Feishu 无 in-place edit 能力导致 compaction notice 不应投递到频道**（[Issue #5956](https://github.com/HKUDS/nanobot/issues/5956)）：通知路由硬编码导致 compaction 通知的两阶段事件均被发送至源频道，对 Feishu 用户造成噪音。关联 PR [#5780](https://github.com/HKUDS/nanobot/pull/5780) 已提交修复（停止发送上下文压缩通知）。已关闭。
- **Cron 流式输出消息缺少 streamid**（[Issue #3718](https://github.com/HKUDS/nanobot/issues/3718)）。已关闭。
- **重复实例风险**（[Issue #2084](https://github.com/HKUDS/nanobot/issues/2084)）：Agent 在重启其他实例时未识别守护进程，导致重复运行。属于 Agent 系统操作感知的问题。已关闭。


## 6. 功能请求与路线图信号

从今日更新的 PR 和 Issue 中，可以捕捉到以下明确的路线图信号：

- **远程实例连接**：[PR #5941](https://github.com/HKUDS/nanobot/pull/5941) 正在实现 NAN-157 的远程 nanobot 实例发现与连接能力，使本地 WebUI 可直接发现并连接服务器上已运行的实例。**这一功能有较高概率进入下一版本**，因为已有实际 PR 在推进且与系统演进方向契合。
- **会话持久化架构升级**：[PR #5943](https://github.com/HKUDS/nanobot/pull/5943)（p1）正在将会话数据从 JSONL 迁移到 SQLite，并通过有界 worker 将存储 I/O 移出 event loop。这是一项根基性的架构变更，将影响会话一致性、并发安全和持久化性能。**判断：可能进入下一版本，但因其范围较大需要充分测试。**
- **子代理任务通信**：[PR #5985](https://github.com/HKUDS/nanobot/pull/5985) 在已合并的基础上新增 session 拥有的子代理消息传递与定向取消，支持向运行中的子代理发送后续指令、查看任务收据，以及取消单个子代理而不影响同级任务。**这是子代理功能生态的重要扩展。**
- **跨后端 Scoped 代理支持**：[PR #5992](https://github.com/HKUDS/nanobot/pull/5992)（NAN-212）计划为所有 Provider 类型暴露高级网络代理配置，覆盖原生后端、OAuth Provider、自定义 Provider 和仅转录 Provider。
- **流式 Markdown 中 TeX 公式边界保护**：[PR #5990](https://github.com/HKUDS/nanobot/pull/5990) 修复 NAN-204，解决 Streamdown 流式布局中 `\[...\]` 内独立 `=` 被误判为 Setext 标题边界的问题，对于使用数学公式的用户具有明确的实用价值。
- **Compaction 通知开关**：[Issue #5956](https://github.com/HKUDS/nanobot/issues/5956) 与 [Issue #5903](https://github.com/HKUDS/nanobot/issues/5903) 共同指向一个设计决策：**上下文压缩是否需要通知用户**。已有 PR 选择了"静默"方案（[#5780](https://github.com/HKUDS/nanobot/pull/5780)），说明该路线已被社区采纳。


## 7. 用户反馈摘要

基于今日 Issue 的评论，用户反馈的信号较为清晰：

- **平台痛点集中在 Feishu/Lark 通道**：用户 `lan5635` 报告内部标记泄露，`shenchaovip-afk` 反馈 compaction notice 在无 in-place edit 能力的 Feishu 上不可关闭、形成噪音。两位用户共同反映出：**Feishu 通道的消息生命周期管理与用户可见性控制仍需打磨**，通道抽象层的隔离语义不够严谨。
- **TUI 用户（开发者场景）关注调试体验**：用户 `Tomlili43` 在 VSCode launch.json 配置下运行 TUI 调试时发现纯数字输入被静默忽略，说明**开发调试工作流中仍有低层级输入处理缺陷**未被覆盖。这类问题虽影响面窄，但对开发者体验的打击是直接的。
- **长期稳定性的隐忧**：用户 `WormW` 报告的 Telegram 长轮询静默挂起问题上已存在 4 个月才关闭，说明**网络边缘场景的稳定性测试与监控机制尚待加强**。Bot 在用户侧表现出的"僵尸存活"远比进程崩坏更难以诊断。
- **可观的测试闭环改进**：用户 `albatrossflyon-coder` 报告了时区依赖的测试窗口失败问题（Issue #5348），表明项目**测试套件的健壮性正在被社区重点关注**，而非仅功能层。
- **Agent 系统操作边界意识**：用户 `JiajunBernoulli` 报告 Agent 在重启其他实例时未识别守护进程、直接启动重复实例，反映了**Agent 执行系统操作时对运行环境的感知能力**是一个值得关注的场景。


## 8. 待处理积压

以下项目虽在今日仍有更新，但长期处于待合并状态，值得维护者关注：

- **[PR #5943 — refactor(session): centralize state ownership in SQLite](https://github.com/HKUDS/nanobot/pull/5943)**（创建：2026-09-27，p1）：这是一条**大型架构重构 PR**，将会话持久化从 JSONL 迁移至 SQLite。由于涉及存储抽象替换和写入路径重构，合并前必须经过充分的迁移测试——包括对已有 JSONL 数据的兼容迁移方案、SQLite 锁竞争表现以及事件循环的 I/O 边界验证。**风险提示：若长期搁置可能积累合并冲突，因同期的会话相关修复（如 #5993、#5995）会不断触碰相邻代码。**
- **[PR #5941 — feat(webui): connect to existing remote nanobot instances](https://github.com/HKUDS/nanobot/pull/5941)**（创建：2026-09-27）：远程实例连接能力作为 NAN-157 的落地，属于**跨服务通信**范畴，需要依赖与 PR #5943（会话持久化）的架构协调。
- **[PR #5994 — fix(agent): preserve explicitly empty tool registries](https://github.com/HKUDS/nanobot/pull/5994)** 与 **[PR #5995 — fix(agent): clear stale failure state when resuming runner iterations](https://github.com/HKUDS/nanobot/pull/5995)**（均创建：2026-09-30）：两条均为当日新开但方向互有交织的 Agent 核心逻辑修复，涉及安全边界与状态机逻辑，建议优先合并以避免在 agent 路径上积累过多合并冲突。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**日期**：2026-10-01
**数据来源**：[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) GitHub 仓库
**统计口径**：过去 24 小时

---

## 1. 今日速览

过去 24 小时项目处于**高活跃、高负载状态**：新开/活跃 Issues 47 条、待合并 PR 47 条，双双接近 50 条规模，但当日仅关闭/合并 3 条 Issue、3 条 PR，**闭环率偏低（约 6%）**，积压压力明显增大。当日无新版本发布。从标签分布看，今日问题高度集中在**桌面端（comp/desktop）、会话状态（sweeper:risk-session-state）与安装更新（area/install-update）**三大主题，且出现 2 个 P0 级平台适配问题（Discord、Slack），均已伴随对应 PR，属于响应及时但修复负载沉重的一天。社区侧讨论热点集中在 macOS keychain 反复弹窗（13 条评论）与桌面端 streaming 消息重复渲染（10 条评论）两个长期困扰用户的问题上，质量信号总体健康但稳定性风险值得警惕。

---

## 2. 版本发布

过去 24 小时**无新版本发布**（Release：0 个），无更新内容、破坏性变更或迁移注意事项可报告。

---

## 3. 项目进展

当日仅 3 条 Issue、3 条 PR 被关闭/合并（具体合并 PR 详情未出现在本次数据样本中），闭合数量有限。从可见数据看，进展主要体现在**修复类 PR 对已报告 Bug 的快速跟进**，形成明确的「Issue → Fix PR」闭环：

| 报告的 Bug | 对应修复 PR | 状态 |
|---|---|---|
| [#129632](https://github.com/NousResearch/hermes-agent/issues/129632) pm 插件 pyproject 无 `[project]` 表导致 `uv lock` 失败 | [#129713](https://github.com/NousResearch/hermes-agent/pull/129713) | OPEN |
| [#129712](https://github.com/NousResearch/hermes-agent/issues/129712) updater 每次 lazy fetch 生成一个 packfile，`.git` 膨胀至 39 GiB | [#129714](https://github.com/NousResearch/hermes-agent/pull/129714) | OPEN |
| [#129715](https://github.com/NousResearch/hermes-agent/issues/129715) `browser_vault_fill` 选中隐藏/无关标签页 | [#129717](https://github.com/NousResearch/hermes-agent/pull/129717) | OPEN |
| [#129128](https://github.com/NousResearch/hermes-agent/issues/129128) 文件安全守卫误拦普通 vault 目录 | [#129131](https://github.com/NousResearch/hermes-agent/pull/129131) | OPEN |
| [#127599](https://github.com/NousResearch/hermes-agent/issues/127599) truststore 注入后 `cert_store_stats`/`get_ca_certs` 失效 | [#129716](https://github.com/NousResearch/hermes-agent/pull/129716) | OPEN |
| [#128720](https://github.com/NousResearch/hermes-agent/issues/128720) Slack 斜杠命令与普通消息输入不一致 | [#129046](https://github.com/NousResearch/hermes-agent/pull/129046)（P0） | OPEN |
| [#125489](https://github.com/NousResearch/hermes-agent/issues/125489) 生成的 config.yaml 布局混乱 | [#125514](https://github.com/NousResearch/hermes-agent/pull/125514) | OPEN |

**评估**：项目「发现即响应」的速度良好——当日新建的多个 Bug 在 24 小时内已有对应修复 PR（如 #129712/#129714、#129632/#129713、#129715/#129717），说明维护团队的分类和修复管线较为敏捷。但 47 条待合并 PR 意味着合入门槛（评审、CI）是当前主要瓶颈，实际代码库前进速度不及表面活跃度。

---

## 4. 社区热点

今日评论数最多的 Issues（附链接）：

1. **[#91115](https://github.com/NousResearch/hermes-agent/issues/91115)（13 评论，8/20 创建）** — macOS keychain 在每次 `hermes update` 后重新弹窗。根源是桌面 app 本地重签后安全存储 ACL 的 cdhash 不匹配，Python updater 无法修复。这是**长期未决的安装/更新体验痛点**，用户反复被密钥链授权打断，诉求是「更新后不再重复询问」。

2. **[#128468](https://github.com/NousResearch/hermes-agent/issues/128468)（10 评论，9/29 创建）** — 桌面端 transcript 在 streaming 时**重复渲染消息 + 滚动跳动**。用户在 Claude Opus 5 + Linux 打包版上复现，属于前端渲染/会话状态一致性问题，直接影响日常对话体验，是桌面端质量的核心矛盾之一。

3. **[#64392](https://github.com/NousResearch/hermes-agent/issues/64392)（8 评论，7/14 创建，P1）** — 重复技能名在 `skills list`、系统提示、`skill_view` 三处行为不一致。标签 `needs-decision` 表明需要产品决策，长期悬而未决，反映出**技能系统边界语义**尚未统一。

4. **[#106960](https://github.com/NousResearch/hermes-agent/issues/106960)（6 评论，9/9 创建）** — 手写 systemd dashboard 服务在更新后被误判为「manual serve」，涉及更新清单与 spawn ledger 的可靠性。

**PR 侧**：本次样本中 PR 评论数均显示为 `undefined`，无法按评论热度排序。PR 列表本身显示当日主题集中在网关平台适配（BlueBubbles、Discord、Slack）、桌面端存储/渲染修复与安全边界加固。

**背后诉求归纳**：社区最关心的是**「更新后环境不破坏既有配置」（keychain、systemd、config.yaml）与「桌面端会话渲染正确性」**，这与近期迭代节奏偏快的现象相吻合——功能推进的同时，健壮性成为用户的主要诉求。

---

## 5. Bug 与稳定性

按严重程度排列：

### P0（最高优先级）
- **[#128797](https://github.com/NousResearch/hermes-agent/pull/128797)（PR）** — Discord 转发交互携带文本通道的 chat/user 标签，导致会话上下文串线。涉及 `risk-session-state` 与 `risk-caching`。**已有 PR 修复中**（即该 PR 自身）。
- **[#129046](https://github.com/NousResearch/hermes-agent/pull/129046)（PR）** — Slack 斜杠命令与普通消息的 prompt/session 输入不一致。**已有 PR 修复中**。

### P1（高优先级）
- **[#64392](https://github.com/NousResearch/hermes-agent/issues/64392)** — 重复技能名三处语义不一致，`needs-decision`，无对应 PR，**自 7/14 起挂起**。
- **[#129281](https://github.com/NousResearch/hermes-agent/issues/129281)（9/30 新建）** — `cron/lifecycle_guard.py` 的正则灾难性回溯会**冻结整个 gateway 进程**，通过每次终端调用的 pre-exec 路径触发，属于性能/可用性双重风险。**暂无对应 fix PR**。

### P2（中高优先级，选取关键项）
- **[#91115](https://github.com/NousResearch/hermes-agent/issues/91115)** — macOS keychain 反复弹窗（13 评论）。
- **[#128468](https://github.com/NousResearch/hermes-agent/issues/128468)** — 桌面端 streaming 消息重复 + 滚动跳动（10 评论）。
- **[#129712](https://github.com/NousResearch/hermes-agent/issues/129712)** — `.git` 膨胀至 39 GiB（✅ 已由 PR [#129714](https://github.com/NousResearch/hermes-agent/pull/129714) 跟进）。
- **[#129666](https://github.com/NousResearch/hermes-agent/issues/129666)（已关闭，duplicate）** — Dashboard 聊天侧栏 250ms reconnect 循环，徽章 connecting↔live 抖动。
- **[#127911](https://github.com/NousResearch/hermes-agent/issues/127911)** — 中断长工具轮次导致 interim 消息与工具卡片重复（live 副本 + journal 副本格式不同）。
- **[#129640](https://github.com/NousResearch/hermes-agent/issues/129640)** — 桌面端 HUD 从「This device」打开时错误连到远程主 gateway，有实质危害。
- **[#55004](https://github.com/NousResearch/hermes-agent/issues/55004)** — Windows 安装程序 venv 阶段被 Application Control 策略拦截（os error 4551），`needs-repro`。
- **[#73796](https://github.com/NousResearch/hermes-agent/issues/73796)** — 拆分容器 Docker 部署中 dashboard 误报 gateway「stopped」。
- **[#78803](https://github.com/NousResearch/hermes-agent/issues/78803)** — Dashboard「Restart Gateway」在拆分部署中报误导性 `no such gateway 'default'`。

### 已关闭（当日）
- **[#129666](https://github.com/NousResearch/hermes-agent/issues/129666)** — 关闭为 duplicate。
- **[#128971](https://github.com/NousResearch/hermes-agent/issues/128971)** — `session.create` 报 `cwd_explicit: Extra inputs are not permitted`。
- **[#128876](https://github.com/NousResearch/hermes-agent/issues/128876)** — PM 托管安装 updater 永久拒绝、pm 子命令在 pm/uv.lock 丢失后崩溃等复合问题。

**稳定性小结**：桌面端（desktop）是今日 Bug 重灾区，涉及渲染、会话、连接目标、磁盘占用四大类；且出现了 gateway 进程冻结级别的性能缺陷（#129281）。当日关闭的 3 条中 1 条为重复关闭，实际解决率有限，稳定性风险累积中。

---

## 6. 功能请求与路线图信号

当日新提出/活跃的功能请求（Feature Requests）：

- **[#54153](https://github.com/NousResearch/hermes-agent/issues/54153)（P3）** — 在工具调用预算约 80% 时注入「保存状态并让出」软警告，让 agent 提前 checkpoint 而非撞墙后被迫做无工具总结。**需求合理，暂无 PR**。
- **[#125180](https://github.com/NousResearch/hermes-agent/issues/125180)（P3）** — 将 Hermes 命令投射到 QQ Bot 命令面板（官方 API 2026-08-12 开放），`needs-decision`。
- **[#129694](https://github.com/NousResearch/hermes-agent/issues/129694)（P3）** — 公开 MCP 客户端连接读取 API（`current_mcp_servers()` 等），面向插件开发者，是**可扩展性信号**。
- **[#129696](https://github.com/NousResearch/hermes-agent/issues/129696)（P3）** — 公开 skills 工具的发现/查找/同步哈希 API，与 #129694 同属「插件开发者要公共 API」的诉求。
- **[#129699](https://github.com/NousResearch/hermes-agent/issues/129699)（P3）** — 公开 pet 精灵管线 frame/prompt 原语。
- **[#129518](https://github.com/NousResearch/hermes-agent/issues/129518)（P3）** — 桌面端 Bots 与 Sessions 三处 UI 概念割裂，建议合并，属 UX 方向性信号。

**对应 PR（可能有希望进入下一版本的候选）**：
- **[#126535](https://github.com/NousResearch/hermes-agent/pull/126535)** — 模型选择器星标收藏（Favorites），桌面端体验增强，已提交。
- **[#94367](https://github.com/NousResearch/hermes-agent/pull/94367)** — 工作流作者/运行 agent 图（opt-in 插件），功能较完整，但 `needs-decision` 且创建于 8/25，积压较久。
- **[#129718](https://github.com/NousResearch/hermes-agent/pull/129718)** — gateway 可信附件生命周期钩子，与 #129694/#129696 同向，说明**官方正在回应插件扩展需求**。

---

## 7. 用户反馈摘要

从评论区提炼的真实痛点与场景：

- **更新即破坏体验**（#91115）：用户每次 `hermes update` 后遭遇 macOS keychain 重新授权，且 Python updater「无法修复」，反馈情绪为**疲惫与希望一劳永逸**。
- **桌面端 streaming 不可信**（#128468、#127911）：消息重复渲染、滚动跳动、中断后 interim 消息双份，直接打击核心对话场景，用户报告详细到 build 号与复现步骤，**参与质量高但耐心被消耗**。
- **磁盘/资源失控**（#129712）：`.git` 39 GiB、磁盘 99% 满，用户附完整证据（git 版本、commit、install repo 路径），是真实生产环境事故。
- **进程级稳定性恐惧**（#129281）：正则可导致整个 gateway 进程冻结，用户明确指出「每一个终端调用都会经过 `_pre_exec_block`」的放大路径，要求尽快修复。
- **配置语义混乱**（#4848、#64392）：`display.compact` 无效、重复技能名三处不一致，用户诉求是「配置项要么生效、要么报错」，反对静默失效。
- **多容器部署误报**（#73796、#78803）：官方 docker-compose 文档路径下 dashboard 把运行中的 gateway 报成 stopped，且 Restart 操作必然失败并报误导错误，反映**文档承诺与实际行为脱节**。

---

## 8. 待处理积压（提醒维护者关注）

以下为长期未决的重要条目，建议优先处理：

| 条目 | 创建日期 | 挂起时长 | 严重度 | 症结 |
|---|---|---|---|---|
| [#4848](https://github.com/NousResearch/hermes-agent/issues/4848) | 2026-04-03 | ~6 个月 | P3 | `display.compact` 配置完全无效，根因已定位但未修 |
| [#43024](https://github.com/NousResearch/hermes-agent/pull/43024) | 2026-06-09 | ~4 个月 | PR（docs） | liteparse PDF fallback 文档 PR，评审停滞 |
| [#45317](https://github.com/NousResearch/hermes-agent/pull/45317) | 2026-06-13 | ~3.5 个月 | PR（bug） | BlueBubbles 重复轮次修复，涉多个风险标签 |
| [#43633](https://github.com/NousResearch/hermes-agent/pull/43633) | 2026-06-10 | ~3.5 个月 | PR（feature） | MCP Streamable HTTP 认证服务，安全边界相关 |
| [#46131](https://github.com/NousResearch/hermes-agent/issues/46131) | 2026-06-14 | ~3.5 个月 | P2 | Ollama reasoning 模型返回空内容，本地模型用户受阻 |
| [#64392](https://github.com/NousResearch/hermes-agent/issues/64392) | 2026-07-14 | ~2.5 个月 | **P1** | 重复技能名语义不一致，`needs-decision` 悬而未决 |
| [#80477](https://github.com/NousResearch/hermes-agent/pull/80477) | 2026-08-06 | ~2 个月 | PR（bug） | kanban 卡片被过期 PR 证据卡死，恢复逻辑修复 |
| [#91115](https://github.com/NousResearch/hermes-agent/issues/91115) | 2026-08-20 | ~6 周 | P2 | keychain 反复弹窗，热度最高却无修复方案 |
| [#94367](https://github.com/NousResearch/hermes-agent/pull/94367) | 2026-08-25 | ~5 周 | PR（feature） | 工作流插件，`needs-decision` 阻塞 |

**积压特征**：长期挂起项中 **PR 占比高**，说明问题不在于「没人修」，而是**评审决策链阻塞**——尤其是 #64392（needs-decision 的 P1）、#43633（安全边界 PR）、#94367（feature PR）。建议维护者对超过 3 个月的 PR 做一次批量裁决（合并/关闭/明确拒绝），以降低社区贡献者的挫败感。

---

### 综合健康度评估

- **活跃度**：高（24h 内 100 条 Issue+PR 更新）
- **响应速度**：良好（当日新增多个 Bug 24h 内即有 fix PR）
- **闭环率**：偏低（约 6%），积压有抬头趋势
- **稳定性**：中等偏差（桌面端 Bug 密集，出现 gateway 进程冻结级缺陷）
- **发布节奏**：停滞（当日及近期均无 Release，修复成果尚未通过发版交付用户）

**一句话结论**：项目今日处于「高活跃、强响应、弱闭环」状态，管线敏捷但评审与发版是当前瓶颈；桌面端稳定性与更新体验是用户最大痛点，建议在下一版本聚焦修复类交付。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**报告日期：2026-10-01**
**数据来源：github.com/sipeed/picoclaw**
**统计周期：过去 24 小时**

---

## 1. 今日速览

PicoClaw 项目在过去 24 小时内呈现**高度集中、单一贡献者驱动**的活跃状态：1 条新开 Issue 与 5 条新开/更新的 PR 均围绕 **Web UI 的可观测性与人机交互体验**展开，主要由贡献者 `racso2609` 推动，针对 Issue #3408 提出的"消息静默丢失"问题形成了从根因修复到体验增强的完整 PR 链路（#3410/#3411/#3412/#3413）。整体合并率为 1/6=16.7%，仅一条长期悬挂的 PR #1349 被关闭；无新版本发布，项目仍处于**密集重构、功能放量前夕**阶段。健康度评估：**活跃但偏单向**，需关注评审资源与维护者介入节奏。

---

## 2. 版本发布

无新版本发布，本节略过。

---

## 3. 项目进展

### 3.1 已合并/关闭 PR

| PR | 标题 | 作者 | 链接 |
|---|---|---|---|
| #1349 | feat(qq): support parsing and replying to more attachment types | aishannon | https://github.com/sipeed/picoclaw/pull/1349 |

**说明：** 该 PR 早于 2026-03-11 提交（创建时间约半年前），经历长期 review 后于今日关闭（具体合并/拒绝未注明）。其内容是扩展 QQ Channel 对表情包结构、语音/图片/视频/文件消息的解析与回复能力，**属于 QQ 渠道附件支持的存量工作清理**，对项目整体推进意义有限但完成了收尾。

### 3.2 重要进行中 PR（虽未合并但属"实质性推进"）

围绕 **#3406 路线图与 #3408 用户痛点**，由 `racso2609` 同步推进了以下四联 PR（均今日创建/更新）：

- **#3410 fix(pico/web): surface steering queue state** — 让 `pico` 通道在队列满时不再静默丢消息，直接回应 Issue #3408 的核心 bug。
  https://github.com/sipeed/picoclaw/pull/3410
- **#3411 feat(web): honest, state-driven working indicator** — 替换 Web UI 旧的 4 句"轮播思考语"为基于真实状态的指示器（#3406 Part 1）。
  https://github.com/sipeed/picoclaw/pull/3411
- **#3412 fix(agent): make a failed turn visible to the user** — 修复 agent 失败 turn 的"无声沉默"，堵住三处错误响应被吞掉的漏洞。
  https://github.com/sipeed/picoclaw/pull/3412
- **#3413 feat(web): global multi-channel session sidebar** — 把 session 列表从单一 `pico` 通道升级为全局多通道侧边栏（#3406 Part 2-A）。
  https://github.com/sipeed/picoclaw/pull/3413

**整体评估：** 今日 PR 工作量集中在"Web UI 可观测性"这条主线，**约占日活 PR 的 67%**，标志着项目从"后端能力扩展"阶段向"前端用户体验打磨"阶段切换。

---

## 4. 社区热点

| 排行 | 条目 | 评论/点赞 | 分析 |
|---|---|---|---|
| 🥇 讨论度 | Issue #3408 | 1 评论 / 0 👍 | **当前社区焦点**，报告了 Web UI 消息静默队列丢失的严重 UX bug，并附带对队列/事件可视化的功能请求。 |
| 🥈 关注度 | PR #3410 | 评论未公开 | 直接对标 #3408 的根因修复，是短期内最高关联度 PR。 |
| 🥉 路线图核心 | PR #3411 / #3413 | 评论未公开 | 共同落地 #3406 路线图，是项目阶段性目标的体现。 |

**诉求分析：** 用户痛点已从"功能缺失"演变为"**反馈不可见**"——用户看不到 agent 是否在工作、消息是否送达、错误发生在何处。这是一种**典型的人机协作信任建立需求**，单条 Issue 实质上抛出了 3 类诉求：①Bug 修复、②UI 反馈机制、③事件流 API 化。社区当前热度评级：**中等**（点赞数 0，但 Issue 与 4 条 PR 联动表明维护者已介入）。

链接：https://github.com/sipeed/picoclaw/issues/3408

---

## 5. Bug 与稳定性

### 5.1 严重程度：🔴 高（直接影响核心交互）

| Bug | 链接 | 是否有 Fix PR | 状态 |
|---|---|---|---|
| Web UI 消息在 agent busy 时被静默入队/丢弃 | https://github.com/sipeed/picoclaw/issues/3408 | ✅ PR #3410 | 待合并 |

### 5.2 严重程度：🟠 中（影响错误恢复体验）

| Bug | 链接 | 是否有 Fix PR | 状态 |
|---|---|---|---|
| Agent 失败 turn 对用户完全沉默（`message` tool 抑制 + `PublishResp` 三处黑洞） | https://github.com/sipeed/picoclaw/pull/3412 | ➖（即修复 PR） | 待合并 |

### 5.3 严重程度：🟡 低（体验层面，非数据/安全）

| Bug | 链接 | 是否有 Fix PR | 状态 |
|---|---|---|---|
| "思考中"提示为 4 句轮播硬编码，与真实状态脱节 | https://github.com/sipeed/picoclaw/pull/3411 | ➖（即修复 PR） | 待合并 |

**总体评估：** 当前 Bug 集中在 Web UI 的**反馈闭环**，未涉及数据丢失、安全或崩溃级问题，但**对新手用户的第一印象影响极大**。已有针对性 Fix PR，**预计 1~2 周内可随下一批合并集中释放**。

---

## 6. 功能请求与路线图信号

| 功能请求 | 潜在承载 PR | 纳入下一版本概率 |
|---|---|---|
| Web UI 队列/事件可视化面板 | #3410 + Issue #3408 延伸诉求 | 🟢 高（已有基础设施 PR） |
| 全局多通道 session 侧边栏 | #3413 | 🟢 高（#3406 Part 2-A，已声明路线图） |
| 状态驱动的 working indicator | #3411 | 🟢 高（#3406 Part 1） |
| 失败 turn 的可见错误反馈 | #3412 | 🟢 高（与 #3408 同源） |
| Deltachat 通道重构（精简 200 LOC + 文档化） | #3222（https://github.com/sipeed/picoclaw/pull/3222） | 🟡 中（自 2026-07-03 起挂起，今日仅更新未推进） |

**信号解读：** `racso2609` 似乎正在按一份**显式路线图 (#3406)** 推进 Web UI 大版本改造，建议维护者与该贡献者尽快对齐排期，避免 PR 长期悬挂（参考 #3222 的前车之鉴）。

---

## 7. 用户反馈摘要

来自 Issue #3408 的 1 条评论（唯一公开用户声音）核心痛点可归纳为：

1. **"我发出去的消息去哪儿了？"** —— 发送后无任何反馈，agent 回复时也未见自己那条消息，体验上等同于"消息丢失"。
2. **使用场景：** 真实用户在使用 Web UI 与 agent 进行多轮交互，且会在 agent 思考过程中追加提问（典型 steering 场景）。
3. **满意度：** 明确**不满意**当前 UX，但语气专业、建设性，提出具体的可视化需求而非单纯抱怨。
4. **附加诉求：** 期望 Web UI 暴露队列/事件状态接口，便于二次开发或调试。

**样本极小（仅 1 条），但代表性极强**——该问题是任何"思考型 agent UI"都会遇到的通用痛点，建议作为下个迭代的用户故事样板。

---

## 8. 待处理积压

| 条目 | 类型 | 创建时间 | 悬空时长 | 风险 |
|---|---|---|---|---|
| PR #3222 refactor(deltachat) | 重构 + 文档 | 2026-07-03 | **~90 天** | 🟡 中：长期未 review，可能与新 Web UI 工作冲突 |
| Issue #3408 衍生队列/事件 API 诉求 | 功能请求 | 2026-09-29 | 2 天 | 🟢 低：已与 4 条 PR 联动 |
| PR #3410/#3411/#3412/#3413 | 新 PR 集群 | 2026-09-29~30 | 1~2 天 | 🟡 中：5 条相关 PR 同期涌入，**评审压力大**，需协调 review 顺序 |

**维护者建议：**
- ⚠️ **优先审 PR #3410 与 #3412**——它们直接修 Bug，且与 Issue #3408 强绑定，避免用户继续遭遇静默丢消息。
- ⚠️ **尽快为 PR #3222 做出处置决定**（合并/关闭/拆解），90 天的悬挂已对贡献者 `trufae` 的参与感产生负面影响。
- 💡 **建立 #3406 路线图追踪看板**，将 #3411/#3413 等 PR 显式关联，便于社区跟进。

---

**报告生成时间：** 2026-10-01
**报告覆盖周期：** 2026-09-30 ~ 2026-10-01（UTC 24h）
**下次更新：** 2026-10-02

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报（2026-10-01）

> 数据口径：过去 24 小时 GitHub Issues/PR/Releases 更新。原始数据中 PR 评论数为 `undefined`，Issue #3961 评论数为 0，所有条目 👍 为 0，因此“社区讨论热度”主要依据主题聚集度、更新频次与作者分布评估。以下链接按数据源仓库标识 `nanocoai/nanoclaw` 生成。

---

## 1. 今日速览

- 今日 PR 更新 **15 条**：待合并 **13 条**，已合并/关闭 **2 条**；Issue 更新 **1 条**且已关闭；无新版本发布。
- 活跃度评估：**高**。但活动高度集中在 PR 队列，合并/关闭比例偏低，Review 与合并积压明显。
- 主题集中在四条线：**更新/安装可靠性**、**Provider/Gateway 与 Iron 本地模型**、**Telegram 通道修复**、**Skills/Provider 生态扩展**。
- 项目健康度：维护响应快，核心团队与外部贡献者均有产出；但更新链路仍有高风险开放修复，需优先处理。
- 社区互动指标偏低：无 release、无 issue 评论、PR 评论数据缺失，👍 全为 0，暂无法从评论/反应维度判断真实热度。

---

## 2. 版本发布

今日无新版本发布，本节省略。

---

## 3. 项目进展

今日已关闭/合并的 PR 数量为 2，另有 1 个 Issue 关闭。推进重点在**更新流程可靠性**与**供应链安全硬化**。

| 条目 | 状态 | 推进内容 | 链接 |
|---|---|---|---|
| PR #3962 `fix(update): refuse cutover when the service liveness probe itself fails` | CLOSED | 修复 `/update-nanoclaw` 在服务探活本身失败时仍报告 `complete` 的问题，避免旧 host 继续服务却显示更新完成。与 Issue #3961 同日关闭，直接对应更新链路核心缺陷。 | [PR #3962](https://github.com/nanocoai/nanoclaw/pull/3962) |
| PR #3974 `fix(container): refresh agent-runner lockfile to clear transitive advisories` | CLOSED | 刷新 `container/agent-runner/bun.lock`，清除 `bun audit` 中由 `@modelcontextprotocol/sdk` 1.29.0 引入的旧传递依赖告警，属于安全/依赖硬化。 | [PR #3974](https://github.com/nanocoai/nanoclaw/pull/3974) |
| Issue #3961 `[bug] /update-nanoclaw reports phase: complete without restarting the host...` | CLOSED | 用户报告 v2.4.0 与 main 在 Linux 下更新后旧 host 仍在服务，服务未被停止切换，也未在结束时重启。今日关闭，配合 #3962 形成修复闭环。 | [Issue #3961](https://github.com/nanocoai/nanoclaw/issues/3961) |

**整体前进幅度：中等偏积极。** 更新流程的“误报完成”问题已收口，供应链告警已清理；但更新链路的另一个高风险问题——rollback 未停止 live nohup host、未 drain agent containers（#3956）——仍处于 OPEN，说明更新/回滚可靠性尚未完全闭环。

---

## 4. 社区热点

由于原始数据未提供 PR 评论数，Issue 评论为 0，👍 全为 0，无法按传统“评论最多/反应最多”排序。以下按**主题聚集度与同日更新密度**识别热点。

| 热点主题 | 相关条目 | 诉求分析 | 链接 |
|---|---|---|---|
| **Iron / 本地模型 / Gateway 审批体验** | #3966、#3964、#3965，均为 glifocat，09-29 至 09-30 连续更新 | 希望本机 keyless 模型可通过 `http://host.docker.internal:<port>/v1` 以明文 HTTP 使用；Provider 可声明精确 `host:port`，避免非默认端口每次调用都弹审批；OpenCode setup 在提示阶段就校验模型 URL，而不是保存一个每轮都失败的地址。 | [#3966](https://github.com/nanocoai/nanoclaw/pull/3966) [#3964](https://github.com/nanocoai/nanoclaw/pull/3964) [#3965](https://github.com/nanocoai/nanoclaw/pull/3965) |
| **Telegram 通道修复集群** | #3970、#3971、#3972、#3973，均为 antonio-antuan，09-30 同日提交 | 四个独立修复覆盖：forum topics 应按 thread 隔离 session；服务消息不应作为空消息转发给 agent；MarkdownV2 解析失败应降级纯文本而非整条丢弃；reaction/edit 目标 ID 应去掉 `<agent-group>` 后缀。反映出 Telegram 适配器在真实群组/论坛场景中的细节缺口。 | [#3970](https://github.com/nanocoai/nanoclaw/pull/3970) [#3971](https://github.com/nanocoai/nanoclaw/pull/3971) [#3972](https://github.com/nanocoai/nanoclaw/pull/3972) [#3973](https://github.com/nanocoai/nanoclaw/pull/3973) |
| **Skills / Provider 生态扩展** | #3976 `/add-copilot`、#3928 `/contribute-upstream`、#3975 通用 runner 与 host extension callbacks | 降低第三方 Provider 接入成本，尤其是 GitHub Copilot 的设备登录 token 应留在 credential gateway；同时帮助 fork 以 seam/skill 方式回贡上游，减少长期直接改上游文件的维护成本。 | [#3976](https://github.com/nanocoai/nanoclaw/pull/3976) [#3928](https://github.com/nanocoai/nanoclaw/pull/3928) [#3975](https://github.com/nanocoai/nanoclaw/pull/3975) |
| **更新/安装可靠性** | #3961、#3962、#3956、#3901 | 更新完成误报、rollback 不停旧 host、HTTPS 代理下 host service 无法联网，构成安装/更新路径的连续痛点。 | [#3961](https://github.com/nanocoai/nanoclaw/issues/3961) [#3962](https://github.com/nanocoai/nanoclaw/pull/3962) [#3956](https://github.com/nanocoai/nanoclaw/pull/3956) [#3901](https://github.com/nanocoai/nanoclaw/pull/3901) |

**背后诉求：** 用户与贡献者正在推动 NanoClaw 从“能跑”走向“可稳定更新、可安全接入本地/私有模型、可在真实 IM 群组中可靠工作、可扩展 Provider/Skill 生态”。

---

## 5. Bug 与稳定性

按影响面与严重程度排列。今日多数 Bug 以 PR 形式携带修复，但 13 个修复 PR 仍待合并。

| 严重度 | 条目 | 问题 | Fix PR / 状态 | 链接 |
|---|---|---|---|---|
| 高 | Issue #3961 | `/update-nanoclaw` 在 `systemctl --user` 无法访问 bus 时报告 `phase: complete`，旧 host 仍在服务，服务未停止切换、结束时未重启。 | 已关闭；对应 #3962 已关闭 | [Issue #3961](https://github.com/nanocoai/nanoclaw/issues/3961) |
| 高 | PR #3956 | `update-nanoclaw.ts rollback` 未停止实际运行的 nohup host，也未在替换 `data/` 前停止 agent containers。 | OPEN，自身为 fix PR，待合并 | [PR #3956](https://github.com/nanocoai/nanoclaw/pull/3956) |
| 中高 | PR #3901 | host service 在 HTTPS 代理环境下无法访问互联网。 | OPEN，自身为 fix PR，待合并 | [PR #3901](https://github.com/nanocoai/nanoclaw/pull/3901) |
| 中 | PR #3962 | `detectService` 用 `tryRun(...).ok` 判断 `active`，探活本身失败时误判，导致 cutover 在旧 host 仍运行时继续。 | CLOSED，已修复 | [PR #3962](https://github.com/nanocoai/nanoclaw/pull/3962) |
| 中 | PR #3965 | OpenCode setup 在 Iron 下建议 `http://host.docker.internal...`，但未按所选 gateway 校验，保存后每轮失败或延迟中止。 | OPEN，自身为 fix PR | [PR #3965](https://github.com/nanocoai/nanoclaw/pull/3965) |
| 中 | PR #3969 | Iron Proxy 对缺失身份返回裸 `407`，未带 `Proxy-Authenticate` challenge，git/libcurl 不会发送代理凭据，导致 `git fetch` 失败。 | OPEN，自身为 fix PR | [PR #3969](https://github.com/nanocoai/nanoclaw/pull/3969) |
| 中 | PR #3973 | Telegram 无法解析 MarkdownV2 entities 时整条消息被拒绝，bridge 重试同一 payload 3 次后仍失败。 | OPEN，自身为 fix PR | [PR #3973](https://github.com/nanocoai/nanoclaw/pull/3973) |
| 中 | PR #3971 | Telegram forum topics 因 `supportsThreads: false` 共享同一 session，回复未落到原 topic。 | OPEN，自身为 fix PR | [PR #3971](https://github.com/nanocoai/nanoclaw/pull/3971) |
| 中 | PR #3970 | agent reaction/edit 使用 `<platform msg id>:<agent group id>` 作为目标 ID，平台侧收到带后缀 ID。 | OPEN，自身为 fix PR | [PR #3970](https://github.com/nanocoai/nanoclaw/pull/3970) |
| 中低 | PR #3972 | Telegram 服务消息（topic hide/unhide/create、pins、成员加入）无文本无附件，被转发为空消息，agent 对每条回复“you...”。 | OPEN，自身为 fix PR | [PR #3972](https://github.com/nanocoai/nanoclaw/pull/3972) |
| 中 | PR #3974 | `agent-runner/bun.lock` 锁定旧传递依赖，`bun audit` 存在告警（hono 4.12.14、@h... 等）。 | CLOSED，已硬化 | [PR #3974](https://github.com/nanocoai/nanoclaw/pull/3974) |

**稳定性判断：** 更新/安装路径是今日最大风险源，且 #3956 未合并意味着 rollback 场景仍可能留下旧 host 或未清理容器。#3962 关闭后，“误报完成”已有直接修复，但完整更新生命周期仍需观察。

---

## 6. 功能请求与路线图信号

今日无正式 feature request issue，但多个 OPEN PR 明确指向下一阶段能力建设。

| 功能方向 | 条目 | 可能纳入下一版本的判断 | 链接 |
|---|---|---|---|
| Iron 本机 keyless 模型通过明文 HTTP 接入 | #3966 `feat(iron): allow a keyless model on this machine over plain HTTP` | 与 #3964、#3965 构成 Iron/本地模型接入组合拳，若维护者优先完善本地 Provider 体验，较可能进入下一版本。 | [PR #3966](https://github.com/nanocoai/nanoclaw/pull/3966) |
| Provider 声明精确 `host:port` 模型端点 | #3964 `feat(gateway): let a provider declare exact host:port model endpoints` | 解决非默认端口每次调用弹审批的体验问题，属于 Gateway 审批模型扩展，路线图信号强。 | [PR #3964](https://github.com/nanocoai/nanoclaw/pull/3964) |
| `/add-copilot` GitHub Copilot SDK Provider Skill | #3976 | 以 skill 形式接入 Copilot，且将 device-login token 保留在 credential gateway，符合“上游可接受”的 Provider 扩展方向。 | [PR #3976](https://github.com/nanocoai/nanoclaw/pull/3976) |
| 通用 runner 与 host extension callbacks | #3975 | 增加五个 inert 扩展回调，默认不改变 main 行为，风险较低，可能作为 Provider 扩展基础设施逐步合入。 | [PR #3975](https://github.com/nanocoai/nanoclaw/pull/3975) |
| `/contribute-upstream` 运营 Skill | #3928 | 面向 fork 回贡上游，降低长期分叉成本，属于生态治理型功能。 | [PR #3928](https://github.com/nanocoai/nanoclaw/pull/3928) |
| HTTPS 代理下 host service 联网 | #3901 | 更偏修复/安装可用性，若企业网络场景反馈持续，可能随安装链路修复一并进入版本。 | [PR #3901](https://github.com/nanocoai/nanoclaw/pull/3901) |

**路线图信号总结：** Provider/Gateway 扩展、本地/私有模型接入、Skills 生态与 fork 回贡是当前最清晰的方向；但 13 个 OPEN PR 的 Review 吞吐将决定这些功能能否在下一版本落地。

---

## 7. 用户反馈摘要

今日 Issue #3961 评论数为 0，无评论内容可提炼。以下痛点来自 Issue 正文与 PR 描述。

**真实痛点：**

- **更新可靠性不足：** `/update-nanoclaw` 报告 `phase: complete`，但旧 host 仍在服务；服务未停止切换、结束时未重启；`systemctl --user` 无法访问 bus 时问题被掩盖。
- **回滚不彻底：** rollback 未停止 live nohup host，也未 drain agent containers，存在数据替换时容器仍在运行的风险。
- **本地/私有模型接入摩擦：** 非默认端口模型每次调用都弹审批；OpenCode setup 在 Iron 下建议 `host.docker.internal` 地址，但未按 gateway 校验，保存后每轮失败。
- **代理环境失败：** Iron Proxy 返回裸 `407`，git/libcurl 因缺少 `Proxy-Authenticate` challenge 不发送凭据，`git fetch` 直接失败。
- **Telegram 真实群组体验：** MarkdownV2 解析失败导致整条消息丢失；服务消息被当作空消息触发 agent 回复；forum topics 共享 session；reaction/edit 目标 ID 带 agent-group 后缀。
- **凭据安全顾虑：** 此前 Copilot Provider 方案将 token 通过环境变量或容器状态传递，扩大暴露面。
- **Fork 维护成本：** 直接编辑上游文件的 fork 在每次上游变更时都要付出 rebase/冲突成本。

**满意/不满意：**

- 不满意集中在**安装/更新路径**与**通道细节**。
- 满意点从 PR 响应速度侧面体现：核心团队 glifocat 当日贡献 6 个 PR，antonio-antuan 单日提交 4 个 Telegram 修复，barnuri 持续推进 Skills/Provider 生态。
- 由于无评论与反应数据，用户满意度无法量化，仅能从问题描述判断“可用但细节稳定性仍待提升”。

---

## 8. 待处理积压

数据窗口内未见超长期未响应条目，但以下 OPEN PR 相对创建较早且仍未合并，建议维护者优先关注。

| 条目 | 创建/更新 | 积压天数 | 风险/重要性 | 链接 |
|---|---|---|---|---|
| PR #3901 `fix(setup): let the host service reach the internet through an HTTPS proxy` | 2026-09-25 / 2026-09-30 | 约 6 天 | 安装/联网可用性，影响代理环境用户 | [PR #3901](https://github.com/nanocoai/nanoclaw/pull/3901) |
| PR #3928 `feat(skills): add /contribute-upstream operational skill` | 2026-09-26 / 2026-09-30 | 约 5 天 | 生态治理与 fork 回贡，影响长期社区协作 | [PR #3928](https://github.com/nanocoai/nanoclaw/pull/3928) |
| PR #3956 `fix(update): rollback stops the live nohup host and drains agent containers` | 2026-09-28 / 2026-09-30 | 约 3 天 | 高风险更新/回滚修复，建议优先 Review | [PR #3956](https://github.com/nanocoai/nanoclaw/pull/3956) |
| PR #3964、#3965、#3966 Iron/Gateway 组合 | 2026-09-29 / 2026-09-30 | 约 2 天 | 本地模型与 Gateway 体验，主题集中，适合批量 Review | [#3964](https://github.com/nanocoai/nanoclaw/pull/3964) [#3965](https://github.com/nanocoai/nanoclaw/pull/3965) [#3966](https://github.com/nanocoai/nanoclaw/pull/3966) |
| Issue #3961 | 2026-09-28 / 2026-09-30 | 已关闭 | 仍带 `triage/unresolved` 标签，建议清理 triage 状态，避免看板残留未决信号 | [Issue #3961](https://github.com/nanocoai/nanoclaw/issues/3961) |

**维护者提示：** 当前 13 个 OPEN PR 形成明显队列，其中 #3956 属于高风险修复，#3901/#3928 创建时间相对较久。建议按“更新/安装可靠性 → Telegram 通道修复 → Provider/Gateway 组合 → Skills 生态”的优先级分批 Review，以提升合并吞吐并降低积压。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>



好的，这是根据您提供的 NullClaw 项目数据生成的 2026-10-01 项目动态日报。

---

### **NullClaw 项目动态日报 (2026-10-01)**

#### **1. 今日速览**
NullClaw 项目在今日整体活跃度较低，处于功能开发的平静期。核心动态是社区贡献者提交了一项旨在丰富模型提供商生态的新功能 PR。项目当前无版本发布、无新 Issues 产生，社区讨论暂无新的热点。

#### **2. 项目进展**
今日有一项重要的功能增强 PR 待合并，标志着项目在多模型支持战略上的又一推进。

*   **待合并 PR #1016：** `feat(providers): add Cheaper Inference as an OpenAI-compatible gateway`
    *   **摘要：** 该 PR 为 NullClaw 集成了 **Cheaper Inference** 作为新的 OpenAI 兼容网关提供商。Cheaper Inference 是一个允许通过单一 API 密钥访问多个实验室模型的服务。此次集成遵循了与先前 Eden AI (#990) 相同的模式，表明项目正系统性地扩展其模型接入能力。
    *   **意义：** 此项合并将显著增加 NullClaw 用户的模型选择范围和成本优化选项，是项目生态系统建设的关键一步。
    *   **链接：** [nullclaw/nullclaw PR #1016](https://github.com/nullclaw/nullclaw/pull/1016)

#### **3. 社区热点**
今日无新的社区讨论热点。PR #116 是唯一活跃的贡献点，但其目前评论和反应数均为零，表明社区对此项功能的即时反馈尚不明确。

#### **4. 功能请求与路线图信号**
*   **功能请求：** 今日无新功能请求提出。
*   **路线图信号：** 待合并的 PR #1016 是一个强烈的路线图信号。它证实了项目正在积极践行 **“多提供商、开放兼容”** 的战略。未来版本很可能会继续集成更多类似的、具有成本或功能优势的第三方 OpenAI 兼容网关，以构建一个更强大、更灵活的 AI 模型接入层。

#### **5. Bug 与稳定性**
今日无新的 Bug 或稳定性问题报告。

#### **6. 用户反馈摘要**
今日无新的用户反馈。

#### **7. 待处理积压**
当前数据中未显示有长期未响应的重要 Issue 或 PR。项目维护者需关注 PR #1016 的合并进程，并可在合并后引导社区进行测试和反馈。

---
**日报生成说明：** 本日报严格基于提供的数据生成。由于数据量有限，部分板块（如版本发布、社区热点、Bug、用户反馈）因信息缺失而未展开。日报重点突出了唯一的活跃 PR #1016 的技术内容及其对项目发展的战略意义。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报
**报告日期：2026-10-01** ｜ 数据源：nearai/ironclaw（GitHub）
**统计窗口：过去 24 小时**

---

## 1. 今日速览

- 项目今日处于**极低活跃状态**：Issues 零更新、零新开、零关闭，无新版本发布，社区侧无任何人类交互痕迹。
- 唯一的动态是一条由 `ironclaw-ci[bot]` 自动生成的 CI 维护类 PR（#7988），且仍处于 OPEN 状态，尚未被合并。
- 从"人参与度"维度看，今日项目实质推进量为 **0**；从"仓库维护"维度看，仅有 1 条低风险（size: XS, risk: low）的自动化快照刷新动作。
- 无 Bug 报告、无功能请求、无用户评论，因此无法从今日数据中提炼用户反馈或路线图信号。
- **健康度判断**：仓库处于"自动化值守 + 人工静默"的常态空转区间，无负面信号（无回归、无积压爆炸），但也没有任何正向进展。

---

## 2. 版本发布

今日无新版本发布（Releases 数量：0），故本节省略。

---

## 3. 项目进展

**今日合并/关闭的 PR：0 条。**

- 无任何 PR 被合并或关闭，项目在功能、修复、文档等维度**均无净推进**。
- 唯一处于 OPEN 的 PR #7988 属于 CI/基础设施类维护动作，即使合并也**不改变产品功能面**，仅刷新已提交的 codebase-memory 引导快照（codebase knowledge graph）。
- 结论：今日项目前进量 ≈ 0，属于典型的"无实质交付日"。

---

## 4. 社区热点

今日不具备可统计的社区热度——唯一的 PR 由机器人账号发起，`👍` 为 0，评论数数据缺失（`undefined`）。

| 条目 | 类型 | 作者 | 互动量 | 链接 |
|---|---|---|---|---|
| #7988 chore(agents): refresh codebase knowledge graph | PR (OPEN) | ironclaw-ci[bot] | 👍 0 / 评论数据缺失 | [nearai/ironclaw PR #7988](https://github.com/nearai/ironclaw/pull/7988) |

**分析**：该 PR 由夜间 `Codebase Graph Refresh` 工作流自动生成，属于例行仓库自维护。其内容不反映任何用户诉求或社区讨论方向。今日**无社区热点可言**。

---

## 5. Bug 与稳定性

**今日报告的 Bug / 崩溃 / 回归问题：0 条。**

- 无 P0/P1/P2 级别缺陷记录，无对应 fix PR，也无待修复的稳定性议题。
- 稳定性面维持干净状态，但也需注意：**零报告不等于零缺陷**，仅说明今日无用户主动上报。

---

## 6. 功能请求与路线图信号

**今日无新增功能请求（Issues 新增 0 条）。**

- 无用户侧 Feature Request，亦无相关 PR 可据以推断下一版本范围。
- 唯一在途 PR #7988 为 CI 基础设施维护（Change Type: CI/Infrastructure），**与路线图/功能规划无关联**，不构成版本信号。

---

## 7. 用户反馈摘要

**今日无用户反馈可提炼。**

- 无 Issue 评论、无 PR 讨论、无表情反馈（评论字段为 `undefined`，无法做情绪或痛点分析）。
- 因此本节无法输出使用场景、满意度或不满点，属数据缺失而非"零负面反馈"。

---

## 8. 待处理积压

| 条目 | 状态 | 创建时间 | 最后更新 | 滞留时长 | 关注建议 | 链接 |
|---|---|---|---|---|---|---|
| #7988 chore(agents): refresh codebase knowledge graph | OPEN | 2026-08-29 | 2026-09-30 | **约 33 天** | ⚠️ 建议关注 | [PR #7988](https://github.com/nearai/ironclaw/pull/7988) |

**风险提示**：

- #7988 虽标记为 `size: XS, risk: low, contributor: core`，但自创建起已滞留 **33 天**未被合并。若该类自动化刷新 PR 持续积压，会导致提交的 codebase-memory 快照与默认分支实际状态**逐渐偏离**，削弱其作为 Agent 上下文基线（bootstrap snapshot）的准确性。
- 建议维护者确认：是否存在分支保护/审批流程阻塞了 bot PR 的自动合并，或该快照更新是否有意保留人工复核环节。若为流程性问题，建议配置 auto-merge 规则以避免长期堆积。

---

## 数据说明与口径备注

- 本报告**严格基于所提供的 GitHub 数据快照**生成，未引入外部信息或推测性内容。
- PR #7988 的 `评论` 字段原始值为 `undefined`，无法判定为 0 还是数据缺失，相关分析已作保守处理。
- 由于今日 Issues 与 Releases 均为空集，第 2、5、6、7 节属"无数据"而非"无事件"，请勿将空节误读为负面信号。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**日期**：2026-10-01
**数据范围**：过去 24 小时（截至 2026-09-30）
**项目地址**：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览

过去 24 小时项目处于**中高活跃度**状态：PR 侧表现强劲，11 条动态中 9 条已完成合并/关闭，修复类工作集中落地；Issue 侧新增/活跃 10 条，但**多为 [stale] 标签的老问题翻新**，真正当日新建的仅有 1 条（#2784）。值得关注的是，今日出现了一条涉及**消息策略安全漏洞**的 Issue 与配套修复 PR（#2784 → #2785），属于高优先级事项。版本发布为 0，项目正处于**存量问题消化 + 缺陷集中修复**阶段，健康度总体良好但需警惕 stale 积压问题。

---

## 2. 版本发布

今日无新版本发布，本节省略。

---

## 3. 项目进展

今日合并/关闭的 9 条 PR 集中在**稳定性修复**与**功能增强**两大方向，显著推进了多个历史问题的收尾：

| PR | 标题 | 贡献点 |
|---|---|---|
| [#2787](https://github.com/netease-youdao/LobsterAI/pull/2787) | fix: custom model plan routing | 自定义模型 Plan 路由修复（renderer/main/openclaw/cowork 多模块） |
| [#2786](https://github.com/netease-youdao/LobsterAI/pull/2786) | fix: default LobsterAI server models to 32K output cap | 将服务端模型默认输出上限提至 32K，避免推理模型因 8192 默认值提前截断回复 |
| [#944](https://github.com/netease-youdao/LobsterAI/pull/944) | fix(mcp): scrollbar overflowing modal rounded corners | MCP 弹窗滚动条溢出圆角的视觉修复 |
| [#951](https://github.com/netease-youdao/LobsterAI/pull/951) | fix(mcp): prevent accidental data loss when closing form modal | MCP 表单误触关闭导致数据丢失，增加 ESC 二次确认 |
| [#954](https://github.com/netease-youdao/LobsterAI/pull/954) | continueSession 双重错误消息 | 修复会话失败时重复显示两条错误消息 |
| [#956](https://github.com/netease-youdao/LobsterAI/pull/956) | fix(im): optional chaining for accumulator.reject | 修复 IM handler 销毁时后台 accumulator 无 reject 导致的 TypeError 崩溃 |
| [#957](https://github.com/netease-youdao/LobsterAI/pull/957) | fix(cowork): session menu closing during streaming scroll | 修复流式输出时会话菜单自动关闭的交互问题 |
| [#959](https://github.com/netease-youdao/LobsterAI/pull/959) | fix(memory): error when memory text < 2 chars | 单字符记忆条目被静默丢弃，增加行内校验反馈 |
| [#965](https://github.com/netease-youdao/LobsterAI/pull/965) | [codex] add built-in briefing clip skill | 内置简报剪辑技能（briefing-clip），默认启用，含模板/主题/截图脚本 |

**整体评估**：这批 PR 覆盖 MCP、IM、cowork、memory、codex 五大模块，以**缺陷类修复为主**（7 条），配合 1 项新技能上线。90% 的 PR 均为 3 月创建、9-30 才关闭的积压件，说明维护者今日进行了**集中式 backlog 清理**。

---

## 4. 社区热点

### 4.1 安全策略漏洞（今日核心热点）
- **[#2784](https://github.com/netease-youdao/LobsterAI/issues/2784) NIM P2P direct-message policy fails open** — 评论 1，👍 1
  - 报告者 carfeii 进行了**高质量的漏洞分析**：确认影响 `2026.9.23` tag 版本及 `main` 分支，指出 P2P 入站消息过滤器仅检查 `policy === 'allowlist'` 且非空，导致 `'disabled'`、未设置策略、空白名单三种情况均**放行任意发送者**。
  - **配套修复 PR [#2785](https://github.com/netease-youdao/LobsterAI/pull/2785) 已同步提交**，将策略改为 fail-closed（默认拒绝），属于同日报告+修复的典范流程。

### 4.2 讨论最久的老 Bug
- **[#953](https://github.com/netease-youdao/LobsterAI/issues/953) 任务停止/删除后未实际停止** — 评论 3，👍 1（10 条 Issue 中互动量最高）
  - 用户描述了**任务"窜台"、已停任务后台继续运行**导致 API 请求频繁报错的连锁故障，问题横跨任务调度与模型调用，影响核心体验。

### 4.3 诉求分析
- 安全类问题（#2784）体现社区对 **IM 网关权限模型**的关注，且报告质量高、附带 commit 定位，说明存在**具备安全审计能力的深度用户**。
- 功能类热点集中在**多 Agent 隔离**（#964）与**模型配置可视化**（#947/#948/#949），指向"单实例多场景"这一产品方向诉求。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | 是否有 Fix PR |
|---|---|---|---|
| 🔴 高 | [#2784](https://github.com/netease-youdao/LobsterAI/issues/2784) | P2P 直连消息策略 fail-open，任意发送者可绕过策略 | ✅ [#2785](https://github.com/netease-youdao/LobsterAI/pull/2785) 已提交（待合并） |
| 🔴 高 | [#953](https://github.com/netease-youdao/LobsterAI/issues/953) | 任务停止/删除后仍在后台运行，导致模型调用失败、API 频繁报错、「窜台」 | ❌ 无 |
| 🟠 中 | [#961](https://github.com/netease-youdao/LobsterAI/issues/961) | MCP Daemon 未启动，整个 MCP 工具链断开 | ❌ 无（配套修复见已关闭 PR #944/#951，但非同一问题） |
| 🟠 中 | [#962](https://github.com/netease-youdao/LobsterAI/issues/962) | 升级后出现 403 被拦截，回退旧版正常（疑似升级回归） | ❌ 无 |
| 🟡 低 | [#960](https://github.com/netease-youdao/LobsterAI/issues/960) | 千问默认模型初次使用报错 | ❌ 无 |
| 🟡 低 | [#950](https://github.com/netease-youdao/LobsterAI/issues/950) | 模型调用失败提示不够友好 | ❌ 无 |

> 已关闭的修复 PR（#954/#956/#957/#959）分别解决了**双重错误提示、IM 销毁崩溃、会话菜单交互、记忆单字符丢弃**等缺陷，但这些属于历史积压的收尾，所对应的原始 Issue 未在今日列表中直接出现。

---

## 6. 功能请求与路线图信号

今日功能类信号集中在一组**高度关联**的诉求上，均来自 3 月、今日被 stale 标记翻新：

### 6.1 模型配置与 IM 交互解耦（核心方向）
- [#947](https://github.com/netease-youdao/LobsterAI/issues/947)：模型配置页增加调用次序/优先级/次数/Token 用量
- [#948](https://github.com/netease-youdao/LobsterAI/issues/948)：聊天模型与 IM 交互模型分离
- [#949](https://github.com/netease-youdao/LobsterAI/issues/949)：IM 对话支持指定模型，缺失时返回支持列表与限额

**判断**：三者同源（作者 chinazhoumin），共同指向**"IM 交互需要独立的模型治理能力"**。与已关闭的 [#2786](https://github.com/netease-youdao/LobsterAI/pull/2786)（32K 输出上限）以及 [#2787](https://github.com/netease-youdao/LobsterAI/pull/2787)（自定义模型路由）形成呼应——**模型层改造已在推进**，这组功能请求具备进入下一版本的现实基础。

### 6.2 多 Agent 隔离架构
- [#964](https://github.com/netease-youdao/LobsterAI/issues/964)：支持多 Agent，独立的身份/知识库/IM 账号/任务隔离

**判断**：这是**架构级别的需求**，价值描述清晰（多业务角色并行运营），但改动面大（目录、身份文件、session 隔离、用户档案），短期内落地概率低，更可能是中长期路线图项。可关注 [#958](https://github.com/netease-youdao/LobsterAI/pull/958)（临时会话，open 待合并）与之形成的**会话管理演进**趋势。

### 6.3 临时会话（已进入 PR 阶段）
- [#958](https://github.com/netease-youdao/LobsterAI/pull/958)：临时会话功能——不存历史、不出现在侧栏、不允许 pin。**仍处于 OPEN 状态**，是本批功能类 PR 中唯一待合并者，隐私诉求明确，文案完整（中英双语），有较强落地信号。

---

## 7. 用户反馈摘要

从 Issue 评论中提炼的真实痛点：

- **任务调度不可信**（#953）：用户描述「点击停止、删除后未实际停止」「新任务执行时本应结束的任务还在后台运行」，直接导致**模型调用失败、扣费/配额误耗**，这是对核心工作流的信任破坏。
- **非技术用户的求助姿态**（#961）：用户明确表示「不是搞软件的，不懂，如实反馈」，MCP Daemon 断链后**整个工具链不可用且无自检修复路径**——暴露了错误提示与自助恢复机制的缺失。
- **升级回归的挫败感**（#962）：「卸载安装旧版变好了」，用户以**回退版本**作为解决手段，反映升级验证不足。
- **模型选择与 IM 联动带来的意外**（#948）：调试新模型时 IM 同步切模型导致交互失败，用户的核心期待是**隔离风险操作**。
- **安全敏感度提升**（#2784）：报告者主动定位影响版本与 commit，贡献了**可复现的漏洞报告**，显示社区存在高质量贡献者，应优先响应以维护信任。

---

## 8. 待处理积压

需维护者重点关注的事项：

### 8.1 高优先级积压（建议尽快处理）
| 事项 | 类型 | 状态 | 风险 |
|---|---|---|---|
| [#2785](https://github.com/netease-youdao/LobsterAI/pull/2785) | 安全修复 PR | OPEN（待合并） | 对应安全漏洞 #2784，越晚合并暴露窗口越大 |
| [#2784](https://github.com/netease-youdao/LobsterAI/issues/2784) | 安全漏洞 | OPEN | 影响最新 tag 与 main 分支，已公开披露 |
| [#953](https://github.com/netease-youdao/LobsterAI/issues/953) | 核心 Bug | OPEN（已 stale） | 自 3 月起未解决，影响任务调度可信度 |

### 8.2 Stale 积压预警
今日 10 条 Issue 中 **8 条带 [stale] 标签**（#953/#961/#947-950/#960/#962/#964），均为 3-27 创建、9-30 被 stale 流程标记。这批问题**长达 6 个月未被关闭也未解决**，其中不乏核心 Bug（#953）与清晰的架构诉求（#964）。建议：
- 对仍有效的 Bug（#953/#961/#962）**取消 stale 并安排处理**，避免被自动关闭；
- 对功能请求（#947-949/#964）进行**明确的路线图裁决**（接受/拒绝/排期），结束长期悬置。

### 8.3 其他 OPEN 事项
- [#958](https://github.com/netease-youdao/LobsterAI/pull/958)：临时会话功能 PR，已带 stale 标签但仍 OPEN，功能完整，建议 review 后决定去留。

---

**报告结论**：项目今日呈「**修复为主、安全事件突现**」的节奏。PR 流水线健康（9/11 已关闭），但 Issue 侧 stale 率过高（80%），历史积压与新增安全漏洞并存。建议维护者优先合并安全修复 #2785，并对积压 Issue 做一次**集中裁决式清理**，以改善社区信任与项目健康度信号。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>



好的，这是根据您提供的 GitHub 数据生成的 CoPaw 项目动态日报（2026-10-01）。

---

### **CoPaw 项目动态日报 - 2026-10-01**

**项目健康度评估：** 高活跃度。项目今日呈现出极高的开发迭代速度，新版本发布、大量 Bug 修复和关键功能增强并存。社区参与积极，问题反馈及时，但同时也暴露出一些需要紧急关注的稳定性和安全性问题。

---

#### **1. 今日速览**

CoPaw 项目今日处于高速迭代状态，发布了 `v2.2.2-beta.4` 版本。开发活动密集，过去24小时内新增了18个活跃 Issues 和29个待合并的 Pull Request，表明社区和核心团队正围绕特定功能（如后台任务、内存索引、提供者配置）进行集中攻坚。项目整体向前推进势头强劲，但 Issues 列表中安全相关和会话损坏类 Bug 的存在提示我们，需在追求新功能的同时持续关注稳定性和安全性。

---

#### **2. 版本发布**

**新版本：`v2.2.2-beta.4`**

*   **更新内容：**
    *   **feat:** 为 `ReMeLightMemoryCard` 添加了重排序（Reranker）UI配置面板（[PR #6399](https://github.com/agentscope-ai/QwenPaw/pull/6399)）。
    *   **perf(console):** 拆分了控制台（Console）的聊天依赖项，以优化性能和加载速度（[PR #7892](https://github.com/agentscope-ai/QwenPaw/pull/7892)）。
    *   **chore:** 版本号提升至 `2.2.2b4`（[PR #7892](https://github.com/agentscope-ai/QwenPaw/pull/7892)）。

*   **破坏性变更与迁移注意事项：**
    *   此版本为 Beta 版，可能包含未完全测试的新功能和潜在的不稳定性。
    *   控制台依赖项的拆分可能会影响部分自定义部署或集成方式，建议开发者检查其构建配置。
    *   用户从 `v2.2.2b3` 升级时，应关注与 `ReMeLightMemoryCard` UI 相关的任何变更。

---

#### **3. 项目进展**

今日有多个重要 PR 被合并或关闭，显著推动了项目进展：

*   **关键修复与增强：**
    *   **后台任务通知：** 通过 PR #8063，当后台任务（`spawn_subagent`/`submit_to_agent`）完成时，现在会唤醒父智能体会话，解决了后台任务结果无人知晓的问题。
    *   **内存索引健壮性：** PR #8062 修复了因单个文本块超出嵌入提供者令牌限制而导致整个批次索引失败的问题，通过回退机制保留了健康的向量。
    *   **提供者配置灵活性：** PR #8061 允许自定义网关声明其支持的 OpenAI 提示缓存参数，解决了自定义提供者因缓存策略被拒绝的问题（[关闭 Issue #8058](https://github.com/agentscope-ai/QwenPaw/issues/8058)）。
    *   **使用量统计准确化：** PR #8060 修正了实时上下文计量表对 Anthropic Messages 提供者的缓存令牌统计，使显示的使用量更准确（[关闭 Issue #8057](https://github.com/agentscope-ai/QwenPaw/issues/8057)）。
    *   **时区处理修正：** PR #8049 修复了因夏令时（DST）导致消息时间戳偏移的问题，确保了跨时区会话的时间一致性（[关闭 Issue #8046](https://github.com/agentscope-ai/QwenPaw/issues/8046)）。

*   **其他值得关注的合并/关闭：**
    *   PR #5861（macOS 路径问题）、PR #5722（飞书发送者信息丢失）、PR #5170（性能优化）、PR #4902（PRD 工具）、PR #4580（API 增强）、PR #4224（内存索引刷新）、PR #3120/3119（Windows WebView2 修复）等长期存在的 PR 均被标记为 `[CLOSED]` 或 `[Under Review]` 状态更新，表明相关工作已接近完成或进入审核阶段。

---

#### **4. 社区热点**

今日讨论最活跃的议题集中在 Bug 和功能需求上：

*   **Bug #8022 - 会话上下文污染：** 由 `send_file_to_user` 产生的文件/图像内容块和空 assistant 消息导致后续所有模型请求持续返回 400 错误。这是一个严重的会话阻塞性问题，影响所有模型。（[链接](https://github.com/agentscope-ai/QwenPaw/issues/8022)）
*   **Bug #7991 - 任务计数不一致：** 仪表板显示的运行中任务数与聊天列表 API 返回的状态不一致，反映了底层计数逻辑的缺陷。（[链接](https://github.com/agentscope-ai/QwenPaw/issues/7991)）
*   **Bug #8013 - 技能广播超时与失败：** 在广播大型技能包时，前端30秒超时与后端持续复制的过程不匹配，导致技能永远无法成功部署，影响了工作流。（[链接](https://github.com/agentscope-ai/QwenPaw/issues/8013)）
*   **Enhancement #7997 - 消息撤回/编辑：** 用户希望在 WebUI 中实现消息的编辑和撤回功能，并能自动截断历史或回滚文件变更，这是一个重要的用户体验需求。（[链接](https://github.com/agentscope-ai/QwenPaw/issues/7997)）
*   **Bug #7672 - Windows 安全沙箱被突破：** 这是一个高严重性的安全问题，表明在特定配置下，沙箱防护可能被绕过。（[链接](https://github.com/agentscope-ai/QwenPaw/issues/7672)）

---

#### **5. Bug 与稳定性**

今日报告了多个 Bug，按严重程度排列如下：

*   **严重：**
    *   **#8022 - 会话上下文污染导致持续 400 错误。** （无已知 Fix PR）
    *   **#8064 - DeepSeek 提供者：发送 PDF 文件后会话永久损坏。** （无已知 Fix PR）
    *   **#7672 - Windows 安全沙箱被突破。** （无已知 Fix PR）
    *   **#8002 - Windows 自动模式下沙箱关闭可执行恶意 Office COM 命令。** （安全相关，无已知 Fix PR）
*   **高：**
    *   **#8013 - 技能广播超时与失败。** （无已知 Fix PR）
    *   **#7991 - 任务计数不一致。** （无已知 Fix PR）
    *   **#8035 - 转录模型配置页面无法更新配置。** （无已知 Fix PR）
    *   **#8047 - `server/discover` HTTP 422 错误导致流式 HTTP 驱动未激活。** （无已知 Fix PR）
*   **中：**
    *   **#8040 - 嵌入索引不完整。** （已有 Fix PR #8062）
    *   **#8046 - 时区处理导致时间戳偏移。** （已有 Fix PR #8049）
    *   **#8057 - 上下文计量表少统计缓存令牌。** （已有 Fix PR #8060）
    *   **#8058 - 自定义提供者 `prompt_cache_key` 被拒绝。** （已有 Fix PR #8061）
    *   **#8059 - 后台任务记录丢失且无最终响应。** （无已知 Fix PR）
    *   **#8036 - OpenAI 集成与恢复问题。** （无已知 Fix PR）
    *   **#8042 - 工具输出文件自动喂回模型导致错误。** （无已知 Fix PR）

---

#### **6. 功能请求与路线图信号**

*   **明确的功能请求：**
    *   **#7997 - WebUI 消息撤回/编辑：** 这是一个高价值的用户体验功能，可能被纳入近期版本。
    *   **#7945 - 过滤“@所有人”消息：** 针对 IM 平台的实用增强功能，减少无效响应。
*   **从 PR 推断的路线图重点：**
    *   **后台任务管理：** PR #8063 表明项目正致力于完善异步任务生命周期管理。
    *   **内存与索引优化：** 多个 PR（#8062， #4224）表明对记忆和检索能力的持续投入。
    *   **提供者生态扩展：** PR #8061 反映了对支持更多自定义模型网关的重视。
    *   **桌面端体验改善：** 多个长期 PR（#3119， #3120， #5861）的关闭表明项目正着力提升桌面端的稳定性和用户体验。

---

#### **7. 用户反馈摘要**

*   **痛点：**
    *   **会话稳定性：** 用户反馈了多种导致会话“死亡”的问题（#8022， #8064），这对依赖连续对话的场景是致命打击。
    *   **功能缺失：** 缺少消息管理功能（#7997）和 IM 平台的基础过滤能力（#7945），影响了工作流效率。
    *   **配置与状态不透明：** 技能部署（#8013）、任务状态（#7991）和模型配置（#8035）的失败或不一致让用户感到困惑和沮丧。
*   **正面反馈：**
    *   社区对项目能够快速响应并修复复杂问题（如时区、缓存统计）表示认可，特别是当修复以 PR 形式迅速跟进时。
*   **使用场景：**
    *   用户在使用 DeepSeek、Qwen 等模型进行文件处理时遇到特定问题。
    *   在 Windows 和 macOS 桌面端使用时，对稳定性和环境配置有更高要求。
    *   在飞书、钉钉、微信等 IM 平台集成时，对消息处理和权限控制有特定需求。

---

#### **8. 待处理积压**

以下 Issue 或 PR 已存在较长时间且未见明显进展，建议维护者关注：

*   **PR #5861 - 解决打包 macOS 后端的登录 shell PATH 问题：** 创建于 2026-07-08，虽已标记 `[CLOSED]`，但需确认是否已完全解决并稳定。
*   **PR #5722 - 飞书群聊中保留每条消息的发送者信息：** 创建于 2026-07-02，对群聊场景至关重要。
*   **PR #5170 - 缓存智能体列表端点的 PROFILE.md 读取：** 创建于 2026-06-13，重要的性能优化项。
*   **PR #4902 - 添加内置的 PRD CRUD 工具和前端渲染器：** 创建于 2026-06-02，属于较大的功能增强。
*   **PR #4580 - 支持控制台聊天 API 的 extraSystemPrompt 参数：** 创建于 2026-05-20，对 API 用户是重要功能。
*   **PR #4224 - 自动内存摘要后刷新索引：** 创建于 2026-05-11，与内存功能相关。
*   **PR #3120/3119 - Windows 安装程序自动安装 WebView2 / 失败快速提示：** 创建于 2026-04-08，对桌面端新手引导很关键。
*   **PR #2505 - 为子进程命令添加代理支持：** 创建于 2026-03-29，对特定网络环境用户是刚需。
*   **PR #1619 - QQ 丰富媒体 API 支持本地文件上传：** 创建于 2026-03-17，增强 QQ 平台能力。
*   **PR #1560 - QQ 发送错误的 LLM 自愈：** 创建于 2026-03-16，提升平台健壮性。
*   **PR #1489 - 修复聊天界面取消按钮和页面切换消息丢失：** 创建于 2026-03-14，核心 UX 问题。
*   **PR #1481 - 修复 updateSession 调用时聊天消息丢失：** 创建于 2026-03-14，核心 UX 问题。
*   **PR #1206 - 清理格式化程序规范化中的本地路径：** 创建于 2026-03-11，安全相关。
*   **PR #1182 - 模糊 JSON 修复和错误反馈：** 创建于 2026-03-10，提升工具调用稳定性。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



# ZeroClaw 项目动态日报 — 2026-10-01

---

## 1. 今日速览

ZeroClaw 项目在 2026-10-01 展现出**极高的开发活跃度**：过去 24 小时内新增/活跃 Issues 37 条，关闭 4 条；新增 Pull Requests 50 条，但**无一合并或关闭**，表明大量开发工作正处于审查与迭代阶段。项目当前无新版本发布，但多个关键子系统（安全、网关、运行时、Agent 能力）均有实质性推进。整体健康度评估：**活跃开发期，积压风险中等**——PR 数量庞大且多为 XL 级重构，需关注合并节奏。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 今日合并/关闭的 PR
- **已合并：0 条**
- **已关闭：0 条**
- **待合并：50 条**（全部处于 OPEN 状态）

### 推进中的关键方向
尽管今日无 PR 合并，但 50 条待合并 PR 覆盖了项目下一阶段的核心目标（v0.9.0 网关分离、Agent 能力重组、安全加固）：

| 方向 | 代表性 PR | 说明 |
|------|-----------|------|
| **v0.9.0 网关分离** | [#11280](https://github.com/zeroclaw-labs/zeroclaw/pull/11280) | 将健康检查、TUI 列表、成本与事件历史迁移到核心网关 |
| **Agent 能力重组** | [#11187](https://github.com/zeroclaw-labs/zeroclaw/pull/11187), [#11174](https://github.com/zeroclaw-labs/zeroclaw/pull/11174) | 构建 `DefaultCapabilities` 抽象层，统一 CLI Agent 运行时入口 |
| **安全加固** | [#9827](https://github.com/zeroclaw-labs/zeroclaw/pull/9827) | 修复沙箱子进程逃逸漏洞（影响 Seatbelt/Firejail/Bubblewrap/Docker） |
| **工具增强** | [#9833](https://github.com/zeroclaw-labs/zeroclaw/pull/9833) | 新增 `web_research` 委托工具，限制 `web_search` 作用域 |
| **平台扩展** | [#10205](https://github.com/zeroclaw-labs/zeroclaw/pull/10205) | Android 原生工具（截图、可访问性树、UI 操作） |
| **基础设施** | [#10557](https://github.com/zeroclaw-labs/zeroclaw/pull/10557) | Cron 模块独立为 `zeroclaw-cron` crate |
| **运行时修复** | [#11299](https://github.com/zeroclaw-labs/zeroclaw/pull/11299), [#11298](https://github.com/zeroclaw-labs/zeroclaw/pull/11298) | 告知模型未执行的工具调用；取消 turn 时级联取消子委托 |

> **整体迈进步度**：项目正处于 v0.9.0 架构重构的**深水区**，多个 XL 级 PR（#11280、#10557、#11187、#11172）正在改变核心架构，但均未合并，说明下一版本的形态仍在打磨中。

---

## 4. 社区热点

### 评论最多的 Issues（Top 5）

| Issue | 评论数 | 标题 | 链接 |
|-------|--------|------|------|
| #8692 | 15 | [Tracker]: Maintainer decision queue for RFCs and design issues | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) |
| #10366 | 10 | RFC: Clarify PR review evidence, freshness warnings, and author-action boundaries | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/10366) |
| #5982 | 10 | [Feature]: Per-sender RBAC for multi-tenant agent deployments | [链接](https://zeroclaw-labs/zeroclaw/issues/5982) |
| #10230 | 7 | [Bug]: Daemon startup or reload can overflow during agent initialization | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/10230) |
| #10165 | 7 | [Bug]: independent delegate bypasses `block_high_risk_commands` | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/10165) |

### 热点分析

- **#8692（15 评论）**：维护者决策队列的 Tracker，反映了社区对 RFC 审查流程透明化的强烈需求。
- **#10366（10 评论）**：关于 PR 审查证据和作者边界的 RFC，说明项目在流程规范化上持续演进。
- **#5982（10 评论）**：多租户场景下的 Per-sender RBAC 是企业级部署的关键需求，社区关注度极高。
- **#10230 / #10165**：均为高严重度 Bug（S1/S0），分别涉及守护进程崩溃和安全策略绕过，直接影响可用性与安全性。

---

## 5. Bug 与稳定性

### S0 级别（数据丢失 / 安全风险）

| Issue | 标题 | 状态 | 链接 |
|-------|------|------|------|
| [#10165](https://github.com/zeroclaw-labs/zeroclaw/issues/10165) | 独立委托绕过 `block_high_risk_commands` | CLOSED | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/10165) |
| [#9647](https://zeroclaw-labs/zeroclaw/issues/9647) | 知识图谱无 per-agent 归属，任意 agent 可读写他人知识 | OPEN | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9647) |
| [#9646](https://zeroclaw-labs/zeroclaw/issues/9646) | Session/channel 读写工具缺乏 per-agent 所有权检查 | OPEN | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9646) |
| [#11198](https://zeroclaw-labs/zeroclaw/issues/11198) | 委托内存工具丢失 principal 作用域 | OPEN | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/11198) |
| [#11126](https://zeroclaw-labs/zeroclaw/issues/11126) | 队列会话操作保留已撤销的管理员所有权绕过 | OPEN | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/11126) |
| [#11127](https://zeroclaw-labs/zeroclaw/issues/11127) | Session-data 工具绕过 principal 所有权检查 | OPEN | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/11127) |
| [#11123](https://zeroclaw-labs/zeroclaw/issues/11123) | SOP 执行接受通配符工具选择器而不需要 `tools:execute` | OPEN | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/11123) |

### S1 级别（工作流阻塞）

| Issue | 标题 | 状态 | 链接 |
|-------|------|------|------|
| [#10230](https://github.com/zeroclaw-labs/zeroclaw/issues/10230) | Daemon 启动/重载时 agent 初始化溢出 | CLOSED | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/10230) |
| [#11237](https://zeroclaw-labs/zeroclaw/issues/11237) | 配置编辑器无法写入声明式 cron 调度 | OPEN | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/11237) |
| [#9770](https://zeroclaw-labs/zeroclaw/issues/9770) | cron update 静默丢弃对声明式任务的修改 | OPEN | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9770) |
| [#11294](https://zeroclaw-labs/zeroclaw/issues/11294) | Flaky: configure_refuses_an_incarnation_replaced_under_the_lock | OPEN | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/11294) |

### S2 级别（主要功能受损）

| Issue | 标题 | 状态 | 链接 |
|-------|------|------|------|
| [#10975](https://zeroclaw-labs/zeroclaw/issues/10975) | WhatsApp Web 入站图片未下载，agent 收到字面量 `[Image]` | OPEN | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/10975) |
| [#11256](https://zeroclaw-labs/zeroclaw/issues/11256) | `initial_prompt` 已记录但从未发送到 Groq/OpenAI 转录 | OPEN | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/11256) |
| [#11255](https://zeroclaw-labs/zeroclaw/issues/11255) | WhatsApp Web 图片保存到工作区并标记（如 Telegram） | OPEN | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/11255) |
| [#11257](https://zeroclaw-labs/zeroclaw/issues/11257) | WhatsApp Web 丢弃入站图片/视频/文档的标题 | OPEN | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/11257) |
| [#11215](https://zeroclaw-labs/zeroclaw/issues/11215) | OpenCode Go 工具调用失败（不支持 `name` 字段） | OPEN | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/11215) |
| [#11233](https://zeroclaw-labs/zeroclaw/issues/11233) | 验证结果写入报告但未运行检查或使用未测量的计算值 | OPEN | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/11233) |

### 关键发现
- **安全漏洞密集**：7 个 S0 级 Bug 中有 6 个与**身份认证 / 授权 / 所有权检查**相关，说明项目在多 agent 场景下的安全模型存在系统性缺口。
- **WhatsApp Web 是重灾区**：#10975、#11255、#11257 三个 Issue 同时指向 WhatsApp 通道的图片/媒体处理问题。
- **已有修复的 PR**：#9827（沙箱逃逸修复）、#10084（WhatsApp passkey 门控）等 PR 正在审查中，预计合并后将缓解部分安全风险。

---

## 6. 功能请求与路线图信号

### 新功能需求（来自 Issues）

| Issue | 需求 | 关联 PR | 路线图信号 |
|-------|------|---------|------------|
| [#5982](https://zeroclaw-labs/zeroclaw/issues/5982) | Per-sender RBAC（多租户） | #11068（草稿） | **v0.9.0 关键特性**，企业部署必需 |
| [#11235](https://zeroclaw-labs/zeroclaw/issues/11235) | 知识语料库 RAG（检索增强生成） | 无 | 下一代 Agent 能力，可能进入 v1.0 |
| [#8907](https://zeroclaw-labs/zeroclaw/issues/8907) | zerocode TUI 统一插件目录 | #8908, #8909（已合并） | v0.9.0 前端体验改进 |
| [#11001](https://zeroclaw-labs/zeroclaw/issues/11001) | 外部网关本地 IPC 覆盖 | #11000（合同审查） | v0.9.0 网关分离的

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*