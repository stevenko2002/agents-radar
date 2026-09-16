# AI CLI 工具社区动态日报 2026-09-17

> 生成时间: 2026-09-16 22:15 UTC | 覆盖工具: 12 个

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

**今日重点更新（2026‑09‑17）**

- **Claude Code** – 合并了三个 diff 面板修复 PR（#94847、#94843、#94653），确保面板仅在有文件可显示或布局允许时打开，提升 UI 稳定性。  
  https://github.com/anthropics/claude-code/pull/94847  

- **OpenAI Codex** – 发布了 9 个 alpha 版本（rusty‑v8‑v152.2.0 及 rust‑v0.155.0‑alpha.13 …），表明 0.155.0 系列仍在快速迭代。  
  https://github.com/openai/codex/releases  

- **Gemini CLI** – 推出 v0.62.0‑nightly，修复了 AgentLoopContext 属性在对象展开时的丢失以及 A2A 服务器对不支持存储的早返回处理。  
  https://github.com/google-gemini/gemini-cli/releases/tag/v0.62.0-nightly.20260916.g6a466a7e2  

- **GitHub Copilot CLI** – 连续发布 v1.0.85（为所有用户开放 Vim 模式、新增 `/settings` 和 `transcriptView` 设置）以及 v1.0.86‑0/‑1（会话恢复增强、自定义 Agent 支持 `include-custom-instructions`）。  
  https://github.com/github/copilot-cli/releases/tag/v1.0.85  

- **Qwen Code** – 正式发布 v0.24.0，引入破坏性变更：command hooks 中现在会展开项目目录变量；同时提供了 nightly 和 preview 构建。  
  https://github.com/QwenLM/qwen-code/releases/tag/v0.24.0  

- **ComfyUI** – 发布 v0.36.0，新增模型蓝图与子图分类、将 AMD Windows VA 配额提升至 4 TB、加入 Partner Nodes 功能。  
  https://github.com/Comfy-Org/ComfyUI/releases/tag/v0.36.0  

- **Ollama** – 合并了两个关键 PR：#18479 为思考模型实现单 pass 结构化输出以减少性能开销；#18481 为 MLX 引擎添加 GPU 内存预算以防止 OOM。  
  https://github.com/ollama/ollama/pull/18479  

- **DeepSeek TUI** – 将 Shoreline TUI 重设定为默认 UI（PR #6258），并落地 MCP 2025‑06‑18 协议协商的前半部分（PR #6281），提升多智能体交互和协议兼容性。  
  https://github.com/Hmbown/Codewhale/pull/6258

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据来源：github.com/anthropics/skills，截止 2026-09-17。说明：提供的 PR 数据中评论数/reactions 字段均为 undefined，以下热点排序基于**相关 Issue 评论热度、链接的修复目标、近期活跃度**综合判断，而非精确评论计数。

---

## 1. 热门 Skills 排行（PR，均为 OPEN）

| # | Skill | 功能 | 社区讨论热点 | 状态 |
|---|-------|------|-------------|------|
| 1 | `skill-creator` 触发评估修复 [#1298](https://github.com/anthropics/skills/pull/1298) | 修复 trigger 评估的假失配/无效评分：worker 进程竞争、Windows 下 `select()` 管道失败、无关工具中止扫描 | 与 #556、#1769 同属"触发器评估不可靠"系列，是社区核心痛点 | OPEN |
| 2 | `proofcore-contract-auditor` [#1771](https://github.com/anthropics/skills/pull/1771) | Web3 智能合约审计：Solidity/Rust 静态分析，审计证明锚定至 TON 区块链 | 首个把审计结果上链公证的 Skill，探索"可验证审计"新范式 | OPEN |
| 3 | `mcp-builder` 适配 mcp>=2 [#1742](https://github.com/anthropics/skills/pull/1742) | 修复 `streamable_http_client` 导入名变更，支持自定义 Header（fixes #1668） | MCP 生态断裂问题，直接影响所有 mcp-builder 用户 | OPEN |
| 4 | `md2video-audio` [#1703](https://github.com/anthropics/skills/pull/1703) | Markdown 零成本转 MP4 视频 + 拟真人配音，基于 Marp | 文档→视频的自动化内容生产，低成本工作流 | OPEN |
| 5 | `Hivemind` 多智能体编排 [#1628](https://github.com/anthropics/skills/pull/1628) | 让 Claude Code 把机械工作委派给免费模型的 headless workers，自身只做规划/审查/合并 | "昂贵模型上下文是稀缺资源"策略，成本优化方向 | OPEN |
| 6 | `pyxel` 复古游戏开发 [#525](https://github.com/anthropics/skills/pull/525) | Python 像素游戏：无头运行、帧检测、状态校验 | 由 Pyxel 作者 kitao 提交，权威性高；自 3 月起长期反复更新 | OPEN |
| 7 | skill 质量/安全分析器 [#83](https://github.com/anthropics/skills/pull/83) | 元 Skill：五维质量评估 + 安全分析入 marketplace | 呼应 #492 安全信任议题的"自我审查"方案 | OPEN |
| 8 | `claude-api` 模型退役更新 [#1607](https://github.com/anthropics/skills/pull/1607) | 将四个已退役模型 ID 标记为 retired（fixes #1603） | 与 #1487（156k token 注入）共同暴露 claude-api skill 维护问题 | OPEN |

---

## 2. 社区需求趋势（来自 Issues）

1. **安全与信任边界** — 最高热度（43 评论）Issue [#492](https://github.com/anthropics/skills/issues/492)：社区 Skill 以 `anthropic/` 命名空间分发，冒充官方身份，构成信任边界滥用。**这是当前最敏感议题**。
2. **企业/组织级共享与治理** — [#228](https://github.com/anthropics/skills/issues/228)（org-wide 共享）、[#412](https://github.com/anthropics/skills/issues/412)（agent-governance）、[#1175](https://github.com/anthropics/skills/issues/1175)（SharePoint 权限），指向**组织内权限分发与策略管控**。
3. **评估工具链可靠性** — [#556](https://github.com/anthropics/skills/issues/556)（`claude -p` 0% 触发率）、[#1390](https://github.com/anthropics/skills/issues/1390)（evaluation.py 伪造工具错误），技能触发器与 MCP 评估钩子大面积失灵。
4. **上下文窗口效率** — [#1487](https://github.com/anthropics/skills/issues/1487)（claude-api 单次注入 156k token）、[#1329](https://github.com/anthropics/skills/issues/1329)（compact-memory 符号化压缩），诉求是**降 token 占用、压缩 agent 状态**。
5. **平台互通** — [#29](https://github.com/anthropics/skills/issues/29)（Bedrock 支持）、[#16](https://github.com/anthropics/skills/issues/16)（Skills 暴露为 MCP），期待技能脱离单一运行环境。
6. **Skill 创作规范** — [#202](https://github.com/anthropics/skills/issues/202)（skill-creator 应改为可执行指令而非教学文档）、[#189](https://github.com/anthropics/skills/issues/189)（重复插件内容）。

---

## 3. 高潜力待合并 Skills（近期活跃、目标明确）

以下 PR 均直接修复已报告 Bug（带 Fixes 引用），落地概率高：

1. **#1742** mcp-builder 适配 mcp>=2 — 修复 [#1668](https://github.com/anthropics/skills/issues/1668)，MCP 2.0 兼容性阻断级修复。
2. **#1769** skill-creator 触发器 0% recall 修复 — 修复 [#1721](https://github.com/anthropics/skills/issues/1721)，与热门 Issue #556 同根。
3. **#1765** office 红线 diff UTF-8 解码 — 修复 [#1707](https://github.com/anthropics/skills/issues/1707)，解决 Windows 非 UTF-8 locale 文本损坏。
4. **#1724** mcp-builder 默认模型升级为 claude-sonnet-5 — 移除过期快照依赖。
5. **#541** docx tracked-change `w:id` 冲突修复 — 修复文档损坏，属高频文档工作流的稳定性补丁。
6. **#538** PDF skill 大小写引用修复（8 处）— 解决 case-sensitive 环境下的失效问题。

---

## 4. Skills 生态洞察

> 一句话总结：**社区的核心诉求已从"更多 Skill"转向"可信、可靠、可治理"——要求官方厘清命名空间信任边界、修复触发器与评估工具链的隐性故障，并提供企业级分发与上下文成本控制能力。**

---

*补充说明：本报告基于所提供数据，PR 评论数/reactions 缺失，未纳入精确热度权重；如需精确排行，建议补充 API 返回的 comments 与 reactions 字段。*

---

**Claude Code 社区动态日报 – 2026 年 9 月 17 日**

---

### 1. 今日速览
- **无官方发布**，社区关注点集中在子代理技能控制、会话线程管理和成本监控等方面。
- **核心功能争议** 包括水印移除、多模型路由和持续对话保持等问题引发讨论。
- **UI/UX 改进** 请求较多，涉及性能优化、语言支持和桌面端功能增强。

---

### 2. 版本发布
**无** – 过去 24 小时内无新版本发布。

---

### 3. 社区热点 Issues（按评论数排序）

| 排名 | Issue 编号 | 标题 | 为什么重要 | 社区反应 |
|------|----------|-------|----------------|------------------|
| 1 | [#82341](https://github.com/anthropics/claude-code/issues/82341) | **子代理技能允许列表**（而不仅仅是预加载或完全阻止） | 用户希望更细粒度的子代理技能控制，而目前只能选择“全部预加载”或“全部阻止”。这对于安全和成本控制至关重要。 | 3 条评论，0 个赞；议题被标记为 **area:agents / stale**，但仍是备受关注的需求。 |
| 2 | [#82928](https://github.com/anthropics/claude-code/issues/82928) | **/insights 日期范围过滤器（--since 标志）** | 当前 `/insights` 分析所有历史会话，数据量大且易过时；增加时间过滤器有助于降低分析噪音。 | 2 条评论，2 个赞；被标记为 **area:core / stale**，但获得社区支持。 |
| 3 | [#86624](https://github.com/anthropics/claude-code/issues/86624) | **停止为代码添加水印** | 用户希望去除 AI 生成代码中的水印，以提高可识别性和去水印化。 | 2 条评论，2 个赞；标签包括 **enhancement / question / area:model / stale**。 |
| 4 | [#82385](https://github.com/anthropics/claude-code/issues/82385) | **在切换会话时保留输入**（VS Code 扩展） | 解决开发者在切换会话时输入丢失的问题，提升连续工作流体验。 | 2 条评论，1 个赞；标签 **area:ide / stale**。 |
| 5 | [#84717](https://github.com/anthropics/claude-code/issues/84717) | **TUI 页脚状态芯片换行** | UI 布局 bug 导致状态显示不美观，影响用户体验。 | 2 条评论，0 个赞；标签 **bug / stale / reproduced**。 |
| 6 | [#82481](https://github.com/anthropics/claude-code/issues/82481) | **拉取企业级组织花费限制数据**（CLI / 状态行） | 用户希望在 CLI 中直接查看云端组织级花费限制，帮助成本监控。 | 2 条评论，0 个赞；标签 **enhancement / area:cost / stale**。 |
| 7 | [#82195](https://github.com/anthropics/claude-code/issues/82195) | **为 CLI UI 添加德语（Deutsch）语言包** | 扩展语言支持，满足非英语用户的需求。 | 1 条评论，0 个赞；标签 **area:tui / stale**。 |
| 8 | [#82222](https://github.com/anthropics/claude-code/issues/82222) | **添加会话历史记录和项目文档导出 API** | 提供脚本化访问，而不仅仅依赖手动导出邮件。 | 1 条评论，1 个赞；标签 **area:core / stale**。 |
| 9 | [#86620](https://github.com/anthropics/claude-code/issues/86620) | **会话选择器应显示续接/链式关系** | 当前续接的会话显示为独立条目，难以追踪长任务流程。 | 1 条评论，0 个赞；标签 **enhancement / area:tui / area:core / stale**。 |
| 10 | [#86528](https://github.com/anthropics/claude-code/issues/86528) | **支持自定义加密原语的代码生成** | 用户需要支持非标准加密曲线/密码学的代码生成。 | 1 条评论，0 个赞；标签 **enhancement / question / platform:linux / area:model / stale**。 |

*其余 Issues（如 Threads 功能、多模型路由、Persistent “thread brief”等）也值得关注，但由于评论数较少，在本期热点中略去。*

---

### 4. 重要 PR 进展

| PR 编号 | 标题 | 核心改动 | 影响 |
|--------|------|-----------|------|
| [#94847](https://github.com/anthropics/claude-code/pull/94847) | **diff：首次编辑仅在存在要列出的文件时才打开面板** | 修复首次成功编辑时 diff 面板自动打开的问题，特别是在工作区外或不同工作树中的写入操作。 | 提升用户体验，避免空面板和 UI 闪烁。 |
| [#94843](https://github.com/anthropics/claude-code/pull/94843) | **diff：提示文本通过可能缺少 `viewport.isFullscreen` 字段的类型读取** | 更新类型声明，使提示文本逻辑更健壮，防止运行时异常。 | 提高代码健壮性，避免潜在崩溃。 |
| [#94653](https://github.com/anthropics/claude-code/pull/94653) | **diff：首次编辑仅在布局允许时才打开面板** | 根据布局方向控制 diff 面板的打开方式，解决宽屏下面板位置异常的问题。 | 使 diff 面板更符合预期布局规则。 |

*注意到三个 PR 均为合并状态，且评论数未知。*claude-code仓库目前仅公开这些差异修复合并请求，因此我们将它们视为当天的亮点。*

---

### 5. 功能需求趋势（按关注热度排序）

| 趋势 | 代表 Issues | 背后的核心需求 |
|-------|-----------------------|--------------------------|
| **1. 子代理权限控制细化** | #82341 | 需要在“全部预加载”和“全部阻止”之外的更细粒度技能控制。 |
| **2. 会话管理和续接** | #82203、#82265、#86620 | 建立会话间的可见链式关系，引入默认“thread brief”模式，更好地支持长任务。 |
| **3. UI/UX 性能和视觉优化** | #82318、#84717、#82385、#86642 | 降低界面延迟、减少视觉噪音、保持输入状态和改善桌面端快捷键。 |
| **4. 语言和本地化支持** | #82195 | 将 CLI UI 扩展到更多语言（当前仅英语）。 |
| **5. 成本和组织监控** | #82481、#82928 | 直接获取企业花费限制数据，在 `/insights` 中增加时间过滤功能。 |
| **6. 导出和数据访问 API** | #82222、#86559 | 为会话历史记录和项目文档提供脚本化导出 API。 |
| **7. 多模型集成和路由** | #82239、#86528 | 支持自定义加密原语和外部 LLM 的直接集成（如 OpenRouter Fusion）。 |
| **8. 桌面端功能增强** | #86597、#86622、#86642 | 删除“最近项目”条目、允许在语音录制期间输入、添加快捷键等。 |
| **9. 插件和技能管理** | #82424 | 在插件级别允许独立启用/禁用技能，而不仅仅是整插件。 |
| **10. 安全和水印管理** | #86624、#82422 | 移除代码水印和对已知安全代码的工作排除。 |

---

### 6. 开发者关注点（高频痛点和反馈）

1. **性能和界面卡顿** – 多个开发者指出新 UI 改进（命令跳转、消息置底等）导致界面缓慢。请求简化 UI 以提高性能。
2. **子代理配置限制** – 目前只能在“预加载”和“阻止”之间二选一，导致安全和成本控制受限。
3. **会话续接透明度** – 长任务导致多个独立 transcript 文件，缺乏可见链式关系，增加跟踪难度。
4. **导出和数据访问的缺失脚本化选项** – 目前只能通过 UI 导出数据，脚本化访问渠道缺失，影响自动化工作流。
5. **语言支持不足** – CLI UI 仅支持英语，迫切需要本地化（如德语）。
6. **成本监控不透明** – 企业组织花费限制数据难以获取，影响预算管理。
7. **桌面端功能差异** – 桌面端（macOS/Windows）和 CLI 端功能不一致，例如“最近项目”清除、快捷键支持等。
8. **多模型集成需求** – 用户希望直接集成外部 LLM，支持更多自定义加密原语和模型路由。
9. **安全警告误报** – 工作于自有代码的安全性时仍会触发安全警告，影响开发体验。

---

*以上是当天的社区动态摘要。感谢全体开发者为 Claude Code 贡献宝贵的反馈和修复。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-09-17（星期四）**

---

## 1. 今日速览

过去 24 小时，Codex 社区最显著的动态集中在**配额消耗异常**与 **Desktop 消息发送故障**两大问题上：配额追踪总贴 #41220 持续升温（45 条评论），而 Windows/多平台「App-server queued follow-up no longer exists」相关反馈在多个 Issue 中集中爆发，合计上百条社区参与。版本方面，0.155.0 系列仍处于密集的 alpha 迭代阶段（日更多个 alpha 构建），尚未进入稳定版；PR 侧则几乎全部为 `copyberry[bot]` 的自动化基础设施修复，无明显面向终端用户的新功能落地。

---

## 2. 版本发布

过去 24 小时共发布 9 个版本，全部为预发布（alpha）或依赖组件版本，无稳定版更新：

| 版本 | 说明 |
|---|---|
| `rusty-v8-v152.2.0` | 底层 V8 引擎 Rust 绑定组件更新 |
| `rust-v0.155.0-alpha.13` ~ `.alpha.2.5` | 8 个 0.155.0 系列 alpha 构建，版本号跳跃（缺少 .4~.7、.9 已发行），反映团队的高频内部迭代节奏 |

> 注意：alpha 版本号出现非连续发布（如 `.2.6` 与 `.8` 等），建议关注官方 Release Notes 以确认具体变更，此处原始数据未提供详细 changelog。

---

## 3. 社区热点 Issues（Top 10）

**① #41220** — 配额消耗异常跨报告追踪总贴 🔥
- **评论 45 | 👍 17** | [链接](https://github.com/openai/codex/issues/41220)
- **为何重要**：这是一个 meta 追踪贴，汇总了多起用户配额/额度被「显著超预期速度消耗」的报告，涉及订阅与已购额度，是当前社区最严重的信任问题之一。
- **社区反应**：活跃度高，持续跨日更新，说明问题覆盖面广且未获解决。

**② #44781** — [Windows Desktop] 编辑并重发排队消息触发 "App-server queued follow-up no longer exists"
- **评论 41 | 👍 50** | [链接](https://github.com/openai/codex/issues/44781)
- **为何重要**：点赞数最高的近期 bug，直接阻断 Windows 桌面端的重发与续聊功能，影响日常使用。
- **社区反应**：强烈共鸣，与 #45019、#45626、#45886 构成同一症状家族，表明该问题跨版本、跨平台普遍存在。

**③ #35259** — Desktop 在等待/状态轮询时反复重入模型，消耗大量额度
- **评论 26 | 👍 22** | [链接](https://github.com/openai/codex/issues/35259)
- **为何重要**：将「配额消耗异常」的根因之一定位到多代理等待轮询的机制性浪费（占本地 token 量 19.8%），为 #41220 提供了技术证据。
- **社区反应**：持续活跃，用户提供了详细的 token 测量数据。

**④ #38503** — Web 端 ChatGPT "Too many requests" 阻断对话与 Work 任务
- **评论 22 | 👍 17** | [链接](https://github.com/openai/codex/issues/38503)
- **为何重要**：限流误伤正常用户，影响 Web 端核心工作流，与配额类问题形成连锁信任危机。

**⑤ #16900** — 功能请求：子代理状态检查与父子等待机制
- **评论 21 | 👍 4** | [链接](https://github.com/openai/codex/issues/16900)
- **为何重要**：指出父线程在子代理健康但慢速执行时会「过早回退重做」，暴露多代理编排的同步缺陷，是企业级工作流稳定性的关键障碍。

**⑥ #45019** — App-server queued follow-up no longer exists（macOS）
- **评论 19 | 👍 48** | [链接](https://github.com/openai/codex/issues/45019)
- **为何重要**：高赞证实该 bug 不限于 Windows——macOS（X20 PRO 订阅）同样中招，说明问题在 app-server 层而非平台特定。

**⑦ #38128** — Remote Control 在官方未 root 的 GrapheneOS 上阻止 ChatGPT Android 注册
- **评论 18 | 👍 10** | [链接](https://github.com/openai/codex/issues/38128)
- **为何重要**：安全检测（safety-check）误判合规环境，影响隐私敏感用户群体，反映安全检查策略与自定义 ROM 生态的兼容性缺口。

**⑧ #31376** — `codex exec` HTTP 请求在死连接上无限挂起，无边界重试
- **评论 16 | 👍 3** | [链接](https://github.com/openai/codex/issues/31376)
- **为何重要**：CLI 长期非交互任务（23 分钟稳定运行后）因 socket 处于 CLOSE_WAIT 而彻底卡死，无读取超时、无重试，是自动化批量任务的高危稳定性缺陷。

**⑨ #18115** — 仓库级 marketplace 与插件配置（config.toml 项目作用域）
- **评论 15 | 👍 66** | [链接](https://github.com/openai/codex/issues/18115)
- **为何重要**：本期点赞最高的增强请求，要求插件配置从用户级下沉到仓库级（`.codex/config.toml`），这对团队协作与可复现环境至关重要。

**⑩ #35006** — [MCP] 企业 SSO 的 OAuth 生命周期与重认证可靠性
- **评论 11 | 👍 2** | [链接](https://github.com/openai/codex/issues/35006)
- **为何重要**：作为 MCP OAuth 端到端问题的伞式追踪贴，直接关系企业客户的落地能力，虽然点赞不多但战略意义重大。

---

## 4. 重要 PR 进展（Top 10）

过去 24 小时的 PR 全部由 `copyberry[bot]` 提交且已合并，属于自动化基础设施治理，未见人工提交的大型功能。按功能重要性筛选如下：

**① #46040** — 检测到屏幕阅读器时默认关闭 TUI 动画
- [链接](https://github.com/openai/codex/pull/46040)
- 无障碍改进：macOS/Windows/Linux 启动时探测屏幕阅读器（450ms 超时），自动保存 `tui.animations = false`，体现对辅助技术用户的重视。

**② #46035** — 新增按应用粒度的工具暴露配置
- [链接](https://github.com/openai/codex/pull/46035)
- 通过 `apps.<connector_id>.omit_tools_from` 允许单个连接器独立退出延迟发现，提升多连接器场景的配置灵活性。

**③ #46026** — 在 `codex-prompts` 中集中化模型消息解析与渲染
- [链接](https://github.com/openai/codex/pull/46026)
- 引入 `ResolvedModelMessages`，统一基础指令、Guardian 提示组合与多代理角色渲染路径，有利于消除分散实现带来的不一致。

**④ #46009** — 集中化压缩检查点选择与校验
- [链接](https://github.com/openai/codex/pull/46009)
- 新增 `CompactionCheckpoint`，将检查点与其生产者模型 hash 绑定并共享可用性/审查者兼容性检查，提升历史压缩的正确性。

**⑤ #46032** — 托管配置强制要求 macOS 受限偏好设置
- [链接](https://github.com/openai/codex/pull/46032)
- 安全加固：防止普通用户默认值覆盖管理员配置，堵住管理配置被低权限层篡改的漏洞。

**⑥ #46008 / #46013** — 权限选择统一路由至 app server
- [链接](https://github.com/openai/codex/pull/46008) ｜ [链接](https://github.com/openai/codex/pull/46013)
- 将内置权限选择与快捷方式改为「服务端确认后才生效」，消除 TUI 本地直写与权威配置不同步的竞态。

**⑦ #46031** — 握手失败后保持 Noise 中继流存活
- [链接](https://github.com/openai/codex/pull/46031)
- 修复握手失败预算耗尽即关闭物理中继、连带断开已认证流的缺陷；改为失败 8 次后暂停接入 10 秒而非整体断开。

**⑧ #46029** — 允许浏览器应用在中断时执行清理钩子
- [链接](https://github.com/openai/codex/pull/46029)
- 将 `Interrupt` 加入浏览器清理钩子白名单，避免中断回合时遗留脏状态。

**⑨ #46011** — 构造 API 提供者时强制托管驻留约束
- [链接](https://github.com/openai/codex/pull/46011)
- 修复实时连接直接构造 API provider 绕过驻留规制的路径，保障合规要求不被自定义 header 覆盖。

**⑩ #46020** — 新增实验性 rollout 压缩端点
- [链接](https://github.com/openai/codex/pull/46020)
- 新增 `rollout/compress` 后台压缩通道，在本地线程存储压缩关闭时也能按需触发冷 rollout 压缩，属基础设施优化。

---

## 5. 功能需求趋势

综合全部 50 条 Issue 的标签与内容，本周社区关注方向呈现以下聚类：

1. **配额/限流治理（rate-limits）** — 最热方向，覆盖 #41220、#35259、#38503、#45085、#45594 等多条，用户要求更透明的消耗计量、消除轮询型浪费、修复误限流。

2. **多代理与子代理编排（subagent）** — #16900、#38805、#45841、#45945、#35259 聚焦父子的同步、孤立子代理清理、会话增长失控等，社区开始构想从「单模型」走向「专家模型网络」（如 Swarm Intelligence 提案 #45841）。

3. **Desktop 会话稳定性（app-server/session）** — #44781、#45019、#45626、#45886、#40322 的「发送按钮被禁用 / 会话空白 / 排队消息丢失」家族是本周最集中的 P0 级可用性痛点。

4. **Windows 沙箱与 ACL（sandbox）** — #40550、#17458、#31620、#46038（PR）持续暴露 Windows 沙箱初始化、DACL 权限、NTFS ACL 失败及回退到非沙箱高权限执行的隐患。

5. **MCP 与企业 SSO（auth/mcp）** — #35006 领衔的 OAuth 生命周期可靠性，反映企业客户对 MCP 接入稳定性的刚需。

6. **本地化/仓库级配置（skills/plugins）** — #18115 高赞（👍66）要求项目级插件与 marketplace，体现团队协作与 CI 复现需求正在上升。

---

## 6. 开发者关注点（痛点与高频需求）

- **低优先级修复与发布节奏的矛盾**：0.155.0 已迭代至少 13 个 alpha 构建，但如「动画禁用导致计时器冻结」（#45564）、「详细推理摘要无正文」（#34873）等低危但影响体验的问题长期积压。

- **Windows 平台是重灾区**：沙箱设置失败、ACL 错误、消息发送禁用、WSL2 项目创建失败（#45394）等，Windows 用户面临的多重故障叠加使得该平台体验显著落后于 macOS。

- **无障碍与键盘用户被忽视**：鼠标光标定位（#36439）与 macOS 上 Control+Space 快捷键冲突（#42258，👍27）表明桌面端在当前输入法环境下存在严重的交互设计盲区。

- **额度衡量缺乏可解释性**：开发者要求「可审计的消耗计量」——不只是修 bug，更希望官方提供明确的 token/额度映射与实时消耗视图，否则难以做成本控制（订阅购买意愿受挫）。

- **企业级功能诉求升温**：MCP 企业 SSO、仓库级插件配置、持久化 PR 审查循环（#19112）三条线同时走强，显示 Codex 正从「个人开发者工具」向「团队/企业工作流平台」过渡的窗口期，官方协同治理（多来自 bot 的安全/权限收敛 PR）也印证了这一方向。

---

*日报说明：以上数据均来自公开 GitHub 仓库 `openai/codex`，统计截至 2026-09-17。社区评论数与点赞数反映的是数据抓取时刻快照，可能随实时变化。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**2026-09-17**

---

## 1. 今日速览

Gemini CLI 社区今日活动热烈，包括 v0.62.0-nightly 版本发布和一系列重要修复。多个长期悬而未决的问题（如子代理恢复、通用代理卡顿）持续引发关注，社区同时关注 IDE 集成、性能优化和安全性提升。

---

## 2. 版本发布

**v0.62.0-nightly.20260916.g6a466a7e2**
- **核心修复**：确保 AgentLoopContext 属性在对象展开时被保留
- **A2A 服务器修复**：在任务元数据端点中对不支持的存储进行早返回处理

---

## 3. 社区热点 Issues

### 1. **#22323** - 子代理最大轮次限制恢复异常处理
**重要性**：`codebase_investigator` 子代理在达到 `MAX_TURNS` 时仍报告“GOAL”成功状态，导致中断隐藏 **Comments**: 13 | **👍**: 2 | [链接](https://github.com/google-gemini/gemini-cli/issues/22323)
- 影响代码分析的可靠性，用户无法正确了解分析进度

### 2. **#21409** - 通用代理永久卡顿问题
**重要性**：当 Gemini CLI 委派任务给通用代理时，会导致永久卡顿，简单文件夹创建操作也无法完成 **Comments**: 8 | **👍**: 8 | [链接](https://github.com/google-gemini/gemini-cli/issues/21409)
- 用户报告等待超过一小时才能取消，严重影响使用体验

### 3. **#25166** - 壳命令执行完成后卡住“等待输入”
**重要性**：Gemini 执行简单 CLI 命令后，会在命令已完成但仍显示“Awaiting user input”的状态 **Comments**: 4 | **👍**: 3 | [链接](https://github.com/google-gemini/gemini-cli/issues/25166)
- 破坏了用户对命令执行完成的预期

### 4. **#29350** - 主页获取模块表格内容丢失问题
**重要性**：`web_fetch` 工具在表格渲染时使用默认块级渲染，导致表格数据完全丢失 **Comments**: 1 | **👍**: 0 | [链接](https://github.com/google-gemini/gemini-cli/issues/29350)
- 影响数据提取和分析功能

### 5. **#20079** - 符号链接路径下代理未识别
**重要性**：当 `~/.gemini/agents/filename.md` 是符号链接时，系统无法识别为代理文件 **Comments**: 4 | **👍**: 0 | [链接](https://github.com/google-gemini/gemini-cli/issues/20079)
- 影响了代理文件的灵活管理

### 6. **#22467** - 代理系统权限继承机制
**重要性**：讨论子代理在权限控制和资源访问方面的权限传递问题 **Comments**: 6 | **👍**: 1 | [链接](https://github.com/google-gemini/gemini-cli/issues/22467)

### 7. **#22186** - `get-shit-done` 输出钩子崩溃问题
**重要性**：在用户总结输出阶段经常导致 Gemini CLI 崩溃 **Comments**: 3 | **👍**: 0 | [链接](https://github.com/google-gemini/gemini-cli/issues/22186)

### 8. **#22598** - 子代理轨迹分享功能
**重要性**：呼吁实现通过 `/chat share` 访问子代理执行轨迹的功能 **Comments**: 2 | **👍**: 1 | [链接](https://github.com/google-gemini/gemini-cli/issues/22598)

### 9. **#21763** - 子代理上下文缺失问题
**重要性**：Bug 报告中未包含子代理执行上下文，导致问题诊断困难 **Comments**: 2 | **👍**: 0 | [链接](https://github.com/google-gemini/gemini-cli/issues/21763)

### 10. **#21432** - 代理“自我感知”功能扩展
**重要性**：希望 Gemini CLI 能够像专家一样解释自身机制、热键和 CLI 参数 **Comments**: 2 | **👍**: 0 | [链接](https://github.com/google-gemini/gemini-cli/issues/21432)

---

## 4. 重要 PR 进展

### 1. **#29340** - PTY 文件描述符清理优化
**功能**：增强 POSIX 平台的文件描述符和流生命周期管理，确保 PTY 会话和后台 shell 执行完成时完全释放资源 **状态**: OPEN | [链接](https://github.com/google-gemini/gemini-cli/pull/29340)

### 2. **#29358** - 反向搜索高亮显示修复
**修复**：修复 Ctrl+R 反向搜索时高亮匹配项与原始文本不一致的问题 **状态**: OPEN | [链接](https://github.com/google-gemini/gemini-cli/pull/29358)

### 3. **#29354** - Rootless Podman 沙盒用户命名空间修复
**优化**：为 Rootless Podman 沙盒添加 `--userns=keep-id` 参数，解决主机 UID/GID 映射时遇到的文件访问权限问题 **状态**: OPEN | [链接](https://github.com/google-gemini/gemini-cli/pull/29354)

### 4. **#29359** - Web 获取表格内容保留修复
**修复**：解决 `web_fetch` 工具中表格内容丢失问题，确保表格数据完整传输到模型 **状态**: OPEN | [链接](https://github.com/google-gemini/gemini-cli/pull/29359)

### 5. **#29351** - 版本号自动更新（0.62.0-nightly）
**维护**：自动化版本更新，支持每日发布流程 **状态**: OPEN | [链接](https://github.com/google-gemini/gemini-cli/pull/29351)

### 6. **#29152** - 路径遍历漏洞修复
**安全修复**：修复 `get_internal_docs` 工具中的路径遍历漏洞，防止通过同级目录名绕过保护 **状态**: OPEN | [链接](https://github.com/google-gemini/gemini-cli/pull/29152)

### 7. **#29151** - 技能管理系统大小写处理修复
**修复**：解决技能优先级和激活状态的大小写敏感问题，实现技能名称匹配的_case-insensitively_处理 **状态**: CLOSED | [链接](https://github.com/google-gemini/gemini-cli/pull/29151)

### 8. **#29249** - 安全路径验证增强
**安全改进**：强化路径组件边界验证，防止通过同级目录名绕过文档目录保护 **状态**: OPEN | [链接](https://github.com/google-gemini/gemini-cli/pull/29249)

### 9. **#29155** - BOM 编码内容解析修复
**修复**：修正空计划文件中 UTF-16/UTF-32 BOM 编码的正确解析，避免因解码错误导致的验证问题 **状态**: CLOSED | [链接](https://github.com/google-gemini/gemini-cli/pull/29155)

### 10. **#29348** - 文件写入原子性和序列化修复
**修复**：解决并行工具执行时同路径文件写入的竞争问题，实现原子写入和序列化操作 **状态**: OPEN | [链接](https://github.com/google-gemini/gemini-cli/pull/29348)

---

## 5. 功能需求趋势

### 🚀 **代理系统优化**
- **子代理恢复机制**：修复 MAX_TURNS 限制下的异常行为
- **代理权限控制**：增强安全性和权限继承机制
- **代理轨迹可视化**：支持子代理执行轨迹的分享和查看

### 🔍 **代码分析能力提升**
- **AST 感知工具**：探索使用 AST 技术实现更精确的文件读写和代码映射
- **上下文提取优化**：实施“审慎提取”逻辑，减少 token 使用
- **任务跟踪持久化**：从基于会话的历史记录转向文件系统的持久化任务跟踪

### 🖥️ **终端和 IDE 集成**
- **高性能终端调整**：解决窗口调整时的渲染抖动问题
- **IDE 集成增强**：更智能的工具作用域限制和代码补全
- **跨平台兼容性**：修复 Windows 下的路径大小写敏感问题

### 📊 **性能和可靠性**
- **Memory 系统改进**：自动 Memory 提取和低信号会话处理
- **错误恢复机制**：浏览器代理会话接管和锁恢复
- **环境安全性**：增强敏感信息自动脱敏和日志记录控制

---

## 6. 开发者关注点

### ⚠️ **高优先级痛点**
1. **代理稳定性问题**：通用代理和子代理的卡顿/恢复问题持续影响用户体验
2. **终端交互异常**：命令执行完成后状态显示不正确，影响用户信任
3. **安全漏洞修复**：路径遍历、信息泄露和权限绕过问题频繁出现

### 🔧 **常用优化请求**
1. **代理自我感知能力**：希望代理能够像专家一样解释自身机制
2. **IDE 集成支持**：对更智能的工具过滤和代码上下文理解提出需求
3. **性能监控**：要求增加对子代理执行轨迹的监控和分析能力

### 📈 **社区反馈模式**
- **Bug 报告**：以代理功能和终端交互问题为主
- **功能增强**：集中在代码分析、性能优化和安全性提升
- **文档完善**：对钩子决策值、配置设置等文档细节提出修改建议

---

*以上日报基于 GitHub 数据生成，涵盖了截至 2026-09-17 的最新动态。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-09-17**

---

## 今日速览

过去 24 小时 Copilot CLI 连续发布了 3 个版本（v1.0.85、v1.0.86-0、v1.0.86-1），核心亮点是 **Vim 模式全面开放** 与 **自定义 Agent 支持仓库指令文件**。Issue 侧呈现代际传递特征：多个高赞需求（reasoning effort 按 agent 配置、subagent 工具调用详情展示）与一批长期挂起的 MCP 集成缺陷同时涌现，社区对 MCP 配置一致性和自定义 Agent 的细粒度控制诉求尤为突出。

---

## 版本发布（过去 24 小时：3 个版本）

### v1.0.86-1
- **新增**：自定义 Agent 可通过 frontmatter 设置 `include-custom-instructions: true`，选择加入仓库指令文件（`AGENTS.md`、`copilot-instructions.md`、`CLAUDE.md`）的上下文注入。
- **修复**：恢复活跃会话时，正确保留 plugin-directory、discovery 和 working-directory 的覆盖配置。

🔗 [查看 Release](https://github.com/github/copilot-cli/releases/tag/v1.0.86-1)

### v1.0.86-0
- **修复**：
  - 会话转录文件存在可恢复损坏时也能正常恢复会话。
  - 紧凑时间线中展开的推理文本不再变暗，可读性与时间线其余部分保持一致。
  - Autopilot 在接受任务完成后正确停止，不再意外继续执行。

🔗 [查看 Release](https://github.com/github/copilot-cli/releases/tag/v1.0.86-0)

### v1.0.85（2026-09-16）
- **Vim 模式开放给所有用户**：通过 `/vim` 或设置 `editorMode: vim` 启用 composer 内的模态编辑，输入时显示当前模式。
- **新增 `/settings` 选项**：允许为 Agent 和子 Agent 选择启用上下文管理工具。
- **新增 `transcriptView` 设置项**（条目截断，详情见 Release 页面）。

🔗 [查看 Release](https://github.com/github/copilot-cli/releases/tag/v1.0.85)

---

## 社区热点 Issues（精选 10 条）

### 🔥 1. 自定义 Agent 应支持按 Agent 配置 Reasoning Effort
**#2904** · 已关闭 · 👍 23 · 💬 9
目前 reasoning effort 只能通过全局 `--effort` 设置，自定义 Agent（`.agent.md`）虽支持 `model` 字段锁定模型，却无法按 Agent 逐一定义推理强度。高赞数说明这是社区对 Agent 精细化控制的核心诉求之一，该需求伴随 v1.0.86-x 系列对自定义 Agent 能力的持续增强而升温。

🔗 https://github.com/github/copilot-cli/issues/2904

### 🔥 2. 请求展示 Subagent 工具调用详情
**#1322** · 已关闭 · 👍 25 · 💬 7
当前 CLI 中 subagent 运行时的工具调用信息展示极为有限，仅显示状态、ID、类型和耗时。相比之下 VS Code 的 Copilot Chat 允许用户逐层查看 subagent 发出的每个工具调用。25 个赞使其成为本期数据中赞数最高的功能请求，反映出专业用户对执行过程透明度的强需求。

🔗 https://github.com/github/copilot-cli/issues/1322

### 🔥 3. Worktree 应默认禁用
**#2243** · 开放中 · 👍 16 · 💬 3
用户报告了一次"噩梦级"体验：会话被移交给 CLI 后，在 git worktree 中生成的大量代码因 git 相关问题无法合回主 worktree。建议 worktree 功能默认关闭，仅由用户显式启用。16 个赞同表明该工作流下存在普遍性痛点。

🔗 https://github.com/github/copilot-cli/issues/2243

### 4. HTTP MCP Server 的 Bearer Token 错误触发 OAuth 发现流程
**#3100** · 开放中 · 👍 10 · 💬 1
在 `.mcp.json` 中配置 `type: http` 和 Bearer Token 认证头时，CLI 仍尝试 OAuth 发现流程并报错，而非直接使用已有的 headers 认证。10 个赞说明该问题影响了一批使用自建 MCP 服务器的开发者，影响了本地/内网工具的接入体验。

🔗 https://github.com/github/copilot-cli/issues/3100

### 5. Claude Sonnet 4.6 反复 503 连接失败
**#2050** · 已关闭 · 💬 9 · 👍 4
用户在使用 `claude-sonnet-4.6 (medium)` 执行规格生成任务时，遭遇 5 次重试全部失败（HTTP/2 GOAWAY 连接终止），总计等待 84.7 秒。同类任务在 Gemini 3 Pro 上无此问题。指向了特定模型后端服务的不稳定性问题。

🔗 https://github.com/github/copilot-cli/issues/2050

### 6. Workspace `.mcp.json` 被检测到但未在会话中连接
**#4542** · 开放中 · 💬 3 · 👍 1
`mcp list`/`mcp get` 正确显示 workspace 级 MCP 服务器为 `Enabled`，但实际进入交互式会话（`-i`/`-p`）后这些服务器并未连接。检测与实际会话行为之间的不一致，让用户对 MCP 系统的可靠性产生质疑。

🔗 https://github.com/github/copilot-cli/issues/4542

### 7. macOS Terminal 下 1.0.84-8 键盘输入完全失效
**#4855** · 已关闭 · 💬 3
在 macOS Terminal 中，v1.0.84-8 的交互式界面加载完成后对键盘输入完全无响应，非交互模式正常，旧版本 1.0.x 也正常。这是一个阻断性回归缺陷，对于 macOS 用户影响严重。

🔗 https://github.com/github/copilot-cli/issues/4855

### 8. Plan 模式误拦截只读 `gh api` 查询
**#4220** · 已关闭 · 💬 2 · 👍 1
Plan 模式的命令门控本应放行只读命令、仅拦截工作区修改。但 `gh api` GET 请求和 GraphQL 查询被误判为"可能修改工作区"。这对依赖 `gh` CLI 进行调查性操作的工作流造成了直接阻碍。

🔗 https://github.com/github/copilot-cli/issues/4220

### 9. 远程容器/Codespaces 中 MCP OAuth 回调不可达
**#3009** · 开放中 · 💬 2 · 👍 1
在 Codespaces 或 Dev Container 中运行时，MCP OAuth 流程重定向到 `localhost` 回调地址，用户浏览器无法访问该地址，且无手动粘贴令牌的降级方案。这直接阻断了远程开发环境下 MCP 服务的认证流程。

🔗 https://github.com/github/copilot-cli/issues/3009

### 10. 非 repo 根目录下无法读取 MCP/配置文件
**#4765** · 开放中 · 💬 2
当工作目录是一个包含多个 repo 的非 git workspace 目录时，CLI 无法读取该目录下的 `.mcp.json`、hook 文件及其他配置。这对多仓库工作区（非 monorepo 结构）用户造成了配置加载障碍。

🔗 https://github.com/github/copilot-cli/issues/4765

---

## 重要 PR 进展

过去 24 小时内 **无 Pull Request 更新**。社区活跃度目前集中在 Issue 讨论与 Release 迭代上，PR 活动进入短暂空窗期。

---

## 功能需求趋势

从过去 24 小时的 Issue 数据中，可提炼出以下社区最关注的功能方向：

| 方向 | 代表 Issue | 信号强度 |
|------|-----------|---------|
| **Custom Agent 精细化控制** | #2904（reasoning effort）、#1322（tool call 详情） | 强（48 赞合计） |
| **MCP 集成健壮性** | #4542、#3100、#3009、#4562 | 强（多 Issue 并发，覆盖检测/认证/远程场景） |
| **Git Worktree 工作流** | #2243 | 中强（16 赞，单一但集中） |
| **配置灵活性与源加载** | #4765、#4562 | 中（非标准目录结构支持） |
| **权限系统精确性** | #4220、#2876 | 中（误判问题持续出现） |
| **终端渲染与输入体验** | #4855、#3170（中文光标）、#3741（鼠标选择） | 持续存在 |

**结论**：社区焦点正在从"能否提供更多模型/Agent 能力"转向"能力是否可配置、可预测、可调试"。MCP 作为扩展生态的核心协议，其配置加载的一致性和远程/容器场景的兼容性是当前最需要投入的方向。

---

## 开发者关注点

综合今日 Issue 数据，开发者反馈中的痛点可归纳为以下四类：

### 1. MCP 配置的多环节断裂
从 `.mcp.json` 被检测到（`list`/`get` 正常）但未在会话中生效（#4542），到 reload 沿用旧快照而非读取修改后的配置（#4562），再到非 repo 根目录下的配置文件被完全忽略（#4765），MCP 的配置加载管线在整个生命周期中存在多个断点。开发者期望配置在"检测 → 连接 → 重载"全链路的一致性。

### 2. 自定义 Agent 缺少关键参数控制
`model` 可以锁定（#2904），但 `reasoning effort` 无法按 Agent 配置；subagent 工具调用不可见（#1322）使调试链路断裂；Agent 的可用 skills 未注入系统提示词（#2753）。这一组问题指向同一个底层需求：**Agent 需要像一级公民一样可完全配置和可观察**。v1.0.86-1 对 `include-custom-instructions` 的支持是积极信号，但这批需求仍有较大存量待消解。

### 3. 权限系统误判侵蚀工作流信任
Plan 模式将 `gh api` GET 拦截为潜在修改（#4220），含连字符路径在权限检查中被错误编码（#2876），本地沙盒的"允许本地网络"设置未生效（#4854）。这些根因各异的误判共同造成一个后果：开发者难以预判 CLI 何时会无故阻止合理操作，进而削弱对自动化授权的信任。

### 4. 跨平台终端兼容性脆弱
macOS Terminal 键盘输入失效（#4855）、中文输入光标错位（#3170）、`/skills` UI 拦截鼠标选择导致无法复制文本（#3741）、Windows 下 `.bat` 脚本无法用作外部编辑器（#1882）——终端交互层的兼容性缺陷持续散点式出现，说明核心渲染与输入管线在多平台矩阵下仍有盲区。

---

> 📌 **数据说明**：本期数据来自 github/copilot-cli 仓库过去 24 小时更新，包含 3 个 Releases、50 条 Issue（选取评论数前 30 条展示）、0 条 PR。社区参与度方面，过去 24 小时内处于低活跃区间，大部分 Issue 为旧问题的状态更新（CLOSED），新增 Issue 较少。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI 社区日报** (2026-09-17)

---

### 1. 今日速览
- 社区关注点集中在配额滥用和子代理无限重试的问题上，该问题可能导致用户意外消费超过 5 小时的使用限额。
- 一个新的安全钩示例被合并，通过 HOL Guard 对 Shell 命令进行预执行验证，提升了 CLI 层面的安全控制。

---

### 2. 版本发布
*暂无*

---

### 3. 社区热点 Issues

| 排序 | Issue | 重要性与社区反馈 | 链接 |
|------|-------|------------------|------|
| 1 | **#2647** *会话在终端 403 错误后持续消耗配额，子代理启动无限重试循环* | - 用户报告当终端出现“5 小时使用限制”错误时，会话未正常中止，而是无限重试，导致配额被持续消耗。 <br> - 子代理在访问被拒绝后仍独立运行，引发潜在的资源泄漏。 <br> - 目前无评论，表明问题新发布，尚未引发广泛讨论。 | https://github.com/MoonshotAI/kimi-cli/issues/2647 |
| 2‑10 | *（由于过去 24 小时内无其他更新，此处仅列出最新的问题。针对更多历史 Issue，请参考仓库的 Issue 标签。）* | - 暂无其他活跃 Issue 数据。 | — |

---

### 4. 重要 PR 进展

| 排序 | PR | 功能/修复摘要 | 链接 |
|------|-----|----------------------|------|
| 1 | **#2648** *examples: add HOL Guard PreToolUse gate* | - 新增一个 PreToolUse 示例，将 Kimi CLI 的 Shell 命令提交给 HOL Guard 进行安全检查。 <br> - 仅当 `classification.explicitly_benign = true` 且 `minimum_action = allow` 时允许执行。 <br> - 违规时退出码为 `2`，集成在示例工具链中。 | https://github.com/MoonshotAI/kimi-cli/pull/2648 |
| 2‑10 | *（过去 24 小时内无其他 PR 更新。）* | - 暂无其他新提交。 | — |

---

### 5. 功能需求趋势

基于当前活跃 Issue 和 PR，可以归纳出三个主要社区关注方向：

| 趋势 | 体现原因 | 潜在影响 |
|-------|--------------|-------------------|
| **配额保护与会话管理** | Issue #2647 暴露了终端 403 错误后会话未正常终止的缺陷，导致配额被滥用。 | 推动开发更鲁棒的错误处理机制，增加自动会话超时和配额守卫逻辑。 |
| **安全与沙盒化** | PR #2648 引入了 HOL Guard 的预工具使用验证，反映出社区对 LLM 代码执行安全性的关注。 | 可能加速集成更多第三方安全钩，强化 CLI 层面的权限控制和审计。 |
| **监控与诊断** | Issue 中提及子代理“独立启动重试循环”，表明当前监控不足。 | 增加对子代理行为的日志记录和实时监控功能，便于排查配额消耗和错误重试问题。 |

---

### 6. 开发者关注点

- **配额意外消耗** – 当终端返回“5 小时使用限制”403 错误时，会话未正常中止，而是持续重试，造成用户配额被悄无声息地消耗。
- **子代理运行状态不可控** – 子代理在访问被拒后仍独立运行，形成一个离线重试循环，加大了排查难度。
- **安全审计需求** – 社区希望在 Shell 命令执行前能进行强制安全检查，防止潜在风险代码的无稽执行。

---

*本站日报基于过去 24 小时内的 GitHub 活动数据生成。数据来源：[MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 – 2026-09-17

---

## 1. 今日速览

过去24小时，OpenCode 社区讨论热度持续升温。UI 布局争议成为焦点，恢复经典双面板布局的诉求高涨，同时多项与 Zen API 工具流和 reasoning 字段的回归性 Bug 引发关注。此外，Web 版新布局硬编码、桌面端闪退及模型提供商端故障（如 Qwen 3.8 Flash、Muse Spark）等问题也成为用户抱怨的热点。

---

## 2. 版本发布

**无最新 stable 版本发布**。仓库仅显示“无最新 Releases”，暂无正式或预览版本信息。

---

## 3. 社区热点 Issues

| # | 标题 | 重要性 | 社区反响 |
|---|-------|---------------|-------------------|
| **48882** | **[OPEN] 恢复经典 UI，保留持久左侧边栏** | 用户在最近 sidebar 重设 (#20242) 后，倍感工作流受影响。双面板布局（左侧项目/会话列表 + 右侧会话内容）对多项目和多人工作站至关重要。 | **23 条评论 / 27👍** – 讨论主要集中在新布局缺失工作区（git worktree）支持和 Web 端缺少回退机制。 |
| **44300** | **[CLOSED] Zen API：x-preview-f-free / ox-alpha-free 含 `tools` 时失败** | 影响使用 OpenCode-GO 提供的免费模型的开发者。任何包含工具调用的聊天完成请求均触发“端点不可用”错误，导致自动化的工具调用链中断。 | **15 条评论 / 5👍** – 用户分享了控制台和 GO 路由的日志，确认问题已持续约一个月。 |
| **15617** | **[OPEN] 支持使用 `$skill-name` 内联技能调用** | 用户希望在提示的任意位置（而不仅是开始）调用技能。目前需先输入特定前缀，造成人工输入负担。 | **9 条评论 / 25👍** – 支持者认为这将显著提升技能编排的便捷性。 |
| **23114** | **[OPEN] 会话标题代理依赖注入的上下文，而非真实用户消息** | 自动生成的会话标题可能无法反映实际用户意图，影响会话的可读性。 | **7 条评论 / 3👍** – 技术细节涉及 `MessageV2.toModelMessagesEffect`，表明标题模型可能接收内存 MCP 服务器的摘要。 |
| **37546** | **[OPEN] Web 端无权回归原布局，新布局缺失工作区** | Web 版 v1.17.19+ 强制升级“标签页置顶”布局后，用户连切换回旧版的 UI 控件都找不到。新布局完全省略了工作区（git worktree）功能。 | **6 条评论 / 24👍** – 大量用户表示生产力下降，尤其是多仓库开发场景。 |
| **34214** | **[OPEN] OpenCode 卡死 / 变无响应** | 长时间运行（多次工具调用）后，助手停止响应，UI 冻结，用户只能重启整个应用才能继续。类似问题已多次出现，疑似资源泄漏或事件循环阻塞。 | **6 条评论 / 1👍** – 日志中未见明显错误，但问题稳定存在。 |
| **38230** | **[CLOSED] 将“旧 UI / V2 UI”切换按钮置为持久化，Web 端也添加** | 用户希望桌面端的布局切换（已 brief 亮相于 v1.17.19/v1.18.x）成为永久设置，并能用于 Web UI，从而避免版本间的 UI 差异。 | **6 条评论 / 5👍** – 呼声高但尚未实现。 |
| **28971** | **[Desktop BETA] 侧边栏消失** | 最新 beta 版本 (v0.0.0-beta-202605230754) 隐藏了侧边栏，菜单“视图->切换侧边栏”无响应。Linux 用户遇到此问题后无法使用项目/会话导航。 | **6 条评论 / 0👍** – 主要为 beta 测试者反馈。 |
| **49021** | **[OPEN] 带回来旧版布局** | 用户重申旧版的双面板布局对他们的工作流不可或缺。希望能选择保留经典 UI。 | **5 条评论 / 3👍** – 反映出对新 UI 去中心化设计的普遍担忧。 |
| **48837** | **[UI 反馈] 强制 V2 界面破坏多项目/多代理工作流（20+ 个会话）** | 用户使用新版后表示生产力严重下降。新版 UI 缺乏持久侧边栏和会话分组，无法高效管理大量并行对话。 | **5 条评论 / 17👍** – 点赞数高，表明社区对新布局体验的不满。 |

*每个 Issue 的链接：`https://github.com/anomalyco/opencode/issues/<num>`*

---

## 4. 重要 PR 进展

| # | 标题 | 主要变化 | 链接 |
|---|-------|-------------|-----|
| **42939** | `[contributor, automated-pr-cleanup] feat(tui): 隐藏会话标签快捷数字，默认隐藏` | 为 TUI 会话标签数字提示添加配置项 `tabs.numbers`，并在设置对话框中暴露。 | `https://github.com/anomalyco/opencode/pull/42939` |
| **42937** | `[automated-pr-cleanup] feat(lsp): 添加 Taplo 语言服务器支持 TOML` | 集成 `taplo`，为 TOML 文件提供智能提示及校验。 | `https://github.com/anomalyco/opencode/pull/42937` |
| **42936** | `[automated-pr-cleanup] feat(lsp): Marksman 语言服务器支持 Markdown` | 为 Markdown 文件添加 `marksman` LSP 支持。 | `https://github.com/anomalyco/opencode/pull/42936` |
| **42927** | `[needs:title, automated-pr-cleanup] feat(tui) 显示上下文窗口限制到 token 使用计数和侧边栏` | TUI 输入条扩展了上下文使用显示（此前只显示 `30.0K (15%)`），并在侧边栏体现窗口限制。 | `https://github.com/anomalyco/opencode/pull/42927` |
| **42922** | `[contributor, automated-pr-cleanup] feat(console): 恢复推荐奖励功能` | 增加了一个专用的REST端点，用于回滚单个推荐奖励，保持重试幂等性，并支持已用奖励回退。 | `https://github.com/anomalyco/opencode/pull/42922` |
| **42907** | `[automated-pr-cleanup] fix(tui): 按创建顺序排列子会话` | 子会话排序从按会话ID改为按创建时间排序，修复了 “Ctrl+X+Down” 浏览子会话的行为。 | `https://github.com/anomalyco/opencode/pull/42907` |
| **42904** | `[automated-pr-cleanup] feat(server): 添加项目元数据更新 API` | 开放 `PATCH /api/project/:projectID`，支持修改项目名称、图标及启动命令；保留未修改字段。 | `https://github.com/anomalyco/opencode/pull/42904` |
| **42902** | `[automated-pr-cleanup] feat(tui): Odin 语法高亮支持` | 为 Odin 语言注册 Tree-sitter WASM 高亮支持，提升 V2 TUI 编辑体验。 | `https://github.com/anomalyco/opencode/pull/42902` |
| **42901** | `[automated-pr-cleanup] feat(format): 添加 PureScript (`purs-tidy`) 格式化支持` | 集成 `purs-tidy`，为 PureScript 代码提供代码格式化支持。 | `https://github.com/anomalyco/opencode/pull/42901` |
| **42894** | `[automated-pr-cleanup] fix(session): 模型无关提示时保留用户的模型切换状态` | 修复模型无关提示（如插件“提醒”）时，不应覆盖用户已选择的模型。 | `https://github.com/anomalyco/opencode/pull/42894` |

*所有 PR 链接请见仓库 `anomalyco/opencode`。*

---

## 5. 功能需求趋势

1. **UI 布局回归与持久侧边栏** – 多个高权重 Issue 呼吁恢复经典的“左侧持久边栏 + 会话列表”布局，并增加新 UI 中的工作区（git worktree）支持。用户反应新版 UI 在多项目/多会话工作流下的表现不佳。

2. **Reasoning 流重建** – 多项 Issue（如 #35283、#49188、#49413）指出，OpenCode 无法正确转发基于 `reasoning` 字段（如 OpenAI 兼容模型的推理链），导致推理内容丢失或端点错误（加密内容被拒绝、服务不可用）。

3. **稳定性与性能修复** – “OpenCode 冻结”、“卡死”和“会话标题模型依赖注入”等问题表明在长时间运行的对话或 agent 控制台中，存在资源或事件循环的潜在泄漏。

4. **Zen/GO 免费模型支持** – Zen API (`x-preview-f-free`) 和 OpenCode-GO (`union-alpha`) 等免费模型在工具调用时的稳定性和错误处理仍不足。

5. **IDE/LSP 扩展** – 持续贡献的 PR 贡献了多个新的语言服务器（如 Taplo、Marksman、Odin 树状高亮），表明社区希望在语言服务支持方面更加完善。

6. **Web 端 UI 一致性** – Web 版的“旧 UI”开关被移除，且新布局未实现工作区，导致桌面和 Web 端体验割裂。

---

## 6. 开发者关注点

| 关注点 | 典型症状 | 用户影响 |
|------------|----------------|------------------|
| **强制升级 UI 布局** | Web 端无法切换回旧版，桌面端“旧 UI”按钮已移除，新布局不显示工作区。 | 用户生产力下降，尤其多项目/多人工作流难以管理。 |
| **Reasoning 字段丢失** | OpenAI 兼容模型的推理流使用 `reasoning` 字段，但 OpenCode 仅转发 `reasoning_content`。 | 模型的内部推理不可见，造成调试困难，且可能触发端点错误（加密内容被拒绝）。 |
| **长会话资源泄漏** | 持续多次工具调用后，TUI 卡死，助手停止响应。 | 需重启应用，导致长时间工作流中断。 |
| **免费模型端点故障** | Zen/GO 提供的免费模型在工具调用时触发 503 错误；Muse Spark 报错“encrypted_content 无法颁发”。 | 限制了免费层的可用性，用户无法稳定地使用这些模型。 |
| **Web 版侧边栏会话丢失** | 切换新 UI 后，项目侧边栏不见会话，创建的新会话也无法显示。 | 会话导航效率降低，用户怀疑数据持久化存在问题。 |
| **权限音效冗余** | 自动批准权限打开时仍播放“权限请求”音效。 | 造成不必要的干扰，尤其当 Agent 频繁请求权限时。 |

这些痛点共同指向一个发展方向： **为用户提供真正的 UI 选择自由、稳定推理流转发和强化免费/开源模型支持**。

---

*OpenCode 社区动态日报由 AI 分析师每周编译，旨在快速洞察最新 issue、PR 和趋势。更多讨论欢迎访问 GitHub 仓库 `*anomalyco/opencode*`。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

**Pi 社区 2026-09-17 日报**
*(github.com/badlogic/pi-mono)*

---

### 今日速览
今日动态聚焦三方面：多进程启动授权回归正常（#8928），Clippy  clipboard 非 ASCII 修复合并（PR #9682），以及多项 TUI 稳定性和扩展性改进持续推进。OpenRouter 路径和 Anthropic 适配器的 BUG 持续发酵，社区积极跟进。Baseten 会话亲和头问题修复，Vertex/GCP 鉴权优化也在加速。

### 版本发布
无官方版本发布。

### 社区热点 Issues（共10个）

| # | 标题 | 状态 | 重要性 &amp; 社区反响 |
|---|-------|--------|-----------------------------------|
| #8928 | **Parallel pi startup can report “No API key found” for ~48s when auth.json contains an expired OAuth credential for another provider** | OPEN (9条评论) | 多进程用户常见问题，直接影响生产环境工作流。社区关注度高（9 条评论），近期经常被提及。 |
| #5323 | **Improve Vertex + GCP metadata server support** | OPEN (9条评论, 2 👍) | 修复 Pi 内部对 Vertex/GCP 鉴权的同步检查 bug，对于依赖 GCP 服务的用户至关重要。 |
| #9216 | **Ollama qwen3.8:27b: stream 'terminated' errors (clean 0.84.x->0.85.x regression) + auto-compaction stops re-triggering after first run** | OPEN (5条评论) | 0.85.x 版本引入的回归导致高频工具使用时流中断，用户体验显著下降。 |
| #9410 | **Pressing Escape to interrupt streaming in large sessions causes ~60s complete TUI freeze** | OPEN (4条评论) | 交互性重大退化，编辑器和模型输出完全卡住近一分钟，严重影响长上下文对话。 |
| #9255 | **TuiMainScreen: full‑screen redraw storm when changed rows sit above the viewport top (long transcripts jump violently / doubled text)** | OPEN (4条评论, 1 👍) | 渲染层 bug 导致长 transcript 内容“跳跃”和重复，UI 严重失真。 |
| #8791 | **Expose the model runtime to extensions** | OPEN (4条评论, 5 👍) | 扩展开发者希望获得底层的 ModelRuntime 以构建隔离会话，社区支持热度高（5 👍）。 |
| #9616 | **zai‑coding‑cn: GLM Coding Plan now only serves GLM‑5.3 / GLM‑5.3‑Flash — catalog still lists 8 legacy models** | OPEN (4条评论) | 官方计划收编，内置 catalog 仍列出已废弃模型，导致静默重定向，用户困惑。 |
| #9099 | **pi.dev provider registry serves wrong OpenRouter baseUrl (missing /v1) for non‑batch Anthropic models — agents 404 with an HTML page** | OPEN (2条评论) | 影响 OpenRouter Anthropic 模型接入，导致 Agent 请求 404，需立即修复。 |
| #9455 | **Google GenAI: thinkingLevel: “MINIMAL” fails with 400 on gemini‑3.8‑flash when thinking disabled** | OPEN (2条评论) | 模型参数校验 bug，用户无法在禁用思考时使用 MINIMAL 级别。 |
| #9188 | **anthropic‑messages adapter overwrites AssistantMessage.model with the response‑echoed name, breaking thinking replay behind model‑renaming proxies** | OPEN (2条评论) | 思考重播功能因 model 名称被覆盖而失败，影响了用户自选模型别名场景。 |
| *（另有 #9602、#9652、#9654 等闭合/未分类 BUG，均获得社区关注）* | | | |

*问题链接均指向 `earendil-works/pi`，如 `#8928` 详见 [earendil-works/pi Issue #8928](https://github.com/earendil-works/pi/issues/8928)。*

### 重要 PR 进展（共10个）

| # | PR 标题 | 状态 | 核心功能 / 修复 |
|---|----------|--------|---------------------|
| #9682 | **fix(clipboard): keep non‑ASCII text intact when pbcopy is used on macOS** | CLOSED | 解决 pbcopy 编码 issue，将 UTF‑8 内容原样传递，避免 MacRoman 乱码。 |
| #9677 | **fix(coding‑agent): stop compaction queue rollback from replaying accepted messages** | CLOSED | 防止已确认消息被回滚重建，稳定批量总结流程。 |
| #9662 | **fix(coding‑agent): fail closed on user bash hook errors** | CLOSED | 将 user_bash 异常改为直接失败，保留显式

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报

**日期：2026-09-17** ｜ **数据来源：[github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)**

---

## 一、今日速览

过去24小时，Qwen Code 正式发布 **v0.24.0**，带来一项涉及 command hooks 的破坏性变更。社区活跃度维持高位，VSCode Remote（SSH/容器）连接问题连续三天成为最集中的用户反馈，多起相关 P1 级 Bug 已关闭或进入排查；同时，桌面应用的去 Electron 化议题（#8596）热度最高，架构演进方向逐渐清晰。

---

## 二、版本发布

**[v0.24.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.0)**

- **破坏性变更**：`fix(core)!: let bash expand project directory variables in command hooks`（[#11864](https://github.com/QwenLM/qwen-code/pull/11864)，作者 @qqqys）—— command hooks 中涉及项目目录变量的处理方式发生变化，依赖旧行为的自定义 hooks 可能需要适配。
- 另发布 **v0.24.0-nightly.20260916**（包含 ACP 边界验收文档、CI 导出等待修复等）和 **v0.23.5-preview.0**（含 Windows inode gate 测试修复、Linux CUA 观察保持等）。

---

## 三、社区热点 Issues（Top 10）

1. **[#8596](https://github.com/QwenLM/qwen-code/issues/8596) — 废弃 Electron 桌面应用，desktop-shell 更名为 desktop** — 9 评论
   架构方向性讨论：冻结 `packages/desktop`（Electron），将 Tauri 壳（`desktop-shell`）改名接管 "desktop" 命名。这是桌面端技术栈统一的关键步骤，牵动后续所有桌面相关开发。

2. **[#11556](https://github.com/QwenLM/qwen-code/issues/11556) — vscode-ide-companion 在 Remote-SSH 下 webview 卡加载（已关闭）** — 8 评论，P1
   VSCode Remote-SSH 场景下（arm64 服务器）webview 无限加载。已关闭，是高优先级远程开发连接问题的代表性案例。

3. **[#11728](https://github.com/QwenLM/qwen-code/issues/11728) — REST 文档契约守卫仍存在 fail-open 缺口** — 8 评论，P3
   继 #11592 之后的测试加固工作，聚焦 REST 文档契约守卫的剩余盲区。反映团队对集成文档可靠性的持续投入。

4. **[#11955](https://github.com/QwenLM/qwen-code/issues/11955) — 桌面应用忽略 ui.theme 与 general.language 设置（已关闭）** — 6 评论，P2
   主题及界面语言设置不生效，影响用户日常体验。已关闭，值得在升级后验证。

5. **[#11976](https://github.com/QwenLM/qwen-code/issues/11976) — VS Code Remote (Container) 下 webview 无法连接 workspace daemon（已关闭）** — 6 评论，P1
   动态端口绑定缺少 `asExternalUri` 导致远程容器内连接失败。与 #11556 同属远程开发连接问题族，已修复。

6. **[#12023](https://github.com/QwenLM/qwen-code/issues/12023) — vscode 插件最新版本在 SSH 远程开发下无法使用** — 5 评论，P1
   用户以中文上报的同类问题：报"工作区加载失败，无法连接工作区服务（Failed to fetch）"。提示远程开发场景下的连接稳定性是当前最需要被重视的用户痛点。

7. **[#12040](https://github.com/QwenLM/qwen-code/issues/12040) — web-shell：被拒绝的 `?daemon=` 覆盖会把凭证写入错误 host 的存储键** — 4 评论，P2（安全）
   `navigateToDaemon()` 在凭证本应被拒绝的情况下仍按页面 origin 存储，存在凭证错配风险。安全相关，值得关注。

8. **[#12028](https://github.com/QwenLM/qwen-code/issues/12028) — 非对话上下文 token 治理** — 4 评论，P2
   系统提示、工具 schema、`QWEN.md` 文件等每次请求都随附的非对话上下文在长上下文模型上成本被低估，提议引入治理机制。性能与成本方向的重要议题。

9. **[#12027](https://github.com/QwenLM/qwen-code/issues/12027) — Windows 下 Ink GetMaxWidth 崩溃（Uncaught RangeError）** — 4 评论，P2
   长会话/大上下文中渲染 markdown 表格或终端 resize 时 CLI 直接崩溃退回 shell。Windows 稳定性问题。

10. **[#11475](https://github.com/QwenLM/qwen-code/issues/11475) — 支持远程文件夹：连接远程 daemon 管理其 workspace/session** — 4 评论，P3（功能请求）
    官方级远程开发工作流提案：本地客户端运行、daemon/agent 在远端。与前述远程开发问题相呼应，代表了社区对第一等远程支持的强烈期待。

---

## 四、重要 PR 进展（Top 10）

1. **[#12007](https://github.com/QwenLM/qwen-code/pull/12007) — fix(core): 会话恢复不再把未回复的后台通知误判为中断** — 修复 `detectTurnInterruption()` 的误报逻辑，防止正常的通知被标记为"上次请求未完成"。直接关联 #11995 的 Web Shell 恢复横幅假阳性。

2. **[#12008](https://github.com/QwenLM/qwen-code/pull/12008) — feat(serve): 允许用户停止 workspace runtime 以释放 ACP 容量** — 新增用户主动的 ACP 容量回收能力，满员时可显式选择停止某个 runtime，保留 workspace 注册与文件。

3. **[#12039](https://github.com/QwenLM/qwen-code/pull/12039) — fix(core): web_fetch 将抓取到的表格正确转换为 markdown 表格** — 此前 `web_fetch` 通过 Turndown 将 `<table>` 压平成逐单元格段落，信息结构完全丢失。新增表格转换规则修复该问题，对应 #12041。

4. **[#12003](https://github.com/QwenLM/qwen-code/pull/12003) — refactor(cli): Ink hooks 对话框共用 registry 与 session 列表** — Ink 交互式 hooks 浏览器与 `/hooks list` 统一数据源，并在列表/详情中标记禁用状态、超时、状态消息等。

5. **[#12004](https://github.com/QwenLM/qwen-code/pull/12004) — feat(cli): 在 Ink UI 中展示正在运行的 hooks 及其结果** — 加载行显示当前 hook，结果呈现为信息/警告/错误消息，超时附带调优建议，提升 hooks 可观测性。

6. **[#11988](https://github.com/QwenLM/qwen-code/pull/11988) — fix(core): 压缩时剥离以原生 think 标签关闭的推理块** — 修复思考模型用原生 `think` 标签（而非 prompt 要求的字面标签）关闭推理块时，自动压缩丢弃总结的问题。对推理模型（如 DeepSeek 系列）兼容性很重要。

7. **[#11806](https://github.com/QwenLM/qwen-code/pull/11806) — fix(cli): 关闭十二项 OpenTUI 与 Ink 的差异** — 同一 fake model server 下双渲染器逐项对照，修复 8 项运行时分叉 + 4 项逐行审查发现的问题，推进 OpenTUI 渲染器完整性。

8. **[#11857](https://github.com/QwenLM/qwen-code/pull/11857) — ci(review): 跳过 diff 未变化的重复 review** — 合并 main 后 "Update branch" 不再触发无意义的二次审查，显著节省 CI 评审资源。

9. **[#11975](https://github.com/QwenLM/qwen-code/pull/11975) — feat(web-shell): 支持 host 设置项排除** — 宿主可隐藏部分普通设置和前端块，同时保留表单、scope 标签和模型选择，为嵌入方提供更强的定制能力。

10. **[#10898](https://github.com/QwenLM/qwen-code/pull/10898) — feat(release): 推进已验证的 nightly 构建** — 新增手动 `promote_nightly` 模式，维护者指定已验证的 nightly 标签即可从同一不可变源码发布，发布流程 fail-closed。

---

## 五、功能需求趋势

1. **远程开发（IDE 集成）**：VSCode Remote-SSH / Dev Container 连接问题占据过去三天最多的 P1 Bug 位（#11556、#11976、#12023），配合 #11475 的官方远程 daemon 工作流提案，远程开发是当前社区诉求最密集、最迫切的方向。

2. **桌面端架构统一**：#8596 的"去 Electron 化、Tauri 接管 desktop 命名"是长期架构议题的核心，说明桌面端的未来在 web-shell + Tauri 壳，而非双线维护。

3. **Web Shell / Daemon 成熟度**：从会话恢复误报（#11995）、凭证错配（#12040）、构建拆分（#11866）到远程文件夹管理（#11475），web-shell 作为新核心界面的可靠性边界在快速收紧。

4. **Token 与上下文治理**：#12028 提出非对话上下文（系统提示、工具 schema、QWEN.md 等）的成本追踪，结合 #7960 的历史压缩边界问题，说明成本治理从"压缩对话"扩展到"全量上下文"。

5. **测试与 CI 稳定性**：REST 契约守卫加固（#11728）、CI 脚本 ESM 加载失败（#11937）、ECS runner 队列过期（#11633）、桌面构建跳过矩阵（#11953）等多个议题，反映在快速迭代下工程侧的稳定性投资在持续增加。

6. **Windows 稳定性**：#12027 的 Ink 渲染崩溃和 #11679 的 live 监控调试目录兼容 PR，显示 Windows 平台正获得更多修复关注。

---

## 六、开发者关注点

1. **远程开发连接可靠性是最高优先级痛点**：自 2026-09-10 起连续出现多起 P1 级"webview 无法连接 workspace daemon / Failed to fetch"报告，涉及 SSH、容器等多种远程模式。虽然 #11556、#11976 已关闭，但新报告（#12023，更新于 09-16）仍在使用最新版本复现，提示修复可能需要验证是否完全覆盖所有远程环境组合。

2. **桌面端设置不生效引发信任问题**：主题、语言设置被忽略（#11955）这类基础体验 Bug 会让用户产生"设置名存实亡"的感受。好在已关闭，建议用户升级至 v0.24.0 后验证。

3. **Windows 用户的 CLI 崩溃频发**：长会话下 Ink 渲染器崩溃直接打回终端（#12027），对于重度 CLI 用户是不可忽视的稳定性风险点。

4. **对推理模型兼容性的隐性需求**：#11988（think 标签剥离）和 #11905（MiniMax 拒绝无参数工具）揭示出社区大量使用第三方推理模型，对非 OpenAI 方言工具的兼容性是隐含的刚性需求。

5. **嵌入方（Integrator）文档缺失**：#11359 明确提出需要一个统一、可运行的 daemon REST/SSE API 索引；结合 #11975 的 host 设置排除能力，显示存在一批将 Qwen Code 集成到自己产品中的开发者，他们期待更正式的集成契约。

---

*本日报由自动化分析工具生成，数据截至 2026-09-17 UTC。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报（2026-09-17）

> 数据范围：过去 24 小时内更新的 Issues 共 40 条、PRs 共 31 条。  
> 链接保留数据源中的 `Hmbown/Codewhale` 仓库路径。

## 今日速览

过去 24 小时无新 Releases；社区重心集中在可靠性修复、性能优化与 TUI 重设计。最醒目的变化是 Shoreline TUI 重设计 PR #6258 已 rebase 到 `main` 并成为全新安装默认，而会话恢复失败、子代理预算死亡、MCP 协议升级等问题的讨论明显升温。

## 社区热点 Issues

1. **#5316 EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)**  
   [https://github.com/Hmbown/Codewhale/issues/5316](https://github.com/Hmbown/Codewhale/issues/5316)  
   28 条评论，crate 分解与 C03–C10 执行计划的总追踪问题。作为核心重构的权威入口，讨论量最高，说明社区持续关注模块化与执行顺序。

2. **#6207 bug(tui): session picker refuses saved sessions whose runtime store exists but is not the running host's own**  
   [https://github.com/Hmbown/Codewhale/issues/6207](https://github.com/Hmbown/Codewhale/issues/6207)  
   15 条评论。用户恢复保存的会话时被误判为“属于另一台 Runtime host”，直接破坏跨进程 resume 工作流，已有明确复现路径，热度高。

3. **#6015 feat(fleet): adaptive anti-stall + wider read-only shell grammar**  
   [https://github.com/Hmbown/Codewhale/issues/6015](https://github.com/Hmbown/Codewhale/issues/6015)  
   8 条评论。自适应防停滞与只读 shell 语法被纳入 C05/C06 核心计划，体现了执行范围会根据 Linear 规划动态调整，而不再局限于旧有的 postrelease 限制。

4. **#6244 Fleet role selector: ambiguous role blocks agent spawn at the tool boundary (production)**  
   [https://github.com/Hmbown/Codewhale/issues/6244](https://github.com/Hmbown/Codewhale/issues/6244)  
   生产会话 `cw:768b024a` 中，模型调用 `agent(action=start)` 未提供 type/role，导致 fleet 角色选择器报歧义并拒绝启动。该问题直接阻塞线上 multi-model / fleet 场景中的 agent 启动。

5. **#6277 v0.9.14: a worker's reserved report turn is spent by its own descendants — budget death returns nothing at all**  
   [https://github.com/Hmbown/Codewhale/issues/6277](https://github.com/Hmbown/Codewhale/issues/6277)  
   子代理预留的报告轮被其自身子孙代理消耗殆尽，预算耗尽时返回空结果。核心风险是 worker 不可观测的静默失败，影响多代理任务可靠性。

6. **#6276 v0.9.14: runtime API steer receipts claim delivery the engine never made**  
   [https://github.com/Hmbown/Codewhale/issues/6276](https://github.com/Hmbown/Codewhale/issues/6276)  
   steer（用户转向指令）在引擎真正决定前就被标记为“已发送”，可能被静默丢弃；客户端会清空 composer 并提示“Guidance sent”，但内容实际未送达。这是交互可靠性上的高优先级缺陷。

7. **#6280 v0.9.14: converge on the MCP 2026-07-28 spec — rmcp ClientLifecycleMode negotiation**  
   [https://github.com/Hmbown/Codewhale/issues/6280](https://github.com/Hmbown/Codewhale/issues/6280)  
   当前仍固定 MCP 2024-11-05，未读取服务器返回的 `protocolVersion`，无法参与 2026-07-28 协议协商。这是 MCP 互操作领域的重要技术债。

8. **#6278 v0.9.14: write-claim contention forbids N workers writing disjoint files under one shared root**  
   [https://github.com/Hmbown/Codewhale/issues/6278](https://github.com/Hmbown/Codewhale/issues/6278)  
   当 N 个 worker 在同一根目录下写互不相交的文件时，写入根路径重叠仍会被整体拒绝，破坏最常见的并行 fan-out 模式，限制多智能体并发落盘。

9. **#6282 v0.9.14: cap every child tool result at capture time — 1 MiB bytes / 10k tokens into context**  
   [https://github.com/Hmbown/Codewhale/issues/6282](https://github.com/Hmbown/Codewhale/issues/6282)  
   一个 worker 分块读取 542KB 源文件时烧掉 638k input tokens 后死亡，属于典型的“读饥饿”。提案在捕获阶段设置 1 MiB / 10k tokens 上限，避免单步消耗全部上下文预算。

10. **#6285 Codewhale review gate fails closed on large diffs: reasoning consumes the whole output budget, review never posts**  
    [https://github.com/Hmbown/Codewhale/issues/6285](https://github.com/Hmbown/Codewhale/issues/6285)  
    大 diff 场景下 review 检查会耗尽输出预算，最终不产出任何 review，但 required gate 仍阻塞合并且不告知作者原因。这会干扰 PR 合并流程，尤其影响大型变更。

## 重要 PR 进展

1. **#6258 Shoreline: the TUI redesign, rebased onto main without the hitchhikers**  
   [https://github.com/Hmbown/Codewhale/pull/6258](https://github.com/Hmbown/Codewhale/pull/6258)  
   TUI 重设计被拆分为独立 PR，rebase 到当前 `main`，并成为全新安装默认 UI。它把 #6222 中的重设计部分抢救出来，避免被未完成工作阻塞。

2. **#6281 feat(mcp): negotiate the protocol revision (2025-06-18) + bundle-mode dsh converter**  
   [https://github.com/Hmbown/Codewhale/pull/6281](https://github.com/Hmbown/Codewhale/pull/6281)  
   落地 MCP 协议协商的前半部分：服务器与客户端开始支持 2025-06-18 协议版本，不再要求精确匹配 2024-11-05；2026-07-28 rmcp 层作为后续工作。

3. **#6286 fix(tui): preserve chat roles after compaction**  
   [https://github.com/Hmbown/Codewhale/pull/6286](https://github.com/Hmbown/Codewhale/pull/6286)  
   修复压缩后工具结果导致的消息角色顺序问题。旧逻辑会把保存的摘要放在工具交换之后，生成 `user → assistant(tool_calls) → tool → user`，被严格成对 chat template 拒绝；新逻辑将摘要移到保留 prompt 之前。

4. **#6279 fix(tui): gate recommended_plugins to once per engine, suppressed by loaded skills**  
   [https://github.com/Hmbown/Codewhale/pull/6279](https://github.com/Hmbown/Codewhale/pull/6279)  
   插件推荐从“每轮根据关键词”改为每个 engine 生命周期最多一次，并跳过已被已加载 skill 覆盖的域名，显著减少对用户的重复打扰。

5. **#6273 perf(tui): stop deep-copying the session twice per debounced save**  
   [https://github.com/Hmbown/Codewhale/pull/6273](https://github.com/Hmbown/Codewhale/pull/6273)  
   每轮防抖保存会深拷贝会话历史三次，本次移除其中两次纯重复拷贝，降低内存压力与保存时延，属于 #6214 T3 的落地。

6. **#6262 fix(app-server): keep stdio thread map across runtime bridge restarts**  
   [https://github.com/Hmbown/Codewhale/pull/6262](https://github.com/Hmbown/Codewhale/pull/6262)  
   修复任何配置更新都会让 `RuntimeBridge.thread_map` 被丢弃，从而把活跃 stdio 线程静默 fork 到新 runtime 线程的问题。线程映射改为跨 bridge 重启保持。

7. **#6260 fix(acp): make a prefix reload of a tracked session idempotent**  
   [https://github.com/Hmbown/Codewhale/pull/6260](https://github.com/Hmbown/Codewhale/pull/6260)  
   修复 ACP `session/load` 的原始 `sessionId` 前缀快速路径：此前已跟踪会话的短前缀可能被再次插入 `insertion_order`，导致重复加载。

8. **#6264 perf(tui): stop rebuilding per-call work on the shell, hook and cloud paths**  
   [https://github.com/Hmbown/Codewhale/pull/6264](https://github.com/Hmbown/Codewhale/pull/6264)  
   清空 #6208 检查清单，在 shell、hook、cloud 路径上移除每调用重复构建的工作，包括零分配 image sniff、缓存 MCP 模板、共享 HTTP client 等，均为行为保持型优化。

9. **#6096 feat(commands): adopt capability shapes in the TUI session-export slice (FEAT-025)**  
   [https://github.com/Hmbown/Codewhale/pull/6096](https://github.com/Hmbown/Codewhale/pull/6096)  
   将 `/export`（别名 `/daochu`）迁移到可移植命令契约，结构迁移且无用户可见行为变化，是 FEAT-02x 命令形态采纳的一个推进项。

10. **#6288 feat(providers): add the AICraft OpenAI-compatible provider template**  
    [https://github.com/Hmbown/Codewhale/pull/6288](https://github.com/Hmbown/Codewhale/pull/6288)  
    落地 @BX166 的贡献，新增 AICraft (`aicraftapi.com`) 作为 OpenAI 兼容 provider 模板。原始 PR #6171 已关闭，其提交被保留在本分支中。值得注意的是，后续 #6289 质疑“provider setup template”这一层本身应当移除，因此该模板未来可能被普通 provider 机制取代。

## 功能需求趋势

- **多智能体执行可靠性**：大量讨论集中在子代理预算耗尽、写争用导致 fan-out 失败、steer 指令虚假送达、agent spawn 角色歧义等方向上，用户对多代理任务的“可预测完成”要求明显提高。
- **运行时性能测量与优化**：从“没有任何 runtime performance gate”到多个 perf quick wins 落地的过程，说明社区希望不仅构建快，用户路径的运行速度也必须被衡量和守护。
- **MCP 协议现代化与连接监督**：多个 issue 同时触及 MCP 2026-07-28 协议协商、连接监督缺失、假连接状态不修复、自动重连与 `list_changed`，反映对 MCP 生态互操作性与长期稳定性有较高期待。
- **TUI / UX 重设计**：Shoreline 成为默认 UI、菜单导航词表不统一、新建 prompt 的 key-up 误删文本等问题，集中在点击与键盘交互的一致性和可预期性上。
- **Provider / 模型配置治理**：出现“移除 provider setup templates，改为普通 providers”的需求，同时模型能力判定应从硬编码前缀/列表迁移到 catalog；新增 AICraft 提供商也是趋势之一，但治理方向可能更倾向减少特殊 case。

## 开发者关注点

- **会话恢复失败高频出现**：`#6207`、`#6225`、`#6174` 都指向跨进程/跨主机恢复会话时 runtime host 归属校验过严或 sessionId 无法解析，直接破坏 `/quit` + `/resume` 工作流。
- **子代理上下文失控与写并发受限**：`#6282`/`#6283` 暴露单 worker 读大文件耗尽 638k tokens；`#6278` 暴露 N 个 worker 无法在同一根目录下写互不相交文件，说明并行子代理的成本上限与文件所有权模型需要重新设计。
- **steer 与用户输入不可观测或虚假成功**：`#6276` 的 steer 被静默丢弃但仍报告“已发送”；`#6236` 的 headless `exec` 在 `request_user_input` 上无限等待且无错误提示，都属于用户意图丢失问题。
- **MCP 服务器假活与恢复机制缺失**：`#6187` 指出 MCP server 死掉后仍显示“connected”，直到下一次调用才报错，没有自动重连或 `list_changed` 通知。
- **大 PR 的自动化 review 静默失败**：`#6285` 中大 diff 导致 review gate 不产出任何 review 却继续阻塞合并，开发者无法得到有效反馈。
- **菜单与键盘交互词表不一致**：`#6290` 和 `#6291` 反映菜单导航、按键行为在不同屏幕间不统一，影响日常操作肌肉记忆。

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

# ComfyUI 社区动态日报

**日期：2026-09-17（覆盖过去 24 小时）**
**数据来源：github.com/comfyanonymous/ComfyUI**

---

## 一、今日速览

ComfyUI 今日发布 **v0.36.0** 正式版，带来新的模型蓝图与子图分类重组，同时 AMD Windows VA 配额提升至 4TB。社区焦点集中在两个方向：**comfy-aimdo 动态显存（DynamicVRAM）在 AMD 新卡上的稳定性问题**持续发酵，以及 **prompt_worker 线程异常退出导致服务器"僵尸化"** 的严重 bug 被曝光并已有修复 PR 跟进。此外 YuE2 音乐模型已合入主分支，成为今日最亮眼的新能力。

---

## 二、版本发布

### v0.36.0
- **主要内容**：
  - 新增模型蓝图（model blueprints）并重组子图（subgraph）分类
  - AMD Windows VA 配额上调至 **4TB**（CORE-409）
  - 新增 Partner Nodes 功能（OpenRo 相关，详情被截断）
- 链接：[v0.36.0 Release](https://github.com/Comfy-Org/ComfyUI/releases/tag/v0.36.0)

---

## 三、社区热点 Issues（Top 10）

### 1. prompt_worker 线程死亡导致服务器"僵尸化" ⭐ 严重度最高
- **#16312** — `prompt_worker()` 线程被任何未捕获异常杀死后，HTTP 服务器仍返回 200，但队列永远不再执行任务，形成"僵尸服务器"。
- **重要性**：这是生产环境级致命缺陷，已被社区确认"禁用自定义节点后问题依旧"，属核心框架问题。已有修复 PR #16346 等待合入。
- 链接：[Issue #16312](https://github.com/Comfy-Org/ComfyUI/issues/16312)

### 2. RTX 5090 单卡运行 MiniMax H3 内存编译失败
- **#16342** — 纯文生视频图（无 ControlNet/LoRA）在 `SamplerCustomAdvanced` 阶段报 `aimdo memory compile error: could not start recording`，加 `--disable-comfy-compiler` 后可运行。
- **重要性**：旗舰卡 + 最新视频模型 + 内存编译器三者的组合故障，且与 #16337 的 AMD 问题形成"跨平台 aimdo 不稳定"的信号。
- 链接：[Issue #16342](https://github.com/Comfy-Org/ComfyUI/issues/16342)

### 3. DynamicVRAM 在 RX 9070 XT 上产生噪点/损坏输出
- **#16337** — comfy-aimdo 0.5.3 在 AMD RX 9070 XT（gfx1201）上输出花屏，附多张对比截图。
- **重要性**：AMD 新卡 + 动态显存组合的渲染正确性问题，直接影响 AMD 用户的核心体验。
- 链接：[Issue #16337](https://github.com/Comfy-Org/ComfyUI/issues/16337)

### 4. H3 FinalLayer 签名变更破坏下游自定义节点
- **#16149** — H3 `FinalLayer` 新增参数未设默认值，导致第三方采样/缓存插件全部崩溃。作者为中英双语建议增加宽限默认值或弃用过渡期。
- **重要性**：API 向后兼容性问题，直接影响自定义节点生态健康，提醒关注核心与生态的版本契约。
- 链接：[Issue #16149](https://github.com/Comfy-Org/ComfyUI/issues/16149)

### 5. YuE2 文本编码器在 GTX 1650 上回退 CPU 导致报错
- **#16365** — YuE2 文本编码器无声回退到 CPU，报 `Expected a cuda device, but got: cpu`。作者定位到 `supports_*_compute()` 系列函数未校验设备是否为 CUDA。
- **重要性**：中低端显卡用户的显存溢出路径缺陷，已有修复 PR #16367 精准跟进。
- 链接：[Issue #16365](https://github.com/Comfy-Org/ComfyUI/issues/16365)

### 6. Ctrl-S 快捷键被浏览器劫持
- **#15639** — 自某版本起 Ctrl-S 不再保存工作流，而被 Firefox 浏览器拦截为"保存网页"。用户只能从菜单 File → Save 操作。
- **重要性**：高频日常操作回归，影响所有 Web 端用户的生产效率；至今 0 👍 但讨论持续，反映出社区对默认交互行为变更的敏感。
- 链接：[Issue #15639](https://github.com/Comfy-Org/ComfyUI/issues/15639)

### 7. 双实例双 GPU 并发加载大模型时设备拷贝失败
- **#16223** — 每张 GPU 各跑一个 ComfyUI 实例时，小显存卡在加载模型权重阶段报 `device copy failed` / `aimdo memory compile error`。
- **重要性**：多实例部署场景下的资源竞争问题，对企业级/多卡工作站用户影响大。
- 链接：[Issue #16223](https://github.com/Comfy-Org/ComfyUI/issues/16223)

### 8. MiniMax H3 ControlNet adaln 宽度不匹配
- **#16279** — ControlNet 的 adaln width=8 与基础模型 timestep embedding width=2688 不匹配。作者标注为 Potential Bug 且有 1 👍。
- **重要性**：视频模型 ControlNet 路径的参数校验缺失，影响 H3 高级工作流可用性。
- 链接：[Issue #16279](https://github.com/Comfy-Org/ComfyUI/issues/16279)

### 9. AMD 平台工作流完成后 1 核 CPU 持续 100%
- **#15347** — Wan 2.2 I2V 工作流完成后，AMD 平台 1 个核心仍满载，疑似资源未释放。更新至今已有 8 条评论、1 👍。
- **重要性**：长生命周期 bug（8 月至今），AMD 性能损耗慢性问题，持续被追踪。
- 链接：[Issue #15347](https://github.com/Comfy-Org/ComfyUI/issues/15347)

### 10. rgthree 与 ImageScaleToTotalPixels 在新版不兼容
- **#16336** — 用户升级 ComfyUI 后 rgthree 无法工作。标题语气急切，反映核心更新对热门自定义节点的破坏性。
- **重要性**：生态兼容性警示——核心迭代速度与第三方节点适配节奏脱节的典型信号。
- 链接：[Issue #16336](https://github.com/Comfy-Org/ComfyUI/issues/16336)

---

## 四、重要 PR 进展（Top 10）

### 1. prompt_worker 异常保护（修复 #16312）
- **#16346** — 为 `prompt_worker` 增加异常兜底，防止未捕获异常杀死执行线程导致僵尸服务器。**强烈建议近期合入。**
- 链接：[PR #16346](https://github.com/Comfy-Org/ComfyUI/pull/16346)

### 2. 通用循环节点（Generic Loops）✅ 已关闭
- **#16227** — CORE-14，候选方案 III 落地实现。累积保存视频移除、重批处理拆分至独立 PR。标志着循环控制流正式进入主分支。
- 链接：[PR #16227](https://github.com/Comfy-Org/ComfyUI/pull/16227)

### 3. YuE2 音乐模型支持 ✅ 已关闭（已合入）
- **#16250** — 由 comfyanonymous 本人提交，附检查点（HuggingFace）和完整测试工作流。今日最重要的新能力落地。
- 链接：[PR #16250](https://github.com/Comfy-Org/ComfyUI/pull/16250)

### 4. 采样器时间步批处理优化
- **#16370** — 采样器热路径改为扩展单时间步张量而非拼接重复张量列表，多 GPU 路径复用设备本地时间步，保形状/数据类型/设备/数值不变。纯性能优化。
- 链接：[PR #16370](https://github.com/Comfy-Org/ComfyUI/pull/16370)

### 5. 模型下载管理器
- **#14657** — 长期运行的 PR（6 月至今），基于官方 PRD 文档实现模型下载管理能力，带 cursor-review 标签。
- 链接：[PR #14657](https://github.com/Comfy-Org/ComfyUI/pull/14657)

### 6. 量化能力检测的 CPU 崩溃修复（修复 #16365）
- **#16367** — `supports_fp8_compute()` 等函数在 `is_nvidia()` 为真时未校验设备类型就调用 CUDA 接口，导致 CPU 路径崩溃。精准修复 YuE2 问题根因。
- 链接：[PR #16367](https://github.com/Comfy-Org/ComfyUI/pull/16367)

### 7. SQLite 并发写失败修复
- **#16358** — 修复资产注册时 SQLite 读转写升级（SHARED→RESERVED）遭遇 `SQLITE_BUSY` 的间歇性丢失问题，且不触发 busy handler。
- 链接：[PR #16358](https://github.com/Comfy-Org/ComfyUI/pull/16358)

### 8. Tripo 空输出预检（Partner Nodes）
- **#16369** — Tripo P2 节点在发起**付费请求前**检查下游 GLB/FBX 输出是否会为空，避免计费后 AttributeError。商业 API 体验优化。
- 链接：[PR #16369](https://github.com/Comfy-Org/ComfyUI/pull/16369)

### 9. GPT Image 2 透明背景支持 ✅ 已关闭
- **#16366** — OpenAI 图像节点新增 `transparent` 背景能力。Partner Nodes 生态持续扩展。
- 链接：[PR #16366](https://github.com/Comfy-Org/ComfyUI/pull/16366)

### 10. Qwen3/3.5/3.8 CUDA Graph + w4a8 GEMV 支持
- **#15623** — 由 kijai 提交，引入多 token 预测解码（MTP head 2-5 tokens），草稿头走 CUDA Graph、验证走内存编译器。文本编码器解码速度专项优化。
- 链接：[PR #15623](https://github.com/Comfy-Org/ComfyUI/pull/15623)

---

## 五、功能需求趋势

1. **AMD / ROCm 平台支持**（最强烈）— 从 RX 6800、RX 9070 XT 到 gfx1201，涉及渲染正确性、CPU 占用、显存管理、Con3d 崩溃（PR #14215）等多维度问题。AMD 用户群体活跃但体验缺口明显。

2. **comfy-aimdo（动态显存）稳定性** — 跨 NVIDIA/AMD 双平台出现编译失败、噪点输出、双卡竞争等系统性缺陷，是当前社区对"性能优化 vs 可靠性"争论的核心。

3. **新模型支持扩展** — 视频方向 MiniMax H3 持续打磨（ControlNet、FinalLayer 兼容），音频方向 YuE2 正式落地，多模态边界继续拓宽。

4. **工作流 UX 改进** — 画布右键拖动（#16364）、embedding 自动补全（#16371）、Ctrl-S 回归（#15639）等交互细节诉求集中出现，说明用户已进入"深度使用"阶段。

5. **服务器健壮性** — prompt_worker 僵尸化、SQLite 并发、资产扫描容错等基础设施级可靠性问题被集中提出和修复。

---

## 六、开发者关注点

| 痛点/高频需求 | 说明 |
|---|---|
| **向后兼容性** | H3 FinalLayer 签名破坏第三方节点，期望核心 API 变更提供默认值或弃用过渡期 |
| **aimdo 编译器可靠性** | 多处编译错误叠加，开发者被迫使用 `--disable-comfy-compiler` 规避，反映出新编译器与真实硬件矩阵的适配仍不成熟 |
| **AMD 一等公民待遇** | ROCm 下渲染正确性、CPU 空转、Conv3d 崩溃、int8 路径等长期未决，AMD 用户呼吁同等测试覆盖 |
| **自定义节点生态衔接** | 每次核心升级都伴随热门节点（如 rgthree）断裂，社区需要更清晰的破坏性变更通告机制 |
| **错误定位能力** | 从"僵尸服务器"到"CPU 路径崩溃"，多起 issue 的共同诉求是希望框架提供更明确的错误边界与日志，而非静默失败 |

---

*日报由 ComfyUI 社区数据自动生成，聚焦技术动态与开发者体验。*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama 社区动态日报 (2026-09-17)**

---

### 1. 今日速览
- **结构化输出问题** 持续发酵：`gpt-oss:20b` 与 OpenAI SDK 兼容性问题及推理模型的一次性格式化优化 PR 正在推进。
- **高关注模型支持** 请求频发， mistral-small-4、qwen-3.8、minicpm5-2b 及 llama3.2-vision 相关 bug 大量出现。
- **性能与集成问题** 引爆社区讨论：llama-server 高 CPU 使用、Claude Desktop 连接延迟约 50 秒、 Jetson OOM 及 GPU 检测失败等。

---

### 2. 版本发布
> **无** 今日无正式发布版本。

---

### 3. 社区热点 Issues *(10 个最受关注)*

| # | 标题 | 为什么重要 | 社区反应 |
|---|-------|----------------|--------------------|
| **#11691** | `[CLOSED] [bug, gpt-oss] Structured output with OpenAI SDK and gpt-oss:20b not working` | Ollama 宣称支持 OpenAI SDK 结构化输出，但 gpt-oss:20b 出现解析失败，直接影响开发者使用 OpenAI 客户端。 | 88 条评论、55 👍，讨论热烈。 |
| **#17778** | `[OPEN] [bug] qwen 3.8 reports error during query: “no user query found in messages”` | 新款 qwen-3.8 模型在生产环境中崩溃，返回 500 错误，阻碍大规模部署。 | 31 条评论、25 👍。 |
| **#16060** | `[OPEN] [bug] Phone number verification does not accept non‑US numbers (Germany)` | 地区限制导致国际用户无法注册付费服务，影响全球市场拓展。 | 16 条评论，暂无点赞。 |
| **#15142** | `[OPEN] [model] Add Mistral Small 4 to Ollama Models` | 广泛期待的开源大模型，增加其支持可丰富生态。 | 12 条评论、16 👍。 |
| **#10538** | `[CLOSED] [feature request] Structured outputs for reasoning models / thinking-mode` | 结构化输出与推理模型不兼容，导致“思考模式”无法按格式输出，影响 advanced AI 应用。 | 11 条评论、14 👍。 |
| **#18396** | `[OPEN] [bug] Jetson Orin Nano 8GB: Gemma 4 E4B OOM with --load-mode dio` | 边缘计算硬件加载 multimodel 项目失败，OOM 问题直接影响设备用户体验。 | 9 条评论。 |
| **#18038** | `[OPEN] [performance] Performance regression: llama-server high CPU use when generating tokens.` | 近期更新导致 Mac Studio M4 Max CPU 使用率 >560%，严重影响效率。 | 6 条评论。 |
| **#18286** | `[CLOSED] [bug] /v1/responses` rejects `agent_message` | OpenAI 兼容接口核心功能缺失，导致对话流不稳定。 | 5 条评论。 |
| **#18483** | `[OPEN] [bug] minicpm5-2b native tool calls never parse` | 热门中文模型 MiniCPM5-2B 工具调用解析失败，屏蔽了重要功能。 | 2 条评论。 |
| **#18468** | `[OPEN] [bug] gemma4 renderer drops tool parameters named description, type, properties, required or nullable` | Gemma4 模型工具参数遗漏关键字段，导致推理错误。 | 1 条评论。 |

*(其余 Issues 涉及次要 bug、文档更新或边缘硬件问题，在此概述。)*

---

### 4. 重要 PR 进展 *(10 个关键 PR)*

| # | 标题 | 核心变化 |
|---|-------|------------|
| **#18481** | `mlx: budget GPU memory for CUDA devices` | 为 MLX 添加显存预算限制，避免加载过程中 OOM 问题。 |
| **#18479** | `server: apply structured outputs in a single pass on thinking models` | 优化推理模型的结构化输出流程，减少重复预填和性能开销。 |
| **#18489** | `Move the MLX engine out of x/` | 重构 MLX 引擎，从 `x/` 迁移到顶层，统一架构约定。 |
| **#18493** | `tests: fix metadata deletion test flake` | 优化测试稳定性，避免测试因临时文件删除顺序导致失败。 |
| **#18492** | `docs: include thinking in chat message schema` | 更新 API 文档，将 `thinking` 字段纳入聊天消息请求结构。 |
| **#16590** | `llama-server: prepare to remove compatibility patch with manifest list support` | 引入清单存储管理，实现多运行时 manifest 共存，提升兼容性。 |
| **#18393** | `[CLOSED] cmd: remove built-in agent` | 移除 CLI 集成中的内置对话代理，收回云端默认服务。 |
| **#18488** | `feat: implement full jsonschema spec` | 扩展工具函数参数校验，支持完整 JSON Schema Draft‑07 关键字。 |
| **#18438** | `server: fix intermittent "model not found" errors.` | 修复模型名大小写敏感性跟踪 bug，提升服务稳定性。 |
| **#17144** | `server: allow parallel requests for qwen35 / qwen35moe now that the upstream llama.cpp crash is fixed` | 取消 Qwen 混合架构的硬性串行限制，开放并行请求能力。 |
| **#18473** | `api: expose model thinking levels and defaults` | 通过 `/api/show` 暴露模型支持的推理层级及默认配置，为客户端提供统一控制。 |
| **#18413** | `openai: finish reasoning before emitting client tool calls` | 确保推理项完整后才生成客户端工具调用，稳定消息索引与流式顺序。 |

*(其余 PR 为文档、测试或小范围修复。)*

---

### 5. 功能需求趋势

| 趋势方向 | 代表 Issues |
|------------|-------------------|
| **恢复内置对话代理 / 命令行集成** | #18490 |
| **推理模型的结构化输出支持** | #10538, #18479 |
| **多 GPU/协程资源协调** | #18487 |
| **新模型支持与 Bug 修复** | #15142, #17778, #18483, #18468, #18486 |
| **地区验证与国际化** | #16060 |
| **性能优化与低延迟集成** | #18038, #18474, #18491 |
| **工具调用与参数处理增强** | #18468, #18483 |
| **推理层级元数据暴露** | #18473 |
| **边缘设备（Jetson、Intel iGPU）支持** | #18396, #18482 |
| **OpenAI 兼容性修复** | #11691, #18286, #18413 |

---

### 6. 开发者关注点

| 痛点/高频需求 | 典型反馈 |
|------------------------|---------------------|
| **OpenAI SDK 兼容性 bug** | 结构化输出解析失败、`/v1/responses` 拒绝 `agent_message`、`typical_p` 参数支持丢失等。 |
| **高 CPU / 低性能** | llama-server 生成 token 时 CPU 使用率 >500%；Claude Desktop 连接延迟约 50 秒；边缘设备 OOM。 |
| **GPU 检测与分配问题** | iGPU Vulkan 启动失败、MLX CUDA 显存预算无界限、共享 GPU 时协调缺乏锁。 |
| **国际化与地区限制** | 德国手机号无法注册付费计划，导致付费用户群体受限。 |
| **推理模型的格式化与思考支持** | 推理模型的结构化输出仍需两次生成，思考 token 统计不准确。 |
| **工具调用解析不稳定** | miniCPM5-2b、gemma4 等模型的 XML 工具调用解析失败或关键参数漏失。 |
| **模型加载架构限制** | llama3.2-vision 报错“unknown model architecture: 'mllama'”，部分模型禁止并行请求。 |

*开发者迫切希望在保持低延迟的同时获得更稳定的 OpenAI 兼容性、更鲁棒的 GPU 资源管理，以及更丰富的模型支持与推理控制。*

---

**总结**：本周动态以结构化输出与推理模型优化为技术主题，但日常 bug（高 CPU、区域验证、工具解析等）仍是社区关注焦点， GPU 资源管理与边缘设备支持亦是持续改进方向。开发人员尤其关注性能与兼容性平衡，未来可能着重优化结构化输出流程、恢复命令行内置代理、强化 GPU 协同机制以及扩大国际市场支持。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

⚠️ 摘要生成失败。

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*