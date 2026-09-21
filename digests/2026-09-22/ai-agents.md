# OpenClaw 生态日报 2026-09-22

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-21 22:15 UTC

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



# OpenClaw 项目动态日报 — 2026-09-22

---

## 1. 今日速览

OpenClaw 今日处于**高强度迭代状态**：过去 24 小时内 Issues 与 PR 双双触及 500 条更新量级，其中活跃 Issue 463 条、已关闭 37 条，PR 待合并 323 条、已合并/关闭 177 条，合并率约 35%，表明代码流动速度较快但仍有显著积压。项目发布了 **v2026.7.35**（extended-stable / LTS 等价版本），同时社区讨论高度集中在**会话状态管理、消息丢失、子智能体可靠性**三大痛点上，反映出项目正从功能快速扩张期向稳定性攻坚期过渡。整体健康度评分：**B+**（活跃度优秀，稳定性可控但风险点集中）。

---

## 2. 版本发布

### v2026.7.35 — OpenClaw 2026.7.35（extended-stable / LTS）

- **定位**：网关专用 `extended-stable` 发布，相当于当前 LTS 版本，基于 2026 年 7 月末的 OpenClaw 代码快照，叠加关键安全更新、可靠性与性能修复，以及新模型支持。
- **当前最新版本**：[2026.9.5](https://github.com/openclaw/openclaw/releases/tag/v2026.9.5)（开发主线领先 LTS 约 6 周）
- **破坏性变更**：本次发布说明未明确列出破坏性变更，但作为网关专用版本，插件接口与会话持久化格式可能有隐性不兼容风险。
- **迁移注意事项**：
  - 从 2026.9.x 降级到 2026.7.35 时，需验证插件兼容性（尤其是 Codex、active-memory 等扩展）。
  - 数据库 schema 或会话存储格式若在 8-9 月间发生变更，降级前务必进行备份与回滚演练。
  - LTS 用户应在测试环境中先行验证新版本，再在生产网关上执行滚动升级。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR（按影响力排序）

| PR | 标题 | 影响领域 | 说明 |
|---|---|---|---|
| [#154874](https://github.com/openclaw/openclaw/pull/154874) | fix: deliver completed replies while Claude background research continues | gateway / agents / anthropic | 修复 Claude 后台研究运行时已完成答案不可见的问题，确保回复通过正常策略送达通道 |
| [#155121](https://github.com/openclaw/openclaw/pull/155121) | fix: gateway crash loop when attachment filename has non-ASCII chars | gateway | 修复飞书等渠道转发附件含 CJK 字符时网关崩溃重启循环（P0 级别） |
| [#154543](https://github.com/openclaw/openclaw/pull/154543) | fix(update): record plugin Doctor failures as warnings after package installation | update / plugins | 包安装成功后 Doctor 失败不再误判为整体更新失败 |
| [#154872](https://github.com/openclaw/openclaw/pull/154872) | fix: suppress false reply-failure warnings after stopping queued input | gateway / agents | 消除停止排队输入后误报的回复缺失警告 |
| [#154920](https://github.com/openclaw/openclaw/pull/154920) | fix(update): keep the failing step's cause in the failure summary | update / cli | 更新失败摘要不再丢失具体失败步骤的原因 |
| [#155207](https://github.com/openclaw/openclaw/pull/155207) | fix(codex): reset native context after history cuts | codex / qa-lab | 修复 Codex 原生对话在回溯/分支切换后仍记住已删除轮次的问题 |
| [#154839](https://github.com/openclaw/openclaw/pull/154839) | fix: respect role model restrictions in model pickers | web-ui / gateway | 修复受限角色在模型选择器中收到无权限选项的问题 |
| [#154522](https://github.com/openclaw/openclaw/pull/154522) | feat: run Code Mode on Node or isolated QuickJS | code-mode | Code Mode 不再耦合 QuickJS-WASI，支持 Node 执行器或隔离 QuickJS |
| [#153340](https://github.com/openclaw/openclaw/pull/153340) | feat(plugins): add dynamic two-stage skill & tool pre-filtering | plugins | 动态两阶段技能与工具预过滤，降低每次交互的 prompt token 开销（~1,800+ tokens/轮） |
| [#153625-153629](https://github.com/openclaw/openclaw/pull/153625) | feat(swarm): cognitive profiles / mixed-phase assessments / candidate manifests / diagnostics | agents / swarm | 4 个连续 PR 构建 Liquid Software Factory 搜索架构的可观测性与可复现性层 |

**整体进展评估**：今日合并的 PR 覆盖了**崩溃修复（P0×1, P1×3）、体验优化（UI/CLI）、架构演进（Code Mode 解耦、Swarm 诊断层）、工具链加固（更新流程健壮性）**四个维度，项目在功能交付的同时明显向稳定性与可维护性倾斜。

---

## 4. 社区热点

### 评论数 Top 5 Issues（今日活跃）

| Issue | 标题 | 评论 | 👍 | 核心诉求 |
|---|---|---|---|---|
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | Subagent completion silently lost — no retry, no notification, no auto-restart on timeout | 29 | 2 | 子智能体超时后结果被静默丢弃，期望自动重试/通知/重启 |
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | Codex PreToolUse native hook relay spawns CPU-bound openclaw-hooks processes and stalls gateway RPC | 25 | 2 | Codex 原生 hook 中继进程 CPU 占满导致网关 RPC 停滞 |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) | Per-agent cost budget enforcement at the gateway level | 23 | 1 | 网关级 per-agent 成本预算/限额，防止失控消费 |
| [#115908](https://github.com/openclaw/openclaw/issues/115908) | Session transcript projection reconcile can livelock under sustained writes | 22 | 0 | 持续写入下会话记录投影进入无收敛重建循环，阻塞主线程 |
| [#48003](https://github.com/openclaw/openclaw/issues/48003) | Steer mode does not inject messages mid-turn for main sessions | 20 | 4 | `messages.queue.mode: "steer"` 无法在主会话运行中途注入消息 |

**社区诉求分析**：
- **子智能体可靠性**（#44925）和**会话状态一致性**（#115908, #48003）是当前最集中的不满来源，用户期望 OpenClaw 在多智能体编排场景下提供与单智能体同等的可靠保证。
- **成本控制**（#42475）成为生产用户的新刚需，反映 OpenClaw 正从个人助手向企业级平台演进。
- **Codex 集成稳定性**（#91009）持续引发关注，与 PR #155207（Codex 上下文重置）形成呼应，说明 Codex 扩展是当前最活跃也最脆弱的集成点。

---

## 5. Bug 与稳定性

### 今日报告/活跃的严重 Bug（按严重程度排列）

| 级别 | Issue | 描述 | 已有 Fix PR |
|---|---|---|---|
| **P0** | [#91009](https://github.com/openclaw/openclaw/issues/91009) | Codex PreToolUse hook 中继进程 CPU 占满导致网关 RPC 停滞 | ❌ 无 |
| **P0** | [#146637](https://github.com/openclaw/openclaw/issues/146637) | 2026.9.3 → 2026.9.4 npm 更新在 Linux Mint 全局安装交换阶段失败 | ✅ #154920（保留失败原因） |
| **P0** | [#154114](https://github.com/openclaw/openclaw/issues/154114) | `openclaw update` 候选 rehearsal 因 "No usable inference route" 失败，但网关实际有可用模型认证 | ❌ 无 |
| **P1** | [#44925](https://github.com/openclaw/openclaw/issues/44925) | 子智能体完成结果静默丢失（超时无通知/无重启） | ❌ 无 |
| **P1** | [#115908](https://github.com/openclaw/openclaw/issues/115908) | 会话记录投影在持续写入下活锁，阻塞主线程 | ❌ 无 |
| **P1** | [#48003](https://github.com/openclaw/openclaw/issues/48003) | Steer mode 无法在主会话中途注入消息 | ❌ 无 |
| **P1** | [#97616](https://github.com/openclaw/openclaw/issues/97616) | OpenClaw 泄漏未回收的 hook/tool 子进程，僵尸积累导致运行时退化 | ❌ 无 |
| **P1** | [#148707](https://github.com/openclaw/openclaw/issues/148707) | 2026.9.4 回归：第二 run 位移同会话飞行中 turn 导致回复丢失 | ❌ 无 |
| **P1** | [#40001](https://github.com/openclaw/openclaw/issues/40001) | Write 工具无 append 模式，cron 会话覆盖共享文件导致静默数据丢失 | ❌ 无 |
| **P1** | [#72015](https://github.com/openclaw/openclaw/issues/72015) | active-memory 阻塞回复 + QMD 启动过载多智能体网关 | ❌ 无 |
| **P1** | [#121187](https://github.com/openclaw/openclaw/issues/121187) | 父智能体 NO_REPLY 被当作缺失输出重试 | ❌ 无 |
| **P2** | [#137729](https://github.com/openclaw/openclaw/issues/137729) | 未加保护的 `.trim()` 调用导致 TypeError 崩溃（修复模式已存在于代码库其他位置） | ❌ 无 |
| **P2** | [#154571](https://github.com/openclaw/openclaw/issues/154571) | 外部插件加载时 `/tmp/openclaw-plugin-build-*` 捕获目录泄漏（~430 MB/轮） | ❌ 无 |
| **P2** | [#74586](https://github.com/openclaw/openclaw/issues/74586) | AM embedded run 中止 memory_search 工具调用但误分类为超时 | ❌ 无 |
| **P2** | [#53408](https://github.com/openclaw/openclaw/issues/53408) | 长对话后 write/exec 工具参数被静默丢弃 | ❌ 无 |
| **P2** | [#54409](https://github.com/openclaw/openclaw/issues/54409) | 飞书插件 per-chat 串行队列阻塞 followup queue | ❌ 无 |

**稳定性总结**：P0 级别 Bug 3 个（其中 2 个与更新流程相关，1 个为 Codex 集成 CPU 死锁），P1 级别 10 个。已有 fix PR 覆盖的仅 1 个（#146637 通过 #154920 部分缓解），**P0/P1 Bug 的 PR 覆盖率为 0%**，是当前最大的稳定性风险。

---

## 6. 功能请求与路线图信号

### 高价值功能请求（可能纳入下一版本）

| Issue | 功能 | 信号强度 | 判断依据 |
|---|---|---|---|
| [#42475](https://github.com/openclaw/openclaw/issues/42475) | 网关级 per-agent 成本预算 | ★★★★★ | 生产化刚需，与 #67419（token 开销）形成合力 |
| [#14785](https://github.com/openclaw/openclaw/issues/14785) | 工具 schema token 开销优化（~3,500 tok/session） | ★★★★★ | 已有 PR #153340（动态预过滤）部分覆盖，预计下版合并 |
| [#68596](https://github.com/openclaw/openclaw/issues/68596) | 可配置的流式 watchdog 超时阈值 | ★★★★ | 用户量大，8 👍，针对推理模型场景 |
| [#22438](https://github.com/openclaw/openclaw/issues/22438) | 分层引导文件加载（渐进式上下文控制） | ★★★★ | 与 #67419（引导文件 token 浪费）互补，架构级改进 |
| [#71452](https://github.com/openclaw/openclaw/issues/71452) | message list / chat list 分页支持 | ★★★ | 现有硬编码 25 条限制已不适应生产 |
| [#67413](https://github.com/openclaw/openclaw/issues/67413) | Per-agent dreaming 配置 | ★★★ | 解决 OOM 风险，5 👍 |
| [#53763](https://github.com/openclaw/openclaw/issues/53763) | 内置无头浏览器（Chromium） | ★★★ | 消除外部依赖脆弱性 |
| [#71058](https://github.com/openclaw/openclaw/issues/71058) | 单网关多 Azure/Teams bot 支持 | ★★★ | 企业多租户场景刚需 |
| [#66252](https://github.com/openclaw/openclaw/issues/66252) | Per-agent TTS/STT 配置覆盖 | ★★☆ | 多语言支持的基础能力 |
| [#50291](https://github.com/openclaw/openclaw/issues/50291) | Plugin Hooks 追加上下文（messageId, runId, parentSpanId） | ★★☆ | 可观测性基础设施 |

**路线图信号**：OpenClaw 正在从"单智能体个人助手"向"多智能体企业平台"演进。成本控制、上下文优化、多租户支持、可观测性是下一阶段的核心投资方向。

---

## 7. 用户反馈摘要

### 真实用户痛点提炼

| 痛点类别 | 典型反馈 | 涉及 Issue |
|---|---|---|
| **子智能体可靠性** | "Subagent 跑完结果就没了，没有重试、没有通知、没有自动重启" | #44925 |
| **消息丢失** | "回复在 turn 被位移后完全丢失，连重试都没有" | #148707 |
| **文件写入安全** | "cron 会话直接覆盖了 memory/YYYY-MM-DD.md，之前的数据没了" | #40001 |
| **会话状态混乱** | "Telegram DM 还是跑到 agent:main:main 里去了" | #41165 |
| **多智能体编排** | "并发 agents add 后配置被覆盖，session lock 失败，子进程 detached"

---

## 横向生态对比



以下是 2026-09-22 各开源 AI 智能体项目的「今日重点」摘要：

### 📌 重要更新（5-8 条精选）

1. **OpenClaw 发布 v2026.7.35 (LTS) 稳定版**
   * **更新内容**：OpenClaw 发布了网关专用 `extended-stable` LTS 版本 v2026.7.35，包含关键安全更新、可靠性与性能修复，以及新模型支持。
   * **影响或意义**：为生产网关用户提供稳定基准，但需注意插件兼容性（如 Codex、active-memory）与数据库 schema 变更风险，建议先在测试环境验证再滚动升级。
   * **项目主页**：[github.com/openclaw/openclaw](https://github.com/openclaw/openclaw)

2. **OpenClaw 修复非 ASCII 字符附件导致的网关崩溃循环 (P0)**
   * **更新内容**：合并 PR [#155121](https://github.com/openclaw/openclaw/pull/155121)，修复了飞书等渠道转发附件含 CJK（中文、日文、韩文）字符时网关崩溃重启的致命问题。
   * **影响或意义**：消除了特定多语言输入场景下的 P0 级别服务中断风险，保障了网关在处理国际化字符时的稳定性。
   * **项目主页**：[github.com/openclaw/openclaw](https://github.com/openclaw/openclaw)

3. **Hermes Agent 发布 v0.21.4 累积补丁版本**
   * **更新内容**：Hermes Agent 发布 v0.21.4 (v2026.9.21) 补丁版本，汇总了自 v0.21.3 以来的约 1,800 个合并 PR，重点面向下游消费者（Docker、Hermes Cloud、托管部署）。
   * **影响或意义**：展现了极高的开发迭代速度，为容器化与托管用户提供了包含大量修复与优化的稳定快照。
   * **项目主页**：[github.com/nousresearch/hermes-agent](https://github.com/nousresearch/hermes-agent)

4. **Hermes Agent 升级上下文缓存与压缩机制**
   * **更新内容**：合并多项关键 PR（如 [#118337](https://github.com/nousresearch/hermes-agent/pull/118337) 引入 `cache_ttl: auto` 自动 tiers，以及 [#118568](https://github.com/nousresearch/hermes-agent/pull/118568) 等修复原生 checkpoint 溢出警告），实现人机会话 1 小时、机器调度 5 分钟的自动缓存 tiers，并修复了压缩锚点失效问题。
   * **影响或意义**：显著降低了长会话下的 Token 开销与内存溢出风险，提升了大模型上下文窗口的健壮性与经济性。
   * **项目主页**：[github.com/nousresearch/hermes-agent](https://github.com/nousresearch/hermes-agent)

5. **CoPaw 完成模型层与应用控制平面的重大架构重构**
   * **更新内容**：合并 `feat(providers): unify model discovery, pricing, selection and thinking controls` ([#7899](https://github.com/agentscope-ai/CoPaw/pull/7899)) 和 `feat

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



好的，这是根据您提供的 NanoBot (github.com/HKUDS/nanobot) GitHub 数据生成的 2026-09-22 项目动态日报。

---

### **NanoBot 项目动态日报 (2026-09-22)**

#### **1. 今日速览**

NanoBot 项目在过去24小时内展现出极高的开发活跃度，主要由社区贡献者驱动。核心焦点集中于 **WebUI 功能的重大增强** 和 **核心运行时稳定性修复**。项目整体健康度优秀，PR 提交数量多（28条），且多数为高价值的功能新增或关键 Bug 修复，显示出项目正处于一个活跃的功能迭代期。

#### **2. 版本发布**

*   **无新版本发布**。当前开发分支活动频繁，预计新版本将在相关 PR 合并后发布。

#### **3. 项目进展**

今日有 4 条 PR 状态更新（已合并/关闭），标志着多项工作的完成：
*   **PR #5840 [CLOSED]**: 标准化了 CLI 日志，增加了请求/会话关联 ID，并修复了多处日志记录问题。这将极大提升问题排查效率和系统可观测性。
*   **PR #5641 [CLOSED]**: 修复了 iOS PWA 应用中的多个体验问题，包括侧边栏点击响应和状态栏显示，提升了移动端用户体验。
*   **PR #5857 [OPEN]**: 作为对 Issue #5849 的直接响应，此 PR 为自动上下文压缩功能添加了预算保护，防止因历史记录过长导致的死锁问题。
*   **PR #5846 [OPEN]**: 针对 Issue #5843 报告的 BUILD 阶段延迟问题，增加了结构化的调试计时事件，有助于性能瓶颈的定位。

**整体迈进**：项目正从功能验证和 Bug 修复阶段，迈向用户体验优化和系统可观测性建设的新阶段。WebUI 和核心代理逻辑是两大主要推进方向。

#### **4. 社区热点**

今日社区讨论的焦点高度集中在 **WebUI 的现代化改造** 上。贡献者 Re-bin 提交了大量高价值的 PR，覆盖了链接预览、子任务管理、命令面板、Mermaid 图表渲染等多个方面。这些 PR 虽然评论数未显示，但其主题的一致性和深度表明社区正围绕 WebUI 进行一次集中升级。

*   **最活跃的贡献者**: 用户 `Re-bin` 提交了 7 个与 WebUI 相关的 PR（#5847, #5848, #5850, #5851, #5852, #5853, #5854, #5856），展现了强大的开发能力。
*   **核心诉求**: 社区期望获得一个功能更丰富、交互更直观的 Web 管理界面，使其不仅能聊天，更能成为完整的 AI 操作中心。

#### **5. Bug 与稳定性**

今日报告的 Bug 严重程度中等，均有对应的修复 PR 或正在讨论中。

| 严重程度 | Issue/PR 描述 | 状态 | 链接 |
| :--- | :--- | :--- | :--- |
| **高** | **#5849**: 自动上下文压缩死锁 - `summarize_transcript` 函数无令牌预算保护，导致历史记录超过限制后无法恢复。 | **已修复** | [PR #5857](https://github.com/HKUDS/nanobot/pull/5857) |
| **中** | **#5843**: 长会话 BUILD 阶段延迟 - 用户操作后需等待10秒以上才开始 LLM 调用。 | **诊断中** | [PR #5846](https://github.com/HKUDS/nanobot/pull/5846) |
| **低** | **#5770**: 移动端侧边栏 Bug - 打开侧边栏会错误显示搜索按钮和提示框。 | **已关闭** | [Issue #5770](https://github.com/HKUDS/nanobot/issues/5770) |

#### **6. 功能请求与路线图信号**

*   **新增内置 Provider**: PR #5845 提议添加 **Opper** 作为内置网关提供商，表明项目社区希望增强其多模型支持能力，路线图上可能包括更多类似集成。
*   **可复用 JEV 客户端**: PR #5825 引入了一个用于 OpenRouter 决策端点的可复用客户端，这为未来实现心跳逻辑、Shell 策略等高级功能奠定了基础，是重要的基础设施建设。
*   **命令系统增强**: PR #5854 提议添加带管理 UI 的作用域提示命令，这表明项目正朝着更强大的可编程性和工作流自动化方向发展。

#### **7. 用户反馈摘要**

*   **痛点**:
    *   **上下文管理不可靠**: 用户 `Krislu1221` 明确指出自动压缩路径的缺陷，这影响了长对话的可靠性。
    *   **性能不稳定**: 用户 `Lucky314159` 报告了明显的交互延迟，这在长会话中尤为突出，影响了用户体验。
*   **场景**: 用户在使用 `nanobot gateway` 进行长时间交互式开发或聊天时，遇到了功能失效和性能下降的问题。
*   **反馈**: 社区反馈以 Bug 报告为主，问题描述清晰、可复现，表明用户群体具有一定的技术背景，反馈质量较高。

#### **8. 待处理积压**

*   **PR #4819**: 标签 `[conflict]` 表明此 PR 存在合并冲突，已创建近三个月（2026-07-06），需要维护者介入解决冲突并合并，其修复的内存锁问题是重要的稳定性改进。
*   **PR #4820**: 同样创建于 2026-07-06，修复了 web_fetch 的 URL 校验问题，虽小但属于安全性/稳定性改进，建议优先处理。
*   **PR #5412**: 创建于 2026-08-17，修复后台进程输出缓冲问题，对于日志完整性和调试至关重要，已积压一个多月。

**建议**: 维护者应优先解决上述长期未合并的 PR 的冲突问题，并关注 Issue #5843 的性能问题诊断进展。WebUI 系列 PR 的整合测试和合并也应尽快提上日程。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Thinking Process:

1.  **Understand the Goal**: The user wants a daily project report (dated 2026-09-22) for the open-source project `Hermes Agent` (github.com/nousresearch/hermes-agent) based on the provided GitHub data (Issues, PRs, Releases). The report must be structured, objective, professional, data-driven, and highlight project health. Links to GitHub items must be included.

2.  **Analyze the Input Data**:
    *   **Date of Report**: 2026-09-22 (covering the last 24 hours up to the data snapshot).
    *   **Overall Stats**:
        *   Issues: 50 updated (48 new/active, 2 closed).
        *   PRs: 50 updated (43 pending merge, 7 merged/closed).
        *   New Releases: 1 (v2026.9.21 / v0.21.4).
    *   **Latest Release**:
        *   `v2026.9.21` / Hermes Agent v0.21.4.
        *   Patch release rolling up ~1,800 PRs merged since v0.21.3. Stable tagged release for downstream consumers (Docker, Hermes Cloud, hosted deployments).
    *   **Top Issues (by comments, top 30 shown, key highlights)**:
        *   #88584 [OPEN] [invalid, comp/cron, P3] Automated Nous integration is blocked (127 comments). Conflicts in `cron/jobs.py`. Nous-to-Enterkey merge conflict.
        *   #77111 [OPEN] [type/feature, innovation, P3, needs-decision] [RFC] RealtimeVoiceProvider ABC — four competing duplex-voice PRs need an interface (27 comments).
        *   #118029 [OPEN] [type/feature, backend/ssh, comp/gateway, P3, needs-decision, comp/desktop, area/install-update] feat(desktop): one pinned, verified rollout control plane for managed SSH installations (9 comments).
        *   #96355 [OPEN] [type/bug, comp/tools, tool/delegate, P2] delegate_task can return completed when output_schema validation fails (8 comments).
        *   #70108 [OPEN] [type/bug, P2, sweeper:risk-session-state, comp/desktop, area/sessions] Desktop intermittently renders duplicate assistant replies (7 comments).
        *   #66429 [OPEN] [type/bug, comp/agent, provider/kimi, P2...] Hermes empty assistant messages (7 comments).
        *   #82052 [OPEN] [type/bug, comp/agent, provider/xai, area/auth, P3] xAI 403 unauthenticated:bad-credentials classified non-retryable (5 comments).
        *   #63200 [OPEN] [type/bug, comp/agent, provider/deepseek, P2] Empty-content assistant messages with tool_calls break DeepSeek API (HTTP 400) (5 comments).
        *   #118484 [OPEN] [type/bug, comp/gateway, P2...] truncate_message emits chunks over the platform limit when a fence has no newline after it (4 comments).
        *   #115011 [OPEN] [type/bug, comp/gateway, platform/discord, area/auth, P2...] Discord adapter: auth gates disagree on channel-only grants (4 comments).
        *   #60848 [OPEN] [type/bug, comp/plugins, platform/telegram, P3...] Telegram empty-message guard misses zero-width characters (4 comments).
        *   #118487 [OPEN] [type/bug, comp/gateway, platform/discord, P1...] Discord liveness watchdog dies after first socket_closed strike (3 comments).
        *   #117915 [OPEN] [type/bug, comp/agent, comp/cli, area/config, P2...] default compression.threshold_tokens silently overrides compression.model_thresholds ratio on 1M-window models (3 comments).
        *   #71733 [OPEN] [type/bug, P1, sweeper:risk-session-state, comp/desktop, area/sessions] Desktop chat shows only assistant replies — user prompt bubbles invisible mid-session (P0/urgent) (3 comments).
        *   #108045 [OPEN] [type/bug, P2...] concurrent turns crosstalk — single unscoped-stream pin slot reattributes background stream (3 comments).
        *   #117750 [OPEN] [type/bug, comp/agent, P2...] Pruning carried-forward tool payloads duplicates and reorders display history (3 comments).
        *   #118538 [OPEN] [type/bug, comp/plugins, P3, area/profiles] OMH pre_tool_call vetoes ALL tools on multiplex gateway (2 comments).
        *   #118535 [OPEN] [type/bug, comp/cron, P2] cron: manual run with extra_prompt is a no-op when a gate script is quiet (2 comments).
        *   #118333 [OPEN] [type/bug, comp/agent, area/config, P3] Truncation copy says "raise max_tokens" — setting was removed (2 comments).
        *   #118499 [OPEN] [type/bug, comp/cli, area/config, P3] max_in_progress_per_profile is enforced per board (2 comments).
        *   #118493 [OPEN] [type/bug, comp/tools, tool/file, P2] file-name search lists merged-stderr diagnostics as files (2 comments).
        *   #118505 [OPEN] [type/bug, comp/cli, P1] kanban gc accepts negative/zero retention days and deletes all event history and worker logs (2 comments).
        *   #118026 [OPEN] [type/bug, P0, sweeper:risk-platform-windows, comp/desktop, platform/windows] hermes_state_lockguard.py 未处理 fcntl.F_RDLCK 缺失，导致后端启动失败 (Windows crash) (2 comments).
        *   #118481 [OPEN] [type/bug, comp/desktop, area/sessions] Desktop paints "Result unavailable" for sealed tool rows (2 comments).
        *   #113222 [OPEN] [type/bug, comp/agent, tool/delegate, P2...] async delegate_task batch never reports when child heartbeat retired as stale (2 comments).
        *   #107141 [CLOSED] [type/bug, comp/tools, tool/mcp, P2...] MCP schema sanitize chain prunes required inside oneOf/not/if branches (2 comments).
        *   #97751 [OPEN] [type/bug, comp/agent, provider/ollama, P2...] ollama-cloud deepseek models misclassified as DeepSeek echo-back endpoint (2 comments).
        *   #118320 [CLOSED] [type/feature, comp/gateway, P3...] Remove multiplexing (1 comment).
        *   #118354 [OPEN] [type/feature, comp/cron, P3] no_agent cron script failure erased by next successful run (1 comment).
        *   #106960 [OPEN] [type/bug, comp/cli, P3, comp/dashboard...] systemd dashboard inventoried as manual serve (1 comment).
    *   **Top PRs (by comments, top 20 shown)**:
        *   #118488 [OPEN] feat(catalog): add aphrodite plugin (CCR compression) (Plugin Catalog)
        *   #118458 [OPEN] plugin-catalog: add aska-digital community plugins (protean-model-sync, tamahermes, protean-subagent-viewer)
        *   #118335 [OPEN] Add mnemostack to the plugin catalog (memory)
        *   #118462 [OPEN] feat(catalog): add antigravity-subscription-directsdk plugin
        *   #118575 [OPEN] [ci-reviewed] fix(scratch): scratch dir prunes after 24h idle (was 72h top-level age)
        *   #118466 [OPEN] catalog: add hermes-discord-rpc
        *   #118322 [OPEN] feat(catalog): add hermes-zh simplified chinese localization plugin
        *   #118308 [OPEN] feat(plugin-catalog): Orbit 0.2.2 bundles Devplan Studio and portable endpoints
        *   #118299 [OPEN] plugin-catalog: add hermes-lcm memory plugin
        *   #118340 [OPEN] plugin-catalog: add memory-zvec (community Zvec memory backend)
        *   #118574 [OPEN] fix(desktop): fade status drawer content before folding
        *   #118573 [OPEN] mcp: strip invisible unicode TAG chars from server-controlled metadata
        *   #118571 [OPEN] fix(desktop): keep a session's own colour while the session is working
        *   #99858 [CLOSED] fix(compaction): re-estimate post-tool pressure after native checkpoints
        *   #118378 [CLOSED] fix(compaction): invalidate pre-checkpoint usage anchors
        *   #118568 [CLOSED] fix(compaction): native checkpoint no longer trips blocked-overflow warning (salvage of #118378)
        *   #108953 [OPEN] fix(desktop): keep titlebar tools clear of third-party caption buttons
        *   #118337 [CLOSED] feat(caching): cache_ttl: auto — 1h tier for human-paced sessions, 5m for subagents/cron/oneshot
        *   #118543 [OPEN] fix(dashboard): preserve 64-bit channel IDs through JSON round-trip
        *   #118567 [OPEN] feat(moa): declare preset slots non-interactively via --slots/--slots-file

3.  **Drafting the Report Structure**:

    *   **Header**: Daily Report for Hermes Agent - 2026-09-22.
    *   **1. 今日速览 (Today's Overview)**:
        *   Summarize overall activity: High velocity, release of stable v0.21.4 rolling up ~1,800 PRs, massive activity in plugin catalog additions, several critical bug fixes merged (compaction, caching, scratch dir pruning), but still high volume of P0-P2 bugs open (especially Windows lock crash, Discord watchdog, Desktop rendering bugs).
        *   Keep it to 3-5 sentences. Data-driven: 50 issues, 50 PRs, 1 release.
    *   **2. 版本发布 (Release)**:
        *   Hermes Agent v0.21.4 (v2026.9.21).
        *   Patch release rolling up ~1,800 PRs since v0.21.3.
        *   Target: downstream consumers (Docker images, Hermes Cloud, hosted deployments).
        *   No major breaking changes mentioned, but it's a cumulative roll-up, meaning downstream consumers get a stable snapshot. Note: full curated notes deferred, but the volume of fixes (especially compaction, caching, dashboard 64-bit IDs) is massive.
    *   **3. 项目进展 (Project Progress / Merged PRs)**:
        *   Highlight key merged/closed PRs:
            *   Compaction fixes: #118568, #118378, #99858 (Native checkpoint usage anchors, post-tool pressure re-estimation). Crucial for long sessions.
            *   Caching: #118337 (`cache_ttl: auto` - 1h tier for human sessions, 5m for machine-paced). Excellent UX improvement for token costs.
            *   Scratch dir pruning: #118575 (prunes after 24h idle subtree-aware).
            *   Plugin catalog expansion: Massive influx of PRs adding memory plugins (mnemostack, hermes-lcm, memory-zvec), localization (hermes-zh), model sync, Discord RPC, aphrodite CCR compression, Orbit browser workspace. This shows a very vibrant ecosystem.
            *   MoA non-interactive slot declaration: #118567.
            *   Dashboard 64-bit channel ID fix: #118543.
    *   **4. 社区热点 (Community Hotspots / Top Issues & PRs)**:
        *   Issue #88584 (127 comments): Automated Nous integration is blocked due to merge conflicts in `cron/jobs.py`. High attention needed from maintainers to resolve the branch/merge pipeline.
        *   Issue #77111 (27 comments): RFC for RealtimeVoiceProvider ABC. Competing duplex-voice PRs need a standard interface. Shows architectural planning for voice features.
        *   Plugin Catalog PRs (#118488, #118458, #118335, #118462, etc.): High activity in community plugin submissions. Shows strong ecosystem engagement, but also potential review burden on maintainers.
    *   **5. Bug 与稳定性 (Bugs & Stability)**:
        *   Sort by severity (P0/P1 first):
            *   **P0/P1 Critical Bugs**:
                *   #118026 (Windows): `hermes_state_lockguard.py` crashes on startup due to missing `fcntl.F_RDLCK`. (Crash on launch, very severe).
                *   #71733 (Desktop): User prompt bubbles invisible mid-session (only assistant replies shown). P0/urgent UX bug.
                *   #118505 (CLI/Kanban): `kanban gc` with negative/zero retention days deletes all event history and worker logs. Severe data loss bug.
                *   #118487 (Discord): Liveness watchdog dies after first strike, zombie adapter, no reconnect.
            *   **P2/P3 Important Bugs**:
                *   #96355 (delegate_task): Schema validation failure but task reports `completed`.
                *   #70108 (Desktop): Duplicate assistant replies rendering.
                *   #66429 & #63200: Empty assistant messages with/without tool_calls causing loops or breaking DeepSeek API (HTTP 400).
                *   #82052: xAI 403 OAuth token refresh issue (non-retryable classification).
                *   #117915: Compression threshold config override issue.
                *   #118484: truncate_message fence bug.
                *   #115011: Discord auth gates mismatch.
                *   #118538: OMH pre_tool_call vetoes all tools on multiplex gateway.
                *   #118535: cron manual run no-op with quiet gate script.
                *   #118493: file-name search lists stderr diagnostics as files.
                *   #97751: ollama-cloud deepseek misclassification.
                *   #106960: systemd dashboard inventoried as manual serve.
        *   Mention if there are fix PRs: Some compaction fixes are closed/merged (#118568, etc.), but most user-facing bugs are still open and need triage.
    *   **6. 功能请求与路线图信号 (Feature Requests & Roadmap Signals)**:
        *   RealtimeVoiceProvider ABC (#77111): Indicates upcoming real-time voice provider integration.
        *   SSH Rollout plane (#118029): Enterprise desktop SSH managed installations security interlock.
        *   Remove multiplexing (#118320 - closed, but shows user friction with the multiplex feature, might lead to configuration options).
        *   Plugin catalog trend: Memory backends (mnemostack, lcm, zvec) and CCR compression (aphrodite) are hot topics, indicating users want more robust memory and context management.
    *   **7. 用户反馈摘要 (User Feedback Summary)**:
        *   Extract real user pain points:
            *   Windows users facing hard crash on launch due to `fcntl` import issue (#118026).
            *   Frustration with multiplexing feature (#118320, closed but requested revert/isolation).
            *   Confusion over removed settings (e.g., `max_tokens` in #118333, where truncation copy still references it).
            *   UX issues in Desktop (duplicate messages, invisible prompts, "Result unavailable" rows).
            *   Configuration silent overrides (e.g., compression threshold defaults in #117915, kanban limits in #118499).
    *   **8. 待处理积压 (Backlog / Maintenance Debt)**:
        *   Highlight long-standing issues:
            *   #88584 (since 2026-08-17, 127 comments): Blocked automated integration. Needs immediate attention to unblock CI/CD pipelines.
            *   #77111 (since 2026-08-02, 27 comments): Architectural decision on Voice provider ABC.
            *   #70108 (since 2026-07-23), #66429 (since 2026-07-17), #63200 (since 2026-07-12): Long-standing message formatting bugs. Indicates core agent message builder needs refactoring.
            *   The massive influx of Plugin Catalog PRs (at least 7 today) might require standardizing the catalog review process to avoid maintainer bottleneck.

4.  **Refining Language and Tone**:
    *   Objective, professional, data-driven.
    *   Use clear headings and bullet points.
    *   Include GitHub links for all mentioned issues and PRs.
    *   Translate technical terms accurately and explain their impact clearly (e.g

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



好的，这是根据您提供的 PicoClaw GitHub 数据生成的 2026-09-22 项目动态日报。

---

### **PicoClaw 项目动态日报 - 2026-09-22**

**数据来源：** [github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw)

---

#### **1. 今日速览**

PicoClaw 项目在过去24小时内保持了中等活跃度。社区互动集中在几个关键点上：一个关于 Web UI 性能的 Bug 报告引发了较多讨论，一个关于 QQ 通道的陈旧 Issue 被正式关闭，同时有一个关于 OAuth 令牌刷新的修复 PR 和一个 IRC 功能增强 PR 处于活跃状态。整体来看，项目在积极修复已知问题并推进特定功能，但暂无合并的 PR 或新版本发布。

#### **2. 版本发布**

*   **无新版本发布。** 最新发布仍为历史版本，今日无更新。

#### **3. 项目进展**

*   **重要合并 PR：** 无。
*   **今日关闭 PR：**
    *   **PR #3384** - **[CLOSED] Misplaced PR, please ignore.** (作者: stpinkie)
        *   **说明：** 这是一个误提交的 PR，已被维护者关闭，对项目无实质影响。
        *   **链接：** [sipeed/picoclaw PR #3384](https://github.com/sipeed/picoclaw/pull/3384)

**进展评估：** 今日无代码合并，项目整体向前推进的步伐暂时放缓，主要精力可能集中于问题排查和社区互动。

#### **4. 社区热点**

*   **最活跃 Issue：** **#3281 [OPEN] [BUG] Web UI chat input is very laggy when history has a little bit long**
    *   **热度指标：** 13 条评论，2 👍
    *   **链接：** [sipeed/picoclaw Issue #3281](https://github.com/sipeed/picoclaw/issues/3281)
    *   **分析：** 这是目前社区讨论最集中的问题。用户反馈在 Web UI 中，当会话历史记录较长时，输入框会变得非常卡顿。这指向了前端渲染性能或消息历史加载策略的潜在问题，是影响用户体验的关键 Bug，亟需修复。

#### **5. Bug 与稳定性**

*   **严重 Bug：**
    *   **#3281 - Web UI 输入框在长历史记录下严重卡顿**
        *   **严重程度：高** - 直接影响核心用户界面的可用性。
        *   **状态：** 开放，尚无修复 PR。
        *   **链接：** [sipeed/picoclaw Issue #3281](https://github.com/sipeed/picoclaw/issues/3281)

*   **已解决/已关闭 Bug：**
    *   **#3365 - QQ channel fails with 401 "Authorization参数格式错误"**
        *   **严重程度：中** - 导致特定通道功能失效。
        *   **状态：已关闭** - 标记为 `stale`（陈旧），可能意味着问题已通过后续版本（如 botgo v0.2.1+resty v2.17+ 的组合）或用户自行升级得到解决。
        *   **链接：** [sipeed/picoclaw Issue #3365](https://github.com/sipeed/picoclaw/issues/3365)

#### **6. 功能请求与路线图信号**

*   **主要功能请求：**
    *   **#3366 - [Feature] Add support for OpenAI compatible providers**
        *   **诉求：** 增加对兼容 OpenAI API 的自定义提供商的支持，例如用于自托管的路由器（如 9Router）。
        *   **链接：** [sipeed/picoclaw Issue #3366](https://github.com/sipeed/picoclaw/issues/3366)
        *   **路线图信号：** 此请求若被采纳，将显著增强 PicoClaw 的灵活性和可扩展性，使其能接入更多样的 AI 后端服务。

*   **进行中的功能 PR：**
    *   **PR #3354 - [OPEN] feat(irc): assemble IRCv3 multiline messages**
        *   **目标：** 增加对 IRCv3 `draft/multiline` 协议的支持，使长或多行 IRC 消息能作为一条完整消息送达。
        *   **链接：** [sipeed/picoclaw PR #3354](https://github.com/sipeed/picoclaw/pull/3354)
        *   **路线图信号：** 表明 IRC 通道的兼容性和稳定性仍在持续改进中。

#### **7. 用户反馈摘要**

*   **痛点与不满：**
    *   **Web UI 性能问题：** 用户明确反馈长会话下的输入延迟问题（#3281），这表明当前版本的 Web 前端在处理大量数据时存在性能瓶颈。
    *   **特定环境兼容性问题：** Issue #3365 的报告揭示了在特定硬件（Orange Pi 3B）和依赖版本组合下，QQ 通道的认证失败问题，反映了对非主流平台和特定依赖版本的支持挑战。

*   **功能期望：**
    *   用户希望 PicoClaw 能够更灵活地集成第三方 AI 服务（#3366），反映出社区对开放生态的期待。

#### **8. 待处理积压**

*   **需关注的 Issue：**
    *   **#3281 (Web UI 卡顿)**：高优先级，直接影响核心体验，需尽快定位并修复。
    *   **#3366 (OpenAI 兼容提供商)**：重要的功能需求，可能影响用户选型，建议纳入产品路线图进行评估。
*   **需关注的 PR：**
    *   **PR #3378 (OAuth Scope 修复)**：一个重要的安全相关修复，应优先审查并合并，以确保令牌刷新的正确性。
    *   **PR #3354 (IRC 多行消息)**：对特定通道的功能增强，需评估其与现有 IRC 逻辑的兼容性后决定合并时机。

---
**报告生成时间：** 2026-09-22
**下次更新：** 2026-09-23

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



好的，这是根据您提供的 NanoClaw GitHub 数据生成的 2026-09-22 项目动态日报。

---

### **NanoClaw 项目动态日报 - 2026-09-22**

#### **1. 今日速览**
NanoClaw 项目在2026-09-22日的活跃度呈现**高 PR 提交、低 Issue 讨论**的特点。项目今日有7条 Pull Request 活动（6条待合并，1条已关闭），表明开发工作持续活跃，多个功能模块正在并行推进。然而，仅有1条新 Issue 被报告，且该 Issue 目前没有社区讨论，反映出项目当前的用户反馈渠道可能不够畅通，或现有用户群体相对稳定。整体健康度良好，但需关注社区互动性的维持。

#### **2. 版本发布**
无新版本发布。

#### **3. 项目进展**
今日有 **1 条 PR 被关闭**，标志着一个重要的稳定性修复完成：
- **PR #2689 [CLOSED] fix(signal): DM platform ID consistency, isMention, and ask_question/approval delivery** (作者: klingel)
    - **链接**: [nanocoai/nanoclaw#2689](https://github.com/nanocoai/nanoclaw/pull/2689)
    - **说明**: 该 PR 修复了 Signal 适配器的多个关键问题，包括私聊（DM）消息被静默丢弃、平台 ID 格式不一致以及 `ask_question`/`approval` 功能的投递失败。这些修复显著提升了 Signal 平台的可靠性和功能完整性，是项目在多渠道支持上迈出的重要一步。

另有 **6 条 PR 处于待合并状态**，涵盖了 Signal 适配器优化、CLI 工具增强、安装脚本改进等多个方面，表明项目正处于一个积极的开发周期中。

#### **4. 社区热点**
今日社区讨论度较低，没有出现评论数或👍反应特别突出的 Issue 或 PR。
- 最活跃的议题是 **Issue #3860**，但其评论和👍数均为0，尚无社区成员参与讨论。这提示维护者可能需要对新报告的 Issue 进行主动引导，以促进社区交流。

#### **5. Bug 与稳定性**
今日报告 **1 个新 Bug**，严重程度中等，但已有明确的根因分析。
- **Issue #3860 [OPEN] restart.sh: FORCE_COLOR makes the restart timestamp unparseable (Invalid restart time)**
    - **链接**: [nanocoai/nanoclaw#3860](https://github.com/nanocoai/nanoclaw/issues/3860)
    - **严重程度**: 中等。导致重启时间戳无法解析，影响运维脚本的可靠性。
    - **问题描述**: `setup/lib/restart.sh` 脚本使用 `Date.now()` 输出裸数字作为时间戳，当 pnpm 设置 `FORCE_COLOR=1` 环境变量时，Node.js 会为控制台输出添加颜色代码，导致生成的字符串不再是纯数字，从而无法被正确解析。
    - **修复状态**: 已明确问题根因，但尚无对应的修复 PR。

**其他稳定性相关活动**：
- 多条待合并 PR 均与稳定性相关，例如 **PR #3311** 旨在修复计划任务错误投递到错误目标的问题，**PR #3273** 旨在修复非 Debian 系统上 Node.js 安装失败的问题。

#### **6. 功能请求与路线图信号**
今日无直接的功能请求型 Issue。但从待合并的 PR 中可以观察到清晰的路线图信号：
- **多渠道支持深化**：PR #3837 和 #3859 分别针对 Signal 和 WhatsApp 平台的附件处理和群组名称解析进行改进，表明项目正继续投入资源完善其多渠道消息能力。
- **开发者体验优化**：PR #3286 和 #3420 分别优化了 `ncl groups restart` 命令和 macOS 状态栏的体验，表明项目关注于提升运维和终端用户的使用便利性。
- **平台兼容性增强**：PR #3273 的修复表明项目正在积极扩展对更多 Linux 发行版的支持。

#### **7. 用户反馈摘要**
今日无直接的用户反馈评论。从唯一的 Issue 中可以提炼出一个明确的用户痛点：
- **痛点**: 用户在使用 `pnpm` 管理的开发或部署环境中，脚本的健壮性会受到环境变量（如 `FORCE_COLOR`）的意外影响。这提示项目在开发脚本时需要更全面地考虑与主流包管理器及常见环境变量的兼容性。

#### **8. 待处理积压**
目前数据中未显示存在长期未响应的重大 Issue 或 PR。所有待处理的 PR 均为近期活动（创建于8月或9月），相对活跃。建议维护者关注 **Issue #3860** 的修复进展，避免其成为一个积压项。

---
**报告生成说明**：本报告基于提供的 GitHub 数据生成，数据范围为过去24小时。报告中的“活跃度”、“健康度”等评估为基于有限数据的定性分析。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>



好的，这是根据您提供的 IronClaw GitHub 数据生成的 2026-09-22 项目动态日报。

---

### **IronClaw 项目动态日报 - 2026-09-22**

#### **1. 今日速览**
IronClaw 项目在过去24小时内活跃度较低，处于版本发布前的静默准备期。主要活动集中在后台：一个关键的扩展功能修复被合并，一个候选版本发布 PR 被关闭，同时项目团队开启了一个新的测试失败分类任务。整体状态健康，开发节奏稳健，正为即将到来的 `1.4.1-rc.1` 版本发布做最后冲刺。

#### **2. 版本发布**
无新版本发布。但项目已进入 `1.4.1-rc.1` 候选版本的发布流程中。

#### **3. 项目进展**
今日有 2 条 PR 更新，均为已关闭状态，标志着两项工作的完成：

*   **修复扩展程序中的提供商实例就绪性问题** (PR #8102)
    *   **链接:** `nearai/ironclaw PR #8102`
    *   **摘要:** 该修复解决了当 Google OAuth 客户端通过 Web UI（管理员配置）而非环境变量进行配置时，Gmail 和 Google Calendar 扩展程序无法激活的问题。此前，OAuth 流程虽能完成，但激活步骤会失败。此修复确保了在不同部署配置下的功能一致性，提升了系统的可靠性和可管理性。
    *   **意义:** 这是一个重要的用户体验和稳定性修复，消除了特定部署场景下的功能障碍，使 Google 生态集成更加健壮。

*   **准备 1.4.1-rc.1 版本发布** (PR #8105)
    *   **链接:** `nearai/ironclaw PR #8105`
    *   **摘要:** 该 PR 旨在将发布包的版本号提升至 `1.4.1-rc.1`，以便自动化的 Cut Ironclaw Release 工作流能够为合并提交打上相应的标签。这是一个标准的版本发布前奏，为正式发布铺平道路。
    *   **意义:** 标志着项目正按照既定节奏向新版本迈进，发布流程自动化程度高。

**整体迈进:** 项目在功能修复和发布准备上稳步推进，尽管合并的 PR 数量不多，但每一条都针对具体问题，体现了务实和稳定的开发风格。

#### **4. 社区热点**
今日社区讨论聚焦于项目质量评估和测试分析。

*   **每日 IronClaw 失败分类 - 2026-09-21** (Issue #8106)
    *   **链接:** `nearai/ironclaw Issue #8106`
    *   **摘要:** 作者 `pranavraja99` 发起了一项任务，对 `officeqa` 基准测试套件中 47 个未通过的任务进行分类。初步分析指出，这些失败绝大多数是“真正的模型质量错误”，例如在特定任务中 DeepSeek-V4-Flash 模型的导航能力不足。
    *   **分析:** 此议题反映了社区对项目核心性能（尤其是底层 AI 模型能力）的深切关注。其背后诉求是希望通过系统性的失败归因，区分是 IronClaw 框架问题还是底层模型能力问题，从而为优化方向提供数据支持。这是项目走向成熟、追求高质量的重要信号。

#### **5. Bug 与稳定性**
*   **Gmail/Google Calendar 扩展程序激活失败** (已修复)
    *   **严重程度:** 高（导致特定集成功能完全不可用）。
    *   **状态:** 已修复，修复 PR #8102 已合并。
    *   **详情:** 当 Google OAuth 客户端通过 Web UI 管理员配置时，扩展程序激活会失败。此问题已通过 PR #8102 解决。

#### **6. 功能请求与路线图信号**
*   **信号来源:** Issue #8106
*   **分析:** 虽然这不是一个直接的功能请求，但它揭示了路线图上的一个重要方向：**持续的模型评估与优化**。社区对底层 AI 模型的质量和特定能力（如复杂导航）有明确期望。未来版本可能会包含针对这些薄弱环节的优化、集成更强大的模型，或提供更灵活的模型配置选项。

#### **7. 用户反馈摘要**
从 Issue #8106 的描述中可以提炼出以下信息：
*   **用户痛点:** 用户期望 IronClaw 能够可靠地处理复杂的办公任务（如 officeqa 套件所示）。当前，某些任务对模型能力的要求超出了现有模型（如 DeepSeek-V4-Flash）的水平，导致失败。
*   **使用场景:** 用户正在使用 IronClaw 进行自动化办公问答，并期望其表现稳定可靠。
*   **反馈性质:** 反馈是建设性和分析性的，而非单纯抱怨。用户（很可能是开发者或研究员）正在主动参与问题诊断，这有助于精准定位问题根源。

#### **8. 待处理积压**
根据提供的数据，目前没有发现长期未响应的重要 Issue 或 PR。最近的 Issue (#8106) 和 PR (#8102, #8105) 均在创建当日或次日得到处理（创建、关闭或合并）。这表明项目当前的维护响应是及时和高效的。

---
**报告生成说明:** 本报告基于提供的 GitHub 数据片段生成，旨在提供客观、数据驱动的项目健康度快照。所有信息均来自 `nearai/ironclaw` 仓库的公开活动。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



好的，这是根据您提供的 GitHub 数据生成的 LobsterAI 项目动态日报。

---

### **LobsterAI 项目动态日报 - 2026-09-22**

**项目健康度评估：** 代码活跃，稳定维护。社区直接互动较少，但问题与功能请求质量较高。

---

#### **1. 今日速览**
LobsterAI 项目在 2026-09-22 日表现出极高的开发活跃度，主要由合并与关闭的 Pull Requests 驱动，共计 15 条，表明开发团队正专注于修复已知问题和优化现有功能。项目整体状态稳定，无新版本发布。社区层面，新增了 2 个 Issues，其中一个为长期存在的 Bug 报告，另一个是合理的功能增强请求，社区互动有限但需求明确。

#### **2. 版本发布**
*   **无新版本发布。**

#### **3. 项目进展**
今日有 15 个 PR 被合并或关闭，标志着多项关键修复和优化的完成，项目稳定性和用户体验得到进一步提升：
*   **核心功能修复：**
    *   **IM 调度功能恢复** (`#2737`)：修复了通过 IM（如飞书）使用原生定时任务（如“提醒我喝水”）的功能，并确保了消息能正确送达飞书账户，提升了集成体验。
    *   **凭证存储优化** (`#2736`)：重构了浏览器凭证存储的访问逻辑，从每次检查改为用户授权后按需访问，并增加了 `requiresRestart` 标志，增强了安全性和用户控制权。
*   **启动与迁移稳定性：**
    *   **旧版数据迁移修复** (`#2719`, `#2732`, `#2734`, `#2735`)：针对从旧版本升级（尤其是 Windows 系统保留旧数据）导致启动失败的问题，增加了多个修复点，包括处理遗留配置文件、解决身份标识冲突等，显著降低了升级阻力。
    *   **Windows 网关修复** (`#2729`)：修复了 Windows 平台上因进程终止确认问题导致的网关重启和一键修复失败，提高了系统可靠性。
    *   **ESM 启动上下文修复** (`#2731`)：修复了安全插件 `nsp-clawguard` 在原生 ESM 模式下因缺少 `__dirname` 等变量而导致的启动崩溃，确保了安全组件的正常加载。
*   **开发与测试优化：**
    *   **测试用例修复** (`#2704`, `#2733`)：修复了在 macOS 上因符号链接导致的测试用例失败问题，使测试套件在不同平台上的表现一致。
    *   **依赖更新** (`#1277`)：将 Electron 相关依赖更新至最新版本，可能包含性能和安全改进。
    *   **更新机制增强** (`#2730`)：为更新程序增加了可选的定向更新候选支持，使更新策略更灵活。
    *   **Web 搜索功能扩展** (`#2739`)：为内置的 Web 搜索技能添加了对 Parallel 引擎的支持，用户无需 API 密钥即可进行匿名搜索，丰富了搜索选项。

#### **4. 社区热点**
今日社区讨论热度较低，但提出的 Issues 聚焦于核心用户体验问题。
*   **最活跃 Issue：** `#2738 [Feature] 支持不重启网关切换工作区，解决网关重启耗时问题`
    *   **链接：** [netease-youdao/LobsterAI#2738](https://github.com/netease-youdao/LobsterAI/issues/2738)
    *   **诉求分析：** 用户明确指出在本机性能有限的情况下，每次切换工作区都需要重启网关，导致超过 10 秒的延迟，严重影响了频繁切换工作区的效率。这是一个非常实际且普遍的痛点，旨在提升工作流的流畅度。

#### **5. Bug 与稳定性**
今日报告的 Bug 数量较少，但有一个长期存在的功能阻塞性问题。
*   **严重 Bug：**
    *   **Tavily MCP 不可用** (`#989`)：用户报告配置了 API 密钥后仍收到 401 未授权错误，导致该功能完全无法使用。此问题自 3 月报告至今未解决，影响依赖此功能的用户。
        *   **状态：** 标记为 `stale`，尚无修复 PR。
*   **稳定性增强（已有修复 PR）：**
    *   上述“项目进展”部分描述的大量合并 PR，其核心目标都是修复特定场景下的启动失败、功能异常和平台兼容性问题，共同构成了对项目稳定性的强力加固。

#### **6. 功能请求与路线图信号**
*   **明确的功能请求：** Issue `#2738` 提出的“不重启网关切换工作区”是一个清晰且合理的功能需求，直接关系到核心用户体验，很可能被纳入未来的开发路线图。
*   **潜在的功能增强：** PR `#2739` 添加的“可选无密钥 Parallel Web 搜索”功能，暗示了项目可能在丰富其内置工具链，降低用户使用门槛，未来可能会看到更多类似的“开箱即用”的功能集成。

#### **7. 用户反馈摘要**
从 Issue `#2738` 的描述中可以提炼出以下用户反馈：
*   **痛点：** 网关重启耗时过长（>10秒），频繁切换工作区的体验很差。
*   **使用场景：** 用户需要在不同的工作区或任务上下文之间快速切换。
*   **期望：** 希望实现工作区的“热切换”，无需重启网关，以提升操作效率。

#### **8. 待处理积压**
需要特别关注以下长期未解决的问题：
*   **关键功能 Bug：** `#989` (Tavily MCP 401 错误) 已存在超过半年，严重阻塞部分用户的工作流，维护者应优先评估并安排修复。
*   **大型功能 PR：** `#998` (选中文本浮动工具栏) 和 `#999` (Cmd+K 命令面板) 是两个功能完整、描述详尽的“过期”PR。它们虽然被标记为 `stale`，但功能本身具有很高价值。维护者需要主动与作者沟通，决定是合并还是将功能作为后续版本的 roadmap。

---
**总结：** LobsterAI 项目正处于一个积极的稳定化阶段，开发重点在于修复历史遗留问题和提升系统健壮性。尽管社区直接互动不多，但提出的 Issue 和 PR 质量较高，指向了明确的用户体验优化方向。项目健康度良好，但需关注长期积压的 Bug 和大型功能 PR 的处理，以避免社区贡献者流失。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>



好的，这是根据您提供的数据生成的 Moltis 项目动态日报。

---

### **Moltis 项目动态日报 (2026-09-22)**

**项目健康度评估：** 健康，开发活跃。项目在语音功能领域有明确的需求和积极的代码贡献，尽管所有新功能和修复目前均处于待合并状态。

---

#### **1. 今日速览**
Moltis 项目在过去24小时内保持了稳定的开发活跃度，核心焦点集中在语音合成功能的扩展上。社区成员 Caldalis 提出了将 VoxCPM 作为本地 TTS 提供商的完整功能请求，并同步提交了实现该功能的 Pull Request。同时，另一位贡献者 mikemikimike 提交了一个针对工具配置的 bug 修复 PR。项目整体进展清晰，但所有新代码均需等待维护者评审和合并。

#### **2. 版本发布**
*   **无新版本发布。**

#### **3. 项目进展**
今日无 PR 被合并，因此项目整体功能集未向前迈进。然而，活跃的 PR 提交表明开发工作正在持续推进：
*   **PR #1283** (`feat(voice): add VoxCPM as a local TTS provider`) 旨在为项目增加一个重要的、高性能的本地 TTS 引擎支持，这将显著增强语音功能的灵活性和离线能力。
*   **PR #1280** (`fix(tools): preserve preset tools for empty active_tools`) 是一个重要的 bug 修复，旨在解决工具配置可能被意外清空的问题，有助于提升系统的稳定性。

这两项工作（新功能与关键修复）一旦合并，将分别推动项目的功能路线图和稳定性。

#### **4. 社区热点**
*   **最活跃议题：** `moltis-org/moltis#1282`
    *   **分析：** 这是一个关于“将 VoxCPM 作为本地 TTS 提供者”的功能请求 Issue。尽管目前评论和点赞数为零，但它与已提交的 PR #1283 直接关联，表明这是当前社区最关注的需求之一。背后的诉求是用户希望项目能支持更多样化、尤其是本地部署的语音合成方案，以满足对隐私、延迟或特定模型有要求的场景。

#### **5. Bug 与稳定性**
*   **今日无新的 Bug 或崩溃报告。**
*   **已识别的稳定性问题（有待合并的修复）：**
    *   **PR #1280** 修复了 Issue #1277 中描述的问题：当 `active_tools` 被显式设置为空数组时，现有的预设工具配置会被忽略。该修复有助于防止工具功能被意外禁用，属于稳定性增强。

#### **6. 功能请求与路线图信号**
*   **强烈信号：** 通过 Issue #1281/#1282 和 PR #1283 的同步提交，**将 VoxCPM 集成为本地 TTS 提供者** 是社区一个非常明确且正在被实现的功能请求。这强烈暗示该功能极有可能会被纳入项目的下一个版本或重要更新中。
*   **潜在纳入：** 与 VoxCPM 类似的其他本地 TTS 引擎也可能成为未来的讨论点。

#### **7. 用户反馈摘要**
*   **今日无直接的用户评论反馈。** 所有 Issues 和 PR 的评论数均为0。这表明当前的讨论主要停留在提案和开发层面，尚未进入社区广泛的反馈和迭代阶段。

#### **8. 待处理积压**
*   **需关注的旧 Issue：** 数据概览中未提供超过24小时的旧 Issue 信息，但建议维护者关注 `moltis-org/moltis#1277`（PR #1280 所修复的原始 Issue），以确保该问题已被充分理解并在修复中得到妥善解决。
*   **待处理 PR：** 当前有 2 个开放的 PR（#1280, #1283）需要维护者进行代码审查、测试并合并，以保持开发节奏。

---
**报告生成时间：** 2026-09-22
**数据来源：** GitHub API for `moltis-org/moltis`

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>



好的，这是根据您提供的数据生成的 CoPaw 项目动态日报。

---

### **CoPaw 项目动态日报 - 2026-09-22**

#### **1. 今日速览**
CoPaw 项目在过去24小时内保持了极高的活跃度，开发节奏强劲。核心维护者团队（如 rayrayraykk, qbc2016, axelray-dev）和社区贡献者（如 shadowabi, yang0228）均有多项实质性贡献。项目焦点集中在对关键 Bug 的修复（特别是安全漏洞和稳定性问题）以及对核心功能（如模型管理、应用控制平面）的深度优化上。整体项目健康度良好，尽管暴露出一些需要紧急关注的安全和稳定性风险。

#### **2. 版本发布**
*   **无新版本发布**。今日无官方 Release 公告。

#### **3. 项目进展**
今日有 **16 条 PR 被合并或关闭**，标志着多项重要功能的落地和修复：
*   **核心架构优化**：`feat(providers): unify model discovery, pricing, selection and thinking controls` (#7899) 和 `feat(pawapp): redesign the SDK and app control plane` (#7874) 被合并，分别对模型层和应用层进行了重大重构，旨在提升系统的可维护性和扩展性。
*   **关键 Bug 修复**：
    *   `fix(loop): prevent stale doom-loop escalation` (#7906) 和 `fix: require new tool-call evidence for doom loop escalation` (#7919) 被合并，解决了 DoomLoopGate 的误报和升级逻辑问题（关联 Issue #7905）。
    *   `fix(responses): default function tools to non-strict mode` (#7915) 被合并，修复了 Responses API 工具 schema 清洗导致的参数必填问题（关联 Issue #7907）。
    *   `fix(shell): isolate Windows command consoles` (#7910) 被合并，解决了 Windows 下子进程控制信号可能终止主服务的严重稳定性问题（关联 Issue #7908）。
*   **性能与体验提升**：
    *   `feat(scroll): age out tool_result blocks after blocks_retention_days` (#7923) 被合并，为持久化滚动历史增加了数据保留策略，有效控制存储增长。
    *   `fix(console): improve API loading on slow networks` (#7917) 被合并，通过压缩响应数据提升了慢网络下的控制台体验。
    *   `feat(telegram): use Rich Messages for Markdown tables` (#7713) 被合并，增强了 Telegram 平台的富文本渲染能力。
*   **其他重要合并**：包括依赖项更新（`chore(deps): bumping version of agentscope to 2.0.8` #7913）、设计文档清理（`docs: remove accidentally committed design documents` #7918）、CI 流水线优化（`feat(ci): split nightly E2E...` #7326）以及大规模的单元测试覆盖提升（`test(unit): coverage sprint batch 3` #7911，新增2720个测试用例）。

#### **4. 社区热点**
今日社区讨论的焦点集中在安全性和核心功能缺陷上：
*   **#7859 (OPEN, 5条评论)**：**持久化的提示注入漏洞**。这是最严重的问题，攻击者可能通过工具结果注入指令，诱导 Agent 删除所有技能。此 Issue 获得了最高的关注，社区正在紧急讨论其影响范围和修复方案。
*   **#7628 (OPEN, 4条评论)**：**上下文压缩预算问题**。用户反馈当前压缩机制可能超出供应商请求预算，导致对话中断，这是一个影响核心工作流的功能性缺陷。
*   **#7905 (CLOSED, 3条评论)** 和 **#7908 (OPEN, 1条评论)**：分别关于 DoomLoop 误判和 Windows 控制信号问题，后者已由 PR #7910 修复，社区对此类稳定性问题非常关注。

#### **5. Bug 与稳定性**
今日报告的 Bug 按严重程度排列如下：
1.  **严重：持久化提示注入漏洞**
    *   **Issue #7859**：工具结果中的系统提醒被注入恶意指令，可能导致 Agent 删除自身技能。**状态：OPEN，无已知修复 PR**。这是当前最高优先级的安全风险。
2.  **高：DoomLoopGate 误判与升级**
    *   **Issue #7905**：在无新工具调用证据的纯文本轮次，DoomLoopGate 可能错误地升级到 TERMINATE 状态。**状态：CLOSED，已有修复 PR #7906 和 #7919**。
3.  **高：Windows 平台稳定性风险**
    *   **Issue #7908**：子进程的 Ctrl 事件可能传播并终止 QwenPaw 主服务。**状态：OPEN，已有修复 PR #7910**。
4.  **中：上下文压缩可能导致请求失败**
    *   **Issue #7628**：压缩逻辑未考虑完整请求预算，可能超出限制。**状态：OPEN，无已知修复 PR**。
5.  **中：OpenCode 供应商兼容性问题**
    *   **Issue #7882** 和 **#7531**：OpenCode 的免费模型无法通过 API 调用，且需要特定请求头。**状态：CLOSED**，可能已通过其他方式解决。
6.  **低：其他功能缺陷**：包括控制台 UI 加载不完整（#7841）、文件标签页内容过期（#7866）、技能文件格式问题（#7921）等。

#### **6. 功能请求与路线图信号**
*   **已确认的路线图方向**：`feat(providers)` 和 `feat(pawapp)` 的系列 PR 表明，项目正在大力投入**模型管理架构**和**应用生态控制平面**的建设，这将是下一版本的核心。
*   **潜在的新功能**：
    *   **会话级模型覆盖** (`PR #5992`)：允许为不同会话指定不同模型，这是一个非常实用的功能，可能很快与用户见面。
    *   **控制台浏览器标签自定义** (`PR #7914`)：小的体验增强功能。
    *   **OMP-roles 技能修复** (`PR #7922`)：确保官方插件功能的完整性。
*   **社区提议**：Issue #4974（为 Agent 配置头像）和 #7912（添加 MCP Web 研究示例）获得了社区支持，可能成为未来的功能点。

#### **7. 用户反馈摘要**
*   **痛点**：用户对**稳定性**和**安全性**高度敏感。#7859 和 #7905 所代表的问题（安全注入、循环误判）会直接破坏用户对工具的信任。#7628 和 #3419（京东云环境会话中断）则影响了核心工作流的可靠性。
*   **使用场景**：反馈涵盖了从桌面端、特定云环境到 Telegram 等多种平台，说明用户场景多样化，对项目的可移植性和多平台支持有要求。
*   **满意/不满意**：对于已修复的问题（如 Windows 壳层隔离、OpenCode 兼容性），社区反应积极。对于仍在开放的 Bug，用户表达了明确的挫败感，特别是当问题阻碍了其主要工作流时。

#### **8. 待处理积压**
*   **#7859 (OPEN)**：安全漏洞，需最高优先级处理，已积压3天。
*   **#7628 (OPEN)**：核心功能缺陷，影响上下文压缩可靠性，已积压14天。
*   **#3419 (OPEN)**：特定环境下的会话中断问题，虽然创建时间早（4月），但至今未解决，影响特定用户群体。
*   **#7921 (OPEN)**：技能文件格式问题，影响插件功能，为新发现但需关注。

---
**建议**：维护者团队应优先集结资源处理 **#7859 安全漏洞**，并持续跟进 **#7628** 和 **#3419** 等影响核心体验的长期积压问题。同时，按计划推进 `feat(providers)` 和 `feat(pawapp)` 等架构性改进，以提升项目长期健康度。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



# ZeroClaw 项目动态日报 — 2026-09-22

---

## 1. 今日速览

今日项目活跃度维持在高位，过去24小时内新增/活跃 Issues 46 条，关闭 4 条；PR 待合并 48 条，已合并/关闭 2 条。项目整体处于快速迭代期，社区贡献活跃，但同时也暴露出多个高严重度（S0/S1）的稳定性与安全问题。从数据来看，项目在架构设计（RFC）、安全加固、渠道增强（尤其是 WhatsApp Web）三个方向上投入显著，但积压问题（如 daemon 崩溃、安全审计告警未修复）对发布节奏构成潜在压力。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日有 2 条 PR 被合并/关闭，另有大量 PR 处于待合并状态，其中以下几项对项目演进具有重要意义：

- **#10255 [CLOSED]** — `feat(security): oidc token-verification provider`（#8289 stage 5）已关闭。这是安全架构系列的最终阶段，引入了基于 OIDC 的令牌验证提供者，支持 JWKS 校验、RFC 9068 令牌类型、签名/受众/过期/MFA 等多维验证，标志着项目在身份认证与访问控制上迈出了关键一步。
- **#10259 [OPEN]** — `feat(security): enforce authenticated principals on RPC`（stage 3）正在推进中，依赖 #10255，将把认证主体强制校验扩展到 RPC 层，进一步完善安全边界。
- **#10982 / #10984 / #10988 / #10979 / #10980** — 一系列 WhatsApp Web 渠道增强 PR 正在集中推进，覆盖图片内联预览、原生投票、PDF 预览、房间创建与邀请、投票结果回读等功能，表明项目正大力补齐多渠道能力。
- **#11035 / #11031 / #11029** — 三个针对已知 Bug 的修复 PR 已提交，分别对应 Qdrant 召回时间边界、HTTP 解码空 chunk、Git 安全选项解析问题，修复链路清晰、覆盖面明确。

> **整体评估：** 项目在安全子系统（OIDC/RPC 认证）和渠道覆盖（WhatsApp Web 全功能补齐）两个方向上同时推进，架构治理与功能落地并行，但安全审计告警（RUSTSEC）的根治方案仍在讨论中（#9899）。

---

## 4. 社区热点

以下是今日评论数最高的 Issue/PR 及其背后的诉求分析：

| 排名 | 条目 | 评论数 | 核心诉求 |
|------|------|--------|----------|
| 1 | **#8692** — Maintainer decision queue for RFCs | 15 | 社区需要一个公开的 RFC 决策队列，使设计问题、发布策略、协调事项的维护者决策过程透明化、可追溯 |
| 2 | **#9899** — Remove matrix-sdk → imbl advisory waivers | 6 | 安全 CI 因 `bitmaps 3.2.1`（经由 `imbl` → Matrix SDK 依赖链）触发 RUSTSEC-2026-0247 告警，社区要求彻底清除豁免、修复依赖链 |
| 3 | **#10230** — Daemon startup/reload overflow during agent init | 6 | ZeroCode 应用 Quickstart 配置时 daemon 堆栈溢出，属于 S1 级工作流阻断问题，用户期望获得稳定复现步骤 |
| 4 | **#10523** — Bootstrap file truncation invisible to operator | 5 | `compact_context` 模式下 6000 字符截断无任何提示，操作员无法感知上下文丢失，属于体验缺陷 |
| 5 | **#10068** — Interactive session caps context at 32k ignoring config | 5 | 用户配置 `max_context_tokens = 131072` 但运行时被硬编码 32k 上限覆盖，属于配置失效类 Bug |
| 6 | **#10970** — RFC: Host-scoped admission control | 4 | 多 agent 场景下缺乏主机级并发/内存/工具执行边界，社区呼吁架构层面引入资源治理 |
| 7 | **#10930** — RFC: One durable primitive for human questions | 4 | SOP 之外的通用「agent 问人类」原语缺失，现有实现仅限于 SOP 审批门，社区希望抽象为独立子系统 |
| 8 | **#10929** — RFC: Delivery receipts for outbound messages | 4 | 消息无法确认是否送达，`SendMessage` 结构体中缺少消息 ID，属于基础能力缺失 |
| 9 | **#10408** — Parallel run on second message during active turn | 4 | 同一 session 在上一轮未结束时收到新消息会触发并行 run，导致重复工作与重复回复 |
| 10 | **#10315** — Re-add browser enrollment frontdoor | 4 | #10142 拆分 transport 时移除了浏览器入口，社区要求在不引入手写 TLS 的前提下恢复 |

> **趋势判断：** 社区讨论热点集中在**架构治理**（RFC 系列）、**安全债务**（依赖告警）、**运行时稳定性**（daemon/上下文/并发）三个维度，说明用户对项目的「工程成熟度」有较高期待。

---

## 5. Bug 与稳定性

按严重程度排列的今日活跃 Bug：

| 严重度 | Issue | 状态 | 是否有 Fix PR |
|--------|-------|------|---------------|
| **S0** | **#10966** — Git `--attr-source` 可隐藏 mutating subcommand，绕过安全审批分类 | OPEN | ✅ #11029 已提交修复 |
| **S0** | **#10379** — ZeroClaw Desktop 无法取消正在进行的消息，无消息队列 | OPEN | ❌ 无 |
| **S1** | **#10230** — Daemon 启动/重载时 agent 初始化溢出 | OPEN | ❌ 无 |
| **S1** | **#9191** — Cron agent jobs 无超时限制，锁仅在进程启动时清除 | OPEN | ❌ 无 |
| **S1** | **#9390** — Emergency stop 为 CLI-only 状态文件，无运行时路径读取 | OPEN | ❌ 无 |
| **S1** | **#10231** — Channels supervisor 重试过期配置 | OPEN | ❌ 无 |
| **S1** | **#10536** — macOS Seatbelt 忽略 `allowed_roots` 配置 | OPEN | ❌ 无 |
| **S2** | **#10523** — Bootstrap 截断对操作员不可见 | OPEN | ❌ 无 |
| **S2** | **#10068** — 交互式 session 上下文硬编码 32k 上限 | OPEN | ❌ 无 |
| **S2** | **#10408** — 活跃 turn 期间新消息触发并行 run | OPEN | ❌ 无 |
| **S2** | **#9899** — matrix-sdk → imbl 依赖链触发安全告警 | OPEN | ⚠️ #11038 提出临时豁免，根治方案待定 |
| **S2** | **#10975** — WhatsApp Web 入站图片未下载，收到字面量 `[Image]` | OPEN | ❌ 无 |
| **S2** | **#10976** — WhatsApp Web mentions 双向损坏 | OPEN | ❌ 无 |
| **S2** | **#9784** — SOP 多步执行中途标记失败且无审计事件 | OPEN | ❌ 无 |
| **S2** | **#10921** — Qdrant 时间边界召回可能遗漏合格结果 | OPEN | ✅ #11035 已提交修复 |
| **S3** | **#10918** — 空 trailing chunk 误判精确匹配的 HTTP 响应为截断 | OPEN | ✅ #11031 已提交修复 |
| **S3** | **#9363** — 本地化 ZeroCode 中 Config 元数据仍为英文 | OPEN | ❌ 无 |

> **关键风险：** S0/S1 级问题共 7 个，其中 6 个尚无修复 PR。特别是 daemon 堆栈溢出（#10230）和 cron 作业无超时（#9191）直接影响生产环境可用性，建议维护者优先排期。

---

## 6. 功能请求与路线图信号

### 近期可能纳入下一版本的功能（基于已提交 PR 判断）：

| 功能 | 来源 | 说明 |
|------|------|------|
| **WhatsApp Web 原生投票** | #10984 / #10988 | 从文本投票升级为原生 API，支持结果回读，补齐渠道交互能力 |
| **WhatsApp Web 图片/PDF 预览** | #10982 / #10980 | 出站消息附加 `jpegThumbnail` 和 PDF 首页预览，提升移动端体验 |
| **WhatsApp Web 房间管理** | #10979 | 实现 `create_room` 和 `invite_user`，补齐 Matrix 已有能力 |
| **WhatsApp Markdown 方言转换** | #10475 | 将标准 Markdown 转换为 WhatsApp 方言，消除星号/链接括号显示问题 |
| **OIDC 令牌验证提供者** | #10255（已关闭） | 安全架构的核心拼图，预计很快进入 master |
| **RPC 认证主体强制校验** | #10259（进行中） | 安全架构 stage 3，依赖 #10255 |
| **Qdrant 召回时间边界修正** | #11035 | 修复 `since`/`until` 过滤顺序，避免遗漏结果 |
| **Git 安全选项解析修复** | #11029 | 消费 `--attr-source`、`-c` 等选项的值，防止隐藏 mutating subcommand |
| **Nix 构建 zerocode 特性集修正** | #11040 | 修复 Nix 包构建中 zerocode 的默认特性集 |
| **You.com MCP 搜索示例** | #11039 | 文档补充，降低 MCP 服务器集成门槛 |

### 中期路线图信号（来自 RFC）：

- **#10970** — 主机级准入控制与资源边界（多 agent 场景的并发/内存治理）
- **#10930** — 通用「agent 问人类」持久化原语（独立于 SOP 的子系统）
- **#10929** — 出站消息送达回执
- **#11027** — Agent-to-agent 会话消息（receiver discretion

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*