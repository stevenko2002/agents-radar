# AI CLI 工具社区动态日报 2026-09-29

> 生成时间: 2026-09-28 22:15 UTC | 覆盖工具: 12 个

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



以下是今日（2026-09-29）各 AI CLI 工具社区最重要的 8 条更新摘要：

### 1. Claude Code 发布 v2.1.284，引入全新 Sonnet 5.5 模型
Claude Code 发布 v2.1.284 版本，正式新增 **Claude Sonnet 5.5** 模型（`claude-sonnet-5-5`），支持 1M tokens 上下文，并公开了具体定价（输入 $2 / 输出 $10 / Mtok）。此外，该版本改进了 auto mode 下的权限检查，在读取工作目录外部文件时会提示 “Yes, but ask again next time”。
🔗 https://github.com/anthropics/claude-code/releases/tag/v2.1.284

### 2. OpenCode 发布 v1.18.33，修复多项核心缺陷
OpenCode 发布 v1.18.33 版本，重点修复了 Cloudflare AI Gateway 的超时与流式响应问题、MCP 浏览器启动失败时的错误上报逻辑，并对 Debug 配置输出进行了凭据与敏感请求头的脱敏处理。
🔗 https://github.com/anomalyco/opencode/releases/tag/v1.18.33

### 3. Ollama 发布 v0.35.0-rc1 预览版，优化桌面端启动体验
Ollama 推出 v0.35.0-rc1 预览版本，主要围绕桌面 App 的启动与配置体验进行优化，包括启动时同步 macOS 更新菜单与图标状态、将设置页的模型发现改为延迟加载，以及将云端设置测试与 Windows 用户配置隔离。
🔗 https://github.com/ollama/ollama/releases

### 4. ComfyUI 社区警告：恶意节点包携带远控木马与挖矿程序
ComfyUI 社区发布严重安全警告，有用户通过 ComfyUI-Manager 安装 `champdev-comfyui-nodes v0.5.2` 后，系统被植入功能完整的远控木马（RAT）及加密货币挖矿程序，该恶意包已潜伏至少 9 天。社区呼吁用户立即卸载该来源不明的节点。
🔗 https://github.com/Comfy-Org/ComfyUI/issues/16631

### 5. OpenAI Codex 发布 rust-v0.158.0，增强 TUI 复制与 MCP OAuth
OpenAI Codex 正式发布 rust-v0.158.0 版本，增强了全屏 TUI 的交互体验（支持选中即复制并保留 Markdown 格式、右键粘贴），并扩展了 MCP OAuth 支持，允许连接需要预注册 OAuth client secret 的 MCP 服务器。
🔗 https://github.com/openai/codex

### 6. Pi 项目合并重大 PR，引入 Codemode、MCP 与虚拟模型
Pi 仓库合并了数个里程碑式 PR：引入了 **Codemode** 与 **MCP（模型上下文协议）** 支持以扩展 Agent 能力，并新增了 **虚拟模型（Virtual Models）** 功能，允许扩展通过编程方式定义路由策略并动态选择物理模型。
🔗 https://github.com/badlogic/pi-mono/pull/10040

### 7. GitHub Copilot CLI 发布 v1.0.89 及 v1.0.90-0，支持 `.claude/rules`
Copilot CLI 更新至 v1.0.89 及 v1.0.90-0，新增对 Claude Code 规则文件（`.claude/rules`）的直接支持，可作为自定义指令使用。同时，创建 PR 流程现在会遵循仓库的 Pull Request 模板，并新增环境变量 `TGREP_FILE_COUNT_THRESHOLD` 以配置索引搜索的自动激活阈值。
🔗 https://github.com/github/copilot-cli

### 8. llama.cpp 推送 12 个构建版本（b11228 – b11239），推进 batch API 迁移
llama.cpp 过去一天内密集推送了 12 个构建版本，核心工作是将剩余的 examples 和 tools 迁移至新 `batch_ext` API，并统一了 Metal 后端对 `GGML_OP_PAD` 的左侧与循环填充支持，同时修复了 Vulkan、OpenVINO 及 CPU 端的多项编译与运行时错误。
🔗 https://github.com/ggml-org/llama.cpp

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据截止：2026-09-29 ｜ 来源：anthropics/skills**

> ⚠️ 数据说明：本次 PR 榜单的评论数字段均为 `undefined`（接口未返回），因此 PR 排行依据**更新活跃度、改动范围、与活跃 Issue 的关联性**综合判断；Issue 部分评论数完整，可直接量化。以下分析已据此校准。

---

## 1. 热门 Skills 排行（PR）

| 排名 | Skill / PR | 功能 | 讨论热点 | 状态 |
|---|---|---|---|---|
| 1 | [#1742](https://github.com/anthropics/skills/pull/1742) `fix(mcp-builder)` | 适配 `mcp>=2.0.0`：`streamable_http_client` 重命名 + 自定义 headers 传参方式 | 直接修复活跃 Issue #1668，属生态基础组件兼容性 | OPEN（2026-09-27 更新） |
| 2 | [#1298](https://github.com/anthropics/skills/pull/1298) `fix(skill-creator)` | 隔离 trigger evals，修复 Windows 及运行时失败 | skill-creator 评估链路误判问题，与 Issue #1383 同源 | OPEN（2026-09-16 更新） |
| 3 | [#1771](https://github.com/anthropics/skills/pull/1771) `proofcore-contract-auditor` | Solidity/Rust 智能合约静态审计 + TON 链上存证 | Web3 垂直场景，零存储 Merkle 协议 | OPEN |
| 4 | [#1703](https://github.com/anthropics/skills/pull/1703) `md2video-audio` | Markdown → 带人声配音的 MP4（Marp + TTS） | 零成本内容生产，多模态输出 | OPEN |
| 5 | [#1245](https://github.com/anthropics/skills/pull/1245) `notion-spec-to-implementation` 等 | 产品规格转 Notion 可执行任务；简历量化审计 | 工作流自动化 + 个人效率双技能 | OPEN（2026-09-28 更新，最新） |
| 6 | [#525](https://github.com/anthropics/skills/pull/525) `pyxel` | 复古游戏开发、调试与验证 | 跨 6 个月仍持续更新，长尾活跃 | OPEN |
| 7 | [#822](https://github.com/anthropics/skills/pull/822) `AWT (AI Watch Tester)` | AI 驱动端到端测试，浏览器视觉控制 | 零代码测试生成 | OPEN |
| 8 | [#83](https://github.com/anthropics/skills/pull/83) `skill-quality-analyzer` / `skill-security-analyzer` | 五维质量评估 + 技能安全分析（元技能） | 与 Issue #492 安全议题呼应 | OPEN |

---

## 2. 社区需求趋势（来自 Issues）

按评论数排序，诉求高度集中在四类：

**① 安全与信任边界（最高热度）**
- [#492](https://github.com/anthropics/skills/issues/492)（**43 评论**）：社区技能冒用 `anthropic/` 命名空间，构成信任边界滥用 —— 全站最热议题。
- [#412](https://github.com/anthropics/skills/issues/412) `agent-governance`：策略执行、威胁检测、审计追踪。
- [#1175](https://github.com/anthropics/skills/issues/1175)：SKILL.md 内写权限逻辑的安全与上下文隐患。

**② 评估与可靠性（Eval 可信度）**
- [#556](https://github.com/anthropics/skills/issues/556)（12 评论）：`run_eval.py` 技能触发率恒为 0%。
- [#1390](https://github.com/anthropics/skills/issues/1390)：mcp-builder 评估对真实服务器全部伪造错误、得分 0/N。
- [#1383](https://github.com/anthropics/skills/issues/1383) / [#1394](https://github.com/anthropics/skills/issues/1394)：skill-creator 基准静默失败、Windows 触发异常、XSS 风险。

**③ 上下文与 Token 效率**
- [#1487](https://github.com/anthropics/skills/issues/1487)：`claude-api` 单次注入 ~156k tokens 耗尽上下文。
- [#202](https://github.com/anthropics/skills/issues/202)：skill-creator 文档化语气导致 token 浪费。
- [#189](https://github.com/anthropics/skills/issues/189)（👍9）：插件内容重复造成上下文冗余。

**④ 协作与分发**
- [#228](https://github.com/anthropics/skills/issues/228)（16 评论，👍8）：组织级技能共享库。
- [#1329](https://github.com/anthropics/skills/issues/1329)：`compact-memory` 紧凑记忆表示。
- [#29](https://github.com/anthropics/skills/issues/29)：AWS Bedrock 兼容性。

**趋势判断**：社区需求已从"新增功能型 Skill"转向 **安全治理、评估可信度、上下文经济性** 等基础设施层面。

---

## 3. 高潜力待合并 Skills（活跃但未合入）

| PR | 高潜力理由 | 链接 |
|---|---|---|
| `fix(mcp-builder)` #1742 | 修复已确认 Issue #1668，改动精准、依赖升级刚需 | [链接](https://github.com/anthropics/skills/pull/1742) |
| `Update claude-api` #1607 | 修复 #1603，仅标记 4 个已退役模型 ID，低风险易合 | [链接](https://github.com/anthropics/skills/pull/1607) |
| `fix(skill-creator) package_skill.py` #1681 | 修复 `ModuleNotFoundError` 直接执行失败，路径与文档更新 | [链接](https://github.com/anthropics/skills/pull/1681) |
| `notion-spec-to-implementation` #1245 | 2026-09-28 最新更新，工作流自动化高需求方向 | [链接](https://github.com/anthropics/skills/pull/1245) |
| `pyxel` #525 | 跨半年持续维护，社区长尾热情稳定 | [链接](https://github.com/anthropics/skills/pull/525) |
| `AWT` #822 | E2E 测试 + 视觉控制，填补自动化测试空白 | [链接](https://github.com/anthropics/skills/pull/822) |
| `document-typography` #514 | 解决 AI 文档排版通病（孤行、孤段、编号错位） | [链接](https://github.com/anthropics/skills/pull/514) |

---

## 4. Skills 生态洞察

> **社区当前最集中的诉求，已从"扩充 Skill 数量"转向"夯实基础设施"——即修复 skill-creator / mcp-builder 等核心工具的评估与运行可靠性，并建立可信的技能命名与安全边界，同时严控上下文开销。**

一句话概括：**先让技能"可信、可测、可控"，再谈"更多、更强"。**

---

# Claude Code 社区动态日报  
**日期：2026-09-29**

---

## 1. 今日速览  
- **v2.1.284 正式发布**，新增 **Claude Sonnet 5.5** 模型并曝光 pricing 信息；
- 社区持续聚焦 **MCP 功能优化**、**模型行为一致性** 及 **IDE 集成稳定性**；
- 最新 PR 聚集于 **安全加固**、**遥测权限控制** 及 **学习路径可视化工具**。

---

## 2. 版本发布  
### v2.1.284（2026-09-28）
- **新增 Claude Sonnet 5.5** (`claude-sonnet-5-5`)：
  - 上限 1M tokens 上下文；
  - 定价：输入/输出 $2 / $10 / Mtok，缓存读 $0.20 / Mtok；
- **改进权限检查**：在 auto mode 下读取工作目录外部文件前，首次会提示“Yes, but ask again next time”以提升安全体验。
- [🔗 Release 说明](https://github.com/anthropics/claude-code/releases/tag/v2.1.284)

---

## 3. 社区热点 Issues  

| 编号 | 标题 | 状态 | 评论数 | 关键争点 |
|------|------|------|--------|-----------|
| [#74948](https://github.com/anthropics/claude-code/issues/74948) | [BUG] MCP / Web / 权限组合下 preflight 验证失效 | OPEN | 4 |涉及多权限场景下的潜在泄露风险，引发关注 |
| [#77808](https://github.com/anthropics/claude-code/issues/77808) | [BUG] VSCode 插件中文字低对比度 | CLOSED | 3 |UI 可用性问题，影响日常使用 |
| [#77770](https://github.com/anthropics/claude-code/issues/77770) | 系统提示内部模型身份矛盾（Sonnet 5 vs 5.5） | CLOSED | 3 |模型版本混乱，用户体验不一致 |
| [#74004](https://github.com/anthropics/claude-code/issues/74004) | CLI 输入过长被静默截断 | OPEN | 2 |极端输入处理不友好，易引发用户挫败感 |
| [#87023](https://github.com/anthropics/claude-code/issues/87023) | 跨会话记忆在多智能体部署中的表现报告 | OPEN | 2 |聚焦大规模 Agent 架构下的记忆一致性 |
| [#88379](https://github.com/anthropics/claude-code/issues/88379) | WSL 工作树隔离逻辑错误 | OPEN | 2 |Git 路径解析不严谨，可能导致权限越界 |
| [#77319](https://github.com/anthropics/claude-code/issues/77319) | 请求支持禁用 MCP Widget 渲染 | OPEN | 2（+4👍） |UI 定制需求显现，社区希望灵活控制组件展示 |
| [#88079](https://github.com/anthropics/claude-code/issues/88079) | 计划模式破坏默认 Prompt 色彩 | CLOSED | 1 |TUI 样式持久化 bug，影响长期使用体验 |
| [#77747](https://github.com/anthropics/claude-code/issues/77747) | Windows+VSCode 中退出码误判 | CLOSED | 1 |进程监控机制仍需健壮性提升 |
| [#95905](https://github.com/anthropics/claude-code/issues/95905) | Token 消耗异常 | CLOSED | 1 |成本敏感用户聚焦，呼吁优化 token 效率 |

---

## 4. 重要 PR 进展  

| 编号 | 标题 | 状态 | 作者 | 备注 |
|------|------|------|------|-------|
| [#31204](https://github.com/anthropics/claude-code/pull/31204) | 引入 AI Learning Roadmap 可交互画布 | CLOSED | AM-Bear |基于 React+Vite 构建，支持 localStorage 持久化 |
| [#97952](https://github.com/anthropics/claude-code/pull/97952) | GitHub Actions 调用 Claude 的安全加固 | OPEN | qing-ant |增加 egress-firewall runner 与凭证最小化策略 |
| [#97688](https://github.com/anthropics/claude-code/pull/97688) | sec-default 收集器记录不再受用户层级限制 | OPEN | poteat |提升组织级策略落地能力 |
| --- | （其余 7 条未列出具体信息，因无评论或无详细描述） | | | | |

> 注：其余 PR 因无评论/无描述暂不展开，建议关注原仓库动态获取完整进度。

---

## 5. 功能需求趋势  

从 Issue 标签及标题可归纳以下核心需求方向：

| 需求类别 | 表现 | 代表 Issue |
|----------|------|------------|
| **MCP 功能优化** | UI 渲染灵活性、权限模型完善 | #77319、#74948 |
| **跨平台稳定性** | WSL/Windows/macOS 环境兼容性 | #88379、#77747 |
| **模型行为一致性** | 版本信息同步、身份标识统一 | #77770、#97204 |
| **IDE 集成体验** | 编辑器UI、进程管理、样式渲染 | #77808、#88079 |
| **资源与性能调优** | Token 效率、输入裁剪策略 | #95905、#74004 |
| **企业级控制权** | 沙箱隔离、组织策略执行 | #88379、#97688 |

---

## 6. 开发者关注点  

开发者社区反馈集中于以下痛点：

- **权限泄露隐患**：尤其在 MCP + Web 权限混合场景中，preflight 校验不完整；
- **模型版本混乱**：系统提示与实际调用模型间存在身份不匹配；
- **CLI 极端输入处理不足**：长输入被静默截断，缺乏警示机制；
- **IDE 集成功能不够鲁棒**：包括进程退出码误判、界面样式持久化失效等；
- **Token 成本隐形膨胀**：频繁测试与重复任务导致成本失控；
- **GitHub Actions 安全管控**：对外部 API 调用缺乏严格链路管控措施。

--- 

以上内容均来源于 [anthropics/claude-code](https://github.com/anthropics/claude-code) 官方仓库及社区反馈。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-09-29）

数据来源：github.com/openai/codex

---

## 一、今日速览

过去 24 小时，Codex 社区最突出的信号是 **Windows 平台问题集中爆发**：终端窗口在请求期间反复闪烁的 Issue 已累计 65 条评论、108 个赞，成为当日热度最高的讨论。与此同时，**Linux 桌面端 26.924.x 系列出现大面积"任务卡在 Starting your task / 会话永久加载"回归**，短时间内涌入十余条报告，但多数已标记为 CLOSED，显示修复正在快速收敛。版本侧，**rust-v0.158.0 正式版**落地了 TUI 复制粘贴体验改进与 MCP OAuth 客户端密钥支持。

---

## 二、版本发布

### rust-v0.158.0（正式版）
- **TUI 交互增强**：全屏 TUI 支持配置"选中即复制"（copy-on-select）与右键粘贴；复制的对话内容现在会保留 Markdown 格式（#47639、#47896、#48118）。
- **MCP OAuth 支持扩展**：可连接需要预注册 OAuth client secret 的 MCP 服务器，并支持通过 `codex mcp add --oauth-clie...` 命令行配置（条目被截断，完整能力见 Release 说明）。

### Alpha 通道
- rust-v0.160.0-alpha.2
- rust-v0.159.0-alpha.13 / alpha.12 / alpha.11
- rust-v0.158.0-alpha.15.4

> 注：本轮 alpha 版本均未附带详细 changelog，属于常规迭代推进；0.159 与 0.160 两条线并行，说明下一个稳定版的开发已进入中后期。

---

## 三、社区热点 Issues（10 条）

1. **#48074 Windows：安装 Codex daemon 后终端窗口在请求期间反复闪烁**（OPEN / 65 评论 / 108👍）
   https://github.com/openai/codex/issues/48074
   当日最高热度。Windows 11 + cmd 环境下，daemon 启动后每个请求都会触发终端窗口闪现，严重影响正常使用。高赞高评论说明这是**影响面广的可用性阻塞问题**，需优先处理。

2. **#27117 Windows 独立更新从 pwsh 继承 PSModulePath，导致 Get-FileHash 失败**（OPEN / 39 评论 / 28👍）
   https://github.com/openai/codex/issues/27117
   一个自 6 月就存在、至今仍活跃的老问题：更新流程调用 `powershell.exe` 时继承了 PowerShell 7 的模块路径，破坏校验逻辑。长期未修复引发持续讨论，属于**更新链路稳定性痛点**。

3. **#40060 Windows execpolicy 误报：Start-Process 与无关 URL 同时出现即被拦截**（OPEN / 24 评论）
   https://github.com/openai/codex/issues/40060
   在 0.146.0 复现，最新稳定版与 main 分支仍存在同类分类逻辑。**沙箱策略误判会直接阻断正常命令**，对 Windows 自动化流程影响明显。

4. **#48417 Linux Desktop 回归：26.924.22138 每个 prompt 都卡死**（CLOSED / 23 评论）
   https://github.com/openai/codex/issues/48417
   降级到 26.901.41600 即恢复，是典型的版本回归。已关闭，表明修复已落地，是本次 Linux 桌面批量问题的代表性样本。

5. **#48324 ChatGPT Windows 桌面版：加载组织设置失败，composer 无法出现**（OPEN / 22 评论）
   https://github.com/openai/codex/issues/48324
   Web 与 CLI 正常、仅桌面端失败，问题被隔离在桌面客户端与账号设置加载路径，**定位价值高**。

6. **#48522 Windows 桌面应用卡在无限加载 spinner**（OPEN / 13 评论）
   https://github.com/openai/codex/issues/48522
   渲染进程存活但 `app://-/index.html` 路由始终不解析，浏览器版正常。属于**前端路由/加载层缺陷**，与 #48324、#48487 构成 Windows 桌面启动问题簇。

7. **#48624 Linux：任务卡在"Starting your task"（已找到临时绕过方案）**（CLOSED / 9 评论）
   https://github.com/openai/codex/issues/48624
   社区自发给出 workaround，体现了 Linux 桌面回归问题的**用户互助活跃度**。

8. **#48507 MCP OAuth：多进程并发刷新 token 竞争，导致下次启动 invalid_grant 强制重登**（OPEN / 3 评论）
   https://github.com/openai/codex/issues/48507
   与今日 v0.158.0 的 MCP OAuth 新特性直接相关。`mcp_oauth_credentials_store = "file"` 下每次重启所有远程 OAuth MCP 都要求重新认证，是**新功能配套的并发安全缺陷**，值得关注。

9. **#48500 Managed app-server 用首个客户端的 TMUX_PANE 运行 hooks，事件归属错误（0.157 回归）**（OPEN / 4 评论 / 4👍）
   https://github.com/openai/codex/issues/48500
   共享 daemon 继承首个 TUI 的环境变量，导致后续所有终端的生命周期 hook 被错误归属。对**依赖 hook 做审计/自动化的开发者影响较大**。

10. **#39793 功能请求：桌面端与 Linux 应用支持 Codex Remote 远程控制**（OPEN / 4 评论 / 6👍）
    https://github.com/openai/codex/issues/39793
    请求为桌面应用（含 Linux）增加远程主机选择与远程任务控制，场景是 Steam Deck 作为控制平面。作为少见的 enhancement 类高赞条目，反映**远程/多设备工作流**的真实需求。

> 其他值得留意的条目：#48859（Windows 后台 CMD/PowerShell 抢占焦点）、#49053（GPT-5.5 在 Xcode 中进入重复 agent loop 空耗额度）、#48619（macOS refresh token 撤销后重认证仍报错）、#46594（多图生成导致会话不可读）。

---

## 四、重要 PR 进展（10 条）

1. **#49084 增量追踪 app-server 运行中的 turn**（CLOSED）
   https://github.com/openai/codex/pull/49084
   原先每次线程状态变更都要在持锁状态下全量扫描 runtime 重新计数，改为增量维护，**消除锁竞争热点**，服务于优雅重启排空逻辑。

2. **#49082 Guardian diff 路径跳过远程 Git 发现**（CLOSED）
   https://github.com/openai/codex/pull/49082
   避免离线次级执行器在准备 diff 显示时因查找 Git 根目录而卡住审批复验。

3. **#49079 / #49043 集中化并更新 TUI 订阅标签**（CLOSED）
   https://github.com/openai/codex/pull/49079
   https://github.com/openai/codex/pull/49043
   统一状态页与分析视图的套餐映射：`Pro Extra` → `Pro 200`、`Pro Standard` → `Pro 100`、`Pro Max` → `Pro 500`。**提示订阅档位体系可能正在调整**。

4. **#49075 生成子 agent 时保留待就绪环境**（CLOSED）
   https://github.com/openai/codex/pull/49075
   修复在环境尚未就绪时 spawn 子 agent 会丢失起始环境选择的问题。

5. **#49069 后台回收 SQLite 日志库空闲页**（CLOSED）
   https://github.com/openai/codex/pull/49069
   引入后台增量 vacuum worker，删除日志后真正收缩数据库文件，同时保留写入预留空间。

6. **#49067 将配置值排除在 Windows 沙箱策略事件之外**（CLOSED）
   https://github.com/openai/codex/pull/49067
   配置解析错误文本可能包含整行凭据，此改动避免**敏感信息落入持久化策略拒绝事件**，属安全加固。

7. **#49058 修复长路径下的 Windows 沙箱 ACL 修复**（CLOSED）
   https://github.com/openai/codex/pull/49058
   改用 Rust `OpenOptions` 与句柄式 `SetSecurityInfo`，支持超过传统 Windows 路径长度限制的嵌套文件/目录。

8. **#49073 在 TUI 中暴露实时语音目录失败**（CLOSED）
   https://github.com/openai/codex/pull/49073
   此前 `thread/realtime/listVoices` 失败会静默回退到内置目录；现在会传播错误并提示，**避免用户在错误音色目录上继续操作**。

9. **#49041 行内代码选区按纯文本复制**（CLOSED）
   https://github.com/openai/codex/pull/49041
   修复完全选中行内代码时被额外附加 Markdown 反引号的问题，是 v0.158.0 复制体验改进的后续打磨。

10. **#49037 全屏状态行显示 Plan 模式循环提示**（CLOSED）
    https://github.com/openai/codex/pull/49037
    在 composer 空闲且提示可容纳时显示 `Plan mode (shift+tab to cycle)`，改善**模式可发现性**。

> 另有多条 Guardian 评审相关 PR 集中合并（#49065、#49060、#49057、#49038、#49036），涉及加密 agent 消息保留、handoff 根上下文、可选对话历史检索等，显示**安全评审基础设施正在密集迭代**。

---

## 五、功能需求趋势

从全部 Issues 与 PR 中可提炼出以下方向：

- **Windows 平台体验与沙箱正确性**：终端闪烁（#48074）、后台窗口抢焦点（#48859）、execpolicy 误报（#40060）、策略拒绝缺少可操作诊断（#46012）、长路径 ACL（PR #49058）。Windows 是当前问题密度最高的平台。
- **桌面端稳定性（尤其 Linux）**：26.924.x 系列集中出现会话卡加载、任务卡启动、thread/resume 未到达 app-server、SIGCHLD handler 被覆盖等回归。虽多为 CLOSED，但反映**桌面客户端发布质量波动**。
- **MCP / OAuth 与鉴权健壮性**：v0.158.0 刚加入 OAuth client secret 支持，社区随即报出并发刷新竞争（#48507）；另有 macOS refresh token 撤销后仍报错（#48619）。**鉴权链路是新一轮需求焦点**。
- **远程与多设备控制**：#39793 请求桌面端支持 Codex Remote 主机选择与远程任务控制，面向 Steam Deck 等便携控制平面场景。
- **性能与资源占用**：SQLite 停顿（PR #49032）、日志库页回收（PR #49069）、turn 计数锁竞争（PR #49084）、Linux 高 CPU（#48688）。
- **安全评审（Guardian）能力扩展**：历史检索、加密消息保留、handoff 上下文等，属于**Agent 安全治理**方向的持续投入。

---

## 六、开发者关注点

1. **Windows 是当前最大的痛点集中区**：终端闪烁、焦点抢占、沙箱误判、更新失败四类问题同时活跃，且多为 OPEN 状态，直接影响日常开发流畅度。
2. **桌面端版本回归引发信任损耗**：Linux 26.924.x 系列多份报告通过"降级即恢复"验证，开发者期望更严格的发布前回归验证。
3. **鉴权与凭据管理的并发安全**：MCP OAuth 多进程刷新竞争、refresh token 撤销后状态不一致，都是**难以自查、复现成本高**的隐蔽缺陷。
4. **Agent 行为可控性**：#49053（GPT-5.5 在 Xcode 中重复循环空耗额度）、#48980（会话间响应质量不一致）指向对 **agent loop 检测与模型路由可观测性**的需求。
5. **沙箱策略诊断能力不足**：多条 Windows 报告指出被拦截时缺乏可操作提示（#46012），开发者希望获得明确的策略命中原因。
6. **对 hook / 自动化可靠性的依赖增强**：TMUX_PANE 归属错误（#48500）说明已有相当数量的开发者在 hooks 上构建自动化流程，环境隔离正确性成为刚需。

---

*报告基于 github.com/openai/codex 过去 24 小时公开数据整理，Issue/PR 状态以数据抓取时为准。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Thinking Process:

1.  **Understand the Goal**: The user wants a structured daily report (dated 2026-09-29, based on data up to 2026-09-28) for the Gemini CLI community dynamics, based on provided GitHub data (Issues, PRs, Releases). The output must be in professional, concise Chinese, targeting technical developers.

2.  **Analyze the Input Data**:
    *   **Date of report**: 2026-09-29 (data is from the past 24 hours, mostly updated on 2026-09-28).
    *   **Releases**:
        *   `v0.63.0-nightly.20260928.g2fe7c2d3f` (Released on 2026-09-28). Changelog link provided.
    *   **Issues (Top 30 by comments)**:
        *   #3132 [OPEN] [Agents] Post V1.0 Work (46 comments, 50 👍) - SubAgent class implementation request.
        *   #3716 [OPEN] Infra: Build and Tag Docker for PR's (13 comments) - Sandboxed testing environment for PRs.
        *   #22323 [OPEN] Subagent recovery after MAX_TURNS is reported as GOAL success, hiding interruption (13 comments, 2 👍) - Bug in subagent status reporting.
        *   #10673 [OPEN] Flicker free robust terminal rendering (9 comments) - Ink rendering improvements.
        *   #15269 [OPEN] Feature: Missing Subagent Hook Events (8 comments) - Lifecycle hooks for subagents.
        *   #28341 [CLOSED] Infinite auth loop (7 comments, 10 👍) - OAuth loop on Windows/WSL/headless. (Note: linked to a PR #29448).
        *   #22745 [OPEN] Assess the impact of AST-aware file reads, search, and mapping (7 comments, 1 👍) - AST tools value investigation.
        *   #21968 [OPEN] Gemini does not use skills and sub-agents enough (6 comments) - LLM agent routing/autonomy issue.
        *   #11802 [OPEN] Add OTLP headers for telemetry (5 comments, 7 👍) - Auth headers for OTEL Collector.
        *   #26525 [CLOSED] Add deterministic redaction and reduce Auto Memory logging (5 comments) - Security/logging.
        *   #15179 [OPEN] [Feat] Investigate recursive subagent delegation (4 comments, 1 👍) - Subagent nesting.
        *   #14724 [OPEN] Hooks - SessionStart "compress" vs "compact" Incompatibility (4 comments) - Claude Code migration compatibility.
        *   #26522 [CLOSED] Stop Auto Memory from retrying low-signal sessions indefinitely (4 comments).
        *   #22267 [OPEN] [BUG] Browser Agent ignores settings.json overrides (e.g., maxTurns) (4 comments).
        *   #22232 [OPEN] Enhance browser_agent resilience: Automatic session takeover and lock recovery (4 comments).
        *   #21983 [OPEN] browser subagent fails in wayland (4 comments, 1 👍).
        *   #15272 [OPEN] Security: Default Hook Sandboxing (3 comments).
        *   #12244 [OPEN] Robust Observability via OpenTelemetry (3 comments).
        *   #26523 [CLOSED] Surface or quarantine invalid Auto Memory inbox patches (3 comments).
        *   #24246 [OPEN] Gemini CLI encounters 400 error with > 128 tools (3 comments).
        *   #23571 [OPEN] Model frequently creates tmp scripts in random spots (3 comments).
        *   #22672 [OPEN] Agent should stop/discourage destructive behavior (3 comments, 1 👍).
        *   #22186 [OPEN] get-shit-done output hook causes crash (3 comments).
        *   #15464 [OPEN] Hooks Fast Follow (post v1) Issues (2 comments).
        *   #15462 [OPEN] [Enterprise] Hooks must be configurable via enterprise settings (2 comments).
        *   #14722 [OPEN] Hooks - SessionEnd Logout Matcher (2 comments).
        *   #14540 [OPEN] Complete Gemini CLI CI/CD Security Review (2 comments).
        *   #10168 [OPEN] Infra/Confidence: Bundling (2 comments).
        *   #26516 [CLOSED] Memory system bugs and quality improvements (2 comments).
        *   #22746 [OPEN] Investigate using AST aware CLI tools to map codebase (2 comments).
    *   **PRs (Top 20 by comments/activity)**:
        *   #29502 [OPEN] fix(cli): ensure Enter and Spacebar reliably confirm selection list options (priority/p1).
        *   #29528 [OPEN] fix(cli): propagate resolved folder trust state in headless mode (priority/p1).
        *   #29448 [CLOSED] fix(auth): prevent infinite auth loop from file contention, headless keyring, and supervisor state drops (#28341) (priority/p1) - Important fix for Windows/WSL users.
        *   #29540 [OPEN] fix(cli): retry directory removal on Windows locking errors during extension updates.
        *   #29539 [OPEN] fix(core): enable autonomous plan execution in non-interactive mode (priority/p1).
        *   #29432 [OPEN] fix(core): settle queued tool calls on scheduler disposal.
        *   #27650 [OPEN] feat(core): add PromptReplayCache to cache identical model responses.
        *   #28490 [OPEN] fix(core,cli): sanitize URLs in error messages.
        *   #29542 [OPEN] fix(core): disable truncation when maxChars <= 0 in formatTruncatedToolOutput.
        *   #29492 [OPEN] fix(cli): avoid shell interpolation in sandbox build and network setup (security focus).
        *   #29450 [OPEN] refactor(a2a-server): implement V1 to V2 settings migration logic.
        *   #29499 [OPEN] fix(core): serialize file tool operations and make writes atomic (#29078) - Critical race condition fix.
        *   #29476 [OPEN] fix(cli): resolve hang on Enter keypress in interactive mode (#23297).
        *   #29457 [OPEN] fix(core): replace fuzzy requestedExplicitly logic with glob matching in read-many-files - Fixes context bloat bug.
        *   #29536 [OPEN] fix(grep): prevent command-line option injection by passing search patterns with explicit -e delimiter (CWE-88 security hardening).
        *   #29537 [OPEN] Claude/focused meitner oqnrj2 (looks like a translation/refactor or sync, but has priority/p1).
        *   #29535 [OPEN] fix(auth): respect allowed onboarding tier.
        *   #29532 [OPEN] fix(core): honor a RetryInfo delay of zero when classifying quota errors.
        *   #29531 [OPEN] chore/release: bump version to 0.63.0-nightly.20260928.g2fe7c2d3f.
        *   #29319 [CLOSED] fix(sdk): guard JSON.parse on tool-call args in sendStream.

3.  **Drafting the Sections**:

    *   **1. 今日速览 (Today's Summary)**:
        *   Gemini CLI发布了 v0.63.0-nightly.20260928 nightly 版本，重点推进了非交互式/Headless 模式的自主规划执行、认证循环修复以及子代理（Subagent）相关的核心Bug治理。
        *   社区活跃度集中在Agent逻辑（子代理生命周期、Hooks兼容性）、系统安全（认证、沙箱、命令注入防御）以及终端渲染体验的优化上。

    *   **2. 版本发布 (Version Release)**:
        *   Release: `v0.63.0-nightly.20260928.g2fe7c2d3f`
        *   Key highlights inferred from the PRs merged around this version (PR #29531 is the version bump): Includes fixes for headless mode folder trust propagation, autonomous plan execution in non-interactive mode, authentication loop fixes on Windows/WSL, atomic file writes, and grep command-line injection prevention. (Keep it concise, summarizing the overall quality/security/UX improvements based on the PR list).

    *   **3. 社区热点 Issues (Top 10 Hot Issues)**:
        *   Select 10 critical/interesting ones:
            *   **#3132 [Agents] Post V1.0 Work**: High interest (46 comments, 50 👍). Requesting reusable SubAgent class for tool orchestration. Indicates strong community demand for post-V1 agent abstraction. Link: `https://github.com/google-gemini/gemini-cli/issues/3132`
            *   **#22323 Subagent recovery after MAX_TURNS is reported as GOAL success, hiding interruption**: Priority P1 bug. Subagents falsely report success when hitting turn limits, masking failures. Link: `https://github.com/google-gemini/gemini-cli/issues/22323`
            *   **#28341 Infinite auth loop**: Closed but highly impactful (10 👍). Describes persistent OAuth loops on Windows/WSL/headless. Solved by PR #29448. Link: `https://github.com/google-gemini/gemini-cli/issues/28341`
            *   **#21968 Gemini does not use skills and sub-agents enough**: Key usability issue. Users report the model fails to autonomously trigger custom skills/subagents unless explicitly prompted. Link: `https://github.com/google-gemini/gemini-cli/issues/21968`
            *   **#15269 Feature: Missing Subagent Hook Events**: Missing lifecycle hooks (`BeforeSubAgent`/`AfterSubAgent`) for subagents, needed for hook ecosystem parity. Link: `https://github.com/google-gemini/gemini-cli/issues/15269`
            *   **#22745 Assess the impact of AST-aware file reads, search, and mapping**: Epic tracking the value of AST-aware tools to reduce token noise and tool call turns. Link: `https://github.com/google-gemini/gemini-cli/issues/22745`
            *   **#22267 [BUG] Browser Agent ignores settings.json overrides**: Browser Agent ignores configurations like `maxTurns` in settings.json. Link: `https://github.com/google-gemini/gemini-cli/issues/22267`
            *   **#14724 Hooks - SessionStart "compress" vs "compact" Incompatibility**: Compatibility issue with Claude Code migrated hooks due to differing source strings. Link: `https://github.com/google-gemini/gemini-cli/issues/14724`
            *   **#11802 Add OTLP headers for telemetry**: Telemetry customization request (7 👍). Users need to send authenticated metrics/logs to OTEL Collector. Link: `https://github.com/google-gemini/gemini-cli/issues/11802`
            *   **#24246 Gemini CLI encounters 400 error with > 128 tools**: Tool scaling issue. The CLI fails when the tool count is too high, needing smarter tool filtering. Link: `https://github.com/google-gemini/gemini-cli/issues/24246`
        *   *Why important/community reaction*: Summarize briefly for each (e.g., high thumbs up, high comment count indicating active developer discussion).

    *   **4. 重要 PR 进展 (Top 10 Important PRs)**:
        *   **#29448 [CLOSED] fix(auth): prevent infinite auth loop**: Critical fix for Windows/WSL/headless users resolving file contention and keyring issues (#28341). Link: `https://github.com/google-gemini/gemini-cli/pull/29448`
        *   **#29539 fix(core): enable autonomous plan execution in non-interactive mode**: Allows headless plan generation and execution without interactive intervention, vital for CI/CD. Link: `https://github.com/google-gemini/gemini-cli/pull/29539`
        *   **#29499 fix(core): serialize file tool operations and make writes atomic**: Fixes race conditions during parallel subagent file operations, preventing silent lost updates. Link: `https://github.com/google-gemini/gemini-cli/pull/29499`
        *   **#29457 fix(core): replace fuzzy requestedExplicitly logic with glob matching in read-many-files**: Resolves a critical context-bloat bug where binary files were incorrectly loaded. Link: `https://github.com/google-gemini/gemini-cli/pull/29457`
        *   **#29536 fix(grep): prevent command-line option injection (CWE-88)**: Security hardening using `-e` delimiter for search patterns. Link: `https://github.com/google-gemini/gemini-cli/pull/29536`
        *   **#29492 fix(cli): avoid shell interpolation in sandbox build**: Security fix preventing shell metacharacter injection in sandbox paths. Link: `https://github.com/google-gemini/gemini-cli/pull/29492`
        *   **#29528 fix(cli): propagate resolved folder trust state in headless mode**: Fixes split-brain trust state in headless mode. Link: `https://github.com/google-gemini/gemini-cli/pull/29528`
        *   **#27650 feat(core): add PromptReplayCache to cache identical model responses**: Performance/cost optimization feature for repeated prompts. Link: `https://github.com/google-gemini/gemini-cli/pull/27650`
        *   **#29432 fix(core): settle queued tool calls on scheduler disposal**: Improves agent scheduler lifecycle management and prevents hanging/approvals on disposed tasks. Link: `https://github.com/google-gemini/gemini-cli/pull/29432`
        *   **#29542 fix(core): disable truncation when maxChars <= 0**: Edge case fix for `formatTruncatedToolOutput`. Link: `https://github.com/google-gemini/gemini-cli/pull/29542`

    *   **5. 功能需求趋势 (Feature Trends)**:
        *   **Subagent & Agent Orchestration (子代理与智能体编排)**: Dominates both issues and PRs. Features like SubAgent class (#3132), recursive subagent delegation (#15179), subagent hooks (#15269), and subagent scheduler fixes (#29432, #22323) show that post-V1 agent scalability is the top dev focus.
        *   **Security, Compliance, & Sandboxing (安全、合规与沙箱)**: High interest in hook sandboxing (#15272), command injection prevention (#29536, #29492), deterministic secret redaction (#26525), and CI/CD security reviews (#14540).
        *   **Observability & Telemetry (可观测性与遥测)**: Requests for OpenTelemetry OTLP header support (#11802) and general robust observability (#12244).
        *   **Headless & Non-interactive Automation (无头与非交互自动化)**: PRs focusing on headless folder trust (#29528), autonomous planning (#29539), and SDK stream guarding (#29319) show strong enterprise/CI integration demands.
        *   **Performance & Rendering (性能与渲染)**: Investigating AST-aware tools (#22745, #22746) to reduce context bloat, prompt caching (#27650), and terminal rendering flicker (#10673).

    *   **6. 开发者关注点 (Developer Pain Points & High-frequency Demands)**:
        *   **Environment-specific bugs (Windows/WSL/Linux specific)**: High frequency of issues regarding Windows file locking, auth loops, and Wayland browser subagent failures. Developers are pushing for robust cross-platform behavior.
        *   **Agent Autonomy & Smart Routing**: Developers want the CLI to intelligently use skills and sub-agents without micro-managing (#21968), and need clearer failure reporting (false success status in #22323).
        *   **Ecosystem Compatibility (Claude Code & Hooks)**: Migration compatibility is a hot topic (e.g., "compress" vs "compact" hook source parameters in #14724, enterprise-level hook configs in #15462).
        *   **Context Management & Tool Limits**: Practical limits like the 128/400 tool limit (#24246) and context bloat from binary files (#29457) are major pain points for large codebase usage.

4.  **Review and Format**:
    *   Ensure all links are correctly formatted as standard markdown.
    *   Keep the tone professional, objective, and analytical (as requested: "你是一位专注于 AI 开发工具的技术分析师").
    *   Translate technical terms naturally (e.g., "subagent" -> "子代理", "headless mode" -> "无头模式 / 非交互模式", "race condition" -> "竞态条件", "command injection" -> "命令注入").
    *   Check date consistency: The report is for "2026-09-29" summarizing data

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-09-29** ｜ 数据来源：github.com/github/copilot-cli

---

## 一、今日速览

过去 24 小时内，Copilot CLI 连续发布 4 个版本（v1.0.89 → v1.0.89-7 → v1.0.90-0），重点围绕 **自定义指令扩展（支持 `.claude/rules`）、PR 模板遵循、索引搜索阈值配置** 以及终端交互细节打磨。社区侧则集中爆发在 **认证令牌失效** 与 **MCP 连接可靠性** 两大主题上：多条高热度 Issue（#4929、#4971、#4968、#4606）都指向 OAuth / Token 刷新链路，且有两条长期存在的 Nix/NixOS 兼容性问题在今日被关闭。本期无新增 Pull Request。

---

## 二、版本发布

**v1.0.90-0** — 常规修复与变更（发布说明较简略）。

**v1.0.89（2026-09-28）** — 本期内容最丰富的版本：
- **交互体验**：支持点击 `ask_user` 与 elicitation 表单输入框进行聚焦，并将光标定位到点击位置。
- **自定义指令**：新增对 Claude Code 规则文件（`.claude/rules`）的支持，可直接作为 custom instructions 使用，进一步向多工具生态兼容靠拢。
- **侧边栏状态提示**：已完成回合但尚未打开的会话，会显示蓝色圆点标记，方便追踪未读结果。

**v1.0.89-6**：
- **改进**：PR 创建流程现在遵循仓库的 Pull Request 模板，保留必需章节与 checklist 结构；新增 `TGREP_FILE_COUNT_THRESHOLD` 环境变量，用于配置索引搜索的自动激活阈值。
- **修复**：Shell 输出不再附带命令补全的尾部元数据；时间线相关渲染问题修复。

**v1.0.89-7** — 常规修复与变更。

---

## 三、社区热点 Issues（精选 10 条）

1. **#1274 [OPEN] CLI 频繁出现 400 invalid request body 错误**
   [链接](https://github.com/github/copilot-cli/issues/1274)
   评论 29、👍 12，为当期讨论量最高的 Issue。用户反馈近 20 次代码审查请求中约 95% 返回 400，附带了调试日志，问题指向服务端校验或 CLI 请求构造。**重要性**：直接影响核心代码审查场景可用性，且已持续数月未解决，是当前社区情绪最集中的痛点。

2. **#4929 [OPEN] 进程内认证令牌停止刷新，重启前所有提示词失效**
   [链接](https://github.com/github/copilot-cli/issues/4929)
   评论 13。长驻进程会永久丢失认证状态，`/login` 无法恢复，必须重启并 resume 会话。**重要性**：长时任务/CI 场景的阻断性缺陷，与 #4971 形成同类问题聚集。

3. **#4971 [OPEN] 每小时出现一次 Authorization error**
   [链接](https://github.com/github/copilot-cli/issues/4971)
   评论 3，2026-09-26 新报。凭据约每小时失效一次，`/login` 与 `mcp reload` 均无效。**重要性**：与 #4929 同源，说明令牌刷新机制存在系统性问题而非个例。

4. **#2958 [CLOSED] 支持按模式配置默认模型（plan mode vs. autopilot）**
   [链接](https://github.com/github/copilot-cli/issues/2958)
   评论 5、👍 16，为本期点赞数最高的需求。希望按交互模式分别指定默认模型。**重要性**：模型策略精细化配置是高频诉求，已关闭说明有落地进展。

5. **#3392 [CLOSED] NixOS 上 Bash 工具自 v1.0.49 起失效**
   [链接](https://github.com/github/copilot-cli/issues/3392)
   评论 5、👍 13。报错 `Failed to start bash process`，附 strace 日志。**重要性**：影响整个 NixOS 用户群体，👍 数高说明受众明确且受挫感强。

6. **#1838 [CLOSED] Nix/direnv 环境下子进程 I/O 死锁导致 CLI 挂起**
   [链接](https://github.com/github/copilot-cli/issues/1838)
   评论 7、👍 12。flake + direnv 目录启动时 bash 工具完全不可用。**重要性**：与 #3392 同属 Nix 生态兼容问题，两者今日一并关闭，是平台兼容性推进的积极信号。

7. **#4606 [OPEN] Google Workspace MCP OAuth 因 issuer 尾斜杠不匹配失败**
   [链接](https://github.com/github/copilot-cli/issues/4606)
   评论 3、👍 1。`accounts.google.com/` 的授权服务器元数据尾斜杠导致 OAuth 在浏览器授权前即失败。**重要性**：标准合规细节阻断主流 MCP 服务接入。

8. **#4968 [OPEN] OAuth redirect URI 端口不一致导致多数 MCP 服务器登录失败**
   [链接](https://github.com/github/copilot-cli/issues/4968)
   评论 2，2026-09-25 新报。CIMD 声明固定端口，运行时却绑定临时端口，导致回调校验失败。**重要性**：MCP 认证链路的架构级缺陷，影响面广。

9. **#4531 [OPEN] 从 CLI 启动 VS Code 时丢失空的 `GIT_CONFIG_VALUE`，破坏 Git 发现**
   [链接](https://github.com/github/copilot-cli/issues/4531)
   评论 3、👍 3。CLI 向子进程注入 `GIT_CONFIG_*` 索引块时，`core.fsmonitor` 被表示为空值，导致 `code .` 后 Git 功能异常。**重要性**：环境变量泄漏污染宿主工具链，属 IDE 集成中的隐性坑。

10. **#4985 [OPEN] MCP 服务器 env secret 占位符未传递给子进程**
    [链接](https://github.com/github/copilot-cli/issues/4985)
    macOS 上 `${secret:...}` 占位符无法到达 stdio MCP 进程，而普通环境变量方式正常。**重要性**：密钥管理能力与文档承诺不符，涉及安全敏感路径。

**其他值得留意**：#4972（Windows 下 MCP worker 在 wrapper 退出后残留，[链接](https://github.com/github/copilot-cli/issues/4972)）、#3602（SDK 初始化时改写宿主 `process.env` 注入 `safe.bareRepository`，👍 6，[链接](https://github.com/github/copilot-cli/issues/3602)）、#4442（二进制内置 `adm-zip` 0.5.17 存在高危 CVE-2026-39244，[链接](https://github.com/github/copilot-cli/issues/4442)）。

---

## 四、重要 PR 进展

过去 24 小时内**无新增或更新的 Pull Request（共 0 条）**。本期社区讨论全部集中在 Issue 侧，建议关注后续版本发布是否能覆盖上述高热度缺陷。

---

## 五、功能需求趋势

从本期 49 条 Issue 中可提炼出以下方向：

- **MCP 生态成熟度（最突出）**：OAuth 流程（#4606、#4968）、密钥注入（#4985）、连接生命周期与超时（#4983 Miro MCP `server/discover` 超时）、进程清理（#4972）均有集中反馈。MCP 已从"能连上"进入"连接稳定且合规"阶段。
- **认证与令牌管理**：#4929、#4971 表明长驻进程的令牌刷新是结构性需求，而非单点 Bug。
- **模型与 Agent 精细化配置**：#2958（按模式默认模型，👍 16）、#3070（custom agent frontmatter 的 `model:` 支持数组）、#3322（plan 批准后系统提示自相矛盾）。用户希望获得更细粒度的模型/模式控制权。
- **自定义指令与规则体系**：v1.0.89 支持 `.claude/rules`，#4986（no-em-dash 指令被忽略）说明"指令是否被真正遵守"成为新关注点。
- **终端渲染与无障碍**：#2216（深色背景下选区对比度过低）、#1726（百分比未取整）、#1936（单波浪线被误渲染为删除线）。
- **平台兼容性**：Nix/NixOS（#3392、#1838）、Windows（#1250、#2997、#4972）、Linux。
- **IDE / 编辑器集成**：#4531（VS Code + Git）、#4050（`ask_user` 支持 Ctrl-G 调用 `$EDITOR`）、#2997（多行粘贴）。

---

## 六、开发者关注点

1. **认证稳定性是头号痛点**：令牌静默失效、`/login` 无法自愈、每小时循环报错，直接影响长时间运行与自动化场景，社区情绪明显。
2. **MCP 从"可用"到"可靠"的落差**：OAuth 端口/issuer 细节、secret 传递、慢初始化超时、子进程残留——问题横跨 macOS/Windows，且多与标准实现细节相关。
3. **环境变量污染宿主进程**：#3602 与 #4531 同源，CLI 向子进程注入 `GIT_CONFIG_*` 并出现空值，破坏外部工具链，属于"越界修改"类隐患。
4. **平台边缘环境支持不足**：Nix/direnv/NixOS 长期报错（#1838、#3392）虽今日关闭，但 👍 数说明该群体规模不可忽视。
5. **指令遵循度成为新期待**：用户已不满足于"能配置指令"，而是要求模型真正遵守（#4986 的 em dash 问题）。
6. **安全合规压力上升**：#4442 的 `adm-zip` 高危 CVE 直接阻塞企业 Docker 镜像构建，说明供应链安全正成为企业采用的前置门槛。

---

*说明：以上内容基于给定 GitHub 数据整理，Issue 状态（OPEN/CLOSED）以数据快照为准。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>



# OpenCode 社区动态日报 — 2026-09-29

---

## 1. 今日速览

OpenCode v1.18.33 发布，修复 Cloudflare AI Gateway 超时、MCP 浏览器启动报错、调试配置泄露敏感信息等问题。社区热点集中在 **V2 迁移痛点**（工具缺失、环境变量不兼容）、**订阅与配额扣费异常**（支付被拒、余额未使用、免费模型被限流），以及 **TUI 布局与子 Agent 通信** 等功能缺陷上。PR 侧则以核心工具链修复（编辑器、glob、webfetch）和 TUI 交互增强为主。

---

## 2. 版本发布

### v1.18.33（2026-09-28 发布）

| 类别 | 修复内容 |
|------|----------|
| **Cloudflare AI Gateway** | 修复模型响应与流式超时未被正确遵守的问题（@danlapid） |
| **MCP** | 浏览器启动失败时，启动器退出现在会正确上报错误 |
| **调试配置** | Debug 配置输出现在会脱敏凭据和敏感请求头 |
| **Gemini** | 修复 thinking 相关行为（摘要截断，完整补丁见 GitHub） |

🔗 https://github.com/anomalyco/opencode/releases/tag/v1.18.33

---

## 3. 社区热点 Issues（精选 10 条）

### 🔴 #45278 — 订阅支付被拒，卡片与银行均无异常（29 👍，8 👎）
**为什么重要**：用户连续 3 个月正常扣费的卡片突然被拒，银行确认无问题。直接影响付费用户续费，可能涉及支付网关或订阅状态同步 bug。  
🔗 https://github.com/anomalyco/opencode/issues/45278

### 🔴 #42421 — V2 缺少 `todowrite`/`todoread` 工具（14 👎）
**为什么重要**：V1 中模型可通过原生 TODO 工具维护任务列表，V2 运行时工具目录中不再暴露这两个工具，模型失去任务追踪能力。属于 V2 迁移的功能回退。  
🔗 https://github.com/anomalyco/opencode/issues/42421

### 🟡 #42938 — Go 套餐用量 100% 但 Zen 余额未被使用（8 👎）
**为什么重要**：用户启用 "Use balance" 且有 $39.89 余额，Go 用量达上限后直接封禁 12h，不按文档承诺回退到 Zen 余额。涉及计费与余额逻辑。  
🔗 https://github.com/anomalyco/opencode/issues/42938

### 🟡 #42225 — TUI 缩放仅响应 grow，shrink 时不重新布局（7 👎）
**为什么重要**：浏览器端 xterm.js 场景下，终端缩小后 TUI 宽度保持旧值，导致空白或溢出。影响多终端尺寸适配体验。  
🔗 https://github.com/anomalyco/opencode/issues/42225

### 🟡 #41206 — Go 配额用量与使用历史不匹配（7 👎，1 👍）
**为什么重要**：用户 8/7 才开始使用 Go，用量历史却显示更早的记录。配额统计窗口或计数逻辑可能存在偏差。  
🔗 https://github.com/anomalyco/opencode/issues/41206

### 🔵 #9065 — 模型无自我身份感知（7 👎）
**为什么重要**：LLM 在 OpenCode 中运行时不知道自己是哪个模型、哪个服务商。影响提示词工程与上下文感知。已部分实现但未完成。  
🔗 https://github.com/anomalyco/opencode/issues/9065

### 🔵 #51909 — 在 agent env 中暴露版本/模型/提供商信息（6 👎）
**为什么重要**：与 #9065 呼应，请求在环境变量块中注入运行时元数据，使 agent 能感知自身身份。新提出 Issue，热度上升中。  
🔗 https://github.com/anomalyco/opencode/issues/51909

### 🔴 #51887 — OpenCode2 CLI 在 Windows 上无限弹窗（5 👎）
**为什么重要**：安装 `@opencode/cli` 后运行 `opencode2`，后台服务启动时前台窗口反复弹出并抢夺焦点，导致基本无法使用。严重阻塞 Windows 用户。  
🔗 https://github.com/anomalyco/opencode/issues/51887

### 🟡 #51464 — GitLab Astra 模型新建子 Agent 失败（4 👎）
**为什么重要**：`gitlab/duo-chat-gpt-6-astra` 频繁将会话 ID 误传为父会话 ID，导致 "not a child" 错误；切换 Opus 则正常。涉及特定模型的行为适配问题。  
🔗 https://github.com/anomalyco/opencode/issues/51464

### 🔴 #51779 — Zen 余额充足仍报 "Account budget exceeded"（4 👎）
**为什么重要**：用户确认 Zen 有足够额度且等待超 24h，仍持续收到 429 配额超限错误。直接影响付费模型可用性。  
🔗 https://github.com/anomalyco/opencode/issues/51779

---

## 4. 重要 PR 进展（精选 10 条）

| PR | 类型 | 内容 |
|----|------|------|
| [#45940](https://github.com/anomalyco/opencode/pull/45940) | 🐛 修复 | TUI 切换会话时不再因历史消息缓存而卡顿，按需分页加载 |
| [#45933](https://github.com/anomalyco/opencode/pull/45933) | 🐛 修复 | 自动 compaction 触发条件修正为基于有效输入上限，避免溢出 |
| [#45925](https://github.com/anomalyco/opencode/pull/45925) | 🐛 修复 | `edit`/`apply_patch` 拒绝非 UTF-8 文件，防止乱码写回 |
| [#45921](https://github.com/anomalyco/opencode/pull/45921) | ✨ 功能 | TUI 检查器中可直接向子 Agent 发送 prompt 并控制其行为 |
| [#45919](https://github.com/anomalyco/opencode/pull/45919) | 🐛 修复 | 控制台旧版认证增加 Cloudflare Turnstile 验证，防止直接绕过 OAuth |
| [#51924](https://github.com/anomalyco/opencode/pull/51924) | 🐛 修复 | 打开选择器中重复项目按规范路径去重 |
| [#45915](https://github.com/anomalyco/opencode/pull/45915) | 🐛 修复 | 格式化工具子进程增加超时与中断通道，防止挂起 |
| [#45906](https://github.com/anomalyco/opencode/pull/45906) | 🐛 修复 | `webfetch` 正确转换 `application/xhtml+xml` 响应为文本 |
| [#45903](https://github.com/anomalyco/opencode/pull/45903) | 🐛 修复 | `webfetch` 按 `Content-Type` 声明的 charset 解码响应体 |
| [#45898](https://github.com/anomalyco/opencode/pull/45898) | 🐛 修复 | `glob` 工具访问外部目录时增加 `external_directory` 权限检查 |

---

## 5. 功能需求趋势

从 Issues 分布来看，社区关注方向集中在以下几条线：

| 方向 | 相关 Issue | 热度 |
|------|-----------|------|
| **V2 迁移兼容性** | #42421（TODO 工具）、#36990（环境变量）、#51916（home logo） | 🔥🔥🔥 |
| **订阅/配额/计费** | #45278、#42938、#41206、#51779、#51562、#51682 | 🔥🔥🔥 |
| **Agent 身份与环境感知** | #9065、#51909 | 🔥🔥 |
| **子 Agent 通信与控制** | #38964、#38963、#51464、#51921（PR） | 🔥🔥 |
| **TUI/UX 布局与交互** | #42225、#51887、#51223、#51224、#51924（PR） | 🔥🔥 |
| **MCP 深度集成** | #51919（deep link）、#23664（env 插值）、#47584（超时） | 🔥 |
| **权限与安全** | #51908（secret 误判）、#45898（PR）、#45919（PR） | 🔥 |

---

## 6. 开发者关注点

1. **V2 功能回退是最大痛点** — `todowrite`/`todoread`、环境变量兼容、home_logo 等 V1 已有功能在 V2 中缺失或不兼容，社区呼吁优先补齐。
2. **计费与配额体系需透明化** — 多个 Issue 反映支付被拒、余额未使用、免费模型被连带限流、用量历史不一致等问题，建议增加配额状态实时反馈与自动回退机制。
3. **子 Agent 通信模型待增强** — 子 Agent 间无法直接通信、无法向父 Agent 提问、特定模型（Astra）行为异常，反映多 Agent 协作框架仍需打磨。
4. **TUI 在非标准终端下的表现不佳** — 缩放不响应、弹窗失控、权限弹窗在 Code Mode 中不可见，影响实际使用体验。
5. **Windows 平台兼容性** — 路径大小写敏感、CLI 弹窗等问题在 Windows 用户中集中爆发，需系统级适配。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

The user wants me to generate a daily report for the Pi community based on GitHub data from `badlogic/pi-mono`. The date is 2026-09-29.

Let's analyze the input data structure:
- **Releases**: None in the past 24 hours.
- **Issues**: 50 updated in the past 24 hours, showing the top 30 by comment count.
- **Pull Requests**: 12 updated in the past 24 hours.

Let's organize the output as requested:
1. **今日速览** (Today's Overview) - 2-3 sentences summarizing the most important dynamics today.
2. **版本发布** (Releases) - None, so omit or state "无" (None).
3. **社区热点 Issues** (Top 10 Issues to watch) - Choose 10 most significant ones from the list, explain why they are important and community reactions.
4. **重要 PR 进展** (Top 10 PRs) - Choose 10 important ones, explain what they do or fix.
5. **功能需求趋势** (Feature demand trends) - Extract from all Issues (e.g., IDE integration, performance, new model support, etc.).
6. **开发者关注点** (Developer focus points / pain points) - Summarize pain points or high-frequency demands from developer feedback.

Let's do a quick analysis of the Issues provided:
- #10031: Pi sporadically stuck in "Working..." when thinking is stopped with `<esc>`. (17 comments, 2 👍) - High comment count, active bug.
- #3159: edit tool terminated - timeout. (9 comments) - Old but updated recently, bug with edit tool.
- #9508: pi-ai sends unsupported OpenAI-specific request fields/roles/auth to compatible providers. (8 comments) - Compatibility issue with OpenAI-compatible providers.
- #10033: Compaction prompt includes all thinking text and exceeds the context window. (7 comments, 1 👍) - Bug in compaction for reasoning models.
- #9974: pi mishandles Responses API tool calls as returned by llama.cpp, executing duplicated and corrupted calls. (6 comments) - Critical bug in tool calls with llama.cpp Responses API.
- #9905: Anthropic: thinking.display is always sent as "summarized" and the CLI offers no way to change it. (6 comments) - Feature/bug regarding Anthropic thinking display.
- #9828: Fullscreen exit with default fullscreenExitOutput ("transcript") corrupts scrollback during teardown handoff. (4 comments) - TUI rendering bug on exit.
- #10077: llama.cpp model: contextWindow getting reset (to 128000) in models-store.json. (3 comments) - Configuration bug for llama.cpp.
- #10074: Anthropic tool calls: corrupted non-ASCII edit arguments are silently accepted (dropped `u` in `\uXXXX` -> control chars). (3 comments) - Critical bug with non-ASCII (Korean) text in edit tool with Claude.
- #9999: macOS: clipboard image paste (Ctrl+V) pastes the Finder file icon when a file was copied in Finder. (2 comments) - Mac OS clipboard integration bug.
- #10137: Failed threshold compaction continues with the unchanged context. (2 comments) - Bug in compaction logic.
- #5446: Support WebSocket / websocket-cached transport for OpenAI API endpoint. (2 comments) - Feature request.
- #10072: built-in-tool-renderer example removes the tools from the model's system prompt. (2 comments) - Bug in example extension.
- #10130: Show Bash and PowerShell timeout labels in minutes and hours. (2 comments) - UI/UX enhancement.
- #10129: Type-checking depends on when the model catalog was last fetched. (2 comments) - Build system issue.
- #10124: Proposal: typed TUI dialog responses for remote extensions. (2 comments) - API design proposal.
- #10112: Allow ModelRuntime.create() to accept an explicit authContext. (2 comments) - API enhancement.
- #10105: Session creation re-loads all extensions every time: 4s -> >280s in CLI, and cost accumulates across new_chat in one process. (2 comments) - Severe performance regression/issue.
- #10104: Session creation (attach / new_chat) latency: 15.5s baseline, degrading to >140s with cumulative CPU spikes. (2 comments) - Performance issue.
- #10101: AGENTS.md is read by the resource loader but never injected into the system prompt (0.1.1, all modes). (2 comments) - Functional gap.
- #10095: modelRegistry.complete() bypasses provider/observability events — extension-internal LLM calls are invisible. (2 comments) - Observability issue.
- #10093: Expose same-runtime context for individual chat invocations. (2 comments) - API design.
- #10144: Queued prompts are sent one by one instead of batching. (1 comment) - Bug/Feature.
- #10143: TUI: syntax highlight lost for highlight tokens spanning multiple lines. (1 comment) - TUI rendering bug.
- #10141: Regular mode: frozen partial frames accumulate in scrollback when a non-empty extension dock widget is present. (1 comment) - TUI rendering bug.
- #10140: Treat constraint keywords rejected by strict tool use as unsupported. (1 comment) - Tool schema validation issue.
- #10139: Unvalidated toolCall.name permanently poisons Responses API history. (1 comment) - Data corruption/persistence bug.
- #10138: fix: stack grow allocation incorrectly favors earlier children with equal weights. (1 comment) - Algorithm bug.
- #10133: package-manager: ensureGitRef fails with exit 128 on unborn HEAD (interrupted clone). (1 comment) - Git/package manager bug.
- #10132: pi update --extensions reports "Updated packages" while pinned npm specs are silently skipped. (1 comment) - Package manager bug.

Let's look at the PRs:
- #10040: feat(coding-agent): Codemode and MCP (mitsuhiko) - Huge PR adding codemode and MCP.
- #10035: feat(coding-agent): Virtual models (mitsuhiko) - Adds virtual models support.
- #9714: feat(ai): support Azure Foundry Chat Completions deployments (jsanter27) - Azure provider expansion.
- #10136: fix(coding-agent,tui): paste Finder file paths instead of icons (christianklotz) - Fixes clipboard issue #9999.
- #10142: fix(ai): send reasoning effort to OpenAI models on Bedrock Converse (jsanter27) - Bedrock Converse thinking level fix.
- #10135: fix(coding-agent): normalise compaction usage to prevent footer crash on resume (holny) - Compaction usage fix.
- #10134: fix(coding-agent): preserve tool prompt fields in built-in-tool-renderer example (holny) - Fixes example tool renderer issue #10072.
- #9993: feat(ai,coding-agent): add Anthropic Claude support to Google Vertex AI provider (unrealandychan) - Vertex AI Claude support.
- #10119: feat(ai): Discount jev (mitsuhiko) - Allows using llama cpp models as if they are jev.
- #10123: feat(coding-agent): offer typed TUI prompts to remote responders (carlitose) - Implements typed TUI prompts proposal #10124.
- #10122: feat(coding-agent): add managed llama.cpp server mode (mitsuhiko) - `/login llama.cpp` can start llama-server itself.
- #10113: Keep the useful lines when shell output is tail-truncated (arjunkshah12345-hash) - Shell output handling improvement.

Let's select the top 10 Issues to watch:
1. **#10031 (Stuck in "Working..." with ESC)**: High comment count (17), active bug affecting user workflow since v0.84.0. Users have to Ctrl+C and resume.
2. **#9508 (OpenAI-specific fields to compatible providers)**: Compatibility issue causing 400/422 errors on OpenAI-compatible providers. Crucial for multi-provider users.
3. **#10033 (Compaction prompt includes thinking text)**: Critical bug for reasoning models (like DeepSeek V4.1) where compaction fails because thinking text fills the context window.
4. **#9974 (llama.cpp Responses API tool calls mishandling)**: Severe bug causing duplicated and corrupted tool calls with llama.cpp. Directly impacts agent tool use.
5. **#10074 (Corrupted non-ASCII edit arguments with Claude)**: Critical bug for international users (e.g., Korean text) where file edits get corrupted silently.
6. **#10031 / #10105 / #10104 (Session creation performance degradation)**: Session creation latency exploding from 4s to >280s with many extensions. High performance concern for power users.
7. **#9905 (Anthropic thinking.display hardcoded to "summarized")**: Lack of CLI control over Anthropic thinking display level.
8. **#10077 (llama.cpp contextWindow reset to 128000)**: Configuration reset issue causing unexpected context window sizes.
9. **#9999 / #10136 (macOS clipboard paste Finder icon instead of path)**: UX bug on macOS where copying a file and pasting inserts the icon instead of the path (PR #10136 fixes this).
10. **#10101 (AGENTS.md read but not injected)**: Functional gap where AGENTS.md is loaded but ignored by the system prompt.

Let's select the top 10 PRs:
1. **#10040 (Codemode and MCP)**: Major feature addition bringing Codemode and Model Context Protocol to Pi, allowing sandboxed execution and tool integration.
2. **#10035 (Virtual models)**: Introduces experimental virtual models, allowing extensions to define routing policies and select physical models dynamically.
3. **#10122 (Managed llama.cpp server mode)**: Pi can now autonomously manage a local llama-server instance, starting on demand and shutting down when idle.
4. **#9993 (Anthropic Claude on Google Vertex AI)**: Expands Vertex AI provider to support Claude models using Google Cloud credentials.
5. **#9714 (Azure Foundry Chat Completions)**: Adds Chat Completions support to Azure provider (e.g. DeepSeek V4 Pro).
6. **#10123 (Typed TUI prompts to remote responders)**: Implements typed select, confirm, input, and editor dialogs for remote extension integrations.
7. **#10136 (Paste Finder file paths instead of icons)**: Fixes the macOS clipboard bug where file copies resulted in pasting icons instead of paths.
8. **#10142 (Bedrock Converse reasoning effort)**: Fixes thinking level configuration for OpenAI models on AWS Bedrock Converse.
9. **#10113 (Keep useful lines when shell output is tail-truncated)**: Improves shell output handling by preserving important lines above the tail truncation threshold.
10. **#10135 / #10134 (Compaction and Tool renderer fixes)**: Fixes footer crash on resume and preserves tool prompt fields in the built-in-tool-renderer example.

Let's write down the **功能需求趋势** (Feature demand trends):
- **Agent & Tool Ecosystem Expansion**: High interest in MCP (Model Context Protocol), Codemode (JS sandbox for tools), and Virtual Models. This shows a strong trend toward making Pi highly extensible and programmable.
- **Model Compatibility & Provider Support**: Multiple requests and PRs regarding Azure, Google Vertex, Bedrock, and OpenAI-compatible providers, indicating Pi's multi-cloud and multi-provider strategy is actively expanding.
- **Local LLM & llama.cpp Deep Integration**: PRs like managed llama.cpp server mode, Virtual models discounting Jeu, and fixes for llama.cpp Responses API indicate strong focus on local AI execution.
- **Performance & Large-Scale Extension Handling**: Issues highlighting session creation slowdowns with many extensions suggest performance optimization for enterprise/complex setups is a major community demand.
- **TUI/UX Polish**: Multiple issues regarding syntax highlighting, scrollback corruption, and clipboard integration indicate a strong focus on refining the terminal user experience.

Let's write down the **开发者关注点** (Developer focus points / pain points):
- **Tool Call Reliability and Data Integrity**: Issues like corrupted non-ASCII edit arguments (#10074), duplicated/corrupted tool calls from llama.cpp (#9974), and unvalidated tool names poisoning history (#10139) are critical pain points. Developers need rock-solid tool execution and state persistence.
- **Context Management and Compaction Logic**: Multiple bugs around compaction (thinking text inclusion #10033, failed compaction continuing unchanged #10137, footer crash on resume #10135). Correctly managing the context window for reasoning models is a top priority.
- **Observability and Internal API Control**: Issues like `modelRegistry.complete()` bypassing observability events (#10095) and needing explicit `authContext` (#10112) or same-runtime context (#10093) show that developers building extensions need deeper hooks into Pi's internal LLM calls.
- **Build and Environment Drift**: Issue #10129 (type-checking depending on model catalog fetch time) highlights the friction in the build process when dealing with auto-generated provider catalogs.
- **Extension Loading Performance**: The massive overhead of session creation with many extensions (#10104, #10105) is a major bottleneck for developers and power users running complex configurations.

Let's structure the report clearly in Chinese, adhering to the requested format.

Let's double-check the date and details:
Date: 2026-09-29.
Releases: None.
Total issues updated: 50 (showing top 30).
Total PRs updated: 12.

Let's refine the tone: Professional, concise, tailored for technical developers.

Let's translate and format the titles and summaries accurately.

### Section 1: 今日速览
Pi 社区今日动态活跃，主要集中在核心功能的重大扩展与关键 Bug 的修复。最引人瞩目的是 **Codemode、MCP（模型上下文协议）以及虚拟模型（Virtual Models）** 的引入，这标志着 Pi 在 Agent 工具生态和可编程性上迈出了重要一步。同时，针对本地 llama.cpp 深度集成、多云提供商（Azure、Vertex AI）的支持也取得了显著进展。社区方面，用户对 reasoning 模型的上下文压缩（Compaction）Bug、工具调用数据损坏以及大批量扩展下的会话性能退化表达了高度关注。

### Section 2: 版本发布
无（过去 24 小时内无新版本发布）。

### Section 3: 社区热点 Issues（选取 10 个）
Let's select 10 issues that represent critical bugs, performance, and feature demands.

1. **#10031 Pi sporadically stuck in "Working..." when thinking is stopped with `<esc>`**
   - **重要性及社区反应**：高热度 Issue（17条评论，2个赞）。自 v0.84.0 起，用户在使用 `<esc>` 停止思考时 Pi 频繁卡在“Working...”状态，必须通过 `CTRL+c` 强退并使用 `pi -c` 恢复。这直接影响了交互式体验，社区用户反馈强烈，期待官方修复。
   - 链接：https://github.com/earendil-works/pi/issues/10031

2. **#9508 pi-ai sends unsupported OpenAI-specific request fields/roles/auth to compatible providers**
   - **重要性及社区反应**：兼容性关键 Issue（8条评论）。`pi-ai` 在调用某些 OpenAI 兼容 provider 时发送了不支持的字段或角色，导致 API 返回 400/422 错误。对于需要接入第三方兼容模型的用户来说，这是阻断级问题。
   - 链接：https://github.com/earendil-works/pi/issues/9508

3. **#10033 Compaction prompt includes all thinking text and exceeds the context window**
   - **重要性及社区反应**：Reasoning 模型用户的核心痛点（7条评论，1个赞）。在使用类似 DeepSeek V4.1 等推理模型时，自动压缩（Compaction）会话时会将历史 thinking 文本原样写入摘要提示词，导致上下文窗口溢出，压缩永远无法成功。
   - 链接：https://github.com/earendil-works/pi/issues/10033

4. **#9974 pi mishandles Responses API tool calls as returned by llama.cpp**
   - **重要性及社区反应**：工具调用严重缺陷（6条评论）。Pi 错误解析了 llama.cpp 返回的 Responses API 工具调用流，导致重复执行和损坏的工具调用。这直接破坏了 Agent 的核心工作流。
   - 链接：https://github.com/earendil-works/pi/issues/9974

5. **#10074 Anthropic tool calls: corrupted non-ASCII edit arguments are silently accepted**
   - **重要性及社区反应**：国际化用户的致命痛点（3条评论）。在使用 Claude 模型通过 `edit` 工具修改包含韩文等非 ASCII 字符的文件时，转义序列（如 `\uXXXX`）会被静默破坏，导致文件被静默损坏，需要大量手动重试。
   - 链接：https://github.com/earendil-works/pi/issues/10074

6. **#10105 / #10104 Session creation re-loads all extensions every time (4

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-09-29）

> 数据来源：github.com/QwenLM/qwen-code ｜ 统计窗口：过去 24 小时（更新于 2026-09-28）

---

## 一、今日速览

1. **托管 Agent（Managed Agent）架构进入落地冲刺期**：Issue #12380 的双路径架构提案以 37 条评论居首，配套的 Stage B/D 集成、宿主 Harness、Runtime Broker 等子任务密集更新，PR #12358（独立 Managed Agent 栈）与 #12868（Broker provider 控制）同步推进。
2. **上下文与记忆治理成为第二大主线**：非对话上下文 token 治理（#12028）、结构化 Auto Memory 落地跟踪（#12947）及其配套 PR #12951 形成一条完整的"降本增效"链路。
3. **多个 P1/P2 缺陷集中收口**：Remote-SSH 会话创建失败（#12416）、ripgrep 可执行位丢失（#12679）、硬编码 temperature 导致 400（#12928）等阻塞性问题均有明确修复方向或已关闭。

---

## 二、版本发布

过去 24 小时内**无新版本发布**。需注意 Issue #12880 记录了 `v0.24.6-nightly.20260927` 的发布流程失败（`integration_none` 作业失败，已关闭），当前主线版本仍为 0.24.6。

---

## 三、社区热点 Issues（Top 10）

**1. #12380 [OPEN] 托管 Agent 双路径架构与分阶段交付提案** ⭐最热（37 评论）
[链接](https://github.com/QwenLM/qwen-code/issues/12380)
定义分阶段的 Managed Agent 架构：保留现有 TypeScript agent loop，将模型推理与工具环境供给解耦，为 Session 提供持久所有权、Workspace 绑定与可恢复的工具执行。这是当前仓库**最大的架构级提案**，社区讨论极为活跃，后续 Stage B/D 系列 Issue（#12737、#12867、#12847）均由此派生。

**2. #12416 [OPEN][P1] Remote-SSH 下所有 POST /session 失败（write EPIPE）**
[链接](https://github.com/QwenLM/qwen-code/issues/12416)
Companion 0.24.2 在 Remote-SSH 场景下创建任何会话均抛出 `BridgeChannelClosedError`，而独立 CLI 正常。作为唯一的 P1 级 bug，直接影响远程开发者的核心可用性，17 条评论显示社区排查活跃。

**3. #12737 [OPEN] acp-bridge Stage B 宿主集成**
[链接](https://github.com/QwenLM/qwen-code/issues/12737)
明确调度决策：普通本地 `qwen serve` 的 Managed 执行优先级下调，优先交付 Hosted Managed 切片，同时保留已合并的 paired-host 基础与 M1/M3 保护。反映了团队在架构扩张与交付节奏之间的取舍。

**4. #12028 [OPEN] 非对话上下文 token 治理**
[链接](https://github.com/QwenLM/qwen-code/issues/12028)
指出 system prompt、内置工具 schema、`QWEN.md`、skill 列表在**每次请求**都被发送计费，在大上下文模型上开销可轻易超过对话本身。这是 token 成本优化的纲领性 Issue，并已派生出 #12947 等子跟踪项。

**5. #12947 [OPEN] 结构化 Auto Memory 上线就绪度跟踪**
[链接](https://github.com/QwenLM/qwen-code/issues/12947)
作为 #10151 的收口跟踪器与 #12028 的子轨道，梳理 Auto Memory 在主分支上推广前剩余的正确性、有效性与验证工作。

**6. #10151 [OPEN] 用结构化召回与无损迁移改进 Auto Memory**
[链接](https://github.com/QwenLM/qwen-code/issues/10151)
提出为每个记忆文件添加结构化检索元数据，同时保留旧路径作为兼容回退，实现按需召回与无损迁移。是记忆系统的核心设计讨论。

**7. #8281 [OPEN] 新增 IMAP/SMTP 邮件渠道**
[链接](https://github.com/QwenLM/qwen-code/issues/8281)
让用户通过专用邮箱与 Qwen Code agent 通信，首版提供 provider 中立的小功能集。属于"背景自动化"路线下的新渠道扩展，社区持续关注。

**8. #12835 [CLOSED] Skill 列表在 Skill 工具被排除时仍被注入**
[链接](https://github.com/QwenLM/qwen-code/issues/12835)
即使用 `--exclude-tools skill` 排除工具，请求日志中仍带有 skill 列表的 `<system-reminder>`。这是 #12028 token 治理的一个具体病灶，已快速关闭修复。

**9. #12679 [CLOSED][P1] 全新全局安装的 ripgrep 缺少可执行位（0644）**
[链接](https://github.com/QwenLM/qwen-code/issues/12679)
发布包中 vendored ripgrep 权限为 0644 且无任何路径恢复 exec 位（自更新修复逻辑不覆盖）。在 `@qwen-code/qwen-code@0.24.5` 注册表 tarball 上第一手验证，属于影响新用户首次安装体验的严重打包缺陷。

**10. #12928 [OPEN][P2] 移除内部模型请求中的硬编码 temperature**
[链接](https://github.com/QwenLM/qwen-code/issues/12928)
对草稿消息分类的辅助请求被路由到 `gpt-6-astra` 时携带固定 `temperature: 0.2`，导致 HTTP 400。反映现代 provider 对 `temperature` 参数日益收紧的兼容性问题，已有对应 PR #12958。

> 其他值得关注：#11471（Auto Memory 提取缺少频率门控，每轮重复 fork）、#12899/#12859（Runtime Broker 数值编解码导致持久化行不可读）、#12874（macOS 右侧扩展面板无法关闭）。

---

## 四、重要 PR 进展（Top 10）

**1. #12358 [OPEN] feat(managed-agent): 新增独立 Managed Agent 栈（Draft）**
[链接](https://github.com/QwenLM/qwen-code/pull/12358)
提供从常驻 Harness 到 Java 控制面再到会话级 Tool Runtime 的端到端预览，含持久化 Managed Session 记录与 Spring 控制面。是 #12380 架构的**参考实现**。

**2. #12868 [OPEN] feat(serve): 实现通用 Broker provider 控制**
[链接](https://github.com/QwenLM/qwen-code/pull/12868)
将 Broker provider 接入版本化 worker 契约（manifest、turn 准备、工具准备、审批、预检、文件历史），每次调用预留持久化的七字段引用。

**3. #12951 [OPEN] perf(memory): 降低自动提取的 token 开销**
[链接](https://github.com/QwenLM/qwen-code/pull/12951)
自动记忆提取继承父对话时剥离运行时提醒块、skill 目录与隐藏推理，仅保留有助于区分只读轮次与新增持久信息的工具调用结果。

**4. #12958 [OPEN] fix(core): 移除内部模型请求的硬编码 temperature（#12928）**
[链接](https://github.com/QwenLM/qwen-code/pull/12958)
直接修复 #12928，兼容不再支持/拒绝 `temperature` 参数的现代 provider（如 OpenAI GPT-6 在非 `none` 推理强度下的要求）。

**5. #12901 [OPEN] fix(core): 针对目标 schema 预校验桥接的 tool_call 参数**
[链接](https://github.com/QwenLM/qwen-code/pull/12901)
在 `resolveDeferredToolCall` 中、调用被解包交给调度器**之前**，用目标工具的 `validateToolParams` 校验参数，非法调用直接以 `INVALID` 拒绝，修复 #12889 所述"必填字段可为空"问题。

**6. #12862 [OPEN] fix(cli): 从 aux-model 选择器出口清除 userinfo 凭据**
[链接](https://github.com/QwenLM/qwen-code/pull/12862)
当 provider baseUrl 内嵌 `https://user:sk-...@host/v1` 时，选择器持久化的后缀实为凭据，此 PR 修复该凭据泄露面。属安全类修复。

**7. #12531 [OPEN] fix(core): 阻止 MCP 服务器规则授权同名冲突服务器**
[链接](https://github.com/QwenLM/qwen-code/pull/12531)
不再通过有损的 `sanitizeToolNameForProvider()` 归约 MCP 服务器级与通配符权限模式，改为对可信的两种拼写做字面前缀比较，堵住权限越权路径。

**8. #12665 [OPEN] fix(cli): 上报被丢弃的 @ 引用而非静默丢弃**
[链接](https://github.com/QwenLM/qwen-code/pull/12665)
当引用因越界、读取期间变更、快照失败、不可读、被 git/qwen 过滤等原因被拒时，明确上报而非无声消失，改善调试体验。

**9. #12954 / #12945 [OPEN] test(hosted): Shell 输出捕获失败门控与 Hosted 延迟基线**
[链接](https://github.com/QwenLM/qwen-code/pull/12954) ｜ [链接](https://github.com/QwenLM/qwen-code/pull/12945)
前者在持久化 1 MiB 输出前缀后杀死发布者/worker 并拒绝 SQL 事务；后者用打包 Harness + Spring SQL Session Store + 真实本地 Broker 建立可复现延迟基线。体现团队对 Hosted 路径**可靠性验证**的投入。

**10. #12127 / #12129 / #12130 / #12247 [OPEN] feat(mobile): 移动端分阶段能力补齐**
[链接](https://github.com/QwenLM/qwen-code/pull/12127) ｜ [链接](https://github.com/QwenLM/qwen-code/pull/12129) ｜ [链接](https://github.com/QwenLM/qwen-code/pull/12130) ｜ [链接](https://github.com/QwenLM/qwen-code/pull/12247)
同一作者持续推进：麦克风作用域授权、无障碍改进、Blob 导出走系统文档选择器、Activity 重建后恢复连接与会话路由。移动端作为平台分发方向的重要拼图。

> 其他：#12650（CI yamllint 回退加固）、#11562（一次性系统提醒不再回显给用户）、#12695（通道退出原因写入 daemon.log）。

---

## 五、功能需求趋势

从过去 24 小时的 50 条 Issue 与 50 条 PR 中，可提炼出以下社区最关注的方向：

| 方向 | 代表 Issue/PR | 说明 |
|---|---|---|
| **托管 Agent 架构（最高热度）** | #12380、#12737、#12867、#12847、#12358、#12868 | 会话持久化、Workspace 绑定、可恢复工具执行、Java 控制面，是当前投入最大的方向 |
| **上下文 / Token 成本治理** | #12028、#12947、#12835、#12951 | 非对话上下文（system prompt、工具 schema、skill 列表）的按请求计费问题被系统性治理 |
| **记忆系统（Auto Memory）** | #10151、#12853、#12929、#8998、#11471 | 结构化召回、无损迁移、提取频率门控、遗留元数据迁移时机 |
| **IDE / 编辑器集成** | #12416、#12059、#12093 | Remote-SSH、远程 webview、CSP、VS Code Companion 的远程场景稳定性 |
| **平台分发与安装** | #12679、#12874 | 打包权限位、macOS 桌面端 UI 缺陷 |
| **多模型 / Provider 兼容** | #12928、#12889 | 参数兼容（temperature）、工具调用 schema 校验 |
| **新渠道与自动化** | #8281 | Email（IMAP/SMTP）渠道，背景自动化路线 |
| **移动端** | #12127、#12129、#12130、#12247 | Android 权限、无障碍、文件导出、状态恢复 |

---

## 六、开发者关注点

综合 Issue 与 PR 的评论密度和严重程度，开发者反馈的痛点集中在以下几类：

1. **远程开发可用性（高优先级阻塞）**
   Remote-SSH 下 `POST /session` 全部失败（#12416）、远程 webview 的端口转发与 IPv6 CSP 问题（#12059、#12093）——远程/容器化开发场景是当前最痛的可用性缺口。

2. **发布与安装质量**
   ripgrep 缺可执行位（#12679）、nightly 发布流水线失败（#12880）、CI 主分支测试失败（#12714）——供应链与发布流程的健壮性被反复质疑。

3. **持久化数据正确性**
   Runtime Broker 在 fastjson2 2.0.65 下，正/负 scale 的 `BigDecimal` 在 JDBC 持久化后**无法读回**（#12899、#12859），造成"不可读行"；以及持久化启动僵尸进程（#12956）。这类静默数据损坏问题对可靠性影响极大。

4. **隐私与遥测合规**
   在 `usageStatisticsEnabled: false` 时，`qwen mcp reconnect` 仍上传 `session_start`（#12844）；aux-model 选择器出口泄露内嵌凭据（#12862）。开发者对"关闭开关后仍上报"的行为非常敏感。

5. **Token 成本可见性缺失**
   #12028 指出非对话上下文开销"以小百分比形式出现，没人注意到"，开发者希望获得更透明的 token 归因与治理手段。

6. **审查债务与 PR 收敛**
   多个 Issue（#11408、#12853、#12847）专门用于承载 PR 审查中**被推迟的非阻塞发现**，说明社区在"严格审查"与"PR 收敛"之间存在持续张力，需要机制化地管理审查债务。

7. **跨平台 UI 细节**
   macOS 桌面端右侧面板 toggle 状态机缺陷（#12874）、Web Shell 中重建 diff 缺乏提示（#12919），反映 UI 一致性仍需打磨。

---

*以上内容基于提供的 GitHub 数据整理，如需追踪具体议题进展，请点击对应链接。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

Thinking Process:

1.  **Understand the Goal**: The user wants a daily community dynamic report for "DeepSeek TUI" (based on GitHub data from `Hmbown/DeepSeek-TUI`, but the data provided refers to `Hmbown/Codewhale` - likely a rename or fork/synonym in the prompt's context, I will stick to the data provided and use the name "DeepSeek TUI / Codewhale" or just "DeepSeek TUI" as requested but refer to the issues/PRs accurately). The date is 2026-09-29 (data is for the past 24 hours, mostly updated on 2026-09-28).

2.  **Analyze the Input Data**:
    *   **Releases**: None in the past 24 hours (but there is a PR #6708 `release: v0.10.1`).
    *   **Issues (25 total, selected 10 key ones)**:
        *   #5316 [OPEN] EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella) - Core execution plan, big refactor.
        *   #6015 [CLOSED] [documentation, enhancement] feat(fleet): adaptive anti-stall + wider read-only shell grammar - Closed, part of core plan.
        *   #6699 [OPEN] [enhancement, needs-triage] Turn fails with no retry when the SSE request never receives response headers - Network resilience.
        *   #6144 [CLOSED] [rust, cleanup] Session persistence: decide whether session_manager or codewhale-state owns session truth - Closed, refactoring ownership.
        *   #6700 [OPEN] [needs-triage] Expose stream retry budgets and transport timeouts as configuration - Configurability for flaky networks.
        *   #6706 [OPEN] [enhancement] refactor(commands): make the complete debug group portable (FEAT-029) - Porting slash commands.
        *   #6705 [OPEN] [needs-triage] opencode-zen: 58 of 111 catalog models fail closed as "unproven endpoint" - Model catalog staleness.
        *   #6704 [OPEN] [bug, needs-triage] The text background in the TUI interface is abnormal. - Visual bug.
        *   #6702 [OPEN] [bot-authored] health digest 2026-09-28 - CI health check showing red on main.
        *   #6698 [OPEN] test: shared-process workspace gate fails on main while nextest CI passes - Test inconsistency.
        *   #6697 [OPEN] [bug, needs-triage] The latest-message jump button in the TUI renders abnormally. - Visual bug.
        *   #6644 [CLOSED] TUI /undo: path-scoped restore... - Closed.
        *   #6690 [CLOSED] v0.10.0: OpenRouter session costs always show "rate unavailable" - Pricing bug.
        *   #6688 [CLOSED] exec takes the prompt only as argv, so anything above ~128 KiB fails with E2BIG - Command line limit bug.
    *   **PRs (selected top 10 by comment/relevance)**:
        *   #6708 [OPEN] release: v0.10.1 - Version bump.
        *   #6703 [CLOSED] fix(engine): no per-turn wall-clock limit by default - Fixes one-hour turn stop.
        *   #6707 [OPEN] refactor(commands): make the complete debug group portable (FEAT-029) - Closes #6706.
        *   #6646 [OPEN] perf(tui): stop walking the whole item store to list or open a thread - Performance optimization (1.3s warm / 6.7s cold).
        *   #6701 [OPEN] [contribution-gate] feat(web): move the contribute page onto the dictionary spine - i18n.
        *   #6645 [CLOSED] fix(runtime): threads own the restore points on their turns; undo restores or refuses (#6621) - Snapshot ownership.
        *   #6682 [CLOSED] fix(tui): scope /undo to the paths the undone step changed (#6644) - Undo refinement.
        *   #6687 [CLOSED] fix(tui): first launch keeps the configured provider instead of adopting local Ollama - Config bug.
        *   #6667 [CLOSED] fix(tui): Ctrl+T moves to a new effective thinking tier on fixed routes - Thinking tier routing.
        *   #6660 [CLOSED] Runtime: turns carry typed artifact references... - Follow-up to #6645.
        *   #6640 [CLOSED] fix(sessions): stop orphaning sessions at their writers and repair existing orphans (#6144) - Session authority.
        *   #6637 [CLOSED] fix(fleet): read-only agents run read-only commands; refusals are actionable (#6015) - Fleet grammar.

3.  **Drafting the Sections**:

    *   **1. 今日速览 (Today's Overview)**:
        *   Codewhale (DeepSeek TUI) community is highly active, focusing on version 0.10.1 release prep and major refactoring (FEAT-029, session ownership).
        *   Key themes: network resilience configuration, TUI rendering bugs, and performance optimizations for large item stores.
        *   Version bump to 0.10.1 is in progress (PR #6708), addressing critical issues like default wall-clock limits and provider selection.

    *   **2. 版本发布 (Version Releases)**:
        *   No official Release tag in the past 24h, but PR #6708 (`release: v0.10.1`) is open, bumping versions and updating CHANGELOG. Key fixes in this cycle include: undo path scoping, session orphan repair, thinking tier fixes, and removing the default per-turn wall-clock limit.

    *   **3. 社区热点 Issues (Top 10 Key Issues)**:
        *   Select 10 issues that represent current bugs, features, and triage needs.
        *   *Issue 1*: #6699 - SSE request failure without retry (network resilience gap).
        *   *Issue 2*: #6700 - Configurable stream retry budgets and transport timeouts (feature request for flaky networks).
        *   *Issue 3*: #6705 - opencode-zen model catalog staleness (58/111 models failing).
        *   *Issue 4*: #6704 - TUI text background turning black after 30 mins (visual bug).
        *   *Issue 5*: #6707 / #6706 - Porting the complete debug slash-command group (FEAT-029).
        *   *Issue 6*: #6698 - Shared-process workspace gate failing on main while nextest passes (CI inconsistency).
        *   *Issue 7*: #6697 - Abnormal rendering of the jump-to-latest-message button.
        *   *Issue 8*: #5316 - EPIC-005: CodeWhale TUI Crate Decomposition (big umbrella refactor).
        *   *Issue 9*: #6702 - Health digest showing red on main (CI/test failures).
        *   *Issue 10*: #6690 (Closed but notable) - OpenRouter session costs showing "rate unavailable" (pricing bug).
        *   *Drafting rationale*: Focus on OPEN issues that need triage or community attention, plus key closed ones if they represent major user impact. Let's list mostly open/high-impact ones.

    *   **4. 重要 PR 进展 (Top 10 Key PRs)**:
        *   *PR 1*: #6708 - `release: v0.10.1` version bump.
        *   *PR 2*: #6703 - `fix(engine): no per-turn wall-clock limit by default` (fixes the 1-hour autonomous turn stop).
        *   *PR 3*: #6646 - `perf(tui): stop walking the whole item store to list or open a thread` (huge GUI speedup: 1.3s warm / 6.7s cold -> fast).
        *   *PR 4*: #6707 - `refactor(commands): make the complete debug group portable (FEAT-029)` (porting 14 slash commands).
        *   *PR 5*: #6645 - `fix(runtime): threads own the restore points on their turns` (fixes snapshot/undo identity).
        *   *PR 6*: #6640 - `fix(sessions): stop orphaning sessions at their writers` (fixes session truth ownership).
        *   *PR 7*: #6682 - `fix(tui): scope /undo to the paths the undone step changed` (precise undo).
        *   *PR 8*: #6687 - `fix(tui): first launch keeps the configured provider instead of adopting local Ollama` (fixes first-run provider switch).
        *   *PR 9*: #6667 - `fix(tui): Ctrl+T moves to a new effective thinking tier on fixed routes` (thinking tier routing fix).
        *   *PR 10*: #6637 - `fix(fleet): read-only agents run read-only commands` (shell grammar fixes).

    *   **5. 功能需求趋势 (Feature Demand Trends)**:
        *   *Network/Transport Configuration*: High demand for making retry budgets and timeouts configurable (#6699, #6700) due to flaky networks/proxies.
        *   *Model Catalog & Provider Metadata*: Need to update stale model lists (#6705) and add new provider descriptors (e.g., Tsubasa #6695).
        *   *TUI/UX Performance*: Large-scale item store performance (#6646) and visual rendering stability (#6704, #6697).
        *   *Portability & Architecture Decoupling*: Ongoing EPIC-005 (#5316) and FEAT-029 (#6706/#6707) to decouple commands from App/TUI.
        *   *State and Session Ownership*: Clarifying session truth (#6144/#6640) and thread-bound restore points (#6621/#6645) for robust undo/restore.

    *   **6. 开发者关注点 (Developer Pain points / High-frequency demands)**:
        *   *CI/Testing inconsistency*: Shared-process workspace gate failing on main while nextest passes (#6698, #6702), causing blocked merges.
        *   *Shell grammar and command execution limits*: E2BIG failure for large prompts via argv (#6688) and overly strict read-only shell parsing (#6015).
        *   *TUI rendering bugs*: Cursor visibility on Mac (#6545), black background after long runs (#6704), and button rendering glitches (#6697).
        *   *Provider and routing edge cases*: Auto-routing with fixed models (#6667), OpenRouter pricing aliases (#6690), and first-run Ollama hijacking (#6687).

4.  **Refining and Translating into Chinese**:
    *   Maintain a professional, concise, tech-oriented tone.
    *   Ensure all links are correctly mapped to `Hmbown/Codewhale` (the data says `Hmbown/Codewhale Issue #...` and `Hmbown/Codewhale PR #...`, but the prompt says "GitHub 数据来源: github.com/Hmbown/DeepSeek-TUI" and asks for "DeepSeek TUI 社区动态日报". I will use the Codewhale repo links as provided in the data text, but refer to the project as DeepSeek TUI / Codewhale as appropriate. The links provided in the prompt are like `Hmbown/Codewhale Issue #5316`, so I will format them as `https://github.com/Hmbown/Codewhale/issues/5316` or similar, or just write the link text clearly). Let me construct standard GitHub URLs: `https://github.com/Hmbown/Codewhale/issues/5316` etc.

Let's double-check the exact links in the prompt:
`链接: Hmbown/Codewhale Issue #5316` -> I will write `https://github.com/Hmbown/Codewhale/issues/5316` (assuming standard GitHub URL structure).

Let's organize the response clearly:

*   **日期**: 2026-09-29 (数据窗口: 截至 2026-09-28 过去24小时)
*   **项目背景**: DeepSeek TUI (数据源中指代为 Codewhale / CodeWhale 项目)

Let's write down the details carefully.

*   *Today's Overview*: 今天是 Codewhale (DeepSeek TUI) 社区在 0.10.1 版本发布前夜的密集迭代期。主要动态集中在网络超时与重试机制的配置化、TUI 命令组的可移植性重构（FEAT-029），以及多项 TUI 渲染和运行时逻辑的 Bug 修复。

*   *Version Release*: 无正式 Release，但 `v0.10.1` 发布 PR (#6708) 已就绪，正在 bump 版本并撰写 changelog。该版本修复了默认每回合超时、首次启动 Ollama 劫持、undo 路径范围等关键问题。

*   *Top 10 Issues*:
    1.  **#6699 [OPEN]**: SSE 响应头丢失时无重试机制。网络恢复机制的盲区，社区需要更强健的容错。
    2.  **#6700 [OPEN]**: 流重试预算和传输超时无法配置。用户在代理或不稳定网络下无法调优，需要配置暴露。
    3.  **#6705 [OPEN]**: opencode-zen 模型目录过时。111个模型中有58个因“未验证端点”被拒绝，需要更新 curated wire list。
    4.  **#6704 [OPEN]**: TUI 文本背景在运行半小时后变黑。视觉缺陷，影响长时间运行体验。
    5.  **#6706 [OPEN]**: 调试命令组可移植化 (FEAT-029)。14个调试 slash 命令需要与 App/TUI 解耦。
    6.  **#6698 [OPEN]**: 共享进程工作空间门控在 main 上失败，但 nextest CI 通过。测试不一致问题，阻碍合并。
    7.  **#6697 [OPEN]**: TUI 最新消息跳转按钮渲染异常。按钮出现多条横线，视觉 bug。
    8.  **#5316 [OPEN]**: EPIC-005: CodeWhale TUI Crate Decomposition。大型架构重构 umbrella issue。
    9.  **#6702 [OPEN]**: 健康 Digest (2026-09-28)。CI 检查在 main 上变红，快照测试失败。
    10. **#6690 [CLOSED]**: OpenRouter session 成本始终显示“速率不可用”。别名 ID 破坏了 provider-lake 刷新，导致无法计价（虽已关闭，但涉及重要用户痛点）。

*   *Top 10 PRs*:
    1.  **#6708 [OPEN]**: `release: v0.10.1` - 版本 bump 及 changelog 整理。
    2.  **#6703 [CLOSED]**: `fix(engine): no per-turn wall-clock limit by default` - 移除默认的每回合 1 小时时钟限制，避免自主长任务被意外中断。
    3.  **#6646 [OPEN]**: `perf(tui): stop walking the whole item store to list or open a thread` - 优化 GUI 打开线程速度（冷启动从 6.7s 降低，不再全量扫描 item store）。
    4.  **#6707 [OPEN]**: `refactor(commands): make the complete debug group portable (FEAT-029)` - 将 14 个调试命令完全抽离，实现可移植源码闭包。
    5.  **#6645 [CLOSED]**: `fix(runtime): threads own the restore points on their turns` - 确保线程拥有自己的快照，解决 undo 失效问题。
    6.  **#6640 [CLOSED]**: `fix(sessions): stop orphaning sessions at their writers` - 解决会话孤儿问题，明确文档与运行时的归属权。
    7.  **#6682 [CLOSED]**: `fix(tui): scope /undo to the paths the undone step changed` - 缩小 undo 恢复范围，仅还原被撤销步骤修改的文件。
    8.  **#6687 [CLOSED]**: `fix(tui): first launch keeps the configured provider instead of adopting local Ollama` - 修复首次启动时若本地有 Ollama 会劫持配置的问题。
    9.  **#6667 [CLOSED]**: `fix(tui): Ctrl+T moves to a new effective thinking tier on fixed routes` - 修复固定路由下 Ctrl+T 切换 thinking tier 失效的问题。
    10. **#6637 [CLOSED]**: `fix(fleet): read-only agents run read-only commands` - 优化只读 agent 的 shell 语法解析器，使 `cd X &&

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>



# ComfyUI 社区动态日报 (2026-09-29)

**数据来源**: [github.com/comfyanonymous/ComfyUI](https://github.com/comfyanonymous/ComfyUI) | 分析师：AI 开发工具技术分析师

---

### 1. 今日速览

今日社区动态聚焦于**新模型（Qwen 2.1/2.5、MiniMax H3、Krea、Anima）的硬件兼容性与稳定性修复**，以及**核心执行性能和资源管理优化**。最引人关注的安全事件是发现恶意自定义节点（`champdev-comfyui-nodes`）携带远控木马（RAT）和挖矿程序（#16631），社区强烈呼吁用户注意供应链安全。核心开发团队正忙于合并一系列关于资产数据库扫描、数据库锁以及动态显存优化的 PR，以提升大集群和多任务下的UI响应速度。

---

### 2. 版本发布

*   **无**（过去24小时内无新版本 Release 发布）。

---

### 3. 社区热点 Issues（Top 10）

本日 Issue 呈现出“新模型 Bug 高发”与“安全事件频发”的特点，以下是过去24小时内最值得关注的 10 个 Issue：

1.  **#16631 [安全警告] 恶意节点 champdev-comfyui-nodes 包含 RAT 和挖矿程序**
    *   **链接**: [Comfy-Org/ComfyUI Issue #16631](https://github.com/Comfy-Org/ComfyUI/issues/16631)
    *   **摘要**: 有用户通过 ComfyUI-Manager 安装 `champdev-comfyui-nodes v0.5.2` 后，系统被植入功能完整的远控木马（RAT）和加密货币挖矿程序，且持续潜伏至少 9 天。该包还包含 RCE 节点和外发攻击者域名的遥测数据。
    *   **重要性**: 极高。这是典型的 AI 工具供应链安全事件，提醒社区用户仅从官方

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama 社区动态日报 · 2026-09-29

> 数据来源：github.com/ollama/ollama

---

## 1. 今日速览

今日社区最值得关注的是 **v0.35.0-rc1 发布**，重点在桌面端体验打磨（macOS 启动同步、设置项延迟加载）。同时，**多起与 GPU/CPU 资源调度相关的 Issue 集中活跃**——CUDA 非法内存访问（RTX 5090 + Cohere MoE）、`OLLAMA_GPU_OVERHEAD` 被忽略、cgroup CPU 配额导致吞吐量崩塌——显示推理后端的资源管理仍是社区核心痛点。此外，桌面 App 交互改造（聊天记录只读化、窗口尺寸与置顶）与中文 CLI 本地化等 PR 表明项目正在向"成品化客户端"方向演进。

---

## 2. 版本发布

### v0.35.0-rc1（v0.35.0 预发布）

本次 RC 主要聚焦桌面 App 的启动与配置体验：

| 变更 | 作者 | 说明 |
|---|---|---|
| app: sync macOS update menu and icon at startup | @hoyyeva | 启动时同步 macOS 更新菜单与图标状态 | 
| app: defer Settings model discovery | @ParthSareen | 设置页的模型发现改为延迟加载，优化启动性能 |
| app: isolate cloud-setting tests from Windows user config | @drifk | 将云端设置测试与 Windows 用户配置隔离，修复测试污染 |

🔗 https://github.com/ollama/ollama/releases

**简评**：本次 RC 无推理后端变更，属于"客户端稳定性 + 启动体验"补丁型迭代，适合桌面用户尝鲜。

---

## 3. 社区热点 Issues（精选 10 条）

### ① #16532 gemma4 在 Windows 上无法处理图像
- 作者 hp6393｜更新 2026-09-28｜**53 条评论**｜👍 1
- 长期未解决的视觉能力缺陷：JPEG 可上传但模型"看不见"，OCR 任务失败。评论数最高，说明多模态在 Windows 平台兼容性仍是重灾区。
- 🔗 https://github.com/ollama/ollama/issues/16532

### ② #18642 CUDA 非法内存访问（MUL_MAT）— RTX 5090 + Cohere MoE
- 作者 tugrultamturk｜2026-09-25 创建｜7 条评论
- 在 prompt evaluation 阶段崩溃（exit 0xc0000409），涉及新一代 Blackwell 架构与新 MoE 架构的适配，属于高风险回归。
- 🔗 https://github.com/ollama/ollama/issues/18642

### ③ #18679 `OLLAMA_GPU_OVERHEAD` 被 llama-server 后端忽略
- 作者 Cerlancism｜2 条评论
- 显存预留参数失效，直接影响 `--fit` 的层分配策略。对多模型并发/显存受限用户影响显著。
- 🔗 https://github.com/ollama/ollama/issues/18679

### ④ #17916 默认 `n_threads` 忽略 cgroup 配额，容器内吞吐量崩塌约 45 倍
- 作者 NextLevelManagementAdvisors｜2026-08-21 创建
- Ollama 按宿主机核数选线程，忽略 cgroup v2 `cpu.max` 与 `cpuset`，在 K8s/容器场景下触发 CFS 限流与自旋等待"车队效应"，是云原生部署的关键缺陷。
- 🔗 https://github.com/ollama/ollama/issues/17916

### ⑤ #18683 【严重】账单流程卡在 Stripe 自动重试循环
- 作者 karnigen｜2026-09-27 创建
- 用户被自动化扣费循环困住、无法降级或取消订阅，客服无响应。涉及 Ollama Cloud 商业化信任度。
- 🔗 https://github.com/ollama/ollama/issues/18683

### ⑥ #18698 请求支持 K2 Horizon 模型（k2-horizon 架构）
- 作者 Leo6432｜2026-09-28 创建
- MBZUAI IFM 于 2026-09 发布的新模型家族（0.9B~36B MoE），已提供官方 GGUF，接入门槛低、社区意愿强。
- 🔗 https://github.com/ollama/ollama/issues/18698

### ⑦ #18690 `/v1/chat/completions` 省略 `top_p` 时强制注入 1.0，覆盖 Modelfile 参数
- 作者 HSP18SCM23P
- 精准定位到 `openai/openai.go` 的 `FromChatRequest`，OpenAI 兼容层的默认值注入会静默覆盖用户在 Modelfile 中的采样配置，影响生成质量一致性。
- 🔗 https://github.com/ollama/ollama/issues/18690

### ⑧ #12638 请求关闭 API 调用时弹出的 GUI 窗口（Windows 11）
- 作者 jsmith173｜2025-10 创建，持续活跃至今
- 纯 API/服务端用户被 GUI 弹窗干扰，是跨版本长期未修复的体验问题，反映"服务端模式"与"桌面 App"边界不清。
- 🔗 https://github.com/ollama/ollama/issues/12638

### ⑨ #18696 请求 Ubuntu CLI 与 ChatGPT / Claude 桌面端集成
- 作者 Hanzallah-Hassam
- 呼应桌面端集成趋势，Linux 用户希望获得与 macOS 对等的第三方客户端接入能力。
- 🔗 https://github.com/ollama/ollama/issues/18696

### ⑩ #18692 请求将 AgentBridge 收录进 agents/harnesses 列表
- 作者 Andrea-Bruno
- 开源个人 AI 助手项目，基于 Ollama 作为本地模型提供方 + OpenAI 兼容 API，体现生态集成诉求。
- 🔗 https://github.com/ollama/ollama/issues/18692

> 其余可关注：#18695（误提交的安全公告请求撤回）、#18699（`ollama launch dsh` 因 dsh 0.1.7 移除 settings-file provider 而失效，已关闭）。

---

## 4. 重要 PR 进展（精选 10 条）

### ① #18700 app: 聊天历史设为只读并新增导出功能（OPEN）
- 作者 hoyyeva｜2026-09-28
- 桌面端不再支持新建对话/发消息，历史记录可读、可删、可导出为 Markdown（含附件）。**方向性变化**：桌面 App 正从"聊天客户端"转为"本地模型管理 + 历史归档"工具。
- 🔗 https://github.com/ollama/ollama/pull/18700

### ② #13448 ollamarunner: 自动启用 flash attention（CLOSED）
- 作者 jessegross｜2025-12 创建，今日合并
- 用户未显式设置时，若模型支持且不会回退到 CPU 则自动开启 FA，覆盖文本/视觉/嵌入模型及 KV cache 量化，属性能与内存双赢改动。
- 🔗 https://github.com/ollama/ollama/pull/13448

### ③ #13244 ggml: 预留显存时按最大计算图分配（CLOSED）
- 作者 jessegross
- 视觉编码器与文本模型图不会同时运行，改为取二者最大值而非累加，避免显存过度预留。
- 🔗 https://github.com/ollama/ollama/pull/13244

### ④ #14382 mlxrunner: 上报真实内存占用（CLOSED）
- 作者 jessegross
- 此前仅上报加载时权重估算的静态 VRAM，忽略 KV cache 与计算图，导致显存信息严重偏低；修复后调度更准确。
- 🔗 https://github.com/ollama/ollama/pull/14382

### ⑤ #17496 mlxrunner: MTP 模型在非思考轮次复用缓存（CLOSED）
- 作者 jessegross
- 解决 MTP 缓存最深状态需重发 stop token 才能命中、续写 prefill 无法复用的问题，提升多轮生成效率。
- 🔗 https://github.com/ollama/ollama/pull/17496

### ⑥ #7368 runner.go: 切换到稳定的 llama.cpp 采样接口（CLOSED）
- 作者 jessegross｜2024-10 创建，今日合并
- 由内部示例接口迁移到稳定 API，显著降低 llama.cpp 每次升级带来的维护成本。**长期技术债清理**。
- 🔗 https://github.com/ollama/ollama/pull/7368

### ⑦ #18606 feat: 新增 System One 评分 API（CLOSED）
- 作者 ParthSareen
- 新增 `POST /v1/systemone`，基于本地 Nimble / Tev 模型做结构化决策，返回 choice（标签+概率）、noul（条件为真概率）、score（期望得分）。
- 🔗 https://github.com/ollama/ollama/pull/18606

### ⑧ #18602 feat: 单次响应允许最多 10 次联网搜索（CLOSED）
- 作者 ParthSareen
- 将 Responses / Anthropic 的单响应搜索上限从 3 提升到 10，并尊重 Anthropic `max_uses`（<10），第 10 次后引导模型收敛输出。
- 🔗 https://github.com/ollama/ollama/pull/18602

### ⑨ #18625 mlx: 限制 pull 卡顿重试并允许 watchdog 中断（CLOSED）
- 作者 dhiltgen
- 修复 safetensor 下载卡顿后无法恢复的问题（请求由父 context 构建，取消信号无法传递），MLX 传输组件正式移出 experimental。
- 🔗 https://github.com/ollama/ollama/pull/18625

### ⑩ #17972 feat: MLX 后端支持 GraniteForCausalLM（OPEN）
- 作者 gabe-l-hart
- 为 Granite 4.1 / 4.2 语言模型系列添加 dense 架构支持，扩展 MLX 模型覆盖。
- 🔗 https://github.com/ollama/ollama/pull/17972

**其他值得留意**：#18651（MLX 版本升级）、#18652（llama.cpp 升至 b11232）、#18684（CLI 简体中文自适应本地化）、#17894 / #18697（截断时保留最近用户消息，修复 `500: no user query found`）、#18661（桌面窗口支持窄窗与置顶）、#17542（模型全量跑在 CPU 时告警）、#16665（补全 `/api/tags` 文档字段）。

---

## 5. 功能需求趋势

从本期 Issues 与 PR 可提炼出四条主线：

1. **推理后端资源调度（最高热度）**
   - 显存预留失效（#18679）、CPU 线程与 cgroup 配额脱节（#17916）、CUDA 非法内存访问（#18642）、MLX 内存上报偏差（#14382）。共同指向：Ollama 在异构硬件与容器环境下的资源管理仍需系统化重构。

2. **新模型与架构支持**
   - K2 Horizon（#18698，k2-horizon）、Cohere MoE（#18642）、Granite 4.1/4.2（#17972）。社区对新模型接入的响应速度期望很高，尤其是已提供 GGUF 的模型。

3. **客户端/IDE/第三方集成**
   - Ubuntu CLI 接入 ChatGPT / Claude 桌面端（#18696）、AgentBridge 收录（#18692）、桌面窗口窄化与置顶（#18661）。社区希望 Ollama 更深度嵌入日常工作流。

4. **桌面端与 API 模式解耦**
   - GUI 弹窗干扰 API 用户（#12638）、聊天历史只读化（#18700）。桌面 App 的定位正在被重新定义。

---

## 6. 开发者关注点

综合高频反馈，开发者痛点集中在以下方面：

- **参数被静默覆盖**：`/v1/chat/completions` 默认注入 `top_p=1.0` 覆盖 Modelfile（#18690）；`OLLAMA_GPU_OVERHEAD` 被忽略（#18679）。默认值与用户显式配置的优先级需要明确规则。
- **容器/K8s 环境表现**：线程数不感知 cgroup 配额导致约 45× 吞吐崩塌（#17916），云原生部署用户受影响最大。
- **多步工具调用的上下文截断**：截断逻辑误删最近用户消息，导致 `500: no user query found in messages`，两个 PR（#17894、#18697）在并行修复，说明这是近期高频故障。
- **视觉/多模态稳定性**：Windows 上 gemma4 图像处理失败（#16532，53 条评论）长期未解。
- **OpenAI 兼容层的细节一致性**：搜索次数上限、采样参数注入等行为与预期不符，兼容层语义需更严谨。
- **商业化与支持流程**：Stripe 计费循环 + 客服无响应（#18683），是影响 Cloud 用户信任的运营侧风险。
- **构建工具链友好度**：`go build` 因 cgo 依赖在 Windows 上失败（#18675），非 C 工具链环境下开发体验受限。

---

*本日报基于 2026-09-29 前 24 小时内的 GitHub 公开数据整理，仅供参考。*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

# llama.cpp 社区动态日报（2026-09-29）

> 数据来源：github.com/ggerganov/llama.cpp（仓库已迁移至 ggml-org/llama.cpp）

---

## 一、今日速览

今日仓库以 **批处理 API 大迁移** 为主线：`batch_ext` 从 speculative / mtmd / server 扩展到 examples 与 tools（#29385、#29601），标志着 `llama_batch` 旧 API 的弃用进入倒计时。同时，**多后端对齐**持续推进——Metal 补齐 `GGML_OP_PAD` 的左侧与循环填充，CPU 端为 x86 非向量整数倍 head dim 启用分块 Flash Attention。社区侧最受关注的是 **多 GPU 下 draft-mtp 导致 prompt 处理速度腰斩**（#27428）以及 **HIP/ROCm 上 GDN 跨请求状态泄漏**（#29092）两起影响生产可用性的问题。

---

## 二、版本发布

过去 24 小时共发布 **12 个构建版本（b11228 – b11239）**，主要更新如下：

| 版本 | 内容 |
|---|---|
| **b11239** | Vulkan：补充 `<functional>` 头文件，修复 `no template named 'function'` 编译错误（#29597） |
| **b11238** | models：改用 `ggml_pad_ext` 实现左侧填充，统一 Parakeet、LFM2-Audio、Granite Speech、Gemma 4 音频编码器与 DFlash2 的填充逻辑（#29567） |
| **b11237** | ggml-openvino：将非对齐 batch-stride 视图标记为不支持（#29603） |
| **b11236** | batch：将 speculative、mtmd、server 迁移至 `batch_ext`，含 imrope 处理（#29385） |
| **b11235** | common：修复 Windows 下的 HF 缓存路径问题（#29475） |
| **b11234** | webgpu：处理 `ggml_backend_webgpu_buffer_set_tensor` 中的非对齐写入（#29471） |
| **b11233** | tests：重构 `test-recurrent-state-rollback`，改用 `llama_context_ptr` 智能指针（#29426） |
| **b11232** | ggml-cpu：x86 上为非向量整数倍 head dim 启用分块 Flash Attention，并修复 FA softcap（#29423） |
| **b11229** | HIP：修复 DKQ > 256 时 mfma kernel 的模板跳过问题（#29559） |
| **b11228** | Metal：支持 `GGML_OP_PAD` 的左侧与循环填充，与 CPU/CUDA/Vulkan 对齐（#29561） |

**观察**：本批次集中体现「后端一致性」与「新 batch API 落地」两条主线，且修复类提交占比高，属于稳定性收敛期。

---

## 三、社区热点 Issues

1. **[#19466] [CLOSED] 视觉模型 KV cache 保存失效（/slots/3?action=save）** — 43 条评论，历时 7 个月后关闭。多 RTX 3090 环境下 `slots` 保存 API 对 vision 模型无效，是 server 侧长期痛点。
   https://github.com/ggml-org/llama.cpp/issues/19466

2. **[#27428] [OPEN] draft-mtp 在多 GPU 层切分下使 prompt 处理速度腰斩** — 24 条评论，单卡正常、多卡异常，定位在 CUDA 后端。对生产多卡部署影响显著。
   https://github.com/ggml-org/llama.cpp/issues/27428

3. **[#29104] [OPEN] /metrics 被 VictoriaMetrics 抓取时 server 静默停止处理** — 11 条评论。监控与推理相互干扰，属可观测性接入后的新问题，Windows + 双 5070Ti 复现。
   https://github.com/ggml-org/llama.cpp/issues/29104

4. **[#29424] [OPEN] 请求支持 K2 Horizon（0.9B/3.7B/7B/32B/36B MoVA）** — 11 条评论。新模型架构支持类需求持续高涨。
   https://github.com/ggml-org/llama.cpp/issues/29424

5. **[#28541] [OPEN] RFC：从 diffusion GGUF 生成图像/视频/音频（LTX-2）** — 8 条评论。若落地将把 llama.cpp 从「文本推理」扩展为「多模态生成」，战略意义大。
   https://github.com/ggml-org/llama.cpp/issues/28541

6. **[#24440] [OPEN] Gemma 4 31B + MTP + `-sm tensor` 编辑系统消息后 server 崩溃（fattn.cu:579）** — 8 条评论，双 3090 复现。与 #27428 同属 MTP/张量切分相关问题簇。
   https://github.com/ggml-org/llama.cpp/issues/24440

7. **[#29092] [OPEN] HIP/ROCm：融合 Gated Delta Net 跨请求携带循环状态，前序 prompt 文本被逐字复读** — 8 条评论。属**正确性/隐私级**缺陷，生产环境高风险。
   https://github.com/ggml-org/llama.cpp/issues/29092

8. **[#27109] [OPEN] CUDA 4-bit KV cache（q4_0/q4_1）使 qwen35 hybrid prefill 跌至 ~34 t/s** — 7 条评论，MMQ guard 通过却仍崩溃性能。
   https://github.com/ggml-org/llama.cpp/issues/27109

9. **[#29457] [OPEN] 大 enum 的 json_schema 使语法构造超线性耗时，单请求可占满一核数十秒（DoS 风险）** — 3 条评论，1 👍。server 端安全性问题，值得优先处理。
   https://github.com/ggml-org/llama.cpp/issues/29457

10. **[#29526] [OPEN] Vulkan：Intel A770 长时间 decode 后退化为空回复** — 3 条评论。连续运行 7–8 小时后 decode 阶段返回空 EOS，属长期稳定性问题。
    https://github.com/ggml-org/llama.cpp/issues/29526

> 其他值得留意的：#29288（OpenVINO 在 Intel Core 7 155H 上无法运行 Gemma）、#29473（ggml-hexagon 在 Snapdragon 7 Gen 4 上 HMX MUL_MAT 返回 inf）、#29521（macOS Metal 大默认 n_ctx 导致 Gemma 4 31B OOM）、#26590（Ling-3.0-flash 模型请求，47 👍 为全场最高）。

---

## 四、重要 PR 进展

1. **[#29601] batch：将其余 examples 迁移到 `llama_batch_ext`** — 承接 #24669 / #29385，目标让 libcommon 与全部 examples、tools 统一新 API，后续将弃用 `llama_batch_get_one/init`。
   https://github.com/ggml-org/llama.cpp/pull/29601

2. **[#29446] model：新增 GraniteSpeech5ForCTC（Turbo CTC）支持** — 非自回归、纯编码器架构，引入新代码路径，面向 IBM granite-speech-5.0-470m-turboctc。
   https://github.com/ggml-org/llama.cpp/pull/29446

3. **[#29598] ggml：加速模型加载** — 针对精心构造的 GGUF 可让 server 长时间挂起的问题做加固，兼具**安全性与性能**意义。
   https://github.com/ggml-org/llama.cpp/pull/29598

4. **[#29353] cuda/hip：GDN 分块 kernel** — 由下游 QVAC fabric 上游化，全 GPU 卸载 + F16 KV 下 PP 约提升 10%，对 hybrid/GDN 模型收益明显。
   https://github.com/ggml-org/llama.cpp/pull/29353

5. **[#29612] CUDA：重构 swizzling 代码** — 泛化支持非 128 字节整数倍 stride 及 Volta/AMD，虽部分路径因性能回退暂未启用，但为后续优化铺路。
   https://github.com/ggml-org/llama.cpp/pull/29612

6. **[#29609] ggml-cuda：清理 MoE 选择中的 post-bias NaN** — 修复 #28370，避免线程选出不同专家并向同一输出 ID 写入冲突值。
   https://github.com/ggml-org/llama.cpp/pull/29609

7. **[#29615] chat：修复 Muse Glimmer 在 `--jinja` 下忽略 response_format json_schema** — 修复 #29613，对齐 gpt-oss.cpp 行为，json_schema 优先于 tools。
   https://github.com/ggml-org/llama.cpp/pull/29615

8. **[#29545] ggml：AVX512-FP16 上以 f32 累加 f16 点积** — 修复点积溢出，使 logits 与不启用 AVX512-FP16 时保持一致，supersedes #29530。
   https://github.com/ggml-org/llama.cpp/pull/29545

9. **[#29572] HIP：避免将 CDNA 误判为 DGX Spark 处理 gqa_ratio 20** — 修复 fattn_mma dqk 576 分派错误，源于 #29552 的调试发现。
   https://github.com/ggml-org/llama.cpp/pull/29572

10. **[#29606] hexagon：防止 HTP 工作队列任务重复执行** — 修复 worker 读到新序列号后重复执行同一任务导致 barrier 计数异常。
    https://github.com/ggml-org/llama.cpp/pull/29606

> 另有 #29600（Prism Bonsai 2 27B 运行时支持）、#29595（common 缓存目录改用 `fs::path`）、#29575（`get_rows_back` 行边界检查）、#29558（run-org-model.py 增加 `--add-bos`）等小步改进。

---

## 五、功能需求趋势

从过去 24 小时内更新的 50 条 Issue 中可提炼出以下方向：

1. **新模型 / 新架构支持（最高频）**
   K2 Horizon（MoVA）、Ling-3.0-flash（KDA/MLA 混合注意力）、Nemotron-3-Nano、MiMo-V2.6-Flash-RL、Prism Bonsai 2 等密集出现，社区对新模型「第一时间可用」的期望极高。

2. **多模态能力扩展**
   视觉模型 KV cache 保存（#19466）、Granite Speech CTC（#29446）、LTX-2 diffusion 生成 GGUF（#28541），需求正从「文本 + 图像输入」走向「音频/视频/图像生成」。

3. **投机解码与 MTP 成熟化**
   draft-mtp 在多 GPU、超大 ctx、sidecar 权重、组合 spec-type 等多个场景下暴露问题（#27428、#28433、#29345、#27839），说明该特性已进入生产使用阶段。

4. **KV cache 量化与内存优化**
   4-bit KV cache 性能塌陷（#27109）、ROCm 下仅 q8_0/q4_0 可用（#27761），量化 KV 的跨后端一致性仍是刚需。

5. **服务端稳定性与可观测性**
   /metrics 抓取导致停摆（#29104）、Jetson 上 server 重写后挂起（#29499）、Vulkan 长跑退化（#29526）、grammar 构造 DoS（#29457）——server 长期运行与安全成为新焦点。

6. **硬件/后端覆盖**
   Hexagon（Snapdragon）、OpenVINO（Intel Core 7 / iGPU）、Vulkan（Arc A770）、Metal（M5 Max）均有新问题，边缘与异构设备支持需求上升。

---

## 六、开发者关注点

综合 Issue 与 PR 反馈，开发者当前的痛点集中在：

- **多 GPU / 张量并行下的性能与稳定性**：`-sm tensor` 与 MTP 组合多次出现崩溃、重启甚至机器重启（#24440、#29549、#27428），是当前最集中的高风险区。
- **状态隔离正确性**：HIP/ROCm 上 GDN 跨请求状态泄漏（#29092）属于会污染输出的严重缺陷，需优先审计所有带循环状态的融合算子。
- **资源耗尽的优雅失败**：Metal OOM 触发 `EXC_BAD_ACCESS`（#27822）、大 ctx 直接 OOM（#29521），社区希望 OOM 时能干净报错而非崩溃。
- **跨平台路径与构建问题**：Windows HF 缓存路径（#29475、#29595）、UI 资源无限 COPY 循环（#26907）、Termux 双 free（#27065），反映平台一致性仍有欠账。
- **性能回归敏感**：Flash Attention 默认开启在 Arm Neoverse V 系列上反而使 prefill 减半（#27086），说明默认策略的硬件自适应仍需打磨。
- **API 迁移节奏**：`llama_batch` → `llama_batch_ext` 的迁移（#29385、#29601）正在快速推进，下游集成方需提前评估兼容性。

---

*以上内容基于所提供 GitHub 数据整理，如需追踪最新进展请访问仓库主页。*

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*