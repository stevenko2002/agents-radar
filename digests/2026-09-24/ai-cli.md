# AI CLI 工具社区动态日报 2026-09-24

> 生成时间: 2026-09-23 22:15 UTC | 覆盖工具: 12 个

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



以下是今日（2026-09-24）各主流 AI 工具的**重要更新摘要**：

*   **llama.cpp 发布 v0.5.0 正式版**：迎来重大版本更新，集成 ggml 0.25.0 后端优化，提升了 server/router 的稳健性，并新增了对 HRM-Text 等模型的支持。
    🔗 https://github.com/ggml-org/llama.cpp/releases/tag/v0.5.0
*   **Claude Code 发布 v2.1.281**：增强了 Claude Apps Gateway 对 Desktop 新版密钥策略的支持（新增 `blockReadsOutsideWorkingDirectories` 和 `disableBypassPermissionsMode` 配置），并为 Bedrock 上游添加了 `assume_role` 身份切换能力。
    🔗 https://github.com/anthropics/claude-code/releases/tag/v2.1.281
*   **OpenAI Codex 发布 rust-v0.156.1 稳定版**：在模型选择器中正式上线 GPT-6 Sol 与 GPT-6 Luna 模型，并将限流切换提示默认推荐 GPT-6 Luna。
    🔗 https://github.com/openai/codex/compare/rust-v0.156.0...rust-v0.156.1
*   **GitHub Copilot CLI 发布 v1.0.89-1**：新增 GPT-6 Sol / Luna 模型选项，并修复了视图工具行范围与本地会话输入队列问题。
    🔗 https://github.com/github/copilot-cli/releases/tag/v1.0.89-1
*   **Gemini CLI 发布 nightly v0.62.0-nightly.20260923**：新增对 Gemini 3.8 Flash 和 Gemini 3.5 Flash Lite 模型的支持，将其作为 Flash 级别的最新 GA 默认模型。
    🔗 https://github.com/google-gemini/gemini-cli/compare/v0.62.0-nightly.20260922.gd5b3e3acc...v0.62.0-nightly.20260923.g62364cb20
*   **Ollama 发布 v0.34.4-rc0 候选版**：修复了服务端间歇性出现的 "model not found" 错误，并优化了 thinking 模型在结构化输出场景下的单次应用处理。
    🔗 https://github.com/ollama/ollama/releases/tag/v0.34.4-rc0
*   **Pi 合并了关键扩展 API PR #9901**：向扩展暴露了 provider 流事件（`onProviderStreamEvent`），允许插件访问厂商专有响应字段，解决了扩展生态的长期痛点。
    🔗 https://github.com/earendil-works/pi/pull/9901
*   **Qwen Code 推出混合代码模式 (Hybrid Code Mode)**：通过 PR #11854 引入了 Codex 风格的 `tools.mode` 枚举（`direct` / `code_mode` / `code_mode_only`），在代码模式下隔离并暴露 exec JavaScript 工具。
    🔗 https://github.com/QwenLM/qwen-code/pull/11854

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills 社区热点报告
**数据截止：2026-09-24 | 数据来源：anthropics/skills**

> ⚠️ **数据说明**：PR 列表虽按评论数排序，但评论数字段均显示 `undefined`（抓取异常），点赞数均为 0。因此热门度排序实际参考了 PR 的创建/更新时间、活跃程度及摘要质量。Issues 数据完整，评论数可信。

---

## 一、热门 Skills 排行

### 1. #1298 — skill-creator 修复：触发词隔离与跨平台兼容
- **作者**：MartinCajiao | **状态**：OPEN | **更新**：2026-09-16
- **功能**：修复 `skill-creator` 的触发词评估（trigger eval）机制——多 worker 命令竞争导致误报漏报、Windows 下 `select()` 管道失败、无关工具中断扫描、运行时失败被误判为"非触发"等。
- **社区热点**：skill-creator 是 Skills 的"元技能"，其评估准确性直接影响所有 Skill 的描述优化。此 PR 修复了"recall=0%"的致命缺陷。
- 🔗 https://github.com/anthropics/skills/pull/1298

### 2. #1771 — proofcore-contract-auditor：智能合约审计与区块链存证
- **作者**：ProofCore-Protocol | **状态**：OPEN | **更新**：2026-09-16
- **功能**：面向 Web3 开发者的 Skill，对 Solidity/Rust 智能合约进行自动静态分析，并将加密审计证明锚定到 TON 公链（ProofCore 零存储 Merkle 协议）。
- **社区热点**：Web3 + AI Agent 的交叉方向，将审计流程自动化并上链存证，概念新颖。
- 🔗 https://github.com/anthropics/skills/pull/1771

### 3. #1742 — mcp-builder 修复：支持 mcp>=2 API 变更
- **作者**：Kuldeeep18 | **状态**：OPEN | **更新**：2026-09-19
- **功能**：修复 `mcp>=2.0.0` 中 `streamablehttp_client` → `streamable_http_client` 的重命名，以及自定义 HTTP headers 的配置方式变更。
- **社区热点**：MCP 生态快速迭代，Skill 工具链需要紧跟上游 SDK 变更。关联 Issue #1668。
- 🔗 https://github.com/anthropics/skills/pull/1742

### 4. #1703 — md2video-audio：Markdown → 带语音的 MP4 视频
- **作者**：70v-Yoyo | **状态**：OPEN | **更新**：2026-09-15
- **功能**：零成本将 Markdown 文档编译为专业级 MP4 视频 + 逼真 AI 语音旁白，工作流：Marp 幻灯片 → 视频合成 → TTS。
- **社区热点**：文档→多媒体的自动化生产，创意类 Skill 的典型代表。
- 🔗 https://github.com/anthropics/skills/pull/1703

### 5. #822 — AWT (AI Watch Tester)：AI 驱动的 E2E 测试
- **作者**：ksgisang | **状态**：OPEN | **更新**：2026-09-19
- **功能**：赋予 Claude 视觉和浏览器控制能力，零代码自动生成 E2E 测试。支持截图验证、网络请求断言、交互操作录制。
- **社区热点**：AI Agent + 测试自动化，解决"写测试"这一开发痛点。
- 🔗 https://github.com/anthropics/skills/pull/822

### 6. #525 — Pyxel：复古游戏开发
- **作者**：kitao | **状态**：OPEN | **更新**：2026-09-22（3 月创建，9 月仍在活跃）
- **功能**：在 Python 中创建、调试和验证复古像素游戏，含 Pyxel 行为、呈现、发版检查等专项参考。
- **社区热点**：长生命周期 PR，游戏开发方向的垂直 Skill，社区持续关注。
- 🔗 https://github.com/anthropics/skills/pull/525

### 7. #514 — document-typography：文档排版质量控制
- **作者**：PGTBoos | **状态**：OPEN | **更新**：2026-03-13
- **功能**：防止 AI 生成文档的排版问题——孤字换行（1-6 词飘到下一页）、 Widow 段落（标题卡在页底）、编号错位。
- **社区热点**：直击 AI 生成文档的通用痛点，适用面极广。
- 🔗 https://github.com/anthropics/skills/pull/514

### 8. #83 — skill-quality-analyzer & skill-security-analyzer（元技能）
- **作者**：eovidiu | **状态**：OPEN | **更新**：2026-01-07（2025 年 11 月创建）
- **功能**：两个元技能——质量分析器从结构/文档/功能/性能/安全五个维度评估 Skill；安全分析器检测权限、数据泄露、供应链风险。
- **社区热点**：Skills 生态自反身治理工具，随着社区 Skill 增多，其价值愈发凸显。
- 🔗 https://github.com/anthropics/skills/pull/83

---

## 二、社区需求趋势

从 Issues 分析，社区最期待的新 Skill 方向按热度排序：

| 方向 | 代表 Issue | 热度 | 核心诉求 |
|------|-----------|------|---------|
| **🔐 安全与信任** | #492（43 评论）、#1175（4 评论） | 🔴 最高 | 社区 Skill 冒充官方 `anthropic/` 命名空间；SharePoint 在线文档的权限与数据泄露风险 |
| **🏢 组织级共享** | #228（16 评论，👍8） | 🟠 高 | Skill 在组织内直接共享，无需手动下载上传 .skill 文件 |
| **🧠 记忆/状态管理** | #1329（10 评论） | 🟠 高 | `compact-memory`——用符号化记法压缩 Agent 长期运行的上下文开销 |
| **🧪 测试工程化** | #556（12 评论，👍7）、#1390（4 评论） | 🟠 高 | Skill 触发词评估机制失效（0% 触发率）；mcp-builder 评估框架对真实服务器打 0 分 |
| **🛡️ Agent 治理** | #412（6 评论）、#1385（4 评论） | 🟡 中 | Agent 行为治理（策略、威胁检测、审计链）；推理质量三道闸门流水线 |
| **🔌 MCP 协议互通** | #16（4 评论） | 🟡 中 | 将 Skill 暴露为 MCP Server，标准化 API 签名 |
| **📚 Skill 工程化** | #202（8 评论）、#189（6 评论，👍9） | 🟡 中 | skill-creator 本身需重写为最佳实践；document-skills 与 example-skills 内容重复 |
| **⚡ 性能优化** | #1487（4 评论） | 🟡 中 | `claude-api` Skill 单次注入 ~156k token，撑爆上下文窗口 |
| **☁️ 多云部署** | #29（4 评论） | 🟢 低 | Skill 在 AWS Bedrock 上的使用方式 |

---

## 三、高潜力待合并 Skills

以下 PR 均为 OPEN 状态、更新时间较近（9 月仍有活跃），且社区价值明确：

| PR | Skill | 为何高潜力 |
|----|-------|-----------|
| **#1776** | `blast-radius` | 2026-09-17 创建，面向批量/破坏性操作前的检查清单（归档用户、删行、批量邮件），填补"查询对≠操作对"的空白，实用性强 |
| **#723** | `testing-patterns` | 覆盖测试哲学（Testing Trophy）、单元测试、React 组件测试的完整测试栈，9 月 21 日仍在更新 |
| **#1792 / #1790** | docx 修复（两个） | 分别修复 LibreOffice 超时误报成功、缺失 `document.xml.rels` 导致评论注入失败，均为高价值 Bug 修复 |
| **#1769** | skill-creator 触发词 recall 修复 | 直接解决 Issue #1721 的"recall=0%"问题，是元技能的关键修复 |
| **#1734** | 检测孤立的 docx 评论 | 9 月 6 日创建，补充 docx 生态的文档质量检查能力 |

---

## 四、Skills 生态洞察

> **当前社区在 Skills 层面最集中的诉求是：从"能不能做"转向"做得安不安全、可不可靠、好不好共享"——即 Skills 工程化治理与信任基础设施的建设。**

具体表现为：① 安全命名空间/权限边界（#492）和组织级共享（#228）是两大最高频诉求；② skill-creator 元技能的评估准确性（#556、#1298、#1769）受到密集关注，说明社区已意识到"创建 Skill 本身也需要好工具"；③ 测试、治理、记忆管理等方向的 Skill 需求正在从"个人效率工具"向"企业级 Agent 基础设施"演进。

---



# Claude Code 社区动态日报 — 2026-09-24

---

## 1. 今日速览

Claude Code 发布 **v2.1.281**，新增 Claude Apps Gateway 对 Desktop 新版密钥策略的支持（`blockReadsOutsideWorkingDirectories`、`disableBypassPermissionsMode`）以及 Bedrock 上游的 `assume_role` 能力。社区层面，IDE 环境变量警告反复弹出（#3301，48 条评论、73 👍）成为最受关注的持续性问题；Windows/MSIX 平台的 `git fsmonitor` 进程残留阻塞版本更新（#91763）也引发了较多讨论。多个 PR 聚焦于遥测数据完整性、安全审查边界和 diff 工具的 ANSI 转义序列修复。

---

## 2. 版本发布

### v2.1.281

| 更新项 | 说明 |
|---|---|
| **Claude Apps Gateway — Desktop 策略块增强** | 支持新版 Claude Desktop 密钥的 `desktop` 策略块，新增 `blockReadsOutsideWorkingDirectories` 和 `disableBypassPermissionsMode` 两个配置项，强化工作目录外的读取控制与权限绕过防护 |
| **Bedrock 上游支持 `assume_role`** | Gateway 调用 Bedrock 时可切换为 IAM 角色身份，便于跨账户/角色的 AWS 资源访问 |

> 🔗 https://github.com/anthropics/claude-code/releases/tag/v2.1.281

---

## 3. 社区热点 Issues（Top 10）

### 🔴 #3301 — Environment Contributions 警告持续弹出
- **标签**: `bug`, `area:ide` | **评论**: 48 | **👍**: 73
- **摘要**: 每次打开 Cursor 或 VSCode 时，集成终端都会反复显示「The following extensions want to relaunch the terminal to contribute to its environment: Claude Code」警告，用户必须手动确认，无法通过配置彻底关闭。
- **为何重要**: 这是 Claude Code 在主流 IDE 中最令人困扰的体验问题之一，直接影响日常开发效率。73 个👍 和 48 条评论说明社区共识强烈。
- **状态**: OPEN，已持续约两个月，尚未看到官方修复。
> 🔗 https://github.com/anthropics/claude-code/issues/3301

### 🔴 #91763 — Windows/MSIX: `git fsmonitor--daemon` 阻塞版本更新
- **标签**: `bug`, `platform:windows`, `area:desktop` | **评论**: 14 | **👍**: 1
- **摘要**: Claude Code 生成的 `git fsmonitor--daemon` 进程继承了 AppX 容器的 job 对象，在强制关闭更新后仍存活，导致新版本启动时报 `0x80070020`（访问被拒绝）。作者已提供无需重启的临时方案。
- **为何重要**: 直接阻塞 Windows 用户的版本升级路径，属于平台特定的严重可用性问题。
> 🔗 https://github.com/anthropics/claude-code/issues/91763

### 🟠 #79664 — Skill frontmatter 中的 `model` 覆盖在通过 Skill 工具调用时被忽略
- **标签**: `bug`, `regression`, `area:skills` | **评论**: 5 | **👍**: 1
- **摘要**: 当 Claude 通过 Skill 工具调用 skill 时，skill frontmatter 中指定的 `model` 覆盖配置不生效；但用户手动输入 `/skill-name` 时正常。这是一个回归问题。
- **为何重要**: Skill 系统是 Claude Code 的核心扩展机制，模型覆盖失效会影响大量 skill 的预期行为。
> 🔗 https://github.com/anthropics/claude-code/issues/79664

### 🟠 #74544 — 1M 上下文会话因 ECONNRESET 变得不可恢复
- **标签**: `bug`, `platform:macos`, `area:networking`, `api:anthropic` | **评论**: 4 | **👍**: 0
- **摘要**: 约 52 万 token 的大型会话在 prompt cache 冷却后，发送请求时反复遇到 `ECONNRESET` 错误；更严重的是 `/compact` 命令本身也失败（因为压缩需要发送完整上下文），导致会话彻底无法恢复。
- **为何重要**: 对于使用长上下文的高级用户，这意味着一个网络抖动就可能永久丢失工作会话，属于数据可用性的严重缺陷。
> 🔗 https://github.com/anthropics/claude-code/issues/74544

### 🟠 #79815 — 极端内存泄漏：每小时消耗 2,108,208 MB
- **标签**: `bug`, `area:core` | **评论**: 1 | **👍**: 1
- **摘要**: 用户报告 Claude Code 出现极端内存泄漏，每小时消耗约 2 TB 内存。虽然报告细节不够充分，但量级本身就说明问题严重。
- **为何重要**: 内存泄漏是 Claude Code 进程级稳定性的底线问题，若属实需要紧急排查。
> 🔗 https://github.com/anthropics/claude-code/issues/79815

### 🟠 #79811 — Plan mode 的只读保证未在 Agent 工具派生的子 agent 中强制执行
- **标签**: `bug`, `area:agents`, `area:permissions` | **评论**: 1 | **👍**: 1
- **摘要**: 当主 agent 在 Plan mode 下通过 Agent 工具派生子 agent 时，子 agent 不受只读限制，可能执行写操作，破坏了 Plan mode 的安全保证。
- **为何重要**: 涉及权限边界的安全问题。Plan mode 的设计意图是让 Claude 只读不写，子 agent 绕过此限制会直接导致意外修改。
> 🔗 https://github.com/anthropics/claude-code/issues/79811

### 🟡 #79744 — 交互式 LSP 客户端在 Edit 工具写入后不发送 `didChange`
- **标签**: `bug`, `area:tools`, `area:plugins` | **评论**: 1 | **👍**: 0
- **摘要**: LSP 插件在 Claude 使用 Edit/MultiEdit 工具修改文件后，不会向 LSP 服务器发送 `didChange` 通知，导致服务器端缓冲区内容冻结在首次查询时的状态。无头模式（`-p`）下同步正常。
- **为何重要**: LSP 集成是 IDE 扩展的核心能力，代码分析、自动补全、诊断等功能都会因此失效。
> 🔗 https://github.com/anthropics/claude-code/issues/79744

### 🟡 #79787 — Edit/MultiEdit 仅在手动确认时失败，自动接受时正常
- **标签**: `bug`, `area:tools`, `area:ide` | **评论**: 1 | **👍**: 0
- **摘要**: VSCode 扩展在 Windows 上，Edit/MultiEdit 仅在用户手动确认时报告「String not found in file」，使用 auto-accept 模式时正常。疑似权限确认流程中文件状态不一致。
- **为何重要**: 这是典型的交互路径相关 bug，影响 VSCode + Windows 用户的日常编辑流程。
> 🔗 https://github.com/anth

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>



# OpenAI Codex 社区动态日报 — 2026-09-24

---

## 1. 今日速览

Codex CLI 于今日发布 **v0.156.1**，正式在模型选择器中上线 **GPT-6 Sol** 与 **GPT-6 Luna**，并将限流切换提示默认推荐 Luna。与此同时，社区在过去 24 小时内集中反馈了多个平台级 Bug，涵盖 Windows 桌面端消息阻塞、上下文压缩状态丢失、VS Code Remote-SSH 残留进程等问题，以及对 CLI 原生 Computer Use 支持的强烈呼吁。

---

## 2. 版本发布

### rust-v0.156.1（稳定版）

| 项目 | 内容 |
|---|---|
| **新功能** | 模型选择器新增 **GPT-6 Sol** 与 **GPT-6 Luna**；限流切换提示默认推荐 GPT-6 Luna |
| **Issue** | #47405 |
| **Changelog** | https://github.com/openai/codex/compare/rust-v0.156.0...rust-v0.156.1 |

> 此外，还有多个 alpha 版本在并行推进（0.158.0-alpha.2~5、0.157.0-alpha.11、0.155.0-alpha.16.3~4），但均未附带具体变更说明，推测为内部测试与稳定性迭代。

---

## 3. 社区热点 Issues（Top 10）

### 🔴 #45626 — Windows 桌面端完成首轮后后续消息被禁用
- **标签**: `bug` `windows-os` `app` `app-server`
- **评论**: 29 | 👍 5
- **摘要**: Windows 上 Codex Desktop `26.908.70816` 在首个 turn 完成后，无论是新会话还是已有会话，Send 按钮均保持灰显，无法发送后续消息（CLI 不受影响）。
- **重要性**: 阻断性体验问题，影响 Windows 用户核心交互流程。
- 🔗 https://github.com/openai/codex/issues/45626

### 🔴 #20851 — CLI 原生 Computer Use 支持（功能请求）
- **标签**: `enhancement` `mcp` `CLI` `computer-use`
- **评论**: 17 | 👍 **39**
- **摘要**: Computer Use 目前仅作为桌面端/应用插件暴露，CLI 用户无法以一等公民方式调用。当前实现是一个打包的 MCP helper，请求将其提升为 CLI 原生能力。
- **重要性**: 获得社区最高点赞数，反映 CLI 用户对自动化桌面操作的强烈需求。
- 🔗 https://github.com/openai/codex/issues/20851

### 🔴 #15368 — VS Code 插件会话数上限提升
- **标签**: `enhancement` `extension`
- **评论**: 18 | 👍 6
- **摘要**: 用户反馈 VS Code 插件本地会话数量存在硬性上限，请求提高或取消限制。
- **重要性**: 重度 VS Code 用户的高频痛点，影响多任务并行工作流。
- 🔗 https://github.com/openai/codex/issues/15368

### 🔴 #25792 — 上下文压缩遗忘 AGENTS 规则，任务进度从 97% 跳回 42%
- **标签**: `bug` `model-behavior` `context` `app`
- **评论**: 18 | 👍 2
- **摘要**: 长任务中自动上下文压缩会丢失 AGENTS 规则上下文，导致模型行为回退，任务进度严重倒退。
- **重要性**: 直接影响长任务可靠性，是核心体验缺陷。
- 🔗 https://github.com/openai/codex/issues/25792

### 🟡 #41849 — VS Code Remote-SSH 断连后残留 app-server 阻塞新会话
- **标签**: `bug` `extension` `session` `app-server` `remote`
- **评论**: 12 | 👍 13
- **摘要**: Remote-SSH 断连后旧 app-server 仍持有 thread writer，新会话被 "This is open in another app" 阻塞。
- **重要性**: 影响远程开发场景，点赞数较高说明涉及用户较广。
- 🔗 https://github.com/openai/codex/issues/41849

### 🟡 #15643 — Remote MCP 作用域提取逻辑缺陷
- **标签**: `bug` `auth` `mcp` `remote`
- **评论**: 11 | 👍 17
- **摘要**: `scopes_supported` 应从受保护资源元数据文档中提取，当前实现存在逻辑偏差。
- **重要性**: 企业级 MCP 集成的认证正确性问题，高点赞反映企业用户关注。
- 🔗 https://github.com/openai/codex/issues/15643

### 🟡 #35935 — Windows 上下文压缩丢失任务状态，耗尽周用量
- **标签**: `bug` `windows-os` `rate-limits` `context` `app` `subagent`
- **评论**: 15 | 👍 0
- **摘要**: Windows 端上下文压缩后任务状态丢失，模型重复已完成工作，导致周用量快速耗尽。
- **重要性**: 与 #25792 同源但平台特定，涉及用量经济性问题。
- 🔗 https://github.com/openai/codex/issues/35935

### 🟡 #46110 — Linux 沙箱拒绝 snapd 生成的有效 nsfs 挂载根
- **标签**: `bug` `sandbox` `CLI`
- **评论**: 13 | 👍 1
- **摘要**: Ubuntu snapd 创建的 `/proc/self/mountinfo` 中 nsfs 条目被误判为非绝对路径，导致沙箱命令直接失败。
- **重要性**: 影响原生 Ubuntu CLI 用户，属于环境兼容性问题。
- 🔗 https://github.com/openai/codex/issues/46110

### 🟡 #46388 — Windows CLI 0.155.0 沙箱初始化回归
- **标签**: `bug` `windows-os` `sandbox` `CLI` `app`
- **评论**: 12 | 👍 3
- **摘要**: CLI 0.155.0 在运行时路径验证阶段提权沙箱初始化失败，0.154.0 正常。
- **重要性**: 版本回归问题，影响 Windows CLI 沙箱功能可用性。
- 🔗 https://github.com/openai/codex/issues/46388

### 🟡 #44363 — 上下文压缩原地重写 rollout，永久破坏对话记录
- **标签**: `bug` `context` `app` `session` `app-server`
- **评论**: 10 | 👍 0
- **摘要**: 上下文压缩时直接覆写存储的 rollout 文件，导致对话 transcript 永久丢失。
- **重要性**: 数据安全类问题，一旦触发不可逆，严重程度高。
- 🔗 https://github.com/openai/codex/issues/44363

---

## 4. 重要 PR 进展（Top 10）

> 以下 PR 均由 `copyberry[bot]` 提交并已合并（CLOSED），属于批量自动化开发流程。

| PR | 标题 | 核心内容 |
|---|---|---|
| **#47679** | Add extension hooks for model requests and response streams | 新增 `ModelRequestContributor` 与 `ModelResponseInterceptor` 扩展 API，允许插件注入元数据并拦截模型响应流 |
| **#47677** | Support model catalog overrides for MCP resource tool specs | 允许模型目录为 MCP 资源工具（`list_mcp_resources` 等）提供模型特定的描述和参数 schema |
| **#47663** | Preserve managed network policy in route-aware transports | 修复默认 transport 回退时绕过托管网络策略的问题，引入 `RouteAwareClientPool` |
| **#47662** | Expose tool dispatch and timing observations to extensions | 新增 `on_tool_dispatch` 与 `on_tool_timing` 回调，使扩展能感知被拒绝的工具调用及取消时的耗时 |
| **#47657** | Restrict the default Bedrock GovCloud model catalog | 为 Bedrock GovCloud 端点定制专用默认目录，仅含 GPT-5.6 Terra/Luna/GPT-5.4，默认 Terra |
| **#47641** | Honor Retry-After and preserve server retry deadlines | HTTP 重试逻辑改为解析服务端 `Retry-After` 头部，相对重试延迟计入错误传播耗时 |
|

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>



# Gemini CLI 社区动态日报 (2026-09-24)

> **数据来源**: [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) | 数据截止时间：2026-09-23

---

### 1. 今日速览

今日 Gemini CLI 社区动态活跃，核心聚焦于**模型升级**与**核心稳定性修复**。 nightly 版本正式引入了对 Gemini 3.8 Flash 和 3.5 Flash Lite 的支持，大幅强化了端侧及快速推理管线。同时，社区针对 Agent 挂起、子代理行为误导、以及 Auto Memory 安全性等问题展开了深度讨论；开发团队也针对配置安全（如非信任目录下配置被清空）、长循环内存溢出等高优先级（P1）缺陷进行了集中修复。

---

### 2. 版本发布

#### `v0.62.0-nightly.20260923.g62364cb20`
*   **核心更新**：新增对 **Gemini 3.8 Flash** (`gemini-3.8-flash`) 和 **Gemini 3.5 Flash Lite** (`gemini-3.5-flash-lite`) 模型的支持，将其作为 Flash 和 Flash Lite 级别的最新 GA 默认模型。（来源 PR: [#29443](https://github.com/google-gemini/gemini-cli/pull/29443)）
*   **Changelog**: [对比链接](https://github.com/google-gemini/gemini-cli/compare/v0.62.0-nightly.20260922.gd5b3e3acc...v0.62.0-nightly.20260923.g62364cb20)

---

### 3. 社区热点 Issues（Top 10）

社区在过去 24 小时内讨论了 50 个 Issue，以下是评论和互动最集中的 10 个关键议题：

#### 1. [P1 Bug] 通用 Agent 无条件挂起 (#21409)
*   **摘要**: 用户反馈，一旦 Gemini CLI 委托给通用 Agent（如执行简单的文件夹创建），整个会就会无限期挂起（长达一小时）。 instruct 明确不使用子代理可解决此问题。
*   **社区反应**: 8 👍，8 条评论。这是一个极高的 P1 级 UX 阻塞问题，目前状态为 `status/need-retesting`。
*   **链接**: [Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)

#### 2. [P1 Bug] 子代理达到 MAX_TURNS 后仍报告 GOAL 成功 (#22323)
*   **摘要**: `codebase_investigator` 子代理在耗尽最大轮次（MAX_TURNS）前未完成分析，但其返回的状态依然是 `status: "success"` 且终止原因为 `"GOAL"`，掩盖了中断事实。
*   **社区反应**: 2 👍，13 条评论。社区认为这会导致父代理对子代理的产出产生误判。
*   **链接**: [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)

#### 3. [P2 Enhancement] 利用模型的 Bash 亲和力进行零依赖沙盒与后执行意图路由 (#19873)
*   **摘要**: 提案指出 Gemini 3 模型天然倾向于使用标准 POSIX 工具链（如 `grep`, `sed`）。建议设计一套零依赖 OS 沙盒，结合后执行意图路由，在保障安全的前提下最大化释放模型的原生 Bash 能力。
*   **社区反应**: 1 👍，9 条评论。属于大型特性规划（`effort/large`）。
*   **链接**: [Issue #19873](https://github.com/google-gemini/gemini-cli/issues/19873)

#### 4. [P2 Bug] Gemini CLI 主动使用 Skills 和

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



# GitHub Copilot CLI 社区动态日报
**日期：2026-09-24** | 数据来源：[github.com/github/copilot-cli](https://github.com/github/copilot-cli)

---

## 1. 今日速览

Copilot CLI 发布 **v1.0.89-1**，新增 GPT-6 Sol / Luna 模型选项，并修复了视图工具行范围与输入队列问题。社区层面，HTTP/2 连接池竞态条件（#2421，19 👍）与 DeepSeek API 兼容性（#2995，9 👍）成为最受关注的存量问题，同时自定义模型端点、Agent 工具绑定、认证刷新等方向的需求持续升温。

---

## 2. 版本发布

### v1.0.89-1（过去 24 小时内发布）

| 类别 | 内容 |
|------|------|
| **新增** | 将 **GPT-6 Sol** 与 **GPT-6 Luna** 添加至模型选择器（可用时展示） |
| **修复** | 视图工具（View tool）现在遵守提供方发送的扁平化 `view_range` 参数中的行范围 |
| **修复** | 本地会话中，空聊天输入按 `↑` 可召回挂起消息，且不丢失队列中的提示词 |

> 🔗 [Release v1.0.89-1](https://github.com/github/copilot-cli/releases/tag/v1.0.89-1)

---

## 3. 社区热点 Issues（精选 10 条）

### 🔴 #2421 — HTTP/2 GOAWAY 竞态条件导致级联重试失败
- **状态**：CLOSED | **👍**：19 | **评论**：8
- **摘要**：CLI 的 undici HTTP/2 连接池在处理服务端 GOAWAY 帧时存在竞态条件，导致在途请求状态不变量被破坏，引发大量静默重试和高额 premium 请求浪费。
- **为何重要**：直接影响网络稳定性与 API 成本，是长期存在的底层网络问题。
- **社区反应**：19 个赞表明这是高优先级痛点，已整合了 #1743、#1754 等多个相关 issue。

### 🔴 #2995 — 无法使用 DeepSeek API
- **状态**：CLOSED | **👍**：9 | **评论**：9
- **摘要**：通过 `COPILOT_PROVIDER_BASE_URL`、`COPILOT_PROVIDER_TYPE="openai"` 等环境变量配置 DeepSeek 端点后，CLI 仍无法正常调用。
- **为何重要**：阻碍用户接入高性价比的第三方模型，限制 provider 选择自由度。
- **社区反应**：9 个赞 + 9 条评论，社区对多 provider 支持有强烈需求。

### 🟡 #4535 — `store_memory` 在 v1.0.81 预发布版中失败
- **状态**：CLOSED | **评论**：10
- **摘要**：记忆写入工具在未提供必需 instance ID 的情况下被调用，导致 `Instance id is required` 报错。
- **为何重要**：context-memory 是 Agent 核心能力之一，此 bug 直接阻断记忆功能。

### 🟡 #4847 — 托管设置自动刷新破坏 IDE MCP 重载
- **状态**：OPEN | **👍**：3 | **评论**：4
- **摘要**：长时运行的 CLI 会话中，自动托管设置刷新可能在重载 IDE MCP 服务器时失败，并连带禁用 `/allow-all`。
- **为何重要**：影响 IDE 集成场景下的 MCP 工作流稳定性。

### 🟡 #4663 — 压缩失败后无退避、无限重试
- **状态**：OPEN | **评论**：3
- **摘要**：当压缩模型调用失败后，CLI 会在后续每个 turn 重试完全相同的请求，无退避、无回退、无用户可见错误，每次重试均为完整计费调用，导致上下文单调增长。
- **为何重要**：直接造成 API 成本失控和上下文膨胀，属于高影响性能/成本 bug。

### 🟡 #4929 — 进程本地认证 token 停止刷新
- **状态**：OPEN | **评论**：3
- **摘要**：长时运行的 CLI 进程永久丢失认证，所有提示和 `/ask` 均返回授权错误，`/login` 无法恢复，需重启才能恢复操作。
- **为何重要**：认证可靠性是 CLI 可用性的基石，此问题导致长时会话不可用。

### 🟡 #4003 — 支持自定义模型端点（同 VS Code）
- **状态**：OPEN | **评论**：4
- **摘要**：请求为 CLI 添加 VS Code 中已有的自定义模型端点配置能力，以支持本地/私有模型开发测试。
- **为何重要**：企业用户与本地模型开发者的核心需求，社区呼声较高。

### 🟡 #4594 — 自定义 Agent `web`/`search` 工具别名绑定零工具
- **状态**：OPEN | **👍**：1 | **评论**：2
- **摘要**：在 CLI 1.0.81-9 中，自定义 Agent 使用文档记载的 `web` 或 `search` 类别别名时，绑定工具数为零，静默禁用网页与文件搜索能力。
- **为何重要**：直接破坏自定义 Agent 的核心能力，且无任何错误提示。

### 🟡 #2682 — 后台长时运行命令需在 UI 中展示实时输出
- **状态**：OPEN | **👍**：4 | **评论**：2
- **摘要**：Agent 执行长时运行的 shell 命令（如 `dotnet test`）时，用户无任何可见反馈，会话看似冻结。
- **为何重要**：严重影响长任务的可观察性与用户体验。

### 🟡 #4844 — `--yolo` 启动标志被预认证窗口吞掉
- **状态**：OPEN | **评论**：4
- **摘要**：交互式启动时，CLI 在预认证窗口内应用托管设置的 fail-closed 策略，导致 `--yolo`/`--allow-all` 标志在该窗口内被应用后，策略解析后不再重新应用。
- **为何重要**：影响权限管理与自动化启动流程的可靠性。

---

## 4. 重要 PR 进展

> ⚠️ 过去 24 小时内仅有 **1 条** PR 更新。

| PR | 标题 | 状态 | 内容 |
|----|------|------|------|
| [#4948](https://github.com/github/copilot-cli/pull/4948) | Update github-script action pin | OPEN | 将 `actions/github-script` 依赖刷新至 v9.0.0 提交；仓库无运行时依赖清单，其余 GitHub Actions pin 已检查，`actions/stale` 已为最新；`git diff --check` 通过。 |

---

## 5. 功能需求趋势

从近期 Issues 中可提炼出以下社区关注方向：

| 方向 | 代表 Issue | 关注度 |
|------|-----------|--------|
| **多模型 / Provider 支持** | #2995（DeepSeek）、#4003（自定义端点）、v1.0.89-1（GPT-6 Sol/Luna） | ⭐⭐⭐⭐⭐ |
| **Agent 与工具链完善** | #4594（web/search 工具）、#2261（FLEET customAgents）、#2533（阻塞命令） | ⭐⭐⭐⭐⭐ |
| **网络与连接稳定性** | #2421（HTTP/2 GOAWAY）、#4929（认证刷新）、#4901（MCP OAuth） | ⭐⭐⭐⭐ |
| **成本与性能控制** | #4663（无限重试）、#2827（速率限制 UI）、上下文压缩 | ⭐⭐⭐⭐ |
| **IDE / MCP 集成** | #4847（MCP 重载）、#4512（本地 stdio MCP） | ⭐⭐⭐⭐ |
| **认证与授权** | #4929（token 刷新）、#4844（--yolo 被吞）、#4521（Sandbox 禁用） | ⭐⭐⭐⭐ |
| **终端体验与 UX** | #4843（Warp 配色）、#2682（后台输出）、#4213（键事件丢失）、#3779（快捷键） | ⭐⭐⭐ |
| **语音模式** | #4667、#4814（Voice 安装 401 失败） | ⭐⭐ |

---

## 6. 开发者关注点总结

1. **认证可靠性**：进程内 token 静默失效且 `/login` 无法恢复（#4929），长时运行会话的认证生命周期管理亟待加强。
2. **多模型生态**：DeepSeek 等第三方 provider 兼容性（#2995）与自定义端点（#4003）是社区最迫切的功能缺口。
3. **Agent 工具完整性**：自定义 Agent 的 `web`/`search` 工具别名静默失效（#4594），FLEET 忽略 `customAgents`（#2261），工具绑定层存在一致性漏洞。
4. **网络层健壮性**：HTTP/2 GOAWAY 竞态条件（#2421）导致级联失败和成本浪费，需要从根本上修复连接池状态机。
5. **成本失控风险**：压缩失败后无限重试（#4663）且无退避策略，可能造成大量无效计费调用。
6. **IDE 集成稳定性**：托管设置刷新可能破坏 MCP 重载（#4847），影响 IDE 场景下的工作流连续性。
7. **配置灵活性**：`--config-dir` 行为不符合预期（#2197）、Sandbox 配置与实际状态不一致（#4521），配置系统需要更严格的双向一致性校验。
8. **语音模式可用性**：Voice 运行时安装在内部 NuGet feed 遇到 401（#4667、#4814），需修复认证或提供替代安装路径。

---

*📅 报告生成时间：2026-09-24 | 数据截止：过去 24 小时内的 GitHub 活动*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>



根据您提供的 GitHub 数据，以下是 **2026-09-24 Kimi Code CLI 社区动态日报**。由于过去 24 小时内数据量较小（无新版本、无 PR、仅 2 条 Issue 更新），本报告将基于实际数据进行精简呈现。

---

### 1. 今日速览
今日 Kimi Code CLI 社区整体较为平静，无新版本发布或 Pull Request 动态。社区焦点集中在两个关键 Issue 上：一个是关于 Agent 在 Yolo（无人值守）权限模式下因符号链接处理不当导致误删除用户会话数据的安全问题（#2596）；另一个是关于生成过程中突发授权失败已关闭的 Bug 报告（#1547）。

---

### 2. 版本发布
*无。过去 24 小时内无新版本发布。*

---

### 3. 社区热点 Issues
*（注：过去 24 小时仅更新 2 条 Issue，以下为全部重点内容）*

*   **#2596 [OPEN] Agent ran rm -rf on a pre-existing directory outside the workspace, deleting user session data**
    *   **摘要**：用户反馈在 Yolo 权限模式下，Agent 试图清理其创建的符号链接时，因 `ln -sfn` 命令执行失败未被察觉，最终误对工作区外的真实目录执行了 `rm -rf`，导致用户会话数据丢失。
    *   **重要性**：高。直接关系到 Agent 的安全边界与高危命令（如 `rm -rf`）的执行逻辑。
    *   **社区反应**：目前有 1 条评论，0 个赞。开发者正关注符号链接失败后的回滚与防御机制。
    *   **链接**：[MoonshotAI/kimi-cli#2596](https://github.com/MoonshotAI/kimi-cli/issues/2596)

*   **#1547 [CLOSED] [bug] Repeated error for "Authorization failed, please check your login status" mid generation**
    *   **摘要**：用户在使用 Kimi Code CLI v1.24.0（Linux 平台）进行代码生成时，频繁遭遇“Authorization failed”错误，导致生成中断。
    *   **重要性**：中。影响长任务生成的连续性与用户体验。
    *   **社区反应**：已关闭，0 评论，0 赞。
    *   **链接**：[MoonshotAI/kimi-cli#1547](https://github.com/MoonshotAI/kimi-cli/issues/1547)

---

### 4. 重要 PR 进展
*无。过去 24 小时内无更新的 Pull Request。*

---

### 5. 功能需求趋势
从近期 Issue 中可以看出，社区和开发者的核心关注点集中在：
*   **安全执行与沙箱隔离**：开发者高度关注 Agent 在自动化模式下的操作边界，尤其是如何防止 `rm -rf` 等破坏性命令误伤工作区外的用户数据。
*   **运行时稳定性与容错**：期望 Agent 在面对符号链接异常、网络波动或授权失效等突发情况时，能具备更好的自主恢复和报错提示能力，而非直接执行危险操作。

---

### 6. 开发者关注点
*   **高权限模式的安全性**：开发者对 Yolo 模式下的权限控制非常敏感，期望能增加“高危命令二次确认”或“严格路径锁”等机制。
*   **会话与认证的持久性**：在长周期任务中，如何优雅处理 Token 刷新或临时的授权失效，避免生成任务戛然而止，是开发者的重要痛点。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报（2026-09-24）

> 数据来源：github.com/anomalyco/opencode

---

## 一、今日速览

今日无新版本发布，社区讨论集中在**账号/计费异常**与 **V2 迁移回归**两类问题上：免费额度报错、订阅找不到、支付被拒等 Issue 持续高热。同时，仓库出现了一轮**大规模自动化 PR 清理**——过去 24 小时更新的 20 个高评论 PR 中有 19 个被 `automated-pr-cleanup` 批量关闭，反映出维护者正在收缩历史积压、聚焦当前主线。

---

## 二、版本发布

过去 24 小时无新 Release。

---

## 三、社区热点 Issues（Top 10）

1. **[#49433](https://github.com/anomalyco/opencode/issues/49433) OPEN — 免费额度只能在 OpenCode 内使用（52 评论 / 👍15）**
   用户报所有模型均触发 `Console` 提供方错误。评论数最高，说明该限制策略的触发条件与提示信息对用户极不友好，是今日讨论最集中的问题。

2. **[#988](https://github.com/anomalyco/opencode/issues/988) CLOSED — 通过 OAuth 添加远程 MCP（41 评论 / 👍122）**
   今日最高赞 Issue，提出用 OAuth 2.1 让 MCP 服务器只需填 URL 即可完成授权，避免明文密钥。虽然已关闭，但 122 个赞表明这是社区最期待的能力之一。

3. **[#19130](https://github.com/anomalyco/opencode/issues/19130) OPEN — Windows ARM64 原生版 TUI 初始化失败（28 评论）**
   `bun:ffi dlopen TinyCC` 报错导致交互式界面无法启动，非交互命令正常。ARM64 Windows 平台可用性问题长期未解，影响面在扩大。

4. **[#45278](https://github.com/anomalyco/opencode/issues/45278) OPEN — 订阅续费支付被拒（22 评论）**
   同一张卡连续使用三个月后突然失败，银行侧确认无异常。计费链路问题直接影响付费用户留存，需优先排查。

5. **[#49365](https://github.com/anomalyco/opencode/issues/49365) OPEN — 升级后 `TypeError: undefined is not an object (evaluating 'a.name')`（10 评论）**
   用户主动附带完整 DEBUG 日志，是今日质量最高的缺陷报告之一，可作为定位升级回归的样本。

6. **[#43596](https://github.com/anomalyco/opencode/issues/43596) OPEN — 可配置重试策略（6 评论 / 👍12）**
   指出 `RETRY_MAX_RETRIES = 5` 硬编码，对长配额窗口的提供方（约 68 秒即放弃）不合理，呼吁开放 `maxRetries / initialDelay / backoffFactor / maxDelay`。

7. **[#50258](https://github.com/anomalyco/opencode/issues/50258) OPEN — [URGENT] DeepSeek-V4.1-Flash 上游反复丢失 prompt cache（5 评论）**
   单工作区约 17 小时内约 50% 计费来自全上下文重读，属于直接烧钱的问题，带 URGENT 标记。

8. **[#50915](https://github.com/anomalyco/opencode/issues/50915) OPEN — `opencode debug config` 明文输出 API Key（5 评论）**
   用户常在共享终端、录屏、结对场景下执行调试命令，凭据泄露风险明确，属安全性问题。

9. **[#41848](https://github.com/anomalyco/opencode/issues/41848) OPEN — LLM 重试无上限，流错误导致无限重试（4 评论）**
   `RETRY_MAX_DELAY` 被设为约 24 天，DeepSeek 流错误时 UI 永久卡在 "Thinking..."，无任何错误反馈，与 #43596 形成同一主题的两面。

10. **[#50775](https://github.com/anomalyco/opencode/issues/50775) OPEN — `Failed to drain Session`：单个畸形 tool result 卡死整个会话（2 评论）**
    桌面版 2.0.12/2.0.14 均可复现，一晚上出现 33 次，受影响会话永久不可用，属会话级可靠性缺陷。

> 其他值得留意：#46235（排队 prompt 提前发送）、#50634（"Emitting" 死循环刷屏）、#48155（TUI 流式 Markdown 列表截断）、#50944（类似 Claude Code 的文件夹作为上下文）。

---

## 四、重要 PR 进展（Top 10）

⚠️ **首要信号**：本批次 20 个高评论 PR 中，19 个标记为 `[automated-pr-cleanup]` 并在 2026-09-23 被**批量关闭**，仅 [#50989](https://github.com/anomalyco/opencode/pull/50989) 仍为 OPEN。以下为被清理的代表性 PR，其内容仍具参考价值：

1. **[#44533](https://github.com/anomalyco/opencode/pull/44533) — VS Code 原生 diff 用于编辑/写入权限审批（已关闭）**
   在 VS Code 集成终端中改用原生 diff 编辑器展示改动，是 IDE 集成方向的重要尝试。

2. **[#44524](https://github.com/anomalyco/opencode/pull/44524) — ACP v2 草案规范支持（已关闭，WIP）**
   按官方迁移指南实现 ACP v2，关系到编辑器生态对接，与 Issue #49630 的 ACP 故障相互呼应。

3. **[#44514](https://github.com/anomalyco/opencode/pull/44514) — 桌面端从 PATH 解析 WSL 中的 OpenCode（已关闭）**
   修复仅识别 `$HOME/.opencode/bin/opencode` 的问题，兼容 npm 全局安装、Nix、Home Manager。

4. **[#44512](https://github.com/anomalyco/opencode/pull/44512) — WSL 探测改用 PATH（已关闭）**
   解决 NixOS 无 `/bin/true` 导致误判需首次运行配置的问题。

5. **[#44492](https://github.com/anomalyco/opencode/pull/44492) — 新增 `disabled_plugins` 配置与插件管理命令（已关闭）**
   关闭 #7687，补齐插件启停的官方入口。

6. **[#44443](https://github.com/anomalyco/opencode/pull/44443) — TUI 选区引用为上下文（已关闭）**
   将选中内容以引用形式插入 prompt，补齐 TUI 交互短板。

7. **[#44438](https://github.com/anomalyco/opencode/pull/44438) — `opencode run --format json` 提前退出修复（已关闭）**
   事件循环在 `session idle` 时过早 break，导致最终 `text`/`step-finish` 丢失。

8. **[#44378](https://github.com/anomalyco/opencode/pull/44378) — 支持 AgentRouter 提供方（已关闭）**
   因 AgentRouter 拒绝默认 AI SDK User-Agent，需特殊处理，属新提供方适配。

9. **[#44356](https://github.com/anomalyco/opencode/pull/44356) — TUI 对 null MCP/theme/input 做防护（已关闭）**
   修复 `Object.entries requires that input parameter not be null` 导致的崩溃。

10. **[#44342](https://github.com/anomalyco/opencode/pull/44342) — TUI 与服务端重建待处理 prompt（已关闭）**
    服务重启会丢失进程内 pending questions/permissions，该 PR 试图让 TUI 与服务端重新对齐。

> 另有 [#44341](https://github.com/anomalyco/opencode/pull/44341)（Bun 客户端断连时释放 SSE 流）、[#44340](https://github.com/anomalyco/opencode/pull/44340)（prompt 结算与事件发布串行化）、[#44343](https://github.com/anomalyco/opencode/pull/44343)（固定 websearch 提供方时对任意提供方启用工具）等同属被清理的高价值修复。

---

## 五、功能需求趋势

- **IDE / 编辑器深度集成**：VS Code 原生 diff（#44533）、文件夹作为上下文（#50944）、多仓库变更追踪（#45498），社区希望 OpenCode 更贴近 Claude Code 式的工程化体验。
- **MCP 与 OAuth 化认证**：以 #988 为代表（👍122），希望以 URL + OAuth 流程取代明文密钥配置。
- **重试与容错策略可配置**：#43596 与 #41848 形成明确组合诉求——既要开放参数，也要有硬上限，避免"永久 Thinking"。
- **模型/提供方兼容性**：NVIDIA NIM 拒绝 `prompt_cache_key`（#49240）、AgentRouter User-Agent、DeepSeek 缓存丢失（#50258），提供方适配仍是持续投入方向。
- **V2 SDK 与工作流编排**：#48356 希望在排队 prompt 上绑定 agent/model/variant，说明用户已在构建更复杂的自动化流水线。
- **安全与合规**：调试命令凭据脱敏（#50915）、OAuth 刷新竞态（#50759）显示安全议题开始进入社区视野。

---

## 六、开发者关注点

1. **V2 迁移回归密集爆发**：模型收藏无法切换（#50969）、桌面端模型选择器消失（#50964）、ACP 自定义提供方加载失败（#49630）、插件工具无法直接调用（#50312），多条均指向 V1→V2 兼容性断裂。
2. **计费与账号体验成为信任风险点**：免费额度限制提示（#49433）、支付被拒（#45278）、订阅找不到（#49867）、无效 API Key（#50991），高频且直接触及付费意愿。
3. **会话级可靠性不足**：`Failed to drain Session` 永久卡死（#50775）、无限重试（#41848）、畸形 tool result 连锁失败，说明错误隔离机制缺失。
4. **平台覆盖不均**：Windows ARM64（#19130）、Windows 并发写 `session.json` 竞态（#47497/#47516，已关闭）反映非 macOS 平台仍是稳定性洼地。
5. **凭据与调试安全**：明文密钥输出（#50915）与 OAuth 刷新竞态（#50759）提示调试便利性与安全性的边界需要重新划定。
6. **流式渲染质量**：TUI Markdown 列表截断（#48155）、toast 破坏输入框（#50962）、重复刷屏（#50634），直接影响日常交互体感。

---

*注：本日报基于给定 GitHub 数据快照生成；过去 24 小时无 Release，PR 侧以自动化清理为主，建议维护者同步说明清理标准以避免社区贡献者困惑。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-09-24

> 数据来源：github.com/badlogic/pi-mono（上游 earendil-works/pi）

---

## 一、今日速览

过去 24 小时**无新版本发布**，社区活动集中在 **Bug 修复收尾与扩展 API 能力补齐**上：剪贴板回归、会话恢复模型错乱、Codex SSE 堆 OOM 等多个高评论 Issue 被关闭。PR 侧最值得关注的是 **向扩展暴露 provider 流事件（#9901）**、**统一图像/分类器模型基础设施（#9948）** 与 **配置 Schema 发布（#9880）**，显示 Pi 正在从"聊天 Agent"向"可扩展平台"演进。

---

## 二、版本发布

过去 24 小时内无 Release。Issues 中多次引用 `0.85.1` / `0.87.0`（commit `95fbc04`）作为当前版本基线。

---

## 三、社区热点 Issues（精选 10 条）

### 1. #9688 [已关闭] 剪贴板复制功能回归失效
- 作者 BroadlyWhitaker | 9 评论 | 👍2
- 为修复 #9618，commit `3349e1db1800` 改变了 OSC 52 复制事件的触发逻辑：原先是"xsel/wl-copy 不可用时"触发，现在变成"不可用**且检测到 SSH 会话**时"才触发，导致容器内用户复制失效。
- **重要性**：典型的"修复一个 bug 引入另一个"回归，影响交互式容器用户，社区反馈强烈。
- https://github.com/earendil-works/pi/issues/9688

### 2. #9361 [开放] Windows 下 shellPath 被非确定性忽略
- 作者 ivvanare | 9 评论
- 加载任意扩展后，`~/.pi/agent/settings.json` 中合法的 `shellPath` 会被静默忽略，回退到 Git Bash 路径，最终甚至执行 WSL 的 `System32\bash.exe`。
- **重要性**：Windows 平台 + 扩展加载组合触发的路径解析缺陷，可复现性受扩展影响，调试困难。
- https://github.com/earendil-works/pi/issues/9361

### 3. #9549 [开放] 全屏模式大 transcript 每帧重渲染，单核跑满
- 作者 EdgewalkerBlue | 8 评论 | 👍1
- Windows Terminal + 2 核环境下，大 transcript 每次 resize 都重新输出整个会话，导致一个核心被占满。由报告者的本地 Pi Agent 协助测量起草。
- **重要性**：性能类问题，直接影响长会话体验，且属于 TUI 架构层面。
- https://github.com/earendil-works/pi/issues/9549

### 4. #5294 [已关闭] 请求超时：llama.cpp 后端超时设置被忽略
- 作者 marco-trovato | 8 评论
- 使用 llama.cpp 作为后端并设置无限超时（`/settings` 中 http timeout = false），慢速大模型仍报超时。
- **重要性**：本地大模型用户的高频痛点，超时配置未贯通到实际请求链路。
- https://github.com/earendil-works/pi/issues/5294

### 5. #5581 [开放·处理中] `pi.sendMessage()` 带 `triggerTurn` 绕过 `before_agent_start`
- 作者 dljsjr | 7 评论 | 👍3
- 自定义消息通过 `_runAgentPrompt` 直接启动 Agent 循环，而非走 `prompt()`，导致 `emitBeforeAgentStart` 被跳过，扩展无法在该钩子中注入上下文。
- **重要性**：扩展 API 一致性缺陷，点赞数高，影响依赖该事件的扩展生态。
- https://github.com/earendil-works/pi/issues/5581

### 6. #9784 [已关闭] 元 Issue：允许扩展访问响应体中的厂商专有字段
- 作者 BroadlyWhitaker | 5 评论
- 指出 `AssistantMessage` 是"普洛克鲁斯忒斯之床"——无法承载各 provider 的专有响应字段，用户反复提出该需求。
- **重要性**：扩展生态的核心阻塞点，已由 PR #9901 回应（见下）。
- https://github.com/earendil-works/pi/issues/9784

### 7. #9075 [开放] 压缩摘要继承会话 thinking level，高 effort 下必触输出上限
- 作者 jaythegeek | 4 评论 | 👍3
- 自适应思考模型（`compat.forceAdaptiveThinking`）上，压缩摘要沿用会话思考级别，而输出预算固定为 `0.8 * reserveTokens`（约 13k），思考 token 计入 `max_tokens`，高 effort 下必然截断。
- **重要性**：涉及长会话压缩可靠性，点赞数较高。
- https://github.com/earendil-works/pi/issues/9075

### 8. #9036 [已关闭] openai-codex SSE 解析器整包缓冲导致堆 OOM
- 作者 RooseveltAdvisors | 5 评论
- 读取 Codex 响应流时以单个字符串缓冲整个响应，触发 V8 `Ineffective mark-compacts near heap limit` 致命错误。环境为 macOS / Node 26.7.0。
- **重要性**：致命级稳定性问题，流式解析未真正流式化。
- https://github.com/earendil-works/pi/issues/9036

### 9. #9966 / #9967 [已关闭] openai-responses 重放 reasoning item id 破坏多轮对话
- 作者 dbcert-cmyk | 各 4 / 3 评论
- 在负载均衡代理（如 Bifrost）后，Pi 在第二轮重放服务端签发的 `reasoning` item id，代理无法定位该 id，返回 `invalid_request_error`。
- **重要性**：多轮对话 + 网关部署场景的典型故障，同日出现两条重复报告，说明影响面广。
- https://github.com/earendil-works/pi/issues/9966

### 10. #9944 [已关闭] TUI 中 `/skill` 自动补全为空
- 作者 ciron-nine | 4 评论
- 输入 `/skill` 后补全面板无任何技能，但技能实际已加载（已用 `pi -ne` 排除扩展干扰）。
- **重要性**：Skill 体系是新功能，自动补全失效直接影响可发现性。
- https://github.com/earendil-works/pi/issues/9944

**其他值得留意**：#9674（Mistral 空 content delta 开启空文本块，影响 GLM 5.x）、#9210（网关下 cacheWrite1h 计费错误，1h 按 5m 计费）、#9863（扩展冷启动 500–1000ms 延迟）、#9972（保存默认模型覆盖全局作用域）、#9886（`clearQueue()` 静默丢弃扩展消息）。

---

## 四、重要 PR 进展（精选 10 条）

### 1. #9901 [已合并] 向扩展暴露 provider 流事件
- 作者 davidbrai
- 新增 `onProviderStreamEvent` 贯穿 pi-ai 与 agent core，并在 coding-agent 扩展中暴露 `provider_stream_event`。
- **意义**：直接关闭 #9784，解决扩展无法访问厂商专有响应字段的长期痛点。
- https://github.com/earendil-works/pi/pull/9901

### 2. #9948 [已合并] 统一图像与分类器模型基础设施
- 作者 mitsuhiko
- 对模型系统做较大改造，使其支持聊天模型之外的模型类型（图像、分类器等）。
- **意义**：为多模态/非对话模型铺路，是架构级变更。
- https://github.com/earendil-works/pi/pull/9948

### 3. #9880 [开放] 发布配置 JSON Schema
- 作者 christianklotz
- 从 TypeBox 契约生成并提交 `models.json`、`settings.json`、`keybindings.json` 及主题的 JSON Schema，保留描述与默认值，并加金标准文件防漂移。
- **意义**：显著改善编辑器补全与配置校验体验。
- https://github.com/earendil-works/pi/pull/9880

### 4. #8398 [开放] 新增颜色值与主题样式 API
- 作者 mitsuhiko
- 大幅重构 TUI 与主题支持，直接暴露颜色值，支持颜色运算并为非终端 UI 预留空间，旧 API 保留兼容。
- **意义**：TUI 可定制性的基础性重构。
- https://github.com/earendil-works/pi/pull/8398

### 5. #9459 [已合并] 恢复会话时优先采用记录的 model_change
- 作者 petrroll
- 修复 #9243：恢复会话时优先使用最后的 `model_change`，仅在无该记录时回退到 assistant 消息中的模型名。
- https://github.com/earendil-works/pi/pull/9459

### 6. #7948 [开放] 延迟扩展运行时重载
- 作者 christianklotz
- 用 fire-and-forget 的 `ctx.requestReload()` 取代 awaited 的 `ctx.reload()`，合并重载请求，推迟到扩展操作/压缩/分支摘要稳定后再替换运行时，并拒绝不安全的直接重载。
- **意义**：解决扩展重载期间上下文失效的竞态问题。
- https://github.com/earendil-works/pi/pull/7948

### 7. #9941 [已合并] 中止回退期间的 steer 转为全新 prompt
- 作者 nateGeorge
- 修复 Escape 中止流式响应后快速回车重提交时 prompt 丢失、UI 报 aborted 错误的问题。
- https://github.com/earendil-works/pi/pull/9941

### 8. #9956 [已合并] Enter 时先绘制用户消息气泡
- 作者 asperty567
- 修复 Enter→聊天气泡延迟：编辑器在 Enter 时立即清空，但用户消息要等 `session.prompt` 预检（扩展、鉴权、压缩、`before_agent_start`）完成后才绘制。现改为乐观绘制 + `requestRender`。
- https://github.com/earendil-works/pi/pull/9956

### 9. #9934 [已合并] 新增 Yolo-Auto provider
- 作者 harryvgiunta
- 新增内置 OpenAI 兼容订阅网关 `yolo-auto`，支持 `/v1/models` 的 plan-bounded 自动发现（仅返回订阅计划内模型）。
- **意义**：继续扩充原生 provider 矩阵。
- https://github.com/earendil-works/pi/pull/9934

### 10. #9569 [开放] 强制转换 JSON 编码的对象/数组工具参数
- 作者 rsaryev
- `validateToolArguments` 现在可恢复模型以 JSON 字符串形式传递的 `object` / `array` 参数（外层解析成功但内层被多引号包裹）。
- **意义**：提升弱模型工具调用成功率。
- https://github.com/earendil-works/pi/pull/9569

**其他进展**：#9970（PkgDiet 依赖守卫 Skill，在 `npm install` 前自动评估包）、#9964（GPT-6 上下文窗口设为 1,050,000 tokens）、#9763（pi.dev 兼容性检查）、#9222（运行/压缩中拒绝 reload）、#9889（manifest 资源发现对齐）、#9570（`TOO_MANY_TOOL_CALLS` 映射为错误停止原因）。

---

## 五、功能需求趋势

从全部 Issues 中可提炼出以下社区最关注方向：

1. **扩展 API 能力扩展（最热）**
   - 厂商专有字段访问（#9784）、`before_agent_start` 一致性（#5581）、`clearQueue()` 消息保留（#9886）、RPC prompt disposition（#9098）——扩展开发者要求更完整、可预期的运行时契约。

2. **新模型 / Provider 支持**
   - Requesty 原生 provider（#5473）、Mistral conversations 修复（#9674）、Codex 上下文上限元数据（#8332）、GPT-6 上下文更新（#9964）。社区对网关型与新兴模型接入需求旺盛。

3. **计费与用量透明度**
   - `cacheWrite1h` 计费错误（#9210）、`parseChunkUsage` 丢弃未知用量字段（#9757）——用户希望精确掌握成本。

4. **性能与资源占用**
   - 大 transcript 重渲染（#9549）、扩展冷启动延迟（#9863）、Codex SSE 堆 OOM（#9036）——流式解析与渲染管线是性能瓶颈集中区。

5. **会话与配置一致性**
   - 模型恢复错误（#9243）、fork 旧会话丢历史（#9950）、默认模型覆盖全局作用域（#9972）——会话状态管理是可靠性短板。

6. **跨平台 / 终端兼容**
   - Windows shellPath（#9361）、X11 剪贴板（#9786）、硬件光标（#9925）、Kitty 图像行取整（#9957）——平台差异导致的细节问题持续存在。

---

## 六、开发者关注点

综合 Issue 与 PR 反馈，开发者痛点集中在以下几点：

- **回归风险高**：为修一个 bug 引入另一个（#9688 vs #9618），说明剪贴板/终端输出路径缺乏回归测试覆盖。
- **配置被静默忽略**：`shellPath`（#9361）、超时设置（#5294）、`samplingParams`（#9506）都存在"设置了但不生效"的情况，且无任何提示，排查成本极高。
- **扩展生命周期管理混乱**：reload 与工具执行竞态（#9222、#7948）、消息队列被销毁（#9886）、事件被绕过（#5581），扩展开发者对运行时语义缺乏信任。
- **错误信息不结构化**：HTTP 状态码不可获取（#5623）、用量字段被丢弃（#9757）、reasoning id 重放失败（#9966），使上层难以做智能重试与降级。
- **本地模型支持待完善**：llama.cpp 超时（#5294）与本地部署场景下的行为差异仍是未解需求。
- **TUI 交互细节**：光标覆盖（#9925）、Enter 后气泡延迟（#9956）、Skill 补全为空（#9944）——虽非致命，但高频影响日常手感。

**整体判断**：Pi 当前处于"平台化"关键期——扩展 API（#9901、#9880、#7948）与模型抽象层（#9948）的大幅重构，配合大量存量 Bug 的集中清理，表明项目正从功能堆叠转向架构收敛。建议关注扩展 API 契约的稳定性与跨平台路径解析的回归测试补齐。

---

*日报生成时间：2026-09-24 · 数据窗口：过去 24 小时*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-09-24）

---

## 一、今日速览

今日动态以 **web-shell 打包质量** 与 **安全/正确性修复** 为主线：P1 级 Issue #12185 指出 `@qwen-code/web-shell` 发布包存在无法解析的 `@/` 类型导入并内联了六个运行时依赖，配套修复 PR #12191 仍在草稿阶段。同时，围绕 **64 位文件 ID 溢出**（#11848 系列）和 **session-commit 注册覆盖不全**（#12514）两条线索，维护者 yiliang114 集中提交了多个 follow-up 修复 PR，社区评审活跃度显著上升。功能侧，`tools.mode` 混合代码模式、MCP 大应用支持、持久化 Agent 协作等 PR 持续推进。

---

## 二、版本发布

**v0.24.4-nightly.20260923.d0cd622a68**（nightly）
- `fix(core,docs)`：修正 deferred-tool bridge 导致文档/行为过期或未测试的问题（PR #12355）。
- 附带 `docs(plans)` 相关变更。

**cua-driver-rs v0.20.11**（Qwen CUA Driver 预编译二进制，vendor 在 `packages/cua-driver`）
- **macOS**：代码签名 + 公证的通用二进制，含 `QwenCuaDriver.app`。
- **Linux**：未签名（x86_64 + arm64，glibc 2.31 起）。
- **Windows**：未签名 UIAccess worker + 原生 SDK 载荷（x86_64 + arm64）。

---

## 三、社区热点 Issues（10 个）

1. **[#12185](https://github.com/QwenLM/qwen-code/issues/12185) [P1][OPEN] web-shell 发布包存在无法解析的 `@/` 类型导入**
   `@qwen-code/web-shell` 经 #12178 接入发布流水线后，包自身的构建/打包缺陷（类型导入、内联 6 个运行时依赖）直接暴露给 npm 用户。作为 P1 打包问题，直接影响新包可用性，是今日最关键的阻断项。

2. **[#12326](https://github.com/QwenLM/qwen-code/issues/12326) [P2][OPEN] eager tool surface 是手工维护的静态列表**
   属 #12028 子项，讨论由谁选择常驻工具集，同时避免使 prompt 前缀失效（破坏 KV cache）。触及长上下文与 token 预算核心，评论活跃。

3. **[#11848](https://github.com/QwenLM/qwen-code/issues/11848) [P2][OPEN] 64 位 NTFS 文件 ID 使 `isSameFile` 与删除日志交换检查在 Windows 上 fail open**
   stat 未使用 `{ bigint: true }`，在 file id 超过 2^53 的卷上身份比较退化为弱校验。属安全相关正确性问题，衍生出 #12574/#12578 等多个 follow-up。

4. **[#12514](https://github.com/QwenLM/qwen-code/issues/12514) [P2][OPEN] session-commit 注册未覆盖所有落 commit 的路径/拼写**
   导致 Auto-mode 的 `git commit --amend` 豁免被误判为「非本会话 Agent 提交」而错误阻断。已由 PR #12556 跟进修复。

5. **[#12496](https://github.com/QwenLM/qwen-code/issues/12496) [P2][OPEN] MCP 客户端将 tools-only 服务器标记为断连**
   `prompts/list` / `resources/list` 返回 -32601 被当作传输错误。影响仅提供 tools 的 MCP 服务器接入，是真实用户反馈的集成痛点。

6. **[#12558](https://github.com/QwenLM/qwen-code/issues/12558) [P3][OPEN] hooks：托管记忆变更时通知第三方**
   请求新增 `MemoryChanged` 事件，在变更生效后触发，且 hook 失败不回滚。反映记忆管理与事件生态的扩展诉求。

7. **[#12530](https://github.com/QwenLM/qwen-code/issues/12530) [P2][OPEN] Qwen Live 全平台统一走 Web Shell endpoint，macOS 原生 Host 改为 opt-in**
   目前 macOS daemon 广告 `realtime_voice`、注册 WS `/live/host` 并下载启动原生 App。提案统一路径以简化平台差异。

8. **[#11198](https://github.com/QwenLM/qwen-code/issues/11198) [P1][CLOSED] 使用统计遥测上传未脱敏的原始工具错误文本（含 shell 命令）**
   默认开启的 RUM 通道上传未经脱敏的 tool-error 文本，涉及凭证/隐私风险。作为 P1 安全项已关闭，值得复盘。

9. **[#12550](https://github.com/QwenLM/qwen-code/issues/12550) [P2][OPEN] perf(cli)：降低 VP 模式 TUI 渲染开销**
   备用屏（虚拟视口）TUI 在长回复下产生大量 ANSI 重绘与 React commit，导致高 CPU、事件循环阻塞、帧率下降。终端体验类高频性能诉求。

10. **[#12576](https://github.com/QwenLM/qwen-code/issues/12576) [P2][OPEN] Web Shell：绑定的定时任务控制会话不出现在会话列表**
    文档说明为有意行为，但可发现性后果真实存在，相关 PR #11635 已关闭未合并。反映会话管理 UX 缺口。

---

## 四、重要 PR 进展（10 个）

1. **[#12556](https://github.com/QwenLM/qwen-code/pull/12556) fix(core)：覆盖 session-commit 注册的全部 commit 拼写与 promoted 路径**
   修复 #12514 中两个 in-scope 缺口，决定 Agent 自身 `git commit` 是否能获得 `--amend` 豁免。

2. **[#11854](https://github.com/QwenLM/qwen-code/pull/11854) feat：新增混合代码模式（hybrid code mode）**
   引入 Codex 风格的 `tools.mode` 枚举（`direct` / `code_mode` / `code_mode_only`），`code_mode` 下普通工具仍可直接调用，同时暴露隔离的 `exec` JavaScript 工具。

3. **[#12308](https://github.com/QwenLM/qwen-code/pull/12308) feat(serve)：会话创建时支持模型与推理强度选择**
   外部调用方可通过 `startupConfig: { modelServiceId, reasoningEffort }` 指定；`reasoningEffort` 省略时仅选模型、不触发推理设置器。

4. **[#12258](https://github.com/QwenLM/qwen-code/pull/12258) fix(mcp)：支持更大的 Apps、作用域工具调用与隔离源**
   远程 HTTPS 渲染器已在隔离 fixture 中于真实远端实例验证，属 MCP 应用能力的重要扩展。

5. **[#12183](https://github.com/QwenLM/qwen-code/pull/12183) feat(extensions)：从目录加载部署托管的扩展**
   CLI 与 daemon 新增 `--managed-extensions <root>`，从根目录的直接子目录发现完整扩展，激活范围仍由部署方控制。

6. **[#12107](https://github.com/QwenLM/qwen-code/pull/12107) perf(core)：并行化扩展加载循环**
   扩展冷加载路径此前严格串行，改为并行，惠及 daemon 的 `GET /extensions` 等所有全量刷新消费者。

7. **[#12539](https://github.com/QwenLM/qwen-code/pull/12539) fix(core)：让 deferred-tool bridge 两半解析同一工具**
   修复 #11321 中 deferred-tool bridge（`tool_search` → `tool_call`）的两处评审发现，统一工具名解析。

8. **[#12568](https://github.com/QwenLM/qwen-code/pull/12568) fix(cli)：在两个身份比较器中保持 64 位文件 ID 精确**
   将 `review/lib/same-file.ts` 的 `tryStat` 与 `standalone-deletion-journal.ts` 的 stat 改为 `{ bigint: true }`，是 #11848 系列的落地修复。

9. **[#12531](https://github.com/QwenLM/qwen-code/pull/12531) fix(core)：阻止 MCP 服务器规则授权碰撞服务器**
   `matchesMcpPattern()` 不再经有损的 `sanitizeToolNameForProvider()` 归约后再比较，改为字面前缀匹配可信拼写。

10. **[#11206](https://github.com/QwenLM/qwen-code/pull/11206) feat(mesh)：新增持久化共享线程的 Agent 协作**
    支持持久工作区 Agent 身份在共享线程上协作：创建/分配工作、@ 多个 Agent、运行中插话、查看归属结果与逐次运行历史、取消与阻塞解除。

---

## 五、功能需求趋势

- **Web Shell 成熟度**：搜索会话内内容（#12231）、HTML 产物公开分享（#12551）、发布包修复（#12185/#12191）、定时任务会话可发现性（#12576）——Web Shell 正从实验走向产品化。
- **上下文与 Token 经济**：eager tool surface 选择（#12326）、`agent` 函数描述过长（#12272，约 2000 token）、压缩后 deferred tool 仍可调用（#12569）——长上下文优化成为持续主线（roadmap/context-performance）。
- **MCP 与扩展生态**：tools-only 服务器断连误判（#12496）、大应用与隔离源（#12258）、MCP 权限碰撞（#12531）、托管扩展目录（#12183）、依赖守卫技能（#12572）。
- **Hooks / 事件与记忆**：`MemoryChanged` 事件（#12558）等，扩展可观测与第三方集成能力。
- **平台与分发**：Desktop 更新检查可关闭（#12575）、macOS 原生 Host 改为 opt-in（#12530）、SDK-Java 托管运行时（#12552）。
- **性能与终端体验**：VP 模式 TUI 渲染优化（#12550）、扩展加载并行化（#12107）。

---

## 六、开发者关注点

1. **安全与正确性「fail open」隐患**：文件身份比较在 64 位 ID 下退化（#11848 及 #12574/#12578 系列）、Bash allow 规则被单引号内反斜杠绕过（#11764）、遥测上传未脱敏 shell 命令（#11198）——开发者对「静默失效」类问题高度敏感。
2. **打包与发布质量**：web-shell 发布包的类型导入与依赖内联问题（#12185），暴露流水线接入后包自身构建缺陷直接触达用户。
3. **MCP 互操作细节**：错误码语义（-32601）与权限模式匹配，是集成方最常踩的坑。
4. **CI/测试稳定性**：ECS runner 版本陈旧（#11633）、helper 测试 ESM 加载失败（#11937）、Windows 沙箱 lane 长期飘红（#12270），显示基础设施与测试环境维护压力。
5. **Token 预算焦虑**：工具描述冗长、常驻工具集选择、deferred tool 生命周期等，反映开发者对每次请求成本与 prompt 缓存失效的强烈关注。
6. **终端 UX 细节**：排队消息指示器消失（#8666）、短内容顶/底对齐（#9305）等交互问题虽小但高频被提及。

---

*数据来源：github.com/QwenLM/qwen-code ｜ 统计窗口：2026-09-23 至 2026-09-24*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



# DeepSeek TUI (Codewhale) 社区动态日报
**日期：** 2026-09-24  
**数据来源：** [Hmbown/Codewhale](https://github.com/Hmbown/DeepSeek-TUI) (GitHub 数据映射)

---

### 1. 今日速览

今日社区动态高度集中在 **v0.10.1 版本的集成与稳定性修复**，以及 **核心架构的重构（TUI 模块化拆分与 MCP 栈统一）**。核心开发者 Hmbown 发起并更新了大量关键 PR，重点解决了 Windows 多行粘贴回归、大会话恢复内存占用、Fleet 节点文件写入竞态等严重问题。同时，社区关于“可插拔智能体记忆后端”和“统一 Fleet/Agent 数据模型”的讨论达到新高。

---

### 2. 版本发布

*   **最新 Releases：** 过去 24 小时内无新版本发布。
*   **版本动态：** 社区当前正密集进行 **v0.10.1 的源码合格性检查与有序 PR 集成**（见 Issue #6458），并基于真实的 v0.10.0 安装测试重写了安装指南（PR #6450）。

---

### 3. 社区热点 Issues（Top 10）

以下是过去 24 小时内最受关注、评论最活跃的 Issue，反映了当前开发的核心痛点与未来方向：

| Issue 标题 | 编号 | 评论 | 核心观点与重要性 |
| :--- | :--- | :--- | :--- |
| **EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)** | [#5316](https://github.com/Hmbown/Codewhale/issues/5316) | 29 | **核心重构总纲。** 旨在将庞大的 TUI 代码库拆分为独立、可维护的 Rust Crate，是解决当前代码库臃肿问题的顶层设计。 |
| **[enhancement] usage & tool diagnostics — token accounting** | [#6011](https://github.com/Hmbown/Codewhale/issues/6011) | 9 | **高需求功能。** 用户和开发者急需细粒度的 Token 消耗、缓存命中率及工具调用错误模式诊断，以优化成本

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

# ComfyUI 社区动态日报 | 2026-09-24

## 1. 今日速览

过去 24 小时，ComfyUI 核心仓库无新 Release，但社区活跃度集中在 **Dynamic VRAM 稳定性修复** 与 **新模型（MiniMax H3、Ming-Image、YuE2、Qwen 2.1）适配** 两大主线。PR 侧出现多个直接影响推理正确性与性能的关键修复，包括部分图执行、SQLite 写锁优化、fp16 推理支持及 RGBA 图像上采样修复。

---

## 2. 版本发布

- **过去 24 小时无新 Release**。
- 维护侧出现了两份 `v0.37.2` 回移植 PR（[#16505](https://github.com/Comfy-Org/ComfyUI/pull/16505)、[#16504](https://github.com/Comfy-Org/ComfyUI/pull/16504)），将 master 上的 TextGenerate 系统提示、Quiver/Anthropic/Recraft 合作伙伴节点更新等变更 cherry-pick 到 `v0.37.1` 标签。
- 工作流模板同步至 **v0.11.69**：[#16503](https://github.com/Comfy-Org/ComfyUI/pull/16503)。

---

## 3. 社区热点 Issues（精选 10 条）

| # | 标题 | 重要性说明 | 社区反应 |
|---|---|---|---|
| [#16490](https://github.com/Comfy-Org/ComfyUI/issues/16490) | Dynamic VRAM：`ModelSamplingDiscrete` 调度泄漏到同一 checkpoint 的后续运行 | **正确性 Bug**：导致相同参数下生成结果错误或黑图，且报告为成功，易误导用户。 | 0 赞，0 评论，但影响隐蔽严重 |
| [#16150](https://github.com/Comfy-Org/ComfyUI/issues/16150) | MiniMax H3 在最新 dev 版出现 VRAM 回归 | 高端工作流 VRAM 占用异常，可能阻碍视频生成工作流落地。 | 3 赞，13 评论，关注度较高 |
| [#16502](https://github.com/Comfy-Org/ComfyUI/issues/16502) | AMD ROCm + DynamicVRAM：首次生成后性能下降，`/free` 可恢复 | 平台特异性性能退化，影响 AMD 用户连续生成体验。 | 新提，0 评论 |
| [#15628](https://github.com/Comfy-Org/ComfyUI/issues/15628) | MiniMaxH3 在 RTX 4070 12GB 上因 DynamicVRAM 无限挂起 | 已确认与自定义节点无关，核心 offload 逻辑导致 CUDA illegal memory access。 | 10 评论 |
| [#15452](https://github.com/Comfy-Org/ComfyUI/issues/15452) | Dynamic VRAM：热加载模型 VAE decode 产生 NaN/黑图，冷加载正常 | 模型生命周期与 VRAM 复用状态污染问题。 | 14 评论 |
| [#16507](https://github.com/Comfy-Org/ComfyUI/issues/16507) | 为无 bf16 的 GPU 提供 MiniMax H3 fp16 推理支持 | **功能需求**：Turing/Volta 用户只能跑 fp32，浪费 fp16 Tensor Core。 | 1 赞 |
| [#16365](https://github.com/Comfy-Org/ComfyUI/issues/16365) | YuE2 text encoder 在 GTX 1650 回退 CPU | 设备检测逻辑导致后续算子期待 cuda 却拿到 cpu。 | 3 赞 |
| [#15043](https://github.com/Comfy-Org/ComfyUI/issues/15043) | 扩展 `extra_model_paths` 到其他目录 | 用户希望 input/output/workflows 也能通过配置共享，减少重复拷贝。 | 6 评论 |
| [#9878](https://github.com/Comfy-Org/ComfyUI/issues/9878) | NodesMap 从侧边菜单消失 | UI 回归，影响工作流导航。 | 1 赞 |
| [#16498](https://github.com/Comfy-Org/ComfyUI/issues/16498) | Qwen2.1 不会利用或卸载到 RAM | 大模型显存管理问题，影响低显存用户。 | 新提 |

---

## 4. 重要 PR 进展（精选 10 条）

| # | 标题 | 内容摘要 |
|---|---|---|
| [#14918](https://github.com/Comfy-Org/ComfyUI/pull/14918) | 支持部分图执行 | 新增 `node_failure_policy: continue_independent`，单个节点失败时仅跳过依赖节点，独立分支继续执行并保留输出。默认仍 fail-fast。 |
| [#16480](https://github.com/Comfy-Org/ComfyUI/pull/16480) | SQLite 写锁前置优化 | 将资产扫描与输出注册的写锁提前获取，减少慢存储下多秒级卡顿，涉及 WAL + `BEGIN IMMEDIATE`。 |
| [#16508](https://github.com/Comfy-Org/ComfyUI/pull/16508) | MiniMax H3 支持 fp16 推理 | 修复 [#16507](https://github.com/Comfy-Org/ComfyUI/issues/16507)；除声明 fp16 外，还修复了 Attention.output、MLP 等 4 处激活越界导致的非有限输出。 |
| [#16482](https://github.com/Comfy-Org/ComfyUI/pull/16482) | Ming-Image 模型支持 | WIP，接入 inclusionAI/Ming-Image-0.1-Design 文生图模型。 |
| [#16483](https://github.com/Comfy-Org/ComfyUI/pull/16483) | 支持 w6a8 量化格式 | 配合 comfy-kitchen 的量化格式扩展。 |
| [#16497](https://github.com/Comfy-Org/ComfyUI/pull/16497) | SaveConditioning / ConditioningLoader 支持嵌套张量 | 修复 MiniMax H3、LTX-Video、Wan 等 Video DiT 将嵌套 dict/list 张量附加到 conditioning options 时抛错。 |
| [#16500](https://github.com/Comfy-Org/ComfyUI/pull/16500) | 修复 RGBA 图像上采样崩溃 | `ImageUpscaleWithModel` 直接传入 4 通道张量导致 Spandrel 模型首层 conv 通道不匹配，现做通道处理。 |
| [#16495](https://github.com/Comfy-Org/ComfyUI/pull/16495) | 修复 Marigold V2 NF4 预量化推理 | 恢复训练时使用的 NF4 量化与 `img_to_img_velocity` 采样，解决与原生流水线质量不一致问题。 |
| [#16506](https://github.com/Comfy-Org/ComfyUI/pull/16506) | 服务端模型下载队列 | 前端 "Download all" 动作改为在 ComfyUI 服务端排队下载，规避浏览器弹窗限制并直接安装到配置目录。 |
| [#16489](https://github.com/Comfy-Org/ComfyUI/pull/16489) | 重新验证 drained verifications | 修复 [#16486](https://github.com/Comfy-Org/ComfyUI/pull/16486) 评审中发现的一致性窗口问题，保持并发安全。 |

---

## 5. 功能需求趋势

从今日 Issues 与 PR 可提炼出社区最关注的五大方向：

1. **Dynamic VRAM 稳定性与可预测性**  
   无限挂起、NaN/黑图、调度泄漏、AMD ROCm 性能衰减等集中爆发，说明 offload/显存复用机制仍是当前最脆弱的环节。

2. **新模型快速适配与量化支持**  
   MiniMax H3、Ming-Image、YuE2、Qwen 2.1、SAM3、Marigold V2 陆续进入社区视野，对 bf16/fp16/INT8/NF4/w6a8 等精度路径的兼容需求激增。

3. **低显存与老显卡兼容**  
   GTX 1650、Turing/Volta、12GB 消费级显卡用户希望获得更精细的设备回退与 fp16 支持。

4. **模型/工作流资产管理**  
   `extra_model_paths` 扩展、服务端下载队列、SQLite 注册优化，反映用户对多环境、多仓库、大规模资产管理的诉求。

5. **前端与交互体验**  
   NodesMap 消失、遮罩编辑器上传、RGBA 图像处理等前端回归修复持续出现。

---

## 6. 开发者关注点

- **Dynamic VRAM 是当前最大痛点**：多起 Issue 均指向模型/调度/VAE 在显存复用时状态污染，建议开发者在排查时优先使用 `--disable-all-custom-nodes` 并对比 `--normalvram`/`--fp16-vae` 行为。
- **新模型精度路径需显式声明**：MiniMax H3 默认 `[bf16, fp32]` 导致无 bf16 显卡只能跑 fp32，社区已开始推动 fp16 白名单与自动精度回退。
- **条件信息序列化接口需要升级**：Video DiT 将复杂结构挂入 conditioning options，现有 `SaveConditioning` 假设为简单张量，已出现多起 ValueError。
- **量化模型权重 patch/unpatch 在高版本 PyTorch 下异常**：`torch.inference_mode` 与量化张量的版本计数器冲突可导致服务器永久卡死，相关修复已合并。
- **合作伙伴节点（Partner Nodes）迭代加快**：Quiver、Anthropic、Recraft 等云端 API 节点版本密集更新，回移植 PR 中占比显著。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama 社区动态日报（2026-09-24）

数据来源：github.com/ollama/ollama

---

## 一、今日速览

今日社区焦点集中在 **结构化输出（structured output）在 MLX 引擎上的稳定性问题**：多个相关 Issue 与 PR 同日更新，涉及生成不终止、Homebrew 版 xgrammar 缺失等。同时，v0.34.4-rc0 发布，修复了服务端间歇性 "model not found" 与 thinking 模型结构化输出问题。此外，**GPU 场景下 CPU 占用飙升** 的回归问题（#17833）已有对应修复 PR 提交，值得关注。

---

## 二、版本发布

### v0.34.4-rc0（v0.34.4 候选版）

主要变更：

- **server: 修复间歇性 "model not found" 错误** — 解决模型加载/查询过程中的偶发失败。
  [PR #18438](https://github.com/ollama/ollama/pull/18438)
- **server: 对 thinking 模型单次应用结构化输出** — 优化推理模型在结构化输出场景下的处理流程。
  [PR #18479](https://github.com/ollama/ollama/pull/18479)
- **app: 避免使用 System Events** — macOS 应用层面的行为调整（日志截断，具体内容未完整展示）。

> 注：该版本为 RC 候选版，正式发布前建议谨慎升级生产环境。

---

## 三、社区热点 Issues（精选 10 条）

### 1. GPT-OSS 工具调用无法完成
`#12187` [OPEN] · 39 评论 · 👍2 · 作者 Roberto-Candelario
自 2025-09 创建以来持续活跃，配合 open-webui 使用时模型"假装完成"工具调用却不实际执行。长期未解决，是工具调用链路的代表性痛点。
🔗 https://github.com/ollama/ollama/issues/12187

### 2. MLX 引擎结构化输出永不终止
`#18567` [CLOSED] · 2 评论 · 作者 leojadue
使用 JSON schema 结构化输出时，模型输出正确部分 JSON 后持续吐空白直到 `num_predict` 上限。这是本轮结构化输出问题的核心报告，已被 PR #18569 修复。
🔗 https://github.com/ollama/ollama/issues/18567

### 3. Homebrew 版 Ollama 无法提供结构化输出
`#18597` [OPEN] · 3 评论 · 作者 CamJN
Homebrew 安装的版本报 `xgrammar library not found`，MLX 模型结构化输出完全不可用。与发行渠道构建配置相关，影响 macOS 用户群体。
🔗 https://github.com/ollama/ollama/issues/18597

### 4. v0.32.14 模型全量载入 VRAM 时仍高占 CPU
`#17833` [OPEN] · 5 评论 · 👍3 · 作者 joshuarmost
升级后 CPU 飙升至 50–80%，但 `ollama ps` 显示 100% GPU 绑定。属于明确的性能回归，已有 PR #18613 提交修复。
🔗 https://github.com/ollama/ollama/issues/17833

### 5. glm-ocr 在 0.34.1+ 返回 HTTP 500（token 重复上限）
`#18609` [OPEN] · 作者 same-pxt
0.34.0 正常、0.34.1/0.34.2 报 `prediction aborted, token repeat limit reached`，典型的新版本回归。已有 PR #17195 尝试修复 EOT token 注册问题。
🔗 https://github.com/ollama/ollama/issues/18609

### 6. 德国手机号无法完成付费注册
`#16060` [OPEN] · 18 评论 · 👍1 · 作者 jw45665
非美国号码被注册表单拒绝，即使通过 GitHub OAuth 仍强制要求美国手机号，直接阻断国际用户付费转化。
🔗 https://github.com/ollama/ollama/issues/16060

### 7. 建议将 MIMO v2.5 加入 Ollama Cloud
`#15887` [OPEN] · 10 评论 · **👍18（本轮最高）** · 作者 sudioguan
小米已 MIT 开源 MiMo-V2.5，支持百万级 token 上下文，社区呼声较高，反映对新模型快速上架的强烈期待。
🔗 https://github.com/ollama/ollama/issues/15887

### 8. qwen3.8:27b 的 `/v1/chat/completions` 永不响应
`#17790` [CLOSED] · 7 评论 · 作者 aikenmilk21
OpenAI 兼容端点对特定模型挂起，但 `/api/chat` 与 `ollama run` 正常，暴露兼容层实现差异。
🔗 https://github.com/ollama/ollama/issues/17790

### 9. Windows 下 `/api/embed` 持续负载耗尽回环端口
`#18392` [OPEN] · 2 评论 · 作者 MEldes0uky
llama-server HTTP 客户端禁用 keep-alive，批量嵌入约 55 docs/s 时出现 `Only one usage of each socket address` 错误，影响批量嵌入生产场景。
🔗 https://github.com/ollama/ollama/issues/18392

### 10. 功能请求：GPU 显存压力下让空闲模型主动让出 VRAM
`#18612` [OPEN] · 👍1 · 作者 Grymgrin（今日新建）
建议在游戏、渲染等 GPU 重负载应用启动时，空闲模型提前释放显存，而非仅依赖 keep-alive 定时器。属于桌面端多应用共存的关键体验诉求。
🔗 https://github.com/ollama/ollama/issues/18612

> 其他值得留意：Gemma4 工具调用在 47+ 字符串值场景被静默丢弃（`#18605`，解析器索引碰撞）；OpenAI "custom tools" 兼容性请求（`#17673`）。

---

## 四、重要 PR 进展（精选 10 条）

### 1. 为存在 GPU 的环境向 llama-server 传 `--poll 0`
`#18613` [OPEN] · 作者 derjanb
直接修复 `#17833`：v0.32.14 起 GPU 系统生成期间空耗 10–20+ CPU 核心，根因与轮询策略相关。**今日最关键的回归修复。**
🔗 https://github.com/ollama/ollama/pull/18613

### 2. mlxrunner: 升级 XGrammar 至 0.2.7
`#18615` [OPEN] · 作者 jessegross
引入 typed dictionary 与短数组的 schema 修复，配合结构化输出问题治理。
🔗 https://github.com/ollama/ollama/pull/18615

### 3. mlxrunner: 限制 grammar 空白以终止结构化输出
`#18569` [CLOSED] · 作者 rabeyanoor
修复 `#18567`：模型在应输出属性名 `"` 时持续吐空白导致永不终止，通过限制 grammar 空白解决。
🔗 https://github.com/ollama/ollama/pull/18569

### 4. 新增 `ollama export` / `ollama import` 命令
`#18578` [OPEN] · 作者 MohamedAliBouhaouala
新增 `/api/export`、`/api/import` 端点，解决 content-addressed blob 存储难以离线/气隙环境手动迁移的问题（Closes #17115）。
🔗 https://github.com/ollama/ollama/pull/18578

### 5. responses: 保留命名空间工具标识
`#16263` [OPEN] · 作者 pd95
修复 `#15921`：Ollama 内部扁平化命名空间工具后丢失 `(namespace, name)` 对，导致 Codex 等客户端无法路由到正确的 MCP 工具。
🔗 https://github.com/ollama/ollama/pull/16263

### 6. 支持 `max_completion_tokens` 作为生成上限
`#18608` [OPEN] · 作者 ege-arhan
新版 OpenAI 客户端发送 `max_completion_tokens` 而当前端点静默丢弃，导致请求无输出上限。兼容性补丁，实用性高。
🔗 https://github.com/ollama/ollama/pull/18608

### 7. openai: 对 `previous_response_id` 显式报错而非返回空响应
`#18439` [OPEN] · 作者 L4XB
当前该字段被静默丢弃，`/v1/responses` 返回 HTTP 200 但内容为空，造成难以排查的静默失败。改为显式拒绝。
🔗 https://github.com/ollama/ollama/pull/18439

### 8. AMD: 升级至 ROCm v10 并改进 HCL
`#16446` [OPEN] · 作者 dhiltgen
Linux +5、Windows +7 硬件兼容性提升，ROCm runner 与打包运行时保持一致，扩大 AMD GPU 覆盖。
🔗 https://github.com/ollama/ollama/pull/16446

### 9. mlx: 修复 Nemotron 并支持 global scales
`#18614` [OPEN] · 作者 dhiltgen
接受官方层命名并保留旧别名，修复层数推断与 MTP 量化分离问题，稳定 Mamba softplus、保留 FP32 视觉归一化。
🔗 https://github.com/ollama/ollama/pull/18614

### 10. server: 避免 OpenAI embeddings 的原生 JSON 往返
`#18610` [OPEN] · 作者 paumartin2407
当前 `/v1/embeddings` 将 `api.EmbedResponse` 序列化为 JSON 后立即解码，大批量嵌入时开销显著。直接省去往返，属于纯性能优化。
🔗 https://github.com/ollama/ollama/pull/18610

> 其他动态：`llama-server` 移除兼容补丁并引入 manifest list 支持（`#16590`）；`glm-ocr` 为 legacy GGUF 注册 `<|user|>` 为 EOT（`#17195`）；新增 `POST /v1/systemone` 结构化评分 API（`#18606`）；`cmd: 重定向输出时禁用自动换行`（`#16888`）；macOS 关闭窗口后隐藏应用（`#17558`）。

---

## 五、功能需求趋势

从本轮 Issues 与 PR 中可提炼出以下方向：

1. **结构化输出稳定性（最高热度）**
   MLX 引擎的 schema 输出不终止、Homebrew 版 xgrammar 缺失、thinking 模型单次应用等，构成当前最集中的问题簇。

2. **OpenAI API 兼容性补全**
   `max_completion_tokens`、`previous_response_id`、custom tools、chat logprobs、命名空间工具标识——社区持续要求与 OpenAI Responses/Chat API 行为对齐。

3. **工具调用（Tool Calling）可靠性**
   GPT-OSS 不完成调用、Gemma4 大量参数被丢弃、MCP 路由错误，说明工具调用链路仍是薄弱环节。

4. **性能与资源管理**
   GPU 场景 CPU 空耗、embeddings JSON 往返、Windows 端口耗尽、以及"空闲模型主动让出 VRAM"的新诉求，反映桌面端多应用共存的现实压力。

5. **新模型快速上架**
   MiMo-V2.5（👍18）等开源模型的上架请求，以及 Nemotron、qwen3.8、Gemma4、glm-ocr 的适配修复，显示社区对模型覆盖度高度敏感。

6. **部署与迁移便利性**
   `export`/`import` 命令、manifest list 支持，指向离线/气隙环境与企业级分发需求。

---

## 六、开发者关注点

- **版本回归风险突出**：v0.32.14 的 CPU 占用、0.34.1+ 的 glm-ocr 500 错误，均属升级引入的明确回归，开发者对稳定性回退敏感，建议加强回归测试覆盖。
- **静默失败最令人困扰**：`previous_response_id` 返回 200 空响应、Gemma4 工具调用被静默丢弃、max_completion_tokens 被忽略——这类无报错的失败显著增加排查成本，社区普遍要求显式报错。
- **macOS/MLX 生态是当前短板**：结构化输出、xgrammar 打包、Homebrew 构建配置等问题集中在 Apple 平台，需要发行渠道与引擎层协同解决。
- **国际化与商业化受阻**：非美国手机号无法注册付费计划，直接影响海外用户转化，属产品层面的高优先级问题。
- **GPU 资源治理呼声上升**：从"高 CPU 占用"到"主动释放 VRAM"，开发者希望 Ollama 能更智能地与其他 GPU 应用共存。

---

*报告生成日期：2026-09-24 ｜ 数据窗口：过去 24 小时*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

# llama.cpp 社区动态日报（2026-09-24）

## 1. 今日速览

过去 24 小时 llama.cpp 迎来 **v0.5.0 正式发布**，重点覆盖后端性能与正确性、模型支持扩展、server/router 稳健性提升。社区热点集中在 **Vulkan/CUDA/HIP/Metal 的性能回归与长上下文正确性问题**，同时新模型、多模态、工具调用与量化格式支持持续活跃。

---

## 2. 版本发布

### v0.5.0
链接：https://github.com/ggml-org/llama.cpp/releases/tag/v0.5.0

主要更新方向：
- 后端性能与正确性改进，集成 ggml 0.25.0 后端优化。
- 扩大模型覆盖：新增 HRM-Text（DFM Mimir 1B）支持，MiMo-V2.6、HunyuanOCR 转换支持。
- server/router 更稳健：支持多地址 HTTP 绑定、图像输出等能力。

### 近 24 小时其他重要构建
- [b11149](https://github.com/ggml-org/llama.cpp/releases/tag/b11149)：为 `test-llama-archs` 增加 `-b/--backend` 选项，可按后端测试。
- [b11147](https://github.com/ggml-org/llama.cpp/releases/tag/b11147)：OpenCL 新增 A8 Q6_K 非 MoE dp4a binary kernel。
- [b11146](https://github.com/ggml-org/llama.cpp/releases/tag/b11146)：版本号 bump 到 0.5.0。
- [b11140](https://github.com/ggml-org/llama.cpp/releases/tag/b11140)：CUDA 重新为 dsv4 prefill 启用 sparse-fa，并展开 sparse mask scan 查询循环。
- [b11139](https://github.com/ggml-org/llama.cpp/releases/tag/b11139)：修复 server 睡眠状态下 token counting API 崩溃。
- [b11138](https://github.com/ggml-org/llama.cpp/releases/tag/b11138)：jinja 支持变量前的一元 `+/-`，修复 `items[:-n]` 等切片。
- [b11136](https://github.com/ggml-org/llama.cpp/releases/tag/b11136)：server 接受 OpenAI `video_url` 内容类型与 `data:video` URI。
- [b11135](https://github.com/ggml-org/llama.cpp/releases/tag/b11135)：server 通过 `dedup-cache-models` 去重 draft HF 模型。
- [b11132](https://github.com/ggml-org/llama.cpp/releases/tag/b11132)：模型侧支持 Gemma4 DSpark draft backbone。

---

## 3. 社区热点 Issues

1. **[#28752](https://github.com/ggml-org/llama.cpp/issues/28752) Vulkan/RDNA3 prompt processing 速度严重下降**  
   b10780 之后 Vulkan 后端 prompt processing 明显变慢，14 条评论、2 个 👍，属于高影响性能回归，RDNA3 用户关注度高。

2. **[#28211](https://github.com/ggml-org/llama.cpp/issues/28211) HIP/ROCm gfx1151 在 prompt 超过 n_ubatch 时 logits 错误**  
   不是崩溃而是结果错误，9 条评论。Strix Halo / RDNA3 平台上的正确性问题，影响推理可信度。

3. **[#29281](https://github.com/ggml-org/llama.cpp/issues/29281) CUDA sparse flash attention decode 慢 1.6 倍（b11047 → b11062）**  
   近期构建间的明确性能回归，9 条评论，说明 sparse FA 优化可能引入副作用。

4. **[#26669](https://github.com/ggml-org/llama.cpp/issues/26669) 请求支持 Laguna S 2.1 DFlash**  
   10 条评论、5 个 👍，是当前社区呼声较高的新模型支持需求，属于模型覆盖扩展方向。

5. **[#28734](https://github.com/ggml-org/llama.cpp/issues/28734) Qwen4exp CUDA decode 随上下文线性变慢**  
   7 条评论，长上下文场景下 decode 性能退化，影响实际服务吞吐。

6. **[#29022](https://github.com/ggml-org/llama.cpp/issues/29022) 通过 Prefill Logit Slicing 实现快速 Tool Gating 与单次选择**  
   7 条评论、3 个 👍。工具调用场景的优化提案，反映 agent/tool use 需求上升。

7. **[#28633](https://github.com/ggml-org/llama.cpp/issues/28633) 建议默认开启 GGML_CUDA_FA_ALL_QUANTS，避免 4-bit KV 静默回退 CPU**  
   6 条评论。默认配置下 4-bit KV 可能静默掉到 CPU，导致约 30 倍 slowdown，诊断困难。

8. **[#28448](https://github.com/ggml-org/llama.cpp/issues/28448) ggml_gallocr 在节点身份变化时复用陈旧分配计划，导致 sparse MoE 静默内存损坏**  
   4 条评论，属于底层内存分配与动态图正确性问题，影响 MoE 推理稳定性。

9. **[#28433](https://github.com/ggml-org/llama.cpp/issues/28433) draft-mtp draft context 按总 ctx 而非 seq ctx 分配，大 ctx 下 server 在 decode 入口崩溃**  
   4 条评论。server + draft-mtp + 大上下文组合下的崩溃问题，影响生产部署。

10. **[#27734](https://github.com/ggml-org/llama.cpp/issues/27734) Vulkan 在 131072 上下文出现约 78% decode 吞吐断崖，子分配碎片化导致**  
    4 条评论。长上下文 + Vulkan 子分配策略问题，可通过 `GGML_VK_SUBALLOCATION_BLOCK_SIZE=4 GiB` 缓解。

---

## 4. 重要 PR 进展

1. **[#29151](https://github.com/ggml-org/llama.cpp/pull/29151) 新增 Ling 3.0 VL 支持**  
   支持 Ling-3.0-flash-VL（124B 总参数 / 5.1B 激活，hybrid KDA + gated MLA，512-expert MoE），包含 27-block 视觉塔，属于重要多模态模型扩展。

2. **[#29077](https://github.com/ggml-org/llama.cpp/pull/29077) ggml 新增 PQ2_0 / PTQ1_0 三元类型，llama 侧应用 Hadamard-folded 权重**  
   支持 Ternary-Bonsai-2-27B 等三元 GGUF，推动低比特/三元量化落地。

3. **[#24033](https://github.com/ggml-org/llama.cpp/pull/24033) jinja 实现 `map('filter')`**  
   复用现有 filter 逻辑，改善 gemma4 tool schema 兼容性，对工具调用与模板渲染有实际价值。

4. **[#28554](https://github.com/ggml-org/llama.cpp/pull/28554) server 在 Anthropic `/v1/messages` 转换中传递 `id_slot`**  
   修复 slot pin 在 Anthropic 兼容接口被忽略的问题，提升多 slot 部署一致性。

5. **[#29030](https://github.com/ggml-org/llama.cpp/pull/29030) qwen4exp/gemma4 使用直接读取收集 lazy tensor 行**  
   针对 Strix Halo 等集成平台性能开销大的问题，用 `llama_file` 实现 OS 无关方案。

6. **[#27952](https://github.com/ggml-org/llama.cpp/pull/27952) Vulkan 为 RDNA3/RDNA4 实现 int8 coopmat1 matmul**  
   支持 q4_0、q4_1、q5_0、q5_1、q8_0、q3_k、q4_k、q5_k、q6_k、mxfp4、nvfp4、iq4_nl 等格式，对 AMD 平台 prompt processing 有潜在提升。

7. **[#21067](https://github.com/ggml-org/llama.cpp/pull/21067) ggml 允许预取 tensor overrides**  
   CUDA 下通过 `--prefetch-weights` 将权重预取与当前层计算重叠，属于 PoC 阶段但方向重要。

8. **[#29173](https://github.com/ggml-org/llama.cpp/pull/29173) CUDA 处理 NVFP4 在 cuBLAS 路径的 compute type**  
   修复 NVFP4 量化模型在 fp16 compute type 下累加溢出问题。

9. **[#29340](https://github.com/ggml-org/llama.cpp/pull/29340) Metal 修复量化 flash attention 的 threadgroup 内存溢出**  
   针对 head size 512/512 或 576/512、batch 20–31 token 时超过 32 KiB 的问题，先反量化到 F16 再走非 vec kernel。

10. **[#29245](https://github.com/ggml-org/llama.cpp/pull/29245) SYCL 新增 grouped MoE XMX GEMM**  
    将 MoE 专家从“每专家一个 GEMM”改为分组 GEMM，更充分利用 XMX，对 Intel 平台 MoE 推理有性能意义。

---

## 5. 功能需求趋势

从本期 Issues 与 PRs 看，社区关注方向集中在以下几类：

- **新模型与多模态支持**：Ling 3.0 VL、Laguna S 2.1 DFlash、Gemma4 DSpark、HRM-Text、MiMo-V2.6、HunyuanOCR、Qwen4exp、DeepSeek V4、GLM 等持续涌入。
- **后端性能与正确性**：Vulkan、CUDA、Metal、HIP/ROCm、SYCL、OpenCL、MUSA 均有针对性优化或修复；sparse FA、coopmat、XMX、dp4a、conv3d 是关键词。
- **长上下文与内存管理**：KV cache 量化、子分配碎片化、gallocr 分配计划、draft-mtp context sizing 等问题频繁出现。
- **server/router 稳健性**：sleep/wake、token counting、router 模式、Anthropic API 兼容、embeddings 错误码、video_url 支持等。
- **工具调用与模板**：jinja `map` filter、tool gating、chat template 兼容性，反映 agent 场景需求增长。
- **低比特与新型量化**：三元类型、4-bit KV 默认行为、NVFP4 compute type，量化仍是性能与精度平衡的核心。

---

## 6. 开发者关注点

- **性能回归定位困难**：多个 Issue 以具体 build 对比形式报告回归（如 b10780、b11047→b11062），说明开发者需要更细粒度的性能追踪与 CI 基准。
- **静默回退与无警告降级**：4-bit KV 掉到 CPU、Vulkan 子分配碎片化等场景缺乏明显提示，诊断成本高。
- **后端行为差异大**：同一模型在不同后端（Vulkan/HIP/Metal/SYCL/OpenCL）表现不一致，正确性与性能问题分散。
- **长上下文与大 batch 稳定性**：decode 随上下文变慢、batch 吞吐崩塌、draft-mtp 崩溃等问题直接影响生产服务。
- **新模型适配链路长**：转换、GGUF、运行时、视觉塔、draft backbone 等环节都需要同步支持，社区对模型覆盖速度要求高。
- **server/router 生产级需求**：多 slot、sleep/wake、router 模式、OpenAI/Anthropic 兼容、错误码规范化是高频痛点。

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*