# AI CLI 工具社区动态日报 2026-10-11

> 生成时间: 2026-10-10 22:15 UTC | 覆盖工具: 12 个

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



## 今日重点更新

1. **OpenAI Codex — rust-v0.163.0-alpha.5 发布**：新版本推进 0.163 系列 alpha，同日合并 19 个 PR，覆盖 TUI 粘贴性能、WSL 剪贴板复用、code-mode 语义与工具输出保留等方向。https://github.com/openai/codex/releases

2. **Gemini CLI — v0.65.0-nightly.20261010 发布**：修复 `fetchJson` 中的 JSON 解析与响应流错误（PR #29658），以及 `truncateString` 丢失行终止符的问题（PR #29673）。https://github.com/google-gemini/gemini-cli/releases

3. **GitHub Copilot CLI — v1.0.96-1 / v1.0.96-2 发布**：v1.0.96-2 修复 `/model` 与 `/config` 中模型 ID 大小写敏感问题；v1.0.96-1 为交互式沙箱增加环境密钥建议与掩码主机配置。https://github.com/github/copilot-cli/releases

4. **Qwen Code — v0.25.1-preview.2 / v0.25.0-nightly 发布**：修复替换选定远程 Host 时丢失绑定关系的问题（PR #13430）。https://github.com/QwenLM/qwen-code/releases

5. **llama.cpp — b11552 发布**：修复请求 pin 住忙碌槽位时 RAM cache 覆盖正在生成中的上下文的隐患（PR #30295）；同批发布还包括 MiniCPM-V 4.7 支持（b11551）、OpenCL MoE 量化内核（b11541）、SYCL MXFP4 MoE 加速（b11540）。https://github.com/ggml-org/llama.cpp/releases

6. **OpenCode — 关键 PR 合并**：新增 Agent 停止后台 shell 命令能力（#48352，Closes #36424）；修复 Cloudflare Gateway 认证丢失（#48295）；新增 minimal/hidden 工具调用显示模式（#48300）；为自定义 OpenAI 兼容 Provider 发现上下文长度（#54398）；SQLite 锁超时重试（#54396）。https://github.com/anomalyco/opencode/pulls

7. **Ollama — 工具调用修复潮**：更新 llama.cpp 至 b11521（#18917）；修复 Qwen3.5 流式空尾块丢失工具调用（#18872）、Cogito 跨 chunk 工具标签截断（#18759）、Olmo3 Unicode 参数损坏（#18906）；对齐 `/v1/completions` 流式格式（#18914）。https://github.com/ollama/ollama/pulls

8. **ComfyUI — 关键修复**：修复 Dynamic VRAM 下 `fp8_e4m3fn_fast` 回退 bf16 的性能问题（#16941）；Qwen 3.x LLM 推理加速（#16940）；修复量化模型 hook 打补丁崩溃（#16206）；API 节点令牌续期（#16943）。https://github.com/Comfy-Org/ComfyUI/pulls

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills 社区热点报告
**数据来源**: anthropics/skills 官方仓库 | **截止日期**: 2026-10-11

---

## 1. 热门 Skills 排行

> 注：PR 评论数字段在当前数据中均显示为 undefined，以下基于 PR 更新活跃度、主题关注度及 Issue 关联度综合排序。

### 🔥 #1961 — skill-creator eval viewer 安全加固
- **作者**: Joncik91 | **更新**: 2026-10-07 | **状态**: OPEN
- **功能**: 对 `skill-creator` 的 eval 查看器（`generate_review.py` + `viewer.html`）进行安全加固，修复三个漏洞：**脚本注入 breakout**（JSON 数据嵌入方式）、**DNS rebinding**、**跨站 POST** 及 HTML 转义不完整问题。
- **社区热点**: 直接关联高关注度 Issue #1394（XSS 漏洞，4 赞）和 #1383（基准测试静默失败），是社区安全意识觉醒的代表性 PR。
- 🔗 [PR #1961](https://github.com/anthropics/skills/pull/1961)

### 🔥 #1771 — proofcore-contract-auditor（智能合约审计）
- **作者**: ProofCore-Protocol | **更新**: 2026-09-16 | **状态**: OPEN
- **功能**: 面向 Web3 开发者的 Skill，对 Solidity/Rust 智能合约进行自动静态分析，并将加密审计证明锚定到 TON 公链（ProofCore 零存储 Merkle 协议）。
- **社区热点**: 首个将区块链审计与 Agent Skill 结合的提案，代表 Skills 向垂直行业（Web3/DeFi）渗透的趋势。
- 🔗 [PR #1771](https://github.com/anthropics/skills/pull/1771)

### 🔥 #1703 — md2video-audio（Markdown → 带语音视频）
- **作者**: 70v-Yoyo | **更新**: 2026-09-15 | **状态**: OPEN
- **功能**: 零成本将 Markdown 文档通过 Marp 转换为演示幻灯片，再合成带真人级语音旁白的 MP4 视频。
- **社区热点**: 多媒体生成类 Skill 的首秀，拓展了 Skills 从"文本助手"到"内容生产全链路"的边界。
- 🔗 [PR #1703](https://github.com/anthropics/skills/pull/1703)

### 🔥 #822 — AWT (AI Watch Tester) — AI 驱动的 E2E 测试
- **作者**: ksgisang | **更新**: 2026-09-19 | **状态**: OPEN
- **功能**: 赋予 Claude 视觉和浏览器控制能力，自动生成端到端测试：零代码测试生成、自主导航、元素交互检测、回归测试。
- **社区热点**: 测试自动化是社区高频需求，AWT 是目前最完整的测试类 Skill 方案。
- 🔗 [PR #822](https://github.com/anthropics/skills/pull/822)

### 🔥 #1245 — notion-spec-to-implementation + quantitative-resume-auditor
- **作者**: mrdesouzaphd-cmyk | **更新**: 2026-09-30 | **状态**: OPEN
- **功能**: ① 将产品/技术规格拆解为可执行的 Notion 任务，含验收标准和进度追踪；② 量化简历审计器，用于求职优化。
- **社区热点**: 双 Skill 一次提交，覆盖"需求→实现"转化和求职场景，反映社区对**工作流自动化**和**个人效能**的双重诉求。
- 🔗 [PR #1245](https://github.com/anthropics/skills/pull/1245)

### 🔥 #514 — document-typography（文档排版质量控制）
- **作者**: PGTBoos | **更新**: 2026-03-13 | **状态**: OPEN
- **功能**: 防止 AI 生成文档的常见排版问题：孤儿词换行、段前孤行、编号错位。
- **社区热点**: "AI 生成文档的排版缺陷"是用户日常痛点，虽无高调讨论，但实用价值极高。
- 🔗 [PR #514](https://github.com/anthropics/skills/pull/514)

### 🔥 #83 — skill-quality-analyzer + skill-security-analyzer（元 Skill）
- **作者**: eovidiu | **更新**: 2026-01-07 | **状态**: OPEN
- **功能**: 两个评估型元 Skill —— 分别从结构/文档/性能/安全/可移植性五个维度评估其他 Skill 的质量与安全性。
- **社区热点**: 对应 Issue #492（43 评论，安全信任边界滥用）的直接回应，社区对 Skill 生态的"自我治理"需求强烈。
- 🔗 [PR #83](https://github.com/anthropics/skills/pull/83)

---

## 2. 社区需求趋势

从 Issues 分析，社区最期待的新 Skill 方向按热度排序：

| 趋势方向 | 代表 Issue | 核心诉求 |
|---------|-----------|---------|
| **🔒 安全与信任治理** | #492 (43 评论) | 社区 Skill 冒充 `anthropic/` 官方命名空间，需官方认证机制与安全审查 |
| **🏢 组织级共享** | #228 (16 评论, 8 赞) | Skills 应支持组织内直接共享，而非手动传递 .skill 文件 |
| **🧠 Agent 治理与安全模式** | #412 (6 评论) | 提出 agent-governance Skill：策略执行、威胁检测、信任评分、审计追踪 |
| **💾 紧凑记忆/状态管理** | #1329 (9 评论) | compact-memory Skill：用符号化记法压缩 Agent 长程上下文中的笔记与记忆 |
| **🧪 测试与质量门禁** | #1385 (5 评论) | 推理质量门流水线：任务前校准 → 对抗审查 → 交付验证 |
| **📋 工作流自动化** | #1245 (关联) | Spec → 任务拆解 → 可执行实现的端到端自动化 |
| **📄 文档处理深化** | #1175 (SharePoint), #1734 (docx) | 企业文档系统（SharePoint/ODT/docx）的深度集成与排版质量控制 |
| **🪟 上下文窗口管理** | #1487 (4 评论) | claude-api Skill 惰性注入 ~156k token，单次工具调用即耗尽上下文 |

**核心洞察**: 社区需求正从"单个功能 Skill"转向**基础设施级能力**——安全信任体系、组织共享机制、Agent 自治、上下文工程。

---

## 3. 高潜力待合并 Skills

以下 PR 评论/更新活跃且尚未合并，预计近期落地概率较高：

| PR | Skill | 活跃信号 | 亮点 |
|----|-------|---------|------|
| **#1961** | skill-creator 安全加固 | 10 月最新更新，直接回应高优 Issue | 修复 XSS / DNS rebinding / 跨站 POST |
| **#1771** | proofcore-contract-auditor | 9 月提交，Web3 垂直赛道 | 智能合约审计 + 区块链存证 |
| **#1703** | md2video-audio | 9 月提交，多媒体方向 | Markdown → 视频 + 语音合成 |
| **#822** | AWT (AI Watch Tester) | 9 月仍在更新 | 零代码 E2E 测试生成 |
| **#1245** | notion-spec + resume-auditor | 9 月底最新更新 | Spec → Notion 任务 + 简历审计 |
| **#1734** | docx 孤儿注释检测 | 9 月提交，10 月前更新 | Word 文档质量控制 |

---

## 4. Skills 生态洞察

> **当前社区在 Skills 层面最集中的诉求是：从"能用的工具"走向"可信、可治理、可共享的 Agent 能力基础设施"——安全信任边界（#492, 43 评论）与 Agent 自治理（#412, #1385）构成了社区讨论的两条主线，而组织共享（#228）和上下文工程（#1487）则是最迫切的平台级需求。**

---

*报告基于 anthropics/skills 仓库公开数据生成，所有链接指向 GitHub 原始 PR/Issue。*

---

# Claude Code 社区动态日报 · 2026-10-11

> 数据来源：github.com/anthropics/claude-code

---

## 1. 今日速览

今天社区数据呈现出明显的**"批量 stale 清理"特征**：过去 24 小时内更新的 50 条 Issue 全部为 **CLOSED 且带 `stale` 标签**，没有新增 Release，也没有真正的新增讨论。PR 侧仅有 2 条长期挂起的开放 PR。因此今日动态的价值不在于"新问题"，而在于**过去一个季度积累的存量 bug 被集中收口**——这些 Issue 恰恰勾勒出了桌面端、MCP、Agent 编排三条主线上的系统性缺陷。

---

## 2. 版本发布

**无。** 过去 24 小时内没有新的 Release 发布。

---

## 3. 社区热点 Issues（10 选）

> 说明：以下 Issue 均已被关闭（多为 stale 自动收口），但评论数/点赞数代表其在被关闭前的社区关注度。

**① #79919 桌面端 Prompt Suggestions 完全不生效（8 评论 / 👍2）**
即使 `promptSuggestionEnabled: true`，桌面/Web GUI 中的灰色 ghost-text 提示（Tab 接受）始终不出现。macOS 26.5.2 + v2.1.162 复现。这是今日评论数最高的 Issue，反映出**桌面端与 CLI 功能对齐**的长期缺口。
🔗 https://github.com/anthropics/claude-code/issues/79919

**② #79970 MCP 启动期工具搜索导致会话永久死锁（5 评论 / 👍1）**
MCP 启动过程中过早触发 tool search，会返回 `400 Tool reference 'WaitForMcpServers' not found`，此后**每一条用户消息都返回同一错误，会话彻底不可用**。这是今日技术严重度最高的 bug——不是体验问题，而是数据/会话级损坏。
🔗 https://github.com/anthropics/claude-code/issues/79970

**③ #80662 助手文本从 transcript 中静默丢失（4 评论 / 👍2）**
Opus 4.8 + interleaved thinking 下，turn 中间的叙述文本**不仅未渲染，而且根本不在会话记录里**（数据层丢失，非渲染问题），被标记为 #41814 / #14694 的回归。对依赖 transcript 做审计和回放的团队影响极大。
🔗 https://github.com/anthropics/claude-code/issues/80662

**④ #80863 桌面端向未加载会话 `send_message` 静默入队（3 评论 / 👍1）**
应用刚启动时，通过 `ccd_session_mgmt` 向尚未加载的会话发消息，工具返回与正常投递无法区分，但目标会话**永远不会被唤起**。典型的"静默失败"设计缺陷。
🔗 https://github.com/anthropics/claude-code/issues/80863

**⑤ #80449 Read 工具读取 PDF 的 Token 成本过高（3 评论 / 👍1）**
Read 工具打开 PDF 时会**同时发送提取文本和图像渲染**，导致 token 消耗远超必要值。这是明确的成本优化诉求，对高频处理文档的用户直接关系到账单。
🔗 https://github.com/anthropics/claude-code/issues/80449

**⑥ #79931 Grep / Glob 从工具列表中消失（2 评论）**
v2.1.216 中默认工具清单里 Grep 和 Glob 完全缺失（非 deferred、非可搜索），根因被定位到 `tengu_deferred_stub_tool` 这个 **GrowthBook 实验开关**。属于实验灰度直接影响核心工具可用性的典型案例。
🔗 https://github.com/anthropics/claude-code/issues/79931

**⑦ #79952 配置编辑忽略 `CLAUDE_CONFIG_DIR`（2 评论）**
update-config skill / agents 始终写入 `~/.claude/settings.json`，而 CLI 其余部分正确遵循 `CLAUDE_CONFIG_DIR`——**"编辑的配置"和"实际读取的配置"不是同一个文件"**。对多环境/容器化用户是硬伤。
🔗 https://github.com/anthropics/claude-code/issues/79952

**⑧ #79772 GitHub MCP 评论注入 U+00B7 中点破坏 @提及（2 评论 / 👍1）**
Cloud routines 经 GitHub MCP 发评论时，会在 @mention 和命令词中注入 U+00B7（·），直接**打断 Dependabot 等机器人指令**。属于跨系统集成的字符编码污染问题。
🔗 https://github.com/anthropics/claude-code/issues/79772

**⑨ #80654 会话静默停止持久化 transcript 长达两周（2 评论）**
一个长期运行的"主力"会话从 7/9 起就停止写盘，但会话本身正常运行了两周多（数百次工具调用）。根因是**继承的 `CLAUDE_CODE_CHILD_SESSION` 标记把主用户会话误判为子会话**。对长周期项目的记忆可靠性是致命打击。
🔗 https://github.com/anthropics/claude-code/issues/80654

**⑩ #79804 新建会话未选项目时 cwd 回落到用户主目录（2 评论）**
`claude.exe` 的 cwd 被解析为 `C:\Users\<username>`，导致工具在**整个 home 目录**上做无范围读取——既昂贵又有隐私风险。
🔗 https://github.com/anthropics/claude-code/issues/79804

**其他值得留意的已关闭条目：**
- #80862 桌面端 computer-use 授权应跨会话生命周期持久化：https://github.com/anthropics/claude-code/issues/80862
- #79902 Bash 工具超时未杀进程组，子进程逃逸后以 1199% CPU 运行 11.5 小时：https://github.com/anthropics/claude-code/issues/79902
- #80848 Workflow 子代理因 maxTurns 被杀，却被误报为"未调用 StructuredOutput 即完成"：https://github.com/anthropics/claude-code/issues/80848
- #79930 自动模式不匹配复合 shell 命令（`cd && cmd`）的 allow 规则：https://github.com/anthropics/claude-code/issues/79930
- #88120 `claude-api` skill 在基础提问下上下文暴涨至数十万 token：https://github.com/anthropics/claude-code/issues/88120

---

## 4. 重要 PR 进展

过去 24 小时内更新的 PR **仅 2 条**，且均为长期挂起的开放 PR（数据中未提供更多 PR，故无法凑足 10 条）：

**① #6754 为 VS Code 中的 Claude CLI 补充 RTL 支持文档（OPEN，自 2025-08-28 起挂起）**
新增 `rtl-support.md`，说明如何在 VS Code 集成终端中修复希伯来语/阿拉伯语/波斯语的 RTL 渲染错乱问题。属于纯文档贡献，但对中东地区开发者有实际价值。**已开放逾一年仍未合并**，反映非核心文档类 PR 的流转缓慢。
🔗 https://github.com/anthropics/claude-code/pull/6754

**② #41447 feat: open source claude code ✨（OPEN，自 2026-03-31 起挂起）**
以一条 PR 同时关闭 #59、#456、#2846、#22002、#41434 等多项请求，主张将 Claude Code 开源。这是社区长期诉求的符号性表达，但被合并的可能性极低。
🔗 https://github.com/anthropics/claude-code/pull/41447

> 观察：PR 通道几乎处于停滞状态，社区贡献的主要出口仍是 Issue，而非代码。

---

## 5. 功能需求趋势

从这批 Issue 的分布可提炼出五个社区最关注的方向：

| 方向 | 代表 Issue | 核心诉求 |
|---|---|---|
| **桌面端 / GUI 能力对齐** | #79919、#80863、#79804、#80862 | 桌面端在 prompt suggestion、跨会话消息、cwd 解析、授权持久化上明显落后于 CLI |
| **MCP 与外部集成稳定性** | #79970、#79772、#80179、#79951 | MCP 启动时序、字符污染、OAuth 掉线与 Cloudflare 拦截，集成层问题密集 |
| **Agent / 工作流编排可靠性** | #80848、#79814、#79918 | 后台 agent 报告丢失、被误报完成、进程失控（runaway fork） |
| **上下文与 Token 成本控制** | #80449、#88120 | PDF 双份渲染、skill 上下文膨胀——直接关系到用户成本 |
| **工具链与权限精细化** | #79931、#79930、#79902 | 工具清单被实验开关影响、复合命令权限不匹配、超时后进程组泄漏 |

此外，**#80865（支持视频/录屏输入，原生帧提取）** 代表了非开发者用户群体对多模态输入的新诉求：https://github.com/anthropics/claude-code/issues/80865

---

## 6. 开发者关注点（痛点总结）

1. **"静默失败"是最被厌恶的失败模式。** #80863（消息入队但永不投递）、#80662（文本从 transcript 消失）、#80654（transcript 停写两周无告警）、#79814（后台 agent 报告丢失）——四条高关注 Issue 共享同一特征：**不报错、不告警、结果不可区分**。开发者普遍能接受失败，但无法接受"看起来成功实际没发生"。

2. **数据持久化可信度受质疑。** transcript 是审计、回放、上下文续接的基础。#80662 与 #80654 从两个不同层面（写入内容缺失 / 完全停止写入）动摇了这一基础。

3. **实验开关（GrowthBook）影响核心功能。** #79931 中 Grep/Glob 因 `tengu_deferred_stub_tool` 实验从工具列表中整体消失，说明灰度实验的爆炸半径控制不足，普通用户难以自查。

4. **配置一致性。** #79952 暴露的"写 A 文件、读 B 文件"问题，会让所有依赖 `CLAUDE_CONFIG_DIR` 做环境隔离（CI、容器、多租户）的团队踩坑。

5. **成本敏感度上升。** 用户已开始主动审计 token 消耗（#80449 PDF 双份渲染、#88120 skill 上下文暴涨），不再只关注"能不能用"，而是"值不值得用"。

6. **进程与资源治理。** #79902（超时未杀进程组，子进程以 1199% CPU 跑 11.5 小时）与 #79918（Sonnet agent 失控 fork）指向同一底层问题：**Claude Code 对自身派生进程的生命周期管理不够严格**。

---

### 编者按

今日无新版本、无新 PR、全部 Issue 均带 `stale` 关闭标记，说明这是一次**存量问题批量收口日**。但对维护者而言，这批被 stale 掉的问题中，#79970（会话死锁）、#80662（transcript 数据丢失）、#80654（持久化静默中断）、#79902（进程泄漏）属于**严重度不随时间衰减**的类型——它们被关闭并不等于被解决。建议优先复核这几条的真实修复状态，避免 stale 机制掩盖高优缺陷。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 · 2026-10-11

---

## 一、今日速览

今日 Codex 仓库由自动化 Bot（copyberry[bot]）集中推送了 19 个 PR，几乎全部处于 CLOSED 状态，覆盖 TUI 粘贴性能、WSL 剪贴板、code-mode 语义、工具输出保留等方向，显示出内部迭代节奏密集。Issues 侧则被 Windows 平台问题主导：Dots（dot 启动的本地任务）、沙箱 ACL、Computer Use 工具链、侧边栏项目丢失等长期问题持续发酵，其中 #48074（终端窗口闪烁）以 150 条评论、155 个 👍 成为本周期最高热度条目并已关闭。整体来看，**Windows 稳定性与沙箱/权限模型是当前社区最大的情绪出口**。

---

## 二、版本发布

**rust-v0.163.0-alpha.5** — 发布说明极简（仅 "Release 0.163.0-alpha.5"），无变更日志细节。结合近期 Issues 中用户报告的版本分布（桌面端内置 core 多在 0.162.0-alpha.2 附近），可视为 0.163 系列的常规 alpha 推进，建议关注后续 changelog 补充。

- https://github.com/openai/codex/releases

---

## 三、社区热点 Issues（Top 10）

**1. #48074 [CLOSED] Windows 安装 Codex daemon 后终端窗口在请求期间反复闪烁**
150 评论 / 155 👍，本周期绝对热点。`codex-cli 0.157.0` + Pro 用户，安装 daemon 后 Windows Terminal 频繁闪窗，严重影响可用性。高互动量说明这是大范围 Windows 用户的共性体验，最终被关闭是今日最重要的信号。
→ https://github.com/openai/codex/issues/48074

**2. #49458 [OPEN] [Windows] dot 启动的本地任务缺少 Computer Use 工具**
71 评论 / 25 👍。普通本地会话可用 Computer Use，但经 dot 启动的任务拿不到该工具集，暴露 dot 与本地会话能力不一致的架构裂缝。
→ https://github.com/openai/codex/issues/49458

**3. #49729 [OPEN] Dot 无法在已保存项目中创建或跟进本地任务**
50 评论。dot 能起任务，却无法选择已有 Codex App 项目，也无法按返回的线程 ID 读取/续写，直接破坏 dot 与项目工作流的衔接。
→ https://github.com/openai/codex/issues/49729

**4. #42739 [OPEN] Windows 桌面更新后本地项目从侧边栏消失**
50 评论。更新后 Projects 显示 "No projects"，但磁盘目录与历史对话仍在——典型的状态索引/迁移回归，数据"看似丢失"极易引发焦虑。
→ https://github.com/openai/codex/issues/42739

**5. #51590 [OPEN] Windows 沙箱打开运行中的 node_repl.exe 失败（error 32），Computer Use 与 shell 被阻断**
39 评论 / 10 👍。ACL 更新遭遇共享冲突（error 32），报 `helper_unknown_error: setup refresh had errors`，属于沙箱核心链路阻塞。
→ https://github.com/openai/codex/issues/51590

**6. #52407 [OPEN] Windows Dots：CUA MXC 启动器报 HRESULT 0x80070003**
24 评论。Windows 11 25H2 上，直接 shell 恢复后 MXC 启动器仍失败，Dots + Computer Use 组合在 Windows 上的稳定性持续走低。
→ https://github.com/openai/codex/issues/52407

**7. #45835 [OPEN] Codex App 反复提示 "Selected model is at capacity"**
22 评论 / 6 👍。网络连通正常却频繁限流报错，Pro Lite 用户受影响，涉及容量调度与错误归因，直接影响付费体验。
→ https://github.com/openai/codex/issues/45835

**8. #37552 [OPEN] 无法使用多个终端会话**
17 评论 / 5 👍。Linux 环境下多终端会话不可用，属于长期未解的基础能力缺口。
→ https://github.com/openai/codex/issues/37552

**9. #2379 [OPEN] TUI：撤销 / 重做输入（Cmd-Z / Shift-Cmd-Z）**
13 评论 / 36 👍，点赞数在 enhancement 中极高。虽为 2025-08 的老 Issue，但持续被更新，说明 TUI 基础编辑体验仍是强诉求。
→ https://github.com/openai/codex/issues/2379

**10. #41942 [OPEN] Windows 生命周期 hooks 每次 exec_command 增加约 17–25 秒**
11 评论。ABAB A/B 测得 16.15x / 10.15x 延迟，且集中在 shell 退出之后。值得注意的元信息：报告者声明内容由"自主运行的 Claude Code agent"撰写，反映出 AI agent 自动提 issue 的新现象，也提示数据可信度需谨慎评估。
→ https://github.com/openai/codex/issues/41942

> 其他值得关注：#25317（WSL shell 重启后仍被污染）、#17541（会话中切模型触发 "encrypted content could not be decrypted"）、#27133（git worktree 下 `.codex/hooks.json` 被静默忽略）、#15355（TUI 本地 ingress 需求）。

---

## 四、重要 PR 进展（Top 10）

**1. #52972 Upgrade `rmcp` 至 3.5.1 并加固生命周期测试**
升级 MCP 依赖并同步 Cargo/Bazel lockfile，迁移至 `ClientConfig` / `ServerConfig`，同时调整取消 elicitation 请求的测试预期。
→ https://github.com/openai/codex/pull/52972

**2. #52967 复用并预热 WSL 剪贴板文本读取器**
此前每次粘贴都新建 PowerShell 进程，在 WSL 下可能挂起并阻塞共享剪贴板 worker；改为专用线程上的常驻 PowerShell reader。
→ https://github.com/openai/codex/pull/52967

**3. #52964 在原始粘贴突发期间延迟 transcript 重绘**
原始粘贴会产生成千上万个字符/Enter/Tab 事件，逐键重绘整个 transcript 会抵消粘贴批处理，修复后显著改善大段粘贴流畅度。
→ https://github.com/openai/codex/pull/52964

**4. #52937 在 compaction 过程中保留客户端标记的工具输出**
客户端提供的工具输出可能携带任务指令，即使标记 `retain: true` 也可能在压缩前被裁剪而丢失；新增默认关闭的开关以保留。
→ https://github.com/openai/codex/pull/52937

**5. #52778 让固定的 transcript prompt 可点击**
左键点击固定 prompt 标题可滚动回原始 prompt，同时结束选择、取消搜索、清除活动焦点，按条目身份追踪导航。
→ https://github.com/openai/codex/pull/52778

**6. #52756 对语音会话失败进行分类并记录终态**
为 voice 失败指标补充原因与生命周期阶段，修正会话时长在最终结果未知前即被记录的问题，并避免失败的控制消息覆盖更具体的 WebRTC 错误。
→ https://github.com/openai/codex/pull/52756

**7. #52748 让 code-mode 的 `exit()` 终止整个 cell**
此前 `exit()` 抛出可捕获异常，JS 仍可在 `catch`/`finally`/排队 promise 回调中继续执行；现在 V8 执行被彻底终止，cell 成功结束且无后续输出与状态变更。
→ https://github.com/openai/codex/pull/52748

**8. #52742 为 OpenAI 请求增加可选输出 token 回放**
新增默认关闭的 `output_token_replay` 特性，请求 `output.encrypted_content`，保留加密的消息/工具调用输出、状态及 output-text 注解。
→ https://github.com/openai/codex/pull/52742

**9. #52725 使用 OSC 7501 上报终端程序状态**
此前生命周期状态仅限 iTerm2 直连会话，OSC 7501 让更多终端能接收 Codex 的 `idle` / `working` / `blocked` 状态。
→ https://github.com/openai/codex/pull/52725

**10. #52723 为 code-mode host 增加可选 gRPC over stdio**
新增 `grpc+stdio://` 传输与默认关闭的 `code_mode_host_grpc` 特性开关，跨 code-mode 会话共享惰性 HTTP/2 通道与 host 进程，同时保持会话状态隔离。
→ https://github.com/openai/codex/pull/52723

> 其余值得留意：#52946（agent command center 行序稳定）、#52825 / #52952（exec runtime 重置与 code-mode host 恢复通知）、#52736（模型目录可覆盖增量工具提示）、#52721（服务关闭时会话创建失败的结构化原因）。

---

## 五、功能需求趋势

从本期全部 Issues 的标签分布可提炼出以下方向：

1. **Windows 平台稳定性（绝对主线）**
   `windows-os` 标签几乎覆盖 Top Issues 的大半：#48074、#49458、#42739、#51590、#52407、#51971、#51674、#45663、#51358、#52747。涉及沙箱 ACL、Computer Use、Dots、侧边栏、认证循环等多个子系统。

2. **Dots / 远程任务编排**
   dot 与本地项目、Computer Use 工具集的衔接断裂（#49458、#49729、#52407、#52715）成为新兴高频主题，说明"云端 dot 驱动本地 Codex"这一新交互范式仍在磨合。

3. **沙箱与权限模型**
   #51590、#51971、#17623 指向同一诉求：权限审批更可复用、授权范围更透明、沙箱失败可自恢复。

4. **性能与延迟**
   #41942（hooks 拖慢 exec）、#52964 / #52967（粘贴与剪贴板）显示 TUI 与 exec 链路的性能优化是持续方向。

5. **会话状态与上下文完整性**
   #52937（compaction 保留工具输出）、#17541（切模型解密失败）、#29370（blocked 目标无法回到 active）、#51152（cwd 失效导致 turn 全失败）共同指向"会话状态一致性"。

6. **TUI / CLI 基础体验**
   #2379（撤销重做，36 👍）、#15355（本地 ingress）、#37552（多终端会话）、#27133（worktree 下 hooks 失效）——编辑与配置体验仍是长期诉求。

7. **可观测性与任务透明度**
   #36718（证据驱动的完成报告）、#35930（自动进度百分比）反映用户对"任务到底完成了没有、完成得对不对"的强烈不确定感。

---

## 六、开发者关注点

- **Windows 是当前体验洼地**：从闪窗、沙箱 error 32、ACL 更新冲突、MXC 启动失败到认证循环，问题横跨 daemon、sandbox、app-server、computer-use，且多为长时间未闭环的老 Issue。建议官方优先收敛 Windows 沙箱与 ACL 链路。
- **"看似数据丢失"最伤信任**：项目从侧边栏消失（#42739）、归档删除残留隐藏 fork（#43106）等，即使磁盘数据仍在，也会被用户解读为数据丢失，需要更明确的 UI 提示与迁移保障。
- **dot ↔ 本地项目的断链**：dot 能起任务却选不了项目、读不了线程（#49729），这是新功能的能力缝隙，容易被早期采用者放大。
- **限流误报与模型切换**：`Selected model is at capacity`（#45835）与 `encrypted content could not be decrypted`（#17541）直接影响付费用户核心路径，错误归因不清会加剧不信任。
- **性能回归需量化**：Windows 上 hooks 带来 17–25 秒额外延迟（#41942），提示生命周期钩子在高频 exec 场景存在结构性开销。
- **AI agent 自动提 Issue 的新变量**：#41942 明确声明由自主 Claude Code agent 撰写并发布，这既丰富了反馈来源，也要求维护者对测量方法与复现步骤做更严格校验。

---

*报告基于 github.com/openai/codex 在 2026-10-10 至 2026-10-11 的公开数据整理。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-10-11）

> 数据来源：github.com/google-gemini/gemini-cli

---

## 1. 今日速览

今天社区动态由**夜间版本发布**和**大批子代理（Subagent）相关的维护者工作流议题**主导：v0.65.0-nightly 修复了 JSON 解析/流式响应错误处理与字符串截断的行终止符保留问题。Issues 侧几乎被 `area/agent` 的 Subagent 史诗级议题（可配置性、可恢复性、异步执行、UI/UX、并行协作）占据，说明子代理架构正进入密集设计期；PR 侧则集中在一批稳定性与边界条件修复（ACP 会话加载、30 秒搜索超时、原子写入文件名长度、Gemini 3 多模态函数响应）。

---

## 2. 版本发布

### v0.65.0-nightly.20261010.g9b6e0265d

夜间构建，包含两项修复：

- **fix(cli): 处理 `fetchJson` 中的 JSON 解析与响应流错误** — [PR #29658](https://github.com/google-gemini/gemini-cli/pull/29658)
  提升 CLI 在网络请求返回异常数据或流中断时的健壮性，避免未捕获异常导致会话中断。
- **fix(core): 在 `truncateString` 中保留行终止符** — [PR #29673](https://github.com/google-gemini/gemini-cli/pull/29673)
  修复字符串截断时丢失换行符的问题，避免输出被压缩成单行、影响可读性与后续解析。

配套版本号变更 PR：[#29701](https://github.com/google-gemini/gemini-cli/pull/29701)（自动 bump）。

---

## 3. 社区热点 Issues

按评论热度与影响面挑选 10 条：

1. **[#15269] Feature: Missing Subagent Hook Events**（8 评论）
   为子代理生命周期补齐 `BeforeSubAgent` / `AfterSubAgent` 钩子，与主代理 hooks 保持一致。评论数最高，说明钩子体系与子代理的整合是当前设计焦点。
   https://github.com/google-gemini/gemini-cli/issues/15269

2. **[#17602] [Remote Agents] A2A 机器对机器认证**（5 评论）
   跟踪非交互式、服务到服务认证（OAuth 2.0 Client Credentials 等），标志 Gemini CLI 从交互式工具向可编排服务节点演进。
   https://github.com/google-gemini/gemini-cli/issues/17602

3. **[#17110] Agent should run changes to validate app**（5 评论）
   让代理自我验证改动（自建反馈回路），是提升 AI 编码代理实际有效性的关键能力，属于长期高价值方向。
   https://github.com/google-gemini/gemini-cli/issues/17110

4. **[#17760] Subagent Configurability — Tools / policy / hooks / skills / schema**（3 评论，👍2）
   定义子代理在工具、策略、钩子、技能、Schema 上的可配置边界，是众多子代理议题的"总纲"，👍 数也较高。
   https://github.com/google-gemini/gemini-cli/issues/17760

5. **[#17758] Subagent Resumability & Persistence**（3 评论，👍1）
   让子代理工作可跨会话恢复、可迭代精炼，避免重启丢失上下文，直接关系到长任务场景的可用性。
   https://github.com/google-gemini/gemini-cli/issues/17758

6. **[#15272] Security: Default Hook Sandboxing**（3 评论）
   评估默认对 hooks 做沙箱隔离，降低本地代码执行风险。安全方向的重要前置议题。
   https://github.com/google-gemini/gemini-cli/issues/15272

7. **[#15670] Standardizing Reusable Intelligence: 原生 Sub-agent + Skills 架构**（3 评论）
   社区提出的"专家小队（Squad）"编排模型——主代理作为编排者调度领域专家，代表用户侧对架构演进的核心诉求。
   https://github.com/google-gemini/gemini-cli/issues/15670

8. **[#17120] Epic: Parallel Tool Calling**（2 评论）
   安全地并行执行读写工具，直接提升分析/规划/编辑的吞吐，并与并行子代理（#14963）互为依赖。
   https://github.com/google-gemini/gemini-cli/issues/17120

9. **[#18836] Replace WriteToDo with Persistent File-Based Task Tracking (CRUD)**（2 评论）
   指出现有 `WriteToDo` 依赖上下文内任务列表，存在"上下文腐化"、token 成本高、跨会话记忆全失的问题，建议改为持久化文件 CRUD。
   https://github.com/google-gemini/gemini-cli/issues/18836

10. **[#17648] BUG: `codebase_investigator` 代理初始化失败**（2 评论）
    用户报告委派给 `codebase_investigator` 时反复 Schema 校验失败并循环消耗配额，是真实用户侧影响较大的功能缺陷。
    https://github.com/google-gemini/gemini-cli/issues/17648

其他值得留意：**[#18062] Cloud Shell Lab 账号 API Error**（安全 + 需重测）、**[#15462] 企业级 Hooks 可配置**、**[#18287] 共享内存/并行子代理协作**、**[#18280] 复杂输入输出子代理 Schema**。

---

## 4. 重要 PR 进展

1. **[#29608] fix(core): Web 搜索 30 秒超时**（priority/p1）
   修复 `GoogleSearch` / `WebFetch` 因底层 LLM 调用不返回而导致代理循环永久卡在 `Thinking...`（用户报告 30 分钟以上挂起）的问题。
   https://github.com/google-gemini/gemini-cli/pull/29608

2. **[#29708] fix(acp): 在响应前完成 `session/load` 历史回放**
   修复 ACP 客户端在响应后才收到大部分 `session/update` 通知、与下一条 prompt 更新混杂的时序错误，符合 ACP 规范要求。
   https://github.com/google-gemini/gemini-cli/pull/29708

3. **[#29703] fix(core): 原子写入临时文件名控制在 NAME_MAX 内**
   修复 215–255 字节文件名因追加 `.<uuid>.tmp` 后缀超出 255 字节上限而报 `ENAMETOOLONG` 的问题。
   https://github.com/google-gemini/gemini-cli/pull/29703

4. **[#29611] fix(core): 支持带点号的 Gemini 3 模型及其别名的多模态函数响应**
   解析模型别名并支持 `gemini-3.8-flash` 等带点版本，避免多模态工具输出（如图片）被当作非法兄弟部件下发。
   https://github.com/google-gemini/gemini-cli/pull/29611

5. **[#29505] [CLOSED] fix: 支持 rootless Podman 的 keep-id**
   修复无根 Podman 沙箱启动时无法正确保留宿主 UID/GID、容器内缺少对应用户条目而失败的问题（已关闭，p1）。
   https://github.com/google-gemini/gemini-cli/pull/29505

6. **[#29644] fix(cli): 恢复终端宽度变化时的防抖静态 UI 刷新**
   恢复 `AppContainer.tsx` 中基于 `terminalWidth` 的 100ms 防抖 `refreshStatic()`，改善横向缩放时的渲染体验。
   https://github.com/google-gemini/gemini-cli/pull/29644

7. **[#29606] fix(core): 仅在合法 RFC 9110 token 前拆分自定义请求头**
   修复 `GEMINI_CLI_CUSTOM_HEADERS` 在遇到 `,"name":`（JSON 元数据）或 `, <url>` 时被错误切分的问题。
   https://github.com/google-gemini/gemini-cli/pull/29606

8. **[#29705] fix(cli): 单位选择前先对时长取整**
   修复 `formatDuration` 跨单位边界显示错误（如 `1000ms` 应显示 `1.0s`、`60.0s` 应显示 `1m`）。
   https://github.com/google-gemini/gemini-cli/pull/29705

9. **[#29607] fix(scripts): 无报告时让夜间评测汇总失败**
   修复 `aggregate_evals.js` 在无 `report.json` 时仍以 0 退出、掩盖夜间矩阵全部失败的问题。
   https://github.com/google-gemini/gemini-cli/pull/29607

10. **[#29615] fix(ci): 基于触发成功门控链式 E2E 并收紧 SHA 回退**
    加固 `chained_e2e.yml` 的 `workflow_run` 路径，防止非预期代码检出（供应链安全加固）。
    https://github.com/google-gemini/gemini-cli/pull/29615

---

## 5. 功能需求趋势

从过去 24 小时更新的 50 条 Issue 中，可提炼出以下主线：

- **子代理（Subagent）体系全面成熟化**：绝对主导方向，涵盖 Hook 事件、可配置性（工具/策略/钩子/技能/Schema）、可恢复性与持久化、异步与后台执行、UI/UX、内建代理、`/agents` 创建注册、并行协作与共享内存、纯编排者模式。相关议题多由维护者 `abhipatel12` 以 workstream-rollup 形式统一跟踪。
- **反馈闭环与自验证**：让代理运行改动以验证应用（#17110）、读取被截断内容（#19043）、行为评测（behavioral evals）成为多个子代理议题的强制配套要求。
- **并行能力**：并行工具调用（#17120）与并行子代理协作（#18287）互为前提。
- **远程代理与机器间认证**：A2A 机器对机器认证（#17602）、OAuth 2.0 动态客户端注册（#17604），指向服务化/可编排部署。
- **安全与沙箱**：默认 Hook 沙箱化（#15272）、企业级 Hooks 开关（#15462）、沙箱与 CI 供应链加固。
- **持久化任务跟踪**：以文件化 CRUD 取代上下文内 `WriteToDo`（#18836），缓解上下文腐化。
- **平台与模型兼容**：Gemini 3 带点版本与别名支持、多模态函数响应、Cloud Shell 环境兼容。

---

## 6. 开发者关注点

综合 Issues 与 PR，当前开发者的高频痛点与诉求集中在：

1. **稳定性与"卡死"类问题**：Web 搜索/抓取永久挂起（#29608）、JSON 与流式响应错误（#29658）——代理循环缺乏超时与错误恢复是首要抱怨。
2. **子代理初始化与 Schema 校验失败**：`codebase_investigator` 反复校验失败并循环消耗配额（#17648），且现有输入/输出 Schema 过于简化（#18280），用户希望暴露更完整的 `AgentDefinition` 能力。
3. **上下文与记忆管理**：`WriteToDo` 的上下文腐化、跨会话记忆丢失（#18836）以及子代理跨会话恢复（#17758）被反复提及。
4. **平台兼容性**：Cloud Shell Lab 账号 API 报错（#18062）、rootless Podman 沙箱 UID/GID（#29505）、超长文件名 `ENAMETOOLONG`（#29703）等环境边界问题。
5. **安全默认值与企业管理**：hooks 默认沙箱化、企业可统一启停 hooks，反映从个人工具向企业落地过渡中的治理需求。
6. **可配置性与可分享性**：用户希望子代理易于配置、使用与分享（#17761、#17760），并期望有官方示例代理（#18283）降低上手门槛。

---

*日报生成时间：2026-10-11 ｜ 数据窗口：过去 24 小时*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-10-11** ｜ 数据来源：github.com/github/copilot-cli

---

## 1. 今日速览

过去 24 小时内，Copilot CLI 发布了 v1.0.96-1 / v1.0.96-2 两个小版本，重点修复模型 ID 大小写敏感问题，并为交互式沙箱增加了环境密钥建议与掩码主机配置。社区侧共有 23 条 Issue 更新，其中**沙箱与权限（sandbox / permissions）**集中爆发——macOS 沙箱阻断 Gradle 守护进程、sandboxed git 无法使用独立凭据、HOME 覆盖触发误判等，成为今天最突出的痛点。此外，模型路由（BYOK、HydraFusion）、会话事件投递与 ACP 性能等中后台能力也有多条新 Issue 涌现。

---

## 2. 版本发布

### v1.0.96-2
- **修复**：`/model` 与 `/config` 中的模型 ID 现在大小写不敏感，并统一保存规范化（canonical）ID，避免用户因大小写差异导致模型选择失败。

### v1.0.96-1
- **新增**：交互式沙箱设置会主动建议可能需要的环境密钥（secrets），并允许在保存前添加需要掩码的主机（masking hosts）。
- **修复**：在企业策略（enterprise policy）仍在解析期间，保持 `/allow-all` 可用，避免启动阶段被策略阻塞。

> 小结：两个版本延续了近期“策略/沙箱可用性”的修复主线，属于体验型小版本，无破坏性变更。

---

## 3. 社区热点 Issues（精选 10 条）

**① #2494 [CLOSED] `copilot login` 在 Keychain 不可用时自动回车 y/N（回归）**
链接：https://github.com/github/copilot-cli/issues/2494
v1.0.16 起，当系统 Keychain 不可用，登录提示不再等待用户输入，而是“替用户”确认，导致认证流程中断。作者 lovato，12 条评论、1 👍，是今日讨论度最高的问题，且已关闭，说明得到处理。**重要性**：认证路径是入口级功能，回归影响面广。

**② #5111 [OPEN] 图片上限忽略 `modelCapabilities.limits.vision.max_prompt_images`**
链接：https://github.com/github/copilot-cli/issues/5111
运行时把每请求图片硬编码为 50 张，超出后原地替换最旧图片为提示文本，并且每次驱逐都会重写 prompt-cache 前缀，既违反模型能力声明又破坏缓存。**重要性**：涉及多模态能力与缓存命中率，直接影响成本与长会话稳定性。

**③ #5109 [OPEN] copilot-cli 完全不可用（托管策略刷新失败）**
链接：https://github.com/github/copilot-cli/issues/5109
用户报告 1.0.95 下启动即报 “Managed account policy could not be refreshed”，陷入重试循环。**重要性**：属于阻断级（blocker）故障，企业托管账号用户首当其冲。

**④ #5108 [OPEN] ACP `session/list` 每页都全量扫描会话存储**
链接：https://github.com/github/copilot-cli/issues/5108
在 `--acp --stdio` 模式下，翻页耗时等同全量扫描，会话量上千时遍历到末尾需数分钟。**重要性**：直接影响 IDE/编辑器等 ACP 宿主集成体验，是架构层面的性能缺陷。

**⑤ #5103 [OPEN] BYOK：子代理固定使用会话的 wire API，跨家族模型返回 400**
链接：https://github.com/github/copilot-cli/issues/5103
`COPILOT_PROVIDER_WIRE_API` 作用于整个会话，导致子代理在另一家族模型上必然失败（如 GPT-5 仅支持 responses API）。**重要性**：BYOK 是企业自建模型接入的关键路径，多模型混用场景普遍。

**⑥ #5100 [OPEN] 一次 120s host-ack 超时后，会话事件投递永久失败**
链接：https://github.com/github/copilot-cli/issues/5100
长会话中 `tool.execution_partial_result` 未在 120s 内被确认后，`session.send` 持续失败，会话必须 resume 才能恢复。**重要性**：可靠性问题，且失败后无法自愈。

**⑦ #5102 [OPEN] 沙箱化 git 无法使用与 Copilot/gh 登录身份不同的凭据**
链接：https://github.com/github/copilot-cli/issues/5102
`sandbox.auth.git` 只注入登录身份，且会插入空的最高优先级 `credential.helper` 覆盖，导致细粒度 PAT 无法使用。**重要性**：企业环境下“代理身份 ≠ 提交身份”是常见合规需求。

**⑧ #5105 [OPEN] macOS 沙箱阻断 Gradle 守护进程的 localhost 连接**
链接：https://github.com/github/copilot-cli/issues/5105
即使放行出站与本地网络，Gradle 客户端仍无法连接本机守护进程，离线 `help` 任务都失败。**重要性**：JVM/Android 开发者主流工作流被直接打断。

**⑨ #4946 [OPEN] 后台 Shell 完成通知后触发 HTTP 400 `content[].thinking`**
链接：https://github.com/github/copilot-cli/issues/4946
后台命令跨轮次完成后，在新一轮开头注入 `system.notification`，引发 400 错误。**重要性**：跨轮次状态管理与消息构造缺陷，影响后台任务这一高频用法。

**⑩ #5097 [OPEN] HydraFusion（policy max）路由返回策略外模型并静默降级**
链接：https://github.com/github/copilot-cli/issues/5097
多数轮次路由失败后悄悄回退到 gpt-5.6-luna，UI 仅显示一行提示。**重要性**：模型路由的可观测性与策略一致性，用户难以察觉实际使用了降级模型。

**其他值得关注**：#3866 深色背景下 Thinking 文本不可读（4 👍，无障碍问题）；#3081 NixOS keychain 支持损坏（3 👍）；#5099 只影响展示、不影响模型的 hook；#5090 启动与输入行体验（MCP/插件加载阻塞启动）。

---

## 4. 重要 PR 进展

过去 24 小时内**仅有 1 条 PR 更新**，且内容与核心功能无关：

- **#5106 [OPEN] Create index.html**（作者 lg3707082-cpu）
  链接：https://github.com/github/copilot-cli/pull/5106
  摘要仅为一个附件链接，疑似低质量/无关提交，不涉及 CLI 功能、修复或文档变更。

> 说明：本期 PR 数据不足以支撑“10 条重要 PR”的筛选。从 Issue 的高活跃度来看，社区贡献目前集中在问题反馈而非代码提交，建议关注后续维护者对上述 sandbox/permissions 类问题的修复 PR。

---

## 5. 功能需求趋势

从 23 条 Issue 的主题标签与摘要中，可提炼出以下社区关注方向：

1. **沙箱与权限模型（最高热度）**
   `area:permissions` 与沙箱相关 Issue 达 5 条以上（#5098、#5102、#5105、#5107、#5098），集中在“放行了却仍失败”“无法自定义凭据”“HOME 覆盖误判”等粒度控制与误报问题上。趋势：社区希望沙箱既能严格隔离，又不阻断正常开发工具链。

2. **认证与凭据管理**
   Keychain 可用性（#2494、#3081）、托管策略刷新（#5109）、沙箱 git 凭据（#5102）。趋势：多平台（macOS / NixOS / Linux）与多身份（Copilot / gh / PAT）的凭据体系需要统一。

3. **模型能力与路由**
   BYOK wire API（#5103）、HydraFusion 路由降级（#5097）、模型 ID 规范化（v1.0.96-2）、视觉图片上限（#5111）。趋势：多模型/多提供商下的能力协商与策略一致性。

4. **会话与宿主集成性能**
   ACP `session/list` 全量扫描（#5108）、事件投递超时（#5100）、后台任务通知（#4946）。趋势：随着 ACP/IDE 集成深化，会话存储与事件总线的可扩展性成为瓶颈。

5. **终端渲染与无障碍**
   Thinking 文本对比度（#3866）、用户/助手消息视觉区分（#2746）、右键复制失败（#5110）。趋势：TUI 可读性与跨终端（MobaXterm 等）兼容性。

6. **插件 / Hook / MCP 生态**
   显示专用 hook（#5099）、sessionStart hook 失效（#5098）、`copilot mcp` 子命令（#590，已关闭）、启动加载阻塞（#5090）。趋势：扩展机制需要更细粒度的“模型可见 vs 用户可见”区分与更快的启动路径。

7. **工具可用性细节**
   `view` 工具把 8.6 KB 文件误判为过大（#4633），属于典型的小而痛的体验问题。

---

## 6. 开发者关注点

综合来看，开发者反馈的痛点集中在以下几类：

- **“配置了却不生效”**：放行网络后 Gradle 仍连不上（#5105）、加了 sandbox 路径后 hook 反而停跑（#5098）、HOME 覆盖触发 `script_action_changed`（#5107）。沙箱策略与实际行为不一致是当前最大的信任成本。
- **阻断级故障缺乏自愈**：托管策略刷新失败（#5109）、事件投递 120s 超时后永久失败（#5100），都需要人工干预或 resume，可靠性预期未被满足。
- **静默降级不可见**：HydraFusion 回退到低阶模型（#5097）、图片被静默驱逐（#4831、#5111），用户事后才从日志发现，缺乏主动告警。
- **企业/多身份场景支持不足**：细粒度 PAT（#5102）、GitHub Enterprise 主机名展示（#4666）、托管策略，说明企业级落地细节仍是短板。
- **性能随规模退化**：会话列表（#5108）、启动加载 MCP/插件（#5090），在大型仓库或长历史下体验明显下降。
- **无障碍与终端兼容**：对比度（#3866）、消息区分（#2746）、MobaXterm 复制（#5110），说明 TUI 在不同终端与主题下的一致性仍需打磨。

**一句话总结**：今日动态由两个体验型小版本与一波“沙箱/权限 + 会话可靠性”问题构成，社区的核心诉求是——让沙箱策略可预测、让认证与凭据可配置、让模型路由与降级可观测。

---

*注：本期 PR 数据仅 1 条且与核心功能无关，故第 4 部分未按 10 条标准筛选，特此说明。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报
**日期：2026-10-11** | 数据来源：github.com/MoonshotAI/kimi-cli

---

## 1. 今日速览

今日社区整体处于**低活跃状态**：过去 24 小时内无新版本发布，无 Issue 更新，仅有一条文档类 PR 状态变更。唯一动态是 PR #1718（AGENTS.md 专题文档）被关闭，属于文档完善工作的收尾。

> ⚠️ **数据说明**：本日实际仅捕获到 1 条 PR 记录，Issues 为 0 条。因此下文第 3、5、6 部分无法按"10 个 Issue"的要求展开——**为避免虚构数据，相关部分将如实标注为空并说明原因**。

---

## 2. 版本发布

**无新版本发布。**

过去 24 小时内没有 Release 记录，当前无新增功能或修复随版本进入用户侧。

---

## 3. 社区热点 Issues

**过去 24 小时内无 Issue 更新（0 条）。**

无法列出"10 个最值得关注的 Issue"——当日无任何 Issue 数据可供分析。建议在后续日报中，当数据量恢复后再进行热点筛选与社区反应分析。

---

## 4. 重要 PR 进展

当日仅 1 条 PR 动态，全量列出如下：

### ✅ PR #1718 [CLOSED] docs: 新增 AGENTS.md 专题页、安全边界说明和首页导览
- **作者**：liwang614
- **创建**：2026-04-02 ｜ **更新**：2026-10-10（状态变更为 CLOSED）
- **链接**：https://github.com/MoonshotAI/kimi-cli/pull/1718
- **内容**：新增文档页面 `docs/{zh,en}/customization/agents-md.md`，作为 AGENTS.md 的专题说明，覆盖：
  - AGENTS.md 与 README.md 的**区别**
  - **加载行为**：仅作用于工作目录，且**大写文件名优先**
  - `/init` 命令的**生成流程**
  - **推荐写入内容**及何时需要更新
  - 同时涉及**安全边界说明**与**首页导览**的补充
- **意义**：这是一条面向**自定义配置能力**的文档补强，帮助用户正确使用 AGENTS.md 这一项目级指令文件，降低配置误用带来的行为偏差风险。中英双语文档同步，说明项目对国际用户的覆盖持续投入。
- **备注**：该 PR 创建于 4 月，历时半年后于 10-10 关闭，评论数缺失，无法评估社区讨论热度。

---

## 5. 功能需求趋势

**无法提炼。**

功能需求趋势需基于 Issues 文本聚合分析，而当日 Issues 数据为 0 条。唯一可参考的信号来自 PR #1718，其指向一个明确方向：

- **配置与自定义能力**（AGENTS.md / `/init` 工作流）——项目正在规范化"项目级指令文件"的使用方式，这可能反映社区对**可定制化行为**的关注。

除此之外，IDE 集成、性能、新模型支持等方向在当日数据中**均无证据支撑**，不做推测。

---

## 6. 开发者关注点

**当日无 Issues 数据，无法总结开发者痛点或高频需求。**

从仅有的一条文档 PR 可作有限观察：

- AGENTS.md 的**加载规则**（仅工作目录、大写优先）被单独成页说明，暗示该机制**容易被误用或误解**，文档团队正在主动消除这类困惑。
- 文档同时补充**安全边界说明**，说明项目对"用户自定义指令可能带来的风险"有意识地进行提示。

---

## 数据小结

| 板块 | 数量 | 状态 |
|---|---|---|
| Releases | 0 | 无 |
| Issues（24h 更新） | 0 | 无 |
| Pull Requests（24h 更新） | 1 | 文档类，已关闭 |

**结论**：2026-10-11 为社区平静日。若需完整的趋势与痛点分析，建议在 Issue/PR 活跃度恢复后合并多日数据进行滚动统计，而非依赖单日样本。

*注：本报告严格基于所提供数据生成，未对缺失的 Issue 列表、社区反应、功能趋势做任何虚构补充。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-10-11

> 数据来源：github.com/anomalyco/opencode

---

## 一、今日速览

过去 24 小时无新版本发布，但 Issue/PR 活动密集。**V2 迁移遗留问题成为绝对主线**：V1→V2 升级导致的配置被静默丢弃、环境变量代理失效、Provider 凭据丢失等回归问题集中爆发。同时，MCP 连接与凭据生命周期管理（失败不重试、env 变量缓存永不过期）暴露出后台服务的状态持久化缺陷，社区关注度最高的是 OpenAI Provider 的间歇性上游连接失败（#52269，12 条评论）。

---

## 二、版本发布

无新 Release。

---

## 三、社区热点 Issues（Top 10）

1. **#52269 [OPEN] OpenAI Provider 间歇性 Service Unavailable**（12 评论 / 👍2）
   多模型、多会话下随机出现上游连接失败，部分请求成功、部分反复重试。作为最高热度问题，说明这可能影响大量用户的日常使用，属于 P0 级稳定性问题。
   https://github.com/anomalyco/opencode/issues/52269

2. **#47975 [CLOSED] Provider 请求 invalid_request_error，OpenCode 完全不可用**（12 评论 / 👍1）
   请求体参数校验失败导致工具整体不可用，虽已关闭但评论量高，反映 Provider 参数兼容性仍是痛点。
   https://github.com/anomalyco/opencode/issues/47975

3. **#36347 [OPEN] V2 需在服务重启后保留权限与提问等待状态**（7 评论 / 👍1）
   权限请求与提问表单是进程本地的，重启后挂起的延续状态被销毁。这是 V2 架构层面的持久化缺陷，对长任务与服务化部署影响大。
   https://github.com/anomalyco/opencode/issues/36347

4. **#52237 [OPEN] 远程 MCP 服务器失败一次后永不重试，直到服务重启**（7 评论）
   macOS 休眠唤醒杀死长连接后，后台服务将 MCP 永久置为 `failed` 状态，新建会话/重启 TUI 均无效。MCP 状态机缺乏自愈能力。
   https://github.com/anomalyco/opencode/issues/52237

5. **#54109 [OPEN] opencode.json 中的自定义 Provider 定义被完全忽略（Ollama 无法加载）**（6 评论）
   按官方文档配置本地 Ollama 在 1.18.35 上无效，模型不出现在 `opencode models` 中。直接影响本地/私有化部署用户。
   https://github.com/anomalyco/opencode/issues/54109

6. **#54352 [OPEN] execute 压缩器生成指向“从未持久化”载荷的 ccr 指针，大型工具结果被销毁**（5 评论）
   大结果被替换为 `<<ccr:...>>` 指针，但载荷未写入任何存储、也无工具可赎回，导致模型永久丢失内容。数据破坏性问题，需优先修复。
   https://github.com/anomalyco/opencode/issues/54352

7. **#54370 [OPEN] V2 静默丢弃 V1 格式的 `provider.opencode-go` 块，导致 Go 凭据失效**（5 评论）
   升级到 V2 后 Go 模型全部报 `Missing API key`，根因是旧格式 provider 块被静默忽略。典型升级回归。
   https://github.com/anomalyco/opencode/issues/54370

8. **#42538 [OPEN] 删除会话缓慢/卡死，残留幽灵会话，甚至冻结整个应用**（5 评论）
   桌面端 `removing share` 卡住导致三个症状共用同一根因，长期未解，影响桌面用户体验。
   https://github.com/anomalyco/opencode/issues/42538

9. **#54400 [OPEN] Agent 退回到 bash/powershell 读写文件**（4 评论）
   `read` 丢失缩进、`edit/write` 要求字节级精确匹配，迫使 Agent 使用 shell 变通，绕过原生工具。这是工具可靠性的核心体验问题。
   https://github.com/anomalyco/opencode/issues/54400

10. **#51247 [OPEN] V2 中 HTTPS_PROXY 环境变量失效（V1 正常）**（3 评论）
    企业/受限网络环境必备能力在 V2 回归，影响面明确，属于必须修复的网络层回归。
    https://github.com/anomalyco/opencode/issues/51247

---

## 四、重要 PR 进展（Top 10）

1. **#48352 [CLOSED] fix(core): 允许 Agent 停止后台 shell 命令**（Closes #36424）
   新增 `shell_stop`，Agent 可凭 shell ID 取消后台命令，复用 `Job.cancel`。补齐后台进程控制能力。
   https://github.com/anomalyco/opencode/pull/48352

2. **#48336 [CLOSED] fix(core): ID 冲突时复制导入会话**
   导入已存在 ID 的会话时创建独立副本并分配新 ID，避免数据覆盖。
   https://github.com/anomalyco/opencode/pull/48336

3. **#48300 [CLOSED] feat(tui): 新增 minimal / hidden 工具调用显示模式**
   新增 Settings → Session → Tool calls 三档模式，减少冗长工具输出对阅读的干扰。
   https://github.com/anomalyco/opencode/pull/48300

4. **#48295 [CLOSED] fix(core): 保留已配置的 Cloudflare Gateway 认证**（Closes #48293）
   在解析原生 Cloudflare AI Gateway Provider 时保留 `gatewayApiKey`，修复认证丢失。
   https://github.com/anomalyco/opencode/pull/48295

5. **#54398 [OPEN] feat(core): 为自定义 OpenAI 兼容 Provider 发现上下文长度**（Closes #53235）
   自定义 Provider 不在 models.dev 中，模型一直用占位限制；该 PR 移植到 V2 后支持自动发现上下文窗口。
   https://github.com/anomalyco/opencode/pull/54398

6. **#54397 [OPEN] fix(core): V2 恢复陈旧事件序列**（Fixes #51411）
   处理保留事件中序列从 0 开始导致的恢复异常，属于 V2 事件溯源健壮性修复。
   https://github.com/anomalyco/opencode/pull/54397

7. **#54396 [OPEN] fix(core): SQLite 语句在锁超时时重试**（Closes #47566）
   多进程共享同一数据库时，写锁竞争导致的失败改为重试，提升多实例并发稳定性。
   https://github.com/anomalyco/opencode/pull/54396

8. **#54391 [OPEN] fix(ui): 将菜单内容限制在可用高度内以支持滚动**（Closes #54374）
   利用 corvu popper 发布的 `--kb-popper-content-available-height` 修复 Agent 选择菜单被窗口裁切的问题。
   https://github.com/anomalyco/opencode/pull/54391

9. **#54394 [OPEN] feat(acp): 支持 `_session/steering`**（Closes #53042，Refs #44877）
   在 ACP v2 落地前的过渡方案，改善 Zed 等外部 Agent 客户端的会话控制能力。
   https://github.com/anomalyco/opencode/pull/54394

10. **#54359 [OPEN] feat: OAuth 登录时显示二维码**
    针对无头/受限终端场景，在设备码 OAuth 流程中增加二维码，改善登录体验。
    https://github.com/anomalyco/opencode/pull/54359

> 另有多条 V1→V2 的移植型 PR 集中合并/重开（如 #54395 文档、#52622 贡献规则），表明项目正处于 V2 迁移收尾阶段。

---

## 五、功能需求趋势

- **V2 迁移回归修复（最大主题）**：HTTPS_PROXY 失效、V1 provider 块被静默丢弃、旧配置兼容、事件序列恢复等，社区正集中清理升级带来的破坏性变更。
- **Provider 生态与自定义支持**：本地 Ollama、自定义 OpenAI 兼容 Provider 的配置加载与上下文长度发现是持续诉求。
- **MCP 可靠性**：失败重试、`{env:...}` 凭据解析、状态自愈成为高频话题，远程 MCP 的凭证与连接生命周期管理亟待加强。
- **会话持久化与连续性**：权限/提问状态跨重启保留（#36347）、会话删除稳定性（#42538）、子会话最终输出丢失（#36670）。
- **工具链可靠性**：`read/edit/write` 的字节级匹配与缩进问题（#54400）、大工具结果压缩破坏数据（#54352）。
- **UI/UX 细节**：V2 会话头终端切换按钮缺失（#54193）、桌面端模型选择器推理能力硬编码为 false（#54195）、菜单溢出（#54374）。
- **客户端集成**：ACP/Zed 集成（#53799、#54394）、桌面端侧会话支持（#33469）。
- **性能**：Session.wait 历史扫描随会话增长（#54389）等原生层优化需求浮现。

---

## 六、开发者关注点

1. **升级即踩坑**：多个高评论 Issue 均由 V1→V2 升级引发（凭据丢失、代理失效、配置被忽略），社区对**向后兼容与迁移提示**的诉求强烈，建议增加配置弃用警告而非静默丢弃。
2. **“静默失败”最伤人**：provider 块被丢弃、ccr 指针无存储、MCP 显示 connected 实际 404——缺乏明确报错让排查成本极高，错误可见性需系统性改善。
3. **状态与持久化是 V2 的结构性短板**：进程本地状态（权限、MCP、事件序列、数据库锁）在重启/并发场景下表现脆弱。
4. **工具质量直接影响 Agent 行为**：`read/edit` 不可靠迫使 Agent 退回 shell，反映原生工具需达到“可信赖”标准。
5. **本地/私有化部署用户不容忽视**：Ollama、自定义 Provider、HTTPS_PROXY 等需求指向企业及离线场景，是重要的用户群体。

---

*日报由 AI 技术分析生成，如需调整关注方向或条目数量可继续指示。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-10-11

> 数据来源：github.com/badlogic/pi-mono
> 统计窗口：过去 24 小时

---

## 一、今日速览

过去 24 小时**无新版本发布**，但社区讨论异常活跃——Issues 更新量高达 50 条，其中大量集中在 **Windows 平台支持**、**会话卡在 "Working..." 的稳定性问题**，以及 **1.1.0 全屏 TUI 引入的回归**（滚动被阻塞、herdr 内联图片失效）。PR 侧则围绕 **Linux 原生包（.deb/.rpm）**、**配置 Schema 迁移至 pi.dev** 和 **扩展 abort 续跑** 三条主线推进，整体处于"稳定期修补 + 平台扩展"阶段。

---

## 二、版本发布

过去 24 小时无新 Release。

---

## 三、社区热点 Issues（10 条）

### 1. #7547 [OPEN] Windows 平台使用方式大讨论
- 链接：https://github.com/earendil-works/pi/issues/7547
- 评论 **80**（今日最热），👍 2
- **重要性**：官方发起的长线程，核心议题是"Pi 在 Windows 上有太多运行方式，难以决定该把精力投在修 bug、写文档还是开箱即用上"。这直接关系到 Windows 开发者生态的战略取舍。
- **社区反应**：80 条评论说明 Windows 用户基数大、痛点分散，属于典型的"高关注、低共识"议题。

### 2. #10031 [CLOSED] 按 ESC 停止思考后偶发卡在 "Working..."
- 链接：https://github.com/earendil-works/pi/issues/10031
- 评论 28，👍 3
- **重要性**：影响核心交互流程，用户只能 `Ctrl+C` 退出再 `pi -c` 恢复。自 v0.84.0 起持续约一个月，跨机器复现。
- **社区反应**：已关闭，说明团队已定位/修复，是近期稳定性最重要的修复之一。

### 3. #5291 [CLOSED] Anthropic 订阅下会话挂起
- 链接：https://github.com/earendil-works/pi/issues/5291
- 评论 11，👍 3
- **重要性**：与 #10031 症状一致（卡 "Working..."），且集中在同一时间段并发出现，指向会话/请求层的通用缺陷而非单一 provider 问题。

### 4. #8036 [OPEN] edit 工具渲染大 diff 时崩溃 TUI
- 链接：https://github.com/earendil-works/pi/issues/8036
- 评论 9，👍 0
- **重要性**：约 14.5 MB 的 diff（HTML 超长行）直接打崩交互式 TUI，且影响"执行中"和"会话恢复"两个阶段。大文件/长行场景下的健壮性问题。

### 5. #10256 [OPEN] 0.99.x 终端颜色查询泄漏 + BEL 误开外部编辑器（Windows mintty）
- 链接：https://github.com/earendil-works/pi/issues/10256
- 评论 9，👍 3
- **重要性**：启动即触发外部编辑器，提示符里出现 `;0;rgb:...` 原始转义序列。**0.99.x 回归、0.87.1 正常、Windows Terminal 正常**，定位清晰，属于 ConPTY/mintty 兼容性回归。

### 6. #10605 [OPEN] OpenAI/ChatGPT OAuth 403 "not eligible for subscription sharing"
- 链接：https://github.com/earendil-works/pi/issues/10605
- 评论 9，👍 0
- **重要性**：登出/登录均无法绕过，疑似服务端策略变更导致的订阅共享限制，直接影响 Plus 用户可用性。

### 7. #9512 [OPEN] GPT-6 Astra max reasoning 下压缩摘要触顶
- 链接：https://github.com/earendil-works/pi/issues/9512
- 评论 7，👍 2
- **重要性**：上下文压缩失败 → 上下文溢出恢复失败，形成死循环式错误。新模型 + 高推理档位下的上下文管理瓶颈。

### 8. #10719 [CLOSED] Bun 安装 + Node 运行时导致所有扩展 `Cannot find module 'jiti'`
- 链接：https://github.com/earendil-works/pi/issues/10719
- 评论 4
- **重要性**：安装方式与运行时错配（`bun install -g` + `#!/usr/bin/env node`）导致扩展全灭。已关闭，但暴露了包管理与运行时组合的脆弱性。

### 9. #10762 [CLOSED] 无头 `pi -p` 在连接被静默丢弃时永久挂起
- 链接：https://github.com/earendil-works/pi/issues/10762
- 评论 3
- **重要性**：**无超时、无重试、0 CPU**，30 分钟内三波并发出现，对 CI/自动化场景是致命问题。已关闭，修复价值高。

### 10. #10411 [OPEN] pi-durable：等待环死锁而非被拒绝
- 链接：https://github.com/earendil-works/pi/issues/10411
- 评论 2
- **重要性**：两个互相 `wait` 的任务双双停在 `waiting` 状态。Durable 编排层的正确性缺陷，影响持久化工作流的可靠性。

**其他值得关注的短评 Issue**：
- #10281 [CLOSED] 支持读取 Claude Code 的 `.mcp.json`（MCP 互操作，👍 2）
- #10769 [CLOSED] 全屏模式下 overlay 阻塞 transcript 滚动（1.1.0 默认全屏回归）
- #10775 [CLOSED] github-copilot provider 无网络韧性（5s 硬编码超时、零重试）
- #10764 [CLOSED] 回答运行中的附带问题后未保留原任务（交互体验提案）

---

## 四、重要 PR 进展（今日共 5 条，全部列出）

### 1. #10782 [CLOSED] feat(coding-agent): 新增 Linux `.deb` / `.rpm` 原生包构建
- 链接：https://github.com/earendil-works/pi/pull/10782
- **内容**：在发布流水线中加入 Debian/RPM 打包，解决当前 `install.sh` 走 npm、脱离系统包管理器导致的文件管理不一致（无 `dpkg`/`rpm` 追踪）。
- **意义**：Linux 发行版集成的关键一步。

### 2. #10726 [CLOSED] fix: codemode 忽略 Node watch 通知
- 链接：https://github.com/earendil-works/pi/pull/10726
- **内容**：修复 #10725。`node --watch` 下，Node 在 worker 消息通道上发出依赖通知，被 host 误判为畸形 codemode 消息，导致 `sandbox.execute('return 42;')` 也报 `Sandbox bridge broken`。

### 3. #10751 [OPEN] feat(coding-agent): 采用 pi.dev 配置 Schema
- 链接：https://github.com/earendil-works/pi/pull/10751
- **内容**：将 pi.dev 的 schema 端点设为生成的配置 schema 的规范 `$id`；内置主题与示例改用已发布主题 schema；补充 models / settings / keybindings / theme 的 schema URL 文档。
- **意义**：配置体系向统一在线 schema 收敛，利于编辑器补全与校验。

### 4. #10774 [OPEN] fix(tui): 恢复 herdr 中的 kitty 图片
- 链接：https://github.com/earendil-works/pi/pull/10774
- **内容**：#10573 让 herdr 返回 `images: null`；此前 herdr 因 `GHOSTTY_RESOURCES_DIR` 泄漏而走 ghostty 分支、拿到 kitty 图片且渲染正常。**1.1.0 因此破坏了 herdr 内联图片**，本 PR 保留 herdr 的 kitty 图形协议支持。

### 5. #10766 [CLOSED] feat(coding-agent): 扩展 abort 支持同轮续跑
- 链接：https://github.com/earendil-works/pi/pull/10766
- **内容**：扩展在 `message_update` 中检测到违规调用 `ctx.abort()` 后，当前会提前退出 run loop、滞留排队 follow-up 并 settle。本 PR 允许 abort 后在同一 run 中注入提醒并继续。
- **意义**：为"中途拦截 + 纠正后继续"的扩展模式提供原生支持（对应 Issue #10767）。

---

## 五、功能需求趋势

从今日 50 条 Issue 中可以提炼出以下方向：

| 方向 | 代表 Issue | 说明 |
|---|---|---|
| **Windows 平台体验** | #7547、#10256 | 运行方式碎片化、mintty/ConPTY 转义泄漏、外部编辑器误触发 |
| **会话稳定性 / 超时重试** | #10031、#5291、#10762、#10775 | 卡 "Working..."、无头模式永久挂起、provider 零重试 |
| **TUI / 全屏渲染回归** | #8036、#10769、#10774、#10777 | 大 diff 崩溃、overlay 阻塞滚动、鼠标选区被忽略、herdr 图片 |
| **上下文与压缩管理** | #9512、#10639 | max reasoning 下摘要触顶、首轮缺 system prompt |
| **扩展 / 插件 API 能力** | #8023、#10639、#10767 | 消息发布确认、abort 续跑、系统提示注入时机 |
| **Durable 编排正确性** | #10411、#10779 | 等待环死锁、虚拟模型路由 |
| **模型 / Provider 兼容** | #10605、#10652、#10759、#10238 | OAuth 403、图像模型端点误用、anthropic-beta 覆盖冲突、Copilot token 刷新 |
| **生态互操作** | #10281、#10145 | 读取 `.mcp.json`、包目录索引缺失 |
| **Linux 发行与安装** | #10719、#10782 | Bun/Node 运行时错配、原生包 |

---

## 六、开发者关注点（痛点与高频需求）

1. **稳定性压倒一切**：卡 "Working..."（#10031、#5291）与无头永久挂起（#10762）是最高频、最影响生产使用的两类问题，且都与**超时/重试/连接中断处理**缺失相关。开发者反复强调"必须 `Ctrl+C` 才能恢复"。

2. **Windows 是明确短板**：#7547 的 80 条评论 + #10256 的 0.99.x 回归，说明 Windows 用户基数大，但 mintty/ConPTY 兼容、安装方式、开箱即用度都需系统性投入。

3. **1.1.0 全屏 TUI 引入多处回归**：overlay 阻塞滚动（#10769）、herdr 图片失效（#10774）、鼠标选区被 Backspace 忽略（#10777）——建议团队补充全屏模式的回归测试覆盖。

4. **Provider 网络韧性普遍不足**：github-copilot 5s 硬编码超时零重试（#10775）、OpenAI-compat 连接静默丢弃无超时（#10762）、Copilot token 过期不自动刷新（#10238）。**统一的可配置超时/重试层**是高频呼声。

5. **扩展 API 表达力不足**：`sendMessage()` 返回 `void` 无法确认发布（#8023）、abort 后无法续跑（#10767）、`triggerTurn` 首轮缺 system prompt（#10639）。社区希望扩展能更深度地介入运行生命周期。

6. **安装/运行组合的脆弱性**：Bun 安装 + Node 运行导致 jiti 缺失（#10719）、Git 包 pinned SHA 变更不生效（#10758），反映配置与包管理路径缺少一致性校验和告警。

7. **配置可移植性诉求**：#10187 希望把 `deviceId` 移出全局设置，因为用户用 Git 管理 dotfiles，设备标识混入偏好文件会产生冲突——体现"配置即代码"人群的真实需求。

---

*本日报由 AI 开发工具技术分析自动生成，数据基于 github.com/badlogic/pi-mono 过去 24 小时的公开动态。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-10-11）

数据来源：[github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)

---

## 一、今日速览

今日社区热度高度集中在 **Managed Agent / Hosted Harness 架构** 的推进上，`proposal(serve)` #12380 以 51 条评论成为绝对焦点，围绕会话持久化、工作区绑定、可恢复工具执行展开了长线讨论。与此同时，**XML 工具调用恢复（tool-call recovery）** 成为另一条主线：多个相关 Issue 与 PR 同步推进，暴露出引用内容、孤立闭合标签、大响应前缀扫描等一连串边界问题。版本方面，`v0.25.1-preview.2` 与 `v0.25.0-nightly` 均以远程 Host 绑定修复为主。

---

## 二、版本发布

**1. v0.25.1-preview.2**
- `fix(agents)`: 替换选定的远程 Host 时不再丢失绑定关系（@yiliang114，[PR #13430](https://github.com/QwenLM/qwen-code/pull/13430)）
- `test(core)`: 关闭 #12693 的合并后复核

**2. v0.25.0-nightly.20261010.9763580b84**
- 内容与上述 preview 基本一致，同为远程 Host 绑定修复 + core 测试收尾。

> 两个版本均为小幅修复型发布，核心变化是修复远程 Host 切换时的绑定丢失问题，属于 Managed Agent 方向的稳定性补丁。

---

## 三、社区热点 Issues

1. **[#12380](https://github.com/QwenLM/qwen-code/issues/12380) proposal(serve): 定义 Managed Agent 双路径架构与分阶段交付（51 评论）**
   今日讨论量最高的 Issue。提出在保留现有 TypeScript agent loop 的前提下，让模型推理与工具环境供给解耦，并为 Session 赋予持久化归属、Workspace 绑定与可恢复工具执行。这是整个 Managed Agent 路线的顶层设计文档，值得关注。

2. **[#10797](https://github.com/QwenLM/qwen-code/issues/10797) 非思考型脚手架标签被回显到用户可见输出（10 评论）**
   工具结果块、system-reminder 等内部标记泄漏进用户输出。经实际 CLI/tmux 构建验证仍可复现，属于影响输出纯净度的核心问题。

3. **[#13492](https://github.com/QwenLM/qwen-code/issues/13492) XML 工具调用恢复丢失含引用标记的外层调用（9 评论）**
   部分修复中：#13515 已阻止引用标记被误派发，但 #13579 尚未合并，外层调用恢复仍是待办。这是工具调用正确性的关键一环。

4. **[#12333](https://github.com/QwenLM/qwen-code/issues/12333) token 优化缺乏 recall / 任务成功率门禁（9 评论）**
   指出 #12028 umbrella 下所有 token 节省改动只测"省了多少"，却不测"牺牲了多少工具召回或任务成功率"，直指评测体系的盲区。

5. **[#2596](https://github.com/QwenLM/qwen-code/issues/2596) [CLOSED] Qwen CLI 持续在末尾追加 `</think>`（9 评论，👍1）**
   老牌 bug 终于关闭，但复核显示原始路径缺少闭环证据（`qwen-oauth` 入口在任何 provider 请求前即退出）。关闭方式本身引发一定讨论。

6. **[#13111](https://github.com/QwenLM/qwen-code/issues/13111) Android Phase 2 后续：回归覆盖与导出 UX（8 评论）**
   承接 #12127/#12129/#12130 的麦克风、无障碍、下载审查建议，将非阻塞的后续工作从既有 PR 中剥离，属平台分发方向。

7. **[#13533](https://github.com/QwenLM/qwen-code/issues/13533) Managed Agent：后台进程退出观测与捕获背压（7 评论）**
   Stage H3 启用的两个门禁项：Broker 观测非本代启动的后台进程，以及生产者超出捕获能力时的有界行为。是 H3 阶段落地的硬性前置条件。

8. **[#10700](https://github.com/QwenLM/qwen-code/issues/10700) 孤立工具调用闭合标签泄漏为纯文本（6 评论）**
   XML 恢复仅匹配成对的 invoke，导致落单的 `</parameter>` 等标签以纯文本形式出现在回答末尾。与 #13492、#13787 构成同一族问题。

9. **[#13758](https://github.com/QwenLM/qwen-code/issues/13758) OpenTUI 对话框内容溢出区域底边（5 评论）**
   短终端下三个对话框 body 仍会超出区域，手工计算的 chrome 高度存在未测量入口。属渲染层体验问题，由 #12559 跟进而来。

10. **[#2566](https://github.com/QwenLM/qwen-code/issues/2566) 基于上下文压力动态截断工具输出（5 评论）**
    长期需求，配套 PR [#13599](https://github.com/QwenLM/qwen-code/pull/13599) 已推进到新提交，覆盖 1,509 个目标文件验证，是上下文性能优化的关键项。

> 其他值得留意：#13689（子代理定义含 `${identifier}` 时渲染崩溃，已关闭）、#13865（含补充 Unicode 字符时 `@` 文件补全查询损坏）、#13861（Python SDK 无法启动 Windows 的 `qwen.cmd`）、#13820（Live Voice 挂断后永久卡在 "stopping"）。

---

## 四、重要 PR 进展

1. **[#13601](https://github.com/QwenLM/qwen-code/pull/13601) feat(core): 只读探索的收敛提醒**
   当连续的读/搜/取调用达到既有工具调用配额时，插入一条建议性提醒，引导模型使用已收集信息推进交付或说明具体阻塞点。

2. **[#13674](https://github.com/QwenLM/qwen-code/pull/13674) feat(managed-agent): 开放公共前台 Shell 并强制审批**
   默认关闭的部署选项，允许经授权的公共 REST/WebShell 工作区会话使用前台 Shell，新绑定会话持久化 `hosted-workspace-shell/1` 并要求审批模式。

3. **[#13579](https://github.com/QwenLM/qwen-code/pull/13579) fix(core): 恢复含引用内容的外层 XML 调用**
   恢复包含成对引用调用的完整外层工具调用，同时保持引用调用惰性；解决文档化参数掩码与围栏归属冲突。是 #13492 的直接配套。

4. **[#12585](https://github.com/QwenLM/qwen-code/pull/12585) fix(acp): 为会话回放持久化嵌入文本资源**
   将有界的 ACP 嵌入文本 `resource` 块与所属用户提示一起持久化，并在回放时作为类型化用户分块重放，daemon UI SDK 单独暴露这些块。

5. **[#13737](https://github.com/QwenLM/qwen-code/pull/13737) fix(rewind): 按源标识解析历史轮次**
   通过现有 source record 链接可见轮次、模型条目与记录边界，无法解析时在变更前拒绝；避免 Ink 与 ACP 各自独立计数模型文本来猜测回退点。

6. **[#13571](https://github.com/QwenLM/qwen-code/pull/13571) feat(memory): 空操作运行后的可选抽取节奏**
   默认关闭的实验项 `QWEN_CODE_MEMORY_EXTRACT_NOOP_SKIP_TURNS`（0–3），在读取记忆文件但未保存任何内容的抽取运行后跳过多轮，降低无效开销。

7. **[#13852](https://github.com/QwenLM/qwen-code/pull/13852) fix(cli): 让交互式提问可在标准 ACP 主机中应答**
   交互式提问工具此前被投影为权限请求，真实选项仅存在于 Qwen 专有元数据字段中而被合规客户端忽略，此 PR 修复该协议兼容问题。

8. **[#13219](https://github.com/QwenLM/qwen-code/pull/13219) fix(managed-agent): 用终态约束重试循环**
   为托管代理栈中缺乏终态的异步重试循环设定预算与终态，其中一处永久卡死的投影现在能越过不可恢复的序列缺口自愈。

9. **[#13777](https://github.com/QwenLM/qwen-code/pull/13777) feat(managed-agent): 恢复 Hosted G3 停泊轮次**
   实现 Hosted G3 阶段中停泊（parked）轮次的恢复能力，是托管代理可恢复性拼图的一块。

10. **[#13835](https://github.com/QwenLM/qwen-code/pull/13835) fix(cli): 失败后完成 Live 通话停止**
    即使旧通话上下文已失效，也通过排空截止时间与最终转写持久化完成待处理停止；清理仍限于活动通话，避免旧完成关闭新通话。

> 其他活跃 PR：#13278（飞书入站附件生命周期测试）、#13866（`@` 补全保留 Unicode 查询）、#13772（保留 CSI 挂载标识）、#13312（MCP 超时告警命名）、#9305（短内容底部对齐）。

---

## 五、功能需求趋势

从全部 Issues 中可提炼出以下主要方向：

1. **Managed Agent / Hosted Harness 架构（最热）**
   围绕 #12380 的双路径设计，衍生了大量分阶段切片（H0c、H3、H4b、H4f、G3、H5），涉及会话归属、子代理运行时、任务取消、子任务事件流、崩溃恢复等。这是当前项目投入最重的方向。

2. **上下文与 Token 管理 / 性能**
   #2566（动态截断工具输出）、#12333（token 改动的召回门禁）、#13723（发送边界收缩）共同构成"上下文性能"路线，强调不仅要省 token，还要有可量化的效果评测。

3. **工具调用解析与恢复的健壮性**
   #13492、#10700、#13787 集中于 XML 工具调用的恢复正确性与性能，说明模型输出格式的不确定性仍是核心挑战。

4. **平台分发与多端支持**
   Android Phase 2（#13111）、Windows Python SDK（#13861）、RTL/双向文本渲染（#13837）、Web Shell 独立会话（#13679）等，显示多平台、多语言用户群正在扩大。

5. **SDK 生态**
   Python、Java、TypeScript SDK 的问题频出（连接传输、命令启动、托管代理），表明 SDK 正从实验走向生产可用。

---

## 六、开发者关注点

综合反馈，开发者痛点集中在以下几类：

- **工具调用解析边界**：引用内容、孤立闭合标签、大响应性能——同一族问题反复出现，说明解析器需要系统性重构而非逐点打补丁。
- **内部标记泄漏**：#10797 与 #11562 都指向 system-reminder、脚手架标签被回显给用户，影响输出可读性。
- **Unicode / 国际化处理**：#13865 与 #13866 显示 `@` 补全在补充 Unicode 字符（emoji）下会损坏查询；#13837 指出 RTL 与 LTR 混排时渲染错误，且代码块被强制 LTR。
- **跨平台启动问题**：Windows 下 `qwen.cmd` shim 无法被 Python SDK 启动（#13861），是 Windows 用户的直接阻塞。
- **可恢复性（restart-recoverability）**：Harness 崩溃或重启导致轮次卡死（#13857、#13847、#13708、#13709），是托管模式生产化的关键障碍。
- **诊断误报**：LSP 诊断在查询失败时仍报"无问题"（#12467、#13611），会让用户与模型误判代码干净。
- **CI 稳定性**：主分支 CI 失败（#12714）持续存在，影响贡献者体验。
- **性能回退**：内存写入触发 prompt 重复处理（#11550，👍1），是少数获得点赞的性能类反馈。

---

*本日报基于 2026-10-11 抓取的 GitHub 公开数据自动整理，链接均指向 QwenLM/qwen-code 仓库。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报
**日期：2026-10-11** ｜ 数据来源：github.com/Hmbown/DeepSeek-TUI（codewhale-hq/Codewhale）

---

## 一、今日速览

今日无新版本发布，社区活动集中在 **v0.10.2 的收尾与回归修复** 上：一批长期挂起的 bug（Plan 模式交接、goal 步数上限、TUI 终端视图）集中关闭，同时 **runtime/TUI crate 拆分（RS-8/RS-9）** 持续清理边界泄漏。另一方面，过去 24 小时内新提交的 3 个 Issue 暴露了 **Windows 平台兼容性与会话状态迁移** 两类新问题，值得优先关注。

---

## 二、版本发布

过去 24 小时无新 Release。当前社区工作重心明显指向 **v0.10.2** 的发布前清理（多个 Issue 带有 `v0.10.2` 标签并已关闭）。

---

## 三、社区热点 Issues（10 条）

1. **#6953 [OPEN] [bug] Windows 10 1607 上 v0.10.1 无法启动 — `DeriveCapabilitySidsFromName` 加载失败（0xC0000139）**
   从 v0.10.0 升级后应用在加载期即崩溃，属于**阻断级兼容性回归**，影响老版本 Windows 用户。新提交、0 评论，尚未有维护者响应。
   🔗 https://github.com/codewhale-hq/Codewhale/issues/6953

2. **#6955 [OPEN] [needs-triage] 保存的会话文档超过 8 MiB 后无法恢复或 fork，且报错不给出补救方式**
   指出 **journal 是撑大体积的元凶**，并关联 #6842（会话日志无上限）。属于会话可靠性核心问题，直接影响长会话用户。
   🔗 https://github.com/codewhale-hq/Codewhale/issues/6955

3. **#6954 [OPEN] [needs-triage] `codewhale resume` 拒绝任何仍含原始 sub-agent 交接记录的会话**
   根因在 **Engine 恢复消息与保存文档的规范化确认比对** 逻辑不一致，导致合法会话被误判为不可恢复。与 #6955 同源，均指向会话持久化契约。
   🔗 https://github.com/codewhale-hq/Codewhale/issues/6954

4. **#6951 [OPEN] [security] 2026-10-10 安全与依赖扫描**
   夜间安全扫描，但 **CodeQL 告警列表因 `GITHUB_CODEWHALE_SECURITY_PAT` 未配置而无法拉取**，实际处于“未读取”状态。反映出 CI 安全凭据配置存在缺口，bot 自动提交。
   🔗 https://github.com/codewhale-hq/Codewhale/issues/6951

5. **#6912 [CLOSED] [enhancement, tui] TUI：work dock 中的终端视图 — 观察并输入模型的 PTY 会话**
   已在 PR #6907 中落地，附带 shell 检查 17/17、Ctrl+B/steering 流程 2/2 通过。这是本周期**最具用户感知的新功能**之一。
   🔗 https://github.com/codewhale-hq/Codewhale/issues/6912

6. **#6902 [CLOSED] [bug, tui, ux] Plan 模式：恢复计划结束时的“批准并切换”交接**
   该行为自 v0.9.1 起被移除，属**长期回归**，本日关闭。剩余仅文档修正。对使用 Plan 模式的用户是重要体验修复。
   🔗 https://github.com/codewhale-hq/Codewhale/issues/6902

7. **#6512 [CLOSED] [bug, runtime-api] Goal turn 在 1000 步处停止，而普通 turn 无上限；`[goal] max_steps = 0` 并非无限制**
   语义不一致问题，需让 `max_steps` 的 0/None 经 `turn_budget::resolve_max_model_steps` 解析为无上限。已关闭，属配置契约修复。
   🔗 https://github.com/codewhale-hq/Codewhale/issues/6512

8. **#6936 [CLOSED] [cleanup, tui, reliability] Runtime 拆分 RS-9：清除引擎剩余的终端侧泄漏**
   涉及上下文阈值、git 上下文、剪贴板目录、通知投递、本地 ollama 采纳等，受 `module_graph.py --check` 棘轮约束（prod 69 / test 88）。
   🔗 https://github.com/codewhale-hq/Codewhale/issues/6936

9. **#6935 [CLOSED] [cleanup, tui, subagents] Runtime 拆分 RS-8：将 auto-review 与风险策略从 tui/ 迁至 core::authority**
   同属 crate 拆分序列，明确所有权边界，是架构治理类工作的关键一步。
   🔗 https://github.com/codewhale-hq/Codewhale/issues/6935

10. **#6942 [CLOSED] [documentation, v0.10.2] Code 模式：MCP 页面文档仍称默认关闭、只读、无 MCP、30s，需与已上线的默认开启门控对齐**
    典型的**文档-代码漂移**，通过源码审计（`main @ 643b724d9`）逐文件定位。提醒社区文档同步流程需加强。
    🔗 https://github.com/codewhale-hq/Codewhale/issues/6942

> 其余：#5837（Boat Computer 镜像重建，CLOSED）、#5836（Cloud dispatch 退役旧启动器，OPEN）——两者均涉及 Computer 镜像从 Daytona 转向 AWS Lambda microVM 的架构调整，长期跟进中。

---

## 四、重要 PR 进展（10 条）

1. **#6950 [OPEN] feat(plugins)：新增 CLI 安装与内嵌 OAuth 登录**
   在 #6805 引入宿主托管的 OAuth AI 提供商基础上，补齐 **CLI 安装入口与免终端登录流程**，降低插件接入门槛。功能性最强的开放 PR。
   🔗 https://github.com/codewhale-hq/Codewhale/pull/6950

2. **#6952 [OPEN] fix(workflow)：拒绝“阻断自身角色”的 gate**
   修复 `role: implement` 且 `blocks_role: implement` 导致该阶段永远无法通过的**工作流死锁**问题（源自 #6945）。
   🔗 https://github.com/codewhale-hq/Codewhale/pull/6952

3. **#6949 [OPEN] fix(subagent)：状态根被重定位后重新锚定状态路径检查**
   针对 `.codewhale` 为 junction（跨卷存放状态）时 sub-agent 在第 0 步即失败的 Windows 场景，与 #6947 同源。
   🔗 https://github.com/codewhale-hq/Codewhale/pull/6949

4. **#6947 [CLOSED] fix(artifacts)：解析链接式状态根，使重定位的 Codewhale home 继续可用**
   修复 Windows junction 下所有 session-artifact 写入失败、`/compact` 直接报错的问题。**Windows 可用性关键修复**。
   🔗 https://github.com/codewhale-hq/Codewhale/pull/6947

5. **#6948 [CLOSED] fix(tui)：明确告知“阻塞会话切换的具体工作”**
   原先仅提示“运行时工作活跃”而拒绝切换，现改为点名具体阻塞项，提升可操作性。
   🔗 https://github.com/codewhale-hq/Codewhale/pull/6948

6. **#6943 [OPEN] chore(tui)：移除五个模块中的全局 `dead_code` allow**
   #5587 的一个切片，逐个核验 allow 覆盖范围（如 `worker_profile.rs` 为陈旧 allow），属技术债清理。
   🔗 https://github.com/codewhale-hq/Codewhale/pull/6943

7. **#6946 [CLOSED] chore：删除 30 个已无实际作用的 `dead_code` allow**
   通过 `RUSTFLAGS="--force-warn dead_code"` 全量比对，系统性清理陈旧豁免。
   🔗 https://github.com/codewhale-hq/Codewhale/pull/6946

8. **#6821 [OPEN] build(deps)：rmcp 3.4.0 → 3.5.0**
   MCP Rust SDK 升级，含 `rmcp-macros` 修复。与 Code 模式的 MCP 能力直接相关，建议关注合并进展。
   🔗 https://github.com/codewhale-hq/Codewhale/pull/6821

9. **#6826 [CLOSED] chore(deps)：uuid 1.26.0 → 1.27.0**
   含大小写不敏感解析等变更，属常规依赖更新。
   🔗 https://github.com/codewhale-hq/Codewhale/pull/6826

10. **#6824 / #6823 / #6822 / #6825 [CLOSED] dependabot 依赖批量升级**
    包括 `encoding_rs` 0.8.42、`thiserror` 2.0.21（修复泛型单元变体解析）、`rio-vt` 0.5.28（终端 VT 实现，与 TUI 终端视图相关）、`dtolnay/rust-toolchain` 版本固定更新。
    🔗 https://github.com/codewhale-hq/Codewhale/pull/6824 ｜ /6823 ｜ /6822 ｜ /6825

---

## 五、功能需求趋势

从本期 Issue/PR 中可提炼出以下方向：

- **架构治理与 crate 拆分**：RS-8、RS-9 连续推进 runtime/TUI 边界收敛，配合 `module_graph.py` 棘轮约束，是当前最高频的工程主线。
- **TUI 交互增强**：work dock 终端视图（#6912）、Plan 模式批准交接（#6902）、会话切换阻塞提示（#6948）——终端内可视化与可操作性持续加强。
- **IDE / 云端执行环境**：#5837、#5836 显示 Computer 镜像正从 Daytona 转向 **AWS Lambda microVM**，且明确 **VS Code 不在路线图**（IDE 计划仅推进 stage 1）。
- **插件与 MCP 生态**：CLI 安装 + OAuth 登录（#6950）、rmcp 升级（#6821）、Code 模式 MCP 默认开启（#6942），生态接入是明确方向。
- **会话持久化可靠性**：8 MiB 文档上限、sub-agent 交接恢复、journal 无界增长，构成一组集中的可靠性议题。

---

## 六、开发者关注点

1. **Windows 平台兼容性反复出问题**：v0.10.1 在 Win10 1607 启动失败（#6953）、junction 状态目录导致 artifact/subagent 全面失败（#6947/#6949）。跨卷与老系统适配是当前最集中的痛点。
2. **会话恢复的边界条件脆弱**：大文档、sub-agent 交接记录均会导致 `resume` 拒绝，且**错误信息不给补救方式**（#6955、#6954），用户自救困难。
3. **文档与实现漂移**：Code 模式 MCP 行为描述与已上线默认值不一致（#6942），源码审计成为发现手段，说明需建立文档-代码一致性校验。
4. **配置语义不一致**：`max_steps = 0` 被预期为无限制但实际并非如此（#6512），配置契约需更明确。
5. **CI/安全凭据缺口**：安全扫描因 PAT 未配置而无法拉取告警（#6951），自动化质量门存在盲区。
6. **技术债清理节奏加快**：dead_code allow 批量移除（#6943、#6946）显示维护者正在为 v0.10.2 做健康度整顿。

---

*本日报由 AI 技术分析自动生成，数据截至 2026-10-11。*

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

# ComfyUI 社区动态日报 · 2026-10-11

> 数据来源：github.com/comfyanonymous/ComfyUI（统计窗口：过去 24 小时）

---

## 1. 今日速览

今日无新版本发布，社区注意力集中在 **MiniMax H3 的显存/音频解码问题**与 **Windows 安全策略拦截 PyTorch DLL** 两大主线；PR 侧则以 **Dynamic VRAM 下的 FP8 计算回退修复**、**Qwen 3.x LLM 性能加速** 以及 **Assets 资产系统的一揽子改进** 最为关键。

---

## 2. 版本发布

过去 24 小时内 **无新 Release**，略过。

---

## 3. 社区热点 Issues（精选 10 条）

| # | 标题 | 状态 | 重要性 |
|---|------|------|--------|
| 1 | **#15117** WinError 4551 — Windows Application Control 拦截 PyTorch DLL（c10_cuda.dll、shm.dll） | OPEN · 5 评论 | 影响面最大的启动阻塞类问题，与 #16911 形成同一问题的重复报告，说明该故障正在 Windows 用户中扩散。 |
| 2 | **#16911** Windows 11 26H2 Smart App Control 拦截 ComfyUI Python 运行时 DLL | CLOSED · 2 评论 | 同一根因在新系统版本上的复现，被快速关闭，说明官方倾向将其归类为系统策略问题而非 ComfyUI 缺陷。 |
| 3 | **#15799** MiniMax H3：VAEDecodeAudio 恒返回 -1.0 DC 或静音（bf16 / --cpu-vae / cu128 均可复现） | OPEN · 5 评论 | 视频正确但音频全废，且多种后端一致复现，指向音频 VAE 解码逻辑本身，是当前最高价值的 H3 缺陷。 |
| 4 | **#15663** MiniMax H3：短视频显存预算低估，OOM 后在同一图结构上跨重启持续 | OPEN | 暴露 VRAM 估算器与缓存策略的耦合缺陷，"重启不复现、微调即恢复"的现象对排查极具参考价值。 |
| 5 | **#16946** [RTX 3060 12GB] MiniMax-H3 反复冻结整机，NVFP4 encoder/offload 日志戛然而止 | OPEN · 新提交 | 非 OOM 的整机死锁，属于最高严重级别，12GB 主流卡用户需重点关注。 |
| 6 | **#16947** Qwen Image 2.1 下 `model_animate2.py` 的 `select()` 抛出 Tensor 布尔歧义 RuntimeError | OPEN · 新提交 | 新模型路径上的直接崩溃，重复生成即可触发，定位清晰。 |
| 7 | **#16944** Qwen Image 2.1：融合 `img_mlp.gate_up` 布局的 LoRA 在非融合 checkpoint 上静默跳过 96 个 key | CLOSED · 1 评论 | 典型的"静默错误"——不报错但效果异常，对 LoRA 生态影响大，已关闭说明有处理结论。 |
| 8 | **#16551** Dynamic VRAM 阻止 `fp8_e4m3fn_fast` 的原生 FP8 计算（Flux dev 上 1.07 vs 1.72 it/s） | OPEN · 1 评论 | 性能回归类问题，已有对应修复 PR #16941，是本期最值得追踪的一条。 |
| 9 | **#15993** [Windows ROCm 多卡][DynamicVRAM] 模型完全卸载后 ModelVBAR 预留残留，私有内存平台期约 38GB | CLOSED · 👍1 | 唯一获得点赞的 Issue，说明多卡 ROCm 用户的共鸣度较高。 |
| 10 | **#16939** [Feature] 持久化模型 RAM 缓存 + 异步预取的 VRAM/RAM 协同换入换出 | OPEN · 新提交 | 面向小显存+大内存机器的系统性提案，代表社区对内存调度的长期诉求。 |

**其他值得留意**：#16838（qwen2.1/minimax h3 更新后崩溃，4 评论）、#16924（anima 使用 hooks 崩溃）、#16925（KSampler 无法运行）、#13413（Turing 卡 Ernie-image fp16 hack，已关闭）、#14519（GB10 统一内存下多工作流预热丢失模型驻留，已关闭）、#16028（Trellis2 无法运行，已关闭）、#15967（Mac M3 Max 跑 MiniMax H3，已关闭）。

---

## 4. 重要 PR 进展（精选 10 条）

1. **#16941** — 修复 Dynamic VRAM 下 `fp8_e4m3fn_fast` 回退到 bf16 计算（对应 #16551）
   根因是权重检查时仍处于文件 dtype，FP8 目标类型只记录在 `_model_dtype`，导致 matmul 走错分支。直接恢复 FP8 推理性能。
   https://github.com/Comfy-Org/ComfyUI/pull/16941

2. **#16940** — Qwen 3.x LLM 性能改进（第 1 部分）
   引入融合量化+残差的 INT8 GEMV、流式优化等，是 Qwen 3.x 系列加速的开篇，配套 comfy-kitchen PR #239。
   https://github.com/Comfy-Org/ComfyUI/pull/16940

3. **#16206** — 修复量化模型上 hook 打补丁崩溃（fixes #16164）
   `patch_hooks()` 遍历完整 state_dict 时遇到 `QuantizedTensor` 附属项（`*.weight_scale`、`*.comfy_quant` 等）导致异常。对量化 + hooks 组合场景至关重要。
   https://github.com/Comfy-Org/ComfyUI/pull/16206

4. **#15533** — model_patcher：同步并释放已 offload 的 Hook 权重
   保持普通权重 Hook 委托的同步传输，并在 DynamicVRAM 下释放保留的 Hook 模型，直指显存泄漏。
   https://github.com/Comfy-Org/ComfyUI/pull/15533

5. **#16745** — 修复 Lens attention 在 offloaded sinks 参数上的崩溃
   针对 RX 9060 XT / ROCm 7.2 环境下从休眠恢复后报错的场景。
   https://github.com/Comfy-Org/ComfyUI/pull/16745

6. **#16949** — 修复 pyav 加载 half float 文件的问题（comfyanonymous 提交，已合并关闭）
   https://github.com/Comfy-Org/ComfyUI/pull/16949

7. **#16948** — 为保存的 EXR 启用压缩（comfyanonymous 提交，已合并关闭）
   https://github.com/Comfy-Org/ComfyUI/pull/16948

8. **#16943** — API 节点 partner-node 登录令牌续期
   解决队列等待或长任务轮询时 90 分钟令牌过期导致 `Unauthorized` 的问题（BE-998），避免 provider 任务已计费却失败。
   https://github.com/Comfy-Org/ComfyUI/pull/16943

9. **#16945** — 修复 AMD 便携版 `offload-arch.exe` 启动器路径
   打包时残留了 CI 构建期的 Python 路径，改为相对自身目录定位内嵌 Python。
   https://github.com/Comfy-Org/ComfyUI/pull/16945

10. **#16805** — 重构 3D 模型重网格化（CORE-560，kijai）
    对全流形网格引入 `sign_mode = solid`，基于 Delaunay 四面体化的全局内外图切割决定符号，显著提升重网格质量。
    https://github.com/Comfy-Org/ComfyUI/pull/16805

**Assets 系统专题**（synap5e 系列，集中更新，值得整体关注）：
- **#16942** 所有预览统一走 `/api/assets/{id}/content`，视频支持字节范围请求
- **#16931** 数据库版本高于当前 ComfyUI 时不再拒绝启动，改为只读检测并告警
- **#16936** 启动扫描先编目 models 再处理其他 root，避免模型库长时间空白
- **#16935** `/view` 响应引入 ETag 重校验，未变更文件返回 304
- **#16898** 为 EXR 资产生成预览（JPEG / 带 alpha 的 WebP）

其他：#16867（GLB 纹理改用 PNG 压缩级别 4，节省约 60% 保存时间，已关闭）、#16937（新增独立 ComfyUI 音乐应用，基于 ACE-Step 1.5）、#16938（MPS 上 RemeshMesh 改用 int32 标签，规避 int64 amin 未实现）、#16770（资产扫描器统一目录遍历器）、#16368（从 cloud 同步 OpenAPI 契约）。

---

## 5. 功能需求趋势

从全部 Issues 与 PR 中可提炼出以下社区关注方向：

1. **新一代视频/音频大模型支持（MiniMax H3 为绝对焦点）**
   至少 5 条 Issue 直接围绕 H3：音频解码失败、显存低估、整机冻结、Mac 平台不可用。视频模型的音频轨道已成为与画面同等重要的验收标准。

2. **显存/内存调度体系化（Dynamic VRAM 为核心）**
   从"OOM 修复"升级为"内存架构提案"：#16939 提出持久化 RAM 缓存 + 异步预取，#15993、#15533、#16551 分别指向预留残留、offload 释放与 FP8 回退。这是当前 PR 密度最高的技术域。

3. **Qwen 生态（Image 2.1 / Qwen 3.x LLM）**
   LoRA 加载静默跳过 key、`select()` 崩溃、LLM 推理加速三线并进，说明 Qwen 系模型在 ComfyUI 中的使用率正在快速攀升。

4. **量化与低精度推理（FP8 / NVFP4 / INT8）**
   `fp8_e4m3fn_fast` 原生计算、INT8 GEMV 融合、量化模型 hooks 兼容，社区既追求速度也要求正确性。

5. **跨平台兼容性（Windows / ROCm / MPS / 统一内存）**
   Windows Smart App Control、AMD 便携版启动路径、MPS int64 缺失、GB10 统一内存预热——非 NVIDIA CUDA 路径的诉求显著增加。

6. **资产与预览基础设施**
   Assets 系统正在成型：统一预览 URL、EXR 预览、ETag 缓存、启动扫描顺序优化，指向更工程化的媒体管理。

7. **可观测性**
   #16887 指出 `progress_text` 是唯一无法被 `workflow_metadata` 归属的执行帧，反映社区对工作流追踪完整性的要求。

8. **输出元数据可控性**
   #16932 请求在 Save Video / Save Image Advanced 中关闭 prompt 嵌入，属于隐私与文件体积层面的实用需求。

---

## 6. 开发者关注点

综合反馈，开发者当前的核心痛点集中在以下几处：

- **Windows 安全策略与 PyTorch DLL 的冲突（最高优先级）**
  #15117 与 #16911 描述同一现象：Smart App Control / Application Control 阻止 `c10_cuda.dll`、`shm.dll` 加载，报 WinError 4551。这类问题在 ComfyUI 侧难以根治，需要官方给出明确的文档指引或签名方案，否则将持续产生重复 Issue。

- **Dynamic VRAM 的"修复引发回归"循环**
  FP8 回退（#16551）、VBAR 预留残留（#15993）、Hook 权重不释放（#15533）都指向同一套内存机制。社区明显期待一次系统性的重构，而非逐点补丁——#16939 的提案正是这种情绪的产物。

- **MiniMax H3 的稳定性缺口**
  音频恒为 DC 值、显存估算偏乐观、12GB 卡整机冻结，三者叠加使 H3 在中低端硬件上基本不可用。这是当前最影响用户体验的模型侧问题。

- **静默错误比崩溃更危险**
  #16944 的 LoRA 静默跳过 96 个 key 是典型案例：不报错、不中断，只让结果变差。开发者普遍呼吁对 key 不匹配、dtype 回退等情形增加显式警告。

- **量化 + 高级特性（hooks / LoRA / offload）的组合脆弱**
  #16206、#16924 显示，量化模型与 hook 机制、anima 等新模型的组合仍在崩溃边缘，测试覆盖需要补齐。

- **非 CUDA 路径的长期欠账**
  ROCm 多卡、AMD 便携版、MPS、DGX Spark 统一内存等问题反复出现且修复周期长（#14519 从 6 月挂到 10 月才关闭），开发者希望官方将跨平台验证纳入 CI。

---

*本期报告由 GitHub 公开数据整理，所有链接指向 Comfy-Org/ComfyUI 仓库。*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama 社区动态日报 · 2026-10-11

---

## 1. 今日速览

今日无新版本发布，社区讨论集中在 **v0.40.x 系列的质量问题**：Qwen 系列（3.8 / 3.5 / 3）的工具调用与 thinking 行为异常成为最大痛点，`#17778` 单日评论达 50 条、👍30，是当前热度最高的 Issue。PR 侧则呈现明显的 **工具调用（tool calling）修复潮**——Qwen3.5、Cogito、Olmo3、GLM-OCR 多个解析器/渲染器问题被集中修复，同时 llama.cpp 后端跟进更新至 b11521 以支持决策模型与 EmbeddingGemma 2。

---

## 2. 版本发布

过去 24 小时无新 Release。

---

## 3. 社区热点 Issues（精选 10）

| # | Issue | 状态 | 关注度 | 为什么重要 |
|---|-------|------|--------|-----------|
| 1 | **#17778** Qwen3.8 查询报错：`no user query found in messages` (500) | OPEN | 💬50 👍30 | 今日最热。Python API 流式对话 + 工具循环调用时直接 500，20 万上下文场景复现。属于工具调用链路的严重阻断性问题，社区讨论热烈。 [链接](https://github.com/ollama/ollama/issues/17778) |
| 2 | **#18796** 第二次 `ollama run` 卡死无输出 | OPEN | 💬15 | Raspberry Pi 5 + Debian 13 环境下 systemd 服务复现，首次运行正常、后续运行挂起。影响边缘设备长期部署，属于稳定性硬伤。 [链接](https://github.com/ollama/ollama/issues/18796) |
| 3 | **#14601** Qwen3 通过 `/api/chat tools` 传参时工具定义畸形 | OPEN | 💬6 👍2 | 通过 `tools` 参数传入时提示词构造出错，而内嵌 system prompt 则正常——暴露参数化工具调用路径与内嵌路径行为不一致的深层问题。 [链接](https://github.com/ollama/ollama/issues/14601) |
| 4 | **#18830** 兼容 GGUF 迁移后模型重复注册 + 伪造 `llamacpp:<sha>` 标签 | OPEN | 💬4 | Ollama 0.40.0 新引擎迁移后 `ollama list` / `/api/tags` 出现重复模型与伪标签，影响 macOS + embeddinggemma。属于新引擎迁移的回归问题。 [链接](https://github.com/ollama/ollama/issues/18830) |
| 5 | **#17380** CUDA warmup 间歇性 `shared object initialization failed`，静默回退 CPU | OPEN | 💬4 | Windows + RTX 5070 Ti + gpt-oss:20b 场景，GPU 初始化失败后静默降级到 CPU，用户难以察觉。涉及新硬件（Blackwell）兼容性。 [链接](https://github.com/ollama/ollama/issues/17380) |
| 6 | **#1599** 删除部分下载的模型（今日被 CLOSED） | CLOSED | 💬11 👍13 | 2023 年的老 Issue 终于关闭。用户误启 118GB 下载后无法单独删除 blob，只能下完再删——资源管理体验的经典诉求。 [链接](https://github.com/ollama/ollama/issues/1599) |
| 7 | **#18916** Qwen3.5 4B 长对话仅返回 thinking、无正文 | OPEN | 💬2 | 0.40.2 + `num_ctx:65536` 下返回 `done:true` 却只有 thinking、无 content/工具调用。与 #17778、#14601 共同指向 Qwen3.x 系列的输出/思考控制缺陷。 [链接](https://github.com/ollama/ollama/issues/18916) |
| 8 | **#18712** Windows 自动更新致 `ggml-cuda.dll` 变 `.tmp`，显存归零回退 CPU | OPEN | 💬2 | 自动更新中断导致 CUDA 后端 DLL 缺失，用户 GPU 突然"消失"。更新机制的原子性问题，影响面广。 [链接](https://github.com/ollama/ollama/issues/18712) |
| 9 | **#18921** Windows 下模型路径为 NTFS 挂载点时 `ollama list` 返回空 | OPEN | 💬0 | 0.40.2 新报告，所有已存模型"消失"。挂载点路径处理缺陷，对使用外接/映射盘的用户是致命体验问题。 [链接](https://github.com/ollama/ollama/issues/18921) |
| 10 | **#18922** 提议为 llama.cpp 兼容层增加 KailA (`kail`) 架构支持 | OPEN | 💬1 | 社区首次请求支持 KailA 架构，因 `general.architecture = kail` 无法解析而加载失败。反映新模型生态接入需求。 [链接](https://github.com/ollama/ollama/issues/18922) |

> 其余值得留意：**#18898** Gemma4:12b 报 `ctx_other` 未设置、**#18924** rnj-1 触发 `is_swa_any()` 断言失败、**#18858** Clef-flash 运行报错——均为新模型加载/兼容性问题。

---

## 4. 重要 PR 进展（精选 10）

| # | PR | 内容 |
|---|----|------|
| 1 | **#18917** llama: 更新 llama.cpp 至 b11521 | 由 jmorganca 提交，为决策模型（decision models）与 EmbeddingGemma 2 提供后端支持，是本次唯一的核心引擎级更新。 [链接](https://github.com/ollama/ollama/pull/18917) |
| 2 | **#18911** openai: 在 Responses 历史中接受自定义工具调用 | 修复包含 `custom_tool_call` / `custom_tool_call_output` 的对话续写返回 400 的问题，复用现有 function-call 路径并保留 call ID 与命名空间。 [链接](https://github.com/ollama/ollama/pull/18911) |
| 3 | **#18872** model/parsers: 空尾块时刷新 Qwen3.5 工具解析器 | 修复流式结束时仅带 `done` 的空块未触发 flush，导致尾部工具调用文本丢失。直接对应 #18916 类问题。 [链接](https://github.com/ollama/ollama/pull/18872) |
| 4 | **#18759** model/parsers: 保留被截断的 Cogito 工具调用标签 | 修复跨 chunk 的 `tool-calls` 开标签被当作正文输出、导致合法工具调用退化为纯文本。 [链接](https://github.com/ollama/ollama/pull/18759) |
| 5 | **#18906** model/parsers: 保留 Olmo3 工具参数中的 Unicode | 修复 `splitArguments` 按 rune 起始偏移却只拷贝单字节导致非 ASCII（如 `Zürich, 日本 🌦️`）损坏的问题，改为逐字节遍历。 [链接](https://github.com/ollama/ollama/pull/18906) |
| 6 | **#18913** openai: 接受参数为空的工具调用 | 修复回放历史中 `function.arguments` 为空字符串时整个请求被 400 拒绝的问题，提升 OpenAI 兼容健壮性。 [链接](https://github.com/ollama/ollama/pull/18913) |
| 7 | **#18914** openai: 对齐 `/v1/completions` 流式线格式 | 修复流式响应 `created` 字段逐块变化等与 `api.openai.com` 不一致的问题，与已修复的 chat writer（#17485）保持一致。 [链接](https://github.com/ollama/ollama/pull/18914) |
| 8 | **#18918** model/renderers: glm-ocr 关闭思考时不再注入 `/nothink` | 修复 `ResolveThinking` 默认填 `false` 被误判为显式请求，导致表格识别退化的问题。 [链接](https://github.com/ollama/ollama/pull/18918) |
| 9 | **#18923** discover: runner 输出为空时回退原生探测 | 当 `llama-server --list-devices` 成功但无可解析设备行时，使用已采集的 GGML 原生探测结果作为保守回退，修复 #18704。 [链接](https://github.com/ollama/ollama/pull/18923) |
| 10 | **#18915** types/model: 显示名省略默认 `:latest` 标签 | `/api/tags`、`ollama list`、`/v1/models` 等展示 `llama3.1` 而非 `llama3.1:latest`，解析逻辑不变，属体验优化。 [链接](https://github.com/ollama/ollama/pull/18915) |

> 其他动态：**#18920** 保留 Pi 配置的 thinking 控制项、**#18919** 新增 macOS 集成 AtAt、**#18912** 新增观测工具 Vessel、**#18828** 文档重构（Local/Cloud 分栏）。

---

## 5. 功能需求趋势

从今日 Issues 与 PR 可提炼出四条主线：

1. **工具调用（Tool Calling）稳定性是绝对核心**
   超过半数的高优先级问题围绕工具调用：Qwen3/Qwen3.5 的畸形定义（#14601）、流式结束丢尾部调用（#18872）、Cogito 标签截断（#18759）、Olmo3 Unicode 损坏（#18906）、空参数被拒（#18913）。社区正系统性补齐各模型解析器的健壮性。

2. **新模型 / 新架构接入需求上升**
   KailA（#18922）、Gemma4（#18898）、rnj-1（#18924）、Clef-flash（#18858）等加载失败集中出现，叠加 PR #18917 更新 llama.cpp，反映 Ollama 需持续跟进上游模型生态。

3. **Windows / 边缘设备平台的稳定性**
   Windows 自动更新破坏 CUDA DLL（#18712）、NTFS 挂载点致模型列表为空（#18921）、Raspberry Pi 5 二次运行卡死（#18796），平台特有问题占据相当比例。

4. **资源与模型管理体验**
   部分下载模型无法单独删除（#1599）、兼容迁移后模型重复注册（#18830）、显示名去 `:latest`（#18915），指向用户对模型生命周期管理的精细化诉求。

---

## 6. 开发者关注点

- **thinking / 推理输出的可控性**：Qwen3.x 系列频繁出现"只返回 thinking、无正文"或思考开关失效（#17778、#18916、#14601），`/nothink` 注入逻辑也出问题（#18918）。开发者强烈需要明确、一致的思考控制语义。
- **静默降级难以排查**：CUDA 初始化失败静默回退 CPU（#17380、#18712），用户往往在性能骤降后才发现。建议增加显式告警。
- **参数化路径 vs 内嵌路径行为不一致**：`tools` 参数传入与 system prompt 内嵌结果不同（#14601），这类"同一功能两种表现"最易造成困惑。
- **升级/迁移的回归风险**：新引擎 GGUF 迁移（#18830）与自动更新（#18712）均引入回归，开发者关注升级的原子性与可回滚性。
- **OpenAI 兼容层的一致性**：多条 PR（#18911、#18913、#18914）持续对齐官方 wire format，说明第三方客户端兼容性是高频诉求。

---

*数据来源：github.com/ollama/ollama｜报告日期：2026-10-11*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

# llama.cpp 社区动态日报（2026-10-11）

数据来源：[github.com/ggerganov/llama.cpp](https://github.com/ggml-org/llama.cpp)

---

## 1. 今日速览

今天社区节奏集中在**服务端调度正确性**与**多后端 MoE 量化加速**两条主线：`b11552` 修复了忙槽位被请求 pin 住时仍被缓存覆盖的隐患，`b11541`/`b11540` 分别在 OpenCL 与 SYCL 后端推进 MoE 量化内核优化。同时 **MiniCPM-V 4.7** 正式合入主干，社区对新模型支持与投机解码（MTP）稳定性的讨论持续升温。

---

## 2. 版本发布

| 版本 | 内容 |
|---|---|
| **b11552** | `server`：当请求 pin 住一个忙碌的 `id_slot` 时，不再对该槽位执行 prompt cache 更新，避免在另一请求仍在生成时被 RAM cache 覆盖上下文（[PR #30295](https://github.com/ggml-org/llama.cpp/pull/30295)） |
| **b11551** | `model`：新增 **MiniCPM-V 4.7** 支持，复用 4.6 路径并扩展 3D RoPE，允许 mrope time 来自额外位置槽（[PR #29416](https://github.com/ggml-org/llama.cpp/pull/29416)） |
| **b11550** | `cmake(s390x)`：对不支持的编译器禁用 z17 目标（[PR #30297](https://github.com/ggml-org/llama.cpp/pull/30297)） |
| **b11541** | `opencl`：新增 `kernel_gemm_moe_q4_k_q8_1_dp4a_bin`、`kernel_gemm_moe_q6_k_q8_1_dp4a_bin` 内核（[PR #30187](https://github.com/ggml-org/llama.cpp/pull/30187)） |
| **b11540** | `sycl`：通过算术解码与权重重排加速 **MXFP4 MoE**（[PR #29809](https://github.com/ggml-org/llama.cpp/pull/29809)） |
| **b11539** | `vendor`：应用来自上游的深层嵌套 JSON 补丁（[PR #30253](https://github.com/ggml-org/llama.cpp/pull/30253)） |

> 发布渠道同步提供 llama.app 官网、构建 Attestations 以及 macOS Apple Silicon (arm64) 等平台产物。

---

## 3. 社区热点 Issues

1. **[#9291] `llama-server` REST API changelog**（OPEN，21 评论 / 👍20）
   由 ggerganov 维护的公开 HTTP 接口变更清单，是第三方项目对接 `llama-server` 的权威参考。热度最高，说明**API 稳定性与文档追踪**是生态核心诉求。
   https://github.com/ggml-org/llama.cpp/issues/9291

2. **[#29811] Qwen3.8-Flash + MTP 启动即 Assert 崩溃**（OPEN，20 评论）
   使用 `--spec-type draft-mtp` 加载 Qwen3.8-Flash 时启动断言失败，涉及 MTP 草稿模型加载路径，是当前投机解码最受关注的阻塞问题。
   https://github.com/ggml-org/llama.cpp/issues/29811

3. **[#20515] AMD Vulkan `vk::DeviceLostError` 崩溃**（CLOSED/stale，19 评论 / 👍5）
   对 ubatch-size 与上下文长度敏感的 Vulkan 设备丢失问题，虽然标记 stale，但仍有持续讨论，反映 RDNA 平台稳定性仍需关注。
   https://github.com/ggml-org/llama.cpp/issues/20515

4. **[#9289] `libllama` API changelog**（OPEN，14 评论 / 👍9）
   与 #9291 并列的库级接口变更清单，是 C/C++ 集成方的必读项。
   https://github.com/ggml-org/llama.cpp/issues/9289

5. **[#23210] llama-server 在 CUDA 上运行 Qwen3.6-27B 崩溃**（CLOSED/stale，14 评论 / 👍5）
   双 RTX 5060 Ti + Windows CUDA 环境下的服务端崩溃，属于典型的消费级多卡场景问题。
   https://github.com/ggml-org/llama.cpp/issues/23210

6. **[#29022] 特性请求：通过 Prefill Logit Slicing 实现快速工具门控**（OPEN，12 评论 / 👍3）
   提出单次前向即可完成工具选择的方案，直击 **Agent/工具调用延迟**痛点，方向性很强。
   https://github.com/ggml-org/llama.cpp/issues/29022

7. **[#24795] gemma4-assistant MTP 草稿模型加载失败（回归）**（CLOSED/stale，12 评论 / 👍12）
   从 b9553 正常、b9702/b9717 损坏的明确回归，👍 数高说明影响面广，是 MTP 稳定性系列问题之一。
   https://github.com/ggml-org/llama.cpp/issues/24795

8. **[#30091] llama-server 长对话中 "bad allocation" 崩溃**（OPEN，9 评论）
   HIP / Radeon RX 9070 环境下长时间对话触发内存分配失败，指向**长上下文内存管理**问题。
   https://github.com/ggml-org/llama.cpp/issues/30091

9. **[#30039] Vulkan RDNA1 提示处理性能回归约 45%**（OPEN，5 评论）
   b10455 → b11429 之间在 gfx1010 上 PP 性能腰斩、TG 不变，是**量化性能回归**的典型报告，对老卡用户影响明显。
   https://github.com/ggml-org/llama.cpp/issues/30039

10. **[#27148] RAM prompt cache 串话：新会话被灌入无关历史**（OPEN，4 评论）
    与今日 `b11552` 修复同源的 `server_prompt_cache` / `--cache-idle-slots` 并发缺陷，是服务端正确性的关键议题。
    https://github.com/ggml-org/llama.cpp/issues/27148

> 其他值得留意：#27763（Qwen3.8-Flash-Next 在 SM110/Jetson Thor 上 >8 层 GPU 卸载输出乱码）、#27155（DeepSeek V4 Flash + DSpark 每轮 PP+TG 泄漏约 10MB VRAM）、#26300（Apertus 模型支持请求）。

---

## 4. 重要 PR 进展

1. **[#30311] 守护递归状态回滚不超过最新 ubatch 快照**（OPEN）
   通过在 `mem_cell` 中记录快照数量限制回滚深度，承接 #29923，提升 SSM/递归模型状态一致性。
   https://github.com/ggml-org/llama.cpp/pull/30311

2. **[#30295] 忙槽位被 pin 时保持不动**（CLOSED，已入 b11552）
   修复 RAM cache 覆盖正在生成槽位的问题，直接回应 #27148 类并发串话。
   https://github.com/ggml-org/llama.cpp/pull/30295

3. **[#30283] Vulkan：coopmat1 int8 matmul 中 A 预取钳制到 end_k**（OPEN）
   修复 K 非 BK*BK_STEP 整数倍时的越界读取，对应 issue #29342。
   https://github.com/ggml-org/llama.cpp/pull/30283

4. **[#30266] OpenCL：改进 FA，为 gemma-4 支持 dk512**（OPEN，merge ready）
   让 gemma-4 在开启 FA 时不再回退 CPU，同时优化 gpt-oss-20b 的 dk64。
   https://github.com/ggml-org/llama.cpp/pull/30266

5. **[#30310] OpenCL：修复 q4_k dense bin / q4_0 bcast / rms_norm 的图像尺寸限制**（OPEN）
   权重超过 image 维度上限时自动回退，避免内核崩溃。
   https://github.com/ggml-org/llama.cpp/pull/30310

6. **[#29533] Vulkan：matmul 调度超过 maxComputeWorkGroupCount 时拆分**（OPEN）
   修复小 m、超大 n 场景下 tile 选择导致的工作组数越界断言。
   https://github.com/ggml-org/llama.cpp/pull/29533

7. **[#27196] server：为投机解码支持 logprobs**（OPEN）
   恢复在启用 speculative decoding 后失效的 `/completion` logprobs 输出，Agent 场景实用性强。
   https://github.com/ggml-org/llama.cpp/pull/27196

8. **[#26771] CUDA：内存池 flush 后重新捕获 graph**（OPEN）
   避免图重放时写入陈旧指针导致 page fault，修复 #26738。
   https://github.com/ggml-org/llama.cpp/pull/26771

9. **[#15550] quantize：自动选择最优量化组合以命中目标体积/bpw**（OPEN）
   新增 `--target-size` / `--target-bpw`，通过约束优化在最低误差下达成目标，量化工作流的重要增强。
   https://github.com/ggml-org/llama.cpp/pull/15550

10. **[#30306] NVIDIA Nemotron Dory1.0-4B 支持**（OPEN，另见 [#25342] GigaChat 3.5、[#29600] Prism Bonsai 2）
    面向 latent-recurrent / looped 架构与 432B MoE 等新模型的适配工作持续推进。
    https://github.com/ggml-org/llama.cpp/pull/30306

---

## 5. 功能需求趋势

- **新模型支持（最活跃）**：MiniCPM-V 4.7（已合入）、GigaChat 3.5（432B MoE）、NVIDIA Dory1.0、Apertus、Prism Bonsai 2、Qwen3.8-Flash-Next 等，模型适配 PR 数量占比最高。
- **多后端量化与 MoE 加速**：OpenCL、SYCL、Vulkan、CUDA 均有针对 MoE 与低比特量化（MXFP4、Q4_K/Q6_K、int8 coopmat）的内核优化与修复。
- **投机解码 / MTP 稳定性**：草稿模型加载、FA 头维度不匹配、VRAM 泄漏、logprobs 兼容等，是当前最集中的问题簇。
- **服务端并发与缓存语义**：槽位 pin、RAM prompt cache 串话、长对话内存分配，反映多用户部署场景需求上升。
- **工具调用与结构化输出**：Prefill logit slicing 工具门控、lazy grammar 性能、`tool_choice` 强制、json_schema 与 thinking 通道冲突。
- **性能回归治理**：RDNA1 PP 回归、编译内存增长等，说明用户对版本间性能一致性的要求提高。

---

## 6. 开发者关注点

1. **投机解码（MTP/DSpark）是当前最大的痛点源**：启动断言、草稿加载回归、FA 崩溃、VRAM 逐轮泄漏，问题跨越 CUDA / SYCL / HIP 多后端。
2. **后端回归难以定位**：多个 Issue 以“某 build 正常、某 build 损坏”形式报告（如 b9553 vs b9702、b10455 vs b11429），开发者需要更可靠的 bisect 与回归测试覆盖。
3. **长上下文内存管理**：`bad allocation`、compute buffer 过度预留、编译期 RAM 峰值上升，均指向内存策略需要系统性优化。
4. **服务端并发正确性**：prompt cache 跨会话污染与忙槽位覆盖被反复报告，今日修复是积极信号，但并发语义仍需更多测试。
5. **API 变更追踪依赖社区清单**：`llama-server` 与 `libllama` 的 changelog Issue 长期高热度，说明第三方集成方对稳定接口契约的需求强烈。
6. **测试基础设施待加强**：`test-backend-ops` 在类型缺失/不支持时静默“0/0 PASS”退出，已有 PR #30279 修正，反映 CI 可信度受到关注。

---

*本日报基于给定 GitHub 数据整理，链接均指向 ggml-org/llama.cpp 仓库。*

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*