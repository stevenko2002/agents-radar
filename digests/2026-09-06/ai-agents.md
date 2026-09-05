# OpenClaw 生态日报 2026-09-06

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-05 22:17 UTC

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

**OpenClaw 项目动态日报 (2026‑09‑06)**  

---

### 1. 今日速览
- **活跃度**：过去 24 h 内 Issues 更新 500 条（新开/活跃 436，已关闭 64），PR 更新 500 条（待合并 307，已合并/关闭 193），表明社区在持续提交问题与代码贡献。  
- **版本发布**：今日发布了 **v2026.9.2**，重点提升了聊天响应性和仪表盘交互，减少了长转录和磁盘 I/O 对事件循环的阻塞。  
- **整体健康**：高频出现的“platinum hermit”、“diamond lobster”等高严重度标签表明核心稳定性仍是关注焦点，但已有大量修复 PR 进入待合并阶段，项目呈现快速迭代且积极修复的状态。  

---

### 2. 版本发布  
**v2026.9.2** (openclaw 2026.9.2)  

| 变更类别 | 内容 | 影响 |
|----------|------|------|
| **性能** | 通过 **直接仪表盘查询**、**减少冷启动工作**、**在 Gateway 事件循环外读取持久化历史**，使长转录和磁盘使用时聊天、仪表盘及会话交互保持响应。 | 大幅降低 UI 延迟，提升多用户并发体验。 |
| **稳定性** | 修复了导致 “Cannot convert undefined or null to object” 的回归（见 #38327）。 | 消除了在 2026.3.2 后出现的嵌入式 Agent 崩溃。 |
| **文档/工具** | 更新了部分内部脚本与 CI 配置（如 #139418、#139427），避免在特定虚拟化环境下的测试失败。 | 提高 CI 可靠性，减少误报。 |
| **破坏性变更** | 本版本 **未引入破坏性 API 变更**，所有发布兼容性声明均向后兼容。 | 升级无需额外迁移步骤。 |
| **迁移提示** | 建议用户执行 `openclaw doctor --repair --non-interactive` 以确保本地状态与新版本的持久化历史格式对齐；若使用自定义插件，请检查插件是否依赖旧的事件循环读取方式。 | 确保升级后插件与核心仍能正常交互。 |

完整发布记录：https://github.com/openclaw/openclaw/releases/tag/v2026.9.2  

---

### 3. 项目进展（今日合并/关闭的重要 PR）  
虽然今天的 PR 列表中未显示具体评论数，但从标题和标签可以判断出若干关键修复和功能已进入待合并/已合并状态。以下是今日值得关注的已合并/关闭 PR（基于 PR 编号与描述）：

| PR 编号 | 标题 / 目的 | 关联 Issue（若有） | 影响 |
|---------|-------------|-------------------|------|
| **#139421** | `fix(gateway): reconcile pairing lifecycle after token removal` | #135868 | 解决因撤销节点令牌而导致的客户端授权残留或 worker 清理错过问题，提升网关在动态环境下的可靠性。 |
| **#139418** | `fix(test): avoid guest exec failures on Parallels 27` | #139303 | 去除在 Parallels 虚拟机上因未捕获的顶层 await 导致的测试退出码 13，提升 CI 在多平台上的通过率。 |
| **#139450** | `fix: keep subagent checks responsive in large session stores` | — | 为大量保存的会话提供子代理检查的元数据缓存，防止网关在会话数增长时出现卡顿。 |
| **#139344** | `fix(windows): keep scheduled gateway running after restart` | #138981 | 修复 Windows 计划任务在网关重启后意外退出的竞态条件，确保后台服务持续可用。 |
| **#139397** | `fix: continue agent tasks after temporary rate limits` | #139312 | 在遇到临时 RPM/TPM 限制时，允许 Agent 任务在限制解除后自动恢复，减少人工干预。 |
| **#139373** (已关闭) | `fix(ui): keep resized Review tool cards within transcript bounds` | — | 改善 UI 中审查工具卡片的布局，防止尺寸调整导致内容溢出。 |
| **#139437** (已关闭) | `fix(gateway): resume idle cloud sessions after Gateway updates` | — | 更新网关后自动恢复 previously idle 云端会话，减少更新后的会话丢失。 |

以上 PR 均由维护者 **steipete** 或核心团队成员提交，标注为 `maintainer`、`P1/P2` 且多数带有 `ready for maintainer look` 状态，表明它们已通过初步审查，预计将在接下来的合并窗口中进入主干。  

合并/关闭 PR 总数： **193** （今日新增），显示代码基础正在快速稳定化。  

---

### 4. 社区热点（今日评论最多、反应最多的 Issues/PRs）  

| 排名 | 类型 | 编号 | 标题 | 评论数 | 👍 数 | 链接 |
|------|------|------|------|--------|------|------|
| 1 | Issue | #38327 | 「Cannot convert undefined or null to object」在 2026.3.2 + google‑vertex/gemini‑3.1‑pro‑preview | 15 | 3 | https://github.com/openclaw/openclaw/issues/38327 |
| 2 | Issue | #69208 | Umbrella: duplicate transcript, replay, and context assembly across channels | 14 | 0 | https://github.com/openclaw/openclaw/issues/69208 |
| 3 | Issue | #132762 | overflow retry can end successfully on a tool result without final delivery | 13 | 0 | https://github.com/openclaw/openclaw/issues/132762 |
| 4 | Issue | #53763 | Built‑in headless browser for reliable web access | 12 | 0 | https://github.com/openclaw/openclaw/issues/53763 |
| 5 | Issue | #39476 | A2A sessions_send: target agent can call sessions_send back, causing duplicate messages | 12 | 0 | https://github.com/openclaw/openclaw/issues/39476 |
| 6 | Issue | #96975 | Isolate subagent completion from parent context | 12 | 1 | https://github.com/openclaw/openclaw/issues/96975 |
| 7 | Issue | #127229 | telegram: watchdog‑released durable update falsely tombstoned | 12 | 0 | https://github.com/openclaw/openclaw/issues/127229 |
| 8 | Issue | #42840 | Add MathJax/LaTeX Support to Control UI | 9 | 10 | https://github.com/openclaw/openclaw/issues/42840 |
| 9 | Issue | #115642 | Billing cooldown outlives the outage on subscription auth | 9 | 0 | https://github.com/openclaw/openclaw/issues/115642 |
|10 | Issue | #6599 | Add /models test‑fallback command to verify fallback chain | 11 | 1 | https://github.com/openclaw/openclaw/issues/6599 |

**热点分析**  
- **#38327** 是今日评论最高的 Issue，反映了最近版本在特定模型（Google Vertex Gemini）下出现的空对象转换常见崩溃，已有维护者开始分析并准备修复。  
- **#69208** 为跨渠道重复转录/上下文装配的 umbrella 问题，涉及多个渠道（MSTeams, webchat, Telegram 等），社区关注度高，但尚未有明确的修复方案。  
- **#42840** 虽评论较少，但点赞数最高（10），表明用户对在 Control UI 中渲染 LaTeX 公式有强烈需求，可能成为下一版本的功能候选。  
- 其他高评论 Issue 大多围绕 **会话状态**、**消息丢失**、**插件/工具超时** 等核心稳定性话题，说明社区正在集中力量提升可靠性。  

---

### 5. Bug 与定性（今日报告的 Bug、崩溃、回归）  

| 严重度 | 编号 | 标题 | 状态 | 是否有对应 Fix PR | 链接 |
|--------|------|------|------|-------------------|------|
| **P0 / platinum hermit** | #38327 | 「Cannot convert undefined or null to object」在 2026.3.2 + google‑vertex/gemini‑3.1‑pro‑preview | OPEN | 无（待分析） | https://github.com/openclaw/openclaw/issues/38327 |
| **P0 / platinum hermit** | #115642 | Billing cooldown outlives the outage on subscription auth | OPEN | 无 | https://github.com/openclaw/openclaw/issues/115642 |
| **P1 / diamond lobster** | #132762 | overflow retry can end successfully on a tool result without final delivery | OPEN | 无 | https://github.com/openclaw/openclaw/issues/132762 |
| **P1 / diamond lobster** | #135111 | Intermittent “Provider completed tool call with malformed JSON arguments” on v2026.8.1 | OPEN | 无 | https://github.com/openclaw/openclaw/issues/135111 |
| **P1 / diamond lobster** | #119720 | Synchronous agent persistence blocks Gateway event loop at scale | OPEN | 无 | https://github.com/openclaw/openclaw/issues/119720 |
| **P1 / diamond lobster** | #90098 | Stack‑safe large attachment handling for Control UI and gateway | OPEN | 无 | https://github.com/openclaw/openclaw/issues/90098 |
| **P2 / silver shellfish** | #53408 | Write/exec tool parameters silently dropped after long conversations | OPEN | 无 | https://github.com/openclaw/openclaw/issues/53408 |
| **P2 / silver shellfish** | #97616 | OpenClaw leaks unreaped hook/tool child processes (zombie accumulation) | OPEN | 无 | https://github.com/openclaw/openclaw/issues/97616 |
| **P3 / off‑meta tidepool** | #6599 | Feature: Add /models test‑fallback command | OPEN | 无 | https://github.com/openclaw/openclaw/issues/6599 |

**观察**  
- 今日新增的高严重度 Bug 主要集中在 **模型交互**、**会话持久化**、**网关事件循环阻塞** 等核心路径。  
- 目前尚未看到直接对应的 Fix PR（大部分仍处于 OPEN 状态），说明这些问题需要更深入的根因分析。  
- 维护者可以优先关注标有 `clawsweeper:needs-maintainer-review`、`clawsweeper:needs-live-repro` 的 Issue，以便快速定位并提供修复。  

---

### 6. 功能请求与路线图信号  

| 功能请求 | 关联 Issue | 点赞/热度 | 已有相关 PR 或 讨论 | 预计纳入版本 |
|----------|------------|----------|---------------------|--------------|
| **内置 Headless Chromium**（可靠网页访问） | #53763 | 0 点赞，12 评论 | 无直接 PR，但社区多次提及 | 可能列入 2026.10.x 作为实验特性 |
| **MathJax/LaTeX 支持（Control UI）** | #42840 | 10 点赞，9 评论 | 无 PR，但需求明确 | 有望在下次 UI 迭代（2026.10）中实现 |
| **多 Azure/Teams 机器人单网关支持** | #71058 | 1 点赞，9 评论 | 无 PR | 需要网关层面的多实例改造，可能属于 2027 Q1 长期规划 |
| **会话自动标题（智能命名）** | #99583 | 2 点赞，8 评论 | 无 PR | 可作为插件或核心功能，列入 2026.11 候选 |
| **Per‑turn 消息发送预算（防止重复答复风暴）** | #119992 | 0 点赞，7 评论 | PR #120491（已提交，待合并） | 预计随 v2026.10 合并 |
| **模型 fallback 测试命令** | #6599 | 1 点赞，11 评论 | 无 PR | 可在 2026.10 中作为开发者工具加入 |

**路线图信号**：社区正在围绕 **提升多模态可靠性（头less 浏览器、LaTeX 渲染）**、**减少重复消息风暴（预算守卫）**、**改善多租户网关（多机器人支持）** 四个方向进行讨论。已有 PR（#120491）直接对应防止重复答复的需求，表明该功能有望在下个版本中落地。  

---

### 7. 用户反馈摘要（从 Issues 评论中提炼）  

- **响应性与卡顿**：多位用户反馈在处理长转录或大文件时，聊天窗口会出现明显延迟（#38327、#132762、#1197

---

## 横向生态对比

**今日重點（2026‑09‑06）**

1. **OpenClaw** – 發布 **v2026.9.2**，透過直接儀表板查詢、減少冷啟動工作及在 Gateway 事件循環外讀取持久化歷史，顯著降低長轉錄與磁碟 I/O 對 UI 的阻塞；同時修復了導致「Cannot convert undefined or null to object」的回歸（#38327）。  
   *影響：提升聊天、儀表板及會話交互的響應性，解決近期嵌入式 Agent 崩溃問題。*

2. **ZeroClaw** – 發布 **v0.8.5**，引入 ZeroRelay 與 ZeroRouter、強化 Plugin 沙箱與 Webhook 安全、擴充 Provider 支援並優化多模態會話（保留圖片附件、Telegram 自毀核准卡片等）。  
   *影響：安全性與連接性大幅提升，為後續功能擴展奠定穩固基礎。*

3. **NanoBot** – 合併 **#5656**，新增 `/compact` 指令支援手動/自動/空閒三種場景的上下文壓縮，並在 WebUI/TUI 中顯示壓縮狀態指示器。  
   *影響：使用者可可視化並控制上下文大小，減少長對話導致的 token 溢出。*

4. **NanoClaw** – 合併 **#2403**，以顯式 Release 工作流取代 `bump-version` 並加入併發守衛，防止並行發布競爭。  
   *影響：CI 發布流程更穩定，降低版本號衝突風險。*

5. **Hermes Agent** – 合併 **#81339**（修復 Kanban 依賴鉤子為 post‑commit 觸發）與 **#81474**（新增通用 `kanban_task_event` 插件鉤子）。  
   *影響：改善看板任務的事務可見性與生命週期可觀測性。*

6. **IronClaw** – 合併 **#8073**（將 Telegram 綁定失敗提示改為「管理員未配置」，避免歸咎用戶）與 **#8054**（在未配對用戶首次發送 `/start` 前先檢查配對狀態，防止誤顯示命令清單）。  
   *影響：提升 Telegram 入口體驗，減少使用者困惑。*

7. **PicoClaw** – 合併 **#1541**，引入集中式 media tempdir、擴展 agent 讀取允許路徑並加強 Channel DoS 防護。  
   *影響：增強多媒體處理的安全性與可靠性，降低惡意流量導致的服務中斷風險。*

**活躍度概覽**  
今日多個保持較高提交與合併頻率：OpenClaw、ZeroClaw、NanoBot、Hermes Agent、IronClaw、PicoClaw 及 NanoClaw 均有重要 PR 合併或版本發布；相反、LobsterAI、TinyClaw、Moltis、ZeptoClaw 與 NullClaw 則幾乎無動作，整體社區活躍度以核心項目的穩定性與基礎設施改進為主。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



# NanoBot 项目动态日报 — 2026-09-06

---

## 1. 今日速览

NanoBot 在过去 24 小时内保持**高活跃开发节奏**，共处理 16 条 PR（7 条已合并/关闭，9 条仍在开放中），并新增 2 条 Issue。核心维护者 **chengyongru** 一人主导了今日大部分提交，涵盖 WebUI 远程路径支持、事件系统重构、CLI 开发模式优化及多项清理性工作。项目整体方向聚焦于**架构稳定性修复**与**内部代码质量提升**，无新版本发布，但多条合并 PR 为后续功能铺垫了基础。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日合并/关闭的 PR 共计 **7 条**，按重要性排列如下：

| PR | 类型 | 说明 |
|---|---|---|
| [#5673](https://github.com/HKUDS/nanobot/pull/5673) | `fix` | WebUI 支持远程项目路径，尊重 gateway 的 folder-picker 能力，避免远程会话误触客户端本地文件选择器 |
| [#5670](https://github.com/HKUDS/nanobot/pull/5670) | `refactor` | 统一 scoped runtime notifications，迁移至 MessageBus 架构，支持 await 订阅与队列化通道投递 |
| [#5671](https://github.com/HKUDS/nanobot/pull/5671) | `fix` | CLI `--dev` 模式跳过 WebUI  bundle 检查，避免 Vite 热更新环境下误报 stale bundle 警告 |
| [#5669](https://github.com/HKUDS/nanobot/pull/5669) | `docs` | 补充 context budget 配置文档，说明输入预算如何从 context window 派生 |
| [#5668](https://github.com/HKUDS/nanobot/pull/5668) | `refactor` | 移除 `contextBlockLimit` 覆盖，统一所有请求使用 `contextWindowTokens - maxTokens - 1024` 的预算计算 |
| [#5667](https://github.com/HKUDS/nanobot/pull/5667) | `refactor` | 清理 ContextBuilder、Telegram、WebSocket 等多处废弃内部 helper 及测试残留 |
| [#5656](https://github.com/HKUDS/nanobot/pull/5656) | `feat` | 新增 `/compact` 命令，支持手动/自动/空闲三种场景的上下文压缩，并在 WebUI/TUI 展示压缩状态指示器 |
| [#5672](https://github.com/HKUDS/nanobot/pull/5672) | `test` | 移除已过时的符号/字段/路由不存在性检查，保留核心行为与安全测试 |

**进展评估**：项目整体向前推进明显，重点在事件系统重构与上下文管理规范化两条主线，同时清理了大量历史债务，代码健康度持续提升。

---

## 4. 社区热点

### 活跃 Issue

- **[#5567](https://github.com/HKUDS/nanobot/issues/5567)** — 飞书渠道整合多轮回复为单条流式卡片消息（4 条评论，2026-08-27 创建）  
  **诉求分析**：用户反馈飞书渠道中 agent 一条用户消息会触发 n 条独立消息（工具提示、进度、最终回复等），严重破坏对话连贯性。当前流式输出阶段已有 CardKit 支持，但工具调用与最终回复仍使用独立 `send()`，导致 UI 碎片化。该需求与已合并的 [#5656](https://github.com/HKUDS/nanobot/pull/5656)（统一事件生命周期）存在潜在协同空间，预计后续 PR 可在此方向上延伸。

- **[#5674](https://github.com/HKUDS/nanobot/issues/5674)** — Nvidia NIM 返回特定错误时 agent 停止工作（2026-09-05 创建，0 评论）  
  **诉求分析**：当 provider 返回超时错误（`timed out after 300s/600s`）时，nanobot 误将错误信息当作模型输出，导致 agent 进入异常终止状态。属于 **P2 级稳定性问题**，目前尚无对应 fix PR，建议维护者优先排查 provider 错误处理链路。

### 高价值开放 PR

- **[#5573](https://github.com/HKUDS/nanobot/pull/5573)** — MCP OAuth token 自动刷新（跨网关重启持久化）  
- **[#5504](https://github.com/HKUDS/nanobot/pull/5504)** — WebUI/TUI 显示模型重试倒计时与进度  
- **[#5580](https://github.com/HKUDS/nanobot/pull/5580)** — 会话持久化 offload 至事件循环之外（P1 优先级）  

---

## 5. Bug 与稳定性

| 级别 | Issue/PR | 描述 | Fix 状态 |
|---|---|---|---|
| 🔴 高 | [#5674](https://github.com/HKUDS/nanobot/issues/5674) | Nvidia NIM 超时错误导致 agent 异常终止 | ❌ 无 fix PR |
| 🟡 中 | [#5589](https://github.com/HKUDS/nanobot/pull/5589) | 已废弃会话的消息仍可通过 pending/deferred 队列复活 | 🔄 PR 开放中 |
| 🟡 中 | [#5471](https://github.com/HKUDS/nanobot/pull/5471) | `ephemeral=True` SDK 运行时意外修改 session 状态 | 🔄 PR 开放中 |
| 🟠 低 | [#5630](https://github.com/HKUDS/nanobot/pull/5630) | Dream memory 文件（SOUL.md/USER.md）无大小上限，可无限增长 | 🔄 PR 开放中 |
| 🟠 低 | [#5664](https://github.com/HKUDS/nanobot/pull/5664) | idle summary cache 无界增长，被遗弃会话占用内存 | 🔄 PR 开放中 |

> **稳定性评估**：今日无新崩溃报告，但存在 1 条未修复的 P2 级 provider 兼容性问题，以及 4 条开放中的内存/状态管理 fix PR，建议在下一版本中优先合并以恢复稳定性基线。

---

## 6. 功能请求与路线图信号

| 请求/信号 | 来源 | 纳入下版本可能性 |
|---|---|---|
| 飞书多轮消息整合为流式卡片 | [#5567](https://github.com/HKUDS/nanobot/issues/5567) | ⭐⭐⭐ 高（与事件重构方向一致） |
| MCP OAuth token 自动刷新 | [#5573](https://github.com/HKUDS/nanobot/pull/5573) | ⭐⭐⭐ 高（已在开放 PR，pending review） |
| Langfuse tracing for Codex | [#5520](https://github.com/HKUDS/nanobot/pull/5520) | ⭐⭐ 中（provider 增强类功能，依赖 review） |
| 模型重试状态可视化 | [#5504](https://github.com/HKUDS/nanobot/pull/5504) | ⭐⭐ 中（WebUI 体验优化） |
| 会话持久化 offload | [#5580](https://github.com/HKUDS/nanobot/pull/5580) | ⭐⭐⭐ 高（P1 优先级，解决 event loop 阻塞） |

---

## 7. 用户反馈摘要

- **飞书渠道消息碎片化**（[#5567](https://github.com/HKUDS/nanobot/issues/5567)）：用户期望"一条用户消息 → 一条 agent 回复"的严格对应关系，当前多消息分离体验被明确指出为主要痛点。
- **Nvidia NIM 容错缺失**（[#5674](https://github.com/HKUDS/nanobot/issues/5674)）：provider 超时错误未被正确捕获，导致 agent 静默停止，影响生产环境可用性。
- **WebUI 远程部署体验**（[#5673](https://github.com/HKUDS/nanobot/pull/5673)）：远程用户在选择项目路径时不应触发本地文件选择器，该问题的修复已合并，反映远程协作场景的切实需求。
- **上下文压缩可见性**（[#5656](https://github.com/HKUDS/nanobot/pull/5656)）：用户希望明确知晓压缩何时发生，新合并的 `/compact` 命令及状态指示器回应了这一诉求。

---

## 8. 待处理积压

| 条目 | 类型 | 创建时间 | 备注 |
|---|---|---|---|
| [#5674](https://github.com/HKUDS/nanobot/issues/5674) | Bug | 2026-09-05 | P2，Nvidia NIM 超时错误处理，**无 assignee**，建议优先跟进 |
| [#5589](https://github.com/HKUDS/nanobot/pull/5589) | Fix | 2026-08-28 | 已废弃会话复活问题，PR 已开放，需 review 合并 |
| [#5471](https://github.com/HKUDS/nanobot/pull/5471) | Fix | 2026-08-21 | ephemeral run 污染 session 状态，**已开放超两周**，需推动 review |
| [#5520](https://github.com/HKUDS/nanobot/pull/5520) | Feature | 2026-08-24 | Codex Langfuse tracing，PR 开放中，依赖 provider 侧 review |
| [#5567](https://github.com/HKUDS/nanobot/issues/5567) | Feature | 2026-08-27 | 飞书流式卡片整合，社区呼声高，建议纳入后续里程碑 |

---

**日报结论**：NanoBot 今日以内部重构与稳定性修复为主轴，chengyongru 贡献突出，代码质量持续改善。社区层面飞书渠道体验优化与 provider 容错能力为近期焦点，建议维护者在下一个 release 周期优先处理 [#5674](https://github.com/HKUDS/nanobot/issues/5674) 与积压 PR。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>



# Hermes Agent 项目日报 — 2026-09-06

---

## 1. 今日速览

过去24小时 Hermes Agent 项目保持高度活跃：新增/活跃 Issues 50条，PR 50条（其中4条已合并/关闭，46条待合并）。今日无新版本发布，但社区在 Bug 修复和功能迭代两个方向均有实质性推进。P1 级稳定性问题集中爆发，涵盖 cron 调度、桌面渲染器 OOM、网关信号处理等多个核心组件，反映出项目在快速迭代后正进入一轮系统性质量清理期。整体健康度：活跃度高，但稳定性风险需重点关注。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR（共 2 条 CLOSED）

| PR | 类型 | 说明 | 链接 |
|----|------|------|------|
| [#81339](https://github.com/NousResearch/hermes-agent/issues/81339) | fix(kanban) | Kanban 依赖阻塞 hook 改为 post-commit 触发，修复事务关闭前的可见性问题 | [PR #81339](https://github.com/NousResearch/hermes-agent/pull/81339) |
| [#81474](https://github.com/NousResearch/hermes-agent/issues/81474) | feat(kanban) | 新增通用 `kanban_task_event` 插件钩子，支持生命周期事件观察者模式 | [PR #81474](https://github.com/NousResearch/hermes-agent/pull/81474) |

### 其他重要待合并 PR

- [#103921](https://github.com/NousResearch/hermes-agent/pull/103921) — **feat(prompt)**：让 `SOUL.md` 在样式冲突时优先于 runtime guidance，直接回应用户痛点 Issue #103919
- [#103665](https://github.com/NousResearch/hermes-agent/pull/103665) — **fix(tui-gateway)**：修复 hosted-room driver 每5秒删除 WAL sidecar 导致 SQLite 连接断裂的问题
- [#103922](https://github.com/NousResearch/hermes-agent/pull/103922) — **fix(api-server)**：修复 API server 忽略 `agent.system_prompt` 配置的问题
- [#102349](https://github.com/NousResearch/hermes-agent/pull/102349) — **fix(desktop)**：修复远程模式（无本地 Python 环境）下 Desktop 更新报 broken installation 的误判

项目整体在以下方向持续前进：安全性加固（profile 边界）、cron 可靠性、Desktop 更新体验、API server 一致性。

---

## 4. 社区热点

| Issue | 评论数 | 热度分析 | 链接 |
|-------|--------|----------|------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | 162 | Skills 索引超时问题长期未解，自动化探针反复触发告警，社区持续关注 | [Issue #66616](https://github.com/NousResearch/hermes-agent/issues/66616) |
| [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) | 81 | 仓库级 godfile 重构史诗级任务，遗留 2K 子任务待清理，架构演进阻力明显 | [Issue #78647](https://github.com/NousResearch/hermes-agent/issues/78647) |
| [#88584](https://github.com/NousResearch/hermes-agent/issues/88584) | 68 | 自动化 Nous-to-Enterkey 合并因 `cron/jobs.py` 冲突阻塞，影响集成流水线 | [Issue #88584](https://github.com/NousResearch/hermes-agent/issues/88584) |
| [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) | 23 | Bot 群聊在 Desktop 关闭后保持运行的功能需求，基础架构已在 main，等待生产对接 | [Issue #97681](https://github.com/NousResearch/hermes-agent/issues/97681) |
| [#58576](https://github.com/NousResearch/hermes-agent/issues/58576) | 9 | Python GIL 导致 web_server 事件循环阻塞最高 51s，桌面 UI 假死，获 1 👍 | [Issue #58576](https://github.com/NousResearch/hermes-agent/issues/58576) |

**热点分析**：Skills 索引老化（#66616）和 godfile 重构（#78647）是长期高热度话题，反映项目在规模扩张后面临的基础设施债务压力。Bot 群聊续跑（#97681）获得关注表明用户对多端协同场景有强需求。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 P1 — 高严重性

| Issue | 描述 | Fix PR | 链接 |
|-------|------|--------|------|
| [#58576](https://github.com/NousResearch/hermes-agent/issues/58576) | web_server 事件循环在重负载下阻塞最高 51s，桌面 UI 假死 | 暂无 | [Issue #58576](https://github.com/NousResearch/hermes-agent/issues/58576) |
| [#98022](https://github.com/NousResearch/hermes-agent/issues/98022) | `hermes update` 在 stale interrupted receipt 时触发 fleet 无限重启循环 | [#98010](https://github.com/NousResearch/hermes-agent/pull/98010) 待合并 | [Issue #98022](https://github.com/NousResearch/hermes-agent/issues/98022) |
| [#20548](https://github.com/NousResearch/hermes-agent/issues/20548) | Feishu 平台 `root_id` fallback 导致所有回复变为 threaded 格式 | 暂无 | [Issue #20548](https://github.com/NousResearch/hermes-agent/issues/20548) |
| [#100401](https://github.com/NousResearch/hermes-agent/issues/100401) | cron fire-claim heartbeat 死锁于自身 fence，导致 >60s 任务被误判为 "Interrupted by shutdown" | 暂无 | [Issue #100401](https://github.com/NousResearch/hermes-agent/issues/100401) |
| [#69180](https://github.com/NousResearch/hermes-agent/issues/69180) | Desktop renderer 因 transcript virtualization layout thrash 导致 OOM crash-loop，约7分钟后可复现 | 暂无 | [Issue #69180](https://github.com/NousResearch/hermes-agent/issues/69180) |
| [#96925](https://github.com/NousResearch/hermes-agent/issues/96925) | GitHub Copilot 集成下 tool call 重复，日志频繁告警 | 暂无 | [Issue #96925](https://github.com/NousResearch/hermes-agent/issues/96925) |

### 🟡 P2 — 中等严重性

| Issue | 描述 | Fix PR | 链接 |
|-------|------|--------|------|
| [#103904](https://github.com/NousResearch/hermes-agent/issues/103904) | 重复 cron 任务 `next_run_at` 保存为 UTC，导致欧洲时区任务延迟 2h 执行 | 暂无 | [Issue #103904](https://github.com/NousResearch/hermes-agent/issues/103904) |
| [#97740](https://github.com/NousResearch/hermes-agent/issues/97740) | Bot Mode 群聊 sticky Stop 不可见，`@all` 无法释放，群组永久沉默 | 暂无 | [Issue #97740](https://github.com/NousResearch/hermes-agent/issues/97740) |
| [#103840](https://github.com/NousResearch/hermes-agent/issues/103840) | `.recover` 恢复路径遗留 FTS5 shadow table，导致 gateway 启动失败 | 暂无 | [Issue #103840](https://github.com/NousResearch/hermes-agent/issues/103840) |
| [#98010](https://github.com/NousResearch/hermes-agent/issues/98010) | 从 gateway 进程树内调用 `hermes update` 触发无限 fleet-restart 循环 | [#98010](https://github.com/NousResearch/hermes-agent/pull/98010) 待合并 | [Issue #98010](https://github.com/NousResearch/hermes-agent/issues/98010) |
| [#20301](https://github.com/NousResearch/hermes-agent/issues/20301) | cron pre-run 脚本失败被静默标记为 `ok`，

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



# PicoClaw 项目日报 | 2026-09-06

## 1. 今日速览

过去 24 小时 PicoClaw 项目保持**中度活跃**，共处理 7 项任务（2 Issues + 5 PRs）。Issues 方面聚焦 IRC 长消息支持与 after-turn 转向模式优化，PR 方面以日常修复合并为主，仅 1 条文档类 PR 待合并。整体项目健康度良好，维护者 xuwei-xy 持续清理历史修复，但新功能推进较慢，需关注社区核心诉求的落地节奏。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

### 已合并/关闭的 PR（4 条）

| PR | 作者 | 内容概要 | 链接 |
|---|---|---|---|
| #1559 | xuwei-xy | 合并 #1327 #1319 #1318 #1313 修复 | [PR #1559](https://github.com/sipeed/picoclaw/pull/1559) |
| #1545 | xuwei-xy | 合并 #1500 #1490 #1488 #1487 #1485 修复 | [PR #1545](https://github.com/sipeed/picoclaw/pull/1545) |
| #1555 | xuwei-xy | 合并 #1390 #1389 #1383 #1381 修复 | [PR #1555](https://github.com/sipeed/picoclaw/pull/1555) |
| #1541 | xuwei-xy | 合并 #1536 #1535 #1531（media tempdir、channel DoS 加固、DeepWiki badge）| [PR #1541](https://github.com/sipeed/picoclaw/pull/1541) |

**推进要点：**
- **#1541** 引入集中式 media tempdir（`pkg/media/tempdir.go`），扩展 agent read allow-path 支持媒体临时目录，增强 channel DoS 防护
- 多条修复 PR 的合并表明维护者正在系统性地清理历史积压，项目基础设施稳定性有所提升

### 待合并 PR（1 条）

| PR | 作者 | 内容 | 链接 |
|---|---|---|---|
| #3368 | georgeatparallel | 添加 Parallel Search MCP 配置示例文档 | [PR #3368](https://github.com/sipeed/picoclaw/pull/3368) |

**评价：** 文档类 PR，描述清晰但尚未被合并，可能处于 review 阶段。Parallel Search 集成对用户无 Parallel 账户或 API key 的场景提供搜索能力，符合项目易用性目标。

---

## 4. 社区热点

### Issue #3287 — IRC 长消息支持（最活跃）
- **状态：** OPEN
- **作者：** superuser-does
- **创建：** 2026-07-22 | **更新：** 2026-09-05
- **评论：** 10 | **👍：** 0
- **链接：** [Issue #3287](https://github.com/sipeed/picoclaw/issues/3287)
- **摘要：** IRCv3 默认限制 512 字节，新行表示新消息。当消息超过 512 字节时，IRC 客户端会自动分割。PicoClaw 应将长消息视为单一、连贯的消息处理。

**分析：** 10 条评论表明用户对此功能有强烈诉求。IRC 协议本身限制 512 字节，但现代应用场景需要处理更长的消息体。该 Issue 涉及协议层适配与用户体验优化，可能被纳入下一版本的核心功能。

### Issue #3342 — After-turn 转向模式优化（已关闭）
- **状态：** CLOSED (stale)
- **作者：** unedtamps
- **创建：** 2026-08-21 | **更新：** 2026-09-05
- **评论：** 2 | **👍：** 0
- **链接：** [Issue #3342](https://github.com/sipeed/picoclaw/issues/3342)
- **摘要：** 当用户发送第二条消息时，agent 仍在处理第一条消息，当前设计将剩余工具调用跳过（"Skipped due to queued user message."），注入新消息作为任务修正。

**分析：** 已标记为 stale 关闭，但反映了用户对多任务并发处理的诉求。该 Issue 涉及 agent 转向逻辑的核心设计，可能在后续版本中重新审视。

---

## 5. Bug 与稳定性

今日无新报告的 Bug 或崩溃问题。

### 历史修复（已通过 PR 合并）
- **#1541** 涉及 channel DoS 加固，可能修复了潜在的拒绝服务问题
- **#1541** 引入 media tempdir，可能修复了临时文件管理相关的问题

**评估：** 项目稳定性有所提升，但需持续关注 DoS 防护类问题的回归。

---

## 6. 功能请求与路线图信号

### 高优先级需求

| Issue | 诉求 | 可能被纳入版本 | 理由 |
|---|---|---|---|
| #3287 | IRC 长消息支持 | 下一版本（v2.x） | 10 条评论，协议层适配需求明确 |
| #3342 | After-turn 转向模式优化 | 待定 | 已关闭但反映核心设计诉求 |

### 已合并的功能增强
- **#1541** media tempdir + channel DoS 加固 — 已合并，提升基础设施稳定性

**判断：** 项目当前聚焦于稳定性和基础设施，新功能推进较慢。IRC 长消息支持（#3287）最可能被纳入下一版本。

---

## 7. 用户反馈摘要

### 真实痛点
1. **IRC 长消息处理**（#3287）：用户希望 PicoClaw 能正确处理超过 512 字节的 IRC 消息，将其视为单一连贯消息而非自动分割。
2. **多任务并发处理**（#3342）：用户在使用 agent 时，希望在处理第一任务时能queue第二条消息，而非直接跳过剩余工具调用。

### 使用场景
- **IRC 集成场景：** 用户通过 IRCv3 发送长消息（如代码片段、配置内容），期望 PicoClaw 能完整理解并处理。
- **Agent 转向场景：** 用户在 agent 处理任务时发送修正消息，希望 queue 而非中断当前任务。

### 满意/不满意
- **满意：** 维护者持续清理历史修复（多条 merge PR），项目稳定性有所提升。
- **不满意：** 新功能推进较慢，核心用户诉求（IRC 长消息）尚未落地。

---

## 8. 待处理积压

### 需维护者关注

| Issue/PR | 状态 | 创建时间 | 评论数 | 提醒理由 |
|---|---|---|---|---|
| #3287 [OPEN] IRC 长消息支持 | Open | 2026-07-22 | 10 | 用户诉求强烈，可能纳入下一版本 |
| #3368 [OPEN] Parallel Search MCP 文档 | Open | 2026-09-05 | undefined | 文档 PR 待合并，影响用户上手体验 |

### 历史积压（长期未响应）
- **#3342** 已标记 stale 关闭，但 after-turn 转向模式的核心设计诉求可能需要重新审视。

---

## 项目健康度评估

| 指标 | 评分 | 说明 |
|---|---|---|
| 活跃度 | ⭐⭐⭐☆☆ | 中度活跃，2 Issues + 5 PRs/24h |
| 响应速度 | ⭐⭐⭐⭐☆ | 维护者持续清理修复，但新功能响应较慢 |
| 社区参与 | ⭐⭐⭐☆☆ | 核心 Issue 评论数适中，缺乏高互动讨论 |
| 稳定性 | ⭐⭐⭐⭐☆ | 多条 DoS 加固修复已合并，基础设施增强 |
| 功能推进 | ⭐⭐⭐☆☆ | 新功能缓慢，聚焦于稳定性 |

**总体评价：** PicoClaw 项目当前处于**稳定性增强阶段**，维护者系统性清理历史修复，基础设施有所提升。但核心用户诉求（IRC 长消息支持）尚未落地，新功能推进较慢。建议维护者优先回应 #3287，并评估 #3368 文档 PR 的合并时机。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



# NanoClaw 项目动态日报
**日期：2026-09-06 | 报告周期：2026-09-05 ~ 2026-09-06**

---

## 1. 今日速览

NanoClaw 项目今日活跃度集中在 Pull Request 推进，过去 24 小时内共产生 **14 条 PR 更新**，其中 **13 条待合并**、**1 条已合并关闭**，Issues 无新增或更新。整体状态健康：无新版本发布，但维护团队正稳步推进 Provider 合同重构、技能安装安全加固及测试清理等关键基础设施工作，项目技术债务清理与架构规范化同步进行。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### ✅ 已合并

| PR | 类型 | 说明 |
|---|---|---|
| [#2403](https://github.com/nanocoai/nanoclaw/pull/2403) | ci/refactor | 以显式 Release 工作流替换 `bump-version`，并添加并发守卫，防止并行发布竞争。长期积压的 CI 稳定性改进已落地。 |

### 🔶 待合并（重点）

| PR | 类型 | 说明 |
|---|---|---|
| [#3720](https://github.com/nanocoai/nanoclaw/pull/3720) | feat | 新增 `ncl skills list/plan/apply` 结构化能力安装命令，源码安装默认关闭、需显式启用，且 Agent 不可自行开启，具备受保护的回滚机制。 |
| [#3721](https://github.com/nanocoai/nanoclaw/pull/3721) | fix/hardening | 强制要求显式安装能力，所有安装请求路由至受保护的 CLI，拒绝绕过策略直接执行脚本或手动编辑。 |
| [#3725](https://github.com/nanocoai/nanoclaw/pull/3725) | fix | 将 Linux signal-cli 版本从 0.14.3 锁定至 0.14.7，修复向无会话联系人发消息时永久挂起的问题。 |
| [#3710](https://github.com/nanocoai/nanoclaw/pull/3710) | test | 修复全量 `pnpm test` 每次运行残留约 355 个临时目录的问题，避免 `/tmp` tmpfs 空间泄漏。 |
| [#3724](https://github.com/nanocoai/nanoclaw/pull/3724) | fix | 更新 `add-opencode` skill 中已于 2026-06-15 退役的 `claude-sonnet-4-20250514` 模型 ID，替换为 `claude-sonnet-5`。 |
| [#3586/3588/3584](https://github.com/nanocoai/nanoclaw/pull/3586) | refactor | Provider 合同系列重构：声明 setup provider 合约、实现 OpenCode/Codex provider contract，统一配置解析逻辑。 |
| [#3355/3356](https://github.com/nanocoai/nanoclaw/pull/3355) | feat | 新增 Cursor Agent SDK provider payload 及 `/add-cursor` 安装 skill。 |
| [#3591/3592](https://github.com/nanocoai/nanoclaw/pull/3591) | refactor/feat | 将 provider 指令文档核心化（core-owned canon），并为 Agent Group 新增 `speed` 推理属性。 |

**整体推进评估：** 今日工作聚焦于 **Provider 架构规范化** 和 **安装安全加固** 两条主线，13 条待合并 PR 中大部分已进入 review 后期，预计短期内可批量合入主干。

---

## 4. 社区热点

今日无新增 Issues，PR 评论数据暂缺。但根据 PR 内容与时间线分析，以下方向是社区关注焦点：

| 方向 | 相关 PR | 分析 |
|---|---|---|
| **安装安全与策略管控** | #3720, #3721 | 用户/维护者对 Agent 擅自安装扩展存在安全隐患的担忧，推动安装路径收敛至显式授权 CLI。 |
| **Provider 合同标准化** | #3586, #3588, #3584, #3722 | 多个 PR 围绕统一 Provider 接口重构，反映社区对插件兼容性与可维护性的强烈诉求。 |
| **测试基础设施健康** | #3710 | tmpfs 空间泄漏问题在持续集成的开发环境中影响显著，修复后将改善 CI runner 稳定性。 |

---

## 5. Bug 与稳定性

| 严重程度 | 问题描述 | 状态 | 关联 PR |
|---|---|---|---|
| 🟡 中 | Linux signal-cli 0.14.3 向无会话联系人发消息时永久挂起 | Fix PR 已提交 | [#3725](https://github.com/nanocoai/nanoclaw/pull/3725) |
| 🟡 中 | `pnpm test` 每次运行遗留约 355 个临时目录，长期积累导致磁盘压力 | Fix PR 已提交 | [#3710](https://github.com/nanocoai/nanoclaw/pull/3710) |
| 🟢 低 | `add-opencode` skill 使用了已退役的 Claude Sonnet 4 模型 ID | Fix PR 已提交 | [#3724](https://github.com/nanocoai/nanoclaw/pull/3724) |

**无崩溃类或回归问题报告。** 所有已知问题均有对应 Fix PR 处于待合并状态。

---

## 6. 功能请求与路线图信号

| 需求/信号 | 关联 PR | 纳入下一版本概率 |
|---|---|---|
| **结构化 Skills 安装工作流**（list/plan/apply） | #3720 | ⭐⭐⭐⭐⭐ 极高，已在 hardening PR #3721 配合 |
| **显式安装授权策略**（拒绝 Agent 自主安装） | #3721 | ⭐⭐⭐⭐⭐ 极高，安全强约束方向 |
| **Cursor Agent SDK 原生支持** | #3355, #3356 | ⭐⭐⭐⭐ 高，Payload + Skill 已就绪 |
| **Agent Group `speed` 推理属性** | #3592 | ⭐⭐⭐⭐ 高，配合 Provider 合同体系 |
| **Provider 指令文档核心化** | #3591 | ⭐⭐⭐⭐ 高，架构重构已完成 |
| **Release 工作流并发保护** | #2403 | ✅ 已合并 |

**路线图判断：** 下一版本将围绕 **Provider 合同体系落地** 与 **安装安全治理** 双主题发布，预计包含 Cursor 集成、speed 属性、结构化技能管理等核心特性。

---

## 7. 用户反馈摘要

今日无新增 Issues 评论，但从 PR 描述中可提炼以下用户诉求：

| 痛点/诉求 | 来源 |
|---|---|
| **"安装不应由 Agent 自行决定，需 operator 显式授权"** — 用户对 Agent 越权安装能力的担忧是当前 PR #3721 的核心驱动力。 | #3721 |
| **"测试清洁度影响 CI/CD 持续性"** — 长期运行的 dev box 和 CI runner 对临时文件泄漏敏感。 | #3710 |
| **"Signal 集成在特定场景下挂死"** — signal-cli 0.14.3 版本缺陷影响生产环境稳定性。 | #3725 |
| **"文档与代码中模型 ID 未及时同步上游变更"** — Anthropic 退役模型导致 skill 示例失效。 | #3724 |

---

## 8. 待处理积压

| PR | 创建时间 | 待合并天数 | 说明 |
|---|---|---|---|
| [#3355](https://github.com/nanocoai/nanoclaw/pull/3355) | 2026-08-19 | ~18 天 | `/add-cursor` skill，Cursor 集成的最后一公里 |
| [#3356](https://github.com/nanocoai/nanoclaw/pull/3356) | 2026-08-19 | ~18 天 | Cursor Agent SDK payload，依赖 #3355 配套 |
| [#3584](https://github.com/nanocoai/nanoclaw/pull/3584) | 2026-08-27 | ~10 天 | Codex provider contract 实现 |
| [#3586](https://github.com/nanocoai/nanoclaw/pull/3586) | 2026-08-27 | ~10 天 | Setup provider contract 声明 |
| [#3588](https://github.com/nanocoai/nanoclaw/pull/3588) | 2026-08-27 | ~10 天 | OpenCode provider contract 实现 |
| [#3591](https://github.com/nanocoai/nanoclaw/pull/3591) | 2026-08-27 | ~10 天 | Provider 指令 core-owned canon 渲染 |
| [#3592](https://github.com/nanocoai/nanoclaw/pull/3592) | 2026-08-28 | ~9 天 | `speed` 属性 feat |
| [#3710](https://github.com/nanocoai/nanoclaw/pull/3710) | 2026-09-03 | ~3 天 | 测试临时目录清理 |
| [#3720](https://github.com/nanocoai/nanoclaw/pull/3720) | 2026-09-04 | ~2 天 | 结构化 skills 安装 |
| [#3721](https://github.com/nanocoai/nanoclaw/pull/3721) | 2026-09-04 | ~2 天 | 安装安全加固 |
| [#3722](https://github.com/nanocoai/nanoclaw/pull/3722) | 2026-09-04 | ~2 天 | OpenCode contract 适配 |
| [#3724](https://github.com/nanocoai/nanoclaw/pull/3724) | 2026-09-05 | ~1 天 | 退役模型 ID 更新 |
| [#3725](https://github.com/nanocoai/nanoclaw/pull/3725) | 2026-09-05 | ~1 天 | signal-cli 版本锁定 |

**维护者关注建议：** #3355/#3356（Cursor 集成）和 #3584/#3586/#3588/#3591（Provider 合同系列）已等待 10 天以上，建议优先 review 以释放积压；#3720/#3721 安全相关 PR 需尽快决策以避免功能窗口期延误。

---

**日报生成时间：2026-09-06 | 数据来源：GitHub API**

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>



# IronClaw 项目日报 — 2026-09-06

---

## 1. 今日速览

过去 24 小时内 IronClaw 共收到 3 条 Issue 更新与 5 条 PR 更新，其中 2 个 Issue 与 2 个 PR 已关闭/合并，其余处于进行中。项目无新版本发布，整体活跃度处于中等偏稳水平，近期工作重心集中在 **Telegram 频道配对与连接体验** 的修复与优化上。核心贡献者 `thisisjoshford` 连续提交了多项关键修复，表明维护团队正在主动治理历史 UX 缺陷。

---

## 2. 版本发布

今日无新版本（Release）发布。

---

## 3. 项目进展

**已关闭/合并的 PR（2 条）：**

- **[PR #8073](https://github.com/nearai/ironclaw/pull/8073)** — `fix(device-link): say "not configured by administrator" instead of blaming the user's account`  
  将 Telegram 个人账号绑定失败时的错误提示从归咎于用户改为明确提示“管理员未配置”，大幅降低终端用户的困惑感。

- **[PR #8054](https://github.com/nearai/ironclaw/pull/8054)** — `fix(assistant): check pairing before command admission so first contact gets the connect notice`  
  修复了未配对用户在 Telegram 首次发送 `/start` 时误收到命令清单而非配对引导的问题，使产品工作流符合预期。

**进展评估：** 今日修复均针对 Telegram 入口体验的关键断点，两个已关闭的 Issue 直接源于用户反馈，说明项目正以“体验驱动”的方式推进，整体向前迈进了一步，但未触及架构或新功能层。

---

## 4. 社区热点

**当前开放且受关注的 Issue/PR：**

- **[Issue #8074](https://github.com/nearai/ironclaw/issues/8074)** — `Paired user's rejected action in a not-connected shared channel gets the pairing notice copy instead of channel-not-connected copy`  
  配对用户在不相连的共享频道中被拒绝操作时，系统错误地展示了配对提示而非“频道未连接”提示。该 Issue 由同一作者 `thisisjoshford` 提交，与今日已合并的 #8054 属于同一类 UX 归因缺陷，社区对此类错误消息的一致性问题反馈较为集中。

- **[PR #8075](https://github.com/nearai/ironclaw/pull/8075)** — `feat: make the embedded Pi sandbox loop the startup default`  
  将嵌入式 Pi 沙箱设为默认启动配置，针对 benchmark 场景优化。该 PR 依赖 #7908，尚未合并，但已获得 `core` 贡献者标签，预计进入近期路线图。

**背后诉求分析：** 用户对 Telegram 集成层的错误提示语义高度敏感，尤其是“谁该负责”（管理员 vs 用户）与“什么状态”（未配对 vs 频道未连接）的区分。此类反馈表明项目在渠道接入的精细化体验上仍有较多治理空间。

---

## 5. Bug 与稳定性

| 严重程度 | Issue / PR | 描述 | 状态 | Fix PR |
|---------|-----------|------|------|--------|
| 中 | [Issue #8074](https://github.com/nearai/ironclaw/issues/8074) | 配对用户在不相连频道中被拒绝时显示错误的提示文案 | OPEN | — |
| 低 | [Issue #7956](https://github.com/nearai/ironclaw/issues/7956) | 未配对用户 Telegram `/start` 返回命令清单而非配对引导 | CLOSED | [PR #8054](https://github.com/nearai/ironclaw/pull/8054) |
| 低 | [Issue #7955](https://github.com/nearai/ironclaw/issues/7955) | 管理员未配置 Telegram API 时个人账号绑定显示通用错误 | CLOSED | [PR #8073](https://github.com/nearai/ironclaw/pull/8073) |

**稳定性评估：** 今日关闭的两个低危 Bug 均为体验类问题，无崩溃或回归风险；剩余开放 Issue #8074 属于同类文案归因缺陷，建议尽快安排修复。

---

## 6. 功能请求与路线图信号

- **[PR #8075](https://github.com/nearai/ironclaw/pull/8075)** — 将 Pi sandbox 设为默认启动项，针对性能 benchmark 场景。若合并，意味着项目正将特定部署配置推向默认，可能影响未使用 sandbox 的用户。
- **[PR #8072](https://github.com/nearai/ironclaw/pull/8072)** — 在 Telegram 激活时通过 Bot API 注册命令菜单（`setMyCommands`），提升用户在频道内可发现的操作入口。该 PR 属于体验增强，风险低，较可能被纳入下一版本。
- **[PR #7988](https://github.com/nearai/ironclaw/pull/7988)** — 刷新代码库知识图谱快照，属于 CI/基础设施维护，不直接面向用户但有助于代码导航与自动化。

**路线图判断：** 近期更新集中在渠道体验（Telegram）与默认配置优化，暂未出现重大新功能请求。若 #8075 与 #8072 合并，下一版本可能围绕“默认启动配置”与“频道级命令可见性”展开。

---

## 7. 用户反馈摘要

- **痛点 1：错误提示归因不清**  
  用户多次遇到系统错误提示将责任推给用户（如“账户绑定失败”），而实际原因是管理员未配置 API 凭据。已合并的 #8073 直接回应了这一诉求。

- **痛点 2：首次接触流程断裂**  
  未配对用户在 Telegram 首次发送 `/start` 时收到的是命令清单而非配对引导，导致用户不知道下一步该做什么。#8054 修复了该断点。

- **满意度信号：** 维护者对同类问题（#7955、#7956、#8074）采取了连贯的修复策略，显示项目对渠道 UX 问题的响应较为系统。

---

## 8. 待处理积压

| 类型 | ID | 标题 | 创建时间 | 关注建议 |
|-----|----|------|--------|--------|
| Issue | [#8074](https://github.com/nearai/ironclaw/issues/8074) | 配对用户在未连接频道中操作时显示错误文案 | 2026-09-04 | 建议优先修复，与已关闭的 #7956/#7955 属同一类问题 |
| PR | [#8075](https://github.com/nearai/ironclaw/pull/8075) | 将 Pi sandbox 设为默认启动配置 | 2026-09-05 | 需等待基础 PR #7908 合并，可提前准备 review |
| PR | [#8072](https://github.com/nearai/ironclaw/pull/8072) | Telegram 激活时注册命令菜单 | 2026-09-04 | 低风险体验增强，建议纳入下一版本 |

**整体健康度：** 项目近期 Bug 修复率较高（2/3 已关闭），PR 合并节奏稳定，但存在同类 UX 问题的重复发生，建议在代码审查环节增加“错误消息归因一致性”的检查点。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



# LobsterAI 项目动态日报
**日期：2026-09-06 | 数据周期：过去 24 小时**

---

## 1. 今日速览

LobsterAI 昨日社区活跃度较低，过去 24 小时内无新 Issue 提交、无新版本发布、无 PR 合并。项目共有 2 条开放 PR（#1069、#1070）处于待审查状态，但均已标记为 **stale**（最后更新 2026-09-05），暂无维护者反馈。整体判断：**项目处于低活跃期**，核心功能重构与 MCP 控制功能已进入待合并队列，但推进节奏偏缓。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日无 PR 合并，但有以下 2 条重要 PR 仍在待处理队列中：

### PR #1069 — 重构：拆分 CoworkSessionDetail 单文件
- **作者**：stone333
- **链接**：[netease-youdao/LobsterAI#1069](https://github.com/netease-youdao/LobsterAI/pull/1069)
- **状态**：OPEN / stale
- **进展评估**：该 PR 针对 `CoworkSessionDetail.tsx`（2100+ 行）进行职责拆分，新增类型定义文件，目标是提升可维护性与渲染性能（解决流式输出时无关联历史消息触发不必要重渲染的问题）。PR 已就绪待合并，对下一版本稳定性有直接贡献。

### PR #1070 — feat(cowork): 支持 per-session MCP 开关控制
- **作者**：vdorchan
- **链接**：[netease-youdao/LobsterAI#1070](https://github.com/netease-youdao/LobsterAI/pull/1070)
- **状态**：OPEN / stale
- **进展评估**：新增会话级 MCP Server 独立开关功能，支持按会话启用/禁用特定 MCP，状态持久化至 DB。该功能填补了当前 MCP 仅支持全局开关的短板，是 OpenClaw 生态的重要能力扩展。

> **整体推进判断**：两项关键改进已进入完成态等待合入，项目正从"功能堆积"向"架构优化 + 精细化控制"演进。

---

## 4. 社区热点

今日无新 Issue 或 PR 引发讨论热点。

两条待合并 PR 目前评论数为 undefined、点赞数为 0，说明：
- 社区关注度较低
- 或审查流程尚未进入公开讨论阶段

**潜在关注点**：
- PR #1070 的 per-session MCP 控制在多用户场景下价值较高，建议维护者优先跟进。
- PR #1069 涉及核心渲染性能优化，合并后可降低后续 Bug 产生概率。

---

## 5. Bug 与稳定性

**今日无新 Bug 报告。**

---

## 6. 功能请求与路线图信号

| 信号来源 | 诉求内容 | 纳入下一版本可能性 |
|---|---|---|
| PR #1070 | 会话级 MCP Server 独立控制 | ⭐⭐⭐⭐ 高（已完成开发，待合并） |
| PR #1069 | CoworkSessionDetail 重构与性能优化 | ⭐⭐⭐⭐ 高（已完成开发，待合并） |

**判断依据**：两条 PR 均标注 `[feat]` 或重构性质，且开发完成时间早（2026-03-30），长期处于 stale 状态表明维护侧响应滞后。若近期获得维护者 Review，有望随下一小版本同步合入。

---

## 7. 用户反馈摘要

今日无新 Issue，无用户反馈可提炼。

---

## 8. 待处理积压

以下 PR 已开放超过 5 个月，持续处于 stale 状态，建议维护者重点关注：

| PR | 标题 | 创建时间 | 最后更新 | 风险等级 |
|---|---|---|---|---|
| [#1069](https://github.com/netease-youdao/LobsterAI/pull/1069) | 重构：拆分 CoworkSessionDetail 单文件 | 2026-03-30 | 2026-09-05 | 🟡 中（性能/可维护性） |
| [#1070](https://github.com/netease-youdao/LobsterAI/pull/1070) | 支持 per-session MCP 开关控制 | 2026-03-30 | 2026-09-05 | 🟡 中（核心功能缺口） |

> **维护建议**：两条 PR 均已通过开发阶段，当前阻塞点可能在 Code Review 环节。建议维护团队安排专人跟进，避免技术债务持续累积。

---

**报告生成时间**：2026-09-06  
**数据来源**：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI) GitHub API

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>



# Moltis 项目日报 | 2026-09-06

---

## 1. 今日速览

Moltis 今日整体活跃度较低，过去24小时内仅收到 **1 条 Issue**，**0 条 PR**，**无新版本发布**。社区暂无紧急 Bug 报告或关键功能推进，项目处于平稳维护期。新增 Issue #1259 聚焦于推理层级的持久化配置需求，反映出用户对个性化工作流的关注，但该请求尚无配套 PR 或维护者回应。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日无 PR 合并或 Issue 关闭，项目整体无实质性功能推进。当前开发节奏较缓，需关注维护者响应效率及社区贡献参与度。

---

## 4. 社区热点

| Issue | 标签 | 创建时间 | 评论/点赞 | 链接 |
|-------|------|----------|-----------|------|
| [#1259](https://github.com/moltis-org/moltis/issues/1259) | enhancement, Feature | 2026-09-05 | 0 / 0 | [Issue #1259](https://github.com/moltis-org/moltis/issues/1259) |

**诉求分析**：用户希望支持配置默认推理/思考级别并持久化到会话间，本质上是希望减少重复设置操作，提升长期使用体验。该需求属于工作流优化类功能，暂无技术争议，适合纳入路线图评估。

---

## 5. Bug 与稳定性

今日无 Bug 报告，无崩溃或回归问题。

---

## 6. 功能请求与路线图信号

| 请求 | 类型 | 维护者响应 | 纳入可能性评估 | 链接 |
|------|------|------------|----------------|------|
| #1259 - 可配置默认推理/思考级别（跨会话持久化） | 功能增强 | 无 | 中等——需求明确但非核心路径，需评估实现成本 | [Issue #1259](https://github.com/moltis-org/moltis/issues/1259) |

**判断依据**：该请求已主动排查重复项，符合 Enhancement 标签规范，但暂无开发者跟进。建议维护者在 README 或 Roadmap 中对此类 UX 优化请求给出优先级说明。

---

## 7. 用户反馈摘要

- **痛点**：当前推理级别设置无法跨会话保持，每次启动需重新配置，影响使用连贯性。
- **场景**：长期使用场景下，用户对个性化偏好（如固定思考深度）有稳定需求。
- **满意度**：Issue 描述规范，作者主动完成 Preflight Checklist，反馈质量较高。

---

## 8. 待处理积压

| Issue | 状态 | 创建时间 | 距今日 | 链接 |
|-------|------|----------|--------|------|
| #1259 | OPEN | 2026-09-05 | 1 天 | [Issue #1259](https://github.com/moltis-org/moltis/issues/1259) |

> ⚠️ 当前 Issue 积压较少，但需关注维护者响应时效。若 #1259 长期未获回应，可能影响社区贡献意愿。建议维护者定期浏览 Enhancement 类 Issue 并给予初步反馈（如确认需求、标记预计处理时间）。

---

**项目健康度评估**：🟡 平稳期  
- 活跃度：低  
- 维护者响应：待观察  
- 代码贡献：无新增  
- 社区诉求：合理且集中

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>



# CoPaw 项目日报 | 2026-09-06

## 1. 今日速览

今日 CoPaw 项目保持中等活跃度：过去24小时内新增 Issues 10条（活跃7条、已关闭3条），PR 4条全部处于待合并状态，暂无新版本发布。社区关注点集中在**多租户 Hub 功能规划**（Issue #7318 累计23条评论）和**多个并发提交的关键 Bug 修复**。项目整体健康度良好，问题响应及时，但核心架构层面的异常处理和技能版本管理仍需加强。

---

## 2. 版本发布

> 无新版本发布。

---

## 3. 项目进展

今日无 PR 合并，但有4个重要 PR 处于评审/待合并阶段，持续推进以下方向：

| PR | 类型 | 概述 |
|---|---|---|
| [#7509](https://github.com/agentscope-ai/QwenPaw/pull/7509) | feat(skill) | **Make Skill v2**：引入审批驱动的草稿-发布工作流，支持结构化 Skill 计划验证后再创建私有草稿，提升技能复用规范性。 |
| [#7569](https://github.com/agentscope-ai/QwenPaw/pull/7569) | feat(modes) | **Advisor Mode**：新增顾问模式，将任务拆分为强模型（顾问）+ 廉价模型（执行者）两阶段协作，预计降低推理成本同时保留质量。 |
| [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) | feat(mcp) | **MCP 工具调用超时配置**：为 MCP 客户端添加可配置的 `tool_call_timeout`（默认300s），解决长耗时工具调用被截断的问题。 |
| [#7486](https://github.com/agentscope-ai/QwenPaw/pull/7486) | feat(creator) | **Creator 应用插件 1.1.2**：包含运行时通知总线、异步委托、多时间线 A/B 对比、T2V/I2V/S2V 调度、专业媒体提示词等能力。 |

> 项目整体向前推进：多租户生态规划、推理成本优化、MCP 可观测性、创作者工具链四个方向均有实质性进展。

---

## 4. 社区热点

### 🔥 Issue #7318 — QwenPaw Hub 多租户版功能规划
**[链接](https://github.com/agentscope-ai/QwenPaw/issues/7318)** | 评论 23 | 👍 3

- **热度原因**：这是社区长期呼声最高的需求之一（关联 #2324 多用户访问 + 管理员技能管理），直接关乎 QwenPaw 从个人助手向团队协作工具的演进。
- **核心诉求**：用户希望明确 2.2.0 版本的多租户功能边界，包括：权限模型、技能共享机制、多工作区管理、计费/配额等。
- **信号判断**：该 Issue 将持续成为下一阶段路线图讨论的中心，建议维护者尽快输出功能优先级列表。

---

## 5. Bug 与稳定性

今日共报告 **4 个 Bug**，按严重程度排列：

| 级别 | Issue | 描述 | Fix PR |
|---|---|---|---|
| 🔴 高 | [#7576](https://github.com/agentscope-ai/QwenPaw/issues/7576) | `RetryChatModel` 硬编码 32768 context_size fallback，导致所有模型在 >31130 tokens 时触发 CONTEXT_UNFIT 错误（影响 v2.1.0–v2.2.0 全版本） | 无 |
| 🔴 高 | [#7474](https://github.com/agentscope-ai/QwenPaw/issues/7474) | PR #7337 迁移 `max_tokens` → `max_output_length` 后，自定义提供商模型加载失败 | 无 |
| 🟡 中 | [#7574](https://github.com/agentscope-ai/QwenPaw/issues/7574) | img-gen skill 的 `openai_images.py` 请求体遗漏 `model` 字段，导致 HTTP 503 回退到 dall-e-2 | ✅ 已关闭（2026-09-05） |
| 🟡 中 | [#7575](https://github.com/agentscope-ai/QwenPaw/issues/7575) | img-gen skill `edit()` 无条件发送 `response_format`，导致 gpt-image-2 编辑接口返回 HTTP 400 | ✅ 已关闭（2026-09-05） |
| 🟠 中 | [#7572](https://github.com/agentscope-ai/QwenPaw/issues/7572) | 工具派发层 `_coordinator.py::_drain()` 用 `except Exception` 静默吞掉异常栈，故障无法定位（v2.2.0） | 无 |

> **稳定性评估**：两个 img-gen 相关 Bug 当日即被关闭，说明修复流程畅通。但 **#7576**（context_size 硬编码）和 **#7572**（异常吞没）属于架构级问题，涉及底层 provider 和 tool_calls 模块，需优先处理。

---

## 6. 功能请求与路线图信号

| Issue | 需求概述 | 路线图匹配度 |
|---|---|---|
| [#7557](https://github.com/agentscope-ai/QwenPaw/issues/7557) | **Skill 版本与依赖元数据**：当前 skill 为纯目录结构，多 agent 部署时无法追踪版本差异和更新来源 | ⭐⭐⭐ 高 — 多租户 Hub（#7318）的前置能力，建议纳入 2.2.0 或 2.3.0 |
| [#7573](https://github.com/agentscope-ai/QwenPaw/issues/7573) | **Web UI 编辑最后一条消息 & 回退按钮**：用户期望修正历史 prompt 或回滚对话轮次，无需重启会话 | ⭐⭐ 中 — 提升 UX 的实用功能，但涉及会话状态管理改造 |
| [#7570](https://github.com/agentscope-ai/QwenPaw/issues/7570) | **飞书流式卡片自动折叠思考过程**：GLM-5.x 等强制思考模型的思考文本过长，占用屏幕空间 | ⭐⭐ 中 — 特定集成场景优化，社区已验证本地方案可行 |

---

## 7. 用户反馈摘要

- **核心痛点 — 记忆/指令遵循不稳定**（[#7571](https://github.com/agentscope-ai/QwenPaw/issues/7571)）：用户反映 Agent 反复遗忘已设定的行为约束（如 TODO 文件路径、代码开发路径），实际排查后发现是**自动部署脚本覆盖了运行时路径**，而非模型本身的问题。反映出用户对"谁在执行、执行什么"的可观测性需求强烈。
- **协作场景刚需**（[#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318)、[#7557](https://github.com/agentscope-ai/QwenPaw/issues/7557)）：多 agent  fleet 部署下，skill 的版本追踪、更新传播、权限隔离是真实存在的工程挑战，社区期待官方提供结构化解决方案。
- **调试体验差**（[#7572](https://github.com/agentscope-ai/QwenPaw/issues/7572)）：异常栈被静默吞没导致故障定位困难，用户明确要求保留完整日志上下文。

---

## 8. 待处理积压

| Issue/PR | 状态 | 风险提醒 |
|---|---|---|
| [#7576](https://github.com/agentscope-ai/QwenPaw/issues/7576) — RetryChatModel context_size 硬编码 | Open, 无 fix | 🔴 影响所有使用超过 31k tokens 场景的用户，建议维护者优先介入 |
| [#7474](https://github.com/agentscope-ai/QwenPaw/issues/7474) — 自定义提供商加载失败 | Closed (2026-09-05) | 已通过关闭确认，但需核实是否有对应 PR 合入 main |
| [#7572](https://github.com/agentscope-ai/QwenPaw/issues/7572) — 工具派发层异常吞没 | Open, 无 fix | 🟠 架构级可观测性问题，影响生产环境故障排查效率 |
| [#7557](https://github.com/agentscope-ai/QwenPaw/issues/7557) — Skill 版本元数据 | Open, 无 fix | 多租户场景的核心依赖，建议纳入 2.2.0 路线图 |
| [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) — MCP tool_call_timeout | Under Review (创建 2026-08-10) | 已评审近一个月，建议尽快完成 Review 以推进合并 |

---

**项目健康度总结**：CoPaw 近期在协作功能和创作工具方向投入明显，社区参与度较高。Bug 修复响应迅速（2/4 当日关闭），但核心模块的架构缺陷（context_size、异常处理）尚未得到根治，建议维护者在下一个迭代周期集中处理。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



# ZeroClaw 项目日报 — 2026-09-06

---

## 1. 今日速览

ZeroClaw 昨日发布 v0.8.5，这是该项目迄今为止规模最大的版本之一，涵盖 454 个提交、73 位贡献者，聚焦于安全加固、连接性扩展与操作者体验优化。过去 24 小时内 Issues 活动极高（42 条更新），其中 34 条为活跃讨论，主要围绕运行时架构 RFC 展开；PR 更新 50 条，10 条已合并，40 条待审，整体开发节奏强劲。架构治理与沙箱策略相关 Issue 仍保持高热度（#6808、#6996 均达 24 条评论），表明社区对系统安全性与可维护性高度关注。

---

## 2. 版本发布

### 🚀 v0.8.5 — 安全·连接性·操作者体验更新

| 维度 | 详情 |
|------|------|
| **提交量** | 454 commits |
| **贡献者** | 73 人 |
| **核心新增** | ZeroRelay、ZeroRouter |
| **能力扩展** | 直播聊天功能增强、Provider 支持范围扩大 |
| **安全加固** | Plugin 边界、Sandbox、Webhook、凭证、文件访问隔离 |

**迁移注意事项：**
- `ZeroRelay` 与 `ZeroRouter` 引入新的网关路由语义，升级前建议检查自定义路由配置是否与新架构兼容。
- Sandbox 策略收紧，依赖 Bubblewrap/Landlock/Seatbelt 的部署需验证 `allowed_roots` 与权限配置未受影响。

---

## 3. 项目进展

昨日 **10 条 PR 已合并/关闭**，以下为重点推进项：

| PR | 标题 | 进展说明 |
|----|------|----------|
| [#10088](https://github.com/zeroclaw-labs/zeroclaw/issues/10088) | fix(multimodal): preserve attached images after source removal | 修复图片附件持久化问题，避免源文件移除后标记失效，提升多模态会话稳定性 |
| [#10064](https://github.com/zeroclaw-labs/zeroclaw/issues/10064) | fix(channels/telegram): self-destruct approval cards after operator tap | Telegram 审批卡片优化：点击后自动销毁，改善交互流畅度 |
| [#10435](https://github.com/zeroclaw-labs/zeroclaw/issues/10435) | fix(providers): preserve model context when anchoring Gemini requests | Gemini provider 上下文锚定修复，保障模型请求一致性 |
| [#10048](https://github.com/zeroclaw-labs/zeroclaw/issues/10048) | chore: validate Rust 1.98.0 local-CI, demo, and manual release/cross-platform build lanes | Rust 工具链升级至 1.98.0 验证通过，CI 基础栈更新 |
| [#9593](https://github.com/zeroclaw-labs/zeroclaw/issues/9593) | refactor(runtime): make TaskRecord the single lifecycle owner for background delegation | 后台委托生命周期重构完成，统一状态所有权 |

**整体推进评估：** 今日工作以稳定性修复与基础设施治理为主，配合 v0.8.5 发布，项目处于"大版本稳定巩固期"，多项积压 Bug 得到清理。

---

## 4. 社区热点

### 🔥 高讨论 Issue（按评论数排序）

| Issue | 主题 | 评论数 | 分析 |
|-------|------|--------|------|
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | RFC: Runtime-owned conversation sessions and transport surface adapters | 33 | 核心会话生命周期架构讨论，涉及会话所有权与传输层适配器解耦，修订至第 5 版，社区高度关注运行时架构演进方向 |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | RFC: Unified file and attachment architecture for conversation surfaces | 26 | 统一文件/附件架构设计，修订至第 10 版，解决多模态内容跨会话管理痛点 |
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | RFC: Work Lanes, Board Automation, and Label Cleanup | 24 | 治理流程 RFC，旨在减少维护者手动分类负担，已从 p2 推进至 Accepted 阶段 |
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) | RFC: Granular sandbox policy — filesystem restrictions | 24 | 沙箱文件系统权限细化，针对 application-layer 与 OS-level 双重策略漂移问题，风险评级 High |

**热点诉求分析：** 社区核心关切集中在 **运行时架构解耦**（#9487/#9488）与 **安全边界精细化**（#6996），同时治理流程优化（#6808）获得广泛认同。这些 RFC 正在塑造 ZeroClaw 下一阶段的技术路线。

---

## 5. Bug 与稳定性

### 严重级别按优先级排列

| 级别 | Issue | 描述 | 修复状态 |
|------|-------|------|----------|
| **S1 - 工作流阻塞** | [#10536](https://github.com/zeroclaw-labs/zeroclaw/issues/10536) | macOS Seatbelt 忽略配置的 `allowed_roots`，Shell 命令仍报 "Operation not permitted" | 🔴 无 Fix PR |
| **S2 - 降级行为** | [#10532](https://github.com/zeroclaw-labs/zeroclaw/issues/10532) | 降级配置修复建议使用不同可执行文件，导致命令失败 | ✅ PR [#10630](https://github.com/zeroclaw-labs/zeroclaw/pull/10630) 已提出 |
| **S2** | [#10625](https://github.com/zeroclaw-labs/zeroclaw/issues/10625) | 非视觉模型对话中 `[media attachment]` 占位符直接暴露给用户 | 🔴 无 Fix PR |
| **S2** | [#10045](https://github.com/zeroclaw-labs/zeroclaw/issues/10045) | 持久化图片标记保留临时源路径，重复触发警告 | ✅ 已关闭（PR #10088 解决） |
| **S3 - 轻微问题** | [#10585](https://github.com/zeroclaw-labs/zeroclaw/issues/10585) | 日志 sink 回归测试并行竞态，导致 CI 不稳定 | 🔴 无 Fix PR |

**稳定性评估：** 当前 S1 级 macOS 沙箱问题需紧急关注，v0.8.5 安全加固可能引入了 Seatbelt 配置回退。另有 3 个 S2 级问题待修复。

---

## 6. 功能请求与路线图信号

| 请求 | Issue | 关联 PR | 纳入可能性 |
|------|-------|---------|-----------|
| Per-field cron schedule input | [#10641](https://github.com/zeroclaw-labs/zeroclaw/issues/10641) | 暂无 | ⭐⭐ 中——Web UI 易用性改进，符合近期 Web 端优化方向 |
| TTS 纯文本输出去掉 Markdown/Emoji | [#10626](https://github.com/zeroclaw-labs/zeroclaw/issues/10626) | 暂无 | ⭐⭐⭐ 高——直接影响用户体验，属于低垂果实 |
| Anthropic extended-thinking 透传 OpenAI compatible provider | [#10530](https://github.com/zeroclaw-labs/zeroclaw/issues/10530) | 暂无 | ⭐⭐⭐ 高——v0.8.5 已扩展 Provider 能力，此需求与之契合 |
| Append-only session event history | [#10526](https://github.com/zeroclaw-labs/zeroclaw/issues/10526) | RFC 草案已提交 | ⭐⭐⭐ 高——架构级变更，可能与 #9487 协同推进 |
| Composable WASM plugin runtime | [#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076) | RFC 草案已提交 | ⭐⭐ 中——WASM 插件生态建设，需权衡实现复杂度 |
| Verbatim channel send via gateway | [#10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050) | RFC 草案已提交 | ⭐⭐ 中——网关功能扩展，适合后续版本迭代 |

---

## 7. 用户反馈摘要

**突出痛点：**
- **配置文件一致性感知差：** 用户从不同路径启动 daemon 时，降级修复命令可能指向错误二进制（#10532），导致运维困惑。
- **非视觉模型媒体处理粗糙：** 当对话历史包含媒体标记而模型不支持视觉时，`[media attachment]` 字面量直接透传给终端用户（#10625），严重影响对话体验。
- **macOS 沙箱权限回退：** Seatbelt 忽略用户配置的 `allowed_roots`，导致 Shell 工具在已授权路径上仍被拦截（#10536），工作流完全受阻。

**积极反馈：**
- v0.8.5 安全加固方向获得认可，社区对 ZeroRelay/ZeroRouter 等新抽象表示期待。
- Cron UI 的 per-field 输入需求反映用户希望降低高级配置的学习门槛。

**使用场景洞察：**
- Telegram/Mattermost 等 IM 渠道的审批交互体验成为重点打磨对象（#10064 已修复）。
- TTS 场景下 Markdown/Emoji 被逐字朗读，暴露多模态管道中格式清理缺失。

---

## 8. 待处理积压

| Issue | 优先级 | 状态 | 建议 |
|-------|--------|------|------|
| [#10536](https://github.com/zeroclaw-labs/zeroclaw/issues/10536) | P1 | Open，无 Fix PR | ⚠️ 紧急：S1 级 macOS 沙箱回归，需在下一补丁版本修复 |
| [#10625](https://github.com/zeroclaw-labs/zeroclaw/issues/10625) | P2 | Open，无 Fix PR | 建议优先处理：非视觉模型的媒体标记降级逻辑需重构 |
| [#10530](https://github.com/zeroclaw-labs/zeroclaw/issues/10530) | P2 | Open，无 Fix PR | 功能增强：Anthropic extended-thinking 透传，可与 v0.8.5 Provider 扩展协同 |
| [#10533](https://github.com/zeroclaw-labs/zeroclaw/issues/10533) | P1 | In-progress | `custom.*` provider 路由拒绝问题，已有 maintainer 跟进中 |
| [#10534](https://github.com/zeroclaw-labs/zeroclaw/issues/10534) | P2 | Open，无 Fix PR | Bounded delegate 静默剥离 delegate 工具，与配置语义矛盾，需排查 |

**维护者提醒：** #10536（macOS Seatbelt）和 #10533（router config）均为 P1 级问题，前者无修复 PR 且影响工作流，建议纳入紧急修复队列。

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*