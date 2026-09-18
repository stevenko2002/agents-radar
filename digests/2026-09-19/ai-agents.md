# OpenClaw 生态日报 2026-09-19

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-18 22:15 UTC

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



# OpenClaw 项目动态日报 — 2026-09-19

---

## 1. 今日速览

OpenClaw 今日处于**高强度开发与严重稳定性压力并存**的状态。过去 24 小时内，Issues 与 PR 各产生 500 条更新（Issues 新开/活跃 363 条、关闭 137 条；PR 待合并 282 条、合并/关闭 218 条），但**无新版本发布**，表明大量修复仍在合并流程中。核心矛盾突出：**网关内存泄漏、事件循环饥饿、子代理消息丢失**等 P0/P1 级问题持续报告，同时维护者团队正推进 WebUI、远程工作区、Agent 后端重构等多项中大型功能 PR，项目处于"救火与建设并行"的阶段。

---

## 2. 版本发布

**无新版本发布。** 截至日报时点，GitHub Releases 为空。社区反馈的多个 P0 问题（如 #151467 自升级死锁、#149538 网关假死）均指向 2026.9.x 系列，暗示下一个稳定版本将集中修复这些回归问题。

---

## 3. 项目进展

今日有 30+ 条高评论 PR 处于活跃状态，按方向分组如下：

### 🔧 网关与系统稳定性
- **[#151691](https://github.com/openclaw/openclaw/pull/151691)**（XL, P1）：统一管理 Gateway 服务定义漂移修复，将原本的 umbrella PR 拆分为独立可评审的子 PR，标志着服务定义可靠性系列的收尾。
- **[#152190](https://github.com/openclaw/openclaw/pull/152190)**（S, P2）：修复符号链接状态目录下的 SQLite worker 超时，堵住 #152050 的剩余漏洞。
- **[#151157](https://github.com/openclaw/openclaw/pull/151157)** / **[#151245](https://github.com/openclaw/openclaw/pull/151245)**：Windows 平台的计划任务 owner 保留与插件根路径别名对齐，直接回应了 #143757（Windows 无人值守启动失败）等 Windows 特有问题。

### 🌐 WebUI 体验
- **[#152194](https://github.com/openclaw/openclaw/pull/152194)**（M, P2）：修复人员选择器选择丢失、Home/End 导航、搜索无重试等问题。
- **[#152179](https://github.com/openclaw/openclaw/pull/152179)**（L, P2）：修复含空格/emoji/百分号的文件链接在聊天中导航异常。
- **[#152198](https://github.com/openclaw/openclaw/pull/152198)**（XS, P3）：修复 board layout 测试竞态。
- 上述 PR 均标注 `ready for maintainer look`，属于 WebUI 稳定性批次（ umbrella #149361）的落地执行。

### 🤖 Agent 后端与子代理
- **[#152181](https://github.com/openclaw/openclaw/pull/152181)**（XL, P1）：将 Codex 适配器中的 session/attempt 机制抽为共享核心，为其他原生 Agent 后端复用，属于**架构演进型 PR**。
- **[#126924](https://github.com/openclaw/openclaw/pull/126924)**（XL, P1）：区分"子代理等待超时"与"子代理已死亡"，修复父代理被错误宣布为超时的问题（90 分钟运行被误报）。
- **[#145338](https://github.com/openclaw/openclaw/pull/145338)**（M, P2）：保留活跃响应期间收到的引用回复，附带 Telegram 端到端验证。

### 📁 远程工作区与文件传输
- **[#150946](https://github.com/openclaw/openclaw/pull/150946)** / **[#150584](https://github.com/openclaw/openclaw/pull/150584)** / **[#150857](https://github.com/openclaw/openclaw/pull/150857)** / **[#150734](https://github.com/openclaw/openclaw/pull/150734)**：这四条 PR 构成"Gateway + Harness 存储拆分"系列，目标是让 Gateway 从远程工作区读取 Memory/Skills/Agent 文档并在配对节点间传输附件。目前为 draft 状态，依赖关系明确，尚未合并。

### 🧪 测试与基础设施
- **[#152143](https://github.com/openclaw/openclaw/pull/152143)** / **[#152076](https://github.com/openclaw/openclaw/pull/152076)**：修复 Bun 环境下测试 fixture 加载与 CLI preload 问题。
- **[#152192](https://github.com/openclaw/openclaw/pull/152192)**：跳过单 agent 配置的冗余目录检查，加速启动。

### 🚢 版本线准备
- **[#151560](https://github.com/openclaw/openclaw/pull/151560)**：准备 extended-stable `2026.7.34` 候选版，从 `v2026.7.33` 切出，补入 P0 安装诊断修复与 provider 模型更新。

---

## 4. 社区热点

今日评论数最高的 Issue/PR 反映了社区最强烈的三类诉求：

### 🔴 网关级致命缺陷（评论最密集）
| 排名 | Issue | 评论 | 核心诉求 |
|------|-------|------|----------|
| 1 | **[#97616](https://github.com/openclaw/openclaw/issues/97616)** | 31 | Hook/tool 子进程泄漏导致 zombie 累积与运行时退化 |
| 2 | **[#91588](https://github.com/openclaw/openclaw/issues/91588)** | 26 | Gateway 内存泄漏：RSS 从 350MB 涨至 15.5GB，触发 OOM |
| 3 | **[#149538](https://github.com/openclaw/openclaw/issues/149538)** | 18 | 632 agent fleet 中 Gateway 达到 ready 后无响应，事件循环饥饿 |
| 4 | **[#148529](https://github.com/openclaw/openclaw/issues/148529)** | 10 | 同上 fleet，启动到 ready 从 2s 退化至 ~12 分钟 |

这四个问题均指向**网关核心运行时**，且都在 2026.9.x 版本上复现，属于回归问题。社区反馈非常具体（提供 RSS 曲线、启动耗时分解、进程树），说明重度用户已将 OpenClaw 部署于生产环境。

### 🟠 子代理消息传递（系统性缺陷）
- **[#143334](https://github.com/openclaw/openclaw/issues/143334)**（8 评论）：子代理完成但交付丢失，请求方卡在 settle-yield。
- **[#138632](https://github.com/openclaw/openclaw/issues/138632)**（6 评论）：顶层 requester settle wake 丢弃已完成子代理结果。
- **[#121187](https://github.com/openclaw/openclaw/issues/121187)**（7 评论）：NO_REPLY 被当作缺失输出重试。
- **[#118018](https://github.com/openclaw/openclaw/issues/118018)**（8 评论）：过期子代理完成被投递到已替换的 requester 生命周期。

这一系列问题构成**子代理完成交付的系统性缺陷**，已在多个 PR 中部分修复（#126924、#152168），但根治仍需时日。

### 🟡 WebUI 与平台体验
- **[#149361](https://github.com/openclaw/openclaw/issues/149361)**（22 评论）：WebUI 性能与稳定性 umbrella，社区期待小修复批次落地。
- **[#151962](https://github.com/openclaw/openclaw/issues/151962)**（5 评论）：WeChat 桥接会话中出现"幽灵用户消息"，内部运行时字符串被当作用户 prompt 提交且未持久化到 transcript_events。
- **[#151467](https://github.com/openclaw/openclaw/issues/151467)**（5 评论）：Oracle Cloud Linux 上 v6.33→v9.4 自升级死锁与回滚 cron 失败。

---

## 5. Bug 与稳定性

按严重程度排列（P0 > P1 > P2），标注 fix PR 状态：

| 严重度 | Issue | 状态 | 说明 |
|--------|-------|------|------|
| **P0** | **[#149538](https://github.com/openclaw/openclaw/issues/149538)** — Gateway ready 后无响应，事件循环饥饿 | OPEN，无 fix PR | 632 agent fleet 复现，RSS 同时暴涨 |
| **P0** | **[#143524](https://github.com/openclaw/openclaw/issues/143524)** — SQLite WAL 无限增长至 1.4–2.8GB | OPEN，无 fix PR | Windows 2026.9.2/9.3，checkpoint 失效 |
| **P0** | **[#150201](https://github.com/openclaw/openclaw/issues/150201)** — Windows 更新快照失败，SQLite 检查超时 | CLOSED | 已确认修复 |
| **P0** | **[#151467](https://github.com/openclaw/openclaw/issues/151467)** — 自升级死锁 + 回滚 cron 失败 | OPEN，无 fix PR | Oracle Cloud Linux aarch64 |
| **P0** | **[#142586](https://github.com/openclaw/openclaw/issues/142586)** — Doctor 检测到 orphan 外键但无恢复路径 | CLOSED | 已确认 |
| **P1** | **[#91588](https://github.com/openclaw/openclaw/issues/91588)** — Gateway 内存泄漏 350MB→15.5GB | OPEN，无 fix PR | OOM 循环重启 |
| **P1** | **[#97616](https://github.com/openclaw/openclaw/issues/97616)** — 子进程 zombie 泄漏 | OPEN，无 fix PR | hooks/bash/codex 进程累积 |
| **P1** | **[#148529](https://github.com/openclaw/openclaw/issues/148529)** — 启动延迟 2s→12min | OPEN，无 fix PR | 与 #149538 同源 |
| **P1** | **[#134993](https://github.com/openclaw/openclaw/issues/134993)** — CPU 占满（filesystem discovery busy loop） | OPEN，无 fix PR | 2026.8.1 回归，macOS arm64 |
| **P1** | **[#143334](https://github.com/openclaw/openclaw/issues/143334)** — 子代理完成交付丢失 | OPEN，无 fix PR | Telegram group-topic 复现 |
| **P1** | **[#148707](https://github.com/openclaw/openclaw/issues/148707)** — 回复丢失："no active tool authority snapshot" | OPEN，无 fix PR | 2026.9.4 回归 |
| **P1** | **[#137332](https://github.com/openclaw/openclaw/issues/137332)** — requester-settle 批次无限重试 | OPEN，无 fix PR | 子代理失败/超时后挂起 |
| **P1** | **[#112423](https://github.com/openclaw/openclaw/issues/112423)** — SQLite transcript 清理阻塞事件循环 | OPEN，无 fix PR | 大 transcript 归档 |
| **P1** | **[#126821](https://github.com/openclaw/openclaw/issues/126821)** — SQLite 损坏在 15–24h 内复发 | OPEN，无 fix PR | WSL2，pristine DB 也中招 |
| **P1** | **[#139710](https://github.com/openclaw/openclaw/issues/139710)** — 插件生成 supersede 中途杀死 turn | OPEN，无 fix PR | MCP 热重载场景 |
| **P1** | **[#148650](https://github.com/openclaw/openclaw/issues/148650)** — Memory indexer 无法解析 SecretRef（401） | OPEN，无 fix PR | 阻塞全部 agent 记忆搜索 |
| **P1** | **[#123799](https://github.com/openclaw/openclaw/issues/123799)** — 生产环境 Codex compact 404 升级指引缺失 | OPEN，无 fix PR | 运维阻塞 |
| **P1** | **[#89257](https://github.com/openclaw/openclaw/issues/89257)** — backup create --verify 退出码 13，残留损坏 .tmp | OPEN，无 fix PR | 数据备份风险 |

**关键观察**：P0/P1 级 Bug 中，**已有 fix PR 的仅 3

---

## 横向生态对比



以下是 2026-09-19 各开源 AI 智能体项目的「今日重点」摘要：

### 1. 重要更新

*   **CoPaw 发布 v2.2.2-beta.1 版本**
    *   **内容**：发布 Beta 版本，更新包含改进分组聊天历史（grouped chat history）以及统一 ReMe 斜杠命令（slash commands）。
    *   **意义**：标志着项目在多会话交互体验和内存/命令管理统一化上取得了阶段性成果。
    *   **链接**：[CoPaw Release](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.2-beta.1)

*   **Hermes Agent 修复跨 Profile 授权泄露漏洞**
    *   **内容**：合并了多个关键安全 PR（#113308、#115446），解决了子进程在跨 Profile 场景下运行时，错误继承父级进程授权门（authorization gates）的安全漏洞（Issue #113270）。
    *   **意义**：显著增强了多租户/多配置文件部署环境下的安全隔离性。
    *   **链接**：[Hermes Agent PR #115446](https://github.com/NousResearch/hermes-agent/pull/115446)

*   **NanoBot 合并跨会话响应串扰关键修复**
    *   **内容**：合并 PR #5794，修复了用户在会话间快速切换时，智能体循环的 `_dispatch` 方法导致响应错误交付到非目标会话的严重 Bug（Issue #5798）。
    *   **意义**：解决了核心的多会话可用性问题，确保了会话间交互的严格隔离。
    *   **链接**：[NanoBot PR #5794](https://github.com/HKUDS/nanobot/pull/5794)

*   **OpenClaw 推进 Agent 后端架构演进**
    *   **内容**：提交并推进 XL 级架构 PR #152181，将 Codex 适配器中的 session/attempt 机制抽为共享核心，供其他原生 Agent 后端复用。
    *   **意义**：推动了 Agent 后端适配层的代码复用与架构规范化。
    *   **链接**：[OpenClaw PR #152181](https://github.com/openclaw/openclaw/pull/152181)

*   **NanoClaw 报告 PreCompact 归档导致生产环境 OOM 崩溃**
    *   **内容**：社区报告 Critical 级别 Issue #3716，指出 `PreCompact` hook 每次触发时将完整对话历史全量重写入目录，无轮转无清理，导致生产环境 OOM crash loop。
    *   **意义**：直接影响生产环境可用性，目前尚无对应修复 PR，需维护者优先关注。
    *   **链接**：[NanoClaw Issue #3716](https://github.com/nanocoai/nanoclaw/issues/3716)

*   **LobsterAI 准备并切出 2026.9.18 版本分支**
    *

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



好的，这是根据您提供的 NanoBot GitHub 数据生成的 2026-09-19 项目动态日报。

---

### **NanoBot 项目动态日报 - 2026-09-19**

#### **1. 今日速览**

NanoBot 项目在过去24小时内展现出极高的开发活跃度与社区参与度。核心开发团队（`chengyongru`, `yu-xin-c`, `wzrayyy` 等）贡献了大量高质量的 PR，聚焦于修复关键 Bug（如跨会话响应、Discord/Telegram 状态清理）和推进功能重构（如子代理执行）。社区层面，一个关于会话串扰的严重 Bug（#5798）引发了广泛关注，而一个关于移动端 WebUI 体验的 Issue（#5771）也获得了反馈。整体项目健康度良好，开发迭代迅速，问题响应及时。

#### **2. 版本发布**

*   **无新版本发布。**

#### **3. 项目进展**

本日有 5 条 PR 被合并或关闭，标志着多项关键进展：

*   **核心 Bug 修复：**
    *   **跨会话响应交付问题**：PR #5794 被合并，修复了在会话间快速切换时，智能体循环的 `_dispatch` 方法导致响应错误交付到非目标会话的严重 Bug。这直接回应了 Issue #5798 的社区报告。
    *   **Discord 运行时状态清理**：PR #5800 和 #5807 被合并/关闭。前者为 Discord 添加了与 Telegram 对等的 `replyToMessage` 功能；后者确保了在停止通道时，能正确清理正在运行的表情任务和待处理反应状态，避免资源泄漏。
    *   **WebUI 恢复流程优化**：PR #5812 和 #5810 被合并。前者修复了显式恢复连续执行的流程，确保恢复指令能正确到达智能体循环；后者解决了当仅启用 WebUI 时，其他通道在设置页面中被隐藏的问题。

*   **功能增强与重构：**
    *   **Linear Agent 原生通道**：PR #5495 被关闭，这是一个重要的功能增强，为 NanoBot 添加了对 Linear 平台的原生智能体通道支持。
    *   **子代理执行重构**：PR #5811 被提交，旨在将子代理的执行整合到共享的智能体循环上下文中，移除独立的子代理运行器，从而简化架构并统一上下文压缩路径。

**整体迈进：** 项目在稳定性（尤其是多会话场景和通道生命周期管理）和功能完整性（Discord 对等性、新平台集成）上迈出了坚实一步。架构层面的重构（如子代理）也为未来的可维护性和性能提升奠定了基础。

#### **4. 社区热点**

*   **最活跃 Issue：** **[#5798] 回复串会话问题** (作者: wowowowowowowowonojieba)
    *   **链接：** `HKUDS/nanobot#5798`
    *   **分析：** 该 Issue 拥有最多的评论（1条），但更重要的是它揭示了一个严重的可用性 Bug：用户在一个会话中运行任务时，在其他会话的交流会错误地插入到运行中的会话。这直接促使了 PR #5794 的修复。社区诉求非常明确，即**会话间严格的隔离性**，这被认为是核心功能的基本要求。

*   **其他关注点：**
    *   **[#5771] [WebUI] Session list requires two taps to open a session on mobile**：反映了移动端用户体验的关键问题，列表响应迟钝会直接影响用户交互意愿。
    *   **[#5808] WebUI follow-ups canceled by /stop replay after gateway restart**：描述了 `RecoveryCoordinator` 在网关重启后可能恢复已被取消的后续任务的问题，这是一个潜在的数据一致性和用户体验问题。

#### **5. Bug 与稳定性**

今日报告的 Bug 按严重程度排列如下：

| 严重程度 | Issue/PR | 描述 | 是否有 Fix PR |
| :--- | :--- | :--- | :--- |
| **严重** | **[#5798]** | **跨会话响应串扰**：一个会话的响应会错误地发送到另一个不相关的会话。 | **是**，PR #5794 已合并修复。 |
| **高** | **[#5808]** | **WebUI 后续任务恢复错误**：网关重启后，被 `/stop` 取消的后续任务可能被错误地重新执行。 | **是**，PR #5809 已提交，旨在通过快照和确认机制解决。 |
| **高** | **[#5806]** | **Discord 反应任务残留**：停止通道时，表情反应任务未被取消，可能导致资源泄漏和意外行为。 | **是**，PR #5807 已提交，专注于清理这些任务。 |
| **中** | **[#5771]** | **移动端 WebUI 会话列表需两次点击打开**：影响移动端核心操作体验。 | 待处理，但 PR #5805 的修复（使聊天行可点击）可能部分相关。 |

#### **6. 功能请求与路线图信号**

*   **来自 Issue 的请求：**
    *   **Discord 回复功能对等**：Issue #1663 和 PR #5800 表明，社区希望 Discord 的回复行为能像 Telegram 一样，通过配置驱动（`channels.discord.replyToMessage`），实现跨平台功能对等。这很可能被纳入下一版本。
*   **来自 PR 的路线图信号：**
    *   **安全增强**：PR #5815 提议添加一个可选的 Jev shell 安全防护，利用 OpenRouter 的 Decisions API 对 `exec` 工具调用进行预检。这暗示了项目对**执行安全**的重视，可能成为未来版本的重要特性。
    *   **架构优化**：PR #5811 对子代理执行的重构，表明项目正致力于**简化核心架构**，这将为未来更复杂的功能打下基础。

#### **7. 用户反馈摘要**

*   **主要痛点：**
    *   **会话隔离失效**：用户 `wowowowowowowowonojieba` 明确指出在版本 0.3.5 中不存在此问题，暗示当前版本回归。这突出了用户对稳定、可预测的会话行为的强烈需求。
    *   **移动端体验不佳**：用户 `morandot` 报告了 WebUI 在手机上的明显交互障碍（需要两次点击），这影响了 NanoBot 作为移动助手的可用性。
*   **积极信号：**
    *   用户对功能对等性（如 Discord 回复）有明确且合理的诉求，表明社区在积极思考如何更好地使用和定制项目。

#### **8. 待处理积压**

*   **长期未响应 Issue：**
    *   **[#1663] Discord: add replyToMessage parity with Telegram**：虽然已有 PR #5800 提出解决方案，但该 Issue 自 2026 年 3 月提出以来，状态长期为 `[CLOSED]`，表明从提出到最终实现周期较长。需关注其 PR 是否被完全采纳。
*   **需关注的新 Issue：**
    *   **[#5808]** 和 **[#5806]** 是新近报告且与正在进行的修复（#5809, #5807）高度相关的问题。维护者需确保这些修复能彻底解决根因，避免问题复发。

---
**报告生成时间：** 2026-09-19
**数据来源：** GitHub API for `HKUDS/nanobot`

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Thinking Process:

1.  **Understand the Goal**: The user wants a daily project report (dated 2026-09-19) for the open-source project `Hermes Agent` (github.com/nousresearch/hermes-agent) based on provided GitHub data (Issues, PRs, Releases). The user specifies a structured layout with 8 sections (Today's Summary, Releases, Progress, Community Hotspots, Bugs & Stability, Feature Requests & Roadmap, User Feedback Summary, Backlog).

2.  **Analyze the Input Data**:
    *   **Date of report**: 2026-09-19 (based on the prompt's request for "2026-09-19 的项目动态日报" and the data update date mostly around 2026-09-18).
    *   **Data Summary**:
        *   Issues updated in last 24h: 50 (New/Active: 31, Closed: 19).
        *   PRs updated in last 24h: 50 (Pending merge: 23, Merged/Closed: 27).
        *   New Releases: 0 (none).
    *   **Top Issues (by comments)**:
        *   #88584 (OPEN, P3, invalid, comp/cron): Automated Nous integration is blocked (116 comments). Conflicts in `cron/jobs.py`.
        *   #109417 (OPEN, P2, type/feature, comp/gateway): Tracking: profile multiplexing as the only gateway mode (11 comments).
        *   #20548 (CLOSED, P1, type/bug, comp/gateway, platform/feishu): [Feishu] root_id fallback for thread_id causes all replies to be threaded (10 comments).
        *   #80125 (CLOSED, P1, type/bug, comp/gateway, platform/wecom): weixin adapter ret=-2 misreported as 'rate limited' (10 comments).
        *   #30220 (OPEN, P1, type/bug, comp/agent): Background Self-Improvement Review misclassifies content between memory/skill/user stores (9 comments).
        *   #60789 (CLOSED, P2, type/bug, comp/agent): session_search(profile=...) silently searches current profile DB (8 comments).
        *   #98588 (OPEN, P3, type/bug, comp/cli, comp/gateway): False positive 'gateways may still be serving pre-update modules' after launchd respawn (8 comments).
        *   #72529 (CLOSED, P1, type/bug, comp/gateway, platform/whatsapp): WhatsApp bot-mode group messages never reach gateway while DMs work (7 comments).
        *   #63386 (CLOSED, P1, type/bug, comp/agent): state.db FTS index corruption on macOS (6 comments).
        *   #91547 (CLOSED, P1, type/bug, comp/cli, comp/gateway): `hermes gateway restart` races its own port (6 comments).
        *   #76836 (CLOSED, P1, type/bug, comp/agent, provider/minimax): minimax provider ignores base_url override (5 comments).
        *   #69451 (CLOSED, P2, type/bug, area/config): Desktop custom endpoints ignore the active profile (5 comments).
        *   #103363 (CLOSED, P1, type/bug, comp/gateway, platform/telegram): Telegram auto topic-rename silently broken on existing installs after 0.21.0 upgrade (5 comments).
        *   #78307 (OPEN, P2, type/feature, comp/agent): feat(memory): Add lifecycle management and maintenance UX for built-in memory (5 comments).
        *   #68055 (OPEN, P2, type/bug, comp/cli): config: _secure_dir() chmods through a symlinked $HERMES_HOME subdir (5 comments).
        *   #84997 (OPEN, P2, type/bug, comp/desktop): Desktop — switching into an actively-streaming session lands the transcript on old history (5 comments).
        *   #113270 (CLOSED, P1, type/security, comp/cli, comp/gateway): Profile-scoped authorization gates leak across profiles (4 comments).
        *   #63415 (CLOSED, P1, type/bug, comp/gateway, platform/whatsapp): authorize first-contact LID senders via senderPn (4 comments).
        *   #78497 (CLOSED, P2, type/bug, comp/tui): TUI notification poller acknowledges async completions in launch profile DB (4 comments).
        *   #50745 (OPEN, P3, duplicate, type/feature, comp/desktop): Mobile App for Hermes Agent (4 comments).
        *   #73085 (CLOSED, P2, type/bug, comp/cli, tool/mcp): Dashboard embedded chat runs in the `default` scope (3 comments).
        *   #80660 (CLOSED, P3, type/bug, comp/plugins): WhatsApp adapter: group_allow_from ignores WHATSAPP_GROUP_ALLOWED_USERS env var (3 comments).
        *   #106870 (CLOSED, P3, type/bug, comp/agent): compression.checkpoint_required=true permanently blocks /compress (3 comments).
        *   #105574 (OPEN, P1, type/bug, comp/agent): fix(context-compressor): Pass 4 clips pending tool-call args pre-send (2 comments).
        *   #115363 (OPEN, P2, type/bug, comp/cli): non-interactive hermes update parks local modifications in an autostash (2 comments).
        *   #114209 (CLOSED, P2, type/bug, comp/cron): no_agent cron script jobs no longer inherit needed env (2 comments).
        *   #114476 (CLOSED, P2, type/bug, comp/agent, provider/bedrock): Bedrock application inference profile ARNs fall back to 128k context (1 comment).
        *   #85669 (CLOSED, P3, type/bug, comp/tui): Desktop multi-profile config.set writes focused-profile settings into the launch profile (1 comment).
        *   #105275 (OPEN, P2, type/bug, comp/desktop): Disbanded bot group chat resurrects when a gateway's mirror misses the deletion tombstone (1 comment).
        *   #115402 (OPEN, P3, type/feature, comp/desktop): Desktop: new sessions are assigned to the active project by default (1 comment).

    *   **Top PRs (by comments/activity)**:
        *   #115454 (CLOSED): fmt(js): `npm run fix` auto-fix (auto-merge bot).
        *   #113545 (OPEN, P3, type/security, comp/tui): fix(gateway): redact cli.exec output before it crosses the RPC boundary.
        *   #114841 (CLOSED, P2, type/bug, comp/agent, provider/bedrock): fix(bedrock): application inference profile ARNs size the context window from the wrapped model (fixes #114476).
        *   #115453 (OPEN): fix(cron): attribute a job source's own failure to that source, not to a provider.
        *   #115452 (OPEN): fix(kanban): add create --body-file for multi-line bodies.
        *   #115448 (CLOSED): hermes backup exits 1 for an incomplete archive and stops pruning complete ones.
        *   #115401 (CLOSED, P1, type/bug, comp/cli, provider/minimax): minimax behind an OpenAI-compatible base_url override no longer 401s on x-api-key (fixes #76836).
        *   #113308 (CLOSED, P2, type/security, comp/cli): fix(security): strip platform authorization gates from child envs to prevent cross-profile leakage (fixes #113270).
        *   #115425 (CLOSED, P2, type/bug, comp/cli, comp/tui): fix(desktop,dashboard): session-bound settings, chat deep links and Custom Endpoints all stay in the focused profile (fixes #85669, #73085, #69451).
        *   #107385 (CLOSED, P2, type/bug, comp/gateway, platform/feishu): fix(feishu): drop root_id fallback and skip thread_id for regular replies (fixes #20548).
        *   #36233 (CLOSED, P2, type/bug, platform/feishu): fix(feishu): distinguish quote replies from topic sessions.
        *   #115446 (CLOSED, P1, type/security, comp/cli, comp/gateway): fix(profiles): a child spawned for another profile no longer inherits the spawner's authorization gates (fixes #113270).
        *   #42259 (CLOSED, P2, platform/feishu): fix(feishu): remove root_id from reply_to_message_id and thread_id fallback.
        *   #23758 (CLOSED, platform/feishu): fix(feishu): avoid creating incorrect thread to msg referenced by user.
        *   #20562 (CLOSED, platform/feishu): fix(feishu): avoid threading regular replies.
        *   #115438 (OPEN, P3, type/feature, comp/agent, comp/cli): fix(browser): make credential vault explicitly opt-in.
        *   #68844 (OPEN, P3, type/feature, comp/gateway, platform/whatsapp): fix(whatsapp): end-to-end allowlisted group intake for multi-member chats.
        *   #115443 (OPEN, type/test, comp/gateway): test(gateway): shard module-level helper/store tests out of test_api_server.py.
        *   #115445 (OPEN, P2, type/bug, comp/tools, tool/mcp): fix(mcp): keep structuredContent unless content is its verbatim JSON dual-emit.
        *   #115444 (OPEN, P2, type/bug, comp/cli, comp/gateway): fix(gateway): loopback binds survive the restart port handoff (fixes #91547).

3.  **Drafting the Sections**:

    *   **1. 今日速览 (Today's Summary)**:
        *   Activity level: High. 50 issues and 50 PRs updated in the last 24 hours, showing active development and community engagement.
        *   Key focus: Major bug fixes and security hardening, especially regarding profile-scoped authorization leakage, multi-profile desktop fixes, and Feishu/WeChat platform adapter corrections.
        *   No new version release today, but a high number of merged/closed PRs indicates preparation for the next release or hotfixes.
        *   Major themes: Profile isolation (security & config), platform stability (WhatsApp, Telegram, Feishu, WeChat), and desktop UI/UX improvements.

    *   **2. 版本发布 (Releases)**:
        *   None today (新版本发布：0 个). Skip or state "无新版本发布".

    *   **3. 项目进展 (Project Progress / Merged & Closed PRs)**:
        *   Highlight key merged PRs that closed major issues:
            *   **Profile Security Isolation**: PR #115446 and #113308 (and #115425) closed critical security bugs like #113270 (authorization gates leaking across profiles). This is a huge step for multi-tenant / multi-profile security.
            *   **Bedrock & Minimax Provider Fixes**: PR #114841 fixed Bedrock application inference profile ARN context window sizing (#114476). PR #115401 fixed the Minimax 401 error when using OpenAI-compatible base_url overrides (#76836).
            *   **Feishu Thread/Reply Fixes**: Multiple PRs (#107385, #36233, #42259, #20562, #23758) closed issues regarding Feishu `root_id` fallback causing threading bugs (#20548). This cleans up the Feishu adapter logic significantly.
            *   **Desktop & Dashboard Profile Consistency**: PR #115425 fixed multiple desktop bugs (#85669, #73085, #69451) ensuring settings and custom endpoints stay within the focused profile.
            *   **System Utility Fixes**: PR #115448 fixed `hermes backup` exit code behavior; PR #115444 fixed loopback bind survival on gateway restart (#91547).
        *   Assessment: Project is moving forward with strong focus on multi-profile correctness, enterprise provider compatibility (Bedrock, Minimax), and platform-specific messaging reliability.

    *   **4. 社区热点 (Community Hotspots / Top Issues & PRs)**:
        *   **Issue #88584 (116 comments)**: Automated Nous integration is blocked due to merge conflicts in `cron/jobs.py`. High comment count indicates severe CI/CD pipeline blockage or integration friction between Nous and Enterkey. (Link: https://github.com/NousResearch/hermes-agent/issues/88584)
        *   **Issue #109417 (11 comments)**: Profile multiplexing campaign tracking. Users and developers are tracking the transition to profile-multiplexing as the standard gateway mode. (Link: https://github.com/NousResearch/hermes-agent/issues/109417)
        *   **Issue #30220 (9 comments, 1 👍)**: Background Self-Improvement Review misclassifying content. This touches on core agent memory/skills logic, high interest from advanced users. (Link: https://github.com/NousResearch/hermes-agent/issues/30220)
        *   **PR #113545 (Open, security)**: Redacting `cli.exec` output before crossing the RPC boundary to prevent credential leakage in desktop apps. (Link: https://github.com/NousResearch/hermes-agent/pull/113545)
        *   **PR #68844 (Open, feature/whatsapp)**: End-to-end allowlisted group intake for WhatsApp, highly demanded for customer support use cases. (Link: https://github.com/NousResearch/hermes-agent/pull/68844)

    *   **5. Bug 与稳定性 (Bugs & Stability)**:
        *   *Critical/High Severity (P1)*:
            *   **Profile Authorization Leakage (#113270)**: Cross-profile gate leak. *Status: Fixed via PR #115446 / #113308.*
            *   **WhatsApp Group Message Delivery Failure (#72529)**: Groups not reaching gateway. *Status: Closed (likely resolved in later commits or PRs like #68844).*
            *   **Telegram Schema Migration Silent Failure (#103363)**: Topic rename broken after v0.21.0 upgrade due to schema v2->v3 migration issue. *Status: Closed.*
            *   **Context Compressor Clipping Args (#105574)**: Tool-call arguments corrupted during delegation. *Status: Open, P1, needs fix.*
            *   **Minimax 401 Regression (#76836)**: base_url override ignored, sending wrong key. *Status: Fixed via PR #115401.*
            *   **WhatsApp LID Sender Auth (#63415)**: First-contact rejection. *Status: Closed.*
            *   **state.db FTS Corruption on macOS (#63386)**: Write-health probe fails. *Status: Closed.*
            *   **Gateway Restart Port Race (#91547)**: EADDRINUSE issue. *Status: Fixed via PR #115444.*
        *   *Medium Severity (P2/P3)*:
            *   **Desktop Streaming Session Scroll Jitter (#84997)**: Switching sessions during streaming. *Status: Open.*
            *   **Symlinked $HERMES_HOME Chmod Clamp (#68055)**: Security/permission bug when skills dir is a symlink. *Status: Open.*
            *   **Non-interactive update autostash (#115363)**: Local mods left in stash. *Status: Open.*
            *   **Desktop config.set Scope Leak (#85669)**: Writes to launch profile. *Status: Fixed via PR #115425.*
            *   **MCP structuredContent discard (#115445)**: Stops valid structured data from being used. *Status: Open PR.*

    *   **6. 功能请求与路线图信号 (Feature Requests & Roadmap Signals)**:
        *   **Profile Multiplexing (#109417)**: The tracking issue indicates a major architectural shift is underway, with desktop and gateway integrating multiplexed profiles.
        *   **Memory Lifecycle Management (#78307)**: Feature request for first-class management of MEMORY.md and USER.md (inspection, deduplication, health checks). Currently open, P2.
        *   **Mobile App (#50745)**: Request for an iOS/Android app to remote into sessions. Duplicate/open feature request, low recent activity but high user demand.
        *   **Browser Credential Vault Opt-in (#115438)**: PR proposes making credential vault integration opt-in to avoid forcing security instructions on unused tools. Signals a shift in UX privacy strategy.
        *   **WhatsApp Multi-member Group Support (#68844)**: PR aims to fix the allowlist gate issue for non-DM group chats, unlocking customer support scenarios.

    *

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



# PicoClaw 项目动态日报 — 2026-09-19

---

## 1. 今日速览

PicoClaw 项目在过去 24 小时内整体活跃度**偏低**，无新版本发布，无 PR 被合并或关闭。今日新增 1 条活跃 Issue（飞书连接配置报错），3 条 PR 仍在等待维护者评审。项目当前处于**功能积累与积压清理的过渡阶段**：社区贡献者已提交了界面性能优化、新 AI 供应商集成和 DeltaChat 重构三项实质性改进，但均尚未被维护者合并，说明团队评审吞吐量可能不足。

---

## 2. 版本发布

**无新版本发布。** 最近一次 Release 仍为历史版本，今日无任何 Release 记录。

---

## 3. 项目进展

今日**无 PR 被合并或关闭**，3 条待合并 PR 均停留在 `OPEN` 状态：

| PR | 标题 | 作者 | 创建时间 | 核心贡献 |
|---|---|---|---|---|
| [#3347](https://github.com/sipeed/picoclaw/pull/3347) | fix laggy interface | iMilnb | 2026-08-27 | 修复 Web UI 聊天区域文本量大时的卡顿，经桌面与移动端浏览器验证有效 |
| [#3371](https://github.com/sipeed/picoclaw/pull/3371) | feat(providers): add opencode-go provider | EMTumariscal | 2026-09-08 | 新增 `opencode-go` 供应商，按模型 ID 自动路由至正确端点家族，携带 `x-opencode-session` 请求头 |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | refactor(deltachat): cleanup, -200LOC | trufae | 2026-07-03 | DeltaChat 模块重构：删除遗留功能与过时测试，引用官方中继列表替代硬编码，移除密码邮箱配置，新增 `join_invite_link` / `show_invite_link` 字段 |

> **进展评估**：三项 PR 均为社区驱动的实质性改进，若全部合并，将显著提升 UI 流畅度、扩展 AI 供应商生态、并简化 DeltaChat 配置安全性。但目前**零合并**，项目整体推进速度受限于维护者评审周期。

---

## 4. 社区热点

今日唯一活跃 Issue 为 **[#3355](https://github.com/sipeed/picoclaw/issues/3355)**，标签 `[stale]`，已自动标记为陈旧。

- **标题**：连接飞书报错 — `config.json contains unknown field(s): channel_list.feishu.app_id`
- **作者**：ttghub
- **创建时间**：2026-09-01（已 18 天）
- **评论数**：2，👍：0

该 Issue 被标记为 `[stale]`，表明维护者已有一段时间未回应。评论中包含 2 条互动，暗示有其他用户遇到了相同问题或参与了讨论。由于 Issue 已陈旧且无维护者回复，社区热点目前**集中在等待飞书通道配置修复**上。

---

## 5. Bug 与稳定性

### 🔴 高严重度

**[#3355](https://github.com/sipeed/picoclaw/issues/3355) — 飞书通道配置字段未知错误**

- **现象**：`config.json` 中 `channel_list.feishu.app_id` 字段被识别为未知字段，导致连接飞书失败。
- **环境**：PicoClaw nightly-50-gbbf6893c / Go 1.25.13
- **严重度**：**阻断性** — 飞书通道完全不可用。
- **状态**：`[OPEN]` `[stale]`，无 fix PR，无维护者回复。
- **影响面**：所有尝试通过配置文件方式配置飞书的用户。

> ⚠️ 该 Bug 已陈旧 18 天，若飞书是目标用户群的核心通道，应优先处理。

### 当日无其他 Bug 或崩溃报告

---

## 6. 功能请求与路线图信号

### 可能纳入下一版本的功能（基于现有 PR）：

| 来源 | 功能 | 成熟度 |
|---|---|---|
| [#3371](https://github.com/sipeed/picoclaw/pull/3371) | `opencode-go` 供应商集成 | 代码已提交，待评审 |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | DeltaChat 配置安全性重构 | 代码已提交，待评审 |
| [#3347](https://github.com/sipeed/picoclaw/pull/3347) | Web UI 性能优化 | 代码已提交，待评审 |

### 社区诉求信号：

- **飞书通道配置修复**（Issue #3355）：企业用户对飞书集成有明确需求，当前配置方式存在 schema 校验问题。
- **DeltaChat 安全性改进**（PR #3222）：社区 contributor 主动推动移除密码硬编码、改用 JSONRPC 管理密钥，反映用户对安全配置的重视。

---

## 7. 用户反馈摘要

从现有 Issue 评论中提炼：

| 维度 | 反馈 |
|---|---|
| **痛点** | 飞书通道配置后启动报错，`app_id` 字段不被 schema 识别，用户无法正常使用飞书集成 |
| **使用场景** | 企业内部通过飞书机器人与 PicoClaw 交互，依赖 `channel_list.feishu` 配置 |
| **满意/不满意** | 不满意 — Issue 已 18 天无维护者回应，用户处于等待状态 |
| **社区参与** | Issue 有 2 条评论，说明至少有另一位用户关注或遇到了相同问题 |

---

## 8. 待处理积压

以下项目已标记 `[stale]` 或长期无维护者响应，需关注：

| 类型 | 编号 | 标题 | 最后更新 | 积压天数 |
|---|---|---|---|---|
| Issue | [#3355](https://github.com/sipeed/picoclaw/issues/3355) | 飞书连接报错 | 2026-09-18 | 18 天 |
| PR | [#3222](https://github.com/sipeed/picoclaw/pull/3222) | DeltaChat 重构 | 2026-09-18 | 78 天 |
| PR | [#3347](https://github.com/sipeed/picoclaw/pull/3347) | UI 卡顿修复 | 2026-09-18 | 23 天 |
| PR | [#3371](https://github.com/sipeed/picoclaw/pull/3371) | opencode-go 供应商 | 2026-09-18 | 11 天 |

> 📌 **建议**：PR #3222 已积压近 3 个月，若 DeltaChat 是重要通道应优先评审；Issue #3355 影响飞书用户体验，建议尽快确认 schema 定义并回复。

---

*数据来源：GitHub API — sipeed/picoclaw | 报告生成时间：2026-09-19*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



# NanoClaw 项目动态日报 — 2026-09-19

---

## 1. 今日速览

今日 NanoClaw 项目活跃度**中等偏高**，社区参与度良好但集中在问题反馈侧。过去 24 小时内新增 4 个 Issues、4 个 PR，无版本发布、无合并/关闭记录。**核心矛盾突出**：社区成员在积极报告生产环境中的内存膨胀、配置透传和 watchdog 误杀等稳定性问题，同时有 4 个修复/功能 PR 处于待合并状态，说明项目当前处于**"问题积压 → 修复跟进"的循环阶段**，维护者响应速度尚可但合并节奏偏慢。

---

## 2. 版本发布

**无新版本发布**，最新 Release 仍为 v2.1.53（对应 Issue #3735 提及版本）。

---

## 3. 项目进展

今日无 PR 合并或关闭，4 个 PR 全部处于 Open 状态。按领域分布如下：

| PR | 作者 | 领域 | 摘要 |
|---|---|---|---|
| [#3852](https://github.com/nanocoai/nanoclaw/pull/3852) | samueldg | Slack Skills | 修复 direct-mode provisioning 时 Slack token 过期（12h）无人轮换的问题，调用 `tooling.tokens.rotate` |
| [#3851](https://github.com/nanocoai/nanoclaw/pull/3851) | ionescu77 | Agent Runner / Providers | 使 Codex Responses transport 可配置（WebSocket → HTTP SSE 切换），解决代理环境下可靠性问题 |
| [#3850](https://github.com/nanocoai/nanoclaw/pull/3850) | ionescu77 | 多领域 | 同上 Codex HTTP SSE transport 修复的配套 PR，覆盖 agent-runner / channels / containers / providers 等 7 个模块 |
| [#3741](https://github.com/nanocoai/nanoclaw/pull/3741) | slambert | Scheduled Tasks | 新增 `--fresh-session` 选项，使定时任务可运行在无状态会话中，避免历史上下文无限累积 |

**整体评估**：4 个 PR 覆盖了 **传输层可靠性（Codex SSE）**、**凭据管理（Slack token 轮换）**、**任务调度（stateless 模式）** 三个关键维度，均为实用导向的增量改进。若全部合并，将显著改善多租户部署和定时任务场景的运维体验。但目前均未合并，**项目整体推进速度受阻于 Code Review 周期**。

---

## 4. 社区热点

### 🔥 最受关注 Issue：#3716 — PreCompact 归档写入无界全量重写文件导致 OOM

- **链接**：https://github.com/nanocoai/nanoclaw/issues/3716
- **作者**：DawoudIO | **评论数**：3
- **核心诉求**：`PreCompact` hook 每次触发时将**完整对话历史全量重序列化**写入 `/workspace/agent/conversations/`，目录无轮转、无上限、无清理。作者声称这是**生产环境 OOM crash loop 的直接原因**。
- **分析**：这是今日最具破坏性的报告，涉及**内存安全**和**生产可用性**。评论区互动 3 条，说明维护者或社区成员已开始排查根因。该 Issue 与 #3735（归档无保留策略）本质同源，可能合并处理。

### 🔥 Issue #3735 — conversations/archives 无限增长，无保留策略

- **链接**：https://github.com/nanocoai/nanoclaw/issues/3735)
- **作者**：TO-maschenborn | **评论数**：3
- **核心诉求**：`archiveTranscriptFile()` 每次 compaction 都写入新文件但永不删除，`groups/<folder>/conversations/` 目录随 agent group 生命周期无限膨胀。
- **分析**：与 #3716 构成**"写入侧无界 + 保留侧无策略"**的双重问题，长期部署必然导致磁盘/内存失控。

### 🔥 Issue #3714 — Operator 环境变量覆盖无法透传到 Session 容器

- **链接**：https://github.com/nanocoai/nanoclaw/issues/3714)
- **作者**：nilsborg | **评论数**：1
- **核心诉求**：三个文档中声明的 operator override 环境变量（含 auto-compact window、transcript rotation）未从宿主机注入 session 容器，用户无法通过配置生效，必须改代码。
- **分析**：属于**配置可用性缺陷**，影响运维灵活性，但严重程度低于 OOM 问题。

### 🔥 Issue #3455 — poll-loop heartbeat watchdog 在高负载下误杀正常 turn

- **链接**：https://github.com/nanocoai/nanoclaw/issues/3455)
- **作者**：DawoudIO | **评论数**：1 | **严重级别**：High
- **核心诉求**：`CLAIM_STUCK_MS = 60_000` 的 claim-stuck watchdog 从 `markProcessing()` 开始计时，若首个 SDK event 延迟超过 60s（即使 agent 仍在正常工作），turn 会被永久 kill 且无自动恢复。
- **分析**：这是**已运行 27 天的高严重度 Issue**，直接影响消息可达性，属于必须修复的阻塞级缺陷。

---

## 5. Bug 与稳定性

| 排序 | Issue | 严重程度 | 类型 | 是否有 Fix PR |
|---|---|---|---|---|
| 1 | [#3716](https://github.com/nanocoai/nanoclaw/issues/3716) | **Critical** — 生产 OOM crash loop | 内存膨胀 / 无界写入 | ❌ 无 |
| 2 | [#3455](https://github.com/nanocoai/nanoclaw/issues/3455) | **High** — 消息永久阻塞 | Watchdog 误杀 | ❌ 无 |
| 3 | [#3735](https://github.com/nanocoai/nanoclaw/issues/3735) | **High** — 磁盘无限增长 | 无保留策略 | ❌ 无 |
| 4 | [#3714](https://github.com/nanocoai/nanoclaw/issues/3714) | **Medium** — 配置不可用 | 环境变量透传断裂 | ❌ 无 |

**关键发现**：4 个稳定性相关 Issue **均无对应的 fix PR**。最紧急的 OOM 问题（#3716）虽已有 3 条讨论，但尚未看到维护者给出修复时间表或 WIP 指向。#3455 已挂置 27 天，社区忍耐度可能正在消耗。

---

## 6. 功能请求与路线图信号

### 可能进入下一版本的功能（基于现有 PR 推断）：

| 功能 | 来源 PR | 优先级判断 |
|---|---|---|
| **定时任务无状态运行** (`--fresh-session`) | [#3741](https://github.com/nanocoai/nanoclaw/pull/3741) | 高 — 直接回应了长期上下文膨胀的用户痛点 |
| **Slack Token 自动轮换** | [#3852](https://github.com/nanocoai/nanoclaw/pull/3852) | 中高 — 12h 过期问题影响 direct-mode 部署可用性 |
| **Codex HTTP SSE 传输支持** | [#3850](https://github.com/nanocoai/nanoclaw/pull/3850) / [#3851](https://github.com/nanocoai/nanoclaw/pull/3851) | 中 — 解决特定网络环境下的连接可靠性，覆盖面较窄但实用 |

### 社区明确表达但尚无 PR 的需求：

- **归档/对话目录的保留策略**（#3735、#3716）：需要实现 rotation、TTL 或容量上限，目前连 design discussion 都未开始。
- **Operator 环境变量透传机制**（#3714）：需要将配置从宿主机注入 session 容器，属于基础设施层面的补全。

---

## 7. 用户反馈摘要

**痛点提炼**（从 Issues 描述中归纳）：

1. **"我们的 fleet 上这个目录一直在增长"**（#3735）— 多租户/舰队部署场景下，归档文件的累积已达到不可忽视的运维成本。
2. **"这就是生产环境 OOM crash loop 的直接原因"**（#3716）— 用户已因全量重写归档文件导致容器反复崩溃，影响业务连续性。
3. **"这些环境变量在文档里写了，但不改代码根本设不了"**（#3714）— 文档与实现脱节，用户被迫进行代码侵入式配置，运维体验差。
4. **"每晚 agent 都会重读之前所有对话，任务成本每周涨 15%"**（#3741 PR 描述）— 定时任务的长上下文累积已被量化识别，用户对 token 成本增长有明确体感。

**正面信号**：社区成员（DawoudIO、TO-maschenborn 等）在报告问题时均附带了精确的堆栈级分析和复现路径，说明用户群体具备较高的技术素养，问题报告质量整体较好。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 挂置时长 | 风险 |
|---|---|---|---|---|
| Issue | #3455 | Watchdog 误杀正常 turn | **27 天** | High — 阻塞消息回复 |
| Issue | #3714 | Operator env 未透传 | **15 天** | Medium — 配置缺陷 |
| Issue | #3716 | PreCompact OOM crash loop | **15 天** | Critical — 生产阻断 |
| Issue | #3735 | 归档无限增长 | **12 天** | High — 磁盘/内存风险 |
| PR | #3741 | `--fresh-session` 定时任务 | **12 天** | 有价值，等待 Review |
| PR | #3850 | Codex HTTP SSE transport | **1 天** | 新提交，等待 Review |
| PR | #3851 | Codex Responses transport 可配置 | **1 天** | 新提交，等待 Review |
| PR | #3852 | Slack token 轮换 | **1 天** | 新提交，等待 Review |

**维护者关注建议**：
- **优先级最高**：#3716（OOM）和 #3455（watchdog 误杀）需要立即关注，前者影响业务连续性，后者已挂置近一个月。
- **合并窗口**：#3741（`--fresh-session`）挂置 12 天，若维护者有意在下个版本引入定时任务改进，应优先 review 此 PR。
- **流程提醒**：4 个今日新 PR 均在提交当日获得关注（有更新记录），但 #3741 已停滞 12 天无合并迹象，建议维护者明确 Review 时间表以免贡献者流失。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**日期：** 2026-09-19  
**项目：** [nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. 今日速览

IronClaw 项目今日活跃度偏低，过去 24 小时内无新版本发布、无 PR 合并、无 Issue 关闭。现有 1 条 Issue 活跃更新和 2 条待合并 PR 更新，均处于 OPEN 状态，项目推进节奏有所放缓。两条 PR 分别涉及 OAuth 配置修复和 Reborn 持久存储架构重构，技术深度较高但尚未进入合并流程。整体来看，项目处于"酝酿期"，核心贡献者正聚焦于基础设施与适配层的改进，社区侧功能需求已有信号但尚待响应。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日**无 PR 合并或关闭**。以下为当前待合并的重要 PR 及其预期推进方向：

| PR | 作者 | 范围 | 状态 | 预期推进 |
|----|------|------|------|----------|
| [#8102](https://github.com/nearai/ironclaw/pull/8102) | henrypark133 | extensions / provider-instance | OPEN | 修复通过 Web UI（管理员配置）设置 Google OAuth 时 Gmail/Google Calendar 激活失败的问题，OAuth 流程完成但 activation 阶段报错 `Provider…`，属部署可用性阻断级修复 |
| [#7456](https://github.com/nearai/ironclaw/pull/7456) | henrypark133 | sandbox / ci / docs / dependencies | OPEN (size: XL, risk: medium) | 将 Reborn 持久存储重构为 profile-agnostic 架构，所有路径统一挂载于 `IRONCLAW_REBORN_HOME`，并引入类型化安全信封保障多租户隔离，属底层架构级变更 |

> **评估：** 两条 PR 均为高影响变更，但未在今日取得合并进展。#8102 属运维阻断修复，优先级应较高；#7456 标记为 XL + medium risk，预计需要较长评审周期。

---

## 4. 社区热点

今日讨论最活跃的条目为：

- **[Issue #7537](https://github.com/nearai/ironclaw/issues/7537)** — `feat(llm): generic per-request thinking/effort control`  
  作者: serrrfirat | 评论: 2 | 创建于 2026-08-12，今日活跃更新

  **背后诉求：** DeepSeek V4 Flash（0731 checkpoint）出现冗长输出问题，用户希望对 LLM 请求路径增加通用的 thinking/effort 控制参数，且每个 provider 适配器将其映射为原生参数（如 DeepSeek 的 `chat_template_kwargs`）。该需求并非仅针对单一模型，而是要求**跨 provider 的通用抽象层**，反映出用户对推理成本/质量精细调控的强烈需求，也暗示当前 IronClaw 在 LLM 请求层缺少此类 per-request 细粒度控制能力。

---

## 5. Bug 与稳定性

今日**无新开 Bug Issue**。但以下待合并 PR 涉及 Bug 修复：

| 严重程度 | PR / Issue | 描述 | 修复状态 |
|----------|------------|------|----------|
| 🔴 高（部署阻断） | [#8102](https://github.com/nearai/ironclaw/pull/8102) | Gmail/Google Calendar 在通过 Web UI 管理 OAuth 配置的部署环境中无法激活，OAuth 流程完成但 activation 失败 | Fix PR 已提交，待合并 |
| 🟡 中（架构风险） | [#7456](https://github.com/nearai/ironclaw/pull/7456) | Reborn 持久存储当前与 profile 绑定，重启时 profile 切换可能弱化租户/工作空间隔离 | Fix PR 已提交，待合并 |

> 今日无崩溃或回归类 Issue 报告。

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue | 当前进展 | 纳入可能性评估 |
|----------|-------|----------|----------------|
| **通用 thinking/effort 控制** — per-request + per-model 默认的推理力度参数，provider 适配器映射到原生参数（DeepSeek `chat_template_kwargs` 等） | [#7537](https://github.com/nearai/ironclaw/issues/7537) | 仅 Issue 讨论，尚无对应 PR | 🟡 中等 — 需求明确且与 LLM 适配层演进方向一致，但涉及所有 provider adapter 改动，工程量大，需设计评审 |

> **路线图信号：** #7537 的通用 thinking/effort 控制可被视为 LLM 适配层从"透传调用"向"智能调度"演进的信号。若被采纳，IronClaw 将在推理成本/质量 trade-off 上提供更精细的用户控制能力，这与当前行业趋势（OpenAI reasoning effort、Anthropic extended thinking 等）高度吻合。

---

## 7. 用户反馈摘要

从 Issue #7537 的讨论（2 条评论）中可提炼以下用户痛点：

- **痛点：** DeepSeek V4 Flash（0731 checkpoint）默认输出过于冗长，用户无法通过现有配置控制推理力度，只能接受默认行为，导致 token 消耗不可控。
- **使用场景：** 用户在生产环境中通过 NEAR AI 调用 DeepSeek V4 Flash，期望在成本与输出质量之间取得平衡，但当前 IronClaw 缺少 per-request 级别的 thinking/effort 参数透传能力。
- **期望：** 不仅是 DeepSeek，用户希望一个**统一的抽象层**覆盖所有支持 thinking/effort 控制的 provider，避免逐个模型硬编码。

---

## 8. 待处理积压

| 条目 | 类型 | 开启时间 | 待处理时长 | 状态 | 建议 |
|------|------|----------|------------|------|------|
| [#7456](https://github.com/nearai/ironclaw/pull/7456) | PR (XL, medium risk) | 2026-08-10 | ~40 天 | OPEN，今日有更新 | ⚠️ XL 级架构重构 PR 长期未合并，建议维护者明确评审里程碑与阻塞项 |
| [#7537](https://github.com/nearai/ironclaw/issues/7537) | Issue (enhancement) | 2026-08-12 | ~38 天 | OPEN，今日有更新 | ⚠️ 功能请求已获社区讨论但无对应 PR，建议维护者标记 `help wanted` 或发布设计方向以引导贡献 |
| [#8102](https://github.com/nearai/ironclaw/pull/8102) | PR (fix) | 2026-09-18 | 1 天 | OPEN | 属部署阻断修复，建议优先评审合并 |

---

*本日报基于 GitHub 公开数据自动生成，数据截止 2026-09-19。如有遗漏或误差，以 [IronClaw 仓库](https://github.com/nearai/ironclaw) 实际状态为准。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



根据您提供的 GitHub 数据，以下是为您整理的 **LobsterAI 项目动态日报 (2026-09-19)**。

---

# LobsterAI 项目动态日报 (2026-09-19)

## 1. 今日速览
 lobstersAI 项目在今日展现出极高的开发活跃度与迭代速度。过去24小时内，项目共产生了 **23 条 PR 更新**（其中 9 条已合并/关闭，14 条待合并），重点集中在 Cowork 会话体验、Skills 市场治理、OpenClaw 网关稳定性以及 Windows/macOS 平台兼容性上。与此同时，项目新增了 **6 条 Issues**，其中包含关键的插件配置持久化 Bug（#2654），以及多个长期影响外部开发者体验的陈旧 Issues（Stale Issues）被重新激活。整体来看，项目正处于快速的功能沉淀与稳定性加固期，核心维护者（如 `alison-xx` 和 `fisherdaddy`）产出密集。

## 2. 版本发布
*   **新版本发布：** 过去24小时内无正式 GitHub Release 发布。
*   **版本动态：** 虽然无独立 Release 包，但标志着本周期开发 culmination 的 PR `#2715 [CLOSED] Release/2026.9.18` 已成功合并/关闭（由 `liuzhq1986` 提交），表明项目已成功切出并准备分发 `2026.9.18` 版本分支。

## 3. 项目进展
今日有 9 条 PR 被合并或关闭，推动了多项核心功能与修复落地：
*   **Cowork 会话重磅升级：** `#2696 [CLOSED]` 合并了来自下游分支的 Codex 风格工作区改进，包括工作区

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>



根据您提供的 Moltis (`github.com/moltis-org/moltis`) 项目数据，以下是为您生成的 **2026-09-19 项目动态日报**。

---

# Moltis 项目动态日报 (2026-09-19)

### 1. 今日速览
Moltis 项目在 2026-09-19 的整体活跃度处于较低水平，进入了一个相对平稳的日常维护期。今日无任何新 Issues 产生或关闭，核心功能代码零合并，项目整体进展主要集中在自动化的依赖维护上。唯一活跃的动态是 1 条由 Dependabot 发起的依赖库更新 PR（#1275），目前处于待合并状态。整体而言，项目健康度稳定，但社区互动和核心功能开发在今日暂无显著突破。

### 2. 版本发布
*   **新版本发布：** 本日无新版本发布。
*   **说明：** 无重大功能更新、破坏性变更或迁移指南需要提示。

### 3. 项目进展
*   **今日合并/关闭 PR 数：** 0 条。
*   **核心进展：** 今日无核心代码合并，项目在 AI 智能体核心逻辑、接口优化或性能提升上没有迈入新的实质性步伐。
*   **待处理动态：** 
    *   **PR #1275 [OPEN]**: 这是一个由 `dependabot[bot]` 自动发起的依赖项更新，将 `/docs` 目录下 `npm_and_yarn` 组中的 `smol-toml` 从 `1.7.0` 提升至 `1.8.0`。
    *   **分析：** 虽然这不是一项核心功能开发，但保持文档构建工具链的更新对于保障文档安全、构建稳定性以及后续文档特性扩展具有基础性意义。建议维护者在通过 CI 测试后尽快合并。
    *   **链接：** [moltis-org/moltis PR #1275](https://github.com/moltis-org/moltis/pull/1275)

### 4. 社区热点
*   **社区互动：** 本日社区活跃度为零。无高评论或高反应（Reactions）的 Issues 或 PR。
*   **唯一关注点：** 
    *   **PR #1275**（`smol-toml` 依赖升级）虽然在技术上是必需的，但其评论数（`undefined` / 0）和 👍 反应数均为 0，表明社区用户和核心开发者对此自动化流程暂无额外讨论或异议。
    *   **链接：** [moltis-org/moltis PR #1275](https://github.com/moltis-org/moltis/pull/1275)

### 5. Bug 与稳定性
*   **Bug 报告：** 本日无新 Bug 报告（0 条新 Issues），无已知崩溃或回归问题记录。
*   **稳定性评估：** 项目当前版本运行稳定，未暴露新的技术债务或严重稳定性缺陷。

### 6. 功能请求与路线图信号
*   **新功能请求：** 本日无用户提出新的功能需求（0 条新 Issues）。
*   **路线图信号：** 当前无明显的新功能开发信号。唯一的 PR #1275 属于常规的运维/文档依赖维护，不直接代表 Moltis 核心 AI Agent 能力路线图的变更。

### 7. 用户反馈摘要
*   **反馈数据：** 本日无直接的用户反馈（Issues 评论数为 0，PR 评论为 0）。
*   **分析：** 缺乏用户痛点、使用场景的具体描述。这可能意味着当前用户群体较为稳定，或者用户更倾向于通过其他渠道（如Discord、文档、私信等）进行交流，GitHub Issues 暂未作为主要的反馈活跃阵地。

### 8. 待处理积压
*   **长期未响应项：** 今日数据中未暴露长期未处理的积压 Issue 或 PR。
*   **维护者提醒：**
    *   请关注 **PR #1275** 的 CI 运行状态。作为维护者，在空闲时应顺手合并此类低风险的自动化依赖更新，以保持仓库的整洁与安全。
    *   虽然本日数据极不活跃，但建议定期审视现有的 Open Issues 积压情况，尤其是关于 AI 引擎集成、多模态支持等核心功能的历史 Issue，以防关键需求被静默搁置。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-09-19

> 数据来源：`github.com/agentscope-ai/CoPaw`（以下链接均指向 `agentscope-ai/QwenPaw` 仓库）

---

## 1. 今日速览

过去 24 小时项目活跃度**处于高位**：Issues 更新 24 条（新开/活跃 16，已关闭 8），PR 更新 50 条（待合并 31，已合并/关闭 19），并发布 1 个 Beta 版本 `v2.2.2-beta.1`。社区讨论集中在**多租户 Hub 路线图**（#7318，30 条评论）以及**上下文管理、插件隔离、提示注入安全**等核心稳定性问题上。PR 侧有大量 first-time-contributor 提交，修复覆盖滚动上下文、SSE 流、驱动策略并发、插件事件循环阻塞等关键路径，项目整体在**稳定性与安全加固**方向上明显向前推进。不过，新报 Bug 数量较多且部分高危问题（提示注入、上下文撑爆）尚无合并修复，维护者需关注积压。

---

## 2. 版本发布

### v2.2.2-beta.1

- **类型**：Beta
- **发布页**：https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.2-beta.1
- **更新内容**：
  - `feat(console): improve grouped chat history` — PR [#7665](https://github.com/agentscope-ai/QwenPaw/pull/7665)
  - `feat(memory): unify ReMe slash commands` — PR [#7444](https://github.com/agentscope-ai/QwenPaw/pull/7444)
  - `chore: bump the version to 2.2.2b1` — @cuiyuebing
- **破坏性变更**：Release notes 未明确列出破坏性变更，但作为 Beta 版本，建议在测试环境验证。
- **迁移注意事项**：
  - 该版本为 Beta，不建议生产环境直接升级。
  - 配套的安装验证 Issue [#7849](https://github.com/agentscope-ai/QwenPaw/issues/7849) 已关闭，但 Release Duty 检查项需确认各平台通过。
  - 有用户报告 `qwenpaw-pet 0.1.1` 与 `2.2.2b2` 工具审批不兼容（[#7856](https://github.com/agentscope-ai/QwenPaw/issues/7856)），升级前请检查插件兼容性。

---

## 3. 项目进展

今日 PR 合并/关闭 **19 条**，Issues 关闭 **8 条**，主要推进如下：

### 已关闭的重要 Issue
| Issue | 说明 | 链接 |
|---|---|---|
| #6316 | 允许 agent 类型 cron job 指定模型 | [#6316](https://github.com/agentscope-ai/QwenPaw/issues/6316) |
| #7813 | Console SSE 裸 `null` 载荷导致流冻结 | [#7813](https://github.com/agentscope-ai/QwenPaw/issues/7813) |
| #7838 | 无沙箱时 `recall_history_python` 静默未注册 | [#7838](https://github.com/agentscope-ai/QwenPaw/issues/7838) |
| #7837 | user 行无 headline 导致滚动驱逐索引需调用模型 | [#7837](https://github.com/agentscope-ai/QwenPaw/issues/7837) |
| #7812 | 桌面启动后 slash 命令作用于 fallback session | [#7812](https://github.com/agentscope-ai/QwenPaw/issues/7812) |
| #7570 | 飞书流式卡片思考过程自动折叠 | [#7570](https://github.com/agentscope-ai/QwenPaw/issues/7570) |

### 已关闭/合并的重要 PR
- **#7223 [CLOSED]** `fix(providers): refresh DeepSeek catalog per vendor retirement and docs` — 移除已退役的 `deepseek-chat` / `deepseek-reasoner`，更新为 v4 系列。  
  https://github.com/agentscope-ai/QwenPaw/pull/7223
- **#7665 / #7444** 已随 `v2.2.2-beta.1` 发布，分别改进 Console 分组聊天历史与统一 ReMe slash 命令。

### 正在推进的关键 PR（尚未合并）
- **#7872** `fix(scroll): preserve interrupted requests across follow-up compaction (#7836)` — 修复工具链中断后用户请求被压缩归档的问题。  
  https://github.com/agentscope-ai/QwenPaw/pull/7872
- **#7864** `fix(security): protect skill directories against prompt-injected deletion (#7859)` — 针对提示注入删除技能目录的安全加固。  
  https://github.com/agentscope-ai/QwenPaw/pull/7864
- **#7854** `fix(drivers): preserve concurrent policy updates during driver reload (#7850)` — 修复驱动重载时的丢失更新。  
  https://github.com/agentscope-ai/QwenPaw/pull/7854
- **#7842** `fix(plugins): isolate synchronous hooks and add event loop lag watchdog (#7840)` — 插件同步调用导致事件循环冻结的隔离与监控。  
  https://github.com/agentscope-ai/QwenPaw/pull/7842
- **#7869** `fix(providers): send OpenCode session header` — 修复 OpenCode Go 端点缺少必需 header 的问题。  
  https://github.com/agentscope-ai/QwenPaw/pull/7869

**整体推进评估**：项目在**上下文管理、安全防护、插件隔离、Provider 兼容性**四个方向均有实质性 PR 推进，但多数修复仍处于 OPEN 状态，合并节奏将决定下一 Beta 的质量。

---

## 4. 社区热点

按评论数与反应数排序：

| 排名 | 标题 | 作者 | 评论 | 👍 | 链接 |
|---|---|---|---|---|---|
| 1 | **QwenPaw Hub 多租户版将于 2.2.0 推出：你希望我们接下来做什么？** | rayrayraykk | 30 | 4 | [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) |
| 2 | `ToolResultPruner` 跳过媒体块导致 `view_image` base64 无界累积撑爆上下文 | jcs130 | 4 | 0 | [#7853](https://github.com/agentscope-ai/QwenPaw/issues/7853) |
| 3 | 工具结果 system-reminder 中存在持久提示注入，指示删除所有技能 | xiaofengtt | 4 | 0 | [#7859](https://github.com/agentscope-ai/QwenPaw/issues/7859) |
| 4 | 插件共享宿主事件循环，一个同步调用冻结整个实例 | chcsyf | 4 | 0 | [#7840](https://github.com/agentscope-ai/QwenPaw/issues/7840) |
| 5 | Console SSE：`_strip_event_headlines` 可输出裸 `null`，失败时无终止事件 | wjt0321 | 4 | 0 | [#7814](https://github.com/agentscope-ai/QwenPaw/issues/7814) |

**诉求分析**：
- **#7318** 反映出社区对**团队协作/多租户**的强烈需求，官方已明确 QwenPaw Hub 是回应，下一步功能优先级需要社区投票。
- **#7853 / #7840 / #7814** 均指向**运行时健壮性**：上下文膨胀、事件循环阻塞、SSE 异常处理，说明随着插件生态和长会话场景增多，隔离与资源治理成为刚需。
- **#7859** 是**安全类热点**，提示注入可导致技能被删除，已有人提交修复 PR #7864，需优先评审。

---

## 5. Bug 与稳定性

按严重程度排列（🔴 严重 / 🟠 中等 / 🟡 轻微）：

| 严重度 | Issue | 说明 | 是否有 Fix PR |
|---|---|---|---|
| 🔴 | [#7859](https://github.com/agentscope-ai/QwenPaw/issues/7859) | 持久提示注入，指示删除所有技能 | ✅ [#7864](https://github.com/agentscope-ai/QwenPaw/pull/7864) |
| 🔴 | [#7853](https://github.com/agentscope-ai/QwenPaw/issues/7853) | `view_image` base64 无界累积，撑爆模型上下文 | ❌ 暂无 |
| 🔴 | [#7840](https://github.com/agentscope-ai/QwenPaw/issues/7840) | 插件同步调用冻结整个实例（约 40s） | ✅ [#7842](https://github.com/agentscope-ai/QwenPaw/pull/7842) |
| 🟠 | [#7836](https://github.com/agentscope-ai/QwenPaw/issues/7836) | scroll 驱逐丢弃工具密集区间内的用户轮次 | ✅ [#7872](https://github.com/agentscope-ai/QwenPaw/pull/7872) |
| 🟠 | [#7850](https://github.com/agentscope-ai/QwenPaw/issues/7850) | 驱动卡策略丢失更新，背景 `reload_driver` 覆盖并发写 | ✅ [#7854](https://github.com/agentscope-ai/QwenPaw/pull/7854) |
| 🟠 | [#7857](https://github.com/agentscope-ai/QwenPaw/issues/7857) | ACP 关闭回退可静默跳过会话清理并泄漏事件循环 | ❌ 暂无 |
| 🟠 | [#7847](https://github.com/agentscope-ai/QwenPaw/issues/7847) | 含字面百分号的文件名可能发送/预览错误文件 | ❌ 暂无 |
| 🟠 | [#7839](https://github.com/agentscope-ai/QwenPaw/issues/7839) | session-sync 跳过孤儿会话文件，保留清理报数据库损坏 | ❌ 暂无 |
| 🟠 | [#7856](https://github.com/agentscope-ai/QwenPaw/issues/7856) | `qwenpaw-pet 0.1.1` 丢失 `actor` 参数破坏工具审批 | ❌ 暂无 |
| 🟡 | [#7814](https://github.com/agentscope-ai/QwenPaw/issues/7814) | SSE 可输出裸 `null`，失败时无终止事件 | ✅ [#7723](https://github.com/agentscope-ai/QwenPaw/pull/7723) |
| 🟡 | [#7841](https://github.com/agentscope-ai/QwenPaw/issues/7841) | 桌面启动时 Console UI 早于后端就绪，面板空白 | ❌ 暂无 |
| 🟡 | [#7866](https://github.com/agentscope-ai/QwenPaw/issues/7866) | 文件区标签页在 agent 重写文件后仍显示旧内容 | ✅ [#7867](https://github.com/agentscope-ai/QwenPaw/pull/7867) |
| 🟡 | [#7599](https://github.com/agentscope-ai/QwenPaw/issues/7599) | OpenCode Go 套餐模型报 `MissingSessionID` | ✅ [#7869](https://github.com/agentscope-ai/QwenPaw/pull/7869) |
| 🟡 | [#7858](https://github.com/agentscope-ai/QwenPaw/issues/7858) | 测试中未 await 协程警告掩盖真实异步缺陷 | ❌ 暂无 |

**观察**：今日高危 Bug 集中在**安全、上下文资源、插件隔离**；已有对应 PR 的需尽快评审合并，暂无 PR 的（#7853、#7857、#7847、#7839、#7856）建议维护者优先响应。

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 状态 | 可能纳入下一版本？ |
|---|---|---|---|
| 多租户 Hub 版 | [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | OPEN，讨论中 | 官方已确认 2.2.0 推出，方向明确 |
| Agent 自主上下文管理（跨驱逐平滑交接） | [#7733](https://github.com/agentscope-ai/QwenPaw/issues/7733) | OPEN | 与 #7836/#7872 上下文修复同向，可能排期 |
| cron job 指定模型 | [#6316](https://github.com/agentscope-ai/QwenPaw/issues/6316) | CLOSED | 已关闭，可能已实现或纳入 |
| 飞书思考卡自动折叠 | [#7570](https://github.com/agentscope-ai/QwenPaw/issues/7570) | CLOSED | 已关闭，社区方案已验证 |
| Responses prompt caching | [#6668](https://github.com/agentscope-ai/QwenPaw/pull/6668) | OPEN | 长期开放，若合并将提升 GPT-5.6+ 性能 |
| Driver 能力快照性能优化 | [#6381](https://github.com/agentscope-ai/QwenPaw/pull/6381) | OPEN | 性能优化类，可能进入下一版本 |
| 丢弃空 assistant 文本块 | [#7409](https://github.com/agentscope-ai/QwenPaw/pull/7409) | OPEN | 修复上下文重放问题，建议优先 |

**路线图信号**：官方在 #7318 中明确 **QwenPaw Hub 多租户**是下一阶段重点；同时社区对**上下文管理自治化**（#7733）呼声渐高，结合 #7836/#7872 的修复，预计下一版本会在 Scroll 上下文策略上有较大动作。

---

## 7. 用户反馈摘要

**痛点与不满意**：
- **上下文管理**：长工具链任务中用户轮次被驱逐、媒体块无界累积（#7836、#7853），用户认为“纯 token 阈值触发驱逐，agent 无发言权”（#7733）。
- **插件生态稳定性**：插件同步 I/O 冻结整个实例（#7840），插件版本不兼容破坏审批（#7856）。
- **安全担忧**：提示注入可指示删除技能，且来源不在本地磁盘（#7859），用户对技能目录完整性保护有明确诉求。
- **桌面端体验**：启动后 Console 渲染不完整、slash 命令作用于错误会话（#7841、#7812）。
- **Provider 兼容**：OpenCode Go 套餐缺少 session header 导致无法使用（#7599）。

**满意/正面反馈**：
- 飞书 CardKit 流式输出（#3001）获得认可，用户基于 2.1.0 提出思考卡折叠改进并已验证可行（#7570）。
- 社区对 **QwenPaw Hub 多租户** 表现出高度兴趣（#7318 30 条评论、4 👍），愿意参与功能优先级讨论。

**使用场景**：
- 团队/多用户部署（Hub）
- 长会话、工具密集型任务（文件读写、diff、日志）
- 桌面端 + 插件扩展（chrome、computer-use、file-tools 等）
- 第三方模型接入（OpenCode Go、DeepSeek、GLM-5.x）

---

## 8. 待处理积压

以下 Issue/PR 长期未响应或处于“ready-for-human-review”状态，建议维护者优先关注：

| 类型 | 编号 | 标题 | 创建时间 | 状态 | 链接 |
|---|---|---|---|---|---|
| PR | #7211 | `fix(runtime): prevent injected context from persisting` | 2026-08-21 | OPEN，first-time-contributor，Under Review，ready-for-human-review | [#7211](https://github.com/agentscope-ai/QwenPaw/pull/7211) |
| PR | #6668 | `feat(providers): support responses prompt caching` | 2026-08-04 | OPEN | [#6668](https://github.com/agentscope-ai/QwenPaw/pull/6668) |
| PR | #6381 | `perf(drivers): avoid blocking on stale capabilities` | 2026-07-23 | OPEN | [#6381](https://github.com/agentscope-ai/QwenPaw/pull/6381) |
| PR | #7409 | `fix(agents): drop empty assistant text blocks` | 2026-08-30 | OPEN | [#7409](https://github.com/agentscope-ai/QwenPaw/pull/7409) |
| Issue | #7599 | OpenCode Go `MissingSessionID` | 2026-09-07 | OPEN，已有修复 PR #7869 | [#7599](https://github.com/agentscope-ai/QwenPaw/issues/7599) |
| Issue | #7733 | Agent 自主上下文管理 | 2026-09-13 | OPEN，讨论中 | [#7733](https://github.com/agentscope-ai/QwenPaw/issues/7733) |

**建议**：
- #7211 已标记 `ready-for-human-review`，且涉及注入上下文持久化，建议尽快安排评审。
- #6668 / #6381 / #7409 均为长期开放 PR，涉及 provider 性能与上下文正确性，适合在下一版本窗口合并。
- #7853、#7857、#7847、#7839、#7856 等无 Fix PR 的高危 Bug，建议维护者补充标签或指派。

---

**项目健康度小结**：社区活跃、贡献者涌入、方向明确（多租户 + 稳定性），但**高危 Bug 修复的合并速度**与**长期积压 PR 的评审**是当前主要风险点。若下周能集中合并上下文/安全类 PR，项目质量将显著提升。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>



基于您提供的 GitHub 数据，以下是为您生成的 **ZeptoClaw 项目动态日报 (2026-09-19)**。本报告旨在通过客观的数据分析，评估项目健康度、技术进展及社区动态。

---

# 📊 ZeptoClaw 项目动态日报 (2026-09-19)

### 1. 今日速览
*   **整体状态与活跃度评估**：项目在 2026-09-19 当天无新 Issues 或新版本发布，但开发活跃度依然集中在核心代码的优化与安全加固上。昨日（9月18日）有 3 个关键 Pull Request（PR）活动，其中 2 个已关闭（预计已合并），1 个处于开放状态。
*   **核心方向**：项目当前正处于**技术深耕期**，重点聚焦于提升对高级推理模型（Reasoning Models）的兼容性、工具调用链路的健壮性（Schema 规范化），以及基础安全防护（登录限流）。项目整体健康度良好，代码质量与功能迭代路径清晰。

---

### 2. 版本发布
*   **最新版本**：无。过去24小时内无新版本发布（New Releases: 0），亦无最新预览版或稳定版标记。

---

### 3. 项目进展
今日重点推进了 3 个高价值 PR，分别涉及 AI 核心逻辑、工具链安全与 Web 面板安全：

*   **已合并/关闭的 PR（核心功能与修复）：**
    *   **PR #703 `[CLOSED]` - 提升推理模型兼容性**  
        *   **链接**：[qhkm/zeptoclaw PR #703](https://github.com/qhkm/zeptoclaw/pull/703)
        *   **进展**：修复了 OpenAI 兼容端点上的推理模型（如 o1、DeepSeek-R1 等）返回 `reasoning_content` 且 `content` 为 `null` 时，解析器因 `unwrap_or_default()` 将其转为空字符串 `""` 的问题。这确保了推理模型的思考过程能被正确解析与呈现。
    *   **PR #701 `[CLOSED]` - 工具 Schema 规范化与参数强校验**  
        *   **链接**：[qhkm/zeptoclaw PR #701](https://github.com/qhkm/zeptoclaw/pull/701)
        *   **进展**：在所有 `ToolRegistry::definitions*()` 路径中引入了 `utils::tool_schema::sanitize_schema()`，在工具 schema 到达 provider 请求前进行净化。同时，针对严格/本地后端（strict/local backends）增加了模型工具参数的强制类型转换，大幅降低了 tool calling 的协议报错风险。
*   **待合并的 PR（安全加固）：**
    *   **PR #702 `[OPEN]` - 面板登录频次限制**  
        *   **链接**：[qhkm/zeptoclaw PR #702](https://github.com/qhkm/zeptoclaw/pull/702)
        *   **进展**：为公开面板的密码登录端点增加了基于 Socket Peer IP 的滑动窗口限流（60秒内最多5次尝试，第6次返回 HTTP 429 及 `Retry-After: 60`），在密码哈希校验（bcrypt）之外增加了一道暴力破解防御屏障。

**项目整体迈进**：ZeptoClaw 正在从“能用”向“好用、安全、企业级兼容”迈进。推理模型的支持（#703）和工具 Schema 的标准化（#701）标志着其作为个人 AI 助手内核的底层健壮度达到了新高度。

---

### 4. 社区热点
*   **今日社区动态**：今日无新 Issue 产生，且现有的 PR（#701 - #703）均无评论（`Comments: undefined`）和点赞（`👍: 0`），表明目前社区讨论处于 quiet period（安静期）。
*   **潜在关注点分析**：虽然无直接社区互动，但 PR #703（推理模型支持）和 #701（工具 schema 规范）是极具技术吸引力的变更。对于使用本地部署模型（如 Ollama, vLLM 严格模式）的高级用户而言，这两项修复是关键的痛点突破，预计在合并后会引发一轮社区关注与测试反馈。

---

### 5. Bug 与稳定性
今日无新报告的 Bug（Issues 更新为 0）。但通过已关闭的 PR，我们识别并解决了一批关键的稳定性与兼容性缺陷：

*   **高严重级：推理模型内容解析崩溃/异常**  
    *   **问题**：#703 修复前，当推理模型预算耗尽或处于思考阶段时，返回的 `content` 为 `null`，导致助手输出空白，用户体验中断。
    *   **状态**：已有 Fix PR (#703) 并已关闭。
*   **中高严重级：严格后端工具调用失败**  
    *   **问题**：#701 修复前，部分严格本地后端对 tool schema 容忍度低，不规范的 schema 定义会导致模型调用工具时直接报错。
    *   **状态**：已有 Fix PR (#701) 并已关闭。
*   **中严重级：面板安全暴露面（暴力破解风险）**  
    *   **问题**：#702 修复前，面板登录口仅依赖 bcrypt 的算力成本，无 IP 维度的频次限制，存在被暴力破解的理论风险。
    *   **状态**：已有 Fix PR (#702)，目前处于 `[OPEN]` 待合并状态，建议维护者优先审阅并合入主线以消除安全隐患。

---

### 6. 功能请求与路线图信号
*   **用户直接需求**：今日无新增功能请求 Issue。
*   **代码层路线图信号**：
    *   **对 Deep Reasoning 模型的原生支持（#703）**：表明路线图正积极跟进 OpenAI o-series、DeepSeek-R1 等大热推理模型的生态。
    *   **多后端工具网关标准化（#701）**：暗示项目未来将更强地支持插件化 MCP 服务及本地严格沙箱环境，向企业级 Agent 平台演进。
    *   **安全合规性（#702）**：安全特性被提上日程，表明项目可能在下一步计划面向公开部署（Public Panel）。

---

### 7. 用户反馈摘要
由于今日无新评论，无直接的用户痛点文字反馈。但从 PR 的修改细节可以**反推真实用户场景与痛点**：
*   **高级 AI 用户痛点**：在使用 OpenAI 兼容端点对接推理模型时，因 `content` 为空而拿到“空白回答”，认为助手“变傻了”或“卡住了”。#703 的修复直接解决了这一交互死胡同。
*   **开发者/本地部署用户痛点**：在 strict 模式下，工具调用因 schema 字段格式（如 additionalProperties 等）不合规而频繁失败。#701 的 `sanitize_schema` 是非常务实的兼容性补丁。

---

### 8. 待处理积压
*   **紧急待处理项**：**PR #702**（面板登录限流）。安全相关 PR 应当优先合并，以快速封堵公开面板的潜在暴力破解风险。
*   **建议关注**：虽然目前无长期积压的 stale Issues，但由于项目当前处于快速迭代期，建议维护者关注合并 #701 和 #703 后的社区反馈。特别是针对不同 provider 后端（如 Anthropic, Google Gemini 或本地 Ollama）的工具调用与推理返回格式兼容性，防止引入新的边界情况回归（Regression）。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



好的，这是根据您提供的数据生成的 ZeroClaw 项目动态日报。

---

### **ZeroClaw 项目动态日报 - 2026-09-19**

**数据来源**: GitHub - zeroclaw-labs/zeroclaw
**报告周期**: 过去24小时

---

#### **1. 今日速览**

ZeroClaw 项目在2026-09-19展现出极高的开发活跃度与社区参与度。项目当日新增16条Issue更新与50条PR变动，虽无新版本发布，但核心开发力量正聚焦于多个关键架构演进与高优先级安全加固。整体健康度良好，项目正处于一个重要的功能积累与稳定性提升阶段，多个重量级特性（如运行时插件、安全认证）正稳步向主线推进。

#### **2. 版本发布**

*   **无新版本发布**。今日无新的 Release 上线。

#### **3. 项目进展**

本日有4条PR被合并或关闭，标志着数个重要功能的落地或收尾：
*   **PR #10750** (`feat(plugins): govern channel plugin egress`)：已关闭。此PR为通道插件的出站流量治理奠定了基础，是构建可信任插件生态的关键一步。
*   **PR #10719** (`fix(providers): preserve tool image references through normalization`)：已关闭。此修复确保了在图像标记标准化过程中，工具所需的原始图像路径或URL信息得以保留，避免了下游功能中断。
*   **PR #10321** (`feat(security): browser PKCE and the cross-surface enrollment API`)：状态为“已接受”，但仍在开放中。这是实现浏览器端安全认证和跨设备 enrollment API 的重要里程碑，属于大规模安全架构升级的一部分。

#### **4. 社区热点**

以下是今日讨论最活跃、最受关注的议题：
*   **Issue #10526** (`RFC: Append-only session event history...`)：由社区成员 `NiuBlibing` 提出的重量级RFC，旨在重构会话状态管理，实现确定性的状态回放和派生智能体流。这获得了11条评论，是当前架构讨论的核心。
*   **Issue #8692** (`[Tracker]: Maintainer decision queue for RFCs and design issues`)：维护者决策队列，用于跟踪所有需要官方决策的RFC和设计问题。拥有15条评论，是社区了解项目方向的关键入口。
*   **Issue #4853** (`[Feature]: install skills from .well-known agent-skills discovery indexes`)：关于支持从标准化 `.well-known` URI 发现和安装技能的特性请求。获得了8条评论，反映了社区对技能生态标准化的强烈需求。
*   **PR #9713** (`feat(runtime): expose token accounting on history-trim events`)：尽管评论数未显示，但此PR通过在历史修剪事件中暴露令牌使用量，解决了成本可见性的关键痛点，获得了“杰出贡献者”标签，影响力巨大。

#### **5. Bug 与稳定性**

本日报告了多个Bug，部分已有修复PR跟进，按严重程度排列如下：
*   **高严重度 (P1) - 已有修复PR**：
    *   **Issue #10908** (`[Bug]: Image markers... promoted to attachments without provenance`)：图像标记在工具结果中被提升为附件时丢失来源信息。**修复PR #10894** 已落地，但此问题在 `run_model_query` 路径上仍未解决（见下条）。
    *   **Issue #9882** (`Image markers bypass content validation on the run_model_query direct-dispatch seam`)：图像标记绕过了 `run_model_query` 路径的内容验证。这是一个高风险的安全/稳定性漏洞。
    *   **Issue #10643** (`fix(runtime): fail-closed approval enforcement for bounded child loop tools`)：子循环的审批执行机制存在缺陷，可能导致需要审批的工具被意外执行。**修复PR #10804** 已提交，通过将成本跟踪范围限定在委托子循环并强制执行每智能体上限来彻底解决此问题。
*   **中等严重度 (P2) - 无已知修复PR**：
    *   **Issue #10952** (`Seam sanitizers rewrite signed reasoning inside the assistant tool-call envelope`)：多模态清理器在重写助手工具调用信封时，可能破坏签名推理内容，导致Anthropic API拒绝请求。这是一个新发现的高风险回归问题。
    *   **Issue #10292** (`[Bug]: ACP session tools cannot list or inspect Code sessions`)：已关闭，但表明在ZeroCode/ACP会话工具链中存在功能缺陷。
    *   **Issue #10950** (`[Bug]: cost.warn_at_percent warnings are ignored by the runtime`)：成本警告配置被运行时忽略，导致预算控制功能失效。
    *   **Issue #10951** (`[Bug]: ZeroCode Config refreshes the field list twice after saving`)：配置保存后重复请求，属于影响体验的客户端Bug。

#### **6. 功能请求与路线图信号**

*   **运行时插件化 (Issue #8850, PR #9584)**：将可选通道和工具从编译时特性标志移至运行时可安装的WASM插件是明确的路线图方向。相关PR #9584 已添加了安装和列表时的权限授予仪式，标志着插件生态的安全框架正在成型。
*   **会话事件溯源 (Issue #10526)**：追加式会话事件历史的RFC若被接受，将根本性改变状态管理和容错机制，是长期架构演进的关键。
*   **技能发现标准化 (Issue #4853)**：对 `.well-known` 标准的支持将使ZeroClaw能无缝接入新兴的智能体技能生态，是提升可扩展性的重要功能。
*   **安全加固 (PR #10321, #10259)**：浏览器PKCE、跨表面 enrollment API、RPC强制认证 principal 等一系列PR，表明项目正将安全性提升到前所未有的高度，这很可能成为下一版本的核心主题。

#### **7. 用户反馈摘要**

*   **痛点**：用户反馈了多个影响工作流的功能缺陷，包括成本警告不生效（#10950）、配置保存后重复刷新（#10951）、ACP会话列表不完整（#10292）等，这些都对日常使用造成了困扰。
*   **诉求**：社区对标准化和开放生态表现出浓厚兴趣，如支持标准的技能发现协议（#4853）和开放的会话数据格式（#10526）。
*   **满意点**：项目对安全性和架构严谨性的持续投入（如一系列安全PR和失败封闭的审批执行）获得了社区的关注和认可，尽管部分问题（如图像标记处理）仍需迭代。

#### **8. 待处理积压**

*   **Issue #4853**：`.well-known` 技能发现支持。这是一个存在超过半年的功能请求，对生态建设至关重要，但尚未有明确的实现PR。
*   **Issue #8850**：运行时插件架构。同样是一个长期的架构级特性请求，虽然已有相关PR #9584 在推进，但核心的编译时到运行时的迁移仍是巨大工程，需持续关注。
*   **PR #10425** (`feat(runtime): internal-principal envelope...`)：状态为“开放”，需要作者响应。这是实现RFC #6954（内部 principal 信封）的第一部分，对安全上下文传递至关重要。
*   **PR #10622** (`feat(slack): optionally accept bot and workflow messages`)：状态为“停车场”，需要维护者决定是否继续推进。此功能对特定用户群（Slack用户）有需求，但可能因优先级问题被搁置。

---
**总结**：ZeroClaw 项目正处于一个积极的发展阶段，开发活动频繁，社区参与度高。项目的重点 clearly 正在向安全性、可扩展性和架构现代化倾斜。多个关键的长期积压项正在取得实质性进展，预示着项目未来版本将朝着更安全、更灵活的方向迈出重要步伐。同时，需关注新引入的回归问题（如#10952）对稳定性的影响。

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*