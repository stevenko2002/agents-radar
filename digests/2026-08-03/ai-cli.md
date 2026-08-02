# AI CLI 工具社区动态日报 2026-08-03

> 生成时间: 2026-08-02 22:17 UTC | 覆盖工具: 12 个

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

# 今日重點摘要（2026-08-03）

1. **Gemini CLI** 发布 nightly 版本 `v0.55.0-nightly.20260802.gf47d6c6f7`：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli/releases)

2. **Qwen Code** 发布 nightly 版本 `v0.21.3-nightly.20260802.184365390`，含 TUI 键盘快捷键文档完善：[QwenLM/qwen-code](https://github.com/QwenLM/qwen-code/releases)

3. **llama.cpp** 连续发布 b10225–b10235，完整落地 DeepSeek V4 的 MTP + DSpark 推测解码、Metal 后端新增 SILU_BACK 与 F16 二元运算、OpenCL 修复 GLU local workgroup 限制：[ggerganov/llama.cpp](https://github.com/ggerganov/llama.cpp)

4. **Kimi Code CLI** 将 `Monitor` 工具合入主分支，支持逐行实时流式 stdout 输出：[MoonshotAI/kimi-cli#2471](https://github.com/MoonshotAI/kimi-cli/pull/2471)

5. **OpenCode** 提交 PR #40180，修复 Zen 模式下 GPT-5.6 Luna/Terra 因地域封锁返回 403 的问题：[anomalyco/opencode#40180](https://github.com/anomalyco/opencode/pull/40180)

6. **ComfyUI** 提交 PR #15231，将 `comfy/logging.py` 重命名为 `comfy/internal_logging.py`，修复与 Python 标准库 `logging` 的循环导入，避免外部自定义节点批量失效：[Comfy-Org/ComfyUI#15231](https://github.com/Comfy-Org/ComfyUI/pull/15231)

7. **Ollama** 提交 PR #17516，修复 llama-server 子进程崩溃后残留 runner 导致 `/api/embed` 挂起的问题：[ollama/ollama#17516](https://github.com/ollama/ollama/pull/17516)

8. **OpenAI Codex** 提交 PR #31781，为远程 exec-server 的 HTTP 响应流增加帧级背压控制，防止大消息导致应用服务器内存堆积：[openai/codex#31781](https://github.com/openai/codex/pull/31781)

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-08-03）

---

## 1. 热门 Skills 排行（按 PR 评论/关注度排序）

| 排名 | Skill | 功能 | 社区讨论热点 | 状态 |
|---|---|---|---|---|
| 1 | [skill-creator 修复集](https://github.com/anthropics/skills/pull/1298) | 修复 `run_eval.py` 召回率始终为 0%、Windows 流读取、触发检测与并行 worker | #556 / #1169 / #1099 / #1050 均围绕同一底层 bug，PR #1298 是集大成修复 | OPEN |
| 2 | [skill-creator 触发检测修复](https://github.com/anthropics/skills/pull/1323) | 修复 `run_eval.py` 无法识别真实 skill 名称及非 Skill 工具提前退出 | 与 #1298 互补，专注 trigger detection 逻辑 | OPEN |
| 3 | [document-typography](https://github.com/anthropics/skills/pull/514) | AI 生成文档的排版质量控制（孤行、寡妇段、编号对齐） | 覆盖 Claude 所有文档输出场景，用户需求高频 | OPEN |
| 4 | [pdf skill 修复](https://github.com/anthropics/skills/pull/538) | 修复 SKILL.md 中 8 处大小写不匹配导致 case-sensitive 文件系统引用失败 | 属于基础设施修复，影响 PDF skill 可用性 | OPEN |
| 5 | [ODT skill](https://github.com/anthropics/skills/pull/486) | OpenDocument 格式文件的创建、模板填充及 ODT→HTML 解析 | 填补开源文档格式支持空白 | OPEN |
| 6 | [frontend-design 优化](https://github.com/anthropics/skills/pull/210) | 提升前端设计 skill 的清晰度与可操作性 | 关注 skill 指令是否真正可被执行 | OPEN |
| 7 | [self-audit skill](https://github.com/anthropics/skills/pull/1367) | AI 输出交付前的机械验证 + 四维推理质量门控 | 新 meta-skill 方向，关注 AI 输出可信度 | OPEN |
| 8 | [color-expert](https://github.com/anthropics/skills/pull/1302) | 覆盖命名系统、色彩空间、对比度等专业色彩知识 | 垂直领域知识 skill 的典型代表 | OPEN |

---

## 2. 社区需求趋势（从 Issues 提炼）

| 需求方向 | 代表 Issue | 说明 |
|---|---|---|
| **工作流自动化与 Agent 治理** | [#412](https://github.com/anthropics/skills/issues/412) | 社区明确提出 AI agent 系统治理技能缺口（策略执行、威胁检测、审计追踪） |
| **测试生成** | [#723](https://github.com/anthropics/skills/pull/723) | testing-patterns skill 覆盖单元测试、React 组件测试全栈 |
| **文档质量与生命周期** | [#514](https://github.com/anthropics/skills/pull/514)、[#1479](https://github.com/anthropics/skills/pull/1479) | 排版控制 + plan-file-hygiene（规划产物无生命周期管理）双线需求 |
| **企业级集成** | [#181](https://github.com/anthropics/skills/pull/181) | SAP-RPT-1-OSS 预测分析 skill，反映企业数据分析需求 |
| **安全与信任** | [#492](https://github.com/anthropics/skills/issues/492) | 社区最关注的安全议题：信任边界滥用（43 评论） |
| **组织内共享** | [#228](https://github.com/anthropics/skills/issues/228) | org-wide skill sharing，8👍，企业协作刚需 |
| **跨平台兼容** | [#1061](https://github.com/anthropics/skills/issues/1061)、[#1099](https://github.com/anthropics/skills/issues/1099) | Windows 兼容性问题持续困扰 skill-creator 生态 |
| **上下文窗口优化** | [#1487](https://github.com/anthropics/skills/issues/1487) | claude-api skill 注入 156k tokens 耗尽上下文，资源效率受关注 |

---

## 3. 高潜力待合并 Skills（评论活跃但尚未合并）

| PR | Skill | 潜力理由 | 链接 |
|---|---|---|---|
| #1298 | skill-creator 综合修复 | 解决 #556 / #1169 等多个长期未决的召回率 bug，影响整个 skill-creator 生态 | [PR #1298](https://github.com/anthropics/skills/pull/1298) |
| #1367 | self-audit skill | 新增 meta-skill 品类，覆盖 AI 输出质量保障，评论活跃 | [PR #1367](https://github.com/anthropics/skills/pull/1367) |
| #1479 | plan-file-hygiene | 直接回应 #1417 提出的规划产物生命周期缺口，社区已讨论 | [PR #1479](https://github.com/anthropics/skills/pull/1479) |
| #1302 | color-expert | 垂直领域知识 skill 模板，示范性强 | [PR #1302](https://github.com/anthropics/skills/pull/1302) |
| #1323 | skill-creator trigger 修复 | 与 #1298 互补，单独看也可快速合并 | [PR #1323](https://github.com/anthropics/skills/pull/1323) |
| #1099 | Windows subprocess 修复 | 解锁 Windows 用户使用 skill-creator 的能力 | [PR #1099](https://github.com/anthropics/skills/pull/1099) |

---

## 4. Skills 生态洞察

> **当前社区最集中的诉求是「让 skill-creator 真正可用」——底层触发检测与跨平台兼容 bug 长期阻塞评价优化循环，叠加安全信任边界与组织级共享两大企业级需求，推动 Skills 从「创意玩具」走向「可信赖的生产工具」。**

---

# Claude Code 社区动态日报

**日期：2026-08-03** | **数据来源：github.com/anthropics/claude-code**

---

## 1. 今日速览

今日社区最为关注的是两大回归性 Bug：**Windows 下 Wof.sys 驱动导致蓝屏**（#32870）以及 **interleaved thinking 模式下 assistant text 被静默丢弃、造成转录数据丢失**（#65620 / #74260 / #80662）。后者已影响多个模型版本和平台，被社区视为高优先级数据完整性问题。此外，桌面端远程控制会话断连无法重连（#83193）也值得关注。整体无新版本发布。

---

## 2. 版本发布

**暂无新版本发布。** 当前最新版本为 **v2.1.220**，多个 Issue 已确认在该版本上复现相关回归问题（如 #81318、#83193）。

---

## 3. 社区热点 Issues（Top 10）

| # | 标题 | 评论 | 👍 | 重要性 |
|---|------|------|-----|--------|
| 1 | [#32870] claude.exe 触发 Windows BSOD（Wof.sys / NtQueryDirectoryFileEx） | 37 | 1 | 🔴 高 — 平台级崩溃，影响 Windows 用户系统稳定性 |
| 2 | [#65620] Pre-tool-call assistant text never emitted（thinking 模式下文本被静默丢弃） | 26 | 15 | 🔴 高 — 跨版本回归，数据丢失，影响多模型 |
| 3 | [#74260] Assistant text blocks silently dropped（adaptive thinking，2.1.201） | 22 | 13 | 🔴 高 — 与 #65620 高度相关，确认影响 transcript JSONL |
| 4 | [#64630] macOS 桌面端登录不使用默认浏览器 | 14 | 18 | 🟡 中 — 桌面端用户体验问题，👍 最高 |
| 5 | [#42002] Terminal scrollback 在长会话中失效（alternate screen buffer） | 2 | 21 | 🟡 中 — 长期未修复的 CLI 体验痛点，社区关注度高 |
| 6 | [#81458] Hook launch failures (exit 127) 静默跳过，无可见信号 | 3 | 0 | 🔴 高 — 6,865 次 guardrail 调用被静默跳过，安全风险 |
| 7 | [#80662] Assistant text 从 transcript 数据层丢失（Opus 4.8 + interleaved thinking） | 3 | 1 | 🔴 高 — 确认非渲染层问题，而是数据持久化层缺失 |
| 8 | [#81318] model:/effort: frontmatter override 对 commands/*.md 和 skills/SKILL.md 静默失效 | 2 | 2 | 🟡 中 — v2.1.220 回归，影响模型控制精度 |
| 9 | [#83193] Remote Control 会话断连后无法重连 | 2 | 1 | 🟡 中 — 桌面端长期运行场景的可靠性问题 |
| 10 | [#83412] Subagents 触发 spend/usage limit 时静默终止，无部分结果回传 | 1 | 0 | 🟡 中 — Agent 编排场景下的数据完整性隐患 |

---

## 4. 重要 PR 进展

| # | 标题 | 说明 |
|---|------|------|
| 1 | [#83374] docs(plugin-dev): add MessageDisplay hook guidance | 补充了 MessageDisplay hook 事件的文档说明，包括触发描述、事件指导和快速参考表，完善插件开发文档 |
| 2 | [#26056] Fix code-review plugin posting to GitHub without `--comment` flag | 加强 guardrails，确保模型在未提供 `--comment` 时可靠停在终端输出；强化步骤 7-9 的条件门控 |
| 3 | [#48343] fix(plugin-dev): make skill-reviewer frontmatter valid YAML | 修复 `skill-reviewer` 的 frontmatter 为合法 YAML（使用 block scalar），解决解析问题 |

---

## 5. 功能需求趋势

从社区 Issues 中提炼出的主要功能方向：

- **Agent View 增强** — 项目级作用域、按仓库分组会话、类似 `statusLine` 的可配置面板（#74139）
- **桌面端体验完善** — Transcript 视图模式跨会话持久化（#76577）、diff viewer 自动刷新（#52740）、Help chat 在受限网络下的降级处理（#83413）
- **安全性与可控性** — Hook 错误可见化与阻断机制（#81458）、权限分类器非确定性阻断的改进（#83390）、red team 安全工具修改工作流支持（#83410）
- **数据完整性** — Transcript 数据层修复（#65620/#74260/#80662）、session disk 可靠性（#83197）、submodule 自动初始化（#83411）
- **多模型 / 多平台兼容** — effort frontmatter 在 agent teams 中传递（#80569）、Windows Git 路径配置（#83407）

---

## 6. 开发者关注点

**高频痛点：**

1. **数据丢失 / 静默丢弃** — interleaved thinking 模式下 assistant text 从 transcript JSONL 中消失，影响调试与审计（#65620 / #74260 / #80662），是当前最严重的回归问题。
2. **Hook 系统可靠性** — Hook 启动失败被标记为 `hook_non_blocking_error` 并静默放行，可能导致安全 guardrail 完全失效（#81458）。
3. **桌面端稳定性** — 长时间运行后崩溃（#83403）、浏览器组件加载失败（#82875）、远程控制断连不可恢复（#83193）。
4. **Session 工作树一致性** — 桌面端创建的 worktree 未初始化 git submodule，导致 CLAUDE.md import 和 hook 静默失效（#83411）。
5. **统计信息不一致** — CLI `/stats` 与桌面端 Home 面板 streak 数据不同步（#83405），影响用户对使用状态的判断。

**值得关注的回归：**
- `model:/effort:` frontmatter 在 v2.1.220 上静默失效（#81318），影响 v2.1.197 → v2.1.220 之间的用户。
- Pre-tool-call assistant text 丢失问题自 2026-06-04 起出现，非 CLI 版本绑定（#65620），暗示底层模型交互层变更引发。

---

*报告生成时间：2026-08-03 | 数据窗口：过去 24 小时*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-08-03**

---

## 一、今日速览

今日无新版本发布，社区讨论热度集中在**桌面端跨平台支持**与**稳定性修复**两大主线。Linux 桌面应用需求持续升温（👍 905），同时 Windows 与 macOS 端出现多个影响生产体验的崩溃与性能退化 Bug。MCP 生态与 Agent 插件的可扩展性成为近期 PR 的核心方向。

---

## 二、版本发布

**暂无新版本发布。**

---

## 三、社区热点 Issues

| 排名 | Issue | 热度 | 关注理由 |
|------|-------|------|----------|
| 1 | [#11023](https://github.com/openai/codex/issues/11023) | 👍 905 / 💬 197 | **Linux 桌面应用请求**：社区最强烈的声音，因 macOS 端功耗问题无法使用，用户迫切期待 Linux 原生桌面客户端。 |
| 2 | [#28969](https://github.com/openai/codex/issues/28969) | 👍 187 / 💬 66 | **禁用 60 秒自动解析**：CLI 用户反馈 `auto-resolve` 机制干扰交互式工作流，呼吁增加配置开关。 |
| 3 | [#3550](https://github.com/openai/codex/issues/3550) | 👍 78 / 💬 31 | **VS Code 工作区隔离**：聊天历史全局化导致多项目混淆，需求已存在近一年仍未解决。 |
| 4 | [#21128](https://github.com/openai/codex/issues/21128) | 👍 20 / 💬 31 | **桌面端对话丢失**：旧项目对话被 recent-50 窗口静默隐藏，严重影响长期项目的上下文连续性。 |
| 5 | [#21700](https://github.com/openai/codex/issues/21700) | 👍 24 / 💬 27 | **Chrome 扩展下架**：Computer Use 依赖的 Chrome 扩展无法从 Web Store 获取，影响自动化工作流。 |
| 6 | [#10090](https://github.com/openai/codex/issues/10090) | 👍 7 / 💬 22 | **Windows 沙箱命令静默失败**：`elevated_windows_sandbox` 导致所有 agent 命令无输出，错误码 `5` 指向权限问题。 |
| 7 | [#25178](https://github.com/openai/codex/issues/25178) | 👍 12 / 💬 21 | **Windows 截图失败**：`SetIsBorderRequired` 接口不支持导致 Computer Use 截图功能在 Win10 22H2 完全失效。 |
| 8 | [#34061](https://github.com/openai/codex/issues/34061) | 💬 17 | **子代理磁盘暴增**：Subagent 模式在 macOS 上产生异常磁盘占用，提示需引入磁盘配额或清理机制。 |
| 9 | [#35259](https://github.com/openai/codex/issues/35259) | 👍 2 / 💬 10 | **积分消耗异常**：wait/status polling 阶段重复进入模型，在 Ultra 多代理场景下浪费 19.8% 的 token 配额。 |
| 10 | [#34863](https://github.com/openai/codex/issues/34863) | 👍 1 / 💬 5 | **应用服务器内存泄漏**：长对话中内联 PNG 数据 URL 导致 rollout JSONL 膨胀至 10.2 GB，应用服务器内存占用达 27 GB + 36 GB swap。 |

---

## 四、重要 PR 进展

| PR | 状态 | 核心变更 |
|----|------|----------|
| [#36635](https://github.com/openai/codex/pull/36635) | CLOSED | 在登录完成通知中暴露引导提示（onboarding hints），优化 OAuth 回调元数据传递，提升首次登录体验。 |
| [#36632](https://github.com/openai/codex/pull/36632) | CLOSED | 修复目标（goal）变更时 SQLite 线程元数据被覆盖的问题，保留线程预览等关键信息。 |
| [#31781](https://github.com/openai/codex/pull/31781) | OPEN | 为远程 exec-server 的 HTTP 响应流增加帧级背压控制，防止大消息导致应用服务器内存堆积。 |
| [#31817](https://github.com/openai/codex/pull/31817) | OPEN | 自动化更新 `models.json`，确保 CLI 与 App 的模型列表保持最新。 |
| [#36544](https://github.com/codex/pull/36544) | CLOSED | 支持 Agent Plugin 在安装过程中以可移植方式部署，解决 dotted name 与版本号路径不兼容问题。 |
| [#36534](https://github.com/openai/codex/pull/36534) | CLOSED | 将 MCP 目录项收集上限从 1,024 提升至 2,048，扩展工具发现能力。 |

---

## 五、功能需求趋势

从 Issues 中提炼出的社区关注方向：

1. **跨平台桌面客户端**：Linux 原生支持（#11023）呼声最高，Windows 与 macOS 端持续报告兼容性与稳定性问题。
2. **IDE 深度集成**：VS Code 工作区/项目级别的聊天隔离（#3550、#33779）需求强烈，反映多项目开发者的组织痛点。
3. **远程与 SSH 工作流**：SSH 远程工作区支持（#21509）与远程会话稳定性（#36189）成为企业用户关注焦点。
4. **浏览器自动化**：Chrome 扩展可用性（#21700、#36278）与 Computer Use 的浏览器集成持续受关注。
5. **MCP 与 Agent 插件生态**：MCP 目录扩容（#36534）与可移植插件安装（#36544）显示平台生态扩展加速。
6. **性能与资源治理**：磁盘使用（#34061）、内存占用（#34863）、网络带宽（#33796）成为高频性能反馈主题。

---

## 六、开发者关注点

**高频痛点总结：**

- **桌面端稳定性**：macOS 崩溃（#27880）、Windows 睡眠后无响应（#36291）、侧边栏冻结（#32371）是影响日常使用的核心问题。
- **订阅与配额管理**：Pro20x 订阅被降级为 Plus 额度（#29968）、$100 计划每周限制异常（#29895）、轮询消耗积分（#35259）引发信任担忧。
- **沙箱与安全执行**：`auto_review` 绕过 `--sandbox read-only`（#36570）、Windows PowerShell PATH 别名导致命令执行失败（#18937）暴露安全与配置边界问题。
- **会话与历史管理**：对话历史丢失（#21128）、SQLite 元数据覆盖（#36632）、多端历史不一致（#36623）影响工作连续性。
- **资源瓶颈**：大上下文恢复触发高频轮询（#32309）、内联图片导致磁盘与内存膨胀（#34863、#34061）需引入更激进的压缩与清理策略。

---

*数据来源：github.com/openai/codex | 报告生成时间：2026-08-03*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：2026-08-03**

---

## 1. 今日速览

Gemini CLI 发布了新的 nightly 版本 `v0.55.0-nightly.20260802.gf47d6c6f7`，持续推进迭代。社区重点关注 subagent 恢复机制异常、generalist agent 卡死等核心问题，同时 Auto Memory 系统的健壮性改进和 AST-aware 工具链优化成为热门讨论方向。

---

## 2. 版本发布

### v0.55.0-nightly.20260802.gf47d6c6f7

| 项目 | 详情 |
|------|------|
| 版本 | v0.55.0-nightly.20260802.gf47d6c6f7 |
| 类型 | Nightly 预览版 |
| Changelog | [查看完整变更](https://github.com/google-gemini/gemini-cli/compare/v0.55.0-nightly.20260801.gf47d6c6f7...v0.55.0-nightly.20260802.gf47d6c6f7) |

> 该版本为 nightly 构建，包含最新的开发进度。建议开发者在测试环境中验证。

---

## 3. 社区热点 Issues

### 🔥 Top 10 值得关注的 Issues

| # | 标题 | 优先级 | 评论 | 链接 |
|---|------|--------|------|------|
| 1 | **Subagent recovery after MAX_TURNS reports GOAL success, hiding interruption** | P1 | 12 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) |
| 2 | **Generalist agent hangs indefinitely on simple operations** | P1 | 8 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) |
| 3 | **Robust component level evaluations (EPIC)** | P1 | 7 | [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) |
| 4 | **Assess AST-aware file reads, search, and mapping value** | P2 | 7 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) |
| 5 | **Gemini does not use skills and sub-agents enough** | P2 | 6 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) |
| 6 | **Model generates synthetic next user turn after denied tool call** | P2 | 5 | [#28621](https://github.com/google-gemini/gemini-cli/issues/28621) |
| 7 | **Stop Auto Memory from retrying low-signal sessions indefinitely** | P2 | 5 | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) |
| 8 | **Shell command execution stuck with "Waiting input" after completion** | P1 | 4 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) |
| 9 | **Add deterministic redaction and reduce Auto Memory logging** | P2 | 4 | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) |
| 10 | **Browser Agent ignores settings.json overrides (e.g., maxTurns)** | P2 | 3 | [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) |

**关键解读：**
- **#22323**（12评论）：Subagent 在达到最大轮次限制后错误报告成功，掩盖了中断真实原因，影响调试和可靠性。
- **#21409**（8👍）：Generalist agent 在简单操作（如文件夹创建）上无限挂起，是高票问题，影响核心工作流。
- **#28621**：新提交的 issue，模型在工具调用被拒绝后生成伪造的用户输入，存在安全隐患。

---

## 4. 重要 PR 进展

### 🚀 Top 10 关键 PR

| # | 标题 | 类型 | 评论 | 链接 |
|---|------|------|------|------|
| 1 | **fix(vscode-ide-companion): stop leaking disposables** | 修复 | - | [#28526](https://github.com/google-gemini/gemini-cli/pull/28526) |
| 2 | **fix(core): prevent boolean thought parts leaking as [Thought: true]** | 修复 | - | [#28624](https://github.com/google-gemini/gemini-cli/pull/28624) |
| 3 | **fix(core): serialize conflicting parallel mutator tools** | 修复 | - | [#27351](https://github.com/google-gemini/gemini-cli/pull/27351) |
| 4 | **fix(core): mitigate data corruption during write_file on massive text** | 修复 | - | [#27320](https://github.com/google-gemini/gemini-cli/pull/27320) |
| 5 | **branch optimize virtual list2** | 性能 | - | [#27070](https://github.com/google-gemini/gemini-cli/pull/27070) |
| 6 | **fix(ci): retry staging-tmp dist-tag removal after npm publish** | CI | - | [#28534](https://github.com/google-gemini/gemini-cli/pull/28534) |
| 7 | **feat: subagent trajectory infrastructure (Stage 1)** | 功能 | - | [#27310](https://github.com/google-gemini/gemini-cli/pull/27310) |
| 8 | **fix(core): route personal OAuth users to stable models for auto aliases** | 修复 | - | [#27131](https://github.com/google-gemini/gemini-cli/pull/27131) |
| 9 | **fix(core): fall back to default model for invalid Gemini model IDs** | 修复 | - | [#27128](https://github.com/google-gemini/gemini-cli/pull/27128) |
| 10 | **fix(cli): show specific macOS seatbelt profile in footer** | 修复 | - | [#27237](https://github.com/google-gemini/gemini-cli/pull/27237) |

**关键解读：**
- **#28526**：修复 VSCode 插件中 `gemini.diff.accept` 和 `onDidChangeWorkspaceFolders` 的内存泄漏问题，提升 IDE 集成稳定性。
- **#28624**：修复内部 thought 部分布尔值泄露为 `[Thought: true]` 文本的问题，改善模型输出可读性。
- **#27351**：修复并行工具调用冲突，确保同一文件的多次编辑串行执行，避免数据竞争。
- **#27320**：修复大文本块（6000+ 字符）写入时的数据损坏问题，增强大文件操作可靠性。
- **#27310**：subagent 轨迹基础设施（第一阶段），为后续 `/chat share` 功能铺路。

---

## 5. 功能需求趋势

从社区 Issues 中提炼出以下热门功能方向：

### 📊 趋势分析

| 方向 | 热度 | 代表 Issues |
|------|------|-------------|
| **Agent 能力增强** | 🔥🔥🔥 | #22323 (subagent 恢复), #21409 (generalist agent), #21968 (skills 使用不足) |
| **AST-aware 工具链** | 🔥🔥 | #22745 (文件读取/搜索), #22746 (代码库映射) |
| **Auto Memory 系统** | 🔥🔥 | #26522 (重试优化), #26525 (脱敏), #26523 (无效补丁处理) |
| **Browser Agent 改进** | 🔥 | #22232 (会话接管), #21983 (wayland 兼容), #22267 (配置覆盖) |
| **IDE 集成** | 🔥 | #28526 (VSCode 修复), #24935 (编辑器退出问题) |
| **性能优化** | 🔥 | #27070 (虚拟列表), #21924 (终端 resize) |
| **安全与沙箱** | 🔥 | #26525 (脱敏), #27235 (rootless 容器), #27237 (seatbelt) |
| **模型路由与验证** | 🔥 | #27131 (OAuth 路由), #27128 (无效模型ID) |

---

## 6. 开发者关注点

### 🎯 高频痛点与需求

#### 1. Subagent 行为可靠性（最高优先级）
- **问题**：subagent 在 MAX_TURNS 限制后错误报告 GOAL 成功，掩盖中断真实状态（#22323）
- **影响**：导致调试困难，任务状态不透明
- **社区反应**：12 条评论，P1 优先级，标记为 need-retesting

#### 2. Agent 卡死与挂起
- **问题**：generalist agent 在简单操作上无限挂起（#21409），shell 命令执行后显示 "Waiting input" 但实际已完成（#25166）
- **影响**：打断开发工作流，资源浪费
- **社区反应**：高票支持（8👍），P1 优先级

#### 3. Auto Memory 系统健壮性
- **问题**：低信号会话无限重试（#26522），敏感信息日志泄露（#26525），无效补丁静默跳过（#26523）
- **影响**：内存占用膨胀，隐私风险，状态不一致
- **社区反应**：SandyTao520 持续推动，P2 优先级

#### 4. 工具执行与数据完整性
- **问题**：并行工具冲突导致数据损坏（#27351），大文本写入损坏（#27320），模型伪造用户输入（#28621）
- **影响**：文件损坏，安全风险
- **社区反应**：P1/P2 优先级，多 PR 跟进修复

#### 5. IDE 集成与体验
- **问题**：VSCode 插件内存泄漏（#28526），终端 resize 闪烁（#21924），外部编辑器退出后界面损坏（#24935）
- **影响**：开发体验中断
- **社区反应**：持续优化中

#### 6. 配置与模型路由
- **问题**：Browser Agent 忽略 settings.json 配置（#22267），个人 OAuth 用户模型路由错误（#27131），无效模型 ID 持久化（#27128）
- **影响**：配置不生效，404/400 错误
- **社区反应**：P1/P2 优先级

---

> **总结**：当前 Gemini CLI 社区的核心关注点集中在 **Agent 行为可靠性**、**数据完整性** 和 **Auto Memory 系统优化** 三个方面。subagent 恢复机制和 generalist agent 卡死问题是最高优先级的阻塞性问题，建议团队优先处理。同时，AST-aware 工具链和 IDE 集成体验的持续改进是社区长期期待的方向。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-08-03** | **数据来源：** `github.com/github/copilot-cli`

---

## 一、今日速览

过去 24 小时内，Copilot CLI 无新版本发布，也无 Pull Request 更新，但社区 Issues 活跃度较高，共 12 条更新。核心关注点集中在 **autopilot 会话状态持久化**、**ACP 协议兼容性**、**跨平台输入与路径处理** 三个方向，反映出用户在高阶自动化与多终端场景下的痛点持续发酵。

---

## 二、版本发布

**无新版本发布。** 当前最新稳定版仍为 1.0.78 系列（参考 #4328 中提及的 1.0.78-2）。社区对 1.0.72→1.0.73 引入的 `view` 工具回归问题（#4202）保持关注。

---

## 三、社区热点 Issues（10 条精选）

### 1. [#4202](https://github.com/github/copilot-cli/issues/4202) — `view` 工具对已存在文件报 "Path does not exist"
- **严重程度：** 高（功能性回归）
- **概述：** Copilot CLI 1.0.73 中内置 `view` 工具对已有文本文件报告路径不存在，而 1.0.71 正常工作。问题始于 1.0.72。
- **社区反应：** 3 条评论，作者提供了受控复现步骤，确认为回归缺陷。

### 2. [#4336](https://github.com/github/copilot-cli/issues/4336) — 取消的输入在 autopilot 模式下仍被当作有效回合处理
- **严重程度：** 高（破坏 autopilot 工作流）
- **概述：** 在 autopilot 模式下取消排队中的用户输入后，被取消的文本会重新出现在后续消息块中，携带原始时间戳，Agent 将其当作正常用户回合处理。
- **社区反应：** 新 Issue，暂无评论，需团队确认 autopilot 的输入队列管理逻辑。

### 3. [#4335](https://github.com/github/copilot-cli/issues/4335) — ACP 模式下 `toolCall.title` 隐藏了实际 shell 命令
- **严重程度：** 高（影响编辑器集成体验）
- **概述：** 在 Agent Context Protocol（ACP）模式（如连接 Zed 编辑器）下，`toolCall.title` 填充的是高层自然语言摘要（如 "Search whole monorepo for double-entry"），而实际执行的 shell 命令被隐藏，导致客户端审批弹窗无法展示具体执行内容。
- **社区反应：** 新 Issue，0 评论，涉及 ACP 协议合规性与安全透明度。

### 4. [#4334](https://github.com/github/copilot-cli/issues/4334) — `Ctrl+S` 暂存的 prompt 在会话切换后丢失
- **严重程度：** 中高（工作流中断）
- **概述：** 用户使用 `Ctrl+S` 暂存未提交的 prompt 后切换会话，返回时 `Ctrl+S` 弹出功能恢复为空，暂存内容消失。
- **社区反应：** 新 Issue，0 评论，影响多会话工作流的可靠性。

### 5. [#4329](https://github.com/github/copilot-cli/issues/4329) — 恢复含 autopilot 的会话后 autopilot 未真正启用
- **严重程度：** 高（状态持久化缺陷）
- **概述：** 会话恢复后状态栏显示 autopilot 已启用，但实际任何需要审批的操作均失败，autopilot 未真正激活。
- **社区反应：** 新 Issue，0 评论，版本 1.0.77 受影响。

### 6. [#4328](https://github.com/github/copilot-cli/issues/4328) — WSL2 下 `Ctrl+H` 被误解释为 `Ctrl+Backspace`（删除单词）
- **严重程度：** 中（输入体验）
- **概述：** 文档中 `Ctrl+H` 定义为"删除前一字符"，但在 WSL2 环境下实际删除整个单词（表现为 `Ctrl+W` 行为），原因是 `WT_SESSION` 环境变量从 Windows Terminal 泄露。
- **社区反应：** 新 Issue，0 评论，影响 WSL2 用户群体的键盘操作一致性。

### 7. [#4292](https://github.com/github/copilot-cli/issues/4292) — tmux 中主题颜色完全异常
- **严重程度：** 中（视觉/可用性）
- **概述：** 在 tmux 中运行 Copilot CLI 时，浅色主题的颜色完全错误；直接在 shell 中运行则正常。
- **社区反应：** 新 Issue，0 评论，附有截图证据，涉及终端颜色协议（256-color / truecolor）适配。

### 8. [#2286](https://github.com/github/copilot-cli/issues/2286) — Windows 上插件安装支持 git symlinks
- **严重程度：** 中（长期未解决的平台兼容性问题）
- **概述：** `copilot plugin install` 在 Windows 上克隆 marketplace 仓库时，Git for Windows 默认 `core.symlinks=false` 导致 git symlink 文本桩无法正确解析。
- **社区反应：** 自 2026-03-25 创建，已有 2 条评论，长期悬而未决。

### 9. [#4332](https://github.com/github/copilot-cli/issues/4332) — 提供静默单次会话 "Memory is disabled" 提示的方式
- **严重程度：** 低（体验优化）
- **概述：** 当 `settings.json` 中 `"memory": false` 时，每个新会话都会打印 "Memory is disabled. Use /memory on to re-enable."，目前无设置可关闭该提示。
- **社区反应：** 新 Issue，0 评论，属于体验层面的功能请求。

### 10. [#4229](https://github.com/github/copilot-cli/issues/4229) — Trust module 相关讨论
- **严重程度：** 中（安全信任链）
- **概述：** 涉及安装脚本（`install.sh`）的信任模块讨论，引用了 copilot 仓库的特定 commit。
- **社区反应：** 自 2026-07-23 创建，0 条评论，安全相关话题需关注。

---

## 四、重要 PR 进展

**过去 24 小时内无 Pull Request 更新。** 建议关注后续 PR 合并动态，尤其是与 #4202（view 工具回归修复）和 #4335（ACP toolCall.title）相关的修复 PR。

---

## 五、功能需求趋势

从近期 Issues 中可提炼出以下社区关注的功能方向：

| 方向 | 代表性 Issues | 热度 |
|------|--------------|------|
| **Autopilot 状态管理与恢复** | #4336, #4329 | 🔥 高 |
| **ACP 协议兼容性与编辑器集成** | #4335 | 🔥 高 |
| **跨平台输入与终端兼容** | #4328, #4292, #4334 | 🔥 高 |
| **Windows 平台支持** | #2286, #4328 | 📈 中高 |
| **Memory 与会话持久化** | #4332, #4334 | 📈 中 |
| **安全与信任机制** | #4229 | 📈 中 |
| **多会话工作流** | #4334, #4336 | 📈 中 |

**趋势洞察：**
- **Autopilot 可靠性** 成为最突出的痛点，用户期望会话状态（含 autopilot 开关）能够正确持久化和恢复。
- **ACP 生态集成** 正在成为新的关注焦点，随着 Zed 等编辑器的接入，协议层的透明度和可控性需求上升。
- **WSL2 / tmux / Windows** 等复杂终端环境下的兼容性问题集中暴露，反映 Copilot CLI 在非标准终端场景的适配仍需加强。

---

## 六、开发者关注点

### 高频痛点
1. **Autopilot 状态不可靠** — 恢复会话后 autopilot 未真正启用（#4329）、取消的输入被错误处理（#4336），直接影响自动化工作流的信任度。
2. **ACP 协议输出不透明** — `toolCall.title` 与实际执行命令脱节（#4335），在安全敏感场景下构成隐患。
3. **跨平台输入处理不一致** — WSL2 下快捷键行为异常（#4328）、tmux 中颜色渲染错误（#4292），影响开发者在复杂终端环境中的体验。

### 高频需求
1. **会话状态持久化** — 包括 prompt 暂存（#4334）、autopilot 状态（#4329）的跨会话保持。
2. **可配置的提示通知** — 用户希望静音重复性提示（#4332），减少干扰。
3. **Windows 平台完整性** — git symlinks 支持（#2286）长期未解决，反映 Windows 用户群体的需求被持续忽视。

### 建议关注
- 团队应优先评估 #4202（view 工具回归）和 #4336（autopilot 输入队列）的修复优先级，两者均属于影响核心功能可用性的缺陷。
- ACP 相关 Issues（#4335）数量虽少但影响深远，建议与编辑器生态合作伙伴协同推进协议层优化。

---

*本日报基于 2026-08-03 抓取的 GitHub 数据生成，所有 Issue 链接指向 `github.com/github/copilot-cli`。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报
**日期：2026-08-03** | 数据来源：`github.com/MoonshotAI/kimi-cli`

---

## 一、今日速览

今日社区动态相对平稳，无新版本发布。共有 **4 条 Issue 更新** 和 **2 条 Pull Request 更新** 进入视野。其中值得关注的是两项长期存在的功能请求（Memory System、Remote Control）在昨日获得较多社区互动，以及两项新提交的 Issue 分别涉及**外部事件唤醒机制**和**Swarm 批量任务容错**这两个较为前沿的使用场景。PR 方面，`Monitor` 工具功能正式合入，`startup banner` 的编码兼容性修复仍在评审中。

---

## 二、版本发布

> 📭 过去 24 小时内无新 Release。

---

## 三、社区热点 Issues

### 1. [#1283] Memory System — 跨会话持久化上下文
| 属性 | 详情 |
|---|---|
| 状态 | OPEN · Enhancement |
| 作者 | CatKang |
| 更新 | 2026-08-02 |
| 评论 | 14 条 · 👍 0 |

**为什么重要：** 这是社区中讨论热度最高的功能请求之一。提议实现一套完整的记忆系统，支持 AI 自动管理的上下文笔记（automatic memory）和用户手动定义的指令（manual memory），使 Kimi Code CLI 能在多次会话之间保持项目模式、用户偏好等长期记忆。14 条评论说明社区对此有持续的讨论和细化需求。

🔗 [MoonshotAI/kimi-cli#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)

---

### 2. [#1282] Remote Control — 从任意设备继续本地会话
| 属性 | 详情 |
|---|---|
| 状态 | OPEN · Enhancement |
| 作者 | CatKang |
| 更新 | 2026-08-02 |
| 评论 | 11 条 · 👍 **24** |

**为什么重要：** 该 Issue 获得了今日最高的 👍 投票数（24 票），是社区最受欢迎的增强请求。核心价值在于允许用户通过手机、平板或浏览器远程接续本地 Kimi Code CLI 会话，实现桌面与移动设备之间的工作流无缝切换。11 条评论表明社区对此功能有较高的期待和讨论。

🔗 [MoonshotAI/kimi-cli#1282](https://github.com/MoonshotAI/kimi-cli/issues/1282)

---

### 3. [#2579] External Wake Channel — 唤醒交互式会话
| 属性 | 详情 |
|---|---|
| 状态 | OPEN · Feature Request |
| 作者 | munich35 |
| 创建 | 2026-08-02 |
| 评论 | 0 |

**为什么重要：** 这是一个全新的使用场景提案。作者描述了通过 `inotifywait` 监听文件系统事件，配合"Agent Mail"系统，让外部进程或远程机器可以向正在运行的 Kimi Code CLI TUI 会话发送 Markdown 消息并触发响应。这对多 Agent 协作和自动化工作流具有重要价值。

🔗 [MoonshotAI/kimi-cli#2579](https://github.com/MoonshotAI/kimi-cli/issues/2579)

---

### 4. [#2578] Swarm 批次中途 403/超时导致半成品丢失
| 属性 | 详情 |
|---|---|
| 状态 | OPEN · Bug/Enhancement |
| 作者 | myagizmaktav |
| 创建 | 2026-08-02 |
| 评论 | 0 |

**为什么重要：** 这是一个影响生产环境稳定性的严重问题。当 Swarm 并行子代理批次在执行中途遭遇 HTTP 403（配额耗尽）或固定超时中断时，受影响的子代理会留下"半成品"工作区（路由文件、样式、服务器函数处于中间状态），且恢复重试会重复消耗 Token，同时损坏的子任务会阻塞整个任务树。该问题对大规模并行编码场景影响显著。

🔗 [MoonshotAI/kimi-cli#2578](https://github.com/MoonshotAI/kimi-cli/issues/2578)

---

## 四、重要 PR 进展

### 1. [#2471] feat(tools): Add Monitor Tool for Per-Line Stdout Streaming ✅ MERGED
| 属性 | 详情 |
|---|---|
| 状态 | **CLOSED**（已合并） |
| 作者 | Nitjsefnie |
| 创建 | 2026-06-22 |
| 更新 | 2026-08-02 |

**功能说明：** 新增 `Monitor` 工具，作为现有后台任务（background task）工具的流式补充。与传统的批量输出不同，`Monitor` 支持逐行实时流式输出 stdout，使开发者能够即时观察长时间运行任务的中间输出，提升调试和监控体验。该 PR 此前无关联 Issue，由作者直接作为功能提案提交。

🔗 [MoonshotAI/kimi-cli#2471](https://github.com/MoonshotAI/kimi-cli/pull/2471)

---

### 2. [#2577] Fix: Startup Banner Crash on Legacy Console Codecs 🔄 OPEN
| 属性 | 详情 |
|---|---|
| 状态 | OPEN |
| 作者 | ayaangazali |
| 创建 | 2026-08-01 |
| 更新 | 2026-08-01 |
| 关联 Issue | #2532 |

**修复说明：** `print_banner` 函数在 `src/kimi_cli/utils/server.py` 中使用裸 `print()` 输出启动横幅，而两个调用方（`web/app.py:374,376` 和 `vis/app.py:128`）在 URL 前拼接了 U+279C（➜）字符。在 GBK 等不支持该 Unicode 字符的旧版终端编码下，会导致程序崩溃。该 PR 修复了此兼容性问题，对中文 Windows 用户尤为重要。

🔗 [MoonshotAI/kimi-cli#2577](https://github.com/MoonshotAI/kimi-cli/pull/2577)

---

## 五、功能需求趋势

从当前 Issues 中可提炼出以下社区关注的功能方向：

| 趋势方向 | 涉及 Issue | 说明 |
|---|---|---|
| **会话记忆与持久化** | #1283 | 跨会话保持上下文和用户偏好，是 CLI 工具向"长期智能体"演进的关键 |
| **多设备/远程工作流** | #1282 | 移动端与桌面端的无缝衔接，反映开发者对灵活工作场景的需求 |
| **多 Agent 协作与事件驱动** | #2579, #2578 | 外部系统触发、Swarm 容错，表明社区已深入使用 Kimi Code CLI 构建自动化 Agent 流水线 |
| **可观测性与调试体验** | #2471 (PR) | 逐行流式输出和监控工具，反映对长时间运行任务的可观测性需求 |
| **终端兼容性** | #2577 | 对老旧终端编码（GBK 等）的兼容修复，说明用户群体覆盖多样化的操作系统环境 |

**总体趋势：** 社区正从"单次交互式 CLI"向**长期运行、多设备协同、Agent 集群化**的方向演进，对容错、记忆、监控等企业级特性需求日益增长。

---

## 六、开发者关注点

### 痛点与高频需求总结：

1. **Swarm 容错机制缺失** — #2578 反映了并行子代理在配额限制或超时中断时缺乏原子性保障和断点续传能力，这是生产环境部署的关键短板。社区期待：子任务状态持久化、失败重试不重复消耗 Token、损坏的中间状态自动回滚或隔离。

2. **会话持久化需求强烈** — #1283（14 条评论）和 #1282（24 👍）共同指向一个核心需求：**让 Kimi Code CLI 具备"记忆"和"远程接入"能力**。这意味着开发者希望 CLI 工具不仅仅是单次命令执行器，而是可持续交互的智能助手。

3. **多 Agent 集成场景** — #2579 提出的"外部唤醒通道"表明，已有用户在构建基于文件系统事件的多 Agent 协作架构，对 CLI 的可编程性和事件驱动接口有明确需求。

4. **跨平台终端兼容性** — #2577 修复的 GBK 编码崩溃问题提醒团队：用户群体包含大量中文 Windows 环境用户，需要持续关注字符编码兼容性。

5. **工具生态完善** — #2471 的合入体现了社区对工具链丰富度的期待，特别是对长时间运行任务的监控和流式反馈能力。

---

*报告生成时间：2026-08-03 | 数据窗口：过去 24 小时*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报

**日期：2026-08-03** | **数据来源：github.com/anomalyco/opencode**

---

## 一、今日速览

- **无新版本发布**，社区焦点集中在内存泄漏与性能优化问题上，其中 Memory Megathread（#20695）持续获得最高关注（121 条评论，94 👍）。
- **Zen 服务中断**引发集中反馈：GPT-5.6 Luna/Terra 模型在 Zen 模式下返回 `unsupported_country_region_territory` 或 `Upstream request failed`（#40162、#39831），社区正通过 PR #40180 尝试修复。
- **Desktop 端首次启动卡死**问题在 Windows 平台上再次出现（#38222、#40170），与此前 #37745 等问题形成系列反馈。

---

## 二、版本发布

> 过去 24 小时内无新 Release。

---

## 三、社区热点 Issues

### 1. [Memory Megathread](https://github.com/anomalyco/opencode/issues/20695)
- **状态**：OPEN | **评论**：121 | **👍**：94
- **重要性**：社区最活跃的讨论集中地，汇总了所有内存相关报告。维护者明确要求社区**不要运行 LLM 自行提出解决方案**，而是专注于收集 heap snapshots。
- **社区反应**：高度协作，开发者主动提供手动/自动快照两种方案的技术讨论。

### 2. [Add Go plan usage/balance API endpoint](https://github.com/anomalyco/opencode/issues/16017)
- **状态**：OPEN | **评论**：27 | **👍**：124
- **重要性**：Go 计划用户希望像 Dashboard 一样通过公开 API 获取订阅用量数据（rolling/weekly/monthly 窗口），是商业化与自托管管理的关键需求。

### 3. [Session context usage (similar to /context in Claude)](https://github.com/anomalyco/opencode/issues/6152)
- **状态**：OPEN | **评论**：20 | **👍**：125
- **重要性**：开发者希望在 TUI 中以对话方式查看当前会话的上下文窗口占用情况，类似 Claude 的 `/context` 指令，是提升可观测性的高票需求。

### 4. [Slow startup regression](https://github.com/anomalyco/opencode/issues/14965)
- **状态**：OPEN | **评论**：17 | **👍**：12
- **重要性**：从 v1.2.1 开始出现启动变慢问题，且在 Ghostty 终端中复现，Alacritty/Kitty 不受影响，疑似终端兼容性问题。

### 5. [Desktop can not see File tree](https://github.com/anomalyco/opencode/issues/30545)
- **状态**：OPEN | **评论**：12
- **重要性**：Desktop v1.15.13 中高级设置里的 File tree 开关无效，重启亦无果，影响桌面端用户体验。

### 6. [OpenCode leaks temporary .so files in /tmp](https://github.com/anomalyco/opencode/issues/28089)
- **状态**：OPEN | **评论**：7 | **👍**：7
- **重要性**：CentOS 7 上 OpenCode 在 `/tmp` 泄漏临时 ELF `.so` 文件，长期运行可消耗数百 GB 磁盘空间，属于严重的资源泄漏 Bug。

### 7. [Zen: gpt-5.6-luna/terra fail with Upstream request failed](https://github.com/anomalyco/opencode/issues/39831)
- **状态**：OPEN | **评论**：3 | **👍**：1
- **重要性**：Zen 提供商下 gpt-5.6-luna 和 gpt-5.6-terra 持续返回 HTTP 403，而同密钥下的 gpt-5.4-nano 等旧模型正常，疑似区域或模型策略变更。

### 8. [TUI plugins silently fail to load (npm spec)](https://github.com/anomalyco/opencode/issues/33884)
- **状态**：OPEN | **评论**：5 | **👍**：1
- **重要性**：v1.17.10 中通过 npm 包规范引用的 TUI 插件静默加载失败，维护者已在 dev 分支回退 OpenTUI 0.4.2 临时缓解，但底层 loader 问题未根治。

### 9. [Bedrock Mantle models unreachable on v2](https://github.com/anomalyco/opencode/issues/40075)
- **状态**：OPEN | **评论**：2
- **重要性**：v2 路径下 Bedrock Mantle 端点 URL 中的 `${AWS_REGION}` 模板变量从未被替换，导致请求发往字面量主机名，所有 Mantle 模型不可达。

### 10. [GPT-5.6 Luna/Terra unsupported_country_region_territory from Hong Kong](https://github.com/anomalyco/opencode/issues/40162)
- **状态**：OPEN | **评论**：2
- **重要性**：香港服务器通过 Zen 访问 GPT-5.6 Luna/Terra 被地理封锁，而其他模型正常，凸显了提供商端区域策略的粒度问题。

---

## 四、重要 PR 进展

### 1. [feat(teach): Add Teach mode for pedagogical workflows](https://github.com/anomalyco/opencode/pull/40184)
- **作者**：ThibaultGH | **状态**：OPEN (WIP/Draft)
- **内容**：响应 #36521 请求，新增 Teach 模式用于教学场景工作流，目前仅包含测试文件待讨论实现方案。

### 2. [fix(zen): strip client IP/geo headers to prevent geoblock](https://github.com/anomalyco/opencode/pull/40180)
- **作者**：muhammadshehzaib | **状态**：OPEN
- **内容**：关闭 #40162 和 #39831。在代理上游请求前剥离客户端 IP/地理/路由头部，缓解 Zen 模式下的地域封锁问题。

### 3. [fix(tui): keep command palette available in questions](https://github.com/anomalyco/opencode/pull/29948)
- **作者**：opencode-agent[bot] | **状态**：OPEN (beta)
- **内容**：使命令面板快捷键在问题提示激活时仍可用，模态对话框打开时禁用，扩展了 TUI 键位测试覆盖。

### 4. [fix(core): route Bedrock packages natively](https://github.com/anomalyco/opencode/pull/40165)
- **作者**：opencode-agent[bot] | **状态**：CLOSED
- **内容**：将 `@ai-sdk/amazon-bedrock` 目录条目映射到原生 Bedrock Converse provider，Mantle 条目映射到 Mantle Chat/Responses provider，移除凭证可用性作为原生路由条件。

### 5. [fix(llm): classify Azure payload-size and image-count 400s as context overflow](https://github.com/anomalyco/opencode/pull/40167)
- **作者**：dotCipher | **状态**：OPEN
- **内容**：扩展 `isContextOverflow()` 的模式匹配列表，将 Azure 的 payload-size 和 image-count 400 错误归类为上下文溢出，触发媒体剥离压缩与重试。

### 6. [fix(schema): encode output format values read back from storage](https://github.com/anomalyco/opencode/pull/40172)
- **作者**：JaviOverflow | **状态**：CLOSED
- **内容**：修复 #40169。`OutputFormatText`/`OutputFormatJsonSchema` 从存储读回时为 plain JSON，导致 `GET /session/:id/message` 返回 400。

### 7. [fix(tui): keep closed tabs closed](https://github.com/anomalyco/opencode/pull/40181)
- **作者**：kitlangton | **状态**：CLOSED
- **内容**：解决多 TUI 进程共享会话标签页状态的问题，关闭一个 TUI 中的标签页不再影响其他 TUI 的路由。

### 8. [fix(core): execute renamed tool definitions](https://github.com/anomalyco/opencode/pull/40174)
- **作者**：opencode-agent[bot] | **状态**：OPEN
- **内容**：保留会话上下文 hook 重命名后的工具实现，注册 renamed definition 供模型调用，同时保持 hook-removed 和未注册工具不可用。

### 9. [feat(plugin): wrap native session HTTP](https://github.com/anomalyco/opencode/pull/40077)
- **作者**：rekram1-node | **状态**：OPEN
- **内容**：将 `session.request` 可变 hook 替换为围绕完整 `Request → Response` 交换的 `session.http`，暴露 Effect/标准 Promise 插件契约及原始 HTTP 状态码。

### 10. [feat(i18n): Add Hebrew language support with RTL handling](https://github.com/anomalyco/opencode/pull/39423)
- **作者**：toyro396133 | **状态**：OPEN
- **内容**：为所有包添加全面的希伯来语（he）支持，包含 RTL 布局处理，是 OpenCode 国际化进程的重要补充。

---

## 五、功能需求趋势

| 方向 | 代表 Issue | 热度 |
|------|-----------|------|
| **API 与集成** | Go plan usage API (#16017)、Responses API for deepseek-v4-flash (#39829) | 高 |
| **可观测性** | Session context usage (#6152)、Memory compaction hooks (#30116) | 高 |
| **IDE/编辑器集成** | Desktop file tree (#30545)、VS Code 并发崩溃 (#38849) | 中高 |
| **性能与资源管理** | Memory leaks (#20695)、慢启动 (#14965)、.so 泄漏 (#28089)、libopentui 207 GiB (#39876) | 高 |
| **多语言/区域支持** | Hebrew i18n (#39423)、香港区域封锁 (#40162) | 中 |
| **教学/工作流模式** | Teach mode (#40184) | 中 |
| **模型支持** | GPT-5.6 Zen 兼容、Bedrock Mantle 路由 | 高 |

---

## 六、开发者关注点

### 🔴 高频痛点
1. **内存与资源泄漏**：Memory Megathread、.so 文件泄漏、libopentui 临时副本消耗 207 GiB——开发者对长时间运行场景下的资源管理高度敏感。
2. **Desktop 端稳定性**：首次启动卡死（#38222、#40170）、file tree 无效（#30545）、项目选择器前缀冲突（#40094）——桌面端质量是当前最大短板。
3. **Zen/提供商兼容**：GPT-5.6 在 Zen 模式下 403/region blocked、Bedrock Mantle URL 模板未替换——新模型上线后适配滞后。

### 🟡 中频需求
4. **TUI 插件生态**：npm 包规范下的 TUI 插件静默失败（#33884）、命令面板在问答中不可用——TUI 扩展性需要更稳健的加载机制。
5. **会话管理**：上下文窗口可视化（#6152）、内存压缩感知 hook（#30116）、子代理无法单独中止（#38966）——开发者需要更精细的会话控制。
6. **认证与凭证**：GitHub Copilot 每次会话重新认证（#40183）、更换提供商重复要求 API Key（#33775）——凭证持久化体验需改善。

### 🟢 趋势观察
- **教学场景**：Teach mode PR 的出现表明社区希望 OpenCode 承担更多教育角色。
- **国际化**：希伯来语 RTL 支持 PR 显示开发者群体地域分布扩大。
- **插件架构演进**：`session.http` 替代 `session.request` 表明插件系统正从简单 hook 向完整的 HTTP 生命周期管理演进。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报

**日期：2026-08-03** | **仓库：github.com/badlogic/pi-mono**

---

## 一、今日速览

今日 Pi 仓库无新版本发布，社区活跃度集中在 **Compaction（上下文压缩）机制的稳定性** 和 **WezTerm 终端渲染兼容性** 两大主题。多个高关注度 Issue 涉及 auto-compaction 在 context 超过 100% 后才触发、压缩后会话中断、以及不同终端下 IME/硬件光标的渲染异常，反映出用户对长会话可靠性和跨终端一致性的强烈诉求。同时，多项 PR 聚焦于会话持久化、AI 适配器健壮性和新模型/Provider 支持。

---

## 二、版本发布

**过去 24 小时无新 Release。** 最新版本仍为 0.83.0（参考 Issue #7323 中提及）。

---

## 三、社区热点 Issues（按评论数 & 影响力筛选）

### 1. [#6879](https://github.com/earendil-works/pi/issues/6879) — auto-compaction 在 context 超过 100% 后才触发
- **状态**：OPEN | **👍 10** | **评论 9**
- **重要性**：用户报告 GPT-5.6-sol 上单次 agentic turn 运行 2 小时后，footer 突破 compaction 阈值但未触发压缩，直到 API 因 373k tokens 拒绝请求才被动触发。社区认为这是严重的行为缺陷，可能导致 token 浪费和请求失败。
- **社区反应**：高关注，建议在每次 agent turn 后主动检查压缩条件。

### 2. [#7020](https://github.com/earendil-works/pi/issues/7020) — 压缩后 Pi 有时无法继续
- **状态**：OPEN (inprogress) | **评论 7**
- **重要性**：针对长期 coordinator 类会话，compaction 后会话中断，影响工作流连续性。
- **社区反应**：开发者已标记 inprogress，社区期待修复。

### 3. [#7062](https://github.com/earendil-works/pi/issues/7062) — openai-completions 处理数组 content 和缺失 finish_reason
- **状态**：OPEN | **评论 6**
- **重要性**：Databricks 模型（Qwen3、gpt-oss reasoning models）返回 `choice.delta.content` 为 typed array 时渲染为 `[object Object]`，且部分响应缺少 `finish_reason` 导致流处理异常。影响非标准流式响应的兼容性。

### 4. [#7402](https://github.com/earendil-works/pi/issues/7402) — Bengali 文本粘贴后按 Space 重复行
- **状态**：CLOSED | **评论 6**
- **重要性**：Bengali 字符宽度计算错误导致 differential renderer 与终端光标不同步，触发视觉重复。属于国际化文本渲染的典型边缘案例。

### 5. [#7315](https://github.com/earendil-works/pi/issues/7315) — Fireworks 请求偶发立即超时
- **状态**：CLOSED | **评论 4**
- **重要性**：Fireworks 模型请求在 TCP/TLS 完成后即超时（而非输出阶段），重试 3 次均失败且零 token 计费。指向连接建立阶段的底层问题。

### 6. [#7486](https://github.com/earendil-works/pi/issues/7486) — WezTerm 启用 showHardwareCursor 后光标跳跃
- **状态**：CLOSED | **评论 3**
- **重要性**：硬件光标修复方案（#5200 workaround）引入新问题——Working 状态时光标可见跳动。反映终端光标管理与 spinner 状态之间的同步难题。

### 7. [#7323](https://github.com/earendil-works/pi/issues/7323) — `pi update --models` 因瞬态超时失败整个刷新
- **状态**：CLOSED | **评论 3**
- **重要性**：模型目录刷新缺乏重试机制，15 秒超时即全盘失败。影响用户更新模型列表的可靠性。

### 8. [#7413](https://github.com/earendil-works/pi/issues/7413) — GitHub Copilot GHE.com 企业账户 compaction 失败
- **状态**：CLOSED | **评论 3**
- **重要性**：`/compact` 在 GHE.com 企业账户上返回 `unknown stamp` 错误，正常聊天不受影响。指向 compaction 路径与标准认证路径的差异。

### 9. [#4679](https://github.com/earendil-works/pi/issues/4679) — 请求添加滚动锁定/阅读模式
- **状态**：CLOSED | **评论 3** | **👍 1**
- **重要性**：长期存在的 UX 痛点——agent 输出时滚动到底部，打断用户向上阅读历史的需求。已关闭但社区持续关注。

### 10. [#7497](https://github.com/earendil-works/pi/issues/7497) — 会话发现忽略 symlinked 目录
- **状态**：CLOSED | **评论 2**
- **重要性**：`listSessions` 使用 `readdir` 而非跟随 symlink，导致 `~/.pi/agent/sessions/` 下的符号链接会话在 pi-web 等工具中不可见。影响会话管理工具的完整性。

---

## 四、重要 PR 进展

### 1. [#7498](https://github.com/earendil-works/pi/pull/7498) — fix(coding-agent): defer idle compaction until next prompt
- **状态**：OPEN | 作者：ogulcancelik
- **内容**：将空闲时的自动压缩推迟到下一次用户 prompt，避免在无实际交互时浪费 token。与 #6879 高度相关，社区期待合并。

### 2. [#7480](https://github.com/earendil-works/pi/pull/7480) — feat(ai): add LLM Gateway provider
- **状态**：CLOSED | 作者：RATCHAW
- **内容**：新增 LLM Gateway（OpenRouter 风格路由）作为内置 `openai-completions` provider，支持从 `https://api.llmgateway.io/v1/models` 拉取 ~151 个工具能力模型。扩展了可用模型生态。

### 3. [#7494](https://github.com/earendil-works/pi/pull/7494) — fix(ai): preserve Gemini 3 tool call IDs
- **状态**：OPEN | 作者：muyiyr
- **内容**：Gemini 3 返回的 function call ID 在历史重放时被丢弃。修复 `requiresToolCallId()` 以覆盖 Gemini 3+，确保工具调用匹配正确。

### 4. [#7493](https://github.com/earendil-works/pi/pull/7493) — Set AI_AGENT for child process attribution
- **状态**：OPEN | 作者：renaudhartert-db
- **内容**：在 CLI 和 RPC 入口点设置 `AI_AGENT=pi`，配合现有 `PI_CODING_AGENT=true` 标记，符合跨 agent 惯例，便于子进程识别启动者。

### 5. [#7482](https://github.com/earendil-works/pi/pull/7482) — fix(tui): prefer iTerm2 inline images over kitty on WezTerm
- **状态**：CLOSED | 作者：nothankyouzzz
- **内容**：修复 WezTerm 上 inline image 在滚动 transcript 中退化为单行残影的问题。根因是 `detectCapabilities()` 将 WezTerm 错误映射为 Kitty 渲染器。

### 6. [#7496](https://github.com/earendil-works/pi/pull/7496) — feat: add cycle execution duration and /copy cycle command
- **状态**：CLOSED | 作者：mahernandezg
- **内容**：实现 REQ-046，每个工作周期结束后输出 `Execution time: Xh Ym Zs`，使用单调时钟测量从用户消息接收到 agent_settled 的耗时。

### 7. [#7435](https://github.com/earendil-works/pi/pull/7435) — fix(coding-agent): increase connection attempt timeout
- **状态**：CLOSED | 作者：muyiyr
- **内容**：Node.js 默认 250ms 地址族尝试超时在高延迟链路上会中断 Fireworks 连接。将 Pi 的 Undici connector 超时提升至 2 秒，不影响进程全局默认。

### 8. [#7468](https://github.com/earendil-works/pi/pull/7468) — feat(agent,coding-agent): accept Claude Code skill frontmatter
- **状态**：CLOSED | 作者：snrogers
- **内容**：使 Pi 的两个 skill 加载器（agent harness 和 coding-agent）兼容 Claude Code 的 SKILL.md frontmatter 格式，提升跨 agent 工具链互操作性。

### 9. [#7467](https://github.com/earendil-works/pi/pull/7467) — feat(ai): add MiniMax video generation
- **状态**：CLOSED | 作者：octo-patch
- **内容**：新增 MiniMax 视频生成支持，包括全局版和 CN 版 provider、v2/v1 端点、任务查询和下载处理。

### 10. [#7463](https://github.com/earendil-works/pi/pull/7463) — fix(coding-agent): SessionManager._persist 不应在缺少目录时崩溃
- **状态**：CLOSED | 作者：curatelearn-dev
- **内容**：`_persist()` 调用 `appendFileSync` 前未确保父目录存在，工作区重置或外部清理后会导致持久化崩溃。修复为幂等创建目录。

---

## 五、功能需求趋势

从全部 Issues 中提炼的社区关注方向：

| 方向 | 代表性 Issue | 热度 |
|------|-------------|------|
| **Compaction 可靠性** | #6879, #7020, #7492, #7413 | 🔥 最高 |
| **终端兼容性（WezTerm/IME/光标）** | #7490, #7486, #7481, #7402 | 🔥 高 |
| **新模型/Provider 支持** | #7476, #7062, #7480(PR) | 🔥 高 |
| **UX 改进（滚动锁定、单行 footer、复制周期）** | #4679, #7495, #7477, #7496(PR) | 中高 |
| **Extension 生态** | #7484, #7472, #7488, #7483 | 中 |
| **多行粘贴 / 国际化文本** | #7321, #7402 | 中 |
| **会话管理与持久化** | #7497, #7464, #7396(PR) | 中 |
| **认证与凭证管理** | #7499 | 低但关键 |

---

## 六、开发者关注点

### 高频痛点

1. **Compaction 机制不稳定** — #6879（9 评论）和 #7020（7 评论）反映 auto-compaction 触发条件过于被动，压缩后会话中断（#7020），以及取消原因不可追溯（#7492）。社区普遍希望压缩策略更主动、可观测。
2. **WezTerm 渲染兼容性差** — 至少 4 个 Issue（#7490, #7486, #7481, #7402）涉及 WezTerm 下的 IME 光标跳跃、硬件光标跳动、内联图片退化、Bengali 文本重复。开发者反馈 WezTerm 是主要受影响的终端。
3. **Provider 适配层健壮性不足** — Fireworks 超时（#7315）、Databricks 非标准流（#7062）、Google 适配器瞬态错误（PR #7471）暴露各 provider 适配层的容错差异。
4. **会话持久化边缘案例** — ENOENT 崩溃（#7463）、symlink 忽略（#7497）、WebSocket 错误后元数据丢失（#7464）显示会话存储层需要更严格的防御性编程。
5. **Extension 加载性能与规范** — #7483 指出 jiti 实例每扩展一个、串行加载导致启动慢；#7484 反映扩展发送的 slash command 未被正确路由。

### 高频需求

- **滚动锁定/阅读模式** — #4679（自 5 月创建持续关注）和 #7495 反映用户强烈希望在 agent 输出时保持阅读位置。
- **模型目录刷新重试** — #7323 要求对瞬态网络错误具备韧性。
- **多模型切换便捷性** — #6982 提出 MRU 模型切换，减少手动切换步骤。
- **工具 schema 优化** — #7485 指出工具描述重复发送，希望为原生 tool-calling 模型提供 opt-out。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报

**日期：2026-08-03** | **数据来源：github.com/QwenLM/qwen-code**

---

## 一、今日速览

Qwen Code 发布了最新的夜间构建版本 `v0.21.3-nightly.20260802.184365390`，同时完成了 TUI 键盘快捷键文档的完善。社区保持高度活跃，过去24小时内有 32 个 Issues 和 50 个 PR 更新。核心关注点集中在 **daemon 多工作区资源治理**、**OpenAI SDK 兼容性修复**以及 **Kimi/Xiaomi MiMo 新提供商接入**。

---

## 二、版本发布

### v0.21.3-nightly.20260802.184365390

| 更新项 | 说明 |
|--------|------|
| 📚 文档 | 完成 TUI 键盘快捷键完整参考文档 ([PR #8327](https://github.com/QwenLM/qwen-code/pull/8327)) |
| 🐛 修复 | 解除历史分页阻塞问题 ([commit](https://github.com/QwenLM/qwen-code/commit/fix(core):unblock-history-pagination)) |

---

## 三、社区热点 Issues（Top 10）

### 1. [跟踪 daemon 多工作区资源使用边界](https://github.com/QwenLM/qwen-code/issues/8051)
- **作者**：doudouOUC | **优先级**：P2 | **评论**：9
- **重要性**：当前 `qwen serve` daemon 仅通过计数限制工作区和会话，但未限制请求体字节、WebSocket 组装等内存占用。该提案旨在为生产环境提供有界的资源使用追踪与交付机制。
- **社区反应**：社区普遍认为 daemon 的资源治理是生产就绪的关键瓶颈。

### 2. [新增直接外部上下文提供者配置文件](https://github.com/QwenLM/qwen-code/issues/7585)
- **作者**：doudouOUC | **优先级**：P3 | **评论**：11
- **重要性**：提出一种私有 monorepo 集成方案，允许单个 Qwen CLI 进程从管理员绑定的外部记忆库检索仓库共享上下文，两个互斥的管理配置文件。
- **社区反应**：评论数最多，反映出企业级多仓库上下文管理是高频需求。

### 3. [qwen --serve Mode A：TUI + 内嵌 HTTP daemon 三阶段计划](https://github.com/QwenLM/qwen-code/issues/4156)
- **作者**：doudouOUC | **优先级**：P2 | **评论**：7
- **重要性**：当前只有 Mode B（无头 daemon）存在，Mode A 将允许 TUI 进程同时运行 daemon，解决本地用户无法同时使用交互式界面和后台服务的痛点。
- **社区反应**：被视为终端 UX 路线图的关键里程碑。

### 4. [强化工具输出预算、可观测性与产物生命周期](https://github.com/QwenLM/qwen-code/issues/7306)
- **作者**：doudouOUC | **优先级**：P2 | **评论**：5
- **重要性**：Phase 1 正确性验证已完成，合并了共享 finalization 实现和 Shell no-artifact 回归覆盖。Phase 2 将继续深化工具输出的预算控制与可观测能力。

### 5. [桌面客户端无法通过 @ 符号正确引用文件](https://github.com/QwenLM/qwen-code/issues/8123)
- **作者**：lanrain | **优先级**：P3 | **评论**：5
- **重要性**：Windows 桌面客户端 v0.5.5 中，@ 符号文件搜索功能失效，影响日常开发工作流。
- **社区反应**：用户提供了复现截图，确认为回归问题。

### 6. [将进程名从 node.exe 改为 qwen.exe 以可靠识别进程](https://github.com/QwenLM/qwen-code/issues/8376)
- **作者**：chuhongliang2001 | **优先级**：P3 | **评论**：4
- **重要性**：当前 Windows 上进程名为 `node.exe`，macOS/Linux 上为 `node`，外部工具无法可靠识别 Qwen Code 进程。
- **社区反应**：开发者认为此问题影响进程管理脚本和监控工具的准确性。

### 7. [新增邮件通道支持（IMAP + SMTP）](https://github.com/QwenLM/qwen-code/issues/8281)
- **作者**：wenshao | **优先级**：P3 | **评论**：4
- **重要性**：提议添加官方邮件通道，让用户通过专用邮箱与 Qwen Code agent 通信，支持接收新邮件和发送回复。

### 8. [Duplicate provider tool call id 重复调用错误](https://github.com/QwenLM/qwen-code/issues/8382)
- **作者**：gitmeatarru | **优先级**：P2 | **评论**：3
- **重要性**：用户频繁遇到 "Duplicate provider tool call id" 和 "not recorded" 错误，影响多轮对话的稳定性。

### 9. [isAbortError 未识别 OpenAI SDK 的 APIUserAbortError](https://github.com/QwenLM/qwen-code/issues/8398)
- **作者**：harjothkhara | **优先级**：P2 | **评论**：2
- **重要性**：`auth_type=openai` 是最常见的提供商路径，用户取消请求时 `APIUserAbortError` 未被识别为中断，导致后续处理异常。

### 10. [APIUserAbortError 后后续轮次未写入本地会话转录](https://github.com/QwenLM/qwen-code/issues/8356)
- **作者**：aipanini | **优先级**：P2 | **评论**：2
- **重要性**：OpenAI 兼容端点用户遇到取消请求后，会话转录丢失后续轮次内容，影响审计和调试。

---

## 四、重要 PR 进展（Top 10）

### 1. [fix(desktop): 从 LocalAppData 读取 Windows 烟雾日志](https://github.com/QwenLM/qwen-code/pull/8381)
- **作者**：yiliang114 | **标签**：autofix/takeover
- **内容**：修复桌面发布工作流中的 Windows 打包应用烟雾检查，读取 Tauri 实际使用的日志位置，并忽略测试进程启动前的日志内容。

### 2. [feat(review): capture-tui — 渲染声明获取像素而非文本](https://github.com/QwenLM/qwen-code/pull/8388)
- **作者**：wenshao | **标签**：Phase 2
- **内容**：`qwen review capture-tui` 的生产者端，通过私有 tmux 服务器驱动代码审查，精确捕获终端渲染画面作为证据图片。

### 3. [feat(workflows): 添加协作式暂停与恢复](https://github.com/QwenLM/qwen-code/pull/8320)
- **作者**：qqqys | **标签**：autofix/takeover
- **内容**：为 Dynamic Workflows 添加全运行协作式暂停/恢复能力。感知暂停的调度器停止出队新 agent 分发，等待进行中的工作收敛，并在恢复前保持结果在门控处。

### 4. [docs: 添加遗留代码审计（/audit）设计文档](https://github.com/QwenLM/qwen-code/pull/8397)
- **作者**：wenshao | **标签**：autofix/takeover
- **内容**：为 `/audit <path>` 命令添加设计文档，将 `/review` 机制（维度扇出、验证分片、失败场景纪律）指向已合并的现有代码而非 diff。

### 5. [feat(autofix): 要求隔离的针对性 E2E 验证](https://github.com/QwenLM/qwen-code/pull/8318)
- **作者**：wenshao | **标签**：autofix/takeover
- **内容**：为来自支持的 E2E 失败的 Autofix issues 添加故障封闭验证链，将不可变失败元数据移出可编辑的 issue 正文，绑定维护者审批到精确的 issue 标题和正文。

### 6. [fix(hooks): 关闭 hook 执行中的四个信任边界漏洞](https://github.com/QwenLM/qwen-code/pull/8396)
- **作者**：wenshao | **标签**：autofix/takeover
- **内容**：关闭 HTTP hook 跟随重定向的漏洞（此前 URL 白名单和 DNS 级别 SSRF 检查未覆盖），以及其他三个独立信任边界漏洞。

### 7. [feat(cli): 为 /review 添加 Java/JVM 性能路径规则](https://github.com/QwenLM/qwen-code/pull/8379)
- **作者**：wenshao | **标签**：autofix/takeover
- **内容**：添加第二个内置路径规则到 `/review`，Java/JVM 性能检查清单附加到 `*.java` 路径，覆盖整个 diff 维度代理和作用域分块代理。

### 8. [feat: 从任意对话分支](https://github.com/QwenLM/qwen-code/pull/8274)
- **作者**：water-in-stone | **标签**：autofix/takeover
- **内容**：之前会话分支使用最新活跃会话状态，无法可靠地定位早期 Assistant 响应。此 PR 修复了将可见消息视为分支点的安全问题。

### 9. [feat(auth): 添加 Kimi 和 Xiaomi MiMo 提供商](https://github.com/QwenLM/qwen-code/pull/8368)
- **作者**：DragonnZhang | **标签**：autofix/takeover
- **内容**：为 `/auth` → Third-party Providers 添加 Kimi 和 Xiaomi MiMo 一级预设。Kimi 展示为 Coding Plan、API Key (China)、API Key (International) 三个接入选项；Xiaomi MiMo 展示为 pay-as-you-go 加 China、Singapore 等区域选项。

### 10. [fix(core): 识别 OpenAI SDK APIUserAbortError 为中断](https://github.com/QwenLM/qwen-code/pull/8399)
- **作者**：harjothkhara | **标签**：autofix/takeover
- **内容**：教导 `isAbortError` 识别 OpenAI SDK 的 `APIUserAbortError` 为中断。在 `auth_type=openai` 路径上，用户取消请求时抛出 `APIUserAbortError`，此前 `isAbortError` 无法识别。

---

## 五、功能需求趋势

### 🔥 高频方向

| 方向 | 代表 Issue/PR | 热度 |
|------|---------------|------|
| **Daemon 资源治理** | #8051, #4156, #7306 | 🔥🔥🔥 |
| **多提供商接入** | #8368 (Kimi/MiMo), #8350 (voice base URLs) | 🔥🔥 |
| **安全与信任边界** | #8396 (hooks), #8286 (private ASR), #8350 (voice) | 🔥🔥 |
| **Windows 平台兼容** | #8376 (进程名), #8123 (文件引用), #8385 (ConEmu 闪烁) | 🔥🔥 |
| **会话管理与转录** | #8356, #7164, #8382 | 🔥 |

### 📈 新兴方向

- **邮件通道集成** (#8281)：IMAP/SMTP 支持，让 agent 通过邮箱通信
- **云部署安全集成** (#8291)：从代码变更到验证部署的完整工作流
- **Web Shell 图像拖放** (#8321)：将 TUI 的图像拖

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报

**日期：2026-08-03** | **数据源：github.com/Hmbown/DeepSeek-TUI**

---

## 一、今日速览

今日 CodeWhale（DeepSeek TUI）社区无新版本发布，但 PR 和 Issue 活动密集。核心动态集中在三方面：凭证持久化与工作区隔离修复、撤销/重做与会话边界控制、以及 v0.9.4 版本的 Responses API 方言与自定义 Provider 能力规划。社区持续反馈 Windows 路径、Nix 构建和 TUI 启动稳定性问题。

---

## 二、版本发布

**暂无新版本。** 当前最新版本为 **v0.9.3**（git tag `c7a6aff996f27ff925bc066025e4890da708b5e1`），v0.9.4 处于规划阶段，涉及 Responses API、Provider Profiled 行为、任务运行时 API 等多项增强。

---

## 三、社区热点 Issues（精选 10 个）

| # | 标题 | 状态 | 重要性 |
|---|------|------|--------|
| **#5007** | [CLOSED] Youtuber doesn't use CodeWhale as TUI for DeepSeek | 已关闭 | 社区关注度最高，反映外部对 CodeWhale 官方身份的质疑 |
| **#5097** | CodeWhale is not considered official DeepSeek Coding Agent | OPEN | 与 #5007 呼应，社区对官方定位持续讨论 |
| **#4785** | Dead-code sweep: 464 `#[allow(dead_code)]` hiding drift | OPEN | 代码健康度治理，技术债清理议题 |
| **#4683** | Wrong deepseek completions URL (flaky) | OPEN | 影响核心 API 调用稳定性，用户报告频繁出现 |
| **#4684** | `danger-full-access` does not disable tools-layer workspace boundary | CLOSED | 安全边界问题，影响全局 Skill 访问 |
| **#5045** | Unify API key/secret storage: credentials must be user-global | OPEN | 凭证跨仓库丢失，dogfood 报告确认 |
| **#5047** | API keys silently persist only in working repo | OPEN | 与 #5045 配套，密钥存储在仓库本地而非全局 |
| **#5096** | Compaction gain not visible | OPEN | 上下文压缩后 token 计数不更新，影响用户体验 |
| **#4716** | TUI exits immediately on launch (`[Process completed]`) | OPEN | 启动即崩溃，stop-ship 级别问题 |
| **#1482** | nVidia nim not work (404 on API call) | OPEN | 旧问题仍活跃，环境配置相关 |

**社区反应总结：** 安全性（#4684、#5045/5047）和 API 稳定性（#4683、#5096）是最受关注的技术痛点；#5007/#5097 反映社区对项目官方定位的焦虑。

---

## 四、重要 PR 进展（精选 10 个）

| # | 标题 | 状态 | 内容摘要 |
|---|------|------|----------|
| **#5095** | fix(ohos): re-quote Windows linker arguments containing spaces | OPEN | 修复 OpenHarmony SDK 在含空格路径下链接参数被 cmd 剥离的问题 |
| **#5064** | feat(compaction): carry forward a deterministic continuation contract | OPEN | 上下文压缩增加确定性延续契约，保留活跃意图、决策和验证证据 |
| **#5090** | fix(approval): make fresh cards deny by default | OPEN | 审批卡片默认行为从 Approve 改为 Deny，提升安全性 |
| **#5075** | fix(config): make credential persistence path-safe | OPEN | 拒绝相对路径的 `CODEWHALE_HOME`，防止仓库级全局状态污染 |
| **#5086** | fix(undo): scope /undo to current session and add /redo | OPEN | 撤销操作限制在当前会话，新增 `/redo` 命令 |
| **#5077** | perf(prompt): progressively disclose fresh context | OPEN | 优化提示词加载：`AGENTS.md`/`CLAUDE.md` 优先加载，ambient skills 懒加载 |
| **#5091** | fix(undo): keep workspace rollback inside current session | OPEN | 工作区回滚限制在当前会话，修复跨会话误回滚问题 |
| **#4985** | feat(runtime-api): scope task listing by workspace | CLOSED | 运行时 API 增加 `workspace` 过滤器，`TaskSummary` 携带工作区路径 |
| **#5028** | fix(nix): make the sandboxed check phase pass | CLOSED | 修复 Nix 构建中 `libdbus-1.so.3` 加载失败和沙箱测试问题 |
| **#5068** | refactor(tui): centralize DeepSeek pro effort mapping | OPEN | 将 DeepSeek Pro effort 映射集中到 `client/deepseek_effort.rs`，统一 Chat 与 Responses 路径 |

---

## 五、功能需求趋势

从全部 Issues 中提炼的社区关注方向：

1. **Responses API 支持** — #5092、#5093、#5094 连续提出 v0.9.4 需要支持自定义 Provider 选择 Responses 方言，当前仅 Chat Completions 可配置。
2. **凭证与配置全局化** — #5045、#5047、#5075 指向同一问题：API 密钥和配置应跨仓库持久化，而非仓库局部。
3. **撤销/重做与会话隔离** — #5086、#5089、#5091 反映用户对 `/undo` 跨会话污染工作区的强烈不满。
4. **模型能力可视化** — #5069 提出在 Fleet setup 和 roster 中展示模型能力徽章。
5. **外部 Agent 协议扩展** — #5085 提出 Antigravity CLI（agy）的外部 Agent 适配器 RFC。
6. **运行时 API 可观测性** — #5073、#5074 要求暴露 verifier 证据和 goal-loop 状态给管理客户端。
7. **通知策略细化** — #5066 提出按类别静音、action-first copy 等通知控制。

---

## 六、开发者关注点

**高频痛点：**

- **凭证存储不安全** — #5045、#5047 指出 API 密钥明文存储在仓库 `.codewhale/config.toml`，存在泄露风险且跨项目不可用。
- **Windows 路径处理** — #5095、#4564 反映 Windows 下含空格路径和 npm 全局安装参数解析问题。
- **Nix 构建阻塞** — #5026、#5028 显示 NixOS 用户长期受 `libdbus-1.so.3` 和沙箱 HOME 问题困扰。
- **TUI 启动失败** — #4716 为 stop-ship 级别问题，影响 macOS Terminal.app 用户。
- **API URL 不稳定** — #4683 的 DeepSeek completions URL 错误呈现间歇性但高频率。

**社区情绪：**
- 对项目官方定位存在疑虑（#5007、#5097），有 YouTuber 称 CodeWhale 非官方 DeepSeek Coding Agent。
- 安全意识提升：审批默认拒绝（#5088/#5090）、凭证路径安全（#5075）、危险模式边界（#4684）。
- v0.9.4 规划中社区期待较高，Responses API、Provider Profiled 行为、任务运行时 API 为核心诉求。

---

*报告生成时间：2026-08-03 | 数据来源：github.com/Hmbown/DeepSeek-TUI*

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

# ComfyUI 社区动态日报

**日期：2026-08-03**
**数据来源：** `github.com/comfyanonymous/ComfyUI`

---

## 一、今日速览

今日 ComfyUI 核心仓库无新版本发布，但社区活跃度较高。围绕 v0.29.0 回归问题（`LTXAV` 空音频崩溃、Z-Image 纹理错误）以及 VRAM 优化（分块 VAE 内存分配、随机舍入 OOM 修复）展开了密集讨论。同时，**MiniMax H3** 音频-视频模型的新支持正在快速推进，多项 PR 已合并或进入审查流程。

---

## 二、版本发布

**过去 24 小时内无新 Release。**

---

## 三、社区热点 Issues（Top 10）

### 1. [#14618] 每次修改 prompt 都重新加载模型
| 作者 | Aamir3d | 更新 | 2026-08-02 | 评论 | 114 | 👍 | 10 |
|------|---------|------|-----------|------|-----|-----|-----|

**重要性：** 评论数和点赞数均最高，反映出这是影响日常工作效率的核心性能问题。用户反馈即使禁用自定义节点后问题依旧存在，说明是 ComfyUI 核心的模型缓存机制缺陷。社区关注度极高，期待官方给出明确的修复路线。

🔗 [查看 Issue](https://github.com/Comfy-Org/ComfyUI/issues/14618)

### 2. [#15233] LTXAVModel 在空音频分支上崩溃（v0.29.0 回归）
| 作者 | AI4VFX | 更新 | 2026-08-02 | 评论 | 1 | 👍 | 0 |
|------|--------|------|-----------|------|-----|-----|-----|

**重要性：** 这是一个明确的版本回归，`freqs_cis_matrix` 在处理纯视频 latent（无音频 slot）时因 `reshape(B, 0, heads, -1)` 的歧义性而崩溃。影响使用 LTXAV 进行视频生成的用户，需紧急修复。

🔗 [查看 Issue](https://github.com/Comfy-Org/ComfyUI/issues/15233)

### 3. [#15220] Tiled VAE 编码/解码为完整张量预留 VRAM，导致不必要的模型驱逐
| 作者 | lanslote | 更新 | 2026-08-02 | 评论 | 0 | 👍 | 0 |

**重要性：** `VAEDecodeTiled` / `VAEEncodeTiled` 的设计初衷是限制 VAE 激活区的工作集内存，但当前实现仍按完整张量大小预留 VRAM，导致 `load_models_gpu` 驱逐本不应被驱逐的模型。直接关联 VRAM 优化体验。

🔗 [查看 Issue](https://github.com/Comfy-Org/ComfyUI/issues/15220)

### 4. [#15229] comfy/logging.py 与外部自定义节点产生循环导入
| 作者 | olifre | 更新 | 2026-08-02 | 评论 | 0 | 👍 | 0 |

**重要性：** 提交 `fbe6d3ca` 后，`comfy` 目录被加入 `sys.path`，导致 Python 原生 `logging` 模块被 `comfy/logging.py` 遮蔽，所有间接导入 `logging` 的外部自定义节点（如 TTS Audio Suite）均会失败。影响面广，涉及整个自定义节点生态。

🔗 [查看 Issue](https://github.com/Comfy-Org/ComfyUI/issues/15229)

### 5. [#15230] 0.29.0 版本中使用 Z-Image 进行 inpainting 时出现纹理错误
| 作者 | 304523475 | 更新 | 2026-08-02 | 评论 | 0 | 👍 | 0 |

**重要性：** Z-Image 是近期热门的图像生成模型，inpainting 工作流是其核心使用场景。新版本出现纹理错误直接影响用户工作流的可用性。

🔗 [查看 Issue](https://github.com/Comfy-Org/ComfyUI/issues/15230)

### 6. [#15189] 子图中部分节点控件无法提升（Promote）
| 作者 | wencxxxxxx | 更新 | 2026-08-02 | 评论 | 5 | 👍 | 3 |

**重要性：** 子图（Subgraph）是 ComfyUI 高级工作流组织的核心功能，控件提升（Promote）功能的失效限制了复杂工作流的封装与复用能力。

🔗 [查看 Issue](https://github.com/Comfy-Org/ComfyUI/issues/15189)

### 7. [#15143] ComfyUI Desktop 应用中 Gemma 4 prompt 生成异常
| 作者 | dila337 | 更新 | 2026-08-02 | 评论 | 10 | 👍 | 0 |

**重要性：** Gemma 4 是 Google 最新发布的模型，Desktop 应用对其支持出现问题，影响桌面端用户的使用体验。

🔗 [查看 Issue](https://github.com/Comfy-Org/ComfyUI/issues/15143)

### 8. [#15209] 使用 `--flash-attention`（ROCm）时是否强制 Triton 后端？
| 作者 | AlfredSartan572 | 更新 | 2026-08-02 | 评论 | 1 | 👍 | 0 |

**重要性：** AMD ROCm 用户关注 Flash Attention 与 Triton 后端的冲突问题，涉及 AMD GPU 用户的性能调优和兼容性。

🔗 [查看 Issue](https://github.com/Comfy-Org/ComfyUI/issues/15209)

### 9. [#14605] PyTorch 2.9+ & CUDA 13 (RTX 5090) 下高 CPU 使用率 Bug
| 作者 | B111ank | 更新 | 2026-08-02 | 评论 | 2 | 👍 | 0 |

**重要性：** RTX 5090 作为新一代旗舰显卡，其与 PyTorch 2.9+ / CUDA 13 的组合出现高 CPU 占用问题，影响新硬件用户的体验。

🔗 [查看 Issue](https://github.com/Comfy-Org/ComfyUI/issues/14605)

### 10. [#14618 之外的补充] [#5908] InpaintModelConditioning 在 flux-fill 上不生效
| 作者 | ermanitu | 更新 | 2026-08-02 | 评论 | 7 | 👍 | 0 |

**重要性：** Flux-fill 是官方 inpainting 工作流的核心模型，该问题长期未解决（创建于 2024-12），影响 inpainting 功能的可靠性。

🔗 [查看 Issue](https://github.com/Comfy-Org/ComfyUI/issues/5908)

---

## 四、重要 PR 进展（Top 10）

### 1. [#15231] 重命名 comfy/logging.py 为 comfy/internal_logging.py
| 作者 | olifre | 状态 | CLOSED | 更新 | 2026-08-02 |
|------|--------|------|--------|------|-----------|

**内容：** 修复自定义节点的循环导入问题。将 `comfy/logging.py` 重命名为 `comfy/internal_logging.py`，避免与 Python 标准库 `logging` 模块命名冲突。直接修复 Issue #15229。

🔗 [查看 PR](https://github.com/Comfy-Org/ComfyUI/pull/15231)

### 2. [#15221] 从分块（tile）而非完整张量计算 Tiled VAE 内存预留
| 作者 | lanslote | 状态 | OPEN | 更新 | 2026-08-02 |

**内容：** 修复 `decode_tiled` 和 `encode_tiled` 中 `memory_required` 的计算方式，从完整 latent/pixel 形状改为按 `tile_size` 计算。解决 Issue #15220 中 VRAM 过度预留的问题。

🔗 [查看 PR](https://github.com/Comfy-Org/ComfyUI/pull/15221)

### 3. [#15225] 在 CK stochastic-rounding 路径中限制 GPU 内存（修复大模型 OOM）
| 作者 | hamstakilla | 状态 | OPEN | 更新 | 2026-08-02 |

**内容：** `stochastic_rounding()` 在每次调用时分配全尺寸 `uint8` RNG 张量导致 OOM。新的 comfy-kitchen 快速路径缺乏对峰值内存的限制，本 PR 补齐该优化。

🔗 [查看 PR](https://github.com/Comfy-Org/ComfyUI/pull/15225)

### 4. [#15224] 支持 MiniMax-H3 (CORE-375) 音频-视频模型
| 作者 | kijai | 状态 | OPEN | 更新 | 2026-08-02 |

**内容：** 新增对 MiniMax H3 模型的支持。该模型是单流打包-token DiT，联合去噪视频（24通道，16x空间/17k+5帧网格）和立体声（32通道，40Hz）latent，以 Qwen3-VL-32B 隐藏状态为条件，并附加逐token模态标签。

🔗 [查看 PR](https://github.com/Comfy-Org/ComfyUI/pull/15224)

### 5. [#15228] 更新工作流模板至 v0.11.25，新增 MiniMax 工作流
| 作者 | comfyui-wiki | 状态 | CLOSED | 更新 | 2026-08-02 |

**内容：** 工作流模板包更新至 v0.11.25，新增 MiniMax 相关工作流模板。PyPI 包地址：https://pypi.org/project/comfyui-workflow-templates/

🔗 [查看 PR](https://github.com/Comfy-Org/ComfyUI/pull/15228)

### 6. [#15227] [Partner Nodes] 为 H3 模型添加 768P 分辨率支持
| 作者 | bigcat88 | 状态 | CLOSED | 更新 | 2026-08-02 |

**内容：** 在 MiniMax Partner Nodes 中为 H3 模型新增 768P 分辨率选项，扩展了输出分辨率的灵活性。

🔗 [查看 PR](https://github.com/Comfy-Org/ComfyUI/pull/15227)

### 7. [#13285] Twinflow-Z-Image Turbo 支持（CORE-196）
| 作者 | azazeal04 | 状态 | OPEN | 更新 | 2026-08-02 |

**内容：** 新增对 Twinflow Z-Image Turbo 模型的支持，进一步扩展 ComfyUI 的图像生成模型生态。

🔗 [查看 PR](https://github.com/Comfy-Org/ComfyUI/pull/13285)

### 8. [#15139] 支持 ID-V2V Wan 2.1/VACE 模型
| 作者 | kijai | 状态 | OPEN | 更新 | 2026-08-02 |

**内容：** 为 Wan 2.1 VACE 模型添加 I2V（图像到视频）基础模型支持，包括参考填充图像输入。测试模型：`wan_2.1_idv2v_int8_convrot.safetensors`。

🔗 [查看 PR](https://github.com/Comfy-Org/ComfyUI/pull/15139)

### 9. [#12099] LoadImage 节点现在递归扫描子目录中的图像
| 作者 | molbal | 状态 | CLOSED | 更新 | 2026-08-02 |

**内容：** `LoadImage` 节点增强为递归扫描输入目录及其所有子目录中的图像文件，使其行为与 `LoadImageBatch` 等节点保持一致，提升工作流灵活性。

🔗 [查看 PR](https://github.com/Comfy-Org/ComfyUI/pull/12099)

### 10. [#15222] 添加 CLAUDE.md 并将 AGENTS.md 详细内容移至链接文档
| 作者 | mattmillerai | 状态 | OPEN | 更新 | 2026-08-02 |

**内容：** `AGENTS.md` 已增长到规则底部被忽略的程度。本 PR 将深度细节拆分为三个链接文档，保持根文件为通用规则，并新增 `CLAUDE.md` 使 Claude Code 能正确识别这些规则。改善了 AI 辅助开发体验。

🔗 [查看 PR](https://github.com/Comfy-Org/ComfyUI/pull/15222)

---

## 五、功能需求趋势

从过去 24 小时内更新的 Issues 和 PRs 中，可以提炼出以下社区关注的功能方向：

| 趋势方向 | 热度 | 说明 |
|---------|------|------|
| **新模型支持** | 🔥🔥🔥 | MiniMax H3（视频+音频）、Twinflow-Z-Image、T2V Wan ID-V2V、Gemma 4 等多款新模型的支持请求和 PR 集中出现 |
| **VRAM / 内存优化** | 🔥🔥🔥 | Tiled VAE 内存分配、stochastic rounding OOM 修复、模型加载缓存优化是高频痛点 |
| **AMD GPU / ROCm 支持** | 

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama 社区动态日报

**日期：2026-08-03** | **来源：github.com/ollama/ollama**

---

## 一、今日速览

过去 24 小时内 Ollama 官方无新版本发布，但社区讨论活跃。VS Code Copilot Harness 中 0.32.4/0.32.5 版本导致工具调用（tool calling）失效的回归问题持续发酵，是当前最紧急的 bug；同时，llama-server 子进程崩溃后 runner 残留（stale runner）导致 `/api/embed` 挂起的问题也集中暴露，多份 PR 正在修复。

---

## 二、版本发布

过去 24 小时无新 release。社区当前稳定版本为 **0.32.5**，部分用户因回归问题回退至 **0.32.1**（#17444）。

---

## 三、社区热点 Issues（精选 10 个）

| # | 标题 | 重要性 | 社区反应 |
|---|------|--------|----------|
| [#17444](https://github.com/ollama/ollama/issues/17444) | 0.32.4/0.32.5 破坏 VS Code Copilot Harness 的 tool calling | 🔥 最高 | 18 条评论，确认回退到 0.32.1 可解决，影响开发工作流 |
| [#17065](https://github.com/ollama/ollama/issues/17065) | MLX vision 模型（Gemma 4 12B、Qwen3.5 4B）无法接收图像输入 | 🔥 高 | 14 条评论，涉及 Apple Silicon 用户核心功能 |
| [#17471](https://github.com/ollama/ollama/issues/17471) | ollama.com 持续 403 Forbidden 与登录循环（8+ 小时） | 🔥 高 | 跨平台复现，影响云端服务可用性 |
| [#17103](https://github.com/ollama/ollama/issues/17103) | Ollama Cloud 任何模型均不可用 | 🔥 高 | Max 订阅用户完全无法使用 |
| [#17512](https://github.com/ollama/ollama/issues/17512) | 思考模型在指定精确字数时陷入无限自验证循环 | 🆕 新 | 昨日创建，揭示 thinking 模式边界 case |
| [#17235](https://github.com/ollama/ollama/issues/17235) | 请求在 Ollama Cloud 发布 Kimi K3 | 📈 持续 | 17 条评论，用户期待已久 |
| [#17482](https://github.com/ollama/ollama/issues/17482) | 相同模型被反复卸载/重载 | 🔄 回归 | 影响 VS Code / Goose 多客户端共存场景 |
| [#14258](https://github.com/ollama/ollama/issues/14258) | GPU→CPU fallback 静默发生，无用户可见警告 | ⚠️ 长期 | 2 条评论，涉及性能可观测性 |
| [#17292](https://github.com/ollama/ollama/issues/17292) | qwen3:30b 忽略 `--think=false` 参数 | 🔄 已知 | 影响 Qwen3 MoE 系列一致性 |
| [#17510](https://github.com/ollama/ollama/issues/17510) | 请求添加 deepseek-v4-flash:0731 模型 | 📈 新增 | 社区对新模型发布保持关注 |

---

## 四、重要 PR 进展（精选 10 个）

| # | 标题 | 状态 | 内容摘要 |
|---|------|------|----------|
| [#16590](https://github.com/ollama/ollama/pull/16590) | llama-server: 准备移除 compat patch，引入 manifest list 支持 | OPEN | 支持 runner-specific manifest 共存，list/pull/push 理解 runner 与 digest 选择 |
| [#17519](https://github.com/ollama/ollama/pull/17519) | docs: 补充 tool_call_id、ToolCall.id 等到 OpenAPI spec | OPEN | 修复 api/types.go 与 openapi.yaml 不同步，4 个字段缺失 |
| [#17420](https://github.com/ollama/ollama/pull/17420) | fix(llm): Vulkan AMD mmap fallback retry | CLOSED | 修复 AMD GPU 上 mmap 失败后的重试逻辑 |
| [#15325](https://github.com/ollama/ollama/pull/15325) | feat(amd): 添加不受支持 GPU 的实验性覆盖 | CLOSED | 引入 `OLLAMA_AMD_UNSAFE=1` 跳过 ROCm 深度初始化过滤 |
| [#17516](https://github.com/ollama/ollama/pull/17516) | server: 驱逐 llama-server 已退出的残留 runner | OPEN | 修复 #17428/#17509 中 llama-server 崩溃后 runner 滞留问题 |
| [#17515](https://github.com/ollama/ollama/pull/17515) | server: 防止并发请求复活已被驱逐的 runner | CLOSED | 修复 #17408 的调度器死锁问题 |
| [#17514](https://github.com/ollama/ollama/pull/17514) | fix(vision-suite): 方言感知的 q4 bbox 评分 | CLOSED | 修复多图像测试中 q4 检查仅基于像素导致误判的问题 |
| [#17497](https://github.com/ollama/ollama/pull/17497) | cmd: ollama launch 支持建议 cloud tag | OPEN | `ollama launch claude --model=kimi-k3` 时提示用户选择云端模型 |
| [#17380](https://github.com/ollama/ollama/issues/17380) | Intermittent CUDA error + silent CUDA_Host→CPU fallback | OPEN（issue）| Windows RTX 5070 Ti + gpt-oss:20b 场景下的 CUDA 初始化失败与静默回退 |
| [#17072](https://github.com/ollama/ollama/issues/17072) | OpenAI v1/chat/completions 增加 reasoning.effort 支持 | CLOSED | 社区长期请求，Gemini Flash 结构化输出场景 |

---

## 五、功能需求趋势

从 Issues 中提炼出社区最关注的 5 个方向：

1. **IDE 集成与工具调用** — VS Code Copilot Harness 回归（#17444）、Claude Code 兼容性（#16846）、Codex 启动（#17119）反复出现，开发者工作流集成是核心痛点。
2. **新模型支持** — Kimi K3 Cloud（#17235）、DeepSeek-V4-Flash（#17264/#17510）、Qwen Agent World（#16900）持续被请求，社区对前沿模型上线期待强烈。
3. **Apple Silicon / MLX 优化** — MLX vision 模型图像输入失败（#17065）、gemma4 mlx 能力缺失（#16700）、qwen3-embedding 内存损坏（#17509），Mac 用户问题集中。
4. **Ollama Cloud 稳定性与定价透明度** — Cloud 不可用（#17103/#17471）、cached input 定价与零数据保留政策的矛盾（#17489）。
5. **GPU 资源管理与可观测性** — CUDA_Host 静默 fallback（#14258/#17380）、VRAM 与系统内存分配异常（#17386）、多客户端模型反复卸载重载（#17482）。

---

## 六、开发者关注点（痛点与高频需求）

- **回归管理**：0.32.x 系列引入的 tool calling 回归（#17444）和 qwen3:30b 思考参数失效（#17292）反映出发布质量把控需加强，建议在发布说明中明确标注已知回归。
- **子进程健壮性**：llama-server 崩溃后 runner 未被正确清理（#17428/#17509/#17516）导致 API 挂起，是影响生产可用性的关键问题，PR #17516/#17515 正在修复。
- **Windows + NVIDIA 场景稳定性**：CUDA_Host → CPU 静默回退（#17380/#17386）、Windows 桌面加载卡死（#13377）、Japanese IME TUI 渲染异常（#17521）集中反映 Windows 生态体验仍需打磨。
- **多客户端共存**：VS Code + Goose 等多应用共享同一 Ollama 实例时模型反复卸载/重载（#17482），调度器需改进 runner 生命周期管理。
- **OpenAPI 规范同步**：PR #17519 指出 openapi.yaml 与实际 API 实现存在 4 处 tool call 字段不同步，影响第三方客户端集成。

---

*本报告基于 2026-08-03 抓取的 GitHub 数据生成，建议关注 #17444 和 #17516 两个 PR 的进展以评估 0.32.x 系列的修复路线。*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

# llama.cpp 社区动态日报

**日期：2026-08-03** | **仓库：ggerganov/llama.cpp**

---

## 1. 今日速览

过去 24 小时内，llama.cpp 持续推进对 **DeepSeek V4** 系列新架构（DSV4 hyper-connections、MTP、DSpark）的后端支持，Metal 与 OpenCL 平台也迎来新特性（SILU_BACK、F16 bin ops、GLU local workgroup 限制修复）。社区层面，**Qwen 3.6 27B 的缓存评估 Bug**（#22746，115 条评论）和 **GLM-5.2 在 ROCm/HIP 上的严重性能退化**（#26445）成为最热门讨论话题，反映出大模型在非 NVIDIA 硬件上的兼容性与性能仍是核心痛点。

---

## 2. 版本发布

| 版本 | 主要更新 |
|------|---------|
| **b10235** | Metal 后端新增 `SILU_BACK` 操作（f32 实现，移除 ggml-metal-ops.cpp 中冗余 assert） |
| **b10234** | Metal 后端为二元运算（bin ops）新增 **F16 支持** |
| **b10233** | OpenCL 后端限制 GLU 操作的 **local workgroup size** |
| **b10232** | Metal 实现 **DeepSeek V4 hyper-connections**（DSV4_HC_COMB/PRE/POST），含 SIMDgroup register 与 shuffle 优化 kernel |
| **b10231** | Common 模块支持 **DSpark sidecar 解析**（支持 `-hfd` tag、无完整模型时按 tag 解析、`-md` 显式禁用发现） |
| **b10229** | OpenCL 后端修复 `ggml_backend_opencl_init()` 中 **ref_count 未递增** 导致程序结束时 free() 出错 |
| **b10228** | DeepSeek V4 **MTP + DSpark** 完整方案落地 |
| **b10227** | Chat 模块新增 **Qwen3 专用解析器**（支持 `<tool_call>` 省略、更新工具分隔符、修复 trigger pattern） |
| **b10226** | SYCL 后端修复 **iGPU 分类逻辑** |
| **b10225** | Model 模块优化：仅在实际使用时加载 **MiMo V2 MTP 张量** |

---

## 3. 社区热点 Issues（Top 10）

### 3.1 #22746 — Qwen 3.6 27B 强制重处理完整 prompt（115 评论，31 👍）
- **现象**：因 KV cache 数据缺失，模型在推理时被迫重新处理整个 prompt，严重影响长上下文性能。
- **平台**：HIP/Radeon RX 7800 XT（ROCm）
- **社区反应**：社区高度关注，115 条评论讨论缓存一致性策略与 ROCm 后端实现细节。

### 3.2 #14909 — 后端缺失操作实现功能请求（49 评论，7 👍）
- **内容**：请求系统性地补全各后端（CUDA/Metal/OpenCL/SYCL/Vulkan）未实现的 GGML 操作。
- **意义**：是后端功能完整性的长期追踪议题，影响多模型在新硬件上的可用性。

### 3.3 #26369 — DeepSeek V4 支持状态追踪（27 👍）
- **内容**：由 am17an 创建，列出 DSV4 支持的待办清单：Spec-dec ✅、MTP ✅、DSpark ✅、`-sm tensor` ❌、Sparse attn ❌、其他后端 ❌、Metal ❌。
- **意义**：社区了解 DSV4 完整支持进度的核心看板。

### 3.4 #26119 — CUDA cublasSgemm_v2 在 V100 上 Speculative Decoding 失败（9 评论）
- **现象**：CUDA 12.4 + Windows 构建下，speculative decoding + vision workload 触发 `cublasSgemm_v2` 不支持参数错误。
- **影响**：限制旧架构 GPU 上的推测解码功能。

### 3.5 #26448 — MoE 专家权重通过 PCIe DMA 直读主机内存（2 👍）
- **提案**：将 MoE 专家权重保留在主机内存（pinned buffer），由 cuBLAS 直接通过 PCIe DMA 读取，避免 H2D 拷贝。
- **数据**：RTX 4090 实测可在 1.6GB VRAM 上运行 23GB MoE 模型，81GB Qwen3-235B 在 8GB 卡上可行。
- **意义**：为极端显存受限场景提供 MoE 推理新路径。

### 3.6 #25746 — json-schema-to-grammar 嵌套 string maxLength ≥ 2000 生成不可解析 GBNF（8 评论）
- **影响范围**：影响 `llama-server` router 模式下所有使用 JSON schema 作为 response_format 的工具调用。
- **严重性**：生产环境 router 功能的可靠性问题。

### 3.7 #26445 — GLM-5.2 在 ROCm/HIP 上性能严重退化（3 评论）
- **数据**：Indexer PR #25407 引入后，prefill 速度下降约 6 倍，加载时间增加约 40 倍。
- **硬件**：8x MI300X + 2x EPYC 9555。

### 3.8 #26382 — 无 V cache 模型强制使用相同 K/V cache 类型（7 评论）
- **现象**：GLM-5.2 在 `-ctk q5_1` 且未指定 `-ctv` 时，断言失败。
- **意义**：揭示模型加载逻辑对"无 V cache"场景处理不完善。

### 3.9 #26396 — SYCL oneMKL FA 路径在 Arc Pro B70 上 200K prefill 性能回归 35%（4 评论）
- **回归版本**：b10216
- **缓解**：设置 `MKL_FA_DISABLE=1` 可恢复性能。
- **意义**：Intel Arc 用户的长上下文性能倒退，影响 SYCL 后端口碑。

### 3.10 #25060 — Blackwell (SM 12.0) GGML-CUDA SOFT_MAX 崩溃（3 评论）
- **背景**：由安全研究员请 DeepSeek-v4 协助编写的补丁。
- **影响**：RTX 5090 + CUDA 13.3 上运行大模型（35B+）时崩溃。

---

## 4. 重要 PR 进展（Top 10）

| PR | 标题 | 核心内容 |
|----|------|---------|
| [#26254](https://github.com/ggml-org/llama.cpp/pull/26254) | mtmd: support Qwen3-TTS | 新增 Qwen3-TTS-12Hz-1.7B-Base 支持，含 `--tts-lang`、`--tts-speaker-file` 参数（breaking change） |
| [#25352](https://github.com/ggml-org/llama.cpp/pull/25352) | Add E8 lattice 2-bit KV cache quantization | 新增 `GGML_TYPE_E8_2`，基于 E8 lattice VQ，34 bytes/128-element head，2.125 bpe |
| [#25784](https://github.com/ggml-org/llama.cpp/pull/25784) | DeepseekV4 MTP + DSpark | 完整实现 MTP 与 DSpark 推测解码，~50% 速度提升 |
| [#26463](https://github.com/ggml-org/llama.cpp/pull/26463) | cmake: check for LLAMA_SUBPROCESS | 修复 #26451，由 Qwen3.6-27b 通过 hermes 编码 harness 生成，经 RHEL8/9 验证 |
| [#26420](https://github.com/ggml-org/llama.cpp/pull/26420) | server: add x-tool-cwd header | 为 OpenAI 兼容工具调用新增 `x-tool-cwd` 请求头，匹配 pi/claude code 行为 |
| [#26466](https://github.com/ggml-org/llama.cpp/pull/26466) | ggml-cuda: HIP replace __shfl_xor_sync with dpp | 用 dpp 指令替代 `__shfl_xor_sync`，小幅提升 HIP 性能 |
| [#26477](https://github.com/ggml-org/llama.cpp/pull/26477) | opencl: quant lm_head/decode GEMV + medium-batch GEMM 优化 | Adreno GPU  speculative decoding/MTP 全面优化 |
| [#26419](https://github.com/ggml-org/llama.cpp/pull/26419) | ggml-cuda: enable MMA FlashAttention for head dim 256 on AMD RDNA | 修复 #26220，RDNA 4 上长上下文 prompt 处理回归 |
| [#26461](https://github.com/ggml-org/llama.cpp/pull/26461) | ci: prepare to onboard AMD ROCm CI | 为 AMD Strix Halo/Point 板添加 ROCm CI 工作流（gfx1151 @ ROCm 7.2） |
| [#26454](https://github.com/ggml-org/llama.cpp/pull/26454) | ggml: add gfx90c HIP support | 修正 gfx90c/gfx909 架构分类错误（CDNA → Vega/GCN），修复重复 error token 问题 |

---

## 5. 功能需求趋势

从过去 24 小时更新的 Issues 与 PR 中，可提炼出社区最关注的五大方向：

1. **新模型架构支持** — DeepSeek V4（DSV4 hyper-connections、MTP、DSpark）、Qwen3 系列（TTS、chat parser）、GLM 5.2（Indexer）、MiMo V2 MTP、Zyphra/Zamba2-2.7B（SSM+Transformer 混合）。
2. **非 NVIDIA 后端性能与功能补全** — ROCm/HIP（gfx90c 支持、MMA FlashAttention、ref_count 修复）、SYCL（iGPU 分类、oneMKL FA 回归修复）、OpenCL（Adreno 优化、GLU workgroup 限制）、Metal（SILU_BACK、F16 bin ops）。
3. **推测解码（Speculative Decoding）优化** — DSpark sidecar 解析、MTP 加载优化、OpenCL decode GEMV 优化、RPC 端 crash 修复。
4. **MoE 模型显存突破** — PCIe DMA 直读专家权重（#26448）、indexer cache 分配优化（#26474，约 75% 缩减）。
5. **Server/Tool-Calling 可靠性** — JSON schema → GBNF 转换健壮性（#25746）、工具参数顺序兼容性（#26472）、OpenAI 兼容 message round-trip（#26473）、x-tool-cwd header（#26420）。

---

## 6. 开发者关注点

### 6.1 高频痛点

| 痛点 | 涉及 Issue/PR | 说明 |
|------|--------------|------|
| **ROCm/HIP 性能与稳定性** | #26445、#22746、#26435、#26454 | GLM-5.2 prefill 退化、Qwen 3.6 缓存 Bug、MI210 回归、gfx90c 分类错误 |
| **KV cache / 显存管理** | #26382、#26448、#26474 | 无 V cache 模型断言失败、MoE PCIe DMA 方案、indexer cache 优化 |
| **长上下文 Prefill 性能** | #26396、#26419、#25060 | SYCL oneMKL FA 回归、RDNA 4 head dim 256、Blackwell SOFT_MAX crash |
| **推测解码兼容性** | #26119、#25633、#26152 | V100 cublasSgemm_v2 不支持、RPC Flash crash、partial offload scheduler crash |
| **Tool-Calling 输出质量** | #22072、#25746、#26472、#26473 | JSON 参数格式错误、GBNF 生成不可解析、参数顺序限制、assistant content 丢失 |

### 6.2 高频需求

- **独立控制 slots (-ns) 与 parallelism (-np)**（#22921）
- **推理预算优雅终止**（#20632，避免 mid-sentence cutoff）
- **Vulkan 张量并行**（#22648）
- **SYCL 后端 Q1 量化支持**（#21641）
- **流水线并行（pipeline parallelism via tcp/ip）**（#22436）
- **实时统计（realtime stats）**（#25519）
- **主机配置文件（host config file）**（#26118）

### 6.3 趋势观察

- **AI 编码助手深度参与开发**：多个 PR 由 AI 编码 harness（如 hermes）生成或辅助（#26463、#26451），反映 AI 辅助软件工程已深入底层 C++ 项目。
- **Apple Silicon 持续深耕**：Metal 后端新操作（SILU_BACK、F16 bin ops、DSV4 hyper-connections）密集落地，macOS/iOS 平台正在快速追赶 CUDA 功能集。
- **ROCm CI 基础设施筹备**：#26461 表明项目正为 AMD 新一代 Strix Halo/Point 板建立 CI，这是 AMD GPU 在 llama.cpp 上走向生产就绪的关键信号。

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*