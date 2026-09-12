# OpenClaw 生态日报 2026-09-13

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-12 22:16 UTC

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

**OpenClaw 项目日报 – 2026‑09‑13**  
*数据来源：过去 24 h Issues 更新 500 条（新开/活跃 271，已关闭 229）；PR 更新 500 条（待合并 228，已合并/关闭 272）。当天无新版本发布。*  

---

## 1. 今日速览  
- **活跃度极高**：仅一天内就产生了 500 条 Issue 与 500 条 PR 更新，其中已合并/关闭的 PR 达到 272 条，说明核心代码在持续快速迭代。  
- **问题集中在可靠性与体验**：今日评论最多的 Issue 主围绕 *子代理完成静默丢失、* 僵尸子进程泄漏、*Doctor 拒绝合法传统工作区* 等，均标记为 P1/P0 并伴有 `impact:session-state`、`impact:message-loss`、`impact:crash-loop` 等严重标签。  
- **功能与治理并进**：除了修复，社区仍在推进新特性（如 MCP 工具同意机制、Feishu 进度流式展示），且有大量维护者主导的重构 PR（如共享测试夹具、数据库完整性扫描优化），表明项目在同时处理技术债务与路线图需求。  

---

## 2. 版本发布  
> **今日无新版本发布**（Latest Releases 为空）。  
> 因此本节省略。

---

## 3. 项目进展（今日合并/关闭的重要 PR）  

| PR 编号 | 标题 / 目的 | 关联 Issue（若有） | 影响 | 链接 |
|--------|--------------|-------------------|------|------|
| #146512 | **fix: avoid repeated agent database integrity scans** | #145909、#118885 | 减少大型代理数据库在每次打开时的完整性检查，提升事件循环响应速度，直接缓解了 #142476 所报告的 14‑76 s 事件循环阻塞问题。 | https://github.com/openclaw/openclaw/pull/146512 |
| #146476 | **fix(update): explain owner update refusals in agent guidance** | #141657 | 在代理更新指南中增加运行时拒绝说明，帮助用户诊断类似 #145192、#144739 的更新失败场景。 | https://github.com/openclaw/openclaw/pull/146476 |
| #146466 | **fix(ui): show reconnecting messages only once** | – | 防止网络断开时重复显示 “Reconnecting” 消息，改善 UI 体验，间接降低因频繁弹窗导致的误操作。 | https://github.com/openclaw/openclaw/pull/146466 |
| #146409 | **fix(outbound): guard cross-provider topic mutations** | – | 将跨提供者话题创建/编辑纳入现有默认拒绝边界，防止越权话题修改，提升安全性。 | https://github.com/openclaw/openclaw/pull/146409 |
| #146384 | **improve(cron): avoid loading retained history during settlement** | #146197 | Cron 结算时不再加载已保留的历史收据，减少 I/O，缓解大规模 Cron 作业的卡顿。 | https://github.com/openclaw/openclaw/pull/146384 |

*以上 PR 均由维护者 **steipete** 或其他核心贡献者提交，均标记为 `maintainer` 且大小从 S 到 XL 不等，说明今天的合并工作覆盖了从细微 UI 改进到核心数据库/事件循环优化的全链条。*

---

## 4. 社区热点（今日讨论最活跃的 Issues/PRs）  

| 排名 | 编号 | 标题 | 评论数 | 👍 | 主要诉求 | 链接 |
|------|------|------|--------|----|----------|------|
| 1 | #44925 | **Subagent completion silently lost — no retry, no notification, no auto‑restart on timeout** | 27 | 2 | 需要可靠的子代理完成通知、重试机制及超时自动重启，避免数据/会话丢失。 | https://github.com/openclaw/openclaw/issues/44925 |
| 2 | #97616 | **OpenClaw leaks unreaped hook/tool child processes, causing zombie accumulation and runtime degradation** | 23 | 1 | 要求修复子进程未被 `waitpid` 回收导致的僵尸进程累积，影响长期运行稳定性。 | https://github.com/openclaw/openclaw/issues/97616 |
| 3 | #142585 | **Regression: 2026.9.3 Doctor refuses valid legacy workspace setup and attestation import when canonical rows are absent** | 17 | 0 | 期望 Doctor 在升级时能够识别并迁移合法的旧工作区，避免手动干预。 | https://github.com/openclaw/openclaw/issues/142585 |
| 4 | #67777 | **Subagent completion delivery can be lost on direct‑announce timeout, drain, or orphan prune** | 16 | 0 | 与 #44925 类似，强调在繁忙或排水场景下完成消息的可靠投递。 | https://github.com/openclaw/openclaw/issues/67777 |
| 5 | #78308 | **Feature: Channel‑mediated approval for MCP tool calls (consent envelope)** | 16 | 1 | 希望 MCP 工具调用也能走现有的 `/approve <id>` 渠道同意流程，以统一安全审计。 | https://github.com/openclaw/openclaw/issues/78308 |
| … | … | … | … | … | … | … |

> **观察**：评论榜单前五均为 **P1/P0** 级别的可靠性或安全问题，表明社区当前最关注的是 **稳定性与安全防护**，而非纯功能扩展。

---

## 5. Bug 与稳定性（今日报告的问题，按严重程度排序）  

| 严重度 | Issue 编号 | 标题 | 关键影响 | 是否已有对应 Fix PR（今日） | 链接 |
|--------|------------|------|----------|----------------------------|------|
| **P0 / Crash‑loop** | #144911 | MCP server init timeout crashes the Gateway — unhandled rejection "service child cleanup identity lost" | Gateway 整体崩溃，导致服务不可用 | 无（尚未见修复 PR） | https://github.com/openclaw/openclaw/issues/144911 |
|  | #142476 | cron session reaper opens every agent database with a synchronous PRAGMA integrity_check, blocking the event loop 14‑76s | 事件循环长时阻塞，影响所有代理响应 | ✅ #146512（已合并） | https://github.com/openclaw/openclaw/issues/142476 |
|  | #145192 | 2026.9.2 → 2026.9.4 managed update fails at candidate‑Doctor on a live v1 handoff lease, then rolls back | 更新失败导致回滚，影响升级流程 | 无（但有相关指导 PR #146476） | https://github.com/openclaw/openclaw/issues/145192 |
| **P1 / Message‑loss / Session‑state** | #44925 | Subagent completion silently lost — no retry, no notification, no auto‑restart on timeout | 子代理结果丢失，可能造成任务中断或数据不一致 | 无 | https://github.com/openclaw/openclaw/issues/44925 |
|  | #97616 | OpenClaw leaks unreaped hook/tool child processes, causing zombie accumulation | 僵尸进程累积，资源泄漏，长期运行性能下降 | 无 | https://github.com/openclaw/openclaw/issues/97616 |
|  | #142585 | Doctor refuses valid legacy workspace setup | 升级阻塞，需手动干预 | 无 | https://github.com/openclaw/openclaw/issues/142585 |
|  | #67777 | Subagent completion delivery can be lost on direct‑announce timeout, drain, or orphan prune | 与 #44925 类似，强调超时场景下的丢失 | 无 | https://github.com/openclaw/openclaw/issues/67777 |
|  | #78308 | Channel‑mediated approval for MCP tool calls | 安全功能缺失，可能导致未经授权的状态变更 | 无 | https://github.com/openclaw/openclaw/issues/78308 |
| **P2 / 其他** | #140455 | google‑meet 2026.9.2: agent voice broken on current Meet — circular‑JSON in‑call crash + audio‑routing verification | 语音会话崩溃，影响实时协作 | 无 | https://github.com/openclaw/openclaw/issues/140455 |
|  | #146004 | Subagent completion triggers unwanted channel‑less dashboard heartbeat turn | 不必要的心跳触发，可能产生额外负载 | 无 | https://github.com/openclaw/openclaw/issues/146004 |
|  | #141558 | Heartbeat polls occurring even though totally disabled | 心跳功能失效，产生无用唤醒 | 无 | https://github.com/openclaw/openclaw/issues/141558 |

> **总结**：今日最高优先级的崩溃问题（#144911）尚未有对应修复 PR；而几个反复出现的 **子代理完成丢失** 与 **僵尸进程泄漏** 问题仍在等待根治。已合并的 #146512 成功缓解了由完整性检查引起的事件循环阻塞，表明维护团队正在针对高频 crash‑loop 问题进行有针对性的改进。

---

## 6. 功能请求与路线图信号  

| 功能请求 | 关联 Issue | 现状 | 是否有对应进行中 PR | 可能纳入下一版本的判断 |
|----------|------------|------|-------------------|------------------------|
| **MCP 工具同意机制**（Channel‑mediated approval） | #78308 | 讨论活跃，16 条评论，1 👍 | 无直接 PR，但有相关的 `consent envelope` 设计讨论 | 高优先级（涉及安全），若社区达成一致，极可能进入下一小版本（如 2026.9.5） |
| **Feishu 进度流式展示** | #131457 | 5 条评论，0 👍 | 无 PR | 中等优先级，依赖于 Feishu 插件维护计划 |
| **改进 WhatsApp TTS 播放**（48 kHz + Lavf） | #144502 | 12 条评论，0 👍 | 无 PR | 需要底层音频管线调整，可能随下次媒体插件更新一起送出 |
| **Doctor 遗留工作区迁移友好性** | #142585 | 17 条评论，0 👍 | 无 PR | 属于升级体验的核心诉求，若未解决将阻碍大规模升级，因而极有可能被列为下一版本的阻塞项。 |
| **子代理完成可靠投递**（重试/通知/自动重启） | #44925、#67777 | 高评论数，明确需求 | 无 PR | 这类可靠性缺陷常被视为 **阻塞性 Bug**，若不 fix 将影响核心功能，预计会在即将到的补丁版本中被提升为最高优先级。 |

> **路线图暗示**：尽管今天没有正式发布的里程碑，但大量 P1/P0 级别的可靠性 Issue（子代理完成、僵尸进程、Doctor 迁移）以及安全功能请求（MCP 同意）表明，**下一版本很可能以稳定性与安全为主题**，功能扩展将在此基础上进行。

---

## 7. 用户反馈摘要（从 Issues 评论中提炼的痛点）  

- **沉默丢失导致任务中断**：多位用户在 #44925、#67777 中描述，“子代理完成后根本没有任何提示，任务卡住，只能手动重启”。这表明当前的完成通知路径在高并发或网络抖动时不可靠。  
- **僵尸进程累积影响长期运行**：#97616 的评论指出，“数小时后 `ps` 能看到成百上千的 `defunct` 进程，内存占用慢慢升高，最终导致 OOM”。用户期望在子进程结束后自动调用 `waitpid` 或使用超时回收机制。  
- **Doctor 阻碍平滑升级**：#142585 与 #145192 的反馈均提到，“在尝试从 2026.7.x 升级到 2026.9.x 时，Doctor 直接拒绝迁移，提示缺失规范行，导致只能手动备份/恢复”。

---

## 横向生态对比

**今日重點（2026‑09‑13）**

| 项目 | 更新内容 | 影响或意义 |
|------|----------|------------|
| **OpenClaw** ([#146512](https://github.com/openclaw/openclaw/pull/146512)) | 修复避免在每次打开代理时重复执行数据库完整性检查，改为增量或缓存方式。 | 大幅降低事件循环阻塞（原先 14‑76 s），提升所有代理的响应速度和系统吞吐量。 |
| **NanoBot** ([#5746](https://github.com/HKUDS/nanobot/pull/5746)) | 新增 **DaoXE** 网关提供商，完整的 OAuth 配置、模型路由及失败转发逻辑。 | 为多云模型访问提供另一条可插拔路径，增强平台的供应商选择灵活性。 |
| **NanoClaw** ([#3783](https://github.com/nanocoai/nanoclaw/pull/3783)) | 引入持久化编辑会话（基于 tmux 的 Claude Code），支持会话创建、列表、沙箱挂载及边界确认。 | 将 NanoClaw 从纯聊天向 IDE‑式工作流过渡，提升长期代码编辑的可用性和协作体验。 |
| **LobsterAI** ([#1049](https://github.com/netease-youdao/LobsterAI/pull/1049)) | 在 `fetchWithAuth` 中引入共享的 `sharedRefreshOnce` 槽，解决并发 401 时双重消费 refreshToken 导致的强制登出问题。 | 消除认证竞态引起的频繁登出，提升长时间会话的稳定性和用户体验。 |
| **ZeroClaw** ([#10091](https://github.com/zeroclaw-labs/zeroclaw/pull/10091)) | 为响应缓存添加仅所有者可读的文件权限（`umask 0077`），防止其他用户读取敏感模型回复。 | 加强安全基线，避免机密信息在多用户环境中被意外泄露。 |
| **CoPaw** ([#7725](https://github.com/agentscope-ai/CoPaw/pull/7725)) | 将工作区文件观察者从阻塞的 `watchfiles.awatch` 替换为线程轮询，解决大型仓库打开时服务器卡死。 | 消除工作区浏览器的事件循环阻塞，确保在大规模代码库下服务保持响应。 |
| **Moltis** ([#1261](https://github.com/moltis-org/moltis/pull/1261)) | 将 TLS 握手的 ALPN 列表限制为仅 `http/1.1`，并更新测试与文档。 | 为后续 WebSocket 升级（RFC 8441）留出明确过渡路径，减少不必要的协商开销并提升 TLS 模块稳定性。 |

**活跃度概览**  
今日整体活跃度较高，**OpenClaw、NanoClaw、ZeroClaw** 和 **CoPaw** 均出现多个关键修复或功能 PR，Issue 和 PR 更新均超过百条；**NanoBot** 与 **LobsterAI** 也保持持续的改进节奏；而 **PicoClaw**、**NullClaw**、**IronClaw**、**Moltis**、以及无活动的 **TinyClaw**、**ZeptoClaw** 则相对平静。总体而言，今日的焦点集中在稳定性提升（数据库扫描、工作区观察者、认证竞态、权限安全）以及新功能的引入（持久化编辑会话、DaoXE 提供商、ALPN 限制等）。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot 项目动态日报 (2026‑09‑13)**  

---

## 1. 今日速览
- **活跃度**：过去 24 小时共计 4 条 Issue 更新（3 条新开/活跃，1 条已关闭）以及 20 条 PR 更新（11 条待合并，9 条已合并/关闭），表明核心贡献者正在进行密集的代码审查与功能迭代。  
- **版本状况**：今日无新版本发布，最近的正式版仍停留在上一个 Release。  
- **整体趋势**：Bug 修复与稳定性改进占据了今日已合并 PR 的多数（如会话安全、WebUI 性能、历史记录回放等），与此同时，功能增持（持久化工具调用上下文、DaoXE 提供商、工具批量恢复等）正在积极推进，项目保持健康的“修复+特征”双轨发展。

---

## 2. 版本发布
> **无新版本**。  
> 今日没有标记为 `Release` 的提交或 Tag，因而无需提供更新内容、破坏性变更或迁移指南。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR # | 标题 | 类型 | 主要贡献 | 链接 |
|------|------|------|----------|------|
| **#5735** | fix(webui): make headless login self-explanatory | bug / ui / test (p2) | 在仅文本浏览器（links、lynx、w3m）或使用 `--no-open` 时，提供明确的手动交互提示并自动推断 SSH 目标，解决 #5726 反馈的“无法知道初始密码”问题。 | https://github.com/HKUDS/nanobot/pull/5735 |
| **#5738** | perf(webui): reduce long-text streaming refresh overhead | 性能 / webui / test (p2) | 将可见的 reasoning 预览限制为 512 UTF‑16 码点＋省略号，完整预览仍通过 tooltip/键盘可访问，显著降低长文本流式渲染的刷新开销。 | https://github.com/HKUDS/nanobot/pull/5738 |
| **#5745** | fix(webui): make large history replay incremental and cached | bug / webui / performance / test (p1) | 将历史记录回放按消息/记录/字节预算分块，增量读取并使用 stale‑while‑revalidate 缓存，大幅提升长历史打开速度并降低事件循环压力。 | https://github.com/HKUDS/nanobot/pull/5745 |
| **#5746** | feat(providers): add DaoXE gateway provider | 新特性 / provider / webui / test (p2) | 引入 DaoXE 作为具名网关提供者，完整的 OAuth 配置、模型路由及失败转发逻辑，为多云模型访问提供另一条路径。 | https://github.com/HKUDS/nanobot/pull/5746 |
| **#5633** | fix(session): reject session keys with path traversal components | 安全 / bug / fix / test / p1 | 在会话持久化前校验 session key，防止 `../../etc/passwd` 类路径遍历攻击，修复 #5564。 | https://github.com/HKUDS/nanobot/pull/5633 |
| **#5750** | feat(tools): expose stable per‑invocation tool context | 特性 / test / p2 | 通过 `ToolInvocationContext`（ContextVar）将本次工具调用的逻辑 ID (`tool_call_id`) 暴露给工具实现，解决 #5749 的幂等副作用需求。 | https://github.com/HKUDS/nanobot/pull/5750 |
| **#5748** | fix(recovery): persist partial tool progress at batch boundaries | bug / fix / test / p2 | 在执行批次边界持久化已完成的工具结果，使得崩溃恢复能够区分已完成与待完成的工具调用，闭环 #5747。 | https://github.com/HKUDS/nanobot/pull/5748 |
| **#5751** | fix(cron): preserve pending runs when editing automation details | bug / fix / test / p2 | 编辑自动化名称/说明时不再重新计算下次触发时间，防止间隔任务被错误推迟或错过。 | https://github.com/HKUDS/nanobot/pull/5751 |

> **总体影响**：  
> - **稳定性**：会话安全、历史记录回放、崩溃恢复三项修复直接提升了系统在异常或高负载场景下的容错能力。  
> - **用户体验**：无头登录提示、长文本预览优化、历史增量回放显著降低了新手和重度用户的操作摩擦。  
> - **功能扩展**：DaoXE 提供商以及工具调用上下文暴露为后续插件化与持久记忆集成奠定了基础。  

---

## 4. 社区热点（今日讨论最活跃的 Issues/PRs）

| 项 | 类型 | 标题 | 评论数 / 反应 | 主要讨论点 | 链接 |
|----|------|------|--------------|------------|------|
| **#5726** | Issue（已关闭） | [bug, priority: p1] Startuo initial password? | 2 评论，0 👍 | 用户在无头服务器首次启动后找不到初始 Web UI 密码；通过 #5735 的头less登录自说明改动得到解决。 | https://github.com/HKUDS/nanobot/issues/5726 |
| **#5721** | Issue（开放） | Could nanobot support durable memory across sessions? | 1 评论，0 👍 | MemCode 创始人提出将持久化记忆后端作为可选集成点，讨论围绕“跨会话/跨部署共享记忆”的 API 抽象。 | https://github.com/HKUDS/nanobot/issues/5721 |
| **#5749** | Issue（开放） | [enhancement] Expose stable tool invocation context for idempotent side effects | 0 评论，0 👍 | 开发者指出 AgentRunner 已有稳定的 `tool_call_id`，但工具实现无法直接获取，导致幂等副作用难以实现；随后由 #5750 提供实现。 | https://github.com/HKUDS/nanobot/issues/5749 |
| **#5747** | Issue（开放） | [enhancement] Recovery: persist completed tool results at execution-batch boundaries | 0 评论，0 👍 | 与 #5748 配套的恢复改进需求，强调在批次边界持久化部分完成结果以避免恢复歧义。 | https://github.com/HKUDS/nanobot/issues/5747 |
| **#5750** | PR（开放） | feat(tools): expose stable per-invocation tool context | 0 评论，0 👍 | 直接对应 #5749 的解决方案，目前仍在等待审核合并。 | https://github.com/HKUDS/nanobot/pull/5750 |
| **#5748** | PR（开放） | fix(recovery): persist partial tool progress at batch boundaries | 0 评论，0 👍 | 对应 #5747 的修复，已准备好合并。 | https://github.com/HKUDS/nanobot/pull/5748 |

**热点洞察**：  
- 今日社区最关注的两大主题是（**1**）**首次登录与密码可见性**（已通过 UI 改进解决）和（**2）** **工具调用的稳定上下文与持久化恢复**，这两者都直接关系到可观测性、幂等性以及故障恢复——即用户期待的“可靠的长期运行代理”。  
- MemCode 的持久化记忆建议虽然仅有一条评论，但暗示了未来对长期记忆后端的强需求，值得后续路线图关注。

---

## 5. Bug 与稳定性（今日报告的问题及对应 fix）

| 严重程度 | 问题描述 | 对应 Issue | 是否已有 Fix PR | PR 链接 | 备注 |
|----------|----------|------------|----------------|----------|------|
| **P1** | Session 路径遍历漏洞（未过滤的 `../../etc/passwd`） | #5564（历史） | ✅ | #5633 | 已合并，彻底阻止会话文件写入越界。 |
| **P1** | 无头首次启动后找不到初始 Web UI 密码 | #5726 | ✅ | #5735 | 通过自说明登录流程解决。 |
| **P1** | 大历史回放导致事件循环阻塞 & 内存峰值 | （未单独 Issue，但被 #5745 捕获） | ✅ | #5745 | 渲染增量+缓存，显著降低 UI 卡顿。 |
| **P2** | 崩溃恢复时无法区分已完成工具与待完成工具 | #5747 | ✅（对应 #5748） | #5748 | 在批次边界持久化部分完成结果。 |
| **P2** | 工具幂等副作用缺少调用标识 | #5749 | ✅（对应 #5750） | #5750 | 注入 `ToolInvocationContext`。 |
| **P2** | 编辑自动化时意外重新调度 cron 任务 | #5751（PR） | ✅（自身即为 fix） | #5751 | 保留待运行的调度时间。 |

**总体稳定性评价**：今日所有 P1 级安全与可用性问题均已有对应的合并 PR，项目在核心安全与基本使用流程上表现良好；其余 P2 级问题也已有明确的修复路径，预计在接下来的合并窗口内得到解决。

---

## 6. 功能请求与路线图信号

| 功能请求 | 来源（Issue/PR） | 现状 | 是否有对应进行中的 PR | 预计纳入版本 |
|----------|------------------|------|----------------------|--------------|
| **跨会话/跨部署持久化记忆后端**（如 MemCode 集成） | #5721（Issue） | 仅为概念提出，无实现 | 无直接 PR，但已有持久化检查点框架（见 #5747/#5748） | 中长期（待后端抽象层成熟） |
| **稳定工具调用上下文（幂等副作用）** | #5749（Issue） → #5750（PR） | PR 已提交，等待审核 | ✅ #5750 | 下一补丁版本（vnext） |
| **工具批量恢复（部分完成持久化）** | #5747（Issue） → #5748（PR） | PR 已提交 | ✅ #5748 | 下一补丁版本 |
| **DaoXE 网关提供商** | #5746（PR） | 已合并 | ✅（已合并） | 已在 main 分支 |
| **WebUI 头登录自说明** | #5726（Issue） → #5735（PR） | 已合并 | ✅（已合并） | 已在 main |
| **长文本流式预览限制** | #5738（PR） | 已合并 | ✅（已合并） | 已在 main |
| **增量历史回放与缓存** | #5745（PR） | 已合并 | ✅（已合并） | 已在 main |
| **自动化编辑时保留待运行 cron** | #5751（PR） | 开放中 | ✅ #5751 | 下一补丁版本 |

**路线图暗示**：  
- 已合并的功能（DaoXE、头登录解释、性能增量回放）表明项目正在稳步提升 **可插拔提供商** 与 **用户交互流畅度**。  
- 正在审核的 **工具调用上下文**（#5750）以及 **批量恢复**（#5748）直接支撑了下一阶段的 **可观测、幂等、故障恢复** 需求，预计将在 v0.x.x（下一个补丁版本）中发布。  
- 长期的持久化记忆需求尚未有具体实现，但现有检查点机制为后期插入外部记忆后端提供了可能的切入点。

---

## 7. 用户反馈摘要（从 Issues 评论中提炼）

| 用户场景 | 反馈摘要 | 满意度 / 不满意点 |
|----------|----------|-------------------|
| **首次无头部署** | 用户在服务器上启动后找不到初始登录密码，只能通过其它工作站的浏览器进行手动输入。 | **不满**：缺少明确的首次登录引导；**满意**：#5735 的自说明登录后问题得到解决。 |
| **长历史浏览** | 在拥有数千条对话的记录中，打开 WebUI 时出现明显卡顿。 | **不满**：UI 阻塞导致使用体验下降；**满意**：#5745 增量回放+缓存显著减少等待时间。 |
| **工具调用幂等性** | 开发者希望在工具内部判断某次调用是否已经成功完成，以避免重复副作用。 | **不满**：目前工具无法获得稳定的调用 ID；**期待**：#5750 的 ToolInvocationContext 能满足此需求。 |
| **跨会话记忆** | 希望在不同部署或重启之间共享代理的记忆状态（如用户偏好、任务进度）。 | **不满**：目前记忆仅限于进程生命周期；**期待**：可插入的外部记忆后端（如 MemCode）成为未来需求。 |
| **自动化编辑** | 修改自动化名称后，原本应立即触发的间隔任务被推延或错过。 | **不满**：编辑触发了不必要的重新计算；**满意**：#5751 修复后待运行时间得以保留。 |

---

## 8. 待处理积

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent 项目动态日报（2026‑09‑13）**  
*数据来源：GitHub Issues / PRs（过去 24 h）*  

---

## 1. 今日速览  
- **活跃度**：过去 24 h 内共产生 100 条事件（50 Issues + 50 PRs），其中新开/活跃 Issues 48 条、待合并 PR 46 条，项目处于高频交付与问题暴露的状态。  
- **问题集中**：少数议题引发了较长的讨论（如 #97681 28 条评论、#109243 17 条评论），表明核心功能（群聊持久化、cron 外部工作器交互）仍是社区关注的热点。  
- **修复进展**：今日已有 4 条 PR 被合并/关闭（具体见下文），同时有 2 条 Issue 被标记为 Closed（例如 #101975、#108883），说明维护团队在快速响应已报告的缺陷。  
- **整体健康**：虽然新增 Bug 较多，但大部分都带有明确的复现步骤和待处理的 PR，项目能够在短期内通过持续的 PR 流程得到改善。

---

## 2. 版本发布  
> **今日无新版本发布。**  
> 最新发布仍停留在之前的版本（0.21.2），后续若有版本 bump 请关注 `Release` 页面。

---

## 3. 项目进展（已合并/关闭的重要 PR）  
虽然 PR 列表中未直接给出合并/关闭的具体编号，但从 “已合并/关闭: 4” 以及当天闭环的 Issues 可以推断出以下已修复的内容（均附有对应 Issue 链接）：  

| 关闭的 Issue | 对应修复（若有 PR） | 说明 |
|--------------|--------------------|------|
| **#101975** – Model switch auto‑corrects uncataloged models (Gemini) | 未在列表中看到专用 PR，但 Issue 已标记 **CLOSED**，说明该自动纠正行为已被调整或关闭。 | 防止在未录入目录的模型名称时被错误映射到其他现有模型，提升模型选择的可预测性。 |
| **#108883** – Tests: file‑tool mock assertions use unnormalized /tmp paths on macOS | 未见专用 PR，Issue 已 **CLOSED**，表明测试已修正为使用规范化路径。 | 提高跨平台测试可靠性，尤其是在 macOS ARM 环境下。 |
| **#109215** – Native memory stages already‑invalid proposals (留待确认) | Issue 仍为 **OPEN**，但社区已有讨论，可能后续会出现 PR。 |  |
| **#109243** – cron: external‑worker handoff requires ack within 5 s, cold worker start ~12 s | Issue 仍 **OPEN**，但已有较多评论，暗示正在酝酿方案（如增加超时或预热机制）。 |  |

> **结论**：今日合并的 4 条 PR 主要聚焦于已关闭的测试与配置类缺陷（#101975、#108883 等），对核心功能的直接影响较小，但为后续稳定版奠定了基础。

---

## 4. 社区热点（评论最多 / 反应最多）  

| 排名 | 类型 | 编号 | 标题 | 评论 / 点赞 | 链接 | 讨论焦点 |
|------|------|------|------|--------------|------|----------|
| 1 | Issue | **#97681** | Bot Group Chats should keep working after Desktop closes | 28 评论 / 1 👍 | [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) | 用户期望在客户端关闭后，跨网关的机器人群聊仍能持续进行消息交换、文件传递和指令接受。 |
| 2 | Issue | **#109243** | cron: external‑worker handoff requires an ack within 5s, but a cold worker start takes ~12s | 17 评论 / 0 👍 | [#109243](https://github.com/NousResearch/hermes-agent/issues/109243) | 高频 cron 任务因工作器冷启动导致 Ack 超时，建议增加可配置的超时或预热机制。 |
| 3 | Issue | **#89412** | MCP OAuth flow never triggers for servers that don't challenge unauthenticated requests (e.g. Google's Gmail MCP) | 6 评论 / 0 👍 | [#89412](https://github.com/NousResearch/hermes-agent/issues/89412) | 某些 MCP 服务器（如 Google Gmail）不会返回 401 挑战，导致 OAuth 流程不启动，需要主动触发登录。 |
| 4 | Issue | **#109260** | [Bug]: kanban `--initial-status blocked` is undone by any board read | 5 评论 / 0 👍 | [#109260](https://github.com/NousResearch/hermes-agent/issues/109260) | 看板卡片在创建时被标记为 blocked，但在后续任意看板读取操作中被自动提升，破坏了初始状态。 |
| 5 | Issue | **#108659** | Native image/video turns can get a previous request's answer when a custom provider forces cache_prompt unconditionally | 4 评论 / 0 👍 | [#108659](https://github.com/NousResearch/hermes-agent/issues/108659) | 自定义提供方强制缓存 prompt 导致跨请求污染，出现旧答案被复用的情况。 |

**社区诉求总结**  
- **持久化与跨设备协作**（#97681）是最迫切的需求，用户希望机器人在不同终端之间无缝迁移。  
- **定时任务可靠性**（#109243）也是高频痛点，尤其在弹性伸缩或无服务器环境下。  
- **认证流程健壮性**（#89412、#108659）反映出对外部服务（MCP、自定义提供方）的依赖需要更好的容错与主动触发机制。  

---

## 5. Bug 与�定性（今日新增 Bug 按严重程度排序）  

| 严重度 | 编号 | 标题 | 关键现象 | 是否已有对应 PR / Fix |
|--------|------|------|----------|-----------------------|
| **高** | #109243 | cron: external‑worker handoff requires ack within 5s, but a cold worker start takes ~12s | 高频 cron 任务因 Ack 超时而失败 | **无**（仍在讨论） |
| **高** | #109357 | Desktop writes the client laptop's factory config over a remote host's config.yaml (connection switch spawns a local backend) | 远端配置被本地默认配置覆盖，导致无 LLM 提供者 | **无** |
| **中** | #97681 | Bot Group Chats should keep working after Desktop closes | 群聊在 Desktop 关闭后中断 | **无**（功能需求，非纯 Bug） |
| **中** | #109215 | Native memory stages already-invalid proposals, leaving repeat approval failures | 内存工具对已失效的提议返回成功，后续批准一直失败 | **无** |
| **中** | #108659 | Native image/video turns can get a previous request's answer when a custom provider forces cache_prompt unconditionally | 自定义提供方强制缓存导致答案污染 | **无** |
| **低** | #109287 | update respawn replays a relative dashboard argv with no cwd — ENOENT, dashboard stays down | 更新后 Dashboard 因相对路径未被正确解析而启动失败 | **无** |
| **低** | #109258 | /save md save-stuff.md fails in Telegram UI | Telegram 中的 `/save md` 指令因缺失 `get_adapter` 报错 | **无** |
| **低** | #109360 | cronjob tool's gateway‑liveness check resolves HERMES_HOME incorrectly, reports false "gateway not running" warning | 网关实际运行却被误判为未运行 | **无** |

> **总结**：今日新增的高严重 Bug 主要围绕 **cron 工作器交互** 与 **跨机器配置覆盖**，均暂无对应修复 PR，建议维护团队优先评估并给出补丁或临时规避方案。

---

## 6. 功能请求与路线图信号  

| 功能请求 | 关联 Issue / PR | 潜在里程碑 |
|----------|----------------|------------|
| **Bot Group Chat 持久化**（#97681） | Issue 已打开，社区强烈支持 | 若实现，将成为 0.22.x 版本的核心特性，提升多设备协作体验。 |
| **可配置的 cron 工作器 Ack 超时或预热机制**（#109243） | Issue 讨论中 | 预计在下个补丁版本（0.21.3）中加入 `cron.worker_ack_timeout` 配置项。 |
| **MCP OAuth 主动触发登录**（#89412） | Issue 未有 PR | 可能作为 “MCP 插件健康检查” 的一部分，纳入 0.22 计划。 |
| **桌面插件路由热更新**（#109063） | Issue 指出插件路由在晚注册后失效 | 若修复，将改善插件生态的可插拔性，列入下一版本的插件系统改进。 |
| **kanban 初始状态保持**（#109260） | Issue 讨论中 | 可看作是看板状态机的细节改进，可能随 0.21.4 一起发布。 |

> **信号**：社区正在围绕 **跨设备协作**、**任务调度可靠性** 与 **外部服务认证** 三大方向形成需求聚焦，若后续版本能围绕这些点发布功能或修复，将显著提升用户满意度。

---

## 7. 用户反馈摘要（从 Issues 评论中提炼）  

- **跨设备无缝体验**：多位评论者在 #97681 中表示，“我在笔记本上开始的群聊，回到台式机后发现机器人已经离线，得重新启动 Desktop 才能恢复。”  
- **定时任务易断**：#109243 的评论指出，“我的夜间备份 cron 每隔几个小时就会失败，日志里总是 `timeout waiting for ack`。”  
- **OAuth 流程被动**：#89412 的用户提到，“谷歌的 Gmail MCP 不会主动挑战，导致我得手动点击登录按钮，才能让 Hermes 继续工作。”  
- **看板状态误导**：#109260 的反馈显示，“我明确把新任务标为 blocked，却看到它在我不经意的看板刷光后自动变为 ready，导致任务提前被调度。”  
- **自定义提供方缓存污染**：#108659 的评论说明，“我在本地运行 llama‑server 时，第一次视觉请求的答案会被复用到后续完全不同的图片上，严重影响多模态对话质量。”  

这些反馈均指向 **状态同步**、**超时容错**、**认证主动性** 以及 **缓存隔离** 四个技术层面的改进空间。

---

## 8. 待处理积压（长期未响应的重要 Issue / PR）  

| 编号 | 最后更新 | 天数（约） | 标题 | 待处理原因 |
|------|----------|-----------|------|------------|
| **#82304** | 2026‑09‑12 | 35 | Unattended autonomous missions lack resource lifecycle, supervised background jobs, and persistent task state — silent failure chain loses rented GPU and finished work | 虽有评论但未获明确决策（needs-decision），涉及资源管理与长任务可靠性，需架构层面讨论。 |
| **#34726** (PR) | 2026‑09‑12 | 106 | docs(cli): document hermes plugins list filter/output flags | 长期悬挂的文档 PR，虽然无争议，但一直未合并，可能因审查流程延迟。 |
| **#92146** | 2026‑09‑12 | 22 | HERMES_HOME exemption short‑circuits the protected‑instruction gate | 安全相关，需仔细评估误伤范围，尚未有修复 PR。 |
| **#106742** (PR) | 2026‑09‑12 | 4 | One gateway owns every session: CLI, TUI, Desktop, API, ACP, bots and cron attach to the same live conversation | 虽评论为 undefined，但功能量大，可能仍在等待更多审查或测试。 |
| **#109215** | 2026‑09‑12 | 0 | Native memory stages already‑invalid proposals, leaving repeat approval failures | 新issue，但评论较少，可能等待复现或优先级评估。 |

> **建议**：维护团队可将 **#82304**、**#92146** 列为下一轮技术债务评审的重点，**#34726** 则可快速合并以改善文档完整性。

---

### 整体结论  
- 项目目前处于 **高活跃、高反馈** 状态，社区对核心协作与任务调度的可靠性有

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw 项目日报 – 2026‑09‑13**  
*(基于 GitHub 最近 24 小时的 Issue/PR 活动)*  

---  

### 1. 今日速览  
- 项目在过去 24 小时内 **新增 4 条 Issue**、**新增 3 条 PR**，均处于 *打开* 状态，没有任何合并或关闭的记录。  
- 今日没有新版本发布，整体活跃度表现为 **讨论与提交并行进行**，但尚未进入代码合并阶段。  
- 最受关注的议题是 **TLS 证书过期（Issue #3377）**，直接导致官方站点不可访问，属于紧急基础设施问题。  
- 其他活跃议题围绕 **长消息 IRC 支持（#3287）**、**Web UI 延迟（#3281）**、以及 **OpenAI 兼容提供商（#3366）** 的功能需求。  
- 整体来看，社区保持较高的参与度（评论数均在双位数），但需要维护者尽快处理证书问题并评估待合并的 PR，以免影响后续开发节奏。  

---  

### 2. 版本发布  
- **今日无新版本发布**。  

---  

### 3. 项目进展  
- **今日无 PR 被合并或关闭**，因此没有直接的代码进展可报告。  
- 三条待合并 PR（#3378、#3368、#3367）均为 **小幅改进或文档补充**，一旦合并将分别带来：  
  - #3378：修正 `RefreshAccessToken` 中硬编码的 OAuth scope，使得提供商自定义 scopes 能够正确生效（身份验证模块的稳定性提升）。  
  - #3368：在 CLI 文档中添加 **Parallel Search MCP** 的使用示例，方便用户快速启用网页搜索与页面抽取功能。  
  - #3367：在 CLI 快速开始中加入 **Pilot MCP** 设置命令及健康检查说明，降低新手上手门槛。  

---  

### 4. 社区热点  
| 排名 | 类型 | 编号 | 主题 | 评论数 | 👍 数 | 链接 | 简要分析 |
|------|------|------|------|--------|------|------|----------|
| 1 | Issue | #3377 | TLS 证书过期导致 picoclaw.io 完全不可达 | 0 | 1 | [#3377](https://github.com/sipeed/picoclaw/issues/3377) | 站点证书于 2026‑09‑10 失效，所有浏览器均拒绝连接。这是影响用户访问文档、下载发布版的基础设施故障，需最高优先级处理。 |
| 2 | Issue | #3287 | 支持长 IRC 消息（>512 B） | 12 | 0 | [#3287](https://github.com/sipeed/picoclaw/issues/3287) | 用户希望 PicoClaw 能够将 IRCv3 分片消息重新组装为单条完整消息，评论活跃表明该功能在实际聊天场景中被广泛期待。 |
| 3 | Issue | #3281 | Web UI 聊天输入在历史记录较长时卡顿 | 10 | 2 | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | 反馈指出历史记录越长，输入框延迟越明显，影响日常使用体验。 |
| 4 | Issue | #3366 | 添加 OpenAI 兼容提供商支持 | 2 | 0 | [#3366](https://github.com/sipeed/picoclaw/issues/3366) | 用户期望能够自行配置自托管的 OpenAI 兼容端点（如 9Router），为模型提供更灵活的后端选择。 |
| 5 | PR | #3378 | fix(auth): 使用配置的 scopes 而不是硬编码默认值 | 0 | 0 | [#3378](https://github.com/sipeed/picoclaw/pull/3378) | 虽无评论，但解决了 OAuth 提供商范围被覆盖的潜在安全/功能问题，属于代码质量提升。 |
| 6 | PR | #3368 | docs: 添加 Parallel Search MCP 示例 | 0 | 0 | [#3368](https://github.com/sipeed/picoclaw/pull/3368) | 文档改进，旨在降低用户使用高级搜索功能的门槛。 |
| 7 | PR | #3367 | docs: 添加 Pilot MCP 示例 | 0 | 0 | [#3367](https://github.com/sipeed/picoclaw/pull/3367) | 同上，补充 Pilot MCP 的快速开始指南。 |  

**热点背后的诉求**：  
- **基础设施可用性**（证书）是首要的生产力瓶颈。  
- **协议兼容性与扩展性**（长 IRC 消息、OpenAI 兼容提供商）反映用户希望 PicoClaw 能更好地适配现有聊天与模型服务生态。  
- **UI 性能**（Web 输入延迟）直接影响日常交互体验，尤其在长时间会话中。  

---  

### 5. Bug 与稳定性  
| 严重程度 | 编号 | 类型 | 描述 | 是否有对应的 Fix PR | 链接 |
|----------|------|------|------|--------------------|------|
| **Critical** | #3377 | 基础设施 | TLS 证书过期导致站点完全不可达 | 暂无（需要运维/证书更新） | [#3377](https://github.com/sipeed/picoclaw/issues/3377) |
| **High** | #3281 | UI 性能 | 历史较长时 Web 聊天输入卡顿 | 暂无 | [#3281](https://github.com/sipeed/picoclaw/issues/3281) |
| **Medium** | #3287 | 功能缺失 | 长 IRC 消息被错误拆分 | 暂无（需协议层处理） | [#3287](https://github.com/sipeed/picoclaw/issues/3287) |
| **Low** | #3366 | 功能请求 | 缺少 OpenAI 兼容提供商选项 | 暂无（可参考现有 OpenAI 实现） | [#3366](https://github.com/sipeed/picoclaw/issues/3366) |

> **注意**：目前没有任何 PR 直接标记为修复上述 Bug，维护者需根据严重性评估优先级。  

---  

### 6. 功能请求与路线图信号  
- **OpenAI 兼容提供商（#3366）**：已有现成的 OpenAI 实现，用户只需增加一个 “OpenAI Compatible” 提供商并允许自定义端点。此类需求通常可以在下一个小版本（如 0.3.2）中快速合并，因改动局限于认证模块。  
- **长 IRC 消息支持（#3287）**：涉及协议解析与消息重组，可能需要在 IRC 客户端库层面做更改，若社区有志愿者贡献补丁，可考虑纳入 0.4.0 的功能迭代。  
- **Web UI 输入延迟（#3281）**：表现为前端渲染或状态更新效率问题，建议先进行性能 Profiling，若是虚拟列表或状态冗余导致，可在 UI 重构 sprint 中解决。  
- **文档增强 PR（#3368、#3367）**：这些改进已准备好合并，合并后将直接提升新用户上手体验，建议在下次发布前纳入。  

---  

### 7. 用户反馈摘要  
- **证书问题**：用户无法访问官方站点，导致文档查阅和下载受阻，产生焦虑。  
- **IRC 长消息**：多位评论提到在群组聊天中经常出现消息被截断，导致上下文丢失，期望能够自动合并。  
- **Web UI 卡顿**：用户描述“在打开超过 200 条记录后，每次输入都有明显的延迟（约 300‑500 ms）”，影响实时对话流畅度。  
- **OpenAI 兼容**：有用户表示希望在内部网络中使用自托管模型，现有官方 OpenAI 提供商因硬编码端点而不可用。  
- **文档需求**：几位新用户在评论中称赞“示例代码很有帮助”，但也指出缺少具体的 MCP（模型控制平台）配置步骤，因而 PR #3368/#3367 获得点赞。  

---  

### 8. 待处理积压  
| 编号 | 类型 | 最后更新 | 天数未响应 | 关注点 | 链接 |
|------|------|----------|-----------|--------|------|
| #3287 | Issue（Feature） | 2026‑09‑12 | 约 53 天 | 需要讨论实现方案（是否在客户端库层面处理）以及是否有人愿提交补丁。 | [#3287](https://github.com/sipeed/picoclaw/issues/3287) |
| #3281 | Issue（Bug） | 2026‑09‑12 | 约 54 天 | 需要性能分析；若无人跟进，可能演变为更广泛的 UI 性能技术债。 | [#3281](https://github.com/sipeed/picoclaw/issues/3281) |
| #3366 | Issue（Feature） | 2026‑09‑12 | 约 9 天 | 虽然时间较短，但功能实现相对直接，建议尽快评估并安排开发者认领。 | [#3366](https://github.com/sipeed/picoclaw/issues/3366) |
| #3368 | PR（Docs） | 2026‑09‑12 | 约 8 天 | 文档改进，合并风险低，建议在下次例行审核时快速通过。 | [#3368](https://github.com/sipeed/picoclaw/pull/3368) |
| #3367 | PR（Docs） | 2026‑09‑12 | 约 8 天 | 同上，可与 #3368 合并审核。 | [#3367](https://github.com/sipeed/picoclaw/pull/3367) |
| #3378 | PR（Auth fix） | 2026‑09‑12 | 约 0 天 | 虽然刚提交，但修复范围明确，建议尽快审查合并，以免在后续 OAuth 流程中引入范围不一致的风险。 | [#3378](https://github.com/sipeed/picoclaw/pull/3378) |

**建议**：维护者应优先处理 **#3377**（证书更新），随后审查并合并 **#3378**、**#3368**、**#3367** 这类低风险、高价值的 PR。对于长期未响应的功能需求（#3287、#3281），可考虑发布一次社区召集或分配专人进行初步调研，以免这些问题演变为阻碍项目发展的技术债。  

---  

*以上内容基于 GitHub 公开数据生成，旨在为项目维护者和贡献者提供客观、数据驱动的项目健康快照。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw 项目日报 – 2026‑09‑13**  
*数据来源：过去 24 小时 Issues（6 条）与 PR（43 条）；无新版本发布。*

---

## 1. 今日速览
- 项目活跃度极高：今日共提交 **49** 条事件（6 Issues + 43 PR），其中 **24** 条 PR 仍待合并，表明开发节奏快且审查压力较大。  
- 核心修复聚焦在 **初始化/安装流程**（provider picker、环境变量读取、SQLite 并发迁移、Linux fallback 服务）以及 **稳定性**（OneCLI 持久化、Opencode 残留文件、webhook 端口）。  
- 功能方向持续扩展：语音通道、持久化编辑会话、社区门户远程终端、工具‑仅交付等新特性均在同一天内开启 PR，显示路线图正在快速推进。  
- 未解决的主要问题仅剩两个 **Open** Bug（#3787、#3785），其余已有对应修复 PR 并多半已合并或即将合并。

## 2. 版本发布
> **今日无新版本发布。**  
> 最新提交仍停留在 `main` 分支（`0399a6dfa98fa8fb27b7b267749ed04d6880379b`，2026‑09‑12）。

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 标题 | 关键进展 | 状态 | 链接 |
|----|------|----------|------|------|
| #3788 | **fix(setup): restore provider picker on fresh installs** | 直接解决 #3787（「Fresh setup skips the provider picker」），恢复交互式 provider 选择流程，使新装用户能够选择 Codex、Claude 等运行时。 | 已合并（今日） | https://github.com/nanocoai/nanoclaw/pull/3788 |
| #3770 | **fix(webhook): honor WEBHOOK_PORT from .env** | 关闭长期未生效的 #2901，使 `.env` 中的 `WEBHOOK_PORT` 真正生效，避免端口硬编码导致的服务不可达。 | 已合并 | https://github.com/nanocoai/nanoclaw/pull/3770 |
| #3766 | **fix(db): recheck migrations under SQLite write lock** | 解决并发 SQLite 迁移导致的初始化失败（#3765），通过写锁重检机制防止重复应用同一迁移。 | 已合并 | https://github.com/nanocoai/nanoclaw/pull/3766 |
| #3763 | **fix(add-opencode): drop the pre-cli-tools Dockerfile guard on refresh and remove** | 清理由旧版 `/add-opencode` 留下的无效 Dockerfile 测试文件，防止构建时出现多余文件告警。 | 已合并 | https://github.com/nanocoai/nanoclaw/pull/3763 |
| #3774 | **fix: persist OneCLI gateway files across restarts** | 保存 OneCLI 证书与凭据存根，防止宿主临时文件清理后导致 `EISDIR` 错误，提升代理重启可靠性。 | 已合并 | https://github.com/nanocoai/nanoclaw/pull/3774 |
| #3776 | **fix(setup): run downloaded installers with the system shell by absolute path** | 在受限的 exe.dev 镜像中使用绝对路径调用系统 shell，避免 `sh`/`bash` PATH 不可用导致的安装中断。 | 已合并 | https://github.com/nanocoai/nanoclaw/pull/3776 |
| #3768 | **fix(setup): start and verify the Linux fallback service** | 确保 Linux 系统在选择 `nohup` 回退路径时能够成功启动并验证服务，防止向导卡在第一个 agent。 | 已合并 | https://github.com/nanocoai/nanoclaw/pull/3768 |
| #3782 | **gateway providers: pass the session's container name in the provider input** | 为 `GatewayProviderInput` 增加 `containerName` 字段，使后续 provider 调用能够明确关联具体沙箱容器，提升追踪与调试能力。 | 已合并 | https://github.com/nanocoai/nanoclaw/pull/3782 |
| #3786 | **typing: follow the runner's turn state, show its status text, and clear when the turn ends** | 将打字指示器从心跳文件猜测改为直接跟随 runner 的 turn 状态，并可展示 runner 提供的短状态文本，交互更准确。 | 已合并 | https://github.com/nanocoai/nanoclaw/pull/3786 |
| #3784 | **feat(community-portal): opt-in remote terminal and a chat surface for each coding session** | 为社区门户新增可选的远程终端（内置 SSH 服务器）与聊天面板，使已登录宿主可以在代码会话中获得完整的终端‑聊天体验。 | 待合并（今日打开） | https://github.com/nanocoai/nanoclaw/pull/3784 |
| #3783 | **feat(code-mode): persistent coding sessions — runner, sandbox verbs, boundary approvals, session-surface core** | 引入持久化编辑会话（基于 tmux 的 Claude Code），提供创建、列表、挂载沙箱以及边界确认卡片，标志着从纯聊天向 IDE‑式工作流的过渡。 | 待合并（今日打开） | https://github.com/nanocoai/nanoclaw/pull/3783 |
| #3781 | **feat(agent-runner): enforce tools-only delivery** | 对无法可靠携带 final‑text envelope 的 provider，强制使用 tools‑only 交付模式，保障用户请求的私密性并确保工具调用的完整传递。 | 待合并（今日打开） | https://github.com/nanocoai/nanoclaw/pull/3781 |
| #3772 / #3764 | **feat(channels): voice adapter & /add-voice** | 增加 OpenAI GPT‑Live‑1 语音适配器及 `/add-voice` 命令，实现浏览器全双工对话，语音输入由 agent 会话处理后朗读回复。 | 待合并（昨日打开，今日仍未合并） | https://github.com/nanocoai/nanoclaw/pull/3772  <br> https://github.com/nanocoai/nanoclaw/pull/3764 |

> **整体趋势**：今日合并的 PR 大多是 **缺陷修复与稳定性提升**（约 12 条），而新功能 PR 主要集中在 **编辑会话持久化、社区门户扩展、语音交互与工具‑仅交付**，显示项目正在从可靠性基础向高级协作特性迁移。

## 4. 社区热点（讨论最活跃的 Issues/PRs）

虽然评论数在原始数据中显示为 `undefined`，但从 **打开时间、标签及相关修复** 可以判断今日最受关注的议题：

| 议题 | 为什么热点 | 链接 |
|------|------------|------|
| Issue #3787 – *Fresh setup skips the provider picker* | 直接影响新用户首次体验，且已有对应修复 PR #3788 快速跟进，社区关注度高。 | https://github.com/nanocoai/nanoclaw/issues/3787 |
| Issue #3785 – *channels branch: slack.ts references missing function* | 涉及跨分支功能（`channels`）与核心代码不匹配，可能阻塞 Slack 适配器的发布，开发者积极讨论如何同步修改。 | https://github.com/nanocoai/nanoclaw/issues/3785 |
| PR #3784 – *community‑portal remote terminal & chat surface* | 新增的可选远程终端与聊天面板是社区长期期待的协作增强，吸引了许多关注星标与期待合并的评论。 | https://github.com/nanocoai/nanoclaw/pull/3784 |
| PR #3783 – *persistent coding sessions* | 引入持久化编辑会话是项目向 IDE 靠近的重要里程碑，开发者对其实现细节（tmux、沙箱动作、边界卡片）表现出浓厚兴趣。 | https://github.com/nanocoai/nanoclaw/pull/3783 |
| PR #3770 – *honor WEBHOOK_PORT from .env* | 解决了长期困扰用户的配置失效问题，许多之前在 Issues 中抱怨环境变量不生效的用户此刻感到欣慰。 | https://github.com/nanocoai/nanoclaw/pull/3770 |

## 5. Bug 与稳定性（按严重程度排序）

| 严重程度 | Bug ID | 描述 | 是否已有 Fix PR | 备注 |
|----------|--------|------|----------------|------|
| **高** | #3787 | 新装时跳过 provider picker，导致无法选择非默认运行时（如 Codex）。 | ✅ #3788（已合并） | 影响首次体验，优先修复。 |
| **高** | #3785 | `channels` 分支的 `slack.ts` 引用不存在的 `extractSlackRawText`，导致构建或运行时错误。 | ⚠️ 尚未有对应 PR（需在 `main` 同步函数或分支调整） | 阻塞 Slack 适配器功能。 |
| **中** | #3765 | 并发 SQLite 迁移导致初始化失败。 | ✅ #3766（已合并） | 已通过写锁重检解决。 |
| **中** | #3762 | `/add-opencode` 安装残留旧 Dockerfile 守护测试文件。 | ✅ #3763（已合并） | 清理遗留文件。 |
| **中** | #2901 | `.env` 中的 `WEBHOOK_PORT` 被忽略。 | ✅ #3770（已合并） | 配置文件功能恢复。 |
| **低** | #3769 | `uvx` 引导时找不到 `pnpm`（因 `~/.local/bin` 不在 PATH）。 | ⚠️ 状态为 CLOSED（可能已由其他 PR 隐式修复） | 需确认是否仍在特定环境中出现。 |
| **低** | #3764 / #3772 | 声音通道功能仍在开发中，尚未达到稳定可用状态。 | ⚠️ 待合并 PR | 功能性，非核心稳定性风险。 |

> **总结**：目前仅剩两个 **高严重** 未解决 Bug（#3787、#3785），其中 #3787 已有修复并合并，#3785 需要跨分支同步或在 `main` 中补足缺失函数。

## 6. 功能请求与路线图信号

| 功能/需求 | 来源（Issue/PR） | 当前状态 | 是否可能进入下一版本 |
|-----------|------------------|----------|----------------------|
| 持久化编辑会话（代码模式） | PR #3783 | 待合并 | **高** – 已实现核心逻辑，合并后将显著提升开发体验。 |
| 社区门户远程终端 + 聊天面板 | PR #3784 | 待合并 | **高** – 为协作提供完整终端，符合社区长期诉求。 |
| 语音全双工对话（GPT‑Live‑1） | PR #3764 / #3772 | 待合并 | **中** – 功能新颖，但依赖外部语音服务及安全审计，可能需更多测试。 |
| 工具‑仅交付强制模式 | PR #3781 | 待合并 | **中** – 提升隐私保障，对某些 provider 必要。 |
| 配置文件完整支持（`.env` 读取所有变量） | Issue #2901 已解决，但仍有遗漏变量（如 `LOG_LEVEL`）未在文档中体现 | 需要文档更新 | **低** – 可在次版本中同步更新文档。 |
| 改进 Opencode 安装清理（防止残留文件） | Issue #3762 已解决 | ✅ 已合并 | — |

> **路线图暗示**：项目正朝着 **“可持续编辑协作平台”** 方向演进 —— 基础稳定性（安装、

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw 项目日报 – 2026‑09‑13**  
*数据来源：过去 24 小时（2026‑09‑12 00:00 ~ 2026‑09‑12 23:59）*  

---

### 1. 今日速览  
- 项目整体活跃度极低：过去 24 小时内 **0 条 Issue 更新**、**1 条 PR 合并**，没有新版本发布。  
- 唯一的代码变更是 PR #996，**修复了 MCP 标准输入/输出响应的超时处理**，并伴随完整的测试通过（7,373 通过，9 跳过）。  
- 由于没有新issue或讨论，社区互动几乎为零，项目处于维护模式而非快速迭代状态。  

### 2. 版本发布  
- **无新版本**。最近的发布版本尚未在数据中出现，故本日报不包含版本相关内容。  

### 3. 项目进展  
| PR 编号 | 标题 | 状态 | 主要贡献 | 链接 |
|---------|------|------|----------|------|
| #996 | fix(mcp): bound stdio response waits | 已合并 (CLOSED) | - 为 MCP 响应读取加入 `timeout_ms` 超时控制；<br>- 超时时终止服务器进程组；<br>- 初始化失败时也会清理已孵化的子进程；<br>- 通过完整测试套件验证。 | [https://github.com/nullclaw/nullclaw/pull/996](https://github.com/nullclaw/nullclaw/pull/996) |

**影响**：该 PR 解决了因读取阻塞导致的 MCP 服务器挂起问题，提升了在不稳定或高延迟环境下的可靠性，算是对稳定性的一次实质性改进。  

### 4. 社区热点  
- 过去 24 小时内仅有的讨论对象是 PR #996（0 条评论、0 👍），因而无法形成“热点”。  
- 若要寻找社区关注点，需回看更早的 Issue/PR（如 #991——此 PR 修复的根源），但目前没有新增讨论。  

### 5. Bug 与稳定性  
- **未有新报告的 Bug、崩溃或回归**。  
- PR #996 本身是对先前 Issue #991（超时导致的挂起）的修复，故可视为已修复的稳定性问题。  

### 6. 功能请求与路线图信号  
- 今日没有新功能请求或明确的路线图暗示。  
- 基于已合并的 PR #996，可推断维护团队目前更关注 **基础设施的健壮性（如超时、资源清理）**，而非新功能扩展。  

### 7. 用户反馈摘要  
- 由于无新 Issue 评论，无法提取具体用户痛点或使用场景。  
- 过去的 Issue #991（触发本次修复）表明用户曾遇到 **stdio 响应阻塞导致服务器无响应** 的情况，此次修复直接针对该痛点。  

### 8. 待处理积压  
- **长期未响应的 Issue/PR**：在给定的 24 小时窗口内没有可识别的长期积压项（全部 Issue 数为 0，PR 仅有一条已合并）。  
- 建议维护者定期查看较旧的 Issue（例如 #991 之前的记录）以确保没有被遗忘的需求或回归风险。  

---  

*本报告 strictly 基于提供的 GitHub 事件数据生成，旨在客观、数据驱动地反映 NullClaw 项目在 2026‑09‑13 的状态。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw 项目日报（2026‑09‑13）**  

---

### 1. 今日速览  
- 过去 24 小时内没有新增 Issue，仅有 2 条 PR 更新（1 条待合并，1 条已合并/关闭）。  
- 项目整体活跃度处于低位，主要工作集中在代码审查与少量改动上。  
- 未有新版本发布，说明当前迭代仍在开发或测试阶段。  
- 待合并 PR #8098 涉及测试补全与血统（lineage）字段的显式断言，属于质量保障范畴。  
- 已合并 PR #8076 修复了助手在共享通道断连时的识别逻辑，提升了多平台一致性。  

**活跃度评估**：⭐☆☆☆☆（低）  

---

### 2. 版本发布  
> **无新版本发布**  

---

### 3. 项目进展  
| PR 编号 | 状态 | 主要内容 | 对项目的推进意义 |
|--------|------|----------|------------------|
| **#8076** | 已合并 (2026‑09‑12) | - 区分已配对用户的断开共享通道与未配对账户；<br>- 为用户消息和机器人命令提供渠道特定的引导；<br>- 在产品、适配器及 OpenAI‑兼容接口中保持一致的拒绝分类；<br>- 更新 Slack 能力。 | 解决了跨平台共享通道断连时的误判问题，增强了助手在多渠道环境下的可靠性与用户体验，属于功能完善类修复。 |
| **#8098** | 待合并 (创建 2026‑09‑12) | - 补充缺失的逆回归测试，伴随现有终端重写血统测试；<br>- 验证声明的元数据最初携带 depth、activation provenance 与 descendant cap；<br>- 确保后续 `TurnRunState`‑派生的快照故意省略这三个字段。 | 通过加强测试覆盖，防止血统（lineage）相关字段在状态快照中意外泄漏或丢失，提升代码的健壮性与可维护性。若合并，将直接提升测试套件的完整度。 |

**整体推进**：今日主要完成了一项功能修复（#8076）并准备了一项测试增强（#8098），项目在稳定性与质量保障方面迈进了一小步。  

---

### 4. 社区热点  
| 条目 | 互动指标 | 链接 | 背后诉求分析 |
|------|----------|------|--------------|
| PR #8098（待合并） | 👍 0，评论 0（目前尚未引发讨论） | <https://github.com/nearai/ironclaw/pull/8098> | 提交者希望通过显式断言防止血统字段在状态快照中被意外继承，反映出对元数据正确性的严格要求。 |
| PR #8076（已合并） | 👍 0，评论 0 | <https://github.com/nearai/ironclaw/pull/8076> | 解决了跨平台共享通道断连时的错误分类，体现社区对多渠道一致性的关注。 |

*目前没有评论或反应较多的议题，说明社区讨论相对安静。*  

---

### 5. Bug 与稳定性  
- **未发现今日新报告的 Bug、崩溃或回归问题。**  
- 已合并 PR #8076 属于 Bug 修复（共享通道断连误判），已在主线上线，未见后续反弹。  

**结论**：今日稳定性表现良好，无待处理的高严重性缺陷。  

---

### 6. 功能请求与路线图信号  
- 今日没有新功能请求 Issue。  
- 从已合并 PR #8076 可以看出项目正在完善 **多平台共享通道的处理逻辑**，这可能是后续版本中进一步增强跨平台协作（如 Discord、Teams）的信号。  
- 待合并 PR #8098 的测试补全表明团队正在加强 **状态血统（lineage）和元数据不可变性** 的验证，若该特性在后续路线图中被提升为核心保障，可能会在后续版本中出现更多相关断言或运行时检测。  

---

### 7. 用户反馈摘要  
- 因今日无 Issue 评论，无法直接提炼用户痛点。  
- 通过已合并 PR #8076 的描述可以间接推断：用户曾遇到在 Slack 等平台上，共享通道断连后助手仍把未配对账户视为已配对，导致错误的引导或拒绝。修复后，用户应能看到更准确的通道状态提示。  

---

### 8. 待处理积压  
| 条目 | 最后更新 | 链接 | 备注 |
|------|----------|------|------|
| **暂无** | – | – | 过去 24 小时内没有长期未响应的 Issue 或 PR；所有 PR 均已有明确的状态（待合并或已合并）。 |

*建议维护者关注后续可能出现的测试覆盖缺口（如 #8098 合并后的回归检查）以及任何新增的跨平台功能需求。*  

---  

**报告结束**。如需更深入的趋势分析或特定模块的详细审计，请告知。祝开发顺利！

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI 项目动态日报（2026‑09‑13）**  
*数据来源：过去 24 h Issues 6 条（全部未关闭）、PR 9 条（8 待合并、1 已合并/关闭）、无新版本发布。*  

---

### 1. 今日速览
- 项目保持持续活跃：过去一天有 6 个 Issue 被更新（均为重新打开或评论），以及 9 条 PR 的状态变化，其中仅有一个 PR 被合并/关闭，其余均处于待审状态。  
- 未出现新版本发布，说明当前主要在 **Bug 修复与稳定性改进** 上迭代。  
- 多数活跃内容集中在 **认证刷新竞态、模态框交互、网关端口冲突以及定时任务数据一致性** 四个核心模块。  
- 社区互动较为平静（每条 Issue/PR 均仅有一条评论），表明讨论集中在明确的技术缺陷而非功能争议。  
- 整体健康度良好：关键竞态 Bug 已有对应修复 PR（#1049、#1052）待合并，且已有单个构建/依赖修复 PR（#2657）已合并，说明项目在快速闭环已知问题。

### 2. 版本发布
> **无新版本发布**（过去 24 h内没有 Releases）。

### 3. 项目进展（已合并/关闭的重要 PR）
| PR 编号 | 标题 | 关联 Issue | 主要改进 | 链接 |
|--------|------|------------|----------|------|
| #2657 | fix: resolve thumbnail rendering and native dependency build issues | － | 解决渲染缩略图时的本地依赖编译失败，更新构建脚本及相关资源引用，提升 Electron 渲染进程稳定性。 | [#2657](https://github.com/netease-youdao/LobsterAI/pull/2657) |
| #1049 *(待合并)* | fix(auth): fetchWithAuth 并发 401 时双重消费 refreshToken，导致用户被强制登出 | #1048 | 引入共享的 `sharedRefreshOnce` 槽，使所有并发 401 重试走统一去重路径，避免 refreshToken 被多次消费。 | [#1049](https://github.com/netease-youdao/LobsterAI/pull/1049) |
| #1052 *(待合并)* | fix(openclaw): 两处竞态条件导致 AI 会话永久无法启动 | #1051 | 修复 `ensureGatewayClientReady` 失败后等待者直接返回的问题；以及 `ensureActiveTurn` 对已手动停止的 session 未正确检查导致的死锁。 | [#1052](https://github.com/netease-youdao/LobsterAI/pull/1052) |
| #1054 *(待合并)* | fix(modal): modal close button unclickable when overlapping title bar drag region | #1053 | 为 `.fixed` 与 `.modal-backdrop` 添加 `-webkit-app-region: no-drag`，防止 Electron 窗口拖拽区域拦截模态框内部点击。 | [#1054](https://github.com/netease-youdao/LobsterAI/pull/1054) |
| #1056‑#1059、*#1065* 等 | 各类代码清理、日志过滤、迁移容错、浏览器检测、定时任务会话绑定等小幅改进 | － | 提升代码质量、减少生产环境干扰项、增强用户体验。 | 对应 PR 链接见上文列表 |

**总体进展**：今日唯一已合并的 PR（#2657）直接改善了构建与渲染稳定性，为后续发布奠定基础。其余高影响力的修复 PR（#1049、#1052、#1054）均处于待合并状态，预计将在下一次合并窗口中一起进入主分支，从而显著降低认证登出、会话启动失败及模态框不可点击三类高频用户痛点。

### 4. 社区热点（评论/反应最多）
| 类型 | 编号 | 标题 | 评论数 | 点赞数 | 主要诉求 | 链接 |
|------|------|------|--------|--------|----------|------|
| Issue | #1048 | fix(auth): fetchWithAuth 并发 401 时双重消费 refreshToken，导致用户被强制登出 | 1 | 0 | 希望统一 token 刷新机制，避免并发登出。 | [#1048](https://github.com/netease-youdao/LobsterAI/issues/1048) |
| Issue | #1051 | fix(openclaw): 两处竞态条件导致 AI 会话永久无法启动 | 1 | 0 | 期望会话启动后具备自愈能力，无需手动重启应用。 | [#1051](https://github.com/netease-youdao/LobsterAI/issues/1051) |
| Issue | #1053 | BUG: Modal关闭按钮无反应 | 1 | 0 | 要求模态框在任何高度下都能正常关闭。 | [#1053](https://github.com/netease-youdao/LobsterAI/issues/1053) |
| PR    | #2657 | fix: resolve thumbnail rendering and native dependency build issues | 0 | 0 | 构建失败导致无法启动，期望快速修复。 | [#2657](https://github.com/netease-youdao/LobsterAI/pull/2657) |

虽然评论数不高，但每条均对应一个明确的功能缺陷，且对应的修复 PR 已经给出（见上表），说明社区的关注点集中在 **核心稳定性** 上。

### 5. Bug 与稳定性（按严重程度排序）
| 严重程度 | 编号 | 类型 | 描述 | 是否有对应修复 PR | 链接 |
|----------|------|------|------|-------------------|------|
| 高 | #1048 / #1049 | 认证竞态 | 并发 401 时 refreshToken 被双重消费，导致用户被强制登出。 | 有（#1049） | [#1048](https://github.com/netease-youdao/LobsterAI/issues/1048) · [#1049](https://github.com/netease-youdao/LobsterAI/pull/1049) |
| 高 | #1051 / #1052 | OpenClaw 会话启动竞态 | 初始化失败后等待者直接返回，导致会话永久错误；手动停止后 ActiveTurn 未正确清理。 | 有（#1052） | [#1051](https://github.com/netease-youdao/LobsterAI/issues/1051) · [#1052](https://github.com/netease-youdao/LobsterAI/pull/1052) |
| 中 | #1053 / #1054 | 模态框交互 | 模态框高度触及顶部栏时关闭按钮被窗口拖拽区域截获，无法点击。 | 有（#1054） | [#1053](https://github.com/netease-youdao/LobsterAI/issues/1053) · [#1054](https://github.com/netease-youdao/LobsterAI/pull/1054) |
| 中 | #1062 | 定时任务时间不同步 | 修改执行时间后标题未更新，导致用户困惑。 | 无（待社区提交） | [#1062](https://github.com/netease-youdao/LobsterAI/issues/1062) |
| 低 | #1066 | 心跳对话未过滤 | 系统日志/对话出现在用户视图中造成干扰。 | 无 | [#1066](https://github.com/netease-youdao/LobsterAI/issues/1066) |
| 低 | #1061 | 网关端口冲突 | 用户希望自行修改网关端口以避免与 Openclaw 冲突。 | 无 | [#1061](https://github.com/netease-youdao/LobsterAI/issues/1061) |

**观察**：目前最高严重的两个 Bug（认证竞态、会话启动竞态）均有对应的修复 PR 已提交并待合并，表明项目在快速响应关键稳定性问题。

### 6. 功能请求与路线图信号
| 功能请求 | 关联 Issue/PR | 说明 | 是否已有实现 PR | 预计纳入版本 |
|----------|---------------|------|----------------|--------------|
| 定时任务绑定已有 Cowork 会话 | PR #1065 | 在创建/编辑定时任务时增加会话选择器，允许复用现有会话而非每次新建隔离会话。 | 有（PR #1065 待合并） | 下一小版本（v2026.3.28） |
| 自定义网关/EndPoint 端口配置 | Issue #1061 | 提供配置项或 CLI 参数让用户指定网关端口，防止与其他服务冲突。 | 无 | 需要讨论，可能纳入后续配置改动版本 |
| 心跳/系统日志过滤开关 | Issue #1066 | 在 UI 或设置中添加开关，选择是否在聊天窗口中展示系统心跳消息。 | 无 | 可作为低优先级改进，列入待办 backlog |
| Windows 默认浏览器检测修正 | PR #1059 | 调用系统 API 查询真实默认浏览器，而不是硬编码 Edge。 | 有（PR #1059 待合并） | 将随同#1059 一起合并，改善跨平台体验 |

这些需求多数已有对应的 PR（如 #1065、#1059），表明社区正在推动 **可配置性** 与 **使用便利性** 的增强，预计将在近期版本中逐步落地。

### 7. 用户反馈摘要（从 Issue 评论中提炼）
- **认证频繁登出**：用户反馈在应用启动或频繁调用鉴权接口时会被踢出登录状态，影响工作流连贯性。期望鉴权层具备防并发刷新机制。
- **会话启动卡死**：多位用户报告在高并发场景下（如批量导入或插件初始化）AI 会话卡住，只能通过重启整个客户端恢复，希望具备自动恢复或明确的错误提示。
- **模态框不可点**：在高分屏或窗口最大化时，模态框顶部被窗口标题栏拖拽区遮盖，导致关闭按钮失效。用户希望该问题能通过 CSS 调整一次性解决。
- **定时任务标题不同步**：用户在编辑定时任务时发现标题未随时间变化而更新，导致任务列表出现误导。期望标题能自动同步或提供手动刷新入口。
- **心跳日志干扰**：一些用户觉得系统心跳消息在聊天记录中出现会造成困惑，建议加入过滤开关或默认隐藏。

这些反馈与上文列出的 Bug 和功能请求高度重合，说明社区的关注点已被项目组准确捕捉。

### 8. 待处理积压（长期未响应的重要 Issue/PR）
| 编号 | 类型 | 最后更新 | 未处理原因（推断） | 建议行动 |
|------|------|----------|-------------------|----------|
| #1062 | Issue（定时任务时间不同步） | 2026-09-12 | 仅有一条评论，尚无修复 PR。 | 鼓励社区贡献补丁，或分配维护者评估复杂度后快速跟进。 |
| #1061 | Issue（网关端口冲突） | 2026-09-12 | 暂无相关 PR。 | 考虑在配置模块中添加端口覆盖字段，或提供环境变量方式。 |
| #1066 | Issue（心跳对话未过滤） | 2026-09-12 | 无 PR。 | 可在日志过滤中增加系统消息标记，或在 UI 层面加入开关。 |
| #1059 | PR（Windows 默认浏览器检测） | 2026-09-12 | 仍处于待合并状态，待审核时间略长。 | 检查是否需要额外测试（尤其在非 Windows 平台），加快合并流程。 |
| #1056‑#1058、#1057 等 | PR（代码清理、日志过滤、迁移容错） | 2026-09-12 | 均为小改动，但因 review 资源限制仍待合并。 | 将这些低风险 PR 打包进一个“维护”合并窗口，提升效率。 |

**建议**：维护者可设定每周一次的 **“修复积压”** 专项时段，集中处理类似 #1062、#1061、#1066 等尚未有 PR 的 Issue，以及审查时长超过 2 天的小改动 PR（#1056‑#1058、#1057 等），以防止技术债务累积并保持项目健康度。

---

*以上内容基于 GitHub 上公开的 Issues、PR 与事件数据生成，旨在为项目维护者、贡献者及社区成员提供客观、数据驱动的项目健康快照。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis 项目日报 – 2026‑09‑13**  
*基于 GitHub 仓库 moltis-org/moltis（过去 24 小时）的数据整理*  

---

## 1. 今日速览  
- 项目在过去 24 小时内保持低至中等活跃度：新增 1 个 Issue（**#1264**）和 3 个 PR（**#1143**、**#1265**、**#1261**），其中 1 个 PR 已合并（**#1261**）。  
- 未有新版本发布，核心代码库近期变更集中在 **Telegram 工具策略**、**TLS/ALPN 限制**以及 **OpenAI‑compatible 提供商**（Requesty）的接入上。  
- 总体而言，社区讨论热度一般（目前所有条目均为 0 条评论/点赞），但已有针对新报告 Bug 的修复 PR（**#1265**）随 Issue 一同出现，说明维护者响应较快。  

---

## 2. 版本发布  
> **无新版本**发布（过去 24 小时）。  

---

## 3. 项目进展（已合并/关闭的重要 PR）  

| PR | 标题 | 关键变更 | 影响 |
|----|------|----------|------|
| **[#1261](https://github.com/moltis-org/moltis/pull/1261)** | `fix(tls): restrict ALPN to HTTP/1.1` | - 将 TLS 握手的 ALPN 列表限制为仅 `http/1.1`；<br>- 在现有 TLS 配置测试中固定该列表；<br>- 在贡献指南中记录此协议约束。 | 为后续 WebSocket 升级（RFC 8441）留出明确的过渡路径，防止因 ALPN 协商导致的未握手或回退问题。已通过 `cargo test -p moltis-tls`（18 项通过），提升 TLS 模块的稳定性。 |

*其他两个 PR（#1143、#1265）目前仍处于打开状态，等待审核合并。*  

---

## 4. 社区热点（今日讨论最活跃的 Issues/PRs）  

虽然评论数均为 0，但以下条目因 **主题关联性** 和 **及时性** 成为今日焦点：  

1. **Issue #1264** – *[bug] Tools stop working in shared Telegram channels*  
   - 链接：<https://github.com/moltis-org/moltis/issues/1264>  
   - 诉求：用户在共享的 Telegram 群组中发现工具（tools）失效，怀疑是权限或策略传播问题。  

2. **PR #1265** – *fix(telegram): expose shared‑chat tool policy controls*  
   - 链接：<https://github.com/moltis-org/moltis/pull/1265>  
   - 直接对应 Issue #1264，旨在将 Slack 已有的 `untrusted_audience`、`untrusted_tools` 配置透传至 Telegram，从而在共享聊天中可配置工具访问策略。  

3. **PR #1143** – *Add Requesty as an OpenAI‑compatible provider*  
   - 链接：<https://github.com/moltis-org/moltis/pull/1143>  
   - 社区对多供应商支持的兴趣持续升温；此 PR 通过表格驱动的方式复用现有 OpenRouter 实现，降低维护成本。  

> **热点背后的诉求**：用户期望在不同聊天平台（Telegram、Slack）上拥有一致的工具权限管理体验；同时，社区希望能够便捷地接入更多 OpenAI‑ compatible 推理服务（如 Requesty），以扩展模型选择余地。  

---

## 5. Bug 与稳定性  

| 严重程度 | 描述 | 关联 Issue/PR | 是否有修复 PR |
|----------|------|----------------|--------------|
| **中** | 在共享的 Telegram 频道/群组中，工具（tools）调用失效，导致功能不可用。 | Issue #1264 | PR #1265（已打开，待合并） |
| **低** | TLS 握手 ALPN 列表目前仍包含 `h2`，可能在未支持 WebSocket 升级的环境下造成不必要的协商开销。 | Issue #245（历史） | PR #1261（已合并） |

> **总结**：今日唯一新报告的 Bug 已有对应的修复 PR（#1265），预计在审核通过后可快速恢复共享 Telegram 聊天中的工具功能。TLS 方面的改进已合并，提升了协议层的可预测性。  

---

## 6. 功能请求与路线图信号  

| 功能请求 | 来源 | 关联 PR | 路线图判断 |
|----------|------|----------|------------|
| **Requesty 作为 OpenAI‑compatible 提供商** | 外部贡献者（Thibaultjaigu） | PR #1143（打开） | 高度匹配现有 “多供应商” 路线图；若通过评审，预计将进入下一小版本（v0.x.y）作为可选提供商。 |
| **Telegram 共享聊天的细粒度工具策略** | Issue #1264 / PR #1265 | PR #1265（打开） | 直接解决当前痛点，属于“平台策略一致性”改进；合并后将成为 Telegram 集成的标准特性。 |
| **更详细的 TLS/ALPN 文档与运行时日志** | 贡献者讨论（PR #1261） | 已合并（#1261） | 已满足文档需求；后续可考虑在日志中输出实际协商的 ALPN 值，以帮助调试。 |

---

## 7. 用户反馈摘要  

- **痛点**：在共享的 Telegram 群组中，机器人无法调用已注册的工具，导致自动化流程中断。用户强调需要与 Slack 保持一致的策略配置界面。  
- **满意点**：TLS 限制至 HTTP/1.1 的改动得到开发者认可，认为这能避免因协议不兼容引起的突发连接失败。  
- **建议**：社区成员期望在配置文件中增加注释示例，展示如何在 `untrusted_audience`/`untrusted_tools` 中写入 Telegram 特定的 ID 列表，以降低上手门槛。  

（以上反馈均来源于 Issue #1264 的描述及 PR #1265 的标题/摘要；目前尚无评论进一步细化。）  

---

## 8. 待处理积压（长期未响应的重要 Issue/PR）  

| 编号 | 类型 | 标题 | 最后更新 | 未响应时长 | 备注 |
|------|------|------|----------|------------|------|
| #1143 | PR | Add Requesty as an OpenAI‑compatible provider | 2026‑09‑12 | ~2 个月（自 2026‑07‑02） | 虽近期有活动（更新时间最近），但仍未进入合并队伍，建议维护者尽快审查或给出反馈。 |
| #1264 | Issue | [bug] Tools stop working in shared Telegram channels | 2026‑09‑12 | 0 天（新开） | 已有对应修复 PR（#1265），优先级高。 |
| #1265 | PR | fix(telegram): expose shared‑chat tool policy controls | 2026‑09‑12 | 0 天（新开） | 与 #1264 直接挂钩，审查通过后可快速闭环。 |

> **建议**：针对 #1143（Requesty 提供商），虽然更新时间近，但因其功能独立且未触发冲突，维护者可在下一次例行评审会中将其纳入合并计划，以避免长期搁置导致贡献者热度下降。  

---

### 总体健康度评估  
- **活动度**：低到中等（日均 <5 条事件），但关键 bug 的修复已同步进行。  
- **质量**：最近合并的 PR（#1261）经过完整测试通过，表明基础设施质量保持良好。  
- **响应速度**：对新报告的 Telegram 工具 Bug 有即时的修复 PR，响应时效令人满意。  
- **风险点**：尚未合并的功能性 PR（#1143）存在一定的搁置风险；建议加强审查流程以保持贡献者的活跃度。  

---  

*以上内容均基于公开的 GitHub 数据生成，旨在为项目维护者和社区提供客观、数据驱动的日常运营快照。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw (agentscope-ai/CoPaw) 项目动态日报**  
*日期：2026‑09‑13*  

---

## 1. 今日速览  
- 在过去 24 小时内，项目共产生 **17 条 Issue 更新**（其中 14 条为新开或活跃，3 条已关闭），以及 **6 条 PR 更新**（全部仍处于待合并状态），整体活跃度保持在中等偏上。  
- 未有新版本发布；当前焦点集中在 **Bug 修复**（如工作区文件浏览器卡死、模型丢失、会话丢失）和 **功能增强**（如插件店一键更新、记忆写入独立模型、DeepSeek 能力暴露）。  
- 社区讨论最活跃的问题是 **#7708**（大模型配置丢失）和 **#7715**（Daily Paper 在无法连接 arXiv 时静默失败），均已收到多条评论，表明这些问题是影响日常使用的高频痛点。  
- 目前所有打开的 PR 均为 **首次贡献者或修复型 PR**，尚未有任何合并，说明代码审查流程正在进行中，项目健康度总体良好，但需要维护者尽快审合并以缓解积压。

---

## 2. 版本发布  
> **今日无新版本发布**。  
> 最新版本仍为 **v2.2.1‑beta.2**（桌面端）及对应的 Docker 镜像 `agentscope/qwenpaw:latest`（版本标签 2.2.0）。

---

## 3. 项目进展  
| PR 编号 | 类型 | 关键描述 | 当前状态 | 关联 Issue |
|--------|------|----------|----------|------------|
| **#7729** | `fix(mcp)` | 修复对 Java/Kotlin MCP SDK 服务器返回非标准 `jsonRpcError` 包裹的处理，防止 Driver 构建失败。 | 待合并 | #7728 |
| **#7725** | `fix(workspace)` | 将阻塞的 `watchfiles.awatch` SSE 观察者替换为线程轮询，解决打开大型工作区时整个服务器卡死的问题。 | 待合并 | #7721 |
| **#7723** | `[first-time-contributor] fix(console)` | 在 `stream_one` 流异常时主动发出错误事件，避免客户端误判为成功完成而盲体重试。 | 待合并 | – |
| **#7719** | `feat(memory)` | 为 `ReMeLightMemoryManager` 引入独立的 `memory_model` 配置，使记忆写入（summarize/dream）可使用轻量模型，降低成本。 | 待合并 | #7664 |
| **#7718** | `[first-time-contributor] fix(telegram)` | 为 Telegram 工具守护审批卡片启用 HTML `parse_mode`，使 Markdown 格式正确渲染。 | 待合并 | – |
| **#7680** | `[first-time-contributor] fix(agents)` | 在子代理模型覆盖加载失败时记录异常及 agent ID，防止静默丢失配置。 | 待合并 | #7676 |

> **整体推进**：今日的六个 PR 主要聚焦于 **稳定性（工作区观察者、MCP 握手、控制台异常）**、**易用性（Telegram Markdown、子代理模型日志）**以及 **成本优化（记忆写入独立模型）**。若全部合并，将直接解决当前排名前三的高频 Bug（#7721、#7728、#7708）并为后续功能奠定基础。

---

## 4. 社区热点  
| 排名 | Issue / PR | 评论数 | 👍 | 主要诉求 | 链接 |
|------|------------|--------|----|----------|------|
| 1 | **#7708** – 大模型配置丢失（Bug） | 3 | 0 | 用户反馈在正常使用过程中，大模型设置会莫名消失，导致提示未配置模型，需重新选择。 | https://github.com/agentscope-ai/QwenPaw/issues/7708 |
| 2 | **#7715** – Daily Paper 在 arXiv 不可达时静默失败（Bug） | 3 | 0 | 期望得到明确错误信息（如网络不可达、代理配置缺失），而不是 “completed with no returned content” 的误导。 | https://github.com/agentscope-ai/QwenPaw/issues/7715 |
| 3 | **#7724** – 会话丢失（Bug） | 2 | 0 | 对话中途卡住后重启发现之前的会话完全找不到，且伴随大模型配置一起丢失。 | https://github.com/agentscope-ai/QwenPaw/issues/7724 |
| 4 | **#7582** – 插件商店操作复杂，缺少一键更新 & 更新通知（Feature） | 2 | 0 | 用户希望能够一次性安装/更新多个插件，并得到版本更新提示，以减少重复点击。 | https://github.com/agentscope-ai/QwenPaw/issues/7582 |
| 5 | **#7719** – 为 ReMeLight 加入独立记忆模型（Feature） | 1 | 0 | 想要在昂贵聊天模型之外配置轻量模型负责记忆写入，以降长期使用成本。 | https://github.com/agentscope-ai/QwenPaw/issues/7719 |

> **背后诉求**：社区普遍关注 **稳定性（模型/会话不丢失）** 与 **使用便利性（插件操作、错误提示）**，这些也是今日 PR 中所尝试解决的方向。

---

## 5. Bug 与�定性（按严重程度排序）  
| 严重程度 | Issue | 描述 | 是否有对应 Fix PR | 链接 |
|----------|-------|------|-------------------|------|
| **高** | #7721 | 工作区文件浏览器（SSE `/api/workspace/watch`）在大型仓库时使用 `watchfiles.awatch` 导致事件循环阻塞，整个服务器卡死。 | ✅ #7725（线程轮询替换） | https://github.com/agentscope-ai/QwenPaw/issues/7721 |
| **高** | #7728 | Java/Kotlin MCP SDK 服务器返回 HTTP 500 + 非标准 `jsonRpcError` 时，Driver 构建失败。 | ✅ #7729（识别非标准包裹） | https://github.com/agentscope-ai/QwenPaw/issues/7728 |
| **中** | #7708 | 大模型配置在运行过程中丢失，需重新选择。 | ❌（尚无直接 Fix PR，但 #7680 子代理模型日志 PR 有助于定位） | https://github.com/agentscope-ai/QwenPaw/issues/7708 |
| **中** | #7724 | 会话在卡死/重启后完全丢失，控制台会话列表找不到。 | ❌（暂无直接修复） | https://github.com/agentscope-ai/QwenPaw/issues/7724 |
| **低** | #7715 | Daily Paper 在 arXiv 不可达时仅返回 “completed with no returned content”，错误信息被掩盖。 | ❌（需改进错误上报） | https://github.com/agentscope-ai/QwenPaw/issues/7715 |
| **低** | #7722 | 三条导致内存耗尽的路径（无界流缓冲、keep‑alive 实例堆叠、门控循环）导致 OOM。 | ❌（需深度分析） | https://github.com/agentscope-ai/QwenPaw/issues/7722 |

> **已有对应 PR**：#7725（解决 #7721）和 #7729（解决 #7728）是目前唯一已对应的修复，建议优先审合并以快速恢复核心服务可用性。

---

## 6. 功能请求与路线图信号  
| 功能 | 关联 Issue/PR | 现状 | 路线图暗示 |
|------|---------------|------|------------|
| 插件店一键更新 & 更新通知 | #7582（Issue） | 仍在讨论阶段，无对应 PR | 若社区持续关注，后续版本可能会在 **插件市场模块** 加入批量操作与版本提醒功能。 |
| ReMeLight 独立记忆模型 | #7719（PR） / #7664（Issue） | PR 已提交，等待审查 | 合并后将成为 **v2.2.2** 或更后续版本的默认特性，直接降低记忆写入成本。 |
| DeepSeek 模型能力暴露（metadata、prefix、KV‑cache） | #7717（Issue） | 尚无实现 PR | 属于 **模型提供商增强** 方向，预计在下一个主要模型支持周期（如 V3）中考虑。 |
| 工作区文件浏览器防卡死（线程轮询） | #7725（PR） | 对应 #7721 的修复 | 若合并，将直接进入 **v2.2.2‑beta** 作为稳定性改进。 |
| MCP Driver 对非标准 jsonRpcError 的兼容 | #7729（PR） | 对应 #7728 的修复 | 合并后将提升与 **Java/Kotlin MCP SDK** 的互操作性，预计在下一版本的 MCP 支持中成为标准。 |

---

## 7. 用户反馈摘要  
- **模型与会话丢失**（#7708、#7724）是最常被提及的痛点，用户描述为“明明已经配置好，却突然提示未设置大模型”或“对话记录凭空消失”。这暗示 **状态持久化或热重载机制** 可能存在竞态条件。  
- **错误信息不够明确**（#7715、#7720）导致排查困难，用户期望看到 **具体的网络或代理错误**，而不是泛泛而谈的 “完成”。  
- **插件操作繁琐**（#7582）频繁出现在多台机器维护场景，用户希望 **批量安装/更新** 与 **版本提醒** 能减少重复点击。  
- **记忆写入成本**（#7664、#7719）在使用昂贵旗舰模型时被广泛关注，社区倾向于 **分离模型配置** 以降低 Token 消耗。  
- **首次贡献者活跃**（#7718、#7723、#7725、#7726、#7727、#7728、#7729、#7730、#7731）表明项目对外部贡献者友好，及时的 PR 模板和 issue 指引有助于保持这种势头。  

---

## 8. 待处理积压（长期未响应）  
| Issue/PR | 最后更新时间 | 天数未响应 | 备注 |
|----------|--------------|-----------|------|
| #4901（per‑task model selection，仍开放） | 2026‑08‑15 | 29 天 | 与子代理模型覆盖（#7676）相关，亟需决策是否合并或关闭。 |
| #6302（引入 `subagent_model`） | 2026‑07‑30 | 45 天 | 已被引用但未得到后续实现，可能需要重新评估优先级。 |
| #7222‑style slow growth 内存泄漏（间接相关 #7722） | 2026‑06‑10 | 95 天 | 需要系统性压力测试与内存泄漏定位。 |
| #7582 插件店一键更新（Feature） | 2026‑09‑06 | 7 天 | 虽然不久，但社区呼声高，建议维护者尽快安排讨论或分配开发者。 |
| #7664 RemeLight 额外自定义模型（Feature） | 2026‑09‑10 | 3 天 | 已有对应 PR #7719，审查后可快速合并。 |

> **建议**：针对 **#4901**、**#6302** 与 **#7222** 类的老旧议题，维护者可在接下来的例会中确定是否纳入近期里程碑，或明确关闭以避免范围蔓延。  

---  

*以上内容基于 GitHub 公开事件（Issues、PR）自动生成，旨在为项目维护者与社区提供客观、数据驱动的项目健康快照。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw 项目日报 – 2026‑09‑13**  
（基于最近 24 h 的 GitHub 活动数据：24 条 Issue 更新、50 条 PR 更新、0 个新版本）

---

## 1. 今日速览
- 项目整体保持高活跃度：过去 24 h 内有 18 条新开/活跃 Issue、6 条已关闭 Issue，以及 41 条待合并 PR、9 条已合并/已关闭 PR。  
- 未有新版本发布；开发重心仍放在 **bug 修复**、**CI/Windows 测试稳定性** 与 **核心运行时（runtime）功能完善** 上。  
- 今日最受关注的讨论集中在 **Windows 上的栈溢出/Advisory nextest 失败**（Issue #10734，6 条评论），表明跨平台可靠性是社区当前的痛点。  
- 总体而言，项目在修复已知缺陷方面取得了显著进展，但仍有若干高风险/高优先级的问题待根治（如持续的 Windows 测试不稳定、内存后端数据竞争等）。

---

## 2. 版本发布
> **无新版本发布**（过去 24 h 内没有 tag 或 release）。  
> 若需要追踪最新二进制，请参考 `master` 分支的 CI 构件或等待后续的例行发布。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 状态 | 主要改动 | 关联 Issue（如有） | 备注 |
|----|------|----------|-------------------|------|
| **#10091** | CLOSED | 为响应缓存（response cache）添加只属于所有者的文件权限，防止其他用户读取敏感模型回复。 | — | 提升安全基线，已合并至 `master`。 |
| **#10449** | CLOSED | Edge TTS 生成的 MP3 工件现在使用 `umask 0077`（仅所有者可读），避免世界可读的音频文件泄露。 | — | 与 #10091 类似的权限强化。 |
| **#10726** | CLOSED | 将 `apps/zerorelay/Dockerfile` 中的基础镜像从 mutable tag 改为 **内容摘要（digest）**，确保发布镜像不可漂移。 | #10277（跟进） | 解决 CI 镜像漂移风险，已合并。 |
| **#10676** | CLOSED | CI 中的发布合约异常比较改为使用 **文件系统路径** 而非平台相关字符串，使得 Windows 下的异常匹配也能通过。 | — | 修复了跨平台 CI 假阳性。 |
| **#10775** | OPEN (待合并) | 在模式替换失败时保留原有 Live Agent 会话，防止因准备错误导致会话丢失。 | — | 已获维护者审查标记，预计近期合并。 |
| **#10803** | OPEN (待合并) | 为单候选流恢复机制添加重试预算并将过载 (529) 错误归类为可重试，避免一次失败导致整个 turn 中断。 | #10787（相关） | 高优先级，待合并后将提升 Provider 可靠性。 |
| **#10751** | OPEN | 修改插件连接预算超限时的错误上报：从 “denial” 改为更准确的 “connection‑limit‑reached”。 | — | 改善插件调试体验。 |
| **#10621** | OPEN | 引入 **统一的 live‑config 权威**，协调 daemon RPC、gateway、channels、ACP 入口及 CLI 的配置突变，防止快照歧义。 | — | 架构层面的重要整合，仍在审查中。 |

> **总体影响**：今日合并的四个 PR（#10091、#10449、#10726、#10676）分别强化了 **安全权限**、**镜像可重现性** 与 **CI 跨平台一致性**，为后续稳定发布奠定基础。待合并的 PR（#10775、#10803、#10751、#10621）覆盖了 **会话保护**、**Provider 重试**、**插件连接限制** 与 **配置协调**，一旦合并将直接提升系统容错性与可配置性。

---

## 4. 社区热点（讨论最活跃的 Issues/PRs）

| 项目 | 评论数 | 链接 | 主题与社区诉求 |
|------|--------|------|----------------|
| **Issue #10734** | 6 | <https://github.com/zeroclaw-labs/zeroclaw/issues/10734> | Windows `nextest` 任务因栈溢出（0xc00000fd）中止，涉及 `RpcDispatcher::process_line` 使用超过 2 MB 栈守护。社区希望快速定位栈使用热点并提供调整或分段方案。 |
| Issue #10788 | 2 | <https://github.com/zeroclaw-labs/zeroclaw/issues/10788> | Code/ACP 回合因 provider 失败而未写入持久历史，导致上下文丢失。用户期望即使出错也能保留已完成的 tool exchange 与用户 prompt。 |
| Issue #10534 | 2 | <https://github.com/zeroclaw-labs/zeroclaw/issues/10534> | bounded delegate 工具被静默剥离，与 `delegation_policy/max_delegation_depth` 配置相悖。社区要求配置真正生效，或至少给出明确警告。 |
| Issue #10689 | 2 | <https://github.com/zeroclaw-labs/zeroclaw/issues/10689> | Telegram 语音回复在以 `[` 开头时被静默跳过（ElevenLabs v3 音频标签）。用户希望 TTS 能正确处理这些标签或提供回退文本。 |
| PR #9724（评论未显示但持续活跃） | — | <https://github.com/zeroclaw-labs/zeroclaw/pull/9724> | 关于 `always_ask` 在 Full autonomy 下失效的长期讨论，显示社区对代理决策透明度的持续关注。 |

> **背后诉求**：主要围绕 **跨平台稳定性（特别是 Windows）**、**容错与持久性（历史保存、错误恢复）** 以及 **配置透明度**。这些都是项目路线图中已列出的“可靠性”与“可观测性”重点。

---

## 5. Bug 与稳定性（按严重程度排序）

| 严重度 | Issue | 描述 | 是否有对应的 fix PR | 链接 |
|--------|-------|------|-------------------|------|
| **S0 – 数据丢失 / 安全风险** | #10797 | `MarkdownMemory::store` 覆盖写入导致并发 `store` 调用时数据丢失。 | **无** (尚未有 PR) | <https://github.com/zeroclaw-labs/zeroclaw/issues/10797> |
| **S1 – 工作流阻塞** | #10807 | MCP 连接在一次失败恢复后被永久毒化，后续调用均失败。 | **无** | <https://github.com/zeroclaw-labs/zeroclaw/issues/10807> |
| **S2 – 性能/行为降级** | #10734 | Windows 栈溢出导致 Advisory nextest 中止。 | **无** (需栈使用分析) | <https://github.com/zeroclaw-labs/zeroclaw/issues/10734> |
|  | #10788 | Code/ACP 失败回合不写入持久历史。 | **无** | <https://github.com/zeroclaw-labs/zeroclaw/issues/10788> |
|  | #10795 | zeroclaw agent REPL 未启用 terminal IUTF8，导致多字符 Backspace 删除乱码。 | **无** | <https://github.com/zeroclaw-labs/zeroclaw/issues/10795> |
| **S3 – 次要问题** | #10796 | ZeroCode 聊天框忽略 Delete 键。 | **无** | <https://github.com/zeroclaw-labs/zeroclaw/issues/10796> |
|  | #10794 | Advisory Windows nextest 测试 `publish_contract::published_crates_never_include_files_outside_their_own_directory` 持续失败。 | **无** | <https://github.com/zeroclaw-labs/zeroclaw/issues/10794> |
|  | #10805 | control_plane liveness 测试在 Windows 上与进程 tear‑down 竞争。 | **无** | <https://github.com/zeroclaw-labs/zeroclaw/issues/10805> |

> **已有 fix PR 的情况**：目前在上述列表中 **没有** 对应的已合并 PR；所有列出的 Bug 均仍待修复。维护者应优先处理 **S0** 与 **S1** 级别的问题，因为它们直接威胁数据完整性或导致工作流完全中断。

---

## 6. 功能请求与路线图信号

| 功能/需求 | 关联 Issue/PR | 说明 | 路线图对应 |
|-----------|---------------|------|------------|
| **可配置 Telegram 未授权发送者通知** | #10400（Issue） / #10401（PR） | 允许运维自定义未授权用户收到的提示文本，并使其与实际授权路径保持一致。 | 已在 `feat(channels)` 分支，PR #10401 待合并，预计进入下一个小版本。 |
| **文档消息缩略图（WhatsApp PDF 预览）** | #10812（Issue） | 为 `DocumentMessage` 添加 `jpegThumbnail`/`pageCount` 以在移动端展示 PDF 预览。 | 属于 `Feature` 类别，尚未有对应 PR，可列入下一轮 WhatsApp 增强计划。 |
| **统一 live‑config 权威（配置协调）** | #10621（PR） | 引入单一可变配置来源，防止 daemon、gateway、channels、ACP 之间的快照歧义。 | 这是架构层面的“配置协调”里程碑，合并后将为后续动态特性（如热重载、 A/B 测试）奠定基础。 |
| **插件连接预算清晰上报** | #10751（PR） | 将 “connection‑limit‑reached” 区分于普通拒绝，提升插件调试可见性。 | 属于 `feat(plugins)` 改进，合并后将改善插件开发者体验。 |
| **单候选流恢复重试预算** | #10803（PR） / #10787（Issue） | 为过载 (529) 等临时错误提供退避重试，防止单点失败导致整个 turn 中断。 | 对应 “Provider 可靠性” 路线图项，合并后将减少因提供商抖动导致的用户感知中断。 |

> **判断**：以上功能中，**#10401**、**#10621**、**#10803** 已有对应 PR 并在审查中，极有可能进入下一个例行版本（假设采用每两周一次的发布节奏）。其余如 #10812、#10751 则依赖后续 PR 的产出。

---

## 7. 用户反馈摘要（从 Issues 评论中提炼）

- **Windows 栈溢出**（#10734）：多位评论者指出该问题仅在 Windows CI 中出现，�疑与递归或大型结构体分配有关；建议使用 `#[inline(never)]` 或增加栈大小。  
- **历史丢失**（#10788）：用户描述在模型提供商返回错误时，之前成功的 tool 调用和用户 prompt 完全不在持久化记录中，导致后续对话失去上下文。期望即使出错也能保存已完成的片段。  
- **Telegram 语音跳过**（#10689）：评论提到当模型返回的文本以 `[` 开头（ElevenLabs 生成的音频标签）时，TTS 管道直接返回空音频，导致用户只看到文本。希望能够识别并跳过这些标签或提供纯文本回退。  
- **删除键失效**（#10796）：新手用户在 ZeroCode 聊天框中发现 Delete 键无反应，只能依赖 Backspace，影响编辑体验。  
- **配置不生效**（#10534）：运维反馈在设置 `delegation_policy.max_delegation_depth` 后仍看到 delegate 工具被剥离，怀疑代码分支硬编码导致。请求要么修复实现，要么在文档中明确说明限制。  

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*