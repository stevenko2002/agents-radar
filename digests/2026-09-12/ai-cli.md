# AI CLI 工具社区动态日报 2026-09-12

> 生成时间: 2026-09-11 22:15 UTC | 覆盖工具: 12 个

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

**今日重點（2026‑09‑12）**  

- **Claude Code** – 發布 **v2.1.269**，新增 `claude plugin eval` 命令（插件評測套件，JSON/HTML 報告）與 `/output-style` 命令（列出與切換輸出樣式）。  
  🔗 https://github.com/anthropics/claude-code/releases/tag/v2.1.269  

- **OpenAI Codex** – 連續發布多個 Rust alpha 版本：`rust-v0.155.0-alpha.3.7` ~ `.3.10`、`rust-v0.155.0-alpha.2.3`、`rust-v0.154.0-alpha.6.2`（當天共 7 個補丁版本）。  
  🔗 https://github.com/openai/codex/releases  

- **GitHub Copilot CLI** – 發布 **v1.0.84-5**，新增基於語義化 JSONL 的 `session` 與 `memory` 導入命令，並重構 Shell 补全以使用與 CLI 相同的語法。  
  🔗 https://github.com/github/copilot-cli/releases/tag/v1.0.84-5  

- **Gemini CLI** – 夜間版本 **v0.61.0-nightly.20260911.ged2ac40df** 發布（增量更新，無重大功能說明）。  
  🔗 https://github.com/google-gemini/gemini-cli/compare/v0.61.0-nightly.20260910.ged2ac40df...v0.61.0-nightly.20260911.ged2ac40df  

- **Qwen Code** – 夜間版本 **v0.23.3-nightly.20260911.aaa6a32aae** 發布，完成 Dingtalk 集成的底層清理並移除 `channels` 特性。  
  🔗 https://github.com/QwenLM/qwen-code/releases/tag/v0.23.3-nightly.20260911.aaa6a32aae  

- **llama.cpp** – 當天密集合併 **b10901–b10917** 共 9 個構建版本，涉及 Metal 後端融合優化、CUDA/HIP Flash Attention 調優、MSVC PCH 建置修復等。  
  🔗 https://github.com/ggerganov/llama.cpp/releases/tag/b10917  

*以上僅列出當天發布的新版本或重大功能/修復，未包含趨勢分析或預測。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
*数据来源：anthropics/skills ｜ 截止 2026-09-12*

---

## 一、热门 Skills 排行（按评论/关注度）

| 排名 | Skill / PR | 功能 | 讨论热点 | 状态 |
|---|---|---|---|---|
| 1 | **#1298 skill-creator 修复** | 修复 `run_eval.py` 恒报 0% recall | 描述优化循环在"噪声"上训练，关联 Issue #556 的 10+ 次独立复现，是生态级信任问题 | OPEN |
| 2 | **#514 document-typography** | 文档排版质控（孤行、寡段、编号错位） | 影响 Claude 生成的**每一份文档**，属通用能力缺口 | OPEN |
| 3 | **#486 ODT Skill** | ODF/ODT 创建、填模板、转 HTML | 补齐开源/ISO 文档格式，与 pdf/docx 形成文档矩阵 | OPEN |
| 4 | **#1615 scnet-hpc** | 通过 SSH+Slurm 操作 SCNet 超算集群 | 垂直领域（HPC）技能首次出现，代表专业化方向 | OPEN |
| 5 | **#83 skill-quality / security-analyzer** | 元技能：技能质量与安全扫描 | 对 Skill 本身做治理，呼应 Issue #492 的信任边界问题 | OPEN |
| 6 | **#210 frontend-design 改进** | 提升前端设计技能的可执行性 | 长生命周期 PR（1 月至今），反映技能"可操作性"痛点 | OPEN |
| 7 | **#1742 mcp-builder 修复** | 适配 `mcp>=2` 的 `streamable_http_client` 与自定义 header | MCP 生态 API 变更带来的兼容性维护压力 | OPEN |
| 8 | **#1602 多脚本稳定性修复** | 序列化、指标、编码、跨平台问题 | 与 #1390、#1298、#1050 同属"脚本可靠性"集群 | OPEN |

> 说明：榜单前列几乎全是 **fix/兼容性** 而非新功能，说明官方基础技能的工程质量是当前社区第一痛点。

---

## 二、社区需求趋势（来自 Issues）

1. **安全与信任边界（最高热度）** — Issue #492（43 评论）直指社区技能滥用 `anthropic/` 命名空间造成信任冒充；#1175 讨论 SharePoint 文档的权限与上下文风险；#412 提出 `agent-governance` 治理技能。
2. **技能工具链可靠性** — #556（0% 触发率）、#1390（mcp-builder 评测恒为 0/N）、#1362（pnpm 构建失败）、#1487（claude-api 单次注入 ~156k tokens）——评测与脚本"静默失败"是系统性诉求。
3. **技能共享与协作** — #228（组织级共享，8 👍）要求内置共享库而非 Slack 传 `.skill` 文件；#189（6 评论 / 9 👍）指出插件内容重复污染上下文。
4. **元技能 / 质量治理** — #1385 推理质量门、#1329 compact-memory、#202 skill-creator 最佳实践（已 CLOSED），社区希望技能能"自我审计"。
5. **互操作与平台扩展** — #16 将 Skills 暴露为 MCP；#29 寻求 Bedrock 支持，反映跨运行时接入需求。

**新 Skill 期待方向排序**：安全治理 > 工具链修复 > 协作共享 > 文档/排版 > 跨平台互操作。

---

## 三、高潜力待合并 Skills

以下 PR 讨论活跃、问题明确、修复范围小，落地概率较高：

- **#1742 mcp-builder mcp>=2 适配** — 直接 Fixes #1668，改动聚焦，随 MCP 升级刚需。
  https://github.com/anthropics/skills/pull/1742
- **#1607 claude-api 模型 ID 退役标记** — 纯文档修正，Fixes #1603，风险极低。
  https://github.com/anthropics/skills/pull/1607
- **#1724 mcp-builder 默认模型升级到 claude-sonnet-5** — 单点替换，易合并。
  https://github.com/anthropics/skills/pull/1724
- **#538 / #541 / #539（Lubrsy706 三连修）** — 大小写引用、`w:id` 冲突、YAML 校验，均为文档/脚本级小修。
  https://github.com/anthropics/skills/pull/538 ｜ https://github.com/anthropics/skills/pull/541 ｜ https://github.com/anthropics/skills/pull/539
- **#1050 / #1099 skill-creator Windows 兼容** — 均为 1 行级修复，但受 #1298 根因问题牵制。
  https://github.com/anthropics/skills/pull/1050 ｜ https://github.com/anthropics/skills/pull/1099

> 注：数据中所有 PR 均为 OPEN，未见 merged 记录，整体合并节奏偏慢。

---

## 四、Skills 生态洞察

> **当前社区最集中的诉求是"让官方基础技能真正可靠、可信、可共享"——安全与信任边界（#492）、评测/脚本静默失败（#556、#1298、#1390）、以及组织级分发（#228）构成了生态演进的三条主线，新功能提案反而退居其次。**

---

# Claude Code 社区动态日报 | 2026-09-12

---

## 1. 今日速览

- **发布 v2.1.269**：新增 `claude plugin eval` 命令支持插件评测套件运行（输出 JSON/HTML 报告），并新增 `/output-style` 命令用于列表与切换输出样式（含 Remote Control 与云端会话）。
- **社区热度集中在 Windows 平台稳定性**：桌面端重启失败（文件锁）、浏览器预览崩溃、MSIX 自修复导致数据丢失等问题高居热榜。
- **Fable 5 安全防护误判持续发酵**：多份 Issue 反映正常编码、安全分析、Issue 管理等任务被误拦截，模型切换后仍受影响，开发者呼吁改进分类器或提供旁路。

---

## 2. 版本发布

### v2.1.269 (2026-09-11)
| 变更 | 说明 |
|------|------|
| **新增 `claude plugin eval`** | 运行插件的评测套件，输出可复现的评分结果（JSON + HTML 报告），`claude plugin eval --help` 查看详情 |
| **新增 `/output-style [name]`** | 列出并切换输出样式，支持 Remote Control、云端会话与本地 CLI 统一体验 |

> 🔗 [Release v2.1.269](https://github.com/anthropics/claude-code/releases/tag/v2.1.269)

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 评论/点赞 | 核心问题 | 为什么重要 |
|---|-------|-----------|----------|------------|
| 1 | [#42776](https://github.com/anthropics/claude-code/issues/42776) **Windows 桌面端孤儿进程文件锁导致无法重启** | 177 💬 / 88 👍 | 进程残留锁定可执行文件，必须手动杀进程或重启机器 | **最高热度**，阻塞 Windows 用户日常工作流，属 P0 级阻塞性 Bug |
| 2 | [#85979](https://github.com/anthropics/claude-code/issues/85979) **v2.1.228 后持续 ECONNRESET（全网络/本地原因均排除）** | 7 💬 | CLI 连接 Anthropic API 频繁断开，但 claude.ai Web 正常 | 疑似 CLI 侧 TLS/连接池回归，影响所有 Windows 用户生产可用性 |
| 3 | [#78431](https://github.com/anthropics/claude-code/issues/78431) **User-Agent 串泄露真实邮箱** | 7 💬 / 4 👍 | 请求头未经同意嵌入账号邮箱，隐私/安全合规风险 | 涉及数据最小化原则，企业环境可能被判定为合规违规 |
| 4 | [#78834](https://github.com/anthropics/claude-code/issues/78834) **ugrep 正则 `.{N}` 触发 4-17 GB 内存分配（Linux/WSL2）** | 5 💬 | 尾部有界重复导致指数级内存增长，OOM 频发 | 内置工具性能陷阱，影响大规模代码库检索场景 |
| 5 | [#84918](https://github.com/anthropics/claude-code/issues/84918) **会话历史绑定绝对路径，移动/重命名文件夹即丢失上下文** | 4 💬 | 无法迁移项目保持会话连续性，强制绑定 `realpath` | 核心工作流痛点，monorepo 重构、重命名、跨机器同步均受影响 |
| 6 | [#86444](https://github.com/anthropics/claude-code/issues/86444) **桌面端预览 localhost 导致整体挂起，卸载重装静默清空会话记录** | 4 💬 | Browser pane 崩溃 Electron GPU 进程，MSIX 修复后数据全丢 | Windows 桌面端稳定性双重打击：预览不可用 + 数据零保护 |
| 7 | [#72714](https://github.com/anthropics/claude-code/issues/72714) **`/worktree` 误写主仓库 `.git/config` 破坏全局 `core.hooksPath`** | 3 💬 | 工作树隔离逻辑缺陷，污染共享配置，导致全局 Hook 失效 | 破坏团队级 Git 规范工具链，隐蔽且破坏力强 |
| 8 | [#86241](https://github.com/anthropics/claude-code/issues/86241) **Fable 5 防护频繁误判合法任务（勒索软件分析/数据恢复等）** | 3 💬 / 1 👍 | 宽泛防护拦截正当安全研究与工程任务，强制切模型 | 多份重复报告，反映分类器召回率过低，严重影响安全/合规场景开发者 |
| 9 | [#86686](https://github.com/anthropics/claude-code/issues/86686) **Android 发起 Remote Connect 会话强制覆盖模型为 Sonnet 5.0** | 1 💬 / 1 👍 | 移动端入口忽略用户预选模型，体验不一致 | 多端协同场景下模型选择权丢失，暴露会话初始化逻辑缺陷 |
| 10 | [#86645](https://github.com/anthropics/claude-code/issues/86645) **VS Code 扩展反复弹权限确认，即使已选 Auto 模式** | 1 💬 / 1 👍 | 权限持久化失效，每次编辑均需二次确认 | 直接打断编码流，VS Code 集成可用性严重下降 |

> ⚠️ 本期 50 条更新中 **48 条为 CLOSED/stale**，实为 Stale Bot 批量清理历史积压，真实新增/活跃讨论集中在上述 Windows 稳定性、Fable 5 误判、会话迁移三大主题。

---

## 4. 重要 PR 进展

| # | PR | 状态 | 核心变更 | 影响面 |
|---|----|------|----------|--------|
| 1 | [#42205](https://github.com/anthropics/claude-code/pull/42205) **fix(hookify): normalize tool matcher parsing** | CLOSED | 修复 Hookify 匹配器解析：去除分隔符周围空格、归一化 OR 分段 | Hooks 生态工具链兼容性，修复 `Edit | Write` 等带空格匹配失效 |

> 仅 1 条 PR 更新，说明核心仓库近期以 Release 发布与 Issue 清理为主，代码合并相对平静。

---

## 5. 功能需求趋势（从全部 Issues 提炼）

| 趋势方向 | 代表 Issue | 社区呼声强度 | 备注 |
|----------|------------|--------------|------|
| **会话/上下文可迁移性** | #84918 | ⭐⭐⭐⭐ | 绝对路径绑定 → 需支持逻辑标识或可配置存储后端 |
| **Windows 桌面端原生稳定性** | #42776, #86444, #85905 | ⭐⭐⭐⭐⭐ | 进程管理、Electron GPU 崩溃、MSIX 数据保护三大坑 |
| **安全分类器精准度与可控性** | #86241, #86602, #86680, #86687, #86673 | ⭐⭐⭐⭐ | 误判率高、无旁路、错误信息不透明、跨模型污染 |
| **多端模型选择一致性** | #86686 | ⭐⭐⭐ | Android/Remote Connect/CLI 模型决策链路不统一 |
| **内置工具性能硬化** | #78834 | ⭐⭐⭐ | ugrep/regex 引擎需加入复杂度上限与内存保护 |
| **权限/确认流程可用性** | #86645 | ⭐⭐⭐ | Auto 模式失效、重复弹窗、缺乏项目级记忆 |

---

## 6. 开发者关注点总结

| 痛点类别 | 高频反馈 | 典型场景 | 期望改进 |
|----------|----------|----------|----------|
| **Windows 生产可用性** | 进程锁、网络断连、预览崩溃、数据丢失 | 企业内网、MSIX 分发、全天候开发 | 进程卫生、连接重试/熔断、Electron 进程隔离、卸载保护用户数据 |
| **安全防护误判** | 正常代码/安全研/运维任务被拦截、强制切模型、无白名单 | 安全审计、恶意样本分析、CI/CD 自动化 | 分类器可观测性、项目级策略、人工复核通道、分模型阈值 |
| **会话持久化与迁移** | 重命名/移动/跨机器即断裂、工作树隔离污染主仓库 | Monorepo 重组、多机开发、容器化环境 | 基于 Git Root/逻辑 ID 存储、导入导出、工作树感知隔离 |
| **多端一致性** | 模型选择、输出样式、权限状态在 CLI/Desktop/Mobile/Remote 间不同步 | 移动端发起、桌面端接手、云端协作 | 统一会话元模型、端侧配置下发、能力协商协议 |
| **工具链可靠性** | ugrep OOM、Hook 匹配失效、MCP 预检挂起、权限弹窗风暴 | 大仓检索、自动化 Hook、企业 MCP、VS Code 深度集成 | 性能上限、单测覆盖、超时熔断、权限缓存 TTL |

---

> **下一期预告**：关注 v2.1.270 是否修复 Windows 进程锁与 Fable 5 误判，以及会话迁移 RFC 是否进入设计阶段。  
> **数据来源**：`github.com/anthropics/claude-code`（Releases / Issues / PRs，最近 24h 增量）  
> **生成时间**：2026-09-12 06:00 UTC

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 · 2026-09-12

数据来源：github.com/openai/codex

---

## 一、今日速览

过去 24 小时 Codex 仓库进入高频迭代节奏：`rust-v0.155.0-alpha.3.x` 系列在一天内连发 5 个补丁版本，同时 `0.154.0-alpha.6.2` 与 `0.155.0-alpha.2.3` 仍在维护线上并行推进。社区侧则集中爆发两类问题：**桌面端会话/线程状态管理缺陷**（侧边栏残留、跨端不同步）和**平台级回归**（macOS 与 Windows 同时出现 `r is not a function` 渲染崩溃）。MCP 相关的内存泄漏 Issue 以 37 条评论继续占据热度榜首，成为长期未解的焦点。

---

## 二、版本发布

24 小时内共发布 7 个 alpha 版本，均为 Rust 主线：

| 版本 | 说明 |
|---|---|
| rust-v0.155.0-alpha.3.10 / .3.9 / .3.8 / .3.7 | 0.155.0-alpha.3 系列的连续补丁迭代 |
| rust-v0.155.0-alpha.3 | 0.155 alpha 第 3 分支基线 |
| rust-v0.155.0-alpha.2.3 | 0.155 alpha 第 2 分支维护版本 |
| rust-v0.154.0-alpha.6.2 | 上一稳定线（0.154）的补丁维护 |

**解读**：官方 Release 说明仅包含版本号，未提供 changelog。但一天内 `alpha.3` 分支从 `.7` 连推至 `.10`，属于典型的"快速试错—回滚—重发"模式，暗示 0.155 主线正在密集修复回归问题。结合 PR 侧大量 `copyberry[bot]` 的 CLOSED 条目（见第四节），0.155 很可能是把 voice、worktrees、code mode 等实验特性转为稳定版的关键版本。

---

## 三、社区热点 Issues（Top 10）

**1. #30408 · MCP 进程泄漏，RSS 高达 9+ GB（OPEN，37 评论，👍8）**
Codex app-server 为每个新线程启动一整套全局 MCP 进程，但线程归档/关闭时从不回收，导致孤儿进程无限累积。这是当前评论数最高、👍 最多的 Issue，且从 6 月持续至今未解决，属于**架构级资源管理缺陷**。
https://github.com/openai/codex/issues/30408

**2. #40968 · Windows 桌面端发送按钮无限转圈（OPEN，35 评论，👍6）**
Windows 11 + Pro x5 用户反馈后续 prompt 提交后永远无法发送。与 #44781（排队消息编辑后报 "queued follow-up no longer exists"）指向同一类 app-server 队列状态机问题，Windows 端体验受损明显。
https://github.com/openai/codex/issues/40968

**3. #44720 · ChatGPT "hit a snag" 崩溃（CLOSED，30 评论，👍5）**
macOS + 20x Pro 环境下应用崩溃，已被关闭，属于当日集中反馈的崩溃簇之一。关闭速度快说明官方已定位或判定为重复问题。
https://github.com/openai/codex/issues/44720

**4. #44687 · macOS 26.908.31457 路由预取失败（CLOSED，13 评论）**
`route prefetch` 与 `AppRoutes` 报 `r is not a function`，发生在最新 macOS 构建上。与 #44748 形成**跨平台同源回归**（见下条）。
https://github.com/openai/codex/issues/44687

**5. #44748 · Windows 26.908.3777.0 主渲染进程启动即崩溃（OPEN，4 评论）**
同为 `r is not a function`，Windows 端回滚到 26.903.9818.0 即可恢复。两个平台在同一天出现同一报错，强烈指向 26.908 构建中的打包/压缩（minify 后函数名丢失）问题，是**当日最值得官方紧急处理的技术信号**。
https://github.com/openai/codex/issues/44748

**6. #44723 · Automations 注入缺少 call_id 的 function_call_output（OPEN，5 评论）**
心跳/cron 自动化触发时，向自定义 OpenAI 兼容 provider（如 DeepSeek）注入非法消息，导致目标会话被永久破坏（400 missing field call_id）。影响 `wire_api = "responses"` 的第三方模型用户，属于**自定义模型生态的关键阻断**。
https://github.com/openai/codex/issues/44723

**7. #44729 · tools[] 中命名空间重复，破坏严格 Responses API（OPEN，4 评论）**
26.909.12148 起间歇性在 `tools` 数组中重复声明同一 namespace，任何严格实现的 Responses API 都会拒绝整个请求。与上条同属**自定义模型兼容性回归**。
https://github.com/openai/codex/issues/44729

**8. #42236 · 已删除的 ChatGPT 会话残留在 Codex 侧边栏（OPEN，9 评论）**
Windows 端删除聊天后，Codex 侧边栏仍显示且无法移除。与 #14162（自 3 月起就存在的 stale/orphaned 线程）、#41214（重启后归档任务复活、分组重置）构成**会话状态持久化三连问题**。
https://github.com/openai/codex/issues/42236

**9. #41434 · macOS OAuth token 交换失败，curl 直连同一端点却成功（OPEN，10 评论）**
浏览器授权流程正常、回调正常，但 token 交换阶段报 "error sending request"。这类"外部工具可通、客户端不通"的问题通常指向客户端网络栈/TLS 配置，排查难度高，已持续两周。
https://github.com/openai/codex/issues/41434

**10. #44909 · 3,808 个会话中"错误目标延续"的成本实测（OPEN，3 评论）**
用户量化了 false goal continuation 在 3,808 个会话中的实际费用开销，配合 #38332（每周用量窗口被意外重置、重置日期漂移，第三次发生）与 #44168（Usage Abuse），共同指向**计费与限流透明度的信任危机**。
https://github.com/openai/codex/issues/44909

> 其他值得留意的：**#44458**（macOS CLI 0.154.0 实验特性破坏 Messages / Computer History MCP 启动）、**#39704**（Linux/NixOS Intel i915 GPU hang 冻结显示）、**#44908**（打包 skill 校验器依赖 PyYAML 但运行时缺失）、**#41283**（npm install 平台包下载失败仍 exit 0，留下不可用 CLI）。

---

## 四、重要 PR 进展（Top 10）

过去 24 小时共 44 个 PR 更新，展示的 20 条全部由 `copyberry[bot]` 提交并已 CLOSED（典型的内部合并流程）。从内容看，主线正在**批量把实验特性转正 + 加固企业/沙箱能力**：

**1. #44921 · TUI 语音对话默认开启**
将 `realtime_conversation` 提升为 stable 并默认启用，移除实验性提示；同步更新弹窗与 tooltip 测试用例。语音正式进入主线产品面。
https://github.com/openai/codex/pull/44921

**2. #44870 · Worktrees 默认开启**
`worktrees` 标记为 stable 并默认启用，从 `/experimental` 移除；同时对本地 daemon 缺失 `thread/backgroundTerminals/list` 的情况给出更明确的错误提示。多工作树并行开发成为默认工作流。
https://github.com/openai/codex/pull/44870

**3. #44915 · 移除废弃的 `thread/rollback` API**
删除 `thread/rollback` 及其请求/响应类型、生成绑定和 `Op::ThreadRollback` 操作，未知方法走通用拒绝路径，并指引用户改用 `thread/revert`。属于破坏性 API 清理。
https://github.com/openai/codex/pull/44915

**4. #44832 · 新增可信企业级 MCP 认证配置**
企业 MCP 授权必须由宿主、用户或托管配置控制，项目设置与插件声明不得重定向企业凭据或降级认证模式。直接回应企业部署的安全合规诉求。
https://github.com/openai/codex/pull/44832

**5. #44826 · 在 status 响应中暴露 MCP server capabilities**
`mcpServerStatus/list` 的 `full` 与 `toolsAndAuthOnly` 两种模式均返回 `serverCapabilities`（含 `extensions` map），并支持线程级读取。提升 MCP 生态可观测性。
https://github.com/openai/codex/pull/44826

**6. #44872 · Windows MXC 沙箱支持托管网络策略**
新增 `create_command_args()`，通过有界环境传输编码 argv、权限、策略 cwd 与托管网络上下文；托管网络下生成允许 IPv4 的策略。Windows 沙箱能力补齐。
https://github.com/openai/codex/pull/44872

**7. #44905 · app-server API 暴露已禁用插件设置**
`thread/settings/update` 与 `turn/start` 接受 `disabledPluginIds`，传入列表替换已保存选择，省略或 `null` 保留，`[]` 清空；并在 thread start/resume 中回传。
https://github.com/openai/codex/pull/44905

**8. #44862 · 为临时 fork 保留父级缓存亲和性**
ChatGPT 依据 `session-id` 头推导 Responses 缓存路由，临时 fork 需复用父会话缓存路由同时保留自身 session/thread 身份。属于**成本与延迟优化**类改动。
https://github.com/openai/codex/pull/44862

**9. #44857 · TUI 全站统一主题化线程配色**
从完整 thread ID 与当前语法主题强调色确定性派生线程颜色，status line、预览、agents overview、resume/fork 选择器保持一致。
https://github.com/openai/codex/pull/44857

**10. #44922 · Windows 发行包内置原生语音运行时**
打包 voice helper 与原生音频库；同时为全新 Windows 安装的实时 TLS 连接启用平台证书校验，按需拉取缺失的受信任根证书。
https://github.com/openai/codex/pull/44922

> 其余值得关注：**#44903**（打通 Windows MXC helper 入口点）、**#44893**（模型发现暴露 `availableAccessPrograms`）、**#44883**（对不支持 `supports_experimental_context` 的起始模型拒绝 token budget 历史注记）、**#44877**（user verification 注册返回 algorithm/publicKey）、**#44865–44867**（code mode 回调委托作用域、跨轮次上下文与截断预算保持）。

---

## 五、功能需求趋势

综合全部 50 条 Issue，社区关注方向可归纳为六条主线：

1. **多端会话状态一致性（最热）**——桌面侧边栏、iOS Remote、Codex Mobile Remote 三端之间项目列表与任务可见性不同步（#32614、#36454、#41214、#42236、#14162）。用户期望桌面端作为 source of truth，目前并未实现。
2. **MCP 生命周期与治理**——进程泄漏（#30408）、OAuth 回调页 UX（#36915）、企业级认证配置（#44832）、capabilities 可观测性（#44826）。MCP 已从"能用"进入"可运维、可审计"阶段。
3. **Windows 平台成熟度**——沙箱策略误拦截（#41779）、启动崩溃（#44748）、消息队列（#40968/#44781）、本地项目与普通项目混淆（#44916）、prewarming 锁冲突（#44736）。Windows 是当日缺陷密度最高的平台。
4. **自定义 / 第三方模型兼容**——`wire_api = "responses"` 场景下的非法消息注入（#44723）与 namespace 重复（#44729），说明 OpenAI 兼容生态正在扩大，但协议严格性适配不足。
5. **语音与实时能力**——PR #44921/#44922/#44924/#44925 连续四条语音相关改动，`realtime_conversation` 转正，语音正成为 TUI 与 Windows 的一等公民。
6. **限流与成本透明度**——#38332（周用量窗口被重置）、#44909（3,808 会话成本实测）、#44168（Usage Abuse）。用户要求可预测、可解释的计费模型。

---

## 六、开发者关注点（痛点与高频需求）

- **回归质量**：同一 `r is not a function` 在 macOS 26.908.31457 与 Windows 26.908.3777.0 同日出现，且回滚旧版即可修复（#44687 / #44748）。结合 0.155 alpha 一天四连发补丁，开发者对**发布前回归测试覆盖**的质疑在上升。
- **静默失败最伤体验**：npm install 平台包下载失败仍返回 exit 0（#41283）、Windows 聊天操作无声失败（#44916）、自动化破坏会话后无任何提示（#44723）。"失败要大声说出来"是高频呼声。
- **资源不回收**：MCP 进程 9+ GB RSS（#30408）与 stale 线程长期堆积（#14162，已开放超半年），反映 app-server 的清理语义缺乏统一设计。
- **平台特异性缺陷反复出现**：macOS OAuth（#41434）、Linux i915 GPU hang（#39704）、Windows 沙箱 policy（#41779）——三大平台各有长期未决项。
- **打包与运行时完整性**：skill 校验脚本依赖 PyYAML 但 bundled runtime 缺失（#44908）、Windows 语音原生库需专门打包（#44922），说明**分发产物的依赖闭合性**需要系统性检查。
- **企业可用性**：企业 MCP 凭据不得被项目配置降级（#44832）、多订阅共享会话（#25342），B 端诉求开始进入 Issue 列表。

---

**一句话总结**：产品侧在快速把语音、worktrees 转正并加固企业与沙箱能力；但桌面端会话状态一致性、Windows 平台稳定性、以及 MCP 资源回收这三块技术债，正在成为社区情绪的主要来源。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-09-12）

> 数据来源：github.com/google-gemini/gemini-cli

## 1. 今日速览

今日社区动态高度集中在 **Agent/子代理的可靠性问题** 上：多个 P1 级别的 Bug（子代理 MAX_TURNS 被误报为成功、generalist agent 无限挂起、shell 命令执行后卡在 "Waiting input"）持续活跃。与此同时，**安全与沙箱隔离** 成为 PR 侧的主旋律，涌现出多项针对文件系统边界、路径穿越、prompt injection 的加固提交。Auto Memory 系统的日志与重试机制也引发了维护者的一系列改进讨论。

## 2. 版本发布

**v0.61.0-nightly.20260911.ged2ac40df**（nightly 版本）

- 属于每日自动化版本迭代，由机器人提交版本号（见 PR #29285）。
- 相较前一 nightly（20260910）为增量更新，无显著功能变更说明。
- Changelog: https://github.com/google-gemini/gemini-cli/compare/v0.61.0-nightly.20260910.ged2ac40df...v0.61.0-nightly.20260911.ged2ac40df

## 3. 社区热点 Issues（Top 10）

1. **#22323 [P1] 子代理 MAX_TURNS 恢复被误报为 GOAL 成功**（13 评论）
   子代理在未完成分析、命中最大轮次限制时，仍上报 `status: "success"` 和 `Termination Reason: "GOAL"`，掩盖了中断事实。这是当前评论最多的 Issue，直接影响用户对 Agent 结果的信任。
   https://github.com/google-gemini/gemini-cli/issues/22323

2. **#21409 [P1] Generalist agent 无限挂起**（8 评论，👍8）
   一旦 CLI 委派给 generalist agent 就会永久挂起（如创建文件夹等简单操作），等待一小时也无法完成；禁用子代理即可规避。社区反应最强烈（👍 数最高），是典型的高频阻塞型 Bug。
   https://github.com/google-gemini/gemini-cli/issues/21409

3. **#19873 [P2] 利用模型的 bash 亲和性：零依赖 OS 沙箱 + 执行后意图路由**（9 评论）
   提案让 Gemini 3 模型充分发挥其原生 POSIX 工具链能力（grep/cat/sed/awk），同时通过沙箱保证安全。这是架构级的方向性讨论，涉及安全与能力的权衡。
   https://github.com/google-gemini/gemini-cli/issues/19873

4. **#22745 [P2] 评估 AST 感知的文件读取、搜索与代码库映射**（7 评论）
   EPIC 级调研：通过 AST 感知更精确地读取方法边界、减少无效轮次与 token 噪声。代表了代码理解能力的长期演进方向。
   https://github.com/google-gemini/gemini-cli/issues/22745

5. **#25166 [P1] shell 命令执行完成后卡在 "Waiting input"**（4 评论，👍3）
   简单 CLI 命令执行完毕后仍显示为活动状态并 "Awaiting user input"，导致流程中断。属于核心交互体验的严重回归。
   https://github.com/google-gemini/gemini-cli/issues/25166

6. **#21968 [P2] Gemini 不够主动使用 skills 和子代理**（6 评论）
   用户反馈模型几乎不会自发调用自定义 skills/子代理，除非显式指令。反映出工具调用策略与 prompt 引导的短板。
   https://github.com/google-gemini/gemini-cli/issues/21968

7. **#26525 [P2] 增加确定性脱敏，减少 Auto Memory 日志**（5 评论）
   Auto Memory 会将本地会话内容发送给后台抽取代理，脱敏发生在内容已进入模型上下文之后，存在隐私风险。安全类议题，值得重视。
   https://github.com/google-gemini/gemini-cli/issues/26525

8. **#21983 [P1] 浏览器子代理在 Wayland 下失败**（4 评论）
   浏览器子代理在 Wayland 环境报错，虽显示 `Termination Reason: GOAL` 但实际失败。与 #22323 类似的"假成功"模式。
   https://github.com/google-gemini/gemini-cli/issues/21983

9. **#24246 [P2] 工具数量 >128 时触发 400 错误**（3 评论）
   可用工具过多时 API 返回 400，期望 Agent 能更智能地收敛工具范围。影响大型/复杂项目的可用性。
   https://github.com/google-gemini/gemini-cli/issues/24246

10. **#21335 [P2] `/compress` 命令在会话恢复后不持久**（2 评论，👍2）
    压缩后的摘要未写回磁盘会话文件，重启/恢复后丢失，削弱了 token 节省的实际收益。
    https://github.com/google-gemini/gemini-cli/issues/21335

> 其他值得留意：#22672（Agent 应避免 `git reset`/`--force` 等破坏性操作）、#22465（创建 vite 应用卡在交互式提示）、#21763（`/bug` 报告缺少子代理上下文）。

## 4. 重要 PR 进展（Top 10）

1. **#29282 [OPEN] fix(auth): 登录后立即持久化 OAuth 凭据**
   浏览器或 user-code 登录成功后即刻保存凭据，避免重复弹出 Google 登录流程。
   https://github.com/google-gemini/gemini-cli/pull/29282

2. **#29283 / #29214 [CLOSED] fix(sandbox): 强化文件系统隔离与运行时状态隔离**
   改进 Docker/Podman/runsc/LXC/macOS Seatbelt 下的挂载边界，配置目录改为只读、运行时状态临时化。
   https://github.com/google-gemini/gemini-cli/pull/29283

3. **#29250 [CLOSED] fix(core): 阻止通过构建文件修改与不可信参数进行间接 prompt injection**
   在受限工作区模式下强化边界校验，重构 `shell`/`edit`/`write_file` 执行路径。安全类高价值修复。
   https://github.com/google-gemini/gemini-cli/pull/29250

4. **#29208 [CLOSED] fix(core): agents.json 结构异常时回退为空**
   修复损坏的 `agents.json`（合法 JSON 但形状错误）导致 `TypeError` 崩溃或静默丢失确认的问题。
   https://github.com/google-gemini/gemini-cli/pull/29208

5. **#29287 [CLOSED] feat(policy): 将 `--yolo` 映射为 allowedTools 通配符策略**
   把 `--yolo` 原生映射为 `allowedTools: ["*"]`，移除独立的 `ApprovalMode.YOLO` 状态，简化权限模型。
   https://github.com/google-gemini/gemini-cli/pull/29287

6. **#29184 [OPEN, P1] fix(core): 在 Windows 沙箱中校验 git 参数，阻止静默 `git diff --output`**
   Windows 上 `git diff --output=<path>` 会以只读命令身份无确认执行并截断文件，属安全隐患。
   https://github.com/google-gemini/gemini-cli/pull/29184

7. **#29192 [OPEN, P1] fix(checkpoint): 将 legacy raw tag 路径限制在 checkpoints 目录内**
   修复 `/chat delete <tag>` 使用 `../` 标签可删除目录外文件的路径穿越漏洞。
   https://github.com/google-gemini/gemini-cli/pull/29192

8. **#29110 [CLOSED] fix(core): `read_file` 内容改走 FileSystemService**
   修复 `read_file` 绕过注入的 `FileSystemService` 直接读本地磁盘的问题，使 ACP 客户端的 `fs.readTextFile` 能力真正生效（IDE 集成关键）。
   https://github.com/google-gemini/gemini-cli/pull/29110

9. **#29188 [OPEN, P1] fix(core): read-many-files 的 include 模式按文件名/扩展名精确匹配**
   修复 `includes()` 文本重叠导致二进制资源（图片/PDF/音频）被误判为"显式请求"的问题。
   https://github.com/google-gemini/gemini-cli/pull/29188

10. **#29187 [OPEN] fix(core): 使用 safeLiteralReplace 处理 LLM prompt 模板占位符**
    修复 `$&`、`$1` 等替换序列在用户可控值中被错误解析的问题，属提示词注入相关的健壮性修复。
    https://github.com/google-gemini/gemini-cli/pull/29187

> 其他：#29185（deflake 集成测试）、#29180（修复 `tildeifyPath` 误判同级 home 路径）、#29195（checkpoint 非数组 history 降级而非崩溃）、#29190（VSCode companion Disposable 泄漏）。

## 5. 功能需求趋势

从本期 50 条 Issue 中可提炼出以下主线方向：

- **Agent / 子代理体系成熟化（占比最高）**：涉及子代理终止语义、任务编排、轨迹可观测性（#22598 子代理轨迹支持 `/chat share`）、本地子代理 Sprint 规划（#20195）等。
- **安全与沙箱隔离**：bash 能力沙箱化（#19873）、Auto Memory 确定性脱敏（#26525）、Windows git 参数校验、路径穿越与 prompt injection 防护。
- **代码理解与 token 效率**：AST 感知读写/搜索/映射（#22745、#22746）、"Tactful Extraction" 分级读取（#19561）、`/compress` 持久化（#21335）。
- **IDE / 客户端集成**：`read_file` 走 FileSystemService（#29110）、VSCode companion 修复、ACP 客户端能力对接。
- **终端 UI 与性能**：终端 resize 时的高性能无闪烁渲染（#21924），迁移至 RenderStatic 并分批更新历史。
- **记忆系统（Auto Memory）质量**：无效 patch 隔离（#26523）、低信号会话重试收敛（#26522）、整体 bug 追踪（#26516）。

## 6. 开发者关注点

综合反馈，当前开发者痛点集中在以下几类：

1. **"假成功"与静默失败**：子代理命中轮次上限却上报 GOAL 成功（#22323）、浏览器代理 Wayland 下失败仍报 GOAL（#21983），让用户难以判断真实执行结果，是信任度层面的核心问题。
2. **挂起与卡死**：generalist agent 无限挂起（#21409）、shell 命令完成后仍等待输入（#25166）、创建 vite 应用卡在交互提示（#22465）——均为高频阻塞场景。
3. **配置不生效**：Browser Agent 忽略 `settings.json` 覆盖（#22267）、symlink 形式的 agent 文件不被识别（#20079），影响可定制性。
4. **可观测性与调试困难**：`/bug` 报告不含子代理上下文（#21763）、子代理轨迹难以查看（#22598），增加了问题排查成本。
5. **安全性担忧**：Auto Memory 在脱敏前已把内容送入模型上下文（#26525）、模型可能执行 `git reset`/`--force` 等破坏性命令（#22672）、沙箱边界与路径校验不足。
6. **规模与效率瓶颈**：工具数超限触发 400（#24246）、上下文 token 膨胀（#19561）、随机目录生成临时脚本（#23571）等。

**总体判断**：社区关注重心正从"能不能用"转向"是否可靠、安全、可观测"。Agent 编排与安全加固预计将是下一阶段的主战场。

---
*以上内容基于所提供的 GitHub 数据整理，链接均指向对应 Issue/PR。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-09-12** ｜ 数据来源：github.com/github/copilot-cli

---

## 1. 今日速览

今日发布 **v1.0.84-5**，新增基于语义化 JSONL 交换格式的会话与记忆导入命令，并让 Shell 补全与 CLI 解析共用同一套语法，补全体验显著提升。社区侧共有 **33 条 Issue** 在过去 24 小时内更新（无 PR 活动），焦点集中在 **MCP 连接生命周期**、**会话恢复与内存管理**、**Windows 平台稳定性**以及 **Skills/Agents 语义**四大方向。其中 Windows 插件更新被文件句柄占用（#4095，👍21）仍是点赞最高的长期痛点。

---

## 2. 版本发布

### v1.0.84-5

**新增（Added）**
- 新增 **session 与 memory 导入命令**，支持语义化 JSONL 交换格式，为跨会话/跨工具的上下文迁移打下基础。

**改进（Improved）**
- **Shell 补全重构**：补全项由 CLI 实际解析所用的同一套 grammar 生成，`copilot <TAB>` 现在会同时列出根级 flag 与子命令，且各子命令只展示自身可用选项，避免无效建议。
- 命令相关改进（数据截断，具体条目未完整展示）。

> 链接：https://github.com/github/copilot-cli/releases

---

## 3. 社区热点 Issues（精选 10 条）

### ① #4095 Windows 插件更新报 “Access is denied (os error 5)”——VS Code 运行中触发 ｜ 👍 21
`copilot plugin update` 在 Windows 上因 Copilot VS Code 扩展持有已安装插件的 watcher 句柄而失败，git fetch/checkout 本身成功。**这是今日点赞最高的 Issue**，反映 Windows 上 CLI 与 IDE 扩展的进程间资源竞争问题。
🔗 https://github.com/github/copilot-cli/issues/4095

### ② #4438 `disable-model-invocation: true` 让 Skill 完全不可达 ｜ 👍 7 ｜ 💬 5
用户本意是“仅手动调用”，结果 `copilot skill list` 能看到但模型的 `skill()` 工具返回 `Skill not found`，显式调用也失败。**Skill/Agent 权限语义的边界定义不清**，是当前 skills 体系最典型的设计缺口。
🔗 https://github.com/github/copilot-cli/issues/4438

### ③ #4699 长 `--resume` 会话触发 V8 堆 OOM，且崩溃转储写入用户 cwd ｜ 👍 5
1.0.82 在约 14 小时内崩溃 3 次，均在 4 GiB 堆上限；更严重的是 Node 诊断报告被写进**当前工作目录**，污染用户仓库。长期会话的上下文内存管理已成刚需。
🔗 https://github.com/github/copilot-cli/issues/4699

### ④ #4795 Atlassian MCP OAuth 回调地址不匹配（随机端口 vs 注册的 33418）｜ 👍 3
WSL Ubuntu 24.04 上连接 Atlassian 远程 MCP 时 OAuth 恒定失败。**远程 MCP 的 OAuth 流程在 WSL/随机端口场景下不可用**，直接影响企业级 MCP 落地。
🔗 https://github.com/github/copilot-cli/issues/4795

### ⑤ #4370 `server/discover` 返回 `-32602` 导致 MCP 初始化失败 ｜ 👍 3
FastMCP 未实现该非标准方法并返回错误码，CLI 却将其视为致命错误。**非标准扩展方法与规范兼容服务器冲突**，波及一批第三方 MCP 实现。
🔗 https://github.com/github/copilot-cli/issues/4370

### ⑥ #4809（已关闭）原生 MCP 连接器在 `initialize` 前发送非标准 `server/discover`，违反 MCP 生命周期规范
与 #4370 同源，明确指出 CLI 在无缓存工具列表快照时会抢先发送私有请求，导致规范兼容服务器崩溃。**今日被关闭**，值得关注其修复方案是否覆盖 #4370。
🔗 https://github.com/github/copilot-cli/issues/4809

### ⑦ #3700 [High] 1.0.60 WSL2 回归：空闲时主线程 ~215% CPU、TUI 输出冻结 ｜ 👍 2
每次全新会话必现，需重启才能恢复渲染，是 #2208 的回归。**高严重度性能回归长期未收敛**。
🔗 https://github.com/github/copilot-cli/issues/3700

### ⑧ #1168 单次请求内过度弹窗授权（“授权疲劳”）｜ 👍 2
一个高层级提示词触发十余次确认弹窗，严重影响自动化与长任务体验。**权限模型缺少粒度化的“本次会话信任”机制**。
🔗 https://github.com/github/copilot-cli/issues/1168

### ⑨ #4753 v1.0.83 会话恢复会取消正在初始化的 stdio MCP 连接（超时从 ~16s 缩至 ~1s）
恢复会话时的前台会话交接会中断仍在握手的 MCP 服务器，导致其在整个会话中静默不可用。**会话生命周期与 MCP 生命周期耦合**，与 #4818（远程 MCP 在每次 `/clear` 后 stranded）互为印证。
🔗 https://github.com/github/copilot-cli/issues/4753

### ⑩ #4652 Windows 25H2 上 `--experimental --sandbox` 报“不支持该主机”
最新 Windows 版本被沙箱能力检测误判，导致 shell 命令与沙箱服务不可用。**平台兼容性检测滞后于 OS 更新**。
🔗 https://github.com/github/copilot-cli/issues/4652

**其他值得留意**：#4764（assisted 权限约 1 小时后失效）、#4464（已关闭，Entra OAuth 静默刷新作用域 bug 导致每小时重新登录）、#4035 / #4814（语音安装因私有 Azure Artifacts feed 返回 401）、#4822（AGENTS.md 发现逻辑跨 Git 仓库边界污染指令）、#2436（跨会话上下文查询）。

---

## 4. 重要 PR 进展

**过去 24 小时内无 Pull Request 更新（共 0 条）。**

结合 Issue 动态看，今日的修复工作可能尚未以 PR 形式公开，或集中在内部流程中。建议持续关注 #4809（已关闭）关联的修复 PR 是否落地，因为它同时影响 #4370 与 #4753 所描述的一类 MCP 兼容问题。

---

## 5. 功能需求趋势

从本期 33 条 Issue 中可提炼出以下社区最关注的方向：

| 方向 | 代表 Issue | 趋势解读 |
|---|---|---|
| **MCP 生态成熟度** | #4795、#4370、#4753、#4809、#4818、#4636 | 远程/本地 MCP 的 OAuth、生命周期、启动协调、`--additional-mcp-config` 保留等问题集中爆发，是当前最大的问题簇 |
| **会话与上下文记忆** | #4699、#2436、#4753 | 长会话 OOM、跨会话上下文共享、会话恢复健壮性，直接对应 v1.0.84-5 的 session/memory 导入能力 |
| **Skills / Agents 语义** | #4438、#4637、#4823 | `disable-model-invocation` 语义歧义、重复查找、`/skills list` 可读性，说明 Skills 已进入“细节打磨”阶段 |
| **权限与安全 UX** | #1168、#4764、#4065 | 授权疲劳、assisted 模式超时失效、外泄防护误伤合法 spec 内容 |
| **平台稳定性（Windows/WSL）** | #4095、#3700、#4026、#4652、#4816 | Windows 崩溃、WSL2 高 CPU、安装器破坏超长 PATH、沙箱检测误判，Windows 用户体感明显落后 |
| **模型与成本控制** | #4821、#4819 | 请求支持 OpenAI Flex tier（非时效任务省 50% 成本）、组织策略加载顺序导致默认模型选择失败 |
| **可扩展性 Hook** | #4820、#4813 | 会话结束钩子、桌面端自定义状态栏与上下文窗口用量展示 |

---

## 6. 开发者关注点

**高频痛点 Top 5**

1. **MCP 是当前最大不稳定源**——OAuth 回调端口、非标准 `server/discover`、会话交接时的连接取消、`/clear` 后连接 stranded，多个独立 Issue 指向同一套连接生命周期设计，建议优先做一次系统性重构。
2. **Windows 平台体验断层**——插件更新被 VS Code 占用句柄、频繁原生崩溃（#4026 自 5 月起跨 4 个版本未解决）、安装器破坏 >2047 字符的 PATH。Windows 开发者诉求强烈但响应滞后。
3. **权限交互需要更聪明的默认值**——授权疲劳（#1168）与 assisted 模式约 1 小时后失效（#4764）并存，说明权限状态机既过严又不可靠。
4. **长会话资源管理**——4 GiB 堆 OOM 与崩溃转储写入 cwd 属于“二次伤害”，后者会污染用户仓库，修复优先级应高于单纯的内存优化。
5. **配置发现的边界感缺失**——`AGENTS.md` 沿符号链接与所有祖先目录递归、跨越 Git 仓库边界（#4822），会引入无关仓库的指令，属于容易被忽视但影响正确性的问题。

**积极信号**：v1.0.84-5 的 Shell 补全统一 grammar 与 session/memory 导入命令，说明团队正在补齐“工程一致性”与“上下文可移植性”这两块基础设施，与社区对跨会话记忆（#2436）和会话健壮性（#4699）的诉求方向一致。

---

*本日报基于公开 GitHub 数据自动汇总，Issue 状态与评论数可能随社区互动变化。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI 社区动态日报**  
*日期：2026‑09‑12*  

---

### 1. 今日速览
- 过去 24 h 内未有新版本发布或 PR 更新。  
- 社区活动集中在两个最近更新的 Issue：Linux/WSL2 下的随机硬死锁（#2640）以及 CentOS 7.9 环境下 MCP 连接失败（#1388）。  
- 这些问题均指向跨平台兼容性与稳定性，成为当前开发者关注的焦点。

### 2. 版本发布
> **无新版本**（过去 24 h 未发布 Release）。

### 3. 社区热点 Issues（共 2 条）
| # | 标题 | 为什么重要 | 社区反应 | 链接 |
|---|------|------------|----------|------|
| #2640 | [bug] Linux/WSL2 下 kimi CLI 0.42.0 随机硬死锁，SIGTERM/SIGQUIT 无法终止，并拖死 SSH 会话 | 揭示了在主流开发环境（WSL2）下的严重稳定性缺陷，可能导致工作流中断且难以恢复。 | 创建于 2026‑09‑11，暂无评论或点赞，但问题描述详细，易引起关注。 | <https://github.com/MoonshotAI/kimi-cli/issues/2640> |
| #1388 | [bug] kimicode 在 centos7.9 terminal 无法使用，显示mcp connect failed | 反映了在较老的企业发行版（CentOS 7.9）上 MCP 服务连接失败，影响用户在传统服务器场景的使用。 | 已于 2026‑09‑11 更新状态为 CLOSED，但未给出解决方案，社区仍需确认根因。 | <https://github.com/MoonshotAI/kimi-cli/issues/1388> |

> **说明**：因过去 24 h 内仅有 2 条更新的 Issue，故全部列出。若后续出现更多活跃议题，将按点赞、评论数及影响范围进行筛选。

### 4. 重要 PR 进展
> **无新 PR**（过去 24 h 内未有更新的 Pull Request）。

### 5. 功能需求趋势
从最近的 Issue 中可归纳出两大关注方向：

1. **跨平台稳定性**  
   - WSL2、CentOS 等非主流 Linux 发行版的兼容性问题频繁出现，暗示社区希望在更广泛的 Linux 环境（包括容器、虚拟机）获得可靠的运行体验。  
2. **MCP 服务连接健壮性**  
   - 多次出现 “MCP connect failed” 错误，表明对后端服务连接重试、超时处理及错误上报的需求亟待加强。

### 6. 开发者关注点（痛点 / 高频需求）
- **环境适配**：开发者期望 CLI 在 WSL2、老旧企业发行版（如 CentOS 7）以及常见的 Docker 镜像中都能无卡死、无连接失败地运行。  
- **异常恢复机制**：对不可中断的死锁或阻塞情况，社区希望增加超时检测、强制退出选项或更友好的日志提示，以免拖累终端会话。  
- **错误信息完善**：当前的错误提示（如 “Failed to connect MCP servers”）缺少具体故障定位（网络、认证、服务端状态），建议枚举可能原因并提供排查步骤。  

---

*本报告基于 GitHub 公开数据（issues、pull requests、releases）自动生成，如有遗漏或误请以官方仓库为准。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报（2026-09-12）

数据来源：github.com/anomalyco/opencode

---

## 一、今日速览

今日无新版本发布，社区讨论集中在 **v2.0 beta 的稳定性回归** 与 **订阅计费异常** 两大主题。高赞需求围绕"子智能体并发上限"（31👍）与"保留文件变更的撤销"（12👍）持续发酵；同时 20 个搁置满 60 天的 PR 被自动化清理流程统一关闭，提示维护节奏正在向 v2 收敛。

---

## 二、版本发布

过去 24 小时内无新 Release。

---

## 三、社区热点 Issues（Top 10）

1. **#37790 [OPEN][BUG] OpenCode Go 订阅已扣款但工作区仍显示 "Insufficient balance"**
   评论 18（今日最高）。用户通过 Stripe 付款成功却无法使用服务，属于直接阻断付费用户的计费/账户同步故障，是当前最紧急的线上问题。
   https://github.com/anomalyco/opencode/issues/37790

2. **#45442 [OPEN][2.0] subagent 无限循环：364 次相同 grep 调用、约 50 分钟、无循环保护**
   后台 `general` 子智能体重复执行同一工具调用，造成不可控的 token 消耗。评论 8，社区对"成本失控"高度敏感，是 v2 智能体安全机制的核心缺陷。
   https://github.com/anomalyco/opencode/issues/45442

3. **#27110 [OPEN][FEATURE] 增加"最大并行子智能体数量"设置**
   评论 5、👍 31（全站最高赞）。本地模型受显存/上下文限制，用户希望限制并行子智能体数量以避免任务互相挤占。呼声极高，落地价值明确。
   https://github.com/anomalyco/opencode/issues/27110

4. **#7963 [CLOSED][windows][FEATURE] 撤销消息但保留文件变更（对齐 Claude Code）**
   评论 9、👍 12。当前 `/undo` 会同时回滚对话与文件改动，用户希望只清理对话历史。该 Issue 已被关闭，说明需求已被受理或已实现。
   https://github.com/anomalyco/opencode/issues/7963

5. **#40993 [OPEN][FEATURE] 支持 Agent Plugins 标准（agent-plugins.org）**
   评论 6、👍 12。该标准用于把 Agent Skills 与 MCP Server 打包为可移植插件，是多厂商协作方向，涉及生态兼容性。
   https://github.com/anomalyco/opencode/issues/40993

6. **#48330 [OPEN][2.0] Copilot Legacy 套餐被单条 prompt 全部耗尽**
   评论 6。用户 1500 次/月的配额在一次会话内被用光并触发 429，v1 无此问题，属典型 v2 计费/请求计数的回归缺陷。
   https://github.com/anomalyco/opencode/issues/48330

7. **#30308 [OPEN][FEATURE] 类似 Claude Code 的动态工作流（dynamic workflows）**
   评论 10、👍 5。用户希望引入可编排的多步骤工作流能力，反映社区对"智能体编排"的强需求。
   https://github.com/anomalyco/opencode/issues/30308

8. **#10939 [CLOSED][windows] `auth login <url>` 应在执行 well-known auth.command 前确认**
   评论 6、👍 6。该命令会直接执行远端返回的 `auth.command`，缺少校验与确认步骤，属安全隐患，已关闭。
   https://github.com/anomalyco/opencode/issues/10939

9. **#41125 [OPEN] OpenCode Go 端点 DeepSeek 无 prompt caching（cache_hit 恒为 0）**
   评论 3。与 #43218（缓存命中率低于 10% 并持续下降）相互印证，说明 Go 网关的缓存策略存在问题，直接影响成本与响应速度。
   https://github.com/anomalyco/opencode/issues/41125 ・ https://github.com/anomalyco/opencode/issues/43218

10. **#48384 [OPEN][2.0] TUI 崩溃：ENOSPC，watch `~/.local/state/opencode/beta/tui`**
    评论 4。文件监听导致磁盘耗尽，属 v2 TUI 的资源管理缺陷。
    https://github.com/anomalyco/opencode/issues/48384

**其他值得关注**：#36241（macOS gpt-5.6-sol-fast 推理流中断）、#48530（`session.error` 被全局同步忽略、会话卡在 busy）、#48553（Desktop v1.18.30 启动闪屏遮罩不消失）、#48556（社区自研 Android 原生客户端）、#48504（跨平台 SKILL.md 发布工具）。

---

## 四、重要 PR 进展（Top 10）

> 注：今日展示的 20 个 PR 全部标记为 `[automated-pr-cleanup]` 且状态为 CLOSED，均为 2026-08-11 创建、因 60 天无更新被自动关闭。以下内容为这些 PR 本身所承载的功能/修复，供参考归档。

1. **#41813 feat: 粘贴内容展开/折叠切换** — 支持鼠标点击在占位符与全文之间切换。https://github.com/anomalyco/opencode/pull/41813
2. **#41811 feat(plugin): 新增 session stopping hook** — 会话进入 idle 前触发插件钩子，可追加有序上下文。https://github.com/anomalyco/opencode/pull/41811
3. **#41803 fix(desktop): 恢复服务端 CORS 策略** — 停止向所有 Electron 请求注入通配 CORS 头，保留 `oc://renderer` 白名单。https://github.com/anomalyco/opencode/pull/41803
4. **#41792 fix(console): 保留 assistant content 数组** — 修复 OpenAI Responses API 中 `output_text` 多段内容被丢弃的问题。https://github.com/anomalyco/opencode/pull/41792
5. **#41760 feat(sdk): 向嵌入式宿主导入本地凭据** — 新增 `Credentials.fromLocalDatabase()`，OAuth 凭据仅保留 access token，避免轮换用户 refresh token。https://github.com/anomalyco/opencode/pull/41760
6. **#41752 feat(tui): 内联渲染结构化 mentions** — 文件、技能、agent 提及以内联形式展示，替代独立徽章。https://github.com/anomalyco/opencode/pull/41752
7. **#41748 fix(session): 提交新 prompt 时中断正在运行的请求** — 解决长命令（如 `sleep 30`）阻塞新输入的问题。https://github.com/anomalyco/opencode/pull/41748
8. **#41737 fix(core): 采用合并后的迁移别名** — 支持迁移声明历史 ID，避免重复回放已合并的 SQL。https://github.com/anomalyco/opencode/pull/41737
9. **#41734 fix(opencode): 跳过不安全的删除 diff** — `apply_patch` 不再对二进制/超大文件生成完整 unified diff。https://github.com/anomalyco/opencode/pull/41734
10. **#41728 fix(server): 确保 Plugin 服务在 serve 启动时实例化** — 修复 HTTP serve 模式（OpenChamber/桌面/Web）插件服务从未加载的问题。https://github.com/anomalyco/opencode/pull/41728

**其他归档 PR**：#41791（Linux 文件管理器图标）、#41785（插件覆盖优先级文档）、#41770（停止重试不可用音频）、#41749（生态插件表补充 opencode-plugin-peers）、#41729（按活动标签命名窗口）、#41725（TUI Git 分支状态指示）、#41723（不支持图片格式降级为文本）、#41716（Docker Bun 贡献者工作流）、#41713（侧边栏选择串扰）、#41710（非 HTTPS 下 blob ID 回退）。

---

## 五、功能需求趋势

1. **智能体编排与并发控制**：动态工作流（#30308）、并行子智能体上限（#27110）、会话续推命令（#44921）共同指向"更强的可控编排能力"。
2. **成本与缓存优化**：DeepSeek prompt caching 失效（#41125）、缓存命中率趋零（#43218）、v2 无条件发送 `prompt_cache_key` 导致网关 400（#45113）——缓存与 token 经济性是高频主题。
3. **新模型 / 新 Provider 接入**：Muse Spark / Muse Code（#41551、#47237、#48512）、Visual Studio 2026 企业版（#11902）等集成诉求持续。
4. **生态与插件标准化**：Agent Plugins 标准（#40993）、SKILL.md 跨平台发布（#48504）、插件钩子（PR #41811）显示社区在推动开放插件生态。
5. **IDE / 客户端集成**：VS 2026（#11902）、原生 Android 客户端（#48556）、Desktop 体验问题（#48553）表明多端覆盖是关注重点。
6. **安全与权限**：`auth login` 远程命令执行需确认（#10939）代表对"默认安全"的诉求上升。

---

## 六、开发者关注点（痛点与高频需求）

- **v2.0 beta 稳定性回归集中爆发**：Copilot 配额被单次会话耗尽（#48330）、TUI ENOSPC 崩溃（#48384）、Desktop 闪屏不消失（#48553）、会话卡死无错误提示（#48530）、compaction 持久化空摘要（#48543）、无响应（#48503/#48506）。升级 v2 的用户体验风险显著。
- **计费与配额一致性**：付费后仍提示余额不足（#37790）、单 prompt 耗尽配额（#48330）——计费链路缺乏可靠的同步与校验。
- **成本失控防护缺失**：子智能体无限循环无熔断（#45442），叠加 prompt 缓存失效，直接放大 token 支出。
- **缓存策略缺陷**：Go 网关对 DeepSeek 不缓存、`prompt_cache_key` 强制下发引发兼容性 400，属于服务端与协议层双重问题。
- **本地化与显示质量**：中文等非 ASCII 字符渲染乱码（#48496）、库依赖 `console.*` 输出污染 TUI 备用屏（#48520），影响日常可用性。
- **维护节奏信号**：20 个 PR 因 60 天无更新被批量自动关闭，提示贡献者需关注 PR 时效，也反映维护方正在为 v2 收敛资源。

---

*以上内容基于 2026-09-11 更新的 GitHub 公开数据整理，链接均指向 anomalyco/opencode 仓库。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-09-12

> 数据来源：github.com/badlogic/pi-mono（earendil-works/pi）

---

## 1. 今日速览

今天没有新版本发布，但社区活动相当活跃：Windows 支持成为绝对焦点，#7547 讨论热度飙升至 62 条评论，同时围绕 Windows 的 shell 查找、IME 输入、Shift+Enter 等问题集中爆发。核心侧，多位贡献者提交了影响架构的重要 PR，包括会话中期 system message 支持、Codex 请求归因、Bedrock 用量归一化，以及多项性能与稳定性修复（TUI 冻结、O(n²) 解析、压缩估算失真）。

---

## 2. 版本发布

过去 24 小时无新 Release。

---

## 3. 社区热点 Issues（Top 10）

**① #7547 [OPEN] Windows 上的 Pi 使用方式与问题汇总**（62 评论，👍2）
社区关于 Windows 支持的"总纲帖"。作者指出 Windows 上运行 Pi 的方式过多，难以判断应该优先修 bug、写文档还是开箱即用，讨论如何把部分能力下放给扩展。评论数远超其他 Issue，是当前社区最热话题。
🔗 https://github.com/earendil-works/pi/issues/7547

**② #9323 [OPEN] 改进 fireworks 专用配置**（14 评论）
针对特定 provider 配置函数的 bug 报告，作者强调人工撰写并附上代码定位链接，属于 provider 适配层的精细化修复诉求。
🔗 https://github.com/earendil-works/pi/issues/9323

**③ #5323 [OPEN] 改进 Vertex + GCP metadata server 支持**（9 评论，👍2）
Pi 的 "is Vertex authed?" 检查使用同步 `existsSync`，在 GCP metadata server 环境下存在缺陷。云环境认证是长期悬而未决的问题，跨三个月仍在更新。
🔗 https://github.com/earendil-works/pi/issues/5323

**④ #9410 [OPEN] 大上下文会话按 Escape 中断导致 TUI 冻结约 60 秒**（4 评论）
在约 465k token 的会话中按 Escape 中断流式输出，CLI 会卡在 `⠸ Working` 约 58 秒，编辑器完全无响应。属于严重交互体验问题。
🔗 https://github.com/earendil-works/pi/issues/9410

**⑤ #9265 [OPEN] openai-completions 流式 tool-call 参数重解析呈 O(n²)**（4 评论）
每收到一个 delta 就重新解析整个累积的工具调用 JSON，在单线程守护进程托管多会话时阻塞事件循环。是性能类问题中最具技术深度的。
🔗 https://github.com/earendil-works/pi/issues/9265

**⑥ #8810 [OPEN] 扩展注册的 provider 被新会话间歇性忽略**（5 评论，👍1）
当 provider 由扩展通过 `pi.registerProvider()` 注册时，新会话会偶发不遵循 settings.json 中的 `defaultProvider/defaultModel`，静默回退到其他 provider。影响可预期性与配置可信度。
🔗 https://github.com/earendil-works/pi/issues/8810

**⑦ #7658 [OPEN] 为扩展提供持久化 API-key 凭据的能力（auth.json）**（4 评论）
扩展可注册自定义 provider，却无法以编程方式把 API-key 写入 `auth.json`，这是扩展生态的一块关键缺口。
🔗 https://github.com/earendil-works/pi/issues/7658

**⑧ #9331 [OPEN] Bedrock：OpenAI 的 reasoning effort 从未发给模型**（4 评论）
通过 Bedrock 调用 OpenAI 模型时，调整 thinking level 完全无效，benchmark 显示 low/medium/high 无差异。直接影响推理能力可调性。
🔗 https://github.com/earendil-works/pi/issues/9331

**⑨ #9045 [OPEN] 非法的 `--mode` 值被静默忽略**（4 评论）
`--mode yaml` 既不设置 mode 也不报错，直接回退到文本/交互模式，对脚本化调用非常危险，属于 CLI 健壮性问题。
🔗 https://github.com/earendil-works/pi/issues/9045

**⑩ #7321 [OPEN] 不支持 bracketed paste 的终端（如 Termux）多行粘贴失效**（5 评论，👍1）
首个 `\r` 会触发提交而非插入换行，移动端终端体验受损。
🔗 https://github.com/earendil-works/pi/issues/7321

> 其他值得留意：#6108（`/reload` 重复触发扩展依赖副作用）、#6930（希望公开 `renderPage`/oauth HTML 渲染函数）、#9500（SIGILL 崩溃，原因未确认）、#9493（启动 banner 未过滤 `disable-model-invocation` 技能）。

---

## 4. 重要 PR 进展（Top 10）

**① #9501 [OPEN] 从安装目录解析 Windows shell**
统一并文档化 Windows 下二进制查找逻辑，替换原先硬编码/环境变量/多重回退混杂的方式，直接回应 Windows 主线讨论。
🔗 https://github.com/earendil-works/pi/pull/9501

**② #9116 [CLOSED] feat(ai)：支持会话中期 system message**
为 #8998 拆分的第一层，让会话中途变更（扩展、工具加载）以 system 角色传递，是架构性改动。
🔗 https://github.com/earendil-works/pi/pull/9116

**③ #9117 [CLOSED] feat(coding-agent)：以 system message delta 传递 prompt 与工具变更**
在上一条基础上，将 prompt/工具变更改为增量 system message，而非重写顶层 prompt。
🔗 https://github.com/earendil-works/pi/pull/9117

**④ #9489 [CLOSED] fix(bedrock-converse)：按模型族归一化 usage.input**
修复 Anthropic Claude 与其他模型族在 `inputTokens` 口径（净额 vs 含缓存）不一致导致的用量统计错误，Fixes #8752。
🔗 https://github.com/earendil-works/pi/pull/9489

**⑤ #9488 [OPEN] fix(ai)：为 Codex 增加规范化的轮次归因**
补齐 Codex 的 session/thread/turn/window/request-kind 元数据，使工具续接、重试、steering、压缩恢复可被可靠归因。
🔗 https://github.com/earendil-works/pi/pull/9488

**⑥ #8572 [OPEN] feat(ai)：Amazon Bedrock Mantle 支持**
Amazon 将 GPT-5.x 等新模型走 Mantle（新 API 面）而非 Converse，此前路由到 Converse 会报错。WIP，等待 API key 权限做 e2e。
🔗 https://github.com/earendil-works/pi/pull/8572

**⑦ #9478 [CLOSED] fix(coding-agent)：压缩 token 估算中限制单条消息字符数**
两条约 6.6MB 的 `web_fetch` 结果导致自动压缩误触发（刚压缩完 3 分钟又触发），修复估算失真，Fixes #9476。
🔗 https://github.com/earendil-works/pi/pull/9478

**⑧ #9468 [CLOSED] feat(coding-agent)：延迟扩展重载（requestReload，在 settle 时合并）**
新增 `ExtensionContext.requestReload`，保证重载不在轮次中途执行，并提供 followUp 让 TUI 在重载后提交用户轮次。
🔗 https://github.com/earendil-works/pi/pull/9468

**⑨ #9442 [OPEN] fix(ai)：允许兼容代理使用 prompt cache key**
通过 `compat.supportsPromptCacheKey` 让兼容代理可接收 Pi 的会话缓存键，此前仅在直连 OpenAI 或长保留时发送。
🔗 https://github.com/earendil-works/pi/pull/9442

**⑩ #9483 [CLOSED] 通过 customCwd + ctx.cwd 回退让工具 cwd 解析可选化**
在 #8627 之后保持向后兼容：显式 `cwd` 更名为 `customCwd`，未指定时回退到 `ctx.cwd`。
🔗 https://github.com/earendil-works/pi/pull/9483

> 其他：#9503（浅色主题警告对比度）、#9495（approve-contributor 空行修复）、#9491（定制化文档 evals）、#9467（setup 阶段中断归类为 aborted）、#9459（恢复会话时优先记录的 model_change）、#8708（不依赖 GitHub API 解析 fd/rg 版本）、#8616（JPEG 非 EXIF APP1 段扫描）。

---

## 5. 功能需求趋势

从全部 Issues 提炼，当前社区最关注的方向：

- **Windows / 跨平台支持**：数量与热度最高。涉及 shell 查找（#9490、PR #9501）、IME 输入（#9497）、Shift+Enter（#7175）、D 盘系统（#9490），几乎构成一个独立主题。
- **Provider 与模型适配**：Bedrock/Vertex/GCP/Antigravity/fireworks 等企业云与第三方 provider 的认证、用量口径、reasoning effort 传递问题密集（#5323、#9331、#9323、#9494、PR #8572、#9489、#9442）。
- **扩展生态能力**：扩展的凭据持久化（#7658）、公开渲染 API（#6930）、扩展注册 provider 的默认值可靠性（#8810）、延迟重载（#9468）——扩展正从"能用"走向"可编程、可持久、可组合"。
- **性能与稳定性**：TUI 冻结（#9410）、O(n²) 解析（#9265）、压缩估算（#9478）、崩溃（#9500）。
- **终端体验与 TUI 细节**：多行粘贴（#7321）、内联图片开关（#9496）、markdown 标题渲染（#9473）、CJK 输入（#9497）。

---

## 6. 开发者关注点

- **Windows 是第一优先级缺口**：一个 62 评论的总纲帖 + 多个具体 bug + 配套 PR，说明 Windows 已成为从"能跑"到"好用"的关键瓶颈，社区强烈希望明确核心与扩展的职责边界。
- **性能在真实规模下暴露**：无论是 465k token 会话的 60 秒冻结，还是 6.6MB 工具结果导致的压缩误触发，问题都出现在大上下文/真实负载下，说明需要更系统的资源上限与增量处理策略。
- **配置与默认值的可预期性**：默认 provider 被忽略（#8810）、非法 `--mode` 静默（#9045）、reasoning effort 不生效（#9331），反映出"配置写了但不生效且不报错"是反复出现的痛点，开发者希望有明确的诊断与失败反馈。
- **云环境认证与用量统计的准确性**：Vertex metadata server、Bedrock 用量口径、Antigravity 配额 429，直接影响企业用户对成本与可用性的信任。
- **扩展生态的成熟度诉求**：凭据持久化、API 公开、重载语义，是扩展作者最常提出的三类结构性需求。

---

*本日报由 AI 技术分析整理，链接均指向 earendil-works/pi 仓库对应 Issue / PR。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code 社区动态日报（2026‑09‑12）**  

---

### 今日速览  
- 今日发布了夜间版本 **v0.23.3‑nightly.20260911.aaa6a32aae**，主要完成了 Dingtalk 集成的底层清理以及对 `channels` 特性的移除（“remove me”）。  
- 社区讨论集中在 **Windows 环境下的进程/PTY 泄漏**、**VS Code 扩展的会话历史丢失**、**Telemetry 隐私泄漏** 以及 **Hooks 机制与 Claude Code 的对齐** 四个方向，评论数最高的 Issue 均集在此类问题上。  
- 最近合并的 PR 主要围绕 **提升交互式终端稳定性（OpenTUI 确认框、Web Shell 恢复中断会话）**、**强化安全（阻止自定义 Git 配置触发程序执行）**、**性能与资源管理（保存 Prompt Cache、限制后台 Agent 超时）** 以及 **文档化（REST API 参考）** 四方面。  

---

### 版本发布  
**v0.23.3‑nightly.20260911.aaa6a32aae**  
- **refactor(dingtalk)**：移除过时的后台响应聚合逻辑，减少无用状态更新。  
- **feat(channels)!**：`remove me` – 该提交表明 `channels` 特性被彻底清除，后续不再保留相关代码。  
（完整发布说明见 `.github/release.yml`，目前仅以上两项更改可见。）  
[Release 链接](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.3-nightly.20260911.aaa6a32aae)  

---

### 社区热点 Issues（挑选 10 条）  

| # | 标题与链接 | 关键标签 | 评论/点赞 | 为何重要 |
|---|------------|----------|-----------|----------|
| [#11500](https://github.com/QwenLM/qwen-code/issues/11500) | TUI exits silently (uncaught React #185) when multiple background agents complete | `priority/P1`, `type/bug`, `category/ui`, `scope/rendering` | 6💬 / 0👍 | 多个后台子代理快速完成会触发 React 无限更新导致 TUI 直接退出，影响交互式使用。 |
| [#9693](https://github.com/QwenLM/qwen-code/issues/9693) | Qwen Desktop reports MCP -32000 Connection closed at startup on Windows | `priority/P2`, `type/bug`, `category/integration`, `scope/windows` | 6💬 / 0👍 | Windows 上 MCP STDIO 连接在启动时即被关闭，阻止文件系统等工具的使用。 |
| [#4218](https://github.com/QwenLM/qwen-code/issues/4218) | MCP Server "filesystem" shows connected on UI, but tools are not available to the model | `status/needs-triage`, `type/bug`, `category/tools`, `scope/windows` | 6💬 / 0👍 | UI 显示已连接但模型实际未获得工具定义，导致功能失效。 |
| [#8138](https://github.com/QwenLM/qwen-code/issues/8138) | worktree settings.json writes to project root .qwen instead of worktree's .qwen | `priority/P2`, `type/bug`, `category/configuration`, `scope/settings` | 6💬 / 0👍 | 在 Git worktree 中保存设置会写错位置，破坏隔离环境。 |
| [#11352](https://github.com/QwenLM/qwen-code/issues/11352) | [Windows] web-terminal PTYs leak conhost.exe on natural exit | `priority/P1`, `type/bug`, `category/performance`, `scope/windows` | 6💬 / 0👍 | Web‑Terminal PTY 未正确释放 conhost，长期使用会导致句柄泄漏。 |
| [#11574](https://github.com/QwenLM/qwen-code/issues/11574) | [VS Code] Extension update hides all prior session history | `priority/P2`, `type/feature-request`, `category/ui`, `scope/vscode` | 6💬 / 0👍 | 0.23.x 之前的会话缺少 `sourceType` 元数据，导致历史记录被过滤掉，影响续任。 |
| [#6067](https://github.com/QwenLM/qwen-code/issues/6067) | [CRITICAL] Qwen Code Windows 平台存在进程管理异常，建议用户暂停使用 | `status/need-information`, `type/bug`, `category/performance`, `scope/windows` | 6💬 / 0👍 | 指出 Windows 版本存在 PowerShell 进程泄漏，内存易爆。 |
| [#11556](https://github.com/QwenLM/qwen-code/issues/11556) | vscode-ide-companion 0.23.1 cannot work under Remote‑SSH — webview stuck loading | `priority/P1`, `type/bug`, `category/integration`, `scope/vscode` | 5💬 / 0👍 | Remote‑SSH 场景下 Companion 扩展的 WebView 加载卡死，影响跨机器开发。 |
| [#11610](https://github.com/QwenLM/qwen-code/issues/11610) | hooks: align the hook contract with Claude Code | `priority/P1`, `type/bug`, `category/core`, `scope/settings` | 3💬 / 0👍 | 社区希望 Hooks 输出格式、超时单位等与 Claude Code 保持一致，以便迁移。 |
| [#11666](https://github.com/QwenLM/qwen-code/issues/11666) | bug(telemetry): API request content is exported despite logPrompts=false | `priority/P2`, `type/bug`, `category/telemetry`, `scope/data-privacy` | 3💬 / 0👍 | Telemetry 开关失效，导致敏感请求内容被上传，隐私风险突出。 |

> **社区反应**：以上 Issue 均未获得点赞，但评论数相对较高（3‑6 条），表明开发者在讨论细节和复现步骤上较为活跃，尤其围绕 **Windows 稳定性**、**VS Code 交互**、**Telemetry 隐私** 与 **Hooks 兼容性** 四个主题展开。

---

### 重要 PR 进展（挑选 10 条）  

| # | 标题与链接 | 类别 | 核心改动 |
|---|------------|------|----------|
| [#11659](https://github.com/QwenLM/qwen-code/pull/11659) | fix(cli): keep the expanded OpenTUI confirmation dialog on screen | CLI / UI | 修复 OpenTUI 确认框在特定视口下被瞬间闪烁的问题，确保用户能看到完整确认内容。 |
| [#11545](https://github.com/QwenLM/qwen-code/pull/11545) | feat(web-shell): continue interrupted sessions | Web‑Shell | 添加 “Continue execution” 按钮，允许恢复中断的会话而不重复用户消息。 |
| [#11669](https://github.com/QwenLM/qwen-code/pull/11669) | fix(core): stop a repository's own git config from running programs during automatic git calls | Core / Security | 防止恶意 `.git/config` 中的 `filter.*` 或 `credential.*` 指令在 agent 自动 git 操作时被执行。 |
| [#10410](https://github.com/QwenLM/qwen-code/pull/10410) | feat(core): preserve prompt cache for deferred tools | Core / Performance | 引入两步桥（`tool_search` + `tool_call`），在延迟工具调用之间保持 Prompt Cache，减少重复 token 计算。 |
| [#11653](https://github.com/QwenLM/qwen-code/pull/11653) | autofix/takeover: fix(acp-bridge): reject unlimited cgroup sentinel for ACP child heaps | ACP / Resource | 当 cgroup 上报 “unlimited” 时，改为使用实际可用内存上限，防止 V8 旧空间过大导致 OOM。 |
| [#11342](https://github.com/QwenLM/qwen-code/pull/11342) | feat(web-shell): add model role and context window configuration | Web‑Shell / Settings | 在 Web Shell 设置中增加模型角色（Advisor、图像、语音）及上下文窗口大小选择。 |
| [#11642](https://github.com/QwenLM/qwen-code/pull/11642) | fix(vscode): shut the ACP CLI down gracefully instead of killing it | VS Code / Companion | 在窗口关闭/重载时先关闭 CLI 的 stdin，让 CLI 自行完成清理，避免强制终止导致资源泄漏。 |
| [#11270](https://github.com/QwenLM/qwen-code/pull/11270) | fix(core): time out stalled background agents | Core / Reliability | 为普通后台 Agent 添加进度看门狗：模型/控制工作 15 min 无进展则终止；单个工具 10 min 超时。 |
| [#11592](https://github.com/QwenLM/qwen-code/pull/11592) | docs(daemon): publish the REST API reference | Documentation | 生成 OpenAPI 3.1 规范及人类可读文档，涵盖所有受支持的 Daemon REST/SSE 路由。 |
| [#11001](https://github.com/QwenLM/qwen-code/pull/11001) | fix(test): wait for interactive PTY sessions to end during cleanup | Testing / CI | 交互式测试 harness 在清理前真正等待 PTY 子进程退出，防试残留终端影响后续测试。 |

> 这些 PR 涵盖了 **交互体验（OpenTUI、Web Shell）**、**安全防护**、**性能缓存**、**资源容错**、**文档完善** 以及 **测试可靠性** 等关键维度，说明项目正在从功能扩展转向稳定性与安全性的深化。

---

### 功能需求趋势（从 Issues 中提炼）  

| 趋势方向 | 体现的 Issue 示例 | 社区关注点 |
|----------|-------------------|------------|
| **IDE 集成 & VS Code 兼容性** | #11574（历史可见性）、#11556（Remote‑SSH 加载卡死）、#11511（会话被强制关闭） | 开发者希望 Companion 扩展在各种工作区（本地、Remote‑SSH、Worktree）下能可靠保存、恢复会话历史。 |
| **会话与任务生命周期管理** | #11024（Worktree session 清理）、#11545（继续中断会话）、#11270（后台 Agent 超时） | 需要更细粒度的会话隔离、自动清理以及后台任务的可控超时与恢复机制。 |
| **Telemetry 隐私与数据安全** | #11666、#11667（日志泄漏请求体）、#11198（原始工具错误上传） | 社区强烈要求 Telemetry 开关真正生效，以及日志脱敏，防止敏命令行或代码泄露。 |
| **Hooks 机制标准化** | #11610（与 Claude Code 对齐）、#11675（旧毫秒超时警示） | 期望 Hooks 输入/输出格式、超时单位、止动钩子等与业界主流工具保持一致，降低迁移成本。 |
| **Windows 平台稳定性** | #9693（MCP 连接失败）、#11352（PTY 漏洞）、#6067（进程泄漏） | Windows 上的 PTY、MCP、后台进程管理仍是主要痛点，亟待修复。 |
| **MCP 工具链可靠性** | #4218、#9693、#11500（后台代理导致 TUI 崩溃） | MCP 服务器的连接状态同步以及工具定义的正确下发是集成功能的基础。 |

---

### 开发者关注点（痛点 & 高频需求）  

1. **Windows 环境下的进程/PTY 泄漏**  
   - PowerShell、conhost、MCP 进程未正常回收导致内存占用持续上升。  
   - 期待：统一的进程树清理机制、默认开启 ConPTY 后端、MCP STDIO 连接健康检查。  

2. **VS Code 扩展的会话历史丢失**  
   - 老版本会话缺少

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报
**日期：2026-09-12** ｜ 数据来源：github.com/Hmbown/DeepSeek-TUI

---

## 一、今日速览

今日无新版本发布，社区焦点集中在**里程碑收尾与架构重构**：v0.9.12 里程碑追踪 Issue（#5573）与多条 v0.9.12 功能线关闭，同时 EPIC-005「TUI Crate 拆分」持续开放推进。Bug 侧有两个高优问题浮出水面——会话恢复 ENOENT 失败（#6102）与用户输入弹窗裁剪（#6045）。PR 侧则迎来一批实质功能落地，包括会话归档导出、执行策略增强、工具图片回传、Serply 搜索提供商接入，以及子代理限流自适应调度。

---

## 二、版本发布

过去 24 小时**无新版本发布**，暂无更新内容可总结。

---

## 三、社区热点 Issues（Top 10）

**1. #5573 [CLOSED] v0.9.12 里程碑追踪（25 条评论，今日最热）**
本周期最高热度条目，作为 v0.9.12 的总入口，包含运维交接、产品权威文档与工作分支说明。今日关闭标志着里程碑收尾。
🔗 Hmbown/Codewhale Issue #5573

**2. #5316 [OPEN] EPIC-005：CodeWhale TUI Crate 拆分（Umbrella，22 条评论）**
长期开放的核心架构重构 EPIC，执行权已迁移至 Linear 的 Core execution plan，覆盖 C03–C10 的归属、依赖顺序与完成证据。
🔗 Hmbown/Codewhale Issue #5316

**3. #3063 [CLOSED] v0.8.59 发布追踪：TUI 鼠标上报泄漏修复（11 条评论）**
老版本发布线，核心是 macOS 上的 TUI mouse-report 输入泄漏修复，并完成维护者队列 PR/Issue 的分诊。今日关闭。
🔗 Hmbown/Codewhale Issue #3063

**4. #6102 [OPEN] 恢复中断会话失败：解析 runtime store 目录报 ENOENT（4 条评论）**
`codewhale resume` 在启动前即失败，路径解析指向不存在的 runtime 目录。属于直接影响核心工作流的回归类 Bug，优先级高。
🔗 Hmbown/Codewhale Issue #6102

**5. #6045 [OPEN] TUI 用户输入弹窗裁剪、隐藏输入（4 条评论）**
在真实终端（141×38）复现：选项被裁切、底层对话不可见、固定 22 行上限、居中浮层无滚动、无返回导航且未文档化。可用性痛点明确。
🔗 Hmbown/Codewhale Issue #6045

**6. #6017 [OPEN] 是否支持跨会话持久记忆？（3 条评论）**
MemCode 创始人提出将持久记忆作为可选记忆层集成，用于承载项目上下文与用户偏好。属于生态集成类需求，社区关注度高。
🔗 Hmbown/Codewhale Issue #6017

**7. #1917 [CLOSED] 通用 PreToolUse/PostToolUse 钩子层提案（6 条评论）**
为所有动作类型提供 Cancel（含回滚）/Pause/Resume 的统一生命周期钩子，是架构级统一模式的落地，今日关闭。
🔗 Hmbown/Codewhale Issue #1917

**8. #5268 [CLOSED] 回合中控制（排队/立即发送/Esc 保留草稿）+ 具名等待（4 条评论）**
把「排队 vs 立即发送 vs 取消保留草稿」收敛为清晰可见的契约，并让状态栏明确标注 agent 正在等待什么。转向体验的关键改进。
🔗 Hmbown/Codewhale Issue #5268

**9. #2617 [CLOSED] SPM `swift test` 在沙箱内失败（5 条评论）**
`swift test` / `swift build --build-tests` / `xcodebuild test` 在 CodeWhale shell 沙箱内持续报 `sandbox_apply: Operation not permitted`，影响 Apple 生态开发者。
🔗 Hmbown/Codewhale Issue #2617

**10. #2327 [CLOSED] VS Code 市场非官方扩展的版权问题（3 条评论）**
用户举报两个使用 CodeWhale 名称的非官方 VS Code 扩展，涉及品牌与版权风险，今日关闭。
🔗 Hmbown/Codewhale Issue #2327

> 其他值得留意的关闭项：#5269（可评论的持久化 plan 产物）、#5271（会话 peek 与免完全附着审批）、#4402（焦点感知通知与回归摘要）、#3954/#3957（setup 向导与共享 modal 基础设施拆分）、#5103（`DeepSeekClient` 更名为 provider 中立类型）、#3358（Playwright 浏览器自动化工具）。

---

## 四、重要 PR 进展（Top 10）

**1. #6056 [CLOSED] 会话全保真归档导出为 tar.xz**
新增 `session_export` 模块，`/export` 的机器面向补充方案：一条命令把完整会话记录打包为压缩归档，支持 CLI 与库内嵌入。
🔗 Hmbown/Codewhale PR #6056

**2. #6054 [CLOSED] 执行策略：deny 规则集表达能力增强**
为 deny-prefix 匹配器增加四项能力，覆盖真实数据外泄/破坏命令的向量，含 cmd.exe 单字母斜杠标志在任意位置跳过等。
🔗 Hmbown/Codewhale PR #6054

**3. #6053 [CLOSED] 工具结果可经 metadata.images 携带图片**
新约定：`ToolResult.metadata["images"]` 存文件路径数组，引擎在回合循环中把可读、provider 接受的图片（PNG/JPEG/GIF/WebP，5 MB 上限）附给视觉模型。
🔗 Hmbown/Codewhale PR #6053

**4. #6100 [OPEN] web_search 新增 Serply 搜索提供商**
新增 `provider = "serply"`，走 `GET https://api.serply.io/v1/search`，密钥置于 `X-Api-Key` 头，参考 #2790 Sofya 适配器形态。
🔗 Hmbown/Codewhale PR #6100

**5. #6055 [OPEN] 子代理限流自适应启动调度**
针对共享 provider 下并发 429 常态化问题，把固定容量 Semaphore 启动闸门改为可随限流反馈收缩的自适应调度。
🔗 Hmbown/Codewhale PR #6055

**6. #6051 [CLOSED] 修复 Z.ai/BigModel 强制思考模型推理控制**
GLM-5.3 与 GLM-5.3-Flash 属强制思考模型，`thinking.type: "disabled"` 会被拒绝，现改为遵循 `enabled` + `reasoning_effort` 的官方迁移语义。
🔗 Hmbown/Codewhale PR #6051

**7. #6052 [CLOSED] 对齐面向模型的文档与工具门控**
五项审计修复，其中最关键是 finance 工具声明了 Network 能力却未查询 `context.network_policy`，导致 `network.default = "deny"` 会话仍可访问外部财务接口。
🔗 Hmbown/Codewhale PR #6052

**8. #6096 [OPEN] 在 TUI session-export 切片采用 capability shapes（FEAT-025）**
将 `/export`（别名 `/daochu`）改走可移植命令契约，属结构性迁移，无用户可见行为变化。跟踪 EPIC-006。
🔗 Hmbown/Codewhale PR #6096

**9. #6081 [CLOSED] 解释缺失的 Gemini thought signature**
修复 #6048：当兼容网关以 `missing a thought_signature` 拒绝 Gemini 工具调用重放时，提示用户改用内置 `google` provider 或可保留签名的网关。
🔗 Hmbown/Codewhale PR #6081

**10. #6057 [CLOSED] 安全依赖批量升级（2026-09-11）**
夜间安全清扫，解决全部 9 个 Dependabot 告警（均为 npm 开发/传递依赖，无 Cargo 告警），目标版本均发布于 7 天以上。
🔗 Hmbown/Codewhale PR #6057

> 依赖维护类 PR 密集（#6107 flate2、#6104 encoding_rs、#6106 lru、#6105 rustls、#6103 dirs 6→7、#6026/#6027 npm 组），另有 #6080 修复简体中文文档相对链接失效。

---

## 五、功能需求趋势

从本轮全部 Issues 提炼，社区关注方向集中在以下几类：

- **TUI 交互与控制体验（最高频）**：回合中控制契约（#5268）、会话 peek 与免附着审批（#5271）、焦点感知通知与回归摘要（#4402）、用户输入弹窗可用性（#6045）。终端交互的「可控感」是持续主线。
- **架构与代码组织重构**：EPIC-005 TUI Crate 拆分（#5316）、共享 modal 基础设施拆分（#3957）、setup 向导拆分（#3954）、JobManager/TaskManager 合并（#4167）、`DeepSeekClient` provider 中立化（#5103）。
- **多模型 / Provider 扩展**：用户自定义 `[[models]]` 配置段（#4168）、Gemini 思考签名（#6081）、GLM-5.3 强制思考控制（#6051）、新增 Serply 搜索提供商（#6100）。
- **工具能力扩展（类 IDE 能力）**：调试器协议面（#3981）、结构化代码搜索与 AST 编辑预览（#3980）、LSP rename 与 code actions（#3975）、Playwright 浏览器自动化（#3358）、notebook/归档读取（#3977）。
- **隐私与安全**：索引隐私控制 `.codewhaleignore`（#4069）、执行策略 deny 表达力（#6054）、网络策略门控修复（#6052）、共享设置与 keyring 令牌托管（#5226）。
- **持久化与记忆**：跨会话持久记忆（#6017）、持久化 plan 产物（#5269）、会话全保真归档（#6056）。
- **账号与限流韧性**：自动切换 profile 续跑（#855）、子代理限流自适应调度（#6055）。

---

## 六、开发者关注点

综合反馈，当前痛点与高频诉求如下：

1. **会话生命周期可靠性**：恢复中断会话直接 ENOENT（#6102），属于阻断核心流程的回归，社区期望优先修复。
2. **真实终端下的可用性**：弹窗裁剪、输入被隐藏、无滚动与返回导航（#6045），说明现有 UI 在非理想终端尺寸下缺乏韧性。
3. **沙箱与本地工具链冲突**：`swift test` 在沙箱内被拒（#2617），反映沙箱策略与开发者既有构建流程存在摩擦。
4. **安全门控的一致性**：工具声明能力却未实际查询策略（#6052）暴露门控实现与声明脱节，开发者对「声明即可信」的假设提出质疑。
5. **强制思考模型的处理**：GLM-5.3 等模型的推理控制语义特殊（#6051），多 provider 适配的边界条件仍需持续打磨。
6. **品牌与生态治理**：非官方 VS Code 扩展的版权问题（#2327）提示命名与市场治理需要机制化处理。
7. **依赖与安全卫生**：本轮大量依赖升级 PR 与安全清扫（#6057），表明项目处于活跃维护状态，但版本跨度（如 dirs 6→7）需关注破坏性变更。

---

*以上内容基于所提供 GitHub 数据整理，链接均指向对应 Issue/PR。*

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

# ComfyUI 社区动态日报 (2026-09-12)

## 🚀 今日速览
今日 ComfyUI 社区主要集中在**核心功能回归修复**、**新模型支持集成**以及**底层硬件兼容性调试**。最受关注的是工作流加载时节点值被重写的严重 Bug，以及 v0.35.0 版本后在特定显卡上出现的 BSOD 崩溃问题。此外，官方正在对 Marigold v2 和 Yu2 等新视频/音频模型进行快速适配。

---

## 📦 版本发布
*暂无过去 24 小时内的新版本发布*

---

## 🔥 社区热点 Issues (Top 10)

1. **[严重回归] 工作流加载时会重写节点值 (#13017)**
   - **描述**：这是一个极其严重的 Bug，在加载工作流时，Checkpoint/LoRA 等节点的值会被静默重写（有时重置为 0），破坏了 JSON 的完整性，导致工作流失效。
   - **状态**：OPEN (评论数：34)
   - [查看 Issue](https://github.com/comfyanonymous/ComfyUI/issues/13017)

2. **[硬件崩溃] RTX 3050 (6GB) 频繁触发系统蓝屏 (#16246)**
   - **描述**：更新至 v0.35.0 后，在使用 `comfy-aimdo` 动态显存加载模型时，RTX 3050 频繁出现 `dxgmms2.sys` 内核级 BSOD。
   - **状态**：OPEN
   - [查看 Issue](https://github.com/comfyanonymous/ComfyUI/issues/16246)

3. **[多实例冲突] 双实例并发加载大模型导致失败 (#16223)**
   - **描述**：当在两个 GPU 上同时运行两个 ComfyUI 实例时，显存较小的实例在加载权重时会报 `device copy failed` 错误。
   - **状态**：OPEN
   - [查看 Issue](https://github.com/comfyanonymous/ComfyUI/issues/16223)

4. **[模型 Bug] Trellis2 和 Pixal3D 生成空网格 (#16147)**
   - **描述**：Hunyuan 3D 2.0/2.1 等模型生成的网格是空的，无法进行 3D 打印。
   - **状态**：OPEN
   - [查看 Issue](https://github.com/comfyanonymous/ComfyUI/issues/16147)

5. **[架构兼容] RDNA4 架构下文本编码器输出损坏 (#16222)**
   - **描述**：在 AMD RDNA4 架构上，Comfy Compiler 导致 MiniMax-Music-3 的编码器输出静默损坏。
   - **状态**：OPEN
   - [查看 Issue](https://github.com/comfyanonymous/ComfyUI/issues/16222)

6. **[精度需求] 内置 Float 节点仅支持一位小数 (#13557)**
   - **描述**：用户反馈内置的 Float 节点精度太低，无法满足精细调优需求，建议至少支持到两位小数。
   - **状态**：OPEN
   - [查看 Issue](https://github.com/comfyanonymous/ComfyUI/issues/13557)

7. **[网络限制] 反向代理认证导致 403 错误 (#16203)**
   - **描述**：由于 `origin_only_middleware` 限制，通过 Cloudflare Access 或 Authelia 等反向代理访问时会触发 403。
   - **状态**：OPEN
   - [查看 Issue](https://github.com/comfyanonymous/ComfyUI/issues/16203)

8. **[功能 Bug] SeedVR2 缩放破坏批量处理图像 (#16129)**
   - **描述**：使用 SeedVR2 节点在处理图像批（Batch）时会出现逻辑异常。
   - **状态**：OPEN
   - [查看 Issue](https://github.com/comfyanonymous/ComfyUI/issues/16129)

9. **[功能请求] 子图(Subgraph) 外部参数传递 (#12971)**
   - **描述**：用户希望能够将一个子图的参数（Seed, CFG）传递给另一个子图。
   - **状态**：OPEN
   - [查看 Issue](https://github.com/comfyanonymous/ComfyUI/issues/12971)

10. **[精度问题] MiniMax-Music-3 在 fp16 下产生 NaN (#16249)**
    - **描述**：在 1151 配置下使用 fp16 会导致音频输出 NaN，切换到 fp32 后可解决。
    - **状态**：OPEN
    - [查看 Issue](https://github.com/comfyanonymous/ComfyUI/issues/16249)

---

## 🛠 重要 PR 进展 (Top 10)

1. **[特性] 集成 Marigold v2 (#16232)**
   - **内容**：由 kijai 提交，支持 Marigold v2 深度、法线和反光生成，并支持 Qwen-Image-Edit 的 LoRA。
   - [查看 PR](https://github.com/comfyanonymous/ComfyUI/pull/16232)

2. **[特性] 支持 Yu2 音乐模型 (#16250)**
   - **内容**：作者 comfyanonymous 亲自提交，支持最新的开源音乐模型 Yu2。
   - [查看 PR](https://github.com/comfyanonymous/ComfyUI/pull/16250)

3. **[优化] 资产系统结构化日志 (#16082)**
   - **内容**：为资产系统（Assets system）增加了机器可读的结构化日志，方便调试和监控。
   - [查看 PR](https://github.com/comfyanonymous/ComfyUI/pull/16082)

4. **[特性] SenseNova 思考与交替生成 (#16032)**
   - **内容**：完善 SenseNova 的集成，支持文本到图像以及多参考的生成模式。
   - [查看 PR](https://github.com/comfyanonymous/ComfyUI/pull/16032)

5. **[测试] 资产系统测试覆盖覆盖 (#16218)**
   - **内容**：修复了开启资产后未运行执行测试的问题，并增加了对列表输出节点的单元测试。
   - [查看 PR](https://github.com/comfyanonymous/ComfyUI/pull/16218)

6. **[修复] 资产系统数据库锁逻辑修复 (#16261)**
   - **内容**：修复了在开启资产功能时，只有数据库文件锁超时才会退出，避免了误杀。
   - [查看 PR](https://github.com/comfyanonymous/ComfyUI/pull/16261)

7. **[特性] MaskComposite 功能增强 (#15335)**
   - **内容**：为掩码复合节点增加了 max/min 操作以及显式阈值设置，解决了了位运算丢失精度的问题。
   - [查看 PR](https://github.com/comfyanonymous/ComfyUI/pull/15335)

8. **[重构] 资产记录与内容分离 (#15915)**
   - **内容**：将本地资产系统拆分为用户可见的记录（Asset）和底层数据（AssetContent），优化存储架构。
   - [查看 PR](https://github.com/comfyanonymous/ComfyUI/pull/15915)

9. **[修复] Concatenate 节点单元测试 (#16270)**
   - **内容**：针对视频合并节点修复了相关的单元测试用例。
   - [查看 PR](https://github.com/comfyanonymous/ComfyUI/pull/16270)

10. **[修复] Concatenate 节点单元测试完善 (#16271)**
    - **内容**：进一步完善了合并逻辑的测试用例覆盖。
    - [查看 PR](https://github.com/comfyanonymous/ComfyUI/pull/16271)

---

## 📈 功能需求趋势
*   **稳定性是首要优先级**：社区对工作流加载回归（Bug #13017）极度敏感，反映出核心用户对复杂工作流稳定性的要求极高。
*   **多模态模型快速爆发**：音频生成（Yu2, MiniMax-Music）和 3D 生成（Trellis2）成为新热点，社区急需原生支持这些复杂模型。
*   **硬件适配持续深化**：随着 RTX 50 系列和 RDNA4 硬件的出现，底层的显存管理（Dynamic VRAM）和跨平台兼容性成为开发者关注的焦点。
*   **精细化控制需求**：用户对基础节点（如 Float 节点）的精度要求更高，不再满足于默认设置。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama 社区动态日报 (2026-09-12)

## 🚀 今日速览
今日 Ollama 社区主要集中在 **Qwen 3.8 / Gemma 4 等新模型的兼容性调试**、**Tool Call（工具调用）解析逻辑优化**以及 **Ollama Cloud API 的性能稳定性**上。开发者反映多个模型在特定量化版本下存在 Tool Call 结果为空或解析失败的问题，同时社区合并了多项针对 Anthropic 兼容性接口的 Bug 修复。

---

## 📦 版本发布
* 过去 24 小时内无版本发布。

---

## 🔥 社区热点 Issues (Top 10)

1. **#17778 Qwen 3.8 流式输出返回 500 错误 (无用户查询)**
   - **描述**：用户在使用 Python API 调用 Qwen 3.8 时，模型在循环调用工具时会触发 `no user query found` 错误。
   - **关注点**：涉及新模型在复杂 Agent 场景下的逻辑 Bug，影响 API 开发者。
   - [查看 Issue](https://github.com/ollama/ollama/issue/17778)

2. **#18390 Gemma 4 Tool Call 键包含空格导致解析失败**
   - **描述**：Gemma 4 生成的 Tool Call 对象 Key 若包含空格，Ollama 解析器未正确加引号，导致 `content` 为空。
   - **关注点**：新模型 Gemma 4 的特定解析器兼容性问题。
   - [查看 Issue](https://github.com/ollama/ollama/issue/18390)

3. **#18252 Qwen2.5-Coder-3B 低比特量化版本损坏**
   - **描述**：官方提供的 q2_K 到 q3_K_L 等低比特量化版本在代码任务中通过率为 0%，虽然输出看似流畅但逻辑完全错误。
   - **关注点**：量化模型质量问题，急需官方重新生成 Artifact。
   - [查看 Issue](https://github.com/ollama/ollama/issue/18252)

4. **#17274 Tool Call 解析失败时静默丢弃输出**
   - **描述**：当工具调用的格式解析失败时，Ollama 会直接丢弃输出且不向用户反馈错误信息。
   - **关注点**：API 健壮性缺陷，开发者无法调试工具调用失败的原因。
   - [查看 Issue](https://github.com/ollama/ollama/issue/17274)

5. **#18381 Ollama Cloud 模型在运行 45 分钟后挂死**
   - **描述**：在 0.34.0 版本中，Cloud 端模型在持续 45 分钟后延迟持续激增并最终挂起（502）。
   - **关注点**：云端服务的稳定性回退（对比 0.33.1 正常）。
   - [查看 Issue](https://github.com/ollama/ollama/issue/18381)

6. **#18373 模型加载性能严重回退**
   - **描述**：用户从 0.23.4 升级到 0.30.0 后，加载 120B 大模型的时间从 61s 增加到 116s。
   - **关注点**：核心性能回退，影响大模型部署效率。
   - [查看 Issue](https://github.com/ollama/ollama/issue/18373)

7. **#18346 Anthropic 兼容接口下复杂 Tool Schema 变为文本输出**
   - **描述**：在 Claude Code 使用 Ollama 作为后端时，复杂的 Schema 会导致模型输出字面文本而非结构化的 `tool_use` 块。
   - **关注点**：跨框架接口兼容性的深度适配问题。
   - [查看 Issue](https://github.com/ollama/ollama/issue/18346)

8. **#18297 Qwen3.8-27B IQ3_S 量化版本返回为空**
   - **描述**：使用 IQ3_S 量化版本时，模型能完成生成但 `content` 字段始终为空字符串。
   - **关注点**：特定量化格式的兼容性 Bug。
   - [查看 Issue](https://github.com/ollama/ollama/issue/18297)

9. **#12478 改进 install.sh 脚本的网络鲁棒性**
   - **描述**：用户在不稳定网络下通过脚本安装模型时频繁遇到 "max retries exceeded" 或 TLS 错误。
   - **关注点**：开发者体验与安装流程优化。
   - [查看 Issue](https://github.com/ollama/ollama/issue/12478)

10. **#796 请求支持 ppc64le (IBM POWER)**
    - **描述**：希望在 IBM POWER8NVL 架构上运行 Ollama，但目前安装脚本不支持架构。
    - **关注点**：特定硬件架构的扩展支持。
    - [查看 Issue](https://github.com/ollama/ollama/issue/796)

---

## 🛠 重要 PR 进展 (Top 10)

1. **#18393 移除 CLI 内置 Agent 界面**
   - **内容**：将 CLI 交互界面回退旧版本，以保持工具简洁。
   - [查看 PR](https://github.com/ollama/ollama/pull/18393)

2. **#18376 强制 Gemma3n Projector 不在 CPU 上运行**
   - **内容**：修复了 Gemma3n 在 CPU 后端会产生损坏图像嵌入导致描述完全错误的问题。
   - [查看 PR](https://github.com/ollama/ollama/pull/18376)

3. **#18386 修复 Windows 卸载后未移除环境变量**
   - **内容**：修复了卸载 Ollama 后用户 PATH 中仍残留无效路径项的问题。
   - [查看 PR](https://github.com/ollama/ollama/pull/18386)

4. **#17400 修复文档中 ollama create 缺失模型名称**
   - **内容**：在 CLI `ollama create -f Modelfile` 示例中添加了必要的模型占位置参数。
   - [查看 PR](https://github.com/ollama/ollama/pull/17400)

5. **#17087 修复环境变量布尔值解析错误**
   - **内容**：当 `OLLAMA_GO_TEMPLATE` 被赋予无效值时，系统错误默认为 `true` 而非配置的默认值。
   - [查看 PR](https://github.com/ollama/ollama/pull/17087)

6. **#17528 修复 App 加载时的侧边栏动画**
   - **内容**：解决了应用启动时侧边栏宽度过渡动画导致的视觉闪烁。
   - [查看 PR](https://github.com/ollama/ollama/pull/17528)

7. **#18391 模板中函数和参数的 JSON 渲染**
   - **内容**：修复了 Go 模板中工具定义被渲染为普通字符串而非 JSON 格式的问题。
   - [查看 PR](https://github.com/ollama/ollama/pull/18391)

8. **#18377 在文档中添加 ChatGPT 集成说明**
   - **内容**：完善社区文档，增加桌面端集成的配置指南。
   - [查看 PR](https://github.com/ollama/ollama/pull/18377)

9. **#18395 在基础设施与部署文档中加入 marbor**
   - **内容**：将 Go 负载均衡工具 marbor 引入社区集成列表。
   - [查看 PR](https://github.com/ollama/ollama/pull/18395)

10. **#16590 准备移除 Manifest List 兼容性补丁**
    - **内容**：为支持原生的 Manifest List 做准备，允许不同架构的镜像在同一标签下共存。
    - [查看 PR](https://github.com/ollama/ollama/pull/16590)

---

## 📈 功能需求趋势
*   **Tool Call 稳定性成为核心优先级**：社区大量反馈集中在不同模型（Qwen 3.8, Gemma 4）返回工具调用时的解析异常，开发者需要更健壮的 JSON 校验和错误反馈机制。
*   **API 兼容性深度适配**：随着 Claude Code 等工具的流行，社区对 Ollama 作为 Anthropic 兼容接口的细粒度支持（如复杂 Schema 的处理）关注度极高。
*   **量化质量监控**：用户对低比特（Q2/Q3）量化模型的逻辑正确性非常敏感，要求官方对内置的 Artifacts 进行更严格的回归测试。
*   **云端性能优化**：Ollama Cloud 的使用频率增加，用户对长连接超时和延迟激增问题高度关注。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

# llama.cpp 社区动态日报（2026-09-12）

> 数据来源：github.com/ggerganov/llama.cpp

---

## 1. 今日速览

今日社区活跃度极高，24 小时内密集合并了 **b10901–b10917 共 9 个版本**，主线集中在 **Metal 后端融合优化**、**CUDA/HIP Flash Attention 调优** 以及 **MSVC PCH 构建修复**。Issue 侧，磁盘级 KV 缓存卸载（`--cache-disk`）与模型缓存管理工具成为呼声最高的功能需求；PR 侧则聚焦于**多后端性能修复**（Blackwell sm_120、Intel Vulkan、SYCL）与 **server 端能力增强**（系统提示词、投机解码重构）。

---

## 2. 版本发布

过去 24 小时共发布 9 个构建版本（b10901–b10917），按模块归类：

**构建系统**
- **b10917**：修复 MSVC 下 `llama-server` 的 PCH（预编译头）问题，解决 #28091 引入的回归（关联 Issue #28758 的 Windows 链接失败）。
  https://github.com/ggml-org/llama.cpp/releases

**Metal 后端**
- **b10909**：将可融合算子模式重构为**单一 fusion table**（`ggml-metal-fuse.cpp`），由图优化器与运行时共同消费，并重做 fusion 调试流程。
- **b10908**：修复 `ne00 < 1024` 时其余 IQ `mul_mv` 内核的空闲线程问题，将 #28086 的行切分策略推广至 iq1_s/iq1_m 等 6 个内核。

**模型与推理正确性**
- **b10907**：修复 deepseek2、glm4moe、cohere2moe 等架构的 **MTP 上下文 KV cache 分配**，并新增反向架构门控与全面的架构测试。
- **b10906**：修复图像输入后的投机解码——向 drafter 传递真实位置而非 token 计数，影响所有 drafter。

**GPU 后端**
- **b10905**：CUDA/HIP Flash Attention 调优（gfx1201），启用 RDNA4 head size 256 的 MMA FA，AMD WMMA 上优先整块 tile。
- **b10903**：修复 Vulkan `argsort(large)` 的数据竞争与越界访问。
- **b10902**：OpenCL 新增 **A8 Q4_0 mm 二进制内核**支持。
- **b10901**：Vulkan 在 context 空闲时使用 CPU 写入 `ggml_backend_vk_cpy_tensor_async`。

---

## 3. 社区热点 Issues

1. **#20697 [enhancement] 磁盘级上下文检查点卸载（`--cache-disk`）**
   19 条评论、**48 👍**，为今日点赞最高。长上下文场景下 KV 缓存落盘可显著降低显存压力，是当前最受期待的性能特性。
   https://github.com/ggml-org/llama.cpp/issues/20697

2. **#16393 [enhancement] 列出并删除缓存模型的工具**
   27 条评论、21 👍，长期 stale 但热度不减。反映用户对模型缓存生命周期的管理需求日益迫切。
   https://github.com/ggml-org/llama.cpp/issues/16393

3. **#26208 [bug] ROCm 7.14 在 gfx1201 上无法分配 VRAM**（已关闭）
   18 条评论，涉及 AMD RDNA4 新硬件与新驱动栈的兼容问题，对 gfx1201 用户影响面大。
   https://github.com/ggml-org/llama.cpp/issues/26208

4. **#23704 [enhancement] Router 模式下同一模型多预设（仅加载一次）**
   17 条评论。多租户/多用途 server 部署的刚需，可避免重复占用显存。
   https://github.com/ggml-org/llama.cpp/issues/23704

5. **#24616 [enhancement] CUDA 上通过 dp2a 模拟 dp4a**
   15 条评论。面向老架构 GPU 的量化加速兼容方案，影响面偏底层但价值明确。
   https://github.com/ggml-org/llama.cpp/issues/24616

6. **#24132 [bug] gemma-4-E4B 触发 `GGML_SCHED_MAX_SPLIT_INPUTS` 断言失败**
   13 条评论，CUDA/V100 环境崩溃。属于调度器输入上限的硬性约束问题，可能影响其他大模型。
   https://github.com/ggml-org/llama.cpp/issues/24132

7. **#23769 [bug] Intel B70 Vulkan 上 MoE 模型崩溃**
   11 条评论，涉及 Qwen3.6-35B-A3B(-MTP)。Intel Arc 专业卡 + Vulkan 的稳定性问题持续存在。
   https://github.com/ggml-org/llama.cpp/issues/23769

8. **#22531 [enhancement] 让 Web UI 支持其他后端**
   10 条评论、11 👍。当前 Web UI 与内置后端强绑定，社区希望解耦以对接远程/第三方推理服务。
   https://github.com/ggml-org/llama.cpp/issues/22531

9. **#27922 [enhancement] 支持 GLM5.3（flash）**
   15 👍，新模型支持请求的代表。反映社区对新发布模型的跟进速度期待很高。
   https://github.com/ggml-org/llama.cpp/issues/27922

10. **#28633 [bug] CUDA 应将 `GGML_CUDA_FA_ALL_QUANTS=ON` 设为默认**
    4 条评论但问题尖锐：4-bit KV 缓存下 **静默回退 CPU**，prefill 慢约 30 倍且无任何警告。属于典型的"隐性性能陷阱"。
    https://github.com/ggml-org/llama.cpp/issues/28633

**其他值得留意**：#27852（ngram-cache 投机解码跨请求缓存污染，接受率 86%→11%）、#28752（Vulkan RDNA3 在 b10780 后 prompt 处理速度骤降）、#28772（继续模块化模型代码）、#28660（SYCL 内存池 LIFO 顺序被 oneDNN scratchpad 破坏）。

---

## 4. 重要 PR 进展

1. **#28053 [server] 为 llama-server 添加系统提示词（`-sysf`）**
   支持从文件加载 system prompt，与 `llama-cli` 对齐。
   https://github.com/ggml-org/llama.cpp/pull/28053

2. **#28736 [server] 实现 `common_schema` JSON Schema 内部表示**
   重构 JSON schema 逻辑，统一供 `json-schema-to-grammar` 使用，清理 `common_schema_info` 等临时方案。
   https://github.com/ggml-org/llama.cpp/pull/28736

3. **#28784 [CUDA] 修复 Blackwell（sm_120）上 IQ1_S/IQ2_S/IQ3_S 输出乱码**
   定位到 nvcc 13.2 对打包量化字字节读取的误编译，属关键正确性修复。
   https://github.com/ggml-org/llama.cpp/pull/28784

4. **#28785 [ggml] 无 CPU 工作的图跳过线程池**
   在纯 GPU 卸载场景下避免创建/唤醒 worker，并同步调用线程的优先级与亲和性。
   https://github.com/ggml-org/llama.cpp/pull/28785

5. **#27694 [server] 使 drafter 概率化，目标模型用拒绝采样验证**
   改造 simple draft 与 MTP：不再丢弃采样结果取 top-1，而是保留 draft 分布做拒绝采样，理论上可提升接受率。
   https://github.com/ggml-org/llama.cpp/pull/27694

6. **#28555 [server] 重构子进程处理**
   将子 server 管理改为单线程处理（IO 密集），减少线程开销，呼应 #28539 的讨论。
   https://github.com/ggml-org/llama.cpp/pull/28555

7. **#27986 [ggml-cpu] 新增镜像 NUMA 策略（各节点复制权重）**
   稳态下 decode 吞吐可匹配 `--numa distribute`，为多路 CPU 部署提供新选择。
   https://github.com/ggml-org/llama.cpp/pull/27986

8. **#27000 [model] 新增 Maple 20B-A1B 三元 MoE 架构（CPU）**
   DeepGrove 的三元权重 MoE（24 层、256 专家、8 激活、TQ1_0/TQ2_0），拓展低比特 MoE 支持。
   https://github.com/ggml-org/llama.cpp/pull/27000

9. **#28782 [CUDA] buffer-init padding memset 改用每线程 stream**
   避免 legacy stream 与并行 HIP graph capture 冲突导致失败。
   https://github.com/ggml-org/llama.cpp/pull/28782

10. **#28780 [Vulkan] Intel 上使用 32 行 coopmat2 Flash Attention tile**
    将 Br 限制为 32 以避免寄存器溢出（原 64 行在 HSK=HSV=128 时过大）。
    https://github.com/ggml-org/llama.cpp/pull/28780

**其他值得关注**：#28742（Qwen3-Coder 复杂类型解析改进）、#28683（WebGPU 升级 Dawn）、#26103（ARM 变体编译探测跳过不支持 ISA）、#27841（AMD GCN MMQ 配置补齐）、#28751（切换 causal_attn 时不再重 reserve 调度器）。

---

## 5. 功能需求趋势

从全部 Issues 与 PR 中可提炼出以下社区关注方向：

- **显存与缓存管理**：`--cache-disk` 磁盘卸载（#20697）、模型缓存清理工具（#16393）热度最高，说明长上下文与多模型场景下显存/磁盘管理是核心痛点。
- **多后端稳定性与性能**：Vulkan（Intel B70、RDNA3）、SYCL、ROCm、CUDA 相关 Issue 占比极高，新硬件（gfx1201、sm_120、Blackwell）适配是持续战场。
- **服务端部署能力**：Router 多预设（#23704）、系统提示词（#28053）、投机解码重构（#27694）、子进程管理（#28555）——llama-server 正从"demo 工具"走向生产级服务。
- **新模型跟进**：GLM5.3、Qwen3.8、Qwen3-Coder、Maple 三元 MoE 等，社区对新架构/新模型的适配速度要求很高。
- **量化与低比特推理**：CUDA FA quants 默认值、dp4a 模拟、ARM i8mm GEMM（#27276）、TQ1_0/TQ2_0 等，量化仍是性能与兼容性的交汇点。
- **CPU/NUMA 优化**：镜像 NUMA 策略、无 CPU 工作跳过线程池、ARM ISA 变体探测，说明纯 CPU 与多路服务器场景仍有稳定需求。

---

## 6. 开发者关注点

综合开发者反馈，当前高频痛点集中在以下几类：

1. **静默性能回退难以诊断**
   #28633 明确指出 4-bit KV 下 CUDA 无警告回退 CPU、慢 30 倍；#28752 报告 b10780 后 Vulkan RDNA3 prompt 处理骤降。开发者需要**显式的回退警告与性能回归检测**。

2. **新硬件/新驱动兼容性**
   ROCm 7.14 + gfx1201 显存分配失败（#26208）、Blackwell sm_120 量化内核误编译（#28784）、Intel B70 Vulkan 校验错误（#28590）与 MoE 崩溃（#23769）——硬件迭代速度快于适配速度。

3. **构建系统回归**
   #28758（MSVC PCH + `WINDOWS_EXPORT_ALL_SYMBOLS` 链接失败）、#28491（`BUILD_SHARED_LIBS=OFF` 时 ggml-rpc 静态库未链接）说明近期构建改动引入的回归需快速跟进。

4. **投机解码的正确性与效率**
   #27852（ngram-cache 跨请求缓存污染导致接受率暴跌）、#27694（重构为概率化 draft + 拒绝采样）、b10906（图像后位置传递错误）——投机解码正被系统性重构，相关 bug 值得关注。

5. **断言与调度器约束**
   #24132 的 `GGML_SCHED_MAX_SPLIT_INPUTS` 断言、#28779 的零除数 SIGFPE，反映出**边界条件与鲁棒性处理**仍需加强。

6. **可访问性与 UI 细节**
   #24701（屏幕阅读器无法删除会话）、#26321（Reasoning 按钮消失）、#24680（上传图片宽度未约束）——Web UI 的可用性问题虽小但持续被反馈。

---

*以上内容基于所提供的 GitHub 数据整理，日期标注为 2026-09-12。*

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*