# OpenClaw 生态日报 2026-09-14

> Issues: 493 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-13 22:15 UTC

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

# OpenClaw 2026-09-14 项目动态日报

## 1. 今日速览
2026-09-14 截至目前，OpenClaw 项目保持活跃但面临多项关键稳定性挑战。过去 24 小时共有 493 条 Issue 更新（新开/活跃 285 条，已关闭 208 条），500 条 PR 更新（待合并 238 条，已合并/关闭 262 条）。项目整体运行状态处于警戒状态，主要问题集中在子代理完成通知缺失、进程泄漏、SQLite 内存增长以及跨平台兼容性问题。尽管没有新版本发布，但多个高优先级 Bug 仍在持续修复中，需要重点关注。

## 2. 版本发布
本日未发布新版本。最新稳定版为 OpenClaw 2026.9.4（2026.9.3 后续迭代），但当前版本存在若干升级路径风险。主要关注点包括：
- **Node 版本升级**：2026.9.4 对 Node 版本 24.18.0 有特定依赖，需注意兼容性问题
- **SQLite 数据库优化**：长期存在的 `memory_index_chunks` 和 `memory_embedding_cache` 表无清理策略，可能导致磁盘空间耗尽
- **跨平台迁移**：Windows 上的 Gateway 重启问题和 macOS 上的 Docker 沙箱工作区访问失败需要持续监控

## 3. 项目进展
今日重要的 PR 推进了以下方向：
- **Plugin 网络恢复**：#147421 修复了 Bun 环境下的插件网络挂起问题，确保浏览器代理、Mattermost、Slack 等渠道的网络连接稳定
- **Swarm 收集器修复**：#146716 解决了 `sessions_yield` 调用导致的 `agents_wait` 死锁问题，提升分布式任务调度效率
- **SQLite 性能优化**：#147476 改进了读取只读检查失败时的错误信息，帮助运维人员快速定位问题根源
- **UI 改进**：#147295 和 #147471 分别优化了任务进度显示和会话进度面板的生命周期管理，提升用户体验
- **平台适配**：#147442 实现了自定义 SVG 艺术作品支持，#144987 确保 Android/Wear OS 上对话保持上下文绑定

## 4. 社区热点
今日最活跃的 Issue 为：
- **#97616**（评分 🦪 silver shellfish）：OpenClaw 泄露未完成的子进程工具/钩子，导致僵尸进程累积和运行时退化。这是严重的资源管理问题，已有相关修复 PR 在进行中。
- **#44925**（评分 🦞 diamond lobster）：子代理完成通知静默丢失，无重试、通知或自动重启机制，影响多轮交互流畅性。
- **#135111**（评分 🐚 platinum hermit）：从 v2026.8.1 升级后出现提供商调用时出现格式错误的 JSON 参数问题，属于回归问题。
- **#69208**（评分 🦪 silver shellfish）：重复的转录、重放和上下文组装 bug 在多个渠道出现，涉及消息重复、重新播放和上下文组装逻辑。

这些 Issue 反映了核心系统稳定性和用户体验方面的紧迫需求，特别是子代理通信机制和资源管理问题需要优先解决。

## 5. Bug 与稳定性
按严重程度排序，今日报告的关键问题如下：

| 严重程度 | 问题描述 | 状态 | 是否已修复 |
|----------|----------|------|------------|
| 🔴 P0 | 子代理完成通知静默丢失 | 未修复 | ❌ |
| 🔴 P0 | 进程泄漏导致僵尸进程堆积 | 未修复 | ❌ |
| 🟠 P1 | SQLite 无限增长（内存索引表） | 未修复 | ❌ |
| 🟠 P1 | 子代理重启后任务运行卡死 | 未修复 | ❌ |
| 🟡 P2 | 跨平台消息处理异常（WeChat 回复失败） | 未修复 | ❌ |
| 🟡 P2 | 节点版本升级后 Gateway 重启失败 | 未修复 | ❌ |

**已有修复 PR**：
- #146394（#145252）：2026.9.3/2026.9.4 升级和恢复可靠性的协调指南，强调需要验证升级路径的完整性。
- #137927（#137927）：内部上下文块泄漏到可见 Telegram 消息，已提交修复。
- #114612（#114612）：SQLite 无保留策略导致磁盘空间耗尽，正在研究清理方案。

## 6. 功能请求与路线图信号
- **子代理通知增强**：#27445 提出添加 `announceTarget` 选项，使子代理完成通知可路由至父会话而非直接发送给通道，提升多步骤工作流编排能力。
- **系统专家并发限制优化**：#147468 修复了当最大并发为 1 时系统专家请求挂起的问题，为高负载场景提供更好的响应。
- **自定义会话图标**：#147442 允许用户在侧边栏使用自定义 SVG 艺术作品，提升 UI 定制化体验。
- **插件热重载保护**：#147472 确保插件热重加载期间的请求不会被中断，改善插件切换的稳定性。
- **更新安全性**：#145043 修复了旧版 Codex 插件在升级过程中阻塞升级的问题，防止因遗留插件导致的迁移失败。

这些需求表明项目正朝着更健壮的架构和更好的用户体验方向发展，尤其是在多线程并发和跨平台兼容性方面。

## 7. 用户反馈摘要
从 Issue 评论中提取的真实用户痛点：
- **子代理通信断裂**：用户反复报告子代理完成通知不被接收，导致多轮对话中途中断，影响工作流连续性。
- **资源泄漏导致性能下降**：进程泄漏和僵尸进程使得长时间运行的会话逐渐变慢，影响大规模部署场景。
- **SQLite 存储膨胀**：用户在生产环境中发现数据库文件不断增大，担心磁盘空间不足，影响系统可靠性。
- **跨平台兼容性问题**：Telegram、iOS、Android 等平台上的消息处理、图片描述和会话管理存在差异，用户在不同渠道间切换时遇到问题。
- **更新流程复杂**：某些用户（如 #145929）在自更新后遇到了认证日志锁竞争问题，导致登录和配置保存失败，影响日常操作。

总体而言，用户对系统稳定性、交互流畅性和跨平台一致性有较高期望，建议优先解决子代理通知和进程泄漏问题。

## 8. 待处理积压
以下长期未解决或等待进一步跟进的重要 Item：
- **#97616**（进程泄漏）：核心资源管理问题，需立即修复以防止系统资源耗尽。
- **#135111**（JSON 参数格式错误）：v2026.8.1 升级后出现的回归问题，需验证修复效果。
- **#69208**（重复转录/重放 bug）：跨渠道出现的上下文组装 bug，影响消息完整性。
- **#145192**（2026.9.2→2026.9.4 升级失败）：管理员升级路径在候选医生阶段失败，需排查并修复。
- **#140162**（Windows Gateway 重启问题）：慢启动 Gateway 被误判为故障并重启，需优化健康检查逻辑。
- **#14925**（Docker 沙箱工作区访问失败）：容器化部署中的工作区绑定问题，影响开发和测试环境的一致性。

建议维护团队优先处理 #97616、#135111 和 #69208 等影响核心功能的 Bug，同时跟进 #145192 升级路径的稳定性。

---

## 横向生态对比

**今日重點（5‑8 条最重要的更新）**

- **OpenClaw** – https://github.com/openclaw/openclaw  
  - 多個高優先級 Bug 獲修復 PR：#147421（Bun 環境插件網絡恢復）、#146716（Swarm 收集器死鎖修復）、#147476（SQLite 只讀錯誤訊息改善）、#147295/#147471（任務與會話進度 UI 優化）、#147442（自定義 SVG 藝術品支援）、#144987（Android/Wear OS 對話上下文綁定）。  
  - 意義：提升跨平台穩定性、插件可靠性及使用者體驗，緩解目前的子代理通知遺失與進程洩漏問題。

- **Hermes Agent** – https://github.com/NousResearch/hermes-agent  
  - PR #110234 合併，修復 Dashboard `/chat` 在自訂端點卡住 “Setup Required” 的問題，並解決桌面端在非默認配置下使用 tab‑strip “+” 建立會話時控制不可用的缺陷（#108369、#102840）。  
  - 意義：顯著改善多配置文件安裝的桌面體驗，解決用戶反覆報告的會話建立失敗。

- **LobsterAI** – https://github.com/netease-youdao/LobsterAI  
  - PR #2659 合併，新增 Markdown 編輯功能，使用者可在聊天界面直接編輯與預覽 Markdown 內容。  
  - PR #2658 合併，修復 OpenClaw 子代理在特定條件下返回空響應的問題，確保代理鏈路完整性。  
  - 意義：增強文檔協作能力並提升子代理調用的可靠性，直接回應社區對豐富編輯與穩定代理鏈路的需求。

- **NanoClaw** – https://github.com/qwibitai/nanoclaw  
  - PR #3790 已合併，恢復首次安裝時的 provider picker，防止腳本自動選擇 Claude 而未給用戶選擇 Codex 或其他提供者的機會（ Issue #3787 已關閉）。  
  - 同時新開 Issue #3791 與臨時修復 PR #3792，解決非特權用戶在默認 `/usr` 前緣下需要全域 `codex` CLI 的安裝失敗。  
  - 意義：改善新手安裝體驗並降低在受限環境部署 Codex 的門檻。

- **Moltis** – https://github.com/moltis-org/moltis  
  - PR #1266 合併，新增 `chat.reasoning_default` 配置項，使默認推理深度在會話間持久化；PR #1253 合併，將 `max` 加入共享 `ReasoningEffort` 枚舉並透過 OpenAI Codex Responses API 傳遞。  
  - 意義：讓使用者能夠跨會話固定推理力度，提升推理策略的可配置性與可重複性。

- **ZeroClaw** – https://github.com/zeroclaw-labs/zeroclaw  
  - Issue #10837 已關閉（對應 PR #10838 待合併），修復 `RPC config/set` 跳過 `Config::validate()` 校驗，導致非法值被持久化的問題。  
  - Issue #10838 對應 PR #10838（待合併）修復媒體標記在降級路徑中被模型回顯的缺陷。  
  - Issue #10831 對應 PR #10831 已合併，新增 ADR‑016 記錄輸入認證主體權限架構決策。  
  - 意義：提升配置安全性與媒體處理正確性，並補充關鍵架構文檔，對系統穩定性與可維護性有直接正面影響。

- **IronClaw** – https://github.com/nearai/ironclaw  
  - PR #8097 已合併，將根目錄下的 *everything‑else* 依賴組升級 24 項（包括 `uuid`、`base64`、`rust_decimal` 等），保持與上游庫的相容性與安全性。  
  - 意義：雖無新功能，但透過依賴升級減少潛在安全風险並為後續特性奠定較穩的基礎。

**活跃度概览**  
今日整体活跃度较高，尤其是 **OpenClaw**、**Hermes Agent**、**ZeroClaw**、**NanoClaw**、**Moltis** 和 **IronClaw** 在 Issues、PR 以及合并方面均有显著贡献。相比之下，**NanoBot**、**TinyClaw**、**ZeptoClaw**、**NullClaw** 基本无更新，**LobsterAI**、**CoPaw** 虽有少量合并但整体互动相对安静。总体而言，核心稳定性修复与可用性增强是今日各项目的主要推动力。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot 项目日报 – 2026‑09‑14**  
数据来源：GitHub 上过去 24 小时的 Issues、PR 及 Release 记录（共 0 条 Issue 更新、6 条 PR 更新、0 个新版本）。

---

## 1. 今日速览
- 项目整体活跃度 **中等**：过去 24 小时内没有新 Issues，但有 6 条 PR 活跃（4 条仍处于打开状态，2 条已合并/关闭），表明代码贡献者在持续推进修复与 UI 改进。  
- 未发现新版本发布，说明当前焦点在于 ** bug 修复、稳定性提升以及细节打磨**（如自动化调度、移动端 UI、安全测试固件等）。  
- 所有 PR 目前均未获得点赞或评论（👍:0），社区互动相对低迷，维护者可能需要主动发起讨论以提升可见度。  
- 未出现回归或崩溃报告，整体健康状况良好，但有几个长期挂起的安全/功能 PR 需要关注。

## 2. 版本发布
- **无新版本发布**（过去 24 小时内没有 Tag 或 Release）。  
- 本日报不包含版本迁移说明。

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 状态 | 主要变更 | 对项目的推进意义 |
|----|------|----------|-------------------|
| [#5755](https://github.com/HKUDS/nanobot/pull/5755) | **已合并** | 改进移动端作曲器、面板与设置导航（宽度自适应、控件布局） | 提升移动端使用体验，减少因布局拥挤导致的误操作。 |
| [#5754](https://github.com/HKUDS/nanobot/pull/5754) | **已合并** | 统一 App Catalog 中的 logo 与品牌名称展示（圆形全画布 logo、一致的品牌名排版） | 增强 UI 一致性与品牌辨识度，为后续插件集成提供统一视觉基线。 |
| *（其余 PR 均仍为 open）* | — | — | — |

**整体推进**：今日合并的两个 PR 主要聚焦于 **UI/UX 细节**（移动端适配、品牌统一），未涉及核心功能或后端架构的大幅变更，因而项目在功能范围上保持稳定，而在可用性上得到微幅提升。

## 4. 社区热点
- 今日所有 PR 和 Issues 均未收到评论或点赞（👍:0、评论：undefined），因此没有明显的讨论热点。  
- 若要衡量“关注度”，可参考 PR 的 **创建时间**：最早的 open PR（#5633、#5673）已挂起超过 10 天，可能暗示社区对这些修复的审查或测试仍在进行中，但未公开表达意见。

## 5. Bug 与稳定性（按严重程度排序）

| 严重度 | PR/Issue | 描述 | 是否已有 fix PR |
|--------|----------|------|-----------------|
| **高** | [#5751](https://github.com/HKUDS/nanobot/pull/5751) | 编辑自动化名称或指令时会重新计算下次运行时间，导致间隔任务推迟、 cron 任务被跳过、一次性任务失效。 | **已有**（本 PR 本身即为 fix） |
| **中** | [#5673](https://github.com/HKUDS/nanobot/pull/5673) | 远程 WebUI 用户通过绝对路径选择项目时，未正确尊重 gateway 的 folder‑picker 能力，可能触发客户端文件选择器。 | **已有**（本 PR 为 fix） |
| **中** | [#5633](https://github.com/HKUDS/nanobot/pull/5633) | 会话键包含路径遍历字符（如 `../../etc/passwd`）可能越界写入文件系统。 | **已有**（本 PR 为 fix） |
| **低** | [#5756](https://github.com/HKUDS/nanobot/pull/5756) | SSRF/代理测试的 fixture 仅清理 `*_PROXY` 环境变量，未处理系统级代理（Windows 注册表、macOS SystemConfiguration），导致测试在特定主机上不幂等。 | **已有**（本 PR 为 fix） |

> 注：所有列出的 bug 均已伴随对应的修复 PR，且目前均为 **open**（等待审核/合并），因此短期内风险仍需关注。

## 6. 功能请求与路线图信号
- 本日 **未出现明确的功能需求 Issue 或 PR**。  
- 从已有的 open PR 中可看出维护团队当前的 **侧重方向**：  
  1. **调度可靠性（#5751）** – 确保自动化编辑不影响已有计划。  
  2. **安全强化（#5633、#5756）** – 防止路径遍历和系统级代理干扰。  
  3. **跨平台 UI 一致性（#5755、#5754）** – 移动端适配、品牌统一。  
  若这些方向获得社区认可，后续版本很可能在这些方面继续迭代（例如，进一步细化调度容错、引入更全面的代理检测、统一深色/亮色主题等）。

## 7. 用户反馈摘要
- 因当天 **无 Issues 评论**，无法直接提炼用户痛点或使用场景。  
- 然而，最近合并的 UI 相关 PR（#5755、#5754）隐含反映了用户对 **移动端可用性** 和 **视觉一致性** 的需求；这类改动往往源于社区或内部测试的反馈。

## 8. 待处理积压（长期未响应的重要 PR/Issue）
| PR/ISSUE | 创建时间 | 未更新天数 | 关注点 |
|----------|----------|------------|--------|
| [#5633](https://github.com/HKUDS/nanobot/pull/5633) | 2026‑09‑02 | 12 天 | 会话键安全验证 – 需要确认是否覆盖所有存储路径（不仅是 JsonlSessionStore）。 |
| [#5673](https://github.com/HKUDS/nanobot/pull/5673) | 2026‑09‑05 | 9 天 | 远程项目路径选择 – 需要验证在不同操作系统（Windows/macOS/Linux）下的表现。 |
| [#5751](https://github.com/HKUDS/nanobot/pull/5751) | 2026‑09‑12 | 2 天 | 自动化调度保错 – 建议增加单元测试覆盖边界情况（如夏令时切换）。 |
| [#5756](https://github.com/HKUDS/nanobot/pull/5756) | 2026‑09‑13 | 1 天 | 系统级代理清理 – 需要在 CI 中模拟注册度/系统配置以确保跨平台有效。 |

> 建议维护者优先审阅 **#5633** 和 **#5673**，因为它们分别涉及 **安全边界** 和 **远程交互可用性**，若未及时合并可能对生产环境产生潜在风险。

---

### 总结
- 过去 24 小时 NanoBot 的代码活跃度主要体现在 **小幅 UI 改进与多项 bug/security 修复** 上，未有大型功能发布或版本更新。  
- 社区互动仍然较低，维护者可考虑通过 issue 模板、定期 triage 会或向活跃用户发起讨论来提升可见度。  
- 当前待合并的 PR 集中在 **调度可靠性、安全防护以及跨平台 UI**，这些是项目接下来版本的自然演进方向。  
- 长期挂起的安全与远程功能 PR（#5633、#5673）值得优先关注，以免潜在风险积累。  

如需进一步细化某项 PR 的测试计划或讨论路线图，请告知。祝开发顺利！

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报（2026-09-14）

## 1. 今日速览

- 项目活跃度极高：过去24小时共更新50条Issue（关闭37条，新开/活跃13条）和50条PR（合并/关闭23条，待合并27条），无新版本发布。
- 高优先级问题集中在多配置（multiplex profiles）生命周期、cron调度可靠性、安全边界（MCP身份泄露）和桌面端会话管理。
- 社区响应迅速，多个长期存在的Bug（如#29966、#93927）今日关闭，显示维护团队在积极清理积压。
- 整体健康度良好，但P1/P2级安全与稳定性问题仍需持续关注。


## 2. 版本发布

无新版本发布。


## 3. 项目进展

今日合并/关闭的重要PR：

- **[#110234](https://github.com/NousResearch/hermes-agent/pull/110234) [CLOSED]**  
  修复了Dashboard `/chat`在自定义端点下卡在"Setup Required"的问题，并修复了Desktop在命名本地配置文件上使用tab-strip "+"时会话控件不可用的问题（#108369、#102840）。该修复显著提升了多配置文件安装的桌面端体验。

- **[#49953](https://github.com/NousResearch/hermes-agent/pull/49953) [CLOSED]**  
  从后台监视器消息中剥离ANSI转义码，避免终端颜色码泄露到Telegram/文本消息。

此外，37个Issue被关闭，涵盖cron、桌面、插件、配置等多个组件，表明维护团队在高效清理待办事项。整体项目向前迈进，尤其在多配置支持和桌面端稳定性方面。


## 4. 社区热点

按评论数排序的今日最活跃Issues：

- **[#109243](https://github.com/NousResearch/hermes-agent/issues/109243) [CLOSED] cron外部worker交接超时（18条评论）**  
  高严重性Bug，cron作业间歇性不运行，社区讨论热烈，最终关闭。

- **[#102792](https://github.com/NousResearch/hermes-agent/issues/102792) [CLOSED] 桌面端新会话丢失所有者元数据（10条评论）**  
  多配置文件安装下的P1级Bug，影响核心会话创建流程，用户反馈强烈。

- **[#29966](https://github.com/NousResearch/hermes-agent/issues/29966) [CLOSED] 并发ddgs web搜索导致硬冻结（5条评论）**  
  长期存在的并发工具调用死锁问题，今日关闭，用户关注度高。

- **[#109360](https://github.com/NousResearch/hermes-agent/issues/109360) [CLOSED] cronjob工具网关存活检查误报（4条评论）**

- **[#109258](https://github.com/NousResearch/hermes-agent/issues/109258) [CLOSED] Telegram /save命令失败（4条评论）**

**背后诉求**：用户对cron可靠性、多配置文件支持和工具并发安全性有强烈需求，希望项目在核心功能上更加稳定。


## 5. Bug 与稳定性

按严重程度排列今日报告的Bug（创建于2026-09-12或2026-09-13）：

### P1
- **[#109422](https://github.com/NousResearch/hermes-agent/issues/109422) [CLOSED]** 多配置共享OAuth MCP服务器URL导致身份泄露  
  已有fix PR #109428（根据摘要），今日关闭。
- **[#102792](https://github.com/NousResearch/hermes-agent/issues/102792) [CLOSED]** 桌面端新会话丢失所有者元数据  
  已关闭，可能由#110234修复。

### P2
- **[#109243](https://github.com/NousResearch/hermes-agent/issues/109243) [CLOSED]** cron外部worker交接超时
- **[#109258](https://github.com/NousResearch/hermes-agent/issues/109258) [CLOSED]** Telegram /save命令失败
- **[#109358](https://github.com/NousResearch/hermes-agent/issues/109358) [CLOSED]** config.yaml空字符串遮蔽环境变量回退
- **[#108369](https://github.com/NousResearch/hermes-agent/issues/108369) [CLOSED]** Desktop tab-strip "+"在非默认配置上创建无主会话  
  已由#110234修复。
- **[#109205](https://github.com/NousResearch/hermes-agent/issues/109205) [CLOSED]** 仅推理的干净停止走完空响应阶梯
- **[#109423](https://github.com/NousResearch/hermes-agent/issues/109423) [CLOSED]** Telegram allowed_chats JSON字符串误解析
- **[#109382](https://github.com/NousResearch/hermes-agent/issues/109382) [CLOSED]** reload.mcp仅刷新请求会话
- **[#109373](https://github.com/NousResearch/hermes-agent/issues/109373) [CLOSED]** Windows hermes update需要二次运行
- **[#109398](https://github.com/NousResearch/hermes-agent/issues/109398) [CLOSED]** 二级配置文件在适配器连接期间保存被后续扫描遗漏  
  已由#110212修复。
- **[#109267](https://github.com/NousResearch/hermes-agent/issues/109267) [CLOSED]** 配置文件重命名在运行中的多路复用器下产生幽灵配置  
  已由#110212修复。
- **[#109429](https://github.com/NousResearch/hermes-agent/issues/109429) [CLOSED]** mTLS客户端证书被排除在MCP连接身份之外

### P3
- **[#109360](https://github.com/NousResearch/hermes-agent/issues/109360) [CLOSED]** cronjob工具网关存活检查误报
- **[#106972](https://github.com/NousResearch/hermes-agent/issues/106972) [CLOSED]** A2A回复超时不生效于孤儿任务清理
- **[#109238](https://github.com/NousResearch/hermes-agent/issues/109238) [CLOSED]** A2A入站孤儿任务看门狗硬编码300s
- **[#93927](https://github.com/NousResearch/hermes-agent/issues/93927) [CLOSED]** plugin_guard扫描测试夹具导致误报
- **[#109391](https://github.com/NousResearch/hermes-agent/issues/109391) [CLOSED]** plugin_guard测试套件中CRITICAL发现阻止安装
- **[#109362](https://github.com/NousResearch/hermes-agent/issues/109362) [CLOSED]** redact_terminal_output泄露秘密
- **[#109282](https://github.com/NousResearch/hermes-agent/issues/109282) [CLOSED]** /status报告过时历史模型
- **[#89610](https://github.com/NousResearch/hermes-agent/issues/89610) [CLOSED]** plugin_guard扫描tests目录
- **[#109233](https://github.com/NousResearch/hermes-agent/issues/109233) [CLOSED]** Desktop聊天窗格空白
- **[#109288](https://github.com/NousResearch/hermes-agent/issues/109288) [CLOSED]** Star Map节点菜单被裁剪
- **[#109303](https://github.com/NousResearch/hermes-agent/issues/109303) [CLOSED]** WSL2语音录制间歇失败
- **[#109246](https://github.com/NousResearch/hermes-agent/issues/109246) [CLOSED]** 设置页硬编码英文字符串

**仍有OPEN的Bug**：
- **[#110339](https://github.com/NousResearch/hermes-agent/issues/110339) [OPEN, P3]** Kanban triage无退出路径
- **[#108775](https://github.com/NousResearch/hermes-agent/issues/108775) [OPEN, P2]** 未定价模型记为$0，导致费用低估72%

大部分Bug已关闭，表明修复迅速。


## 6. 功能请求与路线图信号

- **[#110080](https://github.com/NousResearch/hermes-agent/issues/110080) [OPEN]** Kanban: 禁止任何配置文件直接写SQLite  
  结合PR #110322（park clean exit）、#110344（promote accepts triage）、#110334（report blocking parents）、#110340（log dispatch refusals）、#110342（resume implementer），表明Kanban工作流是当前开发重点，可能在下个版本中显著改进。

- **[#108914](https://github.com/NousResearch/hermes-agent/pull/108914) [OPEN]** Bot Screen功能：为每个bot提供Xfce桌面流  
  大型功能，可能影响未来版本。

- **[#110337](https://github.com/NousResearch/hermes-agent/pull/110337) [OPEN]** 将操作员通知路由到管理员DM或日志

- **[#110338](https://github.com/NousResearch/hermes-agent/pull/110338) [OPEN]** 添加规范的Bot Chat清除操作

- **[#67153](https://github.com/NousResearch/hermes-agent/pull/67153) [OPEN]** 添加monet-project-setup可选技能

这些功能请求和PR显示项目在Bot管理、Kanban工作流、网关通知和桌面端用户体验方面持续演进。


## 7. 用户反馈摘要

**痛点**：
- **cron作业不可靠**：用户报告作业间歇性不运行，外部worker冷启动超时（#109243）。
- **多配置文件问题**：桌面端新会话丢失元数据（#102792），OAuth身份泄露（#109422），配置文件重命名产生幽灵（#109267）。
- **配置处理**：空字符串遮蔽环境变量（#109358），JSON字符串误解析（#109423）。
- **性能与稳定性**：并发web搜索导致硬冻结（#29966），桌面聊天窗格空白（#109233）。
- **安全**：终端输出泄露秘密（#109362），mTLS证书排除（#109429）。
- **国际化**：设置页仍有大量英文（#109246）。
- **计费**：未定价模型记为$0，导致费用低估72%（#108775）。

**使用场景**：多配置文件部署、Telegram/Matrix/Discord网关、cron调度、Kanban工作流、WSL2语音输入。

**满意**：问题响应和修复速度快，今日关闭37个Issue和23个PR。

**不满意**：核心功能（cron、多配置）反复出现回归，影响生产环境可靠性。


## 8. 待处理积压

- **[PR #70626](https://github.com/NousResearch/hermes-agent/pull/70626) [OPEN]** fix: 通过插件工具分发桥传播clarify回调（创建于2026-07-24，更新于2026-09-13）  
  已开放近2个月，P3，需维护者关注。

- **[PR #67153](https://github.com/NousResearch/hermes-agent/pull/67153) [OPEN]** 添加monet-project-setup可选技能（创建于2026-07-18，更新于2026-09-13）  
  同样长期开放，P3。

- **[PR #100603](https://github.com/NousResearch/hermes-agent/pull/100603) [OPEN]** fix(bot-mode): 忽略遗留会话哨兵（创建于2026-09-01，更新于2026-09-13）  
  已开放近2周，P3。

- **[Issue #108775](https://github.com/NousResearch/hermes-agent/issues/108775) [OPEN, P2]** 未定价模型记为$0（创建于2026-09-12）  
  影响计费准确性，需尽快解决。

- **[Issue #110339](https://github.com/NousResearch/hermes-agent/issues/110339) [OPEN, P3, needs-decision]** Kanban --triage无退出路径（创建于2026-09-13）  
  需要决策。

提醒维护者关注长期开放的PR，以及影响计费的P2问题。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw 项目动态日报（2026‑09‑14）**  

---

### 1. 今日速览
- 过去 24 小时内共有 **5 条 Issue 更新**（3 条仍在开放/活跃，2 条被标记为已关闭）以及 **4 条 PR 更新**，全部已合并或关闭，未有待合并的 PR。  
- 项目没有发布新版本，但近期的 PR 集中于国际化、 README 规范化以及即时通讯渠道的增量改进，表明维护者在稳定基础设施和细节打磨上投入较多。  
- 活跃度适中：虽然没有新功能大版本，但 Issue 讨论持续（尤其是 #3287 和 #3281），显示社区对长消息处理和 Web UI 性能仍有强烈关注。  
- 总的来看，项目健康状态良好——代码库通过定期合并得到清理，且主要痛点已被记录并在后续讨论中跟进。

### 2. 版本发布
> **无新版本发布**（过去 24 小时内没有 Release）。  

### 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 标题 | 类型 | 主要变更 | 关联 Issue | 链接 |
|----|------|------|----------|------------|------|
| #3348 | i18n: complete Czech code wrap labels | 国际化/本地化 | 补充了 Czech 语言的代码换行标签，使得中文/捷克语界面在代码块显示更一致。 | – | [sipeed/picoclaw PR #3348](https://github.com/sipeed/picoclaw/pull/3348) |
| #1545 | fix: merge PR #1500 #1490 #1488 #1487 #1485 | 合并修复 | 将五个先前打开的修复 PR 集中合并，涵盖了小 bug、日志格式以及配置校正。 | #1500, #1490, #1488, #1487, #1485 | [sipeed/picoclaw PR #1545](https://github.com/sipeed/picoclaw/pull/1545) |
| #20 | Fix typos and update API keys in README | 文档 | 修正了 README 中的拼写错误，统一了 API key 示例的键名（snake_case），并更新了 OpenRouter 的 `api_base` 示例。 | – | [sipeed/picoclaw PR #20](https://github.com/sipeed/picoclaw/pull/20) |
| #1268 | imessage support  stop command some logs | 功能增添 | 添加了 iMessage 渠道支持、LLM API 调用日志、对话日志、`stop` 命令以及隐私脱敏处理。 | – | [sipeed/picoclaw PR #1268](https://github.com/sipeed/picoclaw/pull/1268) |

**整体影响**：  
- 国际化与文档改进提升了对非英语用户的友好度和使用门槛。  
- 合并的修复 PR（#1545）一次性解决了多个零散问题，减少了回归风险。  
- iMessage 支持（#1268）拓展了 PicoClaw 在苹果生态中的可用性，同时引入了更完善的日志与隐私机制，为后续审计和调试奠定基础。

### 4. 社区热点（今日讨论最活跃的 Issues/PRs）

| 排名 | 类型 | 编号 | 标题 | 评论数 | 👍 数 | 主要诉求 | 链接 |
|------|------|------|------|--------|------|----------|------|
| 1 | Issue | #3287 | [Feature] Better support long messages in IRC | 12 | 0 | 需要 PicoClaw 能够将 IRCv3 超过 512 字节的长消息视为单一连贯消息，避免自动分片导致的上下文丢失。 | [#3287](https://github.com/sipeed/picoclaw/issues/3287) |
| 2 | Issue | #3281 | [BUG] Web UI chat input is very laggy when history has a little bit long | 11 | 2 | 在聊天历史稍微增长后，Web UI 输入框出现明显延迟，影响实时交互体验。 | [#3281](https://github.com/sipeed/picoclaw/issues/3281) |
| 3 | Issue | #3351 | [stale] 自动压缩会物理删除 session 原始记录，失忆后历史无法找回 | 2 | 0 | 用户发现长对话触发的 `SetHistory` 会重写并裁剪 `.jsonl` 文件，导致历史不可恢复。 | [#3351](https://github.com/sipeed/picoclaw/issues/3351) |
| 4 | Issue | #3350 | [stale] 嵌入式/低性能设备下 Web UI 输入框打字严重卡顿 | 2 | 0 | 在 RV1106 等低算力平台上，输入框每字符延迟明显，怀疑与历史渲染或状态更新频率相关。 | [#3350](https://github.com/sipeed/picoclaw/issues/3350) |
| 5 | Issue | #3369 | [Feature] Add OpenCode Go session header support | 1 | 2 | 为 OpenCode Go 请求添加 `x-opencode-session` 头，以便后端关联会话 ID。 | [#3369](https://github.com/sipeed/picoclaw/issues/3369) |

**热点背后的诉求**：  
- **长 IRC 消息**（#3287）和 **Web UI 输入卡顿**（#3281、#3350）均指向 **实时性与数据完整性** 的核心需求。  
- 会话存储机制的争议（#3351）暴露了 **持久化策略** 与 **用户期望**之间的错位——用户希望即使在压缩/摘要后也能保留原始记录以供审计或回溯。  
- OpenCode Go 头部需求（#3369）则是对 **新兴 AI 代码助手生态** 的适配压力。

### 5. Bug 与稳定性（今日报告的问题，按严重程度排序）

| 严重程度 | Issue | 描述 | 是否有对应的 Fix PR | 链接 |
|----------|-------|------|-------------------|------|
| 高 | #3281 | Web UI 输入框在聊天历史略长时出现明显卡顿，影响可用性。 | 暂无直接 fix PR（但 #1268 中的日志改进可能间接帮助定位） | [#3281](https://github.com/sipeed/picoclaw/issues/3281) |
| 中 | #3350 | 嵌入式低性能设备上 Web UI 输入延迟严重，CPU 飙升。 | 暂无 fix PR。 | [#3350](https://github.com/sipeed/picoclaw/issues/3350) |
| 中 | #3351 | 自动压缩导致 session 原始记录被物理删除，历史记录不可恢复。 | 暂无 fix PR。 | [#3351](https://github.com/sipeed/picoclaw/issues/3351) |
| 低 | #3287 | 功能需求（非 Bug），但若长消息被错误分片可能导致数据丢失。 | 暂无 fix PR。 | [#3287](https://github.com/sipeed/picoclaw/issues/3287) |

**备注**：目前尚未有专门针对上述 Bug 的 PR 合并，维护者可能正在评估根因或等待更多复现信息。

### 6. 功能请求与路线图信号

| 功能请求 | 关联 Issue | 现有相关 PR/工作 | 是否可能进入下一版本 | 备注 |
|----------|------------|------------------|----------------------|------|
| 支持 IRC 超长消息单一处理 | #3287 | 无直接 PR | **可能**（社区关注度高，需求明确） | 需要在 IRC 通道的消息拼接/重组逻辑上做修改。 |
| OpenCode Go 会话头 (`x-opencode-session`) | #3369 | 无直接 PR | **可能**（已有 2👍，且与现有 OpenAI‑compatible provider 紧耦合） | 只需在 provider 层注入会话 ID。 |
| 嵌入式设备 Web UI 性能优化 | #3350 | 无直接 PR | **不确定**（属于性能优化，可能需要前端虚拟列表或延迟渲染） | 可参考 #1268 中的日志改进，先做 profiling。 |
| 持久化会话存储（防止压缩删原始记录） | #3351 | 无直接 PR | **可能**（若社区强烈要求，需改写 `JSONLStore.SetHistory` 为追加仅添加摘要，保留原始文件） | 该改动涉及存储层，需谨慎以免破坏兼容性。 |

### 7. 用户反馈摘要（从 Issues 评论中提炼）

- **性能卡顿**：多位用户（如 xpader、chentianxiong123）报告在历史记录达到几十条后，Web UI 输入框出现每字符延迟，怀疑是前端每次输入都重新渲染整个消息列表或进行状态同步导致。建议采用 **虚拟滚动** 或 **增量更新**。  
- **持久化担忧**：用户发现 `.jsonl` 文件在 `SetHistory` 后被截断，导致 “失忆”后无法恢复完整对话。他们认为压缩应仅生成摘要文件，**不应修改原始日志**。  
- **IRC 长消息**：超长消息被 IRC 客户端自动分片后，PicoClaw 将每片视为独立消息，导致上下文断裂。用户期望在服务端进行 **重新组装** 或标记为同一逻辑消息。  
- **国际化与文档**：社区对 Czech 语言标签的补全表示赞赏，认为细节本地化提升了非英语用户的使用体验。  
- **新功能需求**：对于 OpenCode Go 的会话头，用户认为这是与新兴代码助手生态对接的必要步骤，能够让 PicoClaw 在企业内部工具链中更自然地集成。

### 8. 待处理积压（长期未响应的重要 Issue/PRs）

| 编号 | 类型 | 最后更新 | 天数（约） | 未解决原因/风险 | 建议行动 |
|------|------|----------|------------|----------------|----------|
| #3287 | Feature（长 IRC 消息） | 2026-09-13 | 约 45 天 | 尚未有 PR 或明确的实现方案，讨论集中在需求描述上。 | 需要维护者给出技术可行性评估（如是否在 IRC channel 中做缓冲重组），并分配开发者或邀请社区贡献。 |
| #3281 | Bug（Web UI 输入卡顿） | 2026-09-13 | 约 46 天 | 高评论数表明普遍痛点，但尚未有修复 PR。 | 建议进行前端性能 profiling（React/Vue 渲染开销），考虑使用 `requestIdleCallback` 或窗口化列表。 |
| #3369 | Feature（OpenCode Go 头） | 2026-09-06 | 约 9 天 | 虽然更新较近，但只有 1 条评论，缺乏实现进展。 | 可快速跟进：在 OpenAI‑compatible provider 中读取会话 ID并注入头，提交 PR 供 review。 |
| #3351 / #3350 | Bug/stale（会话压缩删除 & 嵌入式卡顿） | 2026-09-13 | 约 15 天 | 已被标记为 stale，但根本问题未解决，风险是用户信任度下降。 | 维护者应重新评估是否需要 **重新打开** 这些 Issue，提供临时 workaround（如关闭自动压缩）或明确 roadmap。 |

---

**总结**：今日 PicoClaw 的活动集中在代码清理、文档规范以及小功能增补上，社区对实时性和持久性的关注度最高。建

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw 项目日报（2026‑09‑14）**  
*数据来源：过去 24 h 的 Issues（2 条）与 PR（13 条）更新；无新版本发布。*

---

## 1. 今日速览
- 项目活跃度保持在 **高位**：过去 24 h 内有 **13** 条 PR 活跃（其中 12 条仍处于打开状态，仅 1 条已合并/关闭），以及 **2** 条 Issue（1 已关闭，1 新开）。  
- 今日的主要工作集中在 **修复首次安装时的 provider picker 跳过 Bug**（Issue #3787 已关闭，PR #3790 已合并）以及 **相关的 Codex 安装问题**（Issue #3791 新开，PR #3792 打开以提供临时修复）。  
- 其余打开的 PR 大多属于 **功能增强**（如 tools‑only 交付、per‑agent‑group delivery mode、结构化 Codex 身份验证）和 **细微稳定性改进**（Mattermost、driver watch‑feed、更新控制器等），表明核心团队正在同时推进功能路线图与基础可靠性。

## 2. 版本发布
- **无新版本发布**。  
- 最新提交仍停留在 `0399a6dfa98fa8fb27b7b267749ed04d6880379b`（2026‑09‑12 主分支）。

## 3. 项目进展（今日合并/关闭的重要 PR）
| PR | 状态 | 主要内容 | 推进方向 |
|----|------|----------|----------|
| **[#3790](https://github.com/qwibitai/nanoclaw/pull/3790)** | 已合并 | 恢复首次安装时的 **agent‑provider picker**，防止默认直接选取 Claude，使得用户能够在 fresh install 中选择 Codex 或其他可安装的 provider。 | 解决了 **provider picker 被跳过** 的回归（Issue #3787），恢复了新用户的自由选择权。 |
| **[#3787](https://github.com/qwibitai/nanoclaw/issues/3787)** | 已关闭 | 描述 fresh `bash nanoclaw.sh` 安装跳过 provider picker 并静默选定 Claude 的 bug。 | 已由 #3790 修复，issue 随 PR 合并而关闭。 |

*其余 12 条打开的 PR 均未在今日合并，但已在代码审查或 CI 中推进。*

## 4. 社区热点
| 类别 | 编号 | 标题 | 评论数 / 反应 | 链接 | 热点分析 |
|------|------|------|--------------|------|----------|
| Issue | **#3787** | Fresh setup skips the provider picker and silently selects Claude | 2 评论，0 👍 | [#3787](https://github.com/qwibitai/nanoclaw/issues/3787) | 用户反馈首次安装体验被破坏，导致无法选择 Codex。评论中出现了对自动化脚本的不满以及对 provider 选择透明度的诉求。 |
| PR | **#3792** | fix(setup): bootstrap pinned Codex CLI for auth | 0 评论（暂无） | [#3792](https://github.com/qwibitai/nanoclaw/pull/3792) | 虽暂无评论，但直接针对今日新开的 Issue #3791（全局 Codex CLI 依赖），社区关注度预期会随讨论升高。 |
| PR | **#3781** | feat(agent-runner): enforce tools-only delivery | 0 评论 | [#3781](https://github.com/qwibitai/nanoclaw/pull/3781) | 功能型 PR，涉及核心交付契约，潜在影响大，后续审议将成为讨论焦点。 |

## 5. Bug 与�定性（按严重程度排序）
| 严重程度 | 编号 | 类型 | 描述 | 是否有对应 fix PR | 链接 |
|----------|------|------|------|-------------------|------|
| **高** | #3787 | Bug（已关闭） | Fresh setup 跳过 provider picker，导致无法选择非 Claude 提供者。 | 已由 #3790 修复 | [#3787](https://github.com/qwibitai/nanoclaw/issues/3787) / [#3790](https://github.com/qwibitai/nanoclaw/pull/3790) |
| **中** | #3791 | Bug（打开） | Fresh Codex setup 需要全局安装的 `codex` CLI；非特权用户在默认 `/usr` 前缀下安装失败。 | 有临时修复 PR #3792（bootstrap pinned Codex CLI） | [#3791](https://github.com/qwibitai/nanoclaw/issues/3791) / [#3792](https://github.com/qwibitai/nanoclaw/pull/3792) |
| **中** | #3789 | Bug（打开） | Watch feed 订阅失败时不应导致 arming 流程中断。 | 有对应 PR #3789（fix drivers） | [#3789](https://github.com/qwibitai/nanoclaw/pull/3789) |
| **低** | 多个 Mattermost 相关 PR（#3777、#3778、#3780、#3779） | Bug（打开） | 包括平台校验、设置持久化、适配器验证、重启身份验证等细节问题。 | 各自有对应 PR（均已打开） | 各 PR 链接见上文 |

## 6. 功能请求与路线图信号
| 功能 | 相关 PR | 说明 | 路线图判断 |
|------|----------|------|------------|
| **tools‑only 交付**（确保不可靠的 final‑text envelope 的 agent 组只通过 outbound tools 交付） | #3781 | 添加强制 tools‑only 交付机制。 | 已在核心团队审查中，极有可能进入下一个小版本（v0.xx）作为交付契约的稳定化步骤。 |
| **per‑agent‑group delivery mode 配置** | #3713 | 引入 `container_configs.delivery_mode` 字段（迁移 26）以记录每组应使用的交付契约。 | 与 #3781 互补，已在讨论中，预计随同一版本合并。 |
| **结构化 Codex 身份验证**（browser/device‑code 流程、typed driver events） | #3489 | 为 Codex provider 添加完整的登录事件流，使终端与 driver 客户端可统一认证。 | 已挂起 8 天以上，但为核心功能（Codex 支持），维护者倾向于在下个里程碑中合并。 |
| **OpenCodeProvider 文本回退**（以防止 message.part.delta 竞争导致的文本丢失） | #3463 | 增加对 `message.part.delta` 的回退处理，修复 #2985。 | 已等待审查约 3 周，属于稳定性改进，合并概率高。 |
| **更新控制器恢复**（完整提取 `scripts/` 树以供更新控制器加载） | #3750 | 修复 `/update-nanoclaw` 在模块加载时因缺少 `scripts/provider-contract-verifier.ts` 而失败。 | 已打开 6 天，为基本维护功能，预期近期合并。 |

## 7. 用户反馈摘要（来自 Issues 评论）
- **Issue #3787 评论摘要**：  
  - 用户指出“第一次运行安装脚本时，系统直接默认使用 Claude，根本没弹出选择框”，导致他们无法在没有全局 Claude CLI 的环境中尝试 Codex。  
  - 另一位评论建议增加一个强制交互标志（如 `--force-picker`）以防止类似自动化脚本误选。  
- 尽管 Issue #3791 暂无评论，但其标题暗示了 **非特权用户在受限环境中的安装痛点**，后续社区讨论大概会围绕「如何在不需要全局 npm install 的情况下完成 Codex 引导」展开。

## 8. 待处理积压（长期未响应/需要关注的项）
| 类别 | 编号 | 创建时间 | 当前状态 | 为什么需要关注 |
|------|------|----------|----------|----------------|
| PR | **#3489** (feat: structured Codex auth) | 2026‑08‑23 | 打开，无评论 | 核心功能（Codex 登录）迟迟未合并，可能影响新用户对 Codex 的采纳。 |
| PR | **#3463** (opencode provider fallback) | 2026‑08‑23 | 打开，无评论 | 修复竞争导致的文本丢失，直接关系到输出完整性，审查延迟会增加回归风险。 |
| PR | **#3750** (update controller script extraction) | 2026‑09‑08 | 打开，无评论 | 影响 `/update-nanoclaw` 的可靠性，属于基础运维功能。 |
| PR | **#3713** (per‑agent‑group delivery mode) | 2026‑09‑03 | 打开，无评论 | 功能性增强，与当前 tools‑only 交付工作紧耦合，延迟可能造成配置不一致。 |
| Issue | **#3791** (Fresh Codex setup requires global CLI) | 2026‑09‑13 | 打开 | 新开 bug，急需解决以避免新用户在非 root 环境下安装失败。 |

> **建议**：维护者可优先审查并合并以上长期打开的 PR，尤其是 #3489 与 #3463，以减少功能与稳定性的技术债；同时针对新开的 #3791 尽快给出反馈或临时方案，防止安装流程阻塞新用户。

---

**总体健康度**：项目在近期表现出 **高活跃度**（众多 PR 在审核中）以及 **快速响应已知回归**（provider picker Bug 在一天内得到修复）。待合并的功能 PR 若能够尽快通过审查，将为下一版本带来重要的交付契约改进与多 provider 支持，进一步提升系统的灵活性和稳定性。维护者在此阶段应关注长期挂起的核心功能 PR 以及新出现的安装依赖问题，以保持发布节奏与用户满意度的同步提升。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw 项目日报 – 2026‑09‑14**  
*基于 GitHub 公开数据（Issues 0、PR 5、Release 0）*  

---

### 1. 今日速览  
- 项目在过去 24 小时内没有新增 Issue，仅有依赖更新的 PR 活动。  
- 共有 5 条 PR 更新，其中 4 条仍处于 **待合并** 状态，**1 条已合并/关闭**（依赖升级 PR #8097）。  
- 没有新版本发布，整体活跃度偏低，主要体现在自动化的依赖维护上，人工驱动的功能或修复几乎没有产出。  

### 2. 版本发布  
> **无新版本发布**（过去 24 小时内没有 Release）。  

### 3. 项目进展  
| PR 编号 | 状态 | 类型 | 主要内容 | 进展意义 |
|--------|------|------|----------|----------|
| #8097 | **已合并/关闭** | `chore(deps)` | 将 *everything‑else* 依赖组在根目录下升级 24 项（包括 `uuid` 1.24.0→1.26.0、`base64` 0.22.1→0.23.1、`rust_decimal` 等） | 通过依赖升级保持项目与上游库的兼容性和安全性；未引入功能变更。 |
| #8099 | 待合并 | `chore(deps)` | 同上，升级 25 项（`uuid` 1.24.0→1.26.1 等） | 待审核合并，若通过将进一步更新依赖基线。 |
| #8079 | 待合并 | `chore(deps)` | GitHub Actions 组升级 6 项（`anthropics/claude-code-action` 1.0.183→1.0.221、`actions/setup-node` 4.0.2→7.0.0 等） | 提升 CI 工作流的可靠性与最新特性。 |
| #8078 | 待合并 | `chore(deps)` | Tokio‑ecosystem 组升级 2 项（`tower-http` 0.7.0→0.7.1、`tokio-tungstenite`） |  minor 性能与稳定性改进。 |
| #7834 | 待合并 | `chore(deps)` | WASM 组升级 4 项（`wasmtime`、`wasmtime-wasi`、`wit-component`、`wit-parser`） | 长期悬而未决的依赖升级，影响了 WebAssembly 相关功能的最新支持。 |

**总体进展**：今日唯一的实际代码合并是依赖升级（#8097），未有新功能、性能改进或 Bug 修复的代码合并。项目在功能层面停滞，主要维持在依赖链的同步状态。  

### 4. 社区热点  
- **无评论或反应**：所有列出的 PR 在过去 24 小时内评论数为 0，点赞数也为 0。  
- **结论**：社区讨论极少，热点不明显；项目近期活动主要由 Dependabot 自动触发，缺乏人工驱动的讨论。  

### 5. Bug 与稳定性  
- **未报告 Bug**：过去 24 小时内没有新增 Issue，故无崩溃、回归或安全漏洞报告。  
- **现有风险**：依赖升级 PR 均尚未合并（#8099、#8079、#8078、#7834），若其中某些升级存在不兼容变更，合并前需进行充分的 CI 测试。  

### 6. 功能请求与路线图信号  
- **当前无功能请求**：所有 PR 均为依赖维护（chore），没有对应的功能增删或新特性提议。  
- **路线图暗示**：项目近期重点在于保持依赖链的最新状态（尤其是 WASM、Tokio、GitHub Actions），这可能是为后续的跨平台或云原生特性做准备。若后续计划引入新功能，预期会先完成这些基础依赖的同步。  

### 7. 用户反馈摘要  
- **无用户评论**：因 Issue 评论为空，无法提炼具体的使用痛点或满意度。  
- **推测**：由于缺乏 Issue，可能用户在这段时间内未遇到明显问题，也可能是项目使用基数较低或反馈渠道未被激活。  

### 8. 待处理积压  
| 编号 | 创建时间 | 状态 | 主要内容 | 建议关注点 |
|------|----------|------|----------|------------|
| #7834 | 2026‑08‑23 | 待合并 | WASM 组依赖升级 4 项（`wasmtime` 等） | 已悬垂超过 3 周，需评估是否与当前 WASM 功能兼容，尽快完成审查或给出反馈。 |
| #8079 | 2026‑09‑06 | 待合并 | GitHub Actions 组升级 6 项 | CI 工作流的关键升级，建议优先验证以免后续构建失败。 |
| #8078 | 2026‑09‑06 | 待合并 | Tokio‑ecosystem 组升级 2 项 | 检查是否对异步 I/O 有潜在影响。 |
| #8099 | 2026‑09‑13 | 待合并 | everything‑else 组升级 25 项 | 最新的依赖批次，审查时注意可能的破坏性变更（如 `uuid` 版本跳变）。 |

**积压总览**：目前有 4 条长期待合并的依赖升级 PR，其中 #7834 已超过 3 周未得到回复，建议维护者尽快分配审查资源或给出明确的合并/关闭决定，以避免依赖滞后带来的安全或兼容性风险。  

---  

*以上内容仅基于公开的 GitHub 事件数据，未项目内部非公开信息。*  
*如需更深入的技术分析或针对特定模块的讨论，请参考对应 PR 的完整 diff 和评论。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI 项目动态日报（2026‑09‑14）**  

---

### 1. 今日速览
- 项目在过去 24 小时内共产生 **4 条 Issue**（全部为新开/活跃）和 **6 条 PR**（其中 4 条待合并，2 条已合并/关闭）。  
- 没有新版本发布，但已有两项功能/修复合并：Markdown 编辑支持（#2659）以及 OpenClaw 子代理空响应修复（#2658）。  
- 整体活跃度保持中等：新增需求与讨论出现（如持久记忆提案），同时仍有多个长期未处理的安全与稳定性问题待审查。  

---

### 2. 版本发布
> **无新版本发布**。  

---

### 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 标题 | 类型 | 关键影响 | 链接 |
|----|------|------|----------|------|
| #2659 | **feat: support markdown editing** | 功能新增 | 在渲染器端加入了 Markdown 编辑能力，使得用户可在聊天界面直接编辑并预览 Markdown 内容，提升文档协作体验。 | https://github.com/netease-youdao/LobsterAI/pull/2659 |
| #2658 | **fix: openclaw subagent yield empty response** | Bug 修复 | 修复了 OpenClaw 子代理在特定条件下返回空响应的问题，确保代理链路的完整性，减少因空返回导致的任务中断。 | https://github.com/netease-youdao/LobsterAI/pull/2658 |

> **项目整体向前迈进**：新增 Markdown 编辑功能丰富了交互能力；OpenClaw 修复消除了一个影响可靠性的回归 bug，提升了子代理调用的稳定性。

---

### 4. 社区热点（今日讨论最活跃、评论最多、反应最多的 Issues/PRs）

| 项目 | 评论数 | 反应数 | 讨论焦点 | 链接 |
|------|--------|--------|----------|------|
| **Issue #2660** – *Proposal: durable user and workspace memory for LobsterAI* | 1 | 0 | 用户提出在跨会话（研究、文档、幻灯片、视频、Web）中持久化用户偏好、工作区、未决策等需求，期待具有“记忆”能力的 AI 助手。 | https://github.com/netease-youdao/LobsterAI/issues/2660 |
| Issue #1041 – *[stale] security: api:fetch/stream IPC 可被用于 SSRF 攻击* | 1 | 0 | 安全漏洞报告，主进程 fetch 缺乏 URL 校验，可能导致内网探测或云元数据泄露。 | https://github.com/netease-youdao/LobsterAI/issues/1041 |
| Issue #1046 – *[stale] 模型配置上下文窗口限制问题* | 1 | 0 | 用户询问上下文窗口被限制为 200K 的原因及是否可调至模型官方支持的 1M。 | https://github.com/netease-youdao/LobsterAI/issues/1046 |

> **背后诉求**：社区正在关注 **持久记忆**（提升长期使用体验）、 **安全防护**（修复 SSRF 与任意文件读取）以及 **模型配置灵活性**（上下文窗口可调）三大方向。

---

### 5. Bug 与稳定性（今日报告的问题，按严重程度排序）

| 严重程度 | 描述 | 关联 Issue / PR | 是否已有修复 PR | 链接 |
|----------|------|----------------|----------------|------|
| **高** | **SSRF 漏洞**：`api:fetch` / `api:stream` 未校验 URL，可被用于内网探测、云元数据获取。 | Issue #1041 | 有修复 PR #1042（待合并） | https://github.com/netease-youdao/LobsterAI/issues/1041  /  https://github.com/netease-youdao/LobsterAI/pull/1042 |
| **高** | **任意本地文件读取**：`dialog:readFileAsDataUrl` 未做路径边界检查，可读取 `/etc/passwd` 等敏感文件。 | Issue #1041（同上） | 同上 PR #1042 | 同上 |
| **中** | **可流式响应资源泄漏**：`handleResponsesStreamResponse` / `handleChatCompletionsStreamResponse` 中的 `reader.cancel()` 仅在 `[DONE]` 标记时触发，网络中断、超时或提前关闭均导致 Reader 永久占用。 | Issue #1038（隐含） | 有修复 PR #1038（待合并） | https://github.com/netease-youdao/LobsterAI/pull/1038 |
| **中** | **技能持久化错误**：清除 Agent 对应技能后，切换 Agent 后技能仍然出现。 | Issue #1047 | 尚无对应 PR | https://github.com/netease-youdao/LobsterAI/issues/1047 |
| **低** | **上下文窗口限制文档缺失**：官方文档未说明为何限制为 200K，用户不知是否可自行调大。 | Issue #1046 | 尚无对应 PR | https://github.com/netease-youdao/LobsterAI/issues/1046 |

> **总体安全状况**：两个 P0 安全漏洞已有对应修复 PR（#1042）待审核合并，建议优先处理以消除高危风险。

---

### 6. 功能请求与路线图信号

| 功能请求 | 关联 Issue | 现状（是否有对应 PR） | 预期纳入版本 |
|----------|------------|----------------------|--------------|
| **持久用户与工作区记忆**（跨会话保存偏好、工作区、未决策） | Issue #2660 | 仅为提案，暂无实现 PR | 若获社区赞同，可能进入下一阶段的 “长期记忆” 功能规划。 |
| **上下文窗口可配置**（支持调至模型官方 1M） | Issue #1046 | 无 PR | 需要在模型服务层或配置文件中加入可选项，可考虑在后续版本的 “模型配置” 模块中实现。 |
| **Agent 设置面板未保存更改提示** | Issue #1045（对应 PR #1045） | 有待合并的 PR #1045 | 已有实现，预计在下一次合并窗口中随功能一起发布。 |
| **Markdown 编辑**（已合并） | Issue #2659（对应 PR #2659） | 已合并 | 已在当前主线中可用。 |
| **OpenClaw 子代理空响应修复**（已合并） | Issue #2658（对应 PR #2658） | 已合并 | 已修复，提升子代理可靠性。 |

---

### 7. 用户反馈摘要（从 Issues 评论中提炼）

- **持久记忆需求**：用户明确表示希望在长期研究、多模态任务中，“偏好、常用工作区、之前引用的来源以及尚未完成的决定” 能够自动继承，避免每次会话从头开始。  
- **安全顾虑**：对 SSRF 与本地文件读取漏洞的担忧明显，评论中呼吁 “尽快加入 URL 白名单/黑名单机制”和 “对文件路径做沙盒限制”。  
- **模型窗口限制困惑**：部分用户不明白为何上下文被硬编码为 200K，询问是否为许可证、性能或服务端限制，期望得到官方解释或配置开关。  
- **交互体验**：在 Agent 切换时出现未保存更改导致数据丢失的反馈，用户希望在切换前得到弹窗确认，类似普通编辑器的 “未保存更改” 提示。  
- **总体满意度**：对已合并的 Markdown 编辑与 OpenClaw 修复表示赞赏，认为这些功能直接提升了日常使用的流畅度。

---

### 8. 待处理积压（长期未响应的重要 Issue/PRs）

| 项目 | 最后更新时间 | 天数（约） | 说明 | 链接 |
|------|--------------|-----------|------|------|
| Issue #1041（SSRF & 任意文件读取） | 2026-09-13 | 170 | 高危安全漏洞，已有修复 PR #1042 待审核。 | https://github.com/netease-youdao/LobsterAI/issues/1041 |
| PR #1042（安全修复） | 2026-09-13 | 170 | 待合并，建议尽快审查并合并以消除风险。 | https://github.com/netease-youdao/LobsterAI/pull/1042 |
| Issue #1038（流式响应资源泄漏） | 2026-09-13 | 170 | 中等危害，可能导致资源占用升高，已有 PR #1038。 | https://github.com/netease-youdao/LobsterAI/pull/1038 |
| Issue #1046（上下文窗口限制文档） | 2026-09-13 | 170 | 需要官方解释或配置选项，尚无实现计划。 | https://github.com/netease-youdao/LobsterAI/issues/1046 |
| Issue #1047（技能持久化错误） | 2026-09-13 | 170 | 影响 Agent 使用正确性，目前无修复方案。 | https://github.com/netease-youdao/LobsterAI/issues/1047 |
| PR #1044（安装程序路径归一化） | 2026-09-13 | 170 | 改进 Windows 安装体验，待合并。 | https://github.com/netease-youdao/LobsterAI/pull/1044 |
| PR #1045（Agent 设置面板未保存提示） | 2026-09-13 | 170 | 已实现功能，待合并。 | https://github.com/netease-youdao/LobsterAI/pull/1045 |

> **建议**：维护者应优先审查并合并安全相关的 PR（#1042、#1038），随后处理已就绪的功能性 PR（#1044、#1045），并为长期悬而未决的 Issue（#1046、#1047）制定明确的后续路线或指派负责人。

---

*报告生成基于 GitHub 公开数据，截止时间为 2026-09-14 00:00 UTC。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis 项目日报 (2026‑09‑14)**  

---

### 1. 今日速览  
- 过去 24 小时项目共产生 **3 条 Issue**（1 条新开，2 条已关闭）以及 **5 条 PR**（1 条待合并，4 条已合并/关闭），整体活跃度处于 **中等偏上** 水平。  
- 未有新版本发布，但多个功能改进与缺陷修复已通过 PR 合并，表明核心开发节奏保持稳定。  
- 目前所有公开讨论均为 **0 评论/0 点赞**，社区互动尚未显现热点议题，维护者的合并操作是今日主要推动力。

### 2. 版本发布  
> **无新版本**  
> 今日未标记任何 Release，故无需说明更新内容、破坏性变更或迁移注意事项。

### 3. 项目进展（今日合并/关闭的重要 PR）  

| PR | 标题 | 关联 Issue | 主要贡献 | 状态 |
|----|------|------------|----------|------|
| [#1266](https://github.com/moltis-org/moltis/pull/1266) | feat(chat): persist configurable default reasoning effort | #1259 | 新增 `chat.reasoning_default` 配置项，使默认推理深度（`minimal` ~ `max`，`extra‑high` 为 `xhigh` 别名）在会话间持久化；复用统一的 `ReasoningEffort` 枚举。 | 已合并 |
| [#1265](https://github.com/moltis-org/moltis/pull/1265) | fix(telegram): expose shared‑chat tool policy controls | #1264 | 将 Slack 已有的 `untrusted_audience` 与 `untrusted_tools` 设置透传至 Telegram 配置、运行时、存储序列化及脱敏 API 响应，修复在共享 Telegram 频道中工具失效的问题。 | 已合并 |
| [#1263](https://github.com/moltis-org/moltis/pull/1263) | chore(deps): bump the npm_and_yarn group across 2 directories with 4 updates | — | 在 `/crates/web/ui` 升级 `@babel/core`；在 `/docs` 升级 `astro`、`js-yaml` 等依赖，保持文档站与前端构建工具的最新状态。 | 已合并 |
| [#1253](https://github.com/moltis-org/moltis/pull/1253) | feat(reasoning): add max effort level | — | 将 `max` 加入共享 `ReasoningEffort` 枚举，并在 OpenAI Codex Responses API 透传（针对不支持 distinct max 的提供者进行 clamp），同时在理由选择器、翻译及文档中暴露该级别。 | 已合并 |
| [#1267](https://github.com/moltis-org/moltis/pull/1267) *(待合并)* | fix(hooks): dispatch agent and outbound message lifecycle events | #1255 | 在成功完成流式/非流式循环后仅分发一次 `AgentEnd`（附带最终文本与实际迭代/工具调用总数）；在最终发布前分发 `MessageSending`，以尊重内容改写与跨渠道/TTS 输出的块。 | **待审核** |

**整体推进**：  
- 配置化推理深度（#1266）与最大推理等级（#1253）的落地使得 Moltis 在推理策略上更具灵活性，满足用户对“思考深度”可持久化的需求。  
- Telegram 共享频道工具权限的修复（#1265）直接解决了最近报告的功能回归，提升了跨平台可靠性。  
- 依赖升级（#1263）保持了技术栈的安全性与兼容性，为后续特性开发扫清障碍。  
- 挂钩生命周期事件的改进（#1267）一旦合并，将强化 agent 与外部消息的可观测性，为调试与审计提供更精准的钩子。

### 4. 社区热点  
- 今日所有 Issue 与 PR 均显示 **0 条评论** 和 **0 个 👍**，说明社区讨论相对安静。  
- 最受关注的潜在议题是 **Issue #1268**（“Could Moltis expose an optional advanced memory provider?”），尽管目前没有评论，但它提出了对记忆层的可插拔扩展需求，可能在后续吸引更多关注。  
- 已关闭的 Issue #1259 与 #1264 在合并对应 PR 后未产生后续讨论，表明修复满足了提出者的预期。

### 5. Bug 与稳定性  
| 严重度 | 描述 | 关联 Issue | 已有 Fix PR | 状态 |
|--------|------|------------|------------|------|
| 高 | 在共享 Telegram 频道中，工具因缺少 `untrusted_audience/untrusted_tools` 配置而被全局拒绝，导致功能不可用。 | #1264 | [#1265](https://github.com/moltis-org/moltis/pull/1265) | 已合并，问题已解决 |
| 低 | 无其他报告的崩溃或回归。 | — | — | — |

**稳健性评估**：今日仅有一项高优先级 bug 已被及时修复；未发现新的回归或崩溃迹象，项目整体稳定性良好。

### 6. 功能请求与路线图信号  
- **Issue #1268** – 请求暴露一个可选的 **高级内存提供者**（advanced memory provider），以便用户可以插入自定义持久化或向量检索后端。  
  - 此需求与项目已有的 “内置记忆、跨会话回溯” 特性形成互补。若后续计划支持插件化内存层，此 Issue 有望被纳入下一版本的路线图。  
- 已完成的功能（可配置推理默认值、最大推理等级、Telegram 共享频道工具策略）表明团队正在围绕 **推理可配置性** 与 **多平台工具治理** 两个方向迭代。  
- 挂钩生命周期事件的改进（#1267）一旦合并，将为 **可观测性与审计** 铺路，可能成为后续 0.x 版本的里程碑。

### 7. 用户反馈摘要  
- 由于 Issues 与 PR 均无评论，无法直接提炼用户痛点或满意度。  
- 从已关闭的 Issue #1259（配置默认推理等级）可以推断，至少有一位用户（**Scentedtiger**）对会话间推理设置的持久化有明确需求，且该需求已得到满足。  
- Issue #1264 的提交者（**stratus-ss**）明确表示使用最新版 Moltis，并在共享 Telegram 频道遇到工具失效，说明对跨平台一致性的期待较高。  

### 8. 待处理积压  
- **Open Issue #1268** – 高级内存提供者请求（创建于 2026‑09‑13），目前尚无评论或赞同，但属于功能扩展类需求，建议维护者在后续规划中评估其与现有记忆系统的兼容性。  
- **Open PR #1267** – 挂钩生命周期事件修复，等待审核。此 PR 直接关系到 agent 与外部消息的可观测性，建议尽快完成代码审查并合并，以免遗留影响调试工作流。  
- 长期未响应的 Issue/PR：基于所提供数据，**没有** 超过数天未更新的旧 Issue 或 PR，说明目前的 backlog 较为清晰，维护者能够及时处理新来的需求与缺陷。

---

**总体健康度**：代码活跃度良好，核心功能（推理配置、跨平台工具策略、依赖维护）近期均有进展，唯一未解决的功能请求（高级内存提供者）尚未引发社区讨论。项目在保持稳定的同时，正在逐步增强可配置性与可观测性，整体趋势向好。建议维护者关注 **#1268** 的潜在需求并尽快审合 **#1267**，以保持功能完整性与社区信任度。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw (QwenPaw) 项目动态日报 – 2026‑09‑14**  
*数据来源：过去 24 小时 Issues（5 条）、PRs（6 条）、最新 Releases（0 个）*  

---

## 1. 今日速览
- 项目整体活跃度中等：过去 24 小时内有 4 条活跃/新开 Issue、1 条已关闭 Issue，以及 5 条待合并 PR 与 1 条已关闭/合并 PR。  
- 没有新版本发布，但社区贡献依然活跃，今日全部 PR 均来自首次贡献者（first‑time‑contributor），表明项目对外部开发者的吸引力仍在。  
- 今日的焦点集中在 **会话丢失**、**定时任务无输出** 以及 **多语言（pt‑BR）翻译完善** 三个议题上，评论数和讨论度最高。  
- 长期未解决的 Issue（#3429、#4009）今日得到闭合，说明维护者在清理老旧积压方面有所行动。

## 2. 版本发布
> **无**  
> 过去 24 小时内未有新版本（Release）发布。

## 3. 项目进展
| 状态 | PR 编号 | 标题 | 关键变化 | 备注 |
|------|--------|------|----------|------|
| **CLOSED** (更新至 2026‑09‑13) | #4009 | feat(i18n): add Brazilian Portuguese (pt‑BR) locale support | 已完成 pt‑BR 翻译的基础工作，后续由 #7734 进行修补与完善。 | 此 PR 已在今日被标记为闭合，表示该功能已合入主分支或被视为完成。 |
| **CLOSED** (更新至 2026‑09‑13) | #3429 | Pre-install himalaya and other commonly used CLI tools in Docker image | 将 himalaya 等常用 CLI 工具预装进官方 Docker 镜像，减少用户重复安装。 | 长期悬而未决的增强需求今日被闭合，暗示该改动可能已通过其他方式（如文档或脚本）实现，或维护者认为不再必要。 |
| **OPEN** | #7737 | fix(skills): expand multi-agent collaboration trigger keywords | 扩展多协作技能的触发关键字，让技能选择提示能在首轮识别用户的团队协作请求。 | 待合并，预计将提升多智能体协作的易用性。 |
| **OPEN** | #7736 | feat(providers): add DeepSeek V4 Flash capabilities | 在提供者目录中加入 DeepSeek V4 Flash 的已文档化能力（图像输入、1M token 窗口、reasoning effort）。 | 待合并，将丰富模型选择库。 |
| **OPEN** | #7735 | fix(mcp): preserve decoded HTTP error responses | 修复 MCP 中在重建错误响应时误删 HTTP body‑framing 头部的问题，防止二次解压缩。 | 待合并，关联 Issue #7716。 |
| **OPEN** | #7734 | fix(i18n): complete pt‑BR translation and repair broken strings from #4009 | 补充 pt‑BR 语言文件的缺失项并修复已标翻译但损坏的字符串，使其与 en.json 达成全键 parity。 | 待合并，直接继承自今日闭合的 #4009。 |
| **OPEN** | #7732 | fix(acp): select permission options by protocol kind | 按协议 kind 先匹配 ACP 权限选项，保留既有 ID 匹配以兼容旧客户端。 | 待合并，关联 ACP 权限处理。 |

> **整体推进**：今日没有 PR 被合并（所有 PR 均处于 OPEN 状态），但两项长期积压的 Issue（#3429、#4009）已被标记为 CLOSED，说明维护者在清理旧需求方面有所进展。待合并的 PR 主聚焦于国际化完善、模型能力扩展以及底层错误处理，若顺利合并，将在下一版本中提升多语言支持、模型多样性和系统稳定性。

## 4. 社区热点
| 排名 | 类型 | 编号 | 标题 | 评论数 | 👍 | 链接 | 主要诉求 |
|------|------|------|------|--------|----|------|----------|
| 1 | Issue | #7571 | [question] 总是记不住，还是会遗忘。 | 4 | 0 | <https://github.com/agentscope-ai/QwenPaw/issues/7571> | 用户反馈在插件开发流程中，TODO 文件分散且易被误覆盖，期望能够明确约束文件生成路径或提供更强的防覆盖机制。 |
| 2 | Issue | #7724 | [bug] 会话丢失 | 3 | 0 | <https://github.com/agentscope-ai/QwenPaw/issues/7724> | 桌面端在长时间空闲后会话历史记录丢失，甚至连使用的大模型配置也随之消失，用户希望会话持久化以及更友好的恢复提示。 |
| 3 | Issue | #7709 | [bug] 定时任务经常无输出, 理应输出的结果经常被折叠在步骤或者thinking中 | 2 | 0 | <https://github.com/agentscope-ai/QwenPaw/issues/7709> | 定时任务的输出被引擎错误地放入思考过程或直接丢失，导致用户看不到期望的结果，需改进输出展示与日志捕获机制。 |
| 4 | Issue | #7733 | [enhancement] Agent-autonomous context management — a smooth handover across context eviction | 1 | 0 | <https://github.com/agentscope-ai/QwenPaw/issues/7733> | 长时间运行时因 token 上限触发上下文驱逐，代理无法感知或参与，导致任务中断。用户希望代理能主动参与上下文压缩并得到预警。 |
| 5 | PR | #7734 | fix(i18n): complete pt-BR translation and repair broken strings from #4009 | 0 | 0 | <https://github.com/agentscope-ai/QwenPaw/pull/7734> | 社区贡献者希望把巴西葡萄牙语本地化推向完整 parity，减少语言切换时的文本缺失。 |

**热点背后的诉求**：  
- **稳定性与可预测性**（会话丢失、TODO 文件误放）是最迫切的痛点。  
- **功能完整性**（多语言支持、模型能力、定时任务可见性）也是社区积极推动的方向。  
- **开发者体验**（上下文管理自主权、错误响应保存）正在通过技术性 PR 获得关注。

## 5. Bug 与稳定性
| 严重程度 | Issue 编号 | 标题 | 简要描述 | 是否有对应 Fix PR |
|----------|-----------|------|----------|-------------------|
| 高 | #7724 | 会话丢失 | 桌面端在空闲后会话历史记录及大模型配置消失，导致用户无法继续之前的对话。 | 暂无直接 PR（需查看后续讨论）。 |
| 高 | #7709 | 定时任务经常无输出，结果被折叠在步骤/thinking 中 | 定时任务的正常输出未展示，甚至被引擎放入内部思考过程，用户看不到结果。 | 暂无直接 PR。 |
| 中 | #7733 | Agent‑autonomous context management — a smooth handover across context eviction | 长任务因 token 阈值触发上下文驱逐时，代理无感知，导致任务中断。 | 暂无直接 PR，但属于增强类需求，可能在后续版本中通过 context‑management 改进解决。 |
| 低 | #7571 | 总是记不住，还是会遗忘。（插件开发路径与 TODO 文件分散） | 虽非崩溃，但影响开发工作流，易导致代码被误覆盖。 | 暂无直接 PR。 |

> **稳定性总结**：今日报告的两个高严重性 Bug（#7724、#7709）均尚未有对应的修复 PR，建议维护者优先评估并分配资源进行根因分析与补丁开发。

## 6. 功能请求与路线图信号
| 功能请求 | 对应 Issue/PR | 说明 | 是否有相关进行中的 PR |
|----------|--------------|------|----------------------|
| Agent‑autonomous context management（上下文驱逐时的主动感知与预警） | Issue #7733 | 期望代理能参决策上下文压缩，并在驱逐前得到通知。 | 暂无直接 PR，但属于增强方向，后续可能在 core/context 相关模块中实现。 |
| 完善多语言（pt‑BR）本地化 | PR #7734（待合并） | 补全缺失译文并修复已翻译但损坏的字符串。 | 有进行中 PR，预计很快合并。 |
| 增加 DeepSeek V4 Flash 能力描述 | PR #7736（待合并） | 添加图像输入、1M token 窗口、reasoning effort 等能力，以便模型选择与上下文管理更准确。 | 有进行中 PR。 |
| 扩展多智能体协作触发关键字 | PR #7737（待合并） | 让技能选择 prompt 能在首轮识别用户的团队协作请求。 | 有进行中 PR。 |
| MCP 错误响应保存（防止二次解压） | PR #7735（待合并） | 保留已解码的 HTTP 错误响应体，避免 HTTPX 再次尝试解压。 | 有进行中 PR。 |

**路线图信号**：以上功能请求均已有对应的 PR 在审核中，表明社区在 **国际化、模型能力扩展、多智能体协作以及底层错误处理** 四个维度上有明确的需求。若这些 PR 被合并，下一版本（假设为 v2.2.2）很可能会包含这些改进。

## 7. 用户反馈摘要（从 Issues 评论中提炼）
- **TODO 文件分散**（#7571 评论）：用户多次提到“无论怎么强调，TODO 文件还是出现在 A/B/C 三个路径”，反映出对文件生成路径的约束机制缺失或不够刚性。建议增加配置项，限定 TODO 输出目录或提供覆盖警告。  
- **会话丢失**（#7724 评论）：用户描述“断电或长时间空闲后，对话历史不见，连大模型也得重新选”，表明会话持久化依赖易失存储（如内存），需要磁盘或数据库级别的快照机制。  
- **定时任务输出被折叠**（#7709 评论）：用户贴出截图，指出结果有时被放进 “thinking” 步骤，导致前端不展示。这提示输出路由逻辑需要更清晰的区分（最终输出 vs 中间思考）。  
- **上下文驱逐无感知**（#7733 评论）：用户希望“在即将触发 token 上限前得到警告，或者能自行决定哪部分内容保留”。这暗示需要在代理层暴露上下文管理接口。  
- **pt‑BR 翻译**（#7734 评论，尽管评论为零，但 PR 描述表明社区对本地化有强烈需求）。  

总体来看，用户最关注的是 **工作流可预测性**（文件路径、会话持久化）和 **功能完整性**（多语言、模型能力、输出可见性）。

## 8. 待处理积压
| 类型 | 编号 | 标题 | 最后更新 | 未处理时长 | 备注 |
|------|------|------|----------|-----------|------|
| Issue | #7571 | [question] 总是记不住，还是会遗忘。 | 2026‑09‑13 | 自 2026‑09‑05 创建，约 9 天 | 需要明确的路径约束或防覆盖机制。 |
| Issue | #7724 | [bug] 会话丢失 | 2026‑09‑13 | 自 2026‑09‑12 创建，约 2 天 | 高优先级，建议尽快定位持久化失效点。 |
| Issue | #7709 | [bug] 定时任务经常无输出, 理应输出的结果经常被折叠在步骤或者thinking中 | 2026‑09‑13 | 自 2026‑09‑11 创建，约 3 天 | 输出路由或前端渲染问题。 |
| PR | #7737 | fix(skills): expand multi-agent collaboration trigger keywords | 2026‑09‑13 | 今日新建 | 待审核。 |
| PR | #7736 | feat(providers): add DeepSeek V4 Flash capabilities | 2026‑09‑13 | 今日新建 | 待审核。 |
| PR | #7735 | fix(mcp): preserve decoded HTTP error responses | 2026‑09‑13 | 今日

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报

**日期：2026-09-14 | 数据截止：2026-09-13 23:59 UTC**
**仓库：https://github.com/zeroclaw-labs/zeroclaw**

---

## 1. 今日速览

过去 24 小时内，ZeroClaw 项目保持高强度活跃，共产生 36 条 Issues 更新（31 条新开/活跃，5 条关闭）和 50 条 Pull Request 更新（全部为待合并状态，尚无 PR 完成合并或关闭）。**今日无新版本发布**，项目仍处于 v0.8.5 稳定分支的持续打磨阶段（v0.8.5 Stabilization Line，里程碑截止 2026-08-30）。整体活跃度评估为 **高**，但合入节奏偏缓，50 条待合并 PR 中部分已长时间挂起，建议维护者加速 Review。

---

## 2. 版本发布

**今日无新版本发布。**

> 当前最新稳定版本为 **v0.8.5**。根据 Issue #94555（[v0.8.5 finite weekly stabilization line](https://github.com/zeroclaw-labs/zeroclaw/issues/9459)），v0.8.5 的功能摄入已于 2026-08-04 冻结，每周裁剪仅合入已就绪工作。下一个里程碑为 **v0.8.6**，目前尚未创建对应的 Stabilization Tracker。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR/Issue | 类型 | 说明 |
|---|---|---|
| [#10838](https://github.com/zeroclaw-labs/zeroclaw/pull/10838) | Bug Fix | `fix(providers): degrade media markers to prose the model cannot echo as a marker` — 修复 Media Marker 在文本降级路径中被模型回显的问题 |
| [#10837](https://github.com/zeroclaw-labs/zeroclaw/issues/10837) | Bug (Closed) | `RPC config/set persists values that Config::validate() rejects` — 修复 RPC `config/set` 跳过校验的缺陷 |
| [#10831](https://github.com/zeroclaw-labs/zeroclaw/pull/10831) | Docs | `docs(adr): record inbound authentication principal authority` — 新增 ADR-016，记录认证主体权限架构决策 |

### 推进方向总结

- **Provider 降级与容错**：#10838 修复了媒体标记在降级路径中被模型回显的异常，增强 provider 可靠性。
- **Config 校验一致性**：#10837 关闭了一个 RPC 与 CLI/网关行为不一致的长期 Bug。
- **架构文档完善**：#10831 补充了 ADR-016，使 inbound authentication 的架构决策有据可查。

> ⚠️ **注意**：截至今日，50 条待合并 PR 中尚无一条完成合入，项目"向前推进"主要依靠 Issue 关闭和少量新 PR 创建。**合入吞吐是当前主要瓶颈**。

---

## 4. 社区热点

### 最活跃 Issues（按评论数排序）

1. **[#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)** — Maintainer decision queue for RFCs and design issues（15 条评论）
   - Tracker 类型：为 RFC 和设计问题建立维护者决策队列，反映社区对治理流程规范化的强烈诉求。

2. **[#10549](https://github.com/zeroclaw-labs/zeroclaw/issues/10549)** — RFC: Simplify RFC voting by removing mandatory discussion windows（10 条评论）
   - 提议取消 RFC 投票前强制的 48h/72h 讨论窗口。社区认为固定等待时间并未带来更多实质评审，反而产生摩擦。

3. **[#10366](https://github.com/zeroclaw-labs/zeroclaw/issues/10366)** — RFC: Clarify PR review evidence, freshness warnings（7 条评论）
   - 引入"expedited merge lane"，为已获 Core 批准且检查通过的 PR 加速合入。

4. **[#10734](https://github.com/zeroclaw-labs/zeroclaw/issues/10734)** — RpcDispatcher::process_line stack guard near-exhaustion（7 条评论，P1）
   - Windows 上 `Advisory Windows nextest` 作业触发真实栈溢出（`0xc00000fd`），影响 CI 可信度。

5. **[#9381](https://github.com/zeroclaw-labs/zeroclaw/issues/9381)** — crates.io publishing, packaging, and cargo-install follow-ups（5 条评论，P2）
   - v0.8.4 的发布遗留问题，其中 in-crate symlinks 在无 developer mode 的 Windows 上破坏 checkout，用户影响真实。

### 最活跃 PRs（按评论/关注度排序）

- **[#10337](https://github.com/zeroclaw-labs/zeroclaw/pull/10337)** — `fix(tools): honor allowed roots for git operations`（XL 尺寸，高风险）
  - 修复 git 工具 Allowed Roots 的安全缺陷，绑定仓库发现和工作目录到授权根目录。
- **[#10610](https://github.com/zeroclaw-labs/zeroclaw/pull/10610)** — `feat(security): implement the accepted shell V1 permission policy`（XL 尺寸，5 单 commit）
  - RFC #7155 Phase 0+1 的实现，统一工具权限策略与分级审批，安全性重大增强。
- **[#9584](https://github.com/zeroclaw-labs/zeroclaw/pull/9584)** — `feat(cli): add the egress grant ceremony to plugin install and list`
  - 插件安装/列表加入 egress grant 仪式，强化出口流量管控。

### 热点背后的诉求分析

| 诉求类别 | 代表 Issue/PR | 说明 |
|---|---|---|
| **治理流程提效** | #10549, #8692 | RFC 投票和决策流程需要减少不必要的等待时间 |
| **CI/测试可信度** | #10734, #10793 | Windows 测试存在环境相关的不稳定结果，需要维护者介入 |
| **安全策略落地** | #10610, #10337 | Shell V1 权限策略和 git allowed-roots 修复体现安全优先 |
| **发布工程** | #9381 | Windows 用户打包体验仍需改善 |

---

## 5. Bug 与稳定性

### 按严重程度排列（今日新增/活跃）

| 级别 | Issue | 描述 | 状态/修复 |
|---|---|---|---|
| **S1 - workflow blocked** | [#10066](https://github.com/zeroclaw-labs/zeroclaw/issues/10066) | SOP engine 在记录步骤 output-schema 拒绝前先推进并执行后续步骤 | In-progress，无 fix PR |
| **S1 - workflow blocked** | [#10603](https://github.com/zeroclaw-labs/zeroclaw/issues/10603) | OpenCode provider 从不发送 `x-opencode-session` header，破坏 Go 模型并存在账号标记风险 | In-progress，无 fix PR |
| **S1 - workflow blocked** | [#10324](https://github.com/zeroclaw-labs/zeroclaw/issues/10324) | cron 手动触发和 run-history 读取在 agent rename 后存在 check-then-act 竞态 | Closed (#10324)，需确认修复 |
| **S2 - degraded behavior** | [#10734](https://github.com/zeroclaw-labs/zeroclaw/issues/10734) | `RpcDispatcher::process_line` 在 Windows 上接近 2MB 栈守卫上限，触发 `0xc00000fd` | In-progress |
| **S2 - degraded behavior** | [#10788](https://github.com/zeroclaw-labs/zeroclaw/issues/10788) | Failed Code/ACP turn 丢弃已接受的 prompt 和已完成的 tool exchanges | In-progress |
| **S2 - degraded behavior** | [#10793](https://github.com/zeroclaw-labs/zeroclaw/issues/10793) | Windows Advisory 作业出现 3 个与被测代码无关的测试失败 | In-progress |
| **S2 - degraded behavior** | [#10802](https://github.com/zeroclaw-labs/zeroclaw/issues/10802) | `session/list-acp` 的 `message_count` 与 `turn_end` 统计不一致 | In-progress |
| **S2 - degraded behavior** | [#10635](https://github.com/zeroclaw-labs/zeroclaw/issues/10635) | Runtime profile cost limit 不反映全局 daily budget，导致超限 | Accepted |
| **S2 - degraded behavior** | [#10787](https://github.com/zeroclaw-labs/zeroclaw/issues/10787) | Single-candidate stream recovery 忽略 provider_retries，529 仅一次重试无退避 | In-progress |
| **S2 - degraded behavior** | [#10736](https://github.com/zeroclaw-labs/zeroclaw/issues/10736) | Pre-output stream failure 跳过已声明的 non-streaming fallback | In-progress |
| **S3 - minor** | [#10779](https://github.com/zeroclaw-labs/zeroclaw/issues/10779) | OpenCode FreeUsageLimitError (429) 被子秒级退避重试而非快速失败 | In-progress |
| **S3 - minor** | [#10828](https://github.com/zeroclaw-labs/zeroclaw/issues/10828) | `openai-codex --device-code` 使用已废弃的 OpenAI 设备认证端点，返回 404 | Accepted |
| **S2 - degraded** | [#10821](https://github.com/zeroclaw-labs/zeroclaw/issues/10821) | `zeroclaw service logs` 显示过期 stderr 为当前日志 | Accepted |

### 稳定性评估

- **Provider 层问题集中爆发**：#10736、#10787、#10779、#10603 均与 provider 可靠性/通信相关，且多存在 retry/backoff 逻辑缺陷。
- **Windows 平台稳定性**：#10734、#10793 反映 Windows CI 存在环境相关问题。
- **Runtime 成本追踪缺陷**：#10635、#10645 揭示 profile 级 cost limit 与全局 budget 不一致。

---

## 6. 功能请求与路线图信号

### 高优先级功能请求

| Issue | 描述 | 路线图信号 |
|---|---|---|
| [#10822](https://github.com/zeroclaw-labs/zeroclaw/issues/10822) | `config/set-many` — 原子批量配置 RPC | **高可能性纳入 v0.8.6**，已有明确设计，且与 Config 校验修复 (#10837) 形成互补 |
| [#10826](https://github.com/zeroclaw-labs/zeroclaw/issues/10826) | ZeroCode session root 选择显式化和恢复保留 | **高可能性纳入 v0.8.6**，是 #10609/#10565 的延续 |
| [#10812](https://github.com/zeroclaw-labs/zeroclaw/issues/10812) | WhatsApp DocumentMessage 缩略图填充 | 渠道功能增强，与 #10838 provider 降级 PR 有协同 |
| [#10360](https://github.com/zeroclaw-labs/zeroclaw/issues/10360) | RFC: opt-in household edge mesh with pull workers | **长期信号**：分布式计算方向，反映社区对多设备协同需求 |
| [#9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535) | Runtime context compaction 锚定模型窗口比率 | PR 已打开 1+ 月，与上下文管理相关，可能纳入下一版本 |
| [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) | Provider profile 支持多模型 | PR 打开近 1 月，多模型配置是重要能力 |

### 路线图判断

- **v0.8.6 可能重点**：Config API 统一（#10822、#10837）、ZeroCode 会话管理（#10826）、Provider 可靠性增强。
- **中长期方向**：Household edge mesh（#10360）、Shell V1 权限策略（#10610 PR）、Provider 多模型支持（#9809 PR）。

---

## 7. 用户反馈摘要

### 用户痛点

| 痛点 | 来源 | 描述 |
|---|---|---|
| **RPC config/set 跳过校验** | #10320, #10837 | CLI 和 RPC `config/set` 允许持久化超出范围的值（exit 0），与 `Config::validate()` 不一致。#10837 已关闭，但修复有待合入。 |
| **Windows 开发者体验** | #9381, #10734, #10793 | in-crate symlinks 破坏无 developer mode 的 Windows checkout；CI 在 Windows 上出现与代码无关的测试失败和栈溢出。 |
| **Provider 通信缺陷** | #10603 | OpenCode provider 不发送 `x-opencode-session` header，Go 模型失效且存在账号标记风险。 |
| **成本追踪不一致** | #10635 | Runtime profile 可声明 `max_cost_per_day_cents = 4294967295`（无上限），但全局 daily budget 仍在 $10 拒绝 agent turns。 |
| **消息计数不一致** | #10802 | `session/list-acp` 与 `turn_end` 对同一会话的 `message_count` 统计口径不同。 |
| **429 误重试** | #10779 | OpenCode quota exhausted (429) 被子秒级重试而非快速失败，浪费资源。 |
| **Service 日志误导** | #10821 | 服务安装的 daemon 无 tracing 输出到 stderr，但 `zeroclaw service logs` 将 stderr 文件呈现为当前日志。 |
| **OpenAI 设备认证端点失效** | #10828 | `openai-codex --device-code` 返回 404，认证流程中断。 |

### 满意/积极反馈

- 社区对 RFC 流程规范化（#8692 tracker、#10549 投票简化）表现出积极参与和建设性讨论。
- 安全策略实现（#10610）和 ADR 文档化（#10831）获得认可。

---

## 8. 待处理积压

### 长期未响应的重要 Issues（超过 30 天）

| Issue | 创建时间 | 状态 | 天数 | 风险 | 说明 |
|---|---|---|---|---|---|
| [#9459](https://github.com/zeroclaw-labs/zeroclaw/issues/9459) | 2026-07-27 | Open | ~79 天 | 高 | v0.8.5 stabilization line tracker，Intake 已冻结，但里程碑截止为 2026-08-30，**已逾期** |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | 2026-07-04 | Open | ~71 天 | 中 | Maintainer decision queue tracker，15 条评论，是社区讨论最活跃的 issue |
| [#9381](https://github.com/zeroclaw-labs/zeroclaw/issues/9381) | 2026-07-26 | Open | ~50 天 | 高 | crates.io 发布遗留问题，含真实用户影响 |
| [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) | 2026-07-17 | Open (Blocked) | ~59 天 | 高 | Hailo-Ollama native support PR，状态为 **Blocked** |
| [#8863](https://github.com/zeroclaw-labs/zeroclaw/pull/8863) | 2026-07-08 | Open | ~67 天 | 高 | Channel plugin WebSocket 支持，XL 尺寸 |
| [#8965](https://github.com/zeroclaw-labs/zeroclaw/pull/8965) | 20

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*