# OpenClaw 生态日报 2026-09-30

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-29 22:16 UTC

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



# OpenClaw 项目动态日报 — 2026-09-30

---

## 1. 今日速览

OpenClaw 过去 24 小时活跃度**极高**：Issues 新增/活跃 433 条、PR 待合并 370 条，同时有一个 `extended-stable` 版本（v2026.8.33）发布。项目当前处于**高 bug 密度 + 高修复吞吐**的阶段——社区反馈密集，维护者合并/关闭 PR 的速度也很快（130 条 PR 已合并或关闭），但 P0 级崩溃/内存问题仍然较多，稳定性仍是首要挑战。

---

## 2. 版本发布

### v2026.8.33 — `extended-stable`（网关专用）

- **定位**：这是 OpenClaw 当前等同于 LTS 的版本，基于 2026 年 8 月底的代码快照，叠加了关键安全更新、可靠性与性能修复，以及新模型支持。
- **当前最新版本**：2026.9.6（主线已 ahead）
- **破坏性变更**：数据概览未列出明确的 breaking changes 清单，但 Issues 中大量报告了从 2026.9.4/9.5 升级到 9.6 后出现的回归问题（见第 5 节），说明近期主线迭代引入了较多不稳定因素。
- **迁移注意事项**：
  - 升级前建议备份 `~/.openclaw/agents/<agent>/agent/` 下的 SQLite 文件（WAL 膨胀问题见 Issue #143524）。
  - Windows 用户注意 cron isolated setup 的 Proxy 环境变量传递问题（Issue #157067）。
  - macOS 用户注意 app readiness watchdog 可能 SIGTERM 快速启动的 gateway（Issue #158936）。

---

## 3. 项目进展

### 今日重要 PR 动态（按评论数 Top 30 中的关键项）

| PR | 方向 | 摘要 |
|---|---|---|
| [#145133](https://github.com/openclaw/openclaw/pull/145133) | Discord / Mattermost | 修复 `runIngressDrain` 在 defer 时未释放 ingress lane 的问题，使 debouncer 能合并同 lane 突发消息 |
| [#158447](https://github.com/openclaw/openclaw/pull/158447) | Updater | 修复 Bun Gateway 更新时 config-read 子进程链式爆炸（曾测得 8,462 个后代进程） |
| [#161411](https://github.com/openclaw/openclaw/pull/161411) | Updater | 修复旧版 updater 回滚"State schema inspection failed"问题 |
| [#161410](https://github.com/openclaw/openclaw/pull/161410) | Auto-reply | 修复同一来源回复完成后 provider fallback 认证失败时用户收到矛盾错误的问题 |
| [#160864](https://github.com/openclaw/openclaw/pull/160864) | Cron / 安全 | 阻止 stream jobs 超出创建 turn 的 `exec` 权限，修复远程 Codex shell 被误认为 Gateway 执行 authority 的漏洞 |
| [#161400](https://github.com/openclaw/openclaw/pull/161400) | OpenAI | 新增 GPT-6.1 Sol 模型支持（路由、推理能力、定价） |
| [#153340](https://github.com/openclaw/openclaw/pull/153340) | Agents | 可选在对话 turn 中省略 tools 定义，降低无工具需求 turn 的开销 |
| [#139260](https://github.com/openclaw/openclaw/pull/139260) | Codex | 修复 Codex 回复在 channel preview 回调阻塞时丢失结尾内容的问题 |
| [#151012](https://github.com/openclaw/openclaw/pull/151012) | Telegram | 限制后台任务完成通知的最大长度（120 字符预览 + 省略号） |
| [#160899](https://github.com/openclaw/openclaw/pull/160899) | Plugins | 在插件页面暴露被阻止的 hook 权限和恢复操作 |

**整体判断**：本周 PR 活跃度集中在**稳定性修复**（updater、memory、session lifecycle）和**体验优化**（通知长度、模型支持、工具省略），同时有数个大型重构 PR（#161364、#159847、#161336）在推进代码整洁度。项目整体在"修稳 + 梳理 + 增能"三条线并行推进。

---

## 4. 社区热点

### 评论最多的 Issues（Top 10）

| Issue | 标题（精简） | 评论 | 👍 | 热度分析 |
|---|---|---|---|---|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | Agent SQLite WAL 膨胀至 1.4–2.8 GB，阻塞 gateway 启动 | 94 | 0 | **最高热度**。Windows 用户严重痛点，WAL 从不自动 checkpoint，需手动 `wal_checkpoint(TRUNCATE)` |
| [#149538](https://github.com/openclaw/openclaw/issues/149538) | Gateway 达到 ready 但不服务，/health 探针全部超时（632 agent 集群） | 21 | 0 | 大规模部署场景的事件循环饥饿问题 |
| [#102175](https://github.com/openclaw/openclaw/issues/102175) | 嵌入式 prompt cache 在 room-event/policy/Responses 边界处失效 | 20 | 1 | 长周期会话的缓存复用率下降，影响推理成本 |
| [#157067](https://github.com/openclaw/openclaw/issues/157067) | Windows isolated cron 传递不可克隆的 Proxy 给 session history worker | 19 | 0 | Windows 平台 cron 特定场景的阻塞 bug |
| [#111897](https://github.com/openclaw/openclaw/issues/111897) | 同一 session lane 并发运行导致重复/冗余回复 | 19 | 1 | 高负载下消息重复投递，影响用户体验 |
| [#139710](https://github.com/openclaw/openclaw/issues/139710) | 插件生成 supersede 中途杀死 system-agent turn 及 planner fallback | 17 | 1 | 热加载配置时的竞态问题 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | Hook/tool 子进程泄露，僵尸进程累积导致运行时退化 | 16 | 1 | 长期运行后的资源泄露，影响稳定性 |
| [#157531](https://github.com/openclaw/openclaw/issues/157531) | 2026.9.7 Fixes Tracker | 16 | 0 | 维护者主导的版本修复追踪 issue |
| [#157325](https://github.com/openclaw/openclaw/issues/157325) | Agent-DB 资源卡住导致所有 agent 回复失败，需重启 gateway | 15 | 0 | 影响所有 agent 的全局性故障 |
| [#121661](https://github.com/openclaw/openclaw/issues/121661) | CLI 子 agent announce-wake turn 无工具执行，模型虚构工具调用和输出 | 14 | 0 | CLI 后端 handoff 的工具可用性问题 |

**社区诉求总结**：
- **最紧迫**：SQLite WAL 管理（#143524，94 评论）——用户期望自动 checkpoint，而非手动干预。
- **大规模部署**：Gateway 就绪后不服务（#149538）和事件循环饥饿是多 agent 集群的核心障碍。
- **跨平台一致性**：Windows cron（#157067）、macOS watchdog（#158936）均有平台特异性阻塞点。

---

## 5. Bug 与稳定性

### P0 — 阻塞发布 / 用户体验阻塞

| Issue | 严重信号 | 是否有 Fix PR |
|---|---|---|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) — SQLite WAL 膨胀至 2.8 GB，阻塞 gateway 启动 | `crash-loop`、`ux-release-blocker` | ❌ 无（`clawsweeper:no-new-fix-pr`） |
| [#149538](https://github.com/openclaw/openclaw/issues/149538) — Gateway ready 后不服务，事件循环饥饿 | `crash-loop`、P0 | ❌ 无 |
| [#157325](https://github.com/openclaw/openclaw/issues/157325) — Agent-DB 资源卡住，所有回复失败 | `ux-release-blocker`、P0 | ❌ 无 |
| [#156571](https://github.com/openclaw/openclaw/issues/156571) — model-catalog worker 泄漏 tmp 捕获（1–3 GB/min） | `ux-release-blocker`、P0 | ❌ 无 |
| [#159612](https://github.com/openclaw/openclaw/issues/159612) — 子 agent 结算重试无限循环 | `ux-release-blocker`、P0 | ❌ 无 |
| [#157160](https://github.com/openclaw/openclaw/issues/157160) — Gateway 在 plugin-doctor-post-session-state 崩溃循环 | `crash-loop`、`ux-release-blocker`、P0 | ❌ 无 |
| [#158095](https://github.com/openclaw/openclaw/issues/158095) — Gateway worker state-lifecycle 获取后保持持有，后续全部失败 | `ux-release-blocker`、P0 | ❌ 无 |
| [#155859](https://github.com/openclaw/openclaw/issues/155859) — Gateway 启动时间随 plugin 数量线性增长 | `crash-loop`、P0 | ❌ 无 |
| [#154812](https://github.com/openclaw/openclaw/issues/154812) — Gateway RSS 超出 V8 heap 导致 OOM | `crash-loop`、P0 | ❌ 无 |
| [#152965](https://github.com/openclaw/openclaw/issues/152965) — 热重载非 channel plugin 断开所有 channel 连接 | `ux-release-blocker`、P0 | ❌ 无 |
| [#158936](https://github.com/openclaw/openclaw/issues/158936) — macOS app watchdog SIGTERM 快速启动的 gateway | `crash-loop`、`ux-release-blocker`、P0 | ❌ 无 |
| [#159662](https://github.com/openclaw/openclaw/issues/159662) — prepared-model-catalog.worker.js 内存泄漏 4–5 GB/h | P0 | ❌ 无 |
| [#160548](https://github.com/openclaw/openclaw/issues/160548) — prepared-model-catalog worker 泄漏 1 GB/5 min | P0 | ❌ 无 |

### P1 — 严重但非阻塞

| Issue | 摘要 |
|---|---|
| [#111897](https://github.com/openclaw/openclaw/issues/111897) | 同一 session lane 并发导致重复回复 |
| [#139710](https://github.com/openclaw/openclaw/issues/139710) | 插件热加载杀死 system-agent turn |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | Hook/tool 子进程僵尸泄露 |
| [#121661](https://github.com/openclaw/openclaw/issues/121661) | CLI 子 agent 虚构工具调用 |
| [#121953](https://github.com/openclaw/openclaw/issues/121953) | Cron agent 在 DeepSeek 上因前缀被降优先级而 stall |
| [#127148](https://github.com/openclaw/openclaw/issues/127148) | Codex sessions.compact 获取第二个 app-server 导致冲突 |
| [#104719](https://github.com/openclaw/openclaw/issues/104719) | memory-wiki 补充回退忽略 tool deadline |
| [#159094](https://github.com/openclaw/openclaw/issues/159094) | Gateway 持有 state-lifecycle lease 但 worker 报告冲突 |
| [#157630](https://github.com/openclaw/openclaw/issues/157630) | `--max-old-space-size` 静默覆盖 worker resourceLimits |
| [#154572](https://github.com/openclaw/openclaw/issues/154572) | sessions_spawn 到 claude-cli 子 agent 失败（SessionTranscriptWriterClaimReboundError） |
| [#137710](https://github.com/openclaw/openclaw/issues/137710) | Native Codex 完成后不唤醒 sessions_yield 父 turn |
| [#158332](https://github.com/openclaw/openclaw/issues/158332) | 无消息的会话间投递导致礼貌循环 |
| [#126246](https://github.com/openclaw/openclaw/issues/126246) | Telegram durable outbound 卡在 send_attempt_started |
| [#138599](https://github.com/openclaw/openclaw/issues/138599) | 自动 compaction 死锁（compaction 模型上下文不足） |
| [#147422](https://github.com/openclaw/openclaw/issues/147422) | MCP computer tool 不释放执行锁，无超时 |

### 关键洞察

- **prepared-model-catalog.worker.js 是当前最大的稳定性毒瘤**：至少 4 个独立 issue（#156571、#159662、#160548、#160522）报告其内存泄漏，泄漏速率从 1 GB/5 min 到 4–5 GB/h 不等，且与 workload、provider 无关。
- **state-lifecycle 竞态**：#158095、#159094、#157160 三条 P0 均指向 state-lifecycle 获取/释放的并发问题，可能源于同一根因。
- **Windows 平台**有 3 个独立 P0（#143524 WAL、#157067 cron Proxy、#145072 npm update），平台适配仍显薄弱。

---

## 6. 功能请求与路线图信号

| Issue/PR | 类型 | 信号强度 |
|---|---|---|
| [#16670](https://github.com/openclaw/openclaw/issues/16670) | Feature | ⭐⭐⭐ 向导应将 Memory/Embedding 设为强制步骤——

---

## 横向生态对比



以下是今日（2026-09-30）各开源 AI 智能体项目的重点更新摘要及活跃度概览：

### 1. 重要更新

*   **OpenClaw — 发布 `extended-stable` v2026.8.33 版本**
    *   **内容**：发布了等同于 LTS 的 `extended-stable` 网关专用版本 v2026.8.33，基于 8 月底代码快照，叠加了关键安全更新、可靠性与性能修复。
    *   **意义**：为面临主线近期回归问题（如 v2026.9.4/9.5 升级后遗症）的用户提供了一个高稳定性的部署选择。
    *   **链接**：[openclaw/openclaw](https://github.com/openclaw/openclaw)

*   **IronClaw — 正式发布 v1.4.1 稳定版**
    *   **内容**：将 1.4.1-rc.2 提升为正式版 v1.4.1，修复了通过 Web UI 提供 Google OAuth 客户端时扩展无法激活的问题，并同步了 Wasmtime 运行时安全补丁。
    *   **意义**：纯修复与安全更新，无破坏性变更，直接解决了 Google 扩展（Gmail、Calendar）在特定部署路径下的激活故障。
    *   **链接**：[nearai/ironclaw](https://github.com/nearai/ironclaw)

*   **LobsterAI — 修复 Windows 平台因技能备份失败导致更新中断的问题**
    *   **内容**：合并 PR #2782 与 #2706，重构了 Windows PowerShell 5.1 下的技能备份脚本，并在备份失败时向用户提供清晰的本地化引导提示，更新流程保持 fail-closed。
    *   **意义**：直接解决了 Issue #2395「无法安装」的根因，显著降低了普通用户的更新摩擦与排查成本。
    *   **链接**：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

*   **NanoClaw — 修复 agent group 删除后容器残留与 ARM64 部署阻塞问题**
    *   **内容**：合并 PR #3947（停止为已删除的 agent group 启动会话容器）与 PR #3953（在 arm64 Docker 引擎上提前拦截无法运行的 amd64 镜像）。
    *   **意义**：补齐了容器生命周期状态一致性与 ARM64 平台（如 NVIDIA DGX Spark）部署的关键短板，推动项目向生产可用性迈进。
    *   **链接**：[nanocoai/nanoclaw](https://github.com/nanocoai/nanoclaw)

*   **ZeroClaw — 修复管理员撤权后会话恢复越权漏洞及上下文截断问题**
    *   **内容**：关闭了安全缺陷 Issue #11197（会话恢复可绕过已撤销的 `admin` 授权），并合并 PR #11260 修复了显式上下文预算被错误截断至 32k fallback 值的问题。
    *   **意义**：提升了权限隔离安全性，并解决了长上下文场景下配置被静默截断的核心可用性痛点。
    *   **链接**：[zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

*   **Hermes Agent — 修复 Desktop 退出时 `hermes serve` 后端被孤儿化的问题**
    *   **内容**：合并 PR #128336，为 uvicorn 设置了优雅关闭超时，解决 Desktop 退出时 `hermes serve` 后端被 SIGTERM 孤儿化的问题，并伴随一批 Desktop/Gateway 层面的生命周期修复。
    *   **意义**：改善了 Desktop 端与 Gateway 层的生命周期一致性，避免了进程残留与资源泄漏。
    *   **链接**：[nousresearch/hermes-agent](https://github.com/nousresearch/hermes-agent)

*   **NanoBot — 会话状态存储从 JSONL 迁移至 SQLite**
    *   **内容**：合并 PR #5943，将 JSONL 替换为 SQLite 作为会话状态的权威存储，并引入统一 worker 处理存储 I/O。
    *   **意义**：提升了数据持久化的可靠性与并发性能，是核心会话管理架构的重要升级。
    *   **链接**：[HKUDS/nanobot](https://github.com/HKUDS/nanobot)

*   **CoPaw (QwenPaw) — 大规模合并 20 条 PR，强化 Telegram 渠道与终端兼容性**
    *   **内容**：合并了多个 Telegram 渠道修复（包括 #7773 处理 `/start` 握手、#7765 命令寻址门禁、#7718 Markdown 渲染）以及终端高 FD 支持（#8023）。
    *   **意义**：显著提升了 Telegram 平台交互的稳定性与正确性，并改善了跨平台终端的健壮性。
    *   **链接**：[agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)

---

### 2. 活跃度概览

今日开源 AI 智能体生态整体活跃度极高，多个项目迎来大规模 PR 合并与版本发布。其中，**OpenClaw**、**CoPaw (QwenPaw)**、**ZeroClaw** 和 **LobsterAI** 在 Issue 与 PR 的吞吐量上表现最为突出，开发重心普遍集中在稳定性修复、跨平台兼容性（尤其是 Windows 和 Telegram 渠道）以及核心架构升级上。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



好的，这是根据您提供的 NanoBot GitHub 数据生成的 2026-09-30 项目动态日报。

---

### **NanoBot 项目动态日报 - 2026-09-30**

#### **1. 今日速览**

NanoBot 项目在 2026-09-30 呈现出极高的开发活跃度，但重心明显偏向于代码合并与功能实现，而非版本发布。过去24小时内，有 **41 条 PR 更新**，其中 **13 条已合并或关闭**，表明项目正经历一轮密集的集成与收尾阶段。与此同时，社区新增了 **5 个 Issues**，主要聚焦于功能增强、Bug 报告和用户体验优化。项目整体健康度良好，开发节奏强劲，但暂无新版本发布。

#### **2. 版本发布**

*   **无新版本发布。** 今日无新的 Release 上线。

#### **3. 项目进展**

今日有 **13 条 PR 状态更新**（已合并/关闭），标志着多项关键功能与修复正式落地：

*   **核心功能增强：**
    *   **WebUI 模型目录优化：** PR [#5978](https://github.com/HKUDS/nanobot/pull/5978) 已关闭，其功能是隐藏 OpenAI 已停服的模型，直接回应了 Issue #5977 的用户痛点，提升了模型选择器的准确性。
    *   **Agent 状态管理重构：** PR [#5943](https://github.com/HKUDS/nanobot/pull/5943) 已合并，将 JSONL 替换为 SQLite 作为会话状态的权威存储，并引入了一个统一的 worker 来处理存储 I/O，显著提升了数据持久化的可靠性和性能。
    *   **Subagent 功能完善：** 多个 PR 已合并/关闭，包括聚合并发结果 ([#5954](https://github.com/HKUDS/nanobot/pull/5954))、持久化 subagent 会话 ([#5811](https://github.com/HKUDS/nanobot/pull/5811))、以及将 subagent 结果在活跃回合内路由 ([#4616](https://github.com/HKUDS/nanobot/pull/4616))，共同使 subagent 工作流更加成熟和可靠。

*   **关键 Bug 修复：**
    *   **回退模型逻辑修复：** PR [#5968](https://github.com/HKUDS/nanobot/pull/5968) 已合并，修复了当 OpenAI 兼容网关返回“insufficient credits”时，配置的回退模型被静默跳过的问题，直接解决了 Issue #5967。
    *   **上下文压缩通知：** PR [#5780](https://github.com/HKUDS/nanobot/pull/5780) 已合并，使自动上下文压缩过程不再向用户发送通知，减少了干扰。
    *   **TUI/WebUI 附件上传：** PR [#5980](https://github.com/HKUDS/nanobot/pull/5980) 已合并，修复了因 Base64 编码导致大附件上传失败的问题。

*   **其他改进：**
    *   **TUI 源码重构：** PR [#5975](https://github.com/HKUDS/nanobot/pull/5975) 已合并，按功能边界重组了 TUI 代码，改善了项目结构。
    *   **`my` 工具作用域修复：** PR [#5976](https://github.com/HKUDS/nanobot/pull/5976) 已合并，将 subagent 快照的作用域限制在当前会话，增强了数据隔离和安全性。

**整体来看，项目在稳定性、核心功能（特别是 Subagent 和会话管理）方面向前迈进了坚实的一步。**

#### **4. 社区热点**

今日讨论最活跃的议题主要围绕 **MCP 工具集的效率** 和 **用户体验优化**：

*   **Issue #5298 - [enhancement] Proposal: budget model-visible MCP schemas for large tool sets**
    *   **链接：** [HKUDS/nanobot#5298](https://github.com/HKUDS/nanobot/issues/5298)
    *   **诉求：** 用户指出，当 MCP 工具集很大时，`ToolRegistry.get_definitions()` 返回的固定前缀和工具定义会带来显著的上下文成本。社区讨论的核心是**如何在不牺牲功能的前提下，减少模型调用时的 token 消耗**，这反映了用户对高效率、低成本运行 AI 助手的强烈需求。

*   **Issue #5900 - [enhancement] Silent context compaction and reduce WeChat channel polling log verbosity**
    *   **链接：** [HKUDS/nanobot#5900](https://github.com/HKUDS/nanobot/issues/5900)
    *   **诉求：** 用户希望实现“静默”上下文压缩（不发送通知），并降低微信频道的轮询日志详细程度。这背后是用户对**更干净、更少干扰的聊天体验**的追求，尤其是在自动化后台任务时。

#### **5. Bug 与稳定性**

今日报告的 Bug 按严重程度排列如下：

1.  **高严重度：回退模型失效**
    *   **Issue #5967 - Fallback models are skipped when a provider reports "insufficient credits" (HTTP 400)**
    *   **链接：** [HKUDS/nanobot#5967](https://github.com/HKUDS/nanobot/issues/5967)
    *   **描述：** 当网关返回“insufficient credits”时，agent 会完全停止工作，而不是切换到配置的回退模型。这是一个关键的功能性故障。
    *   **状态：** **已有 Fix PR** - PR [#5968](https://github.com/HKUDS/nanobot/pull/5968) 已合并，问题已解决。

2.  **中严重度：模型选择器显示已停服模型**
    *   **Issue #5977 - Model picker lists OpenAI models that already shut down**
    *   **链接：** [HKUDS/nanobot#5977](https://github.com/HKUDS/nanobot/issues/5977)
    *   **描述：** WebUI 的模型选择器中仍会显示已关闭的 OpenAI 模型（如 `gpt-5-chat-latest`），导致用户选择后请求失败。
    *   **状态：** **已有 Fix PR** - PR [#5978](https://github.com/HKUDS/nanobot/pull/5978) 已关闭，问题已解决。

3.  **低严重度/功能限制：Telegram 群组策略不够灵活**
    *   **Issue #5972 - Telegram: per-chat and per-topic group policy (and a /group command to manage it)**
    *   **链接：** [HKUDS/nanobot#5972](https://github.com/HKUDS/nanobot/issues/5972)
    *   **描述：** 当前的 `groupPolicy` 是频道级别的，无法针对不同话题设置不同策略。这属于功能限制，而非崩溃。
    *   **状态：** **有相关 PR** - PR [#5973](https://github.com/HKUDS/nanobot/pull/5973) 和 [#5974](https://github.com/HKUDS/nanobot/pull/5974) 正在开发此功能。

#### **6. 功能请求与路线图信号**

结合新 Issue 和已有的 PR，以下功能需求可能被纳入下一版本：

*   **MCP 工具集优化：** Issue #5298 提出的“预算模型可见的 MCP schema”是一个高级优化，表明项目开始关注大规模集成下的性能。相关的 PR [#1759](https://github.com/HKUDS/nanobot/pull/1759) 已提出通过惰性加载和自动降级来减少上下文开销，值得关注。
*   **Telegram 管理精细化：** Issue #5972 和 PR #5973/#5974 表明，对 Telegram 平台的支持正从基础功能向更精细的管理（如按话题控制策略）发展。
*   **WebUI 体验提升：** PR #5983（添加基于目录的推理力度选择）和 PR #5982（修正繁体中文提示）表明，WebUI 正在成为一个持续改进的重点，旨在提供更直观、更准确的用户界面。

#### **7. 用户反馈摘要**

从 Issues 描述中提炼的用户痛点：

*   **痛点一：运行中断与静默失败。** Issue #5967 和 #5977 的用户都遇到了因模型或账户问题导致的运行中断，反馈中透露出“agent appears to stop working”和“died right away”的挫败感。这突显了对**健壮的错误处理和清晰的反馈机制**的迫切需求。
*   **痛点二：后台任务干扰。** Issue #5900 的用户明确表示自动上下文压缩的通知“quite annoying”，希望 bot 的行为能更“安静”，减少对正常对话的侵入性。
*   **使用场景：** 用户场景多样，从在 Telegram 超级群中管理不同话题的机器人，到使用大量 MCP 工具的专业用户，都对项目的可配置性和效率提出了更高要求。

#### **8. 待处理积压**

*   **长期未响应的 PR：**
    *   **PR #1759 - feat: Reduces MCP tool context overhead with lazy loading and auto-demotion**
        *   **链接：** [HKUDS/nanobot#1759](https://github.com/HKUDS/nanobot/pull/1759)
        *   **状态：** 创建于 2026-03-09，最后更新于 2026-09-29，仍处于 OPEN 状态。这是一个解决重要性能问题（Issue #5298）的 PR，但可能存在合并冲突或其他技术障碍，需要维护者关注。
    *   **PR #5537 - feat(my): persist session focus across turns**
        *   **链接：** [HKUDS/nanobot#5537](https://github.com/HKUDS/nanobot/pull/5537)
        *   **状态：** 创建于 2026-08-25，最后更新于 2026-09-29，仍处于 OPEN 状态。该功能旨在增强会话连续性，对用户体验很重要，但同样经历了长时间的审查。

**建议：** 维护者应优先处理这些与当前活跃 Issue 直接相关且长期未决的 PR，以释放被阻塞的功能。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>



# Hermes Agent 项目动态日报 — 2026-09-30

---

## 1. 今日速览

Hermes Agent 项目在 2026-09-30 维持**高活跃度**状态：过去 24 小时内新增/活跃 Issue 42 条、PR 46 条待合并，社区参与度处于近期峰值。项目当前无新版本发布，但代码库正在经历一轮密集的修复与功能迭代——Desktop 端与 Gateway 层的稳定性问题成为焦点，同时 Memory Compaction 模式与 Matrix 平台增强等长线功能持续推进。整体健康度评分：**B+/健康偏积极**（高吞吐的 Issue/PR 流入伴随集中式修复 PR，说明维护者响应能力较强）。

---

## 2. 版本发布

**无新版本发布。** 最近一次 Release 信息未在本次数据窗口中出现，当前开发主线聚焦于 v0.20.x 系列的稳定性补丁与 v0.21.x 的功能储备。

---

## 3. 项目进展

### 今日已合并/关闭的关键 PR

| PR | 类型 | 说明 |
|---|---|---|
| [#128336](https://github.com/NousResearch/hermes-agent/pull/128336) | Bug 修复 / P2 | `fix(cli): bounded graceful shutdown ends a SIGTERM-orphaned serve backend (#76244)` — 为 uvicorn 设置 `timeout_graceful_shutdown`，解决 Desktop 退出时 `hermes serve` 后端被 SIGTERM 孤儿化的问题 |
| [#128270](https://github.com/NousResearch/hermes-agent/pull/128270) | 测试 / P3 | `test(desktop): pin dirty edit blur→Enter interleaving` — 固化编辑竞态测试用例 |

### 高价值待合并 PR（近期密集提交）

以下 PR 由核心贡献者 **OutThisLife** 集中提交，修复链路清晰，预计将在下一版本批量合并：

| PR | 说明 |
|---|---|
| [#128532](https://github.com/NousResearch/hermes-agent/pull/128532) | 修复 Desktop 端 Clarify 工具卡片在 remount 时丢失用户已选答案的问题 |
| [#128535](https://github.com/NousResearch/hermes-agent/pull/128535) | 修复容器后端下 `_agent_visible_path` 对沙箱外 `@file:` 引用的路径映射 |
| [#128534](https://github.com/NousResearch/hermes-agent/pull/128534) | 修复 Desktop 远程 Gateway 模式下 Bot Mode 本地 `hermes serve` 孤儿进程自持循环 |
| [#128533](https://github.com/NousResearch/hermes-agent/pull/128533) | 修复 Docker `docker_mount_cwd_to_workspace` 静默回退问题，增加跳过原因日志 |
| [#128521](https://github.com/NousResearch/hermes-agent/pull/128521) | 修复 Gated WebSocket 认证不接受 provider-verified session token 的问题 |
| [#128531](https://github.com/NousResearch/hermes-agent/pull/128531) | 修复 TUI Gateway 在中断/孤儿回收时未广播 `approval.cancelled` 的问题 |
| [#128526](https://github.com/NousResearch/hermes-agent/pull/128526) | 修复远程 Gateway 登录窗口在网关不可达时永久白屏的问题 |
| [#128525](https://github.com/NousResearch/hermes-agent/pull/128525) | 修复 Windows 上 venv Python 版本不匹配的诊断链路与 ELECTRON_RUN_AS_NODE 隐患 |
| [#128453](https://github.com/NousResearch/hermes-agent/pull/128453) | 修复 Desktop 启动时凭据水合竞态导致的 onboarding 反复d闪现问题 |
| [#128339](https://github.com/NousResearch/hermes-agent/pull/128339) | 修复 serve parent-death watchdog 使用 `os._exit` 而非优雅退出路径的问题 |
| [#127247](https://github.com/NousResearch/hermes-agent/pull/127247) | 修复 ImageLightbox 仅支持 fit 模式，新增缩放/平移/捏合手势 |

### 功能类 PR

| PR | 说明 |
|---|---|
| [#91118](https://github.com/NousResearch/hermes-agent/pull/91118) | **feat(memory): add catalog and hybrid compaction modes** — 新增 Standard / Catalog / Hybrid 三种对话压缩模式，Catalog 模式提供确定性脱敏句柄，Hybrid 结合两者优势 |
| [#126281](https://github.com/NousResearch/hermes-agent/pull/126281) | **feat(matrix): opt into reaction follow-ups per turn** — Matrix 平台支持每轮对话的 reaction 跟进功能 |
| [#125494](https://github.com/NousResearch/hermes-agent/pull/125494) | **fix(matrix): preserve inbound media captions and filenames** — 修复 Matrix 适配器丢弃 MSC2530 文件名的 bug |
| [#53992](https://github.com/NousResearch/hermes-agent/pull/53992) | **fix(state): opt-in logical lineage for JSON/JSONL session export** — 为 JSON/JSONL 导出添加逻辑会话谱系支持 |

---

## 4. 社区热点

### 评论最多的 Issue Top 5

| Issue | 评论 | 👍 | 核心诉求 |
|---|---|---|---|
| [#89995](https://github.com/NousResearch/hermes-agent/issues/89995) | 21 | 3 | 将 Desktop 端的 Bot Mode 群聊功能暴露到 Web Dashboard 和 Gateway 层 |
| [#122490](https://github.com/NousResearch/hermes-agent/issues/122490) | 14 | 0 | Bot-to-bot DM 交付 runner 继承了带 ruamel 依赖的 store Python，导致后台 bot 消息投递失败 |
| [#123926](https://github.com/NousResearch/hermes-agent/issues/123926) | 13 | 0 | 启动时插件被静默丢弃——`_evict_modules` 遍历 `sys.modules` 时字典大小变化导致随机插件加载失败 |
| [#101160](https://github.com/NousResearch/hermes-agent/issues/101160) | 9 | 0 | Buzz relay 在安静 300s 后被判定为死亡并重连（实际是健康的） |
| [#122402](https://github.com/NousResearch/hermes-agent/issues/122402) | 8 | 0 | Ubuntu 24.04 上 Matrix 功能更新时 `python-olm` 源码编译失败，缺少 `clang++` |

### 分析

社区最活跃的讨论集中在两个方向：
1. **Bot Mode 的多端一致性**（#89995）：Desktop 独占的群聊功能是用户强烈希望迁移到 Web/Gateway 的能力，反映了用户对跨平台功能对齐的迫切需求。
2. **插件加载与消息投递的稳定性**（#122490, #123926）：后台 bot 和插件系统的可靠性问题在社区中引发了高关注度，属于高频使用场景。

---

## 5. Bug 与稳定性

### 🔴 P1（需紧急关注）

| Issue | 标题 | 已有 Fix PR？ |
|---|---|---|
| [#127073](https://github.com/NousResearch/hermes-agent/issues/127073) | `/rollback` 在嵌套 git repo 中报告成功但实际未恢复任何内容（checkpoints 将子仓库存为 gitlink） | ❌ 无 |
| [#126474](https://github.com/NousResearch/hermes-agent/issues/126474) | `gateway restart` 在非标准 systemd 单元名下 fallback 路径强制杀掉正常运行的 gateway 并在调用者 cgroup 中产生残留进程 | ❌ 无 |

### 🟠 P2（高优先级）

| Issue | 标题 | 已有 Fix PR？ |
|---|---|---|
| [#122490](https://github.com/NousResearch/hermes-agent/issues/122490) | Bot-to-bot DM 交付 runner 因缺少 `ruamel` 模块而失败 | ❌ 无 |
| [#122402](https://github.com/NousResearch/hermes-agent/issues/122402) | Ubuntu 24.04 上 `python-olm` 源码编译失败（缺少 `clang++`） | ❌ 无 |
| [#30708](https://github.com/NousResearch/hermes-agent/issues/30708) | BlueBubbles 适配器无 inbound 去重，导致每条 iMessage 被处理两次 | ❌ 无 |
| [#75724](https://github.com/NousResearch/hermes-agent/issues/75724) | Windows 上 `hermes update --backup` 遇到非 SQLite `.db` 文件时备份中止 | ❌ 无 |
| [#81255](https://github.com/NousResearch/hermes-agent/issues/81255) | Desktop/TUI 中 `/context` 命令报告 "No active agent" | ❌ 无 |
| [#121095](https://github.com/NousResearch/hermes-agent/issues/121095) | `browser_exec` 完成后遗留 `browser_harness.daemon` 进程 | ❌ 无 |
| [#102943](https://github.com/NousResearch/hermes-agent/issues/102943) | Nous Portal 登录默认模型选择器切到付费旗舰模型，回车即静默切换 | ❌ 无 |
| [#69008](https://github.com/NousResearch/hermes-agent/issues/69008) | OpenRouter deepseek-v4-flash tool continuation 失败（thinking 未回传） | ❌ 无 |
| [#68144](https://github.com/NousResearch/hermes-agent/issues/68144) | Desktop 悄悄将默认模型切换为最贵选项（5x cost increase） | ❌ 无 |
| [#126091](https://github.com/NousResearch/hermes-agent/issues/126091) | Desktop 长会话中消息重复与位置跳变（WebSocket 重连后渲染层状态不一致） | ❌ 无 |
| [#124767](https://github.com/NousResearch/hermes-agent/issues/124767) | `hermes update` 在 treeless partial clone 上 parked-branch guard 可能跳过验证 | ❌ 无 |
| [#128488](https://github.com/NousResearch/hermes-agent/issues/128488) | API turn 指定了 model+provider 但仍走了 profile fallback chain | ❌ 无 |
| [#128497](https://github.com/NousResearch/hermes-agent/issues/128497) | `gateway/host_rendezvous.py` 家目录归属检查的警告信息自相矛盾 | ❌ 无 |

### 🟡 P3（低优先级 / 已关闭）

| Issue | 标题 | 状态 |
|---|---|---|
| [#123926](https://github.com/NousResearch/hermes-agent/issues/123926) | 插件启动时被静默丢弃 | OPEN |
| [#105267](https://github.com/NousResearch/hermes-agent/issues/105267) | Cron 任务需要按作业/平台控制外部 memory provider 行为 | OPEN |
| [#101160](https://github.com/NousResearch/hermes-agent/issues/101160) | Buzz relay 安静 300s 后误判死亡重连 | OPEN |
| [#72649](https://github.com/NousResearch/hermes-agent/issues/72649) | `custom` provider 的 `reasoning_effort` 在 LiteLLM proxy 上致命 | OPEN |
| [#119457](https://github.com/NousResearch/hermes-agent/issues/119457) | 插件提供的 MCP server 名触发 "Unknown toolsets" 误报 | OPEN |
| [#124010](https://github.com/NousResearch/hermes-agent/issues/124010) | Photon sidecar 僵尸流 watchdog 每 10 分钟重启健康安静线路 | OPEN |
| [#79565](https://github.com/NousResearch/hermes-agent/issues/79565) | Desktop 会话切换时仅显示最新压缩片段 | CLOSED |
| [#73899](https://github.com/NousResearch/hermes-agent/issues/73899) | Desktop HTML 报告预览中图片无返回路径 | CLOSED |
| [#121609](https://github.com/NousResearch/hermes-agent/issues/121609) | Desktop macOS HUD 模式下 `read_window_below` 超时 | CLOSED |
| [#48359](https://github.com/NousResearch/hermes-agent/issues/48359) | Desktop 会话名显示 skill 脚手架文本而非真实标题 | CLOSED |
| [#76244](https://github.com/NousResearch/hermes-agent/issues/76244) | `hermes serve` 在 SIGTERM 后挂起或孤儿化 | CLOSED（PR #128336 已合并） |
| [#108784](https://github.com/NousResearch/hermes-agent/issues/108784) | Desktop 创建的会话不记录 `git_branch` | CLOSED |
| [#108694](https://github.com/NousResearch/hermes-agent/issues/108694) | Desktop 项目 lane 新会话在非 `main` 分支仓库上报 `invalid reference: main` | CLOSED |

### 稳定性评估

- **P1 级问题 2 个**均涉及核心功能（rollback、gateway restart），且无已知 fix PR，建议维护者优先处理。
- **P2 级问题 13 个**，其中 #122490（bot DM）、#126091（Desktop 消息重复）、#68144/#102943（模型静默切换）影响用户体验较广。
- 今日已关闭的 8 个 Issue 中，#76244 已有对应合并 PR，说明修复闭环率正在提升。

---

## 6. 功能请求与路线图信号

### 高价值功能请求

| Issue | 请求内容 | 关联 PR | 预期纳入版本 |
|---|---|---|---|
| [#89995](https://github.com/NousResearch/hermes-agent/issues/89995) | Bot Mode 群聊暴露到 Web Dashboard & Gateway | 无 | v0.21.x |
| [#105267](https://github.com/NousResearch/hermes-agent/issues/105267) | Cron 作业按作业/平台配置外部 memory provider 策略 | 无 | v0.21.x |
| [#91118](https://github.com/NousResearch/hermes-agent/pull/91118) | Catalog / Hybrid 压缩模式 | ✅ PR 已存在 | v0.21.x（预计） |
| [#126281](https://github.com/NousResearch/hermes-agent/pull/126281) |

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



根据您提供的数据，我为您生成了 PicoClaw 项目在 2026-09-30 的动态日报。报告显示，项目在过去24小时内活跃度较高，但主要集中在问题反馈与修复讨论阶段，暂无新版本发布。

---

### **PicoClaw 项目动态日报 (2026-09-30)**

#### **1. 今日速览**
PicoClaw 项目在过去24小时内呈现出**高 Issue 提交活跃度与中等 PR 推进速度并存**的状态。社区用户对 Web UI 的交互体验提出了集中反馈，同时开发者社区正针对这些前端问题及核心的 agent 循环逻辑进行修复与优化。项目整体处于积极的问题响应期，但尚未有成果合并至主分支。

#### **2. 版本发布**
*   **无新版本发布。** 最新发布仍为历史版本，无更新内容需要说明。

#### **3. 项目进展**
今日有 1 条 PR 被关闭，2 条 PR 仍处于待合并状态，表明项目正处于**修复周期的早期阶段**。
*   **已关闭 PR：**
    *   **`#3337 [CLOSED] [stale] Fix/mcp failure hangs agent loop`** (作者: kuzmichus): 此 PR 旨在修复因 MCP 服务器连接失败导致的 agent 循环挂起问题。其被标记为 `[stale]` 并关闭，说明该修复方案可能已通过其他方式解决，或因长期未更新而被维护者清理。这提示我们项目对陈旧贡献的管理机制正在运行。
    *   **链接:** `github.com/sipeed/picoclaw/pull/3337`
*   **待合并 PR：**
    *   **`#3410 [OPEN] fix(pico/web): surface steering queue state so queued/dropped messages are no longer invisible`** (作者: racso2609): 这是一个关键的前端修复，直接响应了 Issue `#3408`，旨在解决用户消息在 agent 忙碌时被无声排队或丢弃的问题。若能合并，将显著改善 Web UI 的用户体验。
    *   **链接:** `github.com/sipeed/picoclaw/pull/3410`
    *   **`#3378 [OPEN] fix(auth): use configured scopes instead of hardcoded default in RefreshAccessToken`** (作者: sarff): 此 PR 修复了 OAuth 刷新令牌时硬编码作用域的问题，增强了认证配置的灵活性与正确性。这是一个重要的安全增强与功能修复。
    *   **链接:** `github.com/sipeed/picoclaw/pull/3378`

#### **4. 社区热点**
今日社区讨论高度集中在 **Web UI 的用户体验问题**上，多个相关 Issue 被创建。
*   **最活跃 Issue：`#3281 [OPEN] [BUG] Web UI chat input is very laggy when history has a little bit long`** (16条评论，2个👍)
    *   **链接:** `github.com/sipeed/picoclaw/issues/3281`
    *   **分析:** 这是一个长期存在的性能 bug，用户反馈在会话历史记录较长时，Web UI 的输入框会出现严重卡顿。高评论数表明许多用户遇到了此问题，是影响日常使用体验的关键痛点。
*   **集中讨论区：** 由用户 `racso2609` 创建的三个连续 Issue (`#3406`, `#3407`, `#3408`) 构成了一个关于 Web UI 的“问题三部曲”，系统性地指出了会话列表、消息队列和状态指示等方面的设计缺陷，显示出该用户对产品体验的深入观察。

#### **5. Bug 与稳定性**
今日报告的 Bug 均与 Web UI 相关，按严重程度排序如下：
1.  **高严重度 - 功能失效与数据丢失风险：**
    *   **`#3407 [OPEN] [BUG] Web UI: a session can disappear from the list while the model is still thinking (ghost session)`**
        *   **链接:** `github.com/sipeed/picoclaw/issues/3407`
        *   **描述:** 会话可能在模型思考时从列表中“幽灵般”消失，导致用户无法找回，存在丢失进行中工作的风险。
    *   **`#3408 [OPEN] [BUG] Web UI: messages sent while the agent is busy are queued invisibly and dropped silently`**
        *   **链接:** `github.com/sipeed/picoclaw/issues/3408`
        *   **描述:** 用户消息在 agent 忙碌时被无声排队，队列满时则静默丢弃，无任何UI反馈，极易造成用户以为消息已发送的误解。
        *   **关联修复:** 已有待合并 PR `#3410` 专门应对此问题。
2.  **中严重度 - 性能与体验问题：**
    *   **`#3281 [OPEN] [BUG] Web UI chat input is very laggy when history has a little bit long`** (如前所述)
    *   **`#3409 [OPEN] Scheduling primitive used as a wait mechanism for background subagents triggers an unwanted autonomous-loop tick`**
        *   **链接:** `github.com/sipeed/picoclaw/issues/3409`
        *   **描述:** 在使用子 agent 开发时，错误地将调度原语用作等待机制，导致了非预期的自主循环触发，属于逻辑/稳定性问题。

#### **6. 功能请求与路线图信号**
*   **核心功能增强请求：`#440 [OPEN] Replace hard iteration limit with context-window bounding and loop detection`**
    *   **链接:** `github.com/sipeed/picoclaw/issues/440`
    *   **描述:** 请求将硬编码的 `max_tool_iterations: 20` 限制替换为基于上下文窗口的边界检测和循环检测机制。这是一个影响 agent 能力上限的关键架构性改进请求。
*   **综合功能请求：`#3406 [OPEN] [Feature] Web UI: clearer working indicator, separate manual/channel sessions, richer session list with archiving`**
    *   **链接:** `github.com/sipeed/picoclaw/issues/3406`
    *   **描述:** 对 Web UI 提出了系统性的改进建议，包括更清晰的工作状态指示、分离手动/通道会话、以及带归档功能的丰富会话列表。
*   **路线图信号判断：**
    *   **短期（高概率）：** 修复 Web UI 的 Bug (`#3407`, `#3408`) 和性能问题 (`#3281`) 应是下一版本的最优先事项。相关的修复 PR `#3410` 已就绪。
    *   **中期（需评估）：** 认证修复 (`#3378`) 和 agent 循环限制改进 (`#440`) 涉及核心逻辑，需要更多的开发资源和测试，可能会在后续版本中考虑。

#### **7. 用户反馈摘要**
*   **主要痛点：** 用户对 Web UI 的稳定性和反馈机制极为不满。核心抱怨点在于“消息消失”、“无反馈排队”和“操作卡顿”，这严重影响了用户对 agent 工作状态的信任和交互安全感。
*   **使用场景：** 用户积极使用 Web UI 进行日常对话和复杂的子 agent 开发（如 `#3409` 所述），这表明 PicoClaw 的 Web 界面已成为核心交互方式，其体验至关重要。
*   **满意/不满意：** 目前反馈以不满意为主，集中在前端体验上。但社区也展现了较高的参与度，通过提交详尽的 Issue 和 PR 来帮助项目改进，这是一种积极的信号。

#### **8. 待处理积压**
*   **长期未响应 Issue：**
    *   **`#440 [OPEN] Replace hard iteration limit with context-window bounding and loop detection`** (创建于 2026-02-18，已开放超过7个月): 此问题触及 agent 核心逻辑的灵活性，虽然讨论较少，但对高级用户至关重要，需维护者关注并制定改进计划。
    *   **`#3281 [OPEN] [BUG] Web UI chat input is very laggy...`** (创建于 2026-07-21，已开放超过2个月): 这是一个长期存在的性能问题，虽然评论活跃，但尚未看到明确的修复 PR，需要警惕其进入“僵尸状态”。
*   **建议：** 维护者可优先处理已有关联 PR 的 Issue (`#3408`)，并对积压的核心 Issue 进行分类和里程碑规划，以管理社区预期。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-09-30

**仓库：** `nanocoai/nanoclaw`（github.com/qwibitai/nanoclaw）  
**统计周期：** 过去 24 小时（截至 2026-09-30）  
**核心指标：** Issues 更新 2 条（关闭 2 / 新增或活跃 0）｜ PR 更新 15 条（已合并/关闭 7，待合并 8）｜ 新版本发布 0 个

---

## 1. 今日速览

今日 NanoClaw 仓库活跃度集中在核心团队内部迭代：15 个 PR 有状态更新，7 项已合并/关闭，8 项仍在评审；2 条历史 Issue 被闭环，没有新增 Issue。整体进展稳健，重点落在容器生命周期一致性、网关/Skill 安装体验、日志鲁棒性与 CI 供应链安全上。

但公开社区互动数据归零——所有可见 Issue/PR 的评论与反应数均为 0，说明今日没有形成外部讨论热点，主要由核心贡献者推进代码。当前 8 个待合并 PR 覆盖了网关 endpoint 声明、HTTPS 代理、Iron 本地 keyless 模型、更新回滚等关键路径，项目健康度良好，但需持续关注 open PR 的评审节奏，避免积压扩大。

---

## 2. 版本发布

**无。**  
本周期未发布新 Release 或标签。

---

## 3. 项目进展（今日已合并/关闭的 PR）

| PR | 标题 | 关键价值 |
|---|---|---|
| [#3958](https://github.com/nanocoai/nanoclaw/pull/3958) | fix(log): never throw when a log value cannot be JSON-serialized | 日志系统不会因循环引用或 BigInt 触发 `JSON.stringify` 抛错，避免日志反噬 host 崩溃 |
| [#3947](https://github.com/nanocoai/nanoclaw/pull/3947) | fix(host): stop containers whose session or agent group was deleted | host 清理循环会停止会话或 agent group 已被删除的容器，消除删除后残留容器的问题 |
| [#3953](https://github.com/nanocoai/nanoclaw/pull/3953) | fix(iron-proxy): stop early on arm64 engines that cannot run amd64 images | 在 arm64 Docker 引擎上提前拦截 Iron Proxy 安装，避免拉到 amd64-only 镜像后出现 `exec format error` |
| [#3919](https://github.com/nanocoai/nanoclaw/pull/3919) | fix(opencode): check the model URL against the selected gateway at the prompt | OpenCode 安装流程在 prompt 阶段即校验本地模型 URL，减少安装后才发现配置失败的体验损耗 |
| [#3878](https://github.com/nanocoai/nanoclaw/pull/3878) | fix(setup): stop the ping agent's container before deleting its folder | setup 的后置清理会先于文件夹删除停止 ping agent 容器，避免孤容器 |
| [#3955](https://github.com/nanocoai/nanoclaw/pull/3955) | docs(opencode): keep gateway notes in the gateway skills | 将 Iron/OneCLI 的凭证说明收敛到各自 Skill，OpenCode 文档不再重复 gateway 特定信息 |
| [#3954](https://github.com/nanocoai/nanoclaw/pull/3954) | docs(gateways): correct what the credential reread refuses in two comments | 修正 gateway 凭证重读/保存相关的注释，与代码实际行为一致 |

**整体推进评估：** 今日合并/关闭了 7 个 PR，核心围绕“host 稳定性 + 安装体验 + 文档一致性”。其中 [#3947](https://github.com/nanocoai/nanoclaw/pull/3947) 和 [#3953](https://github.com/nanocoai/nanoclaw/pull/3953) 分别补齐了容器生命周期与 ARM64 部署两条关键路径的短板，是项目向生产可用性迈出的实质一步。

---

## 4. 社区热点

**今日无显著公开讨论热点。** 所有可见 Issue/PR 的评论数与反应数均为 0，未出现高评论、高反应的爆发性议题。

不过，以下两个已闭环 Issue 对应了真实用户/部署场景中的痛点，值得作为后续社区传播的重点：

- **[#3888](https://github.com/nanocoai/nanoclaw/issues/3888) Iron Proxy setup fails on arm64 hosts**  
  在 NVIDIA DGX Spark 等 aarch64 主机上，Iron Control 镜像因仅提供 amd64 版本导致 `exec format error`。已由 [#3953](https://github.com/nanocoai/nanoclaw/pull/3953) 修复。

- **[#3909](https://github.com/nanocoai/nanoclaw/issues/3909) Host starts a session container for an agent group deleted mid-spawn**  
  删除 agent group 后 host 仍在启动对应会话容器，状态不一致。已由 [#3947](https://github.com/nanocoai/nanoclaw/pull/3947) 修复。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重程度 | 问题/PR | 状态 | 说明 |
|---|---|---|---|
| **高** | [#3909](https://github.com/nanocoai/nanoclaw/issues/3909) Host starts a session container for an agent group deleted mid-spawn | **已修复**（[#3947](https://github.com/nanocoai/nanoclaw/pull/3947)） | 删除 agent group 后仍启动容器，导致状态不一致与资源泄漏 |
| **高** | [#3888](https://github.com/nanocoai/nanoclaw/issues/3888) Iron Proxy setup fails on arm64 hosts | **已修复**（[#3953](https://github.com/nanocoai/nanoclaw/pull/3953)） | ARM64 主机无法运行 amd64-only 的 Iron Control 镜像，直接阻断安装 |
| **中** | [#3958](https://github.com/nanocoai/nanoclaw/pull/3958) Log value cannot be JSON-serialized | **已修复** | `JSON.stringify` 遇到循环对象/BigInt 会抛错，可能导致 host 崩溃 |
| **中** | [#3962](https://github.com/nanocoai/nanoclaw/pull/3962) fix(update): refuse cutover when the service liveness probe itself fails | **待合并** | 服务存活探针自身失败时，更新流程仍可能报告 complete，造成误判 |
| **中** | [#3956](https://github.com/nanocoai/nanoclaw/pull/3956) fix(update): rollback stops the live nohup host and drains agent containers | **待合并** | 回滚时未能停止真正在运行的 nohup host，也未先排空 agent 容器 |
| **中** | [#3901](https://github.com/nanocoai/nanoclaw/pull/3901) fix(setup): let the host service reach the internet through an HTTPS proxy | **待合并** | 仅能通过 HTTPS 代理访问外网的机器上，host service 无法联网 |
| **中** | [#3918](https://github.com/nanocoai/nanoclaw/pull/3918) fix(agent-runner): do not nudge a result-door turn that already replied via a tool | **待合并（held）** | result-door provider 会重复发送 agent 已用 `send_message` 发出的回复 |
| **低** | [#3878](https://github.com/nanocoai/nanoclaw/pull/3878) Setup ping agent container cleanup | **已修复** | 删除 ping agent 文件夹前未先停止容器，留下孤容器 |

---

## 6. 功能请求与路线图信号

今日未出现新增用户功能 Issue，但以下待合并 PR 揭示了下一阶段可能纳入版本的方向：

- **[#3964](https://github.com/nanocoai/nanoclaw/pull/3964) feat(gateway): let a provider declare exact host:port model endpoints**  
  允许 provider 声明精确的 `host:port` 模型 endpoint，并被核心自动审批，减少非默认端口模型每次调用都弹出审批卡。这代表了网关配置从“域名级”向“端点级”细化的趋势。

- **[#3966](https://github.com/nanocoai/nanoclaw/pull/3966) feat(iron): allow a keyless model on this machine over plain HTTP**  
  Iron 场景下支持同一机器的 keyless 模型通过 `http://host.docker.internal:<port>/v1` 访问，降低本地无 TLS 推理的接入门槛。

- **[#3968](https://github.com/nanocoai/nanoclaw/pull/3968) ci: pin workflow actions and cosign, add Dependabot**  
  将 GitHub Actions 与 cosign 固定到精确版本，并引入 Dependabot，体现项目对供应链安全与 CI 可复现性的重视。

- **[#3901](https://github.com/nanocoai/nanoclaw/pull/3901) HTTPS proxy support** 与 **[#3956](https://github.com/nanocoai/nanoclaw/pull/3956)/[#3962](https://github.com/nanocoai/nanoclaw/pull/3962) update/rollback robustness**  
  这些修复共同指向“企业网络环境 + 无人值守升级”两个生产化主题。

---

## 7. 用户反馈摘要

从今日闭环 Issue 与相关 PR 中可提炼出以下真实用户场景与情绪：

- **ARM64 部署受阻（#3888）**  
  用户在 NVIDIA DGX Spark 这类 aarch64 设备上安装 NanoClaw 2.4.0 + OpenCode + Iron Proxy 时遭遇 `exec format error`，根源是 Iron Control 镜像未提供 arm64 版本。诉求：要么早期明确拦截并给出可操作建议，要么提供多架构镜像。

- **状态一致性敏感（#3909）**  
  删除 agent group 后仍看到 host 为其启动会话容器，用户期望删除操作是原子的、不会留下“幽灵容器”。这反映出容器生命周期与持久化状态同步是关键信任指标。

- **安装流程宜早失败、给出原因（#3919 / #3965）**  
  在 Iron 下配置本地模型 URL 时，用户希望 prompt 阶段就能校验 URL 并给出网关特定的失败原因，而不是保存后每一次调用都失败。

- **网络环境限制（#3901）**  
  部分机器只能通过 HTTPS 代理出网，Node 默认不读取 `HTTPS_PROXY`，导致 host service 无法联网。用户需要在安装或服务启动阶段显式支持代理。

- **对鲁棒性的隐性要求（#3958）**  
  日志里出现不可序列化对象（如 BigInt、循环引用）就能让 host 崩溃，说明系统对“观测代码不能影响业务代码”的要求越来越高。

---

## 8. 待处理积压

当前共有 **8 个 PR 待合并**，建议维护者优先关注以下可能长期阻塞或存在依赖关系的项：

1. **[#3901](https://github.com/nanocoai/nanoclaw/pull/3901) fix(setup): let the host service reach the internet through an HTTPS proxy**  
   创建时间最早（2026-09-25），对企业/受限网络用户影响较大，建议尽快评审。

2. **[#3918](https://github.com/nanocoai/nanoclaw/pull/3918) fix(agent-runner): do not nudge a result-door turn that already replied via a tool**  
   PR 描述明确标注 **held until the send_message ack flag lands**，需跟踪前置依赖的落地，避免无限期挂起。

3. **[#3965](https://github.com/nanocoai/nanoclaw/pull/3965) fix(opencode,iron): check the model URL against the selected gateway at the prompt**  
   与已关闭的 [#3919](https://github.com/nanocoai/nanoclaw/pull/3919) 主题重叠，需注意是否构成替代/改进关系，避免重复或冲突。

4. **[#3962](https://github.com/nanocoai/nanoclaw/pull/3962) / [#3956](https://github.com/nanocoai/nanoclaw/pull/3956) update & rollback 稳定性**  
   两者都涉及 `update-nanoclaw` 的可靠性，建议合并前做回归测试，防止升级路径出现“假完成”或回滚不彻底。

---

**结语：** NanoClaw 今日展现出稳定的核心团队维护节奏，关键 Bug 被快速闭环，生产化能力（ARM64、容器生命周期、升级回滚、代理支持）是近期明显主题。下一步建议加快 open PR 的评审与合并，并尝试通过 Release Notes 或讨论帖把已修复的部署痛点反馈给用户，以提振社区参与度。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>



好的，这是根据您提供的 NullClaw GitHub 数据生成的 2026-09-30 项目动态日报。

---

### **NullClaw 项目动态日报 - 2026-09-30**

**项目健康度概览：** 项目今日活跃度较低，处于常规维护状态。无新版本发布，但有一个重要功能请求的 Issue 开启和一个版本发布相关的 PR 被关闭，表明开发工作正在按计划推进。

---

#### **1. 今日速览**

今日 NullClaw 项目活动稀疏，整体状态稳定。在过去24小时内，项目记录到1条新的Issue（功能请求）和1条已关闭的Pull Request（版本发布）。社区活跃度处于低位，无新的版本发布。项目当前的核心工作似乎集中在内部版本迭代和对外部功能集成的探索上。

#### **2. 项目进展**

今日有一条重要的PR被关闭，标志着一个开发周期的结束。

-   **PR #1014 [CLOSED] v20260929**
    -   **作者:** elwina | **创建:** 2026-09-28 | **更新:** 2026-09-29
    -   **链接:** [nullclaw/nullclaw PR #1014](https://github.com/nullclaw/nullclaw/pull/1014)
    -   **摘要:** 此PR旨在为项目带来一次版本号为 `v20260929` 的发布。其主要包含两项修复：
        1.  **修复Web搜索问题：** 将网络搜索功能固定到配置的提供商，并阻止 Exa 拒绝重复的 `Content-Type` 头信息。这提升了搜索功能的稳定性和可靠性。
        2.  **优化QQ回复：** 在官方QQ回复发送前，剥离 Markdown 标记，确保消息在特定平台上的显示兼容性。
    -   **分析：** 此次合并（关闭）意味着这些修复已成功集成到主分支，为 `v20260929` 版本的发布铺平了道路。项目在错误修复和用户体验优化方面持续前进。

#### **3. 社区热点**

今日社区互动较少，但有一个新开启的Issue可能成为未来的讨论焦点。

-   **Issue #1015 [OPEN] Hosted MemCode engine for nullclaw memory interface**
    -   **作者:** vivekgupta-memcode | **创建:** 2026-09-29
    -   **链接:** [nullclaw/nullclaw Issue #1015](https://github.com/nullclaw/nullclaw/issues/1015)
    -   **摘要:** MemCode公司的创始人Vivek Gupta提出请求，希望为NullClaw提供一个托管版的MemCode内存引擎。他指出，NullClaw已支持多种可插拔的内存引擎，且运行时开销很小。通过提供远程选项，用户可以跨设备保持选定的记忆，而不会增加本地存储的负担。
    -   **分析:** 这是典型的外部功能集成请求。它表明NullClaw的架构获得了外部认可，具备良好的可扩展性。此Issue的最终走向将是对项目社区和生态包容性的一次考验。

#### **4. 功能请求与路线图信号**

-   **新功能请求:** Issue #1015 提出了一个明确的功能需求：**增加对远程/托管内存引擎的原生支持**。这暗示了路线图上的一个潜在方向，即增强项目的分布式和多设备同步能力。
-   **路线图信号:** 结合PR #1014的版本号 `v20260929`，可以推测项目遵循一个相对频繁的发布节奏（如每日或每周）。对网络搜索和QQ平台兼容性的持续关注，表明项目正在积极优化核心功能和特定用户场景的体验。

#### **5. Bug 与稳定性**

今日无新的Bug报告。PR #1014中修复的两个问题可视为已解决的稳定性问题：
-   **已修复:** Exa提供商的网络搜索请求因重复`Content-Type`头被拒绝的问题。
-   **已修复:** QQ回复中Markdown标记导致的显示异常问题。

#### **6. 用户反馈摘要**

今日无直接的用户反馈评论。Issue #1015的描述本身可以被视为一种积极的“用户反馈”，因为它来自一家外部公司的创始人，其诉求基于对NullClaw现有架构的深刻理解。这间接肯定了项目在“可插拔内存引擎”设计上的成功。

#### **7. 待处理积压**

当前数据中无长期未响应的重要Issue或PR。项目看起来没有明显的积压问题，维护状态良好。

---

**总结：** NullClaw项目在2026-09-30这天处于静谧的开发阶段。核心进展是内部版本迭代（v20260929）的完成和相关稳定性修复。一个来自外部的重要功能请求（MemCode集成）为项目未来的生态发展提供了想象空间。整体健康度稳健，但社区活跃度有待提升。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 — 2026-09-30

---

## 1. 今日速览

IronClaw 项目今日正式发布 **v1.4.1 稳定版**，将 RC2 中经过验证的 Google OAuth 激活修复与 Wasmtime 安全更新推进至生产通道。社区侧活跃度中等偏高：2 条 Issue 新增/活跃（均为架构级功能提案），5 条 PR 更新（其中 1 条为版本发布 PR 已关闭，4 条待审），其中 CjS77 提出的 **turn-0 tool selection** 方案（Issue + 配套 PR）是今日最值得关注的动向，若合入将显著减少工具调用的首轮回合延迟。此外两位新贡献者 changeroa 提交了 CLI 配置报告和 WebUI 焦点恢复两项修复，社区参与度呈现健康增长。

---

## 2. 版本发布

### ironclaw-v1.4.1 — [Release Notes](https://github.com/nearai/ironclaw/releases)

| 项目 | 详情 |
|------|------|
| 版本号 | 1.4.1 |
| 发布日期 | 2026-09-29 |
| 来源 | 稳定化提升自 `1.4.1-rc.2`（提交 `b28154f`） |

**修复内容：**
- **Google OAuth 激活修复**：当部署操作者通过 Web UI 提供 Google OAuth 客户端时，Google 扩展（Gmail、Google Calendar）现可正常激活——此前在此配置路径下激活会失败。
- **Wasmtime 安全更新**：同步了 Wasmtime 运行时的安全补丁。

**破坏性变更：** 无。本次为纯修复 + 安全补丁，从 RC2 直接提升，无需额外迁移步骤。

**升级建议：** 所有使用 Google OAuth 扩展或关注沙箱运行时安全的部署，建议尽快升级至 1.4.1。

---

## 3. 项目进展

| PR | 状态 | 贡献者 | 说明 |
|----|------|--------|------|
| [#8120 chore(release): promote 1.4.1-rc.2 to 1.4.1](https://github.com/nearai/ironclaw/pull/8120) | ✅ 已关闭（合并） | henrypark133 | 将 RC2 提升为稳定版，更新包版本、锁文件及 changelog，**直接推进了 v1.4.1 的正式交付** |

今日仅有此 1 条 PR 合并，为版本发布流程 PR。4 条待审 PR 尚未合入，项目功能主线的增量推进有限，但新贡献者修复与核心功能提案的进入审核管道为后续迭代奠定了基础。

---

## 4. 社区热点

### Issue #7889 — RFC: extend the scheduler/orchestrator with opt-in remote edge workers
🔗 [nearai/ironclaw#7889](https://github.com/nearai/ironclaw/issues/7889)

- 作者：kvnloo｜评论：1｜创建于 2026-08-25，今日再次活跃
- **诉求分析**：当前 IronClaw 的工作池仅限于单一主机，尽管已支持并行作业、Docker 沙箱、WASM 工具等，但多主机场景仍是短板。提案建议引入**可选的远程边缘 Worker**，使操作者可利用跨节点的闲置算力。该 RFC 历时一个多月仍在讨论，说明架构设计存在较多需权衡的点（安全模型、凭证传递、网络延迟等），但社区对分布式调度能力的期待明确。

### Issue #8113 — Proposal: opt-in turn-0 tool selection (BM25F + embeddings)
🔗 [nearai/ironclaw#8113](https://github.com/nearai/ironclaw/issues/8113)

- 作者：CjS77｜评论：0｜创建于 2026-09-27，今日更新
- **诉求分析**：在对话首轮模型调用前，基于 BM25F + embeddings 对授权工具目录排序，直接向模型广播最佳匹配工具，省去 `tool_search` 的往返延迟。方案强调**完全可选、默认关闭**（`RE` 配置项），降低引入风险。已有配套实现 PR #8119，说明作者准备充分，该提案进入实际评审的可能性较高。

---

## 5. Bug 与稳定性

今日无新报告的 Bug、崩溃或回归 Issue。两项待审修复 PR 如下：

| 严重度 | PR | 说明 |
|--------|----|------|
| 🟡 低 | [#8118 fix(cli): report effective config profile](https://github.com/nearai/ironclaw/pull/8118) | `ironclaw config path`/`doctor`/`status` 未报告生效的 boot profile；修复后复用 `runtime::effective_profile` 优先级路径，避免重复解析 |
| 🟡 低 | [#8117 fix(webui): restore focus after closing the command palette](https://github.com/nearai/ironclaw/pull/8117) | Cmd/Ctrl+K 命令面板关闭后焦点丢失到 body，无法继续在原输入框打字；修复记录调用元素并在清理时恢复焦点 |

两项均为**低风险、用户体验层面**的修复，且已有对应 PR，等待维护者评审合入。

---

## 6. 功能请求与路线图信号

| 功能提案 | Issue | 配套 PR | 下一版本纳入可能性 |
|----------|-------|---------|-------------------|
| **Turn-0 tool selection（BM25F + embeddings）** | [#8113](https://github.com/nearai/ironclaw/issues/8113) | [#8119](https://github.com/nearai/ironclaw/pull/8119) | 🟢 **高** — 作者同时提交了 Issue 与完整实现 PR，代码改动标记为 `scope: docs, scope: dependencies`、`risk: medium`，且完全可选/默认关闭，合入门槛较低，有望进入 1.5.x |
| **远程边缘 Worker** | [#7889](https://github.com/nearai/ironclaw/issues/7889) | 无 | 🟠 **中低** — 架构级变更，RFC 阶段仍在讨论，无实现 PR，短期内合入可能性不大 |

**路线图信号**：IronClaw 正沿两条主线演进——**(1)** 减少工具调用延迟（turn-0 tool selection）、**(2)** 扩展调度边界（remote edge workers）。前者有望率先落地。

---

## 7. 用户反馈摘要

今日 Issue 评论数据有限（#7889 仅 1 条评论，#8113 无评论），但从提案内容可提炼以下用户痛点：

- **工具发现延迟**：当前模型需先调用 `tool_search` 再执行工具，多了一轮往返，影响交互响应速度——这是 #8113 提案的核心驱动力。
- **单主机算力瓶颈**：操作者拥有多台闲置节点却无法复用，现有 worker pool 限制在单主机，资源利用率不足——#7889 RFC 的核心场景。
- **Google OAuth 配置路径断裂**：通过 Web UI 提供凭证时扩展无法激活，说明部分部署环境（非环境变量注入方式）曾被阻塞，v1.4.1 已修复。

---

## 8. 待处理积压

| 条目 | 类型 | 状态 | 待响应时长 | 备注 |
|------|------|------|-----------|------|
| [#7889 RFC: opt-in remote edge workers](https://github.com/nearai/ironclaw/issues/7889) | Issue | Open | 创建 35+ 天 | 架构级 RFC，仅 1 条评论，需核心维护者给出设计方向反馈 |
| [#7988 chore(agents): refresh codebase knowledge graph](https://github.com/nearai/ironclaw/pull/7988) | PR | Open | 创建 31+ 天 | CI bot 自动生成的知识图谱刷新 PR，长期未合并可能因手动审核流程卡住，建议维护者评估后快速合并或关闭 |

> **提醒维护者**：#7988 为低风险 CI 自动 PR，停滞逾月可能阻塞后续图谱更新流水线；#7889 作为高影响架构提案，需要阶段性设计决策以保持社区参与动力。

---

*数据截止：2026-09-30｜来源：GitHub nearai/ironclaw*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 · 2026-09-30

> 数据来源：netease-youdao/LobsterAI GitHub 公开活动
> 统计窗口：过去 24 小时

---

## 1. 今日速览

今日项目**代码侧高度活跃、Issue 侧以存量清理为主**：24 小时内 13 条 PR 全部完成合并/关闭，围绕安装器健壮性、网关重启预算、Cowork 进度卡与 Markdown/Artifacts 渲染体验集中推进。但 Issues 端呈现明显的"陈旧积压"特征——10 条更新中有 8 条带 `[stale]` 标签，2 条被关闭，新开且有效的问题仅 1 条（#2779）。整体健康度评估为**中等偏上**：合并吞吐量强劲，但用户侧长期未响应的 Bug（尤其是 Windows exec shell 与数据损坏类问题）正在积累，缺乏新版本发布来固化近期修复成果。

---

## 2. 版本发布

**今日无新版本发布。** 值得注意的是，今日合并的多项安装器与运行时修复（见下节）尚未通过 Release 触达用户，建议尽快打版，否则大量 Windows 用户仍会停留在受影响版本。

---

## 3. 项目进展

今日 13 条 PR 全部落地，可归纳为四条主线：

**A. 安装/更新健壮性（Windows 平台，直接对应线上故障）**
- [#2782](https://github.com/netease-youdao/LobsterAI/pull/2782) — 安装器在技能备份中止导致更新失败时，列出用户技能目录并弹出中英文本地化提示，引导用户迁移，替代原先仅英文的状态文案；更新仍保持 fail-closed。
- [#2706](https://github.com/netease-youdao/LobsterAI/pull/2706) — 修复 Windows PowerShell 5.1 下 Skills 备份辅助脚本因 `Measure-Object` 计算 `statistics.totalBytes` 失败的问题，改用 `PSCustomObject` 构建备份文件记录。
> 这两项直接回应 Issue #2395「无法安装（技能备份失败）」的根因，是今日最有用户价值的修复。

**B. 网关稳定性**
- [#2707](https://github.com/netease-youdao/LobsterAI/pull/2707) — 修复网关在刚就绪即崩溃时被无限重启的问题：原逻辑在首次 readiness 探针成功时就重置重启计数器，现改为仅在稳定窗口后才回补重启预算。
- [#2783](https://github.com/netease-youdao/LobsterAI/pull/2783) — 网关重启预算修复（同日跟进，作者 fisherdaddy）。

**C. Cowork 会话体验**
- [#2758](https://github.com/netease-youdao/LobsterAI/pull/2758) / [#2778](https://github.com/netease-youdao/LobsterAI/pull/2778) — 在 Cowork 输入框上方展示 OpenClaw 原生 progress card，并支持显式刷新（保留上一版计划，卡片 Markdown/步骤状态/重连更新/折叠状态均保持权威）。
- [#2777](https://github.com/netease-youdao/LobsterAI/pull/2777) — 长任务回合仅保留最近五步，缓解 DeepSeek 等模型长时间调用工具时的会话刷屏（单个 7 分钟任务曾渲染 94 行）。

**D. 渲染与细节修复**
- [#2781](https://github.com/netease-youdao/LobsterAI/pull/2781) — 修复 `remark-math` 将货币金额 `$3/$15` 误判为 KaTeX 行内公式的问题，采用 Pandoc 定界规则（开闭 `$` 均须邻接非空白字符）。
- [#2780](https://github.com/netease-youdao/LobsterAI/pull/2780) — 助手消息内联链接改为在对应 artifact 卡片中打开，而非外部应用。
- 另有 4 条 4 月遗留 PR 被清理合并：[#1682](https://github.com/netease-youdao/LobsterAI/pull/1682)（AI 回复朗读）、[#1683](https://github.com/netease-youdao/LobsterAI/pull/1683)（远程导入 URL 前置校验）、[#1707](https://github.com/netease-youdao/LobsterAI/pull/1707)（切换 Agent 清空主页输入框）、[#1773](https://github.com/netease-youdao/LobsterAI/pull/1773)（记忆编辑按钮 i18n 缺失 key）。

**整体推进幅度：** 一次性关闭 13 条 PR（含多条长龄 PR）显示维护团队正在做集中清理与收口，产品体验与安装可靠性均有实质改善；但其中相当比例为"陈旧清理"，实际新增能力以 Cowork 展示层为主。

---

## 4. 社区热点

按讨论热度排序：

| 排名 | 条目 | 评论数 | 状态 | 链接 |
|---|---|---|---|---|
| 1 | #2293 USER.md 被覆盖替换 | 6 | CLOSED(stale) | [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) |
| 2 | #2342 左下角广告能否彻底关闭 | 3 | CLOSED(stale) | [#2342](https://github.com/netease-youdao/LobsterAI/issues/2342) |
| 3 | #2395 无法安装 | 2 | OPEN(stale) | [#2395](https://github.com/netease-youdao/LobsterAI/issues/2395) |
| 4 | #2401 skill 技能商用与来源 | 2 | OPEN(stale) | [#2401](https://github.com/netease-youdao/LobsterAI/issues/2401) |

**诉求分析：**
- **多 Agent 隔离失效（#2293）** 是今日最受关注的问题：用户修改单个 agent 的"关于你"/USER.md 后，其他 agent 同步被改；关闭软件后单独修改 `workspace-*/USER.md`，重启后仍被 main agent 的内容覆盖。这触及**多分身场景的数据隔离根基**，评论互动最高，虽被标 stale 关闭，但未见对应修复 PR，存在回归风险。
- **广告关闭（#2342）** 反映用户对客户端商业化弹窗的敏感，属体验与商业化的张力点。
- **技能商用合规（#2401）** 显示用户已从"能用"进阶到"敢不敢商用"，对官方 pdf/docs/pptx/xlsx 技能的上游来源与授权提出疑问。

---

## 5. Bug 与稳定性

按严重程度排列：

**🔴 严重（数据完整性）**
- [#2393](https://github.com/netease-youdao/LobsterAI/issues/2393) — 加速器字符串改写把 `\f` 字节对（5C 66）替换为 `\x0C`(form feed)，导致写入含 `\firecrawl`、`\foo`、`\filename` 等文本的文件**静默损坏**。可复现性 100%，影响 PS 脚本路径、Windows 路径转义、JSON 转义等。**当前无 fix PR**，且与已知的 `$PSVersionTable` 相关 bug 关联，建议最高优先级跟进。

**🟠 高（功能不可用 / 安装失败）**
- [#2395](https://github.com/netease-youdao/LobsterAI/issues/2395) — 更新因技能备份失败中止，旧安装未被替换。**已有修复 PR：[#2782](https://github.com/netease-youdao/LobsterAI/pull/2782)、[#2706](https://github.com/netease-youdao/LobsterAI/pull/2706)（今日合并）**，待发版验证。
- [#2396](https://github.com/netease-youdao/LobsterAI/issues/2396) — exec 工具默认 shell wrapper 为 Windows PowerShell 5.1，导致 Linux 命令 / 含特殊字符内联脚本（`node -e` / `pwsh -Command`）静默失败。**无 fix PR**。
- [#2390](https://github.com/netease-youdao/LobsterAI/issues/2390) — 同一根因：exec 硬编码 `powershell.exe`（5.1）而非已安装的 pwsh 7，叠加中文用户名（`M幸福`）路径编码问题。**无 fix PR**。

**🟡 中（面板/数据显示异常）**
- [#2779](https://github.com/netease-youdao/LobsterAI/issues/2779)（今日新开）— 多分身配置下"梦境日记"面板恒空，但工作区 `DREAMS.md` 正常更新。定位为内置 runtime 2026.8.1 缺 `doctor.memory.*` 的 ambient-owner 回退，**上游已修、待跟进升级**。属新版本兼容性回归信号。
- [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) — 多 Agent USER.md 覆盖（见上节），**无 fix PR**。

> 小结：今日合并的安装器修复缓解了 #2395，但 **exec shell 与数据损坏两类 Windows 问题仍无修复**，且均集中于同一用户（woxinsj）报告，指向 Windows 平台兼容层是当前稳定性短板。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 状态 | 纳入下一版本可能性 |
|---|---|---|---|
| 技能重命名 | [#2391](https://github.com/netease-youdao/LobsterAI/issues/2391) | OPEN(stale) | 中——实现成本低，属高频易用性诉求 |
| 定时任务可选择 agent / skill | [#2392](https://github.com/netease-youdao/LobsterAI/issues/2392) | OPEN(stale) | 中高——与多分身主线协同，价值明确 |
| 彻底关闭左下角广告 | [#2342](https://github.com/netease-youdao/LobsterAI/issues/2342) | CLOSED(stale) | 低——涉及商业化策略，非纯技术决策 |
| 技能商用授权说明 | [#2401](https://github.com/netease-youdao/LobsterAI/issues/2401) | OPEN(stale) | 中——需官方文档回应，非代码改动 |

**路线图信号：** 今日 Cowork 方向连续合并 4 条 PR（progress card 展示/刷新、长回合截断、artifact 内联打开、消息朗读），显示**下一阶段重心在 Cowork 交互与 OpenClaw 进度可视化**。相较之下，多 Agent 隔离（#2293）与定时任务编排（#2392）虽呼声高，但暂无对应 PR 动向，存在需求与投入的错配。

---

## 7. 用户反馈摘要

**核心痛点：**
1. **多 Agent 隔离不彻底** — 用户明确表示"没法对不同 agent 建立不同的需求"（#2293），多分身是本产品的差异化卖点，隔离失效会直接动摇使用信心。
2. **Windows 平台兼容性** — 中文用户名、PowerShell 版本、路径转义三类问题叠加，导致命令静默失败与文件损坏（#2390/#2393/#2396），且报错信息不直观，用户排查成本高。
3. **更新流程摩擦** — 技能备份失败即中断更新且提示为英文（#2395），普通用户难以自助恢复。
4. **商业化弹窗干扰** — 更新后新出现的左下角广告无对应开关（#2342），用户希望"以后彻底不弹出"。

**使用场景：** 多 agent 分工（main/Architect 等）、定时任务自动化、技能（pdf/docs/pptx/xlsx）导入与二次开发、本地记忆与梦境日记管理。

**满意度信号：** 技能生态与 Cowork 能力被持续使用并引发进阶提问（商用授权），说明产品核心价值被认可；不满主要集中在**平台稳定性、更新体验与商业化打扰**，而非功能缺失。

---

## 8. 待处理积压

**⚠️ 高优先级：长期 stale 但问题未解（可能被 stale bot 误关）**
- [#2393](https://github.com/netease-youdao/LobsterAI/issues/2393) 数据损坏 —— 已 stale 近两月，严重等级最高，**建议人工复核并升级为 P0**。
- [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) 多 Agent 覆盖 —— 评论最多、影响面广，被 stale 关闭但无修复 PR，**建议重开并标注回归**。
- [#2396](https://github.com/netease-youdao/LobsterAI/issues/2396) / [#2390](https://github.com/netease-youdao/LobsterAI/issues/2390) exec shell 兼容 —— 同一根因，建议合并跟踪。
- [#2395](https://github.com/netease-youdao/LobsterAI/issues/2395) 安装失败 —— 已有修复 PR 合并，建议发版后回访关闭。
- [#2391](https://github.com/netease-youdao/LobsterAI/issues/2391) / [#2392](https://github.com/netease-youdao/LobsterAI/issues/2392) —— 7 月提出至今仅 1 条评论，建议产品侧给出明确取舍答复。

**维护者行动建议：**
1. **尽快发版**，让 #2706/#2782 的安装器修复与 Cowork 改进触达用户；
2. **审查 stale 关闭策略**，避免真实 Bug（#2293/#2393）被自动关闭而失去跟踪；
3. **集中攻坚 Windows 兼容层**（exec shell + 编码 + 加速器字节改写），这是当前最集中的用户挫败来源；
4. 对 #2779 跟进内置 runtime 升级至上游已修复版本，防止新版本兼容性回归扩散。

---

*报告生成时间：2026-09-30 ｜ 数据窗口：过去 24 小时 ｜ 项目：netease-youdao/LobsterAI*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>



根据您提供的 GitHub 数据，以下是针对 **Moltis** 项目在 **2026-09-30** 的动态日报分析：

---

### 1. 今日速览
Moltis 项目在 2026-09-30 的整体活跃度处于极低水平。过去 24 小时内，项目没有代码提交、合并请求（PR）或版本发布，仅产生了一条新的功能请求 Issue。项目目前处于静默期，开发和社区维护节奏暂时放缓，整体健康度稳定，但急需维护者对新生的功能需求进行引导和分流。

### 2. 版本发布
*今日无新版本发布，本部分省略。*

### 3. 项目进展
* **今日合并/关闭 PR：** 0 条。
* **状态评估：** 今日无明显的代码级推进。项目在功能迭代、Bug 修复或架构调整上暂无动态，整体进度今日处于停滞状态，可能正处于内部开发周期的间歇期或等待社区贡献者反馈的阶段。

### 4. 社区热点
今日唯一的社区焦点是新开启的功能请求 Issue：
* **[enhancement] [Feature]: Goal mode or ralph loop** 
  * **作者：** `abda11ah`
  * **链接：** [moltis-org/moltis Issue #1289](https://github.com/moltis-org/moltis/issues/1289)
  * **热度分析：** 该 Issue 目前评论数为 0，点赞数为 0，属于新鲜出炉的请求，尚未形成社区讨论规模。但其主题直指 AI 智能体开发中的核心痛点——**目标模式（Goal mode）或 Ralph 循环（ralph loop）**。这表明用户迫切需要更高级的、能够自主迭代并向目标逼近的运行机制，而非简单的单步指令执行。

### 5. Bug 与稳定性
* **今日报告 Bug：** 无。
* **稳定性评估：** 今日没有新的崩溃、回归问题或严重 Bug 被上报，项目当前版本的运行稳定性没有收到负面反馈。

### 6. 功能请求与路线图信号
* **核心功能请求：** **Goal mode or ralph loop (Issue #1289)**。
* **路线图信号分析：** “Ralph loop” 是当前 AI Agent 领域非常流行的一种自主多步迭代运行模式（智能体自我提问、自我修正直至完成目标）。用户 `abda11ah` 提出将此作为原生特性内置，是一个非常强烈的**路线图信号**。它暗示了 Moltis 的用户群体正试图利用该框架构建更长程、更自主的个人 AI 助手。如果维护者能够响应这一需求，将其作为下一代核心调度引擎的一部分，将极大提升项目的竞争力。目前无关联的 PR 支持，需等待维护者回应。

### 7. 用户反馈摘要
* **直接评论反馈：** 今日无直接的 Issue 评论产生。
* **隐性用户痛点：** 从 Issue #1289 的提交 checklist（用户仔细检索了已有请求，避免重复提交）可以看出，提交者是一位资深且理性的用户。其痛点在于：现有的 Moltis 框架可能缺乏一种开箱即用的、高度自治的“目标驱动循环”模式，导致用户在配置复杂多步任务时需要编写大量重复的编排代码。

### 8. 待处理积压
* **重点待处理项：** **Issue #1289** (`moltis-org/moltis#1289`)。
* **积压提醒：** 虽然该 Issue 创建时间较新（创建于 2026-09-29），但作为目前数据中唯一活跃的 Enhancement 请求，它代表了社区最前沿的诉求。建议维护者尽快进行 Triage（分类评估），判断是否将其纳入未来的开发路线图，并考虑是否需要与提交者进一步沟通具体的技术实现细节。此外，当前 PR 列表为 0，也提示维护者需关注是否有潜在的社区贡献处于停滞状态。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Thinking Process:

1.  **Understand the Goal**: The user wants a daily report (dated 2026-09-30) for the CoPaw project (specifically the QwenPaw repository, based on the data provided, but referred to as CoPaw in the prompt) based on GitHub data. The report needs to be structured, professional, objective, and data-driven.

2.  **Analyze the Input Data**:
    *   **Project**: CoPaw / QwenPaw (agentscope-ai/CoPaw, agentscope-ai/QwenPaw).
    *   **Date**: 2026-09-30 (covering the last 24 hours).
    *   **Issues stats**: 11 updates (7 new/active, 4 closed).
    *   **PR stats**: 36 updates (16 pending merge, 20 merged/closed).
    *   **Releases**: 0.
    *   **Key Issues**:
        *   #7991 [OPEN] [Bug] TaskTracker zombie entries inflate running_task_count (yylxdzz, 3 comments).
        *   #2359 [OPEN] [enhancement] HEARTBEAT_OK / CRON_OK control (TranscendencesLiang, 3 comments).
        *   #7946 [CLOSED] QQ gateway replays events on session resume (yaozy2020, 2 comments).
        *   #6252 [CLOSED] Desktop Tauri zoom doesn't work on Linux (xiutianlin, 2 comments).
        *   #8035 [OPEN] [bug] Transcription settings page cannot configure `transcription_model` (h4rm00n, 1 comment).
        *   #8030 [CLOSED] [invalid] jcyisnb (jichenyi1, 1 comment).
        *   #8022 [OPEN] [Bug] `send_file_to_user` pollutes context with empty assistant messages, leading to 400 errors (djj532, 1 comment).
        *   #8015 [OPEN] [enhancement] Support custom Skill/Plugin market sources (qhxuezhou, 1 comment).
        *   #8013 [OPEN] [bug] [Bug] Large skill download timeout (michaelchen781211, 1 comment).
        *   #7999 [CLOSED] [Feature Request] Desktop UI font size adjustable (hjfb42241-hub, 1 comment).
        *   #8011 [OPEN] [Bug] Telegram HTML formatter mishandles c++/objective-c info strings, ~~~ fences (huiq777, 1 comment).
    *   **Key PRs (top 20 by comments/relevance)**:
        *   #8001 [OPEN] fix(runtime): keep timeout tool results recoverable (axelray-dev).
        *   #8012 [OPEN] [first-time-contributor] fix(telegram): render every fenced code block as code in HTML (huiq777).
        *   #8034 [OPEN] fix(providers): bound inline media per request, not just per file (RerankerGuo).
        *   #8033 [OPEN] fix(tauri): stop reconciling away a live desktop instance's backend (RerankerGuo).
        *   #8032 [OPEN] fix(terminal): support high posix descriptors (zhijianma).
        *   #8031 [OPEN] test: stop leaking unawaited coroutines from scheduling mocks (RerankerGuo).
        *   #8029 [OPEN] feat(browser): let config drop Playwright default launch arguments (RerankerGuo).
        *   #8028 [OPEN] fix(security): flag inline Office COM automation in shell commands (RerankerGuo).
        *   #8027 [OPEN] fix(skills): offload pool skill download to a worker thread (RerankerGuo).
        *   #7903 [OPEN] [wip] feat(community): integrate QwenPaw community and inbox (Osier-Yi).
        *   #8025 [CLOSED] fix(desktop): disable NSIS solid compression (zhaozhuang521).
        *   #8026 [CLOSED] fix(ci): address cross-platform paths, sandbox cleanup, and Windows terminal interrupts (cuiyuebing).
        *   #7931 [OPEN] feat(chat): add durable paginated transcript history (zhijianma).
        *   #8024 [CLOSED] fix(portability): reject invalid qoder timezones (zhijianma).
        *   #8007 [OPEN] [first-time-contributor, Under Review] fix(task_tracker): register run only after the producer task exists (BeiMu-new).
        *   #8020 [OPEN] feat(providers): add cooldown to model fallback candidates (wangfei010313).
        *   #8023 [CLOSED] fix(terminal): support high posix descriptors (zhijianma).
        *   #7773 [CLOSED] [first-time-contributor] fix(telegram): consume the /start platform handshake (j4Uq).
        *   #7765 [CLOSED] [first-time-contributor] fix(telegram): honor command addressing in the mention gate (j4Uq).
        *   #7718 [CLOSED] [first-time-contributor] fix(telegram): render approval-card markdown via HTML parse_mode (j4Uq).

3.  **Drafting the Report Sections**:

    *   **1. 今日速览 (Today's Overview)**:
        *   Summarize the overall status. High activity: 11 Issues updated, 36 PRs updated.
        *   Active development focusing on bug fixes (Telegram channel formatting, TaskTracker zombie entries, Tauri desktop backend reconciliation, terminal high FDs), performance/security improvements (inline media bounding, Office COM automation security, skill download offloading to worker thread), and feature enhancements (community integration, model fallback cooldown, durable chat history).
        *   No new releases today, but significant progress on stability and desktop/Telegram user experience.

    *   **2. 版本发布 (Version Releases)**:
        *   None (无). Omit the section or state clearly that no new releases were made today.

    *   **3. 项目进展 (Project Progress - PRs Merged/Closed)**:
        *   Highlight key closed/merged PRs:
            *   Telegram fixes: #7773 (consume `/start` handshake), #7765 (honor command addressing in mention gate), #7718 (render approval-card markdown via HTML). These significantly improve Telegram bot stability and UI rendering correctness.
            *   Terminal fixes: #8023 (support high posix descriptors) and #8026 (cross-platform paths, sandbox cleanup, Windows terminal interrupts), improving terminal stability on Linux and Windows.
            *   Desktop/CI fixes: #8025 (disable NSIS solid compression for desktop), #8024 (reject invalid qoder timezones).
        *   Assess progress: Project is moving fast, especially on Telegram channel compatibility, cross-platform terminal support, and desktop app packaging. Multiple first-time contributors are actively participating, indicating a healthy developer community growth.

    *   **4. 社区热点 (Community Hotspots - Issues/PRs with most discussion)**:
        *   Analyze which ones have the most comments/reactions or represent critical user pain points.
        *   Issue #7991 (TaskTracker zombie entries inflate running_task_count) - 3 comments. Core issue regarding dashboard metrics vs API status mismatch.
        *   Issue #2359 (HEARTBEAT_OK / CRON_OK control) - 3 comments. Long-standing feature request (created March 2026, updated today) mimicking OpenClaw behavior, highly relevant for agent scheduling and heartbeat control.
        *   PR #8001 (fix(runtime): keep timeout tool results recoverable) - addresses timeout handling, critical for agent workflow resilience.
        *   PR #7903 (feat(community): integrate QwenPaw community and inbox) - major feature integration, linking platform accounts and community feeds.

    *   **5. Bug 与稳定性 (Bug & Stability)**:
        *   List bugs by severity, noting if a fix PR exists.
        *   *High Severity / Core Logic*:
            *   **#8022 [OPEN]**: `send_file_to_user` pollutes context with empty assistant messages, causing persistent 400 errors for models. No fix PR mentioned in the list, but critical for chat continuity. (AI-submitted bug, real-world test).
            *   **#7991 [OPEN]**: TaskTracker zombie entries inflate running_task_count. Disagrees with `/api/chats`. (Fix PR #8007 is open, addressing bookkeeping registration order).
            *   **#8013 [OPEN]**: Large skill download timeout (30s frontend hard limit vs backend copy time). Frontend/backend mismatch.
        *   *Medium Severity / Channel Specific*:
            *   **#8011 [OPEN]**: Telegram HTML formatter mishandles c++/objective-c info strings and nested fences. (Fix PR #8012 is open, addressing the regex).
            *   **#8035 [OPEN]**: Transcription settings page cannot configure or update `transcription_model`, switching providers silently breaks transcription.
            *   **#7946 [CLOSED]**: QQ gateway replays events on session resume (duplicate processing). (Closed, likely fixed).
            *   **#6252 [CLOSED]**: Desktop Tauri zoom doesn't work on Linux. (Closed).
        *   *Security*:
            *   **PR #8028 [OPEN]**: Security fix for inline Office COM automation in shell commands (Windows sandbox bypass risk).

    *   **6. 功能请求与路线图信号 (Feature Requests & Roadmap Signals)**:
        *   **#2359 [OPEN]**: HEARTBEAT_OK / CRON_OK control. Vital for agent heartbeat/cron message filtering. High community interest (long lifecycle).
        *   **#8015 [OPEN]**: Support custom Skill/Plugin market sources for intranet/air-gapped deployments. Crucial for enterprise/private deployments.
        *   **#7999 [CLOSED]**: Desktop UI font size adjustable. Now closed, might be implemented or marked as duplicate/wontfix but requested by visually impaired users.
        *   **PR #8020 [OPEN]**: Model fallback cooldown. Improves efficiency and cost by avoiding failing primary models repeatedly.
        *   **PR #7931 [OPEN]**: Durable paginated transcript history (SQLite). Major architectural improvement for chat history management.

    *   **7. 用户反馈摘要 (User Feedback Summary)**:
        *   Extract real user pain points:
            *   Enterprise/Intranet users need offline/custom marketplace support (#8015).
            *   Desktop users (especially Linux and high-DPI / visually impaired) need basic accessibility like font zoom (#6252, #7999) and fix for multi-instance backend killing (#8033).
            *   Telegram users face rendering issues with advanced markdown (#8011) and group command routing (#7765).
            *   Users face silent failures when configuring transcription models (#8035) and massive skill download timeouts (#8013).
            *   AI agent developers face issues with task tracking consistency (#7991) and tool timeout resilience (#8001).

    *   **8. 待处理积压 (Backlog / Long-running issues)**:
        *   Identify long-term unresponsive or critical issues needing maintainer attention.
        *   **#2359** (Created 2026-03-26): HEARTBEAT_OK feature request. Over 6 months old, still open and active today. Needs architectural decision.
        *   **#6252** (Created 2026-07-19): Linux Tauri zoom issue. Over 2 months old, closed but represents a persistent platform compatibility gap.
        *   **#7903** (Created 2026-09-20): Community integration WIP. Large feature, requires ongoing maintenance and review.
        *   Critical bug **#8022** (Context pollution leading to 400s) and **#8013** (Large skill copy timeout) are new but represent deep architectural issues (async I/O boundary, frontend timeout vs backend tasks) that need robust architectural fixes rather than simple patches.

4.  **Refining Language and Style**:
    *   Maintain an objective, professional, data-driven tone.
    *   Highlight project health: High contribution rate (multiple first-time contributors like huiq777, j4Uq, BeiMu-new, axelray-dev), active maintainer team (RerankerGuo, zhijianma, etc. pushing multiple fixes).
    *   Ensure all links are correctly formatted as provided in the prompt (e.g. `agentscope-ai/QwenPaw Issue #7991` -> standard GitHub URL format if needed, but the prompt provides links like "agentscope-ai/QwenPaw Issue #7991", I will write them out clearly).

Let's double-check the exact links format from prompt:
`链接: agentscope-ai/QwenPaw Issue #7991` -> standard format is `https://github.com/agentscope-ai/QwenPaw/issues/7991` but I can write the text as `agentscope-ai/QwenPaw Issue #7991` or construct standard GitHub URLs. Let's use standard markdown links: `[agentscope-ai/QwenPaw Issue #7991](https://github.com/agentscope-ai/QwenPaw/issues/7991)` to make it professional, or just copy the text if exact URLs aren't fully specified beyond the repo name. The prompt says "每个条目附上 GitHub 链接", so I will write standard GitHub URLs based on the pattern `https://github.com/agentscope-ai/QwenPaw/issues/7991` and `https://github.com/agentscope-ai/QwenPaw/pull/8001`.

Let's do a quick mapping of issue/PR numbers to URLs:
Issues:
- #7991: https://github.com/agentscope-ai/QwenPaw/issues/7991
- #2359: https://github.com/agentscope-ai/QwenPaw/issues/2359
- #7946: https://github.com/agentscope-ai/QwenPaw/issues/7946
- #6252: https://github.com/agentscope-ai/QwenPaw/issues/6252
- #8035: https://github.com/agentscope-ai/QwenPaw/issues/8035
- #8030: https://github.com/agentscope-ai/QwenPaw/issues/8030
- #8022: https://github.com/agentscope-ai/QwenPaw/issues/8022
- #8015: https://github.com/agentscope-ai/QwenPaw/issues/8015
- #8013: https://github.com/agentscope-ai/QwenPaw/issues/8013
- #7999: https://github.com/agentscope-ai/QwenPaw/issues/7999
- #8011: https://github.com/agentscope-ai/QwenPaw/issues/8011

PRs:
- #8001: https://github.com/agentscope-ai/QwenPaw/pull/8001
- #8012: https://github.com/agentscope-ai/QwenPaw/pull/8012
- #8034: https://github.com/agentscope-agentscope-ai/QwenPaw/pull/8034 (just use agentscope-ai/QwenPaw)
- #8033, #8032, #8031, #8029, #8028, #8027, #7903, #8025, #8026, #7931, #8024, #8007, #8020, #8023, #7773, #7765, #7718.

Let's organize the report logically.

**Section 1: 今日速览**
Overall status: CoPaw (QwenPaw) project shows extremely high activity and health. 36 PR updates and 11 Issue updates in the last 24 hours. Core focus is on stabilizing the desktop (Tauri) and terminal backends, hardening Telegram channel rendering, and optimizing agent scheduling logic. No new version released today, but the pipeline is rich with critical fixes and community contributions (including multiple first-time contributors).

**Section 2: 版本发布**
No new releases today (新版本发布：0 个). Omit detailed sub-sections or write "今日无新版本发布，项目处于活跃的开发与修 Bug 阶段。"

**Section 3: 项目进展 (Project Progress)**
Focus on merged/closed PRs (20 merged/closed today):
- Telegram Channel Hardening: Three first-time contributor PRs merged (#7773, #7765, #7718), solving the `/start` handshake, command addressing in mention gates, and approval card markdown rendering. This represents a major step in Telegram channel maturity.
- Terminal & OS Compatibility: PR #8023 and #8026 closed, fixing high POSIX descriptors (FD_SETSIZE limit) and cross-platform path/handling issues (Windows terminal interrupts, sandbox cleanup).
- Desktop & CI packaging: PR #8025 closed (disabling NSIS solid compression) and #8024 (rejecting invalid qoder timezones), improving desktop build quality and timezone robustness.
Summary of progress: Project is maturing rapidly, particularly in cross-platform support (Windows/Linux desktop, terminal, Telegram).

**Section 4: 社区热点 (Community Hotspots)**
- **Issue #2359

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报
**日期：2026-09-30** ｜ 数据来源：github.com/zeroclaw-labs/zeroclaw

---

## 1. 今日速览

- 项目维持**高活跃度**：过去 24 小时 Issues 更新 27 条（新开/活跃 23、关闭 4），PR 更新 50 条（待合并 48、合并/关闭 2），但**无新版本发布**。
- 安全工作仍是主线：Issues 侧出现多条 `p0`/`p1` 级身份与权限隔离缺陷（#11197、#11198、#11126、#11123、#11239），围绕 principal scope、管理员撤权、会话所有权展开。
- PR 侧呈现明显的"**长尾积压**"特征：待合并 PR 高达 48 条，其中大量为 7 月创建、至今仍在迭代的 eval 评测框架堆叠（#9219–#9248 系列）与 Schema V4 破坏性变更（#8754、#11218）。
- 当日有 4 个 Issue 关闭，含一个 `p0` 安全缺陷（#11197）和一个长期存在的上下文截断 bug（#10068），并有对应修复 PR #11260 关闭，说明**关闭效率尚可但合并节奏偏慢**。

> 活跃度评估：**中高**。讨论与提交频繁，但 48:2 的待合并/合并比显示评审与合并通道存在瓶颈，积压风险值得关注。

---

## 2. 版本发布

今日**无新版本发布**，无 Release 记录。

---

## 3. 项目进展

今日合并/关闭的 PR 数量有限（共 2 条），其中公开可见的重要一条为：

- **PR #11260 [CLOSED] `fix(config): stop clamping explicit context budgets to the 32k fallback stub`**
  作者：tidux ｜ 链接：https://github.com/zeroclaw-labs/zeroclaw/pull/11260
  修复了当 provider profile 未声明 `context_window` 时，容量被解析为 32,000 token 的 `UNCONFIGURED_CONTEXT_WINDOW_FALLBACK` 兜底值、并导致显式上下文预算被错误截断的问题。该修复与当日关闭的 Issue #10068 直接对应，**消除了一个影响长上下文用户的核心可用性缺陷**。

**整体推进度评估**：单日合并量偏低（2 条），但方向明确——集中在配置解析正确性。真正的大块功能推进（Schema V4、多模型 provider、eval 框架、Anthropic/Bedrock 自适应思考模型适配）仍全部滞留在待合并队列中，项目"向前迈进的净增量"本日偏小。

---

## 4. 社区热点

由于数据中 PR 的评论数字段缺失（均为 undefined），以下以 Issue 的评论数与标签权重为准：

| 排名 | 条目 | 评论数 | 链接 |
|---|---|---|---|
| 1 | **#8832 [OPEN] Plugin-owned Kanban board for agent work** | 10 | https://github.com/zeroclaw-labs/zeroclaw/issues/8832 |
| 2 | **#10068 [CLOSED] 交互式会话上下文被限制在 32k** | 6 | https://github.com/zeroclaw-labs/zeroclaw/issues/10068 |
| 3 | **#6105 [OPEN] Agent 无法感知其运行的 cron 任务上下文** | 5 | https://github.com/zeroclaw-labs/zeroclaw/issues/6105 |
| 4 | **#11053 [OPEN] RFC: 知识图谱作为一等 Agent 记忆层** | 4 | https://github.com/zeroclaw-labs/zeroclaw/issues/11053 |
| 5 | **#8289 [OPEN] OIDC 里程碑 tracker：规范 principal 与入站认证** | 4 | https://github.com/zeroclaw-labs/zeroclaw/issues/8289 |

**诉求分析：**
- **插件生态化**（#8832）：社区希望 Agent 的工作过程能以插件形式拥有自己的看板视图，标志着用户已不满足于"Agent 能跑"，而要求"Agent 工作可视化、可编排"。
- **记忆层升级**（#11053）：将知识图谱从"工具"提升为"一等记忆"，反映用户对 Agent 长期记忆自主性的强烈期待。
- **企业级身份**（#8289）：OIDC 里程碑已进入 close-out 阶段，核心栈已合并，说明身份认证是当前落地企业场景的关键。

---

## 5. Bug 与稳定性

按严重程度排列（Severity 标注来自 Issue 原文）：

### S0 / p0 —— 数据丢失或安全风险
- **#11198 [OPEN] 委派记忆工具丢失 principal scope** ｜ https://github.com/zeroclaw-labs/zeroclaw/issues/11198
  agentic delegate 构造替换记忆工具时未继承 principal scope，导致子会话可越权访问。
- **#11197 [CLOSED] 会话恢复在管理员撤权后仍还原转发环境** ｜ https://github.com/zeroclaw-labs/zeroclaw/issues/11197
  同会话 resume 可绕过已撤销的 `admin` 授权。**今日已关闭**。
- **#11239 [OPEN] owned session 经 `spawn_subagent` / `execute_pipeline` 触达共享记忆面** ｜ https://github.com/zeroclaw-labs/zeroclaw/issues/11239
- **#11123 [OPEN] SOP 执行接受通配工具选择器而无需 `tools:execute`** ｜ https://github.com/zeroclaw-labs/zeroclaw/issues/11123

### S1 / p1
- **#11126 [OPEN] 排队会话操作保留已撤销管理员所有权绕过** ｜ https://github.com/zeroclaw-labs/zeroclaw/issues/11126
  注：#10412 为部分实现，其范围未覆盖本 issue 全部路径，**不能视为已修复**。
- **#11237 [OPEN] 配置编辑器无法写入声明式 cron 调度** ｜ https://github.com/zeroclaw-labs/zeroclaw/issues/11237
  S1 - 通过 config API 创作定时任务的流程被阻断。

### S2 —— 功能降级
- **#6105 [OPEN] Agent 缺乏其 cron 任务的上下文**（`status:in-progress`）｜ https://github.com/zeroclaw-labs/zeroclaw/issues/6105
- **#11215 [OPEN] OpenCode Go 工具调用失败**（`name` 字段不被端点支持，源自 #7909）｜ https://github.com/zeroclaw-labs/zeroclaw/issues/11215
- **#11257 [OPEN] WhatsApp Web 丢弃入站图片/视频/文档的说明文字** ｜ https://github.com/zeroclaw-labs/zeroclaw/issues/11257
- **#11233 [OPEN] 校验结果在未运行检查的情况下被写入报告**（由 DefuzeX/KUMA 报告）｜ https://github.com/zeroclaw-labs/zeroclaw/issues/11233
- **#11009 [OPEN] Agent 别名重命名未级联权限 profile 选择器** ｜ https://github.com/zeroclaw-labs/zeroclaw/issues/11009

### S3 —— 轻微
- **#11256 [OPEN] `initial_prompt` 有文档但从未发送给 Groq/OpenAI 转写** ｜ https://github.com/zeroclaw-labs/zeroclaw/issues/11256

**Fix PR 情况**：安全类缺陷目前多处于"接受但未修复"状态；`#11197` 已随今日关闭而解决；`#10068` 已由 #11260 修复关闭。其余多条 `p0` 安全缺陷**尚无明确关联的 fix PR**，建议优先处理。

---

## 6. 功能请求与路线图信号

结合已有 PR 判断落地可能性：

| 需求 | Issue | 相关 PR / 信号 | 落地预判 |
|---|---|---|---|
| 插件自带 Kanban 看板 | #8832 | 已脱离 RFC 队列走普通流程；#11081 已交付通用实例级持久状态 | **较可能**，剩余为看板投影与插件收尾 |
| 文档检索 RAG 知识语料 | #11235 | 新 RFC（9/29 提出） | 早期，需架构评审 |
| A2A 协议 crate | #11254 | 依赖 #9106、#7763、#8274 既有成果 | 中期，跨边界重构 |
| 插件更新与失败回滚 | #10995 | 属 #7432 R3 / Phase 2 D3 | 已有明确阶段归属，**较可能** |
| WhatsApp 图片落盘并标记 | #11255 | 参照 Telegram 现有实现 | 小改动，易纳入 |
| ZeroCode 删除/批量清理 Agent | #10244 | 复用受控生命周期删除路径 | 已 in-progress |
| wecom_ws 主动消息与媒体发送 | #7824 | 长期 icebox | 依赖渠道优先级 |
| Schema V4 破坏性裁剪 | #8310 | **PR #8754（XL）+ #11218** 已就绪 | **临近落地**，属破坏性变更 |

**下一版本（v0.9.0）信号**：#11176（RPC 与 HTTP 路由对齐）明确标注为 v0.9.0 core-parity lane 的 P4，说明 v0.9.0 主线聚焦 **RPC/HTTP 一致性 + 核心功能对齐**。

---

## 7. 用户反馈摘要

- **长上下文是刚需**：多位用户反馈 `max_context_tokens = 131072` 被无视、实际被截断在 32k（#10068），直接影响了长任务与代码场景，属高频抱怨点，今日已修复。
- **定时任务体验割裂**：用户设置提醒后，Agent 无法看到自己发出的 cron 消息内容，造成"答非所问"（#6105），反映 cron 与对话上下文未打通。
- **渠道体验参差**：WhatsApp Web 丢弃媒体说明文字、`initial_prompt` 配置形同虚设（#11256/#11257），用户期望各渠道能力对齐（如对齐 Telegram）。
- **安全敏感度提升**：来自安全研究方（DefuzeX/KUMA）的第三方测试报告（#11233）表明项目开始受到外部安全审计关注，既是压力也是成熟度信号。
- **企业身份诉求**：OIDC tracker（#8289）已进入收尾，用户对多租户/principal 隔离的期待正被逐步满足，但新暴露的 scope 缺陷（#11198、#11239）说明隔离边界仍需加固。

---

## 8. 待处理积压

长期未响应或停滞的重要条目，建议维护者关注：

**Issues：**
- **#6105**（创建 2026-04-25，已 5 个月）cron 上下文缺陷仍 in-progress ｜ https://github.com/zeroclaw-labs/zeroclaw/issues/6105
- **#7824**（创建 2026-06-17）wecom_ws 主动消息，长期 `status:icebox` ｜ https://github.com/zeroclaw-labs/zeroclaw/issues/7824
- **#8310**（创建 2026-06-25）Schema V4 破坏性裁剪 ｜ https://github.com/zeroclaw-labs/zeroclaw/issues/8310
- **#8832**（创建 2026-07-08）Kanban 插件，已讨论 10 条 ｜ https://github.com/zeroclaw-labs/zeroclaw/issues/8832

**PRs（大量 7 月创建、堆积超两个月）：**
- **#8754** Schema V4 完整裁剪（XL，`needs-author-action`）｜ https://github.com/zeroclaw-labs/zeroclaw/pull/8754
- **#9248 / #9245 / #9224 / #9223 / #9222 / #9221 / #9220 / #9219** —— IftekharUddin 的 eval 评测框架**整条堆叠链**均停留 `needs-author-action`，最早创建于 2026-07-20 ｜ 示例：https://github.com/zeroclaw-labs/zeroclaw/pull/9221
- **#9320 / #9326 / #9229** 多条 `stale-candidate` / `blocked` / `parking-lot` 状态 ｜ https://github.com/zeroclaw-labs/zeroclaw/pull/9320
- **#9809** 多模型 per-provider 支持（XL，8 月创建）｜ https://github.com/zeroclaw-labs/zeroclaw/pull/9809

**风险提示**：48 条待合并 PR 中相当比例标记 `needs-author-action` 与 `stale-candidate`，且集中在少数贡献者（IftekharUddin、singlerider、JordanTheJet）身上。若评审带宽不提升，功能交付将持续滞后于社区需求，建议对 eval 堆叠链与 Schema V4 做**集中评审批次**以疏解积压。

---

*说明：本报告基于所提供的 GitHub 数据生成；部分 PR 评论数字段缺失，相关排序依据 Issue 评论数与标签权重，不代表完整热度排名。*

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*