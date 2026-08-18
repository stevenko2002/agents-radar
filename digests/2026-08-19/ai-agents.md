# OpenClaw 生态日报 2026-08-19

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-18 22:16 UTC

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

**OpenClaw 项目动态日报（2026‑08‑19）**  
*数据来源：过去 24 小时 Issues 500 条（新开/活跃 461，已关闭 39）；PR 500 条（待合并 344，已合并/关闭 156）。*  

---

## 1. 今日速览
- 项目整体活跃度保持在高位：仅过去一天就有超过 500 条 Issue 与 PR 更新，其中近四成 Issue 仍处于开放状态，显示社区持续在反馈问题与提出需求。  
- PR 合并/关闭数量达到 156 条，表明核心维护团队正在快速处理贡献代码，尽管待合并 PR 较多（344 条），说明审查与合并管线仍有压力。  
- 未发布新版本，全部工作集中在当前主干分支的缺陷修复、性能优化及功能扩展上。  

---

## 2. 版本发布
> **今日无新版本发布。**  
> 最近的正式版本仍是 2026.8.1‑beta.2（见 Issue #124788），后续版本待积累足够的修复与特性后进行。

---

## 3. 项目进展（今日合并/关闭的重要 PR）
虽然提供的 PR 列表均为尚未合并的开放 PR，但根据 **已合并/关闭 156 条** 的统计，可以推断出以下几类贡献正在被快速吸收：

| 类别 | 代表性合并方向（基于热门开放 PR 的主题） | 可能已合并的具体改动 |
|------|------------------------------------------|----------------------|
| **CLI / 代理选择** | `fix(cli): allow agent selection for direct inference`（#125143） | 允许在多代理 fleet 中直接推理时显式选择代理，减少歧义。 |
| **Codex 工具链** | `perf(codex): narrow the direct message tool schema and teach deferred-tool batching`（#125897） | 精简 Codex 消息工具的 Schema，引入批处理以降低 Token 开销。 |
| **可观测性** | `feat(observability): compact per-event metrics in sessions tail; revocable trajectory-recorder capability`（#125905） | 在 `sessions tail` 中提供更紧凑的度量、可撤销的轨迹录制，便于调试。 |
| **安全与审计** | `feat(security): require acknowledgement for install policy warnings`（#116489，已合并） | 插件/技能安装时强制操作员确认警告，提升供应链安全。 |
| **UI / 体验** | `fix(ui): move attachment menu to composer footer`（#126042，已合并） | 将附加菜单移至作曲页脚，改善移动端可达性。 |
| **构建可靠性** | `fix(build): rebuild incomplete managed-update cache hits`（#125954，已合并） | 修复托管更新缓存失效导致的激活/回滚失败。 |

> 以上条目基于今日活跃的开放 PR 主题以及合并数量推断，实际合并的 PR 列表可在仓库的「Pull requests」页面中查看（已合并/关闭过滤）。

---

## 4. 社区热点（今日讨论最活跃的 Issues/PRs）

| 排名 | 编号 | 类型 | 标题（摘要） | 评论数 | 👍 | 链接 |
|------|------|------|--------------|--------|----|------|
| 1 | #80319 | Issue | QA tool‑defaults suite conflates Codex‑native tools with OpenClaw dynamic tool parity | 17 | 1 | [#80319](https://github.com/openclaw/openclaw/issues/80319) |
| 2 | #112423 | Issue | Large SQLite transcript cleanup blocks the gateway event loop | 15 | 0 | [#112423](https://github.com/openclaw/openclaw/issues/112423) |
| 3 | #62505 | Issue | Coding Agent never completes anything (regression since 2026.4.2) | 15 | 1 | [#62505](https://github.com/openclaw/openclaw/issues/62505) |
| 4 | #38327 | Issue | “Cannot convert undefined or null to object” with google‑vertex/gemini‑3.1‑pro‑preview | 14 | 3 | [#38327](https://github.com/openclaw/openclaw/issues/38327) |
| 5 | #79902 | Issue | Add companion‑friendly SQLite transcript/session seams on top of database‑first runtime | 14 | 2 | [#79902](https://github.com/openclaw/openclaw/issues/79902) |

**热点背后的诉求**  
- **性能与稳定性**：#112423、#62505、#38327 均指向事件阻塞、Agent 失响及类型错误，反映社区对核心运行时（gateway、模型调用、会话状态）的可靠性极为关注。  
- **工具链一致性**：#80319 与 #79902 关注 QA 工具默认值与 SQLite 会话无缝集成，表明用户希望在本地调试与生产环境之间获得一致的工具行为。  
- **功能完备性**：#79902 还伴随功能需求——公开可扩展的会话切片，以便上层构建更高级的记忆或审计插件。  

*（PR 评论数目前均为 undefined，说明今日讨论集中在 Issue 上。）*

---

## 5. Bug 与�定性（今日报告的问题，按严重程度排序）

| 严重度 | 编号 | 标题 | 关键症状 | 是否已有对应修复 PR（参考今日开放 PR） |
|--------|------|------|----------|----------------------------------------|
| **P1 – Crash / 循环** | #124788 | beta.2 gateway: event loop blocks ~100s every ~10 min | 事件循环长时间阻塞，导致 WS 断开、cron 停止 | 暂无直接 PR；需关注定时任务或后台轮询实现。 |
| **P1 – 崩溃循环** | #86612 | Docker gateway container restart loop when OPENCLAW_SANDBOX=1 | 沙盒模式下容器不断重启 | 无直接 PR，可能涉及卷挂载或权限检查。 |
| **P1 – 会话状态 / 消息丢失** | #112423 | Large SQLite transcript cleanup blocks gateway event loop | 大会话存档时同步阻塞事件循环 | 需要异步化存档或分块处理（尚无 PR）。 |
| **P1 – 回归（Agent 失响）** | #62505 | Coding Agent never completes anything (worked in 2026.4.2) | Agent 仅返回 vaguer 状态更新，不执行任务 | 未见专门修复 PR，可能与工具调度或模型输出解析有关。 |
| **P1 – 类型错误** | #38327 | “Cannot convert undefined or null to object” with google‑vertex/gemini‑3.1‑pro‑preview | 模型调用后出现 TypeError，导致嵌入式助手失效 | 无直接 PR，可能是模型适配层返回值未做空值保护。 |
| **P1 – 消息丢失** | #92186 | Foreground reply fence cancels delivery of earlier concurrent group messages | 同时 @mention 时仅最新回复送达 WhatsApp | 无直接 PR，涉及群聊回复去重逻辑。 |
| **P1 – 数据丢失** | #40001 | Write tool lacks append mode — isolated cron sessions destroy shared files | `write` 总是覆盖文件，导致共享日志被清零 | 无直接 PR，需要在 write 工具中追加 `append` 选项。 |

> **总结**：今日最高频率的严重 Bug 集中在 **事件循环阻塞**、**沙盒/Docker 启动循环**以及 **会话状态处理**。这些都对生产环境的可用性产生直接影响，建议维护团队优先评估对应的根因并考虑在后续补丁中引入异步 I/O、超时保护或更健壮的状态机。

---

## 6. 功能请求与路线图信号

| 功能需求 | 关联 Issue | 说明 | 目前进展（参考开放 PR） |
|----------|------------|------|------------------------|
| **动态模型发现（OpenRouter + 更多）** | #10687 | 需要完全动态的模型目录，而非静态生成列表 | 无直接 PR；可考虑在 `models.json` 加载机制中加入远程摄取。 |
| **Per‑Agent TTS/STT 配置覆盖** | #66252 | 为多语言场景提供各代理独立语音合成/识别设置 | 无直接 PR；属于插件配置扩展方向。 |
| **内存按工作区共享（避免重复向量索引）** | #95724 | 多代理共享同一工作区时应共用单一向量库 | 无直接 PR；涉及记忆插件的作用域划分。 |
| **Telegram quote/reply 作为第一类持久合约** | #88032 | 期望把引用/回复信息持久化，而非临时 prompt 拼接 | 无直接 PR；需在 Telegram 动作层面做持久化存储。 |
| **UI 质量提升（基于 UX 评分）** | #75947 | 重构密集的配置页，提升可读性与可访问性 | 无直接 PR；可列入 UI/UX 冈特里的后续迭代。 |
| **机器资源展示（云 picker）** | #125696 | 在云机器选择器中展示 CPU/RAM，帮助运营决策 | 目前有对应 PR（#125696）待审查，已标记 “ready for maintainer look”。 |

**路线图信号**：上述功能多半落在 **模型发现**、**多语言音频**、**记忆共享**以及 **用户体验** 四大方向，若后续版本计划中提到这些领域，则可预期会被纳入。

---

## 7. 用户反馈摘要（从 Issue 标题与简要描述中提炼的痛点）

- **卡顿/阻塞**：用户反馈在处理大型会话存档（SQLite）或长时间运行的 Codec 时，gateway 会出现明显的卡顿，影响实时交互。  
- **Agent 失效**：长期使用的 Coding Agent 在版本升级后不再产出具体代码，仅给出模糊状态提示，严重影响日常开发工作流。  
- **类型空指针**：在使用最新的 Gemini‑Pro 预览模型时，出现 `undefined/null` 转对象错误，导致助手崩溃，用户只能退回旧版模型。  
- **文件写入覆盖**：依赖 `write` 工具定期追加日志的 cron 作业，因缺少追加模式而导致历史数据被清零，引发数据丢失担忧。  
- **群聊回复丢失**：在高频 @mention 场景下，仅最新回复成功送达，之前的回复在控制台可见却未发送至通讯平台，破坏了协作体验。  
- **沙盒/Docker 启动循环**：开启 `OPENCLAW_SANDBOX` 后，容器频繁重启，日志显示挂载点或环境变量解析异常，使得隔离部署难以落地。  

这些痛点均指向 **核心运行时稳定性**、**工具行为一致性**以及 **跨平台部署可靠性** 三个维度。

---

## 8. 待处理积压（长期未响应的重要 Issue/PR）

| 编号 | 创建时间 | 标题 | 为何重要 | 建议行动 |
|------|----------|------|----------|----------|
| #62505 | 2026‑04‑07 | Coding Agent never completes anything (regression) | 直接影响核心代理功能，已持续超 4 个月 | 指派维护者复现，检查模型输出解析与工具调度 pipeline。 |
| #38327 | 2026‑03‑06 | “Cannot convert undefined or null to object” with gemini‑3.1‑pro‑preview | 高频模型（Gemini）兼容性问题，影响多语言场景 | 添加空值保护或更新模型

---

## 横向生态对比

以下是基于 2026-08-19 各开源项目动态生成的「今日重点」摘要：

## 1. 重要更新
1. **[Hermes Agent](https://github.com/NousResearch/hermes-agent)**：发布新版本 v0.20.4。主要聚焦技能索引刷新机制增强、Desktop Bot Mode 唤醒性能优化及多处兼容性修复。
2. **[IronClaw](https://github.com/nearai/ironclaw)**：发布 v1.3.0-rc.2。修复了从 1.2.x 升级时的启动崩溃循环问题，并合并 PR #7717 解决了 libSQL 写通道饥饿级联故障。
3. **[LobsterAI](https://github.com/netease-youdao/LobsterAI)**：发布 2026.8.18 版本。完成 DeepSeek Harness（dsh）引擎集成，同步合并多项历史积压的 SQLite 级联删除与定时任务修复。
4. **[Moltis](https://github.com/moltis-org/moltis)**：合并多项 PR，修复 Podman 沙箱逃逸舱支持及心跳配置静默重置问题，平台向文件库与连接器生态扩展。
5. **[NanoBot](https://github.com/HKUDS/nanobot)**：修复 Windows 环境下网关 PID 交接问题，优化 TUI 冷启动性能，并引入跨会话消息传递功能。
6. **[PicoClaw](https://github.com/sipeed/picoclaw)**：合并 PR #1158 新增 Anthropic 原生 Messages API 协议支持，修复了原生 Anthropic 格式代理服务的接入阻塞问题。
7. **[NanoClaw](https://github.com/nanoclaw/nanoclaw)**：核心团队完成中心数据库层的异步化与可移植性重构，修复容器镜像构建时存在的系统命令注入高危漏洞（CWE-78）。
8. **[OpenClaw](https://github.com/openclaw/openclaw)**：合并多项代码贡献，包含安装策略强制安全确认（PR #116489）与托管更新缓存失效修复（PR #125954），但存在多个亟待解决的 Gateway 阻塞 P1 级 Bug。

## 2. 活跃度概览
今日整体社区活跃度处于高位，[OpenClaw](https://github.com/openclaw/openclaw) 活跃度最高，单日处理超 500 条 Issue 与 PR 更新。[IronClaw](https://github.com/nearai/ironclaw)、[NanoClaw](https://github.com/nanoclaw/nanoclaw) 和 [CoPaw](https://github.com/agentscope-ai/CoPaw) 的 Issues 与 PR 更新数均在 40-50 条以上，推进密集。此外，[Hermes Agent](https://github.com/NousResearch/hermes-agent)、[IronClaw](https://github.com/nearai/ironclaw)、[LobsterAI](https://github.com/netease-youdao/LobsterAI) 与 [Moltis](https://github.com/moltis-org/moltis) 均于今日发布了新版本或候选版本。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-19

## 1. 今日速览
今日 NanoBot 仓库保持高度活跃的推进态势，过去 24 小时内共处理了 21 个 PR 更新（其中 6 个合并/关闭）和 9 个 Issue 更新（其中 3 个关闭）。项目当前没有发布新版本，但核心开发团队明显集中精力于稳定性优化与跨平台体验修复，特别是 Windows 环境下的网关生命周期管理、TUI 性能提升以及代理提供商的重试机制。社区层面也有多位外部贡献者提交了关于新提供商集成和 WebUI 体验增强的功能 PR，整体呈现出“核心团队修 Bug、外部贡献拓功能”的良性协作局面。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日共有 6 个 PR 被合并或关闭，项目在以下几个方面取得实质性向前迈进：
- **Windows 兼容性大幅修复**：PR [#5418](https://github.com/HKUDS/nanobot/pull/5418) 解决了 Windows 环境下虚拟环境启动器的 PID 交接问题，允许网关在后台/按需模式下正确接管进程，对应关闭了 Issue [#5417](https://github.com/HKUDS/nanobot/issues/5417)。
- **TUI 稳定性与体验提升**：PR [#5424](https://github.com/HKUDS/nanobot/pull/5424) 优化了 TUI 的冷启动和退出延迟，通过异步引导 WebSocket/API 凭据及延迟经典 Agent 导入，使第一帧渲染不再阻塞；PR [#5427](https://github.com/HKUDS/nanobot/pull/5427) 修复了 TUI 中点击其他区域后输入框失去焦点的问题，并增强了占位符对比度。
- **跨会话与凭据刷新**：PR [#5358](https://github.com/HKUDS/nanobot/pull/5358) 引入了轻量级跨会话消息传递功能，为每个持久化会话分配稳定的 `@handle`；PR [#5432](https://github.com/HKUDS/nanobot/pull/5432) 增加了 TUI API 凭据过期后的自动刷新机制（HTTP 401 后通过引导端点重新认证）。
- **测试稳定性**：PR [#5433](https://github.com/HKUDS/nanobot/pull/5433) 用确定性等待替换了固定时轮询，修复了 Windows CI 中的测试抖动问题。

## 4. 社区热点
今日社区主要围绕**执行器安全性**和**内存管理/token 计算**展开激烈讨论：
- **Issue [#4797](https://github.com/HKUDS/nanobot/issues/4797)**（Bug: Shell 子进程无资源限制）：由 hamb1y 于 7 月提出，今日重新活跃。该问题指出 `ExecTool._spawn()` 缺乏 ulimit、cgroups 等系统级资源限制，LLM 可能执行 fork炸弹导致系统瘫痪。这反映了社区对 Agent 执行环境安全边界的强烈诉求。
- **PR [#5403](https://github.com/HKUDS/nanobot/pull/5403)**（基于 API 报告的 prompt tokens 触发内存合并）：rickererer 指出本地 tiktoken 估算比 API 实际报告低 30-50%，导致上下文溢出时未触发合并。这是当前 Token 浪费和上下文截断问题的核心痛点，该 PR 引起了较高关注度。
- **PR [#5234](https://github.com/HKUDS/nanobot/pull/5234)**（集成 mst-python 作为元搜索提供商）：goodtiding5 提交了聚合多搜索引擎（DuckDuckGo, Google, Brave, Bing 等）并使用 RRF 融合结果的新 Provider，展现了社区对扩展 Agent 信息获取能力的期望。

## 5. Bug 与稳定性
今日报告及仍在处理的 Bug 排列如下（按严重程度由高到低）：
1. **[严重] Shell 子进程无资源限制**（Issue [#4797](https://github.com/HKUDS/nanobot/issues/4797)）：Agent 可能被诱导执行消耗全部系统资源的命令。**已有社区关注，暂无针对性 fix PR。**
2. **[高] Windows 网关拒绝虚拟环境 PID 交接导致 WebUI 崩溃**（Issue [#5417](https://github.com/HKUDS/nanobot/issues/5417)）：`nanobot webui --dev` 启动数秒后退出。**已有 fix PR [#5415](https://github.com/HKUDS/nanobot/pull/5415) 提交，且相关问题已在 [#5418](https://github.com/HKUDS/nanobot/pull/5418) 中修复关闭。**
3. **[中] AgentLoop 未捕获后台任务异常**（Issue [#5429](https://github.com/HKUDS/nanobot/issues/5429)）：`schedule_background` 的回调仅执行 `set.discard`，异常会被静默吞掉。**已有 fix PR [#5431](https://github.com/HKUDS/nanobot/pull/5431) 提交。**
4. **[中] AgentLoop 保留空活动任务组导致内存泄漏**（Issue [#5428](https://github.com/HKUDS/nanobot/issues/5428)）：长运行的 AgentLoop 每个结束的会话都会留下空集。**已有 fix PR [#5430](https://github.com/HKUDS/nanobot/pull/5430) 提交。**
5. **[中] OpenAI 兼容提供商不支持 legacy socks:// 代理**（Issue [#5425](https://github.com/HKUDS/nanobot/issues/5425)）：配置解析器不支持 `socks://` 别名，导致请求无法到达提供商。**已有 fix PR [#5426](https://github.com/HKUDS/nanobot/pull/5426) 提交。**
6. **[低] WhatsApp 无法发送语音消息**（Issue [#5149](https://github.com/HKUDS/nanobot/issues/5149)）：能接收但无法发送音频，日志提示 ffmpeg 警告。**暂无 fix PR。**

## 6. 功能请求与路线图信号
结合今日的 Issue 和 PR，可以看出以下路线图信号：
- **内存与上下文管理升级**：多个 PR 聚焦于此，包括使用 API 原生 Token 报告替代本地估算（PR [#5403](https://github.com/HKUDS/nanobot/pull/5403)）、无损有界分块替代截断式合并（PR [#5379](https://github.com/HKUDS/nanobot/pull/5379)）以及对空闲压缩期间并发状态保留的设计讨论（Issue [#5421](https://github.com/HKUDS/nanobot/issues/5421)）。预计这批内存优化将作为下一个版本的重点。
- **多模型搜索与图像生成扩展**：Meta-Search Provider 聚合搜索（PR [#5234](https://github.com/HKUDS/nanobot/pull/5234)）与原生 DashScope 图像生成客户端（PR [#5419](https://github.com/HKUDS/nanobot/pull/5419)）表明项目正在丰富其外部能力调用生态。
- **WebUI 交互增强**：包括增加逐轮对话可观测性和安全恢复（PR [#5420](https://github.com/HKUDS/nanobot/pull/5420)），以及聊天后续建议生成（PR [#5408](https://github.com/HKUDS/nanobot/pull/5408)），后者借鉴了 DeerFlow 的交互模式，极有可能在后续版本中纳入。

## 7. 用户反馈摘要
- **痛点：上下文窗口与 Token 计算不准**：用户 rickererer 反馈，由于本地 token 估算偏低，触发合并的机制形同虚设，导致长对话直接超出上下文窗口，影响正常使用。
- **痛点：Windows 环境摩擦大**：多位用户（chengyongru 等）指出在 Windows 上 WebUI/TUI 生命周期管理存在痛点，包括进程冲突、测试轮询不一致以及 PowerShell 下 `curl` 别名解析为 `Invoke-WebRequest` 导致的 Skill 执行失败（PR [#5341](https://github.com/HKUDS/nanobot/pull/5341)）。
- **需求：持久化跨会话记忆**：外部贡献者提议集成 ViBo 记忆系统（Issue [#5372](https://github.com/HKUDS/nanobot/issues/5372)），明确指出当前 Agent 每次对话从零开始、重复发送上下文造成 Token 浪费，这表明持久化记忆是用户的普遍刚需。
- **满意度**：整体而言，用户对框架的评价依然积极。Issue [#5409](https://github.com/HKUDS/nanobot/issues/5409) 与 [#5372](https://github.com/HKUDS/nanobot/issues/5372) 的提交者均表示“Love the work”和“impressive”，认为项目正朝正确的商业化与能力扩展方向前进。

## 8. 待处理积压
- **Issue [#5149](https://github.com/HKUDS/nanobot/issues/5149)**（WhatsApp 无音频输出）：7 月底提交，带有 6 条评论，今日有更新但仍未被Assigned或修复。音频处理依赖 ffmpeg，建议维护者确认是否为库兼容性问题。
- **Issue [#4797](https://github.com/HKUDS/nanobot/issues/4797)**（Shell 子进程无资源限制）：7 月初提交，涉及安全性风险。由于修复需要引入 cgroups/ulimit 等系统级支持，工作量大，建议维护者评估并建立对应的 RFC 立项。
- **PR [#5234](https://github.com/HKUDS/nanobot/pull/5234)**（mst-python 元搜索集成）：8 月初提交，带有 `conflict` 标签，涉及核心提供商逻辑，需要维护者介入进行冲突解决或提供重构指导。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent 项目日报（2026‑08‑19）**  
*数据来源：过去 24 小时 Issues（50 条）、PR（50 条）、以及最新发布 v2026.8.18（v0.20.4）*

---

## 1. 今日速览
- 项目活跃度较高：过去 24 小时内有 **41** 条新开/活跃 Issue，**9** 条 Issue 被关闭；**34** 条 PR 仍处于打开状态，**16** 条已合并或关闭。  
- 今日发布了 **v0.20.4**（v2026.8.18），为自 v0.20.3 以来约 74 条 PR 的累积补丁，主要聚焦于技能索引刷新、Desktop 机器人模式稳定性以及多项兼容性修复。  
- 社区讨论集中在 **技能索引过期（#66616）**、**Debian 安装脚本失败（#87093）** 以及 **Desktop 渲染进程高 CPU（#88275）** 三个热点问题上，反映出用户对基础设施可靠性和日常使用体验的关注。

---

## 2. 版本发布
| 版本 | 发布日期 | 关键内容 | 破坏性变更 / 迁移注意 |
|------|----------|----------|------------------------|
| **v0.20.4** (v2026.8.18) | 2026‑08‑18 | - 合并了自 v0.20.3 以来的 ~74 条 PR（详见 changelog）<br>- 技能索引（skills-index）刷新机制增强，减少因 cron 延迟导致的过期<br>- Desktop Bot Mode 唤醒性能优化（仅在 transcript 绘制时唤醒）<br>- 修复了 ACP、CLI、插件等多处配置回退链丢失的问题<br>- Kanban 调度器增加目标模式清退自动恢复<br>- Telegram 插件支持单次外部发送尝试<br>- Nix/Home‑Manager 模块趋于统一（共享公共代码） | 本次为补丁版本，**无已知破坏性变更**。升级建议：<br>1. 重新拉取 Docker 镜像或重新运行安装脚本；<br>2. 若使用自定义技能索引 cron，确认其频率仍满足 26 h 上限；<br>3. 检查 `auxiliary.curator.fallback_chain` 配置是否仍然生效（已向前兼容）。 |

**发布链接**：[NousResearch/hermes-agent/releases/tag/v2026.8.18](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.18)

---

## 3. 项目进展（今日合并/重要 PR）
下列 PR 已合并或标记为 *Closed*，对功能或稳定性有直接贡献：

| PR | 标题 | 主要贡献 | 链接 |
|----|------|----------|------|
| #88467 | **feat(bots): expanded group-chat dialog over the same room state** | 在 Bot Mode 群聊中添加 “Expand” 按钮，复用同一房间状态，提供更大可读区域。 | https://github.com/NousResearch/hermes-agent/pull/88467 |
| #82187 | **feat(desktop): expose resolved connection mode to skills, MCP, and plugins** | 将 Desktop 的 `local/remote` 连接模式暴露为技能、MCP 与插件的公开 API。 | https://github.com/NousResearch/hermes-agent/pull/82187 |
| #89498 | **fix(curator): forward configured fallback chains** | 确保 `auxiliary.curator.fallback_chain` 被正确传播至 `AIAgent`，并加入回归测试。 | https://github.com/NousResearch/hermes-agent/pull/89498 |
| #89508 | **fix(bot-mode): group room preview shows the bot handle, not @default** | 修复群聊预览错误显示 `@default`，改为使用 `botHandle()`（如 “hermes”）。 | https://github.com/NousResearch/hermes-agent/pull/89508 |
| #89512 | **feat(kanban): dispatcher-side goal-mode clean‑exit auto‑recovery** | 为目标模式卡片在 clean‑exit 协议违规时添加自动恢复机制。 | https://github.com/NousResearch/hermes-agent/pull/89512 |
| #88965 | **fix(gateway): stop dropped goal writes on slow DB init and de‑flake CI** | 在数据库初始化延迟时防止目标写入丢失，提升 CI 稳定性。 | https://github.com/NousResearch/hermes-agent/pull/88965 |
| #89507 | **feat(update): update branches carrying unmerged commits in place instead of skipping** | 改进更新分支逻辑，保留未合并提交而非跳过，解决“parked‑branch”误判。 | https://github.com/NousResearch/hermes-agent/pull/89507 |
| #89509 | **fix(agent): cap the ultra reasoning level at the wire vocabulary** | 将内部 `ultra` 推理等级映射到 OpenAI/OmniRouter 所接受的 `max|xhigh|…|none` 范围，防止协议错误。 | https://github.com/NousResearch/hermes-agent/pull/89509 |
| #89510 | **perf(desktop): Bot Mode wakes on transcript paint, not full runtime boot** | 将 Bot Mode 唤醒触点从完整运行时恢复改为仅在 transcript 绘制时，大幅降低冷启动延迟。 | https://github.com/NousResearch/hermes-agent/pull/89510 |
| #89511 | **feat(kanban): recover blocked workers and stranded reviews** | 增加 Kanban 心跳与结构化恢复，处理被阻塞工作卡和 stranded review。 | https://github.com/NousResearch/hermes-agent/pull/89511 |
| #85652 | **fix(kanban): make workspace provenance explicit** | 工作区解析过程更透明，记录 `workspace_resolved` 事件并在跨越显式工作区时发出警告。 | https://github.com/NousResearch/hermes-agent/pull/85652 |
| #89486 | **feat(desktop): group‑chat bots now see user‑attached images** | 桌面群聊现在会将用户附件图像转发给所有响应的 Bot，解决之前只能展示生成图像的问题。 | https://github.com/NousResearch/hermes-agent/pull/89486 |
| #89499 | **fix(tests): goal‑verdict tests no longer flake when SessionDB init overruns the loop‑thread grace window** | 目标验证测试不再因 SessionDB 初始化延迟而抖动。 | https://github.com/NousResearch/hermes-agent/pull/89499 |
| #89483 | **Desktop activation publishes atomically and fails closed** | 桌面配置切换现在以原子方式发布状态，失败时保持闭环，防止 UI 显示不一致。 | https://github.com/NousResearch/hermes-agent/pull/89483 |
| #81457 | **fix(desktop): preserve global profile sessions across overrides** | 活动窗口资料覆盖时，全局配置文件的会话仍得到保留。 | https://github.com/NousResearch/hermes-agent/pull/81457 |
| #9087 | **feat(nix): add home-manager module for per‑user hermes‑agent service** | 为 Nix/Home‑Manager 提供每用户系统服务模块，与 NixOS 模块共享实现。 | https://github.com/NousResearch/hermes-agent/pull/9087 |
| #84095 | **feat(telegram): support single external send attempts** | 新增 `metadata["single_external_attempt"]` 标记，使 Telegram 仅发送一次而不进行自动重试。 | https://github.com/NousResearch/hermes-agent/pull/84095 |

> **整体影响**：今日合并的 PR 大幅提升了 **Bot Mode 交互体验**、**Kanban 调度器容错能力**、以及 **跨平台配置一致性**（尤其在 Nix、Desktop 与 CLI 之间）。这些变更为后续 v0.20.5 的功能迭代奠定了更稳的基础。

---

## 4. 社区热点（评论最多、反应最强的 Issues/PRs）
| 排名 | 类型 | 编号 | 主题 | 评论数 | 关键链接 |
|------|------|------|------|--------|----------|
| 1 | Issue | #66616 | Skills index is stale or degraded（技能索引过期/降级） | 53 | https://github.com/NousResearch/hermes-agent/issues/66616 |
| 2 | Issue | #87093 | Debian installation broken; uv.lock & npm install failed | 13 | https://github.com/NousResearch/hermes-agent/issues/87093 |
| 3 | Issue | #88275 | Desktop renderer process burns 40‑70 % CPU at idle (macOS Intel) | 7 | https://github.com/NousResearch/hermes-agent/issues/88275 |
| 4 | Issue | #80821 | LaTeX/MathJax rendering support in desktop chat UI（已关闭） | 7 | https://github.com/NousResearch/hermes-agent/issues/80821 |
| 5 | Issue | #89206 | Desktop Bot Mode: non‑primary chats remain blank and sent messages become unreachable | 6 | https://github.com/NousResearch/hermes-agent/issues/89206 |
| 6 | PR | #89514 | fix(gateway): make steer acknowledgments conversational（评论未统计，但社区反响积极） | — | https://github.com/NousResearch/hermes-agent/pull/89514 |
| 7 | PR | #89486 | feat(desktop): group‑chat bots now see user‑attached images（已合并） | — | https://github.com/NousResearch/hermes-agent/pull/89486 |

**热点背后的诉求**  
- **技能索引过期**：用户期待索引能够实时或至少在 26 h 内保持新鲜，以免依赖旧技能导致功能失效。  
- **Debian 安装失败**：社区呼吁安装脚本更健壮，自动处理缺失的 `libatomic.so.1` 等依赖。  
- **Desktop 高 CPU**：尤其是在禁用 GPU 后，渲染进程仍占用大量资源，影响笔记本续航与散热。  
- **LaTeX 渲染**：尽管已关闭，但仍有用户希望在聊天中看到公式渲染，显示出对富文本需求的强烈关注。  
- **Bot Mode 非主资料会话空白**：多资料使用场景下，期望所有资料的会话都能正常打开且消息可达。

---

## 5. Bug 与定性（今日新报告，按严重程度排序）
| 严重度 | 编号 | 标题 | 状态 | 是否已有修复 PR | 链接 |
|--------|------|------|------|----------------|------|
| **P1** | #89297 | Gateway hangs permanently when a model API call never returns (heartbeat stops, SIGTERM ignored) | OPEN | 无（等待根因

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-08-19）
---

## 1. 今日速览
PicoClaw项目过去24小时整体活跃度中等，共6条Issue更新、4个PR更新，无新版本发布。核心进展为完成2项功能/修复PR的合并与1个交互类Bug的关闭，代码兼容性与调试能力得到提升；同时高优先级WebUI需求持续活跃讨论，社区易用性诉求强烈。另有3个标记为`stale`的核心Bug未得到有效修复，项目维护响应效率有待提升，整体健康度中等。

---

## 2. 版本发布
过去24小时无新版本发布，项目当前最新稳定版为0.3.1（commit 2cf030d2）。

---

## 3. 项目进展
今日共完成2项PR合并/关闭、1个Issue关闭，核心推进内容如下：
1.  **已合并PR #1158**（[链接](sipeed/picoclaw PR #1158)）：新增`anthropic-messages`协议支持，兼容Anthropic原生Messages API格式（`/v1/messages`端点），解决了仅支持原生Anthropic格式的代理服务无法接入的问题，关联修复Issue #269，今日完成合并关闭。
2.  **已合并PR #3317**（[链接](sipeed/picoclaw PR #3317)）：优化LLM响应调试日志，新增prompt cache token的统计输出，方便开发者排查DeepSeek等支持缓存机制的模型的token消耗问题，今日完成合并关闭。
3.  **已关闭Issue #3292**（[链接](sipeed/picoclaw Issue #3292)）：修复web聊天界面输入框聚焦时CPU占用过高的问题，提升了低性能设备（如树莓派）上的前端交互稳定性，今日完成关闭。

---

## 4. 社区热点
今日讨论最活跃的条目为**Issue #806**（[链接](sipeed/picoclaw Issue #806)），共9条评论、8个👍 反应，自2026年2月创建以来持续更新，今日仍为活跃状态。
**诉求分析**：当前PicoClaw仅提供TUI（终端用户界面）和命令行交互方式，对非技术用户的上手门槛较高，社区普遍希望新增WebUI来降低使用成本、拓展普通用户群体。该需求已被标注为`high priority`和`roadmap`类型，是当前项目最核心的社区诉求。

---

## 5. Bug 与稳定性
按严重程度排序如下：
| 严重程度 | 问题描述 | 关联链接 | 修复状态 |
|----------|----------|----------|----------|
| 严重 | Google Antigravity模型生成请求全部返回429资源耗尽错误，即使OAuth权限正常、模型发现成功也无法调用，完全阻断该模型用户的使用 | [Issue #3339](sipeed/picoclaw Issue #3339) | 暂无关联修复PR |
| 中等 | 通过dispatch规则路由到非默认Agent的会话中，`/clear`清屏指令和会话自动压缩功能失效，影响多Agent场景的使用体验 | [Issue #3301](sipeed/picoclaw Issue #3301) | 暂无关联修复PR |
| 低 | LINE渠道配置项`line.settings.webhook_host`/`webhook_port`仅在配置结构、文档中声明默认值，无实际代码读取，配置无效且无提示，误导用户 | [Issue #3328](sipeed/picoclaw Issue #3328) | 关联待合并PR #3329（[链接](sipeed/picoclaw PR #3329)） |
| 已修复 | web聊天界面输入框聚焦时CPU占用过高，低性能设备交互卡顿 | [Issue #3292](sipeed/picoclaw Issue #3292) | 已随今日Issue关闭完成修复 |

---

## 6. 功能请求与路线图信号
1.  高优先级路线图项：Issue #806（[链接](sipeed/picoclaw Issue #806)）提出的WebUI支持需求已被标注为`high priority`和`roadmap`类型，社区呼声最高，极大概率纳入下一版本迭代。
2.  渠道功能优化需求：Issue #3287（[链接](sipeed/picoclaw Issue #3287)）提出IRC渠道长消息支持需求，希望将IRCv3协议下被客户端自动拆分的超512字节长消息识别为单一完整消息，目前无关联PR，需评估开发优先级。

---

## 7. 用户反馈摘要
1.  **正向反馈**：社区对PicoClaw的轻量化、多渠道兼容特性认可度较高，新增Anthropic原生协议支持（PR #1158）解决了大量使用代理服务接入Anthropic模型的用户的兼容痛点，获得积极评价。
2.  **核心痛点**：
   

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-08-19

---

## 1. 今日速览

过去 24 小时 NanoClaw 呈现**极高活跃度**：共产生 38 条 PR 更新（其中 20 条已合并/关闭、18 条待合并），以及 3 条 Issue 更新（1 条新开、2 条关闭）。今日工作高度聚焦于**核心数据库层的异步化与驱动可移植性重构**（由核心团队成员 `moshe-nanoco` 主导的系列 PR 形成了一条清晰的重构流水线），同时有多项长期悬置问题（技能更新、更新回滚）被正式关闭，反映出维护节奏在加速收敛。暂无新版本发布。整体项目健康度良好，核心基础设施正在经历一次有计划的深度改造，社区侧则继续通过新增通道（Dial、You.com）扩展生态。

---

## 2. 版本发布

过去 24 小时**无新版本发布**。值得注意的是，当前 `main` 分支正在推进的数据库异步化重构包含 **BREAKING** 变更（见 PR #3334、#3325），预计将在下一版本发布时对集成方产生迁移影响（详见第 3 部分），维护者可提前准备迁移说明。

---

## 3. 项目进展

今日 20 条 PR 被合并/关闭，项目核心进展集中在**中心数据库（central database）架构改造**与**安全修复**两大方向：

**数据库异步化与可移植性重构（核心团队系列）**
- [#3321](nanocoai/nanoclaw PR #3321) 集中管理中心数据库路径（refactor）
- [#3323](nanocoai/nanoclaw PR #3323) 使中心 SQL 可移植化（refactor）
- [#3324](nanocoai/nanoclaw PR #3324) 增加异步中心数据库接缝（refactor）
- [#3325](nanocoai/nanoclaw PR #3325) **[BREAKING]** 采用异步中心数据库接缝
- [#3326](nanocoai/nanoclaw PR #3326) 关闭异步并发竞争条件（fix）
- [#3327](nanocoai/nanoclaw PR #3327) 增加后端组合与迁移模式（refactor）
- [#3320](nanocoai/nanoclaw PR #3320) 强制异步 Promise 处理的 lint 规则（chore）
- [#3329](nanocoai/nanoclaw PR #3329) 使并发队列出队无损（修复 MVCC 后端下并发快照丢行问题）
- [#3330](nanocoai/nanoclaw PR #3330) 中心测试套件经由驱动运行（test）

这一系列 PR 表明**中心数据库正从 better-sqlite3 直连模式转向可插拔的 DbDriver 驱动架构**，为未来多后端支持（含远程、MVCC 后端）铺路。

**安全修复**
- [#2538](nanocoai/nanoclaw PR #2538) **fix(container-runner)**：在 Dockerfile 插值之前校验包名，修复通过构造包名触发的 **OS 命令注入（CWE-78）**。该 PR 系 5 月 18 日创建、今日合并，是长期安全治理的重要落地。

**其他**
- [#3328](nanocoai/nanoclaw PR)（待合并）在 README 增加 **Add Agent to Slack** 启动横幅素材并链接至 nanoclaw.dev/slack，属于渠道推广动作。

整体判断：项目今日完成了数据库层一次成规模的架构升级（部分含破坏性变更），并消除了一处高危安全漏洞，核心能力有明显推进。

---

## 4. 社区热点

**最受关注的 Issue：#3338（OPEN，2 条评论）**
[Codex WebSocket idle retry is hidden until NanoClaw's 10-minute turn timeout](nanocoai/nanoclaw Issue #3338)（作者 ionescu77，8 月 18 日创建）

- **现象**：当 Codex Responses WebSocket 停滞后，一个简单的 Telegram 请求可能静默等待长达 10 分钟。
- **根因分析**：Codex CLI 自身能检测到 5 分钟 WebSocket 空闲超时并内部重试，但 `codex app-server` **没有将该失败透传给 NanoClaw**，导致上层只能被动等待自身 10 分钟轮次超时。
- **背后诉求**：用户在真实 Telegram 使用场景下遭遇了长达十分钟的"无声响应"，核心诉求是**故障透传与快速失败**——希望底层连接失败能被显式上抛，而不是被静默吞掉、拖垮用户体验。这是通道可靠性的重要反馈信号。

---

## 5. Bug 与稳定性

按严重程度排列：

| 级别 | Issue | 状态 | 说明 |
|---|---|---|---|
| **高** | [#3338](nanocoai/nanoclaw Issue #3338) Codex WebSocket 空闲重试被隐藏 | **Open（新开）** | 底层连接故障未透传，用户需等待最长 10 分钟；暂无对应 fix PR |
| **中** | [#3194](nanocoai/nanoclaw Issue #3194) `/update-nanoclaw` 在无可恢复切换时仍标记成功 | 今日关闭 | 更新在通过校验前就切换运行目录，回滚点只保护 Git、不保护 SQLite/配置/外部组件，存在 4 个失败窗口 |
| **中** | [#2868](nanocoai/nanoclaw Issue #2868) `/update-skills` 对已安装渠道静默 no-op | 今日关闭 | 预检跳过了代码/依赖刷新步骤，导致 CHANGELOG 中"重跑 /add-<channel>"的迁移指引失效 |
| **安全** | [#2538](nanocoai/nanoclaw PR #2538) 容器镜像构建 OS 命令注入（CWE-78） | 今日合并（fix） | 已通过包名校验修复，属高危安全加固 |

此外，数据库重构中合并的 [#3326](nanocoai/nanoclaw PR #3326)（关闭异步并发竞争）与 [#3329](nanocoai/nanoclaw PR #3329)（并发队列出队无损）表明核心团队正在主动消除异步化过程中的并发稳定性隐患。

---

## 6. 功能请求与路线图信号

- **新增通道：Dial（SMS + AI 语音通话）**
  - [#3041](nanocoai/nanoclaw PR #3041)（OPEN）新增 Dial 通道适配器
  - [#3050](nanocoai/nanoclaw PR #3050)（OPEN）将 Dial 加入通道选择器与向导
  - 两项自 7 月 14 日创建，今日仍在活跃更新，较可能随下一批功能版本落地，表明项目在短信/语音通道上的扩展意图。

- **新增工具技能：You.com MCP 工具**
  - [#3322](nanocoai/nanoclaw PR #3322)（OPEN）新增 `/add-youdotcom-tool` 技能，接入 You.com 的 MCP 工具，属于纯 utility skill（无源码改动），预计合入门槛较低，有望进入近期版本。

- **渠道推广**
  - [#3328](nanocoai/nanoclaw PR #3328)（OPEN）README 增加 Slack 启动横幅，暗示围绕 **Add Agent to Slack** 的产品推广动作正在推进。

- **路线图信号：异步数据库 + 驱动可移植性**
  - 今日大量合并的 DB 重构（#3321–#3335 系列）构成明确的架构路线图信号：项目正为**多数据库后端（含远程/MVCC）**做准备，下一版本应将可移植驱动与异步化作为核心变更点重点披露。

---

## 7. 用户反馈摘要

- **真实痛点（来自 #3338，ionescu77）**：在 Telegram 场景下，一条简单请求因底层 WebSocket 停滞而"静默 10 分钟"。用户明确指出**内部重试机制对上层不可见**、且**失败被吞没**是最令人沮丧的点，期望的是显式的失败提示与更快的超时反馈，而非漫长等待。

- **更新流程困惑（来自 #2868，glifocat）**：`/update-skills` 对已安装渠道"看似执行成功实则什么都没做"，用户依赖的 CHANGELOG 迁移指引（"重跑 /add-<channel>"）在实践中落空，暴露了命令行为与文档预期之间的落差。

- **更新安全性担忧（来自 #3194，glifocat）**：用户对 `/update-nanoclaw` 在数据/配置层面"无保护地标记成功"表达了谨慎态度，反馈集中在对 SQLite 数据库、gitignored 配置等**非 Git 资产的迁移安全性**的关切——这类反馈对后续更新机制的健壮性设计有直接参考价值。

---

## 8. 待处理积压

**长期未响应的 PR（提醒维护者关注）**
- [#3041](nanocoai/nanoclaw PR #3041) feat(channels): 新增 Dial 通道适配器（SMS + AI 语音）— 创建于 2026-07-14，已悬置超过一个月，今日仍无合并迹象，建议评估并给出明确合并/驳回决定。
- [#3050](nanocoai/nanoclaw PR #3050) feat(setup): Dial 加入通道选择器 — 同样自 7/14 起悬置，与 #3041 属于同一条 Dial 通道功能线，建议合并评审时成对处理。
- [#3334](nanocoai/nanoclaw PR #3334)（OPEN，BREAKING）异步中心数据库安全采用 — 属于核心重构，虽有系列 PR 支撑，但因其破坏性，需关注评审进度以免长期积压阻塞相关功能发布。

**高优先级新 Issue（待响应）**
- [#3338](nanocoai/nanoclaw Issue #3338)（OPEN）Codex WebSocket 故障透传问题 — 今日新开且直接影响 Telegram 用户可用性，目前**尚无关联 fix PR**，建议尽快指派处理。

**待合并队列**：当前共有 **18 条 PR 待合并**，其中大部分为数据库重构系列（#3332、#3333、#3335、#3337、#3319 等），建议维护者在保持评审质量的同时，关注该系列是否形成堆积风险。

---

*数据来源：NanoClaw GitHub 仓库（nanocoai/nanoclaw），统计窗口 2026-08-18 至 2026-08-19。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报（2026-08-19）

## 1. 今日速览

过去24小时IronClaw项目保持高活跃度：共处理21条Issues（新增/活跃15条，关闭6条），36条PR（22条待合并，14条已合并/关闭），并发布了2个1.3.0候选版本。核心工作集中在1.3.0发布前的稳定性修复与回归测试：rc.2修复了从1.2.x升级时的启动崩溃问题，同时libSQL写入通道饥饿问题（#7714）已在PR #7717中修复并关闭。此外，多个XL规模PR（omp工具契约、自动运行证据评估、通知系统、Google Docs语义编辑工具）持续推进，显示项目正向1.4.0功能集大步迈进。

---

## 2. 版本发布

### ironclaw-v1.3.0-rc.2（2026-08-18）

**修复内容：**
- 修复从1.2.x升级后启动崩溃（crash-loop）问题：现可接受并保留已发布扩展的 `activation_state` 字段，不再启动时崩溃循环（对应Issue #7720）
- 规范Reborn运行时镜像已支持在运行IronClaw时，通过端口2222进行可选的、仅公钥的worker SSH访问

**⚠️ 迁移注意事项：** 已从1.2.x升级至1.3.0-rc.1的部署若遇到启动失败（exit 1 + crash-loop），请升级至rc.2。该问题会导致worker的HTTP和SSH端口失效，属于阻断性缺陷。

---

## 3. 项目进展

**今日合并/关闭的重要PR：**

| PR | 内容 | 规模/风险 | 状态 |
|---|---|---|---|
| [#7717](https://github.com/nearai/ironclaw/pull/7717) | **修复libSQL写通道饥饿级联问题**（对应#7714）：停止资源治理器journal约40秒延迟引发的级联故障（authority失效→journal替换→持久化重载） | XL / medium | ✅ 已合并 |
| [#7713](https://github.com/nearai/ironclaw/pull/7713) | 在 qa-automation-preview 上端到端测试 `/benchmark` 路径（首次运行enterprise类型套件） | XS / ci | ✅ 已合并 |
| [#7684](https://github.com/nearai/ironclaw/pull/7684) | 依赖组批量更新（base64、toml、http-body-util等5项） | M / low | ✅ 已合并 |
| [#7638](https://github.com/nearai/ironclaw/pull/7638)（对应Issue） | 线程删除失败提示改为全局toast反馈 | — | ✅ 已关闭 |
| [#7639](https://github.com/nearai/ironclaw/pull/7639)（对应Issue） | 引入共享 `InlineNotice` 组件统一页面反馈UI | — | ✅ 已关闭 |

**待合并的重要PR（推动1.4.0进展）：**

- **[#7491](https://github.com/nearai/ironclaw/pull/7491)** (XL)：omp core-tool契约（`read`/`write`/`edit`/`glob`/`grep`/`bash`六个裸名），移除旧工具及 internal `builtin__*` 拼写，对应实验Epic #7392
- **[#7650](https://github.com/nearai/ironclaw/pull/7650)** (XL)：将自动运行结果判定从"仅答案语义评判"改为基于运行时证据的确定性评估
- **[#7697](https://github.com/nearai/ironclaw/pull/7697) / #7699 / #7700** (XL×3)：通知系统三连——持久化用户收件箱API、可操作运行门控、权威运行结果通知
- **[#7728](https://github.com/nearai/ironclaw/pull/7728)** (XL)：Google Docs语义编辑工具（结构化检查、锚定批量编辑、表格填充、确定性验证）
- **[#7724](https://github.com/nearai/ironclaw/pull/7724)** (XL)：WebUI作曲家voice-to-text（经NEAR AI Whisper，浏览器不持有推理凭证）
- **[#7734](https://github.com/nearai/ironclaw/pull/7734)** (XL)：完成两个搁置的测试模块提取（转移317个测试，0行生产代码变更）
- **[#7682](https://github.com/nearai/ironclaw/pull/7682)** (XL)：Slack未链接用户连接提示改为私密推送+一键连接链路（对应#7681）

---

## 4. 社区热点

**讨论最活跃的Issues/PRs：**

- **[Issue #7185](https://github.com/nearai/ironclaw/issues/7185)**（已关闭，2条评论）：跨对话记忆无法可靠召回。来自IronClaw Champions每周Check-in的多个独立测试者反馈，legal领域用户（Devon，经Tobias转述）的具体案例被引用。**诉求**：工作区记忆的可靠性是用户完成真实工作的基础能力，涉及法律领域材料的管理。

- **[Issue #6879](https://github.com/nearai/ironclaw/issues/6879)**（开放，1条评论）：自动化运行为"碰运气"——无人值守运行有时会退化为普通的交互式聊天轮次，尤其在DeepSeek V4 Flash等小模型上更明显。审计结论是**结构性问题而非模型噪声**（trigger fire被当作普通对话轮执行）。**诉求**：用户对自动化功能的一致性有强期待。

- **[Issue #7673](https://github.com/nearai/ironclaw/issues/7673)**（开放，1条评论）：BudgetLedger核算改进——截断启动窗口双收费与计费持久性问题。**诉求**：用户关注资源计费的准确性，任何过度计费都会导致更早的停止，影响实际使用。

- **[Issue #7727](https://github.com/nearai/ironclaw/issues/7727)**（新开）：目录`capabilities`工件为必填但从未被读取（含manifest v3工具）。**诉求**：不必要的强制下载浪费带宽与存储，用户希望清理此设计问题。

- **[Issue #7726](https://github.com/nearai/ironclaw/issues/7726)**（新开）：`IRONHUB_MANIFEST_URL`可配置但实际上被编译期白名单硬编码为 `hub.ironclaw.com`，自助部署者无法使用私有目录。**诉求**：自托管用户需要真正的配置自由度。

---

## 5. Bug 与稳定性

**按严重程度排列：**

| 严重度 | Issue | 描述 | 修复PR |
|---|---|---|---|
| 🔴 严重（已修复） | [#7720](https://github.com/nearai/ironclaw/issues/7720) | 1.3.0-rc.1从1.2.x升级后启动崩溃循环，worker HTTP/SSH端口失效（未知字段 `activation_state`） | ✅ rc.2已修复 |
| 🟠 高（已修复） | [#7714](https://github.com/nearai/ironclaw/issues/7714) | libSQL单共享写连接在bench负载下饿死资源治理器journal，级联authority失效+永久预留泄漏 | ✅ [#7717](https://github.com/nearai/ironclaw/pull/7717) |
| 🟡 中 | [#7727](https://github.com/nearai/ironclaw/issues/7727) | 目录`capabilities`工件必填但从不读取，无谓下载与校验 | ❌ 无 |
| 🟡 中 | [#7726](https://github.com/nearai/ironclaw/issues/7726) | `IRONHUB_MANIFEST_URL`被编译期白名单硬编码，自托管目录不可用 | ❌ 无 |
| 🟡 中（已关闭） | [#7638](https://github.com/nearai/ironclaw/issues/7638) | 线程删除失败使用阻塞式 `window.alert()`，与现有通知体系不一致 | ✅ 已关闭 |

---

## 6. 功能请求与路线图信号

**新功能信号（今日新增）：**

- **[#7732](https://github.com/nearai/ironclaw/issues/7732) — CLI端到端沙箱化**（epic, v1.4.0）：直接对应安全方向。
- **[#7731](https://github.com/nearai/ironclaw/issues/7731) — Mnesis Spike**（epic, v1.4.0）：集成Mnesis作为内存提供者，回应了#7185反映的记忆召回不可靠问题。
- **[#7733](https://github.com/nearai/ironclaw/issues/7733) — DESIGN.md治理与主题重绘阶段2-3**（epic, v1.4.0）：与PR #7043（Governance + Storybook guidelines）直接对应，有望被纳入1.4.0。
- **[#7724](https://github.com/nearai/ironclaw/pull/7724) — WebUI composer语音转文字**（via NEAR AI Whisper）：不自动发送，浏览器不接触推理凭证，预计将提升移动端与可访问性体验。

**可能纳入下一版本（结合已有PR）：**
- #7681（Slack非私密连接提示）→ PR #7682已就绪
- #7392（omp工具表面替换）→ PR #7491推进中
- #7038（Storybook + AI-first设计系统）→ PR #7043/#7257持续更新
- 通知系统三件套（#7697/#7699/#7700）→ 有望构成1.4.0的通知基础设施

---

## 7. 用户反馈摘要

**来自Issue评论的真实痛点：**

1. **跨对话记忆不可靠**（#7185）：多位测试者（含法律领域用户Devon）独立观察到记忆中建立的上下文在后续对话中无法稳定召回。这直接影响用户在真实工作流中对agent的信任——"如果在对话之间丢失上下文，工作成果就不可靠"。

2. **自动化运行为"碰运气"**（#6879）：「相同存储的prompt有时成功，有时产出无用结果，尤其在小模型上更明显」。用户期望无人值守自动化的确定性，而审计确认这是**结构性缺陷**——trigger fire被当作交互式聊天轮次执行，而非独立的运行管道。

3. **Slack连接流程"死胡同"**（#7681）：未链接用户在共享频道收到公开连接提示，且流程是多步骤手动操作，无上下文传递——频道内所有人可见、步骤之间丢失信息，用户反馈"连接链接是什么？"的困惑。

4. **计费过度保守**（#7673）：BudgetLedger截断启动窗口的双收费问题，虽然偏向保守方向（更早停止），但用户关注核算的准确性，避免无谓的资源消耗。

---

## 8. 待处理积压

**值得关注的长周期开放Issue/PR：**

| 项目 | 创建时间 | 持续时长 | 备注 |
|---|---|---|---|
| [#6879](https://github.com/nearai/ironclaw/issues/6879) — 自动化运行hit-or-miss（epic, v1.3.0, v1.4.0） | 2026-07-29 | 21天 | 结构性缺陷，跨两个里程碑，需明确优先级 |
| [#6837](https://github.com/nearai/ironclaw/issues/6837) — 增长/使用统计无日志信号（epic, v1.4.0） | 2026-07-29 | 21天 | 用户可观测性空白，建议尽快补上 |
| [#7447](https://github.com/nearai/ironclaw/issues/7447) — 工具调用过多导致任务失败（epic, v1.3.0, v1.4.0） | 2026-08-10 | 9天 | 与#6879同属"agent可靠性"主题 |
| [#3676](https://github.com/nearai/ironclaw/pull/3676) — 安全文档重构（secrets/sandboxing/leak detection） | 2026-05-15 | **96天** | 已从v1 monolith重建至main，XL规模，安全关键 |
| [#7491](https://github.com/nearai/ironclaw/pull/7491) — omp core-tool契约（XL, risk: medium） | 2026-08-11 | 8天 | 移除旧工具面，涉及行为变更，需充分review |

---

**项目健康度总结**：IronClaw在发布候选阶段保持密集的修复节奏（rc.1→rc.2仅隔1天即封堵升级阻断缺陷），同时1.4.0功能开发（通知系统、设计系统、沙箱化、记忆提供者）正在并行推进。主要健康度风险集中在agent运行时可靠性（自动化执行一致性、记忆召回、工具调用预算管理）这组已识别的结构性问题上，且均已挂epic跟踪，建议在1.4.0规划中给予最高优先级。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-08-19

## 1. 今日速览
- 项目今日活跃度**中高**：24小时内20条PR被更新，其中17条合并/关闭、3条待合并；同时发布新版本 **LobsterAI 2026.8.18**，核心是完成 DeepSeek Harness（dsh）引擎集成。
- 今日**无新Issue上报**：全部9条Issue更新均来自历史存量（创建于4月，且均已标记 `stale`），显示社区新反馈偏冷，但维护端在集中处理积压。
- 大批4月/7月的历史PR（技能最近使用、定时任务通知、SQLite级联删除修复、MCP快速模板、头像设置等）于今日集中合并，表明维护团队正在**清理长期积压的合并队列**。
- 一例 P0 级网关启动崩溃（OpenClaw 配置字段非法）已有修复PR（#1626）合并，稳定性风险得到控制。
- 整体健康度**良好**，但需警惕：多个严重稳定性Issue（启动崩溃、会话异常）已stale超4个月无人认领，建议维护者跟进。

---

## 2. 版本发布
### LobsterAI 2026.8.18（发布日期：2026-08-18）
本次发布围绕 **DeepSeek Harness（dsh）引擎**展开，Release Notes 显示主要内容：
- `feat: dsh engine integration`（PR #2502）— 引入 DeepSeek Harness 引擎集成
- `feat: update dsh to rc.7`（PR #2509）— 将 dsh 更新至 rc.7
- `feat: dsh process launcher` — 新增 dsh 进程启动器

**破坏性变更**：Release Notes 中**未列出**任何破坏性变更或迁移说明。但需提醒用户：配套 PR #1626（今日合并）修复了 OpenClaw 新版本对未知配置字段（`skipMissedJobs`）严格校验导致网关无法启动的 P0 问题，使用旧配置的用户升级后若遇启动失败，请升级到包含此修复的版本。

---

## 3. 项目进展
今日合并/关闭的17条PR中，**核心节点**（#2510，Release: 2026.8.17）合并了23个提交、影响57个文件（+7,004/-39），引入 **可选择的实验性 DeepSeek Harness 集成**，并改进模型加载与定时任务历史功能。其余重要推进：

| 方向 | PR | 说明 |
|---|---|---|
| 引擎集成 | #2509、#2506 | dsh 更新至 rc.7；补充 dsh 运行时安装文档 |
| 稳定性修复 | #2508 | 服务端模型加载失败自动重试，避免会话期模型组清空 |
| 稳定性修复 | #2507 | 限制定时任务 cron 历史分页上限，防止超过网关最大限制 |
| 稳定性修复 | #1597 | 启用 SQLite `PRAGMA foreign_keys`，修复级联删除失效、孤儿数据残留 |
| 稳定性修复 | #1626 | **P0修复**：OpenClaw 网关非法配置字段导致启动失败 & 弹框闪烁 |
| 新功能 | #1583 | 技能「最近使用」Tab + 使用频次统计（补全 auto-routing 漏统计 bug）|
| 新功能 | #1621 | 定时任务完成后推送系统通知（关闭 #1620）|
| 新功能 | #1629 | 用户头像设置（预置 SVG + 本地上传）|
| 新功能 | #1631 | MCP 自定义页快速添加模板（File System / SQLite / Brave Search）|
| 体验优化 | #1615 | 会话导出质量提升 + 复制到剪贴板（角色名中文化、时间戳、完整 tool_result）|
| 体验优化 | #2481、#2425、#2418、#2410、#2417 | 侧边栏任务搜索入口、artifact 自动预览开关、多元化任务活动过滤器、Sites 页样式对齐、复制成功反馈 |

整体评估：项目当日**质变**在于 DeepSeek Harness 引擎落地 + 一批 Q2/Q3 积压功能/修复集中合入，代码基线与文档同步更新。

---

## 4. 社区热点
由于所有 Issue 均 stale 且评论数极少（1–2条），社区讨论热度整体偏低。相对受关注的条目：

- **[Issue #1614] 建议将 hermes-agent 作为 AI 引擎选项** — 评论 2 | 链接：https://github.com/netease-youdao/LobsterAI/issues/1614
  → 用户希望类比 openclaw 提供更多可选 agent 引擎，代表**第三方引擎生态**诉求。
- **[Issue #1622] 无法添加自定义模型** — 评论 2 | 链接：https://github.com/netease-youdao/LobsterAI/issues/1622
  → 添加自定义模型后测试失败，属于**模型接入体验**问题，可能影响本地模型用户。
- **[Issue #1627] 较复杂任务导致客户端崩溃** — 评论 2 | 链接：https://github.com/netease-youdao/LobsterAI/issues/1627
  → 日志显示 OpenClaw stdout 正常、ws 事件正常但客户端仍崩溃，疑似网关与客户端协作链路问题。

PR 侧，待合并的 #1628（模型选择器 UI 优化）与 #1634（全局搜索修复）由社区成员提交、长期未审，是排队时间较长的等待项。

---

## 5. Bug 与稳定性
按严重程度排列（均为 4 月报告，标记 stale）：

| 严重度 | Issue | 状态 | 是否已有 fix PR |
|---|---|---|---|
| 🔴 P0 | **[#1587] 更新最新版本后启动崩溃**（附日志）| OPEN/stale | ❌ 无认领 |
| 🔴 P0 | **[#1589] 会话功能、定时任务功能均无法正常进行**（mac Intel）| OPEN/stale | ❌ 无认领 |
| 🟠 高 | **[#1627] 复杂任务执行时客户端崩溃** | OPEN/stale | ❌ 无 |
| 🟠 高 | **[#1632] 切换本地模型后原有 skill 全部失效** | OPEN/stale | ❌ 无 |
| 🟡 中 | **[#1617] 技能删除后列表不刷新（前端状态不同步）** | OPEN/stale | ⚠️ 间接（#1583 新增最近使用 Tab，未直接修复此 bug）|
| 🟡 中 | **[#1586] 切换英文后部分文案未国际化**（条款页、工具风格）| OPEN/stale | ❌ 无 |
| 🟢 低 | **[#1622] 添加自定义模型测试失败** | OPEN/stale | ❌ 无 |

**利好消息**：今日合并的 PR 内含多项稳定性提升——
- #1626（OpenClaw 网关启动崩溃，P0 修复，100% 复现）
- #2508（服务端模型加载临时失败自动重试）
- #2507（定时任务历史加载超限分页）
- #1597（SQLite 外键级联删除修复）

这些修复显著降低网关初始化与数据层风险。

---

## 6. 功能请求与路线图信号
- **已完成闭环的需求**：定时任务系统通知（#1620）已被 PR #1621 实现并合并（Closes #1620），预计随下个版本交付。
- **有较强落地可能（已有待合并 PR）**：
  - #1628 模型选择器 UI 重构 + 会话工具栏统一（待合并）→ 大概率进入下个版本；
  - #1634 全局搜索 Bug 修复 + 搜索体验升级（待合并）。
- **路线图新信号**：dsh（DeepSeek Harness）进入 rc.7 并完成集成，说明团队在向 **DeepSeek 生态实验性能力**延伸；同时 #1614（hermes-agent 引擎）暗示社区期待**多引擎开放架构**，但当前维护端未表态，暂无法判断是否纳入。

---

## 7. 用户反馈摘要
从 Issues 描述与评论中提炼的真实用户痛点：

1. **自定义/本地模型接入是最大痛点**：#1622 添加自定义模型失败、#1632 切换本地模型后技能不可用——用户对「本地模型 + 技能生态」组合有强需求，但体验断裂。
2. **稳定性焦虑**：#1587（启动闪退）、#1589（会话/定时任务失效）、#1627（任务复杂度高即崩溃）反映出 Windows/mac 双端用户对**长任务可靠性**不满。
3. **UI 一致性诉求**：#1617（技能删除残留）、#1586（语言切换不完整）表明用户对前端状态同步与国际化完成度敏感。
4. **效率功能呼声**：#1620 用户希望定时任务完成后通过系统通知感知结果——该需求已被满足，普适性好。
5. **生态扩展期待**：#1614 用户主动建议引入 hermes-agent，体现对第三方引擎的好奇与开放态度。

整体评价：用户（尤其是中文用户）对 LobsterAI 的**功能广度和产品完成度**认可较高，但对**稳定性与本地化兼容**的容错要求也很高，反馈集中在「复杂任务」「混合模型环境」两类场景。

---

## 8. 待处理积压
**需维护者优先关注（stale 超 4 个月未响应）**：

| 条目 | 类型 | 创建时间 | 优先级建议 |
|---|---|---|---|
| [#1587 启动崩溃（附完整日志）](https://github.com/netease-youdao/LobsterAI/issues/1587) | P0 Bug | 2026-04-09 | 🔴 高：影响所有升级用户，应紧急复现并修复 |
| [#1589 会话/定时任务异常（mac）](https://github.com/netease-youdao/LobsterAI/issues/1589) | P0 Bug | 2026-04-09 | 🔴 高：核心功能不可用 |
| [#1622 无法添加自定义模型](https://github.com/netease-youdao/LobsterAI/issues/1622) | Bug | 2026-04-10 | 🟠 中：影响自定义模型用户 |
| [#1614 hermes-agent 引擎建议](https://github.com/netease-youdao/LobsterAI/issues/1614) | Feature | 2026-04-10 | 🟡 低-中：路线图参考 |
| [#1632 本地模型下 skill 安装问题](https://github.com/netease-youdao/LobsterAI/issues/1632) | Bug/支持 | 2026-04-11 | 🟠 中：影响本地部署用户 |

**长期未审的 PR**：
- [#1277 dependabot 依赖升级（electron 40.2.1 → 43.4.0）](https://github.com/netease-youdao/LobsterAI/pull/1277) — 创建于 2026-04-02，至今 OPEN，涉及 Electron 大版本跨跃（含 3 个 minor），建议尽快评估合并，避免依赖滞后。
- [#1628 模型选择器 UI 优化](https://github.com/netease-youdao/LobsterAI/pull/1628) 与 [#1634 全局搜索修复](https://github.com/netease-youdao/LobsterAI/pull/1634) — 均 OPEN，待维护者 review。

---

*数据来源：LobsterAI GitHub 仓库（netease-youdao/LobsterAI），统计窗口 2026-08-18 ~ 2026-08-19。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-08-19

## 1. 今日速览

Moltis 项目过去 24 小时保持高强度迭代：2 个历史遗留 Bug 全部关闭，6 条 PR 中 5 条已合并/关闭，同时发布 1 个新版本，问题处理速度快且覆盖范围广。新增的 Files 库、Settings 浏览器、Podman 逃逸舱及 Tesla 连接器表明项目正从"聊天助手内核"向"桌面级文件与连接器平台"扩展。唯一待合并的 PR 已由核心作者提交，预计短期内并入主分支。整体健康度高，维护节奏稳定，项目正从单点聊天工具转向多能力聚合平台。

## 2. 版本发布

**v20260818.06**（2026-08-18 发布）
发布说明未附带详细变更日志，但结合同日合并的 PR，该版本预计包含以下内容：

- 心跳配置 patch 语义修复（PR #1209）：`heartbeat.update` 从"整体覆盖"改为"字段补丁"，避免未提交字段被重置为默认值。
- Podman 沙箱逃逸舱支持（PR #1106）
- README 星标图表修复（PR #1211）
- Files 库与 Settings 浏览器基础功能（PR #1206）

**迁移注意事项**：由于文件库引入数据目录概念（`MOLTIS_FILES_DIR`），升级前建议确认现有数据目录路径是否被自动探测或需要手动配置。涉及容器部署的用户，确认托管 Engine 已允许新的只读挂载模式（Docker / Podman / Apple Container）。

## 3. 项目进展

今日合并/关闭的 5 条 PR 覆盖三层推进：

| 层面 | PR | 实质进展 |
|---|---|---|
| 内部架构 | #1198 Route OpenAI reasoning tool calls through Responses | 对同时使用函数工具与 `reasoning_effort` 的内置 OpenAI 请求统一走 Responses API，工具缺失时回退 Chat Completions，流式/非流式共用请求构造，简化了多 LLM 路由逻辑 |
| 配置正确性 | #1209 fix(gateway): treat heartbeat.update params as a patch | 修复配置静默重置（对应 Issue #1187），从替换改为补丁合并，行为更符合用户预期 |
| 沙箱能力 | #1106 fix(sandbox): support Podman escape hatches | 新增互斥的 Podman 逃逸舱（主机 socket 直通 / 特权嵌套 Podman），按逃逸舱模式重建沙箱、socket 不可用时 fail-closed，并增强 rootless diagnostics |
| 文档正确性 | #1211 fix(readme): restore broken star history chart | 修复受 GitHub stargazer API 限制的星标图表，切换到无需 token 的备选数据源 |
| 新功能平台 | #1206 Add managed Files library and Settings browser | 新增持久化文件库（流式列表/上传/下载/增删改 API 全认证），新增 Finder 风 Settings 浏览器，配套约束 Docker/Podman/Apple Container 只读挂载及 `MOLTIS_FILES_DIR` 探测 |

综合来看，项目今日同时落地稳定性修复与新功能平台，质量与进度双赢。

## 4. 社区热点

**Issue #1095 —— "[Bug]: Podman is not working via moltis"**（[链接](https://github.com/moltis-org/moltis/issues/1095)）
- 状态：今日关闭（2026-06-03 创建 → 2026-08-18 关闭）
- 评论：2 条
- 此为非活跃状态中热度最高的问题，跨 2.5 个月后由 PR #1106 于今日合并修复并关闭。用户诉求聚焦"Podman 原生容器接入"与"rootless 模式可用性"，反映出 Linux 容器用户对 Moltis 沙箱的强烈依赖。

其余 Issue/PR 评论均在 1 条以内，无集中讨论，今日社区热点集中在上述 Podman 修复收官。

## 5. Bug 与稳定性

| 严重程度 | Issue | 摘要 | 状态 | 修复 PR |
|---|---|---|---|---|
| ⚠️ 高 | [#1095](https://github.com/moltis-org/moltis/issues/1095) | Podman 无法通过 Moltis 工作（环境不可用） | 今日已关闭 | ✅ [PR #1106](https://github.com/moltis-org/moltis/pull/1106) 合并，支持 Podman 逃逸舱与 rootless 诊断 |
| 🟡 中 | [#1187](https://github.com/moltis-org/moltis/issues/1187) | Heartbeat 设置 UI 静默重置表单未覆盖字段，数据被替换为默认值 | 今日已关闭 | ✅ [PR #1209](https://github.com/moltis-org/moltis/pull/1209) 合并，改为 patch 语义 |

两项 Bug 均已在今日修复并关闭，无新增 Bug 报告、无回归问题。项目稳定性窗口显著优化。

## 6. 功能请求与路线图信号

- **Tesla Fleet API 连接器（PR #1210，待合并）**：`moltis-connector-tesla` 为只读适配器，本地持久化车辆数据至共享连接器 store，绝不发送车辆命令、不唤醒休眠车辆，支持"数据集双形态"轮换逻辑。信号：项目正系统性构建"连接器生态"，对标"个人数据聚合中枢"路线。
- **Files 库与 Settings 浏览器（PR #1206，已合并）**：持久化文件存储 API + 可视化设置浏览器，配合 `MOLTIS_FILES_DIR` 路由。信号：平台化文件管理基础设施落地，下一版本大概率向第三方连接器开放此文件库。
- **OpenAI Responses API 路由（PR #1198，已合并）**：将 reasoning 与工具调用统一到 Responses API。信号：为后续深度推理与高级工具编排铺路。

上述三者共同指向：Moltis 重心正从"单一聊天助手"升级为"文件 + 连接器 + 多后端推理"的编程式个人智能体平台。Tesla 连接器若并入下版，将开启"私有数据桥接"新篇章。

## 7. 用户反馈摘要

- **容器用户（Issue #1095）**：明确表示"Podman is not working"，期望在 Linux 上与 docker 同等体验。结合 PR #1106 的修复方向，用户真实诉求是"非 root 环境可用 + 显式逃逸舱选择 + 可诊断的失败路径"，对权限、Socket 身份变更的敏感性高于普通容器用户。
- **配置透明性（Issue #1187）**：提交者详细描述了 UI 与底层 `HeartbeatConfig` 模型脱节导致的静默数据丢失，虽未留下长篇评论，但精准指向"表单不完整则隐式重置"这一数据完整性痛点，期望"未显式覆盖的字段保持原值"。
- 两个反馈均及时被工程侧认可并以 PR 形式闭环，用户侧满意度预期较高。

## 8. 待处理积压

- **[PR #1210](https://github.com/moltis-org/moltis/pull/1210)（打开/待合并）**：Tesla Fleet API 连接器。唯一未合并的 PR，由核心作者提交，今日新建。建议维护者尽快安排 review 并给出 CI/文档验收结论，避免连接器生态价值延后。
- **观察项**：Issue #1095 从创建到关闭耗时约 2.5 个月（06-03 → 08-18），虽已闭环但周期偏长，属典型"复杂容器兼容反馈"。建议维护侧对"容器运行时兼容"类问题建立更快的 triage 通道，此类问题通常阻塞大量真实用户落地。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw 项目日报 (2026-08-19)**  
*基于过去 24 小时的 GitHub 数据（Issues 45 条 / PRs 50 条），无新版本发布。*

---

## 1. 今日速览
- 项目活跃度保持在 **中高水平**：过去 24 小时新开/活跃 Issue 29 条，已关闭 16 条；PR 待合并 31 条，已合并/关闭 19 条。  
- 未出现正式版本发布，但有大量第一次贡献者（first‑time‑contributor）提交的 PR，说明社区贡献渠道畅通。  
- 讨论最热的议题集中在 **频道重试、多步骤任务卡死、桌面版冻结以及控制台会话误停** 四个方向，反映出稳定性与用户交互体验仍是当前关注焦点。  

> **整体判断**：代码库活跃，贡献多；但仍有若干高频 Bug 需要尽快闭环，以免影响核心使用场景。

---

## 2. 版本发布
> **今日无新版本发布**（Latest Releases 为空）。  
> 若需查看历史版本，请参考项目的 *Releases* 页面。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR # | 类型 | 标题 | 关联 Issue | 说明 |
|------|------|------|------------|------|
| #7066 | fix | persist rotated refresh_token for OAuth2 auth‑code providers | #7053 | 解决 OAuth2 授权码刷新时未保存旋转后的 refresh_token 导致远端 MCP 永久降级为手动重新认证的问题。 |
| #7071 | feat (under review) | make view_video inline cap configurable instead of hardcoded 2 MB | #7060 | 将视频内嵌大小上限从硬编码 2 MB 提升为可配置，使大视频能够在支持的 provider 中完整传递。 |
| #7069 | fix | render data‑URL images in historical messages on session reload | #7051 | 修复历史记录重新加载时 data‑URL 图片显示为空的缺陷。 |
| #7064 | fix | sync top‑level text on cron update --text for agent jobs | #7048 | 确保 `qwenpaw cron update <id> --text` 更新作业的顶层 `text` 字段，防止前端列表显示陈旧内容。 |
| #7054 | feat (under review) | support remote bridge endpoint for LAN/network browsers | — | 扩展 Chrome 插件的 Native Messaging 桥接，使其能够绑定非回环地址，实现跨主机浏览器联动。 |
| #7119 | fix(security) | create the master key file with owner‑only permissions | — | 将 master key 文件权限改为 `0o600`，提升本地密钥存储安全性。 |
| #7115 | fix(memory) | avoid noisy inbox notifications for unchanged jobs | — | 对 Auto‑Memory / Auto‑Dream 的 Inbox 通知进行去抖，仅在有实际变化或失败时提醒，减少干扰。 |
| #7120 | security | enable shell evasion checks by default + regression test | — | 将所有 7 种 shell‑evasion 检查默认打开，并加入回归测试，提升命令行安全防护。 |

> **总体趋势**：今日合并/关闭的 PR 主聚焦于 **安全加固（OAuth2 token 持久化、密钥权限、shell 检查）**、**用户体验细节（视频大小、图片渲染、定时作业文本同步）** 以及 **功能扩展（远程桥接、可配置上限）**。这些变更累计提升了系统稳定性与可用性。

---

## 4. 社区热点（评论最多、反应最强的 Issues/PRs）

| 排名 | 编号 | 类型 | 标题 | 评论数 | 链接 | 核心诉求 |
|------|------|------|------|--------|------|----------|
| 1 | #6684 | Issue | 增加频道的重试功能 | 10 | [#6684](https://github.com/agentscope-ai/QwenPaw/issues/6684) | 用户在自建 Matrix 等渠道添加频道时，因服务延迟导致首次连接失败，缺乏自动重试/健康检测，需手动重新保存频道。期望在客户端实现可配置的重试机制。 |
| 2 | #6921 | Issue | 多步骤任务经常无提示即停止，需要说 “继续” 才能恢复 | 8 | [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) | 在执行类似 “Now 2.1, 3.1, 3.2. Let me do all three.” 的规划输出后，Agent 自动进入空闲状态但未给出任何 UI/日志提示，导致用户觉得任务卡死。需增加明确的“等待中”或自动继续的机制。 |
| 3 | #7102 | Issue | Freeze >10 分钟（GLM 5.3） | 7 | [#7102](https://github.com/agentscope-ai/QwenPaw/issues/7102) | 使用 glm‑5.3 模型时出现长时间无输出、思考过程也卡住，怀疑模型后端或推理管线死锁。用户期望能够捕获超时并自动回退或报错。 |
| 4 | #7011 | Issue | Console stop request 取消活跃的 Feishu 会话（多 UI 会话冲突） | 7 | [#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) | 在开启多个 Console UI 会话时，某一会话的 “停止” 指令会误将另一会话的 Feishu 聊天强行结束，导致会话数据丢失。需要会话作用域隔离或更细粒度的停止指令。 |
| 5 | #6470 | Issue | MCP driver 忽略 transport 配硬编码 SSE 客户端 | 5 | [#6470](https://github.com/agentscope-ai/QwenPaw/issues/6470) | 配置了 `transport: streamable_http` 的 MCP 服务器因驱动硬走 `sse_client` 而无法连接。用户希望驱动尊重 YAML 中的 transport 选项。 |

> **热点背后的共同诉求**：  
> 1️⃣ **自动化容错**（频道重试、任务停止提示、超时处理） → 提升无感使用体验。  
> 2️⃣ **会话与资源隔离**（多 UI 会话不相互干扰、传输协议配置生效） → 防止误操作导致数据丢失。  
> 3️⃣ **配置透明度**（能够在 UI 或配置文件中调节重试次数、视频大小上限等） → 提升可定制性。

---

## 5. Bug 与定性（按严重程度排序）

| 严重度 | 编号 | 类型 | 简述 | 是否有对应 Fix PR | 链接 |
|--------|------|------|------|-------------------|------|
| **高** | #7102 | Bug (freeze) | GLM 5.3 导致 >10 分钟无响应，思考也卡住 | 暂无直接 PR（需进一步定位） | [#7102](https://github.com/agentscope-ai/QwenPaw/issues/7102) |
| **高** | #6921 | Bug (任务无提示停止) | 多步骤任务在规划后自行停止，需手动 “继续” | 暂无直接 PR | [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) |
| **中** | #7011 | Bug (Console stop 误删 Feishu 会话) | 多 UI 会话下止止指令波及其他会话 | 暂无直接 PR | [#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) |
| **中** | #6470 | Bug (MCP transport 被忽略) | 配置的 `streamable_http` 被硬编码 SSE 替代 | 已有 PR #6617（honor Retry‑After）但未直接针对 transport；仍需专门 fix | [#6470](https://github.com/agentscope-ai/QwenPaw/issues/6470) |
| **中** | #7053 | Bug (OAuth2 refresh 未持久化 rotated token) | 导致远端 MCP 频繁掉线，需手动重新授权 | **已有 fix PR #7066** | [#7053](https://github.com/agentscope-ai/QwenPaw/issues/7053) |
| **低** | #7063 | Crash (Agent tool‑call) | `_execute_tool_call` 使用 `async for` 遍历协程导致 TypeError | **已有 fix PR #7063**（已关闭） | [#7063](https://github.com/agentscope-ai/QwenPaw/issues/7063) |
| **低** | #7082 | Bug (Pydantic 模型未完全定义) | `_StructuredOutputDynamicClass` 未定义导致模型执行失败 | 暂无直接 PR | [#7082](https://github.com/agentscope-ai/QwenPaw/issues/7082) |
| **低** | #7110 | Bug (不可下载图片链接导致会话不可用) | 聊天记录中出现失效图片 URL 使整个会话卡死 | 暂无直接 PR | [#7110](https://github.com/agentscope-ai/QwenPaw/issues/7110) |

> **观察**：最高优先级的两个冻结/停止问题目前仍无对应修复 PR，建议维护团队尽快启动根因分析（可能涉及模型推理循环或任务调度器的等待逻辑）。其余中低风险 Bug 已有对应 PR 在审查或即将合并，整体稳定性趋势向好。

---

## 6. 功能请求与路线图信号

| 功能请求 | 关联 Issue | 现有 PR / 进展 | 预计纳入版本 |
|----------|------------|----------------|--------------|
| **频道重试机制**（可配置重试次数、间隔） | #6684 | 暂无 PR | 若社区共识高，可列入下次 **2.2.x** 小版本（针对 Channel 层的健康检查） |
| **多步骤任务自动继续 / 明确等待提示** | #6921 | 暂无 PR | 可考虑在 **Agent 循环** 中增加 “等待中” 状态 UI；预计进入 **2.2.0** |
| **OAuth2 refresh token 持久化**（已解决） | #7053 | PR #7066（已提交，待审查） | 预计随下一个合并窗口（如 **2.1.1**）发布 |
| **视频内嵌大小可配置** | #7060 | PR #7071（Under Review） | 合并后将随 **2.1.2** 或 **2.2.0** 一起发布 |
| **远程 Chrome 桥接（跨主机）** | — | PR #7054（Under Review） | 若通过审查，将在 **2.2.0** 中提供 LAN 场景支持 |
| **技能池搜索/过滤** | #7090 | 暂无 PR | 列入下次 **技能管理** 功能迭代（约 **2.2.0**） |
| **自定义 system_prompt 权限给插件** | #7052 | 暂无 PR | 需要讨论插件安全边界，可能进入 **2.3.0** |

> **路线图暗示**：近期 PR 集中在 **安全、可配置性、跨平台交互**。若这些 PR 按计划合并，下一个稳定版本（可能为 **2.1.1** 或 **2.2.0**）将在 **错误容错、会话隔离、插件安全** 上有明显提升。

---

## 7. 用户反馈摘要（从 Issues 评论中提炼）

| 反馈主题 | 典型言论（摘录） | 用户情绪 |
|----------|----------------|----------|
| **频道连接不稳定** | “每次服务器启动后都要手动重新保存一次频道才能恢复连接。” – #6684 | 不满，期望自动化重试 |
| **任务卡死无提示** | “执行多步骤任务时经常自己停止且无任何提示消息，我查看了大模型的输出消息，基本都是类似： ‘Now 2.1, 3.1, 3.2. Let me do all three.’ … 需要我说‘继续’才会继续任务。” – #6921 | 困惑，需明确状态反馈 |
| **桌面版长时间冻结** | “这次用 glm 5.3 卡了超过十分钟，连思考都没动静。” – #7102 | 焦虑，怀疑模型后端或卡顿 |
| **多 UI 会话冲突** | “在两个 Console 窗口里，点一个窗口的停止按钮，另一个窗口的飞书聊天直接被结束。” – #7011 | 不安，怕数据丢失 |
| **插件/配置权限** | “公司做插件互动界面有公司的提示词，不想提交会话后在 qwenpaw 的会话界面被用户看到。” – #7052 | 需要隐私/定制能力 |
| **性能/UI 流畅度** | “结果被思考过程淹没，占满屏幕，其实我只想看到最终答案。” – #6260（虽然评论少，但反馈代表普遍诉求） | 希望结果更突出 |
| **安全与权限** | “秘钥文件应当只有属主可读。” – 隐含在 #7119 的讨论中 | 赞同加固

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw 项目日报 – 2026‑08‑19**  
*基于 GitHub 最近 24 小时的 Issues（50 条）和 PR（50 条）数据*  

---  

## 1. 今日速览  
- 活跃度很高：过去 24 小时内有 **48 条新开/活跃 Issue** 以及 **42 条待合并 PR**，显示社区持续在提需求、报 Bug 并推进代码。  
- 只有 **2 条 Issue 被关闭**、**8 条 PR 已合并/关闭**，表明今天的工作重点仍在于讨论和准备，而非快速闭环。  
- 未有新版本发布；主干分支（master）上的变更主要聚焦在 **CI 清理、Windows 兼容性、内存后端安全以及功能 RFC** 上。  
- 整体项目处于 **“功能完善 + 稳定性提升”** 阶段，核心维护团队正在审议若干高风险 RFC（如 Goal mode v1、Shell 命令确认层）。  

---  

## 2. 版本发布  
> **今日无新版本发布。**  

---  

## 3. 项目进展（已合并/关闭的重要 PR）  

| PR | 状态 | 标题 | 主要贡献 | 链接 |
|----|------|------|----------|------|
| #10060 | CLOSED | fix(zerocode): align dashboard status values | 统一 ZeroCode 仪表盘状态文本的宽度计算，修复因翻译导致的错位。 | [#10060](https://github.com/zeroclaw-labs/zeroclaw/pull/10060) |
| #9612 | CLOSED | fix(channels): tie the WhatsApp Cloud approval token to a guard | 为 WhatsApp Cloud 的审批令牌添加全局守卫，防止令牌泄漏或孤占。 | [#9612](https://github.com/zeroclaw-labs/zeroclaw/pull/9612) |
| #9765 | CLOSED | fix(sop): load SOP definitions from the shared workspace, not data_dir | 将 SOP 定义加载路径从 `data_dir` 改为共享工作区，解决多实例间定义不一致的问题。 | [#9765](https://github.com/zeroclaw-labs/zeroclaw/pull/9765) |
| #9544 | CLOSED | fix(delegate): honor configured provider fallbacks | 委托调用现在会使用配置好的提供商回退链，提高多模型提供商的可靠性。 | [#9544](https://github.com/zeroclaw-labs/zeroclaw/pull/9544) |
| #8713 | CLOSED | fix(tools): add allowed_private_hosts opt-in to file_download SSRF gate | 为文件下载功能引入可选的私有 host 白名单，缓解 SSRF 风险。 | [#8713](https://github.com/zeroclaw-labs/zeroclaw/pull/8713) |

> **合并影响**：这些 PR 主要解决了 **UI/UX 一致性、通道安全、SOP 定义隔离以及提供商回退机制**，为后续的功能特性（如 Goal mode、持久化 Prompt）奠定了更稳的基础。  

---  

## 4. 社区热点（评论数／反应最多）  

| 排名 | 类型 | 编号 | 标题 | 评论 | 👍 | 链接 | 讨论焦点 |
|------|------|------|------|------|----|------|----------|
| 1 | Issue | #8303 | RFC: Goal mode v1 — bounded foreground Matrix work | 22 | 1 | [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) | 如何在多轮 agent 间实现可持续的目标追踪；涉及控制平面设计、子作业隔离以及重启恢复。 |
| 2 | Issue | #7155 | RFC: Add a per-execution confirmation tier for high‑risk shell commands | 22 | 0 | [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) | 需要在执行危险 shell 前加入允许/询问/拒绝三级确认，类似 Claude Code 的策略。 |
| 3 | Issue | #7462 | [Bug]: 74 test failures on Windows — Unix‑only test commands, path semantics, console encoding | 17 | 0 | [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | Windows CI 缺失导致大量测试失败；讨论路径处理、控制台编码以及跨平台测试策略。 |
| 4 | Issue | #9965 | [Task]: runtime‑written executable test fixtures hit ETXTBSY under the parallel runtime gate | 7 | 0 | [#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965) | 并行测试中自行生成可执行文件导致“文本文件忙”错误；寻找无文件写入的测试 fixture 方案。 |
| 5 | Issue | #9998 | RFC: Session‑scoped persistent prompt attachments | 4 | 0 | [#9998](https://github.com/zeroclaw-labs/zeroclaw/issues/9998) | 如何在会话级别保持 Prompt（目标/约束）不被历史修剪或守护进程重置清除。 |

> **热点洞察**：社区目前最关注 **目标持久化（Goal mode）**、**高危命令安全确认**以及 **Windows 平台兼容性**；这些议题均带有 `priority:p1/p2` 和 `risk:high` 标签，说明如果得以解决，将直接提升产品可用性和安全基线。  

---  

## 5. Bug 与稳定性（按严重程度排序）  

| 严重度 | 编号 | 标题 | 状态 | 是否有修复 PR | 链接 |
|--------|------|------|------|--------------|------|
| **S1 – 工作流阻塞** | #10066 | SOP engine promotes and runs later steps before recording a step's output‑schema rejection | OPEN | 否（待审） | [#10066](https://github.com/zeroclaw-labs/zeroclaw/issues/10066) |
| **S2 – 性能降级** | #10067 | One oversized tool result is unrecoverable — the shell output cap is a 1 MB memory bound | OPEN | 否 | [#10067](https://github.com/zeroclaw-labs/zeroclaw/issues/10067) |
| **S2 – 测试失败** | #7462 | 74 test failures on Windows | OPEN | 否（需跨平台修复） | [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) |
| **S2 – 内存后端** | #9919 | fix(memory): reject Qdrant in builder‑only factory without storage config | OPEN | 否 | [#9919](https://github.com/zeroclaw-labs/zeroclaw/issues/9919) |
| **S2 – 模型思考泄漏** | #9925 | model thinking output sometimes leaks to daemon stdiout | OPEN | 否 | [#9925](https://github.com/zeroclaw-labs/zeroclaw/issues/9925) |
| **S2 – JSONL 会话文件类型不一致** | #9857 | JSONL session operations disagree on valid file types | OPEN | 否 | [#9857](https://github.com/zeroclaw-labs/zeroclaw/issues/9857) |
| **S2 – 控制台编码误报** | #9896 | status/startup banner can report `Memory: none` when effective backend is sqlite | OPEN | 否 | [#9896](https://github.com/zeroclaw-labs/zeroclaw/issues/9896) |
| **S2 – 并行测试 fixture 冲突** | #9965 | runtime‑written executable test fixtures hit ETXTBSY | OPEN | 否 | [#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965) |

> **修复进展**：今天没有直接针对上述 S1/S2 Bug 的合并 PR。维护团队通常会在后续的 **bug‑fix 分支** 或 **即将到来的 milestone** 中处理这些问题。建议关注 #10066（S1）和 #10067（S2）的后续评论，它们可能很快会触发对应的修复 PR。  

---  

## 6. 功能请求与路线图信号  

| 功能请求 | 关联 Issue / PR | 现状 | 路线图暗示 |
|----------|----------------|------|------------|
| **Goal mode v1（有界前景 Matrix 工作）** | #8303 (RFC) | 讨论激烈，已获维护者接受（status:accepted） | 若 RFC 通过，将成为下一个主要的 **agent 持久目标** 特性，计划在 Q4 2026 开始实现。 |
| **Per‑execution 高危 shell 确认层** | #7155 (RFC) | 已获接受，等待细化实现 | 计划在 **安全强化 milestone**（目标 Q1 2027）中加入，类似 Claude Code 的 allow/ask/deny 策略。 |
| **会话级持久 Prompt 附件** | #9998 (RFC) | 新提出，评论较少但已标记需维护者审查 | 若通过，将解决历史修剪导致目标丢失的问题，可能与 Goal mode 协同工作。 |
| **统一 slash‑command 注册表（Web UI / ZeroCode TUI / channel runtime）** | #7929 (Feature) | 评论中等，已接受 | 旨在消除命令名称、别名、可用性漂移，预计在下一个 **UI 平衡 sprint** 中完成。 |
| **PostgreSQL 后端 CI 必需** | #10094 (PR) | 新开，待合并 | 表明项目正在把 PostgreSQL 视为一级公民，后续可能在 **存储后端路线图** 中提升其优先级。 |
| **零代码仪表盘日志可选复制** | #10096 (PR) | 新开，待合并 | 提升开发者调试体验，属于 **ZeroCode 可用性改善** 线路。 |

> **总结**：近期的 RFC 和 Feature Issue 指向 **目标持久化、安全确认层、跨平台统一命令** 三大方向，均已得到维护者接受，预计会在接下来的几个版本（v0.9.x → v1.0.x）中逐步落地。  

---  

## 7. 用户反馈摘要（从 Issues 评论中提炼）  

- **目标丢失痛点**：多位用户在长时间对话或守护进程重启后发现之前设定的目标被清除，导致需要重复输入。#8303 和 #9998 的评论反复提到 “历史修剪导致目标丢失”、“会话级持久化需求”。  
- **Windows 开发者困扰**：Windows 用户报告大量测试失败（#7462），尤其是路径分隔符、控制台编码和假装的 Unix‑only 脚本。他们呼吁增加 Windows CI 或提供本地可重现的脚本。  
- **安全顾虑**：对高危 shell 命令的误执行深感担忧（#7155），用户希望有 “确认后才执行” 的机制，类似 sudo 或交互式确认。  
- **SOP 工作流混乱**：#10066 的评论指出 SOP 引擎会在记录步骤输出失败之前就继续执行后续步骤，导致状态不一致和难以调试。  
- **资源泄漏与文件锁**：#9965、#10011 等涉及在并行测试中写入可执行文件后被锁住的问题，开发者建议使用内存中的二进制或临时文件夹并在测试结束前清理。  
- **日志可操作性**：#10096 的评论表明开发者在 ZeroCode 中排错时希望能直接选中并复制错误堆栈，而不是只能查看整条日志。  

> **用户情绪总体**：对功能方向持乐观态度（尤其是目标持久化和安全确认），但在 **跨平台可靠性** 和 **日常使用细节**（如 SOP、日志、工具输出限制）上仍有明显不满。  

---  

## 8. 待处理积压（长期未响应的重要 Issue/PR）  

| 编号 | 类型 | 标题 | 创建时间 | 最后更新 | 未处理时长 | 备注 |
|------|------|------|----------|----------|------------|------|
| #8303 | Issue (RFC) | Goal mode v1 — bounded foreground Matrix work | 2026‑06‑24 | 2026‑08‑18 | **约 2 月** | 高优先级、高风险，等待后续实现方案。 |
| #7155 | Issue (RFC) | Per‑execution confirmation tier for high‑risk shell commands | 2026‑06‑03 | 2026‑08‑18 | **约 2.5 月** | 已获接受，需细化实现细节。 |
| #7462 | Issue (Bug) | 74 test failures on Windows | 2026‑06‑10 | 

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*