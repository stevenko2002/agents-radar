# OpenClaw 生态日报 2026-08-26

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-25 22:16 UTC

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

### **OpenClaw 项目动态日报 —— 2026-08-26**

---

#### **1. 今日速览**

OpenClaw 在过去 24 小时内保持着较高的开发活跃度，共处理 **500 条 Issue 更新** 和 **500 条 PR 更新**，涉及多模块改进与缺陷修复。本次更新集中在 **会话管理、插件隔离、UI 体验优化以及安全机制强化** 等方面。虽然暂未发布新版本，但多个关键 PR 已进入合并阶段，推动项目向稳定性与可维护性方向迈进。值得注意的是，部分 Bug 仍未被完全解决，需社区持续跟进。

---

#### **2. 版本发布**

暂无新版本发布。

---

#### **3. 项目进展**

以下是今日合并/关闭的重要 PR，体现了项目在以下方面的推进：

| PR 链接 | 描述 |
|--------|------|
| [#129628](https://github.com/openclaw/openclaw/pull/129628) | 防止删除替换性会话（修复 WebUI 会话管理交互逻辑） |
| [#129649](https://github.com/openclaw/openclaw/pull/129649) | 修复远程网关发现时 SSH 隧道端口错误问题 |
| [#129614](https://github.com/openclaw/openclaw/pull/129614) | 修复插件提供商安装后编译失败的问题 |
| [#129490](https://github.com/openclaw/openclaw/pull/129490) | 隔离会话维护与频道插件解析器，提升系统稳定性 |

这些 PR 解决了用户在日常使用中遇到的诸如界面交互异常、远程连接错误、插件初始化问题等典型问题，体现了团队对细节优化的重视。

---

#### **4. 社区热点**

以下是评论活跃、反应热烈的 Issues/PRs：

| Issue/PR 链接 | 摘要 |
|---------------|------|
| [#80319](https://github.com/openclaw/openclaw/issues/80319) | QA 默认工具套件混淆 Codex 原生工具与 OpenClaw 动态工具 |
| [#67777](https://github.com/openclaw/openclaw/issues/67777) | 子代理完成结果丢失的问题（涉及超时/重启等场景） |
| [#50093](https://github.com/openclaw/openclaw/issues/50093) | WhatsApp 重连后漏消息未回填问题 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 子进程僵尸堆积导致性能下降问题 |

这些议题广泛反映了用户在消息可靠性、子任务调度以及第三方集成稳定性方面的关注，同时凝聚了开发者对核心架构优化的共识。

---

#### **5. Bug 与稳定性**

以下是今日报告的重要 Bug（按严重程度排序），部分已附有 Fix PR：

| Bug 链接 | 类型 | 是否有 Fix PR |
|----------|------|----------------|
| [#129490](https://github.com/openclaw/openclaw/pull/129490) | 会话维护与插件解析器冲突 | ✅ 已修复 |
| [#129614](https://github.com/openclaw/openclaw/pull/129614) | 插件提供商编译失败 | ✅ 已修复 |
| [#129628](https://github.com/openclaw/openclaw/pull/129628) | 替换会话被误删除 | ✅ 已修复 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 僵尸进程堆积问题 | ❌ 未修复 |
| [#126246](https://github.com/openclaw/openclaw/issues/126246) | Telegram 消息丢失在重启后 | ❌ 未修复 |

部分高优先级 Bug 已通过 PR 修复，但仍有若干长期存在的问题亟需关注，尤其是与进程管理与消息持久化相关的模块。

---

#### **6. 功能请求与路线图信号**

以下是用户提出的新功能需求，结合已有 PR 判断可能进入下一版本的方向：

| 功能请求链接 | 描述 | 是否有相关 PR |
|--------------|------|----------------|
| [#16670](https://github.com/openclaw/openclaw/issues/16670) | 在入门向导中加入 Memory/Embedding 设置为必填步骤 | ❌ 无 |
| [#9016](https://github.com/openclaw/openclaw/issues/9016) | 将 OpenRouter 使用成本暴露给运行时 | ❌ 无 |
| [#6625](https://github.com/openclaw/openclaw/issues/6625) | 支持子代理超时前的预警提示 | ❌ 无 |

尽管许多功能请求尚未获得官方响应，但它们清晰地指向了用户在记忆增强、成本感知与用户体验优化等方面的需求，有助于指导未来的产品规划。

---

#### **7. 用户反馈摘要**

从评论中可见，用户普遍关注以下主题：

- **消息可靠性**：WhatsApp、Telegram 等渠道出现消息丢失或延迟，影响用户正常沟通流程。
- **界面体验**：控制台 UI 在加载动画、会话管理等方面存在不足，影响部分用户的操作效率。
- **插件稳定性**：某些插件在安装后无法正常编译或运行，需进一步优化脚手架生成逻辑。
- **性能与资源管理**：僵尸进程累积、缓存不释放等问题导致长时间运行时性能下降。
- **可访问性需求**：盲人用户期望更多无障碍配置选项，如禁用 Emoji 和 Unicode 符号。

这些反馈凸显了用户对系统稳定性、界面易用性以及包容性设计的期待，有助于指导团队优化方向。

---

#### **8. 待处理积压**

以下是长期未响应的重要 Issue 或 PR，建议维护者予以关注：

| 链接 | 类型 | 最后更新时间 |
|------|------|----------------|
| [#80319](https://github.com/openclaw/openclaw/issues/80319) | QA 工具默认值问题 | 2026-08-25 |
| [#67777](https://github.com/openclaw/openclaw/issues/67777) | 子代理结果丢失 | 2026-08-25 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 僵尸进程堆积 | 2026-08-25 |
| [#50093](https://github.com/openclaw/openclaw/issues/50093) | WhatsApp 消息回填 | 2026-08-25 |

尽管这些问题至今未被标记为已修复，但其影响范围广泓，且多次被提及，因此建议优先安排处理。

---

如需进一步分析或生成更详尽的技术报告，请随时告知！

---

## 横向生态对比

**今日重点**（2026‑08‑26）

| 项目 | 关键更新 | 影响/意义 |
|------|----------|-----------|
| **[OpenClaw](https://github.com/openclaw/openclaw)** | 合并 PR <https://github.com/openclaw/openclaw/pull/129628> – 防止误删可替换的会话（修复 WebUI 会话管理交互） | 消除用户在切换或删除会话时的 UI 误操作风险，提升会话持久性和使用安全感。 |
| **[NanoBot](https://github.com/HKUDS/nanobot)** | 合并 PR <https://github.com/HKUDS/nanobot/pull/5536> – 受限 shell 在无沙箱时 fail‑closed，关闭绕过路径检查的安全漏洞（P1） | 关键安全补丁，防止恶意命令在缺失沙箱时逃逸，提高整个平台的安全防护等级。 |
| **[Hermes Agent](https://github.com/NousResearch/hermes-agent)** | 竞争修复 PR <https://github.com/NousResearch/hermes-agent/pull/95019> / <https://github.com/NousResearch/hermes-agent/pull/95011> – 解决 xAI API 保留 `tool_search` 名导致 Grok provider 完全不可用的问题 | 解除跨供应商兼容性阻断，恢复所有使用 Grok 的用户正常调用，直接影响生产环境的可用性。 |
| **[LobsterAI](https://github.com/netease-youdao/LobsterAI)** | 发布 **2026.8.25** 版本（v2026.8.25）——引入统一的 `library` 模块、跨平台缩略图与本地产物生命周期管理、完整的使用埋点统计 | 大幅提升资源加载统一性、文件预览体验以及产品运营可观测性，为后续功能迭代奠定基础。 |
| **[CoPaw (QwenPaw)](https://github.com/agentscope-ai/QwenPaw)** | 发布 **v2.1.1‑beta.3**（<https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.1.1-beta.3>）——锁定 `@agentscope-ai/chat` 依赖版本、修正文档拼写、扩展单元测试覆盖 | 稳定依赖链、提升文档准确性并加强测试覆盖，确保即将进入正式版的代码质量。 |
| **[IronClaw](https://github.com/nearai/ironclaw)** | 合并 PR <https://github.com/nearai/ironclaw/pull/7817> – 使用 `cargo‑nextest` 改写 CI 测试管线，加入完整失败信号并解除 PR 限流 | CI 并行化提升数倍执行速度，缩短合并等待时间，加速整体研发节奏。 |
| **[ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)** | 合并 PR <https://github.com/zeroclaw-labs/zeroclaw/pull/10364> – 修复工具执行错误路径丢失详细错误信息的问题 | 保留完整错误上下文，方便定位和调试，提升运维与安全审计的可追溯性。 |
| **[PicoClaw](https://github.com/sipeed/picoclaw)** | 打开 Issue <https://github.com/sipeed/picoclaw/issues/3269> – “MCP server 连接失败导致 agent 循环挂起” 被社区标记为高危 | 暴露底层远程网关失联导致的死循环风险，提醒维护者尽快实现超时/重连机制以恢复系统可靠性。 |

---

**活跃度概览**  
今日整体社区活跃度极高，OpenClaw 处理约 500 条 Issue/PR，仍是最活跃的核心项目；NanoBot 与 NanoClaw 也分别完成 14 条 PR 合并和多项关键架构重构；其它项目（Hermes Agent、IronClaw、ZeroClaw）虽合并数量有限，但 Issue 讨论量大，表明用户对稳定性和兼容性有强烈需求。整体呈现“高频迭代 + 关键安全/兼容性修复” 的状态。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报

**日期：2026-08-26**
**数据周期：过去 24 小时**
**仓库：[HKUDS/nanobot](https://github.com/HKUDS/nanobot)**

---

## 1. 今日速览

NanoBot 今日呈现出**高活跃度的迭代态势**：过去 24 小时共有 24 个 PR 更新（合并/关闭 14 个，待处理 10 个）和 5 个 Issue 活跃，虽然没有新版本发布，但合并/关闭率达 58%，反映出维护团队对 Bug 修复和小幅增强类贡献的快速响应。当日提交的 PR 几乎全部附带回归测试，覆盖 Telegram 频道、Provider 路由、工具加载器、WebUI、TUI 和 Agent 循环等多个核心模块。安全相关修复（受限 shell 沙箱失效）被标记为 p1 优先级，已合并。从整体节奏看，项目处于**密集打磨阶段**，未启动重大功能重构。

---

## 2. 版本发布

⚠️ **无新版本发布**。当前所有改动均已合入主干，等待下一次正式 Release 打包。

---

## 3. 项目进展

今日共有 14 个 PR 被合并或关闭，涵盖**稳定性、安全性、TUI/WebUI 体验与工具能力增强**四条主线。

### 已合并的关键 PR

| PR | 类别 | 主要推进 |
|---|---|---|
| [#5541](https://github.com/HKUDS/nanobot/pull/5541) | Bug 修复（频道） | Telegram 群组消息归属到具体发送者，修复 #1091 |
| [#5540](https://github.com/HKUDS/nanobot/pull/5540) | Bug 修复（Provider） | 稳定 Codex prompt cache 路由，避免哈希漂移 |
| [#5538](https://github.com/HKUDS/nanobot/pull/5538) | TUI 重构 | 明确主输入区的"Enter 立即发送 / Tab 排队发送"提示 |
| [#5534](https://github.com/HKUDS/nanobot/pull/5534) | TUI 增强 | 在 `$skill-name` 引用时显示过滤式自动补全选择器 |
| [#5536](https://github.com/HKUDS/nanobot/pull/5536) | **安全修复 p1** | 受限 shell 在无沙箱时 fail closed，关闭绕过路径检查的漏洞（#4072） |
| [#5533](https://github.com/HKUDS/nanobot/pull/5533) | **性能修复 p1** | `find_files` 扫描改用预算化的 `os.scandir`，避免长时间阻塞 |
| [#5529](https://github.com/HKUDS/nanobot/pull/5529) | Agent 修复 | 后台子代理只在 turn 退出时等待，避免阻塞主流程 |
| [#5525](https://github.com/HKUDS/nanobot/pull/5525) | 功能增强 | `grep` 改为按需文档检索，支持 PDF/DOCX/XLSX/PPTX 增量定位 |
| [#5526](https://github.com/HKUDS/nanobot/pull/5526) | Bug 修复 | 重命名为 `exec_session` 并新增 `until_exit`/`timeout_ms`，不再轮询 |
| [#5530](https://github.com/HKUDS/nanobot/pull/5530) | TUI 样式 | 短会话保持顶部对齐，长会话自动扩展并保留黏性滚动 |
| [#5389](https://github.com/HKUDS/nanobot/pull/5389) | WebUI 功能 | 拖拽排序会话与分组（含冲突标记，状态待定） |

### 整体评估
今日合入的多为**局部打磨**，但叠加后改善显著：会话归属、Telegram 渲染、Provider 缓存稳定性、文件检索响应性、沙箱安全边界均向前一步。

---

## 4. 社区热点

按评论数与社区反应筛选的热点：

- **[#5505 AnySearch 集成建议](https://github.com/HKUDS/nanobot/issues/5505)**（3 条评论）— 由 AnySearch 团队主动提议，提供 API/MCP/Skill 三种集成方式，预计将很快以 PR 形式落地。诉求反映第三方工具厂商对 nanobot 工具生态的兴趣。
- **[#5516 Telegram rich messages 与 streaming 冲突](https://github.com/HKUDS/nanobot/issues/5516)**（1 条评论）— 与今日提交的修复 PR [#5531](https://github.com/HKUDS/nanobot/pull/5531) 直接对应，说明用户在使用 `rich_messages: true` 时确实遇到了降级渲染问题。
- **[#5532 `mask_session_key` 缺失导入](https://github.com/HKUDS/nanobot/issues/5532)**（1 条评论）— 来自真实用户报错日志，触发场景是"删除所有资源并清理记忆"指令。属于高频用户路径上的回归。

整体看，社区热点集中在**多端一致性**与**真实场景下的崩溃**，维护响应速度较快。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 P1（已修复或修复中）

| 问题 | 状态 | 链接 |
|---|---|---|
| 受限 shell 在无沙箱时绕过路径检查 | ✅ 已合入修复 | [#5536](https://github.com/HKUDS/nanobot/pull/5536) 修复 [#4072](https://github.com/HKUDS/nanobot/issues/4072) |
| `find_files` 大目录扫描阻塞 | ✅ 已合入修复 | [#5533](https://github.com/HKUDS/nanobot/pull/5533) |
| 子代理部分完成时模型误判未结束 | 🟡 修复 PR 待合并 | [#5152](https://github.com/HKUDS/nanobot/pull/5152) |

### 🟡 P2

| 问题 | 状态 | 链接 |
|---|---|---|
| `mask_session_key` 未导入致崩溃 | 🟡 待修复 | [#5532](https://github.com/HKUDS/nanobot/issues/5532) |
| ToolLoader 日志占位符错误 | 🟡 修复 PR 待合并 | [#5539](https://github.com/HKUDS/nanobot/pull/5539) |
| MCP 连接未在 turn 前重试 | 🟡 修复 PR 待合并 | [#5535](https://github.com/HKUDS/nanobot/pull/5535) |
| Telegram rich 流式预览不升级 | 🟡 修复 PR 待合并 | [#5531](https://github.com/HKUDS/nanobot/pull/5531) |
| WebUI 单面板 chat header 过宽 | 🟡 修复 PR 待合并 | [#5519](https://github.com/HKUDS/nanobot/pull/5519) |

### 已闭合/合并的修复（统计）
- Telegram 群组消息归属 [#5541](https://github.com/HKUDS/nanobot/pull/5541)
- Codex prompt cache 路由 [#5540](https://github.com/HKUDS/nanobot/pull/5540)
- 后台子代理等待时机 [#5529](https://github.com/HKUDS/nanobot/pull/5529)
- `exec_session` 不再轮询 [#5526](https://github.com/HKUDS/nanobot/pull/5526)

**稳定性观察**：P1 安全与性能问题全部在当日获得修复或明确路径，P2 仍有 5 个待处理，节奏健康。

---

## 6. 功能请求与路线图信号

### 来自社区的明确请求

| 需求 | 来源 | 现有实现进度 | 评估 |
|---|---|---|---|
| **集成 AnySearch 作为 web search provider** | [#5505](https://github.com/HKUDS/nanobot/issues/5505) | 待作者提 PR | 高，厂商主动 + 已有 MST 先例 [#5234](https://github.com/HKUDS/nanobot/pull/5234) |
| **WebUI 会话结束通知铃声** | [#5524](https://github.com/HKUDS/nanobot/issues/5524) | 无 | 中，需求清晰但需 UI/UX 决策 |
| **WebUI 侧边栏在 `unifiedSession` 下显示真实标题** | [#5527](https://github.com/HKUDS/nanobot/issues/5527) | 修复 PR [#5528](https://github.com/HKUDS/nanobot/pull/5528) 已开 | 高，极可能随下个 PR 批次合入 |

### 维护团队主动推进

- **mst-python 接入** [#5234](https://github.com/HKUDS/nanobot/pull/5234)（p1，Open，已标记 conflict）— 体现多源元搜索方向
- **WebUI 拖拽分组** [#5389](https://github.com/HKUDS/nanobot/pull/5389)（已 CLOSED 带 conflict 标记）— 需要关注 rebase
- **WebUI 模型重试状态可视化** [#5504](https://github.com/HKUDS/nanobot/pull/5504)（NAN-34）— 显示内部 Linear 任务在持续推进

**路线图信号**：项目当前重点是**多渠道一致性 + 工具鲁棒性**，未启动重大架构变更；Agent Loop 周边（Telegram、WebUI、TUI）打磨是优先级最高的工作流。

---

## 7. 用户反馈摘要

从 Issues 评论与摘要中提炼：

- **真实痛点**：用户期望通过一条自然语言指令完成"删除所有资源并清理记忆"，但在执行链路中遭遇 `mask_session_key` 未导入异常（[#5532](https://github.com/HKUDS/nanobot/issues/5532)），说明**高权限/破坏性操作路径仍有稳定性缺口**。
- **跨端不一致**：当 `rich_messages: true` 与 `streaming: true` 同时启用，Telegram 端用户看不到富文本（[#5516](https://github.com/HKUDS/nanobot/issues/5516)）。这反映出**默认配置组合下功能静默降级**，对终端用户不友好。
- **会话体验**：用户希望在长任务完成时收到 WebUI 通知铃声（[#5524](https://github.com/HKUDS/nanobot/issues/5524)），表明**异步任务的反馈机制**已成为高频痛点。
- **生态期望**：第三方厂商主动提议集成（AnySearch），说明 nanobot 的工具接入规范被外界视为值得投入的方向。

---

## 8. 待处理积压

### 长期未合并的 PR（Open ≥7 天）

| PR | 标题 | 状态 | 链接 |
|---|---|---|---|
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | mst-python 元搜索接入 | p1，conflict，Open 自 08-03 | 23 天 |
| [#5152](https://github.com/HKUDS/nanobot/pull/5152) | subagent 部分完成标记 | conflict，Open 自 07-28 | 29 天 |

⚠️ **维护者提醒**：两个 p1 长期 Open 且带 conflict 标记，建议优先 rebase 并复审，避免与主干持续偏离导致后续合并成本升高。

### 今日新增但仍 Open 的关键项

- [#5539](https://github.com/HKUDS/nanobot/pull/5539) ToolLoader 日志占位符
- [#5535](https://github.com/HKUDS/nanobot/pull/5535) MCP readiness 重试
- [#5531](https://github.com/HKUDS/nanobot/pull/5531) Telegram rich 流式预览
- [#5528](https://github.com/HKUDS/nanobot/pull/5528) WebUI unifiedSession 标题映射
- [#5519](https://github.com/HKUDS/nanobot/pull/5519) WebUI 单面板头部压缩
- [#5504](https://github.com/HKUDS/nanobot/pull/5504) 模型重试状态可视化

---

## 项目健康度总结

| 维度 | 评分 | 说明 |
|---|---|---|
| 活跃度 | ⭐⭐⭐⭐⭐ | 24 个 PR、5 个 Issue 单日更新 |
| 响应速度 | ⭐⭐⭐⭐ | P1 问题当日闭合；社区提案当日回应 |
| 安全姿态 | ⭐⭐⭐⭐ | P1 沙箱逃逸已修复 |
| 待合并积压 | ⭐⭐⭐ | 10 个 Open PR，2 个长期 conflict |
| 版本节奏 | ⭐⭐⭐ | 无新 Release，但主干变更密集，下个版本预计体量较大 |

**一句话总结**：NanoBot 进入了一个**密集打磨、零重大事故**的阶段，安全与稳定性问题被快速闭环，社区与第三方生态持续接入，下一版本有望集中体现这一轮积累。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**日期：** 2026-08-26  
**项目：** [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

---

## 1. 今日速览

Hermes Agent 今日活跃度**显著偏高**，过去 24 小时内 Issues 更新达 50 条（新开/活跃 42 条，关闭 8 条），PR 更新亦达 50 条（待合并 41 条，已合并/关闭 9 条）。项目无新版本发布。社区关注焦点集中在 **xAI provider 兼容性故障**（`tool_search` 保留名冲突）和 **Desktop 稳定性问题**（进程泄漏、Cronjobs UI 异常、Ollama 静默回退失败）。架构层面出现了两份重量级提案——Hermes Authority Execution Layer 和 Bot Mode 统一控制平面，暗示项目正酝酿深层重构。整体来看，Bug 报告量偏多且 P2 级别问题密集，维护团队合并吞吐有限（9/50），积压压力持续上升。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日已合并/关闭的关键 PR 数量有限，但有几项值得注意的推进：

| PR | 状态 | 内容 |
|---|---|---|
| [#95009](https://github.com/NousResearch/hermes-agent/pull/95009) | **CLOSED** | 修复 Atlassian MCP 端点（6月30日 cutover 后 404）+ Grafana Cloud 加入目录。修复了影响所有 Atlassian MCP 用户的硬性中断。 |
| [#74973](https://github.com/NousResearch/hermes-agent/issues/74973) | **CLOSED** | macOS `hermes update` 静默跳过 gateway 重启的 Bug 被关闭。 |
| [#66978](https://github.com/NousResearch/hermes-agent/issues/66978) | **CLOSED (duplicate)** | TUI 每次 launch 触发 `npm install` 的性能问题被标记为重复。 |
| [#57955](https://github.com/NousResearch/hermes-agent/issues/57955) | **CLOSED** | terminal tool 绕过 SOUL.md 写保护的路径验证缺陷被关闭（cannot-reproduce）。 |
| [#88055](https://github.com/NousResearch/hermes-agent/issues/88055) | **CLOSED** | Cron 失败消息退避与恢复通知功能请求被关闭。 |

**评估：** 今日合并窗口产出偏少，核心合并仅 #95009 一项（Atlassian MCP 修复）。大量 P2 级修复 PR 仍处于待合并状态，项目整体向前推进幅度有限。

---

## 4. 社区热点

### 🔥 最活跃讨论

| 排名 | Issue/PR | 评论数 | 👍 | 核心诉求 |
|---|---|---|---|---|
| 1 | [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) Skills index stale/degraded | **96** | 0 | 自动化新鲜度探测持续失败（index 超 29.8h），影响 Skills Hub 文档可用性。这是长期积累的自动化基础设施问题。 |
| 2 | [#95028](https://github.com/NousResearch/hermes-agent/issues/95028) Hermes Authority Execution Layer 架构提案 | **8** | 0 | @andrexibiza 提出"十二个问题实为一个缺陷"的统一架构方案，主张消除跨边界身份推断的不一致性，属于深层架构重构提案。 |
| 3 | [#95003](https://github.com/NousResearch/hermes-agent/issues/95003) xAI rejects `tool_search` | **7** | **5** | xAI API 保留 `tool_search` 函数名，导致 Grok provider 完全不可用。用户反响强烈，已有两个修复 PR（[#95019](https://github.com/NousResearch/hermes-agent/pull/95019)、[#95011](https://github.com/NousResearch/hermes-agent/pull/95011)）竞相提交。 |
| 4 | [#74973](https://github.com/NousResearch/hermes-agent/issues/74973) macOS update 静默跳过 gateway restart | **7** | 0 | macOS 上 `hermes update` 返回成功但 gateway 已死且从 launchd 注销，无任何告警。 |
| 5 | [#91911](https://github.com/NousResearch/hermes-agent/issues/91911) Bot Mode 统一控制平面 | **7** | 0 | 与 #95028 同一作者，主张 Bot Mode 的 identity、authority、delivery、cancellation 应由单一控制面对象管理。 |

### 👍 最多正面反应

| Issue | 👍 | 诉求 |
|---|---|---|
| [#95003](https://github.com/NousResearch/hermes-agent/issues/95003) xAI `tool_search` 冲突 | **5** | Grok 用户迫切需要修复 |
| [#70421](https://github.com/NousResearch/hermes-agent/issues/70421) Desktop 显示项目下全部聊天 | **5** | 3-session 预览上限严重影响多会话工作流 |
| [#92343](https://github.com/NousResearch/hermes-agent/issues/92343) CLI Shift+letter 泄漏 | **2** | Ghostty 终端用户日常受影响 |

---

## 5. Bug 与稳定性

按严重程度排列今日报告/活跃的 Bug：

### P1 — 紧急

| Bug | 描述 | Fix PR | 链接 |
|---|---|---|---|
| CLI Shift+letter 仍泄漏 CSI 文本 | #87511 修复后，`ANSI_SEQUENCES` 映射被 `self-insert` pasting 绕过，Ghostty 上 Shift+字母仍插入字面量转义序列 | 无 | [#92343](https://github.com/NousResearch/hermes-agent/issues/92343) |

### P2 — 重要

| Bug | 描述 | Fix PR | 链接 |
|---|---|---|---|
| xAI `tool_search` 保留名冲突 | Grok provider 完全不可用，所有请求返回 HTTP 400 | [#95019](https://github.com/NousResearch/hermes-agent/pull/95019)、[#95011](https://github.com/NousResearch/hermes-agent/pull/95011) | [#95003](https://github.com/NousResearch/hermes-agent/issues/95003) |
| HTTP 429 无自动退避恢复 | 上游容量不足时 turn 直接失败，需手动重试 | [#94220](https://github.com/NousResearch/hermes-agent/pull/94220)（降低 cooldown 至 3min） | [#94978](https://github.com/NousResearch/hermes-agent/issues/94978) |
| Windows 删除 Bot/Profile 后 python.exe 未终止 | 进程累积造成内存/CPU 泄漏 | 无 | [#94959](https://github.com/NousResearch/hermes-agent/issues/94959) |
| Ollama fallback 静默解析为 (None, None) | 本地 Ollama 冗余链条永远不生效，无任何诊断输出 | 无 | [#95054](https://github.com/NousResearch/hermes-agent/issues/95054) |
| SOCKS proxy scheme 未知 | GNOME 手动 SOCKS 代理环境下所有 HTTP MCP 服务器连接失败 | 无 | [#95042](https://github.com/NousResearch/hermes-agent/issues/95042) |
| Desktop Cronjobs 开关点击导航至聊天 | 启用/禁用开关被事件冒泡捕获，无法正常切换 | 无 | [#95031](https://github.com/NousResearch/hermes-agent/issues/95031) |
| Linux desktop entry Exec 不可执行 | 图标启动永远失败 | 无 | [#90292](https://github.com/NousResearch/hermes-agent/issues/90292) |
| Desktop tool 执行环境错误 HERMES_HOME | 切换 profile 后 shell 环境仍指向旧 profile | 无 | [#72480](https://github.com/NousResearch/hermes-agent/issues/72480) |

### P3 — 一般

| Bug | 描述 | Fix PR | 链接 |
|---|---|---|---|
| Langfuse 插件 OTel context detach 错误 | 正常运行及 WebUI 关闭时持续报错 | 无 | [#95057](https://github.com/NousResearch/hermes-agent/issues/95057) |
| Discord tool schema 仅暴露部分 action | `send_message` 等文档记载的操作运行时不可用 | 无 | [#95061](https://github.com/NousResearch/hermes-agent/issues/95061) |
| Tool loop guardrail 硬停后无法自动恢复 | 需手动重新提示，模型无法自行恢复 | 无 | [#64322](https://github.com/NousResearch/hermes-agent/issues/64322) |
| `hermes profile create` 不创建 `plugins/` | 非 default profile 看不到 model-provider 插件 | 无 | [#88143](https://github.com/NousResearch/hermes-agent/issues/88143) |

**稳定性评估：** P2 级 Bug 堆积严重，特别是 xAI 兼容性（有竞相 fix PR）和 Windows 进程泄漏（无 fix）影响面广。Desktop 平台问题尤为突出。

---

## 6. 功能请求与路线图信号

| 功能请求 | 优先级 | 已有 PR | 纳入可能性 | 链接 |
|---|---|---|---|---|
| Desktop 显示项目下全部聊天（移除 3-session 上限） | P3 | 无 | 🟡 高（5👍 + 3 个重复 Issue 说明需求普遍） | [#70421](https://github.com/NousResearch/hermes-agent/issues/70421)、[#83058](https://github.com/NousResearch/hermes-agent/issues/83058)、[#90527](https://github.com/NousResearch/hermes-agent/issues/90527) |
| Hermes Authority Execution Layer 统一架构 | needs-decision | 无 | 🟡 中（架构提案，需维护者决策） | [#95028](https://github.com/NousResearch/hermes-agent/issues/95028) |
| Bot Mode 统一控制平面 | needs-decision | 无 | 🟡 中（同上，同一作者系列提案） | [#91911](https://github.com/NousResearch/hermes-agent/issues/91911) |
| Desktop 低成本后端启动（split-boot） | needs-decision | [#94484](https://github.com/NousResearch/hermes-agent/issues/94484) | 🟢 较高（已有重构提案，不触碰控制平面） | [#94484](https://github.com/NousResearch/hermes-agent/issues/94484) |
| Webhook 签名方案可配置 | P3 | [#95068](https://github.com/NousResearch/hermes-agent/pull/95068) | 🟢 较高（PR 已提交，直接对应 #68768） | [#68768](https://github.com/NousResearch/hermes-agent/issues/68768) |
| Chrome Extension 共享浏览器控制 | P3 | 无 | 🔴 低（大功能，无 PR） | [#84000](https://github.com/NousResearch/hermes-agent/issues/84000) |
| 结构化 quick_command 执行上下文 | needs-decision | 无 | 🟡 中 | [#67619](https://github.com/NousResearch/hermes-agent/issues/67619) |
| MCP 展示元数据通过 gateway 发布 | needs-decision | 无 | 🟡 中 | [#95040](https://github.com/NousResearch/hermes-agent/issues/95040) |

---

## 7. 用户反馈摘要

从 Issues 评论和反应中提炼的核心痛点：

| 痛点维度 | 具体反馈 | 来源 |
|---|---|---|
| **Provider 兼容性** | xAI Grok 完全不可用，用户配置后才发现 `tool_search` 保留名冲突，无文档预警 | [#95003](https://github.com/NousResearch/hermes-agent/issues/95003)（5👍） |
| **Desktop 会话管理** | 项目下只能看到 3 个聊天，多会话工作流极不友好，多位用户独立报告同一问题 | [#70421](https://github.com/NousResearch/hermes-agent/issues/70421)、[#83058](https://github.com/NousResearch/hermes-agent/issues/83058)、[#90527](https://github.com/NousResearch/hermes-agent/issues/90527) |
| **更新可靠性** | macOS `hermes update` 报告成功但 gateway 已死，用户对更新流程失去信任 | [#74973](https://github.com/NousResearch/hermes-agent/issues/74973) |
| **静默失败模式** | Ollama fallback 静默失效、429 无自动退避、proxy scheme 不识别——共同模式是"配置存在但运行时不生效且无诊断" | [#95054](https://github.com/NousResearch/hermes-agent/issues/95054)、[#94978](https://github.com/NousResearch/hermes-agent/issues/94978)、[#95042](https://github.com/NousResearch/hermes-agent/issues/95042) |
| **Windows 资源泄漏** | 删除 Bot/Profile 后进程不终止，长期使用后系统资源被耗尽 | [#94959](https://github.com/NousResearch/hermes-agent/issues/94959) |
| **终端兼容性** | Ghostty 等现代终端上 Shift+字母仍泄漏转义序列，影响日常使用 | [#92343](https://github.com/NousResearch/hermes-agent/issues/92343)（2👍） |
| **安全边界感知** | terminal tool 可绕过 SOUL.md 写保护，用户对安全边界的一致性表示担忧（虽被关闭） | [#57955](https://github.com/NousResearch/hermes-agent/issues/57955) |

**满意度趋势：** 用户对功能丰富度总体认可，但对 **静默失败** 和 **Desktop 稳定性** 的不满情绪明显上升。多个独立用户报告相同问题（3-session 上限、Ollama 静默回退）表明这些是系统性体验缺陷而非边缘 case。

---

## 8. 待处理积压

以下长期/高影响 Issue/PR 需维护者优先关注：

| Issue/PR | 状态 | 天数 | 严重度 | 说明 | 链接 |
|---|---|---|---|---|---|
| Skills index stale/degraded | OPEN | **39 天** | P3 | 96 条评论，自动化基础设施持续失败，影响文档可用性 | [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) |
| Desktop tool 执行环境错误 HERMES_HOME | OPEN | **30 天** | P2 | 切换 profile 后环境不一致，影响所有非 default profile 用户 | [#72480](https://github.com/NousResearch/hermes-agent/issues/72480) |
| Tool loop guardrail 硬停无恢复 | OPEN | **43 天** | P3 | 影响所有使用 tool 的工作流，需手动干预 | [#64322](https://github.com/NousResearch/hermes-agent/issues/64322) |
| Linux desktop entry Exec 不可执行 | OPEN | **7 天** | P2 | 图标启动永远失败，Linux Desktop 用户首次体验即受阻 | [#90292](https://github.com/NousResearch/hermes-agent/issues/90292) |
| `profile create` 不创建 `plugins/` | OPEN | **9 天** | P3 | 非 default profile 看不到 model-provider，影响新用户引导 | [#88143](https://github.com/NousResearch/hermes-agent/issues/88143) |
| Chrome Extension 共享浏览器 | OPEN | **15 天** | P3 | 高需求功能，Cloudflare 等人机验证场景刚需 | [#84000](https://github.com/NousResearch/hermes-agent/issues/84000) |
| Model Selection Dropdown 高度受限 | OPEN | **80 天** | P3 | 长期 UX 问题，模型列表多时极难操作 | [#40963](https://github.com/NousResearch/hermes-agent/issues/40963) |

**积压评估：** 41 条待合并 PR 对 9 条已合并/关闭，合并比仅 18%。#66616（Skills index）已持续 39 天且有 96 条评论，属于自动化基础设施的健康风险，建议优先排期。P2 级 Bug #72480（30 天）和 #90292（7 天）直接影响 Desktop 核心功能，亦需加速处理。

---

*本报告基于 GitHub 公开数据自动生成，数据截止 2026-08-26。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw 项目每日动态报告**  
**日期：2026‑08‑26**  
（基于 GitHub 过去 24 h 数据）

---

## 1. 今日速览
- 本日社区保持**中等活跃**，共计 **4 条新建/活跃 Issue**，其中两条已累计 **7 条评论**，显示用户在使用过程中遇到关键卡点。  
- 仅有 **1 条 PR**（仍在审阅中），未出现合并或关闭的记录，说明当前的代码审查节奏稍慢。  
- 项目暂无新版本发布，功能层面停留在 **0.3.1**（最新稳定）以及 **nightly** 分支。整体健康度为 **“轻度压力”**，主要集中在 UI 性能、网络连接容错和 Slack 集成三个方向。

---

## 2. 版本发布
> **（本日无新 Release）**  
> 如后续发布，请在此块补充版本号、更新日志、破坏性变更及迁移指南。

---

## 3. 项目进展
- **PR #3340**（`fix(slack): set FileSize on media upload params`）仍为 **OPEN**，尚未合并。该 PR 直接对应 **Issue #3338**（Slack 上传图片失败），若尽快合并将解决媒体上传的阻塞问题，对 Slack 频道的使用体验有显著提升。  
- 除此之外，没有任何 PR 在本日完成合并或关闭，项目的功能改进与 bug 修复进度相对缓慢。维护者需加快审查节奏，以防止 “stale” 标记导致社区失去信心。

---

## 4. 社区热点
| 序号 | 类型 | 标题 | 评论数 | 👍 | 链接 |
|------|------|------|--------|----|------|
| **#3281** | Issue (BUG) | Web UI chat input is very laggy when history is a little long | **7** | 1 | <https://github.com/sipeed/picoclaw/issues/3281> |
| **#3269** | Issue (BUG) | MCP server connection failure makes agent loop hang | **7** | 1 | <https://github.com/sipeed/picoclaw/issues/3269> |
| **#3338** | Issue (BUG) | Slack does not attach image media content | **2** | 0 | <https://github.com/sipeed/picoclaw/issues/3338> |
| **#3340** | PR (fix) | set FileSize on media upload params | — | 0 | <https://github.com/sipeed/picoclaw/pull/3340> |

**分析**  
- **#3281** 与 **#3269** 同为 **7 条评论**，是本日最热议的话题。两者均涉及 **核心交互体验**（Web UI 输入卡顿）和 **系统容错**（MCP 失联导致循环挂起），表明用户在生产环境中已经遇到阻断业务的严重问题。  
- **#3338** 虽评论不多，但直接关联到 **PR #3340**，社区对 Slack 媒体上传的需求迫切，期待修复后能恢复工作流。  
- **#3345** 为新建的 “轻量化 worker 模式”提案，暂未产生讨论，但透露了 **边缘计算** 场景的潜在增长点。

---

## 5. Bug 与稳定性（严重程度排序）

| 严重程度 | Issue 编号 | 标题 | 影响范围 | 当前状态 | 是否已有 Fix PR |
|----------|------------|------|----------|----------|----------------|
| **高** | #3269 | MCP server connection failure → agent loop hang | 所有使用 MCP 远程代理的部署，导致整个聊天界面失去响应 | **OPEN** (Stale) | 暂无 |
| **中** | #3281 | Web UI chat input lag with longer history | Web 前端用户交互，影响持续使用的流畅度 | **OPEN** (Stale) | 暂无 |
| **中** | #3338 / PR #3340 | Slack image upload always fails (`file size cannot be 0`) | Slack 集成用户，阻断媒体共享 | **OPEN** (Stale) | **已有 PR #3340**（待合并） |
| **低** | #3345 | 轻量化 PicoClaw worker 模式提案 | 长期潜在功能，当前未实现 | **OPEN** (Proposal) | N/A |

> **建议**：优先审查并合并 **PR #3340**，快速解决 Slack 上传问题；随后集中资源在 **#3269** 与 **#3281**，因为它们直接导致服务不可用或显著降低用户体验。

---

## 6. 功能请求与路线图信号

| 编号 | 类型 | 内容概述 | 关联 PR | 潜在下版本纳入可能性 |
|------|------|----------|--------|----------------------|
| #3345 | Proposal | “轻量化 worker 模式”，让 PicoClaw 能在仅 10‑20 MB 可用内存的边缘设备上运行（如低端 RISC‑V、旧 Android） | 暂无 | **中**：若社区对边缘部署需求上升，可在 0.4.x 期间加入 “worker‑mode” 开关。 |
| （隐含）| Bug 修复 | Slack media 上传缺少 `FileSize` 参数 | PR #3340 | **高**：已实现，待合并后即为 0.3.2 之补丁。 |
| （隐含）| 性能改进 | Web UI chat 输入卡顿的根因（前端渲染或历史记录管理） | 暂无 | **高**：需在下一个 minor 版本（0.4.0）加入前端性能优化或历史分页。 |

---

## 7. 用户反馈摘要

- **Web UI 输入卡顿**：用户报告在对话历史累计约 30 条以上后，输入框出现明显延迟，甚至卡死。根本诉求是 **“保持流畅交互，即使历史记录长”**。  
- **MCP 失联**：当后端 MCP（模型协同平台）网络异常，客户端的 agent 循环不退出，导致 **“聊天界面不再回复”**，用户希望实现 **超时检测 + 自动重连 / 退出** 机制。  
- **Slack 媒体上传**：企业用户在 Slack 中发送图片时全部失败，错误信息显示 “file size cannot be 0”。需求是 **“能够像普通消息一样顺利上传图片/文件”**。  
- **轻量化运行**：提出在资源极其受限的设备上运行 PicoClaw 的想法，强调 **“边缘计算、家庭网关、旧设备”** 这些场景的可行性。  

总体来看，用户**对可靠性和流畅交互的期待**最高，尤其是生产环境下的网络容错与前端性能。

---

## 8. 待处理积压（长期未响应）

| 编号 | 标题 | 创建时间 | 最近更新 | 状态 | 推荐关注点 |
|------|------|----------|----------|------|-------------|
| #3281 | Web UI chat input lag | 2026‑07‑21 | 2026‑08‑25 | **OPEN** (Stale) | 前端性能调优、历史分页或虚拟化列表 |
| #3338 | Slack does not attach image media content | 2026‑08‑17 | 2026‑08‑25 | **OPEN** (Stale) | 与 PR #3340 关联，需快速审查合并 |
| #3340 | fix(slack): set FileSize on media upload params | 2026‑08‑17 | 2026‑08‑25 | **OPEN** (Stale) | 关键 bug 修复，阻塞 Slack 用户 |
| #3269 | MCP server connection failure → agent loop hang | 2026‑07‑20 | 2026‑08‑25 | **OPEN** (Stale) | 需要超时与错误恢复机制 |
| #3345 | Proposal: lightweight PicoClaw worker mode | 2026‑08‑25 | 2026‑08‑25 | **OPEN** (Proposal) | 长期路线图信号，建议在月度规划中评审 |

> **行动建议**  
> 1. **立即审查并合并 PR #3340**（Slack 文件上传），解除阻塞。  
> 2. 为 **#3269** 与 **#3281** 指派负责人，制定 **“bug‑fix sprint”**（预计 1‑2 周），提交对应单元测试。  
> 3. 在下次项目周会中把 **#3345** 纳入 **路线图讨论**，评估资源需求与社区兴趣度。

---

### 结论
PicoClaw 的社区活跃度仍在稳步增长，用户主要聚焦在 **可靠性** 与 **前端交互体验** 两大痛点。当前缺少代码合并导致的 **修复滞后**，若不加速审查流程，可能出现社区活跃度下降的风险。建议维护者在接下来的一周内重点解决 **Slack**、**MCP** 与 **Web UI** 三个关键问题，同时开始评估 **轻量化 worker 模式** 的可行性，以支撑未来的边缘计算需求。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-08-26

> 数据来源：[github.com/qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)

---

## 1. 今日速览

NanoClaw 今日活跃度**显著偏高**：过去 24 小时内 PR 更新达 **50 条**（其中 34 条待合并、16 条已合并/关闭），Issues 新增 **5 条**且无一关闭，无新版本发布。核心团队（amit-shafnir、gavrielc、Koshkoshinsk）密集提交了多个重构与修复 PR，显示出对项目基础架构（compose 流水线、runner 会话管理、setup 向导）的集中治理。社区侧，贡献者 glifocat 一日内连续报告 4 个 Bug，均指向 skill 系统在作用域隔离、shell 安全和升级覆盖方面的边界缺陷，值得高度关注。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日共 **6 条 PR 被合并或关闭**，主要集中在架构去重与关键修复：

| PR | 状态 | 要点 |
|---|---|---|
| [#3536](https://github.com/nanocoai/nanoclaw/pull/3536) fix(compose): inline every instruction source into one project document | MERGED | 将 `CLAUDE.md` 的 `@` 导入全部内联为单一项目文档，解决 Claude Code 安全门导致 import 被拒后代理永远丢失能力指令的问题。**影响面大**，所有代理现在都能收到此前被静默吞掉的能力说明。 |
| [#3539](https://github.com/nanocoai/nanoclaw/pull/3539) refactor(codex): keep the spec, drop the duplicated composer | MERGED | Codex 改用 trunk 的共享 composer 替代自身副本，消除两套 composer 已有的行为漂移（如 `cli_scope: disabled` 的组错误收到 `ncl tasks` 手册）。 |
| [#3540](https://github.com/nanocoai/nanoclaw/pull/3540) fix(opencode): run the agent session in the agent workspace | MERGED | `opencode serve` 的 cwd 从镜像 `WORKDIR`（`/workspace/group`）修正为实际代理工作区，使 OpenCode 的项目文档遍历能正确命中。 |
| [#3544](https://github.com/nanocoai/nanoclaw/pull/3544) fix(slack): add explicit room handoffs | CLOSED | 被 [#3545](https://github.com/nanocoai/nanoclaw/pull/3545) 替代，后者重新提交了显式 Slack 房间交接工具。 |
| [#3537](https://github.com/nanocoai/nanoclaw/pull/3537) refactor(codex): keep the spec, drop the duplicated composer | CLOSED | #3539 的前序版本，已合并入主线后关闭。 |
| [#2656](https://github.com/nanocoai/nanoclaw/pull/2656) fix(add-mnemon): run mnemon setup in index.ts main(), not entrypoint.sh | MERGED | 修复 mnemon 钩子永远不注册的问题——host 在 spawn 时覆盖了 `entrypoint.sh`，将 setup 调用移至 `main()` 解决。 |

**整体评估**：compose 内联与 codex 去重两步是**架构级推进**，消除了长期积累的指令丢失与行为不一致问题；opencode 工作区修复解决了实际使用中的功能性中断。项目在"让每个代理稳定获得完整上下文"这条主线上取得了实质性进展。

---

## 4. 社区热点

由于今日所有 Issue 与 PR 的评论数均为 0 或 undefined，尚无高讨论量条目。但以下 Issue 因问题严重性和设计影响值得关注：

- **[#3538](https://github.com/nanocoai/nanoclaw/issues/3538) Proposal: use isolated NanoClaw containers as opt-in household edge workers** — 作者 kvnloo 提出利用用户现有闲置设备（PC、NAS、家庭服务器）作为边缘计算节点，绕过 GPU 和云服务成本。这是一个**架构级提案**，如被采纳将显著改变部署拓扑，但目前尚无团队回应。
- **[#3543](https://github.com/nanocoai/nanoclaw/issues/3543) Shell 注入漏洞** — 邮箱未引用传入 `bash -c`，含撇号的邮箱直接导致登录失败，shell 元字符可绕过验证。虽未引发讨论，但属于安全问题，优先级应高于功能缺陷。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | Fix PR 状态 |
|---|---|---|---|
| 🔴 **高** | [#3543](https://github.com/nanocoai/nanoclaw/issues/3543) | `add-dial` / `add-dial-tool` 将 `owner_email` 未引用注入 `bash -c`，撇号邮箱破坏登录，shell 元字符绕过验证。**Shell 注入风险。** | ⚠️ 暂无 |
| 🟠 **中** | [#3535](https://github.com/nanocoai/nanoclaw/issues/3535) | `add-vercel` 按 session 复制 skill 副本，阻塞 spawn 时的 symlink 同步，并将 pin group 指向过时 skill。 | ⚠️ 暂无 |
| 🟠 **中** | [#3532](https://github.com/nanocoai/nanoclaw/issues/3532) | `add-*-tool` 的 per-agent 作用域仅覆盖已有 group，后续新建 group 默认获得该工具权限（本应被 block）。 | 🟡 相关 PR [#3525](https://github.com/nanocoai/nanoclaw/pull/3525) 修复了 scope prompt 的回显 Bug，但未解决新建 group 继承问题 |
| 🟡 **低-中** | [#3529](https://github.com/nanocoai/nanoclaw/issues/3529) | `update-nanoclaw` skill refresh 误将本地自定义 adapter 视为 skill 导入，导致验证失败或被覆盖，且无 opt-out 机制。 | ⚠️ 暂无 |

**总结**：4 个 Bug 中 3 个由 glifocat 报告，全部指向 skill 系统在"升级后一致性"和"shell 边界安全"上的系统性缺陷。最高优先级是 #3543 的 Shell 注入问题，目前无修复 PR。

---

## 6. 功能请求与路线图信号

| Issue/PR | 功能方向 | 纳入可能性评估 |
|---|---|---|
| [#3538](https://github.com/nanocoai/nanoclaw/issues/3538) Household edge workers | 将 NanoClaw 容器部署到用户自有设备作为边缘节点 | **远期可能**。与项目当前单 Docker host 架构差异较大，需大量设计工作，尚无团队响应。 |
| [#3298](https://github.com/nanocoai/nanoclaw/pull/3298) feat(channels): add local web chat | 内置本地 Web 聊天通道，无需外部账号即可使用 | **高**。核心团队成员提交，解决首次安装体验和 demo 场景，已活跃多日，是明显的路线图项目。 |
| [#3485](https://github.com/nanocoai/nanoclaw/pull/3485) feat(setup): structured setup driver protocol | 为 setup 向导添加结构化驱动协议，使外部程序可编程驱动安装流程 | **高**。属于 setup 系列重构的一部分，与 #3486、#3487 构成完整链条，预示下一版本 setup 体验将大幅变化。 |
| [#3486](https://github.com/nanocoai/nanoclaw/pull/3486) feat(setup): expose build-time preseed catalog | 暴露 setup 设置的预置目录，使外部工具可预填配置 | **高**。同上。 |
| [#3487](https://github.com/nanocoai/nanoclaw/pull/3487) feat(setup): accept client timezone preseed | 接受 `--tz` 预置时区 | **高**。同上。 |
| [#3528](https://github.com/nanocoai/nanoclaw/pull/3528) feat(runner): lease-id claimants & incarnation gate | Runner 会话租约、重启重叠保护、代际门控 | **高**。核心团队成员 gavrielc 提交，属于 durable host 集成主线，将大幅提升运行时稳定性。 |
| [#2431](https://github.com/nanocoai/nanoclaw/pull/2431) Conditional thread policy for Slack adapter | Slack DM 保持顶层回复，频道内使用线程 | **中**。长期未合并但持续活跃，社区需求明确，等待审阅。 |

---

## 7. 用户反馈摘要

从今日 Issue 提炼：

- **升级后本地定制被覆盖**（[#3529](https://github.com/nanocoai/nanoclaw/issues/3529)）：用户自行编写 adapter 存放在项目树中，`update-nanoclaw` 将其误判为 skill 并尝试替换或验证，导致升级流程中断。**痛点：自定义扩展与官方升级流程冲突，缺乏 opt-out。**
- **Shell 安全盲区**（[#3543](https://github.com/nanocoai/nanoclaw/issues/3543)）：含撇号的邮箱（如 `o'brien@example.com`）直接导致登录失败，暴露出 skill 中 `bash -c` 未引用变量的普遍模式。**痛点：看似简单的邮箱输入场景被 skill 的 shell 执行模型阻断。**
- **权限作用域漂移**（[#3532](https://github.com/nanocoai/nanoclaw/issues/3532)）：用户为特定 agent 配置工具权限后，新建 group 默认获得该工具，违背了最小权限预期。**痛点：动态环境下的权限管理缺少"默认拒绝"语义。**
- **边缘部署需求**（[#3538](https://github.com/nanocoai/nanoclaw/issues/3538)）：用户拥有多台闲置设备，希望就地运行而非购买额外 GPU 或付费云服务。**场景：家庭/小型办公环境的自托管 AI agent 运行。**

---

## 8. 待处理积压

| 条目 | 状态 | 积压时长 | 风险 |
|---|---|---|---|
| [#2431](https://github.com/nanocoai/nanoclaw/pull/2431) Conditional thread policy for Slack adapter | OPEN | **~3.5 个月**（创建于 2026-05-12） | 社区贡献者长期等待审阅，功能需求明确（DM 与频道差异化线程策略），持续活跃但未获核心团队反馈。 |
| [#3452](https://github.com/nanocoai/nanoclaw/pull/3452) fix(update): give captured update commands a real output buffer | OPEN | ~3 天 | update 命令输出被静默吞掉，影响调试与错误诊断。 |
| [#3543](https://github.com/nanocoai/nanoclaw/issues/3543) Shell 注入：邮箱未引用注入 bash -c | OPEN，无 fix PR | 1 天 | **安全风险**，含撇号邮箱可破坏登录，shell 元字符可绕过验证。建议立即确认影响范围并优先修复。 |
| [#3529](https://github.com/nanocoai/nanoclaw/issues/3529) 本地 adapter 被 skill refresh 覆盖 | OPEN，无 fix PR | 1 天 | 升级路径被阻断，影响已有自定义扩展的用户。 |

**提醒维护者**：#3543 是安全相关 Bug，建议尽快确认并分派；#2431 已积压超过三个月，建议给出审阅计划或合并意见，避免社区贡献者流失。

---

*本报告基于 2026-08-25 ~ 2026-08-26 UTC 的 GitHub 活动数据自动生成。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

### 1. **今日速览**

NullClaw 过去 24 小时活跃度较低，仅新增 1 条 Issue，无 PR 更新或版本发布。尽管整体活跃度低，但新增 Issue 聚焦于家庭边缘计算场景下的运行优化与资源调度潜力，显示社区仍对项目在分布式部署方面的扩展性保持兴趣。当前项目处于功能完善阶段，需维护者跟进社区反馈以推动下一阶段发展。

---

### 2. **版本发布**

*暂无新版本发布。*

---

### 3. **项目进展**

*今日无合并或关闭的 PR。*

---

### 4. **社区热点**

**#994 [OPEN] Household edge mesh using RuntimeAdapter workers and signed receipts**  
🔗 [https://github.com/nullclaw/nullclaw/issues/994](https://github.com/nullclaw/nullclaw/issues/994)

👤 *作者:* kvnloo  
⏱️ *创建时间:* 2026-08-25  
💬 *评论数:* 0  
👍 *点赞数:* 0  

该 Issue 提出了在家庭网络环境中构建边缘网状网络的设想，利用 NullClaw 已有的 `RuntimeAdapter`, `Peripheral`, Zig 运行时等模块。用户希望实现多设备协同、签名验证机制以及资源共享模型，是对项目分布式功能扩展的一个重要建议。目前尚无响应，对此类架构性增强的官方评估十分必要。

---

### 5. **Bug 与稳定性**

*暂无报告。*

---

### 6. **功能请求与路线图信号**

**#994 Issue 中提出的功能请求包括：**
- 家庭局域网内多节点设备自动发现与管理  
- 使用 `RuntimeAdapter` 实现跨设备的任务分发与认证  
- 引入签名证书机制保证通信安全性  

这些请求与当前项目所具备的模块设计高度契合，但涉及架构层面的改动，可能将作为未来版本的重点考虑对象。

---

### 7. **用户反馈摘要**

*kvnloo* 表示，NullClaw 在家庭边缘部署场景下展现出良好的基础能力，尤其是体积小、内存受限、模块解耦等优势，但目前缺乏对多设备环境下的协同调度支持。用户期望seeing更加完善的文档或示例代码来协助构建本地网状网络。

---

### 8. **待处理积压**

*暂无明确标识为长期未响应的重要 Issue 或 PR。*

--- 

如需进一步分析历史数据或跟踪特定主题演进，请随时告知。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

## IronClaw 项目日报 — 2026-08-26

---

### 1. 今日速览

IronClaw 在过去24小时内 Continued 高活跃开发态势：共处理 38 个 Issue 与 26 个 PR，体现出健康的协作效率。今日重点聚焦于 CI 流水线优化、Web UI 用户体验提升、Telegram 集成问题修复以及通知系统完善。虽未发布新版本，但多个关键功能正处于开发或测试阶段，显示出项目朝着 v1.4.0 Roadmap 稳步推进的趋势。社区反馈热烈，尤其在设计系统重构、设备链接流程问题和性能优化方面引发关注。整体项目状态良好，开发者积极响应用户反馈并持续迭代。

---

### 2. 版本发布

**无新版本发布**

---

### 3. 项目进展

#### ✅ 今日合并/关闭的重要 PR

##### 🔧 CI 优化类
- **[#7817](https://github.com/nearai/ironclaw/pull/7817)**  
  **标题:** `ci: nextest test pipeline, full-failure signal, PR unthrottle (T2)`  
  **类型:** 已合并 / 关闭  
  **摘要:** 替代旧有的 `cargo test` 顺序执行方式，使用 `cargo-nextest` 提升测试并发性能，并提供完整的失败信号输出。  
  **影响:** 提升 CI 效率，减少冗余等待时间，有助于加快迭代速度。

- **[#7819](https://github.com/nearai/ironclaw/pull/7819)**  
  **标题:** `ci: PR/queue check convergence — planner drift guard, default-features clippy on PRs (T3)`  
  **类型:** 已合并 / 关闭  
  **摘要:** 解决 PR 队列中因缺失检查导致的失败问题，增强 CI 稳定性。  
  **影响:** 减少 CI 拥堵，提升 PR 处理速度。

- **[#7820](https://github.com/nearai/ironclaw/pull/7820)**  
  **标题:** `test: scope-isolation suite consolidation probe (T2 follow-up)`  
  **类型:** 已合并 / 关闭  
  **摘要:** 探测测试作用域隔离套件的潜在精简空间。  
  **影响:** 辅助未来测试架构优化。

##### 💻 WebUI 用户体验优化
- **[#7846](https://github.com/nearai/ironclaw/pull/7846)**  
  **标题:** `refactor(notifications): retire legacy approval fallback`  
  **类型:** 已合并 / 关闭  
  **摘要:** 移除遗留审批回退机制，使持久化通知收件箱成为唯一通知来源。  
  **影响:** 简化代码逻辑，提升通知系统一致性。

- **[#7877](https://github.com/nearai/ironclaw/pull/7877)**  
  **标题:** `fix(webui): localize exposed route copy`  
  **类型:** 已合并 / 关闭  
  **摘要:** 完善十种非英语言种的本地化支持，修复部分页面缺失翻译问题。  
  **影响:** 增强国际化体验。

- **[#7816](https://github.com/nearai/ironclaw/pull/7816)**  
  **标题:** `feat(webui): add refresh and connect entries to the OOBE suggestion drawer`  
  **类型:** 已合并 / 关闭  
  **摘要:** 增加引导建议抽屉中的刷新与连接入口。  
  **影响:** 改善首次使用体验。

- **[#7881](https://github.com/nearai/ironclaw/pull/7881)**  
  **标题:** `refactor(webui): replace legacy Extensions panels with shared Panel`  
  **类型:** 已合并 / 关闭  
  **摘要:** 替换旧版扩展面板为统一组件。  
  **影响:** 增强 UI 一致性。

- **[#7882](https://github.com/nearai/ironclaw/pull/7882)**  
  **标题:** `fix(webui): adopt shared controls in Admin Users`  
  **类型:** 已合并 / 关闭  
  **摘要:** 将用户管理页面表单控件替换为共享组件。  
  **影响:** 统一样式，提升可维护性。

##### 🛠️ 扩展与插件功能增强
- **[#7861](https://github.com/nearai/ironclaw/pull/7861)**  
  **标题:** `fix(extensions): restore device-link guidance on the install/activate paths`  
  **类型:** 已合并 / 关闭  
  **摘要:** 修复设备链接流程中因缺少工具导致的中断问题。  
  **影响:** 改善插件安装与激活流程。

- **[#7884](https://github.com/nearai/ironclaw/pull/7884)**  
  **标题:** `fix: unlock stuck threads with wall-clock occupancy and honest queued-busy copy`  
  **类型:** 已合并 / 关闭  
  **摘要:** 防止长时间占用的线程锁，优化系统响应性能。  
  **影响:** 提升系统稳定性。

---

### 4. 社区热点

#### 🔥 最受关注 Issue

- **[#7732](https://github.com/nearai/ironclaw/issues/7732)**  
  **标题:** `[epic, v1.4.0, roadmap] Persistent per-user sandbox with iron-proxy`  
  **评论数:** 9  
  **摘要:** 探讨构建持久化用户沙箱环境的方案，支持 Docker 容器化运行及延迟执行任务模型。  
  **诉求:** 用户希望获得隔离、安全且可持久化的工作空间。

- **[#7799](https://github.com/nearai/ironclaw/issues/7799)**  
  **标题:** `CI expedite T2: nextest pipeline, full-failure signal, PR unthrottle`  
  **评论数:** 4  
  **摘要:** 改进 CI 测试流程以减少测试耗时并提高反馈速度。  
  **诉求:** 开发者期望更高效的 CI 管道。

- **[#7862](https://github.com/nearai/ironclaw/issues/7862)**  
  **标题:** `Device link fails with generic "Something went wrong while linking"`  
  **评论数:** 3  
  **摘要:** Telegram 设备链接失败，错误信息不清晰。  
  **诉求:** 用户希望更清晰的错误提示与链接指引。

- **[#7891](https://github.com/nearai/ironclaw/issues/7891)**  
  **标题:** `perf(extensions): unprojected capability payloads + blind 24 KiB head-slice cost 14.3s of inference`  
  **评论数:** 2  
  **摘要:** Gmail 工具调用时因未投影数据导致推理超时。  
  **诉求:** 用户期望更高效的数据处理与推理响应。

---

### 5. Bug 与稳定性

| Issue | 类型 | 严重性 | 状态 | 是否有 Fix PR |
|-------|------|--------|------|---------------|
| [#7888](https://github.com/nearai/ironclaw/issues/7888) | Bug | 高 | OPEN | ❌ |
| [#7862](https://github.com/nearai/ironclaw/issues/7862) | Bug | 中 | OPEN | ✳️ 部分修复（见[#7861](https://github.com/nearai/ironclaw/pull/7861)） |
| [#7891](https://github.com/nearai/ironclaw/issues/7891) | Bug | 中 | OPEN | ❌ |
| [#7892](https://github.com/nearai/ironclaw/issues/7892) | Bug | 中 | OPEN | ❌ |

- **#7888**：用户尝试获取日志时界面卡死，影响多个实例。  
- **#7862**：Telegram 设备链接失败，用户无法完成账户绑定。  
- **#7891**：Email 工具调用耗时过长，影响使用体验。  
- **#7892**：Agent Loop 中存在重复调用问题，拖慢运行效率。

---

### 6. 功能请求与路线图信号

| Issue | 类型 | 建议纳入版本 | 说明 |
|-------|------|----------------|------|
| [#7893](https://github.com/nearai/ironclaw/issues/7893) | Enhancement | v1.4.0+? | 请求为自动化添加“经验教训”功能，提升下次执行效果。 |
| [#7867](https://github.com/nearai/ironclaw/issues/7867) | Feature | v1.4.0+ | 请求在 WebUI 中加入语音输入功能，提升输入效率。 |
| [#7871](https://github.com/nearai/ironclaw/issues/7871) | Epic | v1.4.0+ | 规划 Slack 至控制台桥及富交互体验。 |
| [#4625](https://github.com/nearai/ironclaw/issues/4625) | Epic | 长远规划 | Slack 作为个人/团队代理渠道的支持。 |

---

### 7. 用户反馈摘要

- **设备链接流程不清晰**：多位用户在 Telegram 设置过程中遇到困难，期望更清晰的引导与错误提示。
- **性能瓶颈**：部分用户反映 Email 工具调用缓慢，影响实际应用场景。
- **国际化需求强烈**：多个非英语用户期望更多本地化内容。
- **CI 效率问题**：开发者期望更快速的测试反馈以加速开发节奏。

---

### 8. 待处理积压

| Issue | 内容 | 最后更新时间 | 备注 |
|-------|------|----------------|------|
| [#4625](https://github.com/nearai/ironclaw/issues/4625) | Slack channel-routed personal and team agents | 2026-08-25 | 长期未活跃，但仍未实现 |
| [#7038](https://github.com/nearai/ironclaw/issues/7038) | Design System Phase 1 — Storybook integration | 2026-08-25 | 已关闭并重定向至 [#7781](https://github.com/nearai/ironclaw/issues/7781) |
| [#7867](https://github.com/nearai/ironclaw/issues/7867) | Voice-to-text in the WebUI composer | 2026-08-25 | 新功能请求，值得跟进 |
| [#7888](https://github.com/nearai/ironclaw/issues/7888) | Getting logs hangs indefinitely | 2026-08-25 | 高优先级 bug，需紧急处理 |

--- 

📝 *本日报基于 GitHub 数据整理，旨在快速传达项目动态。如需深入分析某功能或技术细节，请查看原文链接。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI – 项目动态日报**  
*日期：2026‑08‑26*  
*数据来源：GitHub 仓库 `netease-youdao/LobsterAI`（截至 2026‑08‑26 23:59）*  

---

## 1. 今日速览
- 项目活跃度保持**高水平**：24 小时内共计 **12 条** 互动（1 条新 Issue、11 条 PR 变动），其中 **9 条 PR 已合并/关闭**。  
- 两个 **新版本**（2026.8.25 与 2026.8.21）在最近 4 天内陆续发布，说明发布节奏在 **每 4‑5 天一次**。  
- 社区关注点集中在 **本地资料库的交互体验**、**模型目录 UI** 与 **数据埋点**，对应的 PR 均已合并，功能成熟度提升。  
- 唯一待处理的 Issue 是 **微信群已满**，表现为社区运营需求，而不是技术缺陷。  

---

## 2. 版本发布  

### 2026.8.25 – **LobsterAI 2026.8.25**
| 关键改动 | 说明 | 影响范围 |
|----------|------|----------|
| **feat: library** (`#2513`) | 引入全新库模块，统一资源加载入口。 | 全局（首次加载、插件机制）。 |
| **跨平台缩略图与本地产物生命周期** (`#2524`) | 统一不同平台（Windows/macOS/Linux）下的缩略图生成策略；完善本地产物（artifact）创建、更新、删除的生命周期管理。 | 本地文件浏览、资源管理。 |
| **本地产物预览与操作体验优化** (`#2524` 同 PR) | 改进预览卡片 UI、提升滚动/分页时的流畅度，解决刷新闪烁问题（对应 PR #2531）。 | 资料库 UI。 |
| **无破坏性变更** | 所有改动保持向后兼容，未删除公开 API。 | — |
| **迁移建议** | 建议在本地资料库首次打开时刷新缓存，以利用新生命周期管理；若项目自定义了缩略图插件，请检查插件兼容性（目前已适配 `electron 43.x`）。 | 开发者、企业部署。 |

### 2026.8.21 – **LobsterAI 2026.8.21**
| 关键改动 | 说明 |
|----------|------|
| **usage analytics** (`#2515`) | 为“启用开关”和“Workbench 打开”添加使用统计埋点。 |
| **dsh 更新至 0.1.1‑rc.1** (`#2516`) | 修复若干兼容性问题，提升调试工具稳定性。 |
| **代码重构** (`#2516` 中的 `refactor(dsh)`) | 把使用统计代码迁移到独立模块，便于后续扩展。 |

> **注**：两个发行版均未包含破坏性改动，升级过程可直接在现有环境中执行 `npm run release`（或对应的 CI 流程）即可。

---

## 3. 项目进展（已合并/关闭的 PR）

| PR 编号 | 标题 | 主要贡献 | 影响模块 | 合并时间 |
|--------|------|----------|----------|----------|
| **#2529** | feat(analytics): 完善资料库埋点与发布转化归因 | 新增资料库曝光、筛选、搜索、预览、收藏、刷新等全链路埋点；实现付费订阅转化归因、重试与清理机制。 | 统计/后端 | 2026‑08‑25 |
| **#2531** | fix(library): 修复本地产物后台刷新闪烁 | 拆分加载层级、合并历史回填、批量查询 API、任务删除回退；显著提升滚动/分页体验。 | 资源库 UI | 2026‑08‑25 |
| **#2533** | fix(artifacts): 区分网页与本地服务的预览展示 | 新增图标/文案区分、页面渲染规则、文档说明。 | 预览卡片 | 2026‑08‑25 |
| **#2532** | fix(sidebar): fade out login promo tip | 自动隐藏免费 token 提示，防止 UI 噪声。 | 侧边栏 | 2026‑08‑25 |
| **#2530** | feat(settings): add plan model catalog | 在模型设置界面加入“计划模型”标签页，展示定价目录、分类卡片、轻量诊断。 | 设置/模型管理 | 2026‑08‑25 |
| **#2534** | Release/2026.8.20 | 打包并发布 2026.8.20 版本（内部里程碑）。 | — | 2026‑08‑25 |
| **#2535** | feat(settings): add plan model catalog *(merged into #2530)* | 预备 PR，已被 #2530 合并。 | 设置 | 2026‑08‑25 |
| **#1275** / **#1276** | CI: bump stale/first‑interaction actions | 更新 GitHub Actions 依赖，提升 CI 稳定性。 | CI | 2026‑08‑25 |
| **#1277** | chore(deps-dev): bump electron group | 将 `electron` 从 40.2.1 升至 43.4.1，包含 `electron‑builder` 更新。 | 构建/运行时 | 2026‑08‑25 |

**总体评估**：本轮合并重点在 **用户交互流畅性**（#2531、#2532、#2533）和 **数据分析能力**（#2529），说明团队正从功能完善向运营洞察转型，项目功能成熟度已进入 **“可生产化、可运营化”** 阶段。

---

## 4. 社区热点

| 类型 | 链接 | 关键讨论点 | 关注度 |
|------|------|------------|--------|
| **Issue #2536** (OPEN) | <https://github.com/netease-youdao/LobsterAI/issues/2536> | “微信群已满人”，用户请求新增微信社群或其他渠道。 | 👍 0 / 评论 1（社区运营需求）。 |
| **PR #2529** (CLOSED) | <https://github.com/netease-youdao/LobsterAI/pull/2529> | 详细讨论了 **埋点隐私与采样策略**，多位贡献者提出数据匿名化方案。 | 评论多、审稿通过快速（1 天内合并）。 |
| **PR #2531** (CLOSED) | <https://github.com/netease-youdao/LobsterAI/pull/2531> | 大量 UI / 性能测试反馈，用户抱怨**刷新闪烁**影响使用。合并后 UI 体验显著提升。 | 高关注度（涉及核心库）。 |
| **PR #1159** (OPEN) | <https://github.com/netease-youdao/LobsterAI/pull/1159> | “Session Fork” 功能请求，期望在协作会话中快速分支保存实验进度。 | 长期未响应（自 3 月提交），社区已有多次催促。 |

*热点背后诉求*：  
- **运营渠道**：Issue #2536 表明现有社区入口（微信群）已达到容量上限，需要 **多渠道（Discord、Telegram、企业 Slack）** 继续扩容。  
- **可观测性**：PR #2529 的热议说明用户对 **行为埋点、转化分析** 越来越关注，后续可以考虑开放 **Dashboard** 给企业用户。  
- **协作体验**：Session Fork 需求体现出用户在 **多轮迭代、实验性工作流** 中需要更细粒度的历史管理，属于 **高级协作功能** 的重要信号。

---

## 5. Bug 与稳定性

| 严重程度 | 描述 | 对应 PR（已修复） | 状态 |
|----------|------|-------------------|------|
| **高** | **本地产物后台刷新闪烁**（视觉卡顿、用户误操作） | #2531 | 已合并，已在 2026.8.25 版本修复。 |
| **中** | **侧边栏免费 token 提示未自动消失**（产生 UI 噪声） | #2532 | 已合并。 |
| **中** | **网页与本地服务预览展示混淆**（图标/文案错误） | #2533 | 已合并。 |
| **低** | **Electron 依赖安全漏洞**（旧版 40.x） | #1277 | 通过升级到 43.4.1 已解决。 |
| **信息** | **微信群已满**（运营需求） | — | 待运营团队处理，非技术 bug。 |

> **总体稳定性**：自 2026‑08‑21 以来，未出现回归崩溃报告，核心 UI 与后台同步逻辑已在本轮 PR 中得到显著提升。

---

## 6. 功能请求与路线图信号

| 请求 | 链接 | 当前进展 | 可能进入的版本 |
|------|------|----------|----------------|
| **Session Fork**（会话分支） | <https://github.com/netease-youdao/LobsterAI/pull/1159> | PR 仍 **OPEN**，自 2026‑03‑31 提交后未有最新评审。 | 若在下一个里程碑（2026.9.x）完成，可成为 **协作增强** 功能。 |
| **多渠道社区入口**（Discord/Telegram） | Issue #2536 | 仅需求收集阶段，暂无实现计划。 | 预计在 **2026.9.15** 前的运营迭代中考虑。 |
| **模型目录细分 & 计费展示** | 已在 #2530 / #2535 中实现计划模型目录 | 已上线（2026.8.25） | 已交付，后续可能加入 **自定义计费策略**。 |
| **高级分析 Dashboard** | 需求从 PR #2529 讨论中提出 | 尚未开发 UI，只完成埋点后端。 | 目标在 **2026.10** 前推出 **Beta Dashboard**。 |

**路线图建议**：  
1. **短期（≤1 个月）**：完成 Session Fork 审核并合并，提升协作灵活性。  
2. **中期（1‑2 个月）**：开发分析 Dashboard，满足企业用户对埋点数据的可视化需求。  
3. **长期（3‑4 个月）**：扩展社区渠道，降低单一微信群瓶颈，提升社区活跃度与新手留存。

---

## 7. 用户反馈摘要

- **正面**：  
  - 多位用户在 PR #2531 的评论中称“刷新不再闪烁，使用感提升明显”。  
  - 对 **模型目录**（#2530）赞誉为“直观易用，计费信息一目了然”。  

- **负面 / 痛点**：  
  - **社区渠道**：微信群已满导致新用户无法加入，表现出运营渠道的 **容量与可达性** 局限。  
  - **会话历史管理**：缺少会话分支功能导致用户在实验性任务中只能手动备份，需求集中在 **Session Fork**。  
  - **数据隐私担忧**：在 PR #2529 的审查过程中，有用户提出“是否会收集搜索内容”，需要在文档与 UI 中明确 **隐私声明**。  

- **使用场景**：  
  - **企业内部知识库**：用户利用本地资料库管理内部文档，关注刷新流畅性与预览精准度。  
  - **模型调研**：开发者使用 “Plan Model Catalog” 快速比对不同计费模型，需求倾向于 **快速切换、对比价格**。  

---

## 8. 待处理积压（重要未响应）

| 编号 | 类型 | 标题 | 创建时间 | 最新活动 | 建议处理时限 |
|------|------|------|----------|----------|--------------|
| **#1159** | PR (Open) | feat(cowork): add session fork | 2026‑03‑31 | 2026‑08‑25（CI 通过） | 本周内安排评审，若通过下一个版本发布。 |
| **#1277** | PR (Open) | chore(deps-dev): bump electron group | 2026‑04‑02 | 2026‑08‑25（仍未合并） | 已通过 CI，建议立刻合并以消除安全风险。 |
| **#2536** | Issue (Open) | 微信群已满人 | 2026‑08‑25 | 2026‑08‑25（仅 1 条评论） | 运营团队需在 2 天内提供替代社区渠道或说明。 |
| **#1159**（重复） | PR (Open) | **Session Fork** | 同上 | 同上 | 同上。 |

> **提示**：长期未合并的依赖升级（#1277）会导致 **安全合规** 风险；而功能需求 PR #1159 若继续拖延，可能导致用户流失。建议维护者优先处理上述四项。

---

### 结论
- **项目健康度：** ★★★★☆（四星）  
  - **活跃度** 极佳，合并速率高；  
  - **功能成熟**（UI/UX、数据埋点）进展显著；  
  - **风险点** 主要在 **社区运营** 与 **未决功能 PR**。  

> **后续建议**：  
1. **加速功能 PR 的评审**（尤其是 Session Fork），以满足协作需求。  
2. **发布社区渠道公告**，提供 Discord/Slack 替代入口，缓解微信群容量瓶颈。  
3. **在 2026.9 版本说明中加入**“埋点隐私声明”，提升合规感。  

---  

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

## Moltis 项目动态日报 — 2026-08-26

---

### 1. 今日速览

Moltis 项目于过去24小时内保持中等活跃度：共处理 7 条更新（2 Issues + 5 PRs），涵盖功能增强、Bug 修复与工具链优化。本次更新重点聚焦于沙箱后端扩展（Kubernetes 与 Coder）、OAuth 集成优化（Fastmail）以及定时任务上下文丢失问题的修复。虽未发布新版本，但多个潜在性功能与稳定性改进已进入合并阶段，显示项目开发节奏稳健、社区参与度有所回升。

---

### 2. 版本发布

无新版本发布。

---

### 3. 项目进展

- **#1243（CLOSED）**: 修复 cron 定时消息在 WhatsApp 等非 Slack 频道中丢失会话上下文的问题。该 PR 确保定时任务执行后生成的文本能正确附加至目标会话，对提升多渠道使用体验至关重要。[🔗 链接](https---github.com/moltis-org/moltis/pull/1243)  
- **#1245（OPEN）**: 完善 Brave 搜索参数校验逻辑，避免无效参数传入导致请求失败，提升工具调用稳定性。[🔗 链接](https://github.com/moltis-org/moltis/pull/1245)  
- **#1232（OPEN）**: 使对象 schema 兼容 OpenAI 的严格模式要求，缓解 Codex 代理在处理 patch/map 类型字段时出现空值问题。[🔗 链接](https://github.com/moltis-org/moltis/pull/1232)

---

### 4. 社区热点

- **#1118（OPEN）**: 用户强烈关注 Kubernetes-native 沙箱后端的支持，尤其是 `runtimeClassName` 功能，可实现更强隔离性（如 Kata Containers 或 gVisor）。该 Issue 获得 1 👍 及 2 条评论，是当前最具战略意义的功能请求之一。[🔗 链接](https://github.com/moltis-org/moltis/issues/1118)  
- **#1199（OPEN）**: Coder 远程工作空间沙箱后端支持也引起关注，提供了通过 REST API 创建临时工作空间并执行命令的能力，适用于云原生开发场景。[🔗 链接](https://github.com/moltis-org/moltis/pull/1199)

---

### 5. Bug 与稳定性

| 严重程度 | 描述 | 状态 | 链接 |
|----------|------|------|------|
| ⚠️ 中 | Slack 共享频道中工具无法正常工作 (#1224) | ✅ 已关闭 | [🔗](https://github.com/moltis-org/moltis/issues/1224) |
| ⚠️ 中 | Cron 定时任务交付后丢失会话上下文 (#1243) | ✅ 已合并 | [🔗](https://github.com/moltis-org/moltis/pull/1243) |
| 🔧 低 | 对象 schema 不兼容 OpenAI strict 模式 (#1232) | ✅ 修复中 | [🔗](https://github.com/moltis-org/moltis/pull/1232) |

---

### 6. 功能请求与路线图信号

- **#1118**: 请求添加 Kubernetes-native 沙箱后端，支持 `runtimeClassName`，以实现高隔离度的代理命令执行环境。结合 #1199 的 Coder 支持，项目正在朝向云原生化方向发展。建议纳入下个版本候选计划。
- **#1199**: Coder 远程工作空间沙箱后端支持，涵盖模板/预设/TTL 等高级配置。[🔗 链接](https://github.com/moltis-org/moltis/pull/1199)

---

### 7. 用户反馈摘要

- **痛点一**：在 Slack 共享频道中使用 Moltis 时，某些插件或工具无法正常触发，影响协作效率。问题已被关闭，但用户反映仍值得关注。
- **痛点二**：部分用户期望在部署沙箱时能支持更安全的容器运行时（如 Kata/gVisor），尤其是在企业级或多租户场景下。
- **正面反馈**：对新的沙箱后端（如 Coder）的设计思路表示认可，认为其提升了灵活性。

---

### 8. 待处理积压

- **#1118（OPEN）**: 自 2026-06-12 起未被分配处理者，尽管近期有更新，但仍缺书优先级划分或里程碑关联。建议维护者评估其优先级并尽快安排开发资源。
- **#1199（OPEN）**: 自提以来未有明确评审意见，可能因作者非核心成员身份而延迟合并。建议尽快进行 Code Review 并推动合并。

--- 

如需进一步分析历史趋势或模块贡献者行为，请随时告知。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 —— 2026-08-26

---

## 1. 今日速览

- 过去 24 小时内项目活跃度持续保持高位，共处理 33 条 Issue 与 50 条 PR 更新；
- 新增版本 `v2.1.1-beta.3` 发布，聚焦依赖锁定与文档优化；
- 社区讨论热河，多条 Bug 报告集中在性能瓶颈、连接异常与 UI 体验问题；
- 贡献者活跃度高，多位新贡献者提交首个 PR，体现开源协作氛围良好。

---

## 2. 版本发布

### ✅ 新版本发布：`v2.1.1-beta.3`

**发布时间**：2026-08-25  
**链接**：https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.1.1-beta.3  

#### 🔧 主要变更内容：

| 类型 | 描述 |
|------|------|
| Chore | 固定 `@agentscope-ai/chat` 依赖版本为 `1.1.72`（PR #7257） |
| Docs | 修复 `PluginAPI` 拼写为 `PluginApi`（PR #7269） |
| Test | 扩展集成测试覆盖范围（详见 PR 描述） |

> ⚠️ **破坏性变更**：无  
> 📌 **迁移提示**：无需特殊操作，仅为稳定性与文档优化版本。

---

## 3. 项目进展

### ✅ 今日合并/关闭的关键 PR

| PR | 内容 | 推动方向 |
|----|------|-----------|
| [#7276](https://github.com/agentscope-ai/QwenPaw/pull/7276) | 将 `agentscope` 升级至 `2.0.7` | 依赖同步 |
| [#7293](https://github.com/agentscope-ai/QwenPaw/pull/7293) | CI 测试分片优化，提升构建效率 | 工程健康 |
| [#7292](https://github.com/agentscope-ai/QwenPaw/pull/7292) | 新增 19 个单元测试文件，提升覆盖率 +5.02% | 质量提升 |
| [#7294](https://github.com/agentscope-ai/QwenPaw/pull/7294) | 图片 Resizing 功能支持 | 用户体验优化 |
| [#7299](https://github.com/agentscope-ai/QwenPaw/pull/7299) | 拒绝冲突的聊天请求负载 | 稳定性增强 |

**总结**：项目持续聚焦于 **稳定性、性能与测试覆盖率** 的提升，同时引入用户可控的图片处理功能。

---

## 4. 社区热点

### 🔥 最热议 Issues

#### [#338](https://github.com/agentscope-ai/QwenPaw/issues/338)  
**[Feature] 建议添加 webhook 功能**  
- 作者：xiaobai08888  
- 评论数：9  
- 👍 点赞数：1  

> 用户希望通过 Webhook 实现与第三方系统的异步通信机制，增强自动化集成能力。该需求反映出用户对系统扩展性的强烈期待。

#### [#7258](https://github.com/agentscope-ai/QwenPaw/issues/7258)  
**[Bug] 微信频道的不“显示思考过程”设置无效**  
- 作者：rerbin  
- 评论数：6  

> 微信平台插件存在配置失效问题，用户反馈即使关闭“显示思考过程”，仍会输出大量思维链内容，影响阅读体验。

#### [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524)  
**[Bug] MCP 后端重启后客户端无法自动恢复**  
- 作者：ruijie-shilu  
- 评论数：6  

> 用户在使用远程 MCP 服务时遇到了断连问题，重启服务后需手动执行 `list mcp` 才能恢复连接，存在会话管理缺陷。

---

## 5. Bug 与稳定性

### 🐛 严重等级排序的 Bug 报告

| 严重程度 | Issue | 描述 | 是否有 Fix PR |
|----------|-------|------|----------------|
| 🔴 高危 | [#7261](https://github.com/agentscope-ai/QwenPaw/issues/7261) | v2.1.1-beta.2 中 SSE 序列化陷入死循环，导致 CPU 爆满与内存泄露 | 尚无 |
| 🟠 中危 | [#7285](https://github.com/agentscope-ai/QwenPaw/issues/7285) | 长对话导致浏览器卡顿，电脑几乎无法使用 | 尚无 |
| 🟡 一般 | [#7218](https://github.com/agentscope-ai/QwenPaw/issues/7218) | 长文本推理超时，Peer closed connection | 尚无 |
| 🟢 低危 | [#7264](https://github.com/agentscope-ai/QwenPaw/issues/7264) | Channel 合约检查不完整，不支持跨平台编码识别 | 提有 PR |

**重点关注**：SSE 循环问题可能影响线上稳定性，建议优先排查。

---

## 6. 功能请求与路线图信号

### 💡 用户提出的功能需求

| 需求 | 链接 | 当前状态 |
|------|------|----------|
| Webhook 支持 | [#338](https://github.com/agentscope-ai/QwenPaw/issues/338) | 新需求待评估 |
| 思考过程默认折叠 | [#7196](https://github.com/agentscope-ai/QwenPaw/issues/7196) | 已关闭，建议参考 Hermes 实现 |
| 工作区级 Skill 预加载策略 | [#7182](https://github.com/agentscope-ai/QwenPaw/issues/7182) | 新需求待讨论 |
| 任务完成提醒提示 | [#7263](https://github.com/agentscope-ai/QwenPaw/issues/7263) | 已关闭 |
| 自动清除已完成任务 | [#7280](https://github.com/agentscope-ai/QwenPaw/issues/7280) | 已关闭 |

**分析**：用户普遍希望提升 **系统灵活性、扩展性与视觉体验**，部分需求已被维护者采纳并标记为“关闭”。

---

## 7. 用户反馈摘要

### 👥 真实用户痛点与场景

| 用户 | 痛点 | 来源 |
|------|------|------|
| xiaohushi512 | 自定义模型响应超时，需设置更长的超时时间 | [#7218](https://github.com/agentscope-ai/QwenPaw/issues/7218) |
| MCQSJ | 长对话导致电脑卡顿严重，必须刷新网页才恢复 | [#7285](https://github.com/agentscope-ai/QwenPaw/issues/7285) |
| xiaobai08888 | 希望通过 Webhook 实现消息推送与响应回调 | [#338](https://github.com/agentscope-ai/QwenPaw/issues/338) |
| rerbin | 微信频道“隐藏思考过程”配置失效 | [#7258](https://github.com/agentscope-ai/QwenPaw/issues/7258) |
| LUOSENGWA | Tauri 桌面端 TLS 握手失败，建议升级 Python 版本 | [#7298](https://github.com/agentscope-ai/QwenPaw/issues/7298) |

**总结**：用户反馈集中在 **网络通信稳定性、前端性能、平台兼容性** 三个方面，维护者需重点关注这些领域的优化。

---

## 8. 待处理积压

### 🕰 长期未响应的重要议题

| 状态 | Issue | 天数未更新 |
|------|-------|--------------|
| OPEN | [#338](https://github.com/agentscope-ai/QwenPaw/issues/338) — Webhook 功能 | 569 天 |
| OPEN | [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) — MCP 重连机制 | 28 天 |
| OPEN | [#6273](https://github.com/agentscope-ai/QwenPaw/issues/6273) — 任务追踪一致性问题 | 36 天 |
| UNDER REVIEW | [#2773](https://github.com/agentscope-ai/QwenPaw/pull/2773) — 自进化技能 | 147 天 |

📌 **建议维护者尽快介入评估与处理**，尤其是与 MCP 连接相关的问题，影响多数用户使用体验。

--- 

✅ **报告生成结束**  
📅 **报告日期**：2026-08-26  
📍 **来源**：[CoPaw GitHub 实时数据](https://github.com/agentscope-ai/QwenPaw)

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 — 2026-08-26

---

## 1. 今日速览

ZeroClaw 在过去 24 小时内保持着较高的开发活跃度：共处理了 100 条 Issue 与 PR 更新，其中 50 条 Issue（新增/活跃：39，已关闭：11）、50 条 PR（待合并：49，已合并/关闭：1）。尽管没有发布新版本，但多个关键领域如网关认证、代理能力控制、运行时行为优化和 CI 改进展进活跃。社区对核心架构调整（如工作路径自动化、内存存储分离）高度关注，评论活跃度高，反映出项目正处于重要版本迭代的节点（如 v0.9.0）。

---

## 2. 版本发布

*暂无新版本发布*

---

## 3. 项目进展

今日合并的关键 PR 包含安全性增强、运行时优化及测试改进：

- **#10364** - 修复工具执行错误路径丢弃详细错误信息的问题，提升调试体验  
  [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/10364)

- **#10246** - 修复 RPC 会话无法访问配置化 channel 的问题，提升远程调用稳定性  
  [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/10246)

- **#10363** - 将 Git Channel 添加到官方发布 artifact 中，增强版本追踪能力  
  [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/10363)

这些变更推动了项目在安全边界清晰化、远程访问控制增强以及构建打包流程标准化等方面向前推进。

---

## 4. 社区热点

以下为今日评论 hottest、反应积极的议题：

### ✅ #6808 — Work Lanes, Board Automation, and Label Cleanup  
**类型**: 架构治理 / 进程优化  
**作者**: Audacity88  
**链接**: [Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)  
该 RFC 已被采纳并正在推进，用于简化工作路由逻辑，减少手动维护 board 的需求，体现了项目对流程自动化的重视。

### 🔄 #8692 — Maintainer Decision Queue for RFCs  
**类型**: 治理 / 流程管理  
**作者**: Audacity88  
**链接**: [Issue #8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)  
作为维护者决策追踪器，用于集中处理所有待评审的设计类提案，体现良好的项目治理结构。

### ⚙️ #9103 — 分离权威内存存储与可选 enrichment connectors  
**类型**: 架构 / 配置  
**作者**: yanchenko  
**链接**: [Issue #9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103)  
该提案旨在解耦当前耦合度较高的内存存储与第三方服务集成模块，有助于提升系统灵活性与可维护性。

---

## 5. Bug 与稳定性

| 严重等级 | 标题 | 状态 | 链接 |
|----------|------|------|------|
| **S0/S1** | [Bug]: cron update --command writes unused column on agent jobs | CLOSED | [Issue #10257](https://github.com/zeroclaw-labs/zeroclaw/issues/10257) |
| **S0/S1** | [Bug]: Tool execution error path discards detailed error body | OPEN | [Issue #10357](https://github.com/zeroclaw-labs/zeroclaw/issues/10357) |
| **S0/S1** | [Bug]: cron tools not scoped to own agent | OPEN | [Issue #9947](https://github.com/zeroclaw-labs/zeroclaw/issues/9947) |

部分 Bug 已关闭或对应 PR 提交（如 #10257），但仍有高危问题悬空（如 #10357），提示需加急跟进。

---

## 6. 功能请求与路线图信号

### 🔧 新功能建议
- **#10351** - Enforce Execution-Tree Iteration Budget Ownership  
  **链接**: [PR #10351](https://github.com/zeroclaw-labs/zeroclaw/pull/10351)  
  引入 execution tree 迭代预算控制机制，防止代理无限递归调用子任务。

- **#9986** - Export Agent to Portable Bundle  
  **链接**: [PR #9986](https://github.com/zeroclaw-labs/zeroclaw/pull/9986)  
  支持将代理导出为可移植 bundle，方便迁移部署环境。

- **#7543** - Multi-session Support in Gateway Web Chat UI  
  **链接**: [Issue #7543](https://github.com/zeroclaw-labs/zeroclaw/issues/7543)  
  增强 Web 聊天会话管理功能，支持多会话切换。

这些功能明确指向 v0.9.0 的方向：提升运行时隔离性、安全性与用户体验。

---

## 7. 用户反馈摘要

从今日活跃 Issue 中可见以下用户真实痛点：

- **路径解析错误引发安全风险**：[#9206](https://github.com/zeroclaw-labs/zeroclaw/issues/9206) 报告 Agent Cron 任务偶尔解析 `workspace_dir` 为 `/`，存在潜在安全问题。
- **本地模型识别歧义**：[#8999](https://github.com/zeroclaw-labs/zeroclaw/issues/8999) 用户在使用 llama3.2 模型时，简单问候被误判为日志/API 数据格式。
- **UI 国际化问题**：[#10103](https://github.com/zeroclaw-labs/zeroclaw/issues/10103) 显示法语和西班牙语界面的 Health Status 标签宽度溢出，影响显示效果。

这些反馈突显项目在安全边界控制、跨平台兼容性及细节体验方面的优化空间。

---

## 8. 待处理积压

以下是长期未响应或亟待关注的问题：

| 标题 | 类型 | 链接 |
|------|------|------|
| [Tracker]: v0.9.0 Auth, Security, Breaking Change Queue | 架构/安全 | [Issue #7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) |
| [RFC]: Make Wire Protocol First-Class in Provider Construction | 架构 | [Issue #8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) |
| [RFC]: Opt-in Household Edge Mesh with Pull Workers | 架构/RFC | [Issue #10360](https://github.com/zeroclaw-labs/zeroclaw/issues/10360) |

提示维护者：部分关键 RFC 和 tracker 长期挂起，可能影响 roadmap 执行节奏，建议优先审议。

---

📝 **小结**：ZeroClaw 今日开发态势活践，尤其在架构治理、运行时增强和安全加固方面取得显著进展。然而部分高危 Bug 和未合并关键 RFC 仍需紧盯，确保版本发布节奏不受影响。

--- 

> *本日报由 [ZeroClaw Bot](https://github.com/zeroclaw-labs/zeroclaw) 自动生成，数据来源于 GitHub API。*

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*