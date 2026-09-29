# AI CLI 工具社区动态日报 2026-09-30

> 生成时间: 2026-09-29 22:16 UTC | 覆盖工具: 12 个

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

1. **Claude Code v2.1.285** — 新增 `CLAUDE_CODE_DISABLE_WEB_FETCH` 环境变量（彻底关闭 WebFetch 工具）、`claude --desktop` 桌面端唤起入口与 `claude plugin configure` 插件配置子命令。同时合并 sec-default 系列 PR（#98080、#98083、#97241），将安全策略裁决权从用户级插件上收到组织级 managed settings。
   https://github.com/anthropics/claude-code

2. **OpenAI Codex v0.159.1** — GPT-6.1 Sol 正式成为默认模型，同步加入 Amazon Bedrock Mantle 与 Runtime 目录。v0.159.0 引入 `instant_interrupt` 功能，允许用户在模型响应期间用新输入接管 Codex。
   https://github.com/openai/codex

3. **Pi v0.99.0 / v0.99.1** — v0.99.0 落地 Codemode + MCP，模型可在 QuickJS wasm VM 中编写 JavaScript 并行调用工具；v0.99.1 引入 GPT-6.1 Sol 并将其设为 OpenAI Codex 默认模型。该版本同时带来 ChatGPT 登录打包回归（#10182）和 OAuth 授权页 invalid_client 故障（#10184）。
   https://github.com/earendil-works/pi

4. **ComfyUI v0.38.0** — 改进 Qwen Image 2.1 KV Cache 位置逻辑，编译 Qwen Image 2.1 Transformer 块以加速推理，新增模型文件可自带注意力类型声明。同日修复 `_gated_residual` 原地更新破坏训练路径的问题（#16653/#16654）。
   https://github.com/Comfy-Org/ComfyUI

5. **GitHub Copilot CLI v1.0.90-1 至 v1.0.90-5** — 五日内密集发布五个补丁版本。新增 `--mcp-github-auth`（将 GitHub 账号鉴权限定到已批准 MCP 服务器源）和会话级只读目录授权；修复 MCP 工具调用卡死、模型选择器误报 "No supported model available" 及 OAuth 令牌复用问题。
   https://github.com/github/copilot-cli

6. **Ollama v0.35.1-rc0** — 支持单次响应最多十次 web search。System One 模型支持集中落地：Modelfile 引入 `CAPABILITY` 能力声明（#18708），MLX 后端添加 System One 支持（#18701），官方文档新增决策指南与 API 参考（#18702）。
   https://github.com/ollama/ollama

7. **llama.cpp b11262** — 在 AVX512-FP16 上将 f16 点积累加改为 f32，修复 FP16 累加溢出导致 attention 输出异常的问题（此前 #29530 因此被回滚）。同批 b11254 修复 `graph_inputs` 收集逻辑，解决 pipeline parallelism 下输入张量缺失隐患。
   https://github.com/ggml-org/llama.cpp

8. **Qwen Code v0.24.7** — CLI、Desktop、TypeScript SDK v0.1.17 同步发布。新增 Hosted 工具审批（D6a，#13071）与只读搜索工具接纳（#13030），Managed Agent 架构持续推进。VSCode IDE Companion 0.24.7 发布流水线失败（#13028）。
   https://github.com/QwenLM/qwen-code

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（截至 2026-09-30）

> **数据说明**：给定 PR 列表中的“评论数”均为 `undefined`，且展示的 PR 状态均为 `OPEN`；Issues 评论数完整。因此 PR 排行无法严格按评论数排序，以下按 **关联 Issue 热度、最近更新时间、功能影响面** 综合整理。

---

## 1. 热门 Skills 排行（PR）

| 排名 | Skill / PR | 功能与讨论热点 | 状态 |
|---|---|---|---|
| 1 | **mcp-builder：支持 mcp>=2 与自定义 headers** — [PR #1742](https://github.com/anthropics/skills/pull/1742) | 修复 `mcp>=2.0.0` 中 `streamable_http_client` 重命名及 headers 配置问题，关联 [#1668](https://github.com/anthropics/skills/issues/1668)、[#1390](https://github.com/anthropics/skills/issues/1390)。MCP 生态兼容性是当前高频痛点。 | OPEN |
| 2 | **skill-creator：隔离 trigger evals、修复 Windows/runtime 失败** — [PR #1298](https://github.com/anthropics/skills/pull/1298) | 解决 trigger 评测误报、Windows 下 subprocess pipe 选择失败、runtime failure 被误判为非触发等问题，直接呼应 [#1383](https://github.com/anthropics/skills/issues/1383)、[#556](https://github.com/anthropics/skills/issues/556)。 | OPEN |
| 3 | **claude-api：标记 4 个退役模型 ID** — [PR #1607](https://github.com/anthropics/skills/pull/1607) | 更新 `models.md`，修正已退役模型仍被列为 Legacy/Deprecated 的问题，Fixes [#1603](https://github.com/anthropics/skills/issues/1603)。与 [#1487](https://github.com/anthropics/skills/issues/1487) 的上下文窗口问题同属 claude-api 维护热点。 | OPEN |
| 4 | **docx 稳定性修复系列** — [PR #1792](https://github.com/anthropics/skills/pull/1792)、[PR #1734](https://github.com/anthropics/skills/pull/1734)、[PR #541](https://github.com/anthropics/skills/pull/541) | 覆盖 LibreOffice 超时误报成功、孤立评论检测、`w:id` 与书签冲突导致文档损坏。文档类 Skill 的可靠性与 OOXML 兼容性是长期焦点。 | OPEN |
| 5 | **document-typography：生成文档的排版质检** — [PR #514](https://github.com/anthropics/skills/pull/514) | 解决 AI 生成文档中的孤词换行、寡行段落、编号错位等排版问题，属于“文档质量层”的通用增强。 | OPEN |
| 6 | **skill-quality-analyzer / skill-security-analyzer** — [PR #83](https://github.com/anthropics/skills/pull/83) | 两个元 Skill：从结构、文档、示例、资源等维度做质量分析；同时引入安全分析。呼应社区对 Skill 治理与安全扫描的需求。 | OPEN |
| 7 | **testing-patterns：完整测试栈指南** — [PR #723](https://github.com/anthropics/skills/pull/723) | 覆盖 Testing Trophy、单元测试 AAA、React 组件测试等，是社区对“测试生成/测试规范”需求的直接体现。 | OPEN |
| 8 | **blast-radius：破坏性写入前检查清单** — [PR #1776](https://github.com/anthropics/skills/pull/1776) | 面向批量删除、权限回收、群发邮件等高风险操作，强调“行正确”与“世界正确”的差距，属于安全/治理类新 Skill。 | OPEN |

**补充高关注候选**：  
- [PR #1703 md2video-audio](https://github.com/anthropics/skills/pull/1703)：Markdown 转 MP4 + 语音旁白。  
- [PR #525 pyxel](https://github.com/anthropics/skills/pull/525)：复古游戏开发与 headless 验证。  
- [PR #822 AWT](https://github.com/anthropics/skills/pull/822)：AI 驱动 E2E 浏览器测试。  
- [PR #1771 proofcore-contract-auditor](https://github.com/anthropics/skills/pull/1771)：Solidity/Rust 智能合约静态审计。

---

## 2. 社区需求趋势（来自 Issues）

### ① 安全与信任边界：最高热度
- [Issue #492](https://github.com/anthropics/skills/issues/492)：社区 Skill 以 `anthropic/` 命名空间分发，存在仿冒官方、提权信任风险。**43 评论、2 👍**，为全列表最高。
- [Issue #1394](https://github.com/anthropics/skills/issues/1394)：skill-creator eval-viewer 的 `escapeHtml` 非 attribute-safe，存在 display-path XSS。
- [Issue #1175](https://github.com/anthropics/skills/issues/1175)：在 SKILL.md 中编写 SharePoint 权限逻辑的安全与上下文窗口担忧。

**趋势**：社区希望官方明确命名空间、签名/来源校验、Skill 安全扫描与权限边界。

### ② 组织级共享与分发
- [Issue #228](https://github.com/anthropics/skills/issues/228)：希望 Claude.ai 支持组织内 Skill 共享库/直链，而非手动下载 `.skill` 再上传。**16 评论、8 👍**。
- [Issue #189](https://github.com/anthropics/skills/issues/189)：`document-skills` 与 `example-skills` 安装内容重复，造成上下文重复。**6 评论、9 👍**。

**趋势**：Skill 的“发现—分发—版本管理”正在从个人文件走向团队资产。

### ③ 评测与触发可靠性
- [Issue #556](https://github.com/anthropics/skills/issues/556)：`run_eval.py` 中 `claude -p` 从不触发 Skill，触发率 0%。**12 评论、7 👍**。
- [Issue #1383](https://github.com/anthropics/skills/issues/1383)：skill-creator 的 benchmark 布局不匹配、delta 反转、Windows 触发评测、skill shadowing 等 6 个可复现问题。
- [Issue #1390](https://github.com/anthropics/skills/issues/1390)：mcp-builder `evaluation.py` 对真实 MCP server 全部伪造 tool error，评分 0/N。
- [Issue #202](https://github.com/anthropics/skills/issues/202)：skill-creator 更像开发文档而非可执行 Skill，token 效率低。

**趋势**：社区不满足于“能写 Skill”，更关注“Skill 能否被稳定触发、正确评测、跨平台运行”。

### ④ 上下文与性能
- [Issue #1487](https://github.com/anthropics/skills/issues/1487)：`claude-api` 单次工具调用注入约 156k tokens，直接耗尽上下文窗口。
- [Issue #1175](https://github.com/anthropics/skills/issues/1175)：SPO 文档处理同样涉及上下文与权限控制。

**趋势**：Skill 的按需加载、渐进披露、token 预算是核心工程诉求。

### ⑤ 新 Skill 方向提案
- [Issue #412](https://github.com/anthropics/skills/issues/412)：`agent-governance` — 策略执行、威胁检测、信任评分、审计轨迹。
- [Issue #1329](https://github.com/anthropics/skills/issues/1329)：`compact-memory` — 用符号化记法压缩 agent 持久状态。
- [Issue #1385](https://github.com/anthropics/skills/issues/1385)：Reasoning Quality Gate Pipeline — 任务前校准、对抗评审、交付验证。

**趋势**：从“工具型 Skill”扩展到“Agent 治理、记忆管理、推理质量”等元能力。

### ⑥ 平台与办公兼容
- [Issue #29](https://github.com/anthropics/skills/issues/29)：Skills 与 AWS Bedrock 的配合方式不清晰。
- docx/pdf/odt 相关 PR 与 Issue 持续活跃，说明办公文档仍是最大使用场景之一。

---

## 3. 高潜力待合并 Skills

> 以下 PR 均为 `OPEN`。给定数据无 PR 评论数，故按“最近更新 + 关联 Issue 热度 + 修复确定性”筛选，可能近期落地。

| 潜力 | PR | 理由 |
|---|---|---|
| 高 | [PR #1742](https://github.com/anthropics/skills/pull/1742) mcp-builder mcp>=2 | 2026-09-29 更新，Fixes #1668，MCP 兼容性刚需 |
| 高 | [PR #1607](https://github.com/anthropics/skills/pull/1607) claude-api 退役模型 | 2026-09-28 更新，Fixes #1603，改动明确、低风险 |
| 高 | [PR #1298](https://github.com/anthropics/skills/pull/1298) skill-creator trigger evals | 关联 #1383/#556 高热度评测问题，影响 skill-creator 核心流程 |
| 中高 | [PR #1681](https://github.com/anthropics/skills/pull/1681) package_skill.py 直接执行 | 2026-09-27 更新，修复 `ModuleNotFoundError` 与文档路径 |
| 中高 | [PR #1792](https://github.com/anthropics/skills/pull/1792) docx LibreOffice 超时 | 2026-09-25 更新，修复“超时却报成功”的严重误导 |
| 中 | [PR #1734](https://github.com/anthropics/skills/pull/1734) 孤立 docx 评论检测 | 2026-09-25 更新，补足 docx 评论处理 |
| 中 | [PR #525](https://github.com/anthropics/skills/pull/525) pyxel | 2026-09-22 更新，垂直游戏开发场景 |
| 中 | [PR #723](https://github.com/anthropics/skills/pull/723) testing-patterns | 2026-09-21 更新，测试方向需求明确 |
| 中 | [PR #1776](https://github.com/anthropics/skills/pull/1776) blast-radius | 2026-09-18 更新，安全/治理类新 Skill |
| 中 | [PR #1771](https://github.com/anthropics/skills/pull/1771) proofcore-contract-auditor | 2026-09-16 更新，Web3 审计垂直场景 |
| 中 | [PR #1703](https://github.com/anthropics/skills/pull/1703) md2video-audio | 2026-09-15 更新，Markdown 转视频零成本方案 |

---

## 4. Skills 生态洞察

**一句话总结**：社区当前最集中的诉求，不是“再增加更多 Skill”，而是让 Skills **可被可信地发现与共享、可稳定触发与评测、可跨平台运行并控制上下文成本**——即从“可用”走向“可治理、可规模化”。

---

# Claude Code 社区动态日报 · 2026-09-30

> 数据来源：github.com/anthropics/claude-code（统计窗口：过去 24 小时）

---

## 1. 今日速览

- 发布 **v2.1.285**，新增 WebFetch 全局开关、`claude --desktop` 桌面端唤起入口与 `claude plugin configure` 子命令，延续"桌面端 + 插件体系"两条主线。
- 社区 Issue 呈现明显的 **两极分化**：一边是安全过滤器误报（cyber / content filter）与权限模型相关的真实痛点讨论，另一边是大量 `invalid / github-integration` 的无效提交刷屏（过去 24 小时内至少 10 条被直接关闭）。
- PR 侧集中爆发 **sec-default 安全默认值系列**（#98080 / #98083 / #97334 / #97241），核心方向是"组织级安全策略优先于个人插件"。

---

## 2. 版本发布

### v2.1.285
| 更新项 | 说明 |
|---|---|
| `CLAUDE_CODE_DISABLE_WEB_FETCH` | 新增环境变量，可彻底关闭 WebFetch 工具，便于企业/离线/合规场景 |
| `claude --desktop` | 可在当前目录直接打开 Claude 桌面应用，支持 `--continue` / `--resume <id>` 恢复指定会话 |
| `claude plugin configure <plugin>` | 新增插件配置入口，插件体系向可管理化推进 |

**解读**：三个改动分别对应"可控性（关闭工具）"、"入口融合（CLI ↔ 桌面端）"、"生态治理（插件配置）"，是典型的平台化迭代节奏。

---

## 3. 社区热点 Issues（Top 10）

### ① #77482 [OPEN] 远程会话 GitHub push 权限 403
https://github.com/anthropics/claude-code/issues/77482
- 仓库已作为 source 添加，但在 Claude Code Remote（cowork / web）会话中仍只读，push 返回 403。评论 4，👍1。
- **为何重要**：远程会话的 GitHub 写权限是协作场景的地基，长期 open + `stale` 标签说明修复缓慢。

### ② #75523 [OPEN] 桌面端"保持侧栏常开"设置缺失（👍5，本批最高）
https://github.com/anthropics/claude-code/issues/75523
- 用户指出 `Ctrl+B` 固定侧栏的状态既不可发现也无文档，希望提供持久化设置。
- **为何重要**：典型"功能已存在但不可发现"的 UX 债务，投票数最高，反映桌面端体验诉求强烈。

### ③ #80214 [OPEN] 沙箱 allowRead 被父路径 `--tmpfs` 遮蔽
https://github.com/anthropics/claude-code/issues/80214
- `allowRead` 重新绑定目录后，被后续父路径上的 `--tmpfs` 覆盖。带 `reproduced` 标签。
- **为何重要**：沙箱文件系统语义正确性直接影响权限隔离的可信度，属底层安全问题。

### ④ #79424 [OPEN] `.worktreeinclude` 前导 `**/` 静默失效
https://github.com/anthropics/claude-code/issues/79424
- `**/.claude/skills/*-local/` 类模式在 worktree 拷贝时匹配不到任何文件且无告警；去掉 `**/` 则正常。
- **为何重要**：gitignore 语义不一致 + 静默失败，容易造成"配置看起来生效实则丢文件"。

### ⑤ #96142 [CLOSED] 子代理禁用 spawn 限制未生效，导致额度被吞
https://github.com/anthropics/claude-code/issues/96142
- 被禁止派生子代理的 subagent 自我 fork，单日几乎耗尽 Max 20x 订阅额度。
- **为何重要**：Agent 编排的权限约束 + 成本控制双重问题，直接造成真金白银损失。

### ⑥ #96109 [CLOSED] 子线程以未决问题结束却进入 idle，问题未回传主线程
https://github.com/anthropics/claude-code/issues/96109
- 线程结束时带 open question，却直接 idle，主线程收不到该问题，用户仍需"盯盘"。
- **为何重要**：多 Agent 协作的可靠性缺口，削弱"并行线程"的核心价值。

### ⑦ #88614 [OPEN] 安全过滤器误报：Android 设备检测被拦截
https://github.com/anthropics/claude-code/issues/88614
- `cyber` 类误判，severity 为 session-halted（授权工作被中断），可由 Request ID 复现，Opus 4.8 触发。
- **为何重要**：企业安全研究场景被"误伤"，且属服务端可复现问题，影响专业用户留存。

### ⑧ #88613 [OPEN] 安全过滤器误报：设备流量分析
https://github.com/anthropics/claude-code/issues/88613
- 与 #88614 同源同作者，分析未加密 HTTP 流量时被拦截。
- **为何重要**：两条同主题 Issue 并列说明这不是偶发个例，而是策略粒度问题。

### ⑨ #96077 [CLOSED] Auto 模式分类器超时"失败即拒绝"，即便有显式 allow 规则
https://github.com/anthropics/claude-code/issues/96077
- 分类器超时导致工具调用被阻塞，显式允许规则也无法绕过。
- **为何重要**：fail-closed 策略在超时场景下变成可用性事故，权限系统设计需引入降级路径。

### ⑩ #97460 [CLOSED] 连接器显示绿色但 Project 中无法读取所选文件内容
https://github.com/anthropics/claude-code/issues/97460
- 私有仓库非默认分支文件可被选择器展示，但内容不可访问。
- **为何重要**：GitHub 连接器状态与实际能力不一致，是集成可信度问题。

> **另需注意**：本批 50 条中，`invalid / github-integration` 类无效提交（#97514、#97513、#97512、#97509、#97499、#97468、#97455、#97419 等）占比极高，多为测试内容或乱码，属于连接器表单入口被滥用的信号；同时内容过滤器误报形成小集群（#96160、#96034、#96031），#96102 反馈 Opus/Sonnet 不可用仅剩 Haiku。

---

## 4. 重要 PR 进展（Top 10）

| PR | 状态 | 内容与意义 |
|---|---|---|
| [#98080](https://github.com/anthropics/claude-code/pull/98080) | CLOSED | **sec-default：用户级插件不能覆盖 settings 的 deny 规则**。插件答 allow/ask 时，deny 判定优先；组织可在 managed settings 中退出该行为。权限体系的关键收敛。 |
| [#98083](https://github.com/anthropics/claude-code/pull/98083) | CLOSED | 新增托管选项 `allowManagedModsOnly`，组织可只允许自家 mod，拒绝个人安装的 mod。企业治理能力补齐。 |
| [#97334](https://github.com/anthropics/claude-code/pull/97334) | OPEN | sec-default：会话保留的行"继续越过 user tier"，依赖引擎的 `session.append` 事件。当前 test 红是构造性的，需等 CLI 版本携带该事件。 |
| [#97241](https://github.com/anthropics/claude-code/pull/97241) | CLOSED | sec-default：组织启用后，个人插件不再影响 system prompt 的 sections 组成（`prompt.compose`）。 |
| [#97293](https://github.com/anthropics/claude-code/pull/97293) | OPEN | mods 声明新增 `process.run` 的截断标志（`isStdoutTruncated` / `isStderrTruncated`）与 `$.fs.list` 的 `mtimeMs`，待 npm CLI 支持后启用。 |
| [#96434](https://github.com/anthropics/claude-code/pull/96434) | OPEN | **security-guidance：阻止审查器读取被拒/敏感文件**。修复 Stop-hook、commit/push 审查通过 `git diff` 把 `secrets.yaml` 等带入模型上下文的问题（Fixes #96276）。 |
| [#97952](https://github.com/anthropics/claude-code/pull/97952) | OPEN | CI 安全加固：为 `claude-issue-triage.yml`、`claude-dedupe-issues.yml`、`claude.yml` 引入出口防火墙 runner 等三项措施。 |
| [#94847](https://github.com/anthropics/claude-code/pull/94847) | OPEN | diff 面板仅在确实有文件可列时自动打开，修复仓库外写入/忽略文件/跨 worktree 时弹出空白面板。 |
| [#98018](https://github.com/anthropics/claude-code/pull/98018) | CLOSED | 回滚 #96363、#96364：agents-md 与 diff 两个 mod 恢复既有行为。 |
| [#96364](https://github.com/anthropics/claude-code/pull/96364) | CLOSED | agents-md：自动分页的嵌套 `AGENTS.md` Read 不再计为"已投递"。 |

**整体判断**：本批 PR 由同一作者（poteat）主导的 sec-default 系列构成主线，方向明确——**把安全策略的裁决权从用户级插件上收到组织级 managed settings**。

---

## 5. 功能需求趋势

从本批 Issues 的标签与内容可提炼出六条主线：

1. **权限与安全策略精细化**（`area:permissions`、sec-default 系列 PR）
   deny 优先级、托管策略、沙箱文件系统语义、Auto 模式分类器超时降级。
2. **安全过滤器误报治理**（`area:security`、`cyber`）
   合法安全研究、设备检测、流量分析被拦截；同时出现普通业务 prompt 被内容过滤误伤。
3. **Agent 编排与子代理可靠性**（`area:agents`）
   禁止 spawn 未生效、线程未决问题不回传主线程，指向多 Agent 协作的可控性缺口。
4. **桌面端 / UI 体验**（`area:desktop`、`area:ui`）
   侧栏持久化、桌面端入口（`claude --desktop`）、Read Aloud 语音区域设置（#97485）。
5. **GitHub 集成质量**（`github-integration`）
   连接器状态与能力不一致、安装重定向失败、私有仓库非默认分支读取，同时伴随大量无效表单提交。
6. **成本与用量控制**（`area:cost`）
   子代理异常 fork 耗尽订阅额度、工具执行失败导致消息数膨胀（#96042 提到"700 条消息完成一个语法点"）。

平台维度上，`platform:macos` / `platform:windows` / `platform:linux` 均有分布，Windows 桌面端与 Linux 沙箱类问题较集中。

---

## 6. 开发者关注点

- **误报即停工**：安全/内容过滤器误判被反复标注 `session-halted`，且集中在 Opus 4.8、2.1.27x–2.1.28x 版本区间。开发者要的不是"更宽松"，而是**可申诉、可复现、可绕过的分级机制**。
- **额度焦虑**：多起 Issue 围绕"额度被异常消耗"，尤其是子代理失控与工具调用冗余消息。成本可见性与硬上限是高频诉求。
- **配置静默失败**：`.worktreeinclude` 的 `**/` 前缀、`allowRead` 被 tmpfs 遮蔽，都属于"不报错但结果错"，比直接报错更消耗信任。
- **企业治理优先级上升**：sec-default 系列 PR 密集合并，说明组织级策略覆盖个人插件已成既定方向，使用插件体系的团队需关注兼容性变化。
- **协作链路可信度**：远程会话 GitHub 写权限、连接器绿标但内容不可读，都会让"AI 代我提交/读取"的关键路径失去可信度。
- **噪音治理**：`github-integration` 表单入口产生大量无效 Issue，建议维护方增加前置校验，否则会稀释真实 bug 的可见度。

---

*日报生成时间：2026-09-30 · 数据基于 anthropics/claude-code 公开仓库过去 24 小时动态*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 · 2026-09-30

> 数据来源：[github.com/openai/codex](https://github.com/openai/codex)

---

## 一、今日速览

1. **GPT-6.1 Sol 正式成为默认模型**：`rust-v0.159.1` 将 GPT-6.1 Sol 写入内置模型目录，并同步加入 Amazon Bedrock Mantle 与 Runtime 目录，同时设为默认及 provider 回退模型（[#49318](https://github.com/openai/codex/pull/49318)、[#49339](https://github.com/openai/codex/pull/49339)、[#49342](https://github.com/openai/codex/pull/49342)）。
2. **Windows 平台问题集中爆发**：daemon 引入后终端窗口闪烁、Remote Control 失效、CMD 窗口泛滥等多个高热度 Issue 同日更新，其中 [#48074](https://github.com/openai/codex/issues/48074) 已累积 115 条评论、137 个 👍，成为当日最热议题。
3. **0.160 / 0.161 alpha 线持续推进**：`rust-v0.160.0-alpha.3/6`、`rust-v0.161.0-alpha.1/2` 相继发布，预示下一轮正式版将带来 Bedrock 多智能体 V2 与 Ultra 推理能力。

---

## 二、版本发布

### rust-v0.159.1（正式版，稳定线补丁）
- **新增功能**：在 bundled catalog、Amazon Bedrock Mantle 与 Runtime 目录中引入 **GPT-6.1 Sol**，并将其设为默认模型。
- 关键 PR：[#49323](https://github.com/openai/codex/pull/49323)（0.159.1 回移植准备）、[#49342](https://github.com/openai/codex/pull/49342)（Bedrock 目录回移植）。
- 变更对比：[rust-v0.159.0...rust-v0.159.1](https://github.com/openai/codex/compare/rust-v0.159.0...rust-v0.159.1)

### rust-v0.159.0
- **`instant_interrupt`（可选开启）**：允许用户在模型响应或长时间 code-mode 调用期间用新输入“接管” Codex（[#48135](https://github.com/openai/codex/pull/48135)、[#48141](https://github.com/openai/codex/pull/48141)）。
- **全新会话界面**：紧凑欢迎屏 + 统一头部，并在回合前后偶尔展示使用提示（[#48513](https://github.com/openai/codex/pull/48513)、[#48562](https://github.com/openai/codex/pull/48562)、[#48352](https://github.com/openai/codex/pull/48352)）。

### 预发布（alpha）线
- `rust-v0.161.0-alpha.1` / `rust-v0.161.0-alpha.2`
- `rust-v0.160.0-alpha.3` / `rust-v0.160.0-alpha.6`

> 提示：alpha 版本号跳跃较大，说明 0.160/0.161 分支正在并行开发，正式版发布前建议生产环境继续停留在 0.159.x。

---

## 三、社区热点 Issues（Top 10）

| # | 标题 | 热度 | 为何重要 |
|---|---|---|---|
| 1 | [**#48074** Windows：安装 Codex daemon 后终端窗口在请求期间反复闪烁](https://github.com/openai/codex/issues/48074) | 115 评论 / 137 👍 | 当日绝对热点。daemon 架构引入后的严重回归，影响 Windows 上所有 CLI 请求的可视体验，社区情绪集中。 |
| 2 | [**#48043** Codex CLI 0.157.0 在 Windows 因 daemon 权限错误无法启动（0.156.1 正常）](https://github.com/openai/codex/issues/48043) | 36 评论 / 35 👍 | 阻塞性 bug，用户被直接挡在门外，且明确指向 daemon 迁移引入的权限回归。 |
| 3 | [**#49264** Windows：CLI 为每条 spawned command 闪出一个 Windows Terminal 窗口（app-server daemon 回归）](https://github.com/openai/codex/issues/49264) | 5 评论 / 3 👍 | 0.159.0 新报告，与 #48074 同源，说明该问题在最新稳定版仍未收敛。 |
| 4 | [**#49352** Codex CLI 在 Windows 11 打开大量 CMD 窗口](https://github.com/openai/codex/issues/49352) | 2 评论 / 2 👍 | 同一类“窗口闪现”问题的第三种表现（CMD 而非 Terminal），佐证这是平台级共性问题。 |
| 5 | [**#49362** Sol 6.1 未出现在 Codex 中](https://github.com/openai/codex/issues/49362) | 3 评论 / 4 👍 | 直接对应今日版本发布：模型目录更新后客户端可见性未同步，是发布后最典型的“最后一公里”问题。 |
| 6 | [**#48195** 建议将 `daemon_auto_start` 改为 opt-in](https://github.com/openai/codex/issues/48195) | 5 评论 / 12 👍 | 社区对“默认常驻后台、自动更新守护进程”的设计提出质疑，涉及信任与资源占用。 |
| 7 | [**#19265** Codex Desktop 后台 exec 间歇性删除 `~/.codex/skills/.system`](https://github.com/openai/codex/issues/19265) | 11 评论 / 6 👍 | 长期未解的**数据破坏类** bug，会静默导致系统技能（imagegen 等）失效，风险等级高。 |
| 8 | [**#24542** Desktop 远程代理反复拉起非受管 app-server，阻塞 daemon bootstrap](https://github.com/openai/codex/issues/24542) | 9 评论 / 3 👍 | 远程开发场景的关键链路故障，与 daemon 迁移强相关。 |
| 9 | [**#47416** Windows Remote Control 在 daemon 与前台模式下均失败](https://github.com/openai/codex/issues/47416) | 7 评论 | 尽管私有 socket ACL 合法仍无法启动，说明 Windows 远程控制在两条路径上都有缺陷。 |
| 10 | [**#23517** 请求增加“关闭自动滚动”设置](https://github.com/openai/codex/issues/23517) | 8 评论 / 11 👍 | 高频体验诉求，且有同类 Issue [#36390](https://github.com/openai/codex/issues/36390) 呼应，反映长回复阅读体验问题。 |

**其他值得留意的**：
- [#49378](https://github.com/openai/codex/issues/49378)：Intel x86_64 MacBook 安装包不再受支持（平台覆盖收缩）。
- [#43960](https://github.com/openai/codex/issues/43960)、[#48878](https://github.com/openai/codex/issues/48878)：Desktop 冷启动白屏/无限加载，仅 DevTools `Page.reload` 可解。
- [#48320](https://github.com/openai/codex/issues/48320)、[#48742](https://github.com/openai/codex/issues/48742)、[#49128](https://github.com/openai/codex/issues/49128)：Project 会话与 Recents 混淆，侧边栏信息架构被反复吐槽。

---

## 四、重要 PR 进展（Top 10）

**模型与目录（今日主线）**
1. [#49318](https://github.com/openai/codex/pull/49318) — 将 `gpt-6.1-sol` 加入 bundled catalog，赋予最高优先级，并更新旧版 Sol 描述。**今日版本发布的核心。**
2. [#49339](https://github.com/openai/codex/pull/49339) — 向 Bedrock Mantle / Runtime 目录添加 GPT-6.1 Sol 并设为默认与回退模型（Runtime 优先 `global.` 变体）。
3. [#49342](https://github.com/openai/codex/pull/49342) — 将上述变更回移植到 `release/0.159`，构成 0.159.1。
4. [#49345](https://github.com/openai/codex/pull/49345) — 在 Amazon Bedrock 上启用 **multi-agent V2 与 Ultra 推理**，保留目录声明的 `multi_agent_version`，不再强制 V1。
5. [#49369](https://github.com/openai/codex/pull/49369) — 更新 Bedrock GPT-6 Sol 目录测试期望，从 `MultiAgentVersion::V1` 改为 `V2`。

**运行时与稳定性**
6. [#49353](https://github.com/openai/codex/pull/49353) — 允许在保留“拒绝读取”策略的前提下执行已批准的文件系统提权（如更新 Git 元数据）。
7. [#49332](https://github.com/openai/codex/pull/49332) — 引入 `PendingRequestGuard`，取消的 exec-server RPC 请求立即清理，避免 pending map 泄漏。
8. [#49330](https://github.com/openai/codex/pull/49330) — 修复远端重连退避上限被重置导致 409 场景下快速重试风暴的问题。

**Windows 平台修复**
9. [#49325](https://github.com/openai/codex/pull/49325) — `CreateProcessWithLogonW` 遇到错误 1056 时重试一次，提升沙箱启动成功率。
10. [#49308](https://github.com/openai/codex/pull/49308) — 为 legacy Windows 沙箱的管道/非 TTY 进程启用 `CREATE_NO_WINDOW`，**直接针对窗口闪烁类问题**。

**其他有价值变更**
- [#49379](https://github.com/openai/codex/pull/49379)：在发现阶段预编译 Hook 正则匹配器，避免每次派发重复编译（性能）。
- [#49360](https://github.com/openai/codex/pull/49360)：通过 `ShellInvocation` 传递 shell 与 login 模式元数据，并上报 executor PATH 目录。
- [#49357](https://github.com/openai/codex/pull/49357)：粘贴多行文本时正确延续 Markdown 引用块 `> ` 前缀。
- [#49312](https://github.com/openai/codex/pull/49312)：Guardian 终止子智能体时通知父智能体，避免任务静默中断。
- [#49305](https://github.com/openai/codex/pull/49305) / [#49297](https://github.com/openai/codex/pull/49297)：批量线程名解析 + 反向扫描 session 索引，减少 SQLite 查询与全量扫描。

---

## 五、功能需求趋势

从当日 Issues 的标签分布可提炼出四条主线：

1. **Windows 体验治理（占比最高）**
   `windows-os` 标签几乎覆盖所有高评论 Issue。核心矛盾是 **daemon / app-server 架构迁移** 带来的副作用：窗口闪烁、权限失败、Remote Control 不可用、CMD 泛滥。这已从个别 bug 演变为平台级技术债。

2. **daemon 默认行为与用户信任**
   [#48195](https://github.com/openai/codex/issues/48195) 代表了一类诉求：常驻后台、自动更新的守护进程是否应默认开启。社区希望获得显式同意与开关，而非被动接受。

3. **UI/UX 精细化**
   - 关闭自动滚动（[#23517](https://github.com/openai/codex/issues/23517)、[#36390](https://github.com/openai/codex/issues/36390)）
   - 侧边栏会话分组（Project vs Recents，[#48320](https://github.com/openai/codex/issues/48320)、[#48742](https://github.com/openai/codex/issues/48742)、[#49128](https://github.com/openai/codex/issues/49128)）
   - 冷启动白屏/无限加载（[#43960](https://github.com/openai/codex/issues/43960)、[#48878](https://github.com/openai/codex/issues/48878)）

4. **Computer Use 与 MCP / Skills 能力可靠性**
   - Computer Use 无法枚举或附着窗口：[#48660](https://github.com/openai/codex/issues/48660)（Windows）、[#48712](https://github.com/openai/codex/issues/48712)（macOS）。
   - MCP 工具在全局 schema 预算耗尽后被静默隐藏：[#44308](https://github.com/openai/codex/issues/44308)。
   - 系统技能目录被删除：[#19265](https://github.com/openai/codex/issues/19265)。

5. **新模型支持与平台覆盖**
   GPT-6.1 Sol 落地引发客户端可见性问题（[#49362](https://github.com/openai/codex/issues/49362)）；同时 Intel Mac 支持被移除（[#49378](https://github.com/openai/codex/issues/49378)）也引发关注。

---

## 六、开发者关注点

综合高热度 Issue 与 PR，开发者痛点集中在以下五点：

1. **daemon 迁移是当前最大风险源。**
   Windows 上的窗口闪烁、启动失败、Remote Control 失效、代理重复拉起，几乎全部指向 app-server / daemon 架构。建议官方在修复窗口行为（[#49308](https://github.com/openai/codex/pull/49308) 是正确方向）的同时，提供回退开关。

2. **“静默失败”最伤信任。**
   `~/.codex/skills/.system` 被删除、MCP 工具被隐藏、子智能体被 Guardian 终止却无通知（已由 [#49312](https://github.com/openai/codex/pull/49312) 部分解决）——用户希望系统在降级时给出明确提示而非默默改变行为。

3. **发布后的可见性一致性。**
   GPT-6.1 Sol 已进目录却未在客户端出现（[#49362](https://github.com/openai/codex/issues/49362)），提示模型目录更新与 UI 渲染之间存在同步缺口，需要端到端验证。

4. **可观测性与可诊断性不足。**
   多个 Issue 的“临时解法”都是 DevTools `Page.reload` 或外部 CDP 操作，说明错误态缺乏自恢复机制与有效日志；`codex doctor` 在 Defender 场景下误报（[#45103](https://github.com/openai/codex/issues/45103)）也削弱了自诊断工具的可信度。

5. **交互细节的长期欠账。**
   自动滚动、引用块粘贴、会话分组等“小事”累积了可观的 👍，说明在追赶新模型与新架构的同时，基础编辑/阅读体验仍待补齐。

---

*报告生成时间：2026-09-30 · 数据窗口：过去 24 小时*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>



# Gemini CLI 社区动态日报 (2026-09-30)

> **数据来源**：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) | 数据截止：2026-09-29 UTC

---

### 1. 今日速览

 Gemini CLI 在今天迎来了多个关键的稳定性、安全性以及性能修复，旨在提升大模型 Agent 在高并发、无头（Headless）模式及 Windows 终端下的健壮性。社区层面，V1.0 之后的 Agent 架构演进（特别是子代理生命周期管理、AST 工具链优化）成为最核心的讨论焦点。

---

### 2. 版本发布

社区最新发布了 preview 和 nightly 版本，包含多项关键 Bug 修复：

*   **v0.63.0-preview.0 / v0.63.0-nightly.20260929.gfe6350238**
    *   **核心修复**：修复了无头模式（Headless）下由于文件争用、密钥链及监管状态丢失导致的**无限认证循环**（#28341）。
    *   **CLI 增强**：在连接恢复期间正确显示重试进度指示器（#28340）。
    *   **A2A 修复**：修复了 `a2a-server` 在任务元数据端点中不支持 store 时的早期返回逻辑。
    *   **相关链接**：
        *   [v0.63.0-preview.0 Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.63.0-preview.0)
        *   [v0.63.0-nightly.20260929 Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.63.0-nightly.20260929.gfe6350238)

---

### 3. 社区热点 Issues（Top 10）

以下是过去24小时内最受关注、讨论最热烈的 Issue，涵盖了架构演进、性能瓶颈和安全沙箱等方向：

#### 1. [Agents] Post V1.0 Work (#3132) — *子代理架构重构*
*   **重要性**：⭐⭐⭐⭐⭐ (46条评论, 50 👍)
*   **概述**：社区核心提案，要求实现一个可复用的 `SubAgent` 类，用于管理 LLM 驱动的工具编排（Tool Orchestration），允许工具迭代解决复杂问题。
*   **社区反应**：高度关注，这是定义 Gemini CLI 下一代 Agent 能力边界的史诗级 Issue。

#### 2. Subagent recovery after MAX_TURNS is reported as GOAL success (#22323) — *状态上报不一致 Bug*
*   **重要性**：⭐⭐⭐⭐ (13条评论, 2 👍)
*   **概述**：子代理在达到 `MAX_TURNS` 限制时，虽然实际未完成分析，但主 Agent 却将其汇报为“GOAL success”，掩盖了中断事实。
*   **社区反应**：开发者急需修复该状态同步问题，否则无法准确评估子代理的执行边界。

#### 3. Bug: 'text.response' in custom theme triggers validation error (#25689) — *主题配置校验冲突*
*   **重要性**：⭐⭐⭐⭐ (16条评论)
*   **概述**：自定义主题中的 `text.response` 键触发了配置校验器的未识别键（Unrecognized key）报

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-09-30** | 数据来源：github.com/github/copilot-cli

---

## 1. 今日速览

过去 24 小时内，Copilot CLI 密集推送了 **v1.0.90 系列 5 个补丁版本**，重点修复模型选择器误报、MCP 工具调用卡死与 OAuth 令牌复用问题，并新增了 MCP GitHub 鉴权作用域与只读目录会话级授权。社区侧，**MCP 生态兼容性**与**会话/资源稳定性**成为绝对焦点：Figma、Sentry 等远程 MCP 服务器接入问题集中被关闭，而「400 无效请求体」「组织级 Agent 不显示」「会话锁导致不可恢复」等 Open Issue 仍在持续发酵。PR 侧本窗口仅有 1 条，集中在 npm 发布流程的自动化改造。

---

## 2. 版本发布

24 小时内共发布 **5 个补丁版本**（v1.0.90-1 ～ v1.0.90-5），均为 1.0.90 系列的快速迭代：

| 版本 | 类型 | 主要内容 |
|---|---|---|
| **v1.0.90-5** | Fixed | ① 已配置 provider 提供模型时，启动与模型选择器不再显示 "No supported model available"；② MCP 工具调用在服务器响应后仍持续发送进度更新时，现在能正常完成 |
| **v1.0.90-4** | Fixed | 全新启动并登录时，不再打印 "Failed to read model provider attribution" 错误 |
| **v1.0.90-3** | Added | ① 新增 `--mcp-github-auth`，将 GitHub 账号鉴权限定到已批准的 MCP 服务器源；② 路径访问提示新增**会话级只读目录授权** |
| **v1.0.90-2** | 修复与变更 | 未披露细节 |
| **v1.0.90-1** | Fixed | ① 对 Datadog 等服务器的 MCP OAuth 登录复用仍有效的缓存令牌；② 会话恢复后被撤回的运行中提示保持移除状态 |

**解读**：本批更新高度集中于 **MCP 鉴权体验**与**启动期错误噪音**，其中 `--mcp-github-auth` 和会话级只读目录授权属于安全/权限模型的重要增强，值得关注。

---

## 3. 社区热点 Issues

> 以下从过去 24 小时更新的 50 条 Issue 中，按评论数、点赞与影响面挑选 10 条最值得关注者。

### 🔴 高优先级（Open）

**1. #1274 [OPEN] CLI 频繁出现 400 invalid request body 错误**
- 作者 unusualbob | 31 评论 | 👍13 | area:tools
- **为何重要**：过去 20 次代码审查请求中约 95% 返回 400，作者附上调试日志，无法判断是服务端校验还是 CLI 构造了非法请求。这是当前**评论数最高、持续最久**的活跃问题，直接影响核心使用场景。
- 链接：github/copilot-cli Issue #1274

**2. #1285 [OPEN] 组织级 Agent 不显示**
- 作者 SAhmeti | 11 评论 | 👍14 | area:agents, area:enterprise
- **为何重要**：用户按规范在 `{org}/.github-private` 创建 Agent 模板，但 CLI 与 VS Code 均不显示。点赞数最高的 Open Issue 之一，反映**企业级 Agent 分发链路**存在断点。
- 链接：github/copilot-cli Issue #1285

**3. #4515 [OPEN] CLI 同时暴露 MCP `content` 与 `structuredContent`**
- 作者 rroesch1 | 2 评论 | area:mcp, area:tools
- **为何重要**：当工具结果同时含两个字段时，CLI 将两者都注入上下文，违反「存在 structuredContent 时应优先使用」的语义，会造成上下文污染与 token 浪费。
- 链接：github/copilot-cli Issue #4515

**4. #4805 [OPEN][triage] 会话不可恢复：崩溃主机遗留的 `inuse.<pid>.lock` 从不被回收**
- 作者 daveroama | 2 评论 | area:sessions
- **为何重要**：会话数据本身完好、事件日志可正常重放，却被**陈旧的运行时锁**阻塞。属于典型「数据没坏但用不了」的可靠性问题，已进入 triage。
- 链接：github/copilot-cli Issue #4805

### 🟢 已关闭（近期修复/收敛）

**5. #4870 [CLOSED] Figma 远程 MCP 服务器加载失败 —— `server/discover` 返回 `-32601` 被当作致命错误**
- 作者 Just-Jan | 8 评论 | 👍12 | area:mcp
- **为何重要**：同一服务器在 VS Code 中可用，CLI 却因把「未实现方法」视为致命错误而无法注册工具。是 MCP 兼容性对齐的典型案例，高赞说明影响面广。
- 链接：github/copilot-cli Issue #4870

**6. #3281 [CLOSED] 升级至 v1.0.46 后 CLI 完全不可用（native binding 缺失）**
- 作者 softwarezhen | 7 评论 | area:mcp, area:installation
- **为何重要**：启动横幅正常后立即报 "Cannot find native binding"，指向 npm 可选依赖缺陷，属**阻断级安装问题**。
- 链接：github/copilot-cli Issue #3281

**7. #2861 [CLOSED] 手动 `/compact` 在 Opus 4.6 上连续三次返回空响应**
- 作者 ronkeele | 7 评论 | 👍5 | area:context-memory, area:models
- **为何重要**：短会话（<30 轮）内压缩失败，直接影响长上下文场景的可用性，且与特定新模型绑定。
- 链接：github/copilot-cli Issue #2861

**8. #3589 [CLOSED] 多个 `sessionStart`/`subagentStart` 钩子的 `additionalContext` 只有最后一个被注入**
- 作者 MrWolfZ | 4 评论 | 👍2 | area:context-memory, area:plugins
- **为何重要**：钩子/插件生态的上下文合并逻辑缺陷，影响插件作者构建可组合的上下文注入能力。
- 链接：github/copilot-cli Issue #3589

**9. #2581 [CLOSED] 名称含点号的 MCP 工具触发 400（应遵循 MCP 规范）**
- 作者 chauhansachinkr | 3 评论 | 👍3 | area:mcp
- **为何重要**：MCP 规范明确允许工具名含 `.`，但 API 侧校验模式为 `^[a-zA-Z0-9_-]{1,128}$`，导致合法工具被拒。与 #1274、#4870 共同指向 **MCP 规范一致性**主题。
- 链接：github/copilot-cli Issue #2581

**10. #4807 [CLOSED] 空闲 CLI 陷入 `FileWatch` 事件风暴，占用两个 CPU 核、写出 33+ GB 日志**
- 作者 nayato | 3 评论 | 👍1
- **为何重要**：空闲进程持续 221% CPU 超 35 小时、日志膨胀到 33GB，是**严重的资源泄漏**，对 CI/常驻场景危害极大。
- 链接：github/copilot-cli Issue #4807

**补充关注**：#4919（`/ask` 在 auto 模型下报「模型不支持」）、#3393（Sentry MCP OAuth 授权卡死）、#1825（空 Input Schema 使 CLI 拒绝工具，👍10）同样值得跟踪。

---

## 4. 重要 PR 进展

> ⚠️ 说明：本窗口（过去 24 小时）内仅更新 **1 条 PR**，无法凑满 10 条。以下对该 PR 做完整解读。

**#5000 [OPEN] 从已发布的 Copilot CLI release 发布 npm tarball**
- 作者 devm33 | 创建/更新 2026-09-29
- **功能内容**：将 npm 发布流程改为**由 `github/copilot-cli` 中已发布的 GitHub Release 触发**，并提供显式 tag 的手动恢复路径。npm 鉴权采用 **trusted publishing（OIDC）**，不再使用 npm token；运行时仓库的内部 feed 与周边发布任务保持独立，其公开 release 与 npm 发布解耦。
- **为何重要**：这是**发布链路工程化**的改进，直接关系到用户能否稳定、可追溯地通过 npm 安装 CLI；OIDC 免 token 也提升了供应链安全性。对普通用户的影响将体现在后续版本的分发可靠性上。
- 链接：github/copilot-cli PR #5000

---

## 5. 功能需求趋势

从本次全部 Issues 中可提炼出以下社区关注方向：

| 方向 | 代表 Issue | 趋势解读 |
|---|---|---|
| **MCP 生态成熟度** | #4870、#2581、#4515、#3393、#2805、#1825、#4985 | 绝对主线。涵盖鉴权（OAuth）、工具名/Schema 规范对齐、`content`/`structuredContent` 语义、`${secret:...}` 占位符传递、MCP 开关易用性等，说明 MCP 已成为 CLI 最重要的扩展面，但兼容性细节仍有大量坑 |
| **模型与 Provider 灵活性** | #4919、#4037、#2651、#2861 | BYOK、ACP server 模式、auto 模型、跨模型家族子 Agent、压缩模型行为——社区希望**摆脱单一模型绑定**，并在 IDE/服务端模式下自由接入自有模型 |
| **会话可靠性** | #4805、#2497、#2483、#3365 | 会话锁回收、按名称检索、云端会话续接、自动重命名，聚焦「**会话能被找回、续上、命名**」 |
| **性能与资源** | #4807、#4982 | 空闲 CPU 风暴、33GB 日志、并行工具调用无限卡死，反映**长期运行稳定性**诉求 |
| **IDE/客户端集成** | #4037（ACP/JetBrains）、#1285（企业 Agent）、#4583（PDF 上传） | 向 IDE 与企业工作流深度嵌入 |
| **输入与交互体验** | #3693（Ctrl+Z 误触发退出）、#4995（会话回滚可折叠）、#3323（ask_user 自定义答案） | TUI 键盘/回滚/交互细节的高频吐槽 |
| **平台与安装** | #3309（win32-arm64 误装 x64）、#4611（版本号字典序比较错误）、#3281 | 跨平台安装与版本解析的稳定性 |

---

## 6. 开发者关注点（痛点总结）

1. **MCP 兼容性反复踩坑**：CLI 与 VS Code、与 MCP 官方规范之间存在多处不一致（`.` 名称、`-32601` 处理、空 Schema、字段语义、secret 传递）。开发者期望 CLI 在 MCP 上做到「**规范即行为**」，而非自行加严校验。

2. **请求体校验不透明**：以 #1274 为代表的高频 400 错误，开发者难以区分是服务端还是客户端问题，呼吁**更清晰的错误归因与调试输出**。

3. **会话「数据完好但打不开」**：陈旧锁文件（#4805）与会话续接失败（#2497、#2483）让用户对本地会话管理缺乏信任，需**自动回收与更健壮的恢复机制**。

4. **资源泄漏威胁常驻场景**：33GB 日志与 200%+ CPU 的空转（#4807）对 CI、后台 Agent 场景是硬伤。

5. **企业/团队能力落地不畅**：组织级 Agent 无法显示（#1285）直接阻碍企业推广。

6. **模型选择与鉴权的启动期体验**：本批 release 集中修复 "No supported model available""Failed to read model provider attribution" 等启动噪音，说明**首屏体验**是近期重点打磨对象。

7. **发布与安装工程化**：PR #5000 与 #3281/#3309/#4611 共同表明，**分发链路（npm、预编译二进制、版本解析）** 仍是用户受阻的高发环节。

---

*本日报基于 github.com/github/copilot-cli 公开数据生成，链接均指向对应 Issue/PR 编号。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-09-30

> 数据来源：github.com/anomalyco/opencode
> 统计窗口：过去 24 小时

---

## 1. 今日速览

今日无新版本发布。社区讨论高度集中在**内存与存储失控**类问题上——从 `event` 表无限增长导致数据库膨胀至 13GB，到 TUI 进程 24–28GB OOM，稳定性已成为当前最大痛点。与此同时，一批以 `[automated-pr-cleanup]` 标记的历史 PR 集中关闭，反映出维护团队正在进行大规模的积压清理。

---

## 2. 版本发布

过去 24 小时无新 Release。

---

## 3. 社区热点 Issues（Top 10）

**1. #20695 [CLOSED] Memory Megathread** · 147 评论 · 👍112
官方内存问题总集帖，作者 thdxr。要求用户提交 heap snapshot 而非让 LLM 猜测方案。作为社区最高热度 Issue，它汇总了零散的内存报告，是理解 OpenCode 内存问题的入口。
🔗 anomalyco/opencode Issue #20695

**2. #33356 [OPEN] `event` 表无限增长，opencode.db 达 13GB+** · 37 评论 · 👍12
本地 SQLite 事件表缺乏保留/压缩策略，长期实例数据库膨胀至 ~13GB，撑满 22GB 卷的 97–99%。属于数据层根本性缺陷，影响所有长驻用户。
🔗 anomalyco/opencode Issue #33356

**3. #33399 [OPEN] CPU 占用随机飙至 99–100%，CLI 无响应** · 10 评论 · 👍1
进程周期性占满 CPU、键盘输入失效，形同卡死。自 1.3.3 起出现，属高频性能回归。
🔗 anomalyco/opencode Issue #33399

**4. #52042 [OPEN] 图片被 provider 拒绝后 session 彻底损坏** · 8 评论
自定义 OpenAI 兼容 provider 拒绝图片输入时，后续每次请求都会重放该图片并返回通用 400，且无恢复路径。错误处理设计缺陷，用户被迫弃用整个会话。
🔗 anomalyco/opencode Issue #52042

**5. #42170 [OPEN] Desktop 无法加载会话：`no such column: project_id`** · 8 评论 · 👍1
Desktop 1.18.17 启动即 500，sidecar 在 `migrateProjectId` 处崩溃。属于 schema 迁移断裂，直接阻断桌面端使用。
🔗 anomalyco/opencode Issue #42170

**6. #51761 [OPEN] TUI OOM：v2 间歇性耗尽 24–28GB 内存** · 5 评论 · 👍1
内存以 ~500MB/s–1GB/s 线性增长、无 GC 锯齿，一分钟内被 OOM Killer 杀死，且无稳定复现触发条件。v2 稳定性重大隐患。
🔗 anomalyco/opencode Issue #51761

**7. #44821 [OPEN] OAuth transform 将 Codex 产品预算误判为端点上限** · 5 评论 · 👍5
把 Codex 客户端预算元数据当作 GPT-5.6 Sol 的物理端点限制，导致自动压缩提前数十万 token 触发。影响 OAuth 用户成本与上下文利用。
🔗 anomalyco/opencode Issue #44821

**8. #51424 [OPEN] OpenCode Go 订阅有效却报 "Insufficient account funds"** · 5 评论 · 👍2
订阅激活、用量 0%、却无法调用 Kimi 等模型。计费/鉴权链路存在一致性 bug，直接关系到付费体验。
🔗 anomalyco/opencode Issue #51424

**9. #52180 [OPEN] 仅重定向的 bash 语句绕过全部权限规则** · 1 评论
在 `bash: {"*": "deny"}` 下，`> out.txt`、`>> out.txt` 仍被执行。**安全绕过漏洞**，尽管讨论量低但风险等级最高。
🔗 anomalyco/opencode Issue #52180

**10. Nix 系列（#52121–#52125）· jerome-benoit 集中提交**
同一作者连发 5 条 Nix 打包问题：v2 PR 上不跑检查、x86_64-darwin 破坏哈希刷新、Nix 桌面误启生产自动更新、app 与内置 CLI 版本不一致等。反映出 Nix 分发渠道的工程化缺口。
🔗 anomalyco/opencode Issue #52123 / #52124 / #52122 / #52121

---

## 4. 重要 PR 进展（Top 10）

> 注：今日 PR 均为 `[automated-pr-cleanup]` 批量关闭的历史 PR，评论数不可见。

**1. #46175 / #46182 / #46185 managed attachments 三步系列**
为 v2 session 引入按会话的受管附件存储（流式写入）、首轮提升媒体、提交前上传附件。是 v2 附件体系的核心基建。
🔗 anomalyco/opencode PR #46175 / #46182 / #46185

**2. #46136 fix(compaction)：用累计 token 用量判断自动压缩溢出**
修复大上下文模型（如 `opencode-go/hy3`）永不触发自动压缩的问题。
🔗 anomalyco/opencode PR #46136

**3. #46181 feat(provider)：新增 none 变体为 DeepSeek V4 关闭 thinking**
修复 `reasoningVariants` 遇到 effort 条目即返回、导致 toggle 失效的逻辑缺陷。
🔗 anomalyco/opencode PR #46181

**4. #46139 fix(session)：用户在 question 提示期间发消息时恢复循环**
修复 agent 阻塞于交互式 `question` 工具时，新消息导致会话挂起的死锁场景。
🔗 anomalyco/opencode PR #46139

**5. #46131 fix(opencode)：在锁内原子写入 auth.json**
修复环境快照污染与凭据丢失两类 `auth.json` 写入缺陷。
🔗 anomalyco/opencode PR #46131

**6. #46160 fix(opencode)：保留 V1 工具附件文件名**
修复 Responses provider（含 Bedrock Mantle）下 PDF 工具结果文件名退化为 `"data"` 的问题。
🔗 anomalyco/opencode PR #46160

**7. #46150 fix(core)：报告缺失的 glob/grep 搜索路径**
修复路径不存在时搜索工具静默失败或误导性报错。
🔗 anomalyco/opencode PR #46150

**8. #46148 fix(core)：在文件系统根目录跳过 FileWatcher**
避免用户打开根目录时为每个位置创建 watcher 造成的资源浪费。
🔗 anomalyco/opencode PR #46148

**9. #46167 chore(server)：为实例服务 bootstrap 增加日志与边界**
为 `InstanceBootstrap.run` 的逐服务 `init()` 增加可观测性与超时边界。
🔗 anomalyco/opencode PR #46167

**10. #46125 fix(server)：异步 prompt 失败时将 session 状态重置为 idle**
修复 `promptAsync` fork 失败后会话状态卡死的问题。
🔗 anomalyco/opencode PR #46125

---

## 5. 功能需求趋势

从全部 50 条 Issue 中可提炼出以下方向：

| 方向 | 代表 Issue | 说明 |
|---|---|---|
| **稳定性 / 内存治理** | #20695、#33356、#33399、#51761 | 当前绝对主线，涵盖 DB 膨胀、CPU 飙高、TUI OOM |
| **Provider 兼容与配置** | #51252、#51330、#51146 | v2 下 `providers` 配置被忽略、自定义 provider 无法保存、Bedrock 路由拒绝 `output_config` |
| **新模型 / 平台集成** | #47515、#51424 | 请求接入 Nous Research 推理 API；OpenCode Go 订阅模型可用性 |
| **权限与安全** | #52180 | bash 重定向绕过权限规则 |
| **桌面端（Desktop）体验** | #42170、#52117、#49428 | schema 迁移、上下文面板排序、Windows 幽灵项目 |
| **分发与打包（Nix）** | #52121–#52125 | Nix 渠道版本一致性、哈希刷新、自动更新开关 |
| **计费 / 订阅** | #51424、#49867、#52167 | 订阅有效但报错、funds 误判 |

---

## 6. 开发者关注点

1. **内存与资源失控是第一优先级**
   从 SQLite `event` 表无上限增长（#33356）、TUI 无 GC 锯齿的 24–28GB OOM（#51761），到 CPU 100% 卡死（#33399），问题横跨数据层、运行时与 UI 层。官方已用 Memory Megathread（#20695）集中收口，但根因仍待定位。

2. **v2 迁移带来的回归集中爆发**
   `providers` 配置被忽略（#51252）、自定义 provider 无法添加（#51330）、Desktop schema 断裂（#42170）——v2 的协议与 schema 变更正在制造一批迁移型故障。

3. **错误处理缺乏"逃生舱"**
   图片被拒后 session 永久损坏（#52042）是典型：一次 provider 拒绝即让整个会话不可用，缺少丢弃问题消息、降级重试的恢复路径。

4. **权限系统的边界需收紧**
   仅重定向的 bash 语句绕过 `deny` 规则（#52180）暴露出命令解析与权限匹配之间的空隙，属安全级问题，应优先修复。

5. **分发渠道（尤其 Nix）的工程化欠账**
   jerome-benoit 单日提交 5 条 Nix 相关问题，涉及版本不一致、生产更新器误启、哈希矩阵陈旧等，说明非主流分发路径缺少 CI 覆盖。

6. **付费链路信任度**
   OpenCode Go 订阅有效却报资金不足（#51424）、订阅找不到（#49867）等问题直接影响付费用户信心，需尽快排查计费与鉴权的一致性。

---

*本报告基于 github.com/anomalyco/opencode 公开数据自动整理，仅供技术参考。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-09-30

> 数据来源：github.com/badlogic/pi-mono（仓库实际链接指向 earendil-works/pi）

---

## 一、今日速览

Pi 连续发布 **v0.99.0 / v0.99.1** 两个版本：v0.99.0 落地了重量级的 **Codemode + MCP**（模型可编写 JavaScript 并行调用工具），v0.99.1 引入 **GPT-6.1 Sol** 并将其设为 OpenAI Codex 默认模型。与此同时，0.99.0 的发布也带来了一波登录类回归（ChatGPT / Anthropic OAuth），社区当日提交了多个高赞修复 PR；上下文自动压缩（auto-compaction）相关的老问题依旧是讨论最集中的痛点。

---

## 二、版本发布

### v0.99.1
- **GPT-6.1 Sol**：在 OpenAI、Azure OpenAI、OpenAI Codex 上线，并成为 **OpenAI Codex 的默认模型**。
- 文档：https://github.com/earendil-works/pi/blob/v0.99.1/packages/coding-agent/docs/models.md#select-a-model

### v0.99.0
- **Codemode 与 MCP**：可连接 MCP 服务器，让模型编写 JavaScript 并行调用工具。
- 文档：[MCP Servers](https://github.com/earendil-works/pi/blob/v0.99.0/packages/coding-agent/docs/mcp.md)、[Enable codemode](https://github.com/earendil-works/pi/blob/v0.99.0/packages/coding-agent/docs/codemode.md)
- 对应实现 PR：#10040（见下文 PR 部分）。
- ⚠️ 该版本同时引入了 ChatGPT 登录模块缺失的打包回归（#10182），升级用户需留意。

---

## 三、社区热点 Issues（10 条）

1. **#8643 [OPEN] Bedrock：OpenAI 模型拒绝嵌套在 toolResult.content 中的图片**
   跨月未解决的兼容性问题，评论数最高（8 条、👍3）。作者已在 fork 上备好修复与回归测试，但此前 PR #8642 因贡献门禁被自动关闭，反映社区"修好了却进不去"的挫败感。
   https://github.com/earendil-works/pi/issues/8643

2. **#10033 [CLOSED] 压缩提示词包含全部 thinking 文本，导致上下文超限**
   使用推理模型（如 DeepSeek V4.1）的长会话中，`serializeConversation()` 把每个 thinking 块完整塞进摘要提示，而模型本身看不到旧 thinking，自动压缩永远无法成功。8 条评论，直击 auto-compaction 的核心设计缺陷。
   https://github.com/earendil-works/pi/issues/10033

3. **#10074 [OPEN] Anthropic 工具调用：非 ASCII 编辑参数损坏被静默接受**
   韩文文件上的 `edit` 调用频繁失败甚至损坏文件（`\uXXXX` 丢失 `u` 变成控制字符），作者已跟踪三周。**静默接受损坏参数**是比报错更危险的失败模式，5 条评论。
   https://github.com/earendil-works/pi/issues/10074

4. **#10144 [OPEN] 排队中的 prompt 被逐条发送而非批量合并**
   在工具执行期间连续输入多条消息时，只有第一条被处理。用户还抱怨前一版报告被以 "no-action" 关闭，属于交互体验与社区沟通双重议题。
   https://github.com/earendil-works/pi/issues/10144

5. **#6339 [CLOSED][no-action] 自动压缩阈值在 agentic run 中从不被评估**
   该检查只在 run 边界执行，单次长 agentic 运行中无法主动压缩，与 `compaction.reserveTokens` 的语义承诺不符。典型"文档说一套、实现做一套"问题，被标记 no-action 引发关注。
   https://github.com/earendil-works/pi/issues/6339

6. **#10182 [CLOSED] 0.99.0 ChatGPT 登录失败：bundle 缺少 openai-chatgpt.js**
   发布包中缺失模块导致 `Sign in with ChatGPT` 直接崩溃，确认是 npm tarball 打包问题，👍4。与下面的 #10184 共同构成当日登录故障链。
   https://github.com/earendil-works/pi/issues/10182

7. **#10184 [CLOSED] Sign in with ChatGPT：OpenAI 同意页返回 invalid_client**
   登录后授权页报 "This app is unavailable"，👍6（当日最高），说明影响面较广，属于发布质量问题而非单点配置问题。
   https://github.com/earendil-works/pi/issues/10184

8. **#9962 [CLOSED] registerNativeProvider 与启动刷新竞态，导致 "No models available"**
   扩展中注册带 OAuth 的原生 Provider 后，初始模型解析可能读到过期快照。竞态类问题复现困难、影响首屏可用性，已有对应修复 PR #10190。
   https://github.com/earendil-works/pi/issues/9962

9. **#10191 [CLOSED] 交互模式空闲时占用约 1.5 个核心，GC 占 41%**
   Loader 以 80ms 间隔重绘整行带 padding 的内容，每帧字符串造成大量 GC。对长期常驻使用的开发者是明显的能耗/发热负担，社区给出了具体定位。
   https://github.com/earendil-works/pi/issues/10191

10. **#10154 [OPEN] 中文 `**加粗**` 在 TUI 中按字面量渲染**
    当闭合 `**` 前是全角标点（。：，！？）且后接 CJK 字符/数字时必然失效（老问题 #3353 的回归，0.87.1 仍未修复）。属于中文用户长期可感知的渲染缺陷。
    https://github.com/earendil-works/pi/issues/10154

**其他值得留意**：#10011（隐藏工具行的交互模式提案，6 条评论）、#9817（扩展无法解析通过 `main`/`exports` 声明入口的 npm 包）、#10192（`codemode.mode: "only"` 仍在系统提示中广告隐藏工具）、#10143（跨行语法高亮丢失）、#10162（图片过多导致 agent 任务中断）、#10188（pi-mcp 在 Cloudflare Workers 上 `Illegal invocation`）。

---

## 四、重要 PR 进展（10 条）

1. **#10040 [CLOSED] feat(coding-agent): Codemode and MCP**
   本周期最重磅的功能落地：`packages/codemode` 在 QuickJS wasm VM 中以 Worker 方式运行模型编写的 JavaScript，脚本可把 Pi 的工具当异步函数调用，并支持会话级 store、模型目录读取与分类器。即 v0.99.0 的核心内容。
   https://github.com/earendil-works/pi/pull/10040

2. **#10194 [OPEN] feat(ai): Anthropic OAuth 新增复制验证码登录方式**
   现有 localhost 回调流程在远程机器上体验很差，该 PR 增加 code-based 登录，作者称已在生产云 agent 环境使用。
   https://github.com/earendil-works/pi/pull/10194

3. **#10122 [OPEN] feat(coding-agent): 托管式 llama.cpp 服务器模式**
   `/login llama.cpp` 可让 Pi 自行启动 llama-server：分离式 supervisor 在随机本地端口 + 随机 API Key 上运行 router，通过本地 socket 统计连接的 Pi 进程数，首个模型使用时启动、最后一个断开后停止。
   https://github.com/earendil-works/pi/pull/10122

4. **#10159 [CLOSED] refactor(coding-agent): 内置扩展解析为 `builtin:<name>` 路径**
   让 `mcp`、`llama.cpp`、`codemode`、`tool-search` 等内置扩展可通过 `pi config` 全局或按项目禁用，统一了"扩展即资源"的模型。
   https://github.com/earendil-works/pi/pull/10159

5. **#10190 [CLOSED] fix(coding-agent): 注册时即将持有凭据的原生 Provider 标记为已配置**
   直接修复 #9962 的启动竞态——`registerNativeProvider()` 未更新 auth 快照，导致初始模型选择回退到其他 Provider。
   https://github.com/earendil-works/pi/pull/10190

6. **#10158 [CLOSED] fix(llama): 重载时保留缓存上下文**
   修复 #10077：Pi 重建模型目录时丢失 `meta.n_ctx` 并回退到 `n_ctx_train`，覆盖了缓存的运行时上下文窗口。
   https://github.com/earendil-works/pi/pull/10158

7. **#10156 [CLOSED] feat(coding-agent): 可配置的鼠标滚轮滚动**
   全屏模式下可配置普通/Alt 滚轮行为，`/settings` 提供预设，`settings.json` 支持自定义值，修复 #9758。
   https://github.com/earendil-works/pi/pull/10156

8. **#10146 [OPEN] fix(coding-agent): 编辑器恢复时保留粘贴文本**
   修复流式响应期间排队消息 + 大段粘贴后，提交的是 `[paste #x +y lines]` 字面标记而非实际内容的严重数据丢失问题。
   https://github.com/earendil-works/pi/pull/10146

9. **#10165 [OPEN] fix(coding-agent): 跟踪被丢弃的用户 bash 输出**
   用户 `!` 命令丢弃早期输出块但尾部仍在限制内时，会错误上报 `truncated: false`，模型因此拿不到截断提示与完整日志路径。
   https://github.com/earendil-works/pi/pull/10165

10. **#9137 [OPEN] feat(coding-agent): 新增 Nix flake（WIP）**
    为 Nix 用户提供可复现的安装/开发路径，是包分发生态的重要补充。
    https://github.com/earendil-works/pi/pull/9137

**其他**：#10193（renderer 示例保留完整工具定义与 prompt 指引）、#10174（替换内置扩展时给出警告）、#9329（识别 Orca 终端为 Kitty 图像能力）、#8635（惰性 setup 期间保留 aborted stop reason）、#10163（debug-agent find 工具 `directoryOnly` 修复）。

---

## 五、功能需求趋势

- **模型与 Provider 适配持续扩张**：GPT-6.1 Sol 上线并成为 Codex 默认（v0.99.1）、Gemini thought signature 丢失（#10157）、llama.cpp 上下文窗口（#10077）、Bedrock 图片嵌套（#8643）、模型 ID 回退选到未鉴权 Provider（#10160）、muse-spark 思考等级为 null（#10155）。多 Provider 矩阵的"最后一公里"兼容性是长期主题。
- **上下文管理与自动压缩**：最集中的技术债区域，涵盖压缩提示词构造（#10033）、阈值触发时机（#6339）、Bedrock 上被 Anthropic 策略拦截（#10045）、图片过多中断任务（#10162）。
- **登录与鉴权体验**：ChatGPT 登录打包缺失（#10182）、invalid_client（#10184）、Anthropic 订阅请求在 :00/:30 UTC 挂起（#10019）、MCP 鉴权链接缺少 OSC-8 可点击字段（#10186）。远程/无头环境下的 OAuth 是明确缺口。
- **TUI 性能与渲染质量**：空闲占 1.5 核（#10191）、跨行语法高亮丢失（#10143）、中文加粗渲染（#10154）、鼠标滚轮滚动（#10156）、隐藏工具行模式（#10011）。
- **扩展与包生态**：npm 入口解析（#9817）、内置扩展可禁用（#10159）、包目录索引滞后 12 小时（#10145）、`codemode.mode` 工具广告不一致（#10192）。
- **跨运行时与分发**：Cloudflare Workers 上的 `fetch` 调用方式（#10188）、Nix flake（#9137）、npm 安装拉取 26 个平台 esbuild 二进制约 290MB（#9979）。

---

## 六、开发者关注点

1. **静默失败比崩溃更可怕**：损坏的编辑参数被接受（#10074）、`truncated: false` 误报（#10165）、Chord 上下文丢失 abortSignal 且无告警（#10189）、SessionManager 追加失败后 JSONL 出现缺失 parent（#10166）。开发者反复要求"要么正确，要么明确报错"。
2. **非 ASCII / CJK 支持仍是系统性短板**：韩文 edit 损坏、中文 `**bold**` 渲染失效、全角标点边界情况，反映出文本管线在 Unicode 边界上的测试覆盖不足。
3. **自动压缩的语义与实现不一致**：`reserveTokens` 的承诺未在 agentic run 内兑现，且推理模型的 thinking 内容处理不当，导致长会话可靠性存疑——这直接关系到 Pi"可长时间无人值守运行"的核心卖点。
4. **发布质量与回归**：0.99.0 的登录模块缺失、0.99.1 的默认模型切换，说明打包校验与登录路径的端到端测试需要加强；社区对高 👍 的登录故障反应尤为强烈。
5. **贡献流程摩擦**：多个已备好修复与测试的 PR/Issue 因贡献门禁被自动关闭或以 "no-action" 结案（#8643、#10144、#6339），社区呼吁更透明的准入与复审机制。
6. **常驻资源的成本意识**：空闲 CPU 占用、GC 压力、npm 安装体积等问题被量化后提出，说明 Pi 已被大量用于长时间后台会话场景。

---

*注：本期日报基于过去 24 小时内更新的 50 条 Issue（展示评论数最多的 30 条）与 19 条 PR 整理。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-09-30

> 数据来源：github.com/QwenLM/qwen-code

---

## 一、今日速览

今日 Qwen Code 发布了 **v0.24.7 版本列车**（CLI、Desktop、TypeScript SDK v0.1.17 同步更新），但 VSCode IDE Companion 的 0.24.7 发布流水线失败。社区讨论高度集中在 **Managed Agent / Hosted Workspace 架构**（#12380 已累积 37 条评论）与 **上下文 Token 治理**（#12028 及其子议题）两条主线上，同时 Runtime Broker 的稳定性与边界条件修复成为当日 PR 的主战场。

---

## 二、版本发布

**1. Qwen Code CLI v0.24.7** — https://github.com/QwenLM/qwen-code/releases
- 本次无已知 Breaking Changes，主打增量特性与修复。
- 特性：`feat(managed-agent): admit workspace-bound sessions without execution`（[#12709](https://github.com/QwenLM/qwen-code/pull/12709)）——允许绑定工作区的会话在不触发执行的前提下被接纳，是 Managed Agent 分阶段交付的一环。

**2. Qwen Code Desktop v0.24.7** — https://github.com/QwenLM/qwen-code/releases
- `fix(serve): preserve session creation failure diagnostics`（[#12331](https://github.com/QwenLM/qwen-code/pull/12331)）：保留会话创建失败的诊断信息，便于排查。
- `feat(sdk-java): Add managed runtime`：Java SDK 引入 Managed Runtime 支持。

**3. TypeScript SDK v0.1.17** — https://github.com/QwenLM/qwen-code/releases
- 捆绑 CLI 版本 **0.24.7**（由同分支/同 ref 源码构建），与主版本保持一致。

**⚠️ 发布异常**：VSCode IDE Companion 0.24.7 发布工作流失败（[#13028](https://github.com/QwenLM/qwen-code/issues/13028)，已关闭），IDE 插件用户可能暂缓获得该版本。

---

## 三、社区热点 Issues（精选 10 条）

**1. [#12380](https://github.com/QwenLM/qwen-code/issues/12380) proposal(serve): Managed Agent 双路径架构与分阶段交付 — 37 评论**
今日讨论度最高的议题。提出在保留现有 TypeScript Agent Loop 的前提下，让模型推理与工具环境供给解耦，并赋予 Session 持久所有权、Workspace 绑定、可恢复的工具执行与稳定 Web 接口。这是后续 #12867、#13030 等一系列 Managed Agent 议题的“总纲”，值得优先跟踪。

**2. [#12028](https://github.com/QwenLM/qwen-code/issues/12028) tracking(core): 非对话上下文 Token 治理 — 15 评论**
系统提示、内置工具 Schema、`QWEN.md` 与技能列表在**每次请求**都被发送并计费，在大上下文模型上这部分开销可能远超对话本身，却只以很小的百分比呈现而难以察觉。这是当前 Token 成本优化的核心 umbrella 议题。

**3. [#12326](https://github.com/QwenLM/qwen-code/issues/12326) feat(core): 让 eager tool 列表动态化且不破坏 Prompt 前缀缓存 — 8 评论**
`tools.eager` 目前是手工维护的静态列表，社区希望由系统动态选择“常驻工具集”，同时**不使 Prompt 前缀缓存失效**——这是性能与成本的双重诉求，目前标记为 blocked。

**4. [#12333](https://github.com/QwenLM/qwen-code/issues/12333) feat(ci): 为 Token 优化补上召回率/任务成功率回归门禁 — 7 评论**
指出当前所有 Token 改动只被衡量“省了多少”，没人衡量“工具召回或任务成功率损失了多少”。在缺少该门禁前，最大的节省无法被负责任地开启——这是 #12028 的验收标准缺口。

**5. [#12867](https://github.com/QwenLM/qwen-code/issues/12867) feat(managed-agent): Stage D 后续（持久生命周期、Turns、Actions、durable admission 与 AgentDefinition） — 5 评论**
承接 #12380 的 Stage D 剩余工作，覆盖 D1–D3 之外的 API 契约部分，是 Managed Agent 从“契约”走向“可持久化运行”的关键一步。

**6. [#13016](https://github.com/QwenLM/qwen-code/issues/13016) [P1][bug] SDK abort/close 后重启的 CLI worker 仍在运行 — 5 评论**
**当日最高优先级 Bug**。stream-json / ACP 等启动方式下 CLI 存在 supervisor 机制，TypeScript SDK 发送 SIGTERM 并在 5 秒后 SIGKILL，但两个信号都未能终止子进程，导致 worker 泄漏。

**7. [#13030](https://github.com/QwenLM/qwen-code/issues/13030) feat(managed-agent): 在 Hosted Workspace 配置中接纳只读搜索工具 — 5 评论**
新增 Hosted Workspace 工具档案，将 `list_directory`、`glob`、`grep_search` 三个只读工具加入 Hosted Harness，并经既有 Broker 路径执行，是托管环境能力扩展的直接体现。

**8. [#12889](https://github.com/QwenLM/qwen-code/issues/12889) [P2][bug] Deferred `tool_call` Schema 允许必填字段为空 — 5 评论**
用户实测 v0.24.6 中 `tool_search` 被调用时参数可绕过必填校验，属于工具调用正确性问题，已标记 ready-for-human。

**9. [#13004](https://github.com/QwenLM/qwen-code/issues/13004) perf(memory): 无操作抽取后加入有界冷却期 — 5 评论**
当近期对话未产出可持久化内容时，避免每轮用户消息后都 fork 一次抽取器，降低无谓的 Token 与延迟开销，是自动记忆机制的性能优化。

**10. [#13042](https://github.com/QwenLM/qwen-code/issues/13042) fix(serve): 限制随 Session 释放持续增长的 per-Session 索引 — 4 评论**
Managed Runtime provider 路径上的多个索引每释放一个 Session 就增长一条且进程存活期间永不收缩（如 `closedSessions`），属于典型的内存泄漏，对长驻 daemon 影响显著。

> 其他值得留意：#11321（Deferred 工具保留 Prompt 缓存的后续整改）、#13068（Ctrl+命名键误发 C0 控制字节）、#12999（Deferred tool_call 桥接强加了 8 类工具自身从未执行的 Schema 层）、#13017（SDK Java 故障门禁 flaky）。

---

## 四、重要 PR 进展（精选 10 条）

**1. [#13071](https://github.com/QwenLM/qwen-code/pull/13071) feat(managed-agent): 请求 Hosted 工具审批（D6a）**
#12867 的 D6a 切片：Hosted Harness 在工具调用未被会话审批模式预授权时先请求审批，持久等待答复后再执行或拒绝，并新增私有路由记录可信决策。

**2. [#12977](https://github.com/QwenLM/qwen-code/pull/12977) feat(sdk-java): 带审计的 Hosted Workspace 运维恢复**
为部分 Shell 捕获导致 Workspace 租约被钉住的 Linux 持久化 Hosted worker，提供离线、可选的 `workspace-recovery inspect|prepare|complete` 流程，并记录确切的持有者与原始执行。

**3. [#13069](https://github.com/QwenLM/qwen-code/pull/13069) fix(runtime-broker): 原始 Runtime 无法应答时保持 UNKNOWN**
修复 #13060：运行中执行的 worker 丢失后，Broker 的观察类路由（read/start/cancel）保持返回 `409 runtime_broker_execution_unknown`，而不再泄漏下游错误。

**4. [#13064](https://github.com/QwenLM/qwen-code/pull/13064) fix(runtime-broker): worker 拒绝的 provider 启动应答为 unknown 而非 prepared**
修复“provider 启动被 worker 拒绝却返回 `200 prepared`、客户端永久等待”的问题（对应 #13059），改为 `409 runtime_broker_execution_unknown`。

**5. [#13072](https://github.com/QwenLM/qwen-code/pull/13072) fix(core): 压缩请求准入防护（重建版）**
在不 rebase、不强推旧分支的前提下，于当前 main 上重建压缩准入修复：结合 provider 锚点与当前路由估算，纳入 thought signature，并在冷请求前做有界 microcompaction。旧版 [#9541](https://github.com/QwenLM/qwen-code/pull/9541) 已关闭。

**6. [#13061](https://github.com/QwenLM/qwen-code/pull/13061) test(managed-agent): 门禁化 provider 重试与释放顺序**
用真实 Spring Broker、Workspace 传输、打包 worker 及 MySQL/MariaDB 门禁补全 FG6f 的 provider 控制部分，覆盖启动应答丢失、契约替换拒绝等场景。

**7. [#13067](https://github.com/QwenLM/qwen-code/pull/13067) fix(cli): 不把命名键上的 Ctrl 修饰符当作 Ctrl+字母**
修复 #13068：按住 Ctrl 按方向键/Delete/Home/End/PageUp/PageDown 不再向 shell 发送杂散的 C0 控制字节，单字母组合键行为保持不变。

**8. [#12985](https://github.com/QwenLM/qwen-code/pull/12985) fix(cli): `mcp add` 拆分逗号分隔的 `--include-tools/--exclude-tools`**
`--exclude-tools write_file,edit_file` 现被正确保存为两个工具名而非一个，与既有 `--oauth-scopes` 行为对齐。

**9. [#12789](https://github.com/QwenLM/qwen-code/pull/12789) fix(core): 扩展生命周期事件遵守用量统计退出选项**
`ExtensionManager` 内部临时 `Config` 仅携带 telemetry 设置，导致用户已解析的用量统计退出与代理配置未生效，本次修复该隐私相关缺陷。

**10. [#13029](https://github.com/QwenLM/qwen-code/pull/13029) fix(core): 交付通知轮次不计入 ACP rewind 序号**
ACP rewind 按位置统计用户提示，而 daemon 投递的后台通知轮次会以普通用户条目落入历史却无对应客户端轮次，导致序号错位，本次将其排除。

> 其他：#9921 / #10280（工具取消原因传播与用户导向取消措辞）、#13032（消除 turn-claim 测试与恢复扫描器的竞态）、#12129 / #12130（移动端可访问性与 Blob 导出）、#12995（M4 关闭锚点测试）、#9305（短内容底部对齐 UI 修复）。

---

## 五、功能需求趋势

从今日全部 Issues/PR 中可提炼出以下五条主线：

**1. Managed Agent / Hosted Workspace 架构（绝对主线）**
#12380、#12867、#13030、#13019、#13039、#13071 等构成完整谱系：双路径架构 → 持久生命周期与 Turns/Actions → 工具审批（D6a）→ 只读搜索工具接纳 → 媒体交付 → 过期发布候选恢复。托管执行、会话所有权与 Workspace 绑定是当前最高密度的投入方向。

**2. 上下文与 Token 治理**
#12028、#12326、#12333、#11321 围绕系统提示 / 工具 Schema / 记忆列表的常驻开销展开，核心矛盾是**省钱与不破坏 Prompt 缓存、不损失工具召回**之间的平衡，且社区明确指出缺少验收门禁。

**3. 自动记忆（Auto-Memory）性能**
#13003、#13004、#13063 分别从“强命中跳过选择器”“空操作后冷却”“工具运行中事件驱动召回”三个角度优化记忆系统的延迟与开销。

**4. Runtime Broker 稳定性与多语言一致性**
#13059、#13060、#13038、#13040、#13041、#13042 集中修复状态机语义（prepared/unknown）、响应体积上限、取消重试有界性、TS/Java 校验器边界对齐及索引泄漏，显示 Java Broker 与 TypeScript provider 的跨语言契约仍在磨合。

**5. 多端覆盖**
Desktop、TypeScript SDK、Java SDK、移动端（#12129/#12130）、VSCode IDE Companion 并行推进，但 IDE 插件发布失败提示其流水线尚需加固。

---

## 六、开发者关注点

1. **CI 与测试稳定性是显性痛点**：#12714（main 分支 CI 失败，涉及 145+ 测试）、#13017（SDK Java 故障门禁 flaky）、#13032（turn-claim 测试竞态）表明主干可靠性与 flaky 测试正在消耗维护者大量精力。

2. **资源泄漏类 Bug 反复出现**：#13016（SDK abort 后 CLI worker 残留）、#13042（per-Session 索引只增不减）反映长驻 daemon / 托管运行时下的生命周期管理仍需系统化治理。

3. **工具调用契约一致性不足**：#12889（必填字段可为空）、#12999（桥接层强加 8 类工具从未自执行的 Schema 校验）说明 Deferred tool_call 桥接与各工具族之间的校验责任边界不清，容易产生“桥接层比工具本身更严”或“谁都不校验”的两难。

4. **隐私与遥测合规**：#12789 揭示扩展生命周期事件未遵守用量统计退出选项，说明 Config 传递链路存在遗漏点，值得做一次全面审计。

5. **发布流程脆弱**：VSCode IDE Companion 0.24.7 发布失败（#13028）与多次“重建而非 rebase”的 PR（如 #13072）显示分支管理与发布流水线需要更稳健的策略。

6. **Prompt 缓存保护成为共识**：无论是 #12326 还是 #11321，开发者都强调任何 Token 优化都**不得使 Prompt 前缀缓存失效**，这已成为该项目的隐性设计约束。

---

*日报生成时间：2026-09-30 · 数据窗口：过去 24 小时*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报
**日期：2026-09-30** | 数据来源：github.com/Hmbown/DeepSeek-TUI（Hmbown/Codewhale）

---

## 1. 今日速览

过去 24 小时社区活跃度极高：**Issues 更新 29 条、PR 更新 50 条**，核心围绕 **FEAT-029 debug 命令组可移植化落地**、**CPU 占用回归问题** 与 **TUI 渲染/输入正确性** 三条主线展开。多个长期悬而未决的回归类 Bug（Windows Terminal 多行粘贴、SSE 无响应头重试缺失）在今日被关闭或推进修复。同时，维护者集中提交了一批"bug-hunt"修复 PR，覆盖 TUI、runtime、CLI、app-server 等多个 crate。

---

## 2. 版本发布

过去 24 小时**无新版本发布**。但社区对 **0.10.0 / 0.10.1** 的回归问题反馈密集，且维护者已在推进 0.10.1 的源码资质认证与有序 PR 集成（见 Issue #6458）。

---

## 3. 社区热点 Issues（Top 10）

**① #5316 [OPEN] EPIC-005: CodeWhale TUI Crate Decomposition（Umbrella）**
评论数最高（30 条）的架构级 Epic。FEAT-029 完整 debug 命令组（14 个命令）已通过 PR #6707 合并入 `main`，是本周期最重要的架构进展。
🔗 https://github.com/Hmbown/Codewhale/issues/5316

**② #6427 [CLOSED] 0.10.0 回归：Windows Terminal 多行粘贴逐行自动提交**
经典回归问题（#5981 再次被打破），直接影响 Windows 用户核心输入体验。已关闭，反映 TUI 输入层与终端能力协商仍不稳定。
🔗 https://github.com/Hmbown/Codewhale/issues/6427

**③ #6728 [OPEN] CPU 占用回归：v0.9.12(空闲) → v0.9.13(中等) → v0.10.0(重度)**
跨三个版本的性能退化，用户提供了三份二进制的对比分析，是当前最严重的性能问题之一。
🔗 https://github.com/Hmbown/Codewhale/issues/6728

**④ #6573 [OPEN] 多 TUI 会话争抢 Subagents Store 导致 CPU 自旋**
与 #6728 同源方向（FreeBSD 平台），根因指向共享存储的 200ms 轮询与锁竞争，PR #6778 正在修复。
🔗 https://github.com/Hmbown/Codewhale/issues/6573

**⑤ #6699 [CLOSED] SSE 请求未收到响应头时 Turn 直接失败且无重试**
网络容错的不一致：同一代码路径下其他网络失败均有重试预算，唯独"连接建立阶段失败"没有。已关闭。
🔗 https://github.com/Hmbown/Codewhale/issues/6699

**⑥ #6700 [OPEN] 将流式重试预算与传输超时暴露为配置项**
承接 #6699，指出相关参数以 `const` 硬编码、代理/弱网用户只能改二进制。社区对"可配置化"诉求明确。
🔗 https://github.com/Hmbown/Codewhale/issues/6700

**⑦ #6745 [OPEN] Windows：受机器 ExecutionPolicy 限制时 shell 工具失效**
提议以进程级 `-ExecutionPolicy Bypass` 解决 PowerShell 脚本被策略拦截的问题，属于 Windows 生态适配痛点。
🔗 https://github.com/Hmbown/Codewhale/issues/6745

**⑧ #6746 [OPEN] Web 搜索：DuckDuckGo 不可达网络下 API Provider 丢失回退**
后端链路尾部依赖 DuckDuckGo，而其内置 Bing 回退不覆盖"连接失败"，导致企业/受限网络下搜索链断裂。
🔗 https://github.com/Hmbown/Codewhale/issues/6746

**⑨ #6435 [CLOSED] shell：繁忙 To-do/Plan 锁变成致命 spawn 失败**
报错信息为内部标识符（`binding shell:<id> is not registered`），缺乏可解释性，且与"守卫承诺命令仍会执行"相矛盾。
🔗 https://github.com/Hmbown/Codewhale/issues/6435

**⑩ #6109 [OPEN] 跨 Codewhale 各端构建确定性视听宠物**
由作者 Hmbown 提出的产品级方向，要求复用 Engine 事件权威与单一确定性世界模型，跨浏览器/TUI/原生端一致。
🔗 https://github.com/Hmbown/Codewhale/issues/6109

> 其他值得留意：#6705（opencode-zen 111 个模型中 58 个因"未验证端点"失败关闭）、#6546（To-do 列表无法管理/清除）、#6767（医疗编码外包垃圾推广，疑似 spam）。

---

## 4. 重要 PR 进展（Top 10）

**① #6773 [CLOSED] fix(web): 网站 Agent 改用 deepseek-flash（V4.1 Flash）**
社区 Agent（triage、PR review、stale、dupes、digest）与"Today's Dispatch"定时任务默认模型切换，是本次唯一涉及**新模型**的变更。
🔗 https://github.com/Hmbown/Codewhale/pull/6773

**② #6778 [OPEN] fix(tasks): 空闲任务列表改为内存应答，绕开共享存储锁**
针对 #6573 的第二片修复，解决 TUI 任务面板每 2.5s 轮询导致的锁争抢。
🔗 https://github.com/Hmbown/Codewhale/pull/6778

**③ #6777 [OPEN] fix: pager 空白与换行宽度、`/tree` 迭代渲染、macOS 休眠抑制器生命周期**
来自 `tui-render-and-runtime-crate` 的 4 项已复核 bug 修复，直接改善 TUI 渲染质量。
🔗 https://github.com/Hmbown/Codewhale/pull/6777

**④ #6776 [OPEN] fix(tui): Composer 输入正确性（多字节点击、超大提交、粘贴顺序、@提及、历史、附件）**
一次性修复 6 个输入层缺陷，其中含双击/三击混用字符与字节索引的经典问题。
🔗 https://github.com/Hmbown/Codewhale/pull/6776

**⑤ #6774 [OPEN] fix(cli,npm): 退出码、隐藏密钥提示、配置与别名路由、wrapper 信号与下载超时**
覆盖 CLI 与 npm 包装器的多项交互与超时缺陷，附带 4 个后续修复提交。
🔗 https://github.com/Hmbown/Codewhale/pull/6774

**⑥ #6772 [OPEN] fix(app-server): 重启后保持 daemon 线程、配置与 bridge 一致**
app-server daemon 通道的 6 项缺陷修复，涉及跨重启的线程链接丢失等一致性问题。
🔗 https://github.com/Hmbown/Codewhale/pull/6772

**⑦ #6768 [CLOSED] fix(snapshot,subagent): 串行化副仓库写入、体积压力下保留 undo、清理 worktree**
含 7 个回归测试（关闭修复时全部失败、开启后全部通过），工程严谨度较高。
🔗 https://github.com/Hmbown/Codewhale/pull/6768

**⑧ #6765 [OPEN] fix(tui): 会话继续、删除、持久化提示与输入顺序**
sessions-persistence-eventloop 通道修复，解决 `--continue` 与删除行为异常。
🔗 https://github.com/Hmbown/Codewhale/pull/6765

**⑨ #6755 [CLOSED] fix(tui): 审批对话框需用户明确输入**
提升安全边界：默认选中改为 Abort，忽略陈旧/修饰键/非按下键，防止"误批准"提权。
🔗 https://github.com/Hmbown/Codewhale/pull/6755

**⑩ #6759 [OPEN] fix(tools): shell 作业保留、输出增量与子进程生命周期**
含 3 个提交，覆盖 Python/插件/Git 的进程containment，是 shell 稳定性系列修复。
🔗 https://github.com/Hmbown/Codewhale/pull/6759

> 其他亮点：#6735（扩展宿主崩溃恢复与心跳监督）、#6748（公开 digest 需维护者审批）、#6771（Runtime API 文件权限 0600 被重置）、#6758（shell 授权区分语法与精确授权数据）、#6662/#6663（EPIC #5482 简体中文 Tier-2/Tier-3 文档补全）。

---

## 5. 功能需求趋势

从 29 条 Issues 与 50 条 PR 中可提炼出以下社区关注方向：

| 方向 | 代表条目 | 说明 |
|---|---|---|
| **TUI 稳定性与渲染质量** | #6427、#6651、#6697、#6704、#6777 | 实时刷新、文本背景异常、跳转按钮渲染等视觉/交互缺陷密集 |
| **性能与资源占用** | #6728、#6573、#6778 | CPU 回归、自旋锁、轮询开销是当前最强呼声 |
| **网络容错与可配置化** | #6699、#6700、#6746 | 重试预算、超时、搜索回退链路的可配置与健壮性 |
| **跨平台/Windows 适配** | #6427、#6745、#6728 | Windows Terminal 粘贴、PowerShell 策略、FreeBSD 性能 |
| **可观测性与 Hooks** | #6689、#6582、#6698 | shell `tool_call_after` 结构化执行回执、测试门禁 |
| **扩展与插件生态** | #6735、#6322、#6303 | 扩展宿主监督、Agent 在线状态、三入口一键安装 |
| **Provider/模型支持** | #6705、#6695、#6773 | opencode-zen 端点白名单、Tsubasa descriptor、DeepSeek V4.1 Flash |
| **国际化文档** | #6662、#6663 | EPIC #5482 简体中文开发者/内部文档补全 |
| **安全** | #6379、#6755 | 夜间依赖扫描（凭据未配置导致 403）、审批对话框提权防护 |

---

## 6. 开发者关注点（痛点与高频需求）

1. **性能回归是首要痛点**：多个用户独立报告 0.10.0 的 CPU 占用与自旋问题（#6728、#6573），且跨平台复现，社区情绪较集中。
2. **错误信息可读性差**：如 shell 报错直接抛出内部标识符 `binding shell:<id> is not registered`（#6435），缺乏用户可理解的原因说明。
3. **配置面缺失**：重试预算、超时等参数硬编码为 `const`，弱网/代理用户只能"改二进制"（#6700），呼声明确。
4. **Windows 体验短板**：多行粘贴逐行提交（#6427）与 ExecutionPolicy 拦截（#6745）表明 Windows 适配仍是薄弱环节。
5. **交互细节打磨不足**：To-do 列表无法清除（#6546）、审批对话框可被预输入误触发（#6755）、Composer 输入多项缺陷（#6776），反映日常使用中的"毛刺"较多。
6. **可观测性需求上升**：Hooks 需要结构化执行回执（#6689、#6582），以便外部工具（如 MemoryWhale）可靠记录 shell 行为。
7. **仓库治理问题**：出现垃圾推广 Issue（#6767 医疗编码外包）及安全扫描因凭据未配置返回 403（#6379），提示需加强 Issue 审核与 CI 凭据管理。

---

*报告生成时间：2026-09-30 | 数据窗口：过去 24 小时*

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

# ComfyUI 社区动态日报 · 2026-09-30

---

## 1. 今日速览

今日 ComfyUI 发布 **v0.38.0**，重点围绕 Qwen Image 2.1 的 KV Cache 逻辑与 Transformer 编译优化，并新增「模型文件可自带注意力类型」能力。社区侧最受关注的是 **MiniMax H3 系列在多种硬件上的稳定性问题**（参考一致性退化、DGX Spark 整机失联、ROCm/HIP 报错），以及一条 **高危供应链安全事件**（第三方节点包携带 RAT + 挖矿程序）。同时，Qwen-Image-2.1 的原地残差更新破坏训练路径的问题被快速提交 Issue 并附上修复 PR。

---

## 2. 版本发布

### v0.38.0
本次更新聚焦 Qwen 系模型的性能与推理正确性：

- **改进 Qwen 2.1 KV Cache 位置逻辑** — 优化缓存定位，降低显存占用与重复计算。([PR #16429](https://github.com/Comfy-Org/ComfyUI/pull/16429))
- **编译 Qwen Image 2.1 Transformer 块** — 通过编译加速 Transformer 前向。([PR #16430](https://github.com/Comfy-Org/ComfyUI/pull/16430))
- **允许模型文件内置注意力类型声明** — 模型可自行指定应使用的注意力实现，减少手动配置出错。

---

## 3. 社区热点 Issues

挑选 10 个最值得关注的 Issue：

1. **#15255 [Bug] Dynamic VRAM streaming 导致所有生成崩溃（CUDA OOM 回归）**
   [链接](https://github.com/Comfy-Org/ComfyUI/issues/15255)
   - **为何重要**：71 条评论，是当前热度最高的 Issue；自 2026-08-03 更新后出现回归，影响面广。官方已标注为 CUDA 错误并上报 NVIDIA，临时方案为 `--cuda-device 0` 或 `--disable-pinned-memory`。
   - **社区反应**：讨论极其活跃，多 GPU 用户受影响最重。

2. **#16631 [Security] champdev-comfyui-nodes 安装后主机被植入 RAT + 挖矿程序**
   [链接](https://github.com/Comfy-Org/ComfyUI/issues/16631)
   - **为何重要**：通过 Comfy Registry / ComfyUI-Manager 安装 `v0.5.2` 后，Windows 桌面用户机器被完整 RAT 与挖矿程序感染并持续 9 天。这是**供应链安全**级别的严重事件，涉及 RCE 节点与攻击者 C2 域名。
   - **社区反应**：已获得 👍，属需立即关注的生态安全问题。

3. **#12619 [Potential Bug] 切换工作流后内容为空**
   [链接](https://github.com/Comfy-Org/ComfyUI/issues/12619)
   - **为何重要**：长期存在的核心编辑器 Bug（自 2026-02 起），影响日常多工作流切换，社区已确认禁用自定义节点后仍复现。
   - **社区反应**：11 条评论、👍 2，属于高频困扰用户的老问题。

4. **#16589 MiniMax H3 Ref2VA 参考一致性显著退化**
   [链接](https://github.com/Comfy-Org/ComfyUI/issues/16589)
   - **为何重要**：在相同工作流/模型文件下，本地 ComfyUI 无法保持参考图的主体身份与空间结构，直接影响视频生成可用性。
   - **社区反应**：7 条评论，MiniMax H3 相关反馈集中涌现。

5. **#16587 MiniMax H3 FL2VA 在单卡 DGX Spark GB10 上导致整机失联**
   [链接](https://github.com/Comfy-Org/ComfyUI/issues/16587)
   - **为何重要**：aarch64 平台上 864×480 / 124 帧推理时操作系统无响应，属严重稳定性事故。
   - **社区反应**：4 条评论，ARM 工作站用户高度关注。

6. **#16653 `_gated_residual` 原地更新残差流，破坏 Qwen-Image-2.1 训练路径**
   [链接](https://github.com/Comfy-Org/ComfyUI/issues/16653)
   - **为何重要**：`comfy/ldm/qwen_image21/model.py` 中每块调用两次、共 32 层深，原地修改了反向传播需要读取的张量，直接破坏训练。
   - **社区反应**：当日提交当日即有对应修复 PR（见 #16654），响应极快。

7. **#15264 [Potential Bug] 更新后 Subgraph 中 KSampler 预览消失**
   [链接](https://github.com/Comfy-Org/ComfyUI/issues/15264)
   - **为何重要**：回归到 v0.28.x 可恢复，说明是近期版本引入的 UI/预览回归，影响子图工作流调试。
   - **社区反应**：👍 3，用户明确给出了可复现的版本对照。

8. **#16644 Wan 2.2 5B 在 Apple Silicon (MPS) 上输出帧损坏**
   [链接](https://github.com/Comfy-Org/ComfyUI/issues/16644)
   - **为何重要**：首帧、VAE、文本编码器与采样 latent 均验证正确，唯独生成帧损坏，指向 MPS 后处理/解码环节。
   - **社区反应**：Mac 用户关注度高，已在 `--disable-all-custom-nodes` 下复现。

9. **#15043 [Feature] 扩展 extra_model_paths 支持更多文件夹**
   [链接](https://github.com/Comfy-Org/ComfyUI/issues/15043)
   - **为何重要**：目前仅限 models 目录，用户希望 input/output/workflows 也能自定义路径，属高频配置需求。
   - **社区反应**：7 条评论，与 #16649 形成同一方向的诉求。

10. **#16526 [AMD ROCm] Anima 模型 SDPA 报 hipErrorInvalidValue**
    [链接](https://github.com/Comfy-Org/ComfyUI/issues/16526)
    - **为何重要**：gfx1201 + torch 2.13 + ROCm 10.0 下最小图即可复现，AMD 平台可用性问题。
    - **社区反应**：3 条评论，跨 5 个 diffusers 版本均复现，确认非节点问题。

> 其他值得留意：#16607 Qwen Image 2.1 Edit 输出过锐/噪声（已关闭）、#13192 SaveVideo 音频张量导致 `avcodec_send_frame(22)` 致命错误、#16648 StartLoop 输入类型受限、#16649 建议用独立启动参数设置 custom_nodes 路径。

---

## 4. 重要 PR 进展

挑选 10 个关键 PR：

1. **#16654 修复原地 gated residual 破坏 Qwen-Image-2.1 训练** — 直接关闭 #16653，恢复反向传播正确性。[链接](https://github.com/Comfy-Org/ComfyUI/pull/16654)

2. **#15474 [XPU] VAE `no_grad` + 执行层显存准备、H3 首帧同步、.gguf 扩展名支持** — 修复 Intel Arc 上 MiniMax H3 视频 VAE 解码 OOM（autograd 保留约 14.7GiB 激活），并支持 GGUF 扩展名识别。[链接](https://github.com/Comfy-Org/ComfyUI/pull/15474)

3. **#16619 修复异步 offload 中 live weight cast 被覆盖** — 静态异步 offload 复用同一 cast buffer，导致 Lumina/Z-Image 的 Q/K 归一化权重被错误覆盖；`--async-offload 1` 下尤为明显。[链接](https://github.com/Comfy-Org/ComfyUI/pull/16619)

4. **#16047 Node API SDK 2.0：基于 ref 的节点执行与 provider seam** — 节点改为持有 ref handle 而非 buffer，通过 `ExecutionPlan → execution_backend.dispatch` 执行，为未来执行后端解耦奠定基础。[链接](https://github.com/Comfy-Org/ComfyUI/pull/16047)

5. **#16656 强制 V2 自定义节点运行时 profile** — 配合 SDK 2.0，manifest 声明 V2 时走 V2 入口，同时保留旧入口兼容本地包。[链接](https://github.com/Comfy-Org/ComfyUI/pull/16656)

6. **#16647 [Partner Nodes] 新增 Anthropic Sonnet 5.5 模型** — API 节点接入新模型，含定价与自动计费测试更新。[链接](https://github.com/Comfy-Org/ComfyUI/pull/16647)

7. **#16657 支持 LynnReal light MiniMax-H3 VAE** — 新增对剪枝 H3 VAE 的加载支持（由 kijai 提交）。[链接](https://github.com/Comfy-Org/ComfyUI/pull/16657)

8. **#16645 批量处理前缀过滤，支持大量模型文件夹的资产扫描** — 约 500+ 模型文件夹时因 `Expression tree is too large` 导致扫描失败，改为每批 200 个。[链接](https://github.com/Comfy-Org/ComfyUI/pull/16645)

9. **#16659 让部分 live-path 索引服务 live-row-at-path 查询** — 将 `is_missing IS 0` 改为 `= 0`，使 SQLite 命中部分唯一索引 `uq_asset_contents_path_live`，避免全表扫描。[链接](https://github.com/Comfy-Org/ComfyUI/pull/16659)

10. **#16456 升级 comfyui-frontend-package 至 1.54.7** — 前端包版本升级，PyPI 已确认可用。[链接](https://github.com/Comfy-Org/ComfyUI/pull/16456)

> 同批资产扫描健壮性修复还包含 #16658（单个模型类别列目录失败不再中止整个扫描）、#16652（文件夹不可列出时跳过而非中止）、#16650（同一路径不同拼写不再清空历史记录）、#16646（驱动器回归且关闭哈希时恢复记录），显示 `--enable-assets` 正在被系统性加固。

---

## 5. 功能需求趋势

从全部 Issues 中提炼，社区关注方向集中在：

- **新模型 / 新模型架构支持**：Qwen Image 2.1（KV Cache、训练路径）、MiniMax H3（Ref2VA / FL2VA / VAE / 轻量 VAE）、Wan 2.2、Anima 等，是 Issue 的绝对主力。
- **硬件与后端兼容性**：Apple Silicon MPS、AMD ROCm、Intel Arc XPU、DGX Spark GB10/aarch64 均有专门问题，跨平台可用性成为核心诉求。
- **性能与显存管理**：VRAM streaming、动态显存、异步 offload、VAE `no_grad`、pinned memory 等，显存相关讨论占比极高。
- **路径与配置灵活性**：`extra_model_paths` 扩展到 input/output/workflows（#15043），以及用独立启动参数设置 `custom_nodes` 路径（#16649），反映 pipeline/容器化场景的配置需求。
- **节点能力扩展**：Start Loop 支持 Latent/Image/Audio 等类型输入（#16648），以及子图、复制粘贴节点等编辑器交互。
- **生态安全与治理**：第三方节点包的恶意代码事件（#16631）推动对 Registry 审核、节点运行时隔离（V2 profile）的关注。

---

## 6. 开发者关注点

- **回归问题频发**：多个 Issue（#15255、#15264）明确指向「某次更新后出现回归」，并给出可回退版本对照，说明版本升级的稳定性验证需加强。
- **跨硬件平台的碎片化痛点**：CUDA、ROCm、MPS、XPU 各有专属问题，且往往在最小图下即可复现，开发者需要更清晰的平台支持矩阵与错误提示。
- **训练路径与推理路径的耦合风险**：`_gated_residual` 原地操作破坏训练（#16653/#16654）暴露出推理优化（编译、KV Cache、异步 offload）可能无意间影响训练正确性，需加强测试覆盖。
- **供应链与安全**：节点安装即可能被植入 RAT/挖矿程序，开发者呼吁更严格的 Registry 审核、权限隔离与运行时 profile（V2 runtime profile，#16656）。
- **配置体验**：模型、自定义节点、输入输出路径的灵活配置仍是长期高频需求，社区希望减少对 YAML 的手工依赖。
- **资产扫描（`--enable-assets`）健壮性**：大量 PR 集中在「单个文件夹异常不应中止全量扫描」，说明大规模安装场景下的容错是当前工程重点。

---

*数据来源：github.com/comfyanonymous/ComfyUI（经 Comfy-Org/ComfyUI 镜像）*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama 社区动态日报 · 2026-09-30

> 数据来源：github.com/ollama/ollama

---

## 一、今日速览

今日主线是 **"System One 模型"** 的集中落地：核心 PR 从 Modelfile 能力声明（#18708 / #18711）、MLX 后端支持（#18701）到官方文档（#18702）形成完整闭环。同时，**v0.35.1-rc0** 发布，带来"单次响应最多十次 web search"的新能力。另一条暗线是开发者 @mann1x 批量提交的 **tool-call / thinking 解析器稳健性修复**，集中暴露了推理与工具调用在边界场景下的可靠性问题。

---

## 二、版本发布

### v0.35.1-rc0（v0.35.1）
- **feat: 允许单次响应最多十次 web search** — @ParthSareen（#18602）
- **MLX: 版本升级** — @dhiltgen（#18651）
- **llama.cpp: 版本升级至 b11232** — @dhiltgen（#18652）

> 说明：围绕"0.35.0 是否为 pre-release"的疑问（Issue #18706）已在本日被关闭，社区确认该标记符合预期。

---

## 三、社区热点 Issues（精选 10 条）

| # | Issue | 关注度 | 为什么重要 |
|---|-------|--------|-----------|
| 1 | **[OPEN] 多模态音频输入支持** #11798 | 👍40 · 💬16 | 社区呼声最高的功能之一，希望像图像输入一样支持 Qwen2-Audio 等音频模型，长期位居需求榜首。 |
| 2 | **[OPEN] Shell 自动补全** #1653 | 👍34 · 💬9 | 发行版打包与 CLI 体验的刚需，已讨论近三年仍未有官方实现，社区持续催更。 |
| 3 | **[OPEN][bug,cloud] glm-5.3 陷入无限推理** #18193 | 👍5 · 💬8 | 云 API 上的 glm-5.3 在 OpenCode/ZCode 中会无限思考并中止任务，而官方 Z.AI 正常，指向云端推理链路问题。 |
| 4 | **[OPEN] System 1 模型支持** #18594 | 👍7 · 💬4 | 与今日多个 PR 直接呼应，社区希望支持 Kev、Laya 等"系统一"快速决策模型。 |
| 5 | **[OPEN] 按上下文长度与量化估算 VRAM** #9774 | 💬5 | 长上下文场景下显存需求暴涨，用户强烈要求在模型页面给出显存估算，是部署体验痛点。 |
| 6 | **[OPEN][bug] Embedding runner 卡在 Stopping…（macOS）** #17428 | 👍2 · 💬4 | `qwen3-embedding:4b` 在 Apple Silicon 上卡死、`/api/embed` 超时无响应，影响生产可用性。 |
| 7 | **[OPEN] 0.34.4 llama-server 全缓存命中后卡死（CUDA/Linux）** #18685 | 👍1 · 💬3 | 一次全缓存命中后该模型后续请求全部挂起，属严重稳定性缺陷。 |
| 8 | **[OPEN] `/v1/chat/completions` 强制注入 `top_p: 1.0`** #18690 | 💬1 | OpenAI 兼容层硬编码覆盖 Modelfile 中的 `PARAMETER top_p`，会静默改变采样行为，兼容性隐患明确。 |
| 9 | **[OPEN] qwen3coder 工具调用解析器误拒长文件写入** #18563 | 💬1 | 解析器把模型生成的工具调用判为非法，并把解析错误当作回答返回客户端，直接影响编码 Agent。 |
| 10 | **[OPEN][CRITICAL][Billing] 账户卡在 Stripe 自动重试循环** #18683 | 💬1 | 计费流程阻断云服务使用与订阅升级，且客服无响应，被标记为严重缺陷。 |

> 其他值得留意：#18507（Windows 11 托盘不启动服务，已关闭）、#18704（Windows CUDA `--list-devices` 间歇性空输出）、#18709（macOS 侧边栏无法调宽）、#925（Tab 补全）、#10491（Conan-embedding-v2，已关闭）。

---

## 四、重要 PR 进展（精选 10 条）

**System One / 能力声明主线**
1. **#18708 [CLOSED] create: 支持显式模型能力声明** — @dhiltgen
   为 Modelfile 引入 `CAPABILITY` 声明，并在创建请求中增加 capabilities 字段；在 GGUF/safetensors 创建、继承、导出中保持声明，并以"decision"能力取代按 Qwen 架构匹配来调度 System One 请求。
2. **#18711 [OPEN] create: 让显式能力在创建与运行时穷尽化** — @dhiltgen
   #18708 的后续，省略时保留推理能力，并允许"仅决策"的 System One 模型。
3. **#18701 [OPEN] mlx: System One 支持** — @dhiltgen
   为 MLX 后端添加 SystemOne 模型支持及测试覆盖。
4. **#18702 [OPEN] docs: 记录 System One API** — @ParthSareen
   新增决策指南与 System One API 参考，涵盖选择/是非/打分问题示例及本地可用性与限制。

**文档与产品行为**
5. **#18710 [OPEN] docs: 在 FAQ 中说明基于 VRAM 的默认上下文长度** — @159753a52
   FAQ 仍写默认 4096，但服务端已按显存分档（≥47GiB→262144、≥23GiB→32768、否则 4096），本次修正文档滞后。
6. **#18700 [OPEN] app: 将聊天历史改为只读并新增导出** — @hoyyeva
   桌面端保留历史会话可读可删，但不再新建/发送；支持单条或整体导出为 Markdown（含附件）。

**模型与工具链**
7. **#17972 [OPEN] feat: 在实验模型与 mlxrunner 中支持 GraniteForCausalLM** — @gabe-l-hart
   为 MLX 后端加入 IBM Granite 4.1 / 4.2 稠密架构支持。
8. **#18578 [OPEN] cmd/server: 新增 `ollama export` / `import` 命令** — @MohamedAliBouhaouala
   配套 `/api/export`、`/api/import` 端点，解决内容寻址 blob 导致的离线/气隙环境迁移难题（Closes #17115）。

**推理稳定性（@mann1x 批量修复）**
9. **#17566 [OPEN] api: 为 thinking 设置 token 预算** — @mann1x
   当前 `think` 只能开/关，模型在思考块内循环会耗尽整个上下文且无输出，本 PR 支持按请求或按模型限制思考预算。
10. **#18281 [OPEN] llm: 将 assistant thinking 传给 chat 模板** — @mann1x
    `llamaServerChatMessage` 漏传 `Thinking` 字段，导致多轮对话中历史思考丢失，影响模板一致性。

> 同批次的 #17563（重复载荷误判为 runaway）、#17564（未写完的工具调用不应下发）、#17565（补全缺失闭合括号）、#18624（qwen3.5 思考通道未闭合即开工具调用）、#18288（丢弃未匹配的 thinking 闭合标签）、#18289（同一 blob 不同 runner flag 需重载）同样值得跟踪。

---

## 五、功能需求趋势

从本期全部 Issues 可提炼出以下社区关注方向：

1. **多模态能力扩展**：音频输入（#11798）成为继图像之后最强烈的需求，多模态模型支持是长期方向。
2. **CLI 与交互体验**：shell/tab 自动补全（#1653、#925）、中文本地化（PR #18684）、`export/import`（#18578）表明用户希望 Ollama 更像成熟的生产级命令行工具。
3. **资源可见性与可预期性**：VRAM 估算（#9774）、默认上下文长度文档（#18710）反映用户对"显存/上下文"的强烈可解释诉求。
4. **新模型与架构支持**：System One 模型（#18594）、Granite（#17972）、Conan-embedding-v2（#10491）显示社区对前沿/专用模型跟进速度敏感。
5. **推理与工具调用的稳定性**：大量 parser/thinking 相关 Issue 与 PR 集中出现，工具调用边界、思考预算、重复检测成为新的质量焦点。
6. **云服务与商业化**：glm-5.3 云推理异常（#18193）、Stripe 计费死循环（#18683）显示 Cloud 产品线的稳定性与支持响应亟待加强。

---

## 六、开发者关注点

综合开发者反馈，当前高频痛点集中在以下几类：

- **解析器边界条件**：tool-call 与 thinking 标签的截断、缺失闭合、通道交错等问题反复出现，且错误会直接以"回答"形式返回给客户端，隐蔽性强、影响编码 Agent（#18563、#18624、#18288 等）。
- **OpenAI 兼容层行为偏差**：如省略 `top_p` 时被硬编码为 1.0，静默覆盖 Modelfile 参数，破坏用户预期（#18690）。
- **跨平台稳定性**：
  - macOS：embedding runner 卡死（#17428）、generate API 挂起（#16049）、UI 细节缺陷（#18709）；
  - Windows：托盘不启动服务（#18507）、CUDA 设备发现间歇性失败（#18704）；
  - Linux：老 glibc 链接失败（#17567）、llama-server 卡死（#18685）。
- **安装与部署健壮性**：弱网环境下 `install.sh` 无法断点续传，反复失败（#18584）。
- **推理资源管理**：长上下文显存爆炸（#9774）与 thinking 无节制消耗上下文（#17566）共同指向"资源预算可控"这一核心诉求。
- **服务与支持体验**：计费/订阅类问题缺乏有效人工响应，被用户标记为严重阻断（#18683）。

---

*报告生成时间：2026-09-30 · 数据窗口：过去 24 小时*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

# llama.cpp 社区动态日报（2026-09-30）

> 数据来源：github.com/ggerganov/llama.cpp · 统计窗口：过去 24 小时

---

## 1. 今日速览

今天最关键的修复集中在**数值精度与图调度**两条主线：AVX512-FP16 的 FP16 累加溢出问题（#29530）先被 revert，随即由 b11262 以「f32 累加」方式重新落地；同时 b11254 修正了 `graph_inputs` 的收集逻辑，解决了 pipeline parallelism（`n_copies > 1`）下输入张量缺失的隐患。社区侧，SWA/recurrent 内存导致的**重复 prefill** 问题（#21831，53 条评论、30 👍）以 CLOSED 收尾，是今日热度最高的讨论；Blackwell/AMD 平台上的性能与 Vulkan 稳定性问题持续发酵。

---

## 2. 版本发布

过去 24 小时密集发布了 **b11249 → b11262** 共 10 个构建，重点更新如下：

| 版本 | 内容 | 链接 |
|---|---|---|
| **b11262** | ggml：在 AVX512-FP16 上将 f16 点积累加改为 **f32**，修复 FP16 累加溢出（取代 #29530） | [PR #29545](https://github.com/ggml-org/llama.cpp/pull/29545) |
| **b11261** | ggml：要求输入张量必须为 `GGML_OP_NONE` | [PR #29647](https://github.com/ggml-org/llama.cpp/pull/29647) |
| **b11260** | hexagon：新增 FP32 `GELU_ERF` / `GEGLU_ERF` 支持，并降低 kernel 寄存器压力 | [PR #29631](https://github.com/ggml-org/llama.cpp/pull/29631) |
| **b11259** | common：在 EOG 处停止接收 draft token（推测解码修正） | [PR #29638](https://github.com/ggml-org/llama.cpp/pull/29638) |
| **b11258** | server：未提供内置 UI 时移除其 service worker，避免浏览器继续展示缓存 UI | [PR #29565](https://github.com/ggml-org/llama.cpp/pull/29565) |
| **b11257** | common：config 目录改用 `fs::path` | [PR #29649](https://github.com/ggml-org/llama.cpp/pull/29649) |
| **b11255** | common：新增 `fs_write_atomic()`，修复下载文件缓冲写错误与 Windows UTF-8 路径问题 | [PR #29642](https://github.com/ggml-org/llama.cpp/pull/29642) |
| **b11254** | ggml：将所有输入张量统一收集进 `graph_inputs`（修复 pipeline parallelism） | [PR #29634](https://github.com/ggml-org/llama.cpp/pull/29634) |
| **b11256 / b11249** | 测试正则适配 M2 Ultra；修复若干 tools/examples 的初始化 | [#29648](https://github.com/ggml-org/llama.cpp/pull/29648) · [#29632](https://github.com/ggml-org/llama.cpp/pull/29632) |

**解读**：AVX512-FP16 的修复是本轮最值得关注的技术点——FP16 累加上限 65,504，在 attention 大点积场景会溢出为 inf，此前的原生 F16 路径因此被回滚（#29530），现改为 f32 累加正式落地。

---

## 3. 社区热点 Issues（Top 10）

1. **#21831 [CLOSED] Server 在后续请求中强制全量重新 preprocess（SWA/recurrent 内存错误）**
   53 评论 · 30 👍 — 今日绝对热点。SWA/recurrent 模型下 KV cache 复用失效，导致每次请求重跑完整 prompt，性能损失巨大。现已关闭，说明修复已合入。
   https://github.com/ggml-org/llama.cpp/issues/21831

2. **#26674 [OPEN] Gemma 4 在 RTX 5060 Ti（Blackwell）上 tg128 性能异常偏低**
   15 评论 — Blackwell 消费卡的实测性能是否符合预期引发讨论，涉及 CUDA + Flash Attention 配置。
   https://github.com/ggml-org/llama.cpp/issues/26674

3. **#25452 [CLOSED] DSV4-Flash churned-reuse 导致 SWA KV-cache 耗尽（崩溃 + 卡死）**
   13 评论 — 与 #21831 同属 SWA 内存管理家族，多卡环境下的缓存复用策略缺陷。
   https://github.com/ggml-org/llama.cpp/issues/25452

4. **#25973 [OPEN] SYCL 在新版 oneAPI 上性能糟糕**
   13 评论 — Intel GPU 路径的性能回归，影响 SYCL 后端的可用性。
   https://github.com/ggml-org/llama.cpp/issues/25973

5. **#28541 [OPEN] RFC：从 diffusion GGUF 生成图像 / 视频 / 音频（LTX-2）**
   10 评论 — 功能类 RFC，社区希望 llama.cpp 从纯文本生成扩展到多模态生成，方向性意义大。
   https://github.com/ggml-org/llama.cpp/issues/28541

6. **#28158 [OPEN] Qwen3.8 DFlash/MTP 推测解码在 Vulkan 上产生越界 token id（== n_vocab）**
   9 评论 · 2 👍 — Strix Point (gfx1150) 上的投机解码缺陷，属于新模型 + 新后端的交叉问题。
   https://github.com/ggml-org/llama.cpp/issues/28158

7. **#24437 [CLOSED] HIP：`GGML_HIP_ROCWMMA_FATTN=ON` 在 gfx1151 上造成严重 prefill 回退（最高 −41%）**
   8 评论 — Strix Halo 上开启 RocWMMA Flash Attention 的代价被量化，对 AMD 用户配置有直接指导意义。
   https://github.com/ggml-org/llama.cpp/issues/24437

8. **#25117 [OPEN] AMD APU + 量化 MoE 目标下 DFlash 性能回退约 2 倍**
   8 评论 — 推测解码在 APU 共享内存架构上反而更慢，与 #28158 共同指向 DFlash 在 AMD 平台的适配问题。
   https://github.com/ggml-org/llama.cpp/issues/25117

9. **#26497 [OPEN] UI Bug：已配置的 MCP Servers 不再显示**
   7 评论 · 4 👍 — WebUI 的 MCP 配置页回归，影响 agent 类工作流，用户反馈明确。
   https://github.com/ggml-org/llama.cpp/issues/26497

10. **#28964 [OPEN] 当所有设备报告可用 VRAM 为 0 时加载模型报 "Invalid vector subscript"**
    6 评论 · 1 👍 — 与 #27440、#29677 同类，属于显存占满/零显存场景下的崩溃，且已有对应修复 PR。
    https://github.com/ggml-org/llama.cpp/issues/28964

**其他值得留意**：#29526（A770 Vulkan 运行 7–8 小时后 decode 退化、返回空 EOS）、#29521（macOS Metal 上 Gemma 4 31B 因默认 n_ctx 过大 OOM）、#29655（Gemma 4 多行流式工具调用不稳定）、#29623（R9700 开启 ReBAR 后 `ErrorDeviceLost`）、#29551（b11222 起未加 `-dev` 即崩溃）。

---

## 4. 重要 PR 进展（Top 10）

1. **#29200 [OPEN] cpu：新增 F16 SWIGLU_OAI 参考实现及 F16 激活算子**
   补齐 CPU 端 F16 激活路径，并扩展 `test-backend-ops` 的 F16 用例，便于 Hexagon 等下游后端做 CPU 差分校验。
   https://github.com/ggml-org/llama.cpp/pull/29200

2. **#29209 [CLOSED] Hexagon：F16 激活算子**
   为 ggml-hexagon HTP 后端添加 SILU/GELU/GEGLU/SWIGLU 等 F16 支持，与 b11260 的 FP32 ERF 支持形成互补。
   https://github.com/ggml-org/llama.cpp/pull/29209

3. **#29671 [OPEN] ggml/AMX：修复批量 `mul_mat` 的权重广播与字节偏移**
   修复 #29670。混合模型（Qwen3.5/3.6 `ssm_out`）在 ubatch 共享时触发的 AMX 路径缺陷。
   https://github.com/ggml-org/llama.cpp/pull/29671

4. **#28243 [OPEN] models：Qwen3.8-Flash-Next MTP 支持**
   启用 1.3–2× 的 MTP 加速，并共享 MTP 模块（复用 `embed_tokens` 以节省磁盘与显存）。
   https://github.com/ggml-org/llama.cpp/pull/28243

5. **#29530 [CLOSED] Revert「ggml：为 F16 操作添加原生 AVX512-FP16 支持」**
   因 FP16 累加溢出导致 attention 输出异常而回滚，随后由 b11262 以 f32 累加方案取代。
   https://github.com/ggml-org/llama.cpp/pull/29530

6. **#29675 [OPEN] ggml：新增 BF16 一元、GLU、二元及 scale 算子（CPU、CUDA）**
   为后续「激活保持 bf16」铺路，先补齐 bf16 逐元素算子族。
   https://github.com/ggml-org/llama.cpp/pull/29675

7. **#29677 [OPEN] model：修复显存占满时加载模型报 "invalid vector subscript"**
   当目标模型已占满 GPU、再加载 draft/MTP 模型时，所有设备报告零空闲显存，导致层切分除零。对应 Issue #28964 / #27440。
   https://github.com/ggml-org/llama.cpp/pull/29677

8. **#27773 [OPEN] 新增 GLM-5.3-Flash（GLM5-Next）支持**
   320B 混合模型，支持文本 + 视觉，架构上混合 34 层 KDA 线性层与 11 层 DSA，属重量级新模型适配。
   https://github.com/ggml-org/llama.cpp/pull/27773

9. **#29676 [OPEN] CUDA：新增 PTQ1_0 支持**
   依赖 #29672，A100 (sm_80) 上 `test-backend-ops` 已 14/14 通过，扩展低位量化在 CUDA 上的覆盖。
   https://github.com/ggml-org/llama.cpp/pull/29676

10. **#29651 [OPEN] CI：新增 models backend check**
    将 `fusion` CI 泛化为 `models-check`，同时运行 `test-llama-archs`，目前仅 Metal 支持 fusion 测试。
    https://github.com/ggml-org/llama.cpp/pull/29651

**其他重要项**：#29679（RDNA3 私有驱动下 MMVQ 4 行策略仅在 8 列生效）、#29165（Adreno 750 的 matvec 兼容性保护）、#25940（HIP RDNA4 的 Q6_K/Q2_K MUL_MAT 优化）、#26979 / #29575（GGUF padding 溢出校验、`get_rows_back` 行越界检查，均已 merge ready）、#29627（ModernBERT reranker 的 `classifier_pooling` 支持）。

---

## 5. 功能需求趋势

从全部 Issues 中可提炼出以下方向：

- **新模型支持与推测解码（MTP/DFlash）**：Qwen3.8-Flash-Next MTP、GLM-5.3-Flash、Gemma 4、DSV4-Flash 等新架构的适配与投机解码正确性/性能是当前最高频话题（#28158、#25117、#26894、#28243、#27773）。
- **长上下文与 KV cache 内存管理**：SWA/recurrent 模型的缓存复用与耗尽问题集中爆发（#21831、#25452），涉及「重复 prefill」这一核心性能痛点。
- **多后端稳定性**：Vulkan（#29623、#29526、#29392）、HIP/ROCm（#29149、#27557）、SYCL（#25973）、Metal（#29521）均有稳定性或性能回退报告，后端碎片化明显。
- **多模态与生成扩展**：从 diffusion GGUF 生成图像/视频/音频的 RFC（#28541）代表社区对 llama.cpp 能力边界的拓展期待。
- **WebUI / MCP / 工具调用**：MCP Server 显示回归（#26497）、Gemma 4 流式工具调用不稳定（#29655）、WebUI reasoning 设置分离（#27118），说明 agent 与交互层需求上升。
- **量化与低位格式**：PTQ1_0、BF16 算子等 PR 显示底层数值格式仍在持续扩展。

---

## 6. 开发者关注点

- **性能回归定位困难**：多个 Issue 以「某构建区间内变慢」形式提出（#29341 b10655→b11140、#24437、#25117），开发者需要更系统的跨版本基准对比。
- **零显存 / 满显存场景崩溃**：#28964、#27440、#29677 反复出现，NaN 层切分与越界访问是典型根因，已有修复但需验证覆盖度。
- **构建回归（regression）**：b11222 起未加 `-dev` 即崩溃（#29551）、Pascal GPU 启动崩溃（#29657）、Windows 下 stdin EOF 触发全控制台 Ctrl+C（#29664），提示近期改动引入了若干平台相关回归。
- **服务端健壮性**：`/infill` 未校验 prompt token id 越界（#29458）、二次 SIGTERM 在信号处理中调用 `exit()` 导致 glibc `free()` 死锁（#29581），属于长期潜伏的工程细节问题。
- **数值精度敏感性**：AVX512-FP16 溢出事件（#29530 → #29545）说明累加精度对 attention 结果影响巨大，开发者对「原生低精度加速」持谨慎态度。

---

*本日报基于给定 GitHub 数据整理，链接指向 ggml-org/llama.cpp 对应 Issue / PR 页面。*

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*