# AI CLI 工具社区动态日报 2026-09-23

> 生成时间: 2026-09-22 22:15 UTC | 覆盖工具: 12 个

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



以下是今日（2026-09-23）AI CLI 工具领域的**重要更新摘要**：

1. **Claude Code v2.1.280 发布**：Claude Opus 5.5 成为默认 Opus 模型，配备 1M 上下文窗口，并新增了 fullscreen 鼠标支持（如滚轮滚动技能列表）。  
   🔗 https://github.com/anthropics/claude-code/releases/tag/v2.1.280

2. **OpenAI Codex v0.156.0 稳定版发布**：推出了全屏 TUI 界面（`/tui`），支持历史记录搜索与鼠标选择，并将语音对话功能设为默认开启。  
   🔗 https://github.com/openai/codex/releases/tag/rust-v0.156.0

3. **GitHub Copilot CLI v1.0.89-0 发布**：新增对 `claude-opus-5.5` 模型的支持，并在连接和重新连接过程中改进了托管 Connector 同意进度的显示。  
   🔗 https://github.com/github/copilot-cli/releases/tag/v1.0.89-0

4. **Kimi Code CLI v1.52.0 发布**：将 Python 版 `kimi-cli` 的包入口重定向至 TypeScript 版 Kimi Code 安装器，引导用户过渡到新架构。  
   🔗 https://github.com/MoonshotAI/kimi-cli/releases/tag/1.52.0

5. **OpenCode v1.18.32 发布**：修复了 Bedrock 图片附件仅对部分模型生效的问题，以及 Together AI 流式用量报告的错误。  
   🔗 https://github.com/anomalyco/opencode/releases/tag/v1.18.32

6. **Pi v0.87.1 发布**：新增对 Claude Opus 5.5、GPT-6 Sol 和 GPT-6 Luna 等前沿模型的支持，并将 Grok 4.7 设为默认模型。  
   🔗 https://github.com/badlogic/pi-mono/releases/tag/v0.87.1

7. **llama.cpp b11115 发布**：新增了 OpenCL 二进制内核 `kernel_gemm_noshuffle_q4_k_q8_1_dp4a_ila_a8_bin`，以优化 A8 Q4_K 非 MoE GEMM 的计算性能。  
   🔗 https://github.com/ggerganov/llama.cpp/releases/tag/b11115

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills 社区热点报告
**数据来源**: anthropics/skills 官方仓库 | **截止日期**: 2026-09-23

> ⚠️ 数据说明：PR 列表按评论数排序，但单条 PR 的评论数字段未暴露（显示 undefined），下文排名以仓库排序为准；Issues 评论数完整可见。

---

## 一、热门 Skills 排行（按社区关注度排序）

### 1. `skill-creator` 触发评估修复 — PR #1298
- **作者**: MartinCajiao | **状态**: OPEN | **更新**: 2026-09-16
- **功能**: 修复 `skill-creator` 的触发评估（trigger eval）误报问题——多 worker 命令竞争、Windows 上 `select()` 管道失败、无关工具中断扫描，以及运行时失败被误判为"非触发"。
- **社区热点**: 直击 Skill 开发核心痛点——如果触发评估本身不可靠，整个 skill-creator 的自动优化闭环就是无效的。与 Issue #556（`claude -p` 触发率 0%）和 PR #1769（recall 恒为 0%）形成呼应。
- **链接**: https://github.com/anthropics/skills/pull/1298

### 2. `proofcore-contract-auditor` — Web3 智能合约审计 — PR #1771
- **作者**: ProofCore-Protocol | **状态**: OPEN | **更新**: 2026-09-16
- **功能**: 面向 Web3 开发者的 Skill，对 Solidity/Rust 智能合约做自动静态分析，并将加密审计证明锚定到 TON 公链（ProofCore 零存储 Merkle 协议）。
- **社区热点**: 首个将"区块链存证"与"AI 审计"结合的 Skill，代表 Skills 生态向 Web3/DeFi 安全领域的延伸。
- **链接**: https://github.com/anthropics/skills/pull/1771

### 3. `mcp-builder` MCP ≥2 兼容修复 — PR #1742
- **作者**: Kuldeeep18 | **状态**: OPEN | **更新**: 2026-09-19
- **功能**: 适配 `mcp>=2.0.0` 中 `streamablehttp_client` → `streamable_http_client` 的重命名，以及通过 `create_mcp_http_client` 配置自定义 HTTP headers。
- **社区热点**: MCP 生态快速迭代带来的兼容性痛点。与 Issue #1390（`evaluation.py` 对任何真实 MCP 服务器打 0 分）共同反映 MCP Builder Skill 的成熟度问题。
- **链接**: https://github.com/anthropics/skills/pull/1742

### 4. `md2video-audio` — Markdown 转视频 — PR #1703
- **作者**: 70v-Yoyo | **状态**: OPEN | **更新**: 2026-09-15
- **功能**: 零成本将 Markdown 文档经 Marp 转换为演示幻灯片，再编译为带真人级语音旁白的 MP4 视频。
- **社区热点**: "AI 生成内容 → 多媒体交付"链路的典型代表，降低视频制作门槛。
- **链接**: https://github.com/anthropics/skills/pull/1703

### 5. `AWT (AI Watch Tester)` — AI 驱动的 E2E 测试 — PR #822
- **作者**: ksgisang | **状态**: OPEN | **更新**: 2026-09-19
- **功能**: 赋予 Claude 视觉与浏览器控制能力，零代码自动生成端到端测试。
- **社区热点**: 测试自动化是社区高频诉求（见下文趋势分析），此 Skill 提供了"AI 自己测试自己"的闭环思路。
- **链接**: https://github.com/anthropics/skills/pull/822

### 6. `testing-patterns` — 综合测试模式 — PR #723
- **作者**: 4444J99 | **状态**: OPEN | **更新**: 2026-09-21
- **功能**: 覆盖完整测试栈——Testing Trophy 哲学、单元测试 AAA 模式、React 组件测试、反模式规避等。
- **社区热点**: 与 AWT 形成互补——`testing-patterns` 偏方法论，AWT 偏工具执行。
- **链接**: https://github.com/anthropics/skills/pull/723

### 7. `blast-radius` — 批量/破坏性操作前检查清单 — PR #1776
- **作者**: kishormorol | **状态**: OPEN | **更新**: 2026-09-18
- **功能**: 在执行批量或破坏性写操作（归档用户、撤销权限、删除行、群发邮件）前，核对"行查询正确 ≠ 全局操作正确"的差距。
- **社区热点**: 反映社区对 AI Agent "行动安全性"的日益关注——与 Issue #492（信任边界滥用）和 #412（agent-governance）同源。
- **链接**: https://github.com/anthropics/skills/pull/1776

### 8. `pyxel` — 复古游戏开发 — PR #525
- **作者**: kitao | **状态**: OPEN | **更新**: 2026-09-22
- **功能**: 在 Python 中创建、调试和验证复古游戏，支持无头输入驱动运行、直接帧检查和任务特定状态检查。
- **社区热点**: 长周期 PR（创建于 3 月，9 月仍在活跃更新），表明社区对"创意/娱乐"类 Skill 有持续兴趣。
- **链接**: https://github.com/anthropics/skills/pull/525

---

## 二、社区需求趋势（从 Issues 提炼）

| 排名 | Issue | 评论 | 👍 | 核心诉求 |
|------|-------|------|-----|----------|
| 1 | **#492** — 社区 Skill 冒充 `anthropic/` 命名空间 | 43 | 2 | 🔴 **安全与信任**：第三方 Skill 伪装官方，构成信任边界滥用漏洞 |
| 2 | **#228** — 组织内 Skill 共享 | 16 | 8 | 🟡 **协作效率**：需共享库或直连分享，替代手动 .skill 文件传输 |
| 3 | **#556** — `claude -p` 触发率 0% | 12 | 7 | 🟠 **Skill 可靠性**：触发评估机制本身失效，Skill 无法被自动调用 |
| 4 | **#62** — Skill 消失 | 10 | 2 | 🟠 **稳定性**：用户文件丢失/重命名导致 Skill 不可见 |
| 5 | **#1329** — `compact-memory` Skill 提案 | 9 | 0 | 🟢 **Agent 记忆管理**：用符号化紧凑表示替代散文式上下文笔记 |
| 6 | **#189** — 插件重复安装 | 6 | 9 | 🟡 **生态整洁**：`document-skills` 与 `example-skills` 内容相同 |
| 7 | **#1385** — Reasoning Quality Gate Pipeline | 4 | 1 | 🟢 **输出质量控制**：三道质量门（预校准→对抗审查→交付验证） |
| 8 | **#16** — 将 Skills 暴露为 MCP | 4 | 0 | 🟢 **协议化**：Skill → MCP 接口，统一 API 签名 |

**提炼的四大趋势方向**：

1. **安全与信任（最高优先级）** — Issue #492 以 43 条评论断层领跑，社区最焦虑的是"如何区分官方/社区 Skill"。这直接影响 Skills 生态的采用率。
2. **Skill 可靠性与触发机制** — #556、#1298、#1769 构成一条完整线索：触发评估不可靠 → Skill 不被调用 → 优化闭环失效。这是生态根基问题。
3. **Agent 自主能力扩展** — compact-memory（#1329）、agent-governance（#412）、blast-radius（#1776）共同指向：Agent 需要更好的记忆管理、治理模式和安全操作意识。
4. **多模态与交付升级** — md2video-audio、AWT、document-typography、ODT 等 Skill 显示社区不再满足于"文本输出"，向视频、测试、排版等富媒体延伸。

---

## 三、高潜力待合并 Skills（近期可能落地）

以下 PR 评论活跃、主题切合社区刚需，但尚未合并：

| PR | Skill | 为何高潜力 |
|----|-------|-----------|
| **#1776** | `blast-radius` | 呼应 #492 安全焦虑，"破坏性操作前检查"是 Agent 落地生产的关键安全护栏 |
| **#822** | `AWT (AI Watch Tester)` | 零代码 E2E 测试，与 #723 `testing-patterns` 形成工具+方法论组合 |
| **#1771** | `proofcore-contract-auditor` | Web3 审计 + 区块链存证，差异化明显，可能开辟新垂直场景 |
| **#1703** | `md2video-audio` | "Markdown → 视频"需求直观，零成本门槛低，易获用户采用 |
| **#723** | `testing-patterns` | 覆盖面广（单元/组件/哲学），可作为测试类 Skill 的标准参考 |
| **#1298** | `skill-creator` 修复 | 虽是修复而非新 Skill，但直接决定社区能否持续贡献和

---



# Claude Code 社区动态日报 — 2026-09-23

---

## 1. 今日速览

Claude Code v2.1.280 正式发布，**Claude Opus 5.5 成为默认 Opus 模型**，配备 1M 上下文窗口，定价 $4/$20 per Mtok，缓存读取仅 $0.20/Mtok，标志着 Anthropic 在高端模型普及化和成本优化上迈出关键一步。社区层面，Cowork 功能合并引发的 UI 回归问题（#76694）以 32 条评论、27 👍 成为当前最受关注的 Bug，而用量限额流转（#90152）和子Agent晋升会话（#80798）等 Feature Request 反映出用户对协作灵活性和成本控制的强烈诉求。

---

## 2. 版本发布

### v2.1.280 — Claude Opus 5.5 上线，fullscreen 鼠标支持增强

| 项目 | 内容 |
|---|---|
| **版本号** | v2.1.280 |
| **链接** | [anthropics/claude-code](https://github.com/anthropics/claude-code/releases/tag/v2.1.280) |

**核心更新：**

- **Claude Opus 5.5（`claude-opus-5-5`）成为默认 Opus 模型** — 1M context，输入 $4/Mtok、输出 $20/Mtok，缓存读取低至 $0.20/Mtok。相比前代，在长上下文场景的成本效益显著提升。
- **Fullscreen 鼠标支持扩展** — 滚轮可滚动 `/skills` 列表；`/plugin` 中技能的状态选项现在支持点击交互。

> 💡 **分析师点评**：Opus 5.5 的 1M context + 低价缓存读取策略，意在降低大规模上下文窗口的使用门槛，对长文档处理、代码库级分析等场景是直接利好。fullscreen 鼠标支持虽属体验优化，但反映出 Claude Code 在 TUI 交互细节上的持续打磨。

---

## 3. 社区热点 Issues（精选 10 条）

### 🔴 高优先级 Bug

**#76694 — Cowork：新项目丢失"Choose a folder"，被替换为仅上传知识库的菜单**
- 👍 27 | 💬 32 | 状态：OPEN
- 平台：Windows / macOS | 区域：Cowork, Desktop
- [链接](https://github.com/anthropics/claude-code/issues/76694)
- **为何重要**：Chat/Cowork 合并后，新项目的文件夹选择功能被回退为仅支持上传知识库的界面，直接影响工作流。32 条评论、27 个 👍 说明这是当前社区最痛点的 Bug，且涉及核心功能可用性。

**#81879 — Cowork 沙箱周期性创建失败（useradd exit 12 / no space left on device）**
- 👍 0 | 💬 7 | 状态：CLOSED (stale)
- [链接](https://github.com/anthropics/claude-code/issues/81879)
- **为何重要**：一周内 5 次沙箱 provision 失败，涉及磁盘满和用户目录创建错误。虽然已标记 stale，但反映了 Cowork 基础设施在资源调度和错误恢复上的脆弱性。

**#69802 — ExitWorktree (remove) 报告成功但实际孤立 worktree，偶发损坏父仓库 core.bare**
- 👍 1 | 💬 6 | 状态：CLOSED (stale)
- 平台：macOS | 区域：Tools
- [链接](https://github.com/anthropics/claude-code/issues/69802)
- **为何重要**：Git worktree 管理是多 agent 协作的核心基础设施。此 Bug 可能导致工作目录残留、分支泄漏，甚至父仓库配置损坏，属于数据完整性风险。

**#79921 — Claude Code 本地会话冻结，直到另一个会话收到输入（Desktop & VS Code）**
- 👍 0 | 💬 4 | 状态：CLOSED (stale)
- [链接](https://github.com/anthropics/claude-code/issues/79921)
- **为何重要**：多会话场景下的 UI 线程阻塞问题，直接影响并行开发体验。仅在 Desktop 和 VS Code 复现（非 Web），可能涉及渲染层与后端通信的竞态条件。

**#79816 — 无法登录 Claude Code 及 VS Code 扩展**
- 👍 1 | 💬 3 | 状态：CLOSED (stale)
- [链接](https://github.com/anthropics/claude-code/issues/79816)
- **为何重要**：认证失败是完全阻塞性问题，新用户无法上手，老用户无法续用。

### 🟡 Feature Request（值得关注）

**#90152 — 允许个人订阅者 Gift 或 Pool 未使用限额**
- 👍 1 | 💬 3 | 状态：OPEN
- [链接](https://github.com/anthropics/claude-code/issues/90152)
- **为何重要**：团队场景下，部分成员额度富余而部分不足是常态。此功能若实现，可显著提升额度利用效率，也是社区对灵活计费模式的直接呼声。

**#80798 — 将子 Agent 晋升为正式会话，可回收上下文并介入编排中的子 Agent**
- 👍 0 | 💬 3 | 状态：CLOSED (stale)
- [链接](https://github.com/anthropics/claude-code/issues/80798)
- **为何重要**：Agent 编排是 Claude Code 的核心差异化能力。子 Agent ↔ 主会话的双向流动将大幅提升多步骤任务的可控性和调试效率。

**#75632 — Claude Code 云会话中加入浏览器视图 / 浏览器工具**
- 👍 4 | 💬 2 | 状态：CLOSED (stale)
- [链接](https://github.com/anthropics/claude-code/issues/75632)
- **为何重要**：4 个 👍 在 Feature Request 中较为突出。云会话 + 浏览器能力的组合意味着无头环境下的 Web 自动化、信息检索等场景将被打开。

### 🟠 安全与正确性

**#87902 — `--continue` 可能静默恢复另一个活动会话的对话（共享工作目录时）**
- 👍 0 | 💬 1 | 状态：CLOSED (stale)
- [链接](https://github.com/anthropics/claude-code/issues/87902)
- **为何重要**：这是一个**严重的数据隐私/隔离风险**。多用户共享同一仓库目录时，`--continue` 可能串会话，导致看到他人对话历史。即使评论较少，严重性不容忽视。

**#84371 — `CLAUDE_CODE_LOCAL_BINARY` 在 Desktop 1.24012.11 中仍是死代码**
- 👍 2 | 💬 1 | 状态：OPEN
- [链接](https://github.com/anthropics/claude-code/issues/84371)
- **为何重要**：环境变量被读取后丢弃，意味着用户自定义本地二进制路径的预期功能完全失效。虽只有 1 条评论，但 2 个 👍 且 OPEN 状态说明仍有用户在依赖此配置。

---

## 4. 重要 PR 进展

> ⚠️ 过去 24 小时内，Claude Code 仓库仅有 **1 条 PR** 被更新，PR 活跃度较低。

**#95932 — 为 claude.ai 上 GitHub 连接问题添加 Issue 模板**
- 作者：dicksontsai | 状态：CLOSED
- [链接](https://github.com/anthropics/claude-code/pull/95932)
- **内容**：新增 `github-integration` 标签的 Issue 表单，要求提交者提供截图、操作描述和诊断信息。
- **评价**：属于社区治理基础设施的完善，有助于减少无效 Issue，提升维护者效率。但本身不涉及功能代码变更。

> 📌 若将观察窗口扩展到更长时间段，建议关注 Claude Code 的 [Pull Requests 列表](https://github.com/anthropics/claude-code/pulls) 获取更多在途变更。

---

## 5. 功能需求趋势

从近期 Issues 的标签和内容分布来看，社区关注点集中在以下方向：

| 方向 | 代表 Issue | 热度信号 |
|---|---|---|
| **IDE / Desktop 集成** | #76694, #79921, #79995, #88044 | 🔥🔥🔥🔥🔥 |
| **Agent 编排与子 Agent 管理** | #80798, #87441, #87897 | 🔥🔥🔥🔥 |
| **成本 / 额度管理** | #90152 | 🔥🔥🔥 |
| **MCP / 工具生态** | #79983, #87770 | 🔥🔥🔥 |
| **新模型支持** | v2.1.280 (Opus 5.5) | 🔥🔥🔥🔥 |
| **浏览器 / 云会话能力** | #75632 | 🔥🔥 |
| **认证 / 登录体验** | #79816, #82426 | 🔥🔥 |
| **安全 / 隐私隔离** | #87902 | 🔥（严重性高） |

**趋势解读**：
- **Cowork 合并引发的 UI/UX 回归**是当前最集中的不满来源，社区期待稳定的统一工作区体验。
- **Agent 编排**从"能用"向"好用"演进，子 Agent 生命周期管理、上下文回收、命名标识等细粒度控制是下一步核心需求。
- **成本透明化和灵活性**（额度共享、池化）开始从企业级需求演变为个人订阅者的普遍诉求。

---

## 6. 开发者关注点总结

1. **Cowork 功能稳定性是当务之急** — 合并后的 UI 回退（#76694）和沙箱 provision 失败（#81879）构成了当前最高优先级的社区信任危机，建议尽快发布修复版本。

2. **多会话隔离与数据安全** — `--continue` 串会话（#87902）虽被标为 stale，但其严重性提示我们需要审视会话标识和目录绑定的默认行为。

3. **Agent 编排的细粒度控制** — 子 Agent 晋升/降级（#80798）、fork 子 Agent 的完成状态误报（#87897）、Agent 名称显示（#87441）等问题，共同指向一个方向：用户需要更透明、更可控的多 Agent 协作视图。

4. **额度/成本管理的用户期待** — #90152 的提出说明用户已不满足于固定额度，开始期待更灵活的分配和流转机制。

5. **Web/Cloud 能力补齐** — 浏览器工具在云会话中的缺失（#75632）是当前 Claude Code 相对于本地版本的明显能力短板。

6. **配置项有效性验证** — `CLAUDE_CODE_LOCAL_BINARY` 的死代码问题（#84371）提示我们：引入配置项时需配套完整的验证和文档，避免用户反馈"配置了但不生效"的困惑。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>



# OpenAI Codex 社区动态日报 (2026-09-23)

> **数据来源**: [github.com/openai/codex](https://github.com/openai/codex) | **分析师**: AI 开发工具技术分析师

---

### 1. 今日速览

Codex 在今天发布了重要的 **v0.156.0 稳定版更新**，推出了用户期待的全屏 TUI 界面（`/tui`）以及默认开启的语音对话功能，交互体验大幅升级。同时，社区对于 **Windows 客户端的稳定性问题**（如项目消失、沙箱配置卡死）以及 **对话上下文与数据完整性问题**（如上下文压缩破坏记录、回复错历史消息）表达了高度关注。开发团队正积极推进 **GPT-6 Sol/Luna 模型的多平台接入** 及 **沙箱安全与状态恢复机制** 的优化。

---

### 2. 版本发布动态

#### 🚀 Codex CLI v0.156.0 (稳定版)
*   **全屏 TUI 模式 (`/tui`)**: 引入可选的全屏终端 UI，支持历史记录搜索、鼠标选择及右键复制，提升终端交互效率。
*   **语音对话默认开启**: 支持通过 `F8` 键或 `/voice settings` 快速切换和配置语音交互，内置音频处理。
*   **GitHub 链接**: [openai/codex/releases/tag/rust-v0.156.0](https://github.com/openai/codex/releases/tag/rust-v0.156.0)

#### 🧪 Codex CLI v0.157.0-alpha 系列 (alpha.2 - alpha.10)
*   发布了多个 Alpha 测试版本，主要聚焦于底层性能优化、模型接口预备以及已知 Bug 的修复，为后续大版本更新做准备。

---

### 3. 社区热点 Issues（Top 10）

以下是过去 24 小时内评论和互动最活跃的 10 个 Issue，反映了当前社区最迫切的技术诉求与痛点：

| 排序 | Issue 编号 & 标题 | 标签 | 热度 | 核心问题 & 为什么重要 |
| :--- | :--- | :--- | :--- | :--- |
| **1** | **#8648** [Codex replies to earlier messages instead of latest one](https://github.com/openai/codex/issues/8648) | `bug, context, agent` | 88评论, 64👍 | **核心对话逻辑缺陷**：在多轮对话中，Codex 偶尔会回复早期消息而非最新消息，严重影响多步任务的连贯性。 |
| **2** | **#41622** [Add a setting to disable automatic conversation recaps in Codex CLI](https://github.com/openai/codex/issues/41622) | `enhancement, CLI, config` | 21评论, 86👍 | **高需求功能**：用户希望在 `config.toml` 中关闭自动生成的对话摘要（recap），给予用户对上下文隐私和提示词的绝对控制权。 |
| **3** | **#45019** [App-server queued follow-up no longer exists](https://github.com/openai/codex/issues/45019) | `bug, app, app-server` | 24评论, 59👍 | **应用服务器架构 Bug**：App-server 排队的后续任务意外丢失，影响自动化工作流的稳定运行。 |
| **4** | **#42215** [Windows ChatGPT Work: project context sync fails](https://github.com/openai/codex/issues/42215) | `bug, windows-os, app` | 36评论 | **Windows 本地工作流阻塞**：Windows 端 ChatGPT Work 在同步本地项目上下文时频繁失败，无法在已有项目中开启本地聊天。 |
| **5** | **#42739** [Local projects disappear from sidebar after Windows update](https://github.com/openai/codex/issues/

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期：2026-09-23** ｜ 数据来源：github.com/google-gemini/gemini-cli

---

## 一、今日速览

今日社区活跃度集中在 **Agent/子代理稳定性** 与 **MCP 配置管理** 两条主线上：子代理误报成功、通用 Agent 挂起等 P1 缺陷持续发酵，同时社区提交了多个针对 MCP enable/disable 失效与配置损坏的修复 PR。此外，一份新增 **Gemini 3.8 Flash / 3.5 Flash Lite** 模型支持的 PR 已提交（当前已关闭），以及多起认证循环、持久化状态损坏等 P1 级修复，显示平台可靠性正成为近期主旋律。

---

## 二、版本发布

**v0.62.0-nightly.20260922.gd5b3e3acc**（nightly）

本次 nightly 为常规滚动构建，主要包含：
- **fix(core)**：规范化 `proxy-agent` 的 esbuild interop，修复环境代理（environment proxy）解析问题 — [PR #29401](https://github.com/google-gemini/gemini-cli/pull/29401)
- **fix(cli)**：在 ACP 模式下，于 `request_permission` 之前先发出 `tool_call` 更新事件，修正权限请求顺序 — [PR #29402 相关](https://github.com/google-gemini/gemini-cli/pull/29402)

配套版本号提升由机器人提交：[PR #29441](https://github.com/google-gemini/gemini-cli/pull/29441)

---

## 三、社区热点 Issues（Top 10）

1. **[#22323] 子代理达到 MAX_TURNS 却上报为 GOAL 成功**（P1，13 评论）🔴
   子代理在触达最大轮次限制前未做任何分析，却返回 `status: "success"` 与 `Termination Reason: "GOAL"`，掩盖了中断事实。**重要性**：直接误导用户对任务完成度的判断，是当前评论数最高的问题。
   https://github.com/google-gemini/gemini-cli/issues/22323

2. **[#21409] Generalist Agent 永久挂起**（P1，8 评论，👍8）🔴
   一旦 Gemini CLI 移交通用 Agent（如创建文件夹等简单操作）即无限挂起，最长等待一小时。禁用子代理可绕过。**重要性**：高赞高频，属阻塞级体验问题。
   https://github.com/google-gemini/gemini-cli/issues/21409

3. **[#19873] 通过零依赖 OS 沙箱 + 执行后意图路由释放模型 bash 亲和力**（P2，9 评论）
   提议让 Gemini 3 以原生 POSIX 工具链（grep/cat/sed/awk）探索代码库，同时不牺牲安全与 UX。**重要性**：涉及核心 Agent 架构方向的大型增强提案。
   https://github.com/google-gemini/gemini-cli/issues/19873

4. **[#22745] 评估 AST 感知的文件读取、搜索与代码库映射**（P2，7 评论）
   EPIC 追踪 AST 感知工具的潜在价值，可减少错位读取带来的轮次浪费与 token 噪声。
   https://github.com/google-gemini/gemini-cli/issues/22745

5. **[#21968] Gemini 主动使用技能与子代理不足**（P2，6 评论）
   即使存在高度相关的 gradle/git 技能，模型也不会主动调用，需显式指令。**重要性**：影响技能生态的实际可用性。
   https://github.com/google-gemini/gemini-cli/issues/21968

6. **[#26525] Auto Memory 需确定性脱敏并减少日志**（P2，安全，5 评论）
   本地 transcript 内容在进入模型上下文**之后**才进行脱敏，且服务会记录现有技能内容。**重要性**：涉及敏感信息泄露风险。
   https://github.com/google-gemini/gemini-cli/issues/26525

7. **[#21983] browser 子代理在 Wayland 下失败**（P1，4 评论）🔴
   Linux Wayland 环境下 browser subagent 报 GOAL 结束但实际失败。**重要性**：平台兼容性阻塞。
   https://github.com/google-gemini/gemini-cli/issues/21983

8. **[#22267] Browser Agent 忽略 settings.json 覆盖项**（P2，4 评论）
   `AgentRegistry` 虽正确合并配置，但 Browser Agent 完全无视 `maxTurns` 等全局/项目级覆盖。**重要性**：配置系统一致性缺陷。
   https://github.com/google-gemini/gemini-cli/issues/22267

9. **[#22672] Agent 应停止/劝阻破坏性行为**（P2，👍1）
   模型在复杂 git 操作中可能使用 `git reset`/`--force`，而存在更安全的替代方案。**重要性**：数据安全与信任问题。
   https://github.com/google-gemini/gemini-cli/issues/22672

10. **[#24246] 工具数 > 128 时触发 400 错误**（P2）
    启用工具过多时 CLI 报 400，期望 Agent 能更智能地收敛工具范围。**重要性**：随工具生态膨胀将日益普遍。
    https://github.com/google-gemini/gemini-cli/issues/24246

> 其他值得留意：**[#26522] Auto Memory 无限重试低信号会话**、**[#21763] /bug 报告缺少子代理上下文**、**[#26523] 无效 Auto Memory inbox patch 未隔离**。

---

## 四、重要 PR 进展（Top 10）

1. **[#29443] 新增 Gemini 3.8 Flash 与 3.5 Flash Lite 支持**（P1，已关闭）
   将 `gemini-3.8-flash`、`gemini-3.5-flash-lite` 提升为 Flash / Flash Lite 层级的最新 GA 模型。**重要性**：直接影响可用模型矩阵（注意当前状态为 CLOSED）。
   https://github.com/google-gemini/gemini-cli/pull/29443

2. **[#29448] 修复无限认证循环**（P1）
   解决 Windows / WSL / headless 环境下的认证死循环（#28341）：处理与 VS Code 扩展的文件争用、headless keyring 问题，并在无 keyring 时自动回退到加密文件存储。
   https://github.com/google-gemini/gemini-cli/pull/29448

3. **[#29444] 修复 `gemini mcp enable/disable` 永不匹配服务器**
   两个命令对所有服务器均报 `Server '<name>' not found`，即使用 `mcp list` 刚列出过。
   https://github.com/google-gemini/gemini-cli/pull/29444

4. **[#29445] 区分「不可读」与「缺失」的 MCP 启用配置**（P1）
   损坏的 `mcp-server-enablement.json` 目前会 fail-open，把用户已禁用的服务器全部重新启用并暴露工具；下一次 `disable()` 还会覆盖文件、抹掉其他条目。
   https://github.com/google-gemini/gemini-cli/pull/29445

5. **[#29446] 区分缺失与格式错误的 MCP 启用配置**（P1）
   与上条互补，通过识别 `ENOENT` 避免禁用服务器默认回到启用状态。
   https://github.com/google-gemini/gemini-cli/pull/29446

6. **[#29402] 让持久化状态写入具备故障安全性**（P1）
   改为「唯一临时文件 + fsync + 原子重命名」，防止中断写入把 `state.json` 截断为空、静默清空 CLI 持久状态。
   https://github.com/google-gemini/gemini-cli/pull/29402

7. **[#29447] SDK：向 SdkAgentShell 透传 env、timeoutSeconds 与外部 signal**
   修复 `SdkAgentShell.exec` 静默丢弃 `env`/`timeoutSeconds` 的问题，并支持外部 `AbortSignal` 终止执行。
   https://github.com/google-gemini/gemini-cli/pull/29447

8. **[#29449] 新增 PkgDiet 依赖护栏技能**
   内置技能可拦截 `npm install`（及 yarn/pnpm），在拉取前通过 PkgDiet MCP 检查健康度、包体积与弃用状态。
   https://github.com/google-gemini/gemini-cli/pull/29449

9. **[#29336] / [#29333] 加固非系统策略目录的写权限校验**（P2，enterprise）
   将 `isDirectorySecure` 校验从「仅系统目录」扩展到 user / workspace 各层，支持 POSIX 与 Windows 的所有权判断（#29311）。
   https://github.com/google-gemini/gemini-cli/pull/29336 ｜ https://github.com/google-gemini/gemini-cli/pull/29333

10. **[#29304] 截断时避免拆分 UTF-16 代理对**
    修复 `sanitizeForDisplay` 在 emoji 边界截断产生孤立代理字符的问题。
    https://github.com/google-gemini/gemini-cli/pull/29304

> 其他进展：**[#29450] a2a-server V1→V2 配置迁移**、**[#26844] 补齐 CustomTheme 校验字段**、**[#24941] 泛化 evals 基础设施**、**[#29242] 修正 `401` 子串误判认证错误**。

---

## 五、功能需求趋势

从近 24 小时更新的 50 条 Issue 可提炼出以下方向：

| 方向 | 代表 Issue | 说明 |
|---|---|---|
| **Agent / 子代理可靠性** | #22323、#21409、#21983、#22267 | 最高密度主题：挂起、误报成功、配置失效、平台兼容 |
| **Auto Memory 体系治理** | #26525、#26522、#26523、#26516 | 同一作者集中提交，聚焦脱敏、重试、patch 隔离 |
| **代码理解能力升级** | #22745、#22746、#19561 | AST 感知读取/搜索、Tactful Extraction 精细读取 |
| **安全与权限** | #26525、#22672、#29336 | 破坏性命令劝阻、策略目录写权限、敏感信息脱敏 |
| **技能 / 子代理自主调用** | #21968、#20195、#21432 | 让模型主动、正确地使用自身能力 |
| **工具规模与上下文成本** | #24246、#21924、#18836 | 工具数上限、渲染性能、持久化任务追踪 |
| **新模型支持** | PR #29443 | Gemini 3.8 Flash / 3.5 Flash Lite 接入 |

---

## 六、开发者关注点

1. **Agent 挂起与误报是最大痛点**：Generalist Agent 无限挂起（#21409）与子代理 MAX_TURNS 被上报为成功（#22323）分别代表「卡死」与「虚假完成」两类信任危机，均为 P1。
2. **配置系统可信度不足**：Browser Agent 忽略 `settings.json`（#22267）、MCP enable/disable 失效（#29444）与配置损坏 fail-open（#29445/#29446）暴露出配置读取与校验链路的系统性脆弱。
3. **平台兼容性**：Wayland（#21983）、Windows/WSL 认证循环（#29448）、headless keyring 是跨平台用户的集中反馈点。
4. **敏感信息与破坏性操作的安全焦虑**：Auto Memory 脱敏时序（#26525）与模型执行 `git reset --force`（#22672）反映用户对数据安全的担忧。
5. **状态与上下文的持久性**：`/compress` 不跨会话保留（#21335）、持久化状态可能被截断清空（#29402），说明会话可靠性仍需加强。
6. **上下文成本控制**：AST 感知读取（#22745）与 Tactful Extraction（#19561）的讨论显示开发者正主动寻求降低每轮 token 开销的方案。

---

*以上内容基于所提供的 GitHub 数据整理，链接均指向 google-gemini/gemini-cli 仓库。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Thinking Process:

1.  **Understand the Goal**: The user wants a daily report (dated 2026-09-23) for the GitHub Copilot CLI community dynamics, based on provided GitHub data (releases, issues, pull requests). The report needs to be in Chinese, structured into specific sections: Today's Summary, Releases, Hot Issues (top 10), PR Progress (top 10, though only 1 PR is provided in the prompt, I need to check if there are more or if I should just report the 1 provided but adapt the prompt's request of "select 10" by highlighting the one and maybe generalizing or sticking strictly to the data provided. Wait, the prompt says "挑选 10 个重要的 PR" but only provides 1 PR in the data section. I will write about the 1 provided PR and perhaps note that only 1 PR was active/updated in the last 24 hours according to the source data). Feature trends and developer pain points need to be extracted from the issues.

2.  **Analyze the Input Data**:

    *   **Date**: 2026-09-23 (based on the prompt's context "生成 2026-09-23 的 GitHub Copilot CLI 社区动态日报").
    *   **Releases**:
        *   `v1.0.89-0`: Added support for `claude-opus-5.5`. Improved: Show managed Connector consent progress with a copyable authorization URL during connect and reconnect.
        *   `v1.0.88`: (Updated 2026-09-22) Add optional OSC 777 terminal notifications for direct Ghostty and WezTerm sessions. Text selection now works in bottom-anchored dialogs, including login device codes. Preserve `/allow-all` during managed-settings refresh failures, and remember exact session approvals for missing path.
        *   `v1.0.88-2`: Fixed text selection in bottom-anchored dialogs.
        *   `v1.0.88-1`: Fixed `/allow-all` preservation, exact grants visibility, sandboxed network denials from proxy tunnel failures.
    *   **Issues (Top 30 by comments, but I need to pick 10 most noteworthy/important ones)**:
        *   #2486 (CLOSED, MCP blocked by policy, 8 comments): MCP server blocked by policy on personal pro+ account. Tried `--yolo`, `/mcp enable edit` but only works through a hack.
        *   #4438 (OPEN, disable-model-invocation: true makes skill unreachable, 7 comments, 9 👍): Skill with `disable-model-invocation: true` is unreachable from CLI, `skill()` tool returns "Skill not found".
        *   #432 (CLOSED, Send copilot-cli specific metadata when invoking MCP servers, 6 comments): Feature request to send CLI-specific metadata identifier when connecting to MCP servers.
        *   #4919 (OPEN, /ask does not work in auto mode, 3 comments): Repeatedly gets error that model is not supported when using `/ask` in auto mode.
        *   #4003 (OPEN, Support custom model endpoint in Copilot CLI, 3 comments): Request to support custom model endpoints like VS Code does, for local/private models.
        *   #4590 (CLOSED, Extension SDK reconnects dispose the session hook processor, 3 comments): Hook processor is not configured for session id when more than one extension is active and MCP host reloads.
        *   #2980 (CLOSED, postToolUse hook additionalContext not injected, 3 comments, 4 👍): Hook output `additionalContext` is captured but not forwarded to the agent context window.
        *   #2714 (CLOSED, Allow toggling plugins enabled/disabled, 3 comments, 11 👍): No way to toggle plugin state without uninstalling.
        *   #2504 (CLOSED, Discover custom agents from cwd, 3 comments, 6 👍): Custom agents only discovered at git root, not cwd.
        *   #4602 (OPEN, store_memory fails... managedSettings fails closed on serverFetchFailed flap, 2 comments): Underlying mechanism causing MCP servers to be stripped and `store_memory` to fail.
        *   #3595 (OPEN, AutoPilot mode should pause for user input, 2 comments, 2 👍): AutoPilot mode automatically picks a fix without user confirmation, hard to review step-by-step.
        *   #4929 (OPEN, Process-local auth token stops refreshing, 2 comments): Long-running process loses auth, all prompts fail until restart.
        *   #3092 (CLOSED, File reference @ does not show files in current directory, 2 comments): `@` file mention relative to CWD doesn't work, parent dir does.
        *   #4486 (OPEN, Edit permission request "times out"?, 2 comments, 2 👍): Edit permission requests time out if user doesn't respond immediately, annoying for overnight sessions.
        *   #3736 (CLOSED, Thinking Tokens/Text never appears with BYOK models, 2 comments): Thinking text/tokens not showing for BYOK models.
        *   #4268 (CLOSED, Regression: exit summary not shown after upgrading to 1.0.74 / 1.0.75, 2 comments): Session/exit summary missing on quit.
        *   #3750 (CLOSED, Hardcoded colors break light theme, 2 comments, 2 👍): Hardcoded background color breaks light CMD theme on v1.0.61.
        *   #3456 (CLOSED, Concurrent refresh-token requests kill OAuth chain, 2 comments): Parallel refresh token requests fail on strict reuse detection.
        *   #3344 (CLOSED, Messages submitted while background subagents running get stranded, 2 comments, 1 👍): Stranded messages in Queued UI region.
        *   #3330 (CLOSED, macOS: tls.getCACertificates adds 5+ seconds, 2 comments): CA loader calls system cert sync, adding massive delay on macOS.
        *   #2322 (CLOSED, edit file window should not block scrolling, 2 comments, 2 👍): Edit file window blocks scrolling to earlier session history.
        *   #1104 (CLOSED, Unable to get issuer certificate on macOS, 2 comments): macOS SSL cert issues.
        *   #4227 (OPEN, Xcode ACP custom agent session/prompt fails, 2 comments): Integration with Xcode via ACP fails with "failed to produce a response".
        *   #4840 (OPEN, BYOK not working with Deepseek, 1 comment, 1 👍): 400 error on tools type deserialization (`custom` vs `function`).
        *   #4927 (OPEN, GPT-6 Astra context tier inconsistency, 1 comment): Billing token prices inconsistent with capabilities limits.
        *   #4851 (OPEN, Azure MCP server fails sending HTTP request, 1 comment, 5 👍): BrokenPipe when validating Azure API Center MCP registry.
        *   #4931 (OPEN, Cloud agent: Playwright MCP session closed, 1 comment): Cloud agent session on GHEC fails.
        *   #3932 (CLOSED, Display monthly AIC quota, 1 comment, 5 👍): Request for monthly quota display like IDE plugins.
        *   #3918 (CLOSED, /cd autocomplete keybindings inconsistent, 1 comment): Enter/Tab/Escape behavior issues.
        *   #3890 (CLOSED, WebFetchRedirectError for OpenAI docs, 1 comment): Redirects not followed.
    *   **PRs (only 1 provided)**:
        *   #4770 (OPEN, Document the WebSocket responses opt-out, by 1fanwang): Documents the opt-out for WebSocket responses, which is an escape hatch for blocked WS connections or `400 input item ID` errors.

3.  **Drafting the Sections**:

    *   **Header**: Date: 2026-09-23 (based on prompt request). Target Repo: github.com/github/copilot-cli.

    *   **Section 1: 今日速览 (Today's Summary)**:
        *   Summarize key developments.
        *   Copilot CLI moves to v1.0.89-0, adding support for `claude-opus-5.5` and improving connector consent flow.
        *   Community focus is heavily on MCP integration issues (policy blocks, hook context injection), model compatibility (BYOK, auto mode `/ask`), and agent skill discoverability.
        *   Only 1 documentation PR regarding WebSocket opt-out is active, but there is a high volume of critical bug fixes in recent releases (like terminal notifications, selection, and `/allow-all` preservation).

    *   **Section 2: 版本发布 (Releases)**:
        *   Focus on the latest: `v1.0.89-0` (claude-opus-5.5 support, managed Connector consent progress with copyable URL).
        *   Also mention the recent stabilization patches in `v1.0.88` series (OSC 777 notifications for Ghostty/WezTerm, text selection fix in bottom-anchored dialogs, `/allow-all` preservation during managed-settings refresh, and sandboxed network fixes).

    *   **Section 3: 社区热点 Issues (Top 10 Hot Issues)**:
        *   Need to select the 10 most impactful/relevant ones based on severity, community engagement (👍, comments), and technical significance.
        *   *Selection criteria*: High thumbs up, high comments, core functionality (MCP, models, permissions, agents).
        *   1. **#4438** (OPEN, 7 comments, 9 👉): Skill unreachable when `disable-model-invocation: true` is set. Core issue for skill creators.
        *   2. **#2714** (CLOSED, 3 comments, 11 👉): Lack of plugin toggle (enable/disable) without uninstalling. Highly requested feature.
        *   3. **#4851** (OPEN, 1 comment, 5 👉): Azure MCP server registry validation fails with BrokenPipe. Enterprise impact.
        *   4. **#3932** (CLOSED, 1 comment, 5 👉): Request to display monthly AIC quota like IDE plugins do.
        *   5. **#2486** (CLOSED, 8 comments): MCP server blocked by policy on personal accounts; requires hacks to bypass.
        *   6. **#4003** (OPEN, 3 comments): Support custom model endpoints (like VS Code) for local/private models. Crucial for local dev.
        *   7. **#4929** (OPEN, 2 comments): Auth token stops refreshing in long-running processes, forcing restarts. Major productivity killer.
        *   8. **#4486** (OPEN, 2 comments, 2 👉): Edit permission requests timing out unexpectedly. Annoyance for multi-session users.
        *   9. **#4919** (OPEN, 3 comments): `/ask` command failing in auto mode ("model not supported").
        *   10. **#2980** (CLOSED, 3 comments, 4 👉): `postToolUse` hook `additionalContext` not injected into agent context window. Critical for plugin developers.
        *   *Alternative/additional ones to mention briefly if space allows*: #3595 (AutoPilot needs pause), #4840 (BYOK Deepseek tool formatting error).

    *   **Section 4: 重要 PR 进展 (PR Progress)**:
        *   The prompt asks to "挑选 10 个重要的 PR", but the data only contains *one* PR (`#4770`). I should state that according to the provided data, only 1 PR was updated in the last 24 hours, and describe it in detail, while perhaps noting its importance for users facing network restrictions.
        *   PR **#4770**: Documents the WebSocket responses opt-out. Important because models default to WebSocket transport, and if firewalls block it or sessions fail with `400 input item ID`, this opt-out is the vital escape hatch. Helps enterprise users and local network setups.

    *   **Section 5: 功能需求趋势 (Feature Request Trends)**:
        *   Extract from the issues:
            *   *Model & Endpoint Flexibility*: Custom endpoints (#4003), BYOK fixes (#3736, #4840), model metadata consistency (#4927).
            *   *Plugin & Agent Ecosystem*: Toggling plugins (#2714), skill discovery from cwd instead of just git root (#2504), skill invocation controls (#4438).
            *   *MCP & Integration*: Sending CLI metadata to MCP (#432), MCP policy bypasses (#2486), Azure MCP registry stability (#4851).
            *   *Enterprise & Quota Visibility*: Monthly quota display (#3932).
            *   *Terminal & UX Polish*: OSC 777 notifications (already in release), autocomplete keybindings (#3918), non-blocking scroll (#2322).

    *   **Section 6: 开发者关注点 (Developer Pain Points/Focus)**:
        *   Authentication and session persistence: Token refreshing breaking in long sessions (#4929), concurrent token rotation issues (#3456).
        *   Performance on macOS: 5+ second delay due to system CA certificate loading (#3330).
        *   Hook & SDK lifecycle: Hook processor disposed on extension reloads (#4590), context injection failures (#2980).
        *   Permissions and security exactness: Exact path grants vs parent directory grants (addressed in v1.0.88-1 but still a hot topic).

4.  **Refining Language and Tone**:
    *   Professional, concise, tech-analyst style.
    *   Use clear bullet points, bold text for key issues/numbers.
    *   Include links to the issues/PRs (e.g., `github.com/github/copilot-cli/issues/4438`).

Let's double-check the translations and technical terms:
- BYOK (Bring Your Own Key): 自定义模型密钥/自带密钥
- MCP (Model Context Protocol): 模型上下文协议
- ACP (Agent Client Protocol): 智能体客户端协议
- AutoPilot mode: 自动驾驶模式/自动模式
- OSC 777: 终端通知协议
- Ghostty / WezTerm: 终端模拟器

Let's organize the selected 10 issues clearly:
1. **#4438 (OPEN) - 技能可达性问题**: `disable-model-invocation: true` 导致 CLI 中技能完全无法被模型或显式调用。对于技能开发者来说是一个核心阻塞点。7条评论，9个赞。
2. **#2714 (CLOSED) - 插件启用/禁用切换**: 缺少一键禁用/启用插件的功能，只能卸载。11个赞，社区呼声极高，但已被标记为关闭（可能已在开发中或计划中）。
3. **#2486 (CLOSED) - MCP 策略拦截个人账号**: 个人 Pro+ 账号的 MCP 服务被策略拦截，需要 hack 才能使用。8条评论，反映了个人用户在企业策略边缘地带的使用痛点。
4. **#4003 (OPEN) - 自定义模型端点**: 希望 Copilot CLI 像 VS Code 一样支持配置本地或私有模型端点。本地开发和测试的刚需。
5. **#4929 (OPEN) - 长期运行进程的认证失效**: 进程本地认证令牌停止刷新，导致所有提示词失败，必须重启。严重影响多会话和长时间运行的开发者。
6. **#4851 (OPEN) - Azure MCP 注册表 BrokenPipe**: 针对 Azure API Center MCP 注册表的校验突然失败，影响企业级用户（5个赞）。
7. **#2980 (CLOSED) - postToolUse 钩子上下文注入失败**: 插件开发中的关键 bug，`additionalContext` 未能正确注入到智能体上下文窗口中（4个赞）。
8. **#3932 (CLOSED) - 显示月度 AIC 配额**: 希望像 IDE 插件一样在 CLI 中直观显示月度配额使用情况（5个赞）。
9. **#4486 (OPEN) - 编辑权限请求超时**: 权限请求无故超时，对于并行多会话和夜间无人值守任务极其不友好（2个赞）。
10. **#4919 (OPEN) - 自动模式下 /ask 报错**: 自动模式下使用 `/ask` 报告模型不支持的错误，影响多模型编排工作流。

Let's look at the PR section again: "挑选 10 个重要的 PR" - Since only 1 PR is provided in the dataset, I will explicitly state that only 1 PR was updated in the past 24 hours according to the provided data, and analyze its significance:
- PR #4770: 文档化 WebSocket 响应退出机制。对于网络限制严格、无法使用 WebSocket 的环境（如某些企业内网）至关重要，提供了一个关键的逃生舱（escape hatch）。

Let's write down the "功能需求趋势" (Feature Trends):
- **本地化与自定义模型支持 (BYOK & Local Models)**: 用户对接入本地模型、自定义端点（#4003）以及修复 Deepseek 等特定模型的兼容性问题（#4840）表现出强烈需求。
- **MCP 协议深度集成与稳定性**: 元数据发送（#432）、策略兼容（#2486）、Azure 注册表支持（#4851）是社区热点，表明 MCP 是 Copilot CLI 生态的核心扩展点。
- **智能体与技能管理 (Agent & Skill UX)**: 技能发现范围扩展至 CWD（#2504）、解决

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>



# Kimi Code CLI 社区动态日报 | 2026-09-23

---

## 1. 今日速览

Kimi Code CLI 完成了一次关键的架构过渡：Python 版 `kimi-cli` 正式归档，1.52.0 版本将入口直接重定向至 TypeScript 版 Kimi Code 安装器，标志着项目全面转向新实现。同时，社区反馈显示内存压力下的会话稳定性问题（#2336）仍需关注，而 Web 端的输入法兼容性问题（#2667）已得到修复。

---

## 2. 版本发布

### 1.52.0 — Python 归档与安装器重定向

- **发布时间**：2026-09-22
- **核心变更**：将 `kimi-cli`（Python）的包入口改造为迁移路径，用户通过 `uv tool install kimi-cli` 将直接安装新的 TypeScript 版 Kimi Code CLI。
- **背景**：此版本是 Python 版本归档的一部分，配合 #2659 的仓库 tombstone 工作，引导用户平滑过渡到新架构。
- **影响**：对于仍在使用旧版 `kimi-cli` 的用户，此变更意味着安装命令不变，但实际运行的是新的 CLI 实现。
- **链接**：[Release 1.52.0](https://github.com/MoonshotAI/kimi-cli/releases/tag/1.52.0) | [PR #2666](https://github.com/MoonshotAI/kimi-cli/pull/2666)

---

## 3. 社区热点 Issues

> ⚠️ 过去 24 小时内仅捕获到 1 条活跃 Issue，以下为唯一高关注项。

### #2336 [OPEN] 会话损坏：内存压力下丢失对话记录与 400 工具调用错误

- **状态**：Open | 标签：bug
- **作者**：kkc25 | 创建于 2026-05-21，最后更新 2026-09-22
- **影响范围**：Kimi Code CLI 1.43.0，Linux 环境，模型 `kimi-for-coding`
- **问题摘要**：在内存压力下恢复会话时，出现对话记录丢失以及工具调用返回 400 错误的情况。
- **社区反应**：已有 2 条评论，0 个 👍，但问题持续活跃超过 4 个月，表明这是一个长期未解决的稳定性痛点。
- **为什么重要**：直接关系到用户的核心工作流——会话状态的可靠性。如果内存压力导致对话丢失或工具调用失败，将严重影响编码助手的可用性。
- **链接**：[Issue #2336](https://github.com/MoonshotAI/kimi-cli/issues/2336)

---

## 4. 重要 PR 进展

> 共捕获 8 条 PR（1 条 Closed，7 条 Open），以下按重要性排序。

### 🔴 已合并

#### #2667 [CLOSED] 修复 Web 端输入法组合键问题
- **作者**：dvd233 | 更新于 2026-09-22
- **内容**：在 CJK 输入法（如中文输入）启用时，WebKit 可能在 `isComposing` 被 React 观察到之前触发 Enter 键事件，导致不完整的文本被提交。通过在 Enter 提交边界添加 WebKit 兼容防护，避免输入法中途提交。
- **影响**：显著改善中文用户的输入体验，防止输入法中途发送不完整内容。
- **链接**：[PR #2666](https://github.com/MoonshotAI/kimi-cli/pull/2667)

#### #2666 [CLOSED] CLI 入口重定向至安装器
- **作者**：sailist | 更新于 2026-09-22
- **内容**：将 Python 版 `kimi-cli` 的包入口改造为迁移路径，安装新 TypeScript 版 Kimi Code CLI。这是 Python 版本归档的关键步骤。
- **影响**：标志着项目从 Python 到 TypeScript 的架构迁移进入最后阶段。
- **链接**：[PR #2666](https://github.com/MoonshotAI/kimi-cli/pull/2666)

### 🟡 开放中

#### #2656 [OPEN] 修复 OpenCode Go 主机的 LLM 请求头缺失问题
- **作者**：FOWEPJF255 | 创建于 2026-09-20，更新于 2026-09-22
- **内容**：OpenCode Go 主机在缺少稳定的 `x-opencode-session` 头时会返回 HTTP 400。此 PR 检测官方 OpenCode 主机（`opencode.ai` / `*.opencode.ai`），并在请求中附加当前 Kimi 会话 ID。
- **影响**：解决与 OpenCode Go 平台的集成问题，确保跨平台会话一致性。
- **链接**：[PR #2656](https://github.com/MoonshotAI/kimi-cli/pull/2656)

#### #2664 [OPEN] 依赖升级：agent-client-protocol 0.8.0 → 0.12.1
- **作者**：dependabot[bot] | 创建于 2026-09-22
- **内容**：将 `agent-client-protocol` 从 0.8.0 升级到 0.12.1，可能包含新功能、性能改进或安全修复。
- **影响**：保持依赖项最新，有助于提升系统稳定性和安全性。
- **链接**：[PR #2664](https://github.com/MoonshotAI/kimi-cli/pull/2664)

#### #2663 [OPEN] 依赖升级：rich 14.2.0 → 15.0.0
- **作者**：dependabot[bot] | 创建于 2026-09-22
- **内容**：将终端渲染库 `rich` 升级到 15.0.0 主要版本，可能包含视觉改进或性能优化。
- **影响**：可能改善 CLI 输出的视觉效果和性能。
- **链接**：[PR #2663](https://github.com/MoonshotAI/kimi-cli/pull/2663)

#### #2662 [OPEN] 依赖升级：fastapi 0.128.0 → 0.141.1
- **作者**：dependabot[bot] | 创建于 2026-09-22
- **内容**：将 Web 框架 `fastapi` 升级到 0.141.1，包含多项修复和改进。
- **影响**：提升 API 服务端的稳定性和性能。
- **链接**：[PR #2662](https://github.com/MoonshotAI/kimi-cli/pull/2662)

#### #2665 [OPEN] 依赖升级：ruff 0.14.14 → 0.16.8
- **作者**：dependabot[bot] | 创建于 2026-09-22
- **内容**：将 Python linter `ruff` 升级到 0.16.8，包含新规则和性能改进。
- **影响**：改善代码质量和开发效率。
- **链接**：[PR #2665](https://github.com/MoonshotAI/kimi-cli/pull/2665)

#### #884 [OPEN] 依赖升级：ruff 0.14.14 → 0.15.0
- **作者**：dependabot[bot] | 创建于 2026-02-04，更新于 2026-09-22
- **内容**：将 `ruff` 升级到 0.15.0（较旧的升级请求，可能已被 #2665 取代）。
- **链接**：[PR #884](https://github.com/MoonshotAI/kimi-cli/pull/884)

---

## 5. 功能需求趋势

从近期 Issue 和 PR 中可以看出，社区关注点集中在以下方向：

- **架构迁移与兼容性**：Python → TypeScript 的迁移正在推进，用户对安装路径和兼容性保持高度关注（#2666）。
- **输入法与 Web 体验**：CJK 输入法在 Web 端的交互问题（#2667）表明，多语言支持是开发者关注的重点。
- **跨平台集成**：与 OpenCode Go 等平台的集成需求（#2656）反映了对多主机、多环境会话一致性的需求。
- **依赖项健康度**：近期大量依赖升级 PR（#2662-#2665）显示，维护者正在积极更新底层库，以提升安全性和性能。

---

## 6. 开发者关注点

- **会话稳定性**：#2336 暴露的内存压力下会话损坏问题，是当前最突出的稳定性痛点，直接影响用户信任。
- **迁移支持**：随着 Python 版本归档，开发者需要清晰的迁移指南和向后兼容策略。
- **输入法支持**：中文用户对输入法中途提交问题的反馈，表明本地化体验仍需改进。
- **依赖管理**：自动化的依赖升级（dependabot）正在积极运行，但需要关注升级带来的潜在兼容性问题。

---

> 📊 数据来源：[github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli) | 生成时间：2026-09-23  
> 注：本日报基于过去 24 小时内捕获的 GitHub 数据生成，Issue 样本量较少，部分趋势可能未完全反映社区全貌。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 | 2026-09-23

> 📊 数据来源：[github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)  
> 📅 统计周期：过去 24 小时

---

## 一、今日速览

OpenCode 今日发布 **v1.18.32** 小版本更新，修复了 Bedrock 图片附件处理和 Together AI 流式用量报告两个核心问题。社区方面，**V2 版本兼容性问题**持续发酵——配置 Schema 不匹配、TODO 工具缺失、ACP 会话目录忽略自定义 Provider 等问题引发密集讨论。同时，**Windows ARM64 原生支持**、**Ollama 自动压缩异常**、**PDF 内存泄漏**等长期 Issue 仍保持高活跃度。免费层访问限制（`user_blocked`）相关投诉今日新增多条。

---

## 二、版本发布

### 🔖 v1.18.32

| 类别 | 内容 |
|------|------|
| **Bugfix** | 修复 Bedrock 图片附件仅对 Claude / Nova / Llama 4 模型提升的问题 |
| **Bugfix** | 修复 Together AI 流式用量报告 |
| **社区贡献** | [@dc85](https://github.com/dc85)：新增 DeepSeek V4.1 Flash 文档 (#49897)、新增 Grok 4.7 到 Zen |

🔗 [Release 详情](https://github.com/anomalyco/opencode/releases/tag/v1.18.32)

---

## 三、社区热点 Issues（Top 10）

### 1. [#13768] Opus 4.6 频繁报错 "assistant message prefill not supported" — 👍 35 | 💬 73
**状态：CLOSED** | 作者：sbrunecker  
使用 Opus 4.6 时频繁中断，提示 "该模型不支持 assistant message prefill"。73 条评论表明这是长期高频痛点，最终关闭但根因修复情况存疑。
🔗 [查看 Issue](https://github.com/anomalyco/opencode/issues/13768)

### 2. [#49433] 免费层限制错误："只能从 OpenCode 内部使用" — 👍 15 | 💬 50
**状态：OPEN** | 作者：GooseOb  
所有模型均触发此错误，影响 pacman 等包管理器安装的用户。50 条评论反映免费层策略执行存在广泛误判。
🔗 [查看 Issue](https://github.com/anomalyco/opencode/issues/49433)

### 3. [#19130] Windows ARM64 原生二进制 TUI 初始化失败 — 👍 13 | 💬 27
**状态：OPEN** | 作者：Carliquiss  
`bun:ffi dlopen TinyCC` 错误导致 TUI 无法启动，非交互命令正常。ARM64 设备用户的核心阻塞问题。
🔗 [查看 Issue](https://github.com/anomalyco/opencode/issues/19130)

### 4. [#49057] Muse Spark 1.3 免费版通过 Zen 被无理由封禁 — 👍 0 | 💬 13
**状态：OPEN** | 作者：alkaserGG  
`[user_blocked]` 错误且无申诉渠道，涉及 OpenCode Zen 免费模型访问政策争议。
🔗 [查看 Issue](https://github.com/anomalyco/opencode/issues/49057)

### 5. [#42421] V2 中 TODO 工具（todowrite/todoread）缺失 — 👍 0 | 💬 10
**状态：CLOSED** | 作者：kiliantgs  
V2 运行时不再暴露原生 TODO 工具，模型无法维护待办列表。V1→V2 迁移的功能回归问题。
🔗 [查看 Issue](https://github.com/anomalyco/opencode/issues/42421)

### 6. [#49965] Ollama Provider 每次工具调用后触发自动压缩 — 👍 0 | 💬 6
**状态：OPEN** | 作者：jensklose  
即使远未达到上下文限制，`openai-compatible`（Ollama）Provider 也会无条件触发 compaction，严重影响本地模型使用体验。
🔗 [查看 Issue](https://github.com/anomalyco/opencode/issues/49965)

### 7. [#38835] `compaction.reserved` 对无 input limit 的模型静默失效 — 👍 0 | 💬 5
**状态：OPEN** | 作者：winstern1998-commits  
GLM-5.2 等模型的 `limit.input` 缺失导致 `reserved` 配置被完全忽略，历史 Issue #13980 被 stale bot 关闭后未修复。
🔗 [查看 Issue](https://github.com/anomalyco/opencode/issues/38835)

### 8. [#32981] 在主目录运行 Snapshot 导致无限挂起 — 👍 0 | 💬 5
**状态：OPEN** | 作者：eskbusiness  
223GB 主目录 + 20,000+ 文件的 git 仓库使 opencode 冻结数分钟，大仓库用户的日常痛点。
🔗 [查看 Issue](https://github.com/anomalyco/opencode/issues/32981)

### 9. [#42263] PDF 附件 base64 编码无大小限制导致 OOM — 👍 1 | 💬 5
**状态：OPEN** | 作者：tianq01  
整个 PDF 文件被 base64 编码到内存且每轮重新编码，无大小上限，存在严重内存泄漏风险。
🔗 [查看 Issue](https://github.com/anomalyco/opencode/issues/42263)

### 10. [#43748] V2 配置 Schema (opencode.ai/config.json) 拒绝合法 V2 字段 — 👍 5 | 💬 4
**状态：OPEN** | 作者：Sugamsss  
公开 JSON Schema 与 V2 文档不一致，导致编辑器 IntelliSense 和校验器将合法配置标记为错误。
🔗 [查看 Issue](https://github.com/anomalyco/opencode/issues/43748)

---

## 四、重要 PR 进展（Top 10）

### 1. [#44223] 修复：阻止遗留 200K 价格覆盖模型真实上下文层级
**作者：xyzs996** | CLOSED  
解决上下文层级筛选为空时 `??` 回退逻辑导致的定价错误，影响模型选择准确性。
🔗 [查看 PR](https://github.com/anomalyco/opencode/pull/44223)

### 2. [#44214] 新增 Windows ARM64 原生桌面 Agent（Electron 38）
**作者：PranayJuneja** | CLOSED  
补全 Windows ARM64 生态支持，对应 Issue #19130 的 TUI 问题仍有待解决。
🔗 [查看 PR](https://github.com/anomalyco/opencode/pull/44214)

### 3. [#44213] 审查面板标签栏新增折叠按钮
**作者：eagleanurag** | CLOSED  
UI 改进：在侧边栏标签栏右侧添加折叠控件，提升多面板工作流体验。
🔗 [查看 PR](https://github.com/anomalyco/opencode/pull/44213)

### 4. [#44191] 新增 Cron 定时提示工具
**作者：paolodelia99** | CLOSED  
借鉴 Claude Code 的定时任务功能，新增 `cron` 工具支持计划性 prompt 执行。
🔗 [查看 PR](https://github.com/anomalyco/opencode/pull/44191)

### 5. [#44179] 修复：Azure 部署的 DeepSeek 模型选择正确适配器
**作者：Shalin-Shah-2002** | CLOSED  
Azure 上 `DeepSeek-V4-Pro/Flash` 此前走通用 chat/responses 适配器导致异常，现路由至专用适配器。
🔗 [查看 PR](https://github.com/anomalyco/opencode/pull/44179)

### 6. [#44139] 发布 V2 Homebrew Formula
**作者：atharen** | CLOSED  
macOS 用户可通过 `brew install` 直接安装 V2 beta，降低尝鲜门槛。
🔗 [查看 PR](https://github.com/anomalyco/opencode/pull/44139)

### 7. [#44116] 修复：接受 Anthropic 可空 usage 字段
**作者：dajiaohuang**** | CLOSED  
Anthropic Messages API 的 `message_delta.usage.input_tokens` 可能为 `null`，此前协议层未处理导致崩溃。
🔗 [查看 PR](https://github.com/anomalyco/opencode/pull/44116)

### 8. [#44104] 修复：GitHub Copilot Grok 模型端点错误
**作者：munim** | CLOSED  
Copilot Grok 模型（如 `copilot-grok-4.6`）因继承通用 OpenAI SDK 适配器而报端点错误。
🔗 [查看 PR](https://github.com/anomalyco/opencode/pull/44104)

### 9. [#49689] 升级 @ai-sdk/mistral 至 3.0.64 修复流式工具调用
**作者：TimoStolz** | **OPEN**  
Mistral 中继的 GLM 模型（`zai-glm-5` 等）流式工具调用失败，依赖版本升级解决。
🔗 [查看 PR](https://github.com/anomalyco/opencode/pull/49689)

### 10. [#44097] UI 修复：Markdown 加粗字重 & 状态弹窗滚动边界
**作者：SomSamantray** | CLOSED  
两项独立 UI 修复：加粗文本字重不足、状态弹出窗口内容溢出无滚动。
🔗 [查看 PR](https://github.com/anomalyco/opencode/pull/44097)

---

## 五、功能需求趋势

基于今日 50 条活跃 Issue 的主题聚类分析：

| 趋势方向 | 代表 Issue | 热度 |
|---------|-----------|------|
| **🔥 V2 兼容性与迁移** | #42421 (TODO工具缺失)、#43748 (Schema不匹配)、#50236 (ACP目录) | 极高 |
| **🔥 免费层/付费策略** | #49433、#50366、#49057、#50720、#50697 | 高 |
| **⚡ 性能与内存** | #42263 (PDF OOM)、#32981/#50734 (Snapshot挂起)、#49965 (异常压缩) | 中高 |
| **💻 平台支持** | #19130 (Win ARM64)、#48663 (Nix CLI入口)、#44214 (Electron ARM64) | 中 |
| **🔌 Provider 适配** | #32613 (小米MiMo)、#44821 (Codex OAuth)、#49689 (Mistral/GLM) | 中 |
| **🛡️ 安全与认证** | #43039 (serve免密码)、#50721 (强制Basic Auth)、#50715 (query参数泄露) | 中 |
| **✨ 新功能请求** | #44191 (Cron定时)、#50713 (自定义Provider成本层级) | 低中 |

**核心信号**：社区正处于 **V1 → V2 迁阵痛期**，配置系统、工具集、API 兼容性是最大摩擦点。

---

## 六、开发者关注点（痛点总结）

1. **V2 功能 regression 是头号焦虑** — TODO 工具、编辑能力（LF/CRLF）、会话目录构建等 V1 成熟功能在 V2 中缺失或退化，开发者对升级持观望态度。

2. **本地模型（Ollama）体验恶化** — 自动压缩策略对 `openai-compatible` Provider 过于激进（#49965），加上 `compaction.reserved` 对部分模型无效（#38835），本地部署用户反馈强烈。

3. **大文件/大仓库场景脆弱** — PDF 无限 base64 编码（#42263）、大目录 snapshot 挂起（#32981/#50734），缺乏资源保护机制。

4. **免费层策略执行混乱** — 多位用户报告正常使用触发 `user_blocked` 或 "free tier only within OpenCode" 限制（#49433/#50366/#49057），客服/申诉渠道不畅。

5. **配置生态碎片化** — 公开 Schema 滞后（#43748）、Nix 包暴露错误 CLI 入口（#48663）、Desktop `/models` 对话框遗漏自定义 Provider（#50726），降低专业开发者集成体验。

---

*📝 本日报由 AI 技术分析师自动生成，数据截至 2026-09-23 00:00 UTC*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

Thinking Process:

1.  **Understand the Goal**: The user wants a daily community dynamic report for the `pi-mono` GitHub repository (specifically for `2026-09-23`, based on the provided data which covers updates mostly around `2026-09-22`). The report must be in Chinese, structured into specific sections, concise, professional, and include links to GitHub issues/PRs.

2.  **Analyze the Input Data**:
    *   **Latest Releases**: `v0.87.1` (contains new features like "Latest frontier models" - Claude Opus 5.5, GPT-6 Sol, GPT-6 Luna, Grok 4.7 by default).
    *   **Latest Issues (top 30 by comments)**:
        *   #7885: npm search not indexing newly published pi-packages (CLOSED, 12 comments).
        *   #8684: `PI_OFFLINE` silently disables all provider model discovery (CLOSED, 12 comments).
        *   #9843: 0.86.x regression: mid-stream `litellm.APIConnectionError` on longer requests via OpenAI-compatible (LiteLLM) provider (OPEN, 10 comments).
        *   #9052: Fullscreen mode's fixed input box wheel scrolling is 3x slower than regular mode (CLOSED, 10 comments, 6 👍).
        *   #9803: 0.86.0 regression: RPC steer success cannot be correlated with extension-handled input (OPEN, 10 comments).
        *   #9652: Compaction is refused by Anthropic Claude Fable because of transcribed thinking blocks (CLOSED, 7 comments, 2 👍).
        *   #9549: Large transcripts re-render every frame; every resize re-emits the whole transcript (OPEN, 7 comments).
        *   #9815: `mistral-conversations` API doesn't respect `Retry-After` header (CLOSED, 7 comments).
        *   #9690: OpenCode Zen rejects Pi session IDs while accepting OpenCode-issued sessions (CLOSED, 6 comments, 2 👍).
        *   #9255: TuiMainScreen: full-screen redraw storm when changed rows sit above the viewport top (OPEN, 6 comments, 1 👍).
        *   #6415: Move `lastChangelogVersion` from Config file (CLOSED, 4 comments, 2 👍).
        *   #9759: node-domexception deprecation warning on every install (CLOSED, 3 comments).
        *   #9358: docs(tui): document Component.invalidate() as required (CLOSED, 3 comments).
        *   #9205: examples/rpc-extension-ui.ts passes non-existent --no-extension flag (CLOSED, 3 comments).
        *   #9884: Availability passes cancel each other, silently replacing the configured default model at startup (OPEN, 3 comments).
        *   #9784: Meta-Issue: Allow extensions to access vendor-specific fields in response bodies (OPEN, 3 comments).
        *   #9820: Extremely inefficient session listing for information gathering (CLOSED, 3 comments).
        *   #9388: grep misses cancellation during async setup and context reads (CLOSED, 3 comments).
        *   #8712: sendCustomMessage triggerTurn wake skips before_agent_start (CLOSED, 3 comments).
        *   #9918: Codex replays empty signed final answers (CLOSED, 2 comments).
        *   #5024: Add an uninstall hook to cleanup extension directories (CLOSED, 2 comments, 1 👍).
        *   #9917: Contribution proposal: update Claude Code version to 2.1.280 for Opus 5.5 (CLOSED, 2 comments).
        *   #9874: Skills manifest silently omitted from the system prompt when no tool named read/bash is active (OPEN, 2 comments).
        *   #9808: skills settings filter: "-vue*" silently matches nothing (CLOSED, 2 comments).
        *   #8717: get_commands returns sourceInfo, docs say path/location (CLOSED, 2 comments).
        *   #9906: Footer shows pay-as-you-go cost for subscription-backed API-key providers without (sub) label (CLOSED, 2 comments).
        *   #9905: Anthropic: thinking.display is always sent as "summarized" and the CLI offers no way to change it (CLOSED, 2 comments).
        *   #9885: Missing thinkingLevelMap for opencode-go muse-spark-*-contributor (openai-responses) — xhigh/max unreachable (CLOSED, 2 comments).
        *   #9904: Decouple auto-compaction threshold from reserveTokens (CLOSED, 2 comments).
        *   #4129: Add ratio-based auto-compaction trigger (CLOSED, 2 comments, 1 👍).
    *   **Latest PRs (top 20 by comments/activity)**:
        *   #9926: feat(coding-agent): add custom provider display names (CLOSED).
        *   #9924: Don't render a fake cursor when `showHardwareCursor` is `true` (CLOSED).
        *   #8398: feat: add color values and theme styling (OPEN).
        *   #9569: fix(ai): coerce JSON-encoded object and array tool arguments (OPEN).
        *   #9921: feat(coding-agent): add enableShareCommand setting to disable /share (CLOSED).
        *   #9920: fix(ai): omit empty Codex final answers from replay (CLOSED). Fixes #9918.
        *   #9916: Update Claude Code version to 2.1.280 (CLOSED).
        *   #7801: feat(coding-agent): lazily load uncommon syntax grammars (CLOSED).
        *   #7548: fix(coding-agent): sandbox issue analysis tools (CLOSED).
        *   #7148: feat(coding-agent): Experimental loadout management (CLOSED).
        *   #9914: fix(coding-agent): remove packages configured with relative local paths (CLOSED).
        *   #9889: fix(coding-agent): align manifest resource discovery (OPEN).
        *   #9908: fix(coding-agent): avoid Fable split-turn summary refusals (CLOSED). Fixes #9652.
        *   #9901: feat: expose provider stream events to extensions (OPEN).
        *   #9898: docs(coding-agent): refresh documentation (CLOSED).
        *   #9907: fix(ai): omit blank tool-call names on replay (CLOSED).
        *   #9878: feat(codex) Codex protocol alignment (OPEN).
        *   #9902: fix(coding-agent): preserve thinking levels across model switches (CLOSED).
        *   #9880: feat(coding-agent): publish configuration schemas (OPEN).
        *   #9888: fix(ai): fall back to exponential backoff for malformed retry-after (CLOSED).

3.  **Drafting the Sections**:

    *   **1. 今日速览 (Today's Overview)**:
        *   Summarize the core events of the day (mostly around Sept 22-23 updates).
        *   Key highlights: Release of `v0.87.1` bringing frontier models (Claude Opus 5.5, GPT-6 Sol/Luna, Grok 4.7). High activity on fixing regressions introduced in 0.86.x (such as RPC steering correlation and LiteLLM connection errors) and improving TUI performance/rendering efficiency.

    *   **2. 版本发布 (Version Releases)**:
        *   `v0.87.1` released.
        *   Key features:
            *   Support for latest frontier models: Claude Opus 5.5, GPT-6 Sol, GPT-6 Luna (available via GitHub Copilot and other providers).
            *   Grok 4.7 is now the default model.
            *   Mention the documentation update for choosing models.

    *   **3. 社区热点 Issues (Top 10 Key Issues)**:
        *   Need to select 10 of the most impactful ones (based on comments, likes, and technical importance).
        *   *Issue 1*: #9843 (Regression in 0.86.x: mid-stream APIConnectionError via LiteLLM). Why: Affects users using OpenAI-compatible providers, critical for stability. (OPEN, 10 comments)
        *   *Issue 2*: #9803 (Regression in 0.86.0: RPC steer success cannot be correlated with extension-handled input). Why: Crucial for RPC clients and extension developers. (OPEN, 10 comments)
        *   *Issue 3*: #9652 (Compaction refused by Anthropic Claude Fable due to transcribed thinking blocks). Why: Affects core compaction workflow with Anthropic models. (CLOSED, 7 comments, 2 👍)
        *   *Issue 4*: #9549 (Large transcripts re-render every frame; resize re-emits whole transcript). Why: Severe performance bottleneck on low-core machines. (OPEN, 7 comments)
        *   *Issue 5*: #9052 (Fullscreen mode wheel scrolling is 3x slower). Why: Affects TUI usability in fullscreen mode. (CLOSED, 10 comments, 6 👍)
        *   *Issue 6*: #8684 (`PI_OFFLINE` silently disables all provider model discovery). Why: Documented behavior mismatch, breaks offline model selection. (CLOSED, 12 comments)
        *   *Issue 7*: #7885 (npm search not indexing newly published pi-packages). Why: Blocks package distribution and gallery integration. (CLOSED, 12 comments)
        *   *Issue 8*: #9255 (TuiMainScreen: full-screen redraw storm). Why: Visual glitch and performance issue on long transcripts. (OPEN, 6 comments, 1 👍)
        *   *Issue 9*: #9690 (OpenCode Zen rejects Pi session IDs). Why: Integration issue with OpenCode provider. (CLOSED, 6 comments, 2 👍)
        *   *Issue 10*: #9884 (Availability passes cancel each other, replacing default model). Why: Startup configuration race condition. (OPEN, 3 comments)
        *   *Alternative/Bonus*: #9784 (Meta-Issue: Allow extensions to access vendor-specific fields). Highly important for extension ecosystem. Let's include this one instead of maybe a less critical one, or keep the list strictly to the top 10 most impactful ones based on the prompt's instruction ("挑选 10 个最值得关注的 Issue"). Let's stick to the top 10 by impact/comments:
            1. #8684 (PI_OFFLINE undocumented behavior)
            2. #7885 (npm search indexing issue)
            3. #9843 (LiteLLM regression)
            4. #9803 (RPC steer regression)
            5. #9052 (Fullscreen scroll performance)
            6. #9652 (Compaction refused by Claude Fable)
            7. #9549 (Large transcript rendering performance)
            8. #9815 (Mistral Retry-After ignore)
            9. #9255 (TuiMainScreen redraw storm)
            10. #9784 (Vendor-specific fields in extension API) or #9884 (Availability pass race). Let's go with #9784 as it's a meta-issue affecting extensibility. Let's write down the top 10 clearly.

    *   **4. 重要 PR 进展 (Top 10 Key PRs)**:
        *   Select 10 important PRs.
        *   *PR 1*: #9920 (fix(ai): omit empty Codex final answers from replay). Fixes #9918.
        *   *PR 2*: #9908 (fix(coding-agent): avoid Fable split-turn summary refusals). Fixes #9652.
        *   *PR 3*: #9916 (Update Claude Code version to 2.1.280). Required for Opus 5.5.
        *   *PR 4*: #9926 (feat(coding-agent): add custom provider display names). Enhances UI customization.
        *   *PR 5*: #9921 (feat(coding-agent): add enableShareCommand setting). Security/Privacy enhancement.
        *   *PR 6*: #9902 (fix(coding-agent): preserve thinking levels across model switches). Usability improvement.
        *   *PR 7*: #9569 (fix(ai): coerce JSON-encoded object and array tool arguments). Robustness fix.
        *   *PR 8*: #8398 (feat: add color values and theme styling). Major TUI refactor for future UI extensibility.
        *   *PR 9*: #9901 (feat: expose provider stream events to extensions). Extensibility enhancement.
        *   *PR 10*: #9880 (feat(coding-agent): publish configuration schemas). Developer experience / tooling.
        *   Let's write summaries for these 10.

    *   **5. 功能需求趋势 (Feature Demand Trends)**:
        *   Extracted from the issues:
            *   **模型支持与配置 (Model Support & Configuration)**: Frontier models (Opus 5.5, GPT-6), model availability race conditions (#9884), thinking level maps for new providers (#9885), vendor-specific fields (#9784).
            *   **性能与渲染优化 (Performance & Rendering)**: TUI redraw storms (#9255, #9549), fullscreen scrolling performance (#9052), session listing efficiency (#9820).
            *   **扩展性与 API 契约 (Extensibility & API Contracts)**: Extension access to raw response fields (#9784), provider stream events (#9901), configuration schemas (#9880), uninstall hooks (#5024).
            *   **稳定性与回归修复 (Stability & Regression Fixes)**: LiteLLM connection errors (#9843), RPC steering correlation (#9803), retry-after parsing (#9815, #9888), offline mode behavior (#8684).
            *   **生态与文档 (Ecosystem & Docs)**: npm indexing (#7885), documentation accuracy (#9358, #9205, #8717).

    *   **6. 开发者关注点 (Developer Pain Points & High-frequency Demands)**:
        *   Summarize the core pain points expressed by the community:
            *   **TUI 渲染性能瓶颈**：长 transcript 场景下的全屏重绘与滚动性能问题依然是痛点，低配置 CPU 占用严重。
            *   **API 兼容性与稳定性**：特别是通过 LiteLLM 等代理时的异常中断（#9843），以及不同供应商模型的特有字段支持（#9784）。
            *   **离线模式行为不一致**：`PI_OFFLINE` 的实际作用超出了文档范围，静默关闭了模型发现，给开发者带来困惑。
            *   **配置与扩展管理**：如包卸载钩子（#5024）、配置 Schema 化（#9880）、扩展加载资源对齐（#9889）等，表明社区在规范化管理上持续投入。
            *   **文档与示例修正**：多处文档与实际行为不符（如 `get_commands` 字段、`Component.invalidate()`、`--no-extension` flag），开发者对此类细节非常敏感。

4.  **Refining Language and Formatting**:
    *   Ensure the tone is professional, objective, and structured like a tech analyst report.
    *   Use Markdown formatting (bolding, lists, links).
    *   Translate technical terms accurately (e.g., "compaction" -> 上下文压缩/整理, "RPC steer" -> RPC 控制/ steer 指令, "transcript" -> 对话记录/ transcript).
    *   Check dates: The prompt asks for "2026-09-23 的 Pi 社区动态日报", but the data updates are mostly up to "2026-09-22". I will frame it as the daily report summarizing the latest activity leading up to Sept 23 (or the report published on Sept 23 summarizing recent 24h updates).

Let's double-check the exact details of the release:
- v0.87.1: "Latest frontier models — Use Claude Opus 5.5, GPT-6 Sol, and GPT-6 Luna through supported providers, including GitHub Copilot. See Choose a Model. Grok 4.7 by default..."

Let's double-check the PRs:
- #9926: custom provider display names in models.json.
- #9924: fake cursor when showHardwareCursor is true.
- #8398: color values and theme styling.
- #9569: coerce JSON-encoded object and array tool arguments.
- #9921: enableShareCommand setting.
- #9920: omit empty Codex final answers from replay.
- #9916: Update Claude Code version to 2.1.280.
- #7801: lazily load uncommon syntax grammars.
- #7548: sandbox issue analysis tools.
- #7148: Experimental loadout management.
- #9914: remove packages configured with relative local paths.
- #9889: align manifest resource discovery.
- #9908: avoid Fable split-turn summary refusals.
- #9901: expose provider stream events to extensions.
- #9898: refresh documentation.
- #9907: omit blank tool-call names on replay.
- #

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>



# Qwen Code 社区动态日报 (2026-09-23)

作为 AI 开发工具的技术分析师，以下是为您整理的 Qwen Code 社区在过去 24 小时内的核心动态、版本更新、社区热点及开发趋势。

---

### 1. 今日速览

*   **版本迭代与桌面端更新**：Qwen Code 发布了 `v0.24.4` 稳定版、`v0.24.5-preview.0` 预览版以及桌面端 `desktop-v0.24.4`。核心更新聚焦于系统提示词工具引导（如新增 `monitor` 工具）、延迟工具桥接（Deferred-tool bridge）修正，以及 `/review` 覆盖率计算的逻辑优化。
*   **社区热点向多代理与沙箱安全集中**：社区讨论热点主要集中在 Managed Agent 双路径架构提案（#12380）、工具执行沙箱安全加固（#12417），以及 MCP 连接稳定性和 Linux 剪贴板兼容性等实际使用痛点上。
*   **关键 PR 推动工程化与性能**：多个重要 PR 进入审查阶段，包括混合代码模式（Hybrid Code Mode）引入、扩展加载性能并行化，以及针对 Linux 剪贴板静默失败和 ACP 桥接崩溃的防御性修复。

---

### 2. 版本发布

#### `v0.24.5-preview.0` & `v0.24.4`
*   **核心特性**：在系统提示词引导中加入了 `monitor` 工具支持，增强 Agent 运行时的可观测性。
*   **核心修复**：修正了延迟工具桥接（deferred-tool bridge）中导致文档或测试过时/未覆盖的逻辑。
*   **破坏性变更**：无已知破坏性变更。

#### `desktop-v0.24.4` (Qwen Code Desktop)
*   **核心修复**：优化了 `/review` 技能的覆盖率逻辑，排除了计划外的 chunk，并确保分母从计划（plan）中正确读取，避免误报。

---

### 3. 社区热点 Issues（Top 10）

以下是过去 24 小时内评论和关注度最高的 Issue，涵盖了架构提案、稳定性 Bug 和易用性痛点：

| Issue 编号 | 标题 / 核心问题 | 优先级 | 为什么重要？ | 社区反应与链接 |
| :--- | :--- | :--- | :--- | :--- |
| **#12449** | TUI 在行数收缩时吞掉一行转录（移动端软键盘/Termux） | P3 / Bug

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



# 2026-09-23 DeepSeek TUI (Codewhale) 社区动态日报

> **背景说明**：项目已进入重大重构阶段，自 v0.10.0 起，产品名称逐步由 `deepseek-tui` 过渡至 **Codew

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

Thinking Process:

1.  **Understand the Goal**: The user wants a daily report (dated 2026-09-23) for the ComfyUI community based on provided GitHub data (Issues, Pull Requests, Releases). The report must be in Chinese, structured into specific sections, concise, professional, and targeted at technical developers.

2.  **Analyze the Input Data**:
    *   **Date of report**: 2026-09-23 (based on the prompt's context "生成 2026-09-23 的 ComfyUI 社区动态日报").
    *   **Releases**: None in the past 24 hours ("无").
    *   **Issues (25 total, need to select top 10 most notable)**:
        *   `#14824` [CLOSED/Stale] Native INT8 ConvRot slower than FP8 on A100 (Torch 2.10 + cu130) - Performance tuning, specific to A100.
        *   `#15452` [OPEN] Dynamic VRAM: reused (warm) model produces NaN/black output on VAE decode, fresh load does not - Critical bug (Dynamic VRAM memory reuse corruption).
        *   `#15639` [CLOSED] Ctrl-S is now Browser-Save instead of Workflow-Save - UX issue (shortcut conflict).
        *   `#16433` [OPEN] Qwen-Image-2.1 VAE encode is broken on MPS (encode→decode round-trip returns 6.6 dB PSNR, silently corrupting image-edit workflows) - Critical bug for Mac/MPS users using Qwen.
        *   `#16443` [OPEN] [Qwen Image 2.1] Hard crash in prefetch/staging-buffer path on Windows multi-GPU (Fatal Python error: Aborted) - Critical crash on Windows multi-GPU.
        *   `#16441` [OPEN] [Potential Bug] Qwen3-VL Generate Text aborts with "scatter gather kernel index out of bounds" on the second generate() - Bug in text generation caching/state.
        *   `#16357` [CLOSED] the lastest version error - Loading error with MiniMaxH3 (dynamic VRAM).
        *   `#16390` [OPEN] [Potential Bug] Minimax H3 VAE encode issue on xpu on ComfyUI v0.36.0 - XPU support bug.
        *   `#15609` [CLOSED/Stale] HTTP interface call v0.33 - API interface query.
        *   `#15671` [OPEN/Stale] Minimax Music 3 degrades audio at ~3 seconds - Audio model bug.
        *   `#16447` [OPEN] [Potential Bug] Qwen-Image 2.1: default sampling uses a fixed mu=0.69 for every resolution, so the out-of-the-box schedule no longer matches the model's published dynamic-shift scheduler - Technical correctness issue (sampling schedule mismatch).
        *   `#16449` [CLOSED] v0.37.0: Qwen text generation calls comfy-kitchen flash_attention_decode although the CUDA backend is disabled on torch < cu130 - Backend routing bug.
        *   `#16472` [OPEN] [Potential Bug] Qwen 2.1 failed to load clip - Loading issue (related to empty comfy_quant marker, fixed in PR #16474).
        *   `#16470` [OPEN] [Potential Bug] Qwen 2.1: Int8_convrot.safetensors model is much slower than Q8 gguf (0.37.0) - Performance comparison/regression.
        *   `#15878` [OPEN/Stale] ROCm + RX 6600 XT: Anima extremely slow - AMD ROCm performance issue.
        *   `#16458` [OPEN] supports_int8_compute() disables native INT8 on MPS unconditionally — torch._int_mm has been implemented for MPS since Aug 14 2026 - MPS INT8 support restriction.
        *   `#16339` [OPEN] Ryzen AI MAX+ 395 / Radeon 8060S (gfx1151): ROCr AsyncEventsLoop consumes 100% of one CPU core after GPU workloads - CPU core hogging bug on ROCr.
        *   `#16455` [OPEN] [Potential Bug] Qwen Image 2.1 Prompt Expander fails with `deltanet_conv_step launch rejected` on RTX 4090 / Driver 570, but works on L40S / Driver 580 - Driver-specific kernel launch failure.
        *   `#16468` [OPEN] MiniMax H3 Fun ControlNet aborts natively on GB10 (sm_121) with comfy-kitchen 0.2.35 - New hardware (GB10) crash.
        *   `#16465` [OPEN] SeedVR2: Abnormal performance fluctuation between versions / drivers - Performance instability.
        *   `#16463` [OPEN] QwenImage21Cache device=cpu/auto leaves WDDM shared GPU memory mapped until process restart (Windows, Intel XPU) - Memory leak on Windows/XPU.
    *   *Selection of Top 10 Issues*:
        1.  `#15452` (Dynamic VRAM NaN/black output on VAE decode - crucial stability issue).
        2.  `#16433` (Qwen-Image-2.1 VAE broken on MPS - Mac users image edit corruption).
        3.  `#16443` (Qwen Image 2.1 hard crash on Windows multi-GPU).
        4.  `#16441` (Qwen3-VL Generate Text index out of bounds on second generate).
        5.  `#16447` (Qwen-Image 2.1 sampling schedule mismatch with dynamic-shift).
        6.  `#16470` (Qwen 2.1 Int8_convrot much slower than Q8 gguf).
        7.  `#16339` (Ryzen AI MAX+ 395 ROCr AsyncEventsLoop 100% CPU core consumption).
        8.  `#16463` (QwenImage21Cache WDDM shared GPU memory mapped till restart on Windows Intel XPU).
        9.  `#16455` (Qwen Image 2.1 Prompt Expander fails on RTX 4090 / Driver 570).
        10. `#16458` (supports_int8_compute() disables native INT8 on MPS unconditionally).
    *   **Pull Requests (45 total, show top 20 by comments, select top 10 most important)**:
        *   `#16480` [OPEN] Take the SQLite write lock up front for asset scan and output-registration writes (Database lock fix).
        *   `#16368` [OPEN] chore(openapi): sync shared API contract from cloud@8ad667f (API spec sync).
        *   `#16481` [OPEN] Drain the device before unpinning prefix-cache host memory (Memory management fix for Qwen-Image 2.1 prefix K/V cache).
        *   `#16479` [OPEN] [Partner Nodes] feat(Anthropic): add Claude Opus 5.5 to the Claude node (Partner node update).
        *   `#16117` [OPEN] fix: restore ability to open workflow from jobs (Queue workflow open fix).
        *   `#16393` [OPEN] fix(assets): harden the asset catalogue's failure paths (Asset system robustness).
        *   `#16478` [OPEN] [Partner Nodes] feat(Quiver): add Arrow 2 models with reasoning effort widget (Partner node update).
        *   `#16467` [CLOSED] ComfyUI backport release v0.37.1 (Backport release summary).
        *   `#16391` [OPEN] Fix MiniMax H3 VAE attention qk_norm_scale device mismatch on non-CUDA backends (Fixes XPU crash).
        *   `#16477` [OPEN] Prevent conditioning fill from indexing empty regional destinations (Conditioning bug fix).
        *   `#16474` [OPEN] Fix JSONDecodeError when a layer's comfy_quant marker is empty (Fixes Qwen 2.1 CLIP loading failure #16472).
        *   `#16476` [OPEN] Fix stale Qwen3-VL generation cache state (Fixes text generation index out of bounds #16441).
        *   `#16446` [OPEN] Fix Qwen Image PEFT LoRA mapping (Lora loading fix).
        *   `#16471` [CLOSED] MiniMax-H3: Support Fun-Controlnet-Union 2.0 (CORE-462) (New model support).
        *   `#16442` [CLOSED] TextGenerate: Add system_prompt input and separate thinking output (CORE-460) (Text generation enhancement).
        *   `#16417` [OPEN] Add a node which enables safe passthrough behavior (Feature: None passthrough node).
        *   `#16444` [CLOSED] Fix Qwen image edit noise at 1024px (Fixes 1024px noise bug).
        *   `#16377` [OPEN] fix: preserve dynamic input validation and lazy execution (Execution engine fix).
        *   `#16425` [CLOSED] Fast disk detection to all model loaders. (Performance/UX optimization).
        *   `#16473` [OPEN] Add optional ROCmFPX Qwen text encoders (ROCm support expansion).
    *   *Selection of Top 10 PRs*:
        1.  `#16467` (v0.37.1 backport release - shows current stable patch status).
        2.  `#16481` (Prefix-cache host memory pinning fix - important memory stability for Qwen).
        3.  `#16474` (Fix JSONDecodeError for comfy_quant - fixes Qwen clip loading).
        4.  `#16476` (Fix stale Qwen3-VL generation cache state - fixes generate crash).
        5.  `#16391` (Fix MiniMax H3 VAE device mismatch on XPU/ROCm).
        6.  `#16480` (SQLite write lock up front for asset scan - concurrency fix).
        7.  `#16444` (Fix Qwen image edit noise at 1024px).
        8.  `#16442` (TextGenerate: system_prompt and thinking output).
        9.  `#16473` (Add optional ROCmFPX Qwen text encoders - AMD support).
        10. `#16377` (preserve dynamic input validation and lazy execution).

3.  **Drafting the Sections**:

    *   **1. 今日速览 (Today's Overview)**:
        *   ComfyUI community activity today is focused heavily on **Qwen Image 2.1 and MiniMax H3** model support, particularly addressing stability, hardware compatibility (MPS, XPU, ROCm, Windows multi-GPU), and performance issues.
        *   Key development efforts are directed towards backporting fixes in v0.37.1, resolving memory-related crashes (Dynamic VRAM, prefix cache pinning), and enhancing partner nodes (Claude, Quiver).

    *   **2. 版本发布 (Releases)**:
        *   Past 24 hours saw no official new releases, but PR #16467 closed the **v0.37.1 backport release**, cherry-picking critical fixes (like Hunyuan nodes and workflow templates) to the v0.37 branch. (Mention this as a key version activity).

    *   **3. 社区热点 Issues (Top 10 Hot Issues)**:
        *   Focus on the 10 selected. For each, state the title, number, link, why it's important (e.g., core workflow corruption, specific hardware support), and community reaction (mostly 0 thumbs up but high technical relevance, some have active dev responses or linked PRs).
        *   *Drafting details for the 10 selected issues*:
            *   `#15452` Dynamic VRAM reused model NaN/black output. Crucial for users utilizing dynamic VRAM to save memory.
            *   `#16433` Qwen-Image-2.1 VAE broken on MPS (Mac). Crucial for Mac/Metal users doing image editing.
            *   `#16443` Qwen Image 2.1 hard crash on Windows multi-GPU. High severity crash.
            *   `#16441` Qwen3-VL Generate Text index out of bounds on second run. Critical text gen bug.
            *   `#16447` Qwen-Image 2.1 sampling schedule mismatch (fixed mu=0.69). Affects out-of-the-box generation quality/consistency.
            *   `#16470` Qwen 2.1 Int8_convrot slower than Q8 gguf. Performance regression concern.
            *   `#16339` Ryzen AI MAX+ 395 ROCr CPU core 100% hog. Serious performance issue on AMD APUs.
            *   `#16463` Windows Intel XPU WDDM memory leak till restart. Memory management bug.
            *   `#16455` Qwen prompt expander fails on RTX 4090 / Driver 570. Driver-specific kernel issue.
            *   `#16458` MPS INT8 disabled unconditionally despite torch support. Optimization restriction on Mac.

    *   **4. 重要 PR 进展 (Top 10 Important PRs)**:
        *   Focus on the 10 selected. Describe the fix or feature.
        *   *Drafting details*:
            *   `#16467` v0.37.1 backport release (stable branch patching).
            *   `#16481` Drain device before unpinning prefix-cache host memory (fixes potential memory corruption/crashes in Qwen-Image 2.1).
            *   `#16474` Fix JSONDecodeError on empty comfy_quant marker (fixes Qwen 2.1 clip loading #16472).
            *   `#16476` Fix stale Qwen3-VL generation cache state (fixes CUDA index out of bounds #16441).
            *   `#16391` Fix MiniMax H3 VAE device mismatch on XPU/ROCm (fixes #16390).
            *   `#16480` SQLite write lock up front for asset scan (fixes database is locked under `--enable-assets`).
            *   `#16444` Fix Qwen image edit noise at 1024px (fixes latent grid issue).
            *   `#16442` TextGenerate: Add system_prompt and separate thinking output (CORE-460).
            *   `#16473` Add optional ROCmFPX Qwen text encoders (AMD ROCm support).
            *   `#16377` preserve dynamic input validation and lazy execution (execution engine correctness).

    *   **5. 功能需求趋势 (Feature Request Trends)**:
        *   Extract from issues/PRs:
            *   **New Model & Hardware Support**: Heavy focus on Qwen Image 2.1, MiniMax H3, and hardware backends: MPS (Mac), XPU (Intel), ROCm (AMD, Ryzen AI), GB10 (NVIDIA DGX Spark/ARM).
            *   **Performance & Stability under Dynamic VRAM**: Many issues revolve around memory reuse causing NaNs (#15452) or CPU core hogging (#16339).
            *   **Developer/Partner Ecosystem Integration**: PRs adding Anthropic Claude Opus 5.5 (#16479) and Quiver Arrow 2 (#16478), API contract sync (#16368).
            *   **Workflow & UX Enhancements**: Safe passthrough `None` node (#16417), workflow opening from jobs (#16117).

    *   **6. 开发者关注点 (Developer Pain Points & High-frequency Demands)**:
        *   *Backend fragmentation*: PyTorch versions (cu128 vs cu130), CUDA backend vs comfy-kitchen flash attention conflicts (e.g. #16449).
        *   *Precision/Quantization performance*: INT8 ConvRot performance on A100 (#14824), INT8 on MPS (#16458), Qwen Int8 vs Q8 GGUF speed (#16470).
        *   *Memory management complexity*: Dynamic VRAM bugs, prefix cache pinning, WDDM memory leaks on Windows.
        *   *API and Node customization*: Requests for `system_prompt` separation, normalized attention guidance, and None passthrough.

4.  **Refine Language and Tone**:
    *   Make it sound like a professional technical analyst report.
    *   Use clear formatting (bullet points, bold text).
    *   Ensure all links are correctly formatted markdown pointing to the GitHub issues/PRs.
    *   Keep descriptions concise but technically accurate based on the summaries provided.

Let's double-check the date: 2026-09-23. The data shows updates mostly on 2026-09-22, which fits a daily report for the 23rd (summarizing

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>



以下是根据您提供的 GitHub 数据生成的 **2026-09-23 Ollama 社区动态日报**。本报告旨在为 AI 开发工具的技术决策者、开发者和社区贡献者提供精炼的战术级情报。

---

# 📊 Ollama 社区动态日报 (2026-09-23)

### 1. 今日速览
今日 Ollama 社区活跃度极高，但**无新版本发布**。社区焦点主要集中在**多模态能力升级（特别是 Gemma 4 的视觉 token 预算优化）、思考模型与结构化输出的深度融合，以及桌面端 UI 稳定性修复**。开发者社区对 API 兼容性（如 Claude Code 集成）和推理性能优化（CUDA 回归、GPU 显存分配）保持高度关注。

---

### 2. 版本发布
*   **无新版本发布**：过去 24 小时内，Ollama 官方未发布新的 Release 版本。当前社区讨论主要围绕 v0.34.x 系列的 bug 修复和 v0.33.x 的性能回归展开。

---

### 3. 社区热点 Issues（Top 10）
本日挑选了 10 个最具技术影响力、社区讨论热度最高的 Issue，涵盖了核心功能阻塞、多模态扩展和性能回归：

*   **🔥 #17778 - Qwen 3.8 流式聊天 500 错误："no user query found in messages"**
    *   **重要性**：核心功能阻塞。用户在使用 Qwen 3.8 进行大上下文（200k）工具调用循环时，API 突然抛出 500 错误，中断了 Agentic 工作流。
    *   **社区反应**：44 条评论，26 个 👍。表明这是一个高频且难以规避的严重 Bug。
    *   [链接](https://github.com/ollama/ollama/issues/17778)

*   **🔥 #11798 - 为多模态模型添加音频输入支持（Feature Request）**
    *   **重要性**：生态扩展方向。当前 Ollama 仅支持图像输入，社区强烈呼吁像支持图像一样支持音频输入（如 Qwen2-Audio），以解锁真正的全模态能力。
    *   **社区反应**：40 个 👍，15 条评论。高票需求，未来版本的重要风向标。
    *   [链接](https://github.com/ollama/ollama/issues/11798)

*   **🔥 #15626 - 将 Gemma 4 的 `max_soft_tokens`（图像 token 预算）暴露为运行时参数**
    *   **重要性**：多模态精度控制。Gemma 4 的视觉编码器支持可变分辨率，但当前硬编码为 280 tokens，导致高分辨率图像的 OCR 效果极差。
    *   **社区反应**：28 个 👍。已关闭（有 PR 跟进），但体现了社区对精细控制视觉输入的强烈需求。
    *   [链接](https://github.com/ollama/ollama/issues/15626)

*   **#10333 - CLI 中拖入图像时路径识别错误（CLI Path Bug）**
    *   **重要性**：CLI 易用性痛点。拖拽包含空格和特殊字符（如 `\ `、`~`）的 macOS 路径时，CLI 无法正确解析。
    *   **社区反应**：24 条评论。长期存在的经典 Issue，影响 CLI 用户的日常提词效率。
    *   [链接](https://github.com/ollama/ollama/issues/10333)

*   **#13949 - Ollama API 与 Claude Code / Anthropic CLI 的兼容性问题**
    *   **重要性**：Agent 集成关键。用户在 Docker + Traefik 环境下，使用 Claude Code CLI 调用 Ollama 的 `/v1/messages` 端点时出现兼容性报错。
    *   **社区反应**：10 条评论，3 个 👍。随着 Claude Code 的流行，Anthropic 兼容层的稳定性至关重要。
    *   [链接](https://github.com/ollama/ollama

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

Thinking Process:

1.  **Understand the Goal**: The user wants a structured Chinese daily report for the llama.cpp community on GitHub, dated 2026-09-23, based on the provided data (releases, issues, PRs). The persona is a technical analyst focused on AI development tools.

2.  **Analyze the Input Data**:
    *   **Date**: 2026-09-23 (reporting on the past 24 hours, data updated up to 2026-09-22).
    *   **Releases**: b11115 down to b11104, and b11105, b11108, b11109, b11110, b11111, b11112, b11113, b11114, b11115.
        *   Key highlights:
            *   b11115: opencl: add bin kernel `kernel_gemm_noshuffle_q4_k_q8_1_dp4a_ila_a8_bin` (#29056)
            *   b11114: server: fix router eviction races with the existing queue (#29217)
            *   b11113: server: do not pass log file to children (#29212)
            *   b11112: server: support input_image in function_call_output (#20663) (#22575)
            *   b11111: vulkan: add Intel Xe flash attention optimization kernels (2/3, Xe-LPG Plus/Xe2/Xe3) (#24406)
            *   b11110: mtmd: add various sanity checks (#29276)
            *   b11109: metal: gate mul_mm_id src1 rescale behind ggml_prec (#29029); ggml-webgpu/cuda/vulkan reject MUL_MAT_ID when src1 precision is F32
            *   b11108: ggml: IQ1_M build prefix sums once per block (#28706)
            *   b11105: jinja: use const for statement::execute and ::visit (#29271)
            *   b11104: server: Add support for binding to multiple addresses (#28690)
    *   **Issues (Top 30 by comments)**:
        *   #25618: Eval bug: Speculative decoding diverges from vanilla on quantized targets (25 comments, 2 👍) - important because it affects core inference logic (speculative decoding vs quantization).
        *   #20697: Feature Request: Disk-based context checkpoint offloading (`--cache-disk`) (21 comments, 56 👍) - high popularity (56 likes), very requested feature.
        *   #20176: Eval bug: Qwen 3.5 Loading checkpoints causes a crash (18 comments, 1 👍) - critical crash bug on loading.
        *   #20663: Eval bug: qwen3.5 + codex - unable to view images (15 comments, 9 👍) - multimodal bug.
        *   #21545: server: Add model capabilities information (instruction, embedding etc.) (12 comments, 2 👍) - server enhancement.
        *   #28752: Severe drop in prompt processing speed after b10780 on Vulkan, RDNA3 (11 comments, 2 👍) - performance regression.
        *   #27428: draft-mtp roughly halves prompt processing on multi-GPU layer split (6 comments, 2 👍).
        *   #28734: qwen4exp CUDA decode slows linearly with context (6 comments).
        *   #28581: IQ3_S produce garbage on RTX 5060TI 15gb (Blackwell GPU) (6 comments).
        *   #29104: server silently stops processing when /metrics endpoint is scraped by VictoriaMetrics (6 comments).
        *   #28158: Qwen3.8 DFlash/MTP speculative emits OOB token id == n_vocab on Vulkan (6 comments).
        *   #27076: ggml_vulkan: device lost on Vulkan0 (5 comments, 5 👍).
        *   #29091: /v1/models metadata serializes "vocab_type" as boolean true instead of integer enum (5 comments).
        *   #26257: Qwen3.6-27B garbled output on dual-GPU CUDA (5 comments).
        *   #27257: Compile bug: Level Zero loader or headers not found (5 comments).
        *   #24090: WebUI - Projects / Folders for Conversations (4 comments, 13 👍) - popular feature request (13 likes).
        *   #26549: Missing Lightning Indexer and HC Fused Ops with DS4F on Intel B70 (SYCL) (4 comments).
        *   #26765: TENSOR_SKIP on MTP block triggers "unused tensor" warnings (4 comments).
        *   #27009: CUDA graphs for multi-slot decode via shape-stable padded u (4 comments).
        *   #29288: Openvino cannot run gemma on intel core 7 155h (3 comments).
        *   #27796: ggml-hip: quantized KV cache decodes slower than f16 on RDNA4 (3 comments).
        *   #29188: SIGSEGV in token-counting routes when request arrives while server sleeping (3 comments).
        *   #29240: Muse Glimmer unparsed peg-negative output (3 comments).
        *   #23948: server file upload API (3 comments).
        *   #25835: VRAM leak with CUDA Graphs on V100 (3 comments).
        *   #26435: HIP/ROCm: Regression in prompt processing MI210 (3 comments).
        *   #26837: 3 GPU with tensor crashes (3 comments).
        *   #29093: Vulkan qwen4exp Image Multimodality Seems Broken (2 comments).
        *   #28843: Vulkan: retune coopmat/MMQ tiles for RDNA3.5 / Strix Halo prefill (2 comments).
        *   #25333: Built-in tools do not work when llama-server is running in router mode (2 comments).
    *   **PRs (Top 20 by comments/updates)**:
        *   #29210: hexagon: optimize FA DMA mask cache (closed)
        *   #29282: hex-dma: introduce direct-mapped DMA cache (open)
        *   #29060: Update embeddings server: return HTTP 400 for invalid embedding requests (open)
        *   #29291: server: treat stray media markers in chat text as literal text (open)
        *   #29290: qwen35: support d2t draft-vocab trim for MTP draft models (open)
        *   #29151: model: add Ling 3.0 VL support (open)
        *   #29137: cuda: add conv3d with implicit GEMM (open)
        *   #26631: ggml: allow MUL_MAT_ID -1 index to skip computation (open)
        *   #27372: tests: add `-b/--backend` option to test-llama-archs (open)
        *   #29057: opencl: add bin kernel `kernel_gemm_noshuffle_q6_k_q8_1_dp4a_ila_a8_bin` (open)
        *   #29280: vulkan: reuse descriptor sets when bindings are constant (open)
        *   #27962: HIP: optimize IQ2/IQ3 using SWAR (closed)
        *   #26404: CUDA: FA support for head size 192/128 with GQA ratios not multiples of 8 (open)
        *   #29287: RPC: multiple graphs cache (open)
        *   #29283: rpc: include nb in the get_alloc_size cache key (open)
        *   #29286: llama: sanity check for dflash n_embd_inp_enc and qwen4 ple_n_heads (open)
        *   #23787: common: fix HTTPS handshake on Windows, harden HTTP client (open)
        *   #29279: jinja: fix dangling reference warning in for_statement (closed)
        *   #28968: llama-bench: add --repack switch option (open)
        *   #29272: docs: add Russian README translation (open)

3.  **Drafting the Report Structure**:

    *   **Title**: 2026-09-23 llama.cpp 社区动态日报 (llama.cpp Community Daily Report)
    *   **1. 今日速览 (Today's Overview)**:
        *   Summarize key developments: Multiple releases (b11104 to b11115) focusing on server stability (router queue, multi-address binding), backend optimizations (OpenCL binary kernels, Vulkan Intel Xe FA, Metal precision gating), and multimodal support (input_image in function_call_output).
        *   Community focus: High demand for disk caching (`--cache-disk`) and WebUI enhancements, while bug reports highlight performance regressions on Vulkan/CUDA and issues with Qwen series models.
    *   **2. 版本发布 (Releases)**:
        *   List the key releases and summarize their changes. Focus on the most impactful ones (b11115 to b11104).
        *   b11115: OpenCL binary kernel additions.
        *   b11114: Server router eviction race fix.
        *   b11112: Multimodal `input_image` support in function call output.
        *   b11111: Intel Xe Vulkan flash attention optimization.
        *   b11109: Metal precision gating and MUL_MAT_ID F32 rejection across backends.
        *   b11104: Multi-address binding for server.
    *   **3. 社区热点 Issues (Top 10 Hot Issues)**:
        *   Select 10 significant ones and explain why they matter.
        *   1. #20697: Disk-based context checkpoint offloading (`--cache-disk`) - 56 likes, highly requested.
        *   2. #25618: Speculative decoding diverges on quantized models - core logic bug.
        *   3. #20176: Qwen 3.5 checkpoint loading crash - critical bug.
        *   4. #28752: Vulkan RDNA3 prompt processing speed drop after b10780 - performance regression.
        *   5. #24090: WebUI Projects/Folders for conversations - 13 likes, UX enhancement.
        *   6. #28158: Qwen3.8 DFlash/MTP OOB token on Vulkan - serious decoding bug.
        *   7. #27428: draft-mtp halves prompt processing on multi-GPU split - performance issue.
        *   8. #29104: Server silently stops when /metrics scraped by VictoriaMetrics - stability issue.
        *   9. #20663: qwen3.5 + codex unable to view images (closed but updated) - multimodal bug.
        *   10. #28581: IQ3_S garbage on RTX 5060TI (Blackwell) - backend compatibility.
    *   **4. 重要 PR 进展 (Top 10 Important PRs)**:
        *   Select 10 PRs and explain their technical contribution.
        *   1. #29151: Ling 3.0 VL support (model expansion).
        *   2. #29290: qwen35 d2t draft-vocab trim for MTP (speculative decoding enhancement).
        *   3. #29291: Treat stray media markers as literal text (multimodal robustness).
        *   4. #29060: Embeddings server return HTTP 400 (API robustness).
        *   5. #29282: hex-dma direct-mapped DMA cache (Hexagon backend performance).
        *   6. #26631: MUL_MAT_ID -1 index to skip computation (ggml flexibility).
        *   7. #29280: Vulkan reuse descriptor sets (performance optimization).
        *   8. #29137: CUDA conv3d with implicit GEMM (backend expansion).
        *   9. #29057: OpenCL bin kernel for Q6_K (backend performance).
        *   10. #23787: Fix HTTPS handshake on Windows (cross-platform stability).
    *   **5. 功能需求趋势 (Feature Request Trends)**:
        *   Extract common themes from issues and PRs.
        *   *Disk offloading & memory management*: `--cache-disk` (#20697), RPC caching (#29287, #29283).
        *   *WebUI & Server API Enhancements*: File upload API (#23948), conversation folders (#24090), model capabilities metadata (#21545), multi-address binding (already in b11104).
        *   *Multimodal & Model Support*: Ling 3.0 VL (#29151), image input in tool calls (#20663), stray media marker handling (#29291).
        *   *Backend Performance & Hardware Support*: Intel Xe/Vulkan (#29280, #24406), RDNA3/Strix Halo tuning (#28843), Hexagon DMA (#29282), Blackwell/RTX 5060 TI support (#28581).
    *   **6. 开发者关注点 (Developer Pain Points & Focus Areas)**:
        *   Summarize the main pain points raised by the community.
        *   *Backend stability and regressions*: Vulkan device loss (#27076), CUDA crashes with multi-GPU (#26837, #26257), HIP ROCm regression (#26435).
        *   *Performance bottlenecks*: Prompt processing slowdowns on Vulkan (#28752) and CUDA (#27428, #28734).
        *   *Speculative Decoding & Quantization interactions*: Bugs when combining quantized targets with draft models (#25618, #28158).
        *   *Build and compilation issues*: Level Zero/SYCL (#27257), Windows HTTPS/MSVC compilation issues (#23787).

4.  **Refining and Translating to Chinese**:
    *   Ensure professional tone, appropriate technical terms (e.g., "speculative decoding" -> "推测式解码", "quantized" -> "量化", "Vulkan/CUDA/Metal" -> keep as is or explain briefly, "MoE" -> "MoE (混合专家)", "GQA" -> "GQA (分组查询注意力)").
    *   Check formatting: Use bullet points, bold text, and clear headers to make it readable.
    *   Verify links are correctly mapped to the provided URLs (or formatted nicely as `https://github.com/ggml-org/llama.cpp/issues/...` based on the issue numbers).

Let's double-check the exact URLs format. The prompt says "每个条目附上 GitHub 链接". I will construct standard GitHub URLs like `https://github.com/ggml-org/llama.cpp/issues/20697` or `https://github.com/ggml-org/llama.cpp/pull/29290` since the raw text has some truncated links but the issue/PR numbers are clear.

Let's write down the details for each section.

**Section 1: 今日速览**
*   llama.cpp 迎来密集的版本更新（b11104 至 b11115），重点集中在服务器稳定性（路由器队列修复、多地址绑定）、多模态功能（函数调用中支持图像输入）以及各大硬件后端的性能优化（OpenCL 二进制内核、Vulkan Intel Xe 闪存注意力、Metal 精度门控）。
*   社区讨论热度极高，焦点集中在磁盘缓存上下文卸载（`--cache-disk`，获得 56 个赞）和 WebUI 对话项目管理功能上。
*   反馈中暴露了若干严重问题，包括 Vulkan/CUDA 后端在特定模型（如 Qwen 系列）下的性能回退、崩溃以及量化模型与推测式解码的兼容性 bug。

**Section 2: 版本发布 (Releases)**
*   Focus on the most recent/relevant ones:
    *   **b11115**: 新增 OpenCL 二进制内核 `kernel_gemm_noshuffle_q4_k_q8_1_dp4a_ila_a8_bin`，优化 A8 Q4_K 非 MoE GEMM 性能，并重命名了二进制内核选择辅助函数。
    *   **b11114**: 修复了服务器路由器在现有队列中的驱逐竞争问题，确保所有模型加载都通过队列，避免未代理请求前被提前驱逐。
    *   **b11112**: 服务器支持在 `function_call_output` 中传入 `input_image`，增强了多模态工具调用能力。


</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*