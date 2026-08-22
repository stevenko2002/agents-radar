# OpenClaw 生态日报 2026-08-23

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-22 22:15 UTC

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

# OpenClaw 项目日报 | 2026-08-23

---

## 1. 今日速览

OpenClaw 今日呈现**极高活跃度**：过去 24 小时累计 500 条 Issue 更新（新开/活跃 481、已关闭 19）与 500 条 PR 更新（待合并 415、已合并/关闭 85），但**无新版本发布**。核心关注点集中在 **v2026.8.1-beta.2 发布验证**（Issue #125626，19 条评论）与**多个 P0/P1 级稳定性阻断问题**：事件循环周期性阻塞 100 秒（#124788）、SQLite 频繁损坏（#126821）、子进程泄漏导致僵尸进程累积（#97616）、上下文丢失与会话状态不一致（#67777、#96834、#113701）。社区正密集修复“发布阻断级”回归，同时推进安全策略确认机制（PR #120900、#116489 已合并）、CLI 协作会话展示（PR #128035 已合并）等工程化改进。整体健康度：**处于“高强度修复期”，稳定性风险高，但响应速度快、修复 PR 并行度大**。

---

## 2. 版本发布

> 今日无新版本发布。当前处于 **v2026.8.1-beta.2** 验证阶段（Issue [#125626](https://github.com/openclaw/openclaw/issues/125626)），验证工作表要求真实网关升级测试，预计完成后将切入 RC 流程。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 标题 | 类型 | 影响面 | 状态 | 关键点 |
|----|------|------|--------|------|--------|
| [#128035](https://github.com/openclaw/openclaw/pull/128035) | fix(sessions): show collaboration details in CLI | Bug 修复 | CLI/会话协作 | ✅ **Closed** | 修复 `openclaw sessions` 不显示协作会话的可见性、所有者、参与者字段；JSON 输出同步补全规范字段 |
| [#120900](https://github.com/openclaw/openclaw/pull/120900) | feat(ui): review install policy warnings | 功能/安全 | Control UI/插件安装策略 | ✅ **Closed** | 管理员可在 UI 审查安装策略警告并显式确认继续安装；引入 `acknowledgeInstallPolicyWarning: true` 字段 |
| [#116489](https://github.com/openclaw/openclaw/pull/116489) | feat(security): require acknowledgement for install policy warnings | 安全/核心 | CLI/安全边界 | ✅ **Closed** | 外部 `security.installPolicy` 可返回 `warn`，交互式 CLI 安装需精确输入目标名称确认；含视频演示 |
| [#126424](https://github.com/openclaw/openclaw/pull/126424) | fix(gateway): keep conversation delivery within agent bindings | Bug 修复/安全 | 多 Agent/消息投递/安全边界 | ✅ **Closed** | 修复多 Agent 场景下对话工具可发现/投递越界会话的问题；涉及 Discord/Feishu/Slack/Telegram 等 10+ 渠道 |
| [#126342](https://github.com/openclaw/openclaw/pull/126342) | fix(gateway): record display-cap truncation structurally | Bug 修复 | 网关/聊天投影 | ✅ **Closed** | 聊天显示截断（8k 字符）时在 `session.message` 与 `chat.history` 写入结构化截断标记，替代仅靠长度判断 |
| [#125471](https://github.com/openclaw/openclaw/pull/125471) | fix(models): keep Claude CLI OAuth available in Control UI | Bug 修复 | 模型/OAuth/UI | ✅ **Closed** | 修复网关重启后 Claude CLI OAuth 丢失刷新所有权、UI 显示矛盾的 `anthropic: missing` 行 |

**进展评估**：今日合并 6 个 PR，覆盖 **安全策略确认链路、CLI 协作元数据、跨 Agent 消息边界、聊天截断可观测性、OAuth 持久化**——均为生产可用性与安全边界的关键补强。尚有 415 个 PR 待合并，积压较高，建议优先审核带 `👀 ready for maintainer look` 标签的 10+ 个 PR。

---

## 4. 社区热点（评论/反应最高的 Issues/PRs）

| 排名 | Issue/PR | 标题 | 评论 | 👍 | 核心诉求 |
|------|----------|------|------|----|----------|
| 1 | [#125626](https://github.com/openclaw/openclaw/issues/125626) | Release validation: v2026.8.1-beta.2 | 19 | 0 | **全社区协作验证当前 Beta**；需真实网关升级、填写工作表、通过验证技能提交最终评论 |
| 2 | [#68596](https://github.com/openclaw/openclaw/issues/68596) | Configurable streaming watchdog timeout threshold | 15 | 8 | **长推理模型（kimi-k2.5, DeepSeek-R1）触发 30s 看门狗误报**；需可配置阈值或按模型自适应 |
| 3 | [#96834](https://github.com/openclaw/openclaw/issues/96834) | WhatsApp 1:1 inbound image wedges main lane ~3min | 14 | 1 | **多模态图片注入导致主车道卡死 3 分钟**；复现于 2026.6.10 版本，涉及 `active_reply_work/queued_work_without_active_run` |
| 4 | [#67777](https://github.com/openclaw/openclaw/issues/67777) | Subagent completion delivery can be lost | 12 | 0 | **子 Agent 完成消息在直发超时/排空/孤儿清理时丢失**；优先级 P1，影响会话状态与消息完整性 |
| 5 | [#51429](https://github.com/openclaw/openclaw/issues/51429) | Hardcoded working path `/Users/wangtao` | 12 | 0 | **代码中硬编码开发者个人路径并被合并发布**；导致全新安装自动创建该目录并作为工作区，极度不专业 |
| 6 | [#85030](https://github.com/openclaw/openclaw/issues/85030) | MCP tools not injected into subagent sessions | 12 | 6 | **`sessions_spawn` 完全忽略 `bundle-mcp`/允许列表配置**；子 Agent 仅内置工具，阻断 MCP 生态集成 |
| 7 | [#124788](https://github.com/openclaw/openclaw/issues/124788) | beta.2 gateway: event loop blocks ~100s every ~10 min | 6 | 0 | **P0 级：事件循环每 10.9 分钟阻塞 100-120 秒**；WS 断开、HTTP `/ready` 失效、cron 停摆，禁用所有 memory 插件仍复现 |
| 8 | [#126821](https://github.com/openclaw/openclaw/issues/126821) | SQLite corruption recurs on pristine rebuilt DBs within 15–24h | 5 | 0 | **P0 级：全新重建 SQLite 数据库 15-24 小时内必现 freelist miscount**；含“瘫痪网关”模式（拒绝服务但不退出） |
| 9 | [#123799](https://github.com/openclaw/openclaw/issues/123799) | Need safe upgrade/backport guidance for production affected by Codex compact 404 | 7 | 0 | **生产环境急需运维指导**；受 #123706 影响，当前版本 2026.5.12，需安全升级/回溯路径 |
| 10 | [#117937](https://github.com/openclaw/openclaw/pull/117937) | feat(agents): wire visible-reply loop detection into runtime | — | 0 | **PR 热点**：将可见回复循环检测库接入运行时；需证明材料，标记 `📣 needs proof` |

**热点分析**：
- **稳定性危机占主导**：Top 10 中 7 个为 P0/P1 级 Bug，涉及事件循环、SQLite、子进程泄漏、上下文丢失、多模态卡顿——均为**生产可用性硬伤**。
- **长期遗留未解**：#68596（4 月）、#67777（4 月）、#51429（3 月）、#85030（5 月）跨越 3-5 个月仍未修复，反映维护带宽不足或优先级错位。
- **Beta 验证成社区协作核心**：#125626 评论最多，说明发布质量把关高度依赖社区真实环境测试。

---

## 5. Bug 与稳定性（按严重程度排列）

| 严重度 | Issue | 标题 | 关键症状 | 是否有 Fix PR | 标签/备注 |
|--------|-------|------|----------|---------------|-----------|
| **P0 阻断** | [#124788](https://github.com/openclaw/openclaw/issues/124788) | Event loop blocks ~100s every ~10 min | 周期性全阻塞，WS/HTTP/cron 全失效，禁用插件无效 | ❌ 无 | `P0`, `impact:data-loss`, `impact:crash-loop`, `clawsweeper-recovery-stuck` |
| **P0 阻断** | [#126821](https://github.com/openclaw/openclaw/issues/126821) | SQLite corruption recurs on pristine DBs | 15-24h 必现 freelist miscount，含“拒绝服务不退出”模式 | ❌ 无 | `P0`, `impact:data-loss`, `impact:crash-loop`, `regression`, `WSL2` |
| **P1 严重** | [#97616](https://github.com/openclaw/openclaw/issues/97616) | Leaks unreaped hook/tool child processes | 僵尸进程累积（`openclaw-hooks`, `bash`, `codex`），运行时退化 | ❌ 无 | `P1`, `impact:crash-loop`, `regression`, `clawsweeper-recovery-stuck

---

## 横向生态对比

**今日重點（5‑8 條最重要更新）**

1. **OpenClaw** – 已合併 PR #120900 與 #116489，在 UI 與 CLI 中加入安裝策略警告的確認機制（`acknowledgeInstallPolicyWarning: true` 與精確輸入目標名稱），顯著提升了安全邊界的可控性。  
2. **NanoBot** – PR #4430 已合併，將 `web_fetch` provider 從單一 `useJinaReader` 開關擴展為可配置的 `auto / tavily / jina / readability` 四種模式，使網頁抓取能力更靈活且不再依賴硬編碼。  
3. **NanoBot** – PR #5156 已合併，修復了 Telegram 在網路抖動後靜默停止收訊息的死鎖問題，恢復了長時間運行的 IMAP/Telegram 通道穩定性。  
4. **PicoClaw** – PR #714 已合併，重構技能安裝流程，新增 `repo@branch`、子路徑安裝與 `reinstall` 強制覆蓋子命令，並改用 GitHub Trees API，顯著降低了自定義技能的部署門檻。  
5. **NanoClaw** – PR #3394 與 #3390 已合併，修復 Slack 手動安裝回流與避免重複創建 Slack App 的問題，使多次執行 `setup` 更具冪等性。  
6. **LobsterAI** – PR #1208 已合併，在錯誤提示中內嵌手動重試按鈕，針對 429、網路故障等可重試錯誤提供一鍵重發，改善了在限流或瞬時錯誤下的使用體驗。  
7. **ZeroClaw** – PR #9403 已合併，為所有 WASM 插件導出/導入加入壁鐘超時（`plugins.limits.call_timeout_ms`，預設 30 s），直接解決了插件無限阻塞導致的服務中斷問題。  

**活躍度概覽**  
今日整體社區活躍度較高，特別是 OpenClaw（500 條 Issue/PR 更新）、NanoBot（21 條 PR 更新）、NanoClaw（25 條 PR 更新）、LobsterAI（6 條 PR 更新）以及 ZeroClaw（50 條 PR 更新）貢獻了大量的代碼合併與討論。多個核心項目正在進行安全策略確認、跨平台通訊穩定性以及插件／技能生態的關鍵修復，顯示出社區正集中精力於提升可靠性與易用性。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-08-23）

## 1. 今日速览

NanoBot 项目今日整体活跃度较高，过去 24 小时共有 21 条 PR 更新，其中 7 条已合并或关闭（含修复合入），14 条仍在待合并状态，主要集中在 WebUI 修复、provider 重构、SDK 稳定性等领域。没有新版本发布、没有新开 Issues，也没有 Issue 关闭记录——问题从发现到 PR 修复的周期极短（多数 Bug 类 PR 在当天或次日即提交），说明维护者响应迅速、修复节奏紧。整体项目处于密集的"功能深化 + 稳定性加固"并行推进阶段。

## 3. 项目进展

今日合并/关闭的 PR 覆盖了多个重要方向，推动项目向前迈进了"功能性完善"和"稳定性修复"两步：

- **web_fetch provider 可配置化落地**（[PR #4430](HKUDS/nanobot PR #4430) 已合并）：支持 `auto` / `tavily` / `jina` / `readability` 四种模式，替换了原先的 `useJinaReader` 单一切换，将网页抓取能力从"硬编码"升级为"可配置"。这是一个从 6 月持续到 8 月的长期 PR，今日终于合入，是今日进展中最具功能价值的一项。
- **turn 可观测性统一**（[PR #5486](HKUDS/nanobot PR #5486) 已合并）：每个用户 turn 统一投射到单一 answer 表面，同时保留 reasoning、tool、file-edit 等有序中间片段；合并后保持 activity 展开、完成后折叠，并持久化用户手动展开/折叠的选择——配合 PR #5490、#5491 等系列，WebUI 的交互体验正在系统性收敛。
- **Telegram 静默死锁修复**（[PR #5156](HKUDS/nanobot PR #5156) 已合并，修复 issue #5171）：修复了网络抖动（如代理不稳）后 bot 永久停止收消息但进程存活、日志静默的生产级问题，是今日合入中风险最高的修复项。
- **DeepSeek 消息加固**（[PR #3869](HKUDS/nanobot PR #3869) 已合并）：修复 null content 导致 400、"(empty)" 占位符泄漏、assistant 文本被丢弃三个问题，覆盖 DeepSeek v4-pro/v4-flash。
- **Dream 自学习循环开关**（[PR #3294](HKUDS/nanobot PR #3294) 已合并）：新增 `enabled` kill switch 及自定义 Phase 1/2 模板路径，降低用户定制门槛。
- **README 贡献者体系刷新**（[PR #5488](HKUDS/nanobot PR #5488) 已合并）：呈现维护者 Xubin Ren、Yongru Chen 信息及原生可点击头像墙，社区透明度提升。

整体来看，今日合入集中在"体验统一"与"已知 bug 清理"两个存量问题上。另需注意：待合并的 14 条 PR 明显向"深水区"集中（见第 8 节），下一阶段项目将进入重构与稳定性攻坚期。

## 4. 社区热点

今日 PR 列表中**评论数据未能在数据概览中体现**（评论数与反应数均为空），因此无法基于评论量做量化排名。但从 PR 主题的覆盖密度与参与作者来看，**WebUI turn 体验与 token 计量**是今日最热的话题集群，涉及 3 位作者、至少 5 条 PR：

- [PR #5491](HKUDS/nanobot PR #5491) — 保持回答文本在 reasoning shell 之外（fix）
- [PR #5490](HKUDS/nanobot PR #5490) — 明确聚合 turn 的 token 用量展示（fix + test）
- [PR #5486](HKUDS/nanobot PR #5486) — turn 可观测性统一（已合并）
- [PR #5481](HKUDS/nanobot PR #5481) / [PR #5480](HKUDS/nanobot PR #5480) — 统一的 provider usage 后端与类型化 LLM usage contract（重构）

背后的诉求很清晰：随着 NanoBot 支持多 provider、多 turn（含 tool 往返、retry、fallback），**token 计量和上下文展示出现口径混乱**（多轮 prompt-token 聚合、cache ratio、request context 边界等），社区希望在 UI 层拿到"单次真实请求"的准确数字，而不是被累积值误导。这一系列 PR 体现了用户对计量准确性、可审计性的高敏感度——尤其是付费 API 用户。

另一个热点是 **Mac/Windows 平台上的 IMAP 轮询与 Telegram 长连接稳定性**（PR #5489、#5156），反映出社区对"渠道通道长期运行不失效"的刚需。

## 5. Bug 与稳定性

今日无新增 Issue，但活跃的 Bug 类 PR 展示了当前稳定性战场，按严重程度排列如下：

**高严重度**

- **Telegram 静默停止轮询**（[PR #5156](HKUDS/nanobot PR #5156)，修复 #5171，已合入）：网络抖动后 bot 永久失联且日志静默。已在合入清单中。
- **DeepSeek 400 错误**（[PR #3869](HKUDS/nanobot PR #3869)，已合入）：null content 直接导致 API 400，影响 tool 消息与 user 消息。

**中严重度**

- **删除的 session 被延迟消息重建**（[PR #5483](HKUDS/nanobot PR #5483)，OPEN）：跨 session 延迟消息会在删除后把 session 重新创建出来，属数据一致性问题。
- **ephemeral run 未遵守"不持久化"承诺**（[PR #5471](HKUDS/nanobot PR #5471)，OPEN）：`Nanobot.run(ephemeral=True)` 在实现上实际会改写 session 状态，属于 SDK 文档与行为不一致的隐性 bug。
- **MCP 业务错误误判为成功**（[PR #5484](HKUDS/nanobot PR #5484)，OPEN）：当 MCP 服务器返回 `isError=false` 但内容体含错误载荷（如 `{"code":404,...}` ）时，agent 会误认为工具调用成功并继续。这会导致 agent 基于错误结果向下推理，影响可靠性。

**低严重度 / 外围**

- **MCP 聚合 turn token 用法展示误导**（[PR #5490](HKUDS/nanobot PR #5490)、[PR #5469](HKUDS/nanobot PR #5469)）：UI 展示的是累积值而非单次请求值。
- **LangSmith 追踪丢失**（[PR #5485](HKUDS/nanobot PR #5485)，修复 #2493，OPEN）：LiteLLM→native SDK 迁移后丢失 tracing callback，影响可观测性。

**健康度评估**：所有 Bug 类 PR 均在当日或次日内得到修复 PR，且不少附带了回归测试（#5490、#5483、#5471 均带 test），说明项目的 bug 闭环能力良好。MCP 的 `isError=false` 误判是目前最值得关注的未合入风险项。

## 6. 功能请求与路线图信号

虽然今日没有新 Issues，但结合在途 PR 可以读出下一版本的路线图信号。

**指向"WebUI 自主性提升"的功能正在排队：**

- **follow-up 建议**（[PR #5408](HKUDS/nanobot PR #5408)、#5367 locale 本地化）：对话结束后生成可执行的下轮建议，且实现为 provider 无关、单次请求协议。这与"AI 主动引导用户"的方向一致，且作者（ZhouJ-sh）同时提交了本地化 PR——意味着该项目可能是下一版本的功能亮点，且已做好国际化准备。
- **file preview 深度增强**（[PR #5487](HKUDS/nanobot PR #5487)）：markdown 渲染 + 系统打开 + 路径基准修复，配合 subagent 生命周期回放，指向更完整的审计/回放体验。
- **user-controlled turn recovery**（[PR #5420](HKUDS/nanobot PR #5420)）：WebSocket turn 中断后可显式"继续/放弃"，且不自动恢复、不重复调用模型。这是对"长上下文中断恢复"诉求的正面回应。

**指向"可观测性"的架构级重构（可能进入下一大版本）：**

- [PR #5480](HKUDS/nanobot PR #5480)（typed LLM usage contract）与 [PR #5481](HKUDS/nanobot PR #5481)（unified provider usage backend）是"原生栈 #5482"的一部分，属于多 provider 计量的地基改造，合入后会显著降低后续 UI 适配成本。

**邮箱渠道的持续优化**（[PR #5489](HKUDS/nanobot PR #5489)）：IMAP 轮询先取 header 再做 UID SEARCH 跳过重复拉取，是纯性能优化，预计会稳定合入。

## 7. 用户反馈摘要

由于今日无新 Issues 且 PR 列表中未附有效评论内容，这里只能从 PR 的动机描述中归纳用户侧真实痛点：

- **付费 API 用户的计量焦虑**：PR #5490、#5469、#5481 反复提及 "per-turn cumulative token usage vs. latest request context" 的区分。用户显然在为一个 turn 内多轮 tool 往返的累计 token 买单，却不知道单次实际进入模型的 context 是多少——这是明确的账单透明度诉求。
- **对 invisible failure 的零容忍**：Telegram 静默失联（#5156）、DeepSeek 占位符泄漏（#3869）、MCP 业务错误被当成成功（#5484）——这三类 bug 的共同点都是"程序不报错但行为错误"，说明用户群体对"假成功"格外敏感，也侧面反应 NanoBot 已被用于需要可靠性的生产场景。
- **对 DeepSeek 的深度使用**：#3869 的详细问题描述（null content、占位符、_sanitize_messages 逻辑）说明有用户在真实跑 DeepSeek 的长链路 agent 任务，且对 provider 行为差异有明确感知。
- **会话恢复诉求**：#5420 的作者主动设计"侧车 checkpoint + 显式继续"方案，且明确"绝不自动恢复"，体现了用户对"恢复时机失控"的担忧，以及对数据不丢失的核心诉求。

## 8. 待处理积压

无长期无人响应的 Issues（今日 0 条新开/活跃 Issues），重点提示维护者关注以下几类**已被标记为有 conflict 的长时间在途 PR**，它们合入成本与风险在随时间上升：

- [PR #5408](HKUDS/nanobot PR #5408)（follow-up suggestions，8-17 创建，8-22 仍标 conflict）：功能价值高（指向 WebUI 自主性）但已在管线中停留 5 天且带冲突，建议优先解决冲突。
- [PR #5367](HKUDS/nanobot PR #5367)（agent activity 本地化，8-13 创建，同带 conflict）：10 种 locale 的本地化工作，工作量密集，若长期不动，后续 WebUI 文案持续变化会进一步加大合并难度。
- [PR #5487](HKUDS/nanobot PR #5487)（file preview + subagent 生命周期，同日创建即标 conflict）：与 #5486 合并的 turn observability 改动重叠面大，建议与 #5486 的作者（Re-bin）协同评审，避免两边重复劳动。
- [PR #5469](HKUDS/nanobot PR #5469)（TUI 显示测量 context）：与 #5490（WebUI 同类）可互相验证，建议一并评审后按同一口径合入，避免 TUI/WebUI 展示口径再次分叉。

另外提醒关注架构级 PR 的依赖顺序：[PR #5480](HKUDS/nanobot PR #5480)（LLM usage contract 重构）是被 [PR #5481](HKUDS/nanobot PR #5481) 依赖的栈底，且 #5481 明确注明"Review this after #5480"——若 #5480 评审滞后，将阻塞整条 provider 计量重构链（含 #5482 原生栈目标）。建议维护者将 #5480 列为本周高优先级评审项。

---

*数据来源：HKUDS/nanobot GitHub 仓库，统计时间窗口 2026-08-22 ~ 2026-08-23。所有 PR/Issue 链接以仓库内编号为准。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-08-23)

## 1. 今日速览
项目在过去 24 小时内表现出**极高的开发活跃度**，共有 100 条 Issues 和 PRs 的更新。目前项目处于一个大规模的功能快速迭代与稳定性修复交织阶段，重心明显向 **Desktop 客户端体验优化**、**多配置文件（Multi-profile）鲁棒性**以及**网关（Gateway）稳定性**倾斜。尽管 PR 提交量巨大（49 个待合并），但合并速度相对缓慢，显示出项目目前正处于一个高强度的审核压力期或大型版本发布前的积压期。

## 2. 版本发布
*本周期内无新版本发布。*

## 3. 项目进展
今日合并/关闭的 PR 数量较少（仅 1 个合并/关闭），但通过关闭的 Issues 可以看到一些关键缺陷的解决：
- **环境构建修复**：解决了 TUI 注入 `NODE_ENV=production` 导致 Web UI 构建失败的回归问题 [#65562](https://github.com/NousResearch/hermes-agent/issues/65562)。
- **沙箱安全性**：关闭了关于 Docker 沙箱容器因 Task ID 包含冒号而无法启动的 Bug [#92504](https://github.com/NousResearch/hermes-agent/issues/92504)。
- **技能过滤优化**：修复了 `skills_guard` 误报导致项目技能被错误隔离的问题 [#92446](https://github.com/NousResearch/hermes-agent/issues/92446)。

## 4. 社区热点
- **Skills Index 状态恶化 (最热讨论)**：Issue [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) 评论数高达 77 条。社区高度关注 Skills Hub 的索引更新延迟问题，这直接影响到 Agent 调用外部技能的效率与准确性。
- **DeepSeek 适配问题**：Issue [#83390](https://github.com/NousResearch/hermes-agent/issues/83390) 讨论了 DeepSeek 在执行标题生成任务时返回 HTTP 400 的错误，反映出用户对 DeepSeek 作为主模型的高频使用以及对响应格式兼容性的诉求。
- **部署方案重构 (高优先级)**：Issue [#91277](https://github.com/NousResearch/hermes-agent/issues/91277) 旨在统一本地、远程及镜像管理安装的更新计划，试图解决目前“安装/更新是可靠性最低的功能”这一痛点。

## 5. Bug 与稳定性
按严重程度排序，今日关键 Bug 集中在会话状态与连接稳定性：

| 严重程度 | 问题描述 | 状态/Fix PR | 链接 |
| :--- | :--- | :--- | :--- |
| **P1 (Critical)** | Telegram 会话在多配置文件路由下每轮丢失全部历史 | 待处理 | [#92279](https://github.com/NousResearch/hermes-agent/issues/92279) |
| **P1 (Critical)** | `hermes update` 导致 Web UI 构建失败（tsc not found） | 已关闭 | [#65562](https://github.com/NousResearch/hermes-agent/issues/65562) |
| **P2 (High)** | Desktop 切换 Bot $\leftrightarrow$ Default 配置文件导致 WebSocket 断开 | 待处理 | [#92434](https://github.com/NousResearch/hermes-agent/issues/92434) |
| **P2 (High)** | 内存/上下文扫描器将阿拉伯语/波斯语 ZWNJ 字符误判为注入攻击 | 待处理 | [#92441](https://github.com/NousResearch/hermes-agent/issues/92441) |
| **P3 (Medium)** | Windows 11 HUD 模式下背景不透明，遮挡界面 | 待处理 | [#91459](https://github.com/NousResearch/hermes-agent/issues/91459) |

## 6. 功能请求与路线图信号
从 PR 趋势看，下一版本可能会引入以下特性：
- **视觉能力增强**：支持按模型解析 `supports_vision_tool_messages` [#92538](https://github.com/NousResearch/hermes-agent/pull/92538)。
- **成本管控**：引入配置驱动的 `rate_tier` 及 DeepSeek 实时定价显示 [#91448](https://github.com/NousResearch/hermes-agent/pull/91448)。
- **Desktop 易用性**：Bot 模式下 DM 和群聊的分离显示 [#91213](https://github.com/NousResearch/hermes-agent/pull/91213) 以及更灵活的“添加到聊天”功能 [#92208](https://github.com/NousResearch/hermes-agent/issues/92208)。
- **云端可视化**：为托管 Agent 提供云端浏览器的 noVNC 实时视图，以支持人工接管登录 [#92524](https://github.com/NousResearch/hermes-agent/issues/92524)。

## 7. 用户反馈摘要
- **痛点**：用户对 **安装和更新流程** 的负面反馈强烈，认为目前的操作过于复杂且容易失败（如 `install.sh` 在 Ubuntu 最小化镜像上静默失败 [#87460](https://github.com/NousResearch/hermes-agent/issues/87460)）。
- **体验不满意**：Desktop 端的 UI 细节问题（如右侧栏滚动闪烁、置顶会话数量限制 [#92515](https://github.com/NousResearch/hermes-agent/issues/92515)）影响了专业用户的使用感受。
- **场景需求**：存在将 Hermes 部署为多 Bot 舰队（Fleet）的复杂场景，用户迫切需要更可靠的配置文件路由和身份共享机制 [#91260](https://github.com/NousResearch/hermes-agent/issues/91260), [#91615](https://github.com/NousResearch/hermes-agent/pull/91615)。

## 8. 待处理积压
- **长期未解决的架构需求**：
    - **Typed Config-Runtime Contract** [#28984](https://github.com/NousResearch/hermes-agent/issues/28984)：该请求自 5 月提出，旨在消除配置与运行时之间的静默绑定缺口，对系统稳定性至关重要。
    - **高风险工具执行能力合同** [#55811](https://github.com/NousResearch/hermes-agent/issues/55811)：关于安全机制的统一化需求，仍处于 Open 状态。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-08-23）

## 1. 今日速览

过去 24 小时项目活跃度处于**中等偏上**水平：收到 2 条 Issues 更新、6 条 PR 更新，无新版本发布。当前社区热度高度集中在**稳定性**议题上——两条活跃 Issue（#3269、#3343）均与 Agent 循环挂起/异常导致会话停摆相关，其中 MCP 连接失败导致聊天界面失联的问题已有对应修复 PR #3337 待合并。闭/合并侧表现良好：4 条 PR 完成合并/关闭，覆盖 exec 工具超时、cron 定时任务等多项维护性修复。整体看，项目正处在**修复积压问题、强固稳定性的阶段**，但值得注意 #3337 等重要修复仍处于待合并状态。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日共 4 条 PR 合并/关闭，主要推进了以下方向：

- **[PR #3319] fix(tools): honor exec timeout and boolean run options**（已关闭）
  修复了 `exec` 工具同步执行时忽略单次 `timeout` 参数、`background`/`pty` 被错误声明为字符串的问题，使工具行为与 schema 声明一致。属于重要的工具层正确性修复。
  https://github.com/sipeed/picoclaw/pull/3319

- **[PR #1083] fix(cron): preserve recurring job schedule after execution**（已关闭）
  修复循环 cron 任务（`every_seconds`/`cron_expr`）执行一次后静默退化为一次性任务的回归，恢复了定时任务的反复调度能力。对应 Issue #1043。
  https://github.com/sipeed/picoclaw/pull/1083

- **[PR #714] skills: install/reinstall CLI and refactor into skillsCmd**（已关闭，enhancement/skill）
  重构技能安装流程，新增 `ParseInstallSpec`、`InstallFromGitHubEx` 等能力，支持 `repo@branch` 及可选子路径安装，并新增 `reinstall` 强制覆盖子命令。生产安装改用 GitHub Trees API 拉取完整目录。
  https://github.com/sipeed/picoclaw/pull/714

- **[PR #1545] fix: merge PR #1500 #1490 #1488 #1487 #1485**（已关闭）
  批量合并 5 个公开 PR 的修复内容。
  https://github.com/sipeed/picoclaw/pull/1545

**小结**：今日合并重点在工具执行正确性、任务调度稳定性与技能管理能力，项目在"可靠性修补 + 技能生态建设"双线推进。

## 4. 社区热点

- **[Issue #3269] MCP 服务器连接失败导致 agent loop 挂起**（评论 6，👍 1，标记 stale）
  今日最受关注的议题。现象：MCP 服务器连接异常后，`AgentLoop.Run` 传播错误并退出，导致 Picoclaw 聊天界面彻底停止响应，用户直到进程重启前都无法继续对话。该议题自 7 月 20 日提出，持续发酵至今。
  https://github.com/sipeed/picoclaw/issues/3269

- **[Issue #3343] 工具反馈动画无限编辑 Telegram 消息**（新开）
  触发场景：agent 回合失败后，动画仍在持续调用 Telegram `editMessageText`，每 3 秒一次、连续数天累积 **228,000+ 次**编辑尝试，最终触发 Telegram 服务端 `retry_after` 限流。反映了失败路径缺乏终止保护的问题。
  https://github.com/sipeed/picoclaw/issues/3343

**背后的诉求**：两条热点背后共同指向"Agent 运行环境不可靠时，系统需具备优雅降级能力"——无论是外部依赖（MCP）还是第三方 API（Telegram），社区希望 PicoClaw 在失败时能妥善兜底而非失控或静默停摆。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue/PR | 问题描述 | 修复状态 |
|---|---|---|---|
| 🔴 严重 | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP 连接失败 → agent loop 挂起 → 聊天界面停止响应，用户失联 | 已有对应修复 **[PR #3337](https://github.com/sipeed/picoclaw/pull/3337)**（待合并，见下） |
| 🟠 较高 | [#3343](https://github.com/sipeed/picoclaw/issues/3343) | Telegram 消息编辑动画无限循环，228,000+ 次调用触发限流 | 暂无修复 PR |
| 🟡 中等 | [#3319](https://github.com/sipeed/picoclaw/pull/3319) | exec 工具忽略单次 timeout、布尔选项类型错误 | ✅ 已合并/关闭 |
| 🟡 中等 | [#1083](https://github.com/sipeed/picoclaw/pull/1083) | 循环 cron 任务执行一次后退化为一次性 | ✅ 已合并/关闭 |

值得重点关注的是 **[PR #3337] Fix/mcp failure hangs agent loop**——它正是针对 #3269 的修复，通过调整 `ensureMCPInitialized` 出错时的错误传播逻辑，避免 `AgentLoop.Run` 直接退出。该 PR 于 8 月 14 日创建，**今日仍处于待合并状态**（已标记 stale），建议维护者优先推进。
https://github.com/sipeed/picoclaw/pull/3337

## 6. 功能请求与路线图信号

- **技能安装/重装 CLI 能力落地**（[PR #714](https://github.com/sipeed/picoclaw/pull/714) 已合并）：支持 `repo@branch`、子路径安装与强制重装，配合此前的安装报错提示优化，说明**技能生态是近期明确投入方向**，社区定制技能的使用门槛正在降低。
- **DeltaChat 通道深度清理**（[PR #3222](https://github.com/sipeed/picoclaw/pull/3222) 待合并）：重构 200 行冗余，移除旧特性与密码邮箱配置、改为引用官方 relay 列表、新增 `join_invite_link`/`show_invite_link`，并在文档中补全 DeltaChat 章节。若合入，将提升非主流通道的维护质量，或可视为"多通道支持走向规范化"的信号。
- **稳定性诉求可能催生新能力**：今日两起挂起/失控类 Bug（#3269/#3343）很可能推动线路图上增加"运行期故障熔断/重试保护"与"第三方 API 调用限流护栏"相关设计。

## 7. 用户反馈摘要

- **可靠性是核心痛点**：从 #3269 的 6 条评论可看出，用户对"部署 MCP 后聊天界面失联、必须重启进程才能恢复"的体验非常不满——这在生产使用场景中是不可接受的，也解释了该 Issue 获得最多互动的原因。
- **失败处理需要更稳健**：#3343 揭示出动画层缺少"回合是否仍在推进"的检测，用户侧面反映出对长时间无人值守运行下资源浪费（22 万次 API 调用、触发限流）的担忧。
- **积极的信号**：#3343 作者以技术细节翔实（版本、计数、限流参数）的方式汇报问题，说明社区用户愿意配合复现；同时 cron、exec 等修复的快速合并，也给用户带来"反馈能及时得到响应"的信心。

## 8. 待处理积压

以下需维护者优先关注：

- **[PR #3337]** 修复 #3269 关键挂起问题的补丁，自 8/14 创建、已标记 stale，**建议尽快审查合并**——这是当前最影响用户体验的已知 Bug。
  https://github.com/sipeed/picoclaw/pull/3337

- **[PR #3222]** DeltaChat 实现清理重构，7/3 创建，已静默约 2 个月。属于功能性重构（含文档与 API 变更），长期搁置可能导致后续合并冲突，建议明确合并或关闭。
  https://github.com/sipeed/picoclaw/pull/3222

- **[Issue #3269]** 虽然已有修复 PR，但 Issue 本身已 stale 且讨论持续更新（8/22 仍有动态），需在 #3337 合并后及时验证并关闭，防止用户困惑于进展状态。
  https://github.com/sipeed/picoclaw/issues/3269

- **[Issue #3343]** 新开、影响较广（Telegram 限流），目前无对应修复，建议尽快 Triage 并指派责任人，避免步 #3269 后尘陷入长期搁置。
  https://github.com/sipeed/picoclaw/issues/3343

---

**项目健康度总结**：闭环效率尚可（今日 4 条 PR 完成合并，含 2 条 Bug 修复），但两条核心稳定性问题（#3269/#3343）仍未收敛，且关键修复 PR #3337 处于 stale 待合状态。建议当日优先事项：①合并 #3337 修复挂起问题；②为 #3343 建立修复计划；③清理 #3222 的搁置状态。整体项目处于"维护密度上升、稳定性目标明确"的健康活跃期。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw 项目动态日报（2026‑08‑23）**  
*数据来源：过去 24 小时 Issues（1 条）与 PR（25 条），无新版本发布。*

---

## 1. 今日速览  
- 项目今天保持 **高活跃度**：25 条 PR 有更新，其中 8 已合并/关闭，17 仍待审查；仅有一条新开 Issue（#3453）。  
- 主要工作集中在 **Telegram 与 Slack 集成的稳固化**、**CLI 测试环境的兼容性**，以及 **依赖构建优化**（移除 `better-sqlite3` 的源码编译）。  
- 未发现重大回滚或阻塞性问题，整体健康度良好。

## 2. 版本发布  
> **无新版本发布**。  
> 本次迭代尚未产生可公开的版本 tag，所有变更均在开发分支中累积。

## 3. 项目进展（已合并/关闭的重要 PR）  

| PR | 标题 | 关键改进 | 链接 |
|----|------|----------|------|
| #3394 | **[core-team] fix(slack): working manual‑install fallback, delivered to the requester** | 修复了 Slack 工作空间在受应用批准策略阻止时的手动安装回流，使得 `redirect_uri` 能够通过验证，恢复了因代理创建导致的死锁。 | https://github.com/qwibitai/nanoclaw/pull/3394 |
| #3390 | **[core-team] fix(setup): skip Slack auto‑provisioning when a bot is already saved** | 在重新运行 setup 时检测已有 `SLACK_BOT_TOKEN`，避免为同一 agent 名称重复创建第二个 Slack 应用。 | https://github.com/qwibitai/nanoclaw/pull/3390 |
| #3445 | **Closing: wrong repository** | 错误地提交到了上游仓库，已立即关闭，无代码变更。 | https://github.com/qwibitai/nanoclaw/pull/3445 |
| #3443 | **[core-team] build: drop better‑sqlite3 from onlyBuiltDependencies — use its bundled prebuilds** | 去掉了对 `better-sqlite3` 的源码编译依赖，改为直接使用其随 npm 包提供的预构建二进制，加速 `pnpm install` 并在 CI 中避免 node‑gyp 失败。 | https://github.com/qwibitai/nanoclaw/pull/3443 |
| #3444 | **[core-team] fix(upgrade-state): accept a version‑matching marker when Git cannot identify the checkout** | 在无法获取完整 Git 身份（如镜像或浅克隆）时退化为仅基于版本号的升级检测，并记录警告，防止误判导致的升级循环。 | https://github.com/qwibitai/nanoclaw/pull/3444 |

**整体影响**：  
- Slack 相关的安装与配置流程更加健壮，减少了人工干预。  
- 构建速度和可靠性提升，特别是在使用 pnpm 的 CI 环境中。  
- 升级状态检测更具容错性，为后续自动化升级奠基。

## 4. 社区热点（讨论最活跃的 Issues/PRs）  
- 今日 **没有任何 PR 或 Issue 拥有可追踪的评论或反应数**（所有条目均显示 `undefined`），因而社区讨论相对安静。  
- 唯一的开放 Issue **#3453** 虽无评论，但因其直接影响测试稳定性，值得关注。  

> 链接：https://github.com/qwibitai/nanoclaw/issues/3453

## 5. Bug 与�定性  

| 编号 | 类型 | 严重程度 | 描述 | 是否有对应 fix PR |
|------|------|----------|------|-------------------|
| #3453 | 测试失败（Node 25+） | 中等 | `src/cli/stdin-json.test.ts` 与其 e2e 测试断言子进程的 stderr 只能包含预期输出。Node 25+ 的 `tsx` 加载器触发 `module.register()` 警告，导致 stderr 额外输出，使断言失败。 | 暂无直接 PR；预计需要更新测试断言或在 CI 中抑制该警告。 |

**建议**：在测试文件中加入对 Node 版本的条件判断，或在 `package.json` 的 `engines` 中明确排除 Node 25+ 直至修复。

## 6. 功能请求与路线图信号  

今日合并与待审 PR 中透露出以下正在进行或即将到来的功能方向：

| 功能 | 关联 PR | 说明 |
|------|---------|------|
| **Telegram 多实例支持** | #3438、#3437、#3435、#3434、#3431 | 向导将在已有一个 Telegram bot 时提供 “添加另一个 Telegram bot” 选项，并在配置、初始化及欢迎界面中透传 adapter 实例。 |
| **Telegram 广播频道身份信任** | #3450 | 让频道自身的 `sender_chat` 被视为合法发送者，防止因匿名广播触发未知发送者审批。 |
| **Telegram `allowed_updates` 显式声明** | #3449 | 在轮询时显式传递 `allowed_updates` 参数，防止因服务器端缓存导致的帖子丢失。 |
| **群组范围自动填充参数警告** | #3448 | 当群组范围自动填充 `agent_group_id` 与 `group` 等参数时，若用户显式提供冲突值则给出警告，以避免静默覆盖。 |
| **自动剔除机器人/webhook 发送者** | #3446 | 在未知发送者门槛中直接丢弃来自机器人或 webhook 的消息，防止不必要的审批卡片。 |
| **Cursor Agent 集成** | #3355、#3356 | 添加 Cursor Agent 作为提供者的 SKILL 与对应 SDK 有效载荷，为 IDE 级 AI 操作铺路。 |
| **Slack 自动装配防重复** | #3390（已合并） | 防止重复创建 Slack App，提升多次运行 setup 的幂等性。 |

这些变更表明项目正朝着 **多平台多实例支持**、**更智能的身份鉴别** 与 **开发者工具链集成** 方向发展。

## 7. 用户反馈摘要  
- 因今日评论为空，无法直接引用用户言语。  
- 从 Issue #3453 的描述可推断：**使用较新 Node 版本的开发者在运行测试时会遇到误报**，这表明社区对测试稳定性和跨 Node 版本兼容性有较高期待。  
- 各项集成 PR（尤其是 Telegram 与 Slack）的频繁出现，暗示用户在 **即时通讯渠道的可靠性与多实例管理** 上有强烈需求。

## 8. 待处理积压（长期未响应的重要 Issue/PR）  

| 编号 | 类型 | 创建时间 | 未处理时长 | 备注 |
|------|------|----------|------------|------|
| #3385 | [core-team] fix(approvals): MPDM‑aware approval cards | 2026‑08‑20 | 3 天 | 尚未收到评论，涉及 Slack 群组 DM 的同意卡展示，可能影响团队协作场景。 |
| #3355 | feat(setup): add /add-cursor agent provider skill | 2026‑08‑19 | 4 天 | Feature skill，等待审核；若合并将带来新的提供者能力。 |
| #3356 | feat(providers): add Cursor Agent SDK payload | 2026‑08‑19 | 4 天 | 与 #3355 配套，同上。 |
| #3394 / #3390 | 已合并，但相关的跟踪 Issue 未见 | – | – | 建议在合并后检查是否有后续影响（如回归测试）。 |

> 建议维护者优先审查 #3385（涉及核心交互体验）以及尚未合并的功能技能 PR，以防止功能迟滞。

---

**总结**：今日 NanoClaw 在依赖优化、集成稳固性及功能扩展方面取得了显著进展，唯一的测试失败 Issue 需要关注以保证 CI 在较新 Node 版本上的可靠性。项目保持活跃且方向明确，后续若能及时处理积压的功能与修复，将进一步提升用户体验与系统健壮性。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw 项目日报（2026‑08‑23）**  
*数据来源：近 24 小时 Issues（11 条）和 PR（22 条）更新；无新版本发布。*

---

## 1. 今日速览
- 项目保持高活跃度：过去 24 小时内新增/活跃 Issue 7 条，已关闭 Issue 4 条；PR 新增 17 条待合并，已合并/关闭 5 条。  
- 未有正式版本发布，但已有多项功能与稳定性改进进入合并队列（如通知系统、UI 去重、时区健壮性等）。  
- 讨论相对集中在性能/成本（#7824）和新用户引导体验（#7815、#7812、#7816）上，整体issue评论量仍较低，表明社区反馈主要通过 issue 描述而非长篇讨论。

## 2. 版本发布
> **无新版本发布**（过去 24 小时内没有打标签的 Release）。

## 3. 项目进展（今日合并/关闭的重要 PR）
| PR | 标题 | 关键贡献 | 状态 | 链接 |
|----|------|----------|------|------|
| #7700 | feat(notifications): publish authoritative run outcomes | 将运行结果通知从交付观察者迁移到经过 Process Journal 验证的可靠来源，仅在助手回复持久化后发布，排除前台及子运行。 | **已合并** | https://github.com/nearai/ironclaw/pull/7700 |
| #7773 | refactor(webui): remove duplicate Settings and Extensions tabs | 删除未使用的 Settings/Extensions 标签页及其重复路由元数据，保持 UI 结构简洁。 | **已合并** | https://github.com/nearai/ironclaw/pull/7773 |
| #7774 | test(webui): make automation presenter date assertions timezone-robust | 将 Automation presenter 的日期断言从硬编码 UTC 改为基于浏览器本地化格式，增加 Asia/Shanghai 等时区的测试覆盖。 | **已合并** | https://github.com/nearai/ironclaw/pull/7774 |
| #7772 | fix(webui): surface extension setup phase and blockers in Configure | 通过 `useExtensionSetup` 把权威的 extension `phase` 和 `blockers` 透传到配置表单，确保所有阻塞因素可见。 | **已合并** | https://github.com/nearai/ironclaw/pull/7772 |
| #7076 | Install the packages the catalog already publishes | （已关闭未合并）尝试在 CI 中安装目录已发布的包，但因后续依赖变更被搁置。 | **已关闭** | https://github.com/nearai/ironclaw/pull/7076 |

**整体影响**：  
- 通知系统的可靠性提升为后续自动化运维奠定基础。  
- UI 去重与时区健壮性直接改善了用户在不同地区的体验，减少了误导性提示。  
- extension 配置透明度提升，降低了因未展示阻塞项而导致的配置失败。

## 4. 社区热点（今日讨论最活跃的 Issues/PRs）
| 项目 | 评论数 | 主要讨论点 | 链接 |
|------|--------|------------|------|
| #7824 – Context projection: Pi‑style compaction barrier, structured summaries, overflow recovery | 2 条 | 讨论围绕 **Token 消耗激增**（227.7M vs 55.1M）以及是否引入分层压缩/溢出恢复机制。 | https://github.com/nearai/ironclaw/issues/7824 |
| #7815 – Onboarding suggestions: cumulative net‑new work to close the connect → suggest → thread flow | 1 条 | 关注如何在引导流程中累计新增工作项，使建议更贴近用户实际进度。 | https://github.com/nearai/ironclaw/issues/7815 |
| #7825 – Sandbox egress auth: native iron‑proxy recipes with host credential broker | 0 条（但被多个 PR 引用） | 预计将成为后续安全与凭证管理的基础设施。 | https://github.com/nearai/ironclaw/issues/7825 |

**背后诉求**：  
- 性能与成本控制是当前最迫切的技术诉求（#7824）。  
- 新用户引流和功能发现（On‑boarding suggestions）仍是产品团队重点投入的方向（#7815、#7812、#7816 PR）。  
- 安全凭证的通用抽象（#7825）为未来多平台扩展铺路。

## 5. Bug 与�定性（今日报告的问题，按严重程度排序）
| 严重度 | Issue | 描述 | 是否已有对应 PR/修复 | 链接 |
|--------|-------|------|----------------------|------|
| **高** | #7824 | 上下文完整重放导致单次请求 Token 飙升 4 倍，成本从 $2.52 增至 $10.31。 | 暂无直接修复 PR；需等待压缩/溢出恢复方案（Issue 本身即为解决方案草案）。 | https://github.com/nearai/ironclaw/issues/7824 |
| **中** | #7823 | Notion 工具在 IronClaw 环境安装失败。 | 无对应 PR；需检查插件兼容性或安装脚本。 | https://github.com/nearai/ironclaw/issues/7823 |
| **中** | #7822 | Slack 集成无法完成初始化。 | 无对应 PR；可能与凭证传递或 OAuth 流有关。 | https://github.com/nearai/ironclaw/issues/7822 |
| **低** | #7813 | 聊天首页标题在建议面板出现时被裁剪。 | 无直接 PR；可通过布局重流（CSS flex/grid）解决。 | https://github.com/nearai/ironclaw/issues/7813 |
| **低** | #7812 | 建议生成未使用用户级工具权限，导致推荐不具备个人数据依据。 | 有相关 PR #7816（OOBE 建议抽屉）尚未合并，但未直接解决工具权限问题。 | https://github.com/nearai/ironclaw/issues/7812 |

**已合并的稳定性修复**（今日）：  
- #7774（时区健壮性测试）  
- #7772、#7773（UI 去重与配置透明度）  
- #7700（通知可靠性）

## 6. 功能请求与路线图信号
| 功能请求 | 关联 Issue/PR | 是否有进行中的实现 | 预计纳入版本 |
|----------|---------------|--------------------|--------------|
| 上下文压缩与溢出恢复（Pi‑style barrier） | #7824 (Issue) | 无直接 PR；Issue 本身提出了解决方案草案。 | 需要后续设计讨论，可能进入 Q4 2026 里程碑。 |
| 原生凭证代理（iron‑proxy）供所有外部 CLI 使用 | #7825 (Issue) + #7810 (PR) | PR #7810 已经实现 GitHub CLI 通过通用凭证绑定的沙箱中继。 | 已在开发中，预合并至下一个里程碑（T1/T2 CI 改进后）。 |
| 引导建议尊重用户工具权限、只读访问 | #7812 (Issue) + #7816 (PR) | PR #7816 为 OOBE 建议抽屉刷新，尚未合并；未涉及权限细节。 | 需要后续 PR 在建议生成管道中注入权限过滤。 |
| 引导流程累计净新工作（connect → suggest → thread） | #7815 (Issue) | 无直接 PR；但 #7816 为该流程提供前端入口（刷新/连接按钮）。 | 前端入口已准备，后端工作项尚未实现。 |
| 通知系统可靠性（已完成） | #7700 (PR) | 已合并 | 已在当前主线中。 |

## 7. 用户反馈摘要（从 Issues 评论中提炼）
- **性能/成本担忧**：用户指出完整历史记录重放导致费用不可接受（#7824），期望压缩或增量上下文方案。  
- **集成安装困难**：Notion 与 Slack 的安装/配置步骤不够直观，缺少明确的错误提示（#7823、#7822）。  
- **UI 细节**：标题裁剪（#7813）和建议面板布局导致视觉不连贯，影响首次使用感受。  
- **引导体验**：用户希望建议能够基于其实际已连接的工具和数据，而不仅是内部搜索（#7812）。  
- **总体情绪**：虽然评论数不多，但每条 issue 的描述均指向可操作的改进点，表明社区对核心功能的稳定性和易用性有明确诉求。

## 8. 待处理积压（长期未响应的重要 Issue/PRs）
| 项目 | 最后更新时间 | 未处理原因（推测） | 建议关注点 |
|------|--------------|-------------------|-----------|
| #7076 (PR) | 2026‑08‑22 (closed) | 已关闭未合并，可能因后续依赖变更而过时。 | 评估是否仍有必要；若过时则可存档。 |
| #7255 (PR) | 2026‑08‑22 (open) | 评估 APDD Kit 治理框架的文档 PR，已搁置超过两周。 | 决定是否合并、更新或关闭。 |
| #7257 (PR) | 2026‑08‑22 (open) | WebUI 设计系统方案文档，同样悬置。 | 与 UI/UX 里程碑对齐后决定合并时机。 |
| #7491 (PR) | 2026‑08‑22 (open) | coding‑tool 合约引擎核心功能，从 8 月 11 日起仍未合并。 | 此为核心功能，优先 review 并测试。 |
| #7650 (PR) | 2026‑08‑22 (open) | 自动化运行结果从运行时证据推导，8 月 14 日起开放。 | 对可观测性和反馈闭环有重要影响，建议加速。 |
| #7749 (PR) | 2026‑08‑22 (open) | 基准测试触发 PR（注释性），8 月 19 日起。 | 可作 CI 基准的临时手段，确认后合并或删除。 |
| #7821、#7819、#7820、#7817、#7809、#7818 (PR 系列) | 2026‑08‑22 (open) | CI 加速流水线（T1‑T4）分支，仍在开发中。 | 按计划合并，以获取更快、更可靠的测试反馈。 |

> **行动建议**：维护者可在每日站会中挑选上述 **#7491**、**#7650** 以及 CI 系列（T1‑T4）进行审查，以免重要功能和基础设施改进长期滞留。

---

**总结**：  
IronClaw 在过去一天内通过多项 UI、通知和稳定性改进推进了项目的可用性，然而性能/成本问题（#7824）和新用户集成体验仍是社区关注的焦点。后续工作应侧重于上下文压缩方案的原型验证、凭证代理的完善以及已就绪的引导功能（#7816、#7812）的端到端打通。同时，尽快处理上述积压的核心功能 PR（#749

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI 项目动态日报（2026‑08‑23）**  
*数据来源：过去 24 小时 Issues 更新 2 条（均已关闭），PR 更新 6 条（5 条已合并/关闭，1 条仍 open），无新版本发布。*

---

## 1. 今日速览
- 项目整体活跃度保持中等：过去一天仅有 2 条 Issue 被标记为 stale 并关闭，表明社区讨论较少，但仍有 5 条 PR 被合并，持续推进细节改进。  
- 今日合并的 PR 集中在错误处理、可重试体验、自定义模型提供商上限以及会话导出功能上，整体呈现“稳定性＋小幅功能增强”的趋势。  
- 仍有一个待审 PR（#2452）涉及 OpenClaw 提供商前缀保存，属于底层模型 ID 处理的修复，待合并后将进一步提升多模型切换的可靠性。

## 2. 版本发布
> **无新版本发布**（过去 24 小时未有 Release）。

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR 编号 | 标题 / 简要描述 | 关联 Issue | 合并状态 | 主要影响 |
|--------|----------------|------------|----------|----------|
| #1205 | **fix(cowork): show error toast when session rename fails** – 在重命名会话失败时显示局部 toast 并保持输入框打开，避免静默失败。 | — | 已合并 | 提升会话重命名的可感知性，减少用户因无提示而误以为操作成功。 |
| #1208 | **feat(cowork): 新增手动重试按钮，支持频繁请求等瞬时错误快速重试** – 在错误提示中内联“重试”按钮，针对 429、网络故障等可重试错误提供一键重发。 | — | 已合并 | 改善 Cowork 会话中的容错体验，降低因临时限制导致的流程中断。 |
| #1209 | **fix(web-search): web-search-block-unsupported-chrome-flags** – 屏蔽外部注入的 `--disable-blink-features=AutomationControlled` 标记，防止 Chrome 130+ 导致的启动异常。 | — | 已合并 | 修复由外部自动化工具或残留配置引入的不兼容 flag，提升网页搜索技能的稳定性。 |
| #1212 | **fix(model): allow up to 20 custom providers** – 将自定义模型提供商上限从 10 提升至 20，并移除硬编码的键列表。 | — | 已合并 | 扩展自定义模型配置空间，支持更多第三方或内部模型并行使用。 |
| #1214 | **【功能缺失】会话详情新增导出为 Markdown 文件功能** – 在会话详情页加入「导出为 Markdown」按钮，复用现有对话构建函数，生成含用户消息、工具调用摘要、助手回复的 .md 文件。 | 关闭 #1345（功能需求） | 已合并 | 满足用户对话记录可编辑、可检索的需求，为后续文档整理提供便利。 |
| #2452（仍 open） | **fix(openclaw): preserve provider for slashed model ids** – 确保在会话补丁返回时，保留提供商前缀（如 `custom_0`），防止模型 ID 中包含 `/` 时被错误覆盖。 | — | 待审 | 修复模型 ID 持久化 bug，防止后续模型切换失效。 |

**整体进展**：今日合并的 5 个 PR 分别覆盖了错误提示、容错机制、兼容性修复、配置上限提升以及用户导出功能，表明项目在稳定性与易用性上均有实质性推进。

## 4. 社区热点（今日讨论最活跃的 Issues/PRs）

| 项目 | 评论数 | 链接 | 热点背景 |
|------|--------|------|----------|
| Issue #1213 – 【功能建议】为会话详情添加「导出为 Markdown」功能 | 2 | [#1213](https://github.com/netease-youdao/LobsterAI/issues/1213) | 用户希望以文本形式保存对话，便于引用与检索；该需求直接促成了 #1214 的实现。 |
| PR #1214 – 会话详情新增导出为 Markdown 文件功能 | 0（但关联 Issue 评论活跃） | [#1214](https://github.com/netease-youdao/LobsterAI/pull/1214) | 功能实现后立即得到社区认可，是今日最受关注的增量改动。 |
| PR #1208 – 新增手动重试按钮 | 0（但功能影响大） | [#1208](https://github.com/netease-youdao/LobsterAI/pull/1208) | 针对频繁请求（429）等瞬时错误的改进，解决用户在高频使用时的卡顿问题。 |

**分析**：会话导出功能是今日社区关注的焦点，源于用户对对话记录可编辑性的强烈需求；错误重试按钮同样受到关注，因为它直接改善了在限流或网络波动下的使用体验。

## 5. Bug 与稳定性（今日报告的问题及修复情况）

| 严重程度 | 描述 | 关联 Issue/PR | 是否已有 Fix PR | 备注 |
|----------|------|---------------|----------------|------|
| 中 | 私有化部署的 kimi2.5 模型在分析文档时重复回复当前动作（进度条重复出现） | Issue #1206 | 无直接 Fix PR（已标记 stale） | 问题复现必现，切换模型后正常；建议重新评估是否为真实 bug 还是 UI 刷新逻辑。 |
| 低 | 会话重命名失败时无提示，输入框直接关闭 | Issue #1205（对应 PR） | PR #1205 已合并 | 已通过 toast 提示解决。 |
| 低 | Web‑Search 技能因外部注入的 Chrome flag 导致启动异常 | Issue #1209（对应 PR） | PR #1209 已合并 | 已屏蔽不兼容 flag，提升启动可靠性。 |
| 中 | 自定义模型提供商上限仅 10，阻碍保存旧配置同时切换新提供商 | Issue #1212（对应 PR） | PR #1212 已合并 | 已扩容至 20，缓解配置限制。 |
| 低（功能缺失） | 会话详情缺少导出为 Markdown 的选项 | Issue #1213（对应 PR） | PR #1214 已合并 | 功能已实现，满足需求。 |

**总结**：今日共报告 5 条问题，其中 4 条已通过对应 PR 得到修复；仅剩 Issue #1206（kimi2.5 重复回复）仍需进一步调查。

## 6. 功能请求与路线图信号

| 功能请求 | 关联 Issue | 现状（是否有对应 PR） | 路线图暗示 |
|----------|------------|----------------------|------------|
| 会话详情导出为 Markdown | #1213 / #1214 | PR #1214 已合并 | 已纳入当前版本，后续可考虑导出为 PDF、HTML 等更多格式。 |
| 自定义模型提供商上限提升 | #1212 | PR #1212 已合并 | 已扩容至 20，未来如果需求继续增长，可考虑动态配置或无上限方案。 |
| 错误重试机制（瞬时错误） | #1208 | PR #1208 已合并 | 已实现基础重试按钮，后续可结合指数退避或后台自动重试提升鲁棒性。 |
| 会话重命名错误提示 | #1205 | PR #1205 已合并 | 基础错误反馈已到位，后续可加入撤销或历史版本功能。 |
| OpenClaw 提供商前缀保存（模型 ID 包含 `/`） | — | PR #2452 待审 | 一旦合并，将解决斜线模型 ID 持久化问题，提升多提供商兼容性。 |

**路线图信号**：项目正在围绕“可靠性错误处理”“配置灵活性”“用户数据导出”三个方向迭代。后续可期待更多数据导出格式、更智能的自动重试策略以及对模型命名空间的更完善支持。

## 7. 用户反馈摘要（从 Issues 评论中提炼）

- **导出需求**：用户明确表示“只能截图或手动复制很麻烦”，期望“一键保存为 Markdown 以便后续编辑和检索”。评论中提到此功能对科研写作、会议纪要整理尤为重要。  
- **重复进度条**：#1206 的评论指出“是否是 bug 还是需要等待执行？”表明用户对 UI 反馈不确定感困惑，建议明确区分“正在处理”与“已完成”状态。  
- **重命名静默失败**：用户在尝试重命名会话时发现“输入框消失却没有任何提示”，导致误以为成功，后续发现标题未变。该痛点直接促成了 #1205 的 toast 提示。  
- **瞬时错误重试**：在高频使用或网络不稳定场景下，用户反馈“每次都要手动复制上一条消息重新发送很烦”。#1208 的重试按钮得到了隐式认可（虽然评论数为 0，但合并速度快表明需求明确）。  
- **自定义模型上限**：部分高级用户提到“想同时保存多个内部模型配置，但目前只有 10 个槽位不够用”。#1212 的扩容直接解决了此 bottleneck。  

## 8. 待处理积压（长期未响应的重要 Issue/PRs）

| 编号 | 类型 | 标题 / 关键词 | 最后更新 | 备注 |
|------|------|---------------|----------|------|
| #1206 | Issue (stale) | 【bug】 私有化部署的kimi2.5模型分析文档会重复处理或回复进度 | 2026-08-22 | 已标记 stale，超过 4 个月无进展。建议重新评估是否为真实 bug 或 UI 刷新逻辑，若确认则分配优先级修复。 |
| #2452 | PR (open) | fix(openclaw): preserve provider for slashed model ids | 2026-08-22 | 创建于 8 月 7 日，目前仍等待审核。涉及底层模型 ID 持久化，合并后可防止斜线模型 ID 丢失导致的切换失败。 |
| （其余 Issue/PRs 均已 close 或已合并） |  |  |  |  |

**建议**：维护者可考虑在下一次例会中审视 stale 标记的 Issue #1206，决定是否重新打开、分配调查或关闭为 “won't fix”。同时，尽快完成 #2452 的审查与合并，以免该底层修复积压影响后续模型功能。

---

*报告结束。*  
*如需更细粒度的时间线或特定模块的深度分析，请告知。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis 项目日报（2026‑08‑23）**  
*数据来源：过去 24 小时的 Issues、PR 以及 Releases（见附件概览）*  

---

### 1. 今日速览
- 项目在过去 24 小时内保持 **低至中等活跃度**：新增 1 条 Issue（功能请求）并有 3 条待合并的 PR（均为修复类），目前尚无 PR 被合并或 Issue 被关闭。  
- 无新版本发布，说明主干代码尚在积累改动中，待后续合并后可能迎来一个小版本。  
- 所有更新均来自核心贡献者（kantorcodes、IlyaBizyaev、rubenssoto），外部社区参与度目前尚未体现在评论或点赞上。  
- 总体健康状况良好：没有报告的崩溃或回归，全部活动聚焦在已知问题的修复与新特性的准备工作上。  

### 2. 版本发布
> **今日无新版本发布。**  

### 3. 项目进展（已合并/关闭的 PR）
- **今日无 PR 被合并或关闭**。全部 3 条 PR 仍处于 **待合并（Open）** 状态，因此尚未对主干代码产生直接影响。待维护者审查后合并，这些修复将分别提升工具 schema 兼容性、MCP 客户端恢复能力以及 Browserless v2 容器支持。  

### 4. 社区热点
| 类别 | 编号 | 标题 | 链接 | 评论/反应 | 简要分析 |
|------|------|------|------|-----------|----------|
| Issue | #1230 | feat(hooks): add an opt‑in fail‑closed error policy for modifying security hooks | <https://github.com/moltis-org/moltis/issues/1230> | 0 评论，0 👍 | 提出安全 Hook 在运行时失效时应失败关闭（fail‑closed）而非继续执行，体现社区对安全边界的关注。 |
| PR | #1232 | fix(tools): make object schemas OpenAI‑safe | <https://github.com/moltis-org/moltis/pull/1232> | 0 评论，0 👍 | 解决 OpenAI 严格工具 schema 导致的数据丢失问题，直接影响模型调用可靠性。 |
| PR | #1231 | fix(mcp): resolve current client after server restart | <https://github.com/moltis-org/moltis/pull/1231> | 0 评论，0 👍 | 修复 MCP 桥接在服务器重启后仍使用旧客户端的问题，提升长 running 会话的稳定性。 |
| PR | #1229 | fix(browser): support Browserless v2 containers | <https://github.com/moltis-org/moltis/pull/1229> | 0 评论，0 👍 | 引入 Browserless v2 协议支持，保持向后兼容，为浏览器自动化场景提供更现代的后端选项。 |

> **热点洞察**：虽然目前讨论量不高，但 Issue #1230 和三个修复 PR 均围绕 **安全性、兼容性及可靠性**——这些是开发者在将 Moltis 集成到生产环境时最关心的维度。若后续评论增加，预计会围绕 fail‑closed 策略的细节以及对现有 Hook 实现的影响展开。  

### 5. Bug 与稳定性
| 严重程度 | 类别 | 编号 | 描述 | 是否有对应 Fix PR | 链接 |
|----------|------|------|------|-------------------|------|
| 中 | 工具 schema 兼容性 | #1232 | OpenAI 严格 schema 要求 `additionalProperties=false`；未声明的 patch/map 字段导致 Codex 发送空值。 | 有（本 PR 本身） | <https://github.com/moltis-org/moltis/pull/1232> |
| 中 | MCP 客户端生命周期 | #1231 | 服务器重启后，旧的 MCP 客户端仍被复用，造成请求失败直至下一次轮询重建注册表。 | 有（本 PR 本身） | <https://github.com/moltis-org/moltis/pull/1231> |
| 低 | Browserless 集成 | #1229 | 当前仅支持 Browserless v1；在 v2 容器环境下启动参数无法传递。 | 有（本 PR 本身） | <https://github.com/moltis-org/moltis/pull/1229> |
| 低 | 安全 Hook 失效策略 | #1230 | 运行时 Hook 错误目前降级为继续执行，缺失 fail‑closed 选项。 | 暂无（仅为功能请求） | <https://github.com/moltis-org/moltis/issues/1230> |

> **总结**：目前所有已知的 Bug 均有对应的修复 PR 在审查中，未出现未被处理的严重缺陷。安全 Hook 的 fail‑closed 需求尚未有实现 PR，属于功能增强而非回归 bug。  

### 6. 功能请求与路线图信号
- **Issue #1230** 是今日唯一的功能请求：为修改类安全 Hook 添加可选的 **fail‑closed** 错误策略。  
- 该需求与项目在安全边界方面的持续改进方向高度契合，若获维护者认可，很可能被纳入下一个小版本（v0.x.x）作为可选特性，以满足对严格安全保障的需求。  
- 目前尚未看到其他功能需求（如新增工具、平台适配等）在 Issues 中出现，说明社区关注点集中在 **稳固现有能力** 而非快速扩展。  

### 7. 用户反馈摘要
- 因今日所有 Issues 和 PR 均 **无评论**，无法直接提炼用户痛点或使用场景的定性反馈。  
- 可见的贡献者活动表明核心维护者正在主动解决已知的兼容性和安全性问题，这通常来源于之前的使用反馈或内部测试。  
- 建议在后续的 Issue 中鼓励用户使用 👍 评论或详细描述复现步骤，以便更好地捕捉真实使用场景。  

### 8. 待处理积压（长期未响应）
- 在提供的 24 小时窗口内，**没有** 出现长期未响应的 Issue 或 PR（所有条目均为今日新建且尚未获得评审反馈）。  
- 若要维护项目健康，建议关注：  
  1. **Issue #1230** – 虽为新功能，但若长时间无评论可能被误认为优先级低；维护者可考虑在项目路线图中给出明确的里程碑或标记为 “ awaiting triage”。  
  2. 待合并 PR（#1229、#1231、#1232） – 虽无争议，但若审查时间超过若干天，可能暗示审查资源不足或需要额外的测试。可考虑设置自动提醒或指定审查者。  

---  

**数据来源链接速查**  
- Issue #1230：<https://github.com/moltis-org/moltis/issues/1230>  
- PR #1232：<https://github.com/moltis-org/moltis/pull/1232>  
- PR #1231：<https://github.com/moltis-org/moltis/pull/1231>  
- PR #1229：<https://github.com/moltis-org/moltis/pull/1229>  

*报告生成时间：2026-08-23 00:00 UTC。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw (agentscope‑ai/QwenPaw) 项目动态日报 – 2026‑08‑23**  

---

### 1. 今日速览  
- 过去 24 小时共产生 **6 条 Issue** 和 **6 条 PR**，全部仍处于打开状态（仅有一条 Issue 已关闭）。  
- 项目整体活跃度中等：讨论持续但尚未出现代码合并，说明社区在提出需求与反馈，而核心维护仍在审查或准备合并工作。  
- 没有新版本发布，当前基线仍为 **v2.1.0**（Docker 镜像 `xk-qwenpaw:v2.1.0f1`）。  

### 2. 版本发布  
> **无新版本**。  

### 3. 项目进展  
| 类型 | 编号 | 状态 | 关键内容 | 影响 |
|------|------|------|----------|------|
| PR | #7187 | OPEN | 修复：在自动生成聊天标题时禁用思考过程，防止思考文本污染标题。 | 一旦合并，将提升标题生成的干净度，减少后处理需求。 |
| PR | #7190 | OPEN | 功能：使 `qwenpaw-data` 可通过 PyPI 安装；提供 docker‑compose 演示栈（Neo4j + PostgreSQL + 上下文），并修复环境继承问题。 | 若合并，将降低新用户上门成本，并完善数据演示能力。 |
| PR | #7054 | OPEN | 功能：Chrome 插件支持远程桥接端点（LAN/网络浏览器），不再限制为仅本地回环。 | 合并后将扩展插件在异构网络环境中的可用性。 |
| PR | #7050 | OPEN | 功能：为 Cron Jobs 添加 per‑job 模型选择器（`model_slot_override`）。 | 合并后使用户能够为不同定时任务指定不同模型，提升灵活性。 |
| PR | #6808 | OPEN | 修复：控制台工作区中显示自定义 Profile markdown 文件（之前被内置文件名过滤隐藏）。 | 合并后用户自定义 persona 将可见且可用。 |
| PR | #7214 | OPEN | 文档：在 README 中将 **Access Policy** 列为第五安全层，与功能表保持一致。 | 文档澄清，提升安全特性的可发现性。 |

> **目前尚无 PR 被合并或关闭**，故代码基线在今日未有前进；所有上述变更均等待审查与合并。

### 4. 社区热点  
| 项目 | 链接 | 评论数 / 👍 | 主题 |
|------|------|------------|------|
| Issue #7196 – 折叠推理过程 | [#7196](https://github.com/agentscope-ai/QwenPaw/issues/7196) | 2 评论 / 1 👍 | 用户希望默认折叠推理过程以减少视觉干扰，参考 Hermes 的可折叠实现。 |
| Issue #7215 – OpenRouter/OpenCode GUI 未显示 | [#7215](https://github.com/agentscope-ai/QwenPaw/issues/7215) | 1 评论 / 0 👍 | 添加后端模型后 GUI 不完整，需要修复渲染逻辑。 |
| Issue #7213 – 会话输出多余空行 | [#7213](https://github.com/agentscope-ai/QwenPaw/issues/7213) | 1 评论 / 0 👍 | 反馈会话输出总是带有无意义空行，影响可读性。 |
| Issue #7201 – 分离媒体大小 caps | [#7201](https://github.com/agentscope-ai/QwenPaw/issues/7201) | 1 评论 / 0 👍 | 建议把单一 `max_inline_media_bytes` 拆分为图片/视频/音频三个独立阈值，并在高级设置中暴露。 |
| Issue #7212 – 像素尺寸超限导致崩溃 | [#7212](https://github.com/agentscope-ai/QwenPaw/issues/7212) | 1 评论 / 0 👍 | 图片文件尺寸小于 2 MB 但像素超过 provider 限制时请求崩溃，应优雅降级。 |
| PR #7054 – 远程桥接端点 | [#7054](https://github.com/agentscope-ai/QwenPaw/pull/7054) | 0 评论 / 0 👍 | 期望让 Chrome 插件能够跨主机工作，提升 LAN 使用场景。 |

**讨论最活跃**的是 **#7196**（2 条评论），折叠推理过程的需求引起了较多关注，表明用户对交互界面的细节敏感。

### 5. Bug 与稳定性  
| 严重度 | Issue | 描述 | 是否有对应修复 PR |
|--------|-------|------|-------------------|
| 高 | #7212 – 图片像素超限崩溃 | 导致 `MODEL_EXECUTION_ERROR` 并结束对话。 | 暂无直接 PR（但 #7201 拆分媒体 caps 可能间接缓解）。 |
| 中 | #7215 – OpenRouter/OpenCode GUI 未显示 | 后端添加后前端未渲染完整模型列表。 | 无直接 PR。 |
| 中 | #7213 – 会话输出多余空行 | 输出中出现无意义空行，影响阅读。 | 无直接 PR。 |
| 低 | #7196 – 推理过程默认展开（视觉干扰） | 功能增强请求，非崩溃。 | 无直接 PR。 |
| 低 | #7043 – Windows chcp 65001（已关闭） | 已关闭，表明社区认为此需求可通过其他方式满足或已被接受。 | 已关闭。 |

**总体稳定性**：本日未出现新的崩溃报告外，#7212 是唯一可能导致用户工作中断的高严重度 Bug，亟待跟进。

### 6. 功能请求与路线图信号  
| 功能请求 | 关联 Issue/PR | 是否有对应实现 PR | 预计纳入时机 |
|----------|---------------|-------------------|--------------|
| 折叠/展开推理过程（可配置） | #7196 | 无 | 若采纳，可参考 #7187（禁用思考）的实现思路，预计进入下一个 minor 版本。 |
| 分离图片/视频/音频媒体大小 caps | #7201 | 无 | 与 #7190（数据模块打包）无直接冲突，若通过审查可随同媒体处理改动一起合并。 |
| Chrome 插件远程桥接（LAN） | #7054 | 无 | 已有实现 PR，审查通过后将直接提升跨机器使用场景。 |
| Cron Job 每任务模型选择器 | #7050 | 无 | 已有实现 PR，合并后将增强定时任务的灵活性。 |
| 自定义 Profile markdown 可见 | #6808 | 无 | 已有实现 PR，合并后解决用户 persona 隐藏问题。 |
| 安全文档补全 Access Policy | #7214 | 无 | 文档类 PR，合并门槛低，预计很快合并。 |

### 7. 用户反馈摘要  
- **界面干扰**：用户反馈默认展开的推理过程占据大量垂直空间，导致工作流视觉噪声（#7196）。  
- **模型后端展示问题**：新增 OpenRouter/OpenCode 后端时，GUI 未正确列出模型，影响后端选择体验（#7215）。  
- **输出整洁性**：会话中频繁出现空行，用户多次请求去除，认为影响阅读和复制粘贴（#7213）。  
- **媒体处理鲁棒性**：当图片像素超过 provider 限制时，即便文件大小在内联 cap 内，请求仍会崩溃，用户期望优雅降级或明确错误提示（#7212）。  
- **功能灵活性**：对定时任务（Cron Job）和自定义 persona 的诉求强烈，用户希望能够 per‑job 指定模型和看到自定义 markdown（#7050、#6808）。  

总体而言，社区关注点集中在 **交互细节**、**后端兼容性** 以及 **功能可配置性** 上，这些均与项目提升易用性和可扩展性的目标相一致。

### 8. 待处理积压（长期未响应）  
| 编号 | 类型 | 最后更新 | 天数未响应 | 备注 |
|------|------|----------|-----------|------|
| #7043 | Issue（已关闭） | 2026‑08‑22 | 0 | 已关闭，但历史讨论显示曾有较长等待时间；可作为此类需求的参考。 |
| #7050 | PR | 2026‑08‑22 | 7 天+ | 自 8‑15 创建，尚未收到维护者反馈，属于功能增强类。 |
| #7054 | PR | 2026‑08‑22 | 7 天+ | 同样待审查，影响跨网络使用场景。 |
| #6808 | PR | 2026‑08‑22 | 15 天+ | 最老的待合并 PR，涉及基本的文件可见性，建议优先审查。 |
| #7196 | Issue | 2026‑08‑22 | 1 天+ | 尽管刚刚更新，但评论数较高，若延迟可能导致用户不满。 |

**建议**：维护者可优先审查 **#6808**、**#7050**、**#7054**（功能性 PR）以及 **#7196**（高可见度 Issue），以减少积压并快速响应社区最迫切的需求。

---  

*报告基于 GitHub 公开数据（Issues、PRs、Releases）生成，旨在为项目维护者和贡献者提供客观、数据驱动的项目健康快照。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw 项目日报（2026‑08‑23）**  
*数据来源：过去 24 h Issues 更新 50 条（新开/活跃 43，已关闭 7）；PR 更新 50 条（待合并 48，已合并/关闭 2）；无新版本发布。*  

---

## 1. 今日速览  
- 项目保持高强度讨论：Issues 新增/活跃数达到 43 条，PR 挂起 48 条，说明社区正在围绕多个 RFC、功能改进和 Bug 修复展开激烈审查。  
- 未有版本发布，今日重点在于 **设计决策（RFC）** 与 **核心稳定性（尤其 WASM 插件超时、Windows CI、Telegram 重复消息）** 的修复与讨论。  
- 已合并的两个 PR（#9403、#9128）分别解决了插件超时和工具密钥隔离，为后续插件生态奠定基础。  
- 整体活跃度评估：🟢 **活跃**——Issue 与 PR 的更新速度均保持在高水平，但大量待合并 PR 表明审核资源仍是瓶颈。

## 2. 版本发布  
> 本日无新版本发布。

## 3. 项目进展（今日合并/关闭的重要 PR）  

| PR | 状态 | 主要内容 | 关联 Issue | 链接 |
|----|------|----------|------------|------|
| #9403 | ✅ Closed | **fix(plugins): bound WASM exports by a wall‑clock deadline** – 添加 `plugins.limits.call_timeout_ms`（默认 30 s），对所有插件导出/导入施加壁钟超时，防止无限阻塞。 | #9255（WASM 插件无超时） | [#9403](https://github.com/zeroclaw-labs/zeroclaw/pull/9403) |
| #9128 | ✅ Closed | **feat(plugins): add scoped tool secret service** – 为工具组件引入 host‑owned `secrets.get(name)`，使用 `x-secret` schema 注解实现按实例作用域的密钥访问。 | —（功能增强） | [#9128](https://github.com/zeroclaw-labs/zeroclaw/pull/9128) |
| #9129 | 🔄 Open | **feat(plugins): add coherent channel config services** – 为频道组件注入 host‑owned `config.get()/secrets.get()`，将 `configure` 改为无参生命周期钩子，解决不可变 per‑call 配置问题。 | — | [#9129](https://github.com/zeroclaw-labs/zeroclaw/pull/9129) |
| #8561 | 🔄 Open | **feat(channels/telegram): add multi_message streaming mode** – 引入 `multi_message_delay_ms`（默认 800 ms）并实现 `TelegramConfig.StreamMode::MultiMessage`，以实现有序多条消息发送。 | — | [#8561](https://github.com/zeroclaw-labs/zeroclaw/pull/8561) |
| #10262 | 🔄 Open | **fix(rpc): close RPC connections on daemon reload** – 在 `quickstart/apply`、`config/reload`、`/admin/reload` 等重载路径中关闭已建立的 RPC 连接，防止资源泄露。 | — | [#10262](https://github.com/zeroclaw-labs/zeroclaw/pull/10262) |

**进展小结**：  
- 已修复的 **WASM 插件超时**（#9403）直接解决了高优先级稳定性问题 #9255。  
- 新增的 **工具密钥隔离服务**（#9128）为插件安全奠定基础，后续可在插件市场中实现细粒度凭证管理。  
- 尚在审核的配置服务（#9129）和 Telegram 流式模式（#8561）一旦合并，将进一步解耦频道配置并提升多平台消息体验。  
- RPC 连接关闭（#10262）有助于守护进程重载时的干净状态，减少僵尸连接。

## 4. 社区热点（评论最多的 Issues/PRs）  

| 排名 | 类型 | 编号 | 评论数 | 主题 | 链接 |
|------|------|------|--------|------|------|
| 1 | Issue | #9487 | 23 | **RFC: Runtime‑owned conversation sessions and transport surface adapters** – 讨论运行时拥有会话生命周期、统一传输适配器、持久入口与歧义结果语义。 | [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) |
| 2 | Issue | #7462 | 19 | **[Bug]: 74 test failures on Windows** – Unix‑only test 命令、路径语法、控制台编码导致大量测试在 Windows 11 上失败。 | [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) |
| 3 | Issue | #6850 | 15 | **RFC: Decouple memory lifecycle policy from storage backends** – 试图将持久存储与记忆生命周期策略解耦，避免每个网关/通道重复实现。 | [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) |
| 4 | Issue | #8780 | 15 | **RFC: Realtime speech‑to‑speech channel for Gemini Live** – 提供可选实时语音通道， Gemini Live 作为首个语音‑语音模型。 | [#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) |
| 5 | Issue | #8692 | 13 | **[Tracker]: Maintainer decision queue for RFCs and design issues** – 用于收集需要维护者裁决的 RFC、设计问题及发布政策议题。 | [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) |
| 6 | Issue | #9103 | 13 | **RFC: separate authoritative memory storage from optional enrichment connectors** – 在 `memory.backend` 与 enrichment 之间划清界限，保留存储/扩充架构边界。 | [#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) |

**背后诉求**：  
- 社区强烈期望 **统一会话与传输抽象**（#9487）以简化跨平台集成。  
- **Windows CI 可靠性** 成为阻碍发布的瓶颈（#7462），亟需跨平台测试基础设施改进。  
- 对 **记忆与存储分层**（#6850、#9103）的讨论表明用户希望更清晰的责任边界，以便自定义后端而不破坏上层策略。  
- 实时语音功能（#8780）和决策队列（#8692）反映了对多模态交互和治理流程的诉求。

## 5. Bug 与稳定性（今日新增/更新的严重问题）  

| 严重度 | Issue | 标题 | 当前状态 | 是否有对应修复 PR | 链接 |
|--------|-------|------|----------|-------------------|------|
| **P1 / 高危** | #7462 | 74 test failures on Windows — Unix‑only test commands, path semantics, console encoding | OPEN | 无（需跨平台 CI 改造） | [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) |
| **P1** | #10251 | Repeat parallel runtime tests: 17 telegram listen_* tests assert on wall‑clock timeouts | OPEN | 无（测试超时需调整） | [#10251](https://github.com/zeroclaw-labs/zeroclaw/issues/10251) |
| **P1** | #10164 | block_high_risk_commands = false` is not honored — allowlisted high‑risk command still blocked on the parent path | OPEN | 无 | [#10164](https://github.com/zeroclaw-labs/zeroclaw/issues/10164) |
| **P1** | #9946 | agent‑browser subprocess waits are unbounded in both the availability probe and run_command | OPEN | 无 | [#9946](https://github.com/zeroclaw-labs/zeroclaw/issues/9946) |
| **P1** | #9945 | browser tool exposes 16 of agent‑browser's 100+ commands — iframes, dialogs, tabs, and form controls unreachable | OPEN | 无 | [#9945](https://github.com/zeroclaw-labs/zeroclaw/issues/9945) |
| **P1** | #10073 | Retire StoragePolicy::Rolling; absorb row‑count cap into Rotating; extend /api/logs to query across segment files | OPEN | 无 | [#10073](https://github.com/zeroclaw-labs/zeroclaw/issues/10073) |
| **P1** | #10050 | RFC: Verbatim channel send over the gateway, without an agent turn | OPEN | 无 | [#10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050) |
| **P1** | #10232 | Daemon diagnostics drop the underlying error chain | OPEN | 无 | [#10232](

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*