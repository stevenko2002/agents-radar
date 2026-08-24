# OpenClaw 生态日报 2026-08-25

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-24 22:15 UTC

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

# OpenClaw 项目日报 | 2026-08-25

> **数据基准**：过去 24 小时 GitHub 活动（Issues: 500 更新 / PRs: 500 更新 / Releases: 1）  
> **统计窗口**：2026-08-24 00:00 – 2026-08-24 23:59 (UTC)

---

## 1. 今日速览
- **发布节奏**：发布 **v2026.8.1-beta.3**，引入 GPT-5.6 系列模型支持、Control UI 首次运行体验优化、Puppeteer 兼容 CDP 中继等核心特性，显示项目处于 **高频 Beta 迭代期**。
- **社区活跃度极高**：单日 1000 条 Issue/PR 更新（新开/活跃 Issue 474 条，待合并 PR 425 条），维护团队面临巨大的 **分拣与审查压力**；`clawsweeper` 机器人标签覆盖率高，自动化治理生效。
- **稳定性风险聚焦**：高优先级 Bug 集中在 **消息丢失、会话状态不一致、子进程泄漏、跨平台通道（Telegram/Feishu/QQBot）投递失败** 四大领域，多个 `issue-rating: 🦞 diamond lobster / 🐚 platinum hermit` 标记为核心阻断。
- **PR 流水线健康**：75 条 PR 合并/关闭，其中多个 `size: XL` 重构型 PR（如 `fix(gateway): keep conversation delivery within agent bindings` #126424、`feat(security): require acknowledgement for install policy warnings` #116489）已落地，架构治理向纵深推进。
- **用户痛点显性化**：自托管语音、动态模型发现、Android 聊天优先界面、技能自修剪等增强需求持续高呼声，折射 **“企业级自托管 + 多模态交互”** 双赛道演进诉求。

---

## 2. 版本发布
### v2026.8.1-beta.3 `OpenClaw 2026.8.1-beta.3` [[Release](https://github.com/openclaw/openclaw/releases/tag/v2026.8.1-beta.3)]
| 维度 | 详情 |
|------|------|
| **核心亮点** | • **GPT-5.6 Sol/Terra/Luna/Ultra** 推理模型全链路支持（OpenClaw + Codex Runtime）<br>• **Control UI 首次运行**：验证模型 → Custodian → 可选渠道配置，流程闭环<br>• **Puppeteer 兼容 CDP 中继**：支持配对 Chrome 会话，解决远程扩展调试痛点<br>• 显式扩展点增强（Explicit extension points） |
| **破坏性变更** | 未在摘要中明确列出；建议升级前跑 `openclaw doctor --fix` 并关注 `agents.ownership: explicit` 场景下的会话绑定变更（见 #126424）。 |
| **迁移注意** | • QQBot 迁移遗留插件未受信任问题（`2026.8.1-beta.2` 遗留，#124166）需手动 `openclaw doctor --fix` 修复<br>• 外部官方插件可能停留在 `latest` 而非 beta tag（#97680），建议显式锁版本<br>• Windows `vitest` 拆卸 EBUSY 问题（#119796）若影响 CI 需暂时忽略或升级 Node/锁文件 |

---

## 3. 项目进展（已合并/关闭的关键 PR）
| PR | 类型 | 影响面 | 进展说明 |
|----|------|--------|----------|
| [#126424](https://github.com/openclaw/openclaw/pull/126424) `fix(gateway): keep conversation delivery within agent bindings` | **P1 / XL / 已合并** | 多代理会话隔离、消息投递安全边界 | 修复跨代理会话工具调用越界，消除“会话泄漏到错误代理”隐患，覆盖 Discord/Slack/Telegram/Feishu/iMessage/Matrix/Mattermost 全渠道。 |
| [#116489](https://github.com/openclaw/openclaw/pull/116489) `feat(security): require acknowledgement for install policy warnings` | **P2 / XL / 已关闭** | 插件/技能安装安全治理 | 引入 `warn` 级别安装策略，CLI 与 Control UI 均需显式确认，配合 #120900（UI 侧审核）形成双轨把关。 |
| [#120900](https://github.com/openclaw/openclaw/pull/120900) `feat(ui): review install policy warnings` | **P2 / XL / 已关闭** | Control UI 安全审计 | 管理员可在 Web UI 审核并 `acknowledgeInstallPolicyWarning: true` 继续安装，附视频演示。 |
| [#123975](https://github.com/openclaw/openclaw/pull/123975) `fix(scripts): clean up tsgo process trees on timeout or signal` | **P2 / M / 已关闭** | CI/构建稳定性 | 解决 `tsgo` 编译器进程栈残留导致的僵尸进程，纳入托管进程所有者，新增 `OPENCLAW_TSGO_TIMEOUT_MS` 看门狗。 |
| [#128371](https://github.com/openclaw/openclaw/pull/128371) `fix(release): authorize focused beta evidence` | **P1 / XL / 已关闭** | 发布流水线 | 解除“仅接受全组验证通过”的发布阻断，允许针对性复跑历史失败叶子，加速 Beta 交付。 |
| [#121799](https://github.com/openclaw/openclaw/pull/121799) `fix(gateway): usage.status no longer waits on provider HTTP` | **P2 / XL / 待审** | Control UI / macOS / Android / Web 多端用量面板 | 移除冷启动时等待最慢 Provider 的阻塞，首屏渲染提速显著。 |

> **整体推进度**：核心安全/隔离/发布三条主线均有大体量 PR 落地，**架构治理成熟度提升**；但 425 个待合并 PR 积压提示 **审查吞吐率** 仍是瓶颈。

---

## 4. 社区热点（高互动 Issue/PR 深度剖析）
| 排名 | 标题 & 链接 | 评论/👍 | 核心诉求 | 维护信号 |
|------|-------------|---------|----------|----------|
| 1 | [#119796](https://github.com/openclaw/openclaw/issues/119796) **Windows: vitest teardown EBUSY unlink agent state DB** | 15 💬 | Windows CI 稳定性；SQLite 句柄未释放阻塞并行测试 | `clawsweeper:linked-pr-open` 已有 PR，需维护者 Review |
| 2 | [#67777](https://github.com/openclaw/openclaw/issues/67777) **Subagent completion delivery lost on timeout/drain/orphan** | 12 💬 | 子代理完成消息“零丢失”保证，核心可靠性指标 | `clawsweeper:source-repro` 可复现，**P1 阻断级** |
| 3 | [#6757](https://github.com/openclaw/openclaw/issues/6757) **Agent-triggered context compaction (self-compact tool)** | 9 💬 / 2 👍 | Agent 自主触发上下文压缩，减少人工干预 | `enhancement` `needs-product-decision` 等产品侧决策 |
| 4 | [#97616](https://github.com/openclaw/openclaw/issues/97616) **Unreaped hook/tool child processes → zombie accumulation** | 9 💬 / 1 👍 | 长期运行网关进程退化，资源泄漏 | `regression` `P1` 需根因定位 `waitpid`/信号处理 |
| 5 | [#10687](https://github.com/openclaw/openclaw/issues/10687) **Fully dynamic model discovery (OpenRouter + beyond)** | 9 💬 / 3 👍 | 模型目录实时化，摆脱静态生成目录 | `maintainer` `needs-product-decision` 架构级重构 |
| 6 | [#114020](https://github.com/openclaw/openclaw/issues/114020) **Feishu/Telegram dispatch fails: runChannelInboundEvent requires runDispatchLifecycle** | 8 💬 | 升级后渠道入站全挂，生产环境阻断 | `P1` `source-repro` **热修复候选** |
| 7 | [#45508](https://github.com/openclaw/openclaw/issues/45508) **Self-hosted STT/TTS provider support in webchat** | 8 💬 / 2 👍 | WebChat 绕过浏览器原生 API，接入自托管语音 | `diamond lobster` 高优增强，涉及网关-前端协议变更 |
| 8 | [#97680](https://github.com/openclaw/openclaw/issues/97680) **Beta-tagged update leaves official plugins on latest** | 8 💬 / 1 👍 | 版本锁定一致性，防止核心/插件版本错配 | `linked-pr-open` 已有修复方向 |
| 9 | [#125570](https://github.com/openclaw/openclaw/issues/125570) **Skill Workshop update overwrites live skill description → routing break** | 6 💬 | 技能元数据被提案文档覆盖，路由失效静默失败 | `data-loss` `P1` **数据完整性缺陷** |
| 10 | [#128156](https://github.com/openclaw/openclaw/issues/128156) **Gateway event-loop stall: 76% time in log redaction regex** | 4 💬 | 高负载下日志脱敏正则成为性能杀手 | `P1` `crash-loop` 新近暴露，需算法优化或异步化 |

> **热点画像**：**可靠性（消息/会话/进程）> 安全/治理 > 多模态/自托管 > 开发体验**。维护团队应优先处理 `diamond lobster / platinum hermit` 标记的 P1 缺陷，防止 Beta 版信心受损。

---

## 5. Bug 与稳定性（按严重度排序）
| 严重度 | Issue | 现象 | 是否有 Fix PR | 备注 |
|--------|-------|------|---------------|------|
| **P0 / 生产阻断** | [#108520](https://github.com/openclaw/openclaw/issues/108520) iOS App 更新破坏 Talk Mode/Chat，网关连通但无功能 | 用户端全功能不可用 | ❌ | `ux-release-blocker` 需跨端协同排查 |
| **P1 / 消息丢失** | [#67777](https://github.com/openclaw/openclaw/issues/67777) Subagent 完成投递丢失 | 直接宣布/队列/孤儿清理三重失效 | ❌ | `source-repro` 可复现，核心链路 |
| **P1 / 消息丢失** | [#114020](https://github.com/openclaw/openclaw/issues/114020) Feishu/Telegram 入站分发失败 | `runDispatchLifecycle` 缺失报错 | ❌ | 升级即发生，回滚或热修复 |
| **P1 / 数据丢失** | [#125570](https://github.com/openclaw/openclaw/issues/125570) Skill Workshop apply 覆盖描述字段 | 技能路由静默失效 | ❌ | `data-loss` 隐蔽性强 |
| **P1 / 崩溃循环** | [#93917](https://github.com/openclaw/openclaw/issues/93917) `genericRepeat` 熔断器失效 | 执行结果微变导致无限重试 | [#126013](https://github.com/openclaw/openclaw/pull/126013) 相关 | 需修正检测阈值 |
| **P1 / 进程泄漏** | [#97616](https://github.com/openclaw/openclaw/issues/97616) Hook/Tool 子进程僵尸累积 | 运行时随时间退化 | ❌ | 需引入 `reaper` 模式 |
| **P1 / 会话状态** | [#126246](https://github.com/openclaw/openclaw/issues/126246) Telegram 耐久投递卡在 `send_attempt_started` | 重启后恢复失败，消息丢失 | ❌ | 需持久化 ACK 机制 |
| **P1 / 性能** | [#128156](https://github.com/openclaw/openclaw/issues/128156) 事件循环停顿 60-200s，76% 耗在日志脱敏 | 高并发下吞吐崩塌 | ❌ | 正则替换需异步/流式化 |
| **P2 / 回归** | [#82020](https://github.com/openclaw/openclaw/issues/82020) 自定义 Provider 共享 baseUrl 失效 | 4.29 后回归 | ❌ | 多账号同厂商场景受阻 |
| **P2 / 功能缺失** | [#125838](https://github.com/openclaw/openclaw/issues/125838) QQBot Slash Command 轻量回复无投递 | `/think` `/status` 无响应 | ❌ | `queueable-fix` 标记可快速修复 |

> **修复覆盖率**：Top 10 严重 Bug 中 **仅 1 个有关联 PR**，其余均处于 `ne

---

## 横向生态对比

# 2026-08-25 项目动态重點摘要

## 1. 重要更新

- **OpenClaw** ([openclaw/openclaw](https://github.com/openclaw/openclaw))  
  发布 **v2026.8.1-beta.3**，新增 GPT-5.6 系列模型支持、Control UI 首次运行体验优化、Puppeteer 兼容 CDP 中继等特性。多Agent会话隔离、消息投递安全边界修复合并。

- **Nanobot** ([HKUDS/nanobot](https://github.com/HKUDS/nanobot))  
  合并关键 PR 修复 WebUI 僵死旋转问题，引入 SQLite FTS5 全文搜索索引提升会话检索性能，新增零 Token 条件触发器降低自动化成本。

- **Hermes Agent** ([NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent))  
  合并两条统一 deadline 架构 Phase 修复 PR，解决 MCP 中毒连接恢复与 terminal 超时后孤儿进程残留问题。

- **NanoClaw** ([qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw))  
  发布 **v2.3.0**，新增 per-agent 预置 Slack 应用支持，允许从 Slack 直接生成 agent。

- **Moltis** ([moltis-org/moltis](https://github.com/moltis-org/moltis))  
  发布版本 **20260824.01**，新增 xAI Grok OAuth 支持，修复 Apple Container 标识符长度限制导致的启动失败问题。

- **CoPaw** ([agentscope-ai/CoPaw](https://github.com/agentscope-ai/QwenPaw))  
  发布 **v2.1.1-beta.2**，在 assistant 回复卡片中新增 artifacts 展示，修复 OpenAI Responses API 上 tool-result 视频的交付问题。

- **ZeroClaw** ([zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw))  
  合并 provider 生命周期完整记账 PR，修复 Telegram 媒体信封解析问题，新增统一配对码策略与按 agent 的共享工作区读取门控。

- **LobsterAI** ([netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI))  
  合并跨平台缩略图渲染器 PR，支持图片/视频/PDF/Office/HTML 文件的统一处理，优化本地产物生命周期管理。

## 2. 活跃度概览

OpenClaw、NanoClaw 和 Hermes Agent 今日最为活跃，分别完成版本发布、关键 Bug 修复或架构重构落地。在活跃开发节奏方面，CoPaw 和 LobsterAI 也展现出较高的迭代速度，发布版本并修复多个稳定性问题。整体而言，多个项目聚焦于性能优化、安全加固和跨平台兼容性等核心议题的解决。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 | 2026-08-25

> 数据范围：2026-08-24 00:00 - 23:59 (UTC) | 数据来源：GitHub API

---

## 1. 今日速览

**高活跃度开发日**。过去 24 小时内，**无新版本发布**，但代码库发生剧烈变动：**26 个 PR 更新**（14 个待合并，12 个已合并/关闭）、**8 个新增/活跃 Issue**。核心维护团队（`yrxeva`、`chengyongru`、`Re-bin`、`Oxygen56` 等）集中攻坚 **WebUI 稳定性、Provider 追踪体系重构、会话搜索性能、Agent 任务持久化** 四大方向。多个长期积压的架构级 PR（如 #5480 Provider Usage Contract、#5497 Config Editor Contract）在今日同步更新，显示项目正处于**基础设施重构收尾、功能特性并行推进**的密集期。社区外部贡献者（`cleverLucky` AnySearch、 `akinolur` Langfuse/Codex）亦提交集成 PR，生态扩展信号明确。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展：已合并/关闭的关键 PR（12 个）

今日合并的 PR 多为**基础设施加固**与**回归修复**，显著提升了系统鲁棒性与可观测性。

| PR | 类型 | 核心变更 | 影响面 |
| :--- | :--- | :--- | :--- |
| **[#5507](https://github.com/HKUDS/nanobot/pull/5507)** | `feat` `performance` | **SQLite FTS5 全文搜索索引**：为 `SessionManager.search_sessions` 引入异步构建的 FTS5 镜像索引，解决海量 JSONL 扫描慢的问题，提供安全回退机制。 | 会话历史检索性能（质变级提升） |
| **[#5508](https://github.com/HKUDS/nanobot/pull/5508)** | `feat` `performance` | **ConditionalTriggerRuntime（零 Token 条件触发器）**：Gateway 新增轻量级纯 Python 条件监控器，仅在条件命中时唤醒 LLM，替代心跳轮询的高成本模式。 | 自动化任务成本降低、架构解耦 |
| **[#5506](https://github.com/HKUDS/nanobot/pull/5506)** | `fix` | **修复 WebUI 项目工作区未传递给模型**：将选中的项目路径暴露为模型 CWD，保留提示词缓存复用。 | 多项目隔离、上下文准确性 |
| **[#5496](https://github.com/HKUDS/nanobot/pull/5496)** | `fix` `regression` | **修复无工具模型请求超时保护缺失**：`AgentRunner` 增加壁钟超时覆盖 `malformed-call recovery` 等直连 Provider 调用，防止会话挂起。 | Agent 稳定性（关键回归修复） |
| **[#5517](https://github.com/HKUDS/nanobot/pull/5517)** | `test` `exec` | **修复 Windows 进程计时竞态**：轮询机制替代超时假设，显式握手根进程退出与子进程就绪，消除 CI 不稳定。 | CI 可靠性、跨平台兼容 |
| **[#5481](https://github.com/HKUDS/nanobot/pull/5481)** | `feat` `usage` | **统一 Provider Usage 后端**：每次重试管理的 Provider 尝试均记录无内容 Usage 行，奠定计费/配额基石。 | 可观测性、成本控制 |
| **[#5480](https://github.com/HKUDS/nanobot/pull/5480)** | `refactor` `provider` | **Provider Usage 契约类型化**：以不可变 `LLMUsage` 替代动态字典，在 OpenAI/Anthropic/Bedrock 边界归一化 Token 与 Cache 语义。 | 架构健壮性、类型安全（重构基石） |
| **[#5514](https://github.com/HKUDS/nanobot/pull/5514)** | `fix` `webui` `regression` | **修复 Gateway 重连后 WebUI 僵死旋转状态** (`Closes #5512`)：`useNanobotStream` 订阅 `onRunStatus`，重置时清理残留流式状态。 | WebUI 核心可用性（阻塞级 Bug） |
| **[#5291](https://github.com/HKUDS/nanobot/pull/5291)** | `fix` `agent` | **持久化 Subagent 对话记录**：后台子任务完整工具调用/推理步骤落盘，支持事后审计。 | 可观测性、调试体验 |
| **[#5344](https://github.com/HKUDS/nanobot/pull/5344)** | `fix` `agent` | **Agent 重复工具调用检测**：连续相同参数调用触发警告而非静默消耗 `max_iterations`。 | 成本控制、异常感知 |
| **[#5349](https://github.com/HKUDS/nanobot/pull/5349)** | `fix` `test` | **修复设置测试时区依赖**：显式传入 `timezone_name` 消除每日 5 小时窗口的确定性失败。 | CI 稳定性 |
| **[#5430](https://github.com/HKUDS/nanobot/pull/5430)** | `fix` `agent` | **释放已完成任务组引用**：防止长跑 `AgentLoop` 累积空 `Set` 导致内存泄漏。 | 内存管理 |

**进展评估**：今日合并 **3 个架构级重构**（Usage Contract、FTS5 Search、Conditional Trigger）、**3 个阻塞级回归修复**（WebUI 僵死、Agent 超时、Windows CI）、**2 个可观测性增强**（Subagent 记录、重复调用检测）。主分支代码质量显著跃升，**技术债偿还比例极高**。

---

## 4. 社区热点：高互动/高关注 Issues & PRs

| 对象 | 标题 | 互动 | 核心诉求分析 |
| :--- | :--- | :--- | :--- |
| **Issue [#5350](https://github.com/HKUDS/nanobot/issues/5350)** | **Proposal: 兼容 QwenCloud Provider 路径** | 💬 2 | **厂商生态适配**：DashScope (国内) 与 QwenCloud (国际) 共存现实，用户需**零迁移成本**切换/并存，避免配置失效。维护者倾向于 Provider 抽象层统一处理而非硬编码新 ID。 |
| **Issue [#5512](https://github.com/HKUDS/nanobot/issues/5512)** | **Bug: Gateway 重启后 WebUI 僵死旋转** | 💬 1 | **生产环境阻塞级故障**：前端未收到 `goal_status: idle` 导致 `isStreaming` 永久为真。已由 **PR #5514** 即时修复并关闭，响应极快。 |
| **Issue [#5516](https://github.com/HKUDS/nanobot/issues/5516)** | **Telegram: 流式模式下富文本永不渲染** | 💬 0 (新) | **渠道能力冲突**：`rich_messages` 与 `streaming` 互斥。Bot API 10.1+ 草案支持流式编辑，需适配新版 API 解锁体验。 |
| **PR [#5498](https://github.com/HKUDS/nanobot/pull/5498)** | **feat(config): Agent TUI 统一引导/配置编辑器** | 💬 多 (关联 #5497) | **用户体验统一**：跨传输层的完整配置编辑契约，乐观修订、密钥安全快照。TUI 与 WebUI 共享 Schema 驱动 UI，降低维护成本。 |
| **PR [#5520](https://github.com/HKUDS/nanobot/pull/5520)** | **Add Langfuse tracing to Codex provider** | 💬 0 (新) | **可观测性补齐**：Codex 走 raw httpx/OAuth 无法复用 OpenAI SDK 客户端置换技巧，引入 Langfuse 原生 SDK 逐请求埋点。外部贡献者 `akinolur` 推动。 |

---

## 5. Bug 与稳定性：今日报告/修复追踪

| 严重度 | Issue / PR | 状态 | 描述 | 修复 PR |
| :--- | :--- | :--- | :--- | :--- |
| **🔴 Critical (阻塞)** | [#5512](https://github.com/HKUDS/nanobot/issues/5512) | **已修复** | Gateway 重启导致 WebUI 聊天永久旋转，用户无法继续对话。 | [#5514](https://github.com/HKUDS/nanobot/pull/5514) (Merged) |
| **🟠 High (回归)** | [#5496](https://github.com/HKUDS/nanobot/pull/5496) | **已修复** | 无工具模型请求（恢复/最终化）缺乏超时保护，导致会话无限挂起。 | [#5496](https://github.com/HKUDS/nanobot/pull/5496) (Merged) |
| **🟠 High (逻辑)** | [#5344](https://github.com/HKUDS/nanobot/pull/5344) | **已修复** | Agent 陷入相同工具/参数无限循环，静默烧光预算，无任何信号。 | [#5344](https://github.com/HKUDS/nanobot/pull/5344) (Merged) |
| **🟡 Medium (数据)** | [#5515](https://github.com/HKUDS/nanobot/pull/5515) | **待合并** | `SendSessionMessageTool` 后台超时任务失败被静默丢弃，掩盖消息总线故障。 | [#5515](https://github.com/HKUDS/nanobot/pull/5515) (Open) |
| **🟡 Medium (平台)** | [#5517](https://github.com/HKUDS/nanobot/pull/5517) | **已修复** | Windows CI 进程树清理竞态导致测试不稳定。 | [#5517](https://github.com/HKUDS/nanobot/pull/5517) (Merged) |
| **🟢 Low (功能缺失)** | [#5516](https://github.com/HKUDS/nanobot/issues/5516) | **Open** | Telegram 流式模式下富文本渲染完全失效，需 Bot API 10.1+ 支持。 | 无 |

**稳定性趋势**：**核心阻塞 Bug 修复周期 < 小时级**（#5512 -> #5514）。回归测试覆盖率提升明显（新增 #5496、#5515、#5349 回归测试）。

---

## 6. 功能请求与路线图信号

结合 Issue 与对应实现 PR，以下特性**极大概率进入近期里程碑**：

| 功能需求 | Issue | 实现 PR | 就绪度 | 备注 |
| :--- | :--- | :--- | :--- | :--- |
| **会话全文搜索 (FTS5)** | [#5509](https://github.com/HKUDS/nanobot/issues/5509) | [#5507](https://github.com/HKUDS/nanobot/pull/5507) | ✅ **已合并** | 性能痛点直接解决，异步索引 + 安全回落，工程质量高。 |
| **零 Token 条件触发器** | [#5510](https://github.com/HKUDS/nanobot/issues/5510) | [#5508](https://github.com/HKUDS/nanobot/pull/5508) | ✅ **已合并** | 架构创新：纯 Python 预过滤，仅命中唤醒 LLM，成本降维打击。 |
| **Cron 结果路由/批量归档** | [#5513](https://github.com/HKUDS/nanobot/issues/5513) | - | 🟡 **设计阶段** | 运维自动化核心诉求：噪音隔离、批量管理。等待实现 PR。 |
| **崩溃安全任务账本** | [#5511](https://github.com/HKUDS/nanobot/issues/5511) | - | 🟡 **设计阶段** | 多步 Agent 持久化关键，`tasks.json` 原子写入设计，依赖 #5291 Subagent 持久化基建。 |
| **AnySearch Web Search Provider** | [#5505](https://github.com/HKUDS/nanobot/issues/5505) | - | 🟢 **外部 PR 待提交** | 官方团队 (`cleverLucky`) 主动适配，匿名额度+多集成方式，生态扩展标杆。 |
| **QwenCloud Provider 兼容** | [#5350](https://github.com/HKUDS/nanobot/issues/5350) | - | 🟡 **讨论中** | 需在 Provider 抽象层解决，避免硬编码 ID 扩散。 |
| **TUI/WebUI 统一配置编辑器** | - | [#5497](https://github.com/HKUDS/nanobot/pull/5497) [#5498](https://github.com/HKUDS/nanobot/pull/5498) | 🟢 **Review 中** | 契约层已合并 (#5497)，TUI 实现 (#5498) 待通过冲突解决。 |

---

## 7. 用户反馈摘要：真实痛点与场景

从 Issue 评论与 PR 描述中提炼：

1.  **“Gateway 重启即服务中断”** (#5512)：**生产环境最痛点**。用户期望 **热重启/优雅降级**，前端

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-08-25

> 数据源：github.com/nousresearch/hermes-agent | 统计区间：2026-08-24 ~ 2026-08-25（过去 24 小时）

---

## 1. 今日速览

过去 24 小时项目保持**高活跃度**：共 50 条 Issue 更新（40 条活跃/新开，10 条关闭）、50 条 PR 更新（40 条待合并，10 条已合并/关闭）。**无新版本发布**，项目处于大版本间的密集修复迭代期。今日最值得关注的是 **#85125「统一 deadline 层」架构修复持续推进**——两条分别针对 terminal 和 MCP 的 Phase 落地 PR（#94187、#94184）今日合并，直接回应社区积压的 400+ timeout/hang 类问题。但与此同时，**一项 P1 级 Gateway SIGSEGV 崩溃（#94248）今日集中爆发**（5 起崩溃报告、均指向 delegate 超时后崩溃），是当前最需优先处理的稳定性风险。

---

## 2. 版本发布

**无新版本发布。** 当前项目处于 v0.20.x 迭代线（Hermes Studio 0.6.47 / hermes runtime 0.20.4），通过高频 PR 合入持续修复回归。

---

## 3. 项目进展

### 今日重要合并/关闭 PR

**核心架构推进（#85125 多阶段计划）：**

- **[PR #94187] fix(terminal): sweep setsid descendants after local timeout group-kill（#85125 Phase 4b）** — [链接](https://github.com/NousResearch/hermes-agent/pull/94187)
  Terminal 超时后不再遗留孤儿 setsid 进程，补全**本地 backend 超时清理**链条。属于 4 阶段统一 deadline 架构中的第 4b 步。
- **[PR #94184] fix(mcp): recover poisoned connections + fail fast on dead stdio transports（#85125 Phase 3b）** — [链接](https://github.com/NousResearch/hermes-agent/pull/94184)
  为 MCP 连接层引入 `mark_suspect/ensure_healthy` 协议，实现**中毒连接恢复**与**死 stdio 快速失败**。一次覆盖 #81051、#77765、#84132、#81995 四个已知 bug。

这两条 PR 的合入标志着 #85125 从设计走向落实，**结构性消除超时/挂起类问题的目标正逐步兑现**——该类问题在开源积压中多达 400+ 条。

### 今日关闭的 Bug/Feature（体现已修复的问题）

| Issue | 内容 | 链接 |
|-------|------|------|
| #59499 | Kanban 任务分发器忽略 `max_in_progress_per_profile`，并发无上限导致资源耗尽 | [链接](https://github.com/NousResearch/hermes-agent/issues/59499) |
| #53666 | `clarify` 工具提示在聊天界面不渲染，用户看不到问题、回复为空 | [链接](https://github.com/NousResearch/hermes-agent/issues/53666) |
| #92430 | Telegram /model 选择器出现重复 OpenRouter 条目 | [链接](https://github.com/NousResearch/hermes-agent/issues/92430) |
| #94177 | OpenWebUI 接入时 MEDIA 图片未内联为 base64（已关闭） | [链接](https://github.com/NousResearch/hermes-agent/issues/94177) |
| #74799 | `CuaDriverBackend.call_tool` MCP 超时后不重启会话，导致后续调用全部失败 | [链接](https://github.com/NousResearch/hermes-agent/issues/74799) |

> 注：#94177 虽关闭，但同根因的 **#7895（OpenWebUI 图片集成）仍开放 4 个月**，建议确认修复是否完整覆盖所有接入场景（见第 8 节）。

---

## 4. 社区热点

### 热度最高的 Issue

| Issue | 评论数 | 类型 | 链接 |
|-------|--------|------|------|
| #66616 — Skills index 过期/降级（自动探针失败，降级 29.8h > 上限 26h） | **90** | bug/P3 | [链接](https://github.com/NousResearch/hermes-agent/issues/66616) |
| #85125 — 统一 deadline 层架构跟踪（4 阶段） | **20** | feature/P3 | [链接](https://github.com/NousResearch/hermes-agent/issues/85125) |
| #25833 — 自创建技能缺乏机制级正确性保证 | **10** | feature/P2 | [链接](https://github.com/NousResearch/hermes-agent/issues/25833) |
| #80246 — context 压缩阈值检查低估 `reasoning_content`，长推理会话误报 context overflow | **8** | bug/P2 | [链接](https://github.com/NousResearch/hermes-agent/issues/80246) |
| #7895 — OpenWebUI 集成图片不发送（**👍 3**） | 4 | feature | [链接](https://github.com/NousResearch/hermes-agent/issues/7895) |

**诉求分析：**

- **#66616（90 条评论）** 是自动化 freshness probe 持续告警：Skills Hub 依赖的 `skills-index.json` 重建超时（29.8h > 26h 上限）。虽为 P3，但它是**基础设施级健康度指标**，90 条评论说明维护者与用户对文档/索引链路的不稳定已有充分关注，需尽快排查 cron 链路（`skills-index.yml` / `deploy-site.yml`）。
- **#85125（20 条评论)** 集中表达了社区对 timeout/hang/stuck 问题的普遍痛点——该项目将其归纳为 **7 类机制性根因**，并推进 4 阶段修复。今日两条 Phase PR 合入是对该热点的直接响应。
- **#80246（8 条评论）** 反映真实用户体验痛点：使用 DeepSeek/Kimi 的 thinking 模式时，token 估算器 `Ue()` 忽略 `reasoning_content`，导致**明明未到上下文上限却收到“context overflow”误报**，是 reasoning 模型的通用性问题。

---

## 5. Bug 与稳定性

按严重程度排列（⚠️ = 已有修复 PR，✅ = 已有合并 PR，— = 暂无 fix）：

### 🔴 P1 — 严重崩溃

- **[#94248] Gateway SIGSEGV 17–72ms 后 delegate deadlines 触发（macOS arm64, v0.20.4）** — [链接](https://github.com/NousResearch/hermes-agent/issues/94248)，暂无 fix PR
  用户提交了 **12 份 Apple 原生崩溃报告（2026-08-19 至 08-24，今日 5 份）**，均发生在 delegated workers 到达 600 秒 deadline 的瞬间，`gateway.error.log` 有明确记录。**属于近期高频重现的稳定性事故**，建议优先排查 delegate 超时收尾路径（可能与 #85125 的 deadline 重构相关，但该 PR 尚未覆盖此崩溃路径）。

### 🟠 P2 — 功能异常/体验受损

- **[#93888] Desktop 将本地 runtime ID 发送给 Remote Gateway，无法恢复已存会话** — [链接](https://github.com/NousResearch/hermes-agent/issues/93888)，暂无 fix PR
  桌面端发 8 位本地 runtime ID，远程端找不到会话，永久卡在 “Restore failed — Session not found”。
- **[#93959] 从已有会话创建分支（Branch）失败并无限挂起** — [链接](https://github.com/NousResearch/hermes-agent/issues/93959)，暂无 fix PR
- **[#92701] docker 后端 session task_id 含冒号时，容器路径未转义 → `docker run` exit 125 "too many colons"** — [链接](https://github.com/NousResearch/hermes-agent/issues/92701)，暂无 fix PR，影响所有 `terminal_backend: docker` + 持久容器的用户。
- **[#93865] 选择 “Browser Automation” 静默丢弃 `browser.use_gateway` 配置** — [链接](https://github.com/NousResearch/hermes-agent/issues/93865)，暂无 fix PR，破坏受管 gateway 连接。
- **[#94078] shell 启动诊断（如 BASH_ENV）污染文件操作数据通道** — [链接](https://github.com/NousResearch/hermes-agent/issues/94078)，暂无 fix PR。
- **[#94235] “Clone from profile” 克隆的 Bot 删除后 1–2 秒内复活** — [链接](https://github.com/NousResearch/hermes-agent/issues/94235)，暂无 fix PR。
- **[#80246] context 压缩阈值低估 `reasoning_content` → 误报 context overflow** — [链接](https://github.com/NousResearch/hermes-agent/issues/80246)，暂无 fix PR。
- **[#94167] 恢复的后台标签页在首次激活前一直显示 “New session”** — [链接](https://github.com/NousResearch/hermes-agent/issues/94167)，暂无 fix PR，体验类问题。

### 🟡 已有关联修复（今日合并/待合并）

- **[#94187]**（✅ 今日合并）修复 terminal 超时后 setsid 孤儿进程 — 对应 #85125 4b。
- **[#94184]**（✅ 今日合并）修复 MCP 中毒连接/死 stdio 传输 — 对应 #85125 3b。
- **[#70801]**（⚠️ 待合并）修复 MEDIA 文件路径含空格时被截断 — [链接](https://github.com/NousResearch/hermes-agent/pull/70801)。
- **[#94244]**（⚠️ 待合并）修复 gated 模式下 loopback `?token=` WS 认证失败（#93981） — [链接](https://github.com/NousResearch/hermes-agent/pull/94244)。
- **[#94253]**（⚠️ 待合并）修复 wlroots/Wayland 下 Quick Entry 全局热键失效（#82654） — [链接](https://github.com/NousResearch/hermes-agent/pull/94253)。

---

## 6. 功能请求与路线图信号

### 高价值 / 可能纳入下一版本的信号

| 请求 | 说明 | 关联状态 |
|------|------|----------|
| #85125 统一 deadline 层（架构级） | 4 阶段根治 timeout/hang 积压（400+ 条） | ✅ 进行中，今日 Phase 3b + 4b 已合并 |
| #94222 降低单请求 context 占用 + 缓存命中可见性 | DeepSeek 用户对比 Reasonix：同任务费用 **+58%**，强烈希望暴露缓存命中状态 | 🆕 新开 P3，待决策 |
| #94251 内置 plan-then-approve（先计划、批准前不写盘）模式 | 参考 Reasonix 的 plan mode；当前 `/plan` 仅为外部 skill，希望原生支持 | 🆕 新开 P3，标记 duplicate（已有同类提案） |
| #90654 内嵌浏览器闭环 — 元素选择器 + 代理页面操作 | RFC：补齐 in-app browser 的“指定目标”与“执行操作”缝隙 | 🆕 RFC 讨论中 |
| #5320 自动提升/缩放 `memory_char_limit` 默认值 | 默认 2200 字符在当前长会话场景频繁触顶 | 4 个月老请求，P3 |
| #94245 WS-only 轻量服务器（去 FastAPI/uvicorn） | PR 已提交，减少桌面启动路径依赖，属去除 dashboard 层叠的 Step 1 | ⚠️ PR 待合 |

### 已提交 PR、大概率被合入

- **[PR #94243] 刷新 DeepSeek 2026-08-16 官方定价 + 高峰计费**（对应 #94221 的 Python 侧） — [链接](https://github.com/NousResearch/hermes-agent/pull/94243)。与 #94222 同出 DeepSeek 成本问题，合入后成本显示将更准确。
- **[PR #92300] 新增 MindsHub 模型供应商**（兼容 OpenAI/Anthropic 的推理网关） — [链接](https://github.com/NousResearch/hermes-agent/pull/92300)。用户呼声渐增的多供应商扩展。
- **[PR #94247] Kanban 自主发起 + 严格只读 worker（安全增强）** — [链接](https://github.com/NousResearch/hermes-agent/pull/94247)。

---

## 7. 用户反馈摘要

**痛点与真实使用场景：**

- **DeepSeek 成本对比焦虑（#94222）**：用户给出精确对比数据——同一任务，Reasonix 257 请求 / 76.8M tokens，Hermes Studio 257 请求 / 86.1M tokens，**每请求 token 利用率偏低**，总费用 +58%。用户明确诉求是“减少每请求上下文占用 + 暴露缓存命中率”，说明当前 context 管理对推理模型不够友好。
- **plan-then-approve 工作流需求（#94251）**：Windows 用户希望借鉴 Reasonix 的“先计划、批准前不写盘”，当前 `/plan` 仅为外部 skill 而非原生模式，号召力强但已标记 duplicate，说明社区对此类“安全写入”模式有持续需求。
- **OpenWebUI 集成反复困扰（#94177/#7895）**：用户测试了 Cloudflare tunnel / 直连 IP、External/Internal 两种连接、Chat/Responses 两种 API 类型，**均不生效**——反馈非常具体，说明这条集成路径（web UI + Hermes 后端）有大量真实用户，而图片/媒体传输问题从 4 月至今仍未根治。
- **P1 崩溃的认真上报（#94248）**：用户上传 **12 份 Apple crash report**，时间跨度 6 天，定位精确到 delegate deadline 后的 17–72ms 窗口。这类高质量报告对维护者排查极有价值。
- **clarity 与空回复（#53666）**：`clarify` 工具提示不渲染导致“用户看不到问题、只能空回复”已修复关闭，说明交互链路中对“询问-确认”环节的 UI 呈现要求高。

**整体满意度信号：** 今日关闭的 6 个 Issue 多数为 P1/P2 级真实故障（Kanban 并发、clarify 渲染、重复模型条目、MCP 超时恢复），用户反馈整体呈“问题回报→快速修复”的良性循环；但 #85125 的 4 阶段工程仍走在半途，社区对超时/挂起类问题的耐心需要以“合并节奏”维持。

---

## 8. 待处理积压

以下为长期未响应、或响应缓慢但对社区影响力较高的事项，建议维护者关注：

| 事项 | 年龄 | 影响力/关联 | 建议 |
|------|------|------------|------|
| **#66616 Skills index 降级** — [链接](https://github.com/NousResearch/hermes-agent/issues/66616) | 38 天（2026-07-18 起），90 条评论 | 文档/Skills Hub 基础设施，freshness probe 持续告警（29.8h > 26h） | 虽是 P3 但评论量居首，建议安排排查 CI rebuild 链路 |
| **#7895 OpenWebUI 图片不发送** — [链接](https://github.com/NousResearch/hermes-agent/issues/7895) | 4 个月，👍 3 | 与今日关闭的 #94177 同根因；集成路径用户量大 | 建议确认今日修复是否完整覆盖所有接入形态，并在该 Issue 同步进展 |
| **#25833 自创建技能缺机制级保证** — [链接](https://github.com/NousResearch/hermes-agent/issues/25833) | 3 个月，P2 | 技能自动创建循环是 Hermes 核心卖点，用户在意正确性/一致性 | 建议纳入下一迭代 |
| **#5320 memory_char_limit 默认值过小** — [链接](https://github.com/NousResearch/hermes-agent/issues/5320) | 4 个月，P3 | 影响长会话用户体验 | 低优先级，可并入配置文件改造 |
| **#56337 Telegram 命令解析吞参数** — [链接](https://github.com/NousResearch/hermes-agent/issues/56337) | 近 2 个月，P2 | 群聊中 `/command@Bot args` 被错误解析，属于 Telegram 适配器核心路径 | 建议优先排期 |
| **#33683 Discord 语音频道模式** — [链接](https://github.com/NousResearch/hermes-agent/issues/33683) | 3 个月，👍 1 | 功能规划信号，Hermes 已有语音基础能力，属长线扩展 | 路线图层面可考虑 |
| **PR #50086 state.db 跨 profile 去重（symlink 导致重复扫描）** — [链接](https://github.com/NousResearch/hermes-agent/pull/50086) | 2 个月未合 | 影响桌面侧边栏 session 列表性能 | 建议 review 合入 |
| **PR #68499 分离委托生命周期与任务结果** — [链接](https://github.com/NousResearch/hermes-agent/pull/68499) | 1 个月，P2 | 涉及 gateway/TUI/Desktop 三端状态展示正确性（false-green 风险） | 建议优先评估 |
| **PR #70901 MCP 未配置时日志无限刷警告** — [链接](https://github.com/NousResearch/hermes-agent/pull/70901) | 1 个月 | 用户体验噪音 | 低风险，可快速合入 |

---

## 小结

Hermes Agent 当前处于**高频修复 + 架构重构并行**的健康节奏：#85125 的落地让历史最大痛点（超时/挂起）看到结构性解决方案；但 #94248 的 SIGSEGV 暴露了 delegate 收尾路径上的新（或旧）崩溃点，建议下个迭代优先排入。社区新需求集中在 **成本透明性（DeepSeek 缓存可见性）、plan-then-approve 安全模式、多供应商接入（MindsHub）** 三个方向，与现有 PR 池高度契合，预计下一小版本（v0.20.x 后续）将陆续接纳。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-08-25**


## 1. 今日速览

PicoClaw 项目过去 24 小时整体活跃度处于中等水平。共产生 2 条 Issue 更新（均为活跃状态，无新增关闭）和 3 条 PR 更新（1 条待合并，2 条已合并/关闭），暂无新版本发布。社区讨论焦点集中在 Web UI 支持（#806，10 条评论）和 Slack 媒体上传 Bug（#3338）两个方向。值得注意的是，今日关闭的两个 PR（#1929、#1551）均为数日前创建并已合并或关闭，说明项目在持续消化历史 PR 积压；但 #3299（Exa 搜索）与 #806（Web UI）等长线任务仍处于开放状态，路线图推进速度有待观察。


## 2. 版本发布

过去 24 小时内无新版本发布。建议关注近期 PR 合并情况（见下节），Web 安全凭证修复（#1929）和多个修复合并（#1551）可能进入下一版本的发布候选。


## 3. 项目进展

今日有 2 个 PR 完成合并/关闭：

| PR | 标题 | 状态 | 意义 |
|---|---|---|---|
| [#1929](https://github.com/sipeed/picoclaw/pull/1929) | fix: apply security credentials before config validation in web handlers | ✅ 已合并/关闭 | 修复 Web 启动器配置保存失败问题。此前 `validateConfig()` 在安全凭证（如 `.security.yml` 中的 token）应用之前执行，导致 PATCH/PUT `/api/config` 接口报 "pico token is required" 错误。该修复消除了 Web 配置流程中的关键阻塞。 |
| [#1551](https://github.com/sipeed/picoclaw/pull/1551) | fix: merge PR #1428 #1422 #1417 | ✅ 已合并/关闭 | 一次性合并了三个待处理 PR 的修复内容（#1428、#1422、#1417），属于批量清理积压修复的合并操作，具体修复内容取决于三个子 PR 的范围。 |

**项目推进评估：** 今日主要完成了 Web 配置链路的关键修复和安全相关完善，属于稳定性方向的增量推进；#1551 的合并有助于减轻维护者的 PR 审查负担。但整体来看，今日无功能性大版本推进。


## 4. 社区热点

**[Issue #806 — Add webUI support (Refactoring now)](https://github.com/sipeed/picoclaw/issues/806)**

- 状态：开放，优先级 high，路线图类型
- 评论数：10 | 👍 8 | 最近更新：2026-08-24（近半年持续活跃）
- 作者：Zepan

**诉求分析：** 这是当前社区关注度最高的议题。Issue 提出为 PicoClaw 增加浏览器端 Web UI，降低非技术用户的使用门槛。作者明确表示 TUI 对终端用户友好，但对 "non-tech" 用户不够直观。8 个 👍 和 10 条评论表明社区对 Web 化有较强的呼声。该 Issue 标记为 "Refactoring now"，暗示可能伴随一次较大的架构重构。这是项目从开发者工具向更广泛用户群体扩展的重要信号。


## 5. Bug 与稳定性

今日报告 1 个 Bug：

| 严重程度 | Issue | 描述 | 是否有 Fix PR |
|---|---|---|---|
| 🔴 高 | [#3338](https://github.com/sipeed/picoclaw/issues/3338) — Slack does not attach image media content | **根因明确：** `SendMedia` 构建 `slack.UploadFileParameters` 时未设置 `FileSize` 字段，导致 slack-go SDK 在发起网络请求前即拒绝所有上传（报 `file.upload.v2: file size cannot be 0`）。**影响：** Slack 渠道的图片/媒体附件功能完全不可用。 | ❌ 暂无对应 Fix PR |

**评估：** 该 Bug 根因清晰、修复路径明确（补设 `FileSize`），属于低成本高收益的修复项，建议尽快安排。


## 6. 功能请求与路线图信号

**明确的功能请求：**

1. **[#806 — Web UI 支持](https://github.com/sipeed/picoclaw/issues/806)**（优先级：high，路线图类型）— 目前最明确的功能方向。该 Issue 标记为 "Refactoring now"，说明可能在代码层面已经开始进行相关重构准备。若与 PR #1929（Web 配置修复）关联看待，项目似乎正在逐步完善 Web 相关基础设施，Web UI 有可能进入下一版本规划。

2. **[PR #3299 — Exa 原生 Web 搜索提供商](https://github.com/sipeed/picoclaw/pull/3299)**（状态：开放，标记 stale）— 为 `tools.web` / `web_search` 添加 Exa 作为原生提供商，支持 `type: "auto"` 和 `contents.highlights`，并通过 `startPublishedDate` 支持现有的 `d`/`w`/`m`/`y` 时间范围过滤。该 PR 已开放约一个月且被标记为 stale，若社区对搜索扩展有需求，建议维护者评估合并。

**路线图判断：** Web UI 是明确的路线图方向（标记为 high priority + roadmap），下一版本有可能围绕 Web 体验展开；搜索提供商的扩展（Exa）取决于维护者对该方向的优先级判断。


## 7. 用户反馈摘要

从今日活跃的 Issue 评论中提炼的反馈：

- **Web UI 需求迫切（#806）：** 用户认为 TUI 对终端用户是好的，但浏览器界面是 "非技术" 用户管理 PicoClaw 实例最直观的方式。8 个 👍 表明该诉求在社区中有较广泛的共鸣。
- **Slack 媒体上传完全不可用（#3338）：** 用户报告 Slack 上传图片时始终失败，错误信息为 `file size cannot be 0`。问题定位到 SDK 层面，属于稳定的可复现 Bug，影响 Slack 渠道用户的日常使用体验。

**整体满意度信号：** 社区对项目方向（Web UI）有期待但尚未落地；Slack 集成存在明确的功能缺陷需要修复。项目应优先解决 #3338 以维持渠道集成的可靠性。


## 8. 待处理积压

以下为长期未得到有效响应或推进的重要条目，建议维护者关注：

| 条目 | 类型 | 开放时间 | 状态 | 建议 |
|---|---|---|---|---|
| [#806 — Web UI 支持](https://github.com/sipeed/picoclaw/issues/806) | 功能请求 | 2026-02-26（近 6 个月） | 开放，high priority，roadmap | 虽标记 "Refactoring now" 且近期有更新，但已开放半年，社区关注度高（👍8），建议明确时间表或阶段性进展 |
| [#3299 — Exa 搜索提供商](https://github.com/sipeed/picoclaw/pull/3299) | PR | 2026-07-26（1 个月） | 开放，已标记 stale | 待维护者 review/merge 或关闭，避免长期悬置 |
| [#3338 — Slack 媒体上传 Bug](https://github.com/sipeed/picoclaw/issues/3338) | Bug | 2026-08-17（1 周） | 开放，无 fix | 根因明确，建议尽快安排修复 |

---

**项目健康度总评：** ⭐⭐⭐☆（3/5）

- **积极信号：** 今日完成 Web 配置安全修复和 PR 积压清理；Web UI 路线图方向明确且社区认可度高；无回归性问题。
- **风险信号：** Slack 媒体上传 Bug 影响核心渠道功能且无修复 PR；#806 路线图任务开放半年未见落地；#3299 被标记 stale，说明部分 PR 审查存在延迟。

建议维护者优先处理 #3338（低成本高影响），并为 #806 发布阶段性进展说明，保持社区预期管理。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报（2026-08-25）

---

## 1. 今日速览

过去 24 小时 NanoClaw 保持高活跃度：共产生 3 条 Issue（2 新开、1 关闭）、19 条 PR（16 待合并、3 已合并/关闭），并发布了 v2.3.0 版本。当日核心动作集中在三块：**macOS 平台稳定性修复合集**（#3497/#3498 两条新 Issue 与 #3506/#3499 两条针对性 fix PR 同日出现，形成闭环）、**新渠道接入**（Mattermost 双 PR、Dial 渠道文档补全）、以及 **v2.3.0 的 Slack 体验大版本升级**（含一项需用户决策的破坏性变更提示）。整体看项目处于功能扩张与稳定性加固并行的健康迭代节奏。

---

## 2. 版本发布

### v2.3.0

**核心内容**：面向经典 single-bot Slack 安装的用户，推出全新的 Slack 体验——**per-agent 预置 Slack 应用（provisioned Slack apps）**、支持**从 Slack 直接生成 agent**（agent spawning），并包含一系列 UX 改进。

**⚠️ 破坏性变更提醒**：经典 Slack 安装保持原样可用，该门控（gate）仅是要求用户**做一次决策**，而非强制迁移。新安装及非 Slack 安装不受影响。建议现有 classic Slack 用户评估是否切换至 per-agent 模式，但当前无强制迁移风险——升级前只需确认团队对新 Slack 工作流（逐 agent 应用隔离）的接受度即可。

---

## 3. 项目进展（已合并/关闭的重要 PR）

今日 3 条 PR 被合并/关闭，均为较早提交（5 月）的存量功能，说明积压评审正在消化：

- **#2474 [CLOSED] feat(setup): AI-coding-CLI picker** — 为 setup 流程加入"Claude Code 或 OpenAI Codex"的 CLI 选择器框架，支持后续 Aider/Gemini-CLI 等作为可插拔适配器。**推进**：安装引导的自动化/失败兜底不再硬编码单一 CLI。
- **#2475 [CLOSED] feat(codex): surface skills + persona to codex agents** — 让 Codex agent 看到与 Claude Code agent 相同的 persona 与 skill 目录，实现供应商切换只需改配置而非重写内容。**推进**：多供应商体系下 agent 能力对齐的一大步。
- **#2338 [CLOSED] fix(telegram): escape stray `*` and `_` instead of stripping** — 修复遗留 Markdown 过滤器在奇数次 `*`/`_` 时整体删字符、导致含下划线 URL 被破坏的问题。**推进**：Telegram 出站消息的健壮性提升。

此外待合并队列中值得关注的功能型 PR：**#3396（聊天中按模板创建 agent）**、**#3428（Slack 创建流程贯穿模板引用）**、**#3503（Apple Container 会话驱动，首个 driver seam overlay）**、**#3502/#3507（Mattermost 渠道适配 + 安装技能）**——若相继合并，v2.4 的功能面将显著拓宽。

---

## 4. 社区热点

- **#2767（已关闭）Telegram 遗留 Markdown 过滤器被上游淘汰** — 唯一带评论的 Issue。[讨论要点]：`@chat-adapter/telegram@4.30.0` 已原生支持 `parse_mode=MarkdownV2`，本地 `telegram-markdown-sanitize.ts` 变为了让位于上游的兜底方案。**诉求**：清理技术债、移除 workaround 代码——合并方向大概率是直接删掉该 sanitizer 或降级为告警，与 #2338（已合并）属同一关注域。

- **#3498 macOS 上 update-nanoclaw 控制器静默退出（exit 0 却不执行）** — 当日新开、0 评论但同批引出两条独立 fix PR（#3506、#3499），是当日被修复最密集的 Issue。**诉求**：macOS 用户执行文档化升级命令无效果，是典型的"文档承诺 vs 实际行为"落差。

- **#3504 Reconcile 本地 7 条未推送分支** — 属内部工程流程 PR（本地历史与 origin/main 对齐，20 commits 重组为可独立构建的提交序列），非用户可见功能，但反映核心维护者正在清理分支积压。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | Issue | 问题描述 | 修复状态 |
|---|---|---|---|
| 🔴 高 | [#3497](https://github.com/nanocoai/nanoclaw/issues/3497) | `better-sqlite3@13.0.3` 在 Node `>=22` 但 `<22.14.0` 的 macOS 上 `new Database()` 直接段错误（segfault），且受影响 Node 能通过所有版本检查，导致 `pnpm test` 无法完成、安装后无可用数据库层 | **无 fix PR**，建议在 setup 中增加 Node 版本硬校验（提示需 ≥22.14.0） |
| 🔴 高 | [#3498](https://github.com/nanocoai/nanoclaw/issues/3498) | update 控制器两处 `path.resolve()` 未用 realpath，macOS 上 `/var/folders` 符号链接到 `/private/var/folders` 导致比较失败；一处令文档化调用变 no-op（exit 0 不执行），另一处使 `hasSafeStatePaths` 误判 | **已有 fix**：[#3499](https://github.com/nanocoai/nanoclaw/pull/3499)（resolve symlinks）、[#3506](https://github.com/nanocoai/nanoclaw/pull/3506)（事务控制器 macOS 修正，共 6 处修复，含 Linux 回退模式共享缺陷） |
| 🟡 中 | #2903（背景 PR） | OneCLI 网关默认绑定的 `api-host` 未同步写入网关自身 docker-compose，导致 agent 容器无法寻址 | **已有 fix**：[#3302](https://github.com/nanocoai/nanoclaw/pull/3302)（待合并） |

**趋势判断**：当日稳定性报告高度集中于 **macOS 原生环境**（数据库层 + 升级控制器），且修复 PR 与 Issue 同日出现、速度很快，说明维护者对 macOS 用户群体投入了即时关注——建议后续将 Node 版本下限硬编码进安装前检查。

---

## 6. 功能请求与路线图信号

结合当日 PR 分布，下一版本大概率纳入的能力方向：

- **Mattermost 渠道正式化**（[#3502](https://github.com/nanocoai/nanoclaw/pull/3502) 适配器 + [#3507](https://github.com/nanocoai/nanoclaw/pull/3507) 安装技能）——团队协作渠道矩阵继续扩张，与已有 Dial、Slack 形成互补。
- **模板化 agent 创建**（[#3396](https://github.com/nanocoai/nanoclaw/pull/3396) + [#3428](https://github.com/nanocoai/nanoclaw/pull/3428)）——`create_agent` 支持 `template` 引用，并新增 `ncl templates list`（本地 + registry），把"从模板起 agent"做成聊天内一等公民。
- **新 driver seam 落地**（[#3503](https://github.com/nanocoai/nanoclaw/pull/3503)）——Apple Container（macOS microVM）作为首个 `NANOCLAW_RUNTIME_DRIVER=container` overlay，打开多运行时抽象层。
- **Dial 渠道文档补全**（[#3501](https://github.com/nanocoai/nanoclaw/pull/3501)）——README/changelog 同步，属于正式发布前的基础工作。
- **Codex 能力继续补齐**（[#2361](https://github.com/nanocoai/nanoclaw/pull/2361) 收紧 provider 契约 + [#2337](https://github.com/nanocoai/nanoclaw/pull/2337) skill 目录外溢至非 Claude 供应商）——老 PR 仍在活跃更新，反映多供应商战略是长期主线。

---

## 7. 用户反馈摘要

- **Telegram 上游已修复**（#2767 作者 chiptoe-svg）：本地 workaround 已被上游 `@chat-adapter/telegram@4.30.0` 的 MarkdownV2 原生支持取代，作者主动提出清理遗留代码——属"技术债自觉"型反馈，侧面反映通道层对上游版本漂移的敏感。
- **macOS 升级恐慌**（#3498 作者 brentkearney）："文档化调用静默 no-op、退出码还是 0"——用户最大的痛点不是报错而是**假装成功**，升级控制器需要更严格的 realpath 校验与失败可见性。
- **安装即崩**（#3497 作者 brentkearney）：better-sqlite3 段错误发生在"一切检查都通过"之后，用户拿到的是一个能装不能跑的中间态——强烈建议在安装前对 Node 版本做运行时能力探测（而非仅比对版本号）。

---

## 8. 待处理积压（长尾提醒）

以下为存在时间较长但仍活跃维护、未关闭的 PR，建议维护者优先排期：

- **#2361 tighten codex provider contracts**（2026-05-09 创建）— Codex SDK 契约从陈旧草案更新为 `codex app-server` JSON-RPC，属于多供应商架构的关键依赖，仍待合并。
- **#2337 feat(providers): surface Claude Code skill catalog to non-Claude providers**（2026-05-07 创建）— 与 #2361 配套的 skill 目录外溢，双 PR 互锁。
- **#3302 fix(onecli): correct OneCLI gateway bind address**（2026-08-17 创建，修复 #2903）— 网关寻址问题直接影响容器内 agent 网络连通，已滞空一周。
- **#3432 fix(dial): post-merge follow-ups**（2026-08-21 创建）— Dial 渠道合并后的收尾（凭据重跑、步骤文案、registry CI），建议在 #3501 文档 PR 前合并以保持渠道一致性。

**项目健康度小结**：24 小时内 Issue 关闭 1/3、Bug 类 Issue 100% 获得当日 fix PR、大版本升级带明确迁移说明——整体维护响应速度和工程纪律良好；主要风险点是 macOS 数据库层依赖的 Node 版本下限校验缺失，以及两条 5 月期的 Codex 契约 PR 长期滞留。

---

*本日报基于 2026-08-25 抓取的 GitHub 数据自动生成，链接指向 nanocoai/nanoclaw 仓库。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw 每日项目状态日报 (2026‑08‑25)**

---

### 1. 今日速览
NullClaw 今日活动保持低调，但持续健康。过去 24 小时共观察到 **2 条新 Issue**（一项功能增强请求和一项 bug 报告）和 **1 条待合并的 PR**（Alpine 镜像依赖更新）。无新版本发布，项目稳定但创新节奏较缓。

---

### 2. 版本发布
**暂无**。当前无新版本发布。

---

### 3. 项目进展
- **合并中的 PR：** [#956](https://github.com/nullclaw/nullclaw/pull/956) – *ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group*（由 Dependabot 自动创建）。
  - **影响：** 更新了 Docker 镜像中的 Alpine 操作系统版本（3.23 → 3.24），带来安全补丁和部分基于此版本的程序更新。
  - **对功能的影响：** 此次变更纯属维护性质，不影响核心功能或用户可见行为。

本周无其他合并的修复或新功能提交，导致项目在主要流水线上几乎没有向前推进。

---

### 4. 社区热点

| 问题 | 类型 | 参与度 | 摘要与链接 |
|------|------|--------|------------|
| **#993** | [enhancement] | 0 评论 | 关于 **Firecrawl 搜索端点的可配置性**，用户希望能够为自托管 Firecrawl 实例设置自定义 API URL（目前硬编码为 `https://api.firecrawl.dev/v1/search`）。[<br>nullclaw/nullclaw Issue #993](https://github.com/nullclaw/nullclaw/issues/993) |
| **#992** | [bug] | 0 评论 | 用户无法获取网关 API 的 6 位配对令牌，因为令牌已停止记录到控制台输出（见 #535），现在仅存储在内存中。此 issue 请求提供一种方法来查看或导出该令牌。[<br>nullclaw/nullclaw Issue #992](https://github.com/nullclaw/nullclaw/issues/992) |

由于两项内容均为近期创建且无讨论记录，因此关注度相似，但 #992 直接影响用户配置过程，可能引发更多后续讨论。

---

### 5. Bug 与稳定性

| 严重程度 | Issue | 当前状态 | 链接 |
|----------|-------|----------|------|
| **中度** | #992 – 配对令牌丢失/不可见 | 未修复 – 仅凭内存输出，用户需要一种方式来查看/保存该令牌。 | [nullclaw/nullclaw Issue #992](https://github.com/nullclaw/nullclaw/issues/992) |
| **低** | #993 – Firecrawl 端点不可配置 | 未修复 – 端点硬编码，阻止使用自托管实例。 | [nullclaw/nullclaw Issue #993](https://github.com/nullclaw/nullclaw/issues/993) |

无崩溃报告，现有问题主要集中在可用性和配置灵活性上。

---

### 6. 功能请求与路线图信号

- **Issue #993** 代表了一个明确的功能增强请求，旨在提升自托管用户的灵活性。考虑到 Firecrawl 是一个核心的网络搜索提供者，因此此请求很有可能被纳入下一次版本的开发计划（尤其如果社区反馈强烈）。该变更将涉及：
  - 将 `src/tools/web_search_providers/firecrawl.zig` 中的硬编码常量 `const endpoint = "https://api.firecrawl.dev/v1/search";` 替换为一个可选的配置项（例如通过环境变量 `NULLCLAW_FIRECRAWL_ENDPOINT`）。
  - 更新文档和用户指南，说明如何设置自定义端点。

- **Issue #992** 虽然是 bug，但可能触发一个辅助功能改进（例如在安全日志记录后向用户提供临时配对令牌页面，或通过 API 密钥模式替换配对机制）。这可能出现在后续的稳定版本中。

---

### 7. 用户反馈摘要

- **配对令牌不透明：**
  - 用户报告无法获取网关 API 所需的 6 位配对令牌，因为令牌不再输出到控制台（见 #535），现在完全存储在进程内存中。
  - 这导致配置过程变得不可见和令人困惑，用户希望有一个“显示/导出”机制（例如通过 `/debug` 端点、日志记录或环境变量）。

- **自托管 Firecrawl 支持不足：**
  - 用户指出，内置的 Firecrawl 搜索提供者将 API 地址硬编码为公共服务的 URL，这限制了使用私有或自托管的 Firecrawl 实例的可能性。
  - 请求增加配置灵活性，以支持自定义部署，符合开源项目的自托管精神。

这两种反馈都指向**可观察性和配置灵活性**的缺失，这是用户体验中常见的薄弱环节。

---

### 8. 待处理积压

- **Issue #992** (配对令牌不可见) – 悬而未决超过数日，仍无技术方案。建议维护者优先考虑一个低风险的解决方案（例如通过日志或 UI 端点临时显示该令牌），以减少用户配置障碍。
- **Issue #993** (Firecrawl 端点可配置) – 也是近期添加的，尚未开始实现。鉴于该请求直接影响自托管用户的可用性，建议在下一个功能发布版本中解决。

*无其他历史遗留问题需要立即关注。*

---

**总结：** NullClaw 保持稳定，无重大故障，但存在两个有影响力的待解决问题：配对令牌的可见性和 Firecrawl 端点的可配置性。解决这两个问题将显著提升用户的入职体验和部署灵活性。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>



# IronClaw 项目动态日报 — 2026-08-25

---

## 1. 今日速览

IronClaw 过去 24 小时处于**高强度开发节奏**，Issue 22 条（新开/活跃 13，关闭 9），PR 30 条（待合并 15，已合并/关闭 15），无新版本发布。核心主题集中在三条线：**CI 基础设施现代化**（T1–T4 并行推进轨道）、**WebUI 体验收尾**（OOBE 引导流、页面骨架统一、Notice 组件迁移），以及**自动化与子代理能力的分层落地**。项目整体健康度良好，PR 合并/关闭比率均衡（50%），当日无 P0 级线上事故上报。

---

## 2. 版本发布

**无新版本发布。** 最近一次发布仍为 v1.3.0（见 Issue #7742、#7856 标签），v1.4.0 相关工作已在进行中（见下文功能请求部分）。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 标题 | 说明 |
|---|---|---|
| [#7821](https://github.com/nearai/ironclaw/pull/7821) | ci: single setup-rust composite (T1) | 关闭 #7798。用一个 `.github/actions/setup-rust` 复合动作统一 12 个 workflow 文件中 43 处 `rust-toolchain` 调用，消除"本地绿、CI 红"的漂移类问题 |
| [#7833](https://github.com/nearai/ironclaw/pull/7833) | feat(suggestions): generate over user's no-approval, read-only tools | 关闭 #7812。 suggestion 卡片生成改为基于用户已连接账户的实际工具面（收窄到只读、无需审批的权限），使建议真正落地于用户数据 |
| [#7794](https://github.com/nearai/ironclaw/pull/7794) | refactor(webui): shared page shell & loading primitives | 关闭 #7792。引入 `PageScroll`/`PageStack`/`Skeleton`/`SkeletonList` 公共组件，统一 Automations/Extensions/Admin/Workspace/Settings 的页面骨架 |
| [#7795](https://github.com/nearai/ironclaw/pull/7795) | refactor(webui): migrate settings & admin notices | 关闭 #7793。将 Settings/Admin 页面级成功/错误提示统一迁移至 `InlineNotice` 组件，语义化 success/warning/danger 色调 |
| [#7001](https://github.com/nearai/ironclaw/pull/7001) | feat(loop): keep cached system prefix byte-stable | 关闭 #6985。网关将所有 system 角色消息合并为单一前缀块，消除内联控制 nudges 和运行时上下文时间戳导致的前缀失效，提升 provider 缓存命中率 |
| [#7650](https://github.com/nearai/ironclaw/pull/7650) | feat(automations): derive run outcomes from runtime evidence | 关闭 #7742 的父级。以确定性运行时证据（实际能力调用记录）替代仅答案语义判定，输出 `appears_successful`/`needs_attention` 摘要 |
| [#7857](https://github.com/nearai/ironclaw/pull/7857) | fix(webui): refresh conversations after starting suggestion | 关闭 #7845。修复 suggestion 任务启动后左侧 conversations 面板不刷新的 UI 缺陷 |
| [#7854](https://github.com/nearai/ironclaw/pull/7854) | fix(webui): remove Gateway v2 login eyebrow | 移除 WebUI 登录卡中的 `Gateway v2` 标记及 11 个 locale 中的废弃 `login.tagline` 键，附回归测试 |
| [#7844](https://github.com/nearai/ironclaw/pull/7844) | fix(ci): restore main coverage and WebUI checks | 更新 WASM fixture 以匹配当前 enum-based WIT 响应契约，重新捕获 `ironclaw_loop_host`/`ironclaw_sandbox`/`telegram` 的覆盖率基线 |

### 探针/临时 PR（已关闭，不合并）

- [#7858](https://github.com/nearai/ironclaw/pull/7858)（PROBE）— 在 Windows 上预跑 T1 composite，验证后即关
- [#7852](https://github.com/nearai/ironclaw/pull/7852)（BISECT）— 隔离 T1 在 Reborn WebUI v2 E2E 的失败原因，定位到 profile 变更而非 base commit 问题

### 今日待合并的关键 PR

- **[#7817](https://github.com/nearai/ironclaw/pull/7817)** (T2) — nextest 测试流水线，全量失败信号输出，PR 解限流
- **[#7818](https://github.com/nearai/ironclaw/pull/7818)** (R2 slice 2b+2c) — 子代理后台模式：收据生成、子级交付、激活与自愈扫描
- **[#7810](https://github.com/nearai/ironclaw/pull/7810)** — 沙箱 egress 凭据绑定：`builtin.shell` 可在持久化 Docker 沙箱内安全运行 `gh` 等 CLI，token 经由 `iron-proxy` sidecar 一次性注入，不在命令行/环境变量/模型可见 payload 中暴露
- **[#7765](https://github.com/nearai/ironclaw/pull/7765)** — `AfterTurn` 生命周期钩子点 + 记忆整理（#7770 phase 1），仅限 Privileged/Builtin/Trusted 安装源
- **[#7516](https://github.com/nearai/ironclaw/pull/7516)** — WebUI Extensions 页面新增 IronHub agent link 操作员面板（注册 URL + hub 颁发密钥）

---

## 4. 社区热点

| 条目 | 链接 | 评论 | 点赞 | 分析 |
|---|---|---|---|---|
| #7812 | [Onboarding suggestions: respect user-level tool permissions](https://github.com/nearai/ironclaw/issues/7812) | 3 | 0 | 当前最高互动 Issue。核心诉求：suggestion 生成时应使用用户已连接的只读工具（而非仅内部搜索），使建议基于真实用户数据。已由 #7833 关闭 |
| #7798 | [CI expedite T1: setup-rust composite](https://github.com/nearai/ironclaw/issues/7798) | 2 | 0 | CI 效率专题的起点，引发 T1–T4 四条并行推进线，是当前工程投入最大的方向之一 |
| #7297 | [Error messages stack up in UI](https://github.com/nearai/ironclaw/issues/7297) | 2 | 0 | Railway QA 实例上报，错误消息在聊天底部累积不清除，属于 P2 级 UI 缺陷，仍在活跃 |
| #7742 | [feat(automations): bound creation preflight](https://github.com/nearai/ironclaw/issues/7742) | 2 | 0 | 自动化创建前应建立"执行契约"（schedule/goal/success criteria），区分"编写未来运行"与"立即执行"，已关闭 |
| #7845 | [Suggested task fails to render thread entry](https://github.com/nearai/ironclaw/issues/7845) | 1 | 0 | 用户侧实际体验缺陷：点击 suggestion 后线程运行但左侧不显示入口，已由 #7857 修复 |

**评论数/反应数整体偏低**（多数 Issue 评论 ≤2，点赞为 0），说明当前 GitHub 上的讨论仍以维护者内部协作为主，社区外部参与度有待提升。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 是否有 Fix PR |
|---|---|---|---|
| **P2** | [#7297](https://github.com/nearai/ironclaw/issues/7297) | 失败提示消息在 UI 底部累积堆叠，旧错误不清除 | ❌ 无（仍 OPEN） |
| **P1** | [#7853](https://github.com/nearai/ironclaw/issues/7853) | Telegram 设置中个人账号 linking 流程无法完成（缺少工具） | ❌ 无（仍 OPEN） |
| **P1** | [#7856](https://github.com/nearai/ironclaw/issues/7856) | MCP 工具发现静默跳过 camelCase 命名的工具 | ❌ 无（仍 OPEN） |
| **P1** | [#7842](https://github.com/nearai/ironclaw/issues/7842) | 请求执行中出现通用 "invalid result" 错误 | ❌ 无（仍 OPEN） |
| **P1** | [#7841](https://github.com/nearai/ironclaw/issues/7841) | Telegram 设置以 "admin must configure" 报错中断 | ❌ 无（仍 OPEN） |
| **P2** | [#7845](https://github.com/nearai/ironclaw/issues/7845) | 激活 suggestion 任务后左侧面板不渲染线程条目 | ✅ #7857 已修复 |
| **P2** | [#7851](https://github.com/nearai/ironclaw/issues/7851) | main 分支 CI 失败 | ✅ #7844 已恢复 |

**稳定性评估**：Telegram 设置流程是当前 bug 集中的区域（#7853、#7841 两条独立上报），建议维护者优先排查 Telegram 集成的配置校验链路。MCP 工具名大小写问题（#7856）属于静默失败类缺陷，容易被用户忽视但影响面广。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 路线图判断 |
|---|---|---|
| **意大利语支持** — #7855 | sergeiest | 社区驱动的 locale 扩展，低风险，可能纳入下一 minor 版本 |
| **Gmail 终端化设置步骤文档化** — #6774 | sergeiest / 用户反馈 | 文档增强，可与 GSuite CLI（#7849）协同推进 |
| **Agent-first GSuite CLI** — #7849 | serrrfirat | 标签含 `v1.4.0`，高风险，属于 v1.4.0 核心特性候选 |
| **Sandbox egress 原生 iron

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI 项目动态日报 — 2026-08-25**
*数据窗口：过去 24 小时（截至 2026-08-24）| 仓库：netease-youdao/LobsterAI*

---

### 1. 今日速览
过去 24 小时项目无新 Issue 开启，3 条历史 Issue（均创建于 2026-04-01，标签 `stale`）被批量关闭，表明维护团队正执行 backlog 清理；同时 PR 流动性极强，11 条更新中 10 条已合并/关闭，仅 1 条（Dependabot Electron 升级）仍待合并，反映代码合并效率高但底层依赖审查存在滞后。渲染层（`renderer`）、库（`library`）与协作模块（`cowork`）是今日主战场，核心功能围绕跨平台缩略图生命周期、技能面板状态管理与插件安装稳定性展开。无新版本发布，项目当前处于功能收尾与框架升级阶段，整体健康度良好，但历史功能请求（上下文窗口控制、工具默认配置固化）尚未完全转化为代码。

---

### 2. 版本发布
**今日无新版本发布。** 最新 Releases 为空，未出现破坏性变更或迁移注意事项。版本节奏当前以 PR 合并驱动，建议关注待合并的 Electron 依赖升级（#1277）对后续打包与桌面运行时的影响。

---

### 3. 项目进展
今日合并/关闭的 10 条 PR 覆盖渲染、库、协作、技能与插件五大领域，项目整体向前迈进明显：

| 领域 | PR / 链接 | 关键推进 |
|---|---|---|
| **库与内容生命周期** | [#2524](https://github.com/netease-youdao/LobsterAI/pull/2524) | 新增隔离的跨平台缩略图渲染器，支持图片/视频/PDF/Office/HTML，统一 16:9 尺寸与缓存策略；优化本地产物生命周期，仅展示关联有效任务的产物，隐藏无任务关系的内部索引；支持云端资源恢复与节点重新部署提示，并补充设计文档与服务端联调说明。这是今日最大功能块，标志内容库基础设施升级。 |
| **文件分享与收藏** | [#2522](https://github.com/netease-youdao/LobsterAI/pull/2522) | 完善文件分享打包（保留 Unicode 文件名并替换不安全字符）、收藏状态即时更新、筛选移除与失败回滚，避免重复列表刷新。 |
| **协作与上下文菜单** | [#2521](https://github.com/netease-youdao/LobsterAI/pull/2521) | 修复选中文本上下文菜单在只读状态下被清除的 Bug，支持 macOS Ctrl-click 与右键菜单，提升协作编辑体验。 |
| **渲染器与 UI** | [#2528](https://github.com/netease-youdao/LobsterAI/pull/2528) | Credits 加载设置 UI；[#2527](https://github.com/netease-youdao/LobsterAI/pull/2527) 修复技能面板选中标签持久化，默认回到市场；[#2525](https://github.com/netease-youdao/LobsterAI/pull/2525) 登录引导；[#2523](https://github.com/netease-youdao/LobsterAI/pull/2523) IM 图标。 |
| **主程序与工具** | [#2526](https://github.com/netease-youdao/LobsterAI/pull/2526) | 更新 kits 图标 URL；[#2520](https://github.com/netease-youdao/LobsterAI/pull/2520) 修复插件安装模态框在长错误信息下按钮被隐藏的问题，增加独立滚动与关闭按钮，强化 IPC 错误处理。 |
| **历史清理** | [#1193](https://github.com/netease-youdao/LobsterAI/pull/1193) | SQLite 写放大优化（debounce + 批量事务）已关闭，说明此前性能修复已结案。 |

**整体判断**：渲染层与库层的深度重构（#2524、#2522）构成了今日技术主线，协作交互细节（#2521）与技能面板状态（#2527）同步精修，项目正从“功能添加”向“体验打磨与数据生命周期治理”转型。

---

### 4. 社区热点
今日被关闭的 3 条 Issue 均为 2026-04-01 创建的旧问题，评论数 2–3 条，属历史清理而非实时热议；但其背后诉求仍具代表性：

- **[#1187](https://github.com/netease-youdao/LobsterAI/issues/1187)**（3 评论 / 👍1）—— **模型 API 配置灵活性**。用户在 DeepSeek 运行时遭遇 `Context overflow: prompt too large for the model`，请求在模型 API 选项中增加“上下文窗口大小”和“输出 token”设置，以解决不同模型上下文限制不兼容问题。
- **[#1195](https://github.com/netease-youdao/LobsterAI/issues/1195)**（3 评论 / 👍0）—— **Skill 安装路径与可见性 Bug**。用户自建 Skill 后被安装到 OpenClaw 的技能目录，重启后技能面板无显示，复现率必现，涉及 win 10 环境与版本 `2026.3.26`。
- **[#1192](https://github.com/netease-youdao/LobsterAI/issues/1192)**（2 评论 / 👍0）—— **工具默认配置固化**。用户希望将浏览器的“无头模式”写死为默认配置，而非依赖大模型“指令跟随”，反映对 LLM 指令可靠性的低信任。

**分析**：这些 Issue 今日被标记 `stale` 关闭，可能意味着维护者已判断问题已被后续代码修复或环境变化解决；但 **#1187** 与 **#1192** 的诉求（显式配置

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报（2026-08-25）

## 1. 今日速览
过去 24 小时（2026-08-24 至 2026-08-25）Moltis 仓库保持高强度活跃：共发生 19 次 PR 更新（16 个已合并/关闭，3 个待合并），2 个 Issue 全部关闭，并发布了新版本 `20260824.01`。开发重心集中在缺陷修复（Apple Container、TTS、心跳、内存嵌入等）、新供应商接入（xAI Grok OAuth）及消息渠道增强（WhatsApp、Slack、Cron）。多贡献者协同（penso、SP-937-215、rubenssoto、IlyaBizyaev 等）表明项目健康度良好，迭代节奏紧凑。

## 2. 版本发布
- **新版本 `20260824.01`**（发布于 2026-08-24）：[Release 链接](https://github.com/moltis-org/moltis/releases/tag/20260824.01)
  - 官方未提供详细 Changelog，但结合当日合并的 16 个 PR，可推断该版本打包了包括 xAI OAuth 支持、Apple 容器标识符长度修复、TTS/心跳配置修正、WhatsApp 入站文件持久化、Browserless v2 支持、内存后端归一化等改动。
  - **潜在迁移注意**：
    - 内存内置后端配置值由 `sqlite` 变更为 `builtin`（见 [PR #1235](https://github.com/moltis-org/moltis/pull/1235)），旧配置需调整。
    - 浏览器 Obscura 侧车默认开启 stealth 模式（[PR #1227](https://github.com/moltis-org/moltis/pull/1227)），如需原行为须显式设置 `tools.browser.obscura_stealth=false`。
    - 心跳 `active_hours` 现在真正生效且接受 `end="24:00"`（[PR #1241](https://github.com/moltis-org/moltis/pull/1241)），依赖旧“始终活跃”行为的用户需检查配置。

## 3. 项目进展
今日合并/关闭的关键 PR 及其推进内容：

- **供应商与鉴权**
  - [PR #1240](https://github.com/moltis-org/moltis/pull/1240) 新增 `xai-oauth` 提供方，支持 SuperGrok/Heavy/X Premium+ 订阅用户通过设备码登录使用 Grok，闭合 [Issue #1239](https://github.com/moltis-org/moltis/issues/1239)。
  - [PR #1179](https://github.com/moltis-org/moltis/pull/1179) 修复网关节点配对签名校验，绑定待验证请求，提升安全性。
- **平台稳定性（macOS）**
  - [PR #1237](https://github.com/moltis-org/moltis/pull/1237) 将 Apple 容器标识符限定 64 字符，修复 [Issue #1137](https://github.com/moltis-org/moltis/issues/1137) 启动失败。
- **消息与集成**
  - [PR #1228](https://github.com/moltis-org/moltis/pull/1228) 持久化 WhatsApp 入站图片/文档供本地工具使用；[PR #1226](https://github.com/moltis-org/moltis/pull/1226) 定时任务输出投递至源聊天；[PR #1238](https://github.com/moltis-org/moltis/pull/1238) 允许共享 Slack 频道配置工具策略。
  - [PR #1229](https://github.com/moltis-org/moltis/pull/1229) 支持 Browserless v2 容器协议；[PR #1227](https://github.com/moltis-org/moltis/pull/1227) 默认启用 Obscura 隐身。
- **核心功能修复**
  - [PR #1242](https://github.com/moltis-org/moltis/pull/1242) 修正 TTS 提供方自动选择误报 Coqui 已配置；[PR #1241](https://github.com/moltis-org/moltis/pull/1241) 心跳活跃时段生效。
  - [PR #1231](https://github.com/moltis-org/moltis/pull/1231) MCP 服务器重启后解析正确客户端；[PR #1234](https://github.com/moltis-org/moltis/pull/1234) 修复打包技能侧车文件丢失；[PR #1235](https://github.com/moltis-org/moltis/pull/1235) 内存后端配置归一化；[PR #1236](https://github.com/moltis-org/moltis/pull/1236) 限制本地嵌入批大小防进程崩溃。
  - [PR #1225](https://github.com/moltis-org/moltis/pull/1225) 完善繁体中文（zh-TW）国际化。
  - [PR #1233](https://github.com/moltis-org/moltis/pull/1233) 因 #1228 已实现而关闭，避免重复。

整体看，项目在“多模型接入–平台兼容–消息闭环–安全运行”四个维度均向前迈进，发布版本已涵盖上述大部分修复。

## 4. 社区热点
- **[Issue #1239](https://github.com/moltis-org/moltis/issues/1239)（已关闭）**：请求为 xAI Grok 订阅用户添加 OAuth 登录，避免强制 API Key。该 Issue 带 2 条评论，是今日唯一有讨论记录的议题，且当日即由 [PR #1240](https://github.com/moltis-org/moltis/pull/1240) 实现并关闭，反映社区对“订阅制大模型零配置接入”的强烈诉求，以及维护团队响应速度。
- 其他 PR 虽无评论数，但跨作者协作（如 rubenssoto 连续提交 WhatsApp/Browser 系列）显示消息集成是近期焦点。

## 5. Bug 与稳定性
按严重程度排列（今日报告/修复）：

1. **安全校验缺失** – [PR #1179](https://github.com/moltis-org/moltis/pull/1179) 修复网关节点配对签名可被客户端自行提供密钥/挑战的问题（已合并）。
2. **进程级崩溃风险** – [PR #1236](https://github.com/moltis-org/moltis/pull/1236) 本地 GGUF 内存嵌入在 token 超 512 时终止整个进程（已修复）。
3. **平台启动失败** – [Issue #1137](https://github.com/moltis-org/moltis/issues/1137) Apple Container ID 超 64 字符，[PR #1237](https://github.com/moltis-org/moltis/pull/1237) 已修。
4. **功能误报/逻辑错误** – TTS 误报 Coqui 已配置（[PR #1242](https://github.com/moltis-org/moltis/pull/1242)）、心跳时段不生效（[PR #1241](https://github.com/moltis-org/moltis/pull/1241)）、MCP 重启后残废客户端（[PR #1231](https://github.com/moltis-org/moltis/pull/1231)）、技能侧车缺失（[PR #1234](https://github.com/moltis-org/moltis/pull/1234)）等均已合入。
5. **待修复（仍开放）** – [PR #1232](https://github.com/moltis-org/moltis/pull/1232) 修正 OpenAI 严格工具 schema 导致 Codex 传空值，目前开放待合并。

## 6. 功能请求与路线图信号
- **已落地**：xAI Grok 订阅 OAuth（#1239/#1240）显示“无 Key 用订阅”路线受重视。
- **进行中/待合**： 
  - [PR #1199](https://github.com/moltis-org/moltis/pull/1199) Coder 远程工作区沙箱支持（开放超 9 天，可能下版核心特性）。
  - [PR #1243](https://github.com/moltis-org/moltis/pull/1243) Cron 投递后保留渠道上下文，完善消息闭环。
  - [PR #1232](https://github.com/moltis-org/moltis/pull/1232) OpenAI 工具 schema 兼容，利于 Codex 集成。
- 信号：项目正扩展“远程沙箱+多通道投递+更多供应商 OAuth”能力，下一步版本大概率包含 Coder 后端与 Cron 上下文修复。

## 7. 用户反馈摘要
- 从 [Issue #1239](https://github.com/moltis-org/moltis/issues/1239) 可见，用户（SP-937-215）希望复用已支持的 OAuth 模式（如 Codex/Copilot）为 Grok 订阅者提供无缝接入，痛点在于“不愿或不便获取 API Key 但拥有 X 订阅”。
- [Issue #1137](https://github.com/moltis-org/moltis/issues/1137)（holgzn 报告）反映 macOS Apple Container 环境下列长 UUID 导致命名超限，属真实部署阻碍，修复后提升苹果平台体验。
- 整体评论量低，但快速闭环表明用户提出即被吸收，满意度应良好。

## 8. 待处理积压
- **开放 PR 需维护者关注**：
  - [PR #1199](https://github.com/moltis-org/moltis/pull/1199)（自 2026-08-15 开放，至今 10 天）Coder 沙箱后端，功能较大，需评审/测试。
  - [PR #1232](https://github.com/moltis-org/moltis/pull/1232)（2026-08-22）OpenAI 工具 schema 修复，影响 Codex 工具调用正确性。
  - [PR #1243](https://github.com/moltis-org/moltis/pull/1243)（2026-08-24）Cron 渠道上下文，刚提待审。
- 今日 Issue 均已清零，无长期未响应议题；建议优先合并 #1199 以外的小修复以保障发布节奏。

---
*报告基于 github.com/moltis-org/moltis 截至 2026-08-25 的公开活动数据生成，链接均指向对应 Issue/PR。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-08-25）

## 1. 今日速览

CoPaw（QwenPaw）在过去 24 小时内保持**高活跃度**：共产生 50 条 Issue 更新（新开/活跃 31 条、关闭 19 条）和 46 条 PR 更新（待合并 20 条、已合并/关闭 26 条），并发布 1 个新版本 v2.1.1-beta.2。值得关注的是，多个高频 Bug（会话路由错乱、Console 停止请求误伤飞书会话、backed 内存无界增长）**高度集中在会话管理与内存健康**两个方向，且已有对应修复 PR 在途。功能开发与缺陷修复并行推进，项目处于快速迭代、健康活跃的状态。

## 2. 版本发布

**v2.1.1-beta.2**（2026-08-24 发布）

主要变更：
- **feat(console)**: 在 assistant 回复卡片中新增 artifacts 展示（PR #7161）
- **fix(video)**: 修复 OpenAI Responses API 上 tool-result 视频的交付问题（PR #7061）
- **test(browser)**: browser 相关测试调整（内容截断，详见 Release 页）

> 注意：该版本为 beta，未见破坏性变更说明。建议升级前关注 #6921（多步骤任务自动停止）是否在本次版本中改善。

## 3. 项目进展（今日已合并/关闭的重要 PR）

| PR | 内容 | 状态 |
|---|---|---|
| [#7167](https://github.com/agentscope-ai/QwenPaw/pull/7167) | **Creator 1.1.0 大版本整合**：接入主流图像/视频生成提供商、Anthropic/Gemini 协议、对话式视频分发、2GB 上传、项目复制与重建、会话状态卡片及运行时可靠性加固 | 已合并 |
| [#7234](https://github.com/agentscope-ai/QwenPaw/pull/7234) | 恢复 ReMe 定期索引压缩任务（优化内存占用） | 已关闭（DO NOT MERGE，已给出修复方向） |
| [#7248](https://github.com/agentscope-ai/QwenPaw/pull/7248) | CI 修复：Docker 边界版本改为从包版本自动推导，消除硬编码漂移 | 已关闭 |
| [#7247](https://github.com/agentscope-ai/QwenPaw/pull/7247) | 修复 SiliconFlow DeepSeek V4 误发送媒体导致请求报错 | 已关闭（DO NOT MERGE） |
| [#7245](https://github.com/agentscope-ai/QwenPaw/pull/7245) | 移除 Console 桌面模式提醒 | 已合并 |
| [#7173](https://github.com/agentscope-ai/QwenPaw/pull/7173) | 修复 e2e 测试因 upstream 变更导致的列选择器失效 | 已合并 |

小结：项目在 **Creator 生态扩展**（图像/视频生成 + 多协议）上迈出了一大步；同时持续修复 CI/测试基建、多模态 provider 兼容性和内存维护任务。

## 4. 社区热点（高讨论热度 Issues/PRs）

- **[#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921)（11 评论）**：多步骤任务在规划输出后频繁无提示停止，需要用户说"继续"才恢复。这是**今日最热的问题**，暴露出 Agent 长任务执行可靠性的核心痛点。
- **[#6782](https://github.com/agentscope-ai/QwenPaw/issues/6782)（9 评论，已关闭）**：2.0.1 Docker 版插件市场/应用市场始终提示"维护中"。属于部署环境兼容问题，已关闭。
- **[#338](https://github.com/agentscope-ai/QwenPaw/issues/338)（8 评论）**：Webhook 功能请求（创建于 3 月，持续获得关注），社区希望 CoPaw 具备对外可编程的触发/回调能力。
- **[#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011)（8 评论）**：Console 的停止请求会误取消正在进行的飞书会话（2.1.0 多 UI 会话场景）。**已有修复 PR #7237**。

共性诉求：用户对**多智能体/多会话并发下的隔离与可靠性**要求越来越高，且希望 CoPaw 能更方便地被外部系统集成（webhook、第三方 harness）。

## 5. Bug 与稳定性（按严重程度排序）

| 严重度 | Issue | 描述 | 是否已有 fix PR |
|---|---|---|---|
| 🔴 高 | [#7222](https://github.com/agentscope-ai/QwenPaw/issues/7222) | qwenpaw-backend 运行 2 天后内存无界增长至 **20.7 GB**（运行时累积型泄漏） | 暂无，仅 #7234 部分缓解（索引压缩） |
| 🔴 高 | [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) | 多步骤任务自行停止、无提示、须用户催促继续 | 无（社区 Top 问题） |
| 🟠 中 | [#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) | Console stop 请求误取消飞书会话（跨 UI 会话） | 有，**PR #7237**（session identity 冻结） |
| 🟠 中 | [#7231](https://github.com/agentscope-ai/QwenPaw/issues/7231) | Console 消息在切换会话时可被发送到**错误会话**（交叉混淆/丢消息） | 有，**PR #7237** |
| 🟠 中 | [#6822](https://github.com/agentscope-ai/QwenPaw/issues/6822) | streamable HTTP MCP 断连重连后，活动会话被**永久阻塞** | 无 |
| 🟠 中 | [#7210](https://github.com/agentscope-ai/QwenPaw/issues/7210) | agent.json 中工具全部启用但会话函数 schema 未注入 | 无 |
| 🟡 低 | [#7199](https://github.com/agentscope-ai/QwenPaw/issues/7199) | daily_paper 处理含代理字符(U+D800–DFFF)PDF 时崩溃 | 无 |
| 🟡 低 | [#7121](https://github.com/agentscope-ai/QwenPaw/issues/7121) | macOS nightly 测试 session 并发时序断言 flaky | 有，PR #7246 已加固 |
| ✅ 已修 | [#7221](https://github.com/agentscope-ai/QwenPaw/issues/7221) | reload_agent 丢弃插件工作区注册 | 已关闭 |
| ✅ 已修 | [#7136](https://github.com/agentscope-ai/QwenPaw/issues/7136) | 非 ASCII 文件名 percent-encoded 乱码 | 已关闭 |

**焦点**：内存泄漏（运行时累积型）和会话路由并发问题构成当前两大稳定性风险，会话问题正被 PR #7237 集中修复，内存问题仍需更大的结构性方案。

## 6. 功能请求与路线图信号

**可能进入下一版本（已有对应 PR 或设计草案）：**
- **Workspace 级 Skill 预加载策略**：[#7182](https://github.com/agentscope-ai/QwenPaw/issues/7182) ↔ PR [#7183](https://github.com/agentscope-ai/QwenPaw/pull/7183)（参考 Claude Code 模式）
- **Token Usage 页展示全 Agent LLM/工具调用趋势**：PR [#7219](https://github.com/agentscope-ai/QwenPaw/pull/7219)
- **Pawport 第三方 Agent 配置导入流**（支持 Codex/Qoder）：PR [#6960](https://github.com/agentscope-ai/QwenPaw/pull/6960)
- **Reranker 可视化配置面板**：PR [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399)
- **PowerContext 可插拔长时记忆后端**：PR [#7080](https://github.com/agentscope-ai/QwenPaw/pull/7080)

**高呼声但尚无对应 PR 的需求：**
- **按频道独立配置模型**（[#7085](https://github.com/agentscope-ai/QwenPaw/issues/7085)）：钉钉用 gpt-4o、微信用 qwen-max、控制台用本地模型
- **上下文压缩改为会话空闲时执行**（[#7230](https://github.com/agentscope-ai/QwenPaw/issues/7230)）：避免任务执行中被压缩打断
- **智能体协作会话统一/长期通道**（[#6925](https://github.com/agentscope-ai/QwenPaw/issues/6925)、[#3013](https://github.com/agentscope-ai/QwenPaw/issues/3013)）：A/B 智能体协作不应每次新建会话

## 7. 用户反馈摘要

- **任务执行透明度不足（高频痛点）**：#6921 揭示 Agent 规划后"无声停止"，用户需反复手动"继续"，破坏自动化体验；#5563 则抱怨多步骤任务刷屏式推送碎片消息——**"要么不响，要么刷屏"**，Message 聚合与执行状态同步是体验关键。
- **审批机制过严（自动化受阻）**：[#7198](https://github.com/agentscope-ai/QwenPaw/issues/7198) 指出"关闭模式"以外的审批模式在夜间无人值守时形成灾难，中间产物操作不应触发审批。
- **多智能体协作体验割裂**：#6925、#3013 均反馈**协作会话被拆分到多个新会话**，且需手动切换 Agent 查看对话内容，希望保留同一通道持续交流，并可在飞书/钉钉频道直接观看协作过程。
- **对 webhook 等外部集成能力强烈期待**：#338 自 3 月持续被点赞和回复，说明自动化工作流用户需要调用 CoPaw 能力的编程接口。
- **内存与稳定性影响信任度**：#5720、#7222 用户报告长时间运行后内存翻倍甚至涨至数十 GB，用户会因此**主动缩短重启周期**，影响生产可用性信心。

## 8. 待处理积压（长期未充分响应的重要 Issue）

| Issue | 创建时间 | 内容 | 备注 |
|---|---|---|---|
| [#338](https://github.com/agentscope-ai/QwenPaw/issues/338) | 2026-03-02 | 建议添加 Webhook 功能 | 已持续 5 个月+，8 条评论，1 个 👍，长期未实现 |
| [#3425](https://github.com/agentscope-ai/QwenPaw/issues/3425) | 2026-04-15 | 配置/会话文件存储支持关系型数据库；channel 支持 Microsoft Teams | 已 4 个月+ |
| [#3224](https://github.com/agentscope-ai/QwenPaw/issues/3224) | 2026-04-10 | CoPaw Agent Teams——自然语言驱动的自进化多智能体协作团队 | 详细设计提案，涉及团队自动创建/通信协作的长期愿景 |
| [#2750](https://github.com/agentscope-ai/QwenPaw/issues/2750) | 2026-04-01 | 增强多智能体协作的隔离机制（权限控制、通信过滤） | 4 个月+，安全相关，值得优先评估 |
| [#5563](https://github.com/agentscope-ai/QwenPaw/issues/5563) | 2026-06-26 | 优化多步骤回复的消息聚合，避免消息刷屏 | 2 个月+，直接关联 #6921 的用户体验问题 |

---

**日报建议关注**：① PR #7237 的会话身份冻结修复合入后，应同步回归验证 #7011、#7231；② 内存无界增长（#7222）需要专门的内存剖析专项；③ #338 Webhook 与 #3425 数据库存储属于长期积压的功能诉求，建议排期评估。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

**ZeptoClaw 项目日报（2026‑08‑25）**  
*数据来源：GitHub API（过去 24 小时 Issues / PRs / Releases）*  

---

### 1. 今日速览  
- 项目在过去 24 小时内仅有一项活动：Issue #650 被新建并标记为 **OPEN**，未产生任何评论或点赞。  
- 未有 Pull Request 被打开、合并或关闭，亦没有新版本发布。  
- 整体活跃度处于 **低点**，社区互动极少，项目维持在维护待定状态。  
- 当前唯一的讨论点聚焦于 REPL 交互体验的改进，尚未进入实现阶段。  

---

### 2. 版本发布  
> **无** 新版本发布。  

---

### 3. 项目进展  
- **今日合并/关闭的重要 PR**：无。  
- Consequently，今天没有代码被并入主干，功能或修复的推进量为 **0**。  

---

### 4. 社区热点  
| 类别 | 编号 | 标题 | 链接 | 评论数 | 反应数 | 备注 |
|------|------|------|------|--------|--------|------|
| Issue | #650 | feat(cli): REPL UX hardening - safe Ctrl+C/Ctrl+D, lone '/' command table | <https://github.com/qhkm/zeptoclaw/issues/650> | 0 | 0 | 当天唯一的讨论项，提出改善 REPL 中断与孤立斜杠输入的处理。 |

**分析**：Issue #650 获得了零评论和零点赞，表明社区对该需求的即时关注度较低，可能尚未引发广泛使用场景的反馈。  

---

### 5. Bug 与稳定性  
- **今日报告的 Bug / 崩溃 / 回归**：无。  
- Issue #650 属于 **功能请求**（UX 加固），而非缺陷报告，故不计入稳定性问题。  

---

### 6. 功能请求与路线图信号  
| 功能请求 | 关联 Issue | 可能纳入版本 | 备注 |
|----------|------------|--------------|------|
| REPL UX hardening：安全 Ctrl+C / Ctrl+D、单独 ‘/’ 命令处理 | #650 | 下一个小版本（v0.x.y） | 需要修改 REPL 输入循环的错误处理路径；若社区验证后，可快速合并。 |

**判断**：该功能属于可选的交互体验改善，优先级取决于维护者对 CLI 使用频率的评估。若后续出现更多相关反馈，很可能被纳入下一版本的改动列表。  

---

### 7. 用户反馈摘要  
- 今日 Issue 中 **无评论**，因而无法提炼具体用户痛点、使用场景或满意度。  
- 暂无直接反馈表明现有 REPL 在日常使用中遇到误中断或命令解析问题的情况。  

---

### 8. 待处理积压  
- 长期未响应的重要 Issue/PR：目前仓库中 **没有** 已经悬置超过数周且未获维护者回应的高优先级条目。  
- 唯一待处理的 Item 是刚刚开启的 #650，建议维护者在下一次例行审查时评估其实施成本与优先级。  

---

**总结**：ZeptoClaw 在 2026-08-25 日表现为 **低活跃度**，社区仅有一项功能请求未产生讨论。项目代码基础稳定，但缺乏新特性推进和错误修复。建议维护者关注即将到来的功能需求（如 #650），并在适当时机评估其是否值得纳入近期版本，以防止项目长期停滞。  

---  
*报告生成时间：2026-08-25 00:00 UTC*  
*数据截止：过去 24 小时（2026-08-24 00:00 → 2026-08-24 23:59）*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-25

## 今日速览

ZeroClaw 在过去 24 小时保持较高活跃度，共更新 Issues 50 条（新开/活跃 43，关闭 7）、PR 50 条（待合并 45，合并/关闭 5），无新版本发布。项目正处于密集的安全加固与架构收敛阶段：一方面 S0 级安全漏洞（delegate 绕过高风险命令策略）、TTS API 密钥泄露风险被发现并跟进处理；另一方面，多个核心 PR（Windows 测试修复、Telegram 媒体信封、provider 生命周期会计）成功合并，显著提升了跨平台稳定性与可观测性。值得关注的是，一批标有 `follow-up` 和 `risk:high` 的安全类 PR 集中提交，且项目中长期存在的 WebSocket 生命周期耦合、128K 上下文上限失效等问题仍在持续推进中。整体看，项目正从功能扩张转向稳定性与安全性的深度治理。

## 版本发布

无新版本发布。

## 项目进展

过去 24 小时共有 5 个 PR 被合并/关闭，均为主干分支的实质性改动：

**已合并 PR（重要进展）：**

- **[PR #10208] fix(tests): fix Windows platform test failures** — 修复了 Windows 平台上 `bash` 命令解析问题（`Command::new("bash")` 在 Windows 上因系统目录搜索顺序导致 WSL 启动器 stub 被错误调用），并顺带修复了多个相关测试失败。这是提升项目跨平台可用性的关键一步。（zeroclaw-labs/zeroclaw PR #10208）
- **[PR #9563] fix(channels): populate the typed media envelope from Telegram** — Telegram 此前仅将图片/文档解析为消息文本并输出 `[IMAGE:<path>]` 标记，导致下游无法准确判断"该轮对话是否携带了图片"。此 PR 补全了 typed media envelope，为多模态 agent 能力铺平道路。（zeroclaw-labs/zeroclaw PR #9563）
- **[PR #10027] fix(providers): report the served model in reliable fallback failure logs** — 修复了可靠 fallback 日志记录请求模型而非实际服务的（pinned）模型的问题，显著提升故障排查时的可观测性。（zeroclaw-labs/zeroclaw PR #10027）
- **[PR #10144] fix(providers): complete lifecycle provider accounting** — 由 vrurg 贡献，完成了 provider 调用生命周期的完整记账：通过私有的 `ProviderDispatch` 收集器确保每个物理 provider 叶子按实际探测顺序精确记录一次。该项工作直接解决了 issue #10143 并完善了 PR #10003 引入的契约。（zeroclaw-labs/zeroclaw PR #10144）

**值得关注的新提交（待合并）：**

- **[PR #10307] fix(gateway): one shared pairing-code policy, stronger default** — 统一了配对码策略：原实现硬编码 6 位数字（10^6 搜索空间），而文档宣称可配置为 8 位但实际没有任何消费方。此 PR 修复了该安全弱点。
- **[PR #10308] feat(config): gate <install>/shared/ read access behind a per-agent flag** — 新增默认拒绝的 `can_use_shared_workspace` 标志，将共享工作区读取纳入 `SecurityPolicy` 的只读层，运维不再需要手写绝对路径白名单。
- **[PR #10309] chore(skillforge): remove the orphaned SkillForge engine** — 删除未使用的 SkillForge 引擎（约 4 个模块 + 根 shim + 死引用），清理了架构冗余。

**项目整体进程评估：** 上述合并的 PR 分别从 CI 稳定性（Windows）、渠道能力（Telegram 媒体）、可观测性（fallback 日志）和提供层架构（生命周期会计）四个维度推进了项目。尤其 `provider accounting` 的完善标志着"实际物理 provider leaf 精确记账一次"这一架构契约的落地，为后续计费与用量分析奠定基础。

## 社区热点

**#8603 — RFC: ZeroClaw Chat Completions profile（24 评论，当之无愧的最热）**
[Issue #8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)
目前 ZeroClaw 仅通过 WebSocket、ACP 和 channel webhook 暴露 agent 能力，导致 Open WebUI、LobeChat、Continue.dev、Aider、LangChain 等主流 OpenAI 协议客户端无法接入。该 RFC 提议为 ZeroClaw 增加 Chat Completions 兼容端点，直接将项目接入更广阔的 AI 客户端生态。

**社区诉求分析：** 该 RFC 获得大量讨论（24 条评论 + accepted 状态），反映出社区对"与主流 OpenAI 协议生态互通"的强烈需求。从业界标准看，Chat Completions 协议兼容已是 AI 网关类项目的必备能力，此 RFC 的落地可能成为 ZeroClaw 扩大用户基数的关键催化剂。标有 `risk:high` 表明架构层面改动较大，后续进展值得关注。

**#7431 — 预转工具的意图提取提示（6 评论）**
[Issue #7431](https://github.com/zeroclaw-labs/zeroclaw/issues/7431)
社区提议增加轻量级 pre-turn 意图提取步骤，检测自然语言的路由请求并自动设置 `send_via` 路由。这反映了用户对"agent 应更智能地理解用户路由意图"的期待。

**#9512 — 为定制 CI 门禁标注触发 issue（5 评论）**
[Issue #9512](https://github.com/zeroclaw-labs/zeroclaw/issues/9512)
用户希望每个定制的 CI 门禁（如 `repo-structure`、`zerocode-rpc-boundary`）都标注其由哪个问题/事件触发产生，改善代码库的可维护性与追溯性，同时也有利于新人理解 CI 配置。

## Bug 与稳定性

按严重程度从高到低排列：

**S0 — 数据丢失/安全风险：**

- **[#10165] Independent delegate 绕过 `block_high_risk_commands` 安全策略**（p1, risk:high）— 高危命令（如 `rm`）可通过 **independent** delegate 执行成功，即 delegate 自身 `risk_profile` 即使设置了 `block_high_risk_commands = true` 也被绕过。此问题直接影响沙箱安全性。**暂无明确修复 PR**，但状态为 in-progress。（zeroclaw-labs/zeroclaw Issue #10165）
- **[#10068] 交互式 agent 会话上下文上限被锁定为 32,000 tokens**（p2）— 无论 `max_context_tokens = 131072` 如何设置，交互式会话（`zeroclaw agent --agent <name>`）都被限制在 32K。in-progress 状态，暂无修复 PR。（zeroclaw-labs/zeroclaw Issue #10068）

**S1 — 工作流阻塞：**

- **[#10223] ZeroCode 在重连期间丢弃 Ctrl+C 并阻塞键盘输入**（p1, risk:medium）— 当 daemon 在 Code turn 活跃时断开，ZeroCode 进入重连状态但停止响应键盘输入。in-progress，暂无修复 PR。（zeroclaw-labs/zeroclaw Issue #10223）
- **[#10251] 17 个 Telegram listen 测试断言墙壁时钟超时**（已关闭）— 与 #9429 同类问题，并行运行时因负载而失败。**已关闭**，表明已获处理。（zeroclaw-labs/zeroclaw Issue #10251）

**S2 — 功能降级（代表性选列）：**

- **[#10175] Google TTS API 密钥头未标记为敏感** — `x-goog-api-key` 头从 `&self.api_key` 构造但未标记为 sensitive，格式化时可能泄露。in-progress。（zeroclaw-labs/zeroclaw Issue #10175）
- **[#9812] Provider fallback 携带主模型 ID 导致永远无法触发**（risk:high, needs-repro）— fallback provider 被要求提供主模型的 model id，配置正确的 fallback 永远无法生效。（zeroclaw-labs/zeroclaw Issue #9812）
- **[#10232] Daemon 诊断日志丢失底层错误链** — supervisor 只记录 `e.to_string()` 外层上下文，丢失 anyhow 错误链的根本原因。
- **[#10238] ZeroCode 在 daemon 退出后显示过期的 Connected 状态** — 用户无法感知连接已断开，打开 Code 时等待超时。

**已修复/关闭（当日关闭的 7 个 Issue 中代表性）：**

- [#10023] fallback 失败日志错误模型名 — **已由 PR #10027 修复**
- [#9590] 并发 models refresh 丢缓存条目 — 已关闭
- [#10106] 精确代理选择器拒绝语音转录服务 — 已关闭
- [#10224] 自定义 provider 5xx 错误日志 JSON 重复转义 — 已关闭

## 功能请求与路线图信号

**有明确 PR 支撑、极可能进入下一版本：**

- **[PR #10308] 按 agent 的共享工作区读取门控** — 新增 `can_use_shared_workspace` 标志及 SecurityPolicy 只读层的实现已经提交，是对社区关于安全策略细粒度控制诉求的回应，预计近期将合入。
- **[PR #10307] 统一配对码策略** — 将配对码从硬编码 6 位升级为可配置且默认更强的策略，修复安全弱点的同时整合了 Telegram/Line/WeChat 等多个渠道的配对码。
- **[PR #10311] 集中化 tool-call 格式化指令** — 将 XML dispatcher 与 loop_ prompt builder 中已发生分叉的 `<tool_call>` 协议文本统一为一处，避免指令漂移。
- **[PR #10314] 为 /models 成功响应体加大小上限** — 所有 compat family 共用路径存在无界 JSON 缓冲问题，此 PR 已提交修复。

**路线图信号（尚无明确 PR，但社区呼声强）：**

- **Chat Completions 协议兼容（#8603）** — 24 条评论的热度充分说明需求迫切性，虽无对应 PR 但已被 RFC 接受（status:accepted），预计会成为近期开发重点。
- **gateway WebSocket 生命周期解耦（#7759）** — 客户端断开不应取消正在进行的 turn，需将 turn 移至后台运行并支持重连恢复。p1 且 accepted/in-progress。
- **预转工具意图提取（#7431）** — 提升 NL 路由智能化，低实现成本高体验增益。
- **退役无关的 legacy HMAC 节点传输（#10243）** — 代码暴露 `NodeTransport`、`sign_request`、`verify_request` 但无接收端，社区提议退役或明确替换路径。

## 用户反馈摘要

**正面反馈信号：**

- 项目对社区提交的处理节奏较快：当日多条用户报告（#10251、#10106、#10224、#10143 等）均已在 1-2 天内关闭或进入 in-progress，维护者响应积极性较高。
- PR #8965 的复杂分层（stacked branch + 拆分 commit）表明维护者重视跨渠道能力的正确落地，社区协作组织有序。

**核心吐槽与痛点：**

1. **安全策略被静默绕过**（#10165）："独立 delegate 绕过策略"问题被报告为 S0 级别，用户对高风险命令防护的信任度受到直接挑战。
2. **配置项名存实亡**（#10068）：设置 `max_context_tokens = 131072` 但实际仍被限制在 32K。"Session displays ctx: 15,538 / 32,000" 这类现象非常直观地暴露了配置与行为的脱节。
3. **日志可诊断性不足**（#10232、#10023、#10224）：错误日志存在丢失错误链、报错模型名错误、JSON 双重转义等问题，直接延长定位故障的时间。
4. **跨平台兼容问题**（#10208 对应修复）：Windows 上 bash 命令解析导致测试失败，是阻碍 Windows 用户贡献代码/使用的痛点。
5. **fallback 机制形同虚设**（#9812、#10023）：fallback 携带主模型 ID 导致永远无法触发，且即便触发也记录错误的模型名。用户在排查时发现"配置了一个永远不会生效的 fallback 还毫不知情"。

## 待处理积压

**长期未响应/需要关注的重要 Issue：**

- **[#7431] 预转工具意图提取**（创建 2026-06-09，已持续 2.5 个月+）— 已接受但尚未有 PR 落地。该功能涉及路由请求的智能化，符合项目 roadmap 的多层路由架构（RFC #6969 Layer 3），建议尽快安排开发资源。（zeroclaw-labs/zeroclaw Issue #7431）
- **[#8289] OIDC 里程碑 tracker**（创建 2026-06-24）— 作为 coordinating tracker 推进 #7141 的三阶段实现（AuthProvider 验证 → 规范化主体 → 入站认证），属于 Identity & Access 大里程碑的骨架，长期无实质更新。（zeroclaw-labs/zeroclaw Issue #8289）
- **[#8603] Chat Completions profile RFC**（创建 2026-07-02）— 已接受但超过一个月无对应实现 PR，鉴于其社区热度（24 评论），可能是项目目前最具商业价值的功能缺口。

**存在掉线风险的活跃 PR（需维护者注意）：**

- **[PR #9713] token accounting on history-trim events**（size:XL，needs-author-action）— Project516 的大型改动，涉及 agent/channel/gateway/runtime 多模块，已挂起近 3 周，需确认作者是否仍在推进。
- **[PR #9678] harden Git shell policy arguments**（size:XL，risk:high，needs-author-action）— 安全相关的核心改动，若长期搁置会增加安全策略被绕过风险。
- **[PR #8965] declarative auto-activation with provider switch**（size:XL，stacked on #9563）— 依赖链已由 #9563 合并后解除，需尽快 rebase 推动合入。

---

*本日报基于 github.com/zeroclaw-labs/zeroclaw 截至 2026-08-25 的公开数据生成，供项目维护者与社区做健康度评估参考。*

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*