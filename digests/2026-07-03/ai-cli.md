# AI CLI 工具社区动态日报 2026-07-03

> 生成时间: 2026-07-03 08:05 UTC | 覆盖工具: 12 个

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

以下是今日 AI 开发工具社区的重点更新摘要：

1. **Claude Code** ([github.com/anthropics/claude-code](https://github.com/anthropics/claude-code))：发布 v2.1.199 版本，新增多技能堆叠调用支持（最多可加载 5 个前导技能），并修复了企业代理环境下 SSL 证书错误耗尽重试次数的问题。

2. **Qwen Code** ([github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code))：发布 v0.19.5 正式版，强化了 daemon 后台任务管理稳定性并优化 Web Shell 资源占用；同时发布 cua-driver-rs v0.7.0，新增相对坐标支持并完成 macOS 版本签名与公证。

3. **Gemini CLI** ([github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli))：发布 v0.51.0-nightly 版本，引入 `caretaker` 的 egress Cloud Run 服务骨架，用于接收和分发后台自动化代理的动作事件消息。

4. **OpenAI Codex** ([github.com/openai/codex](https://github.com/openai/codex))：连续发布 `rust-v0.143.0-alpha.34` 与 `.35` 两个底层 Rust 核心 alpha 版本，推进代理网络凭证路由重构与 Guardian 安全策略的底层适配。

5. **llama.cpp** ([github.com/ggerganov/llama.cpp](https://github.com/ggerganov/llama.cpp))：发布 b9860 版本，新增 `llama_model_ftype_name()` C API，允许开发者直接获取模型文件的量化类型名称，提升第三方应用集成便利性。

6. **Kimi Code CLI** ([github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli))：合并 PR #2481，修复了 Windows Terminal 和 VS Code 集成终端中通过快捷键粘贴图片等二进制媒体内容静默失败的问题。

7. **Qwen Code** ([github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code))：合并 PR #6250，修复了流式解析器在流结束时静默丢弃空参数工具调用的问题，避免了 Agent 陷入无限重试循环。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

以下是基于 `anthropics/skills` 官方仓库数据（截止 2026-07-03）生成的 Claude Code Skills 社区热点分析报告：

### 1. 热门 Skills 排行
基于功能重要性、解决的痛点普遍性及关联 Issue 的讨论热度，以下为社区最受关注的 6 个 Skills（PR）：

*   **self-audit (交付质量审计)** 
    *   **功能**：在 AI 交付前进行机械文件验证与四维推理质量门审计，按损害严重性排序。
    *   **讨论热点**：社区高度关注如何系统性降低 AI 幻觉和交付错误，该 Skill 提供了通用的输出质量保证方案。
    *   **状态**：OPEN | [链接](https://github.com/anthropics/skills/pull/1367)
*   **document-typography (文档排版控制)**
    *   **功能**：防止 AI 生成文档出现孤儿词、寡妇段和编号错位等常见排版问题。
    *   **讨论热点**：直击 AI 生成长文档的“最后一公里”体验，用户普遍反馈 AI 缺乏原生排版意识。
    *   **状态**：OPEN | [链接](https://github.com/anthropics/skills/pull/514)
*   **sensory (macOS 原生自动化)**
    *   **功能**：通过 AppleScript 实现原生 macOS 自动化，替代不稳定的截图式 Computer Use。
    *   **讨论热点**：社区苦“截图识别”久矣，该 Skill 提供了更稳定、低延迟的系统级控制新范式。
    *   **状态**：OPEN | [链接](https://github.com/anthropics/skills/pull/806)
*   **skill-quality-analyzer & security-analyzer (元技能)**
    *   **功能**：提供 Skill 质量与安全的五维度评估及审查工具。
    *   **讨论热点**：随着 Skills 数量激增，社区急需标准化的“元工具”来评估和筛选第三方 Skills。
    *   **状态**：OPEN | [链接](https://github.com/anthropics/skills/pull/83)
*   **testing-patterns (全栈测试模式)**
    *   **功能**：涵盖测试哲学、单元测试、React 组件测试等全面测试栈指导。
    *   **讨论热点**：规范 AI 生成代码的测试策略，解决 AI 写代码“重实现、轻测试”的痛点。
    *   **状态**：OPEN | [链接](https://github.com/anthropics/skills/pull/723)
*   **odt (OpenDocument 支持)**
    *   **功能**：支持 ODT/ODS 等开源文档格式的创建、填充、读取与 HTML 转换。
    *   **讨论热点**：拓展了企业级和开源生态的文档处理能力，满足非微软生态用户的需求。
    *   **状态**：OPEN | [链接](https://github.com/anthropics/skills/pull/486)

---

### 2. 社区需求趋势
从 Issues 的讨论焦点来看，社区对新 Skill 和生态演进的期待集中在以下四个方向：

1.  **安全治理与信任边界**：Issue [#492](https://github.com/anthropics/skills/issues/492) (34评) 和 [#412](https://github.com/anthropics/skills/issues/412) 表明，社区强烈要求建立 Skills 的安全审计机制、Agent 治理模式，并解决社区 Skill 滥用官方命名空间导致的信任危机。
2.  **企业级协作与数据集成**：Issue [#228](https://github.com/anthropics/skills/issues/228) (14评) 呼吁实现组织内的 Skill 共享库；Issue [#1175](https://github.com/anthropics/skills/issues/1175) 则聚焦于处理 SharePoint 等企业文档时的权限控制与上下文安全。
3.  **Agent 记忆与上下文优化**：Issue [#1329](https://github

---

# Claude Code 社区动态日报 (2026-07-03)

## 1. 今日速览
Claude Code v2.1.199 正式发布，重点优化了多技能堆叠调用并修复了企业级代理环境下的 SSL 证书重试问题。社区当前高度聚焦于**长上下文/Agent 模式下的状态管理**、**多端协同体验**以及**安全护栏误杀**问题，macOS 平台下的系统级兼容性与后台 Agent 稳定性成为开发者反馈的重灾区。

---

## 2. 版本发布
**v2.1.199** 
- **多技能堆叠调用**：支持堆叠斜杠技能调用（如 `/skill-a /skill-b do XYZ`），现在可加载所有前导技能（最多 5 个），而不仅仅是第一个，提升了复杂工作流的编排能力。
- **网络与 SSL 修复**：修复了在 TLS 检查代理、缺失 `NODE_EXTRA_CA_CERTS` 或证书过期等场景下，SSL 证书错误会错误地耗尽重试次数的问题。现在系统能更准确地捕获错误并提供可操作的指导，提升了企业内网环境的可用性。

---

## 3. 社区热点 Issues
*以下挑选了 10 个最具代表性、社区反响最热烈的 Issue：*

1. **[移动端多账号切换](https://github.com/anthropics/claude-code/issues/36151) (#36151)** | 👍 412 | 💬 115
   - **重要性**：目前移动端不支持非共享邮箱的多账号切换，严重阻碍了拥有多个 Anthropic 账号（如个人/工作）的用户。社区呼声极高。
2. **[AskUserQuestion 60秒超时静默跳过](https://github.com/anthropics/claude-code/issues/73125) (#73125)** | 👍 247 | 💬 80
   - **重要性**：在 Bedrock/Linux 等环境下，等待用户输入 60 秒后直接跳过继续执行，导致 Agent 在需要人类确认的关键节点“盲目”操作，严重影响可靠性。
3. **[API 连接中途断开导致不可用](https://github.com/anthropics/claude-code/issues/69415) (#69415)** | 👍 43 | 💬 13
   - **重要性**：在 VSCode/WSL 环境下频繁发生，直接导致 Claude Code 无法完成任何任务，是核心工作流的阻断性 Bug。
4. **[全屏渲染器破坏 macOS 系统级剪贴板](https://github.com/anthropics/claude-code/issues/72455) (#72455)** | 👍 3 | 💬 4
   - **重要性**：虽然点赞数不高，但属于**系统级严重 Bug**。开启全屏模式后，不仅应用内，整个 macOS 系统的复制粘贴功能均会失效。
5. **[WebFetch 忽略 prompt 导致上下文耗尽](https://github.com/anthropics/claude-code/issues/73514) (#73514)** | 👍 0 | 💬 1
   - **重要性**：`WebFetch` 未执行 prompt 提取，而是将完整原始网页注入上下文，仅需 3-4 次抓取就会耗尽 1M token 窗口，使长上下文优势失效。
6. **[Compaction 压缩机制错误处理 Skill 内容](https://github.com/anthropics/claude-code/issues/73280) (#73280)** | 👍 0 | 💬 3
   - **重要性**：上下文压缩时，系统对 Skill 加载的内容进行了“总结”而非“清除”，导致上下文浪费和潜在的格式漂移，影响长任务执行。
7. **[安全护栏过严误杀合理用例](https://github.com/anthropics/claude-code/issues/72852) (#72852)** | 👍 1 | 💬 3
   - **重要性**：新安全策略过于严格，导致开发者在进行正常科研或开发任务时被拦截，且豁免申请表单失效，引发社区对模型可用性的担忧。
8. **[跨设备恢复会话时模型静默回退](https://github.com/anthropics/claude-code/issues/73704) (#73704)** | 👍 0 | 💬 2
   - **重要性**：在设备 A 通过 `/model` 切换模型后，在设备 B 恢复会话时模型静默变回默认，但计费仍按原模型计算，造成多端协同痛点与计费困惑。
9. **[会话重命名永久损坏 Transcript](https://github.com/anthropics/claude-code/issues/73638) (#73638)** | 👍 0 | 💬 1
   - **重要性**：在 server_tool 调用期间重命名会话，会注入错误的合成 user turn，导致后续所有 prompt 返回 400 错误，属于核心状态管理缺陷。
10. **[子代理上下文百分比显示错误](https://github.com/anthropics/claude-code/issues/73710) (#73710)** | 👍 0 | 💬 2
    - **重要性**：在使用 1M 上下文模型时，UI 仍使用 200k 作为分母计算子代理上下文，导致进度条错误地固定在 100%，误导开发者对上下文余量的判断。

---

## 4. 重要 PR 进展
*注：过去 24 小时内社区共更新 5 条 PR，有效代码贡献较少，主要为配置维护与文档修复，同时存在部分无效测试 PR。*

1. **[fix: 移除 init-firewall.sh 中的失效域名](https://github.com/anthropics/claude-code/pull/72451) (#72451)**
   - **内容**：移除了 `statsig.anthropic.com`。该域名已无法解析，会导致 devcontainer 启动

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 (2026-07-03)

## 1. 今日速览
Codex 底层核心持续高频迭代，过去 24 小时内连发两个 Rust 核心 alpha 版本。社区对 Linux 桌面版的需求呈现爆发式增长（超 600 赞），同时 Windows 平台的沙盒初始化与性能问题成为当前 Bug 反馈的重灾区。官方 PR 则密集推进了代理网络凭证路由（Credentialed Routes）的重构与安全策略（Guardian）的升级。

## 2. 版本发布
- **`rust-v0.143.0-alpha.34` & `rust-v0.143.0-alpha.35`**：连续发布两个底层 Rust 核心 alpha 版本。虽未提供详细 Release Notes，但结合近期密集的 PR 动态，推测主要涉及代理网络路由重构、文件系统语义增强及 Guardian 安全策略的底层适配。

## 3. 社区热点 Issues
1. **[OPEN] #11023 Codex desktop app for Linux** (💬140 | 👍682)
   - **重要性**：社区热度最高。由于 Mac 端存在功耗/发热问题，大量开发者强烈呼吁推出 Linux 桌面版，反映了跨平台支持的迫切需求。
   - **链接**：[openai/codex#11023](https://github.com/openai/codex/issues/11023)
2. **[OPEN] #30364 GPT-5.5 推理 token 聚集导致复杂任务性能下降** (💬33 | 👍48)
   - **重要性**：开发者发现 GPT-5.5 的推理输出 token 异常聚集在 516/1034/

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 (2026-07-03)

## 1. 今日速览
今日 Gemini CLI 发布了最新的 nightly 版本，重点完善了后台代理（Caretaker）的云端基础设施。社区讨论的焦点集中在**子代理（Subagent）的调度稳定性**与**自动内存（Auto Memory）的安全可控性**上。同时，多个核心 PR 致力于解决文件处理损坏、MCP 资源解析冲突以及启动性能等关键体验问题，工具正朝着更深度、更安全的代码感知方向演进。

## 2. 版本发布
**v0.51.0-nightly.20260703.gf7af4e518**
*   **核心更新**：引入了 `caretaker` 的 egress Cloud Run 服务骨架（[PR #28167](https://github.com/google-gemini/gemini-cli/pull/28167)）。该服务提供了一个轻量级 HTTP 服务器，用于接收和分发 Triage Worker 通过 Cloud Pub/Sub 推送的动作事件消息，进一步夯实了后台自动化代理的底层架构。

## 3. 社区热点 Issues
*以下 10 个 Issue 反映了当前社区最关注的技术挑战与体验痛点：*

1.  **[P1] 子代理达到最大轮数却伪装成功** ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323))：`codebase_investigator` 在达到 `MAX_TURNS` 限制时，错误地报告 `status: "success"` 和 `GOAL` 达成，掩盖了任务中断的事实。（9 评论）
2.  **[P1] 通用代理（Generalist agent）永久卡死** ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409))：当 CLI 委托任务给通用代理时，简单的文件夹创建等任务会无限期挂起。（7 评论，8 赞）
3.  **[P2] 模型不够主动使用技能和子代理** ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968))：用户反馈 Gemini 极少主动调用自定义 Skills 和 Sub-agents，除非被明确指令，导致复杂任务效率低下。（6 评论）
4.  **[P2] 评估 AST 感知文件读取与映射的影响** ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745))：社区正在探讨引入 AST（抽象语法树）感知工具，以精确读取方法边界、减少 Token 噪音并提升代码导航精度。（7 评论）
5.  **[P2] Auto Memory 增加确定性脱敏并减少日志** ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525))：指出 Auto Memory 在将本地记录发送给模型前缺乏有效脱敏，存在密钥泄露风险，且日志过于冗长。（5 评论）
6.  **[P1] Shell 命令执行后卡在 "Waiting input"** ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166))：简单的 CLI 命令执行完毕后，状态仍显示为活跃并等待用户输入，严重阻塞工作流。（4 评论，3 赞）
7.  **[P2] 工具数量超过 128 个时触发 400 错误** ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246))：在配置大量 MCP 工具或技能时，API 请求因工具列表过长而失败，缺乏智能的工具范围限制机制。（3 评论）
8.  **[P2] 代理应停止或阻止破坏性行为** ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672))：模型在执行复杂 Git 操作或管理数据库时，偶尔会使用 `git reset --hard` 或 `--force` 等危险命令，缺乏安全护栏。（3 评论）
9.  **[P1] 浏览器子代理在 Wayland 环境下失败** ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983))：Browser Agent 在 Linux Wayland 显示服务器下无法正常工作，存在环境兼容性问题。（4 评论）
10. **[P2] 模型频繁在随机位置创建临时脚本** ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571))：当限制模型使用 Shell 时

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 (2026-07-03)

## 1. 今日速览
今日 Copilot CLI 社区的焦点集中在 **Agent 核心稳定性**、**MCP 协议规范适配**以及**终端 TUI 基础体验**上。开发者集中反馈了 Agent 在上下文压缩时出现的无限循环致命 Bug，以及 MCP 在分页和 OAuth 认证上的兼容性缺陷。同时，BYOK（自带密钥）自定义模型的支持诉求持续升温。*(注：今日 Issue 列表中包含部分无关/垃圾信息，已在本次分析中过滤。)*

## 2. 版本发布
过去 24 小时内**无新版本发布**。

## 3. 社区热点 Issues
以下是今日最值得关注的 10 个 Issue：

1. **[Agent 严重 Bug] Plan→Compact→Re-Plan 无限循环** 
   - **[#3158](https://github.com/github/copilot-cli/issues/3158)**：Agent 在上下文达到 75% 触发 Compact 后，陷入重新规划的死循环（记录到 217 次），零代码执行。严重影响长会话开发体验。
2. **[终端渲染] 滚动条导致文本不对齐** 
   - **[#3501](https://github.com/github/copilot-cli/issues/3501)**：获得 9 个赞。引入垂直滚动条后导致终端文本渲染错位，在 Windows 终端下尤为明显，破坏基础阅读体验。
3. **[功能请求] 支持自定义模型端点 (BYOK)** 
   - **[#4003](https://github.com/github/copilot-cli/issues/4003)**：对标 VS Code，强烈要求支持配置本地或私有模型端点，满足企业级私有化部署和高级开发者的模型控制需求。
4. **[MCP 规范] `tools/list` 分页 (nextCursor) 未跟随** 
   - **[#4006](https://github.com/github/copilot-cli/issues/4006)**：CLI 未遵循 MCP 规范处理分页，导致后续页面的工具被静默忽略，阻碍了大型 MCP 生态的接入。
5. **[BYOK 回归] 自定义模型在 `--acp`

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 (2026-07-03)

## 1. 今日速览
2026年7月3日，Kimi Code CLI 社区保持平稳运行，过去24小时内无新版本发布。社区贡献者主要聚焦于底层终端交互体验的优化与复杂网络环境下的连接稳定性修复。今日核心动态集中在解决 Windows 终端下的剪贴板媒体粘贴失效问题，以及成功闭环了一起基于 Tailscale 虚拟组网环境的 WebSocket 连接异常。

## 2. 版本发布
过去 24 小时内无新版本发布。

## 3. 社区热点 Issues
*注：受限于今日监测数据，仅产生 1 条 Issue 更新。以下为详细分析：*

- **[CLOSED] #1111: kimi web use tailscale websocket connection error**
  - **重要性**：该 Issue 反映了开发者在使用 Tailscale 等虚拟组网/内网穿透工具时，Kimi Code CLI 的 WebSocket 连接出现异常。随着远程开发和分布式协作的普及，此类网络隧道环境下的兼容性直接影响核心服务的可用性。
  - **社区反应**：该问题已由社区协助排查并关闭（包含 2 条评论），表明相关网络适配、配置指引或底层连接逻辑已得到解决，保障了复杂网络环境下开发者的使用体验。
  - **链接**：[MoonshotAI/kimi-cli Issue #1111](https://github.com/MoonshotAI/kimi-cli/issues/1111)

## 4. 重要 PR 进展
*注：受限于今日监测数据，仅产生 1 条 PR 更新。以下为详细分析：*

- **[OPEN] #2481: fix(shell): read clipboard media on BracketedPaste for Windows terminals**
  - **功能/修复内容**：修复了 Windows Terminal 和 VS Code 集成终端中，通过 `Ctrl+V` 粘贴图片等二进制媒体内容静默失败的问题。由于这些现代终端将粘贴操作处理为 BracketedPaste 事件且无法直接以文本形式携带二进制内容，该 PR 优化了 `_handle_bracketed_paste()` 方法，使其能够正确回退并读取剪贴板中的媒体数据。
  - **重要性**：大幅提升了 Windows 及 VS Code 用户在多模态交互（如直接粘贴截图、UI 设计图）时的体验，补齐了跨平台终端交互的关键短板。
  - **链接**：[MoonshotAI/kimi-cli PR #2481](https://github.com/MoonshotAI/kimi-cli/pull/2481)

## 5. 功能需求趋势
基于今日及近期的社区动态，可以观察到 Kimi Code CLI 的以下功能演进趋势：
- **跨平台终端深度适配**：社区对 CLI 在不同终端（如 Windows Terminal、VS Code 集成终端）下的表现要求日益提高，特别是针对 Bracketed Paste 等现代终端特性的深度兼容与底层 Shell 交互逻辑的完善。
- **复杂网络环境兼容性**：随着开发者网络环境的复杂化（如广泛使用 Tailscale、ZeroTier 等组网工具），CLI 工具对各类网络代理和隧道环境的 WebSocket 连接稳定性提出了更高要求。
- **多模态交互无缝化**：开发者期望在 CLI 中能够像 GUI 工具一样，无缝地通过剪贴板传递图片等富媒体内容，以降低上下文切换成本，提升 AI 辅助编程的效率。

## 6. 开发者关注点
- **Windows 终端多模态体验痛点**：Windows 开发者在 VS Code 或 Windows Terminal 中粘贴图片时遭遇静默失败，严重影响了基于截图进行代码提问或调试的效率。开发者高度关注此类底层 Shell 交互逻辑的修复，期望获得与 macOS/Linux 一致的流畅体验。
- **网络连通性与排错效率**：在使用 Tailscale 等工具进行远程开发时，WebSocket 连接报错会直接阻断服务。开发者的核心痛点在于缺乏针对非标网络环境的明确配置指引，以及工具对复杂网络拓扑的自动探测与适配能力。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 - 2026年7月3日

## 1. 今日速览
今日 Pi 社区的核心焦点在于修复推理模型（Reasoning Models）引发的空内容崩溃问题，并大幅扩展了模型提供商生态（新增 DeepInfra、GLM API 及 Azure Cognitive Services）。此外，TUI 沉浸式体验优化（如引入 Zen 模式、修复终端复制问题）以及长上下文压缩（Compaction）的多语言支持成为社区热议焦点。

## 2. 社区热点 Issues

1. **[Issue #4228](https://github.com/earendil-works/pi/issues/4228)** (19 评论) **OpenAI 流式处理逻辑重构**：修复 `openai-completions` provider 在处理包含 content 和 tool calls 的 deltas 时的累积逻辑。作为核心流式处理模块，该重构对多模态和复杂工具调用场景的稳定性至关重要。
2. **[Issue #4505](https://github.com/earendil-works/pi/issues/4505)** (12 评论) **MiMo 模型多轮调用 400 错误**：使用小米 MiMo 模型时，`

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 (2026-07-03)

## 1. 今日速览
今日 Qwen Code 社区活跃度极高，**v0.19.5 正式版**发布，重点强化了 daemon 后台任务管理与 Web Shell 的交互体验。社区讨论焦点集中在**移动端 Web Shell 性能优化**、**MCP/工具调用的边界情况修复**以及**后台自动化（定时任务/Channel）** 的演进。同时，开发者对 Token 消耗控制和跨平台安装体验提出了较多反馈。

---

## 2. 版本发布
*   **[v0.19.5](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.5)**：强化了 daemon 管理的 channel worker 稳定性；优化 Web Shell 逻辑，将 session 创建延迟至用户首次输入 prompt，减少无效资源占用。
*   **[v0.19.5-nightly](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.5-nightly.20260703.b16baf1ff)**：修复了 Web Shell 在移动端切换 session 时的卡顿问题（通过 memoized timeline 和 replay-first dispatch 优化）。
*   **[cua-driver-rs v0.7.0](https://github.com/QwenLM/qwen-code/releases/tag/cua-driver-rs-v0.7.0)**：发布跨平台预编译二进制文件，新增相对坐标支持，macOS 版本已支持签名与公证。

---

## 3. 社区热点 Issues
1.  **[P1] Web Shell 移动端 Session 切换严重卡顿** ([#6181](https://github.com/QwenLM/qwen-code/issues/6181))：移动端切换 session 时界面冻结，排查发现是侧边栏轮询、抽屉动画与全量历史加载等多层成本叠加所致，社区高度关注此性能瓶颈。
2.  **[P1] 流式工具调用空 arguments 被静默丢弃** ([#6249](https://github.com/QwenLM/qwen-code/issues/6249))：当 OpenAI 兼容接口流式返回无参工具调用时，解析器会丢弃该调用并导致无限重试循环，严重影响 Agent 稳定性。
3.  **新增 `/schedule` 本地定时任务 Daemon** ([#6112](https://github.com/QwenLM/qwen-code/issues/6112))：社区强烈需求类似 Claude Code 的后台定时任务功能，允许在不打开交互式 session 的情况下持续运行 cron 任务。
4.  **System Prompt 固定开销过大 (~22k tokens)** ([#6097](https://github.com/QwenLM/qwen-code/issues/6097))：开发者反馈在自定义 narrow-domain agent 时，单句 "hello" 导致 prompt 膨胀至 22k tokens，信噪比极低，引发对 Token 成本控制的讨论。
5.  **YOLO 模式下无法调用 MCP** ([#6131](https://github.com/QwenLM/qwen-code/issues/6131))：在 YOLO（全自动）模式下，由于 MCP 启动需要手动确认，导致系统直接卡死，阻碍了全自动化工作流。
6.  **Model Thinking 显示 'Thought for 0s' 且停止流式输出** ([#6175](https://github.com/QwenLM/qwen-code/issues/6175))：使用 OpenAI 兼容模型输出 `reasoning_content` 时，思考时间显示错误且内容不再流式渲染，影响实时交互体验。
7.  **Qwen-Code 错误计算 Context Window** ([#6144](https://github.com/QwenLM/qwen-code/issues/6144))：本地部署 Qwen3-Coder 时，工具计算出的上下文窗口大小与实际配置不符。
8.  **qwen_code 无法识别自身进程导致误杀** ([#6246](https://github.com/QwenLM/qwen-code/issues/6246))：当要求工具停止后台 nodejs 进程时，它会把 qwen_code 自身的进程也一并 kill 掉。
9.  **npm 包被安全扫描器误报为恶意** ([#6163](https://github.com/QwenLM/qwen-code/issues/6163))：由于打包了 install hooks 和特定的 IOC 字面量，导致 v0.19.4 被部分企业安全扫描器拦截，影响分发。
10. **Plan Mode 内容在后续响应中泄漏** ([#6237](https://github.com/QwenLM/qwen-code/issues/6237))：退出 Plan Mode 后，之前提交的计划内容会错误地混入后续的助手正常回复中。

---

## 4. 重要 PR 进展
1.  **修复流式空参数工具调用丢弃问题** ([#6250](https://github.com/QwenLM/qwen-code/pull/6250))：修改流式解析器，使其在流结束时能正确发出空 arguments 的工具调用，避免静默丢弃。
2.  **扩展能力变化时主动通知模型** ([#6245](https://github.com/QwenLM/qwen-code/pull/6245))：当 MCP 工具、Skills 或 Agent 子类型在运行时发生变化时，自动向模型发送 delta 更新，确保模型感知最新能力。
3.  **LSP Server 支持热重载** ([#5953](https://github.com/QwenLM/qwen-code/pull/5953))：当 `.lsp.json` 配置在活跃 session 中更改时，自动检测并热重载 LSP 配置，无需重启。
4.  **Web Shell 添加自定义 @ Mention 面板** ([#6242](https://github.com/QwenLM/qwen-code/pull/6242))：替换原有的内联自动补全，引入支持多级分类（文件、扩展、MCP 资源）和

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

# ComfyUI 社区动态日报 (2026-07-03)

## 1. 今日速览
ComfyUI 正加速向多模态与 3D 领域扩展，核心 PR 密集引入了 SeedVR2、Pixal3d、TRELLIS2 以及字节跳动 Seed Audio 1.0 等重量级模型支持。与此同时，社区对近期版本更新引发的性能回退（如模型频繁重载、LTX-2.3 降速）及前端交互 Bug 表达了强烈关注，官方也在持续推进底层安全修复与工程化优化。

## 2. 社区热点 Issues
*以下为过去 2

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama 社区动态日报

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

# llama.cpp 社区动态日报 (2026-07-03)

## 1. 今日速览
llama.cpp 社区今日持续发力于前沿模型架构（如 DeepSeek V4、RWKV7）的底层算子优化与适配，推测解码（DFlash）和 MoE 模型的训练/推理支持成为核心焦点。同时，Vulkan 后端在多种硬件上的性能回退与兼容性问题引发了社区的广泛讨论，MCP 生态集成与 Agent 工具调用的稳定性也是开发者关注的重中之重。

## 2. 版本发布
**b9860**
- **新增 C API**：引入 `llama_model_ftype_name()` 函数。该接口允许开发者直接获取模型文件的量化类型名称（如 "Q8_0" 或 "Q4_K - Medium"），返回的指针在模型生命周期内有效，大幅提升了第三方应用集成和模型元数据展示的便利性。

## 3. 社区热点 Issues
1. **[#20977] Feature Request: TurboQuant support** (👍334 | 💬107)
   - **关注点**：社区对新一代量化格式 TurboQuant 的呼声极高。开发者期望在现有量化方案之外，获得精度与速度更优的新选择。
2. **[#24181] Step 3.7 Flash gets stuck in reasoning trying to make tool calls** (💬79)
   - **关注点**：推理模型在尝试调用工具时陷入死循环。这直接影响了基于 Agent 架构的应用开发，亟待修复。
3. **[#25158] ui: "Stream connection lost" with slow models** (💬27)
   - **关注点**：在运行较慢模型时，Server UI 的流式连接容易断开。影响了长上下文或低算力设备下的 Web 端体验。
4. **[#23577] MTP with Qwen3.6 27B outputs repeated //// after long session** (💬24)
   - **关注点**：Multi-Token Prediction (MTP) 在长会话中出现重复乱码输出，暴露了 MTP 机制在长上下文下的鲁棒性问题。
5. **[#25207] Unexpected massive performace drop with Vulkan Flash Attention** (💬9)
   - **关注点**：AMD Strix Halo 等硬件上 Vulkan Flash Attention 出现严重性能暴跌，跨平台 GPU 性能稳定性仍需打磨。
6. **[#24295] Responses API silently drops 'namespace' and 'web_search' tool types** (💬4)
   - **关注点**：API 静默丢弃非 function 类型的工具，导致 Codex CLI 等 MCP 工具无法使用，阻碍了生态集成。
7. **[#25117] DFlash performance regression on AMD APU + quantized MoE target** (💬5)
   - **关注点**：量化 MoE 模型在 AMD 核显上使用 DFlash 推测解码时性能反而下降，需针对特定硬件调优。
8. **[#24492] Gemma 4 31B MTP crashes on Vulkan backend** (💬9)
   - **关注点**：新模型 Gemma 4 的 MTP 功能与 Vulkan 后端存在兼容性冲突导致崩溃。
9. **[#24730] Feature Request: Support for GLM 5.2** (👍12)
   - **关注点**：国内大模型架构的持续跟进需求，社区期望第一时间在本地运行最新开源模型。
10. **[#23249] Feature Request: Add support for Laguna XS.2 model** (👍7)
    - **关注点**：小众/新架构模型的适配需求，体现了 llama.cpp 作为“模型运行底座”的广泛兼容性期望。

## 4. 重要 PR 进展
1. **[#22

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*