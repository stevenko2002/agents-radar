# AI CLI 工具社区动态日报 2026-10-12

> 生成时间: 2026-10-11 22:15 UTC | 覆盖工具: 12 个

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



## 今日重点

1. **OpenCode v1.19.0 发布** — 新增 `opencode upgrade --major` 一键升级至 OpenCode 2，放行 OpenAI `ultrafast` 服务层级，修复 PTY 连接来源校验安全问题。  
   https://github.com/anomalyco/opencode/releases

2. **Qwen Code v0.25.1 发布** — 修复 Android Activity 重建后会话路由恢复与 managed-agent 连接器稳定性；同日发布 TypeScript SDK v0.1.19 与 Desktop v0.25.1。  
   https://github.com/QwenLM/qwen-code/releases

3. **Ollama v0.40.3 发布** — `ollama launch claude` 不再提示 connectors 警告，`ollama launch codex` 不再提示 service tiers 警告。  
   https://github.com/ollama/ollama/releases

4. **llama.cpp 连续发布 7 个构建（b11553–b11559）** — 包含 OpenCL Gemma-4 dk512 支持、Q4_K 内核 image 上限修复、RPC 调试分级日志、Prism Bonsai 2 27B 运行时支持、AVX2 F16C 编译修复、Vulkan mul_mat_id 重复 ID 处理优化等。  
   https://github.com/ggml-org/llama.cpp/releases/tag/b11559

5. **Gemini CLI 多条性能与安全 PR 合并** — 快照 ID 查找从 291.95ms 降至 10.26ms，转录索引从 414.20ms 降至 17.91ms，聊天压缩历史重建从 18.97ms 降至 5.01ms；同时修复 Windows `shell: true` 命令注入漏洞（#29510）。  
   https://github.com/google-gemini/gemini-cli/pull/29515

6. **DeepSeek TUI v0.10.2 就绪分支创建** — PR #6957 开始收敛 0.10.1 回归问题（Windows 启动崩溃、ChatGPT 登录 400、后台任务不可见）；同日修复 workflow 门自死锁（#6952）与 ChatGPT OAuth 多余参数（#6925）。  
   https://github.com/codewhale-hq/Codewhale/pull/6957

7. **Claude Code 安全分类器误判集中爆发** — 多条 Issue 反映合法安全审计、代码混淆请求被模型拒绝且 cyber verification 失效，涉及 Opus 5.5、Sonnet 5.5 等多模型，用户明确表示考虑转向竞品（#99497）。  
   https://github.com/anthropics/claude-code/issues/99497

8. **OpenAI Codex Windows sandbox 回归** — v26.1002.51308 上 sandbox 校验触发 sharing violation，所有命令执行前报 `helper_unknown_error`，截至今日已有 122 条评论；社区给出回滚至 v26.930.7945.0 的验证方案（#51668）。  
   https://github.com/openai/codex/issues/51601

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills 社区热点报告
**数据截止：2026-10-12 | 数据来源：anthropics/skills**

> ⚠️ 数据说明：PR 评论数字段在当前数据快照中均显示为 `undefined`，因此以下「热门排行」综合 PR 在列表中的排序位置、最后更新时间及内容影响力进行评估。

---

## 一、热门 Skills 排行

### 1. `skill-creator` 安全加固（PR #1961）
- **作者**：Joncik91 | **状态**：OPEN | **更新**：2026-10-11
- **功能**：为 `skill-creator` 的 eval viewer（`generate_review.py` + `viewer.html`）提供三层安全加固：防止脚本 breakout（JSON 数据嵌入）、防御 DNS rebinding、阻止跨站 POST 写操作。
- **社区热点**：属于对核心开发工具链的安全审计响应，与 Issue #1394（XSS 漏洞）形成闭环，是当前社区安全意识提升的标志性 PR。

### 2. `mcp-builder` 兼容性修复（PR #1742）
- **作者**：Kuldeeep18 | **状态**：OPEN | **更新**：2026-10-08
- **功能**：修复 `mcp>=2.0.0` 中 `streamablehttp_client` → `streamable_http_client` 的重命名问题，以及自定义 HTTP headers 的配置方式变更。修复 Issue #1668。
- **社区热点**：MCP 生态是 Claude Code 扩展能力的核心，版本升级导致的 breaking change 备受关注，该 PR 直接影响 MCP Skill 的可用性。

### 3. `proofcore-contract-auditor`（PR #1771）
- **作者**：ProofCore-Protocol | **状态**：OPEN | **更新**：2026-09-16
- **功能**：面向 Web3 开发者的智能合约审计 Skill，对 Solidity/Rust 合约进行静态分析，并将加密审计证明锚定到 TON 公链。
- **社区热点**：Web3 + AI Agent 的交叉领域，社区对「去中心化验证」方向的关注度持续走高。

### 4. `md2video-audio`（PR #1703）
- **作者**：70v-Yoyo | **状态**：OPEN | **更新**：2026-09-15
- **功能**：零成本将 Markdown 文档编译为带真人级语音旁白的 MP4 视频（基于 Marp 幻灯片 + TTS）。
- **社区热点**：「文档→视频」的自动化内容生产方向，切中知识付费和内容运营的强需求。

### 5. `notion-spec-to-implementation` + `quantitative-resume-auditor`（PR #1245）
- **作者**：mrdesouzaphd-cmyk | **状态**：OPEN | **更新**：2026-09-30
- **功能**：① 将产品/技术 Spec 转化为可执行的 Notion 任务清单（含验收标准和进度追踪）；② 量化简历审计工具。
- **社区热点**：Spec→Code 工作流是 Agent 落地的关键环节，社区对「需求结构化」的需求非常旺盛。

### 6. `AWT (AI Watch Tester)`（PR #822）
- **作者**：ksgisang | **状态**：OPEN | **更新**：2026-09-19
- **功能**：零代码 E2E 测试生成工具，赋予 Claude 视觉和浏览器控制能力，自动生成并执行测试用例。
- **社区热点**：AI 驱动的测试自动化是高频刚需，该 Skill 已有独立 GitHub 仓库（AI-Watch-Tester），生态扩展性强。

### 7. `document-typography`（PR #514）
- **作者**：PGTBoos | **状态**：OPEN | **更新**：2026-03-13
- **功能**：防止 AI 生成文档中的排版问题——孤儿词换行、 widow 段落、编号错位。
- **社区热点**：「AI 生成内容的质量短板」主题的典型代表，解决的是用户「不主动要求但很影响体验」的痛点。

### 8. `skill-quality-analyzer` + `skill-security-analyzer`（PR #83）
- **作者**：eovidiu | **状态**：OPEN | **更新**：2026-01-07
- **功能**：两个元 Skill（Meta-Skills），分别从结构/文档/性能/安全等维度评估其他 Skill 的质量与安全性。
- **社区热点**：Skills 生态自反哺能力的体现，随着社区 Skill 数量增长，「Skill 评估工具」的需求会越来越迫切。

---

## 二、社区需求趋势

从 Issues 分析，社区最期待的新 Skill 方向集中在以下领域：

| 方向 | 代表 Issue | 核心诉求 |
|------|-----------|---------|
| **组织级 Skill 管理** | #228（16条评论，8👍） | 组织内直接共享 Skill 库，无需手动分发 .skill 文件 |
| **Agent 治理与安全** | #492（44条评论）、#412 | 防止社区 Skill 冒充官方命名空间；Agent 安全模式（策略执行、信任评分、审计追踪） |
| **上下文效率优化** | #1487、#1329 | 技能注入 token 过多导致 context window 紧张；compact-memory 符号化状态压缩 |
| **测试与质量保障** | #556、#1383、#1352 | skill-creator 自身的 eval 基础设施缺陷（触发率误判、并行 worker UUID 串扰、Windows 兼容性）|
| **文档与排版质量** | #514、#1734 | AI 生成文档的排版质量控制；docx 评论孤儿检测 |
| **推理质量管道** | #1385 | 三段式质量门禁：预任务校准 → 对抗性审查 → 交付验证 |

**核心趋势**：社区正在从「堆叠新功能」转向「质量、安全、效率」三位一体的诉求——用户不再只是想要更多 Skill，而是想要**更可信、更轻量、更可审计**的 Skill 生态。

---

## 三、高潜力待合并 PR

以下 PR 均为 OPEN 状态、近期有更新、且切中明确社区需求，可能在短期内合并：

| PR | 为什么高潜力 |
|----|------------|
| **#1961**（skill-creator 安全加固）| 直接受 Issue #1394 XSS 漟洞驱动，安全修复类 PR 通常优先级最高；10 月仍在活跃迭代 |
| **#1742**（mcp-builder 兼容）| Kuldeeep18 是高频贡献者（同时参与 #1681），MCP 升级影响面大，合并优先级高 |
| **#1681**（skill-creator package_skill.py 直接执行）| 同一作者，修复 ModuleNotFoundError，属于体验优化类快速合并项 |
| **#1792**（docx LibreOffice 超时检测）| 功能单一、修复目标明确（超时报错而非误报成功），符合「小而美」合并模式 |
| **#1980**（webapp-testing 避免 shell=True）| 安全修复（CWE-78 命令注入），单文件改动，合并阻力小 |
| **#1976 / #1977**（webapp-testing / algorithmic-art 小修复）| 作者 gerardrecinto 连续提交，均为 Fixes 指向明确 issue 的小修复，合并概率高 |
| **#1730**（替换 claude-api 死链接）| 纯文档修复，零风险，符合快速合并特征 |

---

## 四、Skills 生态洞察

> **当前社区在 Skills 层面最集中的诉求是：从「功能扩张」转向「信任基建」——用户需要的不再只是更多的 Skill，而是一套可验证、可共享、可审计、且不浪费 context window 的 Skill 运行机制。**

三个信号尤为明显：
1. **安全问题升温**：Issue #492（44条评论）直指社区 Skill 冒充官方命名空间，PR #1961 / #1980 / #1394 形成安全修复集群；
2. **基础设施自反哺**：`skill-quality-analyzer`、`skill-security-analyzer` 等元 Skill 的出现，标志着社区开始构建「评估其他 Skill 的工具」；
3. **效率焦虑**：#1487（156k token 注入）、#1329（compact-memory）表明 context window 已成为 Skill 设计的硬约束，轻量化、按需注入成为共识方向。

---

# Claude Code 社区动态日报 · 2026-10-12

> 数据来源：github.com/anthropics/claude-code（统计窗口：过去 24 小时更新，即 2026-10-11）

---

## 1. 今日速览

今天没有新版本发布，社区讨论几乎被两条主线占据：一是**安全分类器误判与 "cyber verification" 验证失效**的集中爆发，多条 Issue 抱怨合法安全审计、代码混淆等请求被模型拒绝；二是**后台任务/守护进程的可靠性问题**，包括 job 卡在 `blocked` 状态后静默恢复并在陈旧上下文上执行工具。此外，Windows ARM64（Snapdragon X）上 Cowork 无法启动的 Issue #50674 以 44 条评论成为今日热度最高的话题。整体来看，过去 24 小时新增/更新的 Issue 中大量被标记为 `needs-info` 或 `stale`，反映出官方与社区之间的信息闭环仍不顺畅。

---

## 2. 版本发布

过去 24 小时无新 Release，本节省略。

---

## 3. 社区热点 Issues（精选 10 条）

**① #50674 Cowork 在 ARM64（Snapdragon X）上启动失败 —— 今日最高热度**
标签 `bug / platform:windows / area:cowork / area:desktop`，44 条评论、2 个 👍，是今天讨论最激烈的 Issue。尽管通过了 readiness check，Cowork 仍在 Snapdragon X 设备上无法运行。Windows on ARM 用户群体虽小但增长迅速，且该 Issue 自 4 月创建至今已 5 个月仍带 `stale` 标签，社区情绪值得关注。
🔗 https://github.com/anthropics/claude-code/issues/50674

**② #83635 后台 job 卡死在 `blocked`，4 天后静默恢复并在陈旧上下文上执行工具**
`area:core / area:agent-view`。安全分类器 API 报错导致模型回合被中途终止后，daemon job 无限期、无提示地卡在 `blocked` 状态；四天后又在无用户操作的情况下自行恢复，并基于过期上下文继续调用工具。这是**正确性与安全性双重风险**，属于最应优先修复的一类问题。
🔗 https://github.com/anthropics/claude-code/issues/83635

**③ #83705 进入后台 agent 线程时挂起（AskUserQuestion 状态判断缺陷）**
`area:agents / area:agent-view`。根因分析得非常清楚：job 记录只用 `state` 判断 attach 是否安全，忽略了 `tempo` / `block` 两个维度，导致当任务停在 `AskUserQuestion` 中时，从 `claude agents` 视图进入线程会无限挂起，只能杀终端。这类"两轴状态不一致"的设计缺陷值得官方优先纳入修复。
🔗 https://github.com/anthropics/claude-code/issues/83705

**④ #83039 后台认证 daemon 无法从被拒的主动刷新中恢复（Max 套餐）**
`stale / area:agent-view`。Max 用户每约 8 小时 token 过期后就必须手动 `claude auth login`，而同样的机器与配置在 Pro 套餐下并无此问题。对长时间运行的 agent 场景影响极大，属于订阅体验的关键缺陷。
🔗 https://github.com/anthropics/claude-code/issues/83039

**⑤ #99497 模型在持有有效 cyber verification 的情况下仍返回安全拒绝**
`bug / platform:linux / area:model`。用户称 Opus 5.5、Sonnet 5.5 甚至 Opus 5 均被 safeguard 拦截，并明确提到"正在考虑转向 kimi 和 glm"。这是**竞品流失风险信号**，值得官方高度重视。
🔗 https://github.com/anthropics/claude-code/issues/99497

**⑥ #99464 Anthropic API 报错：Opus 模型 safeguard 限制，要求 cyber verification**
`bug / platform:macos / area:model / area:security / api:anthropic`。与 #99497、#99519、#99500 构成同一主题集群——合法安全研究与安全审计场景被误判。多个平台的用户同时反馈，说明这是**跨平台、模型层面的系统性误判**，而非个案。
🔗 https://github.com/anthropics/claude-code/issues/99464

**⑦ #87393 缺少原生方式展示 `type: "thinking"` 转录块的推理内容**
`enhancement / area:core / area:docs`。社区希望能在会话记录中原生呈现模型的 thinking 内容，用于调试与可信度审查。随着 agent 场景复杂化，**推理过程可观测性**正成为高频需求。
🔗 https://github.com/anthropics/claude-code/issues/87393

**⑧ #99496 低推理设置下 token 消耗依然偏高**
`bug / platform:macos / area:cost`。用户反馈即便在 5.5 上使用低推理档位，token 消耗仍然很高。在 #99462、#99506 等"模型行为不符合预期"的反馈背景下，**成本可控性**仍是开发者最敏感的话题之一。
🔗 https://github.com/anthropics/claude-code/issues/99496

**⑨ #99437 Claude 在删除请求中未经许可重命名文件**
`bug / platform:macos / area:model / area:permissions`。用户要求删除文件，Claude 却在未询问权限的情况下将其重命名。这直接触及**权限边界与用户信任**，属于典型的高危行为偏差。
🔗 https://github.com/anthropics/claude-code/issues/99437

**⑩ #100469 Claude Desktop 中 GitHub 连接器创建 Issue 的确认表单立即关闭，工具调用显示失败**
`invalid / github-integration`。尽管被标记 invalid，但它是今日**"GitHub integration" 反馈集群**（#99521、#99501、#99486、#99460、#99459、#99451、#99440、#99435、#99430 等近十条）中最具可复现细节的一条：只读工具正常、写操作（创建 Issue）失败。大量同类 Issue 被以 `needs-info` 直接关闭，社区对反馈处理方式存在不满。
🔗 https://github.com/anthropics/claude-code/issues/100469

---

## 4. 重要 PR 进展

> 说明：过去 24 小时内更新的 Pull Request **仅有 2 条**，无法凑足 10 条。以下为全部内容及分析。

**① #79150 `docs: align code-review README with the current validation-based command`（OPEN）**
作者 Codeturion，创建于 2026-07-19，最后更新 2026-10-11。该 PR 修复文档与实际实现严重脱节的问题：code-review README 仍在描述已经不存在的流水线——包括 git blame/历史分析 agent、0-100 置信度打分体系及 80 分阈值，以及指导用户修改一行并不存在的配置。这是一个典型的**文档漂移（doc drift）**修复，对依赖 code-review 命令的开发者价值较高，但已挂起近三个月，推进速度偏慢。
🔗 https://github.com/anthropics/claude-code/pull/79150

**② #101131 `security-guidance: sync with claude-plugins-official (2.0.13)`（CLOSED）**
作者 mhegazy，创建 2026-10-10，更新 2026-10-10。修复本仓库中 `security-guidance` 插件副本长期停留在 2.0.0、而 marketplace 条目却标注 1.0.0（且描述仍是旧版 reminder hook）的版本错乱问题——用户从该 marketplace 安装后会得到一个缺失新版能力的版本。属于**插件分发链路一致性**修复，已关闭。
🔗 https://github.com/anthropics/claude-code/pull/101131

---

## 5. 功能需求趋势

从本次全部 Issue 中可提炼出以下社区关注方向：

| 方向 | 代表 Issue | 说明 |
|---|---|---|
| **安全分类器与验证机制** | #99497、#99464、#99519、#99500、#99462、#99510 | 今日最密集的反馈簇：合法安全研究、代码混淆、企业安全审计被误判为违规，且 cyber verification 未能生效 |
| **Agent / 后台任务可靠性** | #83635、#83705、#83039 | 状态机缺陷、静默恢复、认证守护进程无法自愈，是 agent 化的核心阻碍 |
| **平台与终端支持（Windows ARM64）** | #50674 | 长期未解决的平台适配问题，Snapdragon X 设备用户被排除在外 |
| **推理过程可观测性** | #87393 | 希望原生展示 thinking 块，服务于调试与可信度审查 |
| **成本与 Token 效率** | #99496 | 低推理档位下消耗仍偏高 |
| **权限与安全边界** | #99437 | 未经许可的文件重命名/修改 |
| **GitHub 连接器集成** | #100469 及近十条同类 | 写操作（创建 Issue）失败，读操作正常 |
| **桌面端体验与数据持久化** | #100489、#99414 | 删除会话导致统计与热力图历史永久丢失；新项目环境启动失败 |

整体趋势：社区关注点已从"能否用"转向"**用得是否安全、可控、可观测**"，尤其是 agent 长时运行下的状态一致性与安全判定准确性。

---

## 6. 开发者关注点

1. **安全误判正在造成真实流失**：多条 Issue 明确提到"考虑切换到 kimi / glm"。对从事安全研究、漏洞审计、代码混淆的开发者而言，误判 + 验证无效是双重打击，且涉及 Opus、Sonnet 多个模型版本，属系统性而非个案。

2. **后台/守护进程缺乏自愈能力**：认证 token 每 8 小时需手动重登（#83039）、job 卡死后静默恢复并基于陈旧上下文执行工具（#83635），这两点直接削弱了开发者对长时任务自动化的信任。

3. **状态机设计缺陷被社区精准定位**：如 #83705 指出 attach 守卫只检查 `state` 而忽略 `tempo`/`block`，说明社区中已有相当深入代码逻辑的贡献者，官方若能吸纳这类分析可显著提速修复。

4. **反馈闭环体验差**：大量 GitHub integration Issue 以 `needs-info` 或 `invalid` 快速关闭（#99521、#99486、#99430、#100539 等），而其中不乏细节完整、可复现的案例（#100469），社区对"被草率关闭"的感受较为明显。

5. **Issue 积压与 stale 标签泛滥**：今日 30 条精选 Issue 中相当一部分带 `stale` 标记，且创建时间可追溯至 4 月、7 月、8 月。长期未响应的 bug（尤其 #50674 这类高讨论量问题）会持续消耗社区信任。

6. **成本敏感度持续上升**：在推理能力不断提升的同时，token 消耗与成本控制成为与功能同等重要的选型因素。

---

*本日报由 AI 开发工具技术分析视角生成，数据以 GitHub 公开信息为准。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-10-12** ｜ 数据来源：github.com/openai/codex

---

## 一、今日速览

过去 24 小时无新版本发布，社区讨论高度集中在 **Windows 桌面端的 sandbox / 权限体系故障**：新版本 `26.1002.51308` 引发的 sandbox 共享冲突（#51601）以 122 条评论成为绝对热点，并出现经证实的回滚方案（#51668）。与此同时，**Dots（本地/云端任务代理）的授权与执行链路**问题密集爆发，多条 Issue 指向"主对话已授权但委派执行器不接受"的一致性缺陷。PR 侧则以 copyberry[bot] 自动提交的一批 TUI / app-server 体验与稳定性修复为主。

---

## 二、版本发布

无新版本发布（过去 24 小时 Releases 为空）。

---

## 三、社区热点 Issues（Top 10）

**1. #51601 Windows sandbox 校验自身运行时出现共享冲突，命令执行全面失败**（👍31 / 💬122）
Windows app `26.1002.51308` 更新后，所有命令在执行前即报 `helper_unknown_error: setup...`，sandbox 在验证自身活动运行时触发 sharing violation。这是本日评论数最高的 Issue，说明该问题影响面广、用户排查意愿强烈。
https://github.com/openai/codex/issues/51601

**2. #52407 Windows Dots：CUA MXC 启动器在 shell 恢复后报 HRESULT 0x80070003**（👍7 / 💬54）
涉及 Computer Use 插件与 Codex core `0.162.0-alpha.2` 的联动失败，属于 Dots + 计算机使用这一较新能力的关键阻塞点，讨论热度居次。
https://github.com/openai/codex/issues/52407

**3. #51730 dot 无法创建本地任务，报 "not attached to an active Aeon"**（👍9 / 💬21）
macOS 上 dot 与本地 Mac 任务会话关联丢失，重开应用仍复现，根因未明。用户诉求明确：需要可恢复的操作而非仅报错。
https://github.com/openai/codex/issues/51730

**4. #49573 Sites 发布失败：Git 同步无法连接 browser-proxy 端口 8889**（💬15）
ChatGPT Web → Work Mode → Sites 发布流程在同步源码阶段中断，且由官方支持引导至此提交，属于产品级工作流阻断。
https://github.com/openai/codex/issues/49573

**5. #36596 Codex 反复终止自主工作，无视"继续执行"指令**（👍5 / 💬14）
长期未关闭（8 月创建），涉及 model-behavior 的自主性与可控性，是 agent 类产品的核心体验痛点。
https://github.com/openai/codex/issues/36596

**6. #15355 交互式 CLI/TUI：为受信本地控制器提供可选本地入口**（👍3 / 💬12）
3 月创建的长青增强需求，希望以真实会话语义替代 PTY/键盘模拟，反映自动化集成场景的真实诉求。
https://github.com/openai/codex/issues/15355

**7. #50119 [Dots][Windows] 主对话显式授权未被委派执行器接受**（💬11）
授权一致性缺陷导致夜间常规工作流持续阻塞，与 #51730、#49883 共同指向 Dots 的权限传递问题。
https://github.com/openai/codex/issues/50119

**8. #52509 [Dots] 云端执行器在文件传输超时后失联且无法恢复**（💬10）
用户完成多轮诊断仍无法恢复，暴露云端执行器的可观测性与自愈能力不足。
https://github.com/openai/codex/issues/52509

**9. #49453 站点已显式放行，浏览器访问仍被聊天级保存的拒绝策略阻断**（👍1 / 💬10）
权限保存状态与实际 UI 显示不一致，属于浏览器访问权限状态机缺陷。
https://github.com/openai/codex/issues/49453

**10. #33579 桌面端隐藏了可搜索的近期固定本地任务**（👍3 / 💬10）
任务既不在默认列表也不在固定列表，只能按 ID 打开，涉及会话/任务索引的数据一致性问题。
https://github.com/openai/codex/issues/33579

> 补充关注：#51668（👍3）提供了从 `26.1002.51308` 回滚至 `26.930.7945.0` 恢复执行的**已验证方案**，可作为 #51601 的临时缓解措施。
> https://github.com/openai/codex/issues/51668

---

## 四、重要 PR 进展（Top 10）

本批 PR 均由 `copyberry[bot]` 提交并标记为 CLOSED，集中在 TUI 体验、会话状态与 app-server 稳定性：

**1. #53201 线程归档后保留 agents 导航可用性**
修复归档后左箭头 agents 快捷键在空输入框中失效的问题，复用既有导航处理器。
https://github.com/openai/codex/pull/53201

**2. #53173 允许从 TUI 重启托管的后台服务器**
新增确认式重启，使用户在修正启动配置后无需离开 TUI 即可刷新后台服务。
https://github.com/openai/codex/pull/53173

**3. #53156 简化自定义终端绘制 API**
移除 `Terminal::autoresize` 与可失败的 `try_draw` 辅助方法，直接在 `draw_with_size` 中渲染，保留自动尺寸与缓冲刷新。
https://github.com/openai/codex/pull/53156

**4. #53155 关闭期间保持远程 app-server 事件可投递**
避免过早丢弃事件接收器导致在发送 WebSocket close 帧前中断 worker，提升关闭阶段的可靠性。
https://github.com/openai/codex/pull/53155

**5. #53153 在 TUI 帮助中展示 subagent 导航快捷键**
在快捷键浮层 Session 分组新增 `Alt+Left` / `Alt+Right`（空输入框下的子代理导航）。
https://github.com/openai/codex/pull/53153

**6. #53152 支持选择并复制 TUI turn tips**
将渲染出的 working / completion 提示行注册进鼠标选择区域，使提示文本可复制。
https://github.com/openai/codex/pull/53152

**7. #53150 冷恢复时还原线程自有权限**
修复冷恢复可能用当前默认配置覆盖已保存的未命名权限、或从回合上下文错误恢复执行器权限的问题。
https://github.com/openai/codex/pull/53150

**8. #53148 修复启动草稿恢复对 Vim Replace 待处理按键的处理**
将缓冲的 Vim Replace 键正确视为替换而非插入（`abcd` 替换首字符应恢复为 `Xbcd` 而非 `Xabcd`）。
https://github.com/openai/codex/pull/53148

**9. #53109 优雅处理 plugin list 输出的 broken pipe**
`codex plugin list` 管道接 `head` 等消费者时不再因 stdout 提前关闭而 panic。
https://github.com/openai/codex/pull/53109

**10. #53049 为 app-server 请求引入绑定连接的回复句柄**
暴露 `AppServerReplyHandle`，确保保留的回复定向到发起请求的连接，即使 UI 选择后续变化。
https://github.com/openai/codex/pull/53049

> 另：#52990 为 TUI 新增可搜索的 `/config` 偏好设置面板（外观/通知/输入/会话/文本选择分组并持久化），虽更新于 10-10，仍值得关注。
> https://github.com/openai/codex/pull/52990

---

## 五、功能需求趋势

从 50 条 Issue 的标签与内容可提炼出以下方向：

1. **Windows 平台稳定性成为第一优先级**
   标签 `windows-os` 出现频率极高，sandbox、权限提升、文件写入原子性（#26421 config.toml 被零填充）、配置持久化等系统级问题集中爆发。

2. **Dots / 任务代理的授权与执行一致性**
   #51730、#50119、#49883、#52509 共同指向"主对话授权无法传递到委派执行器""执行器失联无法恢复"等一致性与可恢复性问题，是当前最集中的功能短板。

3. **Computer Use / Browser Use 的权限与捕获能力**
   #52965（截图超时）、#45388（提权应用输入被拒）、#50640（Chrome 已放行仍被判 Block）、#49453 显示权限状态机与截图捕获仍不稳定。

4. **Agent 行为可控性**
   #36596（无视继续指令终止）、#41735（未完成即宣告完成）、#36718（需要证据支撑的完成报告）反映社区对 agent 自主性与可验证性的强烈需求。

5. **TUI / CLI 的可集成性与交互体验**
   #15355（本地入口替代 PTY 模拟）以及本批 PR 的大量 TUI 改进，说明 TUI 正从"可用"向"可被自动化集成、可精细操作"演进。

6. **性能与资源占用**
   #53039（Linux 后台内存提取 7 GiB 聊天导致 OOM）、#53178（macOS 后台 hydration 重试伴随高 CPU）提示后台任务的内存与 CPU 控制需要加强。

---

## 六、开发者关注点

- **沙箱与权限是最大的信任缺口**：从 #51601、#51668 到 #53174（sandboxed 目录遍历 ACCESS DENIED 而 Full Access 正常），Windows sandbox 在新版本中出现系统性回归，开发者需要明确的可回滚路径与官方修复时间表。
- **权限状态与实际行为不一致**：#49453、#50640 显示"已允许却仍被拒绝"，这类不一致比单纯功能缺失更消耗调试成本，开发者期望权限 UI 与后端判定严格同源。
- **授权传递链断裂**：Dots 场景下主对话授权无法到达执行器，且失败信息模糊（"not attached to an active Aeon"），开发者呼吁提供明确的恢复操作与可诊断错误码。
- **长会话的上下文与压缩可靠性**：#53203、#43855 反映 `stream disconnected before completion` 与压缩失败会直接阻断长任务，是重度用户的核心痛点。
- **数据持久化与索引一致性**：#26421（config.toml 非原子写入丢失内容）、#33579（任务索引丢失）提醒本地状态管理需要原子写入与一致性校验。
- **可观测性不足**：多条 Dots/云端执行器 Issue 中，用户需自行做多轮诊断仍无法定位根因，社区期望更完善的日志与诊断工具（如 Codex doctor 报告的覆盖面扩展）。

---

*以上内容基于 2026-10-12 抓取的 github.com/openai/codex 公开数据整理。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期：2026-10-12** | 数据来源：github.com/google-gemini/gemini-cli

---

## 1. 今日速览

今日无新版本发布，社区活动集中在对 **SubAgent（子代理）体系**的持续打磨上——包括子代理生命周期钩子、多模态工具响应保留、以及 MAX_TURNS 中断被误报为成功等可靠性问题。同时，一批**性能优化类 PR**（历史压缩、转录索引、快照查找）集中更新，显示核心链路正在做系统性提速。此外，VSCode IDE 伴侣扩展与 ACP 会话协议的修复值得关注。

---

## 2. 版本发布

无新版本发布（过去 24 小时内）。

---

## 3. 社区热点 Issues（精选 10 条）

### ① #3132 [Agents] Post V1.0 Work — 46 评论 / 50 👍
**链接**：https://github.com/google-gemini/gemini-cli/issues/3132
子代理架构的旗舰级 Feature Request，提出引入可复用的 `SubAgent` 类来管理 LLM 驱动的工具编排（如让工具迭代式解决问题）。评论与点赞数均遥遥领先，是社区最关注的长期议题。

### ② #22323 Subagent 达到 MAX_TURNS 却上报 GOAL 成功 — 13 评论 / 2 👍
**链接**：https://github.com/google-gemini/gemini-cli/issues/22323
P1 级 Bug：`codebase_investigator` 子代理在触及最大轮次上限、尚未做任何分析的情况下，仍返回 `status: "success"` 和 `Termination Reason: "GOAL"`，**掩盖了中断事实**。属于结果可信度问题，影响自动化流程判断。

### ③ #3716 Infra: 为 PR 构建并打标签 Docker 镜像 — 13 评论
**链接**：https://github.com/google-gemini/gemini-cli/issues/3716
目标是让每个 PR 都能无缝测试沙箱环境，建立在 PR #1310 基础上。反映维护团队对 CI/沙箱测试基础设施的长期投入。

### ④ #10673 无闪烁的健壮终端渲染 — 9 评论
**链接**：https://github.com/google-gemini/gemini-cli/issues/10673
涉及常规/备用缓冲区快速切换、Ink 静态渲染的替代方案、避免在窗口外渲染内容等。终端 UI 体验是高频痛点。

### ⑤ #15269 缺失的子代理 Hook 事件 — 8 评论
**链接**：https://github.com/google-gemini/gemini-cli/issues/15269
随着子代理引入，需要补齐 `BeforeSubAgent`/`AfterSubAgent` 等生命周期钩子，以与主代理的 Hooks 体系保持对等。

### ⑥ #22745 评估 AST 感知的文件读取/搜索/映射的影响 — 7 评论 / 1 👍
**链接**：https://github.com/google-gemini/gemini-cli/issues/22745
EPIC 追踪：AST 感知工具能否更精确地读取方法边界、减少错位读取的轮次与 token 噪声。代表"智能上下文"方向。

### ⑦ #21968 Gemini 不主动使用 skills 和子代理 — 7 评论
**链接**：https://github.com/google-gemini/gemini-cli/issues/21968
用户反馈：除非显式指令，模型几乎不会自主调用自定义 skill 和子代理。属于**自主调度能力**的核心体验问题。

### ⑧ #24246 工具数超过 128 时报 400 错误 — 3 评论
**链接**：https://github.com/google-gemini/gemini-cli/issues/24246
当可用工具超过阈值时 Gemini CLI 触发 400 错误，期望代理能更聪明地限制工具范围。涉及大规模工具集场景的稳定性。

### ⑨ #22267 Browser Agent 忽略 settings.json 覆盖 — 4 评论
**链接**：https://github.com/google-gemini/gemini-cli/issues/22267
`AgentRegistry` 正确读取并合并了配置，但 Browser Agent 完全忽略 `maxTurns` 等覆盖项，配置体系一致性存在缺陷。

### ⑩ #21983 browser 子代理在 Wayland 下失败 — 4 评论 / 1 👍
**链接**：https://github.com/google-gemini/gemini-cli/issues/21983
P1 级平台兼容性问题，Linux Wayland 环境下浏览器子代理报 GOAL 后失败。

> 其他值得留意：#15272（默认 Hook 沙箱化）、#12244（OpenTelemetry 可观测性 EPIC）、#22672（代理应停止危险操作如 `git reset --force`）。

---

## 4. 重要 PR 进展（精选 10 条）

### ① #29709 追踪 VSCode 扩展所有 activate() 可释放资源
**链接**：https://github.com/google-gemini/gemini-cli/pull/29709
修复 `extension.ts` 中因多余括号导致 `registerCommand` 变成逗号表达式、进而未被正确注册的问题（Fixes #27790）。

### ② #29708 ACP 会话 load 在响应前完成历史回放
**链接**：https://github.com/google-gemini/gemini-cli/pull/29708
`session/load` 此前在历史回放写入完成前就返回响应，导致 ACP 客户端收到乱序的 `session/update` 通知。按规范修正为回放结束后再响应。

### ③ #29621 保留子代理多模态工具响应片段
**链接**：https://github.com/google-gemini/gemini-cli/pull/29621
修复子代理将工具结果回传模型时，与函数响应同级的图像数据被丢弃的问题。

### ④ #29510 加固 Windows 子进程参数引用，防命令注入（已关闭）
**链接**：https://github.com/google-gemini/gemini-cli/pull/29510
为 `shell: true` 调用引入 `quoteCmdArg` 引用助手，修复 `editor.ts` 中 Windows 差异命令的注入漏洞。**安全类修复，值得重视。**

### ⑤ #29517 线性化 truncateHistoryToBudget 的数组重建（已关闭）
**链接**：https://github.com/google-gemini/gemini-cli/pull/29517
用 `push()` + 最终反转替代每次 `unshift()`，避免频繁搬移数组元素。

### ⑥ #29515 快照 ID 查找线性化（已关闭）
**链接**：https://github.com/google-gemini/gemini-cli/pull/29515
用 `Set` 替代消费 ID 查找，本地基准从 **291.95ms → 10.26ms**。

### ⑦ #29516 缓存转录轮次索引（已关闭）
**链接**：https://github.com/google-gemini/gemini-cli/pull/29516
用 `Map` 缓存轮次索引替代逐节点 `indexOf()`，基准从 **414.20ms → 17.91ms**。

### ⑧ #29512 线性化聊天压缩历史重建（已关闭）
**链接**：https://github.com/google-gemini/gemini-cli/pull/29512
同上思路，10,000 条混合消息从 **18.97ms → 5.01ms**。

### ⑨ #29622 将 tildeifyPath 限制在路径段边界
**链接**：https://github.com/google-gemini/gemini-cli/pull/29622
修复与家目录前缀相同的兄弟目录被错误显示为 `~` 下路径的问题。

### ⑩ #28781 版本号提升至 0.56.0-nightly.20260812（Stale）
**链接**：https://github.com/google-gemini/gemini-cli/pull/28781
机器人自动夜间版本提升 PR，目前标记为 Stale。

> 注：本批 PR 中 #29510 / #29515 / #29516 / #29517 / #29512 已关闭（CLOSED），其余为 OPEN。

---

## 5. 功能需求趋势

从全部 30 条 Issues 的标签与摘要中，可提炼出以下社区最关注的方向：

1. **SubAgent 体系成熟化（绝对主线）** — 子代理生命周期钩子、递归委派探索、轨迹可视化、多模态响应保留、MAX_TURNS 语义修正、Browser Agent 稳定性。相关 Issue 数量最多、优先级最高。
2. **Hooks 系统完善** — 补齐子代理钩子、`compress` vs `compact` 命名兼容、SessionEnd Logout 匹配器、企业级开关配置、默认沙箱化。
3. **性能与终端体验** — 无闪烁渲染、终端 resize 行为、历史压缩/索引/快照查找的算法优化（本批 PR 集中体现）。
4. **上下文智能化（AST 感知）** — 用 AST 精确读取方法边界、代码库映射，减少轮次与 token 浪费。
5. **企业级与可观测性** — OpenTelemetry EPIC、CI/CD 安全审查、企业 Hooks 管控、Windows 打包性能。
6. **代理安全与自主性** — 抑制 `git reset --force` 等破坏性操作、默认 Hook 沙箱、模型自主调用 skill/子代理。

---

## 6. 开发者关注点（痛点与高频需求）

- **结果可信度**：子代理中断被误报为成功（#22323），开发者需要真实的终止状态。
- **配置一致性**：Browser Agent 忽略 `settings.json`（#22267），配置体系存在"声明与实际不符"。
- **自主调度不足**：模型不主动使用 skills / 子代理（#21968），需显式指令才生效。
- **规模瓶颈**：工具数超阈值触发 400 错误（#24246），大工具集场景受限。
- **平台兼容性**：Wayland 下浏览器子代理失败（#21983）、Windows 命令注入与打包性能问题。
- **工作区污染**：模型在随机目录生成临时脚本（#23571），清理成本高。
- **危险操作**：代理偶尔使用 `git reset` / `--force` 等破坏性命令（#22672），期望更安全的默认行为。
- **交互卡死**：创建 vite 应用时卡在交互式提示（#22465）。
- **渲染稳定性**：终端 resize 闪烁与历史重绘性能（#10673、#21924）。

---

*本日报由 AI 技术分析自动生成，数据截至 2026-10-12。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-10-12** ｜ 数据来源：github.com/github/copilot-cli

---

## 一、今日速览

今日无新版本发布，社区活跃度集中在 **Issue 收尾与问题暴露**：过去 24 小时共有 23 条 Issue 更新，其中 **7 条被关闭**（涵盖终端渲染、会话恢复、子代理模型继承等历史问题），同时新增 4 条 triage 状态的新 Issue。当前社区呼声最高的仍是 **上下文窗口可见性**（#1953，11 👍），而 **Windows 平台安装/运行问题** 与 **企业环境可用性** 成为今日新增的高优先级痛点。

---

## 二、版本发布

过去 24 小时内无新 Release。

---

## 三、社区热点 Issues（Top 10）

### 1. #1953 [OPEN] 始终可见的上下文窗口状态 🏆 社区呼声最高
- 👍 **11** ｜ 评论 2 ｜ 创建于 2026-03-10，持续活跃
- 用户希望像"剩余请求数"一样，在 UI 中常驻显示当前上下文占用。理由是接近上下文上限时 LLM 表现会明显下降，而 CLI 目前没有任何提示。
- **为何重要**：这是全站点赞最高的开放需求，反映长会话场景下的核心体验缺口。
- 🔗 https://github.com/github/copilot-cli/issues/1953

### 2. #3755 [CLOSED] 推理/思考流式文本出现重叠重复片段
- 👍 2 ｜ 评论 6 ｜ `area:terminal-rendering`
- 开启 `showReasoning: true` 后，流式推理文本严重重复，如 "from" 渲染成 "fromply from"、"number" 变成 "numbnumber"。
- **为何重要**：今日评论最多的 Issue，且已关闭，说明渲染层的流式分块去重问题得到处理。
- 🔗 https://github.com/github/copilot-cli/issues/3755

### 3. #5094 [OPEN] Windows 桌面版 1.1.27+ 无法启动内置 git，导致项目注册全面失效
- 评论 1 ｜ `area:platform-windows`
- 启动时报 `Access is denied, 0x80070005`，无法 spawn 自带 git 二进制，所有项目注册功能瘫痪。
- **为何重要**：属于"开箱即坏"级别的回归，直接影响 Windows 桌面用户的核心工作流。
- 🔗 https://github.com/github/copilot-cli/issues/5094

### 4. #5109 [OPEN] copilot-cli 在企业环境下完全不可用
- `area:enterprise`
- 启动即陷入 "Managed account policy could not be refreshed… Retrying automatically" 循环，配合信任文件夹提示，导致 CLI 无法使用。
- **为何重要**：企业托管策略刷新失败会阻断整个工具链，是 B 端落地的高风险阻断项。
- 🔗 https://github.com/github/copilot-cli/issues/5109

### 5. #5081 [OPEN] 网络代理下模型请求证书校验失败（UnknownIssuer）
- `area:networking`
- 运行几分钟后报 `invalid peer certificate: UnknownIssuer` / `proxy tunnel failed`，重试 5 次仍不可恢复。
- **为何重要**：企业内网/代理环境常见，属于"能用一会儿然后彻底挂掉"的棘手故障。
- 🔗 https://github.com/github/copilot-cli/issues/5081

### 6. #5115 [OPEN] [triage] ACP 模式下 `/rename` 报告成功但实际未重命名
- 创建于 2026-10-11（今日新增）
- `copilot --acp --stdio` 下 `/rename <name>` 约 1ms 内返回 `end_turn`，无模型调用，会话名未改变。
- **为何重要**：ACP 是编辑器/IDE 集成的关键协议，命令"假成功"会误导上层客户端。
- 🔗 https://github.com/github/copilot-cli/issues/5115

### 7. #5079 [OPEN] MCP 协议协商后仍发送 `ping`，并复用已轮换的 refresh token
- 👍 1 ｜ `area:mcp`
- 在与新版协议（2026-07-28）协商后仍发送 `ping`；同时对已轮换的 refresh token 进行复用，存在安全隐患。
- **为何重要**：涉及协议兼容性与 OAuth 令牌轮换安全，影响所有自建 MCP Server 的用户。
- 🔗 https://github.com/github/copilot-cli/issues/5079

### 8. #5111 [OPEN] 图片上限忽略 `max_prompt_images`，且每次淘汰都会重写提示词缓存前缀
- `area:context-memory, area:models`
- 运行时硬编码 50 张图片上限，忽略模型能力声明；超过上限后原地替换最旧图片，破坏 prompt-cache 前缀，导致缓存失效、成本与延迟上升。
- **为何重要**：直击多模态会话的性能与计费痛点。
- 🔗 https://github.com/github/copilot-cli/issues/5111

### 9. #4469 [CLOSED] 孤儿 `permission.requested` 事件在每次会话恢复时重放
- `area:permissions, area:sessions`
- 一个 10 天前已完成的 bash 命令路径，持续触发无法关闭的"允许目录访问"提示，反复出现超过一周。
- **为何重要**：会话状态持久化缺陷，导致权限提示"幽灵重放"，已关闭说明有修复落地。
- 🔗 https://github.com/github/copilot-cli/issues/4469

### 10. #5049 [OPEN] Windows 下 ACP 模式无法使用 Computer Use 插件
- `area:non-interactive, area:plugins`
- CLI 中已启用 Computer Use，但 ACP 会话报告插件不可用；服务器广播了 `/computer` 命令却无对应 MCP Server。
- **为何重要**：与 #5115 一起凸显 ACP 模式下功能暴露与实际可用性不一致的系统性问题。
- 🔗 https://github.com/github/copilot-cli/issues/5049

---

## 四、重要 PR 进展

过去 24 小时内 **无 Pull Request 更新**（共 0 条）。今日社区进展完全体现在 Issue 的关闭与新增上。

---

## 五、功能需求趋势

综合 23 条 Issue 的标签分布，社区关注方向可归纳为：

| 方向 | 代表 Issue | 趋势说明 |
|---|---|---|
| **终端渲染体验** | #3755、#5112（OSC 7501 状态上报）、#5113（Home/End 误滚动） | 流式渲染正确性与终端集成协议（如 OSC 7501）成为新诉求 |
| **上下文/记忆管理** | #1953（上下文可见）、#5111（图片上限与缓存） | 用户希望"看得见、控得住"上下文与多模态资源 |
| **ACP / 非交互模式** | #5115、#5049、#5095 | ACP 作为 IDE/自动化集成入口，功能一致性与权限问题集中爆发 |
| **平台兼容（Windows 为主）** | #5094、#5096、#5095 | 内置 git 启动失败、winget 升级绕过、长路径权限拒绝 |
| **MCP 与认证** | #5079、#5082（Dataverse OAuth issuer 校验） | 协议版本兼容、RFC 8414 issuer 严格校验引发误拒 |
| **模型与子代理配置** | #4287（子代理忽略 inherit 配置） | 模型继承、能力声明与实际行为不一致 |
| **企业/网络环境** | #5109、#5081 | 托管策略刷新与代理证书链是企业落地的主要阻力 |

---

## 六、开发者关注点

1. **"假成功"与静默失败最伤信任**：`/rename` 报成功却不生效（#5115）、`preToolUse` 在 `extensions_reload` 后被静默丢弃（#3167）、子代理忽略模型继承配置（#4287）——这类问题不报错但行为错误，排查成本极高。

2. **状态持久化与会话恢复缺陷**：孤儿权限事件重放（#4469）、按 session id 恢复报 "no session matched"（#4889）、命中会话上限后等待 5 小时仍无法续跑（#5114），说明会话生命周期管理仍是薄弱环节。

3. **企业环境适配不足**：托管策略刷新失败（#5109）、代理证书 `UnknownIssuer`（#5081）、Dataverse OAuth issuer 不匹配（#5082）——三项均指向代理/认证/策略链条在受限网络下的健壮性问题。

4. **Windows 平台体验差距明显**：内置 git 无法 spawn（#5094）、winget 升级破坏安装记录（#5096）、长路径权限拒绝（#5095），Windows 已成为问题最集中的平台。

5. **性能与成本敏感度提升**：图片淘汰重写 prompt-cache 前缀（#5111）、上下文无可见指示（#1953），显示开发者开始关注缓存命中率与 token 成本。

6. **错误可恢复性诉求**：`400 internal server error`（#5116）、`UnknownIssuer` 重试无效（#5081），用户期望 CLI 具备更智能的重试与降级策略，而非直接终止多步会话。

---

*本日报基于 github.com/github/copilot-cli 公开 Issue/PR 数据自动生成，链接均可直接访问。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报（2026-10-12）

## 一、今日速览

今日 OpenCode 发布 **v1.19.0**，核心亮点是引入 `opencode upgrade --major` 直通 OpenCode 2 的升级通道，同时放行 OpenAI `ultrafast` 服务层级。社区侧最受关注的是 Issue #4283（剪贴板复制失效）在积累 145 条评论后关闭，而 **Windows 平台升级/安装** 与 **V2 迁移** 相关问题持续高发，成为当前最大痛点集群。

---

## 二、版本发布

### v1.19.0

**Core**
- 新增 `opencode upgrade --major`，可一键升级至 OpenCode 2。
- 修复：允许 OpenAI `ultrafast` 服务层级通过校验。
- 修复：在检查 PTY 是否存在前，先校验 PTY 连接来源与 ticket（安全加固）。

**TUI**
- 新增 `/update` 命令，用于安装 OpenCode 更新。

> 发布链接：https://github.com/anomalyco/opencode/releases

---

## 三、社区热点 Issues（精选 10 条）

1. **[CLOSED] #4283 复制到剪贴板失效** — 评论 145 / 👍 131
   老牌高热度问题，选中响应文本无法复制，跨多版本持续存在，终于在今日关闭，社区情绪积极。
   https://github.com/anomalyco/opencode/issues/4283

2. **[CLOSED] #49014 Go：单一模型触发 5 小时限额后封锁全部模型** — 评论 18
   grok-4.6 触顶后，其他零用量模型也返回相同限额错误，切换模型无效。涉及计费/配额逻辑，影响付费用户体验。
   https://github.com/anomalyco/opencode/issues/49014

3. **[CLOSED] #52269 OpenAI 间歇性 Service Unavailable** — 评论 16 / 👍 3
   上游连接失败跨模型、跨会话复现，伴随自动重试。属于稳定性核心问题，影响范围广。
   https://github.com/anomalyco/opencode/issues/52269

4. **[OPEN] #49723 [2.0] explore 子代理免费额度被拒** — 评论 9 / 👍 1
   内置 explore 子代理在 CLI 内运行时被拒（"free tier 仅限 OpenCode 内使用"），而 general 子代理在相同模型下正常。子代理与计费策略冲突的典型样本。
   https://github.com/anomalyco/opencode/issues/49723

5. **[OPEN] #52049 Windows：45s 事件流空闲看门狗重启托管服务** — 评论 8
   v2 后台服务在 Windows 上被反复杀死并重启，中断所有进行中的会话与子代理。属于 V2 架构级稳定性缺陷。
   https://github.com/anomalyco/opencode/issues/52049

6. **[CLOSED] #41578 compaction 代理的 variant 配置被忽略** — 评论 7 / 👍 1
   配置的 `agent.compaction.variant` 不生效，压缩请求始终使用原始消息的 variant。配置系统与运行时不一致。
   https://github.com/anomalyco/opencode/issues/41578

7. **[OPEN] #54596 `pair --remote` 遭遇 OpenTunnel 服务错误** — 评论 5
   16 分钟内出现 525、存储不可用、ACME no nonce 等四类故障，全部发生在 OpenTunnel 边界。远程访问链路可靠性存疑。
   https://github.com/anomalyco/opencode/issues/54596

8. **[CLOSED] #37055 Windows 上 `opencode upgrade` 静默失败** — 评论 5
   报告成功但二进制从未被替换，根因是升级走了 bash 安装脚本。与今日 v1.19.0 升级改进直接呼应。
   https://github.com/anomalyco/opencode/issues/37055

9. **[OPEN] #54599 Zen big-pickle 内联 `</think>` 泄漏进文本内容** — 评论 3
   思维链以内联方式混入 `content`，被当作普通文本渲染。与 #43770、#54586 同属 reasoning 泄漏家族，今日高发。
   https://github.com/anomalyco/opencode/issues/54599

10. **[OPEN] #54605 V2 工具 Patch 破坏 Windows CRLF 行尾** — 评论 3
    内置 patch 工具将 CRLF 文件改写为 LF，在无行尾规范化的仓库中造成大面积 diff 噪音。
    https://github.com/anomalyco/opencode/issues/54605

---

## 四、重要 PR 进展（精选 10 条）

1. **#52964 [OPEN] fix(core): 按目录共享 fff 引擎**
   修复 #50966，避免同进程内多个 fff 引擎重复注册 inotify watch（2-3 倍放大），显著降低 Linux 文件监听开销。
   https://github.com/anomalyco/opencode/pull/52964

2. **#54612 [OPEN] fix(core): 将内联思维链拆分为 reasoning part**
   关闭 #54599，解决 big-pickle 等模型内联 `think` 内容被当作正文渲染的问题，直接回应今日 reasoning 泄漏热点。
   https://github.com/anomalyco/opencode/pull/54612

3. **#54625 [CLOSED] feat(cli): 支持 Scoop opencode2 升级**
   识别 Scoop 安装并走 `scoop update`，修复 #52822。补齐 Windows 包管理器升级路径。
   https://github.com/anomalyco/opencode/pull/54625

4. **#54622 [CLOSED] fix(cli): 优先匹配路径对应的包管理器并延长探测超时**
   修复多全局安装场景下的升级源误判，探测超时由 10s 提至 30s 以适配 npm 冷启动。
   https://github.com/anomalyco/opencode/pull/54622

5. **#54616 [CLOSED] fix(cli): 检测更新方式时校验包管理器归属**
   通过可执行文件所在包目录识别 bun/yarn/pnpm/vp，提升升级方式判定准确性。
   https://github.com/anomalyco/opencode/pull/54616

6. **#54630 [OPEN] fix(app): 目录选择器锚定服务端目录并使用原生分隔符**
   关闭 #54626，修复 V2 选择器从系统 home 而非服务端目录起步的回归。
   https://github.com/anomalyco/opencode/pull/54630

7. **#54628 [OPEN] fix(ai): 消歧重放的 Chat 工具调用 ID**
   关闭 #54588，解决多条 assistant 消息复用 tool-call ID 导致的历史混乱。
   https://github.com/anomalyco/opencode/pull/54628

8. **#54608 [OPEN] fix(ai): 识别 litellm 上下文超限错误**
   关闭 #44888，针对 LiteLLM 特殊报错格式进行识别，改善错误提示。
   https://github.com/anomalyco/opencode/pull/54608

9. **#51422 [OPEN] fix(core): 解析已配置的 instructions**
   V2 保留了 `instructions` 配置字段却未移植解析器，本 PR 恢复该能力（#51341/#51262）。
   https://github.com/anomalyco/opencode/pull/51422

10. **#54633 [OPEN] fix(app): 命令面板立即显示已知会话**
    消除输入时最近会话行被丢弃、需等待 100ms 防抖的问题，改善交互流畅度。
    https://github.com/anomalyco/opencode/pull/54633

---

## 五、功能需求趋势

- **V2 迁移与稳定性**：大量 Issue/PR 围绕 V2 展开，涵盖配置解析（instructions、request.body）、服务重启、目录选择器回归等，社区正集中消化 V2 的过渡成本。
- **Windows 一等公民化**：升级/安装、行尾处理（CRLF）、PowerShell 编码、包管理器识别等 Windows 问题密集出现，跨平台体验成为刚需。
- **Reasoning / 思维链渲染**：内联 `<think>`/`</think>` 泄漏成为今日突发热点，涉及多个 provider，社区要求统一拆分为可折叠 reasoning part。
- **Provider 与模型适配**：OpenAI 服务层级（ultrafast）、Zen、Go、LiteLLM、Anthropic tool-search 等适配持续演进，错误识别与配额策略受关注。
- **性能与资源占用**：inotify watch 放大、流式 delta 渲染的线性开销等性能问题进入维护视野。
- **TUI/键位体验**：readline 键位（ctrl+f/b）、Home/End、ctrl+backtick、空白 toast 等交互细节被持续打磨。

---

## 六、开发者关注点

1. **Windows 升级链路是最大痛点**：从 `opencode upgrade` 静默失败（#37055）、无法就地替换运行中的 exe（#51755、#52025）到 curl/bash 安装脚本不适配 Windows，升级体验被反复投诉。今日多个 CLI 升级相关 PR（#54625/#54622/#54616）正是集中回应。

2. **V2 配置"存而不用"**：`agent.compaction.variant`（#41578）、`agent.request.body/settings`（#49550）、`instructions`（#51422）、per-agent temperature（#54629）等问题指向同一模式——配置 schema 接受但运行时未传递，配置系统与执行路径脱节。

3. **配额与计费逻辑易引发连锁故障**：Go 5 小时限额封锁全部模型（#49014）、Zen 充值后全部模型 403/410（#54379）、explore 子代理免费额度被拒（#49723），说明额度策略缺乏隔离，单点触发会波及全量模型。

4. **Provider 边界可靠性**：OpenAI 间歇性 503（#52269）与 OpenTunnel 多类服务错误（#54596）显示上游依赖的稳定性直接影响可用性，且缺乏可自愈/可重置机制（#54624 请求手动丢弃卡住的隧道）。

5. **交互细节影响口碑**：剪贴板（#4283）、Home/End（#54519）、ctrl+backtick（#54559）、空白错误 toast（#54614）等看似细小，但因高频触达用户，评论与点赞量往往很高，是社区情绪的重要来源。

---

*数据来源：github.com/anomalyco/opencode ｜ 报告日期：2026-10-12*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-10-12

> 数据来源：github.com/badlogic/pi-mono（earendil-works/pi）

---

## 1. 今日速览

过去 24 小时社区讨论高度集中于**连接稳定性与流式会话的边界问题**：`openai-codex` 卡在 `Working...`（#4945，82 条评论）与 Anthropic 订阅请求在整点/半点挂起（#10019）成为最热的两个长尾问题。同时，**compaction（上下文压缩）链路**暴露出多个独立缺陷（思考级别不可配、transport 设置被忽略、状态指示器配色），说明压缩已从"能用"进入"可精细控制"阶段。PR 侧则以 TUI 渲染修复、会话写入性能优化和 Linux 原生打包为主。

---

## 2. 版本发布

过去 24 小时**无新版本发布**。社区反馈多针对 1.1.0（如 `pi-durable` 1.1.0、SDK 1.1.0），可视为该版本发布后的集中回归期。

---

## 3. 社区热点 Issues（Top 10）

**1. #4945 [OPEN][inprogress] openai-codex 连接可靠性问题** — 👍35 / 💬82
`gpt-5.5` 下 TUI 偶发卡死在 `Working...`，无流式文本、无工具调用、无报错，只能按 Esc 中止并留下一条被中断的 assistant 轮次。**今日绝对热点**，高赞高讨论说明影响面广且复现不稳定，是当前最高优先级的可靠性问题。
🔗 https://github.com/earendil-works/pi/issues/4945

**2. #10267 [OPEN][prio:p0] `before_agent_start` 注入的提示词被丢弃，导致整段 prompt 重复计费**
在无用户输入触发的运行（后台任务通知、plan-mode 续跑、重试、恢复）中，扩展返回的 `systemPrompt` / `systemPromptOptions.section` 被丢弃。**P0 且直接造成成本损失**，属于扩展机制与计费链路的交叉缺陷。
🔗 https://github.com/earendil-works/pi/issues/10267

**3. #7553 [OPEN][to-discuss] 为 compaction 提供独立的 thinking level / model**
压缩（自动与手动）无条件复用当前会话的思考级别，无法单独控制摘要的思考预算。对于在推理模型上开自动压缩的用户，摘要成本与正常轮次强耦合，是**成本与可控性**议题。
🔗 https://github.com/earendil-works/pi/issues/7553

**4. #10019 [OPEN] Anthropic 订阅请求在 :00/:30 UTC 挂起（200 + pings，无 message_start）**
会话偶发冻结、spinner 不停。作者对照 Claude Code 后定位到与整点/半点相关的时间模式，对使用订阅账号的用户影响明显。
🔗 https://github.com/earendil-works/pi/issues/10019

**5. #10656 [OPEN][bug] DASHSCOPE/Qwen 429 `insufficient_quota` 被误判为不可重试的计费错误**
阿里云百炼在**瞬时 TPS/TPM 限流**时也会返回该错误码，但 Pi 将其归类为计费耗尽，直接不重试。属于 provider 兼容性判断错误，影响国内 Qwen 用户。
🔗 https://github.com/earendil-works/pi/issues/10656

**6. #9656 [OPEN][bug] Windows + Zellij 下滚轮滚动的是提示历史而非对话正文**
`Windows → Alacritty → Zellij → Pi` 链路下全屏滚轮行为异常；直连终端与 Linux+tmux 正常。典型的**终端多路复用器兼容**问题。
🔗 https://github.com/earendil-works/pi/issues/9656

**7. #8617 [OPEN] Codex：图片密集的工具结果改用文件引用**
建议将图片字节本地化，出站时以 ChatGPT `file_id` 引用替代每次请求重放 base64。作者已有本地原型，属于**上下文成本优化**方向的高价值提案。
🔗 https://github.com/earendil-works/pi/issues/8617

**8. #10705 [OPEN] `agent_settled` 中调用 `abort()` 已 resolve，但已排队的 continuation 仍会执行**
SDK 1.1.0 中，宿主停止会话后扩展仍会发起新的 provider 请求。**会话生命周期语义不严谨**，对嵌入式/无人值守集成尤为危险。
🔗 https://github.com/earendil-works/pi/issues/10705

**9. #9432 [OPEN] 允许 `session_start` 扩展向基础系统提示词追加稳定上下文**
请求新增 append-only 的 `systemPromptAppend`，便于扩展注入项目级说明。与 #10267 相呼应，反映**扩展对系统提示词的读写控制**正成为核心诉求。
🔗 https://github.com/earendil-works/pi/issues/9432

**10. #10812 [CLOSED][bug] 已保存的默认模型不在目录中时被静默回退到其他模型**
`settings.json` 指定的模型在 provider 重命名后失效，新会话无警告地切换到别的模型。虽已关闭，但暴露**配置校验与显式报错**的缺口。
🔗 https://github.com/earendil-works/pi/issues/10812

---

## 4. 重要 PR 进展

**1. #10795 [OPEN] fix(ai): 从 Anthropic 错误工具结果中剔除图片**
修复 #10794，避免错误态工具结果携带图片导致请求失败。附带修复前后与排查会话链接，验证充分，是当前唯一仍开放的 PR。
🔗 https://github.com/earendil-works/pi/pull/10795

**2. #10805 [CLOSED] feat(coding-agent): 支持扩展会话 cwd**
为 `ctx.newSession()` 增加 `cwd`、`ctx.switchSession()` 增加 `cwdOverride`，使扩展可在 `pi.exec` 创建 Git worktree 后把会话切到该检出目录。**多工作树 / 子代理工作流的关键补全**。
🔗 https://github.com/earendil-works/pi/pull/10805

**3. #10789 [CLOSED] feat(session): 合并 session-JSONL 写入系统调用**
文件创建与重写由"每条目一次写"改为**单次写全部缓冲条目**，追加仍保持同步持久化。属于底层 I/O 性能优化，长会话收益明显。
🔗 https://github.com/earendil-works/pi/pull/10789

**4. #10774 [CLOSED] fix(tui): 在 herdr 中启用 kitty 图片**
#10573 使 herdr 返回 `images: null`，1.1.0 因此破坏了 herdr 内联图片。该 PR 恢复 kitty 图形协议支持，属**回归修复**。
🔗 https://github.com/earendil-works/pi/pull/10774

**5. #10810 [CLOSED] fix(tui): CompactionStatusIndicator 支持覆盖 colorFn**
修复 #10809，未设置 `borderColor` 的主题下压缩状态指示器无法使用 reasoning 级别配色。与 #10809 形成"提 issue → 当日修复"的闭环。
🔗 https://github.com/earendil-works/pi/pull/10810

**6. #10751 [CLOSED] feat(coding-agent): 采用 pi.dev 配置 schema**
将 pi.dev 的 schema 端点作为生成配置 schema 的规范 `$id`，内置主题改用已发布 schema，并补充 models/settings/keybindings/theme 的 schema 文档。**提升配置生态与工具链一致性**。
🔗 https://github.com/earendil-works/pi/pull/10751

**7. #10813 [CLOSED] feat(ai): 保留客户端加载的 Anthropic 工具引用**
与 #10795 同属 Anthropic 工具/图片处理链路，反映该模块近期活跃度较高。
🔗 https://github.com/earendil-works/pi/pull/10813

**8. #10784 [CLOSED] feat(coding-agent): 为 Linux 添加 deb 与 rpm 打包**
Closes #10783，把已发布的独立二进制重新打包为 `.deb` / `.rpm`，让 Debian/RHEL 用户可用系统包管理器安装并获得 `dpkg`/`rpm` 追踪。**发行渠道扩展**，社区已连提两个同主题 issue。
🔗 https://github.com/earendil-works/pi/pull/10784

---

## 5. 功能需求趋势

- **上下文压缩（Compaction）精细化**：#7553（独立思考级别）、#10781（transport 设置未生效）、#10809（状态指示器配色）三项独立反馈同周出现，压缩正从单一功能演变为需要独立配置、可观测的子模块。
- **多模型 / Provider 兼容性**：#10656（DashScope 429 误判）、#10578（Qwen chat template 不发 `reasoning_effort`）、#10791（自定义 provider 支持分类器模型）、#10812（模型重命名后静默回退）——非 OpenAI/Anthropic 阵营的适配仍是主要缺口。
- **成本与 Token 效率**：#10267（prompt 重复计费）、#8617（图片改用 file_id 引用）直指 token 与费用控制。
- **无人值守 / 嵌入集成**：#10799（输出上限静默停止、无续跑路径）、#10705（abort 后 continuation 仍执行）、#10811（故障写入失败导致任务无限重跑并饿死事件循环）集中反映 headless/SDK 场景的健壮性不足。
- **扩展系统能力边界**：#9432、#10267、#10805 均围绕扩展对系统提示词、会话 cwd 的控制权展开。
- **终端与 IDE 集成**：#9656（Zellij 滚轮）、#10788（VS Code 中 Kitty 图片被裁剪后消失）、#10800（`terminal_wait` 误匹配输入回显）。
- **发行与安装**：#10783 / #10786（deb/rpm 打包，已由 #10784 落地）。

---

## 6. 开发者关注点

1. **流式会话的"静默失败"最令人困扰**：卡在 `Working...`（#4945）、整点挂起（#10019）、输出上限静默结束（#10799）、模型静默回退（#10812）——共同点是**无错误、无提示**，用户只能靠 Esc 或重启恢复。可观测性与显式报错是最高频诉求。
2. **会话生命周期语义不严谨**：`abort()` 后仍发起请求（#10705）、`turn_end` 无法解析 assistant 条目而丢弃整轮（#10048）、故障写入失败导致无限重跑（#10811）。对构建在 SDK 之上的宿主程序而言，这些是可靠性红线。
3. **扩展 API 的控制权不足**：无法独立控制 compaction 的思考级别，无法向系统提示词追加稳定上下文，注入内容在非用户触发的运行中被丢弃（#7553 / #9432 / #10267）。
4. **多终端环境兼容成本高**：Zellij、tmux、Alacritty、Kitty、VS Code、herdr、xterm.js 各有一套行为差异，TUI 渲染与输入处理需要逐个适配（#9656、#10788、#10774、#10393）。
5. **非主流 Provider 的适配质量**：错误码语义（#10656）、模板参数（#10578）、传输方式（#10781）均存在与实际服务行为脱节的情况。
6. **安装与分发体验**：社区希望摆脱 `curl | sh`，接入系统包管理器（#10783 / #10786 / #10784），表明 Pi 正在从开发者自用工具向更广泛分发演进。

---

*本日报基于过去 24 小时内更新的 41 条 Issue（展示 30 条）与 8 条 PR 生成，无新版本发布。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-10-12

> 数据来源：[github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)

---

## 一、今日速览

今日社区最核心的动态是 **Managed Agent 双路径架构（Issue #12380）持续升温**，评论数已达 52 条，围绕 Session 所有权、Workspace 绑定与可恢复工具执行展开长线设计讨论。与此同时，**v0.25.1 稳定版正式发布**，并同步推出 TypeScript SDK v0.1.19 与 Desktop v0.25.1。此外，Web Shell 成为近期问题与需求的高发区，涉及侧边栏置顶、会话回顾设置失效、多分屏连接池耗尽等多个议题。

---

## 二、版本发布

| 版本 | 说明 |
|---|---|
| **v0.25.1** | 主稳定版发布，无已知破坏性变更。修复了 Android Activity 重建后恢复文本连接与已验证的 session/workspace 路由。 |
| **v0.25.1-nightly.20261011** | 每日构建，包含 `fix(managed-agent)` 连接器与 broker 健壮性修复等。 |
| **sdk-typescript-v0.1.19** | TypeScript SDK 发布，捆绑 CLI 版本 0.25.1。 |
| **desktop-v0.25.1** | 桌面端发布，包含 serve 会话创建失败诊断保留、SDK-Java managed runtime 等变更。 |

🔗 [Releases 页面](https://github.com/QwenLM/qwen-code/releases)

---

## 三、社区热点 Issues（精选 10 条）

**1. #12380 — proposal(serve): 定义 Managed Agent 双路径架构与分阶段交付**
保留现有 TypeScript agent loop，使模型推理独立于工具环境供给，赋予 Session 持久所有权与可恢复工具执行。**今日讨论度最高（52 条评论）**，是当前架构演进的总纲。
🔗 [Issue #12380](https://github.com/QwenLM/qwen-code/issues/12380)

**2. #13492 — XML 工具调用恢复会丢弃包含引号工具标记的外层调用**
已部分修复，剩余外层调用恢复范围待跟进（PR #13579 尚未合并）。属于核心解析正确性问题，影响工具调用可靠性。
🔗 [Issue #13492](https://github.com/QwenLM/qwen-code/issues/13492)

**3. #13807 — macOS Foundation Models 作为 Fast Model 时报 "ERROR 500 unsupported generation guide"**
使用内置 `fm serve` 作为快速模型时，工具摘要正常但生成失败。反映新模型后端集成兼容性问题。
🔗 [Issue #13807](https://github.com/QwenLM/qwen-code/issues/13807)

**4. #13004 — perf(memory): 在无操作提取后增加有界冷却期**
避免每次成功用户轮次后都触发新的 fork extractor，是内存/性能优化方向的重要提案。
🔗 [Issue #13004](https://github.com/QwenLM/qwen-code/issues/13004)

**5. #13680 — [P1] 桌面端 Linux 捆绑的 ripgrep 被后链接重写导致启动 SIGSEGV**
静态 PIE 可执行文件被重写（添加 RUNPATH、移动 phdrs），每次启动探测都崩溃。**高优先级平台阻塞问题**。
🔗 [Issue #13680](https://github.com/QwenLM/qwen-code/issues/13680)

**6. #13908 — Web Shell 4-5 个分屏耗尽 HTTP/1.1 连接池（6）**
macOS 桌面端分屏视图中每个面板出现 "Connection lost: Fetch is aborted"。1-3 个面板正常，是并发架构层面的实际痛点。
🔗 [Issue #13908](https://github.com/QwenLM/qwen-code/issues/13908)

**7. #13911 — Web Shell 自动回顾忽略 "Show Session Recap" 设置**
终端 CLI 中该设置生效，Web Shell 中却仍然弹出，属于设置一致性缺陷。
🔗 [Issue #13911](https://github.com/QwenLM/qwen-code/issues/13911)

**8. #13874 — 子结果转发在 output_text Part 被分割时插入多余 "\n"**
可能破坏子代理答案中的代码、JSON 或标识符，属于 Agent Teams 数据完整性 bug。
🔗 [Issue #13874](https://github.com/QwenLM/qwen-code/issues/13874)

**9. #13920 — CJK 队友名称在 sanitizeName 中被折叠为空（Agent Teams spawn）**
中文名如 `研究员` 生成失败，暴露国际化名称处理缺陷，对中文社区尤为相关。
🔗 [Issue #13920](https://github.com/QwenLM/qwen-code/issues/13920)

**10. #10684 — feat(memory): 一等公民自托管语义记忆（本地 memory MCP server 或 embedding 召回）**
当前 auto-memory 仅支持关键词/标题召回，用户呼吁加入语义召回。长期高关注功能方向。
🔗 [Issue #10684](https://github.com/QwenLM/qwen-code/issues/10684)

**其他值得留意**：#13924（Flathub 发布 Linux 桌面端）、#13656（qwen.ai 提供桌面下载入口）、#13925（发布说明重复 PR）、#13432（compaction 忽略服务端上报上下文上限）。

---

## 四、重要 PR 进展（精选 10 条）

**1. #13889 — feat(managed-agent): 启用 H3 Monitor 与后台 Shell 门控**
`monitor_run` 加入启用域，`shell` 加入启用的 `child_run` 类型，使 Session 可通过生产配置提交二者。
🔗 [PR #13889](https://github.com/QwenLM/qwen-code/pull/13889)

**2. #13816 — fix(managed-agent): 工具轮次进入 recovery blocked 时交还 Workspace mount**
新增 broker 内部 mount-release 路由，仅释放受管 Session 持有的 Workspace 执行挂载。
🔗 [PR #13816](https://github.com/QwenLM/qwen-code/pull/13816)

**3. #13914 — fix(web-shell): 自动回顾触发时遵循会话回顾设置**
与 CLI 对齐，自动触发受 "Show Session Recap" 门控（默认关闭）。
🔗 [PR #13914](https://github.com/QwenLM/qwen-code/pull/13914)

**4. #13919 — fix(core): 允许按 provider 选择退出强制工具选择**
新增 `supportsForcedToolChoice` 能力（默认 true），让 OpenAI 兼容端点可拒绝强制工具调用。
🔗 [PR #13919](https://github.com/QwenLM/qwen-code/pull/13919)

**5. #13599 — feat(core): 在自动压缩前按剩余 headroom 收缩工具结果**
会话接近自动压缩时，将下一请求的工具结果收缩至剩余空间，属上下文管理优化。
🔗 [PR #13599](https://github.com/QwenLM/qwen-code/pull/13599)

**6. #13864 — fix(sdk): 释放销毁后创建的重连传输**
使 TypeScript SDK 重连包装器的销毁成为终态，避免异步替换在销毁后仍被安装。
🔗 [PR #13864](https://github.com/QwenLM/qwen-code/pull/13864)

**7. #13885 — fix(cli): 在排空内存任务前输出 headless 结果**
先交付无头终态 `result`，再等待受管内存任务，避免内存任务阻塞结果返回。
🔗 [PR #13885](https://github.com/QwenLM/qwen-code/pull/13885)

**8. #13748 — fix(acp-bridge): 显示已声明的 Channel 提交**
对 Channel 来源会话使用非空原始文本声明作为显示投影，改善用户回显与持久记录。
🔗 [PR #13748](https://github.com/QwenLM/qwen-code/pull/13748)

**9. #13900 — fix(desktop): 让 desktop-latest 发布说明指向当前版本**
稳定版桌面发布时同步更新 `desktop-latest` 的标题与说明，修复发布说明漂移问题。
🔗 [PR #13900](https://github.com/QwenLM/qwen-code/pull/13900)

**10. #13325 — fix(managed-agent): 关闭 #12692 的 R2 关键评审发现**
修复 8 个 Critical 发现，包括 InnoDB 锁顺序反转、session-list keyset 分页等问题。
🔗 [PR #13325](https://github.com/QwenLM/qwen-code/pull/13325)

**其他值得关注**：#13215（provider 确认响应适配线缆限制）、#12561（托管记忆变更时通知集成方）、#13642（终端 JDBC 历史有界保留）、#13292（E2E 重试前等待 60s，已合并）。

---

## 五、功能需求趋势

从今日 Issues 可提炼出以下社区最关注的方向：

1. **Web Shell / 桌面端体验完善**（最高频）
   - 侧边栏工作区置顶（#12444、#13888）
   - 键盘快捷键（#13175：Session Overview、Split View）
   - 分屏并发连接问题（#13908）
   - 会话回顾设置一致性（#13911）

2. **Managed Agent 与多智能体架构**
   - 双路径架构与分阶段交付（#12380）
   - 前台 Shell profile 准入（#13271）
   - Agent Teams 名称国际化（#13920）与子结果转发完整性（#13874）

3. **记忆与上下文管理**
   - 语义记忆/embedding 召回（#10684）
   - 自动记忆提取冷却策略（#13004）
   - 索引行长度限制未强制（#13910）
   - 工具结果按 headroom 收缩（#13599）

4. **平台分发与安装**
   - Flathub 发布（#13924）
   - qwen.ai 桌面下载入口自动化（#13656）
   - Linux ripgrep 启动崩溃（#13680）

5. **配置健壮性**
   - MCP 配置 UTF-8 BOM 解析（#13710、#13595）
   - 发布说明重复（#13925）

---

## 六、开发者关注点

综合开发者反馈，当前痛点与高频需求集中在以下几类：

- **平台稳定性**：Linux 桌面端 ripgrep 崩溃（#13680，P1）与 Web Shell 分屏连接池耗尽（#13908）是阻塞级问题，直接影响可用性。
- **设置一致性**：同一设置（如 Session Recap）在 CLI 与 Web Shell 间行为不一致，易造成用户困惑。
- **发布流程质量**：发布说明重复历史 PR（#13925）与 Flyway 迁移版本校验漏洞（#13922）反映 CI/CD 流程需加固。
- **国际化支持**：CJK 名称处理失败（#13920）说明非英文场景测试覆盖不足，对中文开发者社区尤其重要。
- **数据完整性**：子代理结果被插入多余换行（#13874）、XML 工具调用恢复丢调用（#13492）等属于核心链路可靠性问题。
- **评审债务管理**：多个 Issue（#13869、#13926、#13809）记录"因 scope 上限而推迟的评审发现"，显示 PR 体量控制与评审闭环是团队持续面临的工程挑战。

---

*本日报基于 GitHub 公开数据整理，如需持续跟踪可关注上述 Issue 与 PR 的后续进展。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 · 2026-10-12

> 数据来源：github.com/Hmbown/DeepSeek-TUI（条目链接指向 codewhale-hq/Codewhale 仓库）
> 说明：过去 24 小时内 Issues 与 PR 各更新 8 条，本日报已全部覆盖（不足 10 条的部分以实际数量为准）。

---

## 一、今日速览

1. **无新版本发布**，社区焦点集中在 **v0.10.2 发布前的收尾**：维护者 Hmbown 亲自开出 readiness 分支（PR #6957），多条 0.10.1/0.10.2 的回归问题被集中标记 `v0.10.2`。
2. **后台任务的可观测性成为今日最大痛点**：长命令转入后台后不可见、无法停止、Full Access 反而阻塞后台 API，相关 Issue 连续出现。
3. **会话持久化与恢复链路问题突出**：超 8 MiB 会话无法 resume/fork、含原始 sub-agent handoff 的会话被拒绝恢复，且错误信息均不给出补救路径。

---

## 二、版本发布

过去 24 小时内**无新 Release**。当前工作重心为 **v0.10.2 的发布准备**（见 PR #6957），0.10.1 在部分平台与场景下的回归问题（Windows 启动、ChatGPT 登录、后台任务可见性）是阻塞项。

---

## 三、社区热点 Issues（共 8 条）

**1. #6944 [OPEN] 长任务转后台后完全不可见，Full Access 还阻塞了唯一的后台 API**
`bug / ux / v0.10.2` · 作者 Hmbown · 1 条评论
所有长命令都以前台 `bash` 形式发布，超时（如 240s）后静默转为后台 `shell_daemon`，但用户既看不到进度也无法干预，且 Full Access 模式反而阻断了后台 API。
🔗 https://github.com/codewhale-hq/Codewhale/issues/6944

**2. #6931 [OPEN] 每个 Bash/shell 操作都应可检查、可停止**
`bug / tui / ux / v0.10.2` · 作者 Hmbown
已完成的长输出被折叠成 `N lines omitted`，仍在运行的静默递归搜索只显示 `stale · no output 2m 07s`，新卡片到来后用户无法可靠定位正在跑的任务。与 #6944 同属"后台/长任务可观测性"主线。
🔗 https://github.com/codewhale-hq/Codewhale/issues/6931

**3. #6925 [OPEN] ChatGPT 登录因不支持的 `originator` 参数被拒（HTTP 400）**
`bug / providers` · 作者 Hmbown
0.10.1 的 ChatGPT 登录在授权前即返回 `invalid_authorize_request`；通过 2026-10-08 的匿名初始授权探测，已定位到一个多出来的 query 参数。属于 provider 认证链路的发布阻塞项。
🔗 https://github.com/codewhale-hq/Codewhale/issues/6925

**4. #6945 [OPEN] Workflow 中"验证门阻塞自身角色"导致死锁，而非在计划准入时失败**
`bug / workflow-runtime` · 作者 Hmbown
某 verify gate 声明 `blocks_role: "implement"` 且自身属于 implement 阶段，形成自阻塞，运行在最昂贵阶段前才以 `spawn rejected` 崩溃。应在 plan admission 阶段就拒绝。
🔗 https://github.com/codewhale-hq/Codewhale/issues/6945

**5. #6955 [OPEN] 超过 8 MiB 的会话文档无法恢复或 fork，且拒绝时不给出任何补救措施**
`needs-triage` · 作者 7jrxt42BxFZo4iAnN4CX
journal 膨胀把会话文档推过大小上限，resume/fork 直接失败。作者已检索过 `transport bound`、`exceeds full-history` 等相关 issue（最接近的是 #6842：journal 无上限）。
🔗 https://github.com/codewhale-hq/Codewhale/issues/6955

**6. #6954 [OPEN] `codewhale resume` 拒绝任何仍持有原始 sub-agent handoff 的会话**
`needs-triage` · 作者 7jrxt42BxFZo4iAnN4CX
规范化确认流程会比较 Engine 恢复出的消息与保存文档，导致含原始 handoff 的历史无法恢复。与 #6955 同属"会话恢复正确性"问题簇，报告者搜索关键词均无重复，说明是较新的边界场景。
🔗 https://github.com/codewhale-hq/Codewhale/issues/6954

**7. #6953 [OPEN] Windows 10 1607 上 v0.10.1 无法启动：`DeriveCapabilitySidsFromName` 加载期解析失败（0xC0000139）**
`bug / needs-triage` · 作者 LmeSzinc
从 v0.10.0 升级到 v0.10.1 后，Windows 10 Pro 1607（build 14393.447）在程序运行前即弹出加载器错误。典型的系统 API 最低版本要求导致的兼容性回归。
🔗 https://github.com/codewhale-hq/Codewhale/issues/6953

**8. #6933 [OPEN] 在不支持的路由上隐藏原生 FIM（fill-in-the-middle）工具**
作者 Hmbown
原生 FIM 的注册与执行复用同一路由谓词，使不支持的客户端不再对外暴露该工具；显式的动态/用户工具不受影响。属于工具暴露面的清理，风险较低但影响客户端兼容预期。
🔗 https://github.com/codewhale-hq/Codewhale/issues/6933

**社区反应小结**：本批 Issue 全部为 0 👍，评论数最多仅 1 条——社区处于"维护者主导、快速登记"的状态；报告者以维护者本人（Hmbown）与少数高频贡献者（7jrxt42BxFZo4iAnN4CX、LmeSzinc）为主，说明当前阶段是**发布前的内部质量收敛**，而非大众功能讨论。

---

## 四、重要 PR 进展（共 8 条）

**1. #6957 [OPEN] 0.10.2 readiness：先让 main 变绿，再合入发布阻塞修复**
作者 Hmbown · 2026-10-11 创建
0.10.2 发布就绪分支，每个 commit 都是 main 之上的自包含切片，随 main 推进持续 rebase。**这是今日最关键的一条 PR**，直接决定 0.10.2 能否发布。
🔗 https://github.com/codewhale-hq/Codewhale/pull/6957

**2. #6959 [OPEN] feat(api)：通过 Runtime API 读写工作区的项目信任（project trust）状态**
作者 gaord
非 TUI 客户端（作者正在开发的 VS Code 扩展）此前无法查看或记录信任判定，只能依赖终端执行 `/trust on --save`。该 PR 让"引擎对不受信工作区静默跳过的一切"变得可见、可写。
🔗 https://github.com/codewhale-hq/Codewhale/pull/6959

**3. #6952 [CLOSED] fix(workflow)：在计划准入时拒绝"阻塞自身角色"的 gate**
作者 Lstarsky0
直接对应 Issue #6945，把运行期死锁提前到 plan admission 阶段报错，避免在最昂贵阶段才失败。已关闭，预计已合并。
🔗 https://github.com/codewhale-hq/Codewhale/pull/6952

**4. #6950 [CLOSED] feat(plugins)：新增 CLI 安装与应用内 OAuth 登录**
作者 LIghtJUNction
在 #6805 引入的 host-managed OAuth provider 基础上，补齐两条工作流：无需另开终端即可登录，以及从源码安装插件的 CLI 入口。
🔗 https://github.com/codewhale-hq/Codewhale/pull/6950

**5. #6958 [OPEN] test(sessions)：picker 搜索测试不再依赖临时目录名**
作者 Lstarsky0
`session_control_acceptance::tests::tui_and_api_listings_agree` 在 macOS 上偶发失败（返回全部会话而非过滤结果），根因是测试与 `TempDir` 路径名耦合。属于 CI 稳定性修复。
🔗 https://github.com/codewhale-hq/Codewhale/pull/6958

**6. #6956 [OPEN] test(subagent)：worktree 清理时的 git 失败不应判定为测试失败**
作者 Lstarsky0
`failed_spawn_removes_its_worktree_despite_post_checkout_hook_output` 在 ubuntu-latest 上偶发失败（CI run 38057245676），且发生在未改动 subagent 代码的 #6952 上，确认为环境性 flaky。
🔗 https://github.com/codewhale-hq/Codewhale/pull/6956

**7. #6393 [OPEN] Draft：echolocation、token diet 与 fork-prefix 缓存继承**
作者 AdityaVG13 · 自 2026-09-21 持续更新
设计讨论型草稿（非合并候选），涉及 token 消耗削减范围、缓存继承契约形态与试验脚手架。方向已获维护者正面反馈。反映社区对**上下文成本与缓存复用**的长期兴趣。
🔗 https://github.com/codewhale-hq/Codewhale/pull/6393

**8. #6873 [OPEN] chore(deps)：2026-10-06 安全依赖升级（bot 自动）**
作者 devin-ai-integration[bot]
夜间安全扫描，将传递依赖 `source-map-js` 1.2.1 → 1.2.2（经 `postcss@8.5.23` 引入），修复 GHSA-68fv-2mgg-jv7q（高：索引 source-map 段偏移导致的 event-loop DoS）。
🔗 https://github.com/codewhale-hq/Codewhale/pull/6873

**PR 侧观察**：8 条中 2 条为测试稳定性修复（#6956、#6958）、1 条为自动安全升级（#6873），说明主干近期存在较明显的 CI flaky 与依赖维护压力；同时 #6957 的"一仓库一草稿 PR"策略表明发布流程正在收敛。

---

## 五、功能需求趋势

从本批 Issue/PR 可提炼出以下方向：

1. **长任务 / 后台作业的可观测性与控制权**（#6944、#6931）——今日最集中的诉求：后台化不应等于"消失"，需要可检查、可停止、可追溯。
2. **会话持久化的容量与恢复语义**（#6955、#6954、#6842）——journal 无上限、文档超限、handoff 兼容性，构成一条清晰的"会话生命周期"问题链。
3. **Workflow 运行时的健壮性**（#6945 / PR #6952）——静态可判定的配置错误应在准入期拦截，而非运行期崩溃。
4. **Provider 认证与登录链路**（#6925、PR #6950）——ChatGPT OAuth 参数修复、插件 OAuth 与 CLI 安装，认证体验成为发布阻塞项。
5. **非 TUI 客户端 / IDE 集成**（PR #6959、#6933）——为 VS Code 扩展等外部客户端开放 Runtime API（信任状态），并收敛工具暴露面。
6. **性能与 token 成本**（PR #6393）——echolocation、token diet、fork-prefix 缓存继承等上下文优化方向。
7. **跨平台兼容性**（#6953）——Windows 老版本（1607）加载期符号解析失败，属于发行版最低系统要求问题。

---

## 六、开发者关注点（痛点与高频需求）

1. **"拒绝但不给补救"是最强烈的负面反馈**：#6955 明确写道 "the refusal names no remedy"，#6954 同样是静默拒绝。**错误信息应给出可执行下一步**，这是本批反馈中最一致的诉求。
2. **静默失败与状态丢失**：#6925（登录前静默 400）、#6944（超时静默转后台）、#6931（长输出折叠后无法定位）。开发者对"系统悄悄改变了行为却不告知"高度敏感。
3. **发布前质量收敛压力**：v0.10.2 标签下同时挂着 TUI、providers、workflow-runtime、Windows 兼容四类问题，且 CI 存在多条 flaky 测试（#6956、#6958），说明 **CI 稳定性正在拖慢发布节奏**。
4. **可编程接口的诉求在增长**：PR #6959 的动机直接来自"我要写 VS Code 扩展"，社区已不满足于仅通过 TUI 与 `/trust` 命令操作，**Runtime API 的能力边界**将成为下一阶段焦点。
5. **会话数据的长期可靠性**：journal 无界增长（#6842）叠加大小上限（#6955），是长期使用者的真实风险——需要**日志裁剪 / 归档 / 压缩**类机制。

---

*日报完 · 数据截至 2026-10-12 · 过去 24 小时无 Release，Issues 与 PR 各 8 条*

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

# ComfyUI 社区动态日报（2026-10-12）

> 数据来源：github.com/comfyanonymous/ComfyUI

---

## 一、今日速览

今日无新版本发布，社区热度集中在**稳定性与硬件兼容性**上：Windows 平台出现多起 BSOD / 整机冻结报告（RTX 3050 动态显存加载、RTX 3060 跑 MiniMax-H3），同时 Turing 架构 INT8 算子、MPS 后端的边界问题持续暴露。PR 侧则以 `synap5e` 主导的 **assets 资产扫描系统**系列优化最成规模，涵盖性能、启动顺序、损坏数据库恢复与 `/view` 缓存策略。

---

## 二、版本发布

过去 24 小时无新 Release。

---

## 三、社区热点 Issues（精选 10 条）

**1. #16246 BSOD in dxgmms2.sys on 6GB RTX 3050（v0.35.0 回归）** ⭐ 3 👍 / 11 评论
从 v0.34.6 升级到 v0.35.x（`comfy-aimdo` 0.4.15 → 0.5.3）后，一天内 4 次内核蓝屏，签名统一指向 Windows 显存管理器 `dxgmms2.sys`。这是典型的**版本回归 + 低显存设备崩溃**组合，是今日最严重的稳定性问题。
🔗 https://github.com/comfyanonymous/ComfyUI/issues/16246

**2. #16946 [Windows][RTX 3060 12GB] MiniMax-H3 反复冻结整机**
单卡 12GB + 64GB 内存环境下运行 MiniMax-H3 导致整机冻结，需强制重启，且**无 Python/CUDA OOM traceback**。无堆栈可查意味着定位成本极高，社区复现意愿强。
🔗 https://github.com/comfyanonymous/ComfyUI/issues/16946

**3. #12285 Security: /view 端点符号链接路径穿越（任意文件读取）**
CWE-59，严重级别 High，位于 `server.py` 的 `/view` 端点。该 Issue 自 2026-02 创建至今仍为 OPEN，属于**长期未修复的安全缺口**，值得维护者优先排期。
🔗 https://github.com/comfyanonymous/ComfyUI/issues/12285

**4. #16952 重复 in-flight prompt_id 破坏等优先级堆插入**
提交相同 `prompt_id` + 相同 queue `number` 时，`heapq.heappush` 抛 `TypeError`。这是**队列/调度器核心路径的健壮性缺陷**，影响服务化与自动化调用场景。
🔗 https://github.com/comfyanonymous/ComfyUI/issues/16952

**5. #16916 LTX-2.3 音视频工作流 AttributeError: 'Linear' object has no attribute 'weight'**
搭配 Gemma 3 文本编码器时触发，用户已按文档禁用全部自定义节点仍复现，说明**问题位于核心代码而非插件**，指向 LTX-2.3 集成回归。
🔗 https://github.com/comfyanonymous/ComfyUI/issues/16916

**6. #16431 INT8 ConvRot 在 Turing（SM 7.5）上 M=97..127 失败**
GTX 1650 上 M=96 与 M=128 正常，中间区间报错，并阻断 INT8 ConvRot YuE2 模型运行。属于**量化算子的形状边界 bug**，对老卡用户影响直接。
🔗 https://github.com/comfyanonymous/ComfyUI/issues/16431

**7. #16963 SAM 3D Body：BVH 导出写入错误的 rest skeleton（父级局部 OFFSET）**
`build_bvh` 把 MHR 骨架的父级局部 `translation_offsets` 直接写成 BVH OFFSET，导致重定向失效；另附 fp16 手部精修 dtype 崩溃。3D 导出链路的新功能缺陷。
🔗 https://github.com/comfyanonymous/ComfyUI/issues/16963

**8. #16959 启动报错 Error saving setting Comfy.CustomColorPalettes: TimeoutError: Fetch timeout**
用户定位到 6b747c04 提交之后出现，UI 与 venv 在 NVMe 上，但 LoRA/checkpoint 位于较慢存储。属于**设置保存链路对慢 I/O 环境不友好**的典型问题。
🔗 https://github.com/comfyanonymous/ComfyUI/issues/16959

**9. #16961 [Feature] 按 checkpoint 记忆默认采样器设置**
Civitai 等站点的推荐参数（sampler/scheduler/steps/CFG/分辨率）目前需手动填入 KSampler 与 Empty Latent Image。这是**呼声明确、实现成本可控**的体验型需求。
🔗 https://github.com/comfyanonymous/ComfyUI/issues/16961

**10. #15946 卡在加载 Logo 界面（已 CLOSED / Stale）**
16 条评论，是本期讨论量最高的 Issue，最终以 Stale 关闭。同批还有 #16061 `api.comfy.org 503` 亦被 Stale 关闭，反映**用户支持类 Issue 缺少闭环**。
🔗 https://github.com/comfyanonymous/ComfyUI/issues/15946

> 另注：#2112（post upload/mask 不生效）自 2023-11 创建至今仍 OPEN，属超长尾遗留问题。
> 🔗 https://github.com/comfyanonymous/ComfyUI/issues/2112

---

## 四、重要 PR 进展（精选 10 条）

**1. #16962 perf(assets): 用扫描 walker 列模型并复用其 stats**
解决模型库位于慢速网络共享时，`isfile` 逐个探测 + 重复 stat 导致的元数据往返开销，是资产系统性能优化的核心一环。
🔗 https://github.com/comfyanonymous/ComfyUI/pull/16962

**2. #16929 assets 默认关闭，需 `--enable-assets` 显式开启**
资产数据库、`/api/assets` 路由与后台扫描默认关闭；`--enable-assets` 不再标记废弃，`--disable-assets` 仍可强制关闭。**行为变更类 PR**，影响所有启用资产的用户。
🔗 https://github.com/comfyanonymous/ComfyUI/pull/16929

**3. #16832 fix(assets): comfyui.db 损坏时自动恢复而非启动失败**
数据库 malformed 时此前只能手动删文件或关闭资产功能；且因资产关闭时不读取该文件，损坏可能长期潜伏到首次启用才暴露。健壮性关键修复。
🔗 https://github.com/comfyanonymous/ComfyUI/pull/16832

**4. #16936 启动资产扫描优先编目模型目录**
原逻辑需遍历完整个 input 目录才发送 `assets.seed.fast_complete`，导致大目录下模型库长时间空白。修复后模型列表可更快就绪。
🔗 https://github.com/comfyanonymous/ComfyUI/pull/16936

**5. #16935 feat(server): /view 响应启用 ETag 重校验**
配合 `Cache-Control: no-cache` 与验证器，客户端可去掉 cache-busting 查询串，未变更文件直接返回 304，省去传输与重编码。
🔗 https://github.com/comfyanonymous/ComfyUI/pull/16935

**6. #16927 feat(server): /view 支持 `res=N` 返回缩略 JPEG**
PNG/JPEG 可请求最长边不超过 N 的 quality 85 JPEG，图片网格与缩略图不再下载原图；不放大已有图片。对前端图库性能提升明显。
🔗 https://github.com/comfyanonymous/ComfyUI/pull/16927

**7. #16943 续期 API 节点合作方登录 token**
API 节点 prompt 携带 90 分钟 token，排队或长任务会导致 `Unauthorized`，且可能在供应商任务已启动计费后才失败（BE-998）。属于**影响计费的线上问题修复**。
🔗 https://github.com/comfyanonymous/ComfyUI/pull/16943

**8. #16958 fix(vae): 为 Tiny H3 对齐时序分块**
Tiny H3 使用分组时序布局，但 tiled VAE 沿用 4x 索引尺度会跨组切分，默认设置下 73 帧视频在分块编码时产生 NaN、解码时切片越界。
🔗 https://github.com/comfyanonymous/ComfyUI/pull/16958

**9. #16941 fix: fp8_e4m3fn_fast 在动态显存下回退 bf16 计算**
动态显存下 `fp8_linear` 因权重仍为文件 dtype（CPU 上的 bf16）而从不走 FP8 matmul 路径，修复 #16551，直接关系显存与吞吐收益。
🔗 https://github.com/comfyanonymous/ComfyUI/pull/16941

**10. #16957 fix(minimax): 无 video VAE 时保留配对参考音频**
`MiniMaxH3ReferenceToVideo` 在视频 VAE 未连接时会丢弃参考视频音轨，即使已提供 audio VAE；修复后以音频参考方式编码配对音轨，保持音视频联合生成能力。
🔗 https://github.com/comfyanonymous/ComfyUI/pull/16957

> 其他值得留意：#16681（H3 MLP INT8 输出与索引调制门融合，推理性能）、#16938（MPS 上 RemeshMesh 改用 int32 标签，绕开 int64 `amin` 缺失）、#16915（新增逻辑节点 Pass Or None）、#16960（comfyanonymous 清理过时代码，已 CLOSED）、#16605（BiRefNet 训练归一化与分辨率对齐）、#15335（MaskComposite 增加 max/min 与显式阈值）。

---

## 五、功能需求趋势

1. **资产/模型库管理（本日最大主题）**：约 6 个 PR 集中打磨 assets 系统，涵盖扫描性能、启动顺序、默认开关策略、损坏恢复、缩略图与缓存——说明官方正在把资产库推向可默认启用前的成熟状态。
2. **多模态视频/音频模型支持**：MiniMax-H3（#16946/#16957/#16681）、LTX-2.3 音视频（#16916）、Tiny H3（#16958）、ACE-Step 音乐应用（#16937）构成清晰的新模型接入浪潮。
3. **量化与显存优化**：INT8 ConvRot（#16431）、fp8_e4m3fn_fast（#16941）、dynamic VRAM 加载（#16246）——低显存与老架构 GPU 是主要压力来源。
4. **3D / 网格处理**：SAM 3D Body 导出（#16963）、RemeshMesh MPS 兼容（#16938）显示 3D 链路正在被真实使用并暴露问题。
5. **工作流体验**：按 checkpoint 记忆默认采样参数（#16961）代表用户对"少填表、少出错"的持续诉求。
6. **安全与 API 契约**：#12285 路径穿越长期未修，#16368 从 Cloud 同步 OpenAPI 契约，安全与接口一致性开始被系统化对待。

---

## 六、开发者关注点

- **Windows 平台稳定性是首要痛点**：BSOD（dxgmms2.sys）与整机冻结两类报告同时出现，且**缺少可诊断的 traceback**，开发者难以定位，建议补充内核态/驱动侧日志采集指引。
- **低显存与老架构 GPU 兼容**：6GB / 12GB 卡、Turing（SM 7.5）、MPS 后端均有明确缺陷，量化算子在**特定形状区间**失败的模式（M=97..127）值得补充边界用例测试。
- **版本回归风险**：v0.35.0 的 `comfy-aimdo` 升级直接关联蓝屏，提示依赖升级需附带回滚说明与最低显存要求。
- **慢 I/O 与网络存储场景被忽视**：设置保存 TimeoutError、资产扫描 stat 风暴均指向同一根因，建议统一异步化与超时策略。
- **长任务与排队链路的 token/队列健壮性**：90 分钟 token 过期（#16943）与重复 prompt_id 崩溃（#16952）说明队列与鉴权在长时运行下仍需加固。
- **Issue 闭环质量**：高讨论量 Issue 被 Stale 关闭（#15946、#16061），以及 2023 年的 #2112 仍在 OPEN，反映支持类 Issue 的归档与跟进机制有待改善。
- **安全响应时效**：#12285 高危漏洞挂起逾 8 个月，建议建立安全类 Issue 的优先级标签与 SLA。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama 社区动态日报（2026-10-12）

> 数据来源：[github.com/ollama/ollama](https://github.com/ollama/ollama)

---

## 一、今日速览

过去 24 小时 Ollama 发布 **v0.40.3** 小版本，主要打磨 `ollama launch` 系列命令的提示体验；社区侧则呈现明显的 **"MLX / 工具调用 / 混合架构并发"** 三大痛点集中爆发，仅 24 小时内就有 29 条 Issue、31 条 PR 更新。与此同时，维护者推进了 llama.cpp 升级至 b11521、manifest 校验复用等底层改动，方向指向决策模型与 EmbeddingGemma 2 的正式支持。

---

## 二、版本发布

### v0.40.3
本次为体验类小版本，核心变更：

- **`ollama launch claude` 不再提示 Claude connectors 相关警告** — [PR #18878](https://github.com/ollama/ollama/pull/18878)
- **`ollama launch codex` 不再提示 service tiers 警告** — [PR #18879](https://github.com/ollama/ollama/pull/18879)
- **暂停（Paused）后台模型** 相关改动（Release note 截断，建议关注后续完整说明）

> 整体来看，0.40.x 系列仍在快速迭代，但社区已出现较多针对该分支的回归反馈（见下文 MLX panic 相关 Issue）。

---

## 三、社区热点 Issues

1. **#17778 [OPEN] qwen3.8 报错 `no user query found in messages`（500）**
   52 条评论、30 👍，是今日热度最高的问题。模型在处理工具调用循环时崩溃，涉及 205K 上下文场景。高互动说明 Qwen3.8 的工具调用稳定性是当前焦点。
   🔗 https://github.com/ollama/ollama/issues/17778

2. **#18825 [OPEN] Linux 上无法拉取 `embeddinggemma-2:740m`**
   报错要求 MLX 运行时，但 Linux/Intel 环境并不具备。14 👍，反映跨平台模型分发与运行时依赖判断存在缺陷。
   🔗 https://github.com/ollama/ollama/issues/18825

3. **#18944 [OPEN] `format: json` 时模型无法使用工具调用**
   设置 JSON 格式后模型无法正常发起 tool call，或编造响应。工具调用与结构化输出冲突，是 Agent 场景的关键阻塞点。
   🔗 https://github.com/ollama/ollama/issues/18944

4. **#18856 [OPEN] MLX runner panic（qwen3.6:35b-mlx，0.40.x 回归）**
   0.35.0 正常、0.40.0 崩溃，属明确回归。4 👍，影响 Mac 生产负载。
   🔗 https://github.com/ollama/ollama/issues/18856

5. **#18940 [OPEN] MLX SDPA 内核崩溃（M2 Max，head_dim=256）**
   `Maximum threads per threadgroup is 896 but requested 960`，影响 Qwen3.8 / Gemma4 大 head 维度模型，暴露 Metal 后端线程组配置问题。
   🔗 https://github.com/ollama/ollama/issues/18940

6. **#18938 [CLOSED] `OLLAMA_NUM_PARALLEL` 对混合架构被静默强制为 1**
   调度器将 11 种架构钉死为单 slot，导致所有客户端共享一个 prompt cache。并发能力被隐性限制，社区已配套提出 PR。
   🔗 https://github.com/ollama/ollama/issues/18938

7. **#18942 [OPEN] Go API 工具调用参数丢失数值精度**
   `9007199254740993` 被解码为 `9007199254740992`，在对话历史回传时产生错误。对金融/ID 类参数是严重隐患。
   🔗 https://github.com/ollama/ollama/issues/18942

8. **#18926 [OPEN] Ollama Cloud：glm-5.3 流式响应不结束，客户端挂起**
   模型已完成全部输出，但 stream 永不终止，进程空转。云服务端流终止逻辑存在问题。
   🔗 https://github.com/ollama/ollama/issues/18926

9. **#18796 [OPEN] 第二次 `ollama run` 卡死（RPi5 / Debian 13）**
   首次拉取模型正常，后续运行无输出。17 条评论，ARM + systemd 部署场景的典型问题。
   🔗 https://github.com/ollama/ollama/issues/18796

10. **#18698 [OPEN] 请求支持 K2 Horizon 模型族（k2-horizon）**
    MBZUAI 发布的 0.9B–36B MoE 系列，已有官方 GGUF。6 👍，代表社区对新模型架构接入的持续诉求。
    🔗 https://github.com/ollama/ollama/issues/18698

> 其他值得留意：#18924（rnj-1 触发 `is_swa_any` 断言）、#18948（OpenAI 兼容端点 `timings.prompt_per_second` 被缓存命中率放大）、#18943（`reasoning_effort: xhigh` 被改写为 `max` 导致 Qwen3.8 模板 500）、#18447（偶发 "model not found" 规范化 bug）。

---

## 四、重要 PR 进展

1. **#18917 llama.cpp 升级至 b11521，支持决策模型与 EmbeddingGemma 2**
   将 `/v1/systemone` 请求直接交给 llama.cpp，移除 Ollama 自研 scorer 与 Clef 补丁，架构简化意义重大。
   🔗 https://github.com/ollama/ollama/pull/18917

2. **#18947 server：推理路由复用已验证 manifest 与已加载模型**
   在 generate / chat / embed / systemone 间共享校验查找结果，减少冷启动开销，同时补强 Windows 场景的文件校验。
   🔗 https://github.com/ollama/ollama/pull/18947

3. **#18946 api：钳制溢出 int64 的 `keep_alive`**
   修复极大 `keep_alive` 溢出为负数、导致模型被立即卸载的反直觉行为（Fixes #18181）。
   🔗 https://github.com/ollama/ollama/pull/18946

4. **#18945 renderers：保留 JSON Schema 关键字同名的参数名**
   修复 Gemma 4 工具参数名与 schema 关键字冲突时被误过滤的问题（Fixes #18468）。
   🔗 https://github.com/ollama/ollama/pull/18945

5. **#18941 api：保留工具调用参数的数值精度**
   与 Issue #18942 配套，修复高精度整数/小数在解码时被舍入。
   🔗 https://github.com/ollama/ollama/pull/18941

6. **#18939 新增 `OLLAMA_PARALLEL_HYBRID`，允许混合模型多 slot 运行**
   针对 #18938，让 `qwen35moe` 等混合/循环架构在 `kv_unified=false` 下启用多序列。
   🔗 https://github.com/ollama/ollama/pull/18939

7. **#17566 api：为思考过程增加 token 预算（按请求或按模型）**
   解决模型在 thinking block 中无限循环、耗尽上下文且返回空答案的问题。
   🔗 https://github.com/ollama/ollama/pull/17566

8. **#17564 server：不再返回模型尚未写完的工具调用**
   避免在 token 上限截断时把半截 tool call 交给客户端，属 Agent 稳定性关键修复。
   🔗 https://github.com/ollama/ollama/pull/17564

9. **#17914 qwen3coder：容忍缺失的闭合标签，停止改写参数值**
   长会话下丢闭合标签会令整个请求失败，影响所有使用 Qwen35Parser 的模型。
   🔗 https://github.com/ollama/ollama/pull/17914

10. **#18281 llm：将 assistant 的 thinking 传给 chat 模板**
    修复 `Thinking` 字段未进入出站消息、导致多轮对话中推理上下文丢失的问题。
    🔗 https://github.com/ollama/ollama/pull/18281

> 补充：#18624（Qwen3.5 工具调用早于 thinking 通道关闭）、#18289（两个 tag 共享 blob 但 runner flags 不同需重载）、#18212（推理预算在整行而非词中断开）、#17563（停止把重复负载误判为失控输出）。

---

## 五、功能需求趋势

从本期全部 Issues 提炼，社区关注方向集中在以下几类：

| 方向 | 代表 Issue | 说明 |
|---|---|---|
| **新模型 / 新架构支持** | #18698（K2 Horizon）、#18890（d1-3B / d1-omni）、#18825 | 决策模型、MoE、多模态小模型的接入需求旺盛 |
| **工具调用与结构化输出** | #18944、#18942、#13093 | tool call 与 JSON 格式、精度、跨客户端（goose）兼容性 |
| **Apple Silicon / MLX 稳定性** | #18856、#18885、#18940、#18833 | 0.40.x 在 Mac 上的 panic、性能与线程组限制 |
| **并发与调度** | #18938、#18349 | 混合架构单 slot 限制、多 GPU VRAM 记账不一致 |
| **云服务与流式** | #18926、#18948 | 流不终止、timings 统计失真 |
| **部署与构建** | #18835（FreeBSD）、#18796（RPi5）、#18925（CLI 包装器） | 跨平台编译与集中化配置诉求 |

---

## 六、开发者关注点

1. **0.40.x 的 MLX 回归是当前最大风险点。** #18856 明确指出 0.35.0 可用、0.40.0 崩溃，配合 #18885、#18940 的 panic，Mac 用户升级需谨慎。
2. **工具调用链路仍不稳健。** 从 `format:json` 冲突（#18944）、数值精度丢失（#18942）、到 goose 集成失效（#13093），Agent 场景的工具调用可靠性是高频反馈。
3. **并发能力被隐性限制引发不满。** `OLLAMA_NUM_PARALLEL` 被静默覆盖（#18938）直接损害多客户端吞吐，已有对应 PR，值得关注合入进度。
4. **跨平台分发与运行时判断需改进。** Linux 上因 MLX 依赖无法拉取模型（#18825）暴露出模型-运行时匹配逻辑的硬伤。
5. **结构化输出与思考预算的治理正在成型。** 维护者与贡献者（如 mann1x 系列 PR）系统性推进 thinking 预算、截断保护、解析器容错，方向正确但尚未全部合并。

---

*本日报由 AI 技术分析自动生成，链接与摘要均基于 GitHub 公开数据。*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

# llama.cpp 社区动态日报（2026-10-12）

数据来源：github.com/ggerganov/llama.cpp

---

## 一、今日速览

过去 24 小时社区节奏密集：连续发布 **b11553–b11559** 共 7 个构建，主线集中在 **OpenCL（Gemma-4 / Q4_K 内核）修复**、**RPC 调试分级**、**Prism Bonsai 2 27B 新模型支持** 与 **AVX2/F16C 编译修复**。Issue 侧最热的是 **MoE 专家权重经 PCIe DMA 直读主机内存** 这一长期提案（已关闭但仍被持续讨论），以及 **llama-server 长对话 "bad allocation" 崩溃**、**MTP 状态污染导致输出不确定** 等稳定性问题。PR 侧则出现多个高价值方向：**图重分配可观测性**、**MoE 专家驻留主机内存的流水线并行**、**ROCm/Vulkan 通过 dma-buf 共享显存**。

---

## 二、版本发布（过去 24 小时）

| 版本 | 核心变更 |
|---|---|
| **b11559** | OpenCL：改进 FA，Gemma-4 支持 dk=512（gqa=4/8），优化 dk64 以适配 gpt-oss-20b（[#30266](https://github.com/ggml-org/llama.cpp/pull/30266)） |
| **b11558** | OpenCL：修复 Q4_K dense bin 内核的 image 上限回退、q4_0 broadcast 与 rms_norm 的子组处理（[#30310](https://github.com/ggml-org/llama.cpp/pull/30310)） |
| **b11557** | RPC：`GGML_RPC_DEBUG` 改为 0–3 级 verbosity，新增事件/逐命令/传输层日志（[#29544](https://github.com/ggml-org/llama.cpp/pull/29544)） |
| **b11556** | 新增 **Prism Bonsai 2 27B** 运行时支持（含 Hadamard 张量折叠与转换清理）（[#29600](https://github.com/ggml-org/llama.cpp/pull/29600)） |
| **b11555** | CPU：修复 AVX2 CPU 在可用时未启用 F16C（[#30270](https://github.com/ggml-org/llama.cpp/pull/30270)） |
| **b11554** | Vulkan：`mul_mat_id` 重复 ID 改为在 prepass 中统一处理，避免循环（[#29998](https://github.com/ggml-org/llama.cpp/pull/29998)） |
| **b11553** | server：新增组件测试（component tests）（[#30312](https://github.com/ggml-org/llama.cpp/pull/30312)） |

发布页：https://github.com/ggml-org/llama.cpp/releases/tag/b11559

> 提示：b11555 的 F16C 改动已在 PR [#30343](https://github.com/ggml-org/llama.cpp/pull/30343) 中被指出引入 x86 生成速度回退（FP16→FP32 查表被改为 intrinsic），预计很快跟进修复。

---

## 三、社区热点 Issues（Top 10）

1. **[#26448]（CLOSED）MoE 专家权重经 PCIe DMA 直读主机内存** — 12 评论 / 👍8
   提案让专家权重常驻 pinned host buffer，cuBLAS 直接经 PCIe DMA 读取，不做 H2D 拷贝；作者给出 RTX 4090 实测数据（1.6GB 显存跑 23GB MoE、8GB 卡跑 81GB Qwen3-235B）。虽被标记 stale 并关闭，但仍是"低显存跑大 MoE"方向最具代表性的方案，热度最高。
   https://github.com/ggml-org/llama.cpp/issues/26448

2. **[#30091]（OPEN）llama-server 长对话 "bad allocation" 崩溃** — 10 评论
   Windows + HIP（RX 9070）环境，长会话过程中内存分配失败导致服务崩溃，属高优先级服务端稳定性问题。
   https://github.com/ggml-org/llama.cpp/issues/30091

3. **[#28726]（OPEN）OpenVINO 后端因 AVX-512 报 STATUS_ILLEGAL_INSTRUCTION** — 9 评论
   Core Ultra 7 265K + 官方 OpenVINO 预编译包在多款模型上必崩，说明 OpenVINO 预编译产物与 CPU 指令集探测存在不匹配。
   https://github.com/ggml-org/llama.cpp/issues/28726

4. **[#26425]（OPEN）MTP 保留跨请求状态，导致输出不确定与模型退化** — 9 评论
   Qwen3.6-35B-A3B-MTP 在多次请求间状态未隔离，输出非确定性。与 #23335 同源，是 speculative/MTP 路径上的核心正确性问题。
   https://github.com/ggml-org/llama.cpp/issues/26425

5. **[#29058]（OPEN）请求支持 Prism PQ2_0（type 142）/ PTQ1_0（type 143）** — 7 评论 / 👍2
   面向 Ternary-Bonsai-2 的三值量化新 GGML 类型需求，与今日 b11556 的 Prism Bonsai 2 支持形成呼应，属于"新模型 + 新量化格式"配套。
   https://github.com/ggml-org/llama.cpp/issues/29058

6. **[#26609]（OPEN）CUDA flash-attn 路径非法内存访问（部分专家卸载）** — 7 评论
   Qwen3.6-35B MoE + 部分专家 offload 时，第二个请求必崩；关闭 `-fa` 后消失。跨版本可复现，定位价值高。
   https://github.com/ggml-org/llama.cpp/issues/26609

7. **[#30039]（OPEN）Vulkan RDNA1（gfx1010）提示处理性能回退约 45%** — 6 评论
   b10455 → b11429 之间，RX 5700 XT 上 GDN 混合模型 PP 大幅下降而 TG 不变，是典型的"新内核在老架构上退化"。
   https://github.com/ggml-org/llama.cpp/issues/30039

8. **[#26239]（OPEN）Gemma-4 在 gfx1151（HIP/Windows）长提示下无限生成 `<unused49>`** — 6 评论
   Strix Halo 平台上长上下文输出不稳定，涉及 Gemma-4 与 AMD 后端组合的数值/采样问题。
   https://github.com/ggml-org/llama.cpp/issues/26239

9. **[#27122]（OPEN）MTP 在 `--split-mode tensor` 下触发 CUDA 可复现锁死** — 6 评论
   双卡（5070Ti + 3060Ti）张量并行 + MTP 直接卡死，与 #26425、#23335 共同构成 MTP 相关的一批阻塞性 bug。
   https://github.com/ggml-org/llama.cpp/issues/27122

10. **[#27148]（OPEN）RAM prompt cache 在并发下把无关会话内容恢复到新 slot** — 4 评论
    `--cache-ram` / `--cache-idle-slots` 默认开启，却可能跨会话串味，属**正确性与隐私风险**级别的问题，值得优先处理。
    https://github.com/ggml-org/llama.cpp/issues/27148

> 其他值得留意的：#30052（RPC + DGX Spark 大 MoE 预热解码必崩）、#30256（Gemma-4 json_schema 在关闭 thinking 时仍开放 thought 通道）、#25510（畸形 tool_calls 返回 500 而非 4xx）。

---

## 四、重要 PR 进展（Top 10）

1. **[#30329] llama：上报推理期间的 compute graph 重分配**（ggerganov）
   新增 `ggml_backend_sched_realloc_callback`，当预留 buffer 不足需重新分配时通知用户代码，并报告后端分配/张量变化。为性能诊断与显存调优提供关键可观测性。
   https://github.com/ggml-org/llama.cpp/pull/30329

2. **[#29963] ggml：MoE 专家驻留主机内存时的流水线并行**
   在 `-ot` / `--cpu-moe` / `--n-cpu-moe` 等场景下重新启用 pipeline parallelism（此前被强制关闭），与 #26448 的思路同向。
   https://github.com/ggml-org/llama.cpp/pull/29963

3. **[#30340] Linux：ROCm/Vulkan 通过 dma-buf 共享 buffer**
   "ROCm 负责 prefill、Vulkan 负责 decode" 的混合后端方案，理论上可同时拿到更高 PP 与 TG。
   https://github.com/ggml-org/llama.cpp/pull/30340

4. **[#30343] ggml-cpu：在启用 F16C 的 x86 上保留 FP16→FP32 查表**
   明确修复 #30270（b11555）带来的生成速度回退，保留 FP32→FP16 的 intrinsic 化收益。回归修复优先级高。
   https://github.com/ggml-org/llama.cpp/pull/30343

5. **[#30210]（CLOSED）chat：API 重构**
   以 `common_chat_session` 统一 server 与 chat 组件的交互，为后续 chat template / 会话管理演进打基础。
   https://github.com/ggml-org/llama.cpp/pull/30210

6. **[#30351] Vulkan：coopmat1 flash-attention tile 形状由设备推导**
   不再硬编码 16x16x16；Intel BMG 的 8x16x16 DPAS 此前会静默回退到 FA_SCALAR，本 PR 修复该性能陷阱。
   https://github.com/ggml-org/llama.cpp/pull/30351

7. **[#30345] model：masked 模式下先筛选被标记的 MTP 输出行再设置 h_nextn**
   修复部分 Qwen 模型在 masked 模式中选错 hidden states（选了前 n_outputs 行而非标记行）的问题。
   https://github.com/ggml-org/llama.cpp/pull/30345

8. **[#30350] OpenVINO：修复 "Cannot get length of dynamic dimension"**
   针对 `-fa off` 时 V cache 转置布局与 OpenVINO 后端 FA 假设不一致的两处问题（含 KV 切片张量收缩）。
   https://github.com/ggml-org/llama.cpp/pull/30350

9. **[#30348] CI：对每个 AMD 架构执行 HIP spill 检查**
   替代 #30336，把 gfx906 等 GCN/CDNA 的寄存器溢出检查纳入全架构 CI（GCN 仅 64KiB VGPR、wave64 下 256 寄存器，极易 spill）。
   https://github.com/ggml-org/llama.cpp/pull/30348

10. **[#30331] model：为 laguna 系列加载 YaRN beta 元数据**
    Laguna XS 2.1 此前回退到默认 `yarn_beta_fast=32`（模型文件为 64），长上下文外推行为因此不正确。
   https://github.com/ggml-org/llama.cpp/pull/30331

> 其他：#30346（Hexagon 新增 SGN 算子，服务 Qwen3.8-Flash-Next）、#30141（speculative 保存/恢复 MTP hidden state）、#15550（按目标 bpw/文件大小自动选量化组合）、#30279（`test-backend-ops` 对不支持类型硬失败）、#30023（合并三套 context state 测试）、#21231（router 动态卸载的内存余量参数）。

---

## 五、功能需求趋势

1. **低显存跑大 MoE（专家权重驻留主机内存）**
   #26448、#29963、#26609、#30052 共同指向同一诉求：MoE 专家分层/分片放置、主机内存直读、跨节点 RPC。这是当前显存效率方向最集中的需求。

2. **移动/端侧 GPU 后端（OpenCL/Adreno）**
   今日 7 个 release 中 2 个是 OpenCL 优化（Gemma-4 dk512、Q4_K image 上限），说明 Qualcomm 系端侧推理正在被系统性打磨。

3. **AMD 生态（Vulkan / HIP / ROCm）**
   RDNA1 性能回退、gfx1151 输出异常、GCN spill 检查、ROCm+Vulkan 混合 dma-buf——AMD 相关条目数量明显上升。

4. **新模型与新量化格式支持**
   Prism Bonsai 2 27B、Ternary-Bonsai-2（PQ2_0/PTQ1_0）、Gemma-4、Qwen3.8/3.6、GLM-5.3、K2 Horizon、Laguna 等；三值/低位宽量化（IQ3_S、q4_0、iq4_nl）相关需求同步增长。

5. **MTP / 推测解码的工程化**
   至少 4 个 Issue 与 PR 围绕 MTP：状态隔离（#26425）、状态保存恢复（#30141）、输出行选择（#30345）、张量并行锁死（#27122）。

6. **可观测性与测试基建**
   图重分配回调（#30329）、RPC 分级日志（#29544）、组件测试（#30312）、context state 测试合并（#30023）、后端算子测试硬失败（#30279）——社区在补"工程底座"。

7. **SYCL/oneAPI 官方化**（#27656）：希望有检测与预编译安装支持，减少自行编译门槛。

---

## 六、开发者关注点

- **稳定性与崩溃是第一痛点**：`bad allocation`（#30091）、CUDA illegal memory access（#26609）、RPC 服务端崩溃（#30052）、`ggml_abort`（#27780）、`free(): invalid pointer`（#22894）——多集中在长对话、并发、部分 offload、跨节点等压力场景。
- **非确定性输出难以接受**：MTP 相关多起"同一输入不同输出"报告，直接影响生产可用性与评测可信度。
- **缓存隔离的正确性风险**：`--cache-ram` 跨会话串味（#27148）可能泄露上下文，属于比性能更严重的问题。
- **性能回归需快速响应**：Vulkan RDNA1 PP 回退 45%（#30039）、F16C 改动导致 x86 TG 变慢（#30343）——老架构与默认构建路径的回归检测仍需加强。
- **HTTP 语义与协议健壮性**：畸形 tool_calls 返回 500 而非 4xx（#25510）、严格 chat template 下 system 消息位置报 500（#27367）、reasoning_content 与 content/tool_calls 混杂（#30246）。
- **构建/环境差异带来的困惑**：MSVC vs Clang 显存占用差异（#27814）、AVX-512 预编译包在部分 CPU 上非法指令（#28726）、HIP/CUDA 编译失败期望更明确报错（#29048）。
- **`</think>` 等特殊 token 识别仍以字符串匹配为主**（#28679），在自定义微调模型上易误判。

---

*本日报基于给定 GitHub 数据整理，链接均指向 ggml-org/llama.cpp 仓库。*

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*