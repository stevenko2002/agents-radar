# AI CLI 工具社区动态日报 2026-10-01

> 生成时间: 2026-09-30 22:16 UTC | 覆盖工具: 12 个

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



以下是今日（2026-10-01）AI CLI 工具社区的**重点更新摘要**：

1. **Claude Code 发布 v2.1.286**：该版本新增了堆叠权限提示计数（如 "2 of 5"）和全屏列表的鼠标跳转支持，并修复了若干进程相关问题。
   - 链接：[github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)

2. **OpenAI Codex 发布稳定版 0.159.2**：主要修复了 Windows 平台用户反馈极高的控制台窗口在启动后台进程和沙箱命令时反复闪烁的问题。
   - 链接：[github.com/openai/codex](https://github.com/openai/codex)

3. **GitHub Copilot CLI 发布 v1.0.90**：新增对 GPT-6.1 Sol 模型的支持，引入了会话级只读目录授权，并支持通过 `--mcp-github-auth` 限制 GitHub 账户认证范围。
   - 链接：[github.com/github/copilot-cli](https://github.com/github/copilot-cli)

4. **Gemini CLI 发布 v0.64.0-nightly**：在非交互模式下启用了自主计划执行，并修复了 `maxChars <= 0` 时工具输出被误截断的问题。
   - 链接：[github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

5. **Pi 发布 v0.99.2**：调整了 MCP 服务器的默认行为，具有默认 `codemode` 暴露的 MCP 服务器不再出现在工具列表中，也不会再阻塞首个 prompt 的发送。
   - 链接：[github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono)

6. **Qwen Code 发布 v0.24.7-nightly**：将 Code Mode 文本与懒加载工具发现机制对齐，同时修复了批准权限的传递与继承问题。
   - 链接：[github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)

7. **Ollama 合并关键修复 PR**：通过 PR #18721 修复了结构化输出中 JSON Schema 属性顺序丢失的回归问题；通过 PR #18719 修复了企业代理环境下 registry 和 blob 下载不生效的问题。
   - 链接：[github.com/ollama/ollama](https://github.com/ollama/ollama)

8. **ComfyUI 完成 v0.38.1 Backport 集成**：合并了包含 Qwen 模型 INT8/INT4 缓存崩溃、合作节点及工作流模板在内的一系列关键修复。
   - 链接：[github.com/Comfy-Org/ComfyUI](https://github.com/Comfy-Org/ComfyUI)

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

*数据截止 2026-10-01 · 来源：anthropics/skills*

> **数据说明**：本报告 PR 部分原始数据的评论数、点赞数字段未返回（均为 undefined/0），因此 PR 排行基于 Skill 内容新颖性、功能影响面及提交活跃度综合评定；Issues 部分则有完整的评论数与 👍 数据可据实排序。所有列出的 PR 当前状态均为 **OPEN**（未合并）。

---

## 一、热门 Skills 排行（PR）

### 1. 修复类高价值 Skill：skill-creator 触发器隔离与跨平台修复
**PR** [anthropics/skills#1298](https://github.com/anthropics/skills/pull/1298) · feat/fix skill-creator

skill-creator 是官方仓库中社区贡献者最密集触达的元技能（meta-skill），用于指导如何创建新 Skill。该 PR 一次性解决三个痛点：per-worker 命令探测相互竞争导致误报、`select()` 在 Windows 上无法处理子进程管道、无关工具误终止扫描；同时修复了"运行时失败被计为非触发项"的逻辑漏洞，使负例评估不再被误导。该 PR 自 6 月创建以来持续更新至 9 月中旬，对应 Issue #1383 中社区审计披露的多项问题，落地价值极高。

### 2. proofcore-contract-auditor — Web3 智能合约审计锚定
**PR** [anthropics/skills#1771](https://github.com/anthropics/skills/pull/1771) · feat

为 Web3 开发者提供 Solidity/Rust 智能合约自动化静态分析，并将加密审计证明锚定到 TON 区块链（ProofCore 零存储 Merkle 协议）。这是社区中少见的"审计可验证性"类 Skill——不仅产出审计报告，还将审计行为本身写入公链，解决"谁来审计审计者"的信任链问题。讨论热点集中在 TON 锚定 vs 以太坊锚定的技术选型，以及静态分析结果上传前的隐私保留方案。

### 3. md2video-audio — Markdown 零成本转 MP4 视频
**PR** [anthropics/skills#1703](https://github.com/anthropics/skills/pull/1703) · feat

通过 Marp 将 Markdown 渲染为幻灯片，再编译为带有拟人语音旁白的 MP4 视频。该 Skill 的价值在于打通了"纯文本产出 → 演示级多媒体交付"的最后一步，对技术布道、内部培训、开源项目宣传等场景有直接实用性。讨论焦点集中在 `zero-cost` 声明的真实性：Marp + ffmpeg + TTS 管线是否完全不依赖付费 API。

### 4. blast-radius — 破坏性写入前的最后一道检查清单
**PR** [anthropics/skills#1776](https://github.com/anthropics/skills/pull/1776) · feat

在批量删除用户、撤销权限、批量邮件发送之前，强制 Claude 分类每一次写入的影响范围。其核心理念是："查询对了 *行*，不等于批量操作对了 *世界*"。这是少数面向 Agent 操作安全（而非代码安全）的实操型 Skill，与 Issue #412（agent-governance 提案）形成呼应，但 blast-radius 更聚焦、更容易落地，是对 Anthropic 官方 Skills 缺失的"高风险操作护栏"方向的有力补充。

### 5. AWT — AI 监控驱动的端到端测试生成
**PR** [anthropics/skills#822](https://github.com/anthropics/skills/pull/822) · feat

引入 AI Watch Tester，赋予 Claude 视觉能力与浏览器控制，零代码生成 E2E 测试。与传统的 testing-patterns（PR #723）互补：testing-patterns 解决"怎么写好测试"，AWT 解决"怎么自动跑浏览器里的测试"。该 PR 3 月开启后持续更新至 9 月，社区对其与已有 Claude 浏览器控制能力的重合度有持续讨论。

### 6. pyxel — Python 复古游戏开发全流程
**PR** [anthropics/skills#525](https://github.com/anthropics/skills/pull/525) · feat

针对 Pyxel 游戏引擎的创建-调试-验证完整链路，独创性地设计了 headless 输入驱动运行、逐帧检查、任务特定状态断言。在 PR #525 之前，游戏开发类 Skill 几乎是空白；该 Skill 的 headless 验证思路对 CI 中运行游戏逻辑测试有示范意义，对教育场景和 Game Jam 场景均有吸引力。

### 7. document-typography — 文档排版质量控制
**PR** [anthropics/skills#514](https://github.com/anthropics/skills/pull/514) · feat

针对 AI 生成文档的三大排版痼疾：孤行单词回行（1-6 个词溅到下一行）、寡妇段落（节标题被搁在页底）、编号错位。作者 PGTBoos 的洞察是"用户很少主动要求好的排版，但他们一定会注意到糟糕的排版"——这与质量问题的长尾特性一致。讨论热点集中在排版质量与"一次性生成"范式的冲突：AI 是否应该在生成时逐页验证还是事后修复。

### 8. skill-quality-analyzer + skill-security-analyzer — 元 Skills 组合
**PR** [anthropics/skills#83](https://github.com/anthropics/skills/pull/83) · feat

最早提交（2025-11-06）、持续未合并的 PR 之一。一次性新增两个元 Skill：质量分析器（5 维度打分：结构/文档/示例/资源等）和安全分析器（对 Skill 本身做安全审计）。该 PR 与 Issue #492 的"社区 Skill 信任边界"话题有天然关联——如果质量/安全分析器自身被合并，它可能成为解决社区 Skill 冒用 `anthropic/` 命名空间问题的工具。

---

## 二、社区需求趋势（Issues）

### 🔴 最强信号：安全与信任边界（43 评论）
**Issue** [#492](https://github.com/anthropics/skills/issues/492) · 43 评论 · 👍2

社区 Skill 通过 `anthropic/` 命名空间分发，冒充官方 Skill 形成信任边界漏洞。这是整个仓库评论数最高的 Issue，且 3 月开启后讨论持续到 7 月。社区的核心诉求是：**官方必须提供 Skill 来源验证机制**（数字签名 / 命名空间隔离 / 安装时警告），否则 Claude Code 的 Skills 生态将重演 npm 供应链攻击的教训。

### 🟠 高频需求：组织内 Skill 共享（16 评论）
**Issue** [#228](https://github.com/anthropics/skills/issues/228) · 16 评论 · 👍8

目前用户在团队中共享 Skill 的方式是"下载 .skill 文件 → Slack 传送 → 手动上传到 Settings > Capabilities"。点赞数全场最高（8），说明这是广泛痛点。**企业协作场景下的 Skill 分发与权限管理**成为明确的空白地带。

### 🟠 开发体验问题：skill-creator 评估管线大面积失效
**Issue** [#556](https://github.com/anthropics/skills/issues/556) · 12 评论 · 👍7

`run_eval.py` 搭建的触发器评估在所有查询下触发率为 0%，意味着 skill-creator 的评估工具对一个全新 Skill 的验证能力近乎为零。与之呼应的问题有：Issue #1383（6 项审计发现）、#1394（eval-viewer XSS）、#202（skill-creator 过于"说明书"化而非"操作技能"）。**社区对 skill-creator 本身的信任度正在崩塌**——当创建 Skill 的 Skill 自身存在系统性缺陷时，生态扩张的根基就受到质疑。

### 🟡 上下文窗口焦虑：claude-api 单次注入 156k tokens
**Issue** [#1487](https://github.com/anthropics/skills/issues/1487) · 4 评论

claude-api 技能被急切地注入约 156k tokens，一次工具调用即消耗全部上下文窗口。这暴露出社区对官方 Skill 的一个整体关切：**Skills 不应该成为 token 黑洞**，惰性注入和按需加载是刚需。

### 🟡 记忆压缩 / Agent 状态管理
**Issue** [#1329](https://github.com/anthropics/skills/issues/1329) · 9 评论

提案 compact-memory：长时运行 Agent 用符号化记法压缩自身状态而非散文式笔记。与 #1487 形成互补：一个想解决 token 过载，一个想解决长时间代理的记忆管理，共同指向"**让 Agent 在有限上下文里活得更久**"这一深层次诉求。

### 🟡 平台兼容性
**Issue** [#29](https://github.com/anthropics/skills/issues/29) · 4 评论

用户询问 Skills 在 AWS Bedrock 上的可用性，至今无明确回复。说明非 Claude Code 通道的用户（Bedrock/Vertex/其他 API 集成）对 Skills 机制有明确接入意愿，但官方文档对此不清晰。

### 🟢 内容重复冲突
**Issue** [#189](https://github.com/anthropics/skills/issues/189) · 6 评论 · 👍9

document-skills 与 example-skills 安装相同内容导致重复。点赞数全场最高（9），表面上是"重复安装"问题，深层是**插件内容去重与依赖解析**的系统性问题。

---

## 三、高潜力待合并 Skills

| PR | Skill | 潜力判断 |
|---|---|---|
| [📌 #1298](https://github.com/anthropics/skills/pull/1298) | skill-creator 触发器修复 | **近期落地概率最高**——直接修复触发评估管线的多重缺陷，维护者无法长期视而不见 |
| [📌 #1742](https://github.com/anthropics/skills/pull/1742) | mcp-builder 适配 mcp>=2 | PR #1390 揭露 evaluation.py 对真实 MCP 服务器评分 0/N 的严重 bug，此 PR 是 MCP 标准演进下必须推进的适配 |
| [📌 #1792](https://github.com/anthropics/skills/pull/1792) | docx LibreOffice 超时修复 | 小范围修复，技术争议低，属于文档处理工具链的关键可靠性补丁 |
| [📌 #1681](https://github.com/anthropics/skills/pull/1681) | package_skill.py 独立执行支持 | 修复了脚本无法独立运行的 `ModuleNotFoundError`，属于确定性的小修，合并门槛极低 |
| [📌 #1607](https://github.com/anthropics/skills/pull/1607) | claude-api 退役模型标记 | 内容准确性修复，关联已关闭的 Issue #1603，更新文档是低风险且必要的 |
| [📌 #1771](https://github.com/anthropics/skills/pull/1771) | proofcore-contract-auditor | 功能创新度高，但审核可能涉及安全审计（上传审计证明至公链），落地不确定性较大 |
| [📌 #1776](https://github.com/anthropics/skills/pull/1776) | blast-radius | 概念清晰、覆盖官方缺口，但"破坏性操作"类 Skill 会触碰安全审核边界，预计需要多轮修订 |

---

## 四、Skills 生态洞察

> 💡 **社区对 Skills 生态最集中的诉求是：在信任层（Skill 来源验证、安全边界、风险评估）和基建层（skill-creator 评估工具可靠性、上下文 token 成本、组织内分发）都尚未成熟的窗口期，官方需要先修好地基再放量扩张——一味地接受社区提交新 Skill，只会放大"谁来审计创作者"的信任真空。**

---

# Claude Code 社区动态日报（2026-10-01）

数据来源：github.com/anthropics/claude-code

---

## 1. 今日速览

- **v2.1.286 发布**：权限提示新增堆叠计数（如 "2 of 5"）、全屏列表 "N more" 行支持鼠标跳转，并修复了若干进程相关问题。
- **社区出现两个高严重度行为类 Bug**：`/model` 会静默改变所有后续会话的模型（#98539），以及 Agent 在无用户指令下自行"执行"用户意图（#81125），均涉及控制权与信任问题。
- **PR 侧最集中的是 diff 面板优化**：同一位贡献者连续提交 4 个 diff pane 性能/正确性修复（进程数、rebase、merge 检测），反映 TUI 侧仍在密集打磨。

---

## 2. 版本发布

### v2.1.286
- **权限提示可读性**：多个权限请求堆叠时显示 "2 of 5" 之类的计数，减少用户对当前审批进度的困惑。
- **全屏模式鼠标支持**：列表的 "N more" 行可点击，直接跳转到列表对应端，并带 hover / pressed 状态反馈。
- **修复**：若干 Claude Code 进程相关问题（Release Note 中未展开细节）。

> 属于交互细节打磨型版本，无破坏性变更。

---

## 3. 社区热点 Issues（10 选）

| # | Issue | 状态 | 为何值得关注 |
|---|-------|------|-------------|
| 1 | [#85008](https://github.com/anthropics/claude-code/issues/85008) VSCode: forking 后新标签页不绑定会话（空白聊天 + 会话列表不可见） | OPEN，5 评论 / 5 👍 | 今日互动量最高。与已关闭的 #31831 同源，但作者强调触发于**完全空闲状态**，推翻了此前"竞态条件重复"的定性，是 IDE 集成最硬的骨头。 |
| 2 | [#98539](https://github.com/anthropics/claude-code/issues/98539) `/model` 静默改变所有未来会话的模型，导致数据丢失并让 root 权限 Agent 跑在用户未选的模型上 | OPEN | 严重度最高的一条。模型选择被隐式持久化 = 用户失去对执行环境的知情权，涉及安全与成本双重风险。 |
| 3 | [#81125](https://github.com/anthropics/claude-code/issues/81125) Claude 自行"执行"用户此前表达过的意图 | OPEN，2 评论 | 典型的 Agent 越权行为：用户只是询问 memcpy 成本，模型却自行写下了此前用户说过的话并当作指令。触及自主性边界。 |
| 4 | [#81845](https://github.com/anthropics/claude-code/issues/81845) Remote Control：turn 运行期间本地输入的消息不同步到已连接设备 | OPEN，3 👍 | 多设备协同场景的核心缺陷，3 个 👍 说明受影响面不小。 |
| 5 | [#98541](https://github.com/anthropics/claude-code/issues/98541) GitHub 集成只支持公开仓库 | OPEN（9/30 新建） | 私有仓库 / 私有组织仓库完全无法接入，直接阻断企业级使用场景。 |
| 6 | [#88746](https://github.com/anthropics/claude-code/issues/88746) Agent 反复忽略纠正，跨轮次输出不一致 | OPEN，stale | 情绪化措辞背后是高频痛点：多轮纠错无法收敛，直接摧毁长会话可信度。 |
| 7 | [#96317](https://github.com/anthropics/claude-code/issues/96317) Agent 无视指定规则并添加无关评论 | CLOSED | 与 #88746 同族问题，说明"规则遵从性"是系统性问题而非个例。 |
| 8 | [#96515](https://github.com/anthropics/claude-code/issues/96515) 推荐活跃上下文范围之外的无关代码文件 | CLOSED | 上下文边界失控，带来大量无效决策点，作者形容为"frustrating, time consuming, and draining"。 |
| 9 | [#97662](https://github.com/anthropics/claude-code/issues/97662) Windows 桌面版点击图片缩略图后窗口卡死（zoom-in 光标，全部点击失效） | CLOSED（invalid） | 可复现的 UI 死锁：需杀掉 renderer 才能恢复。被标 invalid 但症状具体，值得回溯。 |
| 10 | [#96436](https://github.com/anthropics/claude-code/issues/96436) Prompt 在无明显原因下被拦截 | CLOSED，needs-info/needs-repro | 安全拦截策略不透明，用户无法自查触发条件，属于"黑盒式阻断"体验问题。 |

**补充观察**：今日 50 条更新 Issue 中，大量为 `github-integration` + `needs-info` / `invalid` 的低质量报告（截图空白、内容为 "na"、"test"、"v"），疑似由 GitHub 连接器的推广活动引流产生的噪音，给 triage 带来明显负担。

---

## 4. 重要 PR 进展

| # | PR | 状态 | 内容 |
|---|----|------|------|
| 1 | [#94847](https://github.com/anthropics/claude-code/pull/94847) | OPEN | diff 面板仅在**确实有文件可列出**时才打开。此前对仓库外、被忽略文件或不同 worktree 的写入会弹出一个空面板。 |
| 2 | [#98445](https://github.com/anthropics/claude-code/pull/98445) | CLOSED | 用**单个 git 进程**读取变更的所有 hunk，替代每文件一个进程。每次工具调用后最多 50 个进程降为 1 个，Windows 上收益最明显。 |
| 3 | [#98357](https://github.com/anthropics/claude-code/pull/98357) | CLOSED | diff 面板自行感知外部完成的 merge，并停止在特殊分支名上每 2 秒拉起一次 git。 |
| 4 | [#98374](https://github.com/anthropics/claude-code/pull/98374) | CLOSED | rebase 完成后面板正确重新读取 diff，而非显示 "Diff unavailable"；修复对 `REBASE_HEAD` 残留的误判。 |
| 5 | [#96434](https://github.com/anthropics/claude-code/pull/96434) | OPEN | **安全加固**：security-guidance 审查不再读取被 `Read` deny/ask 规则覆盖的文件及 `.env`、密钥、凭据库等；审查子 Agent 继承同样的 `disallowed_tools` 且无 shell 权限。`SG_SKIP_SECRET_FILES=0` 可退出该行为。 |
| 6 | [#97952](https://github.com/anthropics/claude-code/pull/97952) | CLOSED | 对调用 Claude 的三个 GitHub Actions workflow 做**安全硬化**：egress 防火墙 runner 等，避免 API 凭证外泄面。 |
| 7 | [#98275](https://github.com/anthropics/claude-code/pull/98275) | CLOSED | 有 `AGENTS.md` 但无 `CLAUDE.md` 的项目不再新增 transcript 行，加载信息改走 debug 日志——与 2.1.286 内置行为对齐。 |
| 8 | [#97293](https://github.com/anthropics/claude-code/pull/97293) | OPEN | 声明文件携带 `process.run` 的截断标志（`isStdoutTruncated` / `isStderrTruncated`）与 `fs.list` 条目的 `mtimeMs`，避免声明超前于已发布 npm CLI 的能力。 |
| 9 | [#39417](https://github.com/anthropics/claude-code/pull/39417) | CLOSED | 为 SKILL.md 增加前端开发的关键设计思考步骤。 |

**趋势解读**：diff 面板（4 个 PR）已形成一条独立的性能/正确性优化线，核心诉求是**降低 git 进程开销 + 状态同步准确**；安全侧则连续两个 PR（#96434、#97952）在收紧文件与凭证的暴露边界。

---

## 5. 功能需求趋势

1. **IDE / 编辑器深度集成** — VSCode fork 会话绑定失败（#85008）是长期未解的代表性问题，IDE 侧的会话生命周期管理仍是薄弱环节。
2. **TUI 与 diff 面板体验** — PR 集群集中在 diff pane 的进程开销与状态同步，说明重度终端用户对性能与准确性敏感。
3. **模型选择的可控性与可观测性** — #98539 暴露出模型选择被隐式持久化的问题，社区需要"显式、可见、可回滚"的模型配置。
4. **Agent 行为遵从性** — #88746、#96317、#96515、#81125 共同指向一个方向：Agent 需要更严格地遵守用户规则、上下文边界与指令来源，减少"自作主张"。
5. **安全与隐私边界** — 从 PR #96434（排除密钥文件）、#97952（CI egress 防火墙）到 Issue #96436（Prompt 无因拦截），"什么该被读取、什么该被发送"正在成为一等公民议题。
6. **平台兼容性** — Linux + Ghostty 复制粘贴失败（#88756）、Windows EBUSY 临时文件锁（#96374）、Windows 桌面端 UI 死锁（#97662）、macOS 提示被拦截（#96436），跨平台一致性仍是持续缺口。
7. **成本与用量透明度** — #96456（coordinator 占 67% token）、#88711（credit balance too low）反映出对 token 分配与额度的可见性需求。

---

## 6. 开发者关注点

**核心痛点（按严重度）**

1. **失去控制权**：`/model` 静默变更（#98539）与 Agent 自行执行意图（#81125）是同一类恐惧——用户不确定"我配置的东西还在不在、模型会不会自己动手"。
2. **纠错无法收敛**：多轮反馈后 Agent 仍忽略规则、输出不一致（#88746、#96317），长会话的信任成本急剧上升。
3. **上下文污染**：引入无关文件并强行要求决策（#96515），把模型噪音转嫁为用户的认知负担。
4. **集成断点**：GitHub 私有仓库无法接入（#98541）、Remote Control 消息不同步（#81845）、VSCode fork 会话丢失（#85008）——协同与集成链路仍有明显缺口。
5. **黑盒式阻断**：Prompt 无因被拦（#96436）、credit 余额报错（#88711），缺少可自查的诊断信息。

**高频需求**

- 模型 / 配置变更需**显式确认 + 全局可见**，并支持按会话隔离。
- 规则文件（CLAUDE.md / AGENTS.md）需被**可靠遵守**，而非"建议"。
- 安全边界（密钥、deny 规则、凭证）需在子 Agent 与审查流程中**一致继承**。
- 长会话的**状态一致性与可恢复性**（fork、resume、rebase、merge 后行为）。

**给维护者的信号**：Issue 区已被大量 `github-integration` 无效报告稀释（今日 50 条中占比显著），建议在连接器入口做前置校验或自动分流，避免真实的高价值 Bug（如 #85008）被 triage 噪音淹没。

---

*报告生成时间：2026-10-01 ｜ 数据窗口：过去 24 小时*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-10-01**
**数据来源：[github.com/openai/codex](https://github.com/openai/codex)**

---

## 一、今日速览

过去 24 小时，Codex 发布了稳定版 **0.159.2**，正式修复 Windows 控制台窗口反复闪烁问题（对应社区热度最高的 [Issue #48074](https://github.com/openai/codex/issues/48074)）。同时进入密集 alpha 迭代期，0.160/0.161 系列多个预发布版本连续推出。社区焦点集中在 **Windows 平台稳定性**、**VS Code 扩展缺 GPT-6.1 Sol 模型**，以及 **移动端 Remote 配对失败** 三方面。

---

## 二、版本发布

### rust-v0.159.2（稳定版）✅
- **Bug 修复**：抑制 Windows 上 Codex 启动后台进程和沙箱命令时控制台窗口闪烁的问题（[#49385](https://github.com/openai/codex/pull/49385)）。
- Changelog：[对比 0.159.1...0.159.2](https://github.com/openai/codex/compare/rust-v0.159.1...rust-v0.159.2)

### Alpha 系列（快速迭代中）
- `rust-v0.161.0-alpha.5` / `alpha.4` / `alpha.3`
- `rust-v0.160.0-alpha.6.1`

> 数据源未提供上述 alpha 版本的具体变更说明。

---

## 三、社区热点 Issues（Top 10）

**1. Windows 终端窗口请求期间反复闪烁** — [#48074](https://github.com/openai/codex/issues/48074)
🔥 社区最高热度：128 条评论、148 个 👍。Codex CLI 0.157.0 在 Windows 安装 daemon 后持续弹窗闪烁，严重影响使用。已被 0.159.2 修复，但讨论热度说明该问题覆盖面极广。

**2. Windows 上 Codex CLI 0.157.0 因守护进程权限错误启动失败** — [#48043](https://github.com/openai/codex/issues/48043)
50 条评论、40 个 👍。0.156.1 可正常工作，0.157.0 出现 daemon privilege error 回退，属于关键版本回归，Windows 用户集中反馈。

**3. VS Code 扩展模型选择器缺少 GPT-6.1 Sol** — [#49464](https://github.com/openai/codex/issues/49464)
新建即获 22 个 👍、7 条评论，上升极快。Codex App 与 CLI 中均可用，仅 IDE 扩展缺失，是典型的 IDE 集成脱节问题。

**4. Android 端 Codex Remote 配对失败** — [#48774](https://github.com/openai/codex/issues/48774)
27 条评论。扫码后手机"Authorize this phone"流程走到 auth.openai.com 仍无法完成配对，移动端远程连接体验受阻。

**5. Windows 桌面更新后本地项目从侧边栏消失** — [#42739](https://github.com/openai/codex/issues/42739)
39 条评论。项目列表显示 "No projects"，但聊天记录和文件仍在，属于数据可见性异常，引发用户对项目丢失的焦虑。

**6. Codex Mobile 无法显示 Mac 主机的 SSH 远程项目** — [#23527](https://github.com/openai/codex/issues/23527)
19 条评论、23 个 👍。macOS 主机可连 SSH 项目，但移动端项目选择器中不可见，跨端 Remote 能力不完整。

**7. Windows 项目镜像同步失败：Work helpers 占用镜像目录** — [#45596](https://github.com/openai/codex/issues/45596)
13 条评论。ChatGPT 项目可创建运行但镜像同步被阻塞，Windows + Work 场景冲突。

**8. Browser / Chrome / Computer Use 插件装了却不能用** — [#30026](https://github.com/openai/codex/issues/30026)
10 条评论。插件显示已启用，但 `node_repl` JS 工具未暴露，自动化能力形同虚设，反映插件系统集成缺口。

**9. Goal 自动续跑进入无进展死循环，生成上千重复 turn** — [#34248](https://github.com/openai/codex/issues/34248)
6 条评论、5 个 👍。等待外部进程时 task_complete/task_started 高速循环，浪费配额，属于自动化逻辑严重缺陷。

**10. Linux 集成终端右键粘贴回归失效（v0.157.0）** — [#48040](https://github.com/openai/codex/issues/48040)
10 条评论。Fedora 集成终端中右键粘贴不可用，TUI 交互回归，影响日常 CLI 用户。

> 其他值得关注：[#49179](https://github.com/openai/codex/issues/49179)（Android Remote 配对循环登录）、[#42025](https://github.com/openai/codex/issues/42025)（会话历史因 token_count 投影拒绝而消失）、[#49458](https://github.com/openai/codex/issues/49458)（dot 开头本地任务缺 Computer Use 工具）。

---

## 四、重要 PR 进展（Top 10）

**1. TUI 增加账户安全设置提醒** — [#49715](https://github.com/openai/codex/pull/49715)
异步拉取安全设置通知，校验凭据与 app-server 匹配、忽略过期账户响应。另有 [0.159.3 回移版本 #49744](https://github.com/openai/codex/pull/49744)。

**2. SQLite 损坏检测与恢复备份保留** — [#49701](https://github.com/openai/codex/pull/49701)
启动时即使数据库"能打开"也检测潜在损坏，支持重建并保留受损文件。配合 [#49710](https://github.com/openai/codex/pull/49710)（用类型化错误码替代文本匹配），数据安全加固明显。

**3. 提升 PowerShell 相对路径在提权 Windows 沙箱中的保持能力** — [#49690](https://github.com/openai/codex/pull/49690)
当用户 Profile 目录不可访问时，传递 `USERPROFILE` 以保证沙箱内解析相对路径，直接缓解 Windows 沙箱类故障。

**4. Token 预算截断避免全字符串扫描** — [#49712](https://github.com/openai/codex/pull/49712)
改用 UTF-8 边界查找选择保留前后缀，不再扫描被丢弃的中间部分，性能优化。

**5. 将会话索引 I/O 移出 async runtime 线程** — [#49708](https://github.com/openai/codex/pull/49708)
同步文件 I/O 与阻塞互斥锁改为 `spawn_blocking` + Tokio mutex，避免阻塞运行时线程，改善并发性能。

**6. API-key 的 cyber access programs 与模型发现解耦** — [#49714](https://github.com/openai/codex/pull/49714)
当 `features.api_key_cyber_access_programs` 启用时，即使关闭模型发现也能转发显式 cyber access programs，提升 API-key 会话灵活性。

**7. 技能调用事件接入 OpenTelemetry** — [#49689](https://github.com/openai/codex/pull/49689)
发射 `codex.skill_invocation` 日志，覆盖显式注入与隐式检测，包含技能名、调用类型、模型、客户端元数据，可观测性增强。

**8. 向活动 turn 投递远程留言板通知** — [#49686](https://github.com/openai/codex/pull/49686)
turn 持有独立通知接收器，帖子预览作为 agent 消息投递，turn 结束/中止/出错时自动取消，Remote 协作实时性提升。

**9. 应用内语音增加托管功能门控** — [#49683](https://github.com/openai/codex/pull/49683)
注册 `in_app_voice` 为默认启用的稳定 feature，供托管环境控制语音权限。

**10. 恢复问题答案时转义命令草稿** — [#49678](https://github.com/openai/codex/pull/49678)
修复 turn 结束后草稿以 `/` 或 shell 命令开头时被误解释为命令而非提示词的问题，避免用户输入被错误执行。

> 另有一批阻塞任务化优化（[#49696](https://github.com/openai/codex/pull/49696)、[#49694](https://github.com/openai/codex/pull/49694)、[#49693](https://github.com/openai/codex/pull/49693)、[#49692](https://github.com/openai/codex/pull/49692)）将文件读取、rollout 扫描、线程历史投影改为可取消的 blocking worker，释放 async runtime 资源。

---

## 五、功能需求趋势

1. **Windows 平台稳定性（最高频）**
   daemon 权限、控制台闪烁、沙箱配置、项目镜像同步、启动卡死——大量 `windows-os` 标签问题集中爆发，Windows 仍是社区第一大痛点平台。

2. **移动端 Remote 配对与跨端同步**
   Android 配对失败（[#48774](https://github.com/openai/codex/issues/48774)、[#49179](https://github.com/openai/codex/issues/49179)）、iOS 看不到 SSH 项目（[#23527](https://github.com/openai/codex/issues/23527)），远程协作能力尚不完整。

3. **模型可见性与配额透明度**
   VS Code 缺 GPT-6.1 Sol（[#49464](https://github.com/openai/codex/issues/49464)）、CLI 报"不支持"但不解释资格（[#49396](https://github.com/openai/codex/issues/49396)）、Bedrock 缺 Sol/Luna（[#47556](https://github.com/openai/codex/issues/47556)）、配额条消失（[#47667](https://github.com/openai/codex/issues/47667)）。

4. **Computer Use / 插件集成**
   插件"已安装不可用"（[#30026](https://github.com/openai/codex/issues/30026)）、无法控制原生桌面（[#45948](https://github.com/openai/codex/issues/45948)）、特定任务缺工具（[#49458](https://github.com/openai/codex/issues/49458)）。

5. **会话与项目持久化可靠性**
   项目消失（[#42739](https://github.com/openai/codex/issues/42739)、[#42867](https://github.com/openai/codex/issues/42867)）、会话历史丢失（[#42025](https://github.com/openai/codex/issues/42025)），数据可见性是信任基础。

---

## 六、开发者关注点

- **Windows 体验恶劣**：后台进程弹窗、daemon 权限回退、沙箱受限三类问题叠加，Windows 用户应优先升级到 0.159.2 验证修复效果。
- **终端交互回归**：右键/中键粘贴在多个 Linux 发行版回归（[#48040](https://github.com/openai/codex/issues/48040)、[#48139](https://github.com/openai/codex/issues/48139)、[#49162](https://github.com/openai/codex/issues/49162)），CLI 老用户影响直接。
- **数据安全焦虑**：项目/会话"消失"类问题虽多为界面同步 bug，但极度消耗用户信任；官方本周 PR 明显在加强 SQLite 损坏检测与备份保留，方向正确（[#49701](https://github.com/openai/codex/pull/49701)）。
- **模型可用性信息不对称**：同一模型在 App/CLI/扩展中的可见性不一致，用户无法判断是资格问题还是集成缺失，期望更透明的错误提示。
- **性能与运行时健康**：大量 PR 转向 `spawn_blocking`、可取消 I/O、避免全量扫描，说明开发者在系统性优化 async runtime 阻塞问题，长期利好会议话加载和大 rollout 场景。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期：2026-10-01**

---

## 📌 今日速览

Gemini CLI 今日发布了 `v0.64.0-nightly` 版本，重点修复了非交互模式下的自主计划执行和工具输出截断问题。社区当前最热的议题仍集中在 **SubAgent 体系完善**、**Agent 自我验证能力**以及**性能与数据可靠性**三大方向，近 24 小时内有 32 个 PR 更新，其中 P1 级别修复占比超过 60%，反映出团队正集中清理 v1.0 后的关键遗留缺陷。

---

## 🚀 版本发布

### v0.64.0-nightly.20260930.g38700b4b3
- **fix(core)**：在非交互模式下启用自主计划执行（[#29539](https://github.com/google-gemini/gemini-cli/pull/29539)）
- **fix(core)**：当 `maxChars <= 0` 时禁用 `formatTruncatedToolOutput` 的截断行为，避免误截断工具返回内容（[#29540](https://github.com/google-gemini/gemini-cli/pull/29540)）

> 💡 说明：这是 nightly 通道版本，正式 stable 用户尚未升级到此版本，但内部已可用于验证修复效果。

---

## 🔥 社区热点 Issues（Top 10）

| # | 标题 | 评论 | 👍 | 重要性 |
|---|------|------|-----|--------|
| [#3132](https://github.com/google-gemini/gemini-cli/issues/3132) | **[Agents] Post V1.0 Work** | 46 | 50 | 社区呼声最高的 SubAgent 体系蓝图，定义了可复用的 LLM 工具编排组件，规划 v1.0 之后的演进方向 |
| [#3716](https://github.com/google-gemini/gemini-cli/issues/3716) | **Infra: Build and Tag Docker for PR's** | 13 | 0 | 推动每个 PR 自动构建沙箱 Docker 镜像，提升贡献者本地测试体验，是基础设施长期瓶颈 |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent MAX_TURNS 被错误报告为 GOAL success** | 13 | 2 | **P1 Bug**：子代理触发 `MAX_TURNS` 后仍上报 `status: success`，掩盖真实中断，影响审计与可观测性 |
| [#10673](https://github.com/google-gemini/gemini-cli/issues/10673) | **Flicker-free robust terminal rendering** | 9 | 0 | 1.0 UI 改进优先级：终端渲染闪烁问题长期影响使用体验，目标替代 Ink static |
| [#15269](https://github.com/google-gemini/gemini-cli/issues/15269) | **Missing Subagent Hook Events** | 8 | 0 | 需要为 SubAgent 生命周期补充 `BeforeSubAgent`/`AfterSubAgent` 钩子事件，与主代理钩子保持对等 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **AST-aware file reads, search, and mapping** | 7 | 1 | 评估 AST 感知工具链价值：通过精确的方法边界读取减少 turn 数并降低 token 噪声 |
| [#17110](https://github.com/google-gemini/gemini-cli/issues/17110) | **Agent should run changes to validate app** | 5 | 0 | 让 Agent 自我验证改动的反馈闭环，被认为是提升 LLM 编码代理有效性的核心能力 |
| [#11802](https://github.com/google-gemini/gemini-cli/issues/11802) | **Add OTLP headers for telemetry** | 5 | 7 | **点赞最高**：企业用户向 OTEL Collector 推送遥测数据时需自定义鉴权头，是企业可观测性的硬需求 |
| [#17602](https://github.com/google-gemini/gemini-cli/issues/17602) | **[Remote Agents] A2A M2M Auth** | 5 | 0 | 为非交互式 A2A 场景设计 OAuth 2.0 Client Credentials 与 Service Account 流程 |
| [#15179](https://github.com/google-gemini/gemini-cli/issues/15179) | **Recursive subagent delegation** | 4 | 1 | 探索子代理递归委托能力，v1 时主动禁止，需在后续版本评估是否开放 |

> 📊 30 条热点 Issue 中，"area/agent" 占比超过 **65%**，SubAgent 体系与 Agent 行为规范仍是当前的产品主线。

---

## 🛠 重要 PR 进展（Top 10）

### 🔒 安全与数据可靠性
1. **[#29583](https://github.com/google-gemini/gemini-cli/pull/29583)** — `fix(cli): enforce read-only workspace settings in untrusted folders`
   在未验证工作区强制 `.gemini/settings.json` 只读，防止 `gemini mcp add` 等配置命令静默覆盖用户设置。

2. **[#29584](https://github.com/google-gemini/gemini-cli/pull/29584)** — `fix(core): prevent deletion of resumed session history on quick exit`
   修复一个**严重数据丢失问题**：恢复会话后若用户快速 Ctrl+C 或 /exit，对话历史文件会被永久删除。

3. **[#29578](https://github.com/google-gemini/gemini-cli/pull/29578)** — `fix(mcp): request offline access for Google endpoints`
   修复远程 MCP 服务器配置 OAuth 2.0 时无法获取 refresh token、后台刷新失败的问题，影响 Google Workspace 集成。

4. **[#29525](https://github.com/google-gemini/gemini-cli/pull/29525)** — `fix(a2a-server): never derive workspace trust from request agentSettings`
   修复 A2A 服务器 `createTask` 通过 `agentSettings.isTrusted` 被远程请求提权的潜在安全风险。

### ⚡ 性能与并发
5. **[#29582](https://github.com/google-gemini/gemini-cli/pull/29582)** — `perf(core): optimize ignore filtering and enable subtree pruning`
   引入目录级状态记忆、通配符子树剪枝、symlink 缓存，解决大型仓库多秒级阻塞。

6. **[#29499](https://github.com/google-gemini/gemini-cli/pull/29499)** — `fix(core): serialize file tool operations and make writes atomic` (已关闭)
   修复并行子代理并发文件操作时的"读取-修改-写入"竞态导致的静默更新丢失。

7. **[#29568](https://github.com/google-gemini/gemini-cli/pull/29568)** — `fix(core): implement append-only delta patching in ChatRecordingService`
   将 `ChatRecordingService` 由全量重写改为增量 append-only delta，降低内存占用与 IO 抖动。

### 🖥 CLI/UX 体验
8. **[#29520](https://github.com/google-gemini/gemini-cli/pull/29520)** — `fix(cli): preserve scroll position and partition pending height budget`
   解决流式输出与工具确认弹窗时视口滚动位置被重置的问题，长对话回顾体验显著提升。

9. **[#29581](https://github.com/google-gemini/gemini-cli/pull/29581)** — `fix(cli): resolve @file:line references and prevent ghost text wrap hang`
   修复 `@file:10`、`@file:10-20` 这类行号引用解析失败，以及窄终端宽字符下 `InputPrompt` 无限循环。

10. **[#29502](https://github.com/google-gemini/gemini-cli/pull/29502)** — `fix(cli): ensure Enter and Spacebar reliably confirm selection list options`
    确保 `useSelectionList`、`RadioButtonSelect`、`ToolConfirmationMessage` 在 Windows IDE 终端下回车/空格键可稳定确认。

---

## 📈 功能需求趋势

从本期 50 条更新 Issues 中提炼出的**社区最关注方向**：

| 方向 | 代表 Issues | 趋势解读 |
|------|-------------|----------|
| **SubAgent 体系深化** | #3132、#15269、#15179、#15670、#15975、#22598 | 出现频次最高，从"是否要做"过渡到"如何体系化"，涉及生命周期钩子、模板注册、轨迹可视化、递归委托等多个子议题 |
| **Agent 自我验证与安全护栏** | #17110、#22672、#15272、#23571 | 社区要求 Agent 能自我运行测试验证修改，同时约束危险命令（`git reset --force`、随机散落脚本） |
| **可观测性与遥测** | #11802、#12244、#22323 | OTLP 自定义头、OpenTelemetry 全面化、子代理终止原因如实上报，是企业落地的必要条件 |
| **AST-aware 工具** | #22745、#22746 | 用 AST 实现精准读取、符号跳转、代码库映射，有望显著降低 token 消耗与 turn 数 |
| **远程 Agent / A2A 生产化** | #17595、#17602、#17603、#29525 | 从 Demo 走向生产：OAuth/OIDC、Metadata Discovery、信任隔离等关键模块陆续完善 |
| **性能与稳定性** | #24246、#22465、#23571、#10673、#10168 | 工具数量 > 400 触发 400 错误、vite 交互卡死、Windows 性能差等老问题持续被关注 |
| **企业特性** | #15462、#14540、#15272 | 企业级 Hooks 开关、CI/CD 安全审计、Hook 默认沙箱化是企业采购的前置要求 |

---

## 💬 开发者关注点

综合近期 Issue 与 PR 评论，开发者反馈中的**高频痛点**集中在以下几方面：

1. **数据丢失风险高**：恢复会话后快速退出即丢失历史的 [#29424 / #29584](https://github.com/google-gemini/gemini-cli/pull/29584) 是当下最紧迫的体验问题。
2. **大仓库性能瓶颈**：[#29582](https://github.com/google-gemini/gemini-cli/pull/29582) 等 PR 显示 `.gitignore` 过滤、文件发现仍是阻塞性瓶颈，bundling 与子树剪枝成为关键优化路径。
3. **工具数量上限**：[#24246](https://github.com/google-gemini/gemini-cli/issues/24246) 暴露超过 128 个工具时触发 400 错误，Agent 需要智能裁剪工具作用域。
4. **终端兼容性**：Windows IDE、窄终端、宽字符场景下 [`Enter`/`Space` 不可用](https://github.com/google-gemini/gemini-cli/pull/29502)、[@file:line 解析失败](https://github.com/google-gemini/gemini-cli/pull/29581) 仍是高频痛点。
5. **行为可解释性**：子代理异常终止被错误报告为成功（[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)），开发者迫切需要透明的执行轨迹，[/chat share 暴露子代理轨迹](https://github.com/google-gemini/gemini-cli/issues/22598) 是呼声强烈的诉求。
6. **Hook 生态不完善**：`compress` vs `compact` 不兼容（[#14724](https://github.com/google-gemini/gemini-cli/issues/14724)）、`Logout` matcher 未触发、子代理钩子缺失等问题，让 Hooks 在跨 CLI 迁移时反复踩坑。
7. **平台差异**：Windows 文件锁（[#19013](https://github.com/google-gemini/gemini-cli/pull/19013)）、安装慢、Bundling（[#10168](https://github.com/google-gemini/gemini-cli/issues/10168)）仍是开发者诟病的方向。

---

> 📎 数据来源：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) · 统计区间：2026-09-30 ~ 2026-10-01
>
> 本日报由 AI 自动生成，基于过去 24 小时活跃的 Issues、PRs 与 Releases 数据，用于跟踪社区动态与产品演进方向。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



# GitHub Copilot CLI 社区动态日报
**数据周期**：2026-09-30（数据来源：`github.com/github/copilot-cli`）

---

### 1. 今日速览
Copilot CLI 在今天发布了重要版本 **v1.0.90**（及候选版本 v1.0.90-6/7），核心更新包括支持 **GPT-6.1 Sol 模型**、新增 `--mcp-github-auth` 作用域认证，以及会话级只读目录授权和中断恢复权限提示等体验优化。社区方面，关于**交互模式下的工具白名单请求（#1973）**、**代码审查时频繁出现的 400 错误（#1274）**，以及 **MCP 生态的连接与认证问题**（如 Azure MCP、Slack OAuth 范围等）成为了讨论和反馈的热点。

---

### 2. 版本发布：v1.0.90 系列
Copilot CLI 发布了 `v1.0.90` 稳定版及对应的增量更新（`v1.0.90-6` / `v1.0.90-7`），主要特性如下：

*   **新模型支持**：在模型选择中新增对 **GPT-6.1 Sol** 的支持。
*   **MCP 安全与认证增强**：新增 `--mcp-github-auth` 参数，可将 GitHub 账户认证范围限制在经批准的 MCP 服务器来源。
*   **权限与路径访问优化**：新增会话级（session-scoped）只读目录授权，可在路径访问提示中进行精细化控制。
*   **会话恢复体验提升**：权限提示在中断会话恢复后依然可响应（不再因恢复而失去焦点）。
*   **UI/UX 细节修复**：在紧凑时间线中，点击任意位置可折叠展开的工具调用；在语音模式关闭或准备中时，按住 `Space` + `Ctrl+X` 可触发 V explain 功能。

---

### 3. 社区热点 Issues（Top 10 精选）
以下挑选了过去一段时间内评论数、点赞数最高，或对开发者工作流影响最大的 10 个 Issue：

#### 🔴 高优先级 Bug / 阻塞性问题
*   **[#1274] CLI 在对 diff 文件进行代码审查时频繁报 400 错误** 👍 13 | 💬 32
    *   **摘要**：95% 的代码审查请求因“无效请求体（invalid request body）”失败。开发者怀疑是 CLI 构造请求时的格式问题或服务端校验问题，已提供详细 Debug 日志。
    *   **重要性**：直接影响 Copilot CLI 核心的代码审查工作流，属于高频阻塞性 Bug。
    *   [链接](https://github.com/github/copilot-cli/issues/1274)
*   **[#4998] macOS 系统更新/重启后 CLI 无法使用（`.mcp-writer.binding` 残留过期设备 ID）** 👍 1 | 💬 2
    *   **摘要**：安装 macOS 安全更新并重启后，所有新会话和恢复的旧会话均无法处理提示词，根因是持久化绑定文件中残留了过期的文件系统设备 ID。
    *   **重要性**：导致 macOS 用户在特定系统更新后完全无法使用 CLI，属于严重环境适应性问题。
    *   [链接](https://github.com/github/copilot-cli/issues/4998)
*   **[#5008] 1.0.89 启动报错 "Failed to read model provider attribution: Error: Not authenticated"** 👍 4 | 💬 4
    *   **摘要**：每次新交互会话启动时会短暂弹出两次认证错误，3 秒后登录完成且后续请求正常，疑似启动时读取模型提供商 attribution 的竞态条件。
    *   **重要性**：影响新版本启动体验的视觉 Bug，虽不影响最终使用，但破坏了首印象。
    *   [链接](https://github.com/github/copilot-cli/issues/5008)
*   **[#3534] WSL2 (ARM64) 下 `/copy` 命令因 cmd.exe 引号问题失败** 👍 5 | 💬 7
    *   **摘要**：在 WSL2 ARM64 环境下，通过 Windows 路径写入剪贴板时，因 `cmd.exe` 包装器的引号转义 Bug 导致 `clip.exe` 退出码为 1。
    *   **重要性**：影响

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期：2026-10-01** ｜ 数据来源：github.com/anomalyco/opencode

---

## 一、今日速览

过去 24 小时 OpenCode 仓库无新版本发布，但社区讨论热度集中在 **配额计费争议**（Go 订阅用量统计异常）与 **权限/插件系统缺陷** 上。其中 XDG 目录规范违规（#27786）以 19 条评论位列榜首，多个 LongCat、Space Bunny、Zen API 等模型/服务商可用性问题集中爆发。PR 端由核心维护者 `rekram1-node` 主导的 AI 协议层重构（工具命名空间、OpenRouter API 选择）成为最受关注的进展。

---

## 二、版本发布

无新版本发布（最近一次相关版本讨论涉及 v1.18.25 的 macOS 代码签名问题 #46313 与 Desktop 2.0.18/2.0.20 的回归问题 #51638、#52363）。

---

## 三、社区热点 Issues（Top 10）

| # | Issue | 评论 | 👍 | 重要性说明 |
|---|-------|------|---|-----------|
| 1 | [#27786](https://github.com/anomalyco/opencode/issues/27786) XDG Base Directory 规范违规：node_modules 被装到 ~/.config | 19 | 9 | **规范与隐私合规问题**，违反 freedesktop 官方规范，污染用户配置目录，社区长期关注 |
| 2 | [#42985](https://github.com/anomalyco/opencode/issues/42985) OpenCode Go 用量统计约为 DeepSeek V4 Flash 实际费用 4 倍 | 16 | 7 | **计费透明度核心问题**，直接影响付费用户信任 |
| 3 | [#49389](https://github.com/anomalyco/opencode/issues/49389) 核心会话能力无法从插件触达（5 个能力缺口） | 12 | 4 | **插件生态可用性瓶颈**，反映 V2 插件 API 仍不完整 |
| 4 | [#20066](https://github.com/anomalyco/opencode/issues/20066) ⭐「Allow always」应跨会话持久化（已关闭） | 9 | 29 | **获赞最高**的功能请求，社区认为理应作为基本能力 |
| 5 | [#36423](https://github.com/anomalyco/opencode/issues/36423) v2 subagent：后台子代理无法取消 | 6 | 7 | **V2 架构关键缺陷**，长时间任务失去控制权 |
| 6 | [#52341](https://github.com/anomalyco/opencode/issues/52341) LongCat 2.5 Preview Free 端点不可达 | 6 | 0 | **新模型上线即故障**，实时可用性事件 |
| 7 | [#41391](https://github.com/anomalyco/opencode/issues/41391) Go 配额占比与用量记录、文档限额不符 | 5 | 2 | 配额模型与实际账单不一致，影响企业计费预期 |
| 8 | [#52347](https://github.com/anomalyco/opencode/issues/52347) Go 计划配额百分比剧烈跳动（18%→82%） | 5 | 2 | 配额统计波动过大，疑似滚动窗口 bug |
| 9 | [#46313](https://github.com/anomalyco/opencode/issues/46313) macOS v1.18.25 发布二进制签名验证失败 | 5 | 0 | **供应链安全风险**，影响 Gatekeeper/SIP 用户安装 |
| 10 | [#52346](https://github.com/anomalyco/opencode/issues/52346) 自动从 provider 检测 context window | 4 | 0 | 长期被多个 issue 关联的需求（#40908、#10759），LLM 适配层关键能力 |

**社区反应**：投诉最多的两类分别是「**配额/计费不透明**」（#42985、#41391、#52347、#52337、#52371）和「**插件/权限模型不完整**」（#49389、#50434、#52083、#52360、#52321），二者合计占前 30 条 issues 的近一半。

---

## 四、重要 PR 进展（Top 10）

| PR | 类型 | 内容要点 |
|----|------|---------|
| [#52382](https://github.com/anomalyco/opencode/pull/52382) | core fix | 去重完整 AGENTS.md 读取，避免指令被重复注入与重放 |
| [#52219](https://github.com/anomalyco/opencode/pull/52219) | ai feat | 按模型族选择 OpenRouter 的 wire API（openai/x-ai/meta 共用 Responses） |
| [#52200](https://github.com/anomalyco/opencode/pull/52200) | ai refactor | 跨协议保持声明的工具命名空间（`{namespace, name}`），V2 AI 层语义统一 |
| [#43069](https://github.com/anomalyco/opencode/pull/43069) | cli feat | 新增 `opencode serve --no-auth` 与 `OPENCODE_AUTH=false`，便于自托管 |
| [#46312](https://github.com/anomalyco/opencode/pull/46312) | fix | 终止本地 stdio MCP 进程树，避免僵尸子进程 |
| [#46307](https://github.com/anomalyco/opencode/pull/46307) | tui fix | TUI 恢复会话时正确转发 `--fork`，解决 4 个老 issue |
| [#46302](https://github.com/anomalyco/opencode/pull/46302) | app fix | 仅在权限请求支持「always」时显示对应选项 |
| [#46277](https://github.com/anomalyco/opencode/pull/46277) | desktop fix | 阻止桌面端自动更新回退到老版本（防止 stale OTA） |
| [#46272](https://github.com/anomalyco/opencode/pull/46272) | fix | 连续 10 次相同工具调用自动停止，打破死循环 |
| [#46271](https://github.com/anomalyco/opencode/pull/46271) | fix | 允许生成配置 schema 中包含自定义 provider 模型 |
| [#46269](https://github.com/anomalyco/opencode/pull/46269) | fix | 中断/中止时拒绝 `question` 工具的 pending 提问 |
| [#46226](https://github.com/anomalyco/opencode/pull/46226) | app fix | 反映全局 `permission:allow` 到设置中的 auto-accept 开关 |

观察：当前 PR 收尾阶段以 **automated-pr-cleanup** 批量清理为主线，多为小颗粒 bug fix；由 `rekram1-node` 主导的 **#52200、#52219、#52382** 构成 V2 AI 协议层重构主线，是少数触及核心抽象的中长期 PR。

---

## 五、功能需求趋势

按议题聚类，过去 24h 内社区最关注的方向：

1. **IDE/桌面端集成**（热度高）
   - 自定义标题栏（#36225）、新会话立即使用 terminal/文件浏览（#52348）、iOS PWA 安全区适配（#46200）、`/compact` 缺失（#51638）
2. **计费/配额透明化**（付费用户痛点）
   - 用量与限额匹配（#41391、#42985）、跳变 bug（#52347）、透支速度异常（#52371、#52337）
3. **Provider/模型扩展能力**
   - 自动检测 context window（#52346）、OpenRouter 模型族路由（#52219）、Fireworks AI 原生登录（#46223）、Chinese provider 成本跟踪（#34877）
4. **插件体系完善**
   - V2 不可达能力补齐（#49389）、`@opencode/plugin` 解析失败（#50434）、`server()` 默认导出静默失效（#52321）
5. **权限与安全**
   - 复合 shell 命令重定向被吞（#52083、#52360）、「Allow always」持久化（#20066）
6. **新模型实时问题**
   - LongCat 2.5 Preview、Space Bunny、Muse Spark 1.3、gpt-6-luna 等多条「可用但已中断」报告

---

## 六、开发者关注点

通过对 50 条 Issue 与 20 条 PR 的归并，社区高频反馈可归纳为：

- **配置文件污染**：违背 XDG 规范的 `~/.config/opencode/node_modules` 安装方式被多名用户反复要求整改。
- **计费仪表盘可信度**：Go 订阅用户多次报告「百分比变化无对应用量」「图表与限额文档冲突」，官方文档与运行时表现未对齐。
- **V2 插件 API 半成品**：`server()` 与 `@opencode/plugin` 解析、命令/技能 transform 注册三个层面的「沉默失败」让本地插件难以调试。
- **Shell 权限语义漏洞**：复合命令 + 重定向组合下，已 allow 的资源被误判为未授权，构成实际可利用的文件写原语（#52083 标签为 `compliance`）。
- **多 Provider 一致性**：同一会话在不同供应商切换时 reasoning 流式显示丢失（#52377）、会话长度变大后增量不吐字，反映上游协议契约未被 `ai-sdk` 统一透出。
- **macOS 发行链安全**：v1.18.25 公网二进制签名无效（#46313），影响使用 Gatekeeper 的企业部署。
- **新模型「灰度即故障」**：LongCat 2.5、Space Bunny、gpt-6-luna、Muse Spark 1.3 在同窗口内出现 endpoint 中断、500/429 不透明响应，提示路由与限流文档需对齐。

---

> 报告生成时间：2026-10-01 ｜ 数据窗口：2026-09-30 ~ 2026-10-01 (UTC)
> 维护提示：近期 `automated-pr-cleanup` 关闭了大量 PR，请关注其关闭原因，避免有价值的修复被误关。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



# Pi 社区动态日报 — 2026-10-01

> 数据来源：[github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono)

---

## 1. 今日速览

Pi 于今日发布 **v0.99.2**，核心改进围绕 MCP 服务器的默认行为——使其不再遮蔽主流程、不再阻塞首条 prompt。社区活跃度极高，过去 24 小时内超过 50 条 Issue 更新、22 条 PR 动向，覆盖 MCP 工具名冲突、Anthropic 认证流程、Agent 循环稳定性、TUI 交互体验等多个关键方向。

---

## 2. 版本发布

### v0.99.2 — MCP 服务器"退居幕后"

- 具有默认 `codemode` 暴露的 MCP 服务器不再出现在 `codemode` 的工具描述中，也不会再阻塞首个 prompt 的发送。
- 这些服务器改由简短的系统提示段引入，脚本通过 `searchTools()` 和 `describeName` 按需发现工具。

🔗 https://github.com/badlogic/pi-mono/releases/tag/v0.99.2

---

## 3. 社区热点 Issues

> 从过去 24 小时更新的 50 条 Issue 中，按评论数与严重程度综合筛选。

### 🔴 #10031 — Pi 在 ESC 停止思考后 sporadically 卡在 "Working…"（18 评论，2 👍）
**作者**: kkovacs | **状态**: OPEN

用户反馈自 v0.84.0 起，频繁出现按 ESC 中断思考后 Pi 卡死在 "Working…" 状态，唯一恢复方式是 Ctrl+C 退出后 `pi -c` 重连。跨机器复现。这是典型的前端/后端状态同步问题，社区关注度极高。

🔗 https://github.com/earendil-works/pi/issues/10031

---

### 🔴 #9566 — context size 默认回落 128k，未采用真实上下文窗口（9 评论，4 👍）
**作者**: nicois | **状态**: OPEN

当 `models.json` 中 provider 的模型 `id` 与已暴露模型重名时，默认上下文长度被强制设为 128k，同时 `cost`、`input`、`maxTokens` 也使用错误值。这会导致长上下文任务被意外截断，影响计费准确性。

🔗 https://github.com/earendil-works/pi/issues/9566

---

### 🔴 #8331 — Agent 循环在 provider 流中断时永久挂起（6 评论，2 👍）
**作者**: panbergco | **状态**: OPEN

在 Anthropic 529 过载窗口期间，四个长期运行的会话在 turn 中途冻结。SSE 流停止发送事件但从未关闭，`streamAssistantResponse` 中的 `for await` 永远等待。属于高危稳定性缺陷，涉及网络超时与流生命周期管理。

🔗 https://github.com/earendil-works/pi/issues/8331

---

### 🔴 #9134 — Anthropic 适配器静默丢弃自定义工具 schema 中的根级 `anyOf`（5 评论）
**作者**: Tolasmond | **状态**: OPEN

自定义工具参数 schema 使用根级 `anyOf` 时，Pi 的校验器保留了约束，但 Anthropic Messages 适配器在模型侧 `input_schema` 中静默移除了该关键字，导致模型收到的 schema 仅含 `type`、`properties`、`required`，约束丢失。

🔗 https://github.com/earendil-works/pi/issues/9134

---

### 🔴 #10162 — 输入图片过多导致 Agent 任务中断（5 评论）
**作者**: S1M0N38 | **状态**: OPEN

引入图片自动压缩后，超出限制的图片被丢弃而非压缩，导致任务中断。用户期望 Pi 能长时间自主运行（如看护 PR、QA 测试），图片处理策略需要重新设计。

🔗 https://github.com/earendil-works/pi/issues/10162

---

### 🟡 #9571 — provider 重试：畸形 `Retry-After` HTTP-date 导致立即重试（7 评论）
**作者**: Lubaoshuai | **状态**: CLOSED

429 响应携带畸形 `retry-after` 头时，`getRetryDelayMs` 计算出 `NaN` 延迟，导致紧循环重试。已修复。

🔗 https://github.com/earendil-works/pi/issues/9571

---

### 🟡 #10212 — 新会话首次响应因 MCP 服务器启动阻塞 8–10 秒（6 评论）
**作者**: fyeeme | **状态**: CLOSED

自 v0.99.1 起，新会话首次响应延迟约 8–10s，后续响应正常。移除所有扩展无效。已修复。

🔗 https://github.com/earendil-works/pi/issues/10212

---

### 🟡 #10172 — MCP OAuth：新增 `authServerMetadataUrl` 与 `skipIssuerMetadataValidation` 支持（5 评论）
**作者**: fmoda3 | **状态**: CLOSED

满足 MCP OAuth 迁移需求，新增两个 per-server OAuth 配置字段。已合并。

🔗 https://github.com/earendil-works/pi/issues/10172

---

### 🟡 #9953 — Anthropic strict tools：`makeStrictJsonSchema` 保留 `minimum/maximum/minLength` 导致 API 400（3 评论，1 👍）
**作者**: vruru | **状态**: CLOSED

使用 `constrainedSampling: { type: "json_schema", strict: "prefer" }` 时，`Type.Integer({ minimum, maximum })` 等约束关键字被保留，但 Anthropic strict tool use 拒绝这些关键字，所有请求均失败。已修复。

🔗 https://github.com/earendil-works/pi/issues/9953

---

### 🟡 #9852 — openai-responses 中 MCP 工具名含 `:` 导致 400（3 评论）
**作者**: Wilson-Guan | **状态**: OPEN

`openai-responses` / `openai-codex-responses` 转换逻辑原样写入 `function_call.name`，而 MCP 风格工具名（如 `mcp:server:tool`）不符合 OpenAI Responses API 的 `^[a-zA-Z0-9_-]+$` 规范，导致 API 拒绝。需做名称净化。

🔗 https://github.com/earendil-works/pi/issues/9852

---

## 4. 重要 PR 进展

> 从过去 24 小时更新的 22 条 PR 中，按功能重要性筛选。

### 🔧 #10242 — Anthropic provider 使用 SDK 的 Workload Identity Federation 环境变量
**作者**: philfreo | **状态**: CLOSED（关闭 #10177）

无 API key、无 `ANTHROPIC_AUTH_TOKEN` 时，将 `ANTHROPIC_FEDERATION_RULE_ID`、`ANTHROPIC_ORGANIZATION_ID`、`ANTHROPIC_SERVICE_ACCOUNT_ID`、`ANTHROPIC_IDENTITY_TOKEN_FILE` 作为配置传给 SDK，实现无密钥联邦认证。

🔗 https://github.com/badlogic/pi-mono/pull/10242

---

### 🔧 #10194 — 为 Anthropic OAuth 新增"复制代码"登录方式
**作者**: lucasmeijer | **状态**: CLOSED

当前 localhost redirect 登录在远程机器上体验极差。此 PR 增加基于 `http` 的 code-based 登录流，用户可复制代码完成认证，已在 Atelier cloud agent 环境中生产验证。

🔗 https://github.com/badlogic/pi-mono/pull/10194

---

### 🔧 #10241 — 消歧 MCP codemode 工具名冲突
**作者**: acmerfight | **状态**: CLOSED（关闭 #10239）

`read-file` 与 `read_file` 规范化为同一 codemode 标识符，导致 `searchTools()` 返回的名称可能调用错误工具。此 PR 按 codemode 标识符追踪名称所有权，利用现有 hash 后缀机制消歧。

🔗 https://github.com/badlogic/pi-mono/pull/10241

---

### 🔧 #10232 — 将 SQLite 存储改造为异步
**作者**: christianklotz | **状态**: CLOSED

将 `SqliteExecutor` 的 `prepare`/`SqliteStatement` 替换为 `run`/`get`/`all(sql, ...params)` 接口，适配器可在 harness runtime 之外运行。按 SQL 文本缓存预编译语句，保持事务语义。

🔗 https://github.com/badlogic/pi-mono/pull/10232

---

### 🔧 #10246 — 动态重载 `defaultTools` 新增项
**作者**: wutongyuonce | **状态**: CLOSED

当前在会话中途添加 `+codemode` 到 `defaultTools` 需要重启或手动激活。此 PR 支持热重载，会话记录启动时解析的选择，保留显式启动选项和已有注册表行为。

🔗 https://github.com/badlogic/pi-mono/pull/10246

---

### 🔧 #9714 — Azure provider 新增 Chat Completions 部署支持
**作者**: jsanter27 | **状态**: OPEN

Azure provider 之前仅实现了 Responses API，导致使用 Chat Completions 的 Foundry 部署（如 DeepSeek V4 Pro）无法工作。此 PR 扩展 Azure provider 以支持其他 API 风格。

🔗 https://github.com/badlogic/pi-mono/pull/9714

---

### 🔧 #10235 — 程序化 provider 配置（面向 agiquery 嵌入）
**作者**: catchex | **状态**: CLOSED

允许 agiquery 在启动时将模型配置（endpoint、API 风格、模型列表、凭据）直接传递给 Pi，避免编辑 `~/.pi/agent/models.json`。适用于每次请求可能使用不同上游的网关场景。

🔗 https://github.com/badlogic/pi-mono/pull/10235

---

### 🔧 #10233 — 新增 `--base-url` 和 `--api-type` 运行时覆盖
**作者**: catchex | **状态**: CLOSED

在不修改持久化 `models.json` 的情况下，支持单次运行指向不同的 gateway、proxy 或自托管服务。与 #10235 互补，分别解决批量嵌入与 CLI 临时覆盖场景。

🔗 https://github.com/badlogic/pi-mono/pull/10233

---

### 🔧 #10218 — 修复 TUI 斜杠命令前导空白补全
**作者**: haoqixu | **状态**: CLOSED

带前导空白的斜杠命令错误触发路径补全。修复后 `' /'` 完成为 `' /model '` 而非 `' //bin/ '`。

🔗 https://github.com/badlogic/pi-mono/pull/10218

---

### 🔧 #10261 — 新增 prompt 模板文档评估
**作者**: christianklotz | **状态**: OPEN

为项目级和用户级 `/current-time` prompt 模板增加实时文档提升用例，强化文档审计证据，将昂贵的审计后移至 CI 流程。

🔗 https://github.com/badlogic/pi-mono/pull/10261

---

## 5. 功能需求趋势

从本周所有 Issues 和 PR 中提炼出以下社区最关注的功能方向：

| 方向 | 热度 | 代表 Issue/PR |
|------|------|---------------|
| **MCP 深度集成** | 🔥🔥🔥 | #10241, #10172, #10186, #10253, #10252, #10239 |
| **多 Provider 兼容性** | 🔥🔥🔥 | #9714, #10242, #10235, #10233, #9852, #9954 |
| **Agent 稳定性** | 🔥🔥 | #10031, #8331, #9571, #10212 |
| **工具 Schema 与校验** | 🔥🔥 | #9134, #9557, #9953, #10162 |
| **TUI/UX 体验** | 🔥 | #10218, #10169, #8528, #10216, #10255 |
| **性能与架构** | 🔥 | #10260, #10232, #10261 |

**MCP 相关需求最为密集**：工具名冲突消歧、OAuth 多账户支持、按需连接、codemode 工具可见性控制、OSC-8 可点击链接等，说明社区正在将 Pi 从单机工具推向多服务器编排平台。

---

## 6. 开发者关注点

总结社区反馈中的高频痛点与诉求：

1. **MCP 体验碎片化**：工具命名冲突、认证流程复杂、连接时机不透明。开发者希望 MCP 服务器能"按需连接、按需认证、工具名唯一"。
2. **Provider 与凭据管理**：多环境（本地/远程/云代理）下认证方式割

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报

**日期：2026-10-01** | **数据来源：[QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)**

---

## 一、今日速览

社区活跃度维持高位，过去 24 小时更新了 50 条 Issue 与 50 条 PR。最显著的趋势是 **Managed Agent（托管智能体）架构的持续推进**——围绕第 #12380 号架构提案的 Stage D/G/H 分阶段交付工作密集展开，涉及会话持久化、Turn 接管、Hosted Hooks 等多个子系统。同时，一条 **P1 安全级 Issue（#13106）** 暴露了 shell 权限检查中 cd 重定向目标被静默忽略的漏洞，值得所有 CLI 用户关注。

---

## 二、版本发布

### [v0.24.7-nightly.20260929.b906f937ec](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.7-nightly.20260929.b906f937ec)

夜间构建版本，主要包含两项修复：

- **fix(core)**：将 Code Mode 文本与懒加载工具发现机制对齐（PR #12990）
- **fix(permissions)**：修复批准权限的传递与继承问题

均为核心体验层面的修正，无破坏性变更。

---

## 三、社区热点 Issues（10 条）

### 1. 🔴 [P1 安全漏洞] [cd 重定向目标被静默排除在写入检查之外](https://github.com/QwenLM/qwen-code/issues/13106)

`resolveCdTargetCwd` 调用 `extractRedirects` 后丢弃了结果，导致如 `cd somedir > .qwen/settings.json` 这样的复合命令产生零条提取操作，而 shell 实际会截断重定向目标文件。**绕过写入拒绝检查的权限漏洞**。评论 4 条，社区反应迅速，此为当前优先级最高的修复项。

### 2. [架构提案] [Managed Agent 双路径架构与分阶段交付](https://github.com/QwenLM/qwen-code/issues/12380)

整个 Managed Agent 体系的母提案，定义了保留 TypeScript agent loop、推理与工具环境解耦、Session 持久化归属等核心设计。**37 条评论**，是当前最活跃的讨论焦点，Stage D/G/H 均从此派生。

### 3. [Stage D 后续] [持久化生命周期、Turns、Actions 与 AgentDefinition](https://github.com/QwenLM/qwen-code/issues/12867)

承接 #12380 的 Stage D 剩余工作，覆盖 durable lifecycle、Turns、Actions、admission profile 等关键契约。评论 11 条，wenshao 主导，已进入实际交付阶段。

### 4. [遥测漏洞] [投机性 accept 应用失败时完全不发遥测](https://github.com/QwenLM/qwen-code/issues/13062)

投机性 follow-up 的 accept 操作在文件拷贝失败时，除了文件计数外一切表现正常，`SpeculationEvent` 遥测从 `.then()` 分支发出导致**失败被完全静默**。P3 但影响可观测性，评论 8 条。

### 5. [Hosted Workspace 工具准入] [只读搜索工具的新 Profile](https://github.com/QwenLM/qwen-code/issues/13030)

为 Hosted Harness 新增 `list_directory`、`glob`、`grep_search` 三个只读搜索工具的准入 profile，通过现有 Broker 路径执行。这是 Hosted Workspace 功能完整性的关键补齐，评论 8 条。

### 6. [会话历史投影缺陷] [provenance 字段在 api-history 投影中丢失](https://github.com/QwenLM/qwen-code/issues/12042)

`record provenance` 字段在 `ChatRecord[]` 投影到 `Content[]` 时丢失，导致系统通知记录与真实用户提交无法区分，两个通知形态仍被误分类。**影响会话中断检测的准确性**，评论 6 条。

### 7. [性能优化] [无操作提取后的有界冷却策略](https://github.com/QwenLM/qwen-code/issues/13004)

针对自动记忆提取频繁空跑的问题，提出有界冷却策略：当连续多轮无可持久化产物的提取后，不再每轮都启动新 fork extractor。**性能相关的用户体验优化**，评论 5 条。

### 8. [LSP 误报] [诊断失败时静默报告"无问题"](https://github.com/QwenLM/qwen-code/issues/12467)

LSP 诊断查询失败或服务不可用时，仍返回 `No diagnostics found` 且 `is_error: false`，让用户和模型误以为代码干净。**可能导致模型基于错误的"无问题"状态继续生成代码**，P2 级别，评论 4 条。

### 9. [Windows 启动崩溃] [CLI 闪退无任何输出](https://github.com/QwenLM/qwen-code/issues/13076)

Windows 上 `qwen` 命令立即闪退，PowerShell 和 cmd 均复现，v0.24.7 仍然存在。启动器未输出 `spawnSync` 的错误结果导致无法定位原因。多人独立反馈，属于**高影响的平台缺陷**。

### 10. [安全增强] [Host 重新注册后残留有效凭据](https://github.com/QwenLM/qwen-code/issues/13122)

`enrollAgentHost` 总是生成新 hostId/secret 并追加，没有按 name 或 workspaceCwd 去重。重新注册后**旧凭据仍然有效**，形成凭据泄漏面。P2 安全议题，评论 3 条。

---

## 四、重要 PR 进展（10 条）

### 1. [默认延迟 Agent 与 Goal 声明](https://github.com/QwenLM/qwen-code/pull/13033)

将 `agent`、`list_agents`、`get_goal`、`update_goal`、`propose_goal` 等协调工具改为默认按需发现，用户无需手动配置 `tools.eager`。降低使用门槛的同时减少默认上下文开销。

### 2. [Hosted Hooks 持久化实现（H2）](https://github.com/QwenLM/qwen-code/pull/13129)

实现 H2 里程碑：持久化 Hook 目录、固定触发计划、once-at-intent 执行记录、动态注册、原生事件分发与原始 owner 恢复。Commands、HTTP 调用与注册函数 handler 均通过该路径执行。

### 3. [Hosted Turn 接管与 G1 故障转移 E2E](https://github.com/QwenLM/qwen-code/pull/13083)

实现 Stage G Turn 接管：新的 Hosted Harness 可加载停在 `await_runtime` / `results_ready` 检查点的 Session，并在原始 `executionCallId` 下结算运行结果。是会话韧性的核心能力。

### 4. [Hosted 文件历史与撤销](https://github.com/QwenLM/qwen-code/pull/13110)

Hosted Workspace 的 Write/Edit 在派发前保存原文件内容，模型继续前结算文件历史。支持检查历史并在 detach/load 后将文件回滚到目标 prompt 开始时的状态。

### 5. [远程 Qwen 运行时 Host](https://github.com/QwenLM/qwen-code/pull/12582)

新增可选远程运行时：Host 出站连接协调器，用一次性短效 token 注册，存储有作用域的凭据，领取租约工作，流式传输有界进度并返回幂等结果。这是 **multi-agent 分布式执行的基础设施**。

### 6. [LSP 诊断错误浮出](https://github.com/QwenLM/qwen-code/pull/13128)

`NativeLspService.diagnostics()` 不再在无法获取诊断时报告干净结果。两种情况都会正确拒绝：无可用服务器或服务器状态异常。对应 Issue #12467 的修复。

### 7. [批次获取工作区会话快照](https://github.com/QwenLM/qwen-code/pull/12513)

新增单次只读请求获取 1–20 个已选工作区的实时会话快照，各工作区保持独立身份、目录版本与独立成败结果。面向 multi-workspace 管理场景的效率优化。

### 8. [恢复失败的通知轮次](https://github.com/QwenLM/qwen-code/pull/13126)

修复 #12042 的剩余部分：无提醒的后台通知轮次中途失败时，之前恢复为 `clean` 状态，导致后台 agent 的终态结果只在用户主动 Continue 时才到达模型。现在恢复为 `interrupted_prompt`。

### 9. [发布过期恢复与有界验证](https://github.com/QwenLM/qwen-code/pull/13114)

区分飞行中的发布 deadline 过期、claim 过期、fencing 与临时争用。worker 用相同请求字节恢复原操作，保留对象 key、资源引用与终态结果。

### 10. [恢复运行时 Broker 的恢复声明](https://github.com/QwenLM/qwen-code/pull/13115)

修复 SDK Java 故障门测试的 flaky 问题：恢复的 Broker 的 warm/acquire 路径只取一个短操作声明，导致间歇性回答 `runtime_provision_fenced` 而非 `runtime_broker_runtime_lost`。

---

## 五、功能需求趋势

从全部 Issue 的标签分布可以提炼出以下主流方向：

### 1. 🏗️ Managed Agent 架构（绝对主导）
`daemon`、`scope/web-shell`、`scope/session-management`、`roadmap/multi-agent` 标签高频共现。社区正在构建一个**托管式多智能体平台**，核心诉求包括：
- Session 的持久化生命周期（可恢复、可接管、可回滚）
- Hosted Workspace 的沙箱工具执行与文件历史
- Turn/Action 级别的故障转移与幂等性
- 远程运行时 Host 的注册、租约与隔离

### 2. 🔒 安全与权限
- Shell 命令语义分析中重定向目标绕过检查（#13106）
- Agent Host 凭据去重与失效管理（#13122）
- 远程连接时 enrollment token 经 HTTP 降级的风险（#13123）

### 3. 📊 可观测性与遥测
- 失败路径的遥测缺失（#13062）
- 隐私设置（`usageStatisticsEnabled`）被扩展生命周期事件绕过（#12770）

### 4. 🖥️ 平台稳定性
- Windows CLI 闪退（#13076）
- CI flaky 问题（#12714、#13017 相关）

### 5. 🔧 开发者体验优化
- 后台子 agent 并发请求超出 API 限制后的重试机制（#12959）
- 默认延迟工具发现减少上下文占用（#13033）
- 新模型 Provider 接入文档（#13121，第三方 OpenAI 兼容端点示例）

---

## 六、开发者关注点

### 高频痛点

| 痛点 | 表现 | 相关 Issue |
|------|------|------------|
| **静默失败** | LSP 诊断失败报"干净"、投机 accept 失败不发遥测、Windows 闪退无输出 | #12467, #13062, #13076 |
| **凭据安全** | 重新注册后旧凭据仍有效、enrollment token 可被 HTTP 降级窃取 | #13122, #13123 |
| **会话状态可靠性** | provenance 投影丢失、通知轮次恢复错误、重放清理逻辑脆弱 | #12042, #13126, #13125 |
| **性能与并发** | 多 agent 并发触发 API 限流、记忆提取空跑无冷却 | #12959, #13004 |

### 社区参与特征

- **核心贡献者密集协作**：wenshao、yiliang114、doudouOUC 组成了 Managed Agent 架构的主要推进力量，形成了清晰的 Stage 划分与 follow-up 跟踪机制（Critical-only policy，超过五轮 review 的建议以独立 Issue 追踪）。
- **质量门槛明显提升**：大量 Issue 记录了来自 PR review 的 deferred suggestions，体现了"先修正确性、再补覆盖"的工程纪律。
- **中英双语需求出现**：#13124 使用中英双语撰写，说明社区中存在非英语开发者的实际参与诉求。

---

*日报生成：基于 GitHub API 数据，覆盖过去 24 小时。数据截止 2026-09-30。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



好的，这是一份为您生成的 2026-10-01 DeepSeek TUI 社区动态日报。

---

### **2026-10-01 DeepSeek TUI 社区动态日报**

**数据来源**: [github.com/Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)

---

#### **1. 今日速览**
今日社区动态以**问题修复和架构优化**为主旋律。维护者积极整合了多项关键修复，涉及运行时API、工具链和CLI的稳定性提升。同时，社区反馈集中在几个影响用户体验的严重Bug上，如CPU占用率回归、权限模型缺陷和重试机制不完整等问题。

---

#### **2. 版本发布**
**无**。过去24小时内无新版本发布。

---

#### **3. 社区热点 Issues**
以下是10个最值得关注的Issue，涵盖了性能、Bug和功能增强等多个方面：

| Issue | 标题 | 重要性 | 简析 |
| :--- | :--- | :--- | :--- |
| **#6728** | **CPU Usage Regression: v0.9.12 (idle) → v0.9.13 (moderate) → v0.10.0 (heavy)** | ⭐⭐⭐⭐⭐ | **核心性能回归**。用户报告在FreeBSD 15.0上，从v0.9.12升级到v0.10.0后CPU占用率从“空闲”变为“重度使用”，严重影响可用性。[链接](https://github.com/Hmbown/Codewhale/issues/6728) |
| **#6787** | **Linux: Full Access does not reach agents in 0.10.0** | ⭐⭐⭐⭐⭐ | **关键功能缺陷**。在Linux上，即使用户设置了最高权限，0.10.0版本中的子智能体仍被Auto-Review守护进程拒绝或卡住，导致“完全访问”权限形同虚设。[链接](https://github.com/Hmbown/Codewhale/issues/6787) |
| **#6788** | **/retry（以及 /undo）只回滚了 UI 显示层** | ⭐⭐⭐⭐⭐ | **核心逻辑Bug**。`/retry`命令仅撤消了UI显示，但发送给模型的上下文和持久化会话文件未被同步回滚，导致AI收到重复消息，会话恢复后问题依旧。[链接](https://github.com/Hmbown/Codewhale/issues/6788) |
| **#6803** | **A failed tool call leaves no tool output, so the thread becomes unsendable after a runtime restart.** | ⭐⭐⭐⭐ | **可靠性问题**。工具调用失败后，会话项状态为`failed`且无结果，导致运行时重启后该会话线程无法继续发送消息。[链接](https://github.com/Hmbown/Codewhale/issues/6803) |
| **#6700** | **Expose stream retry budgets and transport timeouts as configuration** | ⭐⭐⭐⭐ | **重要功能需求**。当前网络重试和超时参数为硬编码常量，用户无法根据不稳定的网络环境进行调优，只能通过修改源码来配置。[链接](https://github.com/Hmbown/Codewhale/issues/6700) |
| **#6800** | **Stall recovery is UI-side only: the engine keeps the wedged turn...** | ⭐⭐⭐⭐ | **架构缺陷**。UI检测到卡死后仅重置自身状态，但引擎仍保留卡住的请求，导致后续消息被拒绝，应用停止输入。[链接](https://github.com/Hmbown/Codewhale/issues/6800) |
| **#6652** | **After running for a long time, TUI scrolling becomes laggy, like jelly.** | ⭐⭐⭐ | **用户体验问题**。长时间运行后，TUI界面的滚动操作会出现严重卡顿，影响交互体验。[链接](https://github.com/Hmbown/Codewhale/issues/6652) |
| **#6511** | **Single-turn-loop guard misses the sub-agent and RLM loops...** | ⭐⭐⭐ | **潜在正确性问题**。单循环检测逻辑通过标识符后缀匹配模型调用，但子智能体和RLM循环通过拼写规避了检测，可能导致循环控制失效。[链接](https://github.com/Hmbown/Codewhale/issues/6511) |
| **#6746** | **Web search: configured API providers lose their fallback in DuckDuckGo-unreachable networks** | ⭐⭐⭐ | **网络健壮性**。在无法访问DuckDuckGo的网络中，配置的API搜索提供商（如Tavily）会静默失败，缺少后备方案。[链接](https://github.com/Hmbown/Codewhale/issues/6746) |
| **#6795** | **Inline provider error frames bypass every retry budget: the turn dies on the first frame** | ⭐⭐⭐ | **错误处理缺陷**。OpenAI兼容提供商在HTTP 200响应中通过chunk-level错误帧报告瞬时失败，此错误会绕过所有重试预算，直接导致请求失败。[链接](https://github.com/Hmbown/Codewhale/issues/6795) |

---

#### **4. 重要 PR 进展**
以下是10个重要的PR，展示了代码库的主要改进方向：

| PR | 标题 | 状态 | 简析 |
| :--- | :--- | :--- | :--- |
| **#6782** | **v0.10.1 integration: wave/0.10.1-next** | OPEN | **版本集成主线**。当前集成分支的头指针为`ce1ecc8dc2`，合并了多个批次的修复，是下一版本的核心。[链接](https://github.com/Hmbown/Codewhale/pull/6782) |
| **#6784** | **fix(config): resolve canonical stream, retry and transport settings** | CLOSED | **直接回应Issue #6700**。新增了一个`[stream]`配置表，统一管理12个与超时、重试、传输相关的键值，使网络行为可配置。[链接](https://github.com/Hmbown/Codewhale/pull/6784) |
| **#6771** | **fix(runtime-api): keep file modes, allow PUT preflight, undo rejected provider switch, list all memory** | CLOSED | **运行时API修复**。修复了文件权限保留、CORS预检、提供商切换回滚和内存列表等多个Runtime API缺陷。[链接](https://github.com/Hmbown/Codewhale/pull/6771) |
| **#6759** | **fix(tools): shell job retention, output deltas, and child process lifetimes** | CLOSED | **Shell工具增强**。确保了长时任务结束后作业仍可访问，输出轮询返回新字节，并正确管理子进程生命周期。[链接](https://github.com/Hmbown/Codewhale/pull/6759) |
| **#6772** | **fix(app-server): keep daemon threads, config, and bridge consistent across restarts** | CLOSED | **应用服务器稳定性**。守护进程重启后，客户端到运行时的线程链接、工作区和配置持久化得到保证。[链接](https://github.com/Hmbown/Codewhale/pull/6772) |
| **#6793** | **refactor(commands): complete session group shapes (FEAT-026)** | OPEN | **架构重构**。完成FEAT-026，实现了会话组的最终采纳和提取边界，为后续的Crate分解（EPIC-005）铺平道路。[链接](https://github.com/Hmbown/Codewhale/pull/6793) |
| **#6799** | **Land asto18089's queue as itself: #6736, #6737, #6738, #6740, #6742, #6743, #6744** | OPEN | **批量合并**。旨在将贡献者`asto18089`的七个开放PR作为其自身合并，解决了分支保护导致的推送问题。[链接](https://github.com/Hmbown/Codewhale/pull/6799) |
| **#6802** | **Land #6741 as itself: MCP tools/call budget, one deadline per request** | OPEN | **MCP增强**。为MCP的`tools/call`请求赋予独立的预算和截止时间，避免长期执行被误杀。[链接](https://github.com/Hmbown/Codewhale/pull/6802) |
| **#6777** | **fix: pager whitespace and wrap width, iterative /tree render, macOS sleep inhibitor lifetime** | CLOSED | **UI/UX改进**。修复了文本缩进、换行、分页宽度以及`/tree`命令的迭代渲染问题，并优化了macOS上的睡眠抑制剂生命周期。[链接](https://github.com/Hmbown/Codewhale/pull/6777) |
| **#6761** | **feat(providers): add Cheaper Inference as a bundled descriptor row** | CLOSED | **新提供商支持**。通过现有的提供商描述符路径，新增了对“Cheaper Inference”服务的集成。[链接](https://github.com/Hmbown/Codewhale/pull/6761) |

---

#### **5. 功能需求趋势**
从社区讨论中，可以提炼出以下最关注的功能方向：

*   **可观测性与可配置性**：社区强烈要求将网络重试、超时等内部参数暴露为用户可配置的选项（Issue #6700, PR #6784），并希望在UI中可视化重试状态（Issue #6796）。
*   **性能与稳定性**：CPU占用率回归（Issue #6728）、长时间运行后的UI卡顿（Issue #6652）以及运行时重启后的状态恢复（Issue #6803）是当前最紧迫的问题。
*   **权限与安全模型**：Linux上“完全访问”权限失效（Issue #6787）表明权限系统存在缺陷，需要彻底修复。
*   **多平台支持**：Windows的Shell执行策略（Issue #6745）和网络可达性（Issue #6746）问题凸显了对非Linux平台的优化需求。
*   **架构演进**：通过FEAT-026（PR #6793）和EPIC-005（Issue #5316）等，社区正持续推进代码库的模块化和Crate分解。

---

#### **6. 开发者关注点**
开发者反馈的核心痛点和高频需求集中在：

1.  **核心功能回归**：升级到新版本（0.10.0）后出现的CPU占用和权限问题，严重影响了工具的可信度和可用性。
2.  **状态同步与持久化**：`/retry`命令和工具调用失败的处理，暴露了UI状态、模型上下文和持久化会话之间的同步缺陷，这是影响工作流连续性的关键。
3.  **网络与超时的黑盒性**：网络请求的超时和重试机制对用户完全不透明，且无法调优，这在不稳定的网络环境下是致命伤。
4.  **UI/UX流畅度**：长时间使用的性能衰减和交互细节（如滚动、分页）仍需打磨。
5.  **贡献流程的顺畅**：PR #6799和#6802的创建，反映了维护者正在积极解决外部贡献者因分支保护策略而遇到的合并障碍，以促进社区贡献。

---
**报告生成时间**: 2026-10-01 (基于过去24小时数据)

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

Thinking Process:

1.  **Understand the Goal**: The user wants a daily report (dated 2026-10-01, but based on the provided data which has updates around 2026-09-30) for the ComfyUI community dynamic, written in Chinese, structured into specific sections: Today's Overview, Releases (if any), Top 10 Hot Issues, Top 10 Important PRs, Feature Demand Trends, and Developer Pain Points/Focus Areas.

2.  **Analyze the Input Data**:
    *   **Date context**: The prompt asks for a daily report of "2026-10-01", but the data shows updates mostly on 2026-09-30 (e.g., issues updated on Sep 30, PRs updated on Sep 30). I will write the report as of the date requested but tailored to the provided data (which represents the latest activity up to late Sep/early Oct 2026).
    *   **Releases**: "无" (None in the past 24 hours, though PR #16700 mentions a backport release v0.38.1). Let's mention the v0.38.1 backport if relevant, but the section says "无" so I'll write "无正式新版本发布，但社区已有 v0.38.1 的 backport 合并请求..." or just skip if strictly no releases, but PR #16700 is "ComfyUI backport release v0.38.1" closed on Sep 30. Let's include a brief mention.
    *   **Issues (30 shown, need to pick 10 most important ones)**:
        *   #15255 (72 comments): Dynamic VRAM streaming crashes with HostBuffer.read_file_slice failed -> CUDA OOM (regression after Aug 3 update). Core issue, high comments. (Very important)
        *   #15488 (16 comments): MiniMax H3 reproducibly causes `GPU is lost` / TDR black-screen on RTX 5070 Ti when system has 64 GB RAM vs capped to 32 GB. (Hardware compatibility/memory bottleneck)
        *   #16246 (11 comments, 3 thumbs up): BSOD in dxgmms2.sys on 6 GB RTX 3050 since v0.35.0 / comfy-aimdo 0.5.3 dynamic VRAM loading. (Critical driver/VRAM issue)
        *   #16342 (6 comments): MiniMax H3 memory compile error 'could not start recording' on RTX 5090. (New model + compiler bug)
        *   #16670 (CLOSED, 2 comments): Built-in Image Compare node empty when Nodes 2.0 is enabled. (Nodes 2.0 compatibility)
        *   #16668 (1 comment): WanAnimate2ToVideo produces all-zero latent (uniform gray video) on AMD. (AMD specific bug)
        *   #16682 (0 comments but important): Select Model Device forces float16 on FP8 models that do not support it (Qwen Image Edit -> black image). (Precision bug)
        *   #16675 (0 comments): SAM3: moving text encoder with "Select CLIP Device" fails with 'NoneType' object has no attribute 'keys'. (Multi-GPU bug)
        *   #16686 (0 comments): MiniMax-H3 VAE decode: Expected all tensors to be on the same device. (Device offload bug)
        *   #16683 (0 comments): Cyrillic characters replaced with .notdef glyph. (Localization font bug)
        *   #16690 (0 comments): IndexError in MiniMaxH3.extra_conds when audio-only latent passed. (Edge case crash)
        *   #16664 (1 comment, 1 thumb up): Asset system needs sort options and type filter. (Feature request)
        *   #16509 (1 comment): Qwen3.5 text generation attends over full KV capacity, decode speed drops. (Performance)
    *   Let's select the top 10 issues that are most technically significant (prioritizing core bugs, high-comment ones, and new model issues):
        1.  #15255: Dynamic VRAM streaming CUDA OOM crash (core regression, 72 comments).
        2.  #16246: BSOD in dxgmms2.sys on RTX 3050 since dynamic VRAM loading (kernel crash, 11 comments).
        3.  #15488: MiniMax H3 GPU loss/TDR on RTX 5070 Ti with 64GB RAM (hardware/memory limit issue, 16 comments).
        4.  #16342: MiniMax H3 aimdo memory compile error on RTX 5090 (new model compiler bug, 6 comments).
        5.  #16682: Select Model Device forces float16 on FP8 models (black image bug).
        6.  #16675: SAM3 Select CLIP Device fails with NoneType error (multi-GPU).
        7.  #16686: MiniMax-H3 VAE decode device mismatch error.
        8.  #16668: WanAnimate2ToVideo produces all-zero latent on AMD (gfx1200).
        9.  #16683: Cyrillic characters rendering bug (font/text overlay).
        10. #16664 / #16509: Asset sorting/filtering feature request & Qwen3.5 KV cache performance issue. (Or maybe #15659 subgraphs bug). Let's stick to core bugs and feature requests: #16664 (Asset filter/sort) and #16509 (Qwen performance). Let's pick #15659 (subgraphs collection of bugs) as it's core. Let's look closely at the list. I will write a diverse set covering CUDA OOM, BSOD, MiniMax H3 bugs (multiple ones), multi-GPU/precision bugs, and asset system UI requests.

    *   **PRs (20 shown, need to pick 10 important ones)**:
        *   #16700: ComfyUI backport release v0.38.1 (critical, contains many fixes).
        *   #16578: Implement asset export API locally (CORE-454) - major feature for cloud sync.
        *   #16368: Sync shared API contract from cloud - API standardization.
        *   #16698: Fix minimax vae offload issue (comfyanonymous directly).
        *   #16681: Fuse H3 MLP INT8 output with indexed modulation gate (performance optimization for MiniMax H3).
        *   #16677: Release packed MiniMax H3 embedding temporaries before blocks (memory optimization).
        *   #16692: Fix wildcard browser URL for auto-launch (fixes #16685).
        *   #16684: Fix Cyrillic characters render on text overlay (fixes #16683).
        *   #16654: Fix in-place gated residual breaking Qwen-Image-2.1 training path (core math fix).
        *   #16696: Fix database lock issues during large asset prune/scans (performance/stability for asset system).
        *   #16634: Asset scan telemetry (CPU/paused time, failure classification).
        *   #16327: 3D light info nodes (new feature).
        *   #15020: Native Hunyuan3D 2.1 PBR paint (major 3D feature).
        *   Let's select the top 10 most impactful ones:
            *   #16700 (v0.38.1 backport release)
            *   #16578 (Asset export API)
            *   #16698 (Fix minimax vae offload)
            *   #16681 (Fuse H3 MLP INT8 optimization)
            *   #16677 (Release H3 embedding temporaries)
            *   #16654 (Fix Qwen-Image-2.1 training path)
            *   #16692 (Fix auto-launch URL)
            *   #16684 (Fix Cyrillic rendering)
            *   #16696 (Fix asset DB lock)
            *   #15020 / #16327 (3D features: Hunyuan3D PBR paint / Light info nodes) - let's mention #15020 and #16327 as feature expansions, or #16634 for asset scan telemetry. Let's write 10 clear ones.

    *   **Feature Demand Trends (功能需求趋势)**:
        *   Asset management enhancement (sorting, filtering, export API, scan telemetry, DB locking fixes). The asset system is a major focus area.
        *   MiniMax H3 optimization and stability (VRAM, VAE offload, compile errors, INT8 fusion, memory release). H3 is currently the most problematic but heavily used model.
        *   Multi-GPU and device management (Select CLIP Device, Select Model Device dtype handling, auto-launch URL).
        *   Nodes 2.0 compatibility (Image Compare node empty).
        *   Performance optimization (Qwen KV cache, dynamic VRAM streaming).
        *   Localization/UX (Cyrillic fonts, asset browser UI).

    *   **Developer Focus/Pain Points (开发者关注点/痛点)**:
        *   **Memory & VRAM management stability**: Dynamic VRAM streaming causing CUDA OOM and host buffer crashes is the top pain point (#15255, #16246).
        *   **New model (MiniMax H3, Qwen) compatibility issues**: High crash rates, compile errors, device mismatches.
        *   **Asset system database performance**: DB locks during large operations, need for local export API.
        *   **Cross-platform and hardware consistency**: AMD specific crashes, Linux auto-launch URL issues, RAM size sensitivity on Windows.

3.  **Drafting the Report Structure**:

    *   **Header**: Title "ComfyUI 社区动态日报 (2026-10-01)" or similar, noting data up to late September 2026.
    *   **1. 今日速览**: Summarize the key theme: Focus is heavily on MiniMax H3 stability, memory/VRAM crash fixes, and the local implementation of the Asset Export API. v0.38.1 backport is merged.
    *   **2. 版本发布**: Mention v0.38.1 backport (PR #16700) summarizing its key fixes (qwen int8/int4 cache crash, partner nodes, workflow templates).
    *   **3. 社区热点 Issues (Top 10)**:
        *   List 10 issues with title, why important, community reaction (comments/likes), and link.
        *   Translate/summarize the Chinese titles accurately based on the provided English text.
    *   **4. 重要 PR 进展 (Top 10)**:
        *   List 10 PRs with their core contribution and link.
    *   **5. 功能需求趋势**:
        *   Asset system management (export, filtering, scanning).
        *   Model-specific optimizations (especially MiniMax H3 and Qwen).
        *   Multi-GPU / device offloading control.
        *   UI/UX localization and Nodes 2.0 compatibility.
    *   **6. 开发者关注点与痛点**:
        *   VRAM streaming regressions.
        *   MiniMax H3 edge cases (VAE offload, compile error, audio latent index error).
        *   Database lock in asset system.
        *   Cross-platform UX details (auto-launch URL).

4.  **Refining Details of Selected Issues (Translate and explain)**:
    *   *Issue 1*: #15255 Dynamic VRAM streaming crashes -> CUDA OOM. (72 comments, core regression). Focus on host buffer slice failure.
    *   *Issue 2*: #16246 BSOD in dxgmms2.sys on RTX 3050 since v0.35.0. Kernel crash due to dynamic VRAM staging. (11 comments, 3 likes).
    *   *Issue 3*: #15488 MiniMax H3 GPU loss/TDR on RTX 5070 Ti with 64GB RAM. Memory cap workaround found. (16 comments).
    *   *Issue 4*: #16342 MiniMax H3 memory compile error 'could not start recording' on RTX 5090. Compiler issue. (6 comments).
    *   *Issue 5*: #16682 Select Model Device forces float16 on FP8 models (Qwen Image Edit -> black image). Precision/dtype bug.
    *   *Issue 6*: #16675 SAM3 Select CLIP Device fails with NoneType error. Multi-GPU node bug.
    *   *Issue 7*: #16686 MiniMax-H3 VAE decode device mismatch. VRAM constrained system bug.
    *   *Issue 8*: #16668 WanAnimate2ToVideo produces all-zero latent on AMD (gfx1200). Platform-specific bug.
    *   *Issue 9*: #16683 Cyrillic characters replaced with .notdef glyph. Font rendering bug.
    *   *Issue 10*: #16664 Asset system sort and type filter feature request. (1 like). Or #16509 Qwen3.5 KV cache performance. Let's do #16664 as it's a direct feature request for the new Asset system, showing community demands on UI. Let's write both briefly if space allows, but stick to the 10-issue limit. Let's use #16664.

5.  **Refining Details of Selected PRs (Translate and explain)**:
    *   *PR 1*: #16700 v0.38.1 backport release. Cherry-picks critical fixes like qwen int8/int4 cache crash.
    *   *PR 2*: #16578 Implement asset export API locally (CORE-454). Major backend API addition.
    *   *PR 3*: #16698 Fix minimax vae offload issue (by comfyanonymous). Direct core fix for hot issue.
    *   *PR 4*: #16681 Fuse H3 MLP INT8 output with indexed modulation gate. Performance optimization for H3.
    *   *PR 5*: #16677 Release packed MiniMax H3 embedding temporaries before blocks. Memory optimization.
    *   *PR 6*: #16654 Fix in-place gated residual breaking Qwen-Image-2.1 training path. Core model math fix.
    *   *PR 7*: #16692 Fix wildcard browser URL for auto-launch (converts 0.0.0.0 to 127.0.0.1).
    *   *PR 8*: #16684 Fix Cyrillic characters render on text overlay (adds custom font support).
    *   *PR 9*: #16696 Fix database lock during asset prune/scans (batching writes).
    *   *PR 10*: #15020 Add native Hunyuan3D 2.1 PBR paint (mesh -> multiview -> textured GLB). Major 3D capabilities addition. Or #16327 3D light info nodes. Let's use #15020 as it represents a major feature expansion.

6.  **Translate Terminology & Maintain Professional Tone**:
    *   "Dynamic VRAM streaming" -> 动态 VRAM 流式加载 / 动态显存流式传输
    *   "CUDA OOM" -> CUDA 显存溢出 (OOM)
    *   "TDR black-screen" -> 超时检测和恢复 (TDR) 黑屏 / GPU 失去响应
    *   "BSOD in dxgmms2.sys" -> 蓝屏死机 (BSOD)，涉及视频内存管理器 (dxgmms2.sys)
    *   "KV cache" -> KV 缓存 (KV Cache)
    *   "Select CLIP Device" -> 选择 CLIP 设备节点
    *   "Select Model Device" -> 选择模型设备节点
    *   "Nodes 2.0" -> Nodes 2.0 (节点 2.0)
    *   "Asset system" -> 资产系统 (Asset System)
    *   "comfy-aimdo" -> 动态显存管理组件 / aimdo 库
    *   "int8/int4 cache" -> INT8/INT4 缓存

7.  **Review against Constraints**:
    *   "生成 2026-10-01 的 ComfyUI 社区动态日报" -> Yes, format as requested.
    *   "无 [Releases]" -> Mention the v0.38.1 backport merge since it's the most significant release event in the PRs, but state that no official release tags were created in the strict last 24h window, or treat the backport merge as the release news.
    *   "挑选 10 个最值得关注的 Issue" -> Yes, selected 10.
    *   "挑选 10 个重要的 PR" -> Yes, selected 10.
    *   "功能需求趋势" -> Extracted.
    *   "开发者关注点" -> Extracted.
    *   "简洁专业，适合技术开发者阅读。每个条目附上 GitHub 链接" -> Ensure links are included in the list items (e.g. `https://github.com/Comfy-Org/ComfyUI/issues/15255`). Note: The prompt provided short links like `Comfy-Org/ComfyUI Issue #15255`, I will format them as standard GitHub URLs: `https://github.com

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama 社区动态日报 · 2026-10-01

> 数据来源：github.com/ollama/ollama（统计窗口：过去 24 小时）

---

## 1. 今日速览

今日无新版本发布，社区焦点集中在 **System One（`/v1/systemone`）新接口的生态建设**：围绕该接口的模型支持、能力声明、文档与 MLX 后端适配在同一天内集中涌现，形成明显的"新功能磨合期"。与此同时，**结构化输出回归**（JSON Schema 属性顺序丢失）与 **Windows 自动更新损坏 CUDA DLL** 两个问题因影响面明确、且已有对应修复 PR，成为开发者讨论热度最高的技术议题。网络层（代理/DNS/重定向）问题也在今日集中爆发，涉及模型拉取失败这一核心链路。

---

## 2. 版本发布

过去 24 小时内无新 Release。补充背景：Issue #18706（已关闭）讨论 v0.35.0 被标记为 pre-release 但缺少 `-rc` 后缀，社区确认这是发布流程上的标记问题而非功能缺陷。

---

## 3. 社区热点 Issues（10 条）

**① #16060 电话号码验证不支持非美国号码（德国用户无法注册付费计划）**
[链接](https://github.com/ollama/ollama/issues/16060) · 19 条评论 · 👍1
长期挂起的商业化阻塞问题：德国用户无法通过手机验证，即使走 GitHub OAuth 仍被要求提供美国格式号码。评论数最高，说明海外付费用户受阻面广，属于直接影响营收的体验缺陷。

**② #18712 Windows 自动更新残留 `cuda_v12\ggml-cuda.dll.tmp`，导致 GPU 失联并回落 CPU**
[链接](https://github.com/ollama/ollama/issues/18712) · 新增
典型的"静默降级"故障：更新后 CUDA 后端 DLL 缺失，用户感知为"GPU 突然不见了"。这类安装器原子性问题复现路径清晰、影响所有 Windows + NVIDIA 用户，优先级应高于普通功能 bug。

**③ #18717 结构化输出：原生 llama-server 路径丢失 JSON Schema 属性顺序（#7978 回归）**
[链接](https://github.com/ollama/ollama/issues/18717) · 新增
`response_format` 传入的 Schema 属性被按字母序强制输出，破坏了有步骤依赖的 Schema。这是回归问题，且当天即有修复 PR #18721，是今日"问题—修复"闭环最快的一条。

**④ #18718 `/v1/systemone` 拒绝对象型 criteria 描述，与参考实现不兼容**
[链接](https://github.com/ollama/ollama/issues/18718) · 新增
新接口与 TypeSafe 参考 API 的行为不一致，直接影响第三方迁移与兼容性预期。新 API 上线初期出现协议偏差，值得关注其规范收敛速度。

**⑤ #18715 `deepseek-v4.1-flash:cloud` 工具调用前文本丢空格**
[链接](https://github.com/ollama/ollama/issues/18715) · 新增
云模型流式输出中，tool call 前最后一个 content chunk 缺少前导空格，导致 "harbor masterNPC." 这类拼接错误。属于流式分块合并的边界问题，对 Agent 场景的文本可读性影响直接。

**⑥ #18642 RTX 5090 + Cohere MoE 架构触发 CUDA illegal memory access（MUL_MAT）**
[链接](https://github.com/ollama/ollama/issues/18642) · 9 条评论
Windows 11 + RTX 5090 上 prompt evaluation 阶段崩溃（exit 0xc0000409）。新硬件 + 新架构组合的兼容性缺口，涉及 Blackwell 平台的算子路径。

**⑦ #18505 MLX nvfp4：单槽持续负载下请求卡死在 prefill（processed=total-1）**
[链接](https://github.com/ollama/ollama/issues/18505) · 10 条评论
`OLLAMA_NUM_PARALLEL=1` 下请求数分钟无进展，只能靠 SIGTERM 恢复。这是 Apple Silicon 上量化推理的可用性问题，对长任务用户是硬阻塞。

**⑧ #18368 macOS GUI 聊天处理超过 60 秒后静默失败，无任何提示**
[链接](https://github.com/ollama/ollama/issues/18368) · 14 条评论
M4 Pro + 128k 上下文的长文档处理失败且无 GUI 通知。评论数居前，反映"静默失败"是桌面端最被诟病的体验模式。

**⑨ #18679 `OLLAMA_GPU_OVERHEAD` 被 llama-server 后端忽略**
[链接](https://github.com/ollama/ollama/issues/18679) · 2 条评论
环境变量在 `--fit` 层放置逻辑下失效，VRAM 预留不再生效。对需要精细控制显存占用的多模型/多服务用户影响明显。

**⑩ #18716 拉取模型报错 `redirect target not allowed`（Ubuntu）**
[链接](https://github.com/ollama/ollama/issues/18716) · 标记 needs more info
DNS 解析 Cloudflare R2 重定向目标失败。与 #15708（代理环境下 blob 下载 "no such host"）形成同类问题簇，说明拉取链路的网络适配仍是高发故障区。

> 其他值得留意：#18714 请求为 `/v1/systemone` 增加 Bongard（T5Gemma2）原生支持；#15708 代理环境 DNS 解析不一致；#16049 qwen3.5:2b 下 generate API 挂起。

---

## 4. 重要 PR 进展（10 条）

**① #18721 `llm: preserve JSON property order`**
[链接](https://github.com/ollama/ollama/pull/18721)
修复 #18717。根因是 `llamaServerChatResponseFormat` 将 Schema 反序列化为 `map[string]any` 后重新序列化，`encoding/json` 的键排序导致属性被字母序化。改为保序传递，恢复声明顺序约束。

**② #18719 `transfer: honor proxy environment for registry and blob downloads`**
[链接](https://github.com/ollama/ollama/pull/18719)
#18625 引入的重定向校验 client 自定义了 `DialContext` 却未设置 `Proxy`，导致 `HTTPS_PROXY/HTTP_PROXY/NO_PROXY` 对 blob 下载失效。修复后企业代理环境可正常拉取。

**③ #18722 `openai: keep tool message content parts in one message`**
[链接](https://github.com/ollama/ollama/pull/18722)
`FromChatRequest` 将数组内容拆成多条消息，导致 tool 消息的 `tool_call_id` 与工具名丢失。修复后按 tool result 语义正确解析，对 Agent 工具链兼容性有实际价值。

**④ #18713 `app: make sidebar resizable`**
[链接](https://github.com/ollama/ollama/pull/18713)
修复 #18709。新增可拖拽、支持键盘操作的侧边栏分隔条（160–480px），避开滚动条并让 macOS 控件跟随边缘，宽度在会话内保持。

**⑤ #18720 `MLX: version bump`**
[链接](https://github.com/ollama/ollama/pull/18720)
跟进 mlx 上游更新，与今日多条 MLX 相关 Issue（#18505 等）同期出现，或与稳定性修复相关。

**⑥ #18711 `create: make explicit capabilities exhaustive at create and runtime`**
[链接](https://github.com/ollama/ollama/pull/18711)
#18708 的后续：省略时保留推理能力，并允许"仅决策"型 System One 模型。是 System One 模型能力模型的规范化收口。

**⑦ #18701 `mlx: System one support`**
[链接](https://github.com/ollama/ollama/pull/18701)
为 SystemOne 模型补齐 MLX 后端支持并添加测试，是 Apple Silicon 上跑通该接口的关键一步。

**⑧ #18631 `mlxrunner: load gemma4 experts in the mlx-lm switch_glu layout`**
[链接](https://github.com/ollama/ollama/pull/18631)
修复 #18540。mlx-community Gemma 4 MoE 检查点因专家权重预堆叠布局不匹配而报 "missing MoE expert weights"，此 PR 解决加载失败。

**⑨ #18397 `llm: reuse llama-server HTTP connections for embed load`**
[链接](https://github.com/ollama/ollama/pull/18397)
修复 #18392。`DisableKeepAlives: true` 导致每次 `/api/embed` 都新建连接，高并发下开销显著，改为复用连接。

**⑩ #17820 `fix(install): Support different DNF versions`**
[链接](https://github.com/ollama/ollama/pull/17820)
Fedora 43（dnf5）需用 `config-manager addrepo`，而 dnf4 仍是旧语法。修复 NVIDIA 仓库添加失败，改善 Linux 安装覆盖。

> 其他： #18723 README 新增 runtape 可观测性集成；#17960 README 新增 Grux 到社区集成；#18702（已关闭）System One API 文档与决策指南。

---

## 5. 功能需求趋势

从今日全部 Issues/PRs 可提炼出五条主线：

1. **System One（`/v1/systemone`）生态建设成为最大新增量**：涵盖接口兼容性（#18718）、新模型支持（#18714）、能力声明规范（#18711）、后端实现（#18701）与文档（#18702）。这是一个正在成形的"决策/判定"类能力接口，社区参与度显著。
2. **结构化输出与工具调用（Tool Calling）的正确性**：JSON Schema 保序（#18717/#18721）、tool 消息解析（#18722）、云模型 tool call 文本拼接（#18715）三条并进，说明 Agent 场景已从"能跑"进入"输出契约可靠"阶段。
3. **Apple Silicon / MLX 路径的成熟度**：prefill 卡死（#18505）、MoE 权重加载失败（#18631）、MLX 版本跟进（#18720）——MLX 已是重点投入方向，但稳定性仍在补齐。
4. **网络与企业环境适配**：代理、DNS、重定向校验（#18716、#15708、#18719）反复出现，表明受限网络下的拉取链路是长期薄弱环节。
5. **安装与升级的原子性**：Windows CUDA DLL 残留（#18712）与 Fedora DNF 版本差异（#17820）共同指向"安装器/更新器"这一被低估的故障源。

---

## 6. 开发者关注点

- **静默失败是最伤体验的失败模式**：macOS 端超时无提示（#18368）、GPU 回落 CPU 无告警（#18712）、MLX 卡死无日志进展（#18505）。开发者普遍希望失败可见、可诊断，而非"看起来在工作"。
- **显存与硬件资源的可控性**：`OLLAMA_GPU_OVERHEAD` 失效（#18679）与 RTX 5090 崩溃（#18642）反映用户对显存布局和新型号 GPU 支持有强预期，环境变量契约一旦失效即被快速上报。
- **商业化流程的国际化短板**：德国号码无法验证（#16060）持续 19 条评论仍未解决，海外付费转化受阻是社区情绪最集中的非技术痛点。
- **新接口的兼容性预期高于预期**：`/v1/systemone` 与参考实现的行为差异被迅速指出（#18718），说明接入方以"对齐既有规范"为前提，规范偏差的容忍度很低。
- **修复闭环速度快**：今日多条高优先级 Issue（#18717、#18631、#18719、#18397）在报告后 24 小时内即有对应 PR，社区对维护者的响应节奏总体评价积极。

---

*本日报基于给定 GitHub 数据自动生成，仅反映统计窗口内的公开动态。*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>



以下是为您整理的 **202

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*