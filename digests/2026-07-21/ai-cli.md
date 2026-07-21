# AI CLI 工具社区动态日报 2026-07-21

> 生成时间: 2026-07-21 07:12 UTC | 覆盖工具: 12 个

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

### 🔥 今日重点

1. **Claude Code v2.1.216** 发布，修复长会话性能瓶颈与文件系统隔离问题，并新增 `sandbox.filesystem.disabled` 设置用于调试。[🔗](https://github.com/anthropics/claude-code/releases/tag/v2.1.216)

2. **OpenAI Codex v0.145.0-alpha.28** 发布，修复 Windows 沙盒原生支持与外部代理导入归属问题。[🔗](https://github.com/openai/codex/releases/tag/rust-v0.145.0-alpha.28)

3. **Gemini CLI v0.52.0-nightly.20260721.gacae7124b** 发布，修复认证回退、临时文件泄漏与工具权限控制等关键问题。[🔗](https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.20260720.gacae7124b...v0.52.0-nightly.20260721.gacae7124b)

4. **GitHub Copilot CLI v1.0.73** 发布，修复 `agentStop` hook 死循环与配置目录兼容性问题。[🔗](https://github.com/github/copilot-cli/releases/tag/v1.0.73)

5. **Kimi Code CLI v0.20.0-nightly.20260721.cda0e0348** 发布，修复 StrReplaceFile 链式编辑计数错误与会话恢复问题。[🔗](https://github.com/MoonshotAI/kimi-cli/compare/v0.20.0-nightly.20260720...v0.20.0-nightly.20260721.cda0e0348)

6. **OpenCode v1.18.4** 发布，为 Anthropic 兼容提供商上的 Kimi 模型添加自适应思考控制。[🔗](https://github.com/anomalyco/opencode/releases/tag/v1.18.4)

7. **Pi v0.9.1-rc** 社区冲刺进入尾声，多个 `release-blocker` Issue（如 CodeWhale 违反宪法、子代理隔离）被快速修复。[🔗](https://github.com/earendil-works/pi)

8. **llama.cpp b10075** 发布，为 Hexagon 后端新增 CLAMP 算子，并更新 macOS/iOS 二进制包。[🔗](https://github.com/ggml-org/llama.cpp/releases/tag/b10075)

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
*数据来源：anthropics/skills（截止2026-07-21）*

---

## 1. 热门 Skills 排行（按社区关注度）

| **排名** | **Skill** | **功能概述** | **社区热点讨论** | **状态** | **链接** |
|----------|-----------|--------------|------------------|----------|----------|
| 1 | **skill-creator 修复** | 修复 `run_eval.py` 零召回率问题，解决 Windows 流读取、触发检测和并行工作器问题 | 多个独立复现报告（#556），涉及评估系统核心逻辑 | OPEN | [#1298](https://github.com/anthropics/skills/pull/1298) |
| 2 | **document-typography** | 文档排版质量控制（孤行、寡行、编号对齐） | 用户反馈"几乎所有Claude生成文档都存在此问题"，但需求表达不强烈 | OPEN | [#514](https://github.com/anthropics/skills/pull/514) |
| 3 | **self-audit** | AI输出交付前的机械验证+四维推理质量门控 | 创新性强，覆盖项目全栈，社区关注度高 | OPEN | [#1367](https://github.com/anthropics/skills/pull/1367) |
| 4 | **ODT/ODS 处理** | OpenDocument格式创建、模板填充和HTML解析 | 补充现有Office技能缺口，满足开源格式需求 | OPEN | [#486](https://github.com/anthropics/skills/pull/486) |
| 5 | **color-expert** | 色彩专家技能（命名系统、色彩空间选择） | 专业性强，适用于设计、品牌等场景 | OPEN | [#1302](https://github.com/anthropics/skills/pull/1302) |
| 6 | **pyxel** | 复古游戏开发（像素艺术、8-bit游戏） | 丰富娱乐/创意技能生态，社区反响积极 | OPEN | [#525](https://github.com/anthropics/skills/pull/525) |
| 7 | **skill-quality-analyzer** | 元技能：评估其他技能的结构、文档、测试覆盖率等 | 社区期待"技能市场质量标准"，但实现复杂度高 | OPEN | [#83](https://github.com/anthropics/skills/pull/83) |
| 8 | **testing-patterns** | 测试哲学与实践（单元测试、React组件测试等） | 补充AI代码生成后的测试流程，需求明确 | OPEN | [#723](https://github.com/anthropics/skills/pull/723) |

---

## 2. 社区需求趋势（Issues洞察）

### 🔥 **高频需求方向**
1. **跨平台兼容性**
   - Windows下 `skill-creator` 脚本频繁崩溃（#1061、#1099、#1050）
   - 编码问题（cp1252 vs UTF-8）、子进程调用（`claude.cmd` vs `claude`）
   - *社区共识*: Windows用户占比高，需优先修复

2. **技能评估与优化**
   - `run_eval.py` 零召回率问题（#556、#1169、#1323）
   - 描述优化循环失效，用户无法验证技能效果
   - *社区共识*: 评估系统是技能生态的基础设施，亟需稳定

3. **安全与权限管理**
   - 社区技能冒充官方技能（#492，43条评论）
   - SharePoint等企业级文档权限控制需求（#1175）
   - *社区共识*: 需要技能签名、命名空间隔离等机制

4. **企业级协作**
   - 组织内技能分享（#228，14条评论）
   - 避免重复技能安装（#189，6条评论）
   - *社区共识*: 缺乏组织级管理能力

### 📊 **新兴技能类别**
- **AI治理与安全**：`agent-governance`（#412）
- **记忆压缩**：`compact-memory`（#1329）
- **推理质量门控**：`reasoning-quality-gate`（#1385）

---

## 3. 高潜力待合并 Skills

| **PR** | **潜力评分** | **合并阻力** | **建议动作** | **链接** |
|--------|-------------|--------------|--------------|----------|
| #1367 (self-audit) | ⭐⭐⭐⭐⭐ | 实现复杂度高 | 可分阶段合并（先机械验证） | [#1367](https://github.com/anthropics/skills/pull/1367) |
| #1298 (skill-creator修复) | ⭐⭐⭐⭐ | 修复涉及多个组件 | 优先级最高，阻塞其他PR | [#1298](https://github.com/anthropics/skills/pull/1298) |
| #525 (pyxel) | ⭐⭐⭐⭐ | 依赖外部MCP服务 | 补充娱乐/创意场景 | [#525](https://github.com/anthropics/skills/pull/525) |
| #514 (document-typography) | ⭐⭐⭐ | 用户教育成本高 | 可与现有文档技能集成 | [#514](https://github.com/anthropics/skills/pull/514) |

---

## 4. Skills 生态洞察

**当前社区最集中的诉求是：**
**"修复评估系统的基础设施缺陷，让技能开发从‘不可验证’走向‘可信赖’"** — 以 `skill-creator` 零召回率问题（#556）为代表的评估系统崩溃，已成为阻碍整个技能生态发展的最大瓶颈。

---

# **Claude Code 社区日报 | 2026-07-21**

---

## **📌 今日速览**
Claude Code 在今日发布了 **v2.1.216** 版本，修复了长会话性能瓶颈和文件系统隔离问题。社区热点集中在 **Windows 重启失败、macOS 数学公式渲染、编辑器 Tab/空格转换、VS Code 扩展面板状态同步** 等关键 Bug 上。此外，多个关于 **Fable 5 模型访问、远程控制、沙盒 VM 磁盘占用** 的问题引发开发者广泛讨论。

---

## **🚀 版本发布**
### **v2.1.216**
🔗 [发布说明](https://github.com/anthropics/claude-code/releases/tag/v2.1.216)
- **新增**：`sandbox.filesystem.disabled` 设置，允许跳过文件系统隔离但保留网络控制（用于调试）。
- **修复**：长会话中消息规范化成本随会话轮次呈二次增长的性能瓶颈，解决多秒延迟问题。
- **修复**：`au` 命令自动补全相关问题（截断内容）。

---

## **🔥 社区热点 Issues（Top 10）**

| Issue | 标题 | 重要性 | 👍 | 社区反应 |
|-------|------|--------|----|----------|
| **[#42776](https://github.com/anthropics/claude-code/issues/42776)** | Windows 重启失败（进程文件锁） | ⭐⭐⭐⭐⭐ | 46 | **高关注度**：Windows 用户普遍反映，严重影响工作流程。 |
| **[#65632](https://github.com/anthropics/claude-code/issues/65632)** | macOS 数学公式渲染退化（仅 `$$...$$` 生效） | ⭐⭐⭐⭐ | 49 | **回归 Bug**：影响 LaTeX 用户体验，已有 21 条讨论。 |
| **[#26996](https://github.com/anthropics/claude-code/issues/26996)** | Edit 工具将 Tab 转换为空格，导致匹配失败 | ⭐⭐⭐⭐ | 29 | **开发者痛点**：破坏代码格式化规范，影响自动化脚本。 |
| **[#28986](https://github.com/anthropics/claude-code/issues/28986)** | VS Code 扩展面板缺少模型/思考模式指示器 | ⭐⭐⭐ | 59 | **功能请求**：提升开发者对当前状态的可视化。 |
| **[#74051](https://github.com/anthropics/claude-code/issues/74051)** | Fable 5 模型因余额问题被阻塞（忽略周促） | ⭐⭐⭐⭐ | 2 | **计费 Bug**：影响付费用户体验，已有用户投诉。 |
| **[#77915](https://github.com/anthropics/claude-code/issues/77915)** | 远程控制断开失败（空指针异常） | ⭐⭐⭐ | 1 | **稳定性问题**：阻碍远程协作场景。 |
| **[#65577](https://github.com/anthropics/claude-code/issues/65577)** | macOS 沙盒 VM 磁盘无限增长（未清理） | ⭐⭐⭐⭐ | 4 | **资源泄漏**：可能导致磁盘空间耗尽。 |
| **[#79677](https://github.com/anthropics/claude-code/issues/79677)** | 桌面端显示固定“Medium”努力度（模型同步正常） | ⭐⭐⭐ | 0 | **UI Bug**：影响用户对会话状态的判断。 |
| **[#79662](https://github.com/anthropics/claude-code/issues/79662)** | `claude --resume` 在 Fable 5 会话中静默退出 | ⭐⭐⭐⭐ | 0 | **严重回归**：阻碍会话恢复流程。 |
| **[#79687](https://github.com/anthropics/claude-code/issues/79687)** | CLI 无法访问 Fable 5（桌面端正常） | ⭐⭐⭐⭐ | 0 | **平台差异 Bug**：影响 CLI 用户体验。 |

---

## **🛠️ 重要 PR 进展（Top 10）**

| PR | 功能/修复 | 影响 | 状态 |
|----|----------|------|------|
| **[#79647](https://github.com/anthropics/claude-code/pull/79647)** | 修复 Hookify 插件导入路径问题 | 🔧 插件开发 | Open |
| **[#79645](https://github.com/anthropics/claude-code/pull/79645)** | 修复 Hookify 文件编码问题（UTF-8） | 🔧 插件稳定性 | Open |
| **[#79644](https://github.com/anthropics/claude-code/pull/79644)** | 修复插件根目录路径引用（macOS 空格问题） | 🔧 插件兼容性 | Open |
| **[#79620](https://github.com/anthropics/claude-code/pull/79620)** | 新增 TTS 朗读钩子（无障碍功能） | ✨ 新功能 | Open |
| **[#79636](https://github.com/anthropics/claude-code/pull/79636)** | 修复 Hookify 规则文件命名前缀 | 🔧 插件规范 | Open |
| **[#79387](https://github.com/anthropics/claude-code/pull/79387)** | 修复 `edit-issue-labels.sh` 缺少错误提示 | 🔧 脚本稳定性 | Open |
| **[#74722](https://github.com/anthropics/claude-code/pull/74722)** | `/commit-push-pr` 支持 Conventional Branch 命名 | ✨ 新功能 | Open |
| **[#79635](https://github.com/anthropics/claude-code/pull/79635)** | 修复 PR 审查工具包文档链接 | 📚 文档 | Open |
| **[#79640](https://github.com/anthropics/claude-code/pull/79640)** | 修复 Ralph-Wiggum 命令隐藏逻辑 | 🔧 插件行为 | Open |
| **[#79642](https://github.com/anthropics/claude-code/pull/79642)** | 修复插件市场名称（`claude-code-plugins`） | 📚 文档 | Open |

---

## **📊 功能需求趋势**
从 Issues 反馈中提炼出以下 **社区最关注的功能方向**：
1. **IDE 集成优化**（VS Code 状态同步、扩展面板改进） → [#28986](https://github.com/anthropics/claude-code/issues/28986)
2. **性能与稳定性**（长会话优化、沙盒资源管理） → [#65577](https://github.com/anthropics/claude-code/issues/65577)
3. **模型支持与计费**（Fable 5 访问、余额管理） → [#74051](https://github.com/anthropics/claude-code/issues/74051)
4. **编辑器体验**（Tab/空格转换、数学公式渲染） → [#26996](https://github.com/anthropics/claude-code/issues/26996)
5. **远程协作**（远程控制、会话恢复） → [#77915](https://github.com/anthropics/claude-code/issues/77915)
6. **无障碍功能**（TTS、UI 可访问性） → [#79620](https://github.com/anthropics/claude-code/pull/79620)
7. **插件生态**（Hookify、PR 审查工具） → [#79647](https://github.com/anthropics/claude-code/pull/79647)

---

## **💡 开发者关注点**
### **高频痛点**
1. **平台差异 Bug**：Windows 重启失败、macOS 文件系统隔离问题频发，影响跨平台开发体验。
2. **回归 Bug**：数学公式渲染、会话恢复等核心功能出现回退，用户信任度下降。
3. **计费与模型访问**：Fable 5 在 CLI 中无法正常使用，与桌面端体验不一致。
4. **插件开发复杂度**：Hookify 插件的编码问题（路径、编码、命名）阻碍第三方开发。
5. **资源管理**：沙盒 VM 磁盘无限增长、长会话性能瓶颈等问题亟需优化。

### **期待改进**
- **更好的状态同步**：VS Code 扩展面板应实时反映模型/努力度状态（[#28986](https://github.com/anthropics/claude-code/issues/28986)）。
- **简化调试流程**：允许跳过文件系统隔离但保留网络控制（[v2.1.216](https://github.com/anthropics/claude-code/releases/tag/v2.1.216) 已部分支持）。
- **增强无障碍功能**：TTS 朗读、UI 可访问性改进（[#79620](https://github.com/anthropics/claude-code/pull/79620)）。

---
**📌 免责声明**：本日报基于 GitHub 公开数据生成，仅供技术交流使用。如需引用，请注明来源。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 | 2026-07-21

---

---

## 🔥 **今日速览**
- **Windows 端性能问题集中爆发**：多个高优先级 Issue 报告 Windows 桌面版在 WMI、进程清理、CPU 占用等方面存在严重回归（[#34260](https://github.com/openai/codex/issues/34260)、[#33875](https://github.com/openai/codex/issues/33875)），社区呼吁紧急修复。
- **Rust 版本频繁迭代**：24 小时内发布 3 个 alpha 版本（`0.145.0-alpha.25/27/28`），侧面反映团队正在快速推进底层优化。
- **CLI/桌面端功能需求激增**：用户强烈要求添加 **自动重试机制**（[#32020](https://github.com/openai/codex/issues/32020)）、**会话重启命令**（[#33370](https://github.com/openai/codex/issues/33370)）和 **Vim 键位绑定**（[#33296](https://github.com/openai/codex/issues/33296)）。

---

---

## 📦 **版本发布**
### Rust 版本迭代
- **`0.145.0-alpha.28`** | [Release Notes](https://github.com/openai/codex/releases/tag/rust-v0.145.0-alpha.28)
  - 修复 alpha.27 中的临界路径问题，优化内存管理。
- **`0.145.0-alpha.27`** | [Release Notes](https://github.com/openai/codex/releases/tag/rust-v0.145.0-alpha.27)
  - 新增对 Windows 沙盒的原生支持（对应 [PR #34423](https://github.com/openai/codex/pull/34423)）。
- **`0.145.0-alpha.25`** | [Release Notes](https://github.com/openai/codex/releases/tag/rust-v0.145.0-alpha.25)
  - 修复外部代理导入的归属问题（对应 [PR #34451](https://github.com/openai/codex/pull/34451)）。

---

---

## 🚨 **社区热点 Issues**
| **Issue** | **类型** | **热度** | **核心问题** | **社区反应** |
|-----------|----------|----------|--------------|--------------|
| [#28969](https://github.com/openai/codex/issues/28969) | 🐛 CLI/Config | 🔥 **146👍 / 48评论** | 要求添加 **禁用 60 秒自动解决问题** 的配置项 | 用户反馈 CLI 强制等待干扰工作流，迫切需要可配置选项 |
| [#33873](https://github.com/openai/codex/issues/33873) | 🐛 Windows/性能 | ⚠️ **6👍 / 20评论** | **Windows 桌面版频繁无响应** | 多用户确认，怀疑与 WMI 相关 |
| [#34260](https://github.com/openai/codex/issues/34260) | 🐛 Windows/工具调用 | ⚠️ **5👍 / 11评论** | `taskkill.exe` 进程清理风暴耗尽 WMI 资源 | 严重影响系统稳定性，需紧急修复 |
| [#34474](https://github.com/openai/codex/issues/34474) | 🐛 Windows/浏览器 | 🆕 **0👍 / 2评论** | **Playwright 会话未正确清理**，累积数 GB Chrome 进程 | 新发现的内存泄漏问题 |
| [#28055](https://github.com/openai/codex/issues/28055) | ✨ UX | **12👍 / 12评论** | **"邀请朋友"按钮易误触** | 用户体验痛点，设计需优化 |
| [#32803](https://github.com/openai/codex/issues/32803) | 🐛 Windows/上下文 | **5👍 / 5评论** | **有效上下文窗口缩小至 250K** | GPT-5.6 SOL 模型受影响 |
| [#34096](https://github.com/openai/codex/issues/34096) | 🐛 Linux/扩展 | **0👍 / 4评论** | **VS Code 扩展 0.145.x 陷入加载循环** | 回归问题，0.144.6 版本正常 |
| [#27597](https://github.com/openai/codex/issues/27597) | 🐛 扩展/远程 | **3👍 / 12评论** | **VS Code Remote-SSH 中扩展加载失败** | CLI 正常，但扩展兼容性差 |
| [#19143](https://github.com/openai/codex/issues/19143) | ✨ TUI | **5👍 / 9评论** | **支持直接粘贴图片到 CLI** | 前端调试等场景强需求 |
| [#32139](https://github.com/openai/codex/issues/32139) | ✨ CLI | **6👍 / 3评论** | **自动接受"继续等待"，无需手动确认** | 提升工作流效率 |

---

---

## 🔧 **重要 PR 进展**
| **PR** | **状态** | **核心变更** | **影响** |
|--------|----------|--------------|----------|
| [#34476](https://github.com/openai/codex/pull/34476) | ✅ 已合并 | **分离 HTTP 执行与请求日志** | 优化网络请求性能，减少日志开销 |
| [#34469](https://github.com/openai/codex/pull/34469) | ✅ 已合并 | **保留目标优先/分支线程的设置** | 修复线程恢复时配置丢失问题 |
| [#34463](https://github.com/openai/codex/pull/34463) | ✅ 已合并 | **支持 Alpha 热修复版本** | 统一 Python/Rust/npm 版本管理 |
| [#34451](https://github.com/openai/codex/pull/34451) | ✅ 已合并 | **为外部代理导入添加提供商归属** | 改进代理管理与分析 |
| [#34449](https://github.com/openai/codex/pull/34449) | ✅ 已合并 | **外部会话检测限制可配置** | 提升灵活性，默认 30 天/100 个会话 |
| [#34447](https://github.com/openai/codex/pull/34447) | ✅ 已合并 | **添加路由感知 HTTP 客户端池** | 优化代理路由选择，减少重复解析 |
| [#34441](https://github.com/openai/codex/pull/34441) | ✅ 已合并 | **添加缓冲代码模式 exec 产出** | 实验性功能：默认 `yield_time_ms` 从 10s 提升至 30s |
| [#34436](https://github.com/openai/codex/pull/34436) | ✅ 已合并 | **在网络代理解析中尊重托管权限配置** | 修复权限配置文件被忽略的问题 |
| [#34435](https://github.com/openai/codex/pull/34435) | ✅ 已合并 | **显式解析出站代理路由** | 避免系统代理发现阻塞，提升稳定性 |
| [#34398](https://github.com/openai/codex/pull/34398) | ✅ 已合并 | **支持每环境权限配置文件** | 细粒度权限控制，覆盖 shell/exec/文件系统等 |

---

---

## 📈 **功能需求趋势**
1. **性能优化（高优先级）**
   - Windows 端 **WMI/CPU/内存泄漏** 问题频发（[#34260](https://github.com/openai/codex/issues/34260)、[#33875](https://github.com/openai/codex/issues/33875)），社区呼吁紧急修复。
   - **自动重试机制**（[#32020](https://github.com/openai/codex/issues/32020)）：模型容量不足时自动切换或重试。

2. **CLI/桌面端功能增强**
   - **会话管理**：添加 `/restart` 命令（[#33370](https://github.com/openai/codex/issues/33370)）、自动接受等待（[#32139](https://github.com/openai/codex/issues/32139)）。
   - **多模态支持**：直接粘贴图片到 CLI（[#19143](https://github.com/openai/codex/issues/19143)）。
   - **Vim 兼容性**：完善 Vim 键位绑定（[#33296](https://github.com/openai/codex/issues/33296)）。

3. **IDE 集成稳定性**
   - VS Code 扩展在 **Remote-SSH**（[#27597](https://github.com/openai/codex/issues/27597)）和 **Linux Webview**（[#34096](https://github.com/openai/codex/issues/34096)）中的兼容性问题。

4. **上下文与模型管理**
   - **上下文窗口异常**（[#32803](https://github.com/openai/codex/issues/32803)）：GPT-5.6 SOL 模型有效上下文缩小。
   - **模型缓存问题**（[#33146](https://github.com/openai/codex/issues/33146)）：`models_cache.json` 过期导致 GPT-5.6 不可见。

5. **安全与权限**
   - **Windows 沙盒权限**（[#24873](https://github.com/openai/codex/issues/24873)）：WSL 环境中 `bwrap` 缺失导致崩溃。
   - **本地主机安全验证**（[#34470](https://github.com/openai/codex/issues/34470)）：反复阻止授权的 localhost 访问。

---

---
## 🎯 **开发者关注点**
### 🔴 **痛点**
1. **Windows 平台稳定性**
   - WMI 相关问题（`WmiPrvSE.exe` CPU 占用 100%）、进程清理风暴、内存泄漏（Chrome/Playwright）频发，严重影响生产环境使用。
   - **建议**：优先修复 [#34260](https://github.com/openai/codex/issues/34260) 和 [#34474](https://github.com/openai/codex/issues/34474)。

2. **扩展兼容性**
   - VS Code 扩展在 **远程开发**（Remote-SSH、WSL）和 **Linux** 环境中频繁崩溃或加载失败。
   - **建议**：加强对远程场景的测试覆盖。

3. **配置灵活性**
   - 用户强烈要求 **禁用自动解决**（[#28969](https://github.com/openai/codex/issues/28969)）、**自动重试**（[#32020](https://github.com/openai/codex/issues/32020)）等可配置选项。

### 🟢 **高频需求**
1. **多模态支持**
   - 图片粘贴（[#19143](https://github.com/openai/codex/issues/19143)）、浏览器控制（[#30841](https://github.com/openai/codex/issues/30841)）等功能需求激增。

2. **代理与网络**
   - 代理路由解析（[#34447](https://github.com/openai/codex/pull/34447)）、PAC 支持、系统代理发现优化。

3. **权限管理**
   - 细粒度权限配置（[#34398](https://github.com/openai/codex/pull/34398)）、外部代理归属（[#34451](https://github.com/openai/codex/pull/34451)）。

---
---
**数据来源**: [GitHub - openai/codex](https://github.com/openai/codex) | **生成时间**: 2026-07-21
**编辑说明**: 本日报基于过去 24 小时的 GitHub 活动生成，重点关注高热度 Issue 和关键 PR。如需深入讨论，请访问对应链接。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# **Gemini CLI 社区动态日报**
**日期：2026-07-21 | 来源：GitHub [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)**

---

## **📌 今日速览**
Gemini CLI 发布 **v0.52.0-nightly.20260721.gacae7124b** 版本，修复多项关键问题（如认证回退、临时文件泄漏、工具权限控制等）。社区热议 **子代理（Subagent）稳定性** 和 **内存系统优化**，多个 P1 级 Bug 仍在积极修复中。安全团队加强了 **A2A 服务器的工作区信任检查**，防止 RCE 漏洞。

---

## **📦 版本发布**
### **v0.52.0-nightly.20260721.gacae7124b**
- **发布时间**：2026-07-21
- **变更日志**：[点击查看](https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.20260720.gacae7124b...v0.52.0-nightly.20260721.gacae7124b)
- **重点修复**：
  - 修复认证回退机制（解决 `FatalAuthenticationError`）
  - 移除 Shell 工具中的同步 I/O 操作（提升终端 UI 流畅度）
  - 修复临时目录泄漏问题（后台 Shell 执行后清理）
  - 强化工具权限控制（避免 MCP 工具被误禁用）

---

## **🔥 社区热点 Issues（Top 10）**
| **Issue** | **优先级** | **标签** | **社区关注度** | **摘要** | **链接** |
|-----------|------------|----------|----------------|----------|----------|
| **#22323** | P1 | `agent`, `bug` | 🔥 **12评论** | 子代理 `codebase_investigator` 在达到最大轮次后仍报告 `GOAL` 成功，隐藏中断问题。影响代码分析流程。 | [链接](https://github.com/google-gemini/gemini-cli/issues/22323) |
| **#24353** | P1 | `agent`, `eval_infra` | 🔥 **7评论** | 需求组件级评测（EPIC），现有 76 个行为评测用例，支持 6 个 Gemini 模型。 | [链接](https://github.com/google-gemini/gemini-cli/issues/24353) |
| **#21409** | P1 | `agent`, `bug` | 🔥 **7评论** | 通用代理（Generalist Agent）在调用子代理后无限挂起，简单操作（如创建文件夹）也会卡住。 | [链接](https://github.com/google-gemini/gemini-cli/issues/21409) |
| **#25166** | P1 | `core`, `bug` | 🔥 **4评论** | Shell 命令执行后挂起，显示“等待用户输入”但实际已完成。影响 CLI 交互体验。 | [链接](https://github.com/google-gemini/gemini-cli/issues/25166) |
| **#21983** | P1 | `agent`, `browser` | 🔥 **4评论** | Browser 子代理在 Wayland 环境下失败。影响 Linux 用户体验。 | [链接](https://github.com/google-gemini/gemini-cli/issues/21983) |
| **#26522** | P2 | `agent`, `bug` | 🔥 **5评论** | Auto Memory 重试低信号会话时无限循环，导致资源浪费。 | [链接](https://github.com/google-gemini/gemini-cli/issues/26522) |
| **#22745** | P2 | `agent`, `feature` | 🔥 **7评论** | 探索 AST 感知的文件读取/搜索工具，提升代码导航精度。 | [链接](https://github.com/google-gemini/gemini-cli/issues/22745) |
| **#26525** | P2 | `security`, `bug` | 🔥 **3评论** | Auto Memory 的日志记录过多，且未在上下文中进行确定性重daction。存在泄露风险。 | [链接](https://github.com/google-gemini/gemini-cli/issues/26525) |
| **#22267** | P2 | `agent`, `bug` | 🔥 **3评论** | Browser Agent 忽略 `settings.json` 中的配置覆盖（如 `maxTurns`）。 | [链接](https://github.com/google-gemini/gemini-cli/issues/22267) |
| **#28473** | P2 | `security`, `bug` | 🔥 **1评论** | OAuth 登录报错（`IneligibleTierError`），提示迁移至 Antigravity。影响免费用户。 | [链接](https://github.com/google-gemini/gemini-cli/issues/28473) |

---

## **🛠️ 重要 PR 进展（Top 10）**
| **PR** | **优先级** | **标签** | **状态** | **功能/修复** | **链接** |
|--------|------------|----------|----------|----------------|----------|
| **#28472** | P1 | `core`, `auth` | ⏳ **进行中** | 修复认证回退机制，验证缓存凭证后恢复 `GOOGLE_APPLICATION_CREDENTIALS` 环境变量。 | [链接](https://github.com/google-gemini/gemini-cli/pull/28472) |
| **#28470** | P1 | `a2a-server`, `security` | ⏳ **进行中** | 强化 A2A 服务器的工作区信任检查，防止零点击 RCE 漏洞。 | [链接](https://github.com/google-gemini/gemini-cli/pull/28470) |
| **#28397** | P2 | `core`, `performance` | ⏳ **进行中** | 移除 Shell 工具中的同步 I/O 操作，提升终端 UI 响应速度。 | [链接](https://github.com/google-gemini/gemini-cli/pull/28397) |
| **#28394** | P2 | `core`, `bug` | ⏳ **进行中** | 修复后台 Shell 执行后临时目录泄漏问题。 | [链接](https://github.com/google-gemini/gemini-cli/pull/28394) |
| **#28388** | P1 | `agent`, `security` | ⏳ **进行中** | 修复工具权限规则，避免通配符 `DENY` 规则误禁用 MCP 工具。 | [链接](https://github.com/google-gemini/gemini-cli/pull/28388) |
| **#28389** | P1 | `agent`, `stability` | ⏳ **进行中** | 为事件驱动代理添加真实时间预算，防止无限循环状态转换。 | [链接](https://github.com/google-gemini/gemini-cli/pull/28389) |
| **#28469** | - | `core`, `bug` | ⏳ **进行中** | 模型回退时旋转会话 ID，避免 API 状态错误。 | [链接](https://github.com/google-gemini/gemini-cli/pull/28469) |
| **#28386** | P2 | `vscode`, `bug` | ⏳ **进行中** | 修复 VS Code 扩展的激活资源跟踪问题。 | [链接](https://github.com/google-gemini/gemini-cli/pull/28386) |
| **#28387** | P2 | `core`, `bug` | ⏳ **进行中** | 修复 `customDeepMerge` 循环引用导致的崩溃。 | [链接](https://github.com/google-gemini/gemini-cli/pull/28387) |
| **#28471** | - | `release` | ✅ **已合并** | 自动版本 bump（v0.52.0-nightly.20260721）。 | [链接](https://github.com/google-gemini/gemini-cli/pull/28471) |

---

## **📊 功能需求趋势**
基于近期 Issues 和 PR，社区最关注的功能方向包括：

1. **子代理（Subagent）稳定性**
   - 修复子代理挂起、权限控制、配置覆盖等问题（如 #22323、#21409、#22267）。
   - 期望提升子代理的自动化使用率（如 #21968）。

2. **内存系统（Auto Memory）优化**
   - 解决低信号会话重试、重daction 不确定性、日志泄露等问题（如 #26522、#26525）。

3. **安全性增强**
   - A2A 服务器的工作区信任检查（#28470）、OAuth 登录修复（#28473）、工具权限控制（#28388）。

4. **性能与稳定性**
   - 移除同步 I/O（#28397）、终端 UI 响应优化（#21924）、临时文件清理（#28394）。

5. **AST 感知工具**
   - 探索 AST 感知的文件读取/搜索（#22745、#22746），提升代码导航精度。

6. **IDE 集成**
   - VS Code 扩展的稳定性修复（#28386）。

---

## **💡 开发者关注点**
1. **子代理可靠性**
   - 开发者反馈子代理经常挂起或未按预期使用（如 #21409、#21968），建议加强自动化和错误处理。

2. **认证与权限**
   - OAuth 登录问题（#28473）和工具权限控制（#28388）影响用户体验，需优先修复。

3. **资源管理**
   - 临时文件泄漏（#28394）和内存系统低信号会话（#26522）导致系统资源浪费。

4. **跨平台兼容性**
   - Wayland 环境下的 Browser 代理失败（#21983）和终端 UI 缩放问题（#21924）需要更多测试覆盖。

5. **安全合规**
   - A2A 服务器的 RCE 防护（#28470）和重daction 机制（#26525）需符合企业级安全标准。

---
**📌 总结**：Gemini CLI 正在快速迭代，但子代理稳定性、安全性和性能仍是社区关注的焦点。开发者期望更可靠的自动化工具和更完善的错误处理机制。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



# GitHub Copilot CLI 社区动态日报

**报告日期**：2026-07-21  
**数据来源**：github.com/github/copilot-cli

---

## 1. 今日速览

今日 GitHub Copilot CLI 社区活跃度较高，共新增/更新 20 条 Issues。**版本层面**，v1.0.72 和 v1.0.73 于同日发布，重点改进了 `agentStop` hook 的死循环防护及子代理目录配置稳定性。**问题层面**，安全与权限类问题突出（涉及 code-review agents 变异工作树、沙箱会话 plan.md 写入），同时 Windows 剪贴板和终端渲染问题持续影响用户体验。整体来看，社区对 **MCP 集成稳定性、后台 Agent 生命周期管理、以及多模型快速切换** 的需求较为迫切。

---

## 2. 版本发布

| 版本号 | 发布日期 | 关键更新 |
|--------|----------|----------|
| **v1.0.73** | 2026-07-20 | 修复了配置额外目录时 Anthropic 子代理继续工作的兼容性问题；改进了自定义 agent 指令中相对链接的解析逻辑（基于 agent 文件位置解析） |
| **v1.0.72** | 2026-07-20 | 修复 `agentStop` hook 死循环问题：连续 8 次阻止后将强制结束 turn；hook 新增 `stop_hook_active` 标志，便于检测强制继续状态并自我限流；新增可选的 git/gh 身份验证内嵌支持 |

> 📎 相关链接：https://github.com/github/copilot-cli/releases

---

## 3. 社区热点 Issues（Top 10）

### 🔴 高优先级

| # | Issue | 重要性说明 | 社区反应 |
|---|-------|------------|----------|
| **#4195** | **[area:permissions, area:agents] code-review task agents 可变异共享父工作树** | ⚠️ **安全漏洞**：code-review 类型 agents 被描述为只读，但实际可修改共享父工作树，对多人审查场景构成风险 | 新增 Issue，0 赞，需紧急关注 |
| **#4193** | **[area:permissions, area:sessions] 沙箱会话写入 plan.md 需要独立权限控制** | 安全隔离需求：沙箱环境需写入自身 session 的 plan.md，但当前会请求对其他 session 的访问权限 | 新增 Issue，0 赞 |
| **#3622** | **[area:platform-windows, area:terminal-rendering] Windows 剪贴板复制静默失败** | 长期未解决：复制操作显示成功但剪贴板未更新，v1.0.48 后回归 | 4 赞，4 评论 |
| **#3747** | **[area:networking, area:models] 'WAITFOR DELAY' 文本导致不可恢复超时** | 严重稳定性问题：任何包含该 MSSQL 关键字的输入/文件都会触发超时 "Poison pill" | 1 赞，1 评论 |
| **#4196** | **[area:models] BYOK completions API 因 reasoning_content 流式 delta 失败** | API 兼容性问题：使用 reasoning_content 的 BYOK 提供商会导致 5 次重试后失败 | 新增 Issue，0 赞 |
| **#2595** | **[area:agents] 后台 Agent 完成保留问题** | Agent 注册表快速清理已完成的后台 agents，导致 `read_agent` 返回 "Agent not found" | 0 赞，2 评论 |
| **#3125** | **[area:mcp] MCP tools/list_changed 通知后工具列表更新延迟** | MCP 服务器发送工具列表变更通知后，模型需等待下一轮才能看到更新 | 0 赞，1 评论 |

### 🟡 功能增强

| # | Issue | 重要性说明 | 社区反应 |
|---|-------|------------|----------|
| **#1688** | **[area:context-memory, area:configuration] 添加可配置自动压缩阈值** | 高价值需求：针对 Claude Opus 4.6 等大容量模型，CLI 内置压缩触发过早，需自定义阈值 | 5 赞，2 评论 |
| **#4190** | **[area:models, area:configuration] 快速切换预设模型配置** | 提升效率：当前切换模型需通过 `/model` 命令交互，希望支持快捷切换预设 | 新增 Issue，0 赞 |
| **#4192** | **[area:desktop] 桌面应用选择 BYOK/配置模型用于后台 agents** | 桌面端功能缺失：后台 agents 使用自动选择模型，用户无法自定义 | 新增 Issue，0 赞 |

> 📎 所有 Issues 列表：https://github.com/github/copilot-cli/issues

---

## 4. 重要 PR 进展

**过去 24 小时内无更新的 Pull Requests。**

近期 PR 活动主要体现在上述 v1.0.72/v1.0.73 的版本发布中，建议关注后续 release notes 获取更多修复详情。

> 📎 所有 PR 列表：https://github.com/github/copilot-cli/pulls

---

## 5. 功能需求趋势

从本期 20 条 Issues 中提炼出以下社区关注方向：

### 🏆 核心功能需求

| 方向 | 相关 Issue | 热度评估 |
|------|------------|----------|
| **模型配置与切换** | #4190, #4192, #4196 | ⭐⭐⭐⭐ 高 |
| **安全与权限隔离** | #4193, #4195, #4188 | ⭐⭐⭐⭐ 高 |
| **终端与剪贴板兼容** | #3622, #4191 | ⭐⭐⭐ 中 |
| **后台 Agent 生命周期管理** | #2595, #4199 | ⭐⭐⭐ 中 |
| **MCP 集成增强** | #3125 | ⭐⭐ 中 |

### 🔧 配置与个性化

| 方向 | 相关 Issue | 热度评估 |
|------|------------|----------|
| **自定义指令加载** | #2181 | ⭐⭐ 中 |
| **上下文压缩阈值** | #1688 | ⭐⭐ 中 |

### 🐛 稳定性问题

| 方向 | 相关 Issue | 热度评估 |
|------|------------|----------|
| **超时与网络异常** | #3747, #4200 | ⭐⭐⭐ 高 |
| **会话管理** | #4199 | ⭐⭐ 中 |
| **安装/二进制兼容性** | #2812, #4199 | ⭐⭐ 中 |

---

## 6. 开发者关注点

### 🔥 核心痛点

1. **安全隔离不足**
   - code-review agents 可突破只读限制修改工作树
   - 沙箱会话的 plan.md 权限控制过于宽泛
   - plan-mode 回归导致 shell 命令被意外拦截

2. **跨平台兼容性**
   - Windows 剪贴板功能自 v1.0.48 后持续故障
   - WSL2 + tmux/screen 环境下剪贴板失效
   - macOS ARM64 特定版本仍存在 SIGSEGV 问题

3. **API 与模型集成**
   - 'WAITFOR DELAY' 文本触发不可恢复超时
   - BYOK 提供商的 reasoning_content 流式处理失败
   - MCP 工具动态更新通知机制不完整

### 📈 高频需求

| 需求 | 说明 | 代表 Issue |
|------|------|------------|
| **快速模型切换** | 希望支持预设配置一键切换，避免逐层选择 | #4190 |
| **后台 Agent 持久化** | 完成后的 Agent 应保留可读状态，而非立即清理 | #2595 |
| **可配置上下文管理** | 支持自定义压缩阈值适配不同模型 | #1688 |
| **桌面端模型控制** | 桌面应用后台 agents 应支持自定义模型 | #4192 |

---

## 📌 行动建议

1. **立即关注**：#4195（安全漏洞）、#4193（权限隔离）
2. **优先修复**：#3622（Windows 剪贴板）、#3747（超时问题）
3. **功能规划**：#4190（模型快速切换）、#1688（上下文压缩配置）

---

*本报告由 AI 技术分析师生成，基于 2026-07-21 GitHub Copilot CLI 社区公开数据*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>



# Kimi Code CLI 社区动态日报

**日期**: 2026-07-21  
**数据来源**: github.com/MoonshotAI/kimi-cli

---

## 1. 今日速览

今日社区共产生 **5 个新 Issues** 和 **3 个 Pull Requests**。核心问题集中在 K2.5/K2.7 模型工具调用功能失效、Goal 模式下的无限循环缺陷，以及 StrReplaceFile 工具的替换计数逻辑错误。值得肯定的是，贡献者 Nas01010101 和 Sreekant13 分别针对这些痛点提交了修复 PR，社区正积极响应。

---

## 2. 版本发布

> 过去 24 小时内无新版本发布。

---

## 3. 社区热点 Issues

### 🔴 高优先级

**#2209** — 云端服务器部署 kimi-cli 无回复，CLI 持续 429 engine_overloaded 超过 48 小时  
👥 3 👍 | 💬 4 条评论  
[🔗 查看详情](https://github.com/MoonshotAI/kimi-cli/issues/2209)

> **重要性**: 影响大规模生产环境用户，引擎过载问题已持续 48+ 小时无响应，严重阻塞业务。社区反馈该问题在 v1.41.0 和 v1.24.0 均存在，kimi-k2.6、k2.5 模型均受影响。
> **状态**: 需官方尽快介入排查后端限流机制。

---

**#2527** — k2.5 模型 tool calling 完全失效 + goal mode 无限循环（必现）  
👥 0 👍 | 💬 0 条评论  
[🔗 查看详情](https://github.com/MoonshotAI/kimi-cli/issues/2527)

> **重要性**: 核心功能阻断性 bug。K2.5 模型所有格式的 tool call 均返回 "Tool not found"，且 Goal 模式陷入死循环。这是今日新报告的必现问题，影响所有使用 K2.5 的开发者。
> **状态**: 需优先修复，建议回滚或 hotfix。

---

**#2525** — Goal mode: no-op 持续触发导致 token 消耗和上下文膨胀  
👥 0 👍 | 💬 0 条评论  
[🔗 查看详情](https://github.com/MoonshotAI/kimi-cli/issues/2525)

> **重要性**: 资源浪费型 bug。外部条件等待时（如 GPU 训练任务），Goal 模式持续每几秒重新注入完整上下文，导致大量无意义 token 消耗和上下文膨胀。
> **状态**: 影响成本控制，需尽快修复。

---

**#2526** — StrReplaceFile 对链式编辑的替换计数错误  
👥 0 👍 | 💬 0 条评论  
[🔗 查看详情](https://github.com/MoonshotAI/kimi-cli/issues/2526)

> **重要性**: 工具逻辑缺陷。StrReplaceFile 对链式编辑时，计数基于原始文件而非运行中内容，导致依赖先前编辑结果的替换无法被正确识别和计数。
> **状态**: 已有关联 PR #2524 修复中。

---

### 🟡 中优先级

**#2474** — kimi code cli 界面持续抖动，莫名重新渲染整个对话  
👥 2 👍 | 💬 1 条评论  
[🔗 查看详情](https://github.com/MoonshotAI/kimi-cli/issues/2474)

> **重要性**: 用户体验问题。界面不断抖动导致使用体验极差，在 K2.7 代码思考模式下尤其严重。虽非阻断性 bug，但影响日常使用舒适度。
> **状态**: 社区已开始讨论，疑似渲染逻辑问题。

---

## 4. 重要 PR 进展

### ✅ 已提交修复

**#2524** — fix(tools): count StrReplaceFile replacements against the running content  
👤 Sreekant13 | 📅 2026-07-20  
[🔗 查看详情](https://github.com/MoonshotAI/kimi-cli/pull/2524)

> **修复内容**: 解决 Issue #2526，StrReplaceFile 工具的替换计数从基于原始文件内容改为基于运行中（逐步编辑后的）内容，使链式编辑能正确计数。
> **评审建议**: 优先合并，该修复简单直接，可立即改善工具可靠性。

---

**#2520** — fix(session): align fork/undo context truncation to wire turns  
👤 Nas01010101 | 📅 2026-07-19  
[🔗 查看详情](https://github.com/MoonshotAI/kimi-cli/pull/2520)

> **修复内容**: 解决 Issue #2517、#1974 及 #1974（撤销边界问题）、#2049（分叉/撤销后历史不匹配）。将 wire turns 与 context turns 对齐，确保分叉和撤销时上下文截断正确。
> **评审建议**: 关联 Issue 多、影响面广，建议详细测试后合并。Sreekant13 还贡献了回归测试用例。

---

**#2519** — fix(app): refresh stale frozen system prompt on session resume  
👤 Nas01010101 | 📅 2026-07-19  
[🔗 查看详情](https://github.com/MoonshotAI/kimi-cli/pull/2519)

> **修复内容**: 解决 Issue #2420。会话恢复时不再无条件采用 `context.jsonl` 中冻结的 `_system_prompt`，使 `~/.kimi/skills/` 中的新增 skills 和 `AGENTS.md` 修改能够在恢复的会话中生效。
> **评审建议**: 重要体验改进，建议合并。

---

## 5. 功能需求趋势

基于今日社区数据分析，主要功能方向如下：

| 方向 | 描述 | 相关 Issues |
|------|------|-------------|
| **模型适配** | K2.5/K2.7 模型工具调用兼容性问题突出 | #2209, #2527 |
| ** Goal 模式稳定性** | 无限循环、no-op 持续触发问题高发 | #2525, #2527 |
| **代码编辑工具可靠性** | StrReplaceFile 链式编辑逻辑需改进 | #2526 |
| **会话管理健壮性** | fork/undo/恢复机制存在边界问题 | #2520, #2519 |
| **服务端稳定性** | 429 限流机制需优化 | #2209 |

---

## 6. 开发者关注点

### 核心痛点

1. **生产环境可用性**: 云端部署持续 429 限流问题已超 48 小时无解，严重影响生产用户信心。
2. **新模型兼容**: K2.5/K2.7 模型的 tool calling 功能完全失效，表明模型切换带来的 breaking change 未被充分测试。
3. ** Goal 模式稳定性**: 无限循环问题消耗资源且无法优雅退出，需引入超时或退出机制。

### 高频需求

- **上下文管理优化**: 分叉、撤销、会话恢复时的上下文一致性
- **工具执行可靠性**: 链式编辑、多种 tool call 格式的兼容性
- **用户体验流畅度**: UI 抖动、渲染逻辑问题

### 建议行动

| 优先级 | 行动项 |
|--------|--------|
| P0 | 修复 K2.5 tool calling 失效问题（#2527） |
| P0 | 调查云端 429 持续超载根因（#2209） |
| P1 | 合并 StrReplaceFile 修复（#2524） |
| P1 | 合并 fork/undo 修复（#2520） |
| P2 | 优化 Goal 模式 no-op 逻辑（#2525） |

---

*本报告由 AI 自动生成，数据截至 2026-07-21 23:59:59 UTC。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>



# OpenCode 社区动态日报

**日期：** 2026-07-21  
**数据来源：** github.com/anomalyco/opencode

---

## 1. 今日速览

今日 OpenCode 社区保持高度活跃，发布了 **v1.18.4** 版本，重点改进了 Kimi 模型在 Anthropic 兼容提供商上的自适应思考控制。社区层面，多个 UI/UX 问题引发热议，尤其是遗留布局选项的保留请求获得 25 赞，成为今日最热门 Issue。同时，代码模式（CodeMode）相关的 PR 持续高产，显示出该功能正在快速成熟。

---

## 2. 版本发布

### v1.18.4 Core 更新

| 类型 | 内容 |
|------|------|
| **改进** | 为 Anthropic 兼容提供商上的 Kimi 模型使用自适应思考控制，默认输出摘要推理 |
| **Bugfix** | 减少慢速连接建立时的 OpenAI 提供商请求头超时 |
| **Bugfix** | 尊重 provider 定义的推理选项 |

> 📎 Release 链接：https://github.com/anomalyco/opencode/releases/tag/v1.18.4

---

## 3. 社区热点 Issues

### 🥇 Issue #37012 | keep legacy layout option
**作者：** darkine24th | 评论：20 | 👍：25

用户强烈呼吁保留旧版布局，理由包括：
1. 旧版布局可从主窗口快速访问大部分功能，新版需多次导航
2. 旧版支持更好的工作区管理

这是今日评论数最多的 Issue，反映了界面改版对部分用户的负面影响。

> 🔗 https://github.com/anomalyco/opencode/issues/37012

---

### 🥈 Issue #19130 | Windows ARM64 native: OpenTUI fails to initialize
**作者：** Carliquiss | 评论：11 | 👍：8

在 Windows 11 ARM64 设备上，OpenCode CLI 的非交互命令正常工作，但 TUI 初始化失败，错误涉及 `bun:ffi dlopen TinyCC`。这是一个影响特定硬件平台的关键兼容性问题。

> 🔗 https://github.com/anomalyco/opencode/issues/19130

---

### 🥉 Issue #13710 | Desktop Session Name is no longer written with AI
**作者：** deadcoder0904 | 评论：10 | 👍：2

部分会话名称变为机械的 `New session - 2026-02-15T09:48:58.885Z` 格式，而非 AI 生成的有意义名称。该问题间歇性出现，影响用户对会话的管理体验。

> 🔗 https://github.com/anomalyco/opencode/issues/13710

---

### ⚠️ Issue #34910 | Provider rate limit exceeded
**作者：** a602595012 | 评论：9 | 👍：6

用户报告频繁收到 "Error from provider (Console Go): Provider rate limit exceeded" 错误，已持续一下午。用户建议增加捏合缩放和触控板手势支持。

> 🔗 https://github.com/anomalyco/opencode/issues/34910

---

### 🐛 Issue #38028 | Zen free models failing (hy3-free, nemotron-3-ultra-free)
**作者：** UCASRMTG5D | 评论：6 | 👍：0

OpenCode Zen 的六个免费模型中，有两个（`hy3-free` 和 `nemotron-3-ultra-free`）在直接 API 测试中失败，返回错误码 30001，而另外四个模型正常工作。这是今日新开的 bug。

> 🔗 https://github.com/anomalyco/opencode/issues/38028

---

### 🐛 Issue #36241 | gpt-5.6-sol-fast reasoning part rs_*:0 not found
**作者：** li-keli | 评论：5 | 👍：1

在 macOS 上使用 OpenAI Codex OAuth 时，gpt-5.6-sol-fast 模型的推理部分流式输出中断，错误信息：`reasoning part rs_<redacted>:0 not found`。问题在第一次交互后出现。

> 🔗 https://github.com/anomalyco/opencode/issues/36241

---

### 🔥 Issue #37056 | opencode-go provider returns 400/401/500 for subscribed models
**作者：** 123456789cm | 评论：5 | 👍：0

订阅用户通过 go-proxy 访问模型时，频繁遇到三类错误：
- 400 "Upstream request failed"（大请求 300KB+ 必现）
- 401 "Missing API key"（间歇性）
- 500 内部错误

> 🔗 https://github.com/anomalyco/opencode/issues/37056

---

### 📋 Issue #34398 | /undo fails silently in multi-repo sessions
**作者：** Duo-Huang | 评论：4 | 👍：0

工作区多仓库场景下，`/undo` 命令静默失败，无任何反馈。用户建议增加按仓库的快照跟踪功能。

> 🔗 https://github.com/anomalyco/opencode/issues/34398

---

### 🔔 Issue #37331 | Notification server not found: http://localhost:4096
**作者：** Bilge | 评论：4 | 👍：1

应用启动时出现通知服务器连接错误，影响用户体验。

> 🔗 https://github.com/anomalyco/opencode/issues/37331

---

### 🐛 Issue #17846 | --log-level DEBUG fails to log anything
**作者：** jonny7737 | 评论：4 | 👍：2

在 macOS 上，当 `~/.local/share/opencode/log` 包含 10 个日志文件时，`opencode --log-level DEBUG` 命令不产生任何日志，疑似日志轮转问题。

> 🔗 https://github.com/anomalyco/opencode/issues/17846

---

## 4. 重要 PR 进展

### ✨ PR #37727 | feat(tui): optionally share plan and build model
**作者：** zpin | 关联 Issue #36640

新增 `share_plan_build_model` TUI 设置选项，允许用户选择 Plan 或 Build 时共享选中的模型，增强协作体验。

> 🔗 https://github.com/anomalyco/opencode/pull/37727

---

### 🐛 PR #36068 | fix: accept Ollama reasoning field in OpenAI Chat deltas
**作者：** twhittock | 修复 #13579

Ollama 的 `/v1/chat/completions` 端点使用 `reasoning` 字段而非标准的 `reasoning_content`，此 PR 修复了推理内容被静默丢弃的问题。

> 🔗 https://github.com/anomalyco/opencode/pull/36068

---

### 🔒 PR #38045 | fix(core): quote shell commands with shell-quote
**作者：** fengqi-dev | 关联 Issue #38046

Shell 模式在嵌入用户命令时使用 `JSON.stringify` 存在安全隐患，此 PR 改用 `shell-quote` 库正确转义 Shell 命令。

> 🔗 https://github.com/anomalyco/opencode/pull/38045

---

### 🐛 PR #38041 | fix(opencode): retry JSONParseError from malformed SSE streams
**作者：** luochen1990 | 修复 #13579

当 provider 返回格式错误的 SSE 流时，`JSONParseError` 被静默处理导致错误信息丢失，此 PR 改进了错误处理机制。

> 🔗 https://github.com/anomalyco/opencode/pull/38041

---

### ✨ PR #29217 | feat(tui): Add inline $skill invocations
**作者：** jjdubski | 关联 Issues #15617, #10525, #7846, #20982, #24587

为提示编辑器添加内联 `$skill` 支持，输入 `$` 时触发可用技能自动完成，点击技能可插入代码片段。

> 🔗 https://github.com/anomalyco/opencode/pull/29217

---

### 🔧 PR #38039 | fix(core): enforce patch EOF anchors
**作者：** rekram1-node

确保 `*** End of File` 标记在补丁解析过程中被保留，要求 EOF 锚定的块必须匹配实际文件末尾，增强了代码补丁的可靠性。

> 🔗 https://github.com/anomalyco/opencode/pull/38039

---

### 🔧 PR #38038 | fix(core): normalize CRLF patch lines
**作者：** rekram1-node

修复 Windows 风格行尾（CRLF）导致的补丁解析问题，移除每行的多余回车符，同时保留补丁内容中合法的回车符。

> 🔗 https://github.com/anomalyco/opencode/pull/38038

---

### 🔧 PR #38034 | fix(core): compose successive patch updates
**作者：** rekram1-node

支持从一个文件的多次更新操作派生连续更新，增强了复杂代码修改场景下的处理能力。

> 🔗 https://github.com/anomalyco/opencode/pull/38034

---

### 📚 PR #38033 | docs(readme): add Indonesian language version
**作者：** ideapedyudi

为 README 添加印尼语翻译（`README.id.md`），提升对印尼语用户的可访问性。

> 🔗 https://github.com/anomalyco/opencode/pull/38033

---

### 🐛 PR #37832 | fix(desktop): refresh legacy session panel on session switch
**作者：** cyrasafia | 关联 Issue #37534

修复遗留会话面板在切换项目后保留过期内容的问题，提升多项目管理体验。

> 🔗 https://github.com/anomalyco/opencode/pull/37832

---

## 5. 功能需求趋势

从今日 Issue 数据分析，社区最关注的功能方向如下：

| 排名 | 功能方向 | 代表 Issues | 热度 |
|------|----------|-------------|------|
| 1 | **UI/UX 改进** | #37012（布局保留）、#38049（新标签页文件视图）、#38043（命令别名显示） | ⭐⭐⭐⭐⭐ |
| 2 | **跨平台兼容性** | #19130（Windows ARM64）、#34869（VMware Linux AppImage） | ⭐⭐⭐⭐ |
| 3 | **推理模型稳定性** | #36241（推理部分丢失）、#38028（免费模型失败） | ⭐⭐⭐⭐ |
| 4 | **API/Provider 可靠性** | #37056（订阅模型 API 错误）、#34910（速率限制）、#27964（402 支付错误） | ⭐⭐⭐⭐ |
| 5 | **多仓库工作区** | #34398（/undo 静默失败） | ⭐⭐⭐ |
| 6 | **代码模式（CodeMode）** | #24511（hash-anchored edits）、#28733（配置加载问题） | ⭐⭐⭐ |

---

## 6. 开发者关注点

### 主要痛点

| 痛点 | 描述 | 相关 Issues |
|------|------|-------------|
| **SSE 流中断** | 多次报告 SSE 事件流在传输中途静默断开，导致客户端挂起或会话冻结 | #37580, #28729 |
| **配置加载隐性失败** | 配置文件加载失败时静默忽略，缺乏明确错误提示 | #28733 |
| **日志系统不透明** | DEBUG 日志模式失效（疑似轮转问题），影响问题排查 | #17846 |
| **API 认证不稳定** | 同一 API Key 间歇性被拒，400/401/500 错误随机出现 | #37056 |
| **跨源会话丢失** | 通过 LAN 或 Tailscale IP 访问时项目/会话列表不共享 | #28340 |

### 高频需求

1. **稳定性优先**：多位用户反馈长时间任务执行能力下降，复杂任务完成度仅 40% 左右
2. **向后兼容**：新 UI 改动需考虑保留经典布局选项
3. **更好的调试工具**：日志系统、错误信息的可追溯性需加强
4. **Provider 抽象完善**：推理选项、模型支持需要更统一的一致性处理

---

> 📊 本日报基于 2026-07-21 过去 24 小时的 GitHub 活动数据生成，共涵盖 50 条 Issues 和 50 条 Pull Requests。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

**Pi 社区动态日报（2026‑07‑21）**  

---

### 今日速览
- 今日没有新版本发布，社区活动集中在 **问题修复** 与 **功能增强** 上。  
- 最受关注的问题是 **httpIdleTimeout 失效（#6476）** 和 **self‑update 受瞬时网络错误影响（#6675）**，两者均已收到多条评论并在进行中。  
- 在 PR 方面，增强 **自更新重试机制（#6895）**、**持久化 JIT 缓存（#6892）**、以及 **使用供应商报告的费用（#6881）** 是今日合并的核心改动。  

---

### 版本发布
> 过去 24 小时内 **无** 新 Release。  

---

### 社区热点 Issues（按评论数及影响挑选 10 条）

| # | 标题 | 评论 | 为什么重要 | 社区反应 |
|---|------|------|------------|----------|
| [#6476](https://github.com/earendil-works/pi/issues/6476) | Regression: httpIdleTimeoutMs 不再被自托管 OpenAI‑compatible 提供商遵循 | 11 | 直接导致长时间请求超时，影响生产环境的模型调用。 | 用户报告升级后失效，需回滚或等待修复；讨论集中在超时参数的传递路径。 |
| [#6675](https://github.com/earendil-works/pi/issues/6675) | `pi update --self` 在一次瞬时版本查询失败后放弃 | 8 | 自更新可靠性是日常使用的基础；一次网络抖动即导致更新失败。 | 社区建议加入重试机制，已有 PR（#6895）尝试解决。 |
| [#5263](https://github.com/earendil-works/pi/issues/5263) | 使会话内模型与思考级别更改默认临时化 | 8 | 影响用户习惯：临时改动不应污染全局设置，需新增 “默认模型” 入口。 | 赞同票数较高（👍8），讨论围绕如何在设置中暴露全局默认值。 |
| [#5407](https://github.com/earendil-works/pi/issues/5407) | Kitty 终端下双击 Backspace/Enter 被重复识别 | 7 | 特定终端的输入异常影响可用性，亟需兼容性修复。 | 有 👍1，用户提供了复现步骤，期待在 TUI 层面做防抖处理。 |
| [#5931](https://github.com/earendil-works/pi/issues/5931) | 从 TUI 复制粘贴会引入额外空格和换行 | 6 | 影响代码片段的迁移，尤其在跨编辑器工作流中造成噪声。 | 社区认可此为易用性 bug，期待在渲染层统一换行处理。 |
| [#3200](https://github.com/earendil-works/pi/issues/3200) | 支持视频/音频内容在 `prompt` RPC 中传递 | 6 | 多模态模型（如 GPT‑4o、Gemma 4）的使用需求增长，现有仅支持图片。 | 有 👍4，开发者讨论如何在不破坏向后兼容的前提下扩展 payload。 |
| [#6704](https://github.com/earendil-works/pi/issues/6704) | pi‑tui 0.80.7 输入框渲染宽度越界（离之一）导致崩溃 | 5 | UI 崩溃直接中断交互，尤其在宽度恰好匹配的终端上频繁出现。 | 已有用户提供堆栈，期待在宽度计算中加入容错。 |
| [修正]（#6890） reload_config 以避免重启 | [#6890](https://github.com/earendil-works/pi/issues/6890) | 公开 `reload_config` RPC 以热更新模型目录 | 5 | 免除因模型目录变更而重启 Pi 的麻烦，对插件开发尤为友好。 | 讨论聚焦在 RPC 安全性与幂等性。 |
| [#6509](https://github.com/earendil-works/pi/issues/6509) | 允许扩展通过 `ctx.ui.setUsage` 上报费用至页脚 | 5 | 让子进程或外部工具的费用可见，提升成本透明度。 | 社区认为这是扩展生态的重要一步。 |
| [#6621](https://github.com/earendil-works/pi/issues/6621) | 防止因动态系统提示导致缓存意外失效 | 5 | 在统一内存设备上，预填阶段开销大，缓存失效会显著降低吞吐。 | 有 👍1，讨论如何使系统提示更稳定或增加缓存键版本化。 |

---

### 重要 PR 进展（挑选 10 条已合并或具有里程碑意义的 PR）

| PR | 标题 | 关键内容 | 为什么重要 |
|----|------|----------|------------|
| [#6895](https://github.com/earendil-works/pi/pull/6895) | fix(coding-agent): retry self‑update on transient version fetch failures | 在获取` 绘重试一次，并把底层 errno �错误信息。 | 直接解决 #6675，提升自更新鲁棒性。 |
| [#6892](https://github.com/earendil-works/pi/pull/6892) | fix: persist jiti cache in agent dir to avoid cold start recompilation | 将 JIT/Babel 缓存从系统临时目录迁移至 agent 专用目录，防止系统清理导致的重新编译。 | 大幅降低首次启动或扩展更新后的冷启动延迟。 |
| [#6881](https://github.com/earendil-works/pi/pull/6881) | feat(ai): use provider‑reported cost when responses include it | 当供应商返回 `usage.cost`（如 OpenAI、Vercel AI Gateway）时直接使用，否则回退到本地计价。 | 提升费用准确性，尤其对使用 BYOK 或代理网关的用户。 |
| [#6874](https://github.com/earendil-works/pi/pull/6874) | feat(session-selector): add Ctrl+A archive shortcut to session picker | 在会话选择器中新增 `Ctrl+A` 快捷键，直接归档所选会话至 `.pi/archive/YYYY‑MM/`。 | 提升会话管理效率，保持活跃会话列表简洁。 |
| [#6765](https://github.com/earendil-works/pi/pull/6765) | feat(ai): separate generated model data | 将自动生成的模型数据移出至独立 JSON 文件，保留 TypeScript 目录结构，以降低仓库 churn。 | 减少无意义的 diff，提升 CI 构建速度。 |
| [#6775](https://github.com/earendil-works/pi/pull/6775) | retry on compaction/branch summarization retryable failures | 为压缩和分支摘要添加重试逻辑（对应 #6647），防止瞬时网络中断导致整个压缩失败。 | 提高长对话会话的稳定性，减少因单次抖动而丢失上下文的风险。 |
| [#6786](https://github.com/earendil-works/pi/pull/6786) | fix(ai): expose Kimi Coding K3 effort levels | 暴露 Kimi Coding K3 的 `low`、`high`、`max` 思考级别，并更新对应的回归测试。 | 满足社区对细粒度思考控制的需求，提升模型使用灵活性。 |
| [#6865](https://github.com/earendil-works/pi/pull/6865) | feat: get_available_thinking_levels rpc | 新增 RPC `get_available_thinking_levels`，供前端查询当前模型支持的思考等级。 | 为 UI 动态展示思考选项提供统一接口，后续可用于插件。 |
| [#6864](https://github.com/earendil-works/pi/pull/6864) | fix: env section ignored | 修复 `auth.json` 中 `env` 块被忽略的问题（#6799），确认 provider‑scoped 环境变量优先于进程环境。 | 解决了在使用自定义基础 URL（如 Azure OpenAI）时的凭据失效问题。 |
| [#6858](https://github.com/earendil-works/pi/pull/6858) | feat(ai): add Qwen Token Plan as built‑in provider | 新增两个内置提供商 `qwen-token-plan`（国际）和 `qwen-token-plan-cn`（国内），遵循现有 Token Plan 模式。 | 扩展对阿里云通义千问的原生支持，降低用户自行配置门槛。 |

---

### 功能需求趋势（从全部 Issues 中提炼）

| 趋势 | 典型 Issue / PR | 说明 |
|------|----------------|------|
| **多模态输入** | #3200（视频/音频） | 社区希望 `prompt` RPC 能像图片一样携带视频/音频数据，以适配 GPT‑4o、Gemini 等新兴模型。 |
| **费用透明与可定制** | #6509、#6881、#6877 | 扩展上报费用、直接使用供应商报价、在页脚显示外部费用，都是围绕成本可视化的需求。 |
| **思考级别与模型控制** | #5263（临时模型/思考级别）、#6786（Kimi K3 思考等级）、#6865（查询可用思考级别） | 用户希望在会话中灵活调节推理深度，且不影响全局设置。 |
| **官方扩展生态** | #6897（提出官方扩展） | 呼声高涨，期待官方维护的高频功能（子代理、交互问答、生命周期钩子等）。 |
| **启动性能与模型目录刷新** | #6794（启动慢）、#6890（热重载模型目录） | 模型目录频繁刷新导致启动卡顿，用户想要无需重启即可更新目录。 |
| **自更新可靠性** | #6675、#6895 | 自更新在网络不稳定环境下易失败，社区普遍要求加入重试与更好的错误上报。 |
| **终端兼容性** | #5407（Kitty 双键）、#6704（渲染宽度越界）、#6893（ZWJ Emoji） | 各类终端的渲染差异导致输入异常或崩溃，亟需更健壮的 TUI 输入处理。 |

---

### 开发者关注点（痛点 & 高频需求）

1. **网络弹性** – 自更新、模型目录下载、压缩摘要等易受瞬时网络错误影响，开发者普遍要求 **重试机制** 与 **更细致的错误上下文**（错误码、cause）。
2. **配置透明度** – `auth.json` 中的 `env` 块被忽略、环境变量优先级混乱，导致凭据失效；需要 **配置解析的统一与文档化**。
3. **UI/输入健壮性** – 在不同终端（Kitty、macOS 原生终端、Windows Terminal）下出现 **双键、渲染越界、Emoji 引起的布局错位**，期望在底层渲染层加入防抖与宽度容错。
4. **成本与使用量可见性** – 扩展与子进程的费用目前难以追踪，社区渴望 **标准化的上报接口**（如 `ctx.ui.setUsage`）和 **页脚统一展示**。
5. **模型生命周期管理** – 因模型目录变更导致的 **启动延迟** 与 **需要重启** 的问题，开发者倾向于 **热重载**（RPC `reload_config`）以及 **缓存持久化**（JIT 缓存、

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code 社区动态日报（2026‑07‑21）**  

---

### 1. 今日速览
- 今日发布了夜间版本 **v0.20.0‑nightly.20260721.cda0e0348**，主要改进了 Autofix 的标签驱动接管机制并修复了强制派发的空操作。  
- 社区围绕 **IDE 集成（VS Code 连接故障）、Token 管理与模型切换、以及后台 Agent 的持久性** 展开了热烈讨论，多个高评论 Issue 和 PR 指出了对应的痛点与改进方向。  

---

### 2. 版本发布
| 版本 | 发布时间 | 关键变更 |
|------|----------|----------|
| v0.20.0‑nightly.20260721.cda0e0348 | 2026‑07‑21 | • **feat(autofix)：label‑driven takeover and release** – 让 Autofix 能根据 PR 标签自动决定接管与发布流程。<br>• **fix(autofix)：修复 forced‑dispatch green no‑op** – 消除了在某些情况下导致无效派发的冗余操作。<br>• 其他微小的 autofix 修复。 |

[Release 链接](https://github.com/QwenLM/qwen-code/releases/tag/v0.20.0-nightly.20260721.cda0e0348)

---

### 3. 社区热点 Issues（精选 10 条）

| # | 标题 & 链接 | 为什么重要 | 社区反应 |
|---|-------------|------------|----------|
| #7147 | [MCP server  never successfully get tool and resource listing](https://github.com/QwenLM/qwen-code/issues/7147) | Fastmail MCP 服务器在 Qwen Code 中认证成功但获取工具/资源列表会超时，影响外部工具链接。 | 6 条评论，用户提供了复现步骤，期望改进超时处理或提供更明确的错误信息。 |
| #6414 | [vscode qwen code Failed to connect to Qwen agent](https://github.com/QwenLM/qwen-code/issues/6414) | VS Code  Companion 扩展频繁报错 “Failed to connect to Qwen agent”，直接影响日常编码体验。 | 5 条评论，附有截图，多数反映在 Windows/macOS 上出现，需检查 ACP 桥接与 Electr​on 兼容性。 |
| #7252 | [Bug: token‑plan.ap‑southeast‑1 is not selectable on /auth](https://github.com/QwenLM/qwen-code/issues/7252) | 新加坡（国际）Token Plan 地区在鉴权页不可选，阻碍东南亚用户使用云端模型。 | 4 条评论，用户期望快速补齐地区选项。 |
| #7306 | [Harden tool‑output budgeting, observability, and artifact lifecycle](https://github.com/QwenLM/qwen-code/issues/7306) | 工具输出经过多路径截断/聚合，导致结果不一致且难以观测，影响调试与性能分析。 | 4 条评论，社区建议统一预算阈值并加入可视化指标。 |
| #7056 | [qwenlm.qwen-code-vscode-ide-companion Version 0.19.11 Failed to connect to Qwen agent: Qwen ACP process exited unexpectedly](https://github.com/QwenLM/qwen-code/issues/7056) | VS Code 扩展启动时 ACP 进程异常退出（exit code 0），导致无法建立连接。 | 4 条评论，提供了 CLI 错误日志，疑似参数解析问题。 |
| #7316 | [Bug：OpenAI 对 toolCall 的特殊反应导致 `subAgent` 完全无法使用](https://github.com/QwenLM/qwen-code/issues/7316) | 使用 `isolation: "worktree"` 时，部分 OpenAI 兼容模型会返回空 `working_dir`，造成参数冲突并导致子代理失效。 | 3 条评论，开发者指出需要在 schema 中区分必填/可选字段。 |
| #7049 | [Update check: soften timeout UX — warning instead of error, raise timeout budget](https://github.com/QwenLM/qwen-code/issues/7049) | npm 注册表在某些地区/企业网络慢时会把更新检查当作错误，影响用户体验。 | 3 条评论，建议改为警告并提升超时预算。 |
| #7023 | [Model switch can invalidate a loaded daemon session](https://github.com/QwenLM/qwen-code/issues/7023) | 在守护进程模式下切换模型会使已加载的会话失效，导致后台 Agent 中断。 | 3 条评论，用户期望模型切换时保持会话持久性。 |
| #7151 | [v.0.19.10 升级到 v0.19.11 出现的 bug](https://github.com/QwenLM/qwen-code/issues/7151) | 升级后启动时报错（图片所示），阻碍版本迁移。 | 3 条评论，提供了错误截图，需回归检查启动脚本。 |
| #7284 | [bug(core): side‑query forces enable_thinking=false, breaking TokenPlan endpoints that require thinking enabled](https://github.com/QwenLM/qwen-code/issues/7284) | `runSideQuery` 一律发送 `enable_thinking: false`，导致需要思考模式的 Token Plan 接口返回 400 错误。 | 3 条评论，强调思考模式兼容性的重要性。 |

---

### 4. 重要 PR 进展（精选 10 条）

| PR | 标题 & 链接 | 功能/修复要点 |
|----|-------------|----------------|
| #7280 | [feat(auth): add Singapore Token Plan region](https://github.com/QwenLM/qwen-code/pull/7280) | 在 `/auth` 鉴权页新增新加坡（国际）Token Plan 选项，保持中国区为默认，解决 #7252。 |
| #7313 | [fix(web-shell): restore scheduled task reference interactions](https://github.com/QwenLM/qwen-code/pull/7313) | 恢复 Web Shell 中计划任务引用的滚动、选中及光标行为，提升交互体验。 |
| #7368 | [feat(autofix): feed the gate's rejection back so the retry can fix what it broke](https://github.com/QwenLM/qwen-code/pull/7368) | 让 Autofix 重试机制获得门禁的拒绝原因，从而自动修复被拒的改动。 |
| #7228 | [fix(acp-bridge): map Windows-shaped workspace paths to their sandbox mount](https://github.com/QwenLM/qwen-code/pull/7228) | 将 Windows 路径（如 `C:\work\proj`）映射到容器沙箱挂载点(`/c/work/proj`），修复跨平台工作区路径问题。 |
| #7346 | [feat(core): add fork_turns to fork subagents](https://github.com/QwenLM/qwen-code/pull/7346) | 为 detached fork agent 新增可选 `fork_turns` 参数，允许限制继承的历史 turn 数，提升资源控制。 |
| #7396 | [perf(autofix): raise fleet simultaneity from 3 to 5](https://github.com/QwenLM/qwen-code/pull/7396) | 将 Autofix 舰队的并行数从 3 提升至 5，加快 PR 处理速度。 |
| #7312 | [fix(web-shell): restore context tags in queued and recalled prompts](https://github.com/QwenLM/qwen-code/pull/7312) | 保持队列中和历史记录召回的 Prompt 中的上下文标签渲染，防止标签丢失。 |
| #7392 | [fix(ci): serialise the two workflows that push to a PR head branch](https://github.com/QwenLM/qwen-code/pull/7392) | 使推送到 PR 分支的两个 CI 工作流串行执行，避免竞态导致的分支污染。 |
| #7352 | [feat(core): restore background agents across sessions](https://github.com/QwenLM/qwen-code/pull/7352) | 恢复跨会话的后台 Agent 任务 ID，使其在会话恢复后仍可通过 `list_agents` 发现并继续。 |
| #7353 | [feat(core): keep background agents resident between turns](https://github.com/QwenLM/qwen-code/pull/7353) | 让完成的后台 Agent 运行时常驻，后续 `send_message` 可直接复用同一运行时，减少冷启动开销。 |
| #7379 | [feat(web-shell): Add sidebar customization API for branding, navigation, session actions, and footer](https://github.com/QwenLM/qwen-code/pull/7379) | 为 Web Shell Sidebar 提供可编程 API，允许品牌、导航、会话操作及页脚的自定义。 |
| #7357 | [feat(skills): add overridable default-disabled state](https://github.com/QwenLM/qwen-code/pull/7357) | 引入 `skills.defaultDisabled` 作软禁用标记，与硬禁用 `skills.disabled` 及显式启用 `skills.enabled` 形成三层控制。 |
| #7393 | [feat(core): add memory recall delivery telemetry](https://github.com/QwenLM/qwen-code/pull/7393) | 新增内存召回送达遥测，区分“被选中”与“实际送达到主模型”，帮助评估记忆机制效果。 |
| #7365 | [feat(web-shell): surface worktree isolation in the new-session empty state](https://github.com/QwenLM/qwen-code/pull/7365) | 将工作区隔离切换从侧边栏下拉移至新会话空白页，提供明显的切换开关，提升发现性。 |
| #7395 | [feat(cli): support custom skill directories via settings](https://github.com/QwenLM/qwen-code/pull/7395) | 新增 `skills.directories` 设置，接受自定义路径数组，使技能可跨项目共享。 |
| #7380 | [feat(web-shell): show subagent sessions in detail panel](https://github.com/QwenLM/qwen-code/pull/7380) | 将子代理会话详情移至独立面板，主对话流仅保留状态与摘要，点击后加载完整转录并开启 SSE 流。 |

---

### 5. 功能需求趋势（从 Issues 中提炼）

| 趋势方向 | 体现的 Issues / PR | 说明 |
|----------|-------------------|------|
| **IDE 集成稳定性** | #6414, #7056, #7313, #7312 | VS Code 连接失败、ACP 进程异常退出、Web Shell 交互细节（标签、计划任务）成为高频痛点。 |
| **Token 管理与地区支持** | #7252, #7280, #7332, #7284 | 用户亟需更多云端 Token Plan 区域（如新加坡），以及对思考模式（enable_thinking）的正确传递。 |
| **会话 & 后台 Agent 持久性** | #7023, #7352, #7353, #7385 | 模型切换导致守护进程会话失效、后台 Agent 跨会话恢复及常驻需求强烈。 |
| **工具输出与可观测性** | #7306, #7384, #7377 | 工具输出多路径截断导致不一致、Token 用量记录丢失、会话中工具调用参数易丢失。 |
| **Autofix 可靠性** | #7165, #7368, #7247, #7392 | 需要更智能的重试机制（带拒因回流）、并发度提升以及 CI 工作流序列化以防竞争。 |
| **技能与工作区自定义** | #7347, #7357, #7395, #7394 | 社区希望能通过设置自定义技能目录、可

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 | 2026-07-21

---

## 🔥 **今日速览**
- **v0.9.1 版本冲刺进入尾声**：社区集中解决 **权限管理、子代理隔离、工作流可靠性** 等关键问题，多个 `release-blocker` Issue 在 yesterday 被快速合并修复。
- **TUI 体验优化**：修复 **Enter 键卡顿**（#4605）、**长输出滚动截断**（#4603）等高频痛点，用户体验显著提升。
- **新功能扩展**：TelecomJS 供应商支持（#4370）、运行时 API 端点（#4658）等 PR 正在推进，为 v0.9.2 做准备。

---

---

## 📦 **版本发布**
**无新版本发布**（过去24小时内无 Releases）。

---

---

## 🚨 **社区热点 Issues**
| **Issue** | **类型** | **重要性** | **社区反应** | **链接** |
|-----------|----------|------------|--------------|----------|
| **#4032** | Bug | 🔴 **Release Blocker** | 40 条评论，核心争议：CodeWhale 违反"宪法"（Constitution），自行生成临时脚本而非使用用户提供的脚本 | [链接](https://github.com/Hmbown/CodeWhale/issues/4032) |
| **#4042** | Enhancement | 🔴 **安全性** | 18 条评论，需求：为子代理实现 **环境级工具沙盒**，强制执行 `tool_restrictions` | [链接](https://github.com/Hmbown/CodeWhale/issues/4042) |
| **#4605** | Bug | 🟡 **性能** | 2 条评论，Windows 用户反馈 **Enter 发送消息时 UI 冻结 200-1200ms** | [链接](https://github.com/Hmbown/CodeWhale/issues/4605) |
| **#4603** | Bug | 🟡 **UX** | 2 条评论，**长输出内容无法滚动**，超出视口后被截断，无法审查 | [链接](https://github.com/Hmbown/CodeWhale/issues/4603) |
| **#4604** | Bug | 🔴 **UX** | 2 条评论，**首次运行向导在每次重启时重复出现**，`first-run` 标志未持久化 | [链接](https://github.com/Hmbown/CodeWhale/issues/4604) |
| **#4659** | Bug | 🟡 **审批流程** | 1 条评论，**`edit_file` 审批预览仅显示 3 行**，多行改动无法完整查看 | [链接](https://github.com/Hmbown/CodeWhale/issues/4659) |
| **#414** | Enhancement | 🔴 **子代理** | 5 条评论，v0.9.1 目标：在启动前解析 **子代理运行时清单**，确保一致性 | [链接](https://github.com/Hmbown/CodeWhale/issues/414) |
| **#2889** | Enhancement | 🔴 **UX** | 4 条评论，需求：改进 **工作代理行** 显示，展示真实子代理详情和结构化活动状态 | [链接](https://github.com/Hmbown/CodeWhale/issues/2889) |
| **#3934** | Enhancement | 🔴 **角色简化** | 2 条评论，v0.9.1 目标：将 Fleet 和代理角色简化为 **Planner/Worker/Reviewer/Verifier** 4 种 | [链接](https://github.com/Hmbown/CodeWhale/issues/3934) |
| **#4412** | Enhancement | 🔴 **权限系统** | 1 条评论，v0.9.1 目标：通过 **统一权限合约** 解决 Ask/Auto-Review/Full Access 的权限决策 | [链接](https://github.com/Hmbown/CodeWhale/issues/4412) |

> **💡 观察**：`release-blocker` 标签的 Issue 占比高（~40%），社区正全力冲刺 v0.9.1 的稳定性。安全性（沙盒、权限）、子代理隔离、TUI 体验是当前焦点。

---

---

## 🛠️ **重要 PR 进展**
| **PR** | **类型** | **状态** | **核心贡献** | **链接** |
|--------|----------|----------|--------------|----------|
| **#4654** | Fix | ✅ **已合并** | 修复 **Enter 键卡顿**（#4605）：立即响应 Enter，后台异步准备发送 | [链接](https://github.com/Hmbown/CodeWhale/pull/4654) |
| **#4616** | Fix | ✅ **已合并** | 修复 **首次运行向导重复出现**（#4604）：持久化完成标记，隔离 `CODEWHALE_HOME` | [链接](https://github.com/Hmbown/CodeWhale/pull/4616) |
| **#4609** | Fix | ✅ **已合并** | 修复 **工作区文件权限问题**（#4606）：尊重 `umask`，分离用户文件与内部持久化的权限策略 | [链接](https://github.com/Hmbown/CodeWhale/pull/4609) |
| **#4613** | Fix | ✅ **已合并** | 修复 **Moonshot 工具参数验证**：适配 MFJS 规范，确保 `parameters` 根节点为 `type:"object"` | [链接](https://github.com/Hmbown/CodeWhale/pull/4613) |
| **#4608** | Fix | ✅ **已合并** | **权限系统重构**：对齐 Full Access/Auto-Review/Ask 权限态度，简化审批流程 | [链接](https://github.com/Hmbown/CodeWhale/pull/4608) |
| **#4618** | Fix | ✅ **已合并** | 修复 **长时间运行工具假死**：恢复工具执行边界的心跳机制，避免触发 10 分钟超时 | [链接](https://github.com/Hmbown/CodeWhale/pull/4618) |
| **#4658** | Feat | 🟡 **开发中** | **运行时 API 扩展**：新增供应商注册表 + 切换端点，支持 GUI 动态切换模型/供应商 | [链接](https://github.com/Hmbown/CodeWhale/pull/4658) |
| **#4370** | Feat | 🟡 **开发中** | **TelecomJS 供应商支持**：添加配置和模型目录，修复模型列表仅显示 1 个模型的问题 | [链接](https://github.com/Hmbown/CodeWhale/pull/4370) |
| **#4657** | Fix | 🟡 **开发中** | **流式传输进度报告**：在空闲超时时包含接收字节和时间信息，区分预填充停滞与部分输出 | [链接](https://github.com/Hmbown/CodeWhale/pull/4657) |
| **#4656** | Fix | 🟡 **开发中** | **路由限制修复**：为未知本地模型尊重显式输出限制，避免回退到 4K 兼容模式 | [链接](https://github.com/Hmbown/CodeWhale/pull/4656) |

> **💡 观察**：修复类 PR 合并速度快（多为 1 天内），功能类 PR（如 #4658、#4370）仍在审查中。v0.9.1 的关键修复已基本完成。

---

---

## 📈 **功能需求趋势**
1. **权限与安全**
   - 子代理 **工具沙盒隔离**（#4042、#4627）
   - **统一权限合约**（#4412、#4626），支持 Auto-Review 无模态审批
   - **工作区写作用域声明**（#4648），防止并发冲突

2. **子代理与工作流**
   - **子代理运行时清单解析**（#414），确保一致性
   - **子代理执行环境预配置**（#4627），防止回退到共享运行时
   - **工作流日志身份固定**（#4635），避免路径替换导致状态丢失

3. **TUI 体验优化**
   - **长输出滚动支持**（#4603、#4653），解决内容截断问题
   - **Enter 键响应优化**（#4605、#4654），消除发送延迟
   - **审批预览完整性**（#4659），支持多行 diff 显示

4. **多模型与供应商支持**
   - **TelecomJS 供应商集成**（#4370）
   - **运行时 API 端点**（#4658），支持动态切换模型/供应商
   - **Moonshot/Kimi 合约严格化**（#4613、#4617）

5. **可靠性与调试**
   - **工具执行心跳机制**（#4618），防止假死
   - **流式传输进度报告**（#4657），改进调试体验
   - **原子写入权限修复**（#4609），尊重 `umask`

---

---
## 🎯 **开发者关注点**
### **🔥 痛点**
1. **TUI 卡顿与响应延迟**
   - Enter 发送消息时 UI 冻结（#4605），用户体验差。
   - 长输出无法滚动（#4603），审查困难。

2. **权限系统复杂性**
   - Ask/Auto-Review/Full Access 权限逻辑混乱（#4412），用户反馈审批流程繁琐。
   - 子代理工具权限未强制执行（#4042），存在安全风险。

3. **子代理隔离不足**
   - 子代理共享运行时环境（#4627），可能导致并发冲突。
   - 子代理名称/恢复身份未限定到会话（#4645），存在状态污染风险。

4. **配置与状态管理**
   - 首次运行标志未持久化（#4604），用户需重复配置。
   - 工作区文件权限未尊重 `umask`（#4606），导致权限问题。

### **💡 高频需求**
1. **供应商与模型扩展**
   - 需要更多供应商支持（如 TelecomJS、xAI），并确保模型列表完整显示。
   - 运行时 API 需支持动态切换模型/供应商（#4658）。

2. **工作流可视化**
   - 需改进工作代理行显示（#2889），展示子代理详情和活动状态。
   - 需支持长输出的结构化展示（#4603、#4659）。

3. **调试与可观测性**
   - 需流式传输进度报告（#4657），区分不同类型的超时。
   - 需工具执行心跳机制（#4618），防止长时间运行任务假死。

4. **兼容性与规范性**
   - 需严格遵循 Moonshot MFJS 规范（#4613、#4617）。
   - 需支持 HarmonyOS 编译（#4566）。

---
---
**📌 总结**：DeepSeek TUI 社区当前聚焦 **v0.9.1 的稳定性修复**，尤其是权限、子代理隔离和 TUI 体验。同时，v0.9.2 的功能扩展（如新供应商、运行时 API）已开始推进。开发者最关注 **性能、安全性和可靠性**，建议优先解决 `release-blocker` 标签的 Issue。

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

**ComfyUI 社区动态日报（2026‑07‑21）**  

---

### 今日速览
- 今日无新版本发布，社区活跃度主要体现在 **性能与内存问题**（如模型频繁加载、VRAM OOM、显存泄漏）以及 **新模型/硬件支持**（NVIDIA Cosmos 3、AMD/ROCm、Apple Silicon）上。  
- 高评论的 Issue #14618（模型在每次 Prompt 变更时重复加载）已达 77 条评论，凸显社区对工作流加速的迫切需求。  
- 多个 PR 正在推进 **数据集安全**、**视频处理节点**、**相机信息节点** 等功能，预计将在后续版本中提升易用性与生态扩展性。

---

### 版本发布
> 本日未有新版本发布（最新稳定版仍为 v0.27.x 系列）。

---

### 社区热点 Issues（精选 10 条）

| # | 标题 | 重要性 & 社区反应 | 链接 |
|---|------|-------------------|------|
| #14618 | **[Potential Bug] ComfyUI keeps loading models on every prompt change** | 77 条评论、9 👍，反映在频繁修改 Prompt 时模型重复加载导致显著延迟，是提升交互体验的核心痛点。 | https://github.com/Comfy-Org/ComfyUI/issues/14618 |
| #14907 | **0.27.1 - Memory Usage Degraded even more AGAIN** | 6 条评论、9 👍，指向 v0.27.1 在 Prompt 变更时出现磁盘重新读取及 RAM 消耗升级，与 #14618 形成内存/ I/O 双重瓶颈。 | https://github.com/Comfy-Org/ComfyUI/issues/14907 |
| #14824 | **[User Support] Native INT8 ConvRot significantly slower than FP8 on A100 (Torch 2.10 + cu130)** | 在 A100 上 INT8 卷积比 FP8 慢很多，社区关注量化在高端 GPU 上的实际收益。 | https://github.com/Comfy-Org/ComfyUI/issues/14824 |
| #14228 | **[Feature] Support for NVIDIA Cosmos 3 model family?** | 24 👍，社区强烈希望加入最新 NVIDIA Cosmos 3（4B/16B/64B）多模态模型，表明对前沿大模型的需求。 | https://github.com/Comfy-Org/ComfyUI/issues/14228 |
| #14850 | **[CLOSED] Unexpected acceleration on Wan2.2 I2V 14B FP8 when triggering both --lowvram and --use-sage-attention** | 虽已关闭，但揭示了低显存 + SageAttention 组合带来的非线性加速效果，为参数调优提供线索。 | https://github.com/Comfy-Org/ComfyUI/issues/14850 |
| #14919 | **[Potential Bug] int8 lora always load from disk** | INT8 LoRA 加载速度仅为正常 safetensor 的 1/10，社区希望实现缓存机制以减少 I/O 开销。 | https://github.com/Comfy-Org/ComfyUI/issues/14919 |
| #15013 | **[Potential Bug] Regression: Qwen Image Edit FP8 + LoRA VRAM overflow after comfy-kitchen update** | 新上报的 VRAM 溢出回归，涉及最新 Qwen Image Edit FP8 + LoRA 工作流，需及时跟进。 | https://github.com/Comfy-Org/ComfyUI/issues/15013 |
| #15001 | **[User Support] [ROCm][gfx1201] General model loading became extremely slow on R9700 - LTX 2.3 workflow increased from about 300s to about 4400s** | ROCm 平台上模型加载显著变慢，凸显 AMD GPU 生态的适配压力。 | https://github.com/Comfy-Org/ComfyUI/issues/15001 |
| #15005 | **[Potential Bug] Video generation (LTX2.3) became unusable/mega-slow after days of use** | 长时间运行后视频生成极度缓慢，疑似资源泄漏或缓存失效。 | https://github.com/Comfy-Org/ComfyUI/issues/15005 |
| #15006 | **[CLOSED] [Feature] Add gfx1035 to AMD_RDNA2_AND_OLDER_ARCH in model_management.py** | 虽已关闭，但说明社区对 AMD 集成显卡（gfx1035）的精细适配需求，关系到底层精度选择（BF16 vs FP16）。 | https://github.com/Comfy-Org/ComfyUI/issues/15006 |

---

### 重要 PR 进展（精选 10 条）

| # | 标题 | 功能/修复内容 | 链接 |
|---|------|---------------|------|
| #15007 | **FreSca: 5D+ (ex. Anima) fix, model-agnostic iteration** | 修复 FreSca 在 5D 张量上的循环次数，确保缩放作用于最后两维（H,W），提升 Anima 等视频模型的精度。 | https://github.com/Comfy-Org/ComfyUI/pull/15007 |
| #14807 | **[Dataset/Security,Feature] Add dataset folder to avoid arbitrary folder access for dataset stuff.** | 新增专用 `dataset` 文件夹，防止用户通过任意路径写入造成的安全风险，统一数据集管理。 | https://github.com/Comfy-Org/ComfyUI/pull/14807 |
| #13588 | **[Trainer,Dataset/Feature] Video processing nodes, Image Processing Node video support, trainer video support (CORE-81)** | 添加视频数据集载入、处理节点，以及在图像处理节点中逐帧应用变换，完善训练管线对视频的支持。 | https://github.com/Comfy-Org/ComfyUI/pull/13588 |
| #15012 | **fix: allow Load Image symlinks into temp/output media roots** | 允许 `Load Image` 读取从 `input/` 通过软链接指向 `temp/` 或 `output/` 的图像，解决 symlink 被误拒的问题。 | https://github.com/Comfy-Org/ComfyUI/pull/15012 |
| #14962 | **[Core, cursor-review] chore: add /AGENTS.md to CODEOWNERS** | 将 `AGENTS.md` 纳入代码所有者规则，确保该文件的更改由核心维护者审查。 | https://github.com/Comfy-Org/ComfyUI/pull/14962 |
| #15009 | **Fix gfx1035 not being treated like RDNA2** | 将 AMD gfx1035 集成显卡纳入 `AMD_RDNA2_AND_OLDER_ARCH`，使其使用 FP16 而非不必要的 BF16，提升性能。 | https://github.com/Comfy-Org/ComfyUI/pull/15009 |
| #14979 | **[Core, agent-coded, cursor-review] fix(api-nodes): disambiguate deprecated partner-node display names** | 消除旧版 V1 与新版 V2 节点展示名称冲突（如 “OpenAI GPT Image 2”），避免用户在节点选择器中混淆。 | https://github.com/Comfy-Org/ComfyUI/pull/14979 |
| #14539 | **Fix default database path for custom user directory** | 将默认 SQLite 数据库路径从安装目录改为用户实际目录，支持自定义安装路径下的数据持久化。 | https://github.com/Comfy-Org/ComfyUI/pull/14539 |
| #15011 | **Fix AttributeError in get_key_weight when op lacks weight attribute** | 防止在某些算子缺少 weight 属性时触发 AttributeError，提升模型加载的健壮性。 | https://github.com/Comfy-Org/ComfyUI/pull/15011 |
| #14964 | **feat(camera-info): CreateCameraInfo node + CameraInfoState widget input** | 新增 `CreateCameraInfo` 节点，支持 orbit、look_at、quaternion 三种相机模式，并提供 FOV、zoom、投影等参数，为 3D 渲染管线铺路。 | https://github.com/Comfy-Org/ComfyUI/pull/14964 |

---

### 功能需求趋势（从 Issues 中提炼）

| 趋势方向 | 体现的典型 Issue / 讨论 | 说明 |
|----------|------------------------|------|
| **性能与内存优化** | #14618、#14907、#15005、#15003 | 社区普遍反映 Prompt 变更导致模型重复加载、VRAM OOM、长时间运行后资源未释放，亟需缓存、延迟加载及更细粒度的显存管理。 |
| **量化与精度支持** | #14824（INT8 在 A100 上慢）、#14919（INT8 LoRA 磁盘加载） | 对 INT8/FP8 等低精度模型的实际加速效果存在疑问，期待更好的量化算法与权重缓存机制。 |
| **新模型与多模态支持** | #14228（NVIDIA Cosmos 3）、#14304（Gemma4 12B）、#14718（Pixal3d/TRELLIS2）、#14370（Sam3d-body） | 持续涌入对最新大语言、视觉、3D 生成模型的支持请求，表明社区希望 ComfyUI 成为前沿模型的快速实验平台。 |
| **硬件生态适配（AMD/ROCm、Apple Silicon）** | #15001（ROCm 加载慢）、#15010（Apple Silicon 垂直条纹）、#15006（gfx1035） | 对非 NVIDIA 平台的兼容性需求上升，特别是 ROCm 和 Apple Silicon 的性能表现与功能完整性。 |
| **工作流易用性** | #15012（symlink 支持）、#14964（CameraInfo 节点）、#14979（节点名去歧义） | 社区希望在文件管理、节点 UI、3D/相机控制等方面获得更直观、少踩坑的体验。 |
| **训练与数据管线** | #13588（视频处理节点）、#14807（数据集文件夹） | 训练场景对视频数据集、安全的数据目录隔离提出明确需求。 |

---

### 开发者关注点（痛点 & 高频需求）

1. **资源泄漏与内存管理**  
   - 频繁出现的 “模型每次 Prompt 变更都重新加载”、“VRAM OOM”、“系统/显存未释放” 等 Issue，提示需要在模型生命周期中引入引用计数或 LRU 缓存，以及在工作流结束时主动释放占用的显存。  

2. **量化性能不达预期**  
   - 在高端 GPU（A100）上 INT8 反而慢于 FP8，INT8 LoRA 依赖磁盘加载，社区期待：  
     - 更智能的量化算子选择（根据硬件特性自动切换 FP8/INT8/FP16）  
     - 权重缓存机制（首次加载后保持在内存，避免重复 I/O）  

3. **跨平台适配成熟度**  
   - AMD/ROCm、Apple Silicon 的模型加载慢、精度不正确、功能缺失（如视频条纹）表明底层 `model_management.py` 与设备检测逻辑仍需细化，特别是对不同架构的默认数据类型与内存分配策略。  

4. **新模型集成的及时性**  
   - 对 NVIDIA Cosmos 3、Gemma4、Pixal3d/TRELLIS2、Sam3d-body 等前沿模型的支持请求频繁，说明社区希望 ComfyUI 能

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama 社区动态日报（2026‑07‑21）**  

---

### 1. 今日速览  
- 今日发布了 **v0.32.2‑rc0**（即 v0.32.2），主要改进了 Claude Code 通道保留、清理失效的 agent 提示包装以及重新排序工作目录指令。  
- 社区围绕 **工具/函数调用**、**GPU 显存检测**、**模型加载崩溃** 与 **token 重复限制** 四大议题展开激烈讨论，多个 Issue 在昨夜更新后仍保持 OPEN 状态。  
- 本日 PR 集中在 **性能/稳定性改进**（预填充缓存、AMD iGPU VRAM 报错修复、下载停滞检测）以及 **文档与 UI 细节**（Claude Code 上下文说明、侧边栏动画优化等）。

---

### 2. 版本发布  
**v0.32.2‑rc0**（等价于 v0.32.2）  
- **launch**：保留 Claude Code 通道，防止在自定义启动时被意外关闭（#17210 @hoyyeva）。  
- **cmd**：删除已废弃的 agent 提示包装（#17227 @ParthSareen）。  
- **agent**：调整工作目录指令的顺序，使得环境变量更易被子进程继承（@ParthSareen）。  
链接：[v0.32.2‑rc0 发布页](https://github.com/ollama/ollama/releases/tag/v0.32.2-rc0)

---

### 3. 社区热点 Issues（精选 10 条）  

| # | 标题 | 为什么重要 | 社区反应 |
|---|------|------------|----------|
| [#8588](https://github.com/ollama/ollama/issues/8588) | Qwen 不识别 function / tools | 工具调用是大模型实现 Agent 能力的关键，Qwen 系列在 Ollama 中失效直接影响到函数调用场景。 | 16 条评论，用户提供复现代码，尚未得到官方回复，表明需求迫切。 |
| [#16957](https://github.com/ollama/ollama/issues/16957) | NVIDIA 1080Ti CUDA 错误 `0xc0000005` | 显卡驱动/CUDA 兼容性问题导致启动即崩溃，影响大量老旧 GPU 用户。 | 12 条评论，含日志，社区普确认是 driver/Ollama 冲突，期待修复。 |
| [#12884](https://github.com/ollama/ollama/issues/12884) | 解析 tool call 时出现 `invalid character … after top-level value` | 揭示 API 层面对工具调用返回的 JSON 解析不够健壮，导致调用中断。 | 9 条评论，👍2，开发者开始尝试自行 patch。 |
| [#8793](https://github.com/ollama/ollama/issues/8793) | 通过 `create` API 支持 Modelfile | 目前只有 CLI 能读取 Modelfile，API 缺失此功能阻碍自动化构建流水线。 | 6 条评论，👍0，社区强烈期望统一接口。 |
| [#17270](https://github.com/ollama/ollama/issues/17270) | 0.32.1 回归：`/api/generate` 报 “token repeat limit reached” | 新版引入的重复限制导致合法请求被误杀，影响长文本生成。 | 5 条评论，用户报告升级后即出现，紧急需回退或配置开关。 |
| [#17272](https://github.com/ollama/ollama/issues/17272) | 响应频繁被截断 / 中断 | 生成中途提前结束却返回 `finish_reason="stop"`，导致上下文丢失，严重影响可用性。 | 5 条评论，含 WARN 日志，社区开始怀疑 KV cache 或调度问题。 |
| [#17274](https://github.com/ollama/ollama/issues/17274) | qwen2.5 tool call 被丢失：空 content、无 tool_calls 但有 40 token | 说明工具调用的解析链在特定 schema（array‑of‑string）下失效，进一步暴露工具调用的脆弱性。 | 1 条评论，但已引起多个开发者关注。 |
| [#17276](https://github.com/ollama/ollama/issues/17276) | qwen3‑coder 工具调用解析失败（malformed XML） | 特定模型输出格式导致解析异常，提示需要更容错的解析器。 | 0 评论，刚刚上报，值得跟踪。 |
| [#17080](https://github.com/ollama/ollama/issues/17080) | Ollama 0.31.1 在某些 Linux 环境崩溃 | 段错误堆栈指向 libthread_db，暗示可能是多线程或信号处理 bug。 | 4 条评论，用户表示降级到 0.24.0 可用，需回溯 regression。 |
| [#17069](https://github.com/ollama/ollama/issues/17069) | GPU 发现偶尔 30s watchdog 超时（LXC+Docker passthrough） | 在容器环境下 GPU 初始化不稳定，导致强制回退到 CPU，影响性能可预测性。 | 4 条评论，社区提供重启容器临时规避方案，期待更健壮的检测逻辑。 |

---

### 4. 重要 PR 进展（精选 10 条）  

| PR | 标题 | 作用 / 修复内容 |
|----|------|----------------|
| [#17278](https://github.com/ollama/ollama/pull/17278) | server: warm prefill cache across model unload/reload | 新增 `OLLAMA_PREFILL_CACHE` 环境变量，在模型卸载/重新加载时保存前填充 KV，减少首次推理延迟；配有 8 GiB LRU 上限和 fail‑open 机制。 |
| [#17277](https://github.com/ollama/ollama/pull/17277) | fix: report actual VRAM available for AMD integrated GPUs (APUs) | 修正 AMD iGPU（如 Radeon 8060S / Ryzen AI Max+）显存可用量报错，使得调度能正确利用全部显存。 |
| [#17259](https://github.com/ollama/ollama/pull/17259) | server: detect download stalls before the first byte | 增加对范围请求连接成功但未收到首字节的 stalled 检测，防止模型拉取卡在最后一个 blob。 |
| [#17059](https://github.com/ollama/ollama/pull/17059) | docs: clarify Claude Code context limits | 更新 Claude Code 本地模型上下文建议（64k+ → 100k+），并说明最高可达 200k。 |
| [#17025](https://github.com/ollama/ollama/pull/17025) | cuda: add CC 10.0 for linux in CUDA v12 | 为 B200 等新架构添加 compute capability 10.0 支持，解决 #12583（NVIDIA B200 GPU）的兼容性问题。 |
| [#17273](https://github.com/ollama/ollama/pull/17273) | docs: update retirements | 更新已退出维护的模型/版本列表，保持文档准确性。 |
| [#17229](https://github.com/ollama/ollama/pull/17229) | cmd: remove standalone agent command | 将 `agent` 子命令合并到主 launch 路径，简化 CLI 并避免重复维护。 |
| [#17224](https://github.com/ollama/ollama/pull/17224) | cmd/tui/chat: render bold emphasis consistently across markdown | 改进 Markdown 渲染，确保 **加粗** 在换行后不丢失，提升聊天 UI 阅读体验。 |
| [#17244](https://github.com/ollama/ollama/pull/17244) | build: bump Linux toolchain to GCC 13 | 修复因 GCC 11 生成的 AMX 代码导致 Sapphire Rapids（Intel）CPU 后端崩溃的问题，对应 #17006、#17205。 |
| [#17268](https://github.com/ollama/ollama/pull/17268) | fix: prevent sidebar open animation on initial load | 侧边栏在首次加载时直接呈现打开状态，去掉不必要的动画，提升首屏感知速度。 |

> 注：以上 PR 均在最近 24 小时内更新（创建或更新时间），涵盖了性能优化、硬件兼容、CLI 交互以及文档细节等多个维度。

---

### 5. 功能需求趋势（从 Issues 中提炼）  

| 趋势 | 具体表现 | 代表性 Issue |
|------|----------|--------------|
| **工具/函数调用健壮性** | 工具调用返回解析失败、空 content、无 tool_calls、模型特定 schema 失效 | #8588, #12884, #17274, #17276 |
| **GPU 显存检测与调度** | 不正确的可用 VRAM 报告（AMD iGPU）、CUDA 错误、watchdog 超时、多模型互相抢占显存 | #16957, #17069, #16719, #17277 |
| **模型加载与稳定性** | 段错误、SIGSEGV、启动崩溃（特定 CPU/平台、容器环境） | #17080, #17006, #17205, #17236 |
| **token 限制与重复检测** | 新版引入的 token repeat limit 导致合法请求被中断 | #17270 |
| **API 一致性** | 想通过 `create` API 使用 Modelfile、`/api/chat` 工具调用返回字段不完整 | #8793, #15758 |
| **用户体验（UI/CLI）** | 聊天侧边栏动画、Markdown 加粗渲染、模型下拉框加载失败 | #17269, #17224, #17268 |
| **文档与示例** | Claude Code 上下文限制、模型退役说明、'intégration test' 改进 | #17059, #17273, #16560 |

总体来看，**工具调用的可靠性**、**硬件检测（尤其是显存报错）**、**以及模型加载崩溃** 是社区最关注的三大方向，其次是 API 一致性与用户体验细节。

---

### 6. 开发者关注点（痛点 & 高频需求）  

1. **段错误 / 崩溃** – 特定硬件（Sapphire Rapids、VMware ESXi、老旧 NVIDIA 1080Ti）以及容器环境下的 `llama-server` 段错误频繁出现，开发者希望得到更详细的栈追踪和运行时检查（如 ASAN、sigsegv 处理）。  
2. **GPU/显存报错** – 对于 AMD APU 和混存架构，`available` VRAM 常被低估，导致调度保守或出现 OOM；同时 NVIDIA 驱动/CUDA 版本不兼容引起立即退出。社区期望统一的显存查询接口和更宽容的回退策略。  
3. **工具/函数调用解析脆弱** – 在返回的 JSON、XML 或自定义格式中，解析器易被意外字符破坏，导致 tool_calls 丢失或空响应。需增加容错、schema 验证以及更明确的错误上报。  
4. **Token 重复限制回归** – 0.32.1 引入的重复检测导致合法长文本请求被误杀，开发者请求提供可配置的阈值或开关，以免影响现有工作流。  
5. **API 与 CLI 功能对齐** – Modelfile 仅在 `ollama create` CLI 中可用，API 端缺失此能力阻碍自动化 CI/CD 流水线；此外，工具调用返回的 `tool_calls` 字段有时缺失，需要补全。  
6. **用户界面细节** – 模型下拉框加载失败、侧边栏动画、Markdown 加粗渲染等虽然属于 UI 层面，却直接影响日常使用体验，开发者倾向于在后续版本中加入更稳健的前端测试。  

> 建议：后续版本可在 **错误上报**、**硬件适配层**、**工具调用解析器**以及 **API 功能完整性** 上投入更多资源，以缓解目前社区反馈最为集中的痛点。  

---  

*本日报基于官方仓库的最近 24 小时数据（Issues、PR、Release）编撰，旨在为 Ollama 开发者提供快速的技术动态概览。*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

**llama.cpp 社区动态日报（2026‑07‑21）**  

---

### 1️⃣ 今日速览  
- 今天发布了 **b10075** 小版本，主要在 Hexagon 后端新增了 **CLAMP** 算子，并同步更新了 macOS/iOS 二进制包。  
- 社区活跃度仍然很高，Issue 与 PR 均保持每日几十条更新，重点聚焦在 **算子兼容性、WebUI 功能细化以及跨后端（CUDA/Vulkan/WebGPU/SYCL）性能与稳定性**。  
- 功能需求方面，**持久化 MCP 服务状态、推理按钮默认行为、模型能力信息暴露** 成为近期最受关注的方向。

---

### 2️⃣ 版本发布  

| 版本 | 发布时间 | 主要变更 | 链接 |
|------|----------|----------|------|
| **b10075** | 2026‑07‑21（过去 24 h） | - Hexagon 后端添加 **CLAMP** 操作（#25934）<br>- 更新了 macOS Apple Silicon (arm64) 二进制包（含 KleidiAI 可选构建） | <https://github.com/ggml-org/llama.cpp/releases/tag/b10075> |

> 除上述版本外，过去 24 h 未出现其他正式 Release。

---

### 3️⃣ 社区热点 Issues（按评论数与影响力挑选的 10 条）

| # | 标题 | 评论 | 关键点 | 社区反应 |
|---|------|------|--------|----------|
| [#14909](https://github.com/ggml-org/llama.cpp/issues/14909) | **Feature Request: Implement missing ops from backends** | 45 | 跟踪各后端（CUDA、Vulkan、WebGPU、SYCL 等）尚未实现的算子，呼吁补全。 | 点赞 7，讨论活跃，众多贡献者提供补丁思路。 |
| [#23577](https://github.com/ggml-org/llama.cpp/issues/23577) | **Eval bug: MTP with Qwen3.6 27B outputs repeated //// after long session** | 29 | 长时间推理时出现连续斜线输出，疑似 MTP（多 token 预测）状态未正确复位。 | 👍 3，多位用户复现，期待修复。 |
| [#25349](https://github.com/ggml-org/llama.cpp/issues/25349) | **Persist/Sync MCP servers activation status in WebUI across restarts** | 15 | WebUI 中 MCP（模型控制平面）服务的激活状态应在服务器重启后保持。 | 👍 0 但讨论热烈，功能需求明确。 |
| [#24616](https://github.com/ggml-org/llama.cpp/issues/24616) | **Add dp4a emulation via dp2a on CUDA** | 13 | 在不支持 dp4a 的旧 GPU 上通过 dp2a 模拟四路整数乘累加，以提升量化推理性能。 | 👍 2，CUDA 用户关注。 |
| [#24343](https://github.com/ggml-org/llama.cpp/issues/24343) | **Misc. bug: E llama_init_from_model: failed to initialize the context: Gemma4Assistant** | 11 | 初始化 Gemma‑4‑12B‑it‑qat‑UD‑Q4_K 模型时失败，涉及上下文分配或张量不匹配。 | 👍 32（最高点赞），表明该问题影响广泛。 |
| [#21545](https://github.com/ggml-org/llama.cpp/issues/21545) | **server/webui: Add model capabilities information (instruction, embedding etc.)** | 10 | 在 WebUI 中展示模型是否支持指令跟随、嵌入等能力，便于用户选择。 | 👍 2，需求明确。 |
| [#24051](https://github.com/ggml-org/llama.cpp/issues/24051) | **Misc. bug: `reasoningEffort` not pre‑settable in the json web ui options** | 9 | WebUI 未提供默认 reasoning 努力等级的设置项，导致每次对话需要手动调整。 | 👍 2，已有 PR（#25846）尝试解决。 |
| [#25629](https://github.com/ggml-org/llama.cpp/issues/25629) | **Typo BitnetForCausalLM vs BitNetForCausalLM** (已关闭) | 8 | 拼写错误导致 Python/Bash 脚本找不到模型类。 | 👍 0，修复后闭合。 |
| [#23209](https://github.com/ggml-org/llama.cpp/issues/23209) | **Compile bug: CUDA compilation failed** | 7 | CMake 完成后仍未检测到 GPU，疑似编译标志或依赖缺失。 | 👍 0，CUDA 用户持续报告。 |
| [#24712](https://github.com/ggml-org/llama.cpp/issues/24712) | **Eval bug: Warning Message - sched_reserve: layer 0 is assigned to device CPU but the fused Gated Delta Net tensor is assigned to device CUDA0** | 7 | 异常的设备分配警告，暗示张量调度在混合 CPU/CUDA 场景下不一致。 | 👍 1，亟需检查调度逻辑。 |

> 以上 Issue 覆盖了 **功能缺失、推理稳定性、WebUI 可用性、跨后端兼容性** 四大主题，是今日社区讨论的核心。

---

### 4️⃣ 重要 PR 进展（挑选的 10 条，重点说明功能或修复）

| PR | 标题 | 主要内容 | 链接 |
|----|------|----------|------|
| [#25948](https://github.com/ggml-org/llama.cpp/pull/25948) | **feat(ui): add symbolic math support to JS sandbox via nerdamer** | 将 **nerdamer** 库引入 WebUI JavaScript 沙箱，提供符号求导、方程求解等高级数学能力，显著提升 LLM 在数学推理任务中的表现。 | https://github.com/ggml-org/llama.cpp/pull/25948 |
| [#25942](https://github.com/ggml-org/llama.cpp/pull/25942) | **Add DMMV Q4_K and Q6_K ESIMD kernels (SYCL)** | 为 SYCL 后端实现优化的 **ESIMD** 矩阵乘 kernel（Q4_K/Q6_K），在 Intel PVC 上相比基础 DMMV 提升达 **1.76×** 吞吐。 | https://github.com/ggml-org/llama.cpp/pull/25942 |
| [#25846](https://github.com/ggml-org/llama.cpp/pull/25846) | **ui: Add a "Default" option for the reasoning selector** | 为 WebUI 推理按钮增加 **Default** 选项，若选中则不向服务器发送 `enable_thinking`，由服务器根据 `--reasoning` flag 与 chat template 决定是否启用思考过程，解决 #24051、#24141 等问题。 | https://github.com/ggml-org/llama.cpp/pull/25846 |
| [#25947](https://github.com/ggml-org/llama.cpp/pull/25947) | **convert : add missing return after setting tekken vocab** | 修复 **tekken.json** 缺失 `tokenizer.json` 时的转换报错（`AttributeError: 'MistralCommonTokenizer' object has no attribute 'vocab'`），确保 HF → GGUF 转换的健壮性。 | https://github.com/ggml-org/llama.cpp/pull/25947 |
| [#25950](https://github.com/ggml-org/llama.cpp/pull/25950) | **tests: fix quantize buffer overrun in test-quantize-fns** | 用动态 `ggml_row_size` 替换硬编码缓冲区大小，彻底消除 ASan 检测到的堆越界，提升量化单元测试可靠性。 | https://github.com/ggml-org/llama.cpp/pull/25950 |
| [#25880](https://github.com/ggml-org/llama.cpp/pull/25880) | **sycl: fix use-after-return of the SDPA scale in the oneDNN flash-attention path** | 解决因异步 memcpy 导致的 **use‑after‑return** bug，恢复 SYCL oneDNN flash‑attention 路径的单设备无同步快速路径，消除长上下文垃圾输出。 | https://github.com/ggml-org/llama.cpp/pull/25880 |
| [#24957](https://github.com/ggml-org/llama.cpp/pull/24957) | **Improve Server OAI Responses API streaming compatibility** | 调整 SSE 序号生成方式，使其与 **OpenAI Responses API** 官方事件 schema 完全匹配，提升流式输出的兼容性。 | https://github.com/ggml-org/llama.cpp/pull/24957 |
| [#23759](https://github.com/ggml-org/llama.cpp/pull/23759) | **ggml‑cpu : fix op_expm1 precision loss for small inputs** | 将 `expf(x)-1.0f` 替换为标准 `expm1f(x)`，消除近零输入时的灾难性取消误差，提升 CPU 端数值精度。 | https://github.com/ggml-org/llama.cpp/pull/23759 |
| [#22780](https://github.com/ggml-org/llama.cpp/pull/22780) | **convert : add `--fuse-qkv` flag to fuse Q/K/V into QKV during HF-to-GGUF conversion** | 新增转换选项，在 HF→GGUF 过程中可选择将 Q/K/V 权重合并为单一融合张量，以降低显存占用并在后端支持 fused‑QKV 时获取性能提升。 | https://github.com/ggml-org/llama.cpp/pull/22780 |
| [#25784](https://github.com/ggml-org/llama.cpp/pull/25784) | **[WIP] DeepseekV4 MTP** | 实验性地为 DeepSeek‑V4 加入 **多 token 预测（MTP）** 支持，初步基测显示在 `--spec-draft-n-max=2` 时可获得约 **50%** 的速度提升。 | https://github.com/ggml-org/llama.cpp/pull/25784 |

> 这些 PR 体现了社区在 **前端可用性（UI/JS 沙箱）、后端算子优化（SYCL/CUDA）、转换工具健壮性以及新特性探索（MTP、融合 QKV）** 四个维度的持续投入。

---

### 5️⃣ 功能需求趋势（从所有 Issues 中提炼）

| 趋势 | 说明 | 代表性 Issue |
|------|------|--------------|
| **持久化／状态同步** | 用户希望 WebUI 中的 MCP 服务、推理按钮默认状态、会话设置等在服务器重启后保持。 | #25349（MCP 持久化）、#24051（reasoningEffort 默认）、#25846（默认推理选项） |
| **模型能力透明化** | 希望在服务器或 WebUI 中直接展示模型是否支持指令跟随、嵌入、多模态等元信息，以便自动化选择。 | #21545（模型能力信息） |
| **跨后端算子完整性** | 各硬件后端（CUDA、Vulkan、WebGPU、SYCL、Hexagon）缺失的算子成为阻碍性能与兼容性的瓶颈，社区普遍要求补齐。 | #14909（缺失算子追踪） |
| **量化与精度优化** | 对低位量化（Q4_K、Q6_K、dp4a 模拟等）的性能提升需求强烈，尤其在旧 GPU 或专用加速器上。 | #24616（dp4a via dp2a）、#25942（SYCL ESIMD kernel） |
| **推理稳定性与长会话** | 长时间对话出现重复符号、设备分配警告、上下文泄漏等问题，成为高频 bug 报告。 | #23577（MTP 

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*