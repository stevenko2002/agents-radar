# AI CLI 工具社区动态日报 2026-08-24

> 生成时间: 2026-08-23 22:15 UTC | 覆盖工具: 12 个

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

**今日重點摘要（2026-08-24）**

1. **Claude Code** 发布 v2.1.241，内容为错误修复与可靠性提升。https://github.com/anthropics/claude-code/releases/tag/v2.1.241
2. **llama.cpp** 发布 b10603，新增 GLM-4.5-Air 的 MTP（多令牌预测）支持。https://github.com/ggml-org/llama.cpp/releases/tag/b10603
3. **GitHub Copilot CLI** 发布 v1.0.81-8，增加 Grok 4.6 的 `xhigh` 推理等级及本地插件目录热加载功能。https://github.com/github/copilot-cli/releases/tag/v1.0.81-8
4. **Gemini CLI** 发布 v0.56.0-nightly.20260823 构建；当日已合并修复 OAuth 回调超时未清理（#28980）与会话保留误删无关会话（#28981）。https://github.com/google-gemini/gemini-cli
5. **Qwen Code** 发布 v0.22.0-nightly.20260823，修复从概览面板打开时 Web-Shell 未传递会话工作区路径的问题。https://github.com/QwenLM/qwen-code/releases/tag/v0.22.0-nightly.20260823.1007bcacfc
6. **DeepSeek TUI (CodeWhale)** 发布 v0.9.11，正式启用 Codewhale 品牌并废弃旧版 `deepseek-tui` npm 包（PR #5565）；同时关闭 Issue #5566，完成 R1 模型的无限支出防护修复（v0.9.12 里程碑 P0）。https://github.com/Hmbown/CodeWhale/issues/5566
7. **OpenAI Codex** 新建 Issue #40258，报告同一 Pro 账号下 CLI 端获取的 GPT-5.6 Sol 上下文窗口为 272K，而其他端可达 872K，差异源于 HTTP `originator` 请求头不一致。https://github.com/openai/codex/issues/40258

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills 社区热点报告（数据截止 2026‑08‑24）**  

---

### 1. 热门 Skills 排行  
（按社区讨论热度——Issue 评论数及 PR 最近活跃度综合判断）  

| 排名 | PR 编号 & 链接 | Skill 名称 / 功能 | 社区讨论热点 | 当前状态 |
|------|----------------|-------------------|--------------|----------|
| **1** | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill‑creator 工具链修复** – 修复 `run_eval.py` 永远返回 0% recall、Windows 流读取、触发检测与并行工作线程问题。 | 这是目前影响所有 Skill 评估与改进流程的核心缺陷，社区多次复现（Issue #556 有 12 条评论），因此成为最高优先级的修复需求。 | **OPEN** （最近更新 2026‑06‑23） |
| **2** | [#514](https://github.com/anthropics/skills/pull/514) | **document‑typography** – AI 生成文档的排版质量控制（孤儿词、寡妇段落、编号错位等）。 | 排版问题是文档生成的普遍痛点，PR 自 3 月提出后持续收到关注，且与文档技能（ODT、DOCX 等）形成互补。 | **OPEN** （最近更新 2026‑03‑13） |
| **3** | [#1628](https://github.com/anthropics/skills/pull/1628) | **Hivemind** – 零成本多智能体编排技能，让 Claude Code 负责规划/审查/合并，而实际机械工作交由免费模型的 headless opencode 工作者完成。 | 该技能直接解决“昂贵模型上下文稀缺”的矛盾，社区在 Issue #228（组织内技能共享）及多个讨论中提及需要轻量级编排方案，因而受到广泛关注。 | **OPEN** （最近更新 2026‑08‑23） |
| **4** | [#1367](https://github.com/anthropics/skills/pull/1367) | **self‑audit** – 机械文件验证＋四维推理质量门控（v1.3.0），在交付前自动审查 AI 输出。 | 与 Issue #1385（Reasoning Quality Gate Pipeline）及 #412（agent‑governance）形成呼应，社区对输出可靠性的需求明显上升。 | **OPEN** （最近更新 2026‑07‑02） |
| **5** | [#1602](https://github.com/anthropics/skills/pull/1602) | **评估脚本稳定性修复** – 解决 MCP‑builder 序列化、基准指标、编码及脚本稳定性问题（涉及多个技能的评估管线）。 | 评估管线的可靠性直接影响所有新技能的合并速度，Issue #556 中的 0% trigger 问题正是此类脚本失效的表现。 | **OPEN** （最近更新 2026‑08‑23） |
| **6** | [#83](https://github.com/anthropics/skills/pull/83) | **skill‑quality‑analyzer & skill‑security‑analyzer** – 市场中的两个元技能，分别从五个维度评估技能质量并进行安全扫描。 | 为社区提供自助审查工具，降低对官方审核的依赖；与 Issue #492（技能命名空间滥用）安全担忧形成直接对应 Churchill News Article placeholder, as the actual content is not provided in the input. The correct approach is to indicate that no translation is needed for the placeholder text itself, but since it's not actual text to translate, we follow the instruction to wrap it in brackets. However, given the specific instruction and the lack of actual text, the output remains as the placeholder wrapped as specified.  

Given the complexity and the specific nature of the instruction, the appropriate response is to acknowledge the limitation in translating the placeholder text directly. Therefore, the output adheres to the instruction by placing the provided text, which is a placeholder for actual content, within brackets, despite the unusual context of applying this to a placeholder rather than actual translatable text.  

[Churchill News Article placeholder, as the actual content is not provided in the input.] | **OPEN** （最近更新 2026‑01‑07） |
| **7** | [#486](https://github.com/anthropics/skills/pull/486) | **ODT 技能** – OpenDocument 文本创建、模板填充及 ODT→HTML 转换。 | 开源办公格式需求增长，Issue #12（DOCX 空白格式）与本技能形成互补，社区对跨平台文档处理兴趣浓厚。 | **OPEN** （最近更新 2026‑04‑14） |
| **8** | [#210](https://github.com/anthropics/skills/pull/210) | **frontend‑design 改进** – 提高前端设计技能的清晰度、可操作性与内部一致性。 | 前端技能是日常使用频率最高的之一，改进后可降低 token 消耗并提升实际可执行性，Issue #202 曾指出原技能过于冗长。 | **OPEN** （最近更新 2026‑03‑07） |

> **注**：因 PR 评论数在数据中未给出，以上排名综合了：① 与高评论 Issue 关联的技能修复需求（#1298 对应 #556）；② 近期活跃度（更新时间靠前）；③ 技能对社区痛点的直接排版、编排、审计等方面的解决力度。

---

### 2. 社区需求趋势（从 Issues 中提炼）  

| 需求方向 | 代表性 Issue（评论数） | 核心诉求 |
|----------|------------------------|----------|
| **安全与信任边界** | [#492](https://github.com/anthropics/skills/issues/492) （43 评论） | 防止社区技能冒充 `anthropic/` 命名空间，避免权限滥用。 |
| **组织内技能共享** | [#228](https://github.com/anthropics/skills/issues/228) （16 评论） | 提供组织级技能库或直接共享链接，简化内部技能分发。 |
| **评估与触发可靠性** | [#556](https://github.com/anthropics/skills/issues/556) （12 评论） | `run_eval.py` 能正确检测技能触发，避免 0% recall/precision。 |
| **技能丢失与环境问题** | [#62](https://github.com/anthropics/skills/issues/62) （10 评论） | 已创建的技能意外消失或报错，需更稳定的技能管理/持久化机制。 |
| **记忆压缩与上下文管理** | [#1329](https://github.com/anthropics/skills/issues/1329) （9 评论） | 提出 `compact-memory` 技能，用符号节省代理状态占用的上下文。 |
| **技能质量与最佳实践** | [#202](https://github.com/anthropics/skills/issues/202) （8 评论） | 更新 `skill-creator` 使其更像可操作技能而非冗长文档。 |
| **AI 治理与安全模式** | [#412](https://github.com/anthropic s/skills/issues/412) （6 评论） | 需要 `agent-governance` 类技能，覆盖策略执行、威胁检测、信任评分等。 |
| **重复技能与插件冲突** | [#189](https://github.com/anthropics/skills/issues/189) （6 评论） | `document-skills` 与 `example-skills` 插件安装后出现重复技能，需解决冲突。 |

**趋势总结**：社区最关注 **安全/信任**、**组织内协作**、**评估管线可靠性**、以及 **记忆/上下文优化** 四大方向；同时对 **技能质量自检** 和 **治理类元技能** 的需求也在上升。

---

### 3. 高潜力待合并 Skills  
（评论活跃且仍处于 OPEN 状态，预计近期有望合并）  

| PR | Skill | 为何具高潜力 | 链接 |
|----|-------|--------------|------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill‑creator 修复 | 直接解决评估失效的根本问题，是后续所有新技能合并的前置条件。 | https://github.com/anthropics/skills/pull/1298 |
| [#1628](https://github.com/anthropics/skills/pull/1628) | Hivemind | 零成本多智能体编排迎合社区对昂贵模型上下文的稀缺诉求，且在最新更新中已趋于稳定。 | https://github.com/anthropics/skills/pull/1628 |
| [#1367](https://github.com/anthropics/skills/pull/1367) | self‑audit | 与质量门控 pipeline（#1385）及安全技能形成闭环，满足对输出可靠性的迫切需求。 | https://github.com/anthropics/skills/pull/1367 |
| [#1602](https://github.com/anthropics/skills/pull/1602) | 评估脚本稳定性修复 | 修复 MCP 序列化、编码等多处 bug，将直接提升 `run_eval.py` 与 `run_loop.py` 的成功率。 | https://github.com/anthropics/skills/pull/1602 |
| [#514](https://github.com/anthropics/skills/pull/514) | document‑typography | 排版问题是文档生成的通用痛点，技能成熟度高，且与 ODT、DOCX 等文档技能互补。 | https://github.com/anthropics/skills/pull/514 |
| [#486](https://github.com/anthropics/skills/pull/486) | ODT 技能 | 开源办公格式需求持续增长，且现有 PR 已解决大部分实现细节，易于合并。 | https://github.com/anthropics/skills/pull/486 |
| [#210](https://github.com/anthropics/skills/pull/210) | frontend‑design 改进 | 前端技能使用频率高，精简后可显著降低 token 开销，社区已有明确改进共识。 | https://github.com/anthropics/skills/pull/210 |

---

### 4. Skills 生态洞察  
**当前社区在 Skills 层面最集中的诉求是：构建一个安全、可信赖且易于在组织内共享的技能生态，并通过可靠的评估管线与自审计机制确保技能在实际使用中的质量与上下文效率。**  

---  

*所有链接均指向 GitHub 原始页面，供进一步查阅。*

---

**Claude Code 社区动态日报（2026‑08‑24）**  

---

### 1. 今日速览
- 最新版本 **v2.1.241** 发布，主要聚焦于错误修复和可靠性提升。  
- 社区活跃度集中在一个长期未解决的模型行为问题（#77136），该问题已累计 88 条评论、351 点赞，反映出对模型输出连贯性与风格控制的广泛关注。  
- 其余大多数 Issues 和 PR 均处于已关闭状态，表明近期主要在清理旧问题而非推出新功能。

---

### 2. 版本发布
| 版本 | 更新内容 | 链接 |
|------|----------|------|
| v2.1.241 | - Bug fixes<br>- Reliability improvements（具体未列出细节） | [anthropics/claude-code releases/tag/v2.1.241](https://github.com/anthropics/claude-code/releases/tag/v2.1.241) |

---

### 3. 社区热点 Issues（按评论数/点赞排序，选取 10 条最具代表性）

| # | 标题 | 状态 | 评论 | 点赞 | 为什么重要 | 链接 |
|---|------|------|------|------|------------|------|
| #77136 | **[BUG] Claude 4.7, 4.8, 5.0, and Fable increasingly default to repetitive rhetorical tics and often struggle to produce coherent prose despite explicit style instructions** | OPEN | 88 | 351 | 长期未解决的模型输出质量问题，直接影响写作、代码注释等场景的可用性，社区强烈呼吁改进风格遵循与连贯性。 | [anthropics/claude-code/issues/77136](https://github.com/anthropics/claude-code/issues/77136) |
| #48965 | Feature: Multi‑session coordination primitives (cross‑session messaging, session registry, compaction‑resistant state, shared task board) | CLOSED | 11 | 0 | 多会话协同是企业级使用的关键需求，虽然已关闭，但讨论暴露了对跨会话状态共享、任务看板等功能的期待。 | [anthropics/claude-code/issues/48965](https://github.com/anthropics/claude-code/issues/48965) |
| #60844 | [Feature Request] Add NotebookRead tool for efficient Jupyter notebook cell extraction | CLOSED | 5 | 0 | 数据科学工作流中频繁需要读取 Notebook，现有 Read 工具受输出大小限制，亟需专用工具降低 token 消耗。 | [anthropics/claude-code/issues/60844](https://github.com/anthropics/claude-code/issues/60844) |
| #73024 | [BUG] Claude remembers NOTHING. | CLOSED | 4 | 0 | 记忆丧失导致多轮对话无法保持上下文，影响长任务（如代码重构、文档撰写）的连贯性。 | [anthropics/claude-code/issues/73024](https://github.com/anthropics/claude-code/issues/73024) |
| #72482 | [FEATURE] Can't reach my nested repos from the claude agents @repo picker | CLOSED | 3 | 2 | 开发者常将项目嵌套在统一父目录下，现有 repo picker 无法递归遍历，限制了多分支仓库的使用。 | [anthropics/claude-code/issues/72482](https://github.com/anthropics/claude-code/issues/72482) |
| #72913 | [Bug][cyber] False cyber block on cache‑fix‑warmer maintenance cron | CLOSED | 3 | 1 | 安全误报导致维护 cron 被阻断，间接影响自动化任务的可靠性。 | [anthropics/claude-code/issues/72913](https://github.com/anthropics/claude-code/issues/72913) |
| #84187 | [BUG] Context‑compaction thrashing | CLOSED | 3 | 0 | 上下文压缩频繁触发导致性能抖动，尤其在长上下文场景下表现明显。 | [anthropics/claude-code/issues/84187](https://github.com/anthropics/claude-code/issues/84187) |
| #73561 | Assistant text between tool calls renders inconsistently in long wakeup‑driven sessions | CLOSED | 2 | 0 | 长时间自动唤醒会话中助手文本渲染不一致，影响阅读和日志审计。 | [anthropics/claude-code/issues/73561](https://github.com/anthropics/claude-code/issues/73561) |
| #73565 | remote control: bridge restart rotates environment id and silently auto‑disables all scheduled routines | CLOSED | 2 | 0 | 例程自动禁用导致自动化流程中断，需更稳定的环境 ID 管理。 | [anthropics/claude-code/issues/73565](https://github.com/anthropics/claude-code/issues/73565) |
| #73618 | [FEATURE] Routines management: delete tool in the scheduled‑tasks MCP, grouping in the routines list, clearer paused state for manual‑only tasks | CLOSED | 1 | 0 | 例程管理 UI 功能不完善，缺少删除、分组和暂停状态的明确指示，影响日常运维。 | [anthropics/claude-code/issues/73618](https://github.com/anthropics/claude-code/issues/73618) |

> **注**：因过去 24 小时内仅有少量 open Issue，上表兼顾了评论数较高且最近仍有更新的 closed Issue，以便捕捉社区关注的热点话题。

---

### 4. 重要 PR 进展（过去 24 小时内更新的 PR）
由于仅有一条 PR 记录，以下为其要点：

| PR # | 标题 | 状态 | 说明 | 链接 |
|------|------|------|------|------|
| #83374 | docs(plugin‑dev): document MessageDisplay streaming semantics | OPEN | 为插件开发指南补充 **MessageDisplay** 事件的说明，包括在触发描述、事件指导和快速参考表中添加该事件，帮助开发者正确使用流式消息显示钩子。 | [anthropics/claude-code/pull/83374](https://github.com/anthropics/claude-code/pull/83374) |

*其余 PR 在过去 24 小时内没有更新，故未列出。*

---

### 5. 功能需求趋势（从所有 Issues 中提炼）
| 需求方向 | 体现的 Issues / 评论热度 | 趋势解读 |
|----------|--------------------------|----------|
| **模型输出质量与风格控制** | #77136（88 评论，351 点赞） | 社区最强烈的诉求是让模型在受显式风格指令时保持连贯、避免重复修辞，这直接影响写作、文档生成和代码注释等场景。 |
| **多会话/协同编辑** | #48965（11 评论）以及围绕会话状态、任务看板的讨论 | 需要跨会话消息传递、共享状态和统一任务看板，以支持复杂项目的多 Agent 协作。 |
| **Notebook / 数据科学支持** | #60844（5 评论） | 希望获得专门的 NotebookRead 工具，以高效提取 Jupyter 单元而不浪费 token。 |
| **环境与例程管理的稳定性** | #73565、#73618（例程 ID 旋转、删除/分组功能） | 对例程（Scheduled Tasks）的生命周期管理、环境 ID 一致性以及 UI 操作的透明度提出改进需求。 |
| **上下文压缩与性能** | #84187（Context‑compaction thrashing） | 长上下文场景下频繁压缩导致性能抖动，期望更智能的压缩策略或可配置的阈值。 |
| **IDE 插件与 UI 细节** | #73588（VS Code 面板滚动）、#73584（レース条件） | 小而具体的交互细节（如面板滚动、按钮竞争）仍是开发者日常使用的痛点。 |

---

### 6. 开发者关注点（痛点 & 高频需求）
1. **模型行为不可预测** – 频繁出现重复修辞、忽视风格指令，导致需要额外后处理或人工干预。  
2. **多会话协作能力不足** – 缺乏跨会话的消息传递、状态共享和统一任务看板，使得大规模项目的 Agent 编排变得复杂。  
3. **数据科学工作流支持弱** – 现有读取工具在处理大型 Notebook 时易受输出大小限制，缺少高效的专用工具。  
4. **例程和环境管理的可靠性** – 桥重启导致环境 ID 漂移、例程被静默禁用，影响长时间自动化任务的稳定性。  
5. **上下文管理与性能抖动** – 频繁的上下文压缩引起延迟波动，尤其在长上下文对话或大型代码库中表现明显。  
6. **IDE 集成细节打磨** – 面板滚动、按钮竞争、菜单标签不同步等交互细节仍需改进，以提升日常使用流畅度。  

> **建议**：后续版本可优先在模型输出一致性（风格遵循、连贯性）与多会话协同机制上投入研发，同时提供官方的 NotebookRead 工具和更稳健的例程管理 API，以直接解决社区最热烈的诉求。  

--- 

*数据来源：GitHub repository **anthropics/claude-code**（截至 2026‑08‑23 的最近活动）。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：** 2026-08-24  
**数据来源：** [github.com/openai/codex](https://github.com/openai/codex)

---

## 一、今日速览

今日 OpenAI Codex 社区无新版本发布，但代码层面有大量活跃提交——**copyberry[bot]** 在过去24小时内合成了约20个PR，核心聚焦于**内容注解系统（ContentItemKind）** 的全面重构，涉及消息压缩、模型切换回滚、子代理历史过滤等场景的元数据一致性修复。Issue 方面，Windows 平台性能问题持续发酵（#20214 累计108条评论），同时新暴露出 GPT-5.6 Sol 模型上下文窗口因 `originator` 头导致客户端不一致的严重问题（#40258）。

---

## 二、版本发布

> 过去24小时内无新 Release。

---

## 三、社区热点 Issues（Top 10）

### 🔥 1. [#20214](https://github.com/openai/codex/issues/20214) — Windows 11 App 频繁卡顿/冻结
| 属性 | 详情 |
|------|------|
| 标签 | `bug` · `windows-os` · `app` · `performance` |
| 互动 | 💬 108 · 👍 87 |
| 状态 | **OPEN**（创建于 2026-04-29） |

**为何重要：** 全社区评论数最高的 Issue，近4个月未解决。用户反馈在 Windows 11 Pro + AMD Ryzen 5 + 32GB RAM 配置下仍出现严重卡顿，影响日常使用体验。

---

### 🔥 2. [#39392](https://github.com/openai/codex/issues/39392) — gpt-5.6-sol 因 prompt_cache_retention 不支持而中断
| 属性 | 详情 |
|------|------|
| 标签 | `bug` · `app` · `app-server` |
| 互动 | 💬 39 · 👍 37 |
| 状态 | **OPEN** |

**为何重要：** 涉及最新模型 **gpt-5.6-sol** 与当前 App 版本的兼容性问题。用户在使用 Plus 订阅 + 最新 Desktop 版本时触发 `unsupported prompt_cache_retention` 错误，属于高优先级阻断性 Bug。

---

### 📌 3. [#38350](https://github.com/openai/codex/issues/38350) — 定时任务成功后自动禁用
| 属性 | 详情 |
|------|------|
| 标签 | `bug` · `codex-web` · `automations` |
| 互动 | 💬 33 · 👍 0 |
| 状态 | **OPEN** |

**为何重要：** ChatGPT Work 自动化功能的核心可靠性问题——循环定时任务在正常执行后会自行变为暂停状态，且未经用户授权，直接影响生产环境工作流。

---

### 📌 4. [#25178](https://github.com/openai/codex/issues/25178) — Windows 10 Computer Use 截图失败
| 属性 | 详情 |
|------|------|
| 标签 | `bug` · `windows-os` · `app` · `computer-use` |
| 互动 | 💬 29 · 👍 16 |
| 状态 | **OPEN** |

**为何重要：** Computer Use 是 Codex 核心差异化功能。在 Windows 10 22H2 上调用 `SetIsBorderRequired` 接口返回 `0x80004002`（不支持），导致截图完全不可用。

---

### 📌 5. [#25928](https://github.com/openai/codex/issues/25928) — VS Code/Cursor 扩展提交的 Prompt 丢失
| 属性 | 详情 |
|------|------|
| 标签 | `bug` · `windows-os` · `extension` |
| 互动 | 💬 28 · 👍 18 |
| 状态 | **OPEN** |

**为何重要：** IDE 集成是开发者高频使用场景。Cursor 用户报告 Prompt 在进入队列前随机消失，Pro 20x 订阅用户受影响，严重影响编码工作流连续性。

---

### 🆕 6. [#40258](https://github.com/openai/codex/issues/40258) — GPT-5.6 Sol 上下文窗口因 originator 不一致（**今日新建**）
| 属性 | 详情 |
|------|------|
| 标签 | `bug` · `CLI` · `context` · `app` |
| 互动 | 💬 4 · 👍 0 |
| 状态 | **OPEN**（创建于 2026-08-23） |

**为何重要：** ⚠️ **新发现的重大问题**。同一 Pro 账号下，Codex 编码端获取的 GPT-5.6 Sol 上下文窗口为 **272K**，而同账号其他端可达 **872K**，差异源于 HTTP `originator` 请求头。这直接限制了 CLI/TUI 用户的上下文能力。

> 相关 Issue: [#34619](https://github.com/openai/codex/issues/34619)（恢复 372K 上下文窗口，👍23）

---

### 📌 7. [#39903](https://github.com/openai/codex/issues/39903) — 添加选项禁用 "Ran N commands" 折叠显示
| 属性 | 详情 |
|------|------|
| 标签 | `bug` · `enhancement` · `TUI` · `CLI` · `config` |
| 互动 | 💬 12 · 👍 **27** |
| 状态 | **OPEN** |

**为何重要：** 👍 数极高的 CLI/TUI 体验改进需求。Pro 用户希望始终展开显示执行命令而非折叠为摘要，便于调试和审计。

---

### 📌 8. [#33192](https://github.com/openai/codex/issues/33192) — Windows DWM 句柄泄漏
| 属性 | 详情 |
|------|------|
| 标签 | `bug` · `windows-os` · `app` · `performance` |
| 互动 | 💬 12 · 👍 10 |
| 状态 | **OPEN** |

**为何重要：** 每次 Codex 工具调用后 DWM Composition 句柄持续增长且不释放，长期运行将导致系统资源耗尽，属于内存/句柄泄漏类问题。

---

### 📌 9. [#16900](https://github.com/openai/codex/issues/16900) — 子代理状态检查与父子等待机制
| 属性 | 详情 |
|------|------|
| 标签 | `bug` · `subagent` |
| 互动 | 💬 17 · 👍 4 |
| 状态 | **OPEN** |

**为何重要：** 多 Agent 协作流程中的架构级问题——父线程无法感知子代理健康状态，导致任务被重复执行。涉及子代理设计模式的核心逻辑缺陷。

---

### 🆕 10. [#40036](https://github.com/openai/codex/issues/40036) — Windows 11 登录死循环（**近日新建**）
| 属性 | 详情 |
|------|------|
| 标签 | `bug` · `windows-os` · `auth` · `app` |
| 互动 | 💬 7 · 👍 0 |
| 状态 | **OPEN**（创建于 2026-08-22） |

**为何重要：** 本周更新后出现的认证阻断问题，Plus 用户在 Windows 11 上完全无法登录，属于高严重性的可用性 Bug。

---

## 四、重要 PR 进展（Top 10）

今日 PR 活跃度极高，主要由 **copyberry[bot]** 提交，围绕**内容分类注解体系**进行系统性重构：

### 🏗️ 架构级变更

| PR | 标题 | 要点 |
|----|------|------|
| [#40174](https://github.com/openai/codex/pull/40174) | **Preserve content item kinds in message metadata** | 引入 `ContentItemKind` 开放式字符串分类体系，在消息元数据中持久化内容类型，**整个注解系统的基石** |
| [#40180](https://github.com/openai/codex/pull/40180) | **Classify contextual fragments with content kinds** | 要求每个 `ContextualUserFragment` 提供 `<feature>.<name>` 格式的稳定分类标识 |
| [#40196](https://github.com/openai/codex/pull/40196) | **Annotate user input and contextual fragments** | 对用户文本/图片/音频及上下文片段统一打标（`user.text`, `user.image` 等） |

### 🔧 场景化修复

| PR | 标题 | 修复场景 |
|----|------|----------|
| [#40264](https://github.com/openai/codex/pull/40264) | Preserve content metadata when truncating messages | 消息截断时保留分类元数据，防止位置信息错位 |
| [#40271](https://github.com/openai/codex/pull/40271) | Preserve annotations when rolling back model switches | 模型切换回滚时保留开发者片段的 content-kind 元数据 |
| [#40266](https://github.com/openai/codex/pull/40266) | Preserve annotations when filtering forked agent history | 子代理派生时父历史过滤保持 content 与 metadata 对齐 |
| [#40273](https://github.com/openai/codex/pull/40273) | Normalize compacted user message annotations | 本地压缩重建用户输入时同步更新注解 |
| [#40275](https://github.com/openai/codex/pull/40275) | Classify additional generated context fragments | 压缩摘要、Guardian 审批动作、子代理通知统一走 fragment 分类路径 |
| [#40277](https://github.com/openai/codex/pull/40277) | Preserve annotations when omitting unsupported media | 不支持的媒体类型以 `images.unsupported` / `audio.unsupported` 片段保留元数据 |
| [#40280](https://github.com/openai/codex/pull/40280) | Budget retained images during remote compaction | 远程压缩增加 `compaction_image_budget` 特性，修正图片预算计算遗漏 |

### 🧪 新功能 / 实验

| PR | 标题 | 内容 |
|----|------|------|
| [#31175](https://github.com/openai/codex/pull/31175) | **add MongoDB thread store and session migration** | 🧪 实验性 MongoDB 后端线程存储 + `codex sessions migrate-to-mongo` 迁移命令（**仍 OPEN**） |
| [#40257](https://github.com/openai/codex/pull/40257) | Support `cua_repl` as a Node REPL-backed MCP server | 支持 `cua_repl` 作为 Computer Use 的 MCP 服务端 |
| [#40221](https://github.com/openai/codex/pull/40221) | Distinguish Guardian review threads from subagents | 新增 `guardian_review` 线程来源类型，与普通 subagent 区分 |
| [#40169](https://github.com/openai/codex/pull/40169) | Add regression coverage for patch approval paging | 补充补丁审批分页器的回归测试覆盖 |
| [#40166](https://github.com/openai/codex/pull/40166) | Move the TUI cursor before showing it | 修复 TUI 光标闪烁/位置跳变问题 |

---

## 五、功能需求趋势

基于全部50条活跃 Issue，提炼出以下社区关注方向：

| 趋势方向 | 代表 Issue | 强度 |
|----------|-----------|------|
| **🪟 Windows 平台稳定性** | #20214, #25178, #33192, #40036, #40228 | ⭐⭐⭐⭐⭐ 最集中痛点 |
| **📐 上下文窗口 / 模型能力** | #34619, #40258, #39392 | ⭐⭐⭐⭐ 高关注度 |
| **🔄 会话恢复可靠性** | #37719, #38234, #38552, #39823, #36551 | ⭐⭐⭐⭐ 多维度报错 |
| **🤖 多 Agent 协作** | #16900, #38805, #33097 | ⭐⭐⭐ 架构级需求 |
| **🖥️ IDE 扩展体验** | #25928, #8782 | ⭐⭐⭐ Cursor/VS Code 用户诉求 |
| **⚙️ CLI/TUI 细节** | #39903, #20613, #29049 | ⭐⭐⭐ 重度用户驱动 |
| **🔗 Git Worktree 支持** | #38517, #22316 | ⭐⭐ 功能完善 |
| **☁️ 远程控制 / SSH** | #22947, #36189 | ⭐⭐ 企业场景 |
| **🤖 自动化 / 定时任务** | #38350 | ⭐⭐ Web 端功能 |
| **💰 用量计费透明度** | #39760 | ⭐⭐ 计费争议 |

---

## 六、开发者关注点（痛点总结）

1. **Windows 是重灾区** — 卡顿、截图失败、DWM 泄漏、登录循环、Chrome Native Host 过期、中文历史乱码、Hooks 不触发……几乎涵盖所有子系统。建议 Windows 专项测试团队扩容。

2. **gpt-5.6-sol 兼容性阵痛** — 新模型引入了 `prompt_cache_retention` 参数和 `originator-gated` 上下文窗口策略，导致现有客户端频繁报错。API 变更的向后兼容需加强。

3. **会话恢复机制脆弱** — 至少5个独立 Issue 报告不同维度的 resume 失败（writer 冲突、JSONL 格式不兼容、事件丢失、中断异常）。这是 CLI 重度用户的核心痛点。

4. **内容注解系统大重构进行中** — 今日大量 PR 表明内部正在建立统一的 `ContentItemKind` 分类体系，这将为后续的上下文审计、压缩优化、多模态支持打下基础，但也意味着短期内可能有适配调整。

5. **子代理/多 Agent 模式尚不成熟** — 父子协调、状态感知、生命周期管理、孤立进程清理等问题频发，生产环境使用需谨慎。

---

> **免责声明：** 本日报基于公开 GitHub 数据自动整理，数据截至 2026-08-24。Issue 状态和 PR 合并情况可能随时变化。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI 社区动态日报（2026‑08‑24）**  

---

### 今日速览
- 最新夜间版本 **v0.56.0-nightly.20260823.g5411f113c** 已发布，主要是持续的构建与依赖更新。  
- 社区围绕 **sub‑agent 恢复**、**挂起的通用代理**、**内存系统可靠性** 以及 **安全沙箱**（Node 升级、防止路径穿越）展开了激烈讨论。  
- 今日合并了多项核心修复（行结束符检测、OAuth 超时清理、会话保留误删、沙箱镜像升级等），以及一份新的 **Build Remote Agent 手机配对示例** PR。

---

### 版本发布
| 版本 | 发布时间 | 关键变更 |
|------|----------|----------|
| **v0.56.0-nightly.20260823.g5411f113c** | 2026‑08‑23 | nightly 构建，包含依赖更新及内部 CI 改进；无功能性变更。完整 changelog：[比较链接](https://github.com/google-gemini/gemini-cli/compare/v0.56.0-nightly.20260822.g5411f113c...v0.56.0-nightly.20260823.g5411f113c) |

---

### 社区热点 Issues（按评论数排序，挑选 10 条）

| # | 标题 | 评论 | 为何重要 | 链接 |
|---|------|------|----------|------|
| #22323 | **Subagent recovery after MAX_TURNS is reported as GOAL success, hiding interruption** | 13 | 揭示子代理在达到最大轮次时误报成功，掩盖了实际中断，影响任务可靠性。 | [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323) |
| #21409 | **Generalist agent hangs** | 8 | 通用代理在简单操作（如创建文件夹）时无限挂起，严重影响使用体验。 | [Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409) |
| #19873 | **Leverage model's bash affinity via Zero-Dependency OS Sandboxing & Post-Execution Intent Routing** | 8 | 探索利用模型原生 bash 能力的零依赖沙箱方案，提升代码探索效率。 | [Issue #19873](https://github.com/google-gemini/gemini-cli/issues/19873) |
| #22745 | **Assess the impact of AST-aware file reads, search, and mapping** | 7 | 评估 AST 感知工具对减少 token 消耗、提升精度的潜力，关系到未来性能优化路线。 | [Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745) |
| #21968 | **Gemini does not use skills and sub-agents enough** | 6 | 用户反馈模型主动调用自定义技能/子代理的频率偏低，限制了扩展能力。 | [Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968) |
| #26522 | **Stop Auto Memory from retrying low-signal sessions indefinitely** | 5 | 自动记忆机制对低信号会话无限重试，导致资源浪费和潜易错。 | [Issue #26522](https://github.com/google-gemini/gemini-cli/issues/26522) |
| #26525 | **Add deterministic redaction and reduce Auto Memory logging** | 4 | 加强记忆系统的脱敏确定性，降低日志噪声，提升安全与可观测性。 | [Issue #26525](https://github.com/google-gemini/gemini-cli/issues/26525) |
| #25166 | **Shell command execution gets stuck with "Waiting input" after command completes** | 4 | 壳命令完成后仍显示 “Waiting input”，造成假死感，需改进交互状态检测。 | [Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166) |
| #22232 | **Enhance browser_agent resilience: Automatic session takeover and lock recovery** | 4 | 浏览器子代理在遇到锁定配置文件时采用 fail‑fast 策略，缺乏自动恢复机制。 | [Issue #22232](https://github.com/google-gemini/gemini-cli/issues/22232) |
| #21983 | **browser subagent fails in wayland** | 4 | Wayland 环境下浏览器子代理失效，影响跨平台一致性。 | [Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983) |

**社区反应概览**：高评论的问题多集中在 **子代理可靠性**、**通用代理卡死**、**内存系统** 与 **安全沙箱**，表明这些是当前阻碍稳定使用的主要痛点。

---

### 重要 PR 进展（挑选 10 条）

| # | PR 标题 | 状态 | 关键内容 | 链接 |
|---|----------|------|----------|------|
| #28982 | **Add Build Remote Agent phone pairing (gbr/1)** | OPEN | 提供一个示例扩展，让手机端的 Build Remote Agent 能够旁观桌面 Gemini CLI 会话，保持 gbr/1 协议。 | [PR #28982](https://github.com/google-gemini/gemini-cli/pull/28982) |
| #28983 | **fix(core): detect mixed line endings instead of flagging CRLF on a single match** | OPEN | 改进行结束符检测逻辑，仅在出现混合换行时才标记 CRLF，避免误判。 | [PR #28983](https://github.com/google-gemini/gemini-cli/pull/28983) |
| #28975 | **fix(core): keep glob results for symlinked workspace roots** | OPEN | 修复在工作区根路径为符号链接时 glob 返回“无文件 found”的问题，尤其在 macOS /tmp 常见。 | [PR #28975](https://github.com/google-gemini/gemini-cli/pull/28975) |
| #28972 | **fix(core): guard formatTruncatedToolOutput against non-positive maxChars** | OPEN | 为 `formatTruncatedToolOutput` 添加 `maxChars > 0` 检查，防止负值导致输出损坏。 | [PR #28972](https://github.com/google-gemini/gemini-cli/pull/28972) |
| #28973 | **fix(sandbox): bump sandbox image from EOL node:20-slim to node:22-slim** | OPEN | 将沙箱基础镜像从已终止维护的 Node 20 升级至 Node 22，获得最新安全补丁。 | [PR #28973](https://github.com/google-gemini/gemini-cli/pull/28973) |
| #28978 | **docs(hooks): document missing HookDecision values (ask, approve)** | OPEN | 补充 hooks 文档，完整列出 `allow/deny/ask/approve` 等所有 HookDecision 值。 | [PR #28978](https://github.com/google-gemini/gemini-cli/pull/28978) |
| #28914 | **fix(core): inject on-retry nudge into conversation contents to preserve prefix caching** | OPEN | 将重试提示从 `systemInstruction` 移动到 `contents` 数组末尾，以保持前缀缓存并确保模型看到提示。 | [PR #28914](https://github.com/google-gemini/gemini-cli/pull/28914) |
| #28980 | **fix(cli): clear OAuth callback timeout when the callback server closes** | CLOSED | 清除 OAuth 流程中的五分钟超时计时器，防止在成功或失败后仍残留定时器。 | [PR #28980](https://github.com/google-gemini/gemini-cli/pull/28980) |
| #28979 | **fix(cli): handle response and write stream errors in extension downloadFile** | CLOSED | 在下载扩展时捕获响应流和写入流的错误，避免网络中途失败导致静默崩溃。 | [PR #28979](https://github.com/google-gemini/gemini-cli/pull/28979) |
| #28981 | **fix(cli): stop session retention deleting unrelated sessions on shortId collision** | CLOSED | 修复会话保留清理过程中因 shortId 冲突导致误删无关会话的数据丢失路径。 | [PR #28981](https://github.com/google-gemini/gemini-cli/pull/28981) |

**趋势**：本日的 PR 主聚焦 **基础设施稳固性**（行结束符、沙箱镜像、OAuth 超时、会话保留）以及 **可观测性/文档补全**，少量功能性扩展（Build Remote Agent 示例）则展示了社区对远程协作的兴趣。

---

### 功能需求趋势（从所有 Issues 提炼）

1. **子代理与技能的自动化使用**  
   - 多个 issue（#22323、#21968、#22267）呼吁模型能够更主动地调用自定义技能/子代理，并正确报告其执行状态（尤其是超时/中断）。

2. **内存系统的可靠性与安全**  
   - #26522、#26525、#26523 等围绕 Auto Memory 的重试策略、脱敏确定性以及无效补丁的隔离展开，表明社区希望记忆功能既不丢失又不泄漏。

3. **AST 感知工具与代码导航**  
   - #22745、#22746、#19561 等探索利用 AST 进行精准文件读取、搜索和任务追踪，以减少 token 消耗和提升代码定位精度。

4. **浏览器子代理的跨平台健壮性**  
   - #22232、#21983、#22465 等反馈浏览器代理在锁定状态、Wayland 环境及交互提示下的失效，期望具备自动恢复和更好的环境适配。

5. **安全沙箱与路径防护**  
   - #2677（已修复）及最新的沙箱镜像升级 PR（#28973）表明社区持续关注符号链接路径穿越和容器运行时隔离的安全问题。

6. **CLI 交互与状态感知**  
   - #25166（卡住 Waiting input）、#21409（通用代理挂起）、#22186（输出钩子崩溃）等提示需要更准确的交互状态检测和错误恢复机制。

---

### 开发者关注点（痛点与高频需求）

- **子代理状态透明度**：开发者期望子代理在达到轮数限制或遇到错误时能够明确返回非成功状态，且在日志/报告中暴露内部上下文（参见 #22323、#21763）。  
- **卡死与假死问题**：通用代理和 shell 命令执行经常出现无响应状态，导致工作流中断；社区普遍要求增加超时检测和自动恢复（#21409、#25166、#22465）。  
- **内存与日志噪声**：Auto Memory 机制被认为过于激进，会重试无效会话并产生大量日志；开发者希望有更智能的过滤和确定性脱敏（#26522、#26525）。  
- **沙箱安全与兼容性**：随着 Node 20 EOL，社区紧迫地需要升级沙箱镜像；同时，符号链接路径验证仍是安全热点（#28973、#2677）。  
- **可观测性与文档**：对 Hook 决策值、错误码以及扩展安装过程的文档需求增加，以便于自定义和故障排除（#28978、#28979）。  

---

**总结**：今日的活动表明，社区正在从 **功能扩展** 转向 **核心稳健性**——尤其是子代理可靠性、内存系统安全以及沙箱与路径防护。后续若能在上述痛点上取得实质进展，将显著提升 Gemini CLI 在日常开发中的可

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI 社区动态日报（2026-08-24）**  

---

### 1. 今日速览  
- 最新版本 **v1.0.81-8** 已发布，引入了 Grok 4.6 的 `xhigh` 推理等级支持，并实现了本地插件目录的热加载（无需 `/plugin update`）。  
- 社区活跃度较高，过去 24 小时内更新了 15 条 Issue，主要集中在 **企业授权、内存写入、后台压缩、Windows 插件安装、Agent 执行、模型 reasoning‑effort 配置** 等核心功能上。  
- 仅有 1 条 PR（README 文件命名调整），表明今天的工作重点在于问题排查而非新功能合并。  

---

### 2. 版本发布  
**v1.0.81-8**  
- **Added**：为 Grok 4.6 添加 `xhigh` 推理等级支持。  
- **Improved**：  
  - 本地（directory‑source）市场的路径插件现在会直接从真实目录加载，编辑后只需 `/restart` 或开启新会话即可生效，免除 `/plugin update`。  
  - Skills 和自定义 Agent 现在可被发现。  

[发布详情](https://github.com/github/copilot-cli/releases/tag/v1.0.81-8)  

---

### 3. 社区热点 Issues（精选 10 条）  

| # | 标题 & 链接 | 为什么重要 | 社区反应（评论 / 👍） |
|---|-------------|------------|----------------------|
| #2306 | [You are not authorized to use this Copilot feature …](https://github.com/github/copilot-cli/issues/2306) | 企业/组织策略导致的间歇性授权错误，直接影响生产环境使用 Copilot CLI。 | 9 评论 / 3 👍 |
| #4535 | [`store_memory` fails in v1.0.81 prereleases: `Instance id is required`](https://github.com/github/copilot-cli/issues/4535) | 写入用户记忆时缺少必需的 instance ID，导致记忆功能完全不可用，是记忆持久化的关键坑。 | 5 评论 / 0 👍 |
| #4572 | [Background compaction can lose a completed parallel GPT tool result and cause HTTP 400](https://github.com/github/copilot-cli/issues/4572) | 后台压缩丢失工具调用结果，产生 400 错误，破坏长上下文会话的可靠性。 | 1 评论 / 0 👍 |
| #4570 | [Windows: plugin install/update fails with “Access is denied. (os error 5)” while VS Code is running](https://github.com/github/copilot-cli/issues/4570) | Windows 上插件安装被 VS Code 锁定，影响日常插件更新工作流。 | 1 评论 / 0 👍 |
| #4566 | [Agent repeatedly acknowledges work without executing tool actions](https://github.com/github/copilot-cli/issues/4566) | Agent 仅返回确认而不真正调用工具，导致任务卡死，影响自动化流程。 | 1 评论 / 1 👍 |
| #4571 | [Compaction is triggered at 50% with GPT-5.6 Luna Max](https://github.com/github/copilot-cli/issues/4571) | 压缩触发阈值过低，即使小任务也会引发压缩，导致频繁上下文丢失和性能抖动。 | 0 评论 / 0 👍 |
| #4560 | [Model “auto” always runs with reasoning effort disabled (reasoningEffort: null)](https://github.com/github/copilot-cli/issues/4560) | `auto` 模式无法继承用户设定的 reasoning effort，削弱了高级推理控制的灵活性。 | 0 评论 / 0 👍 |
| #4561 | [ACP: session/cancel is answered with stopReason "end_turn" instead of "cancelled"](https://github.com/github/copilot-cli/issues/4561) | 取消会话时返回错误的 stopReason，导致客户端无法正确识别取消事件，影响交互一致性。 | 0 评论 / 0 👍 |
| #4562 | [MCP reload reuses startup workspace config after .github/mcp.json changes](https://github.com/github/copilot-cli/issues/4562) | MCP 热重载不读取最新配置，导致服务器仍使用旧命令，阻碍动态配置更新。 | 0 评论 / 0 👍 |
| #4567 | [Explicitly trust an insecure (http://) OTLP exporter endpoint](https://github.com/github/copilot-cli/issues/4567) | 需要能够显式信任本地 HTTP OTLP 端点（如回环收集器），否则 telemetry 被静默禁用，影响监控和调试。 | 0 评论 / 0 👍 |

> **选取原则**：优先考虑评论数较高、涉及核心功能（授权、记忆、压缩、插件、Agent）或频繁出现的问题，以及社区点赞反映的关注度。

---

### 4. 重要 PR 进展（仅 1 条）  
- **#4573**：将 `README.md` 重命名为 `README.mdmain`（貌似拼写错误或测试性修改）。该 PR 目前无评论，影响极小，主要是仓库内部文件整理。  
[PR 链接](https://github.com/github/copilot-cli/pull/4573)  

> 今日没有功能或修复类的 PR 被更新，说明社区把精力更多放在 Issue 的诊断与讨论上。

---

### 5. 功能需求趋势（从 Issues 中提炼）  
| 趋势方向 | 体现的 Issues | 说明 |
|----------|----------------|------|
| **企业授权 & 策略管理** | #2306 | 需要更透明的授权错误提示及自助修复机制，以减少间歇性 “未授权” 干扰。 |
| **记忆持久化 & Instance ID** | #4535 | 记忆写入必须携带有效的 instance ID；社区期望 SDK 自动注入或提供更友好的错误上下文。 |
| **后台压缩 & 上下文管理** | #4572, #4571 | 压缩触发阈值可配置、压缩过程中不得丢失已完成的工具调用结果，成为提升长会话稳定性的核心诉求。 |
| **Windows 插件兼容性** | #4570 | 插件安装/更新过程不应被其他编辑器（如 VS Code）锁定，期望提供文件句柄释放或退后台机制。 |
| **Agent 可靠性** | #4566 | Agent 应该在确认后真正调用工具，避免仅仅“回圈”；需要更严格的状态机校验。 |
| **模型 reasoning‑effort 配置** | #4560 | `auto` 模式应尊重用户设定的 reasoning effort，或提供显式覆盖开关。 |
| **会话生命周期（ACP）** | #4561 | 取消操作应返回标准的 `stopReason: "cancelled"`，以便客户端正确处理。 |
| **MCP 动态重载** | #4562 | 配置文件修改后应即时生效，避免需要重启会话。 |
| **遥测 & OTLP 端点信任** | #4567 | 开发者希望能够在本地调试时显式信任不安全的 HTTP OTLP 端点，而非被静默禁用。 |

---

### 6. 开发者关注点（痛点 & 高频需求）  
1. **授权不稳定**：企业环境下频繁出现 “You are not authorized …” 错误，缺少明确的重试或策略刷新机制。  
2. **记忆功能断裂**：`store_memory` 因缺少 instance ID 而失败，直接影响基于记忆的 Agent 能力。  
3. **压缩导致数据丢失**：后台压缩会意外丢失工具调用结果，造成 HTTP 400 错误，需要更安全的压缩实现或可选的压缩关闭。  
4. **Windows 插件锁死**：VS Code 占用文件句柄导致插件安装失败，期望提供占用检测或强制释放机制。  
5. **Agent 执行可靠性**：Agent 仅返回确认而不触发工具，需要加强执行确认与回滚机制。  
6. **推理努力配置透明度**：`auto` 模式忽略用户设定的 reasoning effort，开发者希望显式控制或至少得到明确的日志提示。  
7. **会话取消语义不一致**：ACP 模式下取消返回错误的 stopReason，导致客户端状态同步困难。  
8. **MCP 配置热失效**：修改 `.github/mcp.json` 后不会重新读取，影响插件与服务的动态适配。  
9. **遥测调试需求**：开发者在本地环境下想要显式信任 HTTP OTLP 端点，以便收集调试数据而不被静默禁用。  

> 总体来看，社区的核心诉求是 **提升可靠性（授权、记忆、压缩、Agent）**、**改善跨平台体验（Windows 插件）** 以及 **增加配置灵活性（reasoning‑effort、MCP、遥测端点）**。后续若能在这些方面落地改进，将显著提升 Copilot CLI 在企业和开发者日常工作中的采用度。  

---  

*本报告基于 GitHub 仓库 `github/copilot-cli` 最近 24 小时的公开数据生成。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI 社区动态日报（2026‑08‑24）**  

---

### 1. 今日速览
- 过去 24 小时内没有新版本发布，社区活动主要集中在 Issue 讨论与文档/功能 PR 上。  
- 热议焦点是 **记忆系统（Memory System）** 的需求以及 **成员额度（weekly allowance）突然下降** 的疑虑。  
- 两项开放的 PR 分别针对 **远程代理手机配对** 与 **插件安全与持久化数据** 的文档补充。

---

### 2. 版本发布
> 过去 24 小时内仓库未产生新的 Release，因此本节省略。

---

### 3. 社区热点 Issues（值得关注的 3 条）

| # | 标题 & 链接 | 为什么重要 | 社区反应 |
|---|-------------|------------|----------|
| #1283 | [Feature Request: Memory System – Persistent context across sessions](https://github.com/MoonshotAI/kimi-cli/issues/1283) | 提出让 Kimi Code CLI 能够跨会话记住项目模式、用户偏好及 AI 生成的笔记，直接影响长期使用体验与工作流效率。 | 已收到 27 条评论，讨论活跃；多数赞同实现持久化记忆，提出了基于文件或数据库的实现思路。 |
| #2604 | [Effective weekly allowance appears reduced ~3–5× without announcement — instrumented before/after data.](https://github.com/MoonshotAI/kimi-cli/issues/2604) | 用户通过客户端测量发现付费 Vivace  tier 的实际可用 token 大幅下降，疑似计量或政策变更，直接影响付费用户的成本效益。 | 3 条评论，用户提供了详细的前后对比数据，社区呼吁官方给出解释或恢复额度。 |
| #2484 | [（空标题）](https://github.com/MoonshotAI/kimi-cli/issues/2484) | 虽然内容为空，但其更新时间表明有人在此时对该 Issue 进行了标记或重新评估，可能是待澄清的疑点。 | 0 条评论，暂无社区反馈，需关注后续是否会被补充说明或关闭。 |

> *因过去 24 小时内仅有 3 条 Issue 更新，以上为全部可列的热点。*

---

### 4. 重要 PR 进展（值得关注的 2 条）

| # | 标题 & 链接 | 功能或修复内容 |
|---|-------------|----------------|
| #2616 | [Add Build Remote Agent phone pairing (gbr/1)](https://github.com/MoonshotAI/kimi-cli/pull/2616) | 引入 **Build Remote Agent**（基于 MIT 许可的 `gbr-agent`）作为移动端配对设备，手机端可观察（spectator）并拥有否决权（veto），但不参与编排（orchestration）。旨在实现跨设备的代理协作。 |
| #2614 | [docs(plugins): document security and persistent data](https://github.com/MoonshotAI/kimi-cli/pull/2614) | 补充插件系统的文档，明确 **安全边界** 与 **持久化数据存储位置**（`~/.kimi/plugins/`），帮助插件开发者了解数据生命周期与访问限制。 |

---

### 5. 功能需求趋势
从最近的 Issue 中可以归纳出两大关注方向：

1. **持久化上下文与记忆系统**  
   - 需求：跨会话保存项目模式、用户偏好及 AI 生成的笔记。  
   - 潜在实现：本地 SQLite/JSON 文件或轻量级数据库，配合用户可配置的记忆容量与清除策略。  

2. **计量透明度与额度管理**  
   - 需求：对付费 tier 的实际 token 配额使用情况提供清晰可视化，防止未告知的额度变动。  
   - 潜在实现：在 CLI 中加入 `--usage` 或类似子命令，返回当日/周的原始 token、缓存读取、输出等统计；同时提供后端 API 的变更日志入口。

---

### 6. 开发者关注点
- **记忆/上下文持久化**：多位开发者期望能够在长期项目中免去每次会话重新解释代码库或约定的麻烦，认为这是提升“ agentic coding ”效率的关键。  
- **计量与费用透明度**：付费用户对突如其来的额度下降感到不安，要求官方提供明确的计量政策变更通知或恢复机制。  
- **插件安全与数据位置**：随着插件生态增长，社区对插件访问范围、数据持久化路径以及潜在的安全风险提出更详细的文档需求。  

> 以上趋势反映出社区更倾向于**提升长期使用体验（记忆、上下文）**以及**确保付费服务的可预测性和透明度**，而插件系统的规范化也是未来发展的重要方向。  

---  

*数据来源：MoonshotAI/kimi-cli（GitHub），时间范围为 2026‑08‑23 00:00 至 2026‑08‑23 23:59（UTC+8）。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode 社区动态日报（2026‑08‑24）**  

---

### 今日速览
- 今天没有新版本发布，但社区围绕 **模型工具调用可靠性**、**空响应导致的会话静默退出**以及 **跨平台 UI 卡死** 等核心问题展开了激烈讨论。  
- 高赞功能需求 #32157（可配置的 mid‑run prompt 投递方式）继续获得关注，表明社区对更细粒度的交互控制有强烈诉求。  
- 平台适配问题频繁出现：macOS ARM64 空白帧、Windows 下 GameGuard 导致的段错误、以及 Ollama 本地工具调用失效，均成为开发者当天的主要痛点。

---

### 版本发布
> 过去 24 小时内无新版本发布。（如有后续版本，将在次日日报中补充）

---

### 社区热点 Issues（精选 10 条）

| # | 标题 | 关键信息 | 为什么重要 | 社区反应 |
|---|------|----------|------------|----------|
| [#1034](https://github.com/anomalyco/opencode/issues/1034) | [model‑problem] Local Ollama tool calling either not calling or failing outright | 评论 31，👍 16，更新于 2026‑08‑23 | 本地 Ollama（qwen3:32b）在需要工具调用时要么不触发工具，要么直接失败，影响本地模型的实用性。 | 讨论集中在工具调用链路、参数传递以及 Ollama 上游兼容性；多数用户报告仍需手动重试。 |
| [#41469](https://github.com/anomalyco/opencode/issues/41469) | Session silently stops on empty LLM response (finish: unknown, 0 tokens) | 评论 14，👍 1，更新于 2026‑08‑23 | 模型返回空完成时 Opencode 将其视为正常结束，导致会话静默退出，用户无感知错误。 | 强调需要更明确的错误上报和自动重试机制；少数用户提出应返回 `error` 而非 `unknown`。 |
| [#847](https://github.com/anomalyco/opencode/issues/847) | AGENTS.md is being ignored. | 评论 11，👍 0，更新于 2026‑08‑23 | AGENTS.md 中的自定义指令在构建模式下被完全忽略，破坏了工作流自定义能力。 | 用户呼声恢复该文件的解析，或提供明确的文档说明其作用域。 |
| [#32157](https://github.com/anomalyco/opencode/issues/32157) | [2.0] [FEATURE]: Configurable mid-run prompt delivery: queue vs steer, with compaction-aware steer semantics | 评论 7，👍 76，更新于 2026‑08‑23 | 提供用户在模型运行中插入提示的队列式（“queue”）或强制引导（“steer”）两种方式，并兼顾上下文压缩。 | 高赞反映社区对交互灵活性的强烈需求；讨论围绕实现细节与现有 `break` 指令的关系。 |
| [#32366](https://github.com/anomalyco/opencode/issues/32366) | bug: UI stuck on 'thinking' indefinitely after stream error, no error displayed or state recovery | 评论 7，👍 1，更新于 2026‑08‑23 | 流错误（如 socket 关闭）后 UI 仍显示 “thinking...”，没有错误提示也不自动恢复，需重启应用。 | 用户普遍认为这是可用性杀手级 bug，期望增加错误 toast 与自动恢复。 |
| [#44528](https://github.com/anomalyco/opencode/issues/44528) | Bug Report, network error | 评论 7，👍 0，新建 2026‑08‑23 | 用户在 Windows 10 使用 Big Pickle 模型时频繁遇到网络错误导致会话中断。 | 反映最近模型服务或本地代理的不稳定；需检查重连与退避策略。 |
| [#44300](https://github.com/anomalyco/opencode/issues/44300) | Zen API: x-preview-f-free / ox-alpha-free fails with "Endpoint is unavailable" for any request containing tools | 评论 4，👍 1，新建 2026‑08‑23 | 免费的 Ox Alpha / x-preview-f-free 在带 `tools` 参数时返回端点不可用，限制了免费层的工具调用能力。 | 强调免费模型应保持工具调用的基本可用性；有人建议降级为无工具模式或给出明确提示。 |
| [#44447](https://github.com/anomalyco/opencode/issues/44447) | Big Pickle Now Frustrating to Use | 评论 2，👍 0，新建 2026‑08‑23 | Big Pickle 频繁在思考中途停止，用户需要不断输入 “Keep going” 才能继续。 | 暗示模型的 token 生成或内部状态机存在卡死；需要更好的流式容错。 |
| [#44513](https://github.com/anomalyco/opencode/issues/44513) | Windows: embedded Bun 1.3.14 predates oven-sh/bun#35083 — opencode.exe segfaults whenever nProtect GameGuard (Helldivers 2) is running | 评论 2，👍 0，新建 2026‑08‑23 | 当 GameGuard 防护驱动加载时，内置 Bun 触发段错误，导致 `opencode.exe` 崩溃。 | 平台兼容性问题，建议更新 Bun 或提供兼容层以避免与安全软件冲突。 |
| [#44337](https://github.com/anomalyco/opencode/issues/44337) | TUI paints empty frames on macOS ARM64 (Apple Silicon): server boots fully but renderer never draws UI — 1.16.2, 1.17.0, 1.18.21 | 评论 3，👍 0，新建 2026‑08‑23 | 在最新的 macOS ARM64 上，TUI 服务启动但渲染层未绘制任何像素，导致完全空白。 | 提醒开发者关注 Apple Silicon 的图形后端兼容性；社区期待尽快提供适配补丁。 |

---

### 重要 PR 进展（精选 10 条）

| # | 标题 | 类型 | 核心内容 | 为什么重要 |
|---|------|------|----------|------------|
| [#44535](https://github.com/anomalyco/opencode/pull/44535) | fix(session): stop creating phantom "unknown" tool parts on re-emitted deltas | Bug fix | 删除在重新发送增量时由 Opencode 自行生成的空白 `unknown` 工具调用，解决 #33618。 | 防止幻象工具导致的模型困惑与后续工具调用失败。 |
| [#30224](https://github.com/anomalyco/opencode/pull/30224) | fix(llm): include expected and received keys in tool schema error message | Bug fix | 工具参数 schema 错误时返回期望键与实际收到的键，便于定位。 | 提高开发者调试工具调用不匹配的效率。 |
| [#38573](https://github.com/anomalyco/opencode/pull/38573) | docs: add Neon AI Gateway setup | Documentation | 在生态文档中新增 Neon AI Gateway 接入指南。 | 扩展第三方模型网关的可用性，促进社区插件生态。 |
| [#38562](https://github.com/anomalyco/opencode/pull/38562) | fix(core): soft-fail realPath in bash advisory arg scan | Bug fix | 对 Bash 参数扫描的真实路径解析采用软失败方式，防止因不存在路径导致的 panic。 | 增强对非常规文件系统（如网络挂载）的容错能力。 |
| [#38541](https://github.com/anomalyco/opencode/pull/38541) | fix(llm): prevent infinite loop when finish_reason missing in stream | Bug fix | 当提供商在最后一个 SSE 块省略 `finish_reason` 时，避免进入无限循环。 | 直接解决 #37855，提升会话稳定性。 |
| [#38539](https://github.com/anomalyco/opencode/pull/38539) | feat(tui): preview written file content | Feature | 写入文件后以块卡片形式展示完整前后差异，使用红/绿 diff 渲染。 | 提升文件编辑的可视化反馈，减少盲目修改风险。 |
| [#38536](https://github.com/anomalyco/opencode/pull/38536) | feat(tui): expose native OpenCode theme | Feature | 开箱即用的原生主题 `opencode-v2`，并兼容旧版主题注册表。 | 统一默认外观，降低主题配置成本。 |
| [#38534](https://github.com/anomalyco/opencode/pull/38534) | feat(tui): emit toast mount event | Feature | 新增 `tui.toast.mount` 生命周期事件，供服务器插件在吐司挂载时响应。 | 让插件能够更精准地吐司提示，提升交互体验。 |
| [#38533](https://github.com/anomalyco/opencode/pull/38533) | fix(core): reload MCP config updates | Feature | 订阅 `config.updated` 事件，仅增量更新 MCP 服务器配置，保持运行时生命周期。 | 支持热加载 MCP 插件而无需重启，提升开发迭代速度。 |
| [#38532](https://github.com/anomalyco/opencode/pull/38532) | fix(session): scope default lists by directory | Bug fix | 将默认文件列表的作用域限定在当前目录（而非整个项目），兼容 Git/非 Git 工作区。 | 减少误操作范围，提高文件选择的精确性。 |

---

### 功能需求趋势
从本次 Issues 与 PR 中可归纳出社区近期的三大功能方向：

1. **交互细粒度控制**  
   - 可配置的 mid‑run prompt 投递方式（queue / steer / break）成为最高赞功能需求（#32157）。  
   - 呼声更强的错误可见性与状态恢复（如 #32366、#41469），期望 UI 在异常时给出明确提示并自动尝试恢复。

2. **模型工具调用的可靠性**  
   - 本地 Ollama、OpenAI‑compatible 及 Zen 免费模型在带 `tools` 参数时频繁失效或返回空响应（#1034、#41469、#44300）。  
   - 社区期望统一的工具调用校验、重试与回退机制，以及更透明的错误上报（包括缺失的 `finish_reason`）。

3. **跨平台兼容性与原生体验**  
   - macOS ARM64 空白帧（#44337）、Windows 下 GameGuard 冲突（#44513）以及 Linux/WSL 安装检测失效（#38309）表明需要更完善的平台适配测试。  
   - 原生主题托管、文件

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

**Pi 社区动态日报（2026‑08‑24）**  

---

### 今日速览
- 社区围绕 **TUI 鼠标交互**、**模型目录完善**（llama.cpp 未加载模型、DeepSeek 新视觉模型）以及 **Windows 终端兼容性** 展开了热烈讨论。  
- 多个 PR 已合并，分别提升了 **工具输出安全性**、**重试上限**、**会话状态恢复** 等核心可靠性特性。  
- 功能需求倾向于 **更细粒度的 UI 控制**、**跨平台快捷键适配** 以及 **Skill/Prompt 模板的灵活调用**。

---

### 版本发布
> 过去 24 小时内无新版本发布。

---

### 社区热点 Issues（挑选 10 条）

| # | 标题 | 为什么重要 | 社区反应 |
|---|------|------------|----------|
| [#7683](https://github.com/earendil-works/pi/issues/7683) | pi‑tui: let components receive mouse events on their own rows | 为 TUI 组件提供自行处理鼠标事件的钩子，有望大幅提升交互灵活度（如自定义下拉框、滑块）。 | 11 条评论，设计方案获认可，待后续实现。 |
| [#8167](https://github.com/earendil-works/pi/issues/8167) | Cannot pick a model with built‑in llama.cpp support | llama‑server router 模式下的模型未出现在 UI 列表，影响本地推理工作流。 | 10 条评论，用户提供了配置复现步骤，期待尽快修复。 |
| [#7885](https://github.com/earendil-works/pi/issues/7885) | npm search not indexing newly published pi‑packages | 新发布的 pi‑package 未被 npm search 检索到，导致 pi.dev/packages 画廊滞后。 | 7 条评论，社区怀疑索引更新频率问题，呼吁加快同步。 |
| [#5932](https://github.com/earendil-works/pi/issues/5932) | exposing ctx.navigateTree() to agents | 在 ExtensionCommandContext 已有的导航树方法未暴露给普通 ExtensionContext，限制了自定义 /goal 实现。 | 7 条评论，2 👍，开发者表示此功能对代理规划至关重要。 |
| [#8183](https://github.com/earendil-works/pi/issues/8183) | Document Windows Terminal's Ctrl+Shift+F conflict with fullscreen transcript search | Windows Terminal 默认查找快捷键与 Pi 全屏 transcript 搜索冲突，需文档说明及可选绑定方案。 | 6 条评论，用户赞同添加备注并提供两种替代绑定。 |
| [#8452](https://github.com/earendil-works/pi/issues/8452) | Improve default compaction prompt for continuation-state fidelity | 默认压缩提示倾向于保留可读散文，导致连续状态（如工具调用链）丢失，影响长上下文准确性。 | 5 条评论，社区建议改为合并去重并保留工具结果。 |
| [#8344](https://github.com/earendil-works/pi/issues/8344) | Proposal: per-tool output expansion in the fullscreen TUI | 全屏 TUI 中工具输出块目前只能全局展开/折叠，细粒度控制有助于长会话阅读。 | 5 条评论，认可独立鼠标驱动的展开想法。 |
| [#7724](https://github.com/earendil-works/pi/issues/7724) | Cold restore replays an overflow assistant removed by live recovery | 上下文溢出后冷重启会重新引入之前被移除的助手回复，导致历史重复。 | 4 条评论，开发者指出这是会话恢复逻辑的漏洞。 |
| [#8469](https://github.com/earendil-works/pi/issues/8469) | Add deepseek-v4-flash-vision-exp to DeepSeek model catalog | DeepSeek 新发布的视觉模型尚未收录，限制多模态使用场景。 | 4 条评论，用户快速提供了模型信息，期待尽快合并。 |
| [#8372](https://github.com/earendil-works/pi/issues/8372) | Windows terminal (wsl or native) key‑bindings | Windows 平台快捷键与 Pi 冲突较多，亟需统一的适配方案或可选项。 | 3 条评论，社区呼吁提供更灵活的按键映射机制。 |

---

### 重要 PR 进展（挑选 10 条）

| PR | 标题 | 功能/修复内容 |
|----|------|---------------|
| [#8535](https://github.com/earendil-works/pi/pull/8535) | feat(coding-agent): For llama.cpp, also show unloaded models in `/model` | 让 llama.cpp router 自动暴露未加载的预设模型，用户可直接选择而无需手动 `/llama` 加载。 |
| [#8536](https://github.com/earendil-works/pi/pull/8536) | fix(ai): normalize tool-result history for strict OpenAI‑compatible providers | 规范工具结果消息顺序，解决对 Moonshot/Kimi 等严格提供商的 400 错误。 |
| [#8479](https://github.com/earendil-works/pi/pull/8479) | fix: expose unloaded llama.cpp presets | 将 `--models-preset` 下的未加载模型纳入可选列表，提升本地模型切换便利性。 |
| [#8032](https://github.com/earendil-works/pi/pull/8032) | feat(tui): let components receive mouse events on their own rows | 实现 Issue #7683 提出的 `Component.onMouse` 钩子，使组件能在自身布局框内处理鼠标事件。 |
| [#8532](https://github.com/earendil-works/pi/pull/8532) | fix(coding-agent): cap grep and find child output so one line cannot kill the parent | 对 ripgrep/fd 输出进行行长度上限保护，防止极长单行导致父进程崩溃。 |
| [#8524](https://github.com/earendil-works/pi/pull/8524) | fix(coding-agent): retain working status until settled | 在 `agent_end` 后保持 `Working...` 指示器，直至所有 `agent_settled` 回调完成，提升外部观测的一致性。 |
| [#8512](https://github.com/earendil-works/pi/pull/8512) | feat(coding-agent): add optional PowerShell tool | 为 Windows 用户提供可选的 PowerShell 工具，弥补 Git‑Bash 在路径处理上的不足。 |
| [#8513](https://github.com/earendil-works/pi/pull/8513) | fix(coding-agent): repair raw control characters in stringified edit args | 对模型返回的字符串化 `edits` 进行转义处理，避免原始换行/Tab 导致 `JSON.parse` 报错。 |
| [#8509](https://github.com/earendil-works/pi/pull/8509) | fix(ai): surface stream errors and support toolless models | 将异常的 `native_finish_reason`（如 network_error）转化为可见错误，防止任务静默中止。 |
| [#8505](https://github.com/earendil-works/pi/pull/8505) | fix(coding-agent): cap agent retry backoff | 引入 `retry.maxAgentDelayMs`（默认 30 s）对外部重试进行上限保护，保持指数退避同时防止无限等待。 |

---

### 功能需求趋势
从本日 Issues 与 PR 中可归纳出以下热点方向：

1. **细粒度 UI 交互** – 鼠标事件自处理、可折叠工具输出块、可选 PowerShell 工具等，旨在提升 TUI 的可用性和定制度。  
2. **模型目录与兼容性** – 持续添加新发布的模型（DeepSeek 视觉、llama.cpp 未加载预设）、修复模型列表展示问题，以支持更广泛的本地和远程推理。  
3. **跨平台快捷键适配** – Windows Terminal、WSL 等环境的按键冲突文档化及可选绑定，降低平台切换成本。  
4. **上下文可靠性** – 改进压缩提示（保留工具/状态）、会话恢复时不重放已移除的助手、工具结果历史归一化，确保长对话中的信息完整。  
5. **工具调用安全与弹性** – 限制子进程输出长度、封装流错误、提升重试上限，防止单点异常导致会话中断。  

---

### 开发者关注点（痛点或高频需求）
- **模型发现与列表同步**：npm 搜索未及时收录新 pi‑package、llama.cpp 未加载模型不可见，导致工作流中断。  
- **Windows 环境适配**：快捷键冲突、路径自动补全失效（盘符路径），亟需更统一的键位配置方案。  
- **数据完整性**：上下文压缩、冷启动恢复、工具结果历史顺序等细节易造成信息丢失或重复。  
- **异常可见性**：流式错误、空 `custom:{}` 导致的误判、原始控制字符在 edit 参数中的验证失效，开发者期望错误能够被准确上报并可捕获。  
- **可扩展性**：Expose 更多底层上下文 API（如 `navigateTree`）、提供 Skill 隐蔽可见性 API、支持 mid‑sentence Skill 调用，以便社区构建更复杂的代理插件。  

---  

*以上内容基于 GitHub 最近 24 小时的 Issues、Pull Requests 及相关讨论整理，供 Pi 社区开发者快速了解今日动态。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code 社区动态日报（2026‑08‑24）**  

---

### 今日速览  
- 过去 24 小时发布了夜间版 **v0.22.0‑nightly.20260823.1007bcacfc**，主要修复了 Web‑Shell 在概览面板打开时的工作区路径传递问题。  
- 社区活跃度较高，围绕 **Web‑Shell 中文输入显示、API 超时、权限配置不生效** 等议题展开了较多讨论（评论数最高的 Issue 达 13 条）。  
- 多个核心功能 PR 同时进入审查阶段，涉及审查技能（/review）的数据模型重构、DaemonClient URL 处理、以及本地控制统一等方向，预计将在近期合并进主分支。  

---

### 版本发布  
| 版本 | 发布时间 | 关键变更 | 链接 |
|------|----------|----------|------|
| v0.22.0‑nightly.20260823.1007bcacfc | 2026‑08‑23 | - **fix(web-shell)**: 当从概览面板打开时，传递会话工作区的 cwd，防止路径丢失。<br>- **fix(web-shell)**:（未完整显示）后续补丁中继续对 Web‑Shell 稳定性进行细微改进。 | https://github.com/QwenLM/qwen-code/releases/tag/v0.22.0-nightly.20260823.1007bcacfc |

---

### 社区热点 Issues（选 10）  

| # | 标题 | 优先级/类型 | 评论数 | 为什么重要 | 链接 |
|---|------|-------------|--------|------------|------|
| #7585 | **proposal: Add a direct external context provider profile** | P3, feature‑request, integration | 13 | 提出在 Qwen Code 中添加直接外部上下文提供者 profile，旨在让单个 CLI 进程可按需获取仓库共享上下文，对大型 monorepo 工作流有潜在价值。 | https://github.com/QwenLM/qwen-code/issues/7585 |
| #5975 | **[API Error: No stream activity for 120000ms after 19 chunks** | P2, bug, core/performance | 11 | 频繁出现流活动超时错误，影响长时间推理的稳定性，社区期待根因定位与超时机制优化。 | https://github.com/QwenLM/qwen-code/issues/5975 |
| #8625 | **windows 终端中输入中文时，显示拼音看不清** | P2, bug, ui/windows | 8 | Windows 终端中文输入法渲染问题，直接影响本地开发体验，亟需 UI 渲染层适配。 | https://github.com/QwenLM/qwen-code/issues/8625 |
| #9089 | **autofix: PAT‑bearing jobs share a host with untrusted branch code — needs runner‑level isolation** | P1, bug, security/GitHub Actions | 7 | 涉及安全隔离：自动修复任务的 PAT 未与不可信代码充分隔离，可能导致凭据泄露，属高危安全问题。 | https://github.com/QwenLM/qwen-code/issues/9089 |
| #9219 | **/review presubmit overlap matching is exact‑line only — multi‑line ranges and semantic duplicates pass as noConflict** | P2, bug, development/commands | 5 | 当前审查技能的冲突检测仅基于精确行号，导致多行或语义上的重复被误判为无冲突，需改进匹配算法。 | https://github.com/QwenLM/qwen-code/issues/9219 |
| #9827 | **permissions.allow (and legacy tools.core/tools.exclude) do not restrict the tool schemas sent to the model** | P2, bug, tools/settings | 4 | 权限白名单未真正过滤送往模型的工具 schema，可能导致模型收到不可用工具，影响调用正确性。 | https://github.com/QwenLM/qwen-code/issues/9827 |
| #9016 | **Vertex AI cannot authenticate with Application Default Credentials: an API key is required** | P2, bug, authentication/google‑auth | 4 | Vertex AI 认证依赖 API key，ADC 失效，限制了在 GCP 环境下的免密使用，亟需兼容方案。 | https://github.com/QwenLM/qwen-code/issues/9016 |
| #8586 | **Track activeWork and background Agent recovery** | P2, feature‑request, core/session‑management | 4 | 提出在守护进程中记录活跃工作并实现后台 Agent 恢复，对长后台任务的容错能力提升意义重大。 | https://github.com/QwenLM/qwen-code/issues/8586 |
| #8769 | **Proposal: rebuild /review Step 3–5 orchestration on the workflow engine** | P2, enhancement, development/commands | 4 | 建议将审查技能的关键步骤迁移到工作流引擎，使其更具确定性和可观测性，是审查流程可靠性的重要改进。 | https://github.com/QwenLM/qwen-code/issues/8769 |
| #9145 | **The approval‑mode value domain is hand‑copied into 20 files across 3 languages; two copies are already wrong** | P3, feature‑request, integration/sdk | 4 | 批准模式的枚举分散维护导致不一致，社区呼声集中在统一真实来源并加入测试保护。 | https://github.com/QwenLM/qwen-code/issues/9145 |

---

### 重要 PR 进展（选 10）  

| # | 标题 | 类型 | 主要内容 | 链接 |
|---|------|------|----------|------|
| #9768 | **feat(review): make coverage a sealed, classified ledger** | 新功能 | 将 `/review` 的覆盖率信息改造为带身份、原因和已读/已决定分离的分类账本，便于后续审计和客户端消费。 | https://github.com/QwenLM/qwen-code/pull/9768 |
| #9794 | **feat(review): report findings to clients as a typed contract** | 新功能 | 新增 `report_findings` core tool，以结构体（`{level, findings[]}`）形式把审查结果返回给客户端，取代之前的 Markdown 约定。 | https://github.com/QwenLM/qwen-code/pull/9794 |
| #9802 | **feat(web-shell): add async submit preparation** | 新功能 | 为嵌入式 Web‑Shell 提供可选的 `prepareSubmit` 异步钩子，允许宿主在提交前修改 prompt 与标注，增强可定制性。 | https://github.com/QwenLM/qwen-code/pull/9802 |
| #9804 | **refactor(review): split SKILL.md into a core body plus verdict‑gated reference files** | 重构 | 把审查技能的 manifest 拆分为核心体 + 按 verdict 按需加载的参考文件，保持不变的写禁止、发布门等不变式。 | https://github.com/QwenLM/qwen-code/pull/9804 |
| #9761 | **feat(review): keep deferred suggestions recoverable off the PR page** | 新功能 | 在审查收敛姿态启动后，将原本可直接发表的建议转移至可被后续工具恢复的延迟列表页，提升建议的可追溯性。 | https://github.com/QwenLM/qwen-code/pull/9761 |
| #9739 | **feat(core): bind PRs created via gh pr create in the session shell** | 新功能 | 补齐会话↔PR 绑定的最后一个来源：通过 `gh pr create` 在 shell 中创建的 PR 也能自动与会话关联。 | https://github.com/QwenLM/qwen-code/pull/9739 |
| #9776 | **feat(core): add a per-project outside‑repo artifact landing** | 新功能 | 添加 `Storage.getAuditFallbackDir(projectRoot)`，为必须脱离审计仓库的产物提供每项目、每用户的隔离目录（0700 权限）。 | https://github.com/QwenLM/qwen-code/pull/9776 |
| #9793 | **fix(core): surface nested sub‑agent approvals under background parents** | Bug 修复 | 解决嵌套子代理中需要用户确认的工具调用被挂起的问题，确保确认事件向上冒泡或被自动拒绝。 | https://github.com/QwenLM/qwen-code/pull/9793 |
| #9723 | **feat(review): run the reviewed repository's own commands behind a container** | 新功能 | 审查时执行被检查仓库的命令放入容器隔离，由操作员决定是否启用，提升安全性与可重复性。 | https://github.com/QwenLM/qwen-code/pull/9723 |
| #9676 | **refactor(core): shrink the content generator interface** | 重构 | 移除未使用的 token‑计数与思考摘要能力，清理相关装饰器、实现及死测试，使内容生成契约更精简。 | https://github.com/QwenLM/qwen-code/pull/9676 |

---

### 功能需求趋势  
从本日 Issue 与 PR 中可以看出社区关注的三大方向：  

1. **审查技能（/review）的可靠性与可扩展性**  
   - 多个 PR 聚焦于把覆盖率、发现上报、延迟建议等模块做类型化、状态化、工作流引擎化。  
   - 对应的 Issue（#9219、#8769、#9792）表明社区希望审查过程更加确定、易于调试且支持自定义 esforz。  

2. **Web‑Shell 与终端交互体验**  
   - 中文输入显示（#8625）、工作区 cwd 传递（本次 release）、异步提交准备（#9802）等均指向对嵌入式 Web‑Shell 的稳定性、国际化及可定制性需求。  

3. **安全、权限与隔离**  
   - PAT 隔离（#9089）、权限白名单不生效（#9827）、Vertex ADC 认证（#9016）以及外部制品落地隔离（#9776）显示社区在云原生、CI/CD 环境下对凭据泄露、工具滥用的担忧日益增加。  

---

### 开发者关注点（痛点 / 高频需求）  
- **性能与超时**：长时间推理或大规模仓库时频繁出现流活动超时（#5975），需要更健壮的心跳/重连机制或可配置的超时阈值。  
- **国际化 & 本地终端适配**：Windows 中文输入法渲染模糊（#8625）以及其它终端类 UI 闪烁问题（#8662）表明底层渲染层仍需跨平台适配工作。  
- **权限细粒度控制**：目前的 `permissions.allow` 仅影响 UI 展示，实际请求仍会携带全部工具（#9827），开发者期望真正的工具过滤以防止模型被误导或滥用。  
- **审查流程的确定性与可观测性**：多个 Issue 与 PR 指向把审查步骤迁移到工作流引擎、改进覆盖率上报、使延迟建议可恢复，这反映出团队对审查结果可审计、可回滚的强烈诉求。  
- **安全隔离需求**：涉及 PAT、外部制品、容器隔离等安全相关功能（#9089、#9776、#9723）频繁出现，说明在企业或多租户场景下对代码与凭据隔离的要求正在提升。  

---

*以上信息基于最近 24 小时的 GitHub 动态（releases、issues、pull requests）整理而成，旨在帮助开发者快速把握 Qwen Code 社区的技术脉搏。*  
**链接前缀**：`https://github.com/QwenLM/qwen-code`（如需完整 URL 请自行补全）。  
---

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报（2026-08-24）

> 数据来源：github.com/Hmbown/DeepSeek-TUI（现托管 · CodeWhale 项目）

## 1. 今日速览

昨日（2026-08-23）**v0.9.11 正式发布**，Codewhale 品牌对外亮相，legacy `deepseek-tui` npm 包正式进入废弃状态。社区关注焦点集中在 **v0.9.12 里程碑**（#5573）上——这一版本以**资金安全与可靠性**为首要攻坚目标，其中 R1「无界消费防护」已关闭（#5566），并已开出 24 commit 的集成分支（#5576）。与此同时，工作流 owner 状态显示、`responseSchema` 失败处理等新问题也在今日浮出水面。

## 2. 版本发布

**v0.9.11**（2026-08-23 发布）

- **Codewhale** 正式成为 Shannon Labs 的公开产品名（命令行、npm 包、release 资产仍保留小写技术标识符 `codewhale`）。
- legacy npm 包 **`deepseek-tui` 正式废弃**，不再获得任何后续发布。
- 自 v0.8.x 迁移的用户需改用 `codewhale` 命令。
- 发布流程引入「**未发布 tag 重切**」恢复流程，并记录 crates.io token（403）与 npm Trusted Publisher（E404）外部发布门槛（见 PR #5565）。

## 3. 社区热点 Issues（Top 10）

### #3368 · 安全加固落地与验证（评论 29 · 🔥最高热度）
**标签**: security, reliability
**链接**: [Hmbown/CodeWhale Issue #3368](https://github.com/Hmbown/CodeWhale/issues/3368)
v0.8.64 发布列车的安全加固工作公共跟踪器，涵盖 CodeQL 发现、咨询级报告与本地集成提交。需要公开的发布关卡，但不泄露 exploit 细节。**29 条评论**的高热度说明社区对安全透明度的期待极高。

### #5573 · v0.9.12 里程碑跟踪（今日新建，评论 2）
**标签**: milestone
**链接**: [Hmbown/CodeWhale Issue #5573](https://github.com/Hmbown/CodeWhale/issues/5573)
当前工作分支为 `codex/v0912-integration-20260823`，P0（必须修复）聚焦资金安全与稳定性。社区应持续关注此 tracker 的勾选进度。

### #5566 · R1：限制失控支出（今日关闭 ✅）
**标签**: v0.9.12, P0
**链接**: [Hmbown/CodeWhale Issue #5566](https://github.com/Hmbown/CodeWhale/issues/5566)
两个 host 默认至 u32::MAX 轮次、工具调用预算形同虚设、流式上限每步重新武装——无人值守运行可直接产生无限费用。**已确定为 0.9.12 必修项并关闭**，说明资金安全问题已在处理管道中。

### #5582 · 工作流 owner 快照将 Degraded 折叠为 Completed（今日新建，评论 1）
**标签**: workflow-runtime
**链接**: [Hmbown/CodeWhale Issue #5582](https://github.com/Hmbown/CodeWhale/issues/5582)
当前 `main` 分支将 `WorkflowRunStatus::Degraded` 映射为 `OwnerState::Completed`，导致降级状态被误报为成功。作者贴心附上源码片段，属明显可修复逻辑缺陷。

### #5583 · responseSchema 失败需受控修复与原始输出凭证（今日新建，评论 1）
**标签**: workflow
**链接**: [Hmbown/CodeWhale Issue #5583](https://github.com/Hmbown/CodeWhale/issues/5583)
workflow 子任务返回散文或畸形 JSON 时，Codewhale 能正确报 schema 失败，但**丢弃了受控修复机会**，且不提供畸形输出凭证。对依赖结构化输出的用户是不小痛点。

### #2327 · VS Code 市场非官方 CodeWhale 扩展版权问题（评论 2）
**标签**: copyright
**链接**: [Hmbown/CodeWhale Issue #2327](https://github.com/Hmbown/CodeWhale/issues/2327)
用户 `VerrPower` 报告两个非官方扩展（`HengQuWorld.brotherwhale-vscode`、`HaiTaoJiang.codewhale-…`）以 CodeWhale 名称出现在 VS Code Marketplace 上。品牌保护问题仍需关注。

### #5290 · 非英文路线点击控件失效（评论 3）
**标签**: localization, bug
**链接**: [Hmbown/CodeWhale Issue #5290](https://github.com/Hmbown/CodeWhale/issues/5290)
本地化站点（非英文）的点击控件不可靠，暂缺受影响的浏览器矩阵。属于明显的本地化交互 bug，非纯文案问题。

### #4326 · 32-worker 风暴取消后 RSS 不回落（评论 6）
**标签**: performance, subagents
**链接**: [Hmbown/CodeWhale Issue #4326](https://github.com/Hmbown/CodeWhale/issues/4326)
32-worker PTY 基准虽证明高扇出可用，但**取消后一次性 RSS 采样反而升高而非回落**，需要区分分配器高水位残留与真实 worker/运行时泄漏。

### #1985 · 编辑器上下文桥（评论 1，👍 2）
**标签**: IDE 集成
**链接**: [Hmbown/CodeWhale Issue #1985](https://github.com/Hmbown/CodeWhale/issues/1985)
IDE 优先用户希望把选区、诊断、diff 传入 CodeWhale，终端/TUI 仍为事实来源，编辑器只负责递送精确上下文。这是社区在 **IDE 生态衔接**上呼声较高的方向。

### #3145 · 浏览器与 UI 任务的可视化检查产物（评论 3）
**标签**: tools, ux
**链接**: [Hmbown/CodeWhale Issue #3145](https://github.com/Hmbown/CodeWhale/issues/3145)
参考 Cursor Design Mode 的"更丰富的证据环"（选中元素、布局关系、代码上下文、截图、排队输入），希望 TUI 增强 UI 任务的可视检查能力。

## 4. 重要 PR 进展（Top 10）

### #5576 · [OPEN] v0.9.12 集成分支：must-fix + UX 修复（WIP）
**链接**: [PR #5576](https://github.com/Hmbown/CodeWhale/pull/5576)
当前 0.9.12 周期的主集成分支（**尚未可合并**）。24 commits 已涵盖：R2 批准作用域家族授权修复、R3 Chat-Completions SSE 错误帧处理、R4 等安全与资金类修复。社区应重点关注其最终合并状态。

### #5565 · [OPEN] 发布文档：未发布 tag 重切恢复 + 外部发布门槛
**链接**: [PR #5565](https://github.com/Hmbown/CodeWhale/pull/5565)
记录 v0.9.11 实际使用的恢复流程：在 npm/crates 上无产物时可拉回未发布 tag 在固定 HEAD 重切，并记录 crates.io 403 与 npm Trusted Publisher E404 外部门槛。纯文档，对发行维护者价值极高。

### #5563 · [CLOSED] 首次运行显示全部提供商（修复本地-only 误导）
**链接**: [PR #5563](https://github.com/Hmbown/CodeWhale/pull/5563)
修复首次运行配置时只显示本地/自托管视图、预选 Ollama 的问题——DeepSeek 等托管 API 被藏在按键之后，用户误以为"只支持本地模型"。**对新手 onboarding 体验直接改善。**

### #5561 · [CLOSED] 推理模型仅返回推理 + 干净停止 → 自动重试
**链接**: [PR #5561](https://github.com/Hmbown/CodeWhale/pull/5561)
此前遇到推理模型只返回隐藏推理+停顿时，回合以"provider 响应不完整"终止，需要用户手动重发。现在与传输层失败一样**自动重试**。可靠性修复，降低卡顿感。

### #5559 · [CLOSED] v0.9.11 前标签验证：关掉真话与工具输出缺口
**链接**: [PR #5559](https://github.com/Hmbown/CodeWhale/pull/5559)
同一版本的跟进修复：模型绑定的工具输出脱敏策略（#5546）、可信性相关缺口等，确保 v0.9.11 tag 落地前 main 分支干净。**安全与质量双重保障。**

### #5545 · [CLOSED] DeepSeek V4 北京周末全天按非高峰计费
**链接**: [PR #5545](https://github.com/Hmbown/CodeWhale/pull/5545)
DeepSeek 2026-08-23（北京时间）起调整计费规则：**周末全天非高峰**。修复 `deepseek_is_peak` 仅凭 UTC 整点判断的问题。使用 DeepSeek V4 的用户成本会显著下降。

### #5542 · [CLOSED] 准备 Codewhale v0.9.11 发布候选
**链接**: [PR #5542](https://github.com/Hmbown/CodeWhale/pull/5542)
*刻意排除* benchmarks `pi-agent-parity/**` 及发布链祖先，HEAD 与完全审核的本地版逐一字节一致。v0.9.11 的发布基础。

### #5544 · [CLOSED] 文档国际化：subagents 与 mcp 迁移至词典脊柱
**链接**: [PR #5544](https://github.com/Hmbown/CodeWhale/pull/5544)
`docs/subagents` 与 `docs/mcp` 分别清除 16 与 18 个 `isZh` 分支，统一为每页两个词典 + `types.ts`/`index.ts` 接线，zh 作为帮忙语言加入 `OPTIONAL_FILES`。**本地化基础设施持续推进。**

### #5525 · [CLOSED] TUI 工具组采用外部命令形态（FEAT-018）
**链接**: [PR #5525](https://github.com/Hmbown/CodeWhale/pull/5525)
将 TUI utility 命令全组迁移到 FEAT-014/015 引入的外部命令形态，七个命令文件执行边界统一，不加物理搬迁。属于**架构收敛**工作的落地一环。

### #5535 · [OPEN] 受监督操作栈：生命周期 outbox / relaunch / 会话控制 socket
**链接**: [PR #5535](https://github.com/Hmbown/CodeWhale/pull/5535)
同一 seam 上的五处变更：生命周期事件 outbox（可选 JSONL + webhook）、`/relaunch` 命令、每会话控制 socket、以及目标延续静默期修复。面向**长篇 Codewhale 会话的可机器监督化**，值得关注。

## 5. 功能需求趋势

| 方向 | 代表 Issue / PR | 社区热度 |
|---|---|---|
| **模型/提供商架构去硬编码** | #4173（81 模型/31 提供商/52 工具去硬编码）、#5103（`DeepSeekClient` 更名为 provider-neutral）、#5092/#5093/#5094（Responses dialect 提供商标配化） | 多条并行推进，视为 0.9.x 架构主线 |
| **结构化代码工具** | #3975（LSP 导航/引用/重命名/code actions）、#3980（AST 结构搜索 + 编辑预览）、#3358（Playwright 浏览器自动化） | 持续有新需求提出，是工具面最有潜力的扩展点 |
| **工作流可靠性** | #5582（Degraded 状态误报）、#5583（responseSchema 修复 + 凭证）、#4394（compaction 生存契约） | 今日新增活跃，说明工作流已成为生产使用重点 |
| **远程/云工作台** | #1990（US-first Cloudflare/AWS/Telegram lane）、#1984（CNB/Lighthouse/Feishu 统一流）、PR #5574（Build Remote Agent 手机配对） | 从"运维笔记"走向"产品级流程"的趋势明显 |
| **本地化与国际化** | #5290（非英文 UI 控件）、PR #5544（文档词典化迁移） | 显示国际化用户正在增长 |
| **基础设施能力** | PR #5535（生命周期 outbox 监管）、#4069（`.codewhaleignore` 隐私控制） | 面向企业级/自动化使用场景的铺垫 |

## 6. 开发者关注点

- **费用失控风险是首要痛点**：#5566 显示主机默认 `u32::MAX` 轮次、工具预算失效、流式上限失效——开发者对"无人值守运行烧钱"高度敏感，v0.9.12 将其列为 P0。
- **内存/资源稳定性**：#4326 中 32-worker 风暴取消后 RSS 不回落，开发者期望区分分配器残留与真实泄漏，并约束取消后状态上限。
- **僵尸状态与误报**：#5582 Degraded 被折叠成 Completed、#5581 事件粒度只跟 `TurnComplete` 刷新导致界面"卡死"感——这类**状态可见性**问题直接影响日常使用体感。
- **工作流结构化输出的摩擦**：#5583 中 schema 失败时没有原始输出凭证、也没有受控重试空间，对依赖自动化管线的用户属于"硬伤"。
- **本地化体验裂缝**：#5290 非英文路线点击控件失效，且受影响浏览器矩阵尚未明确——社区有海外用户实际在使用。
- **品牌/市场乱象**：#2327 非官方扩展冒用 CodeWhale 名称，版权风险与用户信任问题需要官方回应。
- **Unattended 用户呼声**：#5561 推理模型干净停止导致回合死亡需手动重发的问题已被修复并合并，反映出自动化场景用户在不断增加。

---

*日报生成时间：2026-08-24 · 数据截至 2026-08-23 23:59 UTC*

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

**ComfyUI 社区动态日报（2026‑08‑24）**  

---

### 1. 今日速览  
- 今日最引人关注的是 **#15255**（Dynamic VRAM streaming 导致 CUDA OOM），已有 61 条评论，社区正围绕 `--cuda-device` 与 `--disable-pinned-memory` 的 workaround 进行讨论。  
- 多 GPU 检测误报（**#15745**）和 MiniMax H3 音频/视频性能回退（**#15665**、**#15799**）也是高频话题，获得不少点赞。  
- 功能需求方面，社区积极提交 **全批次预览（#15825/#15826）**、**多用户 token 鉴权（#15822）**、以及 **新模型支持（SenseNova‑U1.5‑8B‑MoT，#15192）** 的 Issue，表明对易用性、安全性和模型生态的诉求正在上升。

---

### 2. 版本发布  
> **过去 24 小时内无新版本发布。**  

---

### 3. 社区热点 Issues（精选 10 条）  

| # | 标题 | 更新时间 | 评论 / 👍 | 为什么重要 | 社区反应 |
|---|------|----------|----------|------------|----------|
| [#15255](https://github.com/Comfy-Org/ComfyUI/issues/15255) | Dynamic VRAM streaming crashes all generations with HostBuffer.read_file_slice failed → CUDA OOM (regression after Aug 3 2026 update) | 2026‑08‑23 | 61 / 0 | 核心回归导致 OOM，影响所有生成流程；已给出临时 workaround（单 GPU 或禁用 pinned memory）。 | 评论热烈，多人分享自己的显卡型号和成功/失败的 workaround，讨论焦点在于根因定位与长期修复。 |
| [#13134](https://github.com/Comfy-Org/ComfyUI/issues/13134) | How to fix "Failed to save workflow draft" error? | 2026‑08‑23 | 13 / 0 | 工作流草稿保存失败影响日常使用，尤其在团队协作场景。 | 虽为 stale，但仍有用户持续反馈，提示需要更稳健的草稿持久化机制。 |
| [#15745](https://github.com/Comfy-Org/ComfyUI/issues/15745) | Multiple NVIDIA GPUs detected, even when have only one NVIDIA GPU | 2026‑08‑23 | 11 / 9 | GPU 检测错误导致资源分配不均，可能触发 OOM 或性能下降。 | 点赞较高，社区普遍确认在 Windows 上出现，期待后续 PR（#15749）的修复。 |
| [#15347](https://github.com/Comfy-Org/ComfyUI/issues/15347) | 1 core keeps running at 100% CPU after workflow completion (AMD) | 2026‑08‑23 | 7 / 0 | 工作流结束后仍有单核满载，影响系统响应和功耗。 | 有 AMD 用户确认复现，呼吁提供更好的线程回收或 idle 检测。 |
| [#15665](https://github.com/Comfy-Org/ComfyUI/issues/15665) | MiniMax H3 video generation ~4x slower since v0.32.0 at full resolution – regression from #15486 (v = v.clone()) | 2026‑08‑23 | 6 / 3 | 性能回退严重影响高分辨率视频生成，耗时从 26 min 增至约 2 h。 | 评论中多次提到回退版本（0.31.1）正常，期待回滚或优化。 |
| [#15784](https://github.com/Comfy-Org/ComfyUI/issues/15784) | ComfyUI nightly crash: ImportError in comfy_api/latest (ColorPrimaries removed from PyAV) | 2026‑08‑22 | 6 / 7 | 依赖 PyAV 接口变更导致夜间构建不可用，阻碍最新功能体验。 | 点赞较多，社区建议锁定 PyAV 版本或提供向后兼容层。 |
| [#15653](https://github.com/Comfy-Org/ComfyUI/issues/15653) | torch.AcceleratorError: CUDA error: invalid argument on 9060xt 16g | 2026‑08‑23 | 5 / 0 | 特定显卡（9060xt）在某些算子上报 invalid argument，导致生成中断。 | 虽评论较少，但反馈表明该问题在特定硬件上普遍存在，需要更细致的 CUDA 参数校验。 |
| [#15192](https://github.com/Comfy-Org/ComfyUI/issues/15192) | Please support new model from Sense Nova..."SenseNova-U1.5-8B-MoT" | 2026‑08‑23 | 2 / 5 | 新型 MoT（Mixture‑of‑Experts）大模型需求旺盛，社区希望官方原生支持。 | 点赞表明对新模型的热情，期待后续加入模型加载节点或预置蓝图。 |
| [#15822](https://github.com/Comfy-Org/ComfyUI/issues/15822) | Implement Token Authentication for --multi-user mode to prevent unauthorized cross-user profile access | 2026‑08‑23 | 1 / 0 | 多用户模式目前缺乏鉴权，任意用户可列出他人 ID，存在安全隐患。 | 虽仅一条评论，但功能需求明确，列为安全方向的高优先级 Issue。 |
| [#15825](https://github.com/Comfy-Org/ComfyUI/issues/15825) | Latent preview of all batch items instead of just the first one | 2026‑08‑23 | 0 / 0 | 当前仅预览第一个 batch，不利于调试多样本生成。 | 虽暂无讨论，但与 #15826（全批次预览 flag）形成功能互补，预计会成为近期热点。 |

---

### 4. 重要 PR 进展（精选 10 条）  

| # | 标题 | 更新时间 | 关键内容 | 为什么重要 |
|---|------|----------|----------|------------|
| [#15832](https://github.com/Comfy-Org/ComfyUI/pull/15832) | Cache prepared ControlNet hints per hint size | 2026‑08‑23 | 为不同 hint 尺寸单独缓存 ControlNet 预处理结果，避免每步重新 `common_upscale`。 | 大幅提升区域条件（area composition）下的 ControlNet 推理速度，尤其在多块、多尺度工作流中。 |
| [#15833](https://github.com/Comfy-Org/ComfyUI/pull/15833) | Stop unconsumed lazy inputs from invalidating downstream cache | 2026‑08‑23 | 修改输入签名缓存键，不再把未被消费的 lazy 输入纳入键计算。 | 防止因上游无关变化导致下游节点失效缓存，提高复用率与工作流执行效率。 |
| [#15830](https://github.com/Comfy-Org/ComfyUI/pull/15830) | Fix LoRA alpha not applied when the trainer stores it in file metadata | 2026‑08‑23 | 从 safetensors 头部元数据读取 `alpha`、`rank`，确保 PEFT/diffusers 训练出的 LoRA 生效。 | 解决社区反馈的 LoRA 加载失效问题，提升模型微调的可用性。 |
| [#15831](https://github.com/Comfy-Org/ComfyUI/pull/15831) | Make KSampler sigma schedules reachable from custom sampling | 2026‑08‑23 | 将 `KSampler.calculate_sigmas` 暴露为公共方法，供自定义采样器复用。 | 为高级采样实验（如自定义噪声调度）提供标准接口，减少重复造轮子。 |
| [#15826](https://github.com/Comfy-Org/ComfyUI/pull/15826) | feat: add --preview-full-batch flag for full‑batch grid preview | 2026‑08‑23 | 新增命令行选项，使 latent 预览渲染为批次网格（每个 batch 一格）。 | 直接响应 #15825 需求，提升多样本调试体验，尤其在视频批次生成中。 |
| [#15828](https://github.com/Comfy-Org/ComfyUI/pull/15828) | Preserve multichannel audio layout in previews | 2026‑08‑23 | 修复多通道音频在预览时被压平成立体声导致播放速度异常的问题。 | 确保音频预览与原始通道数一致，避免误判音频损坏，提升多轨音频工作流的可靠性。 |
| [#15823](https://github.com/Comfy-Org/ComfyUI/pull/15823) | Sanitize argv in /system_stats to prevent leaking CLI arguments | 2026‑08‑23 | 过滤 `/system_stats` 接口返回的 `sys.argv`，移除可能敏感的参数（如路径、token）。 | 修复安全漏洞（#15821），防止未授权端点泄露启动参数。 |
| [#15824](https://github.com/Comfy-Org/ComfyUI/pull/15824) | Fix LTX‑2.5 audio NaN errors, video muxing packet loop, upsampler MPS… | 2026‑08‑23 | 综合修复 LTX‑2.5 音频 NaN、视频复用循环以及 MPS 上采样器崩溃。 | 提升 LTX‑2.5 在苹果 Silicon（MPS）平台的稳定性，解决黑帧

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama 社区动态日报（2026‑08‑24）**  

---

### 1. 今日速览  
- 过去 24 h 没有新版本发布，社区活动主要集中在 Bug 修复与功能完善。  
- 高频讨论围绕 **Qwen3 系列模型的思考（thinking）字段解析**、**量化导致的异常输出**、**HF‑import 模型的 stop 参数错误** 以及 **GPU 资源泄漏/占用** 四大方向。  
- 开发者们纷纷提交改进 PR，涉及设置页交互、MLX 依赖去重、预填充缓存持久化以及社区集成列表的补充等。

---

### 2. 版本发布  
> 过去 24 h 内 **无** 新リリース。

---

### 3. 社区热点 Issues（精选 10 条）

| # | 标题 & 链接 | 关键点 | 社区反应 |
|---|-------------|--------|----------|
|[#17778](https://github.com/ollama/ollama/issues/17778)|[bug] qwen 3.8 reports error during query: **ResponseError during chat streaming: no user query found in messages**|在使用 `ollama chat`（Python API）时，模型在处理长上下文（205k token）后返回 500 错误，提示 “no user query found in messages”。|17 条评论，8 👍，用户普遍认为是消息结构校验过于严格，建议在工具循环中自动补全空用户查询。|
|[#17484](https://github.com/ollama/ollama/issues/17484)|[bug] **Error: context deadline exceeded**|拉取 HF 上的大模型（如 Qwen3.6‑27B‑Fable‑Fusion‑711）时频繁出现截止时间错误，怀疑与网络下载或 manifest 校验有关。|13 条评论，2 👍，部分用户尝试增大 `OLLAMA_MAX_LOADED_MODELS` 或使用本地缓存缓解。|
|[#17889](https://github.com/ollama/ollama/issues/17889)|Same server, no **num_ctx**: some models return HTTP 400 naming 4096, others return 200 with prompt_eval_count 2050|同一服务器下，未显式设置 `num_ctx` 时，不同模型对超长 prompt 的处理不一致（有的直接 400，有的截断后 200），导致上下文行为不可预期。|13 条评论，0 👍，社区呼吁统一回退策略或提供更明确的错误码。|
|[#17614](https://github.com/ollama/ollama/issues/17614)|[bug] Lower quantization formats cause model to emit **unintelligible/~garbage responses**|从 q8_0 切换到 q4_0 KV 量化后，特定模型输出大量重复噪声（“AI AI AI …”），疑似量化阶段的状态机未正确复位。|12 条评论，0 👍，开发者建议在量化切换时强制重置 KV 缓存或提供回滚选项。|
|[#17754](https://github.com/ollama/ollama/issues/17754)|[bug] qwen3.8:27b throws **“500 system message must be at the beginning”** Error|使用 `ollama launch claude --model qwen3.8:27b` 时，API 层未正确处理放在非首位的 system 消息，导致 500 错误。|11 条评论，8 👍，用户期望在聊天接口中自动将 system 消息前移或给出更友好的提示。|
|[#17957](https://github.com/ollama/ollama/issues/17957)|[bug] ornith-1.5:35b fails when a **response format** is specified and **tools** are provided|在指定 `response_format` 且同时提供 tools 时，模型初始化 sampler 失败（`Failed to initialize samplers: failed to parse grammar`），而 qwen3.6:35b 正常。|6 条评论，0 👍，提示解析工具与响应格式的冲突需要在 parser 层做兼容。|
|[#17946](https://github.com/ollama/ollama/issues/17946)|[bug] Sharded GGUF import fails **only after shards are copied into blob storage**|导入大型分片 GGUF 时，Ollama 先将所有 shard 拷入 `.ollama/models/blobs`，随后才检查文件命名规则，导致无效分片仍占用磁盘和网络。|5 条评论，0 👍，社区赞成在拷贝前进行文件名与元数据预检查（见 PR #17949）。|
|[#17459](https://github.com/ollama/ollama/issues/17459)|[bug, needs more info] Gemma 4 emits repeated `<unused49>` tokens when **think=false**|当 `/api/chat` 请求带有 `"think": false` 时，Gemma 4 会大量输出 `<unused49>` 占位符，导致下游插件（如 VS Code 扩展）解析失败。|5 条评论，0 👍，用户建议在 think 关闭时过滤掉特殊 token 或提供显式开关。|
|[#17270](https://github.com/ollama/ollama/issues/17270)|[bug, needs more info] Regression in 0.32.1: `/api/generate` aborts with **token repeat limit reached**|从 0.20.7 升至 0.32.1 后，长文本生成易触发 token 重复限制，导致提前中止。|5 条评论，0 👍，社区认为是新版本重复检测阈值过敏，建议可调参数。|
|[#17932](https://github.com/ollama/ollama/issues/17932)|cloudfront.net sucks（镜像下载慢）|官方镜像通过 CloudFront 拉取速度不稳定，用户主张将官方镜像迁移至 quay.io 或其他 CDN。|4 条评论，0 👍，部分用户已经自行使用 quay.io 镜像，待官方确认。|

---

### 4. 重要 PR 进展（精选 10 条）

| # | 标题 & 链接 | 主要功能 / 修复 | 备注 |
|---|-------------|----------------|------|
|[#17960](https://github.com/ollama/ollama/pull/17960)|readme: add **Grux** to Community Integrations|将原生 macOS 菜单栏助手 Grux 加入「生产力 & 应用」分类。|社区贡献，提升 Ollama 生态可见度。|
|[#17959](https://github.com/ollama/ollama/pull/17959)|app: add optional **auto mode** preference in settings view|在设置页面新增开关，让用户可选择是否启用自动模式（无需手动发送）。|改善交互体验，尤其对新手友好。|
|[#17940](https://github.com/ollama/ollama/pull/17940)|docs: add **NVIDIA driver version guidance** by compute capability|根据 GPU 计算能力给出对应最低驱动版本表格，解决老 GPU 支持混乱。|直接回应 #17789，便于用户排错。|
|[#17936](https://github.com/ollama/ollama/pull/17936)|app: add **Back to chat** button on Settings page|设置页新增返回聊天视图的按钮，避免用户误点系统关闭。|部分解决 #17912。|
|[#17956](https://github.com/ollama/ollama/pull/17956)|mlx: deduplicate **CUDA runtime payloads**|将 Windows/Linux MLX CUDA 运行时库移至共享 `cuda_v13` 载荷，避免重复拷贝。|降低镜像体积，简化维护。|
|[#17955](https://github.com/ollama/ollama/pull/17955)|MLX: version bump|跟随 upstream MLX 最新提交（d9077d8…），获取最新性能改进与 bug 修复。|保持 MLX 后端与官方同步。|
|[#17954](https://github.com/ollama/ollama/pull/17954)|server: refuse exited runners and bound embed concurrency|检测 llama‑server 退出，防止调度器重复使用失效 runner；同时限制 `/api/embed` 的并发度，避免资源耗尽。|提升服务器稳定性，尤其在高并发嵌入场景。|
|[#17953](https://github.com/ollama/ollama/pull/17953)|server: add experimental **prefill cache persistence** across runner reloads|引入可选的 prefill/KV 持久化机制（基于文件或内存），使模型重新加载后可复用已计算的前缀，降低重复开销。|实验特性，后续可通过 `OLLAMA_PREFILL_CACHE` 开启。|
|[#17278](https://github.com/ollama/ollama/pull/17278)|server: warm prefill cache across model unload/reload|实现 `OLLAMA_PREFILL_CACHE`：在模型卸载/重新加载时保存/恢复前缀 KV，采用指纹 + 8 GiB LRU 上限。|已有充分测试计划，为 #17953 提供基础。|
|[#17945](https://github.com/ollama/ollama/pull/17945)|Enable explicit **thinking** for the Qwen3 parser|在 Qwen3 解析器中打开对 `thinking` 字段的显式支持（默认关闭），并补足单元测试。|直接解决 #17937，使思考过程可被下游捕获。|

> 其余值得关注的 PR（如 #17950 修复社区链接、#17949 预校验分片 GGUF 文件名）同样体现了社区对文档质量和导入可靠性的持续关注。

---

### 5. 功能需求趋势（从 Issues 中提炼）

| 趋势 | 典型表现 | 可能的解决方向 |
|------|----------|----------------|
| **思考（thinking）字段解析** | Qwen3、ornith 等模型在带思考标记时无法正确拆分到 `message.thinking`（#17937、#17957） | 在 parser 层增加可选的思考字段提取开关，统一输出格式。 |
| **量化稳定性** | 低位量化（q4_0、q5_0）导致输出乱码或重复噪声（#17614） | 引入量化后校验步骤、提供量化回退选项或改进量化算法。 |
| **HF‑import 元数据兼容性** | 自动推导的 `stop` 参数失效（#17939）、模型名称/文件命名导致导入失败（#17946） | 增强导入前的文件名检查、允许用户手动覆盖 stop 参数、改进 GGUF 分片识别逻辑。 |
| **工具使用与响应

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

**llama.cpp 社区动态日报 (2026-08-24)**  

---

### 1️⃣ 今日速览  
- 发布了 **b10603** 版本，首次在 GLM‑4.5‑Air 中加入 MTP（多令牌预测）支持，进一步提升推理吞吐。  
- 持续改进服务器与多模态能力：服务器新增 `LLAMA_SERVER_SLOTS_N_DIFF` 参数、mtmd 采用更准确的 Pillow 缩放算法，以及修复了 DeepSeekV4 多序列回滚问题。  
- 社区关注度最高的 Issue 集中在 GPU 后端（CUDA/Vulkan/HIP）不稳定、视频输入死锁以及 MTP/推测解码的正确性上，反映出对跨平台性能与可靠性的迫切需求。

---

### 2️⃣ 版本发布（过去 24 小时）  
| 版本 | 关键更新 | 链接 |
|------|----------|------|
| **b10603** | `model : support MTP in GLM-4.5-Air`（#26534） | https://github.com/ggml-org/llama.cpp/releases/tag/b10603 |
| b10599 | `test: move tools/parser to tests`（#27548） | https://github.com/ggml-org/llama.cpp/releases/tag/b10599 |
| b10598 | `mtmd: use pillow-accurate algo, correct resize_algo for all models`（#27594） | https://github.com/ggml-org/llama.cpp/releases/tag/b10598 |
| b10595 | `server : add LLAMA_SERVER_SLOTS_N_DIFF`（#27600） | https://github.com/ggml-org/llama.cpp/releases/tag/b10595 |
| b10594 | `common : skip device_info loop if it's not going to be printed`（#26692） | https://github.com/ggml-org/llama.cpp/releases/tag/b10594 |
| b10593 | `DeepseekV4: fix rollback with multi-seq`（#26756） | https://github.com/ggml-org/llama.cpp/releases/tag/b10593 |
| b10590 | `vendor : update subprocess.h`（#27409） | https://github.com/ggml-org/llama.cpp/releases/tag/b10590 |
| b10589 | `cuda : add POOL_1D support`（#27573） | https://github.com/ggml-org/llama.cpp/releases/tag/b10589 |
| b10588 | `common: json.h: fix clang lto`（#27575） | https://github.com/ggml-org/llama.cpp/releases/tag/b10588 |

> **总结**：本轮发布侧重于 **模型功能扩展（MTP）**、**服务器调度细化**、**多媒体处理质量提升** 以及 **底层依赖/编译器兼容性修复**。

---

### 3️⃣ 社区热点 Issues（评论数 Top 10）  

| # | 标题 | 评论 | 为何重要 | 社区反应 |
|---|------|------|----------|----------|
| [#27102](https://github.com/ggml-org/llama.cpp/issues/27102) | CUDA kernel stall during model execution (watchdog killed) | 26 | 暴露 CUDA 后端在大模型（Qwen3.8‑27B）下的不稳定，可能导致服务中断。 | 大量开发者提供复现步骤，呼吁加强 kernel 调度与错误恢复。 |
| [#24280](https://github.com/ggml-org/llama.cpp/issues/24280) | GGML_ASSERT(addr) failed with MTP + Vulkan + --no-mmap (Qwen3.6) | 12 | MTP 与 Vulkan 组合下的内存访问断言失败，影响跨平台部署。 | 讨论集中在内存映射与 MTP 指针生命周期的匹配上。 |
| [#24394](https://github.com/ggml-org/llama.cpp/issues/24394) | mtmd: Video input silently fails if MOOV atom at end of MP4 | 11 | 视频输入在常见的 “fast‑start” MP4 上会丢失全部帧，影响多模态应用。 | 用户建议采用更健壮的 MOOV 解析或回退到流式读取。 |
| [#26741](https://github.com/ggml-org/llama.cpp/issues/26741) | DeepSeek4 garbled output with parallel processing + speculation | 11 | 推测解码在多序列场景下产生乱码，直接影响生成质量。 | 开发者提出回滚机制改进和 cache 清理细化的补丁。 |
| [#20632](https://github.com/ggml-org/llama.cpp/issues/20632) | Feature Request: Graceful reasoning budget termination | 10 | 期望在达到 reasoning budget 时能够完整结束句子，避免中途截断。 | 社区广泛赞同，认为这是提升用户体验的重要改进。 |
| [#26116](https://github.com/ggml-org/llama.cpp/issues/26116) | Allow `llama serve -hf` to use llama‑server in router mode | 6 | 希望统一 HF 模型下载与服务器路由，简化部署流程。 | 讨论焦点在缓存共享与自动下载的实现细节上。 |
| [#27579](https://github.com/ggml-org/llama.cpp/issues/27579) | HIP/ROCm backend corrupted output on gfx1151 (Strix Halo) | 6 | 揭示 ROCm 后端在特定 GPU 上的位错误，而 Vulkan 正常。 | 强调需要在 HIP 后端加入更严格的数据对齐与同步检查。 |
| [#27282](https://github.com/ggml-org/llama.cpp/issues/27282) | Native MTP reserves separate CUDA compute arena → OOM | 5 | MTP 导致显存额外占用，易触发 OOM，尤其是大批量场景。 | 建议共享 gallocr 或采用动态分配策略。 |
| [#27576](https://github.com/ggml-org/llama.cpp/issues/27576) | Cannot start llama‑server.exe on Windows (b10587) | 5 | Windows 上的可执行文件启动失败，可能与 DLL 加载或路径有关。 | 用户提供了依赖检查脚本，期望官方提供更完善的 Windows 构建指南。 |
| [#24429](https://github.com/ggml-org/llama.cpp/issues/24429) | mtmd video input hangs on Windows — probe() deadlocks | 5 | 视频 probe 在 Windows 上出现死锁，导致服务无响应。 | 讨论指向 FFmpeg 调用线程锁的顺序问题，建议异步或超时机制。 |

> **热点趋势**：GPU 后端稳定性（CUDA/Vulkan/HIP）、MTP/推测解码的正确性、视频多模态输入的健壮性以及跨平台（尤其是 Windows）部署的可靠性成为社区当前最关注的方向。

---

### 4️⃣ 重要 PR 进展（选取 10 项）  

| PR | 功能/修复 | 说明 | 链接 |
|----|-----------|------|------|
| [#27342](https://github.com/ggml-org/llama.cpp/pull/27342) | **spec : add DFlash2 support** | 引入局部卷积 + 候选选择器的 DFlash2，进一步提升 speculative 解码的效率。 | https://github.com/ggml-org/llama.cpp/pull/27342 |
| [#27618](https://github.com/ggml-org/llama.cpp/pull/27618) | **speculative: draft‑mtp for dots3note** | 为 dots3note 模型添加 MTP 草稿，在 Strix Halo 上实测吞吐从 10t/s 提升至 14‑16t/s。 | https://github.com/ggml-org/llama.cpp/pull/27618 |
| [#27626](https://github.com/ggml-org/llama.cpp/pull/27626) | **server : fix tool calls being dropped from trailing assistant message** | 解决 `--prefill-assistant` 与尾部 `assistant(tool_calls)` 导致的工具调用丢失问题。 | https://github.com/ggml-org/llama.cpp/pull/27626 |
| [#24934](https://github.com/ggml-org/llama.cpp/pull/24934) | **Lllama sampler speedups/fixes** | 优化概率向量归一化，消除不必要的 float↔double 往返转换，提升采样速度。 | https://github.com/ggml-org/llama.cpp/pull/24934 |
| [#27610](https://github.com/ggml-org/llama.cpp/pull/27610) | **sycl: fuse rms_norm+mul+add and add+add residual chains** | SYCL 后端新增算子融合，默认开启，可降低内核启动开销。 | https://github.com/ggml-org/llama.cpp/pull/27610 |
| [#27625](https://github.com/ggml-org/llama.cpp/pull/27625) | **model : add support for HrmTextForCausalLM (DFM Mimir 1B)** | 新增 HRM‑Text 模型的 GGUF 读写与推理路径，扩展模型生态。 | https://github.com/ggml-org/llama.cpp/pull/27625 |
| [#27624](https://github.com/ggml-org/llama.cpp/pull/27624) | **server: clear stale state when reusing LRU‑selected slots** | 在 LRU 槽位复用时清除残留的 prompt、checkpoint 与 KV/recurrent 状态，防止跨请求污染。 | https://github.com/ggml-org/llama.cpp/pull/27624 |
| [#27332](https://github.com/ggml-org/llama.cpp/pull/27332) | **vulkan: use density gate for

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*