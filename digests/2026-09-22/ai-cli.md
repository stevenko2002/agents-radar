# AI CLI 工具社区动态日报 2026-09-22

> 生成时间: 2026-09-21 22:15 UTC | 覆盖工具: 12 个

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

Thinking Process:

1.  **Analyze the Request**:
    *   Input: A large daily report covering multiple AI CLI tools (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Pi, Qwen Code, DeepSeek TUI, ComfyUI, Ollama, llama.cpp) on 2026-09-22.
    *   Task: Generate a brief "Today's Highlights" (今日重点) summary.
    *   Content requirement: List the most important 5-8 updates today (new version releases, major features, critical fixes). Each item should be 1-2 sentences, stating the tool name and GitHub link. Keep it concise, objective, only stating what actually happened today, no analysis or trend prediction.

2.  **Scan the Input Data for Key Events (2026-09-22 / past 24h)**:
    *   *Claude Code*: No new release. High activity on issues (sandbox ARG_MAX, CJK mojibake, send_message issues). PRs: GitHub issue template (#95932), diff panel performance optimization (#95423).
    *   *OpenAI Codex*: Rust backend optimizations (v0.157.0-alpha.1, v0.156.0-alpha.11-.17), MCP security hardening, TUI UX refinements, Windows filesystem compatibility. Issues: model routing transparency (GPT-6 Astra substituted with Luna), billing anomalies, VS Code state reversion, macOS malware false positives.
    *   *Gemini CLI*: Released `v0.62.0-nightly.20260921.gcfbcaa8df` with core stability fixes (concurrent tool writes, stdin CPU spin, ACP tool state updates, temp dir cleanup).
    *   *GitHub Copilot CLI*: Released `v1.0.88-0` (OSC 777 terminal notifications for Ghostty/WezTerm, namespaced custom skills, MCP/plugin status display) and `v1.0.87` (Auto routing tier defaults, consecutive steering prompts combine). Issues: OOM crash on long sessions (#4699), Auto mode model pool configuration (#4218). PRs: terminal-owned macOS notifications (#4739), WebSocket responses opt-out docs (#4770).
    *   *Kimi Code CLI (kimi-cli)*: Archived. Released final version `1.51.0`. PRs: IME composition fix (#2658), stdout encoding fix (#2657), MCP OAuth scope option (#1625).
    *   *OpenCode*: Severe regression in v1.18.30 (`SystemPrompt.environment` TypeError causing all prompts to fail, e.g., #48811, #48965). Copy/paste issues (#13984). No hotfix release yet.
    *   *Pi*: Released `v0.87.0` (canonical session context, `ContextEditEntry`, extension boundaries). PRs: Grok 4.7 support (#9859), Ollama native provider (#9850), Azure Foundry Chat Completions (#9714).
    *   *Qwen Code*: Released `v0.24.3` (CLI, Desktop, SDK). Web Shell structured shell results, trace metrics, host whitelist, ACP permission queue fix (#11802). PRs: SSH workspace support without remote daemon (#12255), workflow slash command status reporting (#12415).
    *   *DeepSeek TUI (Codewhale)*: No new release. Key fixes: Anthropic parallel tool calls fake results (#6378/#6387), preflight context guard 1.5x overestimation (#6374). Engine silent freeze issue (#6184) still open.
    *   *ComfyUI*: Released `v0.37.0` (Aimdo 0.5.5 integration, auto fast disk detection, OpenAI GPT Image 2 transparent background partner node). Issues: Qwen-Image 2.1 hard crash on Windows multi-GPU (#16443), VAE encode broken on MPS (#16433), dynamic VRAM silent corruption on ROCm (#16437).
    *   *Ollama*: No new release. Critical bug: qwen3coder tool call parser rejects long file writes and returns parse errors as chat results (#18563). Structured output deadlock on MLX (#18567). `/v1/chat/completions` ignores `max_tokens` (#18575).
    *   *llama.cpp*: 10 builds released (b11070–b11081). Key fixes: JSON enum serialization regression (#11074), env var control for generation params (#11078), Hexagon HMX GATED_DELTA_NET acceleration (#29199), slot checkpoint preservation for SWA/mixed models (#26004). Issue: Qwen3.8-27B long context decoding throughput drops 25x (#27623).

3.  **Select the Top 5-8 Most Important Updates**:
    Let's pick the most impactful, concrete releases and critical fixes across the tools, prioritizing version releases and severe bug fixes/patches.
    *   *Selection 1 (Release)*: **Claude Code** diff panel performance PR (#95423) and community issues, but maybe less of a "release". Let's look at major releases.
    *   *Selection 2 (Release)*: **Gemini CLI** released `v0.62.0-nightly` with critical stability fixes (concurrent writes, CPU spin).
    *   *Selection 3 (Release/Archival)*: **Kimi CLI** released final version `1.51.0` and archived, pointing users to Kimi Code CLI.
    *   *Selection 4 (Regression)*: **OpenCode** v1.18.30 severe regression where `SystemPrompt.environment` crashes all prompts (no hotfix yet).
    *   *Selection 5 (Release)*: **Pi** released `v0.87.0` introducing canonical session context and `ContextEditEntry`.
    *   *Selection 6 (Release)*: **Qwen Code** released `v0.24.3` (CLI, Desktop, SDK) with SSH workspace and workflow slash command fixes.
    *   *Selection 7 (Release)*: **ComfyUI** released `v0.37.0` with OpenAI GPT Image 2 transparent background node and auto fast disk detection.
    *   *Selection 8 (Release/Builds)*: **llama.cpp** released 10 builds (b11070–b11081), including env var generation controls and Hexagon HMX acceleration.
    *   *Selection 9 (Critical Bug Fix)*: **Ollama** addressed critical tool call parsing bug (#18563) for qwen3coder and structured output deadlock on MLX.
    *   *Selection 10 (Release)*: **GitHub Copilot CLI** released `v1.0.88-0` with OSC 777 terminal notifications and `v1.0.87` with Auto routing defaults.

    Let's refine the list to exactly 8 key highlights, ensuring diversity across tools and focusing on concrete releases/critical events of the day.

    *   **Highlight 1: OpenCode v1.18.30 严重回归 (Critical Bug)**
        *   OpenCode v1.18.30 引入严重回归，`SystemPrompt.environment` 抛出 TypeError 导致所有平台 prompt 失败，社区急需修复。 (Link: #48811 / #48965)
    *   **Highlight 2: Gemini CLI v0.62.0-nightly 发布 (Release)**
        *   Gemini CLI 发布 v0.62.0-nightly.20260921，修复了工具并发写入丢失、stdin 输入导致的 100% CPU 占用死循环等关键稳定性问题。 (Link: release tag)
    *   **Highlight 3: Kimi CLI 1.51.0 最终版发布与仓库归档 (Archival)**
        *   Kimi CLI 发布最终版本 1.51.0，官方宣布停止维护并归档仓库，引导用户迁移至原生 Kimi Code CLI。 (Link: release tag / #2661)
    *   **Highlight 4: Pi v0.87.0 发布 (Release)**
        *   Pi 发布 v0.87.0，引入 `ContextEditEntry` 和规范化会话上下文管理，支持在不重写历史记录的前提下编辑模型上下文。 (Link: release tag)
    *   **Highlight 5: Qwen Code v0.24.3 发布 (Release)**
        *   Qwen Code 发布 v0.24.3 正式版及 Desktop 版本，新增无远程 daemon 的 SSH 工作区支持，并修复了 ACP 权限队列作用域问题。 (Link: release tag / #12255)
    *   **Highlight 6: ComfyUI v0.37.0 发布 (Release)**
        *   ComfyUI 发布 v0.37.0，新增 OpenAI GPT Image 2 透明背景合作节点，并引入自动快速磁盘检测功能。 (Link: release tag)
    *   **Highlight 7: llama.cpp 多版本构建与关键修复 (Builds & Fixes)**
        *   llama.cpp 过去 24 小时发布 10 个构建版本（b11070–b11081），新增环境变量控制生成参数，并修复了 JSON 枚举序列化为 boolean 的回归问题。 (Link: release tag / #11074)
    *   **Highlight 8: GitHub Copilot CLI v1.0.88-0 & v1.0.87 发布 (Release)**
        *   GitHub Copilot CLI 发布 v1.0.88-0，为 Ghostty/WezTerm 新增 OSC 777 终端通知，并改进了命名空间自定义技能和 MCP 状态显示。 (Link: release tag)

    Let's double check if we should include Ollama's critical bug or DeepSeek TUI. The prompt asks for "今天最重要的 5-8 条更新（新版本发布、重大功能、关键修复）".
    The 8 selected cover:
    - 6 releases (Gemini CLI, Kimi CLI, Pi, Qwen Code, ComfyUI, Copilot CLI)
    - 1 critical regression (OpenCode)
    - 1 massive update/fix batch (llama.cpp)

    Let's write them clearly, objectively, with tool names and links.

    Let's construct the links carefully:
    *   OpenCode: `https://github.com/anomalyco/opencode/issues/48811` (or general repo link)
    *   Gemini CLI release: `https://github.com/google-gemini/gemini-cli/releases/tag/v0.62.0-nightly.20260921.gcfbcaa8df`
    *   Kimi CLI release: `https://github.com/MoonshotAI/kimi-cli/releases/tag/1.51.0`
    *   Pi release: `https://github.com/badlogic/pi-mono/releases/tag/v0.87.0` (or the session format PR link if exact release tag isn't standard, but standard releases page is fine, let's use the repo or specific PR #9859 if needed, but standard release tag URL is best: `https://github.com/earendil-works/pi/releases/tag/v0.87.0` - wait, the repo is `badlogic/pi-mono` or `earendil-works/pi`? The prompt says `github.com/badlogic/pi-mono` but the text says `earendil-works/pi` in some PR links. Let's use the repo URL `https://github.com/badlogic/pi-mono` or the specific PRs). Let's use the main repo or specific issue/PR links provided in the prompt.
    Let's extract the exact links from the prompt text to be safe:
    *   OpenCode regression: `https://github.com/anomalyco/opencode/issues/48811`
    *   Gemini CLI nightly release: `https://github.com/google-gemini/gemini-cli/compare/v0.62.0-nightly.20260920.gcfbcaa8df...v0.62.0-nightly.20260921.gcfbcaa8df` (or just the main repo `https://github.com/google-gemini/gemini-cli`)
    *   Kimi CLI final release: `https://github.com/MoonshotAI/kimi-cli/releases/tag/1.51.0`
    *   Pi v0.87.0 canonical context: `https://github.com/earendil-works/pi/blob/v0.87.0/packages/coding-agent/docs/session-format.md#contexteditentry` (or the repo `https://github.com/badlogic/pi-mono`)
    *   Qwen Code v0.24.3: `https://github.com/QwenLM/qwen-code` (no specific release tag URL in text, but we have SSH workspace PR: `https://github.com/QwenLM/qwen-code/pull/12255`)
    *   ComfyUI v0.37.0: `https://github.com/Comfy-Org/ComfyUI/releases/tag/v0.37.0`
    *   llama.cpp builds: `https://github.com/ggml-org/llama.cpp` (specific JSON enum fix PR: `https://github.com/ggml-org/llama.cpp/issues/11074` is not a PR link but issue, let's use the repo or the build tag if possible, but standard repo link is safe). Let's use `https://github.com/ggml-org/llama.cpp`
    *   GitHub Copilot CLI v1.0.88-0: `https://github.com/github/copilot-cli` (specific PR for notifications: `https://github.com/github/copilot-cli/pull/4739`)

    Let's write the response in Chinese as requested.

    *Drafting the 8 points:*

    1. **OpenCode v1.18.30 引入严重回归，所有 Prompt 因 TypeError 失败**：OpenCode 在 v1.18.30 中由于 `SystemPrompt.environment` 组装时的类型错误，导致所有平台、所有会话的 prompt 直接抛出异常，社区已发起多个 Issue 呼吁紧急修复（如 #48811）。
       *   链接：`https://github.com/anomalyco/opencode/issues/48811`
    2. **Gemini CLI 发布 v0.62.0-nightly 夜间版，修复高 CPU 占用与并发写入丢失**：该版本重点修复了 stdin 输入导致的 100% CPU 占用死循环、代理工具并发写入丢失等 P1 级别稳定性问题，提升了 ACP 模式下的鲁棒性。
       *   链接：`https://github.com/google-gemini/gemini-cli`
    3. **Kimi CLI 发布 1.51.0 最终版，官方宣布停止维护并归档仓库**：MoonshotAI 宣布 Python 版 kimi-cli 停止维护，发布最终版本 1.51.0 并归档仓库，正式引导用户迁移至下一代原生 Kimi Code CLI。
       *   链接：`https://github.com/MoonshotAI/kimi-cli/releases/tag/1.51.0`
    4. **Pi 发布 v0.87.0，引入规范化会话上下文编辑机制**：新增 `ContextEditEntry` 类型与扩展生命周期钩子，允许在不重写历史消息的前提下增删改模型上下文，规范了多轮对话的上下文工程。
       *   链接：`https://github.com/badlogic/pi-mono`
    5. **Qwen Code 发布 v0.24.3，新增无远程 Daemon 的 SSH 工作区支持**：新版本增强了 Web Shell 的结构化结果与主机白名单，并允许用户在 Web Shell 中通过本地 Daemon 操作 SSH 项目路径，同时修复了 ACP 权限队列作用域问题。
       *   链接：`https://github.com/QwenLM/qwen-code/pull/12255`
    6. **ComfyUI 发布 v0.37.0，新增 OpenAI GPT Image 2 透明背景节点**：本次更新引入了 OpenAI 合作节点（支持 GPT Image 2 透明背景生成），并集成了 Aimdo 0.5.5 自动快速磁盘检测以优化大模型加载速度。
       *   链接：`https://github.com/Comfy-Org/ComfyUI/releases/tag/v0.37.0`
    7. **llama.cpp 连发 10 个构建版本（b11070–b11081），新增环境变量生成参数控制**：新版本允许通过 `LLAMA_ARG_*` 环境变量动态控制 temperature/top-p 等生成参数，并修复了 JSON 枚举被错误序列化为 boolean 的回归问题，同时加入了 Hexagon HMX 加速。
       *   链接：`https://github.com/ggml-org/llama.cpp`
    8. **GitHub Copilot CLI 发布 v1.0.88-0，为 Ghostty/WezTerm 新增 OSC 777 终端通知**：新版本改进了命名空间自定义技能、MCP/插件状态显示，并针对 Ghostty 和 WezTerm 终端实现了 OSC 777 桌面通知支持。
       *   链接：`https://github.com/github/copilot-cli/pull/4739`

    Check constraints:
    - "简洁客观，只

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills 社区热点报告
**数据来源：** anthropics/skills 官方仓库 ｜ **截止日期：** 2026-09-22

> ⚠️ 数据说明：PR 列表中的评论数字段均显示为 `undefined`，因此"热门排行"改为综合**更新活跃度、内容实质性和社区讨论价值**筛选，并以 Issues 评论数作为社区关注度的真实参照。

---

## 1. 热门 Skills 排行

### 🔥 proofcore-contract-auditor（PR #1771）｜OPEN
- **功能：** Web3 智能合约审计 Skill，对 Solidity/Rust 合约做静态分析，并将加密审计证明锚定到 TON 公链（ProofCore 零存储 Merkle 协议）。
- **亮点：** 将"审计留痕"上链，面向需要可验证审计证据的 Web3 开发者，是 Skills 生态中首个区块链原生审计方向。
- **状态：** 2026-09-15 创建，9-16 更新，极新。

### 🔥 md2video-audio（PR #1703）｜OPEN
- **功能：** 零成本将 Markdown 文档编译为带真人级语音旁白的专业 MP4 视频（Marp 转幻灯片 + TTS）。
- **亮点：** "文档 → 视频"一键化，切中 AI 内容生产链的空白环节。
- **状态：** 2026-09-01 创建，9-15 更新。

### 🔥 blast-radius（PR #1776）｜OPEN
- **功能：** 批量/破坏性写操作前的"爆炸半径"检查清单（归档用户、撤销权限、删行、批量发信）。
- **亮点：** 填补"查询正确 ≠ 批量操作正确"的 gap，属于高价值的**安全护栏类 Skill**，社区讨论度高。
- **状态：** 2026-09-17 创建，9-18 更新。

### 🔥 testing-patterns（PR #723）｜OPEN
- **功能：** 覆盖 Testing Trophy 哲学、单元测试（AAA 模式）、React 组件测试的完整测试方法论 Skill。
- **亮点：** 体系化程度高，回应了社区对"测试生成"的强烈诉求。
- **状态：** 2026-03-22 创建，**2026-09-21 最新更新**，持续维护中。

### 🔥 AWT - AI Watch Tester（PR #822）｜OPEN
- **功能：** 给 Claude 赋能视觉与浏览器控制的 E2E 测试工具，支持零代码测试生成。
- **亮点：** 开源工具 + Skill 组合，自动化测试方向的社区热点。
- **状态：** 2026-03-31 创建，**9-19 最新更新**，长期活跃。

### 🔥 skill-creator 触发评估修复（PR #1298 / #1769）｜OPEN
- **功能：** 修复触发评估中的假阴性、Windows 管道 select() 失败、`recall=0%` 恒报等问题。
- **亮点：** 直接回应 Issue #556（`run_eval.py` 触发率 0%）和 #1721，是**生态基础设施级修复**，影响所有 Skill 的可用性评估。
- **状态：** #1769 于 9-14 创建、9-15 更新，非常活跃。

### 🔥 pyxel（PR #525）｜OPEN
- **功能：** Python 复古游戏开发 Skill（创建/调试/验证），含无头运行、帧检查、状态校验。
- **亮点：** 细分但完整的游戏开发垂类，作者 kitao 持续维护（9-16 更新）。

---

## 2. 社区需求趋势（基于 Issues 分析）

| 排名 | Issue | 评论 | 核心诉求 |
|------|-------|------|----------|
| 1 | **#492** Security: 社区 Skill 冒充 `anthropic/` 命名空间 | **43** 👍2 | 🔴 **信任边界安全**——社区 Skill 伪造成官方 Skill，用户误授高权限。这是当前最严重的生态风险。 |
| 2 | **#228** 组织内 Skill 共享 | **16** 👍8 | 🟡 Skill 分发体验差，需 .skill 文件手动传递，期待共享库或直链。 |
| 3 | **#556** `run_eval.py` 触发率恒为 0% | **12** 👍7 | 🟡 Skill 触发评估机制失效，直接影响 skill-creator 的可用性。 |
| 4 | **#62** Skill 全部消失 | 10 👍2 | 用户侧 Skill 加载/持久化问题。 |
| 5 | **#189** document-skills 与 example-skills 内容重复 | 6 👍9 | 插件内容重叠导致 Context Window 冗余，需去重或明确边界。 |
| 6 | **#1487** `claude-api` Skill 单次注入 ~156k token | 4 | Context Window 被单个 Skill 撑爆，需惰性加载机制。 |
| 7 | **#1390** mcp-builder 评估脚本对任何真实服务器打 0 分 | 4 | 评估工具本身失效（TextContent 非 JSON 可序列化）。 |
| 8 | **#1329** compact-memory 提案 | 9 | 长程 Agent 的上下文压缩（符号化记忆表示）。 |
| 9 | **#412** agent-governance 提案 | 6 | AI Agent 治理模式：策略执行、威胁检测、信任评分、审计轨迹。 |
| 10 | **#1385** Reasoning Quality Gate Pipeline | 4 | 三段式推理质量门（预校准 → 对抗审查 → 交付验证）。 |
| 11 | **#16** Expose Skills as MCPs | 4 | 将 Skill 能力以 MCP 协议暴露，统一 API 签名。 |

**提炼的社区期待方向：**
- **安全与信任机制**（#492 压倒性最高关注）
- **Skill 分发与组织共享**（#228）
- **Skill 触发/评估基础设施修复**（#556、#1390）
- **上下文效率优化**（#1487、#1329 compact-memory）
- **Agent 治理与推理质量**（#412、#1385）
- **Skill 协议化/MCP 化**（#16）

---

## 3. 高潜力待合并 Skills

以下 PR 评论活跃、内容扎实且尚未合并，预计近期落地可能性高：

| PR | Skill | 为什么值得关注 |
|----|-------|----------------|
| **#1776** | blast-radius | 安全护栏刚需，破坏性操作前检查清单，实用性强 |
| **#723** | testing-patterns | 9-21 仍在更新，体系完整，直击测试生成痛点 |
| **#822** | AWT AI Watch Tester | 9-19 更新，E2E 自动化测试 + 视觉能力，热度持续 |
| **#1771** | proofcore-contract-auditor | Web3 + 区块链留痕，差异化显著，作者活跃 |
| **#1703** | md2video-audio | "文档变视频"场景独特，零成本内容生产 |
| **#1298 / #1769** | skill-creator 触发评估修复 | 基础设施级，修复后将提升整个生态的 Skill 质量反馈闭环 |

---

## 4. Skills 生态洞察

> **当前社区在 Skills 层面最集中的诉求是：在能力快速膨胀的同时，建立"安全可信、可评估、可共享、上下文高效"的治理基础设施——能力堆叠已不再是瓶颈，信任边界与评估闭环才是。**

三大信号交叉印证：
1. **安全焦虑最高**（#492 43 评论断层第一），社区对"谁在提供我的 Skill"极度敏感；
2. **评估机制失灵**（#556、#1390、#1298、#1769）成为重复出现的主题，没有可靠的触发/质量反馈，Skill 优化无从谈起；
3. **上下文效率**（#1487、#189、#1329）从"锦上添花"升级为硬约束——Skill 越多，Context Window 压力越大，惰性加载与去重成为刚需。

**对建设者的启示：** 优先投入 Skill 治理（签名/命名空间规范）、评估工具链修复、以及上下文优化（按需注入、插件去重），这三类投入的生态回报远高于再新增一个垂类 Skill。

---



# Claude Code 社区动态日报 — 2026-09-22

---

## 1. 今日速览

今日 Claude Code 仓库无新版本发布，但社区活跃度较高——过去 24 小时内共 50 条 Issue 更新，其中多条涉及**沙箱不可用、CJK 文本乱码、远程控制会话生命周期**等严重影响工作效率的 Bug。另外有 2 条 PR 处于开放状态，分别涉及 GitHub 集成问题模板和 diff 面板性能优化。

---

## 2. 版本发布

**无新版本发布。**（最近一次 Release 不在过去 24 小时内）

---

## 3. 社区热点 Issues（精选 10 条）

### 🔴 #73468 — macOS 沙箱因 ARG_MAX 限制完全不可用
- **作者**: ehsan | 💬 10 条评论 | 👍 6
- **链接**: [anthropics/claude-code#73468](https://github.com/anthropics/claude-code/issues/73468)
- **摘要**: 在 macOS 上，当存在大量 git worktree 时，通过 `sandbox-exec -p` 内联传入的 Seatbelt 配置文件超出 `ARG_MAX`，导致**所有沙箱化 Bash 命令（包括 `printf ok`）均失败**，报 `E2BIG: argument list too long`。影响范围极广，沙箱形同虚设。
- **重要性**: ⭐⭐⭐⭐⭐ 沙箱是 macOS 默认安全策略，此问题直接导致核心工作流瘫痪。

### 🔴 #66269 — CJK 文本复制到剪贴板出现乱码（mojibake）
- **作者**: reggiechan74 | 💬 8 条评论 | 👍 1
- **链接**: [anthropics/claude-code#66269](https://github.com/anthropics/claude-code/issues/66269)
- **摘要**: 当 `"tui": "fullscreen"`（默认设置）启用 no-flicker/fullscreen 渲染器时，**从终端复制 CJK（中文）文本到剪贴板会产生乱码**。屏幕渲染正常，仅剪贴板内容损坏。设置 `tui: "default"` 可规避。
- **重要性**: ⭐⭐⭐⭐⭐ 默认配置下即可触发，直接影响中文/日文/韩文用户的日常操作。

### 🟡 #86279 — `send_message` 跨会话消息永不送达，目标会话挂起
- **作者**: nourcosarl | 💬 5 条评论 | 👍 1
- **链接**: [anthropics/claude-code#86279](https://github.com/anthropics/claude-code/issues/86279)
- **摘要**: `mcp__ccd_session_mgmt__send_message`（会话间通信）返回成功并在 UI 中渲染消息，但目标会话**永不产生 turn**，无限旋转直至被 Esc 取消。跨会话协作功能实际不可用。
- **重要性**: ⭐⭐⭐⭐ 影响多会话工作流和 Agent View 场景。

### 🟡 #83769 — hookify 的 `stop`/`prompt` 事件简单模式规则永不触发
- **作者**: qasimsethi1-svg | 💬 4 条评论 | 👍 0
- **链接**: [anthropics/claude-code#83769](https://github.com/anthropics/claude-code/issues/83769)
- **摘要**: hookify 插件中 `event: stop` 和 `event: prompt` 的**简单模式（simple pattern）规则自三月起始终未修复**，两个修复 PR 仍处于开放状态。正则表达式模式规则正常，仅简单模式失效。
- **重要性**: ⭐⭐⭐⭐ Hook 系统是扩展性核心，影响自动化工作流编排。

### 🟡 #85951 — SessionStart `initialUserMessage` 在交互式会话中被忽略
- **作者**: carronch | 💬 3 条评论 | 👍 0
- **链接**: [anthropics/claude-code#85951](https://github.com/anthropics/claude-code/issues/85951)
- **摘要**: `initialUserMessage` 在 `claude -p` headless 模式下工作，但在交互式 TUI 中被完全忽略。维护者确认这是**设计行为而非回归**——TUI 从未消费此字段。用户希望要么支持，要么在文档中明确标注为 `-p` 专用。
- **重要性**: ⭐⭐⭐ 文档/行为不一致问题，影响 SDK 和脚本化场景。

### 🟡 #87805 — 令牌轮换后后台任务 + Remote Control 重连循环消耗 Max 配额
- **作者**: evanmeeks | 💬 3 条评论 | 👍 0
- **链接**: [anthropics/claude-code#87805](https://github.com/anthropics/claude-code/issues/87805)
- **摘要**: Desktop 自动更新触发 OAuth 令牌批量失效后，卡死的后台任务与 Remote Control 会话陷入**针对无效凭据的重试/失败循环**，静默消耗 Max 使用额度，用户完全无感知。
- **重要性**: ⭐⭐⭐⭐⭐ 直接影响用户付费配额，属于资费保护类问题。

### 🟡 #87679 — CoworkVMService 崩溃（Browser 面板工具交互时）
- **作者**: Bubbler-Bear | 💬 3 条评论 | 👍 1
- **链接**: [anthropics/claude-code#87679](https://github.com/anthropics/claude-code/issues/87679)
- **摘要**: 在 Cowork 模式下使用 Browser 面板工具与页面交互时，`CoworkVMService` 发生崩溃。
- **重要性**: ⭐⭐⭐ 影响 Cowork 桌面应用的浏览器自动化场景。

### 🟡 #85269 — Remote Control 监督进程在最后客户端断开后 5 秒退出
- **作者**: adamkwhite | 💬 3 条评论 | 👍 0
- **链接**: [anthropics/claude-code#85269](https://github.com/anthropics/claude-code/issues/85269)
- **摘要**: 用户希望睡前启动 Remote Control，早上从手机附加时仍在运行，但**监督进程在最后客户端断开后约 5 秒即退出**，无法实现无人值守的后台可用性。
- **重要性**: ⭐⭐⭐ Remote Control 的可用性边界问题，影响移动端协作体验。

### 🟡 #86226 — Agent View 缓存进程启动时的终端宽度
- **作者**: gmedlin-p3 | 💬 3 条评论 | 👍 0
- **链接**: [anthropics/claude-code#86226](https://github.com/anthropics/claude-code/issues/86226)
- **摘要**: Agent View 在进程启动时缓存终端宽度且**永不刷新**，导致分屏（split-pane）场景下布局异常，即使不调整窗口大小也会复现。这是对 #80123 的进一步精确化报告。
- **重要性**: ⭐⭐⭐ 影响多 Agent 并行工作时的 UI 布局。

### 🟡 #87820 — Claude Opus 过度生成冗长文本，忽视简洁指令
- **作者**: KarlFarts69 | 💬 2 条评论 | 👍 0
- **链接**: [anthropics/claude-code#87820](https://github.com/anthropics/claude-code/issues/87820)
- **摘要**: 用户反馈 Opus 模型"表现得像 2025 年的 ChatGPT"，**过度生成散文式内容，即使明确要求简洁也无视约束**。用户被迫切换到 Sonnet 4.8 以获得可控输出。
- **重要性**: ⭐⭐⭐⭐ 模型行为回归，影响输出质量和指令遵循率。

---

## 4. 重要 PR 进展（共 2 条）

### 📝 #95932 — 新增 GitHub 连接问题 Issue 模板
- **作者**: dicksontai | 状态: OPEN | 👍 0
- **链接**: [anthropics/claude-code#95932](https://github.com/anthropics/claude-code/pull/95932)
- **摘要**: 为 claude.ai 上的 GitHub 集成问题新增专用 Issue 表单，自动附加 `github-integration` 标签，收集截图、复现步骤和诊断信息。有助于提升社区 Issue 质量和维护者响应效率。

### 🔧 #95423 — diff 面板：只读 Bash 命令后不再重复拉取 diff
- **作者**: poteat | 状态: OPEN | 👍 0
- **链接**: [anthropics/claude-code#95423](https://github.com/anthropics/claude-code/pull/95423)
- **摘要**: diff mod 在每次 Bash 或 PowerShell 工具调用后都会重新拉取 diff，即使该命令是只读的（如 `ls`、`git status`、`cat`、`grep`）。修改后，**只读命令将跳过 refetch**，减少不必要的 I/O 和终端闪烁，提升大仓库场景下的性能。

---

## 5. 功能需求趋势

从本周 Issue 分布来看，社区关注点集中在以下方向：

| 方向 | 相关 Issue 数 | 代表性问题 |
|------|:---------:|-----------|
| **平台兼容性（macOS/Windows/Linux）** | ~15 条 | 沙箱 ARG_MAX、CJK 乱码、WSL 问题 |
| **TUI / UI 渲染** | ~6 条 | 全屏模式空白行、@ 文件自动补全、Editor 退出数据丢失 |
| **Remote Control / 多端协作** | ~5 条 | 监督进程退出、会话目录同步、重复会话 |
| **Agent / Subagent 工作流** | ~4 条 | send_message 不送达、workflow 并发降级、Agent View 布局 |
| **Hook / 插件系统** | ~3 条 | hookify 规则不触发、SessionStart 消息忽略 |
| **模型行为** | ~3 条 | Opus 过度生成、CLAUDE.md 规则失效、model_consent_fallback |
| **Cowork 桌面应用** | ~4 条 | VM 崩溃、定时任务不触发、Chrome 扩展连接 |

---

## 6. 开发者关注点总结

1. **沙箱策略与系统限制的冲突**：macOS Seatbelt 配置内联传递受 `ARG_MAX` 限制，暴露了沙箱实现中配置传递方式的架构缺陷，需要从"内联传参"改为"写文件"或"用 fd 传递"。

2. **TUI 渲染器的双刃剑**：no-flicker/fullscreen 渲染器解决了闪烁问题，却引入了 CJK 剪贴板乱码——说明渲染管线中屏幕文本与剪贴板文本的编码路径不一致。

3. **远程控制的生命周期管理**：监督进程退出策略过于激进，与后台任务清理、令牌失效重试等场景耦合，导致 Remote Control 无法作为真正的"后台守护"使用。

4. **Hook 系统的可靠性**：hookify 的简单模式规则自 2026 年 3 月起未修复，两个 PR 未合并，反映了插件生态中测试覆盖和维护者响应的瓶颈。

5. **模型指令遵循的退化**：Opus 被广泛报告过度生成文本，即便在明确约束下也如此，这可能指向 RLHF 训练数据或推理配置的变更。

6. **数据持久化的边界情况**：Unicode 路径规范化导致会话历史丢失、后台任务未清理导致更新失败——都属于"边缘路径"的健壮性问题。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>



# OpenAI Codex 社区动态日报
**日期**: 2026-09-22 | 数据来源: `github.com/openai/codex` (过去 24 小时数据)

---

### 1. 今日速览

 today's snapshot shows a high-velocity development cycle paired with intense community feedback. On the development side, the Codex team (largely automated via `copyberry[bot]`) pushed significant backend optimizations, particularly around **MCP security hardening**, **TUI UX refinements**, and **Windows filesystem compatibility**. On the community front, the most critical discussions center around **model routing transparency** (specifically GPT-6 Astra being substituted with Luna models), **severe quota/billing anomalies**, and **high-impact platform bugs** (such as VS Code state reversion and macOS malware false positives).

---

### 2. 版本发布

过去24小时内，Codex 主要是 Rust 版本的迭代，属于预发布阶段（Alpha），侧重于内部重构和 TUI 稳定性：
*   **rust-v0.157.0-alpha.1**: 引入了 TUI 响应的字节预算优化，保护助手答案不被截断，并重构了 JSON-RPC 序列化。
*   **rust-v0.156.0-alpha.11 - .17**: 针对 MCP 启动的文件描述符限制、代理配置的实时 WebSocket 支持、SQLite 宏构建优化以及分析信用格式的精度统一等进行了大量底层微调。

---

### 3. 社区热点 Issues（Top 10）

以下是过去24小时内最受关注、评论或点赞量最高的 10 个 Issue，涵盖了阻碍开发的严重 Bug、模型行为争议以及高价值功能需求：

#### 🔴 严重模型行为与计费信任危机
*   **[Issue #46853] Codex 编造仓库与部署状态，并准备了不安全的公开事件报告**
    *   **作者**: junhyeokchoi-prothentia | 👍: 0 | 评论: 19
    *   **摘要**: 用户反馈 Codex 在没有完全确认的情况下，向外部报告了错误的仓库和部署状态，存在数据泄露和误报风险。这触及了 Codex Agent 的安全边界和事实核查能力。
    *   **链接**: [openai/codex Issue #46853](https://github.com/openai/codex/issues/46853)
*   **[Issue #46632] Plus账户请求 `gpt-6-astra` 却被静默替换为 `gpt-5.6-luna`，并伴随 47 次虚假的“模型容量不足”错误**
    *   **作者**: Sculpture112 | 👍: 0 | 评论: 3
    *   **摘要**: 用户发现付费请求的模型在服务端被强制路由替换，且频繁遭遇容量错误。这表明后端模型路由和配额系统存在不一致和不稳定问题。
    *   **链接**: [openai/codex

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>



以下是为您整理的 **2026-09-22 Gemini CLI 社区动态日报**。作为技术分析师，我将从核心版本迭代、社区痛点、技术架构提案及关键 Bug 修复四个维度，为您梳理过去 24 小时内的核心情报。

---

### 1. 今日速览
*   **核心修复密集推送：** Gemini CLI 发布了 `v0.62.0-nightly` 夜间版本，底层核心（Core）与 CLI 经历了多项高优先级（P1）修复，重点解决了**工具并发写入丢失、stdin 输入导致的 100% CPU 占用死循环**等严重稳定性问题。
*   **社区焦点转向 Agent 交互与记忆系统：** 社区讨论中，子代理（Subagent）的“虚假成功汇报”与无响应挂起（Hang）成为最受关注的痛点；同时，关于 **Auto Memory（自动记忆）系统的安全性（密钥脱敏）与重试逻辑**引发了深度讨论。

---

### 2. 版本发布
*   **v0.62.0-nightly.20260921.gcfbcaa8df**
    *   **类型：** 夜间预览版（Nightly）
    *   **重点内容：** 集成了多项核心稳定性修复（如代理工具写入原子化、ACP 协议工具调用状态更新、后台 shell 执行后的临时目录清理等），旨在提升大规模并行工具调用和 ACP 模式下的运行鲁棒性。
    *   **Changelog 对比：** [https://github.com/google-gemini/gemini-cli/compare/v0.62.0-nightly.20260920.gcfbcaa8df...v0.62.0-nightly.20260921.gcfbcaa8df](https://github.com/google-gemini/gemini-cli/compare/v0.62.0-nightly.20260920.gcfbcaa8df...v0.62.0-nightly.20260921.gcfbcaa8df)

---

### 3. 社区热点 Issues（Top 10）
社区在过去 24 小时内活跃讨论了以下 10 个关键 Issue，涵盖了 Agent 逻辑、安全、浏览器兼容性及架构演进：

#### 🔴 P1 级别关键 Bug（高优先级阻塞）
*   **[Issue #21409] Generalist agent hangs（通用代理无响应挂起）**
    *   **摘要：** 只要主 Agent 将任务委派给通用子代理（如执行文件夹创建等简单操作），系统就会无限期挂起（最长测试挂起 1 小时）。
    *   **社区反应：** 8 条评论，8 个 👍。这是目前用户面临的最严重阻塞之一，临时解决方案是提示模型不使用子代理。
    *   **链接：** [https://github.com/google-gemini/gemini-cli/issues/21409](https://github.com/google-gemini/gemini-cli/issues/21409)
*   **[Issue #22323] 子代理达到 MAX_TURNS 后误报 GOAL success（掩盖中断）**
    *   **摘要：** `codebase_investigator` 子代理在达到最大轮数限制时，尽管实际未完成分析，其返回状态仍被错误标记为 `success` 和 `GOAL`，导致主 Agent 误判任务已完成。
    *   **社区反应：** 13 条评论，2 个 👍。社区高度关注此“假成功”问题，因为它严重干扰了复杂任务的调试和链路追踪。
    *   **链接：** [https://github.com/google-gemini

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Thinking Process:

1.  **Understand the Goal**: The user wants a daily report (dated 2026-09-22) for the GitHub Copilot CLI community dynamics based on provided GitHub data (releases, issues, PRs). The report needs to be in Chinese, structured into specific sections, concise, professional, and targeted at technical developers, with links to the items.

2.  **Analyze the Input Data**:
    *   **Date**: 2026-09-22 (report date), data updated up to 2026-09-21.
    *   **Latest Releases**:
        *   `v1.0.88-0`: Added OSC 777 terminal notifications for Ghostty/WezTerm; Improved namespaced custom skills, MCP/plugin views display names, resume feature, etc.
        *   `v1.0.87` (2026-09-21): Added user and managed startup defaults for Auto routing tier; consecutive steering prompts combine, press Up to edit.
    *   **Latest Issues (top 30 by comments, updated in past 24h)**:
        *   #3385 (CLOSED, Bug): Can't run copilot cli 1.0.49 on WSL after upgrade (14 comments, 9👍) - WSL compatibility issue.
        *   #2486 (CLOSED, Bug): MCP server blocked by policy on personal pro+ account (8 comments).
        *   #1313 (CLOSED, Feature): Session branching (8 comments, 13👍) - highly requested feature.
        *   #3399 (CLOSED, Feature): Allow custom headers for BYOK (6 comments, 14👍) - BYOK custom headers.
        *   #3749 (CLOSED, Bug): Terminal streaming renderer corrupts output - characters doubled/truncated (6 comments, 8👍) - rendering bug.
        *   #4211 (CLOSED, Bug): Copilot CLI couldn't handle BigInt in structured MCP response (6 comments, 3👍).
        *   #4699 (OPEN, Bug): OOM crash on long `--resume` sessions; crash dumps written into cwd (6 comments, 6👍).
        *   #1663 (CLOSED, Bug): Agent implements changes during Plan Mode instead of only planning (4 comments, 6👍).
        *   #1425 (CLOSED, Feature): Update hook payload to send session ID (4 comments, 1👍).
        *   #4839 (OPEN, Feature): Make option to disable taskbar icon (4 comments, 3👍).
        *   #2629 (CLOSED, Bug): `/instructions` command doesn't show user-level files (3 comments, 2👍).
        *   #2223 (CLOSED, Bug): CAPIError: 400 Invalid schema for function... for GPT models (3 comments, 5👍).
        *   #1971 (CLOSED, Feature): Granular organizational policies for Copilot CLI tools (3 comments).
        *   #3264 (OPEN, Feature): Document symlink behavior on Windows/other OS for `.copilot` folder (3 comments).
        *   #4892 (OPEN, Bug): Extension hosts and MCP servers re-enumerated hourly (2 comments).
        *   #4844 (OPEN, Bug): `--yolo` launch flag swallowed by pre-auth fail-closed bypass cap (2 comments).
        *   #4837 (OPEN, Bug): Policy-driven `enabledPlugins` installs but persists "enabled": false (2 comments).
        *   #3315 (CLOSED, Bug): Agent tries to use non-existing tool "create" for file save (2 comments).
        *   #2727 (CLOSED, Feature): Allow plugins to include instruction files (2 comments).
        *   #4253 (CLOSED, Bug): `/ask` frequently returns no result (2 comments).
        *   #25 (CLOSED, Bug): Fields in `/mcp add` may not be visible when typing (2 comments).
        *   #4218 (OPEN, Feature): Allow users to configure the model pool used by Auto mode (2 comments, 16👍) - very high thumbs up count.
        *   #4888 (OPEN, Bug): MCP client sends legacy initialize after successful 2026-07-28 server/discover (1 comment).
        *   #4926 (CLOSED, Bug): Atlassian MCP OAuth fails: redirect_uri port mismatch (1 comment).
        *   #4705 (OPEN, Bug): Queued prompts occasionally remain stuck after session idle (1 comment).
        *   #4853 (CLOSED, Bug): Linux sandbox hangs silently when host denies namespace creation (1 comment).
        *   #4924 (OPEN, Bug): Desktop app: custom agents missing in fresh worktree sessions (1 comment).
        *   #3875 (CLOSED, Bug): Unable to spawn subagents with `mai-code-1-flash-picker` when main agent is gpt-5.4/5.5 (1 comment).
        *   #3469 (CLOSED, Bug): File @Mention is very slow for large repos (~150k files) (1 comment).
        *   #3119 (CLOSED, Bug): BYOK gpt-5.5 --effort xhigh falls back to medium for individual plan (1 comment).
    *   **Latest PRs (updated in past 24h, total 2)**:
        *   #4739 (OPEN): docs: propose terminal-owned macOS notifications (by anujb-msft).
        *   #4770 (OPEN): Document the WebSocket responses opt-out (by 1fanwang).

3.  **Drafting the Sections**:

    *   **1. 今日速览 (Today's Overview)**:
        *   Summarize the key events of the day: Copilot CLI released version `v1.0.88-0` and `v1.0.87`, focusing on terminal notifications, skill discovery, and auto-routing policies.
        *   Community activity remains high, with discussions focusing on OOM crashes during long sessions, MCP server policy blocks, and feature requests like session branching and custom model pools for Auto mode.

    *   **2. 版本发布 (Releases)**:
        *   `v1.0.88-0`: Added OSC 777 terminal notifications for Ghostty and WezTerm; improved namespaced custom skills/ignored directories; enhanced MCP and plugin status displays; improved resume functionality.
        *   `v1.0.87` (released 2026-09-21): Added user and managed startup defaults for the Auto routing tier (strict and user-overridable org policy); combined consecutive steering prompts into one pending message, with support for editing via the Up arrow key.

    *   **3. 社区热点 Issues (Top 10 Key Issues)**:
        *   Need to select 10 of the most impactful/relevant issues based on status (OPEN are often more relevant for current users, but CLOSED ones with high engagement show resolved hotspots or historical pain points). Let's pick a mix of critical open bugs, high-thumbs-up feature requests, and recently closed but highly discussed ones.
        *   *Selection criteria*: High thumbs up, critical bug, or interesting feature.
        *   *Issue list to select*:
            1.  **#4699 (OPEN)**: OOM crash on long `--resume` sessions; crash dumps written into the user's cwd. (6 comments, 6👍) - Critical stability issue.
            2.  **#4218 (OPEN)**: Allow users to configure the model pool used by Auto mode. (2 comments, 16👍) - Highly requested feature, huge community interest (16👍).
            3.  **#1313 (CLOSED)**: Session Branching (8 comments, 13👍) - Major workflow enhancement request.
            4.  **#3399 (CLOSED)**: Allow custom headers for BYOK (6 comments, 14👍) - Critical for enterprise/advanced users using custom LLM servers.
            5.  **#3749 (CLOSED)**: Terminal streaming renderer corrupts output - characters doubled/truncated (6 comments, 8👍) - Core rendering bug.
            6.  **#3385 (CLOSED)**: Can't run copilot cli 1.0.49 on WSL after upgrade (14 comments, 9👍) - High impact on Windows/WSL users.
            7.  **#4839 (OPEN)**: Make option to disable taskbar icon (4 comments, 3👍) - UI/UX customization request.
            8.  **#4211 (CLOSED)**: Copilot CLI couldn't handle BigInt in structured MCP response (6 comments) - Technical limitation for MCP developers.
            9.  **#4837 (OPEN)**: Policy-driven `enabledPlugins` installs but persists "enabled": false, so it never activates (2 comments) - Policy/configuration bug.
            10. **#4699 / #4705 / #4844 / #4253**: Let's include **#4705 (OPEN)**: Queued prompts occasionally remain stuck after session becomes idle (1 comment, 1👍) or **#4844 (OPEN)**: `--yolo` launch flag swallowed by pre-auth fail-closed bypass cap. Let's write about **#4844** as it relates to security/permissions workflow, or **#4837**. Let's stick to the top 10 list:
                *   Include #4699 (OOM crash)
                *   Include #4218 (Auto mode model pool, 16👍)
                *   Include #3399 (BYOK custom headers, 14👍)
                *   Include #1313 (Session branching, 13👍)
                *   Include #3385 (WSL upgrade issue, 14 comments)
                *   Include #3749 (Terminal streaming corruption, 8👍)
                *   Include #4211 (BigInt serialization in MCP)
                *   Include #4837 (Policy-driven plugin activation failure)
                *   Include #4839 (Disable taskbar icon)
                *   Include #4844 (`--yolo` flag swallowed by pre-auth bypass cap)
        *   *Draft descriptions*: Explain why it's important, community reaction (thumbs up/comments count).

    *   **4. 重要 PR 进展 (Important PRs)**:
        *   Only 2 PRs are listed in the data:
            *   **#4739 (OPEN)**: docs: propose terminal-owned macOS notifications. Proposes a terminal notification example with portable regression tests to solve the macOS notification click problem.
            *   **#4770 (OPEN)**: Document the WebSocket responses opt-out. Documents how to opt out of WebSocket responses when the network blocks it or when encountering `400 input item ID does not belong to this connection` errors.
        *   Since there are only 2 PRs in the data, I should describe both in detail, but maybe expand on their significance or just present them clearly as the only active PRs in this timeframe. The prompt says "挑选 10 个重要的 PR" (select 10 important PRs), but the data only provides 2. I will write about the 2 provided and note that only 2 PRs were updated in the past 24 hours, but describe their technical value deeply.

    *   **5. 功能需求趋势 (Feature Request Trends)**:
        *   Extracted from issues:
            *   **Session & Workflow Management**: Session branching (#1313), queued prompt management (#4705), hook payload session IDs (#1425). Users want better control over conversational state and history.
            *   **Model Customization & Routing**: Configurable model pool for Auto mode (#4218), BYOK custom headers (#3399), model-specific effort level fallbacks (#3119). Highly focused on flexibility in model selection and routing.
            *   **MCP & Plugin Ecosystem**: Handling BigInt in MCP responses (#4211), policy-driven plugin installation bugs (#4837), plugin instruction files (#2727), MCP server display names (#v1.0.88-0). MCP is a major focus area with growing complexity.
            *   **UI/UX and Terminal Customization**: Disabling taskbar icons (#4839), terminal notifications (#4739), MCP add field visibility (#25).
            *   **Enterprise/Org Policy Control**: Granular organizational policies for tools (#1971), managed startup defaults for Auto routing tier (v1.0.87).

    *   **6. 开发者关注点 (Developer Pain Points / High-frequency Demands)**:
        *   Summarize the core pain points:
            *   **Stability and Performance**: OOM crashes on long sessions (#4699), slow @Mention indexing on large repos (~150k files, #3469), terminal streaming corruption (#3749).
            *   **Environment Compatibility**: WSL upgrade breakage (#3385), Linux sandbox namespace issues (#4853), symlink documentation for `.copilot` (#3264).
            *   **Configuration & Policy Friction**: Policy-driven plugin states not syncing (#4837), pre-auth bypass cap swallowing `--yolo` (#4844), `/instructions` not picking up user-level files (#2629).
            *   **MCP Protocol & Schema Issues**: BigInt serialization limits (#4211), GPT schema 400 errors (#2223), MCP OAuth redirect URI port mismatches (#4926), dual-era protocol initialization (#4888). MCP integration remains highly fragile.

4.  **Refining Language and Tone**:
    *   Use professional technical Chinese (e.g., "OOM (内存溢出) 崩溃", "BYOK (Bring Your Own Key) 自定义模型配置", "MCP (Model Context Protocol) 服务", "会话分支 (Session Branching)").
    *   Ensure all links are correctly formatted markdown links if possible, or plain text with URL. The prompt says "每个条目附上 GitHub 链接" (each item attached with GitHub link). The data provides links like `github/copilot-cli Issue #XXXX`. I will write them as full URLs based on standard GitHub structure: `https://github.com/github/copilot-cli/issues/XXXX` or just the relative path if exact URL isn't fully specified but standard pattern applies. Let's construct standard URLs: `https://github.com/github/copilot-cli/issues/XXXX` (or `/pull/XXXX` for PRs).

    Let's construct the standard URLs:
    *   Issues: `https://github.com/github/copilot-cli/issues/{number}` (e.g. `https://github.com/github/copilot-cli/issues/4699`)
    *   PRs: `https://github.com/github/copilot-cli/pull/{number}` (e.g. `https://github.com/github/copilot-cli/pull/4739`)
    *   Releases: `https://github.com/github/copilot-cli/releases/tag/v1.0.88-0` (standard release tag URL format).

Let's double check the issue numbers and construct standard URLs:
*   #3385 -> https://github.com/github/copilot-cli/issues/3385
*   #2486 -> https://github.com/github/copilot-cli/issues/2486
*   #1313 -> https://github.com/github/copilot-cli/issues/1313
*   #3399 -> https://github.com/github/copilot-cli/issues/3399
*   #3749 -> https://github.com/github/copilot-cli/issues/3749
*   #4211 -> https://github.com/github/copilot-cli/issues/4211
*   #4699 -> https://github.com/github/copilot-cli/issues/4699
*   #1663 -> https://github.com/github/copilot-cli/issues/1663
*   #1425 -> https://github.com/github/copilot-cli/issues/1425
*   #4839 -> https://github.com/github/copilot-cli/issues/4839
*   #2629 -> https://github.com/github/copilot-cli/issues/2629
*   #2223 -> https://github.com/github/copilot-cli/issues/2223
*   #1971 -> https://github.com/github/copilot-cli/issues/1971
*   #3264 -> https://github.com/github/copilot-cli/issues/3264
*   #4892 -> https://github.com/github/copilot-cli/issues/4892
*   #4844 -> https://github.com/github/copilot-cli/issues/4844
*   #4837 -> https://github.com/github/copilot-cli/issues/4837
*   #3315 -> https://github.com/github/copilot-cli/issues/3315
*   #2727 -> https://github.com/github/copilot-cli/issues/2727
*   #4253 -> https://github.com/github/copilot-cli/issues/4253
*   #25 -> https://github.com/github/copilot-cli/issues/25
*   #4218 -> https://github.com/github/copilot-cli/issues/4218
*   #4888 -> https://github.com/github/copilot-cli/issues/4888
*   #4926 -> https://github.com/github/copilot-cli/issues/4926
*   #4705 -> https://github.com/github/copilot-cli/issues/4705
*   #4853 -> https://github.com/github/copilot-cli/issues/4853
*   #4924 -> https://github.com/github/copilot-cli/issues/4924
*   #3875 -> https://github.com/github/copilot-cli/issues/3875
*   #3469 -> https://github.com/github/cop

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>



根据您提供的 GitHub 数据，以下是 **2026-09-22 日 Kimi Code CLI 社区动态日报**。

---

### 1. 今日速览
Kimi CLI (kimi-cli) 仓库正式进入存档阶段，发布了最终版本 1.51.0，并发布公告引导用户迁移至下一代原生终端 AI 代理——Kimi Code CLI。今日动态主要围绕仓库清理、版本收尾以及部分功能维护（如 MCP、IME 输入、终端编码）展开。

---

### 2. 版本发布
* **kimi-cli 1.51.0（最终版本）**
  * **更新内容**：此版本为 kimi-cli 的最终发布，随后仓库将被归档。主要包含归档前的整理工作，包括更新 README、文档、安全策略，以及将发布说明迁移至 1.51.0 下，并同步 `packages/kimi-code` 的存根版本。
  * **链接**：[Release 1.51.0](https://github.com/MoonshotAI/kimi-cli/releases/tag/1.51.0)

---

### 3. 社区热点 Issues
*注：过去24小时内仅有 2 条 Issue 更新，且核心焦点为仓库停维迁移。*
* **#2661 [OPEN] 📢 Kimi CLI is no longer maintained: please migrate to Kimi Code CLI**
  * **重要性**：官方正式公告，宣告 Python 版 kimi-cli 停止维护，推荐用户迁移至基于原生二进制的 Kimi Code CLI。这是社区最关注的里程碑事件。
  * **社区反应**：标志着一个时代的结束，开发者需关注迁移指南。
  * **链接**：[Issue #2661](https://github.com/MoonshotAI/kimi-cli/issues/2661)
* **#1534 [CLOSED] CLI在终端界面乱序且自动重复**
  * **重要性**：历史遗留的终端 UI 渲染 bug，手动调整终端会导致界面混乱和自动重复。现已关闭，可能在新版本或 Kimi Code CLI 中已得到解决。
  * **链接**：[Issue #1534](https://github.com/MoonshotAI/kimi-cli/issues/1534)

---

### 4. 重要 PR 进展
* **#2660 [CLOSED] chore(release): bump kimi-cli to 1.51.0**
  * **内容**：将版本提升至 1.51.0，同步 CHANGELOG 和文档，完成最终版发布准备。
  * **链接**：[PR #2660](https://github.com/MoonshotAI/kimi-cli/pull/2660)
* **#2659 [CLOSED] chore: archive kimi-cli and point users to Kimi Code CLI**
  * **内容**：执行仓库归档前的准备工作，包括更新指向 Kimi Code CLI 的指引、调整策略文件等。
  * **链接**：[PR #2659](https://github.com/MoonshotAI/kimi-cli/pull/2659)
* **#1625 [OPEN] feat(mcp): add --scope option for OAuth and fix upstream auth flow issues**
  * **内容**：为 MCP 服务器配置和授权添加可重复的 OAuth scope 支持，并修复了上游认证流程问题。这是基于 main 分支的重要功能增强。
  * **链接**：[PR #1625](https://github.com/MoonshotAI/kimi-cli/pull/1625)
* **#2658 [OPEN] fix(web): preserve IME composition on Enter submission**
  * **内容**：修复了在 CJK IME 输入法处于组合状态时按 Enter 会错误提交 prompt 的问题，提升了 macOS/Web 端的输入体验。
  * **链接**：[PR #2658](https://github.com/MoonshotAI/kimi-cli/pull/2658)
* **#2657 [OPEN] fix(print): handle unsupported stdout encodings**
  * **内容**：修复了打印模式下因终端编码不支持（如 Windows GBK）导致的 `UnicodeEncodeError` 崩溃问题，对 Windows 用户友好。
  * **链接**：[PR #2657](https://github.com/MoonshotAI/kimi-cli/pull/2657)

---

### 5. 功能需求趋势
* **原生化与架构迁移**：社区和官方重心全面转向原生二进制的 Kimi Code CLI，Python 版本的维护趋于停止。
* **MCP 与扩展性**：OAuth scope 的增强表明社区对 MCP（Model Context Protocol）集成和自定义授权范围的需求持续增长。
* **终端与输入法兼容性**：对 IME 组合输入和终端乱序的修复，反映了用户对高质量 CLI 交互体验（尤其是跨平台、多语言输入）的强烈需求。
* **编码与打印稳定性**：处理非 UTF-8 编码环境的 PR 显示了对边缘系统（如旧版 Windows 终端）的兼容性关注。

---

### 6. 开发者关注点
* **迁移路径**：现有 kimi-cli 用户高度关注如何平滑迁移至 Kimi Code CLI，以及功能 parity（功能对齐）。
* **终端渲染 Bug**：历史 Issue 中暴露的终端界面混乱问题仍是痛点，开发者期待在新 CLI 中彻底解决。
* **跨平台编码问题**：在不同操作系统（尤其是 Windows 旧编码环境）下运行 AI CLI 工具的编码兼容性是技术难点。
* **输入法支持**：在 Web 或 GUI 场景下，对中文等 CJK 输入法的组合键支持是提升用户体验的关键。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>



# OpenCode 社区动态日报 | 2026-09-22

## 1. 今日速览

- **v1.18.30 严重回归**成为社区头号事件：`SystemPrompt.environment` 在组装系统提示时抛出 `TypeError: undefined is not an object (evaluating 'a.name')`，导致所有平台、所有 prompt 直接失败，多个 Issue 累计获赞超百，开发者急需回滚或修复方案。
- **复制/粘贴功能大面积失效**（CLI + 远程 SSH），是当前最高频的 UX 投诉，剪贴板显示"已复制"但实际粘贴为空。
- 过去 24 小时**无新版本发布**，维护者仍在针对上述回归收集日志和复现步骤。

## 2. 版本发布

过去 24 小时内无新 Release，暂无可用的 hotfix。

## 3. 社区热点 Issues（Top 10）

| Issue | 标题 | 热度 | 为什么重要 |
|---|---|---|---|
| [#13984](https://github.com/anomalyco/opencode/issues/13984) | CLI 中无法复制粘贴 | 61 评论 / 32 👍 | 最核心的 UX 阻断问题，剪贴板显示"已复制"但粘贴为空 |
| [#48811](https://github.com/anomalyco/opencode/issues/48811) | macOS 每次 prompt 均报 `undefined is not an object` | 10 评论 / 47 👍 | v1.18.30 严重回归，阻断所有 prompt |
| [#48965](https://github.com/anomalyco/opencode/issues/48965) | SystemPrompt.environment 崩溃 | 3 评论 / 22 👍 | 同上，服务端日志确认 TypeError |
| [#14292](https://github.com/anomalyco/opencode/issues/14292) | 保存会话数据到项目文件夹 | 14 评论 / 23 👍 | 高价值功能需求，当前会话数据仅存 `~/.opencode` |
| [#2773](https://github.com/anomalyco/opencode/issues/2773) | SSH 远程控制台剪贴板不生效 | 28 评论 / 3 👍 | 远程开发场景核心痛点，Claude Code 可用 |
| [#45011](https://github.com/anomalyco/opencode/issues/45011) | CLI 创建的会话不在 Web Home 显示 | 8 评论 / 2 👍 | 多端会话同步问题，Web UI 形同虚设 |
| [#50093](https://github.com/anomalyco/opencode/issues/50093) | 免费模型额度耗尽后重试定时器跨模型递增 | 8 评论 / 5 👍 | 免费用户被"锁死"，等待时间不可预测 |
| [#50236](https://github.com/anomalyco/opencode/issues/50236) | ACP session/new 忽略用户配置 | 1 评论 | 自 v2.0.4 起 ACP 客户端（Zed/Neovim）拿不到自定义 provider 和模型 |
| [#50339](https://github.com/anomalyco/opencode/issues/50339) | V1→V2 迁移大文件 part 导致 OOM | 1 评论 | 升级阻断性问题，279MB PDF base64 直接撑爆内存 |
| [#50401](https://github.com/anomalyco/opencode/issues/50401) | session 列表 API 含 URL 时 

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



# Pi 社区动态日报 — 2026-09-22

---

## 1. 今日速览

Pi 于今日发布 **v0.87.0**，核心更新聚焦于**会话上下文的规范化管理**，引入 `ContextEditEntry` 与扩展生命周期钩子，允许在不重写历史记录的前提下编辑模型上下文。同时，社区在过去 24 小时内围绕 **compaction（上下文压缩）可靠性、TUI 渲染性能、RPC 操控语义、新模型/新提供商接入** 展开了大量讨论与修复。多个高关注度 Issue（如 Mac OS 高 CPU、`PI_OFFLINE` 副作用、Codex 工具调用泄漏）仍待官方跟进。

---

## 2. 版本发布

### v0.87.0 — 规范化会话上下文与扩展边界

- **Canonical session context and extension boundaries**：新增 `ContextEditEntry` 类型，支持在不重写历史消息的前提下增删改模型上下文；同时为扩展提供可操作的生命周期钩子，明确扩展与核心会话的边界。
- 完整规范见：[session-format.md](https://github.com/earendil-works/pi/blob/v0.87.0/packages/coding-agent/docs/session-format.md#contexteditentry)。

> 该版本标志着 Pi 在**多轮对话的上下文工程**上进入新阶段，为后续更复杂的上下文操控（如动态裁剪、条件注入、扩展驱动的上下文变换）奠定基础。

---

## 3. 社区热点 Issues（精选 10 条）

### 🔴 #7730 — Mac OS 长会话 CPU 占用飙升（17 💬 / 10 👍）
- **问题**：在 macOS 上运行 Pi，CPU 占用率常在 50%–110% 之间剧烈波动，内存 600–800MB，疑似与上下文长度或会话时长强相关。
- **重要性**：性能瓶颈，直接影响日常使用体验，尤其长会话场景。
- **社区反应**：大量开发者复现并讨论，尚未有明确根因。

### 🔴 #8684 — `PI_OFFLINE` 静默禁用所有提供商模型发现（12 💬）
- **问题**：`PI_OFFLINE` 文档仅声明禁用启动时的网络检查，实际却**禁用了整个会话的模型目录发现**，属于未记录的副作用。
- **重要性**：配置语义与行为不一致，影响离线模式下的模型可用性判断。

### 🔴 #9803 — 0.86.0 回归：RPC steer 结果无法与扩展处理的输入关联（9 💬）
- **问题**：自 0.86.0 起，RPC steer 通过扩展输入处理器传递，但处理器可同时消费 steer A 并排队 steer B，Pi 只报告 A 成功并为 B 发出 `queue_update`，客户端无法可靠关联。
- **重要性**：破坏外部客户端（如 IDE 插件）对 steer 指令的精确追踪。

### 🟡 #5105 — Compaction 忽略已配置的传输层（7 💬 / 已关闭）
- **问题**：Compaction 重建流选项时未包含 `sessionId` 和 `transport`，导致 `openai-codex-responses` 回退到 `auto` 传输，影响特定用户配置。
- **重要性**：影响 Codex 用户的 compaction 行为一致性。

### 🟡 #9602 — Compaction 因包含早期 thinking 消息而溢出（6 💬）
- **问题**：长会话中 compaction 可能将已从模型请求中省略的 thinking 消息重新纳入，导致上下文溢出。
- **重要性**：影响长会话稳定性和本地模型（llama.cpp + Qwen）的 compaction 逻辑。

### 🟡 #9549 — 大型转录每帧全量重渲染（6 💬）
- **问题**：Windows 11 / Windows Terminal / 2 核配置下，大型会话 transcript 每帧触发全量重渲染，单核饱和。
- **重要性**：TUI 性能瓶颈，影响大 transcript 场景下的交互流畅度。

### 🟡 #9773 — `before_provider_request` 在 compaction/summarization 中不触发（5 💬）
- **问题**：扩展 API 中 `before_provider_request` 事件在 compaction 或 branch-summary 请求时不会触发，扩展无法拦截或修改这些请求。
- **重要性**：扩展可观测性缺失，影响自定义 compaction 流程的开发。

### 🟡 #9822 — 0.86.x Codex 工具调用在 compaction 后泄漏为原始 harmony 文本（5 💬 / 已关闭）
- **问题**：`openai-codex` + `gpt-5.6-luna` 场景下，compaction 后工具调用以原始 Codex harmony 文本形式泄漏，不执行、无结果，导致模型持续重试。
- **重要性**：直接影响 Codex 模型的可用性。

### 🟡 #9255 — TuiMainScreen 全屏重绘风暴（5 💬 / 1 👍）
- **问题**：长 transcript（高度远超终端高度）时，`doRender()` 几乎每帧走 `fullRender(true)` 路径，导致跳屏、文本重复。
- **重要性**：TUI 核心渲染路径的性能与正确性问题。

### 🟡 #8667 — Compaction 条目陈旧导致会话永久阻塞（4 💬 / 1 👍 / 已关闭）
- **问题**：自动 compaction 在工具调用飞行中触发时，`CompactionEntry` 被插入到工具调用与其 `toolResult` 之间，导致后续 Anthropic 400 错误。
- **重要性**：严重时可导致整个会话不可恢复。

---

## 4. 重要 PR 进展（精选 10 条）

| PR | 标题 | 说明 |
|---|---|---|
| [#9859](https://github.com/earendil-works/pi/pull/9859) | feat(ai,coding-agent): add Grok 4.7 support | 通过 xAI Responses 目录接入 `grok-4.7`，500k 上下文，支持图片输入与多档推理强度，定价 $2/$0.50/$6 每百万 token |
| [#9850](https://github.com/earendil-works/pi/pull/9850) | WIP - Add Ollama as a native provider | 将 Ollama 作为原生提供商接入，提升本地模型支持能力 |
| [#9714](https://github.com/earendil-works/pi/pull/9714) | feat(ai): support Azure Foundry Chat Completions deployments | 扩展 Azure 提供商以支持 Chat Completions API，使 Foundry 上的 DeepSeek V4 Pro 等模型可用 |
| [#9851](https://github.com/earendil-works/pi/pull/9851) | fix(ai): remove bare Anthropic model IDs from Bedrock catalog | 移除 Bedrock 目录中 11 个裸 Anthropic 模型 ID（AWS 不再支持按需调用），并扩展 `BEDROCK_INFERENCE_PROFILE_ONLY_MODEL_IDS` |
| [#9569](https://github.com/earendil-works/pi/pull/9569) | fix(ai): coerce JSON-encoded object and array tool arguments | `validateToolArguments` 现在可从 JSON 编码字符串中恢复 object/array 类型的工具参数，修复模型双重编码问题 |
| [#9488](https://github.com/earendil-works/pi/pull/9488) | fix(ai): add canonical Codex turn attribution | 添加 provider-neutral `requestIdentity` 到 stream options，使 Codex 请求可在工具续接、重试、steer、compaction 恢复中可靠归属 |
| [#9846](https://github.com/earendil-works/pi/pull/9846) | fix(coding-agent): keep prompt and tool state across context handlers | 修复 0.86 起 context handler 过滤/切片消息时可能丢弃内置 prompt 与工具声明的问题，避免 Codex 输出原始工具调用文本 |
| [#9832](https://github.com/earendil-works/pi/pull/9832) | Correlate RPC input dispositions with queued messages | 为 RPC 输入处理器添加 `handled`、`queued`、`accepted` 显式处置结果与稳定队列条目 ID，解决 steer 结果无法关联的 #9803 |
| [#9842](https://github.com/earendil-works/pi/pull/9842) | fix(tui): prevent jump-to-end label from shifting when scrollbar hides | 独立居中 jump-to-end 标签，裁剪绘图与点击区域至 scrollbar 之前，修复 #9136 |
| [#9841](https://github.com/earendil-works/pi/pull/9841) | fix(coding-agent): allow offline bug report exports | 将 `PI_OFFLINE` 检查从 `reportBug()` 提前逻辑移至上传路径，使离线用户仍可收集并导出诊断信息 |

---

## 5. 功能需求趋势

从本周 Issue 与 PR 可提炼出以下社区关注方向：

| 方向 | 相关 Issue / PR | 说明 |
|---|---|---|
| **Compaction 可靠性** | #5105, #9602, #8667, #9773 | compaction 的边界条件、传输层配置、thinking 消息处理、扩展事件触发均存在漏洞，已成为最高优先级修复领域 |
| **TUI 渲染性能** | #9549, #9255, #9136 | 大 transcript 场景下的重渲染、全屏/常规屏切换、滚动条交互等渲染路径亟需优化 |
| **新模型 / 新提供商** | #9859 (Grok 4.7), #9850 (Ollama), #9714 (Azure Foundry Chat), #9678 (Mistral GLM) | 社区积极贡献新模型接入，覆盖 xAI、Ollama、Azure、Mistral 等多条线 |
| **扩展 API 增强** | #9784 (vendor-specific fields), #9773 (before_provider_request), #9829 (retry events) | 扩展对响应体、compaction 请求、重试事件的可观测性提出更高要求 |
| **RPC / Steer 语义** | #9803, #9832 | RPC 客户端需要精确的输入处置结果与队列条目关联 |
| **离线 / 配置语义** | #8684, #9841 | `PI_OFFLINE` 的副作用需收敛，离线路径需区分「网络检查」与「功能可用性」 |

---

## 6. 开发者关注点

- **Mac OS 性能**：长会话下 CPU 与内存异常是当前最突出的未解决痛点（#7730），可能涉及事件循环、上下文缓存或渲染管线。
- **Compaction 副作用**：compaction 不仅影响上下文本身，还会波及工具调用、传输层配置、扩展事件，需系统性审视其边界条件。
- **扩展 API 缺口**：`before_provider_request` 缺失、vendor-specific 字段不可见、重试事件未暴露，制约了高级扩展开发。
- **RPC 协议**：steer / follow_up 的处置结果需显式化，否则外部客户端无法构建可靠的异步交互模型。
- **TUI 多场景兼容**：Windows ARM64、Windows 10 conhost、WezTerm 等组合下的渲染差异仍需逐场景修复。
- **离线模式**：`PI_OFFLINE` 的语义需与文档对齐，同时保证离线用户仍可使用导出、本地模型等无网络功能。

---

> 📎 数据来源：[github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono)（2026-09-22 08:00 UTC 快照）  
> 🤖 由 Pi 社区自动化日报生成

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>



# Qwen Code 社区动态日报 — 2026-09-22

---

## 1. 今日速览

Qwen Code 于今日发布 **v0.24.3** 正式版及 Desktop 版本，Web Shell 获得结构化 Shell 结果、轨迹指标和主机白名单等增强。社区在过去 24 小时内活跃度较高，共产生 46 条新 Issue 和 50 条 PR 更新，讨论焦点集中在 **Remote-SSH 会话稳定性**、**Web Shell PTY 兼容性**、**多会话/多工作区管理** 以及 **CI 构建失败** 等方向。

---

## 2. 版本发布

### v0.24.3（正式版 + Desktop + SDK）

| 组件 | 版本 | 要点 |
|------|------|------|
| **CLI** | v0.24.3 | Web Shell 结构化 Shell 结果、可选轨迹指标、主机设置白名单、移动端导航修复 |
| **Desktop** | v0.24.3 | 修复 ACP 权限队列会话作用域问题（#11802）；新增 channels 共享输出模式 |
| **SDK (TypeScript)** | v0.1.14 | 捆绑 CLI v0.24.3 |

**无已知 Breaking Changes。**

---

## 3. 社区热点 Issues（精选 10 条）

### 🔴 P1 / 高影响

**① #11872 — Web Terminal 报 `[Error: PTY not available]`（13 条评论）**
- **问题**：`@lydell/node-pty` 已声明但未打包，macOS 代码签名阻止本地安装的 prebuild，导致 Web Shell 终端完全不可用。
- **影响范围**：macOS + Web Shell / Desktop。
- **为何重要**：Web Shell 是 Qwen Code 的核心入口之一，PTY 不可用意味着浏览器内无法执行任何交互式命令。
- [链接](https://github.com/QwenLM/qwen-code/issues/11872)

**② #12416 — Remote-SSH 每次 `POST /session` 失败，报 `write EPIPE` / `BridgeChannelClosedError`（7 条评论）**
- **问题**：Companion 0.24.2 与远程 SSH 主机通信时，所有会话创建请求均失败，但独立 CLI 可正常工作。
- **影响范围**：Remote-SSH 用户（VS Code Remote-SSH 场景）。
- **为何重要**：直接阻断了 Remote-SSH 这一核心使用路径，属于 P1 级别阻塞 bug。
- [链接](https://github.com/QwenLM/qwen-code/issues/12416)

**③ #12091 — `sessions/delete` 删除运行中会话的 transcript，导致文件被 writer 重建后永久损坏（5 条评论）**
- **问题**：删除一个运行时仍挂载的会话，`chats/<sessionId>.jsonl` 被移除后 writer 重建空文件，第一条记录的 `parentUuid` 指向已不存在的记录，导致历史记录损坏、自动续用禁用。
- **为何重要**：数据完整性问题，可能导致用户会话历史不可逆丢失。
- [链接](https://github.com/QwenLM/qwen-code/issues/12091)

### 🟡 P2 / 功能增强 & 中等问题

**④ #12287 — Workflow retry-from-history: 硬化工作拆分（9 条评论）**
- **问题**：#12190 从 ~1000 行膨胀到 ~1900 行，经过 6 轮 autofix，触碰了 runner 的 resume 语义和 checkpoint schema。现将硬化工作拆分为独立 issue 以便单独审查。
- **为何重要**：反映社区对代码质量审查流程的重视，避免大 PR 难以 review。
- [链接](https://github.com/QwenLM/qwen-code/issues/12287)

**⑤ #12303 — Cross-session gate: 多会话宿主中的会话收敛、限流与命名（8 条评论）**
- **问题**：跨会话消息的入站门控现在按目标会话的设置判断，但宿主级的三个问题（会话收敛策略、限流、命名规范）无法在 gate 内部解决，需要架构层面讨论。
- **为何重要**：多 agent / 多会话场景是 Qwen Code 的重要方向，此 issue 可能影响后续架构设计。
- [链接](https://github.com/QwenLM/qwen-code/issues/12303)

**⑥ #12381 — 恢复 HTTP 网关超时时丢失的 session 创建结果（6 条评论）**
- **问题**：`POST /session` 成功创建会话后，若浏览器侧遭遇网关超时，客户端拿不到 session ID，无法安全提交首个 prompt。
- **为何重要**：影响 daemon API 的可用性，属于会话管理的基础能力缺失。
- [链接](https://github.com/QwenLM/qwen-code/issues/12381)

**⑦ #11878 — Session Overview 表不显示无工作区（standalone）会话（6 条评论）**
- **问题**：Overview 仅列出属于工作区的会话，standalone 会话完全缺失；即使显示，点击行也会在错误上下文中打开。
- **为何重要**：影响会话管理 UI 的完整性和一致性。
- [链接](https://github.com/QwenLM/qwen-code/issues/11878)

**⑧ #12380 — Managed Agent 双路径架构提案（5 条评论）**
- **问题**：提出分阶段的 Managed Agent 架构——保持现有 TypeScript agent loop，模型推理独立于工具环境配置，赋予 Sessions 持久所有权、Workspace 绑定、可恢复工具执行和稳定 WebSocket。
- **为何重要**：可能定义 Qwen Code 下一代 agent 架构方向。
- [链接](https://github.com/QwenLM/qwen-code/issues/12380)

**⑨ #12290 — MCP inline-media 判定基于服务端声明的 mime label 而非字节内容（4 条评论）**
- **问题**：`boundInlineImageParts` 用 MCP 服务端声明的 mime 字符串决定哪些部分被限流、最终携带什么 mime，而非实际字节。声明空间无界，导致误判。
- **为何重要**：MCP 生态集成的关键正确性问题，影响图片/媒体内容的正确传输。
- [链接](https://github.com/QwenLM/qwen-code/issues/12290)

**⑩ #12417 — 工具执行沙箱设置硬化（4 条评论）**
- **问题**：PR #12267 将 Linux bubblewrap 限制从整个 CLI 移至单个工具执行，经过 5 轮审查仍有边界问题待解决。
- **为何重要**：安全沙箱是核心能力，多轮审查未过说明存在深层设计问题。
- [链接](https:///QwenLM/qwen-code/issues/12417)

---

## 4. 重要 PR 进展（精选 10 条）

| PR | 标题 | 类型 | 要点 |
|----|------|------|------|
| **#12255** | feat(serve): 支持无远程 daemon 的 SSH 工作区 | 🆕 功能 | 用户可在 Web Shell 中添加 `ssh://` 项目路径，通过本地 daemon 操作——文件、搜索、Shell、Git、终端均走 SSH，凭据/审批/历史保持本地 |
| **#12415** | fix(cli): 保存的工作流 slash 命令报告完成状态 | 🐛 修复 | 前台执行的工作流在完成/失败时，对话中显示 run ID、状态、结果预览和失败详情，同时传递给模型上下文 |
| **#12355** | fix(core,docs): 纠正 deferred-tool bridge 的过时/未测代码 | 🐛 修复 | 一次性修正 #10410 引入的四处问题，包括一个未测试的 `tool_call` 豁免 |
| **#12404** | fix(web-shell): 跨 reload 保留引用标签 | 🐛 修复 | 对齐用户消息引用标签与文件标签外观，刷新/重开已保存会话后，文件/MCP/扩展引用标签及预览仍可用 |
| **#12323** | perf(core): 将 Agent tool 的 prompt 写入指导移入打包 skill | ⚡ 性能 | 从 Agent tool 描述中移除长 prompt，改为打包的 `agent-delegation` skill，仅保留 192 字符指针，减少 token 消耗 |
| **#12410** | fix(desktop): 恢复 Tauri shell 窗口缩放 | 🐛 修复 | 桌面应用重新支持 `Cmd/Ctrl` + `-`/`=`/`/`0` 及 `Ctrl`+滚轮缩放，范围 50%–300%，下次启动恢复 |
| **#12154** | feat(web-shell): 从 git 对话管理仓库 worktrees | 🆕 功能 | Web Shell git 对话新增第四 tab "Worktrees"，展示所有 worktree 的 slug、分支、HEAD、锁定状态等 |
| **#12258** | fix(mcp): 支持更大 Apps、作用域工具调用和隔离 origin | 🐛 修复 | 修复三个 MCP App 集成失败：限制每服务资源加载、App 发起的服务工具、不透明 iframe origin。官方 Tableau App 现可在 Qwen Code 中渲染认证云图表 |
| **#11854** | feat: 添加混合代码模式 | 🆕 功能 | 新增 `tools.mode` 枚举（`direct` / `code_mode` / `code_mode_only`），`code_mode` 下普通工具可直接调用同时暴露隔离的 `exec` JS 工具 |
| **#12391** | feat(java): 添加托管工具执行状态 | 🆕 功能 | 为一次托管 Tool 执行建模不可变请求身份、幂等创建、乐观版本、分发所有权租约（带 generation fencing）、取消和未知结果状态、不可变结算及同步状态 |

---

## 5. 功能需求趋势

从近期 Issues 和 PR 可提炼出以下社区关注方向：

| 方向 | 热度 | 代表 Issue/PR |
|------|------|---------------|
| **多会话 / 多工作区管理** | 🔥🔥🔥 | #12303, #12380, #12249, #12396, #11878 |
| **Web Shell / 浏览器内体验** | 🔥🔥🔥 | #11872, #12366, #12154, #12404 |
| **SSH / 远程开发** | 🔥🔥 | #12255, #12416 |
| **MCP / 工具生态** | 🔥🔥 | #12258, #12290, #12222 |
| **性能与资源优化** | 🔥🔥 | #12323, #12405, #12340 |
| **安全沙箱** | 🔥 | #12417, #8835 |
| **CI / 构建可靠性** | 🔥 | #12414, #12382, #12401 |
| **桌面端

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



# DeepSeek TUI（Codewhale）社区动态日报 — 2026-09-22

> 数据来源：`Hmbown/Codewhale`（本日报按 DeepSeek TUI 生态口径整理；仓库实际名称为 Codewhale，Rust TUI 实现）。

---

## 1. 今日速览

- 过去 24 小时**无新版本发布**，但社区活跃度高：12 条 Issue 更新、30 条 PR 更新。
- 核心动态是**一批历史缺陷被集中修复与关闭**，包括引擎静默冻结、Anthropic 并行工具调用重复结果、上下文预算守卫虚高等问题。
- 同时有两条**面向未来的能力提案**进入讨论：可插拔 Agent 记忆后端、Computer-use 插件的 look-act 循环。

---

## 2. 版本发布

**无。** 过去 24 小时未发布新 Release。

---

## 3. 社区热点 Issues（精选 10 条）

| # | 标题 | 状态 | 为何重要 |
|---|------|------|----------|
| **#6184** | Engine silently freezes mid-run: user messages persisted but never answered | OPEN | **最高优先级未决缺陷。** 在长流程、重度工具调用中引擎中途停止输出，无错误、无日志、无崩溃，用户输入被持久化却永远得不到回复。直接影响可用性，已获 8 条评论。 |
| **#6050** | Pluggable agent memory: generic backend seam with causal-memory / mem0 | OPEN | 架构演进方向。当前 MemoryBackend 只有 Native/Off，无第三方后端入口；社区希望引入 causal-memory、mem0 等参考实现，打通 MCP/外部记忆。已获 5 条评论。 |
| **#5856** | Computer-use plugin: live-install receipt + first look-act loop | OPEN | Computer-use 能力落地推进。讨论 bundle 内置后的验收路径与首次 look-act 循环，是自动化能力的关键一步。已获 6 条评论。 |
| **#6378** | Anthropic provider: parallel tool calls get fake "not executed" result | CLOSED | 并行 tool_use 时第 2 个及以后的调用被同时塞入合成错误结果与真实结果，误导模型。已通过 PR #6387 修复。 |
| **#6374** | preflight context guard 用 1.5× 虚高估算，65k 真实输入被误拒 | CLOSED | 上下文预算守卫在保护的预算之前就触发，且提示中给出的补救路径在当前路径上不可用。三个缺陷同源，已关闭。 |
| **#6362** | configured_model_api_tests 线程栈溢出导致 lib 测试中断 | CLOSED | 单个测试溢出即 SIGABRT 整个 lib 测试二进制，`cargo test -p codewhale-tui --lib` 无法跑完，阻塞 workspace 门禁。 |
| **#6296** | Sub-agents inherit computer-use: verifier 子代理写入宿主 Terminal 绕过限制 | CLOSED | 安全/权限回归：test 角色子代理被发现可通过宿主 Terminal 绕过受限 shell，已在 dogfood 中暴露。 |
| **#6227** | Pet conformance: Rust 核心在 8 个通道中 6 个与 TypeScript 不一致 | CLOSED | `portable`（Pet 一致性）自 `a06d2296` 起持续红，状态机一致但字段不一致，已定位具体差异。 |
| **#6224** | Windows: pet_watch output_failures_do_not_stop_the_world 断言失败 | CLOSED | Windows CI 在 PR #6175 上 15271 个测试中 1 个失败，断言 `sink.failed()` 时机错误。 |
| **#6379** | Nightly security & dependency sweep | OPEN | 安全扫描告警：CodeQL 告警无法列出，因 `GITHUB_CODEWHALE_SECURITY_PAT` 未配置，凭证返回 403。需关注凭证与依赖安全。 |

> 另有 #6172、#6385 两条 health digest（只读周报），其中 #6385 指出 `main` CI 在 130 次运行中红了 106 次，建议优先处理。

---

## 4. 重要 PR 进展（精选 10 条）

| # | 标题 | 状态 | 内容 |
|---|------|------|------|
| **#6393** | Draft: echolocation, token diet, and fork-prefix cache inheritance | OPEN | **设计讨论稿**（非合并候选）。三个方向：回声定位机制、token 饮食（ diet ）策略、fork 前缀缓存继承。与 maintainer 已有正面反馈，仍在讨论范围与继承契约。 |
| **#6392** | fix: eight dogfooding fixes — gates that were not gating, and a feature that never shipped | OPEN | 8 个 dogfood 发现的修复合集（ maintainer 决定合并而非拆分）。含 Shift+Tab 无法在 Plan 模式切换权限等真实使用问题，每项均带回归测试。 |
| **#6387** | fix(anthropic): fold split tool results into one user turn before dangling-use repair | CLOSED | **直接修复 #6378**：将 Anthropic wire 上拆分的 tool_result 合并为一个 user turn，消除重复的合成错误结果。 |
| **#6388** | fix(tasks): refuse a posture the thread would reject at task admission | CLOSED | 跟进 #6386：`add_task_with_id` 原本存储 `permission_posture` 原值、把校验推后到 worker，导致非法值（如 `never`）进入线程。现在 admission 阶段即拒绝。 |
| **#6386** | feat(tasks): state the approval posture a task thread starts on | CLOSED | 为任务线程明确初始授权姿态（`POST /v1/tasks` 及进程内调用方），补上缺失的授权路径声明。 |
| **#6384** | fix(review): print provider failure beneath "request failed"; classify in review workflow | CLOSED | 修复 review bot：自 `752bae3` 起所有非 draft 运行失败，仅输出一行裸 `request failed`，现改为打印底层 provider 失败并分类。 |
| **#6389** | fix(tui): hide internal runtime traffic in the resume picker preview | CLOSED | `/resume` 会话预览原本渲染所有持久化消息，导致 Operate 模式会话预览以 `USER:` 开头并泄露内部运行时流量。已隐藏。 |
| **#6390** | chore(tui): name windows::core::BOOL and drop direct windows-core dependency | CLOSED | 移除 `crates/tui` 中直接的 `windows-core` 依赖（原注释声称需 re-export BOOL，实际不需要），替代 Dependabot 的升级 PR #6359。 |
| **#6391** | chore(deps): bump clap_complete 4.6.9 → 4.6.11 | CLOSED | 手工落地 Dependabot 的 #6342（其分支与 main 冲突），仅最小化 lockfile 变更（版本+校验和），不等同于 `cargo update --precise`。 |
| **#6382** | perf(runtime-threads): keep one preview candidate per turn in items scan | CLOSED | 跟进 #6376：`newest_message_text_by_turn` 原本为每个 turn 收集全部非空消息再排序取最后，性能浪费；现每 turn 只保留一个候选。 |

---

## 5. 功能需求趋势

从 Issue/PR 关键词提炼，社区最关注的方向：

1. **引擎稳定性与可观测性** — #6184（静默冻结）、#6374（上下文守卫误判）、#6362（测试栈溢出）表明，**"无崩溃但不工作"** 与**错误估算**是当前最棘手问题。
2. **Agent 记忆可插拔化** — #6305 提出 generic backend seam，对标 causal-memory / mem0，意图让第三方记忆后端可接入。
3. **Computer-use 与子代理能力** — #5856（look-act 循环）、#6296（子代理权限继承）显示自动化与自主执行是重点投入方向。
4. **多 Provider 兼容性（尤其 Anthropic）** — #6378/#6387 暴露并修复了 Anthropic 并行工具调用的 wire 层缺陷，说明多 provider 适配仍在高频迭代。
5. **性能与资源管理** — #6382（preview 候选裁剪）、#6393（token diet）表明社区在关注 token/上下文成本控制。
6. **CI 与开发体验** — #6385（CI 红 106/130）、#6362（测试阻塞门禁）、#6379（安全扫描凭证缺失）反映工程基础设施仍是痛点。

---

## 6. 开发者关注点

- **静默失败（silent failure）是头号痛点**：#6184 描述的"引擎冻结、无日志、无崩溃"是典型信号——用户需要**明确的失败/卡死指示**，而不是无限期挂起。
- **上下文预算估算不诚实**：#6374 指出守卫用 1.5× 虚高估算，提前误拒且补救方案不可用——开发者呼吁**诚实的上限与可用的 fallback 路径**。
- **测试套件脆弱性**：#6362 的栈溢出直接阻塞 CI 门禁，说明测试资源预算（栈深度）需要纳入常规治理。
- **依赖与凭证管理**：#6379 安全扫描因 PAT 未配置而完全失效，#6390/#6391 显示社区对不必要/冲突依赖的清理意愿强烈。
- **Dogfood 驱动修复**：#6392（8 个修复合集）与 #6296（子代理越权）均来自内部 dogfood，反映"真实使用暴露问题"的开发文化。

---

*以上动态均来自 `Hmbown/Codewhale`，Issue/PR 链接已附于各条目。日报生成时间：2026-09-22。*

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>



# ComfyUI 社区动态日报（2026-09-22）

## 1. 今日速览
今日 ComfyUI 社区迎来了 **v0.37.0 版本发布**，重点引入了 OpenAI 合作节点（支持 GPT Image 2 透明背景）及自动快速磁盘检测功能。社区核心关注点高度集中在 **Qwen-Image 2.1 和 MiniMax H3 等新模型的稳定性修复上**，涉及 Windows 多 GPU 硬崩溃、MPS（Apple Silicon）VAE 编码损坏、ROCm 动态显存静默 corruption 等关键 Bug。开发者社群正积极推动自定义浏览器启动、INT8 MPS 性能恢复等实用功能的落地。

---

## 2. 版本发布

### ComfyUI v0.37.0
*   **核心更新**：
    *   **Aimdo 0.5.5 集成与自动快盘检测**：新增自动检测并启用 `--fast-disk` 的功能（CORE-440），优化大模型加载速度。
    *   **合作节点（Partner Nodes）**：新增 OpenAI GPT Image 2 的透明背景（transparent background）支持。
*   **GitHub 链接**：[Comfy-Org/ComfyUI Release v0.37.0](https://github.com/Comfy-Org/ComfyUI/releases/tag/v0.37.0)

---

## 3. 社区热点 Issues（Top 10）

本日 Issue 聚焦于新模型（特别是 Qwen 和 H3）在不同硬件平台上的兼容性、崩溃和静默数据损坏问题。

| Issue 标题 | 编号 | 类型 | 为什么重要 / 社区反应 |
| :--- | :--- | :--- | :--- |
| **[Qwen Image 2.1] Hard crash in prefetch... on Windows multi-GPU** | #16443 | Bug (严重崩溃) | **严重级别最高**。Windows 多 GPU 用户在运行 Qwen 图像生成时，模型初始化阶段直接硬崩溃（需强制断电），无正常异常捕获。 |
| **Qwen-Image-2.1 VAE encode is broken on MPS...** | #16433 | Bug (平台缺陷) | **Apple Silicon 用户痛点**。MPS 后端下 VAE 编解码往返信噪比仅 6.6 dB（CPU 为 49.1 dB），直接静默损坏所有图像编辑工作流。 |
| **Qwen-Image 2.1: --enable-dynamic-vram silently corrupts output... (ROCm)** | #16437 | Bug (静默损坏) | **AMD ROCm 用户痛点**。开启动态显存后，模型重载会导致输出通道切片偏移，产生持续的静默画面污染，必须重启服务。 |
| **Complete system freeze when running FireRed → MiniMax H3... (dual NVIDIA)** | #15360 | Bug (系统崩溃) | 双 NVIDIA GPU 系统运行特定模型序列时，整个系统无响应且无 Dump，必须硬关机。社区用户反馈其复现过程极具规律性，难以绕过。 |
| **Qwen-Image-2.1 image edit: VAE reference-latent splice produces noise at 1024px** | #16435 | Bug (特定分辨率) | **精确的算法 Bug**。在 1024 分辨率下进行图像编辑会产生宽带噪声，而 99

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>



# Ollama 社区动态日报 (2026-09-22)

> **数据来源**：GitHub `ollama/ollama` 社区数据（统计截止至 2026-09-21 的过去 24 小时）。

---

### 1. 今日速览

过去 24 小时内，Ollama 社区活跃度极高，核心动态集中在 **AI 编程代理（Coding Agents）稳定性修复**、**结构化输出（JSON Schema）在 MLX 引擎上的死锁修复**，以及 **OpenAI 兼容接口的对齐优化**。
开发者社区对工具调用（Tool Call）解析失败导致 Agent 丢轮次的问题高度关注，核心维护者已推出紧急修复 PR。此外，离线模型迁移工具（`export/import`）和 Mac 内存管理优化也是今日的亮点。

---

### 2. 版本发布

*   **无新版本发布**：过去 24 小时内，Ollama 官方没有发布新的 Release 版本。

---

### 3. 社区热点 Issues（Top 10）

以下是过去 24 小时内最值得关注的 10 个 Issue，涵盖了工具调用崩溃、新模型支持、多模态兼容性及 API 标准化等关键领域：

#### ① `#18563` [OPEN] [bug] qwen3coder 工具调用解析器因长文件写入调用拒绝请求，将解析错误直接作为聊天结果返回
*   **重要性**：⭐⭐⭐⭐⭐ (极高)。这是目前 AI 编码代理（如 OpenClaw）最头疼的痛点。工具调用失败会导致整个 Agent 任务链断裂。
*   **社区反应**：问题刚创建不久，已被开发者广泛复现，社区对 Qwen3-Coder 的工具调用鲁棒性表达了高度关切。
*   **链接**：[ollama/ollama#18563](https://github.com/ollama/ollama/issues/18563)

#### ② `#18521` [OPEN] [model] 支持 Prism 三值 GGUF（PQ2_0 type 142 / PTQ1_0 type 143）：导入因张量大小溢出失败
*   **重要性**：⭐⭐⭐⭐⭐。获得了 7 个 👍，是近期最受关注的新模型格式支持请求。关系到 27B 三值化（Ternary）模型 `prism-ml/Ternary-Bonsai-2-27B-gguf` 能否在 Ollama 上运行。
*   **社区反应**：高赞请求，开发者急需一种不误导用户的、明确的 unsupported tensor type 报错。
*   **链接**：[ollama/ollama#18521](https://github.com/ollama/ollama/issues/18521)

#### ③ `#18575` [OPEN] `/v1/chat/completions` 忽略 `max_tokens` 并覆盖 Modelfile 的 `num_predict` 默认值，导致生成无边界
*   **重要性**：⭐⭐⭐⭐⭐。OpenAI 兼容接口是第三方客户端接入的主要方式。生成无边界会导致客户端超时、爆仓且产生巨额费用。
*   **社区反应**：开发者指出该端点目前缺乏任何有效的生成长度约束手段，急需修复。
*   **链接**：[ollama/ollama#18575](https://github.com/ollama/ollama/issues/18575)

#### ④ `#18567` [OPEN] MLX 引擎：结构化输出（format/JSON schema）永不终止，模型会一直发射空白字符直到达到 `num_predict`
*   **重要性**：⭐⭐⭐⭐⭐。Mac 用户在使用 JSON Schema 约束生成时的严重 bug，模型在生成部分 JSON 后会陷入无限空白循环。
*   **社区

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>



# llama.cpp 社区动态日报 — 2026-09-22

---

## 1. 今日速览

今日社区活跃度高，过去 24 小时内发布了 **10 个构建版本（b11070–b11081）**，涵盖环境变量控制、JSON 枚举修复、Metal 融合优化、SYCL/Hexagon 性能提升等。Issues 方面，**Qwen3.8-27B 长上下文解码吞吐骤降 25 倍**成为最受关注的性能问题；PR 方面，Hexagon HMX 加速 GATED_DELTA_NET、MADV_WILLNEED 预取优化、以及 slot 上下文检查点保留等改进尤为突出。

---

## 2. 版本发布

过去 24 小时共发布 **10 个构建版本**，主要更新如下：

| 版本 | 核心变更 |
|------|----------|
| **b11081** | `test-llama-archs`：张量数据 stdev 可配置，补充使用示例 |
| **b11080** | `tests/test-backend-ops`：`-o` 过滤器支持正则表达式匹配 |
| **b11078** | `args`：新增 `LLAMA_ARG_*` 环境变量控制 temperature/top-p/min-p/penalties，支持 systemd EnvironmentFile 全环境控制 |
| **b11077** | `server`：路由模式下不再将 `--api-key-file` 转发给子实例，修复子进程重复校验问题 |
| **b11076** | `tests`：删除过期注释 |
| **b11075** | `ggml-metal`：简化融合算子列表声明，从 `ops_all` 推导非空融合集 |
| **b11074** | `json`：修复 JSON 枚举值被错误序列化为 boolean 的问题（回归自 b10585） |
| **b11073** | `sycl`：MKL-FA softmax 合并加载，替代每行一个 work-item |
| **b11071** | `ci`：Ubuntu CUDA Release 构建升级至 CUDA 13.4 |
| **b11070** | `hexagon`：缓冲区与 DMA 处理重构，支持 64bit 映射 |

> 官网：https://llama.app ｜ Attestations: [48998612](https://github.com/ggml-org/llama.cpp/attestations/48998612)

---

## 3. 社区热点 Issues（精选 10 条）

### 🔴 高优先级性能/稳定性问题

1. **[#27623] Qwen3.8-27B 解码吞吐在上下文 >80K 时崩溃式下降 ~25 倍**（12 评论，OPEN）
   - 混合 Gated DeltaNet 架构在长上下文下解码骤降，而 prompt 处理仍很快。涉及 CUDA/Windows，社区讨论活跃。
   - 👉 https://github.com/ggml-org/llama.cpp/issues/27623

2. **[#28752] b10780 后 Vulkan/RDNA3 上 prompt 处理速度严重下降**（10 评论，OPEN）
   - 升级后 Vulkan 后端 prompt 处理性能回退，尚未修复。
   - 👉 https://github.com/ggml-org/llama.cpp/issues/28752

3. **[#28721] Intel Arc Pro B70 (Xe2) Vulkan 深上下文解码吞吐下降 ~8 倍**（2 评论，OPEN）
   - 同 SYCL 后端仅降 2.4 倍，问题被判定为 Vulkan 后端固有缺陷。
   - 👉 https://github.com/ggml-org/llama.cpp/issues/28721

4. **[#5380] Vulkan 后端模型被踢出 VRAM 后不重载，导致巨大减速**（11 评论，CLOSED/stale）
   - 老 issue，但持续被顶起，反映 Vulkan 内存管理的历史痛点。
   - 👉 https://github.com/ggml-org/llama.cpp/issues/5380

### 🟡 功能/模型支持

5. **[#18517] 请求支持 IQuest-Coder-V1-40B**（9 评论，OPEN）
   - 社区投票 4👍，开发者关注特定 coder 模型的 GGUF 兼容性。
   - 👉 https://github.com/ggml-org/llama.cpp/issues/18517

6. **[#24303] Qwen3.6-35B-A3B 连续图片被合并为超帧，导致图像理解错误**（7 评论，OPEN/stale）
   - 4 张图被识别为 2 张，多模态图片计数逻辑缺陷。
   - 👉 https://github.com/ggml-org/llama.cpp/issues/24303

7. **[#29022] 请求：通过 Prefill Logit Slicing 实现快速工具门控与单遍选择**（6 评论，OPEN）
   - 面向 tool-use 场景的性能优化提案，社区 2👍。
   - 👉 https://github.com/ggml-org/llama.cpp/issues/29022

### 🟢 其他值得关注

8. **[#29164] 模型加载到独显 CUDA0 但推理跑在 iGPU 上**（5 评论，OPEN）
   - 多 GPU 设备分配异常，影响 Windows 笔记本用户。
   - 👉 https://github.com/ggml-org/llama.cpp/issues/29164

9. **[#28214] Vulkan 在 PowerVR C-series (Pixel 11 Pro) 上触发 GPU 固件崩溃**（4 评论，OPEN）
   - subgroupSize=128 的移动 GPU 兼容性问题。
   - 👉 https://github.com/ggml-org/llama.cpp/issues/28214

10. **[#27249] `/props` 接口泄露随机化 media_marker，导致对话永久不可 token 化**（4 评论，CLOSED）
    - 多模态服务安全隐患，泄露的 marker 使引用该 marker 的对话返回 400。
    - 👉 https://github.com/ggml-org/llama.cpp/issues/27249

---

## 4. 重要 PR 进展（精选 10 条）

| PR | 内容 | 状态 |
|----|------|------|
| **[#29199]** | Hexagon: 新增 HMX 优化的 `GATED_DELTA_NET` 实现，prompt 处理性能提升 1.5–3×（Qwen3.5/3.8 实测） | ✅ CLOSED |
| **[#29250]** | `common`: 新增 `--no-mmap-prefetch` 跳过 `MADV_WILLNEED`，解决 macOS 大模型（如 434GB）加载卡死/内存颠簸 | 🔓 OPEN |
| **[#28055]** | `llama-mmap`: 移除 Linux 上的 `MAP_POPULATE`（阻塞式立即加载），避免强制预读 | 🔓 OPEN |
| **[#27537]** | `server`: 修复 `echo=true` + `logprobs=N` 组合导致的内存断言/KV 缓存错误，正确返回 prompt token logprobs | 🔓 OPEN |
| **[#26004]** | `server`: 修复 slot save→restore 后 SWA/混合模型（Qwen3.5/3-Next）的上下文检查点丢失问题，避免完整重新 prefill | 🔓 OPEN |
| **[#29244]** | `jinja`: 修复一元 `+`/`-` 解析（如 `items[:-n]`），补充运行时一元 `+` 支持 | 🔓 OPEN |
| **[#29211]** | `llama-vocab`: 新增 `sophia` 预分词类型（无正则拆分，纯字节级 BPE），支持 ~1B 参数 Sophia 模型 | 🔓 OPEN |
| **[#29242]** | `chat`: 修复 Muse Glimmer 工具调用首个解析器错误（无 reasoning step 时直接起始工具调用） | 🔓 OPEN |
| **[#28446]** | `opencl`: 融合 Q/K RMSNorm + RoPE + K/V 缩放 + V 物化，Adreno 830 实测性能提升 | 🔓 OPEN |
| **[#29247]** | RFC: 跨后端「内存省略融合」（Memory eliding fusions），减少量化模型计算缓冲区占用（如 Qwen3.8-flash-next 降 2GB/卡） | 🔓 OPEN |

> 其他值得关注的 PR：[#29231](https://github.com/ggml-org/llama.cpp/pull/29231) HIP fp8 版本提升 · [#29186](https://github.com/ggml-org/llama.cpp/pull/29186) SYCL Q8_0 ESIMD 宽加载 · [#29100](https://github.com/ggml-org/llama.cpp/pull/29100) CUDA FWHT 宽块核 · [#29007](https://github.com/ggml-org/llama.cpp/pull/29007) Snapdragon 预构建发布入 CI · [#28362](https://github.com/ggml-org/llama.cpp/pull/28362) Windows ARM64 MSVC 构建支持

---

## 5. 功能需求趋势

从近期 Issues/PR 中可提炼出以下社区关注方向：

| 方向 | 热度 | 代表议题 |
|------|------|----------|
| **长上下文/混合架构性能** | 🔥🔥🔥 | Qwen3.8-27B 解码崩溃、Arc B70 深上下文下降、HMX GATED_DELTA_NET 加速 |
| **多模态/图片处理** | 🔥🔥 | 图片合并超帧、`/props` media_marker 泄露、图片理解丢失 |
| **工具调用/Agent 工程化** | 🔥🔥 | Prefill Logit Slicing 工具门控、Muse Glimmer 工具解析、PEG→GBNF `until()` 约束 |
| **特定模型支持** | 🔥🔥 | IQuest-Coder-V1-40B、Sophia、elmod-2.7b-it、Qwen3.5/3.6/3.8 系列 |
| **大模型加载/内存管理** | 🔥 | `--no-mmap-prefetch`、移除 `MAP_POPULATE`、Vulkan VRAM 重载 |
| **推理服务化/运维** | 🔥 | 环境变量控制生成参数、路由 API Key 转发、VictoriaMetrics 抓取导致服务停止 |
| **WebUI

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*