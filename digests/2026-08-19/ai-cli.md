# AI CLI 工具社区动态日报 2026-08-19

> 生成时间: 2026-08-18 22:16 UTC | 覆盖工具: 12 个

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

**今日重點（2026‑08‑19）**

- **Claude Code** 發布 **v2.1.235**：新增可選 `spellcheck` 設定（即時下劃線標註拼寫錯誤），並修復語言服務器斷線導致提示詞快取失效的問題。  
  https://github.com/anthropics/claude-code/releases/tag/v2.1.235  

- **OpenAI Codex** 連續發布兩個 Rust Alpha 版本：**rust‑v0.148.0‑alpha.22** 與 **rust‑v0.148.0‑alpha.23**（CLI 核心庫迭代）。  
  https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.22  
  https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.23  

- **Gemini CLI** 發行 Nightly 版本 **v0.56.0-nightly.20260818.g194edea47**：主要為隱私條款修正與 TypeScript strict‑null 錯誤修正。  
  https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-nightly.20260818.g194edea47  

- **GitHub Copilot CLI** 推出 **v1.0.81-1**：新增對 Gemini 3.7 Flash 模型的支援、`/sandbox` 中 `Ctrl+E` 快捷鍵開啟 `settings.json`，以及 `--usage-output-file` 增加按 Agent 維度的用量統計。  
  https://github.com/github/copilot-cli/releases/tag/v1.0.81-1  

- **Qwen Code** 發行 Nightly 版本 **v0.21.11-nightly.20260818.259951c53e**：加入 live‑session 註冊表與 `qwen sessions ps` 指令，並支援 daemon 技能切換（skill‑toggle）attach 機制。  
  https://github.com/QwenLM/qwen-code/releases/tag/v0.21.11-nightly.20260818.259951c53e  

- **DeepSeek TUI**（CodeWhale）發布 **v0.9.9**：修復狹窄終端（<60 行）UI 溢出問題，並解決 Rustdoc bare‑URL 警告。  
  https://github.com/Hmbown/CodeWhale/releases/tag/v0.9.9  

- **llama.cpp** 發布 **v0.1.2** 與 Nightly 建置 **b10485**：OpenVINO 升級至 2026.3、LFM2 圖像 tiling 修正（Windows）以及提供含 KleidiAI（已禁用）的 arm64 二進制檔。  
  https://github.com/ggml-org/llama.cpp/releases/tag/v0.1.2  
  https://github.com/ggml-org/llama.cpp/releases/tag/b10485

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止2026-08-19）
---
## 1. 热门 Skills 排行（按社区互动量排序）
| 排名 | PR/技能名称 | 核心功能 | 社区讨论热点 | 状态 | 链接 |
|------|------------|----------|--------------|------|------|
| 1 | PR #1298：skill-creator 核心修复 | 修复`run_eval.py` 0%召回率核心bug，解决Windows流读取、触发检测、并行worker兼容问题 | 该问题有10+独立复现，导致技能描述优化流程完全失效，影响所有基于skill-creator的技能开发者 | OPEN | [链接](https://github.com/anthropics/skills/pull/1298) |
| 2 | PR #83：skill-quality-analyzer + skill-security-analyzer | 提供技能质量五维度分析、安全扫描两类元技能，覆盖结构合规性、权限风险等检测能力 | 直接回应社区最关注的安全信任边界问题（关联最高热度Issue #492，43条评论），填补技能治理工具空白 | OPEN | [链接](https://github.com/anthropics/skills/pull/83) |
| 3 | PR #514：document-typography 排版技能 | 解决AI生成文档的孤行、Widow段落、编号错位等通用排版问题 | 覆盖所有AI生成文档的刚需痛点，用户反馈“几乎每个Claude生成的文档都需要该能力” | OPEN | [链接](https://github.com/anthropics/skills/pull/514) |
| 4 | PR #568：ServiceNow 企业平台技能 | 覆盖ITSM、ITOM、安全运营、资产管理等全模块的ServiceNow操作能力 | 满足企业级用户对垂直SaaS平台集成的需求，是目前覆盖范围最广的企业服务类技能 | OPEN | [链接](https://github.com/anthropics/skills/pull/568) |
| 5 | PR #723：testing-patterns 测试技能 | 覆盖测试Trophy模型、单元测试、React组件测试等全栈测试规范 | 开发者群体对代码质量保障类技能需求持续走高，是当前最受开发群体关注的效能类技能 | OPEN | [链接](https://github.com/anthropics/skills/pull/723) |
| 6 | PR #1595：UIZZE 反UI Slop技能 | 基于80万+真实屏幕数据提供UI生成grounding能力，解决AI生成界面同质化问题 | 对应前端/产品场景的刚需，提交2天即进入热门PR列表，社区反馈积极 | OPEN | [链接](https://github.com/anthropics/skills/pull/1595) |
| 7 | PR #1367：self-audit 自审计技能 | 提供机械文件验证+四维推理的质量门控能力，覆盖AI输出全生命周期质检 | 回应社区对AI输出可靠性保障的广泛需求，配套流程已被多个社区用户验证可行性 | OPEN | [链接](https://github.com/anthropics/skills/pull/1367) |
| 8 | PR #486：ODT 开源文档技能 | 支持OpenDocument格式的创建、模板填充、转HTML能力 | 填补了官方技能对开源办公格式的支持空白，满足去微软化办公场景需求 | OPEN | [链接](https://github.com/anthropics/skills/pull/486) |

---
## 2. 社区需求趋势（基于Issue数据提炼）
1. **安全与治理优先**：社区最高热度Issue（#492，43条评论）聚焦技能信任边界问题，呼吁官方明确社区技能命名规范、权限隔离机制；同时16条评论的Issue #228呼吁支持组织级技能共享，降低企业内部分发成本。
2. **基础层标准化需求迫切**：核心痛点包括skill-creator评估工具不可靠（Issue #556，12条评论）、技能eagerly占用过多上下文窗口（Issue #1487）、不符合官方Agent Skills规范（Issue #1538），社区亟需标准化的创建、验证、轻量化打包流程。
3. **垂直场景持续深化**：需求集中在三类场景：企业级系统集成（ServiceNow、SharePoint权限管控，Issue #1175）、开发效能（测试、代码审查、游戏开发）、内容生产（排版、UI质量、多格式文档支持），对应多个新技能PR的需求来源。

---
## 3. 高潜力待合并 Skills
以下PR需求明确、影响面大或修复关键阻塞问题，近期落地概率极高：
1. **PR #1298（skill-creator 核心修复）**：关联最高热度Issue #556，修复后直接解决所有技能创建者的评估流程失效问题，是当前优先级最高的修复类PR。[链接](https://github.com/anthropics/skills/pull/1298)
2. **PR #1538（Agent Skills 规范合规修复）**：修复2个不符合官方参考实现的技能，解决技能验证工具的误判问题，符合社区对规范统一的需求。[链接](https://github.com/anthropics/skills/pull/1538)
3. **PR #1595（UIZZE 反UI Slop技能）**：对应前端/产品群体刚需，提交后快速获得社区关注，

---

# 📋 Claude Code 社区动态日报 | 2026-08-19

> 数据来源：[github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)  
> 统计周期：过去 24 小时

---

## 一、今日速览

Claude Code 今日发布 **v2.1.235** 版本，新增拼写检查功能并修复了语言服务器断连导致的缓存失效问题。社区 Issue 活跃度较高，**50 条 Issues 更新**，其中 **Cowork 协作功能在 Intel Mac 上的连接超时问题**（8 条评论）和 **跨会话消息传递在 Windows 原生环境下的静默失败问题**（6 条评论）引发最多讨论。PR 方面仅 2 条更新，活跃度偏低。

---

## 二、版本发布

### 🚀 v2.1.235

| 变更类型 | 内容 |
|---------|------|
| ✨ 新功能 | 新增可选 `spellcheck` 设置，输入时实时下划线标注拼写错误（依赖 `aspell`/`hunspell`/`ispell`） |
| 🐛 修复 | 修复语言服务器中途断连/重连导致整个提示词缓存失效的问题 |
| 🐛 修复 | 修复嵌套 m…（原文截断，疑似嵌套多智能体相关修复） |

> 📎 [Release 详情](https://github.com/anthropics/claude-code/releases/tag/v2.1.235)

---

## 三、社区热点 Issues（Top 10）

### 🔥 1. [BUG] Cowork VM 在 Intel Mac 上连接超时（更新后 guest 始终无法连接）
- **Issue**: [#87503](https://github.com/anthropics/claude-code/issues/87503) | 状态：**CLOSED** | 💬 8 评论
- **平台**: macOS | 标签: `bug`, `regression`, `cowork`, `desktop`
- **关注理由**: Cowork 是 Claude Code 的核心协作功能，Intel Mac 用户升级到 `1.32352.0` 后集体遭遇 VM 连接超时，影响面广。

### 🔥 2. ReferenceError: getCurrentOutputStyleName 未定义（会话启动/恢复崩溃）
- **Issue**: [#71980](https://github.com/anthropics/claude-code/issues/71980) | 状态：**CLOSED** | 💬 7 评论 | 👍 1
- **平台**: Windows / macOS / Linux | 标签: `bug`, `regression`, `core`
- **关注理由**: 跨三大平台的回归 Bug，自 v2.1.193 引入后持续存在至 v2.1.195，函数被调用但从未定义——属于打包构建层面的严重缺陷。

### 🔥 3. Opus 4.8 模型严重退化：忽略 CLAUDE.md、绕过权限、幻觉频发
- **Issue**: [#66539](https://github.com/anthropics/claude-code/issues/66539) | 状态：**CLOSED** | 💬 7 评论 | 👍 2
- **平台**: Windows | 标签: `bug`, `model`, `permissions`, `desktop`
- **关注理由**: 模型质量问题是用户最敏感的痛点。该 Issue 描述了 Opus 4.8 自 2026-06-08 起的多症状退化，包括忽略指令文件、未经许可写入文件等安全相关行为。

### 🔥 4. [BUG] Windows 原生环境下 send_message 报告成功但实际未投递
- **Issue**: [#86603](https://github.com/anthropics/claude-code/issues/86603) | 状态：**OPEN** | 💬 6 评论
- **平台**: Windows | 标签: `bug`, `regression`, `agents`, `desktop`
- **关注理由**: **仍为 Open 状态**。跨会话消息传递在 Windows 上无 inbox socket 绑定却返回成功，调用方完全无法感知失败——属于"静默数据丢失"类严重问题，2026-08-11 后开始复现。

### 🔥 5. Claude Code 声称工作完成但未验证，WebGL 开发浪费数小时
- **Issue**: [#66054](https://github.com/anthropics/claude-code/issues/66054) | 状态：**CLOSED** | 💬 5 评论
- **平台**: Linux | 标签: `bug`, `tools`, `model`
- **关注理由**: 反映模型"过度自信"的典型问题——生成含类型错误的 GLSL 着色器后静默部署失败却不报错，用户浪费大量调试时间。

### 🔥 6. 嵌套后台子 Agent 卡在 "Running" 状态永不结束
- **Issue**: [#72711](https://github.com/anthropics/claude-code/issues/72711) | 状态：**CLOSED** | 💬 4 评论 | 👍 1
- **平台**: Windows | 标签: `bug`, `agents`, `agent-view`
- **关注理由**: 多 Agent 架构是 Claude Code 的核心能力之一，子 Agent 状态管理缺陷直接影响用户体验和工作流可靠性。

### 🔥 7. 记忆系统失效：Claude Code 跨会话遗忘已知事实
- **Issue**: [#66143](https://github.com/anthropics/claude-code/issues/66143) | 状态：**CLOSED** | 💬 4 评论
- **平台**: - | 标签: `bug`, `model`, `memory`
- **关注理由**: 记忆系统是 Claude Code 差异化竞争力的关键功能。用户反馈即使保存了记忆条目，下次会话仍然遗忘服务器 IP、部署流程、分支名等关键信息。

### 🔥 8. Chrome 多浏览器扩展：switch_browser 误触及其他浏览器实例
- **Issue**: [#72677](https://github.com/anthropics/claude-code/issues/72677) | 状态：**CLOSED** | 💬 3 评论 | 👍 2
- **平台**: Windows | 标签: `bug`, `browser-extension`
- **关注理由**: 浏览器集成是高频使用场景，多浏览器隔离失败可能导致隐私泄露或操作混乱。

### 🔥 9. 无障碍模式：屏幕阅读器每秒播报计时器/token 计数器
- **Issue**: [#72698](https://github.com/anthropics/claude-code/issues/72698) | 状态：**CLOSED** | 💬 3 评论
- **平台**: Windows | 标签: `bug`, `a11y`, `tui`
- **关注理由**: 影响视障开发者使用体验，axScreenReader 模式下 live region 未正确过滤动态内容。

### 🔥 10. Vertex AI Cowork: gcpRegion 验证拒绝 "eu"/"us" 多区域
- **Issue**: [#72709](https://github.com/anthropics/claude-code/issues/72709) | 状态：**CLOSED** | 💬 1 评论 | 👍 **6**
- **平台**: Windows | 标签: `bug`, `cowork`, `api:vertex`
- **关注理由**: **👍 最高点赞数**。Vertex AI 用户在新模型仅通过 eu 多区域可用时，因区域验证过严而完全无法使用 Cowork 功能——企业用户痛点突出。

---

## 四、重要 PR 进展

> ⚠️ 过去 24 小时内仅 **2 条 PR** 更新，活跃度较低。

### 1. ralph-wiggum 插件：使用 disable-model-invocation 防止模型自调用 `/ralph-loop`
- **PR**: [#87395](https://github.com/anthropics/claude-code/pull/87395) | 状态：**CLOSED** (已合并)
- **内容**: 修复 ralph-wiggum 插件的 `/ralph-loop` 和 `/cancel-ralph` 命令可被模型自主触发导致无限循环的问题。原实现使用了不支持的 frontmatter 字段 `hide-from-slash-command-tool`，现已改用正确的 `disable-model-invocation` 机制。
- **意义**: 防止 AI Agent 进入自我循环的安全加固。

### 2. 为 Claude Code 补充缺失的 source 信息
- **PR**: [#41611](https://github.com/anthropics/claude-code/pull/41611) | 状态：**OPEN**
- **内容**: 向代码库中添加缺失的 source 引用/归属信息。
- **备注**: 创建于 2026-03-31，长期 Open 状态，属维护性 PR。

---

## 五、功能需求趋势分析

基于今日 50 条 Issues 的标签分布与内容归纳：

| 趋势方向 | 关键词 | 代表性 Issues | 强度 |
|---------|--------|--------------|------|
| **🔴 协作功能稳定性** | cowork, VM 连接, 跨会话消息, Vertex 区域 | #87503, #86603, #72709 | ⭐⭐⭐⭐⭐ |
| **🔴 模型行为一致性** | 幻觉, 忽略指令, 过度自信, 记忆失效 | #66539, #66054, #66143 | ⭐⭐⭐⭐⭐ |
| **🟡 多 Agent 可靠性** | 子 Agent 状态, 嵌套执行, 自我循环 | #72711, #87395 | ⭐⭐⭐⭐ |
| **🟡 平台兼容性** | Intel Mac, Windows 原生, WSL, Linux TUI | #87503, #86603, #72715, #71318 | ⭐⭐⭐⭐ |
| **🟢 IDE & 浏览器集成** | VSCode, Chrome 扩展, 文件浏览器 | #72708, #72677, #72726 | ⭐⭐⭐ |
| **🟢 无障碍 & 国际化** | 屏幕阅读器, 西里尔字母编码 | #72698, #72731 | ⭐⭐ |
| **🟢 MCP & 第三方集成** | Google Drive, OAuth, 设计工具 MCP | #72717, #72673 | ⭐⭐ |

**核心洞察**: 社区当前最关注的两大主题是 **Cowork 协作功能的跨平台稳定性** 和 **模型输出的一致性与可控性**。前者涉及企业级使用场景，后者直接影响日常开发信任度。

---

## 六、开发者关注点（痛点总结）

### 📌 高频痛点

1. **"静默失败"模式令人沮丧**
   - `send_message` 返回成功但未投递（#86603）
   - WebGL 编译失败但声称完成（#66054）
   - 合并冲突解决覆盖非冲突文件（#72708）
   - **共性**: 错误不可见 → 排查成本极高

2. **回归 Bug 频现，版本质量波动大**
   - `getCurrentOutputStyleName` 未定义持续多版本（#71980）
   - Bash 工具分发到 VM 失败（#72595）
   - Bun 打包导致 Windows 全面崩溃（#67255）

3. **记忆系统尚未达到生产级可靠度**
   - 跨会话事实遗忘是长期投诉热点（#66143）
   - Auto-compact 在 ~47% 上下文窗口时过早触发（#72600），损失有效上下文

4. **企业/云用户基础设施适配不足**
   - Vertex AI 多区域支持缺失（#72709，👍6 最高赞）
   - OAuth 发现受 Cloudflare 拦截（#72673）

### 📌 正向信号

- 拼写检查功能的加入（v2.1.235）表明团队在持续打磨编辑体验
- 大量历史 Bug 今日集中关闭，显示维护团队在积极清理积压
- 安全相关的模型自循环问题已通过 PR #87395 修复

---

> 📅 **下一期日报时间**: 2026-08-20  
> 🔄 数据自动抓取周期: 每 24 小时

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-08-19 | 数据来源：github.com/openai/codex**

---

## 一、今日速览

今日 Codex 仓库连续发布两个 Rust alpha 版本（v0.148.0-alpha.22/23），同时合并了大量内部 PR，涵盖 **Windows 沙箱安全加固、Guardian v2 风险分类改进、MCP 工具钩子启用、Amazon Bedrock 实验性支持** 等重要功能。社区方面，**Windows 浏览器控制故障**和 **macOS Computer Use OOM 崩溃**成为当日最热话题，多个相关 Issue 在 24 小时内集中爆发；长期存在的 Token 异常消耗问题（#14593）评论数已突破 630 条，持续引发用户关注。

---

## 二、版本发布

| 版本 | 类型 | 说明 |
|------|------|------|
| **rust-v0.148.0-alpha.23** | Alpha | CLI 核心库迭代版本 |
| **rust-v0.148.0-alpha.22** | Alpha | CLI 核心库迭代版本 |

> 连续两个 alpha 版本发布表明 CLI 正处于活跃开发周期，建议关注后续稳定版发布的 breaking changes。

---

## 三、社区热点 Issues（Top 10）

### 🔥 1. [#14593] Token 消耗异常快 — 评论 630 / 👍 285
**标签：`bug` `rate-limits`** | 状态：OPEN（创建于 2026-03-13）
> 用户报告 IDE 扩展在无活跃任务时 token 仍被快速消耗，影响 Business 订阅用户。此为社区**历史最热 Issue**，持续 5 个月未解决。
> 🔗 [openai/codex#14593](https://github.com/openai/codex/issues/14593)

### 🖥️ 2. [#39136] Windows 内置浏览器插件初始化失败 — 评论 59 / 👍 17
**标签：`bug` `windows-os` `browser` `safety-check`** | 状态：OPEN
> 最新版 App（26.814.41407）在 Windows 上报错 *"Trusted RPC dependency is not within a trusted code path"*，导致内置浏览器无法使用。**当日新增高热度 Issue**。
> 🔗 [openai/codex#39136](https://github.com/openai/codex/issues/39136)

### 🍎 3. [#38455] macOS Computer Use 反复生成 Worker 导致 V8 OOM 崩溃 — 评论 26 / 👍 11
**标签：`bug` `computer-use` `performance`** | 状态：OPEN
> ChatGPT Desktop 26.810.41047 在 macOS 上空闲 98 秒后即崩溃，崩溃时产生 **316 个线程（187 个 computer-use）**，SIGABRT 通过 node::OOMErrorHandler 触发。**严重影响 macOS 用户体验**。
> 🔗 [openai/codex#38455](https://github.com/openai/codex/issues/38455)

### 🔐 4. [#20500] 支持多命名账户 — 评论 28 / 👍 107
**标签：`enhancement` `auth`** | 状态：OPEN
> 功能请求：同一 App/Connector 支持多个独立授权账户，带明确选择与隐私边界。👍 数破百，**社区高度期待的功能**。
> 🔗 [openai/codex#20500](https://github.com/openai/codex/issues/20500)

### 🔄 5. [#37403] macOS Remote Control 回归：`already has an active writer` — 评论 25 / 👍 18
**标签：`bug` `remote` `regression`** | 状态：OPEN
> 8 月 7 日更新后，macOS 桌面端无法恢复移动端 Remote Control 发起的 CLI 线程。**影响跨设备工作流的核心回归 Bug**。
> 🔗 [openai/codex#37403](https://github.com/openai/codex/issues/37403)

### ☁️ 6. [#37380] Azure Responses API 回归：空函数命名空间描述被拒 — 评论 18 / 👍 40
**标签：`bug` `azure` `CLI` `custom-model`** | 状态：OPEN
> CLI 0.147.0 引入的回归：Azure 自定义 Responses Provider 拒绝空 `functions namespace description`，影响企业级 Azure OpenAI 用户。
> 🔗 [openai/codex#37380](https://github.com/openai/codex/issues/37380)

### 🌐 7. [#39173] Windows 无法控制浏览器（内置或 Chrome）— 评论 18 / 👍 10
**标签：`bug` `windows-os` `browser`** | 状态：OPEN
> 与 #39136 为同类问题，Pro 订阅用户报告 Chrome 和内置浏览器均因 Trusted RPC 校验失败而不可用。**Windows 浏览器功能大面积失效**。
> 🔗 [openai/codex#39173](https://github.com/openai/codex/issues/39173)

### 🤖 8. [#31864] GPT-5.6 Sol 所有请求失败：`collaboration.spawn_agent` 冲突 — 评论 7 / 👍 17
**标签：`bug` `subagent`** | 状态：OPEN
> MultiAgentV2 使用了模型保留的 `collaboration.spawn_agent` 工具名，导致 GPT-5.6 Sol 会话**100% 请求失败**。标记为 Papercuts 2026 优先修复项。
> 🔗 [openai/codex#31864](https://github.com/openai/codex/issues/31864)

### 📊 9. [#39167] Pro 20x 配额一夜从 88% 跳至 100% — 评论 3
**标签：`bug` `rate-limits` `windows-os`** | 状态：OPEN
> 用户报告零活动情况下配额耗尽，时间点与 app 自动更新至 alpha.15 高度吻合。**疑似更新进程后台消耗配额**。
> 🔗 [openai/codex#39167](https://github.com/openai/codex/issues/39167)

### 💰 10. [#39260] 信用使用记录冻结自 8 月 8 日 — 评论 3
**标签：`bug` `rate-limits` `codex-web`** | 状态：OPEN
> 已购 53,000 积分中 85.4%（45,252）被消耗但**零使用记录**，Analytics 页面 10 天未更新。**计费透明度严重问题**。
> 🔗 [openai/codex#39260](https://github.com/openai/codex/issues/39260)

---

## 四、重要 PR 进展（Top 10）

### ✅ [#39296] 启用 MCP 工具钩子（已合并）
通过会话共享 MCP 运行时执行 `mcp_tool` 钩子处理器，限制仅对已连接且策略允许的工具调用。**MCP 生态集成的重要一步**。
> 🔗 [PR#39296](https://github.com/openai/codex/pull/39296)

### ✅ [#39294] 提升 SQLite 日志批处理能力（已合并）
日志队列容量 512→**2,048**，批量插入 128→**512**，刷新间隔 2s→**10s**。**显著降低高频场景下的 I/O 开销**。
> 🔗 [PR#39294](https://github.com/openai/codex/pull/39294)

### ✅ [#39290] `codex doctor` 新增 Windows 沙箱诊断（已合并）
报告沙箱后端配置、拒绝读取限制状态、ACL 更新失败等诊断信息。**提升 Windows 平台可调试性**。
> 🔗 [PR#39290](https://github.com/openai/codex/pull/39290)

### ✅ [#39264] Guardian v2 风险分类改进（已合并）
引入预测性安全审查指导（授权校验、操作风险、不可信证据、浏览器/计算机使用），`action_risk ≥ 0.5` 触发完整审查。**安全模型重大升级**。
> 🔗 [PR#39264](https://github.com/openai/codex/pull/39264)

### ✅ [#39277] 声明实验性 Amazon Bedrock 设置 API（已合并）
新增 `account/bedrock/discover` 和 `account/bedrock/setup` 接口。**Codex 向 AWS 生态扩展的信号**。
> 🔗 [PR#39277](https://github.com/openai/codex/pull/39277)

### ✅ [#39274] Provider 自主认证恢复机制（已合并）
允许模型 Provider 自主识别并恢复认证错误，再回退到 AuthManager。**多 Provider 场景健壮性提升**。
> 🔗 [PR#39274](https://githubai/codex/pull/39274)

### ✅ [#39285] TUI 变更审批显示文件目标路径（已合并）
文件变更审批提示不再空白（修复 #36637），展示受影响的源/目标路径。**CLI 用户体验直接改善**。
> 🔗 [PR#39285](https://github.com/openai/codex/pull/39285)

### ✅ [#39262] 阻止 ConPTY DLL 从当前目录加载（已合并）
修复 Windows PTY 实现中 `conpty.dll` 的裸名查找漏洞，防止目录劫持攻击。**关键安全修复**。
> 🔗 [PR#39262](https://github.com/openai/codex/pull/39262)

### ✅ [#39266] 拒绝权限路径下的继承授权（已合并）
父路径授权不应自动覆盖显式拒绝的子路径，需重新审批。**最小权限原则落地**。
> 🔗 [PR#39266](https://github.com/openai/codex/pull/39266)

### ✅ [#39288] 注册异步消息功能开关（已合并）
新增 `send_async_message` feature flag（默认关闭）。**新通信模式预告**。
> 🔗 [PR#39288](https://github.com/openai/codex/pull/39288)

---

## 五、功能需求趋势

基于全部 50 条活跃 Issue 的标签聚类分析：

| 趋势方向 | 关联 Issue 数 | 代表性需求 |
|----------|:------------:|-----------|
| **🔒 安全与沙箱** | 12+ | Windows Trusted RPC 故障、ConPTY DLL 劫持、沙箱 ACL、Guardian v2 |
| **🌐 浏览器/Computer Use** | 8+ | 内置浏览器初始化失败、Chrome 控制、macOS OOM 崩溃、Intel macOS 不支持 |
| **🔌 MCP 工具兼容性** | 7+ | namespace 包装问题、自定义 Provider 不兼容、工具扁平化选项 |
| **☁️多云/自定义 Provider** | 6+ | Azure 回归、llama.cpp 支持、Bedrock API、跨 Provider 会话交接 |
| **📊 配额与计费透明度** | 5+ | Token 异常消耗、信用记录冻结、夜间配额跳涨 |
| **🔐 多账户与认证** | 4+ | 多命名账户、认证恢复、跨表面同步刷新 |
| **📱 远程控制与跨设备** | 3+ | Remote Control 回归、线程恢复失败 |

---

## 六、开发者关注点（痛点总结）

1. **Windows 平台稳定性堪忧**：Trusted RPC 校验导致浏览器/Computer Use 大面积失效（#39136、#39173、#39252、#39292），路径规范化问题频出（#39209、#39239），成为当日反馈最集中的平台。

2. **macOS Computer Use 存在资源泄漏**：空闲状态下持续生成 worker 线程直至 OOM 崩溃（#38455、#38939），影响 Apple Silicon 用户，属**阻塞性质量问题**。

3. **MCP 工具生态碎片化**：Codex 对 MCP 工具使用 `type: "namespace"` 包装，与多种自定义后端（llama.cpp、MiniMax、Azure）不兼容（#23186、#26977、#31354、#36942），社区强烈要求提供扁平化选项。

4. **0.147.0/0.148.0 引入多项回归**：Azure 空命名空间拒绝（#37380）、Remote Control 断裂（#37403）、MCP 启动误报（#37418），alpha 版本质量引发开发者担忧。

5. **计费不透明持续发酵**：Token 无故消耗（#14593，630 评论）、信用记录冻结（#39260）、配额异常跳涨（#39167、#21708），信任成本上升。

---

> **免责声明**：本日报基于 GitHub 公开数据自动整理，Issue 状态和评论数为数据采集时快照。如需追踪具体 Issue 进展，请访问对应链接订阅通知。

**— Codex Community Daily Report | 2026-08-19 —**

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 | 2026-08-19

---

## 1. 今日速览

**核心主题：Agent 稳定性攻坚与安全加固并行。** 今日无正式版本发布，但 Nightly 版本推出隐私条款修正；社区核心精力集中在修复 **Subagent 状态上报错误、Generalist Agent 卡死、Shell 执行挂起** 等 P1 级阻塞性 Bug。同时，`joneba-google` 主导的 SSR Agent 批量合并了 8 个修复 PR，涵盖 Symlink 支持、OAuth 超时未捕获异常、gVisor 网络兼容、ACP 协议合规等关键稳定性与安全问题。评估基建方面新增 429 限流重试与本地报告工具，标志着 Eval 体系工程化迈进新阶段。

---

## 2. 版本发布

### `v0.56.0-nightly.20260818.g194edea47` (Nightly)
> [Release Notes](https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-nightly.20260818.g194edea47)

*   **隐私合规**：澄清 SSR Agent 的隐私声明措辞与选择选项 (#28820)。
*   **代码质量**：修复集成测试中的 TypeScript strict-null 错误。
*   **定位**：夜ly 构建，侧重于 SSR Agent 相关的合规与工程化修复，非功能性发布。

---

## 3. 社区热点 Issues (Top 10)

按 **优先级、评论热度、用户影响面** 筛选，均为过去 24h 活跃更新。

| # | Issue | 核心问题 | 关注理由 | 状态/标签 |
|---|---|---|---|---|
| **1** | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent 在触及 MAX_TURNS 后仍上报 `status: success` / `GOAL`**，掩盖了中断事实 | **P1 / 12 评论**。导致上层编排误判任务完成，破坏复杂工作流可靠性，属“静默数据损坏”类严重 Bug。 | `priority/p1`, `status/need-retesting` |
| **2** | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist Agent 频繁永久挂起**，甚至建文件夹等简单操作也会触发，禁用 Subagent 可规避 | **P1 / 8 评论 / 8 👍**。核心用户路径阻断，严重影响日常易用性，社区呼声极高。 | `priority/p1`, `status/need-retesting` |
| **3** | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell 命令执行完成后卡在 "Waiting input"**，极简命令也复现 | **P1 / 4 评论 / 3 👍**。Core 层交互死锁，直接导致 CLI 无响应，需紧急修复。 | `priority/p1`, `effort/medium` |
| **4** | [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | **组件级评估体系建设**：76 个 Behavioral Eval、6 模型矩阵，需鲁棒化与自动化 | **P1 / 7 评论**。质量保障基建，关乎后续所有 Agent 能力迭代的回归防护。 | `priority/p1`, `aiq/eval_infra` |
| **5** | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **评估 AST-aware 文件读/搜索/映射价值**：精准读取方法边界、减少 Token 噪音、导航跳转 | **P2 / 7 评论 / 1 👍**。探索下一代代码理解工具链，若有效将显著降低 Turns 与 Token 成本。 | `priority/p2`, `kind/customer-issue` |
| **6** | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **模型极少主动调用 Skills/Sub-agents**，需显式指令才触发 | **P2 / 6 评论**。Agent 自主性不足，限制了复杂任务分解能力，Prompt/系统提示词层面需优化。 | `priority/p2`, `status/need-retesting` |
| **7** | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | **Auto Memory 对低信号会话无限重试**，导致索引膨胀与资源浪费 | **P2 / 5 评论**。后台服务活锁风险，影响长期运行稳定性。 | `priority/p2` |
| **8** | [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | **工具数 > 128 (实为 400) 时触发 400 错误**，建议 Agent 智能限制作用域工具 | **P2 / 3 评论**。规模化扩展瓶颈，涉及 Tool Registry 与 Model Context 窗口管理。 | `priority/p2`, `status/need-information` |
| **9** | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser Subagent 在 Wayland 环境下失败** | **P1 / 4 评论 / 1 👍**。Linux 桌面主流显示协议兼容性缺失，阻断部分用户 Web 自动化场景。 | `priority/p1`, `agent/browser` |
| **10** | [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | **Browser Agent 忽略 `settings.json` 覆盖配置 (如 `maxTurns`)** | **P2 / 3 评论**。配置系统失效，用户无法约束 Browser Agent 行为，一致性缺陷。 | `priority/p2`, `status/need-retesting` |

> **特别关注**：[#20079](https://github.com/google-gemini/gemini-cli/issues/20079) (Symlink Agent 识别失败) 今日已通过 **#28883** 修复并合并。

---

## 4. 重要 PR 进展 (Top 10)

分为 **今日合并的稳定性/安全修复批次** 与 **进行中的核心重构/功能 PR** 两类。

### 🟢 今日合并：SSR Agent 批量修复周 (由 @joneba-google 推进)

| PR | 标题 | 关联 Issue | 影响面 |
|---|---|---|---|
| **[#28883](https://github.com/google-gemini/gemini-cli/pull/28883)** | **Fix: 支持 Symlink 形式的 Agent Markdown 文件** | #20079 | **配置系统完整性**，解决用户通过软链管理共享 Agent 配置的需求。 |
| **[#28873](https://github.com/google-gemini/gemini-cli/pull/28873)** | **Fix: 防止 OAuth 回调超时导致的 Unhandled Promise Rejection** | #28512 | **进程稳定性**，修复认证流程 5 分钟超时后的崩溃隐患。 |
| **[#28870](https://github.com/google-gemini/gemini-cli/pull/28870)** | **Fix: ACP 模式下请求权限前发送 `tool_call` pending 更新** | #21783 | **协议合规 (ACP)**，修复客户端状态不同步导致的 UI 卡顿/报错。 |
| **[#28877](https://github.com/google-gemini/gemini-cli/pull/28877)** | **Fix: 修正流式响应均匀字符(如连续空格)触发的误判循环检测** | #18551 | **Agent 循环控制**，消除误报导致的任务中断。 |
| **[#28876](https://github.com/google-gemini/gemini-cli/pull/28876)** | **Fix: Cloud Shell 默认项目 404 错误处理** | #18062 | **云原生兼容**，修复 GCA Lab 环境下的启动失败。 |
| **[#28869](https://github.com/google-gemini/gemini-cli/pull/28869)** | **Fix: gVisor (runsc) 沙箱下 Host 网络解析失败** | #21331 | **安全沙箱/IDE 集成**，解决 VSCode 扩展在强隔离模式下连不上的问题。 |
| **[#28871](https://github.com/google-gemini/gemini-cli/pull/28871)** | **Fix: 兼容 Claude Code `compact` 压缩匹配器迁移** | #14724 | **迁移体验**，降低从 Claude Code 迁移配置的摩擦。 |

### 🟡 进行中：核心架构与安全重构

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-08-19 | 数据来源：github.com/github/copilot-cli**

---

## 1. 今日速览

今日 Copilot CLI 发布 **v1.0.81-1** 版本，新增 **Gemini 3.7 Flash** 模型支持、沙箱设置快捷键及按 Agent 粒度的用量统计。社区方面，过去 24 小时内 **35 条 Issue** 获得更新，其中 **Sandbox 配置失效问题**（#4521、#4522）成为当日最集中的新增 Bug 反馈，多个与 MCP 集成、模型目录同步相关的长期 Issue 持续活跃。

---

## 2. 版本发布

### v1.0.81-1

| 类别 | 更新内容 |
|------|----------|
| 🆕 **新增** | 支持 **Gemini 3.7 Flash** 模型 |
| 🆕 **新增** | `/sandbox` 中按 `Ctrl+E` 可直接在编辑器中打开 `settings.json` |
| 🆕 **新增** | `--usage-output-file` JSON 输出中增加**按 Agent 维度的用量指标** |
| ⚡ **改进** | 计划管理器（Schedule Manager）中可用 `x` 键移除 `/every` 和 `/after` 定时提示 |
| 🐛 **修复** | 关闭 `allow-all` 相关问题（描述截断） |

> 🔗 [Release 详情](https://github.com/github/copilot-cli/releases)

---

## 3. 社区热点 Issues（Top 10）

### 🔥 #4390 — 组织启用模型从目录中丢失（Claude Sonnet 5/Opus 5、Kimi K3）
- **状态：** OPEN | 👍 7 | 💬 10 条评论
- **问题：** Copilot Business 组织显式启用的模型在 CLI 的有效模型目录中不可见，所有 Anthropic 模型均无法选择
- **为何重要：** 影响企业用户的核心功能——多模型切换能力，评论活跃度高
- 🔗 [查看 Issue](https://github.com/github/copilot-cli/issues/4390)

### 🔥 #2904 — 自定义 Agent YAML 前置元数据应支持 Reasoning Effort
- **状态：** OPEN | 👍 **20**（最高赞）| 💬 7 条评论
- **需求：** `.agent.md` 文件目前只能全局设置 `--effort=LEVEL`，无法为每个 Agent 单独配置推理强度
- **为何重要：** 高赞长期需求，精细化 Agent 控制是企业用户的强诉求
- 🔗 [查看 Issue](https://github.com/github/copilot-cli/issues/2904)

### 🔥 #2958 — 支持按模式配置默认模型（Plan 模式 vs Autopilot 模式）
- **状态：** OPEN | 👍 **16** | 💬 4 条评论
- **需求：** 允许用户为 Plan 模式和 Autopilot 模式分别设置不同的默认 AI 模型
- **为何重要：** 高赞功能请求，优化工作流体验的关键改进方向
- 🔗 [查看 Issue](https://github.com/github/copilot-cli/issues/2958)

### 🔥 #4313 — 支持在当前对话历史中滚动浏览
- **状态：** OPEN | 💬 8 条评论
- **需求：** 当前鼠标滚轮/PageUp/PageDown 无法用于滚动对话历史，影响长会话使用体验
- **为何重要：** 终端渲染层面的基础 UX 问题，评论数第二高
- 🔗 [查看 Issue](https://github.com/github/copilot-cli/issues/4313)

### 🔥 #3682 — 支持不重启 CLI 即可刷新 BYOK 提供商凭据
- **状态：** OPEN | 👍 6 | 💬 2 条评论
- **问题：** 使用短生命周期的 BYOK 凭据（如 Azure AD OAuth token）时，CLI 仅在启动时读取一次，过期后必须重启
- **为何重要：** 企业安全场景下的高频痛点
- 🔗 [查看 Issue](https://github.com/github/copilot-cli/issues/3682)

### 🔥 #4490 — Atlassian MCP OAuth 认证在 1.0.80 中回归失败
- **状态：** OPEN | 💬 3 条评论
- **问题：** 升级到 1.0.80 后 RFC 8414 §3.3 合规性检查导致 Atlassian MCP OAuth 连接失败（1.0.78 正常）
- **为何重要：** 版本回归 Bug，直接影响 MCP 生态集成
- 🔗 [查看 Issue](https://github.com/github/copilot-cli/issues/4490)

### ⚠️ #4521 — Sandbox 无法禁用（今日新增）
- **状态：** OPEN（Triage）| 👍 2 | 💬 1 条评论
- **问题：** 配置显示 Sandbox 已禁用，但状态栏仍显示启用，且执行时强制使用沙箱
- **为何重要：** 与新版本高度相关的新报 Bug，可能与 v1.0.81 变更有关
- 🔗 [查看 Issue](https://github.com/github/copilot-cli/issues/4521)

### ⚠️ #4522 — Copilot CLI 1.0.81 在策略未确定时强制启用 Sandbox（今日新增）
- **状态：** OPEN（Triage）| 👍 1 | 💬 1 条评论
- **问题：** 即使显式设置 `"sandbox": {"enabled": false}`，当服务端策略暂时不可用时仍强制开启沙箱
- **为何重要：** 同为 Sandbox 相关新 Bug，两个 Issue 相互印证该区域存在回归
- 🔗 [查看 Issue](https://github.com/github/copilot-cli/issues/4522)

### 🔧 #3162 — 自定义 MCP 服务器被误报为策略阻止（已关闭）
- **状态：** CLOSED | 💬 7 条评论
- **问题：** 已在 MCP Registry 注册的自定义服务器被错误标记为 "blocked by policy"
- **为何重要：** 已关闭但讨论量大，说明 MCP 策略校验逻辑是社区关注焦点
- 🔗 [查看 Issue](https://github.com/github/copilot-cli/issues/3162)

### 🔧 #4096 — 第三方 MCP 工具在 CLI 会话中缺失（OAuth Token 未桥接）（已关闭）
- **状态：** CLOSED | 👍 2 | 💬 6 条评论
- **问题：** 通过 App UI 完成 OAuth 的 MCP 服务器显示"已连接"，但其工具在 CLI 中始终不可用
- **为何重要：** App ↔ CLI 的 OAuth Token 传递是核心架构问题
- 🔗 [查看 Issue](https://github.com/github/copilot-cli/issues/4096)

---

## 4. 重要 PR 进展

过去 24 小时内仅 **1 条 PR** 获得更新：

### #3163 — ViewSonic 监控器
- **状态：** OPEN | 作者: tijuks
- **内容：** 为 #2591、#3561、#3559 等 Issue 添加 GitHub Action Runner 监控
- 🔗 [查看 PR](https://github.com/github/copilot-cli/pull/3163)

> **注：** 当日 PR 活跃度较低，主要开发活动体现在 Issue 讨论和版本发布上。

---

## 5. 功能需求趋势

基于全部 Issues 数据分析，社区关注呈现以下趋势：

| 趋势方向 | 代表 Issue | 强度 |
|---------|-----------|------|
| **🔷 MCP 集成深度优化** | #4490, #4211, #4392, #3248, #4096, #3162, #4206, #4515 | ⭐⭐⭐⭐⭐ |
| **🔷 模型精细化管理** | #4390, #2904, #2958, #1990 | ⭐⭐⭐⭐ |
| **🔷 Sandbox 沙箱机制** | #4521, #4522, #4516 | ⭐⭐⭐⭐ |
| **🔷 终端交互体验** | #4313, #2622, #4438 | ⭐⭐⭐ |
| **🔷 企业/安全场景** | #3682, #4482, #3248 | ⭐⭐⭐ |
| **🔷 生态兼容性** | #4440（兼容 Claude rules）、#4035（语音安装） | ⭐⭐ |

**核心洞察：**
1. **MCP 生态集成** 是当前最大热点——涉及 OAuth、BigInt 序列化、进程泄漏、策略校验等多个子领域
2. **模型控制粒度** 需求强烈——per-Agent reasoning effort、per-mode 默认模型、BYOK 凭据热刷新
3. **Sandbox 在新版中出现回归**，需密切关注后续修复

---

## 6. 开发者关注点（痛点总结）

| 痛点类别 | 具体表现 | 影响 |
|---------|---------|------|
| **🔴 版本回归** | 1.0.80/1.0.81 引入 Atlassian OAuth 失效、Sandbox 强制启用等新问题 | 生产环境升级受阻 |
| **🔴 MCP 进程泄漏** | stdio 子进程未正确回收，导致 CPU 占满（#3698, #4392） | 长时间运行稳定性差 |
| **🟠 企业策略冲突** | 组织模型目录不同步、MCP 策略误判、Enterprise URL 回退失败 | 企业客户采用障碍 |
| **🟠 配置热加载缺失** | AGENTS.md 启动后不重载、BYOK 凭据需重启刷新 | 开发调试效率低 |
| **🟡 用量计量不准** | Kimi K3 等 AIC 显示严重低估（#4511） | 成本管控困难 |
| **🟡 跨工具规则冗余** | 需同时维护 `.github/instructions` 和 `.claude/rules`（#4440） | 多 AI 工具协作成本高 |

---

*📊 本期数据：1 个 Release · 35 条活跃 Issue · 1 条活跃 PR*

> 📅 下期日报将于明日自动生成。如有补充或修正建议，欢迎反馈。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报（2026-08-19）

## 今日速览

过去 24 小时内仓库无新版本发布，社区活跃度集中在两个方向：一是 **Web UI 渲染缺陷**（#2607），涉及自定义 OpenAI 兼容提供商下助手消息在重新挂载后异常渲染的问题；二是 **实战基准测试报告**（#2608），社区成员公开了 K3 + Kimi Code 在量化策略生成中的完整测试结果，具备较强传播价值。PR 方面，一项 SSH 日志修复（#848）已关闭，另有「知识平面」新功能提案（#2606）处于开放状态。

---

## 社区热点 Issues（共 2 条）

### #2607 Web UI：非 Kimi（OpenAI 兼容）提供商下助手消息在标签页切换/刷新后按行重渲染
- **作者**：chenxupeng1990-eng｜**创建**：2026-08-18｜**评论**：1｜**状态**：OPEN
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2607
- **重要性**：直接影响 Web UI 使用体验——会话切换或刷新后，原本正常的流式渲染退化为「每行一个 delta」的窄竖排布局，对依赖自定义 OpenAI 兼容提供商的用户构成明显障碍。该问题与渲染状态恢复、前端组件生命周期管理相关，是 Web UI 稳定性方向的典型反馈，目前已有 1 条评论，关注度正逐步积累。

### #2608 K3 + Kimi Code 样本外量化策略生成基准测试（完整报告开源）
- **作者**：frank-quant｜**创建**：2026-08-18｜**评论**：0｜**状态**：OPEN
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2608
- **重要性**：社区成员以双语频道（Bilibili/YouTube）形式公开了 Kimi Code CLI 在真实量化交易场景（Freqtrade 上 ETH 永续期货策略）中的完整基准测试，属于典型的实战验证类反馈，可为主办方提供有价值的性能与能力参考。传播渠道具有一定影响力，对社区口碑有潜在正面作用。

---

## 重要 PR 进展（共 2 条）

### #848 fix(kaos)：启用时记录 SSH 失败日志（已关闭）
- **作者**：powerfooI｜**创建**：2026-02-02｜**更新**：2026-08-18｜**状态**：CLOSED
- **链接**：https://github.com/MoonshotAI/kimi-cli/pull/848
- **内容**：针对 kaos 模块补充 SSH 失败时的日志记录能力，便于在启用 SSH 场景下进行问题诊断。该 PR 自 2 月创建至 8 月更新后关闭，周期较长，具体合并结果需在仓库内进一步确认。

### #2606 Dev/knowledge plane（开放）
- **作者**：SoMiReMiReDo｜**创建**：2026-08-18｜**更新**：2026-08-18｜**状态**：OPEN
- **链接**：https://github.com/MoonshotAI/kimi-cli/pull/2606
- **内容**：提议引入「知识平面」（knowledge plane）相关能力，属于新增功能方向。按仓库规范，新功能应先与维护者通过 Issue 沟通确认，该 PR 目前仍处开放状态，是否会被采纳尚待维护者反馈。

---

## 功能需求趋势

基于过去 24 小时内可获取的 2 条 Issue 与 2 条 PR，可提炼出以下方向（样本量有限，趋势仅作参考）：

- **Web UI 渲染与状态一致性**：#2607 表明用户对会话重新挂载后的渲染稳定性、流式输出恢复能力有明确要求，这类问题在非官方提供商场景下更为突出。
- **第三方 / OpenAI 兼容提供商适配**：对非 Kimi 提供商的兼容行为差异是当前高频关注点，涉及渲染、消息结构等细节层面。
- **真实业务场景验证**：#2608 显示社区乐于将 CLI 用于量化交易等专业场景并公开评测数据，侧面反映出用户对模型能力在实际任务中的可靠性比较在意。
- **知识管理类功能探索**：#2606 的「知识平面」提案暗示社区存在对知识组织、持久化能力的需求，属于较早期的功能方向试探。

---

## 开发者关注点

- **Web UI 渲染恢复问题**：切换标签页/刷新导致消息以单行 delta 形式重新渲染，严重损害阅读体验，是当前最直观的痛点（#2607）。
- **自定义提供商场景的兼容性**：使用 OpenAI 兼容接口时行为不一致，说明该路径下仍需更多测试与适配投入（#2607）。
- **SSH 连接的可观测性**：#848 反映出开发者希望获得更完善的 SSH 失败日志，以快速定位远程执行类问题。
- **新功能提交流程**：#2606 的情况提醒贡献者，按仓库要求应先通过 Issue 与维护者对齐需求，否则 PR 存在被关闭或忽视的风险。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报（2026-08-19）

## 今日速览

过去 24 小时社区无新版本发布，但出现了大量围绕 **OpenCode Go 配额计费异常** 的反馈（至少 7 个 Issue），多个用户报告配额消耗速度远超显示成本，已成为社区最核心的争议点。此外，**Linear Agent 集成**（获得 34 👍）与 **/resume、/pause 命令**（获得 28 👍）两项此前提出的高票功能需求仍在持续获得关注。桌面端与 TUI 的交互稳定性问题也贡献了相当比例的反馈。

---

## 版本发布

【无】过去 24 小时无新版本发布。社区当前最新版本约为 v1.18.18（桌面端）。

---

## 社区热点 Issues（Top 10）

1. **[#3787] Linear Agent 支持**（已关闭）
   - 作者：knotbin ｜ 👍34 ｜ 💬17
   - 该类 Linear Agent 是社区呼声最高的功能之一，允许直接将 Linear issue 指派给 Agent 处理。尽管该 Issue 已关闭，但 34 个赞同与 17 条讨论表明该需求有大量潜在用户支持。
   - https://github.com/anomalyco/opencode/issues/3787

2. **[#42985] OpenCode Go 配额消耗约为 DeepSeek V4 Flash 显示成本的 4 倍**（开放）
   - 作者：tnn226 ｜ 👍7 ｜ 💬15
   - 用户显示成本 $3.31，但 Go 配额消耗远超此数。如果计价逻辑错误将直接影响所有 Go 订阅用户的开支，是本日最受关注的计费类 Issue。
   - https://github.com/anomalyco/opencode/issues/42985

3. **[#7648] 设置项：TUI 流式输出时禁止自动滚动**（已关闭）
   - 作者：alexx-ftw ｜ 👍18 ｜ 💬11
   - 用户希望阅读时不被自动滚屏打断。18 个赞同表明 TUI 交互细节在重度用户群体中关注度较高，且此前一直没有对应设置项。
   - https://github.com/anomalyco/opencode/issues/7648

4. **[#7226] 实现 /resume 和 /pause 命令**（已关闭）
   - 作者：zippeurfou ｜ 👍28 ｜ 💬8
   - 用户需要暂停/恢复会话而不丢失上下文，目前只能通过 Esc 中断再手动恢复。28 个赞同表达了对会话控制能力的强烈需求。
   - https://github.com/anomalyco/opencode/issues/7226

5. **[#38193] 桌面版 "Add server" 对话框：Server name / Username / Password 字段无法编辑（v1.18.4）**（已关闭）
   - 作者：sergiofspedro ｜ 💬7
   - 桌面端多服务器配置的核心流程存在阻断性 Bug，三个字段无法输入，影响所有需要配置多服务器的桌面用户。
   - https://github.com/anomalyco/opencode/issues/38193

6. **[#37489] 性能问题：切换模式或压缩期间上下文缓存失效**（开放）
   - 作者：ducon43 ｜ 💬6
   - 使用本地 LLM（vLLM/Ollama）时，切换模式或 compaction 导致上下文缓存失效，大幅影响本地推理效率。
   - https://github.com/anomalyco/opencode/issues/37489

7. **[#34737] 移动项目目录后仍打开旧的已删除路径**（开放）
   - 作者：afsharmn ｜ 💬5
   - 项目从 C:\ 移至 D:\ 后，重新打开仍指向已删除的旧路径。项目管理的路径处理逻辑存在缺陷。
   - https://github.com/anomalyco/opencode/issues/34737

8. **[#43023] OpenCode Go 配额计量不一致：月度使用率超过周度使用率**（开放）
   - 作者：Guard42 ｜ 💬5
   - 与 #42985 同属计费异常，但角度不同（月度/周度百分比矛盾）。多个独立用户报告类似问题，指向系统性的计费逻辑存在 Bug。
   - https://github.com/anomalyco/opencode/issues/43023

9. **[#42935] OpenCode Go 配额在约 20 分钟内耗尽，DeepSeek V4 Flash 缓存读取骤降为 0**（开放）
   - 作者：Blemeh ｜ 👍3 ｜ 💬4
   - 用量从 11% 骤升至 100%，且缓存读取归零，可能暗示缓存计费或配额扣减逻辑出现严重异常，属最严重的计费相关报告之一。
   - https://github.com/anomalyco/opencode/issues/42935

10. **[#34473] OpenCode 随机中断响应**（开放）
    - 作者：dattarohu-coder ｜ 💬4
    - 模型在思考或输出过程中随机停止响应且无错误抛出，只播放完成音效。影响会话连续性，对日常使用造成较大干扰。
    - https://github.com/anomalyco/opencode/issues/34473

---

## 重要 PR 进展（Top 10）

1. **[#37684] MCP：将运行时添加的 MCP 工具桥接至核心工具注册表**（已合并）
   - 作者：paperview
   - 修复运行时 MCP 功能在用户主提示路径上不可用的问题。此前存在两个相互独立的 MCP 服务导致工具无法从核心路径调用。
   - https://github.com/anomalyco/opencode/pull/37684

2. **[#37678] feat(session)：通过 PromptInput 与 agent 配置暴露 toolChoice**（已合并）
   - 作者：paperview
   - 内部 LLM 层已支持 toolChoice，但会话层未暴露。此 PR 补齐缺口，对应多个历史相关 issue。
   - https://github.com/anomalyco/opencode/pull/37678

3. **[#37669] 修复：恢复格式错误的工具输入**（已合并）
   - 作者：opencode-agent[bot]
   - 将畸形工具参数表示为不可执行的 `tool-input-error`，仅使相关步骤失败而非中断整个会话，并向模型返回协议安全的反馈。
   - https://github.com/anomalyco/opencode/pull/37669

4. **[#37668] TUI：新增服务器切换器**（已合并）
   - 作者：opencode-agent[bot]
   - 为 V2 TUI 添加客户端注册表与 `<leader>w` 服务器选择器；切换时重新挂载服务器作用域的 provider 树，防止会话/路由/缓存等跨服务器泄漏。
   - https://github.com/anomalyco/opencode/pull/37668

5. **[#37634] MCP：排空 stderr 管道、限制并发启动、增加重试与退避**（已合并）
   - 作者：S23Web3
   - 修复 Windows 上 stdio MCP 服务器 `-32000: Connection closed` 问题的三项修复，提升 MCP 连接稳定性。
   - https://github.com/anomalyco/opencode/pull/37634

6. **[#37653] 批量处理 shell 输出更新**（已合并）
   - 作者：flowluap
   - 关闭 #30001，合并元数据更新并使用有界尾部输出队列，优化 shell 工具的高频输出性能。
   - https://github.com/anomalyco/opencode/pull/37653

7. **[#37625] 规范化 kimi 工具 schema 以适配 mfjs**（已合并）
   - 作者：StarpTech
   - 将 Kimi 工具 schema 通过模型无关兼容层处理，避免不兼容的自定义/MCP 工具导致整个提示被拒绝。
   - https://github.com/anomalyco/opencode/pull/37625

8. **[#37624] 修复：重放历史时跳过空推理步骤**（已合并）
   - 作者：mihneaptu
   - 修复 Kimi K3 在 OpenCode Go 上重放历史时的 400 错误路径，对应 #37651。
   - https://github.com/anomalyco/opencode/pull/37624

9. **[#37679] 修复：从权限请求中丢弃 undefined 元数据值**（已合并）
   - 作者：rvaccone
   - 关闭 #37650。待定的 glob/grep 权限中缺失的可选输入以 undefined 形式存在，可能导致下游处理异常。
   - https://github.com/anomalyco/opencode/pull/37679

10. **[#37603] TUI：基于 Quark 部件槽重建会话时间线**（已合并）
    - 作者：kitlangton
    - 每次 delta 更新时重写消息 content 数组导致下游方向重扫描，此 PR 改为基于部件槽机制重建，降低流式渲染的每 delta 开销。
    - https://github.com/anomalyco/opencode/pull/37603

---

## 功能需求趋势

从本期 Issues 中可提炼出以下社区最关注的功能方向：

- **配额与计费透明度**：占比最高（#42985、#43023、#42935、#40031、#39891、#43149、#41391 等 7+ 条），用户普遍希望配额消耗与显示成本一致，且能按模型/时段拆分明细。
- **会话控制与恢复能力**：/resume、/pause 命令（#7226）、会话中途卡死无法恢复（#43277）、随机中断（#34473）等，反映用户对会话生命周期管理的需求强烈。
- **模型兼容性**：Gemini 函数调用 schema 错误（#34130）、Kimi 历史回放错误（PR 侧）、采样参数硬编码（#42775），说明社区跨越多个模型 Provider，需要更通用的适配层。
- **TUI/桌面端交互细节**：TUI 自动滚动控制（#7648）、TUI 中 question 工具提示不可见（#43196）、Web UI 按钮重叠（#43295）、桌面 Add server 字段无法编辑（#38193）等，桌面/TUI 体验仍是高频反馈领域。
- **性能与存储**：上下文缓存失效导致本地模型效率低（#37489）、event 表存储膨胀至数 GB（#41175），反映重度用户对资源开销的敏感度。

---

## 开发者关注点

1. **配额计费异常成为第一大痛点**：7+ 个独立用户报告配额百分比与美元成本不一致，部分案例配额在 20 分钟内耗尽、缓存读取骤降为 0。这不仅是显示问题，可能涉及配额扣减逻辑的实质性 Bug，亟需官方介入。
2. **会话可靠性**：随机中断响应、会话永久卡死（跨重启仍无法恢复）等问题的反馈说明会话状态管理存在结构性缺陷，对依赖长会话的用户影响很大。
3. **MCP 集成稳定性**：Windows 环境下的 stdio 连接失败、MCP 工具在核心路径不可用等已有多项 PR 修复，说明 MCP 生态正成为重要使用场景但稳定性仍需加强。
4. **本地模型与缓存效率**：切换模式/压缩导致上下文缓存失效，直接影响 vLLM/Ollama 等本地推理的体验，值得继续关注缓存复用策略的优化。
5. **数据存储膨胀**：event 表存储完整消息快照导致数据库膨胀至数 GB的问题在新版本中仍待解决，社区已有第三方清理工具出现，说明用户已开始自行面对这一负担。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 | 2026-08-19

> **数据来源**: [github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono)（earendil-works/pi）
> **统计周期**: 过去 24 小时 | **Issues**: 50 条 | **PRs**: 27 条

---

## 1. 今日速览

今日 Pi 社区活动极为活跃， Issues 和 PRs 均保持高位。**TUI 交互体验问题集中爆发**——长对话闪屏、图片渲染异常、界面跳动等 UI 问题占据大量讨论。同时，**多 Provider 适配持续推进**：Anthropic 回退计费修复经历 revert 后重新提交、Bedrock Mantle 新 API 面支持进入 WIP 阶段、百度千帆 Provider 提案获关注。Compaction（上下文压缩）机制成为深水区议题，多个 Issue 揭示了自动压缩在 agentic 运行期间不触发的根本性问题。

---

## 2. 版本发布

过去 24 小时内 **无新 Release 发布**。

---

## 3. 社区热点 Issues（Top 10）

### 🔥 #8281 — TUI 长对话全屏闪烁问题
| 字段 | 内容 |
|------|------|
| 状态 | CLOSED (bug, no-action) |
| 评论 | 4 |
| 作者 | wlynxg |

**问题**: 当交互模式下 transcript 超过约 1 万行时，视口上方内容变更会触发整屏清除重绘，产生明显闪烁，持续发生。
**重要性**: ⭐⭐⭐⭐⭐ — 直接影响重度用户的日常使用体验，评论数并列最高。
🔗 [Issue #8281](https://github.com/earendil-works/pi/issues/8281)

---

### 🔥 #8251 — GitHub Enterprise Copilot 登录因并发策略请求触发 429 失败
| 字段 | 内容 |
|------|------|
| 状态 | CLOSED (no-action) |
| 评论 | 4 |
| 作者 | harry2206 |

**问题**: pi 0.84.0/0.84.1 中 `enableAllGitHubCopilotModels()` 通过 `Promise.all` 并发发送所有模型策略请求，导致设备流登录成功后立即被自身限流。
**重要性**: ⭐⭐⭐⭐⭐ — 影响 Enterprise 用户的核心登录流程，评论数最高。
🔗 [Issue #8251](https://github.com/earendil-works/pi/issues/8251)

---

### 📌 #6339 — 自动压缩阈值在 Agentic 运行期间永不评估
| 字段 | 内容 |
|------|------|
| 状态 | CLOSED (no-action) |
| 评论 | 3 |
| 作者 | josephkimani |

**问题**: `compaction.reserveTokens` 暗示超出 `contextWindow - reserveTokens` 时主动压缩，但实际检查仅在 **运行边界** 执行（prompt/continue 解析后），单次 agentic 运行中永远不会触发。
**重要性**: ⭐⭐⭐⭐⭐ — 揭示 compaction 机制的架构级缺陷，长期未解决。
🔗 [Issue #6339](https://github.com/earendil-works/pi/issues/6339)

---

### 📌 #8138 — 将 OpenAI Codex "Sorry, something went wrong" 归为可重试错误
| 字段 | 内容 |
|------|------|
| 状态 | **OPEN** |
| 评论 | 2 |
| 作者 | mitch-fultz |

**提案**: 将 openai-codex 的瞬态响应 `^Sorry, something went wrong$` 在 pi-ai 重试分类中标记为可重试。
**重要性**: ⭐⭐⭐⭐ — 直接改善用户面对后端间歇性错误的体验。
🔗 [Issue #8138](https://github.com/earendil-works/pi/issues/8138)

---

### 📌 #8309 — 长对话执行命令时界面跳至顶部再回弹
| 字段 | 内容 |
|------|------|
| 状态 | CLOSED (bug, no-action) |
| 评论 | 2 |
| 作者 | AVCaleb |

**问题**: 对话变长后，每次执行新命令界面都会先跳到顶部再返回，Mac 和 Windows 均复现。
**重要性**: ⭐⭐⭐⭐ — 与 #8281 同属 TUI 长对话体验问题簇，用户困扰已久。
🔗 [Issue #8309](https://github.com/earendil-works/pi/issues/8309)

---

### 📌 #8323 — OpenAI 客户端创建时未设置超时
| 字段 | 内容 |
|------|------|
| 状态 | CLOSED (untriaged) |
| 评论 | 2 |
| 作者 | mvdbos |

**问题**: `createClient` 未传 `timeout` 参数，回退到 OpenAI SDK 默认 600s。本地模型思考超 10 分钟会被中途截断。
**重要性**: ⭐⭐⭐⭐ — 影响使用本地/慢速模型的用户群体。
🔗 [Issue #8323](https://github.com/earendil-works/pi/issues/8323)

---

### 📌 #8282 — Windows 下 find 扫描大目录时进程卡死
| 字段 | 内容 |
|------|------|
| 状态 | CLOSED (bug, no-action) |
| 评论 | 2 |
| 作者 | qq458249269 |

**问题**: 使用 `find` 扫描如 `C:\Windows` 等文件巨多的目录时会卡死，CPU 占满且无输出。建议默认改用 `fd`。
**重要性**: ⭐⭐⭐⭐ — Windows 平台高频痛点。
🔗 [Issue #8282](https://github.com/earendil-works/pi/issues/8282)

---

### 📌 #8286 — openai-completions 在真实网络下静默失败
| 字段 | 内容 |
|------|------|
| 状态 | CLOSED (no-action) |
| 评论 | 2 |
| 作者 | wsungAhn |

**问题**: 使用远程 Ollama 主机时非确定性失败（空输出或幻觉响应），但同一配置走 `127.0.0.1` 100% 成功。
**重要性**: ⭐⭐⭐⭐ — 涉及网络层可靠性，影响自托管用户。
🔗 [Issue #8286](https://github.com/earendil-works/pi/issues/8286)

---

### 📌 #8285 — Anthropic 回退模型用量按请求模型计费（价格偏差）
| 字段 | 内容 |
|------|------|
| 状态 | **OPEN** |
| 评论 | 1 |
| 作者 | yearth |

**问题**: Anthropic 服务端回退返回 `claude-opus-4-8` 后，pi 仍用请求的 `claude-fable-5` 模型计算费用，导致成本显示严重偏低。
**重要性**: ⭐⭐⭐⭐ — 计费准确性问题，已引发 PR #8308 → revert → PR #8319 的修复链。
🔗 [Issue #8285](https://github.com/earendil-works/pi/issues/8285)

---

### 📌 #8300 — 允许两个进程共享同一会话文件（无锁检测）
| 字段 | 内容 |
|------|------|
| 状态 | CLOSED (no-action) |
| 评论 | 1 |
| 作者 | wangjianming |

**问题**: 两个 pi 进程可同时打开并追加同一 session JSONL，无文件锁或进程级检测，导致分叉和跨窗口投递混乱。
**重要性**: ⭐⭐⭐⭐ — 数据一致性风险，影响多窗口工作流。
🔗 [Issue #8300](https://github.com/earendil-works/pi/issues/8300)

---

## 4. 重要 PR 进展（Top 10）

| # | PR 标题 | 状态 | 说明 |
|---|---------|------|------|
| **#8327** | [fix(tui): yield long markdown rendering](https://github.com/earendil-works/pi/pull/8327) | ✅ Merged | 大 Markdown 渲染阻塞 TUI 事件循环的修复；引入带截止时间的 RenderContext，防止终端冻结 |
| **#8326** | [feat: add disabledCommands setting](https://github.com/earendil-works/pi/pull/8326) | ✅ Merged | 新增 `disabledCommands` 设置，允许禁用 `/share`、`/export` 等内置命令（安全/合规需求） |
| **#8316** | [feat: add agent_recovery_exhausted extension hook](https://github.com/earendil-works/pi/pull/8316) | ✅ Merged | 新增 `agent_recovery_exhausted` 扩展钩子，原生重试和溢出恢复耗尽后触发，支持切换模型继续会话 |
| **#8314** | [fix(ai): round-trip Bedrock redacted reasoning](https://github.com/earendil-works/pi/pull/8314) | ✅ Merged | 修复 Bedrock Converse 加密推理内容 (`redactedContent`) 跨轮次丢失的问题 |
| **#8303** | [fix: collapse tool result images until expanded](https://github.com/earendil-works/pi/pull/8303) | ✅ Merged | 修复折叠工具输出中图片仍完整渲染的 bug（Kitty/iTerm 图形协议） |
| **#8275** | [feat: generalize thinking token budget fields](https://github.com/earendil-works/pi/pull/8275) | ✅ Merged | 泛化 thinking token 预算字段支持，覆盖 vLLM/Qwen/llama.cpp 等不同提供商 |
| **#8320/#8324** | [feat: add OpenAI-compatible provider to /login flow](https://github.com/earendil-works/pi/pull/8320) | ✅ Merged | 在 `/login` 流程中添加 OpenAI 兼容 API 提供商入口，引导式配置 base URL / model / key |
| **#8254** | [fix: prevent copilot policy login rate limits](https://github.com/earendil-works/pi/pull/8254) | 🔄 Open | 修复 Copilot 登录并发策略请求导致的 429 问题：先获取目录、仅更新未配置模型、限流重试 |
| **#8319** | [fix(ai): anthropic fallback usage (redo)](https://github.com/earendil-works/pi/pull/8319) | 🔄 Open | Anthropic 回退计费修复 v2（#8308 被 revert 后重写），正确传递实际返回模型用于费用计算 |
| **#8307** | [feat: enable experimental cache-friendly compaction](https://github.com/earendil-works/pi/pull/8307) | 🔄 Open | 启用实验性缓存友好压缩：将压缩请求附加到主会话以复用缓存，替代昂贵的独立请求 |

---

## 5. 功能需求趋势分析

基于全部 50 条 Issues，社区关注方向呈现以下分布：

```
┌─────────────────────────────────────────────────────┐
│                  功能需求热力图                       │
├──────────────────┬───────────────────────────────────┤
│  🖥️ TUI/UX 体验   │ ████████████████████  ~35%       │
│     闪屏/跳动/渲染 │                                   │
├──────────────────┼───────────────────────────────────┤
│  🔌 Provider 适配 │ ██████████████        ~22%       │
│     超时/UA/回退   │                                   │
├──────────────────┼───────────────────────────────────┤
│  🧠 Compaction   │ ██████████            ~15%       │
│     压缩触发/策略  │                                   │
├──────────────────┼───────────────────────────────────┤
│  🔌 新 Provider  │ ███████               ~12%       │
│     千帆/Mantle  │                                   │
├──────────────────┼───────────────────────────────────┤
│  🔧 扩展/钩子    │ █████                 ~8%        │
│     自定义恢复/钩子│                                  │
├──────────────────┼───────────────────────────────────┤
│  🪟 Windows      │ ████                  ~5%        │
│     find/BOM/性能 │                                  │
├──────────────────┼───────────────────────────────────┤
│  🔒 安全/合规    │ ██                    ~3%        │
│     禁用命令/锁   │                                  │
└──────────────────┴───────────────────────────────────┘
```

**核心趋势**:
1. **TUI 可扩展性瓶颈凸显** — 长对话场景下的渲染性能和视觉稳定性成为头号痛点
2. **Provider 层持续碎片化** — OpenAI 兼容生态、Anthropic 回退链路、Bedrock Mantle 新接口并行推进
3. **Compaction 进入深水区** — 从"能否压缩"转向"何时/如何智能压缩"，涉及缓存复用和运行中触发
4. **扩展能力受关注** — `agent_recovery_exhausted`、pre-persistence hook 等反映高级用户对定制化控制的需求

---

## 6. 开发者关注点 & 痛点总结

| 痛点类别 | 具体表现 | 相关 Issue |
|----------|----------|------------|
| **长会话体验崩塌** | 1万+行 transcript 导致闪屏(#8281)、跳动(#8309)、图片截断(#8306)，几乎不可用 | #8281, #8309, #8306, #8304 |
| **Compaction 黑盒行为** | 自动压缩仅在边界评估(#6339)、零 usage 提供商永不触发(#8328)、无法与 prompt 交错排队(#8301) | #6339, #8328, #8301 |
| **Provider 兼容性陷阱** | 无 timeout 截断本地模型(#8323)、UA 泄露(#8305)、精确长度截断误判(#8322)、streamSimple 丢失超时(#8321) | #8323, #8305, #8322, #8321 |
| **Windows 平台劣势** | find 卡死(#8282)、npm 安装慢 5 倍(#8299)、BOM 静默禁用扩展(#8310) | #8282, #8299, #8310 |
| **工具调用竞态** | read+edit 同文件报 EOF(#8318)、session 文件无锁共享(#8300)、extension reload 工具名回退(#8311) | #8318, #8300, #8311 |
| **计费准确性** | Anthropic 回退模型费用低估(#8285)，引发 PR revert 事件 | #8285, #8308, #8313, #8319 |

---

> 📝 **编者注**: 本日报基于 GitHub 公开数据自动整理，Issues/PRs 状态截至 2026-08-19。如需追踪特定 Issue 进展，建议订阅对应 GitHub 通知。

**— Pi 社区技术分析团队**

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报

**日期：2026-08-19** | **数据来源：github.com/QwenLM/qwen-code**

---

## 一、今日速览

今日 Qwen Code 社区的核心动态围绕**多 Agent 协作与跨会话通信**展开：`feat(core)` 引入 live-session 注册表与 `qwen sessions ps` 命令，配合多会话消息传递 RFC 形成完整链路；同时多项 P2 级 Bug 修复集中在 Agent Team 成员消息路由、`/compress` 状态刷新、Web Shell 工件面板等高频痛点。CI 侧 `dsw-eas-full` 全量基准测试进入隔离分析阶段，自动化修复（autofix）流水线持续推进"增长预算制动"等机制升级。

---

## 二、版本发布

### 🚀 v0.21.11-nightly.20260818.259951c53e

本次 nightly 主要变更：

- **feat(core)**：新增 live-session 注册表与 `qwen sessions ps` 命令（[PR #8969](https://github.com/QwenLM/qwen-code/pull/8969)），为跨会话可见性提供基础设施。
- **feat(daemon)**：支持技能切换（skill-toggle）attach 机制。

### 📊 DSW 基准运行摘要

| 运行标识 | 范围 | 状态 |
|---|---|---|
| `dsw-eas-tb-smoke-20260818-r2` | 端到端凭据刷新（1 SWE + 1 Terminal-Bench） | SWE-bench Verified: SUCCEEDED (1/1) |
| `dsw-eas-tb-smoke-20260818-r1` | 沙箱瞬态恢复验证 | 进行中 |
| `dsw-eas-full-20260818-r3` | SWE-bench 500 + Terminal-Bench 89 全量验证 | 进行中 |
| `dsw-eas-full-20260818-r2` | 全量验证 | SWE-bench Verified: QUARANTINED |
| `dsw-eas-full-20260818-r1` | 全量验证 | SWE-bench Verified: QUARANTINED |

> ⚠️ 多轮全量运行被标记为 QUARANTINED，团队正在隔离分析数据一致性原因。

---

## 三、社区热点 Issues（Top 10）

### 1. [#656](https://github.com/QwenLM/qwen-code/issues/656) — API 400 全局性故障（11 评论 · P1 · OPEN）
用户报告每次请求都触发 `InternalError.Algo.InvalidParameter`，持续 12-16 小时，属核心级故障。**P1 高优先级**意味着影响所有用户调用，亟待官方回滚或热修复。

### 2. [#9194](https://github.com/QwenLM/qwen-code/issues/9194) — review 变异测试用例加固（11 评论 · P3）
跟进 PR #9096 第 5-6 轮评审发现的"测试用例无法约束生产代码变更"的鲁棒性缺口，属代码质量长尾治理。

### 3. [#8718](https://github.com/QwenLM/qwen-code/issues/8718) — RFC：原生多会话协调（10 评论 · P2 · CLOSED）
社区提出由 leader 派发独立 worker 并汇总结构化结果的多 Agent 协调框架，关联 [PR #8969](https://github.com/QwenLM/qwen-code/pull/8969) 的 sessions 基础设施。

### 4. [#8316](https://github.com/QwenLM/qwen-code/issues/8316) — 取消 prompt 时未还原输入（10 评论 · 0.21.x · CLOSED）
`Ctrl+C` 取消正在思考的请求后，原 prompt 内容丢失，迫使用户重输——典型高频交互痛点。

### 5. [#7040](https://github.com/QwenLM/qwen-code/issues/7040) — RFC：自动记忆召回的可靠性（10 评论 · P2 · OPEN）
三阶段 PR 矩阵（遥测→有界召回→精度评估）正在推进，第 2、3 阶段 PR 进入复审，体现社区对**长期记忆质量**的深度关切。

### 6. [#9276](https://github.com/QwenLM/qwen-code/issues/9276) — Team 成员无法向 Leader 发普通消息（7 评论 · P2 · OPEN）
普通完成消息被错误识别为 shutdown 请求，提示权限路由存在歧义，直接影响 Agent Team 可用性。

### 7. [#6806](https://github.com/QwenLM/qwen-code/issues/6806) — `/compress` 后状态栏上下文未刷新（7 评论 · P2 · CLOSED）
执行 `/compress` 或 `/compress-fast` 后，footer 上下文百分比卡在压缩前数值，影响用户对 token 预算的判断。

### 8. [#8724](https://github.com/QwenLM/qwen-code/issues/8724) — 同机跨会话消息传递（6 评论 · OPEN）
提案让两 Qwen Code 会话通过 `list_agents` + `send_message` 互相发现并通信，与 [PR #8969](https://github.com/QwenLM/qwen-code/pull/8969) 形成自洽设计。

### 9. [#9278](https://github.com/QwenLM/qwen-code/issues/9278) — `/review` 发布时收敛建议设计（5 评论 · P2 · IN-PROGRESS）
针对"评审→修复→diff 增大→新缺陷"的失控回路，提出 telemetry + 操作员控制的发布建议机制。

### 10. [#9354](https://github.com/QwenLM/qwen-code/issues/9354) — 跨宿主聊天记录契约预校验（5 评论 · P3 · CLOSED）
Web Shell、Tauri、VS Code、HTML 导出需统一只读转录契约，奠定多端 UI 整合的数据基础。

---

## 四、重要 PR 进展（Top 10）

### 1. [#9390](https://github.com/QwenLM/qwen-code/pull/9390) — autofix 分页拉取评审 thread
原 `reviewThreads(first:100)` 无分页，导致 PR 实际修复的 thread 超出窗口即被遗漏。本 PR 引入游标分页，保证评审回复覆盖完整 diff 范围。

### 2. [#8966](https://github.com/QwenLM/qwen-code/pull/8966) — settings schema 接受 `output.format: stream-json`
修复 schema 与运行时不一致的长期遗留问题（涉及 VS Code 端 schema 同步），消除用户配置报错。

### 3. [#9392](https://github.com/QwenLM/qwen-code/pull/9392) — Channel worker 支持 TLS daemon
`qwen serve` 配置 `--tls-cert/--tls-key` 时，channel worker 仍走硬编码 `http://` URL，本 PR 改为派发 `https://` 环回地址并放行校验。

### 4. [#9433](https://github.com/QwenLM/qwen-code/pull/9433) — 拒绝命名 teammate 接受 `run_in_background: false`
命名 teammate 静默忽略该参数导致并发失控，本 PR 在工具层显式拒绝并给出错误反馈（关联 Issue #9430）。

### 5. [#9361](https://github.com/QwenLM/qwen-code/pull/9361) — `/scheduled-tasks` 允许绑定已存在 session
POST 接口支持可选 `sessionId`，新建定时任务绑定到既有 live session，避免资源浪费与状态分散。

### 6. [#8927](https://github.com/QwenLM/qwen-code/pull/8927) — Channel 路由按 `sessionRotation` 轮换 session
新增 `maxTurns` / 时长两类生命周期边界，防止长期运行的 channel 路由无限累积同一 session 状态。

### 7. [#9092](https://github.com/QwenLM/qwen-code/pull/9092) — `fetch-pr` 支持中断后从磁盘状态恢复
基于会话账本（session-ledger）基线，新增 `--resume` 模式以断点续跑 PR 评审任务。

### 8. [#9262](https://github.com/QwenLM/qwen-code/pull/9262) — autofix 超预算时审计方案而非停摆
改写"增长预算制动"语义：超限时不再冷停，而是回退到 maintainer 决策的方案审计环节。

### 9. [#9341](https://github.com/QwenLM/qwen-code/pull/9341) — CLI 独立会话隔离原语
Standalone-session PR2A：分类显式独立会话、兼容旧版无 project 会话、Live transcript，但不引入第二条 runtime 路径。

### 10. [#9421](https://github.com/QwenLM/qwen-code/pull/9421) — UI 折叠重复的 in-flight tool_group 渲染
修复 TUI 中"最近一次工具调用渲染两遍"的视觉抖动问题（已提交历史 + pending 列表双源导致）。

---

## 五、功能需求趋势

从今日 Issues 提炼的社区共识方向：

| 方向 | 代表 Issue | 关注度 |
|---|---|---|
| **🧠 多 Agent / 跨会话协作** | #8718, #8724, #9276, #9282, #9430, #9431 | ⭐⭐⭐⭐⭐ |
| **📋 长期记忆与上下文召回** | #7040 | ⭐⭐⭐⭐⭐ |
| **🖥️ 多端 UI 整合（Web Shell / VSCode / Tauri）** | #9354, #5883, #9412 | ⭐⭐⭐⭐ |
| **⚙️ /review 与 autofix 自动化提质** | #9278, #9194, #9125 | ⭐⭐⭐⭐ |
| **🤖 第三方模型/SDK 子代理集成** | #9428（Cursor SDK 子代理） | ⭐⭐⭐ |
| **📤 数据导出（HTML / 聊天记录）** | #8208, #9354 | ⭐⭐⭐ |
| **🔌 Channel / IM 集成（Weixin 等）** | #9353 | ⭐⭐ |

---

## 六、开发者关注点

**1. 自动化回路的可控性**
`/review` 与 `autofix` 的"diff 膨胀—评审 finding—再修复"失控循环是当前最大工程难点。社区希望引入发布时收敛建议（#9278）、增长预算审计（#9262）、刹车即一类结果（#9297）等机制，将"LLM 上下文中的 prose 阻尼器"升级为**显式可观测的运行时契约**。

**2. Agent Team 的边界清晰化**
命名 teammate 与后台子代理长期共存导致 `list_agents` 语义模糊（#9431）、`run_in_background: false` 被忽略（#9430）、向 leader 发消息被误判为 shutdown（#9276）。社区强烈要求**类型分离 + 文档同步**（#9432 已落地文档修复）。

**3. 跨会话与多设备一致性**
Live session 注册表（#8969）、跨会话消息传递（#8724）、独立会话隔离（#9341）三件套共同指向一个目标：**让多端、多实例的 Qwen Code 像一个分布式系统一样协同**，而非孤立的 CLI 工具。

**4. 端到端可观测性**
DSW 基准运行（r1/r2 全量验证被 QUARANTINED）和 Fleet Shepherd 仪表盘（#7167）暴露了基准数据可信度问题；社区希望通过 telemetry（#7040）和隔离分析机制，让性能回归**可重现、可归因**。

**5. 易用性细节**
`/compress` 后状态栏不刷新（#6806）、`/rewind` 与 `/compress-fast` 协作丢失历史（#9331）、`Ctrl+C` 不还原输入（#8316）——这些"差一口气"的交互细节高频出现，反映用户对**会话状态可视化**的期待。

---

*📌 报告生成基于 GitHub 公开数据，建议结合 [QwenLM/qwen-code 仓库](https://github.com/QwenLM/qwen-code) 实时动态交叉验证。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

**DeepSeek TUI 社区动态日报（2026‑08‑19）**  

---

### 今日速览
- 项目今日发布 **v0.9.9**，完成了镜像、文档和 CI 的同步，并修复了狭窄终端布局以及 Rustdoc bare‑URL 警告。  
- 社区围绕 **国际化/中文文档**、**CI 安全性**、**持续循环功能**以及 **会话状态（system prompt、任务持久化）** 展开了热烈讨论。  

---

### 版本发布
- **v0.9.9**（[PR #5499](https://github.com/Hmbown/CodeWhale/pull/5499) / [Release note](https://github.com/Hmbown/CodeWhale/releases/tag/v0.9.9））  
  - **Fixed**：  
    - 狭窄终端（<60 列）紧凑行度量导致的 UI 溢出（#5486）  
    - 严格的 Rustdoc bare‑URL 检查（#5489）  
  - **Changed**：  
    - 稳定的配置自动路由器超时已可配置（见 #5494）  
    - 同步了根库和 TUI 的 changelog 以及贡献者名单  
  - 此版本还完成了 npm 包的可信发布准备工作（#5299）以及 CI 超时保护（#5495、#5496、#5500）。  

---

### 社区热点 Issues（按影响度排序）

| # | 标题 | 为什么重要 | 社区反应 |
|---|------|------------|----------|
| [#5316](https://github.com/Hmbown/CodeWhale/issues/5316) | **EPIC‑005: CodeWhale TUI Crate Decomposition (Umbrella)** | 为后续模块化、可插拔的 TUI 架构奠定基础，影响长期可维护性。 | 7 条评论，讨论拆分粒度和依赖注入方案。 |
| [#5337](https://github.com/Hmbown/CodeWhale/issues/5337) | **Web: finish the #4934 dictionary spine — retire every isZh branch and inline { en, zh } module** | 完成国际化路由的统一实现，消除重复的语言分支，提升翻译一致性。 | 5 条评论，强调对中文用户友好性的提升。 |
| [#5299](https://github.com/Hmbown/CodeWhale/issues/5299) | **release: move npm publication to trusted publishing** | 当前 npm 发布依赖人工 2FA，阻碍自动化流程；迁移至可信发布将提升交付效率。 | 3 条评论，关注减少维护者负担。 |
| [#5508](https://github.com/Hmbown/CodeWhale/issues/5508) | **[enhancement] feat: continuous loop** | 提供“无限轮次”选项，满足 AI 编排场景（如自动任务调度）的需求。 | 3 条评论，期待在下个版本中实现。 |
| [#5505](https://github.com/Hmbown/CodeWhale/issues/5505) | **[bug] System prompt is dropped after `/new` — model never receives project instructions** | 会话重置时丢失系统提示，导致模型失去项目上下文，是使用上的关键痛点。 | 2 条评论，用户报告频繁出现。 |
| [#5497](https://github.com/Hmbown/CodeWhale/issues/5497) | **fix(tasks): terminalize stuck durable executions and bound event growth** | 持久任务在未收到 `turn.completed` 时会卡住，影响后台作业可靠性。 | 1 条评论，开发者指出需增加超时与取消机制。 |
| [#5482](https://github.com/Hmbown/CodeWhale/issues/5482) | **[documentation] EPIC(docs): review, partially restructure, and fully localize documentation to Chinese** | 中文文档缺失是中文用户采纳的主要障碍；本 EPIC 旨在全面本地化。 | 1 条评论，社区呼声很高。 |
| [#5496](https://github.com/Hmbown/CodeWhale/issues/5496) | **ci: bound release-candidate and artifact workflow jobs** | 防止 CI 任务因 runner 挂起而无限期占用资源，保持发布管线的可预测性。 | 0 条评论，但为后续稳定发布奠定基础。 |

> 由于过去 24 小时内只有 8 条 Issue 已更新，以上即为全部值得关注的议题。

---

### 重要 PR 进展（挑选 10 条具有代表性的 PR）

| # | 标题 | 核心内容 | 影响 |
|---|------|----------|------|
| [#5509](https://github.com/Hmbown/CodeWhale/pull/5509) | **fix(tui): restore /title as an independent terminal window title** | 将 `/title` 从 `/rename` 中分离，恢复为独立的窗口标题命令。 | 改善终端 Tab 标题的直观使用，恢复之前工作流。 |
| [#5510](https://github.com/Hmbown/CodeWhale/pull/5510) | **docs(readme): restore the star history chart** | 重新添加星历图（使用本地 SVG/替代方案），因 GitHub 限制第三方星数据后被移除。 | 提升项目可视化增长指标，方便新用户快速感受活跃度。 |
| [#5506](https://github.com/Hmbown/CodeWhale/pull/5506) | **feat(tui): add command context adapters and migration gate (FEAT-015)** | 构建 TUI 端的依赖注入与迁移门面，为未来命令解耦做准备。 | 为后续命令插件化奠定基础，不影响现有功能。 |
| [#2619](https://github.com/Hmbown/CodeWhale/pull/2619) | **Fix compile error by #2615** | 修复由 #2615 引入的编译错误，确保 CI 绿色。 | 保持主干构建稳定，防止回归。 |
| [#5507](https://github.com/Hmbown/CodeWhale/pull/5507) | **docs(i18n): complete Tier 1 of Chinese docs localization (#5482)** | 将现有中文翻译迁移至 `docs/zh_hans/` 目录，完成文档本地化第一阶段。 | 中文用户可直接在本地化目录阅读最新文档。 |
| [#5504](https://github.com/Hmbown/CodeWhale/pull/5504) | **feat(web): move docs/hooks and docs/troubleshooting onto the dictionary spine (#5337)** | 将两个剩余的文档页面挂载到国际化字典 spine，消除 `isZh` 三元表达式。 | 进一步统一 i18n 实现，减少重复代码。 |
| [#5503](https://github.com/Hmbown/CodeWhale/pull/5503) | **test(web): spawn the deploy preflight script by a decoded path** | 修复因 URL 编码导致的部署前检测脚本路径错误。 | 提升 CI 中部署验证的可靠性，尤其在包含非 ASCII 路径的环境。 |
| [#5500](https://github.com/Hmbown/CodeWhale/pull/5500) | **test(ci): harden release gate concurrency** | 在 `telemetry_contract` 测试中加锁重试，避免竞态导致的发布门失效。 | 增强发布流程的并发安全性。 |
| [#5491](https://github.com/Hmbown/CodeWhale/pull/5491) | **fix(tui): persist approval outcomes before execution** | 在执行前将审批请求与结果写入 session 日志，防止丢失或重复执行。 | 解决审批状态不一致问题，提升交互安全性。 |
| [#5499](https://github.com/Hmbown/CodeWhale/pull/5499) | **release: v0.9.9** | 完成版本发布，同步 changelog、贡献者及多平台构件。 | 标志着本轮功能与修复的正式交付。 |

---

### 功能需求趋势（从所有 Issues 提炼）

1. **国际化与中文文档**  
   - 多个 Issue（#5337、#5482、#5504、#5507）围绕消除语言分支、统一字典 spine、完成中文文档本地化。  
   - 表明社区强烈希望降低语言门槛，提升非英语用户体验。

2. **CI/CD 可靠性与安全发布**  
   - #5299（npm 可信发布）、#5495/#5496/#5500（CI 超时与任务绑定）反映出对自动化流程稳定性的关注。  
   - 开发者希望减少人工干预，避免因 runner 挂起导致的发布延迟。

3. **会话与任务状态持久化**  
   - #5505（系统提示丢失）、#5497（耐久任务卡住）、#5491（审批结果持久化）均指向状态管理的健壮性需求。  
   - 用户期望在 `/new`、崩溃或超时后能够恢复完整上下文。

4. **功能增强：持续循环与命令解耦**  
   - #5508（持续循环）和 #5506（命令上下文适配器与迁移门）显示社区对更灵活的 AI 编排和插件化架构的兴趣。  
   - 这些特性将使 TUI 更适合作为多智能体协调的中枢。

5. **用户交互细节**  
   - #5509（恢复 `/title` 独立命令）反映出对终端窗口标题和会话命名的细粒度控制需求。

---

### 开发者关注点（痛点 & 高频需求）

- **系统提示在 `/new` 后被丢失**（#5505）：导致项目上下文缺失，是当前使用中最常报告的 bug。  
- **npm 发布依赖人工 2FA**（#5299）：阻碍完全自动化的 CI/CD 流程，维护者希望尽快迁移至可信发布。  
- **CI 任务可能无限期挂起**（#5495、#5496、#5500）：尤其在自我托管或网络不稳定的环境下，容易占用关键资源。  
- **耐久任务缺少超时/取消机制**（#5497）：后台长运行任务易造成资源浪费。  
- **中文文档缺失或过时**（#5482、#5507）：直接影响国内用户的采纳速度和学习成本。  
- **审批状态不持久化**（#5491）：在会话中断后可能导致重复或遗漏的操作。  

针对以上痛点，后续版本可优先考虑：  
- 在 `/new` 路径中保存并注入系统提示；  
- 完成 npm 可信发布迁移；  
- 为 CI 加强超时与重试策略；  
- 为耐久任务增加可配置的超时及取消路径；  
- 推进中文文档的全面本地化工作。  

---  

*以上内容基于过去 24 小时内 GitHub 更新的 Issues、Pull Requests 与 Release 生成，旨在为开发者提供快速、聚

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

# ComfyUI 社区动态日报 (2026-08-19)

## 1. 今日速览
今日 ComfyUI 官方无新版本发布，但核心开发团队及社区贡献者提交了大量高质量的 PR，重点修复了近期版本中 MiniMax H3 和 LTX 模型的严重性能衰退问题。此外，底层显存调度（Dynamic VRAM）、ROCm/AMD 显卡兼容性以及新模型（ByteDance Bernini-v2、Cosmos3）的集成成为社区今日的讨论核心。

## 2. 版本发布
无新版本发布。

## 3. 社区热点 Issues
以下 10 个 Issue 反映了当前社区在性能、硬件兼容性和云端服务上的核心痛点：

1. **[CORE-398] 动态显存流导致全量生成崩溃 (CUDA OOM)** - [Issue #15255](https://github.com/Comfy-Org/ComfyUI/issues/15255)
   * **动态**: 自 8月3日更新引发回归问题后，讨论已升温至 57 条评论。官方已将此 CUDA 错误上报给 NVIDIA，目前建议多 GPU 用户使用 `--disable-pinned-memory` 绕过。
2. **MiniMax H3 全分辨率视频生成速度倒退 (~4x slower)** - [Issue #15665](https://github.com/Comfy-Org/ComfyUI/issues/15665)
   * **动态**: 自 v0.32.0 起，MiniMax H3 耗时从约 26 分钟暴涨至 2 小时。根源被指为 #15486 的 `v = v.clone()` 破坏了融合 QKV 缓冲区。今日已提交修复 PR（见下文）。
3. **ROCm gfx1201 模型加载速度极度缓慢** - [Issue #15001](https://github.com/Comfy-Org/ComfyUI/issues/15001)
   * **动态**: LTX 2.3 工作流加载时间从 300s 增加到 4400s。这反映了 AMD RDRA-4 架构在最新 ComfyUI 上的体验显著退化。
4. **AOTriton kernels 导致文本编码器损坏** - [Issue #15647](https://github.com/Comfy-Org/ComfyUI/issues/15647)
   * **动态**: 在没有 aotriton 内核的 Windows gfx1201 构建下，`can_use_flash_attention()` 误判为 True 导致报错。
5. **MiniMax H3 注意力机制对齐错误** - [Issue #15494](https://github.com/Comfy-Org/ComfyUI/issues/15494)
   * **动态**: Comfy Kitchen 抛出针对 `quant_qk_per_thread_int8` 的 Q/K 指针对齐报错，阻碍了推理加速。
6. **Stable Audio 3 音频质量严重衰退** - [Issue #15701](https://github.com/Comfy-Org/ComfyUI/issues/15701)
   * **动态**: 用户反馈近期提交导致 Stable Audio 3 生成结果伴随杂音，质量大幅下降。
7. **comfy-angle 包破坏 libffi 生态 (如 fish-speech)** - [Issue #15134](https://github.com/Comfy-Org/ComfyUI/issues/15134)
   * **动态**: v0.28 起全局加载 `libGLESv2.so` 污染了 CFFI/libffi 环境，导致其他依赖声音库的节点崩溃。
8. **请求支持字节跳动 Bernini-Diffusers-v2** - [Issue #15702](https://github.com/Comfy-Org/ComfyUI/issues/15702)
   * **动态**: 社区呼吁集成 8月13日发布的字节跳动全链路 Bernini 模型（包含 Qwen2.5-VL 语义规划）。
9. **ComfyUI Cloud $20 订阅套餐频率限制** - [Issue #15700](https://github.com/Comfy-Org/ComfyUI/issues/15700)
   * **动态**: 多名云端用户反馈执行任意工作流均报错 `Rate limit exceeded`，影响正版云服务体验。
10. **LTX 2.5 22b dev Q5_1 量化输出颗粒感严重** - [Issue #15693](https://github.com/Comfy-Org/ComfyUI/issues/15693)
    * **动态**: 蒸馏版本量化正常，但 Q5_1 量化版本出现严重画质劣化，社区正在排查量化精度策略问题。

## 4. 重要 PR 进展
今日 PR 活跃，开发者 @yzxcj797 提交了多个核心架构修复，以下是重点关注进展：

1. **[修复] 恢复 MiniMax H3 性能（直接物化后端布局）** - [PR #15705](https://github.com/Comfy-Org/ComfyUI/pull/15705)
   * 优化了 `v = v.clone()` 带来的显存流量翻倍问题，预计将解决 Issue #15665 的 4 倍性能衰退。
2. **[增强] 验证 AOTriton 内核可用性以防 Flash Attention 崩溃** - [PR #15648](https://github.com/Comfy-Org/ComfyUI/pull/15648)
   * 在启用 pytorch attention 前增加实际启动测试，修复 AMD 显卡报错。
3. **[功能] 通过 Partner Nodes 接入 Cosmos3 模型** - [PR #15718](https://github.com/Comfy-Org/ComfyUI/pull/15718)
   * 支持通过本地 vLLM-Omni 服务器进行文生图/视频及音效生成，严格限制仅允许环回主机请求。
4. **[增强] 使 RAM 内存统计兼容 Linux cgroups (容器环境)** - [PR #15272](https://github.com/Comfy-Org/ComfyUI/pull/15272)
   * 解决 `psutil` 在 Docker 中读取宿主机物理内存导致的 OOM 无法触发内存释放的问题。
5. **[功能] 为 JSON 工作流增加 2 空格缩进** - [PR #15713](https://github.com/Comfy-Org/ComfyUI/pull/15713)
   * 将单行 JSON 转换为标准 2 空格缩进格式，方便源代码版本控制和 Git diff 阅读。
6. **[修复] 重建陈旧的 Asset 资源记录** - [PR #15714](https://github.com/Comfy-Org/ComfyUI/pull/15714)
   * 修复数据库升级后 `loader_path` 标签未回填导致的资源预览失效问题。
7. **[功能] 新增 ResampleVideoFrameRate 节点** - [PR #15715](https://github.com/Comfy-Org/ComfyUI/pull/15715)
   * 通过丢帧或重复帧改变视频帧率，保持时长与音频不变，采用惰性 VideoInput 包装器优化性能。
8. **[修复] 处理卸载的反量化 Embedding 张量** - [PR #15706](https://github.com/Comfy-Org/ComfyUI/pull/15706)
   * 解决动态显存迁移时量化权重被反量化引发的 `MixedPrecisionOps.Embedding` 类型不匹配错误。
9. **[优化] Wan 模型自注意力在 ROCm 上的内存连续性** - [PR #15425](https://github.com/Comfy-Org/ComfyUI/pull/15425)
   * 专为 AMD gfx1151 优化，通过仅对 Q/K/V 头部张量连续化以减少内存带宽压力，不影响其他架构。
10. **[修复] LTX2 Prompt 生成提前截断问题** - [PR #15703](https://github.com/Comfy-Org/ComfyUI/pull/15703)
    * 在最终通道关闭时停止 Gemma 4 生成，避免产生重复的字幕描述。

## 5. 功能需求趋势
基于近期 Issues，社区功能需求呈现以下三大趋势：
* **前沿多模态模型的极速适配**: 字节跳动 Bernini-v2（语义规划+隐空间规划）及 Cosmos3 的接入需求强烈，表明 ComfyUI 已成为大厂新模型首发测试的首选前端。
* **量化与显存调度极致优化**: Q5_1 等低比特量化质量评估、以及动态显存（Dynamic VRAM）在多 GPU 场景下的稳定性修复需求激增。
* **异构硬件兼容性要求提升**: 对 AMD ROCm（gfx1201/gfx1151）的原生内核验证、Apple/MPO 多图 JPEG 解码修复、以及 Docker 容器资源限制识别的呼声越来越高。

## 6. 开发者关注点
* **性能回归防范**: 最近两个大版本（v0.32.0 及 8月3日更新）引发了多处性能断崖式下跌（如 MiniMax H3 变慢 4 倍、AMD 模型加载变慢 14 倍）。建议开发者在提交显存管理（如 `.clone()` 操作）和缓存优化时增加全分辨率场景的回归基准测试。
* **第三方库冲突防范**: 核心节点（如 GLSL 渲染）对 `ctypes` 全局加载行为正干扰 CFFI/libffi 生态，未来在引入底层二进制库时需评估作用域污染风险。
* **本地化及网络容灾**: 俄罗斯地区无法下载依赖包（pip 被封禁）、官方云服务的 Rate Limit 限制频发，社区对本地离线部署包及云服务扩缩容的诉求明显。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama 社区动态日报 | 2026-08-19

---

## 📌 今日速览

今日 Ollama 社区无新版本发布，但 **v0.32.14 版本暴露出多个严重回归问题**，主要集中在 CUDA GPU 兼容性（RTX 30 系列静默回退 CPU）、MLX 引擎性能退化、以及 Qwen 3.8 模型系列的多项兼容性故障。社区同时聚焦于 **桌面端体验优化**（新增引导流程）和 **企业级安全管控**（Action Gate / 审计日志）两大方向。Intel 集显支持与许可证合规问题持续高热。

---

## 🚀 版本发布

> **过去 24 小时无新 Release。**

当前最新版本为 **0.32.14**，但该版本已引发多起关于 GPU 推理回退和 CPU 占用异常的 Bug 报告，建议生产环境用户谨慎升级。

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#3185](https://github.com/ollama/ollama/issues/3185) — 许可证通知未随发布物分发 ⭐269 👥54
| 类型 | 状态 | 标签 |
|------|------|------|
| Bug | Open | license |

**核心问题：** Ollama 作为静态链接依赖使用 llama.cpp（MIT 协议），但发布产物中未包含版权通知文本。`grep "Georgi Gerganov"` 在安装目录中无结果。
**为何重要：** 这是社区 **点赞最高（269）的 Issue**，涉及法律合规风险，自 2024 年 3 月开放至今未关闭，反映项目对开源义务的长期忽视。

---

### 2. [#3113](https://github.com/ollama/ollama/issues/3113) — Intel 集成显卡支持请求 ⭐75 👥35
| 类型 | 状态 | 标签 |
|------|------|------|
| Feature Request | Open | intel |

**核心问题：** 用户请求适配 Intel Iris Xe 等 iGPU 进行本地推理。
**为何重要：** **第二大高赞 Issue**，覆盖大量笔记本/NUC 用户群体，Intel Arc 独显生态也在快速增长，是扩大硬件兼容性的关键方向。

---

### 3. [#17841](https://github.com/ollama/ollama/issues/17841) — v0.32.14 在 RTX 30/A40/A6000 上静默回退 CPU
| 类型 | 状态 | 标签 |
|------|------|------|
| Bug | Open | cuda |

**核心问题：** CUDA 13 架构编译遗漏 sm_8.6（Compute Capability 8.6），导致 RTX 30 系列、A40、A6000 等 GPU **完全无法使用 CUDA 加速**，仅以 ~7 tok/s 的 CPU 速度运行，且 `ollama ps` 仍显示混合比例，极具误导性。
**为何重要：** **严重的版本回归**，影响大量 NVIDIA 中高端显卡用户，Windows + NSSM 服务部署场景尤甚。

---

### 4. [#17839](https://github.com/ollama/ollama/issues/17839) — Agent 集成在 macOS 本地 Qwen 模型上无限挂起
| 类型 | 状态 | 标签 |
|------|------|------|
| Bug | Open | agent, macos |

**核心问题：** 通过 Ollama API 直接调用 Qwen 模型一切正常（流式输出、推理、工具调用均 OK），但接入 Claude Code / Codex 等 Agent 框架后**无限挂起或超时**。
**为何重要：** 24 小时内即获 10 条评论，反映 **Agent 生态与 Ollama 的集成稳定性** 是当前高频痛点。

---

### 5. [#17833](https://github.com/ollama/ollama/issues/17833) — v0.32.14 模型完全装入 VRAM 时 CPU 占用仍高达 50-80% ⭐2
| 类型 | 状态 | 标签 |
|------|------|------|
| Bug | Open | performance |

**核心问题：** 升级至 0.32.14 后，即使模型 100% GPU Bound，CPU 占用从正常水平飙升至 50-80%；回退至 0.32.13 即恢复正常。
**为何重要：** 与 #17841 形成呼应——**0.32.14 存在系统性性能/兼容性问题**，多个独立用户报告类似现象。

---

### 6. [#17829](https://github.com/ollama/ollama/issues/17829) — MLX 引擎无 Prompt Caching，每步 Agent 全量重新 Prefill
| 类型 | 状态 | 标签 |
|------|------|------|
| Bug | Open | mlx, performance |

**核心问题：** Apple Silicon (M1 Ultra) 上使用 MLX 引擎运行 Qwen3.8:27b 时，多轮 Agent 对话中**每次请求都从头处理全部 prompt（20-30K tokens）**，TTFT 随步数线性增长。
**为何重要：** 直接影响 **macOS 用户体验和 Agent 场景可用性**，Prompt Caching 是 LLM 推理的核心优化手段。

---

### 7. [#17778](https://github.com/ollama/ollama/issues/17778) — Qwen 3.8 查询报错：no user query found in messages (500)
| 类型 | 状态 | 标签 |
|------|------|------|
| Bug | Open | qwen |

**核心问题：** 使用 Python API 调用 Qwen 3.8（205K context）时，模型在 tool calling 循环中出现 500 错误，提示消息中找不到 user query。
**为何重要：** Qwen 3.8 是近期热门模型，该 Bug 影响 **Python SDK + Tool Calling 工作流** 的可靠性。

---

### 8. [#17847](https://github.com/ollama/ollama/issues/17847) — ROCm 后端 Strix Halo (gfx1151) KV 状态跨请求泄漏
| 类型 | 状态 | 标签 |
|------|------|------|
| Bug | Open | rocm, amd |

**核心问题：** AMD Strix Halo iGPU (Radeon 8060S) 上运行 ROCm 版 Ollama 时，**连续请求的响应内容被前一个请求污染**——交替提问 A 和 B，B 的回答会描述 A 的内容。
**为何重要：** **极其严重的推理正确性问题**，属于 KV Cache 未正确隔离的安全级 Bug，AMD 新平台用户需高度关注。

---

### 9. [#17816](https://github.com/ollama/ollama/issues/17816) — Qwen 3.8 模型下载失败（EOF）
| 类型 | 状态 | 标签 |
|------|------|------|
| Bug | Open | download |

**核心问题：** `ollama run qwen3.8` 在拉取 manifest 时返回 EOF 错误，API 调用也提示模型不存在。
**为何重要：** 多人报告同一问题，可能为 **注册表侧临时故障或模型清单配置错误**，影响新用户首次体验。

---

### 10. [#17836](https://github.com/ollama/ollama/issues/17836) — /api/chat 生成中断时返回 HTTP 200 且无错误字段
| 类型 | 状态 | 标签 |
|------|------|------|
| Bug | Open | api |

**核心问题：** 当服务端内部中止生成（如 temperature=0 导致模板解析失败），`/api/chat` 返回 `HTTP 200` + `"done": false` + 空 content，**客户端无法区分成功响应与异常中断**。
**为何重要：** 影响 **所有基于 API 构建的上层应用** 的错误处理逻辑，已有对应 PR #17846 提交修复。

---

## 🛠 重要 PR 进展（Top 10）

### 1. [#17853](https://github.com/ollama/ollama/pull/17853) — 桌面应用新增引导流程（Onboarding Flow）
**作者：** hoyyeva | **状态：** Open
**内容：** 为桌面端 App 实现**首次启动引导窗口**，包含"What is Ollama?"介绍页，支持开发模式调试。
**意义：** 提升**新手用户体验**，降低上手门槛，是桌面端产品化的重要一步。

---

### 2. [#17752](https://github.com/ollama/ollama/pull/17752) — 模型元数据缓存，减少每次请求开销
**作者：** gaugarg-nv | **状态：** Closed（已合并）
**内容：** 缓存 GGUF 元数据和模型能力信息，避免每次推理调用重复读取（原开销约 **300ms/次**）；模型清单变更时自动失效。
**意义：** **直接改善延迟指标**，对高频 API 调用场景效果显著。

---

### 3. [#17850](https://github.com/ollama/ollama/pull/17850) — MLX 引擎更新
**作者：** dhiltgen | **状态：** Open
**内容：** 同步上游 [mlx-c#127](https://github.com/ml-explore/mlx-c/pull/127) 的变更。
**意义：** 持续跟进 Apple MLX 生态演进，可能修复部分 macOS 兼容性问题。

---

### 4. [#17846](https://github.com/ollama/ollama/pull/17846) — 生成流无最终响应时返回错误
**作者：** deepshekhardas | **状态：** Open
**内容：** 修复 #17836——当 llama-server 内部取消生成（如模板解析失败）时，向客户端返回明确错误而非静默结束流。
**意义：** **提升 API 可靠性和可调试性**，帮助上层应用正确处理异常。

---

### 5. [#17834](https://github.com/ollama/ollama/pull/17834) — MLX Runner 加载进度报告与卡死检测
**作者：** dhiltgen | **状态：** Open
**内容：** 为 MLX 引擎实现基于进度的超时检测机制，避免大模型加载时间超过默认超时而被误杀；解决 MLX 权重懒加载导致的特殊问题。
**意义：** 解决 **Apple Silicon 大模型加载不稳定** 的实际问题。

---

### 6. [#12030](https://github.com/ollama/ollama/pull/12030) — 新增 /api/tokenize 和 /api/detokenize 端点
**作者：** icedmoca | **状态：** Open
**内容：** 提供两个新 HTTP API，允许开发者通过 API 直接访问模型的分词器进行 token 化和反 token 化操作。
**意义：** **大幅增强 API 能力边界**，方便构建 token 计费、prompt 优化等高级工具链。

---

### 7. [#17516](https://github.com/ollama/ollama/pull/17516) — 自动清理已退出的 Runner 进程
**作者：** raymondginger2018-sudo | **状态：** Open
**内容：** 当 llama-server 子进程崩溃或卡死后，调度器应将其从已加载列表中移除，而非继续报告"模型正常运行"。
**意义：** 修复 **僵尸进程/虚假健康状态** 问题，提升系统自愈能力。

---

### 8. [#17195](https://github.com/ollama/ollama/pull/17195) — 修复 GLM-OCR 输出失控问题
**作者：** pjdurden | **状态：** Open
**内容：** 为旧版 GLM-OCR GGUF 补充 `

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

**llama.cpp 社区动态日报（2026‑08‑19）**  

---

### 今日速览
- 过去 24 小时发布了 **v0.1.2**（语义版本仍在完善中）以及 **Nightly build b10485**，主要更新包括 OpenVINO 升级至 2026.3、LFM2 图像 tiling 修复、CI 中跳过 nemotron‑h 回滚测试。  
- 社区活跃度集中在后端兼容性与性能问题上，特别是 ROCm、Vulkan、CUDA 在大模型（MTP、flash‑attention、MoE）上的崩溃和内存分配异常。  
- 多个功能需求和改进 PR 正在推进，涉及服务器注入消息、Vulkan RoPE 偏移、DFlash2 支持、CPU 新量化类型（IQ2_NL/IQ3_NL）以及 OpenCI 镜像构建优化。

---

### 版本发布
| 版本 / 构建 | 关键更新 | 链接 |
|------------|----------|------|
| **v0.1.2** | 语义版本工作中；未列出具体功能变更，主要为基线同步。 | [v0.1.2 Release](https://github.com/ggml-org/llama.cpp/releases/tag/v0.1.2) |
| **Nightly build b10485** | - 同步 ggml 子模块<br>- CI：OpenVINO 升至 2026.3，跳过 nemotron‑h 回滚测试<br>- mtmd：修复 LFM2 图像 tiling 阈值（修复 Windows 下的问题）<br>- macOS/iOS 提供 arm64 二进制（含 KleidiAI 已禁用版本） | [b10485 Release](https://github.com/ggml-org/llama.cpp/releases/tag/b10485) |

---

### 社区热点 Issues（按评论数与影响力挑选的 10 条）

| # | 标题 | 评论 / 👍 | 为什么重要 | 链接 |
|---|------|-----------|------------|------|
| #21725 | **[enhancement] Feature Request: XDNA backend** | 24 / 30 | 社区强烈期待 AMD XDNA（AI 加速器）后端，能够进一步拓展硬件覆盖。 | [#21725](https://github.com/ggml-org/llama.cpp/issues/21725) |
| #24055 | **[bug-unconfirmed] Context checkpoints always invalidated on hybrid/recurrent models** | 19 / 4 | 混合/递归模型（如 Mamba、RWKV）在检查点机制上失效，影响长上下文推理的可靠性。 | [#24055](https://github.com/ggml-org/llama.cpp/issues/24055) |
| #25593 | **[bug-unconfirmed] Eval bug: SM_60 Quality Loss, FP32 math silently done in FP16** | 16 / 4 | 在旧型号 Tesla P100 (SM_60) 上出现精度退化，暗示 FP16/FP32 混合使用的路径需要更严格的类型检查。 | [#25593](https://github.com/ggml-org/llama.cpp/issues/25593) |
| #24712 | **[bug-unconfirmed] Eval bug: Warning Message - sched_reserve: layer 0 is assigned to device CPU but the fused Gated Delta Net tensor is assigned to device CUDA0** | 16 / 3 | 揭示异构调度中 tensor 放置不一致，导致警告甚至潜在的性能下降。 | [#24712](https://github.com/ggml-org/llama.cpp/issues/24712) |
| #24730 | **[enhancement] Feature Request: Support for GLM 5.2** (已关闭) | 15 / 14 | 尽管已关闭，但显示社区对最新数学库（GLM）的强烈需求，意味着后续可能重新提交或通过其他方式实现。 | [#24730](https://github.com/ggml-org/llama.cpp/issues/24730) |
| #27102 | **[bug, help wanted, Nvidia GPU] Eval bug: CUDA kernel stall during model execution, killed by watchdog** | 14 / 3 | CUDA 内核卡死导致 watchdog 杀死进程，直接影响生产环境稳定性，亟待根因分析。 | [#27102](https://github.com/ggml-org/llama.cpp/issues/27102) |
| #24492 | **[bug-unconfirmed] Eval bug: Gemma 4 31B MTP (draft‑mtp) crashes on Vulkan backend** | 13 / 3 | Vulkan 后端在 MTP（多 token 预测）场景下出现空指针/未实现操作，制约了 Vulkan 在大模型上的应用。 | [#24492](https://github.com/ggml-org/llama.cpp/issues/24492) |
| #22197 | **[bug] ggml-backend-meta: multi buffers are unsupported leading to vulkan segfault** | 9 / 2 | Vulkan 后端在多 buffer 情况下触发段错误，限制了并行推理与离线转换。 | [#22197](https://github.com/ggml-org/llama.cpp/issues/22197) |
| #26746 | **[bug-unconfirmed] Eval bug: ROCm gfx1151 RPC worker crashes in GGML_OP_TOP_K during DeepSeek V4 prefill after 4096 tokens** | 9 / 0 | ROCm 在 Top‑K 算子上出现崩 Oscill，影响长上下文（>4K token）的 DeepSeek V4 推理。 | [#26746](https://github.com/ggml-org/llama.cpp/issues/26746) |
| #26902 | **[bug-unconfirmed] Eval bug: Glimmer Q8_0 on 4 x Tesla T10 tensor split: GGML_ASSERT(ret.axis != GGML_BACKEND_SPLIT_AXIS_UNKNOWN) failed** | 9 / 0 | 张量分割后端轴未正确初始化，导致断言失败，反映出多后端切换时状态同步的 gap。 | [#26902](https://github.com/ggml-org/llama.cpp/issues/26902) |

---

### 重要 PR 进展（选取具有功能或修复意义的 10 条）

| PR | 标题 | 主要内容 | 链接 |
|----|------|----------|------|
| #27343 | **server, ui: allow inject message to generation** | 新增 `/v1/chat/completion/control` API 的 “inject” 动作，可在生成过程中注入控制消息；UI 已加默认关闭的开关。 | [#27343](https://github.com/ggml-org/llama.cpp/pull/27343) |
| #27344 | **ggml: support ggml_rope_set_offset on vulkan** | 为 Vulkan 后端实现 RoPE 偏移功能，并对 inplace  case 进行轻量优化。 | [#27344](https://github.com/ggml-org/llama.cpp/pull/27344) |
| #27342 | **spec : add DFlash2 support (local convolution + candidate selector)** | 实现 DFlash2（局部深度卷积 + 候选选择器），提升 speculative decoding 效率。 | [#27342](https://github.com/ggml-org/llama.cpp/pull/27342) |
| #27341 | **CUDA: fuse ffn_gate + glu into the mul_mat_q epilogue** | 将 FFN gate + SwiGLU/GEGLU 融入 MMQ 的写回阶段，减少内存往返。 | [#27341](https://github.com/ggml-org/llama.cpp/pull/27341) |
| #27339 | **opencl: fix local size for norm** | 修正 OpenCL 归一化局部尺寸计算，确保为 2 的倍数，防止在小张量时出错。 | [#27339](https://github.com/ggml-org/llama.cpp/pull/27339) |
| #27322 | **quantize: add IQ2_NL and IQ3_NL types (CPU)** | 新增 CPU 端的 2‑bit/3‑bit 非对称量化类型，进一步压缩模型并保持在 256 元素块的对齐。 | [#27322](https://github.com/ggml-org/llama.cpp/pull/27322) |
| #27338 | **devops: use GGML_NATIVE=OFF for OpenVINO** | 在 OpenVINO Docker 镜像中关闭 GGML_NATIVE，避免构建机器指令集泄漏导致运行时错误。 | [#27338](https://github.com/ggml-org/llama.cpp/pull/27338) |
| #26439 | **opencl: port fused ssm_scan kernel (Mamba‑2, d_state in {128,256}) to GPU** | 将 Mamba‑2 的 SSM_SCAN 从 CPU 移植到 OpenCL GPU，支持 d_state=128/256 的全部 f32 路径。 | [#26439](https://github.com/ggml-org/llama.cpp/pull/26439) |
| #27333 | **llama-mmap: fix numa path hint inconsistency** | 统一 NUMA 路径提示（madvise 与 fadvise）为 RANDOM，提升大内存映射的调度效率。 | [#27333](https://github.com/ggml-org/llama.cpp/pull/27333) |
| #27332 | **vulkan: use density gate for MUL_MAT_VEC_ID path** | 引入基于 token‑expert 密度的门控（n_tokens * experts_per_token ≤ 2 * n_experts），在 AMD RADV/RDNA3 上显著提升批次吞吐。 | [#27332](https://github.com/ggml-org/llama.cpp/pull/27332) |

---

### 功能需求趋势（从 Issues 中提炼）

| 趋势方向 | 体现的 Issues / 反馈 | 说明 |
|----------|-------------------|------|
| **后端兼容性 & 性能** | XDNA 后端请求（#21725），ROCm Top‑K 崩溃（#26746），Vulkan MTP 崩溃（#24492），CUDA kernel stall（#27102） | 社区希望在更多硬件（AMD XDNA、最新 ROCm、Vulkan）上获得稳定、高吞吐的推理，同时解决已知的内核卡死和精度问题。 |
| **模型特性支持** | MTP/flash‑attention 相关崩溃（#24492，#27021，#27102），GLM 5.2 支持需求（#24730，已关闭） | 对新型解码策略（MTP、 speculative decoding）和最新数学库的需求明显，说明用户尝试在 llama.cpp 上跑更前沿的模型。 |
| **服务器与交互功能** | 进度报告（#24822）、对话压缩（#24473）、JSON schema 注入（#27279）、消息注入（#27343） | 在 llama‑server 端，用户期望更细粒度的状态反馈、长对话管理以及结构化输出控制，以便构建产品级 AI 服务。 |
| **量化与模型压缩** | 新增 IQ2_NL/IQ3_NL（#27322）、之前的 Q8_0、Q6_K 等

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*