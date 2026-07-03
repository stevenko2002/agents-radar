# OpenClaw 生态日报 2026-07-03

> Issues: 180 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-03 08:05 UTC

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

# OpenClaw 项目动态日报 (2026-07-03)

## 1. 今日速览
过去 24 小时内，OpenClaw 社区保持了极高的活跃度，共录得 **180 条 Issues 更新**与 **500 条 PR 更新**。项目当前正处于多端节点（iOS/Android/Desktop）与多渠道（Telegram/Feishu/Matrix 等）深度集成的扩张期，这带来了大量边缘场景的 Bug 反馈与修复需求。整体来看，核心 Agent 运行时的容错能力正在增强，但 v2026.6.11 版本的引入导致了一系列回归问题，维护者与社区正集中火力进行“阵痛期”的修复。架构层面，向 SQLite 存储迁移与本地推理节点自动发现的信号愈发明确。

## 2. 版本发布
**今日无新版本发布。** 
*(注：当前社区讨论与 PR 大量围绕 v2026.6.11 的回归修复展开，预计近期会有 Patch 版本释出。)*

## 3. 项目进展
今日合并/关闭的 PR 主要集中在**核心 Agent 运行时的稳定性与长上下文处理**上，项目向前迈进了关键一步：
- **历史消息去重与上下文优化**：[PR #94837](https://github.com/openclaw/openclaw/pull/94837) (已关闭) 修复了旧版 transcript 中 `tool_use` 块重复导致上下文膨胀和 Token 浪费的问题，提升了长会话的稳定性。
- **流式 API 断连容错**：[PR #95632](https://github.com/openclaw/openclaw/pull/95632) (已关闭) 将 Bedrock Converse Streaming API 的超时断开错误正确归类为瞬态错误，从而触发 Fallback 轮转，避免了大型 Payload 处理时的会话静默死亡。
- **文档与规范对齐**：[PR #99421](https://github.com/openclaw/openclaw/pull/99421) (已关闭) 更新了文档，明确 `timeoutSeconds` 的默认值已调整为 48 小时，消除了用户的配置误解。

## 4. 社区热点
社区讨论高度聚焦于 **Agent 状态同步、多渠道消息路由** 以及 **底层执行环境的安全性**：
- **内部文本泄露至外部渠道**：[Issue #25592](https://github.com/openclaw/openclaw/issues/25592) (33 评论) - Agent 在工具调用间的过渡文本（如错误处理、思考过程）被直接路由到 Slack/iMessage 等渠道，严重破坏 UX。
- **Codex 集成 Turn 停滞**：[Issue #88312](https://github.com/openclaw/openclaw/issues/88312) (19 评论) - v2026.5.27 引入的回归，Codex app-server 在多工具 Agent Turn 中可靠地停滞并报错，阻塞了 ChatGPT Plus 用户的重度工作流。
- **Anthropic 思考签名失效**：[Issue #92201](https://github.com/openclaw/openclaw/issues/92201) (18 评论) - 嵌入式 Runner 在重放时，Anthropic 流式思考块的签名间歇性失效，且恢复包装器因错误文本被泛化而未能触发。
- **安全沙箱与 Rust 重写提议**：[Issue #6731](https://github.com/openclaw/openclaw/issues/6731) (12 评论，已关闭) - 用户提议引入 Safe/Unsafe 模式，或在沙箱中运行 ClawdBot 以防范未定义行为和内存泄漏，甚至建议用 Rust 重写核心以保障安全。

## 5. Bug 与稳定性
今日报告的 Bug 呈现明显的**版本回归**与**多端适配**特征。

**🔴 P0/P1 严重崩溃与回归**
- **Node 26 GC 崩溃**：[Issue #99263](https://github.com/openclaw/openclaw/issues/99263) - 在 Node.js 26 下处理入站图片媒体时，`FileHandle` 被 GC 提前关闭导致 `ERR_INVALID_STATE` 崩溃。*(暂无 Fix PR)*
- **v2026.6.11 回归频发**：
  - [Issue #98416](https://github.com/openclaw/openclaw/issues/98416)：发布包缺失重入锁（reentrancy guard），导致回复会话初始化冲突。*(暂无 Fix PR)*
  - [Issue #98673](https://github.com/openclaw/openclaw/issues/98673)：`sanitizeContentBlocksImages` 错误地将文本工具结果转换为图片块，污染会话历史。*(暂无 Fix PR)*
  - [Issue #98528](https://github.com/openclaw/openclaw/issues/98528)：工具输出在首次调用后变空。*(已关闭/修复)*
- **移动端闪退**：[Issue #99056](https://github.com/openclaw/openclaw/issues/99056) - iOS 节点执行 `contacts.add` 和 `screen.record` 时 100% 闪退。*(暂无 Fix PR)*

**🟡 P2 稳定性与安全隐患**
- **内存泄漏**：[Issue #98938](https://github.com/openclaw/openclaw/issues/98938) - 长期运行的多账号 Matrix 网关出现 JS 堆对象图保留（~4.2 MB/min），导致每日 OOM 重启。*(暂无 Fix PR)*
- **AI 幻觉/安全**：[Issue #99253](https://github.com/openclaw/openclaw/issues/99253) - 助手在回复中伪造了带时间戳的用户输入并自行回答，存在严重的安全与信任隐患。*(暂无 Fix PR)*

## 6. 功能请求与路线图信号
- **本地推理节点自动发现**：[PR #

---

## 横向生态对比

### 今日重點

#### 1. 重要更新

*   **[PicoClaw](https://github.com/sipeed/picoclaw)**：发布 v0.3.1 版本，新增 NearAI Provider 支持并优化 Codex 内部状态管理。影响：丰富了模型接入生态，但官方提示 v2 到 v3 配置迁移存在阻断性缺陷，需用户谨慎升级。
*   **[OpenClaw](https://github.com/openclaw/openclaw)**：修复历史消息去重逻辑与流式 API 断连容错问题。影响：显著提升了长会话的稳定性，避免了大型 Payload 处理时因超时断开导致的会话静默死亡。
*   **[NanoBot](https://github.com/HKUDS/nanobot)**：合并多项核心安全修复（包括 SSRF 检查 DNS 锁定、强制 API 鉴权等），并将 Anthropic 默认模型更新至 `claude-sonnet-4-6`。影响：大幅提升了系统的安全防护能力与最新模型的兼容性。
*   **[Hermes Agent](https://github.com/nousresearch/hermes-agent)**：实现 Desktop GUI 与 CLI/Dashboard 的功能对齐，并优化 MoA（多智能体）架构的推理效率。影响：统一了多端用户体验，降低了多模型合成阶段的 Token 消耗。
*   **[IronClaw](https://github.com/nearai/ironclaw)**：在 Reborn 引擎中引入“脚本优先”策略，并实现 Slack 个人 OAuth 一键授权集成。影响：大幅减少了数据分析任务的工具调用次数，同时降低了用户接入 Slack 的配置门槛。
*   **[Moltis](https://github.com/moltis-org/moltis)**：升级 WhatsApp 底层依赖至 0.6 版本，原生引入 LID（Linked Identity）寻址支持。影响：从根本上适配了 WhatsApp 最新的隐私迁移机制，解决了隐私模式下消息静默丢弃的问题。
*   **[NanoClaw](https://github.com/qwibitai/nanoclaw)**：落地本地 Agent 模板加载器，并为容器增加可配置的共享内存（`--shm-size`）。影响：为 Agent 的一键部署打下基础，同时解决了无头 Chromium 浏览器在大页面下因共享内存不足导致的崩溃问题。

#### 2. 活跃度概览

今日开源生态整体保持极高活跃度，开发重心集中于核心运行时稳定性修复、多端体验对齐以及安全权限加固。其中，OpenClaw、NanoBot 和 Hermes Agent 表现最为活跃，单日共产生数百至上千条 Issue 与 PR 更新，密集处理版本回归、安全漏洞及多 Provider 兼容性问题。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-07-03)

## 1. 今日速览
NanoBot 社区在过去 24 小时内保持了极高的活跃度，共产生 100 条 Issue 更新和 41 条 PR 更新。维护团队集中火力处理了大量积压的安全漏洞、内存/上下文管理缺陷以及 Provider 兼容性问题。虽然今日无新版本发布，但密集的 PR 提交（尤其是多个 P0/P1 级别的安全和核心逻辑修复）表明项目正处于一个重要的稳定性强化和架构打磨阶段，整体代码健康度正在显著提升。

## 2. 项目进展
今日合并/关闭了多个关键 PR，显著提升了系统的安全性、Provider 兼容性和用户体验：
- **安全与权限加固**：合并了多项核心安全修复，包括 SSRF 检查的 DNS 锁定 ([PR #4671](https://github.com/HKUDS/nanobot/pull/4671))、Serve 命令强制 API 鉴权 ([PR #4669](https://github.com/HKUDS/nanobot/pull/4669))、消息工具出站策略强制执行 ([PR #4668](https://github.com/HKUDS/nanobot/pull/4668))，以及防止 Dream 机制篡改用户技能 ([PR #4667](https://github.com/HKUDS/nanobot/pull/4667))。
- **Provider 兼容性**：关闭了修复 Claude Sonnet 5 温度参数报错的 PR ([PR #4685](https://github.com/HKUDS/nanobot/pull/4685))，并将 Anthropic 默认模型更新至 `claude-sonnet-4-6` ([PR #4687](https://github.com/HKUDS/nanobot/pull/4687))。同时新增了 OpenCode 规范 Provider 支持 ([PR #4686](https://github.com/HKUDS/nanobot/pull/4686))。
- **WebUI 与 CLI 体验**：推进了 WebUI 首次运行安全启动器 ([PR #4688](https://github.com/HKUDS/nanobot/pull/4688))，以及可选功能发现与插件系统支持 ([PR #4396](https://github.com/HKUDS/nanobot/pull/4396))。
- **内存与上下文管理**：提交了修复上下文压力下短期记忆丢失的 PR ([PR #4280](https://github.com/HKUDS/nanobot/pull/4280))，以及 Dream 记忆审计和压缩保护的相关修复 ([PR #4673](https://github.com/HKUDS/nanobot/pull/4673), [PR #4664](https://github.com/HKUDS/nanobot/pull/4664))。

## 3. 社区热点
- **多用户/多会话记忆隔离** ([Issue #3744](https://github.com/HK

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-07-03)

## 1. 今日速览
Hermes Agent 社区今日保持极高活跃度，过去 24 小时内共产生 50 条 Issue 更新与 50 条 PR 更新。项目当前的核心焦点集中在**多 Provider 兼容性优化（Ollama、OpenRouter、Vertex 等）**、**长上下文与会话状态管理（Context Compression、Fallback Chain）**以及**桌面端/多端体验对齐**。尽管今日无新版本发布，但大量针对 P1/P2 级别状态机 Bug 的修复 PR 正在密集合并，表明团队正致力于提升核心 Agent 循环的鲁棒性，为下一次大版本迭代夯实基础。

---

## 2. 项目进展
今日有多个重要 PR 被合并或关闭，显著推进了桌面端体验、多智能体架构及多端网关的稳定性：
- **Desktop 体验大升级**：[PR #57441](https://github.com/NousResearch/hermes-agent/pull/57441) 实现了 Desktop GUI 与 CLI/Dashboard 的功能对齐，统一了 Skills Hub、MCP 管理与系统维护入口；[PR #57590](https://github.com/NousResearch/hermes-agent/pull/57590) 进一步重构了 Capabilities 页面，使 MCP 成为一等公民。
- **MoA 架构优化**：[PR #57591](https://github.com/NousResearch/hermes-agent/pull/57591) 引入了 per-preset fanout cadence，允许在 `user_turn` 阶段仅运行一次多模型合成，优化了 Mixture of Agents (MoA) 的推理效率与 Token 消耗。
- **网关与多端修复**：[PR #57577](https://github.com/NousResearch/hermes-agent/pull/57577) 修复了 Telegram 网关中语音回复无法响应 `clarify` 提示的问题；[PR #57587](https://github.com/NousResearch/hermes-agent/pull/57587) 为 Telegram 插件增加了 inline-keyboard 回调处理支持。
- **底层兼容性**：[PR #57585](https://github.com/NousResearch/hermes-agent/pull/57585) 修复了 OpenCode Go 后端因 `/v1` 路径截断导致非 MiniMax 模型 404 的问题。

---

## 3. 社区热点
今日讨论最热烈、点赞最多的议题主要集中在本地模型集成与高级模型的安全防御冲突：
- **Ollama 原生 API 适配**：[Issue #4505](https://github.com/NousResearch/hermes-agent/issues/4505

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-07-03)

**分析师**：AI 智能体与个人 AI 助手领域开源项目分析师  
**分析对象**：[sipeed/picoclaw](https://github.com/sipeed/picoclaw)  

---

### 1. 今日速览
PicoClaw 在 2026-07-03 保持了极高的开发活跃度与迭代节奏。过去 24 小时内，项目共处理了 31 个 Pull Requests（其中 15 个已合并或关闭），并正式发布了 **v0.3.1** 版本。今日的开发重心集中在**底层依赖的安全升级**、**多平台网关（WhatsApp/Matrix）的连接稳定性修复**，以及**解决 v2 到 v3 配置迁移的阻断性 Bug**。整体来看，项目正处于快速扩展生态（新增 Provider 与网关）与夯实长期运行稳定性的关键阶段。

---

### 2. 版本发布
**🚀 新版本：[v0.3.1](https://github.com/sipeed/picoclaw/releases/tag/v0.3.1)**
*   **核心更新**：
    *   引入 NearAI Provider 支持 ([#2917](https://github.com/sipeed/picoclaw/pull/2917))，进一步丰富了模型接入生态。
    *   优化了 Codex 的 store lock 类型断言逻辑 ([#3053](https://github.com/sipeed/picoclaw/pull/3053))，提升了内部状态管理的健壮性。
*   **⚠️ 迁移与注意事项**：
    *   结合今日报告的 Issue [#3206](https://github.com/sipeed/picoclaw/issues/3206)，v2 到 v3 的配置迁移存在字段校验缺陷。**建议用户在升级至 v0.3.1 前备份 `config.json`**，或等待包含 [#3218](https://github.com/sipeed/picoclaw/pull/3218) 修复的下一个补丁版本发布后再进行升级。

---

### 3. 项目进展
今日合并的 PR 极大地提升了项目的依赖健康度与基础功能：
*   **依赖全面焕新**：合并了大量前端与后端的 Dependabot 升级 PR，包括 `eslint` ([#3211](https://github.com/sipeed/picoclaw/pull/3211))、`react-i18next` ([#3212](https://github.com/sipeed/picoclaw/pull/3212))、`shadcn` ([#3214](https://github.com/sipeed/picoclaw/pull/3214))、`typescript-eslint` ([#3215](https://github.com/sipeed/picoclaw/pull/3215))、`@vitejs/plugin-react` ([#3216](https://github.com/sipeed/picoclaw/pull/3216))，以及后端的 `anthropic-sdk-go` ([#3209](https://github.com/sipeed/picoclaw/pull/3209)) 和 `golang.org/x/crypto` ([#3210](https://github.com/sipeed/picoclaw/pull/3210))。这确保了项目技术栈的安全与现代化。
*   **安全与认证收敛**：关闭了部分标记为 `[stale]` 的安全修复 PR，如拒绝跨站 launcher 设置请求 ([#3160](https://github.com/sipeed/picoclaw/pull/3160)) 和 exec 拒绝模式修复 ([#3161](https://github.com/sipeed/picoclaw/pull/3161))，推测维护者可能已在主分支通过其他重构方式解决了这些问题。

---

### 4. 社区热点
尽管部分 PR 评论数据未完全同步，但从 PR 的性质和生命周期可以看出社区的强烈诉求：
*   **多智能体协作需求迫切**：[#2937 Feat/agent collaboration](https://github.com/sipeed/picoclaw/pull/2937) 试图引入一等公民级别的 Agent 协作总线（包含邮箱、隔离会话、权限感知等）。该 PR 虽被标记为 `[stale]

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-07-03)

## 1. 今日速览
NanoClaw 项目在 2026-07-03 保持了高度的开发活跃度，共产生 4 个新 Issue 和 14 个 PR 更新。社区贡献者正积极推进多渠道集成（如 LINE）、Agent 模板化功能以及底层容器和调度逻辑的修复。整体来看，项目正处于功能扩展（多渠道生态、模板化部署）与稳定性打磨（修复 WhatsApp 冲突、定时任务重复）并重的健康演进阶段。

## 2. 项目进展
今日合并/关闭了 2 个重要 PR，推动了核心基础能力的完善：
- **Agent 模板化基础设施落地**：[PR #2890](https://github.com/nanocoai/nanoclaw/pull/2890) (`feat(templates): local template loader...`) 已关闭（合并）。该 PR 实现了本地模板加载器和 `ncl --template` 命令，为后续的设置向导和一键部署 Agent 打下了坚实基础。
- **容器运行性能优化**：[PR #2771](https://github.com/nanocoai/nanoclaw/pull/2771) (`perf(container): configurable --shm-size...`) 已关闭（合并）。为 Agent 容器增加了 `--init` 和可配置的 `--shm-size`（默认 1G），有效解决了无头 Chromium 浏览器在大页面下因共享内存不足导致的崩溃问题。

## 3. 社区热点
- **本地模型 Token 成本优化探讨**：[Issue #2917](https://github.com/nanocoai/nanoclaw/issues/2917) 指出当使用本地模型（如 Gemma4:31B）作为主 Agent 时，无论后端如何，都会发送完整的 MCP 工具 Schema（约 27k tokens），造成严重的上下文浪费。**背后诉求**：反映了社区对本地部署场景下资源效率和成本控制的强烈诉求，亟需针对本地模型优化 Schema 注入策略。
- **WhatsApp 渠道集成冲突**：[Issue #2911](https://github.com/nanocoai/nanoclaw/issues/2911) 和 [Issue #2912](https://github.com/nanocoai/nanoclaw/issues/2912) 集中暴露了 WhatsApp 原生 (Baileys) 与 Cloud 版本在底层注册和 ID 映射上的冲突。由于涉及多通道共存时的消息路由和权限管理，引发了维护者的快速响应，当日即提交了修复 PR。

## 4. Bug 与稳定性
- **[High] WhatsApp 适配器注册冲突**：[Issue #2911](https://github.com/nanocoai/nanoclaw/issues/2911) 报告 WhatsApp Cloud 与原生 WhatsApp 在适配器注册表中使用了相同的 `whatsapp` key，导致安装两者时静默禁用其中一个并路由错误。**状态**：已有修复 PR [PR #2913](https://github.com/nanocoai/nanoclaw/pull/2913) 提交。
- **[Medium] WhatsApp 用户 ID 不一致导致权限断裂**：[Issue #2912](https://github.com/nanocoai/nanoclaw/issues/2912) 报告 Baileys 和 Cloud 路径生成的用户 ID 格式不同（JID vs bare wa_id），导致跨路径的角色和成员权限无法继承。**状态**：暂无直接修复 PR，需关注后续处理。
- **[Medium] 定时任务重复 Fork 问题**：[PR #2915](https://github.com/nanocoai/nanoclaw/pull/2915) 修复了 `handleRecurrence` 在处理具有 cron 表达式的已完成任务时，缺乏去重

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-07-03)

## 1. 今日速览
今日 IronClaw 项目保持了极高的开发活跃度，过去 24 小时内共产生 77 次 Issue 和 PR 更新。项目重心明显向 **Reborn 架构的深化打磨**与 **WebUI 体验优化**倾斜。随着“Bug Bash”活动的收尾，大量前端交互缺陷和 Reborn 后端边缘用例被集中暴露并修复。同时，Slack 个人 OAuth 集成、Onboarding (NUX) 流程以及 Trace Commons 等重量级功能正在密集推进，标志着项目正从核心引擎重构阶段稳步迈向生态集成与商业化体验升级阶段。

## 2. 版本发布
**今日无正式版本发布**，但发版流程正在筹备中。
- **筹备中**: [PR #5311 chore: release](https://github.com/nearai/ironclaw/pull/5311) 处于 OPEN 状态，即将发布包含多个破坏性变更（Breaking Changes）的新版本。
- **⚠️ 破坏性变更预警**: 
  - `ironclaw_common`: 0.4.2 -> 0.5.0 (API 破坏性变更)
  - `ironclaw_skills`: 0.3.0 -> 0.4.0 (API 破坏性变更)
  - `ironclaw`: 0.24.0 -> 0.29.1
- **迁移建议**: 依赖 `ironclaw_common` 和 `ironclaw_skills` 的下游插件或集成方需密切关注该 PR 的合并动态，提前准备 API 适配。

## 3. 项目进展
今日合并/关闭了 17 个 PR，核心进展集中在 Reborn 引擎性能优化与外部服务集成：
- **Reborn 性能优化**: [PR #5574](https://github.com/nearai/ironclaw/pull/5574) (已关闭) 引入了“脚本优先”策略和更小的输出上限，大幅减少了数据分析任务中模型循环内的工具调用次数（从 50-99 次显著降低），提升了执行效率并降低了 Token 消耗。
- **Slack 个人 OAuth 集成**: [PR #5502](https://github.com/nearai/ironclaw/pull/5502) 与 [PR #5501](https://github.com/nearai/ironclaw/pull/5501) (已关闭) 将 Slack 个人扩展从手动粘贴 Token 升级为浏览器一键 OAuth 授权流，并修复了凭证交换时的响应泄漏清理问题，大幅降低了用户接入 Slack 的门槛。
- **MCP 协议兼容性**: [PR #5573](https://github.com/nearai/ironclaw/pull/5573) (已关闭) 修复了 Exa MCP SSE 初始化解析问题，支持了多行 SSE 数据事件的重构，增强了与上游 MCP 服务的兼容性。
- **测试覆盖率**: [PR #5548](https://github.com/nearai/ironclaw/pull/5548) (已关闭) 补充了 Reborn 后端的 turn-event sink 和 attachment read-port 覆盖，进一步夯实了架构稳定性。

## 4. 社区热点
今日社区讨论高度聚焦于 **Routine（自动化任务）的稳定性**与**多租户数据隔离**：
- **[Issue #5522](https://github.com/nearai/ironclaw/issues/5522)** (3 评论): Reborn 环境下读取 Slack DM 失败，导致 `capability_info` 陷入重试死循环。反映了 Reborn 在能力缺失时的降级与重试机制仍需完善。
- **[Issue #5507](https://github.com/nearai/ironclaw/issues/5507)** (1 评论): 失败的 Routine 运行显示“无附加线程”且禁用“打开运行”按钮，直接阻断了开发者的调试路径。
- **[Issue #5460](https://github.com/nearai/ironclaw/issues/5460)** (1 评论): WebUI Workspace 中的 Memory（记忆）对所有用户可见。**诉求分析**: 这是一个严重的隐私与数据隔离缺陷，用户明确要求 Workspace 内的 Agent 记忆必须实现租户/用户级隔离。
- **[Issue #5571](https://github.com/nearai/ironclaw/issues/5571)** (1 评论): Exa 上游 IP 限流导致 Web 搜索失败，且错误级联导致整个 Turn 崩溃。凸显了外部依赖限流时的容错设计不足。

## 5. Bug 与稳定性
今日报告了大量 Bug，按严重程度分类如下：

**P1 / 严重 (Critical)**
- **[Issue #5460](https://github.com/nearai/ironclaw/issues/5460)**: Workspace

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-07-03)

## 1. 今日速览
过去 24 小时内，LobsterAI 项目保持了较高的开发活跃度与迭代节奏。团队共处理了 12 个 Pull Request（其中 9 个已合并/关闭），主要精力集中在 **UI/UX 体验打磨、OpenClaw 引擎底层稳定性修复以及协作 (Cowork) 模块的细节完善**。Issue 方面处理了 1 个历史遗留的 UI 适配问题。整体来看，项目正处于密集优化用户体验、修复边缘场景 Bug 并夯实底层大模型调用稳定性的关键迭代期，项目健康度良好。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日合并与关闭的 PR 推动了项目在多个核心维度的实质性进展：
*   **前端交互与启动体验优化**：合并了 [#2263](https://github.com/netease-youdao/LobsterAI/pull/2263)（优化字体大小与设置页 UI）和 [#2257](https://github.com/netease-youdao/LobsterAI/pull/2257)（将引擎启动屏幕统一为连续的 Splash 动画，消除启动时的割裂感），并优化了引擎失败时的遮罩层 ([#2259](https://github.com/netease-youdao/LobsterAI/pull/2259))，显著提升了应用的视觉连贯性。
*   **OpenClaw 引擎与底层稳定性**：通过 [#2260](https://github.com/netease-youdao/LobsterAI/pull/2260) 在系统提示词中分离了任务工作目录与 Agent 工作空间；通过 [#2258](https://github.com/netease-youdao/LobsterAI/pull/2258) 修复了 DeepSeek 模型在长会话中 Prompt Cache 不稳定的问题，保障了长文本处理的性能与成本。
*   **协作 (Cowork) 与 Agent 功能**：修复了子 Agent 面板的时间戳显示与格式化问题 ([#2261](https://github.com/netease-youdao/LobsterAI/pull/2261))，并清理了目标菜单中冗余的提示文本 ([#2262](https://github.com/netease-youdao/LobsterAI/pull/2262))。
*   **设置与模型管理**：修复了删除当前活跃的自定义模型导致设置页白屏的严重崩溃问题 ([#2252](https://github.com/netease-youdao/LobsterAI/pull/2252))。

## 4. 社区热点
今日社区讨论主要集中在对**产品细节体验**的关注上。虽然整体评论数平稳，但唯一更新的 Issue [#1422](https://github.com/netease-youdao/LobsterAI/issues/1422) 反映了社区对 UI 适配细节的敏锐度。该 Issue 指出在 MCP 自定义页面中，当服务名称较长时，删除弹框的 UI 展示不友好。虽然该 Issue 已被标记为 stale 并关闭，但体现了用户期望在复杂配置场景下依然能获得优雅、一致的视觉体验的诉求。

## 5. Bug 与稳定性
今日修复及正在修复的 Bug 涵盖了从前端崩溃到底层缓存的多个层面：
*   **[严重/已修复] 设置页白屏崩溃**：[#2252](https://github.com/netease-youdao/LobsterAI/pull/2252) 修复了在设置中删除当前正在使用的自定义 Provider 时，由于异步操作顺序问题导致整个视图白屏崩溃的严重 Bug。
*   **[中等/已修复] 定时任务通知失效**：[#2255](https://github.com/netease-youdao/LobsterAI/pull/2255) 修复了将定时任务通知渠道切换为“不通知”后保存无效的问题（根因为 OpenClaw gateway 的 patch-merge 逻辑无法清除已有属性）。
*   **[中等/修复中] 综合修复**：[#2256](https://github.com/netease-youdao/LobsterAI/pull/2256) (待合并) 进一步打包修复了上述定时任务通知问题以及删除活跃模型时的白屏问题。
*   **[低/已修复] 数据与显示异常**：[#2261](https://github.com/netease-youdao/LobsterAI/pull/2261) 修复了子 Agent 消息时间戳别名错误及无效时间戳格式化导致的异常。

## 6. 功能请求与路线图信号
从当前待合并 (OPEN) 的 PR 中，可以窥见项目近期的功能演进方向：
*   **Agent 配置效率提升**：[#1353](https://github.com/netease-youdao/LobsterAI/pull/1353) 提议在 Agent 技能选择器中新增“全选”和“清除”功能，并增加已选数量统计。这表明项目正致力于降低多技能 Agent 的配置门槛。
*   **多 IM 平台集成健壮性**：[#1464](https://github.com/netease-youdao/LobsterAI/pull/1464) 为钉钉、飞书、QQ 的多实例功能增加了实例名称和凭证 ID 的重复校验。这释放出项目正在强化企业级 IM 集成能力、防止消息冲突的路线图信号。

## 7. 用户反馈摘要
通过 Issue 和 PR 的摘要，提炼出以下真实用户痛点与使用场景：
*   **批量操作缺失**：在配置 Agent 技能时，用户选择了多个技能后若想重置，只能手动逐一取消，操作繁琐（来源：[#1353](https://github.com/netease-youdao/LobsterAI/pull/1353)）。
*   **多实例管理混淆**：在接入 IM 平台时，系统允许创建同名实例或重复添加同一机器人，导致用户在多实例场景下难以区分，甚至引发消息重复处理（来源：[#1464](https://github.com/netease-youdao/LobsterAI/pull/1464)）。
*   **长文本 UI 适配不佳**：在 MCP 等高级配置中，用户自定义的较长服务名称会导致弹框 UI 布局错乱或展示不友好（来源：[#1422](https://github.com/netease-youdao/LobsterAI/issues/1422)）。

## 8. 待处理积压
以下 PR 已开放较长时间且被标记为 `[stale]`，建议维护者尽快关注，以免挫伤社区贡献者的积极性：
*   **[#1353](https://github.com/netease-youdao/LobsterAI/pull/1353)** `[stale]` feat(agent): Agent 技能选择器新增全选和清除功能。自 2026-04-02 创建以来已近 3 个月，该功能对提升用户体验有明显帮助，建议优先 Review。
*   **[#1464](https://github.com/netease-youdao/LobsterAI/pull/1464)** `[stale]` fix(im): add duplicate validation for instance name and credential ID。自 2026-04-04 创建，该修复对多 IM 实例的稳定性至关重要，建议尽快合并或给予反馈。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-07-03)

## 1. 今日速览
2026年7月3日，Moltis 项目保持了平稳且聚焦的日常维护节奏。过去24小时内项目未产生新的 Issue 更新与版本发布，核心开发活动集中在 3 个 Pull Request 上。整体活跃度处于常规迭代水平，开发资源主要倾斜于 WhatsApp 网关的底层协议升级（适配 LID 寻址机制）以及 AI 模型提供商生态的扩展。项目健康度良好，底层技术演进与上层功能扩展正在有序并行。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日项目主要推进了通信网关的底层兼容性与 AI 路由能力，整体向前迈进了实质性的一步：
*   **WhatsApp 底层协议现代化**：PR [#1144](https://github.com/moltis-org/moltis/pull/1144) 将 `whatsapp-rust` 依赖从 0.5 升级至 0.6，原生引入 LID（Linked Identity）寻址支持。此举旨在从根本上适配 WhatsApp 最新的设备注册与隐私迁移机制，确保网关在未来协议变更中的长期兼容性。
*   **AI 模型路由生态扩展**：PR [#1143](https://github.com/moltis-org/moltis/pull/1143) 新增了对 Requesty 的支持，通过表驱动的方式将其作为 OpenAI 兼容的 LLM 路由提供商接入，进一步丰富了项目的模型调度与代理能力。
*   **历史修复方案演进**：PR [#1116](https://github.com/moltis-org/moltis/pull/1116)（已关闭）此前尝试在应用层通过 PN JID 重写来修复隐私模式下的消息投递问题。结合 #1144 的底层升级来看，维护者可能选择了更彻底的底层依赖升级方案来替代或整合该修复，体现了项目架构优化的思路。

## 4. 社区热点
今日社区讨论相对平静，无高热度 Issue 或 PR。开发者主要在进行代码贡献与底层逻辑重构，社区互动和辩论较少。
*   *注：当前 PR 和 Issue 的评论与反应数据均为 0，表明今日暂无引发社区广泛讨论的争议性或焦点性话题。*

## 5. Bug 与稳定性
*   **[中高] WhatsApp 隐私模式消息静默丢弃**：在启用隐私保护的发送者的 `@lid` 聊天中，回复消息会被静默丢弃（网关生成回复但用户无法收到，且无送达回执）。
    *   **状态**：该问题已通过 PR [#1116](https://github.com/moltis-org/moltis/pull/1116) 提出修复（目前已关闭，推测其修复逻辑已被整合或升级至 PR [#1144](https://github.com/moltis-org/moltis/pull/1144) 的底层依赖更新中）。此 Bug 的解决将显著提升特定隐私设置下用户的消息触达率。

## 6. 功能请求与路线图信号
*   **接入 Requesty LLM 路由器**：PR [#1143](https://github.com/moltis-org/moltis/pull/1143) 明确响应了用户对更多 OpenAI 兼容路由器的需求。Requesty 的加入表明 Moltis 正在积极构建更广泛的 LLM 代理网关生态，降低用户接入和切换多模型的成本。该 PR 逻辑清晰且模仿了现有的 `openrouter` 实现，预计将被顺利纳入近期的版本中。

## 7. 用户反馈摘要
今日无新增的 Issue 评论数据。但从已关闭的 PR [#1116](https://github.com/moltis-org/moltis/pull/1116) 的描述中可以推断出用户的真实痛点：
*   **痛点**：部分注重隐私的用户（使用 `@lid` 聊天）发现 AI 助手的回复“凭空消失”，导致交互中断。
*   **场景**：用户在 Web UI 能看到 Agent 正常生成了回复，但 WhatsApp 客户端始终收不到消息，且没有错误提示（静默失败）。这种“黑盒”式的失败严重影响了用户体验和对系统可靠性的信任。

## 8. 待处理积压
当前无长期未响应的重大积压 Issue 或 PR。
*   **维护者关注建议**：建议核心维护者尽快 Review 并推进以下两个处于 OPEN 状态的 PR，以闭环近期的开发工作：
    1.  **PR [#1144](https://github.com/moltis-org/moltis/pull/1144)**：涉及底层核心依赖升级，需重点评估 `whatsapp-rust` 0.6 版本的兼容性及 `[patch.crates-io]` 的临时 pin 策略。
    2.  **PR [#1143](https://github.com/moltis-org/moltis/pull/1143)**：常规功能扩展，建议尽快合并以丰富下一版本的 Provider 列表。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

⚠️ 摘要生成失败。

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*