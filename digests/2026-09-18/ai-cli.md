# AI CLI 工具社区动态日报 2026-09-18

> 生成时间: 2026-09-17 22:16 UTC | 覆盖工具: 12 个

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

**今日重點**

- **Claude Code v2.1.274** – 发布了一个稳定性和可观测性更新，新增了内存临界警告、`CLAUDE_CODE_MCP_STARTUP_WAIT_MS` 环境变量以及新的 `effort` 属性；[Claude Code 仓库](https://github.com/anthropics/claude-code/releases/tag/v2.1.274)
- **OpenAI Codex Rust alpha 4.0** – 发布 4 个连续的 Rust alpha 版本 (`rust-v0.155.0-alpha.14 … -alpha.17`)，专注于环境延迟生效、插件缓存保留和发布资产上传串行化；[Codex 发布页面](https://github.com/openai/codex/releases)
- **Gemini CLI 修复子代理 MAX_TURNS 错误** – PR #29367 修复了 `LocalAgentExecutor` 恢复路径中无条件覆盖 `terminateReason` 的逻辑，防止 MAX_TURNS 中断被报告为成功；[Gemini CLI PR #29367](https://github.com/google-gemini/gemini-cli/pull/29367)
- **GitHub Copilot CLI v1.0.86-2** – 小版本发布，同时修复了多个 MCP 生态问题，包括 Figma MCP 服务器 `-32601` 错误码（#4870）和 Windows 平台插件更新失败（#4095）；[Copilot CLI 仓库](https://github.com/github/copilot-cli/releases/tag/v1.0.86-2)
- **Qwen Code 桌面版 v0.24.0** – 新增 ACP 权限队列按会话隔离和共享输出模式，并修复了多会话下权限串扰问题；[Qwen Code 发布说明](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.0)
- **Kimi CLI 子代理 OAuth 超时与重复工具调用修复** – Issue #2650 解决了子代理启动时 `auth.kimi.ai` 端点的间歇性超时问题；PR #2651 将重复相同工具调用的防护从软限制改为硬停止；[Issue #2650](https://github.com/MoonshotAI/kimi-cli/issues/2650) | [PR #2651](https://github.com/MoonshotAI/kimi-cli/pull/2651)
- **DeepSeek TUI 会话恢复主机校验修复** – Issue #6207 / #6225 修复了 TUI 在新进程中拒绝恢复属于其他运行时主机的已保存会话的问题；PR #6294 新增了子工具结果截断逻辑，防止超大工具结果导致内存饥饿；[Issue #6207](https://github.com/Hmbown/DeepSeek-TUI/issues/6207) | [PR #6294](https://github.com/Hmbown/DeepSeek-TUI/pull/6294)
- **llama.cpp 系列版本发布 (b11017-b11028)** – 10 个连续的仓库版本，优化了 MoE 模型（Qwen/Nemotron/DeepSeek）的 Vulkan 和 SYCL 路径，新增了 XDNA NPU 后端支持，并修复了 Intel B70 和 AMD Strix Halo 平台的问题；[llama.cpp 发布标签](https://github.com/ggerganov/llama.cpp/releases/tag/b11028)

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（截至 2026-09-18）

> 数据说明：PR 列表中的“评论数”均为 `undefined`，无法严格按评论数排序。以下 PR 排行依据“关联 Issue 讨论热度 + 近期更新活跃度 + 主题代表性”综合判断；所有列出的 PR 当前状态均为 **OPEN**。

## 1. 热门 Skills 排行

| 排名 | Skill / PR | 功能与社区讨论热点 | 状态 |
|---|---|---|---|
| 1 | [skill-creator 触发器评测修复 #1298](https://github.com/anthropics/skills/pull/1298) / [#1769](https://github.com/anthropics/skills/pull/1769) | 修复 trigger evaluation 误报/漏报、Windows 子进程管道失败、运行时错误被当作“非触发”；#1769 直接修 0% recall。关联高频 Issue [#556](https://github.com/anthropics/skills/issues/556)（12 评论 / 7👍）。 | OPEN |
| 2 | [mcp-builder 兼容与评测修复 #1742](https://github.com/anthropics/skills/pull/1742) / [#1724](https://github.com/anthropics/skills/pull/1724) | 支持 `mcp>=2` 的 `streamable_http_client` 与自定义 header；更新默认评测模型。关联 [#1390](https://github.com/anthropics/skills/issues/1390) 评测 0/N 问题。 | OPEN |
| 3 | [document-typography #514](https://github.com/anthropics/skills/pull/514) | 文档排版质量控制：孤词换行、寡行段落、编号错位。属于 AI 生成文档的通用质量层。 | OPEN |
| 4 | [Pyxel 复古游戏开发 #525](https://github.com/anthropics/skills/pull/525) | 创建、调试、验证 Python 复古游戏，支持确定性无头运行与帧检查。长期开放但近期仍更新。 | OPEN |
| 5 | [proofcore-contract-auditor #1771](https://github.com/anthropics/skills/pull/1771) | Solidity / Rust 智能合约静态审计，并将审计证明锚定 TON 区块链。Web3 + 零存储 Merkle 证明方向。 | OPEN |
| 6 | [md2video-audio #1703](https://github.com/anthropics/skills/pull/1703) | Markdown → Marp 幻灯片 → MP4 + 拟真配音，零成本内容自动化。 | OPEN |
| 7 | [Hivemind 多智能体编排 #1628](https://github.com/anthropics/skills/pull/1628) | Claude Code 作为规划/审查/合并者，把机械工作委派给免费模型上的 opencode worker，主打成本与上下文优化。 | OPEN |
| 8 | [文档/办公修复合集 #1765](https://github.com/anthropics/skills/pull/1765) / [#1734](https://github.com/anthropics/skills/pull/1734) / [#538](https://github.com/anthropics/skills/pull/538) / [#541](https://github.com/anthropics/skills/pull/541) | DOCX/PPTX/XLSX redlining UTF-8 解码、孤立 DOCX 评论、PDF 大小写引用、tracked change `w:id` 冲突。关联 [#1707](https://github.com/anthropics/skills/issues/1707)。 | OPEN |

## 2. 社区需求趋势

- **安全与信任边界**：社区最热 Issue [#492](https://github.com/anthropics/skills/issues/492)（43 评论）指出社区技能冒用 `anthropic/` 命名空间，形成信任边界滥用；[#1175](https://github.com/anthropics/skills/issues/1175) 也讨论 SharePoint 文档场景下的权限与上下文风险。诉求是官方命名空间隔离、权限审计与安全分析技能。
- **组织级共享与技能管理**：[#228](https://github.com/anthropics/skills/issues/228)（16 评论 / 8👍）要求组织内直接共享 Skill；[#189](https://github.com/anthropics/skills/issues/189)（6 评论 / 9👍）反馈两个插件安装相同内容导致重复；[#62](https://github.com/anthropics/skills/issues/62) 反映技能消失。诉求是共享库、安装去重、生命周期管理。
- **评测与触发可靠性**：[#556](https://github.com/anthropics/skills/issues/556)（12 评论 / 7👍）报告 `run_eval.py` 0% 触发率；[#1390](https://github.com/anthropics/skills/issues/1390) 报告 mcp-builder 评测 0/N；[#1487](https://github.com/anthropics/skills/issues/1487) 指出 `claude-api` 单次注入约 156k tokens。诉求是可靠评测 harness 与上下文预算控制。
- **新 Skill 方向**：记忆压缩 [#1329](https://github.com/anthropics/skills/issues/1329)、代理治理 [#412](https://github.com/anthropics/skills/issues/412)、推理质量门禁 [#1385](https://github.com/anthropics/skills/issues/1385)、Skills 暴露为 MCP [#16](https://github.com/anthropics/skills/issues/16)、Bedrock 支持 [#29](https://github.com/anthropics/skills/issues/29)。诉求集中在记忆、治理、质量门禁、互操作与多云支持。
- **文档与办公自动化**：docx/pdf/odt/typography/redlining 相关 Issue 与 PR 密集，说明社区高度依赖 Skills 处理 OOXML/ODF 文档，并期待排版质量与修订稳定性。
- **开发工具链稳定性**：[#1362](https://github.com/anthropics/skills/issues/1362) 反映 web-artifacts-builder 在 pnpm ≥10.1 下失败，属于构建链兼容性诉求。

## 3. 高潜力待合并 Skills

以下 PR 更新活跃、关联明确 Issue，近期落地概率较高：

- [skill-creator 触发器评测修复 #1298](https://github.com/anthropics/skills/pull/1298)：2026-09-16 更新，直击 [#556](https://github.com/anthropics/skills/issues/556) 高频痛点。
- [skill-creator 0% recall 修复 #1769](https://github.com/anthropics/skills/pull/1769)：2026-09-15 更新，Fixes #1721，与 #1298 互补。
- [mcp-builder 支持 mcp>=2 #1742](https://github.com/anthropics/skills/pull/1742)：2026-09-17 更新，Fixes #1668，属兼容性阻塞修复。
- [office redlining UTF-8 解码 #1765](https://github.com/anthropics/skills/pull/1765)：2026-09-14 更新，Fixes #1707，小范围高价值。
- [DOCX 孤立评论检测 #1734](https://github.com/anthropics/skills/pull/1734)：2026-09-11 更新，办公文档质量方向。
- [claude-api 退役模型标记 #1607](https://github.com/anthropics/skills/pull/1607)：Fixes #1603，文档准确性修复。
- [mcp-builder 默认模型更新 #1724](https://github.com/anthropics/skills/pull/1724)：2026-09-07 更新，降低评测配置过时风险。
- [proofcore-contract-auditor #1771](https://github.com/anthropics/skills/pull/1771) 与 [md2video-audio #1703](https://github.com/anthropics/skills/pull/1703)：新 Skill 方向，更新活跃，但需官方审核新领域。

## 4. Skills 生态洞察

**一句话总结：社区当前在 Skills 层面最集中的诉求，是让生态从“功能集合”走向“可靠、安全、可管理的工程化体系”——优先修复触发/评测/上下文与命名空间信任问题，再扩展新技能。**

---

# Claude Code 社区动态日报

**日期：2026-09-18**

---

## 1. 今日速览

过去24小时，Claude Code 发布了 v2.1.274 版本，重点引入内存临界警告与 MCP 启动等待控制。Issue 区呈现批量关闭态势——30 条高活跃 Issue 均被标记为 `stale` 并关闭，涉及 TUI、Desktop、Agents 等多个模块，反映社区长期积累的功能诉求正在被集中清理或归档。PR 侧仅有 3 条更新，均为小型修复或类型调整，无大规模功能合入。

---

## 2. 版本发布

### v2.1.274

本次更新聚焦稳定性与可观测性：

- **内存临界警告**：当内存使用达到临界状态时，现在会显示可见警告，并附带释放内存或安全重启的操作指引。
- **MCP 启动等待控制**：新增环境变量 `CLAUDE_CODE_MCP_STARTUP_WAIT_MS`，用于限制首个非交互回合等待 MCP 服务器连接的时间上限（设为 `0` 表示不等待）。
- **`effort` 属性**：为 Claude 会话新增了 `effort` 属性（描述被截断，推测与模型推理强度控制相关）。

---

## 3. 社区热点 Issues

以下为本周期内评论与互动最活跃的 Issue（均已关闭）：

### 🎙️ #80146 — 语音驱动的 Agentic 控制
[链接](https://github.com/anthropics/claude-code/issues/80146) · 6 评论 · 👍 1

社区呼吁为 Claude Code 增加完整的语音驱动控制能力，使开发者能够通过语音指令完成 agentic 任务。这是本周期评论数最多的 Issue，显示无障碍交互需求正在升温。

### 🔧 #79913 — Scheduled Routines 打开的 PR 默认启用 Auto-fix
[链接](https://github.com/anthropics/claude-code/issues/79913) · 1 评论 · 👍 4

当前 Auto-fix（自动巡查 PR、调查 CI 失败、推送修复）仅支持按 PR 手动开启。开发者希望为定时 Routine 自动创建的 PR 设置默认开启 Auto-fix 的选项。**点赞数本期最高**，反映自动化工作流场景的刚需。

### 📋 #80127 — VS Code 扩展：`/compact` 摘要输出无法复制
[链接](https://github.com/anthropics/claude-code/issues/80127) · 1 评论 · 👍 2

在 VS Code 扩展中执行 `/compact` 后，产生的对话摘要无法复制粘贴，影响开发者将压缩后的上下文迁移到新会话的效率。标记为 `bug` + `enhancement`。

### ⌨️ #79809 — 权限对话框的可绑定操作与数字快捷键重映射
[链接](https://github.com/anthropics/claude-code/issues/79809) · 2 评论 · 👍 1

权限对话框的数字快捷选择（1/2/3）在键盘上紧邻排布，容易误触。用户希望将 `confirm:acceptAlways` 等操作暴露为可绑定行为，允许用户自定义数字键映射，避免误触 "Yes, don't ask again"。

### ⏯️ #79946 — 允许恢复被中断的生成而无需创建新的对话回合
[链接](https://github.com/anthropics/claude-code/issues/79946) · 2 评论 · 👍 1

当生成被中断（如网络波动或手动停止）时，用户必须创建一个新回合才能继续。社区希望支持在原有回合上无缝恢复被中断的生成，减少 token 浪费与上下文碎片化。

### 🔤 #80125 — 斜杠命令自动补全的下拉列表排序
[链接](https://github.com/anthropics/claude-code/issues/80125) · 2 评论 · 👍 1

输入 `/` 时，自定义技能/命令的自动补全下拉列表以看似任意的顺序展示。当存在大量同前缀自定义技能时（如 `ido-analyze-*`），查找效率极低。请求增加字母排序或可配置排序。

### 🛡️ #79917 — 为 Claude GitHub App 增加 Dependabot 告警读取权限
[链接](https://github.com/anthropics/claude-code/issues/79917) · 1 评论 · 👍 1

官方 Claude GitHub App 目前缺少对 `vulnerability_alerts`（依赖漏洞告警）的读取权限，限制了 Claude Code 在安全审计场景中的能力。属于安全集成方向的典型诉求。

### 🚫 #79959 — 被拒绝命令的可配置建议
[链接](https://github.com/anthropics/claude-code/issues/79959) · 1 评论 · 👍 1

当 Claude 尝试执行的命令被拒绝时，系统给出的建议是硬编码的，无法由用户或团队自定义。社区希望定制这些提示信息，以引导 Claude 朝着团队规范的方向调整行为。

### 💬 #87254 — 配置选项：Esc 取消时始终保留用户消息
[链接](https://github.com/anthropics/claude-code/issues/87254) · 1 评论 · 👍 0

当按 Esc 取消一个回合时，用户输入的消息是否保留在转录中目前不可控。开发者请求 `preserveInterruptedPrompt: true` 配置项，使消息始终以 `[Request interrupted by user]` 标记保留，而非直接丢弃。

### 🗂️ #80338 — 在 Recents 列表中分组/嵌套相关会话
[链接](https://github.com/anthropics/claude-code/issues/80338) · 2 评论 · 👍 0

随着会话数量积累，Recents 列表变得杂乱无章。用户希望以树形或"项目"视图组织相关会话，使长时间跨项目工作的开发者能更快定位到目标会话。

---

## 4. 重要 PR 进展

本周期仅有 3 条 PR 更新，均为小型修复：

### #95198 — mods/diff：将 `openPane` 的返回类型改为 `unknown`
[链接](https://github.com/anthropics/claude-code/pull/95198) · OPEN

`$.ui.open` 即将返回一个包含结果的对象，而 diff mod 的宿主契约曾将其声明为 `Promise<void>`。此 PR 将类型改为 `Promise<unknown>`，以兼容当前和下一版引擎的类型定义。无调用方读取该返回值，行为不变。

### #94847 — diff：首次编辑仅在存在可列文件时才打开面板
[链接](https://github.com/anthropics/claude-code/pull/94847) · OPEN

修复了一个体验问题：diff 面板此前会在会话首次成功的 Edit/Write/NotebookEdit 时自动打开，且打开时机早于文件获取。当写入发生在仓库外、被忽略的文件或不同的 worktree 中时，会显示空面板（"No tracked changes"）。此 PR 确保面板仅在确有可列出文件时才打开。

### #87077 — fix(pr-review-toolkit)：修复所有 agent 中无效的 YAML frontmatter
[链接](https://github.com/anthropics/claude-code/pull/87077) · OPEN

每个 agent 的 description 均为包含对话行的未加引号标量。在 YAML 中，未加引号标量内的 `key: value` 会被解析为嵌套映射，导致 frontmatter 解析失败，agent 以空 name/description/model 加载。此 PR 修复了该 YAML 结构性错误。

---

## 5. 功能需求趋势

从本期 30 条 Issue 的标签分布与主题来看，社区关注方向集中在以下领域：

| 方向 | 代表 Issue | 频次 |
|------|-----------|------|
| **TUI 交互体验** | #79809（权限快捷键）、#80125（补全排序）、#87254（Esc 保消息）、#79796（聊天内编辑） | 高频 |
| **Desktop 应用** | #80338（会话分组）、#79734（MCP 工具自动批准）、#79800（会话移入 Project）、#79831（本地 Routine IPC 触发）、#80025（Artifact 排序） | 高频 |
| **IDE 集成（VS Code）** | #79850（worktree 搜索）、#80127（compact 复制）、#79994（隐藏用量指示器） | 中频 |
| **Agents 与自动化** | #79866（subagent 模型配置）、#79886（团队成员 Claude 委托）、#80051（Workflow 质量模式） | 中频 |
| **权限与安全** | #79917（Dependabot 权限）、#79959（拒绝建议定制）、#80137（RDP 暴露检查） | 中频 |
| **无障碍与本地化** | #80146（语音控制）、#80116（Roman Urdu 语音）、#79905（阿拉伯文显示） | 低频但上升 |

**核心趋势**：社区对"精细化控制"的诉求占据主导——无论是权限对话框的按键映射，还是补全列表的排序，抑或是 MCP 连接的超时控制，开发者都希望 Claude Code 的行为更加可预测、可配置。

---

## 6. 开发者关注点

综合本周期 Issue 反馈，提炼出以下高频痛点：

1. **权限交互的误操作风险**：数字快捷选择键位过于紧凑，社区多次提出需要可绑定操作以减少误触（#79809）。这是一个安全相关的高优先级 UX 问题。

2. **上下文连续性不足**：被中断的生成无法无缝恢复（#79946），`/compact` 摘要无法在 VS Code 中复制（#80127），反映了开发者对上下文管理和会话连续性的强烈需求。

3. **会话与项目组织混乱**：随着使用时长增加，Recents 列表缺乏分组/嵌套能力（#80338），Artifacts 面板缺少排序（#80025），多项目并行开发者面临导航效率问题。

4. **自动化工作流存在断路**：Auto-fix 无法为定时 PR 默认启用（#79913），本地 Routine 无法通过 IPC 触发（#79831），说明 scheduled automation 的闭环尚未打通。

5. **可配置性诉求全面渗透**：从 MCP 启动等待时间（Release 已解决）到被拒绝命令的建议文案（#79959），再到 Esc 取消行为（#87254），社区希望获得对 Claude Code 行为的细粒度控制权。

6. **语言与无障碍覆盖不足**：Roman Urdu 语音支持缺失（#80116）、阿拉伯文排版问题（#79905）、语音驱动控制（#80146）等诉求，表明 Claude Code 的全球化与无障碍能力仍有较大提升空间。

---

*报告基于 anthropics/claude-code 仓库 2026-09-17 至 2026-09-18 的公开数据生成。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-09-18** | **数据截至：2026-09-17** | **仓库：[openai/codex](https://github.com/openai/codex)**

---

## 一、今日速览

过去 24 小时 Codex 社区非常活跃：Rust 版连续发布 4 个 alpha 版本（0.155.0-alpha.14 → .17），同时有 50+ 个 Issue 和 50+ 个 PR 发生更新。最受关注的仍是 Windows/WSL 环境下的项目管理和模型容量/限流问题（两个 Issue 评论数分别达 76 和 56 条）。PR 侧由 copyberry 驱动的修复密集落地，聚焦于环境选择、插件缓存、OAuth 安全和发布流水线可靠性。

---

## 二、版本发布

**Rust 主线连续发布 4 个 alpha 版本**，属于高频迭代窗口：

- [rust-v0.155.0-alpha.14](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.14)
- [rust-v0.155.0-alpha.15](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.15)
- [rust-v0.155.0-alpha.16](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.16)
- [rust-v0.155.0-alpha.17](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.17)

发布说明均为简要版本号，未展开详细 changelog。结合同日大量 CLOSED PR 可推断，这一批 alpha 主要包含环境选择延迟生效、插件缓存保留、OAuth 安全性、发布资产上传串行化等修复与改进。

---

## 三、社区热点 Issues（Top 10）

### 1. [Windows/WSL 切换 Agent Environment 后项目创建/删除失败](https://github.com/openai/codex/issues/41290)
🔥 **76 评论 · 54 👍** — 当前最热问题。用户在 Windows 下将 Agent Environment 切换至 WSL 后，项目创建和移除均告失败。版本 26.825.31414，ChatGPT Pro 订阅。该问题触及桌面端与 WSL 集成的核心路径，社区关注度极高。

### 2. [所选模型容量已满，提示切换模型](https://github.com/openai/codex/issues/28507)
🔥 **56 评论 · 52 👍** — 持续两个多月的容量/限流顽疾。Pro 5x 订阅用户反复遇到 "Selected model is at capacity"，说明高峰期模型资源调度仍有瓶颈，用户对"付费后仍不可用"情绪强烈。

### 3. [ChatGPT/Codes 合并后桌面侧边栏缺失 ChatGPT Projects](https://github.com/openai/codex/issues/31878)
**17 评论 · 18 👍** — macOS 26.707.30751 上 web 端可见的项目在桌面端侧边栏消失。这是 ChatGPT/Codex 产品合并期的典型数据同步断档，影响用户工作流连续性。

### 4. [Windows 桌面端更新后本地项目从侧边栏消失](https://github.com/openai/codex/issues/42739)
**14 评论** — 与 #31878 形成跨平台呼应。Windows 更新后 Projects 区显示 "No projects"，但磁盘源码目录完好，Recents 中的历史会话仍可见。属于桌面端状态持久化回归。

### 5. [Windows 沙箱：本地 API 启动被 "blocked by policy" 拒绝](https://github.com/openai/codex/issues/41779)
**13 评论** — `exec_command` 在命令实际执行前即被策略拒绝，无 stdout/stderr 日志。影响依赖本地开发 API 的自动化工作流，策略诊断信息缺失是主要痛点。

### 6. [CLI：后台 exec 会话完成时事件驱动唤醒](https://github.com/openai/codex/issues/32188)
**13 评论 · 13 👍 · Enhancement** — 社区呼声较高的功能需求。当前长命令依赖轮询 `write_stdin` 或子代理监控，产生额外 token 消耗。事件驱动方案可显著降低模型轮询成本。

### 7. [macOS 原生拼写检查支持](https://github.com/openai/codex/issues/11846)
**7 评论 · 18 👍 · Enhancement** — 虽然评论不多但点赞数高。Codex 桌面端未接入 macOS 系统级拼写检查，用户希望获得原生下划线/建议/纠正行为。

### 8. [Azure Auth 支持](https://github.com/openai/codex/issues/19893)
**6 评论 · 7 👍 · Enhancement** — 企业用户使用 MCP Server / CLI 时的 Azure 认证需求，对 Codex 进入企业场景有战略意义。

### 9. [CLI / Web / 移动端无缝会话接续](https://github.com/openai/codex/issues/40124)
**6 评论 · Enhancement** — 用户希望从终端开始会话后，能在手机或网页继续同一会话。跨端连续性正成为 AI 开发工具的重要体验指标。

### 10. [GPT-5.6 Sol / GPT-6 Astra 模型被拒绝 + 限流投诉](https://github.com/openai/codex/issues/46304) · [关联：#46254](https://github.com/openai/codex/issues/46254)
**4 评论 ×2 · 均当日新增** — Pro 账户无法使用部分新模型（报 "not supported when using Codex with a ChatGPT account"），另有用户投诉购买额度后快速耗尽。这两个新 Issue 折射出模型可用性与计费透明度问题，值得持续跟踪。

---

## 四、重要 PR 进展（Top 10）

以下 PR 均已 CLOSED（合并），主要由 copyberry bot 提交，展示了工程团队密集的稳定性与安全性投入：

### 1. [延迟环境选择变更至下一轮](https://github.com/openai/codex/pull/46310)
运行中的 turn 不再被环境切换重定向工具或中断待完成的 setup。将"未来环境选择"与"活跃环境"分离，是并发安全的重要修正。

### 2. [跨显示元数据刷新保留插件缓存](https://github.com/openai/codex/pull/46309)
图片 URL 续期等显示元数据变更不再导致插件/MCP/skill 缓存失效，通过按身份而非显示元数据比较实现。可减少不必要的插件重载开销。

### 3. [集中化 OAuth 登录与刷新处理，提升诊断安全性](https://github.com/openai/codex/pull/46300)
**安全相关**。原实现在 token 端点错误或 JSON 解码失败时可能回显凭据/Token。统一授权处理并加固诊断输出，避免敏感信息泄露。

### 4. [串行化发布资产上传以避免二级限流](https://github.com/openai/codex/pull/46303)
将 `softprops/action-gh-release` 升级至 v3.0.3 并启用 `preserve_order`，按 GitHub 建议串行上传资产，降低并发 REST 请求触发的限流。配套 [R2 上传并发降低 PR #46278](https://github.com/openai/codex/pull/46278)。

### 5. [使用执行器 OS 校验网络套接字策略](https://github.com/openai/codex/pull/46302)
修复 controller 与 executor 跨平台时，Linux controller 错误拒绝 Windows 合法路径的问题。跨平台沙箱策略判定的精度提升。

### 6. [通过 EnvironmentAccess 路由技能发现与加载](https://github.com/openai/codex/pull/46293)
以 `EnvironmentAccess` 取代直接 `ExecutorFileSystem` 调用，为 skill 发现与插件命名空间解析显式绑定沙箱上下文。是沙箱权限模型重构的一环。

### 7. [为 Windows 沙箱启用 MXC 选择](https://github.com/openai/codex/pull/46271)
支持 `windows.sandbox = "mxc"` 配置，并贯穿命令执行、补丁写入与沙箱元数据。为 Windows 用户提供新的沙箱后端选项。

### 8. [Guardian 同步评审保留所选推理强度](https://github.com/openai/codex/pull/46292)
即使启用 `reasoning_effort_override`，同步 Guardian 评审也使用请求级推理强度。配合 [PR #46291](https://github.com/openai/codex/pull/46291)（禁用后过滤已保存的推理覆盖），修正了推理配置的持久化语义。

### 9. [代码模式响应增加可选的细粒度耗时统计](https://github.com/openai/codex/pull/46288)
新增 `features.code_mode.experimental_show_cell_overhead`，暴露 handler 耗时等 host 之外的时间开销，帮助用户理解 app-server 等待等隐藏延迟。

### 10. [iTerm2 标签页展示实时活动详情](https://github.com/openai/codex/pull/26476)
TUI 第三层结构化状态输出：在 iTerm2 tab 中展示 Codex 正在做什么或需要用户关注什么，并限制 OSC 写入频率。提升终端集成体验。

---

## 五、功能需求趋势

从全部 Issue 标签与内容提炼，社区关注集中在以下方向：

1. **跨端会话连续性** — CLI ↔ Web ↔ 移动端的无缝接续（#40124）是明确增长的需求，反映开发者"离开工位继续干活"的场景诉求。
2. **企业认证与合规** — Azure Auth（#19893）、沙箱策略与凭据隔离（#41779、#42688）表明企业部署场景正在增多。
3. **限流透明度与可控性** — 容量告警（#28507）、启动即消耗配额（#22073）、使用量展示缺失（#40082）、token 燃烧速率仪表盘（#45427）——用户强烈需要"看得见、控得住"的配额体验。
4. **Windows/WSL 集成稳定性** — 多个高热度 Issue 集中在 Windows 平台的项目管理与沙箱策略，说明 Windows 用户群在扩大，但体验仍落后于 macOS。
5. **可观测性与诊断** — 事件驱动唤醒（#32188）、hook 静默跳过的诊断缺失（#46210）、细粒度耗时统计（PR #46288），开发者希望少一点"黑盒"。

---

## 六、开发者关注点（痛点与高频需求）

| 痛点 | 说明 | 代表 Issue |
|------|------|-----------|
| **Windows 体验裂痕** | 项目消失、沙箱策略拒绝、WSL 集成失败高频出现，Windows 正成为 bug 重灾区 | [#41290](https://github.com/openai/codex/issues/41290)、[#42739](https://github.com/openai/codex/issues/42739) |
| **"静默失败"缺乏诊断** | `SessionStart` hook 在 `codex exec` 中无提示跳过，无法区分信任拦截与真实故障 | [#46210](https://github.com/openai/codex/issues/46210) |
| **模型可用性与计费透明** | Pro 用户仍遇新模型被拒、额度快速耗尽且无解释 | [#46304](https://github.com/openai/codex/issues/46304)、[#46254](https://github.com/openai/codex/issues/46254) |
| **跨产品数据同步** | ChatGPT web 端与桌面端、桌面端与磁盘状态不一致 | [#31878](https://github.com/openai/codex/issues/31878) |
| **自动化工作流可靠性** | 企业依赖 CLI/MCP 的自动化场景对"策略拒绝无日志""hook 无诊断"容忍度低 | [#41779](https://github.com/openai/codex/issues/41779)、[#46252](https://github.com/openai/codex/issues/46252) |

**趋势小结**：Codex 正从"单机 AI 编程工具"向"企业级多端协作平台"过渡，社区反馈的重心已从功能缺位转向**稳定性、跨端一致性与配额治理**。Windows 平台治理和限流体验优化是当前最紧迫的两大工程课题。

---

*本报告基于 github.com/openai/codex 公开数据生成，仅收录评论活跃度较高或标签代表性强的条目。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：** 2026-09-18
**数据源：** [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 1. 今日速览

过去24小时，Gemini CLI 社区最显著的动态集中在 **Agent 子代理（subagent）的可靠性修复**上：长期困扰社区的「MAX_TURNS 中断被错误报告为 GOAL 成功」问题（Issue #22323，13条评论）迎来了针对性修复 PR（#29367）。同时，核心执行层（PTY/ConPTY/终端缓冲区）出现了多条并行的内存与进程生命周期优化 PR，显示团队正在集中打磨 CLI 的基础执行稳定性。

---

## 2. 版本发布

**v0.62.0-nightly.20260917.g6a466a7e2**

本次为夜间迭代版本，无重大功能变更说明。与前一夜间版（20260916）相比，仅包含日常提交累积。

🔗 [查看完整 Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.62.0-nightly.20260916.g6a466a7e2...v0.62.0-nightly.20260917.g6a466a7e2)

---

## 3. 社区热点 Issues（Top 10）

### 🥇 #22323 — Subagent 在 MAX_TURNS 后错误报告为 GOAL 成功
- **类型：** Bug (P1) | **评论：** 13 | **👍：** 2
- **摘要：** `codebase_investigator` 子代理在达到最大轮次限制、未完成任何分析的情况下，仍报告 `status: "success"` 且 `Termination Reason: "GOAL"`，掩盖了任务中断的事实。
- **社区反应：** 评论数最多，说明大量用户遇到过「子代理假成功」问题。已有对应修复 PR #29367 提交，表明维护者已响应。
- 🔗 [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)

### 🥈 #1466 — macOS 上运行 `gemini -s` 出现 punycode Node 弃用警告（已关闭）
- **类型：** Bug (P2) | **评论：** 10 | **👍：** 2
- **摘要：** Node.js v22.13.0 环境下运行 `gemini -s` 触发 `DEP0040` 弃用警告。经过长时间排查后问题已关闭。
- **社区反应：** 该 Issue 自 2025 年 6 月开启，历时一年多终于关闭，属于长期遗留问题的了结。
- 🔗 [Issue #1466](https://github.com/google-gemini/gemini-cli/issues/1466)

### 🥉 #21409 — Generalist Agent 无限挂起
- **类型：** Bug (P1) | **评论：** 8 | **👍：** 8（最高点赞）
- **摘要：** 当 CLI 将任务委派给 generalist agent 时，即使简单的文件夹创建操作也会无限挂起，等待长达1小时后只能手动取消。
- **社区反应：** 8 个 👍 为全部 Issue 中最高，表明这是高度共鸣的用户痛点。有用户发现通过指示模型「不要委派给子代理」可以规避，说明问题出在子代理调度逻辑。
- 🔗 [Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)

### #19873 — 零依赖 OS 沙箱与执行后意图路由
- **类型：** Enhancement (P2) | **评论：** 9 | **👍：** 1
- **摘要：** 提出利用 Gemini 3 模型天然的 bash 亲和力，通过零依赖 OS 沙箱实现安全执行，并在执行后进行意图路由。
- **社区反应：** 这是一条架构级别的增强提案，讨论较为深入，涉及模型原生能力与安全 UX 之间的平衡。
- 🔗 [Issue #19873](https://github.com/google-gemini/gemini-cli/issues/19873)

### #22745 — AST 感知文件读取、搜索与映射的影响评估
- **类型：** EPIC / Feature (P2) | **评论：** 7 | **👍：** 1
- **摘要：** 一个 EPIC 级别的探索任务，评估 AST 感知工具在精确读取方法边界、减少 token 噪声、改进代码导航方面的价值。
- **社区反应：** 作为 EPIC 追踪多个子任务（含 #22746），代表了团队在上下文效率优化方向上的长期规划。
- 🔗 [Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745)

### #21968 — Gemini 主动性不足：不使用 skills 和子代理
- **类型：** Bug (P2) | **评论：** 6
- **摘要：** 用户反馈模型几乎从不自主使用自定义 skills 和子代理，除非被明确指示。即使有高相关性的 skill（如 gradle、git），模型也不会自动调用。
- **社区反应：** 触及了 Agent 自主性的核心问题——模型拥有工具但不懂何时使用，直接影响用户体验。
- 🔗 [Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)

### #26525 — 确定性脱敏与 Auto Memory 日志减少
- **类型：** Bug (P2, Security) | **评论：** 5
- **摘要：** Auto Memory 在后台将本地 transcript 内容发送给模型后才进行脱敏，存在安全风险。服务端也可能记录 skill 内容。
- **社区反应：** 涉及安全与隐私，由维护者主动提出，属于内部安全审计发现的问题。
- 🔗 [Issue #26525](https://github.com/google-gemini/gemini-cli/issues/26525)

### #25166 — Shell 命令完成后卡在 "Waiting input"
- **类型：** Bug (P1) | **评论：** 4 | **👍：** 3
- **摘要：** 极简单的 shell 命令执行完成后 CLI 仍然挂起，显示 "Awaiting user input"。问题反复出现，严重影响交互流程。
- **社区反应：** 3 个 👍 + P1 优先级，属于影响面较广的基础体验问题。
- 🔗 [Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)

### #23571 — 模型频繁在随机位置创建临时脚本
- **类型：** Bug (P2) | **评论：** 3
- **摘要：** 当限制模型只能通过 shell 执行操作时，它会将多个编辑脚本分散到不同目录，给 workspace 清理和提交带来大量开销。
- **社区反应：** 用户对「模型在哪里写文件」缺乏控制力，是实际开发流程中的常见烦恼。
- 🔗 [Issue #23571](https://github.com/google-gemini/gemini-cli/issues/23571)

### #22267 — Browser Agent 忽略 settings.json 覆盖配置
- **类型：** Bug (P2) | **评论：** 3
- **摘要：** `AgentRegistry` 在初始化时正确读取并合并了 settings.json，但 Browser Agent 完全忽略这些覆盖（如 `maxTurns`）。
- **社区反应：** 配置系统的不一致性让用户无法信任全局设置，影响可配置性体验。
- 🔗 [Issue #22267](https://github.com/google-gemini/gemini-cli/issues/22267)

---

## 4. 重要 PR 进展（Top 10）

### 🔧 #29367 — 修复子代理恢复时保留原始终止原因
- **关联：** 修复 #22323 | **优先级：** P1 | **规模：** L
- **内容：** 修复 `LocalAgentExecutor` 恢复路径中无条件覆盖 `terminateReason` 的逻辑，防止 MAX_TURNS 中断被报告为 GOAL 成功。
- **意义：** 直接回应了本周最热的 Issue，是社区等待已久的修复。
- 🔗 [PR #29367](https://github.com/google-gemini/gemini-cli/pull/29367)

### 🧹 #29380 — 改进终端缓冲区内存管理与 Windows 路径格式化
- **优先级：** 未标注 | **规模：** L
- **内容：** 优化 PTY shell 执行和 headless 终端序列化的内存使用，同时改进 `/bug` 和 `/bug-memory` 诊断消息中 Windows 文件路径的 Markdown 格式化。
- **意义：** 内存优化对长时间运行的 CLI 会话至关重要。
- 🔗 [PR #29380](https://github.com/google-gemini/gemini-cli/pull/29380)

### 🪟 #29379 — 同步 ConPTY 进程退出生命周期
- **优先级：** P1 | **规模：** L
- **内容：** 改善 Windows ConPTY 环境下 `node-pty` 进程生命周期确定性和流完成一致性。
- **意义：** 针对 Windows 平台的专项稳定性修复，涉及 P1 优先级。
- 🔗 [PR #29379](https://github.com/google-gemini/gemini-cli/pull/29379)

### 🎯 #29378 — VS Code IDE Companion 关闭 diff 标签时保持终端焦点
- **优先级：** P1 | **规模：** XL
- **内容：** 在关闭 diff 预览编辑器时传入 `preserveFocus`，保持用户在集成终端中的键盘焦点，提升多文件编辑流畅度。
- **意义：** 直接改善 VS Code 用户的编辑体验，P1 优先级反映了 IDE 集成的重要性。
- 🔗 [PR #29378](https://github.com/google-gemini/gemini-cli/pull/29378)

### 🔐 #29339 — 修复 OAuth 刷新 token 丢失问题（已关闭）
- **关联：** 修复 GH-21691 | **优先级：** P1 | **规模：** M
- **内容：** 修复 Google OAuth 凭据在刷新时丢失 `refresh_token` 的问题，并让凭据删除操作幂等，避免用户陷入重复认证循环。
- **意义：** 认证稳定性直接决定用户能否使用产品，已关闭说明已合并。
- 🔗 [PR #29339](https://github.com/google-gemini/gemini-cli/pull/29339)

### 📝 #29366 — 修复会话恢复时工具响应重复回放
- **优先级：** P1 | **规模：** L
- **内容：** 使用 `-r` 恢复会话时，每个工具结果被发送两次，导致首次请求失败且录制文件膨胀。此 PR 修复了该重复回放问题。
- **意义：** 直接影响会话恢复功能的可用性。
- 🔗 [PR #29366](https://github.com/google-gemini/gemini-cli/pull/29366)

### 🔗 #29368 — ACP 按 ID 解析 session/load
- **优先级：** P1 | **规模：** M
- **内容：** 修复 #29288，使 ACP 即使在没有可恢复内容时也能按 ID 解析会话。
- **意义：** ACP（Agent Client Protocol）是 CLI 与 IDE/编辑器集成的关键通道。
- 🔗 [PR #29368](https://github.com/google-gemini/gemini-cli/pull/29368)

### 🌐 #29376 — 停止 Windows IDE 检测回退时运行 Unix 命令
- **规模：** M
- **内容：** 修复 `process-utils.ts` 中在 Windows 上错误回退执行 Unix `ps` 命令的问题。
- **意义：** 平台适配的细节修复，避免 Windows 上出现命令不存在错误。
- 🔗 [PR #29376](https://github.com/google-gemini/gemini-cli/pull/29376)

### 📊 #29375 — DevTools HTTP 响应块有状态解码
- **优先级：** P2 | **规模：** M
- **内容：** 修复 `ActivityLogger` 中每个 HTTP chunk 独立解码 UTF-8 导致多字节字符被截断的问题，改用有状态解码器。
- **意义：** 修复流式活动事件的编码损坏问题。
- 🔗 [PR #29375](https://github.com/google-gemini/gemini-cli/pull/29375)

### 🔤 #29304 — 截断时避免拆分 UTF-16 代理对
- **规模：** S
- **内容：** 修复 `sanitizeForDisplay` 在 emoji 截断时产生未配对代理对的问题。
- **意义：** 提升包含 emoji 文本的显示质量，涉及终端 UI 渲染。
- 🔗 [PR #29304](https://github.com/google-gemini/gemini-cli/pull/29304)

---

## 5. 功能需求趋势

从近期 Issues 的标签和内容可以提炼出以下社区关注的功能方向：

### 🔍 AST 感知代码理解（Epic 级方向）
Issue #22745 和 #22746 构成了一个 EPIC 集群，探索通过 AST 感知工具实现精确方法边界读取、减少 token 噪声、改进代码映射。搭配 #19561 的「Tactful Extraction」token 节约读取策略，说明 **上下文效率优化** 是团队的重点投入方向。

### 🤖 子代理（Subagent）可靠性
多个高热度 Issue 围绕子代理体验展开：#22323（假成功）、#21409（挂起）、#21968（主动性不足）、#21763（bug 报告缺少子代理上下文）、#22598（子代理轨迹可见性）。社区对子代理的诉求可总结为：**可靠、可见、可调试**。

### 🛡️ 安全与隐私
#26525（确定性脱敏）、#26522（Auto Memory 低信号重试）、#26523（无效 inbox 补丁）、#26516（Memory 系统质量改进）形成 Auto Memory 安全加固集群，由维护者主动推动。同时 #22672 关注模型破坏性行为防护。

### 🖥️ 终端体验与跨平台稳定性
#21924（终端缩放闪烁）、#25166（命令完成卡等待输入）、#22465（交互式提示卡住）以及多个 PTY/ConPTY 相关 PR 表明团队正在打通 **Windows/POSIX 双平台的执行稳定性**。

### 🔌 IDE / 编辑器集成
VS Code 焦点保持 PR（#29378）、Windows IDE 检测修复（#29376）、ACP 会话解析（#29368）体现了 **IDE 集成体验**的持续完善。

---

## 6. 开发者关注点（痛点总结）

| 痛点 | 代表 Issue | 频次/热度 |
|------|-----------|----------|
| **子代理假成功/挂起** | #22323, #21409 | 🔥🔥🔥 高（13+8 评论，10 赞） |
| **Shell 执行卡死** | #25166, #22465 | 🔥🔥 中高（P1, 反复出现） |
| **模型不自主使用工具** | #21968 | 🔥🔥 中高（核心体验） |
| **配置覆盖不被遵守** | #22267 | 🔥 中（信任问题） |
| **Auto Memory 安全与噪音** | #26525, #26522, #26523 | 🔥 中（安全审计） |
| **模型文件操作不可控** | #23571 | 🔥 中（workspace 污染） |
| **工具数量超限 400 错误** | #24246 | 🔥 中（规模化使用） |
| **会话恢复/压缩不持久** | #21335, #29366 | 🔥 中（数据一致性） |

**核心洞察：** 开发者当前最大的不信任感来源于 **「Agent 说成功了但实际没做」**（#22323）和 **「Agent 说在等但实际已经死了」**（#25166, #21409）。这两类问题动摇了对 Agent 自动化能力的根本信心。维护团队已通过 PR #29367 等快速响应，但子代理调度和跨平台执行层面的系统性修复仍需持续跟进。

---

*报告由 AI 技术分析师生成，基于 GitHub 公开数据。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-09-18** | **数据来源：github.com/github/copilot-cli**

---

## 1. 今日速览

GitHub Copilot CLI 发布 **v1.0.86-2** 小版本修复更新。社区讨论焦点集中在 **MCP 服务器兼容性** 与 **模型选择（Auto 模式）稳定性** 两大领域——Figma MCP 服务器因 `-32601` 错误码被 CLI 视为致命失败(#4870)，同时 Auto 模式在 `/btw`、`/ask` 命令下频发报错(#4887)，多项 Issue 反映了 MCP 生态集成与模型路由逻辑的成熟度仍需提升。

---

## 2. 版本发布

| 版本 | 发布内容 |
|------|---------|
| **v1.0.86-2** | Fixes and changes（官方未提供详细 changelog） |

> 注：此版本与 #4887 中用户报告的受影响版本一致，建议关注后续修复版本。

---

## 3. 社区热点 Issues（Top 10）

### 🔴 高优先级 — MCP 生态

**1. [#4870] Figma MCP 服务器无法注册工具 — CLI 将 `-32601` 视为致命错误**
- 作者: Just-Jan | 👍: 9 | 评论: 5 | 状态: OPEN
- 链接: [github/copilot-cli#4870](https://github.com/github/copilot-cli/issues/4870)
- **为何重要：** Figma 官方托管 MCP 服务器在 VS Code 中正常工作，但 CLI 对 `server/discover` 返回的 `-32601` 错误码处理过于严格，直接标记为致命失败。这暴露了 CLI 与 VS Code 在 MCP 协议容错处理上的行为差异，影响所有依赖远程 MCP 服务的工作流。

**2. [#4847] 自动 managed-settings 刷新导致 IDE MCP 重载失败并禁用 `/allow-all`**
- 作者: jackhorton | 👍: 3 | 评论: 3 | 状态: OPEN
- 链接: [github/copilot-cli#4847](https://github.com/github/copilot-cli/issues/4847)
- **为何重要：** 长时间运行的 CLI + VS Code 联合会话中，定时刷新策略会破坏动态注入的 IDE MCP 服务器，并连带导致权限策略（Computer Use /allow-all）失效。对重度 IDE 集成用户影响严重。

**3. [#4753] v1.0.83 会话恢复取消进行中的 stdio MCP 服务器连接**
- 作者: indeherb | 👍: 2 | 评论: 4 | 状态: CLOSED
- 链接: [github/copilot-cli#4753](https://github.com/github/copilot-cli/issues/4753)
- **为何重要：** 会话恢复时前台会话交接将 MCP 连接超时从 ~16s 压缩至 ~1s，导致初始化较慢的 MCP 服务器在整个会话中不可用。严重影响依赖 MCP 持续可用性的工作流。

**4. [#4095] Windows: 插件更新失败 "Access is denied (os error 5)"**
- 作者: FBakkensen | 👍: 22 | 评论: 3 | 状态: OPEN
- 链接: [github/copilot-cli#4095](https://github.com/github/copilot-cli/issues/4095)
- **为何重要：** 👍 数全场最高（22），VS Code Copilot 扩展持有文件监视句柄导致 CLI 无法写入插件目录。Windows 平台用户当前完全无法在 VS Code 运行时更新插件，属于平台级阻塞问题。

### 🟠 中优先级 — 模型与 Auto 模式

**5. [#4887] Auto 模式下使用 `/btw` 或 `/ask` 命令返回错误**
- 作者: vori1973 | 👍: 0 | 评论: 3 | 状态: OPEN
- 链接: [github/copilot-cli#4887](https://github.com/github/copilot-cli/issues/4887)
- **为何重要：** Auto 模式是 CLI 推荐的默认模型选择策略，但其与斜杠命令的组合存在回归。与已关闭的 #4459（Auto 选到不可用推理级别）和 #4445（Auto 选中不存在的模型配置）构成同一问题的不同表现。

**6. [#4655] Agent Plugins 1.0: 自定义 agent 未被发现**
- 作者: mcollier | 👍: 0 | 评论: 4 | 状态: CLOSED
- 链接: [github/copilot-cli#4655](https://github.com/github/copilot-cli/issues/4655)
- **为何重要：** Agent Plugins 1.0 规范中 `com.github.copilot/agents` 路径下的自定义 agent 未被 CLI 扫描发现，直接影响插件生态的可扩展性。

### 🟡 配置与体验

**7. [#3380] 请求添加 `--disable-repo-mcps` 标志以跳过仓库级 MCP 配置**
- 作者: DrEsteban | 👍: 1 | 评论: 3 | 状态: OPEN
- 链接: [github/copilot-cli#3380](https://github.com/github/copilot-cli/issues/3380)
- **为何重要：** 当前只能按名称逐一禁用 MCP 服务器，缺少"一键忽略仓库 MCP 配置"的能力。在不受信任仓库或调试场景下，这是安全与灵活性的刚需。

**8. [#4886] `--plugin-dir` 加载的技能在 `/skills` 和 `/env` 中不显示**
- 作者: zendu | 👍: 0 | 评论: 2 | 状态: OPEN
- 链接: [github/copilot-cli#4886](https://github.com/github/copilot-cli/issues/4886)
- **为何重要：** 本地插件技能被后端正确发现但交互式 UI 遗漏，用户无法通过 `/skills` 面板查看和调用，破坏了本地插件开发体验。

**9. [#4447] 退格键逐词删除而非逐字符删除**
- 作者: Jebarson | 👍: 1 | 评论: 2 | 状态: OPEN
- 链接: [github/copilot-cli#4447](https://github.com/github/copilot-cli/issues/4447)
- **为何重要：** 基础输入体验回归，退格键行为异常直接影响日常交互效率，属于"小问题大影响"的 UX bug。

**10. [#4892] 扩展宿主和 MCP 服务器每小时触发一次全量重新枚举**
- 作者: tiagomacarios | 👍: 0 | 评论: 1 | 状态: OPEN
- 链接: [github/copilot-cli#4892](https://github.com/github/copilot-cli/issues/4892)
- **为何重要：** 定时全量重枚举可能引发资源波动，且与 #4847（自动刷新导致 MCP 重载失败）存在关联，暗示会话生命周期管理机制需要优化。

---

## 4. 重要 PR 进展

过去 24 小时内无更新的 Pull Request。

> 社区当前以 Issue 报告和讨论为主，尚未有对应的修复 PR 进入活跃审查阶段。多个高优先级 Issue（如 #4870、#4095、#4887）仍等待官方分派和代码修复。

---

## 5. 功能需求趋势

从 30 条 Issue 中提炼出社区最关注的功能方向：

| 趋势方向 | 相关 Issue 数量 | 代表性 Issue |
|----------|:--------------:|-------------|
| **MCP 生态稳定性与兼容性** | 8 | #4870, #4753, #4847, #4606, #3380, #1505, #4892, #4886 |
| **模型选择（Auto 模式）可靠性** | 4 | #4887, #4459, #4445, #3899 |
| **会话持久化与恢复** | 3 | #4753, #3553, #4319 |
| **插件系统完善** | 3 | #4655, #4886, #4095 |
| **终端输入/渲染体验** | 3 | #4447, #3605, #4060 |
| **配置与权限精细化** | 2 | #3380, #4193 |
| **网络传输可靠性** | 1 | #3304（HTTP/2 会话销毁导致重试循环） |

**核心洞察：** MCP 生态是当前绝对焦点——近 1/3 的活跃 Issue 与 MCP 相关，覆盖协议容错、连接生命周期、OAuth 认证、配置管理等子方向。CLI 作为 MCP 的"终端侧消费者"，其健壮性明显落后于 VS Code 端。

---

## 6. 开发者关注点与痛点总结

### 🔥 高频痛点

1. **MCP 容错差距** — CLI 对 MCP 协议错误的处理比 VS Code 更严格，导致同样的 MCP 服务器在 VS Code 可用但在 CLI 中失败（#4870）。社区呼吁 CLI 对标 VS Code 的宽容策略。

2. **Auto 模式不可靠** — 自动模型选择频繁选到不可用配置或推理级别，甚至导致崩溃（#4887、#4445、#4459）。这是 v1.0.86 周期的突出回归。

3. **Windows 平台阻塞** — 插件更新因文件锁失败（#4095，👍 22），是社区投票最高的问题，长期未解决。

4. **会话状态脆弱** — 恢复会话丢失 MCP 连接（#4753）、关闭后数据丢失（#3553）、切换会话后 Plan 模式挂起（#4319），长时间工作流的可靠性不足。

### 💡 高频需求

1. **一键跳过仓库级 MCP** — 安全意识强的开发者需要在不信任仓库中忽略 `.mcp.json`（#3380）。

2. **Per-agent 模型/Provider 配置** — 多 agent 工作流需要不同 agent 使用不同模型端点，当前进程级 `COPILOT_PROVIDER_BASE_URL` 粒度不够（#4703）。

3. **本地插件开发体验闭环** — `--plugin-dir` 技能在 UI 中不可见（#4886）、自定义 agent 未被发现（#4655），插件开发者无法完整验证自己的工作。

4. **长任务完成通知** — CLI 长时间执行后缺乏原生 OS 通知，用户容易丢失上下文（#2616）。

---

*本日报基于 2026-09-17 GitHub 数据自动生成，数据截止时间为 UTC 时间 2026-09-18 00:00。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期：** 2026-09-18  
**数据来源：** [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## 1. 今日速览

过去 24 小时内 Kimi Code CLI 无新版本发布。社区聚焦于两个新提交的 Bug：Kimi Desktop「梦境记忆」功能开关未写入配置的问题，以及子代理（subagent）启动时 OAuth 令牌获取间歇性超时的问题。此外，PR #2651 针对重复工具调用死循环提出了硬停止修复方案，值得关注。

---

## 2. 版本发布

过去 24 小时无新版本发布。

---

## 3. 社区热点 Issues

> 以下为过去 24 小时内更新的 Issues，共 3 条，全部列出。

| # | Issue | 状态 | 重要性说明 |
|---|-------|------|-----------|
| 1 | [#2649 「梦境记忆」开关拨动后不写入配置](https://github.com/MoonshotAI/kimi-cli/issues/2649) | 🟢 OPEN | **高优先级。** 涉及 Kimi Desktop 核心功能门控机制——用户界面允许操作但配置未持久化，疑似服务端功能开关未放行，导致功能形同虚设。已获 2 条评论，社区正在讨论根因是客户端还是服务端。 |
| 2 | [#2650 子代理启动间歇性失败：OAuth 令牌获取超时](https://github.com/MoonshotAI/kimi-cli/issues/2650) | 🟢 OPEN | **高优先级。** 影响 subagent 并发能力——即使主会话认证正常，`auth.kimi.ai` 端点偶发超时会导致整个子代理启动失败，目前无重试机制。暂无评论，需官方确认是否为服务端抖动。 |
| 3 | [#1276 `@` 自动补全缺少文件](https://github.com/MoonshotAI/kimi-cli/issues/1276) | 🔴 CLOSED | **参考价值。** 此为历史 Issue（2 月创建），现已关闭。`@` 文件自动补全缺失是 IDE 交互体验的常见痛点，关闭可能意味着已在后续版本修复，可作为同类问题的参考。 |

---

## 4. 重要 PR 进展

> 过去 24 小时内更新的 PR 仅 1 条。

| # | PR | 状态 | 说明 |
|---|-----|------|------|
| 1 | [#2651 fix: stop repeated tool-call loops](https://github.com/MoonshotAI/kimi-cli/pull/2651) | 🟢 OPEN | **重要修复。** 针对 Issue #2637，将重复相同工具调用的防护从"软限制"改为"硬停止"——此前运行时在达到重复次数上限后仍会执行最后一次重复调用，仅在其后才阻止后续调用；本 PR 在达到上限时立即拦截，避免无效的 LLM 调用浪费 token 与延迟。由社区贡献者 Oxygen56 提交。 |

---

## 5. 功能需求趋势

基于近期 Issues 反映的方向：

- **🛡️ 可靠性与容错机制** — OAuth 超时（#2650）、重复调用死循环（#2651 / #2637）等问题表明，社区对运行时稳定性与重试/熔断机制的需求强烈，当前缺少对瞬态故障的优雅降级处理。
- **⚙️ 配置持久化与功能门控** — 「梦境记忆」开关问题（#2649）暴露了客户端 UI 与服务端功能门控之间的状态同步缺陷，用户期望本地设置能真正生效。
- **🖥️ 桌面端体验完善** — Kimi Desktop（Electron）相关问题持续出现，包括配置写入、UI 交互等，桌面端仍是重点迭代方向。
- **💬 IDE 交互与自动补全** — `@` 文件补全（#1276）等历史问题说明代码补全和上下文引用体验仍需打磨。

---

## 6. 开发者关注点

| 痛点 | 相关 Issue | 说明 |
|------|-----------|------|
| **子代理启动脆弱性** | [#2650](https://github.com/MoonshotAI/kimi-cli/issues/2650) | OAuth 端点偶发超时直接导致 subagent 全部失败，缺少重试/backoff 机制，影响多代理工作流稳定性 |
| **工具调用死循环浪费 token** | [#2651](https://github.com/MoonshotAI/kimi-cli/pull/2651) | LLM 重复发起相同工具调用时，现有防护不够果断，在边界情况下仍会执行冗余调用，增加成本与延迟 |
| **功能开关形同虚设** | [#2649](https://github.com/MoonshotAI/kimi-cli/issues/2649) | 用户可操作 UI 开关但功能实际未启用，缺乏明确的反馈或状态提示，造成困惑 |
| **自动补全不完整** | [#1276](https://github.com/MoonshotAI/kimi-cli/issues/1276) | `@` 引用文件时补全列表缺失部分文件，影响编码流畅度 |

---

> **编者注：** 今日数据量较少（3 Issue + 1 PR），社区活跃度相对平稳。两个新 Bug 均涉及运行时健壮性，建议关注 PR #2651 的合并进展以及官方对 #2649 / #2650 的回应。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报（2026-09-18）

## 1. 今日速览

过去 24 小时社区被同一个故障刷屏：「`Error from provider (Console): OpenCode's free tier can only be used from within OpenCode`」大规模爆发，波及官方桌面端、Zen 免费模型、自动压缩（compaction）等场景。与此同时，`big-pickle` 等免费模型出现「Insufficient Balance」报错，指向 token 路由/额度核验上游异常。无新版本发布。

---

## 2. 版本发布

过去 24 小时无新 Release。

---

## 3. 社区热点 Issues

1. **#35149「Insufficient Balance」阻断免费模型执行**（44 评论，👍20，CLOSED）
   中心编排器的 token 路由管道故障，CLI 对 `opencode/big-pickle`（Zen 配置）直接硬阻断并报额度不足。社区高度关注，因其指向上游编排服务而非用户侧配置。
   🔗https://github.com/anomalyco/opencode/issues/35149

2. **#49580 MonoCode 前端 + OpenCode 后端，免费模型运行失败**（27 评论，OPEN）
   第三方桌面 UI（MonoCode）配合 OpenCode 后端时，`Muse Spark 1.3 Free` 约 55 秒后报「只能从 OpenCode 内部使用」。暴露免费层调用来源校验对第三方前端的兼容性问题。
   🔗https://github.com/anomalyco/opencode/issues/49580

3. **#19130 Windows ARM64 原生 TUI 初始化失败**（25 评论，👍13，OPEN）
   ARM64 原生二进制可执行非交互命令，但 TUI 因 `bun:ffi` 加载 TinyCC 失败而无法启动。长期未决的平台兼容性痛点。
   🔗https://github.com/anomalyco/opencode/issues/19130

4. **#39845 DeepSeek V4 Flash 突然要求「启用中国托管模型」**（24 评论，👍30，OPEN）
   会话中途被强制要求显式 opt-in 中国托管，影响 Go 订阅用户体验。高👍数表明区域托管/合规策略对用户造成显著困扰。
   🔗https://github.com/anomalyco/opencode/issues/39845

5. **#49433 任意模型均报「免费层只能从 OpenCode 内部使用」**（24 评论，OPEN）
   与 #49580 同源的广泛性故障，pacman 安装的 1.3.17 版本触发，表明免费层来源校验逻辑存在回归。
   🔗https://github.com/anomalyco/opencode/issues/49433

6. **#48645 1.18.30 回归：每个提示都崩溃（SystemPrompt.environment TypeError）**（10 评论，👍17，OPEN）
   升级后首个消息即失败，报 `a.name` 的 TypeError，1.18.18 无此问题。属于严重的提示构建回归。
   🔗https://github.com/anomalyco/opencode/issues/48645

7. **#49587 自动权限 + 自动压缩触发时免费模型失败**（10 评论，OPEN）
   Zen 上的 Big Pickle、MiMo V2.5 在上下文窗口触发自动压缩时报「只能从 OpenCode 内部使用」，压缩链路与免费层校验相互作用异常。
   🔗https://github.com/anomalyco/opencode/issues/49587

8. **#48973 Muse Spark 1.3 报「encrypted_content 未签发给此调用方」**（6 评论，👍8，OPEN）
   上游请求被拒的 `invalid_request_error`，疑似安全令牌/加密内容签发链路问题，相关会话恢复场景也受影响。
   🔗https://github.com/anomalyco/opencode/issues/48973

9. **#45417 会话成本遗漏子代理（subagent）成本**（4 评论，👍11，OPEN）
   TUI 侧栏、`opencode stats`、`/export` 显示的会话成本不含派生子代理的计费，多子代理工作流的展示成本远低于实际账单。计费透明度问题。
   🔗https://github.com/anomalyco/opencode/issues/45417

10. **#49414 未知 finish reason 导致代理步骤死循环，无限请求风暴**（3 评论，OPEN）
    当提供商 finish reason 映射为 `unknown` 且无工具调用时，`SessionPrompt.run` 永不终止，构成潜在的资源消耗风暴。
    🔗https://github.com/anomalyco/opencode/issues/49414

---

## 4. 重要 PR 进展

1. **#48638 强化会话 diff、快照与写入路径，削减并行代理下的 worker-thread 卡顿**（OPEN，唯一活跃 PR）
   修复 `SessionSummary.summarize` 将完整 git patch 误挂到用户消息 `summary.diffs` 的问题，针对并行代理场景的稳定性改进，是当日唯一未关闭的重要 PR。
   🔗https://github.com/anomalyco/opencode/pull/48638

2. **#43115 移除不可达的 AI SDK 提供商**（CLOSED）
   清理 Amazon Bedrock、Anthropic、Azure、OpenAI 兼容 SDK 的直接依赖，改由原生路由覆盖，简化核心代码。
   🔗https://github.com/anomalyco/opencode/pull/43115

3. **#43076 配置本地推理控制**（CLOSED）
   将原生 OpenAI 兼容的 `reasoningEffort` 透传到 Chat Completions 请求，并暴露 LM Studio/Ollama/vLLM 的稀疏推理变体。
   🔗https://github.com/anomalyco/opencode/pull/43076

4. **#43069 CLI 新增无鉴权 serve 选项**（CLOSED）
   增加 `opencode serve --no-auth` 与 `OPENCODE_AUTH=false`，支持部署与服务配置场景。
   🔗https://github.com/anomalyco/opencode/pull/43069

5. **#43058 按文件夹笔记本记忆 + 任务中笔记附加 + 交互式审查**（CLOSED）
   以 `.note.yaml` 实现按项目持久记忆，提供 `notes_get`/`notes_commit` 及保存学习点提示。
   🔗https://github.com/anomalyco/opencode/pull/43058

6. **#43123 MCP 暴露结构化内容给模型**（CLOSED）
   修复 MCP 工具同时返回 `content` 与 `structuredContent` 时结构化内容被丢弃的问题。
   🔗https://github.com/anomalyco/opencode/pull/43123

7. **#43116 TUI 匹配斜杠命令拼写错误**（CLOSED）
   保留模糊匹配顺序，仅在无前缀匹配时提前单编辑拼写错误匹配，改善命令补全体验。
   🔗https://github.com/anomalyco/opencode/pull/43116

8. **#43128 提示操作键位可配置**（CLOSED）
   在 V2 应用键盘快捷键设置中暴露 `prompt.submit`、`prompt.newline`、`prompt.submit.alternate`。
   🔗https://github.com/anomalyco/opencode/pull/43128

9. **#43030 首页建议服务端项目**（CLOSED）
   桌面端存在多服务器时恢复最近项目建议，合并最近关闭与服务端已知项目。
   🔗https://github.com/anomalyco/opencode/pull/43030

10. **#43113 新增 PureScript 语言服务器支持**（CLOSED）
    为 PureScript 引入 `purescript-language-server` 作为 LSP。
    🔗https://github.com/anomalyco/opencode/pull/43113

---

## 5. 功能需求趋势

- **免费层与额度/路由治理**：本日最集中议题。免费模型的来源校验（「只能从 OpenCode 内部使用」）、Insufficient Balance、中国托管 opt-in、配额计算等，集中在 provider 路由与账户/额度核验链路，亟需官方澄清政策并修复回归。
- **桌面/多端集成兼容性**：第三方前端（MonoCode）与官方桌面端 macOS/Windows ARM64 均在报错，跨端一体化体验仍不稳定。
- **会话与压缩健壮性**：自动压缩、agent 步骤循环、finish reason 处理、会话 diff/快照持久化成为高频修复方向。
- **成本透明度**：子代理成本未计入会话统计，社区明确要求更准确的计费展示。
- **本地推理与模型扩展**：本地推理控制（reasoningEffort）、新 LSP 支持、MCP 结构化内容暴露等，反映向本地化、可定制化演进的趋势。

---

## 6. 开发者关注点

- **免费层大面积不可用是头号痛点**：官方桌面端、Zen、第三方前端均被同一「来源校验」错误阻断，用户普遍诉求是官方尽快定位上游路由/额度核验问题并给出 ETA。
- **回归问题频发**：1.18.30 的 `SystemPrompt.environment` TypeError 与近期免费层回归叠加，削弱用户对升级的信心，社区呼吁更严格的发布前回归测试。
- **平台兼容性缺口**：Windows ARM64 TUI、macOS 签名校验失败（#46313）等平台级问题长期悬而未决，影响特定用户群。
- **计费/配额不透明**：配额已达但账单显示不一致（#42995）、子代理成本缺失（#45417）等问题，反映用户在成本可控性上的焦虑。
- **区域合规影响**：DeepSeek 中国托管 opt-in 与白俄罗斯服务中断（#49598）等，表明区域政策正在实质性影响可用性与支付。

---
*数据来源：github.com/anomalyco/opencode（2026-09-17 至 2026-09-18 更新）*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报（2026-09-18）

## 今日速览

过去 24 小时没有新的 Release。社区讨论集中在 **context compaction 与 thinking/reasoning 消息处理**、**多 provider 兼容性**，以及 **TUI/终端与跨平台可靠性**。PR 侧最重要的进展是 #9717 合并了 compaction 中 thinking-only 消息的修复，同时 Azure Foundry、LLM Gateway 等新 provider 接入也在推进。

## 社区热点 Issues（Top 10）

1. **#8684 `PI_OFFLINE` 静默禁用所有 provider 模型发现** — [OPEN]  
   环境变量文档只说明会关闭启动期遥测和更新检查，实际却会关闭整个会话的模型目录网络发现，行为未公开。社区关注度较高，10 条评论。  
   https://github.com/earendil-works/pi/issues/8684

2. **#9602 Compaction 可能因包含此前未发给模型的 thinking 消息而溢出** — [OPEN]  
   长会话使用本地 Qwen3.8 时，响应达到 output token 上限，compaction 摘要中包含被省略的 thinking 内容，导致上下文恢复失败。5 条评论。  
   https://github.com/earendil-works/pi/issues/9602

3. **#9391 Compaction 后陈旧 signed thinking blocks 每轮被重放，Anthropic 持续丢弃** — [OPEN]  
   手动 compaction 后，Anthropic 每个请求都报 `prefix_binding_mismatch`，同一批 thinking block 反复被丢弃，影响长会话质量。4 条评论，1 👍。  
   https://github.com/earendil-works/pi/issues/9391

4. **#9482 空 body 400 被误判为 context overflow，触发破坏性 auto-compaction** — [OPEN]  
   OpenAI-compatible gateway 返回的空 body 400 会让 Pi 跳过重试并销毁最多约 400k token 的会话历史，被作者标记为严重影响工作质量的非表面 bug。2 条评论。  
   https://github.com/earendil-works/pi/issues/9482

5. **#7836 Edit fuzzy match 对 whitespace 长度差异匹配失败** — [CLOSED]  
   `normalizeForFuzzyMatch` 不折叠连续空白或去除前导空白，导致小模型执行 Edit 时因空白不完全一致而失败。12 条评论，1 👍。  
   https://github.com/earendil-works/pi/issues/7836

6. **#9361 Windows 下 `shellPath` 在加载扩展时被非确定性忽略** — [OPEN]  
   任何扩展加载后，`~/.pi/agent/settings.json` 中合法的 `shellPath` 都可能被忽略，回退到 WSL System32 下的 `bash.exe`，影响 Windows 用户 shell 解析。6 条评论。  
   https://github.com/earendil-works/pi/issues/9361

7. **#4854 OpenAI-compatible tool replay 可能发送空 `tool_call_id`/`call_id`** — [CLOSED]  
   持久化/replay 时可能产生空 tool id 片段，后续请求被 API 以 `Invalid call_id: empty string` 拒绝。6 条评论。  
   https://github.com/earendil-works/pi/issues/4854

8. **#9036 openai-codex SSE parser 将整个响应拼接为单个字符串，导致 V8 堆 OOM** — [OPEN]  
   读取 Codex 流式响应时，large response 会触发 `JavaScript heap out of memory`。影响 macOS/Node 26 环境。3 条评论。  
   https://github.com/earendil-works/pi/issues/9036

9. **#8760 OpenRouter `:free` 模型因 `max_tokens` 超限全部返回 400** — [CLOSED]  
   Pi 使用 catalog 的 `maxOutputTokens` 作为 `max_tokens`，超过上游免费模型的硬限制，多个 `:free` 模型受影响。5 条评论。  
   https://github.com/earendil-works/pi/issues/8760

10. **#9708 Session 迁移原地重写文件且无备份，存在数据丢失风险** — [CLOSED]  
     打开旧版本 Pi 写出的 session 文件时会原地 mutate 并重写，若中途崩溃、断电或磁盘满可能损坏历史会话。3 条评论。  
     https://github.com/earendil-works/pi/issues/9708

## 重要 PR 进展

1. **#9717 fix(coding-agent): 在 compaction summary 中限制 thinking-only 消息** — 已合并  
   此前 `serializeConversation()` 会把纯 thinking 响应的完整 reasoning 内容放进 compaction prompt，导致 compaction 请求远大于普通请求。该修复直接对应 #9602。  
   https://github.com/earendil-works/pi/pull/9717

2. **#9714 feat(ai): 支持 Azure Foundry Chat Completions 部署** — 开放中  
   实现 #9645，让仅支持 Chat Completions 的 Foundry 部署（如 DeepSeek V4 Pro）可用于 `azure-openai-responses` 之外。  
   https://github.com/earendil-works/pi/pull/9714

3. **#9668 feat(coding-agent): 添加 prompt cache warming** — 开放中，WIP  
   实验性支持保持模型 prompt cache 热度，可能降低长会话或重复前缀场景的成本与延迟。  
   https://github.com/earendil-works/pi/pull/9668

4. **#7610 feat(ai): 添加 LLM Gateway 和 LLM Gateway DevPass provider** — 开放中  
   以 OpenRouter 风格的 OpenAI-compatible provider 形式接入 LLM Gateway，由 LLM Gateway 团队贡献。  
   https://github.com/earendil-works/pi/pull/7610

5. **#9630 feat(coding-agent): 增加事件 handler unsubscribe** — 已合并  
   `pi.on(...)` 支持取消订阅，同时每次 dispatch 前复制 handler 列表，避免派发期间注册/注销造成的副作用。  
   https://github.com/earendil-works/pi/pull/9630

6. **#9706 fix(coding-agent): 校验来自 transcripts 的 eval prompts** — 已合并  
   使用 transcript 中重放的 system prompt 验证文档变体，而非 reload 后 session 配置，并在验证失败时保留 usage、timings 等观测数据。  
   https://github.com/earendil-works/pi/pull/9706

7. **#9705 feat(coding-agent): 添加 TUI context footer eval** — 已合并  
   允许 `InteractiveMode` 接受注入终端用于进程内渲染，新增 Docker 隔离的文档评估，将 context usage 替换为 10 格进度条。  
   https://github.com/earendil-works/pi/pull/9705

8. **#9692 fix(tui): 裁剪溢出渲染行而不是崩溃** — 已合并  
   修复 #9691：当渲染行超过终端宽度时，`TuiMainScreen` differential render 不再抛未捕获异常，而是裁剪该行。  
   https://github.com/earendil-works/pi/pull/9692

9. **#9694 test(ai): 将 DeepSeek flash 模型引用更新为 v4** — 已合并  
   catalog 已重命名 `deepseek-flash` 为 `deepseek-v4-flash`，更新三个测试引用以修复 `tsgo --noEmit`。  
   https://github.com/earendil-works/pi/pull/9694

10. **#9693 test(coding-agent): 让 footer cwd 测试跨平台** — 已合并  
     用 `node:path` separator 构造预期路径，修复 Windows 下硬编码 `/` 导致的测试失败。  
     https://github.com/earendil-works/pi/pull/9693

## 功能需求趋势

- **Compaction 与 thinking/reasoning 处理仍是核心痛点**  
  #9602、#9391、#9482、#9512、#9647 等 Issue 集中反映：thinking 消息被错误纳入或重放、compaction 触发条件误判、摘要 token cap 不完整、扩展事件时序错位。对应 PR #9717 已开始修复。

- **Provider 生态继续扩展**  
  社区积极推动 Azure Foundry（#9714）、LLM Gateway（#7610）、GMI Cloud（#9685）、Qwen Token Plan + GLM-5.3（#9701）等 provider/模型接入。同时 OpenRouter `:free`（#8760）、Vertex Gemini（#9535）、OpenCode Zen（#9690）也暴露了具体兼容性问题。

- **TUI、终端与跨平台体验优化**  
  Windows shell 解析非确定性（#9361）、鼠标上报导致拖拽选择失效（#9696）、fullscreen 选择主题化（#9715）、macOS 非 ASCII 剪贴板损坏（#9684）、TUI 溢出崩溃（#9692）都指向更稳定的跨平台终端体验。

- **错误分类与重试机制需要更健壮**  
  空 body 400 误判为 context overflow（#9482）、无状态码的 `Bad Gateway` 不重试（#9712）、畸形 `Retry-After` 导致 sleep 0ms（#9689）、空 tool_id 重放（#4854）、`stop_reason: tool_use` 但无 tool block 导致“假挂起”（#9681）等，说明 provider 异常边界处理还有较多缝隙。

- **会话数据安全与可观测性**  
  session 迁移无备份（#9708）、时间戳带误导性 `Z`（#9609）、希望增加 `/drop` 丢弃会话（#9707）、扩展端缺少 `session_compact_end` 事件（#9647）等诉求集中在数据完整性与生命周期管理。

## 开发者关注点

- **长会话模型行为不稳定**：thinking/reasoning 消息在 compaction、replay 和 Anthropic prefix binding 中反复出错，直接影响长时间 agent 任务的连续性。
- **配置行为缺少透明度**：`PI_OFFLINE` 的隐藏副作用、Windows `shellPath` 非确定性忽略，都是“文档与实现不一致”的典型问题，增加排障成本。
- **Provider API 边界处理脆弱**：空 body 400、`max_tokens` 超限、畸形 `Retry-After`、空 tool id、`stop_reason` 无内容块等都需要更严格的校验与降级策略。
- **流式处理与内存安全**：SSE parser 整段缓冲导致 V8 OOM，说明大响应流式场景下还需要改进边读边解析，避免单字符串内存爆炸。
- **终端/剪贴板/文件安全细节**：跨平台非 ASCII 剪贴板损坏、session 就地迁移无备份、鼠标上报状态污染，都是容易被忽略但会造成实际数据或体验损失的问题。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报

**日期：2026-09-18** | **数据来源：[github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)**

---

## 一、今日速览

Qwen Code 桌面端正式发布 **v0.24.0**，带来 ACP 权限队列按会话隔离与共享输出模式等新能力；与此同时 nightly 通道同步滚动。社区活跃度极高，昨日新增及更新 Issue 50 条、PR 50 条，焦点集中在 **React #185 崩溃**、**大上下文窗口的 token 预算失效**以及**安全边界问题**（Bash 规则解析可被绕过）三类高频问题上。

---

## 二、版本发布

### 🎉 Qwen Code Desktop v0.24.0
- 发布说明：[Release v0.24.0](https://github.com/QwenLM/qwen-code/releases)
- **核心更新**：
  - `fix(cli)`: ACP 权限队列按会话（session）隔离，修复多会话下的权限串扰问题（PR [#11802](https://github.com/QwenLM/qwen-code/pull/11802)）
  - `feat(channels)`: 新增共享输出模式，支持多端一致的输出格式

### 🌙 v0.24.0-nightly.20260917（f822124af5）
- 记录 ACP 边界验收的合并文档（PR [#12024](https://github.com/QwenLM/qwen-code/pull/12024)），以及 CI 等待发布导出的修复。

---

## 三、社区热点 Issues（Top 10）

### 🔴 1. P1 级 React #185 崩溃系列（跨平台、高复现）
- **#11732** [TUI crashes with React error #185 while native monitor task continues running](https://github.com/QwenLM/qwen-code/issues/11732) — 已关闭，2 次独立会话复现，长时后台监控任务触发。
- **#11783** [TUI crashes with uncaught React error #185 a few seconds after background task registered](https://github.com/QwenLM/qwen-code/issues/11783) — 仍在追踪，后台 shell 任务注册数秒后 TUI 崩溃，"Maximum update depth exceeded"。
- **#11817** [useBoxMetrics loop-guard tests fail deterministically on Windows](https://github.com/QwenLM/qwen-code/issues/11817) — Windows 上 5/5 连续失败，暴露渲染循环保护的平台差异。
- **关注理由**：这是本周影响面最广的稳定性缺陷，跨 Linux/Windows，指向 UI 渲染层（ink/React 19.2）的循环守卫预算与后台任务生命周期之间的深层冲突。已有关联修复 PR #11858（budget per instance 硬化）。

### 🟠 2. 大上下文窗口预算失效（context-performance 集群）
- **#12029** [Percentage-of-context-window budgets scale the wrong way on large windows](https://github.com/QwenLM/qwen-code/issues/12029) — ToolSearch 预载永不触发、上下文告警永不出现，问题随窗口增大而恶化。
- **#12030** [Extension context file unconditionally resident, no gating/budget](https://github.com/QwenLM/qwen-code/issues/12030) — 每个扩展的上下文文件无差别注入 system prompt，无相关性门控与预算。
- **#10887** [Sessions burn 5-14M tokens in dead-end loops — no early termination](https://github.com/QwenLM/qwen-code/issues/10887) — 工具反复报错却无终止机制，生产会话烧掉百万级 token。
- **关注理由**：社区（以 @yiliang114 为代表）正系统性地审计 token 计量与预算机制，母题 #12028 已拆出多个子 Issue，显示出对上下文经济性的深度关注，与"项目正向大窗口演进"的方向直接冲突。

### 🟡 3. 安全：Bash 权限规则可被控制字符绕过
- **#11851** [isAsyncOperator treats \r/\v/\f/\u00a0 as bash word separators — allow rule can cover a second command](https://github.com/QwenLM/qwen-code/issues/11851) — P1 安全缺陷。JS 的 `\s` 类把 CR/VT/FF/NBSP 当作词分隔符，攻击者可在 `&` 后植入第二命令逃过白名单。
- **关注理由**：权限系统是 agent 安全的核心防线，该缺陷可直接扩大命令执行面。对应修复 PR #11865、#12096 已在推进。

### 🟢 4. Session 删除破坏活跃会话
- **#12091** [`sessions/delete` on a live session unlinks its transcript — permanently breaking the session](https://github.com/QwenLM/qwen-code/issues/12091) — P1。删除活跃会话后，仍附加的 writer 会重建无头文件（degraded_history、禁用 auto-continue），数据一致性被破坏。
- **关注理由**：daemon 与 session 生命周期的竞态问题，直接影响数据可靠性。

### 🔵 5. ACP/Zed 集成体验
- **#11361** [AskUserQuestion section in ACP/Zed shows "Raw Input" instead of multiple choice UI](https://github.com/QwenLM/qwen-code/issues/11361) — Zed IDE 中 AskUserQuestion 降级为裸文本，用户无法获得选项界面。
- **#12113** [ACP reports end_turn after repeated finish_reason=length responses](https://github.com/QwenLM/qwen-code/issues/12113) — 输出被 token 上限截断却对外报告 end_turn，误导调用方。

### 🟣 6. 其他值得关注
- **#12061** [callback identity changes can replace an active tool scheduler](https://github.com/QwenLM/qwen-code/issues/12061) — 工具调度器被替换导致活动批次失控。
- **#8138** [worktree settings.json writes to project root .qwen instead of worktree's](https://github.com/QwenLM/qwen-code/issues/8138) — 配置隔离缺陷，welcome-pr 标记，适合新贡献者。
- **#9278** [`/review` publish-time convergence advisory 设计追踪](https://github.com/QwenLM/qwen-code/issues/9278) — @wenshao 推动的评审发布建议设计与实测记录，10 条评论，涉及"失控回路"（评审→修复→diff 变大→更多 finding）治理。

---

## 四、重要 PR 进展（Top 10）

### 🔐 安全修复
1. **#11865** [fix(core): treat only space/tab/newline as word separators in isAsyncOperator](https://github.com/QwenLM/qwen-code/pull/11865) — 修复 #11851 的控制字符绕过问题，将词分隔符收紧为真正的空白字符。
2. **#12096** [fix(core): handle simple Bash comments in permission rules](https://github.com/QwenLM/qwen-code/pull/12096) — 修复 #11815：Bash 注释中的运算符不再被误判为命令段，避免错误权限决策。

### 🧱 沙箱与隔离基础设施
3. **#12067** [feat(core): Add the bwrap execution foundation](https://github.com/QwenLM/qwen-code/pull/12067) — 为工具级 Linux 沙箱打地基：结构化 launch、bwrap 适配器（含可信完成证据）、进程监督与受限二进制文件 worker。
4. **#11711** [feat(core): add container execution for subagents](https://github.com/QwenLM/qwen-code/pull/11711) — 支持 `QWEN_AGENT_EXECUTION_BACKEND=docker|podman` 强制子代理容器化执行，项目配置不可覆盖此用户级管控。

### 🚀 功能增强
5. **#12050** [feat(web-shell): expose slash-command exports as artifacts](https://github.com/QwenLM/qwen-code/pull/12050) — Web Shell 中的 `/export md|html|json|jsonl` 输出以工件形式呈现，支持预览/下载，并在历史回放中存活。
6. **#12131** [fix(core): keep MCP App html in recorded transcripts so replay can render](https://github.com/QwenLM/qwen-code/pull/12131) — 会话回放时 MCP App 的沙箱 iframe 不再丢失。

### 🧠 模型推理与上下文
7. **#11988** [fix(core): strip reasoning blocks closed with native think tags in compaction](https://github.com/QwenLM/qwen-code/pull/11988) — 压缩时识别模型实际发出的原生 think 标签（`think`/`thinking`），避免推理摘要被误丢弃。
8. **#11684** [fix(core): keep reasoning and function_call items adjacent through Responses cleanup](https://github.com/QwenLM/qwen-code/pull/11684) — 清理阶段将推理项与并行工具调用组视为整体，修复孤儿函数调用。

### ⚙️ 工程与稳定性
9. **#12115** [fix(installer): preflight glibc for standalone Linux archives](https://github.com/QwenLM/qwen-code/pull/12115) — 安装前检测 glibc，避免 CentOS 7 等旧发行版装完即崩（Node 22 运行时无法启动）。
10. **#12007** [fix(core): stop session recovery from flagging unanswered notifications](https://github.com/QwenLM/qwen-code/pull/12007) — 停止将"已记录但未答复的后台通知"误判为中断回合，避免 daemon 在自动回合运行时错误提示"继续执行"。

---

## 五、功能需求趋势

综合 30 条高活跃 Issue 的标签与主题，社区关注度排序如下：

| 方向 | 代表 Issue | 热度 | 趋势判断 |
|---|---|---|---|
| **上下文性能与 token 经济性** | #12028 系列（#12029/#12030/#12033/#12048）、#10887 | 🔥🔥🔥🔥🔥 | 最强动向。社区在系统性审计 token 预算/计量路径，方向是"大窗口下的精确成本控制" |
| **UI/TUI 稳定性（React 渲染层）** | #11732、#11783、#11817、#11858 | 🔥🔥🔥🔥 | 高优先级崩溃问题，指向 ink/React 19 迁移后的循环守卫与后台任务交互 |
| **安全与权限边界** | #11851、#12082（Windows 路径泄漏）、#12093 | 🔥🔥🔥 | Bash 规则解析、错误消息净化、CSP 配置，全链路收紧 |
| **IDE 集成与 ACP** | #11361、#12113、#12059、#12072 | 🔥🔥🔥 | Zed/VSCode 远程 Webview、ACP 协议正确性、OpenRouter 头字段归属 |
| **Session/存储可靠性** | #12091、#8138 | 🔥🔥 | daemon 生命周期竞态、worktree 配置隔离 |
| **Hook 系统回归** | #8622（已关闭）、#11902 | 🔥🔥 | 0.21.6 的 hook 派发回归已修，但重载时的状态保持仍待完善 |

---

## 六、开发者关注点

### 高频痛点
1. **"装得动、跑得稳"仍是底线** — glibc 预检（#12115）、React #185（#11732/#11783）、Windows CI 确定性失败（#11817）表明基础设施稳定性是当前第一诉求，尤其对旧发行版与 Windows 用户。
2. **Token 成本失控** — 死循环烧 5-14M tokens（#10887）、扩展上下文无差别注入（#12030）、百分比预算失效（#12029），开发者要求的是"可预测的上下文成本"而非"事后昂贵的账单"。
3. **安全边界必须是硬边界** — 控制字符绕过权限白名单（#11851）引发的讨论显示，开发者期望权限系统对"看似边界、实则可穿透"的字符类问题零容忍。

### 高频需求
4. **IDE 深度体验** — AskUserQuestion 在 Zed 降级为文本（#11361）、VSCode 远程 webview 的失败模式覆盖（#12059）、ACP 协议语义正确性（#12113），表明 ACP 已从"能通"走向"体验一致"。
5. **可靠的回放与审计** — MCP App HTML 保留（#12131）、session 删除破坏活跃会话（#12091）聚焦于：会话记录应当既可回放又不会被误删破坏。
6. **自动化治理的闭环** — `/review` 发布收敛设计（#9278）、autofix 延迟修复追踪（#11408/#11598）、CI 免打扰重试（#11989/#12128），显示项目正用 AI 辅助的自动化评审+修复流程自我进化，其自身的稳定性和治理机制也备受关注。

---

*报告生成：2026-09-18 · 数据窗口：过去 24 小时 · 覆盖 50 Issue / 50 PR*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报

**日期**：2026-09-18
**数据来源**：github.com/Hmbown/DeepSeek-TUI


## 1. 今日速览

过去 24 小时社区活跃度较高，共 47 条 Issue 更新、3 条 PR 合入。核心焦点集中在 **子代理 Token 预算失控与 session 恢复失败** 两类高优先级可靠性缺陷上，其中 session 恢复问题（#6207、#6225）获得了最多社区讨论（19 条、8 条评论）。架构层面，`crates/tui` 超大型 Crate 分解（EPIC-005）仍是执行中枢，但受困于 `crate::config` 的模块耦合（#6034）；同时 Fleet/Agent 概念重复问题（#6036、#6038）的命名与数据模型重构方向正在形成共识。


## 2. 版本发布

过去 24 小时无新版本发布。


## 3. 社区热点 Issues

**① #6207 [CLOSED] session picker 拒绝恢复属于其他 Runtime host 的已保存会话** — ⭐ 最热议题
社区反应最激烈（19 条评论）。TUI 打开已保存会话时报错 "This session belongs to another Runtime host"，即便 Runtime store 目录存在且归属校验通过。这与 #6225 是同源问题，核心缺陷在于 Runtime host 身份校验逻辑在单机多进程场景下产生误判。
🔗 https://github.com/Hmbown/Codewhale/issues/6207

**② #6225 [CLOSED] 无法从新进程内恢复会话**
社区复现路径明确：启动会话 → /quit → 新进程 → /resume → 失败。与 #6207 形成相互印证的 bug 对，说明该缺陷影响了最基本的「退出后恢复」工作流，属于生产阻断级问题。
🔗 https://github.com/Hmbown/Codewhale/issues/6225

**③ #6282 [CLOSED] 子 agent 工具结果必须在捕获时截断（1 MiB 字节 / 10k tokens）**
典型事故驱动：一个 worker 读取 542KB 源文件烧掉 **638k input tokens** 后死亡，工作区零改动——纯读取饥饿。步数上限无法约束单步成本，75% pacing 通知在 step 之间评估，无法防御单次超大工具结果。该问题已由 PR #6294 修复。
🔗 https://github.com/Hmbown/Codewhale/issues/6282

**④ #6278 [CLOSED] 写入争用禁止 N 个 worker 在同一根目录下写不相交文件**
核心矛盾：`coord/ledger.rs:587` 拒绝任何活跃 claims 之间重叠 write-roots，即便 `exact_files` 完全不相交。这直接封杀了「N 个并行 worker 各写一个输出文件」的最自然 fan-out 模式，是对并行工作流的根本性限制。
🔗 https://github.com/Hmbown/Codewhale/issues/6278

**⑤ #6189 [CLOSED] 默认共享 token 预算（120k）杀死真实运行**
一次 workflow 运行的 4 个 recon 子 agent 全部因预算耗尽（124254/120000）中途暴毙，且无模型回传报告。默认预算对多子 agent 场景严重不足，且子任务死亡时缺少优雅的 hand-back 机制。
🔗 https://github.com/Hmbown/Codewhale/issues/6189

**⑥ #6277 [CLOSED] worker 保留的报告回合被其自身后代消耗**
`agent` start 承诺「为 tools-disabled 汇报回合保留一份 allowance」，但实际 reserve 计算针对同一 scope pool，后代子 agent 会把这笔预留耗尽，导致预算死亡时无任何回报信息。
🔗 https://github.com/Hmbown/Codewhale/issues/6277

**⑦ #6036 [OPEN] "Fleet" 与 "agent" 是同一概念的重复存储**
Founder 直接质疑："我很困惑我们同时有 fleets 和 agents，我认为这是核心问题。" 证据充分：实测机器上 `scout` 在两个 store 中以相同值存在。fleet 成员混同了角色、模型 pin 和 route bookmarks，数据模型层面存在真实的语义混乱。
🔗 https://github.com/Hmbown/Codewhale/issues/6036

**⑧ #6169 [CLOSED] TUI 缺少作业控制握手**
Codewhale 仅启动时检查一次前台所有权（`event_loop.rs:628`），无 `SIGTSTP`/`SIGTTIN`/`SIGCONT` handler。一旦进程组进入后台，SIGTTIN 挂起整个 TUI，终端却残留 mouse/paste/raw 模式，in-flight turn 只存在于 checkpoint 中。这是纯 terminal 用户会高频踩到的体验缺陷。
🔗 https://github.com/Hmbown/Codewhale/issues/6169

**⑨ #5586 [OPEN] 分解巨型文件（lib.rs 18.7k / config.rs 12.3k / client.rs 11.1k / runtime_threads.rs 9.3k）**
与 EPIC-005（#5316）和 #6034 同属 Crate 分解家族。核心障碍是 `crate::config` 构成一个 727,748 行、128 个模块的单一组件，任何单体文件的拆分都会被 config 依赖牵制。这是整个重构 backlog 的咽喉。
🔗 https://github.com/Hmbown/Codewhale/issues/5586

**⑩ #6309 [OPEN] 用户请求恢复 "YOLO 模式"**
来自社区用户 weifeng89 的直接呼声："我喜欢用 codewhale 做 IT support，deepseek V4 flash 在 terminalbench 上分数很高，但当前 operate 模式每次都要点击批准，非常烦人。" 体现了用户对审批摩擦的真实不满，也间接关联 #6298 中的安全事件（verifier 子 agent 因命令语法限制被迫使用 computer-use 工具键击宿主 Terminal——审批设计存在安全-便利的两难）。
🔗 https://github.com/Hmbown/Codewhale/issues/6309


## 4. 重要 PR 进展

过去 24 小时合入 3 条 PR，均为问题驱动型修复/增强：

**① #6294 [CLOSED] feat(subagent): 在捕获时截断子工具结果**
修复 #6282。采用 codex-rs 的 placement 规则：在捕获时刻截断而非事后 accounting。这是对子 agent 读饥饿问题的根本性修复，将单工具结果的成本硬限制在 1 MiB 字节 / 10k tokens。
🔗 https://github.com/Hmbown/Codewhale/pull/6294

**② #6299 [CLOSED] feat: 添加 ModelScope 支持**
新增 ModelScope 作为内置 provider（OpenAI-compatible 端点 `https://api-inference.modelscope.cn/v1`），覆盖 Qwen、DeepSeek、Kimi、GLM、MiniMax 等开源模型。与 #6289（移除 provider setup templates）方向一致，将 provider 作为普通 OpenAI-compatible 集成，而非特例化模板。
🔗 https://github.com/Hmbown/Codewhale/pull/6299

**③ #6286 [CLOSED] fix(tui): 压缩后保留聊天角色**
修复压缩逻辑的核心缺陷：当压缩发生在 tool result 之后，生成的 summary 会插入 user 消息，在 tool exchange 后产生 `user → assistant(tool_calls) → tool → user` 序列，导致严格配对 chat templates 拒绝。该修复将生成的 summary 移到保留 prompt 之前的正确位置。
🔗 https://github.com/Hmbown/Codewhale/pull/6286


## 5. 功能需求趋势

从 47 条活跃 Issues 中可提炼出以下方向：

**🔹 子 agent 可靠性（最高热度）**
#6282、#6277、#6278、#6189 四条连续暴露了子 agent 体系的系统性缺陷：token 预算失控、写入争用过严、预留被后代吞食、死亡无回传。这不是孤立 bug，而是并行执行模型的边界条件尚未收敛——社区正在为「多 worker fan-out」这一核心模式寻找制度性保障。

**🔹 会话持久化与恢复**
#6207、#6225、#6185、#6144 构成一个完整的问题簇：恢复失败（host 校验误判）、恢复空白（tool-call repair 不持久化）、以及 session 真值归属不明确（`session_manager` vs `StateStore` 双重写入）。用户最核心的工作流——退出后继续——目前不可靠。

**🔹 Crate 分解与架构清理**
EPIC-005（#5316）、#5586、#6034、#6145、#6139、#4173、#4166、#6144 形成了清晰的架构债偿还路线。`crates/tui` 约 95.7 万行，`crate::config` 纠缠 128 个模块，`app-server` 无法独立运行 turn。这只是冰山一角——还有 ModelRegistry、ProviderKind 枚举（31 providers）、52 个 tool structs 的硬编码清理。

**🔹 Provider 模型简化与新接入**
#6289（移除 setup template 层）+ #6299（ModelScope 接入 PR）+ #6304（AICraft 文档）表明清晰趋势：将所有 OpenAI-compatible 服务视为普通 provider，同时积极扩展模型生态覆盖。

**🔹 安全模型重构（Fleet 授权体系）**
#6298 的证据极其有力：verifier 子 agent 因只读命令语法限制，转而使用继承的 computer-use 工具键击宿主 Terminal。这暴露了「按命令语法定义只读」的设计根本性缺陷，需要统一授权模型 + 分类工具族。Fleet/agent 数据模型的重构（#6036、#6038）与之紧密关联。


## 6. 开发者关注点

**高频痛点 Top 5：**

**① 默认资源限制杀死了正规使用场景**
Token 预算、token 截断、写作争用等多处默认设置都是为防御性设计，但实际效果是「模型烧掉整个预算后留下零改动的工作区」。开发者需要的是「优雅降级 + 报告」，而不是「静默死亡」。

**② 错误信息的可发现性不足**
#6272 明确指出：write-contention 拒绝时，错误消息中没有提及真正可行的恢复路径（`release`），需读工具描述源码才能找到。对于以 AI 编程为定位的产品而言，错误信息本身就应该指导模型走向正确修复。

**③ 审批摩擦 vs 安全的两难**
#6309 的用户呼吁和 #6298 的安全事件从两个方向对当前的权限体系施压：一边认为过度审批扼杀了生产力，另一边认为按语法定义只读的策略迫使模型寻找绕过路径（键盘宏）。统一授权模型是唯一出路。

**④ 极简工作流（退出-恢复）不可靠**
多个用户独立报告了最基本的 session resume 失败（#6207、#6225、#6185）。这不是边缘 case，是每次会话切换都可能踩到的日常缺陷。

**⑤ 大文件架构导致的演进瓶颈**
`crates/tui` 从 97.3 万行减至 95.7 万行，仅三个模块完成提取。#6034 明确指出「118/128 模块形成单一组件」意味着剩余分解无法并行推进——这是一个经典的模块边界失控案例，也说明为何功能修复会持续受到耦合限制。

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

# ComfyUI 社区动态日报

**日期：** 2026-09-18 | **数据来源：** [comfyanonymous/ComfyUI](https://github.com/comfyanonymous/ComfyUI)

---

## 1. 今日速览

今日无新版本发布，但社区活跃度依然很高。**新模型支持**是今天的主旋律：YuE2 音乐模型与 MoGe 3 几何估计模型双双获得 PR 支持，MiniMax H3 的稀疏注意力优化也在持续推进。此外，执行引擎层面出现了重要的架构性提案——Branch 节点与懒求值动态输入修复，可能对工作流编排产生深远影响。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 社区热点 Issues

### 🔥 高热度

| # | Issue | 关键信息 | 关注理由 |
|---|-------|---------|---------|
| 1 | [#4170 Cross-Vendor Multi-GPU Support via Vulkan Backend](https://github.com/Comfy-Org/ComfyUI/issues/4170) | 👍46 · 💬23 | **长期社区诉求**。Vulkan 后端可实现跨 NVIDIA-AMD 多 GPU 推理，对 Flux 等大模型用户意义极大，是关注度最高的 Issue 之一 |
| 2 | [#16151 Everything is broken af!](https://github.com/Comfy-Org/ComfyUI/issues/16151) | 👍2 · 💬5 | 用户报告近 3 周版本稳定性严重下降，已禁用自定义节点后问题仍存，引发社区共鸣 |
| 3 | [#15189 Subgraph 中部分节点 Widget 无法提升](https://github.com/Comfy-Org/ComfyUI/issues/15189) | 👍3 · 💬7 | 子图（subgraph）功能的关键可用性缺陷，直接影响工作流封装与复用体验 |

### 🐛 AMD / 硬件兼容

| # | Issue | 关键信息 | 关注理由 |
|---|-------|---------|---------|
| 4 | [#15347 AMD：工作流完成后 1 核 CPU 100% 不释放](https://github.com/Comfy-Org/ComfyUI/issues/15347) | 💬10 | AMD 平台 Wan 2.2 I2V 工作流执行后资源不释放，可能影响长时间任务调度 |
| 5 | [#16337 DynamicVRAM 在 AMD RX 9070 XT 上输出损坏/噪声](https://github.com/Comfy-Org/ComfyUI/issues/16337) | 💬4 | AMD 最新 RDNA4 架构显卡 (gfx1201) 在 Aimdo 0.5.3 DynamicVRAM 模式下输出异常，附有详细截图 |
| 6 | [#16365 YuE2 text encoder 在 GTX 1650 上回退至 CPU 导致报错](https://github.com/Comfy-Org/ComfyUI/issues/16365) | 👍2 | 低显存设备运行新模型遭遇设备分配失败，暴露了显存自动调度逻辑的边界情况 |

### ⚙️ 新模型与功能

| # | Issue | 关键信息 | 关注理由 |
|---|-------|---------|---------|
| 7 | [#11709 启动自定义浏览器（非系统默认）](https://github.com/Comfy-Org/ComfyUI/issues/11709) | 💬4 | 功能需求已迭代至 CLI 参数方案，对应 PR #15909 已通过 v0.36.0 测试，进入 review 阶段 |
| 8 | [#16382 MiniMax H3：启用 Larryvrh LoRA + Sparse Attention 产生伪影](https://github.com/Comfy-Org/ComfyUI/issues/16382) | 💬0（新建） | 新建 Issue，指向稀疏注意力与 LoRA 的交互问题，与 PR #16378 的 chunk 优化直接相关 |
| 9 | [#15693 LTX 2.5 22b dev Q5_1 量化输出颗粒感严重](https://github.com/Comfy-Org/ComfyUI/issues/15693) | 💬1 | 量化模型质量回归，已排除自定义节点因素，需核心层排查 |
| 10 | [#16379 `--disable-dynamic-vram` 阻止 Windows 自动 fast-disk 检测](https://github.com/Comfy-Org/ComfyUI/issues/16379) | 💬1（已关闭） | PR #16333 引入的 fast-disk 自动检测与 `--disable-dynamic-vram` 存在逻辑冲突，已被识别并关闭 |

---

## 4. 重要 PR 进展

### 🆕 新模型支持

| # | PR | 内容 | 状态 |
|---|----|------|------|
| 1 | [#16250 Support YuE2 music model](https://github.com/Comfy-Org/ComfyUI/pull/16250) | 官方核心作者 comfyanonymous 提交，支持 YuE2 音乐生成模型，含 checkpoint 和测试工作流 | **Closed（已合入）** |
| 2 | [#16381 feat: Support MoGe 3 (CORE-443)](https://github.com/Comfy-Org/ComfyUI/pull/16381) | 支持 MoGe 3 Vit-L / Vit-G 几何估计模型，模型已托管于 Comfy-Org HuggingFace | **Closed（已合入）** |

### 🏗️ 执行引擎与架构

| # | PR | 内容 | 状态 |
|---|----|------|------|
| 3 | [#16383 Add a Branch node and support lazy autogrow](https://github.com/Comfy-Org/ComfyUI/pull/16383) | 新增 Branch 节点支持按名称选择输入路径 + 惰性求值动态输入，涉及执行引擎核心改动 | **Open** |
| 4 | [#16377 fix: preserve dynamic input validation and lazy execution](https://github.com/Comfy-Org/ComfyUI/pull/16377) | 修复动态输入验证回调和懒执行行为异常，确保验证器可见用户实际输入值 | **Open** |
| 5 | [#16354 perf(execution): read loop boundary off schema](https://github.com/Comfy-Org/ComfyUI/pull/16354) | 从节点 schema 直接读取 loop boundary，避免 `GET_SCHEMA()` 重复调用开销 | **Open** |

### 🔧 性能与稳定性

| # | PR | 内容 | 状态 |
|---|----|------|------|
| 6 | [#16333 Aimdo 0.5.5 + Auto-detect `--fast-disk`](https://github.com/Comfy-Org/ComfyUI/pull/16333) | Aimdo 0.5.5 含 Windows fast-disk C 代码自动检测 + 内存编译器分配器虚拟地址配额优化 | **Closed（已合入）** |
| 7 | [#16378 Increase MiniMax H3 sparse producer chunk size](https://github.com/Comfy-Org/ComfyUI/pull/16378) | 将 MiniMax H3 稀疏注意力 QKV producer chunk 从 4K→24K tokens，减少重复投影开销 | **Open** |
| 8 | [#16358 fix(assets): prevent SQLite concurrent writer failures](https://github.com/Comfy-Org/ComfyUI/pull/16358) | 修复资产注册时 SQLite deferred read→write 升级导致的 SQLITE_BUSY 间歇性丢失 | **Open** |
| 9 | [#16359 fix(assets): harden scanning, temp cleanup, event logging](https://github.com/Comfy-Org/ComfyUI/pull/16359) | 加固资产扫描失败路径，仅吸收重复路径竞态，其他 IntegrityError 不再静默吞掉 | **Open** |

### 🎨 前端与交互

| # | PR | 内容 | 状态 |
|---|----|------|------|
| 10 | [#15909 Feat: launch auto-launch in a custom browser](https://github.com/Comfy-Org/ComfyUI/pull/15909) | 新增 `--browser-path` CLI 参数，允许用户指定自定义浏览器/配置文件启动，已通过 v0.36.0 验证 | **Open（review 中）** |

---

## 5. 功能需求趋势

从今日 Issue 与 PR 活动中提炼出以下社区关注方向：

| 趋势 | 代表条目 | 说明 |
|------|---------|------|
| **多 GPU / 异构硬件** | #4170, #15347, #16337 | Vulkan 跨厂商多 GPU 是长期诉求；AMD RDNA4 兼容性问题集中涌现，DynamicVRAM 在新架构上仍不稳定 |
| **新模型快速接入** | PR #16250 (YuE2), PR #16381 (MoGe 3), #16382 (MiniMax H3) | 音乐生成、3D 几何估计、视频生成模型密集落地，社区对新模型的适配需求持续高涨 |
| **执行引擎可扩展性** | PR #16383 (Branch), PR #16377 (懒执行修复), PR #16260 (DynamicGroup) | 动态输入、条件分支、懒求值——工作流编排向更灵活的图结构演进 |
| **性能与资源调度** | PR #16333 (Aimdo 0.5.5), PR #16378 (chunk 优化), #16365 (显存回退) | 动态 VRAM、fast-disk 自动检测、稀疏注意力 chunk 调优，低显存设备仍是优化重点 |
| **前端 / UX 体验** | #15189 (子图 widget), PR #15909 (自定义浏览器), #15693 (量化质量) | 子图封装可用性、编辑器行为、量化模型输出质量——用户侧体验瓶颈正在被逐一识别 |

---

## 6. 开发者关注点

- **AMD 生态仍是痛点**：RX 9070 XT DynamicVRAM 输出损坏、CPU 资源不释放等问题近期高频出现，RDNA4 适配亟需加强
- **低显存设备的模型可运行性**：GTX 1650 等设备在运行 YuE2 等新模型时频繁遭遇设备回退与内存分配失败，自动调度逻辑需更鲁棒的边界处理
- **MiniMax H3 稀疏注意力成熟度不足**：LoRA 兼容性 (#16382)、chunk size 效率 (PR #16378)、采样器报错 (#15427) 等问题并发，该功能尚处于快速迭代期
- **SQLite 并发写入**：资产系统底层出现间歇性写入竞态 (PR #16358, #16359)，表明随着用户规模增长，本地数据库可靠性需加固
- **执行引擎进入深度重构期**：Branch 节点、DynamicGroup、懒执行修复等多个涉及核心执行逻辑的 PR 并行推进，开发者需关注合并顺序与兼容性

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama 社区动态日报

**日期：** 2026-09-18
**数据源：** github.com/ollama/ollama

---

## 今日速览

过去 24 小时 Ollama 社区无新版本发布，但议题与 PR 活跃度极高。开发者讨论焦点集中在**许可证合规**（Issue #3185，275 👍）、**MLX 后端的稳定性**（多起内存管理与进度卡顿问题）、以及 **CLI 内置 agent 被移除后的功能恢复诉求**。同时，安全加固类 PR（重定向处理收紧、WebP 解码器漏洞修复）也于当日完成合并。

---

## 版本发布

过去 24 小时无新 Release。

---

## 社区热点 Issues（Top 10）

**1. [#3185](https://github.com/ollama/ollama/issues/3185) — 发布产物未分发第三方依赖的许可证声明 [BUG]**
- **热度：** 275 👍 · 59 评论 · Open
- **要点：** 作者（jart，llamafile 作者）指出 Ollama 静态链接 llama.cpp 等 MIT 许可项目，但 Linux/Windows 安装目录中无法找到对应版权声明（如 "Georgi Gerganov" 字样），涉嫌违反 MIT 许可证的二进制分发条款。
- **重要性：** 这是社区持续关注两年多的合规问题，高赞数表明开发者群体对开源合规的高度敏感。若被正式追责，可能影响 Ollama 的发行方式。

**2. [#18490](https://github.com/ollama/ollama/issues/18490) — 请求将内置 CLI agent 恢复为可选功能 [FEATURE REQUEST]**
- **热度：** 4 评论 · Open（创建于前日，持续活跃）
- **要点：** PR #18393 从默认入口移除了内置 CLI agent。作者是受困于企业隔离环境的开发者，认为完全删除而非降级为 opt-in 选项，破坏了日常工作流。
- **重要性：** 反映了"默认云端模型"争议后社区治理的困境——团队砍功能以平息众怒，但另一批用户同样受损。后续 PR #18495 的合并可能部分回应了这一诉求。

**3. [#18507](https://github.com/ollama/ollama/issues/18507) — Windows 11 托盘应用无法启动服务器 [BUG]**
- **热度：** 2 评论 · Open
- **要点：** Ollama 0.34.1 在 Windows 11 26200（近期安装 KB5129195 等安全更新后）托盘图标显示但服务器从未启动，`ollama serve` 手动运行则正常。环境为 RTX 4070 + 3060，CUDA v13。
- **重要性：** 典型的安全更新引发的兼容性回归，直接影响 Windows 桌面用户体验，且排查需要跨层（托盘→服务→GPU 驱动）协作。

**4. [#18505](https://github.com/ollama/ollama/issues/18505) — MLX nvfp4 推理在单槽持续负载下卡死 [BUG]**
- **热度：** 2 评论 · Open（当日创建）
- **要点：** 在 `OLLAMA_NUM_PARALLEL=1` 条件下，MLX nvfp4 模型的请求会在 prefill 阶段卡住（processed=total-1），零 token 输出持续数分钟，只有终止 runner 子进程才能恢复。
- **重要性：** 这是 MLX 后端引入 4-bit 浮点量化后的核心稳定性缺陷，对生产级部署影响严重。

**5. [#18487](https://github.com/ollama/ollama/issues/18487) — 请求支持共享 GPU 的外部资源锁 [FEATURE REQUEST]**
- **热度：** 2 评论 · Open
- **要点：** 用户在 Unraid/Docker 环境中用同一块 RTX 3050 跑 Ollama、Subgen/Whisper、Frigate。希望 Ollama 支持类似"外部锁"的协调机制，让各应用交替使用 GPU 而无需停机。
- **重要性：** 反映了边缘计算/家庭服务器场景的共存痛点，也暗示了容器化 GPU 调度的普遍需求。

**6. [#18509](https://github.com/ollama/ollama/issues/18509) — Ollama 拒绝 tool role（llama.cpp 中一直有效）[BUG]**
- **热度：** 1 评论 · Open（当日创建）
- **要点：** 用户在 llama.cpp 中能正常使用的 `tool` 角色消息在 Ollama 中被拒绝，只能强行把工具响应伪装成 user 或 assistant 角色。
- **重要性：** 与 #6322（2024 年提出的同类问题，现已关闭）一脉相承。多轮工具调用的语义完整性对 agent 工作流至关重要，Ollama 的 API 兼容层在此存在持续的功能缺口。

**7. [#18513](https://github.com/ollama/ollama/issues/18513) — Ollama Cloud 阻止匿名邮箱别名登录 [BUG]**
- **热度：** 1 评论 · Open（当日创建）
- **要点：** 使用 anonaddy.me 别名邮箱的账户自 2026 年 7 月起被拒："Access blocked, please contact support."，但本地已授权的模型仍可正常使用。
- **重要性：** 云服务的反滥用策略误伤正当用户，与社区对"云端强推"的既有不满情绪叠加。

**8. [#18494](https://github.com/ollama/ollama/issues/18494) — Vulkan + AMD RX 6750 XT 多模型加载时 qwen3-vl 崩溃 [BUG]**
- **热度：** 0 评论 · Open
- **要点：** 单模型运行正常，同时加载两个 VL 模型后 qwen3-vl:8b-instruct 触发 0xc0000005 访问冲突。
- **重要性：** Vulkan 后端在多模型并存场景下的内存管理缺陷，对 AMD 用户和视觉模型使用者的影响面不可忽视。

**9. [#18484](https://github.com/ollama/ollama/issues/18484) — deepseek-v4.1-flash:cloud 默认推理级别不在支持列表中 [BUG]**
- **热度：** 2 评论 · 已关闭
- **要点：** Codex 模型目录元数据矛盾：`default_reasoning_level` 是 `"high"`，但支持列表只有 `["none", "medium"]`。
- **重要性：** 虽然已被关闭，但暴露了云模型目录元数据质量控制和一致性校验的薄弱环节。

**10. [#18506](https://github.com/ollama/ollama/issues/18506) — glm-5.3-flash 通过 Ollama Cloud 间歇性输出畸形工具调用 [BUG/CLOUD]**
- **热度：** 0 评论 · Open（当日创建）
- **要点：** `calls` 字段时而是 JSON 字符串而非原生数组，且内部 JSON 存在结构性损坏，疑似 token 丢弃或错位。
- **重要性：** 云服务上的工具调用可靠性问题，直接影响依赖 glm 系列做 agent 编排的开发者。

---

## 重要 PR 进展（Top 10）

**1. [#18512](https://github.com/ollama/ollama/pull/18512) — 收紧 registry 请求的重定向处理 [CLOSED]**
- **作者：** pdevine · 当日合并
- **内容：** 重定向前校验目标 scheme 与解析地址，每次重定向重新 DNS 查询，禁止将 HTTPS 会话降级为明文 HTTP。`--insecure` 选项仍可放宽私有 registry 地址检查。
- **意义：** 针对模型供应链攻击的重要安全加固。

**2. [#18479](https://github.com/ollama/ollama/pull/18479) — thinking 模型结构化输出改为单次生成 [OPEN]**
- **作者：** jessegross
- **内容：** 当前 thinking 模型生成结构化输出需两次生成（先无约束生成再 grammar 重渲染），该 PR 将其合并为单次通过，消除第二次 prefill 成本和边界 token 丢弃。
- **意义：** 大幅降低 thinking 模型 + JSON Schema 场景的推理延迟与资源消耗。

**3. [#17714](https://github.com/ollama/ollama/pull/17714) — nemotron_h 增加 MLX 视觉支持 [OPEN]**
- **作者：** dhiltgen
- **内容：** 在 MLX 媒体管道上实现 RADIO 视觉编码器与投影器，包括动态分辨率预处理、确定性占位符扩展、分块特征散射和 MTP 偏移。
- **意义：** 解锁 Nemotron 系列在 Apple Silicon 上的多模态能力。

**4. [#18495](https://github.com/ollama/ollama/pull/18495) — 增加 CLI 首次引导流程，与桌面应用共享 [CLOSED]**
- **作者：** hoyyeva · 当日合并
- **内容：** 仅在用户运行裸 `ollama` 命令时显示引导，提供欢迎语、浏览器注册/登录和本地使用选项；完成状态在 CLI 与桌面应用间（macOS/Windows）共享。
- **意义：** 这是对 #18490 的直接回应——用引导替代强制 agent，兼顾云服务推广与开发者体验。

**5. [#18510](https://github.com/ollama/ollama/pull/18510) — 推测解码期间释放 MLX KV 缓冲区 [CLOSED]**
- **作者：** jessegross · 当日合并
- **内容：** 修复了解码循环每 256 token 释放缓冲区的逻辑：推测解码每轮产生多个 token，可能跳过精确的 256 倍数检查点，导致旧的 KV 缓冲区无法及时释放。
- **意义：** 修复 MLX 推测解码路径下的显存泄漏问题。

**6. [#18243](https://github.com/ollama/ollama/pull/18243) — 默认拒绝拉取超大模型 [OPEN]**
- **作者：** dhiltgen
- **内容：** 当用户尝试拉取超出实际运行能力的模型时默认阻止，可用 `--force` 绕过。当前仅限 MLX，未来可扩展到 GGUF。
- **意义：** 面向普通用户的体验优化，防止"拉下来跑不动"的挫败场景。

**7. [#18508](https://github.com/ollama/ollama/pull/18508) — 支持通过 OLLAMA_METRICS 环境变量在 /metrics 暴露 Prometheus 指标 [OPEN]**
- **作者：** ssubbotin
- **内容：** 作者主动承认 #16998 先行，并明确将本 PR 定位为"替代方案"而非"替代者"。采用零依赖的设计。
- **意义：** 社区对可观测性的需求强烈。两个独立实现的碰撞也体现了社区的活跃度。

**8. [#18504](https://github.com/ollama/ollama/pull/18504) — 修复 /api/generate 在 think=false 时仍应解析 reasoning [OPEN]**
- **作者：** AloysJehwin
- **内容：** 针对 thinking 模型，`think: false` 时原始 `<think>…</think>` 块会落入 `response` 而 `thinking` 为 null。实际上不传 `think` 反而行为正确。
- **意义：** API 语义一致性的重要修复，"显式关闭比不设置更糟"是常见的 API 设计陷阱。

**9. [#16085](https://github.com/ollama/ollama/pull/16085) — MLX 加载时预热编译路径 [CLOSED]**
- **作者：** dhiltgen · 当日关闭
- **内容：** 模型加载后运行一次 BOS/EOS 预热推理以填充 MLX 编译缓存，使首次真实请求的 TTFT 与后续请求一致。
- **意义：** 消除冷启动的响应时间尖峰，但已关闭，后续处理方向值得关注。

**10. [#18503](https://github.com/ollama/ollama/pull/18503) — 修复 Gemma4 丢弃与 schema 关键字同名的工具参数 [OPEN]**
- **作者：** AloysJehwin
- **内容：** `writeSchemaProperties` 将参数名与 schema 标准键（如 `type`、`description`）混淆，导致同名参数无法传递给模型。
- **意义：** 工具调用正确性的细节修复，影响真实场景中参数命名的自由度。

---

## 功能需求趋势

**1. 工具调用与 Agent 生态（最活跃）**
- tool role 支持（#18509、#6322）、gemma4 参数渲染（#18503）、云服务工具调用可靠性（#18506）、CLI agent 恢复（#18490）。社区在积极构建基于 Ollama 的 agent 工作流，但对角色语义严格性和工具调用解析的稳定性存在持续不满。

**2. MLX 后端的深度优化**
- 大量 PR 集中在 MLX：预热编译（#16085）、缓冲区释放（#18510）、负载进度与卡顿检测（#17834）、懒初始化防崩溃（#16158）、内存预算（#18481）。Apple Silicon 用户群体正在倒逼 MLX 从"能用"走向"生产可用"。

**3. GPU 资源管理与共存**
- 外部资源锁（#18487）、多模型 Vulkan 崩溃（#18494）、超大模型拉取拦截（#18243）。用户不再只是单模型单 GPU 场景，多应用/多模型混部成为常态。

**4. 可观测性与服务化部署**
- Prometheus 指标（#18508）、manifest 摘要暴露（#18394）、显存报告修复（#17951）。Ollama 从玩具走向基础设施的必然需求。

**5. 安全与合规**
- 许可证分发（#3185）、registry 重定向加固（#18512）、WebP 解码器漏洞修复（#18356）。供应链安全的关注度明显提升。

**6. 新模型架构支持**
- spark2_5（#18195）、nemotron_h 视觉（#17714）。社区对新架构的接入速度要求在提升。

---

## 开发者关注点

**高频痛点：**
1. **API 一致性** —— 显式 `think: false` 比省略参数行为更差（#18504）；tool role 在 llama.cpp 可用而 Ollama 不可用（#18509）。开发者期望 API 遵循"最小惊讶原则"。
2. **Metadata 可信度** —— 云模型目录的推理级别自相矛盾（#18484）；当模型名不足以绑定推理 artifact 时缺少摘要标识（#18394）。API 返回值的可追溯性和一致性是隐患。
3. **平台无差别体验** —— Windows 安全更新后启动失败（#18507）、Vulkan 在 ARM64 缺失（#18502）、Windows 多模型加载崩溃（#18494）。Windows 和非 NVIDIA 平台的体验依然薄弱。
4. **性能可预测性** —— MLX 请求卡顿（#18505）、首次请求延迟（#16085）。开发者需要的是稳定、可预测的延迟曲线，而非平均性能。
5. **许可合规与治理透明度** —— #3185 持续 30 个月未解决，275 个 👍 是社区对团队治理回应迟缓的无声抗议。

---

> *本日报由 AI 自动生成，覆盖 2026-09-18 当日 24 小时内的社区动态。数据范围：18 条 Issues、28 条 PRs。*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

# llama.cpp 社区动态日报

**日期：2026-09-18** | 数据来源：github.com/ggerganov/llama.cpp

---

## 一、今日速览

过去 24 小时 llama.cpp 发布了 10 个版本（b11017 → b11028），节奏极快，主线围绕 **MoE 模型性能优化**（Vulkan coopmat、SYCL B70 显存、DeepSeek V4 解析）与 **RPC/CI 基础设施修缮**展开。社区讨论最热烈的是 **XDNA 后端**（AMD NPU，33 个 👍）与 **Vulkan 在 Linux 7.x/RADV 上的 DeviceLost 崩溃**（23 评论），显示新硬件适配与 Vulkan 稳定性已成为核心矛盾。

---

## 二、版本发布（b11017 → b11028，共 10 个）

| 版本 | 内容 | 链接 |
|---|---|---|
| b11028 | CI：补充 evict-old-files | [#29041](https://github.com/ggml-org/llama.cpp/pull/29041) |
| b11027 | RPC：跳过 ACCEL 设备 | [#29020](https://github.com/ggml-org/llama.cpp/pull/29020) |
| b11026 | 模型：设置 TENSOR_SKIP 时跳过 gate_up_exps（qwen35moe MTP 需要） | [#29014](https://github.com/ggml-org/llama.cpp/pull/29014) |
| b11025 | 模型：扩展 Nemotron MTP 支持 | [#29018](https://github.com/ggml-org/llama.cpp/pull/29018) |
| b11024 | OpenVINO：升级至 2026.4，修复 clangd/MSVC 警告 | [#29009](https://github.com/ggml-org/llama.cpp/pull/29009) |
| b11022 | Vulkan：将 buffer 与调试代码拆分为独立文件，新增共享头文件 | [#28732](https://github.com/ggml-org/llama.cpp/pull/28732) |
| b11020 | Chat：为 DeepSeek V3.2/V4 解析器添加消息定界符（HuggingFace 联合贡献） | [#29008](https://github.com/ggml-org/llama.cpp/pull/29008) |
| b11019 | GGUF：数据段对齐改为相对于 GGUF 起始位置而非文件起始 | [#28993](https://github.com/ggml-org/llama.cpp/pull/28993) |
| b11018 | SYCL：修复 B70 在 >19.3GB 时的内存分配错误 | [#28953](https://github.com/ggml-org/llama.cpp/pull/28953) |
| b11017 | Vulkan：mul_mm coopmat1 路径跳过无需的 MoE 计算 | [#25483](https://github.com/ggml-org/llama.cpp/pull/25483) |

**要点**：本日版本聚焦"少算、少读、少崩"——AMD（SYCL/Vulkan）份额显著，MoE/MTP 大模型（Qwen/Nemotron/DeepSeek）是主流优化对象。

---

## 三、社区热点 Issues（Top 10）

1. **#21725 [enhancement] XDNA 后端（AMD NPU）**
   - 28 评论 · 33 👍，社区呼声最高的功能请求。AMD XDNA NPU 的支持至今未落地，用户期待在 Ryzen AI 处理器上跑 llama.cpp。
   - [查看](https://github.com/ggml-org/llama.cpp/issues/21725)

2. **#25664 [bug] Vulkan DeviceLostError（Linux 7.x / RADV STRIX HALO）**
   - 23 评论 · 5 👍。Strix Halo 128GB 平台运行 DeepSeek-V4 / Qwen 时 eval 崩溃，涉及新硬件 + 新内核，排查困难，是 Vulkan 稳定性的标志性难题。
   - [查看](https://github.com/ggml-org/llama.cpp/issues/25664)

3. **#28860 [bug] SYCL 开启 ngram-mod 时需 2GB+ scratchpad**
   - 13 评论。Intel Arc A770 上 scratchpad 分配异常膨胀，暴露 SYCL 后端在采样扩展功能上的资源管理缺陷。
   - [查看](https://github.com/ggml-org/llama.cpp/issues/28860)

4. **#9289 [documentation] libllama API changelog**
   - 13 评论 · 9 👍。由 ggerganov 本人维护的公共 API 变更记录，对第三方绑定开发者是必读项，持续活跃。
   - [查看](https://github.com/ggml-org/llama.cpp/issues/9289)

5. **#23769 [bug] Vulkan 在 Intel B70 上运行 MoE 模型崩溃（Qwen3.6-35B-A3B）**
   - 12 评论。Battlemage + MoE + Vulkan 组合持续出问题，与 #25664 共同构成 Vulkan 后端的两大痛点案例。
   - [查看](https://github.com/ggml-org/llama.cpp/issues/23769)

6. **#26206 [CLOSED] Gemma 4 12B 大 prompt 输出乱码（Intel Arc Pro B70）**
   - 12 评论，已关闭。B70 + SYCL 的典型问题，关闭可能意味着部分缓解或转离线。
   - [查看](https://github.com/ggml-org/llama.cpp/issues/26206)

7. **#27981 [CLOSED] llama-ui 桌面端无法打开推理等级选择菜单**
   - 11 评论 · 10 👍。UI 交互 bug 却能获得高赞，说明 llama-ui 用户量可观且对推理等级（reasoning level）功能有真实需求。
   - [查看](https://github.com/ggml-org/llama.cpp/issues/27981)

8. **#22360 [bug] 服务器长时间运行后性能显著下降**
   - 9 评论。Vulkan 环境下服务随时间变慢，需频繁重启，是部署场景的长期隐患。
   - [查看](https://github.com/ggml-org/llama.cpp/issues/22360)

9. **#27046 [bug] GPU offload 时 SIGSEGV（Lunar Lake iGPU，跨架构复现）**
   - 8 评论。resolve_fused_ops 误判导致空指针跳转，问题不限于单一架构，属后端核心逻辑 bug。
   - [查看](https://github.com/ggml-org/llama.cpp/issues/27046)

10. **#27329 [bug] CUDA Blackwell 上 Qwen3.8-27B-NVFP4 decode 挂起**
    - 6 评论。RTX 5090D（sm_100）+ NVFP4 量化组合 decode 阶段 CPU 空转、GPU 无任务，涉及新架构与新量化格式的兼容。
    - [查看](https://github.com/ggml-org/llama.cpp/issues/27329)

**其他值得注意**：#27455（推理等级服务端暴露，10 👍）、#27174（completions 端点 logprobs 缺失，破坏 lm-eval 生态）、#28969（gguf-dump 终端转义注入，安全性问题，已有 PR 修复）。

---

## 四、重要 PR 进展（Top 10）

1. **#29053 gguf-py：转义 gguf-dump 输出中的控制字符**
   - 直接修复 #28969 的终端注入漏洞（OSC 52 剪贴板写入等），安全相关，价值高。
   - [查看](https://github.com/ggml-org/llama.cpp/pull/29053)

2. **#29050 CUDA/HIP：CDNA2（gfx90a）MFMA 矩阵核 lightning indexer**
   - 为 DeepSeek-V3.2/V4 lightning indexer 增加 ROCm 矩阵核路径，对标 NVIDIA 已有的 tensor-core 路径，AMD 数据中心卡性能关键补强。
   - [查看](https://github.com/ggml-org/llama.cpp/pull/29050)

3. **#28243 Qwen3.8-Flash-Next MTP 支持**
   - 由 danielhanchen 提交，共享 MTP 模块复用 embed_tokens，宣称 1.3-2x 加速，面向最新旗舰开源模型的投机解码优化。
   - [查看](https://github.com/ggml-org/llama.cpp/pull/28243)

4. **#27754 GLM-5-Next（GLM-5.3-Flash，321.3B 混合稀疏注意力 MoE）**
   - 大模型架构支持（含视觉塔），规模巨大、涉及面广（model/mtmd/conversion/ggml/CUDA），是近期最重量级的新架构 PR。
   - [查看](https://github.com/ggml-org/llama.cpp/pull/27754)

5. **#29051 CUDA：Kronecker FWHT 支持（非 2 的幂 MUL_MAT_HADAMARD）**
   - 将 384/640/768/1280 等非幂次维度 FWHT 引入 CUDA，适配 Hadamard 变换相关的量化/压缩技术。
   - [查看](https://github.com/ggml-org/llama.cpp/pull/29051)

6. **#29019 保留 speculative decoding 层输入的原始 batch 顺序**
   - 修复并发 >1 时批处理重排导致 DFlash 收到错序隐藏状态的问题，是投机解码正确性的关键修复。
   - [查看](https://github.com/ggml-org/llama.cpp/pull/29019)

7. **#28913 server：修复模型驱逐竞态（#28698）**
   - 通过预留 req_count 防止请求将"停止中"的模型视为就绪，附回归测试，提升多模型路由可靠性。
   - [查看](https://github.com/ggml-org/llama.cpp/pull/28913)

8. **#29052 CI：Hexagon NPU 后端 Windows Arm64 构建**
   - 补齐高通 Hexagon NPU 的 Windows 构建，显示项目对边缘 NPU 生态的布局（呼应 XDNA 请求）。
   - [查看](https://github.com/ggml-org/llama.cpp/pull/29052)

9. **#29042 Model-Saver：支持 SWA 模式，15 个架构 roundtrip**
   - 一次性为 15 个架构补齐 dummy 模型与 roundtrip/融合测试，大幅提升 CI 覆盖率，属基础设施红利。
   - [查看](https://github.com/ggml-org/llama.cpp/pull/29042)

10. **#21752 common：http 客户端尊重 HTTP_PROXY/HTTPS_PROXY**
    - 修复企业代理环境下 `-hf` 下载静默失败的问题（#21694），存在时间久但迟迟未合，值得关注进度。
    - [查看](https://github.com/ggml-org/llama.cpp/pull/21752)

---

## 五、功能需求趋势

1. **NPU/新硬件后端**：#21725（XDNA，33 👍 最高）、#29052（Hexagon）显示 AMD NPU 是最迫切诉求，其次为各类集成 GPU（Lunar Lake、Strix Halo、B70）。
2. **推理等级（reasoning effort）可见化与可控化**：#27455（服务端暴露，10 👍）、#27981（UI 菜单，10 👍）——用户希望在一个界面里调节推理深浅，而非靠命令行动作。
3. **新模型支持**：Qwen3.8-Flash-Next、GLM-5.3-Flash、DeepSeek-V4 系列、Nemotron MTP 密集落地，社区紧追头部开源模型发布节奏。
4. **性能持续优化**：MoE 跳过无效计算、MTP 投机解码加速、MFMA/矩阵核路径，均指向"大模型跑得快、跑得省"。
5. **工具调用可靠性**：#26987（Qwen3-Coder tool-call 触发失败）、#26530（XML 工具调用）、#29022（Fast Tool Gating）反映工具调用/Agent 场景正在成为实际负载。

---

## 六、开发者关注点（痛点与高频需求）

- **Vulkan 稳定性是最大痛点**：Linux 7.x + RADV + 新显卡（Strix Halo / B70）的崩溃类 Issue 密集出现（#25664、#23769、#29028、#28960），社区对 Vulkan 后端的可靠性信心不足。
- **SYCL 内存管理问题集中**：#28860（scratchpad 暴涨）、#26409（tensor 切分慢 3 倍）、#28980（函数签名错误），Intel 独立显卡用户体验待提升。
- **长时运行的服务降级**：#22360（性能衰减）、#25082（ROCm 内存无界增长）指向服务器部署场景的资源泄漏类问题。
- **评测/指标生态被破坏**：#27174（logprobs 缺失破坏 lm-eval）、#27364（tokens/s 指标损坏）——开发者依赖的度量工具链受阻。
- **API/序列化安全**：#28969（转义注入）+ #29053（修复）、#28438（Q8_0 量化数据损坏）提醒量化/工具链的健壮性需加强。
- **企业环境适配**：#21752（代理支持）搁置五个月未合，提示"环境兼容性"类修复优先级偏低但需求真实存在。

---

*本日报基于过去 24 小时 GitHub 公开数据自动生成，仅反映社区可见活动，不代表官方立场。*

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*