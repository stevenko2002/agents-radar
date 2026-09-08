# AI CLI 工具社区动态日报 2026-09-09

> 生成时间: 2026-09-08 22:15 UTC | 覆盖工具: 12 个

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

# llama.cpp 社区动态日报（2026-09-09）

## 今日速览

- 官方发布 10 个版本（从 b10853 到 b10867），重点在于 **Vulkan 后端优化**、**iGPU 默认行为修正**以及 **MTP（Multi-Token Prediction）支持**。
- 社区焦点集中在 **Vulkan 后端的稳定性**、**iGPU 显存回收策略**以及 **Qwen3.8 模型的兼容性**。
- 修复了 Qwen3 系列在 Vulkan 上的 `maxComputeGroupCount` 断言错误，并关闭了部分 AMD RDNA3.5 架构的编译问题。

## 版本发布

**b10867**（过去 24 小时）
- **新增：** iGPU 默认禁用 `lazy tensor loading`，修复了内存溢出（#28326）。
- **修复：** HIP 架构中 `prop_fusion` 兼容性问题（#28604）。
- **优化：** `context_swap` 策略，允许长上下文切换（#28500）。
- **修复：** Jinja 模板中 `reasoning` 为空时的解析错误（#28620）。

🔗 链接：https://github.com/ggml-org/llama.cpp/releases/tag/b10867

## 社区热点 Issues (Top 5)

1. **Vulkan 在 Intel Arc A770 上触发 maxComputeGroupCount 断言**（#28247，12 评论）
   - 用户在运行 Qwen3.8 flash-next 时，由于计算组数量超过了驱动限制，导致模型无法加载。
   🔗 https://github.com/ggml-org/llama.cpp/issues/28247

2. **Qwen3.8-27B Q6_K 在 RTX 5090 上触发整卡 GSP 复位**（#27910，10 评论）
   - 在最新的 Blackwell 架构显上运行特定量化模型会导致驱动固件层重启，表现为黑屏。
   🔗 https://github.com/ggml-org/llama.cpp/issues/27910

3. **MTP 跨请求保留状态导致 Qwen3.6-35B-A3B-MTP 输出非确定/退化**（#26425，8 评论）
   - MTP 模块的缓存隔离不完善，导致连续请求之间模型逻辑出现混乱或质量下降。
   🔗 https://github.com/ggml-org/llama.cpp/issues/26425

4. **Vega 8 iGPU 在 ~50K context 时 Vulkan 报 ErrorLost**（#26447，12 评论）
   - 在 Linux UMA 架构下，长上下文推理会导致显存回收策略不当，触发设备丢失错误。
   🔗 https://github.com/ggml-org/llama.cpp/issues/26447

5. **支持 XDNA 后端（Feature Request）**（#21725，32 赞）
   - 社区强烈呼声为 Ryzen AI NPU (XDNA) 提供原生支持，以提升本地 AI 执行效率。
   🔗 https://github.com/ggml-org/llama.cpp/issues/21725

## 重要 PR 进展 (Top 3)

- **#27861: GPU-resident LRU cache for host-offloaded MoE weights**（已合并）
  - 针对 MoE 模型，通过在 GPU 侧维护 LRU 缓存，缓解了频繁交换权重导致的带宽瓶颈。
  🔗 链接：https://github.com/ggml-org/llama.cpp/pull/27861

- **#28414: --prefetch-slots for lookahead N tokens**（进行中）
  - 允许在解码前预取 N 个 token 对应的专家权重到 GPU，旨在提升大型 MoE 模型的推理速度。
  🔗 链接：https://github.com/ggml-org/llama.cpp/pull/28414

- **#28362: Enable Windows64 build with MSVC cl.exe**（进行中）
  - 允许 Windows on ARM 用户使用 MSVC (cl.exe) 进行原生编译，无需安装 Clang，降低开发门槛。
  🔗 链接：https://github.com/ggml-org/llama.cpp/pull/28362

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

你好！我是 Claude Code 生态技术分析师。基于截至 2026-09-09 的 `anthropics/skills` 官方仓库数据，我为你整理了这份社区动态分析报告。

---

# 🚀 Claude Code Skills 社区动态分析报告 (2026-09-09)

目前 Claude Code Skills 生态正处于从“基础功能实现”向“工程级可靠性与复杂工作流”转型的关键期。社区不再满足于 Claude 能做什么，而是开始关注**执行的准确性、安全性以及跨环境的兼容性**。

## 1. 热门 Skills 排行 (Top PRs)

| PR 编号 | Skill 名称 | 社区讨论热点 | 状态 | 链接 |
| :--- | :--- | :--- | :--- | :--- |
| **#1298** | `skill-creator fix` | **核心修复**：解决 `run_eval.py` 始终报告 0% 召回率的问题，这导致描述优化循环失效。同时修复了 Windows 流读取和并行线程 Bug。 | OPEN | [Link](https://github.com/anthropics/skills/PR/1298) |
| **#1615** | `scnet-hpc` | **高性能计算**：允许 Claude 操作 SCNet HPC 集群，支持 Slurm 工作流、Profile 配置及硬件加速器引导，是科研场景的刚需。 | OPEN | [Link](https://github.com/anthropics/skills/PR/1615) |
| **#1628** | `Hivemind` | **多代理编排**：极具创意的想法——让 Claude Code 将机械性任务委托给 `opencode` 的免费模型节点，自己仅担任规划者和评审员。 | OPEN | [Link](https://github.com/anthropics/skills/PR/1628) |
| **#1627** | `buffer-api` | **社交自动化**：通过 Buffer GraphQL API，让任何 AI Agent（Claude, Cursor 等）都能调度和分析社交帖子。 | OPEN | [Link](https://github.com/anthropics/skills/PR/1627) |
| **#723** | `testing-patterns` | **工程化测试**：提供全测试栈指南，涵盖 AAA 模式、React 组件测试及单元测试，旨在提升 AI 生成代码的质量。 | OPEN | [Link](https://github.com/anthropics/skills/PR/723) |
| **#514** | `document-typography` | **排版细节**：解决 AI 生成文档时的“孤字”、“孤行”及编号未对齐等细微但致命的问题，提升文档专业度。 | OPEN | [Link](https://github.com/anthropics/skills/PR/514) |

## 2. 社区需求趋势

通过对 Issues 的深度挖掘，社区关注点正集中在以下三个维度：

*   **防御性 AI 与质量审计 (Defensive AI)**：
    社区频繁提到“自审计（Self-audit）”（如 #1385, #1367）。用户希望 Claude 在交付结果前先进行“机械化验证（Mechanical Verification）”和“多维度逻辑审计”，以防止幻觉或低级代码级错误。
*   **跨平台环境一致性 (Cross-platform Reliability)**：
    大量开发者反馈在 Windows 环境下 `run_eval.py` 崩溃或路径处理失效（如 #1099, #1050）。这表明 Skills 的工具链在非 Unix 环境下的健壮性亟需加固。
*   **企业级协作能力 (Enterprise Collaboration)**：
    Issue #228 反映了企业对“组织内技能共享”的迫切需求。目前手动下载/上传 Skill 效率极低，社区期待一个原生的 Skill 库或直接分享链接。

## 3. 高潜力待合并 Skills (High Potential)

以下 PR 社区讨论热度高且解决了具体痛点，预计将快速落地：

1.  **`skill-quality-analyzer` (#83)**：一个元技能（Meta Skill），用于从结构、文档、示例五个维度评估其他 Skill 的质量。这是生态自我治理的关键工具。
2.  **`compact-memory` (#1329)**：针对长运行任务，通过符号化表示（Symbolic Notation）压缩 Agent 状态，解决 Token 窗口消耗过快的问题。
3.  **`odt` skill (#486)**：对 OpenDocument Format (ODT/ODS) 的支持，填补了 AI 在开源/ISO 标准格式文档处理上的空白。

## 4. Skills 生态洞察

> **“Claude Code 社区正在从‘让 AI 连接’进化为‘让 AI 可靠地执行’。”** 
> 现在的开发者不再满足于简单的 API 封装，而是试图通过构建复杂的**评估算力（Eval Harnesses）**、**多代理协作模式（Multi-agent Orchestration）**以及**深度的垂直领域技能（如 HPC 集群管理、精细化排版）**，来构建一个真正可生产级的 AI 开发者环境。

---

# Claude Code 社区动态日报（2026-09-09）

## 今日速览

- 官方发布 v2.1.265，带来插件目录（`--plugin-dir` 指向整个文件夹）加载能力及桌面端/网页端遥测字段扩展。
- 仓库内大量历史 Issue 被集中标记为 stale 并关闭（多为 8 月创建、9-08 更新），疑似一次大规模生命周期清理；对应 PR #63686 正是要把 stale/自动关闭时限从 14 天放宽到 90 天。
- 社区焦点集中在「安全过滤器误报导致的模型降级」「OAuth/GitHub 凭据被意外清除」「模型选择与用量归属不准确」三类问题上。

## 版本发布

**v2.1.265**（过去 24 小时）
- 新增 `user.email`、`user.groups` 字段至 Claude Desktop / Cowork 经 Claude apps 网关发送的遥测数据，与终端会话保持一致。
- 支持将 `--plugin-dir` 指向一个插件文件夹：其中每个带 manifest 的子文件夹都会被加载，且新增/移除的子插件可被动态感知。

> 链接：https://github.com/anthropics/claude-code/releases （v2.1.265）

## 社区热点 Issues

> 说明：本期绝大多数 Issue 已被标记 stale 并关闭，以下按评论数及影响面选取 10 条。

1. **云端会话隔夜丢失 GitHub 连接，仓库读取 403**（#72933，8 评论）
   网页云会话/定时任务原本可通过 `GH_TOKEN` 读取私有仓库，次日却统一报 403，并提示需要安装 GitHub App，与文档矛盾。
   🔗 https://github.com/anthropics/claude-code/issues/72933

2. **误报「用户中断工具调用」：无中断却返回该字符串**（#78915，4 评论）
   macOS CLI v2.1.212 前台任务派发时出现本应只在用户打断时才有的提示，与 #78255 等相关问题疑似同源。
   🔗 https://github.com/anthropics/claude-code/issues/78915

3. **OAuth Token 在过期前被提前清除，被迫重新认证**（#83464，4 评论）
   Token 未到 `refreshTokenExpiresAt` 却被清空，认证状态无端失效。
   🔗 https://github.com/anthropics/claude-code/issues/83464

4. **`/model` 选择无法跨重启保持默认**（#80614，3 评论）
   界面提示「已保存为默认模型」，但退出重启后又回退到另一个 Sonnet 变体。
   🔗 https://github.com/anthropics/claude-code/issues/80614

5. **含特殊字符的文件名处理异常**（#83517，3 评论）
   ✨ 文件名含特殊字符时行为不符合预期。
   🔗 https://github.com/anthropics/claude-code/issues/83517

6. **移动端推送通知约 50% 被静默丢弃**（#82374，3 评论）
   客户端无任何信号提示，通知丢失不可感知。
   🔗 https://github.com/anthropics/claude-code/issues/82374

7. **用量面板把 Opus 5 消耗错误归属到 Fable 5**（#84359，1 评论）
   用量统计归属不准确，影响用户配额判断。
   🔗 https://github.com/anthropics/claude-code/issues/84359

8. **GitHub MCP/CLI 操作后 Pro 配额被持续消耗**（#84360，1 评论）
   操作完成后后台仍持续扣减 Pro 用量配额。
   🔗 https://github.com/anthropics/claude-code/issues/84360

9. **Agent 配置更新后丧失自我审批权限**（#84133，1 评论）
   配置「所有 Agent 可自主审批」后，反而有 2 个 Agent 无法再自我审批。
   🔗 https://github.com/anthropics/claude-code/issues/84133

10. **安全过滤器误伤正常 UI 改动，强制模型降级**（#84342，1 评论）
    仅请求调整侧边栏菜单结构，却被从 Fable 5 误降级至 Opus 5，属典型误报。
    🔗 https://github.com/anthropics/claude-code/issues/84342

## 重要 PR 进展

> 说明：过去 24 小时数据内仅有 1 条 PR，特此如实呈现；暂无其他新增合并请求。

- **将 stale 与自动关闭时限从 14 天放宽至 90 天**（#63686，已关闭）
  修改 `scripts/issue-lifecycle.ts`：stale 标记及后续关闭、autoclose 的超时均由 14 天延长至 90 天，缓解维护节奏与实际反馈周期不匹配的问题。这也解释了今日大批更早 Issue 被集中清理的背景。
  🔗 https://github.com/anthropics/claude-code/pull/63686

## 功能需求趋势

从近期 Issues 中可提炼出社区最关注的 5 个方向：

1. **认证与凭据生命周期管理**：OAuth Token 提前失效、GitHub App/账号连接在云端会话中丢失、跨会话凭据不持久（#72933、#83464）。
2. **模型选择与配额准确性**：`/model` 默认值不能持久化、用量面板模型归属错乱、误触发安全策略导致的模型降级（#80614、#84359、#84342）。
3. **安全/信任策略的「可解释性」**：任务被 T&S/安全过滤标记却看不到违规原因，误报集中在合理开发场景（#84372、#84361）。
4. **MCP 与外部工具连通性**：Chrome 扩展工具中途「未连接」、AS metadata 发现崩溃、GitHub MCP 操作引发配额异常（#83518、#84123、#84360）。
5. **生态集成与扩展能力**：`--plugin-dir` 文件夹式插件加载为新版本亮点，配套的 VSCode/桌面端交互（拖拽上传失效）及移动端推送稳定性的呼声也较高（#83397、#82374）。

## 开发者关注点

- **安全过滤器误报率高**：多起「合法白帽/业务开发/防御性工具」被标记并从 Fable 5 / Opus 5 降级到 Opus 4.8，且不提供违规原因，开发者抱怨「无法自证清白」（#84340、#84344、#84361、#84372）。
- **凭据与配额「幽灵消耗」**：认证被莫名重置、Pro/用量配额在正常操作后被持续扣除，影响信任与成本控制（#83464、#84360、#72933）。
- **配置「说了不算」**：模型默认值、Agent 自我审批等配置在重启或更新后失效/回退（#80614、#84133）。
- **回复质量波动**：存在截断为 1-2 行、审计时「臆测而非验证」、子代理枚举不全（41 个只识别 4 个）等反馈（#84120、#84127、#84118）。
- **高频环境问题**：Windows MSIX 应用内浏览器崩溃导致包损坏且修复失败、特殊字符文件名、VSCode 拖拽上传失效等平台细节（#83473、#83517、#83397）。

*以上数据均来源于 anthropics/claude-code 仓库，统计时间截至 2026-09-09。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-09-09**

---

## 📌 今日速览

今日 Codex 社区焦点集中在 **桌面端稳定性** 与 **Computer Use 功能可靠性**：macOS 上 `syspolicyd`/`trustd` 资源泄漏及 `SkyComputerUseService` 进程风暴问题持续发酵，Windows + WSL 环境下的项目创建故障仍有多条相关 Issue 跟进。同时，CLI 端发布了 `rust-v0.154.0-alpha.7` 预发布版本，工程团队集中推进了 Shell 快照保护、模型目录缓存作用域隔离以及 TUI 流式推理摘要等基础设施改进。

---

## 🚀 版本发布

- **[rust-v0.154.0-alpha.7](https://github.com/openai/codex/releases)**：CLI 端 Rust 实现的 alpha 预发布版本更新，常规迭代，无重大变更说明。建议关注后续正式版以确认 API 兼容性。

---

## 🔥 社区热点 Issues（Top 10）

1. **[#25719](https://github.com/openai/codex/issues/25719)** — macOS Codex Desktop 反复触发 `syspolicyd`/`trustd`，导致 CPU 与内存失控
   - 评论 89 条，👍 396，是当前热度最高的 bug。多个 macOS 用户反馈 Codex Desktop 后台进程泄漏，已影响生产使用。

2. **[#8745](https://github.com/openai/codex/issues/8745)** — Codex CLI 内置 LSP 集成（自动检测 + 自动安装）
   - 评论 64 条，👍 481，社区呼声长期居首。开发者期望 CLI 像现代 IDE 一样具备 LSP 诊断与符号感知能力。

3. **[#41290](https://github.com/openai/codex/issues/41290)** — [Windows][WSL] 切换 Agent 环境至 WSL 后项目创建/删除失败
   - 评论 46 条，ChatGPT Pro 用户反映 WSL 工作流回归。

4. **[#41463](https://github.com/openai/codex/issues/41463)** — [Windows + WSL] 无法创建项目，`AbsolutePathBuf` 反序列化缺失 base path
   - 评论 42 条，与 #41290 同源问题，根因疑似 Windows app-server 路径序列化错误。

5. **[#38455](https://github.com/openai/codex/issues/38455)** — ChatGPT Desktop 26.810.41047 在 macOS 上反复启动 Computer Use worker，触发 V8 OOM 崩溃
   - 评论 41 条，SIGABRT 崩溃线程达 316 条，其中 187 条为 Computer Use 相关，回归严重。

6. **[#4106](https://github.com/openai/codex/issues/4106)** — 自动压缩（auto-compaction）参数可配置化
   - 评论 25 条，👍 112，Pro 用户长期诉求：硬编码的 ~220k 阈值破坏长会话上下文，需要 OFF 开关。

7. **[#26562](https://github.com/openai/codex/issues/26562)** — Windows 端 Codex Desktop 缺少 Computer Use 插件
   - 评论 21 条，平台功能对齐需求，Windows 用户与 macOS 存在明显能力差距。

8. **[#40575](https://github.com/openai/codex/issues/40575)** — RFC：自演化代理 `/learn` 与 `AGENTS.md` 规则代谢
   - 评论 19 条，提出交互式指令蒸馏机制，面向多周复杂工程任务。

9. **[#42902](https://github.com/openai/codex/issues/42902)** — macOS：Computer History 状态轮询每 10 分钟唤醒睡眠显示器
   - 评论 14 条，电源管理与体验问题，影响 MacBook 续航。

10. **[#38760](https://github.com/openai/codex/issues/38760)** — Computer Use spawn storm 耗尽 `launchservicesd`，在 macOS 26.5 上触发 WindowServer 内核看门狗
    - 评论 14 条，`SkyComputerUseService` 以 5-8 个/秒的速率被派生，最终导致内核级崩溃。

---

## 🛠 重要 PR 进展（Top 10）

1. **[#43930](https://github.com/openai/codex/pull/43930)** — Windows 沙箱：避免为不相关的代理端口变更触发设置
   - 当本地绑定启用时，Windows 沙箱不再为代理监听器差异升级防火墙规则，减少不必要的提权操作。

2. **[#43927](https://github.com/openai/codex/pull/43927)** — 状态数据库中将 `thread_artifacts` 重命名为 `thread_attachments`
   - 数据库迁移同步更新列名与索引，命名更准确地反映语义。

3. **[#43925](https://github.com/openai/codex/pull/43925)** — 为原生用户验证 RPC 增加取消机制
   - 防止取消的证明在校验结果排队等待时被意外提交。

4. **[#43921](https://github.com/openai/codex/pull/43921)** — TUI 状态栏显示流式推理摘要
   - 状态标题跟随最新可用推理行更新，并支持工具活动期间的占位与恢复。

5. **[#43918](https://github.com/openai/codex/pull/43918)** — 在 `CodexThread` 上暴露 `queued_event_count()`
   - 支持在移交 receiver 之前进行有限事件排空，便于跨线程事件控制。

6. **[#43915](https://github.com/openai/codex/pull/43915)** — 移除仓库的 devcontainer 配置
   - 清理贡献者与安全 devcontainer profile、相关 Dockerfile 与文档，降低维护负担。

7. **[#43913](https://github.com/openai/codex/pull/43913)** — 为项目指令与文件系统沙箱操作添加 tracing
   - 新增 `AGENTS.md` 发现/加载、本地文件读取、沙箱请求准备与执行的 span，提升可观测性。

8. **[#43912](https://github.com/openai/codex/pull/43912)** — 保持 Guardian 审查器使用基于摘要的压缩
   - 清理继承的 token-budget 启动行为，避免上下文回滚替代摘要压缩。

9. **[#43909](https://github.com/openai/codex/pull/43909)** — 在凭证代理启用时保护 Shell 快照
   - 防止 Shell 启动文件注入凭证或覆盖代理的伪值，快照需遵循沙箱与策略。

10. **[#43907](https://github.com/openai/codex/pull/43907)** — 修复 Shell 快照导出在过滤与回放过程中的截断问题
    - 处理多行值与函数声明歧义，并保证 Bash 选项在解析前恢复。

---

## 📈 功能需求趋势

通过对全部 Issues 的分析，社区当前最关注的功能方向如下：

1. **LSP / IDE 级语言智能集成** — #8745 高赞 481，是呼声最高的增强需求，开发者期望 CLI 具备诊断与符号感知能力。
2. **Agent 自演化与长期记忆** — #40575 提出 `/learn` 指令蒸馏与 `AGENTS.md` 规则代谢，反映多周复杂任务下的演化瓶颈。
3. **自动压缩（Context Compaction）可控化** — #4106 长期推进硬编码阈值可调与关闭开关。
4. **Computer Use 跨平台一致性与稳定性** — Windows 缺失（#26562）、macOS 频繁崩溃（#25719/#38455/#38760/#40153/#42902）成为最大质量短板。
5. **Windows + WSL 工程化体验** — #41290/#41463/#41486/#43142/#42683 显示该路径仍是企业用户的高频痛点。
6. **远程协作 / 跨设备会话连续性** — #40879/#43537/#33830 反映 Remote handoff、远程任务完成同步、克隆 Mac 身份复用等一致性问题。
7. **模型目录与认证隔离** — 对应 PR #43897/#43906/#43895 在基础设施层面对此作出响应。
8. **Jujutsu (`jj`) 等替代 VCS 集成** — #26648 提出 worktree 后端可替换 hook。

---

## 💬 开发者关注点

从 Issue 与 PR 反馈中提炼出的高频痛点：

- **桌面端稳定性**：Computer Use 子服务在 macOS 上出现进程风暴（5-8 spawns/sec）、资源耗尽与内核 panic，是开发者最迫切希望修复的问题。
- **Windows + WSL 工作流**：项目创建、路径序列化、远程切换 Agent 环境等场景的回归密集出现，影响 Pro 用户核心场景。
- **可控性与可观测性**：自动压缩阈值、模型选择持久化（#26472）、TUI 推理摘要等需求显示社区希望掌握更多 Agent 行为开关与调试手段。
- **凭证与 Shell 快照安全**：PR #43907/#43909 显示工程团队已意识到 Shell 启动文件注入凭证的风险，开发者也期望沙箱默认更严格。
- **跨设备 Remote 工作流**：Mac 克隆后身份复用、远程任务完成不同步、paginated 会话无法接管，提示 Remote 模式尚处于早期。
- **平台能力对齐**：Windows 缺失 Computer Use、浏览器权限回收不彻底（#36953）等让开发者感到平台间能力不均。
- **配置管理**：Jujutsu 支持、worktree 后端可替换 hook，反映出对可定制工作流的需求。

---

*以上内容基于 GitHub `openai/codex` 仓库过去 24 小时的 Issue、PR 与 Release 数据生成，仅供参考。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期：2026-09-09**

---

## 📌 今日速览

Gemini CLI 今日进入 **v0.60.0-preview.0** 预览周期，核心焦点全面转向**安全性加固**与**沙箱隔离**：多个 P1 级修复集中处理路径遍历、间接提示注入、原子写入、模型 ID 静默重映射等关键问题。社区反馈方面，`subagent` 体系（含 browser、codebase_investigator、generalist agent）持续暴露稳定性与可观测性缺陷，已成为当前最突出的工程痛点。

---

## 🚀 版本发布

### v0.60.0-preview.0（Preview）
首个进入 v0.60 周期 的预览版本，主要变更：
- **`fix(core)`**: 改进 web fetch 工具的目标验证与连接路由 ([#29120](https://github.com/google-gemini/gemini-cli/pull/29120))
- **`fix(core)`**: 在 MCP OAuth 流程中强制执行 RFC 9207 颁发者标识 ([PR by @jvargassanchez-dot](https://github.com/google-gemini/gemini-cli))

### v0.60.0-nightly.20260908.g85aca163f
常规 nightly 滚动更新，详见 [Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.60.0-nightly.20260907.g85aca163f...v0.60.0-nightly.20260908.g85aca163f)。

### v0.59.0（稳定版）
包含 v0.58.0-preview.0 的 changelog 与版本号自动 bump。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 为什么值得关注 |
|---|------|---------------|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) **Subagent 在 MAX_TURNS 后误报 GOAL 成功** (P1, 13 评论) | 子代理体系最大的"沉默失败"案例，错误状态汇报严重影响 agent 编排可靠性 |
| 2 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) **Generalist agent 永久挂起** (P1, 👍8) | 👍 数最高的问题，简单任务即可触发小时级卡死，用户体验灾难 |
| 3 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) **Shell 命令完成后卡在"Waiting input"** (P1, 4 评论, 👍3) | 高频触发的基础可用性 bug，连最简单 CLI 命令都受影响 |
| 4 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) **零依赖 OS 沙箱 & 执行后意图路由** (P2, 9 评论) | 战略性 EPIC：利用 Gemini 3 原生 bash 亲和力做安全加固，路线图级议题 |
| 5 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) **Gemini 几乎不主动调用 skills/sub-agents** (P2, 6 评论) | 模型利用率问题，直接削弱扩展生态价值 |
| 6 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) **AST 感知文件读取/搜索/映射评估** (P2, 7 评论) | 上下文优化关键方向，目标是减少 token 浪费并提升代码理解精度 |
| 7 | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) **Auto Memory 确定性脱敏 & 日志瘦身** (P2, 5 评论) | 安全合规级问题：memory 提取过程中可能泄露本地机密到模型 |
| 8 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) **Browser subagent 在 Wayland 下失败** (P1, 4 评论) | Linux 桌面环境兼容性，影响跨平台用户群 |
| 9 | [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) **Browser Agent 忽略 settings.json 覆盖** (P2, 3 评论) | 配置系统与 agent 子系统的一致性缺陷 |
| 10 | [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) **>128 个工具时触发 400 错误** (P2, 3 评论) | 扩展性瓶颈，反映 agent 工具选择策略的成熟度不足 |

---

## 🛠️ 重要 PR 进展（Top 10）

| PR | 内容摘要 |
|----|---------|
| [#29250](https://github.com/google-gemini/gemini-cli/pull/29250) **`fix(core)`: 防止通过 build 文件修改与非可信 flag 的间接提示注入** | 在受限工作区模式下加固 shell/edit 等内置工具的执行路径，对抗间接提示注入攻击 |
| [#29244](https://github.com/google-gemini/gemini-cli/pull/29244) **`fix(core)`: 工具文件写入原子化 + 同路径写入串行化** | 修复并发工具调用导致同一文件编辑静默丢失的关键 bug（**所有相关调用都报 success**） |
| [#29252](https://github.com/google-gemini/gemini-cli/pull/29252) **`fix(core)`: 保留显式版本化的 Flash 模型 ID** | 阻止 `--model` 静默重映射到默认模型，确保 pinning 准确性并让无效 ID 暴露真实错误 |
| [#29249](https://github.com/google-gemini/gemini-cli/pull/29249) **`fix(core)`: 关闭 get_internal_docs 路径前缀绕过** | 路径遍历防护：使用字符串前缀比较导致兄弟目录被误判通过 |
| [#29247](https://github.com/google-gemini/gemini-cli/pull/29247) **`fix(core)`: Windows 下 isWithinRoot 大小写不敏感** | 修复 Windows 盘符/文件夹大小写不一致导致的 ACP/IDE 路由失败 |
| [#29214](https://github.com/google-gemini/gemini-cli/pull/29214) **`fix(sandbox)`: 加固文件系统边界并隔离运行时状态** | 用脱敏配置文件替换宿主目录挂载，统一 realpath 解析路径敏感性检查 |
| [#29248](https://github.com/google-gemini/gemini-cli/pull/29248) **`fix(cli)`: 避免确认后重复历史与遥测** | `/resume save <tag>` 等场景下确认操作的去重处理 |
| [#29137](https://github.com/google-gemini/gemini-cli/pull/29137) **`chore(deps)`: npm 依赖批量升级 (77 项更新)** | Dependabot 自动 rebasing 的大规模依赖更新 |
| [#29185](https://github.com/google-gemini/gemini-cli/pull/29185) **`test(integration)`: 消除 run_shell_command 与 file-system-interactive 抖动** | 提升慢速 E2E 集成测试稳定性，覆盖允许/拒绝列表与交互式文件系统场景 |
| [#29126](https://github.com/google-gemini/gemini-cli/pull/29126) **`fix(a2a-server)`: 在 A2A SDK 路由前挂载 express.json** | 修复 A2A JSON-RPC 解析（`req.body` undefined）问题（关 #29073） |

---

## 📈 功能需求趋势

从近期 Issue 中可清晰看到社区聚焦的五大方向：

1. **🔒 安全与沙箱强化**（最热门）
   - 路径遍历、间接提示注入、SFN 绕过、宿主目录隔离、凭据泄露
   - 涉及 `#19873`、`#26525`、`#29250`、`#29214`、`#29249`、`#29116`

2. **🤖 Subagent 可靠性与可观测性**
   - 状态汇报错误、挂起、bug 报告上下文缺失、轨迹分享
   - 涉及 `#22323`、`#21409`、`#21763`、`#22598`

3. **🧠 上下文效率与代码理解**
   - AST 感知读取、Tactful Extraction 手术式读取、subagent 利用率
   - 涉及 `#22745`、`#19561`、`#21968`

4. **🌐 跨平台兼容性**
   - Windows 大小写、NTFS SFN、Wayland 浏览器
   - 涉及 `#29247`、`#29116`、`#21983`

5. **🛡️ Memory / Auto Memory 系统治理**
   - 脱敏、低信号重试、inbox patch 校验、整体质量跟踪
   - 涉及 `#26525`、`#26522`、`#26523`、`#26516`

---

## 💬 开发者关注点

社区反馈集中在以下痛点：

- **"沉默失败" 是最严重的体验杀手**：无论是 subagent 误报 GOAL 成功、并发写入丢失，还是 browser agent 忽略配置，结果都对用户隐藏，严重削弱 CLI 的可信度。
- **扩展生态"形同虚设"**：开发者投入精力编写自定义 skills 与 sub-agents，但模型默认不会调用，导致投入产出比极低（见 `#21968`）。
- **安全模型"过严"或"漏防"并存**：一方面 sandbox 把宿主 `~/.gemini` 整个挂载暴露凭据；另一方面 `isWithinRoot` 在 Windows 上又错误拒绝合法路径，反映安全实现缺乏系统性。
- **Auto Memory 引发的隐私焦虑**：本地转录被发送到模型做提取，本质上是一个无感知的隐私通道，社区要求引入确定性脱敏而非依赖 LLM 自我审查。
- **工具规模可扩展性瓶颈**：超过 128 个工具就 400 错误，扩展开发者被迫做工具裁剪，限制了能力组合的丰富度。
- **可观测性严重不足**：bug 报告不包含 subagent 内部上下文，调试 agent 行为几乎只能靠用户人工复述（见 `#21763`）。

---

*数据来源：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) 仓库 2026-09-08 动态*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-09-09）

## 今日速览

v1.0.84-2 正式向所有用户开放 Vim 模式，这是社区呼声最高的功能之一（Issue #13 获得 76 👍）；与此同时，桌面应用 1.1.15 引发的多会话冲突问题（#4742）和会话挂起/内存泄漏类稳定性问题成为社区讨论焦点；此外，Windows 平台会话管理和 MCP 集成问题近期集中爆发。

## 版本发布

### v1.0.84-2

**新功能**
- **Vim 模式全面开放**：通过 `/vim` 命令或在配置中设置 `editorMode` 为 `vim` 即可在 composer 中启用模态编辑，输入时会显示当前模式状态。这一功能直接回应了社区最热门的 Issue #13。

**改进**
- Windows sandbox 策略下，交互式 shell 命令现在会记录被阻止的访问操作。

## 社区热点 Issues

### 1. [CLOSED] CLI input should have a vi/vim input mode（#13）
- 作者：RyanHecht | 👍 76 | 💬 11
- **重要性与社区反应**：这是社区呼声最高的功能请求，经历了约一年的讨论后在 v1.0.84-2 中正式实现。该 Issue 的关闭标志着 Vim 用户的核心需求得到满足。
- [GitHub 链接](https://github.com/copilot-cli/issues/13)

### 2. Desktop app 1.1.15: cannot create a second Local session（#4742）
- 作者：DannyBe99 | 👍 5 | 💬 10
- **重要性与社区反应**：桌面应用更新后，同一项目无法同时运行多个 Local 会话，报错 "This project already has an active Local workspace"。这一问题在 48 小时内获得 10 条评论，影响面较广。关联 Issue #4756（19 👍）也指向同类问题。
- [GitHub 链接](https://github.com/copilot-cli/issues/4742)

### 3. Runaway FileWatch host-event loop freezes TUI and grows debug log to 13 GB（#4612）
- 作者：tdihp | 👍 1 | 💬 9
- **重要性与社区反应**：长时间运行的会话可能进入死循环，导致 TUI 冻结且调试日志膨胀至 13 GB。该问题涉及稳定性核心，社区在持续关注并补充复现信息。
- [GitHub 链接](https://github.com/copilot-cli/issues/4612)

### 4. Copilot CLI crashes with JavaScript heap out of memory when resuming a long-standing session（#4664）
- 作者：shrijitnair | 👍 2 | 💬 7
- **重要性与社区反应**：恢复大型历史会话时直接 OOM 崩溃。这是会话持久化机制的严重缺陷，对于依赖长期会话的用户影响极大，与 #4505（连接 ID 失效）等问题共同指向会话恢复机制的整体脆弱性。
- [GitHub 链接](https://github.com/copilot-cli/issues/4664)

### 5. Compaction failed: received empty response from model（#2861）
- 作者：ronkeele | 👍 4 | 💬 6
- **重要性与社区反应**：`/compact` 在 Opus 4.6 上持续失败（3 次重试均收到空响应），属于模型兼容性问题。该问题已持续近 5 个月，社区期望官方修复或提供降级方案。
- [GitHub 链接](https://github.com/copilot-cli/issues/2861)

### 6. Windows app requires archiving every idle project session before creating a new Local session（#4756）
- 作者：TomHarveyBCM | 👍 19 | 💬 5
- **重要性与社区反应**：Windows 用户每次新建 Local 会话前必须先归档所有闲置会话。在一天内获得 19 个 👍，反映了 Windows 平台用户对此流程的强烈不满。
- [GitHub 链接](https://github.com/copilot-cli/issues/4756)

### 7. disable-model-invocation: true makes a skill unreachable（#4438）
- 作者：grammy-jiang | 👍 6 | 💬 4
- **重要性与社区反应**：将 skill 设为手动调用后反而完全不可达——模型工具返回 "Skill not found"，与配置意图完全相反。涉及 agent 工具链的核心行为，配置语义需要澄清或修复。
- [GitHub 链接](https://github.com/copilot-cli/issues/4438)

### 8. v1.0.83: session resume cancels in-flight stdio MCP server connections（#4753）
- 作者：indeherb | 👍 1 | 💬 3
- **重要性与社区反应**：v1.0.83 将 MCP 连接超时从 ~16s 缩短至 ~1s，导致恢复会话时仍在初始化的 MCP 服务器被静默丢弃，整个会话期间不可用。这是明显的回归问题。
- [GitHub 链接](https://github.com/copilot-cli/issues/4753)

### 9. Resumed session retains stale connection item IDs after interrupted response（#4505）
- 作者：Adamkadaban | 👍 3 | 💬 3
- **重要性与社区反应**：会话恢复后所有 prompt 报错 "input item ID does not belong to this connection"，且 `/fork` 无法恢复。会话恢复机制的状态一致性存在系统性缺陷。
- [GitHub 链接](https://github.com/copilot-cli/issues/4505)

### 10. openrouter integration（#2943）
- 作者：asule90 | 👍 14 | 💬 3
- **重要性与社区反应**：社区持续呼吁支持 OpenRouter 模型接入。14 个 👍 表明用户对模型提供商多样性的需求旺盛，但目前尚未看到官方排期。
- [GitHub 链接](https://github.com/copilot-cli/issues/2943)

## 重要 PR 进展

### 1. Document the WebSocket responses opt-out（#4770）
- 作者：1fanwang | 状态：OPEN
- **内容**：为 WebSocket responses 提供文档化的退出机制，解决网络屏蔽 WebSocket 或遇到 `400 input item ID does not belong to this connection` 错误时的逃生通道。与 #4505 直接相关。
- [GitHub 链接](https://github.com/copilot-cli/pull/4770)

### 2. install: report unsupported operating systems（#4761）
- 作者：1fanwang | 状态：CLOSED
- **内容**：修复 FreeBSD 上 `install.sh` 误报 "Windows detected but winget not found" 的问题，改为明确报告不支持的平台。
- [GitHub 链接](https://github.com/copilot-cli/pull/4761)

### 3. install: report unsupported operating systems（#4762）
- 作者：devm33 | 状态：CLOSED
- **内容**：与 #4761 相同主题的并行 PR，同样针对 FreeBSD 安装脚本的平台检测逻辑。
- [GitHub 链接](https://github.com/copilot-cli/pull/4762)

## 功能需求趋势

### 1. Vim/模态编辑支持（已实现）
Issue #13 以 76 👍 成为历史上最受关注的功能请求，现已在 v1.0.84-2 中落地。说明键盘驱动的高效编辑是重度用户的核心诉求。

### 2. 多模型提供商支持
- OpenRouter 集成（#2943，14 👍）
- Gemini 模型与 MCP 工具 schema 兼容性问题（#4623）

### 3. 会话可见性与状态管理
- 显示当前 TODO 状态（#1724，11 👍）
- 可折叠的输出分区（thinking/tool calls/messages）（#1787）

### 4. MCP 配置灵活性
MCP Profiles 支持（#2235）——用户希望按项目/场景加载不同的 MCP 服务器集合，而非全量加载。

### 5. 性能优化
TUI CPU 占用过高（#4750）和 FileWatch 死循环（#4612）表明终端渲染层和事件循环的性能优化需求迫切。

## 开发者关注点

### 1. 会话稳定性是最大痛点
本期 10 个热点 Issue 中有 5 个与会话相关：恢复失败（#4664、#4505）、多会话冲突（#4742、#4756）、会话永久挂起（#4755）。会话机制的可靠性已成为影响日常使用的首要问题。

### 2. Windows 平台体验明显落后
Windows 上出现的问题占比显著：多会话限制（#4756）、taskbar 状态卡死（#4771）、VS Code 启动时环境变量丢失导致 Git 发现失败（#4531）。建议 Windows 用户密切关注相关 Issue 进展。

### 3. 版本回归问题频发
v1.0.83 缩短 MCP 连接超时导致回归（#4753）、v1.0.80 遗留 macOS 警告（#4614）、桌面应用 1.1.15 引入会话冲突——多个问题指向发布流程中的回归测试不足。

### 4. 内存与资源管理
长时间会话的 OOM（#4664）和 13 GB 调试日志（#4612）表明资源管理需要系统性改进，特别是会话持久化的数据结构和 FileWatch 事件循环。

### 5. MCP 集成细节问题集中暴露
从 OAuth scope 缺失（#4582）、数组联合类型导致 Gemini 报错（#4623）、到取消请求未发送（#4759）、`/clear` 后 MCP 失效（#4772）——MCP 生态正在快速扩展，但边界情况处理仍需打磨。

---

*数据来源：[github.com/github/copilot-cli](https://github.com/github/copilot-cli)，统计时间截至 2026-09-09。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报（2026-09-09）

## 1. 今日速览

过去 24 小时 Kimi Code CLI 未发布新版本，也没有更新 Issue。社区动态集中在两个 PR 上：#2595 修复 `StrReplaceFile` 在非 UTF-8 文件上可能造成字节损坏的问题；#2616 提出通过 `gbr/1` 协议支持 Build Remote Agent 手机配对，实现移动端旁观与注入。整体方向偏向健壮性修复与跨设备协同扩展。

## 2. 版本发布

今日无新版本发布。

## 3. 社区热点 Issues

按要求应挑选 10 个最值得关注的 Issue，但本次统计窗口内（过去 24 小时）没有更新 Issue，因此无法评选热点。

- 今日更新 Issue 数：0
- 说明：建议持续关注后续窗口；#2595 所引用的 #2591（非 UTF-8 文件编辑问题）不在本次统计窗口内，暂不列出链接。

## 4. 重要 PR 进展

按要求应挑选 10 个 PR，但本次统计窗口内仅有 2 个 PR 更新，全部列示如下。

### 4.1 修复非 UTF-8 文件编辑导致的数据损坏

- **编号**：#2595
- **标题**：fix(StrReplaceFile): refuse to edit files that are not valid UTF-8
- **作者**：shoemoney
- **状态**：OPEN
- **更新于**：2026-09-08
- **内容摘要**：`StrReplaceFile` 当前使用 `errors="replace"` 解码整个文件，任何非 UTF-8 字节（即使不在编辑范围内）都会被替换为 U+FFFD 并写回，存在隐性破坏风险。该 PR 通过拒绝编辑非合法 UTF-8 文件来避免此问题。
- **重要性**：防止工具在非 UTF-8 文件上造成大范围字节损坏，属于重要的健壮性与安全性修复。
- **链接**：https://github.com/MoonshotAI/kimi-cli/pull/2595

### 4.2 新增 Build Remote Agent 手机配对

- **编号**：#2616
- **标题**：Add Build Remote Agent phone pairing (gbr/1)
- **作者**：LinespottingPrivate
- **状态**：OPEN
- **更新于**：2026-09-07
- **内容摘要**：新增 Build Remote Agent 作为桌面 agent 的配对设备。付费 iOS/Android 应用可通过 MIT 协议的开源 `gbr-agent` 观察本地会话并注入操作。手机角色被定位为“旁观者 + 否决者”，而非编排者。
- **重要性**：扩展远程协同与移动端接入场景，可能引入新的协议交互、权限与安全考量。
- **链接**：https://github.com/MoonshotAI/kimi-cli/pull/2616

## 5. 功能需求趋势

本次统计窗口内没有 Issue 数据，无法从 Issue 中提炼出可靠的社区功能需求趋势。基于现有 2 个 PR，可以观察到两个局部信号：

1. **文件处理稳健性**：关注非 UTF-8 文件边界，避免工具在文件操作中引入意外数据损坏。
2. **跨设备 / 远程协同**：探索移动端观察与干预本地 agent 会话的能力。

但这些信号仅来自少量 PR，尚不足以代表完整社区趋势，需要更多 Issue 数据支撑。

## 6. 开发者关注点

本次窗口内开发者通过 PR 反映出的关注点包括：

- **写文件的安全边界**：工具不应在非目标区域引入字节改写，尤其针对非 UTF-8 文件，必须避免静默破坏原始内容。
- **远程观察与协作体验**：希望能在手机端观察或轻量干预本地 agent 会话，同时保留本地编排权限。

由于本次窗口内没有 Issue 数据，高频痛点暂无法进一步归纳。建议后续结合更长时间范围的 Issue 列表进行分析。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 (2026-09-09)

## 🚀 今日速览
今日 OpenCode 社区主要集中在**性能优化**与**UI 体验修复**上。开发者针对近期版本中反馈的 CPU 占用过高、内存泄漏以及 TUI 渲染等问题进行了大量修复。同时，社区对“对话大纲（Conversation Outline）”和“Token 速率显示”等新功能展现出极高的热情。

---

## 📦 版本发布
*过去 24 小时内无新版本发布*

---

## 🔥 社区热点 Issues (Top 10)

1. **#20695 Memory Megathread (已关闭)**
   - **摘要**: 针对近期频繁报告的内存问题，社区启动了全局汇总讨论。官方强调在内存排查时不要依赖 LLM 的建议，而是需要用户收集堆栈快照（Heap snapshots）。
   - **关注度**: 评论数 144，是目前最核心的稳定性问题。
   - [查看 Issue](https://github.com/anomalyco/opencode/issue/20695)

2. **#30086 High CPU usage in newer versions**
   - **摘要**: 用户反馈自上周更新后，CPU 占用率飙升，导致原本能同时开启 10 个会话现在只能开 3 个，且严重影响鼠标操作流畅度。
   - **关注度**: 27 个赞，影响面广泛。
   - [查看 Issue](https://github.com/anomalyco/opencode/issue/30086)

3. **#5374 [FEATURE]: show tokens / second**
   - **摘要**: 用户 IceWreck 建议显示当前及平均的 Token/s 渲染速率，以便对比不同模型提供商的性能。
   - **关注度**: 109 个赞，是极受期待的功能请求。
   - [查看 Issue](https://github.com/anomalyco/opencode/issue/5374)

4. **#37012 [FEATURE] : keep legacy layout option**
   - **摘要**: 用户认为新版布局增加了导航深度，希望保留旧版布局以便更快速访问常用选项并支持工作区切换。
   - **关注度**: 47 个赞，反映了 UI 迭代中的习惯冲突。
   - [查看 Issue](https://github.com/anomalyco/opencode/issue/37012)

5. **#42306 TUI: main thread burns ~100% CPU continuously**
   - **摘要**: 在 Linux 终端下，主线程在无操作时仍因不断重绘加载动画（约 15fps）而持续占满一个 CPU 核心。
   - **关注度**: 关键的 TUI 性能 Bug。
   - [查看 Issue](https://github.com/anomalyco/opencode/issue/42306)

6. **#26220 Bug: OpenCode enters infinite loop after tool calls**
   - **摘要**: 使用 Zen/big-pickle 模型时，工具调用完成后 OpenCode 会进入无限循环，进程虽存活但不响应任何用户输入。
   - **关注度**: 严重的逻辑死锁 Bug。
   - [查看 Issue](https://github.com/anomalyco/opencode/issue/26220)

7. **#45442 [2.0] subagent: infinite loop of identical tool calls**
   - **摘要**: 后台子 Agent 在 50 分钟内重复了 364 次完全相同的 `grep` 工具调用，缺乏循环保护机制导致 Token 耗尽。
   - **关注度**: 涉及 API 额度安全问题。
   - [查看 Issue](https://github.com/anomalyco/opencode/issue/45442)

8. **#33027 [BUG] MCP tools connected but not exposed to agent**
   - **摘要**: MCP 服务器已成功连接并能列出工具，但 Agent 的可用工具列表中并未出现这些工具。
   - **关注度**: MCP 协议适配性的核心问题。
   - [查看 Issue](https://github.com/anomalyco/opencode/issue/33027)

9. **#34301/32708 Custom project icon not applying after save**
   - **摘要**: 多用户反馈在 Windows 上修改本地项目自定义图标时，点击“保存”无效，系统始终显示默认图标。
   - **关注度**: 典型的 UI 持久化 Bug。
   - [查看 Issue](https://github.com/anomalyco/opencode/issue/34301)

10. **#40747 opencode run hangs indefinitely when quota is exhausted**
    - **摘要**: 当模型额度用尽时，`opencode run` 命令会无限挂起，而不返回任何错误提示信息。
    - **关注度**: 影响用户体验的关键异常。
    - [查看 Issue](https://github.com/anomalyco/opencode/issue/40747)

---

## 🛠 重要 PR 进展 (Top 10)

1. **#41264 feat(tui): add focus view to collapse multi-step turns**
   - **内容**: 为 TUI 增加了“聚焦视图”切换，将包含多个步骤的 Assistant 回复折叠为紧凑的区块，仅显示最终结果，提升界面整洁。
   - [查看 PR](https://github.com/anomalyco/opencode/pr/41264)

2. **#41267 feat(app): add All files option to review v2 changes**
   - **内容**: 在 v2 审查模式下拉菜单中新增“所有文件”选项，允许侧边栏显示完整项目树而非仅差异文件。
   - [查看 PR](https://github.com/anomalyco/opencode/pr/41267)

3. **#41240 fix(core): normalize file paths to forward slashes**
   - **内容**: 修复 Windows 环境下文件监听器产生反斜杠导致路径匹配失败的问题，统一转换为正斜杠以兼容内部逻辑。
   - [查看 PR](https://github.com/anomalyco/opencode/pr/41240)

4. **#41247 fix(tui): compensate scroll on message prune**
   - **内容**: 修复了 Agent 输出时，若消息超过 100 条，用户无法向上滚动查看历史记录的问题。
   - [查看 PR](https://github.com/anomalyco/opencode/pr/41247)

5. **#41239 fix(opencode): match tool keys case-insensitively**
   - **内容**: 修复了工具键匹配大小写不敏感的问题（如 `read` 匹配 `Read`），导致权限校验失效。
   - [查看 PR](https://github.com/anomalyco/opencode/pr/41239)

6. **#41212 fix(session): respect model capabilities**
   - **内容**: 改进会话历史处理，防止不支持的图片/PDF 附件留在工具结果中，避免污染后续的历史重放。
   - [查看 PR](https://github.com/anomalyco/opencode/pr/41212)

7. **#41271 refactor(llm): fold cache policy and option into one request**
   - **内容**: 优化代码结构，将缓存策略和选项合并为单次请求构建，减少冗余计算。
   - [查看 PR](https://github.com/anomalyco/opencode/pr/41271)

8. **#41272 refactor(opencode): skip per-token schema validation in AI-SDK adapter**
   - **内容**: 在 AI-SDK 适配器中跳过每个 Token 的 Schema 校验，提升处理性能。
   - [查看 PR](https://github.com/anomalyco/opencode/pr/41272)

9. **#41301 fix(core): settle shell failures**
   - **内容**: 修复了 Shell 命令同步创建失败（如包含非法字节）时，会导致会话一直处于忙碌状态。
   - [查看 PR](https://github.com/anomalyco/opencode/pr/41301)

10. **#41235 fix(cli): honor shell argument in completion command**
    - **内容**: 修复 `opencode completion` 无法正确识别不同 Shell 环境（Fish/Bash/Zsh）的问题。
    - [查看 PR](https://github.com/anomalyco/opencode/pr/41235)

---

## 📈 功能需求趋势

*   **性能监控是当务之急**：用户极度关注 CPU 和内存占用情况，并希望看到具体的 Token/s 速率指标来量化模型性能。
*   **UI/UX 深度定制**：社区对“旧版布局”有留念，并对“对话大纲（Conversation Outline）”功能需求强烈，以管理复杂的 AI 任务。
*   **Agent 健壮性**：子 Agent 在工具调用后的死循环（Infinite Loop）是目前的痛点，开发者急需更完善的循环保护和错误回传机制。
*   **跨平台一致性**：Windows 上的路径处理（斜杠问题）和 UI 元素持久化（图标保存）仍是 Bug 高发区。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-09-09

> 数据来源：[github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono) · 仓库实际归属 [earendil-works/pi](https://github.com/earendil-works/pi)

---

## 📌 今日速览

今日社区最显著的特征是 **"opencode 强制 `x-opencode-session` 头部引发的连锁故障"**——多条 Issue 集中爆发于这一上游变更（2026-09-06 起生效），影响模型注册、扩展 API 与摘要压缩全链路。同时 **TUI 全屏模式与编辑器体验优化** 成为 PR 端的主旋律，编辑预览闪烁、硬件光标偏移、零行 footer 等细节问题被密集修复。

---

## 🚀 版本发布

无新版本发布。最近一次发版节奏显示当前正处于 0.84.x 系列的迭代维护阶段。

---

## 🔥 社区热点 Issues

| # | 标题 | 评论 | 状态 | 为何重要 |
|---|------|------|------|---------|
| [#5363](https://github.com/earendil-works/pi/issues/5363) | Add amazon-bedrock-mantle provider for OpenAI-compatible models | 19 | OPEN / In Progress | **👍15** 今日热度最高。Bedrock Mantle 模型走 OpenAI 兼容 API 而非 Converse，需新增独立 provider，社区关注度高 |
| [#7444](https://github.com/earendil-works/pi/issues/7444) | WebSocket retry only handles two error codes | 10 | CLOSED | Codex WebSocket 重试仅覆盖两类错误码，其余 `response.failed` 直接中断 turn |
| [#8823](https://github.com/earendil-works/pi/issues/8823) | Esc during active streaming often fails to cancel | 10 | CLOSED | 流式输出时按 Esc 无法可靠中止，普遍性用户体验问题 |
| [#9052](https://github.com/earendil-works/pi/issues/9052) | Fullscreen mode scroll wheel 3x slower | 7 | OPEN | **👍3** 全屏模式下滚轮速度仅为普通模式的 1/3，影响输入框固定方案的推广 |
| [#7445](https://github.com/earendil-works/pi/issues/7445) | openai-responses ties developer role to model.reasoning | 6 | OPEN / In Progress | `developer` 角色判断与 `model.reasoning` 耦合，导致 `supportsDeveloperRole` 配置失效 |
| [#5581](https://github.com/earendil-works/pi/issues/5581) | pi.sendMessage() with triggerTurn bypasses before_agent_start | 5 | OPEN / In Progress | 扩展 API 事件绕过，影响大量基于 `before_agent_start` 的安全/注入插件 |
| [#9290](https://github.com/earendil-works/pi/issues/9290) | modelRegistry.complete() missing x-opencode-session header | 4 | CLOSED | opencode 上游强制头部带来的首条报错，影响所有扩展调用 |
| [#9302](https://github.com/earendil-works/pi/issues/9302) | Out-of-loop summarization misses provider attribution | 3 | OPEN / In Progress | 分支摘要/压缩在 opencode 模型上确定性失败，与 #9290 同源 |
| [#8706](https://github.com/earendil-works/pi/issues/8706) | zai thinking handler leaks reasoning for forced-thinking models | 4 | CLOSED | GLM-5.3 系列强制思考模式下推理内容泄露到输出 |
| [#8667](https://github.com/earendil-works/pi/issues/8667) | Stale compaction entry permanently bricks session | 3 | CLOSED | 压缩条目落点错误可让整条会话永久不可用（Anthropic 400） |

---

## 🛠️ 重要 PR 进展

| PR | 标题 | 内容要点 |
|----|------|---------|
| [#9351](https://github.com/earendil-works/pi/pull/9351) | Fix the edit preview flicker on remote edits | 远程编辑场景下，工具行短暂闪红再被正确 diff 替换——修复预览/编辑竞态 |
| [#9350](https://github.com/earendil-works/pi/pull/9350) | Fork-free executable lookup | `findExecutableOnPath` 与 `commandExists` 在 Android Termux 等受限环境下会因 `fork()` 死锁，改用无 fork 方案 |
| [#9345](https://github.com/earendil-works/pi/pull/9345) | Expose Anthropic OAuth usage reports | 新增 `Models.getUsageReport("anthropic")`，5 分钟 token 分区缓存，标准化订阅配额展示 |
| [#9344](https://github.com/earendil-works/pi/pull/9344) | Add owner-safe UI overrides | 主题/footer/编辑器支持 owner 身份安全覆盖，stale 释放自动还原 |
| [#9341](https://github.com/earendil-works/pi/pull/9341) | Update runtime dependencies | 更新 `minimatch` 等运行时依赖（安全修复），重新生成 lockfile |
| [#9337](https://github.com/earendil-works/pi/pull/9337) | Bound Case 3 compaction estimate | 把下游 fork 中已修复的压缩/上下文显示三处 bug 回移植到上游 main |
| [#9329](https://github.com/earendil-works/pi/pull/9329) | Detect Orca terminals as Kitty-image capable | 在 pi-tui 中识别 `TERM_PROGRAM=Orca`，启用内联图、OSC 8 超链接 |
| [#9319](https://github.com/earendil-works/pi/pull/9319) | Guard optional invalidate in MouseRegion | 自定义扩展组件未实现 `invalidate` 时不再崩溃 |
| [#9316](https://github.com/earendil-works/pi/pull/9316) | Three easy fixes (#8919, #8717, #8720) | 批量合入：零行 footer 自动折叠、全屏 header 折叠、Markdown 表格修复 |
| [#8627](https://github.com/earendil-works/pi/pull/8627) | Use ctx.cwd for cwd-sensitive tools | read/write/edit/grep 等工具统一基于 `ctx.cwd` 解析路径，修复多 cwd 下的扩展工具路径漂移 |

---

## 📈 功能需求趋势

从今日 50 条 Issue 提炼，社区关注点呈现以下分布：

### 1. **多 Provider 协议适配（高频）**
- 新增 Bedrock Mantle（OpenAI 兼容）[#5363](https://github.com/earendil-works/pi/issues/5363)
- Kimi Coding 切换至 OpenAI Responses 协议 [#9338](https://github.com/earendil-works/pi/issues/9338)
- Codex Responses 支持 Bearer token [#5152](https://github.com/earendil-works/pi/issues/5152)
- Mistral Medium 推理模式启用 [#8700](https://github.com/earendil-works/pi/issues/8700)

### 2. **TUI / 编辑器体验打磨**
- 全屏模式滚轮速度 [#9052](https://github.com/earendil-works/pi/issues/9052)
- 零行 footer 折叠 [#8919](https://github.com/earendil-works/pi/issues/8919)
- 硬件光标偏移（WezTerm/WSL）[#9339](https://github.com/earendil-works/pi/issues/9339)
- `/model` 选择器展示价格与上下文长度 [#9355](https://github.com/earendil-works/pi/issues/9355)
- 压缩块点击展开 [#9356](https://github.com/earendil-works/pi/issues/9356)
- `tui.select.confirmSubmit` 一致性 [#9353](https://github.com/earendil-works/pi/issues/9353)

### 3. **会话压缩与稳定性**
- 自动压缩引发会话"砖化" [#8667](https://github.com/earendil-works/pi/issues/8667)
- `AgentSession.abort()` 后仍触发压缩 [#9340](https://github.com/earendil-works/pi/issues/9340)
- 摘要路径缺失 provider 头部 [#9302](https://github.com/earendil-works/pi/issues/9302)
- 启动时延预算对标 jcode [#7739](https://github.com/earendil-works/pi/issues/7739)

### 4. **扩展 API 与 RPC 治理**
- `pi.sendMessage(triggerTurn:true)` 绕过 `before_agent_start` [#5581](https://github.com/earendil-works/pi/issues/5581)
- 消息送达确认幂等 API [#9236](https://github.com/earendil-works/pi/issues/9236)
- 窗口焦点/失焦事件 [#2924](https://github.com/earendil-works/pi/issues/2924)
- RPC 监督者接管 SIGTERM [#9328](https://github.com/earendil-works/pi/issues/9328)

### 5. **认证与配置管理**
- opencode 强制 `x-opencode-session` 头部 [#9290](https://github.com/earendil-works/pi/issues/9290)
- Anthropic OAuth 用量上报 [#9345](https://github.com/earendil-works/pi/pull/9345)
- 只读 `~/.pi/agent` 下凭据读取失败 [#6406](https://github.com/earendil-works/pi/issues/6406)
- 配置分离（系统/用户）[#4212](https://github.com/earendil-works/pi/issues/4212)

---

## 💬 开发者关注点

### 🔴 痛点 1：opencode 头部变更的级联破坏
2026-09-06 起 opencode.ai 强制要求 `x-opencode-session` 头部，导致 4 条相关 Issue 集中爆发（[#9290](https://github.com/earendil-works/pi/issues/9290)、[#9302](https://github.com/earendil-works/pi/issues/9302) 等）。这反映出 **Pi 对外部 provider 协议变更的被动适配**——一旦上游收紧认证策略，下游客户端缺乏统一的 header 注入层。

### 🔴 痛点 2：TUI 全屏模式的"半成品感"
全屏模式被频繁提起（[#9052](https://github.com/earendil-works/pi/issues/9052)、[#8919](https://github.com/earendil-works/pi/issues/8919)、[#9339](https://github.com/earendil-works/pi/issues/9339)、[#9356](https://github.com/earendil-works/pi/issues/9356)、[#9310](https://github.com/earendil-works/pi/pull/9310)），集中在 **滚轮、footer、选择区、点击交互**——开发者正把全屏模式当作事实上的"工作区默认态"使用，倒逼交互细节补齐。

### 🔴 痛点 3：流式取消与会话终止语义模糊
[#8823](https://github.com/earendil-works/pi/issues/8823) Esc 不能即时中止 + [#9340](https://github.com/earendil-works/pi/issues/9340) abort 后仍触发压缩，暴露 **运行时取消信号在异步路径（post-run 恢复、压缩调度）中未被一致尊重**。

### 🟡 高频需求：多协议多模型网关化
Bedrock Mantle、Kimi Responses、Codex Bearer、Anthropic OAuth 上报、provider 自报 cost [#6881](https://github.com/earendil-works/pi/pull/6881)——社区希望 Pi 不再是"单一协议客户端"，而是 **统一的 LLM 网关层**，对认证、配额、用量归一化处理。

### 🟡 高频需求：扩展 API 治理
`before_agent_start` 绕过、消息送达确认、窗口事件、ctx.cwd 解析、订阅式 owner 覆盖——开发者正在把 Pi 当作 **嵌入自己工作流的 agent 运行时**，对扩展 API 的稳定性和语义一致性要求越来越高。

---

*日报生成时间：2026-09-09 · 数据窗口：过去 24 小时 GitHub 更新*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

好的，以下是 2026 年 9 月 9 日的 Qwen Code 社区动态日报。

---

# Qwen Code 社区动态日报 — 2026-09-09

## 1. 今日速览

昨日 Qwen Code 发布了一系列版本更新，其中最值得注意的是 **v0.23.1** 正式版，包含了对 `@qwen-code/webui` 包的移除（Breaking Change）以及其他多项功能更新；同时，**SDK TypeScript 也已更新至 v0.1.10**，内置了 0.23.1 CLI，回应了社区对托管内存与提示缓存修复的呼吁。社区方面，**Windows 平台下 `conhost.exe` 进程泄漏问题（#11303）仍是 P1 级最高热度痛点**，同时多条关于 daemon 架构解耦、自定义 Web Shell 分发与 branding 的 feature request 频繁涌现，显示出集成者（Integrator）群体的需求正在上升。

## 2. 版本发布

过去 24 小时内共有 4 个版本发布：

- **[v0.23.1](https://github.com/QwenLM/qwen-code/releases)**（正式版）
  - **Breaking Change：** 移除 `@qwen-code/webui` 组件库（PR #9812）。
  - 包含若干 Feature 更新（详见 Changelog，如 Web Shell 可视化与管理动态等）。
- **[v0.23.2-preview.0](https://github.com/QwenLM/qwen-code/releases)**（预览版）
  - 仅含一个 CI 修复：`fix(ci): isolate subprocess-heavy E2E from fork pressure`（PR #11388）。
- **[sdk-typescript-v0.1.10](https://github.com/QwenLM/qwen-code/releases)**
  - 内置 CLI 版本为 **0.23.1**（源码构建）。修复 user 请求的 **managed-memory availability 逻辑（#6941）** 与 **prompt-cache 清理逻辑（#8464）** 问题。解决了 #11022。
- **[sdk-typescript-v0.1.9](https://github.com/QwenLM/qwen-code/releases)**
  - 内置 CLI 0.23.0，同样包含上述 #6941 的修复。

## 3. 社区热点 Issues（10 个）

选出的 10 个最值得关注的 Issue，涵盖高优先级 Bug、核心架构讨论及集成者高频诉求。

1. **[#11303 [P1/Windows] qwen-cli 泄漏数百个 `conhost.exe` 进程](https://github.com/QwenLM/qwen-code/issues/11303)**
   作者观察 12 小时后 VS Code Companion 内置的 CLI 泄漏了 347 个子进程，占 ~2.8 GB 内存。目前评论 10 条，社区关注度最高。已拆分为 #11313（conout-worker 半区）与 #11352 进行跟踪。

2. **[#11022 [CLOSED] 发布包含 managed-memory 与 prompt-cache 修复的新 SDK 版本](https://github.com/QwenLM/qwen-code/issues/11022)**
   社区用户呼吁已久的版本发布请求，已通过 SDK TypeScript v0.1.10（内置 CLI 0.23.1）落地解决。反映了用户对合入 main 分支修复能迅速发包的强烈期望。

3. **[#11386 feat(serve): 解耦 daemon workspace 注册与活跃运行时，扩展至 25+ 容量](https://github.com/QwenLM/qwen-code/issues/11386)**
   用户在 2026-09-08 更新实测数据（1/25/256 容量基线）认为当前空闲开销不构成完整 LRU 实现的硬性前置条件，建议先解耦注册与实时运行时的关联。社区结合实测数据修正方案，讨论理性。

4. **[#11405 Deny 权限过严导致模型完全弃用某工具](https://github.com/QwenLM/qwen-code/issues/11405)**
   当某项工具仅被 pattern 拒绝（例如 `Bash(npm view *)`）时，错误消息过于严厉，模型会误以为该工具完全被禁而不再调用。这是权限控制语义的易用性缺陷。

5. **[#11274 tracking(daemon): 将 Skill 管理与 ACP child 解耦（多 PR 计划）](https://github.com/QwenLM/qwen-code/issues/11274)**
   规划了分阶段（每个 PR 行数差异 < 1000）将 daemon 的 Skill 管理与运行时子进程解耦的长篇计划。对 daemon 架构演进具有核心规划价值。

6. **[#10995 customHeaders: 支持 `${session_id}` 动态模板变量](https://github.com/QwenLM/qwen-code/issues/10995)**
   请求会话级请求头注入能力，用于逐会话鉴权或路由。该请求已关闭并获得 1 👍，社区配合度高。

7. **[#10685 Channel 服务 PID 文件误判循环 PID](https://github.com/QwenLM/qwen-code/issues/10685)**
   一个经典的 PID 复用判断问题。`process.kill(pid,0)` 仅能说明存在对应的进程 ID，无法保证进程身份一致，可能导致服务状态误判。

8. **[#11394 sdk-typescript Docker 测试环境共享 ~/Qwen 目录导致假性失败](https://github.com/QwenLM/qwen-code/issues/11394)**
   15/20 的权限控制测试因 Docker 测试共有同一 `QWEN_HOME`，导致内存预取步骤吞掉了 fake-server 的脚本响应而出现失败。测试隔离问题。

9. **[#11352 [P1/Windows] node-pty 固有缺陷：自然退出时泄漏 ConPTY 宿主](https://github.com/QwenLM/qwen-code/issues/11352)**
   #11303 的另一半问题拆分。同样位于 Windows 平台，由于依赖的 `@lydell/node-pty` 存在缺陷（清除 baton 先于 onExit 触发），无法从 JS 侧关闭 `ClosePseudoConsole`。当前状态为 Blocked，需要依赖侧更新。社区讨论集思广益。

10. **[#11367 等主分支 CI 多次失败系列](https://github.com/QwenLM/qwen-code/issues/11367)**
    在过去 24 小时内，多条 main-branch CI（Qwen Code CI 与 E2E Tests）失败 issue 被机器人自动创建（#11367, #11389, #11377, #11331, #11343, #11364 等）。部分 PR（如 #11391）已通过隔离 serve 路由测试来试图缓解，是维护者正在积极解决的高频问题。

## 4. 重要 PR 进展（10 个）

1. **[#11251 feat(web-shell): 暴露 assistant turn 生命周期回调](https://github.com/QwenLM/qwen-code/pull/11251)**
   为集成宿主增加由 daemon 端确认的助手消息结算完成事件，包含会话 ID、结果、终止原因及错误详情等。对嵌入方非常实用的 API 新增。

2. **[#11289 fix(web-shell): 修复空闲状态下拒绝中转消息的问题](https://github.com/QwenLM/qwen-code/pull/11289)**
   当回合已结束后，用户输入被拒绝，但现在 daemon 会显式标识空闲状态，浏览器端用户也会得到更友好的"作为普通 prompt 发送"的引导，而非简单地判定发送失败。

3. **[#11291 fix(core): 无状态码的上游错误可进入重试逻辑而非终止](https://github.com/QwenLM/qwen-code/pull/11291)**
   修复了某个兼容 OpenAI 协议的网关在 HTTP 200 SSE 流中推送暂时限流错误对象，但因缺少 status 属性而未被识别为可重试的问题。对应 Issue #11215。

4. **[#11348 feat(core): ModelStudio Standard/Token 套餐默认启用 web_search](https://github.com/QwenLM/qwen-code/pull/11348)**
   当模型能力支持 DashScope 服务端搜索时，内置 `web_search` 工具将自动启用，免除三项设置的手动调整，提升开箱即用体验。

5. **[#11391 fix(ci): 将 serve 路由 E2E 从 fork 压力中隔离](#)**
   为解决 #11389 等 CI 失败频发问题构建，在 Docker 与 sandbox:none 两腿跑完常规任务后，将 serve 路由测试单独分配单 fork 运行。

6. **[#11381 refactor(channels): 移除已废弃的块级流式传输](#)**
   删除了旧的通道 block-streaming 开关、分块大小和空闲刷新设置，及备用段落发送器。Adapter 将继续通过正常路径收流式更新和完成响应，属于清理历史包袱的重构。

7. **[#11349 feat(core): 扩展 Kimi、Qwen、DeepSeek 推理预设](https://github.com/QwenLM/qwen-code/pull/11349)**
   为 MoonShot K3、K2.6/K2.7 Code、Qwen 3.8、DeepSeek V4 Pro/Flash 等模型补齐推理强度（低/中/高/最大）配置。

8. **[#11406 fix(web-shell): 修复 split 重渲染测试中的 undefined mock (#11404)](https://github.com/QwenLM/qwen-code/pull/11406)**
   由于 #11250 引入的测试中引用了一个不存在的 mock 标识符，导致每次执行必挂的单测。属于快速修复质量门禁。

9. **[#11238 feat(web-shell): 改进会话概览导航与详情](https://github.com/QwenLM/qwen-code/pull/11238)**
   让会话列表更易扫描，每会话新增显示 workspace、branch 与 PR 信息，状态新增区分审批、提问、运行与空闲。支持状态过滤器与分支/PR 搜索。相关后续项在 #11390 追踪。

10. **[#11258 fix(core): 规避 checkout hooks 失败导致分支提交丢失](https://github.com/QwenLM/qwen-code/pull/11258)**（自我申报 review）
    当切换分支时 checkout hook 或并发写者失败，恢复逻辑仅在实际发生了分支切换后才运行，防止误删历史记录，且恢复时不执行 hooks 或文件监控。

## 5. 功能需求趋势

剔除虫类与 CI 稳定性等被动修复项，可观察到社区关注的功能方向集中在以下四个方面：

1. **Web Shell 集成与白标能力**：近期的 Feature Request 中，围绕 Web Shell 的呼声很高，表现为要求支持 `qwen serve` 托管自定义前端（#11358）、通过配置文件实现品牌自定义（#11357），以及整理面向集成者的 REST/SSE API 文档（#11359）。**“让 Qwen Code 成为可再嵌入的 Agent 后端”是目前的明确方向。**

2. **Daemon 架构演进与解耦**：`#11274`（Skill 管理与 runtime 解耦）及 `#11386`（workspace 容量扩展）都在讨论重构 daemon。议题核心是减少 singleton/进程内耦合、将目录管理与激活运行解耦、提升宿主侧集成自由度。

3. **模型 Provider 支持拓展**：通过 `#11349`（Kimi/Qwen/DeepSeek reasoning 预设）与 `#11348`（内置 web_search 开关）等 PR，可看出正在为更多国产模型与新模型快速补齐 `provider` 支持，力求在“开箱即用”与 model preset 多样性上保持优势。

4. **Windows 平台质量修复**：`#11352` 与 `#11303` 同为 Windows 上后台进程泄漏问题，尽管其根因在于依赖的 node-pty 侧，但社区持续反馈与评审推动了 Qwen Code 服务进程在 `conout-worker` 一半的修复（#11313），反应出 Windows 用户的比例与重视度不可忽视。

## 6. 开发者关注点

- **Windows 高内存开销**：本地 daemon 经长期运行后泄漏至 GB 级内存，且根因触及私有依赖（node-pty），开发者难做自修复。目前 #11352 处于需要人工维护介入、讨论对策的阶段。
- **CI 频繁失败**：主分支多条 E2E/CI 任务失败，多表现为 fork 压力下产生误报。虽然维护者已提出隔离方案（#11391），但这背后对 PR 合入速度带来的阻塞仍有较大影响，需要持续关注。
- **测试资源隔离**：`QWEN_HOME` 在 E2E Docker 环境与 sandbox:none 下不一致引发 15/20 用例失败（#11394），反映出测试环境中 mock 服务与 fixture 缺少更细粒度的隔离策略。
- **权限控制易刚性误伤**：deny 权限与工具调用链路之间的反馈闭环不佳，模型得到“过于严厉”的错误会让模型错误泛化（#11405）。权限系统语义设计既要明确也要保留可恢复的友好提示。
- **版本发布周期**：用户强烈希望 main 分支的修复能更快落地到 SDK 包（#11022），目前 SDK 在新版本发布与 CLI 合并似乎存在短暂等待窗口，开发者偏向“可立即获取”的打包策略。

---
*注：以上链接均指向 QwenLM/qwen-code 官方 GitHub 仓库的对应 Issue/PR；若为本地镜像，请以原链为准。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# Codewhale (DeepSeek TUI) 社区动态日报 | 2026-09-09

> 数据来源：`github.com/Hmbown/Codewhale` | 统计周期：过去 24 小时（2026-09-08 至 2026-09-09）

---

## 1. 今日速览
*   **无新版本发布**，但核心维护者 Hmbown 提交了整合 **v0.9.13 贡献者修复** 的大型 PR（#6002），标志着下一版本候选版进入验证阶段。
*   社区高活跃度聚焦于 **Provider 生态完善**（OpenRouter 厂商选择、模型分页、计费覆盖）、**Session 管理增强**（Hook 事件、标题生成、选择器 UX）以及 **长上下文策略**（虚拟内存式 Offload、目标门控）。
*   发现 **Concentrate 等供应商计费显示 "unknown" 的系统性缺陷**（#5976），引发对定价目录完整性的架构级讨论。

---

## 2. 版本发布
**过去 24 小时无新 Release 发布。**

---

## 3. 社区热点 Issues（精选 10 条）

| # | 标题 | 类型 | 核心诉求 | 关注度/进展 | 重要性评析 |
|---|---|---|---|---|---|
| [#6004](https://github.com/Hmbown/Codewhale/issues/6004) | **Hooks 无法观测会话状态** | 增强 | 新增 `session_state_changed` 等 Hook 事件，覆盖 `idle/fatal-error/waiting-for-user` 状态 | 👍0 · 评论3 · 创建于 09-07 | **⭐⭐⭐⭐⭐** 补全可观测性盲区，对自动化编排、外部监控集成至关重要。 |
| [#5976](https://github.com/Hmbown/Codewhale/issues/5976) | **[Bug] Concentrate 成本显示 "unknown"，计费覆盖不完整** | Bug | 目录中已有模型定价却无法正确显示；缺乏兜底校验机制 | 👍0 · 评论2 · 更新 09-08 | **⭐⭐⭐⭐⭐** 创始人亲报，暴露定价数据管道与 Provider Registry 联动的系统性漏洞。 |
| [#6007](https://github.com/Hmbown/Codewhale/issues/6007) | **OpenRouter 原生厂商选择支持** | 增强 | 在配置或 `/model` 面板直接指定上游厂商，而非依赖模型字符串 Hack | 👍0 · 评论2 · 更新 09-08 | **⭐⭐⭐⭐** OpenRouter 多厂商路由是核心场景，原生支持能显著提升延迟/质量可控性。 |
| [#6009](https://github.com/Hmbown/Codewhale/issues/6009) | **[Bug] `/models` 命令缺失分页支持** | Bug | 单次请求导致模型列表截断，影响大型 Provider 目录完整性 | 👍0 · 评论2 · 创建 09-08 | **⭐⭐⭐⭐** 基础设施级 Bug，直接阻断模型发现能力，需优先修复。 |
| [#6015](https://github.com/Hmbown/Codewhale/issues/6015) | **Fleet 子代理自适应反停滞与只读 Shell 语法** | 增强 | 零配置优化 Scout/Reviewer 等只读角色的 Token 消耗与执行卡顿 | 👍0 · 评论1 · 创建 09-08 | **⭐⭐⭐⭐** 多智能体编排核心体验优化，主张"开箱即用"而非依赖用户调参。 |
| [#6014](https://github.com/Hmbown/Codewhale/issues/6014) | **Session Picker UX 全面改进** | 增强 | 隐藏空会话、高亮当前、分页滚动、加宽面板 | 👍0 · 评论1 · 创建 09-08 | **⭐⭐⭐** 高频交互入口体验打磨，直接影响日常工作流效率。 |
| [#6013](https://github.com/Hmbown/Codewhale/issues/6013) | **Goal Gates：目标验证独立化与韧性增强** | 增强 | 引入独立验证器、多状态支持、验证后阶段，默认保持现有行为 | 👍0 · 评论1 · 创建 09-08 | **⭐⭐⭐⭐** 长任务自主循环的可靠性基石，解决"模型自报完成"不可信问题。 |
| [#6011](https://github.com/Hmbown/Codewhale/issues/6011) | **Usage & Tool 诊断：跨会话 Token/工具审计** | 增强 | 持久化 per-component/per-model 核算、缓存命中率、工具错误模式分析 | 👍0 · 评论1 · 创建 09-08 | **⭐⭐⭐⭐** 成本治理与调试的关键缺口，从"会话级"迈向"账户级"可观测。 |
| [#6008](https://github.com/Hmbown/Codewhale/issues/6008) | **`/purge` 新增 Offload/Swap 操作** | 增强 | 虚拟内存式上下文驱逐，保留语义而非硬删除/压缩 | 👍0 · 评论1 · 创建 09-08 | **⭐⭐⭐⭐** 长会话上下文管理的架构级创新，对抗上下文窗口硬限制。 |
| [#4168](https://github.com/Hmbown/Codewhale/issues/4168) | **用户自定义 Models 配置段 (`[[models]]`)** | 增强 | 支持本地/私有/自定义模型注册，无需修改编译目录 | 👍0 · 评论1 · 更新 09-08 | **⭐⭐⭐⭐** 扩展性核心需求，两年长期 Issue 近期重获关注，配合 v0.9 架构落地。 |

---

## 4. 重要 PR 进展（精选 3 条）

| # | 标题 | 作者 | 状态 | 核心变更 | 影响面 |
|---|---|---|---|---|---|
| [#6012](https://github.com/Hmbown/Codewhale/pull/6012) | **fix(session): 跳过运行时包装生成自动标题** | SparkofSpike | 🟢 Open | 修复标题中出现 `<codewhale:runtime_event...>` 内部标记，仅提取真实用户提示词 | Session 命名质量，用户信任度 |
| [#6002](https://github.com/Hmbown/Codewhale/pull/6002) | **集成 Codewhale 0.9.13 贡献者修复与发布验证** | Hmbown | 🟢 Open | **超大型集成 PR**：Provider 分页/精准路由、OpenRouter 厂商选择、输出限制、定价校验、Computer Use 打包修复 | **核心发布阻塞项**，聚合过去数周社区贡献 |
| [#5982](https://github.com/Hmbown/Codewhale/pull/5982) | **feat(tui): 确认式 Opt-out 模型绑定密钥脱敏** | SparkofSpike | 🟢 Open | 新增 `[redaction] model_bound = false`，允许开发场景粘贴 API Key 等类密钥字符串 | 开发体验，安全与易用平衡 |

---

## 5. 功能需求趋势洞察

从 11 个活跃 Issue 中提炼出的 **四大核心演进方向**：

1.  **Provider 生态的"生产级"补全**  
    *关键词：分页、定价覆盖、厂商路由、模型目录完整性*  
    社区不再满足于"能连上"，要求 **目录完整性（#6009）**、**成本透明（#5976）**、**路由精细化控制（#6007）**。这是从原型走向生产基础设施的必经之路。

2.  **长会话与多智能体的上下文/状态管理**  
    *关键词：虚拟内存 Offload（#6008）、Goal Gates 验证（#6013）、Fleet 反停滞（#6015）、Session Hooks（#6004）*  
    随上下文窗口与任务复杂度增长，**状态持久化、语义级驱逐、自主循环可靠性** 成为核心竞争力。

3.  **可配置性与扩展性下沉至配置层**  
    *关键词：`[[models]]` 用户自定义（#4168）、`[redaction]` 策略（#5982）、Gate 默认开关（#6013）*  
    趋势是 **将硬编码行为迁移至声明式配置**，实现"零代码定制"，降低维护者与用户的耦合。

4.  **开发者体验的"死角"清理**  
    *关键词：Session Picker UX（#6014）、Slash Command 历史（#6006）、跨会话审计（#6011）*  
    高频交互细节（历史、选择器、诊断）的打磨，直接决定日留存与口碑。

---

## 6. 开发者关注点与痛点总结

| 痛点/需求 | 典型 Issue/PR | 社区呼声特征 |
|---|---|---|
| **计费/定价数据不可信** | #5976 | 创始人亲自报告，强调"目录里有数据却显示 unknown"，**数据管道断层** 是信任杀手。 |
| **模型发现能力受限** | #6009 | 分页缺失导致大厂模型列表截断，**基础设施完备性** 优于新功能开发。 |
| **自动化集成缺乏状态触点** | #6004 | Hook 体系缺失会话级状态机事件，**外部编排/监控系统无法接入**。 |
| **长任务不可控/不可审计** | #6013, #6011 | Goal 循环依赖模型自报；Token 成本会话级黑盒，**可观测性与可验证性** 严重滞后。 |
| **开发场景与安全策略冲突** | #5982 | 强制脱敏阻断合法开发流（粘贴 Key），需**显式、确认式的 Opt-out 机制**。 |
| **多智能体默认配置不生产可用** | #6015 | 只读角色默认参数导致 Token 空转，**主张"开箱即用的最优默认值"而非文档化调参**。 |

---

> **下一步关注点**：PR #6002 的合并节奏将决定 v0.9.13 发布窗口；#5976 定价修复是否纳入该版本；#6004 Hook 事件设计能否在近期迭代中落地。

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

# ComfyUI 社区动态日报
**日期：2026-09-09**

---

## 1. 今日速览

过去 24 小时内 ComfyUI 仓库无新版本发布，但社区活跃度依然很高：动态显存（Dynamic VRAM）相关的用户痛点持续发酵，已衍生出多个衍生 Issue；MiniMax H3 模型在 denoise mask、VAE 解码、参考视频等场景下的回归问题集中爆发，多个修复 PR 已合并或正在审查；同时，OpenAI/微软/OpenRouter 等多家厂商的新模型（GPT Image 2.5、mai-image-2.6 等）正在以 Partner Nodes 形式快速接入。

---

## 2. 版本发布

**无新版本发布。** 过去 24 小时未检测到官方 Release。

---

## 3. 社区热点 Issues

| # | Issue | 链接 | 重要性 |
|---|-------|------|--------|
| 1 | **#14396 Dynamic Vram** – 用户（RTX 4070s）报告开启 Dynamic VRAM 后生成速度显著下降，呼吁提供禁用选项 | [#14396](https://github.com/Comfy-Org/ComfyUI/issues/14396) | 评论数 24，长期悬而未决的性能争议 |
| 2 | **#11546 amdgpu-arch.exe 硬编码 python.exe 路径** | [#11546](https://github.com/Comfy-Org/ComfyUI/issues/11546) | 👍 7，影响 AMD 平台安装/分发链路 |
| 3 | **#15452 Dynamic VRAM 复用模型产生 NaN/黑图** | [#15452](https://github.com/Comfy-Org/ComfyUI/issues/15452) | 与 #14396 同源问题，揭示 Dynamic VRAM 缺陷面 |
| 4 | **#12118 AMD 6900XT 模型加载崩溃** | [#12118](https://github.com/Comfy-Org/ComfyUI/issues/12118) | AMD GPU 兼容性老问题，仍未根治 |
| 5 | **#16155 MiniMax H3 Ref2VA 语音克隆输出乱码** | [#16155](https://github.com/Comfy-Org/ComfyUI/issues/16155) | 评论 8，影响 H3 语音克隆核心工作流 |
| 6 | **#14271 RuntimeError: normalized_shape=[2560]** | [#14271](https://github.com/Comfy-Org/ComfyUI/issues/14271) | 已 CLOSED，典型 shape mismatch 用例归档 |
| 7 | **#15653 9060xt 16G CUDA invalid argument** | [#15653](https://github.com/Comfy-Org/ComfyUI/issues/15653) | 新显卡兼容性错误，需排查驱动/PyTorch |
| 8 | **#16151 "Everything is broken af"** | [#16151](https://github.com/Comfy-Org/ComfyUI/issues/16151) | 反映近期版本回归引发的整体体验下滑 |
| 9 | **#16088 [Feature] 支持 LLaDA-Image** | [#16088](https://github.com/Comfy-Org/ComfyUI/issues/16088) | 社区对新原生多模态模型呼声 |
| 10 | **#16181 Wan2.2 FunControl ref_image RoPE 崩溃** | [#16181](https://github.com/Comfy-Org/ComfyUI/issues/16181) | 已有修复 PR (#16182)，验证类高优 |

**社区反应观察**：
- 「Dynamic VRAM」已成为近期情绪最强烈的话题，多位用户呼吁增加硬开关或回退路径；
- AMD 用户在多张显卡（6900XT、9070XT）持续遭遇崩溃类问题，长期处于低优先级但实际影响面广；
- MiniMax H3 相关 Bug 自 v0.34.0 起集中暴露，社区反馈密集。

---

## 4. 重要 PR 进展

| # | PR | 内容摘要 | 链接 |
|---|----|---------|------|
| 1 | **#15988 Fix MiniMax H3 denoise mask velocity conversion** – 修复 masked video/audio x0 转换 | 已 CLOSED | [#15988](https://github.com/Comfy-Org/ComfyUI/pull/15988) |
| 2 | **#16190 feat(OpenAI): add GPT Image 2.5 Flare & Sunburst** – Partner Nodes 新增 2 个 OpenAI 模型 | OPEN | [#16190](https://github.com/Comfy-Org/ComfyUI/pull/16190) |
| 3 | **#16176 LTXVAddLatentGuide** – 允许 LTXV 直接钉入已编码 latent 作为 guide，避免 VAE round trip | CLOSED | [#16176](https://github.com/Comfy-Org/ComfyUI/pull/16176) |
| 4 | **#16167 Custom Node 治理策略（governance）强制签名执行** | OPEN | [#16167](https://github.com/Comfy-Org/ComfyUI/pull/16167) |
| 5 | **#16188 feat(OpenRouter): add Microsoft mai-image-2.6** | OPEN | [#16188](https://github.com/Comfy-Org/ComfyUI/pull/16188) |
| 6 | **#15952 Honor gated attention config for LTXAV** – 修复 LTXAV 加载 `apply_gated_attention=True` checkpoint 报 unexpected key | OPEN | [#15952](https://github.com/Comfy-Org/ComfyUI/pull/15952) |
| 7 | **#16187 MiniMax-H3 VAE 优化** – 通过 comfy-kitchen kernel 加速 CausalConv3d | OPEN | [#16187](https://github.com/Comfy-Org/ComfyUI/pull/16187) |
| 8 | **#16182 Fix apply_rope shape crash in Wan ref latent** – 修复 #16181 | OPEN | [#16182](https://github.com/Comfy-Org/ComfyUI/pull/16182) |
| 9 | **#16186 Update workflow templates to v0.11.56** – 新增 H3 Fun ControlNet、GPT-6 Astra，更新 30+ 工作流 | OPEN | [#16186](https://github.com/Comfy-Org/ComfyUI/pull/16186) |
| 10 | **#15623 Initial qwen3/3.5/3.8 CUDA Graphs (CORE-390)** – Qwen3 系列原生 CUDA Graph 加速 | OPEN | [#15623](https://github.com/Comfy-Org/ComfyUI/pull/15623) |

**合并亮点**：kijai 提交的 #16185（修复量化文本编码器 matmul 与 Gemma4 prefill 缓存）以及 comfyanonymous 本人提交的 #16189（量化 MM 仅作用于文本生成）双双合并，是今日质量最高的修复组合。

---

## 5. 功能需求趋势

从过去 24 小时活跃 Issue 与 PR 中可归纳以下社区焦点：

1. **Dynamic VRAM 治理 / 提供禁用开关** – 性能与稳定性的权衡已是头号诉求。
2. **MiniMax H3 全链路稳定性** – VAE、denoise mask、Ref2VA、keyframe 布局等模块同步暴露问题，生态进入快速迭代期。
3. **新模型接入**
   - OpenAI：GPT Image 2.5 Flare / Sunburst
   - 微软 via OpenRouter：`mai-image-2.6`
   - LLaDA-Image（社区请求原生支持）
   - Pixal3D multiview（kijai PR #16048 已合并）
4. **Wan 2.2 / Wan VACE 系列增强** – FunControl 参考图、ControlNet、Animate、Dancer、FLF2V 等变体集中发力。
5. **企业级治理 (Governance)** – Partner 节点与受控构建的安全签名执行。
6. **工作流模板与蓝图扩展** – LTX-2.5、Mage-Flow、SeedVR2、Krea-2 等新模型蓝图大批量新增。

---

## 6. 开发者关注点

- **痛点：显存/兼容性回归**
  - Dynamic VRAM 启用后速度与画质双重崩坏，缺少快速回退机制；
  - AMD（Windows + ROCm）路径在新驱动/新卡上反复出现崩溃与硬编码路径问题。
- **痛点：近期版本质量波动**
  - 「Everything is broken」类抱怨表明 v0.34+ 周边回归较密集；维护者正通过 kijai、comfyanonymous、TwoAbove 等核心贡献者连续 PR 修复。
- **高频需求**
  - **量化路径的精细化**：文本编码器与文本生成使用不同 MM 策略已成共识，避免一刀切导致性能损失；
  - **RoPE / shape broadcasting 健壮性**：Wan 与 LTX 系列多次因奇数空间尺寸触发 apply_rope broadcast 异常；
  - **CUDA Graph 覆盖度**：Qwen3 系列原生 CUDA Graph 的引入预示更多模型将获得「开箱即加速」；
  - **更精简的便携包**：#16163 持续从便携 Windows 安装中剥离 workflow media，反映对分发体积的重视。
- **开发者关系生态**
  - Partner Nodes 流水线运转良好（bigcat88 单日 2 PR）；
  - 自动化 bot（cloud-code-bot、comfyui-wiki）维持高频低风险变更，分摊了维护压力。

---

*报告生成基于 GitHub 公开数据，仅供参考；如需对特定 Issue/PR 做深度解读，请告知 Issue/PR 编号。*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama 社区动态日报 — 2026‑09‑09**  
*数据来源：github.com/ollama/ollama（过去 24 小时内更新的 Issues 与 PR）*  

---

## 今日速览  
- 今日没有新版本发布，社区活动集中在 **Bug 修复**、**功能增强** 与 **API 兼容性** 三个方向上。  
- 多个与模型加载、思考链展示以及网络暴露配置相关的 Issue 获得显著点赞与讨论，表明用户对更稳定的本地/云端使用体验和更细粒度的控制有强烈需求。  
- 开发者正在积极提交改进 PR，诸如 **上下文压缩重试**、**思考块保留**、**开发者角色消息透传** 以及 **跨平台（MLX、AMD ROCm）适配**，显示出对性能、可靠性和生态集成的持续投入。

---

## 版本发布  
> 本次监测窗口内未有新版本发布，故本节省略。

---

## 社区热点 Issues（共选 10 条）  

| # | 标题 & 链接 | 为何重要 | 社区反应 |
|---|-------------|----------|----------|
| #17778 | [bug] qwen 3.8 reports error during query: **Error: ResponseError during chat streaming: no user query found in messages** | 暴露了在长上下文（205k）下使用工具链时的解析缺陷，直接影响代理式工作流的可靠性。 | 25 条评论，👍23；多位用户确认同样问题，期待尽快修复。 |
| #17782 | [bug, amd] qwen3.8:27b **Could not load "TensileLibrary_lazy_gfx1200.dat”** (RX 9060 XT) | 指出 AMD ROCm 环境下的库加载失败，限制了显卡用户使用最新 Qwen 模型。 | 虽只有 👍0，但评论中提供了详细日志，显示该硬件用户群体亟待支持。 |
| #18094 | [bug] gemma3:12b: **structured output (`format`) truncates prematurely on double‑quoted terms** | 结构化输出是生成可解析 JSON 的关键，提前截断会导致下游解析失败。 | 👍0，但评论中演示了复现步骤，提升了issue的优先级。 |
| #18297 | [bug] Does Ollama support **IQ3_S quantization** for Qwen3.8‑27B‑GSQ‑RCO‑GGUF? Returns empty content | 新量化方案若不被支持，将阻碍用户在受限显存环境下部署大模型。 | 👍0，但有用户尝试后反馈空内容，强烈呼吁加入该量化支持。 |
| #18305 | [responses] openai: `/v1/responses` silently drops **developer‑role input items** | 开发者角色是自定义系统指令的重要载体，沉默丢失会导致行为偏离预期。 | 👍0，却有开发者在评论中指出此问题破坏了自定义代理的可靠性。 |
| #162 | [feature request] **Don't automatically start on startup / have an option to disable this** | 长期困扰 macOS/Windows 用户的自启行为，缺乏关闭选项影响开机速度与资源占用。 | 67 条评论，👍117，社区呼声最高的功能请求之一。 |
| #14259 | [documentation] Chat history and embedding truncation happens **silently** with no user‑visible indication | 没有提示的上下文裁切会让用户误以为模型记忆完整，实际信息丢失。 | 👍3，评论建议在日志或 UI 中加入提示。 |
| #11295 | [feature request] **Configurable OLLAMA_ORIGINS for Network Exposure** | 随着网络暴露功能的普及，用户需要灵活控制可访问来源以提升安全性。 | 👍0，但评论中多次提到在企业内部署时的刚性需求。 |
| #16240 | [feature request] Ability to set template parameters like **`preserve_thinking`** via OpenAI‑completions API | 思考链保留是高级推理场景的关键，目前只能通过 Modelfile 设置，缺乏运行时调节。 | 👍1，评论展示了在多轮对话中需要动态开启/关闭思考的诉求。 |
| #16821 | [closed] [bug] Gemma and Qwen models not working with **Native Function Calling** in OpenWebUI | 已关闭但背景凸显了函数调用在不同模型间的不一致，仍是用户关注的兼容性点。 | 👍0，历史评论表明此类问题在社区中反复出现。 |

---

## 重要 PR 进展（共选 10 条）  

| # | 标题 & 链接 | 功能或修复内容 | 影响 |
|---|-------------|----------------|------|
| #18326 | [anthropic] `output_config.effort` **without a thinking block should disable thinking** | 当未提供 thinking 块时，强制关闭思考模式，防止不必要的开销。 | 提升 API 调用的可预测性与性能。 |
| #18324 | [server] **retry compaction after context overflow** | 在上下文压缩导致超限时自动重试并删减约 20% 最老内容。 | 减少因压缩失败导致的对话中断。 |
| #18323 | [app] **open Codex by default for Ollama launches** | 启动时自动打开 ChatGPT 的 Codex 模式，简化开发者工作流。 | 改善首次使用体验，降低配置门槛。 |
| #18320 | [app] **configure allowed browser origins in settings** | 在 GUI 中新增 “Allowed browser origins” 输入框，对应 `OLLAMA_ORIGINS` 环境变量。 | 让非技术用户也能安全地进行网络暴露配置。 |
| #18315 | [template] **preserve developer instructions in Go templates** | 将 developer-role 消息映射为 system 消息，确保它们在模板中生效。 | 修复 #18305 所报告的沉默丢失问题。 |
| #18318 | [api] **use value receivers for tool String methods** | 修复因指针接收者导致的工具 schema 渲染异常（如 #14601）。 | 提高工具调用的可靠性，特别是对 Qwen 系列。 |
| #18316 | **Enhance Ollama integration with n8n workflows, ComfyUI examples, and documentation** | 提供 n8n、ComfyUI 的示例工作流及相关文档。 | 加速 Ollama 在自动化与可视化编排中的采用。 |
| #18296 | [openai] **use `tsc_` prefix for tool search call IDs** | 采用 OpenAI 要求的前缀，避免在切换模型时的 ID 冲突。 | 改善多分模型对话的兼容性。 |
| #18263 | [mlxrunner] **support Qwen static YaRN contexts** | 解析 Qwen3.5/3.8 的静态 YaRN 元数据，并将其应用于文本与多模态 RoPE。 | 让 MLX 后端能够利用更长的上下文而不失精度。 |
| #18319 | [fix] **data races in progress and sched** | 通过对 render loop 和 scheduler 中的共享状态加锁，消除竞态。 | 提升并发稳定性，减少偶发崩溃。 |

---

## 功能需求趋势（从所有 Issues 中提炼）  

| 趋势 | 体现的 Issues / 代表性诉求 |
|------|---------------------------|
| **启动与自启控制** | #162（禁用自启） – 用户希望在开机时不自动运行 Ollama，以节约资源。 |
| **网络暴露与安全配置** | #11295（可配置 OLLAMA_ORIGINS）、#18320（GUI 设置来源） – 随着远程调用增多，对来源白名单的细粒度控制需求上升。 |
| **思考链（thinking）透明化** | #16240（通过 API 设置 `preserve_thinking`）、#18209（TUI 中展示思考块）、#18326（输出努力控制思考） – 想在对话中随时查看或禁用模型的内部推理过程。 |
| **工具调用与 API 一致性** | #17778（无 user query 时 500 错误）、#18305（developer role 被静默丢失）、#18318（tool String 修复） – 对 OpenAI 兼容接口的可靠性提出更高要求。 |
| **模型兼容性与硬件支持** | #17782（AMD ROCm 库加载）、#18297（IQ3_S 量化支持）、#18094（Gemma 结构化输出截断） – 用户期待更广的显卡（尤其是 AMD）和新量化方案的支持。 |
| **上下文管理与提示** | #14259（静默截断）、#18324（压缩重试） – 对上下文溢出时的可见反馈与自动恢复机制需求增加。 |
| **生态集成示例** | #18316（n8n、ComfyUI 示例） – 社区希望得到现成的工作流模板以降低集成门槛。 |
| **文档与错误提示** | #14259、#16821（已关闭但提示函数调用问题） – 希望在出现错误时得到更明确的提示或日志等级。 |

---

## 开发者关注点（痛点 & 高频需求）  

1. **启动行为的可配置性** – 多次请求在托盘/服务模式下提供“不随系统启动”选项（#162），表明后台服务化需求强烈。  
2. **硬件适配问题** – AMD ROCm 库加载失败（#17782）以及对新量化方案（IQ3_S）的支持需求（#18297）反映出用户在非 NVIDIA 平台上使用大模型的迫切愿望。  
3. **思考链的可见与可控** – 既想在 TUI / 桌面应用中查看思考过程（#18209），也想通过 API 动态开启/关闭保存思考（#16240、#18326），说明高级推理场景对调试与成本控制都很重要。  
4. **API 细节的一致性与透明度** – 开发者角色被静默丢失（#18305）、工具调用在特定情况下返回 500 错误（#17778）、以及工具 ID 前缀不匹配（#18296）等都指向对 OpenAI 兼容层的严谨性要求。  
5. **上下文管理的可见性** – 用户对静默截断感到困惑（#14259），期望在 UI 或日志中得到明确提示，以及在压缩失败时能够自动恢复（#18324）。  
6. **网络暴露的安全配置** – 随着本地服务被更多前端调用，能够通过图形界面设置 `OLLAMA_ORIGINS` 成为安全基础需求（#11295、#18320）。  
7. **生态集成的示范文档** – 社区希望得到更多现成的工作流（n8n、ComfyUI）和最佳实践文档，以降低在实际产品中的接入成本（#18316）。  

> 总体而言，围绕**启动控制、硬件兼容性、思考链透明化、API 一致性以及安全可配置的网络暴露**展开的讨论与需求最为活跃，后续版本若能在这些方面取得实质性进展，将极大提升社区满意度与 Ollama 在企业及个人开发场景的采用度。  

---  

*以上内容基于过去 24 小时内 GitHub 更新的 Issues 与 PR 数据整理而生，供技术开发者快速捕捉社区动态。*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

# llama.cpp 社区动态日报
**日期：2026-09-09**

---

## 一、今日速览

今日 llama.cpp 社区发布 10 个新版本（b10853–b10867），主线工作集中在 **Vulkan 后端融合优化、iGPU 默认行为修正、MoE/MTP 模型支持**；社区热点则集中在 CUDA/Vulkan 后端的稳定性问题、MTP（Multi-Token Prediction）相关 Bug，以及对 GLM5.3、XDNA 后端、扩散模型 GGUF 等新特性需求的持续讨论。

---

## 二、版本发布

今日连续发布了 **b10853–b10867 共 10 个 build**，重点更新如下：

| 版本 | 关键变更 |
|---|---|
| **b10867** | iGPU 默认禁用 lazy tensor loading，修复 iGPU 性能回归 (#28326) |
| **b10865** | 回滚 HIP 构建中 `prop.integrated` 的恢复 (#28604) |
| **b10864** | `server` checkpoint 驱逐策略优化，避免短 prompt 下被全部清空 (#28302) |
| **b10863** | Metal: 修复 `mul_mv_iq3_xxs` 在 `ne00 < 1024` 时的半空闲 simdgroup 问题 |
| **b10859** | 修复多个编译错误（缺失头文件） |
| **b10858** | Vulkan: 融合 UNARY(GELU/SIGMOID/SILU/SOFTPLUS) + MUL 算子 |
| **b10857** | 修复 Vulkan-Hpp 在 32 位目标的句柄使用问题 |
| **b10856** | chat: 将 14 个模板解析器拆分到 `common/parsers` |
| **b10855** | OpenCL: 正确处理 `conv2d` 非连续输入 |
| **b10853** | model: 支持 **Kimi-K3** 循环状态回滚 (#28466) |

➡️ 详见 [llama.cpp Releases](https://github.com/ggml-org/llama.cpp/releases)

---

## 三、社区热点 Issues（精选 10 条）

1. **#18363 [CLOSED] – CUDA mmq 在 compute capability 120 下编译失败**（33 评论）  
   高通 Adreno X1 等新 GPU 构建链上长期存在的编译问题，终于关闭。  
   🔗 [Issue #18363](https://github.com/ggml-org/llama.cpp/issues/18363)

2. **#21725 [OPEN] – Feature Request: XDNA 后端**（26 评论，👍 32）  
   社区呼声最高的后端扩展之一，希望复用 Ryzen AI 的 XDNA NPU。  
   🔗 [Issue #21725](https://github.com/ggml-org/llama.cpp/issues/21725)

3. **#23268 [CLOSED] – Speculative Decoding 在 Vulkan 上偶发超时**（19 评论）  
   Qwen3.6 MoE 模型 + AMD 395 GPU 下投机解码间歇超时，已关闭。  
   🔗 [Issue #23268](https://github.com/ggml-org/llama.cpp/issues/23268)

4. **#28247 [OPEN] – Vulkan 在 Intel Arc A770 跑 Qwen3.8 flash-next 触发 `maxComputeWorkGroupCount` 断言**（15 评论）  
   Vulkan 工作组计数超过 Intel 驱动上限，影响 Qwen 新模型的可用性。  
   🔗 [Issue #28247](https://github.com/ggml-org/llama.cpp/issues/28247)

5. **#26845 [CLOSED] – SYCL 后端处理第二条 prompt 输出乱码**（15 评论）  
   涉及 Intel Arc Pro B60 + KAT-Coder 模型，对 SYCL 路径健壮性的持续质疑。  
   🔗 [Issue #26845](https://github.com/ggml-org/llama.cpp/issues/26845)

6. **#26447 [OPEN] – Vega 8 iGPU 在 ~50K context 时 Vulkan 报 `ErrorDeviceLost`**（12 评论）  
   Linux + UMA 架构下长上下文推理的稳定性问题，与 iGPU 显存回收策略有关。  
   🔗 [Issue #26447](https://github.com/ggml-org/llama.cpp/issues/26447)

7. **#28522 [OPEN] – 跨多个 Qwen 模型的并行 `tool_calls` 错乱或挂起**（8 评论）  
   ~48 个可选参数的 tool 上多工具调用解析异常，是 Function Calling 的稳定性热点。  
   🔗 [Issue #28522](https://github.com/ggml-org/llama.cpp/issues/28522)

8. **#26425 [OPEN] – MTP 跨请求保留状态导致 Qwen3.6-35B-A3B-MTP 输出非确定 / 退化**（8 评论）  
   MTP 模块的缓存隔离问题，影响服务化部署的关键可靠性指标。  
   🔗 [Issue #26425](https://github.com/ggml-org/llama.cpp/issues/26425)

9. **#27910 [OPEN] – Qwen3.8-27B Q6_K 在 RTX 5090 上触发整卡 GSP 复位**（6 评论）  
   Blackwell 旗舰卡在 Linux 上多请求推理后黑屏，反映出 NVIDIA 驱动 / GSP 固件层面的兼容问题。  
   🔗 [Issue #27910](https://github.com/ggml-org/llama.cpp/issues/27910)

10. **#28541 [OPEN] – RFC: 基于扩散 GGUF 的图像/视频/音频生成（LTX-2）**（6 评论）  
    社区首次正式提出在 llama.cpp 生态里承载 **Diffusion 模型** 的愿景，意义深远。  
    🔗 [Issue #28541](https://github.com/ggml-org/llama.cpp/issues/28541)

> 备选关注：**#27168**（SYCL/OpenCL 多 GPU P2P 不支持）、**#28211**（RDNA3.5 gfx1151 logits 错误）、**#27922**（支持 GLM5.3 flash，👍 14）、**#28565**（Intel Mac Metal 多物理 GPU）。

---

## 四、重要 PR 进展（精选 10 条）

1. **#28326 [MERGED] – iGPU 默认禁用 lazy tensor loading**  
   重构 `auto` lazy mode 语义：`auto` 自动选最合适模式；保留 `large` / `all` 显式开关。已在 b10867 发布。  
   🔗 [PR #28326](https://github.com/ggml-org/llama.cpp/pull/28326)

2. **#28620 [OPEN] – jinja: 将 `in` 的 null 左操作数视为普通查找**  
   修复 Jinja 模板中 `reasoning_effort in {...}` 默认值为 `None` 时的解析失败，提升 Qwen/DeepSeek 模板兼容性。  
   🔗 [PR #28620](https://github.com/ggml-org/llama.cpp/pull/28620)

3. **#28101 [OPEN] – Vulkan: 为 GPU profiler 添加 command-buffer debug label**  
   在 `vkCmdDispatch` 中嵌入操作名，使 RenderDoc/Profiler 能区分算子，对 Vulkan 性能调优极有价值。  
   🔗 [PR #28101](https://github.com/ggml-org/llama.cpp/pull/28101)

4. **#28462 [OPEN] – cmake: build-info 只读取 llama.cpp 源码树**  
   修复发布 tarball 在父目录存在 git repo 时被错误识别的问题，关 #28397。  
   🔗 [PR #28462](https://github.com/ggml-org/llama.cpp/pull/28462)

5. **#27861 [OPEN] – GPU-resident LRU cache for host-offloaded MoE expert weights**  
   为 `-ot ...=CPU` / `-ncmoe` 场景下解码瓶颈提供 GPU 端 LRU 缓存，是当前 MoE 大模型部署的核心优化方向。  
   🔗 [PR #27861](https://github.com/ggml-org/llama.cpp/pull/27861)

6. **#28414 [OPEN] – `--prefetch-experts-slots`：MoE 专家权重的 lookahead H2D 预取**  
   解码时按未来 N 个 token 提前把 host-resident 专家权重搬上 GPU，进一步缓解 MoE 带宽瓶颈。  
   🔗 [PR #28414](https://github.com/ggml-org/llama.cpp/pull/28414)

7. **#26004 [OPEN] – server: 在 slot save/restore 之间保留 context checkpoints**  
   修复 SWA / hybrid-recurrent 模型（如 Qwen3-Next）在 slot 恢复后需要全量重新 prefill 的问题。  
   🔗 [PR #26004](https://github.com/ggml-org/llama.cpp/pull/26004)

8. **#26928 [OPEN] – Web UI: 为聊天中生成的文件添加下载按钮**  
   完善 UI 体验，对本地 LLM 应用场景非常实用。  
   🔗 [PR #26928](https://github.com/ggml-org/llama.cpp/pull/26928)

9. **#28618 [OPEN] – Vulkan: context 空闲时在 `cpy_tensor_async` 中使用 CPU 写**  
   规避等待 fence 带来的 ~50μs 开销，提升小算子性能。  
   🔗 [PR #28618](https://github.com/ggml-org/llama.cpp/pull/28618)

10. **#28362 [OPEN] – 在 MSVC cl.exe 下启用 Windows ARM64 构建**  
    让 WoA（Windows on ARM）开发者无需再装 clang 即可原生编译，降低 ARM64 准入门槛。  
    🔗 [PR #28362](https://github.com/ggml-org/llama.cpp/pull/28362)

> 备选关注：**#28617**（Nemotron 3 Super MTPv2 draft head 修复，已 merged）、**#28261**（Streaming tool calls + Jinja 文档）、**#28583**（CI sanitizer 实际跑起来）、**#28579**（API/ABI 兼容性脚本）、**#27625**（HrmTextForCausalLM / DFM Mimir 1B 模型支持）、**#28616 / #28613**（HIP RDNA3.5 MMVQ 调优）。

---

## 五、功能需求趋势

从过去 24 小时的 Issues 与 PR 提炼出社区最关心的方向：

| 方向 | 代表 Issue / PR | 关注度 |
|---|---|---|
| **新模型支持** | GLM5.3 flash (#27922, 👍14)、Kimi-K3 (b10853)、Nemotron 3 Super MTPv2 (#28617)、HrmTextForCausalLM (#27625) | 持续高位 |
| **新硬件后端** | XDNA (#21725, 👍32)、Intel Mac Metal 多 GPU (#28565) | 长期呼声 |
| **MoE 推理性能** | LRU expert cache (#27861)、`--prefetch-experts-slots` (#28414) | 当前焦点 |
| **Vulkan 后端** | UNARY+MUL 融合 (b10858)、debug label (#28101)、长上下文吞吐悬崖 (#27734) | 高 |
| **Function Calling / Agent** | tool_calls 并行解析 (#28522)、DeepSeek DSML 清理 (#28612)、Jinja 模板修复 (#28620) | 上行 |
| **构建 / 工具链** | MSVC ARM64 (#28362)、ccache Docker (#21225)、ABI 校验脚本 (#28579) | 稳态 |
| **扩散 / 多模态生成** | LTX-2 image/video/audio RFC (#28541) | 战略级 |

---

## 六、开发者关注点（痛点与高频需求）

1. **Vulkan 是当前"最热闹但最不稳定"的后端**  
   围绕 Intel Arc、AMD RDNA3 / 3.5、Vega UMA 的 Bug 频出（#28247、#26447、#27734、#27849、#24734、#28234）；同时 Vulkan 优化（融合算子、CPU 写、debug label）也在密集提交。

2. **MTP（Multi-Token Prediction）正成为新模型的关键故障源**  
   Qwen3.6-35B-A3B-MTP、Gemma 4 31B MTP、长短推理问题（#26425、#27296、#24440），几乎每条都涉及跨请求状态泄漏或显存竞争，需后续系统级修复。

3. **MoE 部署的"host-resident 解码"成性能瓶颈**  
   长上下文 + 大 MoE 模型在双卡 / iGPU 上显存吃紧，社区正共同推动 LRU cache + 预取方案。

4. **Blackwell / RTX 5090 的稳定性格外受关注**  
   #27910（驱动级黑屏）、#28581（IQ3_S 在 RTX 5060TI 输出乱码）都是高优先级问题。

5. **iGPU 默认行为需要更"聪明"的启发式**  
   b10867 与 #28160 反映了 `--lazy-mode auto` 在 iGPU 上引发翻车的连锁问题，社区希望 auto 真正做到"按硬件自适应"。

6. **Function Calling 在多工具 / 多参数场景下仍脆弱**  
   #28522 与 #28612 显示无论是 Qwen 还是 DeepSeek V3.2 DSML 模板，都需要更严格的解析容错。

7. **多模态 / 扩散模型 GGUF 进入路线图讨论**  
   #28541（LTX-2）打开了 llama.cpp 走向"统一生成模型运行时"的可能性，是中长期关键信号。

---

*日报基于 GitHub 上 `ggml-org/llama.cpp` 仓库过去 24 小时的 Releases / Issues / Pull Requests 数据生成。*

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*