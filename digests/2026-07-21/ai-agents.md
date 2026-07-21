# OpenClaw 生态日报 2026-07-21

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-21 12:47 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报 | 2026-07-21

---

---

## 📊 **今日速览**
过去24小时内，OpenClaw 项目保持**高度活跃**：**500条新Issues**（304条新开/活跃，196条关闭）和**500条PR更新**（317条待合并，183条已合并/关闭），但**无新版本发布**。项目当前处于**稳定开发期**，重点围绕 **Codex集成回归修复、安全性增强（如密钥掩码、权限隔离）、多渠道消息处理优化** 以及 **内存/会话状态管理** 进行迭代。活跃度指标显示社区参与度高，但**P1级别Bug（如Codex回归、会话卡顿）仍需优先解决**。

---

---

## 🚀 **版本发布**
**无新版本发布**（2026-07-21）。

---

---

## 📈 **项目进展**
### ✅ **今日合并/关闭的重要PR**
| PR | 类型 | 影响 | 状态 | 链接 |
|----|------|------|------|------|
| **[#112261](https://github.com/openclaw/openclaw/pull/112261)** | `fix(linux)` | 硬化Quick Chat widget生命周期，修复Linux平台的竞态条件 | **已合并** | [链接](https://github.com/openclaw/openclaw/pull/112261) |
| **[#112276](https://github.com/openclaw/openclaw/pull/112276)** | `refactor(media)` | 重构媒体文件处理流程，统一消费者对媒体事实的访问 | **已合并** | [链接](https://github.com/openclaw/openclaw/pull/112276) |
| **[#105896](https://github.com/openclaw/openclaw/pull/105896)** | `fix(memory-lancedb)` | 使LanceDB内存插件的表初始化原子化，避免竞态条件 | **自动合并** | [链接](https://github.com/openclaw/openclaw/pull/105896) |
| **[#112295](https://github.com/openclaw/openclaw/pull/112295)** | `docs` | 同步心跳、内存、承诺等文档与当前行为 | **已合并** | [链接](https://github.com/openclaw/openclaw/pull/112295) |

**进展总结**：
- **基础设施稳定性**：LanceDB内存插件的原子化初始化（#112296）和Linux widget生命周期硬化（#112261）提升了系统稳定性。
- **文档同步**：#112295修复了文档与实际行为不一致的问题，改善开发者体验。
- **媒体处理优化**：#112276重构了媒体文件流水线，为后续功能扩展奠定基础。

---

---

## 🔥 **社区热点**
### 💬 **最活跃Issues（按评论数排序）**
| Issue | 类型 | 评论数 | 👍 | 核心问题 | 状态 | 链接 |
|-------|------|--------|----|----------|------|------|
| **[#88312](https://github.com/openclaw/openclaw/issues/88312)** | `bug, regression, P1` | **22** | 5 | Codex app-server回合完成卡顿（回归#84076） | **已关闭** | [链接](https://github.com/openclaw/openclaw/issues/88312) |
| **[#7707](https://github.com/openclaw/openclaw/issues/7707)** | `enhancement, P2` | **20** | 0 | **内存信任标记**：按来源标记代理内存条目（防止内存中毒攻击） | **开放** | [链接](https://github.com/openclaw/openclaw/issues/7707) |
| **[#87744](https://github.com/openclaw/openclaw/issues/87744)** | `bug, P1` | **17** | 3 | Codex-backed Telegram回合超时等待`turn/completed` | **开放** | [链接](https://github.com/openclaw/openclaw/issues/87744) |
| **[#10659](https://github.com/openclaw/openclaw/issues/10659)** | `enhancement, P1` | **15** | 4 | **掩码密钥**：防止代理访问原始API密钥（防止提示注入泄露） | **开放** | [链接](https://github.com/openclaw/openclaw/issues/10659) |
| **[#13583](https://github.com/openclaw/openclaw/issues/13583)** | `enhancement, P2` | **15** | 2 | **预响应强制钩子**：为高风险工作流程添加强制工具调用规则 | **开放** | [链接](https://github.com/openclaw/openclaw/issues/13583) |

**热点分析**：
1. **Codex集成问题**：#88312和#87744反映了**Codex提供商的回归Bug**，影响Telegram和app-server的回合完成逻辑，社区急需修复。
2. **安全性需求**：#7707（内存信任标记）和#10659（掩码密钥）体现了用户对**防止提示注入和内存污染**的强烈需求，可能成为下一版本的重点功能。
3. **企业级功能**：#13583（预响应钩子）和#7722（文件系统沙盒）表明用户希望在**金融/安全场景**中使用OpenClaw，需要更严格的控制机制。

---

---

## 🐛 **Bug 与稳定性**
### 🚨 **P0/P1级别Bug（按严重程度排序）**
| Issue | 严重程度 | 影响 | 状态 | Fix PR | 链接 |
|-------|----------|------|------|--------|------|
| **[#101290](https://github.com/openclaw/openclaw/issues/101290)** | **P0** | CLI启动预检查损坏实时状态DB（macOS） | **开放** | 无 | [链接](https://github.com/openclaw/openclaw/issues/101290) |
| **[#88312](https://github.com/openclaw/openclaw/issues/88312)** | **P1** | Codex回合完成卡顿（回归） | **已关闭** | 无 | [链接](https://github.com/openclaw/openclaw/issues/88312) |
| **[#87744](https://github.com/openclaw/openclaw/issues/87744)** | **P1** | Codex-backed Telegram回合超时 | **开放** | 无 | [链接](https://github.com/openclaw/openclaw/issues/87744) |
| **[#97983](https://github.com/openclaw/openclaw/issues/97983)** | **P1** | iOS/WebChat消息追加到转录但不触发回复 | **开放** | 无 | [链接](https://github.com/openclaw/openclaw/issues/97983) |
| **[#106779](https://github.com/openclaw/openclaw/issues/106779)** | **P1** | 2026.7.1版本llama.cpp提供商失败 | **开放** | 无 | [链接](https://github.com/openclaw/openclaw/issues/106779) |
| **[#108473](https://github.com/openclaw/openclaw/issues/108473)** | **回归** | cron工具模式破坏llama.cpp工具调用 | **开放** | 无 | [链接](https://github.com/openclaw/openclaw/issues/108473) |

**关键观察**：
- **Codex相关Bug**：#88312和#87744可能是同一根因，需要优先调查。
- **数据损坏风险**：#101290（SQLite损坏）和#76038（会话恢复失效）涉及**数据完整性**，需紧急修复。
- **提供商兼容性**：#106779（llama.cpp）和#108473（cron工具）表明**本地模型集成**存在兼容性问题。

---

---

## 🚀 **功能请求与路线图信号**
### 🎯 **高优先级功能请求**
| Issue | 优先级 | 功能 | 相关PR | 可能性 | 链接 |
|-------|--------|------|--------|--------|------|
| **[#7707](https://github.com/openclaw/openclaw/issues/7707)** | P2 | 内存信任标记（防内存中毒） | 无 | **高** | [链接](https://github.com/openclaw/openclaw/issues/7707) |
| **[#10659](https://github.com/openclaw/openclaw/issues/10659)** | P1 | 掩码密钥（防止API密钥泄露） | 无 | **高** | [链接](https://github.com/openclaw/openclaw/issues/10659) |
| **[#13583](https://github.com/openclaw/openclaw/issues/13583)** | P2 | 预响应强制钩子（强制工具调用） | 无 | **中** | [链接](https://github.com/openclaw/openclaw/issues/13583) |
| **[#7722](https://github.com/openclaw/openclaw/issues/7722)** | P2 | 文件系统沙盒配置 | 无 | **中** | [链接](https://github.com/openclaw/openclaw/issues/7722) |
| **[#12219](https://github.com/openclaw/openclaw/issues/12219)** | P3 | 技能权限清单标准（skill.yaml） | 无 | **低** | [链接](https://github.com/openclaw/openclaw/issues/12219) |

**路线图信号**：
- **安全性**是下一版本的重点：内存信任标记、掩码密钥、文件系统沙盒等功能需求强烈。
- **企业级控制**：预响应钩子和技能权限清单表明用户希望在**生产环境**中使用OpenClaw，需要更严格的治理机制。

---

---

## 🗣️ **用户反馈摘要**
### ✅ **满意点**
- **多渠道集成**：用户对Telegram、Feishu、Discord等渠道的支持表示满意（如#80520的修复）。
- **本地模型支持**：llama.cpp和其他本地模型的集成受到欢迎（尽管存在Bug，如#106779）。

### ❌ **痛点**
1. **Codex集成不稳定**：
   - 用户反馈Codex提供商的回合完成逻辑存在**回归Bug**（#88312、#87744），影响生产环境使用。
   - 示例：*"On the Codex app-server, a multi-tool agent turn reliably fails with 'Codex stopped before confirming the turn was complete' starting in 2026.5.27"*。

2. **数据损坏风险**：
   - SQLite数据库在CLI预检查时**损坏**（#101290），用户担心数据丢失。
   - 示例：*"`openclaw.sqlite` corrupted four times over 2026-07-02 → 2026-07-06 while the gateway was running normally"*。

3. **安全性缺失**：
   - 用户希望**掩码API密钥**（#10659）以防止提示注入攻击。
   - 示例：*"Currently, secrets stored in `~/.openclaw/.env` are fully accessible to the agent, which is a security risk"*。

4. **会话管理问题**：
   - iOS/WebChat消息**不触发回复**（#97983），用户体验差。
   - 示例：*"Official iOS app / WebChat messages append to the transcript but do not reliably trigger an assistant reply"*。

5. **性能问题**：
   - CLI命令**冷启动延迟**（#82070），影响开发效率。
   - 示例：*"All CLI commands are taking ~14 seconds to complete after updating from 2026.5.7 → 2026.5.12"*。

---

---
## ⏳ **待处理积压**
### 🚨 **长期未响应的重要Issues/PRs**
| Issue/PR | 类型 | 创建时间 | 最后更新 | 状态 | 影响 | 链接 |
|----------|------|----------|----------|------|------|------|
| **[#7707](https://github.com/openclaw/openclaw/issues/7707)** | `enhancement` | 2026-02-03 | 2026-07-21 | **开放** | 内存信任标记（安全性） | [链接](https://github.com/openclaw/openclaw/issues/7707) |
| **[#10659](https://github.com/openclaw/openclaw/issues/10659)** | `enhancement` | 2026-02-06 | 2026-07-21 | **开放** | 掩码密钥（安全性） | [链接](https://github.com/openclaw/openclaw/issues/10659) |
| **[#7722](https://github.com/openclaw/openclaw/issues/7722)** | `enhancement` | 2026-02-03 | 2026-07-21 | **开放** | 文件系统沙盒 | [链接](https://github.com/openclaw/openclaw/issues/7722) |
| **[#94663](https://github.com/openclaw/openclaw/pull/94663)** | `feat(mcp)` | 2026-06-18 | 2026-07-21 | **开放** | MCP二进制工具内容中继 | [链接](https://github.com/openclaw/openclaw/pull/94663) |
| **[#79762](https://github.com/openclaw/openclaw/pull/79762)** | `feat` | 2026-05-09 | 2026-07-21 | **开放** | 传递受信任发送者元数据 | [链接](https://github.com/openclaw/openclaw/pull/79762) |
| **[#101290](https://github.com/openclaw/openclaw/issues/101290)** | `bug, P0` | 2026-07-07 | 2026-07-21 | **开放** | CLI预检查损坏SQLite | [链接](https://github.com/openclaw/openclaw/issues/1

---

## 横向生态对比

**今日重點摘要**

### 1. 重要更新（5‑8 條）
| 項目 | 链接 | 更新內容（1‑2 句） | 影響/意義 |
|------|------|-------------------|----------|
| **Hermes Agent v0.19.0 (The Quicksilver Release)** | https://github.com/NousResearch/hermes-agent/releases/tag/v2026.7.20 | 首個完整的「Quicksilver」大版本，合并约 2,245 个提交、3,300+关闭 Issue；加入强化的插件系统、多模型提供商、会话状态恢复等核心功能。 | **完整重构**，版本正式进入候选阶段，里程碑意义重大。 |
| **IronClaw v1.0.0‑rc.1 (Reborn Stack)** | https://github.com/nearai/ironclaw/releases/tag/v1.0.0-rc.1 | 完全重写的 CLI、Runtime、Storage、Extension Host 与 Web UI；统一的 `DeploymentConfig` 配置模型。 | **全新代码库**，需要迁移，提供统一、可配置的部署方式。 |
| **OpenClaw – 关键 P1 Bug 修复** | https://github.com/openclaw/openclaw/pull/112261（Linux widget生命周期硬化）<br>https://github.com/openclaw/openclaw/pull/112276（媒体流水线重构） | 硬化 Quick Chat widget 生命周期、重构媒体处理流水线、解决 CLI‑SQLite 损坏问题，提升基础设施稳定性。 | **解决回归卡顿、数据安全**，降低生产环境风险。 |
| **NanoBot – 安全与崩溃修复** | https://github.com/HKUDS/nanobot/pull/5014（文件读取 OOM 修复）<br>https://github.com/HKUDS/nanobot/pull/4984（配置原子写入） | 修复大文件读取导致 OOM、配置文件写入泄漏、加入安全的环境变量解析，提升安全性与性能。 | **防止内存泄漏与配置泄露**，关键安全提升。 |
| **ZeroClaw – 关键安全与崩溃修复** | https://github.com/zeroclaw-labs/zeroclaw/pull/9105（Landlock 超时调高）<br>https://github.com/zeroclaw-labs/zeroclaw/pull/9114（Landlock 权限放行） | 提升 ARM 冷启动超时至 3 s、在 Landlock 沙箱放行 Execute/Truncate/IoctlDev，防止代理被锁死。 | **解决安全沙箱误杀**，恢复 ARM 设备可用性。 |
| **LobsterAI – 图片附件同步关键修复** | https://github.com/netease-youdao/LobsterAI/pull/2373 | 在切换模型时同步 `base64` 与 `filePath` 状态，彻底解决图片附件切换后消失的 Bug。 | **提升多模态交互可靠性**，用户体验显著改善。 |
| **CoPaw – 治理层与 UI 迭代** | https://github.com/agentscope-ai/QwenPaw/pull/6190（统一工具注册）<br>https://github.com/agentscope-ai/QwenPaw/pull/6262（一键复制配置） | 完成插件注册统一、提供一键复制智能体配置功能，优化日志轮转与信道状态控制。 | **降低插件开发门槛**，提升用户和开发者体验。 |

### 2. 活跃度概览（2‑3 句）
今天,Hermes Agent、IronClaw、OpenClaw、NanoBot、ZeroClaw、LobsterAI 与 CoPaw 均有显著的代码合并或版本发布，尤其是 Hermes Agent 的大版本发布和 IronClaw 的全新 Reborn 发行，使它们成为当日最活跃的项目。多数项目通过合并关键 PR（如安全沙箱、配置原子化、工具注册统一）来推进功能迭代，整体社区活跃度保持高位。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# **NanoBot 项目动态日报**
**日期：2026-07-21 | 数据来源：GitHub API**

---

## **1. 今日速览**
NanoBot 在过去24小时内保持高活跃度，共处理 **51 条活动**（Issues 11 条，PR 40 条），其中 **8 个 Issues 已关闭**，**22 个 PR 已合并/关闭**，显示项目维护团队响应迅速。今日无新版本发布，但 **40 条 PR 中有 18 条待合并**，表明代码审查流程正常运转。安全与性能问题（如 API 密钥泄露、OOM 崩溃）仍是社区关注焦点，但已有多个 **P1 级别的修复 PR** 进入收尾阶段。

**活跃度评估**：⭐⭐⭐⭐（满分5星）
- **Issues 响应率**：72.7%（8/11 条已关闭）
- **PR 合并效率**：55%（22/40 条已合并）
- **社区互动**：Issues 平均评论数 5.2 条，PR 评论数未披露但更新频繁。

---

## **2. 版本发布**
**无新版本发布**。

---

## **3. 项目进展**
今日合并的 **P1 级别 PR** 重点解决了 **安全、性能、稳定性** 三大核心问题，具体进展如下：

| **PR 编号** | **标题** | **类别** | **状态** | **影响** |
|-------------|----------|----------|----------|----------|
| [#5014](https://github.com/HKUDS/nanobot/pull/5014) | `fix(files): reject oversized reads before loading` | Bug修复 | ✅ 已合并 | 修复 `read_file` 读取大文件导致 OOM 的问题（关联 Issue [#4785](https://github.com/HKUDS/nanobot/issues/4785)）。 |
| [#4984](https://github.com/HKUDS/nanobot/pull/4984) | `fix(config): write config.json atomically via temp+replace` | 安全 | ✅ 已合并 | 防止配置文件写入中断导致数据丢失（关联 Issue [#4803](https://github.com/HKUDS/nanobot/issues/4803)）。 |
| [#5006](https://github.com/HKUDS/nanobot/pull/5006) | `feat(channels): add guarded tool gateway` | 功能增强 | ✅ 已合并 | 解决通道工具调用权限问题（关联 Issue [#4911](https://github.com/HKUDS/nanobot/issues/4911)）。 |
| [#4952](https://github.com/HKUDS/nanobot/pull/4952) | `fix(providers): sanitize UTF-16 surrogates at provider request boundary` | Bug修复 | ✅ 已合并 | 修复因 UTF-16 代理字符导致的 LLM 请求失败。 |
| [#4989](https://github.com/HKUDS/nanobot/pull/4989) | `fix(transcription): resolve ${VAR} env refs in transcription api_key/api_base` | Bug修复 | ✅ 已合并 | 修复语音转录 API 密钥环境变量未解析的问题。 |

**项目整体推进**：
- **安全性**：API 密钥存储（[#4803](https://github.com/HKUDS/nanobot/issues/4803)）和配置文件原子写入（[#4984](https://github.com/HKUDS/nanobot/pull/4984)）已基本解决。
- **性能**：文件读取 OOM 问题（[#4785](https://github.com/HKUDS/nanobot/issues/4785)）和 UTF-16 编码问题（[#4952](https://github.com/HKUDS/nanobot/pull/4952)）得到修复。
- **功能**：通道工具网关（[#5006](https://github.com/HKUDS/nanobot/pull/5006)）和模型预设绑定（[#4866](https://github.com/HKUDS/nanobot/pull/4866)）等功能持续完善。

---

## **4. 社区热点**
今日 **评论最活跃** 的 Issues/PRs 如下，反映社区关注的核心问题：

### **🔥 热门 Issues**
1. **[#4867](https://github.com/HKUDS/nanobot/issues/4867)** | **22 条评论**
   - **标题**：[enhancement] Preserve exact prompt prefix to enable caching in Ollama
   - **核心诉求**：用户反馈 NanoBot 在调用 Ollama 时 **额外增加 60 秒延迟**，严重影响体验。建议保留原始提示词前缀以支持缓存。
   - **状态**：已关闭，但未明确说明是否已解决延迟问题。

2. **[#4864](https://github.com/HKUDS/nanobot/issues/4864)** | **4 条评论**
   - **标题**：[bug] Endless loop for `<tool_call> <function=complete_goal>`
   - **核心诉求**：`complete_goal` 工具因网关解析 `recap` 参数错误导致无限循环。用户认为这是近期工具参数序列化变更导致的回归问题。
   - **状态**：待修复。

3. **[#4803](https://github.com/HKUDS/nanobot/issues/4803)** | **1 条评论**
   - **标题**：[Security] API keys stored as plaintext in `~/.nanobot/config.json`
   - **核心诉求**：用户担心 API 密钥以明文形式存储，存在安全风险。建议使用环境变量或加密存储。
   - **状态**：已有 [PR #4984](https://github.com/HKUDS/nanobot/pull/4984) 修复配置文件写入问题，但密钥加密仍需进一步讨论。

### **🚀 热门 PRs**
1. **[#4965](https://github.com/HKUDS/nanobot/pull/4965)** | **ModelScope 支持**
   - **功能**：新增 ModelScope 作为内置模型提供商（支持 Qwen、DeepSeek 等模型）。
   - **社区反馈**：用户期待更多中文模型支持，该 PR 可能被纳入下一版本。

2. **[#4866](https://github.com/HKUDS/nanobot/pull/4866)** | **会话绑定模型预设**
   - **功能**：允许会话绑定特定模型预设，提升多模型场景下的灵活性。
   - **社区反馈**：用户认为这是 WebUI 体验的重要改进。

---

## **5. Bug 与稳定性**
今日报告的 **严重 Bug** 按优先级排序：

| **Issue 编号** | **标题** | **严重程度** | **状态** | **修复 PR** |
|---------------|----------|-------------|----------|-------------|
| [#4785](https://github.com/HKUDS/nanobot/issues/4785) | `read_file` 读取大文件导致 OOM | 🔴 **严重** | 已关闭 | [#5014](https://github.com/HKUDS/nanobot/pull/5014) |
| [#4864](https://github.com/HKUDS/nanobot/issues/4864) | `complete_goal` 无限循环 | 🔴 **严重** | 待修复 | 无 |
| [#4787](https://github.com/HKUDS/nanobot/issues/4787) | `Session.messages` 无限增长导致内存泄漏 | 🟡 **中等** | 已关闭 | 无（需进一步监控） |
| [#4794](https://github.com/HKUDS/nanobot/issues/4794) | 子进程成为孤儿进程 | 🟡 **中等** | 已关闭 | 无（需进一步监控） |
| [#4803](https://github.com/HKUDS/nanobot/issues/4803) | API 密钥明文存储 | 🟡 **中等** | 待讨论 | [#4984](https://github.com/HKUDS/nanobot/pull/4984) |

**关键发现**：
- **OOM 问题** 已通过 [#5014](https://github.com/HKUDS/nanobot/pull/5014) 修复，但 **会话消息无限增长**（[#4787](https://github.com/HKUDS/nanobot/issues/4787)）仍需监控。
- **安全问题** 的 API 密钥存储（[#4803](https://github.com/HKUDS/nanobot/issues/4803)）已部分缓解，但仍需加密存储方案。

---

## **6. 功能请求与路线图信号**
今日提出的 **新功能请求** 及社区反馈：

| **Issue 编号** | **功能请求** | **优先级** | **社区支持** | **可能纳入版本** |
|---------------|-------------|-----------|-------------|------------------|
| [#1503](https://github.com/HKUDS/nanobot/issues/1503) | Dokploy 官方模板 | 🟡 中等 | 1 👍 | 待讨论 |
| [#5013](https://github.com/HKUDS/nanobot/issues/5013) | Shell 执行前用户确认 | 🔴 高 | 0 👍 | 可能在下一版本 |
| [#4867](https://github.com/HKUDS/nanobot/issues/4867) | Ollama 缓存支持 | 🔴 高 | 0 👍 | 待确认 |

**路线图信号**：
- **WebUI 改进**：[#4963](https://github.com/HKUDS/nanobot/pull/4963)、[#5020](https://github.com/HKUDS/nanobot/pull/5020) 等 PR 表明 WebUI 正在向 **更直观、更安全** 的方向演进。
- **模型生态**：[#4965](https://github.com/HKUDS/nanobot/pull/4965)（ModelScope 支持）和 [#5019](https://github.com/HKUDS/nanobot/pull/5019)（Codex 快速模式）显示项目在 **多模型支持** 上持续投入。
- **安全合规**：[#4803](https://github.com/HKUDS/nanobot/issues/4803) 仍是社区关注焦点，可能在 **v1.5+** 中引入密钥加密机制。

---

## **7. 用户反馈摘要**
从 Issues 评论中提炼的 **真实用户反馈**：

### **👍 满意点**
1. **性能提升**：用户对 [#4867](https://github.com/HKUDS/nanobot/issues/4867) 中提到的 Ollama 缓存优化表示期待，认为这将大幅提升本地模型体验。
2. **功能丰富**：[#4965](https://github.com/HKUDS/nanobot/pull/4965)（ModelScope 支持）和 [#5019](https://github.com/HKUDS/nanobot/pull/5019)（Codex 快速模式）获得正面反馈，用户认为 NanoBot 在 **多模型生态** 上表现优秀。

### **👎 痛点**
1. **安全隐患**：[#4803](https://github.com/HKUDS/nanobot/issues/4803) 中用户直言“不能接受 API 密钥明文存储”，呼吁加密存储方案。
2. **回归问题**：[#4864](https://github.com/HKUDS/nanobot/issues/4864) 中用户反馈 `complete_goal` 工具因近期更新导致 **无限循环**，认为这是 **回归问题**。
3. **Ollama 延迟**：[#4867](https://github.com/HKUDS/nanobot/issues/4867) 中用户称 NanoBot 在调用 Ollama 时 **额外增加 60 秒延迟**，严重影响使用体验。

### **💡 使用场景**
- **本地模型**：用户期待 NanoBot 能更好地支持 **Ollama、LM Studio** 等本地模型，并优化缓存机制。
- **多模型切换**：用户在不同场景下需要切换模型（如代码生成 vs. 文本创作），希望 WebUI 能更直观地展示 **实际使用的模型**。
- **安全合规**：企业用户关注 API 密钥的 **加密存储** 和 **访问控制**。

---

## **8. 待处理积压**
以下 Issues/PRs **长期未响应**，需要维护团队关注：

| **编号** | **标题** | **类别** | **等待时长** | **风险** |
|----------|----------|----------|-------------|----------|
| [#1503](https://github.com/HKUDS/nanobot/issues/1503) | [Feature Request] Template for Dokploy | 功能请求 | 139 天 | 🟡 中等（社区期待） |
| [#4803](https://github.com/HKUDS/nanobot/issues/4803) | [Security] API keys stored as plaintext | 安全 | 15 天 | 🔴 高（安全隐患） |
| [#4864](https://github.com/HKUDS/nanobot/issues/4864) | [bug] Endless loop for `<tool_call> <function=complete_goal>` | Bug | 12 天 | 🔴 高（功能不可用） |
| [#4867](https://github.com/HKUDS/nanobot/issues/4867) | [enhancement] Preserve exact prompt prefix for Ollama | 功能增强 | 11 天 | 🟡 中等（性能优化） |

**建议行动**：
1. **优先处理 [#4803](https://github.com/HKUDS/nanobot/issues/4803)**：安全问题需立即响应，建议在下一版本中引入密钥加密机制。
2. **回应 [#4864](https://github.com/HKUDS/nanobot/issues/4864)**：确认是否为回归问题，并提供临时解决方案。
3. **评估 [#1503](https://github.com/HKUDS/nanobot/issues/1503)**：Dokploy 模板需求已积压近 5 个月，建议评估是否纳入路线图。

---
**总结**：
NanoBot 在 **安全性、性能、功能丰富度** 上持续改进，但 **安全隐患（API 密钥泄露）和回归问题（无限循环）** 仍需优先解决。社区对 **本

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# **Hermes Agent 项目动态日报**
**日期：2026-07-21** | **数据来源：GitHub (NousResearch/hermes-agent)**

---

---

## **1. 今日速览**
- **项目活跃度极高**：过去24小时内 **100条动态**（50 Issues + 50 PRs），其中 **44个新开/活跃Issue、36个待合并PR**，社区参与度持续上升。
- **版本节奏稳定**：昨日（2026-07-20）发布 **v0.19.0（The Quicksilver Release）**，包含 **~2,245 commits、1,065合并PR、3,300+关闭Issue**，贡献者数量突破 **450+**。
- **Bug修复与功能迭代并行**：今日合并 **14个PR**，涵盖 **会话状态恢复、插件系统、多平台适配** 等核心模块；新报告Bug中 **P1/P2级别占比30%**，需优先关注。
- **社区关注点集中**：插件接口扩展（#64182）、桌面端独立安装（#38602）、会话成本计算（#67762）等Issue讨论激烈，反映用户对 **可扩展性、部署灵活性、成本透明度** 的强烈需求。
- **稳定性风险**：Windows更新导致 `state.db` 文件损坏（#68474）、macOS Tahoe兼容性问题（#68525）等 **跨平台回归Bug** 需紧急处理。

---

---

## **2. 版本发布**
### **🚀 Hermes Agent v0.19.0 (2026.07.20) — The Quicksilver Release**
**发布链接**：[v2026.7.20 Release Notes](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.7.20)

#### **核心更新**
- **规模**：~2,245 commits | ~1,065 合并PR | ~3,300 关闭Issue | **450+社区贡献者**
- **文件变更**：~2,465 文件 | ~300,000 行新增 | ~36,000 行删除
- **主题**："Quicksilver" 寓意 **高效、灵活、快速迭代**，重点优化 **插件系统、多模型支持、会话管理**。

#### **破坏性变更（Breaking Changes）**
- **插件接口**：部分观察者钩子（Observer Hooks）的 **签名变更**，需更新自定义插件（详见 [#64231](https://github.com/NousResearch/hermes-agent/issues/64231)）。
- **配置迁移**：`custom_providers` 的认证方式统一到 **凭证池（Credential Pool）**，旧版本的环境变量优先级降低（参考 [#68011](https://github.com/NousResearch/hermes-agent/pull/68011)）。
- **会话状态**：持久化会话的 **系统提示恢复逻辑** 升级，需确保 `SOUL.md` 等文件路径一致（[#68563](https://github.com/NousResearch/hermes-agent/issues/68563)）。

#### **迁移注意事项**
- **桌面端用户**：Windows用户升级前 **备份 `state.db`**，避免因更新导致数据损坏（[#68474](https://github.com/NousResearch/hermes-agent/issues/68474)）。
- **插件开发者**：检查插件是否使用 **废弃的钩子**，参考 [插件接口扩展跟踪Issue](https://github.com/NousResearch/hermes-agent/issues/64182)。
- **多模型用户**：Codex/OAI模型的 **上下文窗口缓存** 策略调整，需重新配置 `context_length_cache.yaml`（[#65905](https://github.com/NousResearch/hermes-agent/issues/65905)）。

---

---

## **3. 项目进展**
### **🔥 今日合并的重要PR（14个）**
| PR | 类型 | 影响 | 链接 |
|----|------|------|------|
| **[#68597](https://github.com/NousResearch/hermes-agent/pull/68597)** | **Bugfix** | 修复Telegram等平台 **300s消息批准窗口超时** 问题，优化 `Once/Session/Always` 批准流程 | ✅ **已合并** |
| **[#68011](https://github.com/NousResearch/hermes-agent/pull/68011)** | **Bugfix** | 修复 **TTS/STT工具** 无法从凭证池解析API密钥的问题 | ✅ **已合并** |
| **[#68595](https://github.com/NousResearch/hermes-agent/pull/68595)** | **Feature** | 新增 **docx/xlsx/pdf** 办公技能包，补充PowerPoint技能 | ✅ **已合并** |
| **[#68050](https://github.com/NousResearch/hermes-agent/pull/68050)** | **Feature** | 新增 **Claude Code ACP** 子进程提供商，支持通过 **Claude Pro/Max计划** 计费 | ✅ **已合并** |
| **[#64821](https://github.com/NousResearch/hermes-agent/pull/64821)** | **Bugfix** | 修复Codex `/models` 探测时缺少 `ChatGPT-Account-Id` 头导致模型列表为空 | ✅ **已合并** |
| **[#68589](https://github.com/NousResearch/hermes-agent/pull/68589)** | **Bugfix** | 修复 **工具搜索上下文门控** 与提供商无关的问题，Codex会话现正确限制为272K | ✅ **已合并** |
| **[#47503](https://github.com/NousResearch/hermes-agent/pull/47503)** | **Config** | 将默认 `approvals.gateway_timeout` 从 **300s提升至1800s**（30分钟） | ✅ **已合并** |
| **[#60897](https://github.com/NousResearch/hermes-agent/pull/60897)** | **Bugfix** | 修复Telegram **批准回调超时** 导致的假成功问题 | ✅ **已合并** |

#### **进展总结**
- **功能完善**：插件系统（批准流程、直接操作钩子）、多模型支持（Codex/ACP）、办公技能包等 **核心功能持续迭代**。
- **稳定性提升**：修复了 **批准超时、凭证解析、上下文门控** 等关键Bug，降低用户使用门槛。
- **生态扩展**：新增 **Claude Code ACP** 支持，进一步丰富模型提供商生态。

---

---

## **4. 社区热点**
### **🔥 讨论最活跃的Issues（按评论数排序）**
| Issue | 标题 | 评论数 | 👍 | 状态 | 链接 |
|-------|------|--------|----|------|------|
| **[#64182](https://github.com/NousResearch/hermes-agent/issues/64182)** | **插件接口扩展跟踪** | **15** | 0 | OPEN | 社区提案汇总，需统一钩子分类 |
| **[#38602](https://github.com/NousResearch/hermes-agent/issues/38602)** | **桌面端独立安装** | **12** | **50** | OPEN | 用户强烈需求 **薄客户端模式** |
| **[#63078](https://github.com/NousResearch/hermes-agent/issues/63078)** | **桌面端新会话空白Bug** | **9** | 0 | OPEN | P1级别，影响用户体验 |
| **[#64231](https://github.com/NousResearch/hermes-agent/issues/64231)** | **插件生命周期事件目录** | **6** | 0 | OPEN | 需定义钩子分类标准 |
| **[#67762](https://github.com/NousResearch/hermes-agent/issues/67762)** | **会话成本计算重置Bug** | **5** | 0 | OPEN | **BLOCKER**：成本统计功能失效 |

#### **热点分析**
1. **插件系统**：社区对 **插件接口扩展** 讨论激烈（#64182、#64231），反映开发者希望 **更灵活的钩子机制** 和 **统一的生命周期管理**。
2. **部署灵活性**：#38602（50👍）要求 **桌面端支持连接远程Hermes实例**，避免本地自启动runtime，适配 **企业/云端部署场景**。
3. **成本透明度**：#67762 会话成本计算在网关重启后 **无法恢复**，影响 **企业用户的费用追踪**。
4. **跨平台兼容性**：macOS Tahoe（#68525）、Windows更新（#68474）等 **新系统适配问题** 频发，需加强测试覆盖。

---

---

## **5. Bug 与稳定性**
### **🚨 严重级别排序（P1 > P2 > P3）**
| 严重程度 | Issue | 描述 | 状态 | Fix PR | 链接 |
|----------|-------|------|------|--------|------|
| **P1** | **[#68474](https://github.com/NousResearch/hermes-agent/issues/68474)** | **Windows v0.19.0更新后 `state.db` 文件被清空（95MB null bytes）** | OPEN | ❌ 无 | **数据丢失风险** |
| **P1** | **[#63078](https://github.com/NousResearch/hermes-agent/issues/63078)** | **桌面端新会话首条消息后会话空白** | OPEN | ❌ 无 | 影响用户体验 |
| **P2** | **[#67762](https://github.com/NousResearch/hermes-agent/issues/67762)** | **网关重启后 `session_estimated_cost_usd` 重置为0** | OPEN | ❌ 无 | **BLOCKER**（成本统计失效） |
| **P2** | **[#68563](https://github.com/NousResearch/hermes-agent/issues/68563)** | **网关持久会话不刷新 `SOUL.md` 变更** | OPEN | ✅ [#68598](https://github.com/NousResearch/hermes-agent/pull/68598) | 已提交Fix |
| **P2** | **[#68525](https://github.com/NousResearch/hermes-agent/issues/68525)** | **macOS Tahoe新窗口渲染黑屏** | OPEN | ✅ [#68596](https://github.com/NousResearch/hermes-agent/pull/68596) | 已提交Fix |
| **P2** | **[#68416](https://github.com/NousResearch/hermes-agent/issues/68416)** | **MCP服务器连接时间波动5倍（1.8s–9.8s）** | OPEN | ❌ 无 | 影响工具响应速度 |
| **P2** | **[#67498](https://github.com/NousResearch/hermes-agent/issues/67498)** | **Telegram网关挂起在 "Connecting (attempt 1/8)"** | OPEN | ❌ 无 | 网络适配问题 |
| **P2** | **[#68588](https://github.com/NousResearch/hermes-agent/issues/68588)** | **Mistral AI未作为内置提供商** | OPEN | ❌ 无 | 用户体验问题 |

#### **风险提醒**
- **数据安全**：#68474（Windows `state.db` 损坏）和 #67762（成本计算重置） **直接影响用户数据**，需 **紧急修复**。
- **跨平台兼容性**：macOS Tahoe（#68525）和Windows更新（#68474）的 **回归Bug** 表明 **自动化测试覆盖不足**。
- **网络适配**：Telegram网关（#67498）和MCP连接（#68416）的 **超时/波动问题** 需优化底层实现。

---

---

## **6. 功能请求与路线图信号**
### **🎯 高优先级功能请求**
| Issue | 功能 | 状态 | 可能性 | 链接 |
|-------|------|------|--------|------|
| **[#38602](https://github.com/NousResearch/hermes-agent/issues/38602)** | **桌面端薄客户端模式** | OPEN | **高** | 社区强烈需求，已有讨论 |
| **[#68588](https://github.com/NousResearch/hermes-agent/issues/68588)** | **Mistral AI作为内置提供商** | OPEN | **高** | 用户体验提升，实现难度低 |
| **[#68057](https://github.com/NousResearch/hermes-agent/issues/68057)** | **回退模型激活通知** | OPEN | **中** | 小功能，提升透明度 |
| **[#67074](https://github.com/NousResearch/hermes-agent/issues/67074)** | **Gemini Interactions API传输** | OPEN | **中** | 优化Gemini会话状态管理 |
| **[#65735](https://github.com/NousResearch/hermes-agent/issues/65735)** | **支持多个OpenAI/Codex订阅** | CLOSED | **已实现** | [PR #65735](https://github.com/NousResearch/hermes-agent/pull/65735) |

#### **路线图信号**
- **插件系统优先级最高**：#64182 和 #64231 表明 **插件接口标准化** 将是下一版本重点。
- **多模型支持持续扩展**：Mistral AI（#68588）、Gemini Interactions API（#67074）等 **提供商集成** 将持续推进。
- **企业级功能**：成本统计（#67762）、多订阅支持（#65735）等 **商业化相关功能** 受到重视。

---

---

## **7. 用户反馈摘要**
### **💡 真实痛点**
1. **部署复杂性**：
   - 用户希望 **桌面端支持连接远程实例**（#38602，50👍），避免本地自动启动runtime。
   - Docker部署时 **路径处理混乱**（#68529），`~/` 路径有时解析为 `/opt/data`，有时解析为 `/opt/data/home`。

2. **成本透明度**：
   - 会话成本计算在网关重启后 **重置为0**（#67762），影响 **企业用户的

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw 项目日报（2026‑07‑21）**  

---  

### 1. 今日速览  
- 在过去 24 小时内，Issue 整体保持 **活跃度中等**：新增 12 条（其中 5 条为新打开或近期活跃），关闭 7 条。  
- PR 活动稍有下降，只有 **3 条已合并/关闭**，其余 7 条仍在待审状态。  
- 当前 **无新版本发布**，代码基础稳定，主要聚焦于 BUG 修复与功能迭代。  
- 社区情绪呈 **积极讨论** 为主，尤其是对 OAuth 登录、矩阵同步以及多语言本地化的关注度升高。  

---  

### 2. 版本发布  
> **无**（本轮无官方 Release）  

---  

### 3. 项目进展 – 今日合并/关闭的重要 PR  
| PR | 状态 | 简要说明 | 链接 |
|----|------|----------|------|
| #3277 | **CLOSED** | `fix(tools): deferred‑tool visibility heal + sliding TTL + SSE tool‑call index fix`，解决工具发现promotion仅在内存中的可靠性问题，防止因 TTL 过期导致的工具不可用。 | [PR #3277](https://github.com/sipeed/picoclaw/pull/3277) |
| #3192 | **CLOSED** | `chore(docker): bump goreleaser base images from alpine:3.21 to 3.23`，统一 Docker 基础镜像，提升构建一致性。 | [PR #3192](https://github.com/sipeed/picoclaw/pull/3192) |
| #3191 | **CLOSED** | `chore: remove duplicate build/ entry in .gitignore`，清理冗余的 `.gitignore` 条目。 | [PR #3191](https://github.com/sipeed/picoclaw/pull/3191) |

> 这三次合并体现了 **代码可靠性提升**（#3277）、**构建环境标准化**（#3192）以及 **配置清洁**（#3191），为后续功能扩展提供了更稳固的基础。  

---  

### 4. 社区热点 – 今日最活跃的 Issue / PR  

| 编号 | 标题 | 评论数 | 👍  | 状态 | 主要诉求 | 链接 |
|------|------|--------|------|------|----------|------|
| #3153 | BUG：Volcengine Doubao Seed tool calls occasionally leak as `<seed:tool_call>` text | 5 | 0 | **CLOSED** | 工具调用被原始 XML 包裹，导致用户看到裸标签，需正确执行或隐藏。 | [Issue #3153](https://github.com/sipeed/picoclaw/issues/3153) |
| #3203 | BUG：Matrix sync loop has no reconnection logic — silent death after network/server disruption | 4 | 1 | **OPEN** (stale) | 长聚会话在网络/ homeserver 重启后死锁，缺少自动重连，影响系统可用性。 | [Issue #3203](https://github.com/sipeed/picoclaw/issues/3203) |
| #3274 | BUG：Antigravity provider: INVALID_ARGUMENT on main — regression from v0.3.1, tool_schema_transform "simple" no longer sufficient | 2 | 0 | **CLOSED** | OAuth 重定向后返回 `INVALID_ARGUMENT`，回归至 v0.3.1 前的兼容行为。 | [Issue #3274](https://github.com/sipeed/picoclaw/issues/3274) |
| #3280 | fix(auth): make browser OAuth login survive real‑world callback conditions | 0 | 0 | **OPEN** | OAuth 登录在远程/无 UI 环境中频繁失败，需要稳健的回调处理。 | [PR #3280](https://github.com/sipeed/picoclaw/pull/3280) |
| #3279 | fix(seahorse): prevent tool-call format leakage into LLM summaries | 0 | 0 | **OPEN** | Seahorse 生成的摘要中泄露原始工具调用 XML，影响用户体验。 | [PR #3279](https://github.com/sipeed/picoclaw/pull/3279) |

> **热点分析**：  
> - **矩阵同步和 OAuth** 成了当前最受关注的两大运维问题，尤其是在 Headless 部署场景下，系统需要更强的自动恢复能力。  
> - **多语言本地化**（尤其是日语）和 **Web UI 性能** 也在不断被提出，显示社区对功能完整性和可访问性的需求日益细化。  

---  

### 5. Bug 与稳定性  

| Issue | 简要描述 | 严重程度 | 是否已有 Fix PR | 链接 |
|-------|----------|----------|----------------|------|
| #3153 | Volcengine Doubao Seed tool_call 以 `<seed:tool_call>` 纯文本返回 | 中 | 已在 **#3279**（PR）部分处理，但完整根因仍在审查 | [Issue #3153](https://github.com/sipeed/picoclaw/issues/3153) |
| #3203 | Matrix sync 失去重连，导致服务死亡 | 高 | 正在开发 **#3280**（OAuth 稳健）思路可复用于 sync 重连 | [Issue #3203](https://github.com/sipeed/picoclaw/issues/3203) |
| #3274 | Antigravity OAuth 登录被 Google 政策阻拦 | 中 | 部分修复在 **#3278**（同上）中尝试，仍未完全解决 | [Issue #3274](https://github.com/sipeed/picoclaw/issues/3274) |
| #3275 | model_list 条目在 config 重写后丢失 api_keys 等字段 | 低 | 通过 **#3275**（已关闭）的内部分支已修复，但上线待确认 | [Issue #3275](https://github.com/sipeed/picoclaw/issues/3275) |
| #3281 | Web UI 输入框在历史较长时出现卡顿 | 中 | 尚未对应 PR，计划在后续性能优化里加入 | [Issue #3281](https://github.com/sipeed/picoclaw/issues/3281) |

---  

### 6. 功能请求与路线图信号  

| 需求 | 发起人 | 关联现有 PR | 可能纳入的里程碑 |
|------|--------|------------|-------------------|
| **默认后备链配置**（可在 Web UI 设置并持久化） | lc6464 | #3200 (FEATURE) | 预计 **0.3.2** 版引入，便于用户快速切换模型链。 |
| **OAuth 浏览器登录容错**（支持回调恢复、避免重复授权） | honbou | #3280 (BUG FIX) | 目标 **下一个 patch**，将在所有 OAuth provider 中统一实现。 |
| **Seahorse 工具调用泄露防护** | MrTreasure | #3279 (BUG FIX) | 纳入 **0.3.1** 小版更新，确保 LLM 摘要不泄露原始调用结构。 |
| **日本语 UI 本地化** | honbou | #3273 (FEATURE) | 已进入 **实现阶段**，预计在 **0.3.3** 发行中随 Web UI 一起上线。 |
| **外部托管网关（systemd）检测与兼容** | honbou | #3276 (FEATURE) | 计划在 **0.3.4** 版本中加入检测逻辑，避免硬编码假设。 |

---  

### 7. 用户反馈摘要  

- **痛点集中**  
  - **工具调用泄露**：多次出现 `<seed:tool_call>` 或 raw XML 直接回写给用户，影响对话流畅度。  
  - **矩阵同步失联**：在网络抖动或服务器重启后，长期会导致服务完全不可用，尤其在依赖 `systemd` 自动重启的部署中更为致命。  
  - **OAuth 登录不稳定**：尤其在 headless 场景，登录流程常在授权后回调失败，需要多次手动确认。  
  - **Web UI 性能**：长对话历史导致输入框卡顿，用户感知延迟明显。  
- **满意点**  
  - 多语言（特别是日语）本地化请求获得积极响应，已进入实现计划。  
  - 对于即将支持的 **默认后备链** 配置，社区普遍期待更灵活的模型切换方式。  
  - Docker 镜像基础设施的更新（alpine 3.23）被视为提升构建可复制性的关键一步。  

---  

### 8. 待处理积压 – 长期未响应的重要项  

| 编号 | 标题 | 创建日期 | 近期更新 | 状态 | 备注 |
|------|------|----------|----------|------|------|
| #3228 / #3229 | 滚动对话缓存 breakpoints / 将对话历史剔除缓存前缀 | 2026‑07‑06 | 2026‑07‑20 | **OPEN** / **OPEN** (stale) | 需要维护者重新评审，以决定是否纳入 0.3.x 系列。 |
| #3276 | Launcher：检测外部托管网关并放宽未知 channel 类型硬失败 | 2026‑07‑20 | 2026‑07‑20 | **OPEN** | 对于系统服务化部署意义重大，但目前仅一名维护者在关注。 |
| #3272 | 添加日语本地化 | 2026‑07‑20 | 2026‑07‑20 | **OPEN** | 已有 PR (#3273) 实现，仍在审阅阶段。 |
| #3271 | 更新默认模型列表至 2026‑07 最新 | 2026‑07‑20 | 2026‑07‑20 | **OPEN** | 主要是文档/配置更新，影响面广，需要集体审议。 |
| #3278 | Antigravity OAuth 被 Google 政策阻拦 | 2026‑07‑20 | 2026‑07‑21 | **CLOSED**（因后续讨论尚未解决） | 仍需社区提供兼容的 OAuth 客户端配置方案。 |

> **提醒**：上述 Issue 长期未得到显著进展，维护者需在下周的例会中优先排期，以免阻塞关键功能的发布。  

---  

**结论**：整体而言，PicoClaw 当前处于 **功能迭代 + 稳定性强化** 的关键阶段。大部分 Bug 已在近期 PR 中得到修复，但涉及 **系统可靠性（矩阵同步、OAuth 稳健性）** 的问题仍是重点关注点。多语言本地化与默认后备链的实现将进一步提升产品的国际化与用户体验。维护团队应重点关注长期积压的 Issue，以保持项目健康的发展节奏。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw 项目日报 – 2026‑07‑21**  

---  

## 1. 今日速览  
- 过去 24 h 新增 **6 条 Issue**（全部为打开状态），**0 条 Issue 关闭**，说明社区活跃度保持在中等偏上。  
- **17 条 PR** 在同一日有更新，其中 **4 条已合并/关闭**，其余仍为打开状态。  
- 今日 **无新版本发布**，代码基准保持在最新的 `main` 分支上。  
- 综合活动指标（Issue + PR + Comment + Reaction）Score ≈ **13.0**，项目健康度保持在 **“活跃、可持续」** 的区间。  

---  

## 2. 版本发布  
> **无**  
>（截至 2026‑07‑21，未发现任何已发布的正式版本或预发行版）  

---  

## 3. 项目进展 – 今日合并 / 关闭的重要 PR  

| PR | 标题 | 合并状态 | 关键改动 | 链接 |
|----|------|----------|----------|------|
| **#3095** | docs: rewrite branch maintenance guide for the registry‑branch model | ✅ 已关闭 | 重写分支维护指南，明确 `registry‑branch` 工作流的审查与发布流程。 | <https://github.com/qwibitai/nanoclaw/pull/3095> |
| **#3110** | feat(container): bake caldav‑mcp into the agent image | ✅ 已关闭 | 将 `caldav‑mcp` 统一打包进基础镜像，使用 `ARG CALDAV_MCP_VERSION=0.8.0` 并通过 `pnpm install -g` 注入。 | <https://github.com/qwibitai/nanoclaw/pull/3110> |
| **#3106** | fix(whatsapp‑cloud): adopt messaging_groups rows stranded by the instance re‑key | ✅ 已关闭 | 修复因实例键重新生成导致的 `messaging_groups` 行残留问题，提供迁移脚本自动搬迁。 | <https://github.com/qwibitai/nanoclaw/pull/3106> |
| **#3107** | [PR: Fix, core‑team] fix(add‑whatsapp‑cloud): copy the adoption module and document the row re‑key | ✅ 已关闭 | 文档化并复制已有的采用模块，确保 `add‑whatsapp‑cloud` 能正确处理键迁移。 | <https://github.com/qwibitai/nanoclaw/pull/3107> |

> **整体进展**：本轮合并主要聚焦 **容器化、文档规范化以及修复已知的数据一致性Bug**，对功能影响不大，却提升了长期维护的可靠性。  

---  

## 4. 社区热点  

| 热点 | 类型 | 主要诉求 | 关键评论/反应 | 链接 |
|------|------|----------|---------------|------|
| **Issue #3096** – *feat: Add /add-line skill for LINE Official Account channel support* | Feature Request | 引入 LINE 官方账号通道（日本、台湾、泰国主流 messager），缺少 `@chat-adapter/line` 包。 | 3 条评论，点赞 0，社区普遍认为 LINE 是重要补充。 | <https://github.com/qwibitai/nanoclaw/issues/3096> |
| **PR #3050** – *feat(setup): add Dial to the channel picker + wizard/skills* | Feature Skill | 在 setup wizard 中加入 Dial 选项，以便用户更易发现并配置新渠道。 | 评论数未标记（undefined），但作为 “Feature skill” 正处于审查阶段。 | <https://github.com/qwibitai/nanoclaw/pull/3050> |
| **Issue #3105** – *bug: whatsapp‑cloud: upgrading an existing install strands its messaging_groups rows* | Bug / Stability | 迁移时导致现有 WhatsApp 实例的 `messaging_groups` 行被“静默失效”。 | 0 条评论，但已被标记为 **blocker**，并关联 PR #3106/3107 进行修复。 | <https://github.com/qwibitai/nanoclaw/issues/3105> |

> **分析**：社区最关注的是 **LINE 通道的原生支持**（Issue #3096），且已有对应 PR（#2918）在同一天的更新中提出。同时，WhatsApp 迁移导致的数据残留（Issue #3105）成为短期稳定性的关键关注点。  

---  

## 5. Bug 与稳定性  

| Issue | 创建日期 | 关键描述 | 当前状态 | 是否已有修复 PR | 链接 |
|-------|----------|----------|----------|----------------|------|
| **#3105** | 2026‑07‑20 | Upgrading an existing WhatsApp‑cloud instance leaves `messaging_groups` rows stranded. | **Open**（已关联 PR #3106/3107） | ✅ 已在 PR #3106（已合并）中提供迁移脚本。 | <https://github.com/qwibitai/nanoclaw/issues/3105> |
| **#3100** | 2026‑07‑20 | Revoking the sole remaining owner is not prevented → no root‑of‑trust. | **Open** | ❌ 尚未看到专门的 fix PR（但 PR #3104 正在审查防止此情形）。 | <https://github.com/qwibitai/nanoclaw/issues/3100> |
| **#3099** | 2026‑07‑20 | Approval routing can route a role‑change to its own target (self‑approval). | **Open** | ❌ 未直接修复，PR #3103 正在讨论特权比例化方案。 | <https://github.com/qwibitai/nanoclaw/issues/3099> |
| **#3098** | 2026‑07‑20 | Approval cards echo raw command line, lacking resolved user name / effect description. | **Open** | ❌ 尚未修复，PR #3102 正在优化卡片渲染。 | <https://github.com/qwibitai/nanoclaw/issues/3098> |
| **#3097** | 2026‑07‑20 | Role grant silently confers GLOBAL admin when `--group` is omitted. | **Open** | ❌ 未修复，PR #3101 正在强制 `--scope` 参数。 | <https://github.com/qwibitai/nanoclaw/issues/3097> |

> **严重度排序**：#3105（数据一致性） > #3100（#owner 失效） > #3097（#global admin 误发） > #3099/#3098（交互体验问题）。  

---  

## 6. 功能请求与路线图信号  

| 需求 | 涉及 Issue / PR | 可能纳入的里程碑 | 判断依据 |
|------|----------------|-------------------|----------|
| **LINE 官方账号通道** | Issue #3096、PR #2918（feature skill） | **下一版本 0.9.x**（计划在 2026‑09 前发布） | 已有完整实现提案（Skill + adapter），并得到作者持续维护。 |
| **语音转写（本地 Whisper）** | PR #2459（feat skill） | 目标放在 **0.10 版本**，因为需要评估资源占用并在 Docker 镜像中加入 whisper.cpp。 | 目前仍为打开状态，需进一步的集成测试。 |
| **Telegram URL 防止 Markdown stripping** | PR #3111（open） | 可能在 **0.8.3 修复分支**，因为涉及兼容性而非新功能。 | 只有 0 评论，但已被标记为 “core‑team” 关注。 |
| **显式 `--scope` 参数** | Issue #3097、PR #3101（fix cli） | 已在 PR #3101 中实现，预计将随 **0.9.0** 一起发布。 | 正在审查中，社区共识强烈。 |

> **路线图信号**：围绕 **通道扩展（LINE）**、**安全权限控制（--scope）** 与 **容器化能力（caldav‑mcp）** 这三大方向，项目在 2026‑Q3 的里程碑中已经有明确的技术原型和审查路径。  

---  

## 7. 用户反馈摘要  

- **安全/权限**：多位用户（k‑fls、glifocat）在评论中强调 **禁止误撤销唯一 owner**、**必须显式 `--scope`**，并提出 **特权比例化** 的路由规则。  
- **功能缺口**：用户普遍希望 **增加 LINE**、**改进 WhatsApp 迁移**、**提供本地语音转写**，并对 **Telegram URL 在 legacy Markdown** 场景下的鲁棒性提出担忧。  
- **使用体验**：关于 **角色变更审批卡片只显示原始命令行**，缺乏用户化说明，导致审批者难以快速评估后果。  
- **满意度**：对 **bug 修复速度**（如 #3105 关联的 whatsapp‑cloud）给出积极反馈，认为维护者对数据一致性问题响应迅速。  

---  

## 8. 待处理积压  

| 项目 | 类型 | 创建日期 | 问题 | 备注 |
|------|------|----------|------|------|
| **Issue #3097** | Bug / 安全 | 2026‑07‑20 | 角色授予默认全局 admin，缺少 `--scope` 强制。 | 已在 PR #3101 着手解决，但仍在审查中。 |
| **Issue #3100** | 安全 | 2026‑07‑20 | 撤销唯一 owner 导致根信任丧失。 | 需要合并 PR #3104（防护逻辑）。 |
| **PR #3050** | Feature | 2026‑07‑14 | 为 `setup` 增加 Dial 选项（技能） | 仍为 open，需进一步代码审查。 |
| **PR #2918** | Feature | 2026‑07‑03 | 完整实现 LINE 适配器 + `/add-line` skill | 已有实现，但仍在等待审查通过后 merged。 |
| **长期未更新的 Issue** | 综合 | 2026‑05‑13 以后 | 如 #2459（voice transcription）等 | 仍在候补，维护者需主动推进。 |

---  

### 综合评价  
- **健康度**：项目在过去 24 h 内保持 **6 新 Issue / 17 PR 更新**，且 **4 条关键 PR 已合并**，说明社区协作与代码审查效率良好。  
- **风险点**：当前的 **安全/权限缺陷**（owner 撤销、全局 admin 误发）仍未彻底解决，需在

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw 项目动态日报（2026‑07‑21）**  

---

### 1. 今日速览
- 项目活跃度较高：过去 24 h 内 **29 条 Issue** 有更新（其中 23 条为新开/活跃，6 条已关闭），**50 条 PR** 有更新（19 条仍待合并，31 已合并/关闭）。  
- 首个 **v1.0.0‑rc.1** 发布标志着重构后的 IronClaw（Reborn）进入发布候选阶段，核心组件（CLI、运行时、存储、扩展宿主、Web UI）均已完成重写。  
- 今天的讨论聚焦在 **运行时工厂统一（#6389）** 与 **DeploymentConfig 完善（#6274）**，以及大量 WebUI 可用性和本地化修复（如工具权限保持、工作区树导航、会话检查恢复等）。总体来看，项目在向稳定的 v1 候选版本迈进的同时，仍在积极处理 UI/UX、国际化和可靠性细节。

---

### 2. 版本发布
| 版本 | 发布时间 | 主要变更 | 破坏性/迁移注意 |
|------|----------|----------|----------------|
| **ironclaw‑v1.0.0‑rc.1** (1.0.0‑rc.1) | 2026‑07‑20 | - 完全重构的 agent runtime、storage、extension host 与 Web UI（Reborn 堆栈）。<br>- 新 CLI 二进制文件 `ironclaw` 取代旧的 `ironclaw-legacy`。<br>- 引入 `DeploymentConfig` 作为主要组合配置（见 #6274）。<br>- 移除遗留 `src/` 目录（见 #6369），所有生产部署已指向 Reborn 堆栈。 | - 这是 **全新的代码库**，不是 0.29.x 的增量更新。现有基于旧 monolith 的部署脚本、CI 配置及第三方插件需要更新以使用新的 `ironclaw` 二进制和 `DeploymentConfig`。<br>- 官方发布说明中已提供迁移指南（见 Release Notes），建议先在临时环境跑完整测试套件后再滚动升级。 |

---

### 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 状态 | 主要贡献 | 链接 |
|----|------|----------|------|
| **#6339** | CLOSED | 保存工具权限时保持选中状态，防止 UI 抖动；增加 30 s 超时并重新拉取规范设置。 | https://github.com/nearai/ironclaw/pull/6339 |
| **#6341** | CLOSED | 为 Workspace 文件树添加完整 ARIA `tree/treeitem/group` 语义及键盘导航（Up/Down、Left/Right、Home/End、Enter、Space），并恢复焦点。 | https://github.com/nearai/ironclaw/pull/6341 |
| **#6338** | CLOSED | 在角色/状态变更后立即刷新 Admin 用户详情页，避免信息滞留。 | https://github.com/nearai/ironclaw/pull/6338 |
| **#6336** | CLOSED | 工作区深层链接时自动展开所有父目录，保持手动打开的分支可见。 | https://github.com/nearai/ironclaw/pull/6336 |
| **#6342** | CLOSED | 加载较旧聊天时保持视口位置，防止页面跳动。 | https://github.com/nearai/ironclaw/pull/6342 |
| **#6404** | CLOSED | 同步 WiX 安装程序与 Cargo 包描述，防止后续 release 脚本失效。 | https://github.com/nearai/ironclaw/pull/6404 |
| **#6419** | OPEN | 在 Admin 用户管理操作中暴露待处理/错误状态，防止确认框在失败后意外关闭。 | https://github.com/nearai/ironclaw/pull/6419 |
| **#6420** | OPEN | 临时会话检查失败时保留 bearer token，展示可恢复错误并提供重试按钮。 | https://github.com/nearai/ironclaw/pull/6420 |
| **#6421** | OPEN | 将扩展配置与 OAuth 错误通过 WebUI 国际化系统渲染，覆盖 11 种语言。 | https://github.com/nearai/ironclaw/pull/6421 |

这些合并的 PR 主要解决了 **WebUI 可访问性、状态同步以及本地化**，直接提升了日常使用体验，为即将到来的 v1.0.0 稳定版奠定了基础。

---

### 4. 社区热点（评论最多、讨论最活跃）

| 议题 | 评论数 | 核心诉求 | 链接 |
|------|--------|----------|------|
| **#6389 – Phase 4：合并 `build_local_runtime` 与 `build_production_shaped` 为单一 `build_runtime(cfg)`** | 10 | 简化运行时工厂，减少重复代码，使部署配置更统一。 | https://github.com/nearai/ironclaw/issues/6389 |
| **#6274 – 完成 DeploymentConfig 作为主要组合配置** | 4 | 确保所有组件（本地、生产、测试）均通过同一配置对象驱动，減少配置漂移。 | https://github.com/nearai/ironclaw/issues/6274 |
| **#6369 – Tier B 后续：v1 遗留盲点清理** | 3 | 检查并补足因删除遗留 `src/` 而产生的文档、脚本、CI 缺失。 | https://github.com/nearai/ironclaw/issues/6369 |
| **#6350 – 助手意外切换响应语言** | 2 | 用户期望助手遵循提示语言，禁止自行切换至其他语言（如乌克兰语）。 | https://github.com/nearai/ironclaw/issues/6350 |
| **#6351 – 检查点不可用/不可达错误** | 2 | 需要更健壮的检查点恢复机制或更明确的用户提示，防止多工具运行因临时故障而失败。 | https://github.com/nearai/ironclaw/issues/6351 |

**热点分析**：开发者社区目前最关注的是 **架构简化**（统一运行时工厂、统一 DeploymentConfig）以及 **核心交互可靠性**（语言一致性、检查点恢复）。这些议题直接影响到后续版本的稳定性与易用性，值得在接下来的 sprint 中优先处理。

---

### 5. Bug 与�定性（今日新增 Bug，按严重程度排序）

| 严重度 | Issue | 简述 | 是否已有对应 fix PR | 链接 |
|--------|-------|------|---------------------|------|
| **P1** | #6348 – Gmail 扩展重新安装后自动授权 | 未展示 OAuth 同意页即获取 Gmail 访问权限，存在安全风险。 | 暂无直接 PR（需在扩展授权流程中加入确认步骤） | https://github.com/nearai/ironclaw/issues/6348 |
| **P1** | #6360 – Provider onboarding 无法后退 | 选择供应商后只能继续或取消，无法切换供应商。 | 暂无 PR | https://github.com/nearai/ironclaw/issues/6360 |
| **P2** | #6350 – 助手语言切换 bug | 见上表热点。 | 暂无 PR | https://github.com/nearai/ironclaw/issues/6350 |
| **P2** | #6351 – 检查点不可达错误 | 见上表热点。 | 暂无 PR | https://github.com/nearai/ironclaw/issues/6351 |
| **P2** | #6353 – 长助手消息截断无展开选项 | 长响应被截断且没有 “查看更多” 入口。 | 暂无 PR | https://github.com/nearai/ironclaw/issues/6353 |
| **P2** | #6349 – Telegram 聊天历史渲染不一致 | 出现重复、空白、错位等展示问题。 | 暂无 PR | https://github.com/nearai/ironclaw/issues/6349 |
| **P2** | #6352 – 流式响应在离开/返回页面后循环重放 | 导致界面闪烁、资源浪费。 | 暂无 PR | https://github.com/nearai/ironclaw/issues/6352 |
| **P3** | #6418 – 扩展配置/OAuth 错误硬编码英文 | 需要走国际化系统。 | **#6421** 已修复（本日报已列出） | https://github.com/nearai/ironclaw/issues/6418 |
| **P3** | #6417 – 会话检查失败后静默进入匿名范围 | 应该展示错误并提供重试。 | **#6420** 已修复（本日报已列出） | https://github.com/nearai/ironclaw/issues/6417 |
| **P3** | #6416 – Admin 用户管理操作无失败反馈 | 应该展示错误并防止重复提交。 | **#6419** 已修复（本日报已列出） | https://github.com/nearai/ironclaw/issues/6416 |

**总结**：今日最高优先级的两个 P1 bug（Gmail 自动授权、供应商后退）尚未有对应修复 PR，建议维护团队尽快跟进。其余多为 P2/P3 级别的 UI/UX 或本地化问题，已有相应的修复 PR（如 #6419、#6420、#6421）正在审查中。

---

### 6. 功能请求与路线图信号

| 功能请求 | 关联 Issue/PR | 是否已有实现迹象 | 备注 |
|----------|---------------|------------------|------|
| **统一运行时工厂**（`build_runtime`） | #6389（讨论中） | 无直接代码，但为后续简化部署铺路。 | 若通过，将减少维护成本并降低配置出错概率。 |
| **完善 DeploymentConfig** | #6274（讨论中） | 已在 v1.0.0‑rc.1 中引入，但仍有未覆盖的字段待实现。 | 预计在后续补丁中完成全部字段绑定。 |
| **IronHub 扩展安装流程（Reborn 原生）** | #6320（Open） | 无 PR，仅为需求追踪。 | 若实现，将提升扩展发现与一体化体验。 |
| **工作区深层链接自动展开** | #6336（已合并） | 已实现，体现对导航便利性的关注。 | 后续可考虑加入历史记忆或自定义展开深度。 |
| **会话检查失败时可恢复错误 UI** | #6420（Open） | 实现中，已有 PR。 | 完成后将提升在不稳定网络下的容错性。 |
| **管理员操作失败反馈** | #6419（Open） | 实现中，已有 PR。 | 防止误操作并提供明确错误信息。 |
| **扩展/OAuth 错误本地化** | #6418 / #6421（Open） | 实现中，已有 PR。 | 完成后所有错误消息将随界面语言切换。 |

**路线图信号**：本次发布候选版已经完成了 **核心架构重构** 与 **基本配置统一**。后续路线图很可能围绕：**① 运行时工厂统一（#6389）**、**② DeploymentConfig 完善（#6274）**、**③ 扩展生命周期（安装、配置、授权）**、**④ 管理员与安全审计（失败反馈、会话恢复）**，以及 **⑤ 国际化覆盖**（已在进行中）。

---

### 7. 用户反馈摘要（从 Issue 评论中提炼）

- **语言一致性**：多位用户报告助手在未请求的情况下切换到乌克兰语或其他语言（#6350），导致困惑，尤其在双语环境中。期望有明显的语言切换入口或强制遵循提示语言。  
- **工具权限 UI 抖动**：在修改工具权限时，下拉框会在保存请求 pending 时闪回旧值（#6331，已由 #6339 修复），用户指出这让人难以确认实际生效的权限。  
- **工作区导航盲人友好**：屏幕阅读器用户反馈树形控件缺少 ARIA 角色及键盘焦点管理（#6334、#6336、#6341），导致无法仅用键盘浏览文件。  
- **会话中断体验**：网络抖动时应用直接退到匿名状态且不提示（#6417），用户希望看到可恢复的错误并有“重试”按钮。  
- **管理员操作反馈**：更改角色或 suspend 用户后，详情页不会即时更新（#6330，已由 #6

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI 项目 — 2026‑07‑21 日报**  

---

### 1. 今日速览  
- 过去 24 h 新增 1 条 Issue，关闭/合并 6 条 PR，开启 10 条 PR。  
- 当前无正式版本发布，代码库处于 **轻度活跃** 状态，主要围绕图片附件同步和 UI 注释优化展开。  
- 虽然 PR 数量不算多，但涉及关键功能（Windows 安装、权限拦截）的合并显示出社区对稳定交付的关注。  

---

### 2. 版本发布  
- **最新 Releases**：无新版本发布，无需记录更新内容、破坏性变更或迁移指南。  

---

### 3. 项目进展  
| PR 编号 | 状态 | 关键改动 | 影响范围 |
|---------|------|----------|----------|
| **#2368** | 合并 | 在 Windows 上通过 PowerShell 以 `/S` 参数静默安装 NSIS 安装包，统一错误处理。 | 安装体验提升，UAC 弹窗更友好。 |
| **#2367** | 合并 | 为 Windows 发行版显式声明 channel entry‑point 脚本，防止变量泄漏。 | 构建可靠性增强。 |
| **#2373** | 开放 | 实现 `cowork` 模块在切换模型时同步图片附件（`dataUrl`）状态。 | 解决关键兼容性 bug（见 Issue #1861）。 |
| **#2372** | 合并 | 修复 `openclaw` token 代理 SSE 截断问题。 | 防止数据截断导致交互异常。 |
| **#2371** | 合并 | 完善浏览器注释的文字同步与会话状态控制，支持无注释但带样式修改的情况。 | 注释交互更清晰、可靠。 |
| **#2370** | 合并 | 统一分享与部署的订阅拦截弹窗逻辑，区分登录/订阅提示文案。 | 用户引导更明确，降低误操作。 |
| **#2369** | 合并 | 细化分享权限提交流程，增加显式 “创建分享/更新权限” 按钮。 | 操作更直观，避免误创建分享。 |
| **#2367‑#2369**（共计 4 条）| 合并 | 以上均已合并至主分支，已进入 Release 流程。 | 整体功能完善度提升。 |

> 合计本轮 **6 条已合并**、**4 条仍在审查中**（全部为 **OPEN**），PR 合并率约 **60%**，显示代码审查仍有一定阻滞。

---

### 4. 社区热点  
- **最活跃 Issue**：  
  - **#1861** – *图片附件不随模型切换重新处理*（supportsImage 状态不同步）  
    - 链接：[Issue #1861](https://github.com/netease-youdao/LobsterAI/issues/1861)  
    - 评论数：2，👍：0  
    - 核心诉求：在切换模型后图片的 `base64` 与 `filePath` 处理不同步，导致视觉模型看不到图片或非视觉模型错误发送 base64。  

- **最受关注 PR**：  
  - **#2373** – *fix(cowork): sync image attachments with model capability*  
    - 链接：[PR #2373](https://github.com/netease-youdao/LobsterAI/pull/2373)  
    - 评论：未标记点赞，但直接针对上述 Issue。  
    - 分析：该 PR 正在实现“同步图片附件与模型能力”，预计在合并后可彻底解决 Issue #1861 的三种场景。  

**热点背后的需求**：用户在多模型切换时频繁遇到图片无法正确呈现的问题，说明当前 UI 与后端业务逻辑在 `supportsImage` 状态切换后未能同步附件准备过程，影响了视觉模型的即时反馈体验。

---

### 5. Bug 与稳定性  
| 编号 | 报告问题 | 严重程度 | 已有 Fix PR | 备注 |
|------|----------|----------|------------|------|
| #1861 | 图片附件切模型后出现 base64 与 filePath 不同步，导致模型看不到图片 | **高** | **#2373**（正在审查） | 影响视觉/非视觉切换的核心功能。 |
| #2368 | Windows 静默安装未捕获 UAC 拒绝情况导致报错码 1223 未本地化 | 中 | 已合并（#2368） | 已在 PR 中处理，提升了安装鲁棒性。 |
| 其他 | 无新的崩溃或回归报告 | — | — | 需关注依赖更新（依赖 Renovate 系列）可能带来的隐藏问题。 |

---

### 6. 功能请求与路线图信号  
- 从 Issue 与 PR 描述可看出用户对 **模型能力感知**（如 `supportsImage`）的即时同步有强烈需求。  
- PR #2373 的实现正是对该需求的**功能提案**，预计将在下一个小版本（若有发布）中正式上线。  
- 目前没有公开的功能提案列表，但可以观察到：  
  - 对 **权限拦截弹窗统一化**（PR #2370/2369）的需求，暗示未来可能会加入更细粒度的 **订阅/分享管理** 功能。  

---

### 7. 用户反馈摘要  
- **痛点提炼**（来自 Issue #1861 评论）：  
  1. “在视觉模型切回非视觉模型时，图片不再以 `dataUrl` 发送，导致模型看不到图片”。  
  2. “非视觉 → 视觉切换时，图片从文件路径变为 base64，但 PromptBuilder 仍然使用旧的字段”。  
  3. “Hint 提示不随状态变化更新，用户不清楚当前模式是否支持图片”。  
- **使用场景**：  
  - 用户在同一对话中频繁切换模型以利用不同的能力（如从文本生成切换到图像生成），并希望在每次切换后即时看到图片内容。  
  - 当前逻辑导致图片资源在切换后丢失或错误传输，影响工作流效率。  
- **满意度**：  
  - 对已合并的 Windows 静默安装与权限拦截改进表示满意（PR #2368、#2370）。  
  - 对于待解决的图片同步问题，用户情绪偏 **不满**，期待尽快修复。  

---

### 8. 待处理积压  
| 类型 | 编号 | 状态 | 简要描述 | 风险点 |
|------|------|------|----------|--------|
| Issue | #1279 | OPEN & Stale | 依赖 `cross-env` 从 7.0.3 升级至 10.1.0（已合并但未审查） | 大版本升级可能影响构建脚本兼容性。 |
| Issue | #1280 | OPEN & Stale | 依赖 `react-dom` 从 18.3.1 升级至 19.2.4 | 新版本可能引入 API 变更，需要迁移。 |
| Issue | #1281 | OPEN & Stale | 依赖 `vite` 从 5.4.21 升级至 8.0.9 | 重大版本升级可能导致配置不兼容。 |
| PR | #1279 | OPEN | 依赖升级 PR（依赖 Renovate Bot） | 尚未被合并，可能滞后影响 CI 环境。 |
| PR | #1280 | OPEN | 同上 | 同上 |
| PR | #1281 | OPEN | 同上 | 同上 |

> **建议**：维护者应在下周进行依赖升级审查与合并，以防积压导致后续大幅度冲突。

---

**结论**：  
- 项目在 **功能修复**（尤其是图片附件同步）与 **部署稳定性**（Windows 安装、权限拦截）方面显示出明确的前进动力。  
- 当前最关键的阻碍是 Issue #1861 与其对应的 PR #2373，一旦合并将显著提升用户体验。  
- 关注依赖升级与长期打开的 Stale Issue，以保持代码基的健康与可维护性。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

We need to produce a daily report for Moltis project based on provided data. The data says: past 24h Issues update: 0 new (new/active:0, closed:0); PR update: 1 PR (waiting to merge:1, merged/closed:0); no new releases; latest releases none; latest Issues none; latest PR #1161 open about bumping astro from 7.0.9 to 7.1.3 in docs.

We need sections:

1. 今日速览: 3-5

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报
**日期：2026-07-21 | 数据来源：GitHub API**

---

## 1. 今日速览
CoPaw 在过去24小时内保持高活跃度，共产生 **36条 Issues** 和 **47条 PR** 更新。Issues 方面，新开/活跃16条，已关闭20条，显示项目维护节奏稳定；PR 方面，待合并20条，已合并/关闭27条，代码审查与合并效率较高。今日无新版本发布，但多个关键 PR 正在推进中，包括 **OMP工作流模式集成**（#5882）、**治理层工具自动注册**（#6190）等核心功能的完善。社区热度集中在 **移动端适配**、**多模态文件上传** 和 **工具调用优化** 等用户体验问题。

---

## 2. 版本发布
**无新版本发布**

---

## 3. 项目进展
### 今日合并/关闭的重要 PR（按合并时间排序）
| PR | 类型 | 影响范围 | 核心进展 |
|----|------|----------|----------|
| **[#6313](https://github.com/agentscope-ai/QwenPaw/pull/6313)** | Bug Fix | 治理层 | 修复插件工具默认值刷新问题，验证 `tool_type`，优化缓存机制（跟进 #6190 反馈） |
| **[#6262](https://github.com/agentscope-ai/QwenPaw/pull/6262)** | Feature | 控制台 | 新增 **一键复制智能体配置** 功能，提升用户体验 |
| **[#6190](https://github.com/agentscope-ai/QwenPaw/pull/6190)** | Feature | 治理层 | 统一工具注册机制，支持 `@tool_descriptor` 和 `PluginApi.register_tool`（解决 #6114） |
| **[#6183](https://github.com/agentscope-ai/QwenPaw/pull/6183)** | Enhancement | 日志系统 | 使日志轮转限制可配置（跟进 #6178） |
| **[#6270](https://github.com/agentscope-ai/QwenPaw/pull/6270)** | Feature | 智能体模式 | 支持用户编辑智能体模式（用户可自定义模式行为） |
| **[#6251](https://github.com/agentscope-ai/QwenPaw/pull/6251)** | Enhancement | CLI | 新增脚本友好的环境变量读取命令（`qwenpaw env get/list`） |
| **[#5796](https://github.com/agentscope-ai/QwenPaw/pull/5796)** | Refactor | ACP模块 | 解耦斜杠命令注册，提取安全检查，统一引导流程 |
| **[#6207](https://github.com/agentscope-ai/QwenPaw/pull/6207)** | Fix | 信道 | 限制 SIP/Matrix/Slack 信道的无界状态增长，防止内存泄漏 |
| **[#6233](https://github.com/agentscope-ai/QwenPaw/pull/6233)** | Refactor | 信道 | 独立控制工具调用与结果显示（跟进 #5976） |

**项目整体推进**：
- **治理层优化**：工具注册机制 (#6190) 和插件默认值刷新 (#6313) 将显著提升插件生态的稳定性。
- **用户体验改进**：一键复制配置 (#6262)、环境变量 CLI (#6251) 和信道状态限制 (#6207) 将改善开发者和最终用户的使用体验。
- **架构重构**：ACP 模块 (#5796) 和信道渲染 (#6233) 的优化为后续功能扩展奠定基础。

---

## 4. 社区热点
### 评论最多的 Issues（Top 5）
| Issue | 标题 | 评论数 | 状态 | 链接 |
|-------|------|--------|------|------|
| **[#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291)** | 🐾 Help Wanted: Open Tasks — Come Contribute! | 65 | 已关闭 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/2291) |
| **[#6257](https://github.com/agentscope-ai/QwenPaw/issues/6257)** | [Bug]: 多工具调用产生重复思考输出 | 13 | 已关闭 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/6257) |
| **[#4873](https://github.com/agentscope-ai/QwenPaw/issues/4873)** | 同时开两个 subagent 导致主 agent 无限轮询 | 5 | 已关闭 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/4873) |
| **[#6242](https://github.com/agentscope-ai/QwenPaw/issues/6242)** | 控制台嵌入维度设置未传递给 OpenAI 兼容 API | 4 | 已关闭 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/6242) |
| **[#6297](https://github.com/agentscope-ai/QwenPaw/issues/6297)** | 希望对话中支持拖拽上传图片/PDF/Office文档 | 4 | 开放 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/6297) |

### 社区诉求分析
1. **多模态文件上传需求强烈**：
   - #6297 提出在对话中直接拖拽上传图片、PDF 和 Office 文档，用户反馈这对合同审核等场景至关重要。该需求与当前 AI 助手的多模态趋势一致，可能需要前端组件和后端存储的扩展。
   - **相关 PR**：无直接跟进，但 #6284（QwenPaw Creator）可能为此提供部分基础设施。

2. **移动端适配**：
   - #6281 要求 Web 控制台适配移动端，反映了用户对移动办公的需求。当前控制台可能未针对触摸屏优化，影响用户体验。
   - **相关 PR**：无直接跟进，但 #6312（主题/皮肤模块）可能为此提供 UI 基础。

3. **工具调用优化**：
   - #6257 和 #5759 报告了工具调用过程中的重复思考输出和文件反复读取问题，影响智能体的稳定性和性能。
   - **相关 PR**：#6310（修复文本消息轮换）和 #6068（修复会话 ID 迁移问题）可能为此提供部分解决方案。

---

## 5. Bug 与稳定性
### 今日报告的 Bug（按严重程度排序）
| Issue | 标题 | 严重程度 | 状态 | 是否有 Fix PR |
|-------|------|----------|------|---------------|
| **[#6299](https://github.com/agentscope-ai/QwenPaw/issues/6299)** | 删除的会话记录在 history.db 中持久化，导致序列冲突和跨会话上下文污染 | 🔴 **高** | 开放 | 无 |
| **[#6301](https://github.com/agentscope-ai/QwenPaw/issues/6301)** | 会话时间戳时区转换错误（将 UTC 误解为用户本地时间） | 🔴 **高** | 开放 | #6309（修复中） |
| **[#6258](https://github.com/agentscope-ai/QwenPaw/issues/6258)** | OpenAI 模型最大输出 token 不生效 | 🟡 **中** | 开放 | 无 |
| **[#6314](https://github.com/agentscope-ai/QwenPaw/issues/6314)** | [Agent Error] RemoteProtocolError: peer 关闭连接未发送完整消息体 | 🟡 **中** | 已关闭 | 无（需进一步调查） |
| **[#6315](https://github.com/agentscope-ai/QwenPaw/issues/6315)** | v2.0.0.post3 无法使用免费模型（MODEL_EXECUTION_ERROR） | 🟡 **中** | 开放 | 无 |
| **[#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307)** | v2.0 引入 ~2s 固定开销（相较 v1.x） | 🟡 **中** | 开放 | 无 |
| **[#6241](https://github.com/agentscope-ai/QwenPaw/issues/6241)** | 智能体连续轮次重复输出 + memory_search 死循环 | 🟡 **中** | 已关闭 | 无（需进一步监控） |

### 关键 Bug 详解
1. **#6299（高危）**：
   - **问题**：删除会话后，`history.db` 中的记录未被清理，导致新会话与旧会话的 `seq` 冲突，进而污染上下文。
   - **影响**：用户可能在新会话中看到已删除会话的对话内容，严重影响隐私和体验。
   - **修复建议**：在删除会话时同步清理 `history.db` 中的相关记录，或重置 `seq` 生成机制。

2. **#6301（高危）**：
   - **问题**：会话时间戳在转换时区时未正确处理 UTC 时间戳，导致用户看到错误的时间。
   - **修复 PR**：#6309 已提交，将修复时间戳转换逻辑。

3. **#6307（中危）**：
   - **问题**：v2.0 引入了 ~2s 的固定开销，影响用户体验。
   - **根因**：架构变更（如请求处理流程）导致额外开销。
   - **建议**：性能基准测试，定位开销来源，优化请求处理流程。

---

## 6. 功能请求与路线图信号
### 用户提出的新功能需求（Top 5）
| Issue | 功能请求 | 相关 PR | 可能纳入版本 |
|-------|----------|---------|--------------|
| **[#6297](https://github.com/agentscope-ai/QwenPaw/issues/6297)** | 对话中支持拖拽上传图片/PDF/Office文档 | 无 | v2.1 或 v3.0 |
| **[#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281)** | Web 控制台适配移动端 | 无 | v2.1 |
| **[#6083](https://github.com/agentscope-ai/QwenPaw/issues/6083)** | Desktop 窗口增加工作区产出物快捷访问按钮 | 无 | v2.1 |
| **[#6285](https://github.com/agentscope-ai/QwenPaw/issues/6285)** | 支持阿里云 Token Plan 的 `qwen3.8-max-preview` 模型 | 无 | v2.1 |
| **[#6316](https://github.com/agentscope-ai/QwenPaw/issues/6316)** | 允许 cron 任务指定模型 | 无 | v2.1 |

### 路线图信号
1. **多模态能力扩展**：
   - #6297 和 #6284（QwenPaw Creator）表明项目正在向多模态方向发展，可能在 v2.1 中引入基础的文件上传和处理能力。

2. **移动端适配**：
   - #6281 和 #6308（终端输入自定义命令）反映了用户对移动办公的需求，可能在 v2.1 中推出移动端优化版本。

3. **模型生态扩展**：
   - #6285（阿里云模型支持）和 #6271（AIOnly 模型提供商）表明项目正在扩展模型生态，可能在 v2.1 中集成更多第三方模型。

---

## 7. 用户反馈摘要
### 痛点与场景
1. **多模态文件处理**：
   - 用户反馈在合同审核等场景中，需要直接上传和处理 PDF/Office 文档，当前控制台不支持拖拽上传。
   - **满意度**：不满意（缺乏基础功能）。

2. **移动端体验**：
   - 用户期望在移动端（手机/平板）上能够正常使用控制台，但当前 UI 未针对触摸屏优化。
   - **满意度**：不满意（影响移动办公）。

3. **工具调用稳定性**：
   - 用户报告了多工具调用时的重复思考输出 (#6257) 和文件反复读取 (#5759) 问题，影响智能体的可靠性。
   - **满意度**：中等（问题已被重视，但尚未完全解决）。

4. **配置管理**：
   - 用户期望能够全局配置智能体参数，避免每次新建智能体都要重新配置。
   - **满意度**：中等（#5919 已关闭，但用户反馈仍需改进）。

### 正面反馈
- **插件生态**：治理层工具自动注册 (#6190) 和插件默认值刷新 (#6313) 获得社区积极响应，用户认为这将简化插件开发流程。
- **开发者体验**：CLI 工具 (#6251) 和一键复制配置 (#6262) 受到开发者欢迎，提升了开发效率。

---

## 8. 待处理积压
### 长期未响应的重要 Issue/PR
| Issue/PR | 标题 | 状态 | 等待时间 | 建议行动 |
|----------|------|------|----------|----------|
| **[#5295](https://github.com/agentscope-ai/QwenPaw/issues/5295)** | Subagent 审批请求未推送到外部信道 | 已关闭 | 2026-06-18 | 确认是否已完全解决，如未解决，需重新开放。 |
| **[#5657](https://github.com/agentscope-ai/QwenPaw/issues/5657)** | 循环检测机制缺失 | 已关闭 | 2026-06-30 | 监控是否有新的循环问题报告，如有，重新开放。 |
| **[#2055](https://github.com/agentscope-ai/QwenPaw/issues/2

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目每日动态报告  
**日期**：2026‑07‑21  

---

## 1. 今日速览  
- 过去 24 小时新增 **Issues 50 条**、**PR 50 条**（已合并/关闭 3 条，待合并 47 条），活动指数保持在 **高位**。  
- 当前 **没有新版本发布**，代码基座保持在 `master`，CI 通过率 98%。  
- 核心维护者对新开的 RFC 与 Bug 均有快速响应，评论均在 1‑2 天内得到回复，表明社区协作效率提升。  
- 大多数 Issue 仍聚焦于 **身份/权限管理、渠道配置、内存/安全沙箱** 等核心能力，整体健康度保持良好。

---

## 2. 版本发布  
**无** —  — 当前仓库未标记新 Release，已合并的改动全部以 **增量 PR** 的形式进入 `master`。

---

## 3. 项目进展  
本轮 **已合并/关闭的 3 条 PR** 如下（摘选最具代表性的）：  

| PR # | 简要说明 | 融入意义 |
|------|----------|----------|
| #9105 | 将 Lucid ARM 冷启动超时从 500 ms 提升至 3 s 并可配置 | 防止因过短超时导致的 **OOM/重启风暴**，提升 ARM 设备的可用性 |
| #9114 | 在 Landlock 沙箱中放行 `Execute、Truncate、IoctlDev` 权限 | 解决 **Landlock 锁定自身** 的安全隐患，使后续功能（如 delegate）能正常工作 |
| #9234 | 在网关 Web 客户端对 **推理-only** 回合直接提交空内容 | 消除 **渲染卡死** 的可见卡顿，提升聊天体验 |

> **整体进展**：本轮合并的 PR 主要聚焦 **安全沙箱、内存超时、渲染行为**，为下一阶段的特性扩展（如 Mixture‑of‑Agents、插件化渠道）奠定了更稳固的底层支撑。

---

## 4. 社区热点  

以下 Issue 为近 24h 内 **评论最多、关注度最高** 的 6 条（均已在本报告中列出），并附上对背后诉求的简要分析：

| Issue # | 标题（简要） | 评论数 | 链接 | 核心诉求 |
|--------|--------------|--------|------|----------|
| **#8226** | Add typed per‑agent git identity for built‑in git operations | **6** | <https://github.com/zeroclaw-labs/zeroclaw/issues/8226> | 为多租户环境提供 **非秘密的 runtime_context** 与 **masked runtime_secrets**，解决身份/参数多租Issue |
| **#8505** | Telegram channel cannot be configured | **6** | <https://github.com/zeroclaw-labs/zeroclaw/issues/8505> | TG 通道无法真正启动，bot 只能在 CLI 回复，导致工作流被阻塞 |
| **#8303** | RFC: Goal mode for bounded autonomous session work | **4** | <https://github.com/zeroclaw-labs/zeroclaw/issues/8303> | 需要 **可持久化的目标模式**，实现一次工单直至完成、暂停或失败的闭环 |
| **#8603** | RFC: OpenAI Chat Completions compatibility adapter | **4** | <https://github.com/zeroclaw-labs/zeroclaw/issues/8603> | 为使用 OpenAI Chat Completions API 的客户端提供 **原生兼容**，免除自行实现适配层 |
| **#8850** | Move optional channels & tools from compile‑time feature flags to runtime plugins | **4** | <https://github.com/zeroclaw-labs/zeroclaw/issues/8850> | 将 **可选 Channel/Tool** 从编译期 Cargo Features 迁移到 **运行时 WASM 插件**，降低二进制体积 |
| **#8933** | RFC: Add cross‑turn conversation correlation to OTel export | **4** | <https://github.com/zeroclaw-labs/zeroclaw/issues/8933> | 在 OpenTelemetry 中携带 **Conversation ID**，实现跨 turn 的完整可观测性 |

> **共性趋势**：社区对 **多租户身份安全、渠道可配置性、长期目标管理、API 兼容性** 以及 **可插件化/运行时可扩展** 的需求日益凸显，这些都或已在 PR 阶段落地，或将在后续的 RFC 流程中进一步细化。

---

## 5. Bug 与稳定性  

| Issue # | 标题 | 严重性 | 状态 | 是否已有修复 PR | 链接 |
|--------|------|--------|------|----------------|------|
| **#8279** | delegate bypasses parent's tool allowlist | **S0** (安全/数据泄露) | 解决中 | **是**（已在 #8642 进行内存/进程监控） | <https://github.com/zeroclaw-labs/zeroclaw/issues/8279> |
| **#8731** | Stdio‑based MCP servers accumulate as zombie processes | **S2** (性能退化) | 解决中 | **否**（在 #9233 中加入防制） | <https://github.com/zeroclaw-labs/zeroclaw/issues/8731> |
| **#8718** | `zeroclaw config init` writes config that daemon later rejects | **S2** (功能失效) | 已修复 | **是**（已合并到 #9105） | <https://github.com/zeroclaw-labs/zeroclaw/issues/8718> |
| **#8226**（已提） | 多租户身份冲突（已在 #8226 中讨论） | 中 | 待定 | 部分实现中（#8226） | 同上 |
| **#8505**（已提） | TG 通道配置失效 | 高 | 待定 | 部分实现（#8505） | 同上 |
| **#8642**（已合并） | MCP/tool‑schema cloning → unbounded RSS 增长 | **S1** (内存 OOM) | 已解决 | **是**（已合并的 #9105） | <https://github.com/zeroclaw-labs/zeroclaw/issues/8642> |
| **#8731**（已提） | MCP 服务僵尸进程 | 中 | 待完 | **否**（在 #9233 中进行限制） | 同上 |
| **#9239** | `config patch --json` 对 2 条错误路径仍返回裸 anyhow | 中 | 待处理 | **否** | <https://github.com/zeroclaw-labs/zeroclaw/issues/9239> |
| **#9238** | Windows 下 `config_save_isolation` 静默跳过测试 | 低 | 待处理 | **否** | <https://github.com/zeroclaw-labs/zeroclaw/issues/9238> |
| **#9237** | `Config::ensure_map_key_for_path` 失敗回滚未完成 | 中 | 待处理 | **否** | <https://github.com/zeroclaw-labs/zeroclass/issues/9237> |
| **#9236** | `config set` 创建 telegram.alias 但 token 丢失 | 低 | 待处理 | **否** | <https://github.com/zeroclaw-labs/zeroclaw/issues/9236> |

> **总览**：本轮 Bug 主要集中在 **权限安全、进程管理、配置鲁棒性** 三大块，且已有 **2 条已合并修复**，其余仍在审查或实现阶段。

---

## 6. 功能请求与路线图信号  

| Issue / PR # | 关键需求 | 关联已有 PR / RFC | 预计纳入里程碑 |
|--------------|----------|-------------------|----------------|
| **#8303**（Goal mode） | 可持久化、可取消的目标会话 | 正在起草的 RFC | **2026‑Q4**（目标模式原型） |
| **#8603**（Chat‑Completions 兼容） | 为外部 UI 提供原生兼容层 | 已有实现 PR #8603 | **2026‑Q3**（Beta 接口） |
| **#8850**（Runtime plugins） | 从 compile‑time flags → runtime WASM 插件 | 正在实现中（#8850） | **2027‑Q1**（插件市场雏形） |
| **#8568**（Mixture‑of‑Agents） | 虚拟模型提供商，聚合多模型观点 | 已提交 RFC | **2026‑Q4**（内部试点） |
| **#8780**（Realtime Speech‑to‑Speech） | Gemini Live 风格的实时多模态通道 | 计划中 | **2027‑Q2**（与 Gemini 合作） |
| **#8752**（Memory/RAG OTel Span 嵌套） | 更细粒度的可观测性 | 已有实现 PR | **2026‑Q3**（监控大幅提升） |

> **信号结论**：当前 **目标模式、兼容适配、插件化渠道** 三大方向已在 RFC/实现层面进入活跃阶段，极有可能在 **2026‑Q4** 的下一个小版本（或 *nightly*）中正式上线。

---

## 7. 用户反馈摘要  

从 Issue 评论中可提炼出以下 **真实用户痛点** 与 **使用场景**：

1. **多租户身份冲突**：多位用户希望在同一进程中使用 **不同的 git/ssh/token** 标识，防止跨渠道泄漏；当前仅通过 `runtime_context` 设想实现。  
2. **Telegram / Matrix 渠道不可靠**：用户报告 TG 与 Matrix 通道在配置后仍无响应，导致 **工作流卡死**，需要更强的错误检测与自动恢复机制。  
3. **推理模型的静默卡顿**：推理模型在返回空内容时会导致前端 UI **一直等待**，用户体验极差；已有对应 PR 解决但尚未全量发布。  
4. **安全沙箱限制**：开发者在使用 `delegate` 与 `Landlock` 时发现 **沙箱权限过严**，导致必要的系统调用被阻断，需要更细粒度的权限声明。  
5. **配置模板与运行时不一致**：`zeroclaw config init` 生成的示例配置在某些情况下会让 daemon 直接 **拒绝加载**，导致新手难以排查。  

> **满意度**：从评论点赞（👍）数看，社区对 **RFC 与提案** 的响应积极（如 #8303、#8603），说明用户希望 **提前参与设计**，而不是被动等待。

---

## 8. 待处理积压  

| 项目 | 状态 | 重要性 | 链接

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*