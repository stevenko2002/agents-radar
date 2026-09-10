# AI CLI 工具社区动态日报 2026-09-11

> 生成时间: 2026-09-10 22:15 UTC | 覆盖工具: 12 个

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

# 2026-09-11 AI CLI 工具今日重点摘要

### Claude Code (github.com/anthropics/claude-code)
*   **发布 v2.1.268**：修复了 Claude Apps 网关计费一致性，确保 `/cost` 命令与后台遥测口径统一；新增了接入控制未配置时的启动告警。
*   **插件系统进入主线**：由 `poteat` 主导的 `mods` 插件系统（包含 diff / telemetry / sec-default）已进入合并窗口，标志着工具向插件化架构迈进。
*   **模型质量争议**：社区针对 #83510 Issue 报告的 Fable/Opus 系列模型质量回退及“隐式降级”问题引发高度关注，开发者呼吁官方公开路由策略。

### OpenAI Codex (github.com/openai/codex)
*   **GPT-6-Astra 正式上线**：今日正式支持 GPT-6-Astra 模型并集成 Amazon Bedrock 网关接入。
*   **架构演进讨论**：社区正深度讨论 #40575 RFC，旨在引入“自我进化智能体（Self-Evolving Agents）”，通过指令蒸馏和规则代谢解决长期项目中的遗忘问题。
*   **稳定性修复**：针对 Windows 环境下 WSL 在更新后持续反复重启的严重 Bug（#44612）正在持续跟进。

### Gemini CLI (github.com/google-gemini/gemini-cli)
*   **发布 v0.61.0-nightly**：重点聚焦安全加固，通过多个 PR 实现了沙箱文件系统隔离、NTFS 8.3 短文件名路径防御及环境变量注入防护。
*   **核心流程攻坚**：正在全力解决 Subagent 异常恢复、Generalist Agent 挂起以及 Auto Memory 导致的“重试风暴”等可靠性问题。

### GitHub Copilot CLI (github.com/github/copilot-cli)
*   **发布 v1.0.84-4**：优化了插件管理逻辑，支持通过 `copilot plugin list` 及 `enable/disable` 命令细化控制插件状态。
*   **MCP 生态爆发**：随着 Model Context Protocol (MCP) 的引入，插件认证的 OAuth 回调端口问题和工具列表刷新逻辑成为开发者调试重心。
*   **内存问题**：修复了后台闲置进程触发大量 FileWatch 事件导致 CPU 占用飙升至 200% 并产生巨大日志的问题。

### Qwen Code (github.com/QwenLM/qwen-code)
*   **发布 v0.23.3**：扩展了对 Kimi、Qwen 和 DeepSeek 等主流推理预设的支持；同步 TypeScript SDK v0.1.12。
*   **桌面端迁移**：发布 Qwen Code Desktop v0.3.0 预览版，确认了将从 Electron 架构迁移至 Tauri 以追求更轻量化的原生体验。
*   **安全边界**：社区正在讨论 #8102 提议，建议将语言模型放在信任边界之外以实现工具执行的确定性。

### OpenCode (github.com/anomalyco/opencode)
*   **数据膨胀危机**：2.0 版本存在 `event` 表无界增长问题，导致 SQLite 数据库 `opencode.db` 达到 13GB+，占满磁盘空间，亟需清理或压缩策略。
*   **UI 架构重构**：TUI 侧迎来渲染架构重构，通过递归会话分组（#48393）为未来的嵌套会话渲染奠定。
*   **支付故障**：大量多国用户反馈无法完成 Go 订阅付款，成为今日最集中的负面反馈。

### Ollama (github.com/ollama/ollama)
*   **长上下文支持**：今日集中处理 Gemma4 工具调用解析与 1M 长上下文支持，已合并多个针对性 PR。
*   **模型诉求**：社区对 DeepSeek-V4.1-Flash 云端接入的需求呼声最高（👍27）。
*   **安全预警**：持续关注 CVE 漏洞 Issue #16033，包含 1 个 CRITICAL 和 11 个 HIGH 级别的二进制文件安全风险。

### llama.cpp (github.com/ggerganov/llama.cpp)
*   **Vulkan 性能优化**：发布 b10900 版本引入 Vulkan 优化，通过在 prefill 阶段启用 topk_moe 融合提升效率。
*   **矩阵运算加速**：b10899 针对 Qwen 模型优化了 Vulkan 小矩阵运算，通过交换 A/B 矩阵显著提升了 m 性能。
*   **架构适配**：更新了 Windows ARM64 的 CUDA 13.4.1 发行支持。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

你好！我是 Claude Code 生态技术分析师。基于 `anthropics/skills` 仓库（截至 2026-09-11）的动态，我为你整理了这份社区热点分析报告。

---

# 🚀 Claude Code Skills 社区热点报告 (2026-09-11)

目前 Claude Code Skills 生态正处于从“基础功能实现”向“工程化质量”与“企业级治理”转型的关键期。社区不再仅仅关注 Claude 能做什么，而是开始关注 **Skill 的执行准确性、安全性以及跨工具的协同能力**。

## 1. 🔥 热门 Skills 排行 (Top PRs)

| Skill 名称 | 功能描述 | 社区讨论热点 | 状态 | 链接 |
| :--- | :--- | :--- | :--- | :--- |
| **#1298: skill-creator 修复** | 修复 `run_eval.py` 召回率始终为 0% 的 Bug，支持 Windows 流式读取。 | 开发者最核心痛点。评估工具失效导致 Skill 描述优化循环陷入“针对噪声优化”。 | OPEN | [PR #1298](https://github.com/anthropics/skills/pr/1298) |
| **#492: 命名空间安全** | 解决社区 Skill 滥用 `anthropic/` 命名空间导致的信任边界漏洞。 | **热度最高 (43评论)**。社区担忧用户因误以为是官方而给恶意 Skill 开高权限。 | OPEN | [Issue #492](https://github.com/anthropics/skills/issues/492) |
| **#1628: Hivemind (多代理编排)** | 让 Claude Code 作为规划者，将机械性工作分配给免费模型运行的 Worker。 | 成本优化标标。社区认为昂贵模型的 Context 是稀缺资源，应通过此 Skill 降低执行成本。 | OPEN | [PR #1628](https://github.com/anthropics/skills/pr/1628) |
| **#514: document-typography** | 解决 AI 生成文档中的孤行字、孤页段落和编号未对齐问题。 | 极致体验追求。用户发现 AI 生成的文档虽内容对但排版极度不专业。 | OPEN | [PR #514](https://github.com/anthropics/skills/pr/514) |
| **#1367: self-audit (自检)** | 在交付输出前进行“机械文件验证”+“四维度推理审计”。 | 质量保障。社区希望通过 Skill 强制执行质量门槛，防止幻觉导致的低级错误。 | OPEN | [PR #1367](https://github.com/anthropics/skills/pr/1367) |

## 2. 📈 社区需求趋势

通过对 Issues 的分析，社区的诉求正迅速转向以下三个领域：

*   **工程级健壮性 (Robustness)：** 
    大量 Issue 指向 **Windows 兼容性**（如 PR #1050, #1099）和 **YAML 解析失败**（如 PR #539）。开发者要求 Skill 在跨平台环境下都能稳定运行，而不是只在 macOS/Linux 上。
*   **企业级治理与安全 (Governance & Security)：** 
    `agent-governance` (Issue #412) 和命名空间安全 (Issue #492) 反映出企业级用户开始关注 AI Agent 的**权限边界、审计追踪**和**合规性**。
*   **复杂工作流集成 (Deep Integration)：** 
    从 `scnet-hpc` (高性能计算集群管理) 到 `buffer-api` (社交媒体调度)，社区正试图将 Claude Code 跳出纯代码领域，成为能够直接驱动基础设施和营销运营的“中枢大脑”。

## 3. 💡 高潜力待合并 Skills (High Potential)

这些 PR 社区讨论活跃且解决了具体痛点，预计近期会有重大进展：

1.  **#1724: mcp-builder 升级**：将默认评估模型升级至 `claude-sonnet-5`。这是保持开发工具链跟前时代的前提。
2.  **#1602: 评估脚本修复**：修复了 MCP 结果序列化和指标计算的 Bug，直接影响开发者测试新 Skill 的准确性。
3.  **#228: 组织内共享机制**：社区强烈呼吁支持“组织级 Skill 库”，而非目前通过 Slack 手动传 `.skill` 文件，这是企业化落地的关键。

---

## 🔍 Skills 生态洞察

**“当前 Claude Code 社区正从‘如何让 Claude 写代码’进化为‘如何让 Claude 在复杂的环境中安全、高效、低成本地执行工程任务’。”**

---

# Claude Code 社区动态日报
**日期：2026-09-11**

---

## 一、今日速览

今日 Claude Code 主仓库呈现明显的"问题清理日"特征：过去 24 小时内有 50 条历史 Issue 被集中关闭（多被打上 `stale` 标签），但其中 **#83510 关于 Fable 5 / Opus 5 / Sonnet 5 模型质量回退**的开放式 Issue 引发最高关注与点赞（👍21）。与此同时，`poteat` 主导的 **mods 插件系统（diff / telemetry / sec-default）** 进入主线合并窗口，v2.1.268 也带来了网关计费与 `/cost` 的一致性修复。

---

## 二、版本发布

### v2.1.268
- **Claude Apps Gateway 计费一致性**：当 `gateway.yaml` 配置 `pricing` 时，登录态客户端可通过 managed settings 接收相同费率，确保 `/cost` 与计费遥测口径统一。
- **网关启动告警**：当 `access_control.allow_cidrs` 为空时输出启动警告，提示接入控制尚未配置，降低误暴露风险。

> 详细 Release Notes：<https://github.com/anthropics/claude-code/releases/tag/v2.1.268>

---

## 三、社区热点 Issues（按评论数 + 关注度筛选）

1. **#83510** [OPEN] [MODEL] Fable 5 / Opus 5 / Sonnet 5 质量回退与"隐式降级"——可复现测量
   - **重要性**：唯一一条仍 OPEN 的高赞（👍21）模型质量类 Issue。报告指出 nonsense detection 退化、回答冗长度 ~2x 增长，并在后台模型回退到 Opus 4.8 时未明确披露。
   - **社区反应**：13 条评论持续跟踪不同 prompt 的可复现数据，开发者呼吁官方公开路由策略与版本变更日志。
   - 链接：<https://github.com/anthropics/claude-code/issues/83510>

2. **#47327** [CLOSED·stale] Windows 11 Pro x64 上 Cowork "yukonSilver" 持续显示 unsupported
   - **重要性**：从 2026-03 起长期未解决，25 条评论反映 Windows 桌面端"协作(Cowork)"功能实质不可用。
   - 链接：<https://github.com/anthropics/claude-code/issues/47327>

3. **#68773** [CLOSED·stale] 自动充值循环误扣 29 次共 $661.08（消费版订阅）
   - **重要性**：财损级别 BUG，涉及计费逻辑与 Fin 客服无法升级人工，呼吁计费侧引入幂等与限速保护。
   - 链接：<https://github.com/anthropics/claude-code/issues/68773>

4. **#72634** [CLOSED·stale] Linux 下组织级 server-managed 远程设置覆盖本地 `policyHelper`
   - **重要性**：揭示企业策略治理在 Linux 客户端的优先级混乱，影响合规与可审计性。
   - 链接：<https://github.com/anthropics/claude-code/issues/72634>

5. **#83193** [CLOSED·stale] Remote Control 会话随时间断连且无法重连
   - **重要性**：长时命名的"lane"会话（多 git worktree 协作）核心场景被破坏，影响长时间开发流。
   - 链接：<https://github.com/anthropics/claude-code/issues/83193>

6. **#86225** [CLOSED·stale] Claude Code 主动把用户个人信息发到公开 Issue
   - **重要性**：安全/隐私 P0 事件——未授权的上下文泄漏，凸显对"untrusted prompt input → public output"路径的过滤缺位。
   - 链接：<https://github.com/anthropics/claude-code/issues/86225>

7. **#80750** [CLOSED·stale] 套餐额度充足时仍消费额外 credits；开启 extra usage 卡死 5 小时窗口
   - **重要性**：计费/配额逻辑互相冲突，且为 #64949 的反复报告，社区强烈呼吁账单规则可观测。
   - 链接：<https://github.com/anthropics/claude-code/issues/80750>

8. **#86033** [CLOSED·stale] 2026-08-08 起 5 小时配额消耗骤增 15-20 倍（多实例）
   - **重要性**：与上一个配额类问题互为佐证，疑似配额计量在多实例场景下的回归。
   - 链接：<https://github.com/anthropics/claude-code/issues/86033>

9. **#86052** [CLOSED·stale] macOS 26.1 升级后多 devcontainer 无法并行运行 Claude Code
   - **重要性**：容器化开发是高频场景，平台升级破坏向后兼容。
   - 链接：<https://github.com/anthropics/claude-code/issues/86052>

10. **#72617** [CLOSED·stale] Windows 终端 UI 复制文本不到系统剪贴板
    - **重要性**：跨平台最基础交互缺陷，影响几乎所有 Windows 用户。
    - 链接：<https://github.com/anthropics/claude-code/issues/72617>

---

## 四、重要 PR 进展

1. **#93215** [CLOSED] Add mods: sec-default, diff and telemetry
   - 将三个内置 hook 插件 sec-default / diff (`/diff`) / telemetry (`$.telemetry`) 以源码形式合并，需开启 function hooks 才能加载。**这是 Claude Code 迈向"插件可扩展"的关键一步**。
   - 链接：<https://github.com/anthropics/claude-code/pull/93215>

2. **#93244** [CLOSED] mods: API renames, telemetry fixes, and a diff backend seam
   - 跟随插件 API 命名收敛（`isFocused`、`tool`）；遥测严格每行独占、第三方 provider 不再外发；为 diff 提供 git 后端抽象，便于未来接入其他 VCS。
   - 链接：<https://github.com/anthropics/claude-code/pull/93244>

3. **#93452** [OPEN] mods/diff: match the built-in /diff panel
   - 让插件版 `/diff` 与内建 diff panel 视觉/交互一致（hunks 渲染、关闭按钮、空白态、窄终端重绘行，并保证同一时刻仅一个仓库探测）。
   - 链接：<https://github.com/anthropics/claude-code/pull/93452>

4. **#89404** [OPEN] validate-agent.sh: don't abort at the first warning
   - 修复 plugin-dev 的 `validate-agent.sh` 在 `set -euo pipefail` 下被 `((warning_count++))` 提前 abort 的问题（#83803），避免合法 agent 被误判。
   - 链接：<https://github.com/anthropics/claude-code/pull/89404>

---

## 五、功能需求趋势

通过对 Issue 标签与摘要的聚合分析，社区的诉求集中在以下几个方向：

| 方向 | 代表性 Issue | 趋势信号 |
|---|---|---|
| **模型行为与质量** | #83510、#85874、#83134 | 模型版本切换带来可测量的输出差异（冗长、语气、隐式路由），需要 A/B 与日志可观测 |
| **计费/配额透明度** | #68773、#80750、#86033、#85400 | 多重 BUG 集中在自动充值、5 小时窗口、并行实例消耗，催生"计费可解释"需求 |
| **桌面端 / Cowork 跨平台稳定性** | #47327、#86031、#86185、#86056 | Cowork、配对、Chrome 桥接、deep link 在 Win/macOS 上仍是高频故障面 |
| **IDE & Devcontainer 集成** | #86052、#86015、#79770 | VS Code 扩展、容器并行、流式 JSON 客户端的 cron/loop 不触发 |
| **插件/Mod 扩展体系** | PR #93215/#93244/#93452、#77927、#81058 | 官方正在将"mods"作为一级概念，需稳定的 API 与 GUI 入口 |
| **安全/隐私治理** | #86225、#86065、#86071、#86195 | 数据外发到公开仓库、安全审计请求、安全策略误拦截 |
| **Agent & Sub-agent 协同** | #85874、#86070、#86067、#84041 | agent 报告丢消息、teammate 系统提示自相矛盾、session 标题无法更新 |

---

## 六、开发者关注点（高频痛点）

1. **"看不见的模型版本"是第一痛点**：#83510 高赞与多个隐式降级类 Issue（#86065、#86071）合并指向一个诉求——客户端必须能看到当前真实模型、路由变更与拒绝原因。
2. **配额/账单可观察性严重不足**：开发者连自己消耗了多少、被什么操作消耗都无法可靠复盘（#80750、#86033、#85400）。
3. **Windows 桌面 + Cowork 是 QA 重灾区**：bug 数量占比最高且修复周期最长，影响企业部署意愿。
4. **扩展体系正式化进行中**：mods 插件路径明朗化（#93215 等），但配套的 marketplace / 安装 GUI（#77927）尚未跟上。
5. **Agent 间的"语义丢失"问题**正在被系统化报告：sub-agent 报告不达、teammate 提示冲突、跨会话消息无自动唤醒——这是 2026 下半年的新战场。
6. **环境兼容碎片化**：从 macOS 26.1、Windows 11 累积更新到多 devcontainer 并发，平台升级逐步破坏既有工作流，官方需要更强的回归矩阵与"已知兼容版本"清单。

---

> 本报告基于 GitHub `anthropics/claude-code` 仓库 2026-09-10 至 2026-09-11 的公开数据整理。Issue 与 PR 状态为快照值，可能已后续变更。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# 🤖 OpenAI Codex 社区动态日报
**日期：** 2026-09-11
**分析师：** AI 开发工具分析师

---

### 🌟 今日速览
今日 Codex 社区迎来重磅模型与工具更新：**GPT-6-Astra 正式上线模型选择器及 Amazon Bedrock **。在 SDK 端，Python 和 Rust 均有新版本发布。同时，社区正集中解决 **Windows 平台的 WSL 稳定性问题、Codex App 额度异常，以及关于“自我进化智能体”（Self-Evolving Agents）的深度 RFC 讨论**。

---

### 🚀 版本发布 (过去24 小时)
*   **Python SDK (v0.154.0):** 升级至支持 Python 3.10+，同步更新了 `openai-codex-cli-bin`。
*   **Rust SDK (v0.155.0-alpha.2/alpha.1):** 持续进行 Alpha 版本迭代，优化 Rust 生态下的开发支持。
*   **Cygwin Build Tools:** 针对 Windows 原生语音功能提供了 CI 专用构建输入（不包含在用户包）。

---

### 🔥 社区热点 Issues (Top 10)
1.  **[#44199] $200/mo 计划额度异常归零](https://github.com/openai/codex/issue/44199)**
    *   **摘要：** 用户反馈 Pro x20 计划用量率从 73% 瞬间掉至 0%，且无操作记录。评论数 26，关注度高。
2.  **[#40575] [RFC] 迈向自我进化的智能体](https://github.com/openai/codex/issue/40575)**
    *   **摘要：** 深度提案：如何通过交互式指令蒸馏（/learn）和规则代谢（Rule Metabolism）解决 Agent 在处理长期项目时的“遗忘瓶颈”。
3.  **[#40865] 远程 SSH 跨任务工具失效](https://github.com/openai/codex/issue/40865)**
    *   **摘要：** 在 Codex Desktop 连接远程 Linux 宿时，跨任务协调功能在更新运行时至 0.148.0 后依然失效。
4.  **[#42765] Pro 版每周额度无故消失](https://github.com/openai/codex/issue/42765)**
    *   **摘要：** 用户反映在未运行会话的情况下，每周使用额度从 45% 自动掉至 0%。
5.  **[#41535] Windows 桌面宠物（Pet）点击穿透无法拖拽](https://github.com/openai/codex/issue/41535)**
    *   **摘要：** UI Bug，Windows 上的宠物图标会透明，点击或拖拽会穿透到下方的窗口，无法移动。
6.  **[#43347] 关闭 Browser Use 标签导致应用崩溃](https://github.com/openai/codex/issue/43347)**
    *   **摘要：** 在 Windows 环境下，关闭最后一个活跃的 Browser Use 标签会导致整个 Codex 桌面程序崩溃。
7.  **[#44612] 更新后 WSL 持续反复重启](https://github.com/openai/codex/issue/44612)**
    *   **摘要：** 严重稳定性问题，更新 Codex 后 WSL 无法工作并导致 WSL 本身陷入无限重启循环。
8.  **[#43855] 上下文压缩（Compaction）后停止](https://github.com/openai/codex/issue/43855)**
    *   **摘要：** 使用 GPT-6-Astra 模型时，Codex CLI 在执行上下文压缩后会无响应。
9.  **[#44398] Astra 闪烁动画阻止鼠标选择文本](https://github.com/openai/codex/issue/44398)**
    *   **摘要：** TUI 缺陷，Astra 的装饰性闪烁效果导致在 Kitty 终端中无法通过鼠标选中文本。
10. **[#14105] 切换终端主题后输入框不可见](https://github.com/openai/codex/issue/14105)**
    *   **摘要：** 兼容性 Bug，从深色模式切换到浅色模式且不重启时，输入框文字会变成白色（透明）。

---

### 🛠️ 重要 PR 进展 (Top 10)
*   **[#44656] 将会话指标归类到具体模型](https://github.com/openai/codex/pr/44656):** 解决了切换模型后遥测数据归类错误的问题（已关闭/合并）。
*   **[#44655] 在运行时能力中遵循线程级插件排除](https://github.com/openai/codex/pr/44655):** 确保用户在特定线程中禁用的插件在 MCP 服务器和技能调用中生效（已关闭/合并）。
*   **[#44654] 修复 Codex Doctor 中因脱敏导致的隐蔽（隐藏）“变量未设置”诊断信息](https://github.com/openai/codex/pr/44654):** 修复了安全脱敏机制误伤 `token` 或 `secret` 变量导致用户无法排查配置问题。
*   **[#44651] 保持命令中心错误显示并保留草稿](https://github.com/openai/codex/pr/44651):** 确保即使任务被其他服务器管理，用户输入的草稿和错误提示也不会丢失。
*   **[#44650] 强制执行管理模型模型选择与定义](https://github.com/openai/codex/pr/44650):** 提升了配置优先级，使强制要求能覆盖本地默认设置。
*   **[#44639] 为 Windows 离线沙箱添加非回环流量拦截](https://github.com/openai/codex/pr/44639):** 增强了离线开发环境的安全性隔离。
*   **[#44636] 从 OIDC 的 503 响应中恢复 OAuth 元数据](https://github.com/openai/codex/pr/44636):** 解决了当 OAuth 端点短暂 503 时，通过 OIDC 兜底导致 Token 无法刷新的问题。
*   **[#44631] 重新打开命令中心时聚焦任务列表](https://github.com/openai/codex/pr/44631):** 优化了 UX 流程，避免用户需要多次点击才能进入任务列表。
*   **[#44629] 为 MCP OAuth 登录添加手动回调输入](https://github.com/openai/codex/pr/44629):** 允许在浏览器无法自动跳转回调页时，通过手动粘贴 URL 完成身份验证。
*   **[#44611] 在 Turn 开始事件中保留根 Turn 归因](https://github.com/openai/codex/pr/44611):** 改进了复杂任务链的日志溯源能力。

---

### 📈 功能需求趋势
1.  **模型能力演进：** 社区对 **GPT-6-Astra** 的表现高度敏感，且开发者开始关注模型在复杂任务（如上下文压缩后）的稳定性。
2.  **跨平台稳定性（重点）：** **Windows + WSL** 的兼容性是目前开发者最大的痛点，频繁的崩溃和重启问题亟需官方修复。
3.  **Agent 架构深度化：** 开发者不再满足于简单的代码补全，开始深度讨论**“自我进化”**、**“指令蒸馏”**等高阶 Agent 架构方案。
4.  **UI/UX 细粒度控制：** 用户对装饰性 UI（如 Astra 闪烁、宠物图标）存在需求分化，大量用户请求提供关闭开关（`whimsy = false`）。

---

### 💡 开发者关注点
*   **额度透明度：** 高级用户（$200/mo 计划）对额度异常波动极其敏感，建议关注官方是否有计费逻辑说明。
*   **MCP 生态：** 随着 MCP（Model Context Protocol）的引入，插件排除规则和身份验证流（手动回调）已成为插件开发者的调试重心。
*   **环境隔离：** 如果你在 Windows 上使用 WSL 进行开发，建议暂时避开 0.148.0 以上 版本的某些敏感操作，等待 #44612 的进展。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 | 2026-09-11

> 数据来源：`github.com/google-gemini/gemini-cli` | 统计周期：2026-09-10 过去 24 小时

---

## 1. 今日速览
- **夜ly 版本发布**：发布 `v0.61.0-nightly.20260910.ged2ac40df`，包含常规依赖更新与核心修复。
- **安全加固成主线**：多个高优先级 PR 聚焦于沙箱文件系统隔离、路径遍历防御（NTFS 8.3 短文件名）、环境变量注入防护及内部文档读取越界修复，显示项目正处于安全加固冲刺期。
- **Agent 稳定性仍是痛点**：高优先级 Issue 集中在 Subagent 异常恢复、Generalist Agent 挂起、Shell 执行卡死、Auto Memory 重试风暴等核心流程的可靠性问题。

---

## 2. 版本发布
### `v0.61.0-nightly.20260910.ged2ac40df` (Nightly)
- **发布时间**：2026-09-10
- **变更日志**：[对比 v0.61.0-nightly.20260909](https://github.com/google-gemini/gemini-cli/compare/v0.61.0-nightly.20260909.ged2ac40df...v0.61.0-nightly.20260910.ged2ac40df)
- **核心内容**：自动化夜ly 构建，包含当日合并的所有修复（见下文 PR 列表），无重大破坏性变更。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 标签/优先级 | 核心问题 | 关注理由 & 社区反应 |
|---|-------|-------------|----------|---------------------|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent 恢复后误报 GOAL 成功 | **P1, Bug, Need Retest** | `codebase_investigator` 触及 MAX_TURNS 仍上报 `status: "success" / Termination Reason: "GOAL"`，导致上层误判任务完成。 | 👍 2、评论 13。**严重影响编排可靠性**，自动化流程会因“虚假成功”跳过后续步骤。 |
| 2 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist Agent 频繁无限挂起 | **P1, Bug, Need Retest** | 切换到 generalist agent 后简单操作（如建目录）卡住 1 小时以上；禁用 subagent 可规避。 | 👍 8、评论 8。**阻断主流程**，用户被迫显式禁用子代理，降低易用性。 |
| 3 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) Shell 命令执行完仍显示 "Waiting input" 卡死 | **P1, Core, Bug** | 简单 CLI 命令执行完毕，前端仍显示活跃并等待输入，需手动取消。 | 👍 3、评论 4。**交互层与进程管理不同步**，高频复现。 |
| 4 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) 引入零依赖 OS 沙箱利用模型原生 Bash 能力 | **P2, Enhancement, Large** | 提议通过零依赖沙箱让模型直接链式调用 `grep/sed/awk` 等 POSIX 工具，发挥 Gemini 3 原生 Bash 亲和力。 | 👍 1、评论 9。**架构级增强**，关乎 Agent 能力上限与安全边界平衡。 |
| 5 | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) Auto Memory 需确定性脱敏 & 减少日志 | **P2, Security, Bug** | 后台提取 Agent 在模型上下文中才脱敏，敏感数据已入模型；服务端仍可能记录技能内容。 | 评论 5。**数据安全合规风险**，需在入模前脱敏。 |
| 6 | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) Auto Memory 对低信号会话无限重试 | **P2, Agent, Bug** | 低信号会话因未被读取而保留“未处理”状态，反复被背景提取器捞起，造成资源浪费。 | 评论 4。**后台任务风暴**，需引入隔离/熔断机制。 |
| 7 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) 模型极少主动使用 Skills/Subagents | **P2, Agent, Bug** | 除非显式指令，模型几乎不自发调用自定义技能或子代理（如 gradle、git skill）。 | 评论 6。**Prompt/系统提示工程缺失**，影响扩展生态落地。 |
| 8 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) 评估 AST 感知文件读取/搜索/映射价值 | **P2, Epic, Feature** | 探索 AST 级工具是否能减少轮次、降低 Token 噪声、精准定位方法边界。 | 👍 1、评论 7。**长期技术债偿还方向**，关联代码库理解能力跃迁。 |
| 9 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) Browser Subagent 在 Wayland 下失效 | **P1, Agent/Browser, Bug, Need Retest** | Wayland 环境下浏览器子代理启动即失败，Termination Reason: GOAL（实为崩溃）。 | 👍 1、评论 4。**平台兼容性缺口**，Linux 桌面主流趋势为 Wayland。 |
| 10 | [#21335](https://github.com/google-gemini/gemini-cli/issues/21335) `/compress` 命令会话恢复后不持久化 | **P2, Bug, Small** | 会话摘要仅驻留内存，退出重进丢失压缩上下文，Token 优化前功尽弃。 | 👍 2、评论 2。**长会话成本控制失效**，用户感知强。 |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 状态/标签 | 核心变更 | 影响面 |
|---|----|-----------|----------|--------|
| 1 | [#29214](https://github.com/google-gemini/gemini-cli/pull/29214) `fix(sandbox): harden filesystem boundaries` | **Open, Size XL** | 沙箱运行时状态与宿主配置目录隔离；用清洗后的配置文件替换宿主目录挂载；统一 realpath 校验。 | **安全核心**，彻底堵死沙箱逃逸路径。 |
| 2 | [#29116](https://github.com/google-gemini/gemini-cli/pull/29116) `fix(core): mitigate NTFS 8.3 short name (SFN) path` | **Closed** | 路径规范化与 `AllowedPathChecker` 增加对 `git~1` 等短文件名的识别与拦截。 | **Windows 安全修复**，防绕过。 |
| 3 | [#29250](https://github.com/google-gemini/gemini-cli/pull/29250) `fix(core): prevent indirect prompt injection via build files` | **Open, Size XL** | 受限工作区模式下强化构建配置文件边界校验；重构 `shell/edit/write_file` 执行路径，拦截不可信标志位。 | **供应链/注入防御**，企业级部署前置条件。 |
| 4 | [#29249](https://github.com/google-gemini/gemini-cli/pull/29249) `fix(core): close sibling-prefix bypass in get_internal_docs` | **Open, P1** | `get_internal_docs` 路径守卫从字符串前缀比较改为路径组件边界校验，修复同名兄弟目录越界读取。 | **内部工具越界读取**，高危。 |
| 5 | [#29200](https://github.com/google-gemini/gemini-cli/pull/29200) `fix(core): enforce MCP policy consistently at runtime` | **Open, P2, Enterprise** | 运行时策略检查与 CLI 大小写/空白修剪匹配对齐；显式空 `mcp.allowed` 视为 fail-closed。 | **企业合规**，MCP 服务器准入控制。 |
| 6 | [#29134](https://github.com/google-gemini/gemini-cli/pull/29134) `fix(cli): protect current session from deletion` | **Open, P2** | `--delete-session` 排除当前活跃会话 ID（按短 ID 后缀精确匹配），避免误删。 | **数据安全**，用户体验兜底。 |
| 7 | [#29093](https://github.com/google-gemini/gemini-cli/pull/29093) `Fixes #29077` (ignore 缓存与子树剪枝) | **Closed, P1** | 引入 `ignoreCache` 避免重复模式匹配；目录被忽略时直接剪枝子树，大幅提升 `getIgnoredPaths` 性能。 | **核心性能**，大型仓库启动/扫描加速。 |
| 8 | [#29094](https://github.com/google-gemini/gemini-cli/pull/29094) `upgrade simple-git to 3.32.3 (CVE-2026-28292)` | **Closed** | 修复 `simple-git` 关键 CVE（CRITICAL）。 | **供应链安全**，必须回合。 |
| 9 | [#29095](https://github.com/google-gemini/gemini-cli/pull/29095) `upgrade shell-quote to 1.8.4 (CVE-2026-9277)` | **Closed** | 修复 `shell-quote` 关键 CVE（CRITICAL）。 | **命令注入防御**，必须回合。 |
| 10 | [#29278](https://github.com/google-gemini/gemini-cli/pull/29278) `fix(core): choose collision-free env expansion keys` | **Open, P2** | `expandEnvVars` 选取不与调用者环境冲突的哨兵键，防止环境变量劫持扩展逻辑。 | **核心工具链健壮性**，边界情况修复。 |

---

## 5. 功能需求趋势（从 Issues 提炼）

1. **Agent 编排与可观测性进阶**
   - Subagent 状态机修正（#22323）、轨迹可视化/分享（#22598）、持久化任务追踪替代 `WriteToDo`（#18836）、压缩上下文持久化（#21335）。
   - **趋势**：从“能跑通”向“可调试、可复现、可长程运行”演进。

2. **模型原生工具链深度融合**
   - 零依赖沙箱释放 Bash 原生能力（#19873）、AST 感知工具链评估（#22745/#22746）、战术性精读逻辑（#19561）。
   - **趋势**：减少封装层，让模型直接驾驭标准工具，降低 Token 与轮次开销。

3. **企业级安全与合规基建**
   - 沙箱边界硬化（#29214）、NTFS/SFN 防绕过（#29116）、构建文件注入防御（#29250）、内部文档越界修复（#29249）、MCP 策略强一致性（#29200）、Auto Memory 脱敏前置（#26525）。
   - **趋势**：安全左移，夜ly 分支即修复 CVE，准入门槛显著提高。

4. **跨平台兼容性补齐**
   - Wayland 浏览器子代理（#21983）、Symlink 识别 Agent（#20079）、终端 resize 无闪烁高性能渲染（#21924）。
   - **趋势**：Linux 桌面与终端生态适配常态化。

5. **自动化记忆与知识管理**
   - Auto Memory 低信号隔离（#26522）、无效补丁隔离/展示（#26523）、技能/子代理自发调用增强（#21968）。
   - **趋势**：记忆系统从“能存”向“高信噪比、可治理”转型。

---

## 6. 开发者关注点 & 痛点总结

| 痛点 | 高频表现 | 代表 Issue/PR |
|------|----------|---------------|
| **Agent 可靠性不可控** | Subagent 虚假成功、Generalist 挂起、Browser 崩溃、Shell 假死 | #22323, #21409, #21983, #25166 |
| **上下文/Token 成本失控** | `/compress` 不持久、大文件全量读注入、缺乏 AST 级精读、Auto Memory 重试风暴 | #21335, #19561, #22745, #26522 |
| **扩展生态“配好了用不上”** | Skills/Subagents 需显式指令才触发、Symlink 不识别、设置不生效 | #21968, #20079, #22267 |
| **安全/合规阻碍落地** | 沙箱逃逸风险、NTFS 绕过、CVE 依赖链、敏感数据入模型/日志、MCP 策略不一致 | #29214, #29116, #29094/5, #26525, #29200 |
| **开发体验细节打磨不足** | 交互式提示卡死、终端 resize 闪

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-09-11**

## 🚀 今日速览
GitHub Copilot CLI 发布了 **v1.0.84-4** 版本，重点优化了插件管理逻辑，引入了更直观的指令和 LSP 列表命令。社区目前正集中解决 **Session 内存溢出（OOM）**、**Windows/WSL2 环境下的粘贴失效**以及 **MCP 插件 OAuth 认证失败** 等高频环境稳定性问题。

---

## 📦 版本发布 (Latest Releases)
### **v1.0.84-4**
*   **命令优化**：新增 `copilot instruction list` 和 `copilot lsp list`，替代了原先繁琐的 `copilot plugins list --kind ...` 命令。
*   **自动化支持**：为 `copilot plugin list`、`marketplace list` 等查询命令新增了 `--json` 输出，便于自动化脚本集成。
*   **插件控制**：为 `copilot plugin` 新增了 `enable` 和 `disable` 功能，允许按需管理插件状态。

---

## 🔥 社区热点 Issues (Top 10)

1.  **[OOM] Session 内存溢出导致进程崩溃 [#4780](https://github.com/github/copilot-cli/issues/4780)**
    *   **描述**：在长时间运行的 `--resume` 会话中，当触发上下文压缩时，V8 堆内存达到 4GB 限制并崩溃，导致会话无法恢复。
2.  **[Bug] WSL2 (ARM64) 下 /copy 命令失效 [#3534](https://github.com/github/copilot-cli/issues/3534)**
    *   **描述**：在 WSL2 ARM64 环境下，由于 `cmd.exe` 的引号处理 Bug，导致 `/copy` 无法写入 Windows 剪贴板。
3.  **[Bug] 无法创建第二个 Local (branch) 会话 [#4742](https://github.com/github/copilot-cli/issues/4742)**
    *   **描述**：更新至 1.1.15 版本后，若项目内已有活跃的 CLI 进程，无法创建新的分支类型会话，提示"invalid argument"。
4.  **[Bug] SSH + tmux 模式下复制粘贴失效 [#3260](https://github.com/github/copilot-cli/issues/3260)**
    *   **描述**：在 macOS/Linux 上通过 tmux SSH 连接到 Windows Server 2025 时，Copilot CLI 的复制粘贴功能损坏。
5.  **[Auth] Atlassian MCP OAuth 回调端口错误 [#4795](https://github.com/github/copilot-cli/issues/4795)**
    *   **描述**：连接 Atlassian MCP 服务时，OAuth 回调使用的是随机端口，与注册的33418 端口不匹配。
6.  **[Bug] 自动授权模式在1小时后失效 [#4764](https://github.com/github/copilot-cli/issues/4764)**
    *   **描述**：使用 `/permissions assisted` 模式运行约 1 小时后，自动确认不再响应，必须重启会话。
7.  **[Config] settings.json 模型配置被静覆盖 [#4252](https://github.com/github/copilot-cli/issues/4252)**
    *   **描述**：退出会话时，CLI 会将启动时的旧 `model` 配置写回 `settings.json`，导致运行期间的手动修改被覆盖。
8.  **[Enterprise] 组织级 Agent 无法显示 [#1285](https://github.com/github/copilot-cli/issues/1285)**
    *   **描述**：用户在组织级私有仓库创建了 Agent，但在 CLI 或 VS Code 工具中均无法看到。
9.  **[Request] 增加 Ctrl+Backspace 删除整词 [#2199](https://github.com/github/copilot-cli/issues/2199)**
    *   **描述**：开发者希望支持像主流编辑器一样，通过快捷键快速删除单词提升输入效率。
10. **[Bug] 闲置进程触发 FileWatch 事件风暴 [#4807](https://github.com/github/copilot-cli/issues/4807)**
    *   **描述**：后台运行的闲置 CLI 进程会产生大量的 FileWatch 事件，导致 CPU 占用飙升至 200% 且日志几十 GB。

---

## 🛠 重要 PR 进展 (Top Pull Requests)

1.  **[Security] 将 GitHub Actions 锁定到 Commit SHA [#4808](https://github.com/github/copilot-cli/pull/4808)**
    *   **内容**：为了安全性，将 `uses:` 引用锁定到特定的不可变 Commit SHA 而非版本标签，防止供应链受攻击。
2.  **[Docs] 修订第三方服务相关说明 [#4786](https://github.com/github/copilot-cli/pull/4786)**
    *   **内容**：更新了关于第三方服务的接入说明，明确了访问权限和条款要求。

---

## 📈 功能需求趋势与分析

*   **稳定性是首要痛点**：内存泄露（OOM）和会话死锁（Wedged）是目前开发者反馈最多的问题，特别是在处理长对话的场景下。
*   **跨平台兼容性待加强**：WSL2、SSH+Tmux 以及 Windows 环境下的交互问题（剪贴板失效）反映出 CLI 在复杂终端环境下的适配仍需完善。
*   **MCP 生态爆发**：随着 MCP（Model Context Protocol）的引入，插件认证（OAuth 端口问题）和工具列表刷新逻辑成为新的技术关注焦点。
*   **UX 细节追求**：开发者对终端工具的快捷键（如 Vim 模式支持、删除快捷键 Ctrl+Backspace）有明显的改进预期。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 | 2026-09-11

---

## 1. 今日速览
- **无新版本发布**，当前最新稳定版仍为 `v0.42.0`。
- 社区在过去 24 小时内仅有 **1 条 Issue 更新**（#2638），核心聚焦于 **设备授权登录流程在 macOS 上因后端返回 HTTP 500 而失败**，阻断了免费套餐用户的核心入口。
- 无活跃 PR，开发重心疑似处于版本迭代间隙或专注于后端认证服务稳定性修复。

---

## 2. 版本发布
> 过去 24 小时无新 Release 发布。

---

## 3. 社区热点 Issues

### #2638 【阻断级】`/login` 设备授权流程浏览器确认后返回 HTTP 500 (CLI v0.42.0, macOS)
- **链接**: [MoonshotAI/kimi-cli#2638](https://github.com/MoonshotAI/kimi-cli/issues/2638)
- **状态**: `OPEN` | 作者: `milesbuckton` | 更新: 2026-09-10 | 评论: 1 | 👍: 0
- **核心现象**: 用户执行 `/login` 后，浏览器端设备码（如 `WGBT-C3BW`）授权成功，但 CLI 端轮询 token 时后端返回 **HTTP 500 Internal Server Error**。
- **环境**: macOS, CLI v0.42.0, 免费套餐，VS Code 扩展同复现。
- **重要性**: ⭐⭐⭐⭐⭐ **P0 级阻断问题**。直接影响**所有新用户及 Token 过期老用户的登录入口**，且波及 VS Code 扩展体验，属于认证链路核心回归或后端服务异常。
- **社区反应**: 目前仅 1 条评论（可能为模板回复或初步排查），关注度低但破坏力极大，建议官方优先排查后端 `/device/token` 或关联授权接口日志。

---

## 4. 重要 PR 进展
> 过去 24 小时无 PR 创建或更新。

---

## 5. 功能需求趋势（基于近期 Issue 模式推断）
鉴于本期数据量极少，结合历史高频 Issue 类型，当前社区关注焦点集中于：

1.  **认证体系稳健性** (`Auth/Reliability`)
    *   设备码流程、OAuth 回调、Token 刷新机制、多账号切换。
    *   *本期 #2638 直接印证了该痛点*。
2.  **IDE 深度集成** (`IDE Integration`)
    *   VS Code / JetBrains 插件的上下文传递、诊断面板联动、内联补全延迟。
3.  **长上下文与工具调用稳定性** (`Context/Tools`)
    *   大文件/大代码库读取性能、MCP (Model Context Protocol) 服务器兼容性、Shell 命令执行沙箱逃逸风险。
4.  **跨平台一致性** (`Cross-platform`)
    *   Windows 下路径解析、权限管理、终端渲染差异（如 PowerShell vs cmd vs Git Bash）。

---

## 6. 开发者关注点与痛点总结

| 痛点分类 | 典型反馈 | 影响范围 | 优先级建议 |
| :--- | :--- | :--- | :--- |
| **登录/认证链路脆弱** | 设备码授权后端 500；Token 无感刷新失败；代理/内网环境下鉴权超时 | **全量用户**（首次使用/Token过期即触发） | **P0 - 立即修复后端服务或增加客户端重试/降级逻辑** |
| **VS Code 扩展体验割裂** | 登录状态不同步；侧边栏 Agent 无响应；诊断信息未推送至 Problems 面板 | IDE 重度用户 | P1 - 统一 CLI 与 Extension 的认证状态存储与事件总线 |
| **工具调用确信度低** | `run_shell_command` 权限提示频繁/逻辑混乱；文件写入无 Diff 预览选项 | 安全敏感/自动化场景 | P1 - 增加 `--dry-run` / `--diff` 标志位及细粒度权限策略 |
| **文档与错误码缺失** | HTTP 500 无对应错误码文档；CLI 报错堆栈不友好，难以自助排查 | 所有开发者 | P2 - 建立错误码规范 (KIMI-CLI-XXXX) 并接入文档站搜索 |

---

> **分析师备注**: 今日数据极度稀疏，**#2638 为唯一信号且信号强度极高**。建议研发团队确认是否为 **v0.42.0 发布后的后端配置变更导致的回归**，或 **免费套餐授权额度/服务端点变更**。若 24 小时内无修复版本 (v0.42.1) 或热修复公告，将显著损害新用户留存率。建议在 CLI 侧增加对 5xx 错误的指数退避重试与友好报错提示（引导用户检查状态页或提交 Issue 模板）。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-09-11

> 数据来源：github.com/anomalyco/opencode ｜ 统计窗口：过去 24 小时

---

## 1. 今日速览

今日无新版本发布，社区讨论集中在 **2.0 版本的稳定性与数据膨胀问题**：事件表（`event` 表）无限制增长导致 `opencode.db` 飙至 13GB+、子代理无循环保护空烧 token 等严重问题持续发酵。与此同时，**支付/订阅失败**类 Issue 密集出现（多国用户无法完成 Go 订阅付款），成为今日最集中的负面反馈。TUI 侧则迎来一批渲染架构重构与递归会话分组的新 PR。

---

## 2. 版本发布

过去 24 小时内无新 Release。

---

## 3. 社区热点 Issues（Top 10）

**1. #33356 [2.0] `event` 表无界增长，数据库达 13GB+（OPEN｜30 评论｜👍9）**
长期运行实例的 SQLite 存储因事件溯源表从不清理/压缩，两个实例各达 ~13GB，占满 22GB 磁盘的 97–99%。这是当前 2.0 最严重的生产级缺陷。
🔗 https://github.com/anomalyco/opencode/issues/33356

**2. #15585 免费模型提示 "free usage exceed"（CLOSED｜55 评论｜👍17）**
三个免费模型全部报同一错误，用户质疑是否存在"免费额度上限"。评论数最高，反映免费额度策略缺乏透明度，官方已关闭。
🔗 https://github.com/anomalyco/opencode/issues/15585

**3. #23153 [FEATURE] 支持加密货币支付（OPEN｜21 评论｜👍50）**
请求为 OpenCode Go 增加 crypto 付款方式。点赞数位居前列，说明现有支付通道覆盖不足是长期痛点。
🔗 https://github.com/anomalyco/opencode/issues/23153

**4. #13003 [FEATURE] 在 TUI 中显示 token 用量（OPEN｜13 评论｜👍53）**
token 用量（输入/输出/剩余预算）目前仅在内部跟踪，界面不可见。👍53 为今日最高，成本可视化是强需求。
🔗 https://github.com/anomalyco/opencode/issues/13003

**5. #36942 [FEATURE] 垂直标签页（OPEN｜15 评论｜👍31）**
新 UI 强制横向标签，超过 5 个会话标题就难以辨认，用户希望支持垂直布局。与今日 PR #41575 形成呼应。
🔗 https://github.com/anomalyco/opencode/issues/36942

**6. #45278 订阅续费被拒，卡与银行均正常（OPEN｜13 评论｜👍2）**
使用约 3 个月的同一张卡突然被拒，银行确认无异常。与 #43400、#48374 共同构成支付故障集群。
🔗 https://github.com/anomalyco/opencode/issues/45278

**7. #45442 [2.0] 子代理无限循环，50 分钟烧 token（OPEN｜6 评论）**
后台 `general` 子代理在 ~50 分钟内发起 **364 次完全相同的 `grep` 调用**，无任何循环保护，token 消耗不可控。
🔗 https://github.com/anomalyco/opencode/issues/45442

**8. #41175 `event` 表按流式更新存储完整消息快照（OPEN｜5 评论｜👍4）**
与 #33356 同源：`event` 表存的是每条消息的完整副本而非增量，占数据库约 90%。社区已提供第三方清理工具。
🔗 https://github.com/anomalyco/opencode/issues/41175

**9. #44788 [2.0] 插件 `event.subscribe` 收不到任何事件（OPEN｜4 评论）**
beta-18050 上 V2 插件 API 无法通过任何文档化机制向模型 prompt 注入上下文，`context` hook 行为异常，阻塞插件生态。
🔗 https://github.com/anomalyco/opencode/issues/44788

**10. #48330 [2.0] 单次 prompt 耗尽 Copilot 旧版订阅全部额度（OPEN｜2 评论）**
1500 次/月的 Copilot Legacy 计划在一次会话内被全部消耗并触发 429，1.x 无此问题，属 2.0 回归。
🔗 https://github.com/anomalyco/opencode/issues/48330

**其他值得留意**：#48389 Desktop 1.18.30 NodeService 退出时崩溃（SIGABRT/SIGSEGV）；#37055 Windows 上 `opencode upgrade` 静默失败、二进制从不替换；#48246 显式缓存断点仅对 Anthropic 系模型生效；#47359 Ollama 本地 provider 的 `think` 参数未透传；#48360 无法删除账号（GDPR）。

---

## 4. 重要 PR 进展（Top 10）

**1. #48395 [OPEN] feat(tui): 递归会话分组树**
新增由每条目分组路径驱动的通用递归分组树，支持有序关联接缝合并与深度优先拆分，并在分组上缓存叶子总数以不影响后续 transcript 预算。
🔗 https://github.com/anomalyco/opencode/pull/48395

**2. #48394 [OPEN] feat(tui): 递归分组引擎（Stacked on #48393）**
在接入生产会话投影前先落地纯分组引擎，含可配置嵌套路径。
🔗 https://github.com/anomalyco/opencode/pull/48394

**3. #48393 [CLOSED] refactor(tui): 抽取共享会话渲染原语**
将 session render context 与 hook 移入 `render-context.tsx`，文本/推理组件与内联工具行移入 `message-parts.tsx`，为嵌套会话渲染打基础。
🔗 https://github.com/anomalyco/opencode/pull/48393

**4. #41575 [CLOSED] feat(tui): 可配置标签位置**
V2 TUI 标签支持上/下/左/右四向布局，侧边保留 42 列垂直栏，终端过窄时回退顶部条——直接回应 #36942。
🔗 https://github.com/anomalyco/opencode/pull/41575

**5. #41552 [CLOSED] feat(tui): 中断后继续未完成工作**
为 session interrupt API 增加可选 `continue` 标志，保留 pending 执行唤醒，使已接纳的工作在清理后恢复。
🔗 https://github.com/anomalyco/opencode/pull/41552

**6. #41553 [CLOSED] feat(desktop): 主动式 RAM 内存管理**
桌面 Electron 端每 30s 轮询 `app.getAppMetrics()` 并触发 GC，缓解内存膨胀。
🔗 https://github.com/anomalyco/opencode/pull/41553

**7. #41579 [CLOSED] fix(app): 修复大段粘贴卡顿**
V2 composer 的大段多行粘贴改走 `execCommand("insertText")` 导致的 Chromium 卡顿问题（Closes #38932）。
🔗 https://github.com/anomalyco/opencode/pull/41579

**8. #41610 [CLOSED] fix(core): 容忍缺失的 workspace 名称**
在重建 legacy `workspace` 表前先检测 `name` 列是否存在，修复 `no such column: name` 崩溃，并补充回归测试。
🔗 https://github.com/anomalyco/opencode/pull/41610

**9. #41604 [CLOSED] fix(core): 回滚后保留 compaction**
在接纳手动 compaction 前先提交暂存的 session revert，避免下一条 prompt 在旧回滚边界截断已完成的压缩。
🔗 https://github.com/anomalyco/opencode/pull/41604

**10. #41555 [CLOSED] feat(app): 标题栏 Run 按钮**
当项目配置了启动命令时，标题栏显示 Run 按钮直接执行项目启动命令。
🔗 https://github.com/anomalyco/opencode/pull/41555

> **观察**：今日 20 条高评论 PR 中有 18 条带 `automated-pr-cleanup` 标签并在同一天被关闭，属批量清理积压 PR，实际合并价值有限；真正的新增开发集中在下述 TUI 渲染重构线上（#48393/#48394/#48395）。其他值得留意的修复：#41594 compaction 遵循 agent variant 配置、#41597 拒绝空 questions 数组避免会话挂起、#41568 Windows 非 git 项目路径锚定、#41546 会话级 diff 统计持久化、#41576 Electron 升级至 42.8.1。

---

## 5. 功能需求趋势

从本期全部 Issue 提炼出五条主线：

1. **存储与性能治理（最高优先级）** — #33356、#41175 直指 `event` 表全量快照 + 无保留策略，是 2.0 上线的头号阻塞项；#45442 的循环保护缺失同属"资源失控"族。
2. **支付与订阅可用性** — #23153（crypto 支付，👍50）、#45278、#43400、#48374 构成集群，涵盖支付通道缺失、续费被拒、额度不透明三类问题，且横跨多国用户。
3. **TUI / Desktop 交互体验** — 垂直标签（#36942）、token 用量展示（#13003，👍53）、Desktop 麦克风按钮（#37742）、TUI Markdown 渲染（#38828）、可配置标签位置（PR #41575），UI 层需求密集且点赞集中。
4. **模型与 Provider 支持** — Ollama `think` 参数透传（#47359）、非 Anthropic 系缓存断点（#48246）、DeepSeek V4.1 Flash `reasoning_content` 回传（#48364）、Copilot 额度消耗（#48330），说明多 provider 适配仍是薄弱环节。
5. **2.0 插件生态与可观测性** — #44788 插件事件零投递、#42238 `--format json` 混入 compaction 内部文本、#39628 移动端远程审批权限请求，指向 API 契约与外部集成能力。

---

## 6. 开发者关注点

- **数据安全与磁盘耗尽**：13GB 数据库、ENOSPC 导致 TUI 崩溃（#48384）——用户对本地状态目录失控容忍度极低，亟需保留策略/压缩/自动清理。
- **成本不可控**：免费额度说封就封（#15585）、单 prompt 耗尽月度配额（#48330）、子代理空转烧 token（#45442）。**用量可见性 + 硬性预算/循环熔断**是当前最强的共同诉求。
- **支付体验是最大情绪源**：多条 Issue 语气激烈（如 #48374 俄语反馈"无法用任何银行卡付款，免费额度又极小"），支付与额度策略已从技术问题升级为口碑问题。
- **Windows / 桌面端成熟度不足**：升级静默失败（#37055）、桌面进程崩溃（#48389）、Windows 路径处理（PR #41568），跨平台一致性仍是短板。
- **2.0 插件 API 未稳定**：事件订阅、上下文注入、hook 语义均存在阻塞性缺陷，影响第三方生态迁移节奏。
- **账户治理缺失**：无自助删除账号路径（#48360），涉及 GDPR 合规风险。

---

*本日报基于 GitHub 公开数据自动整理，评论数与点赞数为截至 2026-09-10 的快照值。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 | 2026-09-11

> 数据来源：`earendil-works/pi` | 统计周期：2026-09-10 近 24 小时活动

---

## 1. 今日速览

- **无新版本发布**，但社区活跃度极高：近 24 小时共更新 **50 个 Issue** 与 **19 个 PR**，核心聚焦于 **模型兼容性修复（Claude/Gemini/OpenAI/DeepSeek/Bedrock）**、**上下文与缓存计费逻辑修正**、**TUI 全屏模光标/选择渲染缺陷** 以及 **Windows/扩展机制的非确定性行为修复**。
- 多个长期痛点（如 `grep` OOM、缓存计费错误、全屏模式光标泄漏）在今日集中获得 PR 修复并合入，显示维护团队正在进行高密度的“技术债清理冲刺”。
- 扩展机制与会话恢复逻辑迎来增强：新增 `sessionPromptAppend` 扩展点、设备码登录确认流程优化、会话恢复时模型选择优先级调整。

---

## 2. 版本发布

> 过去 24 小时无新 Release 发布。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 核心问题 | 关注度/评论 | 重要性评估 |
|---|-------|----------|-------------|------------|
| 1 | [#8061](https://github.com/earendil-works/pi/issues/8061) **Context budget ignores maxTokens output reservation** | 上下文预算计算未预留 `maxTokens`，导致 78% 占用时即被拒绝，且自动压缩重试仍失败 | 👍 2 · 8 条评论 | **P0 阻塞性 Bug**：影响长上下文模型（Gemini 1M）可用性，涉及核心 Token 管理逻辑 |
| 2 | [#9052](https://github.com/earendil-works/pi/issues/9052) **Fullscreen wheel scrolling 3x slower** | 全屏模式滚轮速度仅为普通模式 1/3，严重影响阅读体验 | 👍 4 · 8 条评论 | **P1 体验痛点**：全屏模式核心交互缺陷，用户反馈强烈 |
| 3 | [#8133](https://github.com/earendil-works/pi/issues/8133) **Per-model compaction settings** (已关闭) | 需按模型差异化配置压缩参数（如 `reserveTokens`） | 👍 5 · 6 条评论 | **高频需求**：已通过 PR 实现，体现社区对精细化 Token 控制的强烈诉求 |
| 4 | [#8810](https://github.com/earendil-works/pi/issues/8810) **Extension providers: fresh sessions ignore defaultProvider** | 扩展注册的 Provider 导致新会话随机回退到其他 Provider 默认模型 | 👍 1 · 6 条评论 | **P1 稳定性**：扩展机制核心缺陷，破坏用户配置确定性 |
| 5 | [#9294](https://github.com/earendil-works/pi/issues/9294) **claude-fable-5 fallback lists deprecated opus-4-8** | 内置 fallback 仍指向已下线模型，导致所有请求 400 失败 | 👍 0 · 5 条评论 | **P0 发布阻塞**：已由 #9297 修复合入，典型的模型目录维护滞后问题 |
| 6 | [#9257](https://github.com/earendil-works/pi/issues/9257) **extractCursorPosition leaves duplicate CURSOR_MARKER** | 光标标记清理不全导致渲染泄漏到终端 | 👍 0 · 5 条评论 | **P1 渲染缺陷**：与 #9332、#9441 关联，全屏模式光标处理系统性问题 |
| 7 | [#9361](https://github.com/earendil-works/pi/issues/9361) **Windows: settings shellPath non-deterministically ignored** | 加载扩展时 `shellPath` 被随机忽略，回退到 WSL `bash.exe` | 👍 0 · 4 条评论 | **P1 平台兼容性**：Windows 开发者核心痛点，涉及扩展加载顺序竞态 |
| 8 | [#8752](https://github.com/earendil-works/pi/issues/8752) **Bedrock: usage.input not normalized across model families** | Anthropic 与 OpenAI 族模型 `usage.input` 语义不同，导致缓存未命中误报、成本翻倍 | 👍 5 · 4 条评论 | **P0 计费准确性**：直接影响生产成本核算，跨模型适配层关键缺陷 |
| 9 | [#9276](https://github.com/earendil-works/pi/issues/9276) **grep tool with context lines causes OOM** | `grep` 带上下文行读取大量日志文件导致堆内存溢出 | 👍 0 · 4 条评论 | **P0 稳定性**：无头 SDK 场景致命崩溃，工具流式处理缺失 |
| 10 | [#9457](https://github.com/earendil-works/pi/issues/9457) **bedrock-converse: 1h cache writes billed at 5m rate** (已关闭) | 1 小时缓存写入未正确识别，按 5 分钟费率计费 | 👍 4 · 1 条评论 | **P0 计费修复**：与 #8752 同源，今日已修复合入 |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 类型 | 核心变更 | 状态 |
|---|----|------|----------|------|
| 1 | [#9297](https://github.com/earendil-works/pi/pull/9297) `fix(ai): remove invalid Fable 5 fallback target` | **Bug 修复** | 移除 `claude-fable-5` 内置 fallback 中已下线的 `claude-opus-4-8`，仅保留 Opus 5 | ✅ **已合入** |
| 2 | [#9441](https://github.com/earendil-works/pi/pull/9441) `fix(tui): prevent cursor marker leaks` | **Bug 修复** | 将 APC 光标标记视为位置元数据而非持久样式，修复全屏选择/渲染路径泄漏 | ✅ **已合入** |
| 3 | [#9459](https://github.com/earendil-works/pi/pull/9459) `fix(coding-agent): prefer recorded model changes on resume` | **逻辑优化** | 会话恢复时优先使用记录的 `model_change` 事件而非最后一条助手消息的模型 | 🟢 **Open** |
| 4 | [#9442](https://github.com/earendil-works/pi/pull/9442) `fix(ai): allow prompt cache keys for compatible proxies` | **功能增强** | 新增 `compat.supportsPromptCacheKey` 允许兼容代理接收 `prompt_cache_key` | 🟢 **Open** |
| 5 | [#9443](https://github.com/earendil-works/pi/pull/9443) `fix(ai): capture and replay Gemini thoughtSignature on openai-completions tool calls` | **Bug 修复** | 修复 OpenAI 兼容网关下 Gemini `thoughtSignature` 在 tool_calls 中丢失 | ✅ **已合入** |
| 6 | [#9434](https://github.com/earendil-works/pi/pull/9434) `feat(coding-agent): allow extensions to append to session system prompt` | **新功能** | 扩展 `session_start` 可返回 `systemPromptAppend`，支持有序追加、来源元数据、错误隔离 | 🟢 **Open** |
| 7 | [#9438](https://github.com/earendil-works/pi/pull/9438) `fix(tui): let overlays cover terminal images` | **Bug 修复** | 修复覆盖层（如 `/agents` 面板）被 Kitty 图像遮挡的合成顺序问题 | ✅ **已合入** |
| 8 | [#9431](https://github.com/earendil-works/pi/pull/9431) `feat(agent): default 3 minute timeout for every tool call` | **稳定性增强** | 为所有工具调用引入 3 分钟默认超时，防止卡死挂起 Agent | ✅ **已合入** |
| 9 | [#9425](https://github.com/earendil-works/pi/pull/9425) `feat(ai): add DeepSeek V4.1 Flash` | **新模型支持** | 原生目录新增 DeepSeek V4.1 Flash，支持 `off/low/medium/high` 思考等级 | ✅ **已合入** |
| 10 | [#9301](https://github.com/earendil-works/pi/pull/9301) `feat(coding-agent): confirm device-code browser and clipboard actions` | **UX 改进** | 设备码登录自动打开浏览器并复制代码到剪贴板，附带用户确认提示 | 🟢 **Open** |

---

## 5. 功能需求趋势

从今日 50 个 Issue 与 19 个 PR 中提炼的 **社区核心关注方向**：

| 趋势方向 | 典型 Issue/PR | 信号强度 |
|----------|---------------|----------|
| **模型目录与兼容性维护** | #9294, #9297, #9394, #9425, #9331, #9455 | 🔥🔥🔥🔥🔥<br>每日必有模型上下线/参数变更适配，已成常态化运维负担 |
| **Token 预算与缓存计费精确化** | #8061, #8752, #9210, #9457, #8463 | 🔥🔥🔥🔥<br>跨 Provider（Bedrock/OpenAI/Anthropic/Gateway）计费语义不一致，导致成本失控与缓存策略失效 |
| **TUI 全屏模式渲染/交互重构** | #9052, #9257, #9332, #9441, #9438, #9456 | 🔥🔥🔥🔥<br>光标标记泄漏、滚动性能、覆盖层合成、键盘协议兼容并发爆发，暗示全屏模式架构需系统性重写 |
| **扩展机制健壮性与确定性** | #8810, #9361, #9458, #9434, #9454 | 🔥🔥🔥<br>Provider 注册竞态、Shell 解析非确定性、Git 扩展短 SHA 更新失败、System Prompt 扩展点缺失 |
| **工具执行安全性与资源控制** | #9276, #9431, #9430 | 🔥🔥🔥<br>OOM 防护、默认超时、死代码清理，无头 SDK 场景推动工具运行时硬化 |
| **会话/上下文管理智能化** | #8133, #8061, #9459, #5366 | 🔥🔥<br>按模型差异化压缩、恢复时模型状态保真、会话树分支删除 |

---

## 6. 开发者关注点与痛点

| 痛点类别 | 具体表现 | 代表性反馈 |
|----------|----------|------------|
| **跨 Provider 语义不一致导致的“隐形成本”** | Bedrock `usage.input` 定义分裂、Gateway 缓存 TTL 不透传、OpenAI Codex 模型下线无感 | “1h 缓存按 5m 计费”、“Cache miss 误报”、“模型突然 400 无预警” |
| **全屏模式“半成品”体验** | 滚动慢 3 倍、光标泄漏、选择腐败、图像遮挡 Overlay、键盘协议回退 | “想用全屏固定输入框，但滚动不可用”、“拖选光标行直接花屏” |
| **Windows + 扩展 = 非确定性地狱** | `shellPath` 被扩展加载顺序覆盖、Git 扩展短 SHA 更新失败、LAN 权限被 macOS 拦截 | “加不加扩展 shell 路径不一样”、“`pi update --extensions` 直接报错” |
| **长上下文/大文件工具链脆弱** | `grep --context` 读全量导致 OOM、Context budget 未预留输出 Token、Compaction 重试仍溢出 | “Headless SDK 跑着跑着 OOM”、“78% 就被拦截，压缩完还溢出” |
| **会话状态恢复保真度不足** | Resume 时模型选择错误、System Prompt 扩展点缺失、分支管理原始 | “恢复会话模型变了”、“想在 System Prompt 注入上下文没接口”、“分支太多删不掉” |
| **认证/代理集成的“最后一公里”** | 设备码登录无自动打开/复制、Copilt SDK 凭证对不支持、opencode-go 需要会话级 Header | “企业环境每次手动复制码”、“想用 `GITHUB_COPILOT_API_TOKEN`”、“需要 `x-opencode-session`” |

---

## 📌 给维护团队的建议

1. **建立“模型目录自动化巡检”**：每日对接 models.dev / 提供商 Changelog，自动生成落后模

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 (2026-09-11)

## 🚀 今日速览
今日 Qwen Code 发布了 **v0.23.3** 版本，核心改进扩展了对 Kimi、Qwen 和 DeepSeek 等主流推理预设的支持。社区目前正聚焦于**桌面端架构的演进**（从 Electron 迁移至 Tauri）、**MCP（Model Context Protocol）在 Windows 上的兼容性修复**以及 **Agent 运行时的安全性与性能优化**（如内存限制与并发控制）的深度讨论。

---

## 📦 版本发布
- **v0.23.3 (Latest)**
  - **核心增强**: 扩展了对 Kimi、Qwen 和 DeepSeek 推理预设的支持（[11349]）。
  - **SDK 更新**: 发布了 TypeScript SDK v0.1.12，并内置了 CLI 版本 0.23.3。
  - **桌面端**: 发布了 Qwen Code Desktop v0.3.0 预览版，优化了 CI 自动打包流程并修复了桥接权限问题。

---

## 🔥 社区热点 Issues (Top 10)

1. **[#8102] 提议可信 Agent 运行时的确定性工具执行边界**
   - **摘要**: 提议一种增量方向：将语言模型放在信任边界之外，通过运行时确定性地约束、授权、观察和评估模型产生的动作。
   - **重要性**: 构建高可信 AI Agent 的核心安全问题。
2. **[#8182] Daemon 进程内存分配 Bug**
   - **摘要**: 发现 `qwen serve` 为每个 ACP 子进程分配了宿主机内存的 50% 限制，且未根据子进程数量进行分摊，导致内存溢出。
   - **重要性**: 影响多任务并行时的系统稳定性。
3. **[#8596] 弃用 Electron 桌面应用，全面转向 Tauri**
   - **摘要**: 社区提议废弃当前的 `packages/desktop` (Electron)，将基于 Tauri 的 `desktop-shell` 命名为未来的 `desktop`。
   - **重要性**: 项目桌面端路线的重大调整。
4. **[#10118] Roadmap：将 Live 拆分为独立语音控制总入口**
   - **摘要**: 计划让 Live 作为一个独立的语音应用，用户通过快捷键唤起，管理其下所有会话（包括终端和后台 Worker）。
   - **重要性**: 提升多模交互体验的核心愿景。
5. **[#11590] 非 Qwen 模型兼容性 Bug**
   - **摘要**: Qwen Code 在向 DashScope 发送请求时会强制注入 `metadata` 对象，导致非 Qwen 模型（如 GLM 系列）因反序列化失败返回 400 错误。
   - **重要性**: 影响多模型适配用户的使用体验。
6. **[#9693/11597] Windows 下 MCP 连接断开 (-32000)**
   - **摘要**: 在 Windows 10 上，即使未激活 MCP，基于 STDIO 传输的本地 MCP 服务器也会频繁报告连接断开。
   - **重要性**: Windows 平台用户的高频阻塞痛点。
7. **[#11489] VS Code 插件更新后历史记录丢失**
   - **摘要**: 从 0.21.x 升级到 0.23.x 后，侧边栏历史会话消失，尽管数据仍存在于数据库中。
   - **重要性**: 严重的数据可见性回归 Bug。
8. **[#11558] 自动将打开的文件加入上下文问题**
   - **摘要**: 0.23.1 版本后，VS Code 中打开的任何文件都会强制加入上下文，即使用户点击了隐藏。
   - **重要性**: 干扰开发者对上下文的精确控制。
9. **[#11591] Git 状态检查性能瓶颈**
   - **摘要**: 在处理 256 个工作区时，由于未使用可选锁，导致 git status 检查耗时从 20ms 飙升至 1s 左右。
   - **重要性**: 大规模项目管理下的性能优化需求。
10. **[#11514] UI 缺失 "Max" 思考等级选项**
    - **摘要**: UI 仅支持到 "Extra High"，但后端实际上已支持 "Max" 思考等级，请求前端同步。
    - **重要性**: 功能完整性对齐。

---

## 🛠️ 重要 PR 进展 (Top 10)

1. **[#11560] SDK 新增 Peer Endpoint 支持跨会话消息**
   - 允许非 Qwen Code 会话的程序（如语音前端、构建监听器）加入跨会话协议。
2. **[#11540] 修复 Review 机制中的挂载点外状态存储**
   - 将 base-tree 复用证据从沙盒挂载目录移动到宿主机记录中，解决权限访问问题。
3. **[#11501] 修复 .mcp.json 环境变量扩展**
   - CLI 现在在加载 MCP 配置时会解析 `$VAR` 或 `${VAR}`，解决未定义导致空字符串的问题。
4. **[#11457] 增加 Goal 任务的终止机制**
   - 允许 Goal 在达到特定轮数（Turns）或活跃时长（Minutes）后自动停止。
5. **[#11538] 针对 OpenAI 兼容模型适配 API 选择**
   - 允许 OpenAI 类 Provider 使用特定的 `chat.completions` 或 `responses` 接口。
6. **[#11395] 修复 ACP 子进程恢复后的 Caller 模式丢失**
   - 确保子进程销毁并恢复后，Bridge 能够重新应用原始调用者的 Approval 模式。
7. **[#10183] 引入结构化按需检索（Structured On-demand Recall）**
   - 将扁平的内存演进为结构化推拉协议，允许模型获取相关的上下文子树。
8. **[#11086] 将扩展范围扩大至工作区 Runtime**
   - 将全局扩展目录暴露给每个工作区运行时，并同步扩展管理状态。
9. **[#11417] 修复测试中 Fire-and-forget 处理的静默等待**
   - 确保 `runQwenServe` 在配对阶段完成后再返回，避免竞态问题。
10. **[#11572] Web 终端退出时立即释放 PTY 资源**
    - 避免等待 `release()` 调用，在 `handleExit` 时即刻释放系统资源。

---

## 📈 功能需求趋势
- **架构迁移**: 社区正明确加速从 Electron 转向 Tauri 架构，以追求更轻量化和更好的原生体验。
- **MCP 生态完善**: MCP 成为核心焦点，开发者正极度关注 Windows 环境下 `STDIO` 传输的稳定性问题。
- **精细化上下文控制**: 开发者对 AI “自动加入上下文”的行为产生反触，需求更精细的过滤和手动控制（如 Focus 模式）。
- **多模态交互**: 以 Live 语音总入口为核心的规划显示出 Qwen Code 正从简单的代码插件向全能开发助手演进。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报

**日期：** 2026-09-11
**数据来源：** github.com/Hmbown/DeepSeek-TUI

---

## 一、今日速览

今天社区活跃度集中在 **Codewhale v0.9.13 集成分支收尾** 与 **0.9.14 的架构拆解（Crate Decomposition）**。核心维护者 Hmbown 在过去 24 小时内集中处理 6 条合并 PR，并新开/更新了多条与 DeepSeek-flash 默认模型相关的 bug（#6043、#6044、#6046）。同时，第三方预告 DeepSeek 将于 9 月 14 日下线 V4 Pro，引发路由策略讨论。

---

## 二、版本发布

⚠️ **过去 24 小时无新版本发布。** 最近的集成动作集中在尚未合并的 PR #6002（0.9.13 整合分支），预计为 0.9.13 的最后一轮验证窗口。

---

## 三、社区热点 Issues（Top 10）

| # | Issue | 评论 | 重要性 |
|---|-------|------|--------|
| 1 | **[#5316](https://github.com/Hmbown/Codewhale/issues/5316)** EPIC-005: CodeWhale TUI Crate Decomposition（伞形） | 22 | 🔥 战略级：决定 0.9.14 之后的模块化路线，对长期维护性影响最大 |
| 2 | **[#5586](https://github.com/Hmbown/Codewhale/issues/5586)** 分解 mega 文件（lib.rs 18.7k、config.rs 12.3k 等） | 6 | 是 #5316 的子任务，单文件过长导致的协作障碍 |
| 3 | **[#6011](https://github.com/Hmbown/Codewhale/issues/6011)** TUI 用量与工具诊断（Token、缓存命中率、工具 sink、压缩成本） | 4 | 体现社区对可观测性的强烈诉求 |
| 4 | **[#6004](https://github.com/Hmbown/Codewhale/issues/6004)** Hooks 无法观察会话状态（已关闭，CLOSED） | 4 | 此前开发者最迫切的需求之一，已合入解决方案 |
| 5 | **[#5988](https://github.com/Hmbown/Codewhale/issues/5988)** 部分 TUI 测试栈溢出、nextest 隔离掩盖 CI | 3 | 暴露测试基础设施隐患，影响发布质量 |
| 6 | **[#6007](https://github.com/Hmbown/Codewhale/issues/6007)** OpenRouter 原生厂商选择（已关闭，CLOSED） | 3 | 已合入 #6002 集成；社区对多厂商路由精细化需求高 |
| 7 | **[#5950](https://github.com/Hmbown/Codewhale/issues/5950)** 底部 chrome（posture bar + metrics line）应可配置（已关闭） | 3 | 终端用户高频抱怨的 UX 问题，已通过 #5973 解决 |
| 8 | **[#5976](https://github.com/Hmbown/Codewhale/issues/5976)** 部分供应商价格显示 "unknown"，缺少护栏 | 3 | 反映供应商计费元数据覆盖率不足，影响成本可见性 |
| 9 | **[#6045](https://github.com/Hmbown/Codewhale/issues/6045)** 用户输入弹窗：选项裁剪、输入不可见、22 行硬编码上限 | 2 | 终端体验关键路径，最近一天内新建 |
| 10 | **[#6025](https://github.com/Hmbown/Codewhale/issues/6025)** DeepSeek V4 Pro 将于 9/14 12:00 (北京时间) 下线，路由到 V4.1 Flash | 2 | 外部公告，直接影响用户的模型选型与计费预期 |

---

## 四、重要 PR 进展（Top 10）

| # | PR | 状态 | 要点 |
|---|----|------|------|
| 1 | **[#6002](https://github.com/Hmbown/Codewhale/pull/6002)** Integrate Codewhale 0.9.13 contributor fixes | CLOSED ✅ | 合入 0.9.13 全部贡献者修复：分页、精确路由、OpenRouter 厂商选择、输出限制、价格校验 |
| 2 | **[#5973](https://github.com/Hmbown/Codewhale/pull/5973)** feat(tui): 底部 chrome 的 compact / hidden 预设 | CLOSED ✅ | 关闭 #5950：`full / compact / hidden` 三档，`/config` 可热切换 |
| 3 | **[#5982](https://github.com/Hmbown/Codewhale/pull/5982)** feat(tui): model_bound key redaction 确认式 opt-out | CLOSED ✅ | 为开发者场景提供可关闭凭据脱敏的开关 |
| 4 | **[#5946](https://github.com/Hmbown/Codewhale/pull/5946)** feat(fleet): 通过 summary + 已存会话回复暴露 worker 交付物 | CLOSED ✅ | Fleet 文本任务不再收到空 receipt，附带 `visible_final_answer_excerpt` |
| 5 | **[#6012](https://github.com/Hmbown/Codewhale/pull/6012)** fix(session): 自动标题跳过 runtime handoff 信封 | CLOSED ✅ | 标题不再包含 `<codewhale:runtime_event ...>` 内嵌标签 |
| 6 | **[#5859](https://github.com/Hmbown/Codewhale/pull/5859)** copy: 错误/选择器/启动文案更清晰、更短、更温暖 | CLOSED ✅ | 仅 en.json 值更新，键冻结，117/117 本地化与黄金测试通过 |
| 7 | **[#5726](https://github.com/Hmbown/Codewhale/pull/5726)** feat(tui): live provider catalogs + routed usage 检查点 | CLOSED ✅ | 实时目录管道 + 供应商作用域路由身份 + Baseten 协合规 |
| 8 | **[#6027](https://github.com/Hmbown/Codewhale/pull/6027)** chore(deps): web 目录 npm_and_yarn 升级 | OPEN 🟡 | `@vitest/mocker` 4.1.9 → 5.0.0 |
| 9 | **[#6026](https://github.com/Hmbown/Codewhale/pull/6026)** chore(deps): vscode 扩展 js-yaml 4.3.1 → 4.3.2 | OPEN 🟡 | 安全补丁 |
| 10 | **[#5901](https://github.com/Hmbown/Codewhale/pull/5901)**（**关注中**，参考同类） chore: 综合依赖维护 | OPEN 🟡 | 由 dependabot 持续推进的依赖更新分支 |

---

## 五、功能需求趋势

从过去 24 小时的 50 条 Issue 中可提炼出社区最关注的四大方向：

1. **🧱 架构可维护性** —— Crate Decomposition（#5316、#5586）成为评论数最高的议题，反映模块化债得到全社区共识。
2. **📊 可观测性与计费透明度** —— Token 计量（#6011）、定价覆盖率（#5976）、路由健康（#5849）三路并进，"unknown cost" 成为现场最常被吐槽的现象之一。
3. **🛣️ 路由与多供应商控制** —— OpenRouter 厂商选择（#6007，已合）、resumed session 模型刷新（#6016）、DeepSeek V4 Pro 下线后的回退策略（#6025）。
4. **🧭 终端 UX 细节** —— 底部 chrome 可配置（#5950 → #5973）、输入弹窗可用性（#6045）、命令历史 recall（#6006）、`/models` 分页（#6009）、footer 重复计时（#6041）。
5. **🤖 子代理 / Fleet 治理** —— goal gate 验证（#6013）、anti-stall + 只读 shell 语法（#6015）、worker deliverables（#5946 PR）、Fleet vs Agent 双存储概念混乱（#6036）。

---

## 六、开发者关注点（高频痛点）

| 痛点 | 代表性 Issue |
|------|-------------|
| **MCP 服务鉴权死锁** —— 中途登录的服务无法附着到现有会话 | [#6030](https://github.com/Hmbown/Codewhale/issues/6030) |
| **插件安装提示无法永久关闭** —— "dismissed" 仅内存生效 | [#6031](https://github.com/Hmbown/Codewhale/issues/6031) |
| **ext / MCP 重授权时整个 TUI 冻结** | [#5974](https://github.com/Hmbown/Codewhale/issues/5974) |
| **DeepSeek-flash 默认模型未注册 / 默认模型类型仍是 deepseek-v4** | [#6043](https://github.com/Hmbown/Codewhale/issues/6043)、[#6044](https://github.com/Hmbown/Codewhale/issues/6044) |
| **子代理 followup 丢失 profile 的供应商 pin** | [#6046](https://github.com/Hmbown/Codewhale/issues/6046) |
| **`/models` 缺少分页**，远端目录只返回首页 | [#6009](https://github.com/Hmbown/Codewhale/issues/6009) |
| **`agent --continue` 在多会话 workspace 下歧义** | [#6001](https://github.com/Hmbown/Codewhale/issues/6001) |
| **用户输入/审批硬编码 300s 超时不可配** | [#6003](https://github.com/Hmbown/Codewhale/issues/6003) |
| **`Fleet` 与 `Agent` 双存储 + 角色/模型 pin 混入**，架构混乱 | [#6036](https://github.com/Hmbown/Codewhale/issues/6036) |
| **Markdown `_` 强调无前导守卫**，数学下标记为斜体 | [#6042](https://github.com/Hmbown/Codewhale/issues/6042) |

> **社区高频呼吁汇总**：① 错误恢复/会话可恢复性 ② 终端真实场景的可用性细节（模态、分页、热键） ③ 多供应商路由可解释与可干预 ④ 子代理/Fleet 概念的去重与权限边界。

---

*本日报由社区数据自动汇总，关键决策以上游 Linear Core 计划为准： [codewhale-core-execution-plan](https://linear.app/shannon-labs/document/codewhale-core-execution-plan-a11e2e1c601d)。*

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

# ComfyUI 社区动态日报 — 2026-09-11

> 数据来源：github.com/comfyanonymous/ComfyUI  
> 统计周期：过去 24 小时（截至 2026-09-10）

---

## 1. 今日速览

过去 24 小时 ComfyUI 官方仓库**无新 Release**，但围绕 **v0.35.x / master** 的讨论非常活跃。  
社区反馈集中在 **MiniMax H3 + DynamicVRAM/Comfy Compiler 的稳定性问题**、**API 节点安全与凭证刷新**、**HTTP 协议合规性**以及**核心工作流/节点框架能力**（Generic Loops、Marigold v2、Flex Attention）等方向。PR 侧推进了多项关键修复与新能力落地。

---

## 2. 版本发布

- **今日无新 GitHub Release。**  
- 值得关注的是，PR [#16235](https://github.com/Comfy-Org/ComfyUI/pull/16235) 已关闭，它完成了 **v0.35.1 backport**，将 master 上的 OpenRouter、Gemini、Tripo 等更新合并到 `v0.35.0` 分支。

---

## 3. 社区热点 Issues（精选 10 条）

| # | 标题 | 状态/互动 | 为什么重要 & 社区反应 |
|---|------|-----------|----------------------|
| 1 | **[Potential Bug] Possible VRAM regression when running a MiniMax H3 workflow on the latest development version**<br>[#16150](https://github.com/Comfy-Org/ComfyUI/issues/16150) | OPEN · 12 评论 · 👍 3 | MiniMax H3 在最新 dev 版出现 VRAM 回归，开发者正尝试定位是内核、attention 还是 compiler 引入的。讨论热烈，属于高优先级性能问题。 |
| 2 | **[Bug] "Content-Disposition" Header set in view_image function not matching RFC2183 rules**<br>[#8914](https://github.com/Comfy-Org/ComfyUI/issues/8914) | OPEN · 9 评论 | `/view` 返回的 `Content-Disposition` 缺少 `inline`/`attachment` 前缀，严格 MIME 解析器会拒绝。影响第三方工具/浏览器集成，已有 PR 对应对应修复。 |
| 3 | **[ROCm/Windows][RX 9070 XT] Severe GPU/UI stalling during VAE Decode with DynamicVRAM enabled**<br>[#16062](https://github.com/Comfy-Org/ComfyUI/issues/16062) | OPEN · 8 评论 | AMD RDNA4 / ROCm Windows 平台在 VAE Decode 阶段出现 GPU/UI 卡死，直指 DynamicVRAM 与 AMD 驱动的交互，A 卡用户关注度高。 |
| 4 | **[Bug] Memory management changes and leaks after v0.30.2->v0.33.1 update**<br>[#15759](https://github.com/Comfy-Org/ComfyUI/issues/15759) | OPEN · 6 评论 · 👍 4 | 用户报告从 v0.30.2 升级到 v0.33.x 后同工作流内存占用和时间都明显变差，反映内存管理策略改动对实际工作流的长期影响。 |
| 5 | **[Potential Bug] MiniMaxH3: DynamicVRAM causes infinite hang at "Model Initializing..." on RTX 4070 12GB**<br>[#15628](https://github.com/Comfy-Org/ComfyUI/issues/15628) | OPEN · 7 评论 | DynamicVRAM 在 12GB 卡上导致 MiniMaxH3 无限卡住的典型案例，并暴露底层 CUDA illegal memory access，是中端显卡用户痛点。 |
| 6 | **[Potential Bug] Krea 2 with DoKR (LoKR + DoRA) has [WARNING] lora key not loaded**<br>[#16234](https://github.com/Comfy-Org/ComfyUI/issues/16234) | OPEN · 3 评论 | 新 LoRA/DoKR 格式加载时报 key 未加载，影响 Krea 2 等新型 adapter 工作流，模型兼容性类问题。 |
| 7 | **[Potential Bug] BlockSparseAttention node: execute() missing 1 required positional argument: 'selection'**<br>[#16236](https://github.com/Comfy-Org/ComfyUI/issues/16236) | OPEN · 1 评论 | 原生 Block Sparse Attention 节点运行时缺少 `selection` 参数，属于新节点 API/签名缺陷，影响 H3 相关稀疏 attention 工作流。 |
| 8 | **[Potential Bug] Copy-Pasting Minimax H3 nodes with connections does not work properly**<br>[#16226](https://github.com/Comfy-Org/ComfyUI/issues/16226) | OPEN · 1 评论 · 👍 2 | MiniMax H3 节点复制粘贴时连接丢失/错位，直接影响工作流编辑体验，获得 2 个赞，说明用户共鸣强。 |
| 9 | **[Bug] Comfy Compiler CUDA graphs silently corrupt MiniMax-Music-3 AR text-encoder output on RDNA4 (gfx1201)**<br>[#16222](https://github.com/Comfy-Org/ComfyUI/issues/16222) | OPEN · 0 评论 | Comfy Compiler CUDA graphs 在 RDNA4 上静默污染 MiniMax-Music-3 文本编码输出，属于难以排查的静默错误，跨硬件兼容性问题。 |
| 10 | **[Potential Bug] comfy-aimdo: hostbuf_read_file_slice 'device copy failed' when two ComfyUI instances stage large models on two GPUs concurrently**<br>[#16223](https://github.com/Comfy-Org/ComfyUI/issues/16223) | OPEN · 0 评论 | 多 GPU 多实例并发加载大模型时 aimdo 缓存出现 device copy failed，影响多卡部署/生产环境稳定性。 |

---

## 4. 重要 PR 进展（精选 10 条）

| # | 标题 | 状态 | 功能 / 修复内容 |
|---|------|------|----------------|
| 1 | **[OPEN] Secure refreshed API node credentials**<br>[#16242](https://github.com/Comfy-Org/ComfyUI/pull/16242) | OPEN | 为 API 节点引入“按 WebSocket 客户端隔离、按 generation 追踪”的内存凭证注册表；支持刷新 token 的延迟绑定与受控重试，强化 API 节点安全性。 |
| 2 | **[OPEN] Make /view Content-Disposition headers RFC 2183/6266 compliant**<br>[#16238](https://github.com/Comfy-Org/ComfyUI/pull/16238) | OPEN | 给 `/view` 响应补齐 `inline`/`attachment` 类型，解决 issue #8914 中严格 MIME 解析器报错的问题。 |
| 3 | **[CLOSED] Fix h3 fun controlnet with comfy compiler**<br>[#16240](https://github.com/Comfy-Org/ComfyUI/pull/16240) | CLOSED | 修复 MiniMax H3 Fun ControlNet 在 Comfy Compiler 下的执行问题，与当日多个 H3/Compiler bug 报告直接相关。 |
| 4 | **[OPEN] Add generic attention key-measure contract foundation**<br>[#16239](https://github.com/Comfy-Org/ComfyUI/pull/16239) | OPEN | 为 H3 Flow-Aligned Regenerate 设计提供 attention_measure_v1 规范化基础，当前非激活状态，但为后续注意力尺度控制铺路。 |
| 5 | **[OPEN] Implement Generic Loops (Candidate III)**<br>[#16227](https://github.com/Comfy-Org/ComfyUI/pull/16227) | OPEN | 实现通用工作流循环（Generic Loops），将 Rebatch 拆分为独立 PR，核心循环能力进入第三轮迭代，对工作流自动化意义重大。 |
| 6 | **[OPEN] feat: Marigold v2 support (CORE-431)**<br>[#16232](https://github.com/Comfy-Org/ComfyUI/pull/16232) | OPEN | 新增 Marigold v2 深度估计模型支持，WIP 中，对应模型已上架 Comfy-Org/marigold-v2-0。 |
| 7 | **[OPEN] Fix small_input attention fallback OOMing without pytorch attention**<br>[#16228](https://github.com/Comfy-Org/ComfyUI/pull/16228) | OPEN | 修复 `small_input=True` 且未启用 SDPA 时 `attention_basic` 全量 materialize score matrix 导致的 OOM，降低非标准配置下的内存风险。 |
| 8 | **[OPEN] Add Flex Attention and expose torch.compile modes**<br>[#15870](https://github.com/Comfy-Org/ComfyUI/pull/15870) | OPEN | 引入可选 PyTorch Flex Attention 后端，并在 `TorchCompileModel` 暴露 compile mode，可配合 `max-autotune-no-cudagraphs` 等模式提升性能。 |
| 9 | **[OPEN] [Core] Add governance enforcement for custom nodes**<br>[#16167](https://github.com/Comfy-Org/ComfyUI/pull/16167) | OPEN | 为受治理的 ComfyUI 构建增加自定义节点签名策略执行能力；默认关闭，不影响普通上游安装，面向企业/合规场景。 |
| 10 | **[OPEN] Fix V3 node subclasses inheriting the parent's cached schema values**<br>[#16205](https://github.com/Comfy-Org/ComfyUI/pull/16205) | OPEN | 修复 V3 节点子类继承父类已缓存 schema 哨兵值的问题，解决 `OUTPUT_IS_LIST` 等注册异常，提升节点系统健壮性。 |

---

## 5. 功能需求趋势

从当日 Issues / PR 可提炼出社区最关注的几个方向：

1. **视频/多模态大模型支持**  
   MiniMax H3 相关 issue/PR 占比最高：VRAM、ControlNet、节点复制、attention、CUDA graphs 等，说明视频生成模型接入是近期核心战场。

2. **内存与性能稳定性**  
   DynamicVRAM、Comfy Compiler、attention fallback、ROCm/A 卡适配、多 GPU 并发等反复出现，显存管理仍是最大痛点。

3. **API 节点生态与商业集成**  
   API 节点凭证刷新、幂等性、partner proxy、Tripo/Gemini/OpenRouter 等更新活跃，显示 ComfyUI 正在强化云端/商业节点能力。

4. **合规与标准化**  
   RFC 2183/6266 兼容、自定义节点治理签名，反映项目从“社区工具”向“可交付/可治理平台”演进。

5. **节点与交互体验**  
   Generic Loops、模型加载进度反馈、节点复制粘贴、对齐网格（Snap to Grid）等，说明工作流编辑效率仍是长期诉求。

6. **模型格式兼容性**  
   LoKR/DoRA/DoKR 等新型 adapter、Marigold v2 等新模型支持需求持续出现。

---

## 6. 开发者关注点

综合开发者反馈，高频痛点与需求如下：

- **DynamicVRAM / Comfy Compiler 组合不稳定**：MiniMax H3 工作流在启用 DynamicVRAM 或 Compiler 时易出现 OOM、hang、CUDA illegal memory access、静默输出错误，开发者急需明确的禁用/降级方案与根因修复。
- **A 卡 / ROCm 支持仍落后于 N 卡**：RX 9070 XT、RDNA4 等新硬件在 VAE Decode、CUDA graphs 等环节问题集中，AMD 安装文档（README）也在同日被更新/讨论。
- **LoRA/Adapter 加载兼容性**：新格式（DoKR 等）key 未加载的警告频发，影响模型生态迁移。
- **多卡并发与生产部署**：aimdo 缓存、hostbuf 设备拷贝失败等问题表明多实例、多 GPU 场景下并发加载模型还不够稳。
- **API 节点安全与可观测性**：凭证生命周期、token 刷新、幂等重试、partner proxy 的 `Idempotency-Key` 等正在被补齐，但开发者希望早日统一稳定。
- **节点框架与编辑体验**：V3 节点 schema 继承、Generic Loops、复制粘贴、加载模型进度反馈等，说明核心框架体验仍是社区重点。
- **协议合规细节**：`Content-Disposition` 等小问题在实际集成中会变成“硬错误”，反映 ComfyUI 正在被更多上游系统调用，协议严谨性要求提高。

---

*以上日报基于公开的 GitHub Issues / PR 数据整理，未包含本地环境或内部未公开信息。*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama 社区动态日报
**日期：2026-09-11**

---

## 一、今日速览

过去 24 小时 Ollama 仓库活跃度依然集中在 **Gemma4 工具调用解析**与**长上下文（1M）支持**两大方向——多个针对性 PR 合并并闭环了相关 Issue；同时，社区对 **DeepSeek-V4.1-Flash 云端接入**的需求呼声最高（👍 27，成为今日最热议题）。此外，仍处于开放状态的 CVE 漏洞工单（#16033，1 个 CRITICAL + 11 个 HIGH）需要持续关注。

---

## 二、版本发布

- 无新版本。过去 24 小时内未发现新的 Release。

---

## 三、社区热点 Issues

| # | 标题 | 类型 | 关注度 |
|---|---|---|---|
| [#18360](https://github.com/ollama/ollama/issues/18360) | [cloud] Request: Add cloud support for DeepSeek-V4.1-Flash | 新模型 | 👍 27（今日最高） |
| [#16033](https://github.com/ollama/ollama/issues/16033) | CRITICAL/HIGH CVE vulnerabilities in Ollama Go binary | 安全 | 16 条评论，长期未关闭 |
| [#18368](https://github.com/ollama/ollama/issues/18368) | macOS GUI 在 6k tokens 后静默失败 | macOS 缺陷 | 4 条评论，影响 0.34.0 |
| [#18370](https://github.com/ollama/ollama/issues/18370) | Vulkan ggml 后端在 AMD UMA APU 上 wedge 死锁 | 性能/硬件 | 0.24.0 用户 |
| [#16686](https://github.com/ollama/ollama/issues/16686) | qwen3-coder parser 漏掉无 `<tool_call>` 标签的调用 | 工具调用 | 已知解析缺陷 |
| [#18344](https://github.com/ollama/ollama/issues/18344) | `ollama serve` 每个成功请求泄漏 1 个 FD | 资源泄漏 | 长期运行必触发 |
| [#18352](https://github.com/ollama/ollama/issues/18352) | 上下文窗口被限制在 256K，无法调到 1M | UI/功能 | 设值滑块缺失 |
| [#18252](https://github.com/ollama/ollama/issues/18252) | qwen2.5-coder:3b 低比特量化产物功能性完全损坏 | 仓库质量 | 0/15 通过率 |
| [#18354](https://github.com/ollama/ollama/issues/18354) | gemma4 字符串占位符冲突静默丢失有效工具调用 | 解析器 | 已被 #18366 修复 |
| [#17223](https://github.com/ollama/ollama/issues/17223) | Ollama Cloud 缺乏 token 用量与配额追踪 | Dashboard | 长期功能诉求 |

**为何重要：**
- #18360 / #18178 的连续提出反映出用户对 **DeepSeek 系列**尤其是 Flash 变体（轻量、推理增强）的强需求，官方仓库一旦上架将形成显著流量。
- #16033 是少数直接影响所有 macOS/Linux 二进制用户的安全议题，1 CRITICAL + 11 HIGH 组合不容忽视。
- #18368、#18352、#18370 多发于 **0.34.x 与 0.24.0 跨版本**，提示社区在升级到 1M 上下文与新版 MLX/GGUF 之后出现兼容或性能回退。
- #18344 的 FD 泄漏问题在生产环境极易把 Ollama 进程拖死，需要运维关注。

---

## 四、重要 PR 进展

| # | 标题 | 状态 | 要点 |
|---|---|---|---|
| [#18372](https://github.com/ollama/ollama/pull/18372) | app: refresh Apps layout & command copy feedback | OPEN | 重构 macOS/Windows 应用页，一键复制启动命令并做视觉反馈 |
| [#18371](https://github.com/ollama/ollama/pull/18371) | docs: add TealKit agent integration | OPEN | 新增开源 AI Agent（桌面/移动/CLI）+ MCP 集成示例 |
| [#18374](https://github.com/ollama/ollama/pull/18374) | llm: raise token repeat limit to 100 & return error | OPEN | 提高 OCR 等场景下的重复 token 容错；不再静默截断 |
| [#18367](https://github.com/ollama/ollama/pull/18367) | template: avoid mutating caller messages when collating | OPEN | 修复 Template.Execute 二次渲染结果不一致的潜在缺陷 |
| [#18365](https://github.com/ollama/ollama/pull/18365) | proxy: let Claude Desktop use full 1M context | OPEN | 解决 Claude Desktop 锁死 200k 问题，借助 supports_1m/max_input_tokens 自动放开 |
| [#18364](https://github.com/ollama/ollama/pull/18364) | app: allow 1M context in settings | OPEN | 在设置滑块中新增 512k / 1m 选项，闭环 #18352 |
| [#18363](https://github.com/ollama/ollama/pull/18363) | parsers: preserve empty FunctionGemma arrays | OPEN | 修复 `items:[]` 被改写为 `null` 的序列化回退 |
| [#18235](https://github.com/ollama/ollama/pull/18235) | MLX: version bump | OPEN | 跟随 MLX 上游升级 Apple Silicon 推理栈 |
| [#18235 / #18345 / #18353 / #18327](https://github.com/ollama/ollama) | 一组 MLX/prefix-cache 稳定性 PR | OPEN | 统一以系统可用内存判断加载、执行基于作用域的 array 生命周期、主动回收 active 会话前缀缓存 |
| [#17144](https://github.com/ollama/ollama/pull/17144) | server: allow parallel for qwen35/qwen35moe | OPEN | 上游 llama.cpp crash 已修复，去掉 numParallel=1 限制 |
| [#17095](https://github.com/ollama/ollama/pull/17095) | go.mod: bump x/image & x/crypto | OPEN | 缓解 3 个已公开 golang.org/x 系列 CVE |
| [#18366](https://github.com/ollama/ollama/pull/18366) | parsers: fix gemma4 string placeholder collision | CLOSED | 修复 #18354，已合入 |
| [#18351](https://github.com/ollama/ollama/pull/18351) | server: propagate cloud stream failures | CLOSED | 修复 #18193，将非客户端流错误通过 ErrAbortHandler 透传 |
| [#18300](https://github.com/ollama/ollama/pull/18300) | server: handle thinking in native generate templates | CLOSED | 修复 #18221，把推理内容与可见输出分离 |
| [#18299](https://github.com/ollama/ollama/pull/18299) | parsers: parse Gemma 4 BEGIN_ARG tool calls | CLOSED | 兼容 Gemma 4 的 `call:<name>:` + 位置参数格式 |
| [#18317](https://github.com/ollama/ollama/pull/18317) | llama.cpp: version bump b10864 | CLOSED | 跟进上游 b10760 → b10864 的修复 |
| [#17858](https://github.com/ollama/ollama/pull/17858) | server: extract GGUF metadata & unify capabilities | CLOSED | 把 capabilities 拉到统一缓存，修正 #16969 等端点不一致问题 |

---

## 五、功能需求趋势

基于过去 24 小时的 Issues 与 PR 摘要，提炼出的高频方向：

1. **更长上下文（1M+）**——#18352 的限制 + #18364/#18365 的配套补齐，构成「需求-修复-应用层适配」完整链路，体现 1M 上下文从「少数模型专属」走向「通用设置」的趋势。
2. **Cloud 体验补全**——#17223 的用量看板、#18360/#18178 的新模型上架、#18193 的 cloud 流错误处理，集中在 ollama.com 商业化产品的可用性短板。
3. **新模型/解析器适配**——Gemma4、Qwen3-coder、FunctionGemma、Gemma3n、qwen2.5vl、qwen2.5-coder 等多个模型的工具调用或多模态解析路径都在迭代；社区对「新模型即用、稳定 tool call」诉求强烈。
4. **Apple Silicon / MLX 强化**——MLX 升级、内存调度、前缀缓存、array 生命周期等多个并发 PR 表明 Apple Silicon 路径正从「能跑」走向「稳定高效」。
5. **上游依赖治理**——go.mod 升级打 CVE、llama.cpp 版本 bump、MLX 版本 bump，说明维护者正系统性补齐供应链安全。
6. **Agent / IDE / CLI 集成**——TealKit、Claude Desktop、Codex App、ChatGPT Connect 的出现，说明 Ollama 正成为本地 Agent 后端的「事实标准」。

---

## 六、开发者关注点与高频痛点

| 关注点 | 体现议题 / PR | 痛点 |
|---|---|---|
| **静默失败、缺乏错误反馈** | #18368、#18375、#18359 | GUI 与 Proxy 出现 HTTP 200/EOF 但不带 done 或错误码，调试困难 |
| **解析器鲁棒性不足** | #16686、#18354、#18357、#18369 | 模型未严格遵守模板时，工具调用容易退化为纯文本；模型偏差触发解析栈错误 |
| **长运行 / 资源泄漏** | #18344、#18372 | FD 累积、缓存不释放等直到必须重启 |
| **Cloud 与本地不一致** | #16969、#18193、#18351 | Cloud 模型的能力声明、流式行为与本地存在差异，影响 Claude Code 等上层客户端 |
| **社区版量化产物质量** | #18252 | 同一模型不同量化表现差异巨大，0% 通过率警示需要统一校验 |
| **依赖 CVE** | #16033、#17095 | 用户希望官方二进制本身减少漏洞暴露，依赖更新需要更积极 |
| **UI 控件与模型能力脱节** | #18352 | 模型支持 1M 但设置只允许 256K，造成「能跑却用不到」 |
| **硬件适配边界** | #18370（AMD UMA APU + Vulkan）、#18373（性能回退） | Vulkan、AMD APU 等非主流路径存在边缘问题 |

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

# llama.cpp 社区动态日报 (2026-09-11)

## 🚀 今日速览
今日 `llama.cpp` 社区聚焦于 **Vulkan 性能深度优化**、**CUDA 架构兼容性修复**以及**预测性推理（Speculative Decoding）的 Bug 修复**。开发者们针对 Qwen 模型在 Vulkan 上的小矩阵运算进行了专项加速，同时对多个新架构 GPU（如 DGX Spark/SM121）在持续负载下的显存崩溃问题进行了紧急跟进。

---

## 📦 版本发布 (过去24 小时)
- **b10900**: 引入 Vulkan优化，通过 `add_alloc_dep` 启用 prefill 阶段的 topk_moe 融合。
- **b10899**: 针对 Qwen 模型优化了 Vulkan 小矩阵矩阵运算（通过交换 A/B 矩阵提升 m=1 性能）。
- **b10897**: 更新了 Windows ARM64 的 CUDA 13.4.1 GA 发行支持。
- **b10896**: 修复了视觉模型在使用 DFlash 时 mtmd chunk 解码失败的问题。
- **b10894**: 清理了旧模型代码中无效的 switch 分支死代码。
- **b10891**: 针对 PowerVR GPU 增加了 dmmv 的共享内存归约回退机制（解决编译器兼容性）。

---

## 🔥 社区热点 Issues (Top 10)
1. **[#25618] 预测性解码在量化目标上的不一致**：在量化模型（如 Q4_K_M）上，draft 模型的 greedy 输出结果与原生推理不一致，仅在 bf16 下表现正常。[查看 Issue](https://github.com/ggml-org/llama.cpp/issues/25618)
2. **[#20697] 请求支持基于磁盘的上下文检查点卸载 (--cache-disk)**：高关注需求，旨在通过将缓存移动到磁盘来缓解内存压力。[查看 Issue](https://github.com/ggml-org/llama.cpp/issues/20697)
3. **[#26425] MTP 导致状态残留引发非确定性输出**：Qwen3.8-27B 在开启 MTP 后，多个请求间的状态污染导致模型质量下降。[查看 Issue](https://github.com/ggml-org/llama.cpp/issues/26425)
4. **[#26609] CUDA 非法内存访问 (Flash Attention 路径)**：在 Qwen3.6-35B MoE 开启部分专家卸载时，第二个请求会导致服务器崩溃。[查看 Issue](https://github.com/ggml-org/llama.cpp/issues/26609)
5. **[#27122] MTP 在 split-tensor 模式下触发 CUDA Lock**：Qwen3.8-27B 在特定切分配置下可复现的锁问题。[查看 Issue](https://github.com/ggml-org/llama.cpp/issues/27122)
6. **[#28633] CUDA 4-bit KV 静默回退到 CPU**：严重性能 Bug，使用 4-bit KV 时 prefill 阶段速度慢 30 倍且无错误提示。[查看 Issue](https://github.com/ggml-org/llama.cpp/issues/28633)
7. **[#28679] <think> 标签识别错误**：模型未能识别 `<think>` 特殊 Token，而是将其视为普通字符串。[查看 Issue](https://github.com/ggml-org/llama.cpp/issues/28679)
8. **[#27780] DGX Spark (SM121) 持续负载下的崩溃**：Qwen3.8-Flash 在新架构 GPU 上长时间运行会频繁触发 `ggml_abort`。[查看 Issue](https://github.com/ggml-org/llama.cpp/issues/27780)
9. **[#28648] Vulkan 在 Intel Arc 140V 上输出乱码**：在特定显卡上，不同的 batch 设置会导致生成结果完全异常。[查看 Issue](https://github.com/ggml-org/llama.cpp/issues/28648)
10. **[#25510] Tool Call 参数错误导致 500 错误**：当多轮对话中助手返回截断的 JSON 参数时，llama-server 无法优雅处理。[查看 Issue](https://github.com/ggml-org/llama.cpp/issues/25510)

---

## 🛠 重要 PR 进展 (Top 10)
1. **[#28715] 修复图像后的预测性推理**：确保在视觉输入后正确传递实际位置而非 Token 数给 drafter。[查看 PR](https://github.com/ggml-org/llama.cpp/pr/28715)
2. **[#28707] 处理 --lora-init-without-apply 的空列表**：确保当传入空 LoRA 列表时，服务器正确禁用适配器。[查看 PR](https://github.com/ggml-org/llama.cpp/pr/28707)
3. **[#28682] 为 Ling 3.0 (Bailing) 添加专用解析器**：通过在 Prompt 中预填充 `<think>` 块，解决模型不生成思考过程的问题。[查看 PR](https://github.com/ggml-org/llama.cpp/pr/28682)
4. **[#28714] CUDA rdna35 增加 batched MMA 支持**：为 AMD 新架构提供批处理矩阵乘法加速。[查看 PR](https://github.com/ggml-org/llama.cpp/pr/28714)
5. **[#28362] Windows ARM64 支持 MSVC 编译**：允许开发者在 WoA 设备上直接使用 cl.exe 构建，无需强制安装 Clang。[查看 PR](https://github.com/ggml-org/llama.cpp/pr/28362)
6. **[#27851] CPU K-Quants 分块矩阵运算 (Tiled mul_mat)**：通过 VNNI 优化，预计将 CPU 推理速度提升 3-7 倍。[查看 PR](https://github.com/ggml-org/llama.cpp/pr/27851)
7. **[#27401] UI 添加对话压缩功能**：支持对历史对话进行摘要并从摘要继续，以释放上下文空间。[查看 PR](https://github.com/ggml-org/llama.cpp/pr/27401)
8. **[#26501] Hexagon 后端多 NPU 支持与全异步化**：对该后端进行大规模重构，支持异步计算、拷贝和跨设备同步。[查看 PR](https://github.com/ggml-org/llama.cpp/pr/26501)
9. **[#28669] 清理旧模型死代码分支**：移除重构后已不再触发的逻辑判断。[查看 PR](https://github.com/ggml-org/llama.cpp/pr/28669)
10. **[#28717] CUDA 为 Nemotron 3 Puzzle 支持 ssm_scan (state size 96)**：解决该算子回退到 CPU 导致的严重性能损失。[查看 PR](https://github.com/ggml-org/llama.cpp/pr/28717)

---

## 📈 功能需求趋势
- **长上下文管理**：社区对“磁盘缓存卸载（--cache-disk）”和“对话压缩功能”有极高需求，反映出用户希望在有限内存下运行超长文本。
- **硬件架构深度适配**：针对新架构（如 SM121/DGX Spark，以及 Intel Arc、PowerVR）的稳定性和性能调优是目前的开发重心。
- **推理算法一致性**：预测性解码（Speculative Decoding）在量化模型上的一致性问题被反复讨论，是当前高性能推理中亟待解决的痛点。

## 💡 开发者关注点
- **静默回退问题**：开发者对 CUDA 4-bit KV 静默回退到 CPU 的行为非常敏感，建议增加更明确的警告机制。
- **构建链兼容性**：随着 Windows ARM64 普及，开发者更倾向于使用原生 MSVC 而非强制 Clang。

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*