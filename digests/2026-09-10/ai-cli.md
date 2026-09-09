# AI CLI 工具社区动态日报 2026-09-10

> 生成时间: 2026-09-09 22:15 UTC | 覆盖工具: 12 个

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

# AI CLI 开发工具今日动态汇总 (2026-09-10)

以下是主流 AI CLI 工具的社区动态与更新摘要：

### 1. Claude Code (Anthropic)
*   **发布 v2.1.267**: 修复了 v2.1.265 导致的 LLM-gateway 代理回归问题；新增 `maxEffortLevel` 全局配置以限制不同提供商的计算强度；并引入 `--system-prompt-snapshot off` 选项支持动态 prompt。
*   **Windows P0 阻塞问题**: Windows 用户反馈因系统 KB5124008 更新导致 Plan9 挂载完全失效（`invalid argument`），目前建议通过卸载该补丁恢复。
*   **上下文上报错误**: 社区发现 Opus 5 和 Sonnet 5 的实际 1M 上下文窗口被上报为 200k，导致 `/compact` 命令失效及状态栏显示异常。
*   **项目**: [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)

### 2. OpenAI Codex (OpenAI)
*   **发布 v0.154.0-alpha**: 适配了 GPT-6 的 System Prompt；修复了 Bedrock 平台上 DeepSeek 模型 ID 解析错误；并提升了 Azure 和 OpenAI SDK 的兼容性问题。
*   **WSL2 CPU 占用过高**: 大量用户反馈 Codex 在 WSL2 环境下空闲时主线程 CPU 占用率飙升至 215%，导致 TUI 渲染冻结。
*   **本地存储静默膨胀**: 社区报告 Desktop 共享的 Session 存储从几十 GB 激增至 TB 级别，严重占用磁盘空间。
*   **项目**: [github.com/openai/codex](https://github.com/openai/codex)

### 3. Gemini CLI (Google)
*   **发布 v0.61.0-nightly**: 修复了 Windows 环境下 NTFS 路径字符转义问题；加强了沙盒安全性；并优化了 RTL（从右向左）语言的显示逻辑。
*   **Agent 永久挂死**: 社区反馈通用代理（Generalist agent）在执行创建文件夹等简单操作时会无限挂起，通过显式禁止子代理可规避。
*   **AST 感知需求**: 开发者社区提议引入 AST（抽象语法树）工具，以更精确地读取文件边界，减少无效的 Token 浪费。
*   **项目**: [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

### 4. Qwen Code (Alibaba)
*   **发布 v0.23.2**: 改进了 Web Shell 模式的分屏视图导航；修复了守护进程（Daemon）在会话回收时导致 Agent 挂死的问题；并支持通过 SQLite 扩展大会话。
*   **升级导致历史丢失**: 用户反馈从 v0.21 升级到 v0.23 后，VS Code 扩展面板中的对话历史会清空，官方已通过 PR #11495 修复。
*   **Git 兼容性故障**: 守护进程在检测工作区 `.git` 目录为符号链接（symlink）时，会拒绝执行所有 Git 命令。
*   **项目**: [github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)

### 5. Kimi Code CLI (Moonshot AI)
*   **修复重复内容提取 (#1863)**: 优化了 fetch 模块，抓取 GitHub Issue 时会过滤掉评论区与主正文重复的文本，有效避免了无效 Token 浪费。
*   **认证链路故障**: macOS 用户反馈在执行 `/login` 浏览器授权后，CLI 端会返回 HTTP 500 错误，导致 CLI 和 IDE 扩展均无法使用。
*   **RTL 渲染异常**: Windows Terminal 在处理阿拉伯语等 RTL（从右向左）文本时会出现字符顺序反转。
*   **项目**: [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

### 6. ComfyUI (Stability AI)
*   **发布 v0.35.0**: 移除了 Google Veo 2 节点并引入 Veo 3；支持了 Recraft V4 样式；新增了 `--browser-path` 参数支持自定义浏览器启动。
*   **H3 生态震荡**: 新版本发布后大量插件因签名（Signature）变更失效，且量化模型在 Dynamic VRAM 模式下频繁触发 OOM 崩溃。
*   **ROCm 兼容性**: 针对 AMD 平台，用户反馈显存管理与算子（Operators）存在严重问题，频繁触发 HIPBLAS 错误。
*   **项目**: [github.com/comfonymous/ComfyUI](https://github.com/comfonymous/ComfyUI)

### 7. llama.cpp (Hugging Face)
*   **适配 GLM-5.3 Flash**: 引入了 320B 混合模型（MoE）支持，并包含视觉能力。
*   **Vulkan 优化**: 针对 cm2 后端实现了 `stream-k` 算法，将 256 个 K 均匀分配，在 RDNA4 架构上提升了速度约 17%。
*   **显存泄漏**: 使用 DSpark 运行 DeepSeek V4 时，每次 PP+TG 循环显存会增加约 10MB，最终导致 OOM。
*   **项目**: [github.com/ggerganov/llama.cpp](https://github.com/ggerganov/llama.cpp)

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-09-10）

> 数据说明：热门 PR 在当前数据中均为 **OPEN** 状态（未见 merged/draft 标注）；各 PR 评论数未随数据给出（显示 undefined），下文的排序沿用仓库给定的"按评论数"顺序，聚焦热度头部。

---

## 1. 热门 Skills 排行（Top 8 PR）

1. **skill-creator 评估工具链修复（#1298）** — 修复 `run_eval.py` 对所有 skill 描述恒定报 `recall=0%` 的核心缺陷（关联 issue #556，10+ 独立复现），含 Windows 流读取、触发器检测、并行 worker 修复。热点：评估在"对着噪声优化"，直接动摇 skill 描述自优化的可信度。状态：open。 [链接](https://github.com/anthropics/skills/pull/1298)

2. **document-typography 技能（#514）** — 面向 AI 生成文档的排版质检：孤行换行、页尾悬挂标题（widow）、编号错位。针对 Claude 生成文档的普遍痛点——用户极少主动提出排版要求。状态：open。 [链接](https://github.com/anthropics/skills/pull/514)

3. **scnet-hpc 技能（#1615）** — 基于 profile 式 SSH + Slurm 工作流操作 SCNet HPC 集群（分区/内存/模块/加速器指引与作业生成），代表科学计算垂直场景的技能需求。状态：open。 [链接](https://github.com/anthropics/skills/pull/1615)

4. **ODT 技能（#486）** — 新增 OpenDocument(.odt/.ods) 的创建、模板填充、读取及转 HTML，面向开源 / ISO 标准文档格式诉求。状态：open。 [链接](https://github.com/anthropics/skills/pull/486)

5. **pdf 技能大小写路径修复（#538）** — 修正 `SKILL.md` 中 8 处大小写不一致的文件引用（在区分大小写文件系统上导致失效），属文档类技能的可靠性修复。状态：open。 [链接](https://github.com/anthropics/skills/pull/538)

6. **frontend-design 技能改进（#210）** — 提升指令的清晰度、可操作性与内部一致性，确保每条指令可在"单次对话内"真正被执行。状态：open。 [链接](https://github.com/anthropics/skills/pull/210)

7. **元技能：skill-quality-analyzer 与 skill-security-analyzer（#83）** — 分别从结构/文档（20%）、安全等多维度对 Claude Skills 自身做质量与安全评估，呼应生态治理诉求。状态：open。 [链接](https://github.com/anthropics/skills/pull/83)

8. **docx 兼容性修复系列（#1734 / #541）** — 检测"孤儿" docx 批注；修复 OOXML 中 `w:id` 跨书签/批注/修订共享 ID 空间导致的文档损坏。状态：open。 [链接 1](https://github.com/anthropics/skills/pull/1734) · [链接 2](https://github.com/anthropics/skills/pull/541)

---

## 2. 社区需求趋势（来自 Issues）

- **安全与信任边界（最热议题 #492，43 条评论）**：社区技能被分发在 `anthropic/` 命名空间下、冒充官方，构成信任边界滥用——用户可能向"看似官方"的技能授予过高权限。关联：#1175（SharePoint 权限与上下文担忧）、#83（安全分析器）。
- **组织级协作与共享（#228，8 👍）**：期望在 Claude.ai 内实现组织级技能库与直接分享链接，取代手动下载/上传 .skill 的流程。
- **生态工具链可靠性**：#556（7 👍，run_eval.py 触发率恒为 0%）、#1390（mcp-builder 评估对真实服务器打分 0/N）、#1487（claude-api 单次调用注入 ~156k tokens 撑爆上下文）。
- **元技能 / 质量治理方向**：#412 agent-governance、#1385 推理质量门流水线、#1329 compact-memory、#202（skill-creator 应从"文档"改为"可执行技能"）。
- **能力扩展方向**：#16 将 Skills 暴露为 MCP、#29 AWS Bedrock 兼容、#189 消除 document-skills 与 example-skills 重复安装。

**聚类关键词**：① 文档类技能（创建/修复/排版质检）② 生态治理与安全分级 ③ 多代理编排 ④ 平台/基础设施集成（HPC、社交 API、MCP、Bedrock）。

---

## 3. 高潜力待合并 Skills（评论活跃、暂未合并）

1. **#1298 评估修复** — 直击"12+ 人复现"的顶级 bug（#556），作者给出完整修复路径，落地概率高。[链接](https://github.com/anthropics/skills/pull/1298)
2. **#538 / #541 / #539（Lubrsy706 系列）** — 范围清晰的 docx/pdf 精确性修复并已关闭关联 issue，最易合入的一批。[链接](https://github.com/anthropics/skills/pull/538)
3. **#1367 self-audit 技能** — 先机械校验产出文件、再按损害严重度做四维推理审计；作者同步提交治理流水线提案（#1385），方向获社区跟进。[链接](https://github.com/anthropics/skills/pull/1367)
4. **#1628 Hivemind** — 零成本多代理编排：把机械工作委派给跑免费模型的 headless opencode workers，Claude Code 仅做规划/审查/合并，贴合上下文成本痛点。[链接](https://github.com/anthropics/skills/pull/1628)
5. **#1627 buffer-api Agent Skill** — Buffer GraphQL 社交排期，跨 agent（Claude/Cursor/Codex/n8n 等）可移植。[链接](https://github.com/anthropics/skills/pull/1627)
6. **#1602 mcp-builder 稳定性大修** — 串行化、基准指标、编码与脚本稳定性多维修复，典型"会尽快合入的 bug 修复"。[链接](https://github.com/anthropics/skills/pull/1602)
7. **#1724 / #1607 模型版本维护** — 更新默认评估模型为 claude-sonnet-5、标记 4 个退役模型 ID，属跟随官方模型节奏的低风险维护 PR。[链接](https://github.com/anthropics/skills/pull/1724)

---

## 4. Skills 生态洞察（一句话）

**当前社区最集中的诉求是：先让 Skill 生态"可信、可靠、不膨胀"——修复官方评估工具链（skill-creator/mcp-builder）的功能缺陷与 claude-api 的上下文注入，并解决社区技能身处 anthropic 命名空间带来的信任边界安全；在此地基之上，再追求更丰富、可编排、可跨平台移植的文档处理与自动化技能。**

---

# Claude Code 社区动态日报 | 2026-09-10

---

## 1. 今日速览

Claude Code 连续发布 **v2.1.266 → v2.1.267** 两个版本，重点修复了 v2.1.265 引入的 LLM-gateway 代理回归问题，并新增 `maxEffortLevel` 全局/模型级配置与 `--system-prompt-snapshot off` 选项。社区 Issue 热度集中在 **Windows Plan9 挂载失效（KB5124008 更新导致）**、**Cyber Safeguard 误拦截科研计算**、**Opus 5 / Sonnet 5 上下文窗口错误上报 200k** 等核心阻塞性问题，多个长期存在的认证、模型选择、跨设备同步痛点被标记 stale 关闭。

---

## 2. 版本发布

### v2.1.267 (2026-09-09)
| 变更 | 说明 |
|------|------|
| **新增 `maxEffortLevel`** | 顶层或 `modelSettings` 下可配置，限制所有提供商（Bedrock、Vertex、Foundry 含）的最大 effort 等级，用户仍可自行选择更低等级 |
| **新增 `--system-prompt-snapshot off`** | 强制每次请求重新渲染 system prompt，适用于动态 prompt 场景 |
| 详情 | [Release v2.1.267](https://github.com/anthropics/claude-code/releases/tag/v2.1.267) |

### v2.1.266 (2026-09-09)
| 变更 | 说明 |
|------|------|
| **修复 LLM-gateway 回归** | v2.1.265 导致未文档化的 `CLAUDE_CODE_USE_GATEWAY` 单独生效、强制 Cloud-gateway 登录；现恢复需同时设置 `ANTHROPIC_BASE_URL` 与 `ANTHROPIC_AUTH_TOKEN` 才触发 |
| 详情 | [Release v2.1.266](https://github.com/anthropics/claude-code/releases/tag/v2.1.266) |

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 关键点 | 热度/反响 | 重要性 |
|---|-------|--------|-----------|--------|
| 1 | [#92984](https://github.com/anthropics/claude-code/issues/92984) **Windows Plan9 挂载全盘失败** | KB5124008 (26200.9445) 导致 `invalid argument`，卸载补丁即恢复 | 23 条评论、10 👍、**OPEN** | 🔴 **P0 阻塞**：Win 用户 Cowork 完全不可用 |
| 2 | [#83436](https://github.com/anthropics/claude-code/issues/83436) **Cyber Safeguard 误拦截科研计算** | 光谱仪校准等合法科学计算被误判，Opus 5/4.8 均中招 | 12 条评论、CLOSED(stale) | 🟠 **高**：安全策略对合规科研场景误伤严重 |
| 3 | [#81693](https://github.com/anthropics/claude-code/issues/81693) **Opus 5 上下文窗口误报 200k** | 实际 1M 却上报 200k，导致 `/compact` 失效、状态栏饱和 | 6 条评论、CLOSED(stale) | 🟠 **高**：直接影响长上下文工程会话 |
| 4 | [#79810](https://github.com/anthropics/claude-code/issues/79810) **桌面端切换账号后自定义侧边栏组丢失** | 账号切换往返导致用户配置清空 | 5 条评论、4 👍、**OPEN** | 🟡 **中**：多账号开发者高频痛点 |
| 5 | [#84310](https://github.com/anthropics/claude-code/issues/84310) **Sonnet 5 被错误限制 200K** | 订阅用户原生 1M 窗口却按 200K 计费/截断 | 2 条评论、CLOSED(stale) | 🟠 **高**：计费与能力不匹配 |
| 6 | [#74210](https://github.com/anthropics/claude-code/issues/74210) **Remote MCP OAuth 连通但工具获取失败** | 同一服务器静态 token 正常，OAuth 路径仅握手成功 | 2 条评论、CLOSED(stale) | 🟡 **中**：MCP 生态集成阻碍 |
| 7 | [#85157](https://github.com/anthropics/claude-code/issues/85157) **安全过滤误拦合法渗透测试** | SQLi、exploit 等关键词触发 cyber safeguard，实为授权测试 | 1 条评论、CLOSED(stale) | 🟡 **中**：安全研究者/红队工具链受阻 |
| 8 | [#85154](https://github.com/anthropics/claude-code/issues/85154) **npm 全局更新留存残留二进制、无回滚** | 更新后仅剩 stub、无 `bin/claude` 软链，报错不可达 | 1 条评论、CLOSED(stale) | 🟡 **中**：安装/更新链路脆弱 |
| 9 | [#85142](https://github.com/anthropics/claude-code/issues/85142) **后台会话列表切换截断滚动历史** | `←` 切换会话仅保留一页，需 `--fork-session` 恢复 | 1 条评论、CLOSED(stale) | 🟢 **低**：UX 细节但影响长会话复盘 |
| 10 | [#84706](https://github.com/anthropics/claude-code/issues/84706) **印度 INR 账单升级 Max 5x→20x 失败** | 卡片在 USD 创建导致货币不匹配报错 | 1 条评论、2 👍、CLOSED(stale) | 🟡 **中**：国际化计费缺陷 |

> **注**：大量高赞/高评论 Issue 被标记 `stale` 自动关闭，社区对“自动清理机制”不满声浪较大（见 #92984 评论区讨论）。

---

## 4. 重要 PR 进展

**过去 24 小时无新 PR**。建议关注后续针对 #92984（Plan9）、#83436（Safeguard 白名单）、#81693（上下文窗口上报）的修复 PR。

---

## 5. 功能需求趋势（从 50 条 Issue 提炼）

| 趋势方向 | 代表 Issue | 社区呼声 |
|----------|------------|----------|
| **Windows 原生兼容性** | #92984, #85175, #84035 | 极高：Plan9、HCS 服务、Dispatch 启动均受阻 |
| **安全策略精细化/白名单** | #83436, #85777, #85157, #85164 | 高：科研、红队、网安教学频繁误拦 |
| **模型能力元数据准确性** | #81693, #84310, #76237 | 高：上下文窗口、模型列表、订阅权益不一致 |
| **跨设备/多账号会话连续性** | #85150, #79810, #85159 | 中：桌面/移动/Chrome 扩展账号隔离、草稿丢失 |
| **MCP 生态稳定性** | #74210, #85168 | 中：OAuth 推送、工具发现、远程服务器可靠性 |
| **安装/更新链路健壮性** | #85154, #84706 | 中：npm 残留、货币计费、回滚机制缺失 |

---

## 6. 开发者关注点（痛点与高频需求）

1. **Windows 是“二等公民”**  
   - Plan9 挂载、HCS 服务缺失、Dispatch 循环依赖、Chrome 进程自杀……Windows 专项 Issue 占比高且多为 **阻塞性**。

2. **“Cyber Safeguard” 成为生产力杀手**  
   - 合法科研、授权渗透、教学演示均被误拦；缺乏**项目级/会话级白名单**或**可申诉通道**。

3. **模型元数据与计费脱节**  
   - Opus 5 / Sonnet 5 实为 1M 窗口，CLI 却上报 200k → 导致 `/compact` 失效、状态栏误导、实际可用上下文被截断。

4. **账号/会话状态管理碎片化**  
   - 桌面端切号丢配置、Chrome 扩展无登出、Android 切会话丢草稿、跨设备无同步——**多端多账号体验割裂**。

5. **自动 stale 关闭机制引发信任危机**  
   - 多个高赞、有复现、未修复的 Issue 被自动关闭，开发者感到“被忽视”，建议改为 **人工分类 + 标签驱动** 的清理流程。

6. **安装分发链路脆弱**  
   - npm global update 留存 stub、无回滚、错误信息不可达；印度 INR 计费升级失败——**原生安装器/包管理器支持**呼声高。

---

## 📌 给工程团队的建议

| 优先级 | 行动项 |
|--------|--------|
| **P0** | 发布 Windows 热修复或文档规避指引（KB5124008 卸载/WSL 替代方案） |
| **P0** | 修正 Opus 5 / Sonnet 5 `context_window_size` 上报逻辑，同步修复 `/compact` 与状态栏 |
| **P1** | 设计 Cyber Safeguard **项目级豁免清单**（如 `.claude/safeguard-allowlist.json`） |
| **P1** | 重审 stale 关闭策略：引入“社区 👍≥5 或 评论≥10 保护规则” |
| **P2** | 统一多端账号/会话状态模型，提供**草稿持久化**与**配置云同步** MVP |
| **P2** | 修复 npm 更新原子性，提供 `claude-code doctor --repair-install` 自愈命令 |

---

> **数据来源**：`github.com/anthropics/claude-code`（Releases / Issues / PRs，过去 24 h）  
> **生成时间**：2026-09-10 06:00 UTC  
> **下一期预告**：关注 v2.1.268 是否包含 Plan9 修复、Safeguard 白名单 API、上下文窗口元数据修正。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# 🤖 OpenAI Codex 社区动态日报 (GitHub)
**日期：** 2026-09-10
**分析师：** AI 开发工具分析专家

---

### ⚡ 今日速览
今日 Codex 社区呈现出极高的活跃度，主要集中在 **Windows 平台稳定性修复**、**Subagent（子代理）工作流优化** 以及 **本地存储膨胀问题** 的解决。官方团队通过大量的自动化 PR（由 `copyberry-bot` 驱动）快速修复了守护进程的可靠性问题，并加强了 WSL 环境下的沙箱安全加固。

---

### 🚀 版本发布 (Releases)
过去 24 小时内，Codex 发布了多个针对 Rust 核心组件的 Alpha 版本的更新：
- `rust-v0.154.0-alpha.6.1` 至 `alpha.11`。这表明 Codex 的底层引擎正在进行高频的内部迭代，旨在解决底层的性能颈或兼容性问题。

---

### 🔥 社区热点 Issues (Top 10)
1. **Windows 11 频繁卡顿 (#20214)**：用户反馈在 Windows 11 Pro 上即便资源充足，Codex App 仍频繁冻结。评论数高达 111 条，是目前最受关注的性能 Bug。
2. **Computer Use 截图失败 (#25178)**：在 Windows 10 上调用 `SetIsBorderRequired` 时接口不支持（错误 0x80004002），影响了自动化桌面控制功能。
3. **子代理唤醒机制失效 (#15723)**：Codex CLI 的后台子代理在任务完成后，无法自动唤醒主代理，影响了复杂工作流的效率。
4. **轮询导致额度异常消耗 (#35259)**：Codex Desktop 在等待或状态轮询时会反复进入模型，导致约 20% 的 Token 浪费在无效操作上，用户强烈不满。
5. **跨设备同步不对称 (#41470)**：Windows 端创建的新项目无法在 Android 手机同步，且移动端启动的线程会触发信任网关。
6. **本地存储静默膨胀 (#34337)**：CLI 和 Desktop 共享的 Session 存储会从几十 GB 激增至 TB 级别，严重占用磁盘空间。
7. **WSL2 路径转换错误 (#42984)**：当从 Windows 原生模式切换到 WSL2 环境时，由于 `AbsolutePathBuf` 转换问题导致项目创建失败。
8. **VS Code 插件高亮丢失 (#41659)**：最新版 VS Code 插件中，Codex 面板内的代码块失去语法高亮，显示为单色。
9. **60秒阻塞限制争议 (#31935)**：开发者请求移除“禁止进行超过 60 秒阻塞等待”的限制，因为这导致长运行任务必须进行无效的轮询。
10. **配额异常归零 (#44211)**：用户反馈在未运行程序的情况下，配额突然从 94% 掉落至 1%。

---

### 🛠️ 重要 PR 进展 (Top 10)
1. **#44314 恢复守护进程重启的线程**：修复了守护进程重启后，活跃线程能通过快照自动恢复的问题，无需用户重新连接。
2. **#44311 遵循远程控制的 Retry-After 限制**：确保远程控制请求不会因认证变更或重连而绕过服务器的限流策略。
3. **#44307 macOS CLI 候选版**：为 macOS 用户提供了可选的预置版 CLI 候选版本。
4. **#44299 关机时记录线程恢复状态**：在守护进程正常关闭时原子化保存已加载线程，防止数据丢失。
5. **#44290 支持用户请求的任务挂起**：`update_goal` 接口现在支持 `paused` 状态，允许用户手动干预代理任务进度。
6. **#44289 扩展卷权限范围**：修复了卷根目录权限非递归的问题，并正确处理了文件系统的拒绝规则（deny glob）。
7. **#44288 防止命令钩在 stdin 阻塞时死锁**：通过并发写入 stdin 和清理输出，避免了管道缓冲区满时导致的挂起。
8. **#44286 阻止 WSL 逃逸文件沙箱**：加固了安全性，防止 WSL Interop 通过 `wsl.exe` 启动 Linux 沙箱外的 Windows 进程。
9. **#44293 强制 Guardian 分类器预算**：确保异步分类任务在发送前准确计算完整的请求预算（包括检查点和图像）。
10. **#44273 移除过时的远程压缩实现**：清理代码中不再使用的 `/responses/compact` 接口，统一到新的响应 API。

---

### 📈 功能需求趋势
*   **跨平台一致性**：开发者极度关注 Windows、Linux (WSL) 和 Android 之间的体验一致性，尤其是路径处理和同步机制是重灾区。
*   **多代理（Multi-agent）精细化控制**：社区开始转向复杂的多代理协作，但目前对子代理间通信（唤醒、挂起、状态同步）的控制亟待完善。
*   **资源管理优化**：本地 Session 存储的膨胀问题已成为核心痛点，用户迫切需要更高效的存储压缩或自动清理机制。
*   **自动化控制深度**：`Computer Use` 功能备受关注，但开发者对底层 API（如截图、窗口状态获取）的稳定性有更高要求。

---

### 💡 开发者关注点
*   **Windows 用户注意**：近期关注 Windows 11 的卡顿问题及 WSL2 的路径兼容性。
*   **成本控制建议**：在开发复杂 Agent 工作流时，尽量避免频繁的状态轮询，以防造成 Token 额度的巨大浪费。
*   **IDE 集成**：VS Code 插件的渲染 Bug 可能会影响代码阅读，建议关注插件更新。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 (2026-09-10)

## 🚀 今日速览
今日 Gemini CLI 社区主要聚焦于 **Agent 稳定性的修复**、**沙盒安全性加固**以及**交互体验的优化**。开发者们重点解决了非交互模式（Plan Mode）下的挂死问题，并针对 `browser_agent` 在特定环境下的异常行为提交了多个补丁。同时，社区对“AST 感知（AST-aware）”的代码处理表现出浓厚兴趣，旨在降低 Token 消耗并提升代码分析精度。

---

## 📦 版本发布
*   **v0.61.0-nightly.20260909.ged2ac40df**
    *   **发布日期**: 2026-09-09
    *   **核心更新**: 
        *   **路径修复**：缓解了 Windows 环境下 NTFS 8.3 短文件名（SFN）路径的兼容性问题。
        *   **安全性**：在沙盒容器中隔离了设置目录，防止配置交叉。

---

##  🔥 社区热点 Issues (Top 10)

1.  **[22323] Subagent 达到 MAX_TURNS 后错误报告为成功 (P1)**
    *   **摘要**: `codebase_investigator` 在未完成分析即达到轮数限制时，错误报告了 `status: success` 和 `GOAL`，掩盖了真实的中断状态。
    *   **状态**: Open (13条评论)。这严重影响了复杂任务的可靠性评估。
2.  **[21409] Generalist agent 永久挂死 (P1)**
    *   **摘要**: 当 Gemini 委托给通用代理时，执行简单操作（如创建文件夹）会导致无限挂起。用户发现通过显式禁止使用子代理可以规避此问题。
    *   **状态**: Open (8条评论)。
3.  **[19873] 利用模型 Bash 亲和性的零依赖 OS 沙盒 (P2)**
    *   **摘要**: 针对 Gemini 3 模型原生擅长 POSIX 工具（grep, sed, awk）的特性，提出通过零依赖沙盒在不不用户安全的前提下充分释放其模型能力。
    *   **状态**: Open (9条评论)。
4.  **[22745] AST 感知的文件读取、搜索与映射影响评估 (P2)**
    *   **摘要**: 一个 EPIC 任务，探讨引入 AST（抽象语法树）工具以更精确地读取方法边界，减少 Token 噪声和浪费。
    *   **状态**: Open (7条评论)。
5.  **[21968] Gemini 使用自定义 Skills 和子代理的频率不足 (P2)**
    *   **摘要**: 用户反馈 Gemini 在处理相关任务时，往往不会主动调用已定义的技能（如 gradle, git 技能），除非显式指令。
    *   **状态**: Open (6条评论)。
6.  **[26525] 确定性脱敏与减少自动内存日志 (P2/Security)**
    *   **摘要**: 目前 Auto Memory 在将内容发送给后台提取模型后才尝试脱敏，可能存在敏感信息泄露风险。
    *   **状态**: Open (5条评论)。
7.  **[21566] Shell 命令执行后卡在“等待输入”状态 (P1)**
    *   **摘要**: 在执行完无需交互的简单 Shell 命令后，CLI 仍显示活跃并等待用户输入。
    *   **状态**: Open (4条评论)。
8.  **[22232] 增强浏览器 agent 的自动接管与恢复能力 (P3)**
    *   **摘要**: 当遇到锁定的浏览器配置或残留进程时，目前采用的是简单的“快速失败”策略，需要增加自动接管机制。
    *   **状态**: Open (4条评论)。
9.  **[21983] Browser agent 在 Wayland 环境下失败 (P1)**
    *   **摘要**: 报告在 Linux Wayland 环境下，浏览器代理会异常终止并报告虚假的 GOAL。
    *   **状态**: Open (4条评论)。
10. **[22672] Agent 应当避免破坏性行为 (P2)**
    *   **摘要**: 在进行复杂 Git 操作或数据库维护时，模型倾向于使用 `git reset` 或 `--force` 等高风险命令，需要增加安全约束。
    *   **状态**: Open (3条评论)。

---

## 🛠️ 重要 PR 进展 (Top 10)

1.  **[29250] 防止通过构建文件修改和不可信标志进行间接提示注入 (XL)**
    *   **内容**: 在受限工作区模式下增强了边界校验，重构了内部执行路径。
2.  **[29214] 加固沙盒文件系统边界并隔离运行时状态 (L/XL)**
    *   **内容**: 将沙盒运行状态与主机配置目录隔离，统一使用 `realpath` 解决路径检查。
3.  **[29266] 修复复杂度路由覆盖手动选择模型的问题**
    *   **内容**: 解决了当开启复杂性路由时，用户手动指定的模型（如 Pro）被意外降级为 Flash 的 Bug。
4.  **[29265] 防止中断轮次时导致会话上下文污染 (M)**
    *   **内容**: 修复了当 SIGINT 或超时中断代理执行时，会话历史受损导致后续执行失败的问题。
5.  **[29262] 为 Alternate Buffer（备缓冲区）添加动态开关 (XL)**
    *   **内容**: 修复了切换缓冲区时的内存越界崩溃，并确保退出时正确清理 UI 痕迹。
6.  **[29248] 修复确认后的重复历史记录和遥测 (M)**
    *   **内容**: 解决执行 `/resume save` 等确认操作时，若期间有新消息到达会导致记录重复的问题。
7.  **[29067] 移除误导性的安全方案和硬编码凭据 (S)**
    *   **内容**: 修正了 Agent 元数据，使其准确反映本地开发环境下无需身份验证的现状。
8.  **[29089] 在 BaseLlmClient 中传递 abortSignal 到重试机制 (S)**
    *   **内容**: 确保对话压缩、分类器等后台任务能正确响应中断信号。
9.  **[29088] 修复 IDE 伴侣 MCP 流开启时的停止阻塞问题 (M)**
    *   **内容**: 解决了 `stop()` 方法因等待未关闭的 MCP 连接而导致程序无法退出的。
10. **[29087] 防止插件安装的竞态条件 (L)**
    *   **内容**: 使用 `proper-lockfile` 机制防止多个进程同时安装或更新插件导致的文件损坏。

---

## 📈 功能需求趋势

*   **Agent 健壮性 (Robustness)**：社区极其关注子代理（Subagent）在异常边界（如超时、达到限制、中断）时的状态反馈准确性，希望避免“假成功”报告。
*   **Token 效率优化 (Token Efficiency)**：通过“AST 感知”和“Tactful Extraction”技术，试图让模型像手术刀一样精准读取代码，避免粗暴式读取大文件导致的 Token 浪费。
*   **安全性加固 (Security)**：在沙盒环境中，更严格地进行边界校验，防止通过修改配置文件（如 YAML/JSON）进行间接提示注入。
*   **交互体验 (UX)**：重点修复非交互模式（脚本模式/Plan Mode）下的挂死问题，并优化备缓冲区（Alternate Buffer）的切换流畅度。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 (2026-09-10)

## 🚀 今日速览
今日 Copilot CLI 发布了 **v1.0.84-3** 版本，重点修复了 MCP（Model Context Protocol）服务器在 OAuth 认证下的连接稳定性问题，并优化了任务完成消息的显示。社区目前正围绕 **Windows 平台 UI 渲染 Bug**、**浅色主题兼容性**以及**大型仓库索引内存溢出（tgrep OOM）**等展开激烈讨论。

---

## 📦 版本发布 (过去24 小时)
*   **v1.0.84-3**
    *   **修复**: 
        *   `/copy` 命令现在在任务完成可用时会包含相应的提示信息。
        *   修复了经过 OAuth 认证的 MCP 服务器在会话启动期间无法可靠连接的问题。

---

## ⚠️ 社区热点 Issues (Top 10)

1. **[#135] 浅色主题失效 (High Priority)**
   *   **摘要**: 用户反馈在开启浅色终端主题时，CLI 无法正常显示浅色界面，导致对比度极低。
   *   **状态**: OPEN | 评论: 12
   *   [查看 Issue](https://github.com/github/copilot-cli/issues/135)

2. **[#4756] Windows 项目会话创建失败**
   *   **摘要**: 在 Windows 环境下，为已有项目创建新会话时会报错 `invalid argument`，必须先归档旧项目。
   *   **状态**: OPEN | 点赞: 19
   *   [查看 Issue](https://github.com/github/copilot-cli/issues/4756)

3. **[#3700] WSL2 平台 CPU 占用过高且冻结 (Critical)**
   *   **摘要**: 在 WSL2 中，CLI 空闲状态下主线程 CPU 占用率达 215%，且 TUI 输出停止渲染，直到重启。
   *   **状态**: OPEN | 评论: 3
   *   [查看 Issue](https://github.com/github/copilot-cli/issues/3700)

4. **[#4535] `store_memory` 失败 (Context Memory)**
   *   **摘要**: 在 v1.0.81 预览版中，原生内存写入器因缺少 `Instance id` 调用失效。
   *   **状态**: OPEN | 评论: 8
   *   [查看 Issue](https://github.com/github/copilot-cli/issues/4535)

5. **[#3976] tgrep 在大型仓库中内存溢出 (OOM)**
   *   **摘要**: 内置的 Rust 版 `tgrep` 工具在处理超大仓库时会因内存限制导致主机进程崩溃。
   *   **状态**: OPEN | 评论: 3
   *   [查看 Issue](https://github.com/github/copilot-cli/issues/3976)

6. **[#2199 / #3858] Windows 下 Ctrl+Backspace 失效**
   *   **摘要**: Windows 用户反馈标准的删除单词快捷键（Ctrl+Backspace）在 CLI 提示符中无效，需使用 Alt+Backspace 替代。
**   **状态**: OPEN | 点赞: 7
   *   [查看 Issue](https://github.com/github/copilot-cli/issues/2199)

7. **[#4764] 自动审批模式 (Assisted) 运行一小时后失效**
   *   **摘要**: 开启 `/permissions` 模式运行约一小时后功能会停止，必须重新启动会话才能恢复。
   *   **状态**: OPEN | 评论: 3
   *   [查看 Issue](https://github.com/github/copilot-cli/issues/4764)

8. **[#4551] 远程 SSH 会话剪贴板失效**
   *   **摘要**: 在 macOS 上通过 SSH 连接 Linux 机器时，CLI 显示“已复制”，但本地本地剪贴板并未获取内容。
   *   **状态**: OPEN | 评论: 2
   *   [查看 Issue](https://github.com/github/copilot-cli/issues/4551)

9. **[#4773] MCP 工具发现重复错误**
   *   **摘要**: 即使工具定义已加载，模型侧重复发现仍报告“找到 0 个工具”，导致 Agent 跳过必要步骤。
   *   **状态**: OPEN | 评论: 3
   *   [查看 Issue](https://github.com/github/copilot-cli/issues/4773)

10. **[#367] 多账号切换功能请求 (Feature Request)**
    *   **摘要**: 开发者希望支持在个人、工作等多个 GitHub 账号间快速切换，无需频繁重新配置认证。
    *   **状态**: CLOSED | 评论: 4
    *   [查看 Issue](https://github.com/github/copilot-cli/issues/367)

---

## 🛠 重要 PR 进展 (Top 10)

1. **[#4786] 修订第三方服务说明**
   *   **内容**: 针对第三方服务接入修订文档，明确了访问要求和条款。
   *   [查看 PR](https://github.com/github/copilot-cli/pulls/4786)

2. **[#4770] 文档化 WebSocket 响应退出机制**
   *   **内容**: 允许用户在 WebSocket 不可用或出现 400 错误时有退出方案。
   *   [查看 PR](https://github.com/github/copilot-cli/pulls/4770)

*(注：由于 24 小时 PR 数量较少，以上为核心活跃项)*

---

## 📈 功能需求趋势分析

*   **平台一致性 (Windows/WSL2)**: Windows 用户对 UI 渲染、快捷键支持（Ctrl+Backspace）以及 WSL2 下的 CPU 表现有极高的关注度。
*   **工程化增强**: 随着大型仓库（Monorepo）的使用增加，`tgrep` 的内存管理和索引效率成为开发者关注的痛点。
*   **交互体验**: 开发者社区强烈渴望支持“主题锁定（不随系统自动切换）”以及“会话自动恢复（默认 Resume上次会话）”。
*   **MCP 生态**: MCP 服务器的连接稳定性是目前的重点，特别是 OAuth 认证下的场景，工具发现的准确性仍有待完善。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报（2026-09-10）

## 今日速览

今日社区活跃度较低，新提交的 3 个 Issues 集中于 **Windows Terminal 平台显示异常**（#2639）与 **macOS 登录认证故障**（#2638）两个方向。此前备受关注的 VSCode 扩展交互优化（#1270）与 Web 端引用回复功能（#2601）已于今日被关闭，可能暗示相关开发工作已告一段落。同期一份 fetch 模块去除重复评论的修复 PR（#1863）被合并关闭，整体呈现“收尾>新开”的状态。

---

## 社区热点 Issues

过去 24 小时内共 4 条 Issue 更新，全部列举如下：

**1. [#2639] Windows Terminal 下阿拉伯语 RTL 文本字符顺序反转**（OPEN）
- 作者: lyesmke-png | 👍: 0 | 评论: 0
- 摘要：用户在 Windows Terminal 的交互式 `kimi` 命令行中直接输入阿拉伯语时，屏幕回显的每个字符顺序完全反转；当模型回复中同时包含阿拉伯语与拉丁字母/数字时，输出同样出现反转问题，直接影响中东区域用户的日常使用。
- 为何值得关注：**首个针对 RTL（从右到左）语言支持的反馈**，涉及两类场景——用户输入提示回显与 AI 响应渲染。若无 Unicode 双向文本（bidi）算法处理或终端兼容适配，[阿拉伯语、希伯来语等 RTL 用户将被完全阻断]。
- 链接: https://github.com/MoonshotAI/kimi-cli/issues/2639

**2. [#2638] `/login` 设备授权在浏览器批准后返回 HTTP 500**（OPEN）
- 作者: milesbuckton | 👍: 0 | 评论: 0
- 摘要：CLI v0.42.0（macOS）上执行 `/login` 后，浏览器正确弹出设备码页面，用户批准后 CLI 端却报 HTTP 500 错误，且 **VS Code 扩展中同样可以复现**，意味着无论 CLI 入口还是 IDE 集成入口都被阻断。
- 为何值得关注：**登录链路安全关键故障**，普通用户视角的“浏览器已确认授权却上报 500”极具迷惑性，严重影响新用户激活流程。将阻碍所有依赖免费账号（Adagio 档位）体验的用户。
- 链接: https://github.com/MoonshotAI/kimi-cli/issues/2638

**3. [#1270] VSCode 扩展 `@` 触发时应对已打开文件优先排序**（CLOSED）
- 作者: ljyfree | 创建于 2026-02-27 | 更新至 2026-09-09 | 👍 0
- 摘要：版本 v0.4.3 中，用户在对话框输入 `@` 后，建议文件列表未能优先展示 VSCode 当前已打开的文件——尽管这些文件才是当前工作上下文中最可能需要被分析和操作的对象。该 Issue 于今日被关闭。
- 为何值得关注：**IDE 集成工作流关键体验痛点**。自 2 月提出至今约 6 个多月，今日关闭，建议重点关注其关闭关联的 commit/PR，判断最终实现方案是基于文件打开状态、编辑器活动 Tab 还是最近活跃文件做排序。
- 链接: https://github.com/MoonshotAI/kimi-cli/issues/1270

**4. [#2601] Kimi Web 支持对 AI 响应的任意片段进行引用与回复**（CLOSED）
- 作者: topit | 创建于 2026-08-11 | 更新至 2026-09-09 | 👍 0
- 摘要：希望实现“划词引用回复”——用户可选中 AI 回复中的任意文本片段（段落、代码块、步骤、diff 行）附加评论或追问，模型基于所选片段继续对话，类似于 Slack 或 GitHub 的行级评论交互。该 Issue 于今日被关闭。
- 为何值得关注：具备明确的交互范式参照（代码评审/协作文档中常用），关闭状态需结合具体跟进结论，能反映官方对 **Web 端交互深度**的取舍与排期。
- 链接: https://github.com/MoonshotAI/kimi-cli/issues/2601

> 注：过去 24 小时更新的 Issue 仅以上 4 条，无更多可列举条目。

---

## 重要 PR 进展

过去 24 小时内更新的 PR 仅 1 条：

**[#1863] fix(fetch): 抑制提取出的重复评论文本**（CLOSED）
- 作者: SherlockShemol | 👍: 0
- 摘要：此修复将 `FetchURL` 的 HTML 提取路径拆分为 Trafilatura 主正文与评论区两条分开处理；当抽取出的评论内容与主文本归一化后一致时将其抑制，并为 GitHub Issue 重复提取输出添加了回归测试。
- 影响评估：解决用 kimi 抓取 GitHub Issue 等含大量评论区页面时**上下文被重复内容污染**的问题。对依赖网页上下文进行深度分析的场景（如让模型阅读某 Issue 的讨论全貌）意义明显——避免主帖被重复若干倍灌入 token。
- 链接: https://github.com/MoonshotAI/kimi-cli/pull/1863

> 注：过去 24 小时更新的 PR 仅以上 1 条。该 PR 从 4 月持续至今日关闭，耗时约 5 个月，侧面反映 fetch 模块在评论结构解析上有一定复杂度；建议后续观察是否有由此引发的评论解析边界问题新 Issue。

---

## 功能需求趋势

从今日全部活跃 Issues 梳理，社区关注方向呈现以下四个层次：

- **IDE 集成深化（#1270）**：从“能否集成”进入“是否好用”的精细化阶段——本次反馈集中于 `@` 文件引用的排序逻辑应以**用户当前正在编辑的文件**为最高权重，说明VSCode结合用户基数较大、上下文感知排序需求旺盛；
- **Web 端交互增强（#2601）**：期待语义级定位交互（选中任意片段进行追问），本质是对 **“上下文锚定”能力的请求**，暗含对长回复精读、diff 逐行讨论等真实场景的诉求；
- **多语言与国际化支持（#2639）**：阿拉伯语等 RTL 文字的显示问题凸显终端渲染层应对 Unidirectional Bidi 文本的重排逻辑缺失，这也是 CLI 进入全球市场（中东/北非）的一块门槛；
- **账号与认证链路的稳定性（#2638）**：认证失败（HTTP 500）同时影响 CLI 与 VSCode 扩展，属于基础开通路径的可靠性要求，优先恢复用户信任。

---

## 开发者关注点

1. **认证流程黑盒化（#2638）**：用户已按流程完成浏览器端批准，但 CLI 侧返回的是相对笼统的 HTTP 500——缺少失败阶段编码、设备码状态、服务端重试提示等细节引导。从社区角度，期望 `/login` 失败时能区分“设备码过期”“服务端会话未同步”“网络代理拦截”等具体原因；
2. **不同壳层下的文本呈现差异（#2639）**：Windows Terminal 对 RTL 文本的重排方向与 CLI 输出流标记不兼容。阿语用户无法正常使用聊天或查看回复成为硬阻断。建议核心排查点：是否对输出做了字符级逐字处理、CLI是否应透传 bidi 控制字符而非自行重排、是否可下沉到框架层统一解决；
3. **上下文提取质量（PR #1863）**：普通用户输入冗长 URL 时，倾向于直接推理“内容长了但看起来不对劲”——fetch 重复正文/评论的情况不易被精确反馈，但会消耗大量 token 并降低回答针对性；该修复说明项目正在收紧该路径的确定性产出；
4. **存量诉求收敛的信号意义（#1270, #2601）**：两个时间跨度较长的功能诉求在相近日期内被标记关闭，开发者将重点关注关闭原因（已完成？暂缓？不再支持？）以及关联的文档/版本说明变更，以此判断 Kimi Code CLI 在 IDE 增强与 Web 端侧重的长期产品规划。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-09-10

---

## 1. 今日速览

- **v1.18.30 发布**：新增 GPT-6 Astra 系统提示词，修复 Bedrock DeepSeek ARN 模型 ID 解析、Azure 与 OpenAI Provider SDK 兼容性问题。  
- **社区高呼声需求集中在热重载配置（#8751，96 👍）、@ 文件引用实时刷新（#32747）与 XDG 规范合规（#27786）**，三大长期 Issue 持续积累讨论。  
- **桌面端与 TUI 稳定性成本显现**：会话加载性能优化 PR（#48223）、压缩进度可视化（#48152）、MCP 服务器代理会话（#41383）等核心基建改进进入合并或审阅阶段。

---

## 2. 版本发布

### v1.18.30 (2026-09-09)
| 类别 | 内容 |
|------|------|
| **Core Improvement** | 新增 **Astra system prompt** 适配 **GPT-6** 模型 |
| **Bugfix** | 保留 Bedrock DeepSeek 模型 ID（含 ARN 形式），修复解析失败 |
| **Bugfix** | 升级 **Azure Provider SDK** 引入兼容性修复 |
| **Bugfix** | 升级 **OpenAI Provider SDK** 拉取最新修复 |

> 🔗 [Release v1.18.30](https://github.com/anomalyco/opencode/releases/tag/v1.18.30)

---

## 3. 社区热点 Issues（Top 10）

| # | 标题 | 评论/👍 | 核心诉求 | 关注理由 |
|---|------|---------|----------|----------|
| [#8751](https://github.com/anomalyco/opencode/issues/8751) | **Hot-reload agents, skills and commands** | 23 / 96 | 运行时无需重启即可重新加载配置 | **最高呼声功能**，影响开发迭代效率，社区持续跟进 8 个月 |
| [#32747](https://github.com/anomalyco/opencode/issues/32747) | **@ file mentions 不含启动后新建文件** | 16 / 14 | 文件索引状态陈旧，需重启才能补全 | 直接阻断 TUI 交互流，高频痛点 |
| [#27786](https://github.com/anomalyco/opencode/issues/27786) | **XDG 规范违规：node_modules 落在 ~/.config** | 16 / 9 | 运行时依赖应置于 `~/.local/share` | Linux 发行版打包/合规硬性要求 |
| [#18654](https://github.com/anomalyco/opencode/issues/18654) | **OpenCode Zen 无法修改/移除邮箱** | 7 / 16 | 账号邮箱变更后出现重复用户 | 多账号管理基础体验缺失 |
| [#34040](https://github.com/anomalyco/opencode/issues/34040) | **TUI 自动补全不展开 reference 别名下的文件** | 6 / 2 | `@home` 等别名无法递归补全子文件 | 影响外部目录引用工作流 |
| [#39491](https://github.com/anomalyco/opencode/issues/39491) | **Plan mode 仍可通过 bash 写文件** | 5 / 0 | 模型绕过 write-tool 直接用 `cat >` 实现落盘 | 安全边界失效，需加强工具调用拦截 |
| [#47034](https://github.com/anomalyco/opencode/issues/47034) | **gemini-3.8-flash 报 400 “Requests ending with a model turn”** | 5 / 1 | 对话轮次以 model turn 结尾被拒 | 新模型兼容性阻塞，需调整请求结构 |
| [#48214](https://github.com/anomalyco/opencode/issues/48214) | **Prompt tool list 与运行时注册表中会话漂移** | 3 / 0 | 无 MCP 变更下工具列表失效，后续调用全空 | 生产环境 headless 模式严重事故 |
| [#47665](https://github.com/anomalyco/opencode/issues/47665) | **[2.0] CLI positional directory 本地解析导致远程路径失败** | 3 / 0 | `opencode2 <dir> --server` 先在本地 chdir | 远程开发核心场景受阻 |
| [#41571](https://github.com/anomalyco/opencode/issues/41571) | **Kimi K3-256K 压缩产生空摘要，历史静默丢失** | 3 / 2 | v1.18.15 后 compaction 仅含 reasoning 无 text | 长上下文模型数据丢失风险 |

---

## 4. 重要 PR 进展（Top 10）

| # | 标题 | 状态 | 核心变更 | 影响面 |
|---|------|------|----------|--------|
| [#48223](https://github.com/anomalyco/opencode/pull/48223) | **fix(app): reduce cold/warm session load work** | Open | 复用 16 条渲染时间线、惰性折叠、滚动恢复 | 大会话启动速度显著提升 |
| [#48152](https://github.com/anomalyco/opencode/pull/48152) | **feat(desktop): show compaction progress and outcomes** | Closed | 压缩不再即时显示 “Session compacted”，改为进度 + 结果 | 桌面端可观测性增强 |
| [#41383](https://github.com/anomalyco/opencode/pull/41383) | **feat(opencode): add MCP server for delegating sessions** | Closed | 新增 `opencode mcp-server`（stdio/HTTP/SSE） | 外部 Agent（Claude Code 等）可代理会话 |
| [#41381](https://github.com/anomalyco/opencode/pull/41381) | **fix: address 23 community-reported issues** | Closed | SQLite PRAGMA 优化、npm 字段继承、媒体 400 保护等 | 一次性清理大量长尾 Bug |
| [#41449](https://github.com/anomalyco/opencode/pull/41449) | **feat(tool): add interactive terminal tool with vscode auto-attach** | Closed | 新增 `terminal` 工具（PTY open/read/input/close）+ VS Code 自动附着 | Agent 可驱动真实终端，IDE 集成深化 |
| [#41435](https://github.com/anomalyco/opencode/pull/41435) | **fix(tui): scope prompt drafts to sessions** | Closed | 草稿按会话隔离，切会话自动清空/恢复 | 多标签/多会话编辑体验修复 |
| [#41431](https://github.com/anomalyco/opencode/pull/41431) | **fix(desktop): bundle CLI in release apps** | Closed | 嵌入 V2 CLI 至 dev/beta/prod 全渠道桌面包 | 桌面启动不再依赖外部 CLI 安装 |
| [#41386](https://github.com/anomalyco/opencode/pull/41386) | **docs(config): clarify snapshot only works inside .git repo** | Closed | 文档明确 Snapshot 仅在 Git 仓库生效 | 避免用户误用导致静默失败 |
| [#41409](https://github.com/anomalyco/opencode/pull/41409) | **docs(web): add deep links documentation** | Closed | 记录 `opencode://` 协议处理 | 桌面端深度链接可被外部调用 |
| [#41432](https://github.com/anomalyco/opencode/pull/41432) | **refactor(i18n): centralize locale-aware rendering** | Closed | 统一 62 套 UI 字典模板，移除分散逻辑 | 国际化维护成本大幅降低 |

---

## 5. 功能需求趋势（从 50 条 Issue 提炼）

| 趋势方向 | 代表 Issue | 社区热度信号 |
|----------|------------|--------------|
| **配置热重载 / 动态插件** | #8751 (96 👍), #48219 (skill shadow) | 架构层面最高优先级，涉及 Agent/Skill/Command 全生命周期 |
| **文件系统感知实时化** | #32747, #34040, #47665 | 索引、补全、远程路径三大场景均指向 “fs watcher + 远程统一抽象” |
| **桌面原生体验补齐** | #48099 (MSI), #48202 (终端冻结), #48203 (打断队列), #35282 (铃声) | Windows 部署、Mac 终端稳定性、异步消息队列、通知系统 |
| **模型兼容性长尾** | #47034 (Gemini), #47965 (DeepSeek 4 图限制), #48226 (GPT-6 Astra TUI 失败), #41571 (Kimi 空摘要) | 新模型发布节奏快，Provider 适配与错误分类需自动化 |
| **安全边界与 Plan Mode** | #39491 (bash 绕过), #41730 (--auto 不传递给子代理) | 代理能力增强带来的权限传递一致性问题 |
| **XDG / 规范合规** | #27786 | Linux 发行版上游要求，影响打包分发 |
| **MCP 生态互通** | #41383 (MCP Server), #48214 (工具注册表漂移) | OpenCode 定位为 MCP Host 与 Client 双角色 |

---

## 6. 开发者关注点（痛点与高频需求）

1. **“改完配置还要重启”** —— #8751 96 👍 直指开发循环核心痛点，期望 `fs.watch` + 模块热更新机制落地。  
2. **“新建文件补不全”** —— #32747 与 #34040 合并看，本质是 **虚拟文件系统视图** 与 **物理盘** 同步机制缺失。  
3. **“远程开发仍不一等公民”** —— #47665、#48214（headless serve）、#41449（终端工具）均指向 **CLI 与 Server 解耦不彻底**。  
4. **“压缩/摘要静默丢数据”** —— #41571、#42238（JSONL 混入内部事件）、#48152（进度不可见）组成 **可观测性三件套** 缺口。  
5. **“桌面端原生能力缺失”** —— MSI 安装器、终端冻结、消息打断无队列、无铃声提醒，均为 Electron/Tauri 层未补齐的原生体验。  
6. **“模型错误分类不精准”** —— #47034、#39677（图片数超限未触发 context overflow）、#48226（TUI 独有 UnknownError）呼吁统一 **错误码映射层** 与 **自动重试策略**。  
7. **“权限模型不传递”** —— #41730（--auto 不级联）、#39491（plan mode 绕过）揭示 **权限上下文在子 Agent/工具间传播机制缺失**。  

---

> **下一步建议关注**：v1.18.31 是否合入热重载原型（#8751）、文件系统监听重构（#32747）、MCP Server 稳定化（#41383 后续）；桌面端 MSI 与终端稳定性修复将决定 Windows/Mac 企业级落地节奏。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-09-10

> 数据来源：[github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono) （earendil-works/pi 仓库）
> 统计周期：过去 24 小时

---

## 1. 今日速览

今日 Pi 仓库动态以**多 Provider 兼容性修复**和**会话/进程稳定性优化**为主线：Anthropic 订阅会话卡死（#5291，10 评论最高）、OpenRouter 免费模型超限（#8760）、openai-codex 目录清理（#9394）等问题陆续落地；与此同时，文档校验、Cursor 导航一致性（#9382）、Mistral GLM 推理参数（#9376）等 6 个 PR 已合入。安全方面，**pi-safe-compact（#9381）与 omp-wechat（#9321）均被打包报告为恶意/仿冒包**，提醒安装第三方扩展时需谨慎。

---

## 2. 版本发布

**过去 24 小时无新 Release。** 仓库最近仍以 0.85.1（issue 中被多次提及）为现行版本，多个 bug 修复与新特性正在等待下一轮发布窗口。

---

## 3. 社区热点 Issues

按评论数与影响面筛选 10 条最值得关注：

| # | Issue | 状态 | 摘要 | 为何重要 |
|---|-------|------|------|----------|
| 1 | [#5291](https://github.com/earendil-works/pi/issues/5291) Sessions hang on "working" with Anthropic subscription | CLOSED | 使用 Anthropic Enterprise 订阅时偶发卡在 "Working..." | 当日最高讨论度（10 评论，3 👍），影响所有付费企业用户；修复对订阅稳定性体验关键 |
| 2 | [#8928](https://github.com/earendil-works/pi/issues/8928) Parallel pi startup 报告 "No API key found" 约 48s | OPEN / inprogress | 多进程并行启动且 `auth.json` 含过期 OAuth 时延迟误报 | 提供确定性复现 + 计时数据，与 #1871/#4919/#6880 同源，影响 CI/批量任务 |
| 3 | [#5105](https://github.com/earendil-works/pi/issues/5105) Compaction summarization 忽略配置的 transport | CLOSED | 压缩摘要路径未透传 `sessionId/transport`，导致 `openai-codex-responses` 回退到 `auto` | 涉及长期会话上下文压缩核心链路，影响 thinking/工具链路一致性 |
| 4 | [#8760](https://github.com/earendil-works/pi/issues/8760) OpenRouter `:free` 模型 `max_tokens` 超限 400 | OPEN / inprogress | Pi 直接发送模型目录中的 `maxOutputTokens`，超过上游限制 | 影响**所有**使用 OpenRouter 免费模型的用户，急需上游协商或客户端截断 |
| 5 | [#9381](https://github.com/earendil-works/pi/issues/9381) Package Report: pi-safe-compact 0.6.3 | CLOSED | 报告者标记维护者 `primp9053` 在 GitHub 不可达，疑似账号失联 | **安全告警**：建议社区暂停使用该包，等待官方处置 |
| 6 | [#9290](https://github.com/earendil-works/pi/issues/9290) Extension API `modelRegistry.complete()` 缺失 `x-opencode-session` | CLOSED | opencode.ai 自 2026-09-06 强制该 header，导致所有 opencode-go 模型扩展请求 400 | 影响所有依赖 `modelRegistry.complete()` 的扩展，属于全生态破坏性变更 |
| 7 | [#9294](https://github.com/earendil-works/pi/issues/9294) `claude-fable-5` 内置 `allowedFallbackModels` 含已被 API 拒绝的 `claude-opus-4-8` | OPEN | 直接 400 失败，`--thinking low` 也无法触发 fallback | 内置模型配置未跟随上游下线清理，需紧急 catalog 修正 |
| 8 | [#8810](https://github.com/earendil-works/pi/issues/8810) 扩展注册的 provider 偶发忽略 defaultProvider/defaultModel | OPEN | 新会话静默回退到其他 provider 默认模型 | 影响**扩展生态一致性**，对依赖 `pi.registerProvider` 的扩展作者至关重要 |
| 9 | [#9311](https://github.com/earendil-works/pi/issues/9311) Fullscreen 鼠标选区在会话切换后残留 | OPEN | 切换/创建新会话时旧选区仍可见 | 全屏 TUI 用户体验痛点，修复建议简单（切换时清空选区） |
| 10 | [#9399](https://github.com/earendil-works/pi/issues/9399) 加载 spinner 在长会话下 CPU 占用线性增长 | CLOSED | 数千条消息时占用单核 ~25%，老旧 ThinkPad 明显 | 与扩展 `pi-infinite-context` 等长上下文场景叠加，性能优化需求强烈 |

---

## 4. 重要 PR 进展

过去 24 小时共 6 个 PR 全部已合入（CLOSE），按重要性排序：

| # | PR | 类型 | 内容 | 影响 |
|---|----|------|------|------|
| 1 | [#9382](https://github.com/earendil-works/pi/pull/9382) Always place cursor at the end while navigating through history | UX | 上键浏览历史消息时光标固定在末尾 | 修复一个长期不一致行为，与 bash 等主流 CLI 对齐 |
| 2 | [#9374](https://github.com/earendil-works/pi/pull/9374) fix(coding-agent): reject reload during active session operations | Bug 修复 | RPC 模式下 reload 检查 `isStreaming/isCompacting`，避免工具完成后访问已失效 runner | 修复 RPC 模式下"幽灵"工具结果写入 session 的隐患 |
| 3 | [#9376](https://github.com/earendil-works/pi/pull/9376) fix(ai): use reasoning_effort for Mistral-hosted GLM (zai-glm-5-2) | Bug 修复 | Mistral catalog 声明 `reasoning: true` 但 API 仅认 `reasoning_effort` | 解决 Mistral 平台上 GLM-5.2 推理失败 |
| 4 | [#9380](https://github.com/earendil-works/pi/pull/9380) docs: validate documentation navigation and reachability | 工具链 | 将 `packages/coding-agent/docs/docs.json` 作为版本化导航清单，加入校验 | 防止文档死链、重复 slug，提升官方站点质量 |
| 5 | [#9370](https://github.com/earendil-works/pi/pull/9370) docs: extract interactive testing and release guidance into skills | 文档 | 将交互测试与发布流程抽取为独立 skill | 便于贡献者复用最佳实践 |
| 6 | [#9368](https://github.com/earendil-works/pi/pull/9368) (accidental pr) | — | 误提交 PR，已关闭 | 无实质变更，提醒贡献者先开 issue 再开 PR |

---

## 5. 功能需求趋势

从近 24 小时 50 条更新 Issue 中提炼出最受关注的功能方向：

1. **多 Provider 兼容与模型目录治理（热度最高）**
   - OpenRouter（#8760）、Anthropic（#5291, #9188, #9294）、OpenAI Codex（#9394, #5105）、Mistral（对应 #9376）、Grok（#9298）、Fireworks（#9323）、GitHub Copilot（#9282）、LongCat（#9308）等近 10 条 Issue 都与"Provider/Model 适配"相关。社区迫切需要**统一的模型 catalog 治理流程**与上游变更跟进机制。

2. **会话/状态机健壮性**
   - 并行启动误报（#8928）、压缩链路丢字段（#5105）、aborted turn 留未匹配 toolCall（#9306）、扩展注册 provider 默认值丢失（#8810）——会话生命周期各环节均暴露状态一致性问题。

3. **TUI/交互打磨**
   - 全屏选区残留（#9311）、滚动速度可配置（#9315）、代码块可折叠（#9397）、Cursor 定位（#9382）、MouseRegion crash（#9320）、启动信息分节显示（#9289）。TUI 细节持续是高频需求。

4. **扩展 API 与 SDK 嵌入**
   - `modelRegistry.complete()` header 缺失（#9290）、SDK 仍 eval CLI main（#9286）、RPC 模型/思考参数持久化（#9393）、`steer` 消息重复持久化（#9322）。扩展作者生态急需更稳定的 API 契约。

5. **性能与可观测性**
   - 长会话 spinner 高 CPU（#9399）、`pi list` 显示版本（#9398）、`tmux` 嵌套启动失败（#9396）。

6. **生态安全**
   - `pi-safe-compact`（#9381）恶意/失联报告、`omp-wechat`（#9321）仿冒报告——**社区自发的供应链审查正在形成**。

---

## 6. 开发者关注点

综合开发者反馈，社区当前的痛点与高频诉求可归纳为：

- **Provider 上游变更的滞后处理**：opencode.ai 强制 `x-opencode-session` header、Anthropic 下线 `claude-opus-4-8`、OpenAI Codex 下架 `gpt-5.4`、Mistral 不识别 `prompt_mode: reasoning`——这些上游变更均让 Pi 用户直接"踩坑"。开发者希望有**更及时的内置 catalog 同步机制**（自动化或公告渠道）。

- **会话状态机缺乏防御性设计**：从 toolCall 未匹配（#9306）到并行启动延迟报错（#8928），社区多次指出 Pi 应在边缘场景下回退而非直接失败。**健壮性优于完备性**是反复出现的诉求。

- **扩展 API 的"破坏性变更"成本高**：仅一个 header 要求（#9290）就导致所有扩展调用 opencode-go 模型 400，开发者呼吁**扩展 API 给出更明确的兼容性与 deprecation 策略**。

- **TUI 细节决定日常体验**：cursor 位置、选区残留、代码块折叠、scroll 倍率等"小问题"高频出现，说明 Pi 用户对 TUI 体验有较高期待，**累计的微改进对留存至关重要**。

- **第三方包安全**：两次 Package Report 都在 24 小时内出现，说明社区已经具备**自发的供应链审查文化**，但官方需要给出更明确的包审核/下架流程。

- **文档与可发现性**：#9380 / #9370 等 PR 显示文档基础设施正在补齐，反映出**新贡献者 onboarding 路径**是当前优先级。

---

*日报生成依据：GitHub Issues/PRs 数据快照，仅反映过去 24 小时窗口内的社区活跃度。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报
**日期：2026-09-10**

---

## 1. 今日速览

今日 Qwen Code 仓库发布了 **v0.23.2** 正式版本及配套的 SDK、Driver 与夜间构建，同时伴随大量 Web Shell / VS Code Companion / Daemon 相关 Issues 涌入，社区讨论焦点集中在 **Windows 平台 ConPTY 进程泄漏、Web Shell 会话可靠性退化、IDE 集成数据丢失** 三大方向。多个高优先级 P1 Bug 已被维护者接手修复或拆分独立追踪。

---

## 2. 版本发布

### v0.23.2（正式版）
- **Breaking Changes**：无
- **Features**：
  - `feat(web-shell)`: 改进分屏视图的会话导航（[#11250](https://github.com/QwenLM/qwen-code/pull/11250)）
- **底层修复**：包含 nightly v0.23.2-nightly.20260909 中关于 goal/checkpoint 重试避免 stall 的修复（[#11365](https://github.com/QwenLM/qwen-code/pull/11365)）

### 配套 Release
| 版本 | 说明 |
|---|---|
| [v0.23.2-nightly.20260909.2e212144d3](https://github.com/QwenLM/qwen-code) | 夜间构建，含 checkpoint 重试逻辑 |
| [sdk-typescript-v0.1.11](https://github.com/QwenLM/qwen-code) | TS SDK，内置 CLI 0.23.2 |
| [cua-driver-rs-v0.20.5](https://github.com/QwenLM/qwen-code) | CUA Driver 预编译二进制（macOS 签名公证 / Windows UIA + 原生 SDK） |

---

## 3. 社区热点 Issues

| # | 标题 | 重要性 | 评论 | 链接 |
|---|---|---|---|---|
| [#11303](https://github.com/QwenLM/qwen-code/issues/11303) | **[Windows P1]** VS Code Companion qwen-cli 泄漏 headless conhost.exe 进程（12h 累积 347 个 / ~2.8 GB） | 严重影响长时间运行的 IDE 集成场景，被拆分为 #11313 + #11352 独立追踪 | 12 | 🔗 |
| [#11119](https://github.com/QwenLM/qwen-code/issues/11119) | **Daemon 后台 shell 输出 & 唤醒通知在 session runtime 回收时静默丢失，导致会话僵死** | 触及 `qwen serve` 守护模式核心可靠性，需讨论方案 | 4 | 🔗 |
| [#11489](https://github.com/QwenLM/qwen-code/issues/11489) | **VS Code 扩展从 v0.21.x → v0.23.x 后所有对话历史消失（state.vscdb 仍在但新版本读不到）** | 直接影响用户升级路径，#11495 已着手 | 4 | 🔗 |
| [#11352](https://github.com/QwenLM/qwen-code/issues/11352) | **[Windows P1]** node-pty 在 shell 正常退出时泄漏 ConPTY 宿主（conhost.exe） | 处于上游依赖阻塞，需讨论替代方案 | 4 | 🔗 |
| [#11500](https://github.com/QwenLM/qwen-code/issues/11500) | **[P1]** 多个后台 agent 连续完成时 TUI 静默退出（Ink useBoxMetrics setState 死循环触发 React #185） | 高频并发场景下的可用性回归 | 3 | 🔗 |
| [#11503](https://github.com/QwenLM/qwen-code/issues/11503) | **守护 git worktree 守卫在工作区 `.git` 为 junction/symlink 时拒绝执行所有 git 命令** | Windows 多卷开发常见配置被误判 | 3 | 🔗 |
| [#11475](https://github.com/QwenLM/qwen-code/issues/11475) | **`qwen serve` 支持远端文件夹：客户端连接远端 daemon 管理 workspace/session** | 远端开发是当前高频需求 | 3 | 🔗 |
| [#11328](https://github.com/QwenLM/qwen-code/issues/11328) | **Provider 配置推理（reasoning）边界场景跟进** | 模型推理增强路线上的阻塞项 | 4 | 🔗 |
| [#11433](https://github.com/QwenLM/qwen-code/issues/11433) | **讨论：评估使用 SQLite 做大 Session/Prompt 索引与持久化** | 长会话、大规模会话场景下的架构演进 | 3 | 🔗 |
| [#11410](https://github.com/QwenLM/qwen-code/issues/11410) | **v0.23.1 起 LM Studio / 本地模型 API 400 报错**（Windows 11 更新后） | 已关闭，反映社区对本地模型路径的稳定性诉求 | 4 | 🔗 |

---

## 4. 重要 PR 进展

| # | 标题 | 亮点 | 链接 |
|---|---|---|---|
| [#11495](https://github.com/QwenLM/qwen-code/pull/11495) | **fix(vscode): restore pre-cutover conversation history in the panel** | 解决 #11489，桥接 v0.21→v0.23 升级后历史记录丢失 | 🔗 |
| [#11289](https://github.com/QwenLM/qwen-code/pull/11289) | **fix(web-shell): keep mid-turn messages the daemon rejects at idle** | 当 session 已 idle 时，mid-turn 输入会被引导为正常 prompt 而非失败 | 🔗 |
| [#11169](https://github.com/QwenLM/qwen-code/pull/11169) | **fix(web-shell): close trust-gate and bystander gaps in local-files bridge** | 修复 #10962 合并前的 4 个审查遗留问题，强化本地文件桥的安全模型 | 🔗 |
| [#9466](https://github.com/QwenLM/qwen-code/pull/9466) | **refactor: anchor rewind mapping to stable prompt identity** | 用持久化 prompt ID 替代 turn 位置，使 rewind 跨 resume/headless/UI 表面保持稳定 | 🔗 |
| [#10410](https://github.com/QwenLM/qwen-code/pull/10410) | **feat(core): preserve prompt cache for deferred tools** | 引入 `tool_search` + `tool_call` 二段桥，避免延迟工具导致 prompt 缓存丢失 | 🔗 |
| [#11262](https://github.com/QwenLM/qwen-code/pull/11262) | **feat(web-shell): add unified session sources** | 统一上传文件 / 工作区引用 / HTTP 链接三类来源，避免重复展示 | 🔗 |
| [#11163](https://github.com/QwenLM/qwen-code/pull/11163) | **feat(web-shell): manage git remotes from workspace branch picker** | 在工作区 git popover 内增加 "Manage Remotes" 面板（增删 + 二次确认） | 🔗 |
| [#10938](https://github.com/QwenLM/qwen-code/pull/10938) | **feat(web-shell): make Session Workflow dependencies navigable** | 优化 Plan DAG 表达，依赖可点击跳转，inspector 视觉降噪 | 🔗 |
| [#8169](https://github.com/QwenLM/qwen-code/pull/8169) | **feat(core): add OpenAI Responses API content generator** | 新增 opt-in `openai-responses` provider，支持 SSE / 工具调用 / 推理摘要加密回放 | 🔗 |
| [#11483](https://github.com/QwenLM/qwen-code/pull/11483) | **fix(core): reject pre-aborted queued tool requests** ✅ CLOSED | 解决 #11146 中已 cancel 的请求排在无关批次后阻塞的问题 | 🔗 |

---

## 5. 功能需求趋势

从近 24h 的 Issues / PR 看，社区关注的功能方向集中在以下五大类：

1. **IDE / Web Shell 集成稳健性**
   VS Code 扩展会话历史保留（#11489/#11495）、WebShell transcript 复用进 VS Code（#9187）、TUI 并发渲染崩溃（#11500）等仍是首要诉求。

2. **远端 / 多工作区开发体验**
   `qwen serve` 远端文件夹（#11475）、多 workspace 会话管理（#11186），反映"客户端轻、daemon 重"的使用模式正在落地。

3. **新模型与 Provider 集成**
   OpenAI Responses provider（#8169）、deepseek-v4-pro 配置推理边界场景（#11328）、本地模型稳定性回归（#11410）共同指向"灵活切换后端 + 保护 prompt 缓存"的统一诉求。

4. **会话/历史存储可扩展性**
   SQLite 索引方案讨论（#11433）、transcript index cache 64MiB 准入悬崖（#11493），长会话下的存储与索引正在成为性能瓶颈。

5. **安全 / 沙箱模型演进**
   junction/symlink 工作区被拒（#11503）、shell 命令文本守卫改为类型化 sandbox 工具的架构提案（#11504），指向"从字符串守卫 → 类型化工具"的演进方向。

---

## 6. 开发者关注点

- **升级路径体验欠佳**：v0.21.x → v0.23.x 的 WebShell UI cutover 造成会话历史不可见（#11489/#11495），需要更平滑的数据迁移策略。
- **Windows 平台稳定性是 P1 重灾区**：ConPTY 泄漏（#11303/#11352）、守护 guard 对工作区自身 repo 误判（#11503）、本地模型在 Win11 更新后 400（#11410）三大类问题反复出现。
- **错误信息过于严格导致模型行为偏离**：`deny` 规则错误信息让模型误以为工具整体被禁用（#11405 → #11411 已修复引用规则）。
- **CI / 基础设施自身的健康度**：ECS runner fleet 升级失败（#11403）、E2E 上传需一次重试（#11375）说明流水线本身需要更高韧性。
- **配置可观测性差**：`.mcp.json` 中 `${VAR}` 占位符未展开导致密钥以明文发送（#11499），daemon 文档 `_meta.ts` 未同步导致导航缺失（#11399），均属于"配置即代码"场景下的盲区。

---

*日报基于 github.com/QwenLM/qwen-code 过去 24 小时（截至 2026-09-09）数据生成。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI / Codewhale 社区动态日报（2026-09-10）

> 说明：数据来源标注为 `github.com/Hmbown/DeepSeek-TUI`，但今日 Issues/PR 实际均来自 `Hmbown/Codewhale` 仓库。以下按提供的原始数据汇总。  
> 过去 24 小时内仅有 **5 个活跃 Issue** 和 **1 个活跃 PR**，未达到你期望的 10 条，因此本文列出全部可用条目，不做臆造。

---

## 1. 今日速览

今日社区无新 Release；核心动向集中在 **Codewhale 0.9.13 集成验证** 与几个高频体验问题：新用户 Gemini 初始配置失败、已恢复会话看不到新 Provider/模型、以及 Ollama 默认目录与品牌重构的代码耦合。整体看，开发者对「多 Provider 稳定性」和「会话状态一致性」的关注度明显上升。

---

## 2. 版本发布

无（过去 24 小时未发布新版本）。

---

## 3. 社区热点 Issues

> 以下为过去 24 小时内更新的全部 5 个 Issue。

### #5848 [OPEN] 将 Ollama 实时目录默认值从品牌重写中拆分
- **作者**: Hmbown  
- **为何重要**: 修复分支把「Ollama 默认应从本地实时目录读取」这一核心改动（涉及 `provider_defaults.rs`、`models.rs`、`model_inventory.rs`、`provider_lake.rs`）与 `mark.rs` 重写及 web 品牌 tile 混在了一起，既和新 logo 方向冲突，也提高了 review 与回滚风险。  
- **社区反应**: 作者主动提出「Parked, not landed」，呼吁拆分支、单独落地功能修复。  
- **链接**: [Hmbown/Codewhale#5848](https://github.com/Hmbown/Codewhale/issues/5848)

### #6016 [OPEN] 已恢复会话无法看到或切换到会话创建后新增的 Provider/模型
- **作者**: 7jrxt42BxFZo4iAnN4CX  
- **为何重要**: 用户修改默认 Provider/模型后，**恢复旧会话**在 `/model` 选择器中看不到新配置，而新开会话却可以。这破坏了「会话恢复」与「动态配置」之间的一致性，影响多模型工作流。  
- **社区反应**: 9 月 9 日新建，已有 2 条评论，属于典型的状态同步类 Bug，需尽快定位 model picker 的过滤逻辑。  
- **链接**: [Hmbown/Codewhale#6016](https://github.com/Hmbown/Codewhale/issues/6016)

### #6018 [OPEN] [bug] 全新安装下 Google Gemini 配置异常
- **作者**: Statter  
- **为何重要**: Mac Sequoia 15.5 上全新安装 Codewhale 后，Gemini 的 native 与 OpenAI 兼容两种设置均报错，直接影响新用户 onboarding。  
- **社区反应**: 9 月 9 日新报，2 条评论，需补充复现环境、日志与最小配置。  
- **链接**: [Hmbown/Codewhale#6018](https://github.com/Hmbown/Codewhale/issues/6018)

### #6017 [OPEN] 是否支持跨会话的持久记忆
- **作者**: memcodeoff（MemCode 创始人）  
- **为何重要**: 作为终端编码代理，Codewhale 若能持久保存项目上下文与用户工作流偏好，将显著降低每次会话的重复说明成本；MemCode 提议作为可选记忆层集成。  
- **社区反应**: 战略性功能请求，目前 1 条评论，处于早期讨论阶段。  
- **链接**: [Hmbown/Codewhale#6017](https://github.com/Hmbown/Codewhale/issues/6017)

### #2955 [CLOSED] [documentation, enhancement] v0.8.56：OpenAI Codex provider 使用遥测与 Codex CLI 对齐
- **作者**: Hmbown  
- **为何重要**: 为了实现与 OpenAI Codex CLI 的公平对比，需要记录 cached input tokens、reasoning output tokens 等细粒度指标，而当前 Harbor stream 只报告汇总输入/输出。  
- **社区反应**: 已在 9 月 8 日关闭，1 条评论，属于遥测与文档增强。  
- **链接**: [Hmbown/Codewhale#2955](https://github.com/Hmbown/Codewhale/issues/2955)

---

## 4. 重要 PR 进展

> 以下为过去 24 小时内更新的全部 1 个 PR。

### #6002 [OPEN] Integrate Codewhale 0.9.13 contributor fixes and release verification
- **作者**: Hmbown  
- **功能/修复内容**:  
  - 集成 Codewhale 0.9.13 的社区贡献修复；  
  - 对 CLI、终端 UI、Runtime API 及内置 Computer Use 实现进行联合测试与发布验证；  
  - 涉及 Provider 目录分页与精确路由、OpenRouter vendor 选择、输出限制与价格校验等。  
- **状态**: 开放中，正在进行集成验证。  
- **链接**: [Hmbown/Codewhale#6002](https://github.com/Hmbown/Codewhale/pull/6002)

---

## 5. 功能需求趋势

从今日 Issues 可提炼出以下社区关注点：

1. **多 Provider 生态健壮性**  
   Ollama 默认目录来源、OpenRouter vendor 选择、Gemini 初始配置、model picker 路由精确性——Provider 越多，配置与路由的稳定性越成为核心体验。

2. **会话状态与持久记忆**  
   「恢复会话后看不到新 Provider」与「跨会话 durable memory」两 Issue 共同指向：Codewhale 需要在「无状态快速启动」与「有状态连续性」之间取得更好平衡。

3. **遥测与可观测性**  
   OpenAI Codex 的对比需求推动更细粒度的 token 级遥测，未来可能扩展到更多 Provider 的 usage 对齐。

4. **品牌/代码解耦**  
   #5848 反映出一个工程治理问题：功能修复不应与品牌/UI 重构绑定，社区对清晰、可回滚的提交结构有要求。

---

## 6. 开发者关注点

- **会话恢复一致性**：恢复旧会话时，配置变更（新增 Provider/模型）必须同步可见，否则用户会被迫放弃已有会话上下文。  
- **新用户安装体验**：Gemini 在全新安装场景下的失败，提示需要更完善的首次配置引导与错误诊断。  
- **Provider 配置复杂度**：多 Provider、多路由、vendor 选择等能力增多后，如何降低用户的理解与配置成本是长期痛点。  
- **遥测准确性**：与外部工具（如 Codex CLI）做公平对比时，缺少细粒度指标会削弱数据可信度。  
- **代码/品牌重构分离**：功能修复与品牌重写应避免耦合，以保证 cherry-pick、回滚和并行开发的效率。

---

> 如需后续日报，建议补充更多 Issue/PR 样本或开放 GitHub API 访问，以便覆盖完整社区动态。

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

# ComfyUI 社区动态日报
**日期：2026-09-10**

---

## 1. 今日速览

ComfyUI v0.35.0 正式发布，重点更新了 Partner Nodes（移除 Google Veo 2/Veo 3.0，新增 Recraft V4 样式）。今日社区焦点集中在 **MiniMax H3 视频生成模型** 引入的连锁问题——多个签名变更、显存回归与采样器崩溃相互交织，导致第三方插件大面积失效；同时 **ROCm/AMD 平台** 的稳定性问题（VAE 配额、Trellis2 HIPBLAS 错误）继续困扰 Windows 与 Linux 用户。

---

## 2. 版本发布

### 🎉 v0.35.0 已发布
**主要变更：**
- **Partner Nodes · Google**：移除即将退役的 Veo 2 与 Veo 3.0 模型（[#15883](https://github.com/Comfy-Org/ComfyUI/pull/15883)）
- **Partner Nodes · Recraft**：新增 V4 Styles 支持（[#15903](https://github.com/Comfy-Org/ComfyUI/pull/15903)）
- **Partner Nodes · WAN**：新增（PR 内容被截断）

社区提示：多个 Bug 报告针对开发分支（包括 #16175、#16210 等 H3 相关问题）在 v0.35.0 上仍需验证，部分开发分支专有问题建议等待补丁版本。

---

## 3. 社区热点 Issues

| # | 标题 | 状态 | 重要性 |
|---|------|------|--------|
| [#16150](https://github.com/Comfy-Org/ComfyUI/issues/16150) | H3 工作流在最新版出现 VRAM 回归 | OPEN | 🔥🔥🔥 |
| [#16151](https://github.com/Comfy-Org/ComfyUI/issues/16151) | "Everything is broken af!" | OPEN | 🔥🔥🔥 |
| [#16149](https://github.com/Comfy-Org/ComfyUI/issues/16149) | H3 FinalLayer 签名变更无默认值导致自定义节点崩溃 | OPEN | 🔥🔥🔥 |
| [#16175](https://github.com/Comfy-Org/ComfyUI/issues/16175) | Model Sparse Attention 节点在 H3 上 OOM | CLOSED | 🔥🔥 |
| [#16210](https://github.com/Comfy-Org/ComfyUI/issues/16210) | MinimaxH3 使 SamplerCustomAdvanced 崩溃 | CLOSED | 🔥🔥 |
| [#14756](https://github.com/Comfy-Org/ComfyUI/issues/14756) | SCAIL2 int8convrot 内存错误 | OPEN (Stale) | 🔥🔥 |
| [#15060](https://github.com/Comfy-Org/ComfyUI/issues/15060) | 子图中 Custom Combos 失效 | CLOSED | 🔥🔥 |
| [#16183](https://github.com/Comfy-Org/ComfyUI/issues/16183) | Yusu H3 Unified 字符串/整数运算错误 | OPEN | 🔥🔥 |
| [#15545](https://github.com/Comfy-Org/ComfyUI/issues/15545) | MixedPrecisionOps INT8 Embedding 在 DynamicVRAM 下失败 | OPEN | 🔥🔥 |
| [#16002](https://github.com/Comfy-Org/ComfyUI/issues/16002) | MiniMax Music 3 + CUDA Graph + Dynamic VRAM 崩溃 | OPEN | 🔥 |

**分析**：
- **H3 生态"破窗效应"**：H3 模型近期 FinalLayer 签名变更缺少默认值（#16149），连带触发 OOM（#16175）、采样器崩溃（#16210）、VRAM 回归（#16150）、运行时类型错误（#16183）等多类问题。社区强烈呼吁 **废弃期（deprecation window）或默认参数兜底机制**。
- **Custom Combos 在子图中断裂**（#15060）获得 19 条讨论，是近期 UI/交互层面最活跃的 Bug。
- **INT8 量化与 Dynamic VRAM 协同**（#15545、#14756）反映出大模型量化部署对显存管理的强依赖。

---

## 4. 重要 PR 进展

| # | 标题 | 状态 | 内容要点 |
|---|------|------|----------|
| [#16212](https://github.com/Comfy-Org/ComfyUI/pull/16212) | 跟踪 Model Sparse Attention 的数值后端历史 | CLOSED | 让预测提供方在稀疏路由稳定时保留 H3 历史 |
| [#16211](https://github.com/Comfy-Org/ComfyUI/pull/16211) | 移除 quant_ops 中失效的 ROCm triton arch gate | CLOSED | 由 comfy-kitchen 自注册 HIP 后端接管 |
| [#16205](https://github.com/Comfy-Org/ComfyUI/pull/16205) | 修复 V3 节点子类继承父类缓存的 schema 值 | OPEN | 修复 #16132、#16026（OUTPUT_IS_LIST 同源 Bug） |
| [#16206](https://github.com/Comfy-Org/ComfyUI/pull/16206) | 修复 hook patching 在量化模型上崩溃 | OPEN | `get_key_patches()` 遍历 QuantizedTensor sidecar 导致问题 |
| [#16209](https://github.com/Comfy-Org/ComfyUI/pull/16209) | 修复 Lanczos mask 缩放丢失通道维度 | OPEN | 修复 #16208，含 46 个 CPU 测试 |
| [#16214](https://github.com/Comfy-Org/ComfyUI/pull/16214) | 修复图像数据集 caption 路径处理 | OPEN | 仅替换末尾扩展名，避免 `train.png/photo.png` 静默读空 |
| [#15909](https://github.com/Comfy-Org/ComfyUI/pull/15909) | 支持在自定义浏览器中 auto-launch | OPEN | 新增 `--browser-path` CLI 参数，已在 v0.35.0 验证 |
| [#16197](https://github.com/Comfy-Org/ComfyUI/pull/16197) | VSA 输出重排序改用 index_select | CLOSED | 提升 VSA sparse-attention 后向效率 |
| [#16196](https://github.com/Comfy-Org/ComfyUI/pull/16196) | 避免 finalize 被丢弃的 H3 VAE 帧 | CLOSED | 减少时序解码的多余带宽 |
| [#16188](https://github.com/Comfy-Org/ComfyUI/pull/16188) | OpenRouter 新增 Microsoft mai-image-2.6 | CLOSED | Partner Nodes 扩展 |
| [#16204](https://github.com/Comfy-Org/ComfyUI/pull/16204) | 修复付费 API 节点重试导致重复扣费 | OPEN | Partner 提供商按请求计费，重试策略需谨慎 |
| [#16201](https://github.com/Comfy-Org/ComfyUI/pull/16201) | Tripo 迁移至 v3 API + Smart Segment | OPEN | 多视图生成、网格补全等能力迁移 |

**分析**：
- **稳定性优先**：今日合并的 PR 多围绕 **V3 schema 继承、量化模型兼容、VAE 时序解码** 等核心回归。
- **生态治理**：#16167（自定义节点治理强制）虽未上墙，但代表 ComfyUI 走向企业级合规的信号。
- **可观测性**：#16202（节点进度新增 activity 字段）有望显著改善模型加载时的"卡 0%" 体验。

---

## 5. 功能需求趋势

从 Issues/PR 中提炼的高频需求方向：

| 方向 | 代表 Issue/PR | 趋势解读 |
|------|--------------|---------|
| **MiniMax H3 / 视频生成兼容性** | #16149, #16150, #16175, #16210 | 视频生成模型正成为生态瓶颈，签名稳定性、显存调度、稀疏注意力三件套急需系统级解 |
| **AMD ROCm 平台支持** | #16123, #16124, #15354 | ROCm VA 配额、HIPBLAS 错误、RX 6800 稳定性持续暴露 |
| **量化（INT8/NVFP4/ConvRot）与 DynamicVRAM 协同** | #15545, #14756 | 25GB+ 量化模型日益普及，但 mixed-precision 后端仍脆弱 |
| **自定义浏览器 / 启动选项** | #11709 → #15909 | 部署体验类需求逐步落地 |
| **自定义节点治理** | #16167 | 企业场景对安全合规要求升温 |
| **图像数据集加载细节** | #16213, #16214 | 训练数据管线对路径鲁棒性提出更高要求 |
| **音频 VAE 与跨平台** | #16087 | Stable Audio 3 在 MPS/CPU 上 VAE 破坏音频 |
| **API 节点计费正确性** | #16204 | 付费工作流的重试幂等性开始被关注 |
| **节点进度可观测性** | #16202 | "0% 卡住"成为长期 UX 痛点 |
| **Pixal3D / Trellis2 / Hunyuan3D 3D 管线** | #16018, #16147, #16124 | 3D 生成正快速进入主流节点拓扑 |

---

## 6. 开发者关注点

**核心痛点（按提及频次）：**

1. **签名/接口变更缺乏过渡期**（H3 FinalLayer 是典型反例）
   - 第三方采样/缓存插件全部崩溃，社区呼吁引入 deprecation window 或默认参数兜底机制。

2. **显存管理与量化算子的协同脆弱**
   - DynamicVRAM + INT8 TensorWise / DynamicVRAM + H3 频繁撞上 `NoCapableBackendError` 或 OOM。
   - 建议核心层提供"算子能力声明 → 后端分发 → 失败原因"链路（参考 #16212 的 backend history 设计）。

3. **ROCm/AMD 在 Windows 上的"二等公民"处境**
   - VA 配额仅 4TB（对比 Nvidia 128TB），HIPBLAS / KFD 崩溃频发。
   - #16199 已将 AMD Windows VA 配额升至 4TB，但与硬件极限（128TB）仍有数量级差距。

4. **V3 节点体系的 schema 缓存污染**
   - 父类 schema 持久化导致子类继承错误（#16205 修复），影响所有 V3 节点扩展者。

5. **可观测性不足**
   - 模型加载与计算无法在 UI 区分（#16202 提议加 activity 字段）。
   - 资产系统日志缺乏结构化（#16082）。

6. **付费 API 节点的重试与扣费一致性**
   - `aiohttp.ClientError` 重试导致用户被重复收费（#16204），建议 idempotency key 或服务端去重。

7. **训练数据加载细节**
   - 路径中过早出现扩展名即导致 caption 丢失（#16213），暴露在 LoRA / 微调场景中可能造成静默数据损坏。

---

**总结一句话**：今日 ComfyUI 的主线是 **"v0.35.0 平稳发布 + H3 引发插件生态震荡 + 量化/ROCm 老问题新爆发"**，建议开发者关注 16167（治理）、16205（V3 schema）、16202（节点进度 activity）三条中长期主线。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# 今日速览

今天，Ollama 社区继续在模型兼容性和校准领域取得进展。一个值得注意的更新是，针对 Qwen2.5-Coder-3B-Instruct-1.5 的校准实验显示，低精度量化（如 q2、q3）导致性能严重下降，而 q4 版本则保持了与原始模型相当的精度。此外，Gemma4 模型在特定硬件配置上遭遇崩溃，引发了对 GGML 调度器最大输入限制的讨论。

# 版本发布

无新版本发布。

# 社区热点 Issues

## 1. Gemma4:e2b 启动崩溃

**链接：** [Issue #16506](https://github.com/ollama/ollama/issues/16506)
**重要性：** 该 issue 报告了 Gemma4:e2b 模型在启动时立即崩溃，并显示 "GGML_ASSERT(n_inputs < GGML_SCHED_MAX_SPLIT_INPUTS) failed" 错误。这表明在当前硬件或配置下，模型无法分配足够的计算资源进行推理。
**社区反应：** 社区成员积极讨论可能的解决方案，包括降低量子化级别或调整计算图结构来减少输入数量。部分用户建议将 MAX_SPLIT_INPUTS 硬编码为 1 作为一个临时回避方法，但尚未找到通用修复。

## 2. Qwen2.5-Coder-3B-Instruct-1.5 校准结果

**链接：** [Issue #18352](https://github.com/ollama/ollama/issues/18352)
**重要性：** 此校准实验对比了不同量子化级别的表现。结果显示，q2 和 q3 级别在复杂代码理解任务（如 Code-Understanding）上的表现极差，甚至不如随机猜测，而 q4 级别则保持了与原始模型相当的性能。
**社区反应：** 实验结果促使社区重新评估了低精度量化的适用性，并强调在选择量子化级别时需权衡存储效率与精度损失。

## 3. 删除部分下载的模型

**链接：** [Issue #1599](https://github.com/ollama/ollama/issues/1599)
**重要性：** 许多用户在下载超大模型时遇到了带宽限制或磁盘空间问题，需要暂停或取消下载。然而，当前的客户端似乎没有提供直接删除部分下载文件的指令，迫使用户只能下载后再删除，造成浪费。
**社区反应：** 用户纷纷支持添加一个 "pause" 或 "remove" 功能，以便在下载过程中停止并清理临时数据，提高资源利用效率。

## 4. 新模型请求：Ornith、Longcat 2.0 等

**链接：** [Issue #17100](https://github.com/ollama/ollama/issues/17100)
**重要性：** 随着 100B+ 参数模型的兴起，用户希望在 Ollama 云平台上访问这些前沿技术。
**社区反应：** 社区对新模型的期待很高，但也有人建议先优化现有模型的运行效率，再扩展支持范围。

## 5. 嵌入请求下的零向量 bug

**链接：** [Issue #17878](https://github.com/ollama/ollama/issues/17878)
**重要性：** 该 issue 报告了一个严重bug：在持续的嵌入负载下，服务器开始返回全为零的矢量，但响应却是 HTTP 200 且令牌使用数合理。这意味着发生了静默失败，用户无法通过标准的错误码或日志来诊断问题。
**社区反应：** 开发者正在分析内存管理和锁竞争，试图找出在并发读取下导致数据清零的原因。

## 6. Vulkan 后端内存分配失败

**链接：** [Issue #18272](https://github.com/ollama/ollama/issues/18272)
**重要性：** 使用 AMD iGPU 的用户报告，在加载 66 GB 模型时，Vulkan 后端因 "Not enough memory for command submission" 而失败。这表明当前内存分配策略无法有效地利用共享的 GPU 资源。
**社区反应：** 社区建议尝试增加虚拟内存（swap）或检查系统内存页的大小配置，但最终需要的是对 Ollama 的内存调度优化。

## 7. 配置文件支持服务器设置

**链接：** [Issue #11076](https://github.com/ollama/ollama/issues/11076)
**重要性：** 目前，Ollama 的网络绑定和其他服务器设置只能通过环境变量进行配置，这对于需要在同一机器上运行多个实例或进行快速配置更改的用户来说不够灵活。
**社区反应：** 用户广泛支持添加 INI 或 YAML 格式的配置文件，以方便集中管理和版本控制服务器配置。

## 8. Codex-App 浏览器信任问题

**链接：** [Issue #16177](https://github.com/ollama/ollama/issues/16177)
**重要性：** 使用 `ollama launch codex-app` 时，内嵌的浏览器会失去与 OpenAI 服务的信任，无法进行网页浏览。这限制了 Codex-App 的可用性，因为它无法在没有浏览器访问的情况下进行网页分析。
**社区反应：** 用户建议手动编辑信任列表或使用第三方认证插件作为临时解决方案，但期待 Ollama 官方修复安装程序以正确初始化权限。

## 9. MLX 运行器缓存截断问题

**链接：** [Issue #18267](https://github.com/ollama/ollama/issues/18267)
**重要性：** 在使用 MLX 硬件加速时，前缀缓存的恢复总是被截断到小于 8192 的倍数。这导致每次冷启动都需要重新计算额外的几个 token，造成固定的 17-27 秒延迟。
**社区反应：** 开发者意识到这是一个对齐或整数精度问题，需要在计算缓存大小或恢复偏移量时进行微调，以确保整个前缀都被有效地缓存。

## 10. Radeon 780M Vulkan 回归

**链接：** [Issue #17748](https://github.com/ollama/ollama/issues/17748)
**重要性：** 从 v0.32.10 开始，Radeon 780M 的用户在尝试运行较大模型时，Vulkan 后端会因 "DeviceLost" 错误而失败。更小模型仍然可以运行，表明问题与资源管理或命令调度有关。
**社区反应：** 用户被建议回滚到 v0.32.9，而开发者正在检查 Vulkan 扩展使用和资源配额是否与该 specific 更新有关。

# 重要 PR 进展

## 1. 修复 ChatGPT 模型选择器间距

**链接：** [PR #18347](https://github.com/ollama/ollama/pull/18347)
**内容：** 调整了 ChatGPT 模型选择器的内边距和芯片间隔，使它们在换行时保持一致性，改善了视觉布局。
**状态：** 已合并。

## 2. Propagate Cloud Stream 失败

**链接：** [PR #18351](https://github.com/ollama/ollama/pull/18351)
**内容：** 修正了 proxy 在复制 upstream 响应时，把部分失败当做正常结束处理的问题。更新后的逻辑使用 `http.ErrAbortHandler` 来传播非客户端的 stream 失败，正确通知用户响应被终止。
**状态：** 打开中。

## 3. 支持独立命名的函数输出

**链接：** [PR #18348](https://github.com/ollama/ollama/pull/18348)
**内容：** 更改了 compaction 的逻辑，使其能够接受没有 call_id 的独立 function_call_output 项目，这些项目通常用于手递手操作。
**状态：** 已合并。

## 4. 基于实际日志设备名的 VRAM 键

**链接：** [PR #18350](https://github.com/ollama/ollama/pull/18350)
**内容：** 修复了在多 GPU 系统中，资源分配和设备搜索不一致的问题。修改后，系统将基于 child-process 的实际运行位置（而非默认假设）进行 VRAM 键的设置。
**状态：** 打开中。

## 5. 等待已杀死的运行器退出

**链接：** [PR #18345](https://github.com/ollama/ollama/pull/18345)
**内容：** 在 MLX 运行器中，确保在关闭信号发送后真正等待进程退出，才开始读取下一个模型。这防止了在内存尚未释放时就开始新加载导致的冲突。
**状态：** 打开中。

## 6. 保留响应文本与工具调用

**链接：** [PR #18343](https://github.com/ollama/ollama/pull/18343)
**内容：** 更新了 Responses API，使其不再丢弃包含在工具调用之前的对话文本，同时确保了流式传输时的输出索引一致性。
**状态：** 打开中。

## 7. 保留大数值工具参数

**链接：** [PR #18341](https://github.com/ollama/ollama/pull/18341)
**内容：** 修复了将超出 int64 范围的大数当做无符号数处理，导致数据溢出的问题。更新后，这些数值会作为浮点数存储，并且增加了流式调用中的边界测试。
**状态：** 打开中。

## 8. 命名未找到的技能目录

**链接：** [PR #18020](https://github.com/ollama/ollama/pull/18020)
**内容：** 改进了错误消息，让用户在技能未被找到时，明确知道扫描了哪些目录。
**状态：** 已合并。

## 9. 删除 Full Access 中命名空间的升级

**链接：** [PR #18331](https://github.com/ollama/ollama/pull/18331)
**内容：** 在 Codex 的全访问模式下，移除那些需要权限升级才能执行的嵌套工具，这样用户可以直接运行命令而不需要经过繁琐的批准流程。
**状态：** 已合并。

## 10. 避免工具调用单分隔符导致的 panic

**链接：** [PR #17492](https://github.com/ollama/ollama/pull/17492)
**内容：** 添加了额外的检查，确保在处理转义值时，如果只存在一个分隔符，不会触发数组越界的 panic。
**状态：** 打开中。

# 功能需求趋势

从最近的讨论来看，社区在以下几个方面有着明显的需求增长：
*   **模型校准与优化：** 用户迫切需要能够运行超低精度模型的硬件支持，同时要求更高的校准精度来判断哪些量化级别是可以接受的。
*   **资源管理：** 随着模型尺寸的增长，对 VRAM 的精确跟踪和动态分配成为了热点，避免因分配表错误而导致的加载失败。
*   **用户体验改善：** 无论是添加配置文件还是提供删除/暂停下载的功能，都反映出用户对更友好、更灵活的命令行和界面操作的需求。
*   **扩展模型库：** 社区正在积极推动将最新的 100B+ 模型（如 Ornith、Longcat 2.0）集成到云平台上，扩大可访问的 AI 资源。

# 开发者关注点

开发者反馈中反复出现以下几个痛点：
*   **交叉平台兼容性：** 许多 bug 仅在特定硬件（如 AMD iGPU）或操作系统配置下出现，这要求开发团队进行更广泛的测试覆盖。
*   **日志与诊断：** 现有的日志系统不够详细，无法帮助用户快速诊断静默失败（如全零向量），这导致调试过程漫长且低效。
*   **API 稳定性和一致性：** 在更新 API（如 /v1/messges）兼容性时，确保旧有客户端仍然可以正常运行，避免引入突发性的不兼容性。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

# llama.cpp 社区技术分析日报
**日期：** 2026-09-10

## 1. 今日速览
今日 llama.cpp 社区主要聚焦于**多后端性能的深度优化**，特别是针对 Vulkan 和 CUDA 架构在新型硬件（如 RDNA4、RTX 50系列）上的表现。同时，社区正积极推进对 **Qwen 3.8** 和 **GLM-5.3 Flash** 等前沿模型的适配，并针对 MoE（混合模型）的显存管理策略进行了关键性修复。

---

## 2. 版本发布
*   **b10883**: 
    *   **Vulkan 优化**: 引入 spec constant 处理矩阵乘法 A-type，并优化了 `mul_mm` 形状映射。
    *   **稳定性修复**: 修复了 cm2 规格常量及绑定问题，整合了共享内存（shmem）表。
*   **b10881**:
    *   **Vulkan 兼容性**: 针对 Intel GPU，将 `FILL` 任务负载转换为 2D 分布，以规避 `maxComputeWorkGroupCount` 限制。
*   **b10873**:
    *   **API 调整**: `llama_sampler_chain_n` 返回类型统一为 `int32_t`。
*   **b10877**:
    *   **CUDA 性能**: 针对 RDNA3 架构优化了 MoE 模型的 MMQ N-tiles 尺寸路由逻辑。
*   **b10876**:
    *   **CUDA 编译控制**: 将 `GGML_FA_ALL_QUANTS` 替换为 `GGML_FA_QUANTS`，允许更精细的运行时量化组合编译控制。
*   **b10875**:
    *   **弃用警告**: 正式废弃 `--mmap`|`mlock`|`dio` 参数。
*   **b10871**:
    *   **Vulkan 加速**: 新增专用的 `iq4_xs` 矩阵-向量 Shader，在 RDNA4 上使 Token 生成速度提升了约 6-17%。

---

## 3. 社区热点 Issues (Top 10)
1.  **#9493 - RDMA 支持请求** (21评论): 开发者请求为 RPC 后端引入 RDMA 支持，以提升大规模分布式推理的带宽。
2.  **#9289 - `libllama` API 路线图** (13评论): 创始人 ggerganov 要求维护公共 API 变更日志，确保依赖该库的第三方项目能跟进。
3.  **#27953 - CUDA 显存缓冲区分配 Bug** (12评论): 在多 GPU 环境下，存在不必要的计算 缓冲区分配，可能导致显存浪费或崩溃。
4.  **#27330 - RTX 5090 CUDA Graphs 挂起** (6评论): 在 5090 (sm_120) 上使用 CUDA Graphs 时会导致 watchdog 报错，目前临时规避方案是设置 `GGML_CUDA_DISABLE_GRAPHS=1`。
5.  **#28239 - SYCL 内存查询失效** (7评论): 运行 Qwen 3.8-Next 时，SYCL 后端的 `free_memory` 查询不可用。
6.  **#28441 - Metal 音频损坏** (5评论): 在 M5 Max 上，高负载下运行 Qwen2.5-Omni 出现间歇性音频数据损坏。
7.  **#27922 - GLM5.3 支持请求** (4评论): 社区急需对最新的 GLM5.3 Flash 模型提供支持。
8.  **#28614 - DSpark MoE 崩溃** (5评论): LFM2.5-8B-A1B (MoE) 模型在 `graph_reserve` 阶段崩溃，而密集模型未受影响。
9.  **#27155 - DeepSeek V4 显存泄漏** (5评论): 使用 DSpark 运行 DeepSeek V4 时，每次 PP+TG 循环显存会增加约 10MB，直至 OOM。
10. **#28635 - Vulkan 管道创建失败** (5评论): 在 Adreno 830 驱动上（非 Mesa 驱动），`mul_mat_vec_q4_k_f32` 导致 `VK_ERROR_UNKNOWN`。

---

## 4. 重要 PR 进展 (Top 10)
1.  **#27773 - GLM-5.3 Flash 适配**: 引入 GLM-5.3 Flash 320B 混合模型支持，包含视觉能力。
2.  **#25342 - GigaChat 3.5 转换**: 为 432B MoE 模型提供 GGUF 转换，支持 DeepSeek-V3 风格架构。
3.  **#28528 - Vulkan Stream-k 优化**: 针对 cm2 后端实现 `stream-k` 算法，将 256 个 K 均匀分配到所有 SM。
4.  **#28671 - CUDA Radix-select 优化**: 在 CUB 不支持 `DeviceTopK` 时，使用基数选择代替全排序，以提升宽行（wide rows）性能。
5.  **#27754 - GLM-5-Next 适配**: 针对 GLM-5-Next 321B 混合模型提供支持。
6.  **#28668 - Qwen XML 工具参数校验**: 强制在 XML 工具调用中执行 `enum` 约束，防止非法字符串注入。
7.  **#28670 - SYCL Radix-select**: 解决 SYCL 在处理 Qwen3.8 高 K 值 (2048) 时强制回退到 CPU 的问题。
8.  **#25940 - RDNA4 HIP 优化**: 针对新一代显卡优化 `Q6_K` 和 `Q2_K` 量化，并更新 MMQ 条件。
9.  **#28669 - 模型代码清理**: 移除旧模型中已不再需要的 `if-else` 分支，优化代码维护性。
10. **#12552 - Hugepages 支持**: 尝试支持 2MB 或 1GB 的大页映射，以显著提升大模型的加载速度。

---

## 5. 功能需求趋势
*   **极致硬件深度适配**: 社区对 NVIDIA **RTX 50系列**、AMD **RDNA4** 以及 **Apple M5 系列**的原生性能优化需求极高，开发者在关注特定架构的 Shader 优化。
*   **MoE 架构精细化管理**: 随着 DeepSeek-V3、GigaChat 等模型流行，如何高效管理 MoE 的专家缓存（Expert Cache）和显存淘汰策略（Eviction Policy）成为核心点。
*   **分布式推理演进**: 对 **RDMA** 的支持显示出 llama.cpp 正在从单机推理工具向高性能集群推理后端演进的趋势。
*   **多模态模型稳定性**: 针对 Qwen2.5-Omni 等多模态模型，开发者在关注 Metal 和 Vulkan 后端处理音频/视觉流时的稳定性。

---

## 6. 开发者关注点
*   **显存泄漏监控**: DSpark（推测性解码）模式下的显存增长是目前用户的燃眉之急，需要更稳定的内存管理。
*   **API 稳定性**: 开发者高度关注 `libllama` 的 API 变动，希望有明确的变更日志防止破坏性更新。
*   **兼容性痛点**: 移动端（Adreno/Termux）的 Vulkan 驱动兼容性问题依然是 Bug 高发区。

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*