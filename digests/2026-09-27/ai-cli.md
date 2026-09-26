# AI CLI 工具社区动态日报 2026-09-27

> 生成时间: 2026-09-26 22:15 UTC | 覆盖工具: 12 个

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



以下是今日（2026-09-27）各 AI 开发工具社区的**重点更新摘要**，共 8 条：

1. **llama.cpp 发布多个版本（b11192-b11205），引入 CPU k-quants 分块矩阵乘法优化。**
   llama.cpp 过去一天内发布了 b11192 至 b11205 等版本，其中 b11195 引入了针对 k-quants 的 CPU 分块（tiled）矩阵乘法，旨在显著提升量化模型在 CPU 上的推理性能。此外，b11205 新增了 CUDA 对 Nemotron 3 Puzzle 状态大小为 96 的 ssm scan 算子支持。
   🔗 [llama.cpp](https://github.com/ggerganov/llama.cpp)

2. **Qwen Code 发布 v0.24.6，修复 serve 层会话诊断信息丢失问题。**
   Qwen Code 正式发布 v0.24.6 版本（包含 CLI、Desktop 及 SDK TypeScript/Java 绑定），核心修复了 `serve` 层面在会话创建失败时无法保留完整诊断信息的问题，避免故障排查时丢失上下文。
   🔗 [Qwen Code](https://github.com/QwenLM/qwen-code)

3. **Gemini CLI 合并两项关键安全与稳定性 PR。**
   Gemini CLI 成功合并了 #29394（在调度器层阻止变异工具以强制执行用户“保持”指令）和 #29397（防止会话上下文中毒及中断轮次引起的无限循环），提升了 Agent 运行的安全性与健壮性。
   🔗 [Gemini CLI](https://github.com/google-gemini/gemini-cli)

4. **ComfyUI 合并 PR #14770，Apple Silicon 文本编码器性能大幅跃升。**
   ComfyUI 合并了针对 Apple Silicon 的重大性能优化 PR，将 LM 类文本编码器（如 ACE-Step 1.5）从 CPU 迁移至 MPS 后端，使生成时间从 6 分 19 秒大幅缩短至约 40 秒。
   🔗 [ComfyUI](https://github.com/Comfy-Org/ComfyUI)

5. **OpenAI Codex 密集合并 20+ 个 PR，修复 TUI 渲染与 Windows 稳定性。**
   OpenAI Codex 在过去 24 小时内合并了大量 PR，重点解决了 TUI 数学公式渲染、Markdown 表格复制元数据保留、WebSocket 转向续接，以及 Windows 平台启动器回退和子进程控制台窗口意外弹出等问题。
   🔗 [OpenAI Codex](https://github.com/openai/codex)

6. **OpenCode 推进会话恢复与数据安全修复。**
   OpenCode 合并了多项重要更新，包括支持在失败轮次后调用其他模型恢复对话连续性（#45228），以及修复了从子目录快照恢复时的严重数据丢失问题（#45141），同时优化了服务端重连时的会话保持。
   🔗 [OpenCode](https://github.com/anomalyco/opencode)

7. **Claude Code 社区集中反馈桌面端 GUI 及安全权限缺陷。**
   Claude Code 社区今日无新版本发布，但 Issues 活跃。核心反馈集中在桌面端 GUI 功能异常（如 Prompt Suggestions 永不显示、/compact 无限挂起）以及安全边界（如 PowerShell 工具无提示执行破坏性命令、Hook 正则绕过）。
   🔗 [Claude Code](https://github.com/anthropics/claude-code)

8. **Pi 社区聚焦多模型兼容性与 TUI 稳定性修复。**
   Pi 社区今日无新版本发布，但动态丰富。重点关注 OpenAI Codex 连接偶发卡死（#4945）、`<esc>` 停止思考时的偶发卡死（#10031），以及 Anthropic 严格工具 `makeStrictJsonSchema` 导致 API 拒绝等兼容性问题。
   🔗 [Pi](https://github.com/badlogic/pi-mono)

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills 社区热点报告
**数据截止：2026-09-27 | 数据源：anthropics/skills**

---

## 1. 热门 Skills 排行

> 注：PR 评论数字段在当前数据采集中均为 `undefined`，以下排序综合**更新时间活跃度、功能战略价值、关联 Issue 热度**三个维度筛选。

### 🔴 #1742 — mcp-builder：兼容 mcp ≥ 2.0 API 变更
- **作者**：Kuldeeep18 | **创建**：2026-09-08 | **更新**：2026-09-26 | **状态**：OPEN
- **功能**：修复 `mcp>=2.0.0` 中 `streamablehttp_client` 被重命名为 `streamable_http_client` 的 breaking change，同时支持通过 `create_mcp_http_client` 配置自定义 HTTP Headers。
- **热点**：直接阻断 MCP 生态兼容性，关联 Issue #1390（evaluation.py 对任何真实 MCP Server 评分 0/N）。属于**高优先级基础设施修复**，社区关注度极高。
- **链接**：https://github.com/anthropics/skills/pull/1742

### 🔴 #1298 — skill-creator：隔离触发词评估与运行时故障
- **作者**：MartinCajiao | **创建**：2026-06-10 | **更新**：2026-09-16 | **状态**：OPEN
- **功能**：修复触发词评估中的假阴性问题（多 worker 命令竞争、Windows `select()` 管道失败、无关工具中断扫描），并阻止运行时故障被误判为"非触发"而污染负例数据。
- **热点**：关联 Issue #556（`run_eval.py` 触发率 0%，12 条评论），直指 **Skill 开发者的核心痛点**——无法有效验证 Skill 是否被正确触发。
- **链接**：https://github.com/anthropics/skills/pull/1298

### 🟠 #1681 — skill-creator：支持直接执行 package_skill.py
- **作者**：Kuldeeep18 | **创建**：2026-08-27 | **更新**：2026-09-26 | **状态**：OPEN
- **功能**：修复 `package_skill.py` 作为独立脚本运行时的 `ModuleNotFoundError`，更新过时的文档字符串和 CLI 帮助信息中的路径引用。
- **热点**：与 #1742 同一作者，skill-creator 工具链的**连续第二轮修复**，说明社区在 Skill 打包/分发流程上存在持续摩擦。
- **链接**：https://github.com/anthropics/skills/pull/1681

### 🟠 #822 — AWT (AI Watch Tester)：AI 驱动的 E2E 测试
- **作者**：ksgisang | **创建**：2026-03-31 | **更新**：2026-09-19 | **状态**：OPEN
- **功能**：赋予 Claude 视觉和浏览器控制能力，实现**零代码 E2E 测试自动生成**——只需指向应用即可自动编写、运行测试用例。
- **热点**：测试自动化是社区高频需求（见 Issue #556、#1390），该 Skill 将测试能力产品化，更新时间显示持续维护中。
- **链接**：https://github.com/anthropics/skills/pull/822

### 🟠 #723 — testing-patterns：全栈测试模式库
- **作者**：4444J99 | **创建**：2026-03-22 | **更新**：2026-09-21 | **状态**：OPEN
- **功能**：覆盖 Testing Trophy 哲学、Unit Testing（AAA 模式）、React 组件测试（Testing Library）的完整测试方法论文档。
- **热点**：与 #822 形成互补——一个偏**测试工程实践**，一个偏**测试工具自动化**，共同反映社区对测试能力的强需求。
- **链接**：https://github.com/anthropics/skills/pull/723

### 🟡 #1771 — proofcore-contract-auditor：智能合约审计
- **作者**：ProofCore-Protocol | **创建**：2026-09-15 | **更新**：2026-09-16 | **状态**：OPEN
- **功能**：对 Solidity/Rust 智能合约进行自动静态分析，将审计密码证明锚定到 TON 公链（ProofCore 零存储 Merkle 协议）。
- **热点**：Web3 + AI 交叉赛道的**首个官方仓库贡献**，展示 Skills 生态向垂直行业（区块链审计）延伸的趋势。
- **链接**：https://github.com/anthropics/skills/pull/1771

### 🟡 #1776 — blast-radius：破坏性操作前的检查清单
- **作者**：kishormorol | **创建**：2026-09-17 | **更新**：2026-09-18 | **状态**：OPEN
- **功能**：在批量归档用户、撤销权限、删除行、群发邮件等破坏性操作前，提供影响面评估清单，弥合"查询正确"与"操作安全"之间的鸿沟。
- **热点**：精准命中**企业级安全需求**，与 Issue #492（安全信任边界，43条评论）形成呼应。
- **链接**：https://github.com/anthropics/skills/pull/1776

### 🟡 #1703 — md2video-audio：Markdown → 带语音 MP4
- **作者**：70v-Yoyo | **创建**：2026-09-01 | **更新**：2026-09-15 | **状态**：OPEN
- **功能**：通过 Marp 将 Markdown 转换为演示幻灯片，再合成带真人级语音旁白的 MP4 视频，零成本实现专业级视频产出。
- **热点**：代表 Skills 生态向**多媒体内容生成**方向的扩展，创意类 Skill 的典型代表。
- **链接**：https://github.com/anthropics/skills/pull/1703

---

## 2. 社区需求趋势

从 Issues 评论数和讨论内容提炼出以下核心需求方向：

### 🔐 安全与信任边界（最高优先级）
- **Issue #492**（43 👍，社区技能冒充 `anthropic/` 命名空间）：社区最关切的安全问题——第三方 Skill 伪装官方 Skill 获取用户信任，需要命名空间隔离或签名验证机制。
- **Issue #1175**（SharePoint Online 安全）：在 SKILL.md 中直接编写权限控制逻辑的可行性担忧。
- **PR #1776**（blast-radius）和 **PR #83**（skill-security-analyzer）从不同角度回应了这一需求。

### 🏢 组织级协作与分发
- **Issue #228**（16 评论，8 👍）：期望 Skill 可在组织内直接共享（当前需手动下载 `.skill` 文件 → Slack/Teams 传输 → 手动上传），需要共享 Skill 库或直链分享。
- **Issue #189**（6 评论，9 👍）：`document-skills` 与 `example-skills` 插件内容重复，安装后产生 Skill 冗余，需要去重或明确职责划分。

### 🧪 测试与评估工具链
- **Issue #556**（12 评论，7 👍）：`run_eval.py` 的 Skill 触发率为 0%，评估 harness 失效。
- **Issue #1390**（4 评论）：`mcp-builder/evaluation.py` 对任何真实 MCP Server 评分 0/N，工具执行错误被静默吞掉。
- → 社区需要**可靠的 Skill 评估框架**，这也是 PR #1298、#822、#723 正在解决的问题。

### 📦 Skill 发现与管理
- **Issue #62**（10 评论）：用户上传的 12 个复杂 Skill 全部消失，疑似文件重命名或路径问题导致。
- → 暗示 Skill 的**持久化、发现、加载机制**仍需改进。

### 🚀 新 Skill 方向提案
| Issue | 提案方向 | 评论 |
|-------|---------|------|
| #1329 | **compact-memory** — 符号化紧凑 Agent 状态表示 | 9 |
| #412 | **agent-governance** — AI Agent 治理模式（策略执行、威胁检测、信任评分） | 6 |
| #1385 | **Reasoning Quality Gate Pipeline** — 三段式推理质量门（预校准→对抗审查→交付验证） | 4 |
| #16 | **Expose Skills as MCPs** — 将 Skill 暴露为 MCP 接口 | 4 |

### 🌐 平台兼容性
- **Issue #29**（4 评论）：Skills 如何在 AWS Bedrock 上使用。
- → 反映用户期待 Skill 生态**跨平台部署**。

---

## 3. 高潜力待合并 PR

以下 PR 评论活跃、功能明确、解决实际问题，且近期有更新，预计短期内可能落地：

| PR | 名称 | 更新时间 | 潜力分析 |
|----|------|---------|---------|
| **#1742** | mcp-builder mcp≥2 兼容 | 09-26 | 阻断级修复，MCP 生态刚需，作者持续迭代 |
| **#1

---



# Claude Code 社区动态日报 — 2026-09-27

---

## 1. 今日速览

今日无新版本发布，社区活跃度以 Issue 维度为主：过去 24 小时内共 50 条 Issue 更新，3 条 PR 变更。核心话题集中在 **桌面端 GUI 功能异常**（如提示词建议不显示、/compact 卡死）、**安全与权限模型缺陷**（PowerShell 无提示执行破坏性命令、Hook 正则绕过），以及 **Windows 平台安装与体验问题**。

---

## 2. 版本发布

**无。** 过去 24 小时内 `anthropics/claude-code` 未发布新版本。

---

## 3. 社区热点 Issues（精选 10 条）

### 🔴 #79919 — GUI 应用中 Prompt Suggestions 永不显示
- **状态**：OPEN | **评论**：7 | **👍**：1
- **摘要**：桌面端 / Web 端即使设置 `promptSuggestionEnabled: true`，灰色 ghost-text 提示词建议也从未出现，影响输入效率。
- **为何重要**：Prompt suggestions 是 IDE/编辑器类产品的核心 UX 功能，失效直接影响日常编码体验。
- **链接**：https://github.com/anthropics/claude-code/issues/79919

### 🔴 #75400 — `/compact` 在桌面端 local-agent 模式下无限挂起
- **状态**：CLOSED | **评论**：4 | **👍**：0
- **摘要**：多会话模式下执行 `/compact` 后进程存活但 transcript 冻结，UI 计数器无限增长，无错误提示、无恢复路径。
- **为何重要**：`/compact` 是长会话管理的关键命令，挂起意味着会话不可用，属于严重可用性缺陷。
- **链接**：https://github.com/anthropics/claude-code/issues/75400

### 🔴 #69397 — PowerShell 工具无权限提示执行破坏性命令
- **状态**：OPEN | **评论**：3 | **👍**：0
- **摘要**：PowerShell 工具在未触发权限确认、transcript 中也无记录的情况下执行了破坏性命令。
- **为何重要**：直接触及安全边界——工具调用权限机制失效，可能导致用户在不知情下遭受损失。
- **链接**：https://github.com/anthropics/claude-code/issues/69397

### 🟡 #80264 — 大小写不敏感文件系统产生重复项目条目
- **状态**：OPEN | **评论**：3 | **👍**：0
- **摘要**：在 macOS/APFS、Windows/NTFS 上，以不同大小写路径启动同一物理目录会创建重复的 project 条目，项目列表按字面路径去重。
- **为何重要**：影响项目历史/索引的数据一致性，长期积累会导致会话归属混乱。
- **链接**：https://github.com/anthropics/claude-code/issues/80264

### 🟡 #75510 — 权限请求流中断后重试 128 次无退避
- **状态**：CLOSED | **评论**：2 | **👍**：0
- **摘要**：分析 transcript 发现某会话中工具权限请求失败（`Stream closed`）后，harness 对相同请求重试约 128 次，无指数退避。
- **为何重要**：不仅浪费资源，更可能导致用户被重复弹窗轰炸，属于可靠性与用户体验双重问题。
- **链接**：https://github.com/anthropics/claude-code/issues/75510

### 🟡 #75360 — 权限对话框静默窃取焦点并销毁输入
- **状态**：CLOSED | **评论**：2 | **👍**：3
- **摘要**：用户正在输入时弹出权限确认框，焦点被静默夺走，继续输入内容全部丢失且无恢复手段。
- **为何重要**：无障碍（a11y）与防误触问题，👍 数相对较高说明社区共鸣强烈。
- **链接**：https://github.com/anthropics/claude-code/issues/75360

### 🟡 #80315 — 崩溃后 `--resume` 会话对新 Agent/Task 产生死 ACK
- **状态**：OPEN | **评论**：2 | **👍**：0
- **摘要**：主机崩溃后 `claude --resume` 恢复的会话中，新 Spawn 的 Agent/Task 显示 "now running" 但实际不执行，也无失败信号。
- **为何重要**：崩溃恢复是可靠性关键路径，"幽灵运行"状态会让用户误以为任务在推进。
- **链接**：https://github.com/anthropics/claude-code/issues/80315

### 🟡 #77177 — Hook 创建流程的 bash 正则安全限制可被绕过
- **状态**：OPEN | **评论**：1 | **👍**：0
- **摘要**：Claude 自动生成的 `grep -qE '^rm -r...'` 类型 Hook 仅覆盖 happy-path，常见绕过手法（如 `rm -rf /allowed/path/../../etc`）未被拦截。
- **为何重要**：安全 Hook 由 AI 生成时缺乏对抗性思维，实际防护形同虚设。
- **链接**：https://github.com/anthropics/claude-code/issues/77177

### 🟡 #78233 — Cowork 中置顶项目从 Recents 静默消失
- **状态**：OPEN | **评论**：1 | **👍**：0
- **摘要**：在 Claude Desktop (Cowork) 中置顶项目后，该项目的所有 session 从 Recents 列表移除，整理越多 Recents 越无用。
- **为何重要**：产品逻辑矛盾——置顶本应增强可访问性，实际却削弱了最近访问入口。
- **链接**：https://github.com/anthropics/claude-code/issues/78233

### 🟡 #88074 — Marketplace 插件安装不 clone git 子模块
- **状态**：CLOSED | **评论**：1 | **👍**：1
- **摘要**：从带 `source: url` 的 marketplace 条目安装插件时，Claude Code clone 了主仓库但遗漏 git submodules，导致 "skills path not found"。
- **链接**：https://github.com/anthropics/claude-code/issues/88074

---

## 4. 重要 PR 近期进展（共 3 条）

### #97334 — sec-default: 对话保留行数超出用户等级限制
- **状态**：OPEN | **作者**：poteat
- **摘要**：安全默认值相关改动，涉及 conversation 保留策略——当引擎已支持 `session.append` 且无在研发布分支时生效；测试检查当前 CLI 未发布前为预期内红色。
- **链接**：https://github.com/anthropics/claude-code/pull/97334

### #97293 — mods: process.run 截断标志与 fs.list mtimeMs
- **状态**：OPEN | **作者**：poteat
- **摘要**：为 `$.process.run` 结果补充 `isStdoutTruncated` / `isStderrTruncated` 字段，为 `$.fs.list` 条目补充 `mtimeMs`。仅在已发布 npm CLI 同时支持这两个字段时 arm，避免声明超前于实现。
- **链接**：https://github.com/anthropics/claude-code/pull/97293

### #41611 — add the missing source to claude code
- **状态**：OPEN | **作者**：tornikeo | **创建**：2026-03-31
- **摘要**：补充 Claude Code 缺失的 source 字段，为 3 月底创建的老 PR，近期仍有活动。
- **链接**：https://github.com/anthropics/claude-code/pull/41611

---

## 5. 功能需求趋势

从近期 Issues 分布来看，社区关注重心可归纳为以下方向：

| 方向 | 代表性 Issue | 热度 |
|------|-------------|------|
| **桌面端 GUI 稳定性** | /compact 挂起、prompt suggestions 失效、tray icon 不可见 | 🔴 高 |
| **安全与权限模型** | PowerShell 无提示执行、Hook 正则绕过、权限请求重试风暴 | 🔴 高 |
| **崩溃恢复与会话可靠性** | resume 后死 ACK、权限流中断重试 | 🟡 中高 |
| **无障碍 / UX 细节** | 焦点窃取、Recents 置顶逻辑、markdown `~` 路径解析 | 🟡 中 |
| **Windows 平台支持** | 安装失败、Squirrel→MSIX 迁移孤儿快捷方式、设备模式预览重叠 | 🟡 中 |
| **数据一致性** | 大小写不敏感文件系统重复项目条目 | 🟡 中 |
| **插件 / Marketplace** | git submodule 未 clone | 🟢 低 |
| **模型行为与计费** | 输入误 flag、企业/个人账户行为不一致、credits 不生效 | 🟢 低（多为 CLOSED/invalid） |

---

## 6. 开发者关注点总结

1. **权限机制的「静默失效」是最大痛点**：#69397（无提示执行破坏性命令）和 #75510（重试 128 次无退避）表明，权限/确认流在异常路径下可能完全绕过用户感知。开发者期待更健壮的失败语义和明确的错误上报。

2. **桌面端体验缺陷密集**：prompt suggestions、/compact 挂起、Recents 逻辑、tray icon 可见性——这些都属于「能用但不可靠」的功能，影响日常高频操作。

3. **AI 生成的安全 Hook 需要对抗性验证**：#77177 揭示了一个系统性风险——当 Claude 自己编写安全 Hook 时，缺少对边界条件和绕过手法的覆盖，建议引入自动化模糊测试或安全审查流程。

4. **崩溃恢复路径存在「幽灵状态」**：#80315 描述的 "now running but nothing runs" 是分布式/长事务场景下的经典问题，需要更好的心跳/超时/确认机制。

5. **Windows 平台安装与迁移体验亟待改善**：安装超时、迁移后快捷方式丢失、预览模式渲染异常——这些在 Windows 11 上的 Issue 密度表明该平台的测试覆盖仍有较大提升空间。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>



# OpenAI Codex 社区动态日报
**日期：2026-09-27** | 数据来源：[github.com/openai/codex](https://github.com/openai/codex)

---

## 1. 今日速览

今日 Codex 社区活跃度较高，主要集中在 **Windows 平台稳定性问题** 和 **TUI 体验优化** 两条主线。发布了多个 0.159.x / 0.158.x alpha 版本，但 changelog 信息较为稀疏。社区反馈中，Windows 桌面端的崩溃、白屏、控制台闪烁等问题成为最集中的痛点，而开发团队在过去 24 小时内密集合并了 **20+ 个 PR**，重点修复 TUI 渲染、窗口进程管理和登录流程。

---

## 2. 版本发布

| 版本 | 类型 | 说明 |
|------|------|------|
| `rust-v0.159.0-alpha.6` | Alpha | 最新 alpha 迭代，具体变更内容未在 PR 索引中体现 |
| `rust-v0.159.0-alpha.5` | Alpha | 同上 |
| `rust-v0.159.0-alpha.4` | Alpha | 同上 |
| `rust-v0.158.0-alpha.2.1` | Alpha | 捆绑于 Linux 桌面端 26.924.22138 |
| `rust-v0.158.0-alpha.15.1` | Alpha | — |
| `rust-v0.157.1` | 稳定版 | 从 0.157.0 升级，标记为 "Chores" 类改动 |

> ⚠️ 部分版本的 Release Highlights 无法获取（PR 索引为空或 tag 比较返回 404），建议关注后续完整 changelog 发布。

---

## 3. 社区热点 Issues（Top 10）

### 🔴 #48212 — Linux 桌面端任务卡在 "Starting your task"（34条评论 / 29 👍）
- **状态**：OPEN | **标签**：bug, app, app-server, Linux Desktop
- **环境**：Codex App 26.924.20706 / ChatGPT Desktop Linux / Pro 订阅
- **问题**：更新到 Linux 版 ChatGPT Desktop 后，任务永久卡在启动阶段，但 CLI 可正常工作。
- **重要性**：影响 Linux 桌面端核心流程，涉及 app-server 与 CLI 的通信断层。
- 🔗 [openai/codex#48212](https://github.com/openai/codex/issues/48212)

### 🔴 #48074 — Windows 终端窗口在请求期间反复闪烁（28条评论 / 43 👍）
- **状态**：OPEN | **标签**：bug, windows-os, CLI, app-server
- **环境**：Windows 11 / codex-cli 0.157.0 / Pro / astra 模型
- **问题**：安装 Codex daemon 后，每次请求都会触发多个终端窗口闪现，严重影响体验。
- **重要性**：👍 数高达 43，是当前社区情绪最强烈的可用性问题之一。
- 🔗 [openai/codex#48074](https://github.com/openai/codex/issues/48074)

### 🔴 #48016 — Windows 无法启动 Codex CLI（29条评论 / 17 👍）
- **状态**：CLOSED | **标签**：bug, windows-os, CLI, app-server
- **环境**：codex-cli 0.157.0 / 无订阅
- **问题**：Windows 平台 Codex CLI 无法启动，已标记为已关闭，但社区反馈仍在持续。
- 🔗 [openai/codex#48016](https://github.com/openai/codex/issues/48016)

### 🔴 #46949 — Windows 远程控制守护进程为子进程弹出可见控制台窗口（19条评论 / 14 👍）
- **状态**：OPEN | **标签**：bug, windows-os, mcp, CLI, app-server, remote
- **问题**：`codex agents` 启动的 remote-control daemon 会为 `node.exe`、`codex-code-mode-host.exe` 等子进程弹出黑色控制台窗口，形成"窗口瀑布"。
- **重要性**：影响远程控制和 MCP 工作流，属于 Windows 进程管理的系统性缺陷。
- 🔗 [openai/codex#46949](https://github.com/openai/codex/issues/46949)

### 🔴 #44736 — Windows 预热锁死本地镜像，启动时清除 workaround（19条评论）
- **状态**：OPEN | **标签**：bug, windows-os, mcp, app, config
- **问题**：ChatGPT project 预热机制锁死本地镜像目录，且 26.707.x 更新后早期 workaround 被抹除，底层产品问题未解决。
- 🔗 [openai/codex#44736](https://github.com/openai/codex/issues/44736)

### 🔴 #48333 — Windows Codex Desktop 卡在启动 spinner（16条评论 / 5 👍）
- **状态**：OPEN | **标签**：bug, windows-os, mcp, app, app-server
- **环境**：26.924.1866.0 / ChatGPT Plus / Windows 11
- **问题**：应用启动后永久卡在加载动画，只有终止 `codex.exe` 才能恢复。
- 🔗 [openai/codex#48333](https://github.com/openai/codex/issues/48333)

### 🔴 #48419 — Linux 桌面端打开本地线程时卡死 / hydration 超时（9条评论 / 2 👍）
- **状态**：OPEN | **标签**：bug, app, app-server, Linux
- **环境**：Fedora 44 / KDE / bundled codex-cli 0.158.0-alpha.2.1
- **问题**：打开任何本地 Codex 线程时 120s 超时，hydration 从未发送 thread/resume。
- 🔗 [openai/codex#48419](https://github.com/openai/codex/issues/48419)

### 🔴 #48313 — Windows 更新后应用白屏（9条评论）
- **状态**：OPEN | **标签**：bug, windows-os, app
- **环境**：26.924.1866.0 (Microsoft Store)
- **问题**：更新后客户端区域永久空白白屏，原生窗口不渲染。
- 🔗 [openai/codex#48313](https://github.com/openai/codex/issues/48313)

### 🟡 #33582 — macOS 上 Codex 反复增长到 55 GB 并冻结系统（9条评论 / 1 👍）
- **状态**：OPEN | **标签**：bug, app, performance
- **环境**：macOS 26.5.2 / MacBook Pro / 26.707.91948
- **问题**：内存/磁盘泄漏导致应用膨胀至 55 GB，最终冻结整个系统。
- 🔗 [openai/codex#33582](https://github.com/openai/codex/issues/33582)

### 🟡 #20957 — 希望为 Codex Desktop 添加 "Read Aloud" 功能（6条评论 / 21 👍）
- **状态**：OPEN | **标签**：enhancement, app
- **需求**：为 Codex 桌面端添加类似 ChatGPT 的语音朗读功能，高优先级无障碍需求。
- 🔗 [openai/codex#20957](https://github.com/openai/codex/issues/20957)

---

## 4. 重要 PR 进展（Top 10）

| PR | 标题 | 类型 | 关键点 |
|----|------|------|--------|
| [#48551](https://github.com/openai/codex/pull/48551) | 修复 TUI 数学渲染（零和大 wedge 表达式） | CLOSED | 允许 `$0$` 通过内联数学检测；`\bigwedge` 渲染为 `⋀` |
| [#48549](https://github.com/openai/codex/pull/48549) | 复制时保留 Markdown 表格和空白 | CLOSED | 解决表格复制丢失结构、尾部空白误删硬折行的问题 |
| [#48548](https://github.com/openai/codex/pull/48548) | 保留表格单元格源元数据 | CLOSED | 在复制元数据中保留表格身份、列对齐、单元格坐标、字节范围 |
| [#48508](https://github.com/openai/codex/pull/48508) | 转向时保留 WebSocket 续接 | CLOSED | 避免转向时丢弃连接并重发全量历史，通过 `previous_response_id` 续接 |
| [#48491](https://github.com/openai/codex/pull/48491) | 限制性 Windows 启动器下回退到嵌入模式 | CLOSED | 解决 `cargo run` 等启动器阻止后台进程存活导致 daemon 启动失败的问题 |
| [#48483](https://github.com/openai/codex/pull/48483) | 防止管道 Windows 子进程弹出控制台 | CLOSED | 为 `codex-rs/utils/pty` 子进程默认设置 `CREATE_NO_WINDOW` |
| [#48469](https://github.com/openai/codex/pull/48469) | 更多终端默认复制选中文本 | CLOSED | `tui.copy_on_select = "auto"` 在 Ghostty/Kitty/Windows Terminal/VS Code 等终端中启用选中即复制 |
| [#48353](https://github.com/openai/codex/pull/48353) | 稳定技能目录 | CLOSED | 在 executor 可用性变化时保持云技能目录渲染稳定，预算上限设为 3/4 |
| [#48352](https://github.com/openai/codex/pull/48352) | TUI 工作中和完成后显示提示 | CLOSED | 工作 30 秒后显示随机提示；成功回合后显示完成提示（从第 3 次开始） |
| [#48318](https://github.com/openai/codex/pull/48318) | TUI 重连尝试持续到共享截止时间 | CLOSED | 将 5 次上限改为持续重试（8 秒间隔），确保 120 秒预算内不会提前放弃 |

---

## 5. 功能需求趋势

从社区 Issues 和 PR 中可提炼出以下关注方向：

| 方向 | 热度 | 典型 Issue/PR |
|------|------|---------------|
| **Windows 平台稳定性** | 🔥🔥🔥🔥🔥 | #48074, #48333, #48313, #48522, #48453 —— 白屏、崩溃、控制台闪烁、启动 spinner 卡死 |
| **进程/控制台窗口管理** | 🔥🔥🔥🔥 | #46949, #44768, #18984, #48483 —— 子进程控制台窗口意外弹出是跨版本顽疾 |
| **TUI 体验优化** | 🔥🔥🔥🔥 | #48551, #48549, #48548, #48544, #48352 —— 数学渲染、表格复制、欢迎屏、登录链接复制 |
| **网络/重连可靠性** | 🔥🔥🔥 | #48318, #48402, #48545 —— 重连逻辑、401 认证失败后的恢复 |
| **无障碍 / 可访问性** | 🔥🔥 | #20957 —— Read Aloud 语音朗读功能需求 |
| **macOS 性能/内存泄漏** | 🔥🔥 | #33582 —— 55 GB 内存增长导致系统冻结 |
| **MCP / 工具生态** | 🔥🔥 | #46949, #44736, #48504 —— MCP 子进程行为、HTTP 响应解码、connector 可用性 |
| **Git / 沙箱权限** | 🔥 | #32880, #37965 —— Git 写入被 DENY ACL 阻止、`.git` 所有权问题 |

---

## 6. 开发者关注点

### 痛点 Top 3

1. **Windows 桌面端稳定性堪忧**：从 26.924.1866.0 到 26.924.2738.0，多个版本出现白屏、spinner 卡死、主进程崩溃。社区情绪集中在"更新即破坏"的负面体验上，亟需回归测试和灰度发布策略。

2. **子进程控制台窗口泛滥**：无论是 MCP server、远程控制 daemon、PowerShell 解析器还是管道子进程，Windows 平台上的 `CREATE_NO_WINDOW` 覆盖不彻底，导致"黑色窗口瀑布"。这已成为跨模块的系统性缺陷，需要统一的进程创建策略。

3. **app-server 与 CLI 的状态同步断裂**：Linux 桌面端卡在 "Starting your task"、远程控制 daemon 拒绝自身的 feature keys、daemon 版本与桌面端不匹配（0.153.4 vs 新版本）——这些都指向 app-server 生命周期管理和版本协调问题。

### 高频需求

- **统一的 Windows 进程窗口控制抽象**（社区多次提及）
- **Codex Desktop 的 Read Aloud 无障碍功能**（21 个 👍 的 enhancement）
- **更透明的版本发布说明**（多个 Release Highlights 缺失）
- **重连/网络恢复的健壮性**（401 后持续重试、WebSocket 续接）

---

> 📊 **数据统计**：今日共跟踪 **6 个新 Release**、**50 条 Issues 更新**（展示 Top 30）、**21 条 PR 更新**（展示 Top 20）。社区最活跃的标签为 `windows-os`、`app`、`app-server`、`bug`。

*日报由 GitHub 数据自动生成，基于 openai/codex 仓库公开信息。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Thinking Process:

1.  **Understand the Goal**: The user wants a daily community dynamic report for the Gemini CLI (`google-gemini/gemini-cli`) dated September 27, 2026 (based on the prompt's context date, but using the provided data which shows updates on 2026-09-26). The report should be in Chinese, structured into specific sections: Today's Summary, Releases, Hot Issues (10 selected), Important PRs (10 selected), Feature Demand Trends, and Developer Pain Points/Focus areas. Each item needs a GitHub link.

2.  **Analyze the Input Data**:
    *   **Latest Releases (past 24h)**:
        *   `v0.63.0-nightly.20260926.g2fe7c2d3f` (released on 2026-09-26).
        *   Changes:
            *   `fix(core): remove invalid diff.external override` (PR #29467 by @urielefrenvirtusa)
            *   `chore(release): bump version to 0.63.0-nightly.20260923.gf50ba8608` (PR #29471 by @gemini-cli-robot)
            *   (The text cuts off with "C", but this is enough to summarize).
    *   **Latest Issues (top 30 by comments)**:
        *   #22323 (13 comments, P1, bug): Subagent recovery after MAX_TURNS is reported as GOAL success, hiding interruption. (Very important bug, misleading success status).
        *   #19873 (9 comments, P2, enhancement, large effort): Leverage model's bash affinity via Zero-Dependency OS Sandboxing & Post-Execution Intent Routing. (Architecture enhancement).
        *   #21409 (8 comments, P1, bug): Generalist agent hangs (e.g., folder creation hangs forever). (High impact blocker).
        *   #22745 (7 comments, P2, feature): Assess the impact of AST-aware file reads, search, and mapping. (Core capability investigation).
        *   #21968 (6 comments, P2, bug): Gemini does not use skills and sub-agents enough. (UX/AI behavior issue).
        *   #26525 (5 comments, P2, security, bug): Add deterministic redaction and reduce Auto Memory logging. (Security/Privacy concern).
        *   #26522 (4 comments, P2, bug): Stop Auto Memory from retrying low-signal sessions indefinitely. (Efficiency/loop bug).
        *   #22267 (4 comments, P2, bug): Browser Agent ignores settings.json overrides (e.g., maxTurns). (Configuration bug).
        *   #22232 (4 comments, P3, feature): Enhance browser_agent resilience: Automatic session takeover and lock recovery. (Browser robustness).
        *   #21983 (4 comments, P1, bug): browser subagent fails in wayland. (Platform compatibility bug).
        *   #21000 (4 comments, P3, bug): Experiment with using native file tools for creating and maintaining the task tracker. (Workflow improvement).
        *   #20079 (4 comments, P2, bug): `~/.gemini/agents/filename.md` is not recognized as an agent if filename.md is a symlink. (Usability bug).
        *   #26523 (3 comments, P2, bug): Surface or quarantine invalid Auto Memory inbox patches. (Data integrity).
        *   #24246 (3 comments, P2, bug): Gemini CLI encounters 400 error with > 128 tools. (Scalability limit).
        *   #23571 (3 comments, P2, bug): Model frequently creates tmp scripts in random spots. (Workspace cleanliness).
        *   #22672 (3 comments, P2, customer-issue): Agent should stop/discourage destructive behavior (e.g., git reset --force). (Safety/Guardrails).
        *   #22186 (3 comments, P1, bug): get-shit-done output hook causes crash. (Crash bug).
        *   #20195 (3 comments, P3, enhancement): Local Subagent - Sprint 1. (Development milestone).
        *   #26516 (2 comments, P2, bug): Memory system bugs and quality improvements. (General memory tracking).
        *   #22746 (2 comments, P3, enhancement): Investigate using AST aware CLI tools to map codebase. (Tooling).
        *   #22598 (2 comments, P3, feature): Subagent trajectory should be visible via `/chat share`. (Observability/Sharing).
        *   #22466 (2 comments, P2, bug): Fix instances of incorrect \n escape behavior. (Formatting bug).
        *   #22465 (2 comments, P2, bug): Gemini CLI gets stuck at interactive prompt creating vite app. (Interactive flow bug).
        *   #21924 (2 comments, P2, bug): High performance and flicker free behavior on terminal resize. (UI rendering performance).
        *   #21763 (2 comments, P1, bug): Bugreport doesn't provide context of the subagent. (Debuggability).
        *   #21432 (2 comments, P3, customer-issue): Improve Agent "Self-Awareness": Accurate CLI Flags, Hotkeys, and Self-Execution. (Agent knowledge).
        *   #19561 (2 comments, P3, enhancement): Implement 'Tactful Extraction' logic for token-frugal surgical reads. (Context optimization).
        *   #18836 (2 comments, P3, customer-issue): Replace WriteToDo with Persistent File-Based Task Tracking (CRUD). (Architecture improvement).
        *   #18397 (2 comments, P3, enhancement): Support auto adding to a per workspace policy rather than a global policy. (Policy config).
        *   #23313 (1 comment, P2, bug): Change the steering eval test to always pass. (Testing meta-issue).
    *   **Latest PRs (top 20 by comments, though mostly undefined comments but high activity)**:
        *   #29506 (CLOSED, size/l): fix(core): align policy redirection gates, path validation, and workflow parsing.
        *   #29520 (OPEN, P1/P2, size/l): fix(cli): preserve scroll position and partition pending height budget. (UX rendering fix).
        *   #29519 (CLOSED, size/xs): Create authz-test.txt.
        *   #29451 (CLOSED, P1, size/l/xl): fix(core): bound tool output size and optimize memory lifecycle in long-running agent loops. (Crucial for stability).
        *   #28676 (OPEN, P2, size/m): fix(cli): forward termination signals to relaunched child process. (Process management).
        *   #29517 (OPEN, size/s): perf(core): linearize array reconstruction in truncateHistoryToBudget. (Performance optimization).
        *   #29515 (OPEN, P3, size/m): linearize-state-snapshot-id-lookups. (Performance: massive speedup 291ms -> 10ms).
        *   #29516 (OPEN, P3, size/s): cache-transcript-turn-indexes. (Performance: 414ms -> 17ms).
        *   #29402 (OPEN, P1, size/m): fix(cli): make persistent state writes failure-safe. (Data integrity).
        *   #29512 (OPEN, size/m): linearize-chat-compression-history-reconstruction. (Performance).
        *   #29510 (OPEN, size/m): fix(editor): harden Windows subprocess argument quoting and prevent command injection on Windows. (Security hardening).
        *   #22139 (CLOSED, P1, size/m): fix(hooks): prevent SessionEnd from firing twice in non-interactive mode. (Hook bug).
        *   #29459 (OPEN, P1, size/m): fix(cli): propagate cancellation into shell command injections. (Cancellation logic).
        *   #29286 (CLOSED, P1, size/m): Implement Google search tool in RobustAutonomousAgent. (Feature).
        *   #29387 (OPEN, size/m): fix(cli): don't let one malformed extension directory fail all extension loading. (Robustness).
        *   #29400 (OPEN, P1, size/m): Fix/29365 duplicate tool responses. (Session resume bug).
        *   #29399 (OPEN, P2, size/m): fix(core): preserve unrelated comments during edits. (Edit accuracy).
        *   #29398 (OPEN, P1, size/m): fix(mcp): bound initial tool discovery to a short timeout. (MCP stability).
        *   #29397 (OPEN, P2, size/xl): fix(agent): prevent session context poisoning and infinite loops on interrupted turns. (Critical agent safety/stability).
        *   #29394 (OPEN, P1, size/xl): fix(scheduler): enforce user hold directives by blocking mutating tools at scheduler layer. (Critical safety guardrail).

3.  **Drafting the Sections (translating, summarizing, and structuring as requested)**:

    *   **Report Date Context**: The prompt asks for the "2026-09-27 的 Gemini CLI 社区动态日报", but the data is updated up to "2026-09-26" (past 24h). I will frame it as the daily report summarizing the latest activity (latest up to Sept 26, 2026).

    *   **Section 1: 今日速览 (Today's Summary)**:
        *   Summarize key developments: Gemini CLI released a new nightly version `v0.63.0-nightly.20260926` focusing on core diffs fixes.
        *   The community and developers are heavily focusing on **Agent stability and safety** (e.g., generalist agent hangs, session context poisoning, scheduler user hold enforcement) and **performance optimizations** (massive speedups in history reconstruction and state snapshot lookups).
        *   There is a noticeable architectural discussion around AST-aware tools, Auto Memory safety, and agent self-awareness.

    *   **Section 2: 版本发布 (Releases)**:
        *   **v0.63.0-nightly.20260926.g2fe7c2d3f**
        *   Key update: `fix(core): remove invalid diff.external override` (PR #29467). This is a core fix regarding git diff configuration overrides. Version bump chore (PR #29471).

    *   **Section 3: 社区热点 Issues (Top 10 selected)**:
        *   Need to select the 10 most impactful/interesting ones from the 30 provided, focusing on P1 bugs, high-comment issues, and critical architectural proposals.
        *   *Selection criteria*: High priority (P1), high comments (indicating community discussion), and representative of major themes (Agent stability, Memory safety, Browser issues, config issues).
        *   1. **#22323** (P1 bug, 13 comments): Subagent recovery after MAX_TURNS reports false GOAL success. *Why important: Misleading status makes debugging hard; developers think subagent succeeded when it timed out.*
        *   2. **#21409** (P1 bug, 8 comments): Generalist agent hangs indefinitely (e.g., folder creation). *Why important: Severe blocker for agent usability; deferring to general agent becomes unusable.*
        *   3. **#19873** (P2 enhancement, 9 comments): Zero-Dependency OS Sandboxing & Post-Execution Intent Routing. *Why important: Large-scale architectural proposal to leverage Gemini's native bash affinity securely.*
        *   4. **#26525** (P2 security/bug, 5 comments): Deterministic redaction and reducing Auto Memory logging. *Why important: Security risk; secrets might be exposed before redaction occurs in memory extraction.*
        *   5. **#22745** (P2 feature, 7 comments): Assess the impact of AST-aware file reads, search, and mapping. *Why important: Core strategy for token efficiency and precise code navigation.*
        *   6. **#21968** (P2 bug, 6 comments): Gemini does not use skills and sub-agents proactively. *Why important: Key UX gap; users want smarter autonomous tool/skill routing.*
        *   7. **#22267** (P2 bug, 4 comments): Browser Agent ignores `settings.json` overrides (e.g., `maxTurns`). *Why important: Configuration bypass issue, limits user control over browser automation.*
        *   8. **#21983** (P1 bug, 4 comments): Browser subagent fails on Wayland. *Why important: Platform compatibility issue for Linux users.*
        *   9. **#24246** (P2 bug, 3 comments): Gemini CLI encounters 400 error with > 128 tools. *Why important: Scalability ceiling; limits users with large toolsets.*
        *   10. **#22672** (P2 customer-issue, 3 comments): Agent should stop/discourage destructive behavior (e.g., `git reset --force`). *Why important: Agent safety guardrails; preventing accidental data loss.*
        *   *(Alternative 10th: #22186 P1 get-shit-done output hook crash).* Let's use #22186 instead or keep #22672. Both are good. Let's list #22672 for safety and #22186 for crash severity. Let's stick to the selected 10.

    *   **Section 4: 重要 PR 进展 (Top 10 selected)**:
        *   Focus on major core fixes, massive performance optimizations, and security/safety guardrails.
        *   1. **#29394** (P1, size/xl): enforce user hold directives by blocking mutating tools at scheduler layer. *Crucial safety PR, prevents agent from ignoring "wait/do not modify" instructions.*
        *   2. **#29397** (P2, size/xl): prevent session context poisoning and infinite loops on interrupted turns. *Fixes a critical agent loop vulnerability where interruptions pollute context with synthetic messages.*
        *   3. **#29451** (P1, size/l/xl): bound tool output size and optimize memory lifecycle in long-running agent loops. *Crucial for long-session stability, preventing OOM.*
        *   4. **#29520** (P1/P2, size/l): preserve scroll position and partition pending height budget. *Important CLI rendering UX fix for terminal scroll stability.*
        *   5. **#29515** (P3, size/m): linearize-state-snapshot-id-lookups. *Performance PR: massive 28x speedup (291ms to 10ms) in snapshot ID lookups.*
        *   6. **#29516** (P3, size/s): cache-transcript-turn-indexes. *Performance PR: 23x speedup (414ms to 17ms) in transcript formatting.*
        *   7. **#29510** (size/m): harden Windows subprocess argument quoting and prevent command injection. *Security hardening for Windows command execution.*
        *   8. **#29402** (P1, size/m): make persistent state writes failure-safe. *Data integrity fix using atomic writes (temp file -> fsync -> rename).*
        *   9. **#29398** (P1, size/m): bound initial tool discovery to a short timeout. *Stability fix for MCP servers dropping bad responses, preventing 10-minute hangs.*
        *   10. **#29459** (P1, size/m): propagate cancellation into shell command injections. *Fixes un-abortable hung shell commands inside custom commands.*
        *   *(Also notable: #29517, #29512, #29400, #29399, #29387). I will list the top 10 above and briefly mention others if needed, but stick to the 10 requested.*

    *   **Section 5: 功能需求趋势 (Feature Demand Trends)**:
        *   Extracted from the issues list:
        *   *Agent intelligence & autonomy*: How to make the agent use skills and sub-agents more proactively (#21968), accurate self-awareness of CLI flags/hotkeys (#21432), and smarter task tracking (#18836, #21000).
        *   *Context & Token Efficiency*: AST-aware tools (#22745, #22746, #19561 "Tactful Extraction") to reduce token bloat and avoid misaligned reads.
        *   *Security, Privacy, and Reliability*: Deterministic redaction in Auto Memory (#26525), safe sandboxing (#19873), preventing destructive git commands (#22672).
        *   *Browser Agent robustness*: Configuration overrides (#22267), lock recovery (#22232), Wayland support (#21983).
        *   *Observability & Debugability*: Subagent trajectory sharing (#22598), better bug report context (#21763).

    *   **Section 6: 开发者关注点 (Developer Pain Points / High-frequency Demands)**:
        *   Summarize the core pain points from the issues:
        *   *Agent behavior control*: Developers struggle with agents getting stuck (#21409), ignoring configurations (#22

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



# GitHub Copilot CLI 社区动态日报 (2026-09-27)

> **数据来源**: `github.com/github/copilot-cli` | **分析师**: AI 开发工具技术分析师

---

### 1. 今日速览
过去24小时内，GitHub Copilot CLI 社区活跃度主要集中在**稳定性问题（内存溢出崩溃）**、**MCP（Model Context Protocol）协议兼容性与会话生命周期管理**，以及**多模型提供商（如 DeepSeek）的配置支持**上。本期无新版本发布及大型 PR 合并，但社区多个关键 Bug 的修复与讨论表明项目正处于针对长会话和工具链集成的深度优化期。

---

### 2. 版本发布
*   **最新版本**: 无（过去24小时内无新 Release 发布）。
*   **历史版本参考**: 社区当前讨论中提及了 v1.0.83（修复了 MCP 连接超时问题）、v1.0.82 及 v1.0.79-1，表明版本迭代正在逐步解决 MCP 初始化和会话恢复的回归缺陷。

---

### 3. 社区热点 Issues（精选 Top 10）

以下是过去24小时内更新、讨论最热烈的 10 个 Issue，按关注度及技术影响力排序：

#### 🔴 #2995 - 无法使用 DeepSeek API 配置（高关注）
*   **状态**: CLOSED | **分类**: `area:models`, `area:configuration`
*   **链接**: [github/copilot-cli Issue #2995](https://github.com/github/copilot-cli/issues/2995)
*   **摘要**: 用户通过环境变量配置 `COPILOT_PROVIDER_TYPE="openai"` 及 DeepSeek 模型时，CLI 无法正常调用。该 Issue 获得了 **14 条评论，9 个赞**，反映出社区对接入国产高性价比大模型（如 DeepSeek）的强烈需求，以及当前环境变量协议兼容性的痛点。

#### 🔴 #4664 - 恢复

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

Thinking Process:

1.  **Understand the Goal**: The user wants a daily community dynamic report for the OpenCode community (anomalyco/opencode) dated 2026-09-27, based on provided GitHub data (Issues, PRs, Releases). The report needs to be in Chinese, structured into specific sections: Today's Summary, Releases (none, but need to state that), Hot Issues (top 10), Important PRs (top 10), Feature Request Trends, and Developer Pain Points/Focus.

2.  **Analyze the Input Data**:
    *   **Date**: 2026-09-27 (reporting on activity up to 2026-09-26).
    *   **Releases**: None in the past 24 hours.
    *   **Issues (top 30 by comments)**:
        *   #3699 [CLOSED] [bug, opentui] Interrupting Session via ESC does not work (19 comments, 1👍) - ESC key interrupt bug, critical blocker.
        *   #28492 [OPEN] MaxListenersExceededWarning after web interface starts (10 comments, 6👍) - Memory leak warning / event listener limit issue.
        *   #27875 [OPEN] Stuck at permission granting with the Enter key is not working (10 comments, 1👍) - UI/UX bug with Enter key for permissions.
        *   #17648 [OPEN] [Bug]: Session processor retries indefinitely with unbounded exponential backoff — no max retries or circuit breaker (8 comments, 6👍) - Critical backend resilience issue (infinite retry loop).
        *   #49768 [OPEN] [Billing] Paid OpenCode Go subscription is shown as inactive and requests fail with Account.Disabled (8 comments, 1👍) - Billing/subscription critical bug.
        *   #40993 [OPEN] [FEATURE]: support the Agent Plugins standard (agent-plugins.org) (7 comments, 15👍) - Feature request for standard plugin support (highly upvoted).
        *   #42960 [OPEN] [2.0] V2: esc interrupt broken (6 comments, 1👍) - ESC interrupt broken in V2.
        *   #51269 [OPEN] V2: subagent/child-session LLM request fails validation — system[4] InvalidType vs LLM.SystemPart (6 comments, 0👍) - V2 schema validation bug affecting subagents.
        *   #27110 [OPEN] [FEATURE]: Setting to limit max number of parallel subagents (6 comments, 37👍) - Highly requested feature (limit parallel subagents to save resources).
        *   #51529 [CLOSED] Desktop app OOM crash with 8 parallel agents (Windows 11, v1.18.32) (5 comments, 0👍) - Memory management issue on Desktop.
        *   #15789 [CLOSED] [FEATURE]: Portable wrapper scripts for running OpenCode without global installation (5 comments, 9👍) - Portability feature request.
        *   #46692 [OPEN] [2.0] chunkTimeout and timeout are silently ignored on the v2 packages/llm provider path (4 comments, 0👍) - Config schema bug (timeout ignored).
        *   #32825 [OPEN] [bug, core, 2.0] [BUG]: OPENCODE_CONFIG_DIR replaces global config in v2 services (4 comments, 1👍) - Config path resolution bug in V2.
        *   #49073 [OPEN] [FEATURE]: Each project should have a dedicated `/tmp` dir (4 comments, 2👍) - Isolation feature request.
        *   #36382 [OPEN] After answering questions, opencode just hangs there. (4 comments, 3👍) - UI freeze/hang bug.
        *   #40146 [OPEN] Turns truncated at the output limit are recorded as normal completions (4 comments, 0👍) - Logic bug in session loop (finishReason "length" treated as normal stop).
        *   #51544 [CLOSED] After update: all providers disconnect (HTTP 400/408), Atria-Dawn-Preview fails... (3 comments, 0👍) - Connection issues after update.
        *   #50598 [OPEN] agents: markdown frontmatter "permissions" (V2) parsed but never applied to sessions (3 comments, 0👍) - V2 permission system bug.
        *   #51423 [OPEN] App frequently becomes unresponsive when opening a session in Desktop V2 (3 comments, 0👍) - Desktop V2 stability issue.
        *   #28658 [OPEN] OPENCODE_CONFIG_DIR overrides global AGENTS.md path instead of adding to it (3 comments, 2👍) - Config path issue.
        *   #38552 [CLOSED] Can't click "Confirm" and doesn't respond to "Enter" (return) sometimes (3 comments, 0👍) - UI freeze bug.
        *   #51144 [OPEN] v2: sessions with path=NULL are missing from project session lists (3 comments, 0👍) - Database/query bug in V2.
        *   #42784 [OPEN] Cannot browse into subfolders in the Add project dialog (web UI) (3 comments, 0👍) - Web UI usability issue.
        *   #51550 [CLOSED] Qwen 3.8 Max weekly limit blocks all other Go models, including unused models (2 comments, 0👍) - Billing/model limit issue.
        *   #51532 [CLOSED] Context Windows Bug (2 comments, 0👍) - Subagent context window bug.
        *   #51526 [CLOSED] Opencode version 2? (2 comments, 0👍) - User confusion about V2 upgrade.
        *   #37893 [OPEN] [FEATURE]:Publish a fully portable Windows build of OpenCode Desktop (2 comments, 0👍) - Windows portability request.
        *   #34922 [OPEN] [core, 2.0] chore(core): review V2 table and durable event type names before GA (2 comments, 0👍) - Technical debt/prep for GA.
        *   #48047 [OPEN] [BUG] Interactive response prompt freezes intermittently on Confirm or Esc (2 comments, 0👍) - UI freeze bug.
        *   #43376 [OPEN] TUI hangs after a multi-question prompt (question tool, 3 questions) — keys and Ctrl+C unresponsive (2 comments, 0👍) - TUI hang bug.
    *   **PRs (top 20 by comments, but comments are undefined, so use the list provided)**:
        *   #45235 fix(webfetch): apply the timeout to the body read
        *   #45228 feat(app): recover failed turns with another model, preserve continuity, and show error details
        *   #45219 fix(plugin): support documented tool registration
        *   #45218 feat(app): discover and select project favicons
        *   #45207 fix(tui): show readable Effect errors
        *   #45205 feat(app): add Hebrew (he) locale
        *   #45202 fix(read): reject offset/limit of 0 instead of looping
        *   #45201 fix(edit): count blank middle lines as matches in block anchor scoring
        *   #45195 fix(read): make the directory pagination hint match the file branch
        *   #45194 fix(glob): don't report truncation when the count equals the limit
        *   #45193 fix(grep): scope the search to the file when path points to a file
        *   #45182 fix(protocol): restore SSE payload schemas in OpenAPI
        *   #45179 fix(tui): truncate locale strings by display width
        *   #45165 docs(ecosystem): add opencode-fleet-kit
        *   #45161 docs(ecosystem): add opencode-session-recall plugin
        *   #45152 fix(core): resolve queued move projects at delivery
        *   #45148 fix(tui): preserve sessions during server reconnects
        *   #45141 fix(snapshot): severe data loss on restore from a subdirectory
        *   #45138 feat(core): reuse warm PowerShell workers with isolated runspaces
        *   #45135 fix(app): refresh saved projects and send partial updates

3.  **Drafting the Sections**:

    *   **Today's Summary (今日速览)**:
        *   Summarize key points: Today's activity focuses heavily on V2 stability, UI/UX bugs (especially keyboard navigation like ESC and Enter key freezes), and backend resilience (retry logic, config path resolution). There are no new releases, but community discussions highlight critical functional blockers (e.g., ESC interrupt, session processor infinite retries) and highly demanded features like Agent Plugins standard support and limiting parallel subagents.

    *   **Version Release (版本发布)**:
        *   State clearly: Past 24 hours have no new releases. (无新版本发布).

    *   **Hot Issues (社区热点 Issues - top 10)**:
        *   Need to select 10 most impactful ones, explain why they are important, and community reaction (likes/comments).
        *   *Selection criteria*: High comments, high likes, critical bugs, or highly requested features.
        *   1. **#27110 [FEATURE]: Setting to limit max number of parallel subagents** (37👍, 6 comments): Highly requested. Resource control for local models. Critical for users with limited VRAM/context.
        *   2. **#40993 [FEATURE]: support the Agent Plugins standard (agent-plugins.org)** (15👍, 7 comments): Vendor-neutral standard, big for ecosystem growth.
        *   3. **#17648 [Bug]: Session processor retries indefinitely with unbounded exponential backoff** (6👍, 8 comments): Critical backend bug. Infinite loops on transient errors, no circuit breaker.
        *   4. **#3699 [CLOSED] [bug, opentui] Interrupting Session via ESC does not work** (19 comments, 1👍): High discussion, critical blocker for TUI users. ESC key is fundamental for interrupting.
        *   5. **#28492 [OPEN] MaxListenersExceededWarning after web interface starts** (10 comments, 6👍): Memory leak / event listener issue in web version, performance concern.
        *   6. **#27875 [OPEN] Stuck at permission granting with the Enter key is not working** (10 comments, 1👍): UI/UX blocker. Users stuck in permission prompts.
        *   7. **#49768 [OPEN] [Billing] Paid OpenCode Go subscription is shown as inactive** (8 comments, 1👍): Critical billing issue preventing paid model usage.
        *   8. **#51269 [OPEN] V2: subagent/child-session LLM request fails validation** (6 comments): V2 specific bug, blocks subagent functionality entirely.
        *   9. **#42960 [OPEN] [2.0] V2: esc interrupt broken** (6 comments): V2 regression, ESC key not working, background tasks keep running.
        *   10. **#51529 [CLOSED] Desktop app OOM crash with 8 parallel agents** (5 comments): Desktop memory management issue, showing limits of parallel execution.
        *   *(Alternative for 10)*: **#46692 [OPEN] [2.0] chunkTimeout and timeout are silently ignored** (4 comments) - V2 config bug. Let's stick to the list above, maybe swap one for **#40146** (truncated turns recorded as normal) if needed, but the top 10 covers the most commented/liked ones well. Let's write concise summaries for each of the 10.

    *   **Important PRs (重要 PR 进展 - top 10)**:
        *   Select 10 key PRs from the list. Focus on those with significant functional improvements or critical bug fixes.
        *   1. **#45228 feat(app): recover failed turns with another model** - Great resilience feature, continuity preservation.
        *   2. **#45235 fix(webfetch): apply the timeout to the body read** - Prevents hanging on slow body reads.
        *   3. **#45219 fix(plugin): support documented tool registration** - Aligns plugin API with documentation.
        *   4. **#45207 fix(tui): show readable Effect errors** - Improves TUI debugging experience.
        *   5. **#45202 fix(read): reject offset/limit of 0 instead of looping** - Prevents infinite loops in the `read` tool.
        *   6. **#45148 fix(tui): preserve sessions during server reconnects** - Crucial for stability during server restarts.
        *   7. **#45141 fix(snapshot): severe data loss on restore from a subdirectory** - Critical data safety fix.
        *   8. **#45138 feat(core): reuse warm PowerShell workers with isolated runspaces** - Performance boost on Windows.
        *   9. **#45193 fix(grep): scope the search to the file when path points to a file** - Core tool logic fix.
        *   10. **#45182 fix(protocol): restore SSE payload schemas in OpenAPI** - V2 protocol/API spec correctness.
        *   Let's write brief descriptions for each.

    *   **Feature Request Trends (功能需求趋势)**:
        *   Extracted from issues:
            *   **Ecosystem & Plugin Standardization**: Support for vendor-neutral standards like Agent Plugins (agent-plugins.org) (#40993) and portable wrapper scripts (#15789) to reduce global install dependencies.
            *   **Resource Control & Parallelism Management**: Limiting parallel subagents (#27110, 37👍) and dedicated `/tmp` directories per project (#49073) to manage context/memory limits, especially for local models.
            *   **V2 Migration and Stability**: Many issues focus on V2 configuration paths (#32825, #28658), schema validation (#51269), and event naming conventions (#34922) before GA.
            *   **Desktop & Cross-platform Portability**: Requests for portable Windows builds (#37893) and fixes for Desktop OOM crashes (#51529).

    *   **Developer Focus / Pain Points (开发者关注点/痛点)**:
        *   Summarize the recurring themes:
            *   **UI/UX Keyboard responsiveness**: Multiple issues report freezes on "Enter" key confirm, multi-question prompts hanging (#43376, #38552, #27875, #48047), and ESC key interrupt failures (#3699, #42960). Keyboard handling in TUI/Desktop needs a robust refactor.
            *   **V2 Stability and Config Resolution**: Confusing behavior of `OPENCODE_CONFIG_DIR` overriding global paths (#32825, #28658) and silent failures in config like timeouts (#46692).
            *   **Backend Resilience & Safety**: Infinite retry loops without circuit breakers (#17648) and data loss risks during snapshot restores in subdirectories (#45141). Developers are highly sensitive to data loss and infinite loops.
            *   **Billing & Subscription Friction**: Issues like paid subscriptions showing as inactive (#49768) or model limits blocking other models (#51550) create friction for paying users.

4.  **Refining Language and Tone**:
    *   Professional, concise, structured.
    *   Use bullet points, bold text for key issues/PRs.
    *   Include GitHub links as requested ("每个条目附上 GitHub 链接").

5.  **Reviewing Constraints**:
    *   "生成 2026-09-27 的 OpenCode 社区动态日报" -> Check date in the header.
    *   "无 [Releases]" -> Mention it briefly.
    *   "挑选 10 个最值得关注的 Issue" -> Selected 10.
    *   "挑选 10 个重要的 PR" -> Selected 10.
    *   "附上 GitHub 链接" -> Ensure all selected items have their links (`anomalyco/opencode Issue #XXXX` or `PR #XXXX`). Note: The prompt provided links like `anomalyco/opencode Issue #3699`, I will format them as standard GitHub URLs: `https://github.com/anomalyco/opencode/issues/3699` (or just write the issue number and path as provided if full URLs weren't fully spelled out, but standard GitHub URL format is `https://github.com/anomalyco/opencode/issues/3699` / `/pull/45235`). Let me write them out as full links for professionalism, e.g., `https://github.com/anomalyco/opencode/issues/27110`. The prompt provided partial links like `anomalyco/opencode Issue #3699`, I will construct the standard URL format.

Let me double check the issue numbers and construct URLs:
Issues:
- #27110 -> https://github.com/anomalyco/opencode/issues/27110
- #40993 -> https://github.com/anomalyco/opencode/issues/40993
- #17648 -> https://github.com/anomalyco/opencode/issues/17648
- #3699 -> https://github.com/anomalyco/opencode/issues/3699
- #28492 -> https://github.com/anomalyco/opencode/issues/28492
- #

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



# Pi 社区动态日报 | 2026-09-27

今日 Pi 社区活跃度极高， Issues 和 PR 均有大量更新。社区焦点主要集中在**多模型兼容性与成本计算准确性**、**TUI 稳定性与终端交互体验**，以及**Windows 平台支持策略**上。开发团队在 Mistral 工具调用、遥测埋点、剪贴板行为及终端生命周期管理等方面推进了多项关键修复与功能合并。

---

## 1. 今日速览
*   **模型兼容性与成本争议：** 社区对 OpenRouter 成本计算偏差（#9980）、Anthropic OAuth 对新型号（如 Opus 5/5.5）的 `effort level` 拒绝（#10063）以及 Mistral/zAI GLM 模型的工具调用缺陷（#10086）表达了高度关注。
*   **TUI 与终端交互修复：** 多个关于 TUI 卡死（#4945, #10031）、终端窗口丢失崩溃（#10056）以及 macOS 剪贴板异常（#9999）的 Issue 获得社区热烈讨论，相关修复已陆续合并。
*   **重大功能合并：** 包含 Codemode 与 MCP 集成的大型 PR（#10040）以及系统主题升级（#10067）取得新进展，旨在显著提升 AI 沙箱能力与终端视觉体验。

---

## 2. 版本发布
*   **无最新版本发布：** 过去 24 小时内，`pi-mono` 仓库无新 Release 发布。

---

## 3. 社区热点 Issues（Top 10）

以下按关注度与严重级别筛选了 10 个最值得关注的 Issue：

### 1. OpenAI Codex 连接可靠性问题（#4945）
*   **状态：** `[OPEN] [inprogress]`
*   **动态：** 80 条评论，34 👍。社区反响极大的核心交互 Bug。
*   **摘要：** `openai-codex` / `gpt-5.5` 偶尔会卡在 `Working...` 状态，无流式文本、无工具调用也无错误提示，唯一恢复方式是按 Escape 键记录一个中断的助手回合。这严重影响了 Codex 用户的连续开发体验。

### 2. Windows 平台使用体验与支持方向（#7547）
*   **状态：** `[OPEN]`
*   **动态：** 68 条评论，2 👍。社区讨论 Windows 支持策略的里程碑式 Issue。
*   **摘要：** Windows 用户基数庞大，但 Pi 在 Windows 上的运行方式繁多且文档不统一。作者呼吁社区明确核心修复、开箱体验与外部扩展的界限，以集中精力改善 Windows 用户的体验。

### 3. 按下 `<esc>` 停止思考时 Pi 偶发卡死（#10031）
*   **状态：** `[CLOSED] [bug, no-action]`
*   **动态：** 15 条评论，2 👍。影响面广的 TUI 交互缺陷。
*   **摘要：** 自 v0.84.0 以来，用户在使用 `<esc>` 停止思考时，Pi 经常卡在 `Working...` 状态，只能通过 `CTRL+c` 退出并使用 `pi -c` 恢复会话。该 Bug 已复现约一个月。

### 4. Anthropic 严格工具 `makeStrictJsonSchema` 导致 API 拒绝请求（#9953）
*   **状态：** `[OPEN] [bug]`
*   **动态：** 3 条评论，1 👍。涉及 constrained sampling 的关键 API 兼容 Bug。
*   **摘要：** `makeStrictJsonSchema()` 保留了 `minimum`/`maximum` 等校验关键字，导致 Anthropic 严格工具使用时的 JSON Schema 格式被 API 拒绝（返回 400 错误），阻碍了工具的正常约束采样。

### 5. OpenRouter 热门开源模型成本计算偏差 2-3 倍（#9980）
*   **状态：** `[OPEN] [bug]`
*   **动态：** 5 条评论，0 👍。影响用户信任度的计费/统计问题。
*   **摘要：** 模型目录目前采用**最低价**提供商的定价来计算成本，导致在 OpenRouter 上提供多供应商的热门开源模型（如 `z-ai/glm-5.3-flash`）的报告成本比实际低 2-3 倍，误导用户开销评估。

### 6. 扩展控制台输出覆盖交互式 TUI（#10002）
*   **状态：** `[OPEN]`
*   **动态：** 3 条评论，0 👍。扩展开发与 TUI 渲染冲突的典型问题。
*   **摘要：** 扩展在交互式 Pi 会话中使用 `console.error()` 输出的诊断信息直接写入终端，绕过了 Pi 的 TUI 渲染器，导致布局混乱和屏幕视觉损坏，需要重绘才能恢复。

### 7. macOS 下 `Ctrl+V` 粘贴 Finder 文件图标而非图像（#9999）
*   **状态：** `[OPEN] [inprogress]`
*   **动态：** 2 条评论，0 👍。macOS 平台特有的剪贴板竞态 Bug。
*   **摘要：** 在 macOS 上复制文件后，`Ctrl+V`（`pasteImage`）粘贴出的是 Finder 的 1024x1024 文件图标渲染图，而非真正的文件或图像，给跨工作流带来困扰。

### 8. kimi-coding 模型因 Anthropic SDK 凭据探测失败（#9954）
*   **状态：** `[OPEN]`
*   **动态：** 2 条评论，1 👍。多供应商环境下的凭据污染问题。
*   **摘要：** 机器上存在原生 Claude Code 安装时，

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>



# Qwen Code 社区动态日报 — 2026-09-27

---

## 1. 今日速览

Qwen Code 发布 **v0.24.6**（含 Desktop 与 SDK TypeScript/Java 绑定），核心修复集中在 serve 层会话诊断保留。社区最活跃的议题是 **Managed Agent 多阶段架构演进**（#12380 提案已累积 32 条讨论），以及 Remote-SSH 连接稳定性（#12416）和 DeepSeek API thinking 模式兼容性（#3579）。

---

## 2. 版本发布

### v0.24.6 / desktop-v0.24.6 / sdk-typescript-v0.1.16

| 项目 | 内容 |
|------|------|
| **CLI 版本** | 0.24.6（SDK TypeScript v0.1.16 内嵌同一构建） |
| **Desktop 版本** | 0.24.6（当前 release feed 覆盖 darwin-aarch64 / darwin-x86_64 / linux-x86_64 / win32-x86_64） |
| **SDK Java** | 新增 Hosted Harness 私有客户端（#12654）及 managed runtime 支持 |

**关键修复：**
- `fix(serve)`：保留会话创建失败的完整诊断信息，避免故障排查时上下文丢失（#12331）

**无已知 Breaking Changes。**

---

## 3. 社区热点 Issues（Top 10）

### 🔴 高优先级 / 影响面广

**① #12416 — Remote-SSH 每次 `POST /session` 都失败（`write EPIPE`）**
- **为什么重要**：直接影响 VS Code Remote-SSH 场景下的核心使用流程，bundled CLI 单独运行正常，说明是 Companion 与 ACP Bridge 间的通道问题。
- **社区反应**：16 条评论，开发者 danyavaad 提供了完整的环境复现细节，社区正在定位 BridgeChannelClosedError 的触发边界。
- 🔗 https://github.com/QwenLM/qwen-code/issues/12416

**② #3579 — DeepSeek API 400 错误：thinking 模式下 `reasoning_content` 未回传**
- **为什么重要**：DeepSeek 用户在使用 Qwen Code 时偶发此错误，属于模型厂商协议兼容性问题，影响实际推理流程。
- **社区反应**：12 条评论，问题已 CLOSED，有开发者给出了根因分析和复现步骤。
- 🔗 https://github.com/QwenLM/qwen-code/issues/3579

**③ #11908 — `available_commands_update` 通知超限导致通道拆除、后续请求全部 404**
- **为什么重要**：一旦触发，整个 session 链路断裂，所有后续请求返回 `No session with id`，属于 P1 级核心 bug。
- **社区反应**：6 条评论，已 CLOSED，社区确认了 fail-closed 行为的破坏性，推动了阈值保护修复。
- 🔗 https://github.com/QwenLM/qwen-code/issues/11908

### 🟡 架构演进 / 长期关注

**④ #12380 — Managed Agent 双路径架构提案（32 条评论，社区最热）**
- **为什么重要**：定义了 Managed Agent 的分阶段交付路线——保持现有 TypeScript agent loop，模型推理独立于工具环境 provisioning，赋予 Session 持久化所有权、Workspace 绑定、可恢复工具执行和稳定 WebSocket。
- **社区反应**：评论数远超其他 Issue，多阶段（W0a→W0c、Stage B、Stage D）已被拆分为多个子 Issue 推进，是当前最大的架构演进方向。
- 🔗 https://github.com/QwenLM/qwen-code/issues/12380

**⑤ #12737 — ACP Bridge Stage B：配对 Legacy/Managed 引擎的宿主集成**
- **为什么重要**：#12380 提案的 Stage B 落地步骤，让 `qwen serve` 宿主真正使用双引擎配对能力。
- **社区反应**：8 条评论，由 wenshao 提出，与 #12698（Stage A 构造）和 #12807（PR，workspace 变更分发）形成完整链路。
- 🔗 https://github.com/QwenLM/qwen-code/issues/12737

**⑥ #12793 — Managed Agent Stage D：公开 API 契约、DTO 生成、Session 查询与事件回放**
- **为什么重要**：将 OpenAPI v1.12 作为仓库内契约，为多客户端生态（SDK、Desktop、第三方）提供稳定的 API 基础。
- 🔗 https://github.com/QwenLM/qwen-code/issues/12793

### 🟢 用户体验 / 细节修复

**⑦ #12792 — EditTool 在 CRLF/LF 混用时重写整个文件**
- **为什么重要**：模型只改一行，`git diff` 却显示整文件变更，严重干扰代码审查和协作。
- **社区反应**：5 条评论，已定位到行尾符规范化逻辑，社区期待修复后能保留原始行尾。
- 🔗 https://github.com/QwenLM/qwen-code/issues/12792

**⑧ #12760 — 多 API Key 配置下 `/model` 切换异常**
- **为什么重要**：用户配置了 DeepSeek + 阿里云标准版 + 阿里云 Token Plan 三个 Key，切换模型时行为不符合预期，影响多厂商模型试用体验。
- **社区反应**：5 条评论，hantsy 提供了详细配置复现。
- 🔗 https://github.com/QwenLM/qwen-code/issues/12760

**⑨ #12727 — Windows PowerShell 下 `/update` 命令行为异常**
- **为什么重要**：更新后自动退出再启动仍显示旧版本通知，用户困惑。已 CLOSED，但反映了 Windows 平台更新逻辑的边界 case。
- 🔗 https://github.com/QwenLM/qwen-code/issues/12727

**⑩ #12770 — 扩展生命周期事件忽略 `privacy.usageStatisticsEnabled`，仍上传到 RUM**
- **为什么重要**：隐私设置被绕过，属于数据合规风险，P2 但涉及用户隐私信任。
- **社区反应**：4 条评论，根因在 ExtensionManager 内部创建的临时 Config 缺少遥测配置传递，已有对应修复 PR #12789。
- 🔗 https://github.com/QwenLM/qwen-code/issues/12770

---

## 4. 重要 PR 进展（Top 10）

| PR | 标题 | 类型 | 要点 |
|----|------|------|------|
| **#12582** | run agents on other computers, bind Codex or Claude Code, share over A2A | feat | 在 #11206 本地协作基础上，增加跨机器 agent 运行 + A2A 协议共享，支持绑定 Codex / Claude Code 作为外部运行时 |
| **#11206** | persistent shared-thread agent collaboration | feat | 持久化共享线程的 agent 协作：创建、分配、中断、结果归属、取消、解决 blocker，是多 agent 协作的基础设施 |
| **#12767** | local managed tool-result segment store | feat | Session 级本地存储，持久化托管工具输出为不可变 segment，支持幂等发布、密封、前缀校验和精确字节范围读取 |
| **#12807** | deliver workspace changes to every paired engine | feat | 配对 Legacy/Managed Bridge 上，workspace 变更广播到所有存活引擎，未确认的引擎被隔离 |
| **#10954** | expose the background agents the supervisor is running | feat | `qwen serve` 新增 `GET /background-agents`，暴露 Agent View supervisor 正在运行的 session 及其状态 |
| **#11959** | resolve model limits and modalities from models.dev catalog | feat | 引入 models.dev 目录推断上下文窗口、输出限制和输入模ality，24h 缓存 + ETag 刷新，显式配置仍为权威 |
| **#11794** | honor output language in stateless generation | feat | 无状态生成（`POST /session/:id/generate`、`POST /workspace/generate`）从运行时解析输出语言偏好 |
| **#12789** | honor usage-statistics opt-out for extension lifecycle events | fix | 修复 ExtensionManager 内部临时 Config 未传递隐私偏好，导致扩展生命周期事件绕过 opt-out 上传 RUM（对应 #12770） |
| **#12798** | reject unreadable decimal scales (sdk-java) | fix | Runtime Broker 拒绝 scale > 2048 的 BigDecimal，与 fastjson2 2.0.60 可读范围对齐（对应 #12796） |
| **#12794** | classify multi-address connect failures by any attempt, not the first | fix | `web_fetch` 对多地址 host 的 https→http 回退，从仅读取 AggregateError 顶层 code 改为遍历 errors[]（对应 #12720） |

---

## 5. 功能需求趋势

从社区 Issue 和 PR 的分布来看，当前 Qwen Code 社区最关注的五大方向：

1. **多 Agent 协作与 Managed Agent 架构**（#12380 → #12737 → #12793 → #12724 → #12767 → #12582）
   - 已成为社区最大的架构演进主线，覆盖 Session 生命周期、Workspace 绑定、工具结果持久化、跨机器部署和 A2A 协议。

2. **IDE / 编辑器集成稳定性**（#12416 Remote-SSH、#11908 ACP Bridge）
   - Remote-SSH 的 `EPIPE` 问题和 ACP Bridge 的超限拆除是当前最紧迫的连接层问题。

3. **多厂商模型与 API Key 管理**（#12760、#3579）
   - 用户需要灵活切换 DeepSeek / 阿里云等多个厂商 Key，并保证 thinking 模式兼容。

4. **桌面端平台覆盖与更新体验**（#12806 linux-aarch64、#12727 Windows update）
   - ARM64 Linux 桌面构建和 Windows 更新逻辑是平台分发的两大缺口。

5. **隐私与遥测合规**（#12770）
   - 扩展生命周期事件绕过 opt-out 的问题已引起关注，修复 PR 已就绪。

---

## 6. 开发者关注点

总结社区高频反馈的痛点：

| 痛点 | 典型 Issue | 影响 |
|------|-----------|------|
| **Remote-SSH 通道不稳定** | #12416 | 阻碍 VS Code 远程开发场景 |
| **多 API Key 切换不可靠** | #12760 | 限制多厂商模型试用 |
| **行尾符规范化破坏 diff** | #12792 | 干扰代码审查协作 |
| **BigDecimal / JSON 编解码边界** | #12796、#12631 | Java SDK 数据持久化隐患 |
| **测试时钟 flaky** | #12782 | CI 不稳定，阻碍合并 |
| **i18n 翻译不完整** | #12306 | 中文界面残留英文 |
| **更新机制边界 case** | #12707、#12802 | Windows / deferred marker 逻辑 |
| **Hook 状态保持** |

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



# 2026-09-27 DeepSeek TUI (Codewhale) 社区动态日报

## 1. 今日速览
过去24小时内，DeepSeek TUI（底层开发代号 Codewhale）社区活跃度极高，但**无新版本发布**。开发重点转向核心架构治理与用户体验修复：社区高度关注的“引擎运行中静默冻结”（#6184）和“长运行下 TUI 滚动卡顿”（#6652）等关键 Bug 仍在追踪中；同时，多个旨在提升开发者效率与系统健壮性的 PR（如线程产物引用、会话权威修复、GUI性能优化）已成功合并或进入收尾阶段。

## 2. 版本发布
*   **无新版本发布**：过去24小时内无新的 Release。

## 3. 社区热点 Issues（Top 10）
以下按关注度与技术影响力筛选：

1.  **#6184 [bug] 引擎运行中静默冻结（Silently freezes mid-run）**
    *   **重要性**：极高。这是目前最严重的可用性问题。在长周期、重工具调用的运行中，引擎停止输出但用户消息仍被持久化，无崩溃日志，导致 Agent 彻底“假死”。
    *   **社区反应**：8条评论，社区正积极协助定位复现。
    *   [链接](https://github.com/Hmbown/Codewhale/issues/6184)
2.  **#6652 [bug] TUI 长时间运行后滚动卡顿（Laggy scrolling）**
    *   **重要性**：高。直接影响长时间使用 TUI 的交互体验，表现为类似果冻般的延迟滚动。
    *   **社区反应**：已确认复现，等待性能分析。
    *   [链接](https://github.com/Hmbown/Codewhale/issues/6652)
3.  **#6035 [enhancement] 模型 ID 锚定不随供应商更新迁移（Model pins don't propagate）**
    *   **重要性**：高。配置中至少有六处独立定义了模型 ID。当供应商（如 DeepSeek）退役旧 ID（如 `deepseek-v4-flash`）时，配置不会自动迁移，导致本地配置失效。
    *   **社区反应**：3条评论，讨论需要一个共享的模型 ID 迁移所有者。
    *   [链接](https://github.com/Hmbown/Codewhale/issues/6035)
4.  **#6603 [needs-triage] 添加可选的决策门以加速常规 Agent 决策（Decision Gate）**
    *   **重要性**：中高。旨在减少 routine（常规）任务对大模型的无谓唤醒，降低延迟与成本。当前每个用户消息都会唤醒大模型进行意图识别。
    *   **社区反应**：1条评论，处于需求 triage 阶段。
    *   [链接](https://github.com/Hmbown/Codewhale/issues/6603)
5.  **#6263 [enhancement] 会话内密钥输入（In-session secret entry）**
    *   **重要性**：中高。当前提供 Token 需要切出 TUI 终端运行 `codewhale auth set`，严重打断 Agent 协作流。
    *   **社区反应**：0条评论，但设计思路（避免在 composer 粘贴敏感信息）非常具有实用性。
    *   [链接](https://github.com/Hmbown/Codewhale/issues/6263)
6.  **#6564 [enhancement] 对话式设置（Settings by conversation）**
    *   **重要性**：中。让用户用自然语言告诉 Codewhale 想要的设置，由 AI 提出具体更改方案，逐项卡片审批，不直接写入。
    *   **社区反应**：创始人直接提出的需求，设计清晰。
    *   [链接](https://github.com/Hmbown/Codewhale/issues/6564)
7.  **#5856 [enhancement] Computer-use 插件：实时安装与首步行动循环**
    *   **重要性**：中。探讨内置 computer-use bundle 的验收路径与交互循环。
    *   **社区反应**：6条评论，处于技术方案深度讨论中。
    *   [链接](https://github.com/Hmbown/Codewhale/issues/5856)
8.  **#6298 [documentation] Fleet 权限重构：停止通过命令语法定义只读（Fleet rework）**
    *   **重要性**：中。源于一次真实事故：子 Agent 被拒绝链式只读 git 命令后，通过继承的 computer-use 工具向宿主 Terminal 键入

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>



好的，这是为您整理的 2026-09-27 ComfyUI 社区动态日报。

---

### 📊 ComfyUI 社区动态日报 | 2026-09-27

#### 1. **今日速览**
今日社区活跃度较高，无新版本发布，但 Issues 和 PR 动态丰富。核心焦点集中于 **Apple Silicon (MPS) 后端的稳定性与性能优化**、**MiniMax 系列模型的多项关键 Bug 修复**，以及 **Qwen-Image 2.1 生态的完善**。社区正在努力解决特定硬件平台上的崩溃和精度问题。

#### 2. **版本发布**
*（无）过去24小时内无新版本发布。*

#### 3. **社区热点 Issues（Top 10）**

以下按关注度和重要性排序：

| Issue | 标题 | 简析 | 链接 |
| :--- | :--- | :--- | :--- |
| **#16246** | BSOD in dxgmms2.sys on RTX 3050 since v0.35.0 | **严重稳定性问题**。用户在更新到 v0.35.0 后，Windows 11 + RTX 3050 平台频繁出现蓝屏死机，指向显存管理器。社区反应热烈（2👍，10评），正等待更多诊断日志。 | [链接](https://github.com/Comfy-Org/ComfyUI/issues/16246) |
| **#16587** | MiniMax H3 FL2VA on DGX Spark: whole-host loss | **严重崩溃问题**。在单卡 DGX Spark (GB10) 上运行 MiniMax H3 FL2VA 模型时，曾成功运行的配置后来导致整机无响应，涉及 aarch64 架构。 | [链接](https://github.com/Comfy-Org/ComfyUI/issues/16587) |
| **#16585** | Qwen3-VL vision tower NVFP4 crash | **量化模型加载 Bug**。当使用 NVFP4 量化且视觉层运行在 float32 时，Qwen3-VL 模型在处理图像输入时会直接崩溃。 | [链接](https://github.com/Comfy-Org/ComfyUI/issues/16585) |
| **#16433** | Qwen-Image-2.1 VAE encode broken on MPS | **Mac 用户关键 Bug**。在 Apple Silicon 上，Qwen-Image-2.1 VAE 的编码-解码往返结果严重失真（PSNR 仅 6.6 dB），而 CPU 上正常，影响所有图像编辑工作流。 | [链接](https://github.com/Comfy-Org/ComfyUI/issues/16433) |
| **#16589** | MiniMax H3 Ref2VA: reference-fidelity regression | **模型效果回退**。用户报告本地 ComfyUI 上 MiniMax H3 Ref2VA 无法保留参考图像的视觉身份，尽管工作流和模型文件相同。 | [链接](https://github.com/Comfy-Org/ComfyUI/issues/16589) |
| **#16591** | SeedVR2: periodic near-frozen frames in video upscaling | **视频超分算法 Bug**。视频超分时每隔4帧就会出现近乎冻结的异常帧，影响输出视频流畅度。 | [链接](https://github.com/Comfy-Org/ComfyUI/issues/16591) |
| **#15114** | LoKr alpha scaling is ignored when lokr_w1/lokr_w2 stored directly | **核心算法 Bug**。LyCORIS LoKr 在直接存储矩阵格式下，alpha 缩放被忽略，导致微调效果与预期不符。 | [链接](https://github.com/Comfy-Org/ComfyUI/issues/15114) |
| **#16593** | TAE previews for Wan 2.1-latent models look washed out | **用户体验问题**。使用 lighttaew2_1 时，潜在空间预览因归一化问题显得发灰发白，影响生成过程监控。 | [链接](https://github.com/Comfy-Org/ComfyUI/issues/16593) |
| **#16573** | uni_pc: phi-coefficient recurrence runs in float32 on MPS | **数值精度 Bug**。uni_pc 采样器在 MPS 后端因 float32 精度问题导致计算错误（b3=55 vs 0.25），在 float64 下可修复，影响 Wan 2.2 等模型。 | [链接](https://github.com/Comfy-Org/ComfyUI/issues/16573) |
| **#16579** | ROCm / AMD Navi 31: Fix GPU Page Faults, LoRA Hook Leaks & Glibc RAM Bloat | **重要修复提案**。针对 AMD RX 7900 XT 的驱动崩溃、内存泄漏和系统内存暴涨问题提供了一揽子修复方案。 | [链接](https://github.com/Comfy-Org/ComfyUI/issues/16579) |

#### 4. **重要 PR 进展（Top 10）**

| PR | 标题 | 核心内容 | 链接 |
| :--- | :--- | :--- | :--- |
| **#14770** | Use MPS for text encoders on Apple Silicon | **性能提升**。将 Apple Silicon 上的 LM 类文本编码器（如 ACE-Step 1.5）从 CPU 移至 MPS，生成时间从 6分19秒 降至约 40 秒。 | [链接](https://github.com/Comfy-Org/ComfyUI/pull/14770) |
| **#16567** | Fix Qwen-Image 2.1 text encoder fallback | **模型支持修复**。修复了加载 GGUF 或剥离视觉层的 Qwen3-8B 权重时，文本编码器类型检测错误的问题。 | [链接](https://github.com/Comfy-Org/ComfyUI/pull/16567) |
| **#16590** | Redact sensitive headers when logging API node responses | **安全加固**。修复了 API 节点日志记录漏洞，此前响应头中的敏感信息会被明文写入 `temp/api_logs`。 | [链接](https://github.com/Comfy-Org/ComfyUI/pull/16590) |
| **#16578** | Implement the asset export API locally | **功能新增**。在本地 ComfyUI 中实现了与云端对齐的资产导出 API (`POST /api/assets/export`)，简化了前后端代码路径。 | [链接](https://github.com/Comfy-Org/ComfyUI/pull/16578) |
| **#16583** | Fix alpha scaling for direct LoKr matrices | **核心算法修复**。修复了直接存储格式的 LoKr 矩阵在合并和旁路执行中忽略 alpha/秩缩放的问题，与 Issue #15114 对应。 | [链接](https://github.com/Comfy-Org/ComfyUI/pull/16583) |
| **#15207** | Fix Stable Audio 3 VAE decoding to noise on MPS | **Mac 音频修复**。修复了 Apple Silicon 上 Stable Audio 3 VAE 解码输出噪音的问题，通过强制使用合适的精度。 | [链接](https://github.com/Comfy-Org/ComfyUI/pull/15207) |
| **#16519** | Support Qwen-Image 2.1 union fun controlnet | **新模型支持**。添加了对 Qwen-Image-2.1-Fun-Controlnet-Union 模型的原生支持。 | [链接](https://github.com/Comfy-Org/ComfyUI/pull/16519) |
| **#15520** | Fail loudly when quantization scale tensors go unrecognized | **鲁棒性提升**。当量化缩放张量未被识别时，不再静默丢弃，而是直接报错，避免潜在的模型加载错误。 | [链接](https://github.com/Comfy-Org/ComfyUI/pull/15520) |
| **#15561** | Fix MiniMax H3 tiled VAE decode producing a grid of mismatched tiles | **视频解码修复**。修复了 MiniMax H3 VAE 在空间分块解码时产生网格化不匹配图块的问题。 | [链接](https://github.com/Comfy-Org/ComfyUI/pull/15561) |
| **#16584** | Fix 403 on top-level navigation from another site | **Web 访问修复**。修复了浏览器从其他站点发起顶级导航时被 `create_origin_only_middleware` 错误拦截返回 403 的问题。 | [链接](https://github.com/Comfy-Org/ComfyUI/pull/16584) |

#### 5. **功能需求趋势**

从近期社区动态中，可提炼出以下重点关注方向：

-   **Apple Silicon (MPS) 原生支持**：社区正密集修复 MPS 后端的各类 Bug（VAE、采样器、文本编码器），并致力于释放其性能潜力。
-   **视频生成模型深度优化**：MiniMax H3 和 SeedVR2 等视频模型的稳定性、效果和性能是当前 PR 和 Issue 的热点。
-   **量化技术的鲁棒性**：对 NVFP4、GGUF 等量化格式的支持及错误处理机制（如 `#15520`）成为新焦点。
-   **API 与云原生能力**：资产导出 API 的本地化实现（`#16578`）和 OpenAPI 契约同步（`#16368`）表明，社区正推动 ComfyUI 向更易集成的云原生平台演进。
-   **工作流稳定性与用户体验**：从预览显示（`#16593`）到节点安装提示（`#16586`），细节体验持续被关注。

#### 6. **开发者关注点**

开发者反馈的痛点和高频需求总结如下：

-   **跨平台后端兼容性**：MPS、ROCm、XPU 等非 CUDA 后端的稳定性是当前最突出的挑战，频繁出现显存管理、设备上下文和数值精度问题。
-   **模型加载的容错与明确性**：开发者希望模型加载失败或遇到非预期格式时能给出明确错误，而非静默失败或崩溃。
-   **API 文档与集成支持**：Issue #6607 等长期存在的 API 文档需求，以及资产导出等新 API 的实现，体现了开发者对标准化集成的迫切需求。
-   **核心工作流的可预测性**：如 LoKr 缩放、时间步调度（`#16156`）等核心算法的行为一致性，是高级用户和自定义节点开发者关注的重点。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>



根据您提供的 GitHub 数据，以下是 **2026-09-27 Ollama 社区动态日报**。本期社区核心焦点在于**工具调用解析器（Parser）的边界 Bug 集中爆发与修复**、**桌面端 UX（用户体验）改进**，以及**云端服务严重故障的反馈**。

---

### 1. 今日速览
Ollama 社区今日活跃度高，主要动态集中在**工具调用解析器（Parser）的鲁棒性修复**。社区针对 Gemma4、GLM-4.7、Qwen3 等主流模型在处理复杂参数（如空格、换行、大整数、嵌

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

Thinking Process:

1.  **Understand the Goal**: The user wants a daily community dynamic report for `llama.cpp` dated `2026-09-27` based on provided GitHub data (specifically looking at releases, issues, and pull requests updated/created around `2026-09-26`). The report must be in Chinese, structured into specific sections, concise, professional, and targeted at technical developers.

2.  **Analyze the Input Data**:
    *   **Date of report**: 2026-09-27 (based on data updated up to 2026-09-26).
    *   **Releases**: Multiple releases (b11205 down to b11192).
        *   Key highlights:
            *   b11205: CUDA support for Nemotron 3 Puzzle state size 96 for ssm scan (#28717).
            *   b11203: CUDA add F16 input to FWHT (#29096).
            *   b11202: server fix wake_fd warning on Windows (#29479).
            *   b11201: Revert "Change max context length for auto-fitting with unified KV (#28849)" (#29437).
            *   b11200: jinja implement sameas test (#29448).
            *   b11199: jinja fix compile error (#29468).
            *   b11195: ggml-cpu tiled mul_mat for k-quants (#27851).
            *   b11194: opencl add A8 Q8_0 non-MoE dp4a binary kernel (#29439).
            *   b11193: hexagon find software divide calls using binary inspection tool (#29449).
            *   b11192: vendor update cpp-httplib to 0.58.0 (#29407).
    *   **Issues (Top 30 by comments)**:
        *   #14909: Implement missing ops from backends (55 comments, 9 👍) - Good first issue, general enhancement.
        *   #27198: Eval bug: [SYCL] --split-mode tensor crashes in dev2dev_memcpy (DEVICE_LOST) on dual Arc Pro B70 (31 comments).
        *   #25618: Eval bug: Speculative decoding (draft-mtp / draft-dspark): greedy output diverges from vanilla on quantized targets (27 comments).
        *   #25593: Eval bug: SM_60 Quality Loss, FP32 math silently done in FP16 (18 comments).
        *   #25807: ROCm-7.14 - > 'error while loading shared libraries: libhipblas.so.3' (17 comments).
        *   #24946: [SYCL/xe] -cb pins GPU at gt-c0 on Battlemage (16 comments).
        *   #23210: llama-server crashes on CUDA with Qwen3.6-27B (13 comments).
        *   #24415: can't load gemma-4-12B with OpenVINO (12 comments).
        *   #24795: gemma4-assistant MTP draft model fails to load - "invalid vector subscript" (11 comments).
        *   #29424: Feature Request: Add support for K2 Horizon (0.9B, 3.7B, 7B, 32B, 36B MoVA) (10 comments).
        *   #28778: SYCL: DFlash2 draft model triggers GPU driver TDR reset on dual Arc Pro B70 (10 comments).
        *   #29104: server silently stops processing when /metrics endpoint is scraped by VictoriaMetrics (9 comments).
        *   #27546: OpenVINO on i5 1345u GPU throws exception (8 comments).
        *   #27428: draft-mtp roughly halves prompt processing on multi-GPU layer split (7 comments).
        *   #25304: cublasCreate_v2 resource allocation failure on first inference (7 comments).
        *   #27076: ggml_vulkan: device lost on Vulkan0 (6 comments).
        *   #27922: Feature Request: Support GLM5.3 (flash) (6 comments, 18 👍).
        *   #28728: SYCL: bad output on Qwen3.6 35B A3B (6 comments).
        *   #25972: OpenVINO backend crashes with MTP speculative decoding (4 comments).
        *   #29270: ggml_vulkan: vk::Device::allocateMemory: ErrorOutOfDeviceMemory (3 comments).
        *   #29082: [Vulkan] GGML_ABORT cache_k_l0 in Vulkan buffer on SWA models (3 comments).
        *   #29431: Vulkan ARGSORT ne=[2048,1,1,1] only sorts half of the array (3 comments).
        *   #28954: Regression - Images above ~1.2 Mpx trigger ggml_assert with Gemma4 Models (2 comments).
        *   #28328: CPU backend score ignores OS XSAVE support -> SIGILL (2 comments).
        *   #26988: --cors-origins does not follow spec (2 comments).
        *   #29494: repeat_last_n / dry_penalty_last_n are not bounded, causing penalties/DRY sampler allocate multi-GB zero-filled buffer and server OOM (1 comment).
        *   #29487: Backend Top-K output buffer is still allocated at full vocabulary width (1 comment).
        *   #29473: ggml-hexagon on Snapdragon 7 Gen 4 - HMX MUL_MAT returns inf for n>=5 (1 comment).
    *   **Pull Requests (Top 20 by comments/updates)**:
        *   #29442: BF16/FP16 conversion to f32 chunking (CUDA, lowering VRAM).
        *   #29500: sycl: add IQ3_S multi-column MMVQ (performance boost for Qwen3.8-27B IQ3_S-heavy GGUF).
        *   #29151: model : add Ling 3.0 VL support (vision-language).
        *   #28724: server: sanitize invalid UTF-8 in generated text at the token boundary.
        *   #28682: chat: add dedicated Ling 3.0 (Bailing V3) parser.
        *   #29497: bug: fix grammar builder crash on invalid minItems/maxItems (JSON schema OOM crash fix).
        *   #29496: server : report usage across all choices when n > 1.
        *   #28717: CUDA: support state size 96 for ssm_scan op for Nemotron 3 Puzzle.
        *   #28907: HIP: Enable fattn-mma kernel on cdna for dkq > 256 for large batch sizes.
        *   #29481: musa: build the docker images from the PH1 MUSA SDK image.
        *   #26289: CUDA: tune fp16 tile FlashAttention configs for head sizes 40-112.
        *   #29483: webgpu: add MMVQ support for Q1_0/Q5_0/Q5_1/Q3_K/Q5_K/Q6_K/MXFP4.
        *   #29120: server implementation (cold-start race conditions and queueing behavior).
        *   #29096: cuda: add F16 input to the FWHT.
        *   #27140: Slow prefill on small KV quants fixed.
        *   #29492: cli: fix exit code 0 when media loading fails.
        *   #29479: server : fix wake_fd warning on Windows.
        *   #29293: cuda: support IQ4_NL in the flash attention KV cache.
        *   #29033: vocab : add ufakzeka pre-tokenizer (Turkish model).
        *   #29273: ci : update the oneAPI toolkit to 2026.1.

3.  **Drafting the Report Structure**:
    *   **Header**: Title and date (2026-09-27).
    *   **Section 1: 今日速览 (Today's Overview)**: Summarize the key themes: massive release activity (b11192 to b11205) focusing on CUDA/SYC/OpenCL backend optimizations, model support (Nemotron, Ling 3.0 VL), and critical bug fixes (OOM, server crashes, grammar builder).
    *   **Section 2: 版本发布 (Version Releases)**: Summarize the releases b11205 down to b11192. Focus on the most impactful ones (Nemotron CUDA support, CPU tiled mul_mat for k-quants, jinja fixes, Windows server warnings).
    *   **Section 3: 社区热点 Issues (Community Hot Issues - Top 10)**: Select the 10 most critical/interesting issues based on comments, likes, and technical impact.
        *   *Selection criteria*: High comments, regressions, OOM, new model support requests, backend crashes.
        *   List:
            1.  #14909 (Backends missing ops - general enhancement)
            2.  #27198 (SYCL crash on dual Arc Pro B70)
            3.  #25618 (Speculative decoding divergence on quantized targets)
            4.  #25593 (SM_60 FP32 math done in FP16 quality loss)
            5.  #24946 (SYCL GPU pinning power issue)
            6.  #23210 (CUDA crash with Qwen3.6-27B)
            7.  #24795 (Gemma4 MTP draft model crash - "invalid vector subscript")
            8.  #29424 (K2 Horizon model support request)
            9.  #29104 (Server silent stop on VictoriaMetrics scrape)
            10. #27922 (GLM5.3 support request - high interest, 18 👍)
    *   **Section 4: 重要 PR 进展 (Important PR Progress - Top 10)**: Select 10 key PRs showing active development.
        *   List:
            1.  #29500 (SYCL IQ3_S MMVQ - big speedup)
            2.  #29151 (Ling 3.0 VL support)
            3.  #29442 (BF16/FP16 chunking to f32 for VRAM reduction)
            4.  #29497 (Grammar builder crash fix - OOM)
            5.  #29496 (Server usage report fix for n > 1)
            6.  #28717 (Nemotron 3 Puzzle CUDA ssm_scan state size 96)
            7.  #28907 (HIP fattn-mma kernel for large batches)
            8.  #26289 (CUDA FlashAttention FP16 tuning)
            9.  #29483 (WebGPU MMVQ support expansion)
            10. #29120 (Server concurrency slot reservation and queueing)
    *   **Section 5: 功能需求趋势 (Feature Request Trends)**: Extract common themes from Issues/PRs.
        *   New model support (K2 Horizon, GLM5.3, Ling 3.0 VL, Nemotron 3 Puzzle).
        *   Backend-specific optimizations and stability (SYCL on Intel Arc, ROCm library issues, WebGPU quant support, Hexagon/Snapdragon issues).
        *   Speculative decoding (MTP) stability and correctness on quantized models.
        *   Server stability and resource management (OOM on grammar, metrics scraping crash, CPU memory bounding).
    *   **Section 6: 开发者关注点 (Developer Pain Points / Focus Areas)**:
        *   Backend crashes and driver compatibility (SYCL TDR, Vulkan device lost, ROCm libs).
        *   Memory limits and OOM issues (repeat_last_n buffer, Top-K full vocab allocation).
        *   Performance regressions (prefill speed on small KV quants, draft-mtp multi-GPU split).
        *   Correctness issues (greedy sampling divergence, invalid UTF-8 output, CORS spec).

4.  **Refining and Translating to Chinese**:
    *   Keep the tone professional, technical, and objective.
    *   Translate technical terms accurately (e.g., "speculative decoding" -> 投机解码 / 推测性解码, "quantized" -> 量化, "KV cache" -> KV缓存, "OOM" -> 内存溢出 / 显存溢出, "SM_60" -> SM_60架构, "SYCL" -> SYCL跨平台编程模型).
    *   Ensure all links are preserved and formatted nicely (using markdown).

Let's double-check the details of some key items to write meaningful summaries:
*   **b11205**: CUDA support for Nemotron 3 Puzzle state size 96 for ssm scan (#28717). This is a specific model support optimization.
*   **b11195**: ggml-cpu tiled mul_mat for k-quants (#27851). This is a major CPU performance improvement for quantized models (unpacks to int8 tiles, computes 16x16 micro-tiles).
*   **PR #29500**: SYCL IQ3_S MMVQ. Benchmarks show 2.71x speedup (978us -> 361us) on Qwen3.8-27B. Very important for Intel GPU users.
*   **PR #29497**: Grammar builder crash on invalid minItems/maxItems. Fixes a fatal OOM crash in llama-server. Crucial server stability fix.
*   **Issue #25618**: Speculative decoding greedy output diverges from vanilla on quantized targets. This is a subtle but critical correctness bug for users using draft models with quantized main models.
*   **Issue #29494**: repeat_last_n / dry_penalty_last_n unbounded multi-GB zero-filled buffer causing OOM. Critical server memory safety issue.
*   **Issue #27922**: Support GLM5.3 (flash). High community demand (18 👍).

Let's organize the sections clearly.

### Section 1: 今日速览
llama.cpp 社区在过去24小时内非常活跃，发布了多个版本（b11192 至 b11205），重点集中在 CUDA 后端对新模型（如 Nemotron 3 Puzzle）的支持、CPU 量化矩阵乘法（k-quants）的平铺优化，以及服务端稳定性的修复。同时，社区针对多后端（SYCL、Vulkan、ROCm）的崩溃问题、投机解码（MTP）在量化模型上的正确性，以及新模型支持（如 Ling 3.0 VL、GLM5.3）展开了热烈讨论。

### Section 2: 版本发布 (Releases)
Summarize the key releases from b11205 to b11192.
*   **b11205**: 新增 CUDA 对 Nemotron 3 Puzzle 状态大小为 96 的 ssm scan 支持（#28717）。
*   **b11203**: CUDA 新增 FWHT 的 F16 输入支持，减少显存拷贝和转换开销（#29096）。
*   **b11202**: 修复 Windows 上服务端 `wake_fd` 的编译警告（#29479）。
*   **b11201**: 回滚了之前关于统一 KV 缓存自动适配最大上下文长度的更改（#29437）。
*   **b11200 / b11199**: Jinja 模板引擎新增 `sameas` 测试并修复了编译错误（#29448, #29468）。
*   **b11195**: **重要性能优化**：ggml-cpu 引入针对 k-quants 的分块（tiled）mul_mat，将 int8 分块微内核计算效率大幅提升（#27851）。
*   **b11194**: OpenCL 新增 A8 Q8_0 非 MoE dp4a 二进制内核（#29439）。
*   **b11192**: 更新第三方库 `cpp-httplib` 至 0.58.0（#29407）。

### Section 3: 社区热点 Issues (Top 10)
Pick the top 10 most impactful issues.
1.  **#14909 后端缺失算子实现请求** (55条评论, 9👍)：社区长期关注的基础增强需求，鼓励开发者贡献缺失的后端算子。
2.  **#27198 SYCL 双 Arc Pro B70 投机解码/张量并行崩溃** (31条评论)：Intel GPU 用户的核心痛点，涉及 dev2dev_memcpy 导致的 DEVICE_LOST。
3.  **#25618 投机解码在量化模型上的贪婪采样发散** (27条评论)：严重的正确性 Bug，当目标模型为 Q4_K_M �

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*