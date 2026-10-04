# OpenClaw 生态日报 2026-10-05

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-10-04 22:15 UTC

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



# OpenClaw 项目动态日报 — 2026-10-05

---

## 1. 今日速览

OpenClaw 今日活跃度维持高位：过去 24 小时内 Issues 与 PR 各新增/更新 500 条（Issues 新开+活跃 348、已关闭 152；PR 待合并 297、已合并/关闭 203），无新版本发布。社区参与度健康，但**稳定性压力显著**——P0 级 Bug 达 6 个，集中在更新路径、沙箱、子代理交付与插件生命周期，且多数标记为 `ux-release-blocker`。维护者今日合并了大量修复 PR（203 条），覆盖会话性能、cron 恢复、CI 稳定性、渠道扩展（X/Twitter、Android Talk）与安全加固，项目整体处于**高频迭代但质量承压**阶段。

---

## 2. 版本发布

**无新版本发布。** 最新 Releases 列表为空，当前线上版本应为 2026.9.8（从 Issues 反馈推断）。社区反馈显示 2026.9.8 存在 Windows 新装无法连接本地网关的阻塞性问题（见 Bug 章节），建议维护者优先发布 hotfix。

---

## 3. 项目进展

今日合并/关闭的 PR 共 203 条，以下为关键推进项：

| PR | 方向 | 说明 |
|---|---|---|
| [#165150](https://github.com/openclaw/openclaw/pull/165150) | 性能 | 会话列表视图共享与 runner 行更新，减少重复数据组装与全量刷新 |
| [#165153](https://github.com/openclaw/openclaw/pull/165153) | Web UI | 对话面板可展开、同主机 agent 可打开本地预览 |
| [#165155](https://github.com/openclaw/openclaw/pull/165155) | Cron | 修复定时 command/script announcement 因瞬时通道失败重复下发 4 次的问题 |
| [#165136](https://github.com/openclaw/openclaw/pull/165136) | Android | 原生 assistant invocation 直接启动 Talk，支持蓝牙耳机语音命令路由 |
| [#165021](https://github.com/openclaw/openclaw/pull/165021) | 安全 | A2A peer token 环境变量引用缺失时 fail-closed，拒绝字面量 `${...}` 泄漏 |
| [#165070](https://github.com/openclaw/openclaw/pull/165070) | 性能 | 崩溃后恢复的 WAL 数据库无需前台扫描即可准入，避免阻塞会话数分钟 |
| [#165138](https://github.com/openclaw/openclaw/pull/165138) | 渠道 | 新增 X (Twitter) mentions channel plugin，支持通过 mention 驱动团队 agent |
| [#164723](https://github.com/openclaw/openclaw/pull/164723) | Bug 修复 | Copilot provider 第二个 turn 起所有 tool call 失败（async scope closed） |
| [#163238](https://github.com/openclaw/openclaw/pull/163238) | 安全 | 沙箱 CLI 运行不再暴露宿主文件工具（read/write/edit/ls） |
| [#165147](https://github.com/openclaw/openclaw/pull/165147) | Bug 修复 | GPT-Live relay 接通前不应先应答被叫方 |
| [#165142](https://github.com/openclaw/openclaw/pull/165142) | 性能 | 释放被 continuation timer 持有的已完成 AI runs |
| [#165120](https://github.com/openclaw/openclaw/pull/165120) | Bug 修复 | Discord streaming block preview 保留源码格式 |
| [#165148](https://github.com/openclaw/openclaw/pull/165148) | Bug 修复 | 插件未变更时完成延迟的 model-retirement repair |
| [#158888](https://github.com/openclaw/openclaw/pull/158888) | Cron | 批量恢复中断的 cron receipts，避免重启后数千次串行 SQLite 提交阻塞 |
| [#161641](https://github.com/openclaw/openclaw/pull/161641) | Bug 修复 | 移除 `group:*` core allowlist 的误报 "unknown entry" 警告 |
| [#141004](https://github.com/openclaw/openclaw/pull/141004) | 审计 | 运行时 skill 使用情况写入持久审计表面 |
| [#165103](https://github.com/openclaw/openclaw/pull/165103) | Skills | 同步 autoreview 至 canonical 0.3.0/0.4.0，支持 `--codex-speed ultrafast` |

**整体评估**：项目在性能优化（WAL 准入、AI run 释放、列表共享）、安全加固（A2A fail-closed、沙箱隔离、Copilot scope）、渠道扩展（X、Android）与 cron/会话稳定性四条主线上均有实质推进，但 P0 Bug 密度偏高，发布节奏与质量平衡仍面临考验。

---

## 4. 社区热点

以下为今日评论数最多、反应最集中的 Issues/PRs：

### 🔥 Issue #42475 — Per-agent cost budget enforcement（24 👍，24 评论）
- [链接](https://github.com/openclaw/openclaw/issues/42475)
- **诉求**：在 gateway 层增加 per-agent 日/月成本上限，在模型调用分发前强制执行，防止失控消费。
- **分析**：这是典型的运维/财务治理需求，尤其在多 agent、多模型混合部署场景下极为迫切。现有 `session-cost-usage.ts` 仅做事后统计，缺乏事前熔断能力。该 Issue 已标记 `needs-product-decision`，说明社区期待官方路线图。

### 🔥 Issue #97616 — Hook/tool child process zombie leak（17 👍，17 评论）
- [链接](https://github.com/openclaw/openclaw/issues/97616)
- **诉求**：修复 hook/tool 执行后未回收子进程（`openclaw-hooks`、`bash`、`codex` 等）导致的 zombie 累积与运行时退化。
- **分析**：回归型问题，影响长期运行实例的稳定性，属于 P1 但实际危害接近 P0。

### 🔥 Issue #150635 — Short-term recall retention evicts recalled entries nightly（17 评论）
- [链接](https://github.com/openclaw/openclaw/issues/150635)
- **诉求**：dreaming deep phase 在短期记忆满 512 条后无法 promote 任何内容，每晚摄入的零 recall 条目挤出有效记忆。
- **分析**：直接影响 memory core 的长期价值，属于行为级 bug，用户期望 dreaming 能真正将短期记忆提升为长期记忆。

### 🔥 Issue #114612 — SQLite unbounded growth: memory tables no retention（16 评论）
- [链接](https://github.com/openclaw/openclaw/issues/114612)
- **诉求**：`memory_index_chunks` 与 `memory_embedding_cache` 表无保留策略，每次 memory extraction 均增长，最终填满磁盘。
- **分析**：生产环境已出现磁盘告警，属于数据面的严重隐患，需尽快引入 eviction/retention 策略。

### 🔥 PR #161609 — Select plugin-owned self-hosted executors（XL，ready for maintainer）
- [链接](https://github.com/openclaw/openclaw/pull/161609)
- **诉求**：Self-hosted Agents API 场景下，由 operator 选择 plugin 提供 workspace 与 executor，而非硬编码连接。
- **分析**：填补了自托管 Agents API 的基础设施灵活性空白，架构意义重大。

---

## 5. Bug 与稳定性

### 🚨 P0 / Release Blocker（6 个）

| Issue | 标题 | 状态 | 链接 |
|---|---|---|---|
| #164396 | 2026.9.8 新装 Windows 11 + Node 22 LTS 无法连接本地 gateway | [OPEN] | [链接](https://github.com/openclaw/openclaw/issues/164396) |
| #164422 | macOS 非 root 更新自毒化 launcher group (wheel)，阻塞后续所有更新 | [CLOSED] | [链接](https://github.com/openclaw/openclaw/issues/164422) |
| #158390 | plugin-captures tmp 目录永不清磁盘无限增长 | [OPEN] | [链接](https://github.com/openclaw/openclaw/issues/158390) |
| #157415 | Doctor --fix 拒绝外部安装的 acpx/codex 插件迁移 | [OPEN] | [链接](https://github.com/openclaw/openclaw/issues/157415) |
| #143752 | 中断的 package activation 可能 stranded canonical CLI | [OPEN] | [链接](https://github.com/openclaw/openclaw/issues/143752) |
| #143334 | 子代理完成交付卡住 requester，queued user message 被饿死 | [OPEN] | [链接](https://github.com/openclaw/openclaw/issues/143334) |

> ⚠️ #164396 与 #164422 直接影响新用户 onboarding 与更新链路，建议优先 hotfix。

### 🔴 P1 高严重度（15 个关键项）

| Issue | 标题 | 已有 Fix PR | 链接 |
|---|---|---|---|
| #97616 | Zombie 子进程泄漏 | ❌ | [链接](https://github.com/openclaw/openclaw/issues/97616) |
| #114612 | SQLite memory 表无保留策略 | ❌ | [链接](https://github.com/openclaw/openclaw/issues/114612) |
| #144291 | Config hot-reload 中止所有 in-flight agent turn | ❌ | [链接](https://github.com/openclaw/openclaw/issues/144291) |
| #161379 | Gateway 因 OpenAI catalog TTL < per-agent refresh time 钉死单核 | ❌ | [链接](https://github.com/openclaw/openclaw/issues/161379) |
| #157126 | claude-cli MCP bridge 继承首次启动请求 scope，owner turn 丢失 operator.admin | ❌ | [链接](https://github.com/openclaw/openclaw/issues/157126) |
| #162119 | Codex 间歇性 403 owner-verification（模型切换后） | ❌ | [链接](https://github.com/openclaw/openclaw/issues/162119) |
| #145309 |

---

## 横向生态对比



以下是基于各项目 2026-10-05 动态数据生成的「今日重點」摘要：

---

### **今日重點更新**

#### 1. NanoClaw 发布首个日历版本候选 `v2026.10.0-rc.1`
*   **项目：** [NanoClaw](https://github.com/nanocoai/nanoclaw)
*   **更新内容：** 发布首个日历版本候选，引入 `stable`/`beta` 更新通道，默认跟随已发布 Release 而非 `main` 分支；同时将 `/add-whatsapp` 依赖的 Baileys 版本升级至 `7.0.0-rc14`，修复关键消息伪造漏洞。
*   **影响：** 更新机制转向更可控的发布通道，且及时封堵了高危安全漏洞，为 2026.10.0 稳定版发布打下基础。

#### 2. OpenClaw 新增 X (Twitter) 渠道并合并大量关键修复
*   **项目：** [OpenClaw](https://github.com/openclaw/openclaw)
*   **更新内容：** 今日合并 203 条 PR，新增 X (Twitter) mentions channel plugin；同时修复了 Copilot provider 多轮 tool call 失败、沙箱 CLI 暴露宿主文件工具、以及 Windows 新装无法连接本地网关等多个 P0 级问题。
*   **影响：** 渠道生态扩展至 X/Twitter，多条高优先级安全与可用性修复有助于缓解项目当前的稳定性压力。

#### 3. NanoBot 实现会话级子代理任务管理与参数正确性修复
*   **项目：** [NanoBot](https://github.com/HKUDS/nanobot)
*   **更新内容：** 合并 `feat(subagent): add session-owned task messaging and cancellation` (#5985)，支持会话级子代理的创建、消息通信、实时观察与取消；同时修复了 `reasoningEffort` 导致 38 个 `openai_compat` provider 丢弃 `temperature` 的问题 (#6005)。
*   **影响：** 子代理能力达到生产可用级别，且避免了兼容模型因参数静默丢弃而出现采样行为异常。

#### 4. PicoClaw 集中修复配置持久化、Agent 路由与 Channel Panic
*   **项目：** [PicoClaw](https://github.com/sipeed/picoclaw)
*   **更新内容：** 集中合并 7 条修复 PR，解决多 Key 模型配置自动保存时丢失密钥、异步工具结果错误投递到默认会话、以及 `Manager.Reload` 遇 nil Channel 导致 panic 等问题。
*   **影响：** 显著提升了配置管理、Agent 路由和 Channel 重载的稳定性，降低了网关崩溃风险。

#### 5. ZeroClaw 修复配置保存导致数据丢失的 P0 级问题
*   **项目：** [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)
*   **更新内容：** 合并 `fix(config): refuse unproven full saves over existing files` (#11527)，防止配置保存时用近空文件覆盖用户已填充的 `config.toml`。
*   **影响：** 直接解决了用户配置和 Agent 设置被意外清空的数据丢失风险。

#### 6. CoPaw 修复 Console 聊天静默丢弃消息问题
*   **项目：** [CoPaw](https://github.com/agentscope-ai/CoPaw)
*   **更新内容：** 关闭 `fix(console): reject conflicting chat payloads` (#7299)，修复同一 chat 存在活跃 run 时，第二个非重连 API 请求返回 200 但不执行新 payload 的问题。
*   **影响：** 解决了外部集成调用时的“假成功”陷阱，避免了静默数据丢失。

#### 7. NullClaw 改善 macOS 与 Android 平台健壮性
*   **项目：** [NullClaw](https://github.com/nullclaw/nullclaw)
*   **更新内容：** 合并 `fix(cli): append streamed stdout instead of overwriting offset zero` (#1006)，修复 macOS 上 CLI 流式输出被截断的问题；同时合并了 Android (Termux) 平台的 curl 安全回退修复 (#966)。
*   **影响：** 提升了核心 CLI 输出在特定平台上的完整性，以及移动端网络请求的可靠性。

---

### **活跃度概览**

今日整体开源 AI 智能体项目活跃度维持高位，多个项目在版本发布、关键功能合并和稳定性修复上取得实质进展。其中，**NanoClaw** 发布了首个日历版本 RC，**OpenClaw**、**NanoBot** 和 **ZeroClaw** 在功能扩展与关键 Bug 修复上动作频繁，**PicoClaw** 和 **CoPaw** 则集中解决了高影响面的运行时崩溃与数据丢失问题。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-10-05）

> 数据窗口：截至 2026-10-04 的过去 24 小时 GitHub 更新  
> 数据说明：PR 评论数在给定数据中为 `undefined`，因此 PR 热度主要依据关联 Issue、更新时间和变更影响判断。

## 1. 今日速览

NanoBot 今日保持高活跃：过去 24 小时 PR 更新 49 条，其中 17 条已合并/关闭、32 条待合并；Issue 更新 5 条，3 条关闭、2 条新开/活跃；无新版本发布。项目主线集中在 WebUI 移动端与可访问性修复、Provider 参数正确性修复、子代理能力推进，以及 MCP/Telegram/XLSX 等增强 PR 的持续排队。社区讨论热度中等，热点集中在“静默上下文压缩”“fallback 模型跨渠道通知”“reasoningEffort 影响 temperature”三类问题。整体健康度偏高，但 32 条待合并 PR 和长期 p1 冲突 PR 仍是主要积压风险。

## 2. 版本发布

今日无新版本发布，Releases 为空。已合并/关闭的改动尚未形成版本，用户可见收益可能延迟到下一次发版。

## 3. 项目进展

今日已关闭/合并的重要 PR：

- [HKUDS/nanobot#5985](https://github.com/HKUDS/nanobot/pull/5985) — `feat(subagent): add session-owned task messaging and cancellation`  
  推进会话级子代理创建、消息、检查、定向取消和实时任务观察，WebUI 可保留任务进度与结果。这是今日功能层面最重要的推进之一。

- [HKUDS/nanobot#6005](https://github.com/HKUDS/nanobot/pull/6005) — `fix(providers): preserve temperature for compatible reasoning models`  
  修复 #6002：启用 `reasoning_effort` 后，`OpenAICompatProvider` 不应再对所有模型丢弃 `temperature`，对 Mistral 等兼容模型保留配置。

- [HKUDS/nanobot#6054](https://github.com/HKUDS/nanobot/pull/6054) — `docs(memory): correct Git layout and history search example`  
  修正 memory 指南中的 Git 目录布局和 JSONL 增量搜索示例，降低用户配置与检索误导。

- [HKUDS/nanobot#6049](https://github.com/HKUDS/nanobot/pull/6049) — `fix(webui): keep edit diffs visible and distinguish file creation`  
  修复 WebUI 中编辑 diff 被活动详情菜单隐藏、文件创建误标为 Edited 的回归问题。

- WebUI 移动端/触控/焦点批量关闭：  
  [#6058](https://github.com/HKUDS/nanobot/pull/6058)、[#6059](https://github.com/HKUDS/nanobot/pull/6059)、[#6056](https://github.com/HKUDS/nanobot/pull/6056)、[#6055](https://github.com/HKUDS/nanobot/pull/6055)、[#6053](https://github.com/HKUDS/nanobot/pull/6053)、[#6052](https://github.com/HKUDS/nanobot/pull/6052)、[#6061](https://github.com/HKUDS/nanobot/pull/6061)  
  覆盖 iOS 键盘遮挡、移动端侧栏、Escape 焦点恢复、触控设备操作可发现性、移动端输入缩放等问题。

量化看，今日 PR 关闭率为 17/49 ≈ 34.7%，Issue 关闭率为 3/5 = 60%。项目在子代理、Provider 正确性、WebUI 稳定性与移动体验上明显前进；但待合并 PR 仍有 32 条，净积压压力未完全缓解。

## 4. 社区热点

今日讨论最活跃的 Issue：

- [HKUDS/nanobot#5900](https://github.com/HKUDS/nanobot/issues/5900) — `[CLOSED] [enhancement] Silent context compaction and reduce WeChat channel polling log verbosity`  
  2 条评论，今日 Issue 中互动最高。诉求是上下文压缩不要向 WeChat 等频道发送通知，并降低轮询日志冗余。

- [HKUDS/nanobot#6029](https://github.com/HKUDS/nanobot/issues/6029) — `[OPEN] [bug, priority: p2] Feature Request: Allow silent context compaction and suppress channel broadcasts for background idle/dream cycles`  
  1 条评论。与 #5900 高度相关，说明即使 #5900 已关闭，后台 idle/dream 周期的广播抑制仍有用户诉求，可能需要确认修复覆盖范围。

- [HKUDS/nanobot#6002](https://github.com/HKUDS/nanobot/issues/6002) — ``reasoningEffort` silently drops `temperature` for all 38 `openai_compat` providers``  
  1 条评论。影响面大，已由 #6005 修复，属于高价值技术讨论。

- [HKUDS/nanobot#6031](https://github.com/HKUDS/nanobot/issues/6031) — `Notify chat channels when a fallback model serves a turn (currently WebUI-only)`  
  暂无评论，但已有对应 PR [#6062](https://github.com/HKUDS/nanobot/pull/6062)，说明维护者/贡献者响应较快。

PR 侧，#6062、#6057、#6009 等均为今日更新，但因评论数缺失，无法按互动量排序。整体看，社区关注点正从“功能有无”转向“后台行为是否打扰用户、跨渠道是否可观测、参数是否隐式变化”。

## 5. Bug 与稳定性

按严重程度排列：

1. **Provider 参数被静默丢弃** — [#6002](https://github.com/HKUDS/nanobot/issues/6002)  
   状态：已关闭。`reasoningEffort` 非 `null`/`"none"` 时，38 个 `openai_compat` Provider 全部停止发送 `temperature`，不止 o1/o3/o4 类推理模型。已有 fix PR [#6005](https://github.com/HKUDS/nanobot/pull/6005)，已关闭/合并。影响采样行为，严重度较高。

2. **XLSX 声明范围外单元格被静默丢弃** — [#6060](https://github.com/HKUDS/nanobot/pull/6060)  
   状态：OPEN。XLSX 可包含超出声明 used range 的单元格，openpyxl 只读模式信任声明范围，导致文档预览、`read_file`、`grep` 丢数据。PR 自身即修复，建议优先审查。

3. **后台 idle/dream 压缩广播打扰频道** — [#6029](https://github.com/HKUDS/nanobot/issues/6029)  
   状态：OPEN，p2。自动上下文压缩向活跃频道广播“Compressing context…”，与 #5900 同源。暂无直接 fix PR 数据。

4. **Fallback 模型切换对聊天频道不可见** — [#6031](https://github.com/HKUDS/nanobot/issues/6031)  
   状态：OPEN。Failover 已工作，但 QQ、Telegram、Discord、Slack 等频道无提示，仅 WebUI 有 observer。已有 PR [#6062](https://github.com/HKUDS/nanobot/pull/6062) 待合并。

5. **Obsidian CLI 在 nanobot 下找不到 Obsidian** — [#6024](https://github.com/HKUDS/nanobot/issues/6024)  
   状态：CLOSED。Ubuntu、GNOME on Wayland、Obsidian 1.13.7 环境下，nanobot 内 CLI 报找不到 Obsidian，终端正常，疑似 `XDG_RUNTIME_DIR` 未传递。数据中无对应 fix PR。

6. **WebUI 编辑 diff 回归** — [#6049](https://github.com/HKUDS/nanobot/pull/6049)  
   状态：CLOSED。完成答案隐藏文件编辑 diff，文件创建误标 Edited。已修复。

7. **WebUI 侧栏初始请求失败状态错误** — [#6009](https://github.com/HKUDS/nanobot/pull/6009)  
   状态：OPEN。初始 fetch 失败被当作空 store，PR 改为只读状态并每 3 秒重试。

8. **大 JSON 工具结果隐藏关键字段** — [#5590](https://github.com/HKUDS/nanobot/pull/5590)  
   状态：OPEN。过大 JSON 可能把根状态、错误、artifact 字段藏在嵌套值中，PR 增加摘要但保留完整输出。

## 6. 功能请求与路线图信号

- **静默上下文压缩 / 抑制频道广播**：  
  [#5900](https://github.com/HKUDS/nanobot/issues/5900) 已关闭，[#6029](https://github.com/HKUDS/nanobot/issues/6029) 新开。若 #5900 未覆盖 dream/heartbeat，建议补充 per-channel 开关和日志级别控制，可能进入下一版本。

- **Fallback 模型跨渠道通知**：  
  [#6031](https://github.com/HKUDS/nanobot/issues/6031) + [#6062](https://github.com/HKUDS/nanobot/pull/6062) 闭合度高，若 review 顺利，可能成为下一版本的用户可见改进。

- **定时任务选择聊天**：  
  [#6057](https://github.com/HKUDS/nanobot/pull/6057) 让用户在 WebUI 查看和更改定时任务绑定的聊天，涉及执行聊天、记录 turn、默认回复路由，属于生产级 WebUI 控制，可能近期纳入。

- **子代理会话级任务**：  
  [#5985](https://github.com/HKUDS/nanobot/pull/5985) 已关闭/合并，若进入发布，将是下版本重要能力。

- **MCP 与 Telegram 增强**：  
  [#5388](https://github.com/HKUDS/nanobot/pull/5388) MCP schema 字节预算、[#5387](https://github.com/HKUDS/nanobot/pull/5387) Telegram 可复用贴纸、[#5386](https://github.com/HKUDS/nanobot/pull/5386) MCP Apps 结果元数据，均为 opt-in/增强型，等待 review，可能延后。

- **Provider 能力声明式重构**：  
  [#5204](https://github.com/HKUDS/nanobot/pull/5204) `ResponsesCapabilities` 声明式 profile，p1 且 conflict，路线图重要但阻塞，需维护者优先处理。

## 7. 用户反馈摘要

从 Issue 描述可提炼的真实用户痛点：

- **后台维护通知打扰聊天频道**：用户设置 `idleCompactAfterMinutes: 15` 后，上下文压缩向 WeChat 等频道发通知；dream/heartbeat 也会广播状态。见 [#5900](https://github.com/HKUDS/nanobot/issues/5900)、[#6029](https://github.com/HKUDS/nanobot/issues/6029)。

- **WeChat channel polling 日志过于啰嗦**：用户希望降低轮询日志 verbosity。见 [#5900](https://github.com/HKUDS/nanobot/issues/5900)。

- **Provider 参数隐式行为**：`reasoningEffort` 导致所有 38 个 `openai_compat` Provider 停发 `temperature`，用户对“规则超出预期范围”敏感。见 [#6002](https://github.com/HKUDS/nanobot/issues/6002)。

- **Fallback 不可观测**：模型 failover 后聊天频道无信号，用户不知道回复来自备用模型。见 [#6031](https://github.com/HKUDS/nanobot/issues/6031)。

- **桌面 Linux/Wayland 集成问题**：Obsidian CLI 在 nanobot 环境下因 `XDG_RUNTIME_DIR` 疑似未传递而失败。见 [#6024](https://github.com/HKUDS/nanobot/issues/6024)。

- **文件读取可靠性**：XLSX 声明范围外单元格被静默丢弃，影响 `read_file`、`grep` 和预览可信度。见 [#6060](https://github.com/HKUDS/nanobot/pull/6060)。

使用场景覆盖 WeChat、QQ、Telegram、Discord、Slack 等聊天频道，Obsidian 桌面端，WebUI 移动端，定时任务，子代理，MCP 和 Telegram 贴纸。数据中无明确“满意”类评论，不满意主要集中在通知噪音、隐式参数变化、跨渠道可观测性和文件读取可靠性。

## 8. 待处理积压

长期未响应或需维护者重点关注：

- [HKUDS/nanobot#5204](https://github.com/HKUDS/nanobot/pull/5204) — OPEN since 2026-08-01，`[provider, refactor, priority: p1, conflict]`  
  `refactor(providers): declare Responses capabilities`，p1 且 conflict，长期未合并。建议优先解决冲突并推进，否则会影响 Responses 相关能力收敛。

- [HKUDS/nanobot#5388](https://github.com/HKUDS/nanobot/pull/5388) — OPEN since 2026-08-13  
  `feat(agent): budget model-visible MCP schemas`，opt-in MCP schema 字节预算。

- [HKUDS/nanobot#5387](https://github.com/HKUDS/nanobot/pull/5387) — OPEN since 2026-08-13  
  `feat(telegram): support reusable sticker replies`。

- [HKUDS/nanobot#5386](https://github.com/HKUDS/nanobot/pull/5386) — OPEN since 2026-08-13  
  `feat(mcp): preserve MCP Apps result metadata`。

- [HKUDS/nanobot#5590](https://github.com/HKUDS/nanobot/pull/5590) — OPEN since 2026-08-28  
  `fix: summarize persisted JSON tool results`，影响大 JSON 工具结果可读性。

整体上，今日 32 条待合并 PR 是主要积压面。建议维护者按 `p1/conflict/回归` 优先 triage，优先处理 #5204、#6062、#6060、#6009、#6057，并对 #6029 与 #5900 的修复覆盖关系做明确说明。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报（2026-10-05）

> 数据来源：NousResearch/hermes-agent GitHub 过去 24 小时动态。今日 Issues 更新 50 条（新开/活跃 43，已关闭 7），PR 更新 50 条（待合并 47，已合并/关闭 3），新版本发布 0 个。

## 1. 今日速览

- 项目今日维持**高活跃度**：Issues 与 PR 各更新 50 条，说明社区参与和维护者响应都在持续。
- 但活跃结构偏“输入型”：Issues 新开/活跃 43 条、关闭仅 7 条；PR 待合并 47 条、合并/关闭仅 3 条，**合并吞吐明显低于新增/讨论速度**，积压压力上升。
- 讨论焦点集中在 Agent 自动集成阻塞、web toolset 组合失败、Desktop 安装/更新、profile/cron 隔离，以及 `execute_code` 安全边界。
- 稳定性方面出现 1 个 P1 会话响应中断问题，以及多个 P2 级 session、Windows、更新器、本地模型和 Desktop 缺陷；已有部分修复 PR 对应，如 [#132950](https://github.com/NousResearch/hermes-agent/pull/132950) 对应 `todo_list` 参数修复。
- 今日无新版本发布，路线图信号主要指向：更新器可靠性、Matrix 集成、技能生态治理、Windows 平台兼容与代码健康。

## 2. 版本发布

今日无新版本发布，本节按模板省略。

## 3. 项目进展

今日 PR 层面共 3 条合并/关闭，但提供的摘要列表中未展示具体已合并 PR，因此无法逐条复盘。可从**已关闭 Issues**和**待合并 PR**判断项目推进方向：

**已关闭 Issue 反映的修复进展：**
- [#132607](https://github.com/NousResearch/hermes-agent/issues/132607) `[CLOSED]`：web toolset 交叉组合导致 `web_search` 失败，已关闭。
- [#69208](https://github.com/NousResearch/hermes-agent/issues/69208) `[CLOSED]`：Gemini 经 Venice 多轮工具调用 HTTP 400，已关闭。
- [#124526](https://github.com/NousResearch/hermes-agent/issues/124526) `[CLOSED]`：Windows 非 ASCII 用户名破坏 `uv` Python 路径解析，已关闭。
- [#79065](https://github.com/NousResearch/hermes-agent/issues/79065) `[CLOSED]`：Desktop 在只读 workspace 下附件上传失败，已关闭。
- [#91264](https://github.com/NousResearch/hermes-agent/issues/91264) `[CLOSED]`：Kanban goal-mode judge/provider 失败消耗空续跑轮次，已关闭。

**待合并 PR 中的重点推进：**
- 更新器/Windows 可靠性链：[#132345](https://github.com/NousResearch/hermes-agent/pull/132345)、[#132354](https://github.com/NousResearch/hermes-agent/pull/132354)、[#132346](https://github.com/NousResearch/hermes-agent/pull/132346)、[#132361](https://github.com/NousResearch/hermes-agent/pull/132361)、[#132338](https://github.com/NousResearch/hermes-agent/pull/132338)，围绕 crash-safe commit、更新标记锁、Windows 被杀更新器恢复、E2E 门禁。
- 技能与工具参数修复：[#132950](https://github.com/NousResearch/hermes-agent/pull/132950) 修复 `coerce_tool_args` 对不可解析容器字符串的包装；[#132925](https://github.com/NousResearch/hermes-agent/pull/132925) 修复技能发现中下划线/点前缀目录；[#110011](https://github.com/NousResearch/hermes-agent/pull/110011) 补技能直接处理器变更捕获与回滚。
- 会话与 WebUI：[#132948](https://github.com/NousResearch/hermes-agent/pull/132948) 修复 YOLO 恢复、`failure_reason` 暴露、fork 提示竞态。
- Matrix 集成：[#73205](https://github.com/NousResearch/hermes-agent/pull/73205)、[#62088](https://github.com/NousResearch/hermes-agent/pull/62088)。
- 代码健康：[#132646](https://github.com/NousResearch/hermes-agent/pull/132646) 引入每单元 CC/大小 ratchet 和 Hermes 不变量规则。

**整体判断：** 项目在“更新器可靠性、技能治理、Matrix 集成、CI 防回归”上持续向前，但今日合并率仅 3/50，说明大量工作仍停留在待评审状态，短期交付速度受维护者带宽制约。

## 4. 社区热点

> PR 评论数在提供数据中为 `undefined`，因此以下热度排名主要基于 Issues 评论数和 👍 数。

1. [#125727](https://github.com/NousResearch/hermes-agent/issues/125727) — 23 条评论  
   `[OPEN] [invalid, comp/agent, P3] Automated Nous integration is blocked`  
   自动 Nous-to-Enterkey 合并出现大量文件冲突。诉求是**自动化集成流程需要更强冲突解决/隔离机制**，否则会长期阻塞。

2. [#132607](https://github.com/NousResearch/hermes-agent/issues/132607) — 11 条评论，已关闭  
   `[CLOSED] More 'web' toolset intersections leading to failed web_search`  
   用户反馈只有 `hermes chat -t web` 可靠，web 与其他 toolset 组合会失败。背后是**工具组合矩阵缺乏稳定性保障**。

3. [#38519](https://github.com/NousResearch/hermes-agent/issues/38519) — 10 条评论，👍 16  
   `[OPEN] [Feature]: Hermes Desktop frontend install only`  
   希望只安装 Desktop 前端并远程连接已部署 agent。高 👍 说明**远程/分离部署场景有真实需求**。

4. [#49578](https://github.com/NousResearch/hermes-agent/issues/49578) — 4 条评论  
   `[OPEN] [type/security, P3] execute_code (Python) bypasses agent file edit restrictions`  
   `execute_code` 可绕过 `patch`/`write_file` 对敏感配置文件的限制，涉及**安全边界一致性**。

5. [#54650](https://github.com/NousResearch/hermes-agent/issues/54650) — 4 条评论  
   `[OPEN] [P2] Cron scheduler ignores job profile — always runs as default identity`  
   cron 任务不加载目标 profile，导致 HDLS 流水线身份错乱。诉求是**多 profile 隔离必须覆盖调度器**。

6. [#47092](https://github.com/NousResearch/hermes-agent/issues/47092) — 4 条评论  
   `[OPEN] [Feature] pre_agent_invocation hook`  
   希望在 agent 执行前增加规范拦截点，与现有 `pre_gateway_dispatch`、`pre_tool_call` 形成完整插件钩子链。

7. [#4256](https://github.com/NousResearch/hermes-agent/issues/4256) — 4 条评论，👍 7  
   `[OPEN] [UX] Support configurable keybindings via config.yaml`  
   硬编码快捷键与 tmux/screen 冲突，用户希望可配置，属于长期可访问性诉求。

## 5. Bug 与稳定性

按严重程度排列，标注是否有对应 fix PR：

**P1 / 严重**
- [#132949](https://github.com/NousResearch/hermes-agent/issues/132949) `[OPEN] [P1]`：普通指令只返回 `[response interrupted]` 占位符，会话看似成功但内容丢失。**暂无 fix PR。**

**安全相关**
- [#49578](https://github.com/NousResearch/hermes-agent/issues/49578) `[OPEN] [P3, security]`：`execute_code` 绕过 agent 文件编辑限制。**暂无 fix PR，needs-decision。**
- [#31419](https://github.com/NousResearch/hermes-agent/issues/31419) `[OPEN] [P2, security]`：Windows 下 `asyncio.subprocess_exec` 对 `.cmd/.bat` shim 的 argv 元字符二次解析。**暂无 fix PR。**

**P2 稳定性 / 回归**
- [#132935](https://github.com/NousResearch/hermes-agent/issues/132935)：`/model --provider openai-codex` 中途切换报成功但未重绑 live client，下一条消息 403。**暂无 fix PR。**
- [#132862](https://github.com/NousResearch/hermes-agent/issues/132862)：LSP 语言服务器在 `os._exit` 后成为孤儿进程。**暂无 fix PR。**
- [#132883](https://github.com/NousResearch/hermes-agent/issues/132883)：Blank Slate 安装后仍保留 58 个 bundled skills。**暂无 fix PR。**
- [#132778](https://github.com/NousResearch/hermes-agent/issues/132778)：Managed llama.cpp worker 的 Metal 毒化状态被无限重试，不回收 worker。**暂无 fix PR。**
- [#128859](https://github.com/NousResearch/hermes-agent/issues/128859)：Desktop 在 in-place compaction 后 stale-transcript guard 永久触发。**暂无 fix PR。**
- [#132939](https://github.com/NousResearch/hermes-agent/issues/132939)：压缩后 display history 重复显示 tail 副本。**暂无 fix PR。**
- [#132942](https://github.com/NousResearch/hermes-agent/issues/132942)：`todo_list` 不可解析字符串被包装为 `[raw]`，TodoStore 替换为 invalid placeholder。**有 fix PR：[#132950](https://github.com/NousResearch/hermes-agent/pull/132950)。**
- [#132953](https://github.com/NousResearch/hermes-agent/issues/132953)：多路复用 secondary profile 的 Email 重连后卡在 `fatal`。**暂无 fix PR。**
- [#132951](https://github.com/NousResearch/hermes-agent/issues/132951)：Command STT provider 将静音采集误报为 `Transcription failed`。**暂无 fix PR。**
- [#131164](https://github.com/NousResearch/hermes-agent/issues/131164)：`hermes gateway restart` 从 venv 脚本重写 systemd unit，导致 crash loop。**暂无 fix PR。**
- [#122813](https://github.com/NousResearch/hermes-agent/issues/122813)：`gateway_state.json` 的 `active_agents` 在 cron/API-server 起止时未持久化。**暂无 fix PR。**
- [#54650](https://github.com/NousResearch/hermes-agent/issues/54650)：Cron 调度器忽略 job profile。**暂无 fix PR。**

**已关闭的 Bug**
- [#132607](https://github.com/NousResearch/hermes-agent/issues/132607)：web toolset 交叉导致 `web_search` 失败。
- [#69208](https://github.com/NousResearch/hermes-agent/issues/69208)：Gemini 经 Venice 多轮工具调用 400。
- [#124526](https://github.com/NousResearch/hermes-agent/issues/124526)：Windows 非 ASCII 用户名破坏 `uv` 路径。
- [#79065](https://github.com/NousResearch/hermes-agent/issues/79065)：Desktop 只读 workspace 附件失败。
- [#91264](https://github.com/NousResearch/hermes-agent/issues/91264)：Kanban goal-mode 空续跑轮次。

## 6. 功能请求与路线图信号

**高信号、可能进入后续版本：**
- [#38519](https://github.com/NousResearch/hermes-agent/issues/38519) Desktop frontend-only 安装，👍 16，P2。若 Desktop 远程部署是重点，可能优先纳入。
- [#4256](https://github.com/NousResearch/hermes-agent/issues/4256) 可配置 keybindings，👍 7，P3。长期 UX 诉求，但未见 PR。
- [#47092](https://github.com/NousResearch/hermes-agent/issues/47092) `pre_agent_invocation` hook。插件生态扩展信号强。
- [#41957](https://github.com/NousResearch/hermes-agent/issues/41957) Windows 系统代理支持。
- [#42106](https://github.com/NousResearch/hermes-agent/issues/42106) macOS Spotlight/Desktop launcher。
- [#132920](https://github.com/NousResearch/hermes-agent/issues/132920) `hermes cron list` 显示所有 profile 的 cron 任务。
- [#132893](https://github.com/NousResearch/hermes-agent/issues/132893) `skill_linter` 执行 Anthropic 更新的技能编写规则。

**已有 PR 支撑、更接近落地：**
- Matrix 渠道提示与技能绑定：[#73205](https://github.com/NousResearch/hermes-agent/pull/73205)。
- Matrix spec-correct threading/reply：[#62088](https://github.com/NousResearch/hermes-agent/pull/62088)。
- 技能发现与回滚治理：[#132925](https://github.com/NousResearch/hermes-agent/pull/132925)、[#110011](https://github.com/NousResearch/hermes-agent/pull/110011)。
- 工具参数修复：[#132950](https://github.com/NousResearch/hermes-agent/pull/132950)。
- Google Workspace 空搜索返回 `[]`：[#132952](https://github.com/NousResearch/hermes-agent/pull/132952)。
- 代码健康 ratchet：[#132646](https://github.com/NousResearch/hermes-agent/pull/132646)。

**判断：** 下一版本更可能优先覆盖更新器可靠性、技能/工具参数、Matrix 集成和 Windows 兼容；Desktop frontend-only 与 keybindings 仍需维护者决策。

## 7. 用户反馈摘要

- **工具组合易碎：** 用户反馈 `web_search` 在混合 toolset 下频繁失败，只有 `-t web` 可靠，说明工具选择/交集逻辑存在认知负担。
- **Profile 隔离不彻底：** cron 忽略 job profile、`cron list` 只显示当前 profile、ACP 命名 custom provider 恢复后 401、Email secondary profile 状态卡死，均指向多 profile 场景下的身份与状态隔离缺口。
- **Windows 体验仍是痛点集中区：** 非 ASCII 用户名、系统代理不读取、`.cmd/.bat` argv 解析、Docker 下 POSIX 路径、更新器被杀后恢复、测试收集期崩溃等，跨安装、更新、运行、测试全链路。
- **Desktop 场景需求明确：** 希望 frontend-only 安装、只读 workspace 附件可用、更新门禁与 hand-off 可靠、压缩后 transcript 不重复。
- **安全边界受关注：** `execute_code` 绕过文件编辑限制被提出，属于 agent 权限模型的一致性问题。
- **会话/上下文压缩问题突出：** `[response interrupted]` 占位、compaction 后重复显示、stale guard 永久触发，直接影响长会话可信度。
- **本地模型稳定性：** Ollama/web toolset 与 Metal 毒化 worker 重试问题，影响本地模型用户体验。
- **正面信号：** Desktop frontend-only 获 16 👍、keybindings 获 7 👍，说明社区对可定制部署和 UX 改进有明确期待。

## 8. 待处理积压

**长期未关闭的重要 Issue：**
- [#4256](https://github.com/NousResearch/hermes-agent/issues/4256)，创建于 2026-03-31，P3，👍 7，可配置 keybindings。
- [#31419](https://github.com/NousResearch/hermes-agent/issues/31419)，创建于 2026-05-24，P2 安全，Windows `.cmd/.bat` argv 解析。
- [#38519](https://github.com/NousResearch/hermes-agent/issues/38519)，创建于 2026-06-03，P2，👍 16，Desktop frontend-only。
- [#42106](https://github.com/NousResearch/hermes-agent/issues/42106)，创建于 2026-06-08，P3，macOS Spotlight launcher。
- [#41957](https://github.com/NousResearch/hermes-agent/issues/41957)，创建于 2026-06-08，P3，Windows 系统代理。
- [#47092](https://github.com/NousResearch/hermes-agent/issues/47092)，创建于 2026-06-16，P3，`pre_agent_invocation` hook。
- [#49578](https://github.com/NousResearch/hermes-agent/issues/49578)，创建于 2026-06-20，P3 安全，`execute_code` 绕过限制。
- [#54650](https://github.com/NousResearch/hermes-agent/issues/54650)，创建于 2026-06-29，P2，cron 忽略 job profile。

**长期开放的 PR：**
- [#62088](https://github.com/NousResearch/hermes-agent/pull/62088)，创建于 2026-07-10，Matrix threading。
- [#73205](https://github.com/NousResearch/hermes-agent/pull/73205)，创建于 2026-07-28，Matrix channel prompts/skill bindings。
- [#73238](https://github.com/NousResearch/hermes-agent/pull/73238)，创建于 2026-07-28，gateway 生成媒体投递。
- [#75212](https://github.com/NousResearch/hermes-agent/pull/75212)，创建于 2026-07-31，himalaya skill v2 schema。
- [#82788](https://github.com/NousResearch/hermes-agent/pull/82788)，创建于 2026-08-09，Docker vision POSIX 路径。
- [#110011](https://github.com/NousResearch/hermes-agent/pull/110011)，创建于 2026-09-13，技能变更捕获与回滚。
- [#113339](https://github.com/NousResearch/hermes-agent/pull/113339)、[#113341](https://github.com/NousResearch/hermes-agent/pull/113341)、[#115548](https://github.com/NousResearch/hermes-agent/pull/115548)，创建于 2026-09-16/19，Windows 测试与 CI 防回归。

**维护者关注建议：** 更新器 PR 链存在明确 stacked merge 顺序，需优先理清合并路径；同时 P1 会话中断与 `execute_code` 安全问题建议优先分级处理，避免积压进一步扩大。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



# PicoClaw 项目动态日报 — 2026-10-05

---

## 1. 今日速览

过去 24 小时，PicoClaw 项目活跃度**中等偏高**，以修复性合并为主。PR 合并/关闭率达 78%（9 条中 7 条已关闭），且由同一位贡献者 `x1F916` 包揽了其中 4 条关键修复，涵盖配置持久化、Agent 路由、Channel 重载安全性和更新器架构匹配——表明项目正在经历一轮集中的稳定性收敛。但 Issues 层面表现疲软：4 条 Issues 中 3 条为 Open 状态且已标记 `stale`，社区新鲜输入不足，维护者响应周期较长。

---

## 2. 版本发布

**无新版本发布。** 昨日无 Release 记录，当前最新版本仍为 v0.3.1（commit `2cf030d2`）。

---

## 3. 项目进展

今日共关闭 7 条 PR，均为修复型变更，无破坏性特性引入。按模块分布如下：

| 模块 | PR | 修复内容 | 贡献者 |
|------|-----|---------|--------|
| **Config** | [#3400](https://github.com/sipeed/picoclaw/pull/3400) | 修复多 Key 模型配置持久化：`expandMultiKeyModels` 重建主条目时丢失 `Enabled` 标志和 Fallbacks 列表，导致每次自动保存（含 v0/v1/v2 配置迁移后）丢失密钥和可用状态 | x1F916 |
| **Agent** | [#3402](https://github.com/sipeed/picoclaw/pull/3402) | 修复路由（非默认）Agent 场景下 Context Manager 调用 `registry.GetDefaultAgent()` 的错误，改为使用实际所属 Agent | x1F916 |
| **Agent** | [#3403](https://github.com/sipeed/picoclaw/pull/3403) | 修复异步工具（`spawn`）结果被错误投递到默认 Agent 主会话的问题，现在结果正确路由到 originating session | x1F916 |
| **Channels** | [#3401](https://github.com/sipeed/picoclaw/pull/3401) | 修复 `Manager.Reload` 中 nil Channel 导致的 panic（`manager.go:1956`），使 Reload 同步且 nil-safe | x1F916 |
| **Updater** | [#3399](https://github.com/sipeed/picoclaw/pull/3399) | 修复 32-bit ARM 架构下 `picoclaw update` 下载到 arm64 归档的问题：资产匹配使用子串包含而非精确匹配，`"arm"` 命中了 `arm64` | x1F916 |
| **Channels** | [#3353](https://github.com/sipeed/picoclaw/pull/3353) | 限制 Tool Feedback 动画生命周期（5 分钟上限 + 首次编辑错误即停止），避免因生命周期清理遗漏导致无限编辑 Channel 消息 | linhongyu510 |
| **Compat** | [#3233](https://github.com/sipeed/picoclaw/pull/3233) | 修复 PR #3222 的向后兼容性问题 | yaotukeji |

**整体评估：** 项目在配置管理、Agent 路由、Channel 稳定性三个维度各取得一项关键修复，外加更新器架构匹配和动画生命周期治理。`x1F916` 的四连合并表明项目存在集中式技术债偿还趋势，健康度正从 v0.3.1 的 panic 风险向更稳定的 v0.3.2 过渡。

---

## 4. 社区热点

### 最活跃 Issue：#3394 — QQ 机器人接口更新但聊天通道未同步
- **链接：** https://github.com/sipeed/picoclaw/issues/3394
- **作者：** qinglt | **评论：** 2 | **👍：** 0
- **诉求：** QQ 机器人的接口已更新，但 QQ 聊天通道（Channel）对应的接口似乎未同步更新，用户期望修复。
- **分析：** 这是典型的多通道适配遗漏问题，说明 QQ 通道的接口封装层可能存在维护滞后。评论 2 条但无 👍，热度中等，但问题具体、影响实际使用。

### 最活跃 PR：#3396 — OneBot 确认反应可配置开关
- **链接：** https://github.com/sipeed/picoclaw/pull/3396
- **作者：** ycsqwan | **状态：** OPEN / stale
- **诉求：** 为 OneBot 通道添加 `reaction_enabled` 配置项（默认 `false`），使 `ReactToMessage` 的自动 emoji 确认（`set_msg_emoji_like`，emoji 289）变为可选，而非对每条群消息无条件触发。
- **分析：** 该 PR 与 Issue #3395 形成完整闭环——用户提出需求，同一作者提交 PR。社区需求明确（OneBot/QQ via NapCat 用户不希望每条消息都被自动点赞），PR 设计合理（opt-in，默认关闭，向后兼容）。但目前标记 `stale`，需维护者介入 review。

---

## 5. Bug 与稳定性

### 严重程度排序：

| 优先级 | Issue/PR | 描述 | 状态 | Fix |
|--------|----------|------|------|-----|
| 🔴 **高** | [#3394](https://github.com/sipeed/picoclaw/issues/3394) | QQ 聊天通道接口未随机器人接口更新，可能导致功能异常或调用失败 | OPEN | 无 |
| 🟠 **中** | [#3392](https://github.com/sipeed/picoclaw/issues/3392) | CLAassistant 不检测 CLA 签名，影响贡献者协议合规性判断 | OPEN | 无（关联 PR #3381） |
| 🟡 **低（已 stale）** | [#3382](https://github.com/sipeed/picoclaw/issues/3382) | DingTalk gateway 在 stream SDK 重连时 panic（send on closed channel, `client.go:161`），v0.3.1 仍可复现 | CLOSED/stale | 无（标记 stale，未修复） |
| 🟢 **已修复** | [#3401](https://github.com/sipeed/picoclaw/pull/3401) | `Manager.Reload` nil Channel panic → **已合并修复** | CLOSED | ✅ |
| 🟢 **已修复** | [#3400](https://github.com/sipeed/picoclaw/pull/3400) | 多 Key 模型配置持久化丢失 → **已合并修复** | CLOSED | ✅ |
| 🟢 **已修复** | [#3402](https://github.com/sipeed/picoclaw/pull/3402) | 路由 Agent 场景 Context Manager 使用默认 Agent → **已合并修复** | CLOSED | ✅ |
| 🟢 **已修复** | [#3403](https://github.com/sipeed/picoclaw/pull/3403) | 异步工具结果错误投递到默认 Agent → **已合并修复** | CLOSED | ✅ |

**关键发现：** DingTalk 的 panic 问题（#3382）虽然已标记 stale/closed，但摘要明确指出在 v0.3.1（commit `2cf030d2`）上仍可复现，且与 #973 同源。该问题属于高危（gateway panic 导致进程退出），但维护者尚未通过 PR 修复，需持续关注。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 关联 PR | 进入下一版本可能性 |
|------|------|---------|-------------------|
| OneBot 自动确认反应可配置 | Issue #3395 | PR #3396（同一作者） | **高** — 需求明确、设计合理、社区有共鸣 |
| OpenAI 切换至 Responses API | PR #3381（XenonR） | 无对应 Issue | **中** — 属于架构升级，需评估兼容性和测试覆盖 |
| QQ 聊天通道接口同步 | Issue #3394 | 无 | **中** — 影响 QQ 用户，但需维护者确认接口变更范围 |

**判断：** OneBot 反应开关（#3395/#3396）最有可能进入下一版本。OpenAI Responses API 切换（#3381）已 stale，需维护者确认方向。QQ 通道接口同步（#3394）取决于上游机器人接口变更的推进节奏。

---

## 7. 用户反馈摘要

**痛点提炼（来自 Issues 评论与描述）：**

- **QQ/OneBot 用户（ycsqwan/qinglt）：**
  - OneBot 通道对每条群消息自动触发 emoji 确认（emoji 289），用户无法关闭，感到干扰 → 需求：可配置开关，默认关闭。
  - QQ 机器人接口已更新但聊天通道未同步，用户怀疑存在遗漏 → 需求：通道适配与上游保持一致。

- **DingTalk 用户（HenryLoveMiller）：**
  - v0.3.1 上 DingTalk stream 模式仍可触发 panic（send on closed channel），问题自 #973 以来未彻底解决 → 需求：彻底修复 gateway 重连逻辑。

- **CLA 签名检测（XenonR）：**
  - CLAassistant 无法检测 CLA 签名，影响贡献者协议自动化管理 → 需求：增强签名识别能力。

**满意信号：** `x1F916` 的四条高质量修复 PR 在同一天集中合并，说明项目维护者对社区贡献的响应效率较高，技术债偿还正在加速。

---

## 8. 待处理积压

以下 Issue/PR 长期未响应，建议维护者关注：

| 编号 | 类型 | 标题 | 创建日期 | 停滞天数 | 风险 |
|------|------|------|----------|----------|------|
| [#3382](https://github.com/sipeed/picoclaw/issues/3382) | Issue | DingTalk gateway panic（v0.3.1 仍可复现） | 2026-09-20 | 15 天 | 🔴 高危，用户可复现 |
| [#3392](https://github.com/picoclaw/issues/3392) | Issue | CLAassistant does not detect signature | 2026-09-25 | 10 天 | 🟠 中，影响合规流程 |
| [#3381](https://github.com/sipeed/picoclaw/pull/3381) | PR | Switch Openai to responses API | 2026-09-17 | 18 天 | 🟡 架构变更需 review |
| [#3396](https://github.com/sipeed/picoclaw/pull/3396) | PR | OneBot reaction toggle | 2026-09-27 | 8 天 | 🟢 低风险，需求明确 |
| [#3233](https://github.com/sipeed/picoclaw/pull/3233) | PR | Fix pr 3222 backward compat | 2026-07-07 | 100 天 | 🟡 长期 stale，可能已过时 |
| [#3353](https://github.com/sipeed/picoclaw/pull/3353) | PR | Bound tool feedback animations | 2026-08-31 | 35 天 | 🟢 低风险，已合并 |

---

## 总结

2026-10-05 的 PicoClaw 项目呈现出 **"高修复吞吐 + 低社区新鲜度"** 的特征。`x1F916` 的四连合并标志着项目在配置、Agent、Channel、Updater 四个维度的稳定性得到了集中加固，v0.3.2 的发布基础正在形成。但 Issues 层面的 stale 率偏高（3/4 已标记 stale），DingTalk panic（#3382）和 QQ 接口同步（#3394）仍需维护者主动介入。OneBot 反应开关（#3395/#3396）是当前社区需求最明确、方案最完整的功能请求，建议优先 review 并纳入下一版本。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报（2026-10-05）

## 1. 今日速览

过去 24 小时 NanoClaw 保持高活跃度：共更新 9 条 Issue（新开/活跃 7，关闭 2）和 40 条 PR（待合并 20，已合并/关闭 20），并发布首个日历版本候选 `v2026.10.0-rc.1`。今日合并/关闭的 PR 覆盖更新通道、安全依赖升级、容器网关 CA 信任、日志脱敏和安装流程修复，说明项目正在为 2026.10.0 稳定版做集中收尾。与此同时，多个长期未解决的 Bug 仍在持续更新，集中在 Telegram 消息投递、本地模型长回合被硬杀、计划任务错误静默丢失等场景。整体看，项目健康度良好，但部分高优先级稳定性问题缺乏对应 fix PR，需关注积压。

---

## 2. 版本发布

### v2026.10.0-rc.1

- **发布 PR**：[nanocoai/nanoclaw#4025](https://github.com/nanocoai/nanoclaw/pull/4025)
- **版本号**：`package.json` 从 `2.4.0` 变更为 `2026.10.0-rc.1`
- **核心变化**：
  1. **首次采用日历版本号**：格式为 `YYYY.M.PATCH`，NanoClaw 进入日历版本阶段。
  2. **`/update-nanoclaw` 默认跟随已发布 Release**，不再跟随 `main` 分支尖端。这是更新机制的一次重要转向。
  3. **引入更新通道**：通过 `.env` 中的 `NANOCLAW_UPDATE_CHANNEL` 选择：
     - `stable`：默认，跟随最新 annotated `vX.Y.Z` tag（通过 `git ls-remote` 获取）。
     - `beta`：跟随比 stable 更新的 `-rc.N` 候选版本。当前 `v2026.10.0-rc.1` 仅面向 `beta` 通道安装。
  4. 相关实现 PR：[nanocoai/nanoclaw#3986](https://github.com/nanocoai/nanoclaw/pull/3986)（已合并/关闭）。

- **破坏性变更与迁移注意事项**：
  - 更新行为从“跟随 main”变为“跟随 Release”，依赖用户此前基于 `main` 的更新预期可能改变。建议检查 `.env` 中是否显式设置 `NANOCLAW_UPDATE_CHANNEL`。
  - 2026.10.0 包含一条 `[BREAKING]` 行，影响所有 OneCLI 安装：Linux 本地网关监听在 Docker bridge，需使用 `ONECLI_URL` 而非 `127.0.0.1:10254`。相关文档修复见 [nanocoai/nanoclaw#4028](https://github.com/nanocoai/nanoclaw/pull/4028)。
  - 稳定版用户不会自动收到 RC；如需尝鲜，需切换到 `beta` 通道。

---

## 3. 项目进展

今日合并/关闭的重要 PR 推进了发布基建、安全加固和安装稳定性：

- **更新通道与发布流程**：
  - [#3986](https://github.com/nanocoai/nanoclaw/pull/3986) `feat(update): follow release tags by default via update channels`：让 `/update-nanoclaw` 默认跟随 Release，是 2026.10.0 的核心功能。
  - [#4025](https://github.com/nanocoai/nanoclaw/pull/4025) `chore(release): v2026.10.0-rc.1`：发布首个日历版本候选。
  - [#3988](https://github.com/nanocoai/nanoclaw/pull/3988) `fix(update): refresh the installed gateway when only its skill payload changed`：修复仅网关 skill payload 变化时未刷新已安装网关的问题。

- **安全与依赖**：
  - [#4024](https://github.com/nanocoai/nanoclaw/pull/4024) `fix(add-whatsapp): pin Baileys 7.0.0-rc14 for the message-spoofing fix`：将 `/add-whatsapp` 从存在 critical message-spoofing 漏洞的 Baileys `7.0.0-rc.9` 升级到 `rc14`。
  - [#2970](https://github.com/nanocoai/nanoclaw/issues/2970) 安全 Issue 关闭：本地动作伪造 via 未认证 forwarded gateway loopback webhook。该安全风险已处理。

- **容器与运行时修复**：
  - [#3998](https://github.com/nanocoai/nanoclaw/pull/3998) `fix(container): trust the gateway CA in the agent browser`：让 agent 浏览器在 TLS 检查网关下正常加载 HTTPS 页面。
  - [#3999](https://github.com/nanocoai/nanoclaw/pull/3999) `fix(claude): pass CLAUDE_CODE_AUTO_COMPACT_WINDOW from the host into the container`：使文档中的环境变量真正传入容器。
  - [#3983](https://github.com/nanocoai/nanoclaw/pull/3983) `fix(log): keep nested toJSON redaction when a value holds a BigInt or a cycle`：修复日志脱敏在 BigInt/循环引用时失效。

- **文档与安装**：
  - [#4028](https://github.com/nanocoai/nanoclaw/pull/4028) `docs(add-onecli): check the gateway at ONECLI_URL in the upgrade guide`：修正 Linux 下 OneCLI 升级指南。

**整体推进评估**：项目在今日完成了一次发布机制升级和安全依赖清理，RC 发布标志着 2026.10.0 进入候选阶段。合并/关闭的 20 条 PR 中，多项直接服务于稳定性和安装体验，项目向前迈进了可感知的一步。

---

## 4. 社区热点

今日讨论最活跃的 Issue 与 PR 如下：

- **#3643** [OPEN] Hardcoded 30-min `ABSOLUTE_CEILING_MS` cold-kills long local-model turns; no config seam  
  作者 glifocat | 评论 2 | 更新 2026-10-04  
  [nanocoai/nanoclaw#3643](https://github.com/nanocoai/nanoclaw/issues/3643)  
  **诉求**：本地模型用户运行长回合时被宿主硬杀，且没有配置缝隙可调。这是本地模型场景下的关键可用性问题，评论数最高，说明本地模型用户群体在增长。

- **#3569** [OPEN] Telegram: URLs with an odd number of underscores never deliver  
  作者 shachartal | 评论 1 | 更新 2026-10-04  
  [nanocoai/nanoclaw#3569](https://github.com/nanocoai/nanoclaw/issues/3569)  
  **诉求**：Telegram 适配器固定在 `@chat-adapter/telegram@4.29.0`，落后上游修复 3 个版本，导致含奇数个未转义 MarkdownV2 标记的消息永久无法投递。用户希望尽快升级依赖。

- **#3223** [OPEN] Scheduled-task turns that error produce an unroutable error message that is silently dropped  
  作者 chiptoe-svg | 评论 1 | 更新 2026-10-04  
  [nanocoai/nanoclaw#3223](https://github.com/nanocoai/nanoclaw/issues/3223)  
  **诉求**：计划任务出错时操作者完全不知情，错误消息因无路由字段被静默丢弃。属于可观测性缺口。

- **#3301** [OPEN] Tasks firing in chat sessions run one-door: logs dropped, replies eaten, series unlisted  
  作者 glifocat | 评论 1 | 更新 2026-10-04  
  [nanocoai/nanoclaw#3301](https://github.com/nanocoai/nanoclaw/issues/3301)  
  **诉求**：自 #2988 引入 one-door task delivery 后，在聊天会话中触发的 `kind='task'` 行会把整个查询切换为 task 模式，导致日志丢失、回复被吞、序列不列出。

- **PR #4000** [OPEN] `chore(channels): merge main into channels`  
  作者 glifocat | 更新 2026-10-04  
  [nanocoai/nanoclaw#4000](https://github.com/nanocoai/nanoclaw/pull/4000)  
  **看点**：该 PR 需要以 “Create a merge commit” 方式合并，避免 squash 压平 463 个 main 提交并丢失 merge base。涉及大量 area 标签，是渠道分支同步的关键节点。

- **PR #3980** [OPEN] `fix(setup): score the agent's failure notice as a failed first chat`  
  作者 glifocat | 更新 2026-10-04  
  [nanocoai/nanoclaw#3980](https://github.com/nanocoai/nanoclaw/pull/3980)  
  **看点**：安装首次聊天不再把 agent 的 “run failed” 提示误判为成功，改善新手安装体验。

---

## 5. Bug 与稳定性

按严重程度排列今日报告的 Bug、崩溃与回归：

### 高严重度

- **#3643** [OPEN] [priority/high] 硬编码 30 分钟 `ABSOLUTE_CEILING_MS` 冷杀长本地模型回合，无配置缝隙  
  [nanocoai/nanoclaw#3643](https://github.com/nanocoai/nanoclaw/issues/3643)  
  **影响**：本地模型后端长回合被宿主 sweep 中断。  
  **Fix PR**：暂无。

- **#3569** [OPEN] Telegram 奇数下划线 URL 永不投递，适配器落后上游修复 3 个版本  
  [nanocoai/nanoclaw#3569](https://github.com/nanocoai/nanoclaw/issues/3569)  
  **影响**：消息永久无法投递，用户无感知。  
  **Fix PR**：相关修复 [#4029](https://github.com/nanocoai/nanoclaw/pull/4029) 仅处理 mailto 下划线链接，未完全覆盖“整条消息奇数个未转义 MarkdownV2 标记”的问题。

- **#3223** [OPEN] 计划任务出错产生不可路由错误消息并被静默丢弃  
  [nanocoai/nanoclaw#3223](https://github.com/nanocoai/nanoclaw/issues/3223)  
  **影响**：操作者永远不知道任务失败。  
  **Fix PR**：暂无。

- **#3301** [OPEN] 聊天会话中的任务以 one-door 模式运行：日志丢失、回复被吃、序列不列出  
  [nanocoai/nanoclaw#3301](https://github.com/nanocoai/nanoclaw/issues/3301)  
  **影响**：自 2.1.48 起的回归，影响任务与聊天混合场景。  
  **Fix PR**：暂无。

### 中严重度

- **#4021** [OPEN] macOS 更新时 `stopService` 在宿主退出前返回，快照与关闭竞争，重新 bootstrap 失败 I/O error 5  
  [nanocoai/nanoclaw#4021](https://github.com/nanocoai/nanoclaw/issues/4021)  
  **影响**：2.3.0 → 2.4.0 更新 cutover 失败，虽回滚干净但代价高。  
  **Fix PR**：暂无。

- **#4020** [OPEN] `agent-runner` 入站 `escapeXml` 从未反转，回复重复用户文本时显示 `&amp;`  
  [nanocoai/nanoclaw#4020](https://github.com/nanocoai/nanoclaw/issues/4020)  
  **影响**：URL 或引用文本中的 `&` 被转义为 `&amp;`，用户可见。  
  **Fix PR**：暂无。

### 已关闭

- **#4004** [CLOSED] 更新 cutover 在 bump `tsx` 或 `esbuild` 时崩溃  
  [nanocoai/nanoclaw#4004](https://github.com/nanocoai/nanoclaw/issues/4004)  
  已关闭，可能与更新流程改进相关。

- **#2970** [CLOSED] [Security] 本地动作伪造 via 未认证 forwarded gateway loopback webhook  
  [nanocoai/nanoclaw#2970](https://github.com/nanocoai/nanoclaw/issues/2970)  
  安全 Issue 已关闭。

**稳定性评估**：高严重度 Bug 多集中在消息投递、任务错误处理和本地模型长回合，且大多没有直接 fix PR。虽然今日合并了多项修复，但这些长期问题仍是稳定性短板。

---

## 6. 功能请求与路线图信号

- **#4027** [OPEN] [capability] 让 agent 可以重启并清除它创建的 agent  
  [nanocoai/nanoclaw#4027](https://github.com/nanocoai/nanoclaw/issues/4027)  
  **分析**：协调者 agent 通过 `create_agent` 创建子 agent 后，无法重启或重置其上下文。默认 `cli_scope: group` 下 `src/cli/guard.ts` 拒绝任何外部 `--id`。  
  **关联 PR**：[#4026](https://github.com/nanocoai/nanoclaw/pull/4026) `fix(cli): groups restart --id <other group> from an agent restarts the target (#3911)` 已提交，直接解决 `ncl groups restart --id` 被忽略的问题。该功能有较大概率被纳入 2026.10.0 或后续版本。

- **更新通道功能**：[#3986](https://github.com/nanocoai/nanoclaw/pull/3986) 已合并，`stable`/`beta` 通道进入 RC，是路线图中的明确里程碑。

- **依赖安全可见性**：[#4007](https://github.com/nanocoai/nanoclaw/pull/4007) 让 Dependabot 看到 skill 中 pin 的 npm 版本，避免 `@whiskeysockets/baileys` 这类关键依赖被遗漏。属于供应链安全路线图信号。

- **CI 与仓库维护**：[#4009](https://github.com/nanocoai/nanoclaw/pull/4009) 将 agent-image pin bumps 改为人工合并，[#4000](https://github.com/nanocoai/nanoclaw/pull/4000) 渠道分支合并，显示维护者在收紧发布与合并流程。

- **安装可靠性**：[#4019](https://github.com/nanocoai/nanoclaw/pull/4019) 让 systemd unit 等待 Docker，[#4017](https://github.com/nanocoai/nanoclaw/pull/4017) 在链接 WhatsApp 前获取当前 WhatsApp Web 版本，[#4022](https://github.com/nanocoai/nanoclaw/pull/4022) 为 OneCLI 检测测试增加超时。这些均指向“安装与更新稳定性”路线。

---

## 7. 用户反馈摘要

从今日 Issues 摘要中可提炼出以下真实用户痛点与场景：

- **本地模型用户**：长回合被硬编码 30 分钟上限杀死，且无法配置，严重影响本地模型后端（OpenCode → OpenAI-compatible local server）的可用性。
- **Telegram 用户**：消息因 MarkdownV2 奇数个未转义标记而永久无法投递，且适配器版本落后上游修复 3 个版本，用户对依赖更新滞后不满。
- **计划任务用户**：任务出错时错误消息不可路由、被静默丢弃，操作者无法感知失败，属于可观测性痛点。
- **聊天中触发任务的用户**：one-door task delivery 导致日志丢失、回复被吞、序列不列出，是 2.1.48 后的回归体验。
- **macOS 更新用户**：更新过程中 `stopService` 与宿主关闭竞争，导致 re-bootstrap 失败，虽然回滚干净但更新过程脆弱。
- **WhatsApp 链接用户**：setup 在 web.whatsapp.com 返回 429 时静默使用 Baileys 过时的内置 WhatsApp Web 版本，导致链接问题。
- **OneCLI 用户**：Linux 本地网关监听 Docker bridge，升级指南原先检查 `127.0.0.1:10254`，导致验证失败。

**满意点**：维护者响应积极，今日即发布 RC，并合并多项安全与稳定性修复；安全 Issue #2970 被关闭，Baileys 漏洞被快速 pin 修复。  
**不满意点**：硬编码限制无配置缝隙、关键依赖 pin 过旧、错误静默丢失、更新流程存在竞态，这些长期问题仍需更多关注。

---

## 8. 待处理积压

以下 Issue/PR 已开放较长时间且仍无明确 fix PR，建议维护者优先关注：

- **#3223** [OPEN] 计划任务错误静默丢弃  
  创建 2026-08-10，更新 2026-10-04，评论 1  
  [nanocoai/nanoclaw#3223](https://github.com/nanocoai/nanoclaw/issues/3223)

- **#3301** [OPEN] 聊天会话中任务 one-door 回归  
  创建 2026-08-17，更新 2026-10-04，评论 1  
  [nanocoai/nanoclaw#3301](https://github.com/nanocoai/nanoclaw/issues/3301)

- **#3569** [OPEN] Telegram 奇数下划线 URL 永不投递  
  创建 2026-08-27，更新 2026-10-04，评论 1  
  [nanocoai/nanoclaw#3569](https://github.com/nanocoai/nanoclaw/issues/3569)

- **#3643** [OPEN] [priority/high] 硬编码 30 分钟冷杀长本地模型回合  
  创建 2026-08-28，更新 2026-10-04，评论 2  
  [nanocoai/nanoclaw#3643](https://github.com/nanocoai/nanoclaw/issues/3643)

- **#3450** [OPEN] Telegram: trust channel's own identity in sender_scope gate  
  创建 2026-08-22，更新 2026-10-04  
  [nanocoai/nanoclaw#3450](https://github.com/nanocoai/nanoclaw/pull/3450)

- **#3642** [OPEN] `fix(update-skills): report local adapter state instead of failing or silently reverting`  
  创建 2026-08-28，更新 2026-10-04  
  [nanocoai/nanoclaw#3642](https://github.com/nanocoai/nanoclaw/pull/3642)

- **#4000** [OPEN] `chore(channels): merge main into channels`  
  创建 2026-10-02，更新 2026-10-04  
  [nanocoai/nanoclaw#4000](https://github.com/nanocoai/nanoclaw/pull/4000)  
  该 PR 需以 merge commit 合并，涉及 463 个 main 提交，建议尽快处理以避免后续冲突。

- **#3980** [OPEN] `fix(setup): score the agent's failure notice as a failed first chat`  
  创建 2026-10-01，更新 2026-10-04  
  [nanocoai/nanoclaw#3980](https://github.com/nanocoai/nanoclaw/pull/3980)

- **#4007** [OPEN] `ci: let Dependabot see skill-pinned npm versions`  
  创建 2026-10-02，更新 2026-10-04  
  [nanocoai/nanoclaw#4007](https://github.com/nanocoai/nanoclaw/pull/4007)

- **#4009** [OPEN] `ci: merge agent-image pin bumps by hand, drop the auto-approver`  
  创建 2026-10-03，更新 2026-10-04  
  [nanocoai/nanoclaw#4009](https://github.com/nanocoai/nanoclaw/pull/4009)

**总结**：今日项目在发布流程和安全加固上进展明显，但长期 Bug 积压仍是健康度风险点。建议在 2026.10.0 稳定版发布前，优先处理 #3643、#3569、#3223、#3301 等高影响问题，并为它们分配 fix PR。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>



好的，这是根据您提供的数据生成的 NullClaw 项目动态日报。

---

### **NullClaw 项目动态日报 - 2026-10-05**

**数据来源：** GitHub 仓库 `nullclaw/nullclaw` | **分析周期：** 过去 24 小时

---

#### **1. 今日速览**

NullClaw 项目在过去24小时内呈现出**中等活跃度**，开发重点明确地集中在**提升稳定性和修复关键平台缺陷**上。所有活动均由一位核心维护者 `vernonstinebaker` 主导，他同时是多个关键 Bug 报告和修复 PR 的作者，显示出极高的个人贡献度。项目当前无新版本发布，但代码库正在通过一系列针对性的修复和测试强化而变得愈发健壮。

#### **2. 版本发布**

*   **无新版本发布。** 最新的 Releases 为空。

#### **3. 项目进展**

今日有 **2 个 PR 被合并/关闭**，标志着特定问题的解决：
*   **#1006 [CLOSED] fix(cli): append streamed stdout instead of overwriting offset zero**
    *   **进展：** 已关闭（合并）。
    *   **说明：** 此修复解决了 macOS 系统上 CLI 流式输出被截断的问题（如 `pong` 回复首行损坏），通过将输出模式从覆盖写入改为追加写入，确保了输出的完整性。**链接：nullclaw/nullclaw#1006**
*   **#966 [CLOSED] fix(http): secure buffered curl fallback on Android**
    *   **进展：** 已关闭（合并）。
    *   **说明：** 这是一个长期存在的 Android（Termux）专用修复，最终被合并。它确保了在 Android 平台上，当 Zig 标准库的 HTTP 路径失败时，能完整、安全地回退到 curl，解决了 DNS 解析失败的问题。**链接：nullclaw/nullclaw#966**

**整体迈进：** 项目在核心的 CLI 输出可靠性和 Android 平台的基础网络健壮性上迈出了坚实的一步。

#### **4. 社区热点**

今日的社区讨论完全由 **Bug 报告** 主导，没有产生新的功能讨论热点。最活跃的议题是：
*   **#1018 [CLOSED] BUG: Termux — agent output silently corrupted**
    *   **链接：** nullclaw/nullclaw#1018
    *   **分析：** 此 Issue 拥有最多的评论（2条）并已关闭，反映了用户对 **AI 代理输出完整性** 的核心诉求。该问题描述了在 Termux 上输出被静默损坏且无错误提示的现象，这属于高优先级的用户体验缺陷。其关闭（可能与 PR #1006 的修复相关）表明维护者对输出正确性问题的高度重视。

#### **5. Bug 与稳定性**

今日报告了 **3 个 Bug**，均来自同一作者 `vernonstinebaker`，可能源于其系统性的测试。按严重程度排列如下：

| 严重程度 | Issue | 标题 | 是否有 Fix PR |
| :--- | :--- | :--- | :--- |
| **高** | **#1017** | Docker image gateway exits `AccessDenied` — `/nullclaw-data` is root-owned | **是** (待观察) |
| **中** | **#1020** | `.githooks/pre-push` always fails from a worktree | **是** (#1021) |
| **中** | **#1018** | Termux — agent output silently corrupted | **是** (已通过 #1006 修复) |

*   **#1017 (高严重度)：** Docker 镜像因权限问题完全无法启动，阻塞了容器化部署。这是一个**阻塞性 Bug**。**链接：nullclaw/nullclaw#1017**
*   **#1020 (中严重度)：** 破坏了从 Git worktree 推送的标准工作流，影响开发效率。对应的修复 PR **#1021** 已提交，通过清除继承的 `GIT_DIR` 环境变量来解决。**链接：nullclaw/nullclaw#1020**，**修复 PR：nullclaw/nullclaw#1021**
*   **#1018 (中严重度)：** 导致特定平台（Termux）上 AI 输出结果错误，但进程退出码为0，具有欺骗性。该 Bug 已随 PR #1006 的合并而关闭。**链接：nullclaw/nullclaw#1018**

#### **6. 功能请求与路线图信号**

*   **今日无新的功能请求 Issue。**
*   **路线图信号：** 从已有的 PR 和 Bug 来看，项目路线图正清晰地指向 **“跨平台稳定性”** 和 **“开发者体验优化”**。
    *   **跨平台稳定性：** 对 Android (Termux) 和 macOS 平台的持续关注（Issues #1018, #966， PR #1006）。
    *   **开发者体验优化：** 对 Git worktree 工作流的支持（Issue #1020， PR #1021）表明项目正在降低维护者的贡献门槛。
    *   **测试强化：** PR #1019 专注于为 HTTP 传输层增加“字节级精确”的测试覆盖，这表明项目正从“修复已知问题”向“预防未知问题”演进，是代码成熟度提升的信号。

#### **7. 用户反馈摘要**

由于所有 Issue 均来自同一作者，反馈更偏向于**深度技术用户或维护者自身的测试反馈**，而非普通终端用户。
*   **核心痛点：** 反馈集中于 **“静默失败”** 和 **“环境不兼容”** 。例如，输出损坏但无错误日志（#1018），Docker 容器因权限问题直接退出（#1017）。这表明用户对工具的可预测性和跨环境一致性有很高的期望。
*   **使用场景：** 明确涉及 **Docker 容器化部署**、**Git Worktree 开发工作流** 和 **Termux 移动端开发** 等高级场景，说明 NullClaw 的用户群技术栈较为深入。
*   **满意/不满意：** 目前数据无法提炼普通用户的满意度。但从问题被快速定位和修复（如 #1020 对应 #1021）来看，技术用户对维护者的响应和解决问题的效率应是认可的。

#### **8. 待处理积压**

*   **暂无长期未响应的重要 Issue 或 PR。** 所有今日更新的条目均在同一天内有新的进展（关闭或新增修复 PR），表明项目当前的 issue 流转效率很高，没有明显的积压。

---
**总结：** NullClaw 项目今日处于健康、积极的开发状态。尽管没有新版本发布，但通过一系列高质量的 Bug 修复和测试强化，项目的稳定性和开发者体验正在稳步提升。核心贡献者活跃度高，问题响应周期短，是项目健康度的积极信号。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报（2026-10-05）

> 数据范围：过去 24 小时  
> 数据来源：提供的 GitHub 数据  
> 仓库：https://github.com/nearai/ironclaw

## 1. 今日速览

- 今日 IronClaw 无新版本发布，无 Issue 更新，社区侧几乎没有新增讨论信号。
- PR 侧共有 5 条更新：4 条待合并，1 条已关闭；全部由 `dependabot[bot]` 发起，属于自动化依赖维护。
- 依赖更新覆盖 Rust/Tokio、GitHub Actions、WASM 等方向，项目维护管道仍在运转。
- 功能推进和缺陷修复信号为 0，今日更接近“低功能增量、常规维护日”。
- 活跃度评估：**自动化维护活跃，社区互动沉寂；项目健康度维持正常，但长期依赖 PR 积压值得关注。**

## 2. 版本发布

今日无新版本发布，本节省略。

## 3. 项目进展

今日唯一关闭的 PR 为依赖更新，未体现功能开发或 Bug 修复推进。

- **[PR #8078](https://github.com/nearai/ironclaw/pull/8078) [CLOSED] [dependencies, rust] chore(deps): bump the tokio-ecosystem group across 1 directory with 2 updates**  
  作者：`dependabot[bot]`。创建于 2026-09-06，更新于 2026-10-04，今日状态为 CLOSED。  
  内容：升级 `tower-http`、`tokio-tungstenite` 等 Tokio 生态依赖。  
  意义：减少依赖债务，提升工具链一致性，但对用户可见功能推进有限。

- **[PR #8123](https://github.com/nearai/ironclaw/pull/8123) [OPEN] [dependencies, rust] chore(deps): bump the tokio-ecosystem group across 1 directory with 3 updates**  
  作者：`dependabot[bot]`。创建/更新于 2026-10-04。  
  内容：升级 `tokio-test`、`tower-http`、`tokio-tungstenite`。  
  意义：接替/延续 Tokio 生态维护，仍待合并。

**整体推进评估**：今日 PR 关闭率 1/5 = 20%，但关闭项为依赖维护，非功能推进。项目功能侧向前迈进约 0，维护债务小幅下降。

## 4. 社区热点

今日无 Issues 更新，无用户发起的讨论；PR 评论字段为 `undefined`，点赞均为 0，未形成真实社区热点。

从自动化更新规模看，较受关注的 PR 为：

- **[PR #8114](https://github.com/nearai/ironclaw/pull/8114) [OPEN] [size: XL, risk: low, scope: dependencies, contributor: experienced, dependencies, rust]**  
  `everything-else` 组，31 个依赖更新，包括 `thiserror`、`uuid`、`base64` 等。  
  链接：https://github.com/nearai/ironclaw/pull/8114

- **[PR #8103](https://github.com/nearai/ironclaw/pull/8103) [OPEN] [dependencies, github_actions]**  
  Actions 组，8 个更新，包括 `anthropics/claude-code-action`、`actions/setup-node` 等。  
  链接：https://github.com/nearai/ironclaw/pull/8103

**分析**：这些“热点”来自 Dependabot 批量升级，而非社区诉求。背后反映的是项目依赖维护压力，而非用户功能需求。

## 5. Bug 与稳定性

- 今日无新开/活跃 Issue，因此无 Bug、崩溃、回归问题报告。
- 今日无 fix PR。
- 已关闭的 [PR #8078](https://github.com/nearai/ironclaw/pull/8078) 属于依赖升级，可能间接改善稳定性，但数据中未提供 CVE、故障或回归细节，不能确认具体修复效果。
- 稳定性结论：**今日无已知新增风险，依赖维护正常推进。**

## 6. 功能请求与路线图信号

- 今日无用户功能请求，无 Issue 提出新需求。
- 从 PR 信号看，项目当前路线图信号集中在“依赖与工具链维护”：
  - [PR #8123](https://github.com/nearai/ironclaw/pull/8123)：Tokio 生态小版本升级，低风险，较可能被纳入下一版本。
  - [PR #8114](https://github.com/nearai/ironclaw/pull/8114)：31 个依赖更新，规模 XL、风险 low，需批量审阅，可能影响下一版本依赖基线。
  - [PR #8103](https://github.com/nearai/ironclaw/pull/8103)：Actions 组升级，其中 `actions/setup-node` 从 `4.0.2` 到 `7.0.0`，存在大版本跨度，合并前需验证 CI 兼容性。
  - [PR #7834](https://github.com/nearai/ironclaw/pull/7834)：WASM 组更新，涉及 `wasmtime`、`wasmtime-wasi`、`wit-component`、`wit-parser`，风险 medium，建议重点审阅。

**判断**：下一版本若包含更新，最可能是低风险依赖升级；WASM 与 GitHub Actions 大版本更新需要额外验证。

## 7. 用户反馈摘要

- 今日 Issues 共 0 条，无法从 Issue 评论中提炼用户痛点、使用场景或满意度。
- PR 评论数据为 `undefined`，点赞为 0，无法量化社区反馈。
- 今日无真实用户反馈样本，建议后续在 Issue 活跃日再补充分析。

## 8. 待处理积压

| PR | 状态 | 创建日期 | 更新日期 | 积压天数 | 标签/风险 | 建议 |
|---|---|---|---|---|---|---|
| [#7834](https://github.com/nearai/ironclaw/pull/7834) | OPEN | 2026-08-23 | 2026-10-04 | 约 43 天 | `size: L`, `risk: medium`, `wasm` | 最久未关闭，建议优先审阅 WASM 依赖兼容性 |
| [#8103](https://github.com/nearai/ironclaw/pull/8103) | OPEN | 2026-09-20 | 2026-10-04 | 约 15 天 | `github_actions` | 关注 `setup-node 4.0.2 -> 7.0.0` 大版本跨度 |
| [#8114](https://github.com/nearai/ironclaw/pull/8114) | OPEN | 2026-09-27 | 2026-10-04 | 约 8 天 | `size: XL`, `risk: low` | 31 个依赖更新，建议批量审阅 |
| [#8123](https://github.com/nearai/ironclaw/pull/8123) | OPEN | 2026-10-04 | 2026-10-04 | 约 1 天 | `tokio-ecosystem` | 常规依赖更新，可正常排队 |
| [#8078](https://github.com/nearai/ironclaw/pull/8078) | CLOSED | 2026-09-06 | 2026-10-04 | 约 28 天 | `tokio-ecosystem` | 已关闭，完成维护闭环 |

**积压提醒**：当前积压主要集中在 Dependabot 依赖 PR，其中 [#7834](https://github.com/nearai/ironclaw/pull/7834) 开放时间最长且风险中等，建议维护者优先处理；[#8103](https://github.com/nearai/ironclaw/pull/8103) 涉及 Actions 大版本升级，也建议尽快验证。

---

**总体结论**：IronClaw 今日处于低社区活跃、自动化维护正常的状态。无版本发布、无 Issue 反馈、无功能推进；依赖更新持续进行，项目基础维护健康，但长期开放的依赖 PR 和缺乏人类讨论是后续需要关注的两点。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报
**日期：2026-10-05** ｜ 数据窗口：过去 24 小时（截至 2026-10-04）
**仓库：** [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览

- 项目今日处于**中等偏低活跃度**：无新版本发布，Issues 更新 5 条、PR 更新 6 条，但**没有任何一条来自新用户的新开 Issue**，5 条 Issue 全部为 2026 年 3 月创建的 `[stale]` 存量条目。
- 增量贡献集中在 **Renderer / Cowork / Artifacts 前端体验**方向，由单一作者 `alison-xx` 在 10-04 一次性提交 3 个新 PR（#2790、#2791、#2792），呈现明显的"单人密集推送"特征。
- 存量清理动作显著：2 条 Issue 与 3 条 PR 被关闭，但从时间跨度和 `[stale]` 标记看，**更可能是 stale 机器人自动关闭而非真实修复**，需维护者确认。
- 无破坏性变更、无发布动作，项目整体**向前推进幅度有限**，主要价值在于存量条目治理与前端可用性打磨。

---

## 2. 版本发布

今日无新版本发布（0 个），无 Releases 记录。故本部分省略。

> 提示：Issues #856 明确指出「新增功能类需要同步更新官网使用文档」，在长期无 Release 的情况下，功能与文档的脱节风险会持续累积。

---

## 3. 项目进展

今日合并/关闭 3 个 PR，但**均非典型的"功能落地"**：

| PR | 标题 | 状态 | 解读 |
|---|---|---|---|
| [#2710](https://github.com/netease-youdao/LobsterAI/pull/2710) | feat(mcp): pass per-server toolFilter and parallel tool calls to OpenClaw | CLOSED | 该 PR 目标是把 `mcp.servers.*.toolFilter` 与 `supportsParallelToolCalls` 同步到 OpenClaw，使会话可只加载所需 MCP 工具。创建于 2026-09-18，历经约 2 周后被关闭，**功能未确认落地**。 |
| [#2789](https://github.com/netease-youdao/LobsterAI/pull/2789) | feat: mcp tool picker | CLOSED | 与 #2710 同属 MCP 工具选择能力，创建当日即关闭，无摘要内容。**疑似被合并进其他改动或直接放弃**，MCP 工具选择这一需求路径目前不明确。 |
| [#1008](https://github.com/netease-youdao/LobsterAI/pull/1008) | feat(preset-agents): add 6 new preset agent templates | CLOSED | 2026-03-29 提交，旨在将预设 Agent 从 6 个场景扩展到更多场景。**积压超过 6 个月后关闭**，是典型的长期停滞条目。 |

**推进度评估：** 今日无明确的可验证功能增量。真正在推进的是 3 个仍处 OPEN 的新 PR（#2790/#2791/#2792），但它们尚未合并，属于"在途工作量"而非"已交付进展"。

---

## 4. 社区热点

今日整体讨论热度偏低：**全部 Issue 评论数 ≤ 2，全部 👍 = 0**，无任何高互动条目。按评论数排序的热点如下：

1. [#850 【bug】定时任务关闭后，还会触发执行](https://github.com/netease-youdao/LobsterAI/issues/850) — 2 条评论，👍 0
2. [#1003 关于 Notion MCP 的问题](https://github.com/netease-youdao/LobsterAI/issues/1003) — 2 条评论，👍 0
3. [#1007 请教解决 agent engine 无限重启的方法](https://github.com/netease-youdao/LobsterAI/issues/1007) — 2 条评论，👍 0

**诉求分析：**
- 热点全部由 **Bug/故障类** 话题占据，而非新功能讨论，说明当前社区关注点集中在**"已有能力是否可靠"**，而非"还想要什么"。
- #850 与 #1007 分别指向**定时任务调度**与**Agent Engine 生命周期管理**两个核心运行时模块，属于产品地基问题。
- #1003 反映出用户对 **MCP Bridge 集成层**有较深的排查投入（用户已自行定位到 `child_process.spawn` 的 env 传递链路），说明 MCP 是当前被实际使用、且踩坑较多的能力方向——这也与今日关闭的两个 MCP 相关 PR 形成呼应。

---

## 5. Bug 与稳定性

按严重程度排列（注：**今日未发现任何 fix PR 关联以下 Issue**）：

### 🔴 高严重度

**1. [#1007 Agent Engine 无限重启](https://github.com/netease-youdao/LobsterAI/issues/1007)｜CLOSED**
- 用户反馈"经常遇到 Agent Engine 无限重启"，寻求通过修改配置文件解决。
- 属于**核心引擎可用性故障**，可导致进程风暴、资源耗尽。作者自 2026-03-29 提出，至 10-04 关闭，**历时 6 个月以上，无公开的修复说明**。
- ⚠️ 关闭原因存疑，建议维护者确认是否真已修复，否则应重开。

**2. [#837 定时任务触发异常后一直失败，重启才能恢复](https://github.com/netease-youdao/LobsterAI/issues/837)｜OPEN**
- 复现路径明确：每半小时的定时任务 + **锁屏状态触发** → 聊天框出现异常 → 后续所有定时任务均失败，**必须重启应用才能恢复**。
- 特征为**错误状态污染（sticky failure）**，属于典型的调度器缺乏故障隔离与自愈能力，影响面大且用户已有完整复现步骤与日志归档，修复性价比高。

**3. [#850 定时任务关闭后仍会触发执行](https://github.com/netease-youdao/LobsterAI/issues/850)｜OPEN**
- 与 #837 同属**定时任务调度模块**，问题方向相反：关闭开关未生效。
- 属于**用户控制权失效**类缺陷，可能引发非预期执行（如误发消息、误调用工具），在 AI 助手场景下存在实际风险。

### 🟡 中严重度

**4. [#1003 Notion MCP 环境变量未透传导致 401](https://github.com/netease-youdao/LobsterAI/issues/1003)｜CLOSED**
- `MCP Bridge` 启动 `npx @notionhq/notion-mcp-server` 时未正确传入 env，导致 Token 丢失、服务端返回 401。
- 用户已自行将问题定位到 Bridge 层而非配置层，**定位质量高**。已关闭但无关联修复 PR，状态同样存疑。

**稳定性结论：** 今日**新增 Bug 数为 0**，这是唯一的正面信号；但暴露出的 4 个问题中，**3 个集中在"定时任务 + Agent Engine"这一运行时核心链路**，且全部缺乏可见的修复动作，是当前项目健康度最需要关注的风险点。

---

## 6. 功能请求与路线图信号

今日功能类诉求仅 1 条，但指向明确：

**[#856 模型切换及使用文档更新](https://github.com/netease-youdao/LobsterAI/issues/856)｜OPEN**
- 诉求一：**按任务维度独立配置模型**（当前切换模型会全局影响所有任务）。
- 诉求二：**新功能需同步更新官网文档**，并点名近期新增的 openclawd 功能"不知道怎么用"。

**纳入下一版本的可能性判断：**

| 需求 | 相关 PR 信号 | 判断 |
|---|---|---|
| 多模型目录浏览与分组 | [#2790](https://github.com/netease-youdao/LobsterAI/pull/2790) `feat(renderer): group model choices` 已开 | ✅ **很可能**。#2790 已在做模型分组与搜索优化，是 #856 的前置铺垫，但**尚未覆盖"按任务绑定模型"的语义层**。 |
| MCP 工具精细化选择 | [#2710](https://github.com/netease-youdao/LobsterAI/pull/2710)、[#2789](https://github.com/netease-youdao/LobsterAI/pull/2789) 均 CLOSED | ⚠️ **存疑**。能力方向被认可但两个 PR 都未合并，路线图状态需要明确表态。 |
| 预设 Agent 模板扩充 | [#1008](https://github.com/netease-youdao/LobsterAI/pull/1008) CLOSED | ❌ **短期概率低**，积压 6 个月后关闭。 |
| 文档同步更新 | 无 PR | ❌ 无工程化载体，建议建立"功能 PR 必须附文档"的合并门禁。 |

---

## 7. 用户反馈摘要

> 说明：今日数据未包含 Issue 评论正文，以下提炼自 Issue 描述文本与互动结构。

**真实痛点（按出现频次）：**

1. **定时任务不可靠 —— 最高频痛点。** 两个独立用户（`Robincs`、`Aireed`）分别从"关闭无效"和"异常后持续失败"两个角度命中同一模块，且 `Aireed` 提供了完整复现步骤与日志归档。这已不是个例，而是**模块级缺陷**。
2. **Agent Engine 稳定性不足。** `HsiYaTung` 用"现在还是经常遇到"描述，说明是**反复发生的长期问题**，而非一次性故障。
3. **模型配置粒度不足。** `fppmax-nb` 提出"不同任务需要使用不同的模型"，反映真实的多场景使用模式（如代码任务 vs 内容任务需不同模型）。
4. **文档滞后于功能。** 用户对新上线的 openclawd 功能"不知道怎么使用"，说明**功能发布与用户认知之间存在断层**。

**满意/不满意信号：**
- 无任何 👍 反应（全部为 0），**缺少正向反馈**，社区情绪整体偏中性偏消极。
- 但用户排查投入度高（#1003 用户自行定位到代码层、#837 用户主动附日志），说明**用户对项目仍有较高期待与使用深度**，这是积极信号。

**使用场景素描：** macOS 用户、锁屏/后台长期运行、以定时任务驱动 AI 助手、通过 MCP 对接 Notion 等外部服务、需要多模型混用以覆盖不同任务类型。

---

## 8. 待处理积压

以下条目均**创建于 2026 年 3 月、更新于 2026-10-04，积压时长超过 6 个月**，且被标记 `[stale]`，建议维护者优先处理：

| 条目 | 类型 | 积压时长 | 风险 |
|---|---|---|---|
| [#837 定时任务异常后持续失败](https://github.com/netease-youdao/LobsterAI/issues/837) | OPEN Bug | ~6.3 个月 | 🔴 高，有完整复现与日志，长期无人接手 |
| [#850 定时任务关闭后仍触发](https://github.com/netease-youdao/LobsterAI/issues/850) | OPEN Bug | ~6.3 个月 | 🔴 高，用户控制权失效 |
| [#856 多模型配置 + 文档更新](https://github.com/netease-youdao/LobsterAI/issues/856) | OPEN 需求 | ~6.3 个月 | 🟡 中，已有部分 PR 呼应但无明确归属 |
| [#1007 Agent Engine 无限重启](https://github.com/netease-youdao/LobsterAI/issues/1007) | CLOSED | ~6.2 个月 | 🟡 中，**关闭原因需复核** |
| [#1003 Notion MCP 401](https://github.com/netease-youdao/LobsterAI/issues/1003) | CLOSED | ~6.2 个月 | 🟡 中，**关闭原因需复核** |
| [#1008 预设 Agent 模板扩充](https://github.com/netease-youdao/LobsterAI/pull/1008) | CLOSED PR | ~6.3 个月 | 🟡 中，功能诉求是否延续待定 |

**维护者行动建议：**
1. **复核 stale 自动关闭策略**：本次 2 条 Issue + 3 条 PR 的关闭与 `[stale]` 标记高度重合，若为机器人批量关闭，会造成"问题已解决"的假象，掩盖 #1007、#1003 这类未修复缺陷。
2. **将"定时任务"设为专项**：#837 与 #850 同源，建议合并处理并指派 owner。
3. **关注贡献集中度**：今日 3 个新 PR 全部来自 `alison-xx` 一人，Bus Factor 风险偏高，建议引入 reviewer 分工。
4. **建立文档门禁**：回应 #856 的文档诉求，可在 PR 模板中增加"是否需同步更新官网文档"检查项。

---

## 项目健康度小结

| 维度 | 评价 | 说明 |
|---|---|---|
| 开发活跃度 | 🟡 中 | 有 PR 产出，但集中于单人、单领域 |
| 版本节奏 | 🔴 低 | 无 Release，功能交付不可见 |
| 缺陷治理 | 🔴 低 | 核心运行时 Bug 积压 6 个月无修复 PR |
| 社区互动 | 🔴 低 | 评论 ≤2、👍 全为 0，无新增用户反馈 |
| 存量清理 | 🟡 中 | 有清理动作，但疑似自动化，需人工复核 |
| 用户投入度 | 🟢 高 | 用户主动排查、附日志、提结构化需求 |

**总体：** 项目今日**无新增风险，但存量风险持续累积**。前端体验（PR #2790/#2791/#2792）正在被积极打磨，而后端核心链路（定时任务、Agent Engine、MCP Bridge）的缺陷长期无人认领——**"体验向前、地基未修"**是当前最需要打破的失衡状态。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报
**日期：2026-10-05** ｜ 数据窗口：过去 24 小时（截至 2026-10-04 更新）
**数据来源**：agentscope-ai/CoPaw（Issue/PR 链接显示为 QwenPaw 仓库）

---

## 1. 今日速览

- **活跃度高，但"只进不出"**：过去 24 小时 11 条 Issue 全部为新开/活跃，**关闭数为 0**；8 条 PR 中 7 条仍待合并，仅 1 条关闭。社区提交意愿旺盛，但合并与闭环能力明显滞后。
- **稳定性问题是今日主线**：11 条 Issue 中 9 条为 Bug 类，集中在容器内存耗尽、插件事件循环阻塞、审批按钮失效、Console 启动卡死等高影响面问题。
- **修复侧已有回应**：新增 PR 集中在 Console 启动韧性（#8102、#8108）、插件安装环境（#8107）、Provider 参数兼容（#7738、#8096），与当日 Issue 高度对应，形成"报障—修复"闭环雏形。
- **贡献者结构健康**：多条 PR 带 `first-time-contributor` 标签，首次贡献者占比过半，社区参与门槛较低。
- **积压风险抬头**：多条 8–9 月提交的 Issue（#7026、#7599、#7722、#7840）至今仍 OPEN 并持续被顶起，需警惕长期未闭环带来的用户流失。

---

## 2. 版本发布

本日**无新版本发布**（最新 Releases 为空）。当前社区讨论主要围绕 `v2.2.0 / 2.2.1 / 2.2.2b4` 三个版本展开，其中 **2.2.2b4 是 Bug 报告最集中的版本**，建议维护者优先评估其是否具备发布候选条件。

---

## 3. 项目进展

本日仅有 **1 条 PR 关闭**，无合并动作被明确记录，整体推进有限：

| PR | 状态 | 说明 |
|---|---|---|
| [#7299](https://github.com/agentscope-ai/QwenPaw/pull/7299) `fix(console): reject conflicting chat payloads` | **CLOSED**（first-time-contributor，Under Review） | 修复同一 chat 存在活跃 run 时，第二个非重连 `POST /api/console/chat` 返回 200 却**不执行新 payload**的问题——即 API 对用户消息"假装成功"。该问题属于静默数据丢失类缺陷，关闭（合并状态未在数据中明确）意味着一条重要的正确性修复落地或转为其他方案。作者 chrischen-coder，自 8-25 提交，历时约 40 天。 |

**推进评估**：从 PR 池看，项目正处于"修复集中待审"阶段——7 条待合并 PR 中至少 5 条（#8102、#8107、#8108、#8096、#7738）直接对应本周新报 Bug。若维护者能在未来 2–3 天批量合并，项目稳定性将有一次明显跃升；反之则积压将进一步恶化。

---

## 4. 社区热点

按评论数与讨论热度排序：

| 排名 | 条目 | 评论 | 热度分析 |
|---|---|---|---|
| 🥇 | [#7722](https://github.com/agentscope-ai/QwenPaw/issues/7722) 内存耗尽三条复合路径（含受控复现+最小修复） | **6** | 今日最高热度。报告者给出了 **controlled repro + minimal fixes**，属于高质量缺陷报告：将内存问题拆解为无界流缓冲、keep-alive 实例堆叠、doom-loop 门控绕过三条路径，并指出 #7222 只是其中路径 C。诉求明确——**希望官方给出容器内存治理的根因修复而非补丁**。 |
| 🥈 | [#7840](https://github.com/agentscope-ai/QwenPaw/issues/7840) 插件共享宿主事件循环，一次同步调用冻结整个实例 | **5** | 实测单插件同步 I/O 导致整实例冻结约 40 秒，影响所有 agent 与 channel。诉求是**插件隔离契约 + 监控 + 超时熔断**三位一体的架构级能力，属于平台可靠性刚需。 |
| 🥉 | [#7026](https://github.com/agentscope-ai/QwenPaw/issues/7026) `chat_template_kwargs` 未用 `extra_body` 包装导致 OpenAI SDK TypeError | **3** | 中文用户 coolerparqiya 自 8-14 报出，跨 7 周仍在更新。属于**模型调用主链路阻塞型缺陷**，与 PR [#7738](https://github.com/agentscope-ai/QwenPaw/pull/7738)（过滤未识别 kwargs）主题高度相关。 |
| 4 | [#7599](https://github.com/agentscope-ai/QwenPaw/issues/7599) opencode go 模型 `MissingSessionID` | **3** | 与今日新开的 [#8104](https://github.com/agentscope-ai/QwenPaw/issues/8104)（OpenCode API 需新增 `x-opencode-session` 头）为**同一问题的两面**：用户侧报障 + 用户侧给出方案。建议维护者合并处理。 |
| 5 | [#8094](https://github.com/agentscope-ai/QwenPaw/issues/8094) / [#8092](https://github.com/agentscope-ai/QwenPaw/issues/8092) | 各 **2** | 分别指向 Console 启动卡死与内容审查误判，均为新报 2 天内的高频互动。 |

**背后诉求**：讨论最集中的两条（#7722、#7840）都指向**平台级资源隔离与稳定性治理**，而非单点功能。这说明用户群体已从"尝鲜"转向"生产使用"，对可用性 SLA 的期待显著上升。

---

## 5. Bug 与稳定性

按严重程度排序（🔴 高 / 🟠 中 / 🟡 低）：

| 级别 | Issue | 问题 | 影响 | Fix PR |
|---|---|---|---|---|
| 🔴 | [#7722](https://github.com/agentscope-ai/QwenPaw/issues/7722) | 容器内存以 ~1MB/s 增长直至挂起/OOM，三条复合路径 | 服务不可用、OOM 崩溃 | ❌ 无 |
| 🔴 | [#7840](https://github.com/agentscope-ai/QwenPaw/issues/7840) | 插件同步调用阻塞宿主事件循环，整实例冻结 ~40s | 全 agent/channel 停摆 | ❌ 无 |
| 🔴 | [#8105](https://github.com/agentscope-ai/QwenPaw/issues/8105) | 工具审批按钮失效：点"同意"也执行"拒绝"，信封图标无响应 | 审批形同虚设，只能等超时 | ❌ 无 |
| 🔴 | [#8094](https://github.com/agentscope-ai/QwenPaw/issues/8094) | Console 启动 splash 无重试、无错误面；升级后 WebView2 陈旧缓存可**永久阻塞启动** | 用户彻底无法进入 | ✅ [#8102](https://github.com/agentscope-ai/QwenPaw/pull/8102) 已提交 boot watchdog |
| 🟠 | [#8106](https://github.com/agentscope-ai/QwenPaw/issues/8106) | 容器内插件安装失败：`PIP_TARGET` 泄漏致 `--home/--prefix` 冲突；PYTHONPATH 遮蔽 stdlib 破坏 `importlib.invalidate_caches()` | 插件生态不可用 | ✅ [#8107](https://github.com/agentscope-ai/QwenPaw/pull/8107) 已提交 |
| 🟠 | [#7026](https://github.com/agentscope-ai/QwenPaw/issues/7026) | `chat_template_kwargs` 自动注入未包装，OpenAI SDK 抛 TypeError | 特定模型全部调用失败 | ⚠️ 相关 [#7738](https://github.com/agentscope-ai/QwenPaw/pull/7738)（参数过滤） |
| 🟠 | [#8092](https://github.com/agentscope-ai/QwenPaw/issues/8092) | 阿里系网关内容审查误判 `data_inspection_failed` 被归类为 `bad_request`，无重试无回退，**直接杀死 turn** | 正常对话被中断 | ❌ 无 |
| 🟠 | [#8101](https://github.com/agentscope-ai/QwenPaw/issues/8101) | 全局 `/chat/<id>` 深链跨 agent 失效，同 agent 深链也无法激活会话 | 外部集成不可用 | ❌ 无 |
| 🟡 | [#7599](https://github.com/agentscope-ai/QwenPaw/issues/7599) | opencode go 模型 `MissingSessionID` (400) | 单provider 连接失败 | ⚠️ 见 [#8104](https://github.com/agentscope-ai/QwenPaw/issues/8104) 用户方案 |
| 🟡 | [#8085](https://github.com/agentscope-ai/QwenPaw/issues/8085)（被 #8096 引用） | `finish_reason="length"` 截断被静默丢弃，截断回答与完整回答无法区分 | 输出质量不可观测 | ✅ [#8096](https://github.com/agentscope-ai/QwenPaw/pull/8096) 已提交 |

**稳定性结论**：今日报告的高危 Bug 中，仅 **2/5 有对应 fix PR**（#8094、#8106），内存与事件循环两条**架构级根因问题均无修复方案**，是当前项目最大的健康度风险点。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 对应 PR | 纳入下一版本的可能性 |
|---|---|---|---|
| **回滚式消息分页**（compaction 后仍可向上翻阅完整历史） | [#7542](https://github.com/agentscope-ai/QwenPaw/pull/7542) `feat(chats): add scroll-back message pagination`（size/XXXL，自 9-04 待审） | ✅ 已有 | **中高**。解决"刷新后会话从中间开始"的真实痛点，但体量 XXXL，审阅周期长。 |
| **静默回退模型时通知用户**（daemon fallback 可见化） | [#8103](https://github.com/agentscope-ai/QwenPaw/issues/8103) `feat(observability)` | ❌ 无 | **中**。属可观测性增强，实现成本低，符合近期稳定性主线，适合作为小版本增量。 |
| **Provider 级 finish_reason 元数据透出** | [#8096](https://github.com/agentscope-ai/QwenPaw/pull/8096) | ✅ 已有 | **高**。size/S，逻辑清晰，与截断类困惑直接相关。 |
| **OpenCode API 会话头支持** | [#8104](https://github.com/agentscope-ai/QwenPaw/issues/8104) | ❌ 无 | **中高**。已有用户给出明确方案（每会话新增 `x-opencode-session`），同时可解 #7599。 |
| **Console 懒路由加载可重试** | [#8108](https://github.com/agentscope-ai/QwenPaw/pull/8108)，Fixes #7815 | ✅ 已有 | **高**。size/S，与 #8102 同属 Console 韧性主题，可打包发布。 |
| **Agent 运行时使用解析后的媒体能力** | [#8100](https://github.com/agentscope-ai/QwenPaw/pull/8100) | ✅ 已有 | **中高**。修复"已发现支持图像却在校验阶段被拒"的能力判定不一致。 |

**路线图判断**：下一版本很可能以 **"Console 韧性 + Provider 兼容 + 可观测性"** 为三条主线打包发布，而非引入大型新功能。XXXL 的 #7542 更可能推迟到后续 minor 版本。

---

## 7. 用户反馈摘要

**痛点**
- **生产可用性焦虑**：多条报告强调"managed cloud runtime / Docker container"环境下的 OOM、实例冻结（#7722、#7840），说明用户已在实际部署中使用，对资源隔离与故障域控制有硬性要求。
- **静默失败最招人烦**：审批点击无效（#8105）、API 假装接收消息（#7299）、模型静默回退（#8103）、截断不可见（#8096）——**用户反复抱怨的不是"报错"，而是"没报错但结果不对"**，这是典型的信任侵蚀型问题。
- **容器/插件部署体验差**：`PIP_TARGET` 环境泄漏、PYTHONPATH 遮蔽 stdlib（#8106）暴露出打包环境变量治理不严，直接影响插件生态扩张。
- **网络/网关环境脆弱**：内容审查误判被当作 bad_request 直接杀 turn（#8092）、opencode 会话头缺失（#7599/#8104），说明在非官方网关、多 provider 回退链场景下的容错设计不足。

**使用场景**
- 多 provider + 12 模型回退链的生产编排（#8092）
- Telegram channel 等外部通道接入（#8092）
- 外部插件/集成通过 `/chat/<id>` 深链拉起会话（#8101）
- 本地/第三方插件扩展（#7840、#8106）

**满意度信号**
- 用户愿意提交**受控复现、最小修复方案、已填好的 Issue 模板**（#7722、#8105、#8104），说明社区对项目仍有较高投入意愿与好感度。
- 反面信号：多条 Issue 自 8 月报出、跨 7 周仍在更新（#7026、#7599、#7722、#7840），耐心正在被消耗。

---

## 8. 待处理积压

以下条目**长期未闭环且影响面较大**，建议维护者优先排期：

| 条目 | 类型 | 创建 | 已挂起 | 风险 |
|---|---|---|---|---|
| [#7026](https://github.com/agentscope-ai/QwenPaw/issues/7026) | Bug（模型调用主链路 TypeError） | 2026-08-14 | **~52 天** | 🔴 跨版本复现（2.0.1 → 2.2.x），用户已提供英文版报告，仍未闭环 |
| [#7599](https://github.com/agentscope-ai/QwenPaw/issues/7599) | Bug（opencode 400） | 2026-09-07 | ~28 天 | 🟠 已有用户侧方案（#8104），等待官方确认 |
| [#7722](https://github.com/agentscope-ai/QwenPaw/issues/7722) | Bug（内存 OOM，含最小修复） | 2026-09-12 | ~23 天 | 🔴 报告质量极高却无 fix PR，社区关注度最高 |
| [#7840](https://github.com/agentscope-ai/QwenPaw/issues/7840) | Bug（事件循环阻塞） | 2026-09-17 | ~18 天 | 🔴 架构级隔离缺失，无 fix PR |
| [#7542](https://github.com/agentscope-ai/QwenPaw/pull/7542) | PR（scroll-back 分页，size/XXXL） | 2026-09-04 | **~31 天待审** | 🟠 体量大易被搁置，但解决真实痛点，建议指派 reviewer |
| [#7738](https://github.com/agentscope-ai/QwenPaw/pull/7738) | PR（kwargs 过滤，Under Review） | 2026-09-13 | ~22 天待审 | 🟠 与 #7026 直接相关，长期 Under Review 会阻塞该 Bug 闭环 |
| [#7299](https://github.com/agentscope-ai/QwenPaw/pull/7299) | PR（已 CLOSED） | 2026-08-25 | 40 天后关闭 | 🟡 建议在关闭时补充结论说明，避免同类问题重复提交 |

**维护者行动建议**
1. **批量合并"低风险高收益"PR**：#8096、#8108、#8107、#8102（均为 size/S 或 M），可一次性显著降低今日新增 Bug 存量。
2. **为 #7722 / #7840 指定 owner**：这两条是当前项目健康度的最大变量，且都有清晰的复现路径与用户期待。
3. **合并处理 #7599 与 #8104**：同一根因（缺失 session 头），可一票解决两条。
4. **建立 stale 策略**：8 月遗留 Issue 已超 50 天，建议明确"需更多信息/计划中/暂不支持"标签，给用户确定预期。

---

**健康度小结**：CoPaw 社区活跃度处于**高位**（19 条 Issue/PR 24h 内更新），首次贡献者活跃，报告质量普遍较高；但**闭环效率偏低**（Issue 关闭 0、PR 合并 0、仅 1 条关闭），且高危架构级 Bug 尚无修复方案。当前项目处于"用户增长快于维护带宽"的典型阶段，**短期关键动作是加速 PR 合并与高危 Issue 响应**，而非扩张功能面。

*注：本报告基于所提供的 GitHub 数据生成，PR 的"关闭"与"合并"状态以数据原文为准，未做额外推断。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 - 2026-10-05

## 1. 今日速览

过去24小时，ZeroClaw 项目保持高活跃度：Issues 更新 42 条（全部为新开或活跃，0 条关闭），PR 更新 50 条（47 条待合并，3 条已合并/关闭），无新版本发布。开发重点集中在运行时稳定性、配置安全、跨平台修复和渠道集成。多个 P0/P1 级别 Bug 正在处理，社区对数据丢失、剪贴板失效、会话持久化等问题反馈强烈。长期功能请求和架构跟踪器持续更新，显示项目正稳步向 v0.8.6 和 v0.9.0 推进。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日有 3 个 PR 合并/关闭，但数据未提供具体编号。从活跃 PR 看，多个关键修复已提交待审，若合并将显著提升稳定性和用户体验：

- [#11527](https://github.com/zeroclaw-labs/zeroclaw/pull/11527) `fix(config): refuse unproven full saves over existing files` — 解决配置覆盖导致数据丢失问题（对应 #10495）。
- [#11529](https://github.com/zeroclaw-labs/zeroclaw/pull/11529) `fix(zerocode): use local Linux clipboard writers and report copy outcomes` — 修复 ZeroCode 复制功能（对应 #11418）。
- [#11528](https://github.com/zeroclaw-labs/zeroclaw/pull/11528) `fix(zerocode): exit on terminal loss and handle idle SIGTERM` — 改进终端丢失和空闲信号处理。
- [#11530](https://github.com/zeroclaw-labs/zeroclaw/pull/11530) 和 [#11531](https://github.com/zeroclaw-labs/zeroclaw/pull/11531) — 修复 Tailscale 隧道发布和 URL 报告问题。
- [#11458](https://github.com/zeroclaw-labs/zeroclaw/pull/11458) `fix(memory): harden audit hygiene SQLite admission` — 加固 SQLite 审计准入。

此外，47 个待合并 PR 覆盖渠道扩展（Sendblue、Discord）、工具集成（agy_cli）、提供商适配（Anthropic/Bedrock 自适应思考模型）等，项目整体向前迈进明显。

## 4. 社区热点

今日评论数最多的 Issues：

- [#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965)（14 评论）— 运行时测试夹具加固，P1，测试相关。
- [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287)（9 评论，2 👍）— 定义紧凑的 `local_small` 运行时配置和提示预算契约，减少本地模型提示膨胀。
- [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)（6 评论）— 运行时和网关交付跟踪器（v0.8.6 和 v0.9.0）。
- [#10495](https://github.com/zeroclaw-labs/zeroclaw/issues/10495)（5 评论）— P0 配置保存可能用近空文件替换操作员的 `config.toml`，导致数据丢失。
- [#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420)（4 评论）— SQLite 会话后端每轮重写 `created_at`，丢失每条消息的时间。

PR 评论数未提供，但 [#10698](https://github.com/zeroclaw-labs/zeroclaw/pull/10698)（cron 编辑器）、[#10768](https://github.com/zeroclaw-labs/zeroclaw/pull/10768)（Sendblue 渠道）、[#10504](https://github.com/zeroclaw-labs/zeroclaw/pull/10504)（类型化停止分类）等更新频繁。

**分析**：社区高度关注数据安全、本地模型优化、跨平台支持和渠道集成。P0 级数据丢失问题引发最多讨论，反映出用户对配置持久化的核心诉求。

## 5. Bug 与稳定性

按严重程度排列：

**P0 / S0（数据丢失/安全风险）**
- [#10495](https://github.com/zeroclaw-labs/zeroclaw/issues/10495) `Config::save()` 可能用近空文件替换已填充的 `config.toml`（已有 fix PR [#11527](https://github.com/zeroclaw-labs/zeroclaw/pull/11527)）。

**P1 / S1（工作流阻塞）**
- [#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965) 并行运行时门控下的可执行测试夹具加固（进行中）。
- [#11418](https://github.com/zeroclaw-labs/zeroclaw/issues/11418) ZeroCode “复制”一键功能失效（已有 fix PR [#11529](https://github.com/zeroclaw-labs/zeroclaw/pull/11529)）。
- [#10673](https://github.com/zeroclaw-labs/zeroclaw/issues/10673) 守护进程 RPC 路径上失败的 ACP 回合未持久化。
- [#10876](https://github.com/zeroclaw-labs/zeroclaw/issues/10876) 网关配置写入 auth 段报告已保存但未到达 RPC 授权权威。
- [#10536](https://github.com/zeroclaw-labs/zeroclaw/issues/10536) macOS Seatbelt 忽略配置的 `allowed_roots`。
- [#11525](https://github.com/zeroclaw-labs/zeroclaw/issues/11525) quickstart 在 Android/Termux 上失败（S1）。

**P2 / S2（行为降级）**
- [#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) SQLite 会话时间戳丢失。
- [#10700](https://github.com/zeroclaw-labs/zeroclaw/issues/10700) 成本记录携带守护进程生命周期会话 ID，无法按会话分离支出。
- [#11371](https://github.com/zeroclaw-labs/zeroclaw/issues/11371) MCP 嵌套对象参数在工具执行前被序列化为字符串。
- [#11515](https://github.com/zeroclaw-labs/zeroclaw/issues/11515) 成本账本撕裂写入记录被所有汇总丢弃。
- [#11517](https://github.com/zeroclaw-labs/zeroclaw/issues/11517) Web 聊天中途重载丢失用户提示。
- [#11484](https://github.com/zeroclaw-labs/zeroclaw/issues/11484) ZeroCode Agent 回合禁用重复工具保护。

**P3 / S3（次要问题）**
- [#11416](https://github.com/zeroclaw-labs/zeroclaw/issues/11416) Slack 频道线程中“正在思考…”状态消失。

部分 Bug 已有 fix PR 待合并，其余仍在调查或进行中。

## 6. 功能请求与路线图信号

用户提出的新功能需求（结合已有 PR 判断可能纳入下一版本）：

- [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) 紧凑 `local_small` 运行时配置（P2, risk:high）— 可能进入 v0.9.0。
- [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) 运行时和网关交付跟踪器（v0.8.6/v0.9.0）— 明确版本目标。
- [#10892](https://github.com/zeroclaw-labs/zeroclaw/issues/10892) 发布规范配置生成并跟踪每目标应用结果（P2, risk:high）。
- [#8383](https://github.com/zeroclaw-labs/zeroclaw/issues/8383) ZeroCode 仪表板显示活动运行时上下文（P2）。
- [#10550](https://github.com/zeroclaw-labs/zeroclaw/issues/10550) 限制技能 HTTP DNS 解析（P2, risk:high）。
- [#7951](https://github.com/zeroclaw-labs/zeroclaw/issues/7951) 基于努力程度的本地/云端模型路由（P2, 已接受）。
- [#8527](https://github.com/zeroclaw-labs/zeroclaw/issues/8527) 大文件通过渠道附件发送（P2, 已接受）。
- [#11492](https://github.com/zeroclaw-labs/zeroclaw/issues/11492) 改进 ZeroCode 客户端设置中的操作发现（P2）。

**PR 信号**：
- [#10698](https://github.com/zeroclaw-labs/zeroclaw/pull/10698) 引导式 cron 计划编辑器。
- [#10768](https://github.com/zeroclaw-labs/zeroclaw/pull/10768) 新增 Sendblue iMessage/SMS 渠道。
- [#11076](https://github.com/zeroclaw-labs/zeroclaw/pull/11076) 新增 `agy_cli` 编码 CLI 工具（Antigravity CLI）。
- [#10611](https://github.com/zeroclaw-labs/zeroclaw/pull/10611) 适配 Anthropic 和 Bedrock 自适应思考 Claude 模型。
- [#9214](https://github.com/zeroclaw-labs/zeroclaw/pull/9214) eval 实时执行模式与沙箱工具面。

结合 `release:v0.8.6` 标签，部分修复和功能可能进入下一版本。

## 7. 用户反馈摘要

**真实用户痛点**：
- 配置保存导致数据丢失（#10495），用户配置 109 KB / 25 个 agents 被替换为 702 字节。
- 剪贴板复制功能无效（#11418），影响工作流。
- Slack “正在思考…”状态消失（#11416），用户感知工作状态困难。
- SQLite 会话时间戳被重写（#11420），无法按消息追踪时间。
- 成本记录无法按会话分离（#10700），影响计费透明度。
- quickstart 在 Android/Termux 上失败（#11525），移动端用户体验受阻。

**使用场景**：本地模型（MLX-LM、Ollama）、Android/Termux、SSH 终端、Slack/Discord 渠道、Web 仪表板。

**满意/不满意**：
- 满意：社区响应较快，多个 P0/P1 问题已有 fix PR 提交。
- 不满意：长期未修复的 P1/P2 Bug（如 #9965、#10673、#10536）持续影响用户；跨平台支持（Windows、macOS、Android）仍有明显缺口。

## 8. 待处理积压

**长期未关闭的重要 Issue**：
- [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287)（2026-04-04）本地小模型运行时配置。
- [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)（2026-06-09）运行时和网关交付跟踪器。
- [#7951](https://github.com/zeroclaw-labs/zeroclaw/issues/7951)（2026-06-19）基于努力程度的模型路由。
- [#8383](https://github.com/zeroclaw-labs/zeroclaw/issues/8383)（2026-06-27）ZeroCode 仪表板运行时上下文。
- [#8527](https://github.com/zeroclaw-labs/zeroclaw/issues/8527)（2026-06-30）大文件渠道附件。
- [#9190](https://github.com/zeroclaw-labs/zeroclaw/issues/9190)（2026-07-20）提供商 API 密钥轮换无法应用备用密钥。
- [#9320](https://github.com/zeroclaw-labs/zeroclaw/issues/9320)（2026-07-23）cron 作业超时释放锁。
- [#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965)（2026-08-13）测试夹具加固。

**长期开放的 PR**：
- [#9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002)（2026-07-11）网关在查看器断开后保持代理回合。
- [#9214](https://github.com/zeroclaw-labs/zeroclaw/pull/9214)（2026-07-20）eval 实时模式与沙箱工具面。
- [#9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320)（2026-07-23）cron 墙钟超时释放锁。
- [#10504](https://github.com/zeroclaw-labs/zeroclaw/pull/10504)（2026-08-31）类型化停止分类。
- [#10698](https://github.com/zeroclaw-labs/zeroclaw/pull/10698)（2026-09-07）引导式 cron 编辑器。
- [#10768](https://github.com/zeroclaw-labs/zeroclaw/pull/10768)（2026-09-10）Sendblue iMessage/SMS 渠道。

建议维护者优先处理 P0/P1 级别问题及长期积压的架构跟踪器，以维持项目健康度和社区信心。

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*