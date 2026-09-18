# AI CLI 工具社区动态日报 2026-09-19

> 生成时间: 2026-09-18 22:15 UTC | 覆盖工具: 12 个

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



以下是今日最重要的更新摘要：

1. **Claude Code v2.1.277 发布** — 新增 AGENTS.md 支持，当项目无 CLAUDE.md 时可自动读取 AGENTS.md 作为回退指令文件，并新增网关环境变量 `CLAUDE_GATEWAY_PROXY_IS_EGRESS_BOUNDARY=1`。  
   🔗 https://github.com/anthropics/claude-code

2. **OpenAI Codex rust-v0.155.1 热修复** — 紧急修复 v0.155 中推理摘要默认启用导致部分 Provider 拒绝请求的回归问题，恢复默认 `none`。  
   🔗 https://github.com/openai/codex/releases/tag/rust-v0.155.1

3. **Gemini CLI v0.62.0-nightly.20260918 发布** — 修复 OAuth 刷新时 refresh token 丢失问题，并使凭据删除操作幂等化；同时修复 UI 边框渲染异常。  
   🔗 https://github.com/google-gemini/gemini-cli/releases

4. **GitHub Copilot CLI v1.0.87-0 发布** — 为 Auto routing tier 新增用户级与托管启动默认值，支持严格模式与组织策略控制；连续 steering prompts 合并为一条待处理消息，空输入框按 ↑ 可取回重新编辑。  
   🔗 https://github.com/github/copilot-cli

5. **Qwen Code v0.24.1-preview.0 发布** — 记录已合入的 ACP 边界验收；CI 等待已发布的 export renderer 后再执行打包，增强发布流程可靠性。  
   🔗 https://github.com/QwenLM/qwen-code/releases

6. **Qwen Code PR #12210 合并** — 修复 LSP 响应因 `Content-Length` 按 UTF-16 计数而非 UTF-8 字节数导致非 ASCII 响应被静默丢弃的问题。  
   🔗 https://github.com/QwenLM/qwen-code/pull/12210

7. **ComfyUI PR #16400 提交** — 新增 Qwen-Image 2.1 支持，包含单流 DiT、RGBA VAE 和 Qwen3-VL-8B 文本编码器，含块因果注意力与 prefix cache 优化。  
   🔗 https://github.com/Comfy-Org/ComfyUI/pull/16400

8. **llama.cpp PR #26501 合并** — Hexagon 后端大规模重构，支持多 NPU 设备（IQ9/IQ10），实现异步图计算、异步事件与跨设备栅栏，是 Hexagon 从“能用”到“好用”的关键一步。  
   🔗 https://github.com/ggml-org/llama.cpp/pull/26501

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills 社区热点报告
> 数据来源：`anthropics/skills` | 截止：2026-09-19

---

## 一、热门 Skills 排行

> ⚠️ 数据说明：PR 列表的「评论数」字段均为 `undefined`，无法严格按评论数排序。以下综合 PR 活跃度、关联 Issue 热度、跨引用频率等信号选出。

### 1. `skill-creator` 修复系列（#1298 / #1769 / #539）
- **功能**：修复触发词评估的假阴性（#1298 隔离 worker 探针、Windows select() 失败、无关工具中断扫描）、触发检测 0% recall bug（#1769）、YAML description 未引号静默解析失败（#539）
- **社区热点**：Issue #556「`run_eval.py` 0% 触发率」12 条评论、7 👍，Issue #202「skill-creator 需重写为最佳实践」8 条评论——说明 `skill-creator` 本身是社区最高频摩擦点
- **状态**：全部 OPEN
- 🔗 [#1298](https://github.com/anthropics/skills/pull/1298) · [#1769](https://github.com/anthropics/skills/pull/1769) · [#539](https://github.com/anthropics/skills/pull/539)

### 2. `mcp-builder` 修复系列（#1742 / #1724）
- **功能**：适配 `mcp>=2.0.0` 的 `streamable_http_client` 导入变更及自定义 headers（#1742）；将评估默认模型从 `claude-3-7-sonnet` 升级到 `claude-sonnet-5`（#1724）
- **社区热点**：Issue #1390「evaluation.py 对任何真实 MCP 服务器打 0/N 分」4 条评论——评估 harness 的可靠性是社区痛点
- **状态**：全部 OPEN
- 🔗 [#1742](https://github.com/anthropics/skills/pull/1742) · [#1724](https://github.com/anthropics/skills/pull/1724)

### 3. `blast-radius`（#1776）
- **功能**：批量/破坏性操作前的检查清单——归档用户、撤销权限、删除行、群发邮件前，校验「查询对行正确 ≠ 操作对世界正确」
- **社区热点**：创建于 2026-09-17，两天内持续更新，属于高时效性 Skill
- **状态**：OPEN
- 🔗 [#1776](https://github.com/anthropics/skills/pull/1776)

### 4. `proofcore-contract-auditor`（#1771）
- **功能**：Web3 智能合约自动静态分析（Solidity + Rust），将审计密码学证明锚定到 TON 公链
- **社区热点**：Web3 + 区块链交叉赛道，创建于 2026-09-15，作者为 ProofCore-Protocol 项目方
- **状态**：OPEN
- 🔗 [#1771](https://github.com/anthropics/skills/pull/1771)

### 5. `md2video-audio`（#1703）
- **功能**：Markdown → Marp 幻灯片 → 专业 MP4 视频 + 逼真 AI 语音旁白，零成本
- **社区热点**：「内容→视频」自动化方向，与 document-typography（#514）形成文档质量控制矩阵
- **状态**：OPEN
- 🔗 [#1703](https://github.com/anthropics/skills/pull/1703)

### 6. `Hivemind`（#1628）
- **功能**：零成本多 Agent 编排——将机械工作委派给 opencode 无头 worker（免费模型），Claude Code 保留规划/审查/合并角色
- **社区热点**：「昂贵模型的上下文是稀缺资源」这一论点切中成本焦虑，8 月底创建
- **状态**：OPEN
- 🔗 [#1628](https://github.com/anthropics/skills/pull/1628)

### 7. `skill-quality-analyzer` + `skill-security-analyzer`（#83）
- **功能**：两个元 Skill——前者从结构/文档/功能/可移植性/评测性五维度评估 Skill 质量；后者检测恶意指令、未授权网络请求、路径遍历等安全风险
- **社区热点**：直接回应 Issue #492（社区 Skill 冒充 `anthropic/` 命名空间，43 条评论），属于信任基础设施
- **状态**：OPEN（2025-11 提交，2026-01 最后更新）
- 🔗 [#83](https://github.com/anthropics/skills/pull/83)

### 8. 文档质量三件套（#514 / #1734 / #541）
- **功能**：document-typography（ orphan word wrap、widow paragraphs、编号对齐）、docx 孤儿注释检测、docx tracked change w:id 冲突修复
- **社区热点**：文档生成质量是高频刚需，Lubrsy706 一人提交了 #538/#539/#541 三个修复
- **状态**：全部 OPEN
- 🔗 [#514](https://github.com/anthropics/skills/pull/514) · [#1734](https://github.com/anthropics/skills/pull/1734) · [#541](https://github.com/anthropics/skills/pull/541)

---

## 二、社区需求趋势

从 Issues 提炼，社区最期待的 Skill 方向：

| 方向 | 代表 Issue | 核心诉求 |
|------|-----------|---------|
| **组织级 Skill 管理** | #228（16 评论，8 👍） | 组织内直接共享 Skill 库，无需手动下载上传 .skill 文件 |
| **安全 / 信任基础设施** | #492（43 评论，2 👍） | 社区 Skill 冒充 `anthropic/` 命名空间，需官方认证/签名机制 |
| **Agent 治理** | #412（6 评论） | 策略执行、威胁检测、信任评分、审计轨迹——AI Agent 系统的安全模式 |
| **上下文压缩 / 记忆管理** | #1329（9 评论） | `compact-memory`：用符号记法压缩 Agent 状态，减少 prose 记忆的 token 消耗 |
| **推理质量保障** | #1385（4 评论，1 👍） | 三道质量闸门：预任务校准 → 对抗性审查 → 交付验证 |
| **Skill → MCP 桥接** | #16（4 评论） | 将 Skill 暴露为 MCP，统一 API 协议（如 `algorithmic-art` → `generateAlgorithmArt`） |
| **多云 / 多后端部署** | #29（4 评论） | AWS Bedrock 兼容性——Skills 能否跨云运行 |
| **企业文档集成** | #1175（4 评论） | SharePoint Online 文档访问的权限控制与安全边界 |

**趋势总结**：社区正从「能用的 Skill」转向「可信的、可共享的、企业级的 Skill 生态」——安全、治理、组织共享是三大核心诉求。

---

## 三、高潜力待合并 Skills

以下 PR 评论活跃、主题切中社区痛点，且尚未合并：

| PR | Skill | 为什么高潜力 |
|----|-------|-------------|
| [#83](https://github.com/anthropics/skills/pull/83) | skill-quality-analyzer + skill-security-analyzer | 直接回应 #492 安全信任危机，属于生态基础设施，官方有强动机合并 |
| [#1776](https://github.com/anthropics/skills/pull/1776) | blast-radius | 破坏性操作前检查清单，企业用户刚需，创建仅 2 天即持续更新 |
| [#1628](https://github.com/anthropics/skills/pull/1628) | Hivemind | 多 Agent 编排 + 成本优化，切中「昂贵模型上下文稀缺」痛点 |
| [#1703](https://github.com/anthropics/skills/pull/1703) | md2video-audio | 内容→视频零成本流水线，与已有文档 Skill 形成协同 |
| [#1771](https://github.com/anthropics/skills/pull/1771) | proofcore-contract-auditor | Web3 赛道空白，项目方主动贡献，可能代表垂直领域 Skill 商业化路径 |
| [#525](https://github.com/anthropics/skills/pull/525) | Pyxel（复古游戏开发） | Python 生态 + 游戏开发交叉，社区基础广泛，作者 kitao 持续维护 |

---

## 四、Skills 生态洞察

> **当前社区在 Skills 层面最集中的诉求是：从「单个 Skill 能做什么」转向「Skill 生态如何可信、可治理、可规模化共享」——安全信任（#492, #83）、组织共享（#228）、Agent 治理（#412）三大议题主导了社区讨论。**

同时观察到两个细分趋势：
1. **文档质量精细化**——typography、孤儿注释、case-sensitivity 修复密集出现，说明 AI 生成文档已进入「抠细节」阶段
2. **跨范式编排**——Hivemind（多 Agent）、blast-radius（人机协同检查点）、MCP 桥接（#16）都指向 Skill 不再是单次调用，而是编排单元

---

# Claude Code 社区动态日报

**日期：2026-09-19** | **数据来源：anthropics/claude-code**

---

## 一、今日速览

今日社区最核心的动态是 **AGENTS.md 正式落地**——v2.1.277 将 AGENTS.md 作为无 CLAUDE.md 项目时的回退指令文件，并配套提交了 `agents-md` mod 源码（PR #95409）。与此同时，昨日一次批量 stale 清理关闭了大量 7 月积压 Issue，社区对 Grep/Glob 工具移除的质疑仍在发酵（#91492 保持 OPEN）。值得注意的是，过去 24 小时内的 PR 活动高度集中在 mod（diff、agents-md）的类型修正与行为优化上，显示出对插件生态稳定性的持续投入。

---

## 二、版本发布

### v2.1.277
- **新增 AGENTS.md 支持**：项目无 CLAUDE.md 时自动读取 AGENTS.md，可在 `/config` 的 "Project instructions" 下切换（Bedrock / Vertex / Foundry 暂不支持）
- **新增网关环境变量**：`CLAUDE_GATEWAY_PROXY_IS_EGRESS_BOUNDARY=1`，用于声明 Claude apps 网关为唯一出口边界

### v2.1.276（回归修复）
- 修复 v2.1.275 引入的回归：当 `ANTHROPIC_BASE_URL` 指向代理或网关时，所有请求报 `400 … Input tag 'advisor_20260301'` 错误

### v2.1.275
- Claude apps 网关登录新增**签名账户确认**：网关命名账户后需用户确认才保存凭证，`/status` 显示账户信息
- 新增**立即发送快捷键**（Ctrl+Enter 或 Ctrl+X Ctrl+S）：中断当前回合并发送所有排队消息

> 💡 三个版本在 24 小时内连续发布，其中 2.1.275 → 2.1.276 为紧急回归修复，修复速度较快，但代理场景用户应留意升级。

---

## 三、社区热点 Issues

### 🔥 持续发酵

**1. [#91492] Grep/Glob 在原生 macOS/Linux 上的移除是破坏性 API 变更，而非文档问题**
- **状态：OPEN** | 👍 3 | 💬 2
- 直接反驳 #51781 的"文档问题"定性，指出这属于工具层面的 breaking change。作者 sergicristia-ops 认为这不是文档滞后，而是 API 兼容性被破坏。两个 Issue 互相引用，形成争论焦点。
- 🔗 https://github.com/anthropics/claude-code/issues/91492

**2. [#51781] 原生 macOS/Linux 构建文档仍将 Glob 和 Grep 列为独立工具**
- **状态：CLOSED** | 👍 3 | 💬 8
- 本批评论最多的 Issue，讨论集中在文档与实现脱节。虽已被关闭，但其触发的 #91492 仍在延续讨论。
- 🔗 https://github.com/anthropics/claude-code/issues/51781

### 🐛 工具与 Hook 可靠性

**3. [#75245] PreToolUse Hook 的 `Bash(...)` 匹配对 `$()` 命令替换仍存在误报**
- **状态：CLOSED** | 💬 5
- v2.1.163 的 changelog 声称已修复，但实测 `echo $(date)` 这类不含目标 token 的命令仍会触发 `Bash(git commit*)` 的 Hook。Hook 匹配语义的可预测性直接关系到自动化流水线的可靠性。
- 🔗 https://github.com/anthropics/claude-code/issues/75245

### 🔐 安全与权限摩擦

**4. [#77605] Chrome 中 Claude 的跨机浏览器驱动缺乏可靠的设备识别**
- **状态：CLOSED** | 💬 4
- 关注浏览器扩展场景下的会话劫持风险，指出连接浏览器可被跨机驱动且缺少设备级身份验证。安全边界问题值得跟踪。
- 🔗 https://github.com/anthropics/claude-code/issues/77605

### 🧩 多会话与编排体验

**5. [#77281] Claude Design 会话无法与配对的 Claude Code 会话直接通信**
- **状态：CLOSED** | 💬 3
- 目前两个会话间仅有 `design-sync` 单向文件级批处理桥接，缺少实时联动。随着 Cowork / Desktop 功能推进，多会话协作是明确的产品方向。
- 🔗 https://github.com/anthropics/claude-code/issues/77281

**6. [#77275] 回合中的用户消息缺乏回复目标标识**
- **状态：CLOSED** | 💬 2
- 在编排密集型会话（多个后台 agent）中，插入运行回合的用户消息无身份标识、无法追溯回复对象，导致"交叉回复不可归因"。
- 🔗 https://github.com/anthropics/claude-code/issues/77275

### 📊 可观测性（Observability）

**7. [#77367] 在任务显示与 `/tasks` 列表中显示每个子任务所用的模型**
- **状态：CLOSED** | 👍 2 | 💬 2
- Agent frontmatter 支持 `model: sonnet/opus` 覆盖，但任务面板不展示实际运行模型。开发者需要精确了解每个子任务的成本与能力来源。
- 🔗 https://github.com/anthropics/claude-code/issues/77367

**8. [#77349] TUI 中显示逐条消息时间戳**
- **状态：CLOSED** | 👍 3 | 💬 2
- 会话 JSONL 已记录 ISO-8601 时间戳，但 TUI 无法呈现。用户希望有开关控制时间戳显示，服务于长会话的审计与回溯。
- 🔗 https://github.com/anthropics/claude-code/issues/77349

### 🎨 UI / UX

**9. [#77326] VS Code 扩展内联显示完整子代理转录内容**
- **状态：CLOSED** | 💬 2
- CLI 和桌面端对子 agent 显示摘要，而 VS Code 扩展展开全部内部输出（每条 Bash 命令、stdout、中间步骤），信息过载且与其它端体验不一致。
- 🔗 https://github.com/anthropics/claude-code/issues/77326

**10. [#77342] @-mention 选择器应显示 MCP 资源的可读标题**
- **状态：CLOSED** | 💬 2
- 当前选择 MCP 资源时仅显示 URI，建议用 `resource.title ?? resource.name` 渲染人类可读标签，同时保留 URI 作为底层值。
- 🔗 https://github.com/anthropics/claude-code/issues/77342

---

## 四、重要 PR 进展

> ⚠️ 过去 24 小时仅有 5 个 PR 更新（全部列于下方），活跃度偏低。

**1. [#95423] diff mod：跳过只读 shell 命令后的 diff 重新拉取** — **OPEN**
- diff mod 此前每次 Bash/PowerShell 调用后都刷新 diff 面板，现改为仅当 shell 工具持有 `isReadOnly=false` 时才重新拉取。跳过 `ls`、`git status`、`cat` 等只读命令，减少无效刷新。
- 🔗 https://github.com/anthropics/claude-code/pull/95423

**2. [#95409] agents-md mod：AGENTS.md 项目指令 mod** — **CLOSED**
- 新增 `mods/agents-md` 的完整源码，布局与 sec-default、diff、telemetry 一致（manifest + hooks + tests + README）。按引擎读取 CLAUDE.md 的方式读取 AGENTS.md，是今日 v2.1.277 核心功能的开源实现。
- 🔗 https://github.com/anthropics/claude-code/pull/95409

**3. [#95417] agents-md mod：引擎不附加内容时 Read Hook 不附加嵌套 AGENTS.md** — **CLOSED**
- 修复 `--bare`（设置 `CLAUDE_CODE_SIMPLE`）或 `CLAUDE_CODE_DISABLE_ATTACHMENTS` 环境下 Read Hook 仍附加嵌套 AGENTS.md 的问题，与引擎行为对齐。
- 🔗 https://github.com/anthropics/claude-code/pull/95417

**4. [#95198] diff mod：将 `openPane` 返回值类型放宽为 `unknown`** — **CLOSED**
- `$.ui.open` 即将返回小型结果对象，将声明类型从 `Promise<void>` 改为 `Promise<unknown>`，兼容当前与未来引擎类型。无调用方读取该值，行为不变。
- 🔗 https://github.com/anthropics/claude-code/pull/95198

**5. [#51452] 重写 README.md** — **CLOSED**
- 文档清理：移除 AI 写作腔、精简安装说明、修复损坏的 npm badge。纯文档 PR，但 4 月起停留至今才合并。
- 🔗 https://github.com/anthropics/claude-code/pull/51452

---

## 五、功能需求趋势

从本批 Issues 和 PR 中可提炼出以下功能方向（按信号强度排序）：

| 方向 | 代表 Issue | 信号 |
|---|---|---|
| **1. 多会话 / 编排协作** | #77281（Design↔Code 直连）、#77275（回复目标标识） | 两条独立提案，指向 Agent 间通信模型的设计演化 |
| **2. 可观测性增强** | #77367（子任务模型显示）、#77349（TUI 时间戳）、#77425（任务编号） | 高频需求簇：开发者需要更多上下文来理解会话状态 |
| **3. 工具兼容性与迁移** | #91492、#51781（Grep/Glob） | 一个关闭一个打开，争论远未结束，API 稳定性成焦点 |
| **4. 安全 guardrail 精细化** | #77605（浏览器设备识别）、#77468（凭据护栏）、#77409（Artifact 信任域） | 护栏"一刀切"问题突出，社区要求更精确的上下文感知 |
| **5. 插件 / mod 生态成熟化** | #95409、#95417、#95423（PR 簇） | 引擎功能 mod 化正在推进，AGENTS.md 本身即以 mod 形式落地 |
| **6. 跨端体验一致性** | #77326（VS Code 全量转录 vs CLI 摘要）、#77481（桌面端高亮对比度） | 多端体验差异待收敛 |

**核心观察**：大多数关闭 Issue 带有 `stale` 标签，说明这批 7 月中旬的提案多以"无进展自动关闭"结案。但其中有实质价值的需求（如 #77367、#77349）被关闭后，有重新抬头的可能。

---

## 六、开发者关注点（痛点汇总）

### 1. 破坏性变更的沟通与迁移问题
Grep/Glob 在原生平台的移除引发了文档（#51781）与 API 变更（#91492）的定性之争。核心痛点：**文档更新滞后于行为变更，社区无法提前感知兼容性破坏**。建议在 release notes 中明确标注 `BREAKING` 并给出迁移路径。

### 2. 安全护栏的"过度敏感"与上下文缺失
多个 Issue（#77468、#77409、#77605）指向同一矛盾：**防护机制缺乏对"操作者自有资产/环境"的识别能力**。开发者管理自托管基础设施时，凭据护栏阻止放入自己的密钥；安全研究者被禁止使用合法 bug bounty 场景。guardrail 的硬编码边界正在伤害核心用户群。

### 3. 自动化可靠性受 Hook 语义影响
#75245 显示 Hook 匹配引擎的修复声明与实际行为不符，`$()` 命令替换导致误报。对于重度依赖 Hook 做 CI/CD 门禁的团队，**误报意味着流水线误触发或误阻断**——语义可预测性比新功能更重要。

### 4. Agent 编排场景的"身份黑盒"
当一个会话中长期运行多个后台 agent 时，开发者无法在 TUI 中快速判断：某条消息是谁发的（#77275）、某个任务跑在什么模型上（#77367）、某个后台任务是哪个编号（#77425）。**编排规模越大，对可观测性的需求就越刚性。**

### 5. 快速版本迭代伴随的回归风险
24 小时 3 个版本，其中 1 个含回归（2.1.275 → 2.1.276）。v2.1.276 的修复及时，但代理用户若在窗口期内升级会遭遇全量 400 错误。**建议团队在发布代理相关变更时增加针对 `ANTHROPIC_BASE_URL` 场景的集成测试。**

---

*报告生成时间：2026-09-19 | 数据窗口：过去 24 小时（截至 2026-09-18 UTC）*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-09-19**

---

## 1. 今日速览

今日 Codex 社区最受关注的焦点是 **Windows 平台上的两起严重数据丢失事件**（#46022、#33624），分别涉及数百 GB 文件的越界删除和主目录递归清理，引发了社区对沙箱安全机制的强烈担忧。与此同时，团队紧急发布了 **rust-v0.155.1 热修复**，解决了 0.155 版本中推理摘要默认启用导致部分 Provider 拒绝请求的回归问题。在 PR 侧，多个 Windows 沙箱与 MCP 策略一致性的修复被合并，显示出团队对平台稳定性问题的集中响应。

---

## 2. 版本发布

**rust-v0.155.1（稳定版热修复）** 🔗 [查看 Release](https://github.com/openai/codex/releases/tag/rust-v0.155.1)

- **Bug 修复**：新建本地 TUI 会话现在默认禁用推理摘要（reasoning summaries），修复了不支持该功能的 Provider 拒绝请求的问题。用户显式设置的推理摘要选项仍然生效。（#46467）

**rust-v0.155.0（稳定版）** 🔗 [查看 Release](https://github.com/openai/codex/releases/tag/rust-v0.155.0)

- **新功能**：
  - 实验性 `/voice` 语音对话，支持实时转录和麦克风控制，需通过 `/experimental` 启用（#43581、#43651、#44331）
  - TUI 在状态栏实时显示推理摘要，并在成功回合后显示完成时间戳

**Alpha 版本更新**：v0.156.0-alpha.1 ~ alpha.4、v0.155.0-alpha.9.2、alpha.18 等 6 个预发布版本相继推送，表明 0.156 迭代正在密集推进中。

---

## 3. 社区热点 Issues

### 🔴 数据安全类（重点关注）

**1. #46022 — [CRITICAL] Windows 上 Codex 越界删除数百 GB 数据**
🔗 [openai/codex#46022](https://github.com/openai/codex/issues/46022) | 评论 23 | 标签：bug, windows-os, sandbox, CLI, tool-calls

Codex 在日常项目开发中执行了超出项目范围的破坏性删除操作，波及无关项目、应用和 Windows 系统组件。这是近期最严重的安全事件之一，直接影响用户对 Full Access 模式的信任。

**2. #33624 — 安全提议：Full Access 模式下批量/主目录删除需硬确认与恢复门禁**
🔗 [openai/codex#33624](https://github.com/openai/codex/issues/33624) | 评论 35 | 标签：enhancement, sandbox, app, safety-check

由公开的 GPT-5.6 Sol 事件引发——Ultra 模式子代理因路径展开错误递归删除了用户 Mac 主目录的几乎所有文件。35 条评论中，社区一致呼吁为高破坏性操作增加不可绕过的确认机制和恢复手段。该提案直指沙箱安全模型的核心缺陷。

### 🔴 Windows 平台稳定性类

**3. #46114 — Windows Desktop 更新后沙箱初始化全面失败**
🔗 [openai/codex#46114](https://github.com/openai/codex/issues/46114) | 评论 8 | 标签：bug, windows-os, sandbox, app

最新桌面版更新后，所有会话（新旧线程）均因 `fs sandbox helper failed` 立即失败。非提权、管理员重启、应用修复和重置均无法解决，属于阻断性故障。

**4. #45626 — Windows Desktop 首回合完成后无法发送后续消息**
🔗 [openai/codex#45626](https://github.com/openai/codex/issues/45626) | 评论 13 | 标签：bug, windows-os, app, app-server

会话完成后发送按钮永久置灰，影响存量对话和新建对话，但 CLI 不受影响。13 条评论说明影响面较广，属于桌面端核心交互断裂。

**5. #42215 — Windows Work 项目上下文同步反复失败**
🔗 [openai/codex#42215](https://github.com/openai/codex/issues/42215) | 评论 34 | 标签：bug, windows-os, app

包含 23 个源文件的项目无法在 ChatGPT Project 内启动本地 Work 聊天，始终卡在文件系统阶段。34 条评论是本期最高的 Windows 功能类 Issue，说明项目级本地开发场景受到显著影响。

### 🟡 沙箱与工具调用类

**6. #44696 — Windows 沙箱辅助进程每次 exec_command 和文件读取均失败**
🔗 [openai/codex#44696](https://github.com/openai/codex/issues/44696) | 评论 5 | 标签：bug, windows-os, sandbox, CLI, tool-calls

`helper_unknown_error: setup refresh had errors` 使 Windows 上所有命令执行和文件操作在沙箱初始化层即告失败，CLI 0.153.0-alpha.5 版本受影响。

**7. #32121 — Windows `apply_patch` 可添加文件但无法更新/删除**
🔗 [openai/codex#32121](https://github.com/openai/codex/issues/32121) | 评论 5 | 标签：bug, windows-os, sandbox, tool-calls, app

`apply deny-read ACLs` 错误导致补丁工具在 Windows 上功能不对称（只能增不能改/删），削弱了 Codex 在 Windows 上执行代码修改任务的能力。

### 🟡 MCP 与集成类

**8. #35253 — MCP OAuth DCR 请求错误的作用域**
🔗 [openai/codex#35253](https://github.com/openai/codex/issues/35253) | 评论 7 | 标签：bug, auth, mcp, CLI

CLI 在 MCP OAuth 动态客户端注册时请求的是授权服务器作用域而非资源作用域，调用错误的 API 端点。影响第三方 MCP 服务器的接入体验。

**9. #37856 — VS Code 扩展：过期线程持有者阻塞聊天**
🔗 [openai/codex#37856](https://github.com/openai/codex/issues/37856) | 评论 18 | 👍 11 | 标签：bug, extension, app-server

VS Code Web 渲染器重载后线程所有者未释放，其他客户端显示“此聊天已在其他应用中打开”且无有效恢复路径。18 条评论和 11 个赞说明这是 IDE 用户的高频痛点。

### 🟡 认证与安全策略类

**10. #39551 — 高级账户安全与 GitHub 插件的 MFA 策略死锁**
🔗 [openai/codex#39551](https://github.com/openai/codex/issues/39551) | 评论 3 | 👍 6 | 标签：bug, auth, safety-check

启用高级账户安全（AAS）后标准 MFA 状态被禁用，但 ChatGPT GitHub 插件要求 MFA，形成认证策略死锁，用户无法使用 GitHub 插件。点赞数 6 说明该问题在安全敏感用户群中有共鸣。

---

## 4. 重要 PR 进展

过去 24 小时共 13 条 PR 更新（均涉及 bot 自动合并或团队提交），以下为最值得关注的 10 条：

**1. #46467 — [0.155 hotfix] 恢复 TUI 推理摘要默认值为 none** 🔗 [PR #46467](https://github.com/openai/codex/pull/46467)
作者：celia-oai | 状态：已关闭（合并）
修复 0.155 中推理摘要默认启用导致的 Provider 请求拒绝。恢复 `none` 为默认值，同时尊重显式的 `auto`/`concise`/`detailed` 设置。这是今天最重要的回归修复。

**2. #46335 — 保持 MCP 策略评估与回合环境一致** 🔗 [PR #46335](https://github.com/openai/codex/pull/46335)
使用单一环境快照进行 MCP 策略评估和运行时发布，防止为下一回合保存的环境设置改变当前回合的 MCP 工具可用性。显著提升了会话状态的一致性。

**3. #46333 — 处理清理期间已禁用的 Windows 沙箱账户** 🔗 [PR #46333](https://github.com/openai/codex/pull/46333)
清理流程需要为可能已禁用的沙箱账户获取新的登录令牌。此修复在临时启用账户时持久化“必须再次禁用”的义务，防止服务异常退出后留下未禁用的账户——这是 Windows 沙箱安全模型的加固。

**4. #46334 — 跨路径、网络和沙箱配置共享平台标识** 🔗 [PR #46334](https://github.com/openai/codex/pull/46334)
新增 `Platform` 类型，统一元数据解析、原生平台探测和路径约定映射，替换分散的 `NetworkProxyExecutorO...` 选项。属于底层架构重构，有助于减少平台相关的分支逻辑。

**5. #46331 — 将环境网络策略验证延后至组合完成后** 🔗 [PR #46331](https://github.com/openai/codex/pull/46331)
特征设置和托管要求可能会替换域名和套接字值，原来的顺序会拒绝实际不会被使用的无效条目。此修复调整验证时机，减少了误报。

**6. #46328 — 避免为无项目目录持久化项目信任** 🔗 [PR #46328](https://github.com/openai/codex/pull/46328)
修复了在无项目标识的目录中启动线程时可能持久化信任、并预批准后续添加的项目配置的安全隐患。这是信任边界管理的重要收紧。

**7. #46318 — 为模型 Provider 网关添加 OAuth 凭据管理** 🔗 [PR #46318](https://github.com/openai/codex/pull/46318)
导出 `GatewayAuthConfig` 和 `GatewayAuthManager`，支持 PKCE 浏览器登录、环回回调、缓存令牌解析和过期/拒绝后刷新。为第三方模型网关接入提供了标准化的认证流程。

**8. #46324 — 扩大压缩回退到当前模型的范围** 🔗 [PR #46324](https://github.com/openai/codex/pull/46324)
模型切换后，旧模型的上下文压缩可能在流重试耗尽后仍不自动回退到新选模型。此修复允许除 `TurnAb...` 以外的所有错误触发回退，提升了模型切换场景的稳健性。

**9. #46330 — 将重试退避移至 `codex-async-utils`** 🔗 [PR #46330](https://github.com/openai/codex/pull/46330)
将指数退避辅助函数从 `codex-core` 下沉到 `codex-async-utils`，使 `codex-cloud-config` 无需运行时依赖 `codex-core` 即可使用。属于依赖关系解耦的架构优化。

**10. #46323 — 在回合分析中记录活跃插件清单** 🔗 [PR #46323](https://github.com/openai/codex/pull/46323)
新增 `active_plugin_ids_at_turn_start` 字段，合并活跃宿主插件与选定插件包 ID，排序去重后写入回合分析。为插件生态的遥测与诊断提供了数据基础。

---

## 5. 功能需求趋势

基于全部 50 条 Issue 的标签分布和内容分析，社区关注方向排序如下：

### 🥇 Windows 平台稳定性（最高优先级）
约 40% 的活跃 Issue 带有 `windows-os` 标签。沙箱初始化失败、stdout 捕获损坏、exec_command 挂起、apply_patch ACL 错误、多显示器窗口溢出等问题反复出现，横跨 CLI、Desktop App 和 VS Code 扩展。**Windows 正在成为 Codex 体验中最薄弱的平台**，社区普遍期望团队将其作为一等公民对待。

### 🥈 沙箱安全与数据保护
两起严重数据丢失事件（#46022、#33624）和 Full Access 模式的安全争议，已将沙箱权限模型推向讨论焦点。对于破坏性操作，社区强烈要求引入**不可自动越过的硬确认机制**和文件恢复能力。相关 PR（#46333、#46328）表明团队已经在响应，但用户期望看到更系统性的防护。

### 🥉 MCP 集成质量
MCP 相关问题呈现多样化：OAuth 作用域错误（#35253）、工具 schema 未传播（#13768）、政策评估不一致（PR #46335）。MCP 作为 Codex 生态开放能力的核心通道，其稳定性和标准合规性直接影响第三方工具接入意愿。

### 4️⃣ 扩展与 IDE 集成
VS Code 扩展的线程管理（#37856）、终端执行可见性（#15997）等 Issue 反映出开发者对 IDE 内 Codex 体验的更高期待。社区希望在 IDE 中获得与 CLI 同等的透明度和控制力。

### 5️⃣ 实验功能演进
语音对话（`/voice`）、推理摘要（reasoning summaries）、计算机使用（Computer Use）等实验功能在 0.155/0.156 中快速迭代，但 Linux/Wayland 上的语音覆盖层问题（#45514、#45460）提示跨平台适配仍需投入。

---

## 6. 开发者关注点

### 核心痛点总结

| 优先级 | 痛点 | 代表 Issue |
|--------|------|-----------|
| 🔴 极高 | **数据安全恐惧**——用户可以接受 Codex 执行破坏性操作，但无法接受无确认、无恢复机制的不可逆删除 | #46022、#33624 |
| 🔴 极高 | **Windows 平台功能残缺**——沙箱、工具调用、桌面端、扩展均出现基础功能不可用的情况 | #46114、#44696、#45626、#32121、#42215 |
| 🟡 高 | **信任边界模糊**——项目信任持久化、安全确认机制在边界场景下行为不一致 | #33624、#39551、PR #46328 |
| 🟡 高 | **MCP 工具链可靠性不足**——schema 传播、OAuth 认证、策略评估均存在缺陷，第三方集成体验不稳定 | #35253、#13768、PR #46335 |
| 🟢 中 | **IDE 扩展与桌面端的状态同步问题**——线程所有者冲突、连接超时、任务重启需求频繁打断工作流 | #37856、#46148、#46479 |

### 开发者建议方向

1. **为破坏性操作建立分级确认机制**：Full Access 模式下对超出项目范围的删除、批量删除、主目录操作应触发硬确认与操作回滚点。
2. **投入 Windows 专项测试**：问题的广度（沙箱、CLI、Desktop、扩展）和深度（基础功能失效）表明需要专项平台质量计划，而非逐条打补丁。
3. **提升沙箱错误信息的可诊断性**：当前 `helper_unknown_error`、`apply deny-read ACLs` 等错误对普通用户缺乏可操作的指引，建议在错误输出中附带排查步骤或诊断命令。
4. **MCP 规范的严格遵守**：OAuth 作用域、工具 schema 等问题应参照 MCP 官方规范进行一致性测试，避免生态分裂。

---

*数据来源：[github.com/openai/codex](https://github.com/openai/codex)，统计截至 2026-09-19。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 · 2026-09-19

## 1. 今日速览

过去 24 小时社区最值得关注的信号集中在 **Agent 可靠性与会话状态持久化** 两个方向：多个 P1 修复（重复 functionResponse、持久化写入失败保护、代理互操作）同时提交，而 Issue 端对 Subagent "假成功"、"Generalist 挂起" 的长期讨论仍在升温。此外，AST 感知搜索、持久化任务跟踪等结构性增强已从 Issue 走向 PR 落地。

## 2. 版本发布

**v0.62.0-nightly.20260918.g9450ade79**（[发布链接](https://github.com/google-gemini/gemini-cli/releases)）

本次更新包含两个修复：
- OAuth 刷新时保留 refresh token，并让凭据删除操作幂等化（PR #29339）
- UI 边框渲染时守护负值布局尺寸，避免异常（by diegogodinezr）

## 3. 社区热点 Issues（精选 10 条）

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent 达到 MAX_TURNS 后仍报告 GOAL 成功**（P1 · 13 评论 · 👍2）
   最受关注的问题之一：`codebase_investigator` 在未做任何分析即达轮次上限时，仍返回 `success / GOAL`，掩盖了中断事实，影响排障与自动评估的准确性。

2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist agent 无限挂起**（P1 · 8 评论 · 👍8）
   社区反馈最强烈：一旦 defer 到 generalist agent，连创建文件夹这类简单操作也会永久挂起，用户等待一小时仍无结果；手动禁止子代理可规避。

3. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873) 零依赖 OS 沙箱化与执行后意图路由**（P2 增强 · 9 评论）
   建议利用 Gemini 3 原生的 bash 亲和力，通过零依赖沙箱兼顾安全与模型原生工具链（grep/sed/awk）能力。

4. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) 评估 AST 感知的文件读取、搜索与映射**（P2 · 7 评论）
   EPIC 级方向：用 AST 工具精确读取方法边界、降低 tokens 噪声、提升导航精度，已衍生出多个关联 PR。

5. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) Gemini 使用 skills 与 sub-agents 主动性不足**（P2 · 6 评论）
   用户反馈：即使 skill 描述高度相关，模型也很少主动调用，需显式指令才肯使用。

6. **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525) Auto Memory 确定性与日志脱敏**（P2 安全 · 5 评论）
   Auto Memory 在脱敏前就把聊天记录送入模型上下文，存在敏感信息泄露风险；服务端日志同样可能记录 skill 内容。

7. **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522) 停止 Auto Memory 无限重试低信号会话**（P2 · 4 评论）
   低信号会话未被标记为已处理，会在索引中反复弹出，浪费资源。

8. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) browser 子代理在 Wayland 下失败**（P1 · 4 评论 · 👍1）
   Linux Wayland 环境下 browser subagent 报错，涉及跨平台浏览器自动化稳定性。

9. **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246) 工具数超过 128 触发 400 错误**（P2 · 3 评论）
   可用工具过多时请求直接失败，期望根据启用范围智能裁剪工具列表。

10. **[#22672](https://github.com/google-gemini/gemini-cli/issues/22672) Agent 应制止破坏性行为**（P2 · 3 评论 · 👍1）
   模型在复杂 git 操作、数据库维护等场景可能误用 `git reset`、`--force` 等危险命令。

## 4. 重要 PR 进展（精选 10 条）

| PR | 内容 |
|---|---|
| [#29400](https://github.com/google-gemini/gemini-cli/pull/29400)｜P1 core | 修复 resume 会话时重复 `functionResponse`：工具结果此前同时持久化于 `toolCalls[].result` 与 durable user 消息中，恢复时被重放。 |
| [#29402](https://github.com/google-gemini/gemini-cli/pull/29402)｜P1 core | 使 PersistentState 写入失败安全：临时文件 + fsync + 原子 rename，防止中断保存把 `state.json` 截断清空。 |
| [#29401](https://github.com/google-gemini/gemini-cli/pull/29401)｜P1 core | 规范化 proxy-agent 在 esbuild 打包下的 CJS/ESM 互操作，保证环境代理解析的一致性。 |
| [#29398](https://github.com/google-gemini/gemini-cli/pull/29398)｜P1 agent | 为 MCP 初次工具发现绑定短超时；修复 tools/list 响应 id 不匹配时 SDK 空等 10 分钟默认超时的问题。 |
| [#29397](https://github.com/google-gemini/gemini-cli/pull/29397)｜P2 agent | 防止中断轮次污染会话上下文并导致无限循环：停止把"上一个回复被中断"的合成文本直接写入历史。 |
| [#29394](https://github.com/google-gemini/gemini-cli/pull/29394)｜P1 agent | 在调度层强制执行用户 hold 指令：当用户说"先别改/先解释"，直接阻塞 replace、write_file、run_shell_command 等变更类工具。 |
| [#29396](https://github.com/google-gemini/gemini-cli/pull/29396)｜P2 agent | 新增 AST 感知的结构化搜索工具 `ast_search`，实现精确符号级导航，对应 Issue #22745。 |
| [#29393](https://github.com/google-gemini/gemini-cli/pull/29393)｜agent | 用持久化文件任务跟踪（TrackerService/CRUD）取代 in-context WriteToDo，解决 token 成本与跨会话记忆丢失。 |
| [#29399](https://github.com/google-gemini/gemini-cli/pull/29399)｜P2 agent | 强化 replace 契约，编辑时保留无关注释与代码；并引导模型做最小、分离的编辑，附带行为回归 eval。 |
| [#29125](https://github.com/google-gemini/gemini-cli/pull/29125)｜P2 core（已合入） | 修复 hook 迁移中 timeout 单位错误：Claude Code 以秒为单位，而 Gemini CLI 按毫秒解释，导致迁移后超时数值失真。 |

## 5. 功能需求趋势

- **Agent/Subagent 可靠性**：假成功、无限挂起、错误终止原因上报，是当前最集中的痛点方向，「状态上报真实性」成为质量主线。
- **AST/结构化感知能力**：从文件读取、搜索到任务跟踪，都在向 AST 感知、持久化、低 token 成本演进（#22745、#22746、#18836、#19561）。
- **Auto Memory 治理**：脱敏、低信号去重、无效 patch 隔离等一系列内存系统质量改进成批出现（#26525、#26522、#26516、#26523）。
- **浏览器自动化**：跨平台（Wayland）稳定性、会话锁恢复、settings 覆盖生效等需求集中（#21983、#22232、#22267）。
- **安全与克制**：零依赖沙箱、破坏性命令防控、用户 hold 强制（#19873、#22672、PR #29394）。

## 6. 开发者关注点

- **会话恢复正确性**：重复消息、state.json 损坏、`/compress` 不持久化，均指向「会话续传」易踩坑。
- **子代理行为透明与可控**：bug 报告缺少子代理上下文（#21763）、轨迹难以分享（#22598）、settings.json 被浏览器代理忽略（#22267），开发者期望更可观测、可配置。
- **模型意图与用户指令对齐**：主动使用 skills/sub-agents 不足、无视"先别执行"的 hold 指令，反映出 prompt 层约束不够，正推动调度层硬性拦截。
- **终端体验**：resize 闪烁/性能（#21924）、交互式 prompt 卡死（#22465）等细节仍影响日常使用。
- **工具规模限制**：超过 128 个工具直接 400 错误，暴露工具裁剪机制的缺失。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-09-19）

## 1. 今日速览

过去 24 小时 Copilot CLI 发布了 v1.0.87-0，重点强化 Auto routing 的组织策略控制与输入编辑体验。社区 Issue 活跃度显著上升，**MCP 兼容性成为绝对焦点**——Figma、Atlassian 等多起 OAuth/discover 失败问题集中爆发；同时并发会话导致 `config.json` 配置丢失、`-p` 参数解析回归等新缺陷也引发了开发者关注。

## 2. 版本发布

### v1.0.87-0（最新）
- 为 Auto routing tier 新增用户级与托管启动默认值，支持严格模式与「用户可覆盖」的组织策略。
- 同一模式下连续的 steering prompts 会合并为一条待处理消息；在空输入框按 **↑** 可将其取回重新编辑（含粘贴文本）。

### v1.0.86（2026-09-17）
- 自定义 Agent 可通过 frontmatter 设置 `include-custom-instructions: true`，选择读取仓库指令文件（`AGENTS.md`、`copilot-instructions.md`、`CLAUDE.md`）。
- 在无 plugin-directory、discovery、working-directory 覆盖参数时恢复活动会话，可正确保留市场配置。

## 3. 社区热点 Issues（Top 10）

1. **#1632 支持 skills 子文件夹以更好组织** · [CLOSED] · 👍24 · 12 评论
   社区呼声最高的功能需求之一。用户拥有 10+ 技能时扁平目录难以管理，期望按子文件夹归类。已关闭，说明团队可能已采纳或提供了方案。
   链接：https://github.com/github/copilot-cli/issues/1632

2. **#1285 组织级 Agent 无法显示** · [OPEN] · 👍13 · 10 评论
   企业用户按官方模板在 `{org}/.github-private` 创建 Agent 后，CLI 与 VS Code 均不显示。直接影响企业部署体验，讨论跨度长、至今未解决，是组织管理层的典型痛点。
   链接：https://github.com/github/copilot-cli/issues/1285

3. **#4870 Figma 远程 MCP 加载失败（`-32601` 被当致命错误）** · [OPEN] · 👍11 · 6 评论
   Figma 托管 MCP 认证初始化成功，但 `server/discover` 返回 `-32601` 被 CLI 判定为致命失败，工具无法注册——而 VS Code 中却正常。跨端行为不一致引发强烈关注。
   链接：https://github.com/github/copilot-cli/issues/4870

4. **#4900 config.json 并发会话覆盖导致 trustedFolders 等丢失** · [OPEN] · 昨日新增
   每个会话持有独立的 `config.json` 内存副本，退出时整文件重写、不做合并，并发多开时直接互相覆盖托管状态，存在**数据丢失风险**，是本次新增中最严重的数据一致性问题。
   链接：https://github.com/github/copilot-cli/issues/4900

5. **#4905 桌面应用会话数分钟后即死亡（GitHub 凭据注册失效）** · [OPEN] · 3 评论
   桌面版 1.1.22 中，`github-mcp-server` catalog 因「凭据注册不再可用」而失效并致会话终止，尽管 `gh auth status` 显示 token 有效。影响桌面应用核心可用性。
   链接：https://github.com/github/copilot-cli/issues/4905

6. **#4844 `--yolo` 被 pre-auth fail-closed 上限吞掉** · [OPEN] · 昨日活跃
   交互启动时，fail-closed 姿态在策略拉取前的窗口期禁用了 bypass-permissions，`--yolo`/`--allow-all` 生效后却不会被重新应用，导致用户预期的「全自动」模式静默失效。
   链接：https://github.com/github/copilot-cli/issues/4844

7. **#4902 `-p` 提示值以 `-` 开头被误解析为 flag（1.0.85 回归）** · [OPEN] · 昨日新增
   提示文本以 YAML frontmatter（如 `---`）开头时被误判为 CLI 参数，还给出「未加引号」的误导性错误。属明确回归，影响脚本化调用。
   链接：https://github.com/github/copilot-cli/issues/4902

8. **#4906 Figma OAuth DCR 发送 `client_name: "copilot-cli"` 被 403 拒绝** · [OPEN] · 昨日新增
   Figma 对动态客户端注册的 `client_name` 做白名单校验，期望值为 `"GitHub Copilot CLI"`，当前值被拒导致浏览器尚未打开连接即失败。与 #4870 同属 Figma 集成阻塞。
   链接：https://github.com/github/copilot-cli/issues/4906

9. **#4765 非 repo 根目录工作目录下无法读取配置** · [OPEN] · 4 评论
   workspace 本身不是 git repo 时，`.mcp.json`、hook 文件等配置全部读不到。对多仓库工作区布局的开发者影响广泛。
   链接：https://github.com/github/copilot-cli/issues/4765

10. **#1824 默认模型选择** · [CLOSED] · 6 评论
    每次启动强制默认 Claude Sonnet，用户希望能自定义默认模型。虽已关闭，但结合 #4898（上下文窗口控制）看，「模型可控性」仍是持续诉求。
    链接：https://github.com/github/copilot-cli/issues/1824

## 4. 重要 PR 进展

过去 24 小时**无新的 Pull Request 更新**（共 0 条）。社区活跃度集中在 Issue 侧，暂无可总结的合并或待审 PR。

## 5. 功能需求趋势

- **MCP 生态兼容性（最热）**：Figma、Atlassian 等托管服务器的 OAuth/DCR 白名单、`discover` 错误处理、生命周期通知噪音（#4907 重连刷屏）等问题密集出现，说明外部 MCP 集成的授权与容错机制尚不健壮。
- **配置与状态一致性**：并发会话写覆盖（#4900）、非 repo 根目录读取失败（#4765）、symlink 支持（#3264）——开发者对「配置可预测、共享、不丢」有强烈需求。
- **会话管理治理**：会话元数据陈旧（#4904）、branch 会话 `updated_at` 被 git checkout 刷屏（#4903）、compact 失败（#4698）——长时间会话的可维护性成为新焦点。
- **模型与上下文显式控制**：默认模型（#1824）、Rubber Duck 模型指定（#3480）、上下文窗口大小（#4898）——用户不再满足于自动选模，要求显式钉选。
- **自主模式的「可控自治」**：autopilot 跳过澄清问题前增加可配置延迟（#4899）、`--yolo` 不被吞掉（#4844）——开发者想要自动化，但仍希望保留干预窗口。

## 6. 开发者关注点

- **MCP 集成是头号痛点**：Figma 两连击（#4870、#4906）与 Atlassian OAuth（#4901）表明，真实远端 MCP 的授权流程与错误通告远未达到「开箱即用」，且与 VS Code 行为不一致加剧困惑。
- **数据丢失风险令人警惕**：#4900 的配置整文件覆盖问题属于「静默破坏用户状态」，需尽快修复。
- **回归问题影响信任**：`-p` 参数解析回归（1.0.85→#4902）命中了脚本化用户的核心路径，回归测试覆盖面待加强。
- **会话噪音与信号过载**：MCP 重连通知刷进对话历史（#4907）、branch 切换顶起 60+ 条陈旧会话（#4903），大量「假更新」稀释了侧边栏的真实信号。
- **平台与终端体验碎片化**：Windows 的 Ctrl+Backspace（#3858）、PowerShell 强绑（#1086）、FreeBSD 不再支持（#3382）等历史问题仍有关注，跨平台一致性是长期诉求。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期：2026-09-19** | **数据范围：过去 24 小时** | **仓库：MoonshotAI/kimi-cli**

---

## 1. 今日速览

过去 24 小时内无新版本发布，社区动态集中在 Issue 的批量关闭与少量新反馈上：13 条 Issue 中 11 条被关闭（多为历史 bug 修复确认），新增 1 条关于 macOS 2.0.0 粘贴图片静默失败的高关注回归问题。唯一一条活跃 PR 修复了 Hooks 系统中 `UserPromptSubmit` 钩子收到空 `prompt` 的问题，属于对开发者工作流的实质性改进。

---

## 2. 版本发布

过去 24 小时无新版本发布。

---

## 3. 社区热点 Issues（共 13 条，精选 10 条）

| 排序 | Issue | 状态 | 关注点 |
|---|---|---|---|
| 🔥 **#2652** | [macOS 2.0.0 粘贴图片偶发静默失败（0.43.x 回归）](https://github.com/MoonshotAI/kimi-cli/issues/2652) | 🟢 OPEN | 新开 / 0 评论 |
| ⭐ **#1234** | [代理环境变量在 `kimi login` 时因 aiohttp 默认设置失效](https://github.com/MoonshotAI/kimi-cli/issues/1234) | 🔴 CLOSED | 14 评论 / 2 👍 |
| ⭐ **#1680** | [VSCode 中独立调节 kimi 窗口字体大小](https://github.com/MoonshotAI/kimi-cli/issues/1680) | 🟢 OPEN | 2 评论 / 2 👍 |
| **#1107** | [安装 sh 脚本在未装 uv 时存在 bug](https://github.com/MoonshotAI/kimi-cli/issues/1107) | 🔴 CLOSED | 6 评论 |
| **#1459** | [Kimi 不会配置自己（MCP 配置问题）](https://github.com/MoonshotAI/kimi-cli/issues/1459) | 🔴 CLOSED | 1 评论 |
| **#1296** | [MCP 断开连接时的间歇性报错](https://github.com/MoonshotAI/kimi-cli/issues/1296) | 🔴 CLOSED | 2 评论 |
| **#1339** | [@ 文件提及列表中显示内部 .git/objects 文件](https://github.com/MoonshotAI/kimi-cli/issues/1339) | 🔴 CLOSED | 1 评论 |
| **#734** | [Google GenAI provider 对含 $schema 的 tool 参数报 extra_forbidden](https://github.com/MoonshotAI/kimi-cli/issues/734) | 🔴 CLOSED | 2 评论 |
| **#1291** | [标准输入中的非法 Markdown 格式导致 Kimi 崩溃](https://github.com/MoonshotAI/kimi-cli/issues/1291) | 🔴 CLOSED | 2 评论 |
| **#1342** | [增加 OSC 9/777 终端任务完成通知](https://github.com/MoonshotAI/kimi-cli/issues/1342) | 🔴 CLOSED | 1 评论 |

**关键解读：**

- **#2652（新开）**：用户报告 2026-09-17 从 0.43.x 升级到 2.0.0（darwin-arm64 单文件版）后，`Ctrl+V` 粘贴剪贴板图片**偶发完全无反应**，不出现 `[image #N]` 占位符也无报错。这是 2.0.0 换代后的首个回归类反馈，值得密切关注。
- **#1234（高互动）**：代理环境变量失效问题收获 14 条评论、2 个 👍，是本周互动最多的线程，说明网络/代理配置是企业与国内用户的高频痛点。
- **#1680（需求）**：VSCode 插件中独立调节 kimi 窗口字体大小的需求保持 OPEN，用户明确对比了 CodeGeeX 的体验，属于典型的"小而高频"的 IDE 体验诉求。
- 其余已关闭 Issue 集中在安装脚本健壮性、MCP 稳定性、provider 兼容性、终端 UI 细节等方向，说明维护团队在本轮集中清理了一批历史缺陷。

---

## 4. 重要 PR 进展（共 1 条）

| PR | 状态 | 内容 |
|---|---|---|
| ✅ **#2176** | 🟢 OPEN | [fix(hooks): 从 ContentPart 中提取文本用于 UserPromptSubmit 钩子](https://github.com/MoonshotAI/kimi-cli/pull/2176) |

**要点：** 该 PR 关联 Issue #2148，修复了一个对钩子开发者影响较大的 bug——当 `user_input` 为 `list[ContentPart]`（所有消息的默认形态）时，`UserPromptSubmit` 钩子会收到空的 `prompt` 和 `matcher_value`。原因是旧代码只处理了 `str` 分支，其余情况一律回退为空字符串，导致基于正则的匹配逻辑直接失效。修复后任何依赖 `UserPromptSubmit` 的自定义自动化/校验流程都能正确拿到用户输入。

> 本日 PR 更新仅此 1 条，无其他可汇报项。

---

## 5. 功能需求趋势

综合全部 13 条 Issue，社区当前最关注的功能方向排序：

1. **2.0.0 版本稳定性与回归修复**（最高优先级）——升级后出现粘贴图片静默失败（#2652）、安装脚本 bug（#1107）等基底问题，用户聚焦于新架构的可靠性。
2. **IDE / 编辑器集成体验**——VSCode 独立字体调节（#1680）、Web UI 路径视图与 diff 视图重叠（#1302），反映用户对编辑器内嵌体验的精细化诉求。
3. **MCP 稳定与配置**——MCP 断连报错（#1296）、Kimi 自我配置能力（#1459），MCP 生态正在成为高频使用场景，可靠性问题逐渐凸显。
4. **Provider / 模型兼容性**——Google GenAI 适配（#734），说明多 provider 支持已进入实际使用阶段，需要更严格的参数校验。
5. **终端体验细节**——Ghostty 主题可辨识度（#1301）、OSC 任务完成通知（#1342），显示用户对终端工作流的"最后一公里"体验有持续期待。

---

## 6. 开发者关注点

从本周反馈提炼出以下高频痛点：

- **网络与代理配置**：`kimi login` 在代理环境下失败，#1234 的 14 条评论表明大量开发者依赖环境变量转发流量，aiohttp 默认忽略代理的行为直接阻塞了登录流程。
- **升级回归风险**：0.43.x（Python 版）→ 2.0.0（单文件版）的迁移在 macOS 上出现粘贴图片静默失败，用户明确标注"回归"，提示大版本切换需加强降级/回滚与兼容性测试。
- **钩子系统可用性**：PR #2176 揭示 `UserPromptSubmit` 在默认数据结构下返回空值，意味着早期钩子文档与实现存在脱节，一旦合并将显著提升自动化工作流的可靠性。
- **输入健壮性**：非法 Markdown 格式可从标准输入直接击穿 CLI（#1291），体现输入校验层需要更严格的容错。
- **中文用户体验**：多条 Issue 使用中英双语提交（#1680、#2652、#1459），说明国内开发者是活跃且不容忽视的反馈群体，本地化体验与文档双语文案值得持续投入。

---

*本报告由 AI 开发工具技术分析师基于 GitHub 公开数据自动生成，所有链接均指向原始 Issue/PR。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报

**日期：2026-09-19 | 数据来源：[anomalyco/opencode](https://github.com/anomalyco/opencode)**

---

## 1. 今日速览

OpenCode 社区今日最突出的动态是**免费层（Free Tier）访问验证大面积故障**，至少 10 个独立 Issue 报告了 "OpenCode's free tier can only be used from within OpenCode" 错误，涉及官方桌面客户端、CLI、第三方前端（MonoCode）及自定义 Agent 等多种使用场景，社区反应强烈。同时，历史热点 Issue #30086（高 CPU 占用）评论数已增至 54 条，持续引发关注。PR 活动以自动化清理和历史积压关闭为主，无新版本发布。

---

## 2. 版本发布

过去 24 小时内无新版本发布。

---

## 3. 社区热点 Issues

| # | Issue | 核心问题 | 社区反应 |
|---|-------|---------|----------|
| 1 | [#30086](https://github.com/anomalyco/opencode/issues/30086) | **高 CPU 占用**：新版 OpenCode CPU 使用率飙升，10 个会话降至 3 个即卡顿，影响鼠标响应 | 👍30 / 💬54，长期未解决，关注度最高 |
| 2 | [#49433](https://github.com/anomalyco/opencode/issues/49433) | **免费层验证故障**：所有模型均报 "free tier can only be used from within OpenCode"，v1.3.17 | 👍8 / 💬43，今日最活跃的新 Issue |
| 3 | [#49580](https://github.com/anomalyco/opencode/issues/49580) | **第三方前端被拒**：MonoCode 桌面端 + OpenCode 后端使用 Muse Spark 1.3 Free 失败，与 Zen "无锁定" 承诺矛盾 | 💬43，涉及生态开放性争议 |
| 4 | [#49777](https://github.com/anomalyco/opencode/issues/49777) | **TUI /btw 崩溃**：内置斜杠命令在渲染答案时因 PluginProvider 上下文越界崩溃，v2.0.8 | 👍2 / 💬3，v2.0 新 bug |
| 5 | [#49723](https://github.com/anomalyco/opencode/issues/49723) | **explore 子代理被拒**：CLI 内运行时 explore subagent 报免费层错误，general agent 同模型正常 | 💬2，揭示免费层验证逻辑对子代理不一致 |
| 6 | [#49725](https://github.com/anomalyco/opencode/issues/49725) | **Shell 工具参数名不匹配**：工具期望 `command`，模型发送 `cmd`，导致 missing-key 错误 | 💬2，工具 schema 与模型输出不一致 |
| 7 | [#49645](https://github.com/anomalyco/opencode/issues/49645) | **MCP 工具延迟加载提案**：建议将 MCP 工具 schema 从系统提示移至搜索式按需加载，减少 token 消耗 | 👍2 / 💬2，架构级优化建议 |
| 8 | [#49014](https://github.com/anomalyco/opencode/issues/49014) | **Go 层使用限制串联**：单个模型触达 5 小时上限后，所有 Go 模型均被阻断，切换无效 | 💬4，计费/限流逻辑缺陷 |
| 9 | [#49302](https://github.com/anomalyco/opencode/issues/49302) | **Session 时间戳批量篡改**：旧会话 `time_updated` 被批量刷新为当前时间，破坏排序 | 💬3，影响所有依赖时间排序的前端 |
| 10 | [#48747](https://github.com/anomalyco/opencode/issues/48747) | **Windows AMD GPU 崩溃**：桌面版在 AMD Radeon 上 GPU 进程反复崩溃，exitCode -2147483645 | 💬4，阻碍特定硬件用户使用 |

**补充说明**：免费层验证故障已成为今日绝对主题，除上表 #2、#3、#5 外，[#49590](https://github.com/anomalyco/opencode/issues/49590)、[#49680](https://github.com/anomalyco/opencode/issues/49680)、[#49678](https://github.com/anomalyco/opencode/issues/49678)、[#49771](https://github.com/anomalyco/opencode/issues/49771)、[#49858](https://github.com/anomalyco/opencode/issues/49858)、[#49736](https://github.com/anomalyco/opencode/issues/49736)、[#49698](https://github.com/anomalyco/opencode/issues/49698) 均为同一错误的不同报告，官方尚未统一回应。

---

## 4. 重要 PR 进展

| # | PR | 类型 | 内容说明 |
|---|----|------|---------|
| 1 | [#48638](https://github.com/anomalyco/opencode/pull/48638) | 🟢 Open / Bug Fix | 加固 session diff/snapshot/write 路径，削减并行 agent 下的 worker 线程阻塞 |
| 2 | [#43300](https://github.com/anomalyco/opencode/pull/43300) | Closed / Bug Fix | TUI 增加问题/权限恢复轮询，修复丢失 SSE 事件导致的 UI 卡死 |
| 3 | [#43282](https://github.com/anomalyco/opencode/pull/43282) | Closed / Bug Fix | subagent 工具暴露有效 agent ID 列表，避免模型选用无效子代理 |
| 4 | [#43258](https://github.com/anomalyco/opencode/pull/43258) | Closed / Bug Fix | 守护子进程 stdin 防止 MCP 服务器崩溃后的 EPIPE 信号拖垮 v2 后台服务 |
| 5 | [#43253](https://github.com/anomalyco/opencode/pull/43253) | Closed / Bug Fix | TUI 切换 agent 时跟随配置的 model/variant 选择，不再重置手动指定 |
| 6 | [#43236](https://github.com/anomalyco/opencode/pull/43236) | Closed / Bug Fix | 修复自定义表单答案编辑器无法粘贴的问题 |
| 7 | [#43228](https://github.com/anomalyco/opencode/pull/43228) | Closed / Feature | 新增 `opencode run --bare` 确定性裸运行模式，不继承用户/项目配置 |
| 8 | [#43211](https://github.com/anomalyco/opencode/pull/43211) | Closed / Feature | 标签页右键菜单支持关闭所有/关闭右侧等操作 |
| 9 | [#43195](https://github.com/anomalyco/opencode/pull/43195) | Closed / Bug Fix | 支持子代理 session 树的完整导出/转移，此前仅导出顶层 session |
| 10 | [#43193](https://github.com/anomalyco/opencode/pull/43193) | Closed / Bug Fix | 作用域级 auto-accept 设置生效修复，支持按项目/主机独立配置 |

> 注：过去 24 小时更新的 PR 以历史积压清理为主（均标记 `[automated-pr-cleanup]`），唯一仍 Open 的是 #48638。

---

## 5. 功能需求趋势

从今日 Issues 和 PR 中提炼出社区最关注的功能方向：

| 方向 | 代表 Issue/PR | 说明 |
|------|-------------|------|
| **免费层/认证可用性** | #49433, #49580, #49723, #49771 | 今日绝对第一优先级，涉及免费模型可用性、第三方前端兼容性、子代理鉴权一致性 |
| **性能与资源占用** | #30086, #48638 | CPU 高占用持续发酵，并行 agent 下的 worker 线程阻塞需要架构级修复 |
| **MCP 工具生态** | #49645, #49852, #43258 | 延迟加载减少 token 消耗、子路径导出解析、MCP 服务器崩溃防护 |
| **v2.0 稳定性** | #49777, #49725, #49764 | /btw 崩溃、shell 参数不匹配、二进制名称 resume 指令错误等多个 v2 新 bug |
| **计费/限流逻辑** | #49014, #44917 | 模型限制串联阻断、Ox Alpha 端点不可用 |
| **项目/会话管理** | #49302, #49817, #12393 | 时间戳篡改、项目重命名后路径失效、归档恢复 |
| **安全与隔离** | #49836 | `--pure` 和 `DISABLE_PROJECT_CONFIG` 未阻断项目级插件加载 |
| **IDE/Web 体验** | #49721, #49743 | Web 端 auto-approve 开关无响应、快捷键搜索框失焦 |

---

## 6. 开发者关注点

**🔴 紧急痛点：免费层验证系统疑似服务端回归**
至少 10 个独立报告指向同一错误，覆盖官方桌面端、CLI、MonoCode、Pi Agent、自定义 Agent 等所有接入方式。[#49858](https://github.com/anomalyco/opencode/issues/49858) 直接引用了 Zen 文档中"无锁定"承诺，质疑文档与现实不符。社区期待官方尽快确认是否为服务端变更并发布修复或声明。

**🟠 持续痛点：性能退化**
[#30086](https://github.com/anomalyco/opencode/issues/30086) 已持续近 4 个月，54 条评论表明用户从多会话并行被迫降级到 2-3 个会话，严重影响生产力。社区对官方迟迟未修复表示不满。

**🟡 v2.0 质量隐忧**
v2.0.3–v2.0.8 版本集中暴露了子代理鉴权不一致、工具参数 schema 与模型输出不匹配、内置命令崩溃等问题，反映 v2 大版本重构后集成测试覆盖不足。

**🟡 安全边界模糊**
[#49836](https://github.com/anomalyco/opencode/issues/49836) 揭示 `--pure` 标志无法阻止项目级 `.opencode/plugins/*.js` 加载，在供应链安全敏感场景下构成风险。

**🟢 值得关注的社区贡献**
[#49840](https://github.com/anomalyco/opencode/issues/49840) 提出了后台子代理、monitor、cron、worktree 隔离等编排特性方案，[#49645](https://github.com/anomalyco/opencode/issues/49645) 的 MCP 延迟加载方案可显著降低 token 开销，均为高质量功能提案，值得官方评估采纳。

---

*本日报基于 GitHub 公开数据自动生成，仅供参考。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-09-19

> 数据来源：github.com/badlogic/pi-mono（earendil-works/pi）

---

## 1. 今日速览

今日无新版本发布，但社区活跃度极高：**50 条 Issue 更新、20 条 PR 更新**。核心矛盾集中在 **模型兼容性与工具调用稳定性**（Claude 新模型 edit 工具失败率约 20%、Codex 流式解析 OOM、Mistral/GLM 推理档位适配），以及 **TUI/全屏模式的性能与体验**（滚动、重渲染、CPU 占用）。PR 侧以修复类为主，并出现了 `/retry` 命令、Prompt Cache 预热、扩展注入系统提示词等值得关注的新能力。

---

## 2. 版本发布

过去 24 小时无新 Release。相关讨论多围绕 `0.85.1` 的回归问题（见 #9725）与 catalog 更新滞后（#9616、#9737）。

---

## 3. 社区热点 Issues（Top 10）

**① #6278 [已关闭] 新 Claude 模型与 edit 工具兼容性差，部分会话约 20% 编辑失败**
评论 25、👍 10，今日讨论度最高。LLM 会凭空生成 `new_text_x`、`type`、`in_file` 等额外字段，触发 `must not have additional properties` 校验错误。反映模型侧结构化输出与工具 schema 严格校验之间的张力。
🔗 https://github.com/earendil-works/pi/issues/6278

**② #7730 [开放] macOS 长会话下 CPU 占用异常偏高**
评论 16、👍 10。CPU 在 50–110% 间摆动、内存 600–800MB，疑似与上下文长度/会话时长相关。是长期存在的性能痛点，且与 #9549 的重渲染问题相互印证。
🔗 https://github.com/earendil-works/pi/issues/7730

**③ #8928 [开放·进行中] 并行启动时报 "No API key found" 约 48 秒**
评论 11。`auth.json` 中存在**其他 provider 的过期 OAuth 凭证**时，多进程启动会误报当前 provider 凭证缺失。作者提供了确定性复现与时序数据，对生产环境多进程部署影响较大。
🔗 https://github.com/earendil-works/pi/issues/8928

**④ #8684 [开放] `PI_OFFLINE` 静默禁用全部 provider 模型发现**
评论 11。文档声明该变量仅关闭启动期网络维护操作，实际却禁用了整个会话的模型目录发现，属于文档与行为不一致的隐性坑。
🔗 https://github.com/earendil-works/pi/issues/8684

**⑤ #9052 [已关闭] 全屏模式滚轮速度比常规模式慢 3 倍**
评论 10、👍 6。用户为固定输入框而切换到全屏，却付出了滚动体验代价，与 #9758（滚动步长硬编码为 1 行）同源。
🔗 https://github.com/earendil-works/pi/issues/9052

**⑥ #9652 [开放] `/compact` 被 Anthropic Claude Fable 拒绝**
评论 6。`serializeConversation` 把 thinking blocks 转写进摘要提示词，被 `reasoning_extraction` 分类器拦截。影响长会话压缩这一关键链路。
🔗 https://github.com/earendil-works/pi/issues/9652

**⑦ #8896 [开放] `/export` HTML 静默丢弃 `display:false` 的自定义消息**
评论 8。该标记文档定义为仅影响 TUI 显示，实际却导致导出内容缺失，属于数据保真问题。
🔗 https://github.com/earendil-works/pi/issues/8896

**⑧ #9616 [已关闭] zai-coding-cn catalog 严重滞后**
评论 6。GLM Coding Plan 已收敛为 GLM-5.3 / 5.3-Flash，内置 catalog 仍列出 10 个模型（其中 8 个已不存在），请求被服务端静默改路由，用户难以察觉。
🔗 https://github.com/earendil-works/pi/issues/9616

**⑨ #9725 [已关闭·no-action] 0.85.1 回归：openrouter baseUrl 无法按文档覆盖**
评论 6。commit `4e69b0c` 使所有 openrouter 模型按 API 类型切换 baseUrl，覆盖了用户按文档进行的自定义覆盖。属于典型的"修复引入回归"。
🔗 https://github.com/earendil-works/pi/issues/9725

**⑩ #9549 [开放] 全屏模式下大 transcript 每帧重渲染**
评论 5。Windows Terminal / 2 核环境下单核跑满，每次 resize 都会重发整个 transcript。与 #7730、#9062 共同构成性能类话题集群。
🔗 https://github.com/earendil-works/pi/issues/9549

> 其他值得留意：#9036（openai-codex SSE 解析整包缓冲导致 V8 OOM）、#9129（Windows bash 超时后管道进程残留）、#9718（`--print` 在输出预算耗尽时静默 exit 0）、#9354（prompt 模板 frontmatter 非法时静默丢弃）。

---

## 4. 重要 PR 进展（Top 10）

| # | 状态 | 内容 | 链接 |
|---|---|---|---|
| #9762 | 已合并 | 修复扩展工具返回非标准结构（如 `{output}` 而非 `{content:[]}`）导致 TUI 崩溃退出的问题 | [PR](https://github.com/earendil-works/pi/pull/9762) |
| #9668 | 开放 | **新增 Prompt Cache 预热**（实验性），目前仅面向 Anthropic 显式缓存，可显著降低长会话成本与时延 | [PR](https://github.com/earendil-works/pi/pull/9668) |
| #9434 | 开放 | 允许扩展在 `session_start` 时**追加系统提示词**，含来源元数据与错误隔离 | [PR](https://github.com/earendil-works/pi/pull/9434) |
| #9744 | 已合并 | 新增 **`/retry` 命令**，用于恢复因连接重试失败而中断的回合，本地 LLM 用户受益明显 | [PR](https://github.com/earendil-works/pi/pull/9744) |
| #9714 | 开放 | Azure Foundry **Chat Completions** 部署支持（如 DeepSeek V4 Pro），对应 #9645 | [PR](https://github.com/earendil-works/pi/pull/9714) |
| #9720 | 已合并 | 用 `thinkingLevelMap` 驱动 Mistral 推理档位，新增 `zai-glm-5-3`，替换 id 白名单式判断 | [PR](https://github.com/earendil-works/pi/pull/9720) |
| #9736 | 已合并 | 流在终止事件前被截断时统一触发重试，不再依赖错误文案匹配（兼容代理网关场景） | [PR](https://github.com/earendil-works/pi/pull/9736) |
| #9734 | 已合并 | `--session`/`--fork` 前缀歧义时列出候选并退出，避免历史被追加到错误会话 | [PR](https://github.com/earendil-works/pi/pull/9734) |
| #9746 | 开放 | 文件自动补全支持 **CJK 标点**作为边界（如 `…新功能，docs<tab>`） | [PR](https://github.com/earendil-works/pi/pull/9746) |
| #9724 / #9722 | 已合并 | 重试策略加固：`Retry-After` 日期格式非法时回退指数退避（原会产生 `NaN` 立即重试）；无响应体的裸 4xx 也纳入重试 | [PR](https://github.com/earendil-works/pi/pull/9724) · [PR](https://github.com/earendil-works/pi/pull/9722) |

> 另有 #7989（Qwen Token Plan 中国区个人版 provider）、#9719（工具 shell 垂直内边距可配置）、#9738（overflow 重试前刷新延迟自定义消息）等推进。

---

## 5. 功能需求趋势

1. **新模型 / 新 provider 接入**：Azure Foundry Chat Completions（#9645/#9714）、Qwen Token Plan 中国区（#7989）、opencode-go 的 deepseek-v4.1-flash（#9737）、zai-coding-cn 的 GLM-5.3（#9616/#9720）。模型目录滞后已成为高频问题。
2. **性能优化**：CPU 占用（#7730）、全屏重渲染（#9549）、工具参数解析 O(N²)（#9062）、模糊搜索扫描（#9267）、SSE 整包缓冲 OOM（#9036）。
3. **TUI / 终端体验**：滚轮步长可配置（#9758、#9052）、复制与换行语义（#8019）、图片缩放比例（#8938）、LaTeX 兼容（#8827）、CJK 输入（#9746）。
4. **可配置性与扩展能力**：扩展追加系统提示词（#9434）、SDK 自定义 resume 命令（#9749）、shell 内边距设置（#9719）。
5. **CLI / SDK 健壮性**：非法 `--mode` 静默忽略（#9045）、`--print` 空输出仍 exit 0（#9718）、会话 ID 前缀歧义（#9734）。
6. **成本与缓存**：Prompt Cache 预热（#9668）首次出现，预示长会话成本优化将成为新方向。

---

## 6. 开发者关注点（痛点与高频诉求）

- **静默失败最令人困扰**：`PI_OFFLINE` 越权禁用模型发现（#8684）、`--mode` 非法值无提示（#9045）、prompt 模板 frontmatter 错误无警告（#9354）、`/export` 丢数据（#8896）、`--print` 空输出 exit 0（#9718）。开发者普遍要求**显式诊断与失败可见性**，而非静默降级。
- **跨平台稳定性**：macOS CPU（#7730）、Windows 进程树残留（#9129）、Wayland 剪贴板污染 stderr（#9011）、NixOS/Alpine 需 musl 静态构建（#9033）。
- **错误分类与重试语义**：空响应体 400/413 被误判为上下文超限（#8682）、重试条件依赖错误文案（#9736）、`Retry-After` 解析失败（#9724），反映出**错误处理逻辑需要更结构化**而非字符串匹配。
- **模型目录与真实可用性脱节**：catalog 中保留已下线模型、遗漏新模型，导致用户请求被服务端静默改路由，调试成本极高。
- **多进程/生产部署场景**：并行启动凭证误报（#8928）说明当前鉴权初始化路径对多进程不友好。

---

*注：本日报基于给定 GitHub 数据整理，链接指向 earendil-works/pi 仓库对应条目。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报

**日期**：2026-09-19  
**数据来源**：[github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)

---

## 1. 今日速览

过去 24 小时社区最显著的动态集中在 **LSP 多字节与错误吞没缺陷**、**Goal 运行时瘦身** 与 **Web Shell 体验打磨** 三个方面。一个 P1 级缺陷（非 ASCII LSP 响应被静默丢弃）被确认并已提交修复 PR；围绕 session 可恢复性与 CI 稳定性的多个问题也在收敛。整体来看，社区正在从「功能外延」转向「核心质量与平台健壮性」的深度修复。

---

## 2. 版本发布

### v0.24.1-preview.0
- **修复/改进**：
  - 记录已合入的 ACP 边界验收（`docs(serve)`，#12024）
  - CI：等待已发布的 export renderer 再执行打包（`fix(ci)`）
- **链接**：[查看 Release](https://github.com/QwenLM/qwen-code/releases)

### v0.24.0-nightly.20260918.537311b8a5
- 内容与前一个 preview 基本一致，主要为每日构建版本。
- **链接**：[查看 Release](https://github.com/QwenLM/qwen-code/releases)

> 本次发布量级较小，属例行维护与 CI 加固，无重大功能变更。

---

## 3. 社区热点 Issues（今日精选 10 条）

1. **[#12053](https://github.com/QwenLM/qwen-code/issues/12053) · Slim the Goal runtime: 从当前回合证据判断完成，移除 evidence catalog 与 checkpoints**  
   P2 增强提案。两个真实 `/goal-draft` 会话在单回合约 100 次工具调用内即完成全部目标，暴露了证据目录与检查点机制过度冗余的问题。评论 8 条，是今日讨论最热的问题，且已延伸出多级「Goal slimming ladder」子任务（如 #12179）。

2. **[#11872](https://github.com/QwenLM/qwen-code/issues/11872) · Web Terminal 显示 "[Error: PTY not available]"**  
   P1 bug，影响 macOS 打包。`@lydell/node-pty` 被声明但未正确打包，且 macOS 代码签名会阻止本地安装的 prebuilds。7 条评论，直接击中了 Web Shell 在 macOS 的可运行性。

3. **[#11783](https://github.com/QwenLM/qwen-code/issues/11783) · TUI 崩溃：React #185（Maximum update depth exceeded）**  
   P1 bug，注册后台 shell 任务数秒后交互式 TUI 进程崩溃，指向 React 19.2.0 的更新深度限制问题。5 条评论，影响核心交互体验。

4. **[#12206](https://github.com/QwenLM/qwen-code/issues/12206) · LSP 非 ASCII 响应被静默丢弃**  
   P1 bug。`Content-Length` 按 UTF-8 字节数计算，代码却按 UTF-16 字符串长度比较，导致含中文等字符的 LSP 响应（如 `documentSymbol`）返回空结果。已有修复 PR #12210。

5. **[#12028](https://github.com/QwenLM/qwen-code/issues/12028) · 非对话上下文的 token 治理追踪**  
   P2 增强，涉及 long-context 模型。系统提示、内置工具 schema、`QWEN.md` 与技能列表每次请求都被发送并计费，在大上下文模型上可能无声地吞噬巨大成本。5 条评论，反映成本敏感型用户诉求。

6. **[#12042](https://github.com/QwenLM/qwen-code/issues/12042) · record provenance 在 api-history 投影后丢失**  
   P2 bug。`detectTurnInterruption()` 从投影后的 `Content[]` 分类，但权威的 `provenance` 字段在投影中会丢失，导致两种通知形态仍被错误分类（PR #12007 的遗留问题）。

7. **[#12212](https://github.com/QwenLM/qwen-code/issues/12212) · Session writer lease：不同故障共用 errorKind，残留 .claim 导致永久 503**  
   P2 增强。daemon 非优雅退出后 session 永久不可服务，客户端无从区分多种不同阻塞条件。与 #12213、#12214 构成同一作者的「session 恢复健壮性」系列。

8. **[#12165](https://github.com/QwenLM/qwen-code/issues/12165) · MCP OAuth 丢弃 registrationUrl，破坏 Atlassian 远程 MCP**  
   P2 bug。连接 Atlassian 远程 MCP 服务器时，OAuth 认证在打开浏览器前即失败，`registrationUrl` 从 WWW-Authenticate 发现阶段被丢失。

9. **[#12217](https://github.com/QwenLM/qwen-code/issues/12217) · `export const meta` 前的注释导致工作流脚本启动失败**  
   P2 bug。meta 锚点的正则缺少 `/m` 标志，`//` 或 `/* */` 注释行会让脚本无法启动，且提示具有误导性。典型的「小改动、大影响」问题。

10. **[#11361](https://github.com/QwenLM/qwen-code/issues/11361) · Zed 中 AskUserQuestion 区块显示为 "Raw Input"**  
    P2 bug，IDE 集成方向。Zed 内多选提问没有渲染为选项界面，而是退回原始输入，说明 ACP 边界在第三方 IDE 中的交互能力仍不完整。

---

## 4. 重要 PR 进展（今日精选 10 条）

1. **[#12210](https://github.com/QwenLM/qwen-code/pull/12210) · fix(core): 按字节长度解析 LSP 帧，避免非 ASCII 响应丢失**  
   直接修复 #12206，将 `JsonRpcConnection` 的帧保护从 UTF-16 码元计数改为 UTF-8 字节计数。今日最高价值的修复之一。

2. **[#11874](https://github.com/QwenLM/qwen-code/pull/11874) · feat(cli,core): 新增 `qwen batch` 命令与 headless `--batch` 模式**  
   接入 DashScope Batch API，支持 `submit/status/fetch/cancel`，以实时价一半的成本批量处理独立单轮请求，是成本优化方向的重要功能。

3. **[#12198](https://github.com/QwenLM/qwen-code/pull/12198) · fix(cli): 未决定信任的工作区默认视为不信任**  
   文件夹信任启用时，无信任决策的工作区在 CLI 与 daemon 快速启动路径中均默认不信任，项目设置、环境文件、hooks 保持禁用，提升安全默认值。

4. **[#12221](https://github.com/QwenLM/qwen-code/pull/12221) · fix(core): 识别 sed 的 `--quiet/--silent` 只读别名**  
   修复 #12215，将 GNU sed 的 quiet 别名与 `-n` 同等分类，同时保证 `sed --quiet 'w output.txt'` 仍被识别为写操作。

5. **[#12156](https://github.com/QwenLM/qwen-code/pull/12156) · fix(core): 大扫描中限制 gitignore 匹配器的保留**  
   阻止文件发现扫描为每个目录保留独立编译的 gitignore 副本，修复 #12151 诊断的内存/性能问题。

6. **[#12115](https://github.com/QwenLM/qwen-code/pull/12115) · fix(installer): 独立 Linux 归档预检 glibc**  
   CentOS 7 等老发行版上 Bundled Node 22 无法启动，此 PR 在安装前给出可操作的 GLIBC 错误而非安装后神秘失败。

7. **[#11776](https://github.com/QwenLM/qwen-code/pull/11776) · fix(core): 持久化 session 分页对相同 mtime 安全**  
   修复 #11706，`listSessions()` 改用复合游标，避免批量复制/备份还原等场景下 mtime 相同的 session 被分页跳过。

8. **[#12218](https://github.com/QwenLM/qwen-code/pull/12218) · feat(web-shell): 将 Plan 入口移入 composer 的添加菜单**  
   Web Shell 的 Plan 条目从工具栏移到 `+` 菜单中，转为「Plan mode」复选行，开启时显示可关闭的 Plan chip，净化工具栏。

9. **[#10954](https://github.com/QwenLM/qwen-code/pull/10954) · feat(serve): 暴露 supervisor 正在运行的后台代理**  
   为 `qwen serve` 新增 `GET /background-agents`，返回 Agent View supervisor 正在运行的 session 及各自任务，增强可观测性。

10. **[#12119](https://github.com/QwenLM/qwen-code/pull/12119) · fix(cli): `/context` 分类与 provider 总数一致**  
    重构 `/context` 分解，使各行按内容精确分划并合计到 provider 报告的总 token 数，技能行现包含实际发送的 `<available_skills>` 清单。

---

## 5. 功能需求趋势

从过去 24 小时的 Issues 与 PR 中可提炼出以下社区关注方向：

- **LSP 健壮性（最集中）**：非 ASCII 帧解析（#12206、#12210）、失败服务器被报告为「无结果」（#12220）、每 ACP 进程重复启动 LSP 服务器集（#12216），说明 LSP 在企业级多语言场景下的修复需求强烈。

- **会话可恢复性与锁机制**：#12212、#12213、#11995、#11987 显示社区对 daemon 非优雅退出、session writer lease、Web Shell 恢复横幅误报等「状态可靠性」问题持续施压。

- **成本与上下文治理**：#12053（Goal 运行时瘦身）、#12028（非对话上下文 token 治理）、#11874（Batch API 半价），反映出对大上下文模型 token 开销的实质性关注。

- **IDE/ACP 生态整合**：#11361（Zed AskUserQuestion）、#11872（Web Terminal PTY）、#12165（Atlassian MCP OAuth），第三方 IDE 与远程 MCP 的互操作性仍在磨合。

- **跨平台健壮性**：macOS 代码签名与 node-pty 打包（#11872）、Linux glibc 预检（#12115）、Windows monitor debug 目录（#11679），平台差异问题频发。

---

## 6. 开发者关注点

综合 Issue 讨论与 PR 采纳情况，开发者反馈中的高频痛点集中如下：

1. **「静默失败」体验差**：LSP 非 ASCII 响应返回空结果（#12206）、失败服务器被吞成空数组（#12220）、session writer 不同故障共用同一 errorKind（#12212），均属「错误被无声吞没」的模式，社区反复要求可区分的错误信号与可操作的提示。

2. **macOS 打包与签名摩擦**：`@lydell/node-pty` 声明却未打包、本地 prebuilds 被代码签名阻止（#11872），是 Web Shell 在 macOS 上不可用的根因，也是 P1 级平台问题。

3. **语言一致性问题**：Session recap 硬编码英文（#11847），与多语言会话内容脱节，反映出国际化覆盖不足。

4. **Goal/长任务运行时的过度设计**：#12053 及其子任务表明，在真实单回合长任务中，evidence catalog 与 checkpoints 机制的成本大于收益，需要按「当回合证据即完成判据」的思路精简。

5. **CI 与自修复流程的持续投入**：多个 PR 围绕「重试瞬态失败」「从不启动的 job 只重跑一次」「main CI 失败按 commit 追踪」（#11989、#11963、#11134）展开，说明工程团队在大规模 CI 稳定性上仍有持续压力。

---

*本报告由 AI 技术分析师基于 GitHub 公开数据自动生成，覆盖窗口为 2026-09-18 至 2026-09-19（UTC）。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



# DeepSeek TUI（Codewhale）社区动态日报 — 2026-09-19

---

## 1. 今日速览

今日无新版本发布，但社区活跃度极高：过去 24 小时内共 50 条 Issue 和 20 条 PR 更新。核心动态集中在**架构治理**（MCP 栈整合、配置层收敛）、**可观测性补强**（token 用量与工具诊断、Agent 指标持久化）以及**用户体验修复**（引擎静默冻结、ACP 配置失效、YOLO 模式回归诉求）。多个长期悬置的重构类 Issue 进入密集讨论阶段。

---

## 2. 版本发布

**无新版本发布**（过去 24 小时内无 Release 记录）。当前最新版本为 0.9.13，0.9.14 的重构 backlog 正在通过 Issue 队列逐步推进。

---

## 3. 社区热点 Issues（精选 10 条）

### 🔴 #6184 — 引擎静默冻结：长任务中途中止，无日志、无崩溃
- **作者**: bevis-wong | **评论**: 6 | [链接](https://github.com/Hmbown/Codewhale/issues/6184)
- **重要性**: 高。用户报告在长时、工具密集的运行中，模型输出突然停止，后续用户输入被持久化但永远得不到响应，且无任何错误日志或崩溃记录。直接影响可用性。
- **社区反应**: 已复现，环境覆盖 Linux + GLM-5.3-Flash 提供商，社区正在协助定位事件流中的静默丢失点。

### 🟠 #6011 — TUI 用量与工具诊断：逐组件 token 计费 + 缓存命中率
- **作者**: 7jrxt42BxFZo4iAnN4CX | **评论**: 9 | [链接](https://github.com/Hmbown/Codewhale/issues/6011)
- **重要性**: 高。属于 C11 核心执行计划的一部分，目标是提供 per-component / per-model 的 token 会计、缓存命中率、per-tool sinks 和压缩成本分析。当前 `codewhale metrics` 输出严重不完整。
- **社区反应**: 高关注，与 #6315（Sub-agents 指标无数据源）形成互补，两者合并将解决可观测性最大缺口。

### 🟠 #6015 — 自适应防卡顿 + 只读 Shell 语法扩展
- **作者**: 7jrxt42BxFZo4iAnN4CX | **评论**: 9 | [链接](https://github.com/Hmbown/Codewhale/issues/6015)
- **重要性**: 中高。属于 C05/C06 核心计划，放宽了此前"仅发布后可用"的限制，允许更宽泛的只读 shell 语法默认生效。
- **社区反应**: 讨论集中在安全性权衡——更宽的 grammar 是否会引入不可控的副作用。

### 🟠 #5587 — 死代码清理 Phase 2-4：75 个测试标记 + 242 个过期 allow
- **作者**: Hmbown | **评论**: 9 | [链接](https://github.com/Hmbown/Codewhale/issues/5587)
- **重要性**: 中。Phase 1 已在 `e5ca0aa86` 完成（移除 8 个已验证死代码项），本次继续清理 379 处 `allow(dead_code)` 中的剩余部分。
- **社区反应**: 技术型开发者关注度高，被视为降低维护成本的关键行动。

### 🟡 #6187 — MCP 连接监管缺失：死服务器保持"ready"直到调用失败（已关闭）
- **作者**: Hmbown | **评论**: 5 | [链接](https://github.com/Hmbown/Codewhale/issues/6187)
- **重要性**: 中高。已确认问题：MCP 服务器在会话中死亡后仍显示"connected"，直到下一次工具调用才报 EOF，无自动重连、无 `list_changed` 通知。
- **社区反应**: 用户报告"没有东西支撑服务器保持连接"，已关闭（可能已有方案）。

### 🟡 #6142 — 整合两套 MCP 客户栈（tui/src/mcp vs crates/mcp）
- **作者**: Hmbown | **评论**: 5 | [链接](https://github.com/Hmbown/Codewhale/issues/6142)
- **重要性**: 中高。0.9.14 重构 backlog 项目：`tui/src/mcp/`（~13.2k 行）与 `crates/mcp`（~4.5k 行）功能重叠但分属 app-server 和 engine 两个消费者。
- **社区反应**: 技术讨论热烈，被视为降低长期维护复杂度的关键一步。

### 🟡 #6087 — TUI 减负 Round 2：/settings 71 行 → 分组重构（已关闭）
- **作者**: Hmbown | **评论**: 5 | [链接](https://github.com/Hmbown/Codewhale/issues/6087)
- **重要性**: 中。创始人要求"de. clutter. it's so busy."，Round 1 已在 0.9.13 落地，Round 2 目标是将 71 行的 `/settings` 扁平列表按区域分组。
- **社区反应**: UX 改善类，社区普遍支持。

### 🟡 #5915 — Fleet 模型：provider → model → shortlist → role
- **作者**: Hmbown | **评论**: 4 | [链接](https://github.com/Hmbown/Codewhale/issues/5915)
- **重要性**: 中高。创始人 9 月 6 日方向：需要支持从 provider 筛选 model shortlist，作为 fleet 模型供 operator 选择并分配角色。
- **社区反应**: 功能需求明确，等待实现排期。

### 🟡 #6086 — Session Scratchpad + 三存储统一寻址
- **作者**: Hmbown | **评论**: 4 | [链接](https://github.com/Hmbown/Codewhale/issues/6086)
- **重要性**: 中。当前 scratchpad 不存在（`BASE_PROMPT` 完全未提及），目标是统一 workshop outputs / scratchpad files / Agent Mail 的寻址方案。
- **社区反应**: 架构讨论中，属于 IDE program 的基础能力。

### 🟡 #6050 — 可插拔 Agent Memory：通用后端接缝
- **作者**: idling11 | **评论**: 4 | [链接](https://github.com/Hmbown/Codewhale/issues/6050)
- **重要性**: 中高。当前 `MemoryBackend` 只有 `Native`/`Off` 变体，缺少 `Custom`/`External`/`MCP` 接入能力。社区希望引入 mem0 等第三方后端。
- **社区反应**: 社区成员主动提交方案，讨论集中在接口抽象层次。

---

## 4. 重要 PR 进展（精选 10 条）

| PR | 标题 | 状态 | 要点 |
|---|---|---|---|
| [#6333](https://github.com/Hmbown/Codewhale/pull/6333) | Safety hardening: unsafe docs, async I/O, recursion and read budgets | ✅ CLOSED | 覆盖四个安全领域：所有未记录的 `unsafe` 块补 SAFETY 契约；异步代码中的文件调用迁移至 `tokio::fs`；递归 value walker 加预算；读取预算限制。 |
| [#6222](https://github.com/Hmbown/Codewhale/pull/6222) | TUI redesign: Shoreline, one palette across both clients | ✅ CLOSED | 将 TUI 重新着色为 GPUI 客户端配色，向终端 agent 市场共识规范靠拢。主视觉项未完成，但为本地优先推送。 |
| [#6134](https://github.com/Hmbown/Codewhale/pull/6134) | Professionalize Computer Use + 官方下载页 | ✅ CLOSED | Computer Use 0.3.0 将本地操作路由到注册的独立 helper，helper 无法启动时输入失败关闭。helper 暴露原生权限设置、后台练习检查、人工暂停/停止。 |
| [#6055](https://github.com/Hmbown/Codewhale/pull/6055) | Rate-limit-adaptive launch scheduling | ✅ CLOSED | 解决子 agent 针对同一 provider 并行发起导致的持续 429 问题：将固定容量 `Semaphore` 改为可自适应速率限制的启动调度。 |
| [#6233](https://github.com/Hmbown/Codewhale/pull/6233) | Tell the user the resume route that actually works | ✅ CLOSED | 修复会话切换拒绝提示指向不可行操作的问题（#6225），给出真正可用的 resume 路径。 |
| [#6321](https://github.com/Hmbown/Codewhale/pull/6321) | Record the mode each turn ran in on the turn | ✅ CLOSED | 修复 turn 中途切换模式后，已完成 turn 被错误归因的问题——现在每次 turn 记录实际运行模式。 |
| [#6336](https://github.com/Hmbown/Codewhale/pull/6336) | /config theme editor no longer exits on an arrow key | ✅ CLOSED | 主题编辑器每次方向键预览发射 `ConfigUpdated { persist: false }`，导致 modal 被弹出重建、丢失编辑状态。已修复。 |
| [#6335](https://github.com/Hmbown/Codewhale/pull/6335) | Drop retired token_budget field from SUBAGENTS.md | ✅ CLOSED | 清理 `docs/SUBAGENTS.md` 中 6 处已废弃的 `token_budget` 字段文档（修复 #6316）。 |
| [#5752](https://github.com/Hmbown/Codewhale/pull/5752) | Cloud facts channel: signed, versioned, cached (slice 1) | ✅ CLOSED | 基于 Supabase 的云事实通道：签名 + 版本化 + 缓存 + 安全降级，由网站 `/api/facts/v1/<channel>` 提供，默认关闭。 |
| [#6340](https://github.com/Hmbown/Codewhale/pull/6340) | Bump windows-core 0.62.2 → 0.100.0 | ✅ CLOSED | Dependabot 自动依赖升级。 |

---

## 5. 功能需求趋势

从本周 Issue 分布来看，社区关注点集中在以下方向：

1. **可观测性与诊断**（最热）：token 用量逐组件拆解（#6011）、Sub-agent 指标持久化（#6315）、工具调用错误模式分析、缓存命中率——用户和企业场景都需要精细化成本控制。
2. **Agent / Fleet 编排**：Fleet 模型 shortlist 与角色分配（#5915）、子 agent 启动速率自适应（#6055 PR 已落地）、可插拔 memory 后端（#6050）——反映用户从单 agent 向多 agent 协作迁移的趋势。
3. **MCP 生态整合**：两套客户栈统一（#6142）、连接监管与自动重连（#6187）——MCP 已成为核心能力，稳定性和维护性成为瓶颈。
4. **IDE / ACP 集成**：`serve --acp` 配置失效修复（#6310）、ACP 会话运行在完整 thread/turn runtime（#5835）——编辑器集成（Zed、VS Code、Neovim）是明确战略方向。
5. **性能与稳定性**：引擎静默冻结（#6184）、运行时性能门禁缺失（#6193）、死代码清理（#5587）——稳定性仍是生产使用的最大障碍。
6. **SSH 远程工作空间**（#6158）：社区请求原生 SSH 支持，创始人回应"应该成为基础能力而非 workaround"。

---

## 6. 开发者关注点

- **痛点**: 引擎静默冻结（#6184）是当前最严重的可用性缺陷——没有崩溃、没有日志，用户甚至不知道任务已停止。这类"无信号失败"在长时自主运行场景下尤其致命。
- **高频需求**: 可插拔 memory 后端（#6050）和 Fleet 模型管理（#5915）反复被提及，说明社区期望从"单次对话工具"向"持久化 agent 平台"演进。
- **架构债务**: MCP 双栈（#6142）、配置双层权威（#6143）、死代码（#5587）等重构类 Issue 均已进入密集讨论，反映维护者正在系统性清理技术债，但进度偏慢——部分 Issue 已挂起 2-4 周。
- **文档与 UX**: 多处文档过期（`SUBAGENTS.md` 的 `token_budget`、`RUNTIME_API.md` 的 ACP 章节）、TUI 过于拥挤（#6087）——细节体验影响新用户 onboarding。
- **依赖健康**: 本周大量 Dependabot PR（windows-core 大版本跳变、clap/jsonschema/docker-action 等），说明项目依赖面较广，需持续关注兼容性。

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

# ComfyUI 社区动态日报 · 2026-09-19

数据来源：github.com/comfyanonymous/ComfyUI

---

## 一、今日速览

1. **`comfy-aimdo` 0.5.x 动态显存机制成为当日最大风险点**：从 Windows 内核 BSOD、AMD 输出损坏到内存编译失败，多条高危 Issue 均指向 v0.35.0 起引入的 aimdo 动态 VRAM 加载。
2. **MiniMax H3 生态持续发酵**：围绕 H3 的 Bug（提示词失效、唇形同步失效、VAE 编码异常）与增强 PR（Keyless 支持、INT8 优化、稀疏注意力）密集出现。
3. **Qwen-Image 2.1 支持进入 PR 阶段**：社区 day0 需求与 kijai 的实现 PR 同步落地，新模型适配仍是社区核心驱动力。

---

## 二、版本发布

过去 24 小时无新 Release。不过前端包 `comfyui-frontend-package` 已升级至 **1.53.6**（PR #16386，已合并），嵌入式文档升级至 **v0.5.12**（PR #16396）。

---

## 三、社区热点 Issues（Top 10）

### 1. 🔴 #16246 BSOD 内核崩溃（最高优先级）
`dxgmms2.sys` 视频内存管理器 use-after-free，6GB RTX 3050 用户一天内 4 次蓝屏，时间点与 v0.35.0 / comfy-aimdo 0.5.3 高度吻合。
7 评论 / 👍2 — **当日最严重的稳定性事故**，已从性能问题升级为系统级崩溃。
https://github.com/Comfy-Org/ComfyUI/issues/16246

### 2. 🔴 #16337 DynamicVRAM 输出损坏（AMD RX 9070 XT）
gfx1201 上生成结果出现噪点/损坏图像，直接指向 comfy-aimdo 0.5.3 的动态显存路径。
与 #16246 同源，说明 aimdo 问题**跨 NVIDIA / AMD 两端**。
https://github.com/Comfy-Org/ComfyUI/issues/16337

### 3. 🔴 #16342 H3 内存编译错误（RTX 5090）
MiniMax H3 标准文生视频图在 `SamplerCustomAdvanced` 报 `aimdo memory compile error: could not start recording`，加 `--disable-comfy-compiler` 可绕过。
说明编译器与 aimdo 内存分配器交互存在缺陷，**旗舰卡也无法幸免**。
https://github.com/Comfy-Org/ComfyUI/issues/16342

### 4. 🟠 #16365 YuE2 文本编码器回退 CPU（GTX 1650）
报错 `Expected a cuda device, but got: cpu`，👍3 为该批 Issue 中最高，反映**低显存老卡用户基数大**。
https://github.com/Comfy-Org/ComfyUI/issues/16365

### 5. 🟠 #15001 ROCm gfx1201 模型加载严重劣化
R9700 上 LTX 2.3 工作流从约 300s 暴增至约 4400s（**近 15 倍**），长期 Stale 但今日仍有更新，AMD 性能回归问题持续未解。
https://github.com/Comfy-Org/ComfyUI/issues/15001

### 6. 🟠 #15084 int8_convrot 扩散模型输出黑图（ROCm）
gfx1201 上扩散模型产生 NaN/黑图，而文本编码器正常，指向**量化路径在 ROCm 上的精度缺陷**。
https://github.com/Comfy-Org/ComfyUI/issues/15084

### 7. 🟠 #15805 MiniMax H3 提示词完全失效
相同 seed + 不同 prompt 产生**逐像素相同**的视频，属于条件控制层面的严重逻辑 Bug，影响 H3 核心可用性。
https://github.com/Comfy-Org/ComfyUI/issues/15805

### 8. 🟡 #16387 MiniMax H3 数字人唇形同步失效
v0.35 及以后版本无法使用 H3 数字人 MV 的 lip-sync 功能，属**功能性回归**。
https://github.com/Comfy-Org/ComfyUI/issues/16387

### 9. 🟡 #16398 请求支持 Qwen Image 2.1 day0
社区在模型尚未开源时即要求 day0 适配，并附上 diffusers 参考实现。👍1，与 PR #16400 形成需求—实现闭环。
https://github.com/Comfy-Org/ComfyUI/issues/16398

### 10. 🟡 #16403 VAEDecodeAudio 报 Half / BFloat16 不匹配（GTX 1080 Pascal）
老架构无 BF16 支持导致音频解码失败，再次凸显**老硬件兼容性**这一长期议题。
https://github.com/Comfy-Org/ComfyUI/issues/16403

> 其他值得留意：#16073 App 模式 UI Bug、#16390 H3 VAE 在 XPU 上的编码问题、#16399 请求支持 qwen3vl_32b 生成 H3 提示、#16407 If/Else 节点空路径未阻断。

---

## 四、重要 PR 进展（Top 10）

### 1. #16400 Qwen-Image 2.1 支持（CORE-423）— kijai
单流 DiT + RGBA VAE + Qwen3-VL-8B 文本编码器，含块因果注意力与 prefix cache 优化。**当日最重磅的新模型适配**。
https://github.com/Comfy-Org/ComfyUI/pull/16400

### 2. #16333 Aimdo 0.5.5 + 自动检测启用 `--fast-disk`（CORE-440）— 已合并
新增 Windows 快速磁盘检测的 C 实现，并在内存编译器分配算法中节省虚拟地址配额。**直接回应动态显存系列问题**。
https://github.com/Comfy-Org/ComfyUI/pull/16333

### 3. #16174 修复动态 VBAR 尺寸计算（Windows ROCm）
按计算精度权重跨度而非 `model_size()*10` 分配 VBAR，修复 `--enable-dynamic-vram` 因 GPU 虚拟地址耗尽而崩溃。
https://github.com/Comfy-Org/ComfyUI/pull/16174

### 4. #15928 [ROCm] 集成 Comfy Kitchen HIP 注意力与 INT8 融合
引入互斥的 `--use-kitchen-bf16-attention` / `--use-kitchen-int8-attention` 选项及 Z-Image Turbo INT8 融合，**AMD 性能优化的关键一步**。
https://github.com/Comfy-Org/ComfyUI/pull/15928

### 5. #16405 修复 ace step VAE 在非 BF16 GPU 上解码崩溃 — 已合并（comfyanonymous 亲自提交）
与 Issue #16403 同类问题，官方快速响应老卡兼容。
https://github.com/Comfy-Org/ComfyUI/pull/16405

### 6. #16378 增大 MiniMax H3 稀疏注意力分块（4096 → 24576 tokens）— 已合并
减少重复投影开销，提升 H3 长序列推理效率。
https://github.com/Comfy-Org/ComfyUI/pull/16378

### 7. #16404 避免 H3 INT8 QKV 在 VBAR 回退时重复转换
仅在已验证的量化模式下优化，保留原有投影路径，属稳健的性能优化。
https://github.com/Comfy-Org/ComfyUI/pull/16404

### 8. #16401 / #16402 MiniMax H3 Keyless 支持（稀疏注意力 + LoRA 安全加载）
`h3_keyless_core50_v1` 以 `qv_proj` 取代打包 `qkv_proj`；配套 PR 对通用 LoRA 加载 fail-closed，防止权重错配导致静默错误。
https://github.com/Comfy-Org/ComfyUI/pull/16401 · https://github.com/Comfy-Org/ComfyUI/pull/16402

### 9. #15998 在 Apple Silicon (MPS) 上尊重 `--lowvram` / `--novram`
修复 MPS 下 `vram_state` 被无条件覆盖为 `SHARED` 的问题，改善 16–36GB MacBook 跑大模型的体验。
https://github.com/Comfy-Org/ComfyUI/pull/15998

### 10. #16358 修复 `--enable-assets` 下 SQLite 并发写失败
将单次大事务拆解，避免首次扫描时资产静默丢失（提示成功但无记录）。**数据可靠性修复**。
https://github.com/Comfy-Org/ComfyUI/pull/16358

> 其他：前端包升级 #16386、嵌入式文档 v0.5.12 #16396、OpenAI GPT Image 2 透明背景 #16366、伙伴节点 Idempotency-Key #16220、DynamicCombo 报错改进 #16397、WanAnimateToVideo 掩码行修正 #16406。

---

## 五、功能需求趋势

| 方向 | 代表 Issue / PR | 说明 |
|---|---|---|
| **新模型 day0 适配** | #16398 / #16400 (Qwen-Image 2.1)、#16399 | 社区对前沿模型"开源即支持"期望值持续走高 |
| **动态显存 / 内存管理** | #16246、#16337、#16342、#16333 | aimdo 是当前最活跃也最不稳定的子系统 |
| **跨平台后端支持** | #15001、#15084、#16390 (ROCm/XPU)、#15998 (MPS) | AMD / Intel / Apple 用户对等支持诉求强烈 |
| **量化（INT8）** | #15084、#15928、#16404 | 量化精度与性能在异构硬件上仍是难点 |
| **音视频生成** | #16392、#16365 (YuE2)、#15805、#16387 (H3) | 音频同步、唇形同步等时序一致性问题集中 |
| **UI / 前端体验** | #16073 (App 模式)、#16386 (前端升级)、#16407 | App 模式与节点逻辑的健壮性 |
| **硬件兼容性** | #16403、#16405 (Pascal 老卡) | 非 BF16 老卡仍有稳定用户群 |

---

## 六、开发者关注点

1. **aimdo 动态显存是当前头号痛点**：BSOD、输出损坏、内存编译失败三类症状并存，且横跨 NVIDIA 与 AMD。0.5.5 的 fast-disk 自动检测与 VBAR 修复正在推进，但**根因修复尚未闭环**。
2. **老硬件与异构后端兼容**：GTX 1080 / 1650（无 BF16）、RX 9070 XT / R9700（gfx1201）、Intel XPU、Apple MPS 均有独立问题。开发者呼吁显存策略（`--lowvram`/`--novram`/`--fast-disk`）在各后端**行为一致**。
3. **条件控制可靠性**：H3 提示词失效（#15805）这类"静默错误"比崩溃更危险，反映测试覆盖与回归验证存在缺口。
4. **性能回归需警惕**：ROCm 上 15 倍的加载劣化（#15001）长期未解，用户对 AMD 平台信心受影响。
5. **新模型适配节奏加快**：Qwen-Image 2.1、MiniMax H3 系列（含 Keyless）密集涌入，社区希望核心团队与 kijai 等贡献者保持快速跟进。

---

*报告基于 2026-09-19 抓取的 GitHub 公开数据生成，Issue/PR 状态可能随后续更新变化。*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>



# 2026-09-19 Ollama 社区动态日报

---

### 1. 今日速览

今天 Ollama 社区的核心动态围绕 **工具调用（Tool Calling）解析与兼容性问题**、**CLI 内置 Agent 移除后的社区反馈**，以及 **多后端（ROCm, CUDA, Vulkan）的硬件稳定性修复** 展开。社区高度关注 Qwen3 系列模型的工具调用缺陷及最新的解析修复 PR，同时开发者对移除 CLI Agent 带来的 workflow 冲突表达了强烈诉求。

---

### 2. 版本发布

*   **无**：过去 24 小时内无新版本发布（Ollama Release）。

---

### 3. 社区热点 Issues（Top 10）

精选过去 24 小时内最受关注、互动量最高或技术影响面最广的 10 个 Issue：

1.  **[#17778] Qwen 3.8 报错：聊天流式传输中无用户查询 (500 错误)**
    *   **作者**: sammyvoncheese | **互动**: 32条评论, 25 👍
    *   **摘要**: 使用 Ollama Chat API 进行大上下文（200k）工具循环调用时，Qwen 3.8 模型在流式传输中频繁抛出 `ResponseError: no user query found in messages`。这是一个影响大上下文工具使用的严重 Bug。
    *   **链接**: [ollama/ollama Issue #17778](https://github.com/ollama/ollama/issues/17778)

2.  **[#18530] qwen3-coder: 模型在推理后静默丢失工具调用（解析器缺少 `<tool_call>` 开启标签）**
    *   **作者**: moodboom | **互动**: 0 👍 (但关联了紧急修复 PR #18532)
    *   **摘要**: 在使用 `qwen3-coder:30b` 时，如果模型在工具调用前先写了一句自然语言推理，且输出中省略了 `<tool_call>` 开启标签，Ollama 解析器会只把函数 XML 当作普通内容，导致工具调用静默丢失。
    *   **链接**: [ollama/ollama Issue #18530](https://github.com/ollama/ollama/issues/18530)

3

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

# llama.cpp 社区动态日报 · 2026-09-19

## 1. 今日速览

过去 24 小时内，llama.cpp 社区围绕**多后端加速**和**大模型新架构适配**两条主线持续迭代：Hexagon 后端迎来密集更新（IM2COL、HMX Flash-Attention、BF16 转换等多项能力落地），同时 OpenCL、Vulkan、Metal、SYCL 各后端均有针对性优化。Issue 侧则集中暴露了 SYCL 多卡稳定性、Qwen4exp/DeepSeek-V4 新架构在多后端的求值异常，以及大模型转换工具的内存瓶颈。

---

## 2. 版本发布

今日共发布 **11 个构建版本**（b11033–b11044），全部为滚动开发版，无正式版本号变更。主要更新方向：

| 构建号 | 核心内容 |
|---|---|
| **b11044** | Hexagon IM2COL 全面升级：支持 1D/填充操作、扩展 patch-embed 快速路径、新增 blocked-staging DMA 内核 |
| **b11043** | Hexagon HMX Flash-Attention 支持非 64 倍数 head_dim（如 SigLIP 的 72），通过补零填充实现 |
| **b11042** | OpenCL 新增 Q6_K 二值化 GEMM 内核（`kernel_gemm_noshuffle_q6_k_f32_32b_trans_ila_a8_bin`） |
| **b11040** | ggml 核心层增加分配失败检查，防止内存不足时崩溃 |
| **b11039** | Model-Saver 支持写入 SWA（Sliding Window Attention）模式，15 种新增架构可往返转换 |
| **b11037** | ggml-webgpu 修复 GET_ROWS 操作的 supports_op 条件判断 |
| **b11036** | ggml 处理图缓冲区预留失败（graph buffer reservation failure），避免静默降级或崩溃 |
| **b11035** | Vulkan 新增 IQ3_S MMQ 矩阵乘法内核，扩展低位量化支持 |
| **b11034** | 词表层新增 ufakzeka 预分词器（pre-tokenizer） |
| **b11033** | 修复 `GGML_CPU=OFF` + `GGML_CUDA=ON` 组合下的 CMake 构建失败 |

> 值得注意：**Hexagon（高通 NPU）成为近期的重点优化目标**，连续多个构建都针对该后端，反映出移动端/边缘端推理的优先级在提升。

---

## 3. 社区热点 Issues（TOP 10）

### ① [#27198](https://github.com/ggml-org/llama.cpp/issues/27198) — SYCL 双 Arc Pro B70 `--split-mode tensor` 崩溃（30 评论）
**重要性**：SYCL 多卡张量切分在 `dev2dev_memcpy` 阶段触发 DEVICE_LOST，但 P2P 直接传输正常工作。这是当前评论数最高的未关闭 Issue，说明 SYCL 多卡路径仍不成熟，影响 Intel 双卡用户的核心使用场景。
**社区反应**：持续追踪 1 个月以上，作者提供了详细的环境复现信息，但尚未有明确修复方案。

### ② [#25664](https://github.com/ggml-org/llama.cpp/issues/25664) — Vulkan 在 Linux 7.x 内核（RADV Strix Halo）上 DeviceLost（24 评论）
**重要性**：涉及 AMD Strix Halo（RDNA 3.5）平台，在内核 7.x 下持续出错。大内存 APU 用户（128GB 统一内存）是多模态大模型的重要目标群体。
**社区反应**：获 5 个点赞，被标记为 stale 但仍活跃讨论，说明问题尚未解决且有长期影响。

### ③ [#24055](https://github.com/ggml-org/llama.cpp/issues/24055) — 混合/循环模型上下文检查点总是失效（19 评论）
**重要性**：影响具有循环结构的新一代模型（如 Mamba 混合架构），checkpoint 机制完全不可用，涉及核心推理能力。
**社区反应**：从 6 月持续至今，已被标记 stale，4 个点赞表明用户有真实需求但进展缓慢。

### ④ [#28860](https://github.com/ggml-org/llama.cpp/issues/28860) — SYCL ngram-mod 开启时要求 2GB+ 暂存空间（15 评论）
**重要性**：暴露 SYCL 后端内存规划策略的缺陷，正常功能被极端内存需求阻塞。
**社区反应**：近期活跃，用户提供了详细的量化配置和硬件信息。

### ⑤ [#27330](https://github.com/ggml-org/llama.cpp/issues/27330) — RTX 5090 Laptop（sm_120）CUDA graphs 挂起 GPU 通道（8 评论，6 👍）
**重要性**：影响新一代 NVIDIA Blackwell 移动端旗舰 GPU，需要 `GGML_CUDA_DISABLE_GRAPHS=1` 才能规避。这是高端笔记本 GPU 用户的核心痛点。
**社区反应**：点赞数较高（6 个），说明影响范围较广。

### ⑥ [#27910](https://github.com/ggml-org/llama.cpp/issues/27910) — RTX 5090 运行 Qwen3.8-27B Q6_K 导致显示器黑屏和 GSP 重置（7 评论）
**重要性**：与 #27330 相关联的另一个 RTX 5090 严重问题，涉及整机级故障（需要重启），对用户体验影响极大。
**社区反应**：有 Codex 和 DeepSeek Harness 场景的复现，说明影响面超出单一工具。

### ⑦ [#28211](https://github.com/ggml-org/llama.cpp/issues/28211) — HIP/ROCm gfx1151 长提示词触发 logits 错误（8 评论）
**重要性**：AMD Strix Halo APU 的 HIP 路径在提示词超过 `n_ubatch` 时产生错误结果而非崩溃，属于隐蔽的正确性问题。
**社区反应**：用户提供详尽的数值对比，属于高质量 bug 报告。

### ⑧ [#29028](https://github.com/ggml-org/llama.cpp/issues/29028) — qwen4exp / deepseek-v4 在 Vulkan（RADV, gfx1151）首次解码即中止（4 评论）
**重要性**：新架构模型在 Vulkan 后端完全不可用，直接影响 AMD APU/GPU 用户使用最新 Qwen/DeepSeek 模型。
**社区反应**：提供 Nix 配置和具体版本号，可复现性高。

### ⑨ [#29078](https://github.com/ggml-org/llama.cpp/issues/29078) — 大模型转换工具需 2 倍磁盘或全量 RAM（3 评论）
**重要性**：`convert_hf_to_gguf.py` 处理 79 GiB 级别的模型时要么要求 ~85GB RAM 要么 ~170GB 磁盘，超出大多数个人开发者设备能力。**直接指向流式双通道转换**的实际需求。
**社区反应**：新提出但问题清晰，涉及大规模模型转换的底层架构改进。

### ⑩ [#29063](https://github.com/ggml-org/llama.cpp/issues/29063) — SYCL VRAM 使用量从 b10680 起增加（2 评论）
**重要性**：在 B580 双卡 24GB VRAM 环境下，Qwen3.8-27B-Q4_K_M 的内存占用回归，可能导致内存不足崩溃。是近期构建质量的重要信号。
**社区反应**：新提出，有 1 个点赞，值得跟踪。

---

## 4. 重要 PR 进展（TOP 10）

### ① [#26501](https://github.com/ggml-org/llama.cpp/pull/26501) — Hexagon 多 NPU 设备支持 + 全异步后端
**功能**：大规模重构 Hexagon 后端，支持多 NPU 设备（IQ9/IQ10），实现异步图计算、异步事件、跨设备栅栏等。这是 Hexagon 从"能用"到"好用"的关键一步。
**状态**：CLOSED 且带 merge ready 标签，已合入。

### ② [#27952](https://github.com/ggml-org/llama.cpp/pull/27952) — Vulkan int8 coopmat1 矩阵乘法（RDNA3/RDNA4）
**功能**：基于 `coopmat1` 的 int8 MMQ shader，支持 12 种量化格式，Strix Halo 上 prompt 处理性能大幅提升。**对 AMD 平台意义重大**。
**状态**：OPEN，正在审查。

### ③ [#28243](https://github.com/ggml-org/llama.cpp/pull/28243) — Qwen3.8-Flash-Next MTP 支持
**功能**：为 Qwen3.8-Flash-Next 启用 1.3–2x 加速的 MTP（多令牌预测），复用嵌入权重复用节省显存和内存。
**状态**：OPEN，涉及多后端协同，关联多个 Issue。

### ④ [#27861](https://github.com/ggml-org/llama.cpp/pull/27861) — GPU 端 MoE 专家权重 LRU 缓存
**功能**：为 host-offloaded 的 MoE 专家权重引入 GPU 驻留 LRU 缓存，解决解码阶段受限于主机 RAM 带宽的问题，针对大 MoE 模型推理性能。
**状态**：OPEN。

### ⑤ [#29094](https://github.com/ggml-org/llama.cpp/pull/29094) — Metal FWHT 支持 F16 输入
**功能**：Metal 的 FWHT（快速 Walsh-Hadamard 变换）内核新增 F16 源类型支持，避免额外转换。
**状态**：OPEN，带 merge ready 标签，由同作者提交（#29100 的 CUDA 版为姊妹 PR）。

### ⑥ [#28634](https://github.com/ggml-org/llama.cpp/pull/28634) — CUDA 默认启用 `GGML_CUDA_FA_ALL_QUANTS`
**功能**：消除非标准 KV 量化时的静默性能回退（RTX 3090 上 prefill 从 1147 t/s 降至 34 t/s）。
**状态**：CLOSED，已合入。

### ⑦ [#28389](https://github.com/ggml-org/llama.cpp/pull/28389) — CUDA 修复 CUB argsort 原地键损坏
**功能**：修复 CUB 基数排序单次 API 的别名问题导致的序列损坏，影响 sm_50 + CCCL 2.x。
**状态**：OPEN，带 merge ready。

### ⑧ [#29102](https://github.com/ggml-org/llama.cpp/pull/29102) — 词表解析器匹配最左最长添加 token
**功能**：修正 llama.cpp 与 HF transformers 在 added tokens 解析上的差异，影响特定模型（如 ELMOD）的 token 切分正确性。
**状态**：OPEN，同日新提交。

### ⑨ [#28536](https://github.com/ggml-org/llama.cpp/pull/28536) — CUDA Flash-Attention 共享内存 swizzle 重构
**功能**：进一步优化 FA 的共享内存布局，根据不同硬件细化 swizzle 策略。
**状态**：OPEN（WIP），作者在多种硬件上进行粒度级性能验证。

### ⑩ [#24364](https://github.com/ggml-org/llama.cpp/pull/24364) — Blackwell NVFP4 W4A8 路径强制支持
**功能**：为 Blackwell 架构上的 NVFP4_W4A16 层添加 W4A8 路径支持，绕过原生 W4A4 路径限制。
**状态**：OPEN，跨区域（CUDA/转换/python/mtmd）变更，审查周期长。

---

## 5. 功能需求趋势

从近期 Issues 中可提炼出以下社区重点关注方向：

### 🔥 新模型架构适配（最高频）
- **Qwen3.8-Flash-Next / qwen4exp / DeepSeek-V4** 在多后端均出现求值问题（Vulkan 崩溃、Metal 静默空输出、CUDA 解码线性减速），是当前最活跃的新模型适配话题。
- 关联 Issue: [#29028](https://github.com/ggml-org/llama.cpp/issues/29028)、[#28734](https://github.com/ggml-org/llama.cpp/issues/28734)、[#28805](https://github.com/ggml-org/llama.cpp/issues/28805)、[#26369](https://github.com/ggml-org/llama.cpp/issues/26369)

### ⚡ 多卡/多设备推理稳定性
- SYCL 双卡崩溃、HIP 多 GPU 正确性、CUDA 图挂起等，指向多卡路径的整体健壮性不足。
- 关联 Issue: [#27198](https://github.com/ggml-org/llama.cpp/issues/27198)、[#24657](https://github.com/ggml-org/llama.cpp/issues/24657)、[#26409](https://github.com/ggml-org/llama.cpp/issues/26409)

### 📉 低位量化扩展
- 社区持续推动 IQ3、MXFP4、NVFP4、Prism PQ2_0/PTQ1_0 等更低位深量化格式的支持。
- 关联 Issue: [#29058](https://github.com/ggml-org/llama.cpp/issues/29058)、PR [#24364](https://github.com/ggml-org/llama.cpp/pull/24364)

### 🖥️ 大规模模型转换工具改进
- 转换流程需全量 RAM 或 2 倍磁盘空间的问题直接限制了个人用户处理大模型的能力，流式转换呼声强烈。
- 关联 Issue: [#29078](https://github.com/ggml-org/llama.cpp/issues/29078)

### 🎯 推理性能优化
- 涉及工具门控、单次选择等推理效率改进需求，以及 SYCL 性能优化请求。
- 关联 Issue: [#29022](https://github.com/ggml-org/llama.cpp/issues/29022)、[#28990](https://github.com/ggml-org/llama.cpp/issues/28990)

---

## 6. 开发者关注点

### 🔴 高频痛点

**1. 多 GPU/多加速卡路径的可靠性短板**
SYCL、HIP、CUDA 各异构后端均暴露出多卡场景下"能编译但跑不稳"的问题。开发者期望至少保障主流双卡组合（如双 B580、双 V100、多 RTX 3090）的基础可用性。目前 P2P/张量切分/图同步等底层机制仍需系统性加固。

**2. 新模型适配速度滞后**
Qwen4exp/DeepSeek-V4 等前沿模型发布后，在非 CUDA 后端（Vulkan/Metal/HIP）上的支持往往滞后数周，期间大量用户报告崩溃、静默错误和性能退化。社区期望建立更快的多后端适配流程或迭代指引。

**3. 内存与显存的精细化管理**
从 ggml 层分配失败检查（b11040）、图缓冲区预留失败处理（b11036）、到 SYCL VRAM 回归，内存管理正在从"假设成功"转向"显式失败恢复"。这与大模型普遍逼近硬件内存极限的趋势一致。

**4. 大模型转换工具链的规模化瓶颈**
79 GiB 级别模型的转换需要 85–170GB 资源，使多数个人开发者无法自行转换，他们依赖官方或第三方发布 GGUF。转换工具的流式化重构被认为是必要的基础设施投资。

### 🟡 值得关注的工程信号

- **Hexagon 后端加速**：1 个月内相继落地多 NPU、Flash-Attention、IM2COL、BF16 支持，表明高通平台被提升为战略级后端。移动端开发者可关注。
- **WebGPU 后端进入修复期**：b11037 的 GET_ROWS 修复以及此前的若干修补，表明 WebGPU 正从实验向可用过渡。
- **CMake 构建组合健壮性**：`GGML_CPU=OFF` 组合暴露的构建缺陷提示配置矩阵需要更全面的 CI 覆盖，尤其对嵌入式/自定义部署用户有直接影响。

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*