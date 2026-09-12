# AI CLI 工具社区动态日报 2026-09-13

> 生成时间: 2026-09-12 22:16 UTC | 覆盖工具: 12 个

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

**今日重點（2026‑09‑13）**

- **Claude Code** 發布 **v2.1.270**，修復在 Bash 中長時間運行後只讀 `git` 命令誤觸權限確認的回歸問題。  
  https://github.com/anthropics/claude-code/releases/tag/v2.1.270  

- **Gemini CLI** 發布 **v0.61.0‑nightly.20260912.g9c1b0a610**，加強沙箱邊界並修復通過構建文件或不受信任標誌的間接 Prompt Injection。  
  https://github.com/google-gemini/gemini-cli/releases/tag/v0.61.0-nightly.20260912.g9c1b0a610  

- **Qwen Code** 發布每日構建版本 **v0.23.3‑nightly.20260912.54aa66834b**，主要重構了釘釘插件的響應聚合邏輯並移除過時通道。  
  https://github.com/QwenLM/qwen-code/releases/tag/v0.23.3-nightly.20260912.54aa66834b  

- **llama.cpp** 發布補丁版本 **b10931**，在 UI 中加入緩存機制以減少重複渲染。  
  https://github.com/ggml-org/llama.cpp/releases/tag/b10931  

- **llama.cpp** 發布補丁版本 **b10930**，服務端在達到模型限制時允許繼續下載模型，修正 #26809。  
  https://github.com/ggml-org/llama.cpp/releases/tag/b10930  

- **GitHub Copilot CLI** 合併 PR **#4808**，將 GitHub Actions 的 `uses:` 引用固定為不可變的 commit SHA，以提升供應鏈安全與可重現性。  
  https://github.com/github/copilot-cli/pull/4808  

- **Pi** 合併 PR **#9529**，新增 Google Antigravity 與 Cursor Pro 兩個 OAuth 提供商，實現無 API‑Key 的登錄流程。  
  https://github.com/earendil-works/pi/pull/9529

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills 社区热点报告（截至 2026‑09‑13）**  

---

### 1. 热门 Skills 排行  
（按社区讨论热度 —  — 主要来源于 Issues 的评论数，并映射到对应的 PR）  

| 排名 | Skill（PR） | 功能简述 | 社区讨论热点 | 当前状态 | GitHub 链接 |
|------|--------------|----------|--------------|----------|--------------|
| 1 | **skill‑creator 改进**（修复 `run_eval.py` 0% recall、Windows 子进程/编码问题）<br>PR #1298、#1099、#1050 | 提供技能创建、评估与优化的底层脚本；修复 `run_eval.py` 在所有查询上报告 0% recall 的 bug，以及 Windows 下的 subprocess 路径、编码和并行工作线程问题。 | Issue #556（12 评论）反馈“skill 永不触发”；Issue #1099/#1050 分别报告 Windows 崩溃和编码错误；社区普遍认为评估管线的可靠性直接影响所有新技能的质量。 | **OPEN** | <https://github.com/anthropics/skills/pull/1298> <br> <https://github.com/anthropics/skills/pull/1099> <br> <https://github.com/anthropics/skills/pull/1050> |
| 2 | **skill‑quality‑analyzer & skill‑security‑analyzer**（市场加入的两个元技能）<br>PR #83 | 对任意 Skill 进行五维质量评估（结构/文档、示例、资源引用、安全、性能）并输出改进建议。 | Issue #492（43 评论）指出社区技能被错误地分发到 `anthropic/` 命名空间，导致信任边界被滥用；社区呼吁官方提供可审计的质量/安全元技能以辨识官方与社区技能。 | **OPEN** | <https://github.com/anthropics/skills/pull/83> |
| 3 | **组织范围技能共享**（Issue 需求）<br>（暂无对应 PR，但反映在技能创建/市场改进需求中） | 允许在 Claude.ai 组织内直接共享 .skill 文件，免去手动下载/上传步骤。 | Issue #228（16 评论）强烈请求“一键共享”或组织级技能库，以提升跨团队复用效率。 | **OPEN（需求）** | <https://github.com/anthropics/skills/issues/228> |
| 4 | **compact‑memory**（符号化紧凑代理状态）<br>Issue #1329（尚未对应 PR） | 使用符号压缩表示（如基于树的哈希或二进制 Blob）存储长期代理笔记，显著降低上下文占用。 | Issue #1329（9 评论）提出该技能可解决长时运行代理因笔记占用过多上下文而导致性能下降的痛点。 | **OPEN（提案）** | <https://github.com/anthropics/skills/issues/1329> |
| 5 | **document‑typography**（排版质量控制）<br>PR #514 | 自动检测并修正 AI 生成文档中的孤词、寡段、编号错位等排版问题。 | 虽无高评论 Issue，但 PR 本身持续获得关注（多次更新），说明社区对提升 Claude 生成文档的可读性有持续需求。 | **OPEN** | <https://github.com/anthropics/skills/pull/514> |
| 6 | **Hivemind 零成本多编排编排技能**<br>PR #1628 | 让 Claude Code 作为唯一的规划/审核/合并角色，将机械工作委托给运行在免费模型上的 headless opencode 工作线程。 | Issue #1628（无评论但创建/更新频繁）表明社区对在昂贵模型上省 token、并行执行繁琐任务的兴趣正在上升。 | **OPEN** | <https://github.com/anthropics/skills/pull/1628> |
| 7 | **Buffer API Agent Skill**（社交媒体调度）<br>PR #1627 | 提供对 Buffer GraphQL API 的完整封装：账号/频道发现、帖子创建/调度（`addToQueue` / `customSchedule`）、分析等。 | 社区多次在讨论中提及需要“现成的社交媒体自动化”技能，该 PR 正是直接响应。 | **OPEN** | <https://github.com/anthropics/skills/pull/1627> |
| 8 | **self‑audit**（机械验证 + 四维推理质量门）<br>PR #1367 | 首先机械核对每个声明的输出文件是否存在；随后按损害程度顺序执行四维推理审计（逻辑一致性、事实正确性、风险评估、可操作性）。 | 与技能质量/安全需求相呼应，社区在多个质量相关 Issue 中提及“交付前自检”作为降低失误的关键手段。 | **OPEN** | <https://github.com/anthropics/skills/pull/1367> |

> **说明**：所有列出的 PR 均处于 **OPEN** 状态（尚未合并），这表明社区的讨论正在围绕这些功能的实现细节、可靠性以及与现有工作流的兼容性展开。

---

### 2. 社区需求趋势  
从高评论 Issues 中提炼出的共同诉求：

| 需求方向 | 代表性 Issue / 讨论 | 核心诉求 |
|----------|--------------------|----------|
| **评估与可靠性** | #556、`run_eval.py` 0% recall（#1298、#1099、#1050） | 需要可信的技能评估管线，否则优化循环无效。 |
| **安全与信任边界** | #492（社区技能冒充官方） | 希望官方提供审计元技能（质量/安全）以及明确的命名空间策略，防止滥用。 |
| **组织级共享与管理** | #228（组织内技能共享） | 期望一键共享或中央技能库，降低跨团队摩擦。 |
| **技能生命周期管理** | #62（技能不见/错误） | 改善技能加载、版本控制与冲突检测机制，防止误删或路径大小写问题。 |
| **上下文压缩与记忆** | #1329（compact‑memory） | 长时运行代理需要更紧凑的状态表示，以释放上下文用于实际任务。 |
| **多智能体协同 & 零成本编排** | #1628（Hivemind） | 利用廉价模型离线完成机械工作，保留昂贵模型做决策。 |
| **文档质量** | #514（排版技能） | 自动纠正 AI 生成文档的常见排版错误，提升交付可读性。 |

---

### 3. 高潜力待合并 Skills  
（评论活跃且尚未合并的 PR，具备近期落地的可能性）

| PR | Skill | 为何具备高潜力 | 关键风险 / 需要注意 |
|----|-------|----------------|---------------------|
| #1298 / #1099 / #1050 | **skill‑creator 评估修复** | 直接解决目前所有新技能评估失效的根本问题；合并后评估管线恢复可用，后续所有技能质量将得到可靠反馈。 | 需要跨平台（Windows/Linux/macOS）兼容性测试；确保不破坏现有工作流。 |
| #83 | **skill‑quality‑analyzer & skill‑security‑analyzer** | 为社区提供官方认可的质量/安全审计工具，可直接缓解 #492 的信任危机。 | 必须保证元技能本身的轻量化，避免额外 token 开销过大。 |
| #1367 | **self‑audit** | 集成机械文件验证 + 四维推理审计，能在交付前捕获大部分常见错误，契合社区对“质量门”需求。 | 需要明确四维维度的权重与阈值，防止过度误报。 |
| #1628 | **Hivemind 零成本多编排** | 提供显著的 token 节省方案，适合大规模机械任务（代码生成、数据处理等）。 | 依赖外部 opencode 工作线程的可用性与稳定性；需文档清晰说明如何在受限环境中部署。 |
| #1627 | **Buffer API Agent Skill** | 社交媒体自动化是常见的企业需求，官方技能可降低集成门槛。 | 需要处理 Buffer API 的速率限制与鉴权刷新，确保长时间调度稳定。 |
| #514 | **document‑typography** | 排版问题是 AI 生成文档的普遍痛点；官方技能能够“一键修复”。 | 必须确保与现有文档技能（如 odt、docx）不产生冲突，且对不同格式的支持全面。 |

---

### 4. Skills 生态洞察  
**当前社区在 Skills 层面最集中的诉求是：构建一个可信、可审计且易于共享的技能基础设施——即通过可靠的评估管线、官方质量/安全元技能以及组织级共享机制，来保证技能的正确性与安全性，从而让用户放心地将更多复杂工作（如文档排版、多智能体编排、社交媒体自动化）委托给 Skills。**  

---  

*所有链接均指向对应的 GitHub 页面，便于直接查看讨论与代码。*  
*（报告基于截止 2026-09-13 的公开 Issues 与 PR 数据生成。）*

---

**Claude Code 社区动态日报（2026‑09‑13）**  

---

### 1. 今日速览  
- 最新版本 **v2.1.270** 仅修复了因长时间运行后 Bash 中只读 git 命令意外弹出权限确认的回归问题。  
- 社区活跃度集中在 **prompt‑cache 失效、跨平台崩溃/蓝屏、使用限制提示不准以及安全误报** 四大方向，这些问题均在最近 24 h 内获得较多评论和点赞。  
- 仅有两个 open PR（单元测试补充和文档 troubleshooting），说明目前重点仍在 bug 修复而非新功能投入。

---

### 2. 版本发布  

| 版本 | 更新内容 | 链接 |
|------|----------|------|
| **v2.1.270** | 修复了在会话运行一段时间后，**只读 git 命令（如 `git status`）** 在 Bash 中会误触权限确认的回归（源自 v2.1.269）。 | [anthropics/claude-code releases/tag/v2.1.270](https://github.com/anthropics/claude-code/releases/tag/v2.1.270) |

> 本次发布为小幅补丁，未引入新特性。

---

### 3. 社区热点 Issues（挑选 10 条）  

| # | 标题与链接 | 为何重要 | 社区反应（评论/点赞） |
|---|------------|----------|----------------------|
| **#63930** | [Prompt cache fully re‑created after turns with many parallel tool calls](https://github.com/anthropics/claude-code/issues/63930) | 揭示 **Opus 4.8** 后 prompt cache 频繁失效，导致 ~74% `cache_creation` token 浪费，直接影响成本和响应速度。 | 12 评论，👍7 |
| **#80912** | [Windows kernel BSOD (0x139) in VS Code session](https://github.com/anthropics/claude-code/issues/80912) | 重现了与 #30137 相同的内核蓝屏，影响 Windows 开发者的稳定性。 | 9 评论，👍0 |
| **#86059** | [Receiving session is interrupted when a cross‑session message arrives](https://github.com/anthropics/claude-code/issues/86059) | 跨会话消息导致接收端会话被中断且丢失上下文，影响协作场景。 | 6 评论，👍1 |
| **#70161** | [Statusline OSC 8 hyperlinks no longer clickable (regression in 2.1.181)](https://github.com/anthropics/claude-code/issues/70161) | 状态行超链接失效，削弱了自定义插件与外部文档的交互体验。 | 5 评论，👍3 |
| **#74329** | [Stdio MCP server that exits mid‑session: lazy reconnect serves one call, then tools are wrongly deregistered](https://github.com/anthropics/claude-code/issues/74329) | MCP 服务器意外退出后，工具注册状态错乱，导致后续工具调用失败。 | 5 评论，👍0 |
| **#71711** | [Gmail claude.ai connector won't surface in CLI while Calendar/Drive work](https://github.com/anthropics/claude-code/issues/71711) | 同一账号下 Gmail 连接器不可见，限制了多服务工作流的完整性。 | 5 评论，👍0 |
| **#84750** | [Abnormal token consumption still happening – regression from ~2 weeks ago](https://github.com/anthropics/claude-code/issues/84750) | 指出近期 token 用量异常升高，与之前的 #13552 相关，直接影响配额。 | 3 评论，👍0 |
| **#77469** | [Usage‑limit message states a reset time ~3.5h later than when access actually returns](https://github.com/anthropics/claude-code/issues/77469) | 限制提示与实际恢复时间不符，导致用户误以为还需等待，造成生产力损失。 | 3 评论，👍0 |
| **#85354 / #85365 / #85385** 系列 | [ClAudit false‑positive (AUP / Cyber) blocking authorized work](https://github.com/anthropics/claude-code/issues/85354) 等 | 安全审计模型误判普通操作（如 MySQL 安装、SSH 账号）为违规，造成会话被中断。 | 每条 2‑3 评论，👍1 左右 |
| **#86828** | [Cloud sessions: GitHub gate overrides "Full" network access](https://github.com/anthropics/claude-code/issues/86828) | 即使配置为完全网络访问，GitHub 请求仍被拦截，影响外部 API 调用。 | 2 评论，👍1 |

> 以上 Issues 涵盖 **性能（缓存、token 消耗）**、**稳定性（BSOD、会话中断）**、**跨平台兼容性（macOS/Windows/iOS）**、**工具生态（MCP、连接器）**、**用户体验（状态行、使用限制提示）以及 **安全误报**，正是社区当前最关注的痛点。

---

### 4. 重要 PR 进展（仅 2 条 open PR）  

| PR # | 标题与链接 | 功能/修复说明 |
|------|------------|---------------|
| **#93912** | [mods: unit tests for diff, sec-default and telemetry, typed against the plugin declarations](https://github.com/anthropics/claude-code/pull/93912) | 为 `diff`、`sec-default`、`telemetry` 三个插件添加了在引擎上下文运行的单元测试，使用了插件声明的类型提升，提高了插件可靠性和后续重构安全性。 |
| **#61716** | [docs: Add troubleshooting for false usage limit caused by context overflow (#50321)](https://github.com/anthropics/claude-code/pull/61716) | 补充文档，解释因上下文溢出导致的假“使用限制”错误，并提供切换到 1M 模型或手动 `/compact` 的绕过方案，帮助用户快速定位根因。 |

> 目前没有合并的 PR，说明社区近期聚焦在 bug 修复而非新功能提交。

---

### 5. 功能需求趋势（从所有 Issues 中提炼）  

| 需求方向 | 体现的 Issues / 评论热点 |
|----------|--------------------------|
| **Prompt 与 Token 效率** | #63930（缓存失效）、#84750、#86812（异常高 token 消耗） |
| **跨平台稳定性** | #80912（Windows BSOD）、#70161、#74329、#86994（iOS Simulator） |
| **MCP / 外部工具可靠性** | #74329（MCP 服务器退出后重连问题）、#71711（Gmail 连接器不可见）、#86885（Gmail search_threads 估计值偏离） |
| **用户界面 & 交互细节** | #70161（状态行超链接）、#86857（工作区信任框未弹出）、#86993（远程控制开关未生效） |
| **使用限制与计费透明度** | #77469（#session‑limit 与实际恢复时间不符）、#87007（错误的月度花费限制提示） |
| **安全误报（ClAudit / AUP）** | 系列 #85354、#85365、#85385 等（普通操作被误判为违规导致会话中断） |
| **移动端体验** | #86533（iOS 会话列表卡顿、新会话不出现） |
| **协作与持久化** | #93910（Cowork：跨会话保存进度面板的任务） |

> 可以看出，社区最迫切希望在 **降低不必要的 token 开销、提升跨平台稳定性、确保 MCP/外部连接器的可靠性、改进使用限制的透明度以及减少安全误报** 四个方面取得进展。

---

### 6. 开发者关注点（痛点 & 高频需求）  

1. **Token 浪费与成本控制**  
   - Prompt cache 在多并行工具调用下频繁失效（#63930），导致大量重复 `cache_creation`。  
   - 异常高 token 消耗（#84750、#86812）让用户担心配额被快速耗尽。  

2. **平台稳定性**  
   - Windows 内核蓝屏（#80912）以及 macOS 下的 UI 失效（状态行超链接、工作区信任框）直接影响日常编辑。  
   - iOS 移动端会话列表卡住（#86533）限制了随时随地的使用场景。  

3. **工具链与扩展可靠性**  
   - MCP 服务器意外退出后的重连机制不稳（#74329），造成工具注册丢失。  
   - 特定服务连接器（Gmail、Calendar、Drive）在 CLI 中表现不一致（#71711），需要更统一的检测与激活机制。  

4. **使用限制提示的准确性**  
   - session‑limit 与实际恢复时间偏差大（#77469、#87007），导致用户误判等待时间，影响生产力。  

5. **安全审计误报**  
   - ClAudit / AUP 模型对合法操作（SSH 账号、MySQL 安装、普通脚本）产生 false positive，造成会话被中断（#85354 等系列），急需调整误报阈值或提供更细粒度的豁免机制。  

6. **协作功能的持久化需求**  
   - 用户期待 Cowork 能在跨会话中保存任务进度（#93910），以免在重启或切换项目后丢失待办。  

> 基于以上痛点，建议后续研发侧重：  
> - **缓存策略优化**（增量更新、失效检测）  
> - **跨平台崩溃捕获与恢复**（尤其是 Windows 内核层面）  
> - **MCP 插件生命周期管理**（更主动的健康检查与快速恢复）  
> - **使用限制计算与透明展示**（后台统一计时，前端实时同步）  
> - **安全模型调优**（降低对常规开发操作的误报率）  
> - **移动端状态同步**（确保会话列表实时更新）  

---

*本报告基于 GitHub 仓库 `anthropics/claude-code` 在 2026‑09‑12 至 2026‑09‑13 的公开数据整理，旨在为技术开发者提供快速的社区动态概览。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex 社区动态日报（2026‑09‑13）**  

---

### 今日速览  
- 未有新版本发布，社区讨论集中在 **iOS 远程端仅列出最近聊天**、**GPT‑6 Astra 配额被快速耗尽** 以及 **CLI 登录受电话验证频率限制** 三大问题上。  
- 多个与 **代码执行卡死**、**UI 元素消失**、**远程协作（VS Code Remote‑SSH、子代理线程）** 相关的 Issue 持续获得高热度评论，表明稳定性和跨平台协同是当前开发者的核心关注点。  
- 在 PR 方面，官方机器人正在推进一系列 **上下文管理、会话回显优化、令牌估计和沙盒路由** 的改进，预示着近期将在体验与资源可视化方面有较大更新。

---

### 版本发布  
> 过去 24 小时内无新版本发布。

---

### 社区热点 Issues（选取评论数高且代表性强的 10 条）

| # | 标题（链接） | 评论 / 👍 | 为什么重要 | 社区反应 |
|---|--------------|-----------|------------|----------|
|[#36040](https://github.com/openai/codex/issues/36040)|[OPEN] [bug, iOS, remote] Regression: iOS Remote only lists projects with recent chats|42 / 1|iOS 端在使用 Remote Control 时只能看到最近的聊天项目，导致旧项目无法快速切换，严重影响移动工作流。|评论众多，用户反馈该回归出现在最近的 macOS/ iOS 更新后，急需回滚或修复。|
|[#42987](https://github.com/openai/codex/issues/42987)|[OPEN] [bug, windows-os, rate-limits, CLI] GPT-6 Astra Medium depleted 100% of Plus 5‑hour quota in two short turns|21 / 14|GPT‑6 Astra 在极短时间内耗尽 Plus 用户的 5 小时 Codex 配额，暗示计费或 token 计量存在异常。|高赞数表明许多 Pro/Plus 用户遇到类似配额被“秒耗”情况，要求透明化计费机制。|
|[#25820](https://github.com/openai/codex/issues/25820)|[OPEN] [bug, auth, rate-limits, CLI] Codex CLI login blocked by phone verification rate limit — Pro subscriber|15 / 6|Pro 订阅者在执行 `codex login` 时触发电话验证频率限制，导致无法认证。|评论集中在验证流程过于严格，建议提升限额或提供替代验证方式。|
|[#22779](https://github.com/openai/codex/issues/22779)|[OPEN] [bug, subagent] Completed subagents continue to count against thread limit|15 / 1|已完成的子代理仍占用线程配额，导致后续任务被错误地限制。|开发者指出此 bug 使复杂多代理工作流难以扩展，期待线程计数的修正。|
|[#31376](https://github.com/openai/codex/issues/31376)|[OPEN] [bug, windows-os, exec, CLI, connectivity] `codex exec` can hang indefinitely before the SSE stream starts|14 / 3|长时间运行的 `codex exec` 在 Windows/Linux 上可能卡死，因 SSE 流等待缺少超时/重试机制。|评论强调此问题导致 CI/CD 流水线中断，需加入超时与重试逻辑。|
|[#44781](https://github.com/openai/codex/issues/44781)|[OPEN] [bug, windows-os, app, app-server] Editing and resending a queued message triggers "App-server queued follow-up no longer exists"|13 / 17|在 Windows 桌面端，对已排队的消息进行编辑后重新发送会出现错误提示，影响交互式使用。|高赞数表明很多用户日常依赖此操作，期待快速修复以恢复正常消息流。|
|[#43924](https://github.com/openai/codex/issues/43924)|[OPEN] [bug, app, browser] GPT Struggles to access tabs on browsers|9 / 0|Codex 应用在尝试访问浏览器标签页时频繁失败，削弱了其网页自动化能力。|虽然评论较少，但功能缺失直接影响网页代理场景，值得关注。|
|[#41695](https://github.com/openai/codex/issues/41695)|[OPEN] [bug, iOS, app, remote, performance] iPad App Freezes Constantly Accessing Remote Codex Sessions|8 / 0|iPad 使用远程 Codex 会话时频繁卡死，严重影响移动开发体验。|用户反馈卡顿发生在切换或长时间会话后，需改进 iOS 端的资源管理。|
|[#41849](https://github.com/openai/codex/issues/41849)|[OPEN] [bug, extension, session, app-server, remote] [VS Code Remote-SSH] Server reconnect leaves stale app-server holding thread writer; new session blocked by “This is open in another app”|8 / 7|Remote‑SSH 断线重连后，旧的 app-server 仍占用线程写入导致新会话被阻止。|评论显示此问题在分布式开发环境中频繁出现，期待在重连时清理残留资源。|
|[#34239](https://github.com/openai/codex/issues/34239)|[OPEN] [bug, windows-os, app, browser] [Windows desktop] Closing in-app Browser tab silently terminates Codex during WebView teardown|8 / 1|关闭内置浏览器标签页时 Codex 会静默退出，没有错误报告，导致工作丢失。|虽然点赞不多，但此类静默崩溃是严重的稳定性问题，需加强退出捕获和日志。|

---

### 重要 PR 进展（选取功能影响显著的 10 条）

| # | 标题（链接） | 功能/修复简述 |
|---|--------------|---------------|
|[#45090](https://github.com/openai/codex/pull/45090)|Preserve conversation context and separate next actions in recaps|在自动回溯中保留完整对话上下文，并将待办动作与已完成内容清晰分隔，提升回溯可读性。|
|[#45089](https://github.com/openai/codex/pull/45089)|Delay automatic recaps and compact their TUI layout|将自动回顾延迟从 3 分钟增加到 30 分钟，并采用更紧凑的 “↳ Recap:” 布局，减少频繁打断。|
|[#45094](https://github.com/openai/codex/pull/45094)|Estimate history tokens from content instead of serialized envelopes|改为基于实际内容估算历史记录 token，避免因封装元数据导致的过高估计。|
|[#45051](https://github.com/openai/codex/pull/45051)|Consolidate Rust release artifact downloads|将 Rust 发布制品的下载步骤合并为单一 artifact 下载，简化 CI 流程并降低构建时间。|
|[#44970](https://github.com/openai/codex/pull/44970)|Show task tokens and usage estimates in the agent command center|在命令中心直接显示任务的输入/输出 token 数以及估算的信用和美元成本，帮助用户实时监控消耗。|
|[#44969](https://github.com/openai/codex/pull/44969)|Open tasks managed elsewhere as read-only history in the command center|允许命令中心以只读历史形式打开由其他 app-server 管理的任务，提升跨工具查看历史的便利性。|
|[#44957](https://github.com/openai/codex/pull/44957)|Add model grouping to the agent command center|通过 `Ctrl+S` 在命令中心切换按模型分组展示任务，便于在多模型环境中快速定位。|
|[#44948](https://github.com/openai/codex/pull/44948)|Add context snapshots for async questions and plugin refresh|为异步用户输入和插件重新加载引入上下文快照，确保在等待答案或刷新期间状态不丢失。|
|[#44945](https://github.com/openai/codex/pull/44945)|Route TUI Windows sandbox setup through the app server|将 Windows 沙盒的提升/非提升设置路由经由 app-server，统一权限管理并避免重复提示。|
|[#44976](https://github.com/openai/codex/pull/

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI 社区动态日报（2026‑09‑13）**  

---

### 1. 今日速览
- 官方发布了 **v0.61.0‑nightly.20260912.g9c1b0a610**，重点修复了通过构建文件或不受信任标志实施的间接 Prompt Injection，并进一步加强了沙箱文件系统边界与运行时状态隔离。  
- 社区活跃讨论围绕 **子智能体恢复**、**沙箱安全**、**AST‑aware 文件操作**以及 **记忆系统日志** 四大方向展开，多个高评论 Issue 与对应 PR 同步推进。  
- 终端闪烁、检查点加载异常以及 MCP 提示文本处理等细节问题也获得了快速修复，提升了日常使用的稳定性与体验。

---

### 2. 版本发布
| 版本 | 发布时间 | 主要变更 |
|------|----------|----------|
| **v0.61.0‑nightly.20260912.g9c1b0a610** | 2026‑09‑12 | • **fix(core)**: 防止通过构建文件修改和不受信任标志实施的间接 Prompt Injection（@villahernandez-coder）<br>• **fix(sandbox)**: 加固文件系统边界，隔离运行时状态（@diegogodinezr）<br>详见：[Release v0.61.0‑nightly.20260912.g9c1b0a610](https://github.com/google-gemini/gemini-cli/releases/tag/v0.61.0-nightly.20260912.g9c1b0a610) |

---

### 3. 社区热点 Issues（按评论数及影响力挑选 10 条）

| # | 标题 | 评论 | 为何重要 | 社区反应 |
|---|------|------|----------|----------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after MAX_TURNS is reported as GOAL success, hiding interruption | 13 | 揭示子智能体在达到最大回合时仍返回 `GOAL` 状态，导致上层误判任务成功，掩盖实际中断。| 维护者已标记 **need‑retesting**，社区多次确认复现，期待尽快给出明确的终止原因。 |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | Leverage model's bash affinity via Zero‑Dependency OS Sandboxing & Post‑Execution Intent Routing | 9 | 探讨如何充分利用 Gemini 3 对原生 Bash 的亲和力，同时保持零依赖沙箱安全。| 1 个 👍，讨论聚焦在沙箱设计与意图路由的可行性，维护者持续跟踪。 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs | 8 | 当 gemini-cli 委派给通用 agent 时出现无限挂起，即使是简单的文件夹创建也会卡住。| 8 个 👍，社区普遍遇到，提供了绕过方式（禁用子代理），维护者正在需要重新测试。 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Assess the impact of AST‑aware file reads, search, and mapping | 7 | 评估使用 AST 感知工具进行精细代码读取/搜索是否能减少轮数和 token 噪声。| 1 个 👍，讨论列出了可能的工具（tilth、glyph），社区对性能提升持乐观态度。 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini does not use skills and sub‑agents enough | 6 | 反馈模型主动调用自定义技能/子智能体的频率极低，除非显式指令。| 0 个 👍，但多位开发者在评论中举例说明场景，期待改进自动触发机制。 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Add deterministic redaction and reduce Auto Memory logging | 5 | 指出 Auto Memory 在把秘密发送给模型后才进行脱敏，且日志过多导致噪声。| 0 个 👍，社区认同需要更早的脱敏和日志裁剪。 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Stop Auto Memory from retrying low‑signal sessions indefinitely | 4 | 低信号会话被反复重试导致资源浪费。| 0 个 👍，讨论聚焦在如何判定并跳过低信号会话。 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell command execution gets stuck with “Waiting input” after command completes | 4 | 执行完简单命令后 CLI 仍显示等待用户输入，造成假死。| 3 个 👍，社区提供了复现步骤，期待在输入流处理上加强。 |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | Enhance browser_agent resilience: Automatic session takeover and lock recovery | 4 | 浏览器子智能体在遇到锁定的配置文件时采用 fail‑fast 策略，导致中断无法自动恢复。| 0 个 👍，但有开发者提出了会话劫持和锁恢复的需求。 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent fails in Wayland | 4 | 在 Wayland 环境下 browser subagent 无法启动，终止原因显示为 GOAL。| 1 个 👍，社区反馈这是跨平台支持的痛点。 |

---

### 4. 重要 PR 进展（挑选 10 条具有代表性的 PR）

| # | PR 标题 | 核心改动 | 为什么重要 |
|---|---------|----------|------------|
| [#29292](https://github.com/google-gemini/gemini-cli/pull/29292) | fix(checkpoint): validate history is an array in loadCheckpoint | 在加载检查点时增加对 `history` 字段是否为数组的校验，防止非法 JSON 导致后续操作崩溃。| 解决了因检查点文件损坏导致的 `/resume` 失效问题，提升了会话恢复的可靠性。 |
| [#29294](https://github.com/google-gemini/gemini-cli/pull/29294) | fix(cli): prevent terminal flickering caused by stdout contention and cursor focus | 通过调整 Ink 渲染循环，减少因 stdout 竞争导致的终端抖动。| 直接改善了交互体验，特别是在高频输入时的闪烁问题。 |
| [#29214](https://github.com/google-gemini/gemini-cli/pull/29214) | fix(sandbox): harden filesystem boundaries and isolate runtime state | 将宿主目录挂载替换为经过净化的配置文件，使用 realpath 进行路径敏感检查，并加入不存在路径的回退机制。| 与当天发布的安全修复呼应，进一步降低沙箱逃逸风险。 |
| [#29230](https://github.com/google-gemini/gemini-cli/pull/29230) | docs: fix dead anchors across guides | 修复了七份文档中失效的内部/跨文件锚点，确保链接可用。| 提高了文档可读性和检索效率，减少了新手上手时的困惑。 |
| [#29208](https://github.com/google-gemini/gemini-cli/pull/29208) | fix(core): fall back to empty on malformed agents.json shape | 当 `agents.json` 为 null、标量或数组时，`load` 现在返回空对象而不是抛 TypeError。| 防止因配置文件意外损坏导致的启动崩溃，增强了容错能力。 |
| [#29287](https://github.com/google-gemini/gemini-cli/pull/29287) | feat(policy): map --yolo to allowedTools wildcard policy | 将 `--yolo` 旗帜直接映射为 `allowedTools: ["*"]`，移除独立的 `ApprovalMode.YOLO` 状态。| 简化了策略模型，避免了因状态枚举导致的不一致行为。 |
| [#29205](https://github.com/google-gemini/gemini-cli/pull/29205) | fix(cli): submit MCP prompt text without JSON encoding | 直接发送 MCP 响应文本，保留原始引用和换行，移除之前的 JSON 包装。| 解决了因额外编码导致的提示丢失或转义错误，提升了工具间的忠实度。 |
| [#29217](https://github.com/google-gemini/gemini-cli/pull/29217) | fix(config): don't rewrite explicit gemini-2.5-flash model selection | 改进 `isFlashModel()` 判定逻辑，避免把用户显式锁定的 `gemini-2.5-flash` 自动升级为 `gemini-3.5-flash`。| 尊重用户的模型偏好，防止因自动升级引发的不兼容。 |
| [#29211](https://github.com/google-gemini/gemini-cli/pull/29211) | fix(cli): stop scheduling state updates from inside a state updater | 防止 `useInputHistoryStore.addInput()` 在状态更新器内部再次调用状态设置，符合 React 的更新规则。| 消除了潜在的无限循环或警告，提升了状态管理的健壮性。 |
| [#29201](https://github.com/google-gemini/gemini-cli/pull/29201) | fix(cli): preserve approved shell commands across confirmation retries | 在多个 `!{...}` shell 注入需要确认的场景中，记住已批准的命令，避免反复询问。| 改进了交互流程，减少了用户在复杂自定义命令时的确认疲劳。 |

---

### 5. 功能需求趋势（从所有 Issues 中提炼）

| 趋势 | 关联 Issues / PR | 说明 |
|------|-------------------|------|
| **子智能体可靠性 & 自动恢复** | #22323, #21409, #21968, #29208, #29217 | 社区普遍反映子智能体在达到轮数限制、挂起或未主动使用技能时表现不稳定，期望更明确的终止原因、自动重试或降级机制。 |
| **沙箱与安全强化** | #19873, #26525, #26522, #29214, #29203, #29201 | 防止 Prompt Injection、文件系统逃逸、低信息会话无限重试以及记忆系统日志过多是热点，安全相关 PR 持续推进。 |
| **AST‑aware 代码工具** | #22745, #22746, #29230（文档） | 探索使用 AST 感知的读取/搜索/映射工具以减少 token 开销和提升精度，社区对性能提升持正面态度。 |
| **记忆系统与日志优化** | #26525, #26522, #26523, #26516 | Auto Memory 的脱敏时机、日志量、低信号会话处理成为改进焦点。 |
| **终端交互与性能** | #29294, #21924, #25166, #22465 | 减少终端闪烁、提高尺寸调整流畅度、解决命令完成后仍显示等待输入的问题。 |
| **配置与模型选择透明度** | #29217, #21335, #20079 | 用户希望对模型自动升级、会话压缩持久化、符号链接代理等细节有更可预期的行为。 |
| **工具链与插件体验** | #29205 (MCP), #29287 (--yolo), #29118 (extensions .git) | 改进 MCP 提示处理、简化策略标志、修复扩展名解析，使插件与外部工具

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-09-13** ｜ 数据来源：github.com/github/copilot-cli

---

## 一、今日速览

过去 24 小时内 Copilot CLI 仓库无新版本发布，但社区活跃度集中在**稳定性与多模型协作**两条主线上：Linux 平台的 JavaScript 堆内存溢出（#4725）持续发酵，而新模型接入带来的图片处理、子代理缓存等问题在 09-12 集中爆发（#4831、#4829）。协议层方面，MCP 取消请求缺失的问题（#4759）已关闭，表明相关修复已落地；同时供应链安全与依赖升级仍是 PR 区的主要工作。

---

## 二、版本发布

过去 24 小时内**无新 Release**。社区反馈中提及的当前版本为 **v1.0.83**（见 Issue #4829 环境信息）。

---

## 三、社区热点 Issues

> 说明：过去 24 小时内更新的 Issue 共 **7 条**，以下为全部条目。因数据源仅提供 7 条，无法凑满 10 条，故按重要性排序完整呈现。

### 🔴 高优先级：稳定性与崩溃

**1. #4725 [OPEN] [area:platform-linux] Frequent JavaScript heap out of memory**
- 作者：jbulow ｜ 创建 09-04 ｜ 更新 09-12 ｜ 💬 4 ｜ 👍 1
- 现象：CLI 每隔几分钟即因 V8 堆内存耗尽崩溃（Mark-Compact 阶段 allocation failure，堆占用接近 4GB）。
- **为何重要**：这是当前唯一带 `area:platform-linux` 标签的持续崩溃问题，影响面广且已持续一周仍未关闭；4 条评论说明维护者与用户已有互动，但尚无明确修复方案。Linux 用户在生产/长会话场景下基本不可用。
- 🔗 https://github.com/github/copilot-cli/issues/4725

**2. #4829 [OPEN] [triage] 子代理单轮长工具调用序列导致 prompt caching 失效、token 消耗成倍增长**
- 作者：gcapnias ｜ 创建/更新 09-12 ｜ 💬 0 ｜ 👍 0
- 环境：v1.0.83 / Windows 11 / PowerShell / Gemini 3.8 Flash
- 现象：通过 `task` 工具运行自主子代理时，允许其在单轮内执行数百次工具调用，导致缓存无法命中，token 成本复合式上升。
- **为何重要**：直接关联使用成本（成本敏感型用户的核心关切），且涉及 agent harness 的架构设计（单轮调用上限、缓存边界）。新开 Issue 尚无讨论，值得尽早介入。
- 🔗 https://github.com/github/copilot-cli/issues/4829

### 🟠 多模型 / 多模态能力

**3. #4831 [OPEN] [triage] 粘贴一张图片后，claude-opus-5 无法再查看任何图片**
- 作者：incrediblecrab ｜ 创建/更新 09-12 ｜ 💬 0 ｜ 👍 0
- 现象：在 claude-opus-5 会话中粘贴一张截图后，后续所有 `view` 调用均返回 "You've reached the maximum number of images you can view (1)"，CLI 提示已从模型中移除 2 张图片。
- **为何重要**：典型的**新模型接入回归**——图片配额计数在 opus-5 上被错误地限制为 1。多模态是 Copilot CLI 的核心卖点，该问题会直接打断涉及截图/UI 调试的工作流。
- 🔗 https://github.com/github/copilot-cli/issues/4831

**4. #4825 [OPEN] [triage] HydraFusion：向 OpenTelemetry 输出每阶段的模型、判定与 credit 属性**
- 作者：samueltauil ｜ 创建/更新 09-12 ｜ 💬 0 ｜ 👍 0
- 需求：HydraFusion 一轮对话可能调用多个模型，但外部只能看到一个最终答案和一个 credit 数值。CLI 已将每次路由决策写入 `~/.copilot/session-state/<id>/events.jsonl`，但这些数据未进入 OpenTelemetry。
- **为何重要**：反映**多模型路由的可观测性缺口**。对企业用户而言，模型路由的透明度与计费归因是落地前提。
- 🔗 https://github.com/github/copilot-cli/issues/4825

### 🟡 协议与工具链

**5. #4759 [CLOSED] [area:mcp] Copilot CLI 应发送 MCP 取消请求**
- 作者：rroesch1 ｜ 创建 09-07 ｜ 更新 09-12 ｜ 💬 1 ｜ 👍 0
- 现象：当工具调用正在等待进行中的 URL 模式 elicitation（如浏览器认证流程）完成时，若用户取消该调用，CLI 不会向 MCP 服务器发送取消请求。
- **为何重要**：已 **CLOSED**，是本批数据中唯一的关闭项，说明 MCP 协议合规性修复已推进。MCP 生态兼容性是 CLI 扩展能力的关键，取消语义缺失会导致服务端资源悬挂。
- 🔗 https://github.com/github/copilot-cli/issues/4759

### 🟢 交互体验与功能请求

**6. #4824 [OPEN] [triage] ctrl-t 入队提示词无法执行**
- 作者：mziller ｜ 创建 09-11 ｜ 更新 09-12 ｜ 💬 1 ｜ 👍 0
- 现象：`ctrl-t` 可将提示词加入队列，但在前一个提示完成后不会执行，UI 永久停留在 "Working" 旋转状态。用户建议自动执行全部队列项，或允许标记哪些提示需自动调度。
- **为何重要**：交互层的基础缺陷，阻塞"连续下达任务"的高频使用模式，并伴随状态机卡死。已有 1 条评论，讨论正在展开。
- 🔗 https://github.com/github/copilot-cli/issues/4824

**7. #4830 [OPEN] [triage] 新增 /remove-dir 命令以撤销目录访问权限**
- 作者：ashutoshkbharti ｜ 创建/更新 09-12 ｜ 💬 0 ｜ 👍 0
- 需求：现有 `/add-dir` 与 `/list-dirs`，但缺少对应的移除命令；用户只能重启或重置会话状态才能收缩目录访问范围。
- **为何重要**：属于**权限最小化**类需求，与 CLI 的安全模型直接相关。实现成本低、收益明确，是典型的高性价比功能请求。
- 🔗 https://github.com/github/copilot-cli/issues/4830

---

## 四、重要 PR 进展

> 说明：过去 24 小时内更新的 PR 共 **3 条**，以下为全部条目。

**1. #4828 [OPEN] build(deps): 升级 actions/github-script 7.1.0 → 9.0.0**
- 作者：dependabot[bot] ｜ 创建/更新 09-12 ｜ 标签：dependencies, github_actions
- 跨两个大版本（v8 → v9）的 major 升级，通常涉及 Node 运行时与 API 破坏性变更，需关注 workflow 脚本兼容性。
- 🔗 https://github.com/github/copilot-cli/pull/4828

**2. #4827 [OPEN] build(deps): 升级 actions/stale 9.1.0 → 11.0.0**
- 作者：dependabot[bot] ｜ 创建/更新 09-12 ｜ 标签：dependencies, github_actions
- 同为跨大版本升级（v10、v11），stale 机器人负责 Issue/PR 自动清理策略，升级后需验证关闭规则与标签行为是否变化。
- 🔗 https://github.com/github/copilot-cli/pull/4827

**3. #4808 [CLOSED] 将 GitHub Actions 固定到 commit SHA**
- 作者：github-security-bot ｜ 创建 09-10 ｜ 更新 09-12
- 内容：将 `uses:` 引用固定为不可变的 commit SHA。变更统计：改动文件 4 个、扫描文件 3 个、发现引用 3 处、固定 3 处、跳过 0、警告 0、错误 0。
- **为何重要**：已合入/关闭的**供应链安全加固**，符合 GitHub 官方对 Actions 可复现性与防篡改的最佳实践，与上述两个 dependabot 升级 PR 形成配套的 CI 安全治理。
- 🔗 https://github.com/github/copilot-cli/pull/4808

---

## 五、功能需求趋势

从本批 Issues 中可提炼出四条社区关注主线：

| 方向 | 代表 Issue | 说明 |
|---|---|---|
| **运行时稳定性与资源管理** | #4725 | 内存溢出/崩溃是最高优先级的体验杀手，尤其在 Linux 长会话场景 |
| **多模型 & 多模态支持** | #4831、#4829、#4825 | claude-opus-5、Gemini 3.8 Flash、HydraFusion 多模型路由相继进入讨论，新模型接入质量与路由透明度成为新战场 |
| **MCP 协议完备性与可观测性** | #4759、#4825 | 从"能连上"走向"行为合规 + 可追踪"，取消语义、OTel 埋点是下一步 |
| **权限与会话管理** | #4830 | 目录访问权限需要可增可减，权限最小化诉求明确 |

此外，交互层（#4824 队列执行）和 **token 成本控制**（#4829）是两个横切关注点。

---

## 六、开发者关注点

1. **崩溃与内存是头号痛点**：#4725 以 4 条评论、1 个 👍 成为本批数据中互动最多的 Issue，说明 Linux 平台的堆内存问题已积累相当的用户不满，且一周未解。
2. **新模型接入质量参差**：#4831 的图片配额计数错误与 #4829 的子代理缓存失效，都出现在较新模型上，反映"支持新模型"与"在旧功能上不回归"之间存在张力。
3. **成本可见性诉求上升**：token 消耗（#4829）与 credit 归因（#4825）同时被提出，开发者希望掌握模型路由与计费的"黑盒"内部细节。
4. **交互状态机需更稳健**：#4824 的 "Working" 永久旋转属于状态卡死，比单纯功能缺失更影响信任感。
5. **权限控制闭环缺失**：#4830 指出 `/add-dir` 有加无减，反映出安全相关命令集设计时未考虑会话内的动态收缩需求。
6. **CI/供应链治理在推进**：3 条 PR 全部围绕依赖升级与 Actions SHA 固定，说明仓库在工程规范层面保持常规维护节奏。

---

*注：本日报基于数据源提供的 7 条 Issue 与 3 条 PR 生成。数据源中 Issues 与 PR 的实际条数少于模板要求的 10 条，为保证信息真实性，未做补充或推测。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期：2026-09-13** ｜ 数据来源：github.com/MoonshotAI/kimi-cli

---

## 1. 今日速览

今日社区活跃度较低，无新版本发布、无 PR 更新，过去 24 小时内仅有 3 条 Issue 发生变动。其中唯一仍处于 OPEN 状态的是 Web UI 队列面板新增 Steer（⚡）按钮的功能请求，已积累 2 个 👍，是当前最受关注的诉求。另外两条为已关闭的旧 Issue（Web 模式端口刷新异常、模型行为过于激进），今日被重新更新，可能意味着问题被回溯处理或归档整理。

> ⚠️ **数据说明**：本周期内 PR 数量为 0、有效更新 Issue 仅 3 条，不足以支撑"各挑选 10 个"的筛选要求。以下章节按实际可得数据呈现，并对趋势部分做有限推断。

---

## 2. 版本发布

过去 24 小时内**无新 Release**，本节省略。

---

## 3. 社区热点 Issues

本期仅有 3 条 Issue 有更新，全部列出：

### ① #2370 [OPEN] [enhancement] 为 Web UI 队列面板添加 Steer（⚡）按钮
- 作者：2986787982dsx-ui ｜ 创建：2026-05-26 ｜ 更新：2026-09-12 ｜ 评论：1 ｜ 👍：2
- 链接：https://github.com/MoonshotAI/kimi-cli/issues/2370
- **为什么重要**：这是本期唯一处于 OPEN 状态的 Issue，也是唯一获得正向反馈（2 个 👍）的条目。诉求指向一个真实的使用摩擦——在 Windows PowerShell 通过 `kimi web` 启动的 Web UI 中，当 AI 正在运行时按 `Enter` 发送跟进消息，消息会进入队列而非立即干预（steer）当前任务。用户希望有一个显式的 ⚡ 按钮来打断/引导正在执行的流程。
- **社区反应**：讨论尚浅（1 条评论），但点赞表明该交互痛点具备一定普遍性，属于"低实现成本、高感知收益"的 UI 改进。

### ② #1409 [CLOSED] [bug] Web 模式持续刷新并连接到不同端口
- 作者：LSTM-Kirigaya ｜ 创建：2026-03-11 ｜ 更新：2026-09-12 ｜ 评论：0 ｜ 👍：0
- 链接：https://github.com/MoonshotAI/kimi-cli/issues/1409
- **为什么重要**：涉及 CLI v1.20.0 在 macOS（Darwin 25.2.0 arm64）上使用 `/web` 时网页反复刷新、端口漂移的问题，直接影响 Web 模式的可用性。该 Issue 已关闭且无评论，推测已在后续版本修复或以其他方式解决，今日更新可能为状态同步。
- **社区反应**：无评论、无点赞，关注度低，但对 Web 模式用户属于阻断级问题。

### ③ #1404 [CLOSED] [bug] 模型行为过于激进（Reckless behaviour）
- 作者：acorello ｜ 创建：2026-03-11 ｜ 更新：2026-09-12 ｜ 评论：0 ｜ 👍：0
- 链接：https://github.com/MoonshotAI/kimi-cli/issues/1404
- **为什么重要**：用户反馈在 CLI v1.19.0（macOS Darwin 25.3.0 arm64）中要求 Kimi 先制定并展示计划，但模型表现出越权/激进执行倾向。这类"计划-执行边界"问题关系到 AI 编码工具的可控性与信任度，属于高价值反馈。
- **社区反应**：无公开讨论，可能通过其他渠道跟进或已关闭处理。

---

## 4. 重要 PR 进展

过去 24 小时内**无 PR 更新（0 条）**，本节省略。

---

## 5. 功能需求趋势

基于本期全部 3 条 Issue，可提炼出以下方向（样本极小，仅作线索参考）：

| 方向 | 代表 Issue | 说明 |
|---|---|---|
| **Web UI 交互能力** | #2370 | 希望增强 Web 端对运行中任务的可控性（队列干预 / steer 机制），反映 CLI 之外 Web 形态的使用比重在上升 |
| **Web 模式稳定性** | #1409 | 端口与页面刷新异常，属于基础设施层面的可靠性诉求 |
| **Agent 行为可控性** | #1404 | 用户期望模型严格遵循"先计划、后执行"的约束，避免擅自行动 |

整体看，需求集中在**"人与 Agent 的协作控制权"**这一主题上：无论 UI 层的打断按钮，还是模型层的计划遵循，本质都是让开发者对 AI 的行为有更明确、更即时的掌控。

---

## 6. 开发者关注点

结合本期有限反馈，痛点可归纳为：

1. **运行中任务的实时干预缺失**——消息只能排队，无法即时引导，Web 端尤其明显（#2370）。
2. **Web 模式的环境可靠性**——端口漂移、页面反复刷新会直接打断工作流（#1409）。
3. **Agent 自主性与用户意图的冲突**——模型越过"先给计划"的指令直接行动，削弱了开发者对流程的信任（#1404）。
4. **平台差异需重视**——本期两条 bug 均来自 macOS arm64 环境，跨平台一致性值得持续关注。

---

### 编者按

本周期数据量处于低谷（3 条 Issue 更新、0 PR、0 Release），日报内容有限。建议持续观察 #2370 的讨论走向，若维护者回应或转化为 PR，将是一个值得跟进的轻量级体验优化。同时，两条已关闭 Issue 今日被更新，或与版本回溯处理相关，后续如有对应 Release 说明可进一步印证。

*以上内容基于所提供的 GitHub 数据生成，未做数据外推或补充。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报（2026-09-13）

## 1. 今日速览
过去 24 小时无新版本发布，但 Issue 活动密集，剪贴板复制失效问题持续霸榜（#4283 累计 131 条评论、123 👍）。与此同时，V2 架构相关的 subagent、MCP、SSE 稳定性问题集中浮现；项目通过 automated-pr-cleanup 批量关闭了 20 个历史 PR，显示积极的代码债清理态势。

## 2. 版本发布
无新版本发布（过去 24 小时 Releases 为空），本节省略。

## 3. 社区热点 Issues
以下为评论互动最多或架构影响显著的 10 个 Issue（均更新于 2026-09-12）：

1. **#4283 Copy To Clipboard is not working**  
   [anomalyco/opencode#4283](https://github.com/anomalyco/opencode/issues/4283)  
   评论 131，👍 123。自 2025-11 延续至今的顽疾：选中响应文本后系统剪贴板无内容。社区反应极强烈，跨版本未解，核心 UX 阻塞。

2. **#13984 can not copy and paste in opencode CLI**  
   [anomalyco/opencode#13984](https://github.com/anomalyco/opencode/issues/13984)  
   评论 57，👍 32。CLI 中提示 “copied to clipboard” 但 Ctrl+V 无效，大量用户复现，尤其中文环境开发者。

3. **#41470 “Copied to clipboard” doesn't work**  
   [anomalyco/opencode#41470](https://github.com/anomalyco/opencode/issues/41470)  
   评论 22。VSCode Server（Docker）环境下假成功，说明容器化终端的剪贴板桥接缺失。

4. **#26459 Clipboard copy fails in web-based VSCode terminals**  
   [anomalyco/opencode#26459](https://github.com/anomalyco/opencode/issues/26459)  
   评论 14。code-server / Codespaces / Gitpod 等 Web 终端均中招，指向架构层远程剪贴板支持不足。

5. **#26602 Desktop hits 5-minute Headers Timeout Error with slow local providers**  
   [anomalyco/opencode#26602](https://github.com/anomalyco/opencode/issues/26602)  
   评论 12。桌面端对接慢速本地 OpenAI 兼容 provider 时硬编码 5 分钟超时，即便配置 `"timeout": false` 也无效，阻碍本地模型应用。

6. **#36761 [bug, core, 2.0] fix(core): expose valid subagent IDs to the model**  
   [anomalyco/opencode#36761](https://github.com/anomalyco/opencode/issues/36761)  
   评论 7。V2 `subagent` 工具未向模型暴露可用 ID 且无发现机制，导致委派执行期失败，属 V2 核心功能缺陷。

7. **#39628 [FEATURE]: Remote approval of permission requests from mobile / second device**  
   [anomalyco/opencode#39628](https://github.com/anomalyco/opencode/issues/39628)  
   评论 4。长任务常阻塞于权限弹窗，提议移动端/第二设备远程审批，反映代理脱离本地键盘的协作需求。

8. **#47258 Event stream (SSE) doesn't resume after tab is backgrounded and restored**  
   [anomalyco/opencode#47258](https://github.com/anomalyco/opencode/issues/47258)  
   评论 3。Web 应用 `pagehide` 总停流，但 `pageshow` 仅 `persisted` 时才恢复，导致须手动刷新，可靠性短板。

9. **#48675 "opencode run": zero-chunk provider stream stall never surfaces**  
   [anomalyco/opencode#48675](https://github.com/anomalyco/opencode/issues/48675)  
   评论 2。三个并行 headless `opencode run` 工人 17 秒内同时停滞，无超时/重试/退出，自动化代理卡死。

10. **#43845 [2.0] service: v2 service spawns one local MCP server pair per cataloged project directory**  
    [anomalyco/opencode#43845](https://github.com/anomalyco/opencode/issues/43845)  
    评论 2。V2 后台服务按目录数（约 53）各起一套 stdio MCP 进程，而非全局一套，资源滥用明显。

## 4. 重要 PR 进展
以下 10 个 PR 均于 2026-09-12 由 automated-pr-cleanup 流程关闭（多为历史提交回迁/清理），内容具技术参考值：

1. **#42150 fix(opencode): make text/reasoning delta accumulation O(N) instead of O(N²)**  
   [anomalyco/opencode#42150](https://github.com/anomalyco/opencode/pull/42150)  
   修复增量累积性能退化，降为线性复杂度（Fixes #30067）。

2. **#42112 feat(tui): show token throughput**  
   [anomalyco/opencode#42112](https://github.com/anomalyco/opencode/pull/42112)  
   TUI 中计算并显示每请求输出速度 `tok/s`，提升推理可观测性。

3. **#42102 fix(llm): preserve nested OpenAI stream errors**  
   [anomalyco/opencode#42102](https://github.com/anomalyco/opencode/pull/42102)  
   将 V2 已合入的嵌套 SSE 错误处理回迁 `dev` 分支（Closes #42007）。

4. **#42095 fix(desktop): stop sidecar before quitting**  
   [anomalyco/opencode#42095](https://github.com/anomalyco/opencode/pull/42095)  
   Linux 下退出桌面应用前先终止 sidecar，避免 NodeService 被 SIGABRT（Closes #42097）。

5. **#42084 fix: preserve trailing blank line in apply_patch**  
   [anomalyco/opencode#42084](https://github.com/anomalyco/opencode/pull/42084)  
   修补 `apply_patch` 静默删除文件末空行的问题（Fixes #42081）。

6. **#42052 feat(tui): display chained shell commands across multiple lines**  
   [anomalyco/opencode#42052](https://github.com/anomalyco/opencode/pull/42052)  
   新增 `commandDisplay` 将 `&&` 链接命令多行展示，增强会话视图可读性。

7. **#42047 feat(github): allow configured bots to trigger actions**  
   [anomalyco/opencode#42047](https://github.com/anomalyco/opencode/pull/42047)  
   GitHub Action 增加 `allowed_bots`，信任 Bot 可触发 OpenCode 工作流（Closes #7103）。

8. **#42020 fix(mcp): retry local server connection on transient spawn failures**  
   [anomalyco/opencode#42020](https://github.com/anomalyco/opencode/pull/42020)  
   并行 spawn MCP 时的瞬时失败重试，提升稳定性（Closes #41996）。

9. **#41968 fix(cli): survive broken stdio pipes**  
   [anomalyco/opencode#41968](https://github.com/anomalyco/opencode/pull/41968)  
   处理 EPIPE，防止后台服务因 stdout/stderr 消费者消失而崩溃。

10. **#41963 fix(core): respect repository git semantics**  
    [anomalyco/opencode#41963](https://github.com/anomalyco/opencode/pull/41963)  
    V2 工作树 VCS 适配器停止覆盖 `core.autocrlf`/`symlinks`，对齐源仓库语义。

## 5. 功能需求趋势
从全部 Issue 提炼，社区最关注的方向依次为：

- **剪贴板与终端/IDE 集成**：跨 CLI、Desktop、VSCode、Web IDE、Windows/Mac/GNU Screen 的复制粘贴支持是最密集诉求，需系统级剪贴板桥接方案。
- **V2 架构完善与发现机制**：subagent ID 暴露（#36761）、slash skill 参数保留（#48720）、MCP 资源收敛（#43845）、SSE 恢复（#47258）表明 V2 迁移期 API 发现与稳定性是重点。
- **远程协作与权限**：移动端/第二设备远程审批权限（#39628），呼应 AI 代理脱离本地操作的趋势。
- **桌面 UI 效率**：JetBrains 式面板双击最大化（#48661）、`opencode -s` 无 ID 打开会话选择器（#48718）。
- **模型提供商适配**：DeepSeek 4.1 Flash 限额修正（#48687）、含斜杠多段模型 key 支持（#48721）。

## 6. 开发者关注点
- **核心痛点**：复制粘贴“假成功”普遍；本地 provider 5 分钟硬编码超时（#26602）；V2 中 Ctrl+C 丢失草稿（#48636 已关但典型）；headless 流无声停滞（#48675）；桌面 sidecar 内存压力崩溃（#48715）。
- **高频需求**：可靠剪贴板、权限远程审批、TUI 信息丰富化（吞吐已通过 PR 实现）、会话管理便捷、文档多语言同步（如 zh-cn PR #41980）。整体显示开发者对“基础交互可靠性”和“V2 生产就绪”最为关切。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

**Pi 社区动态日报（2026‑09‑13）**  

---

### 今日速览
- 社区围绕 **OpenAI Codex 连接可靠性**（Issue #4945，78 条评论）展开深度讨论，开发者频繁遇到 TUI 卡在 “Working…” 的问题。  
- 全屏模式的滚轮灵敏度（#9052）和会话恢复时模型被错误覆盖（#9243）成为热点 UI/UX 痛点，已有多个 PR 尝试修复。  
- 今日新增两个 OAuth 提供商（**Google Antigravity** 与 **Cursor Pro**）的实现 PR（#9529），表明社区对无 API‑Key 登录方式的需求持续升温。

> 如无新版本发布，版本发布部分已省略。  

---

### 版本发布
> **今日无新版本发布**。  

---

### 社区热点 Issues（挑选 10 条，按讨论度与影响力排序）

| # | 标题 | 评论 / 👍 | 重要性说明 | 链接 |
|---|------|-----------|------------|------|
| #4945 | **[inprogress] openai-codex Connection Reliability Issues** | 78 / 33 | Codex 连接频繁卡死，仅靠 Esc 恢复，直接影响代理的可用性。社区提出超时、重连及更清晰的错误上报需求。 | https://github.com/earendil-works/pi/issues/4945 |
| #9052 | Fullscreen mode's fixed input box is great, but wheel scrolling is 3x slower than regular mode | 9 / 4 | 全屏模式滚轮延迟明显，影响代码浏览体验，亟需优化滚动实现。 | https://github.com/earendil-works/pi/issues/9052 |
| #8928 | **[inprogress] Parallel pi startup can report "No API key found" for ~48s when auth.json contains an expired OAuth credential for another provider** | 7 / 0 | 多进程启动时凭证检查导致长时间误报，影响 CI/CD 流程。 | https://github.com/earendil-works/pi/issues/8928 |
| #9311 | Fullscreen mouse selection survives session switch | 6 / 0 | 鼠标选中在切换会话后残留，造成混乱；建议在会话切换时清除选择状态。 | https://github.com/earendil-works/pi/issues/9311 |
| #9243 | Session resume restores the model from the last assistant message's echoed name, not from model_change | 3 / 1 | 会话恢复时模型被错误覆盖，导致后续请求使用错模型，需修改模型恢复逻辑。 | https://github.com/earendil-works/pi/issues/9243 |
| #9267 | Reduce fuzzy session-search scan cost without changing ranking | 4 / 1 | 建议用 `String.indexOf()` 替代逐字符扫描，可降低搜索延迟，尤其在大量会话时显著。 | https://github.com/earendil-works/pi/issues/9267 |
| #9262 | find tool: glob patterns with Windows separators (src\**\*.ts) silently return no results | 4 / 0 | Windows 路径分隔符导致查找失效，无错误提示，跨平台使用痛点。 | https://github.com/earendil-works/pi/issues/9262 |
| #9013 | Cache miss notices false-positive on local vLLM after a cloud model in the same session | 2 / 0 | 云模型使用后，本地 vLLM 会误报缓存未命中，造成困惑，需区分不同提供商的缓存统计。 | https://github.com/earendil-works/pi/issues/9013 |
| #9481 | Align Pi with Codex's canonical turn-attribution metadata | 1 / 0 | 希望 Pi 生成 Codex 兼容的 session/thread/turn ID，以便与外部工具链兼容。 | https://github.com/earendil-works/pi/issues/9481 |
| #9520 | stream_read_error 未触发自动重试，导致会话等待手动恢复 | 2 / 0 | 流读取错误未被重试机制捕获，导致会话挂起，建议把该错误纳入可重试范围。 | https://github.com/earendil-works/pi/issues/9520 |

> **社区反应**：高评论的 #4945 获得点赞 33，表明多数开发者认同该问题的紧迫性；其余 Issues 虽评论较少，但均获得 👍 或明确的修复需求，说明它们是开发者日常使用中的绊脚石。

---

### 重要 PR 进展（挑选 10 条，按功能影响力排序）

| # | 标题 | 类别 | 主要内容 | 链接 |
|---|------|------|----------|------|
| #9529 | feat(ai): add Google Antigravity and Cursor Pro OAuth providers | 功能新增 | 实现两个无需 API‑Key 的 OAuth 登录流程，包含回调服务器、手动码后端以及 token 刷新逻辑。 | https://github.com/earendil-works/pi/pull/9529 |
| #9517 | feat(tui): group long tool-call runs | UI/UX | 将连续六次以上的 tool call 折叠为一行，保留失败记录并提供点击展开；增加了单元测试。 | https://github.com/earendil-works/pi/pull/9517 |
| #9523 | Fix #9522 Pi's own blocking prompts do not emit ui_prompt_start / ui_prompt_end | BUG 修复 | 为内置选择器（模型选择、设置、恢复等）补发 ui_prompt_* 事件，使状态集成能正确感知用户等待。 | https://github.com/earendil-works/pi/pull/9523 |
| #9514 | fix(tui): route hardcoded keys through configurable bindings | 配置改进 | 将编辑器、输入框、模型选择器的硬编码快捷键改为可通过 keybinding 配置；新增 Ctrl+C 清空搜取等回归测试。 | https://github.com/earendil-works/pi/pull/9514 |
| #9531 | feat(tree): add permanent branch deletion from session tree | 功能新增 | 实现 SessionManager.pruneBranch 与 countSubtree，支持在会话树中删除离线分支及其子树，保护活跃路径。 | https://github.com/earendil-works/pi/pull/9531 |
| #9505 | fix(ai): honor model.samplingParams in the openai-completions stream | BUG 修复 | 确保模型级 samplingParams（如 repetition_penalty、dry_multiplier）在工具流路径中不被丢失。 | https://github.com/earendil-works/pi/pull/9505 |
| #8635 | fix(ai): preserve aborted stop reason during lazy setup | BUG 修复 | 在懒加载流设置过程中传递 abort signal，使提前中止的请求正确报告为 aborted。 | https://github.com/earendil-works/pi/pull/8635 |
| #9096 | feat(ai,coding-agent): add Meta provider with Muse subscription OAuth | 功能新增 | 添加 Meta（Muse）提供商，实现每日刷新的身份令牌机制以及目前的“假”流式输出。 | https://github.com/earendil-works/pi/pull/9096 |
| #9504 | fix(coding-agent): accept Windows Store shell aliases | 兼容性 | 使用 accessSync(F_OK) 替代 existsSync，以支持 Windows Store 中的 shell 别名。 | https://github.com/earendil-works/pi/pull/9504 |
| #9520（对应 Issue）| （未列出的 PR）| — | （基于 Issue #9520 的修复尚未出现 PR，保持关注）| — |

> **趋势**：本日的 PR 集中在 **OAuth 提供商扩展**、**UI 性能/可配置性**（折叠 tool call、热键可配置）以及 **底层可靠性**（停止原因保留、采样参数保留、事件补发）。这些改动直接响应了社区热点中的连接可靠性、滚轮延迟和会话状态不一致问题。

---

### 功能需求趋势（从所有 Issues 中提炼）

| 趋势 | 体现的 Issues / PR | 说明 |
|------|-------------------|------|
| **OAuth / 无 API‑Key 登录** | #9529（新增 Google Antigravity、Cursor Pro），#9096（Meta Muse），#9530（添加两个提供商的 Issue） | 社区强烈希望通过浏览器 OAuth 登录省去密钥管理，尤其是针对订阅制服务。 |
| **UI/UX 流畅度** | #9052（全屏滚轮慢），#9311（鼠标选择残留），#9517（tool call 折叠），#9514（可配置快捷键） | 开发者关注交互延迟、状态残留以及自定义键绑定，以提升长时间使用的舒适感。 |
| **会话与模型状态一致性** | #8928（启动时凭证误报），#9243（恢复模型错误），#9520（stream_read_error 未重试） | 需要在多进程、跨会话切换以及异常路径中保持模型、凭证和 UI 状态的正确同步。 |
| **性能与资源开销** | #9267（模糊搜索成本），#9013（错误的缓存未命中提示），#9512（compaction 达到 token 上限） | 社区希望降低搜索、补全及上下文压缩的计算开销，尤其在大规模会话或高推理模型下。 |
| **与外部工具链的兼容性** | #9481（Codex turn‑attribution 元数据），#9522/9523（ui_prompt 事件缺失） | 为了与插件、日志系统或外部监控保持一致，亟需统一事件和身份标识。 |

---

### 开发者关注点（痛点与高频需求）

1. **连接可靠性** – 频繁出现的 Codex/OpenAI 连接卡死（#4945）直接导致代理不可用，开发者期望更快的超时探测、自动重连以及明确的错误提示。  
2. **交互延迟与细节** – 全屏模式滚轮慢、鼠标选择残留、硬编码快捷键不灵活（#9052、#9311、#9514）影响日常编码流程，社区普希望这些 UI 细节可配置且性能优化。  
3. **会话状态同步** – 启动凭证误报（#8928）、恢复时模型被覆盖（#9243）、流读取错误不重试（#9520）都是会话状态不一致的典型表现，亟需在状态机与错误处理层面加强容错。  
4. **性能与资源管控** – 模糊搜索成本（#9267）和上下文压缩触发 token 上限（#9512）提示社区对算法效率和资源预算的敏感度，尤其在使用大模型（如 GPT‑6 Astra）时更为明显。  
5. **身份认证与事件透明度** – 新增 OAuth 提供商（#9529）以及对齐 Codex 元数据（#9481、#9523）表明开发者希望 Pi 能够以标准化方式向外部系统暴露身份、会话和事件信息，以便插件、审计和监控。  

> **总结**：本日期间的活动围绕 **提升连接稳健性、优化交互性能、统一会话状态以及扩展无密钥登录方式** 四个方向展开。后续若能在上述痛点上交付可度量的改进（如减少 Codex 卡死次数、把全屏滚轮延迟降至与普通模式相当、令会话恢复模型错误率趋于零），将直接提升社区对 Pi 的满意度与采用意愿。  

---  

*以上内容基于 2026-09-12 前的 GitHub Issue、Pull Request 数据整理，仅供参考。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 (2026-09-13)

## 🚀 今日速览
今日 Qwen Code 社区主要集中在 **UI 稳定性修复** 与 **执行环境架构优化**。开发者正在紧急处理一个导致 v0.23.3 崩溃的 React 渲染死循环 Bug（Error #185）。在架构层面，社区对于“将 Agent 骨架（Harness）与执行环境（Environment）解耦”的讨论正在升热，且对 Android 官方配套客户端的需求表现出积极反馈。

---

## 📦 版本发布
- **v0.23.3-nightly.20260912.54aa66834b**
  - **更新摘要**：每日构建版本，主要重构了钉钉插件的响应聚合逻辑，并移除了部分过时的通道功能。

---

## 🐞 社区热点 Issues (Top 10)

1. **[P1] TUI 在多后台代理完成时崩溃 (React #185)** #11500
   - **描述**：当多个后台子代理连续完成任务时，交互式 TUI 会触发 React “Maximum update depth exceeded”错误，导致进程直接退回 Shell。
   - **关注点**：高优先级 UI  Bug，严重影响多任务并行场景的体验，已有 10 条评论。
2. **[P1] 0.23.3 在原生监控任务运行时崩溃** #11732
   - **描述**：确认了在 0.23.3 版本中，如果原生监控任务仍在运行，TUI 会发生上述 React #185 错误。
   - **关注点**：长任务执行场景下的稳定性问题。
3. **[P2] 架构建议：解耦 Agent Harness 与执行环境** #11695
   - **描述**：建议将工具执行环境转变为一个可分离、可寻的运行时部分，而不是 Agent 循环进程的属性。
   - **关注点**：核心架构演进，有助于提升沙盒安全性和扩展性。
4. **[P2] .mcp.json 中的环境变量未被解析** #11499
   - **描述**：在配置 MCP 服务器时，`${MY_TOKEN}` 等占位符被字面量发送，而非环境变量中的值。
   - **关注点**：MCP 配置功能性缺陷，涉及安全认证。
5. **[P2] 内存占用过高 (检测 7GB)** #11724
   - **描述**：用户反馈在 Windows 下检测到内存占用高达 7GB，并可能伴随崩溃。
   - **关注点**：性能优化与资源管理问题。
6. **[P2] 右键上下文菜单未拦截按键** #11228
   - **描述**：当打开右键菜单时，Composer 和工具确认对话框仍会响应按键，导致操作冲突。
   - **关注点**：UI 交互细节待优化。
7. **[P2] AppImage 泄露 Python 环境变量** #11718
   - **描述**：桌面版 AppImage 模式会将全局的 `PYTHONHOME` 和 `PYTHONPATH` 泄露给所有 stdio MCP 进程，导致外部解释器冲突。
   - **关注点**：Linux 环境隔离性问题。
8. **[P3] 官方 Android 伴侣客户端提案** #11704
   - **描述**：提议构建基于 `qwen serve` 的轻量级 Android 客户端，而非在手机运行完整运行时。
   - **关注点**：跨平台扩展需求强烈。
9. **[P3] 内部标签（Thinking Tags）泄露到用户输出** #10559
   - **描述**：讨论如何定义输出边界，防止模型内部的思考标签直接显示在用户可见的界面中。
   - **关注点**：模型输出的体验感与一致性。
10. **[P2] 夏令时导致 Cron 下次执行时间计算错误** #11720
    - **描述**：在夏令结束导致重复的小小时内，定时 任务可能计算出过去的时间，导致任务重复触发。
    - **关注点**：特定边缘场景的逻辑 Bug。

---

## 🛠️ 重要 PR 进展 (Top 10)

1. **[feat] 为子代理添加容器执行环境** #11711
   - **内容**：支持通过 Docker 或 Podman 为子代理提供隔离的容器执行环境，极大地提升安全性。
2. **[feat] Workflow 增加 effort 强度和 disallowedTools 选项** #11691
   - **内容**：允许工作流控制每个 Agent 的“思考强度”（low 到 max）并禁止其使用特定工具。
3. **[feat] Web Shell 支持 PWA 安装** #11722
   - **内容**：允许将 Web Shell 界面安装为 PWA 应用，提升桌面化使用体验。
4. **[fix] 让 Shell 输出由工具自身的预算决定截断** #11727
   - **内容**：修复了多个策略冲突计算大小的问题，现在由工具根据自身预算进行截断并保留尾部退出状态码。
5. **[fix] 修复 One-shot 系统提示显示在用户消息中** #11562
   - **内容**：确保 TUI 中折叠的系统提示不会出现在用户的历史记录或回 回显框中。
6. **[feat] 针对不同模型选择 OpenAI API 类型** #11538
   - **内容**：允许为 OpenAI 兼容提供者配置使用 `chat-completions` 或 `responses` 接口。
7. **[fix] 增强 MCP 连接池的生命周期管理** #11708
   - **内容**：优化了共享 MCP 连接池的权属跟踪，使意外中断变得可观测。
8. **[fix] 在 Web Shell 中使用内置 ConPTY 运行终端** #11643
   - **内容**：修复了在 inbox 模式下失败时未能释放资源并保留回滚（scrollback）的问题。
9. **[feat] 配置 web_search 超时时间并增加兜底** #11692
   - **内容**：将默认搜索超时从 60s 提升至 120s，并增加了超时后的模型截断处理。
10. **[fix] 进程异常退出时清理所有运行中的监控任务** #11742
    - **内容**：在交互进程因未捕获异常异常退出时，立即停止所有后台监控器，防止资源泄漏。

---

## 📈 功能需求趋势
*   **环境隔离与安全**：社区正极度关注 Agent 执行环境的安全性，对 Docker/Podman 容器化和 SSH 远程执行的需求迫切。
*   **UI 稳定性**：在处理多任务并发时，TUI 的渲染稳定性（尤其是 React 循环）是当前用户最急需解决的痛点。
*   **跨平台化**：Android 客户端和 PWA 模式的需求反映出用户希望将 Qwen Code 更多地融入非终端场景的愿望。
*   **细粒度控制**：开发者希望能够更精细地控制 Agent 的思考深度（Effort）和工具访问白名单。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

**DeepSeek TUI 社区动态日报（2026‑09‑13）**  

---

### 今日速览  
- 社区围绕 **CodeWhale 上下文压力警报失效**（#5620）和 **核心 Crate 拆分规划**（#5316）展开了热烈讨论，评论数分别达到 18 条和 22 条。  
- 同时，**代码 TUI 的交互细节**（用户输入模框剪切、状态栏新增 `workspace`/`git_branch` 等）以及 **模型服务变更**（DeepSeek V4 Pro 即将下线）也成为今日关注热点。  
- 未发现新版本发布，但多个依赖升级和功能 PR 已进入合并阶段，预计将在近期版本中体验到改进。

---

### 版本发布  
> 过去 24 小时内无新版本发布。  

---

### 社区热点 Issues（按评论数排序）  

| 编号 | 标题 | 评论 | 为什么重要 / 社区反应 | 链接 |
|------|------|------|----------------------|------|
| #5316 | **EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)** | 22 | 讨论核心 Crate 的拆分计划与所有权顺序，关系到未来模块化与维护成本；社区对依赖图和 Linear 执行计划给出了详细反馈。 | https://github.com/Hmbown/DeepSeek-TUI/issues/5316 |
| #5620 | **[bug, context, compaction] Context pressure warning is transient and the agent does not proactively react to it** | 18 | 指出上下文压力警报仅为瞬时提示，Agent 未主动触发压缩或降级，可能导致 silenzious 上下文退化；开发者认为这是安全信号失效的隐患。 | https://github.com/Hmbown/DeepSeek-TUI/issues/5620 |
| #5929 | **[bug] Parallel‑execution flakes in the codewhale‑tui lib suite (tracking)** | 8 | 描述在高负载下出现间歇性测试失败，隔离运行却通过，暗示竞态或资源争用问题；社区关注 CI 稳定性与重测成本。 | https://github.com/Hmbown/DeepSeek-TUI/issues/5929 |
| #6011 | **[enhancement] feat(tui): usage & tool diagnostics — token accounting (per‑component, per‑model + cache hit rate, per‑tool sinks, compaction cost) and tool‑call error patterns** | 6 | 提出全方位 token 使用统计与工具调用错误追踪，旨在帮助用户优化成本与定位失败；赞成声明显，期待在 C11 里落地。 | https://github.com/Hmbown/DeepSeek-TUI/issues/6011 |
| #6045 | **[bug] user‑input modal clips options and hides typed input — fixed 22‑row cap, centered overlay, no scroll, no back‑navigation, undocumented** | 5 | 描述在真实终端中用户输入弹窗被截断、遮挡对话历史的问题，已给出具体复现步骤；修复后将提升交互可靠性。 | https://github.com/Hmbown/DeepSeek-TUI/issues/6045 |
| #6025 | **DeepSeek plans to discontinue the V4 Pro service at 12:00 Beijing Time on September 14, 2026** | 5 | 官方宣布 V4 Pro 即将下线，所有请求将自动降级至 V4.1 Flash 并按 Flash 计价；社区担心成本上升与功能兼容性，纷纷询问迁移指南。 | https://github.com/Hmbown/DeepSeek-TUI/issues/6025 |
| #6102 | **[bug] bug(session): resuming an interrupted session fails with ENOENT while resolving its runtime store dir** | 5 | 中断后恢复会话因运行时存储目录丢失导致 ENOENT 错误，影响工作流的连续性；修复将提升容错能力。 | https://github.com/Hmbown/DeepSeek-TUI/issues/6102 |
| #6015 | **[documentation, enhancement] feat(fleet): adaptive anti‑stall + wider read‑only shell grammar (defaults, not per‑user config)** | 4 | 为 fleet 增加自适应防停滞和更宽松的只读 shell 语法，默认开启；社区认为这可降低因误触发停止而导致的卡死。 | https://github.com/Hmbown/DeepSeek-TUI/issues/6015 |
| #6018 | **[bug] Google Gemini problem on "from scratch" installation** | 4 | 初次安装时 Google Gemini 插件无法正常加载，影响多模型支持；社区期望快速定位并提供回退方案。 | https://github.com/Hmbown/DeepSeek-TUI/issues/6018 |
| #5856 | **[enhancement, release‑blocker, tools] Computer‑use plugin: live‑install receipt + first look‑act loop** | 3 | 描述 computer‑use 插件的实时安装凭证与首次观察‑行动循环，是实现插件市场的重要里程碑；社区关注其是否会成为リリース阻塞点。 | https://github.com/Hmbown/DeepSeek-TUI/issues/5856 |

---

### 重要 PR 进展（按功能影响排序）  

| PR 编号 | 标题 | 关键内容 | 链接 |
|---------|------|----------|------|
| #6110 | **feat(pet): add persistent world and work‑driven dot forms** | 引入持久化的宠物世界模型，支持跨平台（browser、Apple、Android、TUI）共享状态点，为未来可视化反馈奠基。 | https://github.com/Hmbown/DeepSeek-TUI/pull/6110 |
| #6100 | **feat(web_search): add Serply search provider** | 新增 Serply（https://serply.io）作为 Web 工具的搜索提供者，采用 X‑Api‑Key 头部认证，返回标准化 title/link/description。 | https://github.com/Hmbown/DeepSeek-TUI/pull/6100 |
| #6114 | **fix(tui): follow symlinked user‑level context files** | 用户层指令文件（`~/.codewhale/AGENTS.md` 等）现在会跟随符号链接到真实目标，解决 #6115 中因拒绝 symlink 导致的配置丢失问题。 | https://github.com/Hmbown/DeepSeek-TUI/pull/6114 |
| #6111 | **feat(tui): add a file‑scoped restore endpoint and gate the whole‑tree rollback** | 实现按文件粒度的撤回（per‑file revert），并为全树回滚添加安全门禁，修复之前缺少的细粒度回滚功能。 | https://github.com/Hmbown/DeepSeek-TUI/pull/6111 |
| #5842 | **feat(runtime‑api): plugin + marketplace management over /v1/apps（Engine 端）** | 引入插件市场的后端 API，实现插件的注册、版本控制与授权；为以后的插件生态奠基。 | https://github.com/Hmbown/DeepSeek-TUI/pull/5842 |
| #6104 | **chore(deps): bump encoding_rs from 0.8.35 to 0.8.41** | 依赖升级，修复若干编码相关的安全问题并提升性能。 | https://github.com/Hmbown/DeepSeek-TUI/pull/6104 |
| #6103 | **chore(deps): bump dirs from 6.0.0 to 7.0.0** | 更新跨平台目录库，获得更好的 XDG 配置路径支持。 | https://github.com/Hmbown/DeepSeek-TUI/pull/6103 |
| #6107 | **chore(deps): bump flate2 from 1.1.9 to 1.1.10** | 提供更高效的压缩/解压实现，修复已知的 bug。 | https://github.com/Hmbown/DeepSeek-TUI/pull/6107 |
| #6106 | **chore(deps): bump lru from 0.18.3 to 0.18.4** | 轻量级 LRU 缓存库升级，带来微小性能提升。 | https://github.com/Hmbown/DeepSeek-TUI/pull/6106 |
| #5996 | **docs(config): document R1 turn budgets and add a [goal] example** | 补全配置文档，明确 `[tui].max_model_steps` 与 `[tui].turn_wall_clock_secs` 的使用方式，并新增 `[goal]` 示例。 | https://github.com/Hmbown/DeepSeek-TUI/pull/5996 |

---

### 功能需求趋势（从 Issues 中提炼）  

| 需求方向 | 体现的 Issues | 说明 |
|----------|---------------|------|
| **Token 使用与成本可视化** | #6011 | 社区强烈希望在 TUI 中看到按组件、按模型的 token 消耗、缓存命中率以及压缩成本，以便在长时对话中控制费用。 |
| **上下文管理与主动压缩** | #5620, #6047 | 上下文压力警报失效及自动压缩时机不准确是痛点；需求是让 Agent 能够主动触发压缩或降级，防止 silenzious 上下文丢失。 |
| **会话持久化与恢复** | #6102, #6046 | 中断后恢复会话因运行时目录丢失或 provider pin 丢失而失败；社区期望更可靠的持久化层（如可选的持久记忆层）。 |
| **UI/交互细节改进** | #6045, #6015, #6112, #6116 | 输入模框截断、状态栏缺少工作区/分支信息、Linux 中的复制/粘贴习惯等细节频繁被提及，表明对终端友好度的持续打磨需求。 |
| **多模型与插件生态** | #6018, #6025, #6100, #6113 | Gemini 安装问题、V4 Pro 下线、新增 Serply 搜索提供者以及为 opencode-go 添加 wire‑api 配置，显示社区在扩展模型来源和插件能力上的积极探索。 |
| **文档与可配置性** | #6015, #5996, #6108 | 对配置项（如 per‑model context_window、R1 turn budgets）的文档缺失和默认行为需求频繁出现，说明用户希望通过配置而非代码改动来调整行为。 |

---

### 开发者关注点（痛点 & 高频需求）  

1. **上下文安全** – 上下文压力警报不具备主动响应机制，容易导致 silenceless 上下文溢出；开发者亟需在 Agent turn 中增加自适应压缩或自动降级逻辑。  
2. **会话恢复可靠性** – 中断恢复时 ENOENT、provider pin 丢失等错误频繁出现，建议引入更健壮的运行时存储抽

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

**ComfyUI 社区动态日报（2026‑09‑13）**  

---

### 1. 今日速览  
- 今日未发布新版本，社区活动集中在 **MiniMax H3 相关的崩溃/性能问题**（#16284、#16279、#16289、#16282）以及 **显存/VRAM 分配异常**（#16225、#16223）。  
- 伴随这些 Bug，开发者陆续提交了针对 **MPS/int8 回退**、**线性算子精度**、**伙伴节点下载进度** 等的修复 PR（#16285、#16286、#16248、#16202），并持续扩展 **Yue2 音乐模型** 与 **Flux Video Edit** 等功能节点。  

---

### 2. 版本发布  
> **无新版本**（过去 24 小时内没有 Release）。  

---

### 3. 社区热点 Issues（精选 10 条）  

| # | 标题 | 为什么重要 | 社区反应（评论 / 👍） | 链接 |
|---|------|------------|----------------------|------|
| #16284 | MiniMax H3 still crashes on MPS with `aten::_int_mm` after #16130 | 揭示 MPS 平台上 INT8 量化回退失效导致的崩溃，直接影响苹果 silicon 用户的工作流稳定性。 | 1 评论 / 0 👍 | https://github.com/Comfy-Org/ComfyUI/issues/16284 |
| #16279 | MiniMax H3 controlnet adaln width 8 does not match the base model's timestep embedding width 2688 | 指出 ControlNet 与主模型维度不匹配，会导致生成失败或异常，是当前 H3 推理管线的关键瓶颈。 | 0 评论 / 0 👍 | https://github.com/Comfy-Org/ComfyUI/issues/16279 |
| #16289 | Shape mismatch in MiniMax H3 audio conditioning when combining video continuation with standalone audio‑timbre reference | 音频条件张量形状不匹配导致视频续接失败，限制了多模态（视频+音频）创作的灵活性。 | 0 评论 / 0 👍 | https://github.com/Comfy-Org/ComfyUI/issues/16289 |
| #16282 | MiniMax H3 Reference to Video: input labels are 0‑based while prompt references are 1‑based | 接口索引不一致容易让用户误传参数，影响易用性且需在文档或代码中统一。 | 0 评论 / 0 👍 | https://github.com/Comfy-Org/ComfyUI/issues/16282 |
| #16225 | DynamicVRAM / VBAR allocation failed on RTX 5060 Laptop GPU | 新笔记本 GPU 在动态显存分配时出错，反映出显存管理在低显存设备上的兼容性问题。 | 2 评论 / 0 👍 | https://github.com/Comfy-Org/ComfyUI/issues/16225 |
| #16223 | comfy‑aimdo: hostbuf_read_file_slice 'device copy failed' / 'aimdo memory compile error' when two ComfyUI instances stage large models on two GPUs concurrently | 双 GPU 并发加载大模型时出现设备复制失败，限制了多实例、多 GPU 的扩展场景。 | 4 评论 / 0 👍 | https://github.com/Comfy-Org/ComfyUI/issues/16223 |
| #16129 | SeedVR2 image upscaling breaks batched images | 批量图像超分辨率节点在批处理时失效，影响批量处理工作流的可用性。 | 5 评论 / 0 👍 | https://github.com/Comfy-Org/ComfyUI/issues/16129 |
| #16015 | The CLIP input is missing or invalid. Check the connected checkpoint or CLIP loader. | CLIP 输入缺失会导致采样器报错，是新手常见的配置问题，需更好的错误提示或自动检测。 | 1 评论 / 0 👍 | https://github.com/Comfy-Org/ComfyUI/issues/16015 |
| #15558 | svgwrite errors | 依赖缺失导致 SVG 相关节点无法加载，虽然影响面较窄，但暴露出依赖管理仍需加强。 | 1 评论 / 0 👍 | https://github.com/Comfy-Org/ComfyUI/issues/15558 |
| #15445 | Officially Minimax H3 Workflow Takes Longer After 0.31 update | 工作流在最新版本后变慢，性能回退是社区广泛关注的焦点。 | 14 评论 / 0 👍 | https://github.com/Comfy-Org/ComfyUI/issues/15445 |

> **热点趋势**：MiniMax H3 系列（模型、ControlNet、音频条件）及显存/VRAM 管理成为今日讨论的核心；此外，批处理、CLIP 输入验证和依赖缺失也是常见痛点。

---

### 4. 重要 PR 进展（精选 10 条）  

| # | 标题 | 功能/修复内容 | 状态 | 链接 |
|---|------|--------------|------|------|
| #16285 | Fix linear_input_act to respect _full_precision_mm fallback | 修复线性算子在 MPS 上未遵循 INT8 回退标志，直接解决 #16284 崩溃。 | OPEN | https://github.com/Comfy-Org/ComfyUI/pull/16285 |
| #16286 | Honor the disabled int8 format in the fused activation kernel | 在 fused 激活核中尊重已禁用的 INT8 格式，进一步稳定 MPS 上的量化路径。 | OPEN | https://github.com/Comfy-Org/ComfyUI/pull/16286 |
| #16248 | Report downloading and byte progress from the partner node download helper | 为伙伴节点添加字节级下载进度提示，提升透明度。 | CLOSED | https://github.com/Comfy-Org/ComfyUI/pull/16248 |
| #16202 | Add an activity field to node progress and report model loading | 在节点进度 UI 中加入 `activity` 字段，区分“加载权重”与“计算”状态，改善用户感知。 | OPEN | https://github.com/Comfy-Org/ComfyUI/pull/16202 |
| #16259 | [Partner Nodes] feat(BFL): add the Flux Video Edit node | 引入 Flux Video Edit API 节点，扩展视频编辑能力。 | OPEN | https://github.com/Comfy-Org/ComfyUI/pull/16259 |
| #16250 | Support Yue2 music model. | 添加 Yue2 音乐模型检查点支持并提供示例工作流，丰富音乐生成功能。 | CLOSED | https://github.com/Comfy-Org/ComfyUI/pull/16250 |
| #16292 | Increase max song duration in Yue2 node. | 将 Yue2 节点的最大歌曲时长提升，满足更长段落创作需求。 | CLOSED | https://github.com/Comfy-Org/ComfyUI/pull/16292 |
| #16283 | Add video-frame strength easing to MiniMax H3 Fun ControlNet | 为 H3 Fun ControlNet 添加视频帧强度淡入/淡出控制，提升动画平滑性。 | OPEN | https://github.com/Comfy-Org/ComfyUI/pull/16283 |
| #16280 | Fix userdata paths on another drive raising instead of returning 403 | 修复 Windows 下跨驱动器路径检查导致的异常，改为返回 403，增强安全性。 | OPEN | https://github.com/Comfy-Org/ComfyUI/pull/16280 |
| #16096 | Log typed asset scanner filesystem errors | 对资产扫描中的文件系统错误进行类型化日志输出，便于排查而不泄露路径。 | OPEN | https://github.com/Comfy-Org/ComfyUI/pull/16096 |

> **重点**：针对 MPS/int8 回退的两个修复 PR（#16285、#16286）直接对应今日最高热点的崩溃问题；伙伴节点下载进度（#16248）与节点活跃度字段（#16202）提升了用户交互体验；Yue2 音乐模型系列 PR 持续扩展多模态创作能力。

---

### 5. 功能需求趋势  
从全部 Issues 中可提炼出以下社区关注方向：  

| 需求方向 | 体现的 Issues / PR | 说明 |
|----------|-------------------|------|
| **模型与工作流稳定性（尤其针对苹果 silicon & 新显卡）** | #16284、#16279、#16289、#16282、#16225、#16223、#15445 | 用户希望在 MPS、低显存笔记本 GPU 及多 GPU 并发场景下获得可靠的推理速度与无崩溃体验。 |
| **批处理 & 数据管道改进** | #16129（SeedVR2 批处理失效）、#16209（Lanczos 掩码通道丢失） | 批量图像/视频处理是常见工作流，需确保节点在批次上行为一致。 |
| **用户友好进度与状态反馈** | #16248（下载进度）、#16202（activity 字段）、#16096（资产扫描日志） | 社区期望更透明的后台任务进度（下载、模型加载、文件扫描），以降低调试难度。 |
| **多模态创作扩展（视频、音频、音乐）** | #16259（Flux Video Edit）、#16250/#16292（Yue2 音乐）、#16283（H3 ControlNet 强度淡入/淡出） | 视频续接、音频条件、音乐生成等功能节点需求持续增长。 |
| **依赖与环境兼容性** | #15558（svgwrite 缺失）、#16280（跨驱动器路径） | 工具链依赖管理及跨平台路径处理仍是痛点。 |

---

### 6. 开发者关注点（痛点 & 高频需求）  
- **显存/VRAM 管理不稳定**：多个 Issue 指出在低显存设备或多实例并发时出现设备复制失败、分配错误，开发者需要更鲁棒的显存分配与回退策略。  
- **MPS 平台上的 INT8 量化回退失效**：#16284 及其修复 PR 揭示了在苹果 silicon 上量化路径不被正确触发，导致崩溃；这提示核心算子需要更完善的设备特性检测与 fallback 机制。  
- **批处理一致性**：如 SeedVR2、Lanczos 掩码等节点在批次维度上表现异常，说明仍有张量形状传播上的细节需补足。  
- **错误信息与诊断可读性**：用户普遍反馈 CLIP 输入缺失、依赖缺失等错误提示不够明确，建议增加结构化日志或友好的 UI 提示。  
- **功能节点的易用性与文档同步**：#16282 中出现的索引基数不一致（0‑based vs 1‑based）表明新节点在发布时需要同步更新参数命名约随文档，以降低使用门槛。  

> **总结**：今日社区的核心围绕 **硬件兼容性（尤其是苹果 silicon & 新显卡）**、**批处理稳定性** 以及 **用户交互反馈** 展开。开发者正在通过精准的算子修复（#16285、#16286）与节点功能扩展（Flux Video Edit、Yue2 音乐）来回应这些需求，后续仍需关注显存管理的统一框架以及错误报告的友好化。  

---  

*以上内容基于 2026-09-12 更新的 GitHub Issues 与 PR 数据整理而成。*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama 社区动态日报（2026‑09‑13）**  

---

### 今日速览  
- 过去 24 h 内没有新版本发布，社区活动集中在 **Bug 修复** 与 **功能细节完善**。  
- 最受关注的问题是 **Qwen 3.8 在多步工具循环中出现 “no user query found in messages” 错误**（#17778），已有相应 PR（#17894）着手解决。  
- 其他热点包括 **ROCm KV 状态泄漏**、**Gemma 3 结构化输出截断**、**Jetson Orin Nano OOM** 以及 **Windows 环嵌端口耗尽** 等。  

---

### 版本发布  
> 过去 24 h 无新 Release，略过。  

---

### 社区热点 Issues（精选 10 条）

| # | 标题 | 为什么重要 | 社区反应 |
|---|------|------------|----------|
| [#17778](https://github.com/ollama/ollama/issues/17778) | qwen 3.8 报错：`ResponseError during chat streaming: no user query found in messages` | 多步工具循环导致上下文被错误截断，直接影响代理工作流。 | 29 评论，👍 25 – 高度关注且讨论活跃。 |
| [#17847](https://github.com/ollama/ollama/issues/17847) | ROCm 后端在 Strix Halo iGPU 上 KV 状态跨请求泄漏 | 导致后续响应被前一请求内容污染，严重影响多轮对话的正确性。 | 9 评论，👍 0 – 需要 ROCm 用户验证修复。 |
| [#18094](https://github.com/ollama/ollama/issues/18094) | gemma3:12b 结构化输出(`format`) 在含双引号术语时提前截断 | 结构化 JSON 输出是重要功能，截断会导致解析失败。 | 7 评论，👍 0 – 开发者期待修复。 |
| [#16599](https://github.com/ollama/ollama/issues/16599) | 0.30.6 在双 GPU 环境下即使单卡足够也会划分模型 | 资源调度不合理造成性能浪费，尤其对混合卡用户困扰。 | 5 评论，👍 0 – 性能调度话题持续。 |
| [#18396](https://github.com/ollama/ollama/issues/18396) | Jetson Orin Nano 8GB：Gemma 4 E4B 多模态投射导致 host OOM | 边缘设备内存受限，模型加载失败直接阻碍部署。 | 3 评论，👍 0 – 强调低内存适配需求。 |
| [#14259](https://github.com/ollama/ollama/issues/14259) | 聊天历史与嵌入截断静默发生，无用户可见提示 | 用户感知不到上下文被裁剪，易产生误解。 | 3 评论，👍 3 – 文档与透明度需求。 |
| [#18412](https://github.com/ollama/ollama/issues/18412) | Linux 混合显卡（Intel iGPU + RTX 4080）llama‑server SIGABRT 混崩 | 混合 GPU 环境崩溃阻碍开发者在笔记本上的使用。 | 1 评论，👍 0 – 需要更稳的设备检测。 |
| [#18392](https://github.com/ollama/ollama/issues/18392) | Windows 持续 `/api/embed` 负载耗尽回环端口，HTTP 客户端禁用 keep‑alive | 高频嵌入场景下服务不可用，影响批处理工作流。 | 1 评论，👍 0 – 网络层优化诉求。 |
| [#18414](https://github.com/ollama/ollama/issues/18414) | 某些模型有未文档化的 Ollama 版本需求 | 缺少版本要求导致拉取后运行失败，增加试错成本。 | 0 评论，👍 0 – 文档完善呼声。 |
| [#18411](https://github.com/ollama/ollama/issues/18411) | `web_search` 路径在 Responses 中过早 emit `function_call`，破坏 Codex 工具回放 | 工具调用顺序错误影响自动化代理的可重现性。 | 0 评论，👍 0 – 需要修复工具调用时序。 |

---

### 重要 PR 进展（精选 10 条）

| # | 标题 | 功能/修复内容 |
|---|------|---------------|
| [#17894](https://github.com/ollama/ollama/pull/17894) | chat: always preserve the most recent user message during truncation | 修复 #17778，确保上下文截断时保留最新用户查询，防止 “no user query found”。 |
| [#18413](https://github.com/ollama/ollama/pull/18413) | openai: finish reasoning before emitting client tool calls | 修复 #18411，在 web‑search 路径完成 reasoning 再发 tool call，保持输出顺序。 |
| [#18399](https://github.com/ollama/ollama/pull/18399) | Add OLLAMA_CONTEXT_SHIFT so a server can refuse over‑long prompts | 新增环境变量让服务器在提示超长时直接拒绝，而不是静默截断。 |
| [#18400](https://github.com/ollama/ollama/pull/18400) | fix: parse Gemma4 tool keys containing spaces | 支持 Gemma 4 工具定义中带空格的键（如 `"Basic LLM Chain"`），避免 JSON 解析失败。 |
| [#18398](https://github.com/ollama/ollama/pull/18398) | model/parsers: preserve gemma4 object keys containing spaces | 与 #18400 互补，确保解析器保留空格键并修剪前后空白。 |
| [#18407](https://github.com/ollama/ollama/pull/18407) | server: preserve imported GGUF blobs after validation | 防止导入单个 GGUF 时被重新写入并改变 digest，提升模型导入一致性。 |
| [#18406](https://github.com/ollama/ollama/pull/18406) | server: reject invalid embeddings before returning success | 对嵌入向量进行零向量等无效检测，返回 500 而非误导的 200。 |
| [#18408](https://github.com/ollama/ollama/pull/18408) | app/ui/app: surface failed and incomplete chat streams | 将 HTTP 错误、读取失败、JSONL 畸形等通过 UI 错误状态向用户展示，提升可观测性。 |
| [#18409](https://github.com/ollama/ollama/pull/18409) | installer(windows): remove ollama install path from user PATH on uninstall | 修复 Windows 卸载后留在用户 PATH 的残留项（#18386 同内容），避免环境污染。 |
| [#18410](https://github.com/ollama/ollama/pull/18410) | README: add AI Arena Lite desktop integration | 在社区集成章节加入 AI Arena Lite（Windows 多智能体对话工具），扩展生态。 |

---

### 功能需求趋势（从所有 Issues 提炼）

| 趋势 | 说明 | 代表性 Issue |
|------|------|--------------|
| **上下文管理与截断透明化** | 用户希望截断过程可见，且能够保留最新用户输入。 | #17778, #14259, #18399 |
| **跨平台 GPU 稳定性** | ROCm、混合显卡（Intel+iGPU + NVIDIA dGPU）以及低端 Jetson 设备的内存与算力调度需求。 | #17847, #18412, #18396 |
| **结构化输出 & 工具调用可靠性** | JSON schema、`format` 参数以及工具调用（function_call）的顺序与完整性。 | #18094, #18411, #18413 |
| **模型导入与版本文档** | 模型文件导入后不应被改写，且版本需求必须明确文档化。 | #18407, #18414 |
| **嵌入服务网络健壮性** | 高频 `/api/embed` 负载下的端口资源与 keep‑alive 策略。 | #18392 |
| **安装/卸载体验** | Windows 安装程序清理 PATH、注册表等残留项。 | #18409 / #18386 |

---

### 开发者关注点（痛点 & 高频需求）

1. **上下文截断导致的工具调用失效** – 需要在截断阶段保留用户查询并给出明确提示（#17778、#14259、#18399）。  
2. **异构 GPU 环境的资源争用与状态泄漏** – ROCm KV 泄漏、混合显卡崩溃、低内存设备 OOM，均指向更细粒度的显存分配与设备隔离需求（#17847、#18412、#18396）。  
3. **结构化输出与工具调用的时序正确性** – 工具调用不能提前于 reasoning 完成，且特殊字符（空格、引用号）不应导致解析失败（#18094、#18411、#18413、#18400、#18398）。  
4. **透明的错误与版本信息** – 用户期望在模型加载、嵌入失败或版本不匹配时得到明确的错误提示而不是静默失败（#18414、#18406、#14259）。  
5. **安装卸载的干净度** – Windows 环境变量残留是常见抱怨，需保持安装脚本的对称性（#18409、#18386）。  

> 本日报基于 GitHub 上公开的 Issues 与 PR 数据整理，旨在帮助开发者快速捕捉 Ollama 项目的最新技术动向与社区优先级。祝开发顺利！

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

**llama.cpp 社区动态日报（2026‑09‑13）**  

---

### 今日速览
- 过去 24 小时内项目连续发布了多个补丁版本（b10920‑b10931），主要集中在 UI 缓存、服务端模型下载限制、后端（CUDA/HIP、OpenCL、WebGPU、Hexagon）的细微 bug 修复以及依赖升级（cpp‑httplib）。  
- 社区讨论最活跃的议题仍是 **性能回退**、**后端兼容性** 与 **工具链/服务端稳定性**，尤其是 MTP speculative decoding、Vulkan 推理菜单、SYCL/TDR 以及 OOM 崩溃等问题引发广泛关注。  
- 同时，新增模型支持（ELMOD 2.7b）、后端内核扩展（Vulkan IQ3_S、CUDA contiguous‑rows unary）以及服务端测试基础设施的改进 PR 活跃度较高，表明社区正在向更广的硬件覆盖和更完整的工具链迈进。

---

### 版本发布（过去 24 小时）

| 版本 | 主要改动 | 链接 |
|------|----------|------|
| **b10931** | UI：添加缓存机制（#28802） | https://github.com/ggml-org/llama.cpp/releases/tag/b10931 |
| **b10930** | 服务器：在模型限制时允许模型下载，修复 #26809（#28530） | https://github.com/ggml-org/llama.cpp/releases/tag/b10930 |
| **b10929** | ggml‑cuda：为 AMD GCN 添加特定 HIP 配置表（#27841） | https://github.com/ggml-org/llama.cpp/releases/tag/b10929 |
| **b10927** | vendor：更新 cpp‑httplib 至 0.56.0（#28787） | https://github.com/ggml-org/llama.cpp/releases/tag/b10927 |
| **b10926** | syscl：优雅处理不支持的 tq1_0 量化（#28681） | https://github.com/ggml-org/llama.cpp/releases/tag/b10926 |
| **b10924** | 服务器：将路由子状态命令整行封装（#28747） | https://github.com/ggml-org/llama.cpp/releases/tag/b10924 |
| **b10923** | OpenCL：修复多处导致后端异常终止的 bug（#27630） | https://github.com/ggml-org/llama.cpp/releases/tag/b10923 |
| **b10922** | OpenCL：新增 bin kernel `kernel_gemm_noshuffle_q4_k_f32_32b_trans_ila_a8_bin`（#28677） | https://github.com/ggml-org/llama.cpp/releases/tag/b10922 |
| **b10921** | WebGPU：将 tensor binding 对齐到类型块大小（#28382） | https://github.com/ggml-org/llama.cpp/releases/tag/b10921 |
| **b10920** | Hexagon：支持多设备模型拆分（行切分）（#28589） | https://github.com/ggml-org/llama.cpp/releases/tag/b10920 |

> 以上均为补丁式发布，未改动主版本号，重点在于后端稳定性、依赖更新以及小功能增强。

---

### 社区热点 Issues（评论数 Top 10）

| # | 标题 | 评论 | 为什么重要 | 链接 |
|---|------|------|------------|------|
| #14909 | **Feature Request: Implement missing ops from backends** | 53 | 长期待办的后端算子缺失问题，直接影响新模型和新硬件的支持度，社区呼声高。 | https://github.com/ggml-org/llama.cpp/issues/14909 |
| #20260 | **Eval bug: unsloth/Qwen3.5-35B-A3B-GGUF `peg-native` chat format parser fails** | 34 | 涉及思考模型 + 工具调用的聊天格式解析，影响实际推理流程。 | https://github.com/ggml-org/llama.cpp/issues/20260 |
| #25808 | **Compile bug: GGML_SYCL_DEVICE_ARCH=xe2 gives segfault** | 33 | SYCL 后端在新 Intel Arc（xe）架构上的崩溃，阻碍硬件采用。 | https://github.com/ggml-org/llama.cpp/issues/25808 |
| #16393 | **Feature Request: tool to list and delete cached models** | 27 | 社区普遍希望拥有模型缓存管理工具，以减少磁盘占用和手动清理麻烦。 | https://github.com/ggml-org/llama.cpp/issues/16393 |
| #10453 | **ggml : add ANE backend** | 25 | Apple 神经网络引擎（ANE）支持是 Mac/iOS 性能提升的关键方向，讨论持续。 | https://github.com/ggml-org/llama.cpp/issues/10453 |
| #24616 | **Feature Request: add dp4a emulation via dp2a on cuda** | 15 | 针对旧 CUDA 架构的性能仿真，提升兼容性。 | https://github.com/ggml-org/llama.cpp/issues/24616 |
| #24946 | **[SYCL/xe] -cb pins GPU at gt-c0 on Battlemage, prevents idle power savings** | 15 | SYCL 后端导致 GPU 常驻高功耗状态，影响笔记本/省电场景。 | https://github.com/ggml-org/llama.cpp/issues/24946 |
| #25913 | **Misc. bug: /slots save/restore silently loses all prompt reuse on hybrid/recurrent models** | 12 | 槽位保存/恢复导致提示复用失效，对长对话和多轮推理影响大。 | https://github.com/ggml-org/llama.cpp/issues/25913 |
| #26220 | **Bug: Native MMA FA kernel regresses prompt processing up to 2x at depth on RDNA4** | 11 | ROCm 原生 MMA 内核在 RDNA4 上出现显著回退，亟待修复。 | https://github.com/ggml-org/llama.cpp/issues/26220 |
| #24415 | **Eval bug: can't load gemma-4-12B with OpenVINO (CPU, GPU and NPU)** | 11 | OpenVINO 后端在加载较大 Gemma 模型时失效，限制了跨平台部署。 | https://github.com/ggml-org/llama.cpp/issues/24415 |

---

### 重要 PR 进展（挑选 10 个具有代表性的 PR）

| PR | 功能/修复简述 | 链接 |
|----|----------------|------|
| #28818 | **model: add support for ELMOD 2.7b** – 新增德文研究模型 ELMOD 2.7b（GPTNeoX 架构，自定义 tokenizer）的转换支持。 | https://github.com/ggml-org/llama.cpp/pull/28818 |
| #28822 | **Vulkan, ggml: vulkan: add IQ3_S MMQ matmul kernels** – 为 Intel Arc A770 等显卡实现 IQ3_S 矩阵乘法内核，尝试缓解之前的性能回退。 | https://github.com/ggml-org/llama.cpp/pull/28822 |
| #28821 | **ggml, CUDA: cuda : support contiguous_rows unary kernels** – CUDA 后端新增非连续行的一元操作内核，填补之前的空白。 | https://github.com/ggml-org/llama.cpp/pull/28821 |
| #28819 | **ggml, CUDA: cuda : support contiguous_rows unary kernels** – 与 #28821 实质相同（后续合并），强调社区对该功能的重复需求。 | https://github.com/ggml-org/llama.cpp/pull/28819 |
| #28817 | **testing, merge ready, jinja parser: jinja : support dot property integer literals** – 允许 Jinja 模板中使用 `obj.0`、`arr.1` 等点号整数下标，修复 #28786。 | https://github.com/ggml-org/llama.cpp/pull/28817 |
| #28815 | **build, server: server tests : add small-test, a 95M multimodal fixture** – 新增 95M 参数的多模态测试用例，覆盖聊天、工具调用、视觉、MTP 等。 | https://github.com/ggml-org/llama.cpp/pull/28815 |
| #28740 | **testing, devops: ci : run test-backend-ops as a dedicated ci/run.sh test** – 将后端算子测试独立出来，支持全后端并行执行，提升 CI 可靠性。 | https://github.com/ggml-org/llama.cpp/pull/28740 |
| #28736 | **documentation, testing, devops, server: common : implement common_schema internal representation for JSON schemas** – 引入内部 JSON Schema 表示，清理之前的 hacky 方便以后的语法生成。 | https://github.com/ggml-org/llama.cpp/pull/28736 |
| #28742 | **testing: chat : improve parsing of complex types in qwen3-coder** – 增强 Qwen3 Coder 模型中复杂参数类型的解析，防止参数丢失。 | https://github.com/ggml-org/llama.cpp/pull/28742 |
| #28682 | **testing: chat: add dedicated Ling 3.0 (Bailing V3) parser** – 为 Ling 3.0 模型添加专用解析器，正确处理其提前出现的工具调用。 | https://github.com/ggml-org/llama.cpp/pull/28682 |

---

### 功能需求趋势（从 Issues 中提炼）

| 趋势 | 体现的 Issues / 讨论 |
|------|----------------------|
| **后端性能与兼容性** | #25808（SYCL xe2 崩溃），#24946（SYCL 功耗问题），#28633（CUDA 4‑bit KV 缓存回退到 CPU），#2622

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*