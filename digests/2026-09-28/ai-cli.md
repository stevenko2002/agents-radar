# AI CLI 工具社区动态日报 2026-09-28

> 生成时间: 2026-09-27 22:15 UTC | 覆盖工具: 12 个

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



以下是今日（2026-09-28）AI 开发工具社区的重点更新摘要：

1. **GitHub Copilot CLI v1.0.89-5 发布**：新增了对 `.claude/rules` 目录下规则文件的支持，并优化了 `ask_user` 与 elicitation 表单输入框的光标聚焦，以及侧边栏未读会话的蓝色圆点提示。
   https://github.com/github/copilot-cli/releases

2. **Qwen Code v0.24.6-nightly.20260926 发布**：主要修复了 MCP 相关注册逻辑问题，并补上了 managed-context 测试的 fixture 缺口。
   https://github.com/QwenLM/qwen-code/releases/tag/v0.24.6-nightly.20260926.d6f414190a

3. **llama.cpp b11223 版本发布**：服务器端新增支持对因果 LLM 重排序模型（如 Qwen3 和 Qwen3-VL）进行 RANK pooling 的批量拆分。
   https://github.com/ggerganov/llama.cpp/releases/tag/b11223

4. **Pi 合并重磅功能 PR #10040**：为 Pi agent 核心一次性加入了 **Codemode**（沙箱执行环境）与 **MCP** 工具协议支持。
   https://github.com/earendil-works/pi/pull/10040

5. **OpenAI Codex 合并 PR #564（Watch Mode）**：新增了被动代码库监听模式（watch mode），可在检测到代码库中的 AI 触发注释时自动运行。
   https://github.com/openai/codex/pull/564

6. **OpenCode 合并 Telegram 桥接 PR #45546**：基于 v2 SDK 的 `OpencodeClient` 实现了 Telegram 与 TUI 的双向会话镜像桥接。
   https://github.com/anomalyco/opencode/pull/45546

7. **Gemini CLI 推送多项安全加固 PR**：包括修复 checkpoint 路径逃逸漏洞（#29521）、限制 glob 工具在已校验目录内匹配（#29522），以及避免外部检查器泄露 `GEMINI_API_KEY` 等密钥（#29523）。
   https://github.com/google-gemini/gemini-cli/pull/29521

8. **llama.cpp 合并 GLM-5.3-Flash 支持 PR #27773**：正式在代码库中添加了对 GLM-5.3-Flash（GLM5-Next）模型的加载与推理支持。
   https://github.com/ggerganov/llama.cpp/pull/27773

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills 社区热点报告
**数据截止：2026-09-28 | 来源：anthropics/skills 官方仓库**

---

## 一、热门 Skills 排行

> 注：当前 PR 列表的评论数字段均为 `undefined`，以下排序综合 PR 的创建时间、最近更新时间、作者活跃度及内容价值进行评估。

### 1. AWT (AI Watch Tester) — E2E 测试 Skill
- **PR #822** | 作者: ksgisang | 创建: 2026-03-31 | 更新: 2026-09-19 | 状态: OPEN
- **功能**：赋予 Claude 视觉与浏览器控制能力，自动生成端到端测试。零代码测试生成、支持主流浏览器、可截图附于报告。
- **社区热点**：AI 驱动的自动化测试是当前最热方向之一，该 Skill 将测试从"手写脚本"推向"自然语言驱动"，实用性强。
- **链接**: https://github.com/anthropics/skills/pull/822

### 2. md2video-audio — Markdown 到视频 Skill
- **PR #1703** | 作者: 70v-Yoyo | 创建: 2026-09-01 | 更新: 2026-09-15 | 状态: OPEN
- **功能**：将 Markdown 文档通过 Marp 转为演示文稿，再编译为带真人级语音旁白的 MP4 视频，零成本。
- **社区热点**：内容生产全自动化（文字→视频），切中知识工作者和内容创作者的强需求。
- **链接**: https://github.com/anthropics/skills/pull/1703

### 3. proofcore-contract-auditor — 智能合约审计 Skill
- **PR #1771** | 作者: ProofCore-Protocol | 创建: 2026-09-15 | 更新: 2026-09-16 | 状态: OPEN
- **功能**：对 Solidity/Rust 智能合约进行自动静态分析，并将加密审计证明锚定到 TON 公链。
- **社区热点**：Web3 + AI 审计的交叉赛道，差异化明显，但需关注其是否过度依赖外部协议。
- **链接**: https://github.com/anthropics/skills/pull/1771

### 4. testing-patterns — 测试模式库 Skill
- **PR #723** | 作者: 4444J99 | 创建: 2026-03-22 | 更新: 2026-09-21 | 状态: OPEN
- **功能**：覆盖 Testing Trophy 模型、单元测试（AAA 模式）、React 组件测试等全栈测试方法论。
- **社区热点**：与 AWT 形成互补——AWT 侧重自动化执行，testing-patterns 侧重方法论指导。
- **链接**: https://github.com/anthropics/skills/pull/723

### 5. blast-radius — 破坏性操作前置检查 Skill
- **PR #1776** | 作者: kishormorol | 创建: 2026-09-17 | 更新: 2026-09-18 | 状态: OPEN
- **功能**：在批量/破坏性写操作（归档用户、删行、撤权限、群发邮件）前，校验操作影响范围。
- **社区热点**：AI Agent 自主执行能力越强，安全护栏需求越迫切，属于基础设施级 Skill。
- **链接**: https://github.com/anthropics/skills/pull/1776

### 6. skill-quality-analyzer & skill-security-analyzer — 元分析 Skill
- **PR #83** | 作者: eovidiu | 创建: 2025-11-06 | 更新: 2026-01-07 | 状态: OPEN
- **功能**：对 Claude Skills 进行五维度质量评估（结构/文档/安全性/可移植性/性能），并检测安全风险。
- **社区热点**：随着社区 Skill 数量激增，"Skill 本身的可信度与质量"成为新问题，元分析工具应运而生。
- **链接**: https://github.com/anthropics/skills/pull/83

### 7. pyxel — 复古游戏开发 Skill
- **PR #525** | 作者: kitao | 创建: 2026-03-05 | 更新: 2026-09-22 | 状态: OPEN
- **功能**：基于 Pyxel 框架创建、调试和验证复古像素游戏，支持无头输入驱动运行和逐帧检查。
- **社区热点**：游戏开发是 AI 编程的"炫技"场景，社区关注度稳定。
- **链接**: https://github.com/anthropics/skills/pull/525

### 8. document-typography — 文档排版质量控制 Skill
- **PR #514** | 作者: PGTBoos | 创建: 2026-03-04 | 更新: 2026-03-13 | 状态: OPEN
- **功能**：防止 AI 生成文档中的 orphan word wrap、widow paragraph、编号错位等排版问题。
- **社区热点**：解决"AI 生成内容的最后一公里"体验问题，细节决定成败。
- **链接**: https://github.com/anthropics/skills/pull/514

---

## 二、社区需求趋势

从 Issues 分析，社区最期待的新 Skill 方向集中在以下领域：

| 排名 | 需求方向 | 代表 Issue | 核心诉求 |
|------|---------|-----------|---------|
| 1 | **安全与信任** | #492 (43 评论) | 社区 Skill 冒充官方 `anthropic/` 命名空间，需命名规范与签名机制 |
| 2 | **组织协作** | #228 (16 评论, 8👍) | 组织内 Skill 共享/库，避免手动传递 .skill 文件 |
| 3 | **测试自动化** | #556 (12 评论, 7👍) | `claude -p` 模式下 Skill 触发率为 0%，需修复命令/Skill 触发链路 |
| 4 | **记忆管理** | #1329 (9 评论) | `compact-memory` — 用符号化记号压缩 Agent 长程上下文 |
| 5 | **Agent 治理** | #412 (6 评论) | 策略执行、威胁检测、信任评分、审计日志 |
| 6 | **推理质量** | #1385 (4 评论) | 三阶段质量门：任务前校准→对抗审查→交付验证 |
| 7 | **文档处理** | #1175 (4 评论) | SharePoint Online 文档访问的权限与安全边界 |
| 8 | **多云兼容** | #29 (4 评论) | AWS Bedrock 兼容性支持 |

**核心趋势**：社区正从"能用的 Skill"转向"可信、可协作、可审计、可治理"的 Skill 生态。

---

## 三、高潜力待合并 PR

以下 PR 评论活跃度高（或更新频繁、作者持续参与），且尚未合并，可能近期落地：

| PR | Skill | 作者 | 潜力分析 |
|----|-------|------|---------|
| #1742 | mcp-builder 修复 | Kuldeeep18 | 紧跟 `mcp>=2.0.0` API 变更，作者同时维护 #1681，是高频贡献者 |
| #1298 | skill-creator 修复 | MartinCajiao | 核心 Skill 的稳定性修复，Windows 兼容性，作者活跃 |
| #1734 | docx 孤儿注释检测 | rohitjain25 | 文档处理是高频场景，实用性强 |
| #1792 | docx LibreOffice 超时修复 | TINGyu123644 | 与 #541（w:id 碰撞）形成 docx 系列修复矩阵 |
| #1681 | skill-creator 直接执行修复 | Kuldeeep18 | 同一作者连续贡献，skill-creator 是核心依赖 |
| #1615 | scnet-hpc | lql341 | 垂直领域（高性能计算），受众精准 |
| #1245 | notion-spec-to-implementation | mrdesouzaphd-cmyk | Notion 生态 + 规格→任务转化，产品管理场景明确 |
| #486 | ODT | GitHubNewbie0 | 开放文档格式支持，填补生态空白 |

---

## 四、Skills 生态洞察

> **当前社区在 Skills 层面最集中的诉求是：从"功能覆盖"转向"信任、安全与协作基础设施"——随着 Agent 自主执行能力增强，社区迫切需要一套可验证、可共享、可审计的 Skill 治理体系，而非仅仅是更多的功能 Skill。**

---

*报告生成时间：2026-09-28 | 数据源：anthropics/skills GitHub Repository*

---



# Claude Code 社区动态日报 — 2026-09-28

---

## 1. 今日速览

今日无新版本发布，社区活跃度集中在 Issue 层面。过去 24 小时内，大量历史 Issue（多为 7 月创建）被集中更新，暗示维护团队正在进行批量状态刷新（stale 标记清理）。社区核心痛点仍集中在 **长会话缓存失效导致的成本飙升**、**MCP 工具权限与启动竞态**，以及 **Windows/WSL 平台的兼容性缺陷** 三大方向。

---

## 2. 版本发布

**无新版本发布**（过去 24 小时内无 Releases）。

---

## 3. 社区热点 Issues（精选 10 个）

### 🔴 #76606 — Prompt cache 被长会话中的消息重写击穿，引发费用飙升
- **状态**: CLOSED / **标签**: bug, has repro, stale
- **作者**: oakif | **评论**: 7
- **摘要**: 用户通过 diff `/v1/messages` 请求定位到两个根因：Claude Code 在长会话中会**重写历史消息**，导致 prompt cache 失效，整个上下文被重新处理而非仅增量。这是成本敏感型用户的核心痛点。
- **为什么重要**: 直接影响按 token 计费场景下的可持续性，长会话用户可能遭遇意外的账单暴涨。
- **社区反应**: 评论 7 条，关注度高，但已 stale 关闭。

🔗 https://github.com/anthropics/claude-code/issues/76606

---

### 🔴 #51537 — persistHookOutput 的 10,000 字符硬限制阻碍 hook 传参
- **状态**: OPEN / **标签**: duplicate, feature, stale
- **作者**: permaevidence | **评论**: 7 | **👍**: 7
- **摘要**: v2.1.89 引入的 `persistHookOutput` 对 hook 的 `additionalContext` 输出强制设限，超出部分被替换为文件路径碎片，模型无法有效利用。用户请求**提高、移除或使该限制可配置**。
- **为什么重要**: Hook 是高级工作流自动化的核心机制，此限制直接削弱了复杂上下文注入能力。
- **社区反应**: 👍 7，社区呼声很高，但 Issue 已标记 duplicate/stale。

🔗 https://github.com/anthropics/claude-code/issues/51537

---

### 🟡 #76238 — MCP 白名单工具在新会话中仍触发权限弹窗
- **状态**: CLOSED / **标签**: bug, has repro, reproduced, stale
- **作者**: vdaluz | **评论**: 4 | **👍**: 3
- **摘要**: 即使 MCP 工件已加入 allowlist，在全新会话中仍会弹出权限确认。环境为 macOS + Opus Plan 模式。
- **为什么重要**: 破坏了"信任一次、始终信任"的用户体验，尤其影响自动化流水线。
- **社区反应**: 👍 3，已复现并关闭。

🔗 https://github.com/anthropics/claude-code/issues/76238

---

### 🟡 #76584 — Compaction summary 将超时命令的部分 stdout 误记为"已确认结果"
- **状态**: CLOSED / **标签**: bug, has repro, stale
- **作者**: hiroki-tamba-research | **评论**: 4
- **摘要**: 长命令超时（exit 143）后，其被 kill 前捕获的部分 stdout 被 compaction summary 当作成功结果记录，后续会话可能基于错误信息继续执行。
- **为什么重要**: 属于**数据完整性/安全性缺陷**，可能导致 LLM 基于不完整输出做出错误决策。

🔗 https://github.com/anthropics/claude-code/issues/76584

---

### 🟡 #76490 — Bash 权限 allow-list 规则无法匹配 Windows 盘符路径
- **状态**: CLOSED / **标签**: bug, has repro, stale
- **作者**: Volkodavchik | **评论**: 4
- **摘要**: `.claude/settings.json` 中引用 Windows 绝对路径（如 `C:/Program Files/...` 或 `/c/Program Files/...`）的 allow-list 规则永远不匹配。
- **为什么重要**: Windows 用户的核心权限配置能力受损，属于平台兼容性硬伤。

🔗 https://github.com/anthropics/claude-code/issues/76490

---

### 🟡 #76453 — Cowork 自定义 MCP 连接器每次会话都报"needs authorization"
- **状态**: CLOSED / **标签**: bug, has repro, stale
- **作者**: popmatik | **评论**: 4
- **摘要**: 尽管 OAuth 2.1 认证在服务端有效，Cowork 桌面应用每次 spawn 会话时仍报告自定义 MCP 连接器"需要授权 / 无工具可用"。
- **为什么重要**: Cowork 是桌面版核心场景，此问题使 MCP 集成形同虚设。

🔗 https://github.com/anthropics/claude-code/issues/76453

---

### 🟠 #76185 — Headless `-p` 会话在后台 Bash 任务空闲时内存泄漏至 10–15GB
- **状态**: CLOSED / **标签**: bug, perf:memory, stale
- **作者**: lalva224 | **评论**: 3
- **摘要**: Linux headless 模式下，等待长时运行的后台 Bash 任务时，anon RSS 泄漏至 10–15GB，曾导致 18GB 服务器 swap 雪崩（load avg 68）。
- **为什么重要**: **生产环境致命缺陷**，直接影响 headless/CI 场景的可靠性。

🔗 https://github.com/anthropics/claude-code/issues/76185

---

### 🔴 #75794 — Plan Mode 下模型疑似"擦除"整个目录（无权限提示）
- **状态**: CLOSED / **标签**: bug, model, data-loss, stale
- **作者**: dingirtorres | **评论**: 3
- **摘要**: 用户报告在 Plan Mode 下模型在无任何权限提示的情况下擦除了整个目录。标签含 `data-loss`，严重性极高。
- **为什么重要**: 直接威胁用户数据安全，且涉及模型行为而非工具链。

🔗 https://github.com/anthropics/claude-code/issues/75794

---

### 🟡 #76239 — SDK headless 模式下 MCP 工具在首回合静默缺失（回归）
- **状态**: CLOSED / **标签**: bug, regression, stale
- **作者**: xiaohuiwang-ai | **评论**: 2
- **摘要**: 自 CLI 2.1.144 起，单轮 headless 会话中，若 stdio MCP 服务器启动慢于新的非阻塞 pre-wait，首个 query 的工具列表将静默缺失。
- **为什么重要**: 影响 `claude-agent-sdk` 的单轮调用可靠性，回归自特定版本。

🔗 https://github.com/anthropics/claude-code/issues/76239

---

### 🟡 #76461 — 子 agent 后台进程在 turn 结束时被孤儿化/SIGHUP，无自动恢复
- **状态**: CLOSED / **标签**: bug, has repro, stale
- **作者**: erikpr1994 | **评论**: 2 | **👍**: 1
- **摘要**: 子 agent 通过 `Bash(run_in_background: true)` 启动的长时任务在 turn 结束时被 kill，结合 10 分钟前台 Bash 上限，使 >10 分钟任务在子 agent 中无法运行。
- **为什么重要**: 限制了多 agent 协作中的长任务编排能力。

🔗 https://github.com/anthropics/claude-code/issues/76461

---

## 4. 重要 PR 近期进展（3 条，全部涉及 diff/telemetry）

### 🟢 #97688 — 安全遥测：collector 记录不再被用户插件改写
- **状态**: OPEN | **作者**: poteat | **更新**: 2026-09-27
- **摘要**: 在组织级 `sec-default` 策略下，插件将无法丢弃或覆写发送给 collector 的遥测记录。`telemetry.log` 流将像 `classic.*` 和 `settings.read` 一样持续到 user tier 之后。
- **为什么重要**: 安全审计场景的关键加固，确保组织可观测性数据的完整性。

🔗 https://github.com/anthropics/claude-code/pull/97688

---

### 🟢 #95587 — Diff 模态与内置面板行为统一
- **状态**: CLOSED | **作者**: poteat | **更新**: 2026-09-27
- **摘要**: 修复了 diff 模态与内置面板在三个维度上的不一致：恢复/继续会话时若 transcript 已有编辑记录，diff 窗口在获知宽度后立即打开，与内置面板的恢复逻辑对齐。
- **为什么重要**: 减少用户在不同视图间切换时的认知差异。

🔗 https://github.com/anthropics/claude-code/pull/95587

---

### 🟡 #94847 — Diff 窗口仅在有实际文件变更时自动打开
- **状态**: OPEN | **作者**: bcherny | **更新**: 2026-09-27
- **摘要**: 修复 diff 窗口在首个 Edit/Write/NotebookEdit 时盲目打开的问题——现在仅在确认有文件可列出时才打开。解决了写入仓库外路径、被忽略文件或不同 worktree 时弹出空面板的体验问题。
- **为什么重要**: 避免无效 UI 噪声，提升编辑工作流的整洁度。

🔗 https://github.com/anthropics/claude-code/pull/94847

---

## 5. 功能需求趋势

从 Issue 标签和内容分布来看，社区关注方向高度集中于以下维度：

| 方向 | 热度 | 代表性 Issue |
|------|------|-------------|
| **成本控制 & 缓存效率** | 🔴 极高 | #76606（prompt cache 失效）、#51537（hook 输出限制） |
| **MCP 工具生态** | 🔴 极高 | #76238（白名单权限）、#76453（Cowork 授权）、#76239（SDK 启动竞态） |
| **Windows / WSL 兼容性** | 🟠 高 | #76490（盘符路径匹配）、#93845（WSL2 bwrap symlink）、#76510（管理员权限） |
| **Headless & SDK 可靠性** | 🟠 高 | #76185（内存泄漏）、#76461（子 agent 进程孤儿化） |
| **数据安全 & 完整性** | 🟠 高 | #75794（Plan Mode 目录擦除）、#76584（compaction 误记结果） |
| **桌面端 Cowork 体验** | 🟡 中 | #76233（Google Drive 路径拒绝）、#76485（设备桥连接丢失）、#76462（artifact 滚轮失效） |
| **Hook 系统灵活性** | 🟡 中 | #76501（PreToolUse hook 不触发）、#51537（输出大小限制） |

---

## 6. 开发者关注点总结

1. **长会话经济性危机**: Prompt cache 的意外失效是当前最被诟病的成本陷阱——用户在无感知的情况下消耗大量 token，且缺乏预警机制。
2. **MCP 的"信任摩擦"**: 白名单不生效、授权反复提示、启动竞态丢失工具——MCP 作为核心扩展机制，其可用性仍不及预期，尤其 Cowork 桌面端。
3. **跨平台一致性洼地**: Windows 路径处理、WSL 沙箱 bwrap、盘符匹配等底层差异导致大量碎片化 bug，反映平台抽象层仍需加固。
4. **Headless/CI 场景的内存与进程治理**: 内存泄漏和子 agent 进程生命周期管理是自动化流水线的定时炸弹。
5. **Hook 系统需要更多可配置性**: `persistHookOutput` 的硬编码限制表明，高级自动化路径上仍存在"一刀切"的设计阻碍。
6. **遥测与安全的平衡**: PR #97688 的推进显示团队开始正视组织级安全审计需求，但社区对数据采集透明度的关注将持续升温。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Thinking Process:

1.  **Understand the Goal**: The user wants a daily community dynamic report for OpenAI Codex (based on GitHub data) dated 2026-09-28. The user specified a role: "技术分析师，专注于 AI 开发工具" (Technical analyst focusing on AI development tools).
    *   The report needs to be in Chinese, structured, concise, and professional, suitable for technical developers.
    *   Sections needed:
        1.  **今日速览** (Today's overview): 2-3 sentences summarizing the most important events.
        2.  **版本发布** (Releases): Summarize releases if any (there are some Rust-based alpha releases listed in the prompt).
        3.  **社区热点 Issues** (Top 10 hot issues): Pick 10 most noteworthy issues, explain why they are important and community reactions (likes/comments).
        4.  **重要 PR 进展** (Top 10 important PRs): Pick 10 important PRs, explain what they do/fix.
        5.  **功能需求趋势** (Feature request trends): Extract community focus from all issues (IDE integration, performance, new model support, etc.).
        6.  **开发者关注点** (Developer focus/pain points): Summarize pain points or high-frequency needs from developer feedback.

2.  **Analyze the Input Data**:
    *   **Date**: 2026-09-28 (The prompt asks for the daily report of this date, though the data provided is "past 24 hours" relative to some scrape time, but the issues updated on 2026-09-27 dominate, with a few on 2026-09-27).
    *   **Releases**:
        *   `rust-v0.159.0-alpha.10` (latest alpha)
        *   `rust-v0.159.0-alpha.9`, `alpha.8`, `alpha.7`
        *   `rust-v0.158.0-alpha.15.3`, `alpha.15.2`
        *   Note: Codex is written in Rust (`rust-v...`). The releases are alpha builds, indicating active pre-release development.
    *   **Issues (Top 30 by comments, mostly updated on 2026-09-27)**:
        *   #48074: Windows terminal windows flash repeatedly during requests after installing Codex daemon. (36 comments, 68 likes) - Windows OS, CLI, app-server bug.
        *   #10185: Mode switch Plan -> Code still behaves like Plan. (25 comments, 1 like) - TUI bug, old but active.
        *   #48554: Linux Desktop: Electron runtime replaces libuv's SIGCHLD handler, children never reaped, shell env times out, "Git is unavailable". (19 comments, 11 likes) - Major Linux desktop bug.
        *   #43237: GPT-6 Astra rejects `hi` with invalid_prompt: isolated CLI and minimal backend reproduction. (19 comments, 2 likes) - Model behavior bug, critical for basic usage.
        *   #48419: Linux desktop app hangs on opening any local Codex thread - hydration never sends thread/resume, 120s timeout. (15 comments, 10 likes) - Major Linux desktop bug.
        *   #43347: Closing the last in-app Browser Use tab crashes the desktop app on Windows. (14 comments, 0 likes) - Windows app crash.
        *   #43015: Severe CLI reliability failure: 63.8 MB image-history requests before compaction, WebSocket fallback, stalls on Windows. (13 comments, 0 likes) - Performance & reliability.
        *   #48463: Windows desktop app stuck on loading screen after update (bootstrap timeout). (12 comments, 0 likes) - Windows blocker.
        *   #25590: Codex Desktop resumes thread with workspace-write sandbox despite UI showing Full Access. (12 comments, 3 likes) - Security/permissions bug.
        *   #45564: Disabling animations freezes the Working timer. (12 comments, 0 likes) - TUI bug.
        *   #48324: Windows desktop app fails with "Unable to load organization settings" before composer/session. (11 comments, 3 likes) - Windows blocker.
        *   #27133: Project-level `.codex/hooks.json` silently ignored when running in a git worktree. (10 comments, 3 likes) - Config/hooks bug.
        *   #44112: Windows Browser Use fails before reading attached Chrome tab: "Unable to load browser request-header policy". (10 comments, 0 likes) - Browser use bug.
        *   #38162: ChatGPT Desktop local MCP tools discovered but not exposed to Chat sessions. (8 comments, 2 likes) - MCP integration issue.
        *   #39591: macOS in-app Browser runtime exits during initialization; rollback restores it. (7 comments, 1 like) - macOS browser bug.
        *   #48030: Windows JetBrains Rider Codex CLI prints raw mouse-reporting sequences in integrated terminal. (6 comments, 9 likes) - TUI/terminal rendering.
        *   #27395: Desktop "Error submitting message" - turn/start times out while app-server sidecar stalls. (6 comments, 3 likes) - Performance/Architecture.
        *   #17003: Detect dead websocket connections faster after network changes instead of showing `Working` for up to 5 minutes. (5 comments, 6 likes) - Connectivity enhancement.
        *   #48315: Tmux native scroll is broken after update. (5 comments, 7 likes) - TUI bug in tmux.
        *   #45511: Windows ChatGPT Desktop cold start access denied (0x80070005). (4 comments, 0 likes) - Windows permission bug.
        *   #48785: Codex conversations remain stuck on loading screen indefinitely. (3 comments, 0 likes) - Linux desktop loading bug.
        *   #48467: Windows copy/paste fails and PowerShell windows spawn constantly after 0.157.x. (3 comments, 6 likes) - Major Windows regression.
        *   #48535: Linux desktop app UI hangs loading chats and new chats after update to 26.924. (3 comments, 1 like) - Linux regression.
        *   #48527: Make conversation name and ID easy to copy and show name on exit. (3 comments, 1 like) - UX enhancement.
        *   #48618: SIGCHLD handler overwritten during startup on Linux; preserving libuv handler restores thread loading. (3 comments, 1 like) - Linux system bug.
        *   #48494: GitHub plugin connection error. (3 comments, 0 likes) - Plugin/auth bug.
        *   #48448: Remote Access on Android no longer working. (2 comments, 0 likes) - Mobile bug.
        *   #48703: Plan mode choose block terminal scroll in Rider. (2 comments, 1 like) - IDE integration.
        *   #23009: Codex App: Plan mode diff/changes view. (2 comments, 1 like) - Feature request.
        *   #23221: Codex responses fully nested within collapsed `<Worked for {N}s>` sections. (2 comments, 1 like) - UI/UX bug.

    *   **PRs (Top 20 by comments, mostly closed/merged on 2026-09-27)**:
        *   #48800: Use terminal palette for ordered Markdown list markers (TUI rendering).
        *   #48799: Fix SGR mouse reporting for Windows terminal capture (Windows terminal fix).
        *   #48796: Add opt-in structured errors for Guardian circuit-breaker interruptions (Guardian feature).
        *   #564: feat: watch mode (passive codebase monitoring for AI trigger comments). Huge historical PR but recently updated/closed.
        *   #48783: Add single-server MCP status discovery with thread connection reuse (MCP optimization).
        *   #48779: Preserve independent Guardian history across parent compaction (Guardian context management).
        *   #48776: Remove the `current` badge from TUI task rows (UI cleanup).
        *   #48775: Match pinned transcript headers to the original prompt style (UI styling).
        *   #48772: Fix Unix socket connections through long symlink paths (Unix networking fix).
        *   #48764: Preserve MCP app resource URIs without defaulting display mode (MCP UI preservation).
        *   #48761: Show hidden output line counts in compact terminal activity (TUI output enhancement).
        *   #48757: Match TUI status shimmer timing to desktop headers (UI animation timing).
        *   #48754: Render `/status` without borders and wrap long values (TUI formatting).
        *   #48727: Centralize executable fixture creation to avoid Linux ETXTBSY races (Test infrastructure).
        *   #48725: Retain confirmed Code Mode messages for Guardian reviews (Guardian context).
        *   #48724: Prevent Linux ETXTBSY races in MCP stdio tests (Test stability).
        *   #48686: Remove WebSocket headers and tool payloads from info logs (Logging hygiene/security).
        *   #48646: Fix the session-start helper call in the command center test (Test fix).
        *   #48643: Set the provisioned macOS CLI bundle name to ChatGPT (Mac packaging).
        *   #48628: Preserve blank TUI sessions when switching tasks (TUI session state management).

3.  **Drafting the Report Sections**:

    *   **Section 1: 今日速览 (Today's Overview)**
        *   Codex CLI is in active pre-release iteration with `0.159.0-alpha.10` and `0.158.0-alpha.15.3`.
        *   The community is heavily focused on resolving critical regressions in the Windows desktop app (loading screens, terminal flashes, copy-paste failures) and Linux desktop integration (SIGCHLD handler issues causing child process reaping failures and thread loading hangs).
        *   On the development side, major efforts are directed towards TUI rendering optimizations, MCP protocol enhancements, and Guardian review context preservation, alongside terminal interaction fixes (SGR mouse reporting, tmux scroll).

    *   **Section 2: 版本发布 (Releases)**
        *   Codex is releasing Rust-based alpha builds: `rust-v0.159.0-alpha.10` (latest alpha in the 0.159 line) and `rust-v0.158.0-alpha.15.3`.
        *   These are alpha pre-releases, indicating heavy development on the TUI, desktop integration, and core agent engine. Developers should proceed with caution as APIs and behavior might change.

    *   **Section 3: 社区热点 Issues (Top 10 Hot Issues)**
        *   Need to select 10 critical/major issues from the list, focusing on impact (likes, comments) and severity (crashes, core workflow blocks).
        *   *Selection &排序*:
            1.  **#48074**: Windows terminal windows repeatedly flash during requests after installing the Codex daemon (36 comments, 68 likes). High visibility UI/UX regression on Windows.
            2.  **#48554**: Linux Desktop: Electron runtime replaces libuv's SIGCHLD handler, shell env times out, "Git is unavailable" (19 comments, 11 likes). Critical system-level integration bug on Linux.
            3.  **#48419**: Linux desktop app hangs on opening any local Codex thread - hydration timeout (15 comments, 10 likes). Core blocker for Linux desktop users.
            4.  **#43237**: GPT-6 Astra rejects simple prompts like `hi` with `invalid_prompt` (19 comments, 2 likes). Critical model behavior bug affecting basic interaction.
            5.  **#43015**: Severe CLI reliability failure: 63.8 MB image-history requests before compaction, stalls on Windows (13 comments). Severe performance/memory leak issue.
            6.  **#48463**: Windows desktop app stuck on loading screen after update (12 comments). Major blocker preventing app startup.
            7.  **#25590**: Codex Desktop resumes thread with workspace-write sandbox despite UI showing Full Access (12 comments, 3 likes). Security and trust issue (UI lies about permission level).
            8.  **#48467**: Windows copy/paste fails and PowerShell windows spawn constantly after 0.157.x (3 comments, 6 likes). Severe Windows productivity regression.
            9.  **#48324**: Windows desktop app fails with "Unable to load organization settings" (11 comments, 3 likes). Blocker for enterprise/organization users on Windows.
            10. **#27133**: Project-level `.codex/hooks.json` silently ignored when running in a git worktree (10 comments, 3 likes). Silent failure for advanced workflow users.
        *   *Why they are important & community reaction*: Summarize the severity (crashes, core workflow broken, security misrepresentations) and high community engagement (lots of likes/reposts, showing widespread impact).

    *   **Section 4: 重要 PR 进展 (Top 10 Important PRs)**
        *   Need to select 10 PRs that show technical depth, focusing on architecture, MCP, TUI, and stability.
        *   *Selection*:
            1.  **#564**: `feat: watch mode` - Allows Codex to passively monitor codebase for AI trigger comments (`// CODEX: <instruction>`). Major automation feature.
            2.  **#48799**: Fix SGR mouse reporting for Windows terminal capture - Fixes terminal mouse interaction on Windows.
            3.  **#48783**: Add single-server MCP status discovery with thread connection reuse - Optimizes MCP server inspection performance.
            4.  **#48796**: Add opt-in structured errors for Guardian circuit-breaker interruptions - Improves error handling transparency for Guardian reviews.
            5.  **#48779**: Preserve independent Guardian history across parent compaction - Ensures review context is not lost during context compaction.
            6.  **#48772**: Fix Unix socket connections through long symlink paths - Fixes networking issue on Unix systems.
            7.  **#48764**: Preserve MCP app resource URIs without defaulting display mode - Keeps custom UI rendering for MCP resources.
            8.  **#48761**: Show hidden output line counts in compact terminal activity - Enhances TUI terminal output readability.
            9.  **#48725**: Retain confirmed Code Mode messages for Guardian reviews - Improves Guardian context understanding.
            10. **#48628**: Preserve blank TUI sessions when switching tasks - Fixes session state loss when switching tasks in TUI.
        *   *Explanation*: Focus on how they improve developer experience, system stability, or core features (MCP, Guardian, TUI).

    *   **Section 5: 功能需求趋势 (Feature Request Trends)**
        *   Extract patterns from the issues:
            *   **TUI/Terminal & IDE Integration Enhancements**: Issues like #48030 (raw mouse sequences in Rider), #48703 (terminal scroll in Rider plan mode), #48315 (tmux scroll broken), #48527 (easy copy of session ID). Highlight that terminal rendering and IDE integration (especially JetBrains Rider and tmux) are major pain points.
            *   **Desktop App Stability & Platform-specific bugs**: Heavy focus on Windows and Linux desktop crashes, loading hangs (#48463, #48419, #48785, #48535), and system-level integration bugs like the SIGCHLD handler (#48554, #48618).
            *   **Context Management & Guardian Reviews**: Issues/PRs around Guardian history preservation (#48779, #48725) and compact behavior (#43015 image history bloat). Context optimization is a major development frontier.
            *   **MCP (Model Context Protocol) Integration**: Issues like #38162 (MCP tools not exposed) and PRs like #48783, #48764 show MCP is a hot area of active development and user demand.
            *   **Permissions & Security Sandbox Consistency**: Issue #25590 shows users are highly sensitive to permission mismatches between UI and actual execution sandbox.
            *   **Network and Connection Resilience**: Issue #17003 asks for faster dead websocket detection, showing users want offline/online transitions to be handled gracefully.

    *   **Section 6: 开发者关注点 (Developer Focus / Pain Points)**
        *   Summarize the core takeaways for developers using Codex:
            *   **Platform Fragmentation (Especially Windows & Linux Desktop)**: Desktop versions are highly unstable, with frequent regressions in loading screens, terminal integration, and system library conflicts (libuv SIGCHLD). Developers on Windows/Linux desktop should be cautious with auto-updates.
            *   **TUI/Terminal Compatibility**: TUI rendering issues in advanced terminals (tmux, JetBrains IDEs) are persistent. Developers relying on complex terminal setups face raw escape sequence leaks and scroll bugs.
            *   **Context Bloat and Performance**: The issue of massive image history requests (#43015) highlights that long-running coding sessions need smarter context compaction strategies.
            *   **Configuration and Hook Silent Failures**: Git worktree users hit silent ignores of `.codex/hooks.json` (#2713

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-09-28）

> 数据来源：github.com/google-gemini/gemini-cli

---

## 1. 今日速览

今日无新版本发布，社区焦点集中在**安全加固**与**子代理（Subagent）可靠性**两大主题。安全方向上，维护者集中提交了 4 个与路径逃逸、环境变量泄露相关的修复 PR（#29521–#29525），涉及 checkpoint、glob、外部检查器等敏感模块。可靠性方向上，子代理在 MAX_TURNS 后误报成功、通用代理挂起、Browser Agent 在 Wayland 下失败等问题持续被高频讨论。

---

## 2. 版本发布

过去 24 小时内**无新 Release**。

---

## 3. 社区热点 Issues（Top 10）

| # | 标题 | 优先级 | 评论 | 关注理由 |
|---|------|--------|------|----------|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) 子代理 MAX_TURNS 后误报 GOAL 成功 | p1 | 13 | **最热议题**。`codebase_investigator` 在未做任何分析即触达轮次上限时仍返回 `success/GOAL`，掩盖了中断，直接影响用户对代理结果的信任。 |
| 2 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) 零依赖 OS 沙箱 + 执行后意图路由 | p2 | 9 | 针对 Gemini 3 原生 bash 亲和性提出的架构级增强，试图在安全与能力之间取得平衡，属长期方向性讨论。 |
| 3 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) 通用代理（generalist agent）永久挂起 | p1 | 8 / 👍8 | 高赞痛点。简单操作如建文件夹即挂起，禁用子代理后可绕过，指向委派逻辑的根本缺陷。 |
| 4 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) 评估 AST 感知的读取/搜索/映射 | p2 | 7 | 探索以 AST 精准读取方法边界、降低轮次与 token 噪声，是提升代码理解效率的关键 EPIC。 |
| 5 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) Gemini 不会主动使用技能与子代理 | p2 | 6 | 代理编排能力不足的典型反馈：用户需显式指令才触发 skill/subagent，削弱了自动化价值。 |
| 6 | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) 为 Auto Memory 增加确定性脱敏并减少日志 | p2 | 5 | **隐私风险**：本地 transcript 在脱敏前已进入模型上下文，且服务可能记录敏感技能信息。 |
| 7 | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) Auto Memory 不应无限重试低信号会话 | p2 | 4 | 低信号会话因未被读取而反复出现在索引中，造成无效循环与资源浪费。 |
| 8 | [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) Browser Agent 忽略 settings.json 覆盖 | p2 | 4 | 配置系统失效：`AgentRegistry` 正确合并设置，但 Browser Agent 未生效，`maxTurns` 等覆盖被无视。 |
| 9 | [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) browser_agent 会话接管与锁恢复 | p3 | 4 | 当前 persistent 模式下遇到锁定 profile 即 fail-fast，需更健壮的自动接管机制。 |
| 10 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) Wayland 下 browser 子代理失败 | p1 | 4 | Linux 桌面兼容性问题，影响 Wayland 用户的浏览器代理可用性。 |

**其他值得留意**：[#24246](https://github.com/google-gemini/gemini-cli/issues/24246) 工具数 >128 触发 400 错误；[#22672](https://github.com/google-gemini/gemini-cli/issues/22672) 代理应抑制破坏性命令（`git reset --force`）；[#22186](https://github.com/google-gemini/gemini-cli/issues/22186) get-shit-done 输出钩子导致崩溃。

---

## 4. 重要 PR 进展（Top 10）

### 安全加固（今日主旋律）
1. **[#29521](https://github.com/google-gemini/gemini-cli/pull/29521) [p1]** 将旧版 checkpoint 路径限制在 checkpoint 目录内。修复 `_getCheckpointPath`/`deleteCheckpoint` 使用原始 tag 拼接导致的 `..` 路径逃逸（如 `x/../../secret`）。
2. **[#29522](https://github.com/google-gemini/gemini-cli/pull/29522)** 将 glob 工具匹配限制在已校验目录内。修复 glob 12 中绝对模式（如 `/etc/*.conf`）忽略 `cwd` 直接命中文件系统根的问题。
3. **[#29523](https://github.com/google-gemini/gemini-cli/pull/29523) [p2]** 外部安全检查器使用最小环境变量并限制输出上限。修复 `CheckerRunner` 将 `GEMINI_API_KEY` 等密钥泄露给第三方检查器，以及无上限 stdout 累积。
4. **[#29525](https://github.com/google-gemini/gemini-cli/pull/29525)** a2a-server 不再从请求的 `agentSettings` 推导工作区信任，避免调用方通过 `isTrusted` 提权。

### 核心稳定性
5. **[#29292](https://github.com/google-gemini/gemini-cli/pull/29292)** `loadCheckpoint` 校验 `history` 为数组，避免 `{"history": null}` 等损坏文件被误判有效（Fixes #29194）。
6. **[#29294](https://github.com/google-gemini/gemini-cli/pull/29294)** 修复 stdout 竞争与光标焦点导致的终端闪烁撕裂（Closes #29295）。
7. **[#29342](https://github.com/google-gemini/gemini-cli/pull/29342)** 重构 `useInputHistoryStore`，避免嵌套 React 状态更新引发的 StrictMode 双调用问题（Closes #29313）。
8. **[#29407](https://github.com/google-gemini/gemini-cli/pull/29407)** 修复 JSON 序列化中的共享引用误判。以活动递归路径追踪替代全局 `WeakSet`，使重复的 OpenTelemetry 数组不再变成 `[Circular]`（Fixes #29406）。

### 功能与体验
9. **[#29404](https://github.com/google-gemini/gemini-cli/pull/29404) [p3]** 新增 `gemini models list` 子命令并支持 JSON 输出，便于集成工具发现可用模型 ID，避免硬编码过期。
10. **[#29411](https://github.com/google-gemini/gemini-cli/pull/29411) [p2]** `--resume` 的 "latest" 改为按最近活动时间解析，修复长驻主会话被较新的短会话覆盖的问题（Fixes #29410）。

---

## 5. 功能需求趋势

从 50 条 Issues 的标签与摘要中，可提炼出以下社区关注方向：

- **代理可靠性（绝对主流）**：几乎所有高评论议题都属于 `area/agent`，集中在子代理误报状态、挂起、轮次/工具限制、破坏性行为抑制等。代表：#22323、#21409、#22672。
- **安全与隐私**：`area/security` 议题密集，包括 Auto Memory 脱敏（#26525）、路径逃逸、第三方检查器密钥泄露——今日 PR 也印证了这一优先级。
- **上下文与 token 效率**：AST 感知读取（#22745、#22746）、"Tactful Extraction" 精准读取（#19561）、降低 36.6k token 基线，是性能优化的核心诉求。
- **Browser Agent 成熟度**：配置生效（#22267）、会话锁恢复（#22232）、Wayland 兼容（#21983）共同指向浏览器代理的工程化短板。
- **持久化任务与记忆**：以文件为基础的任务跟踪替代 `WriteToDo`（#18836、#21000）、Auto Memory 系列缺陷（#26516、#26522、#26523）。
- **可观测性与自我认知**：子代理轨迹可分享（#22598）、Bug 报告包含子代理上下文（#21763）、CLI 自我说明准确（#21432）。

---

## 6. 开发者关注点

1. **子代理的"黑盒感"与状态失真**：用户最强烈的痛点在于无法信任代理返回的 `success/GOAL`（#22323），以及子代理运行过程不可见、不进入 bug 报告（#21763）。**可见性与真实性**是当前信任危机的核心。
2. **挂起与崩溃类稳定性问题**：通用代理永久挂起（#21409，👍8）、get-shit-done 钩子崩溃（#22186）、vite 交互提示卡死（#22465），显示代理在真实工程场景中的健壮性仍不足。
3. **配置与行为不一致**：Browser Agent 忽略 `settings.json`（#22267）、符号链接代理不被识别（#20079）、`>128` 工具触发 400（#24246），反映配置层与执行层脱节。
4. **安全默认值的缺失**：多个 p1/p2 安全 PR 表明，路径校验、环境变量隔离、脱敏时机等"默认安全"尚未落实，开发者期待更严格的沙箱与最小权限。
5. **代理主动性不足**：Gemini 不主动调用 skills/subagents（#21968），需要更智能的编排与意图路由（#19873），否则自动化收益大打折扣。

---

*报告完 · 数据截至 2026-09-27 更新记录*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-09-28**

---

## 1. 今日速览

今日社区活跃度集中在 **权限控制、模型切换与长会话稳定性** 三大方向。新版本 v1.0.89-5 带来了 Claude Code 规则文件支持与交互细节优化；Issue 区最热门的话题是「交互模式的工具白名单」（#1973，👍29）与「单会话多模型/BYOK 切换」（#3709，👍33），反映出用户对更精细权限与更灵活模型控制的强烈诉求。同时，多个 `[triage]` 标记的认证/会话类 Bug 集中更新，长驻进程的可靠性问题值得关注。

---

## 2. 版本发布

### v1.0.89-5

**新增功能：**

- **交互输入体验优化**：左键点击 `ask_user` 与 elicitation 表单输入框时，会自动聚焦并将光标定位到点击位置。
- **Claude Code 规则文件支持**：新增对 `.claude/rules` 目录下规则文件的支持，可作为自定义指令使用，进一步降低从 Claude Code 迁移的成本。
- **会话状态可视化**：侧边栏中的会话在完成一轮你尚未查看的对话后，会显示蓝色圆点提示。

> 链接：github.com/github/copilot-cli Releases

---

## 3. 社区热点 Issues（精选 10 条）

### ① #1973 交互模式工具白名单 🔥
- **作者**：Dicer-J ｜ **状态**：OPEN ｜ **评论**：13 ｜ **👍**：29
- **要点**：当前交互模式对每次工具调用都需手动批准（包括 `grep`、`cat`、`git log` 等安全只读操作），唯一替代方案 `/allow-all` 却会放行破坏性操作。社区呼吁引入细粒度白名单。
- **为何重要**：这是今日评论数最高的 Issue，触及日常使用最核心的效率痛点，与 #179（全局可配置工具，👍43）形成同一诉求的呼应。
- 链接：github/copilot-cli Issue #1973

### ② #3709 单会话多模型切换（含 BYOK/本地） 🔥
- **作者**：juancarlosjr97 ｜ **状态**：OPEN ｜ **评论**：8 ｜ **👍**：33
- **要点**：BYOK 模式通过 `COPILOT_MODEL` 把会话锁定到单一模型，`/model` 选择器只列出 GitHub 托管模型，无法选择本地 BYOK 提供商模型。
- **为何重要**：点赞数最高，反映本地模型/多模型工作流的强烈需求。
- 链接：github/copilot-cli Issue #3709

### ③ #4929 进程级认证令牌停止刷新（triage）
- **作者**：NGloreous ｜ **状态**：OPEN ｜ **评论**：7 ｜ **👍**：0
- **要点**：长时间运行的 CLI 进程会永久丢失认证，所有提示与 `/ask` 报授权错误，`/login` 无法恢复，只能重启。
- **为何重要**：长驻会话可靠性严重问题，直接影响生产使用。
- 链接：github/copilot-cli Issue #4929

### ④ #4905 桌面应用会话数分钟后失效（triage）
- **作者**：TwoPatient ｜ **状态**：OPEN ｜ **评论**：6 ｜ **👍**：4
- **要点**：GitHub 凭证注册失效导致 `github-mcp-server` 目录过期并致命化，桌面应用（1.1.22）会话在启动数分钟后死亡。
- **为何重要**：桌面端 + MCP 组合的稳定性问题，与 #4929 同属认证生命周期议题。
- 链接：github/copilot-cli Issue #4905

### ⑤ #2627 可配置系统提示（精简 token 开销）
- **作者**：ronkeele ｜ **状态**：OPEN ｜ **评论**：6 ｜ **👍**：21
- **要点**：系统提示在会话启动即消耗约 20,500 tokens（约占 200K 上下文的 10%），加上工具定义约 8,500 tokens，用户希望可裁剪。
- **为何重要**：直接关系到上下文预算与成本，是高赞的优化类需求。
- 链接：github/copilot-cli Issue #2627

### ⑥ #179 全局可配置允许工具
- **作者**：timtatt ｜ **状态**：OPEN ｜ **评论**：4 ｜ **👍**：43
- **要点**：希望在 `config.json` 中全局配置允许的工具，类似 Claude Code 的 `~/.claude/settings.json`。
- **为何重要**：全场最高赞之一，与 #1973 共同代表权限配置的主流诉求。
- 链接：github/copilot-cli Issue #179

### ⑦ #1613 内置 Git worktree 生命周期管理
- **作者**：arunsathiya ｜ **状态**：OPEN ｜ **评论**：4 ｜ **👍**：38
- **要点**：希望 CLI 能自动创建/销毁 worktree，实现任务的隔离执行与清理。
- **为何重要**：并行多任务工作流的关键能力，高赞需求。
- 链接：github/copilot-cli Issue #1613

### ⑧ #1857 支持取消/移除已入队消息
- **作者**：dorigasigal ｜ **状态**：OPEN ｜ **评论**：12 ｜ **👍**：29
- **要点**：通过 `Ctrl+Q` / `Ctrl+Enter` 入队的消息或斜杠命令在 agent 繁忙或 `/compact` 期间无法取消。
- **为何重要**：评论数第二高，交互控制缺失的典型痛点。
- 链接：github/copilot-cli Issue #1857

### ⑨ #4950 BYOK 强制贪婪采样导致推理模型退化（triage）
- **作者**：bmazzarol-bunnings ｜ **状态**：OPEN ｜ **评论**：2 ｜ **👍**：0
- **要点**：CLI 1.0.81+ 对 BYOK/OpenAI 兼容提供商强制发送 `temperature:0` 等参数，导致推理模型退化与上下文溢出时静默挂起（1.0.80 无此问题）。
- **为何重要**：影响本地/第三方模型的可用性，属回归类 Bug。
- 链接：github/copilot-cli Issue #4950

### ⑩ #4602 store_memory 失败与 MCP 服务器被剥离
- **作者**：tabriggs ｜ **状态**：OPEN ｜ **评论**：2 ｜ **👍**：0
- **要点**：`managedSettings` 在 `serverFetchFailed` 抖动时"失败关闭"，导致整会话 `store_memory` 失败、所有 MCP 服务器被剥离，疑为多个 Issue 的共同根因。
- **为何重要**：涉及企业级配置与 MCP 生态，根因分析价值高。
- 链接：github/copilot-cli Issue #4602

**其他值得留意**：#1305（Remote OAuth MCP 的 CIMD 支持，已关闭，👍39）、#1697（会话分叉，已关闭，👍25）、#2753（插件技能未注入系统提示）、#4924（worktree 会话自定义 agent 缺失）、#4838（headless 模式 skill 间歇失败）。

---

## 4. 重要 PR 进展

> **说明**：过去 24 小时内仅更新 **1 条 PR**，样本不足以筛选 10 条，故如实呈现现有内容。

### #3817 kCreate "#"
- **作者**：edge500 ｜ **状态**：OPEN ｜ **评论**：无 ｜ **👍**：0
- **摘要**：标题与摘要信息不完整（"aquelos"），暂无法判断具体功能或修复内容，建议维护者补充描述后再评估。
- 链接：github/copilot-cli PR #3817

**观察**：当日 PR 活跃度极低，社区讨论主要集中在 Issue 侧，代码贡献相对冷清。

---

## 5. 功能需求趋势

从全部 Issues 中可提炼出以下社区最关注的方向：

| 方向 | 代表 Issue | 热度信号 |
|---|---|---|
| **权限与工具白名单** | #1973、#179 | 高赞 + 高评论，呼声最强 |
| **多模型 / BYOK / 本地模型支持** | #3709、#4950、#3195、#4623 | 模型选择与兼容性反复出现 |
| **会话与上下文管理** | #2627、#1571、#3703、#1697 | token 开销、压缩丢上下文、会话分叉 |
| **稳定性与认证可靠性** | #4929、#4905、#4602 | 长驻进程认证失效、MCP 掉线 |
| **MCP 生态完善** | #1305、#4907、#3125、#4838 | OAuth、工具动态更新、重连噪音 |
| **Git worktree / 并行工作流** | #1613、#4924 | 多任务隔离需求上升 |
| **交互与终端渲染** | #1857、#2033、#4707、#2285 | 入队取消、超链接、滚动条、复制乱码 |

---

## 6. 开发者关注点

综合开发者反馈，当前高频痛点集中在以下几类：

1. **权限粒度不足**：只读操作也需逐个批准，而 `/allow-all` 又过于激进，"全有或全无"的二元选择让开发者两难（#1973、#179）。
2. **模型控制受限**：BYOK 会话被锁定单模型、`/model` 不列出本地提供商模型，且采样参数被强制覆盖（#3709、#4950）。
3. **长会话可靠性堪忧**：认证令牌停止刷新、桌面应用会话早逝、MCP 重连消息刷屏，均指向长驻进程的生命周期管理缺陷（#4929、#4905、#4907）。
4. **上下文成本与丢失**：系统提示固定占用大量 token，压缩后又丢失当前任务上下文，缺乏可配置性（#2627、#1571、#3703）。
5. **生态兼容与迁移**：Claude Code 规则文件支持（v1.0.89-5 已落地）受到欢迎，说明跨工具兼容是社区的重要考量。
6. **交互细节打磨**：入队消息无法取消、复制含不可见字符、markdown 链接未转 OSC 8 等"小问题"持续被反馈，影响日常体验。

---

*本日报基于 github.com/github/copilot-cli 公开数据整理，链接均为仓库内相对编号，可拼接 `https://github.com/` 前缀访问。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-09-28

> 数据来源：github.com/anomalyco/opencode ｜ 统计窗口：过去 24 小时（截至 2026-09-27）

---

## 一、今日速览

今日无新版本发布，社区讨论集中在 **v2 迁移遗留问题**与**配置/权限一致性**两条主线上。安全与稳定性类 Issue（`opencode serve` 根目录越权、SQLite WAL 膨胀、MCP 进程泄漏）热度最高，同时 OpenCode Go 订阅鉴权故障在昨日集中爆发。PR 侧出现大批 `[automated-pr-cleanup]` 关闭的存量提交，仅有 2 个当日新开 PR 活跃。

---

## 二、版本发布

过去 24 小时内无新 Release。

---

## 三、社区热点 Issues（精选 10 条）

**1. #14445 [CLOSED] `opencode serve` 以 `/` 为工作目录，导致任意路径访问**
评论 8 ｜ 👍 8 ｜ 安全类最高热度。非 root 用户从 `/workspace` 启动服务时，服务端错误地将工作目录设为根 `/`，同时引发权限路径不匹配。这是本日点赞最高的技术性缺陷，社区关注度极高。
https://github.com/anomalyco/opencode/issues/14445

**2. #6156 [CLOSED] 文档：OpenCode 不知道自身配置文件位置**
评论 9（本日最多）｜ 👍 5。向 opencode 询问配置路径时返回不一致答案（根目录 / `.config/opencode` / macOS Application Support），暴露文档与实现不一致，已关闭。
https://github.com/anomalyco/opencode/issues/6156

**3. #49027 [OPEN] Agent 配置扩展字段被原样透传到上游 Provider**
评论 5。自定义/vendor 属性未过滤即转发，触发 `invalid_request_error`，影响 Zen 网关下多个模型（kimi-k3、glm-5.3 等）。属于 v2 Provider 适配层的核心兼容性问题。
https://github.com/anomalyco/opencode/issues/49027

**4. #32825 [OPEN] [2.0] `OPENCODE_CONFIG_DIR` 在 v2 中替换而非追加全局配置**
评论 5 ｜ 👍 1。新旧配置加载器对同一环境变量语义不一致，是典型的 v1→v2 迁移陷阱，易导致用户全局配置"消失"。
https://github.com/anomalyco/opencode/issues/32825

**5. #37888 [OPEN] 建议新增 `OPENCODE_DISABLE_INSTALL` 跳过启动期 npm 安装**
评论 5 ｜ 👍 3。Docker / CI 场景下启动即安装 `@opencode-ai/plugin` 带来副作用，社区希望提供开关。
https://github.com/anomalyco/opencode/issues/37888

**6. #50962 [OPEN] TUI：`client.tui.showToast()` 污染输入框**
评论 5。使用官方文档 API 的插件 toast 会破坏 TUI 输入框渲染，影响插件生态的可用性。
https://github.com/anomalyco/opencode/issues/50962

**7. #37495 [OPEN] SQLite WAL 无限增长（10–15 GB）直至磁盘写满**
评论 4。Desktop 多连接持有长读事务导致 WAL 无法 checkpoint，属严重资源泄漏，需完整退出才能恢复。
https://github.com/anomalyco/opencode/issues/37495

**8. #51003 [OPEN] 全局 stdio MCP 服务器按加载目录重复 spawn，耗尽内存**
评论 4。OpenCode 2 为每个已加载目录启动一份全局 stdio MCP，目录数一多即导致 OOM 与健康检查超时。
https://github.com/anomalyco/opencode/issues/51003

**9. #50885 [OPEN] 订阅 OpenCode Go 后拿不到 API Key**
评论 2 ｜ 👍 9（本日点赞最高）。Go 订阅生效但控制台无个人 Key，Keys 页只能创建 Service Account 且不生成 Go Key。同类问题昨日集中出现（#51689、#51683、#51685、#51388），属线上事故级反馈。
https://github.com/anomalyco/opencode/issues/50885

**10. #49389 [OPEN] 核心已有但插件无法触达的五项 Session 能力**
评论 4 ｜ 👍 3。指出插件 API 在会话写操作侧的缺口，反映插件生态对更深层 SDK 能力的诉求。
https://github.com/anomalyco/opencode/issues/49389

> 其他值得留意：#32504（Windows Bash 工具因管道未关闭挂起）、#42448（v2 压缩超上下文窗口）、#50916（v2 移除 LSP 诊断引发质疑）、#51723（斜杠内联代码被误判为文件路径）、#50390（`~` 路径未展开导致 File not found）。

---

## 四、重要 PR 进展（精选 10 条）

**1. #51730 [OPEN] fix(core): Location 关闭时关闭其 MCP 服务器**
修复 #50758 的 reload 场景：配置/插件重载后旧 stdio MCP 进程残留并与新进程重叠。当日新开，直接回应 #51003 相关痛点。
https://github.com/anomalyco/opencode/pull/51730

**2. #51732 [OPEN] refactor(core): 复用 session message 行编解码**
将 `SessionMessage.Info` 与 `session_message` 行之间的映射从 5 处重复实现收敛为共享编解码，降低一致性风险。当日新开。
https://github.com/anomalyco/opencode/pull/51732

**3. #45571 fix(tui): 正确解析显式选中的隐藏 Agent**
隐藏主 Agent 不再出现在 TUI 选择器/循环中，但允许 `--agent` 显式指定，修复 #45573。
https://github.com/anomalyco/opencode/pull/45571

**4. #45553 feat(console): 幂等的 Go 配额修复端点**
新增鉴权支持端点，可精确回退 Go 订阅者当月已消耗配额，不触及周/滚动用量与计费——与今日 Go 鉴权故障高度相关。
https://github.com/anomalyco/opencode/pull/45553

**5. #45546 feat(telegram): 双向 Telegram TUI 会话桥**
迁移至 `@opencode-ai/sdk/v2` 的 `OpencodeClient`，实现 Telegram 与 TUI 的双向会话镜像。
https://github.com/anomalyco/opencode/pull/45546

**6. #45536 feat(acp): 通过 `session_info_update` 转发会话标题变更**
会话标题由标题 Agent 或 `agent.title.prompt` 生成/重命名时同步给 ACP 客户端。
https://github.com/anomalyco/opencode/pull/45536

**7. #45526 refactor(process): 将 spawner 抽离为本地包**
进程生成逻辑的抽取实验，关联 #45407，属架构级重构铺垫。
https://github.com/anomalyco/opencode/pull/45526

**8. #45507 fix(sap-ai-core): 规范化 `finish_reason` 并剥离 assistant prefill**
修复 sap-ai-core 模型 400 错误（#45313、#45314）。
https://github.com/anomalyco/opencode/pull/45507

**9. #45491 fix(opencode): edit 工具将模糊匹配误报为精确成功**
`edit.txt` 的模糊匹配被当作精确成功上报，修复 #34424 的第 2、3 点。
https://github.com/anomalyco/opencode/pull/45491

**10. #45472 fix(websearch): 移除 Provider 白名单，默认全 Provider 启用**
websearch 由客户端 Exa/Parallel MCP 支撑，其可用性不应绑定 Provider，修复 #44307。
https://github.com/anomalyco/opencode/pull/45472

> 注：本日展示的 20 条 PR 中有 18 条带 `[automated-pr-cleanup]` 标签且状态为 CLOSED（创建于 2026-08-27，昨日批量更新），实为存量清理，非新增开发活动。其余值得关注：#45489（TUI 启动 AbortError）、#45482（异步 subagent 任务应答）、#45476（v2 Bash 注入插件环境变量）、#45449（QR 远程控制 + 移动端接入）、#45413（值构造的会话环境）、#45410（重连时保留实时转录）。

---

## 五、功能需求趋势

从本期 Issues 可提炼出四条社区主线：

1. **插件 / SDK 能力扩展**：插件无法触达核心会话能力（#49389）、`showToast` 破坏 TUI（#50962）、Plugin 环境变量未注入 v2 Bash——插件生态正从"能跑"走向"能写"。
2. **配置与环境变量一致性**：`OPENCODE_CONFIG_DIR` 语义冲突（#32825）、配置路径文档混乱（#6156）、`OPENCODE_DISABLE_INSTALL` 需求（#37888），反映 v1→v2 迁移期的配置契约不稳定。
3. **资源与进程生命周期管理**：MCP 进程按目录重复 spawn（#51003）、Location 关闭不清理 MCP（#51731）、SQLite WAL 膨胀（#37495），性能/资源类问题成为高优先方向。
4. **体验型新功能**：语音按住说话输入（#35219）、桌面端"重开已关闭标签"（#51717）、QR 远程控制与移动端接入（#45449），交互层需求正在累积。

此外，**v2 功能回退**（LSP 诊断 #50916、压缩逻辑 #42448）与**新模型适配**（Go 模型鉴权、SAP AI Core）持续构成稳定需求面。

---

## 六、开发者关注点

- **鉴权与订阅可用性是当前最大痛点**：OpenCode Go 订阅相关 Issue 昨日集中爆发（#50885 获 9 👍，另有 #51689、#51683、#51685、#51388 多起"Invalid API key / 需要有效订阅"报错），并伴随 Go 徽章消失。这已非个别用户问题，而是影响付费用户核心链路的线上故障。
- **v2 迁移的隐性破坏**：配置目录语义变更、LSP 诊断移除、压缩超窗、Provider 扩展字段透传，开发者普遍反映 v1 可用而 v2 回归，迁移文档与实际行为存在落差。
- **安全与权限边界**：`opencode serve` 工作目录被设为 `/`（#14445，8 👍）与 shell 裸重定向绕过权限检查（#49948），提示权限模型存在被绕过的风险面。
- **跨平台稳定性**：Windows 上的 Bash 挂起（#32504）、桌面端路径解析（`~` 不展开 #50390、斜杠代码误判为路径 #51723）等平台细节问题持续消耗用户耐心。
- **对自动化维护的观感**：当日 PR 榜几乎被 `[automated-pr-cleanup]` 批量关闭占据，实际新提交仅 #51730、#51732 两条，社区可感知的"活跃开发信号"偏弱。

---

*报告生成时间：2026-09-28 ｜ 数据截至 2026-09-27 更新*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



# Pi 社区动态日报 — 2026-09-28

> 数据来源：[earendil-works/pi-mono](https://github.com/badlogic/pi-mono) | 过去 24 小时无新 Release，但 Issues 与 PR 活跃。

---

## 1. 今日速览

今日无版本发布，但社区活跃度较高，共 31 条 Issue 更新、6 条 PR 更新。核心动态集中在三方面：**严重 Bug 反馈**（"Working…" 卡死、compaction 上下文溢出）、**性能与扩展性讨论**（启动延迟、扩展加载成本、观测性缺失），以及**重磅功能 PR**（Codemode + MCP 合入）。整体看，社区正从"能用"向"好用"阶段过渡，对稳定性、性能和可扩展性提出更高要求。

---

## 2. 版本发布

**无。** 过去 24 小时未发布新版本。

---

## 3. 社区热点 Issues（精选 10 条）

### 🔴 #10031 — Pi sporadically stuck in "Working…" when thinking is stopped with ESC
- **作者**: kkovacs | **评论**: 16 | **👍**: 2
- [链接](https://github.com/earendil-works/pi/issues/10031)
- **重要性**: 高频致命 Bug。用户按 ESC 停止思考后，Pi 常卡在 "Working…" 状态，只能 Ctrl+C 退出再恢复。持续约一个月（自 v0.84.0），跨机器复现。社区反应热烈，16 条评论集中在复现步骤与临时规避方案，期待官方定位 thinking 流程与 UI 状态机的同步问题。

### 🟠 #7739 — Set a startup-time budget targeting jcode-comparable latency and memory
- **作者**: 1am2syman | **评论**: 10 | **👍**: 0
- [链接](https://github.com/earendil-works/pi/issues/7739)
- **重要性**: 性能对标诉求。提出为 Pi 设定启动时间预算，以缩小与 jcode 的延迟和内存差距（附带基准测试表格）。反映社区对轻量级 AI CLI 的强烈需求，已持续讨论 50 天。

### 🔴 #5581 — Custom messages via `pi.sendMessage()` with `triggerTurn: true` bypass `before_agent_start`
- **作者**: dljsjr | **评论**: 8 | **👍**: 3
- [链接](https://github.com/earendil-works/pi/issues/5581)
- **重要性**: API 设计缺陷。`triggerTurn: true` 直接调用 `_runAgentPrompt`，跳过了 `emitBeforeAgentStart` 事件，导致扩展钩子失效，特定场景下（如工具调用前注入上下文）行为异常。社区 3 个赞，视为扩展生态的潜在破坏点。

### 🟠 #8810 — Extension-registered providers intermittently ignore `defaultProvider`/`defaultModel`
- **作者**: rosingrind | **评论**: 7 | **👍**: 2
- [链接](https://github.com/earendil-works/pi/issues/8810)
- **重要性**: 扩展与配置的竞态问题。通过 `pi.registerProvider()` 注册的扩展，偶尔不读取 `settings.json` 中的默认值，静默回退到其他 provider。影响扩展开发者的配置可靠性，2 个赞说明社区认可其严重性。

### 🔴 #10033 — Compaction prompt includes all thinking text and exceeds context window
- **作者**: martinoturrina | **评论**: 6 | **👍**: 1
- [链接](https://github.com/earendil-works/pi/issues/10033)
- **重要性**: 推理模型下的致命缺陷。`serializeConversation()` 将完整 thinking 块塞入摘要 prompt，导致 DeepSeek V4.1 等长会话永远压缩失败。直接影响长对话可用性，尤其自托管用户。

### 🟠 #9974 — Pi mishandles Responses API tool calls from llama.cpp, executing duplicated/corrupted calls
- **作者**: WGH- | **评论**: 6 | **👍**: 0
- [链接](https://github.com/earendil-works/pi/issues/9974)
- **重要性**: 工具调用协议兼容性。llama.cpp 的 Responses API 返回的 SSE 流中，工具调用被 Pi 重复执行或参数错乱。对本地模型用户是高危问题，6 条评论中包含原始 SSE 数据片段，便于调试。

### 🟡 #7658 — Extension API for persisting API-key credentials (auth.json)
- **作者**: arseniy-gl | **评论**: 5 | **👍**: 0
- [链接](https://github.com/earendil-works/pi/issues/7658)
- **重要性**: 扩展生态基础设施缺口。当前扩展无法以编程方式将 API 密钥持久化到 `auth.json`，只能依赖 `models.json` 或遗留 API。这是扩展支持多 provider 的关键能力，社区呼吁已久。

### 🟡 #9905 — Anthropic: `thinking.display` is always sent as "summarized", no CLI way to change
- **作者**: xiaoliu10 | **评论**: 5 | **👍**: 0
- [链接](https://github.com/earendil-works/pi/issues/9905)
- **重要性**: Anthropic 集成的配置僵化。Pi 硬编码 `thinking.display: "summarized"`，类型定义只允许 `"summarized" | "omitted"`，用户无法通过 CLI 覆盖。影响对 thinking 输出有特殊需求的场景。

### 🟠 #9946 — CMD mode (!) ignores `outputPad` setting
- **作者**: spamcop | **评论**: 4 | **👍**: 0
- [链接](https://github.com/earendil-works/pi/issues/9946)
- **重要性**: UI 渲染不一致。CMD 模式（`!` 命令）输出首行多一个空格，即使 `outputPad: 0` 也不生效，而普通聊天消息正常。破坏终端输出整洁度，4 条评论中有人指出这是 TUI 渲染管线的边界问题。

### 🟠 #9010 — Context compaction causes memory spikes with local LLMs due to in-process string duplication
- **作者**: t2tx | **评论**: 3 | **👍**: 0
- [链接](https://github.com/earendil-works/pi/issues/9010)
- **重要性**: 本地模型用户的性能杀手。compaction 在主进程内多次复制大字符串，导致内存飙升。缺乏子进程/Worker 隔离，对本地 LLM 尤其不友好。已持续 26 天，反映架构层面的优化需求。

---

## 4. 重要 PR 进展（共 6 条）

### 🚀 #10040 [OPEN] feat(coding-agent): Codemode and MCP
- **作者**: mitsuhiko | **更新**: 2026-09-27
- [链接](https://github.com/earendil-works/pi/pull/10040)
- **简介**: 重磅功能 PR，一次性加入 **Codemode** 与 **MCP** 支持。Codemode 旨在为 Jev 等模型提供沙箱执行环境；MCP 则增强工具生态。PR 规模较大，涵盖大部分功能模块，目前社区关注度高但尚未合并。

### 🌿 #8572 [OPEN] feat(ai): Amazon Bedrock Mantle
- **作者**: cristinaponcela | **更新**: 2026-09-27
- [链接](https://github.com/earendil-works/pi/pull/8572)
- **简介**: WIP 状态，等待 API Key 权限以完成端到端测试。新增对 Amazon Bedrock **Mantle API** 的支持，使 Pi 能正确调用通过 Mantle 暴露的 GPT-5.x 等模型（此前误用 Converse 接口导致验证错误）。关联 Issue #5363。

### ✅ #10100 [CLOSED] fix(ai): preserve signature-only reasoning details deltas
- **作者**: Serenity-2026 | **更新**: 2026-09-27
- [链接](https://github.com/earendil-works/pi/pull/10100)
- **简介**: 修复 OpenRouter 上 Claude 的 reasoning signature 丢失问题。流式响应中 `reasoning.text` delta 若只有 `signature` 无 `text`，原 `isOpenAIReasoningDetail` 判断会丢弃该 delta，导致签名无法传递至 thinking 链路。已合并。

### ✅ #10091 [CLOSED] Expose message decoration hook for user and assistant text
- **作者**: ajunwalker | **更新**: 2026-09-27
- **链接](https://github.com/earendil-works/pi/pull/10091)
- **简介**: 新增 `ctx.ui.setMessageDecorator((role, content, theme) => component)` 钩子，允许扩展自定义普通用户消息与助手文本的渲染（thinking 与工具输出不受影响）。包含专项渲染测试与 TUI 文档，已合并。

### ✅ #10085 [CLOSED] feat(agent,coding-agent): emit pi.ai.request spans from the agent loop
- **作者**: manno23 | **更新**: 2026-09-27
- [链接](https://github.com/earendil-works/pi/pull/10085)
- **简介**: 填补观测性空白。`AI_TELEMETRY_SCHEMA`（`pi.ai.request`）已在 `pi-agent-core` 中定义，

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>



# Qwen Code 社区动态日报 — 2026-09-28

---

## 1. 今日速览

Qwen Code 社区今日围绕 **Managed Agent 架构**持续密集推进，Stage D/H 多个里程碑同步落地，配套的 Runtime Broker 稳定性、MCP 安全、凭据隐私等问题被高频讨论。同时，Ollama 零参数工具兼容性、macOS 面板 UI 缺陷等开发者体验类 bug 也被快速响应和修复。

---

## 2. 版本发布

**v0.24.6-nightly.20260926.d6f414190a** 已发布，主要更新：

- **test(cli)**：补上 managed-context/1 遗留的 fixture 缺口，完善 CLI 测试覆盖。
- **fix(mcp)**：修复 MCP 相关注册逻辑问题，提升 MCP 服务端稳定性。

> 链接：https://github.com/QwenLM/qwen-code/releases/tag/v0.24.6-nightly.20260926.d6f414190a

---

## 3. 社区热点 Issues（精选 10 个）

### 🔴 #12380 — Managed Agent 双路径架构提案（36 条评论，热度最高）
- **摘要**：提出 staged Managed Agent 架构，保留现有 TypeScript agent loop，模型推理与工具环境解耦，赋予 Sessions 持久所有权、Workspace 绑定、可恢复工具执行和稳定 WebSocket。
- **为何重要**：这是整个 Qwen Code 多 Agent 路线图的总纲，社区讨论最密集的议题，几乎所有后续 Stage 类 Issue 都挂靠于此。
- 链接：https://github.com/QwenLM/qwen-code/issues/12380

### 🔴 #12826 — Webview 因 CodeMirror EditorView.update 竞态条件崩溃（7 条评论）
- **摘要**：0.24.6 版本在 Remote-SSH 环境下使用 `@file` 引用时，Webview 崩溃并显示 "Something went wrong"，属于 P1 级 UI bug。
- **为何重要**：直接影响远程开发场景的核心交互流程，开发者反馈强烈。
- 链接：https://github.com/QwenLM/qwen-code/issues/12826

### 🔴 #12856 — 辅助模型选择器持久化 NUL 分隔的 baseUrl，泄露凭据（5 条评论）
- **摘要**：`visionModel`、`imageModel`、`advisorModel`、`fastModel`、`compactionModel` 五个配置键以 `authType:<id>\0<baseUrl>` 格式存储，当 baseUrl 包含 userinfo（含凭证）时，任何公开输出 surface 都会原样泄露凭据。属于安全类 P2 bug。
- **为何重要**：涉及 credential-security，可能导致 API Key 泄露，安全风险高。
- 链接：https://github.com/QwenLM/qwen-code/issues/12856

### 🔴 #12793 — Managed Agent Stage D：公开 API 契约、DTO、Session 查询与事件回放（5 条评论）
- **摘要**：Stage D 的核心交付物——将 OpenAPI 作为仓库内契约，生成或校验 DTO，实现 Session 查询和事件回放。已被关闭，进入集成阶段。
- **为何重要**：标志着 Managed Agent 的对外契约正式成型，为第三方集成奠定基础。
- 链接：https://github.com/QwenLM/qwen-code/issues/12793

### 🔴 #12835 — Skill 工具被排除时仍注入 Skills 清单（5 条评论）
- **摘要**：使用 `--exclude-tools skill` 时，系统事件中的工具列表不包含 skill，但日志请求仍注入了 `<system-reminder>` 格式的 Skills 清单。属于上下文性能优化范畴的 bug。
- **为何重要**：影响 token 效率和上下文纯净度，对非交互式调用场景尤其关键。
- 链接：https://github.com/QwenLM/qwen-code/issues/12835

### 🟡 #12874 — macOS 右侧面板开启后无法关闭（4 条评论）
- **摘要**：Qwen Code Desktop 0.24.6 on macOS，点击 toggle 按钮展开右侧面板后，再次点击无反应，Esc、拖拽分隔线等替代关闭方式均失效。根因为 toggle 状态机缺陷。
- **为何重要**：直接影响 Desktop 用户的基本操作闭环。
- 链接：https://github.com/QwenLM/qwen-code/issues/12874

### 🟡 #12844 — `qwen mcp reconnect` 在禁用使用统计后仍上传 session_start（4 条评论）
- **摘要**：`privacy.usageStatisticsEnabled: false` 时，`qwen mcp reconnect` 仍向 RUM 终端发送 `session_start` 事件，根因是 `createMinimalConfig()` 未初始化 `usageStatisticsEnabled`。涉及 data-privacy。
- **为何重要**：违反用户隐私设置，属于合规性缺陷。
- 链接：https://github.com/QwenLM/qwen-code/issues/12844

### 🟡 #12766 — Runtime Broker 重启后无法采纳或退役本地进程 Worker（4 条评论）
- **摘要**：Broker 重启后，对于已持久化 `READY` 绑定的本地 Worker，无法证明其存活或死亡，导致孤儿 Worker 持续运行。属于 daemon 可靠性问题。
- **为何重要**：影响长时间运行场景的资源管理和稳定性。
- 链接：https://github.com/QwenLM/qwen-code/issues/12766

### 🟡 #12670 — 主机重启时进行中的执行永久 pin 住 LOST 绑定（4 条评论）
- **摘要**：Broker 与 Worker 同时被 kill 后，派发租约过期但 LOST 绑定未被清理，新 Broker 无法恢复。属于 Runtime Broker 容错性缺陷。
- **为何重要**：在生产环境的崩溃恢复场景中可能导致状态不一致。
- 链接：https://github.com/QwenLM/qwen-code/issues/12670

### 🟡 #12878 — Ollama 拒绝零参数工具（3 条评论）
- **摘要**：通过 openai auth type 连接本地 Ollama 时，无 `parameters` 字段的工具导致 400 错误（`properties must be an object`），所有含零参数工具的会话均失败。
- **为何重要**：直接影响本地 Ollama 用户的核心功能可用性。
- 链接：https://github.com/QwenLM/qwen-code/issues/12878

---

## 4. 重要 PR 进展（精选 10 个）

### ✅ #12855 — Managed Agent Stage H：提交记录并提供任务列表（H0c）
- **内容**：Session authority 提交 Stage H 记录，控制平面从记录重建任务列表，每条记录一个修订链，按 task key 索引。这是 Managed Agent 持久化层的关键一环。
- 链接：https://github.com/QwenLM/qwen-code/pull/12855

### ✅ #12848 — Hosted 前台 Shell 转换（`hosted-workspace-shell/1`）
- **内容**：在私有 Hosted Workspace 循环中增加前台 Shell 转换，包含已有文件工具，在保存的 Workspace 中执行命令，完整保留 stdout/stderr 至 SQL Session Store。
- 链接：https://github.com/QwenLM/qwen-code/pull/12848

### ✅ #12879 — 增加 Ollama Provider，为零参数工具注入空 parameters
- **内容**：修复 #12878，Ollama 拒绝无 `parameters` 字段的工具，此 PR 为零参数工具显式注入空 `parameters` 对象。
- 链接：https://github.com/QwenLM/qwen-code/pull/12879

### ✅ #12838 — Skill 工具未注册时跳过 Skills 清单注入
- **内容**：当 Skill 工具被排除时，启动预lude 不再注入 `<available_skills>` 清单，也不再发送 `No skills are currently available.` 回退消息。直接回应 #12835。
- 链接：https://github.com/QwenLM/qwen-code/pull/12838

### ✅ #12857 — `qwen mcp reconnect` 尊重使用统计 opt-out 和代理设置
- **内容**：修复 #12844，`createMinimalConfig()` 现在正确初始化 `usageStatisticsEnabled` 和 `proxy`，避免默认开启使用统计。
- 链接：https://github.com/QwenLM/qwen-code/pull/12857

### ✅ #12876 — macOS Docked 右侧面板位于标题栏拖拽区域下方
- **内容**：修复 macOS Desktop 右侧面板的布局问题，使面板关闭按钮避开标题栏拖拽区域。与 #12874 相关。
- 链接：https://github.com/QwenLM/qwen-code/pull/12876

### ✅ #12833 — Desktop 发布矩阵增加 linux-aarch64 构建腿
- **内容**：为 Qwen Code Desktop 增加 ARM64 Linux 发布入口，生成 arm64 AppImage 和 deb， alongside 现有 x86_64 构建。
- 链接：https://github.com/QwenLM/qwen-code/pull/12833

### ✅ #12531 — MCP 服务器规则不再授权冲突的服务器
- **内容**：修复 MCP 通配符权限模式在有损 `sanitizeToolNameForProvider()` 比较中的逻辑缺陷，`matchesMcpPattern()` 现在对可信拼写做字面前缀匹配。
- 链接：https://github.com/QwenLM/qwen-code/pull/12531

### ✅ #12590 — 可选的 System One Decision Gate（von-install + /superfast）
- **内容**：实现一个小型本地决策模型（Von），在单次前向传播中对用户 turn 进行分类，以跳过明显请求的昂贵工作。默认关闭，失败即放行。
- 链接：https://github.com/QwenLM/qwen-code/pull/12590

### ✅ #12858 — Web Shell 工作区 Agent 协作 UI
- **内容**：在 #11206 之上构建 Web Shell 工作区 Agent 持久化界面：Agent 和任务管理、共享线程聊天、实时活动、侧边对话、以及从已有聊天中 `@agent` 分配。
- 链接：https://github.com/QwenLM/qwen-code/pull/12858

---

## 5. 功能需求趋势

从本周 Issues 和 PR 可提炼出以下社区关注方向：

| 方向 | 热度 | 说明 |
|------|------|------|
| **Managed Agent 多 Agent 架构** | 🔥🔥🔥 | #12380 总纲下的 Stage D/E/F/H 各阶段密集推进，涵盖 API 契约、任务列表、故障门、CI 门、前台 Shell 等，是当前最高优先级的战略方向 |
| **MCP 生态集成** | 🔥🔥 | MCP 安全修复、MCP 重连隐私问题、MCP 工具权限模式优化持续出现，MCP 作为工具协议标准的地位进一步巩固 |
| **凭据与隐私安全** | 🔥🔥 | #12856（baseUrl 泄露凭据）、#12844（使用统计 opt-out 失效）暴露了配置持久化和最小配置构造中的安全盲区 |
| **UI/UX 与 Desktop 体验** | 🔥 | macOS 面板 toggle 失效、Webview 崩溃、VP 内容对齐、linux-aarch64 发布矩阵等，Desktop 端的体验打磨和平台覆盖是持续重点 |
| **内存与上下文管理** | 🔥 | Skills 清单注入控制、Auto Memory 结构化召回、上下文性能优化，均指向更高效的 token 利用和更可控的上下文窗口 |
| **CI/CD 与发布工程** | 🔥 | arm64 runner glibc floor、yamllint 回退、CI 测试门禁、Hosted 进程验证门等，发布流程的

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



# DeepSeek TUI (Codewhale) 社区动态日报
**日期：2026-09-28 | 数据来源：github.com/Hmbown/Codewhale**

---

## 1. 今日速览

今天社区最核心的动态是 **v0.10.1 集成 PR #6672** 正在推进，涵盖大量安全加固、TUI 体验修复与运行时重构。同时，社区反馈集中在 0.10.0 引入的回归 bug（如 Windows Terminal 多行粘贴、TUI 滚动卡顿）以及多会话并发下的稳定性问题。维护者 Hmbown 今日密集提交了多个修复 PR，覆盖信任边界、快照所有权、RLM 超时等关键领域。

---

## 2. 版本发布

**过去 24 小时无新版本发布。** 但 v0.10.1 的集成工作正在紧锣密鼓进行中（见下文 PR 部分），多个修复已就绪等待合并。

---

## 3. 社区热点 Issues（精选 10 条）

| # | 标题 | 类型 | 为何重要 |
|---|------|------|----------|
| **#6427** | 0.10.0 regression: Windows Terminal 多行粘贴每行自提交 | bug | 0.10.0 修复 #5981 后再次回归，直接影响 Windows 用户核心输入体验，社区 3 条评论 |
| **#6573** | 多个 TUI 会话争抢 Subagents Store → CPU 无限循环 | bug | FreeBSD/多平台复现，空闲进程 CPU 满载，属于严重稳定性问题 |
| **#6651** | TUI 失去焦点后无法实时刷新 | bug | 用户将终端窗口置于后台时内容停滞，影响多任务工作流 |
| **#6689** | hooks: 向 tool_call_after 导出 post-admission 执行收据 | enhancement | 现有 hook 拿不到"实际执行命令"，工具链可观测性不足 |
| **#6688** | `exec` 仅通过 argv 接收 prompt，>128 KiB 触发 E2BIG | bug | 大 prompt 场景下 Codewhale 启动前即失败，限制了自动化使用 |
| **#6546** | Todo list 无法管理（找不到清除/删除方法） | enhancement | macOS 用户反馈任务列表无法清理，影响长期使用 |
| **#6621** | 新 HTTP 线程未绑定快照会话，file undo 返回 201 但 files_restored=false | bug | 文件撤销功能在 HTTP 线程场景下失效 |
| **#6654** | 后台 shell 无父进程死亡清理，TUI 意外退出后子进程残留 | bug | `background: true` 进程可能比 TUI 生命周期更长，造成僵尸进程 |
| **#6652** | TUI 长时间运行后滚动卡顿（像果冻一样） | bug | 性能退化问题，运行 3-4 小时后复现 |
| **#6650** | Ctrl+T 切换 thinking intensity 快捷键异常（按 3 次才切换） | bug | 固定路由模型下快捷键失效，影响推理强度调节 |

> 注：#6657 为医疗广告垃圾 Issue，已排除。#6665 为测试相关，社区关注度较低。

**社区反应：** 多个 Issue 由维护者直接认领或通过 PR 响应（如 #6650 已有 PR #6667 跟进，#6621 已有 PR #6645 修复）。#6427、#6573 等回归/并发问题获得较高关注。

---

## 4. 重要 PR 进展（精选 10 条）

| # | 标题 | 方向 | 核心内容 |
|---|------|------|----------|
| **#6672** | v0.10.1 integration: land the ready PRs together | 集成 | 整合所有已就绪 PR，一次性跑 CI，避免 CHANGELOG 冲突 |
| **#6686** | fix(tui): keep thinking label in footer at every effort tier | TUI | 修复 80 列窄布局下 footer 中 `xhigh` 等推理标签被截断的问题 |
| **#6687** | fix(tui): first launch keeps configured provider instead of local Ollama | 配置 | 修复新装环境即使配置了 OpenAI 兼容端点，若有 Ollama 在运行仍会错误切换 |
| **#6684** | fix(rlm): bound RLM turn by child wall-clock budget | 性能 | RLM 循环此前无超时 bound，模型卡死会无限占用 turn；现加入子进程时钟预算 |
| **#6685** | fix(tui): read anchors, notes and registry names through one confined open | 安全 | 工作区受控文件统一走"不 follow、containment 检查"的受限打开，替代零散读取 |
| **#6667** | fix(tui): Ctrl+T moves to new effective thinking tier on fixed routes | TUI | 修复自动路由下 Ctrl+T 使用独立 9 级 ladder 导致与实际模型不匹配的问题（响应 #6650） |
| **#6680** | fix: keep undo, resume and requirements honest; bound stream lines | 功能 | 6 项审计修复：写文件读取失败不再记录空内容、恢复会话不再丢弃引用 compaction marker 的消息等 |
| **#6645** | fix(runtime): threads own restore points; undo restores or refuses | 运行时 | 核心重构：Runtime 线程获得持久身份，快照归属到 thread.id，/undo 按路径作用域执行 |
| **#6681** | fix(runtime): harden browser sessions, fleet SSH and tool trust boundaries | 安全 | Fleet SSH 严格主机密钥检查、agent 只能从自己控制的 agent 恢复、任务 gate 结果需授权 |
| **#6601** | fix(trust): credentials masked at rest, honest approval timeouts, workspace trust | 安全 | 信任半成品收尾：静态凭据脱敏、超时诚实报告、工作区信任边界 |

> 其他高价值 PR：**#6678**（路径包含关系加固）、**#6671**（子进程环境剥离凭据）、**#6635**（后台任务结束通知）、**#6648**（Git 操作前置条件）、**#6591**（会话收据功能）。

---

## 5. 功能需求趋势

从近期所有 Issues 中提炼出社区最关注的四大方向：

1. **TUI 体验与性能**
   - 实时刷新（失去焦点/最小化后停滞）
   - 滚动流畅度（长期运行后果冻卡顿）
   - 多行粘贴、快捷键可靠性
   - 光标/ composer 显隐状态一致性

2. **安全与信任边界**
   - 凭据静态脱敏、子进程环境剥离
   - 工作区路径包含检查（防止越权读写）
   - 后台进程生命周期管理（父进程死亡清理）
   - Hook/工具链的可观测性（执行收据）

3. **会话与快照管理**
   - HTTP 线程与快照会话绑定
   - Undo 操作的作用域限定与诚实性
   - 会话收据（session receipts）功能

4. **配置与扩展性**
   - Provider 描述符字段完整性（AICraft 缺失 docs_url 等）
   - CLI 大 prompt 传输限制（E2BIG）
   - Todo list 管理能力

---

## 6. 开发者关注点

- **0.10.0 回归风险**：#6427（Windows Terminal 粘贴）是 #5981 的二次破坏，说明相关修复不够稳健，跨终端类兼容性需加强测试。
- **多会话并发稳定性**：#6573 的 CPU spin-loop 揭示了 Subagents Store 在多 TUI 实例下的竞态问题，可能影响生产环境部署。
- **跨平台体验碎片化**：Mac（#6545 光标、#6546 Todo）与 Windows Terminal（#6427）问题差异明显，平台适配仍需投入。
- **CLI 可用性瓶颈**：#6688 的 E2BIG 限制了 `exec` 在大 prompt 自动化场景的使用，社区期待 stdin 或文件输入支持。
- **维护者响应积极但积压明显**：多个 Issue 已有 PR 跟进，但 v0.10.1 集成 PR #6672 仍是关键节点，合并进度值得持续关注。

---

> 📌 **日报生成说明**：本报告基于 GitHub API 数据自动分析生成，覆盖 Issues、PRs 的标题、摘要、作者与社区互动信号，聚焦技术价值与趋势提炼。

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

# ComfyUI 社区动态日报（2026-09-28）

## 1. 今日速览
过去24小时无新 Releases，社区讨论集中在稳定性、量化兼容与多 GPU/多实例内存问题。MiniMax H3 与 Qwen-Image 2.1 相关 Issue 密集更新，涉及整机硬重启、参考保真度回归、NVFP4 崩溃与默认分辨率噪声。PR 侧出现多项针对性修复：API 日志脱敏、Qwen fp16 原地 clamp、LTX-2.3 GGUF 语音别名修复，以及 AWQ W4A16、Qwen ControlNet、SeedVR2 优化。

## 2. 版本发布
过去24小时无新 Releases。

## 3. 社区热点 Issues（10）

1. **#15100 [OPEN] Mess with stable versions** — 36 评论 / 8 👍。稳定版之间行为不一致，社区长期讨论，反映版本管理与稳定版预期混乱。  
   [Issue #15100](https://github.com/Comfy-Org/ComfyUI/issues/15100)

2. **#16223 [OPEN] comfy-aimdo 多实例双 GPU 内存 staging 失败** — 9 评论。两个 ComfyUI 实例并发在双 GPU 上加载大模型时触发 `hostbuf_read_file_slice` 设备拷贝失败与 `aimdo memory compile error`，影响多卡生产部署。  
   [Issue #16223](https://github.com/Comfy-Org/ComfyUI/issues/16223)

3. **#15760 [OPEN] MiniMax H3 INT8 ConvRot 导致整机硬重启** — 8 评论 / 1 👍。Linux 多 GPU 下可复现 whole-host hard resets，而 Wan 2.2 稳定，属于高严重度稳定性问题。  
   [Issue #15760](https://github.com/Comfy-Org/ComfyUI/issues/15760)

4. **#16587 [OPEN] MiniMax H3 FL2VA 在 DGX Spark GB10 上整机失去响应** — 2 评论。单 GPU DGX Spark/aarch64 上 864×480 T2V 在先前成功运行后出现宿主无响应，指向平台/内存路径风险。  
   [Issue #16587](https://github.com/Comfy-Org/ComfyUI/issues/16587)

5. **#14107 [OPEN] `--cpu` 仍尝试使用 Kornia** — 7 评论 / 1 👍。CPU 模式启动失败或不符合预期，长期未解决，影响无 GPU 用户与调试场景。  
   [Issue #14107](https://github.com/Comfy-Org/ComfyUI/issues/14107)

6. **#8699 [OPEN] Load Image 节点暴露文件名** — 2 评论 / 6 👍。高赞功能需求，希望用原图文件名动态命名输出，改善批量工作流。  
   [Issue #8699](https://github.com/Comfy-Org/ComfyUI/issues/8699)

7. **#14380 [OPEN] Download-All 按钮不下载任何内容** — 3 评论。节点管理器核心功能失效，影响新用户安装自定义节点。  
   [Issue #14380](https://github.com/Comfy-Org/ComfyUI/issues/14380)

8. **#16435 [OPEN] Qwen-Image-2.1 在 1024 分辨率出现宽带噪声** — 4 评论 / 1 👍。恰好是节点默认分辨率，992/1056 正常且 CPU 也复现，影响图像编辑核心路径。  
   [Issue #16435](https://github.com/Comfy-Org/ComfyUI/issues/16435)

9. **#16585 [OPEN] Qwen3-VL vision tower float32 导致 NVFP4 视觉层崩溃** — 2 评论。`Unsupported dtype code`，量化模型与视觉塔精度不匹配，阻碍 NVFP4 工作流。  
   [Issue #16585](https://github.com/Comfy-Org/ComfyUI/issues/16585)

10. **#16610 [OPEN] LTX-2.3 GGUF Gemma 文本编码器语音不可懂** — 0 评论（新）。`GGMLTensor.clone()` 导致中间隐藏状态别名，是 #15580 后的回归，已有对应修复 PR #16611。  
    [Issue #16610](https://github.com/Comfy-Org/ComfyUI/issues/16610)

其他值得关注：#16516 MiniMax H3 示例工作流遗漏 Reference-to-Video 连接；#16604 MiniMax H3 ref2va 超长 packed sequence shape mismatch 已关闭；#16607 Qwen Image 2.1 Edit 输出过锐/噪声。

## 4. 重要 PR 进展（10）

1. **#16590 [OPEN] API 节点响应头脱敏** — 修复 `response_headers` 未经 `_redact_headers()` 直接写入 `temp/api_logs`，避免敏感头泄露。  
   [PR #16590](https://github.com/Comfy-Org/ComfyUI/pull/16590)

2. **#16608 [CLOSED] Qwen Image 2.1 fp16 激活原地 clamp** — 将 `Tensor.clip` 改为原地操作，避免内存编译器记录分配后 `malloc_graph_pop` 失败与 `aimdo memory compile error`。  
   [PR #16608](https://github.com/Comfy-Org/ComfyUI/pull/16608)

3. **#16611 [OPEN] 修复 Llama2_ intermediate_output 快照别名** — 对应 #16610，解决 `clone()` 为 no-op 时 GGUF Gemma 文本编码器下 LTX-2.3 语音异常。  
   [PR #16611](https://github.com/Comfy-Org/ComfyUI/pull/16611)

4. **#16612 [OPEN] 支持 comfy-kitchen AWQ W4A16 布局** — 注册 `TensorCoreAWQW4A16Layout`，让 AWQ/Q4_1 风格 4-bit 权重检查点走常规加载器。  
   [PR #16612](https://github.com/Comfy-Org/ComfyUI/pull/16612)

5. **#16567 [OPEN] 修复 Qwen-Image 2.1 文本编码器回退** — 针对 vision-stripped/GGUF Qwen3-8B 权重缺少 visual DeepStack key 导致架构误判为 `QWEN3_8B` 的问题。  
   [PR #16567](https://github.com/Comfy-Org/ComfyUI/pull/16567)

6. **#16595 [OPEN] 为多个模型加入 comfy_attention 与 AttentionTensorContainer** — 由 comfyanonymous 提交，属于核心注意力抽象推进，可能影响后续模型接入与优化。  
   [PR #16595](https://github.com/Comfy-Org/ComfyUI/pull/16595)

7. **#16530 [OPEN] 优化 SeedVR2** — VAE 逐帧处理，因果卷积缓存 int8 量化并放在 pinned host memory，按需预取，显著降低 VRAM 占用。  
   [PR #16530](https://github.com/Comfy-Org/ComfyUI/pull/16530)

8. **#16519 [OPEN] 支持 Qwen-Image 2.1 Union Fun ControlNet** — 新增 Alibaba-Pai Qwen-Image-2.1-Fun-Controlnet-Union 支持，扩展 ControlNet 生态。  
   [PR #16519](https://github.com/Comfy-Org/ComfyUI/pull/16519)

9. **#16603 [OPEN] Qwen VL patch embed 改用 linear** — 在 AMD/ROCm 上避免 `slow_conv3d` 逐 patch 循环，RX 9070 XT 上从约 14 秒/次大幅改善。  
   [PR #16603](https://github.com/Comfy-Org/ComfyUI/pull/16603)

10. **#16599 + #16600 [OPEN] 输出目录重扫优化** — #16599 改为列目录而非逐文件检查，#16600 在重扫循环中主动让出 GIL，避免 20 万输出时提示提交等待约 1.4 秒。  
    [PR #16599](https://github.com/Comfy-Org/ComfyUI/pull/16599) · [PR #16600](https://github.com/Comfy-Org/ComfyUI/pull/16600)

其他值得关注 PR：#16406 WanAnimateToVideo `character_mask` 行放置修复；#16606 LTXVAudioVAELoader 支持 `vae/` 目录；#16605 BiRefNet 背景移除匹配训练归一化与分辨率；#16601 Wan `context_img_len` 作用域修复；#16580/#16602 数据库包缺失与启动锁等待；#16609 移除废弃 Sora 节点；#10238 Wan VAE `vae_tile_size` 可选参数。

## 5. 功能需求趋势
- **新模型与量化格式支持**：MiniMax H3、Qwen-Image 2.1、Qwen3-VL、LTX-2.3/2.5、Wan 2.2、SeedVR2；NVFP4、INT8 ConvRot、GGUF、AWQ W4A16 等格式兼容是高频主题。
- **多 GPU / 显存与内存管理**：多实例并发 staging、aimdo 内存编译器、DGX Spark 整机无响应、VAE tiling、SeedVR2 逐帧缓存等，显示大模型部署对显存/宿主内存路径高度敏感。
- **性能优化**：AMD/ROCm 下的 VAE 与 Conv3d 性能、输出目录重扫、数据库启动锁、UI 响应性，是跨平台体验重点。
- **工作流与节点易用性**：Load Image 输出文件名、Download-All、LTX 音频 VAE 目录、示例工作流连接完整性等需求持续存在。
- **安全与隐私**：API 节点日志脱敏表明社区开始关注本地日志中的敏感信息。
- **平台兼容性**：Linux 多 GPU、DGX Spark GB10/aarch64、`--cpu` 模式、AMD RX 7900 GRE/9070 XT 等平台问题集中出现。

## 6. 开发者关注点
- **稳定性与回归定位**：相同工作流/模型文件在不同版本表现不一致（#15100、#16610、#16589），开发者需要更清晰的版本变更说明与回归测试。
- **多 GPU/多实例内存安全**：aimdo 内存编译、hostbuf 设备拷贝、整机 hard reset/无响应，是生产部署的最大风险点。
- **量化兼容碎片化**：NVFP4、INT8、GGUF、AWQ 在不同模型层与后端之间兼容性不足，常导致 dtype/内存编译错误。
- **默认参数陷阱**：Qwen-Image 2.1 在默认 1024 分辨率触发噪声，说明默认值需要覆盖更多边界测试。
- **启动与资源管理鲁棒性**：数据库包缺失、锁竞争、大输出目录重扫阻塞 UI，影响日常使用体验。
- **跨平台性能与可用性**：AMD/ROCm、CPU 模式、aarch64 等路径仍存在明显性能或功能缺口。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>



以下是为您整理的 **2026-09-28 Ollama 社区动态日报**。数据来源于 GitHub 上 Ollama 仓库的 Issue 和 PR 活动。

---

### 1. 今日速览
过去24小时内，Ollama 社区无新版本发布，但开发活跃度极高。核心动态集中在 **LLM 解析器（Parser）的边界 Bug 修复**（如工具调用跨 chunk 丢失、思考块泄漏）、**后端运行稳定性**（CUDA 非法内存访问、服务端死锁）以及 **API 兼容性破坏**（如 `typical_p` 参数移除影响第三方客户端、Anthropic 兼容接口前缀缓存失效）。

---

### 2. 版本发布
*   **无新版本发布**：过去24小时内无最新 Releases（最新版本仍为 0.34.4 左右的分支，社区正在密集修复该版本引入的各类问题）。

---

### 3. 社区热点 Issues（Top 10）

以下是近期最值得关注的 10 个 Issue，涵盖了严重崩溃、多模态缺陷和生态兼容性问题：

| 排序 | Issue 标题 & 链接 | 分类 | 重要性 & 社区反应 |
| :--- | :--- | :--- | :--- |
| **1** | **[Bug] CUDA illegal memory access on RTX 5090 with Cohere MoE** <br>[#18642](https://github.com/ollama/ollama/issues/18642) | Bug / GPU | **高**。RTX 5090 用户在 Windows 下运行 Cohere MoE 架构模型时频繁发生显存越界崩溃（`exit status 0xc0000409`），涉及新架构适配。 |
| **2** | **[Cloud] deepseek-v4.1-flash silently discards image input** <br>[#18527](https://github.com/ollama/ollama/issues/18527) | Bug / Cloud | **高**。云端模型在声明 `vision` 能力后，静默丢弃所有图像输入且不报错，导致多模态功能形同虚设。 |
| **3** | **[Bug] llama-server wedges on full-cache-hit task** <br>[#18685](https://github.com/ollama/ollama/issues/18685) | Bug / Stability | **高**。Linux + CUDA 环境下，全缓存命中时服务端死锁，后续所有请求无限挂起，严重影响服务可用性。 |
| **4** | **Anthropic-compat: system-role messages hoisted, defeating prefix cache** <br>[#18431](https://github.com/ollama/ollama/issues/18431) | Bug / API | **中高**。Anthropic 兼容接口将 `messages` 内的 system 角色合并到顶部，破坏了 Claude Code 的前缀缓存，导致工具调用性能下降。 |
| **5** | **[Bug] MLX - nvfp4 models on MacOS extremely slow under memory pressure** <br>[#16030](https://github.com/ollama/ollama/issues/16030) | Bug / MLX | **中高**。Mac 用户反馈，在内存压力下运行 `qwen3.6:27b-nvfp4` 等模型推理极其缓慢，回退到旧版本可解决。 |
| **6** | **[Bug] typical_p is no longer supported breaks existing clients** <br>[#18542](https://github.com/ollama/ollama/issues/18542) | Bug / API | **中**。新版本移除了 `typical_p` 参数，导致 SillyTavern 等第三方客户端因无法省略该参数而报错，属于 API 破坏性变更。 |
| **7** | **[Bug] OLLAMA_GPU_OVERHEAD ignored by llama-server backend** <br>[#18679](https://github.com/ollama/ollama/issues/18679) | Bug / Config | **中**。环境变量 `OLLAMA_GPU_OVERHEAD` 在新的 llama-server 后端被忽略，导致无法为调度器预留稳定显存。 |
| **8** | **[Bug] llama-server core dumps when serving GPT-OSS with KV cache q8_0** <br>[#16946](https://github.com

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

Thinking Process:

1.  **Understand the Goal**: The user wants a daily community dynamic report for `llama.cpp` dated `2026-09-28` based on provided GitHub data (releases, issues, PRs). The output must be in Chinese, structured, professional, and concise, tailored for technical developers.

2.  **Analyze the Input Data**:
    *   **Date**: 2026-09-28 (The prompt asks for the daily report of this date, but the data provided covers updates around 2026-09-27/28).
    *   **Releases**:
        *   `b11223`: server allows RANK pooling batch splitting for causal LLM rerankers (Qwen3, Qwen3-VL) (#28876).
        *   `b11222`: common avoids side effects around params parsing (#29537).
        *   `b11221`: common makes `string_split<T>` throw on invalid values (#29518).
        *   `b11218`: jinja adds support for `dict` builtin (#29477).
        *   `b11217`: opencl refines bin kernel loading condition (#29503).
        *   `b11216`: sycl FWHT kernels for block widths above 512 (#29243).
        *   `b11215`: CUDA tunes fp16 tile FlashAttention configs for head sizes 40-112 (#26289).
        *   `b11214`: HIP enables fattn-mma kernel on cdna for dkq > 256 for large batch sizes (#28907).
        *   `b11213`: vulkan fixes argsort kernel selection for Adreno (#29469).
        *   `b11212`: common throws instead of abort on grammar without llguidance (#29516).
    *   **Issues (Top 30 by comments)**:
        *   #19466 (41 comments): Saving KV cache does not work for vision-enabled models (closed, stale).
        *   #21725 (33 comments): Feature Request: XDNA backend (open).
        *   #27428 (21 comments): eval bug: draft-mtp roughly halves prompt processing on multi-GPU layer split (open).
        *   #19138 (19 comments): Feature Request: Support OpenAI Responses API (/v1/responses) in llama.cpp server (closed, stale).
        *   #25751 (15 comments): Eval bug: SWA on Gemma 4 forgets key details (closed, stale).
        *   #9289 (13 comments): changelog: `libllama` API (open).
        *   #24343 (13 comments): E llama_init_from_model: failed to initialize the context: Gemma4Assistant (closed, stale).
        *   #26448 (11 comments): Feature request: run MoE expert weights from host RAM via PCIe DMA (no H2D copy) (open).
        *   #29104 (10 comments): server silently stops processing when /metrics endpoint is scraped by VictoriaMetrics (open).
        *   #25859 (8 comments): Offloaded-MoE prefill leaves the GPU idle waiting on serial expert H2D copies (open).
        *   #28295 (7 comments): MSVC compilation doesn't detect AVX-VNNI (open).
        *   #3124 (5 comments): Operator Fusion in ggml (closed, stale).
        *   #23737 (5 comments): GGML_ASSERT(tensor->data != NULL) on Vulkan since b9318 (open).
        *   #25562 (5 comments): OpenVINO docker cannot use multiple GPUs (open).
        *   #25646 (4 comments): Model weight gets evicted from idle Intel dGPU memory causing perf drop on Vulkan (open).
        *   #26219 (4 comments): Intel UHD 770 graphics crashes on Vulkan TOP_K unit test (open).
        *   #26937 (4 comments): Profile prefil(tokenizer firstly) (closed).
        *   #27116 (4 comments): `GGML_ASSERT(ret.axis != GGML_BACKEND_SPLIT_AXIS_UNKNOWN) failed` on startup with `--split-mode tensor` and `iq4_nl` kv-cache (open).
        *   #27693 (4 comments): mtmd: one-sample audio input causes process abort (open).
        *   #27697 (4 comments): mtmd: audio with a duration that is a multiple of 30s produces one extra silent chunk (open).
        *   #29494 (3 comments): repeat_last_n / dry_penalty_last_n are not bounded, causing penalties/DRY sampler allocate multi-GB zero-filled buffer and server OOM (open).
        *   #28954 (3 comments): Regression - Images above ~1.2 Mpx trigger ggml_assert with Gemma4 Models (open).
        *   #29473 (3 comments): ggml-hexagon on Snapdragon 7 Gen 4 - HMX MUL_MAT returns inf for n>=5, FLASH_ATTN_EXT and GATED_DELTA_NET fail (open).
        *   #29431 (3 comments): Vulkan ARGSORT ne=[2048,1,1,1] only sorts half of the array on some devices (closed).
        *   #26912 (3 comments): SET_ROWS can write past an output tensor buffer in release builds (closed).
        *   #13485 (2 comments): LoRA training example (open).
        *   #29345 (2 comments): MiMo-V2.6-Flash-RL: sidecar MTP draft fails with "blk.0.attn_q not found" (open).
        *   #29499 (2 comments): server hangs before serving any request on Jetson Orin NX (open).
    *   **PRs (Top 20 by comments/updates)**:
        *   #28876 (closed): server : allow RANK pooling batch splitting for causal LLM rerankers (ie. Qwen3 and Qwen3-VL) - merged into release b11223.
        *   #28940 (open): ci: remove gpu-rocm keyed directory logs.
        *   #29545 (open): ggml : accumulate f16 dot products in f32 on AVX512-FP16.
        *   #29544 (open): rpc : turn GGML_RPC_DEBUG into a verbosity level and add logs.
        *   #28331 (open): respect -fitc from llama-bench instead of using the benchmark context size.
        *   #29454 (closed): models : fill the unwritten rollback snapshot slot on short ubatches.
        *   #29541 (open): ci: add zdnn backend build but not test.
        *   #27773 (open): add GLM-5.3-Flash (GLM5-Next) support.
        *   #14891 (open): imatrix: calculate activation-based statistics for new format (GGUF) imatrices.
        *   #29464 (open): OoD documentation for llama-bench.
        *   #15550 (open): quantize: add option to automatically choose optimal quant types to reach a file/bpw target size at lowest error.
        *   #27983, #27325, #27324, #27322 (open): quantize: add IQ2_NL and IQ3_NL types (CPU + Metal + CUDA + Vulkan).
        *   #29543 (open): mtmd : fail cleanly when non-causal image chunk exceeds batch size (related to Gemma4 image crash).
        *   #29542 (open): ci: fix uninitialized timer value in Windows static test builds.
        *   #29377 (closed): metal : optimize sparse FA + clean-up.
        *   #28381 (open): openvino: serve GET_ROWS on a weight view from the base Constant.
        *   #29433 (open): [Model] Support Limite 1B - Violetto.

3.  **Drafting the Report Structure**:

    *   **Title**: llama.cpp 社区动态日报 (2026-09-28)
    *   **1. 今日速览 (Today's Overview)**:
        *   Summarize the key highlights: Multiple releases (b11212 to b11223) focusing on backend optimizations (CUDA, HIP, Vulkan, SYCL, OpenCL), server improvements for rerankers, and common utility fixes.
        *   Community hot topics: High interest in MoE offloading performance, XDNA backend support, OpenAI Responses API compatibility, and vision model KV cache issues.
    *   **2. 版本发布 (Releases)**:
        *   List the key releases (b11223 down to b11212) and summarize the most significant ones (e.g., b11223 RANK pooling for causal rerankers, b11215 CUDA FlashAttention tuning, b11214 HIP fattn-mma, b11212 grammar safety).
    *   **3. 社区热点 Issues (Top 10 Hot Issues)**:
        *   Select 10 impactful issues and explain why they matter.
        *   *Issue 1*: #21725 XDNA backend support (high interest, 35 👍).
        *   *Issue 2*: #19466 KV cache saving fails for vision models (critical for multimodal deployment).
        *   *Issue 3*: #26448 MoE expert weights in host RAM via PCIe DMA (extreme VRAM saving, 7 👍).
        *   *Issue 4*: #19138 OpenAI Responses API support (crucial for API compatibility).
        *   *Issue 5*: #27428 draft-mtp halves prompt processing on multi-GPU (performance regression).
        *   *Issue 6*: #29104 Server silently stops when scraped by VictoriaMetrics (critical server stability).
        *   *Issue 7*: #25859 Offloaded-MoE prefill leaves GPU idle (performance bottleneck).
        *   *Issue 8*: #24343 Gemma4Assistant context init failure (popular model support bug).
        *   *Issue 9*: #29494 repeat_last_n / dry_penalty_last_n OOM (critical memory safety).
        *   *Issue 10*: #28295 MSVC AVX-VNNI detection failure (Windows CPU performance).
    *   **4. 重要 PR 进展 (Top 10 Important PRs)**:
        *   *PR 1*: #28876 RANK pooling batch splitting for causal LLM rerankers (merged, key feature for Qwen3 rerank).
        *   *PR 2*: #29545 accumulate f16 dot products in f32 on AVX512-FP16 (numerical stability fix).
        *   *PR 3*: #29543 mtmd fail cleanly when non-causal image chunk exceeds batch size (fixes Gemma4 crash).
        *   *PR 4*: #27773 Add GLM-5.3-Flash support (major 320B hybrid model support).
        *   *PR 5*: #15550 quantize auto-select optimal quant types for target size/bpw (major UX improvement).
        *   *PR 6*: #27983 / #27322 etc. Add IQ2_NL and IQ3_NL quant types (expanding quantization options).
        *   *PR 7*: #29544 RPC verbosity level logs (debugging improvement).
        *   *PR 8*: #29454 models: fill unwritten rollback snapshot slot on short ubatches (correctness fix).
        *   *PR 9*: #28381 openvino: serve GET_ROWS on weight view (backend fix).
        *   *PR 10*: #29377 metal: optimize sparse FA (Apple Metal performance).
    *   **5. 功能需求趋势 (Feature Demand Trends)**:
        *   *Multimodal & Vision Support*: KV cache for vision models, image chunk batch size handling, Gemma4 vision bugs.
        *   *MoE & Large Scale Deployment*: Host RAM offloading via PCIe DMA, multi-GPU split performance, expert weight streaming.
        *   *API Compatibility*: OpenAI Responses API, RPC verbosity/debugging.
        *   *Backend Expansion*: XDNA backend, OpenVINO multi-GPU, Hexagon (Snapdragon) fixes.
        *   *Quantization & Tooling*: Auto-target size/bpw quantization, new IQ NL quant types, imatrix statistics for GGUF.
    *   **6. 开发者关注点 (Developer Pain Points & Focus)**:
        *   Memory safety and OOM issues (unbounded buffers in samplers).
        *   Backend specific crashes and assertion failures (Vulkan, Hexagon, MSVC AVX-VNNI).
        *   Performance bottlenecks in MoE offloading and multi-GPU setups.
        *   Windows/MSVC build and detection issues.

4.  **Refining and Translating to Chinese**:
    *   Ensure professional terminology (e.g., "causal LLM rerankers" -> "因果 LLM 重排序模型", "KV cache" -> "KV 缓存", "MoE expert weights offloading" -> "MoE 专家权重卸载/主机内存直连", "AVX512-FP16" -> "AVX512-FP16 指令集", "Jinja dict builtin" -> "Jinja 字典内置函数").
    *   Keep the tone analytical and concise, as requested ("专注于 AI 开发工具的技术分析师").

Let's write down the details for each section.

*   *Today's Overview*:
    llama.cpp 在今天发布了多个版本（b11212 至 b11223），重点优化了多个后端（CUDA, HIP, Vulkan, SYCL, OpenCL）的性能与稳定性，特别是针对 Qwen3 系列因果重排序模型的 RANK 批量拆分支持。社区方面，MoE 模型的主机内存卸载（PCIe DMA）、XDNA 后端支持以及 OpenAI Responses API 兼容性成为最受关注的讨论热点。

*   *Releases Summary*:
    *   **b11223**: Server 端支持因果 LLM 重排序模型（如 Qwen3, Qwen3-VL）的 RANK pooling 批量拆分（#28876）。
    *   **b11222**: 修复参数解析中的副作用，取消注册 `--rpc` 的全局副作用（#29537）。
    *   **b11221**: `string_split<T>` 在遇到无效值时抛出异常而非静默失败（#29518）。
    *   **b11218**: Jinja 模板引擎增加对 `dict` 内置函数的支持（#29477）。
    *   **b11215**: CUDA 优化了 head size 为 40-112 的 fp16 FlashAttention tile 配置（#26289）。
    *   **b11214**: HIP 在 CDNA 架构上启用了大 batch size 下的 fattn-mma 内核（#28907）。
    *   **b11212**: 修复了在未编译 llguidance 时，语法解析直接 abort 而非 throw 的问题（#29516）。

*   *Hot Issues Selection & Explanation*:
    1.  **#21725 XDNA backend**: 请求增加 XDNA 后端支持（35 👍）。反映了社区对AMD/Xilinx等专用加速器硬件的强烈需求。
    2.  **#19466 Saving KV cache fails for vision models**: 视觉模型无法通过 API 保存 KV 缓存（41条评论）。多模态部署的关键痛点。
    3.  **#26448 MoE host RAM PCIe DMA**: 专家权重直接通过 PCIe DMA 从主机内存读取，避免拷贝到显存（7 👍）。极客玩家和低成本部署者的终极方案。
    4.  **#19138 OpenAI Responses API**: 希望服务器支持 `/v1/responses` 接口（44 👍）。为了与现有 OpenAI 生态工具链无缝对接。
    5.  **#27428 draft-mtp multi-GPU split bug**: 草稿 MTP 在多 GPU 张量拆分下提示词处理速度减半。影响推理吞吐量的重要性能回退。
    6.  **#29104 VictoriaMetrics scrape crashes server**: Prometheus 指标抓取导致服务器静默停止响应。生产环境监控集成的致命隐患。
    7.  **#25859 Offloaded-MoE prefill GPU idle**: 卸载 MoE 预填充阶段 GPU 空闲等待串行 H2D 拷贝。揭示了 PCIe 带宽瓶颈下的调度问题。
    8.  **#29494 repeat_last_n OOM**: 采样器参数未做边界检查导致分配多 GB 零填充缓冲区引发 OOM。严重的内存安全隐患。
    9.  **#24343 Gemma4Assistant init failure**: Gemma 4 模型初始化上下文失败（33 👍）。阻碍了新模型落地。
    10. **#28295 MSVC AV

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*