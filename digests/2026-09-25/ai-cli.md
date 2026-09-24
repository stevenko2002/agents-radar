# AI CLI 工具社区动态日报 2026-09-25

> 生成时间: 2026-09-24 22:16 UTC | 覆盖工具: 12 个

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



以下是今日（2026-09-25）各 AI CLI 工具社区最重要的 8 条更新摘要：

1. **Claude Code 发布 v2.1.282**：新增 `maxProseWidth` 配置项以限制终端中散文输出的宽度（表格与代码块保持全宽），并在启动提示、`/status` 和 `claude doctor` 中列出项目设置文件中未被识别的 telemetry 变量。 ([链接](https://github.com/anthropics/claude-code))
2. **OpenAI Codex 底层 Rust 快速迭代**：发布 `0.158.0-alpha.6` 至 `alpha.10` 等多个 Alpha 版本，主要聚焦于内部架构重构、性能优化以及部分已知 Bug 的修复。 ([链接](https://github.com/openai/codex))
3. **Gemini CLI 发布 v0.62.0-nightly.20260924 / v0.62.0-preview.0**：修复了 A2A 服务端在 tasks metadata 端点遇到不支持的 store 时未早期返回的问题，并增加了连接恢复时的重试进度指示器。 ([链接](https://github.com/google-gemini/gemini-cli))
4. **GitHub Copilot CLI 发布 v1.0.89-2 和 v1.0.89-3**：v1.0.89-2 新增了 MCP 预注册 OAuth 客户端遵守配置的 `oauthScopes`，以及本地会话中连续按 `Esc Esc` 撤销尚未开始回答的 prompt 的功能；v1.0.89-3 修复了 Ask-user 表单在多问题间 "Other" 自定义答案跨问题污染的问题。 ([链接](https://github.com/github/copilot-cli))
5. **Qwen Code 发布 v0.24.5 及 Desktop v0.24.5**：解耦了群组成员访问策略与 `senderPolicy`，保留会话创建失败的诊断信息，并在 SDK Java 中新增了托管运行时（Managed Runtime）支持。 ([链接](https://github.com/QwenLM/qwen-code))
6. **OpenCode 合并 PR #44757，默认启用 LSP 工具**：移除了 `packages/opencode/src/tool/registry.ts` 中的 `flags.experimentalLspTool` 门控，使 `tool.lsp` 始终作为正式默认能力注册。 ([链接](https://github.com/anomalyco/opencode))
7. **Ollama 合并 System One 结构化决策 API 及 Granite 模型 MLX 后端支持**：新增了基于本地轻量级决策模型 Von 的单次前向分类 API，并实现了对 Granite 模型的 MLX 后端支持。 ([链接](https://github.com/ollama/ollama))
8. **llama.cpp 发布 b11157 至 b11169 等日常构建**：修复了 llama-grammar 中 token_id 解析的数值截断问题，改进了 Hexagon 后端动态量化器，并为 AMD RDNA3 和 RDNA4 GPU 添加了 Vulkan INT8 coopmat1 矩阵乘法实现。 ([链接](https://github.com/ggerganov/llama.cpp))

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills 社区热点报告
**数据截止：2026-09-25 | 来源：anthropics/skills**

> ⚠️ 数据说明：PR 评论数与 👍 数据在当前抓取中显示为 `undefined`/`0`，因此排行主要依据 **PR 活跃度（最近更新时间）、功能创新性与社区 Issue 反映的需求热度** 综合判断。

---

## 一、热门 Skills 排行

### 1. `proofcore-contract-auditor` — Web3 智能合约审计
- **PR #1771** | 作者: ProofCore-Protocol | 创建: 2026-09-15 | 状态: OPEN
- **功能**：对 Solidity/Rust 智能合约做自动静态分析，并将加密审计证明锚定到 TON 公链（Merkle 零存储协议）。
- **热点**：将 AI 审计与区块链不可验证性结合，面向 Web3 开发者，属于 Skills 生态中稀缺的「链上+AI」交叉方向。
- [链接](https://github.com/anthropics/skills/pull/1771)

### 2. `md2video-audio` — Markdown 一键转视频+配音
- **PR #1703** | 作者: 70v-Yoyo | 创建: 2026-09-01 | 状态: OPEN
- **功能**：通过 Marp 将 Markdown 转为演示幻灯片，再合成带真人级语音旁白的 MP4 视频，零成本。
- **热点**：内容创作自动化方向，覆盖「文档→视频」这一高频但此前无人覆盖的场景。
- [链接](https://github.com/anthropics/skills/pull/1703)

### 3. `awt` (AI Watch Tester) — AI 驱动的 E2E 测试
- **PR #822** | 作者: ksgisang | 创建: 2026-03-31，更新: 2026-09-19 | 状态: OPEN
- **功能**：赋予 Claude 视觉与浏览器控制能力，零代码生成 E2E 测试，自动运行。
- **热点**：与 `testing-patterns` 形成互补，社区对「AI 自己测试自己」的需求持续走高。
- [链接](https://github.com/anthropics/skills/pull/822)

### 4. `testing-patterns` — 全栈测试方法论
- **PR #723** | 作者: 4444J99 | 创建: 2026-03-22，更新: 2026-09-21 | 状态: OPEN
- **功能**：覆盖测试哲学（Testing Trophy 模型）、单元测试（AAA 模式）、React 组件测试、API/集成测试的完整测试栈。
- **热点**：将软件工程测试理论沉淀为可执行 Skill，解决「AI 不知道什么该测、什么不该测」的痛点。
- [链接](https://github.com/anthropics/skills/pull/723)

### 5. `blast-radius` — 批量/破坏性操作前的检查清单
- **PR #1776** | 作者: kishormorol | 创建: 2026-09-17 | 状态: OPEN
- **功能**：在执行批量写操作（归档用户、撤销权限、删除行、群发邮件）前，对「行级查询正确」与「世界级操作正确」之间的差距做分类检查。
- **热点**：DevOps/SRE 领域的精准刚需，直击 AI Agent 执行破坏性操作时的安全盲区。
- [链接](https://github.com/anthropics/skills/pull/1776)

### 6. `pyxel` — 复古游戏开发
- **PR #525** | 作者: kitao | 创建: 2026-03-05，更新: 2026-09-22 | 状态: OPEN
- **功能**：在 Python 中创建、调试和验证复古游戏，支持无头输入驱动运行、逐帧检查和状态校验。
- **热点**：游戏开发方向的首个官方生态 Skill，作者持续维护半年以上，社区黏性高。
- [链接](https://github.com/anthropics/skills/pull/525)

### 7. `document-typography` — AI 生成文档的排版质量控制
- **PR #514** | 作者: PGTBoos | 创建: 2026-03-04 | 状态: OPEN
- **功能**：防止 orphan word wrap（孤词换行）、widow paragraphs（段落孤悬）、编号错位等排版问题。
- **热点**：每个 AI 生成文档都会遇到的「最后一公里」体验问题，实用性强。
- [链接](https://github.com/anthropics/skills/pull/514)

### 8. `skill-quality-analyzer` & `skill-security-analyzer` — 元技能分析
- **PR #83** | 作者: eovidiu | 创建: 2025-11-06，更新: 2026-01-07 | 状态: OPEN
- **功能**：从结构文档、安全性、可执行性等 5 个维度评估 Claude Skills 质量；安全分析器检测信任边界风险。
- **热点**：社区自反性工具——用 Skills 评估 Skills，随着生态膨胀，这类元工具价值陡增。
- [链接](https://github.com/anthropics/skills/pull/83)

---

## 二、社区需求趋势

从 Issues（按评论数排序前 15 条）提炼出以下核心需求方向：

| 需求方向 | 代表 Issue | 热度信号 |
|---|---|---|
| **🔐 安全与信任边界** | #492（社区 Skill 冒充 `anthropic/` 命名空间，43 评论）、#1175（SharePoint 安全） | 🔴 最高优先级，社区最焦虑 |
| **🏢 组织级协作共享** | #228（Skill 组织内直接分享，16 评论 / 8 👍） | 企业场景刚需 |
| **🔍 Skill 触发与发现** | #556（`claude -p` 触发率 0%，12 评论 / 7 👍）、#62（Skill 丢失，10 评论） | 基础体验痛点 |
| **🧠 记忆与上下文管理** | #1329（`compact-memory` 符号化紧凑记忆，9 评论）、#1487（`claude-api` Skill 惰性注入 156k token） | 长对话/Agent 场景瓶颈 |
| **🧪 测试与质量门禁** | #412（agent-governance 治理模式）、#1385（Reasoning Quality Gate Pipeline，3 道质量门） | AI 自我质量控制 |
| **🧩 MCP 协议集成** | #16（将 Skills 暴露为 MCP）、#1390（mcp-builder 评估脚本 0 分） | 生态互通诉求 |
| **📄 文档生态完善** | #189（document-skills 与 example-skills 重复安装，9 👍） | 插件去重需求 |
| **☁️ 多云/平台兼容** | #29（AWS Bedrock 使用） | 跨部署环境 |

**关键趋势判断**：
1. **安全焦虑排第一**——社区 Skill 冒充官方是当前最严重的生态风险（Issue #492 独占 43 条评论）。
2. **「AI 测试 AI」成为共识方向**——testing-patterns、AWT、agent-governance、reasoning quality gate

---



# Claude Code 社区动态日报 — 2026-09-25

---

## 1. 今日速览

Claude Code 发布 **v2.1.282**，引入 `maxProseWidth` 文本宽度控制与启动 telemetry 变量提示。社区过去 24 小时内无新增开放 Issue，所有高热度条目均为历史遗留（已标记 stale/closed），反映出团队当前重心在功能迭代而非缺陷响应。PR 活跃度集中于 diff、telemetry 与 AGENTS.md 读取逻辑的精细化修复。

---

## 2. 版本发布

### v2.1.282

| 变更项 | 说明 |
|--------|------|
| `maxProseWidth` 设置 | 新增配置项，限制 Claude 散文输出在宽终端中的宽度，表格与代码块不受影响，保持全宽显示 |
| 启动提示与 `/status` / `claude doctor` 增强 | 列出项目设置文件中未被识别的 telemetry 变量，帮助用户排查配置遗漏 |

> 该版本侧重终端渲染体验与可观测性，未涉及核心 Agent 逻辑变更。

---

## 3. 社区热点 Issues（精选 10 条）

### 🔴 高关注（评论 ≥ 8，社区反响强烈）

| # | 标题 | 热度 | 为什么重要 |
|---|------|------|-----------|
| [#30176](https://github.com/anthropics/claude-code/issues/30176) | `.ignore` 不被文件选择器尊重 | 👍3 / 💬22 | **Bedrock + macOS + TUI 回归 bug**，文件选择器忽略 `.ignore` 规则，直接影响文件浏览安全性与准确性 |
| [#64592](https://github.com/anthropics/claude-code/issues/64592) | Cowork VM 服务在 Windows 11 上无法启动 | 💬13 | Windows Cowork 核心功能阻塞，内置恢复方式全部无效，需手动开启虚拟化，影响桌面端可用性 |
| [#36700](https://github.com/anthropics/claude-code/issues/36700) | Cowork 远程插件缓存无强制更新路径 | 👍1 / 💬13 | 远程插件只读挂载，服务端更新后客户端无感知，缺乏类似 CLI 的 `git pull` 机制 |
| [#51464](https://github.com/anthropics/claude-code/issues/51464) | Segmentation fault（段错误） | 💬12 | Windows 平台 core 层崩溃，属于稳定性硬伤，版本回归 |
| [#50982](https://github.com/anthropics/claude-code/issues/50982) | Windows 桌面端 SSH 会话重启后 UI 消息历史丢失 | 👍7 / 💬8 | 远程工作场景关键数据丢失问题，影响长时间开发会话的连续性 |

### 🟡 中等关注（安全 / 跨平台 / 功能缺陷）

| # | 标题 | 热度 | 为什么重要 |
|---|------|------|-----------|
| [#61675](https://github.com/anthropics/claude-code/issues/61675) | `/goal` 长 prompt 无「折叠」控制，隐藏任务状态 | 👍3 / 💬6 | TUI 交互缺陷，长 prompt 场景下用户无法查看进度 |
| [#87266](https://anthropics/claude-code/issues/87266) | 疑似 prompt injection：后台子 Agent 工具流中注入隐藏指令 | 💬3 | **安全敏感问题**，子 Agent 输出中出现伪装 system-reminder 的指令，要求隐藏文件状态 |
| [#77239](https://github.com/anthropics/claude-code/issues/77239) | Claude in Chrome 浏览器定位在不同 Profile/设备间不稳定 | 💬3 | 跨设备/跨 Profile 的浏览器自动化可靠性问题 |
| [#87251](https://github.com/anthropics/claude-code/issues/87251) | Windows：工具调用参数中单反斜杠路径导致 JSON 解析失败 | 💬1 | Windows 路径反斜杠未转义，直接导致工具调用整体失败 |
| [#87263](https://github.com/anthropics/claude-code/issues/87263) | Windows 定时任务会话在 ~2.1.220/221 后无故终止 | 💬1 | 权限提示 + WarmLifecycle 空闲断开导致孤儿进程，调度器并发槽位被占满 |

---

## 4. 重要 PR 进展（5 条，全部已合并/关闭）

| # | 标题 | 作者 | 说明 |
|---|------|------|------|
| [#96364](https://github.com/anthropics/claude-code/pull/96364) | AGENTS.md 自动分页读取不再重复计为「已交付」 | poteat | 嵌套 `AGENTS.md` 的 `Read` 超过 token 上限被分页时，后续目录下的读取不再重复附加，避免上下文膨胀 |
| [#96363](https://github.com/anthropics/claude-code/pull/96363) | diff：传递 `--no-color` 避免强制着色清空 diff 正文 | poteat | 仓库配置 `color.ui=always` 时，ANSI 转义导致 diff 行匹配失败，修复后 diff 正文正常显示 |
| [#96487](https://github.com/anthropics/claude-code/pull/96487) | telemetry：行数据携带引擎版本、基础版本与构建时间 | poteat | 外部构建版本 telemetry 行之前缺失版本信息，现通过 `$.session.version()` 统一获取 |
| [#95423](https://github.com/anthropics/claude-code/pull/95423) | diff：只读 shell 命令不触发重新拉取 diff | poteat | `ls`/`git status`/`cat` 等只读命令不应触发 diff 面板刷新，修复基于 `isReadOnly` 判断 |
| [#96570](https://github.com/anthropics/claude-code/pull/96570) | diff：`command.run` hook 按字面量命名命令 | poteat | 修复 hook 匹配逻辑，避免引擎扫描时误匹配启动时输入的 slash 命令 |

> 5 条 PR 均由 **poteat** 提交，集中在 diff 面板行为、telemetry 数据完整性、AGENTS.md 读取语义的精细化打磨。

---

## 5. 功能需求趋势

从 Issue 标签与内容可提炼出以下社区关注方向：

| 方向 | 相关 Issue 数 | 典型诉求 |
|------|:---:|------|
| **Windows 桌面端稳定性** | 8+ | Cowork VM 服务、定时任务、远程控制、语音输入、渲染合成——Windows 平台问题密度最高 |
| **安全 / Prompt Injection 防护** | 3+ | 子 Agent 输出中的注入指令、工具输出误判为用户指令、Zap 扫描误拦截 |
| **远程 / SSH 会话可靠性** | 3+ | 重启后消息历史丢失、远程插件缓存过期、`/schedule` 后端连接 |
| **TUI / 交互体验** | 4+ | `.ignore` 尊重、`/goal` 折叠、Ctrl+G 快捷键、maxProseWidth |
| **路径 / JSON 序列化** | 2+ | Windows 反斜杠未转义、`--json-schema` 字面量占位键 |

---

## 6. 开发者关注点总结

1. **Windows 平台是当前最大的痛点** — Cowork VM、定时任务、远程控制、语音输入、渲染合成等多条 Issue 均指向 Windows 桌面端，且多为 MSIX 包特有问题，建议 Windows 用户优先关注非 MSIX 安装方式。

2. **Prompt Injection 防护需持续关注** — Issue #87266 和 #95150 分别涉及子 Agent 输出注入和 autoclassifier 误判，虽已 closed/stale，但安全边界问题仍是社区长期关注点。

3. **Telemetry 与可观测性改进加速** — v2.1.282 的启动变量提示 + PR #96487 的版本行数据增强，显示团队在完善遥测数据采集，方便外部构建版本的问题排查。

4. **diff 面板行为持续打磨** — 3 条 PR 均涉及 diff 模块（只读命令跳过、`--no-color`、hook 命令命名），说明 diff 面板的交互逻辑仍在快速迭代中。

5. **历史 Issue 大量 stale** — 精选的 10 条 Issue 全部已 closed/stale，反映团队当前资源向新功能倾斜，社区用户遇到类似问题可参考 workaround 或等待后续版本回归修复。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>



# OpenAI Codex 社区动态日报 (2026-09-25)

基于过去 24 小时内 GitHub 上的最新数据，为您梳理 OpenAI Codex 社区的最新动态、版本发布、社区热点问题及重要代码合并进展。

---

### 1. 今日速览

*   **版本迭代迅速**：Codex 底层（Rust 实现）正处于密集的 `0.158.0-alpha` 系列迭代中，发布了多个 Alpha 版本（`alpha.6` 至 `alpha.10`）。
*   **Windows 平台 bug 集中爆发**：社区反馈集中在 Windows 桌面端，包括发送按钮卡死、Git 提交按钮缺失、以及沙箱初始化失败等严重阻碍开发流程的 UI 和核心功能回退问题。
*   **底层能力优化合并**：大量结构化的 PR（如 MCP 配置、TUI 增强、沙箱权限调整等）被快速合并，重点提升了 MCP 工具的可用性、本地登录体验以及沙箱安全与性能。

---

### 2. 版本发布

在过去一天中，Codex 主要是针对 Rust 底层核心进行了快速的 alpha 迭代：

*   **0.158.0-alpha 系列**（`alpha.6` 到 `alpha.10`）：展示了活跃的底层开发状态，主要聚焦于内部架构重构、性能优化以及部分已知 Bug 的修复。
*   **0.157.0-alpha.11.1**：针对上一代 alpha 分支的增量维护更新。
*   *注：由于处于 alpha 阶段，具体 release notes 较为简略，主要通过后续的 PR 和 Issue 变化来观察功能落地情况。*

---

### 3. 社区热点 Issues（Top 10）

以下是过去 24 小时内最受关注、讨论最热烈的 10 个 Issue，涵盖了严重的 UI 回退、沙箱 blocker 以及高价值的功能建议：

#### 🔴 #40968 - Windows 桌面端发送按钮无限旋转且无法提交
*   **状态**: Open | **互动**: 53 条评论, 27 👍
*   **摘要**: 在 Windows 11 的 ChatGPT 桌面端中，使用 Codex 进行后续对话（follow-up prompt）时，发送按钮一直旋转，消息永远无法发出。这是一个阻断性的 UI 状态同步 Bug。
*   **重要性**: 严重阻碍了 Windows 用户的日常对话交互。
*   **链接**: [openai/codex#40968](https://github.com/openai/codex/issues/40968)

#### 🔴 #47511 - Git 提交与推送按钮缺失（回归）
*   **状态**: Open | **互动**: 9 条评论, 26 👍
*   **摘要**: 桌面端版本 `26.917.51856` 中，项目侧边栏原本可见的 "Commit" 和 "Push" 按钮消失，被隐藏在三级菜单中，导致用户无法直观地进行 Git 提交。
*   **重要性**: 社区点赞极高（26 👍），表明 Git 工作流是 Codex 桌面端的核心刚需，当前版本存在严重 UI 回退。
*   **链接**: [openai/codex#47511](https://github.com/openai/codex/issues/47511)

#### 🔴 #46

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>



# Gemini CLI 社区动态日报 (2026-09-25)

*数据来源：`github.com/google-gemini/gemini-cli` 过去 24 小时动态*

---

### 1. 今日速览

Gemini CLI 社区今日活跃度极高，核心聚焦于 **v0.61.0 至 v0.62.0-preview.0 版本的迭代与维护**。开发者提交了多个高优先级（P1）的关键 Bug 修复 PR，重点解决了认证死循环、终端输入卡死、工具输出内存泄漏等核心痛点。同时，社区对 Agent 智能路由（如子代理调用策略、自动记忆系统安全）以及 AST 工具等高级特性展开了深度讨论，显示出社区对 Agent 自主性与安全性的高度关注。

---

### 2. 版本发布

*   **v0.62.0-nightly.20260924 / v0.62.0-preview.0**
    *   **核心更新**：修复了 A2A 服务端在 tasks metadata 端点遇到不支持的 store 时未早期返回的问题（#29334）。
    *   **CLI 改进**：增加了连接恢复时的重试进度指示器，提升了网络波动下的用户体验。
    *   **测试与集成**：在运行时增加了对 VS Code 集成测试的检测逻辑，避免环境缺失导致的误报。
    *   **链接**：[v0.62.0-nightly.20260924](https://github.com/google-gemini/gemini-cli/releases/tag/v0.62.0-nightly.20260924.g8e70c862f) | [v0.62.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.62.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



# GitHub Copilot CLI 社区动态日报 — 2026-09-25

---

## 1. 今日速览

Copilot CLI 过去 24 小时内发布了 **v1.0.89-2** 和 **v1.0.89-3** 两个版本，重点修复了 MCP OAuth 范围处理和本地会话交互问题。社区活跃度较高，多个长期运行的 OOM（内存溢出）问题持续发酵，其中会话压缩和事件存储相关的崩溃成为最突出的稳定性痛点。

---

## 2. 版本发布

### v1.0.89-3
- **修复**
  - Ask-user 表单在多问题间正确隔离 "Other" 自定义答案，避免跨问题污染。

### v1.0.89-2
- **新增**
  - MCP 预注册 OAuth 客户端现在遵守配置的 `oauthScopes`。
  - 本地会话中，在空聊天输入连续按 `Esc Esc` 可撤销模型尚未开始回答的 prompt 并从对话中移除。
- **改进**
  - Windows 受支持版本上的沙箱命令行为优化（描述不完整）。

> 链接: [github.com/github/copilot-cli](https://github.com/github/copilot-cli)

---

## 3. 社区热点 Issues（精选 10 条）

| # | 标题 | 状态 | 评论 | 👍 | 为什么重要 |
|---|------|------|------|-----|-----------|
| **#4742** | Desktop app 1.1.15 无法在已有运行中的 Local session 时创建第二个 Local session | OPEN | 11 | 5 | 阻碍多任务并行工作流，影响桌面端核心体验 |
| **#2058** | 添加 `/fork` 命令以分支会话处理副任务，不干扰主线目标 | CLOSED | 10 | 10 | 高价值功能需求，社区支持度极高（10 👍） |
| **#4535** | `store_memory` 在 v1.0.81 预发布版中因缺少 instance id 而失败 | CLOSED | 9 | 1 | 直接影响 agent 记忆功能的可用性 |
| **#4699** | 长 `--resume` 会话中反复 OOM 崩溃，崩溃 dump 写入用户 cwd | OPEN | 6 | 7 | 严重稳定性问题，7 个赞反映影响面广 |
| **#4725** | 频繁 JavaScript heap OOM 导致 CLI 崩溃 | OPEN | 6 | 1 | Linux 平台高发，内存管理策略需调整 |
| **#4929** | 进程本地 auth token 停止刷新，所有 prompt 失败直到重启 | OPEN | 5 | 0 | 长期运行场景致命缺陷，影响无人值守任务 |
| **#4905** | Desktop app 会话 spawn 几分钟后即死，MCP catalog 过时 | OPEN | 4 | 4 | 桌面端 + MCP 集成双重故障 |
| **#4851** | Azure MCP server 发送 HTTP 请求失败（BrokenPipe） | OPEN | 2 | 6 | 影响 Azure 生态用户，6 个赞说明普遍 |
| **#4780** | 会话压缩 OOM 导致永久不可恢复的崩溃循环 | OPEN | 2 | 3 | 压缩失败后会话无法恢复，数据风险高 |
| **#4663** | 失败的压缩在每个 turn 被无节制重试，无退避、无错误提示 | OPEN | 2 | 0 | 计费和性能双重浪费，缺乏用户可见反馈 |

> 完整列表: [github.com/github/copilot-cli/issues](https://github.com/github/copilot-cli/issues)

---

## 4. 重要 PR 进展

本期仅有 **1 条 PR** 更新：

### #4948 — Update github-script action pin
- **作者**: klockhoffbjorn-collab
- **状态**: OPEN
- **内容**: 将 `actions/github-script` 依赖刷新至 v9.0.0 最新提交。已检查仓库中无运行时依赖清单，其余 GitHub Actions pin 已为最新，`git diff --check` 通过。
- **评价**: 纯维护性更新，无功能影响，但保持 CI 基础设施现代化。

> 链接: [github.com/github/copilot-cli/pull/4948](https://github.com/github/copilot-cli/pull/4948)

---

## 5. 功能需求趋势

从社区 Issue 中提炼出以下核心关注方向：

| 方向 | 热度 | 说明 |
|------|------|------|
| **稳定性 / OOM 修复** | 🔴 极高 | #4699、#4725、#4780、#4639、#4663 等多个 OOM 相关 issue，是当前最集中的痛点 |
| **会话管理** | 🟠 高 | #4742（多 session 并行）、#4755（会话 wedged）、#2058（/fork 副任务分支） |
| **MCP / 工具生态** | 🟠 高 | #4556（marketplace 注册失败）、#4851（Azure MCP BrokenPipe）、#3948（web_fetch fetch failed） |
| **插件 / Marketplace** | 🟡 中 | #2753（plugin skills 不注入 system prompt）、#2399（sparse checkout 优化安装） |
| **认证 / 授权** | 🟡 中 | #4929（token 不刷新）、#4844（--yolo 被 pre-auth 窗口吞掉） |
| **Windows 企业兼容** | 🟡 中 | #4683（ConstrainedLanguage 下 shell 命令报错）、#4522（sandbox 被强制开启） |

---

## 6. 开发者关注点

1. **内存管理策略亟待改进** — 多个 OOM issue（#4699、#4725、#4780）指向 V8 heap 默认 ~4 GiB 上限在长会话/压缩场景下不足，且崩溃后恢复机制缺失。开发者期待更智能的 GC 触发策略和渐进式压缩。

2. **会话生命周期管理脆弱** — 会话卡死（#4755）、压缩后不可恢复（#4780）、多 session 互斥（#4742）等问题表明会话状态机需要更健壮的边界处理。

3. **MCP 生态集成仍不成熟** — OAuth scope 遵守（v1.0.89-2 已修）、marketplace 注册静默失败（#4556）、Azure MCP BrokenPipe（#4851）等问题说明 MCP 工具链路的错误处理和状态同步需加强。

4. **企业环境适配不足** — Windows AppLocker/WDAC 下的 ConstrainedLanguage 兼容（#4683）、MDM 策略与本地配置的优先级冲突（#4522）是企业用户高频反馈。

5. **长运行任务的无人值守能力** — auth token 刷新失效（#4929）、压缩失败无退避重试（#4663）等问题影响后台自动化场景的可靠性。

---

> 📊 数据截止时间: 2026-09-25，来源 [github.com/github/copilot-cli](https://github.com/github/copilot-cli)  
> 🔄 日报生成频率: 每日，聚焦过去 24 小时动态

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>



好的，这是根据您提供的 GitHub 数据生成的 Kimi Code CLI 社区动态日报。

---

### **Kimi Code CLI 社区动态日报 - 2026-09-25**

**数据来源**: [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

#### **1. 今日速览**

今日社区动态相对平静，过去24小时内无新版本发布，也无新的 Issues 更新。社区的主要活动集中在一个重要的安全维护 PR 上：**#2622**，该 PR 旨在将 `asyncssh` 依赖项升级至最新版本，以修复已知的安全漏洞。这体现了社区对项目安全性的持续关注。

---

#### **2. 版本发布**

*   **无**。过去24小时内无新版本发布。

---

#### **3. 社区热点 Issues**

*   **无**。过去24小时内无新的或更新的 Issues。

---

#### **4. 重要 PR 进展**

以下是过去24小时内值得关注的 PR：

*   **#2622 [CLOSED] deps: bump asyncssh to 2.23.1 in pykaos (GHSA-2wxc-x7rj-hg8f)**
    *   **作者**: katsugtgz
    *   **状态**: 已关闭 (可能已合并)
    *   **链接**: [MoonshotAI/kimi-cli#2622](https://github.com/MoonshotAI/kimi-cli/pull/2622)
    *   **说明**: 此 PR 是一个关键的安全更新。它将 `pykaos` 工作区包中的 `asyncssh` 库从 2.21.1 版本升级到 2.23.1，以解决两个重要的安全漏洞（GHSA-2wxc-x7rj-hg8f 和 GHSA-qr67-gv47-xwwh）。这有助于提升项目在 SSH 通信方面的安全性。社区对此类安全维护通常持积极和支持态度。

---

#### **5. 功能需求趋势**

基于近期社区动态（尤其是安全 PR），可以观察到以下趋势：

*   **安全性与依赖项健康**: 社区和维护者对及时修复安全漏洞、保持依赖项更新有明确的需求和行动。这反映了项目对企业级或生产环境应用的基本要求。

---

#### **6. 开发者关注点**

*   **项目稳定性与安全性**: 开发者（特别是维护者）高度关注项目的长期可维护性。及时处理安全公告并更新依赖项是确保项目稳定、可靠运行的关键环节，也是吸引开发者信任和贡献的重要因素。

---

**免责声明**: 本日报基于提供的有限 GitHub 数据生成。要获得更全面的社区动态，建议直接访问 [kimi-cli GitHub 仓库](https://github.com/MoonshotAI/kimi-cli) 的 Issues 和 Pull Requests 页面。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>



# OpenCode 社区动态日报 — 2026-09-25

---

## 1. 今日速览

今日无新版本发布，但社区活跃度较高：过去24小时内新增/更新了 50 个 Issue 和 50 个 PR。最引人关注的是 **Muse Spark 1.3 免费额度被 Zen 通道封禁且无申诉途径**（#49057，15 条评论），以及 **TUI 键盘焦点 trapped、桌面端冻结** 等影响日常使用的严重 Bug。同时，多个重要 PR 进入收尾阶段，包括 **LSP 工具默认开启**、**GPT 语义密度自适应**、**子代理模型可视化** 等。

---

## 2. 版本发布

过去 24 小时内 **无新 Release**。

---

## 3. 社区热点 Issues（Top 10）

### 🔴 #49057 — Muse Spark 1.3 免费额度通过 OpenCode Zen 被封禁，无申诉路径
- **作者**: alkaserGG | **评论**: 15 | 👍: 0
- [链接](https://github.com/anomalyco/opencode/issues/49057)
- **重要性**: ⭐⭐⭐⭐⭐
- 通过 OpenCode Zen 使用 Muse Spark 1.3 Free 模型时，所有请求均返回 `user_blocked`，新旧会话均受影响。社区反应热烈（15 条评论），涉及账号封禁无申诉机制，直接影响免费用户可用性。

### 🔴 #48743 — MCP 预热/预启动机制缺失：冷启动时所有本地 MCP 标记为 failed
- **作者**: liudongyan13701205717-source | **评论**: 5 | 👍: 2
- [链接](https://github.com/anomalyco/opencode/issues/48743)
- **重要性**: ⭐⭐⭐⭐
- Windows 桌面端配置 14+ 个本地 stdio MCP 服务器时，每次会话启动全部标记为 `server unavailable ... status=failed`，需手动逐个重启。服务器本身健康，纯粹是冷启动并发问题，严重影响多 MCP 用户的工作流。

### 🟡 #25344 — 无小模型的 Provider 自动标题生成静默失败
- **作者**: per-hap-s | **评论**: 4 | 👍: 0
- [链接](https://github.com/anomalyco/opencode/issues/25344)
- **重要性**: ⭐⭐⭐
- 使用无小模型配置的 Provider 时，会话始终停留在默认标题 "New session - ..."，永不自动更新。基础功能缺陷，影响所有非标准模型用户。

### 🟡 #47624 — TUI 问题对话框切换 Tab 后键盘焦点被完全 trapped
- **作者**: felixarnold | **评论**: 3 | 👍: 0
- [链接](https://github.com/anomalyco/opencode/issues/47624)
- **重要性**: ⭐⭐⭐⭐
- 多问题对话框中，在 "Type your own answer" 自定义回答模式下点击其他 Tab 后，确认键完全 traps 键盘（Esc 也无效），仅能通过恢复模式退出。严重的 TUI 交互 Bug。

### 🟡 #49175 — 插件 Effect Schema 的 NonEmptyString 拒绝有效输入
- **作者**: stevoland | **评论**: 3 | 👍: 1
- [链接](https://github.com/anomalyco/opencode/issues/49175)
- **重要性**: ⭐⭐⭐
- 插件使用 OpenCode 打包的 Effect 运行时之外创建的 Schema 时，`Schema.NonEmptyString` 虽然生成了正确的 `minLength: 1` JSON Schema，但执行时拒绝有效值。阻碍插件生态的跨运行时兼容。

### 🟡 #51087 — TodoWrite 在非英语 locale 下导致会话时间线渲染崩溃
- **作者**: tammatatsky-ctrl | **评论**: 2 | 👍: 0
- [链接](https://github.com/anomalyco/opencode/issues/51087)
- **重要性**: ⭐⭐⭐
- OpenCode Desktop 2.0.16 在泰语等非英语 locale 下渲染含 `TodoWrite` 工具调用的会话时抛出 `TypeError: Iterable yielded undefined`。工具本身能完成，但时间线渲染器崩溃，阻塞非英语用户。

### 🟡 #50986 — One Dark Pro 主题下 workspace 消息对比度过低
- **作者**: anabelle2001 | **评论**: 2 | 👍: 0
- [链接](https://github.com/anomalyco/opencode/issues/50986)
- **重要性**: ⭐⭐⭐
- One Dark Pro 主题中，workspace 会话的用户消息对比度仅 1.2:1（不可读），而 local 会话为 14.1:1（清晰）。主题适配不一致，影响特定工作流下的可读性。

### 🔴 #40066 — 桌面端因外部目录权限检查冻结，重启后工具调用被误标 interrupted
- **作者**: NathanDrake2406 | **评论**: 2 | 👍: 0
- [链接](https://github.com/anomalyco/opencode/issues/40066)
- **重要性**: ⭐⭐⭐⭐⭐
- bash 工具触发外部目录权限检查时桌面端完全冻结（无输出、无交互），需强制杀进程。重启后恢复，但未完成的工具调用被错误标记为 `interrupted`。严重阻塞性 Bug。

### 🟡 #50168 — 桌面端缩放比例重启后重置为 100%
- **作者**: mitivil | **评论**: 2 | 👍: 2
- [链接](https://github.com/anomalyco/opencode/issues/50168)
- **重要性**: ⭐⭐⭐
- Ctrl++ / Ctrl+- 设置的缩放在退出重启后丢失，`v2` 中 `wireZoom()` 显式设为 1。体验类缺陷，但获 2 个 👍，用户期望持久化。

### 🟡 #50627 — 自定义 agent 启用 shell * deny 策略后免费模型全部报错
- **作者**: Saka-CS | **评论**: 2 | 👍: 0
- [链接](https://github.com/anomalyco/opencode/issues/50627)
- **重要性**: ⭐⭐⭐
- 在自定义主 agent 上启用 `permissions: [{action: shell, resource: "*", effect: deny}]` 后，所有免费模型请求均返回 "OpenCode's free tier can only be used from within OpenCode"，即使请求确实源自 TUI 内部。权限策略与免费额度校验的意外交集。

---

## 4. 重要 PR 进展（Top 10）

### ✅ #44757 — 默认启用 LSP 工具
- **作者**: jinhuang712 | **状态**: CLOSED
- [链接](https://github.com/anomalyco/opencode/pull/44757)
- 移除 `packages/opencode/src/tool/registry.ts` 中的 `flags.experimentalLspTool` 门控，`tool.lsp` 始终注册。LSP 工具从实验性功能转为正式默认能力。

### ✅ #51166 — GPT 语义密度默认值在请求时应用
- **作者**: rekram1-node | **状态**: CLOSED
- [链接](https://github.com/anomalyco/opencode/pull/51166)
- 移除 AI 包中隐式的 `low` 语义密度默认值，改为在出站请求准备阶段为 GPT-6 变体和 GPT-5 minor 系列通过 Direct OpenAI / Azure / Bedrock / Cloudflare / Vercel 网关显式设置。修复模型行为不一致。

### 🔧 #51232 — 子代理 Tab 显示子会话所选模型
- **作者**: opencode-agent[bot] | **状态**: OPEN
- [链接](https://github.com/anomalyco/opencode/pull/51232)
- Subagents Tab 中展示每个子会话选中的模型（即使与父会话相同），解析子位置 catalog 名称，回退到 provider/model 并展示变体。增强子代理调试可见性。

### ✅ #44721 — 新增可拖拽的 transcript 详情滑块
- **作者**: opencode-agent[bot] | **状态**: CLOSED
- [链接](https://github.com/anomalyco/opencode/pull/44721)
- 三档可调 transcript 详情控制：仅最终响应 / 紧凑工具摘要 / 完整代码与工具输出。通过命令面板循环切换，持久化存储。配套单测覆盖。

### ✅ #44725 — 恢复 v2 分支的 OPENCODE_DISABLE_CLAUDE_CODE 支持
- **作者**: malarahfelipe | **状态**: CLOSED
- [链接](https://github.com/anomalyco/opencode/pull/44725)
- 将 `OPENCODE_DISABLE_CLAUDE_CODE` 环境变量支持带回 v2 分支，阻止 OpenCode 读取 `~/.claude`（提示词和 skills），与 v1 行为保持一致。

### ✅ #44723 — 打包 @aihubmix/ai-sdk-provider
- **作者**: 0genlab | **状态**: CLOSED
- [链接](https://github.com/anomalyco/opencode/pull/44723)
- 新增 `@aihubmix/ai-sdk-provider` 依赖，为 aihubmix 模型提供原生 AI SDK 集成，扩展 provider 生态。

### ✅ #44709 — 隔离临时 scratch 文件
- **作者**: opencode-agent[bot] | **状态**: CLOSED
- [链接](https://github.com/anomalyco/opencode/pull/44709)
- 使用 `$XDG_RUNTIME_DIR/opencode` 作为规范 scratch 目录，不可用时在系统临时目录创建唯一 `opencode-*` 目录，使用前验证可写性和可搜索性。减少临时文件冲突。

### ✅ #44705 — 兼容旧版字符串格式 tool-part 输入
- **作者**: LovePlayCode | **状态**: CLOSED
- [链接](https://github.com/anomalyco/opencode/pull/44705)
- 1.14 版本将部分 tool

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



# Pi 社区动态日报 | 2026-09-25

> 数据来源：[github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono)

---

## 1. 今日速览

今日无新版本发布，但社区活跃度较高——过去 24 小时内新增/更新了 50 个 Issue 和 12 个 PR。核心动态集中在**跨 provider 兼容性修复**（Bedrock、Azure、Kimi）、**TUI 渲染稳定性**（重绘风暴、图片拉伸），以及**导出与遥测功能增强**。Issues 自动关闭策略引发部分开发者不满，社区呼吁加强人工 triage。

---

## 2. 版本发布

**无新版本发布。** 过去 24 小时内仓库未发布新 Release。

---

## 3. 社区热点 Issues

> 从 50 条更新中按评论数与影响力筛选 10 个值得关注的 Issue。

### 🔴 #9361 — Windows shellPath 非确定性忽略（OPEN · 11 评论）
Windows 平台加载扩展后，`~/.pi/agent/settings.json` 中的 `shellPath` 配置被静默忽略，回退到 Git Bash 或 PATH 上第一个 `bash.exe`。问题出在扩展加载时机与 shell 解析的竞态条件，影响所有 Windows 用户的工具链配置。[链接](https://github.com/badlogic/pi-mono/issues/9361)

### 🔴 #8896 — /export HTML 丢弃 `display:false` 自定义消息（CLOSED · 8 评论）
HTML 导出会静默丢弃所有 `display: false` 的自定义消息，而该字段本意仅用于 TUI 隐藏，不应影响导出内容。**数据完整性问题**，已由 PR #10020 修复。[链接](https://github.com/badlogic/pi-mono/issues/8896)

### 🔴 #2144 — 无法粘贴图片到 Pi（CLOSED · 8 评论）
Claude Code 在 Warp Terminal 中支持 Ctrl+V 粘贴剪贴板图片，Pi 不支持。这是一个长期存在的功能缺口，涉及多平台剪贴板图片读取（X11/macOS/Windows）。[链接](https://github.com/badlogic/pi-mono/issues/2144)

### 🟡 #8643 — Bedrock OpenAI 模型拒绝嵌套在 toolResult 中的图片（OPEN · 7 评论 · 2 👍）
Bedrock 上的 OpenAI 兼容模型不支持将图片嵌套在 `toolResult.content` 中，需要像 `openai-completions.ts` 那样将图片提升为独立的 user content block。修复方案已准备好，等待合并。[链接](https://github.com/badlogic/pi-mono/issues/8643)

### 🟡 #9674 — mistral-conversations 空 content delta 打开文本块（OPEN · 7 评论）
GLM 5.x 模型通过 `mistral-conversations` 流式传输时，零长度 `content: ""` delta 会打开空文本块，导致重放时 400 错误。这是 #8069 的后续修复，直接在 `mistral-conversations` 侧解决而非绕道 `openai-completions`。[链接](https://github.com/badlogic/pi-mono/issues/9674)

### 🟡 #9255 — 长 transcript 触发全屏重绘风暴（OPEN · 7 评论 · 1 👍）
当 transcript 高度远超终端可视区域时，`TuiMainScreen.doRender()` 几乎每帧都走 `fullRender(true)` 路径，导致长对话滚动时剧烈跳动、文本重复。性能问题，影响大上下文场景。[链接](https://github.com/badlogic/pi-mono/issues/9255)

### 🟡 #9508 — pi-ai 向兼容 provider 发送 OpenAI 特有字段（OPEN · 6 评论）
`pi-ai` 向 OpenAI 兼容 provider 发送了部分 provider 不支持的请求字段、角色或认证头，导致 400/422 错误。需要按 provider 做请求体裁剪。[链接](https://github.com/badlogic/pi-mono/issues/9508)

### 🟡 #9566 — context size 默认 128k 而非真实值（OPEN · 5 评论 · 3 👍）
当 `models.json` 中的 model id 与 provider 已暴露的模型匹配时，默认 context size 恒为 128k，且 `cost`、`input`、`maxTokens` 均不正确。影响自托管 LLM（如 Ollama/Llama）的配置准确性。[链接](https://github.com/badlogic/pi-mono/issues/9566)

### 🟢 #9512 — GPT-6 Astra max reasoning 下 compaction 撞摘要上限（OPEN · 5 评论 · 1 👍）
使用 `openai/gpt-6-astra` + `max` reasoning 时，上下文压缩间歇性失败，摘要生成撞 token 上限导致不完整。[链接](https://github.com/badlogic/pi-mono/issues/9512)

### 🟢 #9997 — session_shutdown 不解析时 Quit 挂起（CLOSED · 3 评论）
扩展的 `session_shutdown` handler 若永不 resolve，退出时 TUI 冻结、进程挂起且无任何反馈。稳定性与超时保护缺失。[链接](https://github.com/badlogic/pi-mono/issues/9997)

---

## 4. 重要 PR 进展

> 从 12 条 PR 中筛选 10 条重要更新。

### ✅ #10020 — HTML 导出添加 hidden-message 切换按钮（CLOSED）
新增显示/隐藏 `CustomMessage` 的按钮控件，保留"默认隐藏"行为，同时维护 "Toggle tools" 和 "Toggle thinking" 的按钮状态。**修复 #8896**。[链接](https://github.com/badlogic/pi-mono/pull/10020)

### ✅ #10021 — Bash 调用中 heredoc 和内联脚本语法高亮（OPEN）
为 bash 工具调用添加 heredoc 语法高亮，主要服务于最新 Opus/Fable 模型（它们倾向于使用内置编辑工具而非 heredoc）。[链接](https://github.com/badlogic/pi-mono/pull/10021)

### ✅ #9957 — Kitty 图片按失真度选择尺寸（CLOSED）
改进 Kitty 图片渲染，在适配终端尺寸时选择宽高失真较小的舍入方案，部分场景下减轻了图片拉伸问题。[链接](https://github.com/badlogic/pi-mono/pull/9957)

### ✅ #10016 — 跟进消息排队时恢复中止的运行（OPEN）
当 `sendMessage(..., { deliverAs: "followUp", triggerTurn: true })` 在流式运行中排队，而该运行被中止时，跟进消息会丢失。此修复确保中止后仍能恢复并消费队列。[链接](https://github.com/badlogic/pi-mono/pull/10016)

### ✅ #9714 — Azure Foundry Chat Completions 支持（OPEN）
Azure provider 之前仅实现了 Responses API，导致使用 Chat Completions 的 Foundry 部署（如 DeepSeek V4 Pro）无法工作。此 PR 扩展 Azure provider 支持多种 API。[链接](https://github.com/badlogic/pi-mono/pull/9714)

### ✅ #10009 — pi-otel OTLP/HTTP 导出包（CLOSED）
新增 `@earendil-works/pi-otel` 包，基于现有 telemetry contract 实现 OTLP/HTTP span 导出器，支持 opt-in 方式接入外部遥测后端。**实现 #10006**。[链接](https://github.com/badlogic/pi-mono/pull/10009)

### ✅ #9995 — 修复并行中止时 tool_result 丢失（CLOSED）
`executeToolCallsParallel` 在检测到 `signal.aborted` 后立即退出循环，导致尚未执行的工具调用丢失 `tool_result`。修复确保所有工具调用都有完整的事件和结果。[链接](https://github.com/badlogic/pi-mono/pull/9995)

### ✅ #9993 — Google Vertex AI 支持 Anthropic Claude（CLOSED）
Vertex AI Model Garden 中可通过 ADC 或 API Key 访问 Claude Opus/Sonnet/Haiku，此前 catalog generator 排除了所有非 Gemini 模型。此 PR 解除限制。[链接](https://github.com/badlogic/pi-mono/pull/9993)

### ✅ #9988 — read 渲染器行范围参数 coerce 为数字（CLOSED）
模型偶尔将 `offset`/`limit` 作为 JSON 字符串发送（如 `"13"`），导致 TUI 渲染时字符串拼接而非数值运算（`25 + "13" - 1` → `2512`）。修复强制类型转换。**关联 #9887**。[链接](https://github.com/badlogic/pi-mono/pull/9988)

### ✅ #8398 — 颜色值与主题样式重构（CLOSED · 长期）
大幅重构 TUI 和主题系统，直接暴露颜色值，支持更灵活的样式（如颜色数学运算），同时保留旧 API 向后兼容。为未来非 Terminal UI 铺路。[链接](https://github.com/badlogic/pi-mono/pull/8398)

---

## 5. 功能需求趋势

从本周 Issues 和 PR 可提炼出以下社区关注方向：

| 方向 | 热度 | 代表 Issue/PR |
|------|------|---------------|
| **跨 provider 兼容性** | 🔥🔥🔥 | #8643 (Bedrock/OpenAI)、#9508 (OpenAI 字段裁剪)、#9714 (Azure Chat)、#9993 (Vertex Claude)、#9674 (Mistral/GLM) |
| **TUI 渲染与性能** | 🔥🔥🔥 | #9255 (重绘风暴)、#9957 (Kitty 图片)、#8398 (主题重构)、#8938 (图片拉伸) |
| **Windows 支持** | 🔥🔥 | #9361 (shellPath 非确定性)、#2144 (图片粘贴) |
| **上下文管理** | 🔥🔥 | #9512 (compaction 上限)、#9566 (context size 默认值) |
| **导出与可观测性** | 🔥 | #8896/#10020 (HTML 导出)、#10006/#10009 (OTel 遥测) |
| **扩展系统** | 🔥 | #9932 (systemPrompt 与 tool 顺序)、#8349 (queued continuation 检测)、#9817 (npm 解析) |
| **剪贴板与图片** | 🔥 | #2144 (粘贴图片)、#9786 (X11 剪贴板)、#9999 (macOS Finder 图标) |

---

## 6. 开发者关注点

社区反馈中反复出现的痛点与高频需求：

1. **自动关闭策略引发不满** — Issue #10008 直接质问"为什么不看 bug 报告而是自动关闭"，部分 Issue 被过早标记为 `[no-action]` / `[untriaged]` 关闭，损害了社区信任。建议加强人工 triage 或完善自动关闭的判断逻辑。

2. **Provider 适配碎片化** — 不同 API 风格（Chat Completions vs Responses vs Mistral Conversations）之间的差异导致大量兼容性问题，开发者呼吁更统一的请求抽象层或更清晰的 provider 能力声明。

3. **模型配置默认值不准确** — #9566 暴露了 `models.json` 中 context size、cost 等字段的默认值问题，自托管 LLM 用户尤其受影响，希望能自动探测或至少允许更灵活的覆盖。

4. **TUI 长对话性能** — #9255 的全屏重绘风暴表明长 transcript 场景下的渲染路径存在优化空间，`firstChanged` 与 `prevViewportTop` 的判断逻辑需要修正。

5. **扩展加载顺序不确定性** — #9361 (Windows shellPath) 和 #9932 (systemPrompt 与 tool 顺序) 都指向扩展生命周期中的竞态条件，扩展间的依赖管理需要更明确的执行顺序保证。

6. **会话可移植性** — HTML 导出 (#8896) 和 Codex 签名消息重放 (#9918) 表明社区对会话导出/导入的完整性和跨平台一致性有较强需求。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>



# Qwen Code 社区动态日报 — 2026-09-25

---

## 1. 今日速览

Qwen Code 今日发布 **v0.24.5** 正式版及 **Desktop v0.24.5**，核心更新包括通道架构解耦、桌面端会话诊断修复及 Java SDK 运行时管理增强。社区最活跃的讨论集中在 **Managed Agent 双路径架构提案**（#12380，17 条评论）与 **TUI 崩溃问题**（#11500，16 条评论），反映出用户对后台 Agent 编排与终端渲染稳定性的高度关注。

---

## 2. 版本发布

### Qwen Code v0.24.5
- **feat(channels)**: 解耦群组成员访问策略与 `senderPolicy`，使群组场景下的成员权限控制更加灵活（[#12475](https://github.com/QwenLM/qwen-code/pull/12475)）。
- 无已知 Breaking Changes。

### Qwen Code Desktop v0.24.5
- **fix(serve)**: 保留会话创建失败的诊断信息，便于排查网络或权限问题（[#12331](https://github.com/QwenLM/qwen-code/pull/12331)）。
- **feat(sdk-java)**: 新增托管运行时（Managed Runtime）支持。

### SDK TypeScript v0.1.15
- 绑定 CLI 版本 **0.24.5**，与主版本同步。

### v0.24.5-nightly.20260924
- **feat(sdk-java)**: 新增 Hosted Harness 私有客户端（[#12654](https://github.com/QwenLM/qwen-code/pull/12654)）。
- **test(java)**: 固化 runtime-broker 守护测试。

---

## 3. 社区热点 Issues（Top 10）

| # | 标题 | 优先级 | 评论 | 为什么重要 |
|---|------|--------|------|-----------|
| [#12380](https://github.com/QwenLM/qwen-code/issues/12380) | **Managed Agent 双路径架构提案** | P2 | 17 | 社区最关注的架构演进方向。提出将现有 TS agent loop 与模型推理/工具环境解耦，赋予 Session 持久化所有权与可恢复工具执行能力。这是多 Agent 与 Daemon 场景的基石设计。 |
| [#11500](https://github.com/QwenLM/qwen-code/issues/11500) | **TUI 静默退出（React #185）** | P1 | 16 | 多个后台 Agent 完成时触发 React 更新深度溢出，TUI 直接崩溃且无错误渲染。严重影响多 Agent 协作场景下的可用性。 |
| [#11872](https://github.com/QwenLM/qwen-code/issues/11872) | **Web Terminal PTY 不可用** | P1 | 14 | `@lydell/node-pty` 未打包进发布产物，macOS 代码签名又阻止本地预编译，导致 Web Shell 核心功能完全失效。阻塞 Desktop 与 `qwen serve` 的 Web 终端。 |
| [#11119](https://github.com/QwenLM/qwen-code/issues/11119) | **后台 Shell 输出在会话回收时静默丢弃** | P1 | 10 | Daemon 托管的 Web Shell 中，后台命令输出在 turn 结束后被丢弃，导致 CI 轮询等场景完全失效。 |
| [#8596](https://github.com/QwenLM/qwen-code/issues/8596) | **弃用 Electron 桌面应用，Tauri 接管** | P2 | 10 | 社区长期讨论的桌面端技术栈迁移提案。Tauri 作为未来桌面方案，需完成品牌、CI、依赖反转等系统性工作。 |
| [#7771](https://github.com/QwenLM/qwen-code/issues/7771) | **持久化 mcp_config 未在启动时加载** | ⚠️ | 9 | Desktop 重启后 MCP 代理不生效，影响所有 MCP 工具链。已标记为需重新测试。 |
| [#12053](https://github.com/QwenLM/qwen-code/issues/12053) | **精简 Goal 运行时：移除证据目录与检查点** | ⚠️ | 8 | 提出将 Goal 完成判定收敛到当前 turn 证据，减少冗余状态。涉及核心 Agent 循环设计。 |
| [#12416](https://github.com/QwenLM/qwen-code/issues/12416) | **Remote-SSH 每次创建会话失败（EPIPE）** | P1 | 8 | VS Code Remote-SSH 场景下 Companion 0.24.2 与 CLI 通信断裂，但独立 CLI 正常。直接影响远程开发体验。 |
| [#9693](https://github.com/QwenLM/qwen-code/issues/9693) | **Windows 上 MCP 启动报 -32000 连接关闭** | ⚠️ | 8 | 即使未激活 MCP，Desktop 也报连接关闭。Windows 平台特有问题，影响 MCP 生态落地。 |
| [#12381](https://github.com/QwenLM/qwen-code/issues/12381) | **HTTP 网关超时后恢复会话创建结果** | P2 | 7 | 网关超时时客户端丢失 session ID，无法安全提交首个 prompt。需幂等恢复机制。 |

---

## 4. 重要 PR 进展（Top 10）

| # | 标题 | 类型 | 说明 |
|---|------|------|------|
| [#12653](https://github.com/QwenLM/qwen-code/pull/12653) | **Rename desktop-shell → desktop** | 🏗️ | 将 Tauri 壳重命名为 `packages/desktop`，同步更新 npm workspace、CI 过滤、发布配置等全部引用，为 Electron 弃用铺路。 |
| [#12183](https://github.com/QwenLM/qwen-code/pull/12183) | **加载部署管理的扩展** | ✨ | 新增 `--managed-extensions <root>`，支持从指定目录发现并加载企业级扩展，扩展内容由部署方控制。 |
| [#12666](https://github.com/QwenLM/qwen-code/pull/12666) | **Linux 剪贴板工具查询失败时通知** | 🐛 | 修复 Linux 下 `wl-paste`/`xclip` 存在但查询失败时剪贴板图片粘贴静默吞错的问题。 |
| [#12649](https://github.com/QwenLM/qwen-code/pull/12649) | **Pin node-pty-linux-arm64 并失败即阻断发布** | 🐛 | 补全缺失的 ARM64 预编译依赖，并将缺失预编译设为发布阻断条件，修复 Web Terminal 在 ARM 上的打包问题。 |
| [#12665](https://github.com/QwenLM/qwen-code/pull/12665) | **报告被丢弃的 @-引用而非静默丢弃** | 🐛 | 当 `@` 引用因越界、变更、快照失败等原因被拒绝时，改为显式报告而非消失。 |
| [#12590](https://github.com/QwenLM/qwen-code/pull/12590) | **可选 System One Decision Gate（/superfast）** | ✨ | 实现本地轻量决策模型（Von），对用户输入做单次前向分类，跳过不必要的 LLM 推理。默认关闭，失败即放行。 |
| [#12580](https://github.com/QwenLM/qwen-code/pull/12580) | **先从会话历史回答再调查** | ✨ | 在系统提示中引入上下文优先策略，要求模型在发起搜索/子 Agent 之前先检查历史对话。 |
| [#12540](https://github.com/QwenLM/qwen-code/pull/12540) | **关闭 /context 会计延迟项** | 🐛 | 修复 `/context` 对 `<available_skills>` 文本的误判，使技能列表检测与实际消耗对齐。 |
| [#12107](https://github.com/QwenLM/qwen-code/pull/12107) | **并行化扩展加载循环** | ⚡ | 将扩展冷加载从严格串行改为并行，每个扩展内的 skills/commands/agents 也一并并行化，显著降低 daemon 扩展刷新延迟。 |
| [#12221](https://github.com/QwenLM/qwen-code/pull/12221) | **识别 sed 静默别名为只读** | 🐛 | 将 GNU sed 的 `--quiet`/`--silent` 与 `-n` 一并归类为只读，写输出文件的 sed 脚本仍正确分类为写操作。 |

---

## 5. 功能需求趋势

从近期 Issues 与 PR 可提炼出以下社区关注方向：

| 方向 | 热度 | 代表 Issue/PR |
|------|------|--------------|
| **多 Agent 与 Daemon 架构** | 🔥🔥🔥 | #12380（Managed Agent 双路径）、#11119（后台输出丢弃）、#11795（权限队列串扰）、#12207（通知延迟） |
| **桌面端技术栈迁移** | 🔥🔥 | #8596（弃用 Electron → Tauri）、#12653（包重命名） |
| **Web Shell / PTY 可靠性** | 🔥🔥 | #11872（PTY 未打包）、#12649（ARM64 预编译） |
| **MCP 生态集成** | 🔥🔥 | #7771（配置未加载）、#9693（Windows 连接关闭）、#12500（-32601 状态保持） |
| **性能与启动优化** | 🔥 | #12405（headless 内存基线）、#12107（扩展并行加载）、#12589（System One 决策门） |
| **TUI 渲染稳定性** | 🔥 | #11500（React #185 崩溃）、#11756（虚拟化历史崩溃）、#9305（VP 对齐） |
| **SDK 多语言支持** | 🔥 | SDK Java（#12627、#12637）、SDK TypeScript（v0.1.15） |

---

## 6. 开发者关注点

1. **TUI 稳定性是当前最紧迫的痛点**：多个 P1 级 Issue（#11500、#11756）指向 React 渲染循环在后台 Agent 场景下崩溃，且问题可稳定复现，亟需根因修复。

2. **Daemon 模式下的会话与后台任务管理尚不成熟**：权限队列串扰（#11795）、后台输出丢弃（#1111

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报（2026-09-25）

> 数据来源：github.com/Hmbown/DeepSeek-TUI

---

## 一、今日速览

过去 24 小时社区没有新版本发布，但工程活动极为密集：核心团队围绕 **0.10.x 稳定性回归修复**集中关闭了一大批 Issue/PR，涵盖子代理预算、压缩（compaction）失败、会话恢复、模型选择器、Web 抓取质量等。与此同时，**Agent 记忆可插拔后端（#6050）**和 **token 效率审计（#6541/#6542）**两条长期议题持续升温，指向架构级改进方向。整体看，今天的主题是"**补齐 0.10.0 的回归缺口 + 为下一阶段能力打地基**"。

---

## 二、版本发布

过去 24 小时无新 Release。当前主线仍以 0.10.0 / 0.10.1 的修复迭代为主（大量 PR 标题带 `Closes #xxxx`）。

---

## 三、社区热点 Issues（精选 10 条）

| # | 标题 | 状态 | 为何重要 |
|---|------|------|----------|
| 1 | [#6050](https://github.com/Hmbown/Codewhale/issues/6050) Pluggable agent memory：通用后端接缝，以 causal-memory / mem0 为参考实现 | OPEN | **今日评论最多（5 条）**。当前 `MemoryBackend` 仅有 `Native`/`Off` 两态，无法接入第三方记忆后端。这是架构级 enhancement，代表社区对"可扩展记忆层"的强烈诉求。 |
| 2 | [#6504](https://github.com/Hmbown/Codewhale/issues/6504) 子代理被 100k 单步输入上限"杀死"，不会自动压缩 | CLOSED | 创始人亲自报告：explore 子代理在 deepseek-flash（1M 窗口）下 56 秒即报 `child context budget exhausted`。子代理生命周期管理是核心痛点，已修复。 |
| 3 | [#6541](https://github.com/Hmbown/Codewhale/issues/6541) Token 效率：按请求用量遥测、基于成本的压缩触发、稳定工具列表 | OPEN | 基于 115 个会话、60 天的真实数据审计。deepseek-flash 占 3.55B token 的 94.8%，命中/未命中缓存成本差 50 倍。**成本优化**是长期主线。 |
| 4 | [#6542](https://github.com/Hmbown/Codewhale/issues/6542) 复现性工具错误：edit 旧文本不匹配、agent cwd 越界、无目标 update_goal | OPEN | 工具调用错误占 5.0%，其中 edit 不匹配占 edit 调用的 6.9%。直接影响 Agent 可靠性。 |
| 5 | [#6427](https://github.com/Hmbown/Codewhale/issues/6427) 0.10.0 回归：Windows Terminal 多行粘贴逐行自提交 | OPEN | 老问题 #5981 在 0.10.0 上再次出现，属**回归 bug**，Windows 用户输入体验受损，社区已跟进评论。 |
| 6 | [#6525](https://github.com/Hmbown/Codewhale/issues/6525) 官方模型路由：`/router`（含 Jev via OpenRouter/TypeSafe） | OPEN | 自动路由能力已存在但只能手改配置，无交互入口、无推荐预设。属"机器完备、产品缺位"的典型。 |
| 7 | [#6529](https://github.com/Hmbown/Codewhale/issues/6529) 用户可设的按模型能力覆盖 `[providers.<name>.models."<id>"]` | OPEN | 当模型目录缺失或错误（如 #6421 把 deepseek-flash 标为纯文本）时，用户无配置手段自证能力，急需逃生舱。 |
| 8 | [#6516](https://github.com/Hmbown/Codewhale/issues/6516) 清理死配置/标志/环境变量与宣传性 stub | OPEN | 全仓"遗留与第二权威"扫荡结果，涉及 `output_mode`、`[workshop]`、`DEEPSEEK_*` 环境变量孪生等，关乎**配置可维护性**。 |
| 9 | [#6531](https://github.com/Hmbown/Codewhale/issues/6531) Web 抓取/搜索质量：提取器丢页面、恢复提示失效、原生搜索抢占配置提供商 | CLOSED | 近半 `Web fetch` 返回"无可读内容"（含 docs.vllm.ai、DeepSeek 定价页），影响 Agent 联网可信度。 |
| 10 | [#6540](https://github.com/Hmbown/Codewhale/issues/6540) 压缩：16 次记录中 15 次失败，摘要调用读取约 219k token 且缓存命中率 0% | CLOSED | 直接关系到长会话可用性与成本，是 token 审计暴露的最严重问题之一。 |

> 其他值得关注：[#6546](https://github.com/Hmbown/Codewhale/issues/6546) 待办列表无法管理、[#6545](https://github.com/Hmbown/Codewhale/issues/6545) Mac 上光标残留、[#6526](https://github.com/Hmbown/Codewhale/issues/6526) 指令预算可配置、[#6530](https://github.com/Hmbown/Codewhale/issues/6530) 统一 config 声明表。

---

## 四、重要 PR 进展（精选 10 条）

| # | 标题 | 状态 | 内容 |
|---|------|------|------|
| 1 | [#6549](https://github.com/Hmbown/Codewhale/pull/6549) 子代理预算耗尽时保留确定性摘要作为交付物 | CLOSED | Closes #6536。预算耗尽时把摘要写入 `.codewhale/state/subagent-results/<sha256>.md`，避免"人财两空"。 |
| 2 | [#6544](https://github.com/Hmbown/Codewhale/pull/6544) 停止在回退窗口上的误判紧急压缩，复用轮次缓存前缀 | CLOSED | Closes #6540。定位到 15/16 失败均为 ollama/qwen3:4b 上的误报紧急压缩。 |
| 3 | [#6551](https://github.com/Hmbown/Codewhale/pull/6551) 修复 rustc 1.89 下 8 处未满足的 `#[expect(dead_code)]`，并加 MSRV CI | CLOSED | Closes #6543。1.89 把死代码内的引用计为使用，导致 lint 期望落空、构建失败。 |
| 4 | [#6552](https://github.com/Hmbown/Codewhale/pull/6552) DSH 集成审计写入独立 home，测试不再污染真实 `audit.log` | CLOSED | Closes #6534。修复测试向用户真实 `~/.codewhale/audit.log` 写入事件的问题。 |
| 5 | [#6521](https://github.com/Hmbown/Codewhale/pull/6521) deepseek-flash 在官方路由接受图像输入 | CLOSED | Closes #6421。修正手维护的 `bundled_offerings()` 中错误的能力标注。 |
| 6 | [#6539](https://github.com/Hmbown/Codewhale/pull/6539) 官方模型路由 `/router` + Jev（OpenRouter 或 TypeSafe） | OPEN | Closes #6525。新增 `[auto.router] kind="decision"`、`min_confidence`、`base_url`，每次 Auto 轮次做一次分层决策。 |
| 7 | [#6538](https://github.com/Hmbown/Codewhale/pull/6538) Web：保留真实内容、固定搜索优先、完整原生答案、图片提示与降采样 | CLOSED | Closes #6531。提取器保留 `<article>` 与 `<header>`，修复"半抓取失败"。 |
| 8 | [#6527](https://github.com/Hmbown/Codewhale/pull/6527) 移除 app-server 的 `/tool` 及背后的空工具权威 | CLOSED | Closes #6505。该端点用空 `ToolRegistry` 调用工具，等于"第二权威"，选择直接删除而非桥接。 |
| 9 | [#6537](https://github.com/Hmbown/Codewhale/pull/6537) `/model` 按使用习惯列出：当前、固定/Fleet、最近使用 | CLOSED | Closes #6533。默认视图顺序重构，移除遗留 `enabled_models`。 |
| 10 | [#6524](https://github.com/Hmbown/Codewhale/pull/6524) 所有 Chat Completions 路由下 reasoning 始终显示为 thinking | CLOSED | Closes #6501。修复 Grok 4.7 / 小米 2.6 思考内容渲染不正确的问题。 |

> 其他重要 PR：[#6519](https://github.com/Hmbown/Codewhale/pull/6519) 失焦时继续绘制（修复 macOS 假死）、[#6520](https://github.com/Hmbown/Codewhale/pull/6520) 工作流卡片一屏可读、[#6550](https://github.com/Hmbown/Codewhale/pull/6550) 凭据去除不可见字符、[#6548](https://github.com/Hmbown/Codewhale/pull/6548) edit 失败给出可操作提示、[#6523](https://github.com/Hmbown/Codewhale/pull/6523) 模型选择器搜索中仍可固定/Fleet、[#6483](https://github.com/Hmbown/Codewhale/pull/6483) undo 回滚文件、[#6507](https://github.com/Hmbown/Codewhale/pull/6507)/[#6535](https://github.com/Hmbown/Codewhale/pull/6535) Windows NSIS CI 修复。

---

## 五、功能需求趋势

从全部 Issues 中可提炼出以下五个主要方向：

1. **可扩展的 Agent 架构**
   - [#6050](https://github.com/Hmbown/Codewhale/issues/6050) 记忆后端可插拔（causal-memory / mem0）
   - [#6529](https://github.com/Hmbown/Codewhale/issues/6529) 按模型能力覆盖
   - 诉求：把硬编码的单一实现改成"通用接缝 + 参考实现"，让第三方与用户都能介入。

2. **Token 效率与成本控制**
   - [#6541](https://github.com/Hmbown/Codewhale/issues/6541) 按请求遥测、基于成本的压缩触发
   - [#6540](https://github.com/Hmbown/Codewhale/issues/6540) 压缩失败与缓存命中率 0%
   - 诉求：以真实会话数据驱动优化，稳定前缀、减少固定开销。

3. **模型支持与路由**
   - [#6421](https://github.com/Hmbown/Codewhale/issues/6421) deepseek-flash 图像输入能力标注错误
   - [#6525](https://github.com/Hmbown/Codewhale/issues/6525) 官方 `/router` 交互入口
   - [#6529](https://github.com/Hmbown/Codewhale/issues/6529) 能力覆盖逃生舱
   - 诉求：模型目录要准确、可纠正，路由要可视化。

4. **配置与遗留清理**
   - [#6516](https://github.com/Hmbown/Codewhale/issues/6516) 删除死配置/标志/环境变量
   - [#6530](https://github.com/Hmbown/Codewhale/issues/6530) 统一 `config.toml` 声明表 + 版本化迁移
   - [#6526](https://github.com/Hmbown/Codewhale/issues/6526) 指令预算可配置
   - 诉求：消除"第二权威"、配置可发现、可迁移。

5. **TUI/交互与联网质量**
   - [#6427](https://github.com/Hmbown/Codewhale/issues/6427) Windows 多行粘贴回归
   - [#6546](https://github.com/Hmbown/Codewhale/issues/6546) / [#6545](https://github.com/Hmbown/Codewhale/issues/6545) 待办管理与光标残留
   - [#6531](https://github.com/Hmbown/Codewhale/issues/6531) Web 抓取/搜索质量
   - 诉求：终端体验稳定、联网结果可信。

---

## 六、开发者关注点

综合今日 Issue 与 PR，开发者反馈集中在以下痛点：

- **子代理生命周期管理**：单步输入上限（100k）导致子代理"猝死"且不压缩（#6504），预算耗尽时交付物丢失（#6536）。核心团队已连续通过 #6549 修复。
- **压缩（Compaction）可靠性**：16 次中 15 次失败、摘要调用 219k token 零缓存命中（#6540），是长会话体验与成本的双重痛点。
- **工具调用错误率**：edit 旧文本不匹配（占 edit 6.9%）、cwd 越界、无目标 `update_goal`（#6542），需要更可操作的错误信息（#6548 已跟进）。
- **配置可维护性**：大量死键、stub、环境变量孪生（#6516），缺少统一声明与迁移机制（#6530），是长期技术债。
- **跨平台回归**：Windows 多行粘贴（#6427）、macOS 失焦假死（#6519）、Windows 会话恢复路径（#6522）等平台差异问题频繁出现。
- **凭据与认证体验**：粘贴 API key 含 BOM/零宽字符导致 401，错误信息不够具体（#6528，PR #6550）。
- **审计与测试隔离**：测试污染真实 `~/.codewhale/audit.log`（#6534，PR #6552），反映测试环境隔离需加强。

---

*日报生成时间：2026-09-25 ｜ 数据窗口：过去 24 小时*

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>



# ComfyUI 社区动态日报（2026-09-25）

---

### 1. 今日速览
今日社区活跃度极高，无新版本发布，但核心代码库与社区生态迎来了多项关键更新。**重点聚焦于新模型支持（如 Qwen-Image 2.1 ControlNet）与硬件稳定性修复**。社区正在全力解决 Windows 下的 BSOD 显存崩溃、Linux 多 GPU 硬重置，以及 AMD ROCm 平台的性能退化问题。同时，多项针对视频 VAE 和多 CLIP 加载器的性能优化 PR 被提交。

---

### 2. 版本发布
*   **无新版本发布**：过去 24 小时内，`comfyanonymous/ComfyUI` 无新 Release 发布。

---

### 3. 社区热点 Issues（Top 10）
以下挑选了 10 个最受关注、技术挑战或社区影响较大的 Issue：

1.  **#16246 [Windows BSOD] RTX 3050 在 v0.35.0 后频繁蓝屏（dxgmms2.sys 显存释放崩溃）**
    *   **重要性**：高严重级别。自 comfy-aimdo 0.5.3 动态 VRAM 加载引入后，用户在 Windows 11 下一天内遭遇 4 次内核蓝屏，属于致命稳定性问题。
    *   **社区反应**：8 条评论，2 👍。
    *   [链接](https://github.com/Comfy-Org/ComfyUI/issues/16246)
2.  **#15760 [MiniMax H3 / Linux / 多 GPU] INT8 ConvRot 导致整机硬重置**
    *   **重要性**：系统级崩溃。在 Linux 多 GPU 环境下，运行 MiniMax H3 的 INT8 ConvRot 会导致整个宿主机硬重置，而 Wan 2.2 则稳定，需核心团队排查底层算子。
    *   **社区反应**：5 条评论，1 👍。
    *   [链接](https://github.com/Comfy-Org/ComfyUI/issues/15760)
3.  **#16365 YuE2 文本编码器在 GTX 1650 上回退至 CPU 导致报错**
    *   **重要性**：低显存显卡兼容性问题。GTX 1650 用户在使用 YuE2 时，编码器因显存不足自动回退 CPU，但后续计算仍硬编码要求 CUDA 设备，导致崩溃。
    *   **社区反应**：5 条评论，3 👍。
    *   [链接](https://github.com/Comfy-Org/ComfyUI/issues/16365)
4.  **#16415 [功能请求] 自动启用的 fast-disk 策略增加“显式关闭（opt-out）”选项**
    *   **重要性**：性能调优。commit 7a0b5ee 自动在 NVMe 盘上启用了 `fast_disk`，导致高内存机器在每一步推理时都从 NVMe 流式传输权重，部分用户希望关闭此优化。
    *   **社区反应**：4 条评论。
    *   [链接](https://github.com/Comfy-Org/ComfyUI/issues/16415)
5.  **#16502 [AMD ROCm / DynamicVRAM] 首次生成后

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>



根据您提供的 GitHub 数据，以下是 **2026-09-25 Ollama 社区动态日报**。本期社区活跃度极高，聚焦于 **工具调用稳定性修复、新模型架构支持（如 Granite、System 1）、以及 Windows 新一代显卡兼容性**。

---

### 1. 今日速览
今日 Ollama 社区无新版本发布，但代码更新与 Issue 互动极其活跃。核心动态包括：**MLX 后端工具调用内存泄漏修复（#18620）**、**Windows RTX 50 系列显卡 CUDA 检测故障（#18581）** 引发广泛关注，以及社区成功合并了 **System One 结构化决策 API（#18606）** 和 **Granite 模型 MLX 后端支持（#17972）**。

---

### 2. 版本发布
*   **最新 Releases**：过去 24 小时内无新版本发布（无新 Release）。

---

### 3. 社区热点 Issues（共 9 条，均值得关注）

以下是过去 24 小时内更新、最值得开发者关注的 Issue：

#### 🔴 [Bug] MLX 工具调用内存泄漏（高危，影响 Mac 端侧智能体部署）
*   **Issue #18620** | [OPEN] MLX runner: each request that ends in a tool call leaks ~0.43 GiB outside the prefix-cache budget
*   **作者**: robin1333k | 链接: [Issue #18620](https://github.com/ollama/ollama/issues/18620)
*   **摘要**: 在 Mac Studio M1 Max 上使用 `qwen3.6:27b-mlx` 模型时，每次以工具调用（tool call）结尾的请求都会在前缀缓存预算之外泄漏约 **0.43 GiB 内存**。对于需要长期维持多轮工具调用对话的 Agent 场景，这将导致内存耗尽。
*   **重要性**: ⭐⭐⭐⭐⭐ 智能体（Agent）高频使用工具，此内存泄漏严重阻碍了 MLX 后端的生产级应用。

#### 🔴 [Bug] Windows CUDA 发现失败（RTX 50 系列 / Blackwell 架构）
*   **Issue #18581** | [OPEN] Windows CUDA discovery fails (0 B VRAM / CPU fallback) on NVIDIA RTX 50-Series
*   **作者**: saroshwadia | 链接: [Issue #18581](https://github.com/ollama/ollama/issues/18581)
*   **摘要**: 在 Windows 系统上，搭配 NVIDIA RTX 50 系列（Blackwell 架构）显卡和 616.92 驱动时，Ollama 无法正确检测显存（显示 `total_vram="0 B"`），完全回退到 CPU 运行，属于严重性能回归。
*   **重要性**: ⭐⭐⭐⭐⭐ 新一代高端 Windows 显卡用户无法享受 GPU 加速。

#### 🟡 [Bug] MLX nvfp4 预填充卡死（Prefill Stall）
*   **Issue #18505** | [OPEN] MLX nvfp4: admitted request stalls in prefill at processed=total-1 under sustained single-slot load
*   **作者**: Etoile04 | 链接: [Issue #18505](https://github.com/ollama/ollama/issues/18505)
*   **摘要**: 在持续的单槽位负载下，MLX 后端的 nvfp4 量化模型在预填充（prefill）阶段会卡死数分钟，无任何 token 生成，

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

Thinking Process:

1.  **Understand the Goal**: The user wants a daily community dynamic report for `llama.cpp` on `2026-09-25` based on provided GitHub data (releases, issues, PRs). The report needs to be in Chinese, structured into specific sections:
    *   今日速览 (Today's Overview)
    *   版本发布 (Releases - if any new release, summarize; here there are multiple builds like b11169, b11168, etc., listed under "最新 Releases")
    *   社区热点 Issues (Top 10 noteworthy issues, explaining why they are important and community reaction)
    *   重要 PR 进展 (Top 10 important PRs, explaining functionality or fixes)
    *   功能需求趋势 (Feature request trends extracted from all issues)
    *   开发者关注点 (Summary of pain points or high-frequency needs from developer feedback)

2.  **Analyze the Input Data**:
    *   **Date**: 2026-09-25 (The prompt asks for the daily report of this date based on the provided data, which shows updates mostly on 2026-09-24).
    *   **Releases**:
        *   `b11169`: llama-grammar: fix numeric truncation for token_id parsing (#29382)
        *   `b11168`: hexagon: dynamic quantizer improvements (#29395)
        *   `b11167`: hexagon: support I32 CPY and CONT (#29379)
        *   `b11166`: cuda: add F16 kernel support for CONV_2D_DW (#29064)
        *   `b11165`: test: flush status (#28352)
        *   `b11163`: llama: add llama_batch_ext (#24669)
        *   `b11160`: vulkan: int8 coopmat1 matmul implementation for AMD RDNA3 and RDNA4 (#27952)
        *   `b11159`: vulkan: handle misalignment in conv_2d and conv_3d (#29365)
        *   `b11158`: vulkan: tune KHR cooperative matrix support for Adreno GPUs (#29328)
        *   `b11157`: cuda: add conv3d with implicit GEMM (#29137)
        *   *Note on Releases*: These are daily builds (indicated by 'b' + numbers). The key themes are grammar fixes, Hexagon NPU backend improvements, CUDA/Vulkan backend optimizations (especially for AMD RDNA3/4, Adreno, and CONV operations), and API updates (`llama_batch_ext`).
    *   **Issues (Top 30 by comments, pick top 10 most interesting/important ones)**:
        *   `#25618` (26 comments): Eval bug: Speculative decoding (draft-mtp / draft-dspark) diverges from vanilla on quantized targets. (Critical for spec decoding users on quantized models).
        *   `#27623` (17 comments): Qwen3.8-27B decode throughput collapses ~25x at context >80K. (Important for long-context inference on hybrid Gated DeltaNet models).
        *   `#17583` (16 comments): Running llama-server only possible with single AMD GPU, multiple causes Segmentation fault. (Critical for multi-GPU AMD users).
        *   `#28752` (14 comments): Severe drop in prompt processing speed after b10780 on Vulkan, RDNA3. (Performance regression on popular AMD Vulkan cards).
        *   `#28211` (11 comments): HIP/ROCm on gfx1151, wrong logits triggered by prompts longer than n_ubatch. (Correctness issue on AMD Strix Halo).
        *   `#29281` (10 comments): CUDA sparse flash attention decode regression (b11047 -> b11062). (Performance regression on CUDA).
        *   `#29022` (8 comments): Feature Request: Fast Tool Gating & Single-Pass Selection via Prefill Logit Slicing. (Tool use optimization).
        *   `#20433` (7 comments): HIP introduces subtle correctness errors (model quality collapses). (Critical regression on AMD HIP).
        *   `#24429` (7 comments): mtmd video input hangs on Windows (deadlock on faststart MP4). (Multimodal bug on Windows).
        *   `#28633` (5 comments): CUDA: make GGML_CUDA_FA_ALL_QUANTS=ON the default (silent CPU fallback for 4-bit KV). (Crucial performance pitfall for CUDA users).
    *   **PRs (Top 20 by comments/activity, pick top 10)**:
        *   `#27851`: ggml-cpu: tiled mul_mat for k-quants (3-7x faster CPU mul_mat using VNNI).
        *   `#29356`: Q8_0 dot product fix for int8 min (correctness fix).
        *   `#29060`: Update embeddings server: return HTTP 400 for invalid embedding requests (API robustness).
        *   `#29401`: OpenCL: add bin kernel `kernel_gemm_noshuffle_q5_k...` for Adreno (GEMM optimization).
        *   `#29400`: convert: preserve already-stacked NVFP4 MoE experts (model conversion fix for Step-3.7-Flash).
        *   `#29291`: server: strip stray media markers from user text, tolerate unmatched markers (mtmd/server robustness).
        *   `#29280`: vulkan: reuse descriptor sets when bindings are constant (Vulkan performance optimization).
        *   `#28554`: server: pass id_slot through the Anthropic /v1/messages conversion (API compatibility).
        *   `#29393`: CUDA: fuse RMS_NORM + SCALE into one kernel (CUDA optimization, fixes ~4% regression).
        *   `#29397`: ggml-cpu: use AVX-512 VNNI+VBMI in the Q4_K 8x8 repack GEMM (CPU performance).
        *   `#29267`: ggml-vulkan: add optional device keepalive (investigating #26196).
        *   `#29390` (Closed): metal: fix graph capture and handle empty graphs.
        *   `#29377` (Closed): metal: optimize sparse FA + clean-up.
        *   `#29394`: kleidiai: use SME2 kernels for CPU flash attention (CPU FA optimization).
        *   `#29395` (Closed): hexagon: dynamic quantizer improvements (Hexagon NPU).
        *   `#29294`: llama: fix tensor split for fused qkv with uneven K/V head sizes (model conversion).

3.  **Drafting the Content - Section by Section**:

    *   **1. 今日速览 (Today's Overview)**:
        *   Summarize key points: llama.cpp daily builds (b11157 to b11169) focus heavily on backend optimizations, especially Hexagon NPU, Vulkan (AMD RDNA3/4, Adreno), and CUDA. Key bug fixes include speculative decoding divergence on quantized models and multi-GPU AMD segmentation faults.
        *   Drafting in Chinese: 今日 llama.cpp 社区活跃，发布了多个日常构建版本（b11157 至 b11169），重点集中在 Hexagon NPU 后端的动态量化改进、Vulkan 对 AMD RDNA3/4 及 Adreno GPU 的 INT8 矩阵乘法支持，以及 CUDA 算子优化。社区层面，量化模型上投机解码（Speculative Decoding）结果发散、AMD 多 GPU 崩溃等关键 Bug 成为讨论焦点。

    *   **2. 版本发布 (Releases)**:
        *   List the builds and summarize their key changes.
        *   `b11169`: llama-grammar 修复了 token_id 解析中的数值截断问题 (#29382)。
        *   `b11168`: Hexagon 后端动态量化器改进，修复了 Q8_0 精度和寄存器溢出问题 (#29395)。
        *   `b11167`: Hexagon 后端增加对 I32 CPY 和 CONT 指令的支持 (#29379)。
        *   `b11166`: CUDA 增加了针对 CONV_2D_DW 的 F16 内核支持 (#29064)。
        *   `b11163`: 核心 API 新增 `llama_batch_ext`，并提供了批量解码示例 (#24669)。
        *   `b11160`: Vulkan 后端实现 AMD RDNA3 和 RDNA4 的 INT8 coopmat1 矩阵乘法 (#27952)。
        *   `b11157`: CUDA 增加了隐式 GEMM 的 conv3d 支持 (#29137)。
        *   *Summary*: 这些发布标志着 llama.cpp 在移动端/边缘 NPU（Hexagon）、Vulkan（AMD/高通）和 CUDA 平台上的推理效率和正确性持续提升，尤其是对混合架构模型（如 Qwen3.5/3.8）的支持。

    *   **3. 社区热点 Issues (Top 10)**:
        *   Need to pick 10, translate titles, summaries, why important, and community reaction (likes/comments).
        *   *Issue 1*: #25618 - 投机解码在量化目标模型上的发散问题。 (Speculative decoding divergence on quantized targets). **重要性**: 投机解码是提升推理速度的关键技术，但在量化模型上（如 Q4_K_M）与非投机解码结果不一致，严重影响可信度。**社区反应**: 26条评论，2个赞，表明许多用户在使用 draft-mtp 时遇到了此问题。
        *   *Issue 2*: #27623 - Qwen3.8-27B 在长上下文（>80K）下解码吞吐量崩溃。 (Throughput collapse for Qwen3.8-27B hybrid Gated DeltaNet). **重要性**: 长上下文是核心需求，混合架构模型（如 Qwen3.8）在长上下文下性能骤降 25 倍，限制了其实际应用。**社区反应**: 17条评论，关注度极高。
        *   *Issue 3*: #17583 - AMD 多 GPU 运行 llama-server 导致段错误（Segmentation fault）。 (Multi-GPU AMD segmentation fault). **重要性**: 严重阻碍 AMD 用户在多卡环境下的部署。**社区反应**: 16条评论，长期未解决的痛点。
        *   *Issue 4*: #28752 - Vulkan (RDNA3) 上 b10780 后提示词处理速度严重下降。 (Vulkan RDNA3 prompt processing regression). **重要性**: 性能回退，影响使用 AMD Radeon 7000 系列显卡的用户体验。**社区反应**: 14条评论，2个赞。
        *   *Issue 5*: #28211 - HIP/ROCm on gfx1151 (Strix Halo) 在长 prompt 时产生错误 logits。 (Wrong logits on HIP gfx1151). **重要性**: 硬件正确性问题，影响新一代 AMD APU（Strix Halo）的推理正确性。**社区反应**: 11条评论。
        *   *Issue 6*: #29281 - CUDA 稀疏 Flash Attention 解码速度回退 (b11047 -> b11062)。 (CUDA sparse FA decode regression). **重要性**: 稀疏注意力是大模型长序列推理的关键优化，回退会直接降低推理速度。**社区反应**: 10条评论。
        *   *Issue 7*: #29022 - 快速工具门控与单遍选择（预填充 Logit 切片）功能请求。 (Fast Tool Gating & Single-Pass Selection). **重要性**: 提升 Agent 和工具调用效率的进阶功能。**社区反应**: 8条评论，3个赞。
        *   *Issue 8*: #20433 - HIP 引入细微正确性错误，导致模型质量崩溃。 (HIP subtle correctness errors). **重要性**: 影响多种模型（GPT-OSS, GLM-4.5-air, Qwen3-30B-A3B 等），在 AMD 后端上表现为模型输出质量突然崩溃。**社区反应**: 7条评论。
        *   *Issue 9*: #24429 - Windows 上 mtmd 视频输入挂起，解码 0 帧。 (mtmd video input hangs on Windows). **重要性**: 阻碍 Windows 用户进行多模态视频推理。**社区反应**: 7条评论，5个赞。
        *   *Issue 10*: #28633 - CUDA 默认未开启 4-bit KV 缓存，导致静默回退到 CPU 速度。 (Silent CPU fallback for 4-bit KV). **重要性**: 极易被忽视的性能陷阱（慢 30 倍），影响所有默认编译的 CUDA 用户。**社区反应**: 5条评论。

    *   **4. 重要 PR 进展 (Top 10)**:
        *   *PR 1*: #27851 - `ggml-cpu: tiled mul_mat for k-quants`. 利用 VNNI 实现 3-7x 的 CPU 矩阵乘法加速，且复杂度极低。
        *   *PR 2*: #29393 - `CUDA: fuse RMS_NORM + SCALE into one kernel`. 融合 CUDA 内核，修复了约 4% 的预填充回退，优化 MoE/SSM 路径。
        *   *PR 3*: #29397 - `ggml-cpu: use AVX-512 VNNI+VBMI in the Q4_K 8x8 repack GEMM`. 针对高端 x86 CPU 的 Q4_K 量化 GEMM 进行专项指令级优化。
        *   *PR 4*: #29401 - `opencl: add bin kernel ... for Adreno`. 为 Adreno GPU 添加 Q5_K 非 MoE GEMM 的 DP4A 二进制内核，提升高通平台推理性能。
        *   *PR 5*: #29400 - `convert: preserve already-stacked NVFP4 MoE experts`. 修复了 Step-3.7-Flash NVFP4 模型转换时的 expert 权重堆叠问题。
        *   *PR 6*: #29291 - `server: strip stray media markers from user text`. 修复了多模态服务器中由于游离媒体标记导致的分词/推理错误。
        *   *PR 7*: #29280 - `vulkan: reuse descriptor sets when bindings are constant`. 减少 Vulkan 后端不必要的描述符集更新，提升图形管线执行效率。
        *   *PR 8*: #29394 - `kleidiai: use SME2 kernels for CPU flash attention`. 利用 ARM SME2 内核加速 CPU 上的 Flash Attention。
        *   *PR 9*: #29060 - `server: return HTTP 400 for invalid embedding requests`. 规范 Embedding API 的错误处理，对客户端错误返回 400 而非 500。
        *   *PR 10*: #28554 - `server: pass id_slot through the Anthropic /v1/messages conversion`. 提升 Anthropic API 兼容性，确保 slot 针脚在 `/v1/messages` 接口中生效。

    *   **5. 功能需求趋势 (Feature Request Trends)**:
        *   Extract from issues like #29022 (Fast Tool Gating / Logit Slicing for Tool Use), #24375 (microphone button when model doesn't support audio but another does - UI/UX), #29058 (Support Prism PQ2_0 / PTQ1_0 ternary quant formats - new model support), #24902 (pre-select models in webui using alias - UX).
        *   Key trends:
            *   **大模型 Agent 与工具调用 (Tool Use & Agent Optimization)**: 如预填充 Logit 切片以加速工具选择。
            *   **新模型与新量化格式支持**: 如 Ternary-Bonsai-2 的 PQ2_0/PTQ1_0 格式、NVFP4 MoE 等。
            *   **多模态与边缘部署体验**: 视频输入稳定性、跨模型音频支持、Hexagon NPU 的 Windows Arm64 构建。
            *   **API 规范性与开发者体验**: 更精准的 HTTP 状态码返回（如 Embedding 400）、WebUI 别名预选、Anthropic API 的参数透传。

    *   **6. 开发者关注点 (Developer Pain Points / High-frequency Needs)**:
        *   Based on issues and PRs:
            *   **跨平台后端性能回退与正确性**: 尤其是 CUDA（稀疏注意力、4-bit KV 静默回退）、Vulkan（RDNA3 预填充回退）、HIP

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*