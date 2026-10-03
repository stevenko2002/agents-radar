# AI CLI 工具社区动态日报 2026-10-04

> 生成时间: 2026-10-03 22:16 UTC | 覆盖工具: 12 个

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

1. **llama.cpp 连发 10 个版本（b11371–b11381）** — 新增 clef 决策模型支持（b11371），修复 laya 模型批量请求崩溃（b11379），补齐 Ling 3.0 json_schema 约束（b11377），并清理 Windows 构建弃用告警。🔗 https://github.com/ggerganov/llama.cpp

2. **OpenAI Codex 推出 4 个连续 alpha 版本（rust-v0.162.0-alpha.8–alpha.11）** — 围绕 0.162 主线密集修复稳定性问题，节奏明显加快。🔗 https://github.com/openai/codex

3. **Pi 发布 v1.0.1 稳定版** — 新增 Nix flake 安装方式，可通过 `nix run github:earendil-works/pi/stable` 运行。🔗 https://github.com/earendil-works/pi/releases/tag/v1.0.1

4. **Gemini CLI 发布 v0.64.0-nightly.20261003.gfb972b2f8** — 修复 Enter / Spacebar 确认可选项列表的交互问题。🔗 https://github.com/google-gemini/gemini-cli/releases/tag/v0.64.0-nightly.20261003.gfb972b2f8

5. **Claude Code 合入安全加固 PR #99137** — 在 sec-default 生效范围内，用户插件不再能解除 deny/ask 规则或修改被固定的变量。同时合并三项 /diff 面板修复（#99118、#99141、#99206）。🔗 https://github.com/anthropics/claude-code/pull/99137

6. **Qwen Code 社区热议 Managed Agent 双路径架构提案 #12380** — 获 45 条评论，定义分阶段服务化路线。同日多条 P1 缺陷被修复，包括 ≥8 并发 Turn 卡死（#13333）与 coordinator 崩溃导致在途 Turn 卡死（#13327）。🔗 https://github.com/QwenLM/qwen-code/issues/12380

7. **Ollama 修复 clef-flash 决策模型在 /v1/systemone 端点必然失败的问题（PR #18777）** — 同时拒绝 /api/generate 的尾部垃圾数据（PR #18778），提升 API 输入校验严格性。🔗 https://github.com/ollama/ollama/pull/18777

8. **ComfyUI 出现 dxgmms2.sys 内核级蓝屏（Issue #16246）** — RTX 3050 用户在升级 comfy-aimdo 后一天内遭遇 4 次视频内存管理器内核崩溃。同日修复 CheckpointFunction 冻结参数反向传播异常（PR #16757）。🔗 https://github.com/comfyanonymous/ComfyUI/issues/16246

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills 社区热点报告
**数据截止：2026-10-04 | 来源：anthropics/skills**

---

## 1. 热门 Skills 排行（按 PR 评论关注度排序）

### 🔥 #1298 — skill-creator 修复：触发词评估隔离与跨平台稳定性
- **作者**：MartinCajiao | **状态**：OPEN | **更新于** 2026-09-16
- **功能**：修复 `skill-creator` 中触发词评估（trigger evals）的多项缺陷——多 worker 命令竞争、Windows `select()` 管道失败、无关工具中断扫描，以及运行时失败被误判为"非触发"从而污染负例数据。
- **讨论热点**：skill-creator 是 Skills 开发的核心元工具，其评估框架的可靠性直接影响所有 Skill 的质量。社区对"误报/漏报"高度敏感。
- 🔗 [PR #1298](https://github.com/anthropics/skills/pull/1298)

### 🔥 #1742 — mcp-builder：兼容 MCP >= 2.0 的 API 变更
- **作者**：Kuldeeep18 | **状态**：OPEN | **更新于** 2026-09-29
- **功能**：适配 `mcp>=2.0.0` 中 `streamablehttp_client` → `streamable_http_client` 的重命名，以及自定义 HTTP headers 的新配置方式（`create_mcp_http_client` / `http_client`）。
- **讨论热点**：MCP 生态快速迭代，官方 Skill 跟进上游库版本的兼容性修复是刚需。
- 🔗 [PR #1742](https://github.com/anthropics/skills/pull/1742)

### 🔥 #1771 — proofcore-contract-auditor：智能合约审计与区块链存证
- **作者**：ProofCore-Protocol | **状态**：OPEN | **更新于** 2026-09-16
- **功能**：面向 Web3 开发者的 Skill，对 Solidity/Rust 智能合约做静态分析，并将审计证明锚定到 TON 公链（ProofCore 零存储 Merkle 协议）。
- **讨论热点**：Web3 + AI Agent 的交叉场景，社区对"去中心化审计"概念兴趣浓厚。
- 🔗 [PR #1771](https://github.com/anthropics/skills/pull/1771)

### 🔥 #1734 — 检测孤立的 DOCX 评论
- **作者**：rohitjain25 | **状态**：OPEN | **更新于** 2026-09-25
- **功能**：识别 Word 文档中遗留的孤立批注（orphaned comments），防止生成文档中出现"幽灵评论"。
- **讨论热点**：文档生成质量的精细化控制，反映社区对 AI 输出"产物洁癖"的追求。
- 🔗 [PR #1734](https://github.com/anthropics/skills/pull/1734)

### 🔥 #1703 — md2video-audio：Markdown → 带人声的 MP4 视频
- **作者**：70v-Yoyo | **状态**：OPEN | **更新于** 2026-09-15
- **功能**：零成本将 Markdown 文档通过 Marp 转换为演示幻灯片，再合成为带 AI 人声旁白的 MP4 视频。
- **讨论热点**："内容→视频"的一键式生成，切中知识付费/社交媒体运营的强需求。
- 🔗 [PR #1703](https://github.com/anthropics/skills/pull/1703)

### 🔥 #1245 — notion-spec-to-implementation + quantitative-resume-auditor
- **作者**：mrdesouzaphd-cmyk | **状态**：OPEN | **更新于** 2026-09-30
- **功能**：① 将产品/技术 Spec 拆解为 Notion 可执行任务（含验收标准与进度追踪）；② 量化简历审计（quantitative resume auditor）。
- **讨论热点**：Spec → 代码的流程化落地 + 个人品牌优化，双重实用价值。
- 🔗 [PR #1245](https://github.com/anthropics/skills/pull/1245)

### 🔥 #1792 — docx：LibreOffice 超时与输出验证修复
- **作者**：TINGyu123644 | **状态**：OPEN | **更新于** 2026-09-25
- **功能**：`soffice` 超时应报错而非误判成功；成功前须校验输出 DOCX 不含修订标记（`w:ins`/`w:del`/`w:moveFrom`/`w:moveTo`）。
- **讨论热点**：文档 Skill 的"结果正确性"保障，防止 AI 假阳性完成。
- 🔗 [PR #1792](https://github.com/anthropics/skills/pull/1792)

### 🔥 #1607 — claude-api：标记 4 个已退役模型 ID
- **作者**：adi-IL | **状态**：OPEN | **更新于** 2026-10-03
- **功能**：将 `claude-opus-4-1`、`claude-sonnet-4-0` 等从"Legacy/Derogated"列表中移至"Retired"。
- **讨论热点**：API Skill 的维护性更新，社区关注模型生命周期管理的准确性。
- 🔗 [PR #1607](https://github.com/anthropics/skills/pull/1607)

---

## 2. 社区需求趋势（从 Issues 提炼）

| 排名 | Issue | 核心诉求 | 评论 | 👍 |
|------|-------|----------|------|-----|
| 1 | [#492](https://github.com/anthropics/skills/issues/492) | **安全信任边界**：社区 Skill 冒用 `anthropic/` 命名空间，需官方认证机制 | 43 | 2 |
| 2 | [#228](https://github.com/anthropics/skills/issues/228) | **组织级共享**：Skill 应可在 Claude.ai 组织内直接分享，而非手动传递 .skill 文件 | 16 | 8 |
| 3 | [#556](https://github.com/anthropics/skills/issues/556) | **Skill 触发可靠性**：`claude -p` 下 Skill 触发率为 0%，评估框架失效 | 12 | 7 |
| 4 | [#62](https://github.com/anthropics/skills/issues/62) | **Skill 持久化**：用户上传的 Skill 无故消失，需稳定存储机制 | 10 | 2 |
| 5 | [#1329](https://github.com/anthropics/skills/issues/1329) | **Agent 记忆压缩**：`compact-memory` Skill——用符号化记法压缩 Agent 长程上下文 | 9 | 0 |
| 6 | [#189](https://github.com/anthropics/skills/issues/189) | **插件去重**：`document-skills` 与 `example-skills` 内容重复，污染上下文 | 6 | 9 |

**提炼出的四大趋势方向：**

1. **可信生态建设** — 命名空间保护、Skill 来源认证（#492）、插件内容去重（#189）
2. **企业级协作** — 组织内 Skill 分享与权限管理（#228）
3. **Agent 工程化** — 长程上下文压缩（#1329）、推理质量门控 pipeline（#1385）、Skill 触发率可测性（#556）
4. **基础设施稳定性** — Skill 持久化（#62）、Bedrock 兼容性（#29）、评估框架修复（#1383、#1390、#1394）

---

## 3. 高潜力待合并 PR（评论活跃、尚未合并）

| PR | Skill | 亮点 | 风险信号 |
|----|-------|------|----------|
| [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer + skill-security-analyzer** | 元 Skill：五维度质量评分 + 安全审计，直击 #492 信任问题 | 创建较早（2025-11），需确认维护状态 |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | 覆盖测试哲学（Testing Trophy）、React 组件测试、AAA 模式等完整测试栈 | 社区测试需求旺盛，落地概率高 |
| [#822](https://github.com/anthropics/skills/pull/822) | **AWT (AI Watch Tester)** | 零代码 E2E 测试，Claude 具备视觉 + 浏览器控制能力 | 与 #723 互补，测试赛道拥挤但需求强 |
| [#1776](https://github.com/anthropics/skills/pull/1776) | **blast-radius** | 批量/破坏性操作前的"爆炸半径"检查清单 | 精准解决 DBA/运维痛点，实用性强 |
| [#525](https://github.com/anthropics/skills/pull/525) | **pyxel** | 复古像素游戏开发（Python），含 headless 运行与帧检查 | 小众但独特，社区黏性高 |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | 排版质量控制：孤儿词、 widows、编号错位 | 直击 AI 生成文档的通病 |

---

## 4. Skills 生态洞察

> **当前社区在 Skills 层面最集中的诉求是：从"能用"走向"可信、可靠、可量产"——即建立 Skill 的安全信任体系（命名空间/来源认证）、工程化评估框架（触发率/质量度量）与企业级分发机制（组织共享/插

---

# Claude Code 社区动态日报 · 2026-10-04

> 数据来源：github.com/anthropics/claude-code

---

## 一、今日速览

过去 24 小时内**无新版本发布**，社区动态集中在 Issue 与 PR 两端：一方面，围绕**上下文与数据安全**的老问题持续发酵（#62476 转录自动删除已积累 27 条评论、28 个 👍），2.1.286 的**空闲自动压缩**（#98747）成为新的争议焦点；另一方面，桌面端（Desktop Code tab）与 Windows/MSIX 平台问题密集爆发，仅 10-03 当天就新增十余条相关 Bug。PR 侧则以 `/diff` 面板行为修复和小型安全加固（sec-default）为主。

---

## 二、社区热点 Issues（精选 10 条）

**1. #62476 · 转录文件 30 天后被静默删除（27 评论 / 28 👍）**
讨论热度最高。用户发现 Claude Code 默认在 30 天后删除对话转录，且无提示、无恢复途径。已标记 `bug / reproduced`，长期未闭环，是社区对**数据留存与可配置性**不满的代表性议题。
🔗 https://github.com/anthropics/claude-code/issues/62476

**2. #98747 · 2.1.286 空闲压缩静默丢弃工作上下文（8 评论 / 4 👍）**
自 2.1.286 起，空闲会话会在 prompt cache 过期前被自动压缩，**无 opt-out、无警告**，长时运行会话的"地基"被直接丢弃。对重度长会话用户影响显著，属于典型的"静默行为变更"。
🔗 https://github.com/anthropics/claude-code/issues/98747

**3. #80576 · VS Code 扩展中 AskUserQuestion 组件遮挡前置文本（6 评论 / 10 👍）**
👍 数最高之一。当 Claude 先输出解释性文本、再调用提问组件时，前置文本被隐藏，用户看不到上下文就要作答。IDE 集成体验的高频痛点。
🔗 https://github.com/anthropics/claude-code/issues/80576

**4. #79706 · TUI 支持终端图形协议以内联显示图片（5 评论 / 8 👍）**
功能请求中人气最高。当前 Claude Code 在终端无法显示图片，社区希望支持 Kitty/iTerm2 等图形协议。反映 TUI 多媒体能力期待。
🔗 https://github.com/anthropics/claude-code/issues/79706

**5. #64029 · Windows 11 上 MSIX 安装失败 HRESULT 0x80073CFF（9 评论）**
评论数第二。用户表示"所有绕过方案均已尝试"，安装环节即被阻断，属于**平台准入门槛级**问题。
🔗 https://github.com/anthropics/claude-code/issues/64029

**6. #92210 · Desktop 深链 `claude://code/new?folder=` 误建临时工作区（6 评论 / 3 👍）**
当 folder 参数等于当前已选目录时，会额外开启 scratch workspace；且已确认 1.37937.3 / 1.40609.0 无此行为，属**回归**。
🔗 https://github.com/anthropics/claude-code/issues/92210

**7. #99333 · Code tab "Start with worktree" 在 UNC 网络共享路径上始终失败（回归）**
约 2026-09 起出现，直接影响企业内网/网络盘场景的仓库使用。当日新增、尚无评论，但影响面偏大。
🔗 https://github.com/anthropics/claude-code/issues/99333

**8. #99278 · Hook 创建的非 Git worktree 目录退出时被无提示删除（已 CLOSED）**
`--worktree` 会话目录若非 Git 仓库，退出时被直接移除并丢弃改动。当日提交、当日关闭，处理速度较快，可作为正向案例关注。
🔗 https://github.com/anthropics/claude-code/issues/99278

**9. #99330 · 呼吁公布 Max 5x/20x 周额度并增加用量历史（新增）**
用户用本地转录按 API 价格折算，实测 20x 周用量仅约为 5x 的 1.6 倍（而非 4 倍）。与 #97449（计量可能错误）呼应，**用量透明度**正在成为集中诉求。
🔗 https://github.com/anthropics/claude-code/issues/99330

**10. #95122 · worktree 隔离下拒绝无 git 的 Bash 调用（2 评论）**
2.1.272/2.1.273 在 worktree 隔离会话中拒绝纯路径操作（变量赋值、`$(…)`、循环、heredoc 等），3 天累计 75 次拒绝，与 2.1.257 changelog 承诺不符，属沙箱策略过度收紧。
🔗 https://github.com/anthropics/claude-code/issues/95122

**其他值得留意**：#99334（越权编辑工作目录外文件）、#99332（虚拟化转录导致屏幕阅读器内容被卸载，a11y）、#99327（Code tab 文本被折叠但仍被 TTS 朗读）、#99263（`claudeProcessWrapper` 导致权限模式回退为 default）。

---

## 三、重要 PR 进展

过去 24 小时仅有 6 条 PR 更新，全部列出：

**1. #99137 · sec-default：插件只能收紧、不能放宽权限**
在 sec-default 生效范围内，用户插件不再能解除 deny/ask 规则或修改被固定的变量。安全边界加固，且无需新引擎支持。
🔗 https://github.com/anthropics/claude-code/pull/99137

**2. #99118 · /diff 面板打开期间允许显示 toast 提示**
此前 `/diff` 使用 `holdToasts: true`，会阻塞其他插件的瞬时提示；现改为面板/对话框打开时仍可正常弹出。
🔗 https://github.com/anthropics/claude-code/pull/99118

**3. #99141 · /diff 在尚无渲染方时保留面板，具备条件后立即显示**
解决"页面未挂载宿主时打开 /diff 面板被丢弃"的问题，依赖 #99118 的堆叠提交。
🔗 https://github.com/anthropics/claude-code/pull/99141

**4. #99206 · /diff 停靠面板首行与引擎头部行对齐修复**
停靠状态下 `/diff` 头部上方多出的空行由两行变一行，属 UI 细节修正。
🔗 https://github.com/anthropics/claude-code/pull/99206

**5. #81672 · fix(hookify)：包导入不再依赖安装目录名**
修复插件目录非严格命名为 `hookify` 时（如 marketplace 安装）的导入失败，关联 #69665、#81448。
🔗 https://github.com/anthropics/claude-code/pull/81672

**6. #77977 · docs：记录 marketplace 源的 skipLfs 选项（已 CLOSED）**
为 `github`/`git` 类型 marketplace 源补充 `skipLfs` 文档与示例，纯文档变更。
🔗 https://github.com/anthropics/claude-code/pull/77977

---

## 四、功能需求趋势

从本期 Issues 标签与内容看，社区关注方向集中在以下几条主线：

| 方向 | 代表 Issue | 说明 |
|---|---|---|
| **IDE / 桌面端集成** | #80576、#99328、#99327 | VS Code 扩展与 Desktop Code tab 的组件遮挡、状态同步、文本渲染问题最密集 |
| **Cowork / Projects 协作** | #99156、#98385、#99325 | 希望本地 Claude Code 会话成为项目线程、Remote Control 重启后保留目录授权 |
| **成本与用量透明** | #99330、#97449 | 要求公布额度规则、提供用量历史，质疑计量准确性 |
| **TUI 能力扩展** | #79706 | 终端内联图片等富媒体显示 |
| **MCP 与认证** | #96792、#85020 | OAuth discovery 失败、自托管连接器工具被静默屏蔽 |
| **沙箱与权限粒度** | #95122、#99334、#99263 | worktree 隔离误拒、越权编辑、权限模式失效 |
| **可访问性（a11y）** | #99332 | 虚拟化渲染与屏幕阅读器冲突，且用户已给出根因与临时方案 |
| **平台兼容性** | #64029、#99192、#99301、#99331 | Windows/MSIX、Git Bash、FreeBSD(Linuxulator) 等平台问题集中 |

---

## 五、开发者关注点总结

1. **"静默行为"是最大的信任消耗点**
   #62476（静默删除转录）、#98747（静默压缩且无 opt-out）、#99278（静默删除 worktree 目录）三条问题指向同一模式：**变更无告知、无配置开关、不可恢复**。建议官方优先补齐"提示 + 开关 + 可恢复"三件套。

2. **上下文与数据持久化焦虑**
   长会话用户对上下文被压缩、转录被清理高度敏感，尤其当这些行为发生在"空闲"等用户不可见时刻。

3. **权限与边界的双向失准**
   一边是沙箱过度收紧（#95122 无 git 的 Bash 被拒），一边是边界失效（#99334 越权编辑、#99263 权限模式回退）。说明权限模型在"隔离态"与"配置态"下的行为一致性仍需打磨。

4. **Windows / MSIX 是当前最大平台短板**
   安装失败、终端集成失效、PATH 快照错误、UNC 路径 worktree 失败——四条独立问题叠加，构成 Windows 用户的主要阻塞。

5. **计量与成本缺乏可验证性**
   开发者开始自行按 API 价格折算用量来"反向验证"官方额度，这本身就是透明度的信号缺失。公布额度规则与提供用量历史，是低成本高收益的改进项。

6. **社区参与质量较高**
   多条 Issue 附带复现步骤、环境版本、甚至根因定位与临时方案（如 #99332、#99301），维护方响应与修复窗口（如 #99278 当日关闭）值得肯定。

---

*本日报基于 2026-10-04 抓取的 GitHub 公开数据生成，评论数与 👍 数为累计值。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-10-04** · **数据来源：** github.com/openai/codex

---

## 一、今日速览

过去 24 小时 Codex 项目持续高强度迭代：**Rust 实现 0.162.0-alpha 版本连续发布 8→11 四个构建**，节奏明显加快；社区侧，**VS Code 扩展的"消息队列卡死 / markedStreaming 残留"问题**成为最大热点，多名开发者反馈提示词发送失败或被无声丢弃；与此同时，**Windows + Codex App / dots 云电脑 / Computer Use 三条线**集中爆发大量 bug 报告，平台一致性短板凸显。

---

## 二、版本发布

过去 24 小时发布了 **4 个连续的 alpha 预发布版本**，均为 `0.162.0-alpha` 系列（Rust 实现）：

| 版本 | 链接 |
|---|---|
| rust-v0.162.0-alpha.8 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.8) |
| rust-v0.162.0-alpha.9 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.9) |
| rust-v0.162.0-alpha.10 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.10) |
| rust-v0.162.0-alpha.11 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.11) |

短时间内连发 4 个 alpha，说明团队正围绕 0.162 主线做密集 bugfix 与稳定性收敛，建议关注后续正式版切版节点。

---

## 三、社区热点 Issues（Top 10）

1. **#48774 [Codex Remote pairing fails on Android](https://github.com/openai/codex/issues/48774)** — 39 评论 / 👍23
   安卓手机扫描 PC 二维码后卡在 "Authorize this phone" 流程，跨平台远程配对体验断裂。涉及 windows-os / auth / remote 标签，是目前社区关注度最高的 issue，**直接阻碍 Codex Remote 在移动场景的可用性**。

2. **#49458 [Windows dot-started local tasks 缺少 Computer Use 工具](https://github.com/openai/codex/issues/49458)** — 38 评论 / 👍16
   通过 dot 启动的本地任务无法使用 Computer Use，普通本地会话却正常。**反映出 dots 与 desktop 客户端之间存在工具暴露不一致**，对依赖 dots 编排自动化的 Pro 用户是阻塞性问题。

3. **#45119 [macOS 14.2 sandbox 启动失败：未绑定变量 TIOCSTI](https://github.com/openai/codex/issues/45119)** — 36 评论 / 已 CLOSED
   长期悬而未决的 macOS 沙箱 bug 本次更新已被关闭，**`upstream main` 已包含对应修复**，CLI 0.154.0-alpha.6.2 及更新版本可缓解。

4. **#49532 [请把 Branch 选择功能放回 Codex App](https://github.com/openai/codex/issues/49532)** — 31 评论 / 👍64
   **今日点赞最高的 issue**。新版 Codex App 把分支选择入口移除，社区强烈呼吁回归。👍/评论比超过 2:1，说明这是 UX 回退引发的群体性诉求。

5. **#49988 [Codex VS Code 扩展更新后消息间歇性丢失](https://github.com/openai/codex/issues/49988)** — 30 评论 / 👍43
   按 Enter 提交后 composer 被清空但消息未进入对话、模型无响应，重复发送后才偶尔成功。**VS Code 扩展近期稳定性出现明显回退**。

6. **#50118 [VS Code Codex 在 turn 完成后仍排队新提示](https://github.com/openai/codex/issues/50118)** — 24 评论 / 👍10
   `markedStreaming=true` 状态残留导致后续提示被错误入队，新线程前几轮正常后开始出问题，与 #49988、#50486 形成**同类问题集群**。

7. **#50403 [VS Code 扩展排队消息静默发送失败](https://github.com/openai/codex/issues/50403)** — 23 评论
   错误信息 "Failed to release queued message send lock" 伴随 `SyntaxError: "undefined" is not valid JSON`。**进一步印证 VS Code 扩展队列/锁机制存在回归**。

8. **#49682 [ChatGPT dots 云电脑文件突然不可用](https://github.com/openai/codex/issues/49682)** — 15 评论
   `/workspace/shared/<service>` 目录与服务终端在同一天内消失，**dots 云电脑的持久性与多任务隔离**问题引发开发者对生产可用性的担忧。

9. **#18620 [Windows 沙箱 shell 命令失败：CreateProcessWithLogonW 1326 / 1909](https://github.com/openai/codex/issues/18620)** — 11 评论
   4 月份开的老 issue 仍处于 OPEN 状态，**Windows 沙箱在某些账号/权限组合下持续无法使用**，跨用户复现率较高。

10. **#50451 [10 月 2 日全球速率限额重置未对 Pro 账号生效](https://github.com/openai/codex/issues/50451)** — 5 评论 / 👍2
    Tibo 公开宣布"重置已下发"，但实际账户未生效。**计费/限额与官方公告不一致**，影响 Pro 用户的实际工作流。

---

## 四、重要 PR 进展（Top 10）

> 注：今日 20 条最新更新的 PR 全部由 `copyberry[bot]` 提交且目前状态为 CLOSED，更像是批量提议或实验性重构，建议持续观察是否被正式合入主干。

1. **[#50727](https://github.com/openai/codex/pull/50727) Show model and reasoning effort at top of task details** — 在 agents 概览顶部展示模型与推理强度，未知值显示为 `Unknown`，便于一眼分辨任务配置。

2. **[#50720](https://github.com/openai/codex/pull/50720) Decode Windows Terminal's mapped Shift+Enter** — 修复 Windows Terminal 把 `ESC[13;2u` 拆成单事件导致 composer 不换行的问题。

3. **[#50700](https://github.com/openai/codex/pull/50700) Transport creates Windows remote-control socket directory** — Windows 远程控制 socket 父目录使用受保护 DACL，避免继承临时目录的宽松 ACL。

4. **[#50695](https://github.com/openai/codex/pull/50695) Preserve local Markdown link labels in TUI** — TUI 渲染 Markdown 时保留作者自定义 label，避免路径型链接被折叠成纯 URL。

5. **[#50687](https://github.com/openai/codex/pull/50687) Keep third-party tools deferred in strict Code Mode Only** — Code Mode Only 模式下保持第三方工具 defer 状态，避免 MCP 目录变化改变 eager 前缀。

6. **[#50564](https://github.com/openai/codex/pull/50564) Allow transcript selection while bottom modals are open** — 计划确认弹窗期间允许鼠标选中并复制 plan 文本，提升可读性。

7. **[#50555](https://github.com/openai/codex/pull/50555) Skip daemon auto-start for Windows-mounted WSL homes** — 在 DrvFs/9p 挂载的 WSL 目录下跳过 daemon 自启动，避免启动失败。

8. **[#50546](https://github.com/openai/codex/pull/50546) Keep MCP resource helpers available in code mode** — `CodeModeOnly` 下 MCP 资源辅助函数始终注册，修复动态增删 server 时定义抖动。

9. **[#50540](https://github.com/openai/codex/pull/50540) Send incremental tool catalog updates in Responses Lite** — 开启 `IncrementalTools` 时增量推送工具目录，保留早期请求的稳定性。

10. **[#50507](https://github.com/openai/codex/pull/50507) Record Windows sandbox service stop diagnostics** — 在注册表中持久化 sandbox 服务的停止原因与 HRESULT，区分主动停止、broker 失败等情形，便于事后排障。

---

## 五、功能需求趋势

通过对今日 50 条 Issue 与 39 条 PR 的归纳，社区当前关注的功能方向集中在以下几类：

| 方向 | 代表 Issue / PR | 关注度 |
|---|---|---|
| **VS Code / IDE 扩展稳定性** | #49988, #50118, #50403, #50486, #50395 | 🔥🔥🔥🔥🔥 |
| **Windows 平台一致性**（桌面、sandbox、远程、dot） | #48774, #49458, #50428, #50171, #18620, #50009, #50667 | 🔥🔥🔥🔥🔥 |
| **dots 云电脑 / Computer Use 工具暴露** | #49458, #49682, #50388, #44988, #50728 | 🔥🔥🔥🔥 |
| **Code Mode / MCP / Responses Lite 协议** | #50687, #50546, #50540, #50536, #50562, #49665 | 🔥🔥🔥 |
| **沙箱 & 安全隔离** | #45119, #47640, #50507, #18620 | 🔥🔥🔥 |
| **速率限制 / 账户配额** | #50451, #50501 | 🔥🔥 |
| **TUI / 桌面 UX 体验** | #49532（呼声最高）, #50727, #50720, #50695, #50564 | 🔥🔥🔥 |
| **企业/合规（GCP / Bedrock GovCloud）** | #50510, #46451 | 🔥 |

可以看到，**"跨平台一致性"和"VS Code 扩展稳定性"** 已成为 Codex 当前最显性的两大痛点。

---

## 六、开发者关注点

综合 issue 评论与点赞情绪，开发者反馈中暴露最强烈的痛点：

1. **VS Code 扩展的"消息消失 / 队列锁死"问题已成集群**。多位用户在 #49988、#50118、#50403、#50486 中描述近乎相同症状：`markedStreaming=true` 状态残留、消息被静默丢弃、JSON 解析失败等，**强烈建议团队把这几条 issue 合并到同一根因排查**。
2. **Windows 用户被严重忽略**。从 #48774 远程配对、#18620 sandbox shell 调用、#50428 AbsolutePathBuf 反序列化，到 #50667 启动崩溃，几乎每一个 Windows 专属标签的 issue 都积累了较多互动。**Windows 是 Codex 当前最大的平台短板**。
3. **dots 云电脑缺少持久化与隔离保证**。#49682、#50388 等 issue 显示工作环境/文件会"凭空消失"，**对把 dots 当作真实开发环境的用户是不可接受的可靠性问题**。
4. **Product 决策回退引发 UX 反弹**。#49532（要求恢复 Branch 选择）以 64 👍 高居榜首，社区对"未经充分沟通就移除成熟功能"敏感度高，**需在 changelog 中强化产品变更沟通**。
5. **速率限制与计费数据可信度下降**。#50451、#50501 集中暴露官方公告与账户实际状态不一致，**Pro/Plus 用户对"账单显示"的不满正在升温**。
6. **Code Mode / MCP 协议细节仍有边角问题**。多个 PR 围绕"deferred 工具是否影响 eager schema"、"shared MCP types 在 exec description 中的稳定性"展开，**说明 Code Mode 已进入精修阶段**，但尚未到完全可对外承诺的成熟度。

---

*日报完。数据时间窗口：过去 24 小时（截至 2026-10-04）。如需深挖某一方向（如 Windows sandbox、VS Code 扩展队列、dots 持久化）可在后续日报中单独展开追踪。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：2026-10-04**

---

## 1. 今日速览

过去 24 小时内，Gemini CLI 社区在 agent 可靠性和多模态数据处理两个方向集中发力。多个高优先级 PR 被关闭，修复了持久化状态安全、会话恢复重复响应、以及用户 hold 指令被 agent 覆盖等关键问题。Issue 侧，subagent 状态误报、generalist agent 挂起等长期问题持续受到关注。

---

## 2. 版本发布

**v0.64.0-nightly.20261003.gfb972b2f8**

仅包含一项修复：确保 Enter 和 Spacebar 能可靠确认可选项列表选项，由 @ugorla-dev 贡献（PR #29502）。这是一个交互体验层面的小修复。

🔗 [Release v0.64.0-nightly.20261003.gfb972b2f8](https://github.com/google-gemini/gemini-cli/releases/tag/v0.64.0-nightly.20261003.gfb972b2f8)

---

## 3. 社区热点 Issues（Top 10）

### ① #22323 — Subagent 在 MAX_TURNS 后被误报为 GOAL 成功
**优先级 P1 | 💬 13 评论 | 👍 2**

`codebase_investigator` subagent 在未完成分析就触达最大轮数限制时，仍上报 `status: "success"` 和 `Termination Reason: "GOAL"`，掩盖了中断事实。此问题直接影响用户对 subagent 输出可靠性的判断，社区讨论活跃，已被标记为需要重新测试。

🔗 [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)

### ② #21409 — Generalist agent 无限挂起
**优先级 P1 | 💬 8 评论 | 👍 8（最高点赞数）**

用户报告每当 CLI 委派给 generalist agent 时就会永久挂起，哪怕是简单的文件夹创建操作。明确指示模型不使用 subagent 后问题消失。高点赞数表明影响范围较广，是社区最不满的痛点之一。

🔗 [Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)

### ③ #19873 — 利用模型的 bash 原生能力：零依赖 OS 沙箱与执行后意图路由
**优先级 P2 | 💬 9 评论 | 👍 1**

提出让 Gemini 3 模型充分发挥其 bash 原生操作能力，通过零依赖沙箱和"执行后意图路由"机制，在不牺牲安全性的前提下使用 `grep`/`cat`/`sed`/`awk` 等 POSIX 工具链探索代码库。这是一个架构级的探索方向。

🔗 [Issue #19873](https://github.com/google-gemini/gemini-cli/issues/19873)

### ④ #24246 — 工具数超过 128 时报 400 错误
**优先级 P2 | 💬 3 评论**

当可用工具超过阈值时，CLI 直接抛出 400 错误而非智能收敛工具范围。用户期望 agent 能根据上下文自主限制启用的工具集合。标题写 400 工具，正文写 128，存在不一致但核心问题明确。

🔗 [Issue #24246](https://github.com/google-gemini/gemini-cli/issues/24246)

### ⑤ #22267 — Browser Agent 忽略 settings.json 覆盖配置
**优先级 P2 | 💬 4 评论**

Browser Agent 完全忽略全局或项目级 `settings.json` 中的配置（如 `maxTurns`）。AgentRegistry 初始化阶段虽正确读取并合并了配置，但后续执行未生效。这暴露了配置系统在特定 agent 类型上的不一致性。

🔗 [Issue #22267](https://github.com/google-gemini/gemini-cli/issues/22267)

### ⑥ #21968 — Gemini 不使用 skills 和 sub-agents
**优先级 P2 | 💬 7 评论**

用户反馈 CLI 几乎不会主动使用自定义 skills 和 sub-agents，即使任务高度相关，仍需用户显式指定。这削弱了自定义扩展的实际价值，属于 agent 自主调度策略的缺陷。

🔗 [Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)

### ⑦ #21983 — Wayland 环境下 browser subagent 失败
**优先级 P1 | 💬 4 评论 | 👍 1**

在 Wayland 显示服务器环境中，browser subagent 无法正常工作。这对 Linux 开发者是实际障碍，P1 优先级反映了其影响面。

🔗 [Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983)

### ⑧ #22186 — get-shit-done output hook 导致崩溃
**优先级 P1 | 💬 3 评论**

在 output hook 即将打印用户摘要时反复崩溃，影响任务完成后的最终输出环节，同等 P1 优先级聚焦于核心流程稳定性。

🔗 [Issue #22186](https://github.com/google-gemini/gemini-cli/issues/22186)

### ⑨ #20079 — 符号链接的 agent 文件不被识别
**优先级 P2 | 💬 4 评论**

`~/.gemini/agents/filename.md` 如果是符号链接则无法被识别为 agent。对使用 dotfiles 管理配置的用户来说，这是一个现实痛点。

🔗 [Issue #20079](https://github.com/google-gemini/gemini-cli/issues/20079)

### ⑩ #22672 — Agent 应阻止/劝阻破坏性行为
**优先级 P2 | 💬 3 评论 | 👍 1**

模型在复杂 git 操作中偶尔使用 `git reset` 或 `--force`，而更安全的替代方案存在。要求对数据库等关键资源的修改操作增加风险意识防护。

🔗 [Issue #22672](https://github.com/google-gemini/gemini-cli/issues/22672)

---

## 4. 重要 PR 进展（Top 10）

### ① #29402 — fix(cli): 使持久化状态写入具备失败安全性（已关闭/合并）
**P1 | 作者：Oscar-Williams**

写入 `state.json` 改为"临时文件写入 + fsync + 原子重命名"流程，防止中断保存产生截断的 JSON 文件并静默清空持久化状态。严格保障 CLI 状态数据完整性。

🔗 [PR #29402](https://github.com/google-gemini/gemini-cli/pull/29402)

### ② #29397 — fix(agent): 防止会话上下文污染和中断轮次的无限循环（已关闭/合并）
**P1 | 作者：dylanyunlon**

此前 agentic 循环流被 SIGINT、超时或工具中止打断时，CLI 会把合成的"中断提示"消息附加到会话历史中，引发严重的上下文污染和潜在无限循环。该 PR 针对此根因进行修复。

🔗 [PR #29397](https://github.com/google-gemini/gemini-cli/pull/29397)

### ③ #29394 — fix(scheduler): 在调度层阻止变异工具以强制执行用户 hold 指令（已关闭/合并）
**P1 | 作者：dylanyunlon**

解决 agent 过度行动偏好，即用户说"等待/先解释/先不要修复"时，agent 仍触发 `replace`、`write_file`、`run_shell_command` 等破坏性调用。在 scheduler 层建立硬拦截。

🔗 [PR #29394](https://github.com/google-gemini/gemini-cli/pull/29394)

### ④ #29400 — Fix/29365 重复工具响应（已关闭/合并）
**P1 | 作者：abhashkumar9051**

修复使用 `-r` 恢复会话时出现重复 `functionResponse` 的问题。此前数据同时存在于 `toolCalls[].result` 和持久化的 user 消息中，恢复时会重放两次。

🔗 [PR #29400](https://github.com/google-gemini/gemini-cli/pull/29400)

### ⑤ #29590 — fix(core): 保留 functionResponse.parts（开放中）
**作者：T1misageek**

修复了工具返回的图片（如模型通过 `read_file` 读取的截图）因 `stripToolCallIdPrefixes()` 重建响应时丢弃 `functionResponse.parts` 而无法到达模型的问题。多模态输入链路的关键修复。

🔗 [PR #29590](https://github.com/google-gemini/gemini-cli/pull/29590)

### ⑥ #29621 — fix(core): 保留 subagent 多模态工具响应部分（开放中）
**作者：shivangsharma01**

修复本地 subagent 向模型传递工具结果时，图片数据被丢弃的问题。按 call ID 追踪响应 parts 数组，按原始顺序完整附加结果。

🔗 [PR #29621](https://github.com/google-gemini/gemini-cli/pull/29621)

### ⑦ #29398 — fix(mcp): 初始工具发现限制在短超时内（已关闭/合并）
**P1 | 作者：sanjibani**

MCP 服务器返回不匹配的 JSON-RPC id 时，SDK 正确丢弃坏响应，但会等待完整 10 分钟超时。此 PR 引入短超时边界，避免工具发现阶段长时间阻塞。

🔗 [PR #29398](https://github.com/google-gemini/gemini-cli/pull/29398)

### ⑧ #29505 — fix: 支持使用 keep-id 的无根 Podman（开放中）
**P1 | 作者：bl4987637-code**

修复无根 Podman 沙箱启动问题，通过正确保留宿主机用户的 UID/GID 来避免映射用户创建失败。

🔗 [PR #29505](https://github.com/google-gemini/gemini-cli/pull/29505)

### ⑨ #29597 — fix(companion): 允许 gVisor/runsc 沙箱的 IPC socket 回退（开放中）
**P2 | 作者：elberthc-byte**

在 gVisor（`GEMINI_SANDBOX=runsc`）环境下，用户空间网络栈隔离了容器回环接口，阻止了与宿主机的通信。此 PR 启用 stdio IPC 回退。

🔗 [PR #29597](https://github.com/google-gemini/gemini-cli/pull/29597)

### ⑩ #29399 — fix(core): 编辑期间保留无关注释（已关闭/合并）
**P2 | 作者：csy20**

强化 replace 工具契约，确保无关注释和代码逐字保留；引导模型进行最小化、分离式编辑，而非重写大段中间块；新增基于 OAuth 编辑案例的行为回归 eval。

🔗 [PR #29399](https://github.com/google-gemini/gemini-cli/pull/29399)

---

## 5. 功能需求趋势

从全部 Issue 中提炼出的五大功能方向：

**① Subagent 可靠性（最热门）**  
#22323（状态误报）、#21409（挂起）、#21968（使用不足）、#22267（配置失效）、#21983（Wayland 失败）等多项问题指向同一个核心痛点：subagent 的调度、执行、状态上报全链路缺乏可靠性保障。

**② 多模态数据完整性（增长迅速）**  
#29590、#29621 两个 PR 从工具调用和 subagent 两个路径修复图片数据丢失问题，反映出多模态输入（截图、图表阅读）正成为实际使用场景中的重要需求。

**③ 沙箱与容器安全（长期方向）**  
#19873（零依赖 OS 沙箱）、#29505（Podman）、#29597（gVisor）显示社区正在推进多沙箱后端的兼容性矩阵，同时期望模型能在安全约束下自由使用 bash 原生能力。

**④ 配置系统一致性**  
#22267（settings.json 被忽略）、#20079（symlink 不被识别）说明配置系统的预期与实际行为存在偏差，用户依赖配置文件实现自定义 agent 和调优。

**⑤ AST 感知工具（探索性方向）**  
#22745、#22746、#22747 构成一个 EPIC 系列，探讨 AST 感知的文件读取、搜索和代码库映射能否减少 token 消耗并提升 agent 质量。

---

## 6. 开发者关注点

**① 状态或结果的可信度是最高优先级痛点。**  
#22323 的 subagent 误报 GOAL 成功、#21409 的无限挂起、#22186 的 output hook 崩溃，都让开发者无法信任 CLI 的执行结果。用户需要清晰的失败信号，而非伪造的成功。

**② 多模态数据在链路中被静默丢弃。**  
#29590、#29621 暴露的问题是"静默"的——模型读到的截图消失了，但没有任何报错。这种无声的数据丢失对基于视觉的代码审查、UI 调试等工作流是致命的。

**③ 配置覆盖机制亟需修复。**  
用户精心设置 `settings.json` 中的 `maxTurns` 等参数，却发现 Browser Agent 完全无视。配置文件的意义在于可预测性，当前行为违背了这一基本预期。

**④ 会话恢复的完整性和状态安全性受关注。**  
#29402（持久化状态写入安全）和 #29400（重复工具响应）的修复表明，session 层面的数据一致性问题已引发社区和核心团队的共同重视。且用户期望恢复的会话与原始会话行为一致，而非引入新的诡异问题。

**⑤ 安全约束与 agent 自主性的平衡是持续张力。**  
#29394（用户 hold 指令被忽略）和 #22672（破坏性 git 操作）揭示了一个矛盾：模型被期望自主执行，但又需在用户明确暂停或面临危险操作时严格遵守约束。scheduler 层拦截是近期的一个重要探索方向。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-10-04）

## 1. 今日速览
今日无新版本发布，社区共更新 25 条 Issue，活跃度集中在 MCP 集成故障、ACP 模式能力缺失及模型兼容性问题上。最严峻的未决问题是 macOS 安全更新后 CLI 因陈旧绑定文件完全不可用（#4998），而近期关闭的高赞 Issue 显示 BYOK 与 Agent/Plugin 机制已得到修复。

## 2. 版本发布
（过去 24 小时无新 Release，本节省略）

## 3. 社区热点 Issues
1. **#4998** [OPEN] macOS 更新/重启后 CLI 因 `.mcp-writer.binding` 保留陈旧设备 ID 无法使用  
   [链接](https://github.com/github/copilot-cli/issues/4998)  
   影响 1.0.90-3，所有新/恢复会话均卡死；👍6，评论 7，属高优先级可用性故障。

2. **#4012** [CLOSED] BYOK 模型 `glm-5.2:cloud` 不支持 `--reasoning-effort max`  
   [链接](https://github.com/github/copilot-cli/issues/4012)  
   👍23（全场最高），已关闭修复；反映自定义模型接入时的参数兼容痛点。

3. **#2795** [CLOSED] `--agent` 与 `--plugin-dir` + `-p` 组合失效  
   [链接](https://github.com/github/copilot-cli/issues/2795)  
   👍17，已解决；插件目录下的 Agent 未被正确发现，影响非交互流水线。

4. **#1287** [CLOSED] 无法添加 `anthropics/claude-plugins-official` 市场  
   [链接](https://github.com/github/copilot-cli/issues/1287)  
   👍13，因插件名非 kebab-case 校验失败，已处理；涉及插件市场健壮性。

5. **#5015** [OPEN] 请求键盘可操作的翻页器（Vim/less 风格导航聊天历史）  
   [链接](https://github.com/github/copilot-cli/issues/5015)  
   👍3，禁用鼠标后仅能整页翻动，长输出阅读困难；无障碍/终端体验需求。

6. **#4946** [OPEN] 后台 Shell 完成通知后新轮次出现 HTTP 400 `content[].thinking`  
   [链接](https://github.com/github/copilot-cli/issues/4946)  
   评论 4，涉及会话状态与 API 契约错位，导致请求被拒。

7. **#5044** [OPEN] 1.0.87 回归：无关工具 `_meta` 差异致 “MCP tool catalog changed”  
   [链接](https://github.com/github/copilot-cli/issues/5044)  
   在工具快照与连接竞态下调用失败，MCP 稳定性回归。

8. **#5040** [OPEN] MCP OAuth：Entra ID 拒绝 127.0.0.1 回调（AADSTS50011）  
   [链接](https://github.com/github/copilot-cli/issues/5040)  
   四个远程 MCP 服务器鉴权受阻，缺乏 localhost 覆盖配置。

9. **#5042** [OPEN] HydraFusion 路由模型 400 后降级至小上下文模型致工具集中途变更  
   [链接](https://github.com/github/copilot-cli/issues/5042)  
   会话进行 37 分钟后被重路由，静态提示无法加载，破坏连续性。

10. **#5049** [OPEN] Windows 下 ACP 模式 Computer Use 插件不可用（虽 CLI 已启用）  
    [链接](https://github.com/github/copilot-cli/issues/5049)  
    ACP 会话报告插件缺失，命令可见但 MCP 未挂载，跨协议能力割裂。

## 4. 重要 PR 进展
过去 24 小时仅 1 条 PR 更新：
- **#5046** [OPEN] Initial commit — 作者 `c6r8h48msf-debug`，内容为初始提交占位，无实质代码或修复，疑似调试/误提。  
  [链接](https://github.com/github/copilot-cli/pull/5046)  
**无重要功能或缺陷修复 PR 合入。**

## 5. 功能需求趋势
- **MCP 生态与鉴权**：大量 Issue 指向 OAuth 流程（Entra、Atlassian、Figma）、工具目录一致性、连接阈值配置，表明远程 MCP 是企业集成重点。
- **ACP 模式增强**：暴露模型列表（#4880）、启用 Computer Use（#5049）、开放辅助审批（#5047），社区希望 ACP 协议对齐 CLI 完整能力。
- **模型与 BYOK 支持**：推理强度参数、compact 空响应（#5045）、HydraFusion 路由降级，反映多模型路由与自带密钥的成熟度需求。
- **终端与输入体验**：Vim 风格翻页、CJK 粘贴乱码、快捷键冲突（#5043），指向专业开发者对键盘流与本地化的期待。
- **会话与上下文管理**：Plan 模式纯净上下文（#5041）、/compact 失败，显示长任务下上下文压缩的可靠性关切。

## 6. 开发者关注点
- **鉴权摩擦**：MCP 的 OAuth 回调、令牌并发刷新、市场校验等高频出错，是接入外部服务的首要痛点。
- **跨平台一致性**：macOS 设备 ID 僵死、Windows 任务栏图标、Linux sandbox DNS 失效，说明环境适配仍碎片化。
- **协议能力鸿沟**：ACP 相较原生 CLI 缺失插件/模型选择/审批，远程客户端体验打折。
- **模型调用健壮性**：特定模型（gpt-6.1-sol、glm-5.2）参数或压缩失败，BYOK 用户需更清晰的错误与兼容层。
- **交互细节**：滚动、复制快捷键、多行问答等终端人机工程问题虽小但影响日常流畅度。

---
*报告基于 github.com/github/copilot-cli 截止 2026-10-04 的公开动态生成，供技术开发者参考。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>



# OpenCode 社区动态日报（2026-10-04）

## 1. 今日速览
今日 OpenCode 社区活跃度极高，主要围绕 **v2 Beta 版本的稳定性治理**、**Free Tier（免费额度）限制的多场景误伤**以及 **MCP 生态的健壮性**展开。社区提交了大量高质量的修复 PR（如会话恢复、MCP 重连、工具输入校验等），同时用户端对内存溢出（OOM）和会话驱逐策略的反馈依然集中。

## 2. 版本发布
* **无**：过去 24 小时内官方无新版本发布。

---

## 3. 社区热点 Issues（Top 10）

以下挑选了过去 24 小时内评论和互动最热烈的 10 个 Issue，涵盖了阻塞性 Bug、配置回归和高需求 Feature。

### 1. 免费额度限制的多场景误伤（#52899）
* **链接**: [anomalyco/opencode#52899](https://github.com/anomalyco/opencode/issues/52899)
* **摘要**: 用户在外部调用时遇到 `OpenCode's free tier can only be used from within OpenCode` 报错。这是目前社区最头痛的鉴权问题，阻断了部分集成

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



# Pi 社区动态日报 — 2026-10-04

> 数据来源：`github.com/badlogic/pi-mono`（统计过去 24 小时动态）

---

## 1. 今日速览

Pi 正式发布 **v1.0.1** 稳定版，新增 Nix flake 安装方式，生态可安装性进一步完善。社区活跃度维持高位，过去一天内 Issues 与 PR 更新密集，TUI 性能、MCP 支持、剪贴板与渲染 bug 成为讨论焦点，其中 **Mac OS 高 CPU 占用（#7730，17 条评论）** 获得最多关注。

---

## 2. 版本发布

### v1.0.1

- **Nix flake 支持** — 可通过 `nix run github:earendil-works/pi/stable` 运行最新稳定版，`nix profile add github:earendil-works/pi/stable` 完成安装。详见 [Install pi](https://github.com/earendil-works/pi/blob/v1.0.1/packages/coding-agent/docs/quickstart.md#1-install-pi)。
- 完整变更清单见 [v1.0.1 Release](https://github.com/earendil-works/pi/releases/tag/v1.0.1)。

---

## 3. 社区热点 Issues（Top 10）

| # | 标题 | 状态 | 评论 | 👍 | 为什么重要 |
|---|------|------|------|----|-----------|
| 1 | [High CPU usage on Mac OS with long session](https://github.com/earendil-works/pi/issues/7730) | OPEN | 17 | 10 | macOS 用户反馈长会话下 CPU 持续 50–110%，疑似与上下文长度/会话时长相关，是当前最严重的性能问题 |
| 2 | [TuiMainScreen: full-screen redraw storm when changed rows sit above viewport](https://github.com/earendil-works/pi/issues/9255) | OPEN | 9 | 1 | 长对话（transcript 高度 >> 终端高度）时每帧触发全屏重绘，导致滚动/输入卡顿，是 TUI 渲染性能的核心痛点 |
| 3 | [regression: clipboard copy doesn't work anymore](https://github.com/earendil-works/pi/issues/9688) | CLOSED | 9 | 2 | 修复 #9618 时引入回归：OSC 52 剪贴板复制逻辑变更导致容器/SSH 环境下复制失效 |
| 4 | [Reconsider Home/End defaults in fullscreen mode?](https://github.com/earendil-works/pi/issues/10314) | OPEN | 7 | 5 | 全屏模式下 Home/End 行为从"移动光标"变为"滚动视口"，社区争论默认行为应保留哪一个 |
| 5 | [Fullscreen mouse selection survives session switch](https://github.com/earendil-works/pi/issues/9311) | OPEN | 7 | 0 | 全屏模式下切换会话时鼠标选中状态残留，修复方向明确（会话切换时清空选区） |
| 6 | [Can't interleave compaction requests with prompts in prompt queue](https://github.com/earendil-works/pi/issues/8301) | OPEN | 7 | 2 | 队列中 `/compact` 立即取消会话而非排队等待，影响长任务分阶段压缩的工作流 |
| 7 | [find tool: glob patterns with Windows separators silently return no results](https://github.com/earendil-works/pi/issues/9262) | OPEN | 5 | 0 | Windows 路径分隔符（`\`）导致 glob 静默返回空结果，跨平台兼容性问题 |
| 8 | [perf(tui): full re-render causes scroll/typing lag in sessions with 800+ messages](https://github.com/earendil-works/pi/issues/9807) | OPEN | 4 | 0 | 800+ 消息会话中 TUI 滚动/输入明显卡顿，Pi 采用全量重渲染而非增量 diff，与 OpenCode/OpenTUI 形成对比 |
| 9 | [codemode only mode: built-in read cannot expose image contents to scripts](https://github.com/earendil-works/pi/issues/10251) | OPEN | 4 | 0 | `codemode.mode: "only"` 下 `tools.read()` 无法将图片传递给模型，工具描述与实际行为不一致 |
| 10 | [/mcp menu disappeared in 1.0.1](https://github.com/earendil-works/pi/issues/10427) | CLOSED | 3 | 0 | v1.0.1 中 `/mcp` 菜单命令消失，即使无扩展运行也不显示，回归问题 |

---

## 4. 重要 PR 进展（Top 10）

| # | 标题 | 状态 | 内容 |
|---|------|------|------|
| 1 | [feat(coding-agent): add prompt template documentation eval](https://github.com/earendil-works/pi/pull/10261) | OPEN | 新增 `/current-time` prompt 模板的实时文档对比测试，要求生成命令精确展开为请求的 prompt 文本 |
| 2 | [fix(coding-agent): report settings save failures in interactive mode](https://github.com/earendil-works/pi/pull/10437) | OPEN | 修复 #10168：交互模式下 `SettingsManager` 写入失败（如只读 settings.json）现在会正确上报，而非静默排队 |
| 3 | [perf(tui): diff raw lines so unchanged lines keep pointer equality](https://github.com/earendil-works/pi/pull/10383) | CLOSED | TUI 渲染优化：对原始行做 diff，未变化行保持指针相等，减少不必要的重渲染 |
| 4 | [feat(ai): let apps name themselves in OpenAI logins](https://github.com/earendil-works/pi/pull/10433) | OPEN | 允许应用在 OpenAI OAuth 登录流程中自定义名称，避免被误认为是 "Pi" |
| 5 | [fix(ai): let caller headers override Codex originator and User-Agent](https://github.com/earendil-works/pi/pull/10429) | OPEN | 允许调用方通过请求头覆盖 Codex 的 originator 和 User-Agent，解决身份标识问题 |
| 6 | [feat(durable): expose durable thinking, websocket, and session options](https://github.com/earendil-works/pi/pull/10410) | OPEN | 为 durable 的 `ConversationStreamOptions` 新增 `thinkingBudgets`、`websocketConnectTimeoutMs`、`sessionId` |
| 7 | [feat(ai): support top-level instructions for OpenAI Responses-compatible providers](https://github.com/earendil-works/pi/pull/8734) | OPEN | 新增 `openai-responses` 的 `systemPromptFormat` 选项，支持将动态系统提示移至顶层 `instructions`（关闭 #8388） |
| 8 | [fix(coding-agent): bind Ctrl+H to delete backward on macOS](https://github.com/earendil-works/pi/pull/10402) | CLOSED | macOS 上将 Ctrl+H 绑定为向后删除（退格），与 CapsLock 映射 Ctrl 的场景兼容 |
| 9 | [fix(ai): dedupe tool call ids when a server reuses the same (call_id, id) pair](https://github.com/earendil-works/pi/pull/10397) | CLOSED | 修复部分 OpenAI 兼容 provider 重发同一 `(call_id, id)` 导致 assistant 消息中出现重复 tool-call 块的问题 |
| 10 | [feat(coding-agent): use llama.cpp classifier models natively](https://github.com/earendil-works/pi/pull/10382) | OPEN | 原生支持 llama.cpp 分类模型（Julia-1、Laya、Kev 等），通过 `/v1/systemone` 探测，不再依赖 `llama-cpp-classify` 回退 |

---

## 5. 功能需求趋势

从 Issues 与 PR 的分布来看，社区当前关注以下方向：

- **TUI 渲染性能** — 全量重渲染导致长会话卡顿（#9255、#9807），增量 diff 与虚拟化渲染是明确诉求。
- **MCP 生态增强** — Unix socket 支持（#10247）、Stateless MCP（#10416）、MCP 工具渲染（#10285）、`/mcp` 菜单回归（#10427）。
- **跨平台兼容性** — Windows 路径分隔符（#9262）、macOS Ctrl+H（#10402）、剪贴板 OSC 52 在容器/SSH 下的行为（#9688）。
- **OpenAI / Codex 身份与协议适配** — 应用名称自定义（#10433、#10429）、Responses API `instructions` 顶层化（#8734）、`configuration_update` 缓存感知推理切换（#9335）。
- **可观测性与调试** — 设置保存失败上报（#10437）、provider 错误体裁剪（#10423）、虚拟模型 footer 信息（#10436）。

---

## 6. 开发者关注点

社区反馈中反复出现的痛点与高频需求：

1. **长会话下的性能退化** — macOS CPU 飙升、TUI 滚动/输入卡顿，是当前最集中的负面反馈，尤其影响 800+ 消息规模的真实使用场景。
2. **默认行为的模糊性** — Home/End、全屏选区残留、剪贴板触发条件等交互细节，社区期望明确且可预期的默认值。
3. **安装与更新体验** — Nix flake 已加入，但 managed install 的旧版本目录累积（#10392，~168MB/版本）仍需自动清理机制。
4. **Provider 兼容性与身份标识** — 多个 PR/Issue 指向 Codex/OAuth 登录流程中身份信息错乱、tool call ID 重复等 provider 层问题。
5. **Codemode 与工具链稳定性** — 图片读取失败（#10251）、pnpm 全局更新后 QuickJS 路径失效（#10439）等边缘场景仍需加固。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-10-04

> 数据来源：github.com/QwenLM/qwen-code

---

## 1. 今日速览

今日社区几乎被 **Managed Agent / `qwen serve` 服务化架构** 刷屏：架构提案 #12380 以 45 条评论成为绝对焦点，同时围绕它衍生出大量并发稳定性、会话持久化、崩溃恢复的 P1 级缺陷（#13333、#13327、#13320 等），多由 `run-managed-agent-server-e2e.ts` 的新 e2e 模式复现。另一条主线是 **上下文 Token 治理**，#12028 及其子任务（#12333、#13003、#13004、#13321）持续讨论"省下的 Token 是否牺牲了任务成功率"。整体看，项目正从"CLI 工具"向"可托管的 Agent 服务 + Web Shell"快速演进，但稳定性与成本控制仍是主要矛盾。

---

## 2. 版本发布

过去 24 小时**无新 Release**。

---

## 3. 社区热点 Issues（精选 10 条）

**① #12380 [OPEN] proposal(serve): Managed Agent 双路径架构与分阶段交付** — 45 条评论
本期最热议题。定义分阶段 Managed Agent 架构：保留现有 TypeScript agent loop，将模型推理与工具环境供给解耦，为 Session 提供持久所有权、Workspace 绑定、可恢复的工具执行与稳定的 Web Shell。是整个服务化路线的顶层设计文档。
https://github.com/QwenLM/qwen-code/issues/12380

**② #12028 [OPEN] tracking(core): 非对话上下文 Token 治理** — 18 条评论
系统提示词、内置工具 schema、`QWEN.md`、skill 列表在每次请求都被重复计费，在大上下文模型上极易超过对话本身，却只以"小百分比"形式出现，难以被察觉。该 umbrella issue 是后续多项优化（#12333/#13003/#13004）的母题。
https://github.com/QwenLM/qwen-code/issues/12028

**③ #10887 [OPEN][P1] 重复工具错误无早期终止，会话在死循环中烧掉 5–14M tokens** — 7 条评论
生产环境 0.20.1–0.21.0 上，工具反复返回同一错误（如 `git remote -v` exit 128、权限拒绝）却无终止机制。P1 缺陷 + 真实成本数据，是社区对"失控循环"最直观的痛点表达。
https://github.com/QwenLM/qwen-code/issues/10887

**④ #13333 [OPEN][P1] ≥8 个并发 Turn 在模型作答后卡死（存储路径锁 convoy）** — 3 条评论
在中等配置硬件上，8 个以上并发 Turn 于模型返回后集体停滞。由新的 `--list-pagination` e2e 模式二分定位。直接影响多 Agent 场景的可用性。
https://github.com/QwenLM/qwen-code/issues/13333

**⑤ #13327 [OPEN][P1] 仅 coordinator 崩溃即卡死在途 Turn，尽管 Harness 仍存活** — 3 条评论
`--spring-restart-midturn` 模式稳定复现。暴露 Managed Agent 的容错边界问题：协调层单点崩溃不应拖垮已完成推理的 Turn。
https://github.com/QwenLM/qwen-code/issues/13327

**⑥ #12333 [OPEN] feat(ci): Token 优化缺少 recall / 任务成功率回归门禁** — 9 条评论
指出关键缺口：所有 Token 优化只衡量"省了多少"，无人衡量"代价多大"（工具召回、任务成功率）。在门禁建立前，最大的节省项无法被负责任地开启。是工程严谨性的代表性讨论。
https://github.com/QwenLM/qwen-code/issues/12333

**⑦ #12737 [OPEN] feat(acp-bridge): 配对 Legacy 与 Managed 引擎的 Stage B 主机集成** — 15 条评论
记录 2026-09-28 的调度决策：本地 `qwen serve` Managed 执行优先级低于首个 Hosted Managed 切片，保留已合并的配对主机基础与 M1/M3 防护。
https://github.com/QwenLM/qwen-code/issues/12737

**⑧ #13004 [OPEN] perf(memory): 无操作抽取后加入有界冷却** — 8 条评论
避免每次用户轮次成功后都触发新的 forked extractor；当近期轮次未产出持久内容时实施有界节奏策略，降低无效开销。
https://github.com/QwenLM/qwen-code/issues/13004

**⑨ #12417 [CLOSED] tracking(cli): 工具执行沙箱设置加固** — 8 条评论
Linux bubblewrap 隔离从整个 CLI 下沉到单次工具执行，已通过约五轮评审并关闭，是安全边界收敛的重要落地。
https://github.com/QwenLM/qwen-code/issues/12417

**⑩ #13309 [OPEN][P2] Markdown 流式切分器把行内围栏标记误判为代码块** — 4 条评论
普通行内代码中的波浪线围栏被识别为代码块，导致切分时插入错误的 `~~~` 关闭/重开。渲染正确性类问题的典型代表（对应 PR #13331）。
https://github.com/QwenLM/qwen-code/issues/13309

**其他值得留意：** #13334（飞书入站文件写入失败遗留孤儿目录）、#13338（切换模型后 `contextWindowSize` 被错误继承）、#13321（只读探索成功但无进展时缺少收敛边界）、#13249（CodeQL 夜间扫描静默死亡，连续 13 次超时取消仍显示绿色）。

---

## 4. 重要 PR 进展（精选 10 条）

**① #13332 fix(core): 关闭 #12693 合并后评审的 Managed 会话正确性缺口**
Durable Managed Session journal 与 failover（#12693）在 R1/R2 两轮合并后评审中暴露的全部正确性问题，逐条对当前 `main` 复验后修复。
https://github.com/QwenLM/qwen-code/pull/13332

**② #13301 feat(managed-agent): 持久化 Workspace 会话工具 profile**
通过公共 API 或 WebShell 创建 Workspace Session 时持久化 `hosted-workspace-files/1`，创建/加载/恢复均沿用该选择；profile 缺失或为空时在 Harness 请求前拒绝。
https://github.com/QwenLM/qwen-code/pull/13301

**③ #13291 feat(managed-agent): 让本地 Runtime 工具结果持久化（M5b）**
属于 #12737 的后续（接续 #13167）。为本地 Managed 会话的每个 Runtime 结果赋予与记录会话同级的持久权威：调用前写入 intent 与 `await_runtime` 检查点，结果以同等方式提交。设计先行草案。
https://github.com/QwenLM/qwen-code/pull/13291

**④ #13311 fix(core): 补齐 PR #12302 评审遗留的 managed-record 校验缺口**
修复 6 项仍存在的评审发现（含 2026-10-03 提出的 R4-1 Critical），每条均对 `main`（`eb0b79c5b8`）复验。
https://github.com/QwenLM/qwen-code/pull/13311

**⑤ #13342 fix(web-shell): #12692 R2 评审的 Managed 会话 UI 正确性修复**
修复 10 项（2 Critical + 8 Suggestion）：瞬时失败后的陈旧错误横幅、Turn 边界结算状态等，均对 `main`（`2c591ecc08`）复验。
https://github.com/QwenLM/qwen-code/pull/13342

**⑥ #13033 feat(core): 默认延迟声明 agent 与 goal 工具**
在普通工具调用模式下默认按需发现 `agent`、`list_agents`、`get_goal`、`update_goal`、`propose_goal`，无需用户手动配置 `tools.eager`，直接削减工具 schema 的常驻 Token 开销。
https://github.com/QwenLM/qwen-code/pull/13033

**⑦ #13331 fix(cli): 仅在匹配行上识别 Markdown 围栏**
流式 Markdown 切分器改用渲染器的行匹配规则，行内反引号/波浪线保持为普通正文，真实围栏块保留关闭/重开与行号行为（对应 Issue #13309）。
https://github.com/QwenLM/qwen-code/pull/13331

**⑧ #13293 fix(cli): 替换 settings 时保留文件权限**
原子替换设置文件时保留原有 POSIX 权限位（含更严格 umask 场景），发布前应用精确 mode，仅容忍 ENOSYS/ENOTSUP。
https://github.com/QwenLM/qwen-code/pull/13293

**⑨ #13246 fix(cli): 让 `/context` 估算保持在上下文窗口内**
无 provider token 计数时，估算采用已注册工具 schema 的类别修正，消除 MCP 与 skills 行的重复计数。
https://github.com/QwenLM/qwen-code/pull/13246

**⑩ #13344 fix(managed-agent): #12692 R2 评审的 e2e runner 与镜像健壮性**
修复 6 项：`waitUntil` 吞掉谓词错误且不限制迭代次数、`crashProcess` 缺少按信号死亡分支、最后一次轮询后被中断的运行等。
https://github.com/QwenLM/qwen-code/pull/13344

**其他：** #13335（配置与 API 表面卫生，9 项）、#13341（#12693 测试与卫生收尾）、#13324（保留 Code Mode Goal 原始证据）、#11827（computer-use 会话的 Responses 恢复）、#12650（yamllint/shellcheck 空文件列表时显式失败）、#12580（优先从对话历史作答）。

---

## 5. 功能需求趋势

从本期全部 Issues 标签与内容看，社区关注方向高度集中在以下几条：

1. **Managed Agent / `qwen serve` 服务化与多 Agent**（`roadmap/multi-agent`、`roadmap/session-management`、`daemon`）：本期最大主题，覆盖双路径架构、Workspace 绑定、会话持久化、并发调度、故障恢复。#12380、#12737、#13271、#13328 均属此列。
2. **上下文与 Token 治理**（`scope/token-management`、`roadmap/context-performance`）：从非对话上下文计费（#12028）到输出 clamp 上限（#13252）、模型切换后的上下文窗口继承（#13338），是最密集的性能方向。
3. **Web Shell / Desktop 前端体验**（`scope/web-shell`）：快捷键（#13175）、Plan 审批的 Markdown 渲染（#13340）、渲染正确性（#13309）。
4. **平台分发与移动端**（`roadmap/platform-distribution`、`category/platform`）：Android Phase 2 回归覆盖与导出 UX（#13111）表明移动端在推进。
5. **记忆与延迟优化**（`scope/memory`、`scope/latency`）：自动记忆抽取的节奏控制与召回快捷路径（#13003、#13004）。
6. **CI/CD 与可观测性**（`scope/ci-cd`、`category/telemetry`）：夜间扫描静默失败（#13249）、A/B 通道基础设施抖动（#13266）、测试预言缺口（#13275、#13339）。

---

## 6. 开发者关注点（痛点与高频需求）

- **失控循环的成本黑洞**：死循环工具错误烧掉 5–14M tokens（#10887）、探索持续成功却永不收敛（#13321）——开发者既要求"能省"，也要求"能停"。
- **Token 优化缺少代价度量**：#12333 直指当前只有"节省"指标、没有"召回/成功率"门禁，导致最大的优化项不敢开启。
- **并发与容错是服务化的最大拦路石**：≥8 并发卡死（#13333）、协调器单点崩溃拖垮在途 Turn（#13327）、混合版本接管返回不透明 503（#13320）、同 Workspace 第二次会话直接终态失败而非排队（#13328）。
- **评审轮次规则导致的"跟进 Issue 洪流"**：大量 `Follow-up` / `deferred from PR` Issue（#12235、#13162、#13186、#13275、#13339 等）源自仓库约 5 轮评审后"仅落 Critical"的规则，说明评审流程与交付节奏之间存在张力。
- **CI 可信度**：静默死亡的 CodeQL（#13249）、空文件列表让 lint 假绿（#12650）、MySQL 故障门禁抖动（#13339）——开发者需要"失败必须响亮"。
- **前端渲染与设置细节**：Markdown 围栏误判（#13309）、settings 权限被覆盖（#13293）、`/context` 估算溢出（#13246），属于高频但影响体验的"小伤口"。
- **平台集成稳定性**：飞书入站文件写入失败遗留孤儿目录并丢弃文本回退（#13334）。

---

*以上内容基于 2026-10-03 更新数据整理，发布日期 2026-10-04。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI（Codewhale）社区动态日报
**日期：2026-10-04**  
*数据来源：github.com/Hmbown/DeepSeek-TUI（仓库内部亦称 Hmbown/Codewhale）*

---

## 1. 今日速览
过去 24 小时内项目无新版本发布，但代码与社区活动保持高活跃度：共更新 6 个 Issue 与 8 个 Pull Request。核心焦点包括 MCP 服务器工具暴露失效、Windows 平台进程清理缺陷等稳定性问题，以及 FEAT-027 命令可移植性重构与多项 Ratatui 终端体验优化顺利合入。

## 2. 版本发布
（过去 24 小时无新 Release，本节省略）

## 3. 社区热点 Issues
*以下为过去 24h 内更新的全部 6 条 Issue（均值得关注）：*

- **#5316 EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)** [OPEN]  
  大型架构重构史诗，FEAT-027 已提交草稿 PR #6832；社区讨论热烈（31 条评论），是模块化演进的核心跟踪项。  
  🔗 https://github.com/Hmbown/Codewhale/issues/5316

- **#6828 0.10.0: enabled MCP servers expose no tools in-session** [OPEN, needs-triage]  
  配置 3 个 MCP 服务器后，`tool_search` 返回为空，模型无法发现或调用工具，直接阻断 Agent 工作流，需优先排查。  
  🔗 https://github.com/Hmbown/Codewhale/issues/6828

- **#6827 Windows (npm install): killing node.exe instantly terminates Codewhale** [OPEN, bug]  
  Windows 下 `codewhale` 作为 `node.exe` 子进程运行，父进程被杀导致整个会话无清理退出，稳定性隐患明显。  
  🔗 https://github.com/Hmbown/Codewhale/issues/6827

- **#6418 [bug] Unable to restore the session** [CLOSED]  
  会话恢复失败（Runtime store 不匹配）已关闭，推测已修复或归并处理。  
  🔗 https://github.com/Hmbown/Codewhale/issues/6418

- **#6328 Schedule list UI for watches and heartbeat** [OPEN]  
   Agent 计划任务（定时 watch、heartbeat）的列表 UI 需求，支持暂停/恢复展示，阻塞于核心 cron 路由。  
  🔗 https://github.com/Hmbown/Codewhale/issues/6328

- **#6818 Add the complete Ratatui component explorer to the Codewhale website** [OPEN]  
  官网 onboarding 与 204 项 Ratatui 组件导出已落地，助力新用户上手与生态文档化。  
  🔗 https://github.com/Hmbown/Codewhale/issues/6818

## 4. 重要 PR 进展
*以下为过去 24h 内更新的全部 8 条 PR：*

- **#6832 refactor(commands): adopt portable config policy and status shapes (FEAT-027)** [OPEN]  
  使 `/permissions` 与 `/status` 通过共享命令 Shape 实现独立可移植，延续 #6793 的重构路线。  
  🔗 https://github.com/Hmbown/Codewhale/pull/6832

- **#6815 0.10.1 integration: Engine convergence, reviewed TypeScript mods and Ratatui UX** [OPEN]  
  统一 Rust 引擎执行/权限/会话路径，审查 TS 模块复用鉴权与取消逻辑，推进 0.10.1 集成。  
  🔗 https://github.com/Hmbown/Codewhale/pull/6815

- **#6830 feat(tui): follow the viewport with the pinned prompt header and jump on click** [CLOSED]  
  固定提示头改为跟随视口起始 turn，点击可跳回对应消息，提升长会话导航体验。  
  🔗 https://github.com/Hmbown/Codewhale/pull/6830

- **#6829 fix(tui): wrap diff and tool output at grapheme boundaries** [CLOSED]  
   diff/工具输出改为字素簇边界换行，修复 ZWJ emoji 与组合字符在 Ratatui 中的对齐错位。  
  🔗 https://github.com/Hmbown/Codewhale/pull/6829

- **#6831 fix(tui): translate the context inspector rows twelve packs ship in English** [CLOSED]  
  补全除中英外 12 种语言包中上下文检查器行的遗漏英文文案。  
  🔗 https://github.com/Hmbown/Codewhale/pull/6831

- **#6820 fix(tui): apply per-call execution policy to Python and JavaScript tools** [CLOSED]  
  Python/Node 解释器进程改走权限感知启动器，收紧代码执行安全策略。  
  🔗 https://github.com/Hmbown/Codewhale/pull/6820

- **#6819 fix(cli): 修复配置诊断对 HTTP(S) 协议大小写的误判** [CLOSED]  
  `config doctor` 对协议名做大小写不敏感判断，避免合法大写配置被误报。  
  🔗 https://github.com/Hmbown/Codewhale/pull/6819

- **#6806 build(deps): bump the npm_and_yarn group (axios 1.18.1→1.20.0)** [CLOSED]  
  飞书/企微桥接目录依赖安全更新，bot 维护。  
  🔗 https://github.com/Hmbown/Codewhale/pull/6806

## 5. 功能需求趋势
- **架构模块化**：Crate 分解（#5316）与命令 Shape 共享（#6832）表明项目正向高内聚、可移植架构演进。
- **Agent 调度可视化**：Schedule 列表 UI（#6328）、Ratatui 组件浏览器（#6818）反映对任务管理与可观测性的强烈需求。
- **终端 UX 精细化**：视口跟随（#6830）、字素换行（#6829）、多语言翻译（#6831）显示社区重视国际化与渲染正确性。
- **工具生态集成**：MCP 服务器工具发现（#6828）成为高优先级集成方向，关乎 Agent 扩展能力。

## 6. 开发者关注点
- **跨平台稳定性**：Windows 下 npm 启动导致的进程树清理缺陷（#6827）是主要痛点；会话恢复问题（#6418）虽已关但仍需观察。
- **工具链连通性**：MCP 启用后无工具暴露（#6828）直接阻断模型调用，亟待 triage 与修复。
- **执行安全与配置严谨性**：Python/JS 每调用执行策略（#6820）、HTTP(S) 大小写容错（#6819）体现开发者对权限与配置正确性的高要求。
- **终端渲染保真**： grapheme 边界处理（#6829）说明多语言/表情符号对齐仍是持续打磨的细节高地。

---
*日报生成基于 GitHub 公开活动快照，链接均指向 Hmbown/Codewhale 仓库。*

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

# ComfyUI 社区动态日报

**日期：2026-10-04**

---

## 1. 今日速览

过去 24 小时 ComfyUI 无新版本发布，社区活跃度集中在**缺陷修复与硬件兼容性**方向。AMD ROCm 平台的 INT8 attention 内核出现图像质量与显存管理问题（#16711、#16731），同时 0.35.0 引入的 fast-disk 自动策略与动态 VRAM 加载在部分高内存机器上引发争议。PR 侧出现一批针对 CheckpointFunction 自动求导、Qwen 2.5-VL、HiDream-O1、MiniMax H3 等新模型的修复，以及资产扫描数据库锁问题的系列改进。

---

## 2. 版本发布

过去 24 小时无新 Release。

---

## 3. 社区热点 Issues

1. **#16246** · `dxgmms2.sys` 内核级蓝屏（BSOD）
   自 v0.35.0 升级 `comfy-aimdo` 0.4.15 → 0.5.3 后，RTX 3050 (6GB) 用户在 Windows 11 上一天内遭遇 4 次视频内存管理器内核崩溃，签名均为 `VidMm page-in use-after-free`。涉及动态 VRAM 加载路径，风险等级高。👍 3 · 💬 11
   [链接](https://github.com/comfyanonymous/ComfyUI/issues/16246)

2. **#15946** · 加载界面卡死在 LOGO 处
   用户反馈启动时卡在加载屏，已确认禁用所有自定义节点后问题仍存在，典型的启动阶段资源挂起问题，社区跟进 16 条评论但仍未解决。
   [链接](https://github.com/comfyanonymous/ComfyUI/issues/15946)

3. **#16705** · VRAM 与 RAM 占用异常飙升
   用户报告最新版本下显存与内存消耗远高于预期，禁用自定义节点复现。与 fast-disk 自动启用及动态 VRAM 加载策略直接相关，反映出近期内存管理改动对老硬件（小显存显卡）的冲击。
   [链接](https://github.com/comfyanonymous/ComfyUI/issues/16705)

4. **#16415** · 请求为 fast-disk 自动策略增加退出选项
   提交 `7a0b5ee` 后，`--fast-disk` 在检测到高速 NVMe 时被自动启用，导致高内存机器每步都从 NVMe 流式加载权重而非常驻内存，增加延迟与 I/O 磨损。社区已出现 6 条讨论，是内存/磁盘策略调整的代表性诉求。
   [链接](https://github.com/comfyanonymous/ComfyUI/issues/16415)

5. **#16711** · AMD gfx1100 上 INT8 attention 输出纯噪声
   `comfy kitchen attention` 的 INT8 内核在 AMD 平台（ROCm）上，当文本条件超过约 60–200 tokens（Qwen-Image 2.1 `int8_convrot`）时返回纯噪声，属于量化注意力内核的数值正确性问题。
   [链接](https://github.com/comfyanonymous/ComfyUI/issues/16711)

6. **#16731** · 应用 LoRA 后服务器静默图像损坏
   AMD 8060S (gfx1151) 上，应用 LoRA（int8 convrot，仅原生节点）时输出图像出现静默损坏，无报错。与 #16711 同源，指向 ROCm 下 INT8 convrot 量化路径的系统性缺陷。
   [链接](https://github.com/comfyanonymous/ComfyUI/issues/16731)

7. **#16753** · `CheckpointFunction.backward()` 含冻结参数时报错
   任何包含冻结参数的梯度检查点块都会触发反向传播异常，影响使用部分冻结权重的自定义训练/微调场景。已被 PR #16757 对应修复。
   [链接](https://github.com/comfyanonymous/ComfyUI/issues/16753)

8. **#16754** · `CheckpointFunction` 重计算时重新进入 CUDA autocast
   在非 CUDA 加速器上，重计算路径错误地重新进入 autocast 上下文，导致数值不精确。与 #16753 同作者，属于 checkpoints 机制在异构硬件上的正确性缺陷。
   [链接](https://github.com/comfyanonymous/ComfyUI/issues/16754)

9. **#16685** · Linux 上 `--auto-launch` 打开不可用的 `0.0.0.0:8188`
   Linux 组合 `--auto-launch --listen` 时浏览器打开 `http://0.0.0.0:8188`（不可浏览），而 Windows 正确使用 `127.0.0.1`。跨平台行为不一致，影响 CLI 工作流。
   [链接](https://github.com/comfyanonymous/ComfyUI/issues/16685)

10. **#16760** · IP Adapter 潜在 Bug
    用户构建 IP Adapter 工作流时遭遇问题，刚创建尚无跟进评论，但 IP Adapter 是高频使用组件，值得关注后续进展。
    [链接](https://github.com/comfyanonymous/ComfyUI/issues/16760)

> 另：#14981（空 Load Image 节点触发 ERROR）、#11709（自定义浏览器启动）。

---

## 4. 重要 PR 进展

1. **#16757** · Fix checkpoint backward with frozen parameters
   修复 #16753：反向传播时排除冻结参数，返回 `None` 梯度槽位，并附 CPU 回归测试。是训练/微调场景的关键修复。
   [链接](https://github.com/comfyanonymous/ComfyUI/pull/16757)

2. **#16752** · 修复 SeedVR2 分块 VAE 崩溃
   Tiled VAE 编码/解码的 tile 融合使用 inplace mul，触发 autograd "view is being modified inplace" 错误。VRAM 不足时走分块路径即崩溃，影响范围广。
   [链接](https://github.com/comfyanonymous/ComfyUI/pull/16752)

3. **#16758** · 修复重复批次时 mask 分配错位
   重复三样本 latent 批次时，第二个副本的 mask 从 `[A,B,A]` 错位为 `[B,A,B]`，导致去噪区域错误。修复后按原始 latent 数对齐噪声 mask。
   [链接](https://github.com/comfyanonymous/ComfyUI/pull/16758)

4. **#16751** · 支持 Qwen 2.5-VL TextGenerate
   Qwen 2.5-VL 此前无法使用 TextGenerate：缺少停止 token 配置、输出头未启用、图像输入与 MRoPE 位置被丢弃。该 PR 补全生成路径，保留视觉输入与位置感知。
   [链接](https://github.com/comfyanonymous/ComfyUI/pull/16751)

5. **#16750** · 修复 MiniMax H3 音频条件（guide + reference）
   PackedLayout 预留了 keyframe/reference 音频行，但采样时使用扁平化条件列表导致 keyframe latent 丢失。修复后直接从 keyframe/reference 构建条件音频行。
   [链接](https://github.com/comfyanonymous/ComfyUI/pull/16750)

6. **#16756** · 支持 4D 与 5D latent composite
   Latent Composite 节点硬编码仅支持 4D 张量，而 Qwen 等模型会产生 5D latent。扩展到任意维度，保持兼容。
   [链接](https://github.com/comfyanonymous/ComfyUI/pull/16756)

7. **#15020** · Hunyuan3D 2.1 PBR 原生绘制
   Torch 原生多视角 PBR UNet、渲染器/光栅化/烘焙器，集成 ComfyUI 模型、采样器节点，并支持带金属-粗糙度纹理的 GLB 保存。是对旧实现的完全重写，3D 工作流的重大扩展。
   [链接](https://github.com/comfyanonymous/ComfyUI/pull/15020)

8. **#16748** · 资产扫描写入改用短事务
   修复资产目录扫描快速阶段长事务导致的 `database is locked`：上传图片注册与输出记录被锁 5–10 秒，上传窗口内服务器整体冻结。改为短事务写入。
   [链接](https://github.com/comfyanonymous/ComfyUI/pull/16748)

9. **#16755** · 预览保留 PNG 透明度
   `/view?channel=a` 对灰度+alpha 及调色板/颜色键透明 PNG 返回不透明 mask，影响遮罩编辑器（默认关闭预览转换时）。修复为直接读取现有 alpha 通道。
   [链接](https://github.com/comfyanonymous/ComfyUI/pull/16755)

10. **#16346** · 保护 prompt_worker 免受未处理异常
    修复 #16312：框架级异常（缓存管理、资产增强）逃逸 `PromptExecutor.execute` 时杀死 prompt_worker 线程，服务器仍响应 200 但队列卡死。已 closed。
    [链接](https://github.com/comfyanonymous/ComfyUI/pull/16346)

> 另：#16735/#16734（HiDream-O1 位置 ID 与除零修复）、#16368（OpenAPI 契约同步，机器人自动生成）、#16749/#16740/#16761（资产系统计数上报与文档同步）。

---

## 5. 功能需求趋势

- **AMD/ROCm 硬件生态适配**：INT8 量化 attention（`comfy kitchen`）在 gfx1100/gfx1151 上频繁出现数值性与静默损坏问题，反映出 AMD 支持已从"能跑"进入"数值精度可保障"的新阶段，多则 Issues（#16711、#16731）集中指向底层 kernel 正确性。
- **内存与存储策略可控性**：fast-disk 自动启用、动态 VRAM 加载带来显存/内存消耗异常（#16705）与蓝屏风险（#16246），社区明确要求增加 opt-out 开关（#16415），趋势是"默认智能、用户可控"。
- **多模态模型支持**：Qwen-Image 2.1、Qwen 2.5-VL、MiniMax H3、HiDream-O1、Hunyuan3D 2.1 等新型模型对文本→图像→音频→3D 的全链路支持成为 PR 主战场。
- **跨平台一致性**：`--auto-launch` 在 Linux 与 Windows 行为不一致（#16685），反映 Linux 服务器部署场景的成熟化诉求。

---

## 6. 开发者关注点

- **Autograd/Checkpointing 正确性**：#16753、#16754 揭示梯度检查点在冻结参数与异构加速器上的边界缺陷，涉及深度训练/微调路径，非日常推理用户不易察觉，但对进阶开发者是硬阻塞。
- **INT8 convrot 量化路径的静默失败**：AMD 平台上 LoRA 应用导致图像静默损坏（#16731）比显式报错更危险，开发者呼吁内核层面回归测试覆盖 ROCm hip 后端。
- **资产系统的数据库并发**：慢存储（SMB/网络挂载）上扫描长事务导致 `database is locked`、上传冻结，是生产环境部署的典型痛点。#16748/#16761 形成系列修复，社区出现专门维护此模块的贡献者。
- **fast-disk 决策导致的行为回归**：自动启用 NVMe 流式加载在高内存场景下反而造成性能退化（#16415），提示需要更细粒度的启发式与文档说明。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama 社区动态日报 · 2026-10-04

> 数据来源：github.com/ollama/ollama（统计窗口：过去 24 小时）

---

## 一、今日速览

今日无新版本发布，社区讨论高度集中在 **决策模型（Decision / SystemOne / clef）基础设施** 与 **MLX 后端性能** 两大方向：`/v1/systemone` 端点上 `clef-flash` 的跨平台失败问题已形成 Issue + 修复 PR 的闭环，同时围绕决策模型的多条 PR（#18776、#18755、#18768、#18701）密集更新。此外，API 健壮性问题（`/api/generate` 尾部非法 JSON）与结构化输出、思考模式（thinking）相关的正确性缺陷成为新的关注点，社区对输入校验与 schema 约束的严格性要求明显上升。

---

## 二、版本发布

过去 24 小时内无新 Release，本节省略。

---

## 三、社区热点 Issues（10 条）

**1. #11798 多模态音频输入支持（👍 40，评论 16）**
请求为 Ollama 增加音频输入能力，使 Qwen2-Audio 等模型能像当前图像输入一样处理音频。这是今日数据中点赞最高的 Issue，也是长期未落地的能力缺口，社区呼声持续。🔗 https://github.com/ollama/ollama/issues/11798

**2. #18769 clef-flash 在 /v1/systemone 上必然失败（评论 5）**
Q8_0、9.1B 的决策模型在 `/v1/systemone` 上首轮前向即报错：CUDA 报 `Clef: non-finite logit`，CPU 报 `cannot open model`；而同一模型在 `/v1/chat/completions` 正常，`clef:27b` 在 systemone 上也正常。典型的端点/后端耦合缺陷，已有对应修复 PR #18777。🔗 https://github.com/ollama/ollama/issues/18769

**3. #18766 Qwen3.8 GGUF 的 think 档位被忽略（评论 3）**
嵌入的 chat template 支持分级 reasoning_effort，但 `/api/chat` 中 `think: "low"/"medium"/"high"` 与 `think: true` 行为一致，仅 `false` 生效。暴露了服务端未把思考预算正确透传到模板的问题，影响推理成本控制。🔗 https://github.com/ollama/ollama/issues/18766

**4. #17050 Qwen3.5/3.6 的 MLX 版本性能异常（已关闭，评论 3）**
Mac M3 24GB 上 `qwen3.5:35b-mlx` 明显慢于非 MLX 版本，`qwen3.6:35b-mlx` 甚至无法运行。作为已关闭 Issue 仍被更新，说明 MLX 路径的性能一致性是老问题。🔗 https://github.com/ollama/ollama/issues/17050

**5. #18754 MLX runner 未用满 GPU（M4 Pro，评论 3）**
`qwen3.8:27b-mxfp8` 在 M4 Pro 48GB 上，0.40.0 与 0.35.1-rc2 的 GPU 利用率存在明显差异，指向 MLX runner 的调度或内存策略回退。🔗 https://github.com/ollama/ollama/issues/18754

**6. #18775 /api/generate 接受合法 JSON 后的尾部垃圾数据**
在 `Content-Type: application/json` 下，完整 JSON 对象后追加非 JSON 内容仍被接受。属于输入校验缺陷，已有 PR #18778 修复，是本周“API 严格性”话题的开端。🔗 https://github.com/ollama/ollama/issues/18775

**7. #18770 mistral-medium-3.5:128b 无法正常运行（评论 1）**
M4 128GB 机器上加载 80GB 模型却占用 127GB RAM 和 >100GB wired memory，生成速度退化到约每分钟 1 个词。反映大模型内存管理/卸载策略仍存在严重问题。🔗 https://github.com/ollama/ollama/issues/18770

**8. #18717 结构化输出 JSON schema 属性顺序丢失（评论 1）**
OpenAI 兼容端点经原生 llama-server chat 路径时，schema 声明的属性顺序被强制按字母序输出（#7978 的回归）。对依赖步骤顺序的 schema 是功能性破坏。🔗 https://github.com/ollama/ollama/issues/18717

**9. #18774 Gemma4 在 think:true 且直接作答时 JSON schema 未被强制执行**
`gemma4:e4b` 在开启思考但未输出推理过程时，会返回违反 `format` schema 的内容，`/api/chat` 与 `/api/generate` 均可复现。与 #18717 共同指向结构化输出的可靠性短板。🔗 https://github.com/ollama/ollama/issues/18774

**10. #18772 伪设备导致 GPU 设备索引错位**
`discover/llama_server.go` 中，因零显存被过滤的设备（如 BLAS 伪设备）仍使索引自增，导致后续真实 GPU 拿到错误索引，可能影响架构过滤与元数据绑定。已有 PR #18773 修复。🔗 https://github.com/ollama/ollama/issues/18772

> 其他值得留意：#18760（决策模型 basal-1.0 编码与按类型温度）、#18765（Windows v0.35.1 安装包 Authenticode HashMismatch）。

---

## 四、重要 PR 进展（10 条）

**1. #18778 拒绝 /api/generate 的尾部垃圾数据**
只解码单个 JSON 对象，出现非空白尾随字节即返回 HTTP 400，并补充 handler 测试。直接修复 #18775，提升 API 输入校验严格性。🔗 https://github.com/ollama/ollama/pull/18778

**2. #18777 llama：修复 Windows 上 clef head 越过 2GiB 读取**
定位到 `llama/clef/clef.cpp` 读取 head 权重时的偏移问题，修复 Windows 全后端（CUDA/ROCm/Vulkan/CPU）上 `clef-flash` 的 `non-finite logit` 报错。🔗 https://github.com/ollama/ollama/pull/18777

**3. #18776 mlx：决策模型改进**
拒绝溢出请求而非静默截断，并调优路由流程改善冷启动延迟（M5 上约省 5ms）。🔗 https://github.com/ollama/ollama/pull/18776

**4. #18773 discover：跳过伪设备时保持 GPU 索引对齐**
仅在零显存分支移除自增，避免伪设备挤占 GPU 序号、错配 CUDA 计算能力与 PCI 元数据。修复 #18772。🔗 https://github.com/ollama/ollama/pull/18773

**5. #18701 mlx：SystemOne 支持（已关闭）**
为 SystemOne 模型加入 MLX 支持并补充测试覆盖，是决策模型 MLX 化的基础提交。🔗 https://github.com/ollama/ollama/pull/18701

**6. #18755 mlx：拆分决策预处理/读出与 forward，实现 Strands Decider（已关闭）**
让串行与批量打分共享模型自有的准备与读出逻辑，避免在 runner 中重复架构相关代码。🔗 https://github.com/ollama/ollama/pull/18755

**7. #18768 decision：接受结构化 System One 条件**
支持 choice / noul / score 问题的字符串、对象、数组三种条件描述，保留 choice 的 null 语义并支持可空 noul，同步更新 OpenAPI schema。🔗 https://github.com/ollama/ollama/pull/18768

**8. #18761 llama.cpp 版本更新**
从 b11232 升级到 b11351，跟进上游修复与性能改进。🔗 https://github.com/ollama/ollama/pull/18761

**9. #15876 server：客户端断开时取消 pull（已关闭）**
让 `/api/pull` 的进度发送遵循请求上下文，断开连接时取消拉取，并在校验/写入/清理阶段前检查取消状态，修复 #13142。🔗 https://github.com/ollama/ollama/pull/15876

**10. #18722 openai：保持 tool 消息的内容分片在同一消息内**
修复 `FromChatRequest` 将数组内容拆成多条 api.Message 时丢失 `tool_call_id` 与工具名的问题，改善并行工具结果解析。🔗 https://github.com/ollama/ollama/pull/18722

> 其他值得关注：#18771（manifest 路径中 host 冒号编码，修复 Windows 下 `localhost:3000` 目录非法）、#18281（将 assistant thinking 传入 chat template）、#17567（Linux glibc < 2.34 链接 libdl）、#17564 / #17565 / #18624（工具调用与思考通道的边界处理）。

---

## 五、功能需求趋势

1. **多模态输入扩展（音频）**：以 #11798 为代表，社区希望在图像之外补齐音频输入，支持 Qwen2-Audio 等模型。
2. **决策模型 / SystemOne 生态建设**：`/v1/systemone`、`clef`、`basal-1.0`、Strands Decider 相关 Issue 与 PR 密集出现，是当前最活跃的新功能线。
3. **思考模式（thinking / reasoning_effort）精细化控制**：多起反馈集中在 `think` 档位被忽略、思考与工具调用通道交错、思考内容未透传模板等。
4. **结构化输出可靠性**：JSON schema 属性顺序、`format` 强制约束在 thinking 场景下失效，成为高频正确性诉求。
5. **性能与资源利用**：MLX 后端 GPU 利用率、大模型内存占用（mistral-medium-3.5:128b）、跨平台性能一致性。
6. **平台兼容性**：Windows 安装包签名、Windows 路径与 2GiB 偏移、Linux 旧 glibc 链接等平台问题持续涌现。

---

## 六、开发者关注点

- **API 输入校验不够严格**：`/api/generate` 接受尾随非 JSON 数据，被视为潜在的兼容性与安全隐患。
- **结构化输出与 thinking 的组合行为不可靠**：schema 顺序丢失、think 开启时约束失效，直接影响下游解析与 agent 流程。
- **思考预算控制形同虚设**：`low/medium/high` 无效，使成本与延迟优化手段受限。
- **MLX 路径性能与资源管理**：Mac 用户集中反馈 MLX 版本慢于非 MLX、GPU 未跑满、大模型内存爆炸。
- **工具调用边界处理**：思考通道未闭合即开启工具调用、未完成/缺右括号的工具调用被直接下发，是 agent 场景的典型痛点。
- **设备发现与索引正确性**：伪设备导致 GPU 索引错位，属于影响面较广的底层缺陷。
- **平台/安装体验**：Windows Authenticode 校验失败、路径含冒号无法创建目录等，影响新用户上手。

---

*本期日报基于 GitHub 公开数据整理，如需追踪具体条目，可点击各条链接查看最新讨论与合并状态。*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

# llama.cpp 社区动态日报（2026-10-04）

## 一、今日速览

今日 llama.cpp 连续发布 **b11371–b11381 共 10 个版本**，集中在 Windows 构建告警清理、server 稳定性修复与新模型支持上，其中 `b11379` 直接修复了刚被报告的 laya 模型 abort 问题（#29902）。社区侧，**量化目标下的投机解码结果偏差**（#25618，29 条评论）与 **Vulkan Flash Attention 性能骤降**（#25207，20 条评论）是讨论最热的两条线索。PR 方向上，Vulkan 后端迎来一批密集优化（sparse FA、int8 coopmat、conv3d tile、mul_mm_id 修复），MoE 专家 GPU 缓存与投机解码拒绝采样也进入活跃开发。

---

## 二、版本发布（过去 24 小时）

过去 24 小时内共推送 10 个版本，可归为以下几类：

**稳定性与兼容性修复**
- **b11379**：`server: fix laya abort by limiting n_batch to n_ubatch`（#29903），修复 laya 模型在批量请求超过 `n_ubatch` 时崩溃的问题，对应 Issue #29902。
- **b11375**：`graph: gather the recurrent states once so the reserve covers every split`（#29856），修正循环状态 gather 节点的预留尺寸，避免 ubatch 跨 cell 拆分时出错。
- **b11376**：CI 修复 ADD_ADD f16 用例的偶发失败（#29904）。

**Windows 构建质量**
- **b11381**：`mtmd: fix deprecated strdup warning on Windows`（#29863）。
- **b11378**：新增 `common_is_tty()` 辅助函数并清理 Windows 弃用告警（#29860）。

**功能与性能**
- **b11377**：`chat: honor json_schema in Ling 3.0 parser`（#29813），此前 Ling 3.0 只对工具调用建语法，`response_format` 请求未被约束，现已补齐。
- **b11374**：ggml-openvino 升级到 2026.4.1，优化性能、扩展算子并改进设备枚举（#29852）。
- **b11372**：`qwen4exp: halve the indexer score memory`（#29825），长上下文下索引器分数张量内存减半。
- **b11371**：新增 clef 决策模型（纯文本）支持（#29831）。
- **b11380**：vendor 更新 cpp-httplib 至 0.59.0（#29886）。

---

## 三、社区热点 Issues（Top 10）

1. **[#25618] 投机解码在量化目标上贪心输出与原生不一致**（OPEN，29 评论，👍3）
   在 `temperature=0, top_k=1` 下，draft-mtp/draft-dspark 投机解码在 Q4_K_M 等量化目标上与原生推理输出不同，但 bf16 目标一致。这触及投机解码正确性核心，社区讨论量最高。
   https://github.com/ggml-org/llama.cpp/issues/25618

2. **[#25207] Vulkan Flash Attention 性能骤降**（OPEN，20 评论，👍2）
   AMD Strix Halo + Vulkan 下 FA 出现大幅性能回退，长期未收敛（带 stale 标签），反映 Vulkan 后端性能回归排查困难。
   https://github.com/ggml-org/llama.cpp/issues/25207

3. **[#29811] Qwen 3.8 Flash + MTP 启动断言**（OPEN，16 评论）
   使用 262144 超长上下文 + MTP draft 模型时启动即断言失败，与当前 Qwen3.8/4exp 的 MTP 支持推进直接相关。
   https://github.com/ggml-org/llama.cpp/issues/29811

4. **[#26484] 树莓派 5 上 ARM 解码带宽锁定约 10 GB/s**（OPEN，10 评论）
   固定运行时与测量方法下，跨 5 种量化解码带宽几乎不变，指向 ARM 后端存在内存墙问题，对边缘部署意义重大。
   https://github.com/ggml-org/llama.cpp/issues/26484

5. **[#28734] qwen4exp CUDA 解码随上下文线性变慢**（OPEN，8 评论）
   Ryzen 7950X + 5×RTX3090 上 Qwen3.8-Flash-Next 解码延迟随上下文线性增长，长上下文性能是当前热点。
   https://github.com/ggml-org/llama.cpp/issues/28734

6. **[#29655] Gemma 4 多行流式工具调用不稳定**（OPEN，7 评论）
   流式 + 部分解析场景下 Gemma 4 工具调用输出不稳定，直接关系 Agent 场景可用性。
   https://github.com/ggml-org/llama.cpp/issues/29655

7. **[#8795] 支持 Zyphra/Zamba2-2.7B**（OPEN，6 评论，👍20）
   长期高赞新模型请求（自 2024-07 持续至今），SSM + Transformer 混合架构，反映社区对混合架构模型的持续需求。
   https://github.com/ggml-org/llama.cpp/issues/8795

8. **[#29867] GLM-5.3-Flash 在 Metal 上因 fused Lightning Indexer 回退 CPU 而卡顿**（OPEN，4 评论）
   Apple M5 上融合 Lightning Indexer 未走 GPU，导致解码停滞，属于 Metal 后端新算子覆盖不足问题。
   https://github.com/ggml-org/llama.cpp/issues/29867

9. **[#28194] /slots restore 在 hybrid/recurrent 与 SWA 模型上无法复用 KV**（OPEN，3 评论，👍7）
   上下文检查点未持久化，导致槽位恢复后无 KV 复用。高赞说明多用户 server 场景对此痛点敏感。
   https://github.com/ggml-org/llama.cpp/issues/28194

10. **[#29893] 功能请求：multi_logit_bias**（OPEN，2 评论）
    支持对多个 token 施加 logit bias，属于采样控制能力的扩展，社区当日新提。
    https://github.com/ggml-org/llama.cpp/issues/29893

**其他值得留意**：#29902（laya abort，已被 b11379 修复并关闭）、#29921（`vite.config.ts` 引入测试依赖 storybook 导致非测试构建失败）、#29906（gemma4 31B chat template 二次扫描开销）、#29689（`--sleep-idle-seconds` 期间到达的请求被丢弃）。

---

## 四、重要 PR 进展（Top 10）

1. **[#29927] ggml-cuda: HIP 用 `__builtin_amdgcn_perm` 加速 q1_0 解包**（OPEN）
   替换 `__byte_perm`，同时覆盖 `vec_dot_q1_0_q8_1` 与 `ggml_cuda_mmq_load_tiles_q1_0`，是 #28398 的清理版。
   https://github.com/ggml-org/llama.cpp/pull/29927

2. **[#27694] 让 drafter 概率化、目标端用拒绝采样验证（draft & MTP）**（CLOSED，merge ready）
   当前 draft 丢弃采样结果只取 top-1，此 PR 改为按概率拒绝采样，直接影响投机解码的分布正确性——与 #25618 讨论高度呼应。
   https://github.com/ggml-org/llama.cpp/pull/27694

3. **[#29887] llama: 为常驻主机内存的 MoE 专家添加 GPU 缓存**（OPEN）
   移植自 qvac-fabric，对 host 侧专家的 MUL_MAT_ID 使用 LRU 专家缓存，仅上传未命中项，仅适用于 ≤32 token 小批量。
   https://github.com/ggml-org/llama.cpp/pull/29887

4. **[#29533] Vulkan: matmul dispatch 超过 maxComputeWorkGroupCount 时自动拆分**（OPEN）
   当 m 小、n 极大时 tile 选择越界（65535 限制）触发断言，此 PR 增加拆分逻辑，修复实际生产中的崩溃。
   https://github.com/ggml-org/llama.cpp/pull/29533

5. **[#29639] Vulkan: 量化 K/V 的 sparse flash attention**（OPEN）
   此前稀疏 FA 仅在 f16 时启用，Qwen3.8-Flash-Next QSA、DeepSeek 类量化缓存模型被迫做全量 dense attention，此 PR 开启量化路径。
   https://github.com/ggml-org/llama.cpp/pull/29639

6. **[#29918] server: 新增 `--cache-reuse-hybrid`**（OPEN）
   针对 hybrid/recurrent 模型在 prompt 中途编辑后复用 KV（重移 M-RoPE 并 fork 循环状态），并支持加载 mmproj 时的纯文本缓存复用。
   https://github.com/ggml-org/llama.cpp/pull/29918

7. **[#29924] spec: 修复 temp>0 时被截断的 n-gram draft 被错误拒绝**（OPEN）
   修复回复末尾 n-gram draft 被整体拒绝导致生成变慢的回归。
   https://github.com/ggml-org/llama.cpp/pull/29924

8. **[#29806] ggml-cpu: x86 tinyBLAS 支持 BF16/FP16/FP32 的 K tail**（OPEN，merge ready）
   llamafile tinyBLAS 此前要求 K 对齐向量宽度，非对齐会回退通用 CPU 路径，此 PR 补齐 K 尾处理。
   https://github.com/ggml-org/llama.cpp/pull/29806

9. **[#29920] Vulkan: 为 conv3d 增加更大 tile（仅 coopmat2）**（OPEN）
   在无需共享内存存输出的 coopmat2 上启用更大 tile，并补充后端测试，来源为 sd.cpp Wan VAE 分析。
   https://github.com/ggml-org/llama.cpp/pull/29920

10. **[#26869] 量化：补全 MXFP4 与 NVFP4**（OPEN）
    实现稠密 MXFP4（全张量）与 MoE NVFP4，并补齐对应量化流程，扩展低比特量化生态。
    https://github.com/ggml-org/llama.cpp/pull/26869

**其他进展**：#29761（Qwen4Exp 新增 MTP，已关闭/合并）、#29822（Vulkan `mul_mm_id` 在 id 重复时漏算行修复）、#29772（Vulkan FWHT 支持 512 以上 block 宽度）、#27952（AMD RDNA3/4 int8 coopmat1）、#29923（CI 修复循环回滚测试）、#14891（imatrix 激活统计）、#20966 / #21407（安装路径与系统 httplib 构建）。

---

## 五、功能需求趋势

- **新模型与混合架构支持**：Zamba2（#8795）、clef 决策模型（b11371）、Qwen3.8-Flash-Next MTP（#29761）、Ling 3.0（b11377）等，社区对 SSM/循环 + Attention 混合架构与新型对话模型的接入需求持续旺盛。
- **量化与低比特**：MXFP4/NVFP4 补全（#26869）、量化目标下投机解码正确性（#25618），量化已从"能跑"转向"结果正确且高效"。
- **长上下文与内存效率**：indexer 分数内存减半（b11372）、qwen4exp 解码随上下文变慢（#28734）、Qwen 3.8 MTP 超长上下文断言（#29811），长上下文的内存/延迟优化是主线。
- **Server 多用户能力**：`--cache-reuse-hybrid`（#29918）、`/slots` KV 复用（#28194）、router 模式日志（#29878），面向生产部署的会话/缓存管理需求上升。
- **采样控制扩展**：multi_logit_bias（#29893）。
- **构建与分发**：系统 httplib（#21407）、`LLAMA_LIB_INSTALL_DIR` 安装路径（#20966）、vite 测试依赖污染（#29921）。

---

## 六、开发者关注点

1. **量化与投机解码的正确性**：#25618 与 #27694 共同指向——draft 采样被丢弃、量化目标下分布偏移，是当前最受关注且技术性最强的问题。
2. **Vulkan 后端的性能与稳定性**：FA 性能骤降（#25207）、dispatch 越界（#29533）、mul_mm_id 漏算（#29822）、量化 K/V sparse FA（#29639）密集出现，Vulkan 是当前改动最活跃也最不稳定的后端。
3. **长上下文性能退化**：多处反馈解码延迟随上下文线性增长（#28734）、超长上下文启动断言（#29811），提示缓存与图构建仍需优化。
4. **工具调用 / Agent 场景可靠性**：Gemma 4 流式工具调用不稳定（#29655），与 Ling 3.0 json_schema 修复（b11377）同属对话约束方向。
5. **Windows 构建质量**：本日 b11378、b11381 连续清理弃用告警，说明 MSVC 兼容性仍是持续投入点。
6. **后端算子覆盖不完整**：GLM-5.3-Flash 的 fused Lightning Indexer 在 Metal 回退 CPU（#29867）、Vulkan 稀疏 FA 仅 f16（#29639），反映新模型算子在各后端的覆盖滞后于模型发布节奏。

---

*数据来源：github.com/ggerganov/llama.cpp ｜ 统计日期：2026-10-04*

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*