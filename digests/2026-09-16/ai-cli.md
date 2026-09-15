# AI CLI 工具社区动态日报 2026-09-16

> 生成时间: 2026-09-15 22:15 UTC | 覆盖工具: 12 个

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

**重要更新**

* **Claude Code v2.1.273** – 为 LLM 网关场景新增 5 个可选请求头（`x-claude-code-request-class`、`x-claude-code-agent-type` 等），需通过 `CLAUDE_CODE_GATEWAY_HINT_HEADERS=1` 启用。待办事项已发布，可选性地增强企业自建网关的可观测性。
  https://github.com/anthropics/claude-code/releases/tag/v2.1.273

* **OpenAI Codex – Rust 预发布 0.155.0‑alpha 系列** – 过去 24 小时发布了四个 alpha 版本 (`rust-v0.155.0-alpha.7`、`.6`、`.5`、`.2.4`），目前主要围绕 0.155 分支进行密集开发，暂无变更日志。
  https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.7

* **Gemini CLI v0.60.0 稳定版和 v0.61.0‑preview.0** – 核心修复包括 OAuth refresh token 丢失修复（#29339）、UI 渲染中负尺寸边框导致的 `RangeError`（#29347）和 Node 23+ 下取消请求时的 AbortError 泄漏（#29343），同时发布稳定的 v0.60.0 和预览的 v0.61.0。
  https://github.com/google-gemini/gemini-cli/releases/tag/v0.60.0

* **GitHub Copilot CLI v1.0.84-9** – 优化上下文管理（新增 `/settings` 选项以启用上下文工具）、改进大会话历史元数据扫描，并修复换行时 End/Ctrl+E 无法跳转到真结束位置的问题。
  https://github.com/github/copilot-cli/releases/tag/v1.0.84-9

* **OpenCode v1.18.30 – 严重回归** – `SystemPrompt.environment` 属性引发 `TypeError: undefined is not an object (evaluating 'a.name')`，导致所有提示直接崩溃（相关 Issues #48645、#48372、#49158）。
  https://github.com/anomalyco/opencode/issues/48645

* **Ollama v0.34.2‑rc0** – 更新底层 llama.cpp 以支持下一代模型和增强兼容性，rc0 版本发布用于预检。
  https://github.com/ollama/ollama/releases/tag/v0.34.2-rc0

* **llama.cpp 仓库 – 多个 back‑end 发布 (b10976–b10988)** – 新增 Vulkan 稀疏 Flash Attention（DSV4/GLM）、CUDA 行连续 SUM_ROWS、Metal MiniCPM3 FA（HSK=96 / HSV=64）、OpenCL 通用 `ssm_scan` 和 MoE GEMM 调度，以及 ROCm、Metal、OpenVINO 等后端的各种优化和 bug 修复。
  https://github.com/ggerganov/llama.cpp/releases

* **ComfyUI – aimdo 0.5.5 热修复 (PR #16333)** – 升级 DynamicVRAM 兼容性，解决 Windows BSOD、多卡并发崩溃、AMD 显卡输出噪声等严重问题，并修复 MiniMax H3 视频模型的 shape/VRAM 缺陷。
  https://github.com/comfyanonymous/ComfyUI/pull/16333

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

## Claude Code Skills 社区热点报告（2026-09-16）

---

### 1. 热门 Skills 排行

| Skill | 功能概述 | 讨论热点 | 状态 | 链接 |
|-------|----------|----------|------|------|
| **md2video-audio** | 将 Markdown 编译为带音频的 MP4 视频 | 高性价比内容生成技能 | OPEN | [PR #1703](https://github.com/anthropics/skills/pull/1703) |
| **Hivemind** | 多智能体编排：Claude Code 规划，OpenCode 执行 | 分布式 agent 协作范式探索 | OPEN | [PR #1628](https://github.com/anthropics/skills/pull/1628) |
| **pyxel skill** | 像素艺术 / 8-bit 游戏开发 MCP | 面向创作者的游戏开发支持 | OPEN | [PR #525](https://github.com/anthropics/skills/pull/525) |
| **scnet-hpc skill** | SCNet HPC 集群 SSH + Slurm 操作 | 高性能计算工作流集成 | OPEN | [PR #1615](https://github.com/anthropics/skills/pull/1615) |
| **Buffer API Agent Skill** | 社交媒体调度与管理 GraphQL API | 跨平台社交内容管理自动化 | OPEN | [PR #1627](https://github.com/anthropics/skills/pull/1627) |
| **skill-quality-analyzer/security-analyzer** | 元技能：评估其它 Skill 质量或安全性 | 技能治理工具需求强 | OPEN | [PR #83](https://github.com/anthropics/skills/pull/83) |
| **document-typography skill** | AI生成文档的排版优化 | 文档生产质量保障 | OPEN | [PR #514](https://github.com/anthropics/skills/pull/514) |

---

### 2. 社区需求趋势

- **文档生产与优化**：typography、docx/pptx/odt 编辑、pdf 处理等文档处理技能备受关注。
- **多智能体协作**：希望扩展 Claude Code 在复杂工作流中的代理编排能力。
- **跨平台集成**：如 social media scheduling、HPC 集群操作等行业场景的集成呼声高。
- **技能安全与质控元工具**：开发者希望有能力自动化评估技能的安全性与质量。
- **内容生成增强**：视频、音频、图像等多媒体生成技能日益热门。

---

### 3. 高潜力待合并 Skills

| PR | 功能 | 活跃度 | 链接 |
|----|------|--------|------|
| **#1769** | 修复 skill-creator 触发率为 0% 的问题 | 刚提且更新频繁 | [链接](https://github.com/anthropics/skills/pull/1769) |
| **#1724** | 更新 mcp-builder 默认模型为 claude-sonnet-5 | 最近活跃 | [链接](https://github.com/anthropics/skills/pull/1724) |
| **#1765** | 修复 office redlining 编码问题 | 短期内提交 | [链接](https://github.com/anthropics/skills/pull/1765) |
| **#525** | pyxel 游戏引擎 MCP | 长期活跃 | [链接](https://github.com/anthropics/skills/pull/525) |
| **#514** | document-typography 排版优化技能 | 长期活跃 | [链接](https://github.com/anthropics/skills/pull/514) |

---

### 4. Skills 生态洞察

> 社区最集中的诉求是让 Claude Code Skills 更加安全、可靠，并且支持企业级与多媒体工作流。

---

---

# Claude Code 社区动态日报（2026-09-16）

> 数据来源：github.com/anthropics/claude-code

---

## 一、今日速览

1. 发布两个版本：**v2.1.273** 为 LLM 网关新增 5 个请求头提示（gateway hint headers），**v2.1.272** 仅含 bug 修复与可靠性改进。
2. 过去 24 小时内更新的 30 条 Issues **全部处于 CLOSED 状态**，且绝大多数带有 `stale` 标签，基本可判断为一次批量过期清理，而非新问题爆发。
3. PR 侧仅有 1 条更新（#94594），聚焦 diff 面板在大仓库下的启动性能，属于典型的"启动阻塞"优化。

---

## 二、版本发布

### v2.1.273
为 LLM 网关/代理场景新增请求头透传能力，需通过 `CLAUDE_CODE_GATEWAY_HINT_HEADERS=1` 显式开启：
- `x-claude-code-request-class`
- `x-claude-code-agent-type`
- `x-claude-code-prev-tool-durations`
- `x-claude-code-compaction`
- `x-claude-code-context-compacted`

**解读**：这是面向企业自建网关的可观测性增强——网关侧可以据此做请求分类、成本归因、Agent 类型路由和压缩状态判断。默认关闭（opt-in）说明官方对头部体积/兼容性仍持谨慎态度。此外更新日志中还有一条被截断的"新增通知"条目。

### v2.1.272
`Bug fixes and reliability improvements`，无具体条目。

---

## 三、社区热点 Issues（精选 10 条）

> ⚠️ 注意：以下 10 条在当前数据中均为 **CLOSED**，部分带 `stale` 标签。它们的价值在于反映**长期积累的结构性痛点**，不代表今日新增。

**1. [#61099] Memory 文件 YAML frontmatter 被静默重写（data-loss）**
`Write`/`Edit` 工具写入 memory 目录下的 Markdown 时会悄悄改写 frontmatter：顶层键被嵌套进 `metadata:`、`description` 在 `#` 处被截断、`name` 被 slug 化。标记为 `data-loss` + `has repro`，是本期**风险等级最高**的一条——静默数据破坏且无法 opt-out。
🔗 https://github.com/anthropics/claude-code/issues/61099

**2. [#72745] 跨会话上下文不保留导致质量回归**
同一任务跨 session 时系统性丢失操作上下文，重复犯同样的错、反复重开同一问题。属于模型/记忆层面的体验回归。
🔗 https://github.com/anthropics/claude-code/issues/72745

**3. [#63807] 由 Claude 自主触发 context compaction（👍3）**
作者给出了可用 workaround 并附原生实现提案，且汇总了 #16960、#28559、#33026、#38925 等 5 个重复需求。**这是社区呼声最集中的单一能力缺口**，也与 v2.1.273 新增的 `x-claude-code-compaction` 头部形成呼应。
🔗 https://github.com/anthropics/claude-code/issues/63807

**4. [#63842] 会话选择性保留/书签（👍5，本期最高）**
当前 `cleanupPeriodDays` 是"一刀切"删除所有超期 session JSONL，用户被迫在"省磁盘"和"丢历史"之间二选一。请求支持 pin/bookmark 重要会话。
🔗 https://github.com/anthropics/claude-code/issues/63842

**5. [#73067] `claude -p` 认证错误写入 stdout 而非 stderr**
非交互模式下 rc=1 但错误信息跑到 stdout，stderr 为空，直接破坏 CI/脚本的错误捕获逻辑。典型的自动化场景可用性缺陷。
🔗 https://github.com/anthropics/claude-code/issues/73067

**6. [#74738] 原生更新器生成自引用相对符号链接 → ELOOP（第三次复发）**
`~/.local/bin/claude` 被改写成自引用链接，导致执行失败。这是 #45260、#62822 之后的**第三次回归**，说明修复未根治。
🔗 https://github.com/anthropics/claude-code/issues/74738

**7. [#86320] Bash 工具 grep→ugrep shim 退出码语义不兼容**
某操作数文件缺失、但另一操作数命中时，shim 返回 2，而 GNU grep / POSIX `-q` 返回 0。会误伤依赖退出码的脚本与 Agent 判断逻辑。
🔗 https://github.com/anthropics/claude-code/issues/86320

**8. [#73320] `DISABLE_TELEMETRY` / `DO_NOT_TRACK` 静默禁用终端鼠标点击**
隐私开关与终端交互能力产生非预期耦合，且无任何提示。属于"隐式副作用"类缺陷。
🔗 https://github.com/anthropics/claude-code/issues/73320

**9. [#77982] `--resume` 选择器把有真实内容的会话标成 `(session)`**
标题查找只读取文件头尾各 64KB，命中与否纯靠运气，导致恢复会话时难以辨识目标。
🔗 https://github.com/anthropics/claude-code/issues/77982

**10. [#84705] 子代理完成通知的 token 统计过于粗糙**
仅给出单一 `subagent_tokens` 汇总，缺少 input/output/cache 拆分、未标明解析到的实际模型、被 kill 的 agent 未覆盖。对做**成本归因**的编排工作流不可用。
🔗 https://github.com/anthropics/claude-code/issues/84705

**其他值得一瞥**：
- [#86194] `claude plugin update` 未刷新 url 源市场条目的 `gitCommitSha`（插件版本漂移）
- [#84800] 请求将工作区外目录的**读信任与写信任解耦**，避免反复点确认
- [#85130] 建议默认不把开发历史写进代码注释/docstring（👍2）
- [#84532] Claude Apps Gateway 使用容器服务账号凭据做 Google Group OIDC 查询（👍2）

---

## 四、重要 PR 进展

> ⚠️ 数据说明：过去 24 小时内更新的 PR **仅 1 条**，无法凑足 10 条。以下如实呈现，不做虚构补位。

**[#94594] diff：按内置面板的时机运行 git，而非在会话启动时（CLOSED）**
`mods/diff` 原本在 `session.start` 钩子里就把仓库"钉死"：执行一次 `git rev-parse`，再对**整个工作树**跑 `git status --porcelain -z --untracked-files=all`，且两者都是 await。由于引擎会**等待 `session.start` 完成才放行首个 prompt**，在超大仓库中这会直接拖慢会话首响。该 PR 将 git 调用推迟到内置 diff 面板真正需要时执行。
**价值**：典型的"启动路径阻塞"性能修复，对大 monorepo 用户体验改善明显。
🔗 https://github.com/anthropics/claude-code/pull/94594

---

## 五、功能需求趋势

从本期全部 Issues 标签与内容提炼，社区关注方向集中在以下五条主线：

| 方向 | 代表 Issue | 趋势判断 |
|---|---|---|
| **上下文与记忆管理** | #63807、#72745、#61099、#63842 | 最热赛道。自主压缩、跨会话记忆、记忆文件完整性、会话保留策略四者构成一个完整诉求簇 |
| **企业网关与可观测性** | #84532、v2.1.273 头部透传 | 随自建网关普及而上升，官方已开始响应（见新版本） |
| **CLI/自动化可用性** | #73067、#86320、#77982 | stdout/stderr 语义、退出码兼容、会话恢复可读性——均为脚本与 CI 场景刚需 |
| **权限与安全边界** | #84800、#84707、#63343 | 读写信任解耦、云端会话限定单仓库、PreToolUse 高危警告醒目化 |
| **多端体验对齐** | #84676、#84592、#84649、#84586 | iOS / Android / Web / Desktop 的上下文指示器、命令提示、产物分享存在明显能力落差 |

次要但持续出现的诉求：TUI 自定义（#65013 自定义模式、#84752 权限模式排序）、Hooks 能力扩展（#64643 PostAssistantMessage、#63982 工作流后置钩子）、插件与 Skills 生态（#86194、#84611）。

---

## 六、开发者关注点

1. **静默行为最招反感**：memory frontmatter 重写（#61099）、隐私开关关掉鼠标点击（#73320）、认证错误走错流（#73067）——三者共同点是"没有提示、无法关闭、难以排查"。开发者能接受限制，但很难接受不可见的行为变更。

2. **"可 opt-out"应成为默认设计原则**：多个 Issue 明确抱怨"none requested or opt-out-able"。

3. **长期回归比新 bug 更伤信任**：#74738 的符号链接缺陷已第三次复发，重复出现的问题会显著降低对发布质量的信心。

4. **成本与可归因性成为刚需**：#84705 要求 token 按 input/output/cache 拆分并标注实际模型——说明已有相当规模的用户在把 Claude Code 用于需要计费核算的编排工作流。

5. **非交互模式是"第二公民"**：#73067、#77982、#86320 都指向 `-p`/脚本/CI 路径的粗糙之处，建议官方把 headless 场景纳入回归测试基线。

6. **多端 parity 焦虑**：移动端/桌面端在上下文指示、命令提示、产物分享上落后于 Web 与 CLI，远程驱动长任务的用户感受尤深。

---

*本期数据中 Issues 均为历史条目的集中清理更新，PR 样本量极小，趋势判断主要基于标签分布与摘要内容，请结合后续数据持续观察。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-09-16** ｜ 数据来源：github.com/openai/codex

---

## 一、今日速览

1. Rust 核心连续发布 4 个 `v0.155.0-alpha` 系列预发布版本，主要围绕 0.155 分支迭代，暂无公开变更说明。
2. 社区讨论集中在 **用量/额度透明度**（Credit 账本冻结、GPT-6 Astra 额度消耗过快、wait 轮询浪费 token）与 **Windows 平台稳定性**（沙箱、插件、写操作挂起）两大主题。
3. PR 侧出现大量由 `copyberry[bot]` 提交并合并的改动，重点覆盖 **Analytics 用量分析面板**、**Windows 沙箱路由与卸载清理**、**Guardian 检查点迁移**以及 **Python SDK 图像输入兼容性**。

---

## 二、版本发布

过去 24 小时内共发布 4 个 Rust 预发布版本，均为 alpha 通道：

| 版本 | 说明 |
|---|---|
| `rust-v0.155.0-alpha.7` | 0.155.0 分支迭代 |
| `rust-v0.155.0-alpha.6` | 0.155.0 分支迭代 |
| `rust-v0.155.0-alpha.5` | 0.155.0 分支迭代 |
| `rust-v0.155.0-alpha.2.4` | 0.155.0 分支补丁迭代 |

> 官方未附带变更日志，短期内高频发版说明 0.155 正处于密集开发/测试阶段。生产环境仍建议停留在稳定版本。

---

## 三、社区热点 Issues（精选 10 条）

**1. [#17827] 可自定义状态栏（Customizable status line）**
- 标签：`enhancement / TUI / config` ｜ 46 评论 ｜ 👍 182
- 社区呼声最高的功能请求：对标 Claude Code 的底部状态栏，实时展示 token 用量、模型名、速率限制、上下文窗口、git 分支等，并支持 shell 脚本配置。**182 个赞为本次榜单之最**，说明 TUI 信息密度是核心诉求。
- https://github.com/openai/codex/issues/17827

**2. [#25220] Windows 捆绑插件不可用（EFS 加密导致 copyfile 失败）**
- 标签：`bug / windows-os / app / skills / computer-use / browser` ｜ 38 评论
- Microsoft Store 安装后，Computer Use、Browser、Chrome、LaTeX 等内置插件全部显示不可用，根因是 EFS 加密的 WindowsApps 文件复制失败。**Windows 分发链路的老问题持续发酵**。
- https://github.com/openai/codex/issues/25220

**3. [#35259] Codex Desktop 在等待/轮询状态时反复重入模型，消耗大量额度**
- 标签：`bug / rate-limits / tool-calls / app / subagent` ｜ 25 评论 ｜ 👍 22
- 量化数据很有说服力：仅用于 wait/status 轮询的模型回合占本地原始 token 消耗的 **19.8%**。属于"隐形成本"类严重问题。
- https://github.com/openai/codex/issues/35259

**4. [#45019] App-server 排队的 follow-up 消息丢失**
- 标签：`bug / app / app-server` ｜ 9 评论 ｜ 👍 37
- 队列中的追问消息"不再存在"，导致多轮交互中断。**37 赞**说明影响面广。
- https://github.com/openai/codex/issues/45019

**5. [#45119] macOS 14.2 沙箱启动失败：未绑定变量 TIOCSTI**
- 标签：`bug / sandbox / CLI` ｜ 16 评论
- 桌面端 26.908.40834 内置 `codex-cli 0.154.0-alpha.6.2` 在 Apple Silicon 上无法启动沙箱，上游 main 分支同样存在该符号规则问题。属于阻断性 Bug。
- https://github.com/openai/codex/issues/45119

**6. [#36475] Windows 沙箱刷新失败 helper_sandbox_lock_failed**
- 标签：`bug / windows-os / sandbox / CLI` ｜ 13 评论
- `SetNamedSecurityInfoW(ERROR_ACCESS_DENIED)` 导致已有 `.sandbox-bin` 无法刷新，Windows 沙箱权限模型问题再次被点名。
- https://github.com/openai/codex/issues/36475

**7. [#43201] GPT-6 Astra 额度消耗过快、会话时长过短**
- 标签：`bug / rate-limits / app` ｜ 8 评论 ｜ 👍 16
- 新版模型上线后的额度体验反馈，与 #45085（一次多智能体任务消耗 86% 周额度）形成同一主题的证据链。
- https://github.com/openai/codex/issues/43201

**8. [#45289] Codex 反复忽略指令并在对话中暴露 Python/工具输出**
- 标签：`bug / model-behavior / app` ｜ 10 评论
- 模型行为层面问题：指令遵循退化 + 内部输出泄漏，直接影响可用性与信息边界。
- https://github.com/openai/codex/issues/45289

**9. [#45778] ChatGPT 后端 404 / 服务不可用**
- 标签：`bug / app / connectivity` ｜ 9 评论 ｜ 👍 4
- `/backend-api` 返回 404，与 #42542、#42543 构成近期连接性问题的集群，疑似服务端侧故障。
- https://github.com/openai/codex/issues/45778

**10. [#41695] iPad App 访问远程 Codex 会话时频繁卡死**
- 标签：`bug / iOS / app / remote / performance` ｜ 10 评论
- 移动端远程会话体验问题，配合 #43033（Android Remote 无法重开桌面会话），**移动/远程链路整体待打磨**。
- https://github.com/openai/codex/issues/41695

**其他值得关注：**
- [#41522] TUI 内联 diff 预览行数限制（已关闭，👍 32）https://github.com/openai/codex/issues/41522
- [#6049] MCP-only 执行：禁用内置工具（👍 46，长期高赞）https://github.com/openai/codex/issues/6049
- [#39260] Credit 用量账本自 8/8 起冻结，53,000 额度中已消耗 85.4% 却无记录 https://github.com/openai/codex/issues/39260
- [#45797] Windows 桌面端首条消息成功、第二条无法发送 https://github.com/openai/codex/issues/45797

---

## 四、重要 PR 进展（精选 10 条）

> 本批次 PR 均由 `copyberry[bot]` 提交并处于 CLOSED（已合并/关闭）状态，可视为已落地的改动。

**1. [#45799] 完善 Windows 沙箱卸载清理**
- 修复包卸载后遗留沙箱用户配置与桌面数据的问题，并在包移除前正确处理服务停止，避免误删更新/重装所需数据。
- https://github.com/openai/codex/pull/45799

**2. [#45796] 在 Python SDK 中保留 `ImageUserInput`**
- 重新生成 SDK 时保持公开类名稳定，将 `UrlUserInput` 映射回 `ImageUserInput`，属于**破坏性变更防护**。
- https://github.com/openai/codex/pull/45796

**3. [#45794] 支持通过 file ID 引用图像（输入与工具输出）**
- app-server 图像输入除 `url` 外新增 `fileId`，并以 `file_id` 转发至 Responses API；同步更新生成式 schema 与客户端类型。
- https://github.com/openai/codex/pull/45794

**4. [#45789] 检查点迁移期间保留 Guardian 证据**
- 旧模型产生的检查点可能与当前 Guardian 审查器不兼容，此改动确保用户限制与已验证答案在压缩/重启间不丢失。
- https://github.com/openai/codex/pull/45789

**5. [#45782] 跨检查点迁移保留 Guardian 授权证据**
- 针对缺少 producer model hash 的旧压缩检查点，保证线程级 Guardian 上下文可用。
- https://github.com/openai/codex/pull/45782

**6. [#45779] 为 PID 管理的守护进程使用原生进程标识**
- 修复因 locale/时区/系统时钟变化导致 `ps` 启动时间文本失配、PID 记录被误判为过期的问题。
- https://github.com/openai/codex/pull/45779

**7. [#45780] 允许 daemon 更新将固定版本包恢复到最新稳定版**
- 此前 `codex app-server daemon update` 仅支持 latest 通道安装，固定版本/本地托管包无法回归生产更新。
- https://github.com/openai/codex/pull/45780

**8. [#45760] 禁用受数组排序 Bug 影响的 V8 优化路径**
- 修复固定版本 V8 中比较器修改数组时 `Array.prototype.sort` 内联导致的元素类型污染，禁用 Maglev/Turbolev/TurboFan 相关路径。属**底层安全加固**。
- https://github.com/openai/codex/pull/45760

**9. [#45757] 将 Windows 沙箱选择接入托管代理路由**
- 将 Windows 沙箱实现与其旧式 setup level 解耦，为 `WindowsMxc` 在会话、app-server 命令执行与沙箱 CLI 中分配专用代理监听。
- https://github.com/openai/codex/pull/45757

**10. [#45755] 共享连接器遵循规范化插件禁用设置**
- 修复"禁用某连接器的规范插件后，其工具仍可通过另一启用插件生效"的权限绕过问题。
- https://github.com/openai/codex/pull/45755

**Analytics 系列（同一主题批量落地）：**
- [#45769] Analytics 新增账户 Summary 标签页 https://github.com/openai/codex/pull/45769
- [#45768] 新增消费者 Top chats 用量分析 https://github.com/openai/codex/pull/45768
- [#45766] TUI Analytics 新增受开关控制的套餐用量历史 https://github.com/openai/codex/pull/45766
- [#45764] `/usage` 新增账户分析仪表盘 https://github.com/openai/codex/pull/45764
- [#45772] 实验性分析套餐历史与导航改进 https://github.com/openai/codex/pull/45772
- [#45763] 新增堆叠图表原语 https://github.com/openai/codex/pull/45763
- [#45762] 结合服务端套餐与账户身份校验加载分析报告 https://github.com/openai/codex/pull/45762

---

## 五、功能需求趋势

从本期 50 条 Issue 的标签分布与热度看，社区关注方向可归纳为：

1. **用量与额度透明度（最高频）**
   Credit 账本冻结（#39260）、GPT-6 Astra 额度消耗过快（#43201、#45085）、wait 轮询浪费 token（#35259）、周额度显示缺失（#41553）。对应 PR 侧 Analytics 面板集中爆发，说明官方正在正面回应。

2. **TUI 可定制化与信息密度**
   状态栏自定义（#17827，👍 182）、diff 预览行数可配置（#41522，👍 32）。终端 UI 已从"能用"转向"可编排"。

3. **Windows 平台稳定性（重灾区）**
   插件不可用（#25220、#32589）、沙箱锁失败（#36475）、写操作挂起（#45603）、消息无法连续发送（#45797）、WSL2 项目创建失败（#42984、#44918）。Windows 问题条数占比较高。

4. **MCP 与工具执行控制**
   MCP-only 模式、禁用内置工具（#6049，👍 46）——面向 headless/自动化场景的安全边界需求。

5. **移动端与远程会话**
   iPad 卡死（#41695）、Android Remote 无法重开桌面会话（#43033），远程开发链路体验待补齐。

6. **插件/技能生态完善**
   Google Calendar 全天事件支持（#35444）、插件禁用语义修正（#45755），生态从"能接"走向"接得对"。

7. **模型行为与指令遵循**
   #45289（忽略指令、泄漏工具输出）、#45795（丢失项目状态、重复已完成工作）、#44614（安全审查误报）。随着模型能力提升，行为可靠性成为新的焦点。

---

## 六、开发者关注点（痛点与高频需求）

- **成本不可见、不可控**：额度账本不记录、轮询偷跑 token、单次多智能体任务吃掉 86% 周额度——开发者要求**可审计的用量明细**与**等待态零消耗**。
- **Windows 是一等公民还是二等公民？** 沙箱权限模型（EFS、NamedSecurityInfo、helper_sandbox_lock）、商店包分发、WSL2 路径迁移等问题反复出现，且多为阻断级。
- **沙箱跨平台一致性**：macOS 14.2 与 Windows 均出现沙箱启动/刷新失败，沙箱作为安全边界却成了不稳定源。
- **连接性波动**：`/backend-api` 404 集群（#42542、#42543、#45778）让"是否能用"本身变得不确定。
- **会话状态可靠性**：队列消息丢失（#45019）、项目状态丢失与重复劳动（#45795）、配置加载阻塞发送（#44342），影响长任务信任度。
- **SDK 与 API 兼容性**：Python SDK 类名稳定性（#45796）、图像 file_id 支持（#45794）显示 SDK 正处于快速演进期，下游需关注破坏性变更。
- **模型行为质量**：指令遵循退化、安全审查误报，是"模型侧"而非"工程侧"的新增痛点。

---

*本日报基于 github.com/openai/codex 过去 24 小时公开数据整理，Issue/PR 状态可能随时间变化。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-09-16）

## 1. 今日速览

Gemini CLI 昨日发布 v0.60.0 正式版与 v0.61.0-preview.0，v0.61 系列进入预览节奏。社区讨论高度集中在**子代理（Subagent）可靠性**上：MAX_TURNS 中断被误报为成功、通用代理挂起等问题持续占据热度榜首。此外，Auto Memory 的隐私与重试逻辑、OAuth 令牌刷新等安全/稳定性修复成为本日 PR 的重点方向。

---

## 2. 版本发布

**v0.60.0（正式版）**
- `fix(core)`：改进 Web fetch 工具的目标校验与连接路由（PR #29120）
- `fix(core)`：在 MCP OAuth 流程中强制实施 RFC 9207 issuer 标识（PR #29137 系列）
- 链接：https://github.com/google-gemini/gemini-cli/releases

**v0.61.0-preview.0（预览版）**
- 同步 v0.60.0-preview.0 的 Changelog 与版本号提升至 0.61.0-nightly
- 链接：https://github.com/google-gemini/gemini-cli/pull/29344

**v0.61.0-nightly.20260915.g9c1b0a610（每日构建）**
- 常规 nightly 构建，仅包含前一日的增量提交
- 链接：https://github.com/google-gemini/gemini-cli/compare/v0.61.0-nightly.20260914.g9c1b0a610...v0.61.0-nightly.20260915.g9c1b0a610

---

## 3. 社区热点 Issues

1. **#22323 子代理达到 MAX_TURNS 却上报 GOAL 成功**（P1，13 评论）
   子代理在未做任何分析前就耗尽轮次，却仍报告 `status: success`，掩盖了中断。这是当前最热问题，直接影响任务可信度。
   https://github.com/google-gemini/gemini-cli/issues/22323

2. **#21409 通用代理（Generalist Agent）永久挂起**（P1，8 评论，👍8）
   只要将任务委托给通用代理就会无限挂起，简单操作也无法完成。高赞说明影响面广。
   https://github.com/google-gemini/gemini-cli/issues/21409

3. **#19873 基于零依赖 OS 沙箱与执行后意图路由**（P2，9 评论）
   提出利用 Gemini 3 的 bash 亲和性，在保证安全的前提下释放其原生工具链能力，属方向性大议题。
   https://github.com/google-gemini/gemini-cli/issues/19873

4. **#22745 AST 感知的文件读取/搜索/映射评估**（P2，7 评论）
   EPIC 级议题，探索用 AST 精确读取方法边界、减少误读轮次与 token 噪音。
   https://github.com/google-gemini/gemini-cli/issues/22745

5. **#21968 Gemini 很少主动使用 skills 和子代理**（P2，6 评论）
   社区反馈模型几乎不会自主调用自定义 skill/子代理，除非显式指示，影响扩展生态落地。
   https://github.com/google-gemini/gemini-cli/issues/21968

6. **#26525 为 Auto Memory 增加确定性脱敏并减少日志**（P2，5 评论）
   当前脱敏发生在内容已进入模型上下文之后，存在敏感信息泄露风险，属安全类重点。
   https://github.com/google-gemini/gemini-cli/issues/26525

7. **#25166 Shell 命令执行完成后仍卡在 "Waiting input"**（P1，4 评论）
   简单命令执行完毕后界面仍显示等待用户输入，属于高频体验痛点。
   https://github.com/google-gemini/gemini-cli/issues/25166

8. **#21983 browser 子代理在 Wayland 下失败**（P1，4 评论）
   Linux/Wayland 环境下浏览器子代理无法正常工作，影响跨平台可用性。
   https://github.com/google-gemini/gemini-cli/issues/21983

9. **#26522 Auto Memory 对低信号会话无限重试**（P2，4 评论）
   未被读取的会话会反复被重新浮现，浪费资源并污染记忆库。
   https://github.com/google-gemini/gemini-cli/issues/26522

10. **#22672 代理应停止/劝阻破坏性行为**（P2，3 评论）
    模型在复杂 git 操作中可能误用 `git reset --force`，需加强安全护栏。
    https://github.com/google-gemini/gemini-cli/issues/22672

---

## 4. 重要 PR 进展

1. **#29347 fix(ui): 防止边框渲染中的负尺寸**（P1）
   修复 `renderBorder` 在负布局尺寸下抛出的 `RangeError: Invalid count value: -1`，并加防御性 clamp。
   https://github.com/google-gemini/gemini-cli/pull/29347

2. **#29343 fix(cli): 抑制请求取消时的 AbortError 日志**
   解决 Node 23+ 下取消查询/流时同步抛出的 `AbortError` 导致的硬崩溃。
   https://github.com/google-gemini/gemini-cli/pull/29343

3. **#29339 fix(core): 刷新时保留 OAuth refresh token**（P1）
   修复 GH-21691，避免刷新后丢失 `refresh_token` 陷入重复鉴权循环，并使凭证删除幂等。
   https://github.com/google-gemini/gemini-cli/pull/29339

4. **#29341 fix(core,acp): 统一 MCP 工具调用标题格式**（P1）
   将 MCP/发现工具调用标准化为结构化签名，并分离解释文本，改善 ACP 载荷一致性。
   https://github.com/google-gemini/gemini-cli/pull/29341

5. **#29340 fix(core): 改进 PTY 文件描述符清理与生命周期管理**
   确保 PTY 会话与后台 shell 执行结束时完整释放资源，缓解 fd 泄漏。
   https://github.com/google-gemini/gemini-cli/pull/29340

6. **#29342 fix(cli): 避免嵌套的输入历史状态更新**（P2）
   重构 `useInputHistoryStore`，规避 React StrictMode 双重调用问题。
   https://github.com/google-gemini/gemini-cli/pull/29342

7. **#29335 fix(core): 保证 AgentLoopContext 属性在对象展开中保留**（P1）
   修复 `Config` 使用原型 getter 实现接口时，展开操作丢失关键属性的问题。
   https://github.com/google-gemini/gemini-cli/pull/29335

8. **#29333 fix(core): 校验约定发现的策略目录权限**（P2）
   对用户级与工作区级策略目录执行 `isDirectorySecure`，防止权限宽松导致的安全隐患。
   https://github.com/google-gemini/gemini-cli/pull/29333

9. **#29242 fix(core): isAuthenticationError 不再以子串匹配 "401"**（P2）
   修复把端口号/id 中的 `401` 误判为鉴权错误、触发误登出的问题。
   https://github.com/google-gemini/gemini-cli/pull/29242

10. **#29137 chore(deps): 批量升级 npm 依赖（77 项）**
   含 `simple-git`、`@modelcontextprotocol/sdk` 等核心依赖升级，需关注兼容性回归。
    https://github.com/google-gemini/gemini-cli/pull/29137

---

## 5. 功能需求趋势

- **子代理/Agent 可靠性**：从挂起、误报成功到配置被忽略（#22267），子代理体系是当前最集中的议题簇。
- **记忆系统（Auto Memory）**：脱敏、重试、无效补丁隔离等一组问题（#26525/#26522/#26523/#26516）表明记忆功能正进入质量打磨期。
- **安全与沙箱**：OS 级沙箱（#19873）、策略目录权限校验、破坏性命令防护（#22672）显示社区对安全边界诉求上升。
- **AST 感知的代码理解**：#22745/#22746 探索用 AST 提升读取精度、降低 token 消耗。
- **上下文与 token 优化**：Tactful Extraction（#19561）、/compress 持久化（#21335）反映对上下文膨胀的持续关注。
- **终端体验/性能**：终端 resize 无闪烁（#21924）、UI 渲染健壮性等。

---

## 6. 开发者关注点

- **任务可信度**：子代理中断被误报为成功（#22323）会误导自动化流程，是开发者最敏感的痛点。
- **稳定性与资源泄漏**：shell 命令卡在 "Waiting input"（#25166）、PTY fd 泄漏、通用代理挂起等反复出现，影响日常使用信心。
- **鉴权稳定性**：OAuth refresh token 丢失与 401 误判（#29339/#29242）会打断工作流，社区对鉴权链路尤为关注。
- **模型自主性不足**：模型不主动调用 skills/子代理（#21968），限制了扩展生态价值释放。
- **跨平台兼容**：Wayland 下浏览器子代理失败（#21983）、终端 resize 体验等平台差异问题仍需补齐。
- **隐私与安全默认值**：Auto Memory 的脱敏时机与策略目录权限，是开发者对"安全默认"的核心诉求。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI 社区动态日报** | 2026-09-16

---

### 1. 今日速览
GitHub Copilot CLI 近期发布了三个中间版本（v1.0.84-7/8/9），重点改进了上下文管理、会话恢复和 macOS 终端交互。社区关注热度集中在**内存与性能问题**（持续的 OOM 崩溃、长时间会话强制压缩）以及**功能缺失**（Vi/Vim 输入模式、IDE 深度集成）。同时，沙盒策略、插件自动更新、模型配置和 OAuth 回调端口等问题也引发了大量讨论。

---

### 2. 版本发布

| 版本 | 发布日期 | 主要更新 |
|------|----------|------------|
| **v1.0.84-9** | 2026-09-16 | • 为代理/子代理新增 `/settings` 选项，启用上下文管理工具。<br>• 优化大会话历史元数据扫描（提高线程和内存利用率）。<br>• 修复 End/Ctrl+E 在换行时无法跳转到真结束位置的问题。 |
| **v1.0.84-8** | 2026-09-15 | • `transcriptView` 默认为“简洁”模式，工具调用以可展开的工作摘要形式呈现。<br>• 恢复/暂停 Agent Factory 运行（`/factories` 对话框中）。<br>• 修复模型列表在切换账户/登出后未自动刷新的 bug。 |
| **v1.0.84-7** | 2026-09-14 | • 修复“自适应 only”Claude 模型收到的思考标记问题（保持自适应状态，避免失败）。<br>• `/clear` 命令结束会话时触发 `sessionEnd` hook。 |

*三个版本均已发布，但暂无对应的 PR 记录。*

---

### 3. 社区热点 Issues（按讨论热度排序）

| 排名 | Issue | 评论 / 点赞 | 重要性与社区反应 |
|------|-------|--------------|------------------|
| 1 | **[CLI 输入应支持 vi/vim 输入模式](github/copilot-cli Issue #13)** (已关闭) | 13 条评论 / **76** 赞 | 数十位用户渴望模态键盘导航，认为这是 CLI 交互性的核心缺失。社区呼声高，表明模态编辑对老用户而言极为重要。 |
| 2 | **[GitHub Copilot CLI 应完全集成 VS Code Copilot Chat 功能](github/copilot-cli Issue #54)** (已关闭) | 13 条评论 / **20** 赞 | 用户希望 CLI 能“继承”VS Code Copilot Chat 设置，从而实现无缝项目协作者过渡。支持者认为这是使 CLI 具备批量处理能力的关键。 |
| 3 | **[插件自动更新](github/copilot-cli Issue #2734)** | 3 条评论 / **13** 赞 | 插件作者和用户均提出自动化更新请求，认为当前手动流程易导致使用旧版带 bug 版本，影响插件生态健康。 |
| 4 | **[长时间恢复会话时发生 JavaScript 堆 OOM](github/copilot-cli Issue #4699)** | 4 条评论 / **5** 赞 | 用户报告约 14 小时后三次崩溃，堆栈达 4 GiB 限制。附加诊断文件写入用户当前目录加剧了问题，社区对内存溢出和文件管理提出严重关切。 |
| 5 | **[会话压缩 OOM 从而导致会话永久不可恢复](github/copilot-cli Issue #4780)** | 2 条评论 / **3** 赞 | 会话在达到压缩阈值时进入无穷循环，进程内存耗尽，无法恢复。问题直接影响用户长期工作流的稳定性和数据安全性。 |
| 6 | **[会话恢复内存飙升（v1.0.74 回归）](github/copilot-cli Issue #4251)** | 4 条评论 / **1** 赞 | A/B 测试表明，仅版本升级即导致峰值内存上升 3-4 倍，恢复时间长达 70 分钟。引发了对性能回退的严重关注。 |
| 7 | **[禁用模型调用的技能不可达](github/copilot-cli Issue #4438)** | 6 条评论 / **7** 赞 | `disable-model-invocation: true` 导致技能完全不可用而非仅手动调用。用户抱怨无法显式请求特定技能，影响灵活工作流。 |
| 8 | **[Linux 平台频繁 JavaScript 堆 OOM](github/copilot-cli Issue #4725)** | 6 条评论 / **1** 赞 | 多分钟崩溃模式反映出资源回收机制失效。Linux 用户关注点集中在进程稳定性、CPU 负载和资源监控。 |
| 9 | **[Copilot CLI 触及文件均转换为 CRLF（Windows）](github/copilot-cli Issue #1148)** | 7 条评论 / **8** 赞 | 跨平台兼容性问题严重影响代码仓库统一性。用户指出仅需编辑即触发 line-ending 转换，带来难以察觉的 diff 爆炸。 |
|10| **[CLI 颜色不尊重终端主题（Warp 终端）](github/copilot-cli Issue #4843)** | 2 条评论 / **1** 赞 | UI 暗/亮模式不匹配导致显示不佳。用户希望实现终端主题跟随，而非简单跟随系统全局设置。 |

*以上问题均来自过去 24 小时内被评论最多的 30 条 Issues 列表。*

---

### 4. 重要 PR 进展

> **提示：** 过去 24 小时内未有新的 PR 合并记录。近期版本发布所涵盖的改进主要源于早期合并的 PR。我们将在下次日报中更新 PR 动态。

---

### 5. 功能需求趋势（从 Issues 中提炼）

| 趋势 | 主要问题 | 社区关注点 |
|-------|-----------|--------------|
| **内存/性能优化** | #4664、#4699、#4251、#4780、#4506、#4639 | 长期会话 OOM、强制压缩循环、事件存储耗尽、资源回收机制缺陷。用户对系统稳定性提出迫切需求。 |
| **子代理与审查工作流** | #4849、#4850、#4807 | 子代理延迟、高 CPU 文件事件风暴、后台任务无限制运行。用户希望更快的循环速度和更轻量的上下文管理。 |
| **IDE 与设置集成** | #54、#4847 | 请求完全继承 VS Code Copilot Chat 设置，解决 IDE MCP 重载失败及 `/allow-all` 策略异常。 |
| **输入与界面改进** | #13、#4855、#4843 | Vi/Vim 输入模式、macOS 终端交互输入缺失、终端主题适配。UI/UX 一致性成为关注焦点。 |
| **插件与市场管理** | #2734、#4556 | 自动更新、市场发现 silent auth 失败。插件生态链的自动化和注册透明度亟需提升。 |
| **模型配置与技能调用** | #3954、#4438 | `explore` 工具硬编码模型、`disable-model-invocation` 导致技能不可达。用户希望配置被充分尊重。 |
| **沙盒与企业策略** |

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报
**日期：2026-09-16** | 数据来源：github.com/MoonshotAI/kimi-cli

> 说明：过去 24 小时内该仓库无新版本发布、无 PR 更新，仅有 4 条 Issue 产生更新。因此本期"社区热点 Issues"与"重要 PR 进展"无法按 10 条规模呈现，以下按实际数据如实汇总，避免填充无依据内容。

---

## 1. 今日速览

今天社区热度集中在**计费与配额透明度**上：用户 #2626 报告 `cache_read` 每轮都被计费、而 `cache_creation` 恒为 0，导致配额消耗被放大约 10 倍，是唯一仍在开放的高优先级问题。同时，两条长期遗留的 Issue（macOS 剪贴板快捷键 #1433、第三方工具 PicoClaw 接入 Kimi For Coding #1435）在今日被关闭，另有 1 条新功能建议提交（Kimi Work 会话标题日期前缀 #2646）。整体来看，仓库今日处于"零代码变更、以用户反馈收敛为主"的状态。

---

## 2. 版本发布

无新版本发布，本节省略。

---

## 3. 社区热点 Issues

今日更新的 4 条 Issue 全部列出（按重要性排序）：

### 🔴 #2626 [OPEN] 配额异常消耗：cache_read 每轮计费且 cache_creation 恒为 0（放大 >10x）
- 作者：ahmadyaseen35-coder ｜ 创建 2026-08-29 ｜ 更新 2026-09-15 ｜ 评论 2 ｜ 👍 0
- 链接：https://github.com/MoonshotAI/kimi-cli/issues/2626
- **为什么重要**：这是唯一仍在开放的 Issue，且涉及付费用户的真实资损。报告者称在 2026-08-28 晚间的轻度使用场景下，5 小时配额窗口在几分钟内掉掉约 40%，并通过 CLI 侧数据定位到缓存计费逻辑异常（`cache_read` 持续计费、`cache_creation` 始终为 0）。对于按量/按窗口计费的 Coding Plan 用户，这是直接影响可用性的核心问题。
- **社区反应**：2 条评论，热度不算高，但问题性质严重，属于需要官方给出计费口径说明的典型 case。

### 🟡 #1433 [CLOSED] 剪贴板图片处理仅支持 Ctrl + V，忽略 Cmd + V
- 作者：ringotypowriter ｜ 创建 2026-03-13 ｜ 更新 2026-09-15 ｜ 评论 2 ｜ 👍 1
- 链接：https://github.com/MoonshotAI/kimi-cli/issues/1433
- **为什么重要**：典型的 macOS 平台适配缺失。环境为 Darwin 25.3.0 arm64、CLI 版本 1.22.0，用户无法用 macOS 惯用的 Cmd + V 粘贴图片，只能依赖 Ctrl + V，属于明显的跨平台体验断层。
- **社区反应**：1 个 👍、2 条评论，规模小但诉求明确；该 Issue 已关闭，值得在后续版本说明中确认修复方式。

### 🟢 #2646 [OPEN] 功能建议：Kimi Work 会话标题自动带创建日期前缀（YYYYMMDD）
- 作者：GH-Mason ｜ 创建 2026-09-15 ｜ 更新 2026-09-15 ｜ 评论 0 ｜ 👍 0
- 链接：https://github.com/MoonshotAI/kimi-cli/issues/2646
- **为什么重要**：今日新建的 Issue，反映的是**会话组织与检索**需求——当会话数量增长后，按创建日期（YYYYMMDD）自动加前缀能显著改善排序与定位。
- **社区反应**：刚提交，尚无评论与点赞；提交者还特别说明找不到 Kimi Work / Desktop 的公开 tracker，是参照 #2143 先例投递到本仓库的（见下条趋势）。

### 🟢 #1435 [CLOSED] 功能请求：为 Kimi For Coding API 增加 PicoClaw 支持
- 作者：clawaizhang ｜ 创建 2026-03-14 ｜ 更新 2026-09-15 ｜ 评论 0 ｜ 👍 0
- 链接：https://github.com/MoonshotAI/kimi-cli/issues/1435
- **为什么重要**：用户希望将 Kimi For Coding 订阅用于开源 AI Agent 项目 [PicoClaw](https://github.com/sipeed/picoclaw)，但当前 API 对访问范围有限制。这触及**订阅额度的生态开放边界**：用户希望 Coding Plan 不局限于官方 CLI。
- **社区反应**：无评论、无点赞，但已于今日关闭。

---

## 4. 重要 PR 进展

过去 24 小时内无 PR 更新，本节无内容可汇总。

---

## 5. 功能需求趋势

从今日 4 条 Issue 中可以提炼出四条主线：

| 方向 | 代表 Issue | 说明 |
|---|---|---|
| **计费与配额透明度** | #2626 | 缓存读写计费口径需可解释、可核查，是目前风险最高的一类反馈 |
| **跨平台输入体验** | #1433 | macOS 键位（Cmd vs Ctrl）一致性等桌面端适配问题 |
| **生态互操作 / API 开放度** | #1435 | 订阅额度能否用于 PicoClaw 等第三方 Agent 工具，涉及 API 访问限制 |
| **会话组织与元数据管理** | #2646 | 会话标题自动日期前缀，属于规模使用后的检索效率需求 |

值得注意的是，**"问题归属与路由"** 也成为一个隐性趋势：#2646 明确提到 Kimi Work / Kimi Desktop 缺少公开 issue tracker，用户只能按 #2143 先例投递到 CLI 仓库。这会让 CLI 仓库承载本不属于它的产品反馈，长期看会稀释问题追踪效率。

---

## 6. 开发者关注点

综合今日反馈，开发者侧的核心痛点可归纳为三点：

1. **计费可验证性优先于新功能**：付费用户最在意的是"为什么扣、扣了多少"。#2626 显示用户已能自行抓取 CLI 侧数据做交叉验证，说明社区对透明度有较强预期，官方若缺少公开的缓存计费口径说明，容易放大不信任。
2. **macOS 一等公民待遇**：Cmd + V 这类基础交互的缺失，会在日常使用中持续产生摩擦，修复成本低但感知强。
3. **订阅额度的使用边界需要明示**：PicoClaw 类需求说明用户把 Kimi For Coding 视为通用编码能力入口，而不仅是官方 CLI 的燃料；API 限制若能以文档形式明确，可减少重复提问。

**建议关注**：#2626 的官方回复与后续计费说明，是接下来几天最值得追踪的动向。

---

*本期数据量较小，无版本与 PR 动态。如需，我可以在下一期数据更丰富时按 10 条规模完整呈现 Issues 与 PR 榜单。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-09-16

> 数据来源：github.com/anomalyco/opencode（统计窗口：过去 24 小时）

---

## 一、今日速览

今日无新版本发布，社区注意力集中在 **v1.18.30 的严重回归**上——`SystemPrompt.environment` 抛出 `TypeError: undefined is not an object (evaluating 'a.name')`，导致所有 prompt 直接失败，相关 Issue 已形成多帖聚集（#48645 / #48372 / #49158）。与此同时，PR 区出现明显的 **自动化清理潮**：8 月中旬的一批 PR 在同一天被批量关闭（标注 `automated-pr-cleanup`），仅 #49185 一条新修复 PR 处于 OPEN 状态。此外，Zen 的 `muse-spark-*` 模型出现 `encrypted_content` 校验失败的三连报，值得关注。

---

## 二、版本发布

过去 24 小时内**无新 Release**。但需注意当前 1.18.30 存在阻断性回归（详见下文），建议仍停留在 1.18.18 的用户暂缓升级。

---

## 三、社区热点 Issues（精选 10 条）

### 1. 崩溃回归集群：`SystemPrompt.environment` TypeError ⚠️ 最紧急
- [#48645](https://github.com/anomalyco/opencode/issues/48645) — 1.18.30 起每个 prompt 都崩溃，1.18.18 正常（8 评论 / 15 👍）
- [#48372](https://github.com/anomalyco/opencode/issues/48372) — TUI 与 `opencode run` 双双失败（6 评论 / 23 👍）
- [#49158](https://github.com/anomalyco/opencode/issues/49158) — 带堆栈复现（6 评论 / 16 👍）

**为什么重要**：这是当前唯一的“完全不可用”级故障，影响面覆盖 TUI、CLI、新会话首条消息，且用户回退版本即可恢复，属于典型的高优先级回归。三帖累计 44 👍，是今日热度最高的主题。

### 2. [#29363](https://github.com/anomalyco/opencode/issues/29363) `limit.output` 被静默截断在 32k（20 评论 / 21 👍）
配置项 `limit.output` 即使设置为 384000（DeepSeek）或 128000（GPT/Claude）也无效，唯一出口是实验性环境变量 `OPENCODE_EXPERIMENTAL_OUTPUT_TOKEN_MAX`。**评论数与点赞数均为今日最高**，说明长上下文用户群体对此痛点强烈。

### 3. [#1168](https://github.com/anomalyco/opencode/issues/1168) 链接可点击（Ctrl+左键打开）（12 评论 / **133 👍**）
今日点赞数最高的需求，且已开放超过一年（2025-07 创建）。属于低实现成本、高体感收益的可用性改进，长期挂起容易被社区解读为响应迟缓。

### 4. [#45278](https://github.com/anomalyco/opencode/issues/45278) 订阅续费被拒付（19 评论 / 5 👍）
使用三个月的同一张卡突然被拒，银行侧确认无异常。**商业付费路径的稳定性问题**，19 条评论说明存在批量受影响用户，需与 #42812（3DS 风控 PR）对照理解。

### 5. [#49222](https://github.com/anomalyco/opencode/issues/49222) TUI 启动即占用 6.5–7GB RSS
在**全新空项目**中也会发生，排除了附件与会话历史因素。与 #42263（PDF 无限制 base64 编码导致 OOM）形成一组内存问题信号，指向资源管理缺乏上限约束。

### 6. [#30611](https://github.com/anomalyco/opencode/issues/30611) 瞬时网络错误不重试
重试路径仅把 `ECONNRESET` 视为可重试，其他瞬时传输失败被归类为硬错误，直接中断 assistant turn。与 #45989（限流后每 3 秒无限重试且无日志）恰好构成“该重试的不重试、不该重试的死循环”的对称缺陷。

### 7. [#45989](https://github.com/anomalyco/opencode/issues/45989) 限流无限重试且无任何日志
UI 不显示真实 backoff/reset 计时，后端日志也没有网络事件记录。**可观测性缺失**放大了问题严重性——用户既看不懂状态，也无法自查。

### 8. [#35403](https://github.com/anomalyco/opencode/issues/35403) 插件版本落后导致子代理崩溃
报错 `no such column: replacement_seq`。根因是 `__drizzle_migrations` 仅记录 21 条迁移，而 CLI 已应用 38 条。**迁移状态不一致**是典型的插件生态隐患，会随插件滞后而持续复现。

### 9. [#17471](https://github.com/anomalyco/opencode/issues/17471) 命中输出上限后自动续写（4 评论 / 13 👍）
当 `finish_reason: "length"` 时自动继续。与 #29363 同源——用户在大上下文模型上频繁触碰输出上限，需求已从“放开上限”延伸到“上限后自动接续”。

### 10. Zen `muse-spark-*` 模型 `encrypted_content` 报错三连
- [#48973](https://github.com/anomalyco/opencode/issues/48973)（4 评论 / 5 👍）
- [#49179](https://github.com/anomalyco/opencode/issues/49179)（3 评论 / 2 👍）
- [#49206](https://github.com/anomalyco/opencode/issues/49206)（2 评论 / 1 👍）

同一错误在同一日内出现三个独立报告，说明是**服务端/协议层共性问题**而非个例，建议优先定位 reasoning 加密内容的归属校验逻辑。

**其他值得留意**：#25664（`pkill -f` 导致 bash 工具挂起）、#46313（macOS 二进制 codesign 校验失败）、#48330（Copilot Legacy 1500 次配额被单次会话耗尽）、#49073（每个项目独立 `/tmp` 目录）。

---

## 四、重要 PR 进展（精选 10 条）

> ⚠️ 今日 PR 区绝大多数为 **2026-08-15 创建、09-15 批量关闭**的 `automated-pr-cleanup` 条目，说明维护者执行了一轮自动化积压清理。以下按价值排序。

### 1. [#49185](https://github.com/anomalyco/opencode/pull/49185)【OPEN】修复文件拖拽提及失效
v2 输入框中首次拖拽插入 `@path` 成功，之后每次拖拽都被静默忽略。今日唯一新开 PR，修复 #39705。

### 2. [#42812](https://github.com/anomalyco/opencode/pull/42812) 为 Go 卡片结账强制 3D Secure
针对欺诈团伙批量创建 Go 订阅的线上证据，要求 Stripe 对新卡订阅启用 3DS，Alipay 与 UPI 路径不变。**与 #45278 的拒付投诉形成因果链**，属风控与体验的权衡。

### 3. [#42777](https://github.com/anomalyco/opencode/pull/42777) 保留流式中断的传输层诊断信息
响应体中途失败时原仅暴露 `Decode error (200 POST ...)`，丢失原生错误。直接回应今日 #30611 / #45989 所反映的诊断能力不足问题。

### 4. [#42808](https://github.com/anomalyco/opencode/pull/42808) TUI 乐观创建会话
本地生成 `SessionID` 并立即跳转，后台完成创建，改善首屏延迟。

### 5. [#42807](https://github.com/anomalyco/opencode/pull/42807) TUI 乐观提交 prompt
原先编辑器需等待最多 5 个串行请求，用户消息要等 SSE 回传才渲染；改为编辑器立即清空、消息即时呈现。

### 6. [#42762](https://github.com/anomalyco/opencode/pull/42762) 提升并发会话吞吐
基于 `opencode.db` 中 6 条真实会话历史构建确定性基准，用于评估并发场景性能。与今日 #49222 的内存议题相关。

### 7. [#42789](https://github.com/anomalyco/opencode/pull/42789) 在插件钩子后执行动态 provider 回退
修复插件注册的 `aisdk:` 包不在 npm 上时，`ctx.aisdk.hook("sdk", ...)` 回调永不触发的问题。

### 8. [#42720](https://github.com/anomalyco/opencode/pull/42720) OpenAI Responses 请求中助手文本改用 `input_text`
修复历史会话含 assistant 文本时 `/responses` 请求体格式错误，属协议兼容性修复。

### 9. [#42662](https://github.com/anomalyco/opencode/pull/42662) MCP 配置缺失 `type` 时显式报错
大量为 Claude Code 编写的 MCP 配置不含 `type`/`enabled` 字段，原先静默失败，改为大声失败。呼应社区对“静默失败”的普遍不满。

### 10. [#33844](https://github.com/anomalyco/opencode/pull/33844) 完整土耳其语本地化 + 同步脚本
覆盖 desktop / console / ui / web 四端，并提供翻译同步脚本，是国际化推进中体量较大的一条。

**其他**：#42819（消息回滚边界与 ID 排序修复）、#42786（项目对话框支持浏览子目录）、#42761（项目内路径视为内部路径）、#42685（焦点事件重查终端调色板）、#42746（Cloudflare token 缺失不再崩溃）。

---

## 五、功能需求趋势

从今日 50 条 Issue 中可提炼出以下方向：

| 方向 | 代表 Issue | 社区诉求 |
|---|---|---|
| **长上下文与输出控制** | #29363、#17471 | 解除 32k 静默上限、命中 `length` 后自动续写 |
| **稳定性与回归治理** | #48645、#48372、#49158 | 阻断性回归快速修复与回滚机制 |
| **网络韧性与可观测性** | #30611、#45989 | 瞬时错误重试、退避计时可见、日志补齐 |
| **资源与性能** | #49222、#42263 | TUI 内存占用、附件大小上限 |
| **模型与提供商兼容** | #48069、#35283、#48973 系列 | Bedrock 图像、OpenAI 兼容 `reasoning` 字段、Zen reasoning 加密 |
| **平台与分发** | #46313、#44783、#18411 | macOS 签名、ARM32 支持、WSL2 可用性 |
| **TUI/UI 体验** | #1168、#36303、#7801、#49073 | 可点击链接、MCP 面板、模式自动切换、项目级临时目录 |
| **计费与配额** | #45278、#48330 | 支付稳定性、订阅配额不被单次会话耗尽 |

值得注意的是，**IDE/编辑器集成方向的讨论今日明显缺席**，热点集中在运行时稳定性与协议兼容层面。

---

## 六、开发者关注点

1. **静默失败是最强烈的共性抱怨。** 输出上限被悄悄截断（#29363）、文件拖拽被悄悄忽略（#49185）、MCP 配置缺字段悄悄不生效（#42662）、限流重试不留日志（#45989）——四类不同模块出现同一种失败模式：出错但不告诉用户。

2. **错误信息缺乏可操作性。** `Unexpected server error. Check server logs for details.` 反复出现在 #48645 / #48372 / #49158 中，而日志本身又不足以定位问题，形成“用户看提示 → 查日志 → 日志无用”的死循环。

3. **回归破坏信任。** #48645 明确对比“1.18.18 正常 / 1.18.30 崩溃”，#48330 指出“Opencode 1 没这个问题”，说明用户在建立版本间的行为预期，任何回归都会被快速定位并放大。

4. **版本与迁移状态不同步。** #35403 揭示插件滞后时数据库迁移表与实际 schema 脱节，是插件生态扩张后的结构性风险。

5. **付费用户的容错阈值更低。** 支付被拒（#45278）与配额被异常耗尽（#48330）的反馈语气明显比功能请求更急切，商业链路的稳定性优先级应高于一般 bug。

6. **实验性开关承担了过多责任。** `OPENCODE_EXPERIMENTAL_OUTPUT_TOKEN_MAX` 被官方文档当作唯一出口，用户对“把核心配置藏在实验变量后面”表达了明确不满。

---

*本日报基于公开 GitHub 数据整理，如需追踪某条 Issue 的最新进展，可点击对应链接直达。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-09-16

> 数据来源：github.com/badlogic/pi-mono（Issues / PRs 归属 earendil-works/pi）

---

## 1. 今日速览

今日无新版本发布，社区焦点集中在**上下文预算与压缩（compaction）正确性**、**provider 重试与错误分类**两大主题。多个高评论 Issue（如 #8061 上下文预算溢出、#9571 畸形 Retry-After 导致紧循环重试）指向模型窗口管理的健壮性问题；PR 侧则涌现多起 provider 集成（OrcaRouter、GMI Cloud）与扩展 API 补全（事件类型导出、系统提示追加、事件取消订阅）。

---

## 2. 版本发布

过去 24 小时无新 Release。

---

## 3. 社区热点 Issues（精选 10）

1. **#8061 [OPEN][inprogress] Context budget 忽略 maxTokens 输出预留，78% 输入即溢出，且溢出恢复重试同样失败**（评论 9 / 👍2）
   百万 token 上下文模型在输入仅占 ~78% 时被 provider 拒绝，自动 compact-and-retry 恢复路径重试仍失败。上下文预算与输出预留的耦合是核心正确性问题，影响所有长会话用户，评论数最高。
   https://github.com/earendil-works/pi/issues/8061

2. **#9457 [CLOSED][bug] bedrock-converse：1h 缓存写入按 5m 费率计费**（评论 6 / 👍4）
   `cacheWrite1h` 未根据 `cacheDetails` 设置，导致长时缓存写成本被低估。计费准确性直接关系用户成本，👍 数最高，已关闭。
   https://github.com/earendil-works/pi/issues/9457

3. **#9165 [CLOSED][bug] OpenRouter 上的 Claude Opus 5 拒绝 per-message output_config**（评论 6）
   `openrouter/anthropic/claude-opus-5` 返回 400，而 Anthropic 原生 provider 正常。暴露 OpenRouter 兼容层对特定模型的参数透传差异，已关闭。
   https://github.com/earendil-works/pi/issues/9165

4. **#9571 [OPEN][bug] provider 重试：畸形 Retry-After HTTP-date 触发零退避紧循环**（评论 5）
   `getRetryDelayMs` 在非数字 `retry-after` 时 `Date.parse` 返回 NaN，导致立即重试、紧循环打爆 429 限流。属稳定性隐患，仍 OPEN。
   https://github.com/earendil-works/pi/issues/9571

5. **#9549 [OPEN][fullscreen] 大 transcript 每帧重渲染，resize 重发全文，单核跑满**（评论 4）
   Windows Terminal / 2 核环境实测性能退化，报告由本地 pi agent 协助测量。渲染性能是大会话可用性瓶颈。
   https://github.com/earendil-works/pi/issues/9549

6. **#8791 [OPEN] 向扩展暴露模型运行时（ModelRuntime）**（评论 3 / 👍5）
   希望 `ExtensionContext` 暴露 `modelRuntime`，以便构建隔离的进程内 agent session。👍 最高，反映扩展生态对底层能力开放的强需求。
   https://github.com/earendil-works/pi/issues/8791

7. **#9602 [OPEN][bug] Compaction 可能因纳入早前请求已省略的 thinking 消息而溢出**（评论 3）
   本地 Qwen3.8 经 llama.cpp 出现 4 次触顶输出后，压缩阶段把历史 thinking 纳入导致再次溢出，与 #8061 同属压缩正确性族群。
   https://github.com/earendil-works/pi/issues/9602

8. **#9577 [OPEN][bug] 被信号杀死的 bash 工具仍以成功解析**（评论 3）
   `createBashTool` 在 SIGKILL/SIGTERM 后仅返回部分输出且判定成功，调用方无法区分失败。工具语义正确性问题，关联历史修复 #8994。
   https://github.com/earendil-works/pi/issues/9577

9. **#9629 [OPEN] Baseten 模型从不发送 session-affinity 头，prompt 缓存亲和性丢失**（评论 1）
   `processBasetenModels` 生成的四个 compat 变体均未设置 `sendSessionAffinityHeader`，导致请求落到不同副本、KV 缓存全 miss。缓存命中率与成本议题。
   https://github.com/earendil-works/pi/issues/9629

10. **#9609 [OPEN] 会话时间戳为本地时间却带 Z（UTC）后缀**（评论 2）
    `~/.pi/agent/sessions/` 下 `.jsonl` 时间戳标注 UTC 实为本地墙钟时间，GMT+8 机器上产生误导。数据格式规范问题，易引发下游解析错误。
    https://github.com/earendil-works/pi/issues/9609

> 其他值得留意的：#9627（Cloudflare 520 未被视作可重试）、#9643（工具调用参数流为非法 JSON 时回合无 toolResult 而终止）、#9616（zai-coding-cn GLM 目录仍列 8 个已下线模型）。

---

## 4. 重要 PR 进展（精选 10）

1. **#9548 [OPEN] Mid conversation system messages**（mitsuhiko）
   将系统提示与工具变更纳入 transcript 而非静默改写初始条件，支持记录指令变更、分支恢复时还原状态，并保留缓存前缀。架构级改动，影响会话持久化模型。
   https://github.com/earendil-works/pi/pull/9548

2. **#9642 [CLOSED] 导出扩展事件钩子类型**
   从包入口导出 `ExtensionAPI.on()` 所用全部事件与结果类型，修复 #9511 中类型导出不一致问题。
   https://github.com/earendil-works/pi/pull/9642

3. **#9620 [CLOSED] 将 OrcaRouter 作为一等 provider（API key + OAuth 2.0 PKCE）**
   新增命名 provider，支持两条独立登录路径与按能力过滤的实时模型列表。
   https://github.com/earendil-works/pi/pull/9620

4. **#9619 [CLOSED] 保留 Anthropic 模型的根级 schema 组合器**
   修复 #9134：Anthropic 拒绝工具 `input_schema` 根级 `anyOf/oneOf/allOf`，此前被非严格转换丢弃，导致模型看到错误属性组合。
   https://github.com/earendil-works/pi/pull/9619

5. **#9615 [CLOSED] 新增 `/forget` 命令用于上下文回滚**
   可从模型上下文移除最近 N 个用户回合，可选同步删除会话文件，分软/硬模式并标注可恢复性。
   https://github.com/earendil-works/pi/pull/9615

6. **#9434 [OPEN] 允许扩展向会话系统提示追加内容**
   修复 #9432：`session_start` 处理器可返回 append-only 的 `systemPromptAppend`，按扩展顺序收集并带来源元数据与错误隔离。
   https://github.com/earendil-works/pi/pull/9434

7. **#9601 [OPEN] 精确 session ID 查询避免全 transcript 扫描**
   修复 #9440：改用精确 ID 查找读取会话头，替代加载完整 transcript，microbenchmark 显示后续缓存命中更优（因此放弃 async 契约）。
   https://github.com/earendil-works/pi/pull/9601

8. **#9607 [CLOSED] 对摘要流应用 provider 钩子**
   修复 compaction / 分支摘要直连 streamFunction 时跳过 `before_provider_request` 的问题，使扩展钩子在摘要路径同样生效。
   https://github.com/earendil-works/pi/pull/9607

9. **#9605 [CLOSED] 新增 GMI Cloud provider**
   作为 OpenAI-Chat-Completions 聚合器，复用 `openai-completions` 实现，无需新 API 层。
   https://github.com/earendil-works/pi/pull/9605

10. **#8635 [OPEN] 在懒加载初始化中保留 aborted 停止原因**（修复 #8409）
    将请求中止信号透传至懒加载 stream 包装器，初始化失败时若信号已中止则报告为 aborted，并补充回归测试。
    https://github.com/earendil-works/pi/pull/8635

> 其他：#9630（事件处理器取消订阅，修复 #8967）、#9483（工具 cwd 解析改为 opt-in `customCwd`）、#6534（实验性 developer 消息角色，对应 RFC 54）。

---

## 5. 功能需求趋势

- **扩展 API 能力补全**：暴露 `ModelRuntime`（#8791）、系统提示追加（#9434）、事件取消订阅（#9630）、事件类型导出（#9642/#9511）、全局工具展示覆盖（#9638/#9641）、`setModel` 的 `persist` 选项可达性（#9639）。扩展生态正从"能用"走向"可控、可观测"。
- **Provider / 新模型支持**：OrcaRouter（#9620）、GMI Cloud（#9605）、Claude Opus 5（#9165）、DeepSeek V4.1（#9485）、GLM-5.3（#9616）——目录与兼容层的持续维护成为常态需求。
- **缓存与成本优化**：1h 缓存计费（#9457）、跨会话 prompt 缓存（#8348）、fork 会话缓存复用、Baseten session affinity（#9629）——prompt caching 命中率与计费准确性是高频方向。
- **上下文/压缩治理**：预算与输出预留（#8061）、thinking 消息纳入压缩（#9602）、`/forget` 回滚（#9615）——长会话稳定性与用户可控性并重。
- **性能**：大 transcript 每帧重渲染（#9549）、会话 ID 精确查找（#9601）——面向大文件/低配环境的优化诉求明显。
- **错误处理健壮性**：可重试分类（#9627）、退避计算（#9571）、结构化错误字段（#9644）、工具信号语义（#9577）——错误可分类、可编程处理成为共识。

---

## 6. 开发者关注点

1. **错误可编程性不足**：`--mode json` 下 provider 错误仅携带自由文本 `errorMessage`，缺少结构化 status/class 字段（#9644）；520 等状态未被归类为可重试（#9627）。下游自动化难以可靠处理失败。
2. **重试与退避逻辑脆弱**：畸形 `Retry-After` 导致 NaN 退避、紧循环（#9571），是典型的边界条件缺陷。
3. **上下文预算与压缩的正确性**：预算未预留输出 token（#8061）、压缩纳入已被省略的 thinking（#9602）、摘要流跳过 provider 钩子（#9607），共同指向"长会话在极限窗口下不可靠"的痛点。
4. **工具执行语义不严谨**：被信号杀死的 bash 被判成功（#9577）、`tool_execution_end` 监听器抛错导致结果丢失（#9599）、非法 JSON 参数流使回合无 toolResult 终止（#9643）——工具生命周期与结果一致性需要更强保证。
5. **扩展系统接口不稳定**：类型导出无规律（#9511）、`session_switch` 被移除但扩展仍在用（#9611）、核心选项对扩展不可达（#9639）——API 演进需更明确的弃用与导出策略。
6. **数据格式与并发安全**：时间戳时区标注错误（#9609）、同目录并发 `pi -c` 无锁写入同一会话文件（#9596）——会话文件的格式规范与并发保护是基础性欠账。
7. **包安全审查**：`pi-agui` 包报告（#9640）指出仓库链接 404，反映扩展生态的供应链审查需求上升。

---

*报告基于 2026-09-15 更新数据生成，日期口径为 2026-09-16。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-09-16

## 1. 今日速览

Qwen Code 社区今日活跃度持续高位：新增 cua-driver-rs v0.20.9 预构建二进制版本，覆盖 macOS / Linux / Windows 三平台；社区围绕 **TUI React 渲染崩溃、Desktop UI 设置未生效、ACP 协议权限绕过** 等 P1 级缺陷展开密集讨论。同时，Web Shell 主题与语言设置修复（#11961）、Windows 签名策略讨论（#11952）等 PR 与议题进入收尾阶段。

---

## 2. 版本发布

| 版本 | 平台 | 说明 |
|------|------|------|
| **cua-driver-rs v0.20.9** | macOS / Linux / Windows | Qwen CUA Driver 预构建二进制。macOS 提供 codesigned + notarized universal binary 及 `QwenCuaDriver.app`；Linux 支持 x86_64 + arm64（glibc 2.31 baseline）；Windows 提供 unsigned UIAccess worker + native SDK payload。[Release 链接](https://github.com/QwenLM/qwen-code/releases/tag/cua-driver-rs-v0.20.9) |

---

## 3. 社区热点 Issues（Top 10）

1. **[#11500](https://github.com/QwenLM/qwen-code/issues/11500)** — TUI 在多个后台 Agent 并发完成时因 React `useBoxMetrics` 状态循环触发 "Maximum update depth exceeded" 静默退出（P1/Bug/UI）。评论 15 条，社区关注度高，影响 CLI 主体验。

2. **[#2382](https://github.com/QwenLM/qwen-code/issues/2382)** — Qwen Code Companion VS Code 扩展 0.12.3 在 VS Code 回退至 0.110.1 后仍无法正常使用（P1/Bug/VS Code）。社区反馈版本回退无效，影响 IDE 用户入门。

3. **[#11834](https://github.com/QwenLM/qwen-code/issues/11834)** — MiniMax 提供商返回 `400 invalid params, function parameters is empty (2013)`，与 #11842 PR 直接相关（P1/Bug/Core）。说明新模型适配链路存在参数序列化缺陷。

4. **[#11556](https://github.com/QwenLM/qwen-code/issues/11556)** — vscode-ide-companion 0.23.1 在 Remote-SSH 环境下 Webview 卡死无法加载（P1/Bug/集成）。涉及跨平台远程开发场景，影响企业用户。

5. **[#11955](https://github.com/QwenLM/qwen-code/issues/11955)** — Desktop 应用完全忽略 `ui.theme` 与 `general.language` 设置（P2/Bug/UI）。已由 PR #11961 修复，社区期待发版验证。

6. **[#11956](https://github.com/QwenLM/qwen-code/issues/11956)** — qwen 0.23.4 将无参工具的 `parameters` 序列化为 `null`，导致严格 OpenAI 兼容网关拒绝请求（P2/Bug/Core）。与 #11842 PR 修复方向一致。

7. **[#9694](https://github.com/QwenLM/qwen-code/issues/9694)** — Plan mode 请求增加可配置只读 Shell 命令白名单（P2/Feature/安全）。社区讨论已启动，涉及 Plan mode 精细化权限控制。

8. **[#11887](https://github.com/QwenLM/qwen-code/issues/11887)** — `--acp` 模式在限制审批模式下仍自动执行文件写入和 Shell 命令，从不发送 `session/request_permission`（P2/Bug/ACP）。安全合规风险高。

9. **[#11969](https://github.com/QwenLM/qwen-code/issues/11969)** — 使用推理模型时 `stripAnalysisBlock()` 在摘要被 `</think>` 截断后触发 `COMPRESSION_FAILED_EMPTY_SUMMARY`，导致自动压缩失败（P2/Bug/Core）。影响本地推理模型用户。

10. **[#11908](https://github.com/QwenLM/qwen-code/issues/11908)** — ACP 桥接中过大的 `available_commands_update` 通知触发 `MAX_JSON_NODES` 上限，通道被摧毁且后续请求全部 404（P1/Bug/Daemon）。影响大规模工具集场景的会话稳定性。

---

## 4. 重要 PR 进展（Top 10）

1. **[#11961](https://github.com/QwenLM/qwen-code/pull/11961)** — **fix(web-shell)**: Standalone Web Shell 现在正确读取 `ui.theme` 和 `general.language`，当 URL 无显式参数时回退使用 settings.json 配置。直接修复 #11955。[PR #11961](https://github.com/QwenLM/qwen-code/pull/11961)

2. **[#11970](https://github.com/QwenLM/qwen-code/pull/11970)** — **test(cli)**: 修复 bwrap 沙箱测试套件在 Windows 平台的两个可移植性缺陷，修复 CI 主线 `Test (windows-latest, Node 22.x)` 的 15 个失败用例。仅测试层变更。[PR #11970](https://github.com/QwenLM/qwen-code/pull/11970)

3. **[#11889](https://github.com/QwenLM/qwen-code/pull/11889)** — **fix(core)**: Windows 更新/卸载扩展时目录被商店重命名锁定，回退为 copy 方式交换构建产物。解决 Windows 扩展生命周期管理的竞态问题。[PR #11889](https://github.com/QwenLM/qwen-code/pull/11889)

4. **[#11842](https://github.com/QwenLM/qwen-code/pull/11842)** — **fix(core)**: MiniMax chat-completions 线路保留显式空 `parameters` 对象，仅对该 Provider 生效，其他 Provider 行为不变。修复 #11834 参数为空导致的 400 错误。[PR #11842](https://github.com/QwenLM/qwen-code/pull/11842)

5. **[#11965](https://github.com/QwenLM/qwen-code/pull/11965)** — **fix(hooks)**: 按 hook 名称而非身份（identity）键值化 `enabled` 状态快照，解决未命名 hook 的启用状态丢失问题。修复 #11902。[PR #11965](https://github.com/QwenLM/qwen-code/pull/11965)

6. **[#11857](https://github.com/QwenLM/qwen-code/pull/11857)** — **ci(review)**: 对比 diff 字节完全一致的 push（如 merge main 到 PR）自动跳过重复评审，节约 CI 资源与维护者时间。[PR #11857](https://github.com/QwenLM/qwen-code/pull/11857)

7. **[#11963](https://github.com/QwenLM/qwen-code/pull/11963)** — **fix(ci)**: verify-capture 渲染器对加粗终端单元格补充 `stroke` 描边，确保 PNG 证据图中加粗文字清晰可辨。[PR #11963](https://github.com/QwenLM/qwen-code/pull/11963)

8. **[#11776](https://github.com/QwenLM/qwen-code/pull/11776)** — **fix(core)**: 修复 `SessionService.listSessions()` 在 mtimeMs 相同（批量复制/备份恢复）场景下的分页错乱问题，增强持久化会话分页稳定性。[PR #11776](https://github.com/QwenLM/qwen-code/pull/11776)

9. **[#11913](https://github.com/QwenLM/qwen-code/pull/11913)** — **fix(web-shell)**: 允许会话创建期间顺序发起 SDK 请求，设置 75 秒 action deadline（覆盖两个 30 秒 SDK 预算 + 15 秒缓冲），避免并发阻塞。[PR #11913](https://github.com/QwenLM/qwen-code/pull/11913)

10. **[#11961](https://github.com/QwenLM/qwen-code/pull/11961)** — **fix(web-shell)**: Standalone Web Shell entry 现已正确读取 settings.json 中的 `ui.theme` 和 `general.language` 设置，修复 Desktop 主题语言不生效问题。关联 #11955。[PR #11961](https://github.com/QwenLM/qwen-code/pull/11961)

---

## 5. 功能需求趋势

从 Issues 整体分析，社区近期关注的功能方向集中在以下五类：

1. **IDE 深度集成与跨平台兼容**（#2382、#11556、#11574、#11514）：VS Code 扩展在 Remote-SSH、版本回退、历史会话延续等场景频繁受阻，社区强烈要求更稳定的 IDE 集成体验。

2. **Web Shell 与 Desktop 应用一致性**（#11955、#11966、#11958、#11949、#11951）：Web Shell 主题/语言、工具块渲染、上传限制、Markdown 预览等 UX 问题密集反馈，Desktop 与 Web 端的体验一致性成为重点。

3. **Model 适配与协议兼容**（#11834、#11956、#11936、#11684）：对 MiniMax、OpenAI Responses Wire、本地推理模型（如 Ollama）的参数序列化与线协议适配仍是持续热点。

4. **Daemon 与 ACP 协议稳定性**（#11908、#11887、#11969、#9911）：ACP 权限控制、会话管理、大消息限界等问题直接影响无人值守自动化场景的可用性。

5. **安全与权限细化**（#9694、#11887、#11952、#11816）：Plan mode 白名单、ACP approval modes、Windows 代码签名、分支会话 worktree 隔离等安全相关需求增长明显。

---

## 6. 开发者关注点

| 关注点 | 典型反馈 | 涉及议题 |
|--------|----------|----------|
| **UI 设置不生效** | Desktop 应用主题与语言设置被完全忽略，Web Shell 与 Desktop 行为不一致 | #11955, #11966 |
| **模型/Provider 兼容性** | MiniMax、OpenAI 兼容网关对空参数工具序列化行为敏感，触发 400 拒绝 | #11834, #11956, #11936 |
| **ACP 安全性** | `--acp` 限制模式下未发送权限请求即自动执行危险操作，存在合规风险 | #11887, #11908 |
| **VS Code 扩展稳定性** | Remote-SSH Webview 卡死、版本升级后不可用、消息编辑功能丢失 | #2382, #11556, #9911 |
| **推理模型支持** | 推理模型场景下自动压缩（compaction）因摘要截断失败，本地部署体验差 | #11969 |
| **CI/CD 与发布流程** | Windows 代码签名策略不明、重复触发构建浪费资源、macOS E2E 随机死亡 | #11952, #11953, #11134 |
| **Session 与历史管理** | Session Overview 遗漏 standalone 会话、分页在 mtime 相同时出错、历史记录被版本更新清除 | #11878, #11776, #11574 |
| **Hook 配置可靠性** | 含转义空格的 matcher 正则表达式无效、启用状态按错误键值存储 | #11862, #11902 |

---

> 📊 **数据说明**：本日报基于 GitHub [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) 2026-09-15 ~ 2026-09-16 时段的 Releases、Issues 与 Pull Requests 数据聚合生成。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报（2026-09-16）

> 数据来源：github.com/Hmbown/DeepSeek-TUI（Issue/PR 归属 Hmbown/Codewhale）

---

## 一、今日速览

今日无新版本发布，但社区异常活跃：过去 24 小时内 50 条 Issue 更新、8 条 PR 更新，核心焦点集中在**会话恢复（resume/session picker）链路的一系列缺陷**、**引擎中途静默冻结**，以及围绕 v0.9.14 里程碑的**编辑安全门禁（parse-gate）**与**桌面端 Runtime API 路由**建设。维护者 Hmbown 集中提交了多个"抢救式"PR，把此前只存在于本地分支的工作重新推上主线。

---

## 二、版本发布

过去 24 小时无新 Release。（上一轮 v0.9.13 的相关问题仍在持续反馈，v0.9.14 里程碑正在密集推进。）

---

## 三、社区热点 Issues（Top 10）

**1. #6207 [OPEN] session picker 拒绝可用的已保存会话**（9 评论，今日最热）
https://github.com/Hmbown/Codewhale/issues/6207
TUI 打开已保存会话时报错 "This session belongs to another Runtime host"，但运行时存储目录确实存在、归属校验也通过。这是今天评论数最高的 Issue，直指会话恢复逻辑对"宿主归属"的判定过于严苛，是当前用户体验的最大阻塞点。

**2. #6184 [OPEN] 引擎运行中静默冻结：消息被持久化但永不回复**（5 评论）
https://github.com/Hmbown/Codewhale/issues/6184
在长时间、工具密集的运行中，引擎中途停止产出、无错误、无日志、无崩溃记录，用户后续输入被写入存储却得不到任何回应。这是最严重的数据/信任类缺陷——用户无法判断是卡住还是已完成。

**3. #6185 [OPEN] resume 渲染空 transcript，但日志完好**（3 评论）
https://github.com/Hmbown/Codewhale/issues/6185
强制退出冻结的运行后，`codewhale resume` 什么都恢复不出来，尽管磁盘日志完整；且相同的工具调用修复每次加载都重跑（修复结果从不持久化）。与 #6184 构成"冻结→恢复失败"的连锁痛点。

**4. #6225 [OPEN] 干净安装下 resume 直接失败（自诊断）**（3 评论）
https://github.com/Hmbown/Codewhale/issues/6225
最简路径即可复现：启动 → `/quit` → 再启动 → `/resume` 选上一个会话 → 报 "belongs to another Runtime host"。这说明 #6207 并非边缘场景，而是新用户必经之路。

**5. #6169 [OPEN] TUI 缺少作业控制握手，SIGTTIN 会挂起进程**（4 评论）
https://github.com/Hmbown/Codewhale/issues/6169
TUI 只在启动时做一次前台归属检查，没有 `SIGTSTP`/`SIGTTIN`/`SIGCONT` 处理。一旦进程组被切到后台，终端残留鼠标/粘贴/raw 模式，进行中的回合只存在于 checkpoint 中。属于终端交互健壮性的系统性缺口。

**6. #6165 [CLOSED] `/hooks edit` 未暂停 TUI 输入线程**（4 评论）
https://github.com/Hmbown/Codewhale/issues/6165
调用 `$EDITOR` 时 TUI 仍在读 stdin，导致击键被编辑器和输入框"瓜分"。已被 PR #6239 修复关闭，是今日被快速响应的高质量反馈。

**7. #6190 [CLOSED] 插入的引导输入顺序错乱**（5 评论）
https://github.com/Hmbown/Codewhale/issues/6190
工作过程中"steer"一条消息，它却显示在已在屏幕上的工作之上，时间线与真实发生顺序不符。用户可读性/心智模型问题，已由 PR #6239 关闭。

**8. #6202 [OPEN] v0.9.14：在编辑路径内嵌 ast-grep-core 拒绝破坏语法的编辑**（2 评论）
https://github.com/Hmbown/Codewhale/issues/6202
当前文件编辑是纯文本补丁，模型产出不平衡括号/截断块/冲突标记时只能等下一次编译或测试才发现。这是 v0.9.14 工具链质量的重要增强方向。

**9. #6142 [OPEN] 合并两套 MCP 客户端栈**（2 评论）
https://github.com/Hmbown/Codewhale/issues/6142
`tui/src/mcp/`（约 13.2k 行）与 `crates/mcp`（约 4.5k 行）功能重名重复，app-server 用 crate、引擎用自己的。属于 0.9.14 重构积压中的架构债清理。

**10. #6231 [CLOSED] 会话历史上限可配置**（2 评论）
https://github.com/Hmbown/Codewhale/issues/6231
`MAX_SESSIONS = 50` 为硬编码常量，超出即删除旧会话。社区要求改为可配置，避免"静默丢历史"。

> 其他值得留意的 Bug：#6234 gruvbox-dark 等主题黑底黑字不可读；#6236 headless `exec` 中 `request_user_input` 永久阻塞；#6232 多仓库工作区下结构化计划子任务无法设置 cwd；#6237 讨论 Ctrl+C 是否应先清空输入框再触发退出。

---

## 四、重要 PR 进展（共 8 条）

**1. #6240 [OPEN] 抢救 GitHub App 评审精度：固定源码上下文 + 基于证据的发现**
https://github.com/Hmbown/Codewhale/pull/6240
把 9 月 13 日后一直无 PR、无人构建的分支 `fix/github-review-quality-20260913` 救回，为每个 hunk 提供固定源码上下文，部分解决 #6135。

**2. #6229 [CLOSED] 原生客户端 Runtime API 路由（files/artifacts/jobs/git/LSP/secrets/targets）**
https://github.com/Hmbown/Codewhale/pull/6229
为 GPUI 桌面端补齐 jobs、工作区文件、会话产物、git、诊断、context、SSH/cloud、LSP、voice 及只写凭据路由。28 个文件、约 +5,900 行，其中 1,758 行为测试，并新增 `docs/RUNTIME_API.md`。

**3. #6239 [OPEN] 抢救丢失的工作：编辑器交接、steer 排序、/models 报错**
https://github.com/Hmbown/Codewhale/pull/6239
一次性关闭 #6165、#6190 及 /models 静默失败问题，是今天修复用户可见缺陷最集中的 PR。

**4. #6238 [OPEN] 编辑安全：写入落地前先做 parse-gate**
https://github.com/Hmbown/Codewhale/pull/6238
在工具编辑路径上设置统一门禁，关闭 #6204（`syn::parse_file` 精确行列表错）、#6206（TOML/JSON 结构校验）、#6205（Rust 区域格式化归一，保持锚点稳定）。

**5. #6233 [OPEN] 告诉用户真正可行的 resume 路径（#6225）**
https://github.com/Hmbown/Codewhale/pull/6233
修正"Resume it in a new Codewhale process"这条实际上无法执行、误导用户的提示文案。

**6. #6175 [CLOSED] v0.9.14 第二批切片：惰性 MCP、会话恢复 + picker UX、启动补救行**
https://github.com/Hmbown/Codewhale/pull/6175
在 v0.9.14 里程碑上堆叠的第二个切片，包含 9 个 Issue 切片 + 1 个 lint 修复，每个 Issue 一个 commit 且逐个验证，覆盖 #6099（`exec --hooks`）等。

**7. #6222 [OPEN] TUI 重设计：Shoreline，两端统一调色板**
https://github.com/Hmbown/Codewhale/pull/6222
将 TUI 改为与 GPUI 客户端一致的配色，并向终端 Agent 市场收敛的交互惯例靠拢。目前为 Draft，核心项尚未完成。

**8. #6105 [CLOSED] 依赖升级：rustls 0.23.43 → 0.23.44**
https://github.com/Hmbown/Codewhale/pull/6105
Dependabot 自动提交的常规安全/版本更新。

---

## 五、功能需求趋势

从本期 50 条 Issue 可提炼出四个主要方向：

1. **会话生命周期与恢复可靠性**（最热）——#6207、#6225、#6185、#6231 集中指向 session picker / resume / 历史保留策略，是当前体验最大的短板。
2. **多客户端 Runtime API 与 IDE/桌面集成**——#6166、#6163、#6164、#6168、#6176、#6152、#6139、#6143 围绕 GPUI 桌面端需要的 `/v1/jobs`、`/v1/artifacts`、`/v1/unread`、turn 队列、事件广播等路由，"一份运行时契约"是主线目标。
3. **工具编辑安全与正确性**——#6202、#6204、#6205、#6206 构成一组"编辑前门禁"需求，防止模型产生破坏语法的补丁。
4. **架构收敛/去重**——#6142（MCP 双栈）、#6143（config 单一权威）等 0.9.14 重构积压，反映代码库存在明显的重复实现。

---

## 六、开发者关注点

- **"静默失败"最伤人**：引擎冻结（#6184）、resume 空白（#6185）、/models 无提示报错（#6173）、headless 无限等待（#6236）——共同点是**没有错误信息**，用户无法区分"卡住/已完成/需人工"。可观测性与明确报错是最高频诉求。
- **新用户首次路径即翻车**：干净安装下 `/quit` → `/resume` 就能触发 #6225，说明核心链路回归测试覆盖不足。
- **终端交互健壮性**：作业控制（#6169）、编辑器交接（#6165）、Ctrl+C 语义（#6237）、主题可读性（#6234）显示 TUI 在真实终端环境下的边界处理仍需打磨。
- **重构债务进入偿还期**：维护者主动从"0.9.14 refactor backlog"批量开单（#6142/#6139/#6143/#6152），预示下一版本以架构收敛和客户端契约统一为主，而非新功能扩张。

---

*注：本期数据中 Issues/PR 实际指向 Hmbown/Codewhale 仓库，与数据来源标注的 Hmbown/DeepSeek-TUI 存在命名差异，建议以链接为准。*

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

# ComfyUI 社区动态日报

**日期：2026-09-16** | **数据来源：comfyanonymous/ComfyUI**

---

## 一、今日速览

过去 24 小时内 ComfyUI 仓库活跃度极高，38 个 PR 与 19 个 Issue 同步更新，核心议题高度聚焦于两点：**`comfy-aimdo 0.5.3` 升级后的 DynamicVRAM 兼容性"灾难"**（Windows BSOD、多卡并发崩溃、单卡编译错误、AMD 显卡输出噪声）以及 **MiniMax H3 视频生成模型的 shape/VRAM 缺陷**。同时，Loop 节点体系正经历一轮系统性重构（loop_boundary 迁移至 schema、异构列表传递、错误提示），Partner Nodes 持续扩展（Tripo P2、Pruna P-Video-2）。

---

## 二、版本发布

过去 24 小时内无新版本发布。上一稳定版本为社区讨论中频繁出现的 **v0.35.2**（涉及 `comfy-aimdo 0.5.3`）。

---

## 三、社区热点 Issues（精选 10 条）

| # | Issue | 主题 | 热度 | 重要性 |
|---|---|---|---|---|
| 1 | [#16246](https://github.com/Comfy-Org/ComfyUI/issues/16246) | **Windows BSOD（dxgmms2.sys UAF）在 v0.35.0+ 升级后频繁复现**，6GB RTX 3050 一天内崩溃 4 次 | ⭐2 / 💬6 | 🔴 极高 |
| 2 | [#16223](https://github.com/Comfy-Org/ComfyUI/issues/16223) | **双实例并发 staging 模型时 `hostbuf_read_file_slice` 设备拷贝失败**，小显存卡崩溃 | 💬6 | 🔴 高 |
| 3 | [#14824](https://github.com/Comfy-Org/ComfyUI/issues/14824) | **A100 上原生 INT8 ConvRot 显著慢于 FP8**（Torch 2.10 + cu130），性能回归 | ⭐0 / 💬24 | 🟠 高（已 Stale） |
| 4 | [#15628](https://github.com/Comfy-Org/ComfyUI/issues/15628) | **MiniMax H3 + DynamicVRAM 导致 RTX 4070 12GB 卡在 "Model Initializing..."**，下层 CUDA illegal memory access | 💬9 | 🔴 高 |
| 5 | [#16342](https://github.com/Comfy-Org/ComfyUI/issues/16342) | **单卡 RTX 5090 + MiniMax H3 text-to-video 报 `aimdo memory compile error: could not start recording`** | 💬1 | 🔴 高（新发） |
| 6 | [#16337](https://github.com/Comfy-Org/ComfyUI/issues/16337) | **AMD RX 9070 XT (gfx1201) + DynamicVRAM 输出全噪声/损坏** | 💬0 | 🟠 高（新发） |
| 7 | [#16335](https://github.com/Comfy-Org/ComfyUI/issues/16335) | **w4a8.safetensors 显存管理反而比 GGUF 大模型更差**（v0.33.1–0.35.0 OOM），已关闭 | 💬1 | 🟡 中（已 Close） |
| 8 | [#16289](https://github.com/Comfy-Org/ComfyUI/issues/16289) | **MiniMax H3 视频续接时叠加独立音色参考导致 tensor shape mismatch** | 💬3 | 🟠 高 |
| 9 | [#16339](https://github.com/Comfy-Org/ComfyUI/issues/16339) | **Ryzen AI MAX+ 395 / Radeon 8060S ROCr AsyncEventsLoop 占用 100% CPU 核** | ⭐1 / 💬0 | 🟡 中（新发） |
| 10 | [#16349](https://github.com/Comfy-Org/ComfyUI/issues/16349) | **自定义节点示例工作流重名/冲突导致模板搜索静默失效**，模板无法加载 | 💬0 | 🟡 中（新发） |

**社区反应总结**：#16246 的 BSOD 是当前最严重的稳定性事件，多用户复现表明这并非孤立问题；aimdo 0.5.3 似乎在 Windows 视频内存管理器和 AMD ROCm 栈上都存在兼容性问题，官方暂未发布 hotfix。

---

## 四、重要 PR 进展（精选 10 条）

| # | PR | 内容 | 状态 |
|---|---|---|---|
| 1 | [#16333](https://github.com/Comfy-Org/ComfyUI/pull/16333) | **Aimdo 0.5.5 升级 + 自动检测并启用 `--fast-disk`**（CORE-440）。Windows fast-disk C 实现 + 内存编译器地址配额优化 | 🟣 已 Close |
| 2 | [#16347](https://github.com/Comfy-Org/ComfyUI/pull/16347) | **将 Loop 边界声明迁移至节点 schema**，并把 executionList 输入标记为严格内部（CORE-439） | 🟣 已 Close |
| 3 | [#16345](https://github.com/Comfy-Org/ComfyUI/pull/16345) | **修复异构 Create List 在 Generic Loop 中只传递首项的 Bug**（修复 #16343） | 🟣 已 Close |
| 4 | [#16346](https://github.com/Comfy-Org/ComfyUI/pull/16346) | **守护 `prompt_worker` 防止未捕获异常杀线程**（修复 #16312） | 🟢 OPEN |
| 5 | [#16344](https://github.com/Comfy-Org/ComfyUI/pull/16344) | **MiniMax H3：保留 Fun-ControlNet tower 稠密性 + BlockSparseAttention 与既有 block patch 兼容** | 🟢 OPEN |
| 6 | [#16348](https://github.com/Comfy-Org/ComfyUI/pull/16348) | **修复自定义节点示例工作流重名/不可达**，deduplicate 五个 legacy 文件夹别名 | 🟢 OPEN |
| 7 | [#16350](https://github.com/Comfy-Org/ComfyUI/pull/16350) | **workflow templates 升级到 v0.11.62** | 🟣 已 Close |
| 8 | [#16351](https://github.com/Comfy-Org/ComfyUI/pull/16351) | **让 llama RoPE 在更多模型上使用 fast kernels**（by comfyanonymous） | 🟣 已 Close |
| 9 | [#16355](https://github.com/Comfy-Org/ComfyUI/pull/16355) | **execution 修复：上报 loop 异常而非让 prompt validation 崩溃** | 🟢 OPEN |
| 10 | [#16356](https://github.com/Comfy-Org/ComfyUI/pull/16356) | **从 #16297 re-port 四项 runtime 修复**：含分页、绑定键等 panel review 反馈 | 🟢 OPEN |

**值得额外关注的并列 PR**：
- [#16047](https://github.com/Comfy-Org/ComfyUI/pull/16047) **Node API SDK 2.0：ref-based 节点执行 + provider seam**（架构性变革）
- [#16242](https://github.com/Comfy-Org/ComfyUI/pull/16242) **API 节点凭证刷新安全增强**（BE-13269）
- [#16315](https://github.com/Comfy-Org/ComfyUI/pull/16315) / [#16320](https://github.com/Comfy-Org/ComfyUI/pull/16320) **Pruna P-Video-2 / Tripo P2 Partner Nodes**

---

## 五、功能需求趋势

从今日 Issue 矩阵提炼：

| 方向 | 代表 Issue | 趋势强度 |
|---|---|---|
| **模型动态加载 / 显存管理** | #16246、#16223、#15628、#16335、#16337、#16342 | 🔥🔥🔥 当前头号热点 |
| **MiniMax H3 视频模型配套** | #15628、#16289、#16342、#16344、#15139 (Wan VACE/ID-V2V) | 🔥🔥🔥 持续升温 |
| **Loop / 条件流图执行鲁棒性** | #16343 (Closed)、#16345、#16347、#16355 | 🔥🔥 重构期 |
| **AMD ROCm / Windows 兼容性** | #16337 (RX 9070)、#16339 (Ryzen AI MAX)、#15117 (WinError 4551) | 🔥🔥 |
| **Queue / 工作流 UI 增强** | #16352（切 tab 不打断队列）、#16349（模板搜索静默失效） | 🔥 |
| **性能回归** | #14824（INT8 ConvRot）、#15264（subgraph ksampler 预览消失）、#13876（模型下载 GUI 失效） | 🔥 |
| **新模型/新节点支持** | #15139（ID-V2V Wan 2.1）、Partner Nodes（Tripo/Pruna） | 🔥 |

---

## 六、开发者关注点

1. **`comfy-aimdo 0.5.3` 是一颗"定时炸弹"**：触发 BSOD、CUDA illegal memory access、AMD 输出损坏、单卡编译失败等多平台问题。官方 PR #16333 已升级到 0.5.5 并加入 `--fast-disk` 自动检测，建议用户短期内可尝试 `--disable-comfy-compiler` 临时绕过（见 #16342）。

2. **MiniMax H3 模型的"silent failure"问题严重**：用户在 Fun-ControlNet + BlockSparseAttention 组合下拿到的视频看起来"合理但实际损坏"，开发者需要建立"silent corruption detection"机制（参见 PR #16344）。

3. **Loop 节点正式进入"工程化阶段"**：边界声明从类属性迁移到 schema，异构列表支持修复，未捕获异常守护上线 —— 表明 Core 团队正在为复杂工作流的稳定运行打地基。

4. **Node API SDK 2.0 标志架构升级**：ref-based 执行 + provider seam 为未来模型/MoE 执行后端预留扩展点，是社区值得长期关注的"地基级"演进。

5. **Windows 用户系统性"被遗忘"**：BSOD、WinError 4551、应用控制策略阻止 PyTorch DLL 加载 —— 这些问题集中在 Windows 平台，提示官方需加强对 Windows 视频内存管理器和 Application Control 政策的测试覆盖。

6. **生态扩张进入"Partner Nodes"加速期**：Tripo、Pruna 持续接入，且配套了 Metronome 计费与自动测试，体现商业化路径逐步成型。

---

> 📌 **TL;DR**：今日 ComfyUI 主线是"**aimdo 0.5.3 兼容性危机 + Loop 节点重构 + MiniMax H3 模型打磨**"。建议普通用户暂留 v0.34.x，或升级时关注 PR #16333 之后的 aimdo 0.5.5 版本。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama 社区动态日报 (2026-09-16)**  

---

### 今日速览  
- Ollama 发布了 **v0.34.2‑rc0**，主要带来了 llama.cpp 的更新，为后续模型兼容性和性能奠定基础。  
- 社区围绕 **下载速率限制、云端 Prompt Cache、国际化手机验证、边缘设备内存 OOM** 等议题展开热烈讨论，功能需求正向云服务、硬件加速和工具链完善方向聚焦。  

---

### 版本发布  
- **v0.34.2‑rc0 (v0.34.2)** – llama.cpp 更新  
  - 链接：https://github.com/ollama/ollama/compare/v0.34.1...v0.34.2-rc0  
  - 说明：此版本仅更新了底层 llama.cpp，未引入新功能，为后续稳定版做准备。  

---

### 社区热点 Issues（精选 10 条）  

| # | 标题 | 为什么重要 | 社区反应 | 链接 |
|---|------|------------|----------|------|
| #2006 | **Rate limit download speed on pulling new models** | 提供 `ollama pull --speed <kbps>` 能力，对带宽受限环境（CI、边缘节点）极具价值。 | 90 条评论，103 👍，讨论活跃，已有实现方案。 | https://github.com/ollama/ollama/issues/2006 |
| #16714 | **Ollama Cloud – Prompt Cache Support** | 云端 Prompt Cache 能显著降低 agentic 工作流的 token 成本，与 Open Code Zen 等竞品保持竞争力。 | 已关闭，38 评论，7 👍，表明需求明确。 | https://github.com/ollama/ollama/issues/16714 |
| #16060 | **Phone number verification does not accept non‑US numbers (Germany)** | 阻碍非美国用户升级付费计划，影响全球化商业化进程。 | 15 评论，0 👍，但持续被提及，亟需修复。 | https://github.com/ollama/ollama/issues/16060 |
| #18396 | **Jetson Orin Nano 8GB: Gemma 4 E4B OOM with --load-mode dio** | 揭示当前 DIO 加载方式在统一内存平台上的内存爆炸问题，直接影响 Jetson 开发者采用 Ollama。 | 8 评论，0 👍，技术讨论集中在内存映射和交换策略。 | https://github.com/ollama/ollama/issues/18396 |
| #17787 | **Since v0.32.2, loading any gemma4:e2b or e4b model uses too much memory on Jetson Orin Nano** | 与 #18396 相关，指出版本回退后内存恢正，提示近期更改导致的回归。 | 5 评论，1 👍，社区期望回退或提供选项。 | https://github.com/ollama/ollama/issues/17787 |
| #18368 | **Chat processing fails silently after about 6k tokens with no GUI notification (macOS GUI)** | 长文本对话在 macOS GUI 下静默失败，影响用户体验和调试。 | 5 评论，0 👍，需改进错误上报和 GUI 提示。 | https://github.com/ollama/ollama/issues/18368 |
| #18414 | **Some models have undocumented version requirements** | 模型页面缺少 Ollama 最低版本声明，导致拉取后出现不可预期的错误。 | 0 评论，0 👍，但属于文档可改进的高频问题。 | https://github.com/ollama/ollama/issues/18414 |
| #18463 | **`ollama launch claude` starts 1M‑context cloud models with a 200K window, and labels a 262K model as 1M** | Claude 上下文窗口标注不准确，可能导致 token 超限或资源浪费。 | 0 评论，0 👍，但直接影响 Claude 集成的可用性。 | https://github.com/ollama/ollama/issues/18463 |
| #18477 | **Vulkan iGPU runner wedges after a cancelled large prefill — later requests hang silently until backend restart** | Intel Lunar Lake iGPU 在取消大预填充后卡死，影响稳定性和自动恢复能力。 | 0 评论，0 👍，属于后端运行时的关键 bug。 | https://github.com/ollama/ollama/issues/18477 |
| #18474 | **Extremely slow response times when using Claude integration** | Claude Desktop 集成出现 ~50 s 延迟和 malformed tool‑call 输出，严重影响开发效率。 | 0 评论，0 👍，社区期望性能优化和协议兼容性提升。 | https://github.com/ollama/ollama/issues/18474 |

---

### 重要 PR 进展（精选 10 条）  

| # | 标题 | 功能/修复内容 | 链接 |
|---|------|--------------|------|
| #18459 | **server: fix MLX structured output after thinking** | 修复了思考模式下结构化输出前会泄漏导致 JSON 开头出现 stray “.” 的问题（对应 #18441）。 | https://github.com/ollama/ollama/pull/18459 |
| #18473 | **Expose model thinking levels and defaults** | 新增 API/CLI 接口，让用户查询和设置模型的思考深度（thinking level）及其默认值。 | https://github.com/ollama/ollama/pull/18473 |
| #18472 | **server: handle thinking in native generate templates** | 原生 `/api/generate` 路径现在能够正确分离思考内容与可见响应，防止思考 token 被当作普通输出返回。 | https://github.com/ollama/ollama/pull/18472 |
| #18471 | **model/parsers: parse Gemma 4 BEGIN_ARG tool calls** | 支持 Gemma 4 使用 `call:<name>: BEGIN_ARG … END_ARG` 形式的工具调用，兼容恶formed 标记并上报错误。 | https://github.com/ollama/ollama/pull/18471 |
| #18470 | **test: split create integration tests out** | 将创建模型的集成测试拆分为独立的测试组，便于并行执行和缓存控制。 | https://github.com/ollama/ollama/pull/18470 |
| #18469 | **server: abort downstream stream when cloud upstream truncates** | 当云端流提前结束时，主动中断下游流并在客户端返回错误，避免客户端无限等待。 | https://github.com/ollama/ollama/pull/18469 |
| #18466 | **linux: fix Vulkan inference support on ARM64** | 为 Linux ARM64 镜像打包 Vulkan 后端，并正确识别含有 Apple 设备名称的 Vulkan 设备描述。 | https://github.com/ollama/ollama/pull/18466 |
| #18465 | **anthropic: keep an inline system message out of the system block** | 防止 Claude Code 注入的 `role: "system"` 消息被错误地合并进系统提示，保持 Anthropic API 规范。 | https://github.com/ollama/ollama/pull/18465 |
| #18464 | **cmd/launch: align Claude context suffix with effective cloud context window** | 根据实际云端模型上下文大小自动追加 `[1m]` 后缀，修复 #18463 中的窗口不匹配问题。 | https://github.com/ollama/ollama/pull/18464 |
| #18446 | **llama.cpp: version bump b10969** | 更新 llama.cpp 至 b10969，解决以前版本中出现的 libllama 与 libmtmd 重复符号冲突。 | https://github.com/ollama/ollama/pull/18446 |

---

### 功能需求趋势  
从本周 Issues 与 PR 中可归纳出以下热点方向：  

1. **云服务增强** – Prompt Cache、更稳的云端流处理、云模型版本与上下文透明化（#16714

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

# llama.cpp 社区动态日报 · 2026-09-16

## 一、今日速览

过去 24 小时 llama.cpp 合并了 **10 个 release（b10976–b10988）**，核心主线是**多后端性能优化**：Vulkan 新增稀疏 Flash Attention、OpenCL 补上通用 ssm_scan 与 MoE GEMM 调度、Metal 支持 MiniCPM3 的 FA 头维度、CUDA 支持行连续 SUM_ROWS。社区侧最热的话题仍是 **SWA/循环记忆导致的 prompt 重复处理**（#21831，52 条评论）与 **Vulkan 性能回退**（#24066，45 条评论）；同时 HIP/ROCm、SYCL、OpenVINO 等多条后端线的回归问题持续发酵。

---

## 二、版本发布（过去 24 小时）

| 版本 | 内容 |
|---|---|
| [b10988](https://github.com/ggml-org/llama.cpp/releases/tag/b10988) | OpenCL：按 batch size 选择 MoE expert matmul，用于投机解码 / MTP；不再向填充的 MoE 激活槽写零 |
| [b10985](https://github.com/ggml-org/llama.cpp/releases/tag/b10985) | RPC：`hash-cache` 仅对权重生效，避免对所有传输做哈希缓存 |
| [b10984](https://github.com/ggml-org/llama.cpp/releases/tag/b10984) | CUDA：支持行连续（row-contiguous）SUM_ROWS，并顺带支持 MEAN，新增 permute/slice 测试 |
| [b10983](https://github.com/ggml-org/llama.cpp/releases/tag/b10983) | models：将 `build_arch_graph()` 移到 `graph<>` 模板特化之后，修复定义顺序问题 |
| [b10982](https://github.com/ggml-org/llama.cpp/releases/tag/b10982) | **Vulkan：支持稀疏 Flash Attention（DSV4/GLM）**，含测试、规避非确定性 atomicAdd、新增 cm2 解码向量 |
| [b10981](https://github.com/ggml-org/llama.cpp/releases/tag/b10981) | OpenVINO：优化有状态解码与 GPU MoE 推理；修复 Gemma-4 分层 head size、MSVC 窄化错误 |
| [b10980](https://github.com/ggml-org/llama.cpp/releases/tag/b10980) | OpenCL：新增通用 `ssm_scan` |
| [b10978](https://github.com/ggml-org/llama.cpp/releases/tag/b10978) | **Metal：新增 HSK=96 / HSV=64 的 FA kernel（MiniCPM3）** |
| [b10977](https://github.com/ggml-org/llama.cpp/releases/tag/b10977) | CI：Windows x64 CUDA 构建升级至 13.4.1 |
| [b10976](https://github.com/ggml-org/llama.cpp/releases/tag/b10976) | CI：修复 Android release |

---

## 三、社区热点 Issues

1. **[#21831](https://github.com/ggml-org/llama.cpp/issues/21831) 服务器对后续请求强制全量重新处理 prompt（SWA/循环记忆错误）** — 52 评论 / 30 👍，今日最热。Windows + CUDA 环境可复现，涉及 SWA 记忆管理，属于影响多轮对话性能的严重问题，社区关注度极高。
2. **[#24066](https://github.com/ggml-org/llama.cpp/issues/24066) Vulkan：近期版本性能下降** — 45 评论。RX 6600 上跑 Qwen3.5-9B 出现回退，是 Vulkan 用户的主要痛点。
3. **[#25452](https://github.com/ggml-org/llama.cpp/issues/25452) DSV4-Flash 复用 SWA KV-cache 耗尽（崩溃 + 卡死）** — 12 评论。多卡 96GB 环境仍触发，属新模型 + 长上下文的稳定性问题。
4. **[#21779](https://github.com/ggml-org/llama.cpp/issues/21779) 规划：为 server 增加模型管理 API** — 10 评论。计划提供 `GET /models?reload=1`、`POST /models/download` 等，是 server 向生产级演进的重要方向。
5. **[#28753](https://github.com/ggml-org/llama.cpp/issues/28753) ggml 崩溃：`ggml_backend_sched_alloc_splits` 意外图重分配** — 8 评论。Intel Arc + SYCL 环境，属调度器核心逻辑问题。
6. **[#28778](https://github.com/ggml-org/llama.cpp/issues/28778) SYCL：DFlash2 草稿模型触发 GPU 驱动 TDR 复位** — 8 评论。双 Arc Pro B70 上直接触发驱动超时重置，影响 MTP/投机解码在 SYCL 上的可用性。
7. **[#28860](https://github.com/ggml-org/llama.cpp/issues/28860) SYCL：启用 ngram-mod 时要求 2GB+ 超大 scratchpad** — 8 评论。内存占用异常，影响 Arc A770 用户体验。
8. **[#28726](https://github.com/ggml-org/llama.cpp/issues/28726) OpenVINO：因 AVX-512 崩溃（STATUS_ILLEGAL_INSTRUCTION）** — 7 评论。Core Ultra 7 265K 上直接崩溃，属指令集分发兼容问题。
9. **[#24437](https://github.com/ggml-org/llama.cpp/issues/24437) HIP：`GGML_HIP_ROCWMMA_FATTN=ON` 在 gfx1151 上预填严重回退（长上下文 −41%）** — 7 评论。Strix Halo 用户关注度持续。
10. **[#27469](https://github.com/ggml-org/llama.cpp/issues/27469) 功能请求：在公共 C API（llama.h）暴露投机解码/MTP** — 8 👍 / 3 评论。下游绑定（bindings）生态的强烈诉求，赞数最高之一。

> 其他值得留意：[#28954](https://github.com/ggml-org/llama.cpp/issues/28954)（Gemma4 图像 >1.2Mpx 触发 assert，疑似回归）、[#28933](https://github.com/ggml-org/llama.cpp/issues/28933)（Qwen3.8-Flash-Next 在 128GB 统一内存上 RSS/swap 持续增长）、[#28433](https://github.com/ggml-org/llama.cpp/issues/28433)（draft-mtp 上下文按总 ctx 而非单序列分配，大 ctx 下直接崩）。

---

## 四、重要 PR 进展

1. **[#28948](https://github.com/ggml-org/llama.cpp/pull/28948) Metal：MoE 与 SSM_CONV 融合优化（ggerganov 亲自提交）** — 合并 Top-k MoE 路由（SOFT_MAX+ARGSORT+GET_ROWS）、MoE 加权归约、RMS_NORM+SCALE、SSM_CONV+silu 等，Apple 平台端到端提速。
2. **[#28967](https://github.com/ggml-org/llama.cpp/pull/28967) CUDA：为张量并行加入 NCCL 支持** — 定义跨进程集合通信后端接口并在 RPC server 中启用，是分布式推理的重要基础设施。
3. **[#24406](https://github.com/ggml-org/llama.cpp/pull/24406) Vulkan：Intel Xe Flash Attention 优化 kernel（2/3）** — 覆盖 Xe-LPG Plus / Xe2 / Xe3，Intel 集成显卡的 FA 加速。
4. **[#26001](https://github.com/ggml-org/llama.cpp/pull/26001) CUDA：GDN（Gated Delta Net）分块 kernel 用于预填** — ≥128 token 时显著提速，直接利好 Qwen3.8 等混合线性注意力模型。
5. **[#28943](https://github.com/ggml-org/llama.cpp/pull/28943) HIP：WMMA Flash Attention 跳过完全被 mask 的 KV tile** — 仅 19 行改动，改善 server 多 slot 共享 KV cache 时的预填效率。
6. **[#28907](https://github.com/ggml-org/llama.cpp/pull/28907) HIP：在 CDNA 上为 dkq>256 启用 fattn-mma kernel（大 batch）** — 大 head size 场景下提升吞吐。
7. **[#28714](https://github.com/ggml-org/llama.cpp/pull/28714) HIP：拆分 mma 与 load tile 优化 MMQ 流水线（RDNA 3.5）** — 覆盖 q4_0/q8_0/q4_K/q5_K 的批处理与预取。
8. **[#28313](https://github.com/ggml-org/llama.cpp/pull/28313) ROCm：重写 TOP_K kernel** — 新增小规模 kernel 并整理最优分支，缓解采样瓶颈。
9. **[#26539](https://github.com/ggml-org/llama.cpp/pull/26539) Hexagon：HMX Flash Attention 支持 head_dim 非 64 倍数** — 如 SigLIP 的 head_dim=72，避免回退到 HVX/CPU 慢路径。
10. **[#27221](https://github.com/ggml-org/llama.cpp/pull/27221) server：允许 `reasoning_effort` 控制 `enable_thinking`** — 修复与 `--reasoning on|off` 的优先级冲突，呼应 [#27023](https://github.com/ggml-org/llama.cpp/issues/27023)。

> 其他：[#28966](https://github.com/ggml-org/llama.cpp/pull/28966) 用 ggml tensor 替换 llama-quant 字节向量、[#28968](https://github.com/ggml-org/llama.cpp/pull/28968) llama-bench 新增 `--repack`、[#28965](https://github.com/ggml-org/llama.cpp/pull/28965) 修复 Gemma4/Qwen35 融合 QKV 的张量并行切分。

---

## 五、功能需求趋势

从本期 Issues/PRs 提炼，社区关注方向集中在：

- **投机解码 / MTP 全面铺开**：OpenCL MoE GEMM 调度（b10988）、DFlash2（#28778）、draft-mtp 上下文分配（#28433）、公共 C API 暴露 MTP（#27469）、DeepSeek-v4 DSpark/Dflash（#28939）——已从特性尝鲜进入"跨后端可用性 + API 化"阶段。
- **新模型支持节奏加快**：Gemma4（#28954、#28726）、Qwen3.8 / qwen4exp（#28933、#28734）、GLM-5.3-Flash（#28282）、DSV4/GLM 稀疏 FA（b10982）、MiniCPM3（b10978）。
- **多后端性能与稳定性**：Vulkan、HIP/ROCm、SYCL、OpenCL、Metal、OpenVINO、Hexagon 均有独立 PR/Issue 线，性能回退类问题占相当比重。
- **服务端生产能力**：模型管理 API（#21779）、reasoning_effort 控制（#27221）、多 slot 共享 KV cache 优化（#28943）。
- **分布式 / 张量并行**：NCCL 集合通信（#28967）、融合 QKV 的 TP 切分修复（#28965）。
- **量化与工具链**：llama-quant 内部重构（#28966）、llama-bench `--repack`（#28968）。

---

## 六、开发者关注点

1. **内存与 KV cache 管理是最大痛点**：SWA/循环记忆导致重复处理（#21831）、SWA KV-cache 耗尽崩溃（#25452）、scratchpad 异常膨胀（#28860）、RSS/swap 持续增长（#28933）、draft-mtp 上下文尺寸错误（#28433）——多条高优先级问题都指向上下文与缓存分配策略。
2. **后端回归比新功能更受关注**：Vulkan 性能下降（#24066）、HIP FATTN 回退（#24437）、gfx1201 WMMA 调度阈值（#28867）、Gemma4 图像 assert 回归（#28954），开发者对"升级后变慢/变崩"高度敏感。
3. **多后端一致性诉求强烈**：同一模型在不同后端（HIP vs Vulkan、CUDA vs SYCL）表现差异被反复报告（#28768、#28282），用户期望行为可预期。
4. **公共 API 与下游生态**：MTP/投机解码暴露到 `llama.h`（#27469）、模型管理 API（#21779），反映绑定作者与生产部署者的长期需求。
5. **指令集 / 编译兼容性**：AVX-512 崩溃（#28726）、CUDA 12.8 汇编错误（#27459）、LLVM 23 + HIP 链接错误（#28814），构建环境碎片化仍是持续负担。
6. **CI 基础设施波动**：Spark runner 下线导致 `self-hosted, fast` 任务卡死（#28959），以及 Android release 修复（b10976），说明发布流水线稳定性仍需关注。

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*