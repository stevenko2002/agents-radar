# AI CLI 工具社区动态日报 2026-07-22

> 生成时间: 2026-07-22 01:19 UTC | 覆盖工具: 12 个

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

### **今日重點摘要（2026-07-22）**

1. **Claude Code v2.1.217** 發布
   - 新增 emoji 快捷輸入自動補全功能，並修復 VS Code 文本選擇複製問題。
   [GitHub](https://github.com/anthropics/claude-code/releases/tag/v2.1.217)

2. **OpenAI Codex v0.145.0** 穩定版發布
   - 引入分頁線程歷史、子代理支持、內存管理等核心功能，並修復 Windows 卡頓問題。
   [GitHub](https://github.com/openai/codex/releases/tag/v0.145.0)

3. **Gemini CLI v0.52.0-nightly.20260721.gacae7124b** 更新
   - 重點修復變量展開繞過漏洞（GHSA-wpqr-6v78-jr5g）及 A2A 服務器安全加固。
   [GitHub](https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.20260720.gacae7124b...v0.52.0-nightly.20260721.gacae7124b)

4. **GitHub Copilot CLI v1.0.74-0** 發布
   - 新增 `/model plan` 命令，支援動態切換模型；改進搜索匹配容錯性。
   [GitHub](https://github.com/github/copilot-cli/releases/tag/v1.0.74-0)

5. **Qwen Code v0.20.1** 正式版發布
   - 修復子代理工具調用參數互斥問題、Windows 安裝器 SHA-256 校驗失敗等關鍵 Bug。
   [GitHub](https://github.com/QwenLM/qwen-code/releases/tag/v0.20.1)

6. **Pi v0.81.1** 發布
   - 提供可驗證的發布源歸檔，並強化 llama.cpp 模型管理功能。
   [GitHub](https://github.com/earendil-works/pi/releases/tag/v0.81.1)

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

⚠️ Skills 摘要生成失败。

---

# **Claude Code 社区日报 | 2026-07-22**

---

## **📌 今日速览**
Claude Code 在过去 24 小时内发布了 **v2.1.217** 版本，新增了 **emoji 快捷输入自动补全** 功能，并修复了多个关键问题。社区热度集中在 **Fable 5 模型权限问题**（Max 计划用户无法使用）、**GitHub 连接器权限回归**（影响所有仓库访问）、**VS Code 文本选择复制问题** 等。同时，多个 **MCP 工具链接失败** 的问题也引发了开发者关注。

---

## **🚀 版本发布**
### **v2.1.217** ([链接](https://github.com/anthropics/claude-code/releases/tag/v2.1.217))
**更新内容：**
- **新增**：
  - 输入框支持 **emoji 快捷输入自动补全**（如 `:heart:` → ❤️），可通过 `emojiCompletionEnabled` 设置禁用。
  - **磁盘满/会话保存失败** 时显示警告。
- **修复**：
  - 部分平台下的 **文本选择复制问题**（Issue [#61021](https://github.com/anthropics/claude-code/issues/61021)）。

---

## **🔥 社区热点 Issues（Top 10）**
| **Issue** | **标题** | **重要性** | **社区反应** |
|-----------|----------|------------|--------------|
| **[#71542](https://github.com/anthropics/claude-code/issues/71542)** | GitHub 连接器无法访问任何仓库内容（账户级别回归） | ⭐⭐⭐⭐⭐ | **41 评论 | 36 👍** - 影响所有用户，可能是权限系统重大问题。 |
| **[#79337](https://github.com/anthropics/claude-code/issues/79337)** | Fable 5 在 Max 计划上需求信用（7月20日起） | ⭐⭐⭐⭐⭐ | **26 评论 | 9 👍** - Max 用户无法使用 Fable 5，模型权限逻辑存在争议。 |
| **[#45810](https://github.com/anthropics/claude-code/issues/45810)** | 插件市场“更新”按钮无法点击 | ⭐⭐⭐⭐ | **15 评论 | 6 👍** - UI 交互性问题，影响插件更新体验。 |
| **[#61021](https://github.com/anthropics/claude-code/issues/61021)** | VS Code 中无法正常复制粘贴文本 | ⭐⭐⭐⭐ | **14 评论 | 8 👍** - 已在 v2.1.217 修复，但仍有用户反馈。 |
| **[#62476](https://github.com/anthropics/claude-code/issues/62476)** | 对话记录默认 30 天后自动删除 | ⭐⭐⭐⭐ | **11 评论 | 13 👍** - 数据持久化问题，影响工作流程。 |
| **[#79360](https://github.com/anthropics/claude-code/issues/79360)** | Fable 5 在 Max 计划上因权限提示无法使用 | ⭐⭐⭐⭐ | **5 评论 | 30 👍** - 与 [#79337](https://github.com/anthropics/claude-code/issues/79337) 相关，权限系统混乱。 |
| **[#70733](https://github.com/anthropics/claude-code/issues/70733)** | Cowork 标签页缺失（Windows 11） | ⭐⭐⭐ | **6 评论 | 0 👍** - 协作功能异常，影响团队使用。 |
| **[#72181](https://github.com/anthropics/claude-code/issues/72181)** | 桌面端无法清除“Recent”文件夹列表 | ⭐⭐⭐ | **5 评论 | 10 👍** - 用户体验问题，缺乏数据清理功能。 |
| **[#79986](https://github.com/anthropics/claude-code/issues/79986)** | Windows MSIX 版本 MCP 工具调用失败 | ⭐⭐⭐ | **0 评论 | 1 👍** - 新版本引入的回归问题。 |
| **[#79983](https://github.com/anthropics/claude-code/issues/79983)** | MCP 工具调用需求批准后仍报错 | ⭐⭐⭐ | **0 评论 | 0 👍** - 权限系统不一致，影响开发者集成。 |

---

## **🛠️ 重要 PR 进展（Top 10）**
| **PR** | **标题** | **状态** | **说明** |
|--------|----------|----------|----------|
| **[#79898](https://github.com/anthropics/claude-code/pull/79898)** | AWS Claude Apps Gateway 部署示例 | ✅ **已合并** | 提供 AWS 部署模板，支持 Amazon Bedrock。 |
| **[#79889](https://github.com/anthropics/claude-code/pull/79889)** | Hookify 插件入口点无需 `CLAUDE_PLUGIN_ROOT` 即可运行 | 🔄 **待审** | 修复插件路径依赖问题。 |
| **[#79873](https://github.com/anthropics/claude-code/pull/79873)** | Hookify 插件 `event: prompt` 规则修复 | 🔄 **待审** | 修复用户提示事件未触发的问题。 |
| **[#79647](https://github.com/anthropics/claude-code/pull/79647)** | Hookify 插件导入路径独立于目录名 | 🔄 **待审** | 解决插件目录名变更导致的导入问题。 |
| **[#79645](https://github.com/anthropics/claude-code/pull/79645)** | Hookify 插件以 UTF-8 读取规则文件 | 🔄 **待审** | 修复 Windows 平台编码问题。 |
| **[#79644](https://github.com/anthropics/claude-code/pull/79644)** | Hookify 插件命令中正确引用 `${CLAUDE_PLUGIN_ROOT}` | 🔄 **待审** | 修复路径包含空格时的命令执行问题。 |
| **[#79620](https://github.com/anthropics/claude-code/pull/79620)** | 文本转语音（TTS）可访问性 Hook | 🔄 **待审** | 为残障用户提供朗读功能。 |
| **[#79636](https://github.com/anthropics/claude-code/pull/79636)** | Hookify 规则文件名前缀修复 | 🔄 **待审** | 统一规则文件命名规范。 |
| **[#79635](https://github.com/anthropics/claude-code/pull/79635)** | PR 审查工具包文档修复 | 🔄 **待审** | 修复文档链接错误。 |
| **[#78532](https://github.com/anthropics/claude-code/pull/78532)** | GCP Gateway Terraform 示例修复 | 🔄 **待审** | 修复 PG16 数据库部署问题。 |

---

## **📊 功能需求趋势**
从近期 Issues 反馈中，社区最关注的功能方向包括：

1. **模型权限与计费**
   - Fable 5 在 Max 计划上的权限争议（[#79337](https://github.com/anthropics/claude-code/issues/79337)、[#79360](https://github.com/anthropics/claude-code/issues/79360)）。
   - 计费系统透明度不足，用户无法预期成本。

2. **IDE 集成与文本交互**
   - VS Code 终端文本选择复制问题（[#61021](https://github.com/anthropics/claude-code/issues/61021)）。
   - 插件市场 UI 交互性问题（[#45810](https://github.com/anthropics/claude-code/issues/45810)）。

3. **数据持久化与会话管理**
   - 对话记录默认删除（[#62476](https://github.com/anthropics/claude-code/issues/62476)）。
   - 会话恢复功能缺失（[#79975](https://github.com/anthropics/claude-code/issues/79975)）。

4. **MCP 工具链稳定性**
   - MCP 服务器调用失败（[#79986](https://github.com/anthropics/claude-code/issues/79986)、[#79983](https://github.com/anthropics/claude-code/issues/79983)）。
   - 浏览器扩展连接问题（[#79985](https://github.com/anthropics/claude-code/issues/79985)）。

5. **协作与团队功能**
   - Cowork 标签页缺失（[#70733](https://github.com/anthropics/claude-code/issues/70733)）。
   - 项目管理工具缺失（[#79948](https://github.com/anthropics/claude-code/issues/79948)）。

---

## **🔍 开发者关注点**
1. **权限系统混乱**
   - GitHub 连接器权限回归（[#71542](https://github.com/anthropics/claude-code/issues/71542)）和 Fable 5 计费问题（[#79337](https://github.com/anthropics/claude-code/issues/79337)）反映了权限管理的不一致性。
   - **建议**：统一权限模型，提供清晰的计费说明。

2. **MCP 生态稳定性**
   - 多个 MCP 工具调用失败的问题（[#79986](https://github.com/anthropics/claude-code/issues/79986)、[#79983](https://github.com/anthropics/claude-code/issues/79983)）影响了开发者集成体验。
   - **建议**：加强 MCP 服务器兼容性测试，提供调试工具。

3. **跨平台体验**
   - Windows 平台的文件路径问题（[#79644](https://github.com/anthropics/claude-code/issues/79644)）和 VS Code 交互问题（[#61021](https://github.com/anthropics/claude-code/issues/61021)）仍需优化。
   - **建议**：增加平台特定的兼容性测试。

4. **数据持久化需求**
   - 用户对对话记录删除策略（[#62476](https://github.com/anthropics/claude-code/issues/62476)）和会话恢复（[#79975](https://github.com/anthropics/claude-code/issues/79975)）的反馈强烈。
   - **建议**：提供可配置的数据保留策略。

---
**📌 总结**：Claude Code 在功能完善和生态建设方面持续推进，但权限系统、跨平台体验和数据管理仍是社区关注的焦点。建议官方加强文档和工具链稳定性，以提升开发者体验。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# **OpenAI Codex 社区动态日报**
**日期：2026-07-22 | 数据来源：GitHub（openai/codex）**

---

## **📢 今日速览**
OpenAI Codex 在今日发布了 **v0.145.0** 稳定版，引入了 **分页线程历史、子代理支持、内存管理** 等核心功能。同时，社区热议的 **Windows 性能问题、多代理加密回归、IDE 集成故障** 等 Issue 仍在持续发酵，多个 PR 致力于修复 Windows 沙盒、TUI 导航及网络策略等底层问题。

---

## **🚀 版本发布**
### **Codex v0.145.0**
**发布时间**：2026-07-22
**链接**：[Release Notes](https://github.com/openai/codex/releases/tag/v0.145.0)

#### **🔥 新功能**
- **分页线程历史**：支持高效恢复、搜索、持久化命名、子代理支持及记忆功能（#33364, #33907, #34085）。
- **配置迁移**：扩展 `/import` 命令，支持迁移 **Cursor、Claude Code** 的设置、MCP 服务器、插件、会话及命令。
- **子代理加密**：修复 **MultiAgentV2** 加密消息导致的任务审计轨迹缺失问题（#28058）。

#### **🐛 修复**
- 修复 **Windows 11** 频繁卡顿问题（#20214）。
- 优化 **Windows 沙盒启动** 的权限检查和 ACL 刷新（#34629）。
- 修复 **TUI 导航键** 在 Windows 上的误识别问题（#34625）。

---

## **🔥 社区热点 Issues（Top 10）**
以下 Issue 按 **关注度（👍 + 评论数）** 和 **影响范围** 排序：

| **Issue** | **标题** | **关键点** | **社区反应** |
|-----------|----------|------------|--------------|
| **[#20214](https://github.com/openai/codex/issues/20214)** | [Windows 11] Codex App 频繁卡顿/卡死 | AMD Ryzen 5 5600 + 32GB RAM 环境下，Codex App 仍频繁冻结，影响开发体验。 | 👍70 | 63 条评论，用户普遍反映**性能瓶颈严重**。 |
| **[#28058](https://github.com/openai/codex/issues/28058)** | [CLI] 多代理加密回归：任务审计轨迹缺失 | 启用 **MultiAgentV2** 后，加密消息导致任务历史不可读。 | 👍99 | 26 条评论，影响**企业级协作**。 |
| **[#9508](https://github.com/openai/codex/issues/9508)** | [限流] 周限流重置机制不确定 | 周限流重置时间**随机**，影响用户规划。 | 👍31 | 46 条评论，用户呼吁**透明化限流策略**。 |
| **[#32149](https://github.com/openai/codex/issues/32149)** | [Windows] 安装程序在 UAC 提示前失败 | Windows 10/11 下，Codex 安装程序在 UAC 提示前崩溃。 | 👍5 | 24 条评论，影响**新用户体验**。 |
| **[#26951](https://github.com/openai/codex/issues/26951)** | [VS Code] Remote-SSH 环境下 IDE 扩展加载失败 | CLI 正常，但 VS Code Remote-SSH 环境下扩展**无法加载**。 | 👍1 | 16 条评论，影响**远程开发场景**。 |
| **[#25921](https://github.com/openai/codex/issues/25921)** | [桌面端] Crashpad 崩溃转储文件无限增长 | 每天生成 **5GB+** 崩溃转储文件，占用磁盘空间。 | 👍5 | 15 条评论，影响**长期使用稳定性**。 |
| **[#34260](https://github.com/openai/codex/issues/34260)** | [Windows] 进程清理循环导致 WMI 资源耗尽 | `taskkill.exe` 进程无限清理，导致系统**资源枯竭**。 | 👍8 | 14 条评论，严重影响**系统稳定性**。 |
| **[#26478](https://github.com/openai/codex/issues/26478)** | [Windows] 拼写检查显示“无建议” | Windows 原生拼写检查正常，但 Codex **无法提供建议**。 | 👍23 | 11 条评论，影响**编辑体验**。 |
| **[#3968](https://github.com/openai/codex/issues/3968)** | [功能请求] 后台终端会话支持 | 希望 CLI 支持**后台运行终端会话**（类似 Claude Code）。 | 👍33 | 8 条评论，用户期待**长时间任务支持**。 |
| **[#27597](https://github.com/openai/codex/issues/27597)** | [VS Code] Remote-SSH 环境下扩展加载失败 | 与 #26951 类似，但影响范围更广。 | 👍3 | 14 条评论，影响**远程开发者**。 |

---

## **🛠️ 重要 PR 进展（Top 10）**
以下 PR 按 **合并时间** 排序：

| **PR** | **标题** | **功能/修复** | **状态** |
|--------|----------|--------------|----------|
| **[#34643](https://github.com/openai/codex/pull/34643)** | 迁移登录 HTTP 构造到 `HttpClient` | 统一 HTTP 客户端管理，提升**安全性和可维护性**。 | ✅ 已合并 |
| **[#34641](https://github.com/openai/codex/pull/34641)** | 加固沙盒环境的代理设置 | 修复 **Linux 沙盒** 下代理权限问题，支持受限环境。 | ✅ 已合并 |
| **[#34636](https://github.com/openai/codex/pull/34636)** | TUI 在启动失败时保持开放 | 修复 **TUI 退出** 问题，提升用户体验。 | ✅ 已合并 |
| **[#34631](https://github.com/openai/codex/pull/34631)** | 迁移代理身份到共享 HTTP 客户端 | 统一代理身份管理，提升**网络请求安全性**。 | ✅ 已合并 |
| **[#34629](https://github.com/openai/codex/pull/34629)** | 加固 Windows 沙盒启动 | 修复 **Windows 沙盒** 权限检查，防止启动失败。 | ✅ 已合并 |
| **[#34625](https://github.com/openai/codex/pull/34625)** | 修复 Windows TUI 导航键处理 | 修复 **Windows 终端** 下导航键误识别问题。 | ✅ 已合并 |
| **[#34624](https://github.com/openai/codex/pull/34624)** | 使用作业对象终止 Windows 进程树 | 确保 **Windows 进程树** 正确清理，防止资源泄漏。 | ✅ 已合并 |
| **[#34620](https://github.com/openai/codex/pull/34620)** | 添加 exec-server 网络策略回调类型 | 为 **exec-server** 添加网络策略支持，提升安全性。 | ✅ 已合并 |
| **[#34613](https://github.com/openai/codex/pull/34613)** | 通过限制 SID 路由 Windows 沙盒代理流量 | 优化 **Windows 沙盒** 代理流量管理。 | ✅ 已合并 |
| **[#34605](https://github.com/openai/codex/pull/34605)** | 允许 `/new` 和 `/clear` 命令命名会话 | 支持 **会话命名**，提升用户体验。 | ✅ 已合并 |

---

## **📊 功能需求趋势**
从社区反馈中提炼出 **开发者最关注的功能方向**：

1. **🖥️ IDE 集成优化**
   - **VS Code Remote-SSH** 环境下扩展加载失败（#26951, #27597）。
   - **Xcode** 登录问题（#28078, #34639）。
   - **自定义编辑器** 支持（#10428）。

2. **⚡ 性能与稳定性**
   - **Windows 卡顿/崩溃**（#20214, #34260, #34327）。
   - **内存/磁盘占用**（#25921, #34061）。
   - **限流机制透明化**（#9508, #16423）。

3. **🔒 安全与加密**
   - **多代理加密回归**（#28058）。
   - **沙盒权限管理**（#34629, #34613）。

4. **🔄 会话与历史管理**
   - **分页线程历史**（v0.145.0 新功能）。
   - **会话命名与恢复**（#34605, #27104）。

5. **🌐 远程开发支持**
   - **Remote-SSH/容器环境** 兼容性（#26951, #27597）。
   - **后台终端会话**（#3968）。

---

## **🔍 开发者关注点**
### **🚨 高优先级痛点**
1. **Windows 生态系统不稳定**
   - 多个 Issue 报告 **Windows 11/10** 下的**卡顿、崩溃、安装失败**，严重影响开发体验。
   - **解决方案**：优化沙盒权限管理、进程清理机制（PR #34624, #34629）。

2. **多代理协作安全性**
   - **MultiAgentV2 加密** 导致任务历史不可读，影响企业级协作。
   - **解决方案**：修复加密逻辑（v0.145.0）。

3. **IDE 集成体验**
   - **VS Code、Xcode** 环境下的登录、扩展加载问题频发，影响开发者工作流。
   - **解决方案**：统一 HTTP 客户端、加固沙盒（PR #34643, #34631）。

4. **资源管理与限流**
   - **Crashpad 崩溃转储** 无限增长、周限流机制不透明。
   - **解决方案**：优化磁盘清理、限流策略透明化（Issue #25921, #9508）。

### **💡 社区期待的功能**
- **后台终端会话**（#3968）。
- **会话命名与恢复**（#34605）。
- **自定义编辑器支持**（#10428）。
- **更好的远程开发支持**（Remote-SSH、容器）。

---
**📌 总结**：
Codex 在 **v0.145.0** 中交付了 **分页线程历史、子代理支持** 等核心功能，但 **Windows 生态稳定性、IDE 集成、多代理安全性** 仍是社区最关注的问题。开发团队正通过 **沙盒加固、HTTP 客户端统一、TUI 优化** 等 PR 逐步解决这些痛点。建议开发者关注 **Windows 兼容性改进** 和 **IDE 集成优化** 的后续更新。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# **Gemini CLI 社区动态日报 | 2026-07-22**

---

## **📌 今日速览**
Gemini CLI 在 **v0.52.0-nightly** 版本中继续活跃开发，社区围绕 **本地模型支持（Ollama/LM Studio）**、**子代理稳定性**及**安全性改进**展开讨论。多个高优先级 Bug（如 `token drain loop`、`shell 命令卡顿`）仍在修复中，而新功能方向（如 AST 感知工具、Auto Memory 优化）持续推进。安全团队近期重点关注 **变量展开绕过漏洞**（GHSA-wpqr-6v78-jr5g）的修复。

---

## **📦 版本发布**
- **v0.52.0-nightly.20260721.gacae7124b**
  - [完整更新日志](https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.20260720.gacae7124b...v0.52.0-nightly.20260721.gacae7124b)
  - **主要变更**：未披露具体细节，但包含近期 PR 的功能集成（如 [#28470](https://github.com/google-gemini/gemini-cli/pull/28470) 的安全加固）。

---

## **🔥 社区热点 Issues（Top 10）**

| **Issue** | **优先级** | **标签** | **社区关注度** | **关键问题** |
|-----------|-----------|----------|---------------|--------------|
| **[#5938](https://github.com/google-gemini/gemini-cli/issues/5938)** | P3 | `enhancement`, `local-models` | 👍37 | **本地模型支持**：企业用户强烈需求离线模型（Ollama/LM Studio）以满足数据隐私要求。 |
| **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** | P1 | `bug`, `subagent` | 👍2 | **子代理恢复误报**：`codebase_investigator` 在达到最大轮次后错误报告 `GOAL` 成功，隐藏中断状态。 |
| **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** | P1 | `bug`, `generalist-agent` | 👍8 | **通用代理卡顿**：代理在执行简单任务（如文件夹创建）时无限等待，需手动取消。 |
| **[#28362](https://github.com/google-gemini/gemini-cli/issues/28362)** | P1 | `bug`, `token-drain` | 👍0 | **Token 耗尽循环**：新报告的严重 Bug，可能导致资源无限消耗。 |
| **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** | P1 | `bug`, `shell` | 👍3 | **Shell 命令卡顿**：命令执行后界面仍显示“等待输入”，实际已完成。 |
| **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** | P2 | `feature`, `AST-aware` | 👍1 | **AST 感知工具**：探索是否支持基于抽象语法树的文件读取/搜索，提升代码导航精度。 |
| **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)** | P2 | `bug`, `auto-memory` | 👍0 | **Auto Memory 重试机制**：低信号会话被无限重试，导致资源浪费。 |
| **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)** | P2 | `bug`, `security` | 👍0 | **Auto Memory 日志泄露**：敏感内容在模型上下文中未及时脱敏，存在泄露风险。 |
| **[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)** | P2 | `feature`, `destructive-behavior` | 👍1 | **破坏性操作防护**：代理在 Git 操作中过度使用 `--force` 或 `reset`，需更安全的默认行为。 |
| **[#22093](https://github.com/google-gemini/gemini-cli/issues/22093)** | P2 | `bug`, `subagents` | 👍0 | **子代理权限问题**：v0.33.0 后子代理被自动启用，即使配置中已禁用。 |

---

## **🛠️ 重要 PR 进展（Top 10）**

| **PR** | **状态** | **标签** | **核心变更** |
|--------|----------|----------|--------------|
| **[#28403](https://github.com/google-gemini/gemini-cli/pull/28403)** | OPEN | `security`, `priority/p1` | **修复变量展开绕过漏洞**（GHSA-wpqr-6v78-jr5g），阻止 `$VAR`/`${VAR}` 在 Bash/PowerShell 中的恶意展开。 |
| **[#28470](https://github.com/google-gemini/gemini-cli/pull/28470)** | CLOSED | `security`, `a2a-server` | **A2A 服务器安全加固**：防止零点击远程代码执行（RCE）和工作区污染，引入任务级隔离。 |
| **[#28469](https://github.com/google-gemini/gemini-cli/pull/28469)** | OPEN | `core`, `model-fallback` | **模型回退会话 ID 旋转**：修复 `gemini-2.5-flash` 回退时的状态性 API 错误。 |
| **[#28472](https://github.com/google-gemini/gemini-cli/pull/28472)** | OPEN | `core`, `authentication` | **认证回退机制修复**：解决 Gemini Code Assist 代理模式下的 `FatalAuthenticationError`（代码 41）。 |
| **[#28397](https://github.com/google-gemini/gemini-cli/pull/28397)** | OPEN | `core`, `performance` | **异步化 Shell 工具**：移除同步 I/O 操作，解决 React Ink 终端 UI 的卡顿问题。 |
| **[#28389](https://github.com/google-gemini/gemini-cli/pull/28389)** | OPEN | `agent`, `time-budget` | **事件驱动代理状态转换超时**：添加真实时间预算，防止无限循环。 |
| **[#28387](https://github.com/google-gemini/gemini-cli/pull/28387)** | OPEN | `core`, `settings` | **修复 `customDeepMerge` 循环引用崩溃**：解决设置管理器因循环对象导致的 `RangeError`。 |
| **[#28474](https://github.com/google-gemini/gemini-cli/pull/28474)** | OPEN | `telemetry`, `skills` | **工具调用遥测增强**：为技能名称添加维度，提升对代理行为的可观测性。 |
| **[#28169](https://github.com/google-gemini/gemini-cli/pull/28169)** | OPEN | `evals`, `coverage` | **评估覆盖率报告命令**：新增 `eval:coverage` 命令，报告内置工具的评估覆盖情况。 |
| **[#28305](https://github.com/google-gemini/gemini-cli/pull/28305)** | OPEN | `evals`, `tool-call-formatter` | **评估失败摘要增强**：为失败的评估添加工具调用时间线格式化，便于调试。 |

---

## **📊 功能需求趋势**
从 Issues 和 PRs 中提炼出 **社区最关注的 5 大方向**：

1. **本地/离线模型支持**（Issue [#5938](https://github.com/google-gemini/gemini-cli/issues/5938)）
   - 企业用户对 Ollama、LM Studio 等本地模型的强烈需求，涉及数据隐私和合规性。
   - **相关 PR**：无直接实现，但可能依赖 MCP（Model Context Protocol）集成。

2. **代理稳定性与性能**（Issues [#21409](https://github.com/google-gemini/gemini-cli/issues/21409)、[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)、[#28362](https://github.com/google-gemini/gemini-cli/issues/28362)）
   - 通用代理卡顿、子代理恢复误报、Token 耗尽循环等高优先级 Bug。
   - **相关 PR**：[#28389](https://github.com/google-gemini/gemini-cli/pull/28389)（时间预算）、[#28397](https://github.com/google-gemini/gemini-cli/pull/28397)（异步化）。

3. **安全性增强**（Issues [#26525](https://github.com/google-gemini/gemini-cli/issues/26525)、PRs [#28403](https://github.com/google-gemini/gemini-cli/pull/28403)、[#28470](https://github.com/google-gemini/gemini-cli/pull/28470)）
   - Auto Memory 日志泄露、变量展开绕过漏洞、A2A 服务器 RCE 防护。
   - **趋势**：安全团队正在系统性地审计和修复潜在风险。

4. **AST 感知工具与代码导航**（Issues [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)、PRs [#28305](https://github.com/google-gemini/gemini-cli/pull/28305)）
   - 探索基于抽象语法树的文件读取/搜索，提升代码理解精度。
   - **相关 PR**：[#28169](https://github.com/google-gemini/gemini-cli/pull/28169)（评估覆盖率）。

5. **破坏性操作防护**（Issue [#22672](https://github.com/google-gemini/gemini-cli/issues/22672)）
   - 代理在 Git 操作中过度使用 `--force` 或 `reset`，需更安全的默认行为或用户确认机制。

---

## **💡 开发者关注点**
基于 Issues 和 PRs 的反馈，总结 **开发者最关注的痛点**：

1. **代理可靠性**
   - 通用代理和子代理的无限循环、卡顿问题频发（如 [#21409](https://github.com/google-gemini/gemini-cli/issues/21409)），影响开发体验。
   - **建议**：增加代理执行超时、状态回滚机制，并优化任务调度逻辑。

2. **安全性与合规性**
   - Auto Memory 的日志泄露风险（[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)）和变量展开漏洞（[#28403](https://github.com/google-gemini/gemini-cli/pull/28403)）引发关注。
   - **建议**：强化敏感数据脱敏、加固输入验证，并定期进行安全审计。

3. **性能优化**
   - Shell 工具的同步 I/O 操作导致终端 UI 卡顿（[#28397](https://github.com/google-gemini/gemini-cli/pull/28397)），影响交互体验。
   - **建议**：全面异步化 I/O 操作，并优化内存管理。

4. **本地模型集成**
   - 企业用户对离线模型（Ollama/LM Studio）的需求强烈（[#5938](https://github.com/google-gemini/gemini-cli/issues/5938)），但当前仅支持云端模型。
   - **建议**：考虑通过 MCP 或自定义适配器支持本地模型，同时保持与云端模型的一致性。

5. **评估与调试工具**
   - 评估覆盖率不足（[#28169](https://github.com/google-gemini/gemini-cli/pull/28169)）和工具调用遥测缺失（[#28474](https://github.com/google-gemini/gemini-cli/pull/28474)）影响开发者调试。
   - **建议**：扩展评估套件，增加工具调用的详细日志和可视化。

---
**📌 总结**：Gemini CLI 在 2026-07-22 的动态中，安全性和稳定性成为重中之重，而本地模型支持、AST 感知工具等功能方向也在持续推进。开发者期待更可靠的代理行为、更完善的调试工具，以及更灵活的模型集成选项。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-07-22 | 数据来源：GitHub Copilot CLI 仓库**

---

## 🔥 今日速览
GitHub Copilot CLI 在 v1.0.74-0 版本中新增了 `/model plan` 命令，允许用户在计划模式下动态切换模型。同时，社区在过去24小时内涌现大量关于 **MCP 资源支持**、**计划模式回归问题** 和 **模型配置优化** 的讨论，反映了用户对多模型切换和工具链集成的强烈需求。

---

## 📦 版本发布
### v1.0.74-0
**新增功能**：
- `/model plan`（或 `/model --plan`）：允许用户在计划模式下动态选择模型（支持传入模型ID、`off` 清除或无参数打开模型选择器）。退出计划模式后自动恢复会话默认模型。

**改进功能**：
- 搜索匹配时对会话标题的空白字符差异更具容错性。

---

## 🚨 社区热点 Issues（按热度排序）

### 🔴 高优先级（影响核心功能）
1. **[#4188](https://github.com/github/copilot-cli/issues/4188) Regression on plan-mode**
   - **问题**：计划模式在最新版本中阻止 Shell 命令执行（如 `gh cli`），导致无法通过 CLI 读取/创建 Issue。
   - **影响**：严重影响计划模式的自动化工作流。
   - **社区反应**：👍 2（高关注度），被标记为回归问题。

2. **[#1305](https://github.com/github/copilot-cli/issues/1305) Support CIMD for Remote OAuth MCP Servers**
   - **问题**：远程 OAuth MCP 服务器需支持 CIMD（Client-Initiated OAuth Dynamic Client Registration）标准，而非预注册。
   - **影响**：扩展 MCP 服务器的认证灵活性。
   - **社区反应**：👍 26（最高点赞数），开发者强烈期待。

3. **[#4012](https://github.com/github/copilot-cli/issues/4012) Bug with BYOK: reasoning effort not supported for model "glm-5.2:cloud"**
   - **问题**：自定义 BYOK 模型配置在使用 `--reasoning-effort max` 时报错，尽管配置本身有效。
   - **影响**：限制用户对推理深度的控制。
   - **社区反应**：👍 16，企业用户反馈集中。

4. **[#4163](https://github.com/github/copilot-cli/issues/4163) copilot CLI 1.0.71 does not reap child processes — zombies accumulate**
   - **问题**：子进程僵尸化（Zombie 进程）无法被回收，每分钟约产生 2 个。
   - **影响**：长期运行的会话会导致资源泄漏。
   - **社区反应**：👍 0（低关注度但高风险），技术债务。

### 🟡 中优先级（功能增强）
5. **[#2193](https://github.com/github/copilot-cli/issues/2193) Default model configuration for /fleet subagents**
   - **问题**：希望为 `/fleet` 子代理配置默认模型（全局或项目级别）。
   - **影响**：提升多代理场景的模型一致性。
   - **社区反应**：👍 14，企业级需求。

6. **[#1518](https://github.com/github/copilot-cli/issues/1518) Support MCP resources and prompts**
   - **问题**：当前仅支持 MCP 的 `tools`，缺少 `resources` 和 `prompts` 支持。
   - **影响**：限制 MCP 服务器的功能集成。
   - **社区反应**：👍 14，MCP 生态建设核心议题。

7. **[#4183](https://github.com/github/copilot-cli/issues/4183) Auto-compaction does not prevent CAPI 5 MB failure**
   - **问题**：长时间工具调用会话因累积的工具历史导致 CAPI 请求体超过 5MB 限制。
   - **影响**：模型调用失败。
   - **社区反应**：👍 5，性能瓶颈。

8. **[#4207](https://github.com/github/copilot-cli/issues/4207) Show per-subagent AI credit usage breakdown in /usage**
   - **问题**：`/usage` 命令仅显示累积用量，缺少子代理的明细拆分。
   - **影响**：成本追踪不透明。
   - **社区反应**：👍 5，企业级计费需求。

### 🟢 低优先级（体验优化）
9. **[#4212](https://github.com/github/copilot-cli/issues/4212) Prompt box invisible in tmux (dark-on-dark)**
   - **问题**：在 tmux 中，提示框和菜单项因深色主题显示异常。
   - **影响**：用户体验下降。
   - **社区反应**：👍 0，但反馈集中。

10. **[#4202](https://github.com/github/copilot-cli/issues/4202) Built-in view reports "Path does not exist" in 1.0.73**
    - **问题**：v1.0.73 的 `view` 工具无法识别现有文件路径。
    - **影响**：文件查看功能失效。
    - **社区反应**：👍 0，回归问题。

---

## 🔧 重要 PR 进展
| PR | 标题 | 状态 | 说明 |
|----|------|------|------|
| [#3163](https://github.com/github/copilot-cli/pull/3163) | ViewSonic monitor | OPEN | 监视器支持（与 Issue #2591、#3561、#3559 相关）。 |

> 注：过去24小时仅 1 个 PR 更新，社区贡献活跃度待提升。

---

## 📊 功能需求趋势分析
从 Issues 中提炼出以下 **社区最关注的功能方向**（按热度排序）：
1. **MCP 生态完善**：
   - 资源（`resources`）和提示（`prompts`）支持（#1518、#1803、#3073）。
   - OAuth 动态注册（CIMD）支持（#1305）。
   - 远程 MCP 服务器的认证优化（#4203）。

2. **模型管理增强**：
   - 计划模式下的模型动态切换（#4188、#4190）。
   - BYOK 模型的推理深度（`reasoning-effort`）支持（#4012、#4196）。
   - 子代理的默认模型配置（#2193）。

3. **性能与稳定性优化**：
   - 僵尸进程回收（#4163）。
   - 内存/上下文管理（#4183、#3976）。
   - 会话状态管理（#2595）。

4. **企业级功能**：
   - 计费明细拆分（#4207）。
   - 权限控制（#4193、#4005）。

---

## 💡 开发者关注点总结
### 🔥 高频痛点
1. **计划模式回归**：
   - Shell 命令被阻止（如 `gh cli`），严重影响自动化工作流（#4188）。
   - 解决方案：重新评估计划模式的权限策略。

2. **MCP 集成复杂度**：
   - 缺乏对 `resources` 和 `prompts` 的支持，限制了 MCP 服务器的功能集成（#1518）。
   - 远程 OAuth 服务器的认证流程不够灵活（#1305、#4203）。

3. **模型配置混乱**：
   - BYOK 模型的推理深度参数不一致（#4012）。
   - 子代理的模型配置需要重复设置（#2193）。

4. **资源泄漏与性能**：
   - 僵尸进程无法回收（#4163）。
   - 大型仓库的搜索工具（`tgrep`）内存占用无上限（#3976）。

### 🚀 高频需求
1. **更细粒度的权限控制**：
   - 允许沙盒会话独立编辑 `plan.md`（#4193）。
   - 支持自定义代理工具别名（如 `skill` 工具，#4209）。

2. **透明的成本追踪**：
   - 子代理的 AI 信用用量明细（#4207）。
   - 可配置的请求重试次数（#4210）。

3. **跨平台体验优化**：
   - tmux/屏幕中的 UI 渲染问题（#4212、#4213）。
   - 远程开发环境的文件路径识别（#4202、#4201）。

---
**总结**：GitHub Copilot CLI 正在快速迭代，但 **MCP 生态集成**、**模型管理灵活性** 和 **企业级稳定性** 是当前社区最关注的三大方向。开发者期待更强的自定义能力和更低的维护成本。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# **Kimi Code CLI 社区动态日报**
**日期：2026-07-22**

---

## **今日速览**
1. **社区活跃度高**：过去24小时内共新增4个Issue和1个PR，问题集中在**UI渲染异常、键盘输入失效、Shell模式输出过长**等核心功能上。
2. **Bug修复需求迫切**：多个Issue涉及**工具调用失效（k2.5模型）**、**Goal模式无限循环**等关键功能，反映出稳定性问题亟待解决。

---

## **版本发布**
**无新版本发布**（最近一次Release为 `0.28.1`，发布于2026-07-21）。

---

## **社区热点 Issues**
以下为过去24小时内**最受关注**的Issue（按影响范围排序）：

| **Issue** | **标题** | **重要性** | **社区反应** | **链接** |
|-----------|----------|------------|--------------|----------|
| **#2474** | UI界面抖动并重新渲染整个对话 | ⭐⭐⭐⭐⭐ | 2个👍，1条评论 | [查看](https://github.com/MoonshotAI/kimi-cli/issues/2474) |
| **#2527** | k2.5模型工具调用完全失效 + Goal模式无限循环 | ⭐⭐⭐⭐⭐ | 0👍，高频复现 | [查看](https://github.com/MoonshotAI/kimi-cli/issues/2527) |
| **#2528** | Shell模式输出过长导致卡顿 | ⭐⭐⭐⭐ | 0👍，影响交互体验 | [查看](https://github.com/MoonshotAI/kimi-cli/issues/2528) |
| **#2529** | 键盘数字键输入无响应 | ⭐⭐⭐⭐ | 0👍，Windows用户反馈 | [查看](https://github.com/MoonshotAI/kimi-cli/issues/2529) |
| **#2468** | Shell模式下后台进程阻塞主进程 | ⭐⭐⭐⭐ | 关联PR #2530 | [查看](https://github.com/MoonshotAI/kimi-cli/issues/2468) |

**其他Issue**：
- [#2531](https://github.com/MoonshotAI/kimi-cli/issues/2531)（新增）：Linux下UI渲染异常（待确认）
- [#2532](https://github.com/MoonshotAI/kimi-cli/issues/2532)（新增）：模型响应延迟过高（用户反馈）

---

## **重要 PR 进展**
以下为过去24小时内**最受关注**的PR：

| **PR** | **标题** | **功能/修复** | **状态** | **链接** |
|--------|----------|---------------|----------|----------|
| **#2530** | `fix(shell): stop blocking until timeout when a detached child holds the pipes` | 修复Shell模式下后台进程阻塞主进程的问题 | ⏳ **待合并** | [查看](https://github.com/MoonshotAI/kimi-cli/pull/2530) |
| **#2526** | `feat: add auto-completion for shell commands` | 新增Shell命令自动补全功能 | ⏳ **待合并** | [查看](https://github.com/MoonshotAI/kimi-cli/pull/2526) |
| **#2525** | `fix(ui): prevent unnecessary re-renders in conversation` | 优化UI渲染逻辑，减少不必要的重绘 | ⏳ **待合并** | [查看](https://github.com/MoonshotAI/kimi-cli/pull/2525) |

**其他PR**：
- [#2524](https://github.com/MoonshotAI/kimi-cli/pull/2524)：修复Windows下键盘输入问题（关联Issue #2529）
- [#2523](https://github.com/MoonshotAI/kimi-cli/pull/2523)：优化k2.5模型工具调用逻辑（关联Issue #2527）

---

## **功能需求趋势**
从近期Issue和PR分析，社区**最关注的功能方向**包括：

1. **UI/UX稳定性**
   - 重复渲染问题（Issue #2474）
   - 键盘输入响应（Issue #2529）
   - Windows平台兼容性

2. **Shell模式优化**
   - 输出过长卡顿（Issue #2528）
   - 后台进程阻塞（Issue #2468）

3. **模型功能增强**
   - k2.5工具调用失效（Issue #2527）
   - Goal模式无限循环

4. **性能优化**
   - 模型响应延迟（Issue #2532）
   - 内存占用优化

---

## **开发者关注点**
1. **稳定性问题严重**
   - UI渲染异常、工具调用失效等核心功能频繁出现Bug，影响用户体验。
   - **建议**：加强回归测试，优先修复高频Issue。

2. **跨平台兼容性**
   - Windows用户反馈键盘输入问题（Issue #2529），需重点关注。
   - **建议**：增加平台特定的输入事件监听。

3. **Shell模式体验**
   - 输出过长和后台进程阻塞问题（Issue #2468、#2528）亟需解决。
   - **建议**：引入输出截断机制，优化进程管理。

4. **模型工具调用**
   - k2.5模型工具调用完全失效（Issue #2527）可能涉及API兼容性。
   - **建议**：与Moonshot团队确认k2.5模型的工具调用规范。

---
**数据来源**：[GitHub - MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)
**编辑**：AI开发工具分析师
**免责声明**：本报告仅基于公开Issue和PR数据生成，不代表官方立场。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# **OpenCode 社区动态日报 | 2026-07-22**

---

## **1. 今日速览**
OpenCode 社区今日 **无新版本发布**，但 **内存问题讨论热度持续上升**（Issue #20695 评论数达119），同时 **桌面端布局切换争议不断**（如 Issue #37012 要求保留旧版布局）。多个 **性能与稳定性问题** 仍在收集中，开发者需关注 **Windows ARM64、WSL 兼容性** 及 **订阅服务异常** 的修复进展。

---

## **2. 版本发布**
📌 **无新版本发布**（过去24小时内）。

---

## **3. 社区热点 Issues（Top 10）**

| **Issue** | **标题** | **重要性** | **社区反应** | **链接** |
|-----------|----------|------------|--------------|----------|
| **#20695** | [OPEN] Memory Megathread | 🔥 **极高** | 119条评论，90个👍。社区集中反馈 **内存泄漏/占用过高** 问题，开发者呼吁提供 **堆快照** 协助调试。 | [链接](https://github.com/anomalyco/opencode/issues/20695) |
| **#37012** | [FEATURE] : 保留旧版布局选项 | 🔥 **高** | 26条评论，27个👍。用户强烈要求 **保留旧版布局**，因新布局缺少 **工作空间/工作树** 功能。 | [链接](https://github.com/anomalyco/opencode/issues/37012) |
| **#37790** | [BUG] Go订阅付费成功但余额不足 | 🔥 **高** | 10条评论。用户反馈 **Stripe付款成功但系统显示余额不足**，导致功能无法使用。 | [链接](https://github.com/anomalyco/opencode/issues/37790) |
| **#31119** | [BUG] SQLite错误：无此列 `name` | 🔥 **高** | 14条评论，15个👍。用户升级后出现 **数据库列缺失** 错误，影响正常使用。 | [链接](https://github.com/anomalyco/opencode/issues/31119) |
| **#34652** | [BUG] Anthropic提供商嵌套数组参数解析失败 | 🔥 **中** | 5条评论。工具调用时 **JSON字符串嵌套数组** 解析错误，导致 `SchemaError`。 | [链接](https://github.com/anomalyco/opencode/issues/34652) |
| **#37546** | [BUG] Web端无法切换回旧布局且缺少工作空间 | 🔥 **中** | 4条评论，5个👍。用户升级后 **无法回滚布局**，且新布局 **不支持工作空间**。 | [链接](https://github.com/anomalyco/opencode/issues/37546) |
| **#19130** | [BUG] Windows ARM64 TUI初始化失败 | 🔥 **中** | 12条评论，8个👍。ARM64平台 **TUI无法启动**，但非交互命令正常。 | [链接](https://github.com/anomalyco/opencode/issues/19130) |
| **#33028** | [BUG] 子代理工具调用后挂起 | 🔥 **中** | 7条评论，3个👍。子代理调用 `bash` 工具后 **流式响应永久挂起**，需手动终止。 | [链接](https://github.com/anomalyco/opencode/issues/33028) |
| **#38095** | [FEATURE] 首个托管连接器（Google Calendar等） | 🔥 **中** | 1条评论。建议添加 **内置OAuth** 的SaaS连接器（如Google、Slack），提升自动化能力。 | [链接](https://github.com/anomalyco/opencode/issues/38095) |
| **#38201** | [BUG] TUI在大文件项目中输入冻结 | 🔥 **中** | 1条评论。项目包含 **大文件（如MP3、PNG）** 时，TUI **输入框失效**，需优化文件扫描逻辑。 | [链接](https://github.com/anomalyco/opencode/issues/38201) |

---

## **4. 重要 PR 进展（Top 10）**

| **PR** | **标题** | **类型** | **进展** | **链接** |
|--------|----------|----------|----------|----------|
| **#38206** | 修复提供商缓存系统消息不全 | 🐛 **Bug修复** | 修复 `provider/transform.ts` 仅缓存前2条系统消息的问题，支持 **插件扩展的系统消息**。 | [链接](https://github.com/anomalyco/opencode/pull/38206) |
| **#38186** | 延迟通知状态加载 | 🐛 **Bug修复** | 修复 **WSL侧载服务器** 未就绪时导致的 **桌面端启动失败** 问题。 | [链接](https://github.com/anomalyco/opencode/pull/38186) |
| **#38080** | 显示运行中的Shell命令 | ✨ **功能增强** | 在TUI中 **实时显示Shell命令执行状态**，提升调试体验。 | [链接](https://github.com/anomalyco/opencode/pull/38080) |
| **#38172** | 支持生成器函数（Generator） | ✨ **功能增强** | 为 **代码生成模式** 添加对 **同步/异步生成器函数** 的支持。 | [链接](https://github.com/anomalyco/opencode/pull/38172) |
| **#38204** | 等待GitHub Copilot模型同步 | 🐛 **Bug修复** | 修复 **Copilot模型初始化延迟** 导致的功能异常。 | [链接](https://github.com/anomalyco/opencode/pull/38204) |
| **#38184** | 发现Copilot API端点 | 🐛 **Bug修复** | 修复 **Copilot OAuth V2流程** 中API端点发现失败的问题。 | [链接](https://github.com/anomalyco/opencode/pull/38184) |
| **#38162** | 优化快照仓库设置 | ⚡ **性能优化** | 将 **8个Git配置子进程** 优化为 **1次原子写入**，提升快照初始化速度。 | [链接](https://github.com/anomalyco/opencode/pull/38162) |
| **#37833** | 添加NVIDIA NIM DeepSeek兼容性 | 🐛 **Bug修复** | 修复 **DeepSeek V4模型** 在NVIDIA NIM上 **挂起** 的问题。 | [链接](https://github.com/anomalyco/opencode/pull/37833) |
| **#38200** | 添加Solidity语法高亮 | ✨ **功能增强** | 为 **Solidity智能合约** 添加 **语法高亮** 支持。 | [链接](https://github.com/anomalyco/opencode/pull/38200) |
| **#37973** | 使Mini模式调整大小可选 | 🐛 **Bug修复** | 修复 `--mini` 模式下 **终端调整大小** 导致的 **屏幕刷新问题**。 | [链接](https://github.com/anomalyco/opencode/pull/37973) |

---

## **5. 功能需求趋势**
从近期Issues分析，社区最关注的 **功能方向** 包括：
1. **布局与UI体验**
   - 保留旧版布局（#37012、#37546）
   - 改进Web端导航体验（#37981）
   - 优化TUI输入框（#38201）

2. **性能与稳定性**
   - 内存占用优化（#20695）
   - 子代理工具调用挂起（#33028）
   - Windows ARM64兼容性（#19130）

3. **订阅与计费**
   - Go订阅余额异常（#37790）
   - 多模型API错误（#38131）

4. **开发者工具链**
   - MCP采样支持（#11948）
   - 托管连接器（#38095）

---

## **6. 开发者关注点**
🔍 **高频痛点**：
- **内存管理**：用户反馈频繁出现内存泄漏，开发者需提供 **堆快照收集工具**。
- **布局切换争议**：新布局缺少旧版功能（如工作空间），用户体验受损。
- **平台兼容性**：Windows ARM64、WSL侧载服务器启动延迟等问题亟需修复。
- **订阅服务**：付费成功但余额异常的问题影响用户体验。

💡 **建议**：
- 优先解决 **内存问题** 和 **布局回滚** 功能。
- 加强 **跨平台兼容性测试**（ARM64、WSL）。
- 完善 **订阅服务监控**，避免类似 #37790 的问题重复出现。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# **Pi 社区动态日报 | 2026-07-22**

---

## **📰 今日速览**
Pi 社区今日发布了 **v0.81.1** 版本，重点强化了 **可验证的发布源归档** 和 **llama.cpp 模型管理** 功能。同时，社区活跃度高，过去24小时内 **50条 Issues 更新**，**23条 PR 合并**，多个 **严重 Bug** 被紧急修复（如 `streamFunction` 异常、自动压缩失效等）。开发者对 **本地 LLM 集成** 和 **稳定性优化** 的需求持续增长。

---

## **🚀 版本发布**
### **v0.81.1** | [GitHub Release](https://github.com/earendil-works/pi/releases/tag/v0.81.1)
**核心更新：**
- **可验证发布源归档**：GitHub Releases 现提供 **确定性构建的源码归档**（含校验和），支持从源码重新构建独立二进制文件。
  🔗 [构建指南](https://github.com/earendil-works/pi/blob/v0.81.1/README.md)
- **llama.cpp 模型管理增强**：支持通过 **llama.cpp 路由器** 动态搜索/下载 Hugging Face 模型，并实时加载/卸载模型。
  🔗 [文档](https://github.com/earendil-works/pi/blob/v0.81.0/packages/coding-agent/docs/llama-cpp.md)

---

## **🔥 社区热点 Issues（Top 10）**
以下 Issue 按 **关注度（👍 + 评论数）** 和 **影响范围** 筛选，涵盖 **Bug 修复、功能需求、架构优化** 等关键方向：

| **Issue** | **标题** | **状态** | **👍** | **社区反应** | **重要性** |
|-----------|----------|----------|--------|--------------|------------|
| [#3357](https://github.com/earendil-works/pi/issues/3357) | [官方本地 LLM 提供商扩展](https://github.com/earendil-works/pi/issues/3357) | ✅ **已关闭** | 43 | 讨论热烈，核心需求：**动态模型列表拉取**（如 `llama.cpp/ollama`）。开发者期待统一接口。 | ⭐⭐⭐⭐⭐ |
| [#6278](https://github.com/earendil-works/pi/issues/6278) | [Claude 新模型编辑工具兼容性问题](https://github.com/earendil-works/pi/issues/6278) | ✅ **已关闭** | 9 | **20% 编辑失败率**，因 LLM 返回非法 `edit[]` 字段（如 `new_text_x`）。严重影响 **代码编辑流程**。 | ⭐⭐⭐⭐ |
| [#6915](https://github.com/earendil-works/pi/issues/6915) | [v0.81.0 升级后崩溃](https://github.com/earendil-works/pi/issues/6915) | ✅ **已关闭** | 2 | **关键 Bug**：`streamFunction is not a function` 导致 Pi 退出。社区反馈升级后 **立即触发**。 | ⭐⭐⭐⭐⭐ |
| [#6747](https://github.com/earendil-works/pi/issues/6747) | [Markdown 渲染扩展 API](https://github.com/earendil-works/pi/issues/6747) | 🔄 **进行中** | 2 | **功能需求**：允许扩展 **无损修改** Agent 消息的 Markdown 渲染（如公式渲染）。社区期待 **模块化渲染器**。 | ⭐⭐⭐⭐ |
| [#5653](https://github.com/earendil-works/pi/issues/5653) | [迁移离开 Shrinkwrap](https://github.com/earendil-works/pi/issues/5653) | 🔄 **进行中** | 0 | **架构问题**：`@earendil-works/pi-ai` 和 `@earendil-works/pi-coding-agent` 依赖冲突导致 **模块隔离**。影响 **扩展开发**。 | ⭐⭐⭐⭐ |
| [#6879](https://github.com/earendil-works/pi/issues/6879) | [自动压缩失效](https://github.com/earendil-works/pi/issues/6879) | 🔄 **进行中** | 0 | **严重稳定性问题**：上下文超过 100% 后 **不触发压缩**，仅在 API 拒绝时触发。导致 **长时间会话崩溃**。 | ⭐⭐⭐⭐⭐ |
| [#6920](https://github.com/earendil-works/pi/issues/6920) | [自动补全崩溃](https://github.com/earendil-works/pi/issues/6920) | ✅ **已关闭** | 0 | **关键 Bug**：输入 `/` 时因 `value.startsWith` 非函数报错。影响 **所有用户**。 | ⭐⭐⭐⭐⭐ |
| [#6911](https://github.com/earendil-works/pi/issues/6911) | [OpenAI SDK 重试策略问题](https://github.com/earendil-works/pi/issues/6911) | ✅ **已关闭** | 0 | **性能风险**：SDK 使用 `Retry-After` **无限制睡眠**，导致 **长时间阻塞**。需强制 `maxRetries=0`。 | ⭐⭐⭐⭐ |
| [#6817](https://github.com/earendil-works/pi/issues/6817) | [Windows 路径模式匹配失效](https://github.com/earendil-works/pi/issues/6817) | 🔄 **进行中** | 0 | **跨平台 Bug**：`src/**/*.ts` 在 Windows 下 **无法匹配文件**。影响 **代码搜索工具**。 | ⭐⭐⭐ |
| [#6932](https://github.com/earendil-works/pi/issues/6932) | [暴露系统提示变量](https://github.com/earendil-works/pi/issues/6932) | ✅ **已关闭** | 0 | **功能需求**：允许 `SYSTEM.md` 访问 **系统提示变量**（如 `{{model}}`）。提升 **自定义工作流** 灵活性。 | ⭐⭐⭐ |

---

## **🛠️ 重要 PR 进展（Top 10）**
以下 PR 按 **合并时间** 和 **影响范围** 筛选，涵盖 **功能增强、Bug 修复、架构优化**：

| **PR** | **标题** | **状态** | **功能/修复点** |
|--------|----------|----------|------------------|
| [#6913](https://github.com/earendil-works/pi/pull/6913) | [添加可验证发布源归档](https://github.com/earendil-works/pi/pull/6913) | ✅ **已合并** | 发布 **确定性源码归档**，支持从源码重建二进制文件。 |
| [#6912](https://github.com/earendil-works/pi/pull/6912) | [禁用 OpenAI/Anthropic SDK 重试睡眠](https://github.com/earendil-works/pi/pull/6912) | ✅ **已合并** | 强制 `maxRetries=0`，避免因 `Retry-After` 导致的 **长时间阻塞**。 |
| [#6909](https://github.com/earendil-works/pi/pull/6909) | [添加稳定会话条目 ID](https://github.com/earendil-works/pi/pull/6909) | ✅ **已合并** | 为会话条目添加 **稳定 ID**，解决 **会话重建** 时的冲突问题。 |
| [#6903](https://github.com/earendil-works/pi/pull/6903) | [优化外部编辑器启动速度](https://github.com/earendil-works/pi/pull/6903) | ✅ **已合并** | 将临时文件写入 **专用子目录**，避免 `/tmp` 拥塞导致的 **启动延迟**。 |
| [#6901](https://github.com/earendil-works/pi/pull/6901) | [自动压缩与分支总结重试](https://github.com/earendil-works/pi/pull/6901) | ✅ **已合并** | 为 **自动压缩** 和 **分支总结** 添加重试策略，修复 #6647。 |
| [#6927](https://github.com/earendil-works/pi/pull/6927) | [原生 OpenRouter OAuth 支持](https://github.com/earendil-works/pi/pull/6927) | 🔄 **进行中** | 为 **OpenRouter** 添加 **OAuth 流程**，支持浏览器授权。 |
| [#6928](https://github.com/earendil-works/pi/pull/6928) | [从 models.dev 同步推理选项](https://github.com/earendil-works/pi/pull/6928) | 🔄 **进行中** | 将 `models.dev` 的 **推理选项**（如 `thinking`）同步到本地模型注册表。 |
| [#6216](https://github.com/earendil-works/pi/pull/6216) | [添加 Amazon Bedrock Mantle OpenAI Responses 提供商](https://github.com/earendil-works/pi/pull/6216) | 🔄 **进行中** | 支持 **Bedrock Mantle** 的 OpenAI Responses API。 |
| [#6916](https://github.com/earendil-works/pi/pull/6916) | [添加 AgentHarness 执行工具](https://github.com/earendil-works/pi/pull/6916) | 🔄 **进行中** | 引入 `AgentHarnessTool`，支持 **自定义执行上下文**（如 `ExecutionEnvironment`）。 |
| [#6572](https://github.com/earendil-works/pi/pull/6572) | [渲染交互式用户消息中的图像块](https://github.com/earendil-works/pi/pull/6572) | 🔄 **进行中** | 在 **交互式用户消息** 中渲染图像块，并支持 **剪贴板图像附件**。 |

---

## **📊 功能需求趋势分析**
从 **Issues/PRs** 中提炼出社区最关注的 **5大功能方向**：

| **功能方向** | **热度** | **典型 Issue/PR** | **社区痛点** |
|--------------|----------|-------------------|--------------|
| **本地 LLM 集成** | ⭐⭐⭐⭐⭐ | #3357、#6928、#6216 | 统一接口、动态模型管理、Ollama/llama.cpp 支持。 |
| **稳定性与崩溃修复** | ⭐⭐⭐⭐⭐ | #6915、#6920、#6879 | `streamFunction` 异常、自动压缩失效、重试策略问题。 |
| **性能优化** | ⭐⭐⭐⭐ | #6903、#6911 | 外部编辑器启动慢、SDK 重试阻塞、临时文件管理。 |
| **扩展机制增强** | ⭐⭐⭐ | #6747、#6916 | 模块化渲染器、AgentHarness 工具链。 |
| **跨平台兼容** | ⭐⭐⭐ | #6817、#6899 | Windows 路径匹配、Termux 安装指南。 |

---

## **💡 开发者关注点总结**
1. **本地 LLM 集成需求强烈**
   - 开发者期待 **统一的模型管理接口**（如 `llama.cpp/ollama`），避免重复实现。
   - [#3357](https://github.com/earendil-works/pi/issues/3357) 的讨论显示，社区希望 Pi 能 **原生支持** 主流本地推理框架。

2. **稳定性是当前最大痛点**
   - **崩溃问题频发**（如 `streamFunction` 异常、自动压缩失效），影响 **生产环境使用**。
   - [#6915](https://github.com/earendil-works/pi/issues/6915) 和 [#6920](https://github.com/earendil-works/pi/issues/6920) 显示，用户对 **紧急修复** 的需求高于新功能。

3. **扩展机制有待完善**
   - **模块隔离问题**（如 #5653）和 **渲染器扩展**（如 #6747）需要更清晰的架构设计。
   - 开发者期待 **更灵活的工具链**（如 `AgentHarnessTool`）。

4. **跨平台支持仍需加强**
   - Windows 下的 **路径匹配** 和 Termux 的 **安装指南** 是高频反馈点。

---
**📌 后续建议：**
- 优先修复 **稳定性 Bug**（如崩溃、压缩失效）。
- 加速 **本地 LLM 集成** 的官方支持（如 `llama.cpp` 路由器）。
- 完善 **扩展机制文档**，降低开发者上手门槛。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 | 2026-07-22

---

## 🔥 今日速览
Qwen Code 在 **v0.20.1** 版本发布后，社区持续关注 **子代理（subagent）功能稳定性** 和 **Windows 安装体验** 问题。今日发布的 **v0.20.0-nightly.20260722.b98306b7e** 版本修复了遥测系统初始化顺序的问题，同时多个 **P1/P2 级别 Bug** 获得社区关注并进入修复流程。

---

## 📦 版本发布

### 🔖 v0.20.1
**发布时间**: 2026-07-22
**链接**: [Release v0.20.1](https://github.com/QwenLM/qwen-code/releases/tag/v0.20.1)

**主要变更**:
- 修复子代理工具调用时 `working_dir` 和 `isolation` 参数互斥问题（[#7315](https://github.com/QwenLM/qwen-code/issues/7315)）
- 优化启动时版本检查超时机制（[#7404](https://github.com/QwenLM/qwen-code/issues/7404)）
- 修复 Web Shell 在 `--token` 模式下刷新后权限丢失问题（[#7301](https://github.com/QwenLM/qwen-code/issues/7301)）
- 修复 Windows 安装器 `Get-FileHash` 解析失败问题（[#7118](https://github.com/QwenLM/qwen-code/issues/7118)）

---

## 🔥 社区热点 Issues（Top 10）

| Issue | 标题 | 优先级 | 状态 | 社区关注度 | 说明 |
|-------|------|--------|------|-----------|------|
| [#7156](https://github.com/QwenLM/qwen-code/issues/7156) | Bug: Subagent 静默修改主会话模型导致上下文溢出 | P1 | CLOSED | ⭐⭐⭐⭐⭐ | 子代理执行时主会话模型被静默切换，导致 400 错误重现。已通过 PR [#7459](https://github.com/QwenLM/qwen-code/pull/7459) 修复。 |
| [#7316](https://github.com/QwenLM/qwen-code/issues/7316) | Bug：OpenAI 对 `toolCall` 的特殊反应导致 `subAgent` 无法使用 | P2 | CLOSED | ⭐⭐⭐⭐ | 部分 OpenAI 兼容模型返回空 `working_dir`，导致工具调用失败。已通过 PR [#7403](https://github.com/QwenLM/qwen-code/pull/7403) 修复。 |
| [#7056](https://github.com/QwenLM/qwen-code/issues/7056) | VS Code 插件连接失败：Qwen ACP 进程意外退出 | P2 | OPEN | ⭐⭐⭐⭐ | VS Code Companion 插件无法连接 Qwen Code。社区反馈集中在 **IDE 集成稳定性**。 |
| [#7306](https://github.com/QwenLM/qwen-code/issues/7306) | 硬化工具输出预算、可观测性和工件生命周期 | P2 | OPEN | ⭐⭐⭐⭐ | 子代理工具调用的 **资源管控和可观测性** 仍需完善。已进入 Phase 2-4 开发。 |
| [#7427](https://github.com/QwenLM/qwen-code/issues/7427) | Web Shell 工件面板自动刷新时频繁报错 | P2 | OPEN | ⭐⭐⭐ | Web Shell 在自动刷新时频繁报 `Load artifacts failed`。影响 **Web UI 体验**。 |
| [#5540](https://github.com/QwenLM/qwen-code/issues/5540) | 允许恢复已完成的后台子代理 | P2 | OPEN | ⭐⭐⭐⭐ | 后台子代理完成后无法通过 `send_message` 恢复。社区期待 **会话恢复** 功能增强。 |
| [#7433](https://github.com/QwenLM/qwen-code/issues/7433) | 本地模型会话后 SDK 报告错误模型名称 | P2 | OPEN | ⭐⭐⭐ | 本地模型会话后 SDK 仍报告 `coder-model(qwen-oauth)`，影响 **模型管理透明度**。 |
| [#7452](https://github.com/QwenLM/qwen-code/issues/7452) | cronParser 解析偏离 Vixie 语义 | P2 | OPEN | ⭐⭐⭐ | cron 表达式解析与 Vixie 标准不一致，影响 **定时任务功能**。 |
| [#7118](https://github.com/QwenLM/qwen-code/issues/7118) | Windows 安装器 `Get-FileHash` 解析失败 | P2 | OPEN | ⭐⭐⭐⭐ | Windows 独立安装器在 SHA-256 校验时失败。社区反馈 **Windows 安装体验** 差。 |
| [#7384](https://github.com/QwenLM/qwen-code/issues/7384) | Token 用量记录不准确 | P2 | CLOSED | ⭐⭐⭐ | 对话删除后 Token 用量记录未清理，影响 **计费和监控**。 |

---

## 🛠️ 重要 PR 进展（Top 10）

| PR | 标题 | 状态 | 说明 |
|----|------|------|------|
| [#7403](https://github.com/QwenLM/qwen-code/pull/7403) | 修复：Agent 工具 `isolation:worktree` 时 `working_dir=""` 处理 | ✅ CLOSED | 规范化空 `working_dir` 处理，解决子代理工具调用失败问题。 |
| [#7393](https://github.com/QwenLM/qwen-code/pull/7393) | feat(core): 添加内存回忆传递遥测 | 🔄 OPEN | 为自动内存回忆功能添加传递遥测，提升 **可观测性**。 |
| [#7465](https://github.com/QwenLM/qwen-code/pull/7465) | fix(feishu): 修复媒体下载流清理问题 | 🔄 OPEN | 修复飞书媒体下载器流清理未 `await` 问题，提升 **稳定性**。 |
| [#7390](https://github.com/QwenLM/qwen-code/pull/7390) | feat(web-shell): 添加工作空间选择器按钮 | ✅ CLOSED | 为 Web Shell 添加工作空间选择器，提升 **多工作空间管理** 体验。 |
| [#7438](https://github.com/QwenLM/qwen-code/pull/7438) | fix(autofix): 保持仍为红色的检查可见 | ✅ CLOSED | 修复自动修复系统中仍为红色的检查可见性问题。 |
| [#7381](https://github.com/QwenLM/qwen-code/pull/7381) | fix(cli): 修正队列消息显示样式和顺序 | 🔄 OPEN | 修复 CLI 中队列消息显示样式和顺序问题，提升 **交互体验**。 |
| [#7268](https://github.com/QwenLM/qwen-code/pull/7268) | feat(serve): 热重载工作空间信任变更 | 🔄 OPEN | 实现工作空间信任变更热重载，无需重启守护进程。 |
| [#7459](https://github.com/QwenLM/qwen-code/pull/7459) | feat(core): 恢复后台代理花名册 | 🔄 OPEN | 恢复中断的后台代理会话，提升 **会话恢复** 能力。 |
| [#7455](https://github.com/QwenLM/qwen-code/pull/7455) | perf(startup): 懒加载 undici HTTP 客户端 | ✅ CLOSED | 将 undici HTTP 客户端懒加载，减少冷启动时间。 |
| [#7464](https://github.com/QwenLM/qwen-code/pull/7464) | fix(core): 修正 cron 步长字段语义 | 🔄 OPEN | 修正 cron 表达式步长解析，符合 Vixie 语义。 |

---

## 📈 功能需求趋势

### 🔍 社区最关注的功能方向
1. **子代理（Subagent）稳定性**
   - 子代理工具调用、会话恢复、资源管控是 **P1/P2 级别** 问题集中地。
   - 社区期待 **工具调用参数一致性** 和 **会话恢复** 功能增强。
   - 相关 Issues: [#7156](https://github.com/QwenLM/qwen-code/issues/7156), [#7316](https://github.com/QwenLM/qwen-code/issues/7316), [#5540](https://github.com/QwenLM/qwen-code/issues/5540)

2. **IDE 集成与开发者体验**
   - VS Code 插件连接失败、Windows 安装体验差是 **高频反馈**。
   - 社区期待 **IDE 插件稳定性** 和 **跨平台安装体验** 提升。
   - 相关 Issues: [#7056](https://github.com/QwenLM/qwen-code/issues/7056), [#7118](https://github.com/QwenLM/qwen-code/issues/7118)

3. **Web UI 与可观测性**
   - Web Shell 工件面板刷新报错、权限丢失、长会话渲染优化是 **UI/UX 焦点**。
   - 社区期待 **Web UI 稳定性** 和 **可观测性** 提升。
   - 相关 Issues: [#7427](https://github.com/QwenLM/qwen-code/issues/7427), [#7301](https://github.com/QwenLM/qwen-code/issues/7301)

4. **性能与资源管控**
   - 冷启动优化、工具输出预算、cron 表达式解析是 **性能与稳定性** 关注点。
   - 社区期待 **启动性能** 和 **资源管控** 功能增强。
   - 相关 Issues: [#7455](https://github.com/QwenLM/qwen-code/pull/7455), [#7306](https://github.com/QwenLM/qwen-code/issues/7306)

5. **模型管理与透明度**
   - 本地模型会话后 SDK 报告错误模型名称、Token 用量记录不准确是 **模型管理** 焦点。
   - 社区期待 **模型管理透明度** 和 **计费准确性** 提升。
   - 相关 Issues: [#7433](https://github.com/QwenLM/qwen-code/issues/7433), [#7384](https://github.com/QwenLM/qwen-code/issues/7384)

---

## 💡 开发者关注点

### 🔍 高频痛点与需求
1. **子代理工具调用参数一致性**
   - 子代理工具调用时 `working_dir` 和 `isolation` 参数互斥、空字符串处理不一致，导致工具调用失败。
   - **期待修复**: 统一工具调用参数处理逻辑，提升工具调用稳定性。

2. **IDE 插件与跨平台安装体验**
   - VS Code 插件连接失败、Windows 安装器 `Get-FileHash` 解析失败是 **高频反馈**。
   - **期待改进**: 加强 IDE 插件稳定性测试，优化 Windows 安装体验。

3. **Web UI 稳定性与可观测性**
   - Web Shell 工件面板刷新报错、权限丢失、长会话渲染优化是 **UI/UX 焦点**。
   - **期待改进**: 提升 Web UI 稳定性，增强可观测性功能。

4. **启动性能与资源管控**
   - 冷启动优化、工具输出预算、cron 表达式解析是 **性能与稳定性** 关注点。
   - **期待改进**: 优化启动性能，增强资源管控功能。

5. **模型管理透明度**
   - 本地模型会话后 SDK 报告错误模型名称、Token 用量记录不准确是 **模型管理** 焦点。
   - **期待改进**: 提升模型管理透明度，确保计费准确性。

---

如需获取更多详情，请访问 [Qwen Code GitHub 仓库](https://github.com/QwenLM/qwen-code)。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

⚠️ 摘要生成失败。

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*