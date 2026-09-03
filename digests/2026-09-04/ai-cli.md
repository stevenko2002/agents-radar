# AI CLI 工具社区动态日报 2026-09-04

> 生成时间: 2026-09-03 22:15 UTC | 覆盖工具: 12 个

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



## 今日重點（2026-09-04）

### 重要更新

1. **Claude Code v2.1.259** — 新增组织级 MCP 服务器托管（`managedMcpServers`）与无头主机 `--permission-prompts none` 参数。[链接](https://github.com/anthropics/claude-code)

2. **OpenAI Codex rust-v0.153.1** — 补齐隐藏模型 GPT-6-Astra 的 API 配置；修复 Vim 撤销/重做、macOS 沙箱 TIOCSTI 注入防护、MCP OAuth 认证挑战透传。[链接](https://github.com/openai/codex)

3. **GitHub Copilot CLI v1.0.83-4** — 新增 MCP OAuth CIMD 支持，优化大型会话恢复速度。[链接](https://github.com/github/copilot-cli)

4. **Qwen Code v0.23.0** — 分支选择器新增 git 状态提示（如 `↓3 · origin/main`）。[链接](https://github.com/QwenLM/qwen-code)

5. **ComfyUI** — 新增 Flux.2 Klein 图像条件支持、MiniMax-H3 FastVideo VSA 加速；修复 Trellis 工作流显存占用及 DynamicVRAM 保存崩溃。[链接](https://github.com/Comfy-Org/ComfyUI)

6. **Gemini CLI** — 修复 `/chat delete` 路径遍历漏洞（CVE 级）、Windows NTFS 8.3 短文件名绕过、配置路径权限校验、Chrome DevTools MCP 硬编码密钥泄露。[链接](https://github.com/google-gemini/gemini-cli)

7. **Ollama** — `ollama launch` 新增 Talos 集成；MLX 结构化输出启用 Speculative Decoding（吞吐约 2x）；修复 Thinking Token 预算无限消耗问题。[链接](https://github.com/ollama/ollama)

8. **llama.cpp** — Metal 支持稀疏 Flash Attention；修复 Vulkan JSON Schema 空格问题、CUDA/HIP 多 GPU 独立流控、SYCL P2P 传输增强。[链接](https://github.com/ggerganov/llama.cpp)

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

User Safety: safe

---

# Claude Code 社区动态日报
**日期：2026-09-04**

---

### 1. 今日速览
今日 Claude Code 发布 v2.1.259 版本，重点引入组织级 MCP 服务器托管与无头主机免权限提示功能。社区反馈呈现出明显的分化态势：一方面，安全护栏（Safeguards）因过度拦截合法代码开发（密码学、基建等）引发大量抱怨；另一方面，模型（特别是 Fable 与 Opus 5）的行为失控与计费异常成为开发者集中吐槽的焦点。

### 2. 版本发布
**v2.1.259**
*   **组织级 MCP 托管**：新增 `managedMcpServers` 托管设置，允许组织为所有用户提供 HTTP/SSE 格式的 MCP 服务器（与 `.mcp.json` 结构一致），包含命令入口的条目将被跳过。
*   **无头主机免提示**：新增 `--permission-prompts none` 参数，使 Claude Code 在无人值守的头部宿主环境中运行时，不再触发任何权限提示。

### 3. 社区热点 Issues
1.  **[#79399](https://github.com/anthropics/claude-code/issues/79399)** [OPEN] Agent 批量创建 PR 缺乏安全护栏。报告指出 Agent 在外部仓库自动创建了 91 个 PR，导致仓库被锁定，严重暴露自动化失控风险。
2.  **[#90120](https://github.com/anthropics/claude-code/issues/90120)** [CLOSED] Opus 5 性能回退。用户反馈新模型表现极差，频繁“漂移”，强烈要求回退到 Opus 4.8，并威胁退订。
3.  **[#90186](https://github.com/anthropics/claude-code/issues/90186)** [CLOSED] 安全护栏误拦合法代码审查。代码评审操作被 Safeguard 机制误判为违规而阻断。
4.  **[#90171](https://github.com/anthropics/claude-code/issues/90171)** [CLOSED] 基础设施维护被过度拦截。合法的基建维护任务被 Fable 的 Safeguard 错误拦截并强制切换模型。
5.  **[#90055](https://github.com/anthropics/claude-code/issues/90055)** [CLOSED] 密码学代码被误判为恶意。用户构建区块链应用时，包含常规密码学的代码被反复误标为网络安全违规。
6.  **[#79478](https://github.com/anthropics/claude-code/issues/79478)** [OPEN] Fable 计费模型混乱。用户意图按任务切换 Fable 模型，但会话级切换导致所有回合均按高级别计费，且无预警。
7.  **[#76408](https://github.com/anthropics/claude-code/issues/76408)** [CLOSED] 自动记忆失效。MEMORY.md 及文件记忆虽正确保存，但未能可靠改变模型后续行为（如重复错误地推送 Git 更改）。
8.  **[#90158](https://github.com/anthropics/claude-code/issues/90158)** [CLOSED] 移动端长任务断连。移动端在长时间并行工具调用期间连接断开，近期更新后首次出现此问题。
9.  **[#79436](https://github.com/anthropics/claude-code/issues/79436)** [OPEN] VSCode 图片内联渲染。需求在聊天面板直接内联渲染图片，而非仅显示 `[Image]` 占位符（👍: 2）。
10. **[#79453](https://github.com/anthropics/claude-code/issues/79453)** [OPEN] 单次 Ctrl+D 退出。期望通过单次 Ctrl+D 退出终端，而非当前需按两次（👍: 3）。

### 4. 重要 PR 进展
1.  **[#91894](https://github.com/anthropics/claude-code/pull/91894)** [CLOSED] 更新 `/frontend-design` SKILL.md 文档。
2.  **[#79150](https://github.com/anthropics/claude-code/pull/79150)** [OPEN] 同步 code-review README。移除已废弃的 git blame 历史分析代理、0-100 置信度评分系统及 80 阈值配置说明，使文档与当前基于验证的命令对齐。
3.  **[#87079](https://github.com/anthropics/claude-code/pull/87079)** [OPEN] 修复安全引导 Glob 匹配。`**` glob 在 fnmatch 中可跨越 `/`，导致 `**/*.ts` 无法匹配顶层文件，使得 `security-patterns.json` 的安全规则静默失效。
4.  **[#89404](https://github.com/anthropics/claude-code/pull/89404)** [OPEN] 修复校验脚本中止问题。调整 `validate-agent.sh` 的 `set -e` 行为，使其在遇到警告时不再中止，避免将有效的 Agent 文件误报为错误。
5.  **[#66416](https://github.com/anthropics/claude-code/pull/66416)** [OPEN] 修复插件开发校验脚本因 `set -e` 导致的首次报错即中止问题（涵盖 `validate-agent.sh`、`hook-linter.sh` 等）。

### 5. 功能需求趋势
*   **IDE 集成深化**：VSCode 扩展亟需提升视觉与交互体验，包括图片内联渲染（#79436）、会话状态持久化与选择器优化（#76412, #76405）。
*   **计费与模型精细化**：社区强烈要求模型切换与计费粒度从“会话级”细化至“任务/Agent 级”，并提供明确的计费预警（#79478, #90120）。
*   **安全护栏的可配置性**：开发者要求安全机制具备更高的上下文理解能力，避免在密码学、基建等合法领域产生误报，并希望对自动化操作（如批量 PR）有更细粒度的确认开关。
*   **终端交互体验**：优化 TUI 交互细节，如支持单次 Ctrl+D 退出（#79453）、图片路径作为纯文本粘贴（#79486）。

### 6. 开发者关注点
*   **安全护栏的“过度防御”**：这是近期最集中的痛点。Safeguard 机制在识别合法开发任务（密码学、网络安全、基础设施维护、代码审查）时准确率不足，频繁打断工作流并强制切换模型，严重影响开发效率。
*   **模型行为失控（Fable/Opus 5）**：新模型在实际使用中表现出“计划偏离”（不按既定方案实施）、“过早完成任务报告”以及“性能回退”等问题，且 Fable 的计费逻辑缺乏透明度，导致用户信任度下降。
*   **状态管理 Bug**：VSCode 扩展在更新后会丢弃活跃会话、记忆系统在跨会话中无法有效改变模型行为，反映出客户端状态同步与持久化机制仍存在稳定性缺陷。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-09-04）

## 一、今日速览

稳定版 `rust-v0.153.1` 发布，重点补齐「隐藏模型」GPT-6-Astra 的 API 级配置能力（不影响默认模型与选择器），并续上 0.153 线的 Vim 撤销/重做与插件 CLI 改进。社区最集中的矛头仍是 **MCP OAuth 令牌不会自动刷新**（Issue #17265，👍 61）、**会话/截图导致的磁盘占用失控**（多个 Issue 累计反馈超 165GB），以及 **Windows/macOS 桌面端**的各类交互与稳定性缺陷。安全侧今日有一项 macOS 沙箱加固（TIOCSTI 终端输入注入防护）值得关注。

## 二、版本发布

### rust-v0.153.1（当前最新稳定版，0.153 维护线）
- 新增对 GPT-6-Astra 的 **API 配置支持**（PR #42605），不改变默认模型、也不在模型选择器中展示该隐藏模型。
- 完整变更：compare/rust-v0.153.0...rust-v0.153.1

### rust-v0.153.0
- Vim 模式支持 `u` 撤销与 `Ctrl+R` 重做，且能完整保留草稿（含粘贴内容与附件）(#41941, #42140)。
- 插件 CLI 支持插件列表、安装与移除操作（该项文本截断，细节待官方 changelog 补充）。
- 该行最新版本：0.153.1。Alpha 线另有 0.154.0-alpha.1 / alpha.2、0.153.0-alpha.5.1 等预发布。

## 三、社区热点 Issues（Top 10）

1. **[MCP OAuth 令牌完全不自动刷新](https://github.com/openai/codex/issues/17265)** — #17265 | 37 评论 | 👍 61
   Codex 将 MCP 的 `refresh_token` 持久化到 `~/.codex/.credentials.json`，但令牌过期后不自动续期，导致工具调用批量失败。51 个关于 auth/MCP 中最受共鸣的一条，说明路由式 MCP 认证体验是当前最大短板。

2. **[Esc-Esc 回溯无法定位持久化线程中的输入](https://github.com/openai/codex/issues/37421)** — #37421 | 9 评论 | 👍 44 | ✅ 已关闭
   0.147.0 中通过 `Esc-Esc` 回溯历史操作时找不到先前选中的提示内容。虽已关闭（今日刚更新），但 44 个 👍 表明长时间 CLI 重度用户对「会话可回溯性」高度敏感。

3. **[模型/推理强度切换偶发失效](https://github.com/openai/codex/issues/17318)** — #17318 | 19 评论 | 👍 30
   Pro 用户在桌面端部分场景下无法修改模型与 reasoning efforts，直接影响每日工作流，属于高频基础功能的可靠性问题。

4. **[子代理导致磁盘占用「疯狂」增长](https://github.com/openai/codex/issues/34061)** — #34061 | 24 评论
   Pro 用户反馈于 0.144.6 上出现，subagent 会话文件失控占用磁盘，且缺少清理与配额机制。

5. **[截图在每次压缩后被完整重存，~/.codex/sessions 高达 165GB](https://github.com/openai/codex/issues/35458)** — #35458 | 15 评论
   桌面版在 compaction 时反复持久化 base64 截图，并被 subagent fork 继承。与 #34061、#22411 共同构成「会话存储膨胀」议题。

6. **[Windows 桌面宠物变为可穿透、无法拖拽](https://github.com/openai/codex/issues/41513)** — #41513 | 21 评论
   内置 Codey 与自定义宠物均受影响，属 Windows desktop 交互控件焦点/命中测试问题；同日另有重复上报 #41535。

7. **[macOS：已删除的会话重新出现在 Recents](https://github.com/openai/codex/issues/40219)** — #40219 | 18 评论
   服务端删除的会话会被客户端重新拉回，且无法手动移除，影响会话管理与隐私预期。

8. **[Windows 远程 SSH 会话内文件编辑审批按钮不可点](https://github.com/openai/codex/issues/34652)** — #34652 | 14 评论
   桌面 App 的 remote 会话中 approval 按钮无响应，但同一操作在 CLI 下正常。指向桌面端与远端 executor 的权限链路割裂。

9. **[App 显示 MCP 已启用，实际会话只挂载子集工具](https://github.com/openai/codex/issues/21654)** — #21654 | 7 评论
   多 MCP server 场景下，工具注册不完整且无错误提示，诊断困难，与 #17265 并列为 MCP 可靠性双壁。

10. **[exec 输出上限缺失：单次 497KB 结果膨胀为约 138K tokens](https://github.com/openai/codex/issues/42367)** — #42367 | 2 评论（新）
    code-mode 下 `exec` 缺省模型截断策略，带外超大结果打爆上下文窗口；function-mode 则有上限保护，属沙箱执行一致性缺口。

---

其他值得留意的更新：#18527（远程 OAuth MCP 静默漏挂，#30460（OAuth callback URL 未按精确 redirect_uri 使用）、#28858（MCP tools/list 分页 nextCursor 失效）、#36596（自主任务被反复中止）、#42398（只读沙箱内因 installation_id 需写权限而启动失败）。

## 四、重要 PR 进展（Top 10）

1. **[Backport GPT-6-Astra 模型目录到 0.153](https://github.com/openai/codex/pull/42605)** — #42605（并入 0.153.1）
   为隐藏模型补齐 prompts/policies 及 `unified_exec` shell 类型，是今日热修复的核心。

2. **[将 GPT-6-Astra 加入内置模型目录](https://github.com/openai/codex/pull/42607)** — #42607
   加入 `gpt-6-astra` 隐藏条目（reasoning 级别、工具能力、上下文限制、审核策略），并重排既有模型优先级。

3. **[Add GPT-6-Astra to Amazon Bedrock catalogs](https://github.com/openai/codex/pull/42619)** — #42619
   Bedrock 目录新增 `openai.gpt-6-astra`，含 Global/US 跨区域变体，保留元数据并按 Bedrock 能力覆盖。

4. **[加固 macOS 沙箱，防终端输入注入（TIOCSTI）](https://github.com/openai/codex/pull/42590)** — #42590
   沙箱命令继承用户控制终端，子进程可用 `TIOCSTI` 往退出后的非沙箱 shell 队列注入输入。新增 `file-ioctl` 拒绝规则，属安全修复。

5. **[保留 MCP 工具调用中的认证挑战信息](https://github.com/openai/codex/pull/42552)** — #42552
   当静默 OAuth 刷新失败后，不再盲目重放被拒调用，而是保留服务端 auth challenge 以引导交互登录。直接回应 #17265 暴露的痛点。

6. **[支持 remote exec WebSocket 的可信头透传](https://github.com/openai/codex/pull/42606)** — #42606
   新增 `RemoteEnvironmentOptions` / `upsert_environment_with_options`，让宿主可在远端握手附加受信 HTTP 头，并在会话重连时保持、敏感信息脱敏。

7. **[修复旧终端中 Vim 的 Esc 输入残留](https://github.com/openai/codex/pull/42584)** — #42584
   旧式终端将 `Alt+字符` 与「Esc + 字符」编码为同一序列，导致 Vim 插入模式退出后误留错误模式。用于匹配 0.153 新增的 Vim 撤销支持。

8. **[聚合 TUI 启动警告为单条摘要](https://github.com/openai/codex/pull/42609)** — #42609
   将配置、skill、沙箱、MCP 启动诊断收敛为会话头下的统一摘要（含 MCP/登录计数），完整文本保留在 transcript 中。

9. **[本地插件安装后重载用户配置](https://github.com/openai/codex/pull/42593)** — #42593
   解决「已加载线程在插件安装后仍保留旧配置、插件自带 MCP 与待应用配置无法生效」的问题。

10. **[在 Agent 命令中心展示实时任务详情](https://github.com/openai/codex/pull/42455)** — #42455
    为选中任务增加有界详情预览：缓存中的审批/输入请求、实时 reasoning 标题与最新 agent 消息，优先展示最紧急子任务，提升多任务可观测性。

---

同批重要合并：#42598（MCP 工具发现失败上报到 server status，#42596（记录 Windows 沙箱私有桌面使用，#42588/#42579（Guardian 审查一致性：#42588 强制不兼容压缩检查点必须审查、#42579 持久化已验证的用户问答，#42453（从 app-server 发现权限 profile 并覆盖远程工作区，#42458（通过 app-server API 暴露 thread 创建者 etc.。

## 五、功能需求趋势

- **MCP 生态成熟度**：当前最大诉求集中在「OAuth 令牌生命周期管理」（刷新、精确 redirect_uri、认证挑战透传）、统一工具注册状态、服务发现（pagination nextCursor）等。开发者显然不满足于「能连」，而是要求可诊断、可恢复的企业级 MCP 体验。
- **会话数据体积治理**：本日多个 Issue 指向 `~/.codex/sessions` 与截图重存，社区已开始要求「压缩去重、父子线程共享存储、配额/清理策略」，可预期后续会推出 session 数据留存的官方治理方案。
- **「并行/层级任务」形态**：#32017 提出 parent/child 任务与小型化 handoff 工作流。结合 #42455 的「多任务实时面板」，可看出 Codex 正从单线程 agent 走向多 agent 协作调度。
- **新模型隐藏接入（GPT-6-Astra）**：以「不暴露于选择器、仅 API」的形式进入目录，加上 Bedrock 渠道覆盖——平台侧更倾向于默认模型稳定 + 新模型灰度导入的策略。
- **安全与合规前置**：TIOCSTI 注入加固、Guardian 审核与压缩检查点解耦，均暗示沙箱/审核体系正向纵深加固。

## 六、开发者关注点（痛点 / 高频需求）

1. **磁盘失控是第一痛点**：多起报告累计占用量达 165GB 级，覆盖 CLI 与桌面 App；字符集中在“base64 截图 / subagent 派生 / 全部 session 反序列化”。
2. **MCP 认证链路反复出问题**：令开发者最沮丧的是「错误不报、静默失败」——工具缺失、服务未挂载、无刷新提示，调试成本高。
3. **桌面端（尤其 Windows）功能可用性落后于 CLI**：远程审批按钮失效、宠物窗口穿透、Store 更新因 MSIX 占用失败、长会话崩溃——同一操作 CLI 正常而 GUI 异常，说明桌面壳层与核心的编排需对齐。
4. **回滚诉求**：#25917 仍有人呼吁恢复 5.3 模型（称 5.4/5.5 更贵且更差）；即便不采纳，「模型质量评估与用户选择权」的讨论会持续存在。
5. **沙箱与宿主环境的边界一致性**：#42398（只读沙箱崩溃）与 #42367（exec 无输出上限）表明，exec/sandbox 在不同宿主约束下要保持相同语义，仍有打磨空间。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 | 2026-09-04

> 数据来源：`google-gemini/gemini-cli` | 统计窗口：过去 24 小时（截至 2026-09-03 更新）

---

## 1. 今日速览

*   **安全与稳健性成主旋律**：本周无新版本发布，社区核心精力集中在**安全加固**（路径遍历、沙箱逃逸、凭证泄露）与**核心稳定性修复**（Shell 挂起、检查点恢复、SSE 解析）。
*   **Agent 架构深度治理**：多个 P1 级 Issue 持续跟进，聚焦于 **Subagent 异常恢复误报成功**、**Generalist Agent 无限挂起** 及 **Browser Agent Wayland 兼容/配置失效** 等核心体验阻塞问题。
*   **Auto Memory 系统重构**：针对自动记忆的安全性（脱敏时机）、可靠性（低信号会话重试风暴）、数据完整性（无效补丁隔离）展开系统性修复。

---

## 2. 版本发布

> 过去 24 小时无新 Release。最新预览版 `v0.59.0-preview.0` 与稳定版 `v0.58.0` 的 Changelog PR（`#29159`, `#29161`）已关闭合并，正式发布流程已完成。

---

## 3. 社区热点 Issues（精选 Top 10）

| # | Issue | 核心问题 | 优先级/标签 | 热度 (💬/👍) | 关注理由 |
|---|---|---|---|---|---|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent 达 MAX_TURNS 却上报 GOAL Success** | `P1`, `bug`, `need-retesting` | 13 / 2 | **严重可靠性缺陷**：中断被伪装为成功，导致上层编排逻辑失效，需回归验证修复。 |
| 2 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist Agent 频繁无限挂起** | `P1`, `bug`, `need-retesting` | 8 / 8 | **高频阻塞**：简单操作（如建目录）触发挂起，仅禁用 Subagent 可规避，严重影响可用性。 |
| 3 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell 命令执行完却卡在 "Waiting input"** | `P1`, `core`, `bug` | 4 / 3 | **核心交互断点**：命令已结束但 CLI 仍判定为等待输入，怀疑 PTY/流同步逻辑竞态。 |
| 4 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | **利用模型 Bash 亲和性：零依赖 OS 沙箱与执行后意图路由** | `P2`, `enhancement`, `effort/large` | 9 / 1 | **架构级探索**：旨在释放 Gemini 3 原生 Shell 能力，涉及安全模型重构，长期高价值。 |
| 5 | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | **Auto Memory：增加确定性脱敏 & 减少日志** | `P2`, `security`, `bug` | 5 / 0 | **安全合规硬指标**：脱敏发生在模型上下文注入*之后*，存在泄露窗口；服务端日志风险。 |
| 6 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **评估 AST 感知文件读/搜索/映射的价值** | `P2`, `feature`, `epic` | 7 / 1 | **Token 效率杠杆**：通过精准读取方法边界减少 Turn 与噪声，关联 `#22746` 工具选型。 |
| 7 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Gemini 不主动使用 Skills/Sub-agents** | `P2`, `bug` | 6 / 0 | **能力利用率低**：需显式指令才调用，隐式规划缺失，影响复杂任务自动化上限。 |
| 8 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser Subagent 在 Wayland 下失败** | `P1`, `agent/browser`, `bug` | 4 / 1 | **平台兼容性缺口**：Linux 主流显示协议不支持，阻断 Web 自动化场景。 |
| 9 | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | **Auto Memory 对低信号会话无限重试** | `P2`, `bug` | 3 / 0 | **资源泄漏/噪音**：未处理会话反复入队，浪费后台提取配额。 |
| 10 | [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | **工具数 > 128 (实测 400) 触发 400 报错** | `P2`, `bug` | 3 / 0 | **扩展性瓶颈**：工具注册无上限保护，需动态裁剪或分页机制。 |

---

## 4. 重要 PR 进展（精选 Top 10）

| # | PR | 标题/核心变更 | 状态 | 关键点 |
|---|---|---|---|---|
| 1 | [#29192](https://github.com/google-gemini/gemini-cli/pull/29192) | **fix(checkpoint): 修复 `/chat delete` 路径遍历 (CVE 级)** | `OPEN`, `P1`, `security` | `../` 标签可逃逸检查点目录，已修复 Legacy 回退路径拼接漏洞。 |
| 2 | [#29116](https://github.com/google-gemini/gemini-cli/pull/29116) | **fix(core): 缓解 NTFS 8.3 短文件名 (SFN) 路径绕过** | `OPEN` | Windows 下 `git~1` 等短路径可绕过 `AllowedPathChecker`，已加固规范化与校验。 |
| 3 | [#29115](https://github.com/google-gemini/gemini-cli/pull/29115) | **fix(config): 强制系统级配置路径的权限/所有权校验** | `OPEN` | Windows (ACL/PowerShell) 与 POSIX 均实施，防止恶意配置劫持。 |
| 4 | [#29158](https://github.com/google-gemini/gemini-cli/pull/29158) | **fix(core): 清理 `chrome-devtools-mcp` 硬编码 CrUX API Key** | `OPEN` | 编译产物与第三方资源中移除硬编码密钥，防供应链泄露。 |
| 5 | [#29195](https://github.com/google-gemini/gemini-cli/pull/29195) | **fix(checkpoint): 非数组 history 降级而非崩溃** | `OPEN` | `/resume` 健壮性：JSON 合法但结构异常时回退空检查点，避免 `TypeError`。 |
| 6 | [#29170](https://github.com/google-gemini/gemini-cli/pull/29170) | **fix(core): 增强工作区边界检查与 Symlink 解析** | `OPEN` | 命令安全、文件发现、目录列表全链路加固 `isPathEscapingWorkspace`。 |
| 7 | [#29184](https://github.com/google-gemini/gemini-cli/pull/29184) | **fix(core): Windows 沙箱校验 `git diff --output` 等写参数** | `OPEN` | 修复只读命令白名单被 `--output` 等写入参数利用的静默越权。 |
| 8 | [#29186](https://github.com/google-gemini/gemini-cli/pull/29186) | **fix(core): 修正 Shell 沙箱拒绝启发式中的 `exitCode` 空值判断** | `OPEN`, `P1` | 修复 TS 类型 `number | null` 与 `!== undefined` 判断不匹配导致的逻辑漏洞。 |
| 9 | [#29187](https://github.com/google-gemini/gemini-cli/pull/29187) | **fix(core): LLM Prompt 模板占位符替换使用 `safeLiteralReplace`** | `OPEN`, `P2` | 防止用户输入中的 `$&` 等 JS 替换特殊序列导致模板注入/破坏。 |
| 10 | [#29148](https://github.com/google-gemini/gemini-cli/pull/29148) | **fix(cli): 后台 Git 操作劫持 stdin 导致挂起** | `OPEN`, `P2` | 修复 `#23480`：扩展后台更新/克隆时禁用 TTY，避免凭证提示阻塞主进程。 |

---

## 5. 功能需求趋势洞察

1.  **Agent 编排与可靠性（核心痛点）**：
    *   Subagent 状态机不健全（`#22323`, `#21763`）、Generalist 挂起（`#21409`）、技能/子代理调度不智能（`#21968`）。
    *   需求：**可观测性**（轨迹分享 `#22598`、Bug Report 含子上下文 `#21763`）、**配置生效**（Browser Agent 忽略 settings `#22267`）、**弹性恢复**（浏览器锁恢复 `#22232`）。

2.  **安全与沙箱深度加固（持续投入）**：
    *   路径规范化（NTFS SFN `#29116`、Symlink/边界 `#29170`）、配置完整性（`#29115`）、凭证清理（`#29158`）、沙箱逃逸修复（`#29192`, `#29184`）。
    *   趋势：**默认安全、纵深防御、供应链净化**。

3.  **Token 效率与上下文工程（高杠杆优化）**：
    *   AST 感知工具链评估（`#22745`, `#22746`）、Tactful Extraction 精准读取（`#19561`）、工具数量裁剪（`#24246`）。
    *   目标：降低单 Turn 基线（~36k tokens）、减少误读噪声。

4.  **Auto Memory 产品化（从可用到好用）**：
    *   安全脱敏时机前置（`#26525`）、低信号会话熔断（`#26522`）、无效补丁隔离（`#26523`）、整体质量追踪（`#26516`）。

5.  **终端交互体验打磨**：
    *   Resize 无闪烁高性能（`#21924`）、交互式提示阻塞处理（`#22465`）、`\n` 转义一致性（`#22466`）、输出 Hook 崩溃（`#22186`）。

---

## 6. 开发者关注点与痛点总结

| 维度 | 高频反馈 / 痛点 | 代表 Issue/PR |
|---|---|---|
| **稳定性** | Shell 工具“假性挂起”、Subagent 静默失败上报成功、Checkpoint 恢复脆弱、SSE 流尾包丢失 | `#25166`, `#22323`, `#29195`, `#29106` |
| **安全性** | 路径遍历（NTFS/检查点/扩展）、硬编码密钥、沙箱策略绕过、脱敏滞后 | `#29192`, `#29116`, `#29158`, `#26525` |
| **Agent 智能度** | 不主动用 Skill/Subagent、Browser Agent 配置不生效/Wayland 失败、工具爆炸报错 | `#21968`, `#21983`, `#24246` |
| **可观测/调试** | 子代理轨迹不可见、Bug Report 缺子上下文、Auto Memory 静默跳过错误 | `#22598`, `#21763`, `#26523` |
| **终端 UX** | Resize 闪烁/卡顿、Vite 等交互式 CLI 卡死、输出钩子崩溃 | `#21924`, `#22465`, `#22186` |
| **扩展生态** | 后台 Git 劫持 stdin、扩展加载器路径边界校验缺失 | `#29148`, `#29169` |

---

> **分析师备注**：当前版本周期处于 **“架构收敛与安全兑现”** 阶段。大量 P1/P2 修复集中在核心执行链路（Shell/Checkpoint/Sandbox）与 Agent 编排正确性上，新特性多为 Epic 级调研（AST、Bash Affinity）。建议关注 `#22323` 与 `#21409` 的回归验收进度，这两个是阻断复杂任务自动化的关键闸口。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



# GitHub Copilot CLI 社区动态日报
**日期：2026-09-04**

---

## 1. 今日速览

GitHub Copilot CLI 发布 v1.0.83-4，新增 MCP OAuth 认证支持并优化大会话恢复体验。社区持续关注 BYOK 本地模型切换、MCP 协议兼容性及 Windows 平台稳定性问题，共收到 33 条新 Issue。

---

## 2. 版本发布

### v1.0.83-4

**新增功能**
- 为 MCP OAuth 登录添加 Client ID Metadata Document (CIMD) 支持

**改进**
- CLI 默认启动时不再显示中断会话恢复提示
- 恢复大型会话时输入提示响应更快

**修复**
- Sandboxed 文件工具现在与 developer-tools 读取相同内容

🔗 [Releases](https://github.com/github/copilot-cli/releases)

---

## 3. 社区热点 Issues

| Issue | 标题 | 热度 | 重要性 |
|-------|------|------|--------|
| [#3709](https://github.com/github/copilot-cli/issues/3709) | 允许 `/model` 在同一会话中切换多个模型（含 BYOK/本地提供商） | 👍29 · 7评论 | 🔥 高 — BYOK 用户核心需求，当前只能绑定单一模型 |
| [#4218](https://github.com/github/copilot-cli/issues/4218) | 允许用户配置 Auto 模式使用的模型池 | 👍13 · 1评论 | 🔥 高 — 成本可控性需求，Auto 模式目前无模型筛选能力 |
| [#3442](https://github.com/github/copilot-cli/issues/3442) | v1.0.51 远程会话未启用（已关闭） | 👍10 · 6评论 | 企业用户常见问题，需管理员配置 |
| [#232](https://github.com/github/copilot-cli/issues/232) | 添加 System Prompt 参数 | 👍10 · 4评论 | 长期需求，目前仅支持仓库级指令文件 |
| [#4525](https://github.com/github/copilot-cli/issues/4525) | 1.0.81-1 在成功 discover 后发送旧版 initialize，导致 -32022 错误 | 👍3 · 6评论 | 🔥 高 — MCP 协议兼容性问题，影响 Python MCP SDK 2.0.0 |
| [#2861](https://github.com/github/copilot-cli/issues/2861) | Compaction 失败：收到模型空响应（3次重试） | 👍4 · 5评论 | Opus 4.6 模型手动压缩频繁失败 |
| [#4695](https://github.com/github/copilot-cli/issues/4695) | MCP OAuth HTTP 服务器 Token 跨会话复用不可靠 | 👍0 · 5评论 | 🔥 高 — 刚发布 CIMD 支持即发现 Token 缓存键不一致问题 |
| [#4680](https://github.com/github/copilot-cli/issues/4680) | CLI 向自定义 OpenAI 兼容端点发送错误模型 ID | 👍0 · 3评论 | 使用非 OpenAI 模型名时 CLI 硬编码 `gpt-5.4-nano` |
| [#4683](https://github.com/github/copilot-cli/issues/4683) | PowerShell ConstrainedLanguage 模式下每条命令产生虚假错误 | 👍0 · 2评论 | 企业 Windows 环境高频痛点，`$host.SetShouldExit()` 被策略禁止 |
| [#4699](https://github.com/github/copilot-cli/issues/4699) | 长会话恢复时 OOM 崩溃，dump 文件写入用户 cwd | 👍2 · 0评论 | 严重稳定性问题，V8 堆内存 4GiB 上限导致频繁崩溃 |

---

## 4. 重要 PR 进展

> 过去 24 小时内无新 PR 更新。

---

## 5. 功能需求趋势

从 Issue 分析，社区关注焦点分布如下：

| 方向 | 代表 Issue | 热度 |
|------|-----------|------|
| **模型灵活性与 BYOK** | #3709, #4218, #4680, #4703 | 🔥🔥🔥 |
| **MCP 协议完善** | #4525, #4695, #4655 | 🔥🔥🔥 |
| **会话管理** | #4714, #4705, #4696, #4704 | 🔥🔥 |
| **权限与安全** | #4683, #4701, #1099 | 🔥🔥 |
| **平台兼容性 (Windows)** | #4683, #4702, #4701 | 🔥🔥 |
| **插件与 Agent 系统** | #4655, #4708, #4700 | 🔥 |
| **性能与稳定性** | #2861, #4699, #4710 | 🔥 |
| **配置与自定义** | #232, #4712, #4669 | 🔥 |

---

## 6. 开发者关注点

**高频痛点：**

1. **BYOK/本地模型集成不完善** — 多个 Issue 反映 BYOK 模式下模型切换受限、自定义端点模型 ID 硬编码等问题，社区期待更灵活的-provider 配置能力（#3709, #4680, #4703）。

2. **MCP 协议版本兼容** — v1.0.81-1 引入的现代 `server/discover` 与旧版 `initialize` 混用导致错误，同时 HTTP OAuth Token 缓存键不一致，影响 MCP 工具链稳定性（#4525, #4695）。

3. **Windows 企业环境适配** — ConstrainedLanguage 模式、路径分隔符 dedup、权限预览截断等问题集中爆发，企业用户反馈强烈（#4683, #4702, #4701）。

4. **大会话内存管理** — 长时间 resumed 会话频繁触发 V8 OOM，且诊断 dump 写入 cwd 造成污染，需优化内存上限和文件输出策略（#4699）。

5. **会话恢复体验** — 恢复大会话速度慢且无加载反馈、 queued prompt 卡住、allow-all 权限超时重置等交互问题影响日常使用流畅度（#4714, #4705, #4696）。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期：2026-09-04** | 数据来源：GitHub MoonshotAI/kimi-cli

---

## 📌 今日速览

过去 24 小时内社区整体活跃度偏低：过去 24 小时内没有新的 Release 发布，Issues 仅有 6 条更新且多数为历史增强请求的归档关闭，唯一仍处于 OPEN 状态的是关于 1.17+ 版本 ACP 鉴权阻断自定义 Provider 的 #2633。值得关注的工程信号是 PR #2332 已合并关闭，Kimi Provider 改为按上下文窗口动态计算 `max_completion_tokens`，移除了硬编码的 32000 上限。

---

## 🚀 版本发布

过去 24 小时内无新 Release。建议关注当前正式版本 **1.17.0**（因 #2633 报告其引入了 ACP 鉴权门控，可能影响自定义 Provider 用户的升级决策）。

---

## 🔥 社区热点 Issues

> 说明：过去 24 小时仅有 6 条 Issue 发生状态变化，全部列示如下。

### 1. [#2633 ACP auth gate (1.17+) blocks custom providers that don't need a Kimi account](https://github.com/MoonshotAI/kimi-cli/issues/2633) · OPEN
- **作者**：billc8128
- **重要性**：⭐⭐⭐⭐⭐ 今日唯一开放 Issue，影响所有使用非 Kimi 账号 OAuth 的第三方 Provider 用户
- **要点**：自 1.17.0 起，ACP Server 在 `session/new`、`session/load`、`session/resume`、`session/prompt` 四个入口处统一调用 `_check_auth`，强制要求持久化的 Kimi 账户 OAuth Token，对 OpenAI、Anthropic 等自定义 Provider 用户构成阻断
- **社区反应**：刚开放，尚未积累评论，但属于影响范围较大的兼容性回退

### 2. [#1293 在远程 SSH 服务器上使用 Kimi CLI 时，无法交流](https://github.com/MoonshotAI/kimi-cli/issues/1293) · CLOSED
- **作者**：cshennju
- **重要性**：⭐⭐⭐⭐ 远程开发场景的关键体验问题
- **要点**：在无 GUI、不可修改系统 DNS 的 SSH 服务器环境下运行 Kimi CLI 出现通信失败。该 Issue 已被关闭，预期已通过代码侧修复或变通方案处理
- **社区反应**：1 个 👍，1 条评论

### 3. [#1307 --agent-file for 'kimi web' as in the 'kimi'](https://github.com/MoonshotAI/kimi-cli/issues/1307) · CLOSED
- **作者**：Krivodel
- **重要性**：⭐⭐⭐⭐ 用户呼声高，且作者已自带 PR 实现
- **要点**：`--agent-file` 在 `kimi` 子命令可用但 `kimi web` 始终加载默认 Agent，作者已附 PR 实现并请求合入
- **社区反应**：3 个 👍，是今日热度最高的 Enhancement Issue

### 4. [#1310 Inline Mermaid diagrams in webui](https://github.com/MoonshotAI/kimi-cli/issues/1310) · CLOSED
- **作者**：chriswingler
- **重要性**：⭐⭐⭐ Web UI 渲染能力升级
- **要点**：社区请求在 WebUI 中内联渲染 Mermaid 图表，且明确指出"解析逻辑已存在，仅需前端展示层接入"
- **社区反应**：1 个 👍

### 5. [#1311 希望增加一个 undo 功能](https://github.com/MoonshotAI/kimi-cli/issues/1311) · CLOSED
- **作者**：lasting-yang
- **重要性**：⭐⭐⭐ 安全相关体验功能
- **要点**：参考 opencode 的 undo 能力，希望 Kimi CLI 也能提供撤销操作，避免 Agent 自动执行误操作后难以回滚
- **社区反应**：1 个 👍

### 6. [#1309 Optional Openclaw-like features](https://github.com/MoonshotAI/kimi-cli/issues/1309) · CLOSED
- **作者**：chriswingler
- **重要性**：⭐⭐⭐ 长期能力扩展方向
- **要点**：希望 CLI/WebUI 引入心跳系统、cron 任务、记忆能力，建议与 [HKUDS/nanobot](https://github.com/HKUDS/nanobot) 轻量集成，对标 Kimi.com 的 Kimi Claw
- **社区反应**：暂无点赞，但属于战略性功能提案

---

## 🛠 重要 PR 进展

> 说明：过去 24 小时内仅 1 条 PR 发生状态变更。

### [#2332 fix(kimi): clamp completion budget dynamically](https://github.com/MoonshotAI/kimi-cli/pull/2332) · CLOSED ✅
- **作者**：wbxl2000
- **重要性**：⭐⭐⭐⭐⭐ 直接影响 Kimi Provider 的输出长度与成本控制
- **变更要点**：
  - 移除 Provider 层硬编码的 `max_tokens = 32000`
  - 改为按当前 context window 动态计算 `max_completion_tokens`
  - 优先采纳 Kimi 的 `max_completion_tokens` 请求字段
- **影响**：避免在短上下文场景下浪费输出配额，同时在长上下文场景下确保不被过早截断

---

## 📈 功能需求趋势

从过去 24 小时被关闭归档的 Enhancement 类 Issues 中，可以提炼出社区对 Kimi CLI 的四大方向期待：

| 方向 | 代表 Issue | 占比特征 |
|------|-----------|---------|
| **WebUI 体验增强** | #1310（Mermaid 渲染）、#1307（`--agent-file` 一致性） | 高频诉求，主要围绕 WebUI 与 CLI 行为对齐 |
| **Agent 安全/可控性** | #1311（Undo 功能） | 反映用户对 Agent 自动执行的可回滚诉求 |
| **自主任务能力** | #1309（Openclaw-like：心跳、cron、记忆） | 对标竞品 nanobot / Kimi Claw |
| **远程/异构环境适配** | #1293（SSH 无 DNS 场景） | 推动 CLI 在受限网络环境下的鲁棒性 |

整体而言，社区对"WebUI 与 CLI 功能对齐"以及"Agent 行为可控性"的呼声最为集中。

---

## 💡 开发者关注点

1. **1.17 版本兼容性回退（高优先级）**
   #2633 暴露的新版 ACP 鉴权门控可能将部分依赖自定义 Provider 的开发者拒之门外，建议关注官方是否会引入 Provider 级别的鉴权旁路开关。

2. **输出配额管理（已落地）**
   PR #2332 解决了 Kimi Provider 硬编码 32000 token 上限带来的资源浪费问题，建议在自定义 Provider 实现中跟进一致的动态计算逻辑。

3. **WebUI/CLI 一致性**
   `kimi web` 缺失 `--agent-file`、Mermaid 渲染等问题反复出现，说明 WebUI 在功能对齐 CLI 时存在系统性缺口。

4. **Agent 执行安全**
   Undo、心跳、记忆等诉求背后，反映出开发者在生产环境中对 Agent "可中断、可回滚、可观测"的强烈需求。

5. **远程开发场景**
   SSH、无 DNS、容器化等受限网络场景下的可用性，是企业级落地的关键阻力点，#1293 的关闭值得后续验证修复覆盖度。

---

*日报生成时间：2026-09-04 · 数据窗口：过去 24 小时*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode 社区动态日报**  
**日期：2026-09-04**

---

### 1. 今日速览

过去 24 小时社区讨论密集，**性能回归**与**模型目录同步**成为焦点：v1.18.27 版本的高 CPU 占用与 SIGILL 崩溃问题引发大量反馈，同时 Muse Spark 1.3 等模型在 Zen 与 CLI 间的可用性差异导致用户困惑。PR 侧则以体验修复和架构研究为主，无新版本发布。

---

### 2. 版本发布

今日无新版本 Release。

---

### 3. 社区热点 Issues

| # | 标题 | 状态 | 核心看点与社区反应 |
|---|------|------|-------------------|
| **#30086** | High CPU usage in newer versions of OpenCode | 🔴 OPEN | **性能危机**。自近期更新后，用户从可同时运行 10 个会话降至 3 个即出现严重卡顿与鼠标延迟，49 条评论显示影响面极广，26 👍 呼吁紧急修复。<br>🔗 [anomalyco/opencode#30086](https://github.com/anomalyco/opencode/issues/30086) |
| **#47047** | SSE error with #44944 — broken | 🔴 OPEN | **v1.18.27/26 严重 Bug**。Big Pickle 模型进入生成循环并在 AI 停顿处崩出 SSE 错误，导致代码编辑混乱，9 条评论确认复现。<br>🔗 [anomalyco/opencode#47047](https://github.com/anomalyco/opencode/issues/47047) |
| **#36280** | Worker subprocess crashes with SIGILL on Intel i5-7200U | 🔴 OPEN | **系统级崩溃**。OpenCode CLI 在旧款 Intel CPU 上触发非法指令，随后引发 systemd-coredump/drkonqi 级联崩溃并耗尽内存（约 28 GB），存在稳定性风险。<br>🔗 [anomalyco/opencode#36280](https://github.com/anomalyco/opencode/issues/36280) |
| **#38255** | Discrepancy between different opencode go usage dashboard | 🔴 OPEN | **计费信任问题**。用户被提示“周用量超限”，但细粒度面板仅显示约 10% 用量，11 条评论质疑数据一致性。<br>🔗 [anomalyco/opencode#38255](https://github.com/anomalyco/opencode/issues/38255) |
| **#45278** | Payment Declined After 3 Months Despite No Issue With Card or Bank | 🔴 OPEN | **付费阻塞**。长期有效的信用卡突然无法续费，银行确认无异常，9 条评论反映类似突发支付拦截。<br>🔗 [anomalyco/opencode#45278](https://github.com/anomalyco/opencode/issues/45278) |
| **#25961** | Support for MCP Support Client ID Metadata Document (CIMD) | 🔴 OPEN | **企业级功能请求**。希望支持 Keycloak 等授权服务器的 CIMD 协议，11 👍 表明 MCP 生态的企业适配需求强烈。<br>🔗 [anomalyco/opencode#25961](https://github.com/anomalyco/opencode/issues/25961) |
| **#15457** | System prompt mode switcher (Default/Light) | 🔴 OPEN | **开发者体验**。当前系统提示词对轻量模型过重，用户请求 Default/Light 两档切换以兼容小模型，7 👍。<br>🔗 [anomalyco/opencode#15457](https://github.com/anomalyco/opencode/issues/15457) |
| **#40524** | [2.0] V2: Reconcile provider catalogs with /models endpoints | 🔴 OPEN | **V2 架构核心**。要求 Provider 模型目录与 `/models` 动态端点对齐，避免静态目录缺失新模型或包含已下线模型。<br>🔗 [anomalyco/opencode#40524](https://github.com/anomalyco/opencode/issues/40524) |
| **#47034** | gemini-3.8-flash: 400 'Requests ending with a model turn are not supported' | 🔴 OPEN | **主流模型兼容性**。调用 Google Gemini 3.8 Flash 时因对话末轮为模型 turn 而触发 400 错误，影响实际使用。<br>🔗 [anomalyco/opencode#47034](https://github.com/anomalyco/opencode/issues/47034) |
| **#46868** | configuring clang-format, air or uv by name silently disables the formatter | 🔴 OPEN | **静默失效陷阱**。配置特定格式化器名称时会被静默关闭，无报错提示，4 条评论指出这是隐蔽的开发体验 Bug。<br>🔗 [anomalyco/opencode#46868](https://github.com/anomalyco/opencode/issues/46868) |

---

### 4. 重要 PR 进展

| # | 标题 | 状态 | 功能/修复内容 |
|---|------|------|--------------|
| **#47154** | docs(hooks): research on hook system gaps vs Claude Code | 🟡 OPEN | **架构研究**：系统对比 OpenCode 与 Claude Code 的 Hook 机制差距，输出 EARS 需求与 RFC，为插件系统演进提供路线图。<br>🔗 [anomalyco/opencode#47154](https://github.com/anomalyco/opencode/pull/47154) |
| **#45782** | feat(app): add about settings page | 🟡 OPEN | **体验增强**：为全屏设置新增“关于”页，动态展示版本号、GitHub 贡献者数及致谢名单。<br>🔗 [anomalyco/opencode#45782](https://github.com/anomalyco/opencode/pull/45782) |
| **#47101** | fix(opencode): persist legacy plan reminders | 🟡 OPEN | **Bug 修复**：旧版 Plan/Build 提醒此前仅附加于内存中的最新消息，导致下轮对话丢失；现改为持久化。<br>🔗 [anomalyco/opencode#47101](https://github.com/anomalyco/opencode/pull/47101) |
| **#40188** | feat(plugin): add request-scoped chat.model hook | 🟢 CLOSED | **插件扩展**：新增请求级 `chat.model` 钩子，允许插件在 Provider/模型/认证解析前替换单请求模型。<br>🔗 [anomalyco/opencode#40188](https://github.com/anomalyco/opencode/pull/40188) |
| **#40218** | feat(teach): Add Teach mode for pedagogical workflows | 🟢 CLOSED | **新工作流**：引入 Teach 模式，面向教学场景优化交互流程。<br>🔗 [anomalyco/opencode#40218](https://github.com/anomalyco/opencode/pull/40218) |
| **#40309** | feat(tui): add/remove MCP servers from /mcps dialog | 🟢 CLOSED | **TUI 增强**：`/mcps` 对话框从只读升级为支持动态增删 MCP 服务器，提升终端交互效率。<br>🔗 [anomalyco/opencode#40309](https://github.com/anomalyco/opencode/pull/40309) |
| **#40310** | feat(opencode): add llmgateway-providers provider | 🟢 CLOSED | **生态扩展**：新增 LLM Gateway 作为 Provider，拓宽模型接入渠道。<br>🔗 [anomalyco/opencode#40310](https://github.com/anomalyco/opencode/pull/40310) |
| **#40268** | fix(session): retry top-level stream request timeouts | 🟢 CLOSED | **稳定性**：针对部分 OpenAI Responses 兼容 Provider 返回 SSE error 事件导致的流中断，增加顶层流请求超时重试。<br>🔗 [anomalyco/opencode#40268](https://github.com/anomalyco/opencode/pull/40268) |
| **#40198** | fix(opencode): match canonically equivalent Unicode in patches | 🟢 CLOSED | **正确性修复**：补丁验证增加 Unicode 规范等价匹配，解决因字符规范化差异导致的 patch 失败。<br>🔗 [anomalyco/opencode#40198](https://github.com/anomalyco/opencode/pull/40198) |
| **#40282** | fix(console): restore referral reward status | 🟢 CLOSED | **性能与业务修复**：恢复推荐奖励展示，改用 `workspace_id` 前缀查询替代此前导致数据库饱和的跨表无索引 JOIN。<br>🔗 [anomalyco/opencode#40282](https://github.com/anomalyco/opencode/pull/40282) |

---

### 5. 功能需求趋势

从今日活跃 Issue 中可提炼出社区最关注的四大方向：

1. **MCP 生态与工具治理**  
   动态 MCP 服务器管理（TUI `/mcps`）、CIMD 企业授权协议支持、以及通过 `tool.definition` 控制工具 schema 成本，表明 MCP 正从“能用”走向“企业级可管”。

2. **性能与资源占用**  
   高 CPU 占用、SIGILL 崩溃、内存耗尽、流超时与 DOM 增长问题集中爆发，说明随着用户会话规模扩大，运行时资源效率已成为核心瓶颈。

3. **模型目录与 Provider 同步**  
   V2 架构要求动态对齐 Provider `/models` 端点；同时 Zen 与 CLI 间模型列表不一致（如 Muse Spark 1.3）、新模型上线延迟，反映出“目录即服务”的可靠性需求。

4. **开发者体验与交互精细化**  
   系统提示词轻量化（Light mode）、TUI 队列消息可取消/编辑、技能从 Git 加载、格式化器静默失效等反馈，显示开发者对“可预测、可配置”的工具链要求越来越高。

---

### 6. 开发者关注点

- **性能回归焦虑**：v1.18.26/27 连续版本出现高 CPU 与非法指令崩溃，开发者对升级持谨慎态度，急需热修复或回滚指导。
- **模型可用性断层**：Zen 宣传可用的新模型在 CLI 中不可见，且调用时报 `UnknownError`，导致“文档与实现不一致”的信任损耗。
- **计费透明度不足**：用量面板与限额提示存在显著差异，叠加支付渠道突发拦截，影响付费开发者正常生产。
- **网络与代理环境适配**：编译后的 Bun 二进制文件忽略 `NODE_OPTIONS`（DNS 顺序）与 `NO_PROXY`，给内网/代理环境开发者带来连接故障。
- **错误诊断困难**：Provider 的 401/429/5xx 等 HTTP 状态被统一吞并为 `UnknownError`，插件无法据此实现优雅降级与自动切换。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

The user wants a daily report for the Pi community (github.com/badlogic/pi-mono, but the data refers to earendil-works/pi) for 2026-09-04, based on the provided GitHub data. The report should be in Chinese, structured with specific sections: Today's Overview, Releases, Hot Issues (10 selected), Important PRs (10 selected), Feature Demand Trends, and Developer Pain Points. Each item should include a GitHub link.

Looking at the data:
- Date: 2026-09-04 (the report is for this date, but the data updates are mostly from 2026-09-03).
- Latest Releases: None in the past 24 hours.
- Latest Issues: 50 updated in the past 24 hours, showing the top 30 by comment count. Many are closed, some open.
- Latest PRs: 50 updated, showing top 20 by comment count.

I need to select 10 issues and 10 PRs that are most significant. For issues, I'll look for those with high comments, recent activity, and relevance to core functionality, bugs, or feature requests. For PRs, I'll look for those that fix major issues, add significant features, or improve performance/docs.

Let's analyze the issues:
1. #5023 [CLOSED] [bug] terminal scrolls to beginning without reason - 18 comments, 3 👍. A UI bug in the terminal.
2. #8845 [CLOSED] Branch summarization deterministically fails: generateBranchSummary hardcodes maxTokens: 2048 - 14 comments. A bug in tree branch summarization.
3. #4861 [CLOSED] Add generic TUI viewport primitive for extensions - 7 comments. Feature request for TUI.
4. #5952 [CLOSED] [no-action] ExtensionAPI should expose a safe session replacement API for trusted async UI extensions - 7 comments. API feature request.
5. #8061 [OPEN] [inprogress] Context budget ignores maxTokens output reservation: 400 at 78% input, overflow recovery retry fails too - 6 comments, 2 👍. Important bug related to context management and retries.
6. #6817 [OPEN] [bug] find returns no results for path patterns like src/**/*.ts on Windows - 6 comments. Cross-platform bug.
7. #9088 [CLOSED] [untriaged] Contribution proposal: two small fixes (multiline bash summary, repeated paste markers) - 4 comments.
8. #8788 [OPEN] docs: add Docker Sandboxes to the Containerization page - 4 comments. Docs request.
9. #4839 [CLOSED] Markdown links and raw URLs in TUI output are not Cmd-clickable in Ghostty - 4 comments. TUI usability.
10. #8834 [CLOSED] [no-action] Opt-in package namespace (pi.namespace) for skills and prompt templates - 4 comments. Package management feature.
11. #9076 [CLOSED] [untriaged] gemini-3.8-flash missing from Google model catalog - 3 comments. Model support.
12. #8810 [OPEN] [bug] Extension-registered providers: fresh sessions intermittently ignore defaultProvider/defaultModel - 3 comments. Configuration bug.
13. #9072 [CLOSED] [untriaged] Small fix to the subagent tool similar to prepareArguments hook of the edit tool - 3 comments.
14. #8684 [OPEN] [bug] PI_OFFLINE silently disables all provider model discovery — undocumented behavior contradicting its documented scope - 3 comments. Important configuration/behavior bug.
15. #5168 [CLOSED] Make tool paths clickable - support OSC 8 hyperlinks - 3 comments, 1 👍. Usability feature.
16. #9055 [CLOSED] [inprogress, untriaged] EventStream has quadratic CPU cost when draining buffered model events - 3 comments. Performance issue.
17. #8706 [OPEN] [bug] zai thinking handler sends disabled for forced-thinking models (glm-5.3/5.3-flash), leaking reasoning into output - 3 comments. Model-specific bug.
18. #8882 [CLOSED] NodeExecutionEnv reports signal-terminated commands as exit code 0 - 2 comments. Bug in execution environment.
19. #8681 [OPEN] Expose Bedrock client maxAttempts for single-owner retry budgets - 2 comments. API/SDK feature.
20. #9079 [CLOSED] [untriaged] Plugin auth-file keys are ignored; only /login store is checked - 2 comments. Auth bug.
21. #9016 [OPEN] fix(coding-agent): enable reasoning and reasoning effort for llama.cpp provider - 2 comments. Model feature.
22. #355 [CLOSED] [possibly-openclaw-clanker] Edit tool fails on Windows due to CRLF line endings - 2 comments. Cross-platform bug.
23. #9071 [CLOSED] [untriaged] Extension tool registered with a built-in tool's name never replaces it in the final tool list - 2 comments. Extension bug.
24. #8817 [CLOSED] [bug] Pi agent terminates after successful tool-based inspection when transitioning to final report/write step with local Ollama model - 2 comments, 1 👍. Agent flow bug.
25. #9062 [CLOSED] [untriaged] Tool-call argument parsing becomes quadratic with fragmented deltas - 2 comments. Performance issue.
26. #8920 [CLOSED] RPC abort reports success without cancelling an in-progress compaction - 2 comments. RPC bug.
27. #9048 [CLOSED] Anthropic handoff still rejects Codex tool IDs and thinking signatures - 2 comments. Provider compatibility.
28. #9092 [CLOSED] [package-report, untriaged] Package Report: pi-localllm-provider - 1 comment.
29. #9091 [CLOSED] [untriaged] Export default model and thinking level used by session creation - 1 comment. SDK feature.
30. #9090 [CLOSED] [untriaged] Export EXTENDED_THINKING_LEVELS - 1 comment. SDK feature.

For the top 10 issues, I should prioritize:
- High comment count (engagement).
- Open bugs that affect users (e.g., #8061 context budget, #6817 Windows find, #8810 provider defaults, #8684 PI_OFFLINE, #8706 zai thinking leak).
- Significant feature requests (e.g., #4861 TUI viewport, #5952 session replacement API).
- Recent and relevant (e.g., #9076 missing model, #9016 llama.cpp reasoning).

Let's pick 10:
1. #8061 (Open, in progress, context budget/retry bug) - critical for agent reliability.
2. #6817 (Open, Windows find bug) - affects cross-platform usage.
3. #8810 (Open, extension provider defaults) - affects configuration reliability.
4. #8684 (Open, PI_OFFLINE undocumented behavior) - affects configuration understanding.
5. #8706 (Open, zai thinking leak) - affects specific model usage.
6. #5023 (Closed, terminal scroll bug) - high engagement (18 comments).
7. #8845 (Closed, branch summarization failure) - high engagement (14 comments).
8. #4861 (Closed, TUI viewport primitive) - important for extension development.
9. #5952 (Closed, session replacement API) - important for extension development.
10. #9055 (Closed, EventStream quadratic cost) - performance issue.

Wait, I need to balance open/closed and recency. The data is "updated in the past 24 hours", so these are recently active. Many are closed, meaning they might have been resolved. I should note their status.

Let's refine the 10 issues:
1. **#8061** - Context budget/reservation bug (Open, inprogress). Critical for LLM context management.
2. **#6817** - Windows `find` tool path pattern bug (Open). Cross-platform issue.
3. **#8810** - Extension-registered provider defaults ignored (Open). Configuration issue.
4. **#8684** - `PI_OFFLINE` disables model discovery undocumented (Open). Behavior/documentation mismatch.
5. **#8706** - Z.AI thinking leak when disabled (Open). Model-specific bug.
6. **#5023** - Terminal random scroll to beginning (Closed). High user impact, 18 comments.
7. **#8845** - Branch summarization token cap failure (Closed). 14 comments.
8. **#4861** - TUI viewport primitive for extensions (Closed). Extensibility feature.
9. **#5952** - Safe session replacement API for extensions (Closed). Extensibility feature.
10. **#9055** - EventStream quadratic CPU cost (Closed). Performance.

Now for the PRs (select 10):
1. #9070 [OPEN] fix(coding-agent): download statically linked musl builds of fd and ripgrep on Linux - fixes #9033. Important for Linux compatibility (NixOS, Alpine).
2. #8994 [CLOSED] fix(agent): map signal-killed processes to non-zero exit codes - fixes #8992. Important for bash tool reliability.
3. #8801 [CLOSED] feat(tui): alt mode scrollbar but prettier - UI improvement.
4. #8998 [OPEN] System prompt refactor - large change for dynamic system prompts. Highly significant.
5. #9080 [CLOSED] feat(tui): add jump-to-latest control - UI feature.
6. #9085 [CLOSED] docs(plan-mode): note the questionnaire tool stays enabled - docs fix.
7. #9084 [CLOSED] fix(coding-agent): update source checkouts via rebase - self-update fix.
8. #9087 [CLOSED] fix(ai): fail fast when a dynamic model's api has no matching implementation - fixes OpenRouter 404 issue.
9. #9083 [CLOSED] fix(tui): expand repeated large paste markers - UI fix.
10. #9082 [CLOSED] fix(coding-agent): summarize multiline bash in collapsed tools - UI/UX fix.
11. #8799 [CLOSED] feat(tui): prettier Working... spinner - UI.
12. #9081 [CLOSED] fix: let registerProvider apiKey read plugin auth files - fixes auth issue #9079.
13. #9078 [CLOSED] fix: keep root and workspace versions in lockstep - versioning fix.
14. #9077 [CLOSED] docs(coding-agent): document running pi in Docker Sandboxes - docs.
15. #8293 [CLOSED] fix(ai): keep Baseten GLM-5.2 text-only - model metadata fix.
16. #8635 [OPEN] fix(ai): preserve aborted stop reason during lazy setup - fixes #8409.
17. #8800 [CLOSED] feat(tui): search improvements - UI.
18. #8572 [OPEN] feat(ai): amazon bedrock mantle - WIP, new API support.
19. #9069 [CLOSED] feat(tui,coding-agent): terminal.contentWidth — cap UI render width - UI feature.
20. #8876 [CLOSED] feat(ai): add Tencent Token Plan Individual provider - new provider.

Top 10 PRs (prioritize impact, recency, and status):
1. **#8998** (Open) - System prompt refactor. Major architectural change for dynamic prompts.
2. **#9070** (Open) - Static musl builds for fd/ripgrep on Linux. Fixes critical tooling breakage.
3. **#8994** (Closed) - Signal-killed process exit code fix. Fixes bash tool success reporting.
4. **#9087** (Closed) - Fail fast on dynamic model API mismatch. Fixes OpenRouter 404 errors.
5. **#9081** (Closed) - registerProvider apiKey function support. Fixes plugin auth issues.
6. **#9084** (Closed) - Source checkout self-update via rebase. Improves update flow.
7. **#9069** (Closed) - terminal.contentWidth setting. UI layout feature.
8. **#8572** (Open) - Amazon Bedrock Mantle support. New model API support.
9. **#8876** (Closed) - Tencent Token Plan provider. New provider integration.
10. **#8635** (Open) - Preserve aborted stop reason. Bug fix for abort handling.

Wait, I need to check the dates. The PRs are updated 2026-09-03. I should focus on those that are merged/closed or significant open ones.

Let's structure the report.

**1. 今日速览**
Pi 社区在 2026-09-03 至 04 日活跃，多个关键 Bug 得到修复或推进，包括终端滚动、上下文预算、Windows 路径查找等。社区对扩展 API（如会话替换、TUI 视口）和性能优化（EventStream 二次成本）表现出浓厚兴趣。系统提示重构和新提供商支持是长期关注点。

**2. 版本发布**
无。过去24小时内无新版本发布。

**3. 社区热点 Issues (10个)**
- **#8061 [OPEN]**: 上下文预算忽略 maxTokens 预留，导致溢出恢复重试失败。直接影响大上下文模型的稳定性。
  链接: earendil-works/pi Issue #8061
- **#6817 [OPEN]**: Windows 下 `find` 工具对包含路径分隔符的模式（如 `src/**/*.ts`）返回无结果。跨平台兼容性问题。
  链接: earendil-works/pi Issue #6817
- **#8810 [OPEN]**: 扩展注册的提供商在新会话中偶发忽略配置的 `defaultProvider/defaultModel`。影响配置可靠性。
  链接: earendil-works/pi Issue #8810
- **#8684 [OPEN]**: `PI_OFFLINE` 静默禁用所有提供商模型发现，与其文档说明不符。影响离线模式行为。
  链接: earendil-works/pi Issue #8684
- **#8706 [OPEN]**: Z.AI 思考模型在关闭思考时泄露推理内容到输出。模型特定 Bug。
  链接: earendil-works/pi Issue #8706
- **#5023 [CLOSED]**: 终端无故跳转到会话开头。高反馈 UI Bug（18条评论）。
  链接: earendil-works/pi Issue #5023
- **#8845 [CLOSED]**: 分支摘要因硬编码 `maxTokens: 2048` 确定性失败。影响 `/tree` 功能（14条评论）。
  链接: earendil-works/pi Issue #8845
- **#4861 [CLOSED]**: 添加通用 TUI 视口原语以支持扩展。增强终端 UI 自定义能力。
  链接: earendil-works/pi Issue #4861
- **#5952 [CLOSED]**: 为受信任的异步 UI 扩展暴露安全的会话替换 API。简化扩展中的会话管理。
  链接: earendil-works/pi Issue #5952
- **#9055 [CLOSED]**: EventStream 在排空缓冲模型事件时存在二次 CPU 成本。性能优化点。
  链接: earendil-works/pi Issue #9055

**4. 重要 PR 进展 (10个)**
- **#8998 [OPEN]**: 系统提示重构。支持扩展的部分更新和动态系统/工具变更，是较大的架构调整。
  链接: earendil-works/pi PR #8998
- **#9070 [OPEN]**: 修复 Linux 下 `fd` 和 `ripgrep` 的 musl 静态链接构建。解决 NixOS/Alpine 上工具链缺失问题。
  链接: earendil-works/pi PR #9070
- **#8994 [CLOSED]**: 修复被信号杀死的子进程返回退出码 0 的问题。确保 bash 工具正确报告失败。
  链接: earendil-works/pi PR #8994
- **#9087 [CLOSED]**: 动态模型 API 无匹配实现时快速失败。避免 OpenRouter 404 HTML 错误页。
  链接: earendil-works/pi PR #9087
- **#9081 [CLOSED]**: `registerProvider` 的 `apiKey` 支持函数读取插件 auth 文件。解决插件密钥忽略问题。
  链接: earendil-works/pi PR #9081
- **#9084 [CLOSED]**: 源码检出安装支持 `git pull --rebase` 自动更新。完善 `pi update` 流程。
  链接: earendil-works/pi PR #9084
- **#9069 [CLOSED]**: 新增 `terminal.contentWidth` 设置，限制 TUI 渲染宽度并换行。改善大屏布局。
  链接: earendil-works/pi PR #9069
- **#8572 [

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-09-04

## 1. 今日速览

v0.23.0 正式发布（分支选择器新增 git 状态提示），但发布流水线一度失败（#10900），连同多个 nightly 版本发布失败，暴露 CI/发布流程稳定性问题。社区讨论焦点集中在 TUI 渲染层迁移（#8662，28 条评论）、凭证泄露等安全隐患（#10936、#10561），以及代理死循环烧 Token（#10887）等核心可靠性问题。

## 2. 版本发布

### v0.23.0
- **链接**: [Release v0.23.0](https://github.com/QwenLM/qwen-code/releases)
- **无已知破坏性变更**
- **新特性**：分支选择器在 Update Project、Commit、Push 等操作旁显示 git 状态提示（如 `↓3 · origin/main` 或 `Up to date`）
- ⚠️ 该版本发布工作流曾失败（integration_none 任务），见 [#10900](https://github.com/QwenLM/qwen-code/issues/10900)

## 3. 社区热点 Issues

1. **[#8662 TUI 渲染层从 ink 迁移到 OpenTUI（tracking）](https://github.com/QwenLM/qwen-code/issues/8662)** — 评论 28，本期最热。当前 ink 7 + React 19 需要 1037 行补丁，闪烁和渲染问题难以根治，社区期待结构性解决。

2. **[#10887 工具错误无早停机制，会话空转烧掉 5-14M Token](https://github.com/QwenLM/qwen-code/issues/10887)** — P1。代理陷入死循环时缺乏终止机制，直接影响生产成本，亟需重试上限/熔断。

3. **[#10936 钉钉渠道每次连接将 clientSecret 明文打印到 stdout](https://github.com/QwenLM/qwen-code/issues/10936)** — P1 凭证安全问题，dogfooding 中发现，需紧急修复。

4. **[#10561 命令执行类 git config 键构成开放攻击面](https://github.com/QwenLM/qwen-code/issues/10561)** — P1 安全审查类问题：fsmonitor、hooks 等配置可在任意 git spawn 中执行攻击者代码。

5. **[#10065 LM Studio 0.4.21 报 "failed to parse grammar"](https://github.com/QwenLM/qwen-code/issues/10065)** — 本地模型用户高频踩坑，即使无 MCP server 也触发，影响 OpenAI 兼容 API 接入体验。

6. **[#10953 Todo 计划在委托子代理期间冻结 55 分钟](https://github.com/QwenLM/qwen-code/issues/10953)** — active-todo 提醒机制在 subagent 场景下失效，已有对应修复 PR #10963。

7. **[#10908 CI 测试耗时瓶颈在模块导入而非调度](https://github.com/QwenLM/qwen-code/issues/10908)** — cli workspace collect 2223s vs tests 1372s，催生 #10957/#10958 性能 PR。

8. **[#10932 语音听写无法使用 Token Plan 新 ASR 模型 ID](https://github.com/QwenLM/qwen-code/issues/10932)** — 模型 ID 白名单硬编码旧值，需跟随 Model Studio 新模型族更新。

9. **[#10888 代理违反 skill 硬约束、伪造 fallback 值](https://github.com/QwenLM/qwen-code/issues/10888)** — 缺少必需输入时应停止而非编造，关乎 agent 可信度。

10. **[#10583 提议为 Linux 增加轻量 Bubblewrap 沙箱后端](https://github.com/QwenLM/qwen-code/issues/10583)** — 无需 Docker 守护进程的 OS 级隔离方案，安全与易用性兼顾。

## 4. 重要 PR 进展

1. **[#10968 恢复 main 分支 CI 绿灯](https://github.com/QwenLM/qwen-code/pull/10968)** — 修复 slash-command 提交变更引入的两处持续失败。
2. **[#10966 修复容器类斜杠命令 Enter 提交回归](https://github.com/QwenLM/qwen-code/pull/10966)** — 如 memory 命令等无默认动作的命令恢复 Enter 可用。
3. **[#10957 cli 测试直接导入 core 子模块](https://github.com/QwenLM/qwen-code/pull/10957)** — 针对 #10908 的模块导入性能优化主力 PR。
4. **[#10958 233 个不依赖 DOM 的测试套件改用 node 环境](https://github.com/QwenLM/qwen-code/pull/10958)** — 去 jsdom 开销，加速测试。
5. **[#10963 在委托边界和用户回合触发 active-todo 提醒](https://github.com/QwenLM/qwen-code/pull/10963)** — 修复 #10953 计划冻结问题。
6. **[#10954 qwen serve 新增 GET /background-agents](https://github.com/QwenLM/qwen-code/pull/10954)** — 暴露 supervisor 正在运行的后台代理及状态。
7. **[#10697 工作区级 Skills 运行时](https://github.com/QwenLM/qwen-code/pull/10697)** — 分离持久配置与运行时 discovery，配置变更后自动协调活跃会话。
8. **[#10627 Web Shell 环境面板状态恢复](https://github.com/QwenLM/qwen-code/pull/10627)** — 附件、产物、子代理、后台任务分区展示。
9. **[#10939 运行中的子代理在 transcript 中显示实时状态](https://github.com/QwenLM/qwen-code/pull/10939)** — 后台代理卡片增加活跃脉冲标记。
10. **[#10347 瞬态网络错误（EOF）自动重试](https://github.com/QwenLM/qwen-code/pull/10347)** — 将伪装的 4xx 网络失败归类为可重试传输错误。

## 5. 功能需求趋势

- **多代理 / 跨会话协作**：#10925（跨会话消息信任层）、#9402（Agent Board）、#10954（后台代理 API）、#8941（动态工作流可视化）持续活跃，是最明确的战略方向。
- **沙箱与安全**：Bubblewrap 后端（#10583）、git config 攻击面（#10561）、凭证泄露（#10936）构成安全主题三连。
- **终端体验重构**：OpenTUI 迁移（#8662）作为 tracking issue 长期霸占热度榜首。
- **本地/自托管模型兼容**：LM Studio（#10065）、新 ASR 模型 ID（#10932）反映本地推理用户群体壮大。
- **CI/测试性能**：模块导入成本（#10908）与配套 perf PR 显示项目规模已使测试基础设施成为瓶颈。

## 6. 开发者关注点

- **可靠性痛点最集中**：代理死循环烧 Token（#10887）、伪造 fallback（#10888）、Todo 状态过期（#10953）、思考块泄露（#10791）——均指向"代理失控时缺乏护栏"。
- **发布与 CI 不稳定**：24 小时内 6 个 release/nightly 发布失败 + 多次 main CI 红，自动化 bot 频繁开单，维护者需关注流水线健康度。
- **密钥与日志卫生**：钉钉凭证打印（#10936）提醒各 channel 集成需统一日志脱敏审计。
- **高频需求**：TUI 渲染质量、本地模型兼容性、后台代理可观测性是社区呼声最高的三个方向。

---
*数据来源：github.com/QwenLM/qwen-code · 统计窗口：过去 24 小时*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (Codewhale) 社区动态日报
**日期**: 2026-09-04  
**数据来源**: github.com/Hmbown/DeepSeek-TUI (注：提供数据内容均指向 `Hmbown/Codewhale` 仓库)

---

## 1. 今日速览
过去 24 小时内无新版本 Release，但代码合入与 Issue 讨论保持高位活跃。核心动向包括：EPIC-005 TUI 模块化拆解持续推动（#5316 评论达 21 条）；`serve --acp` 协议能力暴露出会话枚举与配置透传短板（#5863、#5864）；0.9.12 版本的 Fleet-only UX 整合已完成多切片合入（#5862）。安全侧修复了 Lane TTL 误删路径隐患（#5824/#5854）。

## 2. 版本发布
无新版本发布（过去 24 小时 Releases 记录为空）。

## 3. 社区热点 Issues
*今日仅 5 条 Issue 更新，全部列出如下：*

1. **#5316 [OPEN] EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)**  
   作者: aboimpinto | 更新: 2026-09-03 | 评论: 21  
   链接: Hmbown/Codewhale Issue #5316  
   **重要性**: 作为整体架构拆解的跟踪母题，聚合所有子 EPIC/PR，社区讨论热度最高（21 评），决定后续 TUI 模块解耦路线。

2. **#5863 [OPEN] [enhancement] ACP Function Enhancement**  
   作者: Lujc0523 | 更新: 2026-09-03 | 评论: 2  
   链接: Hmbown/Codewhale Issue #5863  
   **重要性**: 指出 `serve --acp` 未暴露 session 配置（模式/模型/参数），导致编辑器客户端无法切换工作模式，影响 IDE 集成体验。

3. **#5864 [OPEN] serve --acp does not implement ACP session/list (and session/load)**  
   作者: senka9h | 更新: 2026-09-03 | 评论: 1  
   链接: Hmbown/Codewhale Issue #5864  
   **重要性**: 补充 #5863 的协议缺失，ACP 客户端无法枚举或恢复已有会话，直接阻断多会话工作流。

4. **#5866 [OPEN] Key Ophthalmology CPT & ICD-10 Updates for 2026**  
   作者: medicalbilling-usa | 更新: 2026-09-03 | 评论: 1  
   链接: Hmbown/Codewhale Issue #5866  
   **重要性**: 内容为眼科医疗账单外链，与项目无关，疑似垃圾信息/误投，社区无实质技术反应。

5. **#5824 [CLOSED] Lane TTL cleanup can recursively delete an unverified path**  
   作者: wuisabel-gif | 更新: 2026-09-02 | 评论: 1  
   链接: Hmbown/Codewhale Issue #5824  
   **重要性**: 揭示 TTL 清理信任持久化路径导致的破坏性误删风险，已通过 #5854 修复闭环，属安全加固类高优先问题。

## 4. 重要 PR 进展
*以下为过去 24 小时更新的 10 个 PR 汇总：*

1. **#5867 [OPEN] feat(config): add [reasoning_only] section for retry count and custom…**  
   链接: Hmbown/Codewhale PR #5867  
   内容: 将硬编码的 `MAX_REASONING_ONLY_REPROMPTS=2` 改为用户可配置项，提升推理模型重试灵活性。

2. **#5865 [OPEN] refactor(tui): re-land FEAT-020 plugin command shapes on main**  
   链接: Hmbown/Codewhale PR #5865  
   内容: 将 FEAT-020 插件命令结构重新合入主分支，推进 #5316 拆解任务。

3. **#5833 [CLOSED] feat(memory): FEAT-019 memory capability, memory facet, and typed outcomes (#5609)**  
   链接: Hmbown/Codewhale PR #5833  
   内容: 落地记忆能力（搜索/记住/导出等），新增 `MEMORY` 能力位与 TUI 适配器，闭合 #5609。

4. **#5858 [CLOSED] tui: collapse ocean_treatment into ThemeId::Underwater**  
   链接: Hmbown/Codewhale PR #5858  
   内容: 合并海洋主题至 Underwater，简化主题资产与路由，完成 Shell UX 子切片。

5. **#5862 [CLOSED] Codewhale 0.9.12: Fleet-only UX (workbar, startup, underwater default, provider, settings, logo, hover, roles, retro theme)**  
   链接: Hmbown/Codewhale PR #5862  
   内容: 整合 10 个 UX 切片（工作栏/启动/默认水下主题/设置重组等）至 0.9.12 发布线。

6. **#5843 [CLOSED] tui: align typed config and schema with the live value spaces**  
   链接: Hmbown/Codewhale PR #5843  
   内容: 类型化主题与配置 schema 对齐，清理孤立 locale 键，降低配置漂移。

7. **#5861 [OPEN] chore(brand): serve the canonical whale on account-entry pages**  
   链接: Hmbown/Codewhale PR #5861  
   内容: 修复登录/注册页使用了非标准鲸鱼标识，统一为产品 C-curl 品牌标记。

8. **#5854 [CLOSED] lane: require verified managed-worktree identity before TTL cleanup (#5824)**  
   链接: Hmbown/Codewhale PR #5854  
   内容: 修复 #5824，TTL 清理前强制校验 Git worktree 身份，防止误删用户路径。

9. **#5857 [OPEN] fix(tui): thinking fold toggles relative to the expanded baseline**  
   链接: Hmbown/Codewhale PR #5857  
   内容: 修复思考折叠态切换基准，补充 8 格测试用例，部分解决 #5847。

10. **#5844 [CLOSED] config: delete AppMode pretenders and VerifierVerdictPolicy**  
    链接: Hmbown/Codewhale PR #5844  
    内容: 删除冗余的 AppMode/CommandMode 镜像与废弃策略，完成配置审计清理。

## 5. 功能需求趋势
从 Issue 与 PR 提炼出社区/维护者重点方向：
- **协议与集成增强**：ACP 会话枚举、配置透传（#5863、#5864）需求突出，意在强化编辑器/客户端桥接。
- **架构模块化**：EPIC-005 驱动 Crate 拆解与插件命令形状重着陆（#5316、#5865），提升可维护性。
- **上下文与记忆**：FEAT-019 记忆 facet 落地（#5833）显示对长期上下文管理的投入。
- **UX 一致性**：0.9.12 Fleet-only UX 整合（#5862）、品牌统一（#5861）、主题折叠（#5858）表明界面体验为近期迭代重心。

## 6. 开发者关注点
- **数据安全痛点**：Lane TTL 递归误删未验证路径（#5824）引发对本地状态破坏的担忧，已快速修复。
- **配置硬编码不满**：推理重试次数写死（引出 #5867）反映开发者要求更高运行时可调性。
- **协议完备性诉求**：ACP 客户端无法列举/恢复会话、无法改模式，说明外部工具链期待更完整的 Agent 协议表面。
- **品牌/细节一致性**：账户页鲸鱼标识不一致（#5861）虽小，但反映社区对产品细节统一性的敏感。

---
*日报生成基于所提供的 GitHub 快照数据，若链接无法跳转请依据 `Hmbown/Codewhale` 仓库与对应编号查阅。*

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

# ComfyUI 社区动态日报

**日期：2026-09-04**

---

## 📌 今日速览

今日 ComfyUI 仓库动态以 **3D 资产工作流（Trellis）优化**与 **新模型支持（MiniMax-H3、Flux.2 Klein）** 为主线，维护者 comfyanonymous 集中提交了多个降低 Trellis 工作流显存占用的 PR。同时，**ROCm/AMD GPU 兼容性**问题集中爆发，涉及 RX 9070 XT、Strix Halo 等多款硬件，反映出非 NVIDIA 平台的稳定性仍是社区关注焦点。

---

## 🚀 版本发布

**今日无新版本发布。**

---

## 🔥 社区热点 Issues

### 1. [#4170 Cross-Vendor Multi-GPU Support via Vulkan Backend](https://github.com/Comfy-Org/ComfyUI/issues/4170)
- **状态**：OPEN ｜ 👍 46 ｜ 💬 22
- **重要性**：⭐⭐⭐⭐⭐ 高赞提案，建议通过 Vulkan 后端实现跨厂商（NVIDIA+AMD）多卡推理，灵感来自 llama.cpp。随着 Flux 等模型显存需求超过 12GB，跨卡推理成为刚需。

### 2. [#15973 ACE-Step 1.5 集成存在内存泄漏 / CPU 回退导致 Windows/AMD 严重卡顿与 OOM](https://github.com/Comfy-Org/ComfyUI/issues/15973)
- **状态**：OPEN ｜ 👍 0 ｜ 💬 10
- **重要性**：⭐⭐⭐⭐⭐ 关键模型集成故障，AMD/Windows 用户使用 ACE-Step 1.5 时遭遇严重性能问题，影响新模型推广。

### 3. [#11017 Loader 节点未检查 None 值导致 'NoneType' has no attribute 'endswith'](https://github.com/Comfy-Org/ComfyUI/issues/11017)
- **状态**：OPEN ｜ 👍 0 ｜ 💬 7
- **重要性**：⭐⭐⭐⭐ 自 2025 年 12 月起持续发酵的稳健性问题，动态链接输入时崩溃，影响自定义节点生态兼容性。

### 4. [#15661 DynamicVRAM / AIMDO 导致性能回退及"prefer GPU"选项需求](https://github.com/Comfy-Org/ComfyUI/issues/15661)
- **状态**：OPEN ｜ 👍 1 ｜ 💬 4
- **重要性**：⭐⭐⭐⭐ RTX 4090 用户从 10 秒骤降至 15 分钟，呼吁增加关闭动态内存管理的开关。

### 5. [#15528 `--fast-disk` 改变 H3 结果](https://github.com/Comfy-Org/ComfyUI/issues/15528)
- **状态**：CLOSED ｜ 💬 4
- **重要性**：⭐⭐⭐⭐ 命令行参数影响推理结果一致性的隐蔽 bug，已关闭但反映出采样确定性仍需加强。

### 6. [#15261 为什么 5070ti + 64G 比 4080 + 64G 在 MiniMax H3 中快 2.3 倍？](https://github.com/Comfy-Org/ComfyUI/issues/15261)
- **状态**：OPEN ｜ 💬 4
- **重要性**：⭐⭐⭐⭐ 跨硬件性能异常问题，可能与 Blackwell 架构相关，值得性能优化团队关注。

### 7. [#15985 ROCm / Strix Halo (gfx1151) UV Unwrap 时 HIPBLAS_STATUS_ALLOC_FAILED](https://github.com/Comfy-Org/ComfyUI/issues/15985)
- **状态**：OPEN ｜ 👍 1 ｜ 💬 2
- **重要性**：⭐⭐⭐⭐ AMD 新一代 APU（Strix Halo）首次集成 ComfyUI 时遇到的底层算子失败。

### 8. [#16062 RX 9070 XT 上 VAE Decode + DynamicVRAM 严重卡顿](https://github.com/Comfy-Org/ComfyUI/issues/16062)
- **状态**：OPEN ｜ 💬 1
- **重要性**：⭐⭐⭐⭐ 与 #15661 同源问题——ROCm 平台 + DynamicVRAM 的组合引发 UI 卡死。

### 9. [#16070 模型保存报错（FakeDevice）](https://github.com/Comfy-Org/ComfyUI/issues/16070)
- **状态**：OPEN
- **重要性**：⭐⭐⭐ DynamicVRAM 启用后保存 SDXL/SD2 checkpoint 崩溃，已有对应修复 PR #16075。

### 10. [#16026 ComfyNode.GET_SCHEMA() OUTPUT_IS_LIST 缓存导致继承类初始化异常](https://github.com/Comfy-Org/ComfyUI/issues/16026)
- **状态**：OPEN ｜ 💬 1
- **重要性**：⭐⭐⭐ 自定义节点开发者关心的 API 内部隐患，涉及节点继承时的 schema 解析顺序。

---

## 🛠️ 重要 PR 进展

### 1. [#16054 Lower peak trellis workflow vram and ram usage](https://github.com/Comfy-Org/ComfyUI/pull/16054)
由 comfyanonymous 亲自提交，进一步降低 Trellis 工作流的峰值显存/内存占用，是 #16037 的迭代版本。

### 2. [#15976 Support image conditioning for Flux.2 Klein (CORE-412)](https://github.com/Comfy-Org/ComfyUI/pull/15976)
新增 Flux.2 Klein 的图像条件支持，正确加载 Qwen3-VL 视觉编码器，覆盖 4B 与 8B 两个尺寸。

### 3. [#15935 feat(Comfy-Cloud): add nodes that run curated workflows on Comfy Cloud GPUs](https://github.com/Comfy-Org/ComfyUI/pull/15935)
新增"Comfy Cloud as a partner node"客户端，将精选工作流推送至 Comfy 云端 GPU 执行并按 credit 计费。

### 4. [#15958 MiniMax-H3: support FastVideo VSA](https://github.com/Comfy-Org/ComfyUI/pull/15958) (kijai)
为 MiniMax-H3 添加 FastVideo VSA（Video Sparse Attention）支持，可显著加速视频生成。

### 5. [#16072 Add Sparse Attention node](https://github.com/Comfy-Org/ComfyUI/pull/16072) (kijai)
新增稀疏注意力节点，复用 comfy-kitchen 的新后端，为多模型提供加速能力。

### 6. [#16060 fix(Tripo): real output formats, exact pricing, missing parameters and six new nodes](https://github.com/Comfy-Org/ComfyUI/pull/16060)
修复 Tripo 节点格式/价格/参数错误，并新增 6 个节点，提升 3D 生成工作流可用性。

### 7. [#16075 Fix TypeError when saving checkpoints with dynamic VRAM loading](https://github.com/Comfy-Org/ComfyUI/pull/16075)
直接修复 #16070，DynamicVRAM 启用时保存 SDXL/SD2 checkpoint 不再崩溃。

### 8. [#16069 Force CPU for mesh postprocess kernels on MPS](https://github.com/Comfy-Org/ComfyUI/pull/16069)
解决 macOS MPS 后端运行 mesh 后处理内核失败的问题（修复 #16017）。

### 9. [#16067 Warn when --use-ck-attention is enabled for TRELLIS.2](https://github.com/Comfy-Org/ComfyUI/pull/16067)
在 `--use-ck-attention` 全局开关下为 TRELLIS.2 增加告警，避免静默崩溃。

### 10. [#15915-#16009 review-stack: synap5e 的资产系统重构](https://github.com/Comfy-Org/ComfyUI/pull/15915)
包含 6 层 review-stack，将本地 `Asset` 表拆分为 `Asset` + `AssetContent` 两实体，并重构扫描逻辑，是一次底层数据模型升级。

---

## 📈 功能需求趋势

通过对今日 Issues 分析，社区需求集中在以下方向：

| 方向 | 代表 Issue | 热度 |
|---|---|---|
| **跨厂商 GPU 推理（Vulkan/ROCm）** | #4170, #15985, #16062 | 🔥🔥🔥🔥🔥 |
| **DynamicVRAM / AIMDO 性能回退** | #15661, #16062, #16070 | 🔥🔥🔥🔥 |
| **新模型支持（MiniMax-H3、Flux.2 Klein、ACE-Step）** | #15973, #15976, #15958 | 🔥🔥🔥🔥 |
| **3D 工作流（Trellis/Tripo）优化** | #16054, #16067, #16056 | 🔥🔥🔥 |
| **API 节点与云端化（Comfy Cloud）** | #15935, #16060 | 🔥🔥🔥 |
| **UI/UX 改进** | #16064, #16073 | 🔥🔥 |

---

## 👨‍💻 开发者关注点

1. **AMD/ROCm 平台是最大痛点**：今日新增 3 条与 AMD GPU 相关的 bug（#15973, #15985, #16062），覆盖 Strix Halo、RX 9070 XT 等多款硬件，问题集中在内存分配、HIPBLAS 算子与 DynamicVRAM 兼容性。

2. **DynamicVRAM 新功能带来副作用**：作为近期引入的核心特性，在多个场景（模型保存、VAE 解码、HDD 加载）触发新 bug，需要更细粒度的开关与稳定性补丁。

3. **3D 工作流成为新增长点**：Trellis 与 Tripo 节点持续活跃，开发者既关注显存优化也关注输出格式正确性。

4. **自定义节点 API 健壮性**：`OUTPUT_IS_LIST` 缓存、None 值校验等问题提示核心 API 需进一步加固，以降低扩展开发者的踩坑成本。

5. **云端化战略推进**：`Comfy Cloud as a partner node` 的 PR 表明官方正在将工作流执行推向云端 GPU，未来"本地 + 云端"混合模式值得关注。

---

*数据来源：[GitHub Comfy-Org/ComfyUI](https://github.com/comfyanonymous/ComfyUI) 过去 24 小时更新*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>



# Ollama 社区动态日报 | 2026-09-04

## 今日速览

过去24小时无新版本发布，社区活跃度集中在**Mac/iGPU性能优化**、**MLX推理稳定性**及**云端功能需求**。Google `agy` CLI集成提案获得最高社区支持（17👍），同时`ollama launch`新增Talos集成。安全团队关注到`OLLAMA_DEBUG_LOG_REQUESTS`存在全量Prompt持久化风险。

---

## 版本发布

无。

---

## 社区热点 Issues

### 1. 为 ollama-cloud 添加 Prompt Cache 支持
- **#16714** | [链接](https://github.com/ollama/ollama/issues/16714)
- 作者: devasur | 35评论 | 3👍 | 更新: 2026-09-03
- **重要性**: 云端订阅用户核心诉求，竞品已支持，对 Agentic 场景的 Token 成本优化显著。

### 2. Gemma4:e2b 在 WSL2 启动时崩溃（GGML_ASSERT 失败）
- **#16506** | [链接](https://github.com/ollama/ollama/issues/16506)
- 作者: jeremyheld-hs | 21评论 | 8👍 | 更新: 2026-09-03
- **重要性**: 8👍表明社区共鸣强烈；e2b 是流行开发沙箱，此 Bug 影响 MLX/GPU 推理工作流。

### 3. 请求将 agy (Antigravity CLI) 加入 ollama launch 集成
- **#16329** | [链接](https://github.com/ollama/ollama/issues/16329)
- 作者: doctorboyz | 7评论 | **17👍** | 更新: 2026-09-03
- **重要性**: **今日最高赞 Issue**。Google 推出的 Claude Code 竞品，社区期待官方集成降低使用门槛。

### 4. iGPU 内存优化：减少开销、添加 RAM 压力保护
- **#14953** | [链接](https://github.com/ollama/ollama/issues/14953)
- 作者: RajeshKumar11 | 11评论 | 2👍 | 更新: 2026-09-03
- **重要性**: 影响 Intel Iris Xe / AMD APU 用户群；当前最小预留 457 MiB 对共享内存 GPU 造成浪费。

### 5. Windows 混合显卡 Vulkan 错误选择 iGPU，CUDA dGPU 被丢弃
- **#16667** | [链接](https://github.com/ollama/ollama/issues/16667)
- 作者: Sahil170595 | 8评论 | 更新: 2026-09-03
- **重要性**: RTX 4080 笔记本性能损失约 **9x**，属于严重性能退化 Bug。

### 6. llama-server 生成 Token 时 CPU 使用率异常偏高（性能回归）
- **#18038** | [链接](https://github.com/ollama/ollama/issues/18038)
- 作者: mario-grgic | 5评论 | 更新: 2026-09-03
- **重要性**: M4 Max 上 llama-cpp 占用约 560% CPU，近期 main 分支存在性能回退。

### 7. MLX Gemma 4 26B A4B 升级后进入推理循环，不再调用工具
- **#18220** | [链接](https://github.com/ollama/ollama/issues/18220)
- 作者: CesarR70 | 3评论 | 更新: 2026-09-03（今日新建）
- **重要性**: Ollama 0.33.3 引入的回归，影响 Cline/VS Code 开发者的工具调用工作流。

### 8. [安全] OLLAMA_DEBUG_LOG_REQUESTS 持久化完整 Prompt 且无保留/脱敏控制
- **#18210 / #18211** | [链接](https://github.com/ollama/ollama/issues/18210)
- 作者: ace-trump-tech | 更新: 2026-09-03
- **重要性**: 生产环境中 System Prompt、对话内容、Tool Definition 可能被写入临时目录；#18211 已关闭，#18210 仍在跟踪。

### 9. mlxrunner num_ctx 未生效，长 Prefill 导致 Metal Watchdog Panic
- **#18125** | [链接](https://github.com/ollama/ollama/issues/18125)
- 作者: touringsedan | 1评论 | 更新: 2026-09-03
- **重要性**: Modelfile 中的上下文长度限制被忽略，Mac M2 Max 64GB 用户易触发系统级崩溃。

### 10. 为长寿命 Runner (keep_alive=-1) 切换模型后输出污染问题
- **#18208** | [链接](https://github.com/ollama/ollama/issues/18208)
- 作者: ashbottest-spec | 1评论 | 更新: 2026-09-03
- **重要性**: Runner 共存状态下产生 `<unused49>` 重复占位符 token，需完全重启 Runner 才能恢复。

---

## 重要 PR 进展

### 1. llama-server: 准备移除 manifest list 兼容性补丁
- **#16590** | [链接](https://github.com/ollama/ollama/pull/16590)
- 作者: dhiltgen | 更新: 2026-09-03
- **内容**: 实现 manifest-list 存储，使 runner-specific manifests 可共存于同一 tag 下，同时保留 v1 tag 作为降级锚点。

### 2. feat: 在 MLX 后端添加 GraniteForCausalLM 支持
- **#17972** | [链接](https://github.com/ollama/ollama/pull/17972)
- 作者: gabe-l-hart | 更新: 2026-09-03
- **内容**: 为 IBM Granite 4.1 系列模型提供 MLX 转换支持，扩展模型库覆盖。

### 3. mlxrunner: 在结构化输出下启用 Speculative Decoding
- **#18105** | [链接](https://github.com/ollama/ollama/pull/18105)
- 作者: jessegross | 更新: 2026-09-03
- **内容**: 修复结构化输出时 draft head 无法利用的问题，在 MTP 密集模型上可将吞吐量提升约 **2x**。

### 4. ci: 重建 MLX macOS 测试载荷
- **#18219** | [链接](https://github.com/ollama/ollama/pull/18219)
- 作者: dhiltgen | 更新: 2026-09-03（今日新建）
- **内容**: 解决 xgrammar wrapper 符号变更或 MLX pin 更新后测试静默跳过的 CI 问题。

### 5. Add Talos 作为 ollama launch 集成
- **#18093** | [链接](https://github.com/ollama/ollama/pull/18093)
- 作者: morningstarnasser | 更新: 2026-09-03
- **内容**: 将权限门禁个人 AI 代理 Talos 加入官方 `ollama launch` 集成列表。

### 6. tools: 当未解析到 Tool Call 时返回缓冲输出作为内容
- **#17284** | [链接](https://github.com/ollama/ollama/pull/17284)
- 作者: GuiBarradas | 更新: 2026-09-03
- **内容**: 修复 hallucinated tool tag 导致输出被静默丢弃的问题，提升工具调用容错性。

### 7. fix(cuda): 修正 Windows CUDA 12+ 运行时版本检测
- **#17196** | [链接](https://github.com/ollama/ollama/pull/17196)
- 作者: pjdurden | 更新: 2026-09-03
- **内容**: 修复 `.0` 次要版本号导致 `filterOldCUDADriver` 失效及 PTX JIT 崩溃的问题。

### 8. model/parsers: 保留 Cohere END_OF_TURN_TOKEN
- **#18216** | [链接](https://github.com/ollama/ollama/pull/18216)
- 作者: pentaoa | 更新: 2026-09-03
- **内容**: 修复 Cohere 模型结束轮次 token 丢失的 Bug（#18053）。

### 9. llama: 推理预算耗尽时在行尾而非词中间截断
- **#18212** | [链接](https://github.com/ollama/ollama/pull/18212)
- 作者: mann1x | 更新: 2026-09-03
- **内容**: 修复 thinking block 在 UTF-8 codepoint 中间被截断的问题，提升输出可读性。

### 10. api: 按请求/模型绑定 Thinking Token 预算
- **#17566** | [链接](https://github.com/ollama/ollama/pull/17566)
- 作者: mann1x | 更新: 2026-09-03
- **内容**: 防止模型在 thinking block 内无限循环消耗上下文，是今日 Issues 中多个推理循环问题的根本性修复方案。

---

## 功能需求趋势

| 方向 | 关注度 | 关键 Issue/PR |
|------|--------|---------------|
| **IDE/CLI 集成扩展** | ⭐⭐⭐⭐⭐ | `agy` #16329, `Talos` PR #18093, `otaku` PR #17862 |
| **Apple Silicon / MLX 稳定性** | ⭐⭐⭐⭐⭐ | #18220, #18125, #17065, PR #18105 |
| **iGPU / 混合显卡优化** | ⭐⭐⭐⭐ | #14953, #16667, #18218 |
| **Thinking Token 预算管理** | ⭐⭐⭐⭐ | #17566 (PR), #18212 (PR) |
| **云端功能增强** | ⭐⭐⭐ | #16714 (Prompt Cache), #17892 (deepseek-v4-flash 循环) |
| **安全与隐私** | ⭐⭐⭐ | #18210 (DEBUG 日志持久化) |

---

## 开发者关注点

**Top 3 痛点：**

1. **Mac/MLX 推理回归频发** — 0.33.3 升级后 Gemma 4 工具调用失效（#18220）、num_ctx 未生效导致 Metal Panic（#18125）、vision 模型图片输入异常（#17065），反映出 MLX 后端回归测试覆盖不足。

2. **Windows iGPU/dGPU 选择逻辑混乱** — Vulkan 后端在混合显卡场景错误选择 Intel iGPU 而非 NVIDIA dGPU（#16667, #18218），且 CUDA 12+ 版本检测存在缺陷（PR #17196）。

3. **Thinking/推理循环无预算控制** — deepseek-v4-flash（#17892）、glm-5.3（#18193）出现无限推理块循环，PR #17566 提供了 token 预算方案但尚未合并，社区急需该保护机制。

**值得关注的开放性需求：**
- 非 root 用户 Linux 安装支持（#18215，PR #18207 已提交）
- TUI 中展示 Thinking Blocks 的选项（#18209）
- CLI 支持 API_KEY 非交互式认证（#18217）

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

# llama.cpp 社区动态日报  
**日期：2026-09-04**

---

## 1. 今日速览

llama.cpp 社区继续聚焦多后端性能优化与模型支持扩展，Highlights 包括基于 Vulkan 的稀疏 Flash Attention 支持、OpenCL 算子增强、Intel SYCL P2P 传输优化；同时高风险 Bug 问题涌现，涉及 Vulkan 崩溃、HIP/ROCm 输出错误及 MTP 推理 race condition，引发开发者广泛关注。

---

## 2. 版本发布（最新 builds）

截至 2026-09-04，GitHub 最近发布的构建版本如下（24 小时内更新）：

| Build 号 | 更新内容概述 |
|----------|--------------|
| b10792   | 修复 JSON Schema 空对象生成 GBNF 语法时的空格问题 [#28279](https://github.com/ggerganov/llama.cpp/pull/28279) |
| b10791   | OpenCL 后端优化 quant lm_head / decode GEMV 及中等 batch GEMM，提升 speculative decoding 性能 [#26477](https://github.com/ggerganov/llama.cpp/pull/26477) |
| b10790   | 调整 MMVQ 与 MMQ 类型在 SM87 架构上的量化切换点 |
| b10786   | mtmd 模块中 propagate const 修复 |
| b10785   | Metal 支持稀疏 Flash Attention（FA），新增 n_kv_max sparse mask hint [#28098](https://github.com/ggerganov/llama.cpp/pull/28098) |
| b10784   | 修复 Metal glu kernel 在 ne00=1 时的调度问题 |
| b10783   | mtmd 模块中添加 const 修饰 improves thread safety |
| b10782   | CUDA 多 GPU 场景下允许每个 split 使用独立流控 [#28198](https://github.com/ggerganov/llama.cpp/pull/28198) |
| b10781   | Vulkan 修复 Flash Attention 非量化路径激活逻辑 |
| b10780   | SYCL 增强 P2P 内存拷贝接口支持 [#27550](https://github.com/ggerganov/llama.cpp/pull/27550) |

> 注：部分构建链接不完整，建议访问 [releases 页面](https://github.com/ggerganov/llama.cpp/releases) 获取完整信息。

---

## 3. 社区热点 Issues

以下是近期讨论活跃、影响较大或待深入跟踪的 10 条 Issue：

| 编号 | 标题 | 简要摘要 | 重要性说明 |
|------|------|-----------|--------------|
| [#10528](https://github.com/ggerganov/llama.cpp/issues/10528) | [OPEN] [bug] Inconsistent Vulkan segfault | 用户报告在 Linux 上使用 Vulkan 后端崩溃，已有 83 条评论追踪排查过程。 | 高危 Bug，影响 Vulkan 用户稳定性。 |
| [#24168](https://github.com/ggerganov/llama.cpp/issues/24168) | [OPEN] SYCL 上 Qwen3 系列模型异常输出 | uesr 在 Intel Arc Pro B60 上发现 SYCL 后端输出空白/Garbled，且触发崩溃，已确认为回归问题。 | 涉及关键硬件平台与部分头部模型，需紧盯修复进度。 |
| [#27572](https://github.com/ggerganov/llama.cpp/issues/27572) | [bug] MTP 推理中 t_h_nextn 异步拷贝竞争 | 自 spec-type draft-mtp 后，在 `-np N` 环境下 prompt 较长时发生概率性数据错误。 | 影响自洽解码场景稳定性，社区反馈积极。 |
| [#27579](https://github.com/ggerganov/llama.cpp/issues/27579) | HIP/ROCm 输出错误（gfx1151） | 在同一硬件上 Vulkan 正常，HIP 后端输出异常，已在讨论中定位问题源。 | 表明 ROCm 在 RDNA3.5 架构支持仍存差距。 |
| [#28247](https://github.com/ggerganov/llama.cpp/issues/28247) | Vulkan GGML_ASSERT 断言错误 | Intel Arc A770 上执行 Qwen 3.8 flash next 时触发 maxWorkGroupCount 断言失败。 | 表明驱动兼容性问题或 kernel 参数异常。 |
| [#28290](https://github.com/ggerganov/llama.cpp/issues/28290) | unpack8() 导致 Vulkan 输出损坏 | 在 Snapdragon X Elite 上测试发现特定解包函数破坏乘法运算结果。 | ARM 平台 Vulkan 支持潜在隐患。 |
| [#28113](https://github.com/ggerganov/llama.cpp/issues/28113) | CUDA/HIP 上 MoE 模型输出垃圾数据 | 在 gfx1151 上使用 ROCm 7.14 测试 MoE 类模型输出失真。 | 涉及混合专家模型新兴趋势，需优先定位。 |
| [#28295](https://github.com/ggerganov/llama.cpp/issues/28295) | MSVC 编译未识别 AVX-VNNI | 用户指出即使硬件支持仍未启用加速指令集。 | 影响 Windows 平台性能表现。 |
| [#28196](https://github.com/ggerganov/llama.cpp/issues/28196) | MTP 性能差：RTX 5090 vs 4090 效果反常 | sm_120 架构下 Qwen35 MTP 推理效率远低于 4090，引发猜测带宽限制或调度退化。 | 揭示新一代 GPU 架构适配潜在问题。 |
| [#28214](https://github.com/ggerganov/llama.cpp/issues/28214) | Vulkan 固件崩溃：Pixel 11 Pro Tensor G6 | PowerVR C 系列 GPU 在处理复杂算子时触发固件异常，需 vendor 协助定位。 | 表明非传统 GPU 平台适配仍具挑战性。 |

---

## 4. 重要 PR 进展

近期合并或审查中的关键 Pull Requests 包括：

| PR 编号 | 功能描述 | 状态 | 链接 |
|---------|-----------|------|------|
| [#28098](https://github.com/ggerganov/llama.cpp/pull/28098) | Metal 添加稀疏 Flash Attention 支持，提升稀疏注意力模型推理速度 | **CLOSED** | ✅ 已合入主分支 |
| [#28278](https://github.com/ggerganov/llama.cpp/pull/28278) | 修复每次 commit 都全量重建的问题 | **CLOSED** | ✅ 已合入 |
| [#27207](https://github.com/ggerganov/llama.cpp/pull/27207) | 修复 fit 命令中 MTP 层位置计算错误 | **OPEN** | 🔧 正在讨论中 |
| [#27858](https://github.com/ggerganov/llama.cpp/pull/27858) | 修复 CUDA 上 DFlash2 + tensor-split 模式断言失败 | **OPEN** | 🔧 需验证 |
| [#28348](https://github.com/ggerganov/llama.cpp/pull/28348) | Vulkan coopmat1 f16b kernel 实现优化 | **OPEN** | 🔧 代码审查中 |
| [#28339](https://github.com/ggerganov/llama.cpp/pull/28339) | CUDA/HIP 推导 MMVQ nwarps 参数，修复 RDNA3.5 通用代码对象问题 | **OPEN** | 🔧 针对 #25620 |
| [#27633](https://github.com/ggerganov/llama.cpp/pull/27633) | OpenCL 扩展 unary 与数据移动运算支持（sgn, elu 等） | **OPEN** | 🔧 功能增强中 |
| [#27311](https://github.com/ggerganov/llama.cpp/pull/27311) | 实现 UMA ring buffer 机制 + 调度器防御性修复 | **CLOSED** | ✅ 已合入 |
| [#28346](https://github.com/ggerganov/llama.cpp/pull/28346) | mmproj 动态交换 draft 权重机制，节省显存 | **OPEN** | 🔧 内存优化亮次 |
| [#28341](https://github.com/ggerganov/llama.cpp/pull/28341) | Vulkan 针对 Imagination PowerVR 增加共享内存归约方案 | **OPEN** | 🔧 兼容性适配 |

---

## 5. 功能需求趋势

从当前 Issue 提交频率和内容可归纳以下开发者关注的功能方向：

- **多媒体推理支持加强**：继续关注音视频编码线程相关 Bug，如 mtmd 框架中涉及图像解码、tokenization 等模块的问题。
- **异构平台适配稳定性**：Android/Vulkan、SYCL、ROCm/HIP、OpenVINO 等平台适配仍是热点，尤其是在手机嵌入式 GPU 或新一代加速芯片上的兼容性。
- **Speculative Decoding 稳定性提升**：MTP / Draft 模式在并发测试中遇到 race condition 与边界输出错误，亟需加固机制。
- **模型格式与架构扩展**：新增对 HY-V4、Tencent Hy4 等模型结构的支持；同时对 MoE 类模型进行拆分加载与流式处理探索。
- **集成开发工具链支持**：部分 PR 开始关注 CMake 构建优化、CI 镜像标签规范化（SemVer）等 DevOps 改进。

---

## 6. 开发者关注点

开发者社区反馈聚焦以下几类痛点：

- **跨平台一致性差异**：Vulkan 在不同厂商 GPU 上的行为差异频繁触发断言崩溃，尤其是 Intel 与 Imagination 平台。
- **硬件特性检测不准确**：如 MSVC 未正确启用 AVX-VNNI，影响 Windows 上 CPU 推理效率。
- **调试工具不足**：多数 Bug 依赖用户自行复现，缺乏自动化测试覆盖。
- **资源调度失衡**：MTP 推理中多卡/多线程情况下存在数据写入冲突，需引入同步机制。
- **文档与示例更新滞后**：部分 PR 虽功能完善，但缺少对应文档或演示脚本，影响引入门槛。

---

> 本报告数据来源于 GitHub API 渲染结果，旨在帮助技术开发者快速把握 llama.cpp 社区动态脉搏。

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*