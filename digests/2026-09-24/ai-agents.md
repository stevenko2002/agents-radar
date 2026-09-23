# OpenClaw 生态日报 2026-09-24

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-23 22:15 UTC

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



# OpenClaw 项目动态日报 — 2026-09-24

---

## 1. 今日速览

OpenClaw 过去 24 小时处于**高强度活跃状态**：Issues 与 PR 各 500 条更新，新开/活跃 459 条，已关闭 41 条；PR 待合并 424 条，已合并/关闭 76 条。**无新版本发布**，但社区活跃度极高，多个 P0 级稳定性问题（内存泄漏、更新失败、启动超时）持续发酵，同时功能迭代也在并行推进（WhatsApp 审计、Gemini Interactions 后端、拖拽缩放 UI 等）。整体健康度偏冷——**稳定性债务累积速度超过修复速度**，已成为当前版本的最大风险。

---

## 2. 版本发布

**无新版本发布。** 最近一次发布为 2026.9.5（ec9c1a1），当前主线上已有多项针对 2026.9.5 回归问题的修复 PR 在审阅中。

---

## 3. 项目进展

今日无明确标记为已合并的 PR，但以下 PR 处于活跃状态，预示着近期将有实质推进：

| PR | 标题 | 状态 |
|---|---|---|
| [#156784](https://github.com/openclaw/openclaw/pull/156784) | perf(gateway): share model auth status across clients | 🟡 needs proof |
| [#156543](https://github.com/openclaw/openclaw/pull/156543) | fix(workers): bind workspace recovery to its session source | 🟡 needs proof |
| [#156121](https://github.com/openclaw/openclaw/pull/156121) | fix(sessions): avoid Gateway stalls on cold session reads | ⏳ waiting on author |
| [#156802](https://github.com/openclaw/openclaw/pull/156802) | fix: send delayed session replies through the original account | 🟡 needs proof |
| [#149880](https://github.com/openclaw/openclaw/pull/149880) | feat(gemini): add google-interactions api backend | 👀 ready for maintainer |
| [#145093](https://github.com/openclaw/openclaw/pull/145093) | feat(control-ui): drag-to-resize chat composer and chat column | 👀 ready for maintainer |

**关键进展信号：**
- **性能优化**：`#156784` 直击 Gateway 多客户端连接时重复进行模型认证的性能瓶颈（96 连接 → 5098 次/小时 authStatus 调用），属于高价值基础设施修复。
- **会话稳定性**：`#156121` 和 `#156543` 分别从冷读和工作区恢复两个维度解决 Gateway 卡顿，与当前 P0 级 Issues 形成呼应。
- **新功能**：Gemini Interactions API 后端（`#149880`）和 Control UI 拖拽缩放（`#145093`）是近期少有的面向用户的功能增强。

---

## 4. 社区热点

### 评论最多的 Issues（Top 10）

| Issue | 标题 | 评论 | 👍 | 关键标签 |
|---|---|---|---|---|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Critical: Gateway Memory Leak — RSS grows from 350MB to 15.5GB | 39 | 1 | P0, crash-loop, stable |
| [#144911](https://github.com/openclaw/openclaw/issues/144911) | MCP server init timeout crashes the Gateway | 29 | 0 | P1, crash-loop |
| [#80319](https://github.com/openclaw/openclaw/issues/80319) | QA tool-defaults suite conflates Codex-native tools | 17 | 1 | P2 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | OpenClaw leaks unreaped hook/tool child processes | 16 | 1 | P1, crash-loop |
| [#152981](https://github.com/openclaw/openclaw/issues/152981) | Gateway startup hangs for ~17 minutes at sidecars.model-runtime | 15 | 0 | P0, regression |
| [#85030](https://github.com/openclaw/openclaw/issues/85030) | MCP tools not injected into subagent sessions | 15 | 6 | P1, CLOSED |
| [#53408](https://github.com/openclaw/openclaw/issues/53408) | Write/exec tool parameters silently dropped after long conversations | 14 | 2 | P2 |
| [#110190](https://github.com/openclaw/openclaw/issues/110190) | Runtime context carrier positioned AFTER user message | 13 | 1 | P1 |
| [#140010](https://github.com/openclaw/openclaw/issues/140010) | Sleep/resume on Windows: WebSocket reconnects fail 30-60s+ | 12 | 0 | P1 |
| [#121617](https://github.com/openclaw/openclaw/issues/121617) | Post-compaction guard misclassifies "nothing new to compact" | 11 | 0 | P1 |

### 热点分析

- **#91588（39 评论）** 是绝对的社区焦点——Gateway 内存泄漏从 350MB 膨胀至 15.5GB，直接触发 OOM killer 循环重启。这是典型的长期潜伏型缺陷，影响所有生产环境用户，且已标记为 `maturity:stable`，说明问题在稳定版本中复现。
- **#144911（29 评论）** 反映 MCP 生态集成仍不稳定：stdio MCP 服务器的 30s 初始化超时处理存在未处理的 promise rejection，导致整个 Gateway 崩溃。
- **#85030（15 评论，已关闭）** 虽已关闭，但 6 个 👍 反映了 MCP 工具注入 subagent 的需求十分迫切，社区期待后续彻底修复。

---

## 5. Bug 与稳定性

### P0 级（最高优先级）

| Issue | 描述 | 已有 Fix PR |
|---|---|---|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway 内存泄漏，RSS 350MB→15.5GB，反复 OOM 崩溃 | ❌ 无 |
| [#152981](https://github.com/openclaw/openclaw/issues/152981) | Gateway 启动挂起 ~17 分钟后超时失败（回归） | ❌ 无 |
| [#156712](https://github.com/openclaw/openclaw/issues/156712) | `openclaw triage` 修复子进程不退出，持有 gateway-lifecycle 锁 | ❌ 无 |
| [#152804](https://github.com/openclaw/openclaw/issues/152804) | 2026.9.5 回归：minimax-portal 模型目录丢失 | ❌ 无 |
| [#152886](https://github.com/openclaw/openclaw/issues/152886) | 2026.9.5 回归：Codex/model-catalog 启动在 /tmp 留多 GB 构建残留 | ❌ 无 |
| [#71689](https://github.com/openclaw/openclaw/issues/71689) | tasks registry 在畸形 SQLite 镜像上恢复失败 | ❌ 无 |

### P1 级（高优先级）

| Issue | 描述 | 已有 Fix PR |
|---|---|---|
| [#144911](https://github.com/openclaw/openclaw/issues/144911) | MCP server init 超时触发未处理 rejection 崩溃 Gateway | ❌ 无 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | Hook/tool 子进程泄漏，僵尸进程累积 | ❌ 无 |
| [#110190](https://github.com/openclaw/openclaw/issues/110190) | Runtime context carrier 位置错误导致模型混淆 | ❌ 无 |
| [#140010](https://github.com/openclaw/openclaw/issues/140010) | Windows 睡眠/唤醒后 WebSocket 重连失败 30-60s+ | ❌ 无 |
| [#121617](https://github.com/openclaw/openclaw/issues/121617) | Compaction guard 误判为终端失败 | ❌ 无 |
| [#128140](https://github.com/openclaw/openclaw/issues/128140) | memory_search tool 超时（CLI 正常） | ❌ 无 |
| [#138272](https://github.com/openclaw/openclaw/issues/138272) | Android Talk (gateway-relay) 无响应 owner 掉落 | ❌ 无 |
| [#84983](https://github.com/openclaw/openclaw/issues/84983) | Native cron agent-turn 饱和 Gateway 事件循环 | ❌ 无 |
| [#137488](https://github.com/openclaw/openclaw/issues/137488) | Dispatched run completion announce 路由错误 | ❌ 无 |
| [#121661](https://github.com/openclaw/openclaw/issues/121661) | CLI 子 agent announce-wake 模型伪造工具调用 | ❌ 无 |
| [#138599](https://github.com/openclaw/openclaw/issues/138599) | Auto-compaction 死锁（compaction 模型上下文溢出） | ❌ 无 |
| [#138342](https://github.com/openclaw/openclaw/issues/138342) | Discord 插件被 openKeyedStore 信任检查拒绝 | ❌ 无 |

### 关键观察

- **P0 问题中，#91588（内存泄漏）和 #152981（启动挂起）是当前最严重的两个，均无 fix PR。**
- 2026.9.5 版本引入了多个回归（#152804、#152886、#152981），说明该版本的质量控制存在明显问题。
- 多个 P0/P1 问题标记为 `clawsweeper:no-new-fix-pr`，意味着自动化 issue 管理系统已限制新 fix PR 的提交——这可能阻碍社区贡献者参与修复。

---

## 6. 功能请求与路线图信号

### 高价值功能请求

| Issue | 描述 | 关联 PR |
|---|---|---|
| [#44309](https://github.com/openclaw/openclaw/issues/44309) | A2A handoff 单向 dispatch 模式（无 ping-pong） | 无 |
| [#51572](https://github.com/openclaw/openclaw/issues/51572) | session-memory hook 触发范围扩展至 reset/prune | 无 |
| [#71058](https://github.com/openclaw/openclaw/issues/71058) | 单 Gateway 多 Azure/Teams bot 支持 | 无 |
| [#46844](https://github.com/openclaw/openclaw/issues/46844) | Talk Mode 空闲超时/自动停用 | 无 |
| [#50481](https://github.com/openclaw/openclaw/issues/50481) | Slack assistant.threads.setSuggestedPrompts | 无 |
| [#138279](https://github.com/openclaw/openclaw/issues/138279) | Linux aarch64 companion builds (deb + AppImage) | [#145915](https://github.com/openclaw/openclaw/pull/145915) |

### 路线图判断

- **多 bot 支持（#71058）** 和 **A2A 单向 dispatch（#44309）** 是架构级增强，若纳入将显著扩展 OpenClaw 在企业多团队场景的适用性。
- **Linux aarch64 支持** 已有 CI 验证 PR（#145915），有望近期落地。
- **Gemini Interactions 后端（#149880）** 表明 OpenClaw 正在积极扩展模型提供商生态。

---

## 7. 用户反馈摘要

### 核心痛点

1. **更新体验极差**：多位用户报告 2026.9.3→9.4→9.5 的更新链路中出现 `global-install-failed`（#146394）、`runtime-verification-failed`（#145510）、`finalize:doctor`（#147160）等失败。用户不得不用 `npm install -g openclaw@2026.9.5` 手动升级（#152804），说明自动更新器的可靠性亟待修复。

2. **长时间会话的稳定性问题**：#53408（write/exec 参数静默丢失）、#151962（幽灵用户消息）、#140129（Anthropic 缓存卡死）均与长会话相关，表明上下文管理存在系统性缺陷。

3. **Windows 平台体验**：#140010（睡眠/唤醒后 WebSocket 断连）、#152981（启动挂起）均涉及 Windows，说明该平台的兼容性测试覆盖不足。

4. **MCP 生态不成熟**：#144911（MCP 初始化超时崩溃）、#85030（MCP 工具未注入 subagent）反映 MCP 集成仍处于早期阶段，文档和稳定性都需要加强。

5. **模型提供商回归频繁**：#152804（minimax-portal 模型目录丢失）、#152886（Codex 构建残留）说明模型提供商适配的回归测试不足。

### 用户满意度信号

- #85030 有 6 个 👍，说明社区对 MCP 工具注入 subagent 的需求非常强烈。
- #44134（Google Antigravity 被封号）虽然严重，但用户进行了深入的根因分析并提交了高质量报告，体现了社区的参与度。
- #135272（macOS companion UI-control 间歇失败）和 #140723（WebChat 文本重复）属于用户体验层面的 bug，影响日常使用感受。

---

## 8. 待处理积压

以下 Issue/PR 已长时间未获响应，建议维护者关注：

| Issue/PR | 标题 | 创建日期 | 最后更新 | 积压天数 |
|---|---|---|---|---|
| [#44309](https://github.com/openclaw/openclaw/issues/44309) | A2A handoff 单向 dispatch 模式 | 2026-03-12 | 2026-09-23 | ~196 天 |
| [#51572](https://github.com/openclaw/openclaw/issues/51572) | session-memory hook 触发范围扩展 | 2026-03-21 | 2026-09-23 | ~187 天 |
| [#71058](https://github.com/openclaw/openclaw/issues/71058) | 多 Azure/Teams bot 支持

---

## 横向生态对比



以下是根据各项目 2026-09-24 的 GitHub 动态整理的「今日为重点」摘要：

---

### 📌 重要更新（8 条）

#### 1. **NanoClaw 发布 v2.4.0 版本**（[qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)）
*   **更新内容**：重构网关架构，将 OneCLI 提取为可安装的 Skill 组件；新增 **Iron Proxy** 网关、**Mattermost** 通道，重写 OpenCode Provider，并引入细粒度的模型与推理速度控制。
*   **影响或意义**：标志着项目在多网关支持、渠道扩展和架构模块化上迈出了关键一步。

#### 2. **LobsterAI 发布 2026.9.23 版本**（[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)）
*   **更新内容**：上线实验性 Jev 决策模型工具（BYO-key）；增强协同工作流，实时显示步骤进度与代码差异，并统一了活动步骤渲染组件；同时修复了配置热重载失效和插件异常导致网关无法启动的问题。
*   **影响或意义**：提升了平台在 AI 决策集成、协同工作体验以及生产环境配置变更时的系统健壮性。

#### 3. **NullClaw 合并多项关键稳定性修复**（[nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)）
*   **更新内容**：修复了 stdio MCP 初始化无限挂起（#996）、调度器配对 token 未持久化导致鉴权失败（#980）、aarch64 平台 Telegram 消息触发 SIGSEGV 崩溃（#985），并新增了 `auto_recall`、`max_context_bytes` 等记忆与上下文控制配置（#979）。
*   **影响或意义**：显著降低了自托管和弱设备场景下的崩溃率，增强了渠道守护进程的自愈与鉴权能力。

#### 4. **Hermes Agent 完成桌面端渲染大扫荡**（[nousresearch/hermes-agent](https://github.com/nousresearch/hermes-agent)）
*   **更新内容**：通过 PR #120692 一次性修复了 37 个桌面端（Desktop）渲染相关问题，包括实时气泡重复、部分 receipts 导致的回复消失、失败 turn 的残留渲染以及纯推理流异常。
*   **影响或意义**：大幅改善了 Desktop（Electron）端长期存在的聊天渲染不一致与前后端状态同步延迟问题。

#### 5. **OpenClaw 推进性能优化与新模型后端集成**（[openclaw/openclaw](https://github.com/openclaw/openclaw)）
*   **更新内容**：PR #156784 共享跨客户端的模型认证状态，将每小时数千次的重复认证调用降至最低；PR #149880 新增了 Gemini Interactions API 后端。
*   **影响或意义**：缓解了多客户端连接下的网关性能瓶颈，同时扩展了对 Google 模型生态的原生支持。

#### 6. **CoPaw 重构 SDK 与应用控制平面**（[agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)）
*   **更新内容**：PR #7874 重新设计了 SDK 和应用控制平面（PawApps）

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



好的，这是根据您提供的 NanoBot GitHub 数据生成的 2026-09-24 项目动态日报。

---

### **NanoBot 项目动态日报 - 2026-09-24**

#### **1. 今日速览**
NanoBot 项目在今日展现出极高的开发活跃度与社区参与度。过去24小时内，核心开发团队专注于上下文压缩机制的稳定性与性能优化，同时推进了 WebUI 功能和内存管理的增强。项目整体健康度优秀，多个关键 Bug 得到修复，新功能（如 IO Intelligence provider）的集成进一步丰富了生态。活跃的 PR 提交（35条）表明开发节奏紧凑，项目正处于快速迭代期。

#### **2. 版本发布**
*   **无新版本发布**。今日无新的 Release。

#### **3. 项目进展**
今日有大量 PR 得到合并或关闭，标志着多个重要功能的完善与关键 Bug 的修复：
*   **核心稳定性增强**：多个 PR 直指上下文压缩（Compaction）相关的严重 Bug，如修复并发写入冲突（#5884）、恢复 Codex 原生压缩状态（#5883）、处理超大文件读取结果（#5880）等，显著提升了 agent 的稳定性和可靠性。
*   **WebUI 功能扩展**：合并了多项 WebUI 增强 PR，包括统一会话文件与网站预览（#5847）、添加使用量统计与活动日历（#5851）、在回复中交付图片结果（#5848）等，大幅提升了前端用户体验。
*   **内存与性能优化**：通过为惰性会话摘要缓存设置上限（#5664）、在后台预热备用分词器（#5861）等 PR，优化了内存使用和运行时性能。
*   **新功能集成**：新增了对 IO Intelligence (io.net) provider 的官方支持（#5875），并改进了 Linear 集成的用户体验（#5871）。
*   **开发流程优化**：新增了对技能“仅手动调用”的支持（#5405），为工作流编排提供了更多灵活性。

#### **4. 社区热点**
今日社区讨论的焦点集中在**上下文压缩机制**上，多个相关 Issue 和 PR 引发了深入的技术讨论。
*   **最活跃的 Issue**：`#5879 [OPEN] Large read_file results survive compaction as unsummarized delta and abort the turn`。该问题揭示了上下文压缩后，新产生的工具结果可能因超出预算而导致 turn 中止的边界情况。其对应的修复 PR `#5880` 已提交，表明维护者对此问题的高度重视。
*   **高关注度 PR**：`#5885 [OPEN] feat(memory): gate idle transcript replacement on a token threshold`。该 PR 针对惰性会话压缩可能影响恢复质量的问题，提出了基于令牌阈值的解决方案，反映了社区对 agent 行为质量的关注。
*   **重要功能请求**：`#2152 [CLOSED] Feature: Native WhatsApp voice message support (STT + TTS)`。虽然已关闭，但该 Issue 获得了较多👍，体现了用户对多模态（语音）交互的强烈需求。社区成员已开发出独立技能作为解决方案，但其与核心项目的集成仍存在挑战。

#### **5. Bug 与稳定性**
今日报告的 Bug 严重性较高，但多数已有对应的修复方案。
*   **严重 (P0/P1)**：
    *   `#5879`：大型 `read_file` 结果在压缩后导致 turn 中止。**已有 Fix PR #5880**。
    *   `#5849`：自动压缩路径 `summarize_transcript` 缺乏令牌预算保护，可能导致无法恢复。此问题与 #5879 同源，修复 PR #5885 旨在解决其部分根源。
    *   `#5881`：0.3.5 版本对 `_nanobot` 目录位置的强校验导致多实例部署问题。这是一个新引入的回归问题，需要关注。
*   **中等 (P2)**：
    *   `#5870`：Telegram 上下文压缩通知重复发送。**已有 Fix PR #5780**（停止发送自动压缩通知）。
    *   `#5824`：`read_file` 工具在处理超大行时可能卡住。**已有 Fix PR #5824**。

#### **6. 功能请求与路线图信号**
*   **明确的功能需求**：
    *   **语音支持**：WhatsApp 语音消息（STT+TTS）是社区明确的需求信号（#2152）。
    *   **通知功能**：通过 WhatsApp 发送启动通知（#2160）也已提出。
    *   **配置灵活性**：允许用户控制 `_nanobot` 目录位置（#5881）。
*   **路线图信号**：
    *   **可观测性**：Langfuse 追踪（#5520）和更详细的使用量统计（#5851）的 PR 表明，项目正积极增强其监控和成本分析能力。
    *   **WebUI 作为核心界面**：一系列 WebUI PR（#5847, #5848, #5851）表明，项目正致力于将 WebUI 打造为功能完备的交互界面。
    *   **技能系统增强**：支持手动调用（#5405）为构建更复杂、更安全的工作流铺平了道路。

#### **7. 用户反馈摘要**
*   **痛点**：
    *   **上下文压缩的“副作用”**：用户对压缩后通知混乱（#5870）、压缩行为影响对话连续性（#5882）表示困扰。
    *   **部署与配置的割裂**：用户对版本升级后出现的强制性目录变更（#5881）感到不解，认为这增加了部署复杂度。
    *   **功能集成的障碍**：尽管有社区贡献的优秀功能（如语音支持、启动通知），但其与核心项目的集成过程繁琐，影响了用户体验。
*   **满意点**：
    *   项目对社区反馈响应迅速，尤其是对压缩相关 Bug 的修复（#5880, #5884）体现了维护者的负责态度。
    *   WebUI 的持续改进显著提升了用户体验。

#### **8. 待处理积压**
*   **长期未响应 Issue**：`#5290 [CLOSED] Deduplicate the atomic JSONL write idiom across the three JSONL writers` 虽然已关闭，但其指出的代码重复问题是一个典型的长期技术债，值得关注其后续是否真正得到解决。
*   **需持续关注的 PR**：`#4551 [OPEN] feat(heartbeat): add isolated_session config to allow shared session` 提交于2026年6月，至今仍开放，可能因功能特性需要进一步讨论或与主线开发冲突，建议维护者定期评估其状态。

---
**总结**：NanoBot 项目今日在稳定性、功能性和用户体验方面均取得了显著进展。开发重点明确，社区反馈能得到有效响应。项目整体健康，处于积极的发展轨道上。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>



根据您提供的 GitHub 数据，以下是为您生成的 **Hermes Agent 项目动态日报（2026-09-24）**。

---

# 📊 Hermes Agent 项目动态日报 (2026-09-24)

### 1. 今日速览
过去24小时内，Hermes Agent 项目活跃度极高，呈现出**“高强度 bug 修复与架构治理”**的特征。项目共更新了 50 个 Issues（其中 46 个已关闭，表明团队进行了大规模的 issue 清理与 sweep 行动）和 50 个 PR（36 个待合并，14 个已合并/关闭）。今日无新版本发布，但代码库在桌面端渲染稳定性、多 profile 隔离、网关消息投递以及多语言 i18n 本地化方面取得了关键突破，项目整体健康度正从“桌面端渲染混乱”的历史债务中稳步复苏。

---

### 2. 版本发布
*   **无新版本发布**。今日主要处于开发和 PR 审核合并阶段。

---

### 3. 项目进展
今日有多个关键 PR 合并或关闭，推动了项目在桌面端、网关、TUI 及本地化层面的重大进展：

*   **桌面端渲染大扫荡 (PR #120692 - 已关闭)**：针对 53 个未解决的渲染问题进行了审计，一次性修复了 37 个已在主分支上复现的问题。重点解决了实时气泡重复、部分 receipts 导致的回复消失、失败 turn 的残留渲染、Steers（ steering 机制）以及纯推理流的渲染异常，并为每个修复提供了测试用例。
*   **跨平台会话工具链一致性 (PR #120289 - 开放中)**：确保同一个持久化会话在 TUI、Desktop 网关、`hermes -z` / `chat -q --resume` 以及消息网关之间跳转时，发送的 `tools[]` 数组在字节级别完全一致，避免了因表面切换导致的缓存未命中和请求重填。
*   **网关与投递精确性提升**：
    *   **PR #120315**：修复了流式回复超出平台限制（如 Discord 2000 字符、Telegram 4096 字符）时的文本重复和残留问题，确保消息仅完整投递一次。
    *   **PR #120344**：为网关回复、cron 投递和启动发件箱增加了端到端（E2E）测试，通过故障、SIGKILL 和 DST 转换验证精确一次（exactly-once）投递。
*   **桌面端多 Profile 隔离 (PR #120319 - 开放中)**：修复了多 profile 环境下，副 profile 的 API key 错误写入启动 profile `.env` 的问题，并确保新 chat 正确报告并持久化自己的默认模型。
*   **辅助模型调用优化 (PR #120451 - 已关闭)**：针对强制推理模型（reasoning-mandatory models），辅助调用（如 session title）现在直接以最低推理预算发起，避免了因发送 `reasoning: {enabled: false}` 导致的 HTTP 400 错误和进程内重试。
*   **本地化 (i18n) 体系强化**：多条 PR（如 `#120694`, `#120695`, `#120696`, `#120699`, `#120700`）协同推进，修复了侧边栏过滤菜单、看板标签、语音设置描述在中日韩等 locale 下的 Unicode 丢失、硬编码英文及打包缺失 `.lproj` 标记的问题。

---

### 4. 社区热点
今日社区讨论和反馈高度集中在**桌面端（Desktop）聊天消息的渲染异常**上，尤其是重复回复和消息顺序错乱：

*   **Issue #68927 (14条评论)**：用户反馈在长时间任务后，Desktop 端按 Enter 键虽然能将文本送往后端，但前端聊天线程中不渲染用户气泡。这反映了严重的前后端状态同步延迟。
*   **Issue #70108 (13条评论)**：Desktop 端间歇性将一条逻辑助手回复渲染为两个独立的气泡。经验证，`state.db` 中仅有一条记录，说明这是纯粹的前端渲染层重复拉取。
*   **Issue #118670 (12条评论)**：长达 178 秒、包含 4 次工具调用的流式 turn 在实时渲染中被完全复制（DB 中仅有一份）。此类长链路复现问题对用户体验打击巨大。
*   **背后的社区诉求**：用户核心诉求是**桌面端（Electron）的聊天渲染一致性与状态强同步**。社区成员期待团队通过 `#120692` 的 sweep 彻底解决历史遗留的 hydration（ hydration ）竞态问题。

---

### 5. Bug 与稳定性
今日暴露和修复的 Bug 按严重程度排列如下（大部分已随 sweep 关闭）：

| 严重度 | 标题/Issue 号 | 核心问题 | 状态/修复 |
| :--- | :--- | :--- | :--- |
| **P0** | `#119844` | CLI 配置保存时，ruamel 的 round-trip 发射器会静静插入空格，破坏长双引量标量值。 | 已关闭 |
| **P0** | `#120289` (PR) | 跨 TUI/网关切换时，会话工具缓存不一致。 | 已修复 |
| **P1** | `#68927

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报  
**日期**: 2026-09-24  

---

## 1. **今日速览**

- PicoClaw 项目整体维持低活跃度，过去 24 小时内仅有 1 条 Issue 更新（[Issue #3377](https://github.com/sipeed/picoclaw/issues/3377）），表明项目在短时间内无显著功能推进。
- 2 条 PR 更新，其中 1 条进入合并待处理状态，1 条已关闭，整体 PR 处理进度平稳。
- 无新版本发布，项目当前以维护稳定性和修复关键问题为主。
- 最新 Issue 报告的 TLS 证书过期问题已影响项目主站点访问，属于严重稳定性问题。

---

## 2. **版本发布**

暂无新版本发布。

---

## 3. **项目进展**

- 今日合并/关闭的 PR：
  - **[PR #3344](https://github.com/sipeed/picoclaw/pull/3344)** 已关闭  
    - 功能：添加 Build Remote Agent 电话配对支持（协议 `gbr/1`）  
    - 贡献者：LinespottingPrivate  
    - 分析：此 PR 增强了解控 agent 跨设备协作能力，用户可通过手机配对桌面端运行状态。虽已关闭，但功能模块仍具实际价值，后续可作为后续集成参考。

---

## 4. **社区热点**

- 最活跃 Issue：  
  - **[Issue #3377](https://github.com/sipeed/picoclaw/issues/3377)**  
    - 标题：[CRITICAL] TLS certificate for picoclaw.io expired on 2026-09-10 — site is down for every browser  
    - 作者：dimonb | 创建：2026-09-12 | 更新：2026-09-23 | 评论：2 | 👍: 1  
    - 摘要：项目官网 HTTPS 证书于 2026-09-10 到期，导致所有浏览器及 TLS 客户端无法访问 picoclaw.io，严重影响用户访问官网资源与联机功能。  
    - 社区反馈：该问题被标记为 CRITICAL，用户反馈“主站完全不可用”，显示出项目可用性与服务可靠性的显著瓶颈。

---

## 5. **Bug 与稳定性**

- **[Issue #3377](https://github.com/sipeed/picoclaw/issues/3377)**  
  - 类型：服务不可用（Critical）  
  - 描述：TLS 证书过期，官网被浏览器封禁  
  - 状态：OPEN  
  - 影响范围：全局  
  - 当前进展：尚无官方解答或修复进度显示  
  - 建议：需紧急续期证书或更换 CA  Provider，恢复 HTTPS 服务

---

## 6. **功能请求与路线图信号**

- **[PR #3370](https://github.com/sipeed/picoclaw/pull/3370)**  
  - 标题：feat(tools): add Keenable web search provider  
  - 作者：ilya-bogin-keenable  
  - 功能描述：集成 Keenable 作为新的 web search 提供商，默认启用，无需 API Key  
  - 状态：OPEN（待合并）  
  - 社区支持：无评论或 👍  
  - 分析：该功能提升了 PicoClaw 的 AI 工具链能力，符合现代 LLM Agent 常见需求。若合并，可成为下一版本的亮点功能。

---

## 7. **用户反馈摘要**

从 Issue 观察到的用户反馈：

| 用户痛点 | 反馈来源 |
|----------|-----------|
| 官网无法访问，影响使用体验 | Issue #3377 |
| 缺乏对新工具集成的及时响应 | PR #3370 尚未合并 |

> 当前整体来看，用户对站点稳定性表达较大担忧，而对新功能集成的期待有限度，项目社区活跃度偏低。

---

## 8. **待处理积压**

以下 Issue 或 PR 长期悬而未决，需关注：

- **[Issue #3377](https://github.com/sipeed/picoclaw/issues/3377)**  
  - 严重阻塞用户访问官网，属紧急任务  
  - 建议分配专人处理证书续期工作

- **[PR #3370](https://github.com/sipeed/picoclaw/pull/3370)**  
  - 功能实用，已获作者支持，但无后续跟进  
  - 建议项目维护者审阅合并，或明确反馈集成计划

---

**准备人**：AI 项目动态分析智能体  
**数据来源**：GitHub API 镜像数据 | 更新时间：2026-09-24 00:00 UTC+8

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



基于提供的 GitHub 数据，以下是 **2026-09-24 NanoClaw 项目动态日报**。作为专注于 AI 智能体与个人 AI 助手领域的开源项目分析师，我将为您深度剖析该项目的健康度、技术演进及社区动态。

---

# 📊 NanoClaw 项目动态日报 (2026-09-24)

### 1. 今日速览
NanoClaw 项目在过去 24 小时内呈现出**极高活跃度与健康的代码迭代状态**。项目迎来了重要的 **v2.4.0 版本发布**，伴随着大规模的架构重构（特别是将网关抽象为可安装的 Skill 组件）。社区贡献极其活跃，共有 **29 个 PR 更新**（16 个已合并/关闭，13 个待合并）和 **4 个 Issue 更新**。核心维护者（如 `glifocat`、`zvi-fried`）和多位外部贡献者（如 `Koshkoshinsk`、`amit-shafnir`、`chiptoe-svg`）合力推动了网关中台化、更新机制加固以及通道兼容性优化。

---

### 2. 版本发布：v2.4.0
项目已于今日发布 **v2.4.0**，这是一次重要的架构与功能升级。

*   **核心更新内容**：
    *   **凭据网关技能化 (Credential Gateways via Skills)**：引入了通过 Skill 安装的网关机制。默认仍为 OneCLI，但新增了 **Iron Proxy** 网关。
    *   **Echo 社区门户与 Slack 托管应用**：为 Echo 的 hardened image 提供了社区门户配置，并支持托管 Slack 应用。
    *   **细粒度模型与速度控制**：支持安装全局和分组级别的模型与推理速度控制。
    *   **新增 Mattermost 通道**：丰富了即时通讯渠道的支持。
    *   **OpenCode Provider 重构**：重写了 OpenCode 提供商的交互逻辑。
*   **破坏性变更与迁移注意事项**：
    *   网关架构进行了重大重构（OneCLI 被提取为独立的 Skill，见 PR #3816），并集中了凭据网关契约（PR #3815）。现有安装会保留其已选择的网关，但升级时需注意 `update-nanoclaw` 的兼容性（已修复 #3869 和 #3828）。
    *   **通道名称变更**：当 `assistant_name` 未设置时，Agent 的提示名称现在会跟随机器人的显示名称（PR #3875, #3876），这对使用 Slack 或 Teams 的用户意味着提示词中的人设名称会发生微调。

---

### 3. 项目进展：关键合并 PR 分析
今日共有 16 个 PR 成功合并，标志着项目在架构 modular 化、稳定性和生态扩展上迈出了坚实步伐：

*   **架构重构（网关中台化）**：
    *   **[#3816] 提取 OneCLI 为可安装 Skill**：将 OneCLI 的安装和运行时集成封装到 Skill 中，降低了网关扩展的耦合度。
    *   **[#3815] 集中凭据网关契约**：统一了网关贡献、提供商域、会话租约和审批生命周期的主机所有权合同，提升了安全性和可审计性。
    *   **[#3817] 添加 Iron Proxy 网关** 与 **[#3825] OpenCode 支持 Iron Proxy 认证**：新增了 Iron Proxy 网关，并支持通过它进行 API 密钥或 ChatGPT 原生登录，增强了多模型提供商的接入能力。
*   **更新机制与容器稳定性修复**：
    *   **[#3873] 修复更新时容器无法退出的问题**：确保 `/update-nanoclaw` 在有空闲 Agent 容器运行时也能成功切换（修复了 Issue #3828）。
    *   **[#3750] 提取完整 scripts/ 树**：解决了更新控制器因缺少 transitive imports 导致的 `MODULE_NOT_FOUND` 崩溃（修复了 Issue #3869）。
*   **通道与兼容性修复**：
    *   **[#3875], [#3876]**：修复了 Teams 和 Slack 通道中 Bot 显示名称未正确传递给 Bridge 的问题，确保 Agent 名称一致。
    *   **[#3868] 容器升级**：将 Claude Code 升级至 `2.1.280`，Agent SDK 升级至 `0.3.280`，修复了 2.1.267 版本引入的系统提示词重复发送问题。
    *   **[#3867] Codex 钉死版本升级**：将 `/add-codex` 中的 Codex CLI 升级至 `0.155.1`。

---

### 4. 社区热点与焦点议题
以下是当前社区讨论最集中、技术价值最高的 Issue 和 PR：

*   **[Issue #3732] 对话记录轮转（Transcript Rotation）失效问题（未解决）**
    *   **诉求**：用户反馈对于调度频繁（间隔小于

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报
**日期：2026-09-24** ｜ 数据来源：github.com/nullclaw/nullclaw

---

## 1. 今日速览

NullClaw 今日维持**高强度活跃**：过去 24 小时内 17 条 Issue 全部处于活跃状态（新开/更新 17，关闭 0），21 条 PR 有更新，其中 8 条已合并/关闭、13 条待合并，工程吞吐量健康。值得注意的是，今日关闭的 8 条 PR 中多条直接对应长期悬而未决的 Issue（#991、#839、#919 等），说明维护者正在集中清理"高热度老问题"。然而 Issues 侧**零关闭**且积压严重，17 条活跃 Issue 中多条创建于 3–4 月，距今已逾半年，用户侧问题消化速度明显落后于代码合并速度。此外无新版本发布，稳定性类 Bug（Telegram SIGSEGV、网关空转 CPU 100%）仍在等待正式 Release 落地。

---

## 2. 版本发布

无新版本发布（0 个），本节省略。

> ⚠️ 提示：今日多条高价值修复（#996、#978、#985 等）已进入关闭/待合并状态，但尚未随版本发布，建议维护者关注下一次 Release 的打包节奏。

---

## 3. 项目进展

今日共 **8 条 PR 被合并/关闭**，覆盖渠道稳定性、MCP、内存、Provider、审批流等多个模块，整体向前推进明显：

| PR | 类型 | 内容 | 关联 Issue |
|---|---|---|---|
| [#996](https://github.com/nullclaw/nullclaw/pull/996) | fix(mcp) | 为 stdio MCP 响应读取加超时，超时后终止进程组，修复初始化泄漏 | Closes #991 |
| [#978](https://github.com/nullclaw/nullclaw/pull/978) | fix(discord) | Discord typing 线程改用 heavy runtime 栈（原 512KB 栈溢出导致进程中止） | — |
| [#980](https://github.com/nullclaw/nullclaw/pull/980) | fix(scheduler) | `/pair` 时把配对 token 持久化到磁盘，修复 cron 工具无法鉴权 | Fixes #839 |
| [#979](https://github.com/nullclaw/nullclaw/pull/979) | feat(memory) | 新增 `auto_recall` / `recall_limit` / `max_context_bytes` 配置 | 对应 #919 |
| [#981](https://github.com/nullclaw/nullclaw/pull/981) | feat(provider) | 新增 `grok-cli` Provider（xAI Grok CLI） | — |
| [#969](https://github.com/nullclaw/nullclaw/pull/969) | feat(agent) | 结构化 `approval_request` / `approval_response` 两轮工具审批流 | — |
| [#986](https://github.com/nullclaw/nullclaw/pull/986) | feat(memory) | SQLite 记忆库路径可配置（`memory.database_path`） | — |
| [#965](https://github.com/nullclaw/nullclaw/pull/965) | feat(streaming) | SSE 解析器结构化流式工具调用支持 | 根修复的配套 |

**评估：** 今日合并重点集中在**稳定性修复（栈溢出、MCP 挂起、鉴权失败）**与**可配置性增强（内存、Provider）**两条主线，属于"补短板 + 扩能力"并行推进，项目健康度向好。但需注意，被 #996/#980 修复的 #991、#839 在 Issue 列表中仍显示为 OPEN，存在**代码已修、Issue 未同步关闭**的状态不一致。

---

## 4. 社区热点

按评论数排序，今日讨论最集中的 Issue：

1. **[#871](https://github.com/nullclaw/nullclaw/issues/871) `web_search` 在低资源设备上不可用（8 条评论）** — 社区互动最高。核心诉求：低配设备上现有搜索方案依赖 Brave API Key 等外部依赖，违背 NullClaw 面向"廉价弱设备"的定位。与 #623（引入 ddgs）形成合力。
2. **[#972](https://github.com/nullclaw/nullclaw/issues/972) Telegram 渠道空闲后失联（5 条评论，👍1）** — 已有 fix PR [#984](https://github.com/nullclaw/nullclaw/pull/984) 待合并，诉求是渠道守护进程的"自愈"能力。
3. **[#915](https://github.com/nullclaw/nullclaw/issues/915) Scheduler 鉴权失败（5 条评论，👍1）** — 与 #839 同源，属调度器鉴权链路问题，已有 #980 修复合并。
4. **[#865](https://github.com/nullclaw/nullclaw/issues/865) CLI 方向键显示控制字符（4 条评论）** — 已有 fix PR [#970](https://github.com/nullclaw/nullclaw/pull/970) 待合并。
5. **[#976](https://github.com/nullclaw/nullclaw/issues/976) aarch64 上每条 Telegram 消息触发 SIGSEGV（4 条评论）** — 崩溃级问题，已有 fix PR [#985](https://github.com/nullclaw/nullclaw/pull/985)。

**背后诉求分析：** 社区热点高度集中在 **"渠道稳定性"（Telegram / Discord / Scheduler）** 与 **"低资源/边缘设备可用性"** 两个主题。这表明 NullClaw 的用户画像偏向自托管、弱设备、长驻网关的部署场景，对"长时间无人值守后仍能可靠工作"有强需求。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 严重（崩溃 / 100% CPU）
- **[#976](https://github.com/nullclaw/nullclaw/issues/976) aarch64 上每条入站 Telegram 消息触发 SIGSEGV** — v2026.5.29，`gateway` 服务在 `Restart=always` 下陷入 crash-loop，消息被丢弃。**已有 fix PR：[#985](https://github.com/nullclaw/nullclaw/pull/985)（将 turn 路径栈提升至 16 MiB，待合并）**；配套 [#978](https://github.com/nullclaw/nullclaw/pull/978) 已关闭。
- **[#870](https://github.com/nullclaw/nullclaw/issues/870) WSL2 上网关 `accept4` 忙循环，单线程持续 100% CPU** — 即使空闲也不回落，v2026.4.17。**暂无 fix PR。**

### 🟠 高（核心功能不可用）
- **[#991](https://github.com/nullclaw/nullclaw/issues/991) MCP stdio 调用在 Proxmox 启动器锁后无限挂起** — 与长驻 gateway 争抢 stdio MCP 所有权。**fix PR [#996](https://github.com/nullclaw/nullclaw/pull/996) 已关闭（应已修复，Issue 待同步）。**
- **[#972](https://github.com/nullclaw/nullclaw/issues/972) Telegram 渠道空闲一夜后停止响应** — 需重启网关才能恢复。**fix PR [#984](https://github.com/nullclaw/nullclaw/pull/984) 待合并。**
- **[#915](https://github.com/nullclaw/nullclaw/issues/915) / [#839](https://github.com/nullclaw/nullclaw/issues/839) Scheduler 鉴权失败 / bit 无法访问 scheduler** — 同源问题。**fix PR [#980](https://github.com/nullclaw/nullclaw/pull/980) 已关闭，另有 [#959](https://github.com/nullclaw/nullclaw/pull/959) 待合并（疑似重复实现）。**

### 🟡 中（体验 / 文档）
- **[#871](https://github.com/nullclaw/nullclaw/issues/871) 低资源设备上 `web_search` 不可用** — 无 fix PR，但 #623 提出 ddgs 方案。
- **[#865](https://github.com/nullclaw/nullclaw/issues/865) CLI 方向键输出控制字符** — **fix PR [#970](https://github.com/nullclaw/nullclaw/pull/970) 待合并。**
- **[#932](https://github.com/nullclaw/nullclaw/issues/932) 文档中 Zig 版本号错误（0.15.2 → 应 ≥0.16.0）** — 构建失败，**暂无 fix PR。**

> **稳定性小结：** 今日严重 Bug 中，SIGSEGV 与 MCP 挂起**均已有 fix PR**，响应及时；但 WSL2 CPU 100% 与 Zig 文档错误仍无对应 PR，建议优先处理。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 关联 PR / 状态 | 纳入下一版本概率 |
|---|---|---|---|
| 图片/文件多模态输入（Vision Pipeline） | [#624](https://github.com/nullclaw/nullclaw/issues/624) | 无 PR | 中（呼声稳定但无实现） |
| `web_search` 引入 ddgs 元搜索 | [#623](https://github.com/nullclaw/nullclaw/issues/623) | 无 PR，但与 #871 强相关 | 中高 |
| `GET /status` 监控端点 | [#631](https://github.com/nullclaw/nullclaw/issues/631)（👍1） | 无 PR | 中 |
| 按消息禁用自动记忆召回 | [#919](https://github.com/nullclaw/nullclaw/issues/919) | ✅ PR [#979](https://github.com/nullclaw/nullclaw/pull/979) 已关闭 | **高（已实现）** |
| 原生 Anthropic API Key 支持 | [#767](https://github.com/nullclaw/nullclaw/issues/767) | ✅ PR [#962](https://github.com/nullclaw/nullclaw/pull/962) 待合并 | **高（文档已就绪）** |
| 微信 iLink Bot 扫码登录 | [#817](https://github.com/nullclaw/nullclaw/issues/817) | ✅ PR [#963](https://github.com/nullclaw/nullclaw/pull/963) 待合并 | **高** |
| 本地 Web 渠道经 Cloudflare/Nginx 隧道暴露 | [#495](https://github.com/nullclaw/nullclaw/issues/495) | 无 PR | 低 |
| 子 Agent 生成与跨 Provider 通信 | [#190](https://github.com/nullclaw/nullclaw/issues/190) | 无 PR | 低（架构级） |

**路线图信号：** 记忆可控性（#919）、原生 Anthropic（#767）、微信渠道（#817）三项均已由 PR 覆盖，最可能进入下一版本。搜索能力（#623/#871）与 Vision（#624）属于用户高频诉求但尚无 PR，值得纳入规划。

---

## 7. 用户反馈摘要

- **部署场景画像清晰：** 用户普遍运行于**低资源/边缘/自托管环境**——WSL2（#870）、Proxmox CT（#991）、aarch64（#976）、Ubuntu + RTX 3090 + Ollama（#915）、Termux/Android（#966）。对"弱设备可用性"和"长驻稳定性"高度敏感。
- **核心痛点：**
  - **渠道可靠性**：Telegram/Discord/Matrix 在长时间空闲后"静默死亡"，用户被迫手动重启网关（#972、#984）。
  - **鉴权链路断裂**：Scheduler / `/pair` token 不落盘导致工具无权限，用户困惑于"LLM 正常但调度器不工作"（#915、#839）。
  - **崩溃与资源泄漏**：SIGSEGV 崩溃循环、CPU 100% 空转严重影响生产部署（#976、#870）。
- **不满意点：** 文档与实际不符（Zig 版本 #932）、CLI 基础交互（方向键）损坏（#865）——属于"低成本高感知"的体验缺陷。
- **积极信号：** 用户主动提交可复现步骤与环境信息（如 #976、#991），并已有贡献者提交高质量 fix PR，社区参与度健康。

---

## 8. 待处理积压

以下 Issue 创建已久（3–4 月）且至今未关闭，建议维护者优先分诊：

| Issue | 创建日期 | 滞留时长 | 主题 | 状态 |
|---|---|---|---|---|
| [#190](https://github.com/nullclaw/nullclaw/issues/190) | 2026-03-01 | ~7 个月 | Subagent 生成与跨 Provider 通信 | 无 PR，架构级 |
| [#495](https://github.com/nullclaw/nullclaw/issues/495) | 2026-03-13 | ~6 个月 | 本地 Web 渠道 + 隧道暴露 | 无 PR |
| [#624](https://github.com/nullclaw/nullclaw/issues/624) | 2026-03-18 | ~6 个月 | Vision Pipeline（多模态输入） | 无 PR |
| [#623](https://github.com/nullclaw/nullclaw/issues/623) | 2026-03-18 | ~6 个月 | ddgs 搜索选项 | 无 PR |
| [#631](https://github.com/nullclaw/nullclaw/issues/631) | 2026-03-18 | ~6 个月 | `GET /status` 端点 | 无 PR |
| [#767](https://github.com/nullclaw/nullclaw/issues/767) | 2026-04-04 | ~5.5 个月 | 原生 Anthropic API Key | PR #962 待合并 |
| [#777](https://github.com/nullclaw/nullclaw/pull/777) | 2026-04-05 | ~5.5 个月 | 文档结构清理（PR） | 待合并 |

**提醒：**
1. **状态同步问题**：`#991`、`#839`、`#919` 的 fix PR 已关闭/合并，但 Issue 仍为 OPEN，建议批量核对关闭。
2. **重复 PR**：#959 与已关闭的 #980 均针对 #839（paired token 持久化），建议明确保留其一，避免合并冲突。
3. **文档债**：#932（Zig 版本）、#777（文档结构）为低成本高收益项，适合作为"good first issue"清理。

---

### 📊 项目健康度总评

| 维度 | 评分 | 说明 |
|---|---|---|
| 代码吞吐 | 🟢 优秀 | 8 PR 合并/关闭，覆盖多模块 |
| 响应速度 | 🟢 良好 | 严重 Bug 当日即有 fix PR |
| 积压消化 | 🟡 待改善 | Issues 零关闭，6 个月老问题仍在 |
| 发布节奏 | 🟡 待观察 | 无新版本，修复未落地到 Release |
| 社区参与 | 🟢 健康 | 用户高质量反馈 + 贡献者活跃 |

**一句话结论：** 代码侧活跃且修复高效，但需加快 Issue 分诊关闭与版本发布节奏，避免"修得快、关得慢、发不出"造成体验落差。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>



好的，这是根据您提供的 IronClaw GitHub 数据生成的 2026-09-24 项目动态日报。

---

### **IronClaw 项目动态日报 - 2026-09-24**

#### **1. 今日速览**
IronClaw 项目在 2026-09-24 日整体活跃度处于**低水平**。过去24小时内，项目未产生新的 Issues，亦无版本发布。唯一动态为一条待合并的 Pull Request (#8109)，其内容聚焦于项目文档的优化与澄清，而非功能性代码变更。项目当前处于相对稳定的维护期，社区互动暂无显著热点。

#### **2. 版本发布**
*   **无新版本发布。** 最新发布信息仍为历史数据，今日无更新。

#### **3. 项目进展**
今日有一条重要的文档类 PR 待处理：
*   **PR #8109 [OPEN] docs(skills): clarify scoped virtual skill roots**
    *   **作者:** mmemcormier
    *   **状态:** 待合并
    *   **摘要:** 该 PR 旨在更新项目文档，用新的“范围限定虚拟技能根目录”（`/skills`, `/system/skills`, 可选 `/tenant-shared/skills`）概念替代过时的主机目录发现指南。其核心目标是明确区分运行时发现与独立的旧版磁盘导入流程，并澄清信任分配问题。
    *   **分析:** 此项改进对于新用户理解项目架构和配置方式有积极意义，能有效减少因文档过时导致的困惑。虽然未改变运行时行为，但清晰的文档是项目成熟度的重要标志。**建议维护者优先审阅并合并此 PR**，以提升项目可维护性。
    *   **链接:** [nearai/ironclaw PR #8109](https://github.com/nearai/ironclaw/pull/8109)

#### **4. 社区热点**
今日无活跃的社区讨论。无新的 Issues 被创建或产生评论，因此暂无讨论热点。

#### **5. Bug 与稳定性**
今日无新的 Bug、崩溃或回归问题报告。

#### **6. 功能请求与路线图信号**
今日无新的功能请求提出。但通过分析唯一的 PR #8109，可以观察到一条清晰的路线图信号：**项目维护重点正从增加新功能转向完善内部架构的清晰度与文档化**。特别是对“技能”模块的虚拟化、范围化管理进行文档澄清，暗示了未来可能基于此架构进行更细粒度的功能迭代。此 PR 的合并将为后续可能的开发工作奠定坚实的文档基础。

#### **7. 用户反馈摘要**
今日无新的用户反馈数据。

#### **8. 待处理积压**
当前需关注的积压项：
*   **PR #8109**：此 PR 已创建并处于打开状态，是当前唯一待处理项。它涉及关键文档更新，建议及时处理。
    *   **链接:** [nearai/ironclaw PR #8109](https://github.com/nearai/ironclaw/pull/8109)

---
**报告生成时间:** 2026-09-24
**数据来源:** GitHub API for repository `nearai/ironclaw`

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



好的，这是根据您提供的 LobsterAI GitHub 数据生成的 2026-09-24 项目动态日报。

---

### **LobsterAI 项目动态日报 (2026-09-24)**

**数据来源：** [GitHub - netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

#### **1. 今日速览**

LobsterAI 项目在 2026-09-23 至 2026-09-24 期间活动度极高，呈现出强劲的开发势头。项目成功发布了新版本 `2026.9.23`，并伴随有多个核心功能的合并与关闭。过去24小时内无新的 Issues 提出，表明社区反馈渠道相对平静，但开发团队活跃，共处理了10条 Pull Requests，其中8条已合并或关闭，标志着多项重要功能和修复已正式上线。整体项目健康度优秀，处于快速迭代和功能增强阶段。

---

#### **2. 版本发布**

**新版本：LobsterAI 2026.9.23**

本次发布是近期开发成果的集中体现，主要更新内容包括：

*   **新增实验性决策模型工具：** 引入了一个基于 Bring-Your-Own-Key (BYO-key) 的 Jev 决策模型服务，包含配置、客户端、MCP 工具处理器、IPC 桥接以及 OpenClaw 扩展，并配备了位于实验功能专区的设置 UI。 ([PR #2753](https://github.com/netease-youdao/LobsterAI/pull/2753))
*   **协同工作流增强：**
    *   **流式实时步骤进度与差异统计：** 增强了协同工作模块，能够实时显示每一步的进度和代码差异统计信息。 ([PR #2749](https://github.com/netease-youdao/LobsterAI/pull/2749))
    *   **统一活动步骤渲染与回合计时：** 重构了活动步骤的渲染逻辑，用一个 `ActivityStepLine` 组件统一了思考、命令、读写、搜索等多种步骤类型，并增加了回合开始时间戳，以便在分页加载的会话窗口中仍能正确计时。 ([PR #2756](https://github.com/netease-youdao/LobsterAI/pull/2756))
    *   **协同工作流打磨：** 对协同工作流的用户体验进行了进一步优化。 ([PR #2750](https://github.com/netease-youdao/LobsterAI/pull/2750))
*   **OpenClaw 平台修复与增强：**
    *   **配置热重载交付修复：** 解决了代理端口或模型配置更新后，新任务可能继续使用旧配置的问题，通过引入带版本条件的 `config.apply` 流程确保配置正确应用。 ([PR #2755](https://github.com/netease-youdao/LobsterAI/pull/2755))
    *   **插件异常降级启动：** 移植了上游 OpenClaw 的修复，当插件升级或校验失败时，网关将隔离失败插件并降级启动，确保核心会话和健康模型仍可使用，提升了系统的健壮性。 ([PR #2754](https://github.com/netease-youdao/LobsterAI/pull/2754))
*   **其他更新：**
    *   **运行时更新：** 将 dsh 运行时更新至 `0.1.5 rc.3` 版本。 ([PR #2752](https://github.com/netease-youdao/LobsterAI/pull/2752))
    *   **订阅试用活动优化：** 扩展了一分钱体验活动的可见范围至匿名、已订阅及团队身份用户，并更新了相关文案和服务端对接文档。 ([PR #2751](https://github.com/netease-youdao/LobsterAI/pull/2751))
    *   **依赖项更新：** 自动化更新了 `@sinclair/typebox` 依赖至最新版本。 ([PR #2668](https://github.com/netease-youdao/LobsterAI/pull/2668))
    *   **遗留修复：** 修复了 macOS 上快捷键修饰键错误的长期问题。 ([PR #980](https://github.com/netease-youdao/LobsterAI/pull/980))

**破坏性变更与迁移注意事项：** 根据现有数据，本次发布未明确标注破坏性变更。主要更新为功能增强、错误修复和重构（如活动步骤渲染的统一），但建议用户关注配置管理流程（`config.apply`）和 UI 组件（`ActivityStepLine`）可能带来的行为变化。

---

#### **3. 项目进展**

今日合并/关闭的 PR 标志着项目在多个关键领域的显著进展：

*   **核心功能交付：** 协同工作流（Cowork）模块得到重点加强，通过 PR #2756 和 #2750 对实时反馈和步骤可视化进行了深度优化，提升了协作体验。
*   **平台稳定性提升：** OpenClaw 相关的 PR #2754 和 #2755 直接针对配置热重载和插件异常等生产环境常见问题，显著提高了系统的可靠性和容错能力。
*   **技术探索：** PR #2753 引入的 Jev 决策模型工具，表明项目正在探索 AI 决策能力的集成，属于前瞻性的功能储备。
*   **用户体验与商业化：** PR #2751 对订阅试用活动的优化，直接关系到用户增长和转化。
*   **技术债务清理：** PR #980（macOS 快捷键修复）和 PR #2668（依赖更新）属于持续性的维护工作，有助于保持代码健康度。

**总体迈进：** 项目从功能修复和稳定性提升，向更复杂的功能（协同工作、AI决策）和用户体验深化迈进，发展态势积极。

---

#### **4. 社区热点**

**今日无新的或活跃的 Issues。**

**分析：** 过去24小时内没有新的用户反馈或问题报告，这可能意味着：
1.  版本更新刚发布，用户尚在体验和适应新版本。
2.  项目的用户社区可能相对较小或专业，反馈频率不高。
3.  开发团队近期可能通过其他渠道（如内部测试、社区群组）进行了充分沟通。

由于缺乏活跃的 Issues，无法分析具体的社区诉求热点。

---

#### **5. Bug 与稳定性**

**今日无新报告的 Bug 或崩溃问题。**

**分析：** 数据显示，过去24小时内没有新的 Issues 被创建，因此没有新的用户报告缺陷。然而，从已合并的 PR 中可以看出，开发团队主动识别并修复了以下潜在稳定性问题：

*   **高严重度：** **配置热重载失败** ([PR #2755](https://github.com/netease-youdao/LobsterAI/pull/2755)) - 此问题可能导致用户更新配置后功能异常，影响核心使用。
*   **中高严重度：** **插件异常导致网关启动失败** ([PR #2754](https://github.com/netease-youdao/LobsterAI/pull/2754)) - 此问题可能导致整个应用无法启动，影响所有用户。
*   **已修复：** **macOS 快捷键错误** ([PR #980](https://github.com/netease-youdao/LobsterAI/pull/980)) - 一个长期存在的已知问题，现已修复。

**结论：** 项目当前无已知的、未解决的严重 Bug。开发团队对稳定性问题有积极的预防和修复能力。

---

#### **6. 功能请求与路线图信号**

*   **来自 PR 的信号：**
    *   **AI 能力集成：** `Jev decision model tool` 的加入强烈暗示路线图中包含将高级 AI 决策能力直接嵌入工作流的计划。
    *   **协同工作深化：** 对 `cowork` 模块的持续投入（实时进度、步骤统一）表明，多人协作或人机协同是未来发展的核心方向。
    *   **OpenClaw 平台整合：** 对 OpenClaw 的修复和增强表明，与该平台的深度整合是既定战略，未来会有更多功能围绕其展开。
*   **社区需求：** 由于今日无活跃 Issues，无法从社区获取直接的功能请求。但历史 Issue #980（已关闭）的修复表明团队对跨平台兼容性（如 macOS）的重视。

**预测：** 下一版本很可能会继续深化协同工作功能，并逐步开放实验性的 AI 决策工具给更广泛的用户群体测试。

---

#### **7. 用户反馈摘要**

**今日无新的用户反馈。**

**分析：** 无法从 Issues 评论中提炼用户痛点或满意度信息。建议监控未来几天新版本发布后的反馈，特别是关于新 UI 组件（`ActivityStepLine`）和配置变更流程（`config.apply`）的用户评价。

---

#### **8. 待处理积压**

**当前无长期未响应的重要 Issue 或 PR。**

**分析：** 数据显示，所有列出的 PR 均已在过去一天内被处理（合并或关闭），包括标记为 `[stale]` 的旧 PR #980。这表明项目维护响应迅速，不存在明显的积压问题，工作流程健康。

---

**总体项目健康度评估：优秀。** 开发活跃，迭代速度快，功能目标明确，稳定性得到持续关注，且无社区反馈积压。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>



# Moltis 项目动态日报 (2026-09-24)

## 1. 今日速览
Moltis 项目在 2026-09-24 的整体活跃度较为平稳，无新版本发布，无新增 Issues，PR 合并数为 0。项目当前的焦点高度集中在核心功能迭代上，特别是针对多 Agent 运行时的安全隔离与细粒度控制（以 PR #1272 为代表）。整体项目健康度良好，开发节奏稳健，正在向企业级安全与多租户隔离方向迈出关键一步。

## 2. 版本发布
今日无新版本发布，暂无破坏性变更或迁移注意事项需要关注。

## 3. 项目进展
过去 24 小时内，项目无已合并或关闭的 PR（已合并/关闭: 0）。但有一条关键的功能 PR 处于活跃更新状态：
*   **PR #1272** `[OPEN] feat(sandbox): per-agent mounts, run_as and a forced sandbox**（待合并）
    *   **链接**: `github.com/moltis-org/moltis/pull/1272`
    *   **进展说明**: 该 PR 引入了针对每个 Agent 预设配置的沙箱控制三大核心 knob（`sandbox.mounts`、`sandbox.run_as`、`sandbox.force`）。虽然尚未合并，但其在 2026-09-23 的持续更新表明开发团队正在积极完善和测试这一重大特性。这代表 Moltis 在多 Agent 隔离与安全治理方面向前迈出了实质性的一步。

## 4. 社区热点
今日社区讨论的绝对焦点为 **PR #1272**（链接: `github.com/moltis-org/moltis/pull/1272`）。
*   **分析**: 尽管当前互动数据（评论和点赞）尚未显现，但该 PR 所代表的诉求极具前瞻性。它解决了多 Agent 协同工作时的核心信任问题：如何防止 Agent 越权访问宿主机资源，同时又能灵活地为特定 Agent 挂载必要的业务数据卷。这背后是企业级用户和多租户部署场景下对强安全隔离和定制化运行时的强烈诉求。

## 5. Bug 与稳定性
*   **今日报告**: 无（过去 24 小时 Issues 更新为 0）。
*   **评估**: 项目当前没有已知的崩溃、回归问题或高严重度 Bug。代码库稳定性处于较高水平，维护者可以将主要精力投入到底层核心特性的审查（如 PR #1272）中。

## 6. 功能请求与路线图信号
*   **功能请求**: 核心诉求是实现 Agent 级别的沙箱策略细粒度控制（包括主机挂载绑定、运行 UID/GID 以及强制沙箱开关）。
*   **路线图信号**: PR #1272 的设计和持续迭代释放了强烈的信号——Moltis 正在从通用的 AI Agent 框架向高安全、高可配置的企业级平台演进。这些 per-agent 沙箱控制一旦合并，将作为下一版本的核心安全特性发布，极大提升平台在敏感数据处理和合规多租户场景下的部署能力。

## 7. 用户反馈摘要
今日无新增的直接 Issues 评论，但通过分析 PR #1272 的配置项可以提炼出真实的用户场景与痛点：
*   **痛点**: 用户在实际部署中，不同 Agent 承载的任务敏感度不同（例如：处理核心数据库的 Agent vs. 只读查询 Agent）。全局统一的沙箱策略无法满足“高权限 Agent 强制隔离、低权限 Agent 灵活访问特定本地目录”的分级安全需求。
*   **诉求**: `sandbox.run_as` 解决了容器内以非 root 用户运行以降低权限的需求；`sandbox.mounts` 提供了按需挂载数据卷的灵活性；`sandbox.force` 则提供了安全底线，确保高风险 Agent 绝无逃逸到宿主机的可能性。

## 8. 待处理积压
当前最主要的待处理项为待合并的核心功能 PR：
*   **PR #1272** (`github.com/moltis-org/moltis/pull/1272`)
    *   **状态**: OPEN（创建于 2026-09-16，最后更新于 2026-09-23）。
    *   **提醒**: 该 PR 已经持续活跃多日，涉及核心配置架构。建议维护者团队优先安排 Code Review，评估其对整体配置解析 schema 的影响，并协助进行沙箱隔离的集成测试，以尽快完成合并，释放这一重要的安全特性。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Thinking Process:

1.  **Understand the Goal**: The user wants a daily report (dated 2026-09-24) for the project "CoPaw" (referred to as QwenPaw in the GitHub data, but the prompt says "CoPaw (github.com/agentscope-ai/CoPaw)" and "CoPaw 项目日报"). I need to analyze the provided GitHub data (Issues, PRs, Releases) and generate a structured daily report in Chinese.

2.  **Analyze the Input Data**:
    *   **Data Overview**:
        *   Issues updated in the last 24h: 34 (New/Active: 17, Closed: 17).
        *   PRs updated in the last 24h: 24 (Pending merge: 15, Merged/Closed: 9).
        *   New releases: 0.
    *   **Latest Releases**: None.
    *   **Latest Issues (top 30 by comments)**:
        *   #7318 [OPEN] [question] [Discussion] QwenPaw Hub, the multi-tenant edition, released in 2.2.0: what should we build next? (Author: rayrayraykk, Created: 2026-08-26, Updated: 2026-09-23, Comments: 32, 👍: 4) - *High community interest, multi-tenant future direction.*
        *   #7576 [CLOSED] [Bug] RetryChatModel hardcoded 32768 context_size fallback causes CONTEXT_UNFIT (>31130 tokens) for all models (Author: aimastertoast, Created: 2026-09-05, Updated: 2026-09-23, Comments: 8, 👍: 0) - *Critical bug, closed.*
        *   #7853 [OPEN] [Bug]: ToolResultPruner skips media blocks (type="data"), leading to unbounded base64 accumulation from view_image and blowing up model context (Author: jcs130, Created: 2026-09-18, Updated: 2026-09-23, Comments: 8, 👍: 0) - *Stability/memory leak issue.*
        *   #2710 [CLOSED] [bug] [Bug]: Local push not displayed after scheduled task completes (Author: xianqiuyu, Created: 2026-04-01, Updated: 2026-09-23, Comments: 7, 👍: 0) - *Old bug closed.*
        *   #3037 [CLOSED] [Bug] Feishu channel: filter_thinking and filter_tool_messages config not working (Author: codeasier, Created: 2026-04-07, Updated: 2026-09-23, Comments: 6, 👍: 0) - *Old bug closed.*
        *   #7377 [OPEN] [question] [Question]: Agent Loop mode configuration not persisted across task runs in v2.1.0 console (Author: fzm1994, Created: 2026-08-28, Updated: 2026-09-23, Comments: 6, 👍: 0) - *UX/configuration bug.*
        *   #7484 [OPEN] [enhancement] [Feature]: When will A2A be supported based on qwenpaw 2.x? (Author: qixinbo, Created: 2026-09-02, Updated: 2026-09-23, Comments: 5, 👍: 0) - *Feature request, protocol support.*
        *   #7534 [OPEN] [BUG] QwenPaw feishu session: queue consumer stays alive & stuck -> session silently unresponsive; new messages can't spawn a new consumer (Author: feng183043996, Created: 2026-09-03, Updated: 2026-09-23, Comments: 5, 👍: 0) - *Critical channel bug.*
        *   #7628 [OPEN] [enhancement] [Bug] Context compaction can still exceed the complete provider request budget and fail active turns (Author: elain0205, Created: 2026-09-08, Updated: 2026-09-23, Comments: 5, 👍: 0) - *Core logic bug/enhancement.*
        *   #7715 [OPEN] [bug] [Bug]: Daily Paper fails silently when arxiv.org is unreachable — no proxy/endpoint config, error message hides real cause (Author: PTW1981, Created: 2026-09-12, Updated: 2026-09-23, Comments: 5, 👍: 0) - *Plugin robustness issue.*
        *   #7733 [OPEN] [enhancement] [Feature]: Agent-autonomous context management — a smooth handover across context eviction (Author: MCQSJ, Created: 2026-09-13, Updated: 2026-09-23, Comments: 4, 👍: 0) - *Feature request on agent autonomy.*
        *   #1010 [CLOSED] [enhancement, model configure] [Feature]: Hope to support configurable different LLMs for different tasks, rather than a single LLM executing all tasks (Author: Dreamcatcher-wind, Created: 2026-03-09, Updated: 2026-09-23, Comments: 4, 👍: 0) - *Old feature request closed.*
        *   #7856 [CLOSED] [bug] [Bug]: qwenpaw-pet 0.1.1 breaks QwenPaw 2.2.2b2 tool approvals by dropping the `actor` argument (Author: samluoabc, Created: 2026-09-18, Updated: 2026-09-23, Comments: 4, 👍: 0) - *Plugin integration bug closed.*
        *   #2869 [CLOSED] [question] [Question]: Can themes and custom colors be added? (Author: cbh5200, Created: 2026-04-03, Updated: 2026-09-23, Comments: 4, 👍: 0) - *Old UI question closed.*
        *   #7857 [OPEN] [Bug]: ACP shutdown fallback can silently skip session cleanup and leak its event loop (Author: mango8853, Created: 2026-09-18, Updated: 2026-09-23, Comments: 3, 👍: 0) - *Resource leak bug.*
        *   #7402 [CLOSED] [bug] [Bug]: Empty assistant output_text blocks persisted in session history poison every subsequent request — Ark Responses API returns 400 "MissingParameter: input.content.text" (Author: xiaoka76, Created: 2026-08-29, Updated: 2026-09-23, Comments: 3, 👍: 0) - *Data corruption/persistence bug closed.*
        *   #2841 [CLOSED] [question] [Question]: Concurrency issues with Feishu bot + Manager-Agents setup (serial execution & context cross-contamination) (Author: ewtwd, Created: 2026-04-02, Updated: 2026-09-23, Comments: 3, 👍: 0) - *Concurrency question closed.*
        *   #2414 [CLOSED] [bug] [Bug]: Dingtalk task timeout and DingTalk session collision (Author: bhzhu203, Created: 2026-03-27, Updated: 2026-09-23, Comments: 3, 👍: 0) - *Old channel bug closed.*
        *   #2335 [CLOSED] [BUG][Feishu Channel] WebSocket connection drops without auto-reconnect (Author: x0james, Created: 2026-03-26, Updated: 2026-09-23, Comments: 3, 👍: 0) - *Old channel bug closed.*
        *   #7836 [OPEN] [Bug]: scroll eviction drops a user turn that sits inside a tool-heavy span — the live window loses the request while history.db keeps it (Author: chcsyf, Created: 2026-09-17, Updated: 2026-09-23, Comments: 3, 👍: 1) - *Context management bug.*
        *   #7947 [CLOSED] [bug] [Bug]: send_file_to_user never renders its file card in the Console (artifact guard tests a JSON string, not a block array) (Author: makeryuan-MK, Created: 2026-09-23, Updated: 2026-09-23, Comments: 3, 👍: 0) - *UI bug closed.*
        *   #7767 [OPEN] Bug reports from a guardrail-plugin build: console attachment stale blob, one-shot cron misfire drop, console tail-drop, on_acting never fires (Author: BasilLei, Created: 2026-09-14, Updated: 2026-09-23, Comments: 3, 👍: 0) - *Multiple plugin bugs.*
        *   #7062 [CLOSED] [Feature]: Support per-agent / per-session reasoning_effort override for cloud models (Author: wwth8819, Created: 2026-08-16, Updated: 2026-09-23, Comments: 3, 👍: 0) - *Feature closed.*
        *   #3035 [CLOSED] [bug] [Bug]: processor not found, type: im.message.reaction.created_v1 (Author: ethan-lee-club, Created: 2026-04-07, Updated: 2026-09-23, Comments: 2, 👍: 0) - *Old Feishu bug closed.*
        *   #3016 [CLOSED] [bug] [Bug]: Tencent Cloud domestic linux server using one-click install script hangs and does not respond (Author: dylanbai8, Created: 2026-04-07, Updated: 2026-09-23, Comments: 2, 👍: 0) - *Old install bug closed.*
        *   #2948 [CLOSED] [enhancement] Hi. After generating the audio, there's no download button. I really need a download button. (Author: JobJobovich, Created: 2026-04-04, Updated: 2026-09-23, Comments: 2, 👍: 0) - *Old UI feature closed.*
        *   #2200 [CLOSED] [enhancement] 深色模式时聊天内容区的配色调整建议 (Author: alvenstar, Created: 2026-03-24, Updated: 2026-09-23, Comments: 2, 👍: 0) - *Old UI feature closed.*
        *   #1353 [CLOSED] [question] [Question]: key 能否通过配置决定放在 Authorization 还是 X-Api-Key 请求头里 (Author: zebrafirst, Created: 2026-03-12, Updated: 2026-09-23, Comments: 2, 👍: 0) - *Old config question closed.*
        *   #7948 [OPEN] [bug] [Bug]: Poor web console design that breaks user input (Author: BorisPolonsky, Created: 2026-09-23, Updated: 2026-09-23, Comments: 2, 👍: 0) - *New UI bug.*
        *   #7959 [OPEN] [bug] [Bug]: Moonshot (kimi-k3) rejects MCP tool schemas with untyped anyOf unions: "properties.freq: type is not defined" (Author: Moonlit-Pages, Created: 2026-09-23, Updated: 2026-09-23, Comments: 1, 👍: 0) - *New provider compatibility bug.*

    *   **Latest PRs (top 20 by comments/activity)**:
        *   #7930 [OPEN] fix(backup): snapshot SQLite databases without releasing live locks (Author: niceIrene, Created: 2026-09-22, Updated: 2026-09-23) - *Stability fix.*
        *   #7871 [OPEN] fix(tools): prevent literal markers from bypassing output truncation (Aone) (Author: niceIrene, Created: 2026-09-18, Updated: 2026-09-23) - *Security/Truncation fix.*
        *   #6854 [CLOSED] [first-time-contributor] add localized approval purpose descriptions (Author: huiyiyichen, Created: 2026-08-09, Updated: 2026-09-23) - *UX improvement, first-time contributor!*
        *   #7872 [OPEN] fix(scroll): preserve interrupted requests across follow-up compaction (#7836) (Author: niceIrene, Created: 2026-09-18, Updated: 2026-09-23) - *Fixes Issue #7836.*
        *   #7960 [OPEN] fix(providers): recover after stalled stream cleanup (Author: lorenzozanee, Created: 2026-09-23, Updated: 2026-09-23) - *Provider robustness.*
        *   #7874 [OPEN] feat(pawapp): redesign the SDK and app control plane (Author: cyruszhang, Created: 2026-09-19, Updated: 2026-09-23) - *Major architectural feature for PawApps.*
        *   #7873 [OPEN] fix(scroll): explain advanced recall sandbox limitations (Author: niceIrene, Created: 2026-09-18, Updated: 2026-09-23) - *UX/doc fix.*
        *   #7613 [OPEN] [first-time-contributor, Under Review] feat(memory): add OpenViking memory plugin (Author: xypang33-sketch, Created: 2026-09-07, Updated: 2026-09-23) - *Memory backend plugin.*
        *   #7956 [OPEN] feat(console): optimize settings workflows and sidebar interactions (Author: rayrayraykk, Created: 2026-09-23, Updated: 2026-09-23) - *Console UX optimization.*
        *   #7955 [CLOSED] docs(website): add download provenance and usage policy (Author: jinglinpeng, Created: 2026-09-23, Updated: 2026-09-23) - *Docs/Legal.*
        *   #7952 [CLOSED] fix(hub): distinguish invitation redemption failure reasons (Author: zhijianma, Created: 2026-09-23, Updated: 2026-09-23) - *Hub backend fix.*
        *   #7941 [CLOSED] test(unit): make the batch-3 lock and portability tests cross-platform (Author: yutai78786, Created: 2026-09-22, Updated: 2026-09-23) - *Test coverage improvement (+3.28pp, 73.79% coverage, 2720 new cases).*
        *   #7409 [CLOSED] fix(agents): drop empty assistant text blocks (Author: wananing, Created: 2026-08-30, Updated: 2026-09-23) - *Fixes empty text block issue (related to #7402).*
        *   #7861 [OPEN] feat(console): add authenticated multi-tab chat terminal (Author: zhijianma, Created: 2026-09-18, Updated: 2026-09-23) - *New terminal feature.*
        *   #7927 [CLOSED] fix(web): replace html2text with markdownify (Author: jinglinpeng, Created: 2026-09-22, Updated: 2026-09-23) - *License compliance (GPL to MIT).*
        *   #7931 [OPEN] feat(chat): add durable paginated transcript history (Author: zhijianma, Created: 2026-09-22, Updated: 2026-09-23) - *Chat history backend feature.*
        *   #7940 [CLOSED] feat(console): refine sidebar interactions and persist avatars (Author: rayrayraykk, Created: 2

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



好的，这是根据您提供的数据生成的 ZeroClaw 项目动态日报。

---

### **ZeroClaw 项目动态日报 (2026-09-24)**

#### **1. 今日速览**
ZeroClaw 项目在今日展现出极高的活跃度，开发重心明显向架构重构、核心功能增强和关键 Bug 修复倾斜。过去24小时内，项目新增了11个 Issues 和50个 Pull Requests，互动频繁。尽管没有新版本发布，但大量大型 PR（XL/L 尺寸）的推进表明项目正处于一个重要的迭代周期中，旨在提升系统的稳定性、安全性和可维护性。

#### **2. 版本发布**
*   **无新版本发布。**

#### **3. 项目进展**
本日有4个PR被合并或关闭，标志着特定任务的完成或调整：
*   **PR #10818** `[CLOSED]`：优化文档发布流程，通过元数据提升稳定版本，避免重复构建，提升了发布效率。
*   **PR #10816** `[CLOSED]`：修复发布流程，在编译前增加对 Apple 公证状态的检查，避免因公证问题浪费编译时间。
*   **PR #10815** `[CLOSED]`：修复发布顺序问题，确保版本化开发依赖在发布前被正确处理，保证了包管理的可靠性。
*   **PR #10417** `[OPEN]`：此PR虽未关闭，但其目标（实时传递终端回退）是解决运行时用户体验的关键点。

整体来看，项目在发布工程和运行时稳定性方面取得了扎实的进展。

#### **4. 社区热点**
今日社区讨论的焦点集中在以下几个核心问题上：
*   **安全与架构风险 (Issue #10968)**：一个被标记为 `S0` 级别（数据丢失/安全风险）的 Bug，指出无人值守的 agent 运行（如 cron、心跳）缺少 ApprovalManager，导致高风险工具批准形同虚设。这引发了社区对系统安全边界的深度关注。
    *   **链接**: zeroclaw-labs/zeroclaw Issue #10968
*   **WhatsApp Web 功能缺陷 (Issues #10922, #11059)**：多个 Issues 指出 WhatsApp Web 渠道的 bug，如忽略语音抑制和强制语音参数，显示出该渠道的实现仍需完善。
    *   **链接**: zeroclaw-labs/zeroclaw Issue #10922, zeroclaw-labs/zeroclaw Issue #11059
*   **架构重构 (PR #10557)**：一个将 cron 功能提取到独立 crate (`zeroclaw-cron`) 的大型重构 PR，是模块化架构演进的关键一步。
    *   **链接**: zeroclaw-labs/zeroclaw PR #10557

#### **5. Bug 与稳定性**
今日报告了多个 Bug，其中严重级别较高的问题突出：
*   **S0 - 数据丢失/安全风险**：
    *   **Issue #10968**：无人值守 agent 运行缺少 ApprovalManager，安全风险极高。
    *   **Issue #10797**：Markdown 记忆后端在并发 `store()` 调用下会静默丢失数据，存在数据丢失风险。
*   **S2 - 行为降级**：
    *   **Issue #10922**：WhatsApp Web 自动 TTS 排队时忽略 `suppress_voice`。
    *   **Issue #10985**：Dashboard 启动的 turn 无法访问绑定会话的渠道，影响 Web 端功能。
    *   **Issue #11059**：WhatsApp Web 忽略 `force_voice`，导致语音路由失败。
*   **其他稳定性问题**：
    *   **Issue #11055**：守护进程未注册渠道映射工厂，导致 webhook、cron 等场景下渠道工具不可用。

**修复状态**：上述 Bug 均为 `OPEN` 状态，**尚无对应的修复 PR 被标记或关联**，需要维护者优先处理。

#### **6. 功能请求与路线图信号**
*   **新功能需求**：社区提出了两个明确的新功能请求：
    1.  **Issue #11075**：为 Antigravity CLI 添加 `agy_cli` 工具，丰富了编码助手生态。
    2.  **Issue #11074**：为 `web_search_tool` 添加基于提示的路由功能，增强搜索的灵活性。
*   **路线图信号**：多个大型 PR 的推进预示着未来版本的方向：
    *   **运行时架构**：通过 PR #10621（协调 agent 生命周期变更）和 PR #10351（强制执行树迭代预算）等，运行时将变得更加强大和可控。
    *   **安全增强**：PR #10321（浏览器 PKCE 和跨表面注册 API）和 PR #10592（自服务注册）表明项目正积极构建更完善的安全框架。
    *   **开发者体验**：PR #10386（使 ZeroCode 中的 transcript URL 可点击）等 PR 专注于改善开发者和用户界面。

#### **7. 用户反馈摘要**
从 Issues 的摘要和描述中，可以提炼出以下用户痛点和场景：
*   **配置复杂性**：用户（开发者）在配置和使用非交互式 agent（如定时任务）时，因安全配置缺失而遇到功能受限的问题（Issue #10968）。
*   **特定渠道功能不完整**：用户在使用 WhatsApp Web 渠道时，对语音消息和特定 Markdown 渲染的功能缺陷感到困扰（Issues #10922, #11052, #11059）。
*   **高并发数据完整性担忧**：有用户（或 agent）报告了在并发写入记忆时发生数据丢失的担忧，凸显了对数据一致性有高要求的使用场景（Issue #10797）。
*   **正面反馈**：部分功能增强，如添加 `agy_cli` 工具（Issue #11075）和使 transcript URL 可点击（PR #10386），获得了社区的积极支持，反映了用户对扩展能力和易用性的认可。

#### **8. 待处理积压**
需要特别关注以下长期未更新或规模巨大的条目：
*   **PR #10325** `[OPEN]`：一个 `XL` 尺寸的功能增强 PR，旨在为运行时添加工具诱导提示，但当前状态为 `blocked`，可能需要解决前置依赖。
*   **PR #10321** `[OPEN]`：一个极其复杂的、涉及安全领域的 `XL` 尺寸 PR，堆叠了多个 commits，审查范围广，需要投入大量精力。
*   **Issue #10814** `[OPEN]`：一个创建于2026-09-13的发布效率跟踪 Issue，虽然无评论，但作为协调后续发布工作的 tracker，需要维护者持续关注其进展。
*   **Issue #10797** `[OPEN]`：一个存在超过两周的 `S0` 级别数据丢失 Bug，虽被标记为 `status:accepted`，但尚未看到修复 PR，需警惕其影响。

---
**报告生成说明**：本报告基于提供的 GitHub 数据快照生成，所有链接和描述均直接引用自源数据。报告旨在客观呈现项目动态，不包含任何主观评价。

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*