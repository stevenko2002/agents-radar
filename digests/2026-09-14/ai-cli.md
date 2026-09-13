# AI CLI 工具社区动态日报 2026-09-14

> 生成时间: 2026-09-13 22:15 UTC | 覆盖工具: 12 个

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

**今日重點（2026‑09‑14）**  

- **Qwen Code**：發布夜間版本 `v0.23.3-nightly.20260913.faa395885e`，移除釘釘通道後台響應聚合邏輯並更新 CUA Driver 至 v0.20.6。  
  https://github.com/QwenLM/qwen-code/releases/tag/v0.23.3-nightly.20260913.faa395885e  

- **llama.cpp**：連續發布 b10934‑b10948 共 11 個版本，主要修復 SYCL/Vulkan/OpenCL/Metal 後端兼容性、JSON Schema 與 Qwen3‑Coder 解析以及 s390x/CI 改進。  
  https://github.com/ggml-org/llama.cpp/releases/tag/b10948  

- **Claude Code**：合併 PR #93951，將 `diff`、`sec-default`、`telemetry` 測試移至 `mods` 同目錄，提升模組可維護性。  
  https://github.com/anthropics/claude-code/pull/93951  

- **OpenAI Codex**：合併 PR #45276，在 agents 概覽中新增 worktree 會話創建並綁定快捷鍵 `w`。  
  https://github.com/openai/codex/pull/45276  

- **Ollama**：合併 PR #18424，清理 `ollama create --quantize` 產生的中間 F16 blob，解決磁碟洩漏問題。  
  https://github.com/ollama/ollama/pull/18424  

- **GitHub Copilot CLI**：依賴機器人合併 PR #4827，將 `actions/stale` 從 9.1.0 升級至 11.0.0，改善過時 Issue/PR 管理。  
  https://github.com/github/copilot-cli/pull/4827  

- **OpenCode**：合併 PR #42296，移除 Anthropic 風格 `thinking` 塊間的冗餘換行，優化顯示。  
  https://github.com/anomalyco/opencode/pull/42296

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据截止：2026-09-14｜来源：anthropics/skills**

> 说明：本次提供的 PR 数据中评论数字段均为 `undefined`，因此 PR 排序依据为「关联 Issue 讨论热度 + 更新活跃度 + 影响面」综合判断；Issue 部分有完整评论数，可直接量化。

---

## 一、热门 Skills 排行（PR）

| 排名 | Skill / PR | 功能 | 讨论热点 | 状态 |
|---|---|---|---|---|
| 1 | **skill-creator 修复** [#1298](https://github.com/anthropics/skills/pull/1298) | 修复 `run_eval.py` 恒报 0% recall，并解决 Windows 流读取、触发检测、并行 worker 问题 | 直接对应 Issue #556（12 评论 / 7👍，10+ 次独立复现），"优化循环在对着噪声调参" | OPEN（更新 2026-09-13，最活跃） |
| 2 | **mcp-builder 兼容修复** [#1742](https://github.com/anthropics/skills/pull/1742) | 适配 `mcp>=2.0.0` 的 `streamable_http_client` 重命名与自定义 header 配置 | 修复 #1668，MCP 生态版本断裂的刚需补丁 | OPEN（2026-09-08 新建，上升最快） |
| 3 | **document-typography** [#514](https://github.com/anthropics/skills/pull/514) | 文档排版质控：孤词换行、寡行标题、编号错位 | 触及 Claude 生成文档的普遍性缺陷，用户"不会主动要求好排版" | OPEN |
| 4 | **skill-quality / security-analyzer** [#83](https://github.com/anthropics/skills/pull/83) | 五维度质量分析 + 安全分析两个元 Skill | 与 Issue #492 的信任边界争议呼应，安全类 Skill 缺口明显 | OPEN |
| 5 | **pyxel 复古游戏开发** [#525](https://github.com/anthropics/skills/pull/525) | 基于 pyxel-mcp 的像素/8-bit 游戏开发工作流 | 长期存活且 2026-09-13 仍有更新，社区持续关注 | OPEN |
| 6 | **Hivemind 多智能体编排** [#1628](https://github.com/anthropics/skills/pull/1628) | Claude Code 作为唯一规划者，把机械工作外包给免费模型 worker | "昂贵模型上下文才是稀缺资源"的成本叙事 | OPEN |
| 7 | **self-audit 质量门** [#1367](https://github.com/anthropics/skills/pull/1367) | 交付前机械文件校验 + 四维推理审计 | 与 Issue #1385 提案同一作者，质量门概念成型中 | OPEN |
| 8 | **docx / pdf 系列修复** [#541](https://github.com/anthropics/skills/pull/541)、[#538](https://github.com/anthropics/skills/pull/538) | 修复 `w:id` 冲突致文档损坏、SKILL.md 大小写引用错误 | 官方内置 Skill 的"低成本高价值"缺陷修复 | OPEN |

> 注：本次列表中 **无已合并（merged）PR**，全部为 OPEN 状态。

---

## 二、社区需求趋势（来自 Issues）

1. **安全与信任边界（最强诉求）** — [#492](https://github.com/anthropics/skills/issues/492) 以 **43 条评论**断层第一：社区 Skill 冒用 `anthropic/` 命名空间，用户可能对非官方 Skill 授予高权限。相关：[#1175](https://github.com/anthropics/skills/issues/1175)（SPO 文档权限逻辑写在 SKILL.md 中的风险，已关闭）。
2. **元工具可靠性（skill-creator / mcp-builder 自测失效）** — [#556](https://github.com/anthropics/skills/issues/556)（12 评论）、[#1390](https://github.com/anthropics/skills/issues/1390)（evaluation.py 对真实 MCP 服务器恒 0/N）。**评测链路本身不可信**是贯穿全仓库的系统性问题。
3. **分发与共享机制** — [#228](https://github.com/anthropics/skills/issues/228)（组织内共享，16 评论 / 8👍）、[#189](https://github.com/anthropics/skills/issues/189)（document-skills 与 example-skills 内容重复导致上下文污染，9👍）。
4. **上下文/Token 效率** — [#1487](https://github.com/anthropics/skills/issues/1487)（claude-api 单次工具调用注入约 156k tokens）、[#1329](https://github.com/anthropics/skills/issues/1329)（compact-memory 符号化压缩记忆）、[#202](https://github.com/anthropics/skills/issues/202)（skill-creator 文风冗余，已关闭）。
5. **文档与办公格式** — ODT（[#486](https://github.com/anthropics/skills/pull/486)）、docx 孤儿批注（[#1734](https://github.com/anthropics/skills/pull/1734)）、排版质控，是提交量最稳定的方向。
6. **互操作与多平台** — [#29](https://github.com/anthropics/skills/issues/29)（AWS Bedrock 支持）、[#16](https://github.com/anthropics/skills/issues/16)（把 Skills 暴露为 MCP）、mcp>=2 适配。
7. **质量治理与多智能体** — [#1385](https://github.com/anthropics/skills/issues/1385) 三段式推理质量门、[#412](https://github.com/anthropics/skills/issues/412) agent-governance（已关闭）。

---

## 三、高潜力待合并 Skills（活跃 OPEN PR）

| PR | 落地概率判断 | 理由 |
|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) skill-creator 0% recall 修复 | **高** | 有明确 Issue 复现链（#556），2026-09-13 仍在更新，阻塞官方优化闭环 |
| [#1742](https://github.com/anthropics/skills/pull/1742) mcp>=2 兼容 | **高** | 版本升级导致的硬性破坏，修复面窄、风险低 |
| [#1724](https://github.com/anthropics/skills/pull/1724) mcp-builder 默认模型升至 claude-sonnet-5 | **高** | 一行级配置更新，纯陈旧数据修正 |
| [#1607](https://github.com/anthropics/skills/pull/1607) 标记 4 个已退役模型 ID | **高** | 文档准确性修复，直接 Fixes #1603 |
| [#1602](https://github.com/anthropics/skills/pull/1602) 评测序列化/指标/编码综合修复 | **中高** | 覆盖面广，可能需拆分审阅 |
| [#1734](https://github.com/anthropics/skills/pull/1734) docx 孤儿批注检测 | **中** | 新建、摘要为空，尚缺讨论沉淀 |
| [#525](https://github.com/anthropics/skills/pull/525) pyxel 游戏开发 | **中** | 存续 6 个月且持续更新，社区黏性高但属垂直领域 |
| [#1615](https://github.com/anthropics/skills/pull/1615) scnet-hpc | **中** | 领域专用（Slurm/HPC），受众窄但需求真实 |
| [#1628](https://github.com/anthropics/skills/pull/1628) Hivemind | **中** | 依赖外部 opencode，架构取向需官方定调 |

---

## 四、Skills 生态洞察

**一句话总结：** 社区最集中的诉求已从"多造 Skill"转向"让 Skill 可信可用"——**安全与命名空间信任（#492）、元工具自测链路失效（#556/#1390）与上下文开销（#1487）**共同指向同一个核心焦虑：Skill 生态的**治理、验证与分发基础设施**，而非功能数量本身。

---

# Claude Code 社区动态日报（2026-09-14）

## 1. 今日速览
过去 24 小时内 Claude Code 未发布新版本，但 GitHub 仓库集中批量关闭了大量历史 `stale` Issue（共 50 条更新，其中 30 条高讨论度 Issue 均被关闭），同时 PR 活动聚焦于 `mods` 模块化测试与构建管线的重构。社区反馈的核心矛盾集中在模型安全策略误判、跨平台打包更新提示失效以及 IDE/终端集成体验三类问题上。

## 2. 版本发布
无新版本发布（据提供数据，Releases 为空）。

## 3. 社区热点 Issues（精选 10 条）
1. **#76026** [MODEL] Sonnet 5 将 `UserPromptSubmit` 误判为提示注入并拒绝执行指令  
   - 重要性：在 AWS Bedrock 平台下模型安全策略过严，直接阻断自动化工作流；已复现。社区评论 4 条。  
   - 链接：https://github.com/anthropics/claude-code/issues/76026

2. **#74699** iTerm2 中 CLI 以守护进程子会话启动，阻塞 Agents 面板/会话切换  
   - 重要性：macOS 用户正常终端启动被错误路由为 `CLAUDE_CODE_CHILD_SESSION=1`，导致核心功能不可用。评论 4 条。  
   - 链接：https://github.com/anthropics/claude-code/issues/74699

3. **#86370** 跨会话消息自 2.1.227 起静默丢弃（发送方成功，接收方无感知）  
   - 重要性：多会话协作场景下的数据丢失，影响团队使用；获 1 👍。评论 4 条。  
   - 链接：https://github.com/anthropics/claude-code/issues/86370

4. **#84331** macOS CLI 登录循环：Keychain 凭据 blob 中所有 token 被清空  
   - 重要性：认证系统损坏导致用户无法登录，关联 #83345 但影响面更广。评论 4 条。  
   - 链接：https://github.com/anthropics/claude-code/issues/84331

5. **#84736** [MODEL] 空标题模型行为异常报告  
   - 重要性：模型类反馈，虽摘要缺失但评论达 4 条，说明存在未明确定位的模型交互问题。  
   - 链接：https://github.com/anthropics/claude-code/issues/84736

6. **#84206** 错误向欧盟 B2B 客户收取 VAT 税款  
   - 重要性：计费合规缺陷，涉及商业用户财务流程。评论 4 条。  
   - 链接：https://github.com/anthropics/claude-code/issues/84206

7. **#73886** 自定义 `fileSuggestion` 命令 `.map()` 误传数组索引为分数，MCP 资源排权重异常  
   - 重要性：文件推荐逻辑错误导致 MCP 资源压倒正常文件，影响编码效率。评论 4 条，已复现。  
   - 链接：https://github.com/anthropics/claude-code/issues/73886

8. **#75613** 无头 `claude -p` 启动时无限挂起（无输出、无 transcript）  
   - 重要性：launchd 定时任务场景下因后台 daemon 握手无超时导致进程卡死数小时。评论 3 条。  
   - 链接：https://github.com/anthropics/claude-code/issues/75613

9. **#74052** `AskUserQuestion` 触发 Notification hook 类型误标为 `permission_prompt`  
   - 重要性：钩子语义混淆，使权限请求与提问通知无法区分，干扰自动化监控。评论 3 条。  
   - 链接：https://github.com/anthropics/claude-code/issues/74052

10. **#86231** Homebrew-cask 安装时 npm 版本领先导致“更新可用”提示永不消失  
    - 重要性：包管理器版本滞后引发误报，影响用户信任。评论 2 条。  
    - 链接：https://github.com/anthropics/claude-code/issues/86231

## 4. 重要 PR 进展（全部 7 条均列）
1. **#79148** fix: 为示例规则文件名添加强制 `hookify.` 前缀  
   - 修复文档与加载器 (`core/config_loader.py`) 不一致，避免静默忽略。  
   - 链接：https://github.com/anthropics/claude-code/pull/79148

2. **#89404** `validate-agent.sh` 不在首个警告中止，停止误判合法 agent  
   - 修复 `set -euo pipefail` 下算术表达式导致的提前退出，关联 issue #83803。  
   - 链接：https://github.com/anthropics/claude-code/pull/89404

3. **#41621** 添加缺失的 CLI 构建基础设施与打包配置  
   - 从 TypeScript 源码用 esbuild 打包为单一可执行文件，完善构建文档。  
   - 链接：https://github.com/anthropics/claude-code/pull/41621

4. **#93951** mods: 将 diff、sec-default、telemetry 测试移至 mods 同目录  
   - 测试贴近模块，由 `claude plugin test` 运行，提升可维护性。  
   - 链接：https://github.com/anthropics/claude-code/pull/93951

5. **#93932** mods: telemetry 的 types 路径改为 `./` 相对引用  
   - 单行修复 manifest schema 拒绝裸相对路径的问题。  
   - 链接：https://github.com/anthropics/claude-code/pull/93932

6. **#93452** mods/diff: 对齐内置 `/diff` 面板样式与交互  
   - 统一 hunk 绘制、关闭按钮、空状态及窄终端适配。  
   - 链接：https://github.com/anthropics/claude-code/pull/93452

7. **#93912** mods: 为 diff、sec-default、telemetry 添加基于插件声明的单元测试  
   - 利用引擎 `$` 与 hooks 模拟，强化模块质量。  
   - 链接：https://github.com/anthropics/claude-code/pull/93912

## 5. 功能需求趋势
从 Issue 标签与内容提炼，社区当前最关注的方向：
- **模型行为可控性**：减少误判（如提示注入错杀）、新模型（Sonnet 5）适配与反馈。
- **IDE/终端深度集成**：VS Code 扩展状态同步、iTerm2/桌面端开机启动、Agents 面板稳定性。
- **打包与更新可靠性**：Homebrew/apt 等包管理器下的版本检测误报、自动更新静默失败。
- **权限与 Hooks 精确性**：Notification 类型区分、权限允许列表在特殊路径（UNC）生效。
- **性能与资源**：大 monorepo 下 Glob/ugrep 超时、无头模式内存压力挂起。
- **跨会话与协作**：消息可靠投递、会话管理。
- **无障碍**：屏幕阅读器模式配置开关（#87123）。

## 6. 开发者关注点
- **痛点**：大量历史 Issue 被批量标 `stale` 关闭但未给出根因修复，开发者质疑响应质量；跨平台（macOS/Windows/Linux/WSL）特定 bug 反复出现；更新提示逻辑在第三方包管理下频繁误报；模型安全策略过严导致正常指令被拒；计费合规（VAT）与 Keychain 凭据损坏等底层故障。
- **高频需求**：稳定的更新通知机制、准确的 hooks 事件类型、大仓库搜索性能优化、清晰的逃避开关文档（如 `CLAUDE_CODE_GLOB_*`）、IDE 扩展与 CLI 状态一致、可配置的无障碍支持。

---
*本报告基于 2026-09-13 更新的 GitHub 公开数据生成，覆盖 anthropics/claude-code 仓库 Issues 与 PRs。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-09-14）

## 1. 今日速览
过去 24 小时无新 Release 发布，社区讨论高度集中在 Windows 平台沙箱/桌面端故障与配额消耗异常两大痛点。代码层面，自动化 bot（copyberry[bot]）合并了 16 个 PR，主要增强 TUI 体验与 Windows 沙箱底层健壮性。

## 2. 版本发布
无新版本发布（过去 24 小时 Releases 为空），本节省略。

## 3. 社区热点 Issues（精选 10 条）

1. **#41290 [Windows][WSL] 切换 Agent 环境后项目创建/删除失败**  
   https://github.com/openai/codex/issues/41290  
   - 重要性：评论 62、👍49，为当日最热 Issue；直接影响 Windows+WSL 用户的核心工作流。  
   - 社区反应：大量用户跟帖确认复现，呼吁优先修复 WSL 集成。

2. **#41220 [Meta] 配额消耗异常与计费不一致跨报告追踪**  
   https://github.com/openai/codex/issues/41220  
   - 重要性：评论 41、👍14，汇总了多起配额透支案例，反映计费系统信任危机。  
   - 社区反应：用户持续补充日志，要求公开用量核算逻辑。

3. **#30918 [Plus] 5 小时限额在约 6 分钟内从 70% 跌至 100%**  
   https://github.com/openai/codex/issues/30918  
   - 重要性：评论 26、👍9，早期遗留至今的高频投诉，涉及 Plus 订阅切身利益。  
   - 社区反应：质疑本地 token 统计与云端计费偏差。

4. **#31073 [Windows 沙箱] Git HTTPS 远程操作失败/崩溃**  
   https://github.com/openai/codex/issues/31073  
   - 重要性：评论 23，揭示原生 Windows 沙箱网络隔离缺陷，阻碍代码推送。  
   - 社区反应：对比 PowerShell 正常，指向沙箱证书/代理问题。

5. **#44781 [Desktop] 编辑并重发排队消息触发 “App-server queued follow-up no longer exists”**  
   https://github.com/openai/codex/issues/44781  
   - 重要性：评论 22、👍26，桌面端消息队列逻辑 bug，影响交互连续性。  
   - 社区反应：多位 Windows 用户验证，期待热修。

6. **#37856 [VS Code 扩展] 陈旧线程所有者阻塞聊天（“在其他应用打开”）**  
   https://github.com/openai/codex/issues/37856  
   - 重要性：评论 13、👍9，扩展重连后状态不一致，降低 IDE 内使用体验。  
   - 社区反应：建议增加线程所有权强制释放机制。

7. **#42088 [自定义模型] function_call_output 缺 call_id 导致严格上游 400**  
   https://github.com/openai/codex/issues/42088  
   - 重要性：评论 11、👍5，影响兼容第三方 /responses 服务（如 DeepSeek）。  
   - 社区反应：希望遵循严格 schema 校验。

8. **#44035 [Windows App] 近期聊天历史消失，read_thread  stale**  
   https://github.com/openai/codex/issues/44035  
   - 重要性：评论 9、👍3，桌面端数据层回滚异常，用户丢失上下文。  
   - 社区反应：要求改进本地缓存与云端同步。

9. **#45119 [macOS 14.2] 沙箱启动失败（TIOCSTI 未绑定变量）**  
   https://github.com/openai/codex/issues/45119  
   - 重要性：评论 8，Apple Silicon 上沙箱初始化错误，阻断 CLI 使用。  
   - 社区反应：指出 main 分支同存在问题，需尽快修补。

10. **#40452 [Desktop] 更新后分页线程历史被单次中断首轮替代**  
    https://github.com/openai/codex/issues/40452  
    - 重要性：评论 8、👍4，桌面端升级引发历史渲染回退。  
    - 社区反应：建议增加迁移校验。

## 4. 重要 PR 进展（精选 10 条，均由 copyberry[bot] 合并）

1. **#45276 在 agents 概览中添加 worktree 会话创建**  
   https://github.com/openai/codex/pull/45276  
   - 功能：支持从缓存默认分支建 worktree，绑定快捷键 `w`。

2. **#45271 增大 TUI 视口时保留终端回滚**  
   https://github.com/openai/codex/pull/45271  
   - 修复：解决 QTermWidget/xterm.js 视口增长丢弃历史行的问题。

3. **#45262 将粘贴路由到活动历史搜索查询**  
   https://github.com/openai/codex/pull/45262  
   - 功能：Ctrl+R 搜索中粘贴直接更新查询而非走普通 composer。

4. **#45255 从命令中心直接打开新会话**  
   https://github.com/openai/codex/pull/45255  
   - 功能：用会话列表替代内联任务编辑器，`n` 开空白会话不中断 agent。

5. **#45248 使用捕获的步骤设置填充请求元数据与工具钩子**  
   https://github.com/openai/codex/pull/45248  
   - 修复：确保元数据分析实际执行步的配置而非初始值。

6. **#45224 在沙箱设置前注册 Windows 桌面卸载归属**  
   https://github.com/openai/codex/pull/45224  
   - 修复：未登录/未配沙箱时也能记录安装所有者以便清理。

7. **#45182 复制 SID 前校验 Windows 沙箱令牌组**  
   https://github.com/openai/codex/pull/45182  
   - 修复：防止令牌缓冲区越界，提升沙箱安全性。

8. **#45176 将 Windows MXC 沙箱接入命令执行**  
   https://github.com/openai/codex/pull/45176  
   - 功能：显式选择 MXC 后端，传递身份至 exec-server 与违规分类。

9. **#45149 musl 构建使用 OpenSSL 3.6.4**  
   https://github.com/openai/codex/pull/45149  
   - 修复：静态编译 3.6.4 安全版，保持 3.x ABI。

10. **#45135 TUI 中换行前预览流式散文**  
    https://github.com/openai/codex/pull/45135  
    - 功能：长单行响应流式可见，改善阅读体验。

## 5. 功能需求趋势
- **跨平台稳定性**：Windows 沙箱（setup、凭据、Git 远程）、macOS 沙箱启动为最高频缺陷。
- **配额与计费透明**：异常透支类 Issue 长尾显著，用户迫切需求用量明细与预测。
- **桌面端数据一致性**：聊天历史丢失、线程同步、远程控同步问题突出。
- **IDE 与扩展集成**：VS Code 线程所有权、MCP 启动兼容性反映深度开发流诉求。
- **TUI 交互打磨**：bot PR 集中优化视口、粘贴、预览，说明官方重视终端体验。
- **模型与工具合规**：严格上游兼容性（call_id、function_call）渐受关注。

## 6. 开发者关注点
- **痛点**：Windows `helper_failed` 安装阻塞（#40550/#45003）、SEC_E_NO_CREDENTIALS 沙箱凭据缺失（#42621）、桌面端历史空项（#45203/#44035）、配额莫名耗尽（#41220 家族）。
- **高频需求**：① 修复 Windows 沙箱网络/权限模型；② 提供配额实时审计接口；③ 增强 VS Code 扩展重连鲁棒性；④ 保障会话历史跨设备/更新持久化；⑤ 降低模型指令违背与冗余输出（#45289）。

> 日报基于 openai/codex 仓库 2026-09-13 快照生成，链接均指向对应 Issue/PR。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-09-14）

## 1. 今日速览
过去 24 小时内 Copilot CLI 未发布新版本，但社区问题反馈活跃，共更新/新增 5 个 Issue，主要集中在子代理性能与稳定性、语音模式崩溃及工作区 MCP 配置加载失效等方面；同时 dependabot 自动提交并合并了 2 个 GitHub Actions 依赖升级 PR，日常维护平稳推进。

## 2. 版本发布
无新版本发布（过去 24 小时无 Release 记录），本节省略。

## 3. 社区热点 Issues
以下为本期值得关注的 5 个 Issue（数据集中仅提供 5 条，均列出）：

- **#2147 [CLOSED] CAIP 400: input item ID does not belong to this connection**  
  链接：https://github.com/github/copilot-cli/issues/2147  
  重要性：暴露了使用 gpt-5.4 等模型时 WebSocket 连接校验错误导致执行中断，影响高频对话稳定性。社区反应：已关闭，7 条评论、1 个赞，说明已定位或复现后处理。

- **#4829 [OPEN] [triage] [Bug] Subagents executing long tool-call sequences in a single turn fail prompt caching and compound token consumption**  
  链接：https://github.com/github/copilot-cli/issues/4829  
  重要性：自主子代理单轮数百次工具调用致使提示缓存失效、令牌消耗叠加，直接拉高使用成本并拖慢响应。社区反应：新提交，1 条评论，待 triage。

- **#2254 [OPEN] [area:agents] Add live progress streaming for background sub-agents**  
  链接：https://github.com/github/copilot-cli/issues/2254  
  重要性：功能请求，要求为多阶段编排的后台子代理提供实时进度流，提升可观测性。社区反应：1 条评论，需求描述清晰，暂无赞。

- **#4833 [OPEN] [triage] Voice mode crashes CLI with ONNX Runtime assertion in Nemotron ASR on Linux**  
  链接：https://github.com/github/copilot-cli/issues/4833  
  重要性：Linux 下启用语音输入即触发 SIGABRT 核心转储，本地 Nemotron ASR 模型处理音频时崩溃，阻塞语音功能落地。社区反应：刚创建，0 评论。

- **#4832 [OPEN] [triage] Workspace .mcp.json is never loaded in CLI 1.0.83**  
  链接：https://github.com/github/copilot-cli/issues/4832  
  重要性：仓库根目录 `.mcp.json` 被完全忽略，`mcp list` 无 Workspace 组且服务未启动，属功能性回归。社区反应：刚创建，0 评论。

## 4. 重要 PR 进展
本期仅 2 个 PR 更新，均为依赖机器人提交并已关闭：

- **#4827 [CLOSED] build(deps): bump actions/stale from 9.1.0 to 11.0.0**  
  链接：https://github.com/github/copilot-cli/pull/4827  
  内容：依赖升级，将 `actions/stale` 从 9.1.0 升到 11.0.0，优化仓库陈旧 Issue/PR 管理流程。

- **#4828 [CLOSED] build(deps): bump actions/github-script from 7.1.0 to 9.0.0**  
  链接：https://github.com/github/copilot-cli/pull/4828  
  内容：依赖升级，将 `actions/github-script` 从 7.1.0 升到 9.0.0，提升工作流脚本能力。

## 5. 功能需求趋势
从本期 Issues 可提炼出社区当前最关注的方向：
- **Agent 可观测性与编排**：后台子代理实时进度流（#2254）、长任务透明化。
- **Agent 性能与成本优化**：子代理单轮大量工具调用的提示缓存与令牌消耗问题（#4829）。
- **多模态稳定性**：语音输入在 Linux 的崩溃修复（#4833）。
- **MCP 生态集成**：工作区级 `.mcp.json` 正确加载（#4832）。
- **连接与协议健壮性**：WebSocket 输入项归属校验错误（#2147）。

## 6. 开发者关注点
- **痛点**：子代理长序列调用导致缓存失效与代币浪费；语音模式在 Linux 直接崩溃；工作区 MCP 配置静默失效；偶发 WebSocket 连接报错使任务失败。
- **高频需求**：希望增强后台 agent 的实时进度与状态反馈；要求更稳定的工具调用与本地模型推理；期望 MCP 配置能按工作区隔离并自动启动；降低自主代理的运行成本。

> 报告基于 github.com/github/copilot-cli 过去 24 小时公开动态生成，供开发者快速掌握社区脉搏。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI 社区动态日报（2026-09-14）**  

---

### 1. 今日速览
- 过去 24 小时内未有新版本发布，也没有 Issue 更新。  
- 仅有一个待合并的 Pull Request #2641，聚焦于 **OpenAI‑compatible 提供商的文档说明**，旨在澄清自定义端点、API‑Key 与模型 ID 的使用方式。  
- 整体社区活动较为平静，主要集中在文档改进上。

### 2. 版本发布
> **无新版本** （过去 24 小时内没有发布 Release），故本节省略。

### 3. 社区热点 Issues
- **过去 24 小时内无 Issue 更新**，因此暂无可供挑选的热点 Issue。  
- 若需查看历史热点，可访问仓库的 Issues 页面：[https://github.com/MoonshotAI/kimi-cli/issues](https://github.com/MoonshotAI/kimi-cli/issues)

### 4. 重要 PR 进展
| PR 编号 | 标题 | 作者 | 更新时间 | 主要内容 | 链接 |
|--------|------|------|----------|----------|------|
| #2641 | docs(providers): clarify OpenAI-compatible configuration | QIU-Guanzong | 2026-09-13 | - 说明自定义 OpenAI‑compatible 提供商需要提供 API‑root 基础 URL 以及服务接受的 model ID。<br>- 强调非空的 `OPENAI_BASE_URL` 和 `OPENAI_API_KEY` 会覆盖 `openai_legacy` 与 `openai_responses` 两种提供商的配置。<br>- 保持英文和中文文档同步更新。 | [https://github.com/MoonshotAI/kimi-cli/pull/2641](https://github.com/MoonshotAI/kimi-cli/pull/2641) |

### 5. 功能需求趋势
- 从唯一的更新 PR 可看出，社区目前对 **配置文档的清晰度和易用性** 有较高关注度。  
- 用户尤其希望能够快速了解如何在 Kimi CLI 中接入自定义的 OpenAI‑compatible 端点（如本地模型服务、第三方代理等），并明确环境变量与提供商字段的覆盖规则。  
- 这表明在 **“多提供商支持 + 配置透明度”** 方向上，文档改进是当前的首要需求。

### 6. 开发者关注点
- **痛点**：现有文档对自定义 OpenAI‑compatible 提供商的描述不够明确，导致用户在设置 `OPENAI_BASE_URL`、`OPENAI_API_KEY` 时容易产生混淆。  
- **高频需求**：  
  1. 提供完整的配置示例（包括 legacy 与 responses 两种模式）。  
  2. 明确说明何时会被环境变量覆盖、何时会使用提供商内部字段。  
  3. 保持中英文文档同步，以便全球开发者快速上手。  

> 建议后续在合并 #2641 后，继续跟进相关 Issue（如配置验证、错误提示）以及用户反馈的 IDE 集成、性能优化等方向，以保持功能文档与实际使用体验的同步提升。  

---  

*本日报基于 GitHub 公开数据生成，如有遗漏或需补充，请查看仓库完整动态：[https://github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期：** 2026-09-14

## 🚀 今日速览
今日 OpenCode 社区活跃集中在 **v2.0 版本的 UI 适配性**与**核心稳定性修复**上。大量用户对强制切换的“新布局（New Layout）”不满，认为其缺乏多工作树（Multiple Worktrees）支持。同时，开发者团队修复了多个关于 Windows 环境下 Session 挂起、Token 统计错误以及 MCP 工具加载失败的严重 Bug。

---

## 📦 版本发布
*   *过去 24 小时内无新版本发布*

---

## 🔥 社区热点 Issues (Top 10)

1. **#4283 复制剪贴板失效**
   - **摘要：** 用户反馈在 1.0.62 版本中，选中的 AI 响应无法复制到剪贴板。
   - **关注度：** 评论数 133，点赞 124。是目前影响体验最大的 Bug之一。
   - [查看 Issue](https://github.com/anomalyco/opencode/issue/4283)

2. **#48335 新布局缺失多工作树支持**
   - **摘要：** 系统强制用户切换到新布局，但目前不支持多工作树（Multiple Worktrees），导致多项目并行开发困难。
   - **关注度：** 多个开发者反馈这严重影响了生产力效率。
   - [查看 Issue](https://github.com/anomalyco/opencode/issue/48335)

3. **#40516 桌面端启动时无法加载模型/MCP**
   - **摘要：** 从 v1.18.5 版本开始，约 80% 的用户在启动时无法加载提供程序、模型或 MCP 信息。
   - **关注度：** 属于严重的版本退化问题（Regression）。
   - [查看 Issue](https://github.com/anomalyco/opencode/issue/40516)

4. **#43277 Session 永久卡死**
   - **摘要：** Session 在正常使用中会进入卡死状态（拒绝新消息），且重启系统也无法恢复。
   - **关注度：** 严重影响会话持久性。
   - [查看 Issue](https://github.com/anomalyco/opencode/issue/43277)

5. **#36423 v2 背景子代理缺乏取消支持**
   - **摘要：** v2 版本的 `subagent` 工具虽然支持会话恢复，但无法取消正在运行的后台子代理。
   - **关注度：** 开发者关注此功能性缺失。
   - [查看 Issue](https://github.com/anomalyco/opencode/issue/36423)

6. **#42324 Token 计数覆盖错误**
   - **摘要：** 在多步工具调用（Multi-step tool calls）中，系统会覆盖前一步的 Token 计数，只保留了最后一步的数据。
   - **关注度：** 导致额度统计不准确。
   - [查看 Issue](https://github.com/anomalyco/opencode/issue/42324)

7. **#48741 Muse Spark 模型加密错误**
   - **摘要：** 当模型接收图像或调用工具时，在 Zen 平台上报错 `reasoning encrypted_content not issued`。
   - **关注度：** 针对特定模型族的兼容性问题。
   - [查看 Issue](https://github.com/anomalyco/opencode/issue/48741)

8. **#34442 Windows 离线安装损坏**
   - **摘要：** Windows 安装包未包含 `ripgrep`，导致在离线环境下 `grep`、`glob` 等核心工具全部失效。
   - **关注度：** 离线工作场景的痛点。
   - [查看 Issue](https://github.com/anomalyco/opencode/issue/34442)

9. **#46426 新 UI缺失 MCP 开关**
   - **摘要：** 用户在新的界面中找不到开启 MCP 的开关，该开关在旧版（Legacy UI）可用。
   - **关注度：** UI 迁移一致性问题。
   - [查看 Issue](https://github.com/anomalyco/opencode/issue/46426)

10. **#23153 加密货币支付请求**
    - **摘要：** 社区建议在 OpenCode Go 的支付方案中支持加密货币。
    - **关注度：** 具有代表性的功能建议。
    - [查看 Issue](https://github.com/anomalyco/opencode/issue/23153)

---

## 🛠 重要 PR 进展 (Top 10)

1. **#42296 修复 Reasoning 块间的空行**
   - **内容：** 移除 Anthropic 风格 `thinking` 块之间的冗余文本分隔符，优化显示。
   - [查看 PR](https://github.com/anomalyco/opencode/pull/42296)

2. **#42292 恢复孤立任务 (Orphaned tasks)**
   - **内容：** 修复了 Session 运行后后台任务无法正确恢复的问题。
   - [查看 PR](https://github.com/anomalyco/opencode/pull/42292)

3. **#42290 缩小 Review 面板范围**
   - **内容：** 使 Review 面板仅显示当前 Session 修改的文件，而非整个项目目录的差异。
   - [查看 PR](https://github.com/anomalyco/opencode/pull/42290)

4. **#42283 修复压缩摘要重排序问题**
   - **内容：** 修复了 `filterCompacted` 触发两次完成完成的逻辑错误。
   - [查看 PR](https://github.com/anomalyco/opencode/pull/42283)

5. **#42281 修复外部插件启动配置应用**
   - **内容：** 确保在启动的 Batch 提交后能正确应用外部插件的配置更改。
   - [查看 PR](https://github.com/anomalyco/opencode/pull/42281)

6. **#42278 修复 Shell Tail 尾随换行**
   - **内容：** 解决 `tail()` 函数在处理超大行且末尾有换行符时丢失连接符的问题。
   - [查看 PR](https://github.com/anomalyco/opencode/pull/42278)

7. **#42274 修复 PowerShell 多行输出编码**
   - **内容：** 解决 Windows 环境下通过 `cmd.exe` 包装 PowerShell 命令时丢失换行符的问题。
   - [查看 PR](https://github.com/anomalyco/opencode/pull/42274)

8. **#42262 修复 TUI Skill 描述对齐**
   - **内容：** 修复了宽字符下 TUI 界面技能描述的对齐异常。
   - [查看 PR](https://github.com/anomalyco/opencode/pull/42262)

9. **#42257 修复配置持久化**
   - **内容：** 修复了 `client.update` (PATCH 请求) 返回成功但配置未保存到磁盘的 Bug。
   - [查看 PR](https://github.com/anomalyco/opencode/pull/42257)

10. **#42252 跳过加载失败的工具文件**
    - **内容：** 在构建工具注册表时，防止单个 `.js/.ts` 文件加载错误导致整体崩溃。
    - [查看 PR](https://github.com/anomalyco/opencode/pull/42252)

---

## 📈 功能需求趋势

*   **UI/UX 迁移阵痛：** 社区对 v2 强制的“新布局”极度抵触，用户强烈要求保留旧版布局开关，并要求新布局必须支持多工作树（Multiple Worktrees）管理。
*   **Windows 稳定性：** 针对 Windows/WSL 环境的路径处理（绝对路径 vs 相对路径）以及离线包完整性是目前的 Bug 高发区。
*   **工具链深度集成：** 开发者开始关注 MCP 工具的 Schema 校验问题（如 Gemini 对空数组的拒绝）以及子代理（Subagent）的生命周期。
*   **精细化统计：** 对 Token 统计的准确性（尤其是多步调用场景下）是高级用户非常关注的细节。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-09-14

> 数据来源：github.com/badlogic/pi-mono ｜ 统计窗口：过去 24 小时

---

## 一、今日速览

今日无新版本发布，社区活动集中在 **TUI 渲染性能** 与 **流式/压缩（compaction）正确性** 两大主题：多条 Issue 指向长会话下全屏重绘、compaction 输出被 thinking 预算挤爆、以及 14k 工具调用导致上下文洪泛等稳定性问题。同时，`serverTools`（服务端内置工具）与"会话中途插入 system message"两项能力由 Issue/PR 双向推进，值得后续跟踪。

---

## 二、版本发布

过去 24 小时无新 Release，本节省略。

---

## 三、社区热点 Issues（Top 10）

**1. #7739 [OPEN] 为启动时间设定预算，对标 jcode 延迟与内存** — 评论 8
社区要求 pi 明确启动性能指标，并对标 jcode 基准（0.62.0 存在差距）。性能预算类 Issue 往往牵动整体架构，讨论热度最高。
https://github.com/earendil-works/pi/issues/7739

**2. #8036 [OPEN] [bug] edit 工具渲染大 diff 时崩溃 TUI** — 评论 8
一个 ~14.5 MB 的 diff（HTML 超长行）在编辑成功后直接压垮交互式 TUI，且会话恢复时复现。属于工具输出未做尺寸防护的典型高危缺陷。
https://github.com/earendil-works/pi/issues/8036

**3. #9255 [OPEN] TuiMainScreen 全屏重绘风暴（长转录跳动/文字重影）** — 评论 4
当变更行位于视口顶部之上时，几乎每帧都走 `fullRender(true)` 路径，流式 thinking 尾部超过视口高度即触发。是 TUI 渲染性能的核心根因之一。
https://github.com/earendil-works/pi/issues/9255

**4. #9075 [OPEN] compaction 摘要继承会话 thinking 等级，高 effort 下必然撞输出上限** — 👍 3
自适应 thinking 模型上，摘要输出预算固定为 `0.8 * reserveTokens`，但 thinking token 计入 `max_tokens`，导致高 effort 时确定性截断。**本批次唯一获得点赞的 Issue**，说明痛点真实且普遍。
https://github.com/earendil-works/pi/issues/9075

**5. #9474 [OPEN] Codex 传输层缺少"不重置"的整请求超时；周期事件绕过空闲超时** — 评论 3
持续发送心跳/部分增量的卡死 SSE 流可无限规避现有 idle timeout，缺乏 wall-clock 级别的请求级截止时间，是可靠性隐患。
https://github.com/earendil-works/pi/issues/9474

**6. #9561 [CLOSED] 长度截断 + 海量工具调用 = 14,408 条 error toolResult 淹没上下文** — 评论 1
单次生成坍塌产生 1.4 万条工具调用，逐条物化错误结果形成"14k 条目墙"。暴露了工具结果物化与上下文保护策略的缺失。
https://github.com/earendil-works/pi/issues/9561

**7. #9542 [CLOSED] 流式 UI 重复渲染首个 thinking token** — 评论 2
`message_start` 快照与增量事件共享可变内容，导致 "TheThe user asks…" 类重影。存储消息本身正确，属纯渲染层缺陷。
https://github.com/earendil-works/pi/issues/9542

**8. #9565 [CLOSED] jiti 缓存不可写导致扩展重复编译、启动缓慢** — 评论 2
多用户 Linux 环境下 `/tmp/jiti` 指向他人 `0700` 目录，每次启动都重新编译 TS 扩展。与 #7739 的启动性能议题直接呼应。
https://github.com/earendil-works/pi/issues/9565

**9. #9555 [CLOSED] `compaction_end` 总是清空可见转录** — 评论 1
每次成功压缩都会清屏重渲染，破坏用户阅读连续性，属交互体验类高频反馈。
https://github.com/earendil-works/pi/issues/9555

**10. #9545 [OPEN] 批量 edit 的唯一性检查复用整文件归一化结果** — 评论 1
每次 `countOccurrences()` 都对同一整文件字符串重复跑 `normalizeForFuzzyMatch()`，是明确可优化的 CPU 热点。
https://github.com/earendil-works/pi/issues/9545

> 其他值得留意：#9560 `serverTools` 提案、#9540 扩展加载器在 import 期加载完整 TUI 图、#9549 Windows 大转录每帧重渲染、#9546 GitHub Copilot OAuth 403。

---

## 四、重要 PR 进展

**1. #9548 [OPEN] 会话中途的 system message（Mid conversation system messages）** — 作者 mitsuhiko
把 system prompt 与工具变更记录进转录本身，而非静默改写起始条件，支持恢复/分支回溯，并保留可缓存的 prompt 前缀。**本批次最具架构意义的开放 PR。**
https://github.com/earendil-works/pi/pull/9548

**2. #9488 [OPEN] 为 Codex 增加规范化的 turn 归属信息** — 作者 dannote
补充 session/thread/turn/window/request-kind 元数据，使同一用户输入下的多次请求（工具续跑、重试、steering、压缩恢复）可被可靠归因。
https://github.com/earendil-works/pi/pull/9488

**3. #9556 [CLOSED] feat(ai): serverTools —— 在模型配置中声明服务端内置工具**
支持 OpenAI Responses 的 `web_search`、GLM coding-plan 代理及 Anthropic `web_search` 等原生服务端工具，按原样追加到请求 tools 数组。与 Issue #9560 配套。
https://github.com/earendil-works/pi/pull/9556

**4. #9558 [CLOSED] Feat/azure foundry v3 —— 为 Anthropic 模型增加 Azure Foundry 支持**
新增 azure-anthropic-foundry 测试矩阵覆盖（流式、中止、空响应、上下文溢出、Unicode、工具调用、图像、跨 provider 交接等）。
https://github.com/earendil-works/pi/pull/9558

**5. #9531 [CLOSED] feat(tree): 从会话树中永久删除分支**
新增 `pruneBranch()` / `countSubtree()`，保护活跃路径、保留叶子、重接标签与压缩指针，并在 `/tree` 选择器中加入 shift+d 操作。
https://github.com/earendil-works/pi/pull/9531

**6. #9543 [CLOSED] feat: 面向模型的 "Exit" 工具调用**
允许模型在用户说 "bye"/"/exit" 时主动结束会话，降低新用户的使用摩擦。与 Issue #9544、#4538 同一诉求线索。
https://github.com/earendil-works/pi/pull/9543

**7. #9541 [CLOSED] fix(tui): 模型选择器展示人类可读名称**
将模型 `name` 提升为主标签，不再以原始 provider/model 标识符作主显示，提升可读性。
https://github.com/earendil-works/pi/pull/9541

**8. #9539 [CLOSED] examples: 新增 loop-guard 扩展（打断 LLM 工具调用循环）**
检测并打断"完全相同的工具+参数反复调用"这一常见 agent 失败模式（如永不成功的 `curl` 校验命令）。
https://github.com/earendil-works/pi/pull/9539

**9. #9550 [CLOSED] fix(coding-agent): 发送前按 system 与 tool token 压缩** — 已撤回（Withdrawn）
虽然被撤回，但其反映的"压缩阈值未计入 system/tool token"问题与 #9075 同源。
https://github.com/earendil-works/pi/pull/9550

**10. #9556 / #9560 联动**：`serverTools` 的 Issue 与 PR 同日出现，且 PR 标注"按 gate 自动关闭"，提示贡献流程门槛仍需关注。
https://github.com/earendil-works/pi/pull/9556

---

## 五、功能需求趋势

1. **TUI 渲染与长会话性能**：全屏重绘风暴（#9255）、大 diff 崩溃（#8036）、大转录每帧重渲染（#9549）、批量 edit 归一化重复计算（#9545）、启动时间预算（#7739）——性能类占比最高。
2. **压缩（compaction）语义与可见性**：thinking 预算冲突（#9075）、清空转录（#9555）、发送前压缩阈值（#9550）。
3. **Provider / 模型生态扩展**：Azure Foundry（#9558）、serverTools 服务端工具（#9556/#9560）、commandcode（#9553）、llama.cpp 实时目录（#9559）、Z.AI GLM 思考字段（#9554）、GitHub Copilot OAuth（#9546）。
4. **会话模型演进**：中途 system message（#9548）、会话树分支删除（#9531）、跨工作目录的 session 选择器（#9547）、扩展查看实时会话（#9551）。
5. **扩展与 SDK 嵌入体验**：加载器 import 期开销（#9540）、jiti 缓存（#9565）、自定义 agentDir 登录路径（#9537）、工作指示器作用域覆盖（#9536）。

---

## 六、开发者关注点

- **性能是首要痛点**：启动速度、渲染帧率、整文件重复归一化三类问题反复出现，且与 jcode 的横向对标直接挂钩（#7739、#9565、#9545、#9255）。
- **输出尺寸缺乏防护**：14.5 MB diff 崩溃 TUI（#8036）与 14k 条工具结果洪泛（#9561）说明工具输出缺少统一的截断/限流策略。
- **Token 预算计算不严谨**：thinking token 计入 `max_tokens` 却未纳入压缩预算（#9075、#9550），导致高 effort 下确定性失败。
- **认证与多用户环境鲁棒性**：macOS keychain 分区被重写（#9562）、并发 OAuth 刷新竞态（#9563）、Copilot 403（#9546）集中暴露凭据管理的边界情况。
- **贡献流程摩擦**：多个 PR 因 gate 自动关闭（#9556、#9560），`[untriaged]`/`[no-action]` 标签密集出现，反映社区提交量与维护响应之间的张力。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-09-14

## 📌 今日速览

今日 Qwen Code 仓库发布了 `v0.23.3-nightly.20260913` 版本，主要清除了钉钉通道中废弃的后台响应聚合逻辑，并同步更新了 CUA Driver 预编译二进制至 v0.20.6。社区讨论焦点高度集中在 **React #185 最大更新深度导致的 TUI 静默崩溃**（多条 Issue 互相印证），同时 **CI 在多平台的稳定性**（Linux/Windows/macOS）和 **跨厂商模型兼容性** 也成为开发者持续关注的高频话题。

---

## 🚀 版本发布

**v0.23.3-nightly.20260913.faa395885e**（Nightly）

- **钉钉通道重构**：移除废弃的后台响应聚合逻辑（#11570）。
- **CUA Driver v0.20.6**：预编译二进制更新
  - macOS：通用二进制 + 苹果公证签名 + `QwenCuaDriver.app`
  - Linux：x86_64 + arm64（glibc ≥ 2.31），未签名
  - Windows：x86_64 + arm64，UIAccess worker + 原生 SDK

🔗 https://github.com/QwenLM/qwen-code/releases/tag/v0.23.3-nightly.20260913.faa395885e

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 重要程度 | 摘要 |
|---|------|--------|------|
| 1 | **#11500** [P1] TUI 静默退出（React #185） | ⭐⭐⭐ | 多后台子代理并发完成时，TUI 触发 "Maximum update depth exceeded"，进程静默退出。**12 条评论** + 👍 1，社区呼声最高，是当前最严重的稳定性阻塞。|
| 2 | **#11756** [P1] Virtualized History React #185 | ⭐⭐⭐ | 在启用虚拟化历史 + 多后台代理的中等复杂度工作流下复现同类崩溃，与 #11500 高度相关。|
| 3 | **#11783** [P1] 后台任务注册后数秒即崩 | ⭐⭐⭐ | 注册 `is_background: true` 的 `run_shell_command` 后数秒必崩，同属 React #185 阵营。|
| 4 | **#11764** [P1] Bash allow rule 安全绕过 | ⭐⭐⭐ | 单引号内以反斜杠结尾的允许规则可悄悄放行第二条无关命令，**安全风险**显著。|
| 5 | **#11590** [P1] 跨厂商模型 metadata 400 错误 | ⭐⭐⭐ | 在 DashScope 聚合网关下，请求体顶层的 `metadata` 字段会被转发到 `ZHIPU/GLM` 等非 Qwen 后端，导致反序列化失败 → 400。删掉该字段即可。|
| 6 | **#11019** [P2] AUTO 模式用户审批失效 | ⭐⭐⭐ | 用户三次肯定答复都未传到分类器，且审批模式在会话重建后会回退到 AUTO。**生产事故级别**。|
| 7 | **#10065** [P2] LM Studio 0.4.21 解析失败 | ⭐⭐ | 即使关闭 MCP 与 `tools.core`，与本地 LM Studio 仍报 "failed to parse grammar"。已关闭但反映本地 LLM 兼容性仍是高频痛点。|
| 8 | **#11718** [P2] AppImage Python 环境泄漏 | ⭐⭐ | Desktop AppImage 全局设置的 `PYTHONHOME/PYTHONPATH` 会污染子进程，**直接破坏 stdio MCP Python 服务器**。|
| 9 | **#7771** [P2] MCP 配置启动未加载 | ⭐⭐ | 重启后 `mcp_config` 未注入主进程 MCP 代理，影响所有 IPC 调用。|
| 10 | **#11724 / #11725** [P2] 内存 7GB 警告 | ⭐⭐ | 长会话触发内存上限后**直接栈溢出、无法续接**，Windows 平台尤为严重（已合并为重复 issue）。|

> 其他值得关注：#11465（web-shell 视觉非确定性）、#11777（CI Test 偶发 SIGTERM）、#11736（web-shell smoke 60s 预算吃紧）、#11747（RHEL 10 Node ICU 缺失导致 TUI 静默崩溃）。

---

## 🛠 重要 PR 进展（Top 10）

| # | PR | 模块 | 内容 |
|---|----|------|------|
| 1 | **#11722** web/mobile-shell | 浏览器兼容 + PWA + Android WebView 骨架 | 确立 `browserslist` 支持下限（Chrome 107+/Firefox 115+/Safari 16.4+），启用 PWA 安装能力并落地 Android WebView 壳雏形。|
| 2 | **#11711** core | **子代理容器执行** | 引入 `QWEN_AGENT_EXECUTION_BACKEND=docker/podman`，可信操作者可强制普通子代理在容器内运行；Agent/项目可声明 `executionBackend: container`。|
| 3 | **#10183** memory | **结构化按需召回** | 将 Auto-Memory 从平铺 Prompt 演进为 push/pull 召回协议：变更时推送两段式 ref/title 树，相关 turn 给元数据子树，并提供显式 recall 工具。|
| 4 | **#11241** browser-use | **Playwright Browser SDK** | 模型面类型化浏览器 SDK，跑在常驻 Node REPL 内，借鉴 Codex Browser Use 的语义定位器 + DOM 快照 + 视觉坐标三路选择。|
| 5 | **#11280** skills | 会话恢复时**重放 Skill 副作用** | `--continue/--resume` 时重新应用 Skill 的 `allowedTools` 与 `hooks:`，修复"指令进了对话但状态没回来"的偏差。|
| 6 | **#9466** core | **Rewind 锚定稳定 Prompt 身份** | 改用持久化 prompt 身份而非位置 turn 序号解析目标，跨 resume/headless `-p --resume`/web-shell 仍稳定。|
| 7 | **#11563** channels | 飞书富文本与被引用资源保留 | 正确传递富文本图片/链接/代码块/原生 Markdown，并按原始 messageId 下载被引用消息的资源。|
| 8 | **#11692** core | **可配置 web_search 预算** | 引入 `tools.webSearch.timeoutMs`（env `WEB_SEARCH_TIMEOUT_MS`），默认 120s，并约束超时后交给模型的内容量。|
| 9 | **#11787** ci | 恢复 Windows 测试基线 | 让运行时路径/文件系统身份检查可移植，分离 POSIX 权限语义，并装载 tokenizer WASI fallback。|
| 10 | **#11786** web-shell | 视觉快照确定性 | 移除 dock 滑入时机与 `:focus-visible` 环两类随机源，让 `session-workflow-cockpit-{light,dark}` 同树同像素。|

> 其他有用修复：#11218（headless JSON 报告终端模型错误）、#11792（Windows 监控调试存储）、#11635（侧边栏展示固定会话的定时任务）、#11588 / #11731 / #11134（CI 流水线重试与时间窗，缓解 v0.23.3 首次发布翻车）。

---

## 📈 功能需求趋势

1. **TUI/前端稳定性**：React #185 引发多条 Issue（#11500/#11756/#11783），集中在虚拟化历史 + 后台代理并发场景，社区对"Ink useBoxMetrics setState 环"修复呼声强烈。
2. **跨平台与跨模型兼容**：Windows/macOS/Linux CI 各有独立 flaky 问题（#11777/#11780/#10490），同时非 Qwen 模型（LM Studio、GLM、SGLang 严格 Anthropic 兼容）兼容性需求凸显（#10065/#11590/#11772）。
3. **后台代理与容器化**：#11711 落地容器执行、#11270 引入 runtime recycle，#11767 关注多次回收时的可靠性；#11773 探讨 daemon turn-status 的持久化边界。
4. **记忆与会话恢复**：`#10183` 结构化 recall、`#11280` Skill 副作用重放、`#9466` Prompt 身份锚定三者形成"恢复即一致"的连续改进。
5. **Web/Mobile Shell 演进**：从浏览器兼容、PWA、Android WebView 骨架（#11722）到本地化（#11791）和视觉快照确定性（#11786），生态正向多端铺开。
6. **安全与隐私**：`#11764` Bash 允许规则绕过、`#11760` 遥测错误文本脱敏跟进、`#11762` 日志无法彻底清理、`#11718` AppImage 环境变量泄漏，整体反映"上生产前的合规短板"。

---

## 👨‍💻 开发者关注点

- **"崩了没报错"最让人抓狂**：多份报告描述 TUI 退到 shell 但无任何输出，强烈期望 **可操作的诊断信息**（#11747 已点出 Node ICU 缺失未被发现的问题）。
- **CI 红绿骰子化**：`tsc --build OOM`（#11780）、`npm ci` 偶发失败、scripts 移交 SIGTERM（#11777）让 release 反复回炉，社区期盼"必要 Job"能稳定收敛。
- **Headless/脚本化体验**：`#11218`、`#11742` 关注非交互场景下错误传播与未捕获异常的清理，体现"把 Qwen Code 当生产 Agent 用"的需求增长。
- **多厂商模型一视同仁**：开发者要求去掉隐式 `metadata`、`thoughtSignature` 等 Qwen 专属字段，以解锁 ZHIPU/SGLang 等兼容后端（#11590、#11772）。
- **可观测性与隐私兼顾**：使用遥测脱敏（#11760）+ `~/.qwen/tmp/logs.json` 清理策略（#11762）的组合，希望默认既可定位问题又不留隐私尾巴。

---

*日报基于 2026-09-13 24 小时内的 GitHub 数据整理；观点仅供技术决策参考。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报
**日期：2026-09-14** ｜ 数据来源：github.com/Hmbown/DeepSeek-TUI

---

## 一、今日速览

今天社区活跃度集中在**架构治理**与**会话持久化**两条主线：维护者 Hmbown 一次性提交了约 20 条标注为「0.9.14 refactor backlog」的重构 Issue，覆盖依赖去重、异步纪律、通道边界、配置收敛等；同时社区连续发现 SessionManager 会**静默删除旧转录**、空会话记录挤占配额等数据可靠性问题。功能侧，`/pet` 宠物模式与 Runtime API 工作区文件搜索成为亮点。

---

## 二、版本发布

过去 24 小时内**无新版本发布**。不过多条 Issue 提到 `0.9.13` 已发布、`0.9.14` 重构计划正在排期（#6153 还指出 0.9.13 首启 Ollama 探测存在 panic，已在 main 修复）。

---

## 三、社区热点 Issues（Top 10）

| # | 标题 | 状态 | 评论 | 链接 |
|---|------|------|------|------|
| 6017 | Could Codewhale support durable memory across sessions? | OPEN | 4 | [链接](https://github.com/Hmbown/Codewhale/issues/6017) |
| 6095 | 将 TUI 的 `@file` 模糊搜索暴露给本地 API 客户端 | CLOSED | 3 | [链接](https://github.com/Hmbown/Codewhale/issues/6095) |
| 6116 | Linux 下「选中即复制 / 中键粘贴」 | CLOSED | 2 | [链接](https://github.com/Hmbown/Codewhale/issues/6116) |
| 6136 | save_session 在达到 MAX_SESSIONS 后静默删除最旧转录 | OPEN | 1 | [链接](https://github.com/Hmbown/Codewhale/issues/6136) |
| 6137 | 空「New Session」记录占用会话配额并驱逐真实转录 | OPEN | 1 | [链接](https://github.com/Hmbown/Codewhale/issues/6137) |
| 6138 | 设计讨论：目标会话或其 provider 已消失时 resume 应如何行为 | OPEN | 1 | [链接](https://github.com/Hmbown/Codewhale/issues/6138) |
| 6117 | `agent()` 派生子代理时 profile 被静默忽略（bug） | CLOSED | 1 | [链接](https://github.com/Hmbown/Codewhale/issues/6117) |
| 6128 | Fan-out 未真正受限：孙代理突破 max_spawn_depth 且对父不可见 | OPEN | 0 | [链接](https://github.com/Hmbown/Codewhale/issues/6128) |
| 6130 | `agent(action="status")` 紧凑投影返回约 50k tokens 嵌套负载 | OPEN | 0 | [链接](https://github.com/Hmbown/Codewhale/issues/6130) |
| 6153 | Guard：所有 reqwest client 必须走 codewhale_release::tls | OPEN | 0 | [链接](https://github.com/Hmbown/Codewhale/issues/6153) |

**为什么值得关注：**
- **#6017**：由 MemCode 创始人提出，希望引入跨会话持久记忆层（项目上下文 + 工作流偏好），是社区对「记忆能力」最明确的产品诉求，互动最多。
- **#6136 / #6137 / #6138**：三连发的会话存储缺陷，构成一条完整链路——写入即清理导致**数据静默丢失**、空记录挤占上限、resume 死胡同无出路。属于数据可靠性级别的严重问题，优先级高。
- **#6095 / #6116**：均已关闭，说明非 TUI 客户端（IDE/API）与 Linux 终端体验的需求正在被快速响应。
- **#6117**：`profile` 被忽略是子代理体系的核心 bug，虽已关闭但反映配置与运行时路由脱节。
- **#6128 / #6130 / #6129**：子代理 Fleet 的**成本与可观测性失控**——越权派生、50k tokens 状态噪声、无按调用预算，是重度用户最痛的点。
- **#6153**：0.9.13 曾因裸 `reqwest::Client::builder()` 触发 rustls provider panic，属于发布质量守卫问题。

---

## 四、重要 PR 进展

> 过去 24 小时共 6 条 PR 更新，全部列出。

| # | 标题 | 状态 | 链接 |
|---|------|------|------|
| 6154 | feat(tui): `/pet` 模式——宠物接管终端，退出 workbar | OPEN | [链接](https://github.com/Hmbown/Codewhale/pull/6154) |
| 6134 | 专业化 Computer Use 并新增官方下载页 | OPEN | [链接](https://github.com/Hmbown/Codewhale/pull/6134) |
| 6111 | feat(tui): 新增文件级恢复端点，并对整树回滚加门控 | CLOSED | [链接](https://github.com/Hmbown/Codewhale/pull/6111) |
| 6120 | feat(runtime-api): 暴露工作区文件建议接口 | CLOSED | [链接](https://github.com/Hmbown/Codewhale/pull/6120) |
| 6096 | feat(commands): TUI session-export 切片采用 capability shapes (FEAT-025) | OPEN | [链接](https://github.com/Hmbown/Codewhale/pull/6096) |
| 6110 | feat(pet): 新增持久世界与工作驱动的点阵形态 | OPEN | [链接](https://github.com/Hmbown/Codewhale/pull/6110) |

**要点说明：**
- **#6120**（已合并）：闭环 Issue #6095，新增 `GET /v1/workspace/files/search?query=...&limit=...`，让非 TUI 客户端获得与编辑器一致的模糊文件搜索能力。
- **#6111**（已关闭）：为 GUI 恢复「单文件 Revert」能力，同时修复整树回滚的两处缺陷（原问题来自 VSCode 扩展侧）。
- **#6154 / #6110**：Codewhale 宠物「跨浏览器 / TUI / 原生宿主」的确定性视觉世界正在落地，`/pet` 将终端整屏交给宠物并复用现有 transcript 渲染器。
- **#6134**：Computer Use 0.3.0 改为经注册的独立 helper 路由本地操作，失败即「fail closed」，并补充权限、暂停/停止与验证证据。
- **#6096**：结构性迁移（无用户可见行为变化），把 `/export` 接入可移植命令契约。

---

## 五、功能需求趋势

1. **会话与记忆持久化**（最强信号）
   - 跨会话 durable memory（#6017）
   - 会话存储上限、空记录、resume 语义（#6136/#6137/#6138）
   - session_manager 与 codewhale-state 的「会话真相归属」（#6144）

2. **IDE / 外部客户端集成**
   - 将 TUI 能力（文件搜索、事件流）开放给本地 API 与 IDE（#6095、#6152、#6139）
   - Runtime SDK 统一 Rust/TypeScript 事件契约（#6133）
   - app-server 目前无法真正跑一轮 turn（#6139）

3. **子代理 / Fleet 治理**
   - 按调用预算（#6129）、有界 fan-out（#6128）、结构化并发 JoinSet（#6148）、有界通道（#6147）

4. **终端体验与交互**
   - Linux 选中复制/中键粘贴（#6116）、`/pet` 视觉化（#6154/#6110）

5. **架构与工程卫生（0.9.14 backlog）**
   - 依赖去重（reqwest/toml/thiserror/bitflags，#6151）
   - 阻塞调用审计（#6149）、UI 事件循环唤醒式多路复用（#6146）
   - MCP 双栈收敛与协议版本现代化（#6142/#6140/#6131）
   - 配置单一权威（#6143）、命令契约收尾（#6145）

---

## 六、开发者关注点（痛点 / 高频需求）

- **数据可靠性焦虑**：会话被静默删除、空记录驱逐真实转录、resume 无出路——开发者要求存储行为**可预期、可解释、可恢复**。
- **子代理成本与边界失控**：越权派生、token 无预算、状态输出 50k tokens，重度用户需要「可见、可控、可中止」的 Fleet。
- **资源无界风险**：引擎内两处 `unbounded_channel` 及约 33 处无界站点，被点名可能撑爆内存（#6147）。
- **配置与实际行为不一致**：`agent(profile=...)` 被静默忽略（#6117），暴露配置层与运行时路由脱节。
- **发布质量**：裸 `reqwest::Client::builder()` 导致 rustls panic（#6153）、`CARGO_BUILD_WARNINGS=deny` 在不同 message-format 下行为不一致（#6132），开发者希望有硬性守卫。
- **依赖与构建负担**：同一 workspace 内 reqwest 0.12/0.13、toml/toml_edit、thiserror 1/2 并存，构建翻倍（#6151）。

---

*本日报由 AI 开发工具技术分析自动生成，如需深入某条 Issue/PR 请点击对应链接。*

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

**ComfyUI 社区动态日报 · 2026-09-14**

**今日速览**
无新版本发布。社区活跃修复 MiniMax H3 视频模型的音频条件匹配与 MPS 兼容性问题，同时推进内存优化（RAM 缓存、VAE OOM）与 PyTorch 2.7 兼容性适配。Comfy-kitchen 与旧版 PyTorch 的冲突得到关注。

**版本发布**
无更新（过去 24 小时无 Release）。

**社区热点 Issues**
1. [#16289](https://github.com/Comfy-Org/ComfyUI/issues/16289) MiniMax H3 音频条件张量形状不匹配 - 视频续传+独立音频参考时崩溃，阻碍实际生成
2. [#16230](https://github.com/Comfy-Org/ComfyUI/issues/16230) MiniMax H3 ControlNet Union 首次采样中止 - RTX 5080 用户受限，需绕过编译器复现
3. [#16300](https://github.com/Comfy-Org/ComfyUI/issues/16300) comfy-kitchen 启动崩溃 - PyTorch<2.7 时代 GPU 无法启动，老旧硬件用户受影响
4. [#16102](https://github.com/Comfy-Org/ComfyUI/issues/16102) ROCm/Windows LTXVLatentUpsampler 访问冲突 - gfx1151 加载时 VRAM 管理异常
5. [#16282](https://github.com/Comfy-Org/ComfyUI/issues/16282) MiniMax H3 参考输入索引不一致 - 0-based 输入 vs 1-based prompt，易混淆
6. [#16256](https://github.com/Comfy-Org/ComfyUI/issues/16256) YuE2 音乐生成模型支持请求 - 新开源模型，3👍
7. [#16299](https://github.com/Comfy-Org/ComfyUI/issues/16299) VAE 解码 OOM 优化建议 - 建议先卸载其他模型再尝试常规解码
8. [#15234](https://github.com/Comfy-Org/ComfyUI/issues/15234) 模型过滤功能位置咨询 - 用户支持类，已关闭
9. [#16284](https://github.com/Comfy-Org/ComfyUI/issues/16284) MPS int8 崩溃 - 已由 #16286 修复关闭
10. [#15593](https://github.com/Comfy-Org/ComfyUI/issues/15593) 用户支持问题 - 陈旧，内容简略

**重要 PR 进展**
1. [#16304](https://github.com/Comfy-Org/ComfyUI/pull/16304) SaveImage/PreviewImage 累加开关 - 复兴 #12647，已获审核批准
2. [#16302](https://github.com/Comfy-Org/ComfyUI/pull/16302) RAM 缓存惰性映射修复 - 防止未使用懒加载输出被评估，保持张量会计
3. [#16301](https://github.com/Comfy-Org/ComfyUI/pull/16301) comfy-kitchen

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama 社区动态日报（2026‑09‑14）**  

---

### 1. 今日速览  
- 社区持续关注 **许可证合规**（Issue #3185）以及 **Windows 上多模态模型失效**（Issue #16532）两个长期未解的痛点。  
- 在 **量化**、**工具链**、**边缘设备**（Jetson Orin Nano）和 **云端兼容** 方面出现多个新 bug 和功能需求，开发者正通过 PR 修复资源泄漏（#18424）和改进解析器（#18422）。  
- 文档与社区集成列表得到快速扩充，Genie、Clips Kitty、SlopShield 等新增条目正在审核中（PR #18428、#18423、#18420）。

---

### 2. 版本发布  
> 过去 24 小时内没有新的 Release。

---

### 3. 社区热点 Issues（共 10 条）

| # | 标题 & 链接 | 重要性 & 社区反应 |
|---|-------------|-------------------|
| **#3185** | [ollama doesn't distribute notice licenses in its release artifacts](https://github.com/ollama/ollama/issues/3185) | 涉及 MIT 许可证的发布制品合规，已累计 **275 ★**、58 条评论，社区强烈要求在二进制发布中包含版权声明。 |
| **#16532** | [gemma4 does not process images on windows](https://github.com/ollama/ollama/issues/16532) | Windows 平台上 Gemma4 多模态失效，影响视觉任务；已有 44 条评论，用户反馈为高频使用场景。 |
| **#17778** | [qwen 3.8 reports error during query: Error: ResponseError during chat streaming: no user query found in messages](https://github.com/ollama/ollama/issues/17778) | 流式对话时报 500 错误，阻碍 Qwen3.8 在代理或长对话场景中的使用；30 条评论、25 ★。 |
| **#12362** | [JSON reply schema is ignored by Cloud model](https://github.com/ollama/ollama/issues/12362) | 云端模型不遵循客户端提供的 JSON Schema，导致结构化输出失效；虽然 ★ 仅 0，但对 API 集成开发者是阻塞点。 |
| **#18396** | [Jetson Orin Nano 8GB: Gemma 4 E4B multimodal projector causes host OOM](https://github.com/ollama/ollama/issues/18396) | 边缘设备内存溢出，限制了在 Jetson 系列上部署多模态模型；虽然 ★ 为 0，但对嵌入式开发者影响大。 |
| **#18297** | [Does Ollama support IQ3_S quantization for Qwen3.8-27B-GSQ-RCO-GGUF? Returns empty content](https://github.com/ollama/ollama/issues/18297) | 新量化方案 IQ3_S 在 Ollama 中返回空内容，社区急需确认支持状态；5 条评论表明早期采用者正在尝试。 |
| **#16383** | [qwen3.6 occasionally violates its own tool-call template; qwen3.5 parser returns 500 instead of tolerating the drift](https://github.com/ollama/ollama/issues/16383) | 工具调用解析不稳定导致 500 错误，影响依赖工具链的自动化流程；4 条评论、2 ★。 |
| **#18418** | [Model sees rotated images](https://github.com/ollama/ollama/issues/18418) | EXIF 方向标签导致模型错误描述图像方向，视觉应用需要正确处理方向；虽然 ★ 为 0，但为多模态用户常见困扰。 |
| **#18416** | [ollama create --quantize from safetensors leaves the unquantized F16 blob in blobs/ (unreferenced, never removed)](https://github.com/ollama/ollama/issues/18416) | 量化后产生大量未引用的 F16 blob，造成磁盘泄漏；社区报告后已触发相应 PR（#18424）进行清理。 |
| **#18425** | [Docker SBX Support for ollama integration agents](https://github.com/ollama/ollama/issues/18425) | 集成代理（如 Codex、Copilot）希望通过 Docker SBX 安全沙箱运行 Ollama，提升安全性和易用性；尽管是新提出的功能请求，但受到开发者关注。 |

---

### 4. 重要 PR 进展（共 9 条）

| PR | 链接 | 功能/修复摘要 |
|----|------|---------------|
| **#18428** | [README: add Genie to desktop integrations](https://github.com/ollama/ollama/pull/18428) | 在 README 桌面集成列表中加入 Genie（macOS 原生工作区），便于用户发现该工具。 |
| **#18124** | [llm: use direct I/O for integrated Vulkan GPUs, matching CUDA/ROCm](https://github.com/ollama/ollama/pull/18124) | 修复集成 Vulkan GPU（如 Virtio‑GPU/Venus）在 0.32.9‑0.32.10 之间的加载超时问题，采用直接 I/O 与 CUDA/ROCm 保持一致。 |
| **#18316** | [Enhance Ollama integration with n8n workflows, ComfyUI examples, and documentation](https://github.com/ollama/ollama/pull/18316) | 增加 n8n 工作流示例、ComfyUI 使用说明及相关文档，推动 Ollama 在自动化与创作工具中的落地。 |
| **#13806** | [win: Image Generation support](https://github.com/ollama/ollama/pull/13806) | 为 Windows 平台加入图像生成功能（暂时搬入上游补丁），为后续多模态绘图奠定基础。 |
| **#18424** | [server/create: clean up intermediate blob after quantization](https://github.com/ollama/ollama/pull/18424) | 清理 `ollama create --quantize` 产生的中间 F16 blob，解决 Issue #18416 所报告的磁盘泄漏。 |
| **#18423** | [docs: add Clips Kitty to community integrations](https://github.com/ollama/ollama/pull/18423) | 将 Clips Kitty（Windows 视频切片工具）加入社区集成列表，扩展生态。 |
| **#18422** | [model/parsers: preserve tool numbers outside int64 range](https://github.com/ollama/ollama/pull/18422) | 修复 Qwen3‑Coder 工具参数超出 int64 被截断的问题（对应 Issue #18421），保持原始浮点数值。 |
| **#18420** | [docs: add SlopShield to community integrations](https://github.com/ollama/ollama/pull/18420) | 添加 SlopShield（YouTube 标题真实度评估 Chrome 扩展）到生态文档。 |
| **#18417** | [docs: fix 'an the' typo in LLM libraries troubleshooting](https://github.com/ollama/ollama/pull/18417) | 修正文档中的小错别字，提升阅读体验。 |

---

### 5. 功能需求趋势  
从本日 Issues 中可归纳出社区目前最关注的五大方向：  

1. **新模型与多模态支持** – 持续请求添加 SARVAM‑30b/105b、Gnani Evon‑v3.3 等模型；期望 Windows 上的 Gemma4、多模态投影仪正常工作。  
2. **量化与资源管理** – 对新量化方案（IQ3_S、Q4_K_M 等）的支持需求强烈，同时希望解决量化后残留 blob 的泄漏问题。  
3. **工具链与提示缓存** – 工具调用解析稳定性（参数范围、随机 key 导致缓存失效）、系统角色消息位置等影响代理（如 Claude Code、Codex）使用体验。  
4. **边缘与云端兼容** – Jetson Orin Nano、集成 Vulkan GPU 的内存/OOM 问题；云端模型不遵守 JSON Schema、API 端点返回空内容等。  
5. **集成与安全沙箱** – Docker SBX、n8n、ComfyUI、桌面集成（Genie、Clips Kitty、SlopShield）等生态扩展需求明显，开发者希望 Ollama 能更易嵌入各种工作流并提供安全隔离方式。  

---

### 6. 开发者关注点（痛点 & 高频需求）  
- **许可证合规**：发布制品需完整复制依赖项目的版权声明，避免法律风险。  
- **资源泄漏**：量化过程中产生的未引用 F16 blob 需要及时清理，否则磁盘被快速占用。  
- **Windows 多模态失效**：Gemma4 等模型在 Windows 上无法解析图像，阻碍跨平台视觉应用。  
- **边缘设备 OOM**：在统一内存的 Jetson 平台上，多模态投影仪导致主机内存耗尽，亟需内存优化或分片加载。  
- **工具调用稳定性**：参数超出 int64 被错误截断、系统角色消息被提前合并、随机 key 导致提示缓存失效等均引发 500 错

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

# llama.cpp 社区动态日报 · 2026-09-14

## 今日速览

过去 24 小时，llama.cpp 进入了密集的稳定性修复周期，连续发布 b10934–b10948 共 11 个版本，主要聚焦在 SYCL/Vulkan/OpenCL/Metal 等后端驱动的兼容性修复、JSON Schema 与 Qwen3-Coder 解析优化、以及 s390x/ARM 平台的 CI 覆盖增强。社区方面，多模态（视觉/DFlash/MCP stdio）与 GPU 后端（Intel Arc、AMD RDNA4、NVIDIA）的边界 bug 成为讨论焦点，而 Kimi-K3、DeepSeek V4.1 等新型模型的转换支持也在快速推进。

---

## 版本发布

| 版本 | 主题 | 关键内容 |
|---|---|---|
| **b10948** | 测试修复 | WebGPU 测试套件中排除 HY_V4 架构 ([#28855](https://github.com/ggml-org/llama.cpp/pull/28855)) |
| **b10947** | 模型健壮性 | 修复 Nemotron-H 中 NextN/MTP 尾部循环的零除异常 ([#28779](https://github.com/ggml-org/llama.cpp/pull/28779)) |
| **b10946** | s390x | 保护 VXE-only repack 辅助函数 ([#28775](https://github.com/ggml-org/llama.cpp/pull/28775)) |
| **b10944** | SYCL | 修复 Level Zero 不支持的 zes API，改进 SDK 检测 ([#28227](https://github.com/ggml-org/llama.cpp/pull/28227)) |
| **b10941** | 测试优化 | 缩减 FlashAttention 测试规模 ([#28842](https://github.com/ggml-org/llama.cpp/pull/28842)) |
| **b10938** | Vulkan | 规避 NVIDIA 驱动的 queuesubmit 同步 bug（加互斥锁）([#28830](https://github.com/ggml-org/llama.cpp/pull/28830)) |
| **b10937** | OpenCL | 将 noshuffle 行对齐规则扩展到 q4_K/q5_K/q8_0 ([#28575](https://github.com/ggml-org/llama.cpp/pull/28575)) |
| **b10936** | Chat 解析 | 改进 qwen3-coder 复杂类型的解析 ([#28742](https://github.com/ggml-org/llama.cpp/pull/28742)) |
| **b10935** | 日志 | 新增 `LOG_JSON` 宏以记录结构化数据 ([#28586](https://github.com/ggml-org/llama.cpp/pull/28586)) |
| **b10934** | JSON Schema | 引入 `common_schema` 内部表示及优化器 ([#28736](https://github.com/ggml-org/llama.cpp/pull/28736)) |

**总体观察**：本轮更新呈现明显的「后端兼容性 + 工具链」导向，多个后端（SYCL、Vulkan、OpenCL、s390x）都收到了针对性修复，JSON Schema / Chat 解析方向也开始系统化重构。

---

## 社区热点 Issues

1. **[#14909](https://github.com/ggml-org/llama.cpp/issues/14909) — 后端缺失算子补齐（54 评论 / 👍9）**
   长期追踪的后端算子完整性需求，是评估各硬件后端成熟度的核心指标，社区反应持续活跃。

2. **[#19466](https://github.com/ggml-org/llama.cpp/issues/19466) — 视觉模型 KV 缓存保存失败（38 评论 / 👍7）**
   `/slots/3?action=save` 在多模态模型下失效，影响生产级 server 部署，长时间未关闭。

3. **[#25808](https://github.com/ggml-org/llama.cpp/issues/25808) — SYCL xe2 编译 segfault（35 评论，已 CLOSED）**
   Intel 新一代显卡架构的编译崩溃，体现 SYCL 后端对前沿硬件支持的滞后。

4. **[#16393](https://github.com/ggml-org/llama.cpp/issues/16393) — 缓存模型列表/删除工具（27 评论 / 👍21）**
   呼声极高的运维向需求，受关注度（21 个 👍）甚至超过一些核心 bug。

5. **[#19138](https://github.com/ggml-org/llama.cpp/issues/19138) — 支持 OpenAI Responses API（18 评论 / 👍41）**
   👍 高达 41，反映出 llama-server 兼容 OpenAI 生态的强烈需求，直接关系到生产可替换性。

6. **[#24343](https://github.com/ggml-org/llama.cpp/issues/24343) — Gemma4Assistant 初始化失败（12 评论 / 👍32）**
   Gemma4 系列的初始化问题在用户群中影响面广，32 个 👍 表明这是个高优痛点。

7. **[#28752](https://github.com/ggml-org/llama.cpp/issues/28752) — b10780 后 Vulkan/RDNA3 提示处理骤降（6 评论）**
   Vulkan 后端性能回归，影响 AMD 用户，需关注后续 fix 节奏。

8. **[#28753](https://github.com/ggml-org/llama.cpp/issues/28753) — `ggml_backend_sched_alloc_splits` 崩溃（6 评论）**
   调度器意外重分配图导致崩溃，涉及 Intel Arc 用户。

9. **[#27309](https://github.com/ggml-org/llama.cpp/issues/27309) — Metal OOM 后 server 仍监听端口（4 评论）**
   M5 设备上 Metal 致命 OOM 后 server 进入「绑定成功但所有请求 500」的状态，是稳健性问题。

10. **[#28778](https://github.com/ggml-org/llama.cpp/issues/28778) — SYCL + DFlash2 draft 触发 GPU TDR（3 评论）**
    加载 draft 模型直接触发 Windows GPU 驱动重置，涉及双 Arc Pro B70，反映 SYCL 后端在 speculative decoding 上的稳定性短板。

---

## 重要 PR 进展

1. **[#26185](https://github.com/ggml-org/llama.cpp/pull/26185) — Kimi-K3 文本模型支持（已 CLOSED）**
   引入 Kimi-Linear-48B 风格的 Hybrid KDA+MLA，含跨层残差注意力、latent MoE、situ 激活等扩展，是当前模型架构创新的代表。

2. **[#28696](https://github.com/ggml-org/llama.cpp/pull/28696) — DeepSeek V4.1 转换支持**
   新增 `DeepseekV41ForCausalLM` 架构与 `deepseek41` 路径，处理嵌套的 `text_config` 参数。

3. **[#28847](https://github.com/ggml-org/llama.cpp/pull/28847) — Responses API 支持 `input_image` 工具输出**
   直接对应 OpenAI Codex `view_image` 工具场景，补齐多模态工具调用的关键链路。

4. **[#28725](https://github.com/ggml-org/llama.cpp/pull/28725) — SYCL Graph 录制与回放**
   将 CUDA graph 能力移植到 SYCL，需特别处理 SYCL 异步分配扩展的 hang 问题，是 Intel GPU 性能跃升的关键一步。

5. **[#28868](https://github.com/ggml-org/llama.cpp/pull/28868) — 修复 `get_key_or_arr` 误用（merge ready）**
   修正若干模型加载路径中以步长填充数组的低级错误，影响面广。

6. **[#28865](https://github.com/ggml-org/llama.cpp/pull/28865) — 修复 MiMo2 SWA pattern 加载**
   修补 MiMo V2 中被遗漏的 `get_key_or_arr` 问题，是 [#28831](https://github.com/ggml-org/llama.cpp/issues/28831) 的直接修复。

7. **[#25294](https://github.com/ggml-org/llama.cpp/pull/25294) — MoE routed experts SSD 流式加载**
   支持从 SSD 流式加载 MoE 专家权重，模型可大于内存；维护每层 `n_slots` 设备端 expert 缓存，是大模型本地化部署的重要拼图。

8. **[#28845](https://github.com/ggml-org/llama.cpp/pull/28845) — elmod-2.7b-it 预分词器**
   新增 `escape_after_split` 标志，处理 Metaspace 在 regex split 后转义空格的行为。

9. **[#20831](https://github.com/ggml-org/llama.cpp/pull/20831) — CUDA MMVQ 动态 nwarps**
   针对 MoE 窄矩阵场景动态调整 warp 数，修复 [#19478](https://github.com/ggml-org/llama.cpp/issues/19478) 引入的 decode 回归。

10. **[#28866](https://github.com/ggml-org/llama.cpp/pull/28866) — URL authority 解析修正（query-only URL）**
    修复 `common_http_parse_url()` 对 `?` 边界处理的 RFC 3986 兼容性 bug（[#28400](https://github.com/ggml-org/llama.cpp/issues/28400)）。

---

## 功能需求趋势

从过去 24 小时及近期高频 Issues 提炼：

- **OpenAI 兼容与生态对齐**：Responses API（[#19138](https://github.com/ggml-org/llama.cpp/issues/19138)）、`/v1/responses`、Codex `view_image` 工具输出（[#28847](https://github.com/ggml-org/llama.cpp/pull/28847)）持续是社区呼声最高的「生产化」诉求。
- **缓存与运维工具**：列出/删除缓存模型（[#16393](https://github.com/ggml-org/llama.cpp/issues/16393)，21 👍）、KV 缓存持久化（[#19466](https://github.com/ggml-org/llama.cpp/issues/19466)）、prompt cache 与 RPC 兼容性，反映用户从「能跑」走向「能管」的阶段。
- **多模态（视觉/DFlash/MCP）**：视觉模型 KV 缓存、Qwen3.6 / Gemma4 多模态路径、DFlash2 draft 模型 TDR、stdio MCP 死锁（[#28723](https://github.com/ggml-org/llama.cpp/issues/28723)）是新一轮热点。
- **新模型架构支持**：Kimi-K3（KDA+MLA）、DeepSeek V4.1、Nemotron-H、MiMo2、elmod 等新架构的转换与加载路径成为 PR 主线。
- **多后端稳定性**：Vulkan（[#28752](https://github.com/ggml-org/llama.cpp/issues/28752)）、ROCm RDNA4（[#27796](https://github.com/ggml-org/llama.cpp/issues/27796)）、SYCL（[#28778](https://github.com/ggml-org/llama.cpp/issues/28778)、[#28728](https://github.com/ggml-org/llama.cpp/issues/28728)）、Metal（[#27309](https://github.com/ggml-org/llama.cpp/issues/27309)）的边界场景仍是长期需求。
- **性能优化**：Graph 录制回放、MMVQ 动态 warp、JSON Schema 优化器、grammar 引擎 1.2–1.3× 提速等都在合并/演进中。

---

## 开发者关注点

- **Speculative decoding 的稳健性**：DFlash2 draft 模型在 SYCL/Metal 上多次出现 TDR 或单 token EOS（[#28805](https://github.com/ggml-org/llama.cpp/issues/28805)、[#28778](https://github.com/ggml-org/llama.cpp/issues/28778)、[#26575](https://github.com/ggml-org/llama.cpp/pull/26575)），草稿长度封顶与布局安全的权衡成为近期 PR 焦点。
- **混合 GPU / VRAM 紧张场景**：CLIP warmup reserve 失败、Metal OOM 后状态不一致、RDNA3 提示处理骤降，说明 scheduler / warmup / OOM 错误处理的稳健性仍有较大改进空间。
- **Gemma4 系列**：从初始化失败（[#24343](https://github.com/ggml-org/llama.cpp/issues/24343)）、SWA 失忆（[#25751](https://github.com/ggml-org/llama.cpp/issues/25751)）到 Vulkan 下「思维尾巴」乱码（[#28827](https://github.com/ggml-org/llama.cpp/issues/28827)），是当前 bug 报告最密集的模型族之一。
- **CI 覆盖盲区**：s390x 非 VXE 构建（[#28776](https://github.com/ggml-org/llama.cpp/pull/28776)）、`nrc=2` ARM（[#28850](https://github.com/ggml-org/llama.cpp/pull/28850)）、自托管 CI 在 `ci/run.sh` 改动时触发（[#28859](https://github.com/ggml-org/llama.cpp/pull/28859)）等基础设施改进正快速补齐，体现出维护者对长期可维护性的重视。
- **小而关键的协议正确性**：URL 解析、tokenizer byte fallback、JSON Schema 优化器等「小 PR」反映出社区在工程严谨性上趋于成熟。

---

> 报告基于 2026-09-13 至 2026-09-14 24 小时窗口的 GitHub 公开数据（Releases / Issues / PRs），所有链接均指向 `ggml-org/llama.cpp` 仓库。

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*