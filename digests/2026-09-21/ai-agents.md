# OpenClaw 生态日报 2026-09-21

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-20 22:15 UTC

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



# OpenClaw 项目动态日报 — 2026-09-21

---

## 1. 今日速览

OpenClaw 项目在 2026-09-21 呈现**极高活跃度但隐忧显著**的态势。过去 24 小时内，Issues 与 PR 各新增/更新 500 条（活跃 308 / 关闭 192；待合并 294 / 已合并或关闭 206），但**无新版本发布**。社区反馈集中在 2026.9.4 → 2026.9.5 升级路径上的严重阻塞问题（更新死锁、doctor 失败、Gateway 不可服务），同时暴露出多项长期未修复的稳定性缺陷（SQLite WAL 膨胀、内存泄漏、僵尸子进程）。项目当前处于**高压力迭代期**：修复 PR 持续涌入，但发布节奏与质量控制之间的张力正在加剧。

---

## 2. 版本发布

**无新版本发布。**

最近一次发布为 2026.9.5，但社区反馈该版本在升级路径上存在系统性缺陷（详见第 5 节）。维护者当前优先级应为修复升级阻塞而非推出新版本。

---

## 3. 项目进展

今日合并/关闭的 PR 中，以下为关键推进：

| PR | 标题 | 方向 |
|---|---|---|
| [#153962](https://github.com/openclaw/openclaw/pull/153962) | CI: 仅产品类 PR 延迟维护者工具链 | CI 效率 |
| [#147440](https://github.com/openclaw/openclaw/pull/147440) | 修复配置写入时的引用意图与文件归属 | 配置稳定性 |
| [#143033](https://github.com/openclaw/openclaw/pull/143033) | UI：区分已知零成本与缺失定价 | 可用性 |
| [#136158](https://github.com/openclaw/openclaw/pull/136158) | CLI：拒绝未知代理查询预设 | CLI 健壮性 |
| [#153987](https://github.com/openclaw/openclaw/pull/153987) | 访客权限：授权前校验 Gateway 权限 | 安全 |
| [#152181](https://github.com/openclaw/openclaw/pull/152181) | 重构：共享外部 Harness 会话与尝试机制 | 架构 |
| [#153683](https://github.com/openclaw/openclaw/pull/153683) | 重构：压缩 Agent 存储与全文索引维护 | 性能 |
| [#153513](https://github.com/openclaw/openclaw/pull/153513) | 修复：委派任务在父回复后保持可见 | 任务追踪 |
| [#153984](https://github.com/openclaw/openclaw/pull/153984) | 修复：通配符 Gateway 的本地健康检查超时 | 可靠性 |
| [#154119](https://github.com/openclaw/openclaw/pull/154119) | 修复：Gateway 忙碌时保持音频流 | 体验 |
| [#153830](https://github.com/openclaw/openclaw/pull/153830) | CUA 驱动更新至 0.28.2（Linux 键位修复） | 兼容性 |
| [#153803](https://github.com/openclaw/openclaw/pull/153803) | 特性： oversized turn 上下文分类处理 | 上下文管理 |
| [#153980](https://github.com/openclaw/openclaw/pull/153980) | 修复：任务完成时更新导致从任务树消失 | 任务追踪 |
| [#153978](https://github.com/openclaw/openclaw/pull/153978) | 特性：新增会话级操作员访问控制 | 安全 |
| [#153975](https://github.com/openclaw/openclaw/pull/153975) | 修复：Labs 设置无需重启 Gateway | 可用性 |
| [#153974](https://github.com/openclaw/openclaw/pull/153974) | UI：使 Inbox 中的消息恢复可操作 | 可用性 |
| [#151175](https://github.com/openclaw/openclaw/pull/151175) | 重构：将插件 Blob 数据库操作移出调用线程 | 性能 |
| [#153910](https://github.com/openclaw/openclaw/pull/153910) | 修复：重连后恢复未确认的目标控制 | 可靠性 |

**整体评估**：项目在架构优化（Agent 存储压缩、外部 Harness 共享）、安全加固（访客权限、会话级操作员访问）、CI 效率与体验修复（语音流、Labs 热更新、Inbox 恢复）方面持续前进。但**核心稳定性问题仍严重积压**，修复速度跟不上报告速度。

---

## 4. 社区热点

以下为今日评论数最多、互动最活跃的 Issues：

### 🔴 P0 级更新阻塞（评论数集中）

| Issue | 标题 | 评论 | 👍 |
|---|---|---|---|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | Agent SQLite WAL 膨胀至 1.4–2.8 GB | 34 | 0 |
| [#152759](https://github.com/openclaw/openclaw/issues/152759) | 2026.9.4→9.5 更新失败（doctor-failed） | 20 | 0 |
| [#149538](https://github.com/openclaw/openclaw/issues/149538) | Gateway ready 后无服务（632 Agent 集群） | 20 | 0 |
| [#153257](https://github.com/openclaw/openclaw/issues/153257) | 2026.9.5 将稳定环境变为 8 小时故障恢复 | 13 | 0 |
| [#153704](https://github.com/openclaw/openclaw/issues/153704) | 2026.9.5 doctor 在 ~299s 死亡 | 12 | 0 |
| [#152884](https://github.com/openclaw/openclaw/issues/152884) | 更新死锁 | 9 | 0 |
| [#152981](https://github.com/openclaw/openclaw/issues/152981) | Gateway 启动挂起 ~17 分钟 | 9 | 0 |
| [#146887](https://github.com/openclaw/openclaw/issues/146887) | 2026.9.3→9.4 更新四阶段失败 | 9 | 0 |
| [#153882](https://github.com/openclaw/openclaw/issues/153882) | 更新死

---

## 横向生态对比



以下是基于各项目 2026-09-21 动态数据生成的「今日重点」摘要：

---

### 1. 重要更新

*   **LobsterAI 发布 v2026.9.20 版本**
    *   **内容**：引入了子智能体会话可见性、浏览器 Passkey/WebAuthn 支持及定时任务改进；同时移除了后台任务功能（属于破坏性变更）。
    *   **影响**：标志着项目在现代身份认证和多智能体协同可追溯性上迈出重要一步，但需要旧版后台任务功能的用户进行配置迁移。
    *   **链接**：[LobsterAI](https://github.com/netease-youdao/LobsterAI)

*   **CoPaw (QwenPaw) 发布 v2.2.2-beta.3 测试版**
    *   **内容**：恢复了 assistant 响应操作按钮，修复了 E2E 测试选择器失效；合并了 pet 审批 actor 传递（#7904）、DeepSeek 拒绝 `input_audio` 导致会话永久中断（#7887）等多个关键 Bug 修复。
    *   **影响**：提升了测试版的交互稳定性和多模型兼容性，但核心的上下文溢出（#7853）和会话丢失（#7724）问题仍待解决。
    *   **链接**：[CoPaw](https://github.com/agentscope-ai/QwenPaw)

*   **ZeroClaw 关闭并接受 6 项重大 RFC，启动 3 个实施追踪器**
    *   **内容**：项目就运行时会话所有权（#9487）、统一文件附件架构（#9488）、核心精简策略（#6165）、桌面 Computer-Use（#6909）、可组合 WASM 插件运行时（#10076）及仅追加会话事件历史（#10526）等 6 项核心设计达成共识，并立即创建了统一文件 intake、WASM Provider、桌面 Computer-Use 的实施追踪器。
    *   **影响**：标志着 ZeroClaw v0.9.0 路线图的设计蓝图阶段基本完成，进入实质性架构落地阶段。
    *   **链接**：[ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

*   **NanoBot 完成 WebUI 事件协议迁移与核心 Agent 执行逻辑重构**
    *   **内容**：合并了 WebUI 事件协议迁移 PR（#

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



根据您提供的 GitHub 数据，以下是为您生成的 **NanoBot 项目 2026-09-21 动态日报**。报告将客观呈现该项目的开发活跃度、社区参与度、架构演进及当前面临的挑战。

---

# NanoBot 项目动态日报 (2026-09-21)

## 1. 今日速览
NanoBot 项目在过去 24 小时内呈现出**极高的开发活跃度与健康的迭代状态**。项目共处理了 56 个 PR（19 个待合并，37 个已合并/关闭）和 4 个 Issues（3 个活跃，1 个已关闭），展现了高效的 DevOps 流程。今日的核心开发重心集中在 **WebUI 的用户体验优化与架构精简**（如移除冗余消息投影、新增 MCP 工具包）、**核心 Agent 运行逻辑重构**（子代理私有会话执行、API 会话隔离）以及**多提供商与通道的稳定性增强**（超时 fallback、Discord/Email 通道修复）。虽然今日无新版本发布，但代码库正在经历重要的架构升级。

## 2. 版本发布
*   **最新版本**：无（今日无新版本发布）。
*   **说明**：项目目前处于密集的预发布或开发分支迭代期（许多 PR 标有 `[conflict]` 标签，表明正在并行进行可能冲突的功能开发，如 `nanobot update` 自更新流程、JEV 安全防护等）。

## 3. 项目进展（今日合并/关闭的重要 PR）
今日有大量关键 PR 被合并或关闭，推动了项目在易用性、多通道支持和代码健康度方面的显著提升：

*   **WebUI 体验与架构升级**：
    *   **#5830 (已关闭)**：新增 **Baizhi Agent Toolkit MCP 预设**，简化了 WebUI 中 MCP 配置的复杂度。
    *   **#5836 (已关闭)**：优化 OAuth 重新认证流程，区分临时网络失败与真正的授权失效，提升用户连接体验。
    *   **#5831 (开放)**：减少已完成 turn 的 UI 视觉噪点，通过悬停/聚焦上下文控制，提升长对话界面的整洁度。
    *   **#5823 (已关闭)**：**完成 WebUI 事件协议迁移**，移除了遗留的 `replay_transcript_to_ui_messages` 投影路径，降低了前端与 Python 运行时的耦合度。
*   **核心架构与安全重构**：
    *   **#5811 (开放)**：重构 Agent 执行逻辑，使子代理（Subagents）通过**私有内存子会话**执行，去除了单独的子代理运行路径，增强了上下文压缩的一致性。
    *   **#5825 (开放)**：引入可复用的 **JEV (OpenRouter Decisions) 客户端**，为后续的 shell 保护和心跳逻辑提供策略决策基础。
*   **多通道与提供商支持**：
    *   **#5832 (已关闭)**：新增 **Unifically** 作为内置 LLM 提供商（走 OpenAI 兼容路径）。
    *   **#5609 (开放)**：为 Email 通道新增 **Microsoft 委托 OAuth**，应对 Office365/Outlook 即将强制推行的 OAuth2 迁移。
    *   **#5807 (开放)**：修复 Discord 停止运行时的 reaction 状态清理问题。

## 4. 社区热点
今日社区讨论和贡献主要集中在以下关键 Issue 和 PR 上，反映了开发者和终端用户的核心关注点：

*   **#5524 [Feature] WebUI 会话结束通知铃声**：这是一个标注为 `good first issue` 的高热度功能请求。用户痛点非常明确：在执行长任务时，缺乏 audible 提示，用户必须手动刷新或持续盯着屏幕。
*   **#5509 [Feature] Session search performance with FTS5 index**：针对百级会话规模下的搜索性能瓶颈，社区强烈建议引入 SQLite FTS5 异步索引，这代表了产品向企业级或重度用户演进的性能需求。
*   **#5838 [Fix] route each session_id to its own chat**：高优先级 API 缺陷。此前所有 API 请求无论带什么 `session_id` 都默认跑在 `default` 会话下，导致多会话隔离失效。此 PR 的提出对 API 稳定性至关重要。

## 5. Bug 与稳定性
项目今日暴露并修复/处理了若干关键 Bug，按严重程度排列如下：

*   **严重 (P1) - 上下文压缩触发失效**：
    *   **#5403 (修复中)**：本地 `tiktoken` 估算严重低估现代模型的实际 prompt tokens（低 30-50%），导致配置的上下文窗口即使爆满也无法触发 consolidation（压缩）。**修复方案**：使用 API 实际报告的 token 数来触发压缩。
*   **中等 (P2) - 数据丢失与通道状态残留**：
    *   **#5808 (已关闭)**：WebUI `/stop` 取消 turn 后，内存中的 follow-up 被清除，但持久化恢复日志中仍有记录，导致网关重启后被重新播放。现已通过状态清理修复。
    *   **#5605 (修复中)**：Email 通道在 IMAP 过滤阶段就将消息标记为 `\Seen`，导致被过滤器拦截（如 SPF/DKIM 失败）的垃圾/自 sent 消息也被误标记已读，存在用户侧视觉残留风险。
*   **中等 (P2) - 流式传输与超时容错**：
    *   **#5833 / #5834 (修复中)**：SSE 响应消费者

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>



好的，这是根据您提供的 GitHub 数据生成的 Hermes Agent 项目动态日报。

---

### **Hermes Agent 项目动态日报**
**日期：** 2026-09-21
**项目：** NousResearch/hermes-agent

---

#### **1. 今日速览**
Hermes Agent 项目在过去24小时内呈现出**极高的开发活跃度**。尽管没有新版本发布，但社区和维护者互动频繁，共处理了50个Issue和50个Pull Request。核心维护者 `teknium1` 提交了大量高质量的修复PR，覆盖了认证、桌面端体验、模型管理等多个关键模块，表明项目正处于一个积极的 bug 修复和功能强化周期。社区关注点集中在集成阻塞、功能请求和关键 bug 的解决上。

#### **2. 版本发布**
*   **无新版本发布。**

#### **3. 项目进展**
今日的 PR 活动展示了项目在多个层面的稳健推进，主要由核心维护者 `teknium1` 主导，集中在以下领域：

*   **认证与安全修复：**
    *   **PR #117655：** 修复了用户 provider 插件的别名和显示名称在认证注册表中的优先级问题，确保 `$HERMES_HOME` 下的插件行为符合预期。
    *   **PR #117594：** 改进了 PKCE 插件登录流程，将失效的刷新令牌标记为“死亡”状态，并规范了别名登录凭证的存储位置。
    *   **PR #110951：** 增强了 agent 的容错能力，在回退到备用 provider 前，强制要求其必须具备有效的认证凭据，避免陷入无尽的 401 错误循环。

*   **桌面端体验优化：**
    *   **PR #117658 & #117664：** 修复了桌面端右侧面板和时间线跳转后的聊天预览和编辑功能，提升了交互一致性。
    *   **PR #117659：** 解决了远程更新桌面端时可能错误重启本地网关的问题。
    *   **PR #117661：** 优化了链接标题解析器，避免在渲染需要登录的网页时触发操作系统级的 passkey 对话框。

*   **核心功能与性能：**
    *   **PR #117606：** 重构了代理的超时机制，从限制总运行时长改为限制无活动时间，并在超时报告中提供更详细的信息。
    *   **PR #117566：** 修正了模型目录的验证逻辑，使 provider 自己的模型列表具有最高优先级。
    *   **PR #117656：** 改进了本地运行时管理，根据显存动态调整模型驻留上限，提升性能。

**整体评估：** 项目整体向前迈进显著，维护者对关键模块进行了精细化打磨，特别注重安全性、稳定性和用户体验的细节。

#### **4. 社区热点**
今日讨论最活跃的 Issue 集中在两个核心诉求上：

1.  **自动化集成阻塞（#88584， 124条评论）：**
    *   **链接：** [NousResearch/hermes-agent Issue #88584](https://github.com/NousResearch/hermes-agent/issues/88584)
    *   **分析：** 这是目前社区最关注的问题。自动化的 Nous 到 Enterkey 的合并工作因 `cron/jobs.py` 文件中的冲突而被阻塞。这反映了社区对工作流自动化和 releases 管理流程的强烈需求，以及对集成稳定性的高度关注。

2.  **功能请求：Claude 订阅用户的支持（#25267， 57👍， 20条评论）：**
    *   **链接：** [NousResearch/hermes-agent Issue #25267](https://github.com/NousResearch/hermes-agent/issues/25267)
    *   **分析：** 这是一个高价值的功能请求，旨在为使用 Claude 订阅的用户提供无缝体验，避免他们为同一服务支付两次费用（订阅费 + API 调用费）。这表明用户期望 Hermes 能更灵活地适应不同的商业模型和认证方式。

#### **5. Bug 与稳定性**
今日报告了多个 bug，按严重程度排列如下：

*   **严重 (P1)：**
    *   **#117296：** 一个关键的 agent bug，导致会话标题生成任务被当作普通聊天记录回放给模型，使对话偏离正轨。**（已关闭，疑似已修复）**。

*   **高 (P2)：**
    *   **#117472：** Bot Mode 中的一个严重逻辑错误，Stop 功能会永久吞下触发它的消息，且无法关闭该功能。**（无关联修复 PR）**。
    *   **#105535：** 压缩对话后，成本计算冻结，且后续消费不被记录。**（无关联修复 PR）**。
    *   **#116376：** Windows 平台桌面端关闭窗口后进程无法退出。**（已关闭）**。

*   **中 (P3)：**
    *   **#78007：** A2A 插件存在客户端与服务端超时设置不匹配的长期问题，导致长时间任务失败。**（无关联修复 PR，需关注）**。
    *   **#90451 & #85879：** 插件安装器错误地拒绝支持 `manifest_version 2` 的插件。**（均已关闭）**。
    *   **#117087：** `mcp` extra 依赖的 `httpx2` 版本存在安全风险。**（已关闭）**。

#### **6. 功能请求与路线图信号**
*   **强烈信号：**
    *   **Claude 订阅支持（#25267）：** 如前所述，这是一个普遍且合理的诉求，很可能被纳入未来路线图。
    *   **本地货币成本显示（#47991）：** 用户希望 `/usage` 命令和状态栏能显示非美元货币的成本，这关系到产品的国际化可用性。
    *   **Bot Mode 体验提升（#117520）：** 用户反馈 Bot Mode 的对话感觉像“会话”而非“聊天”，希望增加更轻量的社交元素。
*   **可能纳入下一版本：**
    *   上述功能请求若获得社区广泛支持，可能会进入开发队列。此外，今日大量关于认证、安全、桌面端稳定性的修复 PR 明确定义了下一版本的重点将是一个更稳定、更安全的版本。

#### **7. 用户反馈摘要**
从 Issue 中提炼出以下真实用户痛点：

*   **痛点：** 自动化工作流（如 CI/CD 发布）因代码合并冲突而脆弱。用户强烈需要稳定、自动化的集成流程。
*   **痛点：** 特定平台（如 Windows）的桌面端应用存在进程管理、代理设置兼容性等基础性稳定问题。
*   **痛点：** 认证流程复杂且容易出错，例如 Gemini 密钥的错误路由、插件安装的版本不匹配等，影响了开发和使用体验。
*   **满意点：** 维护者对 bug 报告的响应迅速，特别是对一些 P1/P2 级问题的关闭，表明项目有良好的问题处理机制。

#### **8. 待处理积压**
以下问题需要维护者特别关注：

*   **#117472 (P2)：** Bot Mode 的 Stop 功能存在严重缺陷且无法禁用，这是一个影响核心功能的阻塞性问题，尚无修复 PR。
*   **#105535 (P2)：** 成本计算在会话压缩后失效，直接影响用户对资源消耗的监控，尚无修复 PR。
*   **#78007 (P3)：** A2A 插件的超时问题是一个长期存在的问题，影响多机部署场景，尚无明确的修复计划。
*   **#25267 (Feature)：** 高优先级功能请求，虽未阻塞当前开发，但长期悬而未决可能影响部分用户群体。

---
**报告生成说明：** 本报告基于提供的数据快照生成，所有链接和内容均直接引用自 GitHub。分析旨在客观呈现项目状态，不包含外部观点。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



根据您提供的 GitHub 数据，以下是 PicoClaw 项目于 2026-09-21 的动态日报：

---

### 📊 今日速览
PicoClaw 项目在过去 24 小时内展现出中等活跃度，开发重心聚焦于**稳定性修复**与**战略路线图规划**。项目共产生 6 条 Issue 更新（4 条活跃，2 条关闭）和 5 条 PR 更新（3 条待合并，2 条关闭），暂无新版本发布。整体状态健康，但关键通道（如钉钉）的崩溃问题出现回归迹象，需维护者关注。

---

### 🚀 版本发布
*无新版本发布。*

---

### 🛠️ 项目进展
近期的 PR 动向显示项目正从功能修补向架构规划过渡：
- **战略规划落地**：PR #3383（v0.11.0 冲刺计划）已关闭，为后续的 agentic web3、模块信任及 ACP/Mesh 深度开发确立了设计蓝图。
- **开发体验优化**：PR #3367（添加 Pilot MCP 设置示例）已关闭，降低了开发者的配置门槛。
- **待合并的修复与功能**：
  - **PR #3354**：增加 IRCv3 `draft/multiline` 收入支持，解决长消息碎片化问题。
  - **PR #3353**：限制工具反馈动画生命周期，防止通道消息无限编辑卡死。
  - **PR #3378**：修复 OAuth 刷新 Token 时作用域硬编码的问题，提升认证灵活性。

---

### 🔥 社区热点
以下 Issue 引发了最广泛的社区讨论：
- **#3287 [IRC长消息支持]**（13条评论）：社区对 IRC 协议下长消息的合并显示有高度讨论，反映了用户对跨平台消息一致性的强需求。
- **#3281 [Web UI 输入卡顿]**（12条评论，2个👍）：历史消息较长时输入框卡顿是用户反馈的高频痛点，直接影响 Web 端的用户体验。
- **#3369 [OpenCode Go 会话头支持]**（2个👍）：虽然已关闭，但其获得的社区认同表明开发者对特定 AI 后端（如 OpenCode）精细化配置有明确期待。

---

### 🐛 Bug 与稳定性
按严重程度排列：
1. **严重 - 钉钉通道流重连崩溃（#3382）**：在 v0.3.1 版本中，钉钉（Stream 模式）仍存在因通道关闭导致 panic 退出的问题。这是早期 #973 的复现或未彻底修复的回归问题。目前**尚无直接修复 PR**，需维护者高度关注。
2. **中等 - Web UI 历史消息卡顿（#3281）**：影响日常使用体验，属于前端性能瓶颈，尚无明确修复方案。
3. **已解决/观察 - QQ与钉钉夜间掉线崩溃（#973）**：该 Issue 已关闭，但其核心问题在 #3382 中再次出现，说明相关通道的底层连接管理仍需加固。

---

### 💡 功能请求与路线图信号
- **OpenAI 兼容提供商支持（#3366）**：用户呼吁增加自定义 OpenAI 兼容后端（如 9Router），这与 v0.11.0 路线图中“模块信任”和多后端适配的方向一致，可能被纳入后续版本。
- **IRCv3 多行消息（#3354）**：PR #3354 已经开始编码实现，预示着下个版本将完善对 IRCv3 扩展协议的支持。
- **OpenCode Go 会话头（#3369）**：虽已关闭，但提示了在 v0.11.0 的 ACP/Mesh 深度开发中，针对特定模型网关的定制化请求头可能成为标准配置。

---

### 💬 用户反馈摘要
- **痛点**：Web 端交互性能差（#3281）、特定通道（钉钉、QQ）的长连接稳定性不足导致服务崩溃（#973, #3382）。
- **诉求**：期望 PicoClaw 能兼容更多的 AI 服务商（#3366）和即时通讯协议（IRC #3287），提升在复杂网络环境下的自愈能力。
- **满意点**：项目文档和 sprint 规划（#3367, #3383）得到社区认可， Pilot MCP 等工具链的集成降低了使用门槛。

---

### ⏳ 待处理积压
- **高优待处理**：Issue #3382（钉钉 panic）属于新报告且无回应，需立即响应。
- **中优待处理**：PR #3353 和 #3354 已创建但长期未合并，Issue #3287 和 #3281 标记为 stale 但讨论活跃，需要维护者评估优先级并推进落地。
- **长期 stale**：Issue #3366（OpenAI 兼容）和 #3287（IRC 长消息）虽有陈旧标记，但社区需求明确，建议纳入 v0.11.0 的需求池。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



好的，这是根据您提供的 NanoClaw GitHub 数据生成的 2026-09-21 项目动态日报。

---

### **NanoClaw 项目动态日报 - 2026-09-21**

**项目状态：** 稳定迭代与修复期 | **整体健康度：** 良好

---

#### **1. 今日速览**
过去24小时内，NanoClaw 项目展现出极高的开发活跃度，主要以大量历史 PR 的集中合并与关闭为标志，标志着项目正在清理积压、完善核心功能。活跃的 Issue 数量较少，但有一个关于 WhatsApp 适配器的关键 Bug 被报告。项目整体处于一个巩固和优化的阶段，暂无新版本发布。

#### **2. 版本发布**
*   **无新版本发布。**

#### **3. 项目进展**
今日有 38 条 PR 被合并或关闭，其中许多是针对核心功能的重要修复和改进，显著提升了项目的稳定性和功能性：
*   **OpenCode 集成增强：** PR #3463 修复了 `OpenCodeProvider` 中的时序竞争问题，确保在会话空闲前能捕获最终的文本快照，提升了与 OpenCode 服务端交互的可靠性。
*   **WhatsApp 通道优化：** 多个 PR 针对 WhatsApp 通道进行了关键修复：
    *   PR #746 防止了因认证失败导致的反复重启“ hammering ”问题。
    *   PR #2565 增加了通过 `contextInfo.mentionedJid` 检测群组 @-mentions 的功能。
    *   PR #2328 修复了在多目的地群组中，回复目标默认指向消息源的问题。
*   **系统稳定性与工具链：**
    *   PR #700 增加了对超大 JSONL 会话文件的轮转逻辑，防止容器因处理超大文件而超时。
    *   PR #2309 用项目内更可靠的 `better-sqlite3` 封装替代了外部 `sqlite3` CLI。
    *   PR #2152 为 OpenCode 服务器增加了进程组终止和可配置的空闲超时设置。
*   **技能与集成：** PR #706 添加了 `icloud-tools` 技能包，为 Agent 增加了访问 iCloud 生产力工具（CalDAV/CardDAV/IMAP/SMTP）的能力。
*   **开发体验与 CI：** 多个 PR 修复了 CLI 工具、迁移脚本和 CI 工作流，例如 PR #2416 修复了 `ncl groups create` 命令的伴随行创建问题。

**整体迈进：** 项目通过批量合并这些修复，正在从功能开发阶段转向稳定化和精细化阶段，特别是对 WhatsApp 和 OpenCode 两大关键集成的支持度得到了显著提升。

#### **4. 社区热点**
*   **最活跃 PR：#3463** (`opencode provider: fall back to message.part.delta text`)
    *   **链接：** [nanocoai/nanoclaw#3463](https://github.com/nanocoai/nanoclaw/pull/3463)
    *   **分析：** 此 PR 虽然评论数未显示，但其解决的问题——事件循环中的时序竞争——是分布式系统中常见且棘手的难题。这表明社区对提升核心 Agent 运行时稳定性的诉求强烈，此类底层修复是项目健康发展的关键。
*   **核心 Issue：#3858** (`Agent never sees sender display names from native adapters`)
    *   **链接：** [nanocoai/nanoclaw#3858](https://github.com/nanocoai/nanoclaw/issues/3858)
    *   **分析：** 这是当前唯一开放的 Issue，直接反映了用户的核心痛点：在 WhatsApp 等原生适配器上，Agent 无法识别发送者的显示名称，只能看到 JID（ jabber ID ）。这严重影响了 Agent 在群聊场景下的上下文理解能力。社区对此问题的关注点在于对消息元数据完整性的要求。

#### **5. Bug 与稳定性**
*   **高严重度 Bug：**
    *   **Issue #3858** - **WhatsApp 发件人显示名称缺失**：Agent 在 WhatsApp 群组中无法区分参与者，因为所有消息都只携带 JID 而非显示名称。这是一个影响核心用户体验的未解决 Bug。
        *   **状态：** 已开启，未见直接关联的 Fix PR。值得注意的是，PR #2565 虽然修复了 @-mentions 检测，但并未解决显示名称的显示问题，说明可能需要一个更根本性的修复。
*   **已修复的稳定性问题：**
    *   **PR #746** - **WhatsApp 认证失败风暴**：修复了因认证失败或撤销导致的连接反复重启问题，避免了资源耗尽和日志洪水。
    *   **PR #700** - **容器超时风险**：通过会话文件轮转机制，防止了因历史会话文件过大导致的容器处理超时。

#### **6. 功能请求与路线图信号**
*   **功能请求：** Issue #3858 中隐含的功能请求是，原生适配器需要更完整地提取和传递消息的元数据（如发送者显示名称）。
*   **路线图信号：**
    *   **对核心通道的深度优化：** 大量关于 WhatsApp 和 OpenCode 的修复表明，项目路线图正优先完善这两个重要的集成通道。
    *   **Agent 能力扩展：** `icloud-tools` 技能的添加（PR #706）是向生态系统添加新功能模块的明确信号，预示着 NanoClaw 的 Agent 将能接入更多第三方服务。
    *   **开发者体验改善：** 对 CLI、迁移脚本和 CI 的持续投入，说明项目在关注降低贡献者和部署者的使用门槛。

#### **7. 用户反馈摘要**
*   **核心痛点：** 用户在使用 WhatsApp 等原生消息平台时，期望 Agent 能像人类一样识别并称呼群组成员。当前实现仅传递 JID，导致 Agent 无法进行有上下文的对话，这是最主要的功能性缺陷。
*   **使用场景：** 用户主要在群聊场景中遇到此问题，该场景下区分参与者至关重要。
*   **积极反馈：** 虽然直接反馈未在数据中体现，但大量合并的修复 PR（如解决超时、认证风暴）表明，项目维护者积极地响应和解决已知的稳定性问题，这本身就是一种对用户负责的积极信号。

#### **8. 待处理积压**
*   **需关注的重要 Issue：**
    *   **#3858** (`Agent never sees sender display names from native adapters`)：这是一个新开启但影响核心体验的 Bug，需要维护者优先评估修复方案。
*   **需关注的重要 PR：**
    *   **#3463** (`opencode provider: fall back to message.part.delta text`)：虽然已关闭，但其解决的底层问题需要持续关注，确保在后续版本中不会 reintroduce（重新引入）类似的时序问题。
    *   **#706** (`feat(skills): add icloud-tools skill`)：作为新功能添加的 PR，需要评估其与项目核心架构的契合度以及长期的维护成本。

---

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>



好的，这是根据您提供的数据生成的 NullClaw 项目动态日报。

---

### **NullClaw 项目动态日报 - 2026-09-21**

**项目主页:** [github.com/nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)

---

#### **1. 今日速览**

NullClaw 项目在2026年9月21日的整体活跃度处于**较低水平**。过去24小时内，项目无新的版本发布、无合并或关闭的Pull Request，代码提交活动稀少。然而，社区并非完全沉默，一个关于Ollama兼容性的重要功能增强请求（Issue #1000）被提出并引发了初步讨论，表明用户在实际使用中遇到了具体的痛点，社区存在明确的反馈需求。

#### **2. 项目进展**

今日无Pull Request合并或关闭的记录，项目在代码层面暂无显著的功能推进或修复。

#### **3. 社区热点**

今日唯一的社区焦点是Issue **#1000**。

*   **Issue #1000** `[OPEN] [enhancement] ollama incompatibility notification`
    *   **作者:** aaafgcfg | **创建时间:** 2026-09-20
    *   **链接:** [nullclaw/nullclaw#1000](https://github.com/nullclaw/nullclaw/issues/1000)
    *   **分析:** 该Issue迅速成为热点，反映了用户工作流中的一个关键障碍。用户的核心诉求是**改善错误信息的可读性**。当前，当Ollama后端的模型不支持工具调用时，系统仅抛出一个不透明的适配器错误，导致用户（甚至需要借助Wireshark抓包）才能理解失败原因。这严重损害了用户体验和调试效率。

#### **4. Bug 与稳定性**

今日暂无明确的Bug或崩溃报告。Issue #1000 描述的问题更偏向于**功能增强和用户体验改进**，而非软件稳定性缺陷，但其对用户工作流的阻碍程度很高。

#### **5. 功能请求与路线图信号**

*   **直接功能请求:** Issue #1000 本身就是一个明确的功能请求：**为Ollama后端添加清晰的通知或错误提示**，说明模型不支持工具调用。
*   **路线图信号:** 此请求暗示了项目路线图可能需要考虑：
    1.  **增强后端兼容性检查:** 在调用Ollama API前或初期，进行能力探测。
    2.  **统一错误处理框架:** 建立一套更用户友好的错误报告机制，覆盖所有后端（不仅仅是Ollama），将底层技术错误转化为有意义的指导信息。

#### **6. 用户反馈摘要**

从Issue #1000的描述中，可以提炼出以下用户反馈：

*   **痛点:** 错误信息不透明、不友好。用户面对一个含义模糊的“adapter error”无从下手，调试成本极高（“it's hard to understand, why it is not working”）。
*   **使用场景:** 用户正在集成Ollama作为AI后端，并依赖模型的工具调用功能来完成复杂任务。
*   **不满意点:** 当前版本的反馈机制无法提供有效的诊断指导，迫使用户使用底层网络分析工具（Wireshark）来排查问题，这超出了普通用户的合理预期。
*   **诉求:** 希望项目能提供清晰、直接的错误通知，明确指出问题根源（模型能力不足），从而节省时间、提升工作效率。

#### **7. 待处理积压**

根据当前数据，暂无长期未响应的重要Issue或PR。Issue #1000为新创建，需要维护者关注并做出响应。

---

**总结:** NullClaw 项目今日处于相对平静期，但社区反馈指出了一个关键的可用性问题。解决Issue #1000 中的问题，将显著提升项目对普通用户的友好度和专业感，是一个高价值的改进方向。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>



好的，这是根据您提供的 IronClaw GitHub 数据生成的 2026-09-21 项目动态日报。

---

### **IronClaw 项目动态日报 - 2026-09-21**

#### **1. 今日速览**
IronClaw 项目在 2026-09-21 的活跃度处于**常规维护状态**。开发核心暂无新的功能提交或问题报告，所有动态均由自动化依赖管理工具 Dependabot 驱动。今日共有 6 条 Pull Request 更新，其中 4 条处于开启状态，2 条已关闭/合并，表明项目正在积极进行依赖项的安全与版本维护，以确保底层栈的健康与稳定。

#### **2. 版本发布**
*   **无新版本发布**。今日无新的 Release 创建。

#### **3. 项目进展**
今日无合并的 PR 带来功能性进展。已关闭的 2 条 PR 均为 Dependabot 发起的依赖更新，其状态变更（关闭/合并）意味着依赖更新流程正在正常运转。
*   **已关闭的依赖更新 PR**：
    *   `#8099` - [dependencies, rust] chore(deps): bump the everything-else group across 1 directory with 25 updates (链接: nearai/ironclaw PR #8099)
    *   `#8079` - [dependencies, github_actions] chore(deps): bump the actions group across 1 directory with 6 updates (链接: nearai/ironclaw PR #8079)

**项目整体进展评估**：项目当前处于**版本间歇期的维护阶段**，重点在于夯实基础，而非功能飞跃。

#### **4. 社区热点**
今日无新的 Issue 创建，也无现有 Issue/PR 的评论或互动数据。**社区讨论热度为零**，暂无热点话题。

#### **5. Bug 与稳定性**
今日无新的 Bug 报告或崩溃问题提交。项目当前无已知的稳定性问题。

#### **6. 功能请求与路线图信号**
今日无新的功能请求 Issue。从已有的 PR 标签分析，项目当前的技术重心在于：
*   **依赖项健康**：持续更新 Rust 生态（`dependencies`, `rust`, `tokio-ecosystem`, `wasm`）和 GitHub Actions（`github_actions`）的版本。
*   **WASM 集成**：PR `#7834` 标签包含 `wasm`，表明项目对 WebAssembly 技术栈的集成仍在进行或规划中，这可能是未来路线图的一部分。

#### **7. 用户反馈摘要**
由于今日无任何 Issue 或 PR 评论，**无法提取用户反馈**。

#### **8. 待处理积压**
当前需关注的是由 Dependabot 创建的、已开启一段时间的依赖更新 PR，它们可能因等待测试或维护者审核而处于积压状态：
*   `#7834` - [size: L, risk: medium, scope: dependencies, contributor: experienced, dependencies, rust] chore(deps): bump the wasm group across 1 directory with 4 updates (创建于 2026-08-23，链接: nearai/ironclaw PR #7834) - **此 PR 规模较大（L），风险中等，已开启近一个月，建议优先审核。**
*   `#8078` - [dependencies, rust] chore(deps): bump the tokio-ecosystem group across 1 directory with 2 updates (创建于 2026-09-06，链接: nearai/ironclaw PR #8078)
*   `#8103` - [dependencies, github_actions] chore(deps): bump the actions group across 1 directory with 8 updates (创建于 2026-09-20，链接: nearai/ironclaw PR #8103)
*   `#8104` - [dependencies, rust] chore(deps): bump the everything-else group across 1 directory with 29 updates (创建于 2026-09-20，链接: nearai/ironclaw PR #8104)

**建议**：维护者应定期检查并合并这些自动化 PR，以避免依赖过时带来的安全风险和维护困难。特别是 `#7834`，其开启时间较长，可能涉及更复杂的集成测试。

---
**报告生成时间**：2026-09-21
**数据来源**：GitHub API for nearai/ironclaw

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



好的，这是根据您提供的 LobsterAI GitHub 数据生成的 2026-09-21 项目动态日报。

---

### **LobsterAI 项目动态日报 - 2026-09-21**

#### **1. 今日速览**

LobsterAI 项目在2026-09-21日展现出极高的开发活跃度与健康的迭代节奏。项目在过去24小时内发布了4个新版本，合并了5个关键PR，主要集中在核心功能增强、用户体验优化和系统稳定性提升方面。同时，社区活跃度保持稳定，有3个Issues得到更新（包括1个关闭），另有7个PR处于待合并状态，预示着未来将有更多功能上线。整体项目健康度优秀，正处于一个快速的功能沉淀与优化周期。

#### **2. 版本发布**

**最新版本：LobsterAI 2026.9.20**

此版本是一次重要的功能更新，引入了多项显著增强：

*   **子智能体会话可见性** (`feat: subagent session visibility`)：用户现在可以更清晰地查看和管理子智能体的会话，提升了复杂任务的可追溯性。
*   **浏览器增强：支持 Passkey/WebAuthn** (`feat(browser): add passkey/WebAuthn support`)：为应用内浏览器增加了现代身份验证标准支持，提升了安全性和用户体验。
*   **定时任务改进** (`feat: scheduled ta...`)：对定时任务功能进行了增强（具体改动信息在摘要中未完整显示）。

**破坏性变更与迁移注意事项：**
*   根据PR #2724的合并，**后台任务功能已被移除**。这属于一项破坏性变更，相关存储、IPC通道和UI组件均被删除。用户需注意，任何依赖旧后台任务功能的配置或脚本可能需要迁移。

**其他近期版本：**
*   **2026.9.17**：专注于OpenClaw的兼容性修复和数据迁移，包括状态架构迁移和快照回滚。
*   **2026.9.15**：包含OpenClaw兼容性修复和xAI认证凭证的存储迁移。
*   **2026.9.14**：升级了OpenClaw至v2026.8.1，并增强了Markdown编辑和产物工作流。

#### **3. 项目进展**

今日合并的PR标志着项目在多个方向上的实质性推进：

*   **核心功能增强**：
    *   **数字员工与能力市场** (`#2726`)：这是本日最重要的功能之一，为LobsterAI构建了一个完整的能力生态平台，用户可以发现技能、创建数字员工、安装专家团队，极大地扩展了智能体的应用边界。
    *   **Passkey/WebAuthn支持** (`#2723`)：提升了安全性和现代化认证能力。
*   **用户体验与稳定性优化**：
    *   **IM配置热更新** (`#2721`)：解决了保存IM配置时需要重启网关的问题，避免了工作中断，提升了运维效率。
    *   **定时任务修复** (`#2722`)：修复了微信渠道目标ID的大小写问题，并优化了重试被拒的提示。
    *   **后台任务功能移除** (`#2724`)：虽然是一项删除操作，但属于代码库清理，有助于简化架构，减少潜在的不稳定因素。
*   **架构与代码质量**：
    *   **插件入口钩子持久化** (`#2727`)：修复了网关重启后OpenClaw入口钩子配置丢失的问题，提升了配置的可靠性。

**整体迈进：** 项目正从基础的智能体对话能力，向构建一个拥有丰富插件市场、可定制数字员工、高效运维管理和现代化安全特性的完整AI智能体平台迈进。

#### **4. 社区热点**

今日社区讨论的焦点集中在新功能和长期存在的问题上：

*   **最活跃PR：数字员工与能力市场** (`#2726`)：此PR吸引了最多关注，它代表了项目一个重要的战略方向，旨在构建一个类似“应用商店”的生态系统，社区对此期待值很高。
*   **重要功能PR：IM配置热更新** (`#2721`)：解决了用户在实际使用中的一个痛点（配置生效需要重启），获得了积极评价。
*   **长期存在的Issues**：`#1003` (Notion MCP问题) 和 `#1007` (Agent Engine无限重启) 虽然今日有更新（可能是维护者标记了stale），但依然是社区长期讨论的热点，反映了用户对集成稳定性和核心引擎可靠性的高度关注。

#### **5. Bug 与稳定性**

*   **【高严重度】Agent Engine无限重启** (`Issue #1007`)：这是一个长期存在的严重稳定性问题，影响核心功能。目前**尚无明确的fix PR**，需要维护者优先投入资源排查根因。
*   **【中严重度】Notion MCP认证失败** (`Issue #1003`)：问题出在LobsterAI的MCP Bridge层，未正确传递环境变量，导致Notion API返回401。此问题**已有用户详细描述根因**，但**尚未有修复PR**。
*   **【已修复】删除Agent后任务列表不刷新** (`Issue #1068`)：此Bug已被标记为关闭，表明相关修复已合并。
*   **【已修复】微信定时任务发送问题** (`PR #2722`)：已通过PR修复，问题包括目标ID大小写和会话过期提示。

#### **6. 功能请求与路线图信号**

*   **明确的路线图信号**：PR `#2726` (数字员工与能力市场) 和 `#2720` (订阅与优惠) 表明，项目路线图正明确向着**构建商业化和平台化生态**的方向发展，包括引入付费订阅模式和丰富的能力市场。
*   **潜在的用户需求**：Issues `#1009` (Prompt模板库) 和 `#1011` (可扩展的产物预览管道) 虽然已标记为stale，但清晰地反映了用户对**提升工作效率**和**增强内容消费体验**的强烈需求。这些功能如果实现，将显著提升产品的用户粘性。PR `#1013` (斜杠触发技能选择器) 也呼应了这一需求。

#### **7. 用户反馈摘要**

*   **痛点提炼**：
    *   **集成稳定性**：用户对Notion MCP集成和Agent Engine的稳定性表示不满，这些是影响工作流的关键环节。
    *   **操作效率**：用户希望减少重复性劳动（如Prompt模板）、简化操作路径（如技能选择、任务列表刷新）。
*   **满意点**：
    *   对**数字员工**、**能力市场**等创新功能表示出浓厚兴趣和期待。
    *   对**IM配置热更新**等解决实际痛点的修复表示欢迎。
*   **总体反馈**：用户认可项目的发展方向，但对核心功能的稳定性和一些基础体验的完善抱有更高期望。

#### **8. 待处理积压**

以下Issue/PR已标记为stale，长期未更新，可能代表被搁置的功能或未解决的深层问题，需提醒维护者关注：

*   **Issues**:
    *   `#1003` - Notion MCP环境变量传递问题（有详细分析，无修复）。
    *   `#1007` - Agent Engine无限重启问题（严重，无解决方案）。
*   **PRs**:
    *   `#1008` - 新增6个预设Agent模板。
    *   `#1009` - Prompt模板库与变量填充。
    *   `#1011` - 可扩展的产物预览管道。
    *   `#1013` - 输入框斜杠触发技能选择器。

这些积压项若能被重新激活或采纳，将能有效提升用户体验和社区满意度。建议维护者定期审视，并明确其未来规划（合并、拒绝或归档）。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>



好的，这是根据您提供的 Moltis 项目 GitHub 数据生成的 2026-09-21 项目动态日报。

---

### **Moltis 项目动态日报 - 2026-09-21**

#### **1. 今日速览**
Moltis 项目在过去24小时内活跃度较低，开发活动趋于平静。无新版本发布，也无 Pull Request 提交或合并。社区互动集中在 Issue 区域，核心讨论围绕心跳功能的配置失效与实现限制展开，暴露出项目在特定功能模块上的文档一致性或代码实现层面可能存在改进空间。

#### **2. 版本发布**
*   **无新版本发布。**

#### **3. 项目进展**
*   **无 PR 合并或关闭。** 项目在今日无直接的功能推进或代码合并活动，整体进展处于相对停滞状态。

#### **4. 社区热点**
今日社区讨论聚焦于心跳功能的配置与实现问题，两个相关 Issue 获得了关注。

*   **#1278 [CLOSED] heartbeat.active_hours is documented as enforced but never evaluated — is_within_active_hours has no callers**
    *   **链接:** [moltis-org/moltis#1278](https://github.com/moltis-org/moltis/issues/1278)
    *   **分析:** 此 Issue 已被关闭，但揭示了项目文档与代码实现之间的关键矛盾。社区成员 jbutler1980 指出，配置文档中声称 `heartbeat.active_hours` 参数用于限制心跳执行时间，但代码中对应的 `is_within_active_hours` 函数在测试模块之外没有任何调用者。这直接导致了 Issue #1205 中用户报告的“心跳忽略配置持续运行”问题。这表明该 Issue 的关闭可能并未从根本上解决问题，或者其解决方案未被合并。

*   **#1205 [OPEN] [bug] [Bug]: Heartbeat ignores configured active hours and runs continuously**
    *   **链接:** [moltis-org/moltis#1205](https://github.com/moltis-org/moltis/issues/1205)
    *   **分析:** 这是一个长期存在的开放 Bug，由用户 IlyaBizyaev 提出。用户的核心诉求是修复心跳功能，使其能够 respects `active_hours` 配置，从而在指定时间窗口之外停止运行。该 Issue 的持续存在和活跃状态，反映了用户对后台自动化任务行为可控性的强烈需求。

#### **5. Bug 与稳定性**
今日报告的 Bug 严重性较高，均与核心功能“心跳”相关。

*   **严重 Bug: 心跳功能忽略配置，持续运行**
    *   **Issue:** [#1205](https://github.com/moltis-org/moltis/issues/1205)
    *   **描述:** 用户反馈即使配置了 `active_hours`，心跳任务仍会无视该设置，24小时不间断运行。这可能导致不必要的资源消耗和意外行为。
    *   **状态:** **OPEN**，无关联的 Fix PR。
    *   **关联:** 根源可能指向 [#1278](https://github.com/moltis-org/moltis/issues/1278) 所描述的代码缺陷。

*   **中等严重性 Bug: 心跳任务无法自定义工具控制**
    *   **Issue:** [#1279](https://github.com/moltis-org/moltis/issues/1279)
    *   **描述:** 用户 jbutler1980 发现，在注册心跳任务 `CronPayload::AgentTurn` 时，其 `tool_controls` 字段被硬编码为 `Default::default()`，导致用户无法为心跳任务配置特定的工具权限或限制。
    *   **状态:** **OPEN**，无关联的 Fix PR。
    *   **影响:** 限制了心跳任务的灵活性和安全性。

#### **6. 功能请求与路线图信号**
*   **功能请求: 为心跳任务启用 `tool_controls` 配置**
    *   **Issue:** [#1279](https://github.com/moltis-org/moltis/issues/1279)
    *   **分析:** 此 Issue 不仅是一个 Bug 报告，同时也隐含了对更细粒度任务控制的功能请求。如果维护者计划增强心跳的可配置性，修复此问题将是优先事项。它可能预示着未来版本中对任务编排模块的增强。

#### **7. 用户反馈摘要**
*   **痛点:**
    *   **配置失效:** 用户的核心痛点在于配置的预期行为与实际行为不符（`active_hours`），这严重损害了对系统行为的可预测性和信任感。
    *   **灵活性不足:** 用户希望对自动化任务（如心跳）有更精细的控制，包括执行时间窗口和可用工具集，但当前实现未能提供这些能力。
*   **场景:** 用户依赖心跳功能进行定期检查或维护任务，但需要其行为符合特定的工作时间或安全策略。

#### **8. 待处理积压**
*   **关键 Issue: #1205 - Heartbeat ignores configured active hours and runs continuously**
    *   **提醒:** 此 Issue 自 2026 年 8 月 16 日创建以来一直开放，已过去一个多月，且是社区热点问题的核心。其根源问题（#1278）虽被关闭，但并未解决。维护者需优先关注此 Issue，并提供一个真正的代码修复方案，以恢复用户对心跳功能配置的信心。

---
**报告生成说明:** 本报告基于提供的 2026-09-21  GitHub 数据快照生成，所有信息均严格来源于数据本身，未进行任何主观推测或添加外部知识。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 — 2026-09-21

---

## 1. 今日速览

过去 24 小时内，CoPaw（QwenPaw）项目保持高度活跃：共 24 条 Issue 更新（18 新开/活跃，6 已关闭）、37 条 PR 更新（23 待合并，14 已合并/关闭），并发布了 **v2.2.2-beta.3** 测试版本。社区围绕多租户 Hub 路线图、模型配置统一化、以及多个影响会话稳定性的 Bug 展开了密集讨论。值得注意的是，多条严重 Bug 已有对应 fix PR 提交，项目对问题的响应速度较快。但会话丢失、上下文溢出、插件兼容性等核心稳定性问题仍需持续关注。

---

## 2. 版本发布

### v2.2.2-beta.3

- **发布链接：** https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.2-beta.3
- **更新内容：**
  - `fix(console)`: 恢复 assistant 响应操作按钮（[PR #7851](https://github.com/agentscope-ai/QwenPaw/pull/7851)）
  - `fix(e2e)`: 修复因 #7502 重设计导致的 console 选择器失效，加固 session-list 断言（[@yutai78786](https://github.com/agentscope-ai/QwenPaw/pull/7851)）
- **破坏性变更：** 无
- **迁移注意事项：** 此为 Beta 版本，不建议生产环境直接升级；安装验证 Issue [#7891](https://github.com/agentscope-ai/QwenPaw/issues/7891) 已由 bot 自动创建，4 小时内完成多平台验证。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 标题 | 类型 | 推进意义 |
|---|---|---|---|
| [#7904](https://github.com/agentscope-ai/QwenPaw/pull/7904) | fix(pet): forward approval actor to native service | Bug 修复 | 修复 qwenpaw-pet 0.1.1 导致工具审批失败的问题，关闭 [#7856](https://github.com/agentscope-ai/QwenPaw/issues/7856) |
| [#7887](https://github.com/agentscope-ai/QwenPaw/pull/7887) | fix(agents): handle unknown audio part rejections | Bug 修复 | 修复 DeepSeek 等模型拒绝 `input_audio` 后会话永久中断的问题，关闭 [#7876](https://github.com/agentscope-ai/QwenPaw/issues/7876) |
| [#7894](https://github.com/agentscope-ai/QwenPaw/pull/7894) | test(console): raise frontend coverage by +1027 statements | 测试 | 前端语句覆盖率从 64.45% 提升至 67.65%，纯测试无产品代码变更 |
| [#7901](https://github.com/agentscope-ai/QwenPaw/pull/7901) | ci(release): unfreeze merges as soon as release finishes | CI/CD | Release 完成后立即解除合并冻结，不再等待 cron 延迟 |
| [#7345](https://github.com/agentscope-ai/QwenPaw/pull/7345) | Fix/tool card stuck calling after stop | Bug 修复 | 修复停止工具调用后卡片永久"执行中"的问题，关闭 [#7321](https://github.com/agentscope-ai/QwenPaw/issues/7321) |
| [#5836](https://github.com/agentscope-ai/QwenPaw/pull/5836) | feat(desktop): auto-detect local paths and open file explorer | 功能 | 桌面端聊天中自动检测本地路径并支持点击打开文件管理器，关闭 [#4830](https://github.com/agentscope-ai/QwenPaw/issues/4830) |
| [#7862](https://github.com/agentscope-ai/QwenPaw/pull/7862) | ci(release): gate artifact publishing on test gate | CI/CD | 将发布产物推送绑定测试门禁，E2E watch 设为阻塞 |

**进展评估：** 今日合并了 7 个实质性 PR，涵盖 3 个 Bug 修复、2 个 CI 优化、1 个功能增强和 1 个测试提升。v2.2.2-beta.3 发布后 CI 流程也同步优化（即时解冻 + 发布门禁），整体向前推进稳健。

---

## 4. 社区热点

### 讨论最活跃的 Issue

1. **[#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318)** — QwenPaw Hub 多租户版路线图讨论
   - 👍 4 | 💬 31 条评论 | 创建于 2026-08-26，今日仍有活跃讨论
   - **诉求分析：** 社区反复要求多人/团队协作能力，Hub 是官方首次正式回应。31 条评论反映用户对多租户权限模型、技能共享机制、定价策略等有强烈意见，属于战略级功能方向。

2. **[#7853](https://github.com/agentscope-ai/QwenPaw/issues/7853)** — ToolResultPruner 跳过媒体块导致 base64 无界累积
   - 💬 6 条评论
   - **诉求分析：** `view_image` 返回的 base64 图片永不裁剪，会话越长上下文越大直至溢出。这是影响核心使用流程的严重 Bug，讨论集中在修复方案是否应统一裁剪逻辑还是引入媒体专用配额。

3. **[#7724](https://github.com/agentscope-ai/QwenPaw/issues/7724)** — 会话丢失问题
   - 💬 5 条评论
   - **诉求分析：** 用户长时间未操作后重新进入，会话和模型配置同时丢失，属于高影响的数据完整性问题。

4. **[#7888](https://github.com/agentscope-ai/QwenPaw/issues/7888)** — Chat 页面 React insertBefore NotFoundError
   - 💬 4 条评论
   - **诉求分析：** 浏览器扩展注入 `<font>` 标签破坏 React DOM 结构，导致聊天页白屏。社区在讨论是否应在 React 层做防御性处理。

5. **[#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884)** — 压缩后历史信息无法全量加载
   - 💬 4 条评论
   - **诉求分析：** 用户回看历史对话时内容截断，体验极差。反映上下文压缩策略与前端加载机制的协调问题。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 严重（影响核心功能/数据安全）

| Bug | 描述 | Fix PR |
|---|---|---|
| [#7853](https://github.com/agentscope-ai/QwenPaw/issues/7853) | ToolResultPruner 跳过 `type="data"` 块，base64 图片无限累积撑爆上下文 | 暂无 |
| [#7724](https://github.com/agentscope-ai/QwenPaw/issues/7724) | 会话丢失 + 模型配置丢失，重新部署后历史对话完全消失 | 暂无 |
| [#7859](https://github.com/agentscope-ai/QwenPaw/issues/7859) | 持久性提示注入：tool-result system-reminder 中被注入"删除所有技能"指令 | 暂无 |
| [#7881](https://github.com/agentscope-ai/QwenPaw/issues/7881) | kimi-code ACP runner 绕过边界/破坏性命令检查（Edit 被拦截，Write/Bash 完全放行） | 暂无 |

### 🟠 中等（影响可用性/兼容性）

| Bug | 描述 | Fix PR |
|---|---|---|
| [#7856](https://github.com/agentscope-ai/QwenPaw/issues/7856) | qwenpaw-pet 0.1.1 丢失 `actor` 参数导致审批失败 | ✅ [#7904](https://github.com/agentscope-ai/QwenPaw/pull/7904)（已合并） |
| [#7876](https://github.com/agentscope-ai/QwenPaw/issues/7876) | DeepSeek 拒绝 input_audio，会话永久中断 | ✅ [#7887](https://github.com/agentscope-ai/QwenPaw/pull/7887)（已合并） |
| [#7883](https://github.com/agentscope-ai/QwenPaw/issues/7883) | tool 返回 PDF 以 OpenAI 嵌套 file part 序列化，DeepSeek 400 拒绝 | 暂无 |
| [#7882](https://github.com/agentscope-ai/QwenPaw/issues/7882) | OpenCode "免费"模型 API 调用返回 403，UI 仍标记为免费 | [#7869](https://github.com/agentscope-ai/QwenPaw/pull/7869)（待合并） |
| [#7900](https://github.com/agentscope-ai/QwenPaw/issues/7900) | Hub 认证不支持 `?token=` 查询参数，文件预览失败 | 暂无（已关闭，可能已修复） |
| [#7905](https://github.com/agentscope-ai/QwenPaw/issues/7905) | DoomLoopGate 纯文本轮次误触发 TERMINATE | ✅ [#7906](https://github.com/agentscope-ai/QwenPaw/pull/7906)（待合并） |
| [#7895](https://github.com/agentscope-ai/QwenPaw/issues/7895) | idle cleanup 在消费者停止期间丢弃新消息 | ✅ [#7896](https://github.com/agentscope-ai/QwenPaw/pull/7896)（待合并，首次贡献者） |
| [#7890](https://github.com/agentscope-ai/QwenPaw/issues/7890) | 零停机 reload 丢失 runtime hook 但保留 middleware，行为不一致 | 暂无 |

### 🟡 低（UI/体验层）

| Bug | 描述 | Fix PR |
|---|---|---|
| [#7866](https://github.com/agentscope-ai/QwenPaw/issues/7866) | 文件区域 tab 显示旧内容，session card 显示新内容 | ✅ [#7902](https://github.com/agentscope-ai/QwenPaw/pull/7902)（待合并） |
| [#7877](https://github.com/agentscope-ai/QwenPaw/issues/7877) | 会话工作目录面板：可视区仅 3 行、"最近项目"恒为空 | 已关闭 |
| [#7888](https://github.com/agentscope-ai/QwenPaw/issues/7888) | Chat 页面 React insertBefore 错误导致白屏 | 暂无 |
| [#7879](https://github.com/agentscope-ai/QwenPaw/issues/7879) | MCP OAuth 握手失败，无法接入静态 Bearer Key 类型的 MCP Server | 暂无 |

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue | 相关 PR | 纳入可能性评估 |
|---|---|---|---|
| **统一模型配置（向量/文本/音视频）** | [#5182](https://github.com/agentscope-ai/QwenPaw/issues/5182) | [#7899](https://github.com/agentscope-ai/QwenPaw/pull/7899) — 统一模型发现/定价/选择/Thinking 控制 | 🟢 **高**：PR 已提交，覆盖面广，与 Hub 多租户路线对齐 |
| **QwenPaw Hub 多租户版** | [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | 无独立 PR | 🟡 **中**：仍处于需求收集阶段，31 条评论反映方向尚未收敛 |
| **网页标题自定义** | [#7648](https://github.com/agentscope-ai/QwenPaw/issues/7648) | 无 | 🟡 **中**：改动小、需求明确，但尚无 PR |
| **ReMeLight 记忆写入使用独立模型** | — | [#7719](https://github.com/agentscope-ai/QwenPaw/pull/7719) | 🟢 **高**：PR 已提交，允许记忆写入使用更便宜的模型 |
| **AgentScope Platform 内置 Provider** | — | [#7843](https://github.com/agentscope-ai/QwenPaw/pull/7843)（已关闭） | 🟠 **待定**：PR 已关闭，可能调整方案后重新提交 |
| **社区集成与收件箱** | — | [#7903](https://github.com/agentscope-ai/QwenPaw/pull/7903) | 🟡 **中**：功能量大，需更多评审 |
| **认证多 Tab 聊天终端** | — | [#7861](https://github.com/agentscope-ai/QwenPaw/pull/7861) | 🟡 **中**：PR 待审核 |

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的关键痛点：

1. **会话数据安全感低：** 多位用户（[#7724](https://github.com/agentscope-ai/QwenPaw/issues/7724)、[#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884)）反映长时间对话丢失或回看截断，"辛苦聊的内容找不到了"是最突出的不满。

2. **多模型/多 Provider 兼容性差：** OpenCode 免费 403（[#7882](https://github.com/agentscope-ai/QwenPaw/issues/7882)）、DeepSeek 拒绝 audio/PDF（[#7876](https://github.com/agentscope-ai/QwenPaw/issues/7876)、[#7883](https://github.com/agentscope-ai/QwenPaw/issues/7883)）、MissingSessionID（[#7599](https://github.com/agentscope-ai/QwenPaw/issues/7599)），用户在切换模型时频繁踩坑。

3. **安全性担忧：** 提示注入导致"删除所有技能"（[#7859](https://github.com/agentscope-ai/QwenPaw/issues/7859)）和 kimi-code 绕过边界检查（[#7881](https://github.com/agentscope-ai/QwenPaw/issues/7881)）引发社区对 agent 安全边界的讨论。

4. **多实例管理体验差：** 用户管理 7-8 个项目面板时无法区分标签页（[#7648](https://github.com/agentscope-ai/QwenPaw/issues/7648)），反映"重度用户"对管理效率的需求。

5. **满意点：** GitHub Issue 反馈助手 Skill（[#5567](https://github.com/agentscope-ai/QwenPaw/issues/5567)，👍 2）被社区认可，说明 Skill 生态和自动化工作流是用户认可的增值方向。

---

## 8. 待处理积压

| Issue/PR | 天数 | 说明 | 建议行动 |
|---|---|---|---|
| [#7853](https://github.com/agentscope-ai/QwenPaw/issues/7853) — base64 无界累积 | 3 天 | 严重影响长会话稳定性，尚无 fix PR | **优先安排**：此为上下文管理核心逻辑缺陷 |
| [#7724](https://github.com/agentscope-ai/QwenPaw/issues/7724) — 会话丢失 | 9 天 | 涉及数据持久化可靠性，5 条评论用户共鸣强 | **需根因分析**：可能涉及 shutdown/ reload 流程 |
| [#7859](https://github.com/agentscope-ai/QwenPaw/issues/7859) — 持久性提示注入 | 3 天 | 安全类问题，4 条评论 | **安全评审优先** |
| [#7881](https://github.com/agentscope-ai/QwenPaw/issues/7881) — kimi-code ACP 边界绕过 | 2 天 | 安全类，4 个补充发现 | **与 #7859 一并安全评审** |
| [#7883](https://github.com/agentscope-ai/QwenPaw/issues/7883) — DeepSeek PDF 序列化 | 2 天 | 上游 #7597 修复不完整，2.2.1 仍可复现 | **回溯验证**：确认 #7621 修复范围 |
| [#7599](https://github.com/agentscope-ai/QwenPaw/issues/7599) — OpenCode MissingSessionID | 14 天 | 长期未解决，PR [#7869](https://github.com/agentscope-ai/QwenPaw/pull/7869) 待合并 | **加速评审合并** |
| [#7890](https://github.com/agentscope-ai/QwenPaw/issues/7890) — reload 丢失 runtime hook | 1 天 | 行为一致性 Bug，可能影响所有使用 hook 的插件 | **需确认影响范围** |
| [#5182](https://github.com/agentscope-ai/QwenPaw/issues/5182) — 统一模型配置 | 99 天 | 长期需求，PR [#7899](https://github.com/agentscope-ai/QwenPaw/pull/7899) 已提交 | **重点评审**：此为架构级改动 |

---

> **项目健康度评估：** 活跃度高（日均 24 Issue + 37 PR 更新），修复响应较快（多条 Bug 当天即有 fix PR），但核心稳定性问题（会话丢失、上下文溢出、安全边界）积累较多且部分缺乏根因修复。建议 v2.2.2 正式版发布前集中解决 🔴 级 Bug，尤其是 [#7853](https://github.com/agentscope-ai/QwenPaw/issues/7853) 和 [#7724](https://github.com/agentscope-ai/QwenPaw/issues/7724)。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-09-21

---

## 1. 今日速览

ZeroClaw 今日呈现**高活跃度、架构决策密集落地**的特征：过去 24 小时内共 50 条 Issue 更新（38 活跃 / 12 关闭）、50 条 PR 更新（48 待合并 / 2 合并或关闭），无新版本发布。项目核心动态集中在 **6 项重大 RFC 被关闭并标记为 accepted**，围绕会话架构、文件系统、WASM 插件运行时、桌面 Computer-Use 等核心设计达成了共识，并立即为其中 3 项创建了实施追踪器。安全与稳定性方面，ACP（Agent Communication Protocol）暴露了多个并发与事务性问题，由 PR #10197 的审查衍生出 3 个新 Bug Issue。整体来看，项目正处于 **v0.9.0 路线图密集推进期**，RFC 决策窗口加速闭合，但大量 XL 级安全修复 PR 仍在等待 maintainer 审查，合并吞吐率偏低。

---

## 2. 版本发布

无新版本发布。项目当前处于 v0.8.6–v0.9.0 交付窗口期，尚未发布新版本。

---

## 3. 项目进展

### 今日关闭的 RFC（标志着架构共识达成）

| RFC | 标题 | 核心决策 | 链接 |
|-----|------|---------|------|
| #9487 | Runtime-owned conversation sessions and transport surface adapters | Rev.5 通过，运行时接管会话生命周期与传输适配层 | [Issue #9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) |
| #9488 | Unified file and attachment architecture for conversation surfaces | Rev.10 通过，统一文件/附件架构，涵盖 intake→resolver→delivery 全链路 | [Issue #9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) |
| #6165 | Prefer a lighter ZeroClaw core through external integrations | 核心精简策略确立：内置集成优先替换为外部替代 | [Issue #6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) |
| #6909 | Computer-use support for desktop screen interaction and input control | Rev.2 通过，桌面屏幕交互与输入控制纳入正式路线图 | [Issue #6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) |
| #10076 | Composable WASM plugin runtime architecture | Rev.通过，可组合 WASM 插件运行时架构，含核心 API 与可替换 Provider | [Issue #10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076) |
| #10526 | Append-only session event history, deterministic state replay | 仅追加会话事件历史、确定性状态重放与派生 Agent 流 | [Issue #10526](https://github.com/zeroclaw-labs/zeroclaw/issues/10526) |

### 随 RFC 闭合立即创建的实施追踪器

- **[#11013](https://github.com/zeroclaw-labs/zeroclaw/issues/11013)** — 统一文件 intake/resolver/delivery 实施追踪器（承接 #9488）
- **[#11014](https://github.com/zeroclaw-labs/zeroclaw/issues/11014)** — 可组合 WASM Provider 与 Service Graph 实施追踪器（承接 #10076）
- **[#11015](https://github.com/zeroclaw-labs/zeroclaw/issues/11015)** — 桌面 Computer-Use 协议与 spike 实施追踪器（承接 #6909）

### 今日关闭的 PR

- **[#10959](https://github.com/zeroclaw-labs/zeroclaw/pull/10959)** `fix(runtime): sort tool specs so the prompt-cache prefix is stable` — 修复 Anthropic prompt-cache 因 tool spec 无序导致缓存命中率下降的问题（XS 级，已关闭）

> **评估**：今日项目在**架构设计层面前进显著**——6 项核心 RFC 闭环 + 3 项实施追踪器启动，表明维护团队正在系统性地将 v0.9.0 的设计蓝图落地。但**代码合并层面进展有限**，仅 1 个 XS 级修复 PR 关闭，大量 XL 级安全修复 PR 仍处于 `needs-maintainer-review` 状态。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论数 | 核心争议/诉求 | 链接 |
|------|-------|--------|--------------|------|
| 1 | #9487 Runtime-owned conversation sessions | 39 | 会话所有权从 channel 上移至 runtime、传输适配层边界划分、Rev.4→Rev.5 投票重置流程 | [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) |
| 2 | #9488 Unified file and attachment architecture | 32 | 文件流模型是否覆盖所有 channel surface、resolver 冲突语义、保留策略 | [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) |
| 3 | #6165 Lighter ZeroClaw core | 19 | 哪些内置集成应被外部化、迁移路径对现有用户的影响、MCP 替代就绪度 | [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) |
| 4 | #6909 Desktop computer-use | 17 | 安全边界（bounded approval units）、sidecar 信任模型、会话 arming 机制 | [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) |
| 5 | #8692 Maintainer decision queue | 15 | RFC 决策队列的维护效率、积压 RFC 的优先级排序 | [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) |
| 6 | #10076 Composable WASM plugin | 15 | 与 #10526 的事件词汇表管辖权划分、Provider 生命周期管理 | [#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076) |

**分析**：评论热度高度集中在**架构层 RFC**，社区关注点在于：
1. **会话所有权迁移**（#9487）涉及 channel/gateway/runtime 三层权力重分配，是当前最敏感的设计变更；
2. **核心精简**（#6165）引发对"内置功能被移除"的担忧，用户希望看到清晰的迁移路径；
3. WASM 插件（#10076）与事件历史（#10526）之间的**管辖权边界**在评论中被反复讨论，最终在 Rev. 中做出明确切分。

---

## 5. Bug 与稳定性

### P1 — 高优先级 Bug

| Bug | 组件 | 严重程度 | 有无 Fix PR | 链接 |
|-----|------|---------|------------|------|
| **#10643** Bounded child loop 审批绕过 | runtime/agent/security | S2 — 安全策略被绕过 | 有（PR #10241 部分覆盖） | [#10643](https://github.com/zeroclaw-labs/zeroclaw/issues/10643) |
| **#10635** Runtime profile cost limit 不反映实际全局日预算 | config/onboarding | S2 — 用户误以为无限制但实际被拒 | 无独立 PR | [#10635](https://github.com/zeroclaw-labs/zeroclaw/issues/10635) |

> **#10643 关键说明**：bounded child loop 继承工具时没有 approval manager，`approval: None` 被视为 `NotRequired`，导致 prompt-required 继承工具可在子循环中未经审批执行。这是一个**安全 fail-closed 缺陷**，PR #10241 正在修复相关的 shell 审批路由。

### P2 — 中优先级 Bug

| Bug | 组件 | 严重程度 | 有无 Fix PR | 链接 |
|-----|------|---------|------------|------|
| **#11021** ACP hard cancel 后 session_end 不保证 exactly-once | runtime/ACP | S2 — hook 重复或丢失 | 审查 PR #10197 时发现，尚无独立 PR | [#11021](https://github.com/zeroclaw-labs/zeroclaw/issues/11021) |
| **#11020** ACP TodoWrite plan 持久化失败被静默吞没 | runtime/ACP | S2 — 数据丢失不可观测 | 审查 PR #10197 时发现，尚无独立 PR | [#11020](https://github.com/zeroclaw-labs/zeroclaw/issues/11020) |
| **#11019** ACP 管理删除与活动 turn 取消非事务性 | runtime/ACP | S2 — 部分结果不一致 | 审查 PR #10197 时发现，尚无独立 PR | [#11019](https://github.com/zeroclaw-labs/zeroclaw/issues/11019) |
| **#10927** Telegram 语音偏好匹配目标 chat 而非发送者 | channel/telegram | S2 — 功能退化 | 有（状态 in-progress） | [#10927](https://github.com/zeroclaw-labs/zeroclaw/issues/10927) |

### P3 — 低优先级 Bug

| Bug | 组件 | 严重程度 | 链接 |
|-----|------|---------|------|
| **#10919** A2A 与 HTTP tool 测试使用不同的全局代理状态锁 | tooling/CI | S2 — 测试偶发 race | [#10919](https://github.com/zeroclaw-labs/zeroclaw/issues/10919) |

> **ACP 三连 Bug (#11021/#11020/#11019) 均源自 PR #10197 的审查**，表明 ACP 会话管理在并发取消、持久化失败回退和事务一致性方面存在系统性薄弱点，值得作为一组统一修复。

---

## 6. 功能请求与路线图信号

### 新功能请求

| Issue | 功能 | 路线图信号 | 链接 |
|-------|------|-----------|------|
| **#10987** WhatsApp Web 投票消息映射为 `[choice]` 格式 | channel:whatsapp | 与 #10983/#10984 (WhatsApp 原生投票) 配套，Signal 已实现同模式 | [#10987](https://github.com/zeroclaw-labs/zeroclaw/issues/10987) |
| **#10634** 网络中断 provider turn 恢复（不重放 tool side effects） | runtime/ACP | 已 accepted + zerocode 标记，高概率纳入 v0.9.0 | [#10634](https://github.com/zeroclaw-labs/zeroclaw/issues/10634) |
| **#11017** RFC: 保留适用 review 并简化 expedited merge 决策 | governance | 新 RFC，影响贡献流程效率 | [#11017](https://github.com/zeroclaw-labs/zeroclaw/issues/11017) |
| **#11016** 文档化 lighter-core 替换优先集成策略 | docs | 承接已接受 #6165，填补策略文档空白 | [#11016](https://github.com/zeroclaw-labs/zeroclaw/issues/11016) |

### 长期追踪器更新（v0.8.6 / v0.9.0 交付信号）

- **[#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)** Runtime & Gateway v0.8.6/v0.9.0 交付追踪器 — 持续活跃
- **[#8358](https://github.com/zeroclaw-labs/zeroclaw/issues/8358)** ZeroRelay 原生传输与 v0.9.0 就绪追踪器 — 持续活跃
- **[#8691](https://github.com/zeroclaw-labs/zeroclaw/issues/8691)** ADR 清单与已接受 RFC 决策记录追踪器 — in-progress
- **[#10330](https://github.com/zeroclaw-labs/zeroclaw/issues/10330)** 已接受 RFC 实施归属索引追踪器

**路线图判断**：v0.9.0 的核心交付项（Runtime/Gateway 分离、ZeroRelay、WASM 插件、统一文件架构、桌面 Computer-Use）均已有追踪器且处于活跃状态。**网络中断 turn 恢复 (#10634)** 和 **Telegram webhook 模式 (#8046)** 是下一版本最可能纳入的用户侧功能。

---

## 7. 用户反馈摘要

从 Issue 评论与描述中提取的用户痛点：

1. **成本控制不可信**（#10635）：用户配置 `max_cost_per_day` 为极大值时，以为不受限，实际被进程级 $10 硬限制静默拒绝。用户期望：**配置值应反映真实限制，或给出明确的限制来源提示**。

2. **ACP 会话管理不够健壮**（#11021/#11020/#11019）：在硬取消、持久化失败等边界场景下，hook 重复触发、数据静默丢失、部分状态不一致——这些是**7×24 自主运行 Agent 的核心可靠性需求**，用户期望事务级保证。

3. **内置集成被移除的迁移焦虑**（#6165 评论）：社区对"lighter core"总体赞同，但希望**每个被外部化的集成都有明确的替代方案和迁移指南**，而非突然失效。

4. **Telegram 通道体验细化**（#8445, #10927, #8046）：多消息模式、语音匹配错误、webhook 模式缺失——Telegram 是高频使用通道，用户对交互细节敏感。

5. **CI/贡献流程摩擦**（#11017, #9512）：贡献者反映 expedited merge 机制中 review 丢失的问题，以及 bespoke CI gate 缺乏动机注释导致理解困难。

---

## 8. 待处理积压

### 长期未合并的高优先级 PR（需 maintainer 关注）

| PR | 规模 | 状态 | 等待天数 | 风险 | 链接 |
|----|------|------|---------|------|------|
| **#7821** Sandbox Policy schema | XL | needs-author-action | ~96 天 | high | [#7821](https://github.com/zeroclaw-labs/zeroclaw/pull/7821) |
| **#9447** Anthropic incomplete response 分类 | XL | needs-author-action | ~56 天 | medium | [#9447](https://github.com/zeroclaw-labs/zeroclaw/pull/9447) |
| **#9584** Plugin egress grant ceremony | XL | open | ~52 天 | high | [#9584](https://github.com/zeroclaw-labs/zeroclaw/pull/9584) |
| **#9830** Browser automation opt-in | M | open | ~45 天 | high | [#9830](https://github.com/zeroclaw-labs/zeroclaw/pull/9830) |
| **#9977** Filesystem mutation confinement | XL | needs-maintainer-review | ~39 天 | high | [#9977](https://github.com/zeroclaw-labs/zeroclaw/pull/9977) |
| **#10241** Supervised shell approval routing | XL | needs-maintainer-review | ~30 天 | high | [#10241](https://github.com/zeroclaw-labs/zeroclaw/pull/10241) |
| **#10381** Host launcher resolution | XL | needs-maintainer-review | ~26 天 | high | [#10381](https://github.com/zeroclaw-labs/zeroclaw/pull/10381) |
| **#10197** ACP interrupted turn persist | XL | needs-maintainer-review | ~32 天 | high | [#10197](https://github.com/zeroclaw-labs/zeroclaw/pull/10197) |
| **#10621** Agent lifecycle coordination | XL | needs-maintainer-review | ~17 天 | high | [#10621](https://github.com/zeroclaw-labs/zeroclaw/pull/10621) |
| **#10724** Anthropic cache TTL configurable | XL | open | ~12 天 | high | [#10724](https://github.com/zeroclaw-labs/zeroclaw/pull/10724) |

### 长期未解决的 Issue

| Issue | 优先级 | 状态 | 创建日期 | 链接 |
|-------|--------|------|---------|------|
| **#8046** Telegram webhook 模式 | P2 | accepted / icebox | 2026-06-20 | [#8046](https://github.com/zeroclaw-labs/zeroclaw/issues/8046) |
| **#8445** Telegram 多消息模式 | P2 | in-progress | 2026-06-29 | [#8445](https://github.com/zeroclaw-labs/zeroclaw/issues/8445) |
| **#10635** Cost limit 不反映实际预算 | P1 | accepted | 2026-09-05 | [#10635](https://github.com/zeroclaw-labs/zeroclaw/issues/10635) |
| **#10643** Child loop 审批绕过 | P1 | in-progress | 2026-09-05 | [#10643](https://github.com/zeroclaw-labs/zeroclaw/issues/10643) |

> **⚠️ 关键提醒**：当前有 **7 个 XL 级安全相关 PR** 处于 `needs-maintainer-review` 或 `needs-author-action` 状态，合计等待时间超过 300 天。这些 PR 涉及浏览器自动化默认行为（#9830）、shell 审批路由（#10241）、主机启动器路径解析（#10381）、文件系统边界（#9977）、沙箱策略（#7821）等核心安全面。建议维护团队在 v0.9.0 发布前安排集中审查窗口，避免安全修复长期滞后于已接受的 RFC 设计。

---

*数据截至 2026-09-21，来源：GitHub zeroclaw-labs/zeroclaw Issues & Pull Requests*

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*