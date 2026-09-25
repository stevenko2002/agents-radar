# AI CLI 工具社区动态日报 2026-09-26

> 生成时间: 2026-09-25 22:15 UTC | 覆盖工具: 12 个

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



以下是今日（2026-09-26）各主流 AI 开发工具最重要的 8 条更新摘要：

1. **Claude Code v2.1.283 发布**：新增 `x-claude-code-prompt-id` 网关提示头以增强多网关环境下的请求可追溯性，并推出了 `availableModelsMatch` 管理设置，支持精确模型白名单管控。（链接：https://github.com/anthropics/claude-code/releases）
2. **OpenAI Codex v0.157.0 发布**：新增 GPT-6 Sol 和 Luna 模型支持（包含 Amazon Bedrock），默认启用全屏 transcripts，并新增 Shift-click 扩展文本选择功能。（链接：https://github.com/openai/codex/releases）
3. **Ollama v0.40.0-rc0 发布**：对于 Apple Silicon 上 MLX 运行时支持的模型架构，现在将默认通过 MLX 框架运行，以提升苹果芯片上的本地推理效率。（链接：https://github.com/ollama/ollama/releases）
4. **llama.cpp 连发 10 个版本（b11180–b11191）**：修复了 Windows 下无尾部斜杠时 Unicode 路径目录创建失败的问题，更新了 LFM2 音频预处理 mel 特征计算逻辑，并新增了 OpenCL A8 Q5_K GEMM kernel。（链接：https://github.com/ggml-org/llama.cpp/releases）
5. **GitHub Copilot CLI v1.0.89-4 发布**：引入了自动路由层级建议，并对插件生命周期管理进行了优化。（链接：https://github.com/github/copilot-cli/releases）
6. **Gemini CLI 发布 v0.62.0 夜间版**：更新了 v0.61.0 的 changelog，并修复了 CLI 在区分缺失的 MCP 启用配置与畸形配置时的解析逻辑。（链接：https://github.com/google-gemini/gemini-cli/releases）
7. **DeepSeek TUI (Codewhale) 宿主架构升级**：合并了 TypeScript + Cordis 扩展宿主第一阶段（PR #6600），同时修复了新用户首次运行时消息丢失或重复的严重初始化 Bug（PR #6592）。（链接：https://github.com/Hmbown/Codewhale/pull/6600）
8. **Pi 引入 Codemode 与 MCP 集成**：合并了通过统一审批门禁调用 MCP 和插件工具的 Codemode 集成 PR（PR #10040），并推出了实验性的虚拟模型（Virtual models）支持（PR #10035）。（链接：https://github.com/earendil-works/pi/pull/10040）

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills 社区热点报告
> 数据来源：anthropics/skills 官方仓库 | 截止：2026-09-26

---

## 1. 热门 Skills 排行

> ⚠️ 数据说明：PR 评论数字段在当前数据集中均为 `undefined`，因此以下排序综合了 **Issue 交叉引用热度、最后更新时间、功能战略价值** 三个维度。

### 🔴 #1298 — skill-creator 触发评估隔离修复
- **作者**: MartinCajiao | 更新: 2026-09-16 | 状态: OPEN
- **功能**: 修复 `skill-creator` 中触发评估（trigger evals）的假阴性问题——多 worker 命令竞争、Windows `select()` 管道失败、无关工具中断扫描、运行时失败被误判为非触发。
- **社区热度**: 直接关联 Issue #556（**12 条评论，7👍**）——用户反馈 `run_eval.py` 通过 `claude -p` 触发技能的命中率为 0%。该 PR 是修复核心技能创建流程的关键。
- 🔗 [PR #1298](https://github.com/anthropics/skills/pull/1298)

### 🔴 #822 — AWT (AI Watch Tester) E2E 测试技能
- **作者**: ksgisang | 更新: 2026-09-19 | 状态: OPEN
- **功能**: 零代码 E2E 测试生成——赋予 Claude 视觉与浏览器控制能力，自动生成并执行端到端测试。支持无代码测试生成、自动执行、截图回溯。
- **社区热度**: 对应 Issue 中"测试生成"的强烈需求，9 月 19 日仍有活跃更新，属于社区 eagerly awaiting 的方向。
- 🔗 [PR #822](https://github.com/anthropics/skills/pull/822)

### 🔴 #723 — testing-patterns 综合测试技能
- **作者**: 4444J99 | 更新: 2026-09-21 | 状态: OPEN
- **功能**: 覆盖完整测试栈——Testing Trophy 哲学、单元测试 AAA 模式、React 组件测试（Testing Library）、集成测试、E2E 测试。
- **社区热度**: 9 月 21 日仍在活跃更新，填补了社区对"系统化测试方法论"技能的空白。
- 🔗 [PR #723](https://github.com/anthropics/skills/pull/723)

### 🟡 #1771 — proofcore-contract-auditor 智能合约审计
- **作者**: ProofCore-Protocol | 更新: 2026-09-16 | 状态: OPEN
- **功能**: Web3 开发者技能——对 Solidity/Rust 智能合约做自动静态分析，将密码学审计证明锚定到 TON 公链（零存储 Merkle 协议）。
- **社区热度**: 代表 Skills 生态向 Web3/区块链领域的扩展，9 月新提交，时效性强。
- 🔗 [PR #1771](https://github.com/anthropics/skills/pull/1771)

### 🟡 #1703 — md2video-audio Markdown → 视频技能
- **作者**: 70v-Yoyo | 更新: 2026-09-15 | 状态: OPEN
- **功能**: 零成本将 Markdown 文档编译为专业级 MP4 视频，通过 Marp 生成演示幻灯片，叠加类人声配音。
- **社区热度**: 代表"内容多媒体化"趋势，将文本工作流延伸至视频产出。
- 🔗 [PR #1703](https://github.com/anthropics/skills/pull/1703)

### 🟡 #1776 — blast-radius 破坏性操作清单
- **作者**: kishormorol | 更新: 2026-09-18 | 状态: OPEN
- **功能**: 大规模/破坏性写入前的检查清单——归档用户、撤销权限、删除行、批量发邮件等场景，弥合"查询正确"与"操作正确"之间的鸿沟。
- **社区热度**: 精准命中 DevOps/运维场景的安全诉求，9 月新提交。
- 🔗 [PR #1776](https://github.com/anthropics/skills/pull/1776)

### 🟢 #83 — skill-quality-analyzer + skill-security-analyzer
- **作者**: eovidiu | 更新: 2026-01-07 | 状态: OPEN
- **功能**: 两个元技能（meta-skills）——前者从结构/文档/功能/可移植性/社区五个维度评估技能质量；后者做安全审计。
- **社区热度**: 直接回应 Issue #492（43 条评论，社区最热安全议题）——社区技能冒充官方 `anthropic/` 命名空间的信任边界滥用问题。
- 🔗 [PR #83](https://github.com/anthropics/skills/pull/83)

### 🟢 #525 — Pyxel 复古游戏开发技能
- **作者**: kitao | 更新: 2026-09-22 | 状态: OPEN
- **功能**: 使用 Python 的 Pyxel 框架创建、调试和验证复古像素游戏，含无头输入驱动运行、直接帧检查、发布前验证。
- **社区热度**: 长周期活跃 PR（3 月创建，9 月仍更新），代表游戏开发方向的社区兴趣。
- 🔗 [PR #525](https://github.com/anthropics/skills/pull/525)

---

## 2. 社区需求趋势

从 Issues 提炼出社区最期待的 Skill 方向（按热度排序）：

| 优先级 | 需求方向 | 代表 Issue | 信号强度 |
|--------|----------|-----------|----------|
| 🔴 P0 | **安全与信任边界** | #492（43 评论）— 社区技能冒充 `anthropic/` 命名空间 | ⭐⭐⭐⭐⭐ |
| 🔴 P0 | **组织级共享** | #228（16 评论，8👍）— 技能在组织内直接共享 | ⭐⭐⭐⭐⭐ |
| 🔴 P0 | **技能触发可靠性** | #556（12 评论，7👍）— `claude -p` 下技能触发率为 0% | ⭐⭐⭐⭐ |
| 🟡 P1 | **测试方法论** | #723 PR、AWT #822 PR、#412（agent-governance） | ⭐⭐⭐⭐ |
| 🟡 P1 | **上下文窗口优化** | #1487（4 评论）— `claude-api` 技能单次注入 ~156k token | ⭐⭐⭐⭐ |
| 🟡 P1 | **去重与插件治理** | #189（6 评论，9👍）— document-skills 与 example-skills 内容重复 | ⭐⭐⭐ |
| 🟢 P2 | **MCP 协议互通** | #16（4 评论）— 将 Skills 暴露为 MCP 端点 | ⭐⭐⭐ |
| 🟢 P2 | **Bedrock 兼容** | #29（4 评论）— AWS Bedrock 上使用 Skills | ⭐⭐⭐ |
| 🟢 P2 | **企业级治理** | #1385（4 评论，1👍）— 推理质量门控管道 | ⭐⭐ |
| 🟢 P2 | **紧凑记忆表示** | #1329（9 评论）— compact-memory 符号化状态表示 | ⭐⭐ |

**关键解读**：
- 社区最焦虑的不是"缺技能"，而是**信任、触发、共享**三个基础设施问题。
- 安全（#492）和共享（#228）是两个获赞最多但尚未解决的结构性议题。
- 测试类技能（AWT、testing-patterns）是社区自发贡献最活跃的方向。

---

## 3. 高潜力待合并 Skills

以下 PR 评论活跃度虽不可直接比较（数据缺失），但从**最后更新时间、功能完整性、社区关联度**判断，最可能近期落地：

| PR | 技能 | 为什么高潜力 |
|----|------|-------------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator 修复 | 核心基础设施，Issue #556 已形成明确修复诉求 |
| [#822](https://github.com/anthropics/skills/pull/822) | AWT E2E 测试 | 9/19 活跃更新，功能完整，对应测试生成强需求 |
| [#723](https://github.com/anthropics/skills/pull/723) | testing-patterns | 9/21 活跃更新，系统化测试方法论，与 AWT 互补 |
| [#1742](https://github.com/anthropics/skills/pull/1742) | mcp-builder MCP ≥2 兼容 | 修复了 Issue #1668，属于生态依赖的硬修复 |
| [#1776](https://github.com/anthropics/skills/pull/1776) | blast-radius | 9/18 新提交，DevOps 场景精准，维护者活跃 |
| [#1734](https://github.com/anthropics/skills/pull/1734) | 孤儿 docx 评论检测 | 9/25 刚更新，docx 是最高频使用的文档技能之一 |
| [#1792](https://github.com/anthropics/skills/pull/1792) | docx LibreOffice 超时修复 | 与 #1790、#1734 构成 docx 质量提升三连击 |
| [#1245](https://github.com/anthropics/skills/pull/1245) | notion-spec-to-implementation | 9/24 活跃更新，Notion 生态整合，产品→任务拆解有实际用户场景 |

---

## 4. Skills 生态洞察

> **当前社区在 Skills 层面最集中的诉求是：从"堆技能"转向"建基础设施"——用户不再满足于多一个技能，而是要求技能本身可信（安全命名空间）、可靠（触发率 100%）、易用（组织内一键共享）、且不浪费上下文（去重与惰性注入）。**

三个数据点支撑这一判断：
1. Issue 评论数最高的两条（#492 安全、#228 共享）都不是功能需求，而是**平台治理**议题；
2. Issue #556（技能触发率为 0%）获 7 个 👍，说明"技能不触发"是普遍痛点而非个例；
3. 文档类技能（docx、pdf、odt）的 PR 最密集且多为 bug fix，表明社区正在**收尾和加固**基础能力，而非继续扩张。

---



# Claude Code 社区动态日报 — 2026-09-26

---

## 1. 今日速览

Claude Code 发布 v2.1.283，新增网关提示头与模型过滤管理配置，进一步强化多网关环境下的请求可追溯性。社区活跃度持续，过去 24 小时内 Issues 与 PR 双线并行，核心关注点集中在进程泄漏、桌面端稳定性、模型名称显示错误以及工作流工具路径解析等实际使用痛点。

---

## 2. 版本发布

### v2.1.283

- **新增 `x-claude-code-prompt-id` 网关提示头**：允许 LLM 网关对同一用户提示的多个请求进行分组，通过环境变量 `CLAUDE_CODE_GATEWAY_HINT_HEADERS=1` 一键开启。
- **新增 `availableModelsMatch` 管理设置**：设为 `"exact"` 时，`availableModels` 中的条目将仅允许精确匹配的模型，增强模型白名单的管控粒度。

> 链接：[anthropics/claude-code Releases](https://github.com/anthropics/claude-code/releases)

---

## 3. 社区热点 Issues（精选 10 条）

### #80885 — 定时任务会话遗留孤儿进程（🔥 5 评论 / 3 👍）
- **摘要**：macOS 下通过 schedule/loop skill 创建的定时任务在触发后仍残留 OS 级后台进程，尽管会话管理 API 标记 `isRunning: false`，进程却持续存活。
- **重要性**：长期运行的定时任务场景下会导致系统资源泄漏，影响机器可用性。
- **社区反应**：3 个赞，讨论集中在复现步骤与 macOS 进程树排查。

### #80514 — Windows 桌面端浏览器窗格重复渲染（3 评论）
- **摘要**：Windows 版 Claude Code 桌面应用的浏览器窗格渲染为左右两个，右侧"幽灵副本"无响应，与聊天列重叠。
- **重要性**：直接阻断桌面端浏览器功能的可用性。

### #80906 — 定制会话标题跨会话串改（3 评论 / 1 👍）
- **摘要**：Windows 下通过 `/rename` 设置的标题在恢复会话时被其他会话的标题覆盖，fork/ resume 场景下尤其明显。
- **重要性**：影响长期多会话工作流的组织与辨识。

### #80544 — Workflow 工具以会话 cwd 而非脚本仓库解析 agent 类型（1 评论）
- **摘要**：当 Workflow 脚本通过绝对路径从仓库 B 调用，而会话 cwd 不在仓库 B 内时，`agent({agentType})` 错误地解析到 cwd 所在项目的注册表。
- **重要性**：多仓库 monorepo 或跨仓库编排场景的关键路径 bug。

### #80547 — 桌面端勾选 worktree 后强制重置基础分支为 main（1 评论 / 2 👍）
- **摘要**：勾选 worktree 复选框后，分支芯片从仓库实际分支（如 `dev`）跳变为 `main`，忽略了 `origin/HEAD` 的默认分支设置。
- **重要性**：影响分支工作流的预期行为，2 个赞说明问题广受认同。

### #81108 — 孤儿 wrapper shell 累积导致 CPU 占用飙升（1 评论）
- **摘要**：包含 shell 循环与命令替换的 Bash 调用后，孤儿 wrapper shell 未被回收，曾在单次会话中达到 110 进程 / ~1413% CPU。
- **重要性**：严重性能与稳定性问题，可能拖垮整个系统。

### #81134 — VS Code 扩展中 /rename 不重绘侧边栏（1 评论）
- **摘要**：`/rename` 在数据层成功，但 VS Code 侧边栏条目和标签标题不刷新，需重载窗口 + 手动点击才更新。
- **重要性**：影响 IDE 集成下的会话管理体验。

### #80736 — `src/main/java/**` 路径无故被权限系统拒绝（1 评论）
- **摘要**：`Read`、`Grep`、`Edit` 对 Maven 模块下的 `src/main/java/**` 被拒绝，而同模块的 `pom.xml`、`src/main/resources/*` 可正常访问，配置中无匹配的 deny 规则。
- **重要性**：权限系统的路径匹配逻辑疑似存在 bug，阻断 Java 项目开发。

### #80871 — TaskUpdate 任务 ID 在会话恢复后不复存在（1 评论 / 1 👍）
- **摘要**：会话恢复后，对先前有效的 task ID 调用 `TaskUpdate` 返回 "Task not found"，任务列表似乎重新分配了 ID。
- **重要性**：破坏依赖任务状态的 Agent 工作流。

### #80513 — 幽灵用户中断消息注入（0 评论）
- **摘要**：长会话中收到用户从未发送的中断消息，包含看似合理的日文指令、伪造的"系统提醒"和虚假任务通知。
- **重要性**：涉及安全性和消息完整性，可能误导模型行为。

> 链接：[完整 Issue 列表](https://github.com/anthropics/claude-code/issues)

---

## 4. 重要 PR 进展（5 条 PR 中精选）

### #97241 — 系统提示分段超出用户层级（OPEN）
- **作者**：poteat
- **内容**：调整系统提示各分段的合并顺序，确保在引擎 `prompt.compose` 就位后且无遗留发布分支时生效。测试检查在携带该事件的 CLI 发布前将保持红色——这是设计使然而非意外。
- **意义**：系统提示结构化重构的关键一步。

### #96953 — diff 组件的 focus 钩子适配引擎命名（CLOSED）
- **作者**：poteat
- **内容**：修复 diff 插件的 `ui.focus` 钩子仅匹配自身注册名的问题，现同时响应引擎 stamped 的 `cc-plugin-diff` 名称，确保构建携带该插件时钩子正确触发。
- **意义**：插件系统兼容性修复，确保 diff 组件在正式构建中正常工作。

### #96930 — 测试插件遥测挂钩（CLOSED）
- **作者**：poteat
- **内容**：纯测试改动，验证插件遥测事件流的挂钩机制，不涉及 `hooks/` 目录下的实际变更。
- **意义**：为遥测系统重构提供测试保障。

### #96917 — 遥测日志与标记挂钩实现（CLOSED）
- **作者**：poteat
- **内容**：将 `$.telemetry.log` 和 `$.telemetry.mark` 的行为下沉为引擎事件钩子，新增名词的两个事件钩子分别检查条目、排队行并返回 `{ value }`。
- **意义**：遥测系统架构升级，从直接调用转向事件驱动。

### #41611 — 补充缺失的 Claude Code 源码引用（OPEN）
- **作者**：tornikeo
- **内容**：添加缺失的源码引用。
- **意义**：长期开放的文档/引用补全 PR。

> 链接：[完整 PR 列表](https://github.com/anthropics/claude-code/pulls)

---

## 5. 功能需求趋势

从近期 Issues 分布来看，社区关注方向可归纳为以下几条主线：

| 方向 | 相关 Issue 数量 | 典型诉求 |
|------|:---:|------|
| **进程/资源生命周期管理** | 4+ | 定时任务孤儿进程、wrapper shell 泄漏、桌面端残留渲染进程、CoworkVM 内存压力下的会话终止 |
| **桌面端稳定性** | 5+ | 浏览器窗格重复渲染、MCP server 重连后工具丢失、自动更新器 OSStatus 错误、OTel 环境变量未继承 |
| **模型名称与显示** | 3+ | 启动横幅误显 Opus 5 而非 Fable 5、模型被静默降级、`[1m]` 后缀缺少 beta header |
| **权限与路径解析** | 3+ | `src/main/java/**` 被误拒、Workflow 脚本 cwd 与注册表不一致、WSL2 路径误翻译 |
| **IDE 集成体验** | 3+ | VS Code 中 `/rename` 不刷新、subagent 视图 Esc 行为混乱、GitHub 仓库连接异常 |
| **会话状态持久化** | 3+ | 定制标题跨会话串改、TaskUpdate ID 恢复后丢失、MCP OAuth 授权不持久化 |

---

## 6. 开发者关注点总结

**高频痛点：**

1. **进程泄漏问题严重**：从 CLI wrapper shell 到桌面端渲染进程，再到定时任务孤儿进程，多个平台均出现进程未回收的情况，且部分案例中 CPU 占用已飙升至 1400%+，属于高优先级稳定性缺陷。

2. **模型名称与标识混乱**：Fable 5 被显示为 Opus 5、模型被静默降级、`[1m]` 后缀未携带 beta header——说明模型标识系统存在多处不一致，可能影响用户对当前运行模型的判断。

3. **桌面端体验割裂**：Windows 下浏览器窗格重复渲染、MCP 重连后工具列表不刷新、自动更新器在特定时序下失败——桌面端问题密度较高，且多为用户可感知的功能阻断。

4. **多仓库/跨平台路径处理**：Workflow 工具以 cwd 而非脚本仓库解析 agent 类型、WSL2 路径被误翻译为 Windows 路径——跨平台和多仓库场景的支持仍有明显短板。

**社区期待：**

- 定时任务与后台进程的生命周期管理完善
- 模型标识系统的统一与修复
- 桌面端各子模块（浏览器、MCP、更新器）的稳定性回归
- `/context` 输出的分类细化（区分工具 schema、系统工具、MCP 工具）
- 对话选择支持字母标签（a/b/c）以提升 TUI 操作效率

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Thinking Process:

1.  **Understand the Goal**: The user wants a daily community dynamic report for OpenAI Codex (github.com/openai/codex) dated 2026-09-26, based on provided GitHub data (Releases, Issues, Pull Requests). The report must be in Chinese, structured into specific sections, concise, professional, and include GitHub links.

2.  **Analyze the Input Data**:
    *   **Date**: 2026-09-26 (data covers updates mostly from 2026-09-25).
    *   **Releases**:
        *   `rust-v0.157.0`: Added GPT-6 Sol and Luna (Amazon Bedrock support, migration prompts), enabled fullscreen transcripts by default, Shift-click to extend text selections, automatic background-server startup for eligible users. (#47332, #47347, #47178, #47414)
        *   `rust-v0.159.0-alpha.3`, `alpha.2`, `alpha.1`: Release of alpha versions.
        *   `rust-v0.158.0-alpha.15`, `alpha.14`, `alpha.13`: Release of alpha versions.
    *   **Issues (Top 30 by comments)**:
        *   #28756 (1124 comments, Closed bug): Unexpected 404 Not Found error on `https://chatgpt.com/backend-api/codex/responses`. High impact, major connectivity/session bug.
        *   #29343 (36 comments, Open bug): Chrome plugin, browser, and computer use refuse to interact with certain sites.
        *   #24047 (23 comments, Open bug): Windows Desktop update installs but Codex does not relaunch afterward.
        *   #37967 (21 comments, Open enhancement): Remote Control cannot attach to a live CLI session on the workstation (completed threads work, in-progress ones fail).
        *   #44503 (17 comments, Open bug): Windows: app-server daemon start fails with Job Object error on a Modern Standby system.
        *   #39699 (17 comments, Open bug): Codex weekly quota consumed far faster than expected during normal app development.
        *   #18984 (14 comments, Open bug): Windows: hide command-safety PowerShell parser process to avoid pwsh.exe console flashes.
        *   #27565 (13 comments, Open enhancement): Claude Code-like remote control.
        *   #48074 (12 comments, Open bug): Windows: terminal windows repeatedly flash during requests after installing the Codex daemon.
        *   #42973 (10 comments, Open bug): Regression: headless SSH tasks lose thread messaging and delegation tools after Desktop update.
        *   #47465 (10 comments, Open bug): WSL2 sandbox fails before command execution: unsupported host mount at /mnt/wslg/distro.
        *   #27765 (10 comments, Open bug): `codex app-server daemon` commands fail with `path must be shorter than SUN_LEN` when CODEX_HOME is a deep path (macOS).
        *   #47996 (9 comments, Open bug): [macOS][CLI 0.157.0] Cmd+C no longer copies selected transcript text in iTerm2.
        *   #17596 (8 comments, Open bug): Windows desktop app: "New Thread" is not clickable when sidebar is expanded, etc.
        *   #32908 (6 comments, Open bug): Codex Remote Control push notifications not delivered on iOS.
        *   #43386 (6 comments, Open bug): [macOS] Computer Use times out after ~5 seconds when accessing Xcode 27 Device Hub.
        *   #42427 (5 comments, Open bug): codex mcp login ignores WWW-Authenticate resource_metadata during DCR discovery.
        *   #48040 (5 comments, Open bug): Regression in v0.157.0: right-click paste no longer works in integrated terminal on Fedora.
        *   #28077 (5 comments, Open bug): Codex tasks regressed from under 5 minutes to 30-50 minutes.
        *   #33256 (4 comments, Open bug): Standalone installer/updater never prunes old releases in $CODEX_HOME (3.8 GB after 12 updates).
        *   #44256 (3 comments, Open bug): ChatGPT desktop crashes when opening a long local Codex thread.
        *   #47449 (3 comments, Open bug): [Windows] Desktop renderer reloads every time app loses and regains focus.
        *   #48082 (3 comments, Open bug): Windows: codex_apps initialization fails after bundled engine update to 0.155.0-alpha.16.4.
        *   #48126 (3 comments, Open bug): GitHub plugin connection fails with "This app currently does not provide a browser setup URL".
        *   #48127 (3 comments, Open bug): Codex CLI 0.157.0 regression: middle-click and right-click Paste no longer paste text in Konsole/Wayland.
        *   #48188 (3 comments, Open bug): [Windows][Astra Ultra][Daybreak research blocked] ~50% of weekly usage gone; repair unfinished after 7h15m.
        *   #48212 (2 comments, Open bug): [Linux Desktop] Codex tasks stuck on "Starting your task"; CLI works.
        *   #48195 (2 comments, Open enhancement): CLI: make `daemon_auto_start` opt-in.
        *   #47583 (2 comments, Open bug): Windows: Browser integrations fail before connection with "Trusted RPC dependency" error.
        *   #48194 (2 comments, Open bug): codex update seems to have bricked my install.
    *   **Pull Requests (Top 20)**:
        *   #48224: Preserve model and access program pairs during compaction.
        *   #48222: Preserve late result metadata for truncated code-mode calls.
        *   #48213: Isolate executable fixture copies in CLI tests on Linux.
        *   #48211: Keep Codex visible during external editor handoff.
        *   #48207: Preserve queued output for observers during code-mode termination.
        *   #48206: Add a keep-and-next action to the warnings viewer.
        *   #48205: Dismiss viewed TUI warnings when closing the viewer.
        *   #48200: Extract Responses header conversion into a shared module.
        *   #48199: Keep archived threads with empty previews visible in listings.
        *   #48198: Honor execution environment proxy requirements.
        *   #48197: Optimize `blake3` in Bazel fastbuilds.
        *   #48190: Bound agent message board SSE frames before parsing.
        *   #48187: Fix zsh alias quoting in sourced shell snapshots.
        *   #48176: Protect `.aws` directories under sandbox writable roots.
        *   #48174: Preserve usage limit windows in turn and compaction analytics.
        *   #48168: Generate unique exec-server process IDs for every request.
        *   #48158: Fix Guardian retained context spacing and empty assistant handling.
        *   #48157: Allow Windows daemon launches with residual job membership.
        *   #48155: Preserve filesystem denials when preparing approved commands.
        *   #48151: Add item anchors to `thread/items/list` pagination.

3.  **Drafting the Report Sections**:

    *   **1. 今日速览 (Today's Overview)**:
        *   Codex CLI 发布了 v0.157.0 版本，引入了对 GPT-6 Sol 和 Luna 的支持（包括 Amazon Bedrock），并默认启用了全屏 transcripts。
        *   社区对 v0.157.0 的更新反应热烈，但伴随出现了多个回归问题（如终端复制粘贴失效、远程控制连接问题等）。
        *   大量 PR 被合并，主要集中在改善 TUI 界面交互、增强代码模式下的元数据保留以及提升系统安全性（如保护 `.aws` 目录）。

    *   **2. 版本发布 (Version Releases)**:
        *   Focus on `v0.157.0` as the main release; others are alphas.
        *   Key features of `v0.157.0`:
            *   新增 GPT-6 Sol 和 Luna 模型支持，包含 Amazon Bedrock 支持和旧模型迁移提示。
            *   默认启用全屏 transcripts，支持 Shift-click 扩展文本选择。
            *   为符合条件的用户启用自动后台服务器启动。
        *   Other alpha releases: `v0.159.0-alpha.1 to 3`, `v0.158.0-alpha.13 to 15` (mostly routine alpha progression).

    *   **3. 社区热点 Issues (Top 10 Key Issues)**:
        *   Need to select 10 of the most impactful/interesting ones and explain why they matter and community reaction.
        *   *Issue #28756 (Major Connectivity Bug)*: 404 error on responses API. 1124 comments, 83 likes. Highly critical backend connectivity issue for desktop users. (Link: `https://github.com/openai/codex/issues/28756`)
        *   *Issue #37967 (Remote Control limitation)*: Cannot attach to live CLI session on workstation. 21 comments, 31 likes. Important for the mobile remote control workflow. (Link: `https://github.com/openai/codex/issues/37967`)
        *   *Issue #39699 (Quota consumption)*: Weekly quota consumed way too fast. 17 comments. Critical for paying users, especially on Windows. (Link: `https://github.com/openai/codex/issues/39699`)
        *   *Issue #29343 (Browser/Computer Use blocker)*: Chrome plugin refuses to interact with certain sites. 36 comments, 12 likes. Core feature block for automation users. (Link: `https://github.com/openai/codex/issues/29343`)
        *   *Issue #27565 (Feature request: Claude-like remote control)*: Request for seamless CLI/Mobile sync like Claude Code. 13 comments, 19 likes. Shows feature parity demands. (Link: `https://github.com/openai/codex/issues/27565`)
        *   *Issue #27765 (macOS socket path limit)*: `path must be shorter than SUN_LEN` when CODEX_HOME is deep. 10 comments. Technical limitation affecting deep path setups. (Link: `https://github.com/openai/codex/issues/27765`)
        *   *Issue #48188 (Astra Ultra quota drain)*: ~50% weekly usage gone in one go, task unfinished. High frustration level. (Link: `https://github.com/openai/codex/issues/48188`)
        *   *Issue #44503 (Windows daemon job object error)*: Fails on Modern Standby systems. 17 comments. Specific Windows compatibility issue. (Link: `https://github.com/openai/codex/issues/44503`)
        *   *Issue #47465 (WSL2 sandbox mount fail)*: WSL2 sandbox fails with unsupported host mount. 10 comments. Crucial for WSL2 developer flow. (Link: `https://github.com/openai/codex/issues/47465`)
        *   *Issue #42973 (SSH regression)*: Headless SSH tasks lose thread messaging after Desktop update. 10 comments. Critical for HPC/remote dev workflows. (Link: `https://github.com/openai/codex/issues/42973`)
        *   *Issue #48074 (Windows terminal flashing)*: Terminal windows repeatedly flash during requests. 12 comments, 16 likes. UX regression. (Link: `https://github.com/openai/codex/issues/48074`)

    *   **4. 重要 PR 进展 (Top 10 Key PRs)**:
        *   Select 10 PRs that represent significant engineering efforts (compaction, security, TUI, testing, etc.).
        *   *PR #48224*: Compaction model/access program preservation. Prevents server rejection of model/program pairs. (Link: `https://github.com/openai/codex/pull/48224`)
        *   *PR #48222*: Truncated code-mode call metadata preservation. Fixes recorder attachment issues. (Link: `https://github.com/openai/codex/pull/48222`)
        *   *PR #48211*: Keep Codex visible during external editor handoff. Solves fullscreen TUI hiding the draft when opening an editor. Great UX improvement. (Link: `https://github.com/openai/codex/pull/48211`)
        *   *PR #48176*: Protect `.aws` directories under sandbox writable roots. Security hardening to prevent credential helper execution risks. (Link: `https://github.com/openai/codex/pull/48176`)
        *   *PR #48155*: Preserve filesystem denials when preparing approved commands. Security/Sandboxing fix. (Link: `https://github.com/openai/codex/pull/48155`)
        *   *PR #48206 & #48205*: TUI warnings viewer improvements (keep-and-next action, dismiss viewed warnings). Better developer diagnostics workflow. (Link: `https://github.com/openai/codex/pull/48206`, `https://github.com/openai/codex/pull/48205`)
        *   *PR #48198*: Honor execution environment proxy requirements. Network proxy config fixes. (Link: `https://github.com/openai/codex/pull/48198`)
        *   *PR #48157*: Allow Windows daemon launches with residual job membership. Fixes Windows daemon startup issue. (Link: `https://github.com/openai/codex/pull/48157`)
        *   *PR #48168*: Generate unique exec-server process IDs for every request. Prevents process handle reuse race conditions. (Link: `https://github.com/openai/codex/pull/48168`)
        *   *PR #48151*: Add item anchors to `thread/items/list` pagination. API improvement for robust cursor pagination. (Link: `https://github.com/openai/codex/pull/48151`)

    *   **5. 功能需求趋势 (Feature Demand Trends)**:
        *   Extracted from issues:
            *   **远程控制与多端协同 (Remote Control & Multi-device Sync)**: Strong demand for Claude Code-like remote control (#37967, #27565), especially attaching to live CLI sessions and iOS push notification fixes (#32908).
            *   **模型支持与迁移 (Model Support & Migration)**: GPT-6 Sol/Luna integration and Bedrock support (#47332), but also concerns over quota consumption on new powerful models like Astra Ultra (#48188).
            *   **Windows 生态与终端体验 (Windows & Terminal UX)**: Many issues focus on Windows-specific bugs (terminal flashing #48074, pwsh.exe flashes #18984, installer bloat #33256, focus reloads #47449, daemon job object errors #44503). Terminal copy-paste regressions in v0.157.0 are highly complained about (#47996, #48040, #48127).
            *   **配额与计费透明度 (Quota & Billing Transparency)**: Users are frustrated by unpredictable quota consumption (#39699, #48188), calling for better usage tracking.
            *   **沙箱与安全隔离 (Sandbox & Security)**: Demands for better sandbox configurations (WSL2 mount fixes #47465, `.aws` protection PR #48176).

    *   **6. 开发者关注点 (Developer Pain Points & High-frequency Demands)**:
        *   Summarize the core pain points:
            *   **v0.157.0 的回归 bug (Regression bugs in v0.157.0)**: Copy-paste behavior in terminals (iTerm2, Konsole, Fedora integrated terminal) broke, which is a major blocker for CLI users.
            *   **Windows 平台的稳定性与体验 (Windows platform stability)**: Windows-specific issues like daemon startup, installer pruning, terminal flashing, and UI clickables are major complaints.
            *   **远程/无头环境下的连接与消息同步 (Remote/headless session messaging)**: Issues like SSH losing thread messaging (#42973) and deep CODEX_HOME paths breaking sockets (#27765) show pain points in advanced deployment scenarios.
            *   **后台守护进程的自动启动争议 (Daemon auto-start controversy)**: Issue #48195 asks to make `daemon_auto_start` opt-in, as automatic background startup can cause unexpected behavior or resource usage.

4.  **Refining Language and Tone**:
    *   The tone should be analytical, professional, and targeted at technical developers/analysts.
    *   Ensure all links are formatted clearly (using the issue/PR numbers provided in the prompt, constructing standard GitHub URLs: `https://github.com/openai/codex/issues/<ID>` or `/pull/<ID>`).


</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Thinking Process:

1.  **Understand the Goal**: The user wants a structured Chinese daily report (dated 2026-09-26, based on data updated up to 2026-09-25) for the Gemini CLI community dynamics based on provided GitHub data (Releases, Issues, Pull Requests).

2.  **Analyze the Input Data**:
    *   **Date of report**: 2026-09-26 (data is from the past 24 hours, mostly updated on 2026-09-25).
    *   **Latest Releases**:
        *   `v0.62.0-nightly.20260925.gbedef96ef` (Release of v0.62.0-nightly.20260925.gbedef96ef).
        *   What's changed: Changelog for v0.61.0-preview.1, Changelog for v0.61.0, fix(cli): distinguish missing MCP enablement config from malform.
    *   **Latest Issues (top 30 by comments)**:
        *   #22323 (P1, bug): Subagent recovery after MAX_TURNS is reported as GOAL success, hiding interruption (13 comments, 2 👍).
        *   #19873 (P2, enhancement, large effort): Leverage model's bash affinity via Zero-Dependency OS Sandboxing & Post-Execution Intent Routing (9 comments, 1 👍).
        *   #21409 (P1, bug): Generalist agent hangs (8 comments, 8 👍) - high thumbs up, indicates a major blocker for users deferring to agents.
        *   #21968 (P2, bug): Gemini does not use skills and sub-agents enough (6 comments).
        *   #22267 (P2, bug): Browser Agent ignores settings.json overrides (e.g., maxTurns) (4 comments).
        *   #22232 (P3, feature): Enhance browser_agent resilience: Automatic session takeover and lock recovery (4 comments).
        *   #21983 (P1, bug): browser subagent fails in wayland (4 comments, 1 👍).
        *   #21000 (P3, bug): Experiment with using native file tools for creating and maintaining the task tracker (4 comments).
        *   #20079 (P2, bug): ~/.gemini/agents/filename.md is not recognized as an agent if filename.md is a symlink (4 comments).
        *   #22186 (P1, bug): get-shit-done output hook causes crash (3 comments).
        *   #20195 (P3, enhancement): [Agents] - Local Subagent - Sprint 1 (3 comments).
        *   #18283 (P3, customer-issue): Curate examples of agents in the gemini cli repo (3 comments).
        *   #18282 (P3, customer-issue): Improve codebase investigator (3 comments).
        *   #17760 (P2, enhancement): Subagent Configurability - Tools, policy, hooks, skills, schema, etc (3 comments).
        *   #17758 (P2, enhancement): Subagent Resumability & Persistence (3 comments).
        *   #17757 (P2, enhancement): Local agents can be started async (w/o manual backgrounding) (3 comments).
        *   #22465 (P2, bug): Gemini CLI gets stuck at interactive prompt creating vite app (2 comments).
        *   #21924 (P2, core, bug): High performance and flicker free behavior on terminal resize (2 comments).
        *   #21763 (P1, bug): Bugreport doesn't provide context of the subagent (2 comments).
        *   #21432 (P3, customer-issue): Improve Agent "Self-Awareness": Accurate CLI Flags, Hotkeys, and Self-Execution (2 comments).
        *   #19561 (P3, enhancement): Implement 'Tactful Extraction' logic for token-frugal surgical reads (2 comments).
        *   #18836 (P3, customer-issue): Replace WriteToDo with Persistent File-Based Task Tracking (CRUD) (2 comments).
        *   #18397 (P3, core, enhancement): Support auto adding to a per workspace policy rather than a global policy (2 comments).
        *   #18287 (P3, customer-issue): Explore Shared Memory or parallel subagent collaboration (2 comments).
        *   #18285 (P3, customer-issue): Consider the addition of subagent discovery via settings.json (2 comments).
        *   #18062 (P2, security, bug): [Cloud Shell] API Error: "Requested entity was not found" when using Lab Accounts (2 comments).
        *   #17764 (P3, agent, enhancement): Research / Investigation (2 comments).
        *   #17762 (P2, agent, enhancement): Built-in Agents (2 comments).
        *   #17761 (P2, agent, enhancement): Subagent UI/UX (2 comments).
        *   #17756 (P2, agent, enhancement): Tool confirmations are not blocking for async subagents (2 comments).
    *   **Latest Pull Requests (top 20 by comments/relevance)**:
        *   #29506 (L, need-issue): fix(core): align policy redirection gates, path validation, and workflow parsing (CI workflows).
        *   #29448 (P1, core, M/L): fix(auth): prevent infinite auth loop from file contention, headless keyring, and supervisor state drops (Windows, WSL, headless fixes).
        *   #29463 (P1, core, M, CLOSED): fix(acp): resolve session before config initialization and avoid same-minute filename collisions.
        *   #29499 (P1, core, L): fix(core): serialize file tool operations and make writes atomic (prevents silent lost updates in concurrent executions like parallel subagents).
        *   #29437 (P1, core, M/L, CLOSED): fix(core): clean up temporary directory when background shell execution exits.
        *   #29508 (deps, XL): chore(deps): bump npm dependencies (76 updates).
        *   #29137 (deps, XL, CLOSED): chore(deps): bump npm dependencies (77 updates).
        *   #29476 (P1, core, M/L): fix(cli): resolve hang on Enter keypress in interactive mode (integrated terminal with IDE companion).
        *   #29470 (P3, docs, CLOSED): Changelog for v0.62.0-preview.0.
        *   #28987 (deps, S): chore(deps): bump js-yaml.
        *   #28986 (deps, L/XL): chore(deps): bump puppeteer-core (relevant for browser agent).
        *   #28985 (deps, P0, core/agent, S): chore(deps): bump google-auth-library.
        *   #29471 (CLOSED): chore(release): bump version to 0.63.0-nightly...
        *   #28844 (CLOSED, docs): add Homebrew deprecation notice.
        *   #29505 (P1, L, need-issue): fix: support rootless Podman with keep-id (sandbox startup).
        *   #29457 (P1, core, L/XL): fix(core): replace fuzzy requestedExplicitly logic with glob matching in read-many-files (fixes context-bloat bug with binary assets).
        *   #27588 (P2, core/agent/non-interactive, L, help wanted): fix(cli): support WSL2 clipboard image paste.
        *   #29450 (P1, non-interactive, XL): refactor(a2a-server): implement V1 to V2 settings migration logic.
        *   #29467 (P1, core, M/L, CLOSED): fix(core): remove invalid diff.external override (fixes git spawn errors).
        *   #29497 (P1, core, L, CLOSED): fix(core): serialize concurrent file tool operations and make writes atomic (similar to #29499, maybe duplicate or alternative branch).

3.  **Drafting the Sections**:

    *   **1. 今日速览 (Today's Overview)**:
        *   Summarize the key events of the day: Gemini CLI released a new nightly version `v0.62.0-nightly.20260925`, focusing on MCP config and changelog updates.
        *   The community is highly active, with major focus on **subagent stability, concurrent file operation safety (critical bug fixes in core PRs), and auth loops on Windows/WSL**.
        *   Issues regarding agent hangs, subagent success state misreporting, and browser agent configuration overrides are gaining high traction.

    *   **2. 版本发布 (Releases)**:
        *   Mention `v0.62.0-nightly.20260925.gbedef96ef`.
        *   Key updates: Changelog updates for v0.61.0 and v0.61.0-preview.1, and a fix for CLI to distinguish missing MCP enablement config from malformed ones.

    *   **3. 社区热点 Issues (Top 10 issues of interest)**:
        *   Need to select 10 crucial ones, explain why they matter, community reaction (comments, thumbs up).
        *   *Selected Candidates*:
            1.  **#21409 (P1 Bug) Generalist agent hangs** (8 👍, 8 comments): Critical blocker where deferring to the generalist agent causes infinite hangs. High thumbs-up shows widespread impact.
            2.  **#22323 (P1 Bug) Subagent recovery after MAX_TURNS is reported as GOAL success, hiding interruption** (13 comments, 2 👍): Tricky bug where subagent status reporting is misleading, hiding the fact that it timed out, impacting reliability of agent workflows.
            3.  **#19873 (P2 Enhancement) Leverage model's bash affinity via Zero-Dependency OS Sandboxing & Post-Execution Intent Routing** (9 comments): Proposes a sandboxed execution environment matching Gemini's native bash preference. High interest in security and performance.
            4.  **#21968 (P2 Bug) Gemini does not use skills and sub-agents enough** (6 comments): Key usability issue where the LLM fails to autonomously trigger custom skills/subagents unless explicitly prompted.
            5.  **#22267 (P2 Bug) Browser Agent ignores settings.json overrides (e.g., maxTurns)** (4 comments): Configuration override failure in browser agent, limiting customization.
            6.  **#21983 (P1 Bug) browser subagent fails in wayland** (4 comments, 1 👍): Compatibility issue with Wayland display protocol, crucial for Linux users.
            7.  **#20079 (P2 Bug) Symlink in agents folder not recognized** (4 comments): Simple but frustrating file system edge case preventing custom agent symlinks.
            8.  **#22186 (P1 Bug) get-shit-done output hook causes crash** (3 comments): Crash issue near completion of specific workflows (GSD).
            9.  **#17758 (P2 Enhancement) Subagent Resumability & Persistence** (3 comments): Core feature request for state preservation across restarts and session resume.
            10. **#17760 (P2 Enhancement) Subagent Configurability - Tools, policy, hooks, skills, schema, etc** (3 comments): Tracking epic for advanced subagent configuration, crucial for enterprise/complex workflows.
        *   *Drafting details for each*: Translate summaries, highlight community metrics (👍/comments), and state the technical significance.

    *   **4. 重要 PR 进展 (Top 10 PRs)**:
        *   Focus on the ones fixing major bugs or introducing key refactors.
        *   *Selected Candidates*:
            1.  **#29499 / #29497 (P1, core, L) Serialize concurrent file tool operations and make writes atomic**: Critical fix for silent lost updates when parallel subagents execute file tools simultaneously. (Core stability improvement).
            2.  **#29448 (P1, core, M/L) fix(auth): prevent infinite auth loop from file contention, headless keyring, and supervisor state drops**: Fixes a severe blocker on Windows, WSL, and headless systems. (Crucial for cross-platform UX).
            3.  **#29457 (P1, core, L/XL) replace fuzzy requestedExplicitly logic with glob matching in read-many-files**: Fixes a critical context-bloat bug where binary files (images, PDFs) were incorrectly processed, saving tokens and preventing context bloat.
            4.  **#29476 (P1, core, M/L) fix(cli): resolve hang on Enter keypress in interactive mode**: Fixes unresponsive Enter key during tool confirmation prompts in integrated terminals with IDE companion integration.
            5.  **#29505 (P1, L, need-issue) fix: support rootless Podman with keep-id**: Fixes sandbox startup for rootless Podman, preserving host UID/GID. Important for containerized environments.
            6.  **#29450 (P1, non-interactive, XL) refactor(a2a-server): implement V1 to V2 settings migration logic**: Important architectural upgrade for settings schema migration with backward compatibility.
            7.  **#29506 (L, need-issue) fix(core): align policy redirection gates, path validation, and workflow parsing**: Improves CI workflow parsing and policy redirection gates.
            8.  **#29467 (P1, core, M/L, CLOSED) fix(core): remove invalid diff.external override**: Resolves fatal git spawn errors in execution sandbox.
            9.  **#28986 (deps, L/XL) chore(deps): bump puppeteer-core from 24.0.0 to 25.10.0**: Key dependency update for browser agent functionality.
            10. **#29437 (P1, core, M/L, CLOSED) fix(core): clean up temporary directory when background shell execution exits**: Prevents resource leak of temp dirs storing background process IDs.
        *   *Drafting details*: Focus on the technical core of the PRs (concurrent safety, auth loop, context bloat, terminal responsiveness, container compatibility).

    *   **5. 功能需求趋势 (Feature Demand Trends)**:
        *   Extracted from issues:
            *   **Subagent & Agent Core Evolution**: Massive focus on subagents. People want async execution (#17757), persistence/resume (#17758), better configurability (#17760), and shared memory/parallel collaboration (#18287).
            *   **Context Management & Token Efficiency**: Issue #19561 ("Tactful Extraction") and PR #29457 show a strong focus on preventing context bloat (e.g. avoiding binary file injection, surgical reads).
            *   **Browser Agent & Sandboxing**: Issues around browser agent ignoring configs (#22267), failing on Wayland (#21983), and the proposal for zero-dependency OS sandboxing (#19873) indicate browser automation and secure sandboxing are hot development areas.
            *   **UI/UX and Terminal Performance**: Terminal resize flicker (#21924), interactive prompt hangs (#22465, #29476) show developers care deeply about terminal流畅度.

    *   **6. 开发者关注点 (Developer Pain Points & High-frequency Demands)**:
        *   **Subagent Stability and Reliability**: The generalist agent hanging (#21409) and subagents reporting success when hitting MAX_TURNS (#22323) are major trust barriers. Developers cannot rely on autonomous agents if they hang or lie about their status.
        *   **Configuration & Customization Frustrations**: Issues like symlinks not being recognized (#20079) and settings.json being ignored by the browser agent (#22267) highlight friction in customizing the tool.
        *   **Cross-Platform & Environment Compatibility**: Auth loops on Windows/WSL/headless (#29448), Wayland failures (#21983), Cloud Shell API errors (#18062), and WSL2 clipboard issues (#27588) show that environment edge cases are a persistent pain point.
        *   **Context Bloat & Performance**: The concern over token costs and binary file handling (#29457, #19561) reflects developer worries about LLM limits and performance degradation during large repo investigations.

4.  **Refine Language and Tone**:
    *   Professional, concise, structured.
    *   Use Markdown formatting (bolding, lists, links).
    *   Translate technical terms naturally but accurately into Chinese (e.g., "subagent" -> 子代理/子智能体, "context bloat" -> 上下文膨胀, "auth loop" -> 认证死循环, "Wayland" -> Wayland 显示协议).

5.  **Review against Constraints**:
    *   "2026-09-26 的 Gemini CLI 社区动态日报" - Check date.
    *   "今日速览 - 2-3句话概括今天最重要的动态" - Check.
    *   "版本发布 - 总结更新内容" - Check.
    *   "社区热点 Issues - 挑选 10 个最值得关注的 Issue，说明为什么重要、社区反应如何" - Check.
    *   "重要 PR 进展 - 挑选 10 个重要的 PR，说明功能或修复内容" - Check.
    *   "功能需求趋势 - 提炼社区最关注的功能方向" - Check.
    *  

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



# GitHub Copilot CLI 社区动态日报
**日期：** 2026-09-26  
**数据来源：** [github.com/github/copilot-cli](https://github.com/github/copilot-cli)

---

### 1. 今日速览
 Copilot CLI 发布了新版本 `v1.0.89-4`，重点引入了自动路由层级建议、插件生命周期管理优化。社区方面，系统提示词（System Prompt）token 消耗过大问题（#2627，20 个赞）以及 Skill 显式调用失效问题（#4438，11 个赞）成为最受关注的焦点。此外，长会话中的认证失效和自定义模型端点连接错误也是开发者集中反馈的痛点。

---

### 2. 版本发布
#### `v1.0.89-4` 关键更新
*   **新增功能：**
   

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>



以下是为您整理的 **2

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

The user wants a Chinese daily report for the Pi community based on GitHub data from `badlogic/pi-mono` for 2026-09-26. I need to structure the report into 6 sections:

1. 今日速览 (Today's overview)
2. 版本发布 (Version releases) - if any, otherwise skip
3. 社区热点 Issues (Top 10 notable issues)
4. 重要 PR 进展 (Top 10 notable PRs)
5. 功能需求趋势 (Feature demand trends)
6. 开发者关注点 (Developer pain points / high-frequency demands)

Let's analyze the data provided.

**Data Summary:**
- **Latest Releases (past 24h):** None (无)
- **Latest Issues (past 24h, top 30 by comments):**
  - #10031 [CLOSED] [bug, no-action] Pi sporadically stuck in "Working..." when thinking is stopped with <esc> (15 comments)
  - #7885 [CLOSED] npm search not indexing newly published pi-packages (15 comments)
  - #9803 [CLOSED] [bug] 0.86.0 regression: RPC steer success cannot be correlated with extension-handled input (11 comments)
  - #9674 [CLOSED] [bug] mistral-conversations: empty content deltas open text blocks (GLM 5.x: whitespace, 400s on replay) (7 comments)
  - #8913 [OPEN] Expose the fullscreen renderer's existing `mouse` option (6 comments)
  - #3790 [CLOSED] [last-read] Add a backward-direction shortcut for cycling thinking level (6 comments)
  - #9980 [OPEN] [bug] Calculated cost for top open models on OpenRouter is off by 2-3x (5 comments)
  - #9974 [CLOSED] [bug] pi mishandles Responses API tool calls as returned by llama.cpp (5 comments)
  - #9579 [CLOSED] Overflow image recovery uses a fixed 16 MiB budget (5 comments)
  - #10033 [OPEN] [bug] Compaction prompt includes all thinking text and exceeds the context window (5 comments)
  - #9918 [CLOSED] Codex replays empty signed final answers (5 comments)
  - #9098 [CLOSED] Expose prompt disposition in RPC responses (5 comments)
  - #9840 [CLOSED] [bug] Kimi provider: pi completes final output then sleeps at 0% CPU and never exits (4 comments)
  - #10034 [CLOSED] [bug] OpenAI `fast` tier records the wrong price in Pi (4 comments)
  - #9905 [OPEN] Anthropic: thinking.display is always sent as "summarized" (4 comments)
  - #9965 [CLOSED] [bug] Typescript 7 final has been out for 2 months - get rid of tsgo preview (4 comments)
  - #10024 [OPEN] A mid-run change to the selected tool set moves the head of the system prompt (4 comments)
  - #9887 [OPEN] [bug] `read` tool call rendering in TUI breaks if line numbers are strings (4 comments)
  - #10011 [CLOSED] [no-action] Proposal: hide tool rows in the interactive transcript (3 comments)
  - #9506 [CLOSED] bug(ai): models.json samplingParams are dropped in the openai-completions stream path (3 comments)
  - #6281 [CLOSED] [no-action] Support Bi-Directional Thinking Level Cycling (3 comments)
  - #9758 [OPEN] [inprogress] Mouse-wheel scroll step is hardcoded to 1 line (2 comments)
  - #10002 [OPEN] Extension console output writes over the interactive TUI (2 comments)
  - #9962 [OPEN] [bug] registerNativeProvider races the startup refresh (2 comments)
  - #9953 [OPEN] anthropic strict tools: makeStrictJsonSchema keeps minimum/maximum (2 comments)
  - #10000 [CLOSED] [pi-ai] session file is not written until the first assistant message (2 comments)
  - #10042 [CLOSED] [bug, untriaged] Alacritty on Windows, SSH to Pi on Linux, special keys not responding (2 comments)
  - #9553 [CLOSED] [bug, last-read, no-action] Pi doesn't support commandcode provider (2 comments)
  - #10038 [CLOSED] [untriaged] Fullscreen: mouse wheel over a long prompt scrolls the transcript (2 comments)
  - #10026 [CLOSED] Regular-mode exit leaves cursor hidden after overlay shutdown cleanup (2 comments)

- **Latest PRs (past 24h, 12 total):**
  - #10051 [CLOSED] feat(client): add actionable error mapping for MCP OAuth dynamic client registration
  - #10050 [OPEN] fix(coding-agent): keep extension console output off the interactive TUI (Fixes #10002)
  - #1481 [CLOSED] fix(tui): chain slash arg autocomplete after Tab completion
  - #8262 [OPEN] feat(coding-agent): dispatch hooks on every turn-start path
  - #1 [CLOSED] feat: add Windows Git Bash support to bash tool
  - #10040 [OPEN] feat(coding-agent): Codemode and MCP (Large PR by mitsuhiko)
  - #10044 [CLOSED] fix(ai): upgrade openai SDK to 7.19.0 (Adds "fast" service tier)
  - #10039 [CLOSED] fix(coding-agent): honor truecolor in custom themes
  - #10037 [CLOSED] Perf/collapse historical tool output
  - #10035 [OPEN] Virtual models (mitsuhiko, experimental)
  - #6933 [CLOSED] fix(coding-agent): disable undici idle timeout by default for local LLMs
  - #10027 [CLOSED] fix(ai,coding-agent): streaming robustness, reasoning clamp, compaction validity, edit recovery

**Structuring the Report:**

### 1. 今日速览
- Summarize the key events of the day.
- No new releases today.
- High activity on issue resolutions and PR submissions, especially focusing on bug fixes (TUI rendering, RPC, cost calculation) and feature additions (Codemode, MCP, Virtual models).
- Key PRs from `mitsuhiko` adding major features like Codemode, MCP, and Virtual models are noteworthy.

### 2. 版本发布
- State that there are no new releases in the past 24 hours.

### 3. 社区热点 Issues (Top 10)
I need to select 10 issues that are most impactful or interesting, explaining why they matter and community reaction.
- **#10031** (Stuck in "Working..." with ESC): Critical UX bug, 15 comments, forces hard exit. (High priority for users)
- **#9980** (OpenRouter cost off by 2-3x): Financial/accuracy issue for users using OpenRouter, 5 comments.
- **#10033** (Compaction prompt exceeds context window): Critical bug for long sessions with reasoning models (DeepSeek), 5 comments.
- **#9905** (Anthropic thinking.display always "summarized"): Configuration limitation for Anthropic users, 4 comments.
- **#10024** (Mid-run tool set change re-bills conversation): Subtle but important context window billing issue, 4 comments.
- **#9887** (read tool TUI breaks on string line numbers): Specific but interesting rendering bug with openrouter models, 4 comments.
- **#9953** (Anthropic strict tools schema rejection): Bug affecting constrained sampling, 2 comments but 1 👍.
- **#9962** (registerNativeProvider race condition): Startup race condition, 2 comments.
- **#10002** (Extension console output garbles TUI): TUI rendering issue, 2 comments (already has a fix PR #10050).
- **#9840** (Kimi provider never exits): Specific provider hang issue, 4 comments.

Let's refine the selection to cover different aspects (TUI, AI core, providers, cost, etc.).
1. **#10031** (Stuck in Working... on ESC) - Critical UX blocker.
2. **#9980** (OpenRouter cost calculation error) - Affects billing accuracy.
3. **#10033** (Compaction includes thinking text, exceeds context) - Core AI logic bug for reasoning models.
4. **#9905** (Anthropic thinking.display hardcoded) - API flexibility issue.
5. **#10024** (Tool set change re-bills context) - Context management issue.
6. **#9887** (read tool string line numbers) - TUI rendering bug.
7. **#9953** (Anthropic strict schema rejects validation keywords) - Tool use constraint bug.
8. **#9962** (Native provider registration race) - Extension startup bug.
9. **#10002** (Extension console output over TUI) - TUI extension isolation issue (noting PR #10050 fixes it).
10. **#9840** (Kimi provider process hang) - Provider lifecycle bug.

### 4. 重要 PR 进展 (Top 10)
Select 10 PRs, explain what they do.
- **#10040** (Codemode and MCP): Major feature addition by mitsuhiko, integrates sandbox and MCP.
- **#10035** (Virtual models): Experimental feature by mitsuhiko.
- **#10050** (Fix extension console output over TUI): Directly addresses #10002.
- **#10051** (MCP OAuth error mapping): Improves MCP OAuth UX.
- **#10027** (Streaming robustness, reasoning clamp, etc.): Bundle of fixes.
- **#10044** (Upgrade openai SDK to 7.19.0): Adds "fast" service tier support.
- **#10039** (Honor truecolor in custom themes): TUI visual fix.
- **#10037** (Collapse historical tool output): Performance improvement.
- **#6933** (Disable undici idle timeout for local LLMs): Important fix for local deployments (vLLM, Ollama).
- **#8262** (Dispatch hooks on every turn-start path): Fixes hook triggering gap.
- **#1481** (Chain slash arg autocomplete): TUI UX improvement.
- **#1** (Windows Git Bash support): Platform compatibility.

Let's pick the top 10 most significant ones.
1. **#10040** (Codemode and MCP) - Major feature.
2. **#10035** (Virtual models) - Major feature.
3. **#10050** (Fix extension console output) - Fixes #10002.
4. **#10027** (Streaming robustness, etc.) - Comprehensive fixes.
5. **#10044** (Upgrade openai SDK) - Pricing/tier support.
6. **#6933** (Disable undici idle timeout) - Local LLM stability.
7. **#10051** (MCP OAuth error mapping) - MCP UX.
8. **#8262** (Dispatch hooks on turn-start) - Hook system fix.
9. **#10039** (Truecolor in custom themes) - Visual fix.
10. **#10037** (Collapse historical tool output) - Performance.

### 5. 功能需求趋势
Extracted from issues and PRs:
- **TUI/UX Customization**: Mouse scroll steps (#9758), hiding tool rows (#10011), truecolor themes (#10039), mouse tracking opt-out (#8913).
- **Model Cost & Pricing Accuracy**: OpenRouter pricing (#9980), OpenAI fast tier pricing (#10034).
- **Reasoning Model Support & Context Management**: Thinking text in compaction (#10033), thinking level cycling (#3790, #6281), thinking.display config (#9905).
- **Extension & RPC Isolation**: Console output isolation (#10002, #10050), RPC prompt disposition (#9098), RPC steer correlation (#9803), native provider registration race (#9962).
- **Local LLM & Alternative Providers**: Undici timeout for local LLMs (#6933), Kimi provider hang (#9840), llama.cpp tool calls (#9974), commandcode provider support (#9553).
- **MCP & Codemode**: Integration and OAuth error handling (#10040, #10051).

### 6. 开发者关注点
Pain points from the issues:
- **TUI Rendering Stability**: Multiple issues regarding visual glitches (cursor hidden, console output overwrite, string concatenation in read tool).
- **Context Window & Billing Logic**: Issues with system prompt head movement causing re-billing (#10024) and compaction blowing up context (#10033).
- **Provider & Pricing Accuracy**: OpenRouter using cheapest provider pricing, OpenAI service tier pricing bugs.
- **Lifecycle & Process Management**: Kimi provider hanging, Pi stuck in "Working..." state.
- **Extension Isolation**: Extensions having too much access to TTY (console.log overwriting TUI).
- **Build/Toolchain Updates**: TypeScript 7 migration urgency (#9965).

Now, I will write the report in clear, professional Chinese, adhering to the requested structure and including links for all mentioned items.

Let's double-check the links format.
The prompt provides links like `earendil-works/pi Issue #10031`. I should format them as standard GitHub URLs or just use the provided text. Since the prompt says "每个条目附上 GitHub 链接", and the source data has "链接: earendil-works/pi Issue #10031", I will construct the URL as `https://github.com/earendil-works/pi/issues/10031` or just use the text provided if exact URLs aren't fully specified, but standard GitHub URL format is `https://github.com/badlogic/pi-mono/issues/10031` (assuming `badlogic/pi-mono` is the repo). The source says "数据来源: github.com/badlogic/pi-mono" but links say "earendil-works/pi". I will use `https://github.com/earendil-works/pi/issues/10031` as the link text, or just write the identifier with the repo path. Let's use the standard format: `https://github.com/earendil-works/pi/issues/10031` for issues and `https://github.com/earendil-works/pi/pull/10051` for PRs.

Let's translate the selected issues and PRs accurately.

Drafting the content section by section.

**今日速览:**
- 今日无新版本发布，但社区活跃度高，共有 12 个 PR 更新。
- 核心动态集中在对 TUI 渲染稳定性、AI 推理逻辑（如 Context 管理、Compaction）以及 provider 兼容性的修复。
- `mitsuhiko` 提交了两个重磅 PR（#10040 Codemode & MCP，#10035 Virtual models），为 Pi 引入了实验性沙箱和虚拟模型支持。

**版本发布:**
- 过去 24 小时内无新版本发布。

**社区热点 Issues (Top 10):**
1. **#10031 Pi sporadically stuck in "Working..." when thinking is stopped with <esc>**
   - 链接: https://github.com/earendil-works/pi/issues/10031
   - 重要性: 阻塞性 UX 缺陷。用户在使用 ESC 停止思考时，Pi 经常卡在 "Working..." 状态，必须强制退出重启。自 v0.84.0 起持续发生，影响多台机器。社区讨论热烈（15条评论），提示了严重的用户体验问题。
2. **#9980 Calculated cost for top open models on OpenRouter is off by 2-3x**
   - 链接: https://github.com/earendil-works/pi/issues/9980
   - 重要性: 计费准确性问题。OpenRouter 模型目录使用最低 provider 价格计算成本，导致热门开源模型报价偏差 2-3 倍（如 z-ai/glm-5.3-flash）。这对于关注成本的开发者至关重要。
3. **#10033 Compaction prompt includes all thinking text and exceeds the context window**
   - 链接: https://github.com/earendil-works/pi/issues/10033
   - 重要性: 推理模型核心 Bug。在使用 DeepSeek V4.1 等推理模型时，自动压缩（Compaction）会将历史 thinking 文本全部写入摘要 prompt，导致超出上下文窗口而失败。这限制了长对话的使用。
4. **#9905 Anthropic: thinking.display is always sent as "summarized"**
   - 链接: https://github.com/earendil-works/pi/issues/9905
   - 重要性: API 配置限制。Pi 向 Anthropic 发送的 `thinking.display` 强制为 "summarized"，CLI 无法修改或省略。限制了高级用户的调优空间。
5. **#10024 A mid-run change to the selected tool set moves the head of the system prompt**
   - 链接: https://github

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>



# Qwen Code 社区动态日报 (2026-09-26)

基于过去24小时（数据更新至 2026-09-25）GitHub 仓库 `QwenLM/qwen-code` 的动态，为您整理今日社区发展、技术演进及开发者反馈的核心情报。

---

### 1. 今日速览
*   **架构大步前行**：社区正式提出 **Managed Agent 双路径架构提案**（Issue #12380），标志着 Qwen Code 从单 agent 循环向后台多 agent 协同的关键过渡。
*   **Java SDK 与多工作区集成落地**：夜间版发布引入了 Java

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

Thinking Process:

1.  **Understand the Goal**: The user wants a daily community report (dated 2026-09-26) for the "DeepSeek TUI" community (specifically based on the GitHub repository `Hmbown/DeepSeek-TUI`, though the data provided refers to `Hmbown/Codewhale` issues/PRs - I should treat "Codewhale" / "DeepSeek TUI" as the subject based on the prompt's context, but stick strictly to the provided data). The report needs to be in Chinese, structured into specific sections: Today's Summary, Releases (none), Hot Issues (top 10), Important PRs (top 10), Feature Trends, and Developer Pain Points.

2.  **Analyze the Input Data**:
    *   **Repository**: `github.com/Hmbown/DeepSeek-TUI` (data mentions `Hmbown/Codewhale` issues/PRs, likely a fork, renamed, or the core repo under a code name during development. I will use the provided links and titles).
    *   **Date**: 2026-09-26 (data updated mostly on 2026-09-25 and 2026-09-24).
    *   **Releases**: None in the past 24 hours.
    *   **Issues (26 total, select 10 key ones)**:
        *   #6310 [CLOSED] ACP follow-up: empty terminal responses and Full Access discovery (harryvizcaino-oss, 11 comments) - Bug fix for ACP configuration/posture, verified in nightly build.
        *   #6109 [OPEN] Build the deterministic audiovisual pet across Codewhale surfaces (Hmbown) - Creative feature: persistent dots, whale form, deterministic world/score/replay model across browser, TUI, native.
        *   #6397 [CLOSED] Composer submit chip: finish the paste-burst display fix (Hmbown) - UI fix for composer submit chip paste-burst suppression.
        *   #6579 [CLOSED] test(tui): restore the green Linux full-workspace test gate on main (aboimpinto) - CI/test gate fix.
        *   #6563 [CLOSED] [bug] codewhale config set accepts typos and unknown keys silently (Hmbown) - Config typo silent acceptance bug.
        *   #6585 [OPEN] Make "Whose word wins" checkable: provenance on instructions and memory (Hmbown) - Governance/transparency feature: instruction ranking provenance.
        *   #6582 [OPEN] [enhancement] hooks: structured execution receipt on stdin for shell tool_call_after (wuisabel-gif) - Plugin/MCP hook enhancement for shell command recording.
        *   #6573 [OPEN] [bug] Multiple TUI Sessions Contend on Subagents Store → CPU Spin-loop (Gabriel-Degret) - Critical concurrency bug causing CPU spin loop on FreeBSD.
        *   #6528 [CLOSED] Credential setup: strip invisible characters from pasted keys (Hmbown) - Security/UX fix for API key pasting (BOM, zero-width spaces).
        *   #6500 [CLOSED] [bug] Model selection: pinning a model and adding it to Fleet do not work (Hmbown) - Model selection submenu bug.
        *   #6566 [OPEN] [bug] First run: new users never see onboarding; first message lost or doubled (Hmbown) - Critical onboarding UX bug.
        *   #6565 [OPEN] [bug] Background work: footer shows step chatter, agent names disagree (Hmbown) - UI/UX audit for background work footer.
        *   #6564 [OPEN] Settings by conversation: propose-only settings tool (Hmbown) - Feature request for conversational settings proposal.
        *   #6562 [OPEN] Code mode for MCP and plugins (Hmbown) - Feature design for code mode integration.
        *   #6525 [CLOSED] Official model routing: /router (Hmbown) - CLI command for model routing.
        *   #6553 - #6561 series: Audits on resource limits, fail-open paths, child process lifecycle, idempotency, ordering/TOCTOU, durable writes, unbounded reads, sync/blocking on async runtime (7jrxt42BxFZo4iAnN4CX). These are static audit findings, very important for security and stability.
    *   **PRs (50 total, select top 10 most commented/important ones)**:
        *   #6588 [OPEN] fix(runtime): one turn-loop guard sees sub-agent and RLM loops (Hmbown) - Core loop guard fix.
        *   #6584 [OPEN] fix: remove capability limits that prevent no concrete harm (Hmbown) - Capability limit removal (safety/feature balance).
        *   #6587 [OPEN] fix(tui): right-click reaches every surface (Hmbown) - UX improvement for right-click context menu.
        *   #6600 [OPEN] feat(extensions): TypeScript + Cordis extension host, phase 1 (Hmbown) - Major architectural shift to TS+Cordis for extensions.
        *   #6586 [OPEN] refactor(split): codewhale-runtime crate and boundary ratchet (Hmbown) - Codebase refactoring, runtime/TUI split.
        *   #6578 [OPEN] chore: delete dead workflow code, config flags and env twins (Hmbown) - Cleanup of dead code (~2650 lines).
        *   #6590 [OPEN] feat(web): codewhale.net and its docs in the whale-road direction (Hmbown) - Web/docs redesign.
        *   #6592 [OPEN] fix(tui): first run connects a model, messages are never lost or doubled (Hmbown) - Fixes #6566, major UX fix for new users.
        *   #6591 [OPEN] feat(receipts): list what a session did (Hmbown) - Session receipts feature.
        *   #6583 [OPEN] feat(codemode): MCP and plugin calls in code mode through the one approval gate (Hmbown) - Security gate integration for code mode.
        *   #6589 [OPEN] Workflow truth, safe /share, Claude Code agents, worktree cleanup (Hmbown) - Combined parity batch.
        *   #6581 [CLOSED] test: restore green Linux full-workspace gate (aboimpinto) - Test fixes.
    *   **Dependent PRs (Bot-authored)**: #6599, #6598, #6597, #6596, #6595, #6594, #6593 (dependency bumps). I will mention dependency updates briefly but focus on core PRs.

3.  **Drafting the Sections**:

    *   **Date**: 2026-09-26 (based on prompt's request).
    *   **1. 今日速览 (Today's Summary)**:
        *   Summarize the key developments: DeepSeek TUI (referred to as Codewhale in repo data) is undergoing intensive preparation for version 0.10.0/0.10.1, focusing heavily on architectural refactoring (TypeScript + Cordis extension host, runtime split), critical bug fixes (first-run onboarding, CPU spin-loop, config typos), and security/operational audits (static audit backlog, execution receipts).
    *   **2. 版本发布 (Releases)**:
        *   No new releases in the past 24 hours (v0.10.0 planning is ongoing, nightly builds are being tested).
    *   **3. 社区热点 Issues (Top 10 Hot Issues)**:
        *   Need to select 10 most impactful ones and explain *why* they matter and community reaction (mostly 0 thumbs up but active comments/founder attention).
        *   *Selection criteria*: Security, critical bugs, major features, audits.
        *   List:
            1.  **#6573 [OPEN] CPU Spin-loop Bug**: Multiple TUI sessions contending on Subagents store. Critical performance/ stability bug on FreeBSD. (High priority for multi-session users).
            2.  **#6566 [OPEN] First-run onboarding bug**: New users never see onboarding, messages lost/doubled. Critical blocker for user adoption.
            3.  **#6563 [CLOSED] Config typo silent acceptance**: `codewhale config set` accepts typos and writes to wrong keys silently. Key UX/trust issue.
            4.  **#6528 [CLOSED] Credential setup invisible chars**: Pasted API keys with BOM/zero-width spaces cause 401. Critical security/UX fix.
            5.  **#6585 [OPEN] "Whose word wins" checkable**: Provenance on instructions and memory. Governance/transparency feature requested by founder.
            6.  **#6582 [OPEN] Hooks structured execution receipt**: Shell command recording plugin for Codewhale (MemWhale integration). Interesting extensibility direction.
            7.  **#6562 [OPEN] Code mode for MCP and plugins**: Design research for integrating MCP/plugin tools in code mode. Key for tool ecosystem.
            8.  **#6564 [OPEN] Settings by conversation**: Propose-only settings tool. Major UX shift (conversational config).
            9.  **#6565 [OPEN] Background work footer UI audit**: Fixing step chatter, agent names, cache rate display. Important for long-running task monitoring.
            10. **Audit Series (#6553 - #6561)**: Static audit on sync/blocking work, unbounded reads, fail-open paths, durable writes. Crucial for hardening the system for production. (Group them or pick one representative like #6560 DoS controls or just summarize the audit series as a major hotspot). Let's list #6560 (DoS controls) and #6555 (Durable writes crash-atomicity) as representatives, or just summarize the audit wave. Let's pick individual ones if possible, but summarizing the "Security/Hardening Audit Wave" is a great trend. Let's write them down as key items.
    *   **4. 重要 PR 进展 (Top 10 Important PRs)**:
        *   Select the most impactful ones:
            1.  **#6600 feat(extensions): TypeScript + Cordis extension host**: Major architectural shift. Extensions move to TS/Cordis, Rust core remains authoritative.
            2.  **#6592 fix(tui): First run connects a model, messages never lost**: Fixes #6566. Crucial onboarding fix.
            3.  **#6586 refactor(split): codewhale-runtime crate and boundary ratchet**: Code architecture split (RS-0 to RS-7), enforcing dependency direction.
            4.  **#6583 feat(codemode): MCP and plugin calls in code mode**: Unified approval gate for nested MCP/plugin calls. Security improvement.
            5.  **#6588 fix(runtime): one turn-loop guard**: Fixes loop detection for sub-agents and RLM loops. Core safety guard.
            6.  **#6584 fix: remove capability limits**: Capability-limit removals from the 0.10.1 audit. Safety/feature balance.
            7.  **#6587 fix(tui): right-click reaches every surface**: UX improvement for right-click consistency.
            8.  **#6591 feat(receipts): list what a session did**: New feature for session auditing/transparency.
            9.  **#6578 chore: delete dead workflow code**: Cleanup of ~2650 lines of dead code, improving code health.
            10. **#6589 [OPEN] Workflow truth, safe /share, Claude Code agents**: Combined parity batch (worktree cleanup, provider switch, etc.).
    *   **5. 功能需求趋势 (Feature Trends)**:
        *   *Extensibility & Plugin Ecosystem*: Shift to TypeScript + Cordis extension host (#6562, #6582, #6583, #6600). MCP integration is a major theme.
        *   *Security, Governance & Transparency*: "Whose word wins" instruction provenance (#6585), session receipts (#6591), structured hooks (#6582), strict approval gates (#6583), and the massive static security/hardening audit wave (#6553-#6561).
        *   *User Experience & Onboarding*: Major focus on first-run experience (#6566, #6592), conversational settings (#6564), right-click UX (#6587), and footer/background work visualization (#6565).
        *   *Architectural Hygiene & Performance*: Runtime split (#6586), dead code deletion (#6578), CPU spin-loop fix (#6573), and compaction token efficiency (#6540).
    *   **6. 开发者关注点 (Developer Pain Points / Focus)**:
        *   *New User Friction*: Onboarding flow, message loss, provider picker errors (#6566).
        *   *Multi-session Concurrency*: CPU spin loops when multiple TUI sessions access shared stores (#6573).
        *   *Configuration Reliability*: Silent acceptance of typos and invisible characters in keys (#6563, #6528).
        *   *System Resource and Security Hardening*: Unbounded reads, non-atomic writes, fail-open paths, sync blocking on async runtime (#6553-#6561 series). Developers are actively auditing these.
        *   *Token Efficiency and Compaction*: Compaction failures and high token usage (0% cache hit, ~219k tokens) in summaries (#6540).

4.  **Refining Language and Tone**:
    *   Use professional, concise technical Chinese.
    *   Ensure all links are preserved and correct (format: `[Issue #XXXX](https://github.com/Hmbown/Codewhale/issues/XXXX)` or similar, though the prompt provided links like `Hmbown/Codewhale Issue #6310`, I will construct standard GitHub URLs based on the pattern `https://github.com/Hmbown/Codewhale/issues/XXXX` or the exact links provided in the summary text if available. The prompt says "每个条目附上 GitHub 链接", so I will use the standard format `https://github.com/Hmbown/Codewhale/issues/6310` etc.).
    *   Note: The repo is referred to as `Hmbown/DeepSeek-TUI` in the prompt header but the data lists `Hmbown/Codewhale`. I will mention this alignment (Codewhale is the core component/TUI implementation of DeepSeek-TUI) to avoid confusion, or just refer to it as "DeepSeek TUI (Codewhale)". Let's refer to it as DeepSeek TUI / Codewhale.

Let's double check the exact links:
- Issue #6310: `https://github.com/Hmbown/Codewhale/issues/6310`
- Issue #6109: `https://github.com/Hmbown/Codewhale/issues/6109`
- PR #6588: `https://github.com/Hmbown/Codewhale/pull/6588`
And so on. I will construct standard GitHub URLs.

Let's write down the details for the selected issues and PRs carefully.

**Selected Issues Details:**
*   **#6573 (CPU Spin-loop)**: Crucial bug. Multiple TUI sessions contending on Subagents store leads to CPU spin loop. High priority for stability.
*   **#6566 (First run onboarding)**: Critical UX blocker. New users don't see onboarding, first message lost or doubled.
*   **#6563 (Config typos)**: Silent config write failures (`calm_mode` vs `calm_mode flase`). Affects config trust.
*   **#6528 (Invisible chars in keys)**: API keys pasted with BOM/zero-width spaces fail with 401. Critical security/auth UX fix.
*   **#6585 ("Whose word wins" checkable)**: Adds provenance to instructions and memory, making agent-written text claims transparent. Governance.
*   **#6582 (Hooks structured receipt)**: Shell tool execution receipt via stdin, enabling local SQLite memory (MemWhale). Extensibility.
*   **#6562 (Code mode for MCP/plugins)**: Design for integrating MCP and plugin tools in code mode without re-pinning.
*   **#6564 (Settings by conversation)**: Propose-only settings tool, conversational config editing.
*   **#6565 (Background work footer UI)**: Audit of footer step chatter, agent names, cache rate display.
*   **Audit Wave (#6553-#6561)**: Focus on systemic issues like unbounded reads (#6554), sync blocking on async runtime (#6553), fail-open paths (#6559). Let's highlight #6560 (DoS controls) and #6555 (Durable writes crash-atomicity) as key security hardening items.

**Selected PRs Details:**
*   **#6600 (TS + Cordis Extension Host)**: Phase 1 of TS extension host. Rust core stays authoritative, but extensibility moves to TS. Major milestone.
*   **#6592 (First run fix)**: Fixes #6566. Connects model on first run, prevents message loss/doubling, fixes approval save failures.
*   **#6586 (Runtime split)**: Creates `codewhale-runtime` crate, splits runtime from TUI, adds boundary ratchet (RS-0..RS-7).
*   **#6583 (Codemode MCP gate)**: MCP and plugin calls in code mode go through the single approval gate. Security consistency

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>



根据您提供的 GitHub 数据，以下是为您整理的 **2026-09-26 ComfyUI 社区动态日报**。报告聚焦于过去 24 小时内社区最关注的 Issue、关键 PR 动态、功能趋势以及开发者痛点。

---

# ComfyUI 社区动态日报 (2026-09-26)

## 1. 今日速览
*   **核心修复聚焦多模态与硬件兼容：** 社区当前的工作重心集中在修复主流新模型（如 Qwen Image 2.1、MiniMax H3、YuE2）在不同硬件后端（Windows 多 GPU、MPS、ROCm、XPU）上的崩溃与性能瓶颈。
    *   **工作流与资产性能优化：** 针对长循环的缓存构建二次复杂度问题、资产扫描中的数据库写锁阻塞以及 UI 加载卡顿进行了底层优化，大幅提升了大规模工作流的稳定性。
    *   **生态合作与版本回退：** 官方进行了 v0.37.3 和 v0.37.4 的向后兼容回退（Backport），并合并了多项合作伙伴节点（如 ByteDance Seedance 2.5 Draft 模式）。

---

## 2. 版本发布
*   **无全新版本发布（过去 24 小时内无正式 Release）**，但核心分支的维护 PR 非常活跃：
    *   **v0.37.4 回退合并 (PR #16568)：** 应社区要求，回退了部分不应引入 v0.37.3 的 OSS 模型更改，确保稳定版分支的纯净度。
    *   **v0.37.3 回退合并 (PR

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

Thinking Process:

1.  **Understand the Goal**: The user wants a daily community dynamic report for Ollama (github.com/ollama/ollama) dated 2026-09-26, based on the provided GitHub data (Releases, Issues, Pull Requests). The report must be in Chinese, structured into specific sections, concise, professional, and targeted at technical developers.

2.  **Analyze the Input Data**:
    *   **Date**: 2026-09-26 (covering updates from the last 24 hours, mostly dated 2026-09-25).
    *   **Latest Releases**:
        *   `v0.40.0-rc0`: "Models run on MLX on Apple Silicon by default". Key change: model architectures supported by MLX will automatically run on MLX on Apple Silicon.
    *   **Latest Issues (22 total, select 10 key ones)**:
        *   #18509 (CLOSED, bug): Ollama refusing toolcalls, which worked fine in llama.cpp with qwen. (Tool role parsing issue).
        *   #18368 (OPEN, bug, app, macos): Chat processing fails silently after 60.0 seconds with no GUI notification (macOS GUI). (Prefill timeout issue).
        *   #18091 (CLOSED, feature request): Does Ollama Qwen3.8-27B uses reasoning "xhigh"? (Reasoning level query).
        *   #17099 (OPEN, bug): 0.31.2 regression: vision model memory estimate inflated ~1.2 GiB -> no longer fits in VRAM -> 7x slower generation. (Performance regression).
        *   #18527 (OPEN, bug, cloud): deepseek-v4.1-flash silently discards all image input while advertising `vision` in capabilities. (Cloud vision bug).
        *   #18131 (OPEN): MLX prefix cache: fixed 8 GiB budget causes heavy swap on 32 GB Apple Silicon during agent workloads. (Memory/cache issue).
        *   #18644 (OPEN, bug, mlx): MLX pull path doesn't detect disk full. (Disk space error handling).
        *   #18387 (CLOSED, bug): More than ten ellipses between Titles and Page Numbers in Table of Contents will cause ollama 'cancel task'. (Parser edge case).
        *   #16930 (OPEN, feature request, intel): Proposal: Intel SYCL / oneAPI GPU backend (Arc / Battlemage). (Intel GPU support).
        *   #18293 (OPEN, bug, cloud): Frequent model unavailable errors. (Cloud stability).
        *   #18632 (OPEN, bug): qwen3.8: `think: "high"` / `"max"` silently run the default (`medium`); the model's top level `xhigh` is reachable only by a string outside the documented `think` values. (Parameter validation issue).
        *   #18594 (OPEN): System 1 Models (Kev, Laya). (Feature request for System 1 models).
        *   #17720 (OPEN, model, cloud): Cloud: Qwen3.8. (Request for Qwen3.8 on Cloud).
        *   #18642 (OPEN, bug): CUDA illegal memory access (MUL_MAT) on RTX 5090 with Cohere MoE architecture (Windows). (CUDA crash on RTX 5090).
        *   #18581 (OPEN): Windows CUDA discovery fails (0 B VRAM / CPU fallback) on NVIDIA RTX 50-Series (Blackwell) with Driver 616.92. (Blackwell driver/CUDA support).
        *   #18575 (OPEN, bug): /v1/chat/completions ignores max_tokens AND overrides the Modelfile num_predict default, leaving generation unbounded. (API parameter bug).
        *   #18620 (OPEN): MLX runner: each request that ends in a tool call leaks ~0.43 GiB outside the prefix-cache budget. (Memory leak).
        *   #18655 (OPEN): OpenAI-compatible endpoint: response ids have only 999 possible values. (ID collision issue).
        *   #18653 (OPEN): Cloud API: expose credit balance & true spend after pay-as-you-go migration. (Cloud billing transparency).
        *   #18649 (OPEN, bug): gemma4 parser: valid tool call rejected due to trailing garbage tokens after closing braces. (Parser bug).
        *   #18637 (CLOSED): [Cloud] deepseek-v4.1-flash silently discards image input again — regression of #18527. (Cloud vision regression).
        *   #18638 (CLOSED): [feature request] From 0.34.2 onwards the good feature of chat,code ,&work is missing. (Agent feature regression).
    *   **Latest PRs (select 10 key ones)**:
        *   #18656 (OPEN): Use UUIDs for OpenAI-compatible response ids. (Fixes #18655).
        *   #18606 (OPEN): feat: add System One scoring API. (`POST /v1/systemone`).
        *   #18654 (OPEN): app/ui: keep chat stream alive during slow prefill. (Fixes #18368).
        *   #18652 (OPEN): llama.cpp: version bump b11185.
        *   #18651 (OPEN): MLX: version bump.
        *   #18650 (OPEN): readme: add Arelis to community integrations.
        *   #17834 (OPEN): mlxrunner: implement load progress reporting and stall detection.
        *   #18648 (OPEN): x/transfer: propagate disk-full write errors. (Closes #18644).
        *   #18202 (OPEN): cmd/model: add offline model diff tool.
        *   #16852 (CLOSED): feat: improve CLI navigation, implement atomic manifest writes, and add local model filtering.
        *   #16851 (CLOSED): fix(cli): abort interactive mode with error when stdout is redirected without prompt.
        *   #17621 (OPEN): llm: add Intel oneAPI (SYCL) GPU backend. (Addresses #16930).
        *   #18647 (OPEN): readme: add Future AGI to Observability & Monitoring.
        *   #18646 (OPEN): fix: increase model name component length limit from 80 to 128.
        *   #18645 (OPEN): fix: accept apps in /Applications subdirectories and ~/Applications.
        *   #18643 (OPEN): app/cmd/app: accept bundles in Applications subdirectories.
        *   #18641 (OPEN): server: print large integer parameters in show modelfiles without exponents.
        *   #18640 (OPEN): model/parsers: resolve escapes in lfm2 quoted tool call arguments.
        *   #18639 (OPEN): openai: keep the tool call id and name on tool results sent as content parts.
        *   #17144 (OPEN): server: allow parallel requests for qwen35 / qwen35moe now that the upstream llama.cpp crash is fixed.

3.  **Drafting the Report Structure**:

    *   **Header**: Title (Ollama 社区动态日报 - 2026-09-26).
    *   **1. 今日速览 (Today's Overview)**:
        *   Summarize the core highlights: Ollama released `v0.40.0-rc0`, bringing major Apple Silicon MLX default support. Community activity is high, focusing on cloud model stability, CUDA/MLX performance regressions, and tool call parsing bugs. Several PRs address critical bugs like macOS GUI silent failures and OpenAI ID collisions.
    *   **2. 版本发布 (Version Release)**:
        *   `v0.40.0-rc0`: Focus on MLX default execution on Apple Silicon for supported architectures. Show simple pull/run commands.
    *   **3. 社区热点 Issues (Top 10 Key Issues)**:
        *   Select the 10 most impactful ones (prioritizing bugs with high impact, regressions, and feature requests).
        *   *Selection rationale*: Tool call parsing regression (#18509), macOS silent failure (#18368), vision model performance regression (#17099), cloud vision bug (#18527), MLX prefix cache memory swap (#18131), CUDA/RTX 5090 crash (#18642, #18581), Qwen3.8 thinking level bug (#18632), MLX tool call memory leak (#18620), OpenAI API max_tokens ignored (#18575), Cloud billing transparency (#18653).
        *   Format: Title, link, summary, why it matters/community reaction.
    *   **4. 重要 PR 进展 (Top 10 Key PRs)**:
        *   Select 10 key PRs.
        *   *Selection*: UUID fix for OpenAI IDs (#18656), System One scoring API (#18606), macOS chat stream keep-alive (#18654), Intel SYCL backend (#17621), disk-full error propagation (#18648), MLX load progress/stall detection (#17834), model name length limit increase (#18646), lfm2 tool call escape resolution (#18640), qwen35 parallel request unblock (#17144), large integer parameter formatting (#18641).
    *   **5. 功能需求趋势 (Feature Request Trends)**:
        *   Summarize key directions: Intel GPU support (SYCL/oneAPI), System 1 models integration, Cloud model availability (Qwen3.8, billing transparency), better tool call/API compatibility (OpenAI standard).
    *   **6. 开发者关注点 (Developer Pain Points & Focus)**:
        *   Summarize core pain points: tool call parsing fragility (role parsing, trailing garbage), hardware support gaps (NVIDIA RTX 50-series Blackwell CUDA detection, Apple Silicon memory leaks/swaps), API compatibility issues (max_tokens, response ID collisions), and cloud service stability/billing.

4.  **Refining and Translating to Chinese (Technical Tone)**:
    *   Ensure terms like "MLX", "Apple Silicon", "prefill", "VRAM", "tool calls", "CUDA", "SYCL/oneAPI", "Blackwell" are translated or kept in standard engineering Chinese context (e.g., 苹果硅片 MLX 加速, 显存, 工具调用, 预填充).
    *   Keep summaries concise and punchy.

Let's do a quick draft of the specific items to ensure accuracy based *only* on the provided text.

*   *Release v0.40.0-rc0 detail*: "Models run on MLX on Apple Silicon by default... model architectures supported by the MLX runtime will automatically run on MLX." Commands: `ollama pull qwen3.8`, `ollama run qwen3.8`.
*   *Issue #18509*: Tool role parsing bug. "My 'tool' role always worked fine in llama.cpp but ollama breaks my client refusing my 'tool' answers."
*   *Issue #18368*: macOS GUI chat fails silently after 60s. Prefill takes too long, WKWebView aborts request.
*   *Issue #17099*: Regression in 0.31.2 causing vision model (gemma4:31b) memory estimate inflated, leading to slow generation (33.8 -> 4.7 tok/s).
*   *Issue #18527*: deepseek-v4.1-flash:cloud silently discards images despite advertising `vision` capability.
*   *Issue #18131*: MLX prefix cache fixed 8 GiB budget causes heavy swap on 32 GB Macs.
*   *Issue #18644*: MLX pull path doesn't detect disk full (manifest write error).
*   *Issue #16930*: Proposal for Intel SYCL/oneAPI GPU backend.
*   *Issue #18632*: Qwen3.8 thinking level parameter bug. `think: "high"` runs default `medium`, `xhigh` only reachable via undocumented string.
*   *Issue #18642*: CUDA illegal memory access on RTX 5090 with Cohere MoE on Windows.
*   *Issue #18581*: Windows CUDA discovery fails on RTX 50-series (Blackwell), falls back to CPU (0 B VRAM).
*   *Issue #18575*: `/v1/chat/completions` ignores `max_tokens` and overrides Modelfile `num_predict`.
*   *Issue #18620*: MLX runner tool call memory leak (~0.43 GiB per request).
*   *Issue #18655*: OpenAI-compatible response IDs only have 999 possible values (`rand.Intn(999)`).
*   *Issue #18653*: Cloud API credit balance and spend after pay-as-you-go migration.

Let's organize the selected 10 issues:
1.  **#17099 (bug): vision model regression in 0.31.2** (Performance drop 7x due to VRAM estimation). High impact for local Mac users.
2.  **#18509 (CLOSED, bug): Toolcalls refusing tool answers** (Role parsing issue, critical for agent workflows).
3.  **#18368 (bug, macos): Chat processing fails silently after 60s** (UX/UI and prefill timeout issue).
4.  **#18632 (bug): Qwen3.8 thinking level parameter mismatch** (`high` runs `medium`, `xhigh` undocumented).
5.  **#18581 & #18642 (bug): CUDA support on RTX 50-series (Blackwell) and Cohere MoE crash** (Crucial for high-end Windows GPU users).
6.  **#18527 & #18637 (CLOSED, bug, cloud): deepseek-v4.1-flash silently discards images** (Cloud vision capability bug).
7.  **#18620 (bug): MLX runner tool call memory leak (~0.43 GiB/request)** (Memory leak under agent workload).
8.  **#18575 (bug): OpenAI API ignores max_tokens / overrides num_predict** (Critical API contract bug).
9.  **#18131 (bug): MLX prefix cache swap on 32GB Apple Silicon** (Memory tuning issue).
10. **#16930 (feature) & #18594 (feature): Intel GPU backend & System 1 models** (Strategic feature requests).

Let's organize the selected 10 PRs:
1.  **#18656 (OPEN): Use UUIDs for OpenAI-compatible response ids** (Fixes ID collision in proxies like LiteLLM).
2.  **#18654 (OPEN): app/ui: keep chat stream alive during slow prefill** (Fixes #18368, prevents macOS 60s timeout).
3.  **#18606 (OPEN): feat: add System One scoring API** (`POST /v1/systemone`).
4.  **#17621 (OPEN): llm: add Intel oneAPI (SYCL) GPU backend** (Addresses #16930).
5.  **#18648 (OPEN): x/transfer: propagate disk-full write errors** (Closes #18644).
6.  **#18640 (OPEN): model/parsers: resolve escapes in lfm2 quoted tool call arguments** (Improves tool call parsing robustness).
7.  **#18639 (OPEN): openai: keep the tool call id and name on tool results sent as content parts** (OpenAI compatibility fix).
8.  **#17144 (OPEN): server: allow parallel requests for qwen35 / qwen35moe** (Unblocks parallel inference for hybrid architecture).
9.  **#18646 (OPEN): fix: increase model name component length limit from 80 to 128** (Fixes HuggingFace pull issues).
10. **#17834 (OPEN): mlxrunner: implement load progress reporting and stall detection** (Improves UX for slow loads).

Let's write down the summary sections cleanly.

### Section 1: 今日速览
Ollama 发布了 `v0.40.0-rc0` 预览版，核心更新为在 Apple Silicon 设备上默认启用 MLX 运行时加速。社区方面，开发者对工具调用（Tool Calls）的解析稳定性、显存估算回归（导致视觉模型性能骤降）以及对英伟达 RTX 50 系列（Blackwell）的 CUDA 支持表达了高度关注。多个关键 PR 正在推进，旨在解决 OpenAI 兼容接口的 ID 冲突、macOS 前置填充超时静默失败等问题。

### Section 2: 版本发布
*   **v0.40.0-rc0**: 主打 **Apple Silicon 默认启用 MLX 加速**。对于 MLX 运行时支持的模型架构，将自动在 Mac 的 MLX 框架上运行，无需手动配置，显著提升苹果芯片上的推理效率。用户可通过 `ollama pull qwen3.8` 和 `ollama run qwen3.8` 快速体验。

### Section 3: 社区热点 Issues (Top 10)
(Format: Title, Link, Summary, Importance)
*   **

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>



# llama.cpp 社区动态日报 — 2026-09-26

---

## 1. 今日速览

今日社区活跃度高，发布节奏紧凑（单日 10 个 Release 候选），修复覆盖 Windows 路径、OpenCL/Vulkan/Metal 后端、音频预处理等多个模块。同时，K2 Horizon 模型支持、GraniteSpeech5ForCTC 新架构、W4A4 低精度推理路径等新特性持续推进，社区在 KV 统一缓存、工具调用性能、多 GPU 场景下的 Bug 反馈较为集中。

---

## 2. 版本发布

今日共发布 10 个版本（b11180–b11191），核心更新如下：

| 版本 | 关键变更 |
|------|----------|
| **b11191** | `common,rpc`：简化 `fs_create_directory_with_parents()`，修复 Windows 下部分 Unicode 路径无法创建目录的问题；无尾部斜杠的路径现在也会创建末级目录，与函数名语义一致。 |
| **b11190** | `mtmd`：修复 LFM2 音频预处理中 mel 特征计算，使用 `log(x + 2^-24)` 替代 clamp 到 log floor，使英文 4.5%、日文 6.5% 的测试语音 greedy 转录结果与之前一致。 |
| **b11189** | `opencl`：新增 A8 Q5_K 二进制 GEMM kernel（非 MoE，含 dp4a 变体），并修复 bin kernel 的 s 转置逻辑。 |
| **b11188** | `vulkan`：修复旧版 GLSLC（无 `KHR_cooperative_matrix` 支持）导致的构建失败，增加 `GGML_VULKAN_COOPMAT_GLSLC_SUPPORT` 宏检查。 |
| **b11185** | `common`：提取共享的 Unicode 路径/字符串辅助函数，统一跨平台处理。 |
| **b11184** | `metal`：新增 FWHT kernel，支持 block width > 512（64–512 之外的更大宽度）。 |
| **b11183** | `metal`：将 FA kernel 拆分为按 dtype 分库的结构，便于维护与按需链接。 |
| **b11182** | `llama`：新增 `llama_prec_policy` + 模型驱动 W4A4 推理路径（NVIDIA 贡献）。 |
| **b11181** | `HIP`：提升 fp8 所需 HIP 版本要求，避免 6.2 版本缺少 `__hip_fp8_e4m3` 的问题。 |
| **b11180** | `rpc`：`get_alloc_size` 缓存 key 纳入 `nb`，结果 floor 到 `ggml_nbytes`。 |

🔗 官网：https://llama.app  
🔗 完整 Release 列表：https://github.com/ggml-org/llama.cpp/releases

---

## 3. 社区热点 Issues（Top 10）

### 🔴 #24132 — gemma-4-E4B-it-Q4_0.gguf 触发 `GGML_ASSERT(n_inputs < GGML_SCHED_MAX_SPLIT_INPUTS)` 崩溃
- **链接**：https://github.com/ggml-org/llama.cpp/issues/24132
- **状态**：CLOSED / stale，14 条评论
- **影响**：CUDA + V100 + Gemma 4 E4B Q4_0 模型，调度器分片输入超限。社区长期未修复，可能涉及调度器设计上限。

### 🔴 #7218 — CUDA 初始化失败：`unknown error`（3090 + `LLAMA_CUDA=1`）
- **链接**：https://github.com/ggml-org/llama.cpp/issues/7218
- **状态**：CLOSED / stale，12 条评论
- **影响**：编译成功但运行时 CUDA 不可用，模型回落 CPU。属于历史遗留的初始化检测问题。

### 🟡 #25150 — preset 名称变更导致部分 preset 被静默忽略
- **链接**：https://github.com/ggml-org/llama.cpp/issues/25150
- **状态**：CLOSED / stale，12 条评论，4 👍
- **影响**：`llama-server` 预设名变更后用户无感知，可能影响推理参数配置。社区关注命名/兼容性。

### 🟠 #28211 — HIP/ROCm on gfx1151（Strix Halo）长 prompt 产生错误 logits
- **链接**：https://github.com/ggml-org/llama.cpp/issues/28211
- **状态**：OPEN，12 条评论
- **影响**：AMD Strix Halo APU 上 prompt 超过 `n_ubatch` 后输出错误（非崩溃），直接影响可用性。

### 🔵 #29022 — 工具调用功能请求：基于 Prefill Logit Slicing 的快速门控与单趟选择
- **链接**：https://github.com/ggml-org/llama.cpp/issues/29022
- **状态**：OPEN，10 条评论，3 👍
- **影响**：当前工具选择需完整生成再判断，延迟高。此功能可大幅提升 function calling 效率。

### 🔴 #25992 — `-np 4 --kv-unified` 在 HIP 集成 GPU 上返回其他请求的完整响应
- **链接**：https://github.com/ggml-org/llama.cpp/issues/25992
- **状态**：OPEN，10 条评论，12 👍
- **影响**：严重并发数据污染问题，大 prompt 收到其他请求的原文回答。已定位到 `c7d87229`，涉及 KV 统一缓存的请求隔离。

### 🟡 #29104 — VictoriaMetrics 抓取 `/metrics` 导致 server 静默停止处理
- **链接**：https://github.com/ggml-org/llama.cpp/issues/29104
- **状态**：OPEN，8 条评论
- **影响**：Windows + CUDA + 双 5070Ti 环境，监控抓取触发服务假死，运维场景高危。

### 🟠 #28495 — `-np 2 --kv-unified` 下第二个长请求起 prompt 处理性能下降 42–54%
- **链接**：https://github.com/ggml-org/llama.cpp/issues/28495
- **状态**：OPEN，8 条评论
- **影响**：已定位到 CUDA/HIP flash-attention kernel 对 KV mask 尾部裁剪不完整，导致内部无效块仍被计算。

### 🟢 #29424 — 新增 K2 Horizon 系列模型支持（0.9B/3.7B/7B/32B/36B MoVA）
- **链接**：https://github.com/ggml-org/llama.cpp/issues/29424
- **状态**：OPEN，7 条评论，1 👍
- **影响**：新模型架构（MoVA）需要解析与推理支持，社区关注度持续上升。

### 🟢 #6311 — 新增 `llama_load_model_from_buffer()` API
- **链接**：https://github.com/ggml-org/llama.cpp/issues/6311
- **状态**：OPEN，7 条评论，6 👍
- **影响**：与 `llama_load_model_from_file()` 互补，支持从内存 buffer 加载模型，对嵌入式/自定义加载场景价值高。

---

## 4. 重要 PR 进展（Top 10）

### ✅ #29446 — 新增 `GraniteSpeech5ForCTC` 模型架构支持
- **链接**：https://github.com/ggml-org/llama.cpp/pull/29446
- **说明**：支持 IBM Granite Speech 5.0 470M TurboCTC（非自回归、encoder-only），引入全新增量代码路径。

### ✅ #27861 — GPU 驻留 LRU 缓存：主机卸载 MoE 专家权重
- **链接**：https://github.com/ggml-org/llama.cpp/pull/27861
- **说明**：对 `-ot ...exps=CPU` / `-ncmoe` 等场景，将最近使用的专家权重缓存于 GPU，解码阶段不再每 token 从主机 RAM 拉取，显著提升吞吐。

### ✅ #29423 — CPU 平铺 Flash Attention：x86 支持非向量倍数 head size
- **链接**：https://github.com/ggml-org/llama.cpp/pull/29423
- **说明**：移除 head size 必须为 SIMD 宽度倍数的限制（如 head size=72），此前会回退到慢速 per-query kernel，性能提升一个数量级。

### ✅ #29430 — `llama-quantize` 新增 `--verify` 标志
- **链接**：https://github.com/ggml-org/llama.cpp/pull/29430
- **说明**：量化后自动 reload 输入/输出 GGUF，逐张量反量化并输出 JSON（max_abs_error、rms_error、150 桶直方图），量化质量可审计。

### ✅ #29442 — BF16/FP16 转 FP32 分块转换，降低 VRAM 占用
- **链接**：https://github.com/ggml-org/llama.cpp/pull/29442
- **说明**：通过 `GGML_CUDA_CUBLAS_CONVERT_CHUNK_SIZE` 控制分块大小，默认 0（关闭/全性能），可显著降低转换期显存峰值。

### ✅ #29030 — qwen4exp/gemma4：惰性张量行直接读取（替代 mmap 模式）
- **链接**：https://github.com/ggml-org/llama.cpp/pull/29030
- **说明**：引入 `llama_graph_lazy_rows` + `llama-lazy-reader`，用直接读取替代 mmap-backed 模式，简化实现并减少内存映射开销。

### ✅ #28849 — 统一 KV 下自动适配最大上下文长度
- **链接**：https://github.com/ggml-org/llama.cpp/pull/28849
- **说明**：自动适配现在尝试 model context × parallel slots，与非统一 KV 行为对齐，提升并发容量。

### ✅ #29440 — RPC：使用 RDMA completion channel 替代轮询
- **链接**：https://github.com/ggml-org/llama.cpp/pull/29440
- **说明**：当前 RPC 服务端 `rdma_poll` 持续 100% 旋转，改为 arm completion channel 后线程可在有完成事件时唤醒。

### ✅ #29273 — CI oneAPI 工具链升级至 2026.1
- **链接**：https://github.com/ggml-org/llama.cpp/pull/29273
- **说明**：从 oneAPI 2025.3.3（DLE）迁移至 2026.1 统一工具包，保持 oneDNN 支持（因 2026.0 起 DLE 已移除 oneDNN）。

### ✅ #29434 — HF 下载进度条显示已下载/总大小
- **链接**：https://github.com/ggml-org/llama.cpp/pull/29434
- **说明**：进度条百分比旁显示 `[0.56 / 0.78 GB]`，利用已有 `p.downloaded` / `p.total` 字段，提升用户体验。

---

## 5. 功能需求趋势

从本周 Issues 与 PR 可提炼出以下社区关注方向：

| 方向 | 相关 Issue/PR | 热度 |
|------|---------------|------|
| **新模型架构支持** | K2 Horizon（#29424）、GraniteSpeech5ForCTC（#29446）、Gemma 4 / Qwen4 系列适配 | ⭐⭐⭐⭐⭐ |
| **工具调用 / Function Calling 性能** | Fast Tool Gating（#29022）、MTP 推理回归（#29410） | ⭐⭐⭐⭐ |
| **KV 统一缓存（--kv-unified）** | 请求污染（#25992）、性能下降（#28495）、自动适配上下文（#28849） | ⭐⭐⭐⭐⭐ |
| **多 GPU / 多

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*