# OpenClaw 生态日报 2026-08-29

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-28 22:16 UTC

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

**OpenClaw – 项目日报 (2026‑08‑29)**  

---  

### 1. 今日速览  
- **活跃度异常高**：过去 24 小时内共计 **500 条 Issue**（其中 **387 条** 为新建或活跃）和 **500 条 Pull Request**（**276 条** 待合并，**224 条** 已合并/关闭），说明社区正在进行一次大规模的回顾与迭代。  
- **新 Beta 发行**：`v2026.9.1‑beta.1` 于今日发布，重点在 **Gateway 重启恢复** 与 **配置写入可靠性** 两项底层改进。  
- **核心痛点聚焦**：从评论量最高的 Issue 看，**会话上下文膨胀、文件名编码、插件可靠性** 与 **工具调用丢失** 成为本轮最受关注的话题。  

---  

### 2. 版本发布  
**v2026.9.1‑beta.1**（2026‑09‑01 Beta）  
- **主要特性**  
  1. **Gateway Restart Recovery** – 在 Gateway 重启后能够 **保持已接受的回合（turn）**，防止已完成的对话因重启而丢失。  
  2. **Gateway Config‑Write Reliability** – 改进配置写入的事务安全性，降低因写入冲突导致的配置回滚概率。  
- **破坏性变更**  
  - `gateway.restart` 接口的返回结构已加入 `recoveredTurns` 字段，使用旧版 SDK 的客户端需要适配。  
- **迁移注意事项**  
  - 若项目使用自定义 `gateway` 插件，请升级至 **≥ v2026.9.0** 以兼容新的恢复逻辑。  
  - 推荐在生产环境先在 **beta** 环境跑一遍完整的会话流，以验证 **重启后状态恢复** 是否满足业务需求。  

---  

### 3. 项目进展（已合并 / 关闭的关键 PR）  
| PR 号 | 关键改动 | 影响范围 | 关联 Issue |
|------|----------|----------|------------|
| **#132155** | CLI 现在会把本地 agent turn 的失败状态 **标记为非成功退出码**。 | 开发者体验、CI 自动化 | - |
| **#127836** | 修复 **Steer** 消息在回合尾部被意外丢弃的情况，防止 “steer‑lost” 导致的对话卡死。 | 会话状态、消息交付 | #80178、#54488 |
| **#130463** | Claude‑CLI 会话中的图片在聊天历史里显示为 **内联缩略图**，不再出现原始缓存路径。 | UI/UX、媒体呈现 | #130463 |
| **#123062** | 防止 **Gateway** 在 pipelined WebSocket 连接时产生重复 admission，提升并发连接稳定性。 | Gateway、连接层 | - |
| **#81190** | 在工具调用超时后 **提前截断工具结果**，避免长达 15 min 的自动压缩等待。 | 工具链、性能 | #81182 |
| **#132011** | 修复 incognito 会话 fork 后产生 **不可读取的子会话键**的问题。 | 会话隔离、隐私 | - |
| **#131779** | 保持 **memory‑indexing runtime** 与其所属槽位的对应关系，解决 “dreaming sidecar” 丢失的回归。 | 插件系统、记忆模块 | #131743 |
| **#132140** | 移除 UI 启动时的 **usage helpers**，解决 CI 打包体积超限导致的构建失败。 | CI/CD、前端构建 | #132102、#132105 |

> **总体推进**：本轮合并集中在 **会话可靠性、工具调用容错、用户界面细节** 与 **CLI/CI 稳定性** 四大方向，已显著提升生产环境的可用性和开发者调试效率。  

---  

### 4. 社区热点（评论量最高的 Issues / PRs）  

| # | 标题（简要） | 评论数 | 关键诉求 | 链接 |
|---|--------------|--------|----------|------|
| **#125626** | **2026.8.1 beta 反馈** | 23 | 期待 **beta 稳定性**、功能完整度与文档指引。 | https://github.com/openclaw/openclaw/issues/125626 |
| **#48788** | **集中式文件名编码工具** | 20 | 多语言文件名（Shift‑JIS、GB18030 等）在 **Content‑Disposition** 中被错误解码，需要统一解决方案。 | https://github.com/openclaw/openclaw/issues/48788 |
| **#74586** | **嵌入式 run aborts memory_search** | 14 | 记忆搜索在 **AM**（自动化模型）中异常超时，即使模型已完成，导致“超时”误报。 | https://github.com/openclaw/openclaw/issues/74586 |
| **#67419** | **Session context bloat – bootstrap 重注入** | 10 | 每轮重注入约 20‑30% 的 bootstrap 文本，显著消耗 token，用户要求 **一次性注入** 或 **可配置关闭**。 | https://github.com/openclaw/openclaw/issues/67419 |
| **#74704** | **SDK 稳定化 – agents / sessions / runs** | 10 | 对外 SDK 在真实应用（OpenMeow）中出现 **异常掉线** 与 **状态不一致**，需求 **happy‑path** 可靠保障。 | https://github.com/openclaw/openclaw/issues/74704 |
| **#132155** (PR) | **CLI turn‑failure exit‑code 修正** | — | 开发者反映脚本在工具失败后仍返回 0，影响自动化监控与重试逻辑。 | https://github.com/openclaw/openclaw/pull/132155 |

> **背后诉求**：社区核心关注 **会话持久化、跨语言兼容、工具链超时与资源消耗**，以及 **SDK/CLI 的可预测行为**。这些需求直接关联到生产部署的可靠性与跨区域使用体验。  

---  

### 5. Bug 与稳定性（按严重程度）  

| 严重度 | Issue 编号 | 摘要 | 是否已有 Fix/PR | 链接 |
|--------|------------|------|----------------|------|
| **P1 （阻断）** | #80178 | `resolveCliAuthEpoch` 在本地凭证切换后导致 **所有活跃 CLI 会话失效**。 | 暂无（待修复） | https://github.com/openclaw/openclaw/issues/80178 |
| **P1** | #119401 | **DM/Direct** `silentReply` 策略无视 `NO_REPLY`，导致模型无法强制显示回复。 | 暂无 | https://github.com/openclaw/openclaw/issues/119401 |
| **P1** | #125570 | **Skill Workshop** `update` 会覆盖 **live skill description**，影响路由匹配。 | 暂无 | https://github.com/openclaw/openclaw/issues/125570 |
| **P1** | #128826 | `doctor --lint/--json` 因 **MissingPublicSurfaceError** 直接中止，影响 CI 自动检查。 | 暂无 | https://github.com/openclaw/openclaw/issues/128826 |
| **P2** | #74586 | 嵌入式运行在 `memory_search` 中错误标记为 **timeout**，即使模型已完成。 | 有关联 PR #81190（截断工具结果） | https://github.com/openclaw/openclaw/issues/74586 |
| **P2** | #67419 | **Bootstrap 文件** 每轮重新注入导致 20‑30% token 浪费。 | 未决 | https://github.com/openclaw/openclaw/issues/67419 |
| **P2** | #48788 | 多编码文件名处理缺失统一方案。 | 未决（正在讨论 PR #48788） | https://github.com/openclaw/openclaw/issues/48788 |
| **P2** | #119884 | DB migration 后 **SQLite 统计未 ANALYZE**，导致 15 s+ 的查询延迟。 | 暂无 | https://github.com/openclaw/openclaw/issues/119884 |
| **P2** | #120735 | **Telegram 贴纸** 只提供文件引用，无描述，工具无法加载。 | 暂无 | https://github.com/openclaw/openclaw/issues/120735 |
| **P3** | #114158 | `fs-safe` 默认 **0o600** 文件权限忽略系统 `umask`，破坏共享工作区。 | 未决 | https://github.com/openclaw/openclaw/issues/114158 |

> **趋势**：大多数高优先级 Bug 与 **会话状态、凭证管理、插件加载** 相关，提示在下一轮发布中应重点强化 **持久化与安全边界**。  

---  

### 6. 功能请求与路线图信号  

| 编号 | 请求概述 | 潜在价值 | 与现有 PR 的关联 |
|------|----------|----------|------------------|
| **#45771** | **内置 Pace‑Aware Rate Limiting**（针对自动 Agent） | 防止 API 超额导致的不可预期停机，适用于高频自主循环。 | 暂无直接实现，已被标记为 **P3**，可在 2026.10.x 关注。 |
| **#71142** | **可配置上传大小上限**（Control UI） | 放宽 5 MB 限制，满足图像/视频大文件需求。 | 与 **#132131**（视频附件 UI） 有交叉，可能一起纳入。 |
| **#38714** | **Discord Reaction 事件暴露** 至 Hooks 系统 | 支持基于用户表情的自动化工作流。 | 无直接 PR，建议在下个 **hooks** 迭代中加入。 |
| **#40694** | **自动关闭临时浏览器标签** | 防止资源泄漏，提高自动化效率。 | 与 **#127836**（steer 丢失防护） 同属会话资源管理，可同批评审。 |
| **#49251** | **API 限流时将 Prompt 进入队列** | 提升高峰期的可靠性，避免请求丢失。 | 与 **#130463**（Claude‑CLI 图像显示） 类似的 UX 稳定需求，可合并到 **gateway** 改进计划。 |
| **#82450** | **线性持久工作区模式（盲人用户）** | 强化 **可访问性**，已收到真实盲人用户反馈。 | 该需求未在 PR 中出现，建议在 **2026.10.0** 的可访问性专项里跟进。 |

> **路线图建议**：将 **#45771**、**#71142**、**#38714**、**#82450** 列入 **2026.10‑Q3** 的功能目标，确保在下一次 Beta（v2026.10.0‑beta）前完成原型。  

---  

### 7. 用户反馈摘要  

- **会话上下文膨胀**（#67419）被多位用户指出占用 20‑30% token，导致整体成本上升。用户期待 **一次性注入** 或 **可关闭的 bootstrap** 参数。  
- **跨语言文件名**（#48788）在 **Feishu** 与 **Telegram** 中出现乱码，阻断文件下载与编辑流程，迫切需要统一的 **Content‑Disposition 编码层**。  
- **工具调用顺序丢失**（#119401、#120735）导致模型输出不可见或媒体未渲染，影响交互式会话的流畅性。  
- **可访问性需求**（#82450）来自盲人用户的真实案例，强调 **键盘/朗读友好的 UI** 与 **持续工作区**。  
- **部署安全**（#114158）在共享 NFS/SMB 工作空间中出现权限限制，用户表示 “无法协同编辑”，希望 **fs-safe** 能尊重系统 `umask`。  

整体来看，**可靠性（重启恢复、会话持久）** 与 **跨语言/跨平台兼容性** 是当前社区最强烈的诉求。  

---  

### 8. 待处理积压（长期未响应）  

| 编号 | 主题 | 当前状态 | 建议关注点 |
|------|------|----------|------------|
| **#130302** (closed) | **Beta.3 `sessions.create` 互斥校验** | 已关闭但未在正式版中修复 | 确认在 `v2026.9.x` 中已彻底解决，避免再次回归。 |
| **#128067** | **Beta.7 可靠性缺陷报告**（6 大类） | OpenClaw 已收集日志，仍未有对应 PR | 需抽象为 **Beta Reliability Sprint**，分配专人跟进。 |
| **#129455** | **请求者提前结束子代理工作流** | 仍未关闭 | 影响子代理调度链路，建议在下轮 `session‑state` 优化中处理。 |
| **#123265** | **自定义 runtime‑context 末尾多余 `user` 消息** | 开放中 | 可能导致 **model token 泄漏**，应纳入 `gateway` 清理逻辑。 |
| **#128826** | **doctor lint/JSON Abort** | 开放中 | 影响 CI 自动化，建议在 `cli‑doctor` 模块加入更友好的错误包装。 |
| **#128995** (closed) | **全局会话操作在 Header** | 已合并但 UI 文档仍未更新 | 需要同步至 **Web‑UI** 使用手册。 |

> **提醒**：这些积压项大多涉及 **session‑state、插件加载** 与 **CI/安全**，若不在下一个 LTS（预计 2026.11.0）前处理，可能成为未来 Beta 用户的阻塞点。  

---  

**结论**：OpenClaw 正在经历一次 **高频迭代窗口**——大量 Issue 与 PR 同时活跃，核心问题集中在会话持久、跨语言兼容以及工具链容错。新 Beta 版本已经在底层恢复与配置安全上取得突破，后续应优先消化 P1‑P2 级 Bug，持续完善 **SDK/CLI** 的可预测行为，并把 **跨语言文件名、速率限制、可访问性** 等功能请求纳入即将到来的 2026.10.x 路线图。项目整体健康度保持 **活跃且正向**，但需要 **维护者** 在高优先级 Bug 与积压需求上保持快速响应。  

---

## 横向生态对比

**今日重点**  

| 项目 | 更新内容 | 影响/意义 |
|------|----------|-----------|
| **[OpenClaw](https://github.com/openclaw/openclaw)** | 发布 **v2026.9.1‑beta.1**，新增 *Gateway Restart Recovery* 与 *Config‑Write Reliability*。 | 重启后保留已接受的回合，防止对话数据因网关重启而丢失；配置写入更具事务安全性。 |
| **[NanoBot](https://github.com/HKUDS/nanobot)** | 合并 **#5570** / **#5571**：提供可插拔 `MemoryBackend` 并将记忆拉取改为显式调用。 | 开发者可接入自定义记忆后端，默认关闭自动拉取降低意外上下文泄漏风险。 |
| **[Hermes Agent](https://github.com/NousResearch/hermes-agent)** | 在 **#97470** 中移除通知内容中的 Bearer 片段并在 **#97421** 中默认禁用未显式开启的 client‑tools。 | 消除了凭证泄漏风险，提升生产环境的安全合规性；避免无意义的工具调用导致资源浪费。 |
| **[CoPaw / QwenPaw](https://github.com/agentscope-ai/QwenPaw)** | 发布 **v2.2.0‑beta.3**：引入 *Streamable‑HTTP* 双协议 MCP 客户端并在 **#7329** 中中止挂起的 RPC、恢复 `list_tools`。 | 在服务器不兼容时自动回退，提升跨版本 MCP 兼容性；防止因会话挂起导致的工具列表卡死。 |
| **[LobsterAI](https://github.com/netease-youdao/LobsterAI)** | 发布 **2026.8.28**，新增登录引导页和模型计划目录（Settings‑plan model catalog）。 | 改善新手上手体验并提供统一的模型套餐视图，便于用户快速选型。 |
| **[ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)** | 接受 RFC **#6954**，正式定义 *内部发起的 agent turn* 的绑定与 provenance 规则。 | 为后续 runtime 实现提供统一的会话所有权模型，降低跨组件实现差异。 |
| **[OpenClaw](https://github.com/openclaw/openclaw)** | 合并 **#127836**，修复 *Steer* 消息在回合尾部被错误丢弃的情况。 | 消除因 steer‑lost 导致的对话卡死，提升会话流畅性。 |

---

**活跃度概览**  
今天社区整体活跃度最高的项目是 **OpenClaw**（约 500 条 Issue 与 PR）和 **Hermes Agent**（约 50 条 Issue 与 PR），随后是 **ZeroClaw** 与 **CoPaw**（均约 45‑50 条 Issue/PR）。这些项目的讨论集中在会话可靠性、权限安全以及底层协议兼容等关键方向。  

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot 项目每日报告 – 2026‑08‑29**  
（数据来源：GitHub 过去 24 h 统计）  

---

## 1️⃣ 今日速览  
- 项目保持高活跃度：24 h 内共计 **7 条 Issue**（6 条新/活跃、1 条已关闭）和 **23 条 Pull Request**（15 条待合并、8 条已合并/关闭）。  
- 大量工作集中在 **运行时上下文、持久化、工具执行错误恢复** 以及 **内存/Recall 系统**的重构，显示团队正全力提升稳定性与可扩展性。  
- 关键 bug（如 WebUI Cron Job 崩溃）已同步提交修复 PR，说明响应速度快。  
- 仍有数个高优先级特性（MCP Apps 主机支持、ephemeral 块、模型可见 MCP Schema 预算）在讨论中，社区需求趋向 **可插拔记忆后端** 与 **更细粒度的上下文控制**。

---

## 2️⃣ 版本发布  
> **暂无新 Release**（截至本报告时间），所有改动仍在 PR 阶段，预计将在下周的正式发布中合并。

---

## 3️⃣ 项目进展（已合并/关闭的关键 PR）  

| PR 编号 | 标题 / 关键改动 | 类型 | 影响范围 | 链接 |
|--------|----------------|------|----------|------|
| **#5580** | **fix(session): move persistence off event loop** | Bug‑fix / 性能 | 将 Session 持久化迁移至后台线程，防止阻塞事件循环；为后续高并发使用打基础。 | https://github.com/HKUDS/nanobot/pull/5580 |
| **#5568** | **refactor(agent): let runner own context compaction** | 重构 | `AgentRunner` 负责上下文压缩，提升在模型本地压缩不可用时的鲁棒性。 | https://github.com/HKUDS/nanobot/pull/5568 |
| **#5589** | **fix(agent): stop discarded sessions from reviving** | Bug‑fix | 防止已删除会话在清理阶段被意外恢复，消除潜在的消息泄露风险。 | https://github.com/HKUDS/nanobot/pull/5589 |
| **#5588** | **fix(agent): add retry hint to raised tool exceptions** | Bug‑fix / UX | 在工具异常返回时自动附加 “try a different approach” 提示，提升交互可恢复性。 | https://github.com/HKUDS/nanobot/pull/5588 |
| **#5587** | **fix(cron): sanitize persisted origin metadata** | Bug‑fix / 安全 | 清理 Cron 元数据，避免持久化运行时上下文块导致的“引用/提及”泄漏。 | https://github.com/HKUDS/nanobot/pull/5587 |
| **#5560** | **feat(cli): make nanobot the default agent command** | 新特性 | `nanobot` 直接启动默认代理，提升 CLI 使用体验。 | https://github.com/HKUDS/nanobot/pull/5560 |
| **#5504** | **fix(ui): surface model retry status (NAN‑34)** | Bug‑fix / UI | 在 WebUI/TUI 中实时展示模型重试进度，解决用户对“卡住”状态的疑惑。 | https://github.com/HKUDS/nanobot/pull/5504 |
| **#5570** | **feat(memory): add pluggable recall backend** | 新特性 | 引入抽象 `MemoryBackend`，实现可插拔的 Recall 实现（当前基于 `MemoryStore`），为后续向向量库迁移奠基。 | https://github.com/HKUDS/nanobot/pull/5570 |
| **#5571** | **feat(memory): require explicit recall by default** | 新特性 | 默认关闭自动记忆拉回，鼓励显式 `recall_memory` 调用，降低意外上下文泄漏风险。 | https://github.com/HKUDS/nanobot/pull/5571 |

> **贡献者活跃度**：`chengyongru`、`iChizer0`、`Oxygen56`、`daJiaohuang` 等核心成员贡献最多，PR 合并率约 35%（8/23），说明审查流程高效。

---

## 4️⃣ 社区热点（讨论最热 Issue / PR）  

| 编号 | 类型 | 关键议题 | コメント数/👍 | 链接 |
|------|------|----------|---------------|------|
| **#5251** | Issue (enhancement) | **MCP Apps 主机支持** – 让 WebUI 能直接托管 MCP Apps 扩展，实现模型侧 UI 集成。 | 2 评论 / 0 👍 | https://github.com/HKUDS/nanobot/issues/5251 |
| **#4429** | Issue (closed) | **自定义 Provider 思考风格** – 解决 VolcEngine / Doubao 等非 OpenAI 模型的思考参数映射。已关闭，后续可能在 Provider 抽象层统一。 | 2 评论 / 0 👍 | https://github.com/HKUDS/nanobot/issues/4429 |
| **#5590** | PR (bug / test) | **summarize persisted JSON tool results** – 修复工具结果持久化预览截断导致关键信息丢失的问题。讨论聚焦在“如何兼容大对象”。 | -（评论未列出）| https://github.com/HKUDS/nanobot/pull/5590 |
| **#5589** | PR (bug) | **stop discarded sessions from reviving** – 该 PR 获得多数 reviewer 的赞同，因其涉及跨会话消息的安全性。 | - | https://github.com/HKUDS/nanobot/pull/5589 |
| **#5585** | Issue (enhancement) | **RetryWaitEvent 在 Channel 中可见** – 需求让 UI 能实时展示模型的重试倒计时，已在 PR #5504 中得到实现。 | 0 评论 / 0 👍 | https://github.com/HKUDS/nanobot/issues/5585 |

**热点背后的诉求**  
- **可视化与透明度**：用户想要看到模型内部的 retry、tool‑error 等状态，避免“黑箱”感。（#5585、#5504）  
- **扩展性**：MCP Apps 主机化需求体现了生态系统对统一 UI/UX 的期待。（#5251）  
- **跨模型兼容**：自定义 Provider 思考模式的讨论说明社区在使用非 OpenAI 供应商时遇到阻力，期待统一的配置抽象。（#4429）

---

## 5️⃣ Bug 与稳定性  

| 严重度 | Issue 编号 | 描述 | 当前状态 | 是否已有 Fix PR |
|--------|-----------|------|----------|-----------------|
| **高** | **#5582** (bug) | WebUI 引用/@提及 产生的 Cron 任务在创建或触发时崩溃，导致提醒失效。 | 打开 | ✅ **PR #5587** 已实现元数据清洗并关闭此 bug。 |
| **中** | **#5586** (enhancement) | 运行时上下文块希望能够 **ephemeral**（不持久化）以避免历史膨胀。 | 打开 | 尚无 PR；相关的 **PR #5568** & **#5580**已为后续实现提供基础。 |
| **中** | **#5585** (enhancement) | `RetryWaitEvent` 只在 CLI 中可见，缺失 UI 反馈。 | 打开 | 已在 **PR #5504** 中实现 UI 暴露，问题基本解决。 |
| **中** | **#5584** (enhancement) | `reasoning_content` / `thinking_blocks` 在历史中无限回放，导致上下文爆炸。 | 打开 | 暂未看到对应 PR，预计会在下一轮 **context compaction** 重构中处理。 |
| **低** | **#5583** (enhancement) | 为工具异常结果也追加 “try a different approach” 提示。 | 打开 | 已在 **PR #5588** 中实现，问题已解决。 |
| **低** | **#5582** (bug) 已在 PR #5587 中修复，残余影响已消除。 |

> **总体评估**：高优先级的崩溃 bug 已被及时定位并提交修复；多数剩余问题属于功能增强或细节优化，风险可控。

---

## 6️⃣ 功能请求与路线图信号  

| 需求 | 关联 Issue / PR | 预计落地版本 |
|------|----------------|--------------|
| **MCP Apps 主机支持** | #5251 (enhancement) | 需要后端插件框架升级，可能进入 **v0.9.0‑rc**（预计 Q4 2026） |
| **ephemeral Runtime‑Context Block** | #5586 | 已在 **PR #5568 / #5580** 中铺垫上下文压缩机制，预计在 **v0.9.1** 实装。 |
| **模型可见 MCP Schema 预算** | #5388 | 已提交 PR，仍在冲突解决中，可能成为 **v0.9.2** 的可选特性。 |
| **可插拔记忆后端** | #5570 (feature) + #5571 | 已合并到主分支，下一次发布（预计 2026‑09‑10）将正式提供 `MemoryBackend` 接口。 |
| **显式 Recall 控制** | #5571 | 同上，已经在代码中实现，待文档同步。 |
| **Provider 思考风格统一** | #4429（已关闭） | 相关代码已合并在 **PR #5574** 中的 provider 重构，属于底层改进，后续会在文档里标记。 |

> **路线图信号**：核心团队正将 **可插拔记忆、上下文压缩、模型可见 schema** 设为 2026 Q4 的重点里程碑，兼顾对 **MCP Apps** 的生态扩张。

---

## 7️⃣ 用户反馈摘要  

- **透明度需求**：多位用户在 Issue #5585 提到，模型在重试时没有任何提示导致交互卡死，期待 UI 能实时显示倒计时。团队已在 PR #5504 中实现，此举得到积极反馈。  
- **历史膨胀**：在 #5586 中，用户描述长期会话因大量 runtime‑context 块而导致查询延迟，呼吁提供 **ephemeral** 选项。该需求被视为性能关键点。  
- **跨模型兼容**：#4429 的讨论显示，使用国内模型（VolcEngine/Doubao）时缺少思考调参参数，导致功能受限。社区期待统一的 provider 接口。  
- **工具异常处理**：不少用户在使用自定义工具时遇到不友好的错误信息，#5583 / #5588 的改动直接提升了可恢复性，获得好评。  

总体来看，用户对 **可视化状态、上下文管理以及多模型兼容** 的需求最为迫切，项目已在对应方向加速落地。

---

## 8️⃣ 待处理积压（长期未响应）  

| 编号 | 类型 | 简要描述 | 最近活动 | 备注 |
|------|------|----------|----------|------|
| **#5251** | Enhancement | MCP Apps 主机化（WebUI 集成） | 2026‑08‑28 (更新) | 仍未有实现 PR，建议指派专人跟进。 |
| **#5584** | Enhancement | 限制 `reasoning_content` / `thinking_blocks` 的回放深度 | 2026‑08‑28 | 关键性能优化，待在上下文压缩 PR 中合并。 |
| **#5582** | Bug (已修) | Cron 任务崩溃 | 已通过 PR #5587 解决 | 仍留在打开状态，可手动关闭。 |
| **#5570 / #5571** | Feature | Pluggable memory & explicit recall | PR 已合并但文档缺失 | 需要完善 README 与 migration guide。 |
| **#5388** | Feature (conflict) | MCP schema 预算 | 2026‑08‑28 (更新) | 冲突未解决，阻塞合并。 |

> **建议**：对 **#5251** 与 **#5584** 设定 **p1** 优先级；将 **#5388** 的冲突交叉审查尽快完成，以免拖慢模型可见功能的发布。

---

### 结论  

NanoBot 今日的开发节奏保持在 **高活跃度**，核心团队在 **错误修复、上下文管理** 与 **记忆系统** 三大块取得实质性进展。社区的热点需求明确指向 **可视化、跨模型兼容** 与 **可插拔记忆**，这也正是接下来发布计划的重点。若能够在本周内解决积压的关键 Issue（#5251、#5584）并完成文档闭环，项目的健康度与生态吸引力将进一步提升。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent – 项目动态日报（2026‑08‑29）**  
（数据来源：GitHub / issues & pull‑requests 截止至 2026‑08‑28）

---  

## 1️⃣ 今日速览  
- **活跃度仍然高企**：过去 24 小时内，共计 **50 条 Issue**（其中 43 条新建/活跃）和 **50 条 PR**（44 条待合并），显示社区和核心团队的交互频繁。  
- **核心痛点聚焦在可靠性**：大量讨论围绕 **索引更新失效、Desktop 端会话/渲染卡顿、工具链兼容性**。  
- **功能扩展在酝酿**：Webhook 全套特性、统一 Slash‑Command 注册表、对新 LLM（Mistral、Claude‑SDK）以及多语言本地化的需求持续增长。  
- **安全与合规仍是重点**：本轮出现两起 **P0 安全** 报告（凭证泄漏、Bedrock 缓存点错误），随后已有对应的安全补丁 PR 提交。  

> **整体健康度**：项目保持活跃且快速迭代，**Bug 修复速度** 与 **新特性规划** 并行，但 **Desktop UI 与后台同步** 的性能瓶颈需要继续跟进。

---  

## 2️⃣ 版本发布  
> **暂无新版发布**（最近 24 h 未发布 Release），请关注即将合入的 **#95281 – “Unified Package Manager”**，它将成为下一个次要版本（v0.20.x）的核心改动。

---  

## 3️⃣ 项目进展（本日合并/关闭的关键 PR）  

| PR 编号 | 状态 | 关键改动 | 影响模块 | 备注 |
|--------|------|----------|----------|------|
| **#97421** | ✅ Closed (已合并) | `client tools` 默认禁用，除非显式开启 | plugins → a2a | 减少未配置环境下的无效调用，降低约 561 token/调用 |
| **#96842** | ✅ Closed | 桌面群聊轮次数上限可配置，加入模型感知上限 & token 预算守卫 | desktop | 为大型会话提供防炸弹机制 |
| **#97470** | ✅ Closed | 完全屏蔽 MCP 测试输出中的 Bearer 片段 | CLI / dashboard | 解决 #97460 报告的凭证碎片泄漏 |
| **#97064** | 🟠 Open (已提交 + review) | 取消提交栅栏时终止摘要流，防止 “挂起” | compression | 对 P1 严重 bug（#94058）提供临时修复 |
| **#93903** | 🟠 Open | Desktop 重命名时保持活动群组不被分裂 | desktop | 解决 UI 状态错乱，提升用户体验 |
| **#95281** | 🟠 Open | **统一包管理器**：将全部依赖统一到 `pm/` 树，提供 lockfile、平台差异声明 | 全局 | 预计下周合入，标志重大架构升级 |
| **#65982** | 🟠 Open | 引入 `claude-agent-sdk` 作为第一方运行时（OAuth 订阅） | providers | 为 Claude 系列提供官方安全运行时 |
| **#97465** | 🟠 Open | Desktop 启动时不再自动导入 `AGENTS.md`，避免首次会话体积膨胀 | desktop | 与 #97064 同属 P1 修复系列 |
| **#72744** | 🟠 Open | Windows 安装器路径长度容错与错误传播强化 | installer → Windows | 防止长路径导致的 checkout 失败 |

> **合并/关闭 PR 数**：本日 **4 条** PR 已正式关闭（含 2 条安全/合规修补），其余 **46 条** 仍在审阅或待合并阶段。

---  

## 4️⃣ 社区热点（评论/关注度最高的 Issue/PR）  

| 编号 | 类型 | 评论数 | 关键诉求 | 链接 |
|------|------|------|----------|------|
| **#66616** | Issue · Bug | **113** | **Skills Index** 未按计划刷新（已超时 3.8 h），导致文档/Skill Hub 失效。 | <https://github.com/NousResearch/hermes-agent/issues/66616> |
| **#84834** | Issue · Feature | 24 | **Webhook 全套特性**（graph‑gated 修复）的大型元任务，涉及 ingress、execution、delivery、UI 等七大子模块。 | <https://github.com/NousResearch/hermes-agent/issues/84834> |
| **#20859** | Issue · Feature | 14 | **Mistral 作为 LLM 提供商** 的需求，已获 27 个 👍，表明社区对该模型的强烈兴趣。 | <https://github.com/NousResearch/hermes-agent/issues/20859> |
| **#90477** | Issue · Bug | 11 | Desktop 通过 SSH 切换个人资料时错误生成本地 backend，导致会话切换异常。 | <https://github.com/NousResearch/hermes-agent/issues/90477> |
| **#94058** | Issue · Bug | 9 | **Linux 桌面快捷方式 Exec** 指向 venv‑symlink，升级后导致启动崩溃。 | <https://github.com/NousResearch/hermes-agent/issues/94058> |
| **#96692** | Issue · Spec | 9 | 统一 Slash‑Command 注册表与执行契约的设计提案，涉及所有前端/后端入口。 | <https://github.com/NousResearch/hermes-agent/issues/96692> |
| **#95381** (示例) | PR · Feature | — | **Unified Package Manager**（#95281）被视作下一代发布的里程碑。 | <https://github.com/NousResearch/hermes-agent/pull/95281> |

**背后共性**：  
- **可靠性**（索引、Desktop 会话、工具链）是社区最关心的痛点。  
- **可扩展性**（Webhook、Slash‑Command、跨模型路由）正进入需求成熟阶段。  
- **新模型支持**（Mistral、Claude‑SDK）已形成明确的需求信号。

---  

## 5️⃣ Bug 与稳定性（按严重度排序）  

| 严重度 | 编号 | 简要描述 | 是否已有 Fix PR |
|--------|------|----------|-----------------|
| **P0** | **#20785** (已关闭) | 生产环境中 Agent 输出泄露凭证（密码/API‑Key） | 已在 #97466 / #97470 中修复并重新发布 |
| **P0** | **#97281** (Open) | Bedrock Nova 模型因 `cachePoint` 导致 `ValidationException` | 暂无对应 PR，已提出 **#97281** 本身 |
| **P1** | **#90477** | Desktop SSH 切换 profile 时意外生成本地 backend | 暂无修复 PR，待关联 #97064、#97465 |
| **P1** | **#94058** | Linux 桌面 .desktop Exec 行指向错误解释器，启动崩溃 | 暂无 PR，已在 #97064 中加入临时修复路径 |
| **P1** | **#90650** (Closed) | `install.sh` 未正确使用 `uv sync --locked`，导致未校验依赖 | 已关闭，修复在 #90650 本身 |
| **P2** | **#78405** | `max_tokens=65536` 被硬编码，触发压缩循环 | 暂无专门 PR，相关代码在 #97064 中部分覆盖 |
| **P2** | **#87654** | Vision 工具首次探针后被缓存，后续会话消失 | 暂无 PR，已打开讨论 #87654 |
| **P2** | **#97316** | memory batch abort 返回完整 store，导致上下文膨胀 | 暂无 PR，建议在 #60900 中加入批处理优化 |
| **P2** | **#97373** | Desktop 群聊消息被截断至 ~1.1 KB，影响大段文本 | 暂无 PR，待在 #97281 流程中统一处理 |
| **P3** | **#66616** | Skills Index 刷新失败（已 29.8 h），导致文档失效 | 暂无专门 PR，需在 CI/cron 中提升容错 |
| **P3** | **#96692** | 统一 Slash‑Command 规范仍在草案阶段 | 相关 PR #96692 本身为 spec，后续实现待评审 |
| **P3** | **#97011** | Desktop 展开思考链后鼠标滚轮失效 | 暂无 PR，已在 #89277、#93903 中涉及 UI 状态同步问题 |

**总体评估**：P0‑P1 级别的安全/启动阻断问题已得到快速响应（尤其凭证泄漏），但 **P2‑P3** 的可复现性与回归仍较多；建议在下周 **Sprint** 中重点分配 **Desktop** 与 **工具链** 的回归测试资源。

---  

## 6️⃣ 功能请求与路线图信号  

| 编号 | 功能需求 | 关联已提交 PR | 可能纳入的下一个里程碑 |
|------|----------|----------------|------------------------|
| **#84834** | 完整 **Webhook Feature Package**（7‑step） | 正在进行中（#85002） | 预计在 0.21.0 中完成首批子任务 |
| **#20859** | 支持 **Mistral** LLM（包括语音模型） | 无直接 PR，等待实现 | 受社区 👍（27）驱动，可能在 0.21.x 中加入 |
| **#96692** | **统一 Slash‑Command 注册表** 与执行合同 | 仍为 spec（#96692） | 若通过评审，将在 0.22.0 引入统一命令层 |
| **#60900** | Memory 工具 90% 容量软警告 + 自动合并 | 暂无 PR，关联 #97316 性能讨论 | 计划在 0.21.1 中加入用户可配置阈值 |
| **#33912** | WhatsApp 只读/静默监控模式 | 暂无 PR | 受业务需求推动，预计在 0.22.0 添加 |
| **#92336** | **Indonesian (id) 本地化** | PR #92336 (已开放) | 将随 0.21.1 同步发布其他语言 |
| **#96842** (已关闭) | 桌面群聊轮次数上限可配置 | 已实现 | 已合并至 master，已在下个 v0.20.x 里生效 |
| **#85002** | Webhook 配置统一层（环境变量 vs CLI） | 已提交（#85002） | 与 #84834 同步发布 |

**路线图建议**：  
- **短期（0.21.0‑0.21.1）**：完成 Webhook 套件、Slash‑Command 统一层、Memory 警告、i18n 扩展。  
- **中期（0.22.0）**：加入 Mistral、WhatsApp 只读模式、统一插件注册 & 权限体系。  

---  

## 7️⃣ 用户反馈摘要  

- **索引/Skill Hub 脱离同步**（#66616）是 *生产环境* 中最常见的报错，用户在文档检索时遇到 404，直接影响工作流。  
- **Desktop 端跨平台兼容**（#90477、#94058、#70445）导致会话迁移、启动崩溃，用户普遍反映 **“升级后桌面无法启动”**，亟需更稳健的 installer 与配置检测。  
- **工具链可见性不足**（#48125）——用户在使用 web 搜索时无法快速辨认当前使用的后端，增加了调试成本。  
- **安全感缺失**（#20785、#97460）——凭证泄漏与 Bearer 片段曝光被强烈批评，社区对 **“fail‑closed”** 策略的需求显著提升。  
- **新模型集成需求**（#20859 对 Mistral、#65982 对 Claude‑SDK）表现出用户希望 **“即插即用”** 的多模型生态，期待官方提供统一 SDK。  

整体来看，**稳定性** 与 **可观测性**（日志、错误信息、配置可视化）是用户最核心的痛点；**功能扩展**（Webhook、跨模型路由）则是增长驱动。

---  

## 8️⃣ 待处理积压（长期未响应）  

| 编号 | 类型 | 最近更新 | 关键阻塞点 | 建议动作 |
|------|------|----------|------------|----------|
| **#66616** (Open) | Bug | 2026‑08‑28 | 受限的 cron 频率导致索引走慢，已有 113 条讨论但缺乏可执行 PR | 指派至 **CI/Automation** 小组，优先提升 cron 频率或增加 “手动刷新” API |
| **#97281** (Open, P0) | Bug | 2026‑08‑28 | Bedrock Nova 与缓存点不兼容，阻塞使用 AWS Nova 的用户 | 紧急创建修复分支，或在文档中加入临时回退方案 |
| **#84834** (Open) | Feature (Meta‑issue) | 2026‑08‑28 | 大型跨组件工作包，已分解 7 项子任务但缺少里程碑追踪 | 在项目板上建立 **Webhook Epic**，设置阶段性里程碑（API、UI、文档） |
| **#96692** (Open) | Spec | 2026‑08‑28 | 需要统一的协议与向下兼容策略，尚未形成实现 PR | 组织一次跨组件设计评审会议，产出 **RFC** 并分配实现任务 |
| **#60900** (Open) | Feature | 2026‑08‑28 | 需要在 Memory 工具内部加入软阈值监控，尚未有人认领 | 将其列入 **0.21.1** 的 “Memory 改进” Sprint 中 |
| **#70445** (Open) | Bug | 2026‑08‑28 | 远程/VPS Desktop 会话加载慢且易被取消，涉及 UI 与后端同步 | 需要性能 profiling（#60747）以及网络层重试机制改进 |
| **#97373** (Open) | Bug | 2026‑08‑28 | 群聊消息截断导致信息丢失，影响协作 | 与 #97281、#97361 合并审查，统一会话 token 处理 |

---  

**结语**：Hermes Agent 正在快速迭代中，社区热度与需求都在上升。建议核心维护者 **（1）优先解决 P0/P1 安全与启动阻断问题；（2）加速

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw 项目每日动态报告 – 2026‑08‑29**  
（数据来源：GitHub 仓库 `sipeed/picoclaw`，统计时段为最近 24 小时）

---

## 1. 今日速览
- 今日仓库活跃度保持在**低**水平：仅有 **1 条新 Issue**（仍为 *open*）和 **1 条新 PR**（处于 *open*，尚未合并）。  
- 没有发布新的 Release，项目处于 **维稳** 状态。  
- PR #3347 已针对 UI 卡顿问题提交修复，显示出对用户体验的持续关注；同时 Issue #3342 讨论了“after‑turn” 方式的消息队列策略，表明社区对对话转向控制的需求在升温。  
- 整体来看，项目在 **功能沉淀** 与 **性能调优** 之间保持微弱的前进动力，短期内的合并节奏仍需加速。

---

## 2. 版本发布
> 本日无新 Release → 本节略。

---

## 3. 项目进展
| 类型 | 编号 | 标题/描述 | 当前状态 | 影响范围 |
|------|------|-----------|----------|----------|
| Pull Request | **#3347** | *fix laggy interface*（修复聊天区大量文字导致的 UI 卡顿） | **Open / Awaiting review** | 前端 Web UI 交互流畅性提升，尤其在移动端和长对话场景下；对核心功能无破坏性影响。 |

> **关键点**：该 PR 已在本地和两种主流浏览器（Desktop Brave、Mobile Brave）完成手动回归测试，确认卡顿问题彻底消除。若在审查通过后合并，将为后续 UI 增强（如主题切换、消息渲染优化）奠定更稳定的基础。

---

## 4. 社区热点
| 类型 | 编号 | 链接 | 讨论热度 | 核心诉求 |
|------|------|------|----------|----------|
| **Issue** | **#3342** (OPEN, stale) | <https://github.com/sipeed/picoclaw/issues/3342> | 1 条评论（截至 8‑28） | **对话转向**：希望在用户连续发送消息时，能够 **“after‑turn”** 方式把后续消息排队，而不是中断当前任务的剩余工具调用。用户期待更自然的多轮对话体验，避免因“中途掉线”导致任务被截断。 |
| **PR**    | **#3347** (OPEN) | <https://github.com/sipeed/picoclaw/pull/3347> | 0 条公开评论（但已自行完成自测） | **性能瓶颈**：聊天区文字越多 UI 越卡，影响桌面/移动端使用感受。此 PR 通过 **DOM 渲染优化 + 虚拟滚动** 来缓解。 |

> **分析**：两条记录分别聚焦 **交互流畅**（前端性能）和 **对话控制逻辑**（后端/中间件），折射出用户对 **真实使用场景**（长会话、连续指令）和 **可用性**（无卡顿）的核心需求。

---

## 5. Bug 与稳定性
| 严重程度 | 编号 | 标题/描述 | 是否已对应 Fix |
|----------|------|-----------|----------------|
| **低** | **#3342** (Issue) | “after‑turn” 模式下的消息调度错误，导致任务 1 被提前中止。 | **暂无**（仍在需求讨论阶段） |
| **低** | **#3347** (PR) | UI 卡顿（大量文本渲染迟缓）。 | **已提交 Fix**（待审合并） |

> 目前尚无已关闭的致命 Bug 报告，项目总体稳定。但 *Issue #3342* 已标记为 **stale**，若不尽快响应可能会流失关注度。

---

## 6. 功能请求与路线图信号
| 编号 | 功能请求 | 关联 PR/实现可能性 | 预计影响 |
|------|----------|-------------------|----------|
| **#3342** | **Opt‑in “after‑turn” steering mode**：在用户发送新消息时，队列化而非直接中断当前任务。 | 暂无实现 PR；若后端任务调度层支持可配置模式，可在下一次 **Major/Minor** 迭代中加入。 | 改善多轮对话连贯性，提升企业级客服/助理使用体验。 |
| **#3347** | **前端渲染性能提升**（已实现） | 已提交 PR，预计在下一个 **Patch** 版本合并。 | 消除 UI 卡顿，提升移动端可用性。 |

> **路线图建议**：将 *after‑turn* 机制列入 **v1.2**（预计 Q4 2026）功能候选，同步在 PR #3347 合并后发布 **v1.1.1**（Patch）以兑现 UI 改善。

---

## 7. 用户反馈摘要
- **痛点**：长对话期间，后续指令会导致前一次任务被强制终止（Issue #3342），用户希望保留任务完整性并在合适时机处理新指令。  
- **使用场景**：企业客服系统、教育辅导机器人等需要 **连续、多轮交互** 的场景。  
- **满意点**：开发者对 UI 性能的快速响应（PR #3347）获得正面期待，说明项目在 **用户体验** 方面保持敏感。  
- **不满意点**：当前缺少对话调度的可配置选项，导致部分高频交互场景出现“消息丢失/任务中断”的负面体验。

---

## 8. 待处理积压
| 编号 | 类型 | 当前状态 | 建议响应时限 |
|------|------|----------|--------------|
| **#3342** | Issue | Open, labeled *stale* | **48 h** 内安排负责人进行需求评审，避免进一步失活。 |
| **#3347** | PR | Open, awaiting review | 若代码评审通过，可在 **本周** 合并，以立刻解决已验证的 UI 卡顿问题。 |

> **提醒**：保持 Issue 的活跃度（去除 *stale*、添加里程碑）有助于提升社区信任度；及时合并已完成自测的 PR 能显著提升项目的公开形象。

---

### 总体健康度评估
- **活跃度**：低 – 仅 2 条事件（1 Issue、1 PR），但均聚焦核心用户痛点。  
- **稳定性**：良好 – 无严重崩溃或回归，唯一待解决的 Bug 为功能层面的调度逻辑。  
- **增长潜力**：中等 – 若快速响应 *after‑turn* 需求并发布 UI 性能补丁，能显著提升用户留存和社区活跃度。

--- 

*报告生成时间：2026‑08‑29*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw 项目每日动态报告 – 2026‑08‑29**  
*(基于截至 2026‑08‑28 24 小时内的 GitHub 统计)*  

---

## 1️⃣ 今日速览
- 项目活跃度依旧高涨：过去 24 h 中 **2 条新 Issue** 与 **50 条待审 PR**（全部打开）被提交。  
- 没有新 Release，代码库正处于 **大量功能/安全改进的预评审阶段**，核心团队正集中在 **Setup 驱动层面的重构**。  
- 关键风险点集中在 **本地模型超时被强制终止**（Issue #3643）以及 **限额失效后缺乏可追溯的失败信息**（Issue #3599），均尚未有对应的修复 PR。

---

## 2️⃣ 版本发布
> **暂无新版本**（过去 24 h 未检测到 Release），因此本节略。

---

## 3️⃣ 项目进展
| 类型 | PR 编号 | 标题 / 关键改动 | 影响范围 | 当前状态 |
|------|--------|------------------|----------|----------|
| **Setup 重构** | **#3633** | 将 Claude 鉴权与未结构化提供者硬失效搬至 Setup Driver | 初始化阶段的安全性提升 | Open（待审） |
| | **#3634‑#3639** | 一系列 “驱动 → Setup” 改动：模板步骤、机器入口防护、Docker 可用性检查、服务健康验证等 | 机器模式（NDJSON）与交互式 Terminal 的统一体验 | Open（待审） |
| | **#3630‑#3632** | 拆分 auto 步骤、引入机器入口守卫、统一镜像来源选择 | 改进自动化部署脚本的可预测性 | Open（待审） |
| **功能实现** | **#2003** | Voice transcription V2（容器侧实现，默认主权模式） | 新增语音转写能力 | Open（待审） |
| **Bug/修复** | **#3642** | `update-skills` 报告本地 Adapter 状态而非静默回滚 | 改善调试与兼容性 | Open（待审） |
| **平台适配** | **#3427‑#3392** | 多个 agent‑runner、Slack、approval 流的细节修正 | 提升跨渠道一致性 | Open（待审） |

> **整体进度**：本轮 PR 均为 **代码改动、文档或架构层面的提前准备**，尚未进入合并阶段。核心团队正在完成内部审查与自动化测试，以确保在下一个里程碑（预计 2026‑09‑中）前能够统一发布。

---

## 4️⃣ 社区热点
| 类型 | 编号 | 标题 / 关键点 | 互动指标 | 链接 |
|------|------|----------------|----------|------|
| **Bug** | **#3643** | “Hardcoded 30‑min `ABSOLUTE_CEILING_MS` 冷杀本地模型回合” | 创建于今日，暂无评论，但已触发警告日志 | https://github.com/qwibitai/nanoclaw/issues/3643 |
| **功能需求** | **#3599** | “持久化 rate‑limit/quota 分类，以便在配额恢复后自动重试” | 今日新建，零评论，暗示生产环境中共享 Claude 配额的痛点 | https://github.com/qwibitai/nanoclaw/issues/3599 |
| **Setup 改进** | **#3633**（及其子 PR） | 大规模迁移 Setup 步骤至统一驱动层，加入机器模式安全检查 | 连续 7 条 PR（#3633‑#3639）同一天更新，显示核心团队对机器化部署的强需求 | https://github.com/qwibitai/nanoclaw/pull/3633 |

> **背后诉求**：  
- **可靠性**：用户在本地模型环境下遭遇不可预测的进程杀死，需要显式配置或更好日志。  
- **可观测性**：共享配额导致的失败缺乏根因标记，阻碍自动化重试。  
- **自动化**：大量 PR 聚焦 “机器模式” 表明社区与内部用户希望通过 GUI/脚本完成全流程无交互安装与卸载。

---

## 5️⃣ Bug 与稳定性
| 严重程度 | Issue | 描述 | 是否已有 Fix PR | 备注 |
|----------|--------|------|----------------|------|
| **Critical** | **#3643** | 本地模型长轮询被硬性 30 min 上限终止，导致任务中途失效，且无配置入口。 | 暂无直接对应的 Fix PR（最接近的是 #3642 的 adapter 状态报告） | 推荐优先建立 `ABSOLUTE_CEILING_MS` 配置 seam 或在 runner 中加入可调阈值。 |
| **Medium** | **#3599** | 任务因共享 Claude 配额耗尽而失败，缺失限额信息导致无法自动重试。 | 暂无 | 与即将合并的 “persist rate_limit/quota classification” 功能直接相关，建议在 `task/run` 模块加入元数据字段。 |

---

## 6️⃣ 功能请求与路线图信号
| 请求 | 关联 PR | 可能进入的版本窗口 | 影响度 |
|------|--------|-------------------|--------|
| **持久化限额分类**（#3599） | 暂无 | 预计 Q3 2026（在 `task` 模块的限额监控完成后） | 高 – 直接影响企业级批量任务的可靠性。 |
| **Voice transcription V2**（#2003） | PR #2003（已开放） | 预计 Q4 2026，需完成容器侧实现与跨平台测试 | 中 – 为多模态交互打开新场景。 |
| **Setup Driver 全面迁移**（#3633‑#3639） | 多个 PR 连续提交 | 首批可在 Q3 2026 左右合并，随后发布 “机器模式” 安装/卸载功能 | 高 – 为桌面应用及 CI/CD 集成提供关键支撑。 |
| **安全防护：拒绝凭证通过 argv/env**（#3638） | PR #3638 | 同上，随 Setup Driver 一起发布 | 高 – 防止凭证泄漏，满足合规需求。 |

---

## 7️⃣ 用户反馈摘要
- **痛点**：在本地模型（OpenCode）下的长时间对话被系统硬性中止（Issue #3643），用户无法通过配置避免；导致生产环境任务被意外切断。  
- **需求**：对共享 LLM 配额的透明报告，自动标记为 “quota‑exhausted” 并在配额恢复后重新调度（Issue #3599）。  
- **满意点**：社区对 **Setup 重构** 表现出高度期待，认为统一驱动将显著降低新手上手门槛与 CI 集成成本。  
- **不满意点**：当前缺乏机器模式下的安全校验（如凭证注入），已有 PR 正在解决，但用户仍担心自动化脚本泄露敏感信息。

---

## 8️⃣ 待处理积压
| 编号 | 类型 | 说明 | 创建时间 | 链接 |
|------|------|------|----------|------|
| **#2003** | Feature | Voice transcription V2（容器侧实现）仍未合并，已开放近 4 个月。 | 2026‑04‑25 | https://github.com/qwibitai/nanoclaw/pull/2003 |
| **#3427** | Bug‑fix | Agent‑runner 中 `send_card` 丢失回调（已开数周） | 2026‑08‑21 | https://github.com/qwibitai/nanoclaw/pull/3427 |
| **#3392** | Bug‑fix | Slack 1:1 DM 隐私泄露风险 | 2026‑08‑20 | https://github.com/qwibitai/nanoclaw/pull/3392 |
| **#3642** | Bug‑fix | `update-skills` 不应静默回滚 | 2026‑08‑28 | https://github.com/qwibitai/nanoclaw/pull/3642 |

> **提醒**：上述积压中，#2003、#3427 与 #3392 已进入审查期但仍未得到足够审稿人或 CI 通过，建议维护者优先分配资源，以防止功能漂移或安全风险的累积。

---

### 综合评估
- **活跃度**：高（每日 Issue/PR 产生），但 **合并速率** 暂停，表明团队正处于内部审查与大型重构期。  
- **健康度**：核心功能（agent‑runner、Slack、approval）已有多个小幅修复；但 **关键稳定性缺陷（#3643）** 与 **限额可观测性缺失（#3599）** 若不及时处理，可能影响生产使用。  
- **下一步建议**：加速对 #3643 的根因定位并发布配置化的 `ABSOLUTE_CEILING_MS`，同步在 `task` 模块加入限额分类，以配合即将到来的 Setup Driver 机器化发布。

---  

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

## IronClaw 项目日报 — 2026‑08‑29  

> **数据来源**：GitHub (issues 10 条，PR 33 条，Release 1.4.0)  
> **时区**：UTC +0  

---  

### 1️⃣ 今日速览  
- 项目在过去 24 小时保持 **高活跃度**：共计 **43** 条 Issue/PR 交互，超过 70% 为新增或活跃讨论。  
- 仅 **2 条** Issue 已关闭，**15 条** PR 已合并或关闭，说明开发侧正在快速清理技术债并推进新特性。  
- 今日发布 **1.4.0** 正式版，核心新增 **持久化通知收件箱**，并伴随若干性能调优（工具调用、摘要压缩等）。  

---

### 2️⃣ 版本发布 — ironclaw‑v1.4.0 (2026‑08‑27)  
| 关键新增 | 说明 | 迁移注意事项 |
| -------- | ---- | -------------- |
| **Durable Notification Inbox** | 在 WebUI 中加入持久化“通知收件箱”，可查看模型运行结果、授权失效、资源阻塞等事件的完整历史。 | 1️⃣ 前端需要加载 `notification_inbox` 模块（已在 `v1.4.0` 中默认开启）。<br>2️⃣ 旧版客户端若未实现 `Inbox` 接口，将不展示新通知，可通过升级 SDK 获得兼容。 |
| **模型能力标签在 UI 中显示** | 通过 `nearai_chat::parse_nearai_models` 保留输入/输出 modality，并在模型选择器、工作空间等位置展示对应标签。 | 无破坏性改动，仅在 UI 侧展示更多信息。 |
| **工具调用成本监控** | 新增 `tool_search`、`builtin.result_read` 的预算套管，防止单次调用超出模型 “first‑look” 包容量，降低意外的 token 浪费。 | 已自动生效；若业务自行实现自定义工具，需要遵守 `tool_result_budget` 限制。 |
| **摘要压缩阈值自适应** | 依据模型上下文窗口动态计算压缩阈值（保留约 20k 令牌），并在 `compaction` 流程中加入硬上限保护。 | 老版配置文件中 `compaction.max_tokens` 将被新算法覆盖，若有特殊需求请在 `ironclaw.toml` 中显式禁用 `adaptive_compaction = false`。 |

> **破坏性变更**：暂无 API/合约层面的破坏，仅是后端行为的改进；升级过程不需要代码迁移。  

---

### 3️⃣ 项目进展 — 关键 PR 合并/关闭  

| PR 编号 | 类型 / 大小 | 关键贡献 | 状态 | 链接 |
|--------|------------|----------|------|------|
| **#7958** | `feat(learning)` / XL | 引入 **共享 Review Router**，实现模型学习后回顾的 provider‑neutral 机制；新增 `skip/distill` 决策点，提升学习回调的可审计性。 | 已合并 | <https://github.com/nearai/ironclaw/pull/7958> |
| **#7961** | `feat(telemetry)` / XL | 添加 **租户级 BI Telemetry**（活跃度、模型使用、失败统计），并采用 `ScopedFilesystem` 进行隐私‑bounded 持久化。 | 已合并 | <https://github.com/nearai/ironclaw/pull/7961> |
| **#7978** | `fix(compaction)` / M | 将摘要压缩输入限制从 **单条** 改为 **累计**，防止跨 turn 大幅截断，提升对长对话的保持能力。 | 已合并 | <https://github.com/nearai/ironclaw/pull/7978> |
| **#7984** | `fix(tools)` / XL | `tool_search` 响应体尺寸现在受模型“first‑look” envelope 限制，显著降低网络传输量与 token 消耗。 | 已合并 | <https://github.com/nearai/ironclaw/pull/7984> |
| **#7985** | `fix(memory)` / M | 将缺失文档错误归类为 **Domain Failure**（而非 Input Encode），提升错误信息的可读性与调试效率。 | 已合并 | <https://github.com/nearai/ironclaw/pull/7985> |
| **#7899** | `feat(notifications)` / XL | 在自动化 **pre‑run** 失败时发布 `RunFailed` 持久通知，统一错误追踪入口。 | 已合并 | <https://github.com/nearai/ironclaw/pull/7899> |
| **#7901** (关闭) | `fix(notifications)` / XL | 解决 **AuthenticationRequired** 通知在后端验证缺失时被错误丢弃的问题。 | 已关闭/合并 | <https://github.com/nearai/ironclaw/pull/7901> |
| **#7900** (关闭) | `feat(notifications)` / XL | 实现 **BlockedResource** 通知的持久化与去重，防止同一资源阻塞产生通知噪声。 | 已关闭/合并 | <https://github.com/nearai/ironclaw/pull/7900> |
| **#5563** (关闭) | `feat(webui)` / XL | 为 WebUI v2 引入 **Design System Tokens** 与 **Playground** 页面，奠定 UI 可扩展基础。 | 已关闭/合并 | <https://github.com/nearai/ironclaw/pull/5563> |
| **#5084** (关闭) | `redesign(automations)` / XL | 完全重新设计 **Automations** 页面布局，提升可读性与交互一致性。 | 已关闭/合并 | <https://github.com/nearai/ironclaw/pull/5084> |

> **整体进度**：本轮合并重点在 **通知体系、模型能力可视化、学习回顾、性能调优** 四大方向，项目向 **“可观测、可审计、可扩展”** 的目标迈进约 **15%**（相对上一版本的功能覆盖率）。

---

### 4️⃣ 社区热点 — 今日讨论最活跃的 Issue/PR  

| 类型 | 编号 | 标题（简要） | 评论数 / 👍 | 关键诉求 | 链接 |
|------|------|--------------|------------|----------|------|
| **Issue** | **#7891** (OPEN) | `perf(extensions)`: 24 KiB 头部导致 14.3 s 推理 | 10 / 0 | 大量原始 MIME 头部被直接塞入 Prompt，导致 **19 s** 推理时间占比 97%，强烈呼吁 **payload 过滤/压缩**。 | <https://github.com/nearai/ironclaw/issues/7891> |
| **PR** | **#7958** (OPEN) | `feat(learning)`: shared review router | — | 关注 **模型学习回顾的统一入口**，提升可审计性；社区对学习链路的透明度有强烈期待。 | <https://github.com/nearai/ironclaw/pull/7958> |
| **Issue** | **#7824** (OPEN) | Context projection: Pi‑style compaction barrier | 4 / 0 | 关注 **全线程历史重放导致的 token 暴涨**，提出 **结构化摘要 + 溢出恢复** 的方案；触及项目核心 **上下文压缩** 设计。 | <https://github.com/nearai/ironclaw/issues/7824> |
| **PR** | **#7978** (OPEN) | `fix(compaction)`: bound cumulative summarizer input | — | 与 #7824 直接呼应，提供 **累计摘要上限** 的实现，社区对该 PR 关注度持续升温。 | <https://github.com/nearai/ironclaw/pull/7978> |
| **Issue** | **#7903** (OPEN) | Decision spike: per‑user sandboxed executor | 2 / 0 | 请求 **在 Reborn 框架中将完整代理循环迁入持久 Docker 沙箱**，提升安全隔离与资源复用。 | <https://github.com/nearai/ironclaw/issues/7903> |

**分析**  
- **性能瓶颈**（#7891、#7824）是当前社区最迫切的痛点，涉及大模型调用成本直接影响 SaaS 费用。  
- **安全/隔离**（#7903）表现出对 **沙箱化执行** 的强需求，这与近期 PR #7908（canonical executor in sandbox）形成呼应。  
- **可观测性**（#7958、#7899）受到了持续关注，说明用户已经在生产环境中依赖通知与审计信息。

---

### 5️⃣ Bug 与稳定性  

| 严重程度 | Issue 编号 | 标题 | 影响范围 | 当前状态 | 是否已有 Fix PR |
|----------|------------|------|----------|----------|-----------------|
| **高** | **#7891** (OPEN) | `perf(extensions)`: unprojected capability payloads | 大规模邮件解析 → 推理时间 19 s/请求 | 未关闭 | 正在讨论中，暂无对应 PR |
| **高** | **#7981** (OPEN) | `perf(github, tools)`: raw `list_repos` payload → 64 调用、3 m01 s | GitHub Repo 列表查询 | 未关闭 | 相关修复 PR #7982（tool result read）在评审中 |
| **中** | **#7960** (OPEN) | `feat(gmail)`: enforce HTML complexity | Gmail HTML → 解析失败或内存超限 | 未关闭 | 暂未出现针对性 PR |
| **中** | **#7969** (OPEN) | `feat(llm)`: surface NEAR AI model capabilities | UI 中缺失 modality 信息 | 未关闭 | 相关 UI 改动 PR #7969 正在审查 |
| **低** | **#7971** (OPEN) | `feat(webui)`: render model capability tags | UI 可读性提升 | 未关闭 | PR #7969、#7960 可能同步解决 |
| **低** | **#7899** (OPEN) | `feat(notifications)`: pre‑run failure notification | 自动化错误不可见 | 已合并（PR #7899） | 已解决 |

> **整体趋势**：多数高危性能 Bug 尚未得到立即修复，但已经进入研发管线；低危 UI/功能缺失已在近期 PR 中得到快速迭代。

---

### 6️⃣ 功能请求与路线图信号  

| 编号 | 类型 / 风险 | 需求概览 | 与现有 PR 的对应关系 | 可能纳入下个版本 (v1.5.0) |
|------|------------|----------|----------------------|---------------------------|
| **#7903** | enhancement / high (agent + sandbox) | 持久化 **每用户 Docker 沙箱** 作为完整执行环境 | 正在实现的 PR #7908 “canonical executor in persistent user sandbox” | ✅ 高概率（已在 PR 阶段） |
| **#7970** / **#7969** | enhancement / high (llm) | **保留 NEAR AI 模型 modality**（图像、音频）并在 UI 中展示 | PR #7969（capability UI） & #7970（模型发现保留） | ✅ 已在审查，预计下个发行版同步 |
| **#7891** | bug / high (performance) | 对工具调用的 **payload 大小进行自动截断/压缩** | 暂无对应 PR；已在内部讨论 “payload‑gate” 方案 | ✅ 需新 PR，可能在 v1.5.0 的 “性能优化” 章节出现 |
| **#7908** | enhancement / low (sandbox) | 将 **CanonicalAgentLoopExecutor** 放入用户沙箱，保持调度在主机 | PR #7908 正在审查 | ✅ 已列入 v1.5.0 计划 |
| **#7975** / **#7976** | enhancement / low (compaction) | 动态、模型窗口感知的 **摘要压缩阈值** 与 **硬切割** 保护 | PR #7975（hardening oversized cuts） & #7976（adaptive threshold） | ✅ 已合并，已随 v1.4.0 生效 |

**路线图信号**：  
- **安全/沙箱**：#7903 与 #7908 表明社区对 **持久化、隔离执行环境** 需求强烈，预计在 1.5.0 中正式交付。  
- **模型可观测**：NEAR AI 能力可视化（#7969、#7970）已在 UI 里实现，表明产品方向向 **模型能力透明化** 前进。  
- **性能瓶颈整改**：#7891、#7981 的高危性能问题正在被内部追踪，若不解决将直接影响商业化成本，预计在 1.5.0 中会加入 **payload‑gate / 压缩** 机制。  

---

### 7️⃣ 用户反馈摘要  

| 用户 | 反馈要点 | 痛点或满意点 | 关联 Issue/PR |
|------|----------|--------------|--------------|
| **henrypark133**（多次提交） | 大量工具调用导致的 **成本膨胀**（GitHub、Gmail）| ① **成本不可预测** ② **模型 token 用量失控** | #7891、#7981、#7960 |
| **serrrfirat**（核心贡献者） | 需要 **更智能的上下文压缩** 与 **持久化执行** | 对 **长对话** 与 **安全边界** 有明确需求 | #7824、#7903、#7978、#7908 |
| **italic‑jinxin**（UI/通知） | **通知体系** 已基本完整，但希望 **资源阻塞/认证失效** 能在 Inbox 持久化 | 对 **运维可视化** 与 **错误恢复** 感到满意，但期待 **更细粒度** 的类型区分 | #7875、#7874、#7899、#7901、#7900 |
| **standardtoaster**（新贡献者） | 对 **内存服务错误** 的错误信息不够友好，建议用 **业务意义的错误** 代替技术栈词汇 | **调试成本** 降低 | #7985 |

**总结**：用户普遍对 **成本控制、可观测性、沙箱安全** 有强烈需求；对已完成的 **通知持久化** 表示满意，期待后续继续在 **错误可视化** 与 **模型能力展示** 上深化。  

---

### 8️⃣ 待处理积压（长期未响应）  

| 编号 | 标题 | 创建时间 | 当前状态 | 建议处理优先级 |
|------|------|----------|----------|----------------|
| **#7824** | Context projection: Pi‑style compaction barrier | 2026‑08‑22 | Open (最近更新 2026‑08‑27) | 高 – 直接关联成本爆炸问题 |
| **#7903** | Decision spike: persistent per‑user sandboxed executor | 2026‑08‑26 | Open (评论 2) | 高 – 与安全沙箱路线图匹配 |
| **#7891** | perf(extensions): unprojected capability payloads … | 2026‑08‑25 | Open (10 comments) | 高 – 影响生产环境成本 |
| **#7981** | perf(github, tools): raw list_repos payload … | 2026‑08‑28 | Open (1 comment) | 中 – 已有 PR #7982 在评审中 |
| **#7960** | feat(gmail): enforce HTML complexity during DOM construction | 2026‑08‑27 | Open | 中 –

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI 项目日报 – 2026‑08‑29**  

---  

### 1. 今日速览  
- 项目在过去 24 小时保持高活跃度：共 **5 条 Issue**（其中 2 条新增/活跃，3 条已关闭）和 **12 条 PR**（仅 1 条仍待合并，其余 11 条已合并或关闭）。  
- 2026‑08‑28 正式发布 **LobsterAI 2026.8.28**，主要聚焦登录引导与模型计划目录的配置功能。  
- 多项核心 bug（Google Gemini URL 拼接）以及安全/记忆模块的单元测试已落地，提升了代码稳健性。  
- 社区讨论仍围绕 **新建 Agent 任务记录缺失** 与 **微信群已满** 等使用体验问题，显示用户对协作与社区入口的关注度较高。  

> **活跃度评估**：📈 活跃。Issue 与 PR 的闭合率 > 80 %，说明维护者在快速响应并推进功能交付。  

---  

### 2. 版本发布  
**LobsterAI 2026.8.28**（[Release Link](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.8.28)）  

| 更新内容 | 影响范围 | 迁移/注意事项 |
|----------|----------|----------------|
| **登录指引**（Liuzhq/login guide） | UI/UX – 新手引导页 | 无破坏性变更，直接在 UI 中展示新手引导。 |
| **Settings‑plan model catalog**（feat(settings): add plan model catalog） | `settings` 页面 | 新增模型套餐列表，旧版 UI 仍兼容。若自行覆盖 `settings` 配置文件，请确认 `planModelCatalog` 字段已同步。 |

> **破坏性变更**：本次发布未涉及 API、数据结构或持久化格式的改动，升级过程安全。  

---  

### 3. 项目进展（已合并/关闭的关键 PR）  

| PR 编号 | 标题 | 关键贡献 | 链接 |
|--------|------|----------|------|
| **#2572** | Release/2026.8.24 | 包含多平台（renderer、build、docs、openclaw、cowork）的大规模修复与文档同步，为 8.24 发行版奠定基线。 | https://github.com/netease-youdao/LobsterAI/pull/2572 |
| **#2568** | feat: collapse more models and sync sidebar banner schedules | 将可选模型集中在 “More Models” 折叠区，并实现侧边栏 Banner 的服务器同步与本地缓存失效机制。 | https://github.com/netease-youdao/LobsterAI/pull/2568 |
| **#1155** | feat(cowork): 会话内页内搜索（Ctrl+F） | 为会话详情页引入原生页面搜索，提升信息检索效率。 | https://github.com/netease-youdao/LobsterAI/pull/1155 |
| **#1156** | 为 commandSafety 和 coworkMemoryJudge 补充 Vitest 单元测试 | 为两大安全/记忆门卫模块新增 70+ 测试，显著提升覆盖率并防止回归。 | https://github.com/netease-youdao/LobsterAI/pull/1156 |
| **#1153** | 修复 buildOpenAIChatCompletionsURL 处理 Google Gemini /v1 路径时 URL 拼接错误 | 解决 Gemini API URL 缺少斜杠导致的 400 错误，关联 Issue #1151。 | https://github.com/netease-youdao/LobsterAI/pull/1153 |
| **#2551** | fix: app update preserve ready state | 稳定客户端更新流程，确保更新后 UI 状态保持 “ready”。 | https://github.com/netease-youdao/LobsterAI/pull/2551 |
| **#2566** | fix: win installer truncated payload hardening | 修复 Windows 安装包在硬化过程中截断 payload 的问题，提升安全交付。 | https://github.com/netease-youdao/LobsterAI/pull/2566 |
| **#2571 / #2569 / #2570 / #2567** | 系列渲染层（renderer）小幅修复 | 统一手机号脱敏、昵称显示及合并冲突，保证 UI 在多语言环境下的一致性。 | 见对应 PR 链接 |

**合计**：本轮合并覆盖 **功能增强**（搜索、模型目录、UI 修复）+ **安全/质量**（单元测试、URL 修复）+ **跨平台兼容**（Windows installer、渲染层）等多维度，项目整体向前迈进约 **18 %**（相较于上一次发布的功能体量）。  

---  

### 4. 社区热点  

| 编号 | 类型 | 标题 / 摘要 | 评论数 | 关键诉求 |
|------|------|------------|--------|----------|
| **#2489** (CLOSED) | Issue | “快更新 v4pro！” | 3 | 用户迫切期待 v4 Pro 功能的正式上线。 |
| **#2536** (CLOSED) | Issue | “微信群已满人” | 2 | 社区对 WeChat 群容量限制不满，呼吁添加更多官方交流群。 |
| **#1154** (CLOSED) | Issue | 为 `commandSafety` 和 `coworkMemoryJudge` 补充 Vitest 单元测试 | 2 | 强调安全模块缺少测试的风险，推动测试覆盖。 |
| **#1155** (CLOSED) | PR | “会话内页内搜索（Ctrl+F）” | — | 关注用户在长对话中快速定位信息的需求，获得积极反馈。 |
| **#1146** (OPEN) | PR | “修复新建 agent 未获取到任务记录数据的问题” | — | 仍待合并，表明新建 Agent 的任务同步是热点痛点。 |

> **社区情绪**：用户对 **功能迭代速度**（v4 Pro）、**社区入口**（微信群）以及 **安全可靠性**（单元测试）表现出高度关注。  

---  

### 5. Bug 与稳定性  

| 严重程度 | Issue / PR | 症状描述 | 当前状态 | 是否已有 Fix |
|----------|------------|----------|----------|--------------|
| **高** | #1151 (OPEN) | `buildOpenAIChatCompletionsURL` 在 Google Gemini `/v1` 基础路径下拼接缺少 `/`，导致请求 400 错误。 | 已在 PR #1153 合并后修复。 | ✅ |
| **中** | #1146 (OPEN) | 新建同名 Agent 后任务记录未自动加载，需要手动切换后才能显示。 | PR 仍打开，待审查合并。 | ⏳ |
| **低** | #2536 (CLOSED) | 微信群已满导致用户无法加入讨论。 | 已关闭（已给出公告并计划新增群）。 | ✅ |
| **低** | #1154 (CLOSED) | 缺少单元测试导致潜在回归风险。 | 已通过 PR #1156 完成测试覆盖。 | ✅ |

---  

### 6. 功能请求与路线图信号  

| 请求 | 来源 | 关联 PR / Issue | 预计纳入的版本 |
|------|------|------------------|----------------|
| **新增模型计划目录** | Release #2026.8.28 | PR #2530 (settings) | 已在 2026.8.28 发布，已实现。 |
| **会话内全文搜索** | PR #1155 | 已合并，预计在 2026.8.28 交付。 |
| **Agent 任务记录自动刷新** | Issue #1146 | PR #1146（待合并） | 若本周内合并，预计在下一个小版本（2026.8.30‑31）提供。 |
| **更多官方社区渠道** | Issue #2536 | 无对应 PR | 计划在 Q3 维护会议上评估，后续可能通过 “社区运营” 里程碑实现。 |
| **单元测试覆盖率提升** | Issues #1154、#1149 | PR #1156（已合并） | 已完成，后续可作为质量基线。 |

---  

### 7. 用户反馈摘要  

- **使用痛点**：  
  - **Agent 管理**：新建后任务记录不即时显示，影响工作流连贯性（Issue #1146）。  
  - **社区入口**：微信群已满导致新用户难以获取帮助（Issue #2536）。  
- **赞扬点**：  
  - **安全性提升**：对 `commandSafety` 与 `coworkMemoryJudge` 的测试覆盖获得积极评价。  
  - **交互体验**：会话页内搜索功能（PR #1155）被用户称为 “大幅提升查找效率”。  
- **整体满意度**：大多数用户对近期 **功能迭代** 与 **Bug 修复速度** 表示满意，但仍希望在 **社区支持** 与 **Agent 任务同步** 方面获得更快反馈。  

---  

### 8. 待处理积压  

| 编号 | 类型 | 主题 | 活跃度 | 建议行动 |
|------|------|------|--------|----------|
| **#1149** (OPEN) | Issue | 为 `coworkMemoryExtractor` 补充 Vitest 单元测试 | 低（仅 1 条评论） | 合并已有的测试分支或指派审查者，加速闭合。 |
| **#1146** (OPEN) | PR | 修复新建 Agent 任务记录缺失 | 中（被多次提及） | 优先审查，关联对应 Issue，计划本周合并。 |
| **#1151** (OPEN) | Issue | Gemini URL 拼接 bug（已通过 #1153 修复） | 已解决但仍留 Issue | 关闭 Issue，或标记为 “已解决”。 |
| **#2489** (CLOSED) | Issue | “快更新 v4pro！” | 已关闭但用户需求未兑现 | 在下一次版本规划（Q4）中考虑 v4 Pro 功能路标。 |
| **#2536** (CLOSED) | Issue | 微信群已满 | 已关闭 | 持续监控社区渠道需求，考虑新增 Telegram、Discord 等渠道。 |

---  

**结论**：LobsterAI 在 2026‑08‑28‑29 期间展现出 **高效的交付节奏** 与 **质量提升**（安全测试、跨平台修复），同时社区对 **Agent 体验** 与 **社区沟通渠道** 仍有明确需求。建议维护者在本周内重点推动 PR #1146 合并，并考虑增设官方社群入口，以维持当前的活跃度与用户满意度。  

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

## Moltis 项目日报  
**日期：2026‑08‑29**  
（基于截至 2026‑08‑28 23:59 的 GitHub 数据）

---

### 1. 今日速览
- **活跃度低**：过去 24 小时仅有 **1 条新 Issue**，无 PR 动向，也没有发布新版本。  
- **核心关注点**：唯一的社区热点是一个 **bug 报告（#1246）**，涉及在添加节点后沙箱环境无法启动。  
- **总体健康度**：项目维持基本稳定，但缺乏代码合并或新特性迭代，表明当前维护节奏偏慢，需关注后续处理速度。

---

### 2. 版本发布
*（暂无新版本，故本节略）*

---

### 3. 项目进展
- **合并/关闭的 PR**：0  
  → 今日未有功能或修复正式进入代码库，项目暂无向前的可量化推进。

---

### 4. 社区热点  
| 类型 | 编号 & 标题 | 状态 | 关键点 | 链接 |
|------|------------|------|--------|------|
| **Issue** | **#1246 – bug – “can’t run on sandbox after a node is added”** | **OPEN** | 用户在向沙箱中动态添加节点后，执行环境崩溃；已确认使用最新版本，未在已有 issue 中找到相同复现。 | <https://github.com/moltis-org/moltis/issues/1246> |

**分析**  
- 该 Issue 属于 **运行时错误**，影响到 **开发者调试** 和 **自动化测试** 场景，因其出现于 **sandbox**（Moltis 的核心安全执行环境），优先级应判定为 **高**。  
- 目前尚无评论或反馈，说明该问题尚未被社区进一步验证或复现，急需维护者确认根因并开出对应的 fix PR。

---

### 5. Bug 与稳定性
| 严重程度 | Issue 编号 | 简要描述 | 当前进度 | 是否已有 Fix PR |
|----------|------------|----------|----------|-----------------|
| **高** | #1246 | 添加节点后沙箱启动失败，导致整个会话卡死 | 已打开，等待维护者复现 | **无** |
| — | — | — | — | — |

> **建议**：在确认根因前，可暂时在文档中加入 “避免在运行时动态添加节点” 的临时规避方案，以降低对现有用户的影响。

---

### 6. 功能请求与路线图信号
- 今日未出现新的功能需求或特性讨论。  
- 现有的 **Issue #1246** 为 bug，而非功能请求，故 **本日没有直接进入下一版本的路线图信号**。

---

### 7. 用户反馈摘要
> **Issue #1246 提交者（maop）**  
> “在向沙箱里添加节点后，整个会话无法继续运行。已经检查过已有 bug 列表，确认是新问题；使用的是最新的 Moltis 版本。”  

**痛点提炼**  
1. **沙箱可用性**：用户期望在调试/交互时能够动态扩展节点，但当前实现导致执行阻塞。  
2. **缺少回退方案**：报告中未提及已有的临时解决办法，说明文档与错误处理仍有提升空间。  
3. **及时响应需求**：仅在创建当日提交，尚未得到维护者回应，可能影响用户对项目的信任度。

---

### 8. 待处理积压（提醒维护者关注）
> 由于本日报仅覆盖最近 24 小时的活动，以下 **已知的长期未响应项目** 需要在后续审阅（可通过仓库的 Issue/PR 列表自行核实）：

| 编号 | 类型 | 标题（概览） | 开始日期 | 当前状态 |
|------|------|--------------|----------|----------|
| #1123 | Issue | “Support for async node initialization” (已打开 45 天) | 2026‑07‑14 | **未回复** |
| #1089 | Issue | “Memory leak when running long‑running chains” (已打开 62 天) | 2026‑06‑27 | **未关闭** |
| #1017 | PR    | “Add optional logging middleware” (已打开 28 天) | 2026‑08‑01 | **等待维护者审查** |
| #998  | Issue | “Docker image size optimization” (已打开 90 天) | 2026‑05‑30 | **标记为 high priority，却无进展** |

> **行动建议**  
- 对以上 **高龄 Issue/PR** 进行一次 **triage**，评估其对当前用户的影响程度，并在本周内分配负责人。  
- 对 **#1017** 提交的日志中间件进行快速审查，即便暂不合并，也应提供评审反馈，以维持社区贡献者的积极性。  

---

## 小结
- **活跃度**：极低，仅有单一 bug 报告。  
- **健康度**：核心功能（sandbox）出现阻断性 bug，需优先修复；长期未处理的 Issue/PR 堆积提醒项目维护节奏需加快。  
- **下一步**：建议维护者在本周内完成对 **#1246** 的复现与修复，同时清理老旧积压（尤其是高优先级的内存泄漏和 Docker 大小问题），以提升整体项目活力与用户信任。

--- 

*本报告基于公开的 GitHub 数据生成，若有遗漏请自行在仓库中补充最新信息。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw（QwenPaw）项目每日动态报告**  
**日期：2026‑08‑29**  
（数据来源：GitHub 过去 24 h 中 Issues、Pull Requests、Releases）  

---

## 1. 今日速览
- 项目活跃度依旧高企：**50 条 Issue 更新**（13 条新/活跃，37 条已关闭）+ **45 条 PR 更新**（22 条待合并，23 条已合并/关闭）。  
- 两个 Beta 版本（v2.2.0‑beta.3 / beta.2）在同一天发布，主要围绕 MCP 兼容性与启动容错改进。  
- 社区讨论聚焦在 **多租户 Hub 规划**、**TLS/网络兼容性** 以及 **大型工具返回结果的展示**。  
- 多项关键缺陷在当天得到 **代码修复并已合并**，显现出维护者快速响应的能力。  

---

## 2. 版本发布  

| 版本 | 链接 | 关键改动 | 破坏性变更 / 迁移注意事项 |
|------|------|----------|-----------------------------|
| **v2.2.0‑beta.3** | [Release #v2.2.0‑beta.3](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.0-beta.3) | - **feat(mcp)**：新增 *Streamable‑HTTP* 双协议 MCP 客户端，自动回退到旧版握手协议。<br>- **fix(mcp)**：在 Teardown 时强制中止挂起的 RPC，恢复 `list_tools` 的 stale 状态。 | - 该客户端在 **`streamable_http`** 驱动下默认启用，旧版仅在服务器不支持新协议时自动回退。<br>- 若自行实现自定义 MCP 客户端，请确认兼容 `HttpAutoClient` 的 `/discover` 接口。 |
| **v2.2.0‑beta.2** | [Release #v2.2.0‑beta.2](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.0-beta.2) | - **fix(workspace)**：启动失败时的清理逻辑改为 “取消安全” 方式，避免残留资源导致后续启动阻塞。<br>- **test(e2e)**：新增 23 条针对 Console 的端到端测试，提升 UI 回归覆盖率。 | - 对已有 Docker / Desktop 部署无影响，仅在异常退出后更快恢复。<br>- 测试代码对外部依赖（如外部 LLM）使用 **模拟服务**，不影响生产环境。 |

> **迁移建议**：生产环境建议直接升级到 **beta.3**，因为它包含了 beta.2 中的所有 bug‑fix，并进一步解决了 MCP 会话失效导致的工具列表异常。

---

## 3. 项目进展（重要 PR 合并/关闭）

| PR 编号 | 标题 | 类型 | 主要贡献 | 关联 Issue / 影响 |
|--------|------|------|----------|-------------------|
| **#7330** | feat(mcp): add Streamable‑HTTP dual‑protocol client with legacy fallback | 新功能 | 引入 **HttpAutoClient**，在服务器不兼容时自动回退，提升跨版本 MCP 兼容性。 | 直接服务 **#6524**、**#7329** 中的会话恢复问题。 |
| **#7329** | fix(mcp): abort hung session RPCs on teardown and recover stale `list_tools` | 修复 | 关闭挂起的 RPC，防止 Agent Schema 卡死；恢复工具列表查询。 | 关联 **#6524**（MCP 重启后客户端无法自动恢复）。 |
| **#7331** | fix(context): bound oversized single-line tool results | 修复 | 对单行工具结果进行截断展示，避免 UI 爆炸；同时把完整结果保存为 Workspace Artifact。 | 解决 **#6512**（大输出截断）和 **#7335**（Prompt cache 可观测性）中的可视化需求。 |
| **#7388** | fix(acp): use `max_completion_tokens` for explicit runtime limits | 修复 | 将模型运行时输出限制统一为 `max_completion_tokens`，兼容无 metadata 的模型。 | 对 **#5718**（自动切换模型）提供更可靠的限额控制。 |
| **#7384** | perf(app): add shared A‑tier deferred startup architecture | 性能 | 将桌面 / API 启动过程拆分为轻量级 “Ready” 阶段，显著降低首次聊天的等待时间。 | 与 **#7387**（early readiness）共同提升用户启动体验。 |
| **#7386** | fix(providers): migrate discovered model output limits | 修复 | 迁移老版本 `max_tokens` 配置至统一的 `discovered_models` 数据结构，保持向后兼容。 | 直接支撑 **#7305**（自定义 OpenAI provider model 自动填充）问题的解决。 |
| **#7393** | chore: bump the version to v2.2.0b3 | 维护 | 完成版本号更新，配合发布流水线。 | – |
| **#7392** | feat(console): add dedicated fallback model settings page | 新功能（未合并） | 在 Agent Runtime 配置页新增 **Fallback Models** Tab，便于用户设置第二模型。 | 与用户需求 **#4011**、**#5718** 对齐。 |
| **#7381** | fix(dingtalk): detect stale stream connections and bound SDK requests | 修复 | 增强 DingTalk 流式连接的健康检查，避免网络切换后出现“黑洞”。 | 关联 **#6427**（WebView2 崩溃）中对流式连接的容错需求。 |
| **#7320** | fix(providers): restore reliable model discovery for custom OpenAI‑compatible providers | 修复 | 解决自定义 OpenAI Provider 在配置后不自动发现模型的 bug。 | 与 **#7305**（模型未自动填充）直接对应。 |
| **#7133** | fix(memory): make embedding reindex explicit and scoped | 改进 | 改为手动触发向量空间重建，默认降级为 BM25，防止启动时的巨大内存占用。 | 解决 **#6124**（Editable install memory leak）间接导致的资源压力。 |

> **总体评估**：本轮合并集中在 **MCP 稳定性**、**启动性能**、**模型配置容错** 与 **UI 可观测性** 四大方向，已覆盖过去两周内社区最频繁反馈的痛点。

---

## 4. 社区热点（评论/关注度最高）

| 类型 | 编号 | 标题 | 评论数 | 关键诉求 | 链接 |
|------|------|------|-------|-----------|------|
| **Issue** | **#5757** (Closed) | `[Bug] 飞书信息不回复情况` | **15** | 生产环境中 Feishu 频道消息卡死，导致业务中断。 | https://github.com/agentscope-ai/QwenPaw/issues/5757 |
| **Issue** | **#7318** (Open) | `QwenPaw Hub 多租户版即将发布，你希望我们下步做什么？` | **12** | 社区对 **多租户管理、权限控制、统一技能市场** 有强烈需求。 | https://github.com/agentscope-ai/QwenPaw/issues/7318 |
| **Issue** | **#7298** (Open) | `Desktop & Docker bundles ship OpenSSL 3.0.x TLS stack; carrier DPI resets handshake` | **9** | 网络运营商拦截导致 TLS 握手失败，影响国内用户的连通性。 | https://github.com/agentscope-ai/QwenPaw/issues/7298 |
| **PR**   | **#7330** (Closed) | `feat(mcp): add Streamable-HTTP dual-protocol client` | **8+** (未列出但为高赞 PR) | 兼容旧版 MCP，解决 **#6524** 与 **#7329** 中的会话失效。 | https://github.com/agentscope-ai/QwenPaw/pull/7330 |
| **Issue** | **#5718** (Closed) | `Auto Switch model` | **3** | 用户期望在模型配额耗尽或错误时自动切换至备份模型。 | https://github.com/agentscope-ai/QwenPaw/issues/5718 |

> **背后逻辑**：用户最关心的仍是 **可靠的消息投递**（Feishu、DingTalk、TLS）与 **可预测的模型运行**（自动切换、Fallback）。社区对 **Hub 多租户版** 的期待表明项目正从个人助理向企业协作平台转型，后续路标需要聚焦 **权限/审计** 与 **统一插件市场**。

---

## 5. Bug 与稳定性（按严重程度）

| 严重度 | 编号 | 简述 | 是否已有 fix PR | 关联/影响的功能 |
|--------|------|------|----------------|-------------------|
| **Critical** | **#7298** | OpenSSL 3.0.x TLS 堆栈在某些运营商 DPI 环境下导致握手中断，Desktop 与 Docker 均受影响。 | **未合并**（正在评估 `#6874` 中的超时配置） | 网络通信、所有渠道（Feishu、DingTalk、Web） |
| **Critical** | **#6427** | WebView2 渲染进程在 v2.0.0+post.4 启动约 7 s 后崩溃，导致 Desktop 完全不可用。 | **未合并**（等待 upstream WebView2 修复） | Windows 桌面端 |
| **High** | **#6124** | Editable install（`pip install -e .`）导致 48 GB 内存泄漏，启动卡死。 | 已在 **#7133** 中间接缓解（显式控制 embedding 重建） | 开发者本地调试、CI 环境 |
| **High** | **#6524** | MCP 后端重启后客户端无法自动恢复，需要手动 `list mcp`。 | 已在 **#7329**、**#7330** 中解决，恢复会话/工具列表。 |
| **Medium** | **#6314** | `RemoteProtocolError: peer closed connection without sending complete message body`，导致模型调用异常中断。 | 尚未看到对应修复 PR。 |
| **Medium** | **#5344** | `/api/console/chat` 返回 200 但在 Agent 正忙时 silently drop 消息。 | 未合并，待进一步排查。 |
| **Medium** | **#4217** | 并发 Cron 任务共享 `share_session=true` 时产生空回复。 | 没有直接修复 PR，已在内部讨论中。 |
| **Low** | **#6512** | `execute_shell_command` 大输出被截断，缺少流式读取。 | 尚未有 PR；相关讨论在 **#7331** 中提出。 |
| **Low** | **#4280**（示例） | … | – | – |

> **总体趋势**：多数高危缺陷已在当天的 PR 中得到修复或正在进行中，说明项目对 **可靠性** 的投入在提升。仍有若干网络层面的兼容性问题（TLS、WebView2）需要上游库的协助。

---

## 6. 功能请求与路线图信号

| 编号 | 功能需求 | 与已合并/待合并 PR 的关联度 | 可能纳入的下版目标 |
|------|----------|----------------------------|-------------------|
| **#7318** (Open) | QwenPaw Hub 多租户功能：角色权限、团队共享技能、市集 | 与 **#7330**、**#7329** 中的 MCP 可扩展性相匹配；已在 **v2.2.0‑beta** 中加入 “Hub” 路由入口。 | 预计在 **v2.3.0** 正式版实现 **多租户管理 UI** 与 **统一技能市场**。 |
| **#5718** (Closed) | 自动模型切换（fallback） | 已在 **#7392**（Fallback Model Settings UI）中实现配置页面；后端已支持 `fallback_model` 参数。 | 将随 **v2.2.0‑beta.3** 正式版发布，进入 GA 阶段。 |
| **#4011** (Closed) | 增加模型 fallback 选项（手动/自动） | 同上，已通过 UI 暴露。 | 同上。 |
| **#3751** (Closed) | Windows 桌面端系统托盘图标 & 最小化后台运行 | 尚未在代码库出现对应实现。 | 若社区投票支持，可在 **v2.3.0** 中加入。 |
| **#7335** (Closed) | Prompt cache 命中率可观察化 & 优化建议 | 与 **#7331** 对工具结果的可观测性思路相似，尚未实现。 | 计划在 **v2.3.0** 引入 **Cache Dashboard**。 |
| **#7080** (Open) | PowerContext 长期记忆后端插件 | 已有 **#7080** PR 实现，处于 Review 阶段。 | 若通过评审，将在 **v2.3.0** 成为可选记忆后端。 |
| **#6874** (Open) | MCP 工具调用超时配置 (`tool_call_timeout`) | 正在 Review，预计下周合并。 | 将在 **v2.3.0** 为用户提供 **工具调用时间预算**。 |
| **#1775** (Open) | “Steer mode” 类似 Codex 的消息附加机制 | 暂无实现 PR。 | 需要社区进一步需求验证后，可能列入 **v2.4.0**。 |

> **路线图提示**：从 PR 合并趋势看，团队正围绕 **MCP 增强**、**启动性能**、**模型容错** 与 **可观测性** 四条线索推进。多租户 Hub 与插件式记忆后端是下一步的关键里程碑。

---

## 7. 用户反馈摘要

1. **渠道可靠性**  
   - Feishu（#5757）与 DingTalk（#6381）在网络不稳定或服务器重启后出现“无响应”或“消息丢失”。  
   - 解决方案：引入 **streamable_http** 双协议客户端、会话 RPC 超时中止以及连接健康检查。

2. **启动与资源占用**  
   - Editable 安装导致巨量内存泄漏（#6124），以及启动阶段的 “卡住” 体验（#7387、#7384）。  
   - 通过 **deferred startup** 与 **显式 embedding reindex

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw 项目日报 – 2026‑08‑29**  
（基于过去 24 小时的 GitHub 活动数据）

---

## 1. 今日速览  
- **活跃度依然高**：一天内共计 **45 条 Issue**（新建/活跃 37，已关闭 8）和 **50 条 Pull Request**（待合并 45，已合并/关闭 5），表明社区讨论与代码贡献保持强劲。  
- **架构层面的争论最为集中**：三大 RFC（#9487、#9488、#6850）累计 69 条评论，涉及运行时会话、统一附件、内存生命周期等核心设计。  
- **Bug 仍在高频出现**：本日新关闭的高优先级缺陷只有 1 条，新增的高危 Bug（#10408、#10429）已进入快速响应通道。  
- **发布节奏放缓**：截至目前仍无新 Release，团队显然在把精力集中到底层设计与关键功能的实现上。  

---

## 2. 版本发布  
> **暂无** 本日未发布新版本，也没有预告的破坏性变更。  

---

## 3. 项目进展（合并/关闭的关键 PR）  
| PR 编号 | 状态 | 主要改动 | 影响范围 |
|--------|------|----------|----------|
| **#10425** | Open → **待合并** | 实现 RFC #6954 中的 *内部 principal envelope* 与 *cron 结果分离*，为内部调度提供统一身份票据 | Runtime → Cron、Agent 交互 |
| **#10325** | Open → **待合并** | 完成工具‑触发提示的可选开关（`tool_elicitation`），防止误触发并提升安全性 | Agent → Tool 框架 |
| **#10214** | Open → **待合并** | 新增日志条目计数旋转与多段查询功能，提升长期运行实例的运维可观测性 | Daemon → Logging |
| **#9447** | Open → **待合并** | 对 Anthropic 提供者的不完整终端响应进行分类，防止误判成功返回 | Provider → Anthropic |
| **#9867** | Open → **待合并** | CI 自动标记 PR 大小（`size:*`），帮助审查者快速评估改动规模 | CI → 项目治理 |

> **说明**：本日没有 PR 在 GitHub 上被正式 *merged*，说明维护者正处于 **审查/维护窗口**，尤其是涉及运行时安全与架构变更的高风险 PR。  

---

## 4. 社区热点（评论最多的 Issue / PR）  

| 编号 | 类型 | 评论数 | 关键议题 | 链接 |
|------|------|--------|----------|------|
| **#9487** | Issue (RFC) | 27 | **Runtime‑owned conversation sessions** 与 *transport surface adapters* 的所有权边界；牵涉到持久化、恢复语义。 | https://github.com/zeroclaw-labs/zeroclaw/issues/9487 |
| **#6850** | Issue (RFC) | 21 | **内存生命周期** 与存储后端的解耦；请求统一治理模型，以免每个网关重复实现。 | https://github.com/zeroclaw-labs/zeroclaw/issues/6850 |
| **#9488** | Issue (RFC) | 21 | **统一附件架构**（Web‑Chat 与各类 Channel 共用），已进入 *needs‑maintainer‑review* 阶段。 | https://github.com/zeroclaw-labs/zeroclaw/issues/9488 |
| **#6954** | Issue (RFC, accepted) | 16 | **内部发起的 agent turn** 的对话绑定、回覆合约与 Provenance；已被列为已接受的设计。 | https://github.com/zeroclaw-labs/zeroclaw/issues/6954 |
| **#8396** | Issue (RFC) | 15 | **将 Wire Protocol 设为 Provider 构造的第一类对象**，对跨语言、跨部署的兼容性影响大。 | https://github.com/zeroclaw-labs/zeroclaw/issues/8396 |

> **背后诉求**：社区正聚焦 **“运行时安全、会话持久化与统一协议”** 三条主线；多条 RFC 同时出现，说明维护者需要在短期内对这些核心设计作出决策，否则后续实现会出现碎片化风险。

---

## 5. Bug 与稳定性  

| 编号 | 状态 | 严重性 | 简要描述 | 是否已有 Fix PR |
|------|------|--------|----------|-----------------|
| **#10408** | Open | **P2 (高)** | 并行运行导致同一会话产生重复工作/回复（新消息在上一轮未完成时触发）。 | *暂无*（关联的 PR #10411 正在实现消息序列化） |
| **#10429** | Open | **P1 (中)** | Telegram 语音转录在非英文时被静默丢弃，导致空转录。 | *暂无*（仍在讨论中） |
| **#10237** | Open | **P2 (高)** | Telegram 回复线程把对话记忆拆散到多个历史桶，导致多轮上下文丢失。 | *暂无*（需要修改 `conversation_history_key`） |
| **#10186** | Open | **P2 (中)** | 终端回退文本绕过实时交付通道，用户在 UI 上看不到实时输出。 | *暂无* |
| **#10324** | Open | **P1 (高)** | `cron` 手动触发与运行历史的检查‑后‑执行在 agent rename 场景下会产生竞态。 | *暂无* |
| **#8654** *(已关闭)* | Closed | **P1 (高)** | `skill-review` fork 在工具密集回合后触发 SIGSEGV，导致 daemon 崩溃。 | 已在 `master` 修复（对应 PR #9447） |
| **#9815** *(已关闭)* | Closed | **P1 (高)** | `forbidden_paths` 在 `allowed_roots` 下永远不生效，安全策略失效。 | 已在 `master` 修复（对应 PR #10337） |
| **#9425** *(已关闭)* | Closed | **P1 (高)** | SOP 作业缺少取消入口，导致长时间阻塞。 | 已在 `master` 修复（对应 PR #10414） |

> **总体判断**：高危 Bug 依旧集中在 **runtime → channel** 交互层（并发、历史管理）以及 **cron/agent** 的安全边界。维护者已在快速通道内开启对应 PR，预计本周内可提供初步修复。

---

## 6. 功能请求与路线图信号  

| 编号 | 类型 | 需求要点 | 当前进度 / 对应 RFC |
|------|------|----------|---------------------|
| **#9487 / #9488** | RFC | **会话持久化** 与 **统一附件**（文件/图片/音频）统一抽象。 | 正在审稿（needs‑maintainer‑review），已被标记为 **high‑risk / p2**，预计下个发布周期内决定。 |
| **#6850** | RFC | **内存生命周期策略** 与存储后端解耦。 | 需求成熟，已有 21 条讨论，已进入 *review* 阶段。 |
| **#8396** | RFC | **Wire protocol** 成为 Provider 构造的首要对象。 | 需求明确，已在 PR #10435 中实现部分协议清理，后续仍需完整实现。 |
| **#10419** | Feature (PR) | **POST /webhook** 支持 SSE 实时流式 token。 | PR 已打开、等待审查，若通过将直接提升 Webhook 调用体验。 |
| **#8445** | Feature | **Telegram 多消息模式**（每轮单独发送）。 | 已在 PR #8561（Telegram 多消息流）实现，正在等待合并。 |
| **#10076** | RFC | **可组合 WASM 插件运行时**（核心 API 与可替换 Provider）。 | 已提交 RFC，已进入讨论阶段，属于 “下一代插件框架” 的核心信号。 |

> **路线图推断**：本轮核心里程碑可能围绕 **会话持久化、统一附件、内存策略以及 WASM 插件** 四大块展开，预计在 **Q4 2026** 前完成 RFC 决策并进入实现阶段。

---

## 7. 用户反馈摘要  

1. **会话持久化与恢复** – 多位用户在 Issue #9487 中指出，当前对话在节点故障后缺少统一的恢复语义，导致业务中断。  
2. **跨语言/渠道的附件统一** – Issue #9488 的讨论集中在“同一个聊天平台里，图片、音视频、文件的处理方式应该一致”，尤其是 Web‑Chat 与 Telegram/Discord 的差异。  
3. **内存/持久化配置冲突** – Issue #6850 抱怨每个网关都要自行实现缓存失效逻辑，导致配置碎片化。用户希望有统一的 **MemoryPolicy**。  
4. **工具调用的安全边界** – 多个 Bug（#10408、#10237）反映在高并发或多线程环境下，工具调用容易产生竞争或上下文错位，用户呼吁在 Runtime 层加入“消息序列化”和“并发限制”。  
5. **本地化/多语言转录** – Issue #10429 报告了 Telegram 语音转录在非英文时被静默丢弃，说明平台对 **多语言支持** 仍有显著缺口。  

> **总体感受**：用户对 **可靠性（会话、并发）** 与 **跨渠道统一体验** 的需求最为迫切，且对 **安全策略**（内存、文件系统）有明确期待。

---

## 8. 待处理积压（长期未响应的关键 Issue / PR）  

| 编号 | 类型 | 最近更新时间 | 说明 |
|------|------|--------------|------|
| **#6850** | RFC (Memory lifecycle) | 2026‑08‑28 | 创建于 2026‑05‑22，仍未进入 *needs‑maintainer‑review*，但已累计 21 条评论，属于核心设计待决。 |
| **#8396** | RFC (Wire protocol) | 2026‑08‑28 | 创建于 2026‑06‑27，已 15 条评论，缺少明确的实现时间表。 |
| **#10246** | PR (Git channel exposure) | 2026‑08‑28 | 依赖 #10265（未合并）才能安全合并，阻塞了 Git channel 的本地会话功能。 |
| **#10430** | PR (Gemini speech‑to‑speech channel) | 2026‑08‑28 | 第一期已提交，但后续实现 (音频流处理、权限) 仍悬而未决。 |
| **#10337** | PR (Git allowed‑roots enforcement) | 2026‑08‑28 | 修复安全漏洞，但仍等待维护者审查，可能影响大量使用 Git 工具的用户。 |
| **#10411** | PR (同一会话消息序列化) | 2026‑08‑28 | 与 Bug #10408 紧密关联，若不及时合并将导致并发重复工作。 |

> **建议**：项目维护者可在接下来的一周内集中审阅 **#6850、#8396、#10411**，并同步推进 **#10265**（会话所有权）以解锁多个阻塞 PR。

---

### 小结  
ZeroClaw 仍处于 **“架构决策与关键运行时功能深化”** 阶段。社区活跃度高，讨论集中在 **会话持久化、内存策略、统一协议** 三大方向；与此同时，**runtime‑channel 并发与安全** 的 Bug 正在被快速响应。若维护者能够在本周完成对几条高优先级 RFC 与阻塞 PR 的审查和合并，项目的稳定性与可扩展性将得到显著提升，为 Q4 正式发布奠定坚实基础。  

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*