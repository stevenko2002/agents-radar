# OpenClaw 生态日报 2026-09-25

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-24 22:16 UTC

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



# OpenClaw 项目动态日报 — 2026-09-25

---

## 1. 今日速览

OpenClaw 项目在 2026-09-25 呈现**高活跃、高压力**状态：过去 24 小时内 Issues 与 PR 双双突破 500 条，新增 1 个版本发布（v2026.9.6 macOS 重建版）。项目整体处于**快速迭代但稳定性承压**阶段——多个 P0 级崩溃/内存泄漏 Issue 仍在活跃追踪中，同时社区与维护者围绕 2026.9.5→2026.9.6 升级带来的回归问题展开了密集讨论。核心健康度指标：**PR 合并率 26%（130/500），Issue 关闭率 10.6%（53/500）**，积压问题较前一日有所增加。

---

## 2. 版本发布

### v2026.9.6 — macOS 重建修复版

| 项目 | 内容 |
|------|------|
| **版本号** | `v2026.9.6` |
| **发布时间** | 2026-09-24 09:52 UTC（重建版） |
| **原始构建** | 2026.9.6 macOS build crashed at launch (#156861) |
| **修复 PR** | #156881 |
| **破坏性变更** | 无 |
| **迁移注意事项** | 若已安装此前的 2026.9.6 构建，需从 App 内更新至 2026.9.5 或直接下载新 DMG |

**更新摘要：** 此版本非功能性更新，而是针对 macOS 原始构建启动即崩溃（#156861）的紧急修复。重建版已通过 notarization（公证），用户可直接下载新 DMG 或从 2026.9.5 在应用内升级。

> ⚠️ **注意：** 2026.9.5→2026.9.6 升级引入了多个回归问题（详见第 5 节），建议 macOS 用户在确认稳定性后再升级。

---

## 3. 项目进展

### 今日关键 PR 动态

| PR | 标题 | 类型 | 影响范围 | 状态 |
|----|------|------|----------|------|
| [#157524](https://github.com/openclaw/openclaw/pull/157524) | Reuse fs-safe，删除重复文件系统代码 | 重构 | 全局 | 👀 待审核 |
| [#157422](https://github.com/openclaw/openclaw/pull/157422) | 避免 Worker 推理持久化阻塞 Gateway 事件循环 | 修复 | Gateway | 👀 待审核 |
| [#157413](https://github.com/openclaw/openclaw/pull/157413) | 防止临时文件耗尽导致 SQLite 协调失败 | 修复 | Gateway/CLI | 👀 待审核 |
| [#157339](https://github.com/openclaw/openclaw/pull/157339) | 插件重载时丢失工具结果和子 Agent 结算 | 修复 | Agents | 📣 需证明 |
| [#156919](https://github.com/openclaw/openclaw/pull/156919) | 子 Agent yield 后返回 followup 结果 | 修复 | Gateway | 👀 待审核 |
| [#152020](https://github.com/openclaw/openclaw/pull/152020) | 托管安装时保留插件限制配置 | 修复 | CLI | ✅ 已关闭 |
| [#151065](https://github.com/openclaw/openclaw/pull/151065) | 未attended 会话完成时 UI 通知 | 功能 | Web UI/Android | ⏳ 等作者 |
| [#145169](https://github.com/openclaw/openclaw/pull/145169) | 原子化更新失败回滚时保留最新数据 | 修复 | 全局 | 📣 需证明 |

### 推进评估

今日 PR 活跃度极高（500 条），但**合并/关闭 130 条（26%）**，说明大量 PR 处于等待审核或作者修改状态。维护者 `steipete` 和 `RomneyDa` 频繁提交关键修复（Gateway 事件循环阻塞、临时文件耗尽、fs-safe 重构），显示项目在性能与稳定性方面持续修复。整体向前推进幅度：**中等偏积极**——架构性重构（fs-safe 复用、配置契约派生）与关键 Bug 修复并行。

---

## 4. 社区热点

### 评论最多的 Issues（Top 10）

| # | Issue | 评论 | 👍 | 核心诉求 |
|---|-------|------|-----|----------|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway Memory Leak — RSS 350MB→15.5GB | 37 | 1 | **P0 级**：几天内内存泄漏导致 OOM，需要紧急修复 |
| [#144911](https://github.com/openclaw/openclaw/issues/144911) | MCP server init timeout 崩溃 Gateway | 30 | 0 | **P1**：stdio MCP 超时触发未处理的 promise rejection |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | Subagent 完成后结果静默丢失 | 28 | 2 | **P1**：无重试、无通知、无自动重启 |
| [#155753](https://github.com/openclaw/openclaw/issues/155753) | Model-catalog 刷新循环占满 CPU | 21 | 0 | **P2**：`readFullModelCatalog()` 每次读取都触发刷新 |
| [#149538](https://github.com/openclaw/openclaw/issues/149538) | Gateway ready 后不服务，事件循环 starving | 21 | 0 | **P0**：632 agent fleet 全部超时 |
| [#112423](https://github.com/openclaw/openclaw/issues/112423) | SQLite transcript 清理阻塞事件循环 | 20 | 0 | **P1**：归档大 transcript 时 Gateway 线程卡死 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | Hook/tool 子进程泄漏（zombie） | 16 | 1 | **P1**：长期运行后 zombie 累积导致性能退化 |
| [#148707](https://github.com/openclaw/openclaw/issues/148707) | 回复丢失："no active tool authority snapshot" | 15 | 0 | **P1**：2026.9.4 回归，第二个 run  displaces in-flight turn |
| [#110190](https://github.com/openclaw/openclaw/issues/110190) | Runtime context carrier 位置导致模型混乱 | 13 | 1 | **P1**：上下文 carrier 放在用户消息之后，浪费推理 token |
| [#53408](https://github.com/openclaw/openclaw/issues/53408) | Write/exec 参数在长对话后静默丢失 | 13 | 2 | **P2**：15+ 轮工具调用后参数变为空对象 |

### 热点分析

社区最强烈的诉求集中在**稳定性**（内存泄漏、OOM、事件循环阻塞）和**可靠性**（消息丢失、静默失败）。其中 **#91588（内存泄漏）** 和 **#149538（事件循环 starving）** 是两个 P0 级问题，直接影响生产环境可用性。**#44925（Subagent 结果丢失）** 和 **#148707（回复丢失）** 则暴露了任务编排层的系统性缺陷。

---

## 5. Bug 与稳定性

### 🔴 P0 — 严重崩溃/可用性问题

| Issue | 标题 | 状态 | Fix PR |
|-------|------|------|--------|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway Memory Leak — RSS 350MB→15.5GB，反复 OOM | 🔓 OPEN | 无（`clawsweeper:no-new-fix-pr`） |
| [#149538](https://github.com/openclaw/openclaw/issues/149538) | Gateway ready 后不服务，事件循环 starving（632-agent fleet） | 🔓 OPEN | 无 |
| [#157107](https://github.com/openclaw/openclaw/issues/157107) | 2026.9.6 prepared-model-catalog worker 永远重建（28-agent install） | ✅ CLOSED | 未知 |
| [#152252](https://github.com/openclaw/openclaw/issues/152252) | Config 写入 `utilityModelSeparation` 导致旧 Gateway 启动失败（exit 78） | 🔓 OPEN | 无 |
| [#156112](https://github.com/openclaw/openclaw/issues/156112) | `openclaw update` 在 global install swap 阶段失败 | 🔓 OPEN | 无 |

### 🟠 P1 — 重要功能缺陷

| Issue | 标题 | 状态 | Fix PR |
|-------|------|------|--------|
| [#144911](https://github.com/openclaw/openclaw/issues/144911) | MCP init timeout → unhandled rejection 崩溃 Gateway | 🔓 OPEN | 无 |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | Subagent 完成结果静默丢失 | 🔓 OPEN | 无 |
| [#112423](https://github.com/openclaw/openclaw/issues/112423) | SQLite transcript 清理阻塞事件循环 | 🔓 OPEN | 无 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | Hook/tool 子进程 zombie 泄漏 | 🔓 OPEN | 无 |
| [#148707](https://github.com/openclaw/openclaw/issues/148707) | 回复丢失（2026.9.4 regression） | 🔓 OPEN | 无 |
| [#110190](https://github.com/openclaw/openclaw/issues/110190) | Runtime context carrier 位置导致模型混乱 | 🔓 OPEN | 无 |
| [#120162](https://github.com/openclaw/openclaw/issues/120162) | Safeguard compaction qualityGuard 被同一 abort signal 杀死 | 🔓 OPEN | 无 |
| [#121617](https://github.com/openclaw/openclaw/issues/121617) | Post-compaction "Already compacted" guard 误判 | 🔓 OPEN | 无 |
| [#145309](https://github.com/openclaw/openclaw/issues/145309) | claude-cli backend 忽略 `CLAUDE_CONFIG_DIR` | 🔓 OPEN | 无 |
| [#139485](https://github.com/openclaw/openclaw/issues/139485) | 托管升级后 Gateway 离线，finalization 挂起 | 🔓 OPEN | 无 |
| [#155859](https://github.com/openclaw/openclaw/issues/155859) | Gateway 启动时间随 plugin 数量增长（2026.9.5） | 🔓 OPEN | 无 |
| [#131150](https://github.com/openclaw/openclaw/issues/131150) | Slack DM 静默丢弃（19 账号 socket mode） | 🔓 OPEN | 无 |
| [#125333](https://github.com/openclaw/openclaw/issues/125333) | totalTokens 通胀在 2026.8.1-beta.2 仍复现 | 🔓 OPEN | 无 |
| [#99910](https://github.com/openclaw/openclaw/issues/99910) | Memory dreaming 阻塞事件循环 ~10 min | 🔓 OPEN | 无 |
| [#143757](https://github.com/openclaw/openclaw/issues/143757) | Windows Scheduled Task 无法无人值守运行 Gateway | 🔓 OPEN | 无 |
| [#115256](https://github.com/openclaw/openclaw/issues/115256) | Desktop app boot-loop Gateway，doctor 建议被立即回退 | 🔓 OPEN | 无 |

### 🟡 P2 — 性能/体验缺陷

| Issue | 标题 |
|-------|------|
| [#155753](https://github.com/openclaw/openclaw/issues/155753) | Model-catalog 刷新循环占满 CPU |
| [#53408](https://github.com/openclaw/openclaw/issues/53408) | Write/exec 参数长对话后静默丢失 |
| [#140129](https://github.com/openclaw/openclaw/issues/140129) | Anthropic cache stuck at ~46k on long sessions |
| [#137613](https://github.com/openclaw/openclaw/issues/137613) | CLI backend pre-compaction memory flush 被禁用 |
| [#151962](https://github.com/openclaw/openclaw/issues/151962) | Phantom user messages（heartbeat/async 完成被当作用户 prompt） |
| [#120735](https://github.com/openclaw/openclaw/issues/12073

---

## 横向生态对比



好的，以下是基于各项目 2026-09-25 动态数据生成的「今日重点」摘要。

---

## 重要更新

1.  **OpenClaw** — 紧急发布 **v2026.9.6 macOS 重建修复版**
    *   **内容：** 针对 macOS 原始构建启动即崩溃（#156861）的紧急修复，重建版已通过公证，用户可直接下载新 DMG 或从 2026.9.5 在应用内升级。
    *   **影响：** 解决了阻碍 macOS 用户使用的关键阻塞问题，恢复了该平台的基本可用性。

2.  **Hermes Agent** — 发布补丁版本 **v0.21.5 (v2026.9.24)**
    *   **内容：** 该版本汇总了自 v0.21.4 以来合并的约 460 个 PR，为下游消费者（Docker 镜像、Hermes Cloud、托管部署）提供了一个稳定标签。
    *   **影响：** 为生态伙伴和用户提供了一个包含大量累积修复的稳定基准，标志着项目进入一个相对稳定的阶段。

3.  **OpenClaw** — 多个 P0 级稳定性问题持续追踪
    *   **内容：** 社区最强烈的诉求集中在 **#91588（Gateway 内存泄漏，RSS 350MB→15.5GB）** 和 **#149538（Gateway ready 后不服务，事件循环 starving）** 两个 P0 级问题，均无对应修复 PR。
    *   **影响：** 直接影响生产环境可用性，是项目当前面临的最大稳定性挑战。

4.  **NanoClaw** — 合并多个关键修复 PR
    *   **内容：** 合并了 **PR #996**（修复 MCP stdio 调用可能无限期挂起）、**PR #978/#1002**（修复 Discord 输入指示器线程栈溢出导致的崩溃）、**PR #1001**（恢复并实现用户期待已久的记忆召回配置功能）。
    *   **影响：** 系统性地解决了网关稳定性、平台特定崩溃和用户配置需求等核心问题，项目质量显著提升。

5.  **NullClaw** — 恢复并增强记忆管理功能
    *   **内容：** 通过 **PR #1001** 恢复了用户期待的 `memory.auto_recall`, `recall_limit`, `max_context_bytes` 配置，允许用户精细控制上下文注入行为。
    *   **影响：** 直接回应了用户对上下文长度和行为的控制需求，提升了核心功能的灵活性和可调性。

6.  **IronClaw** — 发布 **1.4.1-rc.2** 候选版本
    *   **内容：** 延续 RC1 修复，解决了通过 Web UI 提供 Google OAuth 客户端时，Gmail 和 Google Calendar 扩展无法激活的问题；同时将 `wasmtime` 和 `rustls` 依赖更新至安全版本。
    *   **影响：** 降低了 Google 服务集成的运维门槛，并响应了当前安全 advisory 的要求。

7.  **NanoBot** — 系统性清理底层架构问题
    *   **内容：** 今日合并/关闭了多个关键 PR，包括修复后台任务静默失败（#5724, #5431）、Discord 通道状态残留（#5807, #5864）、Matrix 渠道回复（#5292）以及为 Anthropic 模型增加扩展思考支持（#1387）。
    *   **影响：** 正在系统性地解决多渠道支持、任务生命周期管理和模型能力扩展等核心架构问题。

8.  **ZeroClaw** — SOP（标准作业程序）能力成熟化
    *   **内容：** 通过合并多个大型、堆叠的 PR（如 #11102, #10233, #9841），重构 SOP 系统以实现无头运行、从所有创作表面重命名以及驱动代理步骤。
    *   **影响：** 标志着 SOP 从简单的编排工具向一个完整的、由守护进程控制的自动化引擎演进，是架构能力的关键升级。

---

## 活跃度概览

今日整体活跃度**非常高**，多个项目同时处于密集开发或修复周期。**OpenClaw** 和 **Hermes Agent** 在 Issue 和 PR 数量上均突破 500 条，呈现高活跃、高压力状态；**NanoBot** 和 **NanoClaw** 则展现出健康的迭代节奏，多个关键修复 PR 被成功合并，项目质量稳步提升。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



# NanoBot 项目动态日报（2026-09-25）

## 1. 今日速览
NanoBot 项目在今日展现出极高的开发活跃度与健康的迭代状态。过去24小时内，项目共处理了 **39 条 PR（其中 26 条已合并或关闭，合并率约 66.7%）**，以及 **14 条 Issues 更新（关闭 6 条，新增/活跃 8 条）**。项目整体处于高速 bug 修复与 WebUI 功能深化的阶段，核心开发者（如 `coinwh`、`chengyongru`、`yu-xin-c`、`wzrayyy` 等）表现活跃。尽管无新版本发布，但大量底层架构问题（如后台任务异常、Discord/Telegram 渠道渲染与状态残留、上下文压缩死锁）正在被系统性地清理。

---

## 2. 版本发布
*   **新版本发布：** 无（今日无新版本，最新 Releases 为空）。
*   **前置版本（v0.3.5）遗留反馈：** v0.3.5 中引入的严格配置校验（要求 `_nanobot` 目录必须移出 workspace）引发了社区用户的摩擦（见 Issue #5881），已在今日关闭，后续版本需重点关注配置迁移的易用性说明或弹性调整。

---

## 3. 项目进展
今日有多个关键 PR 成功合并或关闭，标志着项目在稳定性、多渠道支持及 WebUI 体验上迈出了重要一步：

*   **WebUI 国际化与体验升级：** PR #5367 成功关闭，实现了 WebUI 端 Agent 活动文本的全语言本地化（覆盖 10 种语言，修复 #5366）；同时，PR #5904 和 #5905 关闭，大幅优化了聊天刷新性能、移动端交互，并保持了全局页面 URL 的整洁性。
*   **后台任务异常机制修复：** PR #5724 和 #5431 成功关闭，重构了 `AgentLoop.schedule_background` 的生命周期回调，解决了后台任务静默失败、无法检索异常的问题（修复 #5429）。
*   **Discord 渠道状态清理：** PR #5807 和 #5864 关闭/推进，彻底清除了 Discord 通道在停止后残留的反应任务和内存引用（修复 #5806）。
*   **Matrix 渠道回复修复：** PR #5292 关闭，使 Bot 能够正确对 Matrix 房间级用户事件进行线程回复（修复 #5274）。
*   **Anthropic 思考模式支持：** PR #1387 关闭，为 Anthropic 模型增加了扩展思考（extended thinking）支持，与其他模型的 `reasoning_effort` 并行。
*   **OpenCode Go 模型路由：** PR #5906 推进中，将 `muse-spark` 贡献者模型路由至 Responses API，解决其在 `/chat/completions` 下返回 500 的问题（关联 #5896）。

---

## 4. 社区热点
今日社区讨论和代码提交集中在以下几个核心诉求上：

*   **Issue #5849 - 自动上下文压缩死锁（无 Token 预算保护）：** 
    *   *链接：* [HKUDS/nanobot Issue #5849](https://github.com/HKUDS/nanobot/issues/5849)
    *   *诉求：* 用户指出自动压缩路径 `summarize_transcript` 在历史记录超出输入预算后会陷入死锁且无法自动恢复。这是关乎长对话存活能力的核心稳定性问题，目前无对应的 Fix PR，高度依赖维护者关注。
*   **Issue #5896 & PR #5906 - OpenCode Go 模型支持 Responses API：**
    *   *链接：* [Issue #5896](https://github.com/HKUDS/nanobot/issues/5896) / [PR #5906](https://github.com/HKUDS/nanobot/pull/5906)
    *   *诉求：* 社区贡献者 `coinwh` 和 `M

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 — 2026-09-25

## 1. 今日速览

过去 24 小时，Hermes Agent 项目维持高活跃度：Issues 更新 50 条（新开/活跃 27，已关闭 23），PR 更新 50 条（待合并 49，已合并/关闭 1），并发布补丁版本 v0.21.5（v2026.9.24）。Issue 关闭率达 46%，维护者清理节奏良好；但 PR 待合并积压严重（49 条），可能形成评审瓶颈。新版本汇总了自 v0.21.4 以来的约 460 个 PR，为下游消费者提供了稳定标签。社区讨论热点集中在自动化集成阻塞（#88584，139 条评论）和会话状态管理相关 Bug 上。整体健康度评估：活跃且维护积极，但需关注 PR 评审吞吐与长期积压。

## 2. 版本发布

**v2026.9.24: Hermes Agent v0.21.5**

- **发布日期**：2026-09-24
- **更新内容**：补丁发布。该标签将自 v0.21.4 以来合并的约 460 个 PR 汇总为稳定标签，面向下游消费者（Docker 镜像、Hermes Cloud、托管部署）。完整策展说明推迟发布。
- **破坏性变更**：发布摘要未提及任何破坏性变更。
- **迁移注意事项**：下游消费者应更新至 `v2026.9.24` 标签以获取累积修复。由于是补丁汇总，建议关注后续完整发布说明以了解具体变更细节。
- **链接**：[Release v2026.9.24](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.9.24)

## 3. 项目进展

今日合并/关闭的 PR 仅 1 条，但新版本汇总了约 460 个 PR，表明过去一段时间有大量改进被整合。

- **今日已关闭 PR**：
  - [PR #121981](https://github.com/NousResearch/hermes-agent/pull/121981) `fix(gateway): screen busy follow-ups before steering or queueing` — 在忙碌会话授权和 steer/queue/interrupt 动作之前运行 `pre_gateway_dispatch` 策略，支持 skip 和 rewrite，并保留排队事件的准入决策。推进了网关消息投递的可靠性。

- **重要待合并 PR**（若合并将显著推进修复）：
  - [PR #121962](https://github.com/NousResearch/hermes-agent/pull/121962) `fix(cli): publish the quiet session id before the interrupt-grace sleep` — 修复 #121890，确保 `hermes chat -Q` 在 SIGTERM 下也能输出 session id。
  - [PR #121946](https://github.com/NousResearch/hermes-agent/pull/121946) `fix(fts): run FTS DDL without executescript's implicit commit` — 修复 #121882，解决 FTS 对齐保存点被隐式提交破坏的问题。
  - [PR #121684](https://github.com/NousResearch/hermes-agent/pull/121684) `fix(desktop): keep SSH-isolated backends out of local attach and update, and retire them on code skew` — 修复 SSH 隔离后端被本地误 attach/update 的问题。
  - [PR #121420](https://github.com/NousResearch/hermes-agent/pull/121420) `fix(desktop): cover the port-announce wait in the renderer boot timeout` — 统一渲染器启动超时与端口宣告等待预算。
  - [PR #121983](https://github.com/NousResearch/hermes-agent/pull/121983) `fix(desktop): restore per-connection tabs and chat after backend switches` — 修复桌面后端切换后标签页与会话恢复问题。

项目整体向前迈进了显著一步（460 PR 汇总），但今日 PR 合并节奏放缓，49 条待合并 PR 覆盖 CLI、FTS、桌面、SSH 后端、网关、账户、Kanban、MCP、STT 等多个组件，显示多线并进。

## 4. 社区热点

- **最热 Issue**：[Issue #88584](https://github.com/NousResearch/hermes-agent/issues/88584) [OPEN] `Automated Nous integration is blocked` — 139 条评论，创建于 2026-08-17，更新于 2026-09-24。标签：invalid, comp/cron, P3。摘要：计划的 Nous-to-Enterkey 合并在 `cron/jobs.py` 中存在冲突，没有发布分支被更改，仪表盘更新器停留在最后测试的 Enterkey 版本。**分析**：长期阻塞的自动化集成问题，高评论数表明维护者/机器人反复讨论，可能影响 CI/CD 和发布流程，但标签为 invalid 和 P3，优先级不高。

- **次热 Issue**：[Issue #121890](https://github.com/NousResearch/hermes-agent/issues/121890) [OPEN] `hermes chat -Q loses the session id on SIGTERM` — 7 条评论。用户报告安静单次查询模式下，SIGTERM 未打印 `session_id:`，而 SIGINT 会。已有修复 PR #121962。反映 CLI 编排场景下的会话可观测性需求。

- **第三热 Issue**：[Issue #106217](https://github.com/NousResearch/hermes-agent/issues/106217) [CLOSED] `Desktop dead-ends on 'Turn failed' when resuming a session owned by a live TUI` — 5 条评论，已关闭。用户痛点：桌面端恢复被 TUI 占用的会话时进入死胡同，无路可走。

- **其他高评论 Issue**：
  - [Issue #107427](https://github.com/NousResearch/hermes-agent/issues/107427)（5 条，systemd 网关更新被 SIGKILL）
  - [Issue #103044](https://github.com/NousResearch/hermes-agent/issues/103044)（5 条，TUI 心跳/循环定时器失效，已关闭）
  - [Issue #84102](https://github.com/NousResearch/hermes-agent/issues/84102)（4 条，TTS Ogg/Vorbis 问题）
  - [Issue #103900](https://github.com/NousResearch/hermes-agent/issues/103900)（4 条，桌面固定会话本地化分歧，已关闭）
  - [Issue #42517](https://github.com/NousResearch/hermes-agent/issues/42517)（4 条，ExecStop 标记）

- **PR 讨论热度**：PR 评论数未显示（undefined），表明 PR 讨论不活跃，评审参与度可能较低。

## 5. Bug 与稳定性

按严重程度排列：

- **P0**：[Issue #121840](https://github.com/NousResearch/hermes-agent/issues/121840) [OPEN] `Mid-session route commits null the stored system prompt; next turn logs WARNING and rebuilds from scratch` — 影响核心 agent 的会话状态写入与恢复路径，可见于任何消息网关或 CLI 会话（Discord，数天旧会话，~40–160k token 提示）。每次中途路由提交（如 `/model` 切换）都会将存储的系统提示置空，下一轮重建。**无直接 fix PR，需紧急关注。**

- **P2**：
  - [Issue #121890](https://github.com/NousResearch/hermes-agent/issues/121890) [OPEN] CLI 安静模式 SIGTERM 丢失 session id。**已有 fix PR #121962。**
  - [Issue #107427](https://github.com/NousResearch/hermes-agent/issues/107427) [OPEN] systemd 管理的网关 `/update` 无法完成，更新器被自己重启的网关 SIGKILL。无 fix PR。
  - [Issue #84102](https://github.com/NousResearch/hermes-agent/issues/84102) [OPEN] 本地 TTS 提供者将 Ogg/Vorbis 写入 `.ogg` 路径，平台语音气泡静默降级。无 fix PR。
  - [Issue #42517](https://github.com/NousResearch/hermes-agent/issues/42517) [OPEN] `ExecStop` 应写入 planned-stop 标记而非推断信号源。无 fix PR。
  - [Issue #120356](https://github.com/NousResearch/hermes-agent/issues/120356) [OPEN] Windows shell hook 审批在 asyncio 事件循环线程调用 `input()`，控制台启动器冻结循环 105s，网关以 exit 75 自杀。无 fix PR。
  - [Issue #121857](https://github.com/NousResearch/hermes-agent/issues/121857) [OPEN] macOS Desktop 签名身份不可用时，应回退到 identifier-pinned ad-hoc 签名。无 fix PR。

- **P3**：[Issue #108805](https://github.com/NousResearch/hermes-agent/issues/108805) [OPEN] Desktop 文件树显示 "No project open"，按会话粘滞。无 fix PR。

- **今日关闭的 Bug**（23 条中的一部分）：#106217、#103044、#103900、#101885、#106689、#105469、#103755、#103234、#102893、#101854、#102283、#107410、#105759、#104412、#103594、#107000、#106821、#102790、#103181、#105213 等。关闭率高，表明维护者积极清理。

- **已有 fix PR 的 Bug**：除 #121890 → #121962 外，还有 [PR #121566](https://github.com/NousResearch/hermes-agent/pull/121566)（reasoning-field 长度停止与 taskkill 失败）、[PR #121523](https://github.com/NousResearch/hermes-agent/pull/121523)（桌面 `--profile` 转发）、[PR #121528](https://github.com/NousResearch/hermes-agent/pull/121528)（Electron git spawn 隐藏）、[PR #121437](https://github.com/NousResearch/hermes-agent/pull/121437)（账户 Claude Code 连接）、[PR #121420](https://github.com/NousResearch/hermes-agent/pull/121420)（渲染器启动超时）、[PR #121412](https://github.com/NousResearch/hermes-agent/pull/121412)（Kanban 事件流）、[PR #121684](https://github.com/NousResearch/hermes-agent/pull/121684)（SSH 隔离后端）、[PR #121980](https://github.com/NousResearch/hermes-agent/pull/121980)（OpenCode 400）、[PR #121963](https://github.com/NousResearch/hermes-agent/pull/121963)（skills 发布）、[PR #121946](https://github.com/NousResearch/hermes-agent/pull/121946)（FTS DDL）、[PR #109015](https://github.com/NousResearch/hermes-agent/pull/109015)（provider 命名空间路由）。这些 PR 若合并将提升稳定性。

## 6. 功能请求与路线图信号

- **新功能请求**：[Issue #121970](https://github.com/NousResearch/hermes-agent/issues/121970) [OPEN] `[Feature]: Signal: option to disable Note to Self handling` — 用户场景：signal-cli 作为链接的次要设备在操作者自己的号码上运行时，Signal 适配器将每条 "Note to Self" 消息视为 agent 提示。请求提供选项禁用此行为。标签：comp/gateway, platform/signal, area/config, P3。**无对应 PR，但可能被纳入下一版本**，因为影响 Signal 用户体验。

- **已有功能 PR（可能纳入下一版本）**：
  - [PR #30702](https://github.com/NousResearch/hermes-agent/pull/30702) `feat(stt): support remote audio URL transcription (Fixes #30657)` — 接受 HTTP(S) 音频 URL，检查重定向安全性，探测元数据，Groq 请求走 multipart URL 字段。自 2026-05-23 开放，若合并将增强 STT 能力。
  - [PR #121967](https://github.com/NousResearch/hermes-agent/pull/121967) `catalog: pin Orbit Desktop 0.2.7 — themes and agent observability` — 插件目录更新，引入主题和 agent 可观测性。
  - [PR #121412](https://github.com/NousResearch/hermes-agent/pull/121412) `fix(kanban): start the events stream at the board tail` — 性能优化，避免重放全部历史。

- **判断**：Signal 选项可能等待社区贡献；STT 远程音频因长期开放，可能需要维护者推动。下一版本可能包含这些功能，但 v0.21.5 已汇总大量 PR，完整功能列表待发布说明。

## 7. 用户反馈摘要

- **真实用户痛点**：
  - **桌面端会话管理问题频发**：恢复被 TUI 占用的会话时死胡同（#106217），多 profile 安装下审批失败（#105469、#103755），桌面侧边栏会话固定不同步（#103900），文件树 "No project open"（#108805）。
  - **消息投递可靠性**：桌面 WebSocket 重连抖动杀死排队后的 turn，两次丢失回复无反馈（#103181）。systemd 网关更新被 SIGKILL（#107427）。
  - **跨平台更新问题**：Windows 更新交接停滞、僵尸进程（#102283），Windows 暂存桌面提升因杀毒软件重命名锁失败回滚（#106821），macOS 预览请求超时（#106689），macOS 签名身份回退（#121857）。
  - **本地模型工具调用**：Ollama Qwen3.5:9B 返回有效 `tool_calls` 但 Hermes 渲染为纯文本（#104412）。
  - **技能与审批**：桌面阻止 `/skills approve` 等命令（#105759），`/skill` 带附件被当作纯文本（#103594）。

- **满意/不满意**：用户对项目活跃维护表示认可（大量 Bug 被关闭），但对桌面端稳定性和跨平台一致性不满。CLI 用户关注会话 ID 可观测性（#121890）。Signal 用户希望更细粒度控制（#121970）。

- **使用场景**：多 profile 部署、SSH 远程后端、Windows/macOS 桌面、本地模型（Ollama）、消息平台（Discord、Signal）、TTS/STT、技能系统。

## 8. 待处理积压

- **长期未响应的重要 Issue**：
  - [Issue #88584](https://github.com/NousResearch/hermes-agent/issues/88584) — 开放自 2026-08-17，139 条评论，自动化 Nous 集成阻塞。虽标签 invalid/P3，但高讨论度表明需要明确结论或关闭。
  - [Issue #42517](https://github.com/NousResearch/hermes-agent/issues/42517) — 开放自 2026-06-09，ExecStop 标记问题，P2，无 fix PR。
  - [Issue #84102](https://github.com/NousResearch/hermes-agent/issues/84102) — 开放自 2026-08-11，TTS Ogg/Vorbis，P2，无 fix PR。
  - [Issue #108805](https://github.com/NousResearch/hermes-agent/issues/108805) — 开放自 2026-09-12，桌面文件树，P3，无 fix PR。
  - [Issue #120356](https://github.com/NousResearch/hermes-agent/issues/120356) — 开放自 2026-09-23，Windows shell hook 审批，P2，无 fix PR。

- **长期开放的 PR**（自 2026-05-23，均由 deepujain 提交，已开放约 4 个月）：
  - [PR #30694](https://github.com/NousResearch/hermes-agent/pull/30694) `fix(mcp): stagger idle keepalive probes`
  - [PR #30702](https://github.com/NousResearch/hermes-agent/pull/30702) `feat(stt): support remote audio URL transcription`
  - [PR #30700](https://github.com/NousResearch/hermes-agent/pull/30700) `fix(state): retry transient SQLite WAL setup failures`
  - [PR #30695](https://github.com/NousResearch/hermes-agent/pull/30695) `fix(kanban): guard default-truncated worker file reads`
  - **建议**：这些 PR 可能因评审资源不足而积压，建议维护者优先分类或安排评审。

- **其他待关注 PR**：[PR #109015](https://github.com/NousResearch/hermes-agent/pull/109015) — 开放自 2026-09-12，provider 命名空间路由，P2，安全边界相关。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



# PicoClaw 项目动态日报 — 2026-09-25

---

## 1. 今日速览

PicoClaw 今日整体活跃度偏低，处于**温和维护状态**。过去 24 小时内无新版本发布，PR 层面 8 条全部处于待合并状态（其中 5 条为 Dependabot 自动依赖升级，2 条已标记为 stale），无代码合入。Issue 层面净变化为 0（新开 1、关闭 1），核心讨论集中在 Pico 客户端多行输入被截断的 Bug。项目当前无重大功能推进，主要精力集中在依赖更新与历史积压 PR 的清理。

---

## 2. 版本发布

**今日无新版本发布。** 最近一次 Release 信息未在数据中体现，暂无更新内容、破坏性变更或迁移注意事项需要说明。

---

## 3. 项目进展

今日**无 PR 合入或关闭**，项目整体未向前迈进。待合并的 8 条 PR 中：

| PR | 类型 | 状态 | 停滞天数 |
|---|---|---|---|
| [#3381](https://github.com/sipeed/picoclaw/pull/3381) feat: Switch Openai to responses API | 功能 | stale | ~8 天 |
| [#3376](https://github.com/sipeed/picoclaw/pull/3376) fix(deltachat): custom channel registration | 修复 | stale | ~15 天 |
| [#3371](https://github.com/sipeed/picoclaw/pull/3371) feat(providers): add opencode-go provider | 功能 | OPEN | ~17 天 |
| [#3389](https://github.com/sipeed/picoclaw/pull/3389) build(deps): bump golang.org/x/crypto | 依赖 | OPEN | 1 天 |
| [#3388](https://github.com/sipeed/picoclaw/pull/3388) build(deps): bump modelcontextprotocol/go-sdk | 依赖 | OPEN | 1 天 |
| [#3387](https://github.com/sipeed/picoclaw/pull/3387) build(deps): bump anthropic-sdk-go | 依赖 | OPEN | 1 天 |
| [#3386](https://github.com/sipeed/picoclaw/pull/3386) build(deps): bump mautrix | 依赖 | OPEN | 1 天 |
| [#3385](https://github.com/sipeed/picoclaw/pull/3385) build(deps): bump line-bot-sdk-go | 依赖 | OPEN | 1 天 |

**关键判断**：5 条 Dependabot 依赖更新 PR 集中在今日创建，若全部合入将完成一次较大幅度的依赖升级（涉及 crypto、MCP SDK、Anthropic SDK、Mautrix、LINE SDK），有助于安全性和兼容性。但 3 条功能/修复类 PR 已标记 stale，说明维护者响应速度有待提升。

---

## 4. 社区热点

今日社区讨论最集中的议题为 **Pico Channel 多行输入 Bug**：

- **[#3390](https://github.com/sipeed/picoclaw/issues/3390)**（已关闭）— 用户 `chentianxiong123` 报告在 Pico 客户端（移动端 TUI）粘贴多行文本（诗歌、代码块）时，内容被按换行符拆分为多条独立消息，破坏了消息结构。该 Issue 已于今日关闭，但**未见关联的修复 PR**，可能是通过其他方式解决或被标记为"wontfix"。
- **[#3391](https://github.com/sipeed/picoclaw/issues/3391)**（新开）— 同一作者就同一问题重新开启的 Issue，说明问题可能未被真正修复，或用户认为关闭不当。

**诉求分析**：用户期望在 Pico 移动端完整发送多行文本，当前行为与预期严重不符，影响诗歌、代码、配置片段等典型多行内容的传输。这是**高优先级的用户体验缺陷**。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 是否有 Fix PR |
|---|---|---|---|
| 🔴 高 | [#3391](https://github.com/sipeed/picoclaw/issues/3391) Pico channel splits multi-line input into multiple messages | OPEN | ❌ 无 |
| 🟡 中 | [#3390](https://github.com/sipeed/picoclaw/issues/3390) 同上（旧 Issue，已关闭） | CLOSED | ❌ 无关联 PR |

**分析**：#3390 被关闭但 #3391 被重新打开，形成了一对"幽灵 Bug"——表面上看问题已解决，实际并未修复。建议维护者核实 #3390 的关闭原因，若为误关需向 #3391 追加处理。该 Bug 影响 Pico 移动端核心输入体验，属于**用户高频触达路径**上的缺陷。

---

## 6. 功能请求与路线图信号

今日无新增功能请求类 Issue。但从已有 PR 可以观察到以下路线图信号：

- **OpenAI Provider 升级**（PR #3381）：从 Chat Completions API 切换到 Responses API，暗示项目正跟进 OpenAI 最新接口规范，但该 PR 已 stale，需维护者决策。
- **OpenCode Go Provider 支持**（PR #3371）：新增 `opencode-go` provider 及 `x-opencode-session` header，表明项目在拓展模型供应商生态，支持会话级路由。已停滞 ~17 天。
- **DeltaChat Channel 修复**（PR #3376）：解决 DeltaChat channel 启动时的 config validation error，属于渠道可用性修复。已 stale ~15 天。

**预测**：若 stale PR 被激活，下一版本可能包含：OpenAI API 切换、OpenCode Go 支持、DeltaChat 通道修复，以及 5 项依赖升级。

---

## 7. 用户反馈摘要

从 #3390 / #3391 提炼：

| 维度 | 内容 |
|---|---|
| **痛点** | Pico 移动端（TUI）无法正确处理多行粘贴内容，换行符被当作消息分隔符 |
| **使用场景** | 用户在移动设备上粘贴诗歌、代码块、多行配置等结构化文本 |
| **满意/不满意** | 不满意——核心输入功能存在明显缺陷，直接影响可用性 |
| **用户态度** | 同一用户两次提交 Issue（甚至在首次关闭后重新开启），表明问题未被重视或修复无效 |

---

## 8. 待处理积压

以下 PR/Issue 已长时间无响应，建议维护者关注：

| 编号 | 类型 | 标题 | 积压时长 | 风险 |
|---|---|---|---|---|
| [#3371](https://github.com/sipeed/picoclaw/pull/3371) | PR | add opencode-go provider | ~17 天 | 中——新供应商生态拓展 |
| [#3376](https://github.com/sipeed/picoclaw/pull/3376) | PR | fix(deltachat) config validation | ~15 天 | 中——影响 DeltaChat 渠道可用性 |
| [#3381](https://github.com/sipeed/picoclaw/pull/3381) | PR | Switch Openai to responses API | ~8 天 | 低——API 切换可能有兼容风险 |
| [#3391](https://github.com/sipeed/picoclaw/issues/3391) | Issue | Pico multi-line input bug | 1 天 | 高——直接影响用户核心体验 |

---

**综合健康度评估**：🟡 黄色预警。项目代码层面活跃度不足（无合入、功能 PR 大面积 stale），但依赖更新机制（Dependabot）运转正常。最紧迫的风险是 Pico 客户端多行输入 Bug 未被有效修复，以及 3 条功能类 PR 长期停滞导致的功能交付延迟。建议维护者优先处理 #3391（用户体验缺陷）并清理 stale PR。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



好的，这是根据您提供的 NanoClaw GitHub 数据生成的 2026-09-25 项目动态日报。

---

### **NanoClaw 项目动态日报 (2026-09-25)**

#### **1. 今日速览**
NanoClaw 项目在今日展现出极高的开发活跃度，核心贡献者 `glifocat` 推动了密集的修复工作。过去24小时内共更新了14个 Pull Request，其中4个已合并/关闭，主要集中在对 Iron Proxy 网关、CLI 工具和设置流程的稳定性改进上。同时，社区报告了2个与 Iron Proxy 相关的 Issues，其中 arm64 架构兼容性问题已有对应的修复 PR 提交。项目整体处于一个积极的 bug 修复和功能强化周期。

#### **2. 版本发布**
*   **无新版本发布。** 最新发布版本仍为 2.4.0。

#### **3. 项目进展**
今日有 4 个 PR 被合并或关闭，标志着多项关键修复已进入主线：
*   **修复 CLI 帮助信息不准确 (PR #3882, #3889)**：使 `ncl approvals help` 和 `ncl dropped-messages help` 命令能够列出所有主机实际写入的状态和原因，提升了开发者体验和工具的可信度。
*   **修复设置流程的条件判断 (PR #3884, #3885)**：解决了在未选择运行时或非 Claude 安装的情况下，错误提供 Claude CLI 安装选项的问题，使安装流程更加健壮。
*   **增强会话上下文理解 (PR #3890)**：在聊天系统提示中解释了入站消息块（如 `<message>`, `<dm-history>`）的含义，帮助 AI 更好地理解复杂输入。
*   **修复原生构建检测 (PR #3879)**：改进了 `scripts/rebuild-native.mjs` 脚本，使其能正确检测损坏（而不仅仅是缺失）的 `better-sqlite3`，确保原生模块在重建后能正常加载。

这些合并的 PR 体现了项目在完善开发者工具、优化安装体验和提升核心功能稳定性方面的持续投入。

#### **4. 社区热点**
今日的社区讨论高度集中在 **Iron Proxy** 组件上，两个最活跃的 Issue 都源于此：
*   **#3888 [OPEN] Iron Proxy setup fails on arm64 hosts** (0评论, 0👍)
    *   **诉求**：用户报告在 arm64 架构主机（如 NVIDIA DGX Spark）上安装 NanoClaw 时，Iron Proxy 的 Control 步骤因容器镜像为 amd64 专用而失败。这直接阻碍了项目在 Apple Silicon 或 ARM 服务器等现代硬件上的部署。
    *   **链接**：[nanocoai/nanoclaw Issue #3888](https://github.com/nanocoai/nanoclaw/issues/3888)
*   **#3881 [OPEN] Iron Proxy: per-host auto-approval rule** (0评论, 0👍)
    *   **诉求**：当前网关的自动批准规则过于僵化（仅批准特定模型域和只读主机）。用户请求一个更细粒度的、基于主机的自动批准规则，以便在无需每次人工确认的情况下，允许工具技能调用特定的受信主机。这反映了用户对工作流自动化和安全策略灵活性的强烈需求。
    *   **链接**：[nanocoai/nanoclaw Issue #3881](https://github.com/nanocoai/nanoclaw/issues/3881)

#### **5. Bug 与稳定性**
今日报告的 Bug 按严重程度排列如下：

| 严重程度 | 描述 | 是否有 Fix PR | 链接 |
| :--- | :--- | :--- | :--- |
| **高** | **Iron Proxy 在 arm64 主机上安装失败**：Iron Control 镜像为 amd64 专用，导致 `exec format error`。 | **是** (PR #3891) | [Issue #3888](https://github.com/nanocoai/nanoclaw/issues/3888), [PR #3891](https://github.com/nanocoai/nanoclaw/pull/3891) |
| **中** | **Iron Proxy 数据库孤儿化**：安装失败或中止后，残留的数据库卷和 compose 容器会阻止重试安装。 | **是** (PR #3883) | [PR #3883](https://github.com/nanocoai/nanoclaw/pull/3883) |
| **中** | **Agent Runner 心跳超时**：当 Claude 流式输出一个长时间的内容块时，主机扫描可能会误判容器无响应并终止生成。 | **是** (PR #3893) | [PR #3893](https://github.com/nanocoai/nanoclaw/pull/3893) |
| **低** | **CI 测试时序波动**：社区门户运行时测试和重启就绪测试在负载高的 CI 运行器上偶现失败。 | **是** (PR #3887, #3892) | [PR #3887](https://github.com/nanocoai/nanoclaw/pull/3887), [PR #3892](https://github.com/nanocoai/nanoclaw/pull/3892) |

#### **6. 功能请求与路线图信号**
*   **核心功能增强**：Issue #3881 提出的“按主机自动批准规则”是一个重要的功能请求，旨在提升 Iron Proxy 的可用性和安全性。如果实现，将显著简化多主机环境下的自动化工作流。
*   **长期功能 PR**：PR #3509 和 #3510 已开放近一个月，它们为 WhatsApp 共享模式添加了发送者标签功能。这表明项目正朝着支持更复杂、多智能体协作场景的方向发展，是路线图上的重要信号，但目前尚未合并。

#### **7. 用户反馈摘要**
*   **痛点**：用户在实际部署中遇到的最大障碍是 **平台兼容性**（arm64 支持）和 **安装流程的脆弱性**（失败后难以重试）。这直接影响了项目的可及性和用户体验。
*   **场景**：高级用户和企业用户（如使用 DGX Spark 的场景）对在特定硬件上稳定运行有强烈需求，并希望对 Iron Proxy 的安全策略有更精细的控制，以适应其自动化脚本和工具链。
*   **反馈**：目前公开的 Issue 评论较少，但 Issue 本身的质量很高，清晰地描述了问题、复现步骤和根本原因，体现了用户群体的技术专业性。

#### **8. 待处理积压**
*   **PR #3509 / #3510**：这两个关于 WhatsApp 发送者标签的功能性 PR 已开放约一个月，状态为 `[OPEN]`。它们对实现多智能体清晰辨识至关重要，建议维护者关注其合并进展，或提供反馈以加速集成。
*   **Issue #3881**：虽然已有相关讨论，但“按主机自动批准规则”的功能需求尚未有对应的实现 PR 提交，属于潜在的积压需求，需要产品负责人进行优先级评估。

---
**总体健康度评估**：项目代码活跃度高，核心维护者响应迅速，对 Bug 和稳定性问题有较强的修复能力。主要风险在于功能积压（如 arm64 支持的最终落地）和长期 PR 的合并速度。建议在下一个版本中优先解决兼容性和安装体验问题，以提升社区满意度。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>



好的，这是根据您提供的 NullClaw GitHub 数据生成的 2026-09-25 项目动态日报。

---

### **NullClaw 项目动态日报 (2026-09-25)**

#### **1. 今日速览**
NullClaw 项目在今日展现出极高的活跃度，开发重心明确集中在**稳定性修复**与**文档体系完善**上。过去24小时内，PR 活跃数量（25个）远超 Issues 更新（12个），且无新版本发布，表明项目正处于一个密集的“代码整理与修复”阶段。社区反馈积极，多个关键 Bug 和用户痛点问题已有对应的修复 PR 进入流程，项目健康度良好。

#### **2. 版本发布**
*   **无新版本发布。**

#### **3. 项目进展**
今日有 8 个 PR 被合并或关闭，标志着多项重要工作完成：
*   **关键修复合并：**
    *   **PR #996** (`fix(mcp): bound stdio response waits`): 修复了 Issue #991 中 MCP stdio 调用可能无限期挂起的问题，通过增加超时和进程组终止逻辑，显著提升了网关模式下的稳定性。
    *   **PR #978** (`discord: run typing thread on the heavy runtime stack`): 修复了 Discord 输入指示器线程因栈溢出导致的崩溃，是稳定性的重要补强。
*   **功能恢复与增强：**
    *   **PR #1002** (`discord: run typing thread on the heavy runtime stack`): 作为 #978 的替代方案，恢复了关键的崩溃修复。
    *   **PR #1001** (`feat(memory): add configurable auto-recall, recall_limit, max_context_bytes`): 恢复并实现了用户期待已久的记忆召回配置功能，允许用户精细控制上下文注入行为。
*   **文档与代码质量：**
    *   多个文档类 PR（如 #1008, #1007, #776, #774）被合并或推进，系统性地修复了文档索引、补充了子系统指南、更新了过时数据，极大改善了开发者体验。
    *   **PR #1003** (`feat(skills): follow symlinked skill directories`) 和 **PR #1005** (`fix(memory): keep archived conversation shards out of live turns`) 分别解决了技能符号链接支持和记忆归档逻辑错误的问题。

**整体迈进：** 项目正从功能快速扩张期转向**稳定化与质量提升期**，内存管理、MCP 通信、平台特定崩溃等核心问题得到系统性解决，同时文档基础被大幅夯实。

#### **4. 社区热点**
*   **最活跃 Issue：#1000** (`[enhancement] ollama incompatibility notification`)
    *   **链接：** [nullclaw/nullclaw Issue #1000](https://github.com/nullclaw/nullclaw/issues/1000)
    *   **分析：** 该 Issue 引发了关于** poor error reporting** 的广泛讨论。用户的核心诉求是当 Ollama 模型不支持工具调用时，NullClaw 应给出清晰、明确的错误提示，而非模糊的适配器错误。这反映了社区对**用户体验和可调试性**的高度重视。对应的 **PR #1004** (`fix(providers): log scrubbed provider error bodies on non-2xx`) 正是对此的直接响应。
*   **高价值功能请求：#624** (`[enhancement] Vision Pipeline`)
    *   **链接：** [nullclaw/nullclaw Issue #624](https://github.com/nullclaw/nullclaw/issues/624)
    *   **分析：** 用户强烈要求增加直接向智能体发送图片和文件的能力，以实现多模态分析。此需求源于其他项目（如 picoclaw）的功能对比，表明社区期望 NullClaw 能支持更丰富的交互模式。

#### **5. Bug 与稳定性**
按严重程度排列：
1.  **严重：Gateway accept4 busy loop (100% CPU) on WSL2** (Issue #870)
    *   **状态：** [CLOSED]，已有修复。
    *   **描述：** WSL2 环境下网关空闲时仍占用 100% CPU，影响可用性。
    *   **关联 PR：** 相关修复逻辑应已包含在其他网关相关 PR 中。
2.  **严重：SIGSEGV on every inbound Telegram message** (Issue #976)
    *   **状态：** [CLOSED]，已有修复。
    *   **描述：** aarch64 Linux 上 Telegram 消息处理因线程栈溢出导致持续崩溃。
    *   **关联 PR：** 类似问题在 PR #978/#1002 中已有针对性修复方案。
3.  **中等：MCP stdio calls can hang indefinitely** (Issue #991)
    *   **状态：** [CLOSED]，已有修复。
    *   **描述：** 独立智能体调用可能因网关锁而无限期挂起。
    *   **关联 PR：** **PR #996** 提供了直接修复。
4.  **中等：web_search impractical on low-resource devices** (Issue #871)
    *   **状态：** [CLOSED]。
    *   **描述：** 在无 DuckDuckGo 直接支持的低资源设备上，`web_search` 功能难以实用化。此问题的关闭可能意味着找到了替代方案或定义了使用边界。

#### **6. 功能请求与路线图信号**
*   **高概率纳入下一版本：**
    *   **可配置记忆管理** (`memory.auto_recall`, `recall_limit`, `max_context_bytes`): 对应 PR #1001，直接回应了用户对上下文长度和行为的控制需求。
    *   **技能符号链接支持**: 对应 PR #1003，解决了用户实际使用中的便利性问题。
    *   **改进的错误日志**: 对应 PR #1004，显著提升可调试性。
*   **值得关注的长期需求：**
    *   **多模态支持** (Issue #624): 若项目 roadmap 包含扩展交互能力，此功能应被优先考虑。
    *   **子智能体生成** (Issue #190): 这是一个架构级特性，虽然当前状态为 CLOSED，但仍是社区长期关注的高级功能。
    *   **配置文件示例** (Issue #867): 用户呼声很高，改进文档（如 PR #1007）是解决此问题的正确方向。

#### **7. 用户反馈摘要**
*   **核心痛点：**
    *   **错误信息不明确：** 用户在使用 Ollama 等 provider 时遇到问题，难以诊断根因（Issue #1000）。
    *   **配置复杂：** 默认配置文件被形容为“残废”，导致新手难以入门（Issue #867）。
    *   **特定环境不稳定：** 在 WSL2 和 aarch64 设备上遇到崩溃和性能问题（Issue #870, #976）。
    *   **功能缺失：** 缺少图片分析（Issue #624）和技能符号链接（Issue #995）等增强功能。
*   **积极反馈：**
    *   社区对项目修复特定崩溃问题（如 Telegram SIGSEGV）的响应速度表示认可。
    *   对增加细粒度配置（如记忆控制）持欢迎态度。

#### **8. 待处理积压**
*   **长期未响应 Issue：**
    *   **Issue #495** (`Could make local web channel acceptable with tunnels...`): 提出于 2026-03-13，讨论如何通过 CloudFlare 或 nginx 使本地 Web 通道可被公网访问，至今无实质性进展，但社区 interest 较低（👍=0）。
*   **需关注的大型 PR：**
    *   **PR #411** (`implements a comprehensive tool customization system`): 提交于 2026-03-10，实现了复杂的工具定制系统，但状态为 CLOSED，可能因范围过大或与现有架构冲突而被拒绝。其功能需求可能通过其他方式（如配置文件）部分满足。

---
**报告生成说明：** 本报告基于提供的 GitHub 数据快照生成，所有动态和链接均指向 `nullclaw/nullclaw` 仓库。分析旨在客观呈现项目状态，为开发者、用户和观察者提供数据支持。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>



# IronClaw 项目动态日报 — 2026-09-25

> 分析范围：过去 24 小时 GitHub 数据 | 数据来源：`nearai/ironclaw`

---

## 1. 今日速览

IronClaw 项目在过去 24 小时内整体活跃度**偏低**，处于版本发布后的 quiet period。今日无任何 Issue 或 PR 被合并/关闭，全部变更仍处于开放状态。项目当前的重心集中在 **1.4.1-rc.2** 的发布收尾与代码库知识图谱的自动化维护上，社区互动较少（零评论、零反应），暂无突发性 Bug 报告或高优先级功能请求。整体健康度评分：**稳健但缺乏推进动能**。

---

## 2. 版本发布

### ironclaw-v1.4.1-rc.2 — 2026-09-24

| 项目 | 内容 |
|---|---|
| 版本 | `1.4.1-rc.2`（Second Patch Candidate，基于 `1.4.0`） |
| 发布时间 | 2026-09-24 |
| 关联 PR | #8110 |
| 发布人 | serrrfirat |

#### 更新内容

- **Google 扩展 OAuth 修复（与 RC1 相同）**：当运维人员通过 **Web UI**（而非环境变量）提供 Google OAuth 客户端时，Gmail 和 Google Calendar 扩展现在可以被正常激活。这是 RC1 修复的延续，RC2 作用域保持不变。
- **依赖项安全刷新**：将锁文件更新为 `wasmtime 47.0.4` 和 `rustls 0.23.45`，以响应当前安全 advisory 数据库的要求。

#### 破坏性变更

**无。** RC2 为补丁候选版本，不包含任何 breaking change。

#### 迁移注意事项

- 若用户当前在 Web UI 中配置 Google OAuth 客户端但扩展无法激活，升级到 `1.4.1-rc.2`（或后续正式版）即可解决。
- `wasmtime` 与 `rustls` 的版本升级属于安全补丁，建议所有生产部署同步更新以规避已知 advisory 风险。

🔗 [Release 链接](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v1.4.1-rc.2) | 🔗 [关联 PR #8110](https://github.com/nearai/ironclaw/pull/8110)

---

## 3. 项目进展

> ⚠️ 今日**无** PR 被合并或关闭，项目在代码层面未产生向前推进。以下为当前开放中的 PR 状态：

| PR | 标题 | 类型 | 风险 | 状态 |
|---|---|---|---|---|
| #7988 | chore(agents): refresh codebase knowledge graph | CI/Infrastructure | Low | Open |
| #8110 | chore(release): cut 1.4.1-rc.2 | Release / Docs / Dependencies | Low | Open |

- **#7988** 由 `ironclaw-ci[bot]` 于 2026-08-29 创建，是每日定时触发的"代码库知识图谱刷新"工作流产物，用于提交最新的代码库-memory bootstrap 快照。该 PR 属于自动化维护，不影响功能，预计通过常规 review 后即可合并。
- **#8110** 为 RC2 的发布 PR，将发布分支从 `1.4.1-rc.1` 推进至 `1.4.1-rc.2`，作用域与 RC1 一致。

**项目整体进展评估**：当前处于版本发布窗口期，开发团队重心在质量验证与依赖安全，功能开发节奏暂时放缓。

---

## 4. 社区热点

今日社区互动**极度冷清**——所有 Issue 与 PR 的评论数均为 0，👍 反应数均为 0，无任何讨论热点。

唯一活跃的 Issue 为：

- 🔗 [#8111 [OPEN] Daily ironclaw failure taxonomy — 2026-09-24](https://github.com/nearai/ironclaw/issues/8111)
  - 作者：`pranavraja99` | 创建/更新：2026-09-24 | 评论：0 | 👍：0
  - **性质**：这是由项目内部发起的**日常故障分类（failure taxonomy）跟踪 Issue**，非社区用户提交的 Bug 报告。它记录了 ironclaw 在各 benchmark 套件（如 officeqa）上的失败任务明细，用于区分"模型质量失败"与"工具/框架失败"。

**分析**：该 Issue 本身不反映社区诉求，而是项目质量监控体系的一部分。零互动说明社区尚未对此类质量透明化举措产生直接反馈。

---

## 5. Bug 与稳定性

> 今日**无**新的 Bug 报告、崩溃报告或回归问题提交。

当前已知的稳定性相关事项：

| 事项 | 严重程度 | 说明 |
|---|---|---|
| Google 扩展 OAuth 激活问题 | **已修复（RC1/RC2）** | 当 Google OAuth 客户端通过 Web UI 提供时，Gmail/Calendar 扩展无法激活。已在 `1.4.1-rc.1` 和 `1.4.1-rc.2` 中修复。 |
| `wasmtime` / `rustls` 依赖安全 advisory | **已修复（RC2）** | 锁文件已刷新至 patched 版本，需在正式版发布后提醒用户升级。 |

🔗 [Google OAuth 修复 PR #8110](https://github.com/nearai/ironclaw/pull/8110)

---

## 6. 功能请求与路线图信号

今日**无**新的功能请求 Issue 提出。

从已有数据推断的路线图信号：

1. **Google 扩展生态完善**（来自 RC1/RC2 修复）：项目正在持续降低 Google 服务集成的运维门槛，未来可能会将"Web UI 配置 OAuth"的模式推广到其他第三方扩展。
2. **Benchmark 质量透明化**（来自 #8111）：项目倾向于公开各套件的失败分类数据，暗示路线图中可能包含更完善的质量仪表盘或 CI 集成。
3. **依赖安全管理**（来自 #8110 的 lockfile 刷新）：安全 advisory 响应机制已常态化，未来版本可能会更频繁地伴随依赖项安全更新。

---

## 7. 用户反馈摘要

> 今日 Issues 评论数为 0，PR 评论数为 0，**无直接用户反馈可提炼**。

从已有的 Issue/PR 元数据中间接反映的用户/维护者关注点：

- **运维体验**：Google OAuth 配置从环境变量迁移到 Web UI 的修复，说明用户期望更低的部署摩擦。
- **质量可见性**：#8111 的存在表明项目内部（及可能的外部 benchmark 用户）关注失败归因的透明化，用户可能期望获得更细粒度的诊断信息。
- **安全合规**：依赖项 advisory 的快速响应表明项目对安全合规有明确要求。

---

## 8. 待处理积压

当前数据中暂无长期未响应的重要 Issue 或 PR。已知开放项：

| 编号 | 类型 | 标题 | 创建时间 | 已开放天数 | 风险 |
|---|---|---|---|---|---|
| #7988 | PR | chore(agents): refresh codebase knowledge graph | 2026-08-29 | ~26 天 | Low |
| #8110 | PR | chore(release): cut 1.4.1-rc.2 | 2026-09-23 | ~2 天 | Low |
| #8111 | Issue | Daily ironclaw failure taxonomy — 2026-09-24 | 2026-09-24 | ~1 天 | Info |

**建议关注**：
- **#7988** 已开放近一个月，虽为自动化 PR，但若长时间未合并可能导致代码库-memory 快照滞后，建议维护者定期 review 并合并。
- **#8110** 作为发布 PR，应在 RC2 验证通过后尽快推进至正式版 `1.4.1`。

---

*报告生成时间：2026-09-25 | 数据来源：GitHub API (`nearai/ironclaw`) | 下次更新：2026-09-26*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



根据您提供的 LobsterAI GitHub 数据，以下是 **2026-09-25** 的项目动态日报：

---

# 📊 LobsterAI 项目动态日报 (2026-09-25)

## 1. 今日速览
今日 LobsterAI 项目整体处于**高活跃的维护与修复阶段**。过去24小时内，项目处理了 18 条 Issues 更新（关闭 16 条，活跃 2 条）和 50 条 PR 更新（合并/关闭 46 条，待合并 4 条），**无新版本发布**。今日的工作重心集中在 **OpenClaw 核心逻辑修复（如模型输出截断、工具调用异常）**、**UI 视觉与布局对齐**、以及 **Cowork 交互体验优化

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



根据您提供的 GitHub 数据，以下是 **2026-09-25 QwenPaw (CoPaw)** 项目动态日报。报告基于过去24小时内的 Issues、PR 动态及社区互动数据，旨在客观评估项目健康度与开发进展。

---

# 📊 QwenPaw / CoPaw 项目动态日报 (2026-09-25)

## 1. 今日速览


</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



好的，这是根据您提供的 ZeroClaw 项目数据生成的 2026-09-25 动态日报。

---

### **ZeroClaw 项目动态日报 - 2026-09-25**

#### **1. 今日速览**
ZeroClaw 项目在今日呈现出极高的开发活跃度，尽管没有新版本发布，但社区和核心维护者的精力高度集中在几个关键的战略性重构上。**整体健康度评估为“积极演进中”**，项目正经历从单体架构向模块化、运行时可组合架构的关键转型，伴随着高强度的功能开发和历史技术债务清理。

#### **2. 版本发布**
*   **无新版本发布。** 当前开发工作的重心明显放在为未来版本（如 v0.9.0）奠定架构基础，而非进行小步快跑的发布。

#### **3. 项目进展**
今日的 PR 活动清晰地勾勒出项目的主要推进方向：
*   **SOP（Standard Operating Procedures）能力成熟化：** 这是当前最核心的工程重点。通过合并多个大型、堆叠的 PR（如 #11102, #10233, #9841），SOP 系统正在被重构，以实现**无头（headless）运行**、**从所有创作表面重命名**以及**驱动代理步骤**。这标志着 SOP 从简单的编排工具向一个完整的、由守护进程控制的自动化引擎演进。
*   **OIDC（OpenID Connect）身份体系落地：** 一个巨大的、包含多个组件的 PR #11082 被提出，旨在一次性实现完整的 OIDC 主体、注册和网关认证界面。这是构建企业级安全能力的关键一步。
*   **CI/CD 效率提升：** 一系列小型 PR（#11063, #11064, #11069, #11070, #11073）针对 CI 流水线进行优化，包括并行化任务、细化缓存键、按需触发安全扫描等，显示出项目对开发效能和基础设施健康的持续投入。
*   **架构重构：** PR #11090 和 #11092 旨在为 `zeroclaw-runtime` 这个核心“持有 crate”建立正式的组合契约，这是实现运行时可嵌入性的基础。

**总体迈进：** 项目正在执行一个宏大的路线图（v0.8.6 和 v0.9.0），今日的进展表明，其在 **SOP、安全认证、运行时架构和开发体验** 四个支柱上都取得了实质性突破。

#### **4. 社区热点**
社区讨论的焦点高度集中在战略架构层面，而非零散的 bug 修复。
*   **#8692 [Tracker]: Maintainer decision queue for RFCs and design issues**
    *   **链接:** `zeroclaw-labs/zeroclaw/issues/8692`
    *   **诉求分析:** 这是社区最关注的议题（15条评论）。它反映了社区对项目决策透明度和效率的强烈需求。一个公开的“维护者决策队列”能有效管理大量 RFC 和设计问题，避免关键议题被淹没，是项目走向成熟治理的标志。
*   **#6489 [Tracker]: Unified capability catalog and plugin migration roadmap**
    *   **链接:** `zeroclaw-labs/zeroclaw/issues/6489`
    *   **诉求分析:** “一切皆插件”是产品的愿景。此追踪器吸引了大量关注（8条评论），说明社区和用户热切期盼一个统一、清晰的插件能力和迁移路径，以解决当前功能分散、集成复杂的问题。
*   **#8519 [Bug]: Reconcile cargo-audit ignores and remediate wasmtime-wasi CVEs**
    *   **链接:** `zeroclaw-labs/zeroclaw/issues/8519`
    *   **诉求分析:** 高风险（risk:high）的安全相关议题（7条评论）。用户和维护者需要确保项目依赖的 WebAssembly 运行时（wasmtime）及其 WASI 扩展没有已知漏洞，这直接关系到项目的安全底线。

#### **5. Bug 与稳定性**
今日报告的 Bug 涵盖从轻微到严重等多个级别，部分已有修复方案或 PR 在途。
*   **S0 - 数据丢失/安全风险：**
    *   **#10797:** Markdown 内存后端在并发 `store()` 调用时会静默丢失数据。这是一个严重的设计缺陷，但尚无修复 PR。
    *   **#10968:** 无人值守的 agent 轮次（如 cron、心跳）运行时没有 `ApprovalManager`，导致高风险工具批准形同虚设。这是一个严重的安全漏洞，问题已被明确指出，但修复 PR 尚未就绪。
*   **S1 - 工作流受阻：**
    *   **#11087:** Windows 应用关闭窗口后无法重启或退出，进程残留。这是一个影响特定平台用户体验的严重 bug，尚无修复。
*   **S2 - 行为降级/CI 问题：**
    *   **#11094:** Apple 平台预检测试可能因模拟的重试睡眠而失败。
    *   **#11093:** 稳定版文档推广导致根目录的 `llms.txt` 文件不同步。
    *   **#10948:** 组件边界间的中断作用域键冲突。
*   **S3 - 轻微问题：**
    *   **#11097:** 插件 egress 补救命令未对现有授权中的单引号进行转义。

#### **6. 功能请求与路线图信号**
*   **新功能请求：**
    *   **#11103:** 增加 `cheaperinference` 作为兼容 OpenAI 的提供商。这表明社区希望项目能集成更多、更灵活的后端模型服务。
    *   **#11100:** 在成本速率目录预填充中保留配置的提供商别名。这是一个细节优化，但能提升多提供商配置下的用户体验和成本核算准确性。
*   **路线图信号：**
    *   上述功能请求，结合正在进行的 OIDC（#8289）、运行时组合（#10993）和插件化（#6489）等大型重构，强烈预示着下一版本（很可能是 v0.9.0）将是一个**安全增强、架构现代化、生态扩展**的里程碑版本。

#### **7. 用户反馈摘要**
*   **痛点：**
    *   **配置复杂性与不一致性：** 用户反馈在成本目录、提供商别名管理等方面存在配置被简化或丢失的问题（#11100）。
    *   **跨平台体验不一致：** Windows 平台的应用生命周期管理（#11087）是当前一个突出的痛点。
    *   **安全与数据完整性担忧：** 社区对依赖项漏洞（#8519）、数据丢失（#10797）和权限绕过（#10968）表现出高度关注，这是项目的生命线。
*   **满意/积极信号：**
    *   社区对项目清晰的架构方向（如 RFC、Tracker）表示认可。
    *   对 SOP 能力的不断增强（如无头运行、多表面重命名）感到兴奋，这预示着自动化能力的巨大提升。

#### **8. 待处理积压**
需要维护者特别关注的长期或高风险积压项：
*   **#6489 [Tracker]: Unified capability catalog and plugin migration roadmap** - 创建于5月，是产品愿景的核心，需持续推动。
*   **#8289 [Tracker]: OIDC milestone** - 创建于6月，虽已有大型 PR（#11082）在途，但其本身是复杂的功能集合，需长期跟进直至完全落地。
*   **#8850 [Tracker]: Move optional channels & tools from compile-time feature flags to runtime plugins** - 创建于7月，是“一切皆插件”愿景的直接体现，是长期的架构性工作。
*   **#10968 [Bug]: Unattended agent turns run with no ApprovalManager** - 虽是新 Bug，但风险极高（S0），且涉及核心安全逻辑，应优先处理。
*   **#10797 [Bug]: markdown memory backend silently loses stored entries** - 同样是高风险的数据完整性问题，需要立即关注。

---
**报告生成说明：** 本报告完全基于提供的 GitHub 数据进行分析，结论客观，并附有完整的数据链接以供溯源。报告旨在帮助维护者和社区成员快速把握项目动态、识别风险与机遇。

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*