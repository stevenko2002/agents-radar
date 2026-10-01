# AI CLI 工具社区动态日报 2026-10-02

> 生成时间: 2026-10-01 22:15 UTC | 覆盖工具: 12 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [ComfyUI](https://github.com/comfyanonymous/ComfyUI)
- [Ollama](https://github.com/ollama/ollama)
- [llama.cpp](https://github.com/ggerganov/llama.cpp)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比



以下是今日 AI CLI 工具社区的**重要更新摘要**：

*   **Claude Code 发布 v2.1.287，推出插件系统 Claude Mods**：该版本引入了允许插件修改深层行为的 Claude Mods 系统，并内置了一个名为 "You should know" 的侧边警戒 Agent（需显式开启）。
    *   链接：`https://github.com/anthropics/claude-code/releases/tag/v2.1.287`
*   **GitHub Copilot CLI 发布 v1.0.92-0 与 v1.0.91**：修复了 OAuth 重新认证后 MCP 工具不可用的问题，并新增了 `copilot sandbox ca` 命令族以支持企业级代理 CA 信任管理。
    *   链接：`https://github.com/github/copilot-cli`
*   **OpenCode 发布 v1.18.34 版本**：修复了多项核心 Bug，并重新签名了 macOS CLI 二进制文件，以确保其在 macOS 27+ 系统上的可靠运行。
    *   链接：`https://github.com/anomalyco/opencode/releases/tag/v1.18.34`
*   **llama.cpp 同步发布 10 个版本（b11318–b11327）**：其中包含避免 direct-io 模式下重复全尺寸张量拷贝的 mmap 性能优化，以及针对非因果模型的 mtmd max_image 限制修复。
    *   链接：`https://github.com/ggml-org/llama.cpp/releases/tag/b11324`
*   **DeepSeek TUI 合并了贡献者 asto18089 的 7 个修复 PR（#6799）**：一次性落地了针对 MCP 工具超时、JS 执行子进程残留以及空闲看门狗误杀等稳定性的关键修复。
    *   链接：`https://github.com/Hmbown/Codewhale/pull/6799`
*   **Qwen Code 推出 v0.24.7-nightly.20261001 补丁版本**：核心更新包括将 Code Mode 文本与延迟工具发现（lazy tool discovery）对齐，并修复了权限模块的已批准状态处理。
    *   链接：`https://github.com/QwenLM/qwen-code/releases/tag/v0.24.7-nightly.20261001.a7deb01bcb`
*   **Ollama 社区曝光关键 CVE 漏洞与性能回归问题**：社区重点关注了 Go 二进制文件中的 36 个漏洞（#16033），同时针对 GPU 系统上的 CPU 占用率回归提交了修复 PR（#18613）。
    *   链接：`https://github.com/ollama/ollama/issues/16033`
*   **Claude Code 与 OpenAI Codex 出现跨平台高热度 Bug**：Claude Code 出现了 Windows/Cowork 环境下工具调用 XML 被渲染为文本的崩溃级 Bug（#68354）；同时 OpenAI Codex 在 Windows 上因 daemon 权限错误导致 CLI 无法启动（#48043）。
    *   链接：`https://github.com/anthropics/claude-code/issues/68354` / `https://github.com/openai/codex/issues/48043`

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills 社区热点报告
**数据截止：2026-10-02 | 来源：anthropics/skills**

---

## 一、热门 Skills 排行

> 注：PR 评论数在数据中均显示为 `undefined`，以下按 PR 编号活跃度（更新时间、Issue 关联度、社区提及）综合排序。

### 1. #1298 — skill-creator 修复：触发词评估隔离与跨平台稳定性
- **作者**：MartinCajiao | **状态**：OPEN | **更新**：2026-09-16
- **功能**：修复 `skill-creator` 中触发词评估（trigger evals）的多个缺陷——多 worker 命令竞争、Windows `select()` 管道失败、无关工具中断扫描、运行时失败被误判为非触发词。
- **热点**：直击 skill-creator 核心评估逻辑的可靠性问题，Issue #1383 等多条关联反馈表明社区对「Skill 质量评估」高度关注。
- 🔗 https://github.com/anthropics/skills/pull/1298

### 2. #1742 — mcp-builder：兼容 MCP ≥2.0 API 变更
- **作者**：Kuldeeep18 | **状态**：OPEN | **更新**：2026-09-29
- **功能**：适配 `mcp>=2.0.0` 中 `streamablehttp_client` → `streamable_http_client` 的重命名，以及自定义 HTTP headers 的新配置方式（`create_mcp_http_client` / `http_client`）。
- **热点**：MCP 生态快速迭代，社区大量 Skill 依赖 MCP 集成，此修复是「保持生态兼容性」的关键拼图。关联 Issue #1390（evaluation.py 评分 0/N）。
- 🔗 https://github.com/anthropics/skills/pull/1742

### 3. #1771 — proofcore-contract-auditor：智能合约审计与区块链存证
- **作者**：ProofCore-Protocol | **状态**：OPEN | **更新**：2026-09-16
- **功能**：Web3 开发者 Skill，对 Solidity/Rust 智能合约做静态分析，并将审计证明锚定到 TON 公链（ProofCore 零存储 Merkle 协议）。
- **热点**：Web3 + AI Agent 审计的交叉赛道，代表社区 Skill 正在向「高价值专业场景」渗透。
- 🔗 https://github.com/anthropics/skills/pull/1771

### 4. #1734 — 检测孤立的 DOCX 评论
- **作者**：rohitj25 | **状态**：OPEN | **更新**：2026-09-25
- **功能**：检测 Word 文档中孤立的批注（orphaned comments）。
- **热点**：文档处理是 Skills 生态最成熟的赛道之一（docx、odt、pdf、md2video-audio 齐发），社区在持续打磨文档 Skill 的边界场景。
- 🔗 https://github.com/anthropics/skills/pull/1734

### 5. #1703 — md2video-audio：Markdown → 带人声旁白的 MP4 视频
- **作者**：70v-Yoyo | **状态**：OPEN | **更新**：2026-09-15
- **功能**：零成本将 Markdown 文档通过 Marp 转换为演示幻灯片，再合成带真人级语音旁白的 MP4 视频。
- **热点**：「内容一键多形态分发」的典型代表，切中知识工作者和内容运营的强需求。
- 🔗 https://github.com/anthropics/skills/pull/1703

### 6. #1245 — notion-spec-to-implementation + quantitative-resume-auditor
- **作者**：mrdesouzaphd-cmyk | **状态**：OPEN | **更新**：2026-09-30
- **功能**：① 将产品/技术 Spec 拆解为可执行的 Notion 任务（含验收标准、进度追踪）；② 量化简历审计。
- **热点**：「Spec → 代码」的自动化桥接方案，与社区对「需求结构化 → Agent 执行」的诉求高度吻合。
- 🔗 https://github.com/anthropics/skills/pull/1245

### 7. #822 — AWT (AI Watch Tester)：AI 驱动的 E2E 测试
- **作者**：ksgisang | **状态**：OPEN | **更新**：2026-09-19
- **功能**：零代码 E2E 测试生成，赋予 Claude 视觉和浏览器控制能力，自动运行测试。
- **热点**：测试自动化是社区高频需求（见 Issues #556、#1390），AWT 提供了「Agent 即测试工程师」的新范式。
- 🔗 https://github.com/anthropics/skills/pull/822

### 8. #525 — Pyxel：复古游戏开发
- **作者**：kitao | **状态**：OPEN | **更新**：2026-09-22
- **功能**：支持 Python 中创建、调试和验证复古像素风游戏（Pyxel 框架）。
- **热点**：代表社区 Skill 的「长尾活力」——非主流但高度专注的垂直领域，持续维护半年以上。
- 🔗 https://github.com/anthropics/skills/pull/525

---

## 二、社区需求趋势（从 Issues 提炼）

| 排名 | Issue | 评论 | 核心诉求 |
|------|-------|------|----------|
| 1 | **#492** — 社区 Skill 冒充 `anthropic/` 命名空间 | 43 🔥 | **安全与信任边界**：社区 Skill 被分发到官方命名空间，用户可能误授权给恶意 Skill |
| 2 | **#228** — 组织内 Skill 共享 | 16 | **协作能力**：Skill 应可在组织内直接分享，而非手动传递 `.skill` 文件 |
| 3 | **#556** — `run_eval.py` 触发率 0% | 12 | **评估工具失效**：skill-creator 的触发词评估机制形同虚设，无法验证 Skill 是否真的被触发 |
| 4 | **#62** — Skill 消失 | 10 | **稳定性**：用户上传的 Skill 无故消失，文件重命名可能触发 |
| 5 | **#1329** — compact-memory Skill 提案 | 9 | **Agent 记忆压缩**：用符号化记法压缩 Agent 长程上下文中的笔记/记忆 |
| 6 | **#202** — skill-creator 过度教育化 | 8 | **Skill 质量标准**：skill-creator 本身应遵循「可操作指令」而非概念解释 |
| 7 | **#189** — 重复 Skill 安装 | 6 | **插件去重**：document-skills 与 example-skills 内容重复，污染上下文 |

**趋势总结**：
- 🔒 **安全与信任**是当前最紧迫的社区议题（#492 以 43 条评论遥遥领先）
- 🤝 **组织协作与共享**是第二大诉求
- 🧪 **Skill 质量评估体系**（触发率、基准测试、安全审查）正在成为焦点
- 🧠 **Agent 自身能力**（记忆压缩、推理质量门控）开始成为新 Skill 方向

---

## 三、高潜力待合并 Skills

以下 PR 评论活跃、社区关联度高，但截至数据截止日仍为 **OPEN** 状态，预计短期内可能落地：

| PR | Skill | 关联 Issue | 潜力理由 |
|----|-------|------------|----------|
| **#1298** | skill-creator 修复 | #1383、#1394 | 核心工具修复，社区投诉集中，Anthropic 维护者大概率优先合并 |
| **#1742** | mcp-builder 兼容修复 | #1390 | MCP 2.0 迁移的阻塞性修复，生态刚需 |
| **#1792** | docx LibreOffice 超时修复 | — | 文档 Skill 的可靠性补丁，低风险高价值 |
| **#1681** | skill-creator package_skill.py 直连执行 | — | 纯工程便利性修复，合并阻力小 |
| **#1607** | claude-api 退休模型 ID 标记 | #1603 | 时效性强，维护者通常快速响应 |
| **#1776** | blast-radius（批量操作前检查清单） | — | 通用性极强的安全习惯 Skill，设计精良 |
| **#723** | testing-patterns（全栈测试模式） | — | 覆盖单元/组件/E2E/哲学，填补了社区测试知识的系统化空白 |
| **#83** | skill-quality-analyzer + skill-security-analyzer | #492、#202 | 直接回应社区最关心的「Skill 质量」与「安全审查」议题 |

---

## 四、Skills 生态洞察

> **当前社区在 Skills 层面最集中的诉求是：从「能用就行」走向「可信、可评估、可协作」——安全信任边界、Skill 质量度量体系、组织内共享机制，构成了从「野蛮生长」到「工业化」的三大基础设施需求。**

---



# Claude Code 社区动态日报 — 2026-10-02

---

## 1. 今日速览

Claude Code 发布 **v2.1.287**，正式推出 **Claude Mods** 插件系统，允许插件修改深层行为，并内置了一个名为 "You should know" 的侧边警戒 Agent。社区层面，一个关于工具调用 XML 被错误渲染为文本的 Windows/Cowork 崩溃级 Bug（#68354）获得了最高关注度（10 条评论、9 👍），而分布式 Agent 团队、音频输入等长线功能需求也在持续发酵。

---

## 2. 版本发布

### 🚀 v2.1.287 — Claude Mods 上线

| 项目 | 内容 |
|---|---|
| **版本** | v2.1.287 |
| **核心更新** | 插件系统重构，支持修改深层行为 |

**要点：**

- **Claude Mods**：插件现在可以修改 Claude Code 的深层行为，不再局限于表面配置。
- **内置 Mod "You should know"**：一个侧边 Agent，实时监控你的操作并标记可能遗漏的问题。需通过 `/plugin enable cc-plugin-you-should-know@builtin` 显式开启（仅限第一方会话）。

> ⚠️ 此项功能目前仅对 first-party sessions 开放，第三方集成暂不支持。

🔗 https://github.com/anthropics/claude-code/releases/tag/v2.1.287

---

## 3. 社区热点 Issues（Top 10）

从过去 24 小时更新的 50 条 Issue 中，筛选出最具技术价值和社区影响力的 10 条：

### 🔴 #68354 — 工具调用 XML 被渲染为文本（Windows + Cowork）
- **标签**：`bug` `platform:windows` `area:tools` `area:model` `area:cowork`
- **热度**：10 评论 / 9 👍
- **问题**：在 Windows 本地及 Cloud Cowork 环境中，工具调用前出现多余的 `"call"`/`"court"` token，内部 `<invoke>` XML 被当作纯文本输出而非正常执行。
- **为何重要**：这是阻断性的工具调用链路故障，直接影响 Agent 的核心能力。跨平台（Windows + Cloud）复现意味着可能是序列化或解析层的系统性问题。
- **社区反应**：高度关注，👍 数远超其他 Issue。

🔗 https://github.com/anthropics/claude-code/issues/68354

---

### 🟡 #79507 — 分布式 Agent 团队：跨机器协同
- **标签**：`enhancement` `area:agents` `area:networking`
- **热度**：4 评论 / 0 👍
- **诉求**：通过 LAN 对等网络协调多台机器上的 Claude Code 实例，实现跨机器 Agent 协作。
- **为何重要**：这代表了从"单机会话"向"多 Agent 协作网络"演进的愿景。当前 Claude Code 的 Agent 能力仍局限于单进程，分布式协同是自然延伸。
- **社区反应**：讨论初期，但方向获得认可。

🔗 https://github.com/anthropics/claude-code/issues/79507

---

### 🟡 #30627 — Desktop App 中 git push 后变更文件计数不刷新
- **标签**：`bug` `platform:macos` `area:ui` `area:desktop`
- **热度**：3 评论 / 2 👍
- **问题**：桌面端在执行 `git push` 后，"Create PR" 附近的变更文件指示器不刷新，导致用户看到的仍是过期状态。
- **为何重要**：影响 PR 工作流的最终确认环节，属于 UI 状态同步问题。虽然不致命，但会误导用户认为变更已推送完成。
- **社区反应**：2 👍 表明这是一个可复现且令人困惑的体验缺陷。

🔗 https://github.com/anthropics/claude-code/issues/30627

---

### 🟡 #73566 — 允许 Claude 听和处理音频
- **标签**：`enhancement` `area:model`
- **热度**：3 评论 / 1 👍
- **诉求**：为 Claude Code 增加音频输入能力，使模型能够"听到"并处理声音。
- **为何重要**：多模态是 AI 开发工具的必然方向。音频输入可以覆盖会议记录、语音指令、实时反馈等场景，补齐当前纯文本交互的短板。
- **社区反应**：早期讨论，但方向明确。

🔗 https://github.com/anthropics/claude-code/issues/73566

---

### 🟡 #86716 — Agent 团队：上下文耗尽时的自动压缩与替换协议
- **标签**：`enhancement` `platform:macos` `area:agents`
- **热度**：2 评论 / 0 👍
- **问题**：长运行的 Agent Team 成员在上下文耗尽后，所有入站消息（包括 `shutdown_request`）均失败，当前唯一方案是手动杀进程并重启替换。
- **为何重要**：这是 Agent 团队长期运行的核心瓶颈。上下文管理是 Agent 可持续工作的前提，缺乏自动压缩/替换机制将限制复杂任务的执行时长。
- **社区反应**：技术讨论较深入，触及了 Agent 编排的底层难题。

🔗 https://github.com/anthropics/claude-code/issues/86716

---

### 🟡 #96833 — MCP 工具未使用最新数据，反而进行不必要的完整性检查
- **标签**：`bug` `platform:macos` `area:model` `area:mcp`
- **状态**：已关闭（needs-repro）
- **问题**：处理简单任务时，MCP 工具未直接修复 15 行脏数据，而是绕道执行"完整性检查"，效率低下。
- **为何重要**：反映了 Agent 在工具选择与任务规划上的智能不足——宁可做多余工作，也不直接执行最小修复路径。
- **社区反应**：用户情绪激动但问题本身指向 Agent 推理逻辑的优化方向。

🔗 https://github.com/anthropics/claude-code/issues/96833

---

### 🟡 #96815 — 症状式修复引发级联错误
- **标签**：`bug` `area:model`
- **状态**：已关闭（needs-repro）
- **问题**：Agent 只修复表面症状而非根因，导致修复后产生新的错误。
- **为何重要**：这是 AI Agent 的经典困境——缺乏系统性思维，只做局部最优解。影响复杂调试和重构场景。
- **社区反应**：用户 frustration 较高，但问题本质涉及模型推理能力的边界。

🔗 https://github.com/anthropics/claude-code/issues/96815

---

### 🟡 #96804 — Claude Code 阻塞网站设计工作流
- **标签**：`bug` `platform:macos`
- **状态**：已关闭（needs-repro）
- **问题**：用户在进行网站设计工作时被 Claude Code 阻塞，无法正常推进。
- **为何重要**：暗示了 Agent 在特定领域（设计/前端）的行为约束或权限控制可能存在过度干预。
- **社区反应**：单条报告，但涉及工作流阻断体验。

🔗 https://github.com/anthropics/claude-code/issues/96804

---

### 🟡 #96760 — Claude 在对话历史中复制代码而未使用用户编写的 Prompt
- **标签**：`bug` `platform:macos` `area:core`
- **状态**：已关闭（needs-repro）
- **问题**：Agent 在未收到用户明确指令的情况下主动复制代码，且在用户纠正后仍继续执行。
- **为何重要**：触及 Agent 自主性与用户控制权的边界问题。过度主动的代码操作会让用户失去对会话的掌控感。
- **社区反应**：用户明确表达了对 Agent "自作主张"的不满。

🔗 https://github.com/anthropics/claude-code/issues/96760

---

### 🟡 #96728 — Claude Code 在收到纠正后退出而非继续执行
- **标签**：`bug` `platform:macos` `area:core`
- **状态**：已关闭（needs-repro）
- **问题**：Agent 在被纠正后直接关闭线程/退出，而非继续执行纠正后的任务。
- **为何重要**：影响 Agent 的鲁棒性。一个合格的 Agent 应当将纠正视为反馈信号而非终止条件。
- **社区反应**：用户情绪激动，但问题指向 Agent 状态管理的健壮性。

🔗 https://github.com/anthropics/claude-code/issues/96728

---

### ⚠️ 社区 Issue 质量观察

过去 24 小时的 50 条 Issue 中，**约 60% 为低质量报告**（已关闭、needs-info、内容为空或无关），集中在 GitHub Integration 连接问题、Web 端功能缺失、以及缺少上下文的泛泛投诉。这表明：
- GitHub Integration 的 onboarding 体验需要优化（大量 "not working" / "not connected" 报告）。
- 自动化 Issue 提示（Preflight Checklist）可能未能有效引导用户提供可操作的诊断信息。

---

## 4. 重要 PR 进展（共 4 条）

### 🔧 #94847 — diff 窗格：首次编辑仅在有文件时打开
- **状态**：`OPEN`
- **作者**：bcherny
- **内容**：修复 diff 窗格在会话首次编辑时自动打开但可能为空的问题。当写入路径在仓库外、被忽略的文件或不同 worktree 时，不再展示空窗格。
- **价值**：提升 diff 体验的准确性，避免误导性空白 UI。

🔗 https://github.com/anthropics/claude-code/pull/94847

---

### 🔙 #98018 — mods：回退两项变更（agents-md 截断读取 + diff 强制颜色）
- **状态**：`CLOSED`
- **作者**：poteat
- **内容**：回退 #96363 和 #96364，恢复 agents-md 和 diff mod 的旧行为。
- **价值**：快速回退机制是健康工程实践的体现，说明社区对 Mod 行为的变更持审慎态度。

🔗 https://github.com/anthropics/claude-code/pull/98018

---

### 🔧 #98555 — diff 对话框：打开所有列出的文件，关闭时无输出
- **状态**：`CLOSED`
- **作者**：poteat
- **内容**：修复 `/diff` 对话框中每个列出的文件都打开 diff 的行为，并确保关闭对话框时有明确输出。
- **价值**：与 #94847 协同，共同改善 diff 工作流的交互一致性。

🔗 https://github.com/anthropics/claude-code/pull/98555

---

### 🔧 #62592 — 更新 security-guidance 插件
- **状态**：`CLOSED`
- **作者**：mhegazy
- **内容**：对 README.md 的一处修改。
- **价值**：文档维护，安全相关插件的持续更新。

🔗 https://github.com/anthropics/claude-code/pull/62592

---

## 5. 功能需求趋势

从社区 Issue 中提炼出以下高频功能方向：

| 方向 | 相关 Issue | 热度 |
|---|---|---|
| **Agent 协同与编排** | #79507（分布式团队）、#86716（上下文压缩协议） | 🔥🔥🔥 |
| **多模态输入** | #73566（音频处理） | 🔥🔥 |
| **插件/Mod 系统扩展** | v2.1.287 发布、#98018（Mod 回退） | 🔥🔥 |
| **MCP 工具智能优化** | #96833（工具选择逻辑） | 🔥 |
| **Desktop App UI/UX** | #30627（计数刷新）、#94847/#98555（diff 窗格） | 🔥🔥 |
| **GitHub Integration 稳定性** | 大量 needs-info 关闭的连接问题 | 🔥🔥 |

**核心趋势**：社区正从"单体 Agent"向"多 Agent 协作生态"演进，同时对插件系统的灵活性和工具调用的可靠性提出更高要求。

---

## 6. 开发者关注点

总结当前开发者反馈中的核心痛点：

1. **工具调用可靠性**：#68354 暴露的 XML 渲染问题是最紧迫的阻断性 Bug，直接影响 Agent 核心能力的可用性。

2. **Agent 自主性边界**：#96760、#96728、#96815 反映出同一个核心矛盾——开发者希望 Agent 足够智能以自主完成任务，但又需要保持对执行过程的控制权。"纠正后退出"和"症状式修复"都是 Agent 缺乏韧性和系统思维的表现。

3. **长运行 Agent 的可持续

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>



# OpenAI Codex 社区动态日报
**日期：** 2026-10-02
**数据来源：** GitHub openai/codex

---

### 1. 今日速览
Codex CLI 迎来了稳定的 **v0.160.0 版本**，重点优化了命令中心的全屏键盘交互与 Linux 终端下的中键粘贴体验，同时 v0.161.0 的多个 Alpha 版本持续推进内部架构调整。社区方面，Windows 平台的稳定性与兼容性成为最受关注的议题（如 CLI 启动崩溃、组织设置加载失败及远程配对循环），同时开发者对沙箱模式下的 GPU 访问限制以及长会话存储膨胀问题表达了强烈诉求。

---

### 2. 版本发布

#### **稳定版：v0.160.0**
本次更新主要聚焦于终端用户体验（UX）和工作流优化：
*   **命令中心增强**：新增键盘可访问的“Show more”操作，方便用户在代理命令中心浏览历史任务（#49106）。
*   **全屏交互优化**：支持在本地 Linux X11 终端的全屏模式下，使用中键选择并粘贴文本（#49112）。
*   **工作区灵活性**：允许在不关联特定项目的情况下，使用工作区默认配置启动会话。

#### **测试版：v0.161.0-alpha 系列 & v0.159.0-alpha.12.1**
*   发布了 `v0.161.0-alpha.6` 至 `alpha.13` 的多个迭代版本，主要进行底层 API 重构和功能预埋。
*   发布 `v0.159.0-alpha.12.1`，包含针对桌面端 260930 train 的 MXC PowerShell 修复及安全发布策略的回溯移植（Backport）。

---

### 3. 社区热点 Issues（Top 10）

以下是过去一段时间内社区讨论最热烈、技术影响最显著的 Issue：

| 排名 | Issue ID | 标题 / 核心问题 | 状态 | 互动热度 | 分析与重要性 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1** | [#48043](https://github.com/openai/codex/issues/48043) | **Codex CLI 0.157.0 在 Windows 上因 daemon 权限错误无法启动** | OPEN | 56 评论 / 41 👍 | **严重阻塞性 Bug**。大量 Windows 用户升级后 CLI 彻底无法使用，涉及权限管理冲突，是当前社区最 urgent 的问题。 |
| **2** | [#48324](https://github.com/openai/codex/issues/48324) | **Windows 桌面端 ChatGPT 中 Codex 提示“无法加载组织设置”** | OPEN | 34 评论 / 5 👍 | 阻断了 Windows 桌面端 Codex 的整个输入/会话流程，用户无法获取 session ID

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>



以下是为您整理的 **2026-10-02 Gemini CLI 社区动态日报**。数据覆盖了过去 24 小时内 GitHub 上的最新发布、热门 Issue 和重要 Pull Request。

---

# Gemini CLI 社区动态

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-10-02** ｜ 数据来源：github.com/github/copilot-cli

---

## 1. 今日速览

过去 24 小时内，Copilot CLI 连续发布 4 个版本（v1.0.91 系列及 v1.0.92-0），重点围绕 **沙箱 CA 信任管理（`copilot sandbox ca`）**、**OAuth 重认证后 MCP 工具可用性** 以及 **会话状态与遥测的健壮性** 修复。社区侧热度集中在 **多 BYOK 模型支持**（#3282，31 👍，已关闭）、**过度权限申请**（#953）与 **Autopilot 权限模型缺陷**（#5031）。同时，macOS 重启后写入锁失效（#4998/#5026）等跨平台稳定性问题持续发酵。

---

## 2. 版本发布

| 版本 | 类型 | 主要内容 |
|---|---|---|
| **v1.0.92-0** | Fixed | 修复 OAuth 重新认证后，只要 MCP 工具定义未变更，工具即可继续正常工作（此前重认证会中断 MCP 工具链）。 |
| **v1.0.91** | 综合 | ① 新增 `copilot sandbox ca` 命令族：check / create / trust / rotate / remove 代理 CA 信任，支持 Windows 无人值守安装；原 `/sandbox ca install` 拆分为 `create` 与 `trust`。② 会话时间线在被打断的轮次结束后正确清除 busy 状态。③ 沙箱命令支持 Windows。 |
| **v1.0.91-1** | Added / Improved | 同上新增 `copilot sandbox ca` 命令；改进：CLI 关闭时会先刷新待发送遥测数据再退出，并对遥测发送设置有限等待时长，避免卡死。 |
| **v1.0.91-0** | Improved / Fixed | ① 完整且可静态分析的只读 shell 管道可进入"执行证据审查"流程，不完整或未绑定的管道仍需显式批准。② 修复 Windows 上 Node/npm 因 EACCES socket 拒绝时的沙箱网络绕过问题。 |

> 小结：本批更新主线是**企业/沙箱安全能力**（CA 信任、只读管道审查）与**退出/重认证等边界场景的稳定性**。

---

## 3. 社区热点 Issues（Top 10）

1. **#3282 [CLOSED] 支持多 BYOK 模型** ｜ 12 评论 · 31 👍
   当前 CLI 仅支持通过环境变量配置单个 BYOK 模型，TUI 内无法切换，必须终止会话重设 env。这是今日点赞最高的需求，已关闭，说明官方可能已排期或实现。
   https://github.com/github/copilot-cli/issues/3282

2. **#953 [OPEN] 认证权限过度申请** ｜ 8 评论 · 5 👍
   用户希望限制 AI 可访问的仓库与 GitHub 范围；当前 OAuth 一次性申请账户级 Read/Write 权限，对只想操作单个仓库的开发者过于激进。企业安全敏感度最高的长期议题。
   https://github.com/github/copilot-cli/issues/953

3. **#5008 [OPEN] 1.0.89 启动报 "Not authenticated"** ｜ 6 评论 · 5 👍
   每次新交互会话启动后报错两次，约 3 秒后登录完成、功能正常——典型启动竞态（新会话在 token 就绪前读取模型归属）。影响面广、体感差。
   https://github.com/github/copilot-cli/issues/5008

4. **#4851 [OPEN] Azure MCP server 发送 HTTP 请求失败** ｜ 5 评论 · 8 👍
   使用数月的 Azure MCP registry 突然失效，Rust runtime 在验证 Azure API Center MCP registry 时抛 BrokenPipe。企业 MCP 集成的高优先级回归。
   https://github.com/github/copilot-cli/issues/4851

5. **#4998 [OPEN] macOS 更新/重启后 `.mcp-writer.binding` 残留过期设备 ID** ｜ 5 评论 · 4 👍
   系统安全更新重启后，新旧会话均无法处理 prompt，根因是持久化的文件系统 device ID 失效（与 #5026 同源）。跨平台健壮性痛点。
   https://github.com/github/copilot-cli/issues/4998

6. **#2203 [OPEN] 允许任务中途切换到 Autopilot 模式** ｜ 2 评论 · 11 👍
   0.0.421 之前可用 Shift+Tab 在任务执行中切换，现已被移除，破坏既有工作流。点赞数高，属于典型"功能回退"诉求。
   https://github.com/github/copilot-cli/issues/2203

7. **#5031 [OPEN] 任务运行中启用 Autopilot 导致工具调用全部权限报错** ｜ 今日新增
   长任务以非 Autopilot 启动后再开启 Autopilot，所有工具调用开始报 "Permission denied and could not request permission from user"。harness 疑似仍沿用初始权限设置，是权限模型的设计缺陷。
   https://github.com/github/copilot-cli/issues/5031

8. **#5035 [OPEN] CLI 更新停止，`events.jsonl` 持续增长** ｜ 今日新增
   多个会话中出现 UI 未死锁但不再接收更新，底层 agent 仍在运行，events.jsonl 无限膨胀。涉及长会话稳定性与磁盘占用。
   https://github.com/github/copilot-cli/issues/5035

9. **#4959 [OPEN] 企业托管 `model` 设置被接收但未生效** ｜ 2 评论 · 3 👍
   `.github-private` 中 `copilot/managed-settings.json` 的 `{"model": "auto"}` 已由服务端下发（日志显示 keys=[model,permissions]），但 model resolver 仍选择其他模型。企业策略合规风险。
   https://github.com/github/copilot-cli/issues/4959

10. **#5023 [OPEN] 会话恢复失败：被脱敏的代码变更指标把 shutdown 计数写成字符串** ｜ 今日更新
    文件编辑工具的 `toolTelemetry.metrics` 中计数被脱敏为字符串后，会话永久无法 resume。数据序列化与容错问题。
    https://github.com/github/copilot-cli/issues/5023

**其他值得关注**：#5030（1.0.89 起 ACP 模式无法启动自定义 agent，"Unsupported native sessions host effect 'custom_agent_prompt'"）、#4989（`allowedMcpServers` 的 `serverName` 匹配永远失败）、#4938（GHEC-DR 租户下 SDK 会话级 token 仍路由到 api.github.com）、#5022（Windows 下 VS Code agent host 重复注入 instructions）、#5032（`Copilot-Session` 尾注破坏 co-authorship）。

---

## 4. 重要 PR 进展

> 过去 24 小时内，仓库仅有 **1 条** PR 更新，未达到 10 条，如实列出如下：

- **#5036 [OPEN] Update default model version in README** ｜ 作者：mjgard
  更新文档以反映 Copilot CLI 当前默认模型版本，属纯文档修正，附有截图对比。
  https://github.com/github/copilot-cli/pull/5036

> 说明：本周期 PR 活跃度极低（仅 1 条且为文档类），与版本发布密集形成反差，可能表明代码变更正通过内部流程合并或处于发布冻结窗口。

---

## 5. 功能需求趋势

从本批 40 条 Issues 可提炼出以下社区关注方向：

- **多模型与 BYOK 灵活切换**：单模型 env 限制、企业托管 model 未生效、默认模型文档更新，模型配置能力是最高频诉求。
- **企业级管控与权限最小化**：仓库级/范围级权限（#953）、企业 allowlist（#4989）、managed settings（#4959）、GHEC-DR 端点路由（#4938），企业合规场景问题集中爆发。
- **MCP 生态稳定性**：Azure MCP 注册表失效、macOS 写入锁失效、`serverName` 匹配失败、MCP 状态通知噪音（#5034），MCP 已从"能用"进入"稳定可用"阶段。
- **Autopilot 权限语义**：中途切换、运行中启用、暂停等待确认（#3595）——社区希望 Autopilot 的权限与交互模型更可预测。
- **会话生命周期与持久化**：resume 失败、时间线 busy 状态、events.jsonl 膨胀、scheduled prompts 不触发（#4137）。
- **跨平台体验（Windows / macOS）**：CMD 闪窗（#3171）、EACCES 网络绕过、指令重复注入（#5022）、重启后不可用。
- **IDE / ACP 集成**：ACP 模式自定义 agent 失效（#5030）、VS Code agent host 行为异常。

---

## 6. 开发者关注点（痛点与高频需求）

1. **启动与认证竞态**：1.0.89 起 "Not authenticated" 报错（#5008）与 OAuth 重认证后 MCP 中断（已在 v1.0.92-0 修复）反映认证状态机仍不够健壮。
2. **重启后环境漂移**：macOS 系统更新后设备 ID 变化导致 CLI 完全不可用（#4998、#5026），用户期望锁文件能自愈而非手动清理。
3. **权限模型不一致**：Autopilot 中途切换导致工具全量失败（#5031），且过度申请账户权限（#953）长期未解，安全与可用性两头受挤压。
4. **会话可恢复性**：脱敏指标写坏计数器（#5023）、resume 找不到会话（#2303），持久化格式缺乏向前/向后兼容与校验。
5. **长会话与日志膨胀**：events.jsonl 无限增长（#5035）影响稳定性与磁盘。
6. **企业策略"下发了但不生效"**：managed settings、allowlist、数据驻留端点等问题重复出现，说明企业控制面链路存在系统性缺陷。
7. **输出与交互噪音**：MCP 状态通知（#5034）、Autopilot "Task complete" 重复摘要（#5033）等"体验降噪"类小需求增多，反映重度用户对信息密度的敏感。

---

*注：本日报基于给定 GitHub 数据生成；PR 部分因过去 24 小时仅有 1 条更新，未凑满 10 条，以如实呈现为准。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

Thinking Process:

1.  **Understand the Goal**: The user wants a Chinese daily report (dated 2026-10-02) for the OpenCode community (`github.com/anomalyco/opencode`) based on the provided GitHub data (Releases, Issues, Pull Requests). The persona is a technical analyst focused on AI development tools.

2.  **Analyze the Input Data**:
    *   **Date**: 2026-10-02 (based on the prompt's context "根据以下 GitHub 数据，生成 2026-10-02 的 OpenCode 社区动态日报").
    *   **Latest Releases (past 24h)**:
        *   `v1.18.34`: Core bug fixes (Send namespaced session and parent-session identity headers with model requests; Re-sign locally compiled macOS binaries so they run reliably on macOS 27+ by @ryangamerdev; Sign macOS CLI release binaries with a Developer ID). Thanks to 3 community contributors (one is blanked out in the prompt text).
    *   **Latest Issues (past 24h, top 30 by comments)**:
        *   #38257 [CLOSED] [Bug] OpenCode Go: return 401 Request blocked by upstream provider — chat/completions blocked while /v1/models works (54 comments, 13 👍) - Major pain point for Go subscribers.
        *   #29363 [CLOSED] Bug: `limit.output` in config is silently capped at 32k; `OPENCODE_EXPERIMENTAL_OUTPUT_TOKEN_MAX` is a poor workaround (26 comments, 29 👍) - Configuration limitation on output tokens.
        *   #38195 [CLOSED] 401 AuthError: Request blocked by upstream provider (25 comments, 18 👍) - Similar Go subscription issue.
        *   #15988 [CLOSED] [FEATURE]: Add "Retry Now" button to skip rate limit retry countdown (18 comments, 28 👍) - UX feature request.
        *   #38293 [CLOSED] здравствуйте у меня не работает подписка Go (15 comments) - Russian user reporting Go subscription issue.
        *   #38216 [CLOSED] Request blocked by upstream provider (14 comments, 8 👍) - Go subscription issue.
        *   #30545 [CLOSED] desktop can not see File tree (12 comments) - Desktop UI issue.
        *   #43355 [CLOSED] [Desktop] UI freezes after agent turns finish — renderer stuck in ResizeObserver loop (8 comments) - Desktop performance/UI freeze bug.
        *   #43102 [CLOSED] Opencode is unavailable - Upstream request failed: Endpoint is unavailable (7 comments) - Endpoint availability.
        *   #37628 [CLOSED] When installed npm install -g opencode-ai getting 16bit issue (7 comments) - Windows 16-bit installer issue.
        *   #40055 [CLOSED] Request blocked by upstream provider (7 comments, 1 👍) - Go subscription issue.
        *   #34407 [CLOSED] CLI: LaTeX math formulas rendered as raw text instead of being rendered in terminal (6 comments, 3 👍) - LaTeX rendering in CLI.
        *   #39170 [CLOSED] Desktop app does not render inline LaTeX math ($...$) (6 comments, 3 👍) - LaTeX rendering in Desktop.
        *   #38323 [CLOSED] Request blocked by upstream provider (6 comments) - Go subscription.
        *   #28971 [CLOSED] [Desktop BETA] Sidebar missing (6 comments) - UI layout issue.
        *   #42787 [CLOSED] Upstream request failed: Endpoint is unavailable (5 comments, 5 👍) - Endpoint issue.
        *   #42750 [CLOSED] Upstream request failed: Endpoint is unavailable (5 comments) - Endpoint issue.
        *   #37742 [CLOSED] [FEATURE]: Clickable microphone button in OpenCode Desktop app (5 comments, 1 👍) - Voice input feature.
        *   #38524 [CLOSED] Support RTL/BiDi text rendering in CLI output (5 comments) - RTL support (Hebrew, Arabic).
        *   #48237 [CLOSED] fix(app): auto-accept toggle disabled when no session is open (5 comments) - Settings UI bug.
        *   #37617 [CLOSED] Desktop v1.18.3 — "Auto-accept permissions" settings toggle permanently disabled (cursor: not-allowed) (5 comments, 1 👍) - Settings UI bug.
        *   #26344 [CLOSED] Github Copilot not working anymore - forbidden (5 comments, 1 👍) - Copilot auth issue.
        *   #20612 [CLOSED] [FEATURE]: Zen / Go - The Ability to be able to gift accounts (5 comments, 5 👍) - Feature request for account gifting.
        *   #39451 [CLOSED] [Bug] Kimi K3: HTTP 400 "assistant message must not be empty" when switching models mid-session (4 comments) - Model switching bug.
        *   #49486 [CLOSED] [CLI / TUI] LaTeX math formulas ($...$, ...) rendered as raw text without formatting (4 comments, 1 👍) - LaTeX formatting.
        *   #40286 [CLOSED] RTL/bidi broken for mixed Arabic-script + Latin text in TUI (4 comments) - RTL rendering bug.
        *   #37508 [CLOSED] Workspaces are gone in 1.18.3 (4 comments, 6 👍) - Missing workspace feature in new UI.
        *   #39215 [CLOSED] [Bug] OpenCode Go — "Request blocked by upstream provider" (HTTP 401) on all models despite active subscription (4 comments, 3 👍) - Go subscription issue.
        *   #38473 [CLOSED] Request blocked by upstream provider (4 comments) - Go subscription issue.
        *   #49742 [OPEN] Message timestamp option is missing in OpenCode CLI v2.0.8 (4 comments, 1 👍) - Missing timestamp feature in v2.0.8.
    *   **Latest PRs (past 24h, top 20 by comments/activity)**:
        *   #51657 [CLOSED] fix(tui): surface clipboard write failures (fixes clipboard silent failures).
        *   #46546 [CLOSED] [contributor, automated-pr-cleanup] fix(app): raise composer popover contrast (UI dark mode contrast fix).
        *   #46544 [CLOSED] fix(core): fold title usage into session stats and record generate usage (fixes billing/stats tracking for title generation).
        *   #46537 [CLOSED] fix(tui): show real duration for subagents over 60 minutes (TUI subagent duration calculation bug).
        *   #46530 [CLOSED] feat(plugin): expose permission assertions (Adds plugin-only `ctx.permission.assert`).
        *   #46509 [CLOSED] fix(core): preserve approvals across location cleanup (Fixes spinner lock when returning to sessions waiting for permission).
        *   #46502 [CLOSED] fix(tui): render boxed LaTeX with local fallback (LaTeX rendering fallback for fenced blocks).
        *   #46501 [CLOSED] fix(opencode): request summaries in Bedrock GPT-5 variants (Bedrock Converse GPT-5 reasoning summary support).
        *   #46499 [CLOSED] feat(app): edit files in the review pane (Upgrades `@pierre/diffs` to 1.3.6, lazy-load native editor in desktop review pane).
        *   #46495 [CLOSED] fix(core): match absolute permission rules for relative paths (Absolute rule matching for Location-relative paths).
        *   #46489 [CLOSED] fix(tui): settle parked session tabs (Fixes busy status on parked synthetic context tabs).
        *   #46484 [CLOSED] feat(opencode): bundle merge-gateway-ai-sdk-provider (Fixes offline/proxy install failures by bundling the provider).
        *   #46482 [CLOSED] fix(provider): support Cloudflare Workers AI sessions (Fixes Cloudflare Workers AI model issues).
        *   #46477 [CLOSED] fix(core): reject duplicate patch targets like Codex (Rejects duplicate file operations targeting the same path).
        *   #46474 [CLOSED] fix(desktop): separate unpackaged app identity (Windows AppUserModelID fix).
        *   #46456 [CLOSED] fix(tui): speed up clipboard image paste (Speeds up clipboard image pasting).
        *   #46450 [CLOSED] fix(desktop): protect packaged renderer scripts (Adds CSP to packaged renderer HTML).
        *   #46436 [CLOSED] fix: intermittent first-request stall on Bun serve under CPU load (Fixes Bun serve first request hang).
        *   #46423 [CLOSED] fix(app): preserve restored reference paths (Fixes reference alias restoration).
        *   #46418 [CLOSED] fix(app): robust client-side image attachments (Fixes image attachments failing on insecure origins).

3.  **Drafting the Report Sections**:

    *   **1. 今日速览 (Today's Overview)**:
        *   Summarize the core developments: Release of v1.18.34 focusing on macOS binary signing and identity headers; community heat concentrated on "OpenCode Go" subscription 401 errors and output token limits; active development on desktop UI fixes, LaTeX rendering, and provider integrations (Cloudflare Workers AI, Bedrock GPT-5).
        *   Keep it concise (2-3 sentences).

    *   **2. 版本发布 (Version Release)**:
        *   Mention v1.18.34.
        *   Key updates:
            *   Core: Send namespaced session and parent-session identity headers with model requests (improves routing/identity handling).
            *   macOS: Re-signs locally compiled binaries for macOS 27+ compatibility (@ryangamerdev) and signs CLI release binaries with a Developer ID (improves trust and execution on latest macOS).
            *   Contributor thanks: Mention community contribution.

    *   **3. 社区热点 Issues (Top 10 Hot Issues)**:
        *   Need to select 10 of the most impactful/recurring ones. Note that many are marked [CLOSED], but they represent the major discussions and historical heat, or recent closures. Let's look at the comment counts and 👍 counts.
        *   *Selection criteria*: High comments, high likes, recurring themes (Go subscription auth, output token limits, LaTeX rendering, UI freezes, etc.).
        *   *Issue list to select*:
            1.  **#38257** (54 comments, 13 👍): OpenCode Go subscription 401 "Request blocked by upstream provider" on `chat/completions` while `/v1/models` works. (Critical blocker for Go users).
            2.  **#29363** (26 comments, 29 👍): `limit.output` silently capped at 32k, requiring experimental env vars for larger outputs (e.g., 384k for DeepSeek). (Highly upvoted config limitation).
            3.  **#38195** (25 comments, 18 👍): Another major Go subscription 401 AuthError report.
            4.  **#15988** (18 comments, 28 👍): Feature request for "Retry Now" button to skip rate limit countdown. (High UX demand).
            5.  **#30545** (12 comments): Desktop file tree not showing up even after enabling in settings.
            6.  **#43355** (8 comments): Desktop UI freezes after agent turns finish (Electron renderer ResizeObserver loop bug).
            7.  **#34407 / #39170 / #49486** (Group or pick the most representative): LaTeX math formulas rendering as raw text in CLI/TUI and Desktop (inline vs block). Let's pick **#34407** (CLI LaTeX raw text) and **#39170** (Desktop inline LaTeX) or just highlight the LaTeX rendering issue as a category, but the prompt says "挑选 10 个最值得关注的 Issue". I will list individual ones. Let's list **#34407** (CLI LaTeX) and **#39170** (Desktop inline math).
            8.  **#37628** (7 comments): npm global install `opencode-ai` causing 16-bit Windows compatibility issue.
            9.  **#37508** (4 comments, 6 👍): Workspaces missing in the new UI of v1.18.3.
            10. **#37742** (5 comments): Request for clickable microphone button in Desktop app for voice input.
            11. **#38524** (5 comments): RTL/BiDi text rendering support in CLI (Hebrew, Arabic).
        *   Let's write down the top 10 clearly, highlighting why they are important (e.g., Go subscription issues represent a major monetization/user retention bottleneck; token cap impacts advanced LLM workflows; LaTeX and RTL rendering affect internationalization and technical writing UX).

    *   **4. 重要 PR 进展 (Top 10 Important PRs)**:
        *   Select 10 PRs that represent significant improvements, security fixes, or feature additions.
        *   *List of PRs to select*:
            1.  **#51657**: `fix(tui): surface clipboard write failures` - Fixes silent clipboard failures on X11, improving UX reliability.
            2.  **#46484**: `feat(opencode): bundle merge-gateway-ai-sdk-provider` - Bundles the provider to avoid runtime npm install failures under proxy/offline environments. Crucial for enterprise/offline use.
            3.  **#46499**: `feat(app): edit files in the review pane` - Big desktop feature: upgrades diff editor, allows full file editing with save/undo/redo in desktop review pane.
            4.  **#46530**: `feat(plugin): expose permission assertions` - Enhances plugin security/ capability by exposing `ctx.permission.assert`.
            5.  **#46501**: `fix(opencode): request summaries in Bedrock GPT-5 variants` - Adds reasoning summary auto-request for Bedrock GPT-5, improving model integration.
            6.  **#46482**: `fix(provider): support Cloudflare Workers AI sessions` - Expands provider support to Cloudflare Workers AI.
            7.  **#46544**: `fix(core): fold title usage into session stats and record generate usage` - Fixes billing/stats tracking accuracy (important for cost monitoring).
            8.  **#46450**: `fix(desktop): protect packaged renderer scripts` - Security improvement: adds CSP to packaged renderer HTML to limit executable scripts.
            9.  **#46477**: `fix(core): reject duplicate patch targets like Codex` - Improves patch generation safety by rejecting duplicate file targets.
            10. **#46502**: `fix(tui): render boxed LaTeX with local fallback` - Part of the LaTeX rendering improvement, providing readable fallback for fenced LaTeX.
            11. **#46456**: `fix(tui): speed up clipboard image paste` - Performance improvement for pasting images.
            12. **#46436**: `fix: intermittent first-request stall on Bun serve under CPU load` - Performance/stability fix for Bun users.
        *   Let's write down 10 key ones with clear technical summaries.

    *   **5. 功能需求趋势 (Feature Demand Trends)**:
        *   Extracted from the issues:
            *   **Go Subscription & Billing/Account Management**: Multiple issues regarding "Request blocked by upstream provider" (401 errors) for Go subscribers, account gifting (#20612), and accurate cost/usage tracking (#46544 in PRs).
            *   **Model Configuration & Flexibility**: Silent capping of output tokens (`limit.output` capped at 32k, #29363) and model-specific bugs (Kimi K3 empty message error #39451, Bedrock GPT-5 summaries). Users want deeper configuration control.
            *   **Terminal/UI Rendering & Accessibility**: LaTeX math rendering (CLI raw text, Desktop inline math), RTL/BiDi text support (Hebrew/Arabic), and UI layout issues (sidebar missing, file tree invisible, workspaces missing in new UI).
            *   **Desktop App Enhancements**: Voice input button (#37742), auto-accept toggle UI fixes (#48237, #37617), review pane file editing (#46499), and general Electron performance stability (ResizeObserver freeze #43355).
            *   **UX微交互 (Micro-interactions/UX)**: "Retry Now" button for rate limits (#15988), message timestamps in CLI v2 (#49742).

    *   **6. 开发者关注点 (Developer Pain Points/Focus Areas)**:
        *   Summarize the core pain points:
            *   **Auth & Upstream Provider Reliability**: The heavy volume of "Request blocked by upstream provider" (401) issues for Go subscribers suggests server-side gateway auth routing issues, which severely impacts paid user trust.
            *   **Configuration transparency**: The silent 32k token cap without clear documentation forces users to use obscure environment variables (`OPENCODE_EXPERIMENTAL_OUTPUT_TOKEN_MAX`), causing frustration for advanced users running large context models.
            *   **Desktop vs CLI Feature Parity & UI

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



# Pi 社区动态日报（2026-10-02）

> **数据来源**：[github.com/earendil-works/pi](https://github.com/earendil-works/pi)  
> **分析师视角**：专注于 AI 开发工具的技术分析师为您梳理每日社区关键动态、核心 Bug 修复及生态趋势。

---

### 1. 今日速览

*   **里程碑版本 `v1.0.0` 发布**：Pi 默认启用全屏 TUI 模式，带来更现代、沉浸的终端视觉体验，同时对包管理架构（如移除 Shrinkwrap）进行了深层优化。
*   **社区焦点集中于稳定性与性能修复**：过去一天内，社区针对全屏重绘风暴（#9255）、ESC 锁

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

The user wants me to generate a daily community report for Qwen Code (GitHub repo QwenLM/qwen-code) based on the provided GitHub data for 2026-10-02.

Let's break down the required sections:
1. **今日速览** (Today's Overview) - 2-3 sentences summarizing the most important events today.
2. **版本发布** (Releases) - Summarize the latest releases in the past 24 hours if any.
3. **社区热点 Issues** (Hot Issues) - Select 10 most notable Issues, explain why they are important and community reactions.
4. **重要 PR 进展** (Important PR Progress) - Select 10 important PRs, explaining what they do.
5. **功能需求趋势** (Feature Request Trends) - Extract the main feature directions community cares about (e.g., IDE integration, performance, new model support, etc.).
6. **开发者关注点** (Developer Focus/Pain Points) - Summarize the pain points or high-frequency needs from developer feedback.

Let's carefully analyze the data provided:

### Releases:
- `v0.24.7-nightly.20261001.a7deb01bcb` (Release v0.24.7-nightly.20261001.a7deb01bcb)
  - What's Changed:
    * fix(core): align Code Mode text with lazy tool discovery by @tanzhenxin in https://github.com/QwenLM/qwen-code/pull/12990
    * fix(permissions): honor approved...
- `v0.24.7-nightly.20260930.57e720bc97` (older, but listed under past 24h in the prompt context, though the date is Oct 1st / Sep 30th).
We have two releases listed. Let's describe them.

### Issues (Selected top ones by comments):
Let's look at the top issues with the most comments and those that are highly relevant:
1. **#12380** - proposal(serve): Define Managed Agent dual-path architecture and staged delivery (38 comments). Focuses on Managed Agent architecture, staged delivery, durable ownership, etc. Very important architectural proposal.
2. **#12028** - tracking(core): non-conversation context token governance (18 comments). Focuses on token optimization, system prompts, tool schemas, context files taking too much token space.
3. **#12867** - feat(managed-agent): Stage D follow-ups for durable lifecycle, Turns, Actions, durable admission and AgentDefinition (17 comments).
4. **#12737** - feat(acp-bridge): Stage B host integration for paired Legacy and Managed engines (14 comments).
5. **#13030** - feat(managed-agent): Admit read-only search tools in a new Hosted Workspace profile (9 comments).
6. **#12333** - feat(ci): the token work has no recall or task-success gate — teach the existing benchmark to compare two configurations (8 comments).
7. **#12889** - Deferred `tool_call` schema allows empty arguments for tools with required fields (7 comments). Bug report about tool call schema.
8. **#12042** - core/cli: record provenance does not survive the api-history projection (7 comments).
9. **#12952** - feat(managed-agent): Stage G authoritative Session history, writer fencing and takeover (6 comments).
10. **#11590** - qwen code自动插入metadata导致厂商模型报错不可用 (6 comments, CLOSED). Important integration bug for third-party models (auto-inserted metadata causes vendor model errors).
11. **#13106** - fix(core): cd segments silently drop redirect targets from Write deny checks (5 comments, P1 bug). Security permission bypass bug.
12. **#13113** - Session becomes unopenable: "Transcript snapshot is too large to index" — file_history_snapshot grows quadratically and the 256 MiB index limit is hardcoded (4 comments, P1 bug). Crucial session crash/limit bug.
13. **#13157** - Agent Host: run the confinement guard before the permission flow so out-of-workspace calls don't end the run (5 comments).
14. **#13078** - Daily dependency CVE audit failed (5 comments). Security/dependency audit failure.
15. **#13145** - fix(memory): MEMORY.md index truncation cuts the link target and leaves a dangling ellipsis (4 comments).

Let's select the 10 most important/notable Issues for the report:
- **#12380** (Managed Agent architecture proposal, 38 comments - high architectural significance)
- **#12028** (Non-conversation context token governance, 18 comments - critical for large context models & cost optimization)
- **#12867** (Stage D follow-ups for Managed Agent, 17 comments)
- **#12737** (Stage B host integration for paired engines, 14 comments)
- **#11590** (Auto-inserted metadata breaks vendor models, 6 comments - closed but highly relevant to multi-model compatibility)
- **#13106** (P1 security bug: `cd` segments drop redirect targets from Write deny checks, 5 comments - security permission bypass)
- **#13113** (P1 session crash: Transcript snapshot too large to index due to quadratic growth, 4 comments - critical blocker for long sessions)
- **#12889** (Deferred tool_call schema allows empty arguments, 7 comments - tool calling correctness bug)
- **#12042** (Provenance does not survive api-history projection, 7 comments - data integrity issue)
- **#13157** (Confinement guard ordering issue in Agent Host, 5 comments - sandbox security/permission flow issue)

### PRs (Top ones by updates/activities):
Let's look at the PRs provided:
- **#13156** - fix(memory): keep MEMORY.md index link targets resolvable (fixes #13145)
- **#13146** - fix(serve): let Web Shell trust a workspace without a terminal
- **#12280** - fix(core): keep Write deny rules when quoting hides the async operator (fixes #12246, security permission bypass)
- **#13165** - fix(web-shell): stop offering a Managed approval the viewer cannot answer
- **#13033** - feat(core): defer agent and goal declarations by default (lazy tool discovery)
- **#9417** - fix(core): keep heredoc bodies out of permission rule splitting (fixes #9381)
- **#13112** - feat(managed-agent): let a Workspace-bound Session's creator submit, cancel and rename (crucial for multi-user session collaboration)
- **#13167** - feat(managed-agent): Run Managed session tools in a Runtime worker (M5a) (major architectural step for Managed Agent)
- **#13154** - fix(web-shell): stop the memory panel replacing a global QWEN.md it could not read
- **#13166** - feat(managed-agent): admit glob in new hosted-workspace /2 profiles
- **#13149** - ci: report the test code each pull request adds
- **#13136** - fix(managed-hooks): bound Hook admission and cold restore cost
- **#13176** - fix(web-shell): preserve authentication fragment on offline retry
- **#13129** - feat(managed-agent): implement durable Hosted Hooks (H2) (major feature)
- **#13163** - fix(managed-agent): stop a bound Turn under refused authorization
- **#13158** - feat(memory): opt-in extraction cooldown and selector skip experiments
- **#13144** - fix(managed-agent): Validate undo receipts and disclose backup limits
- **#13172** - fix(ci): stabilize hosted browser smoke gates

Let's select 10 important PRs:
- **#13167** - feat(managed-agent): Run Managed session tools in a Runtime worker (M5a) - Major progress on the Managed Agent architecture, executing tool calls in isolated runtime workers.
- **#13129** - feat(managed-agent): implement durable Hosted Hooks (H2) - Introduces durable Hook catalogs and execution for Hosted Workspace sessions.
- **#13112** - feat(managed-agent): let a Workspace-bound Session's creator submit, cancel and rename - Resolves a critical limitation where creators couldn't interact with sessions after creation.
- **#13033** - feat(core): defer agent and goal declarations by default - Implements lazy discovery for coordination tools, improving default performance and reducing context load.
- **#12280** - fix(core): keep Write deny rules when quoting hides the async operator - Fixes a critical security vulnerability where write protections could be bypassed using shell quoting and backgrounding.
- **#9417** - fix(core): keep heredoc bodies out of permission rule splitting - Fixes permission matching logic for heredocs, ensuring proper security boundaries.
- **#13156** - fix(memory): keep MEMORY.md index link targets resolvable - Fixes index truncation issue in managed-memory to prevent broken links.
- **#13146** - fix(serve): let Web Shell trust a workspace without a terminal - Improves Web Shell workspace trust flows.
- **#13165** - fix(web-shell): stop offering a Managed approval the viewer cannot answer - Improves UI behavior when unauthorized users attempt to answer approvals.
- **#13158** - feat(memory): opt-in extraction cooldown and selector skip experiments - Introduces performance optimizations for memory extraction.

### Trends & Developer Pain Points (功能需求趋势 & 开发者关注点):
Let's synthesize the trends from the issues and PRs:
- **Managed Agent Architecture (#12380, #12867, #12737, #12952, PRs like #13167, #13129, #13112)**: Massive focus on the "Managed Agent" engine. It's moving towards a dual-path architecture (Legacy vs Managed), durable session lifecycles, hosted hooks, and runtime-isolated tool executions. This is the core strategic direction of the repo right now.
- **Token Optimization & Context Governance (#12028, #12333, #13003, #13004, PR #13033, #13158)**: Developers and the system are paying heavy attention to token costs and context window management. Issues like non-conversation context overhead (system prompts, tool schemas) and memory extraction optimization (cooldowns, selector shortcuts) are highly active.
- **Security, Permissions and Sandboxing (#13106, #12280, #9417, #13157, #12889)**: Several critical security fixes regarding shell command parsing, write denial checks, redirections, and confinement guards. Security hardening of the tool execution layer is a major focus.
- **Web Shell & Platform Distribution UX (#13146, #13165, #13176, #13175, #13111)**: Web Shell improvements, trust flows, offline retry authentication, and keyboard shortcuts, showing a push to improve the browser-based and hosted distribution experience.
- **Long-session Stability and Crash Fixes (#13113, #13017, #13078)**: Fixing index limits for long sessions, flaky tests, and dependency CVEs.

Let's structure the report beautifully in Chinese, keeping it concise, technical, and professional.

Let's write down the content for each section:

#### 1. 今日速览
Qwen Code 社区今日活跃度极高，核心焦点集中在 **Managed Agent（托管代理）架构** 的全面设计与阶段性落地，包括运行时隔离、持久化 Hooks 及会话权限管理等多项重大 PR 推进。同时，社区针对 **Token 治理与长上下文开销优化**、**安全漏洞修复（如 Shell 权限绕过）** 展开了深入讨论，并有多项提升 Web Shell 与内存管理体验的功能性改进合并。

#### 2. 版本发布
- **v0.24.7-nightly.20261001.a7deb01bcb**
  - **核心更新**：修复了核心模块中 Code Mode 文本与延迟工具发现（lazy tool discovery）对齐的问题（PR #12990），以及权限模块中关于已批准权限的 honored 处理逻辑。这提升了工具加载与权限处理的一致性与稳定性。

#### 3. 社区热点 Issues（选择 10 个）
Let's list 10 key issues with their links, summaries, importance, and community reactions.

1. **#12380 Managed Agent 双路径架构与分阶段交付提案** (38 comments)
   - **摘要**：定义一个分阶段的 Managed Agent 架构，保留现有 TypeScript Agent 循环，将模型推理与工具环境解耦，赋予会话持久化所有权、工作区绑定及可恢复的工具执行能力。
   - **重要性与反应**：这是整个 Qwen Code 远程托管执行的战略基石。社区讨论极其活跃（38条评论），开发者们正在深入讨论如何平衡旧有本地引擎与新的托管引擎的调度优先级。

2. **#12028 非对话上下文 Token 治理** (18 comments)
   - **摘要**：系统提示词、内置工具 schema、上下文文件（如 `QWEN.md`）等非对话上下文在每次请求中都会发送并计费。在大上下文模型中，这部分开销极易占据绝大部分窗口，且难以察觉。
   - **重要性与反应**：这是控制 API 成本和提高有效对话窗口的核心问题。社区高度关注，提出了多项配套方案（如 benchmark 测试、召回门禁等），但目前缺乏有效的衡量与任务成功成本的门禁。

3. **#12867 Managed Agent Stage D 后续：持久化生命周期、Turns 与 AgentDefinition** (17 comments)
   - **摘要**：跟进 #12380 中的 Stage D，设计 durable lifecycle、Turns、Actions、持久化准入配置文件（如 `java_durable`）及 AgentDefinition 契约。
   - **重要性与反应**：属于架构落地的核心契约设计，引发了开发团队的详细评审与规划。

4. **#12737 ACP Bridge Stage B：配对 Legacy 与 Managed 引擎的主机集成** (14 comments)
   - **摘要**：保留配对主机的基础保护（M1, M3），设计 Stage B 的主机集成方案，使本地与托管引擎能够协同调度。
   - **重要性与反应**：是多引擎混合部署的关键步骤，社区关注其在实际生产环境中的调度决策。

5. **#13106 [P1 安全缺陷] `cd` 段静默丢弃 Write 拦截检查中的重定向目标** (5 comments)
   - **摘要**：`resolveCdTargetCwd` 调用 `extractRedirects` 后丢弃了结果，导致类似 `cd somedir > .qwen/settings.json` 的复合命令在配置了写保护时产生 0 个提取操作，静默覆盖了受保护的配置文件。
   - **重要性与反应**：极其严重的安全权限绕过漏洞。社区反应迅速，已有人提交了修复 PR（#12280），强调了 Shell 语义解析安全的重要性。

6. **#13113 [P1 会话崩溃] 快照过大无法索引：`file_history_snapshot` 二次增长触及硬编码 256 MiB 限制** (4 comments)
   - **摘要**：长期运行且涉及大量文件的会话，其 `.jsonl` 转录文件无界增长，一旦超过硬编码的 256 MiB 索引限制，会话将完全无法加载（`POST /session/:id/load` 报错）。
   - **重要性与反应**：直接导致长时任务数据无法恢复的严重瓶颈。开发者呼吁去除硬编码限制或优化快照增长算法。

7. **#11590 Qwen Code 自动插入 Metadata 导致厂商模型报错不可用** (6 comments, 已关闭)
   - **摘要**：Qwen Code 在调用某些第三方厂商模型时，由于自动插入的 metadata 格式导致厂商接口报错。
   - **重要性与反应**：虽然已解决，但这是多模型兼容性问题的典型痛点，反映了生态适配的复杂性。

8. **#12889 延迟工具 `tool_call` schema 允许对必填字段使用空参数** (7 comments)
   - **摘要**：在新版本 v0.24.6 中，Agent 调用延迟工具（如 `tool_search`）时，对于包含必填字段的工具，其 schema 允许传入空参数，导致工具调用失败或产生异常行为。
   - **重要性与反应**：影响工具发现和调用链路的稳定性，属于核心交互缺陷。

9. **#12042 核心/CLI：记录的 provenance 无法在 api-history 投影中保留** (7 comments)
   - **摘要**：`detectTurnInterruption()` 从持久化的 `ChatRecord[]` 投影出的 `Content[]` 中分类通知，但权威的 `provenance` 字段（如 `'system'` 或 `'real_user'`）在序列化投影中丢失。
   - **重要性与反应**：影响会话历史的准确还原与中断检测逻辑，是数据持久化层的底层缺陷。

10. **#13157 Agent Host：限制守卫需在权限流程之前运行，防止工作区外调用中断会话** (5 comments)
    - **

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



# DeepSeek TUI 社区动态日报 — 2026-10-02

> 数据来源：`github.com/Hmbown/DeepSeek-TUI`（过去 24 小时）

---

## 1. 今日速览

今日无新版本发布，但社区活跃度较高：**PR 合并潮集中落地**，贡献者 `asto18089` 的 7 个修复类 PR 通过集成分支正式合入（#6799），覆盖 MCP 超时、JS 执行、视觉请求、空闲看门狗等多个稳定性短板。同时，**v0.10.1 集成分支**（#6782）进入收尾阶段，安全审计修复与多项外部贡献即将随版本发布。

---

## 2. 版本发布

**无。** 过去 24 小时内未发布新版本。v0.10.1 的集成工作仍在进行中（见 PR #6782）。

---

## 3. 社区热点 Issues

> 本期仅 3 条 Issue 更新，全部列出。

### 🔥 #6309 [CLOSED] 恢复 YOLO 模式（一键自动批准）
- **作者**：weifeng89 | **更新**：2026-10-01 | **评论**：6 | 👍 0
- **链接**：https://github.com/Hmbown/Codewhale/issues/6309
- **摘要**：用户反馈当前"逐项点击审批"的操作模式在高频 IT 支持场景下非常繁琐，希望恢复此前存在的 YOLO 模式（自动批准所有操作）。该 Issue 在 DeepSeek V4 Flash 的 terminalbench 评测高分背景下提出，社区已有 6 条讨论，说明**自动化审批/免确认模式**是真实痛点。
- **重要性**：⭐⭐⭐ 直接影响 TUI 的易用性与生产力场景体验。

### 🔥 #6804 [OPEN] 召唤汉化组 —— 成立中文本地化小组
- **作者**：SparkofSpike | **创建**：2026-10-01 | **评论**：1 | 👍 0
- **链接**：https://github.com/Hmbown/Codewhale/issues/6804
- **摘要**：项目文档量巨大，前期依赖 LLM 翻译的质量"仅能阅读、不够顺畅"，且英文文档更新后中文文档无法同步。作者呼吁成立小型汉化组，用爱发电跟进开源项目的简体中文本地化，降低简中用户使用门槛。计划如人齐将建立 QQ 群协作。
- **重要性**：⭐⭐⭐ 反映了**中文社区参与度与文档本地化质量**的结构性问题，若能落地将显著扩大用户基数。

### #6792 [CLOSED] FEAT-026：完成会话命令形态与提取边界
- **作者**：aboimpinto | **更新**：2026-10-01 | **评论**：0 | 👍 0
- **链接**：https://github.com/Hmbown/Codewhale/issues/6792
- **摘要**：EPIC-006 下最后一个会话组切片，涉及 `/structcopy` 对主状态的解耦、会话组结果/注册及共享依赖图的独立 crate 提取。
- **重要性**：⭐⭐ 属于架构重构类工作，社区关注度较低但对长期可维护性关键。

---

## 4. 重要 PR 进展

### 🚀 #6782 [OPEN] v0.10.1 集成：wave/0.10.1-next
- **作者**：Hmbown | **更新**：2026-10-01
- **链接**：https://github.com/Hmbown/Codewhale/pull/6782
- **摘要**：整合 0.10.1 审计修复，并合入外部贡献 PR #6793、#6799、#6802。关键行为：排队/取消的 turn 通过 Engine 事件权威最终确定，undo 恢复持久化对话后再替换推理，Linux 权限变更等。**这是下一版本的核心集成分支。**

### 🚀 #6805 [OPEN] 支持经审核的 OAuth AI 提供商（插件）
- **作者**：LIghtJUNction | **更新**：2026-10-01
- **链接**：https://github.com/Hmbown/Codewhale/pull/6805
- **摘要**：插件包可通过 `extensions.net.codewhale.providers` 声明具名 OpenAI 兼容 AI 提供商和公开 OAuth 客户端，现有 provider 路由、模型目录、Chat Completions 客户端及流式路径均已消费这些声明，无需伴随代理进程。**显著扩展了多模型/多提供商的插件化接入能力。**

### 🚀 #6807 [OPEN] 绘制桌面鲸鱼 v2 轮廓（pet 功能）
- **作者**：Hmbown | **更新**：2026-10-01
- **链接**：https://github.com/Hmbown/Codewhale/pull/6807
- **摘要**：应 Owner（Hunter）直接需求，将桌面 pet 的鲸鱼形象升级为 v2 轮廓。属于体验向功能。

### 🔧 #6741 / #6802 [CLOSED] MCP `tools/call` 独立请求预算，避免过早杀死长任务
- **作者**：asto18089 / Hmbown | **更新**：2026-10-01
- **链接**：https://github.com/Hmbown/Codewhale/pull/6741 ｜ https://github.com/Hmbown/Codewhale/pull/6802
- **摘要**：MCP 工具调用此前被 `crates/mcp` 的 120s 通用超时和 TUI 池的 60s `default_execute_timeout` 双重压制，合法长任务（构建、测试套件、远程抓取）被误杀。修复后 `tools/call` 拥有独立预算，每个请求一个 deadline。**这是本期最重要的稳定性修复之一。**

### 🔧 #6743 [CLOSED] JS 执行子进程超时时 killing 并提高上限
- **作者**：asto18089 | **更新**：2026-10-01
- **链接**：https://github.com/Hmbown/Codewhale/pull/6743
- **摘要**：`execute_js_execution_tool` 原使用 `timeout(120s, cmd.output())`，超时时 tokio 仅 drop wait future 而不杀子进程，Node 进程 detached 继续占用 CPU/文件/管道。修复后正确终止子进程并提高超时上限。

### 🔧 #6742 [CLOSED] 视觉请求：限制连接数 + 每个请求 30 分钟封装
- **作者**：asto18089 | **更新**：2026-10-01
- **链接**：https://github.com/Hmbown/Codewhale/pull/6742
- **摘要**：`image_analyze` 原使用单一客户端级 120s 超时覆盖连接→上传→生成→读体全流程，慢但健康的提供商会被误杀。修复后连接数有界，每个请求独立 30 分钟封装。

### 🔧 #6740 [CLOSED] 空闲看门狗：工具调用飞行中保持耐心
- **作者**：asto18089 | **更新**：2026-10-01
- **链接**：https://github.com/Hmbown/Codewhale/pull/6740
- **摘要**：后台任务空闲看门狗（默认 120s）会在任何静默工具调用期间触发杀 turn，而日志只在工具开始/完成时记录，导致长构建、长测试、长 MCP 调用被误判为空闲。修复后工具调用飞行中不触发空闲截止。

### 🔧 #6793 [CLOSED] 重构命令：完成会话组形态（FEAT-026）
- **作者**：aboimpinto | **更新**：2026-10-01
- **链接**：https://github.com/Hmbown/Codewhale/pull/6793
- **摘要**：FEAT-026 会话组采纳切片的最终交付，对应 Issue #6792。属于 EPIC-006 架构重构的收尾工作。

### 🔧 #6799 [CLOSED] Land asto18089 的队列：7 个 PR 作为自身合入
- **作者**：Hmbown | **更新**：2026-10-01
- **链接**：https://github.com/Hmbown/Codewhale/pull/6799
- **摘要**：一次性落地 `asto18089` 的 7 个开放 PR（#6736、#6737、#6738、#6740、#6742、#6743、#6744）。因 fork 分支拒绝 maintainer push（HTTP 403），通过 `cw-land` 在集成分支完成合并。**这是本期代码质量提升的最大单次贡献。**

### 🔧 #6744 [CLOSED] 引擎：在 TurnStarted 中回显 host submission id
- **作者**：asto18089 | **更新**：2026-10-01
- **链接**：https://github.com/Hmbown/Codewhale/pull/6744
- **摘要**：嵌入方通过引擎提交 turn 后无法关联自身提交与实际启动的 turn（自续跑可能抢先）。修复后 `TurnStarted` 携带 host submission id，解决了溯源问题。

---

## 5. 功能需求趋势

从本期 Issue 与 PR 可提炼以下社区关注方向：

| 方向 | 信号 | 强度 |
|------|------|------|
| **自动化/免确认操作** | YOLO 模式 Issue #6309 引发 6 条讨论 | 🔴 高 |
| **中文本地化与社区运营** | 汉化组召集 Issue #6804 | 🔴 高 |
| **多模型/多提供商插件化** | OAuth AI 提供商支持 PR #6805 | 🟡 中 |
| **长任务稳定性与超时治理** | MCP/JS/视觉/空闲看门狗 4 个修复 PR | 🟡 中 |
| **架构解耦与可维护性** | FEAT-026 会话组提取（#6792/#6793） | 🟢 低（社区无感，开发者内驱） |
| **依赖与工具链更新** | nixpkgs/fenix/react/node/gt/axios 等 6 个 dependabot PR | 🟢 低（自动化） |

---

## 6. 开发者关注点

1. **审批摩擦是高频场景的致命伤**：#6309 提出的 YOLO 模式需求，本质是 TUI 在"安全"与"效率"之间的权衡——IT 支持/终端 benchmark 场景下逐项确认严重拖慢工作流，社区讨论活跃说明这不是个例。
2. **中文文档质量制约用户增长**：#6804 反映 LLM 翻译只能做到"能读"，专业术语和语境丢失明显。若汉化组成立，将成为项目在简中市场的重要增长杠杆。
3. **超时/预算机制需要精细化**：`asto18089` 的 7 个 PR 集中修复了 MCP、JS 执行、视觉请求、空闲检测等模块的"一刀切"超时问题——通用短超时套在长任务上是系统性风险，说明社区对**细粒度请求预算管理**有强烈共识。
4. **外部贡献者合并路径受阻**：#6799 和 #6802 均提到 fork 分支拒绝 maintainer push，导致贡献者原 PR 无法直接 merge，必须走集成分支。这提示项目的 **contribution-gate 流程和 fork 权限配置**仍有优化空间，可能影响外部开发者参与意愿。

---

*报告生成时间：2026-10-02 · 数据窗口：过去 24 小时 · 来源：GitHub API*

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>



根据您提供的 GitHub 数据，以下是为您生成的 **2026-10-02 ComfyUI 社区动态日报**。作为技术分析师，我将从版本、社区痛点、核心 PR 和未来趋势等维度为您梳理今日动态。

---

# 📊 ComfyUI 社区动态日报 (2026-10-02)

## 1. 今日速览
今日 ComfyUI 社区活跃度极高，核心动态集中在 **MiniMax H3 模型的深度性能优化**（多条核心 PR 集中提交）、**动态显存（Dynamic VRAM）稳定性修复**（社区高度关注的核心 Bug）以及 **Assets（资产管理系统）的健壮性增强**。此外，合作伙伴节点（Partner Nodes）持续扩张，新增了对 FLUX 3 和 Grok 视频模型的支持。

## 2. 版本发布
*   **最新 Releases**：过去 24 小时内无新版本发布。

---

## 3. 社区热点 Issues（Top 10 精选）
今日共更新 17 条 Issue，其中 **动态显存崩溃**、**AMD 显卡兼容性** 以及 **MiniMax H3 多模态生成 Bug** 是开发者最关注的痛点。

| 编号 | 标题 | 类型 | 为什么重要 | 社区反应与状态 |
| :--- | :--- | :--- | :--- | :--- |
| **#15255** | Dynamic VRAM streaming crashes all generations with HostBuffer.read_file_slice failed → CUDA OOM (regression after Aug 3 2026 update) | Bug (核心) | **核心阻塞级 Bug**。8月3日更新后，动态显存流式传输会导致 CUDA 报错并引发显存溢出（OOM），所有生成任务崩溃。 | 🔴 **高热度**（73条评论）。官方已上报 NVIDIA，目前提供临时 workaround（限制单卡 `--cuda-device 0` 或禁用 pinned memory `--disable-pinned-memory`）。 |
| **#15452** | Dynamic VRAM: reused (warm) model produces NaN/black output on VAE decode, fresh load does not | Potential Bug | 动态显存复用 warm 模型时，VAE 解码阶段输出 NaN 或纯黑图，重新加载模型则正常。这严重影响工作流连续性。 | 🟡 评论 21 条。社区认为与动态显存机制高度相关，仍在排查具体张量生命周期。 |
| **#16337** | DynamicVRAM (comfy-aimdo 0.5.3) produces corrupted/noise output on AMD RX 9070 XT (gfx1201) | Potential Bug | **AMD 用户痛点**。在 RX 9070 XT 显卡上，动态显存导致输出噪点/ corrupted 图像。 | 🟡 评论 10 条。表明动态显存在非 NVIDIA 架构（AMD RDNA3）上存在严重的适配问题。 |
| **#16711** | comfy kitchen attention (INT8) returns pure noise on AMD gfx1100 once text conditioning exceeds ~150 tokens | Bug | **AMD 显卡 INT8 加速崩溃**。当文本 token 超过 150 时，使用 comfy kitchen INT8 注意力机制会输出纯噪声。 | 🟢 新增 Issue。开发者指出应提交至 `comfy-kitchen` 仓库，属于内核 hip 后端问题。 |
| **#16697** | Recent updates keep downgrading sage attention 2.2 | Potential Bug | 社区反馈近期更新总是将 sage attention 降级，影响推理性能和特定模型表现。 | 🟢 评论 4 条。开发者对版本更新回退注意力机制表示困惑。 |
| **#16628** | Qwen 2.5-VL fails in

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

Thinking Process:

1.  **Understand the Goal**: The user wants a daily community dynamic report for the Ollama GitHub repository, dated **2026-10-02** (based on the provided data context, though the data says updated on 2026-10-01). The report must be in Chinese, structured into specific sections: Today's Summary, Releases (none), Hot Issues (top 10), Important PRs (top 10), Feature Demand Trends, and Developer Pain Points/Focus areas. Links to GitHub issues/PRs must be included.

2.  **Analyze the Input Data**:
    *   **Date**: 2026-10-02 (generated date, data mostly updated on 2026-10-01).
    *   **Releases**: None in the past 24 hours.
    *   **Issues (22 total)**:
        *   #14118 [CLOSED] [bug] MLX Error (M5 Mac, metal kernel load fail). 25 comments, 14 thumbs up.
        *   #16033 [OPEN] [bug] CRITICAL and HIGH CVE Vulnerabilities in OLLAMA GOBinary (36 vulnerabilities, 1 CRITICAL, 11 HIGH). 17 comments.
        *   #18038 [OPEN] [performance, macos] Performance regression: llama-server high CPU use when generating tokens (M4 Max, ~560% CPU). 14 comments.
        *   #18642 [OPEN] [bug] CUDA illegal memory access (MUL_MAT) on RTX 5090 with Cohere MoE (Windows). 10 comments.
        *   #18505 [OPEN] [bug, needs more info, mlx] MLX nvfp4 stalls in prefill under sustained single-slot load. 10 comments.
        *   #18527 [CLOSED] [bug, cloud] deepseek-v4.1-flash silently discards image input while advertising vision. 8 comments.
        *   #18716 [OPEN] [needs more info] Error pulling models: redirect target not allowed (Cloudflare R2). 4 comments.
        *   #17916 [OPEN] Default n_threads ignores cgroup CPU quota: ~45x throughput collapse in CPU-limited containers. 4 comments, 1 thumb up.
        *   #18099 [CLOSED] llama-server malloc heap grows with request volume on macOS/Metal (6.5 GB paged to swap). 4 comments.
        *   #18542 [CLOSED] [bug] typical_p is no longer supported breaks existing clients (SillyTavern). 3 comments, 4 thumbs up.
        *   #18581 [OPEN] Windows CUDA discovery fails (0 B VRAM / CPU fallback) on RTX 50-Series (Blackwell). 3 comments.
        *   #18595 [CLOSED] [bug] macOS 0.33.0: no garbage collection for orphaned blobs (21GB orphan). 2 comments.
        *   #18557 [OPEN] [needs more info] 0xc0000005 access violation loading model on Vulkan (AMD RX 6800 XT). 2 comments, 1 thumb up.
        *   #18071 [OPEN] [model, cloud] Need qwen3.8-flash-next on Ollama cloud. 1 comment, 6 thumbs up.
        *   #2588 [OPEN] [documentation, api] API documentation request for parameter descriptions. 1 comment.
        *   #18215 [OPEN] [documentation] Install on linux without root permissions. 1 comment.
        *   #18370 [CLOSED] Runner wedges in Vulkan ggml backend (AMD UMA APU). 1 comment.
        *   #18361 [CLOSED] install.sh home directory issue on Fedora Silverblue. 1 comment.
        *   #18474 [CLOSED] Claude integration slow response times (~50s latency). 1 comment.
        *   #18412 [CLOSED] Hybrid graphics crash (SIGABRT) on Linux. 1 comment.
        *   #18729 [CLOSED] Ollama 0.35.0 regression: model pulls bypass HTTPS_PROXY for Cloudflare R2. 0 comments.
        *   #18728 [OPEN] [LLM-jp-4] parser for harmony output with a space after special tokens. 1 thumb up.
    *   **PRs (23 total, top 20 shown)**:
        *   #18722 [OPEN] openai: keep tool message content parts in one message.
        *   #18734 [OPEN] README: add dev companion terminal preview.
        *   #18741 [OPEN] models: add clef support via llama-server.
        *   #18738 [OPEN] app: finish onboarding with Run Ollama.
        *   #18740 [OPEN] launch: preserve Pi configuration and guide headless sign-in.
        *   #18739 [OPEN] README: add oxi to community integrations (Rust desktop coding agent).
        *   #18711 [OPEN] create: make explicit capabilities exhaustive at create and runtime.
        *   #18737 [CLOSED] server: report only decision capability for decision models.
        *   #18700 [OPEN] app: make chat history read-only and add exports (Markdown).
        *   #18613 [OPEN] llm: pass --poll 0 to llama-server when a GPU is present (Fixes #17833, #18038 - CPU high usage regression).
        *   #18721 [OPEN] llm: preserve JSON property order.
        *   #18736 [OPEN] Add PageGrok (Chrome/Edge extension).
        *   #18735 [OPEN] fix(app): don't animate sidebar open on initial load.
        *   #18701 [OPEN] mlx: System one support.
        *   #18733 [OPEN] Enable proxy from environment in redirect.go (fix for #18729).
        *   #18732 [OPEN] docs: add OpenNodes for Ollama.
        *   #18730 [OPEN] Enable proxy support in HTTP client.
        *   #18731 [OPEN] Enable proxy from environment in HTTP client.
        *   #18727 [OPEN] readme: update twinny link and description.
        *   #18726 [OPEN] llama: build the pointer-head attention graph.

3.  **Drafting the Sections**:

    *   **1. 今日速览 (Today's Summary)**:
        *   Summarize key developments: Focus on security vulnerabilities in Go binary (#16033), performance regressions (high CPU on GPU, #18038, fixed by PR #18613), and new feature PRs (SystemOne MLX support, chat history export, proxy fixes).
        *   Keep it to 2-3 sentences highlighting the balance between critical bug fixes (security, CPU usage, CUDA on RTX 5090) and feature expansions (community integrations, desktop app UX).

    *   **2. 版本发布 (Releases)**:
        *   State clearly: 过去24小时内无新版本发布 (No releases in the past 24 hours).

    *   **3. 社区热点 Issues (Top 10 Hot Issues)**:
        *   Need to select the 10 most critical/noteworthy ones and explain why they matter and community reaction.
        *   *Candidate selection*:
            1.  **#16033 (Critical CVEs in Go Binary)**: Security is top priority. 1 CRITICAL, 11 HIGH. High attention needed for operators. (Link: `https://github.com/ollama/ollama/issues/16033`)
            2.  **#18038 (Performance regression: llama-server high CPU use on macOS/GPU)**: Affects Mac users heavily (M4 Max 560% CPU). Root cause identified, PR #18613 submitted to fix it. (Link: `https://github.com/ollama/ollama/issues/18038`)
            3.  **#18642 (CUDA illegal memory access on RTX 5090 with Cohere MoE)**: New hardware (RTX 5090 Blackwell) and architecture (MoE) crash. Crucial for high-end Windows GPU users. (Link: `https://github.com/ollama/ollama/issues/18642`)
            4.  **#14118 (MLX Error on M5 Mac)**: Apple Silicon M5 users cannot generate images due to Metal kernel failure. Hardware-specific bug. (Link: `https://github.com/ollama/ollama/issues/14118`)
            5.  **#17916 (CPU thread limit ignores cgroup quota in containers)**: Critical for containerized deployments (Kubernetes/Docker), causes ~45x throughput collapse. (Link: `https://github.com/ollama/ollama/issues/17916`)
            6.  **#18581 (Windows CUDA discovery fails on RTX 50-Series)**: Blackwell support on Windows is broken, falls back to CPU (0B VRAM). (Link: `https://github.com/ollama/ollama/issues/18581`)
            7.  **#18505 (MLX nvfp4 prefill stall)**: Severe stall issue under sustained load on MLX. (Link: `https://github.com/ollama/ollama/issues/18505`)
            8.  **#18716 / #18729 (Proxy/Redirect issues with Cloudflare R2)**: Model pulling fails due to redirect/proxy handling issues, especially in enterprise proxy environments. (Link: `https://github.com/ollama/ollama/issues/18716` and `https://github.com/ollama/ollama/issues/18729`) -> Combine or choose one, say #18729 (regression in 0.35.0) or #18716. Let's list #18729 as it's a regression, and #18716. Let's pick #18729. (Link: `https://github.com/ollama/ollama/issues/18729`)
            9.  **#18542 (typical_p breaks existing clients like SillyTavern)**: API compatibility break, 4 thumbs up, important for third-party client ecosystem. (Link: `https://github.com/ollama/ollama/issues/18542`)
            10. **#18071 (Request for qwen3.8-flash-next on Cloud)**: High community demand (6 thumbs up) for cloud access to popular Chinese model. (Link: `https://github.com/ollama/ollama/issues/18071`)
            *   Let's write down the top 10 with brief explanations of importance and community reaction (thumbs up, comments).

    *   **4. 重要 PR 进展 (Top 10 Important PRs)**:
        *   Select 10 key PRs, explain what they do.
        *   **#18613 (Pass --poll 0 to llama-server when GPU present)**: Crucial performance fix for CPU burning issue (#18038). (Link: `https://github.com/ollama/ollama/pull/18613`)
        *   **#18701 (mlx: System one support)**: Adds MLX support for SystemOne models, expanding Apple Silicon capability. (Link: `https://github.com/ollama/ollama/pull/18701`)
        *   **#18711 & #18737 (Capabilities exhaustive at create/runtime & report only decision capability)**: Refines model capability handling (e.g., decision-only models). (Link: `https://github.com/ollama/ollama/pull/18711`, `https://github.com/ollama/ollama/pull/18737`)
        *   **#18733, #18730, #18731 (Proxy support fixes)**: Series of PRs to fix proxy environment variables for model pulls (fixes #18729). Essential for enterprise networks. (Link: `https://github.com/ollama/ollama/pull/18733`)
        *   **#18700 (App chat history read-only & Markdown export)**: Major UX improvement for desktop app users, allowing chat export. (Link: `https://github.com/ollama/ollama/pull/18700`)
        *   **#18722 (OpenAI: keep tool message content parts in one message)**: API compatibility fix for tool calls, preventing data loss of tool_call_id. (Link: `https://github.com/ollama/ollama/pull/18722`)
        *   **#18721 (llm: preserve JSON property order)**: Fixes JSON key sorting issue when forwarding requests to llama-server, ensuring schema compliance. (Link: `https://github.com/ollama/ollama/pull/18721`)
        *   **#18741 (models: add clef support via llama-server)**: Expands model format support. (Link: `https://github.com/ollama/ollama/pull/18741`)
        *   **#18726 (llama: build pointer-head attention graph)**: Technical AI/ML optimization for SystemOne models (pointer-head attention). (Link: `https://github.com/ollama/ollama/pull/18726`)
        *   **#18739 / #18732 / #18736 / #18727 (Community integrations)**: Adding `oxi`, `OpenNodes`, `PageGrok`, updating `twinny`. Shows vibrant ecosystem. Let's pick one or two representative ones, like #18739 (oxi - Rust coding agent) and #18736 (PageGrok). (Link: `https://github.com/ollama/ollama/pull/18739`, `https://github.com/ollama/ollama/pull/18736`)
        *   Let's formulate the top 10 list clearly.

    *   **5. 功能需求趋势 (Feature Demand Trends)**:
        *   Extracted from Issues:
            *   **容器化与企业级部署优化**: cgroup CPU quota support (#17916), HTTP proxy environment support (#18729, #18716), security vulnerability patching (#16033).
            *   **新硬件与新架构适配**: RTX 5090 / Blackwell CUDA support (#18642, #18581), M5 Mac MLX kernel fixes (#14118), AMD Vulkan backend stability (#18557, #18370).
            *   **云服务与模型生态丰富**: Requests for popular models on Ollama Cloud (like qwen3.8-flash-next, #18071), fixing cloud vision capability bugs (#18527).
            *   **API 兼容性与客户端生态**: Parameter changes breaking third-party clients like SillyTavern (#18542), tool call message format standardization (#18722).
            *   **文档与易用性**: Non-root Linux installation (#18215), API parameter documentation (#2588).

    *   **6. 开发者关注点 (Developer Pain Points & High-frequency Demands)**:
        *   **安全与合规**: Go binary security CVEs are piling up (36 total!). Devs need to track and upgrade.
        *   **性能与资源调度**: CPU usage regression on GPU systems, container CPU limits ignoring cgroups causing severe throughput drops. Developers running Ollama in containers or hybrid environments face severe configuration hurdles.
        *   **新架构兼容性 pain**: Blackwell (RTX 50-series) and Cohere MoE architectures suffer from crashes or CPU fallbacks, hindering adoption on latest hardware.
        *   **API 稳定性与兼容性**: Changes in default parameters (like `typical_p`) or JSON serialization order can silently break client integrations. Developers demand better backward compatibility and clear migration paths.
        *   **云与边缘场景的网络限制**: Proxy/redirect issues when pulling from Cloudflare R2 show pain points in offline/enterprise environments with strict network proxies.

4.  **Refining Language and Style**:
    *   Professional, concise, targeting technical developers/analysts.
    *   Format: Markdown with headers, bullet points, bold text, and clear links.
    *   Ensure all links are formatted cleanly: `[标题](链接)`.

Let's double check the exact links format from the prompt:
`链接: ollama/ollama Issue #14118` -> standard GitHub URL would be `https://github.com/ollama/ollama/issues/14118` and for PRs `https://github.com/ollama/ollama/pull/18722`. I will construct standard GitHub URLs since only short paths were given in the prompt, but write them clearly.

Let's do a quick translation and quality check of the selected issues:
*   Issue #16033: Go binary vulnerabilities. Critical for production deployments.
*   Issue #18038: CPU usage regression on Mac. High interest, PR #18613 addresses it.
*   Issue #18642: CUDA crash on RTX 5090 with Cohere MoE. Crucial for cutting-edge hardware.
*   Issue #14118: MLX kernel error on M5 Mac. Specific

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>



# llama.cpp 社区动态日报 — 2026-10-02

---

## 1. 今日速览

今日 llama.cpp 社区异常活跃，单日发布 **10 个版本**（b11318–b11327），涵盖 mmap 性能优化、Jinja 模板修复、HIP/SYCL 后端改进、BLAS 文档完善等。Issues 方面，SYCL 后端稳定性问题持续占据热度榜首，多 GPU/分片场景下的崩溃与性能退化是当前最突出的痛点。PR 层面，Qwen4Exp 系列修复与 MTP 支持、Hexagon 量化类型新增、以及 CUDA/Vulkan 性能优化是社区焦点。

---

## 2. 版本发布

| 版本 | 核心更新 | 链接 |
|------|---------|------|
| **b11327** | **mtmd**: 非因果模型下将 max_image 限制在 ubatch 范围内（#29773） | [Release](https://github.com/ggml-org/llama.cpp/releases/tag/b11327) |
| **b11326** | **meta**: 使用 FILL（而非 SCALE）清除非活跃 AllReduce shards（#29793） | [Release](https://github.com/ggml-org/llama.cpp/releases/tag/b11326) |
| **b11325** | **jinja**: 仅在 loop filter 需要时才拷贝循环作用域（#29776） | [Release](https://github.com/ggml-org/llama.cpp/releases/tag/b11325) |
| **b11324** | **llama-mmap**: direct-io 模式下避免每个 tensor 的第二次全尺寸拷贝（#29749，Claude 辅助） | [Release](https://github.com/ggml-org/llama.cpp/releases/tag/b11324) |
| **b11323** | **HIP**: 修复 fattn_mma dqk 576 中 gqa_ratio=20 时将 CDNA 误判为 DGX Spark 的问题（#29572） | [Release](https://github.com/ggml-org/llama.cpp/releases/tag/b11323) |
| **b11322** | **hex-workqueue**: 修复 seqn 与 idx_read/write 不同步的竞态条件（#29785） | [Release](https://github.com/ggml-org/llama.cpp/releases/tag/b11322) |
| **b11321** | **BLAS**: 完善 AOCL-BLAS 构建文档并标记设备标签（#29640） | [Release](https://github.com/ggml-org/llama.cpp/releases/tag/b11321) |
| **b11320** | **common**: 新增 LLM-jp-4.1 Harmony 方言处理器（#29681） | [Release](https://github.com/ggml-org/llama.cpp/releases/tag/b11320) |
| **b11319** | **opencl**: 标记 Adreno E17 编译器支持 vec subgroup bcast（#29698） | [Release](https://github.com/ggml-org/llama.cpp/releases/tag/b11319) |
| **b11318** | **vocab**: 修正 PLaMo-2/3 的 BOS/EOS 设置（#29734） | [Release](https://github.com/ggml-org/llama.cpp/releases/tag/b11318) |

> **亮点**: b11324 的 mmap 优化和 b11327 的 mtmd 修复分别针对大模型加载与多模态场景的性能与正确性，实用价值较高。

---

## 3. 社区热点 Issues（Top 10）

### 🔴 高优先级 Bug

| # | 标题 | 评论 | 👍 | 为什么重要 |
|---|------|------|-----|-----------|
| **#23577** | MTP with Qwen3.6 27B 输出重复 `////` token | 33 | 3 | 长会话下 MTP 投机解码出现严重退化，直接影响生成质量，涉及 CUDA + Windows 平台 |
| **#27198** | SYCL `--split-mode tensor` 在 Arc Pro B70 双卡上崩溃（DEVICE_LOST） | 32 | 1 | SYCL 多卡分片场景的致命 crash，阻碍 Intel Arc 多卡部署 |
| **#25436** | DeepSeek V4 在 Strix Halo (ROCm) 上输出乱码 | 29 | 5 | AMD 新平台（Strix Halo）上关键模型完全不可用，ROCm 兼容性受阻 |
| **#26399** | GGML_OP_TOP_K 在 HIP/ROCm 上回退 CPU，导致 6.4× 性能损失 | 20 | 1 | 长上下文（>3-4K）下 DeepSeek-V4-Flash 推理性能严重退化 |
| **#27063** | SYCL 在 Intel A770 上完全不可用 | 18 | 0 | 老一代 Intel 独显无法运行 llama.cpp，SYCL 后端覆盖范围受限 |

### 🟡 功能需求与增强

| # | 标题 | 评论 | 👍 | 为什么重要 |
|---|------|------|-----|-----------|
| **#29022** | **Feature**: 通过 Prefill Logit Slicing 实现快速 Tool Gating 与单遍选择 | 11 | 3 | Agent 场景下工具调用效率的关键优化方向，社区关注度高 |
| **#29758** | **Feature**: 增强对抗 Prompt Injection 的安全性 | 6 | 0 | 安全性需求日益突出，企业级部署的刚需 |
| **#25227** | WebUI 模型选择器：无组织模型视觉上附加到上一个组织组 | 3 | 0 | UI/UX 缺陷，影响多模型管理体验 |
| **#29811** | Qwen 3.8 Flash + MTP 启动时断言失败 | 2 | 0 | 新模型 + 投机解码的组合问题，阻塞早期采用者 |

### 🟢 已关闭但值得关注

| # | 标题 | 评论 | 说明 |
|---|------|------|------|
| **#27046** | SIGSEGV on GPU offload（Lunar Lake iGPU） | 9 | 已确认在多架构复现，根因定位中 |
| **#26987** | Qwen3-Coder parser 懒加载 tool-call 触发失效 | 6 | 工具调用解析器的边界情况处理 |

> **社区反应**: SYCL 相关 Issues 占据前 10 中的 4 席，Intel 后端稳定性是当前最大痛点；MTP + 新模型（Qwen3.6/3.8）的组合问题也频繁出现。

---

## 4. 重要 PR 进展（Top 10）

| # | 标题 | 状态 | 核心内容 |
|---|------|------|---------|
| **#29761** | Qwen4Exp: add MTP | CLOSED | 为 Qwen3.8-Flash-Next 新增 MTP 支持，DGX Spark 上加速比 1.3–2× |
| **#29825** | qwen4exp: halve the indexer score memory | OPEN | 优化 Qwen4Exp 索引器内存占用，131K context 下减少约 4GB 中间结果 |
| **#29672** | ggml: add PTQ1_0, ternary at group 128 | OPEN | 新增 PTQ1_0 三值量化格式（1.75 bits/weight），256 元组→128 元组 |
| **#29828** | hexagon: install rebuilt HTP skels | OPEN | 确保 Hexagon 平台增量构建时正确安装内层 skeleton |
| **#29612** | CUDA: refactor swizzling code | OPEN | 重构 CUDA swizzling 代码，支持非 128 字节步长及 Volta/AMD |
| **#29357** | vulkan: Intel FA kernel for prefill | OPEN | 新增 Intel prefill Flash Attention shader，合并 prefill/decode 常量定义 |
| **#29787** | opencl: use sigmoid f16 for bf16 | OPEN | 修复 test-backend-ops 中 sigmoid bf16 断言崩溃 |
| **#29827** | CUDA: cap FA convert buffer for quantized KV | CLOSED | 限制量化

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*