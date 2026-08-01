# OpenClaw 生态日报 2026-08-02

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-01 22:16 UTC

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

# OpenClaw 项目动态日报
**日期：2026-08-02** | 数据源：github.com/openclaw/openclaw

---

## 1. 今日速览

OpenClaw 今日处于高活跃开发与反馈循环期：24 小时内共处理 1,000 条 Issue/PR 更新（新开/活跃 475 个 Issue、待合并 390 个 PR），并发布了 **v2026.7.2-beta.6** 预览版。社区讨论热度集中在 DeepSeek v4 Flash 静默失败（73 条评论）、工具调用间文本泄露（39 条）和实时语音资源泄漏（33 条）三大痛点。整体来看，项目功能迭代节奏快，但稳定性回归和认证/会话状态的缺陷仍是主要阻力，健康度评估为 **「活跃但需关注稳定性」**。

---

## 2. 版本发布

### 📦 openclaw 2026.7.2-beta.6

**更新内容（基于 Release Notes 摘要）：**
- **State safety and recovery**：引入隔离存储（quarantine store），可在主数据库损坏时保护持久化数据；新增可崩溃恢复的 SQLite 快照、崩溃持久的文件系统发布机制、模式升级数据丢失拒绝、回滚写入器快照恢复。
- 该版本为 **beta 预览**，未标记为破坏性变更，但涉及状态存储底层重构，迁移时需注意：
  - 已有 `openclaw.sqlite` 在模式升级失败时将被拒绝而非静默损坏。
  - 建议在升级前备份 `state/` 目录，留意 `*.bak-schema*` 和 `*.moved-schema*` 等恢复文件。

**迁移注意事项：**
- 如从 2026.7.1 升级，需确认 `channels.start` 恢复路径仍有效（参见 Issue #115326）。
- 容器环境中 PID 复用的锁泄漏问题（#114234）可能影响升级后的会话恢复。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

> 注：当前数据集中 PR 多为「待合并」状态（390 open），以下为今日更新最活跃、进展最显著的 PR。

| PR | 标题 | 进展 | 链接 |
|---|---|---|---|
| #117660 | refactor(lmstudio): consolidate provider setup test fixtures | 待合并，维护者审核中 | [PR #117660](https://github.com/openclaw/openclaw/pull/117660) |
| #117274 | fix(agents): prefer write/edit tools over heredocs to prevent literal-newline corruption | 待合并，修复 #114128 | [PR #117274](https://github.com/openclaw/openclaw/pull/117274) |
| #97175 | fix(context-engine): bound deferred turn maintenance with a per-task timeout | 待合并，修复会话维护卡住问题 | [PR #97175](https://github.com/openclaw/openclaw/pull/97175) |
| #117655 | fix(perf): wait for gateway WebSocket readiness | 待合并，性能修复 | [PR #117655](https://github.com/openclaw/openclaw/pull/117655) |
| #117144 | fix(ci): package runtime resources in dist artifact | 待合并，CI 构建修复 | [PR #117144](https://github.com/openclaw/openclaw/pull/117144) |
| #114261 | Fix auth_profile_store not resyncing when apiKey is updated in openclaw.json | 待合并，认证修复 | [PR #114261](https://github.com/openclaw/openclaw/pull/114261) |
| #116543 | fix(msteams): page channel thread replies | 待合并，Mattermost/Teams 修复 | [PR #116543](https://github.com/openclaw/openclaw/pull/116543) |
| #115160 | fix(memory): preserve QMD search hits when result rows are malformed | 待合并，内存搜索修复 | [PR #115160](https://github.com/openclaw/openclaw/pull/115160) |
| #114287 | chore: add fail-closed publication security preflight | 待合并，安全加固 | [PR #114287](https://github.com/openclaw/openclaw/pull/114287) |
| #112669 | fix(agents): prevent stuck recovery from aborting replacement runs | 待合并，会话恢复修复 | [PR #112669](https://github.com/openclaw/openclaw/pull/112669) |
| #117649 | fix(perf): retain startup benchmark warmups | 待合并，性能修复 | [PR #117649](https://github.com/openclaw/openclaw/pull/117649) |
| #117443 | fix(status): resolve effective channel model override | 待合并，状态命令修复 | [PR #117443](https://github.com/openclaw/openclaw/pull/117443) |
| #117430 | fix(ui): make copy actions accessible and consistent across surfaces | 待合并，UI 无障碍修复 | [PR #117430](https://github.com/openclaw/openclaw/pull/117430) |
| #117311 | fix(agents): preserve canonical compaction user turns | 待合并，会话压缩修复 | [PR #117311](https://github.com/openclaw/openclaw/pull/117311) |
| #117509 | fix(agents): surface sessions_yield waiting status | 待合并，Agent 等待状态可见性 | [PR #117509](https://github.com/openclaw/openclaw/pull/117509) |
| #117652 | fix(channels): contain transport watchdog failures | 待合并，通道看门狗修复 | [PR #117652](https://github.com/openclaw/openclaw/pull/117652) |
| #115285 | fix(doctor): skip default-agent binding materialization when agentId identity collision | 待合并，doctor 命令修复 | [PR #115285](https://github.com/openclaw/openclaw/pull/115285) |
| #114160 | Reduce gateway duplicate dispatch pressure | 待合并，网关性能优化 | [PR #114160](https://github.com/openclaw/openclaw/pull/114160) |
| #117184 | feat(auto-reply): clean empty staged inbound media directories | 待合并，自动回复清理 | [PR #117184](https://github.com/openclaw/openclaw/pull/117184) |
| #116248 | fix(auth): default agent loses keys after secondary paste-api-key | 待合并，认证密钥修复 | [PR #116248](https://github.com/openclaw/openclaw/pull/116248) |
| #117488 | fix(doctor): reject conflicting maintenance operations before side effects | 待合并，doctor 命令修复 | [PR #117488](https://github.com/openclaw/openclaw/pull/117488) |
| #116176 | fix(signal): align autoStart daemon bind with local connection URL port | 待合并，Signal 通道修复 | [PR #116176](https://github.com/openclaw/openclaw/pull/116176) |
| #115277 | fix(agents): materialize MCP for server-name toolsAllow globs | 待合并，MCP 工具修复 | [PR #115277](https://github.com/openclaw/openclaw/pull/115277) |
| #84827 | fix(control-ui): add guarded dashboard shortcuts | 待合并，Control UI 修复 | [PR #84827](https://github.com/openclaw/openclaw/pull/84827) |
| #114953 | fix: add Kubernetes resource-only teardown | 待合并，K8s 运维修复 | [PR #114953](https://github.com/openclaw/openclaw/pull/114953) |
| #117535 | fix(doctor): classify critically low disk space as an error | 待合并，磁盘诊断修复 | [PR #117535](https://github.com/openclaw/openclaw/pull/117535) |
| #117534 | fix(active-memory): preserve recall after lane-one timeout | 待合并，主动记忆修复 | [PR #117534](https://github.com/openclaw/openclaw/pull/117534) |
| #115465 | fix(google): reject malformed video operation JSON | 待合并，Google 视频修复 | [PR #115465](https://github.com/openclaw/openclaw/pull/115465) |
| #114183 | fix(memory-core): memory_search times out after 15s when a builtin-backend query finds no matches | 待合并，内存搜索超时修复 | [PR #114183](https://github.com/openclaw/openclaw/pull/114183) |
| #107362 | fix: block unresolved Telegram reply targets | 待合并，Telegram 回复修复 | [PR #107362](https://github.com/openclaw/openclaw/pull/107362) |

**今日项目整体向前推进：** 30+ 个 PR 处于活跃审核/合并流程，覆盖会话管理、认证、通道、内存搜索、性能、CI/K8s 等核心模块。

---

## 4. 社区热点

### 🔥 最活跃 Issues（按评论数排序）

| # | 标题 | 评论 | 链接 |
|---|---|---|---|
| **#116277** | DeepSeek v4 Flash silent reply failure — no reply generated, generic fallback | 73 | [Issue #116277](https://github.com/openclaw/openclaw/issues/116277) |
| **#25592** | Text between tool calls leaks to messaging channels | 39 | [Issue #25592](https://github.com/openclaw/openclaw/issues/25592) |
| **#116201** | Realtime voice work can retain unbounded provider and consult state | 33 | [Issue #116201](https://github.com/openclaw/openclaw/issues/116201) |
| **#115326** | Crash-loop breaker suppresses Discord/WhatsApp permanently | 24 | [Issue #115326](https://github.com/openclaw/openclaw/issues/115326) |
| **#31583** | `exec` tool does not inherit `skills.entries.*.env` environment variables | 14 | [Issue #31583](https://github.com/openclaw/openclaw/issues/31583) |
| **#101290** | CLI startup preflight can corrupt the live state DB | 14 | [Issue #101290](https://github.com/openclaw/openclaw/issues/101290) |
| **#108435** | update to openclaw 2026.7.1: gateway fails to start | 14 | [Issue #108435](https://github.com/openclaw/openclaw/issues/108435) |
| **#88657** | DeepSeek V4 Flash incomplete turn (payloads=0, tools=2) | 10 | [Issue #88657](https://github.com/openclaw/openclaw/issues/88657) |
| **#86684** | sessions_yield subagent wake can compact parent branch at low context usage | 10 | [Issue #86684](https://github.com/openclaw/openclaw/issues/86684) |
| **#107464** | Telegram message(action=send) can prematurely release Codex turn | 8 | [Issue #107464](https://github.com/openclaw/openclaw/issues/107464) |

**背后诉求分析：**
- **#116277（73 评论）**：用户强烈诉求 DeepSeek v4 Flash 模型的可靠性问题，需紧急修复或提供明确的 fallback 策略与错误提示。
- **#25592（39 评论）**：安全与隐私关切——内部工具调用输出不应泄露到用户可见通道。
- **#115326（24 评论）**：崩溃保护机制误伤正常服务，恢复路径文档与实现不一致。

---

## 5. Bug 与稳定性

### 🔴 严重（P0 / 阻塞发布）

| Issue | 标题 | 状态 | 修复 PR | 链接 |
|---|---|---|---|---|
| #101290 | CLI startup preflight can corrupt the live state DB while a gateway is running | OPEN | — | [Issue #101290](https://github.com/openclaw/openclaw/issues/101290) |
| #108435 | gateway fails to start after 2026.7.1 update | OPEN | — | [Issue #108435](https://github.com/openclaw/openclaw/issues/108435) |
| #115326 | Crash-loop breaker suppresses Discord/WhatsApp permanently | OPEN | — | [Issue #115326](https://github.com/openclaw/openclaw/issues/115326) |
| #115421 | Schema downgrade recovery must not quarantine/wipe state DB (cron jobs lost) | OPEN | — | [Issue #115421](https://github.com/openclaw/openclaw/issues/115421) |
| #115424 | Gateway V8 heap OOM during main-session turn; restart-recovery hot-resumes and converts one crash into a 7-core-dump loop | OPEN | — | [Issue #115424](https://github.com/openclaw/openclaw/issues/115424) |

### 🟠 高严重（P1）

| Issue | 标题 | 状态 | 修复 PR | 链接 |
|---|---|---|---|---|
| #116277 | DeepSeek v4 Flash silent reply failure | OPEN | — | [Issue #116277](https://github.com/openclaw/openclaw/issues/116277) |
| #25592 | Text between tool calls leaks to messaging channels | OPEN | — | [Issue #25592](https://github.com/openclaw/openclaw/issues/25592) |
| #116201 | Realtime voice work can retain unbounded provider and consult state | OPEN | — | [Issue #116201](https://github.com/openclaw/openclaw/issues/116201) |
| #31583 | `exec` tool does not inherit `skills.entries.*.env` env vars | OPEN | — | [Issue #31583](https://github.com/openclaw/openclaw/issues/31

---

## 横向生态对比

# 今日重點摘要（2026-08-02）

## 一、重要更新

1. **[OpenClaw](https://github.com/openclaw/openclaw)** — 发布 v2026.7.2-beta.6 预览版，引入隔离存储（quarantine store）、崩溃恢复 SQLite 快照等状态安全重构，涉及底层存储迁移，升级时需备份 `state/` 目录。

2. **[NanoClaw](https://github.com/nanocoai/nanoclaw)** — 发布 v2.1.54（Rollup Release），核心交付为 iMessage 渠道统一为单一 `imessage` 渠道（Local + Hosted 双后端），同时新增凭证过期告警机制。

3. **[ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)** — PR #9609 已合并，修复 WhatsApp Web 在 business 模式下无视 `dm_policy`/`group_policy` 的安全风险，阻止回复所有 DM 和群组。

4. **[IronClaw](https://github.com/nearai/ironclaw)** — PR #6998 已关闭，完成 contracts 层中 extension_host 产品端口反转至 product_contracts（WS2.1），实现架构层解耦，extension_host 不再依赖 ironclaw_product 内部接口。

5. **[PicoClaw](https://github.com/sipeed/picoclaw)** — 新增 Exa 原生 Web 搜索提供者（PR #3299）和 OrcaRouter OpenAI 兼容路由提供者（PR #3309），扩展了可插拔 provider 生态。

6. **[CoPaw](https://github.com/agentscope-ai/CoPaw)** — PR #6302 推进统一 provider 发现、模型元数据、路由与 agent 控制的架构级重构，为后续所有 provider 功能奠定基础。

7. **[OpenClaw](https://github.com/openclaw/openclaw)** — DeepSeek v4 Flash 静默失败问题（Issue #116277）持续发酵，累计 73 条评论，社区强烈要求紧急修复或明确 fallback 策略。

8. **[Moltis](https://github.com/moltis-org/moltis)** — PR #1174 已合并，新增后端无关的 Agent 可观测性基础设施，支持 Langfuse v4 导出、OTLP 后端及端到端反应式反馈采集。

## 二、活跃度概览

今日整体活跃度呈头部集中态势：**OpenClaw** 以 1,000 条 Issue/PR 更新位居最活跃；**ZeroClaw**（100 条）和 **IronClaw**（49 条）紧随其后；**NanoBot**（30 条）、**PicoClaw**、**CoPaw** 处于中等活跃水平；**LobsterAI**、**Moltis** 较低；**NullClaw**、**TinyClaw**、**ZeptoClaw** 今日无活动。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**日期：2026-08-02** | **数据窗口：过去 24 小时**

---

## 1. 今日速览

过去 24 小时内，NanoBot 项目整体保持**中高活跃度**：共处理 30 条更新（5 条 Issue + 25 条 PR），其中 13 条 PR 已合并或关闭，12 条 PR 仍处于待合并状态。社区持续围绕 WebUI 体验优化、会话管理增强和 Provider 健壮性展开密集开发。无新版本发布，项目处于功能迭代与稳定性修复并行的阶段，整体健康度良好。

---

## 2. 版本发布

**今日无新版本发布。** 暂无 v0.x.x 标签更新，建议关注即将合并的 PR 集合以判断下一次发布窗口。

---

## 3. 项目进展（已合并/关闭的 PR）

| PR | 标题 | 贡献领域 | 链接 |
|---|---|---|---|
| #5183 | fix(cron): preserve manual run completion state | 定时任务稳定性 | [链接](https://github.com/HKUDS/nanobot/pull/5183) |
| #5153 | fix(memory): handle non-string timestamp and missing role in raw_archive | 内存/消息格式化健壮性 | [链接](https://github.com/HKUDS/nanobot/pull/5153) |
| #5201 | fix(session): tolerate malformed persisted session summary | 会话持久化容错 | [链接](https://github.com/HKUDS/nanobot/pull/5201) |
| #5200 | fix(exec): preserve wait targets across response truncation | 执行引擎输出处理 | [链接](https://github.com/HKUDS/nanobot/pull/5200) |
| #5199 | [refactor] narrow Pyright suppressions | 代码质量/类型安全 | [链接](https://github.com/HKUDS/nanobot/pull/5199) |
| #5183 | fix(cron): preserve manual run completion state | 定时任务稳定性 | [链接](https://github.com/HKUDS/nanobot/pull/5183) |
| #5172 | feat: preserve Responses reasoning state and compact context | Responses API 兼容 | [链接](https://github.com/HKUDS/nanobot/pull/5172) |
| #5108 | fix(channels): add per-sender message rate limiting | 频道消息节流 | [链接](https://github.com/HKUDS/nanobot/pull/5108) |
| #3732 | fix(providers): require api_base before local provider wins on keyword match | Provider 路由修复 | [链接](https://github.com/HKUDS/nanobot/pull/3732) |
| #5208 | fix(dream): advance cursor when durable changes were made | Dream 定时任务游标推进 | [链接](https://github.com/HKUDS/nanobot/pull/5208) |
| #5209 | refactor(webui): reuse sidebar selection highlight | WebUI 视觉体验 | [链接](https://github.com/HKUDS/nanobot/pull/5209) |

**推进总结**：本周项目在三个方向取得显著进展——**(1) 稳定性**：修复了定时任务状态丢失、消息格式化 KeyError、会话摘要损坏等关键回归；**(2) WebUI 体验**：侧边栏高亮复用、模型预设切换可发现性、Quick Chat/Temporary Chat 等多项体验优化持续推进；**(3) Provider 与渠道层**：本地 Provider 路由逻辑修正、渠道消息限流机制落地。项目整体向前迈进了约 **11 个已合并/关闭 PR**，覆盖面较广。

---

## 4. 社区热点

### 热门 Issues

| Issue | 热度分析 | 链接 |
|---|---|---|
| [#5198](https://github.com/HKUDS/nanobot/issues/5198) | **模型切换不可用**——用户反馈 `/model` 命令与 UI 模型选择器均无法在单一会话内切换模型，仅能重新配置实例。这是影响日常使用的核心交互问题，评论数 1 但反馈明确。 | [链接](https://github.com/HKUDS/nanobot/issues/5198) |
| [#5185](https://github.com/HKUDS/nanobot/issues/5185) | **工具调用代码泄露到回复**——模型在响应中直接输出 tool call 代码块，属于输出质量回归，影响所有用户。 | [链接](https://github.com/HKUDS/nanobot/issues/5185) |
| [#5205](https://github.com/HKUDS/nanobot/issues/5205) | **Feishu 插件启用失败**——`ensurepip` 模块缺失导致插件初始化崩溃，影响飞书渠道用户。 | [链接](https://github.com/HKUDS/nanobot/issues/5205) |
| [#4801](https://github.com/HKUDS/nanobot/issues/4801) | **message['role'] KeyError**——会话历史中存在残缺消息 dict 时触发崩溃，潜伏已久（创建于 7/6）。 | [链接](https://github.com/HKUDS/nanobot/issues/4801) |

### 热门 PRs（按关注度）

| PR | 亮点 | 链接 |
|---|---|---|
| [#5210](https://github.com/HKUDS/nanobot/pull/5210) | **Trusted Proxy Bootstrap Auth**——为 Cloudflare Tunnel + Access 部署场景提供无 token 的反向代理认证路径，P1 优先级，安全性增强。 | [链接](https://github.com/HKUDS/nanobot/pull/5210) |
| [#5211](https://github.com/HKUDS/nanobot/pull/5211) | **跨会话搜索与 @提及**——新增 `search_sessions` / `read_session` 工具及 WebUI 提及面板，显著提升多会话管理能力。 | [链接](https://github.com/HKUDS/nanobot/pull/5211) |
| [#5184](https://github.com/HKUDS/nanobot/pull/5184) | **Quick Chat & Temporary Chat**——为 WebUI 引入一次性临时会话与稳定快捷会话两种模式，改善交互灵活性。 | [链接](https://github.com/HKUDS/nanobot/pull/5184) |
| [#5194](https://github.com/HKUDS/nanobot/pull/5194) | **JSONL 会话列表与线程加载性能优化**——针对大规模会话场景的缓存与索引加速。 | [链接](https://github.com/HKUDS/nanobot/pull/5194) |
| [#5202](https://github.com/HKUDS/nanobot/pull/5202) | **模型预设切换可发现性**——将隐藏的长按拖拽手势替换为点击下拉菜单，直接回应 #5198 的用户痛点。 | [链接](https://github.com/HKUDS/nanobot/pull/5202) |

**诉求分析**：社区最关注的是 **模型切换体验**（#5198 → #5202）和 **WebUI 会话管理**（#5211、#5184），反映出用户对 NanoBot 作为日常对话工具的期望正在从"可用"向"流畅、可定制"升级。安全部署场景（#5210）则体现了企业级用户群体的增长。

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 是否有 Fix PR | 链接 |
|---|---|---|---|---|
| 🔴 **高** | #5185 | 模型回复中泄露 tool call 代码块，输出质量严重下降 | ❌ 无对应 PR | [Issue](https://github.com/HKUDS/nanobot/issues/5185) |
| 🔴 **高** | #5198 | 会话内无法切换模型，仅能 fallback | ✅ 对应 PR #5202（修复可发现性，但未解决切换逻辑） | [Issue](https://github.com/HKUDS/nanobot/issues/5198) |
| 🟠 **中** | #5205 | Feishu 插件启用时 `ensurepip` 模块缺失，环境配置问题 | ❌ 无对应 PR | [Issue](https://github.com/HKUDS/nanobot/issues/5205) |
| 🟠 **中** | #4801 | `message['role']` KeyError，残缺消息导致崩溃 | ✅ PR #5153 已修复 raw_archive 场景 | [Issue](https://github.com/HKUDS/nanobot/issues/4801) |
| 🟡 **低** | #5163 | 手动 cron 运行后 WebUI 轮询显示旧状态（竞态条件） | ✅ PR #5183 已修复 | [Issue](https://github.com/HKUDS/nanobot/issues/5163) |

**稳定性评估**：过去 24 小时报告的 Bug 中，高优先级问题集中在**输出质量**和**核心交互**层面，修复覆盖面有待加强。中低优先级问题已有 PR 跟进，整体回归风险可控。

---

## 6. 功能请求与路线图信号

| 信号来源 | 功能描述 | 路线图可能性 |
|---|---|---|
| **PR #5211** | 跨会话搜索 + @提及 | ⭐⭐⭐ 高概率——已合并入 WebUI 核心流程 |
| **PR #5184** | Quick Chat / Temporary Chat | ⭐⭐⭐ 高概率——完善 WebUI 会话生命周期 |
| **PR #5202** | 模型预设切换可发现性 | ⭐⭐⭐ 高概率——直接回应用户痛点 #5198 |
| **PR #5207** | Subagent 模型预设（spawn 工具） | ⭐⭐ 中概率——Agent 框架扩展 |
| **PR #5210** | Trusted Proxy Bootstrap Auth | ⭐⭐ 中概率——企业部署场景增强 |
| **PR #5194** | JSONL 会话列表性能优化 | ⭐⭐ 中概率——规模化必备 |
| **Issue #5198** | 会话内模型切换 | ⭐⭐ 中概率——需后端支持 |
| **PR #5172** | Responses API 推理状态保持 | ⭐⭐ 中概率——与 OpenAI ARC-AGI-3 对齐 |

**路线图判断**：下一版本很可能围绕 **WebUI 会话管理增强 + 模型交互优化 + 企业部署安全**三条主线展开。

---

## 7. 用户反馈摘要

### 痛点
- **模型切换受阻**：用户无法在单一会话内灵活切换模型，必须重新配置整个实例（#5198），与主流 SaaS AI 的即时切换体验差距明显。
- **输出质量波动**：模型突然在回复中输出 tool call 代码（#5185），影响对话可用性。
- **插件环境依赖**：Feishu 插件因 `ensurepip` 缺失无法启用（#5205），暴露环境打包或依赖管理问题。
- **会话历史损坏**：残缺消息 dict 导致 KeyError（#4801），长期潜伏未被修复。

### 满意之处
- **WebUI 体验持续改善**：Quick Chat、Temporary Chat、侧边栏高亮复用等 PR 表明团队重视前端交互细节。
- **多渠道支持完善**：飞书渠道的存在说明多平台集成是项目重点。
- **企业级部署意识增强**：Trusted Proxy Auth PR 体现了对反向代理/CDN 场景的关注。

---

## 8. 待处理积压

| 积压项 | 描述 | 建议 |
|---|---|---|
| **Issue #5198**（创建于 2026-07-31） | 会话内模型切换不可用，评论 1 条，尚未有针对性修复 PR | 维护者应优先评估，PR #5202 仅改善 UI 可发现性，未解决后端切换逻辑 |
| **Issue #5185**（创建于 2026-07-30） | 工具调用代码泄露到回复，评论 4 条但无人提交修复 PR | 需要定位是模型层还是输出格式化层的问题 |
| **Issue #5205**（创建于 2026-08-01） | Feishu 插件 `ensurepip` 缺失，环境配置问题 | 可能是 uv 环境隔离问题，建议检查插件安装流程 |
| **Issue #4801**（创建于 2026-07-06，潜伏 27 天） | `message['role']` KeyError | PR #5153 已修复 raw_archive 场景，但 `_format_messages` 主路径是否覆盖仍需确认 |
| **PR #3869**（创建于 2026-05-16，开放 78 天） | DeepSeek 消息硬化——null 内容 400 错误、占位符泄漏 | 长期未合入，建议维护者评估是否与当前 Provider 架构冲突 |
| **PR #3732**（创建于 2026-05-11，开放 83 天） | 本地 Provider 关键词匹配逻辑修正 | 开放时间最长，需确认是否仍相关 |

**提醒**：#3869 和 #3732 均已开放超过 2 个月，建议维护者进行状态审查或标记为 stale，避免技术债务累积。

---

*报告生成时间：2026-08-02 | 数据来源：github.com/HKUDS/nanobot*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报
**日期：2026-08-02** | 数据源：github.com/nousresearch/hermes-agent

---

## 1. 今日速览

Hermes Agent 项目今日整体活跃度中等偏上，Issues 与 PR 的更新量均达到 50 条，显示社区持续参与度高但无新版本发布。项目核心关注点集中在 **SSH 桌面远程配置兼容性、CLI 配置写入正确性、Windows 平台稳定性、以及多消息平台（Telegram/Discord/Feishu）的消息投递可靠性** 上。MCP 协议向 2026-07-28 版本迁移的准备工作已进入跟踪阶段。总体看，项目处于功能迭代与稳定性修复并行的阶段，Desktop 端和 Gateway 端是今日改动最密集的模块。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日有 14 条 PR 被合并或关闭（基于 PR 更新统计中"已合并/关闭"类别），主要推进以下方向：

| 方向 | 代表 PR | 进展 |
|---|---|---|
| **文件操作安全性** | [#76447](https://github.com/NousResearch/hermes-agent/pull/76447) | 修复非 UTF-8 文件读写导致的数据损坏与符号链接数据丢失问题（DATA-LOSS 级别） |
| **CLI 引导流程** | [#76437](https://github.com/NousResearch/hermes-agent/pull/76437) | 无配置安装现在正确路由到 Provider Onboarding，避免进入不可用的聊天界面 |
| **Desktop 更新稳定性** | [#76432](https://github.com/NousResearch/hermes-agent/pull/76432) | 修复 Windows 上 venv-blocker 探测失败导致更新流程崩溃的问题 |
| **Teams 插件安全** | [#76438](https://github.com/NousResearch/hermes-agent/pull/76438) | 修复 Teams 插件 import 时泄露 cwd `.env`，破坏 profile secret 隔离 |
| **Setup Wizard 健壮性** | [#76439](https://github.com/NousResearch/hermes-agent/pull/76439) | Wizard 结束时若无可用推理 provider，现在会明确警告而非报告"成功" |
| **文档路径修复** | [#76440](https://github.com/NousResearch/hermes-agent/pull/76440) | `/docs/quickstart` 与 `/docs/installation` 短链接现在正确重定向 |
| **Cron 告警** | [#51790](https://github.com/NousResearch/hermes-agent/pull/51790) | 创建 cron 任务时若 gateway/ticker 未运行则提前警告 |
| **工具日志降噪** | [#62930](https://github.com/NousResearch/hermes-agent/pull/62930) | 未配置的 check_fn 返回 False 时日志级别从 WARNING 降为 DEBUG |
| **任务去重与泄漏修复** | [#76445](https://github.com/NousResearch/hermes-agent/pull/76445) | 修复 read-dedup 在非默认任务上未失效、工作目录 cwd 泄漏问题 |
| **Credential Pool 多账户** | [#54524](https://github.com/NousResearch/hermes-agent/pull/54524) | 支持同一 provider 下多账户的 per-credential base_url 轮转 |
| **MCP 依赖锁定** | [#73476](https://github.com/NousResearch/hermes-agent/pull/73476) | 强制执行 MCP 2026-07-28 迁移所需的依赖版本下限 |
| **Windows Playwright 安装** | [#76303](https://github.com/NousResearch/hermes-agent/pull/76303) | 为 Windows 上的 Playwright 安装添加墙钟超时，防止安装挂起 |
| **进程通知上下文** | [#75719](https://github.com/NousResearch/hermes-agent/pull/75719) | 延迟通知增加 process supersession 上下文，提升可追溯性 |

整体推进：今日合并/关闭的 PR 覆盖了 **安全加固、CLI 体验、Desktop 稳定性、跨平台兼容** 四个关键维度，项目整体向前迈进了约 13 个 PR 的增量。

---

## 4. 社区热点

### 评论最多的 Issues（Top 5）

1. **[#69551](https://github.com/NousResearch/hermes-agent/issues/69551)** — Desktop SSH remote mode 在非默认 profile 下损坏（12 条评论，P2）
   - **诉求分析**：用户期望 profile 切换后 SSH 远程连接仍然可用。当前 token-path 验证基于 `HERMES_HOME` 而客户端硬编码 `~/.hermes/desktop-ssh`，导致多 profile 布局下连接断裂。属于高影响的基础设施兼容性问题。

2. **[#20859](https://github.com/NousResearch/hermes-agent/issues/20859)** — 支持 Mistral 作为 LLM provider（11 条评论，24 👍）
   - **诉求分析**：Mistral 用户基数大且语音模型已集成，LLM 提供方支持是社区最受欢迎的特性请求之一。获得 24 个点赞，说明有明确的用户需求池。

3. **[#76324](https://github.com/NousResearch/hermes-agent/issues/76324)** — Dashboard 错误配置本地 Ollama 模型（3 条评论，P2）
   - **诉求分析**：CLI `hermes gateway setup` 写入的 `config.yaml` 中 model 配置被 Dashboard 错误解析，反映 CLI 与 Dashboard 配置层之间存在不一致。

4. **[#76138](https://github.com/NousResearch/hermes-agent/issues/76138)** — `hermes config set` 将列表值写为标量字符串（3 条评论，P2）
   - **诉求分析**：`hermes config set plugins.enabled [local_model_warning]` 写入的是 `"[local_model_warning]"` 字符串而非 YAML 列表，导致配置解析失败。这是 CLI 工具链的回归性 Bug。

5. **[#69931](https://github.com/NousResearch/hermes-agent/issues/69931)** — 跟踪 MCP 2026-07-28 无状态迁移（3 条评论）
   - **诉求分析**：MCP 协议即将进行自发布以来最大幅度的修订，项目需要提前跟踪并规划迁移路径。

---

## 5. Bug 与稳定性

### P1 — 紧急
- **[#76435](https://github.com/NousResearch/hermes-agent/issues/76435)** — Gateway 重连循环 + Desktop 更新器不可用（Discord bot token 超过 1000 次连接尝试被重置；Desktop 更新打开终端对话框显示 "managed outside..."）
  - 状态：无对应 fix PR，需优先处理。

### P2 — 高严重
- **[#76246](https://github.com/NousResearch/hermes-agent/issues/76246)** — Windows 上 `write_file` 可写入 `/etc` 和 `docker.sock`，敏感路径防护失效（Windows 路径规范化将 POSIX 路径转为反斜杠形式，导致匹配规则绕过）
  - 状态：无对应 fix PR。
- **[#76218](https://github.com/NousResearch/hermes-agent/issues/76218)** — Bash ANSI-C 引用绕过危险命令审批（`$'...'` 编码的 `rm -rf /` 可跳过 hardline 审批）
  - 状态：无对应 fix PR，安全边界问题。
- **[#76324](https://github.com/NousResearch/hermes-agent/issues/76324)** — Dashboard 错误配置 Ollama 模型
  - 状态：无对应 fix PR。
- **[#76138](https://github.com/NousResearch/hermes-agent/issues/76138)** — `config set` 列表值写入标量字符串
  - 状态：无对应 fix PR。
- **[#69031](https://github.com/NousResearch/hermes-agent/issues/69031)** — Gemini Native v1beta 401 Auth 与 400 Invalid Argument 错误
  - 状态：Issue 描述称已找到并修复两个阻塞 Bug，但未标记为已关闭，需确认是否已合入。

### P3 — 中等
- **[#76296](https://github.com/NousResearch/hermes-agent/issues/76296)** — Windows 25H2 上唤醒词静默失败（onnxruntime WinError 1114）
- **[#69444](https://github.com/NousResearch/hermes-agent/issues/69444)** — Telegram 长 Rich Message 无安全截断
- **[#46941](https://github.com/NousResearch/hermes-agent/issues/46941)** — Feishu 等平台上 terminal 命令在 code block 中被截断
- **[#75960](https://github.com/NousResearch/hermes-agent/issues/75960)** — Desktop IME 预编辑文本错位
- **[#76416](https://github.com/NousResearch/hermes-agent/issues/76416)** — WebUI 在 Hostinger VPS 构建失败

### 已有 Fix PR 的 Bug
- [#76447](https://github.com/NousResearch/hermes-agent/pull/76447) — 文件操作非 UTF-8 损坏 & 符号链接数据丢失 ✅
- [#76445](https://github.com/NousResearch/hermes-agent/pull/76445) — read-dedup 未失效 & cwd 泄漏 ✅
- [#76432](https://github.com/NousResearch/hermes-agent/pull/76432) — Desktop venv-blocker 崩溃 ✅
- [#76438](https://github.com/NousResearch/hermes-agent/pull/76438) — Teams .env 泄露 ✅
- [#76437](https://github.com/NousResearch/hermes-agent/pull/76437) — 无配置引导流程 ✅
- [#76439](https://github.com/NousResearch/hermes-agent/pull/76439) — Setup Wizard 无 provider 警告 ✅

---

## 6. 功能请求与路线图信号

### 高关注度功能请求

| Issue | 功能 | 路线图信号 |
|---|---|---|
| [#20859](https://github.com/NousResearch/hermes-agent/issues/20859) | Mistral LLM provider 支持 | 24 👍，社区呼声高；若已有 provider 接入框架，纳入下一版本可能性高 |
| [#69931](https://github.com/NousResearch/hermes-agent/issues/69931) | MCP 2026-07-28 迁移跟踪 | PR [#73476](https://github.com/NousResearch/hermes-agent/pull/73476) 已开始执行依赖锁定，迁移已在进行中 |
| [#73138](https://github.com/NousResearch/hermes-agent/issues/73138) | Quote-to-reply（右键引用回复） | Desktop 端 UX 增强，PR 栈中已有相关铺垫 |
| [#70969](https://github.com/NousResearch/hermes-agent/issues/70969) | Sidebar nav 分组 | Dashboard 侧边栏在 17+ 项时缺乏分组，影响可用性 |
| [#37566](https://github.com/NousResearch/hermes-agent/issues/37566) & [#64790](https://github.com/NousResearch/hermes-agent/issues/64790) | Desktop 字体选择器 | 两个独立请求合并指向同一需求，Desktop 定制化诉求明确 |
| [#74590](https://github.com/NousResearch/hermes-agent/issues/74590) | MacBook Dynamic Island 风格呼吸灯唤醒指示 | macOS 独占 UX 增强 |

### 可能被纳入下一版本的 PR
- [#76230](https://github.com/NousResearch/hermes-agent/pull/76230) — Agent delegation 依赖就绪性展示（最终行为层，依赖前序 PR #76228/#76229）
- [#54524](https://github.com/NousResearch/hermes-agent/pull/54524) — Credential pool per-credential base_url（多账户 same-provider 轮转）
- [#51790](https://github.com/NousResearch/hermes-agent/pull/51790) — Cron 创建时 gateway 状态告警

---

## 7. 用户反馈摘要

### 痛点
- **Profile 隔离不彻底**：[#69551](https://github.com/NousResearch/hermes-agent/issues/69551)、[#74776](https://github.com/NousResearch/hermes-agent/issues/74776)、[#75996](https://github.com/NousResearch/hermes-agent/issues/75996)、[#76423](https://github.com/NousResearch/hermes-agent/issues/76423) 均指向 profile 维度在 SSH、Topic 绑定、State DB 等处的缺失或错误，用户在多 profile/Docker 部署场景下反复遇到数据混淆。
- **Windows 平台稳定性差**：[#76296](https://github.com/NousResearch/hermes-agent/issues/76296)、[#76246](https://github.com/NousResearch/hermes-agent/issues/76246)、[#76218](https://github.com/NousResearch/hermes-agent/issues/76218)、[#76435](https://github.com/NousResearch/hermes-agent/issues/76435) 集中反映 Windows 25H2 上 ONNX Runtime 兼容性、路径安全、更新器等问题。
- **消息平台投递可靠性**：[#46941](https://github.com/NousResearch/hermes-agent/issues/46941)、[#69444](https://github.com/NousResearch/hermes-agent/issues/69444)、[#55180](https://github.com/NousResearch/hermes-agent/issues/55180)、[#21889](https://github.com/NousResearch/hermes-agent/issues/21889) 涉及 Feishu/Discord/Telegram/SimpleX 的消息截断、丢失、清理失败等问题。
- **CLI 配置写入缺陷**：[#76138](https://github.com/NousResearch/hermes-agent/issues/76138) 反映 `config set` 对列表值的处理不正确。

### 满意之处
- 社区对 MCP 协议迁移 [#69931](https://github.com/NousResearch/hermes-agent/issues/69931) 和 Credential Pool 多账户支持 [#54524](https://github.com/NousResearch/hermes-agent/pull/54524) 表现出积极预期。
- Desktop 端定制化需求（字体 [#37566](https://github.com/NousResearch/hermes-agent/issues/37566)、唤醒灯 [#74590](https://github.com/NousResearch/hermes-agent/issues/74590)、引用回复 [#73138](https://github.com/NousResearch/hermes-agent/issues/73138)）显示用户在深度使用 Desktop 产品。

---

## 8. 待处理积压

### 长期未响应、需维护者关注

| Issue/PR | 滞留时长 | 状态 | 建议 |
|---|---|---|---|
| [#20859](https://github.com/NousResearch/hermes-agent/issues/20859) | ~3 个月 | OPEN，24 👍 | Mistral provider 支持需求明确，建议评估是否进入下一里程碑 |
| [#21889](https://github.com/NousResearch/hermes-agent/issues/21889) | ~3 个月 | OPEN | Discord `delete_message` for cleanup_progress 仍未实现 |
| [#25849](https://github.com/NousResearch/hermes-agent/issues/25849) | ~3 个月 | OPEN | EMAIL_ADDRESS env var 与实际账户不一致 |
| [#35236](https://github.com/NousResearch/hermes-agent/pull/35236) | ~2 个月 | OPEN | CDP peer IP 验证安全 PR，需 review 推进 |
| [#38286](https://github.com/NousResearch/hermes-agent/pull/38286) | ~2 个月 | OPEN | Feishu resume 标题脱敏 PR，需合入 |
| [#46057](https://github.com/NousResearch/hermes-agent/pull/46057) | ~1 个月 | OPEN | CLI quick-command shell exec 安全修复 |
| [#52905](https://github.com/NousResearch/hermes-agent/pull/52905) | ~1 个月 | OPEN | 请求调试转储脱敏 PR |
| [#62930](https://github.com/N

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-08-02**
**数据来源：github.com/sipeed/picoclaw**

---

## 1. 今日速览

PicoClaw 项目在过去24小时内保持低至中等活跃度，共记录1条Issue更新和3条PR状态变更，无新版本发布。新增Issue #3203 揭示了Matrix同步模块在网络中断后存在静默死亡的严重稳定性缺陷（7条评论，2个👍），引发社区关注。同时，2个功能增强型PR（Exa搜索、OrcaRouter）处于待合并状态，1个本地化PR（zh-TW）已关闭。项目整体推进节奏平稳，但核心稳定性问题尚未得到维护者响应，建议关注后续修复进展。

---

## 2. 版本发布

**无新版本发布。** 当前最新版本仍为 v0.2.9（Issue #3203 中提及）。

---

## 3. 项目进展

| PR | 状态 | 进展说明 |
|----|------|----------|
| [#3261](https://github.com/sipeed/picoclaw/pull/3261) | ✅ CLOSED | 关闭：Add zh-TW locale and Traditional Chinese translations。推进WebUI及文档的繁体中文本地化体验，使设置流程与频道指引术语保持一致。 |
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | 🔄 OPEN | 待合并：Add native Exa web search provider。新增Exa作为`tools.web`/`web_search`原生提供者，支持`POST /search` API、`X-Api-Key`认证及时间范围过滤（`startPublishedDate`）。 |
| [#3309](https://github.com/sipeed/picoclaw/pull/3309) | 🔄 OPEN | 待合并：feat(providers): add OrcaRouter as an OpenAI-compatible provider。新增OrcaRouter作为一级OpenAI兼容提供者，支持`vendor/model`格式的上游模型寻址，扩展多厂商路由能力。 |

**项目整体向前推进：** 新增2个LLM推理/搜索提供者扩展（Exa、OrcaRouter），增强系统可插拔 provider 架构的生态覆盖；繁体中文本地化PR已关闭，i18n覆盖范围扩大。

---

## 4. 社区热点

### 🔥 最活跃 Issue

**[#3203](https://github.com/sipeed/picoclaw/issues/3203)** — Matrix sync loop has no reconnection logic — silent death after network/server disruption

- **评论数：** 7（今日最多）
- **👍 点赞：** 2
- **标签：** `[stale] [BUG]`
- **诉求分析：** 用户 weissfl 指出 `/sync` 长轮询循环在网络中断或 homeserver 重启后永久停止，且主进程保持存活导致 systemd 的 `Restart=on-failure` 无法触发。该问题直接影响 PicoClaw 作为常驻服务的可靠性，反映出社区对生产环境稳定性的高度关注。标记为 `[stale]` 表明该问题可能长期未获维护者回应。

### 📊 活跃 PR

- [#3299](https://github.com/sipeed/picoclaw/pull/3299) — Exa 搜索提供者，扩展 AI Agent 的实时信息检索能力
- [#3309](https://github.com/sipeed/picoclaw/pull/3309) — OrcaRouter 提供者，引入多厂商模型路由能力

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 是否有 Fix PR |
|----------|-------|------|---------------|
| 🔴 **高** | [#3203](https://github.com/sipeed/picoclaw/issues/3203) | Matrix `/sync` 长轮询循环在网络中断或 homeserver 重启后永久停止（silent death），主进程不退出导致 systemd 无法自动重启服务。 | ❌ 无 |

**评估：** 该 Bug 直接影响服务的自愈能力和可用性，属于生产环境关键路径问题。标记为 `[stale]` 已有较长时间，维护者需优先评估是否已有内部修复计划或确认是否需要社区贡献修复。

---

## 6. 功能请求与路线图信号

| 功能需求 | 来源 | 状态 | 纳入下一版本可能性 |
|----------|------|------|-------------------|
| 繁体中文本地化（zh-TW） | [#3261](https://github.com/sipeed/picoclaw/pull/3261) | ✅ 已关闭 | 高 — 已合入，本地化覆盖扩大 |
| Exa 原生 Web 搜索 | [#3299](https://github.com/sipeed/picoclaw/pull/3299) | 🔄 待合并 | 中高 — 完善 `tools.web` 生态 |
| OrcaRouter OpenAI 兼容路由 | [#3309](https://github.com/sipeed/picoclaw/pull/3309) | 🔄 待合并 | 中 — 扩展 provider 多厂商支持 |
| Matrix 同步重连机制 | [#3203](https://github.com/sipeed/picoclaw/issues/3203) | ❌ 未修复 | 待定 — 需维护者确认优先级 |

**路线图信号：** 项目正积极扩展 LLM provider 生态（Exa、OrcaRouter），同时推进国际化（zh-TW）。稳定性修复（Matrix 重连）尚未进入开发轨道，需关注维护者后续响应。

---

## 7. 用户反馈摘要

从 Issue #3203 的7条评论中提炼：

- **核心痛点：** Matrix 同步模块在网络波动后完全静默失败，无任何重连或错误恢复机制，导致 AI Agent 通道消息收集中断。
- **使用场景：** 用户依赖 PicoClaw 作为常驻服务（systemd 管理），期望服务在短暂网络中断后自动恢复。
- **不满之处：** 主进程"假存活"（实际功能已停止）绕过了 systemd 的自动重启机制，掩盖了故障，用户无法及时感知问题。
- **潜在满意点：** 项目整体架构（provider 扩展、本地化）获得社区积极贡献，反馈功能增强方向明确。

---

## 8. 待处理积压

| 项目 | 类型 | 状态 | 持续时间 | 建议 |
|------|------|------|----------|------|
| [#3203](https://github.com/sipeed/picoclaw/issues/3203) | Bug | OPEN + `[stale]` | ~31天（2026-07-02 创建） | 🔴 **紧急** — 维护者需评估是否已有修复计划，或标记为 `[bug]` 重新激活。若无修复计划，建议社区贡献者介入。 |
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | PR | OPEN | ~7天（2026-07-26 创建） | 待维护者审查合并 |
| [#3309](https://github.com/sipeed/picoclaw/pull/3309) | PR | OPEN | ~1天（2026-08-01 创建） | 待维护者审查合并 |
| [#3261](https://github.com/sipeed/picoclaw/pull/3261) | PR | CLOSED | 已关闭 | 本地化工作已完成 |

**维护者关注提醒：** Issue #3203 标记 `[stale]` 已超过1个月，且涉及核心服务稳定性（Matrix 同步），建议维护者优先响应或明确修复时间线，避免社区信任度下降。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**日期：2026-08-02** | **数据源：GitHub (nanocoai/nanoclaw)**

---

## 1. 今日速览

NanoClaw 在 2026-08-02 保持了较高的开发活跃度：过去 24 小时内共处理 **18 项变更**（含 16 条 PR 更新 + 2 条 Issue 更新），并发布了新版本 **v2.1.54**。整体来看，项目处于功能密集迭代与稳定性修复并行的阶段——iMessage 渠道统一化、Qodo 技能清理、Docker rootless 支持等关键 PR 持续推进；与此同时，setup 流程缺陷、凭证过期静默失败等稳定性问题被社区反馈并修复。项目健康度评估：**活跃度良好（★★★★☆）**，核心团队响应及时，但存在若干长期未关闭的悬挂 PR 需要关注。

---

## 2. 版本发布

### 📦 v2.1.54（Rollup Release）

- **更新范围**：覆盖自 `v2.1.17` 标签以来所有已合并的变更，即 **v2.1.18 → v2.1.54** 之间的全部功能与修复。
- **破坏性变更**：
  - **iMessage 渠道统一**：将原有的分散 iMessage 集成合并为单一 `imessage` 渠道，通过 `/add-imessage` 命令提供两种后端可选：
    - **Local**：本机 `chat.db` 通过 Chat SDK 桥接。
    - **Hosted**：通过 [Photon](https://photon.codes) 原生服务接入。
  - 此变更影响所有依赖旧 iMessage 渠道配置的用户，需重新运行 `/add-imessage` 完成迁移。
- **迁移注意事项**：
  - 用户需确认后端选择（Local vs Hosted），Hosted 模式需额外配置 Photon 账户与 `spectru` 相关参数。
  - 建议在执行升级前备份现有 `chat.db` 或 Photon 配置，以防配置丢失。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 状态 | 内容摘要 |
|---|---|---|
| [#3170](https://github.com/nanocoai/nanoclaw/pull/3170) | ✅ CLOSED | **fix(setup)**：将 setup 分发失败时的辅助提示定向到用户所选的 provider（而非固定推荐 Claude CLI），修复了 Issue #3169 反映的问题。 |
| [#3168](https://github.com/nanocoai/nanoclaw/pull/3168) | ✅ CLOSED | **fix(release)**：修补发布流程中的后合并安全缺口，提升发布流水线可靠性。 |
| [#3167](https://github.com/nanocoai/nanoclaw/pull/3167) | ✅ CLOSED | **feat(credentials)**：新增凭证过期告警机制，解决 Codex/ChatGPT 等 provider 凭证静默过期导致用户无感知的问题。 |
| [#3164](https://github.com/nanocoai/nanoclaw/pull/3164) | ✅ CLOSED | **feat(channels)**：Hosted iMessage（Photon）注册流程完善，以可工作流替代 #2999 中的方案。 |
| [#2999](https://github.com/nanocoai/nanoclaw/pull/2999) | ✅ CLOSED | **feat(channels)**：iMessage 统一为单一 `imessage` 渠道（Local + Hosted 双后端）。 |

### 项目整体推进

- **功能面**：iMessage 渠道统一化已完成从 PR 到发布的全流程，v2.1.54 将此作为核心交付。
- **稳定性面**：setup 分发失败处理、凭证过期告警、发布安全缺口三项修复同步落地，显著提升了生产环境健壮性。
- **清理面**：Qodo 技能（#3172）正在移除流程中，反映项目对"零配置依赖"原则的坚持——不强制用户绑定第三方 SaaS 账户。

---

## 4. 社区热点

### 活跃 Issues

| Issue | 状态 | 摘要 | 链接 |
|---|---|---|---|
| [#3171](https://github.com/nanocoai/nanoclaw/issues/3171) | 🔴 OPEN | 两个内置 qodo 技能依赖 Qodo SaaS 账户，但项目中无任何设置流程，且会拦截正常编码请求。 | [View](https://github.com/nanocoai/nanoclaw/issues/3171) |
| [#3169](https://github.com/nanocoai/nanoclaw/issues/3169) | ⚪ CLOSED | 非 Claude provider 在 setup 失败时仍推荐安装 Claude CLI，造成误导。 | [View](https://github.com/nanocoai/nanoclaw/issues/3169) |

### 活跃 PRs（按更新/关注度）

| PR | 状态 | 摘要 | 链接 |
|---|---|---|---|
| [#3090](https://github.com/nanocoai/nanoclaw/pull/3090) | 🟢 OPEN | **fix(templates)**：为所有顶层 context Markdown 添加前缀修饰。 | [View](https://github.com/nanocoai/nanoclaw/pull/3090) |
| [#3174](https://github.com/nanocoai/nanoclaw/pull/3174) | 🟢 OPEN | **fix(Docker)**：修复 rootless Docker 下 agent 容器不可用问题（两个独立缺陷）。 | [View](https://github.com/nanocoai/nanoclaw/pull/3174) |
| [#3172](https://github.com/nanocoai/nanoclaw/pull/3172) | 🟢 OPEN | **chore(skills)**：移除两个 qodo 技能（与 Issue #3171 呼应）。 | [View](https://github.com/nanocoai/nanoclaw/pull/3172) |
| [#3173](https://github.com/nanocoai/nanoclaw/pull/3173) | 🟢 OPEN | **egress update**：出站规则更新。 | [View](https://github.com/nanocoai/nanoclaw/pull/3173) |
| [#3121](https://github.com/nanocoai/nanoclaw/pull/3121) | 🟢 OPEN | **fix(reaction)**：将反应传递改为尽力而为（best-effort）模式。 | [View](https://github.com/nanocoai/nanoclaw/pull/3121) |

### 热点分析

- **Qodo 技能争议**（#3171 / #3172）：社区用户发现捆绑技能引入了未文档化的第三方依赖，且会劫持正常编码请求。维护者已通过 #3172 推动移除，体现项目"零侵入"设计理念。
- **Rootless Docker 支持**（#3174）：该 PR 揭示了 agent 容器在非特权模式下的两个隐蔽缺陷，反映了项目在容器化部署场景下的覆盖盲区。
- **iMessage 统一化**（#2999 / #3164）：从 PR 到合并再到发布，iMessage 集成是近期最活跃的功能线，社区关注度较高。

---

## 5. Bug 与稳定性

| 严重程度 | 问题描述 | 关联 PR/Issue | 状态 |
|---|---|---|---|
| 🔴 **高** | 凭证过期时无任何告警，仅记录容器被杀日志，用户完全无感知。 | [#3167](https://github.com/nanocoai/nanoclaw/pull/3167) | ✅ 已修复（已合并） |
| 🔴 **高** | Rootless Docker 下 agent 容器完全不可用，两个独立缺陷均隐藏于 docker 组成员中。 | [#3174](https://github.com/nanocoai/nanoclaw/pull/3174) | 🟡 待合并 |
| 🟡 **中** | setup 失败时固定推荐 Claude CLI，无视用户已选 provider。 | [#3169](https://github.com/nanocoai/nanoclaw/issues/3169) → [#3170](https://github.com/nanocoai/nanoclaw/pull/3170) | ✅ 已修复（已合并） |
| 🟡 **中** | `migrate-v2` 调用了已移除的 `insertTask`，导致 ESM 静态导入阶段即抛出 SyntaxError。 | [#3166](https://github.com/nanocoai/nanoclaw/pull/3166) | 🟡 待合并 |
| 🟡 **中** | 模板顶层 context Markdown 缺少前缀，可能导致格式混乱。 | [#3090](https://github.com/nanocoai/nanoclaw/pull/3090) | 🟡 待合并 |
| 🟢 **低** | 反应传递在部分场景下非尽力而为，可能丢失。 | [#3121](https://github.com/nanocoai/nanoclaw/pull/3121) | 🟡 待合并 |
| 🟢 **低** | 重复交付：agent 通过 `send_message` 发送后又重复文本，导致内容双发。 | [#2956](https://github.com/nanocoai/nanoclaw/pull/2956) | 🟡 待合并 |

---

## 6. 功能请求与路线图信号

| 信号来源 | 需求描述 | 对应 PR | 纳入下一版本可能性 |
|---|---|---|---|
| 用户反馈 | iMessage 统一为单一渠道，支持 Local + Hosted 双后端 | [#2999](https://github.com/nanocoai/nanoclaw/pull/2999) → 已发布 | ✅ 已完成 |
| 用户反馈 | Hosted iMessage 需要可工作的注册流程 | [#3164](https://github.com/nanocoai/nanoclaw/pull/3164) → 已合并 | ✅ 已完成 |
| 维护者主动 | 移除 Qodo 等强依赖第三方 SaaS 的技能 | [#3172](https://github.com/nanocoai/nanoclaw/pull/3172) | 🟡 待合并，预计纳入 |
| 维护者主动 | 容器化部署场景增强（rootless Docker） | [#3174](https://github.com/nanocoai/nanoclaw/pull/3174) | 🟡 待合并 |
| 维护者主动 | 凭证过期告警 | [#3167](https://github.com/nanocoai/nanoclaw/pull/3167) | ✅ 已完成 |
| 维护者主动 | 出站规则更新 | [#3173](https://github.com/nanocoai/nanoclaw/pull/3173) | 🟡 待合并 |
| 维护者主动 | 路由器输入加固（safeParseContent + engage_pattern） | [#2801](https://github.com/nanocoai/nanoclaw/pull/2801) | 🟡 待合并 |
| 维护者主动 | 恢复 stale outbound.db journal，分类热 journal poll race | [#2750](https://github.com/nanocoai/nanoclaw/pull/2750) | 🟡 待合并 |
| 维护者主动 | 抑制重复交付 | [#2956](https://github.com/nanocoai/nanoclaw/pull/2956) | 🟡 待合并 |

**路线图信号总结**：下一版本（v2.2.x 或 v2.1.55）预计将重点推进容器部署健壮性、路由器安全加固、Qodo 技能清理、以及出站规则更新。iMessage 统一化已落地，短期不再有该方向的新功能迭代。

---

## 7. 用户反馈摘要

### 痛点

1. **Provider 切换后的 setup 误导**：用户选择非 Claude provider 后，setup 失败仍推荐安装 Claude CLI，甚至触发 Anthropic 登录流程（[#3169](https://github.com/nanocoai/nanoclaw/issues/3169)）。
2. **Qodo 技能干扰正常编码**：两个内置 qodo 技能依赖未设置的 Qodo SaaS 账户，且会劫持正常编码请求，造成"功能存在但不可用"的体验（[#3171](https://github.com/nanocoai/nanoclaw/issues/3171)）。
3. **凭证过期静默失败**：Codex/ChatGPT 凭证过期后，用户仅看到 `Error: Reconnecting...` 和容器被杀日志，无法定位根因（[#3167](https://github.com/nanocoai/nanoclaw/pull/3167)）。
4. **Rootless Docker 部署障碍**：有意将 agent 账户从 docker 组移除的用户无法使用容器化部署，且两个缺陷均隐藏在 docker 组成员中（[#3174](https://github.com/nanocoai/nanoclaw/pull/3174)）。
5. **重复消息交付**：agent 通过 MCP 工具发送消息后重复文本，导致接收端出现重复内容（[#2956](https://github.com/nanocoai/nanoclaw/pull/2956)）。

### 满意之处

- iMessage 统一化大幅简化了渠道配置流程，从多渠道配置简化为单命令 `/add-imessage`。
- Photon Hosted 后端提供了无需本地维护 `chat.db` 的轻量选择。
- 维护者对社区反馈响应迅速（#3169 → #3170 24 小时内关闭）。

---

## 8. 待处理积压

### 长期未响应的重要 Issue/PR

| 编号 | 类型 | 描述 | 悬垂时长 | 风险 |
|---|---|---|---|---|
| [#3174](https://github.com/nanocoai/nanoclaw/pull/3174) | PR | Rootless Docker 支持，修复 agent 容器两个隐蔽缺陷 | 新建（2026-08-01） | 🟡 中 |
| [#3172](https://github.com/nanocoai/nanoclaw/pull/3172) | PR | 移除两个 qodo 技能 | 新建（2026-08-01） | 🟡 中 |
| [#3173](https://github.com/nanocoai/nanoclaw/pull/3173) | PR | Egress 更新 | 新建（2026-08-01） | 🟢 低 |
| [#3166](https://github.com/nanocoai/nanoclaw/pull/3166) | PR | 修复 migrate-v2 中 `insertTask` → `insertTaskRow` 调用错误 | 新建（2026-08-01） | 🟡 中 |
| [#3165](https://github.com/nanocoai/nanoclaw/pull/3165) | PR | Codex/copilot 相关变更 | 新建（2026-08-01） | 🟢 低 |
| [#3090](https://github.com/nanocoai/nanoclaw/pull/3090) | PR | 模板顶层 context Markdown 前缀修复 | 创建于 2026-07-19（14 天） | 🟡 中 |
| [#2956](https://github.com/nanocoai/nanoclaw/pull/2956) | PR | 抑制重复交付 | 创建于 2026-07-05（28 天） | 🟡 中 |
| [#2801](https://github.com/nanocoai/nanoclaw/pull/2801) | PR | 路由器输入加固 | 创建于 2026-06-17（46 天） | 🔴 高 |
| [#2750](https://github.com/nanocoai/nanoclaw/pull/2750) | PR | 恢复 stale outbound.db journal + 热 journal poll race 分类 | 创建于 2026-06-12（51 天） | 🔴 高 |
| [#3046](https://github.com/nanocoai/nanoclaw/pull/3046) | PR | docs(pairing)：对齐 init-first-agent 与当前 status blocks | 创建于 2026-07-14（19 天） | 🟢 低 |
| [#3121](https://github.com/nanocoai/nanoclaw/pull/3121) | PR | 反应传递改为尽力而为 | 创建于 2026-07-23（10 天） | 🟢 低 |
| [#3171](https://github.com/nanocoai/nanoclaw/issues/3171) | Issue | Qodo 技能依赖未设置的 SaaS 账户 | 新建（2026-08-01） | 🟡 中 |

### 维护者重点关注建议

1. **优先合并** [#2750](https://github.com/nanocoai/nanoclaw/pull/2750) 与 [#2801](https://github.com/nanocoai/nanoclaw/pull/2801)：两者悬垂超过 45 天，涉及数据恢复与安全加固，对生产环境影响较大。
2. **关注

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**日期：2026-08-02**
**数据窗口：2026-08-01 00:00 – 2026-08-02 00:00 UTC**
**仓库：[nearai/ironclaw](https://github.com/nearai/ironclaw)**

---

## 1. 今日速览

IronClaw 在过去 24 小时内保持高度活跃的工程节奏，共处理 49 条 Issues 与 PR 更新，其中 17 条为新开或持续活跃 Issues，29 条 PR 更新中 17 条待合并。项目整体处于 **Wave 2 重构冲刺**与 **pi-harness 采纳计划**双线并行的阶段，核心工作集中在 contracts 端口反转、extension_host 拆分、prompt cache 稳定性四个方向。CI gates 与 reborn 测试套件的稳定性问题持续获得关注，但尚未阻塞主线合并。**项目健康度评估：活跃度高，方向明确，无紧急阻塞性回归。**

---

## 2. 版本发布

**今日无新版本发布。** 最近一次发布记录在 PR #5598 中，涉及 `ironclaw_common` 0.4.2→0.5.0（含 API breaking changes）、`ironclaw_safety` 0.2.2→0.2.3、`ironclaw_skills` 0.3.0→0.4.0（API breaking changes）。如需了解发布详情，可查看 [PR #5598](https://github.com/nearai/ironclaw/pull/5598)。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 状态 | 主题 | 影响 |
|---|---|---|---|
| [#6998](https://github.com/nearai/ironclaw/pull/6998) | CLOSED | contracts: extension_host 产品端口反转至 product_contracts (WS2.1) | 架构层解耦，extension_host 不再依赖 ironclaw_product 内部接口 |
| [#6996](https://github.com/nearai/ironclaw/pull/6996) | CLOSED | CI gates: 关闭 #6963，完成路径键控 CI 门清单驱动发现 | 消除 8 个 CI 门缺陷中的 6 个静默缺陷，fail-closed 覆盖剩余门 |
| [#6995](https://github.com/nearai/ironclaw/pull/6995) | CLOSED | docs: Wave 1 真相审计，对齐决策记录与已合并事实 | 文档可信度修复，覆盖 WS1.1–WS1.7 全部 7 个 PR |
| [#6975](https://github.com/nearai/ironclaw/pull/6975) | (已合并) | WS1.2: 循环/扩展/产品契约提取 | 证据铸造不可伪造，依赖关系中性化 |
| [#6977](https://github.com/nearai/ironclaw/pull/6977) | (已合并) | WS1.3: reborn-tests.yml 修复 | 修复 workflow_dispatch 运行中 critical-mutation 跳过但被禁止的结构性失败 |

**整体推进评估：** Wave 2 已完成 3 个 slot（WS2.1 #6998、WS2.4 #7003 待合并、WS5 #7002/#7005 待合并），合约层重构进入中段。pi-harness 采纳计划（P0 #1–#4）已有 2 个 PR 合并或待合并（#6997、#7001），缓存稳定性基线正在建立。

---

## 4. 社区热点

### 评论数最多的条目

1. **[#6963](https://github.com/nearai/ironclaw/issues/6963)** — 7 条评论，CLOSED
   - **诉求分析：** 路径键控 CI 门在 #6946 重写中遗漏了 8 个缺陷（6 个静默 + 2 个显式）。作者 BenKurrek 推动清单式追踪而非单行 checklist，迫使 CI gates PR 必须显式处理每个门。这是典型的"CI 可靠性焦虑"驱动——维护者对 CI 门沉默失败零容忍。

2. **[#6974](https://github.com/nearai/ironclaw/issues/6974)** — 2 条评论，OPEN
   - **诉求分析：** libSQL 在工具密集型压力场景下 p95 延迟 37–135s 远超 2.5s 阈值。作者 serrrfirat 从 #6973（Postgres 容量恢复）拆分而来，表明性能问题是跨存储后端的系统性瓶颈，而非单一引擎问题。

3. **[#6973](https://github.com/nearai/ironclaw/pull/6973)** — 待合并，XL 尺寸
   - **诉求分析：** Postgres API 容量从 p95 3.74s 退化至 12.0s（ops/sec 从 6.86 降至 2.57），`send_message` p95 从 275ms 飙升至 4.78s。作者 serrrfirat 定位到 #6696（row-native process journal）引入的回归，修复方案已就绪但需审核。

### 新增高关注度 Issue

- **[#7009](https://github.com/nearai/ironclaw/issues/7009)** — 新增 OrcaRouter 作为内置 LLM provider。用户 jinhaosong-source 指出 providers.json 已覆盖 OpenRouter/Together/Fireworks 等多入口网关，OrcaRouter 缺失导致用户只能通过非标准方式接入，反映**多 provider 网关覆盖的完整性诉求**。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重度 | Issue/PR | 描述 | 是否有 Fix PR |
|---|---|---|---|
| **P0 (Critical)** | [#6988](https://github.com/nearai/ironclaw/issues/6988) | Compaction 上下文预算硬编码 128k，未根据实际模型窗口动态调整 | 否 |
| **P0 (Critical)** | [#6984](https://github.com/nearai/ironclaw/issues/6984) | Anthropic cache_control 断点缺失，rig adapter 与 OAuth transport 依赖自动缓存 | PR [#6997](https://github.com/nearai/ironclaw/pull/6997) 待合并 |
| **P1 (High)** | [#6989](https://github.com/nearai/ironclaw/issues/6989) | ModelWorkRequest 从 content_ref 字符串长度估算 token，而非实际引用内容 | 否 |
| **P1 (High)** | [#6985](https://github.com/nearai/ironclaw/issues/6985) | Prompt 前缀在每次模型调用时被重建，nudges/timestamp/retrieval 导致缓存失效 | PR [#7001](https://github.com/nearai/ironclaw/pull/7001) 待合并 |
| **P1 (High)** | [#6986](https://github.com/nearai/ironclaw/issues/6986) | 工具数组 mid-run promotion 破坏 byte-identical 前缀缓存不变量 | PR [#6986](https://github.com/nearai/ironclaw/issues/6986) 对应修复中 |
| **P2 (Medium)** | [#7006](https://github.com/nearai/ironclaw/issues/7006) | Changed-coverage gate 对 steering-queue 的 ~180 行错误路径仅覆盖 crate-tier，无集成故障注入 | 否 |
| **P2 (Medium)** | [#6974](https://github.com/nearai/ironclaw/issues/6974) | libSQL 工具密集型场景 p95 37–135s，远超 2.5s 阈值 | 否 |
| **P2 (Medium)** | [#6990](https://github.com/nearai/ironclaw/issues/6990) | Compaction 摘要推理可能污染 prompt cache 或 session affinity | 否 |
| **P3 (Low)** | [#7011](https://github.com/nearai/ironclaw/issues/7011) | extension_manager 拆分后遗留 5 项发现（false WriteFilesystem 效果、未测试 lock predicate 等） | PR [#7003](https://github.com/nearai/ironclaw/pull/7003) 待合并 |
| **P3 (Low)** | [#6903](https://github.com/nearai/ironclaw/issues/6903) | Admin 用户列表无法加载超过第一页（已 CLOSED） | 已修复 |

### 稳定性观察

- **CI 稳定性：** #6963 的 8 个路径键控 CI 门缺陷已通过 #6996 关闭，但 #6978 揭示 reborn-tests.yml 在 workflow_dispatch 下仍存在结构性失败（critical-mutation 跳过但被禁止），需进一步修复。
- **回归风险：** #6973 记录的 Postgres 容量退化（p95 12.0s vs 3.74s）是过去 24 小时内最显著的性能回归，已由作者 serrrfirat 提交修复 PR。

---

## 6. 功能请求与路线图信号

### 用户提出的新功能需求

| 需求 | 来源 | 路线图信号 | 纳入下一版本可能性 |
|---|---|---|---|
| **OrcaRouter 作为内置 LLM provider** | [#7009](https://github.com/nearai/ironclaw/issues/7009) (jinhaosong-source) | providers.json 已覆盖 9 个网关，OrcaRouter 是明显缺失项 | **高** — 纯配置添加，无架构影响 |
| **`hub` 作为 ironhub CLI 别名** | [#6983](https://github.com/nearai/ironclaw/issues/6983) (sergeiest) | 用户反馈文档兼容性需求 | **中** — 需评估 CLI 命名规范 |
| **OOBE automation-tasks 后端连线** | [#6993](https://github.com/nearai/ironclaw/issues/6993) (rdisandro) | UI 原型已落地（#6994），后端是自然延伸 | **中高** — 取决于 Wave 2 重构进度 |
| **扩展管理器拆分** | [#7011](https://github.com/nearai/ironclaw/issues/7011) | WS2.4 的一部分，已在 #7003 中实施 | **已纳入** — 重构而非新功能 |

### 路线图信号总结

- **Wave 2 重构**（合约层解耦 + 扩展管理拆分）正按 slot 顺序推进，预计 3–5 个 PR 合并后完成。
- **pi-harness 采纳计划**（P0–P1）持续推进，缓存稳定性是 2026 下半年的核心性能目标。
- **OrcaRouter** 的加入将使 LLM provider 覆盖达到 10 个，符合"多入口网关"战略。

---

## 7. 用户反馈摘要

### 真实痛点

1. **CI 门沉默失败** — #6963 暴露出路径键控 CI 门在 PR 重写中遗漏缺陷时缺乏有效追踪机制。用户/维护者对"清单式弱追踪"不满，推动建立 fail-closed 的 CI 治理模型。

2. **LLM 提供商覆盖不完整** — #7009 反映 OrcaRouter 等新兴 provider 缺失，迫使社区成员使用非标准接入方式，影响开箱体验。

3. **Postgres 性能回归** — #6973 记录的 p95 从 3.74s 退化至 12.0s，直接影响 hosted single-tenant API 的可用性 SLA。

4. **Prompt 缓存不稳定性** — #6985/#6984/#6986/#6987 共同揭示一个系统性问题：prompt 前缀因 nudges、timestamp、tool array 变化而持续失效，导致缓存命中率低下，增加推理成本。

5. **CLI 别名缺失** — #6983 指出 `ironhub` 缺少 `hub` 别名，影响文档一致性和用户记忆成本。

### 满意之处

- **架构重构透明度** — Wave 1 真相审计（#6995）和 Wave 2 合约层解耦（#6998、#7000、#7003）展示了清晰的阶段性推进，维护者对重构节奏的掌控度高。
- **测试覆盖意识** — #6761（generic outbound registration 回归测试）和 #6987（cache pinning 字节级不变测试）体现团队对回归防护的重视。

---

## 8. 待处理积压

### 长期未响应的重要 Issue

| Issue | 状态 | 等待时间 | 风险 |
|---|---|---|---|
| [#6974](https://github.com/nearai/ironclaw/issues/6974) | OPEN | 2 天 | libSQL 性能瓶颈未修复，影响 nightly 套件通过率 |
| [#6993](https://github.com/nearai/ironclaw/issues/6993) | OPEN | 1 天 | OOBE automation-tasks 后端连线阻塞 UI 原型落地 |
| [#7008](https://github.com/nearai/ironclaw/issues/7008) | OPEN | 1 天 | product_wire.rs 超过 1,500 行 large_file 阈值，需拆分但涉及架构决策 |
| [#7010](https://github.com/nearai/ironclaw/issues/7010) | OPEN | 1 天 | attachments widened 行无法关闭，需架构决策（LoopAttachmentReadPort 重定位） |
| [#6999](https://github.com/nearai/ironclaw/issues/6999) | OPEN | 1 天 | reborn_dependency_boundaries 的 server-lifecycle 规则未覆盖 WebChat v2 路由 |
| [#7009](https://github.com/nearai/ironclaw/issues/7009) | OPEN | 1 天 | OrcaRouter provider 添加缺失，影响多入口网关完整性 |

### 长期未合并的重要 PR

| PR | 状态 | 等待时间 | 风险 |
|---|---|---|---|
| [#6780](https://github.com/nearai/ironclaw/pull/6780) | OPEN | 5 天 | IronHub 注册/安装网关 + 私有 manifest source，功能完整但需审核 |
| [#5981](https://github.com/nearai/ironclaw/pull/5981) | OPEN | 22 天 | Queued-message steering 前进移植，turn-boundary races 已修复但长期未合 |
| [#5982](https://github.com/nearai/ironclaw/pull/5982) | OPEN | 22 天 | Budget approval-as-blocked-gate，依赖 #5981 合并 |
| [#7001](https://github.com/nearai/ironclaw/pull/7001) | OPEN | 1 天 | 保持缓存系统前缀字节稳定，P0 #2 的关键修复 |
| [#6997](https://github.com/nearai/ironclaw/pull/6997) | OPEN | 1 天 | Anthropic cache_control 断点，P0 #1 的关键修复 |
| [#7005](https://github.com/nearai/ironclaw/pull/7005) | OPEN | 1 天 | WS5 conversations/threads 命名陷阱修复 + attachments widening |
| [#7003](https://github.com/nearai/ironclaw/pull/7003) | OPEN | 1 天 | extension_manager 拆分，WS2.4 核心重构 |
| [#7007](https://github.com/nearai/ironclaw/pull/7007) | OPEN | 1 天 | Merge queue 失败时向 live-canary Slack 告警，CI 可观测性增强 |

### 维护者关注建议

1. **优先合并 P0 pi-harness PR**（#6997、#7001）以锁定缓存稳定性基线。
2. **关注 #6973 修复审核** — Postgres 容量退化影响生产环境 SLA。
3. **推进 Wave 2 剩余 slot**（#7003、#7004、#7005），确保合约层解耦按计划完成。
4. **评估 #6978 的 reborn-tests.yml 结构性失败** — CI 治理完整性问题。
5. **处理长期积压的 #6780**（5 天）和 #5981/#5982（22 天），避免技术债务累积。

---

**报告生成时间：** 2026-08-02 | **数据来源：** GitHub API (nearai/ironclaw) | **分析工具：** 开源项目分析师视角

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
**日期：2026-08-02** | 数据来源：github.com/netease-youdao/LobsterAI

---

## 1. 今日速览

LobsterAI 项目今日整体活跃度中等偏低。24 小时内共处理 7 条 Issue 更新（1 新开、6 关闭）和 2 条 PR 更新（均为待合并状态），无新版本发布。6 条 Issue 被标记为 `[stale]` 后关闭，表明维护团队正在积极清理长期积压的历史问题。唯一新开的 Issue #1223 涉及 i18n 硬编码与 Agent 弹窗交互缺陷，已对应 PR #1224 进入修复流程。PR #2358 持续推进会话重命名失败反馈功能。整体看，项目处于稳定维护期，新功能增量较少，重心偏向质量修复与国际化完善。

---

## 2. 版本发布

**无新版本发布。** 跳过此部分。

---

## 3. 项目进展

今日无 PR 被合并或关闭，项目整体功能推进处于暂停状态。两项待合并 PR 均处于开放等待维护者审核阶段：

- **PR #1224**（[链接](https://github.com/netease-youdao/LobsterAI/pull/1224)）：修复 i18n 硬编码、Agent 弹窗 Escape 键支持及删除防重复点击，已关联并关闭 Issue #1223，完成后将提升英文用户的提示词体验与 Agent 操作容错性。
- **PR #2358**（[链接](https://github.com/netease-youdao/LobsterAI/pull/2358)）：在会话重命名失败时展示本地化反馈提示，修复 Issue #670 描述的静默失败问题，提升用户对操作结果的感知。

两项 PR 均自创建以来已开放超过 30 天（#2358 自 2026-07-18），需关注审核进度。

---

## 4. 社区热点

**今日最活跃 Issue：#1223**（[链接](https://github.com/netease-youdao/LobsterAI/issues/1223)）
- 作者：MaoQianTu | 👍：0 | 评论：1
- 诉求分析：用户同时也是贡献者，提出三个相关的 UX/i18n 问题，核心诉求是提升多语言场景下的产品一致性与操作可逆性。硬编码中文标签导致英文用户提示词混入中文，违反项目 `AGENTS.md` 国际化规范；Agent 弹窗缺少 Escape 键关闭和删除防重复点击保护，属于典型的桌面端交互缺陷。该 Issue 已由作者自行提交 PR #1224 修复，体现了社区参与度。

**其他关闭 Issue 热点：**
- **#1293**（[链接](https://github.com/netease-youdao/LobsterAI/issues/1293)）：自定义 Studio HTTP 的 MCP 工具无法在 OpenClaw 引擎中调用，仅 SSE 协议可用——反映 MCP 协议支持存在协议层兼容缺口。
- **#1296**（[链接](https://github.com/netease-youdao/LobsterAI/issues/1296)）：上传 3MB 长图解析导致页面报错且新任务持续不可用——涉及大文件处理的内存或超时边界问题。
- **#1302**（[链接](https://github.com/netease-youdao/LobsterAI/issues/1302)）：为代码块添加行号显示切换按钮——开发者对代码阅读体验的精细化需求。

---

## 5. Bug 与稳定性

按严重程度排列（高 → 低）：

| 级别 | Issue | 描述 | 是否有 Fix PR |
|------|-------|------|---------------|
| 🔴 高 | [#1296](https://github.com/netease-youdao/LobsterAI/issues/1296) | 上传 3MB 长图后页面报错，新任务持续不可用，整体功能瘫痪 | ❌ 无 |
| 🔴 高 | [#1293](https://github.com/netease-youdao/LobsterAI/issues/1293) | 自定义 HTTP MCP 无法在 OpenClaw 引擎使用，仅 SSE 可用 | ❌ 无 |
| 🟡 中 | [#1298](https://github.com/netease-youdao/LobsterAI/issues/1298) | 短输入（两个字）即报"超出模型限制"，疑似前端输入校验与后端限制不一致 | ❌ 无 |
| 🟡 中 | [#1307](https://github.com/netease-youdao/LobsterAI/issues/1307) | 关闭模型配置编辑面板后，切换其他 Provider 面板变为只读，输入框禁用 | ❌ 无 |
| 🟢 低 | [#1305](https://github.com/netease-youdao/LobsterAI/issues/1305) | 定时任务成功后删除，历史记录标题展示错误 | ❌ 无 |

> **注**：以上所有 Bug 均已被标记 `[stale]` 关闭，但均无对应 Fix PR 合并，说明关闭原因为维护清理而非实际修复，**建议维护者重新评估是否真正解决**。

---

## 6. 功能请求与路线图信号

- **代码块行号显示**（[#1302](https://github.com/netease-youdao/LobsterAI/issues/1302)）：开发者社区对代码阅读体验有明确需求，要求支持行号切换按钮，利用 `react-syntax-highlighter` 的 `showLineNumbers` 属性实现。该需求描述详细、方案具体（有语言标识代码块在工具栏加开关，无语言标识的通过自定义组件实现），具备较高的可纳入下一版本的可能性。
- **会话重命名失败反馈**（[#670](https://github.com/netease-youdao/LobsterAI/issues/670)，PR [#2358](https://github.com/netease-youdao/LobsterAI/pull/2358)）：已有 PR 待合并，一旦合并将补齐会话操作的反馈闭环。
- **MCP 协议兼容扩展**（[#1293](https://github.com/netease-youdao/LobsterAI/issues/1293)）：用户期望 HTTP 协议的 MCP 工具也能被 OpenClaw 引擎调用，反映 MCP 支持范围有扩展需求。

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实痛点：

1. **MCP 工具协议支持不完整**（#1293）：用户自定义的 HTTP MCP 工具无法被引擎识别，仅 SSE 协议可用，导致自定义工具链断裂。
2. **大文件处理存在隐性边界**（#1296）：3MB 图片即可触发页面级报错且影响后续任务，说明图片解析模块缺乏有效的错误隔离与恢复机制。
3. **输入校验逻辑不一致**（#1298）：极短输入（两个字）被判定为超限，与用户对"模型限制"的常识认知相悖，疑似前端字数统计与后端 token 限制未对齐。
4. **UI 状态管理存在残留缺陷**（#1307）：编辑面板关闭后状态未正确重置，导致后续操作被意外禁用，影响工作流连续性。
5. **多语言体验不一致**（#1223）：硬编码中文混入英文用户提示词，违反国际化规范，影响非中文用户的产品信任度。

**满意之处**：用户愿意主动提交 PR 修复问题（如 #1223 由 Issue 作者自行提交 PR），社区参与度尚可。

---

## 8. 待处理积压

### 长期未响应的重要 Issue：

| Issue | 状态 | 滞留时长 | 建议 |
|-------|------|----------|------|
| [#1223](https://github.com/netease-youdao/LobsterAI/issues/1223) | OPEN | 自 2026-04-01 起 | 已有 PR #1224 待合并，建议尽快审核合并 |
| [#1293](https://github.com/netease-youdao/LobsterAI/issues/1293) | CLOSED (stale) | 自 2026-04-02 起 | 标记为 stale 但未修复，MCP 协议兼容问题仍存在 |
| [#1296](https://github.com/netease-youdao/LobsterAI/issues/1296) | CLOSED (stale) | 自 2026-04-02 起 | 大文件处理崩溃问题未根本解决 |
| [#1298](https://github.com/netease-youdao/LobsterAI/issues/1298) | CLOSED (stale) | 自 2026-04-02 起 | 输入校验逻辑异常未修复 |
| [#1307](https://github.com/netease-youdao/LobsterAI/issues/1307) | CLOSED (stale) | 自 2026-04-02 起 | UI 状态管理缺陷未修复 |

### 长期未合并的 PR：

| PR | 状态 | 滞留时长 | 建议 |
|----|------|----------|------|
| [#1224](https://github.com/netease-youdao/LobsterAI/pull/1224) | OPEN | 自 2026-04-01 起 | 修复 i18n 硬编码、Escape 键、防重复点击，优先级高，建议尽快合并 |
| [#2358](https://github.com/netease-youdao/LobsterAI/pull/2358) | OPEN | 自 2026-07-18 起 | 会话重命名失败反馈，滞留约 2 周，建议审核合并 |

> ⚠️ **维护者重点关注**：多个被标记 stale 关闭的 Issue 实际并未修复，仅是被归档。建议在后续迭代中重新打开或确认修复状态，避免用户重复反馈。同时，PR #1224 已开放超过 4 个月未合并，建议维护者安排审核。

---

**项目健康度评估**：⭐⭐⭐☆（3.5/5）
- **优势**：维护团队持续清理 stale 问题，社区有贡献者主动提交 PR。
- **风险**：多个 Bug 仅被标记 stale 关闭而未实际修复；PR 合并周期过长；新功能增量较少。
- **建议**：优先合并 #1224 和 #2358，重新评估被 stale 关闭的 Bug 是否需要真正修复。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报

> **报告日期**：2026-08-02 | **数据窗口**：2026-08-01 00:00 ~ 2026-08-02 00:00（UTC）
> **项目**：[moltis-org/moltis](https://github.com/moltis-org/moltis)

---

## 1. 今日速览

过去 24 小时内，Moltis 项目整体处于**低活跃度**状态：Issues 板块无新增或关闭记录，PR 板块共 4 条更新（其中 1 条待合并、3 条已合并/关闭），无新版本发布。唯一处于 OPEN 状态的 PR #1182 聚焦于核心会话生命周期管理（允许删除和归档 main 会话），属于功能完善类变更；其余 3 条 PR 已于今日完成关闭/合并，涉及可观测性建设、权限隔离和 Nostr 协议扩展。项目整体推进稳健，但社区互动与版本迭代节奏较为平缓。

---

## 2. 版本发布

**今日无新版本发布。** 暂无破坏性变更或迁移注意事项需要说明。

---

## 3. 项目进展

| PR | 状态 | 核心推进内容 |
|---|---|---|
| [#1182](https://github.com/moltis-org/moltis/pull/1182) | **OPEN** | 移除 `main` 会话的删除/归档保护限制，使 `main` 会话与普通会话享有同等生命周期管理能力。保留当前活跃频道会话的归档限制及 `sessions.clear_all` 对 main/channel-bundle 的保护策略。 |
| [#1174](https://github.com/moltis-org/moltis/pull/1174) | CLOSED (merged) | 新增后端无关的 Agent 可观测性基础设施，支持 Langfuse v4 导出、OTLP 后端、端到端反应式反馈采集，覆盖流式/非流式调用、Provider 故障转移归因、缓存感知 Token 用量统计及推理链路记录。 |
| [#1170](https://github.com/moltis-org/moltis/pull/1170) | CLOSED (merged) | 将 `/sh` 命令及特权工具访问从通用 Access Allowlist 中解耦，引入独立的 per-account `operators` 列表，并在命令回调、队列重放、聊天执行、外部调用等全链路强制执行该边界。 |
| [#1168](https://github.com/moltis-org/moltis/pull/1168) | CLOSED (merged) | 为 Buzz 频道新增 NIP-29 群聊支持，基于 NIP-42 认证连接，使 `moltis-nostr` 模块从仅支持单聊扩展至群聊场景。 |

**整体评估**：今日共推进 4 项 PR，其中 3 项已合并/关闭，1 项待审核。项目在**可观测性**、**权限安全**、**协议扩展**三个维度同步前进，功能完整性持续增强。

---

## 4. 社区热点

过去 24 小时内无 Issues 产生，PR 评论数均为 `undefined`（即无公开评论互动），因此**暂无明确的社区讨论热点**。所有 PR 均由核心贡献者 `penso` 和 `shixi-li` 主导，未触发外部讨论。建议关注 #1182 的审核进展，作为今日唯一的社区可互动节点。

- 🔗 [#1182](https://github.com/moltis-org/moltis/pull/1182) — 唯一待合并 PR，当前无评论反馈。

---

## 5. Bug 与稳定性

| 等级 | 描述 | 关联 PR/Issue | 状态 |
|---|---|---|---|
| — | 今日无 Bug 报告、无崩溃或回归问题记录。 | — | — |

项目稳定性层面今日无新增风险信号。

---

## 6. 功能请求与路线图信号

| 信号来源 | 内容 | 路线图判断 |
|---|---|---|
| [#1174](https://github.com/moltis-org/moltis/pull/1174) | 后端无关的可观测性与反馈采集基础设施 | 已完成合并，为后续 Agent 行为分析、用户满意度度量奠定基础，**可能纳入下一正式版本的 v0.x 能力矩阵**。 |
| [#1170](https://github.com/moltis-org/moltis/pull/1170) | per-account operators 权限隔离 | 已完成合并，权限模型从粗粒度 Access Allowlist 演进至细粒度操作者列表，**是安全加固路线图的关键一步**。 |
| [#1168](https://github.com/moltis-org/moltis/pull/1168) | NIP-29 群聊支持 | 已完成合并，Buzz 工作区集成能力落地，**为 Nostr 生态下的协作场景开辟新用例**。 |
| [#1182](https://github.com/moltis-org/moltis/pull/1182) | Main 会话删除/归档 | 待合并，若审核通过将补全会话生命周期管理能力，**可能进入下一版本的功能清单**。 |

---

## 7. 用户反馈摘要

今日无 Issues 记录，**无直接用户反馈可供提炼**。PR 摘要中可间接推断的用户/开发者诉求如下：

- **运维可观测性诉求强烈**：#1174 引入的 Langfuse v4 + OTLP 导出表明团队与用户对 Agent 调用链路透明度、Token 用量审计、推理过程追溯有明确需求。
- **安全边界意识提升**：#1170 将特权操作与普通访问解耦，反映出用户对 `/sh` 等命令被滥用的风险担忧。
- **协作场景扩展**：#1168 对 Buzz/NIP-29 的支持说明 Nostr 生态用户对群组协作有真实使用场景。
- **会话管理灵活性**：#1182 允许删除/归档 main 会话，回应了此前 #1132 中用户关于 main 会话"不可清理"的长期痛点。

---

## 8. 待处理积压

| 类型 | 条目 | 状态 | 提醒 |
|---|---|---|---|
| PR | [#1182](https://github.com/moltis-org/moltis/pull/1182) — fix(sessions): allow deleting and archiving the main session | **OPEN**（创建于 2026-08-01，待合并） | 距创建仅 1 天，审核窗口较短；建议维护者尽快审核，避免阻塞会话生命周期功能的闭环。 |
| Issue | 无 | — | 当前 Issues 积压为 0，Issue 板块健康。 |

**积压评估**：整体积压水平**极低**。唯一待处理项为 #1182，优先级中等，不构成阻塞风险。建议维护者保持对 PR 审核节奏的关注，避免待合并项长期滞留。

---

> **数据来源**：[github.com/moltis-org/moltis](https://github.com/moltis-org/moltis) · 报告生成时间 2026-08-02
> **健康度自评**：项目推进有序，核心功能持续完善；社区互动与 Issue 活跃度偏低，建议后续关注外部参与度提升。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报

**日期：2026-08-02** | **数据来源：github.com/agentscope-ai/CoPaw**

---

## 1. 今日速览

CoPaw (QwenPaw) 项目在过去 24 小时内保持中高活跃度：共新增/更新 14 条 Issue、12 条 PR 更新（11 条待合并、1 条已合并/关闭），无新版本发布。社区贡献者活跃，BlackBox-Labs 团队集中提交了 3 处修复 PR，覆盖空模型响应、自动压缩记忆、上下文重建等核心链路；同时首位外部贡献者（cocoakekeyu、namphamdev、dl-g2026 等）首次提交 PR 并被接收，说明贡献者门槛友好。项目整体处于功能迭代与稳定性修复并行的阶段。

---

## 2. 版本发布

**无新版本发布。** 当前稳定版本为 QwenPaw 2.0.1。需注意已有 Issue #6612 报告 2.0.1 与 agentscope 2.0.4.post1 存在兼容性问题（proactive 崩溃、tool-permission deadlock），建议维护者在发布新版本前确认依赖锁定。

---

## 3. 项目进展

| PR | 状态 | 内容 | 影响 |
|---|---|---|---|
| [#6630](https://github.com/agentscope-ai/QwenPaw/pull/6630) | 待合并 | 修复空模型响应静默失败，向用户报告错误 | 提升长会话中的错误可见性 |
| [#6629](https://github.com/agentscope-ai/QwenPaw/pull/6629) | 待合并 | 修复 scroll 自动压缩未触发 `summarize_when_compact` 记忆流程 | 修复记忆系统的核心链路 |
| [#6628](https://github.com/agentscope-ai/QwenPaw/pull/6628) | 待合并 | 修复 scroll 压缩占位符使用 user role 导致 DeepSeek 400 错误 | 修复多模型兼容性 |
| [#6598](https://github.com/agentscope-ai/QwenPaw/pull/6598) | 已关闭 | 修复插件来源 skill 在 reconcile 时 tag 丢失 | 提升插件系统稳定性 |
| [#6623](https://github.com/agentscope-ai/QwenPaw/pull/6623) | 待合并 | 修复 ACP 通知与 prompt 竞争导致文本丢失 | 修复 ACP 子系统 |
| [#6622](https://github.com/agentscope-ai/QwenPaw/pull/6622) | 待合并 | 新增 OrcaRouter 内置 provider | 降低模型接入门槛 |
| [#6620](https://github.com/agentscope-ai/QwenPaw/pull/6620) | 待合并 | 修复 Gemini `extra_content` 透传导致 crash | 修复 Gemini 流式输出 |
| [#6618](https://github.com/agentscope-ai/QwenPaw/pull/6618) | 待合并 | 移除 session 列表强制 UTC 时间归一化 | 修复时区显示问题 |
| [#5490](https://github.com/agentscope-ai/QwenPaw/pull/5490) | 待合并 | 控制台图片内联展示 + gallery 导航 | 显著提升 UX |
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | 待合并 | 统一 provider 发现、模型元数据、路由与 agent 控制 | 架构级重构 |

**整体推进**：当日共 10 个 PR 推进，其中 3 个为 bugfix、2 个为功能增强、5 个为 provider/兼容性改进，项目向前迈进了约 1 个迭代周期的修复量。

---

## 4. 社区热点

- **[#6588](https://github.com/agentscope-ai/QwenPaw/issues/6588)**（4 评论）：`spawn_subagent` 单任务模式下 `batch` 被暴露为必填字段，导致 schema 校验失败。用户诉求：单子代理创建应真正支持 `batch=None`。
- **[#6520](https://github.com/agentscope-ai/QwenPaw/issues/6520)**（3 评论）：`agent.json` 系统性损坏（BOM、缺失引号、双重编码），导致整个系统瘫痪。用户诉求：配置文件写入需要原子化与校验。
- **[#6589](https://github.com/agentscope-ai/QwenPaw/issues/6589)**（3 评论）：`execute_shell_command` 大量输出导致 UI 冻结。用户诉求：前端需要流式渲染或输出截断机制。
- **[#6608](https://github.com/agentscope-ai/QwenPaw/issues/6608)**（2 评论）：长时间 shell 命令绕过超时设置，阻塞 Feishu 会话 1.5 小时。用户诉求：需要 per-channel 总超时与取消后清理孤儿进程。
- **[#6568](https://github.com/agentscope-ai/QwenPaw/issues/6568)**（2 评论）：请求全局快捷键唤出浮动输入框（豆包式）。用户诉求：降低随手提问的摩擦。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 是否有 Fix PR |
|---|---|---|---|
| 🔴 高 | [#6612](https://github.com/agentscope-ai/QwenPaw/issues/6612) | QwenPaw 2.0.1 与 agentscope 2.0.4.post1 不兼容，proactive 子系统崩溃 + tool-permission deadlock | 否 |
| 🔴 高 | [#6619](https://github.com/agentscope-ai/QwenPaw/issues/6619) | `ToolCallBlock` 缺少 `extra_content` 字段，Gemini 流式解析 crash | 是 → [#6620](https://github.com/agentscope-ai/QwenPaw/pull/6620) |
| 🔴 高 | [#6589](https://github.com/agentscope-ai/QwenPaw/issues/6589) | 大量 shell 输出导致 UI 冻结 | 否 |
| 🔴 高 | [#6608](https://github.com/agentscope-ai/QwenPaw/issues/6608) | 长时 shell 命令绕过超时，会话被阻塞 1.5h | 否 |
| 🟡 中 | [#6588](https://github.com/agentscope-ai/QwenPaw/issues/6588) | `spawn_subagent` 单任务模式不可用 | 否 |
| 🟡 中 | [#6520](https://github.com/agentscope-ai/QwenPaw/issues/6520) | `agent.json` 系统性损坏（BOM/缺失引号/双重编码） | 否 |
| 🟡 中 | [#6625](https://github.com/agentscope-ai/QwenPaw/issues/6625) | ACP `delegate_external_agent` 竞争条件导致"无文本输出" | 是 → [#6623](https://github.com/agentscope-ai/QwenPaw/pull/6623) |
| 🟡 中 | [#6626](https://github.com/agentscope-ai/QwenPaw/issues/6626) | Real behavior proof gate 错误剔除 fenced Evidence 块 | 否 |
| 🟢 低 | [#6624](https://github.com/agentscope-ai/QwenPaw/issues/6624) | Scroll 自动压缩未触发记忆流程 | 是 → [#6629](https://github.com/agentscope-ai/QwenPaw/pull/6629) |
| 🟢 低 | [#6618](https://github.com/agentscope-ai/QwenPaw/issues/6618) | Session 时间戳强制 UTC 归一化 | 是 → [#6618](https://github.com/agentscope-ai/QwenPaw/pull/6618) |

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 可能性评估 |
|---|---|---|
| **统一清理页面**（清理会话、工作区、自动记忆、过期文件） | [#6593](https://github.com/agentscope-ai/QwenPaw/issues/6593) | 高 — 用户长期使用后的核心痛点，已有 PR #6306 提供 sidebar workspace shortcut 基础 |
| **全局快捷键唤出浮动输入框** | [#6568](https://github.com/agentscope-ai/QwenPaw/issues/6568) | 中 — 已有代码核查，需桌面端 Tauri 层支持 |
| **NVIDIA NIM provider** | [#6526](https://github.com/agentscope-ai/QwenPaw/pull/6526) | 高 — PR 已就绪，符合 provider 统一路线 |
| **OrcaRouter 内置 provider** | [#6622](https://github.com/agentscope-ai/QwenPaw/pull/6622) | 高 — PR 已就绪，降低接入门槛 |
| **Provider 发现、模型元数据、路由统一** | [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | 高 — 架构级 PR，是后续所有 provider 功能的基础 |
| **多智能体协作引导** | [#6621](https://github.com/agentscope-ai/QwenPaw/issues/6621) | 中 — 文档与产品引导需同步更新 |
| **loongsuite 集成 tracing** | [#6627](https://github.com/agentscope-ai/QwenPaw/issues/6627) | 低 — 单一用户提问，需评估是否纳入官方 tracing 方案 |

---

## 7. 用户反馈摘要

**痛点：**
- **配置可靠性差**：`agent.json` 在 Windows 上出现 BOM、缺失引号、双重编码等系统性损坏，导致整个系统不可用（#6520）。
- **长时间运行任务无超时保障**：`execute_shell_command` 可绕过 `shell_command_timeout`，阻塞会话数小时且不清理孤儿进程（#6608）。
- **多模型兼容性断裂**：Gemini `extra_content` 透传 crash、DeepSeek 因 role=user 占位符返回 400（#6619、#6628）。
- **多智能体协作引导缺失**：用户阅读官方文档后仍无法激活 Default Agent 调用其他 Agent，需在 PROFILE.md 显式写入指令（#6621）。
- **存储管理缺失**：长期使用后自动记忆、工具调用产物、备份文件等大量累积，无统一清理入口（#6593）。

**满意之处：**
- 桌面端 `workspace shortcut`（#6306）解决了打开生成文件需手动定位工作区的问题。
- 控制台图片 inline + gallery 导航（#5490）显著改善了媒体查看体验。
- 贡献者门槛友好，首位贡献者 PR 被顺利接收（#6623、#6620）。

---

## 8. 待处理积压

| 类型 | ID | 说明 | 建议 |
|---|---|---|---|
| Issue | [#6520](https://github.com/agentscope-ai/QwenPaw/issues/6520) | `agent.json` 系统性损坏，3 种损坏类型，影响 ~20+ 字段 | 需尽快定位写入路径的原子化问题 |
| Issue | [#6589](https://github.com/agentscope-ai/QwenPaw/issues/6589) | 大量 shell 输出导致 UI 冻结 | 建议前端分页/虚拟滚动 |
| Issue | [#6608](https://github.com/agentscope-ai/QwenPaw/issues/6608) | 长时命令绕过超时 + 孤儿进程 | 需引入 per-channel 总超时与取消清理 |
| Issue | [#6588](https://github.com/agentscope-ai/QwenPaw/issues/6588) | `spawn_subagent` 单任务模式不可用 | 影响核心工作流 |
| Issue | [#6612](https://github.com/agentscope-ai/QwenPaw/issues/6612) | 与 agentscope 2.0.4.post1 兼容性 | 阻塞升级，需尽快修复或锁定依赖 |
| PR | [#5490](https://github.com/agentscope-ai/QwenPaw/pull/5490) | 图片 inline + gallery，已开放近 5 周 | 需维护者 review 合并 |
| PR | [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | Provider 统一架构，已开放 12 天 | 架构级 PR，影响后续所有 provider 功能 |
| PR | [#6306](https://github.com/agentscope-ai/QwenPaw/pull/6306) | Desktop workspace shortcut，已开放 12 天 | 用户价值明确，建议尽快合并 |

---

**项目健康度评估**：中等偏上。社区贡献活跃、PR 接收顺畅，但稳定性问题（agent.json 损坏、shell 超时绕过、与 agentscope 兼容性）尚未得到系统性解决，建议维护者优先处理高严重度 Bug 并考虑在下一个版本中锁定 agentscope 依赖版本。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报
**日期：2026-08-02** | 数据来源：github.com/zeroclaw-labs/zeroclaw

---

## 1. 今日速览

ZeroClaw 在过去 24 小时内保持高度活跃的社区参与态势，共计处理 100 条更新（50 条 Issue + 50 条 PR）。Issue 侧以新开与活跃为主（45 条新/活跃，5 条已关闭），PR 侧则有 43 条待合并，7 条已合并或关闭。值得关注的是 RFC 类议题持续占据主导地位（至少 8 篇新/活跃 RFC），涵盖**记忆系统解耦、A2A 协议扩展、安全策略沙箱、WhatsApp 业务模式策略**等核心架构方向，表明项目处于功能架构收敛的关键阶段。今日无新版本发布，但 PR 合并活动频繁（至少 3 篇已合并/关闭），项目整体推进稳健。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 主题 | 影响 |
|---|---|---|
| [#9637](https://github.com/zeroclaw-labs/zeroclaw/pull/9637) | CI：临时允许 React Router RSC 异常通过 npm 依赖审查 | 保障 CI 流水线稳定性，避免因不使用的 RSC API 导致构建中断 |
| [#9636](https://github.com/zeroclaw-labs/zeroclaw/pull/9636) | 配置：接受 Windows `nul` 作为安全重定向目标 | 修复 Windows 平台 `2>nul` 被误判为不安全输出重定向的问题 |
| [#9635](https://github.com/zeroclaw-labs/zeroclaw/pull/9635) | 配置：修正 git 子命令风险分类器对全局选项的解析 | 修复 `git -C <path> <verb>` 模式下风险等级误判 |
| [#9609](https://github.com/zeroclaw-labs/zeroclaw/pull/9609) | WhatsApp 通道：在两种模式下强制执行聊天策略 | 修复 business 模式下 `dm_policy`/`group_policy` 被忽略的安全问题 |
| [#9544](https://github.com/zeroclaw-labs/zeroclaw/pull/9544) | 代理委托：遵循配置的提供者回退策略 | 修复委托调用未走配置路由的问题 |
| [#9494](https://github.com/zeroclaw-labs/zeroclaw/pull/9494) | 修复 SOP：通过共享无头运行驱动器驱动定时任务启动的运行 | 修复 cron 触发任务无 agent loop 导致输出丢失 |

> **推进评估**：今日合并的 PR 集中在**安全策略修正、平台兼容性修复、定时任务与委托调用可靠性**三个维度，属于稳定性与安全加固类贡献，对 v0.9.0 临近发布具有直接支撑作用。

---

## 4. 社区热点

### 评论最多的 Issue（TOP 5）

1. **[#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048)** — RFC: 将对话历史与 Agent 管理的长期记忆分离（16 评论）
2. **[#9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127)** — RFC: 抽象 `KeySource` trait，按来源/部署形式分类主密钥材料（13 评论）
3. **[#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)** — RFC: OpenAI Chat Completions 兼容适配器（12 评论）
4. **[#8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933)** — RFC: 为 OTel 导出添加跨轮次对话关联（12 评论）
5. **[#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106)** — RFC: A2A 外发客户端（A2ATool）（10 评论）

### 背后的诉求分析

- **记忆架构解耦**（#9048、#6850、#9103）：社区强烈希望将"持久存储"与"生命周期策略"分离，反映出用户在多后端（Lucid、文件等）场景下对统一治理的需求。
- **安全与密钥管理**（#9127、#6971）：开发者关注生产环境凭据的来源分类与运行时边界，呼应企业级部署的安全合规诉求。
- **开放生态集成**（#8603、#9106）：OpenAI 兼容适配器和 A2A 工具客户端表明用户期望 ZeroClaw 作为通用智能体中枢，连接更多外部代理生态。
- **可观测性**（#8933、#7232）：OTel 跨轮次关联需求反映用户已在大规模部署中需要 trace 级别的调试能力。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 优先级 | Issue | 描述 | 是否有 Fix PR |
|---|---|---|---|
| **S1** | [#9348](https://github.com/zeroclaw-labs/zeroclaw/issues/9348) | WhatsApp Web 在 business 模式下回复所有 DM 和群组（安全风险） | ✅ [#9609](https://github.com/zeroclaw-labs/zeroclaw/pull/9609) 已合并 |
| **S1** | [#9340](https://github.com/zeroclaw-labs/zeroclaw/issues/9340) | CLI 创建的定时任务无法传递输出（`delivery.mode` 硬编码为 `none`） | ❌ 无 |
| **S2** | [#9417](https://github.com/zeroclaw-labs/zeroclaw/issues/9417) | WhatsApp Cloud `request_approval` 在发送失败/取消时泄露实时审批令牌 | ❌ 无 |
| **S3** | [#6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) | Nextcloud Talk 使用错误的机器人消息 API | ❌ 无（状态：in-progress） |

> **稳定性评估**：S1 安全 bug 已通过 PR 修复，但定时任务输出丢失（S1）和审批令牌泄露（S2）仍待处理，建议维护者优先跟进。

---

## 6. 功能请求与路线图信号

### 可能被纳入下一版本（v0.9.0）的高优先级功能

| RFC Issue | 功能方向 | 路线图信号 |
|---|---|---|
| [#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) | A2A 外发客户端（A2ATool） | 已有 inbound A2AServer（v0.8.2），outbound 是自然延伸 |
| [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | OpenAI Chat Completions 兼容适配器 | 降低集成门槛，扩大生态覆盖 |
| [#9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127) | `KeySource` trait 密钥分类 | 安全加固核心，与 v0.9.0 auth/security 主题契合 |
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | 桌面端计算机使用支持 | 已有 `browser.backend = "computer_use"` 前置基础 |
| [#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) | WhatsApp `allowed_groups` 为空时视为拒绝 | 已有修复 PR [#9609](https://github.com/zeroclaw-labs/zeroclaw/pull/9609) |

### 其他值得关注的功能请求

- **WASM 插件生命周期钩子订阅**（[#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822)）— 扩展插件生态能力
- **混合专家模型（MoA）虚拟提供者**（[#8568](https://github.com/zeroclaw-labs/zeroclaw/issues/8568)）— 已关闭，可作为 v0.9.0 候选功能回顾
- **独立 ACP 代理选择**（[#9638](https://github.com/zeroclaw-labs/zeroclaw/pull/9638)）— 已合并，增强 ACP 协议灵活性

---

## 7. 用户反馈摘要

### 痛点提炼

1. **配置与运行时状态不同步**（[#7897](https://github.com/zeroclaw-labs/zeroclaw/issues/7897)）：用户保存配置后，长运行时子系统仍使用旧状态，需手动 reload，影响安全策略即时生效。
2. **Shell 命令安全粒度不足**（[#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)）：现有 `auto_approve` 和通配符审批过于粗粒度，用户需要 Claude Code 风格的 allow/ask/deny 三级确认机制。
3. **沙箱策略两层漂移**（[#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996)）：应用层路径准入与操作系统沙箱后端（Bubblewrap/Landlock/Seatbelt）策略不一致，导致安全边界模糊。
4. **模型能力信息不透明**（[#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100)）：vision 支持、context window 等信息来自不同来源，UI 显示与实际能力不匹配。
5. **文档链接失效**（[#9550](https://github.com/zeroclaw-labs/zeroclaw/issues/9550)）：组织 LinkedIn 链接 404，影响项目专业形象。

### 正面反馈

- 凭据加密体系（ChaCha20-Poly1305 AEAD + `#[secret]` 注解）获得认可（[#9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127)）
- 多通道支持（Slack、Telegram、WhatsApp、Matrix 等）生态持续扩展

---

## 8. 待处理积压

### 长期未响应的重要 Issue/PR

| 类型 | 编号 | 描述 | 状态 | 建议 |
|---|---|---|---|---|
| Issue | [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | 维护者决策队列追踪器 | Open（7 评论） | 需维护者明确 RFC 处理流程 |
| Issue | [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | v0.9.0 auth/security/gateway 变更追踪 | Open（2 评论） | 建议作为 v0.9.0 发布清单 |
| Issue | [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) | Shell 命令三级确认策略 | Open（10 评论，p1） | 高安全价值，需维护者评审 |
| Issue | [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | 桌面端计算机使用支持 | Open（8 评论，p2） | 已有技术基础，可纳入路线图 |
| Issue | [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | 分离内存生命周期策略与存储后端 | Open（9 评论） | 与 #9048、#9103 形成系列，建议统一处理 |
| PR | [#8985](https://github.com/zeroclaw-labs/zeroclaw/pull/8985) | Slack 通道：代理工作时显示生命周期进度 | Open（XL 尺寸） | 影响用户体验，建议优先合并 |
| PR | [#9313](https://github.com/zeroclaw-labs/zeroclaw/pull/9313) | WeChat：持久化同步光标前先入队 | Open（M 尺寸） | 修复数据丢失风险 |
| PR | [#9215](https://github.com/zeroclaw-labs/zeroclaw/pull/9215) | 容器：使 Compose 网关可访问 | Open（S 尺寸） | 影响本地开发体验 |
| PR | [#8996](https://github.com/zeroclaw-labs/zeroclaw/pull/8996) | 修复：守护进程重载时保留运行中的目标 | Open（XL 尺寸） | 修复 #7897 描述的配置重载问题 |

### 维护者关注建议

- **RFC 处理瓶颈**：多个高优先级 RFC（#9048、#9127、#8603）评论数超过 10 但状态仍为 `proposed`/`accepted`，建议建立 RFC → PR 的转化 SLA。
- **安全 bug 响应**：#9348 和 #9417 均涉及 WhatsApp 安全策略，建议维护者优先审查相关 PR。
- **积压清理**：#8692（决策队列）和 #7432（v0.9.0 追踪）可作为下一版本的范围界定工具。

---

**报告生成时间**：2026-08-02 | **数据覆盖窗口**：2026-08-01 → 2026-08-02

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*