# OpenClaw 生态日报 2026-07-17

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-17 03:50 UTC

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


# OpenClaw 项目动态日报 | 2026-07-17

## 1. 今日速览

OpenClaw 项目今日活跃度持续高涨，24小时内 Issues 500 条（新增/活跃 338 条，已关闭 162 条），PR 500 条（待合并 381 条，已合并/关闭 119 条）。重点关注平台支持扩展（Linux/Windows 应用）和 Codex 集成稳定性问题。项目整体健康度良好，社区参与度高，但存在一定的 Bug 回归和功能请求积压。

## 2. 版本发布

暂无新版本发布。

## 3. 项目进展

### 今日合并的重要 PR：

- **PR #109620** - 修复多账号频道停止时无限制触发 teardown hook 问题
- **PR #101429** - 限制忽略文件读取大小，防止工作空间扫描中的 OOM 漏洞
- **PR #101447** - 绑定 IDENTITY.md 读取大小，防止身份加载时的内存溢出
- **PR #109597** - 修复模板覆盖警告去重缓存容量限制
- **PR #109559** - 修复实时烟测试脚本中的表情处理问题

这些修复主要集中在安全边界、内存管理和开发体验优化方面，推进了项目的稳定性。

## 4. 社区热点

### 最具讨论性 Issues：

**#75 Linux/Windows Clawdbot Apps**  
[链接](https://github.com/openclaw/openclaw/issues/75) | 114 评论 | 81 👍  
这是历史悠久的平台支持请求，用户呼吁补充 Linux 和 Windows 版本的 Clawdbot 应用，以匹配已有的 macOS/iOS/Android 功能。反映了跨平台支持的重要性。

**#88312 Codex 转轮完成停滞回归**  
[链接](https://github.com/openclaw/openclaw/issues/88312) | 21 评论 | 5 👍  
2026.5.27 版本引入的严重回归问题，造成 ChatGPT Plus 子应用中的多工具代理转轮可靠失败。影响稳定性关键路径。

**#104721 工具结果返回占位符字符串**  
[链接](https://github.com/openclaw/openclaw/issues/104721) | 17 评论 | 1 👍  
严重回归问题，导致所有工具结果返回 "(see attached image)" 字面字符串而非实际输出，完全破坏了核心功能。

## 5. Bug 与稳定性

### P0 级严重问题（已关闭/已修复）：

- **#107220** 2026.7.1 网关崩溃循环 - 遗留内存侧载冲突导致启动失败
- **#106920** 网关无法重启 - 严格的启动迁移警告阻止网关启动
- **#107694** 网关启动失败 - 良性旧版迁移跳过被错误处理

### P1 级回归问题（正在解决）：

- **#88312** Codex 转轮完成停滞回归
- **#87744** Codex 支持的 Telegram 转轮重复超时
- **#91009** Codex PreToolUse 原生钩子 relay 生成 CPU 密集进程卡住网关 RPC
- **#107220** 上下文使用量误计算导致压缩失败

### 稳定性改进 PR：

- **PR #109600** 增强可调整分隔符交互体验
- **PR #108899** 显露 QQBot 回复会话冲突失败

## 6. 功能请求与路线图信号

### 高优先级功能请求：

**#7707 Memory Trust Tagging by Source**  
[链接](https://github.com/openclaw/openclaw/issues/7707)  
基于来源信任级别标记代理记忆条目，防止内存毒化攻击。涉及 session-state 和 security 领域，可能成为下一版本的安全增强重点。

**#10659 Masked Secrets - Prevent Agent from Accessing Raw API Keys**  
[链接](https://github.com/openclaw/openclaw/issues/10659)  
允许代理使用 API 密钥而无法查看它们，防 accidental leaks 和 prompt injection 攻击。与 PR #108979（缩小沙箱父目录）结合，显示项目在安全隐私方面的持续投入。

**#11665 Webhook hook sessions should reuse existing session**  
[链接](https://github.com/openclaw/openclaw/issues/11665)  
Webhook hook 会话应在 sessionKey 一致时复用现有会话，支持多轮对话。显示对状态管理一致性的关注。

## 7. 用户反馈摘要

### 核心痛点：

1. **平台不完整**：多位用户反映 Linux/Windows 缺少 Clawdbot 应用，影响跨平台部署
2. **Codex 集成问题**：频繁涌现 Codex 相关回归问题，显示近期更新对 Codex 支持的破坏
3. **UI/UX 退化**：用户抱怨 Control UI 在 2026.7.1 中的导航功能缺失（#108182）
4. **内存/资源泄漏**：多起报告关于僵尸进程积累导致性能下降（#97616）

### 满意点：

- 社区认为文档质比较好
- 新功能请求被积极响应和讨论

## 8. 待处理积压

### 长期未响应的重要 Issue：

**#38091 OpenClaw UI WebSocket 重连导致会话终止**  
[链接](https://github.com/openclaw/openclaw/issues/38091) | 7 评论 | 创建于 2026-03-06  
影响 WSL2 环境下的 WebChat 会话稳定性，值得维护者重视。

**#6757 Agent-triggered context compaction**  
[链接](https://github.com/openclaw/openclaw/issues/6757) | 4 评论 | 创建于 2026-02-02  
让代理自主触发上下文压缩的需求，与 #9409（上下文溢出错误消息改进）结合，显示管理需求。

**#86684 sessions_yield 子代理唤醒导致父分支压实**  
[链接](https://github.com/openclaw/openclaw/issues/86684) | 6 评论 | 创建于 2026-05-26  
回归问题影响会话状态管理，需要及时处理。


---

## 横向生态对比


# 2026-07-17 今日重點摘要

## 1. 重要更新

1. **Nanobot** - 修复 Moonshot kimi-k2.6 模型温度参数硬编码问题（PR #4962）
   - 将温度参数从硬编码的1.0改为0.6，解决模型调用失败的问题
   - 影响：Moonshot kimi-k2.6模型用户无法正常使用服务

2. **Hermes Agent** - 合并多个关键稳定性修复PR
   - 包括Telegram消息重复问题、模型选择器状态丢失、TTS超时等5个关键Bug修复
   - 影响：提升多通道通信稳定性和用户体验

3. **PicoClaw** - 解决ARM64启动器缺失问题（Issue #3260）
   - 修复Raspberry Pi 3B等ARM64设备上启动PicoClaw的问题
   - 影响：扩展了ARM架构平台的兼容性

4. **NanoClaw** - 修复WhatsApp Cloud适配器与原生WhatsApp适配器注册冲突（PR #2913）
   - 使用独立'whatsapp-cloud'键解决两者注册冲突
   - 影响：恢复WhatsApp双模式正常使用

5. **Moltis** - 发布新版本20260716.01，支持Kimi K3模型和高速编码模型
   - 新增Kimi K3和kimi-for-coding-highspeed模型支持
   - 影响：丰富模型目录，增强多模型应用能力

6. **OpenClaw** - 合并多项安全和内存管理修复PR
   - 包括限制忽略文件读取大小、绑定IDENTITY.md读取大小等3个安全边界修复
   - 影响：防止OOM漏洞，提升系统稳定性

7. **ZeroClaw** - 启动v0.8.4维护版本规划
   - 规划下一版本开发方向和时间表
   - 影响：指引项目后续开发重点

## 2. 活躍度概览

今日整体活躍度較高，特別是OpenClaw、Hermes Agent、Nanobot和NanoClaw項目活躍度突出。其中OpenClaw和Hermes Agent處於高度开发維護狀態（分别500条Issues/PR和50条Issues/PR），主要聚焦於Bug修復和穩定性提升；Nanobot則集中處理模型兼容性和會話管理問題；NanoClaw則積極解決多渠道整合中的穩定性問題。相對而言，ZeptoClaw和TinyClaw項目的活躍度較低，主要進行文檔維護和安全事件分類工作。


---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# **NanoBot 项目动态日报**
**日期：2026-07-17 | 数据来源：GitHub API**

---

## **1. 今日速览**
NanoBot 在过去24小时内保持高活跃度，共收到 **13个 PR** 和 **1个新 Issue**，但无新版本发布。核心修复集中在 **Moonshot kimi-k2.6 模型温度参数兼容性**（Issue #4961 + PR #4962）、**会话缓存优化**（PR #4957、#4956）、**WebUI 稳定性**（PR #4954）等关键领域。社区贡献者响应迅速，但部分 PR 仍需维护者审核（12个待合并）。项目整体向 **稳定性优化** 和 **用户体验提升** 方向推进，但仍有技术债务（如 Docker 安全默认配置）。

---

## **2. 版本发布**
**无新版本发布**。

---

## **3. 项目进展**
### **已合并/关闭的重要 PR（共1条）**
- **[#4950](https://github.com/HKUDS/nanobot/pull/4950) [CLOSED] docs(readme): reflect community maintenance**
  - **贡献者**：Re-bin
  - **内容**：更新 README 中的维护状态，明确 NanoBot 现已由社区协作维护。
  - **意义**：提升项目透明度，吸引更多贡献者参与。

### **待合并的关键 PR（按优先级排序）**
| PR | 优先级 | 领域 | 核心改动 | 状态 |
|----|--------|------|----------|------|
| **[#4962](https://github.com/HKUDS/nanobot/pull/4962)** | P1 | Provider | 修复 Moonshot kimi-k2.6 温度参数硬编码（从 `1.0` 改为 `0.6`） | ⏳ 待审核 |
| **[#4957](https://github.com/HKUDS/nanobot/pull/4957)** | P1 | Session | 限制内存会话缓存为 128 条 LRU，优化内存占用 | ⏳ 待审核 |
| **[#4956](https://github.com/HKUDS/nanobot/pull/4956)** | P1 | Session | 限制会话消息数量不超过 2000 条，防止文件溢出 | ⏳ 待审核 |
| **[#4955](https://github.com/HKUDS/nanobot/pull/4955)** | P1 | Security | 移除 Docker Compose 默认配置中的 `SYS_ADMIN` 和无限制 AppArmor/seccomp | ⏳ 待审核 |
| **[#4954](https://github.com/HKUDS/nanobot/pull/4954)** | P1 | WebUI | 修复子代理（subagent）延迟响应的 WebUI 显示问题 | ⏳ 待审核 |

**进展总结**：
- **修复导向**：13个 PR 中 **8个（61.5%）** 为 P1 级别的 Bug 修复，涵盖 **提供商兼容性、会话管理、WebUI 稳定性、安全性**。
- **社区贡献活跃**：多个贡献者（如 `KDB-Wind`、`Re-bin`、`Krislu1221`）在同一天提交多个高质量 PR，显示社区活力。
- **审核瓶颈**：12个 PR 待合并，可能影响下一版本发布节奏。

---

## **4. 社区热点**
### **最活跃 Issue**
- **[#4961](https://github.com/HKUDS/nanobot/issues/4961) [OPEN] [bug] Moonshot kimi-k2.6 requires temperature=0.6, but registry hardcodes 1.0**
  - **发起人**：SkyLeo-ozim
  - **关注度**：👍 0（暂无点赞，但 PR #4962 已跟进）
  - **背景**：Moonshot API 更新后，kimi-k2.6 模型仅接受 `temperature=0.6`，而 NanoBot 的注册表仍强制设置为 `1.0`，导致所有请求失败。
  - **社区反应**：问题被立即识别并提交修复 PR，显示用户对模型兼容性的高度关注。

### **最活跃 PR**
- **[#4957](https://github.com/HKUDS/nanobot/pull/4957) fix(session): bound the in-memory session cache**
  - **贡献者**：KDB-Wind
  - **关注度**：👍 0（技术讨论较少，但修复了内存溢出风险）
  - **背景**：`SessionManager` 的无限制缓存导致内存占用过高，新 PR 引入 128 条 LRU 限制 + 弱引用溢出缓存。

---

## **5. Bug 与稳定性**
### **严重 Bug（需立即关注）**
| Issue/PR | 严重程度 | 影响范围 | 状态 | 修复进展 |
|----------|----------|----------|------|----------|
| **[#4961](https://github.com/HKUDS/nanobot/issues/4961)** | 🔴 **高** | Moonshot kimi-k2.6 模型 API 调用失败 | OPEN | PR #4962 已提交 |
| **[#4952](https://github.com/HKUDS/nanobot/pull/4952)** | 🟡 **中** | UTF-16 代理字符导致请求失败（UnicodeEncodeError） | OPEN | PR #4952 已提交 |
| **[#4959](https://github.com/HKUDS/nanobot/pull/4959)** | 🟡 **中** | 重试机制延迟不足（导致 API 限流） | OPEN | 待审核 |

### **中等 Bug**
- **[#4960](https://github.com/HKUDS/nanobot/pull/4960)**：修复 MCP 路径中的任务取消逻辑，避免误报 `CancelledError`。
- **[#4953](https://github.com/HKUDS/nanobot/pull/4953)**：WebUI 添加本地文件夹选择器桥接功能。

**稳定性趋势**：
- **会话管理** 和 **WebUI** 领域修复较多，显示项目在 **用户体验优化** 上投入较大。
- **安全性** 方面，Docker 默认配置已硬化（PR #4955），但需要文档更新以指导用户。

---

## **6. 功能请求与路线图信号**
### **用户提出的新功能需求**
- **无新功能 Issue** 今日提交，但 PR 中有以下趋势：
  1. **部署简化**：PR #4937（Render 一键部署）显示用户希望简化部署流程。
  2. **国际化**：PR #4958（繁体中文本地化改进）反映用户对多语言支持的需求。
  3. **搜索增强**：PR #4951（Nimble 搜索提供商）扩展了 Web 搜索能力。

### **可能被纳入下一版本的功能**
| 功能 | 相关 PR/Issue | 优先级 | 可能影响的版本 |
|------|---------------|--------|----------------|
| Moonshot 模型兼容性修复 | #4962 | P1 | vX.X.X（紧急） |
| Docker 安全默认配置 | #4955 | P1 | vX.X.X |
| 会话缓存优化 | #4957, #4956 | P1 | vX.X.X |
| WebUI 子代理修复 | #4954 | P1 | vX.X.X |

---

## **7. 用户反馈摘要**
从今日 Issues/PRs 评论中提炼的用户痛点：
1. **模型兼容性问题**：
   - 用户反馈 Moonshot kimi-k2.6 模型 API 变更导致 NanoBot 无法正常调用（Issue #4961）。
   - **痛点**：第三方 API 变更导致现有功能失效，缺乏自动适配机制。
2. **部署复杂度**：
   - PR #4937（Render 一键部署）的出现表明用户希望简化部署流程。
   - **痛点**：Docker/K8s 配置复杂，新用户入门困难。
3. **国际化需求**：
   - PR #4958（繁体中文改进）反映用户对多语言支持的重视。
   - **痛点**：非英语用户体验有待提升。

---

## **8. 待处理积压**
### **长期未响应的重要 Issue/PR**
| 编号 | 类型 | 题目 | 创建时间 | 状态 | 建议行动 |
|------|------|------|----------|------|----------|
| **[#4959](https://github.com/HKUDS/nanobot/pull/4959)** | PR | fix: add one second to retry after delays | 2026-07-16 | OPEN | 优先审核（涉及 API 限流） |
| **[#4960](https://github.com/HKUDS/nanobot/pull/4960)** | PR | fix: preserve real cancellation in MCP paths | 2026-07-16 | OPEN | 优先审核（稳定性关键） |
| **[#4958](https://github.com/HKUDS/nanobot/pull/4958)** | PR | Improve zh-TW Traditional Chinese locale | 2026-07-16 | OPEN | 社区驱动，可快速合并 |

### **维护者注意事项**
1. **审核瓶颈**：12个 PR 待合并，建议分配更多维护者或设置自动化测试加速流程。
2. **安全默认配置**：PR #4955 已修复 Docker 安全问题，但需要更新文档（如 `docker-compose.yml` 示例）。
3. **模型兼容性**：Moonshot kimi-k2.6 的紧急修复（PR #4962）应优先处理，避免用户流失。

---
**总结**：NanoBot 在稳定性和用户体验优化上投入较大，但审核流程和文档更新需要跟进。社区活跃度高，但部分修复需尽快合并以提升项目健康度。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# **Hermes Agent 项目动态日报**
**日期：2026-07-17** | **数据来源：GitHub (NousResearch/hermes-agent)**

---

---

## **📊 今日速览**
- **活跃度极高**：过去24小时内 **50个新Issues**（39个活跃，11个已关闭）和 **50个PR**（49个待合并，1个已合并），项目处于高度开发与维护状态。
- **无新版本发布**：当前稳定在 `0.18.2`，团队专注于修复Bug和优化功能。
- **核心关注点**：
  - **Bug修复**：提示缓存（prompt cache）、模型选择器状态丢失、TTS超时、Telegram消息重复等问题频发，多个PR已提交修复。
  - **功能扩展**：插件间事件总线（event bus）、多模型路由、Windows代理支持等需求活跃。
  - **稳定性提升**：网关（gateway）和桌面端（Desktop）的消息处理逻辑持续优化。

---

---

## **🚀 版本发布**
**无新版本发布**。当前最新版本为 `0.18.2`（commit `2ccfdb2`）。

---

---

## **✅ 项目进展**
### **已合并/关闭的重要PR**
| PR | 标题 | 贡献者 | 影响 | 链接 |
|----|------|--------|------|------|
| **#66079** | `fix(desktop): stop auto-opening file tree on new session creation` | kyssta-exe | 修复桌面端新会话自动打开文件树的问题（关闭 [#66059](https://github.com/NousResearch/hermes-agent/issues/66059)） | [PR #66079](https://github.com/NousResearch/hermes-agent/pull/66079) |
| **#66078** | `fix(title): runtime validator stops stale background titling` | teknium1 | 防止后台标题生成重新加载已卸载的模型（修复 [#19027](https://github.com/NousResearch/hermes-agent/issues/19027)） | [PR #66078](https://github.com/NousResearch/hermes-agent/pull/66078) |
| **#66077** | `fix: keep API keys masked in status diagnostics` | aladdinhamed | 修复 `--all` 标志下 API 密钥泄露的安全问题 | [PR #66077](https://github.com/NousResearch/hermes-agent/pull/66077) |
| **#66076** | `fix(tui): hide npm console window during TUI dependency install on Windows` | bbasketballer75 | 修复 Windows TUI 安装依赖时弹出 npm 控制台窗口的问题 | [PR #66076](https://github.com/NousResearch/hermes-agent/pull/66076) |
| **#66024** | `feat(gateway): /branch defaults to a new thread; --here keeps surface` | anpicasso | 为 `/branch` 命令添加默认新线程支持（关闭 [#66023](https://github.com/NousResearch/hermes-agent/issues/66023)） | [PR #66024](https://github.com/NousResearch/hermes-agent/pull/66024) |
| **#65793** | `fix(cli): OpenRouter missing from PROVIDER_REGISTRY` | kevin-crytcl | 修复 OpenRouter 提供商在桌面端模型选择器中缺失的问题 | [PR #65793](https://github.com/NousResearch/hermes-agent/pull/65793) |
| **#65835** | `feat(cli): kimi-coding built-in catalog missing k3 and kimi-for-coding-highspeed` | LunatikSSS | 更新 Kimi 模型目录，添加 `k3` 和 `kimi-for-coding-highspeed` | [PR #65835](https://github.com/NousResearch/hermes-agent/pull/65835) |

**进展总结**：
- **稳定性修复**：桌面端、TUI、网关的多个回归问题得到解决，用户体验提升。
- **安全性增强**：API 密钥掩码、提供商注册表完整性等问题被修复。
- **功能扩展**：`/branch` 命令的线程管理、Kimi 模型目录更新等功能落地。

---

---

## **🔥 社区热点**
### **讨论最活跃的 Issues（按评论数排序）**
| Issue | 标题 | 作者 | 评论数 | 状态 | 链接 |
|-------|------|------|--------|------|------|
| **#56776** | Claude 模型在多模型 OpenAI 兼容网关上提示缓存命中率为 0% | Enough1122 | 6 | OPEN | [Issue #56776](https://github.com/NousResearch/hermes-agent/issues/56776) |
| **#61265** | Hermes 向本地 OpenAI 兼容模型发送极大提示，导致多分钟卡顿 | anthonydigrazia | 6 | OPEN | [Issue #61265](https://github.com/NousResearch/hermes-agent/issues/61265) |
| **#42972** | Windows 桌面端安装失败 | meshailabs | 5 | OPEN | [Issue #42972](https://github.com/NousResearch/hermes-agent/issues/42972) |
| **#64164** | 插件间事件总线功能请求 | teknium1 | 4 | OPEN | [Issue #64164](https://github.com/NousResearch/hermes-agent/issues/64164) |
| **#66045** | Codex 传输的 `prompt_cache_key` 超长导致 400 错误 | gracejudy | 3 | OPEN | [Issue #66045](https://github.com/NousResearch/hermes-agent/issues/66045) |
| **#53002** | Z.ai 429/1305 错误在 chat/completions 路径上持续存在 | pandudpn | 3 | OPEN | [Issue #53002](https://github.com/NousResearch/hermes-agent/issues/53002) |

**热点分析**：
1. **提示缓存问题**（[#56776](https://github.com/NousResearch/hermes-agent/issues/56776)、[#66045](https://github.com/NousResearch/hermes-agent/issues/66045)）：
   - 用户反馈 Claude 和 Codex 模型的提示缓存机制在特定场景下失效，导致成本上升和性能下降。
   - **背后诉求**：优化多模型网关的缓存命中率，减少重复请求。
2. **本地模型性能问题**（[#61265](https://github.com/NousResearch/hermes-agent/issues/61265)）：
   - Hermes 向本地模型发送过大提示，导致延迟和卡顿。
   - **背后诉求**：优化提示构建逻辑，支持本地模型的流式处理。
3. **插件生态扩展**（[#64164](https://github.com/NousResearch/hermes-agent/issues/64164)）：
   - 用户希望插件间能通过事件总线进行解耦通信。
   - **背后诉求**：构建更模块化、可测试的插件系统。
4. **Windows 兼容性**（[#42972](https://github.com/NousResearch/hermes-agent/issues/42972)）：
   - 安装失败、代理设置不生效等问题频发。
   - **背后诉求**：提升 Windows 平台的稳定性和易用性。

---

---

## **🐛 Bug 与稳定性**
### **高优先级 Bug（P2 及以上）**
| 严重程度 | Issue | 标题 | 状态 | Fix PR | 链接 |
|----------|-------|------|------|--------|------|
| **P2** | #66045 | Codex 传输的 `prompt_cache_key` 超长导致 400 错误 | OPEN | [#66082](https://github.com/NousResearch/hermes-agent/pull/66082) | [Issue](https://github.com/NousResearch/hermes-agent/issues/66045) |
| **P2** | #61265 | Hermes 向本地模型发送极大提示，导致卡顿 | OPEN | 无 | [Issue](https://github.com/NousResearch/hermes-agent/issues/61265) |
| **P2** | #65743 | 桌面端模型选择器切换后不保存状态 | OPEN | 无 | [Issue](https://github.com/NousResearch/hermes-agent/issues/65743) |
| **P2** | #66074 | 网关排队跟进消息交付意外的静默标记 | OPEN | [#66082](https://github.com/NousResearch/hermes-agent/pull/66082) | [Issue](https://github.com/NousResearch/hermes-agent/issues/66074) |
| **P2** | #53002 | Z.ai 429/1305 错误在 chat/completions 路径上持续 | OPEN | 无 | [Issue](https://github.com/NousResearch/hermes-agent/issues/53002) |
| **P2** | #65650 | CLI 模型选择器在启用 `discover_models` 时卡顿 (~5s) | OPEN | 无 | [Issue](https://github.com/NousResearch/hermes-agent/issues/65650) |
| **P2** | #66030 | Dashboard 频道测试按钮未反映拒绝所有授权的状态 | OPEN | 无 | [Issue](https://github.com/NousResearch/hermes-agent/issues/66030) |

### **已修复但待合并的 PR**
| PR | 修复的 Issue | 状态 | 链接 |
|----|--------------|------|------|
| [#66082](https://github.com/NousResearch/hermes-agent/pull/66082) | #66074（静默标记交付问题） | OPEN | [PR](https://github.com/NousResearch/hermes-agent/pull/66082) |
| [#66027](https://github.com/NousResearch/hermes-agent/pull/66027) | Telegram 消息重复问题 | OPEN | [PR](https://github.com/NousResearch/hermes-agent/pull/66027) |
| [#66026](https://github.com/NousResearch/hermes-agent/pull/66026) | Telegram 编辑失败后重复最终消息 | OPEN | [PR](https://github.com/NousResearch/hermes-agent/pull/66026) |

**风险提示**：
- **提示缓存问题**（[#56776](https://github.com/NousResearch/hermes-agent/issues/56776)、[#66045](https://github.com/NousResearch/hermes-agent/issues/66045)）可能影响多模型网关的性能和成本，建议优先处理。
- **本地模型卡顿**（[#61265](https://github.com/NousResearch/hermes-agent/issues/61265)）可能影响用户体验，需进一步调查提示构建逻辑。

---

---

## **🚀 功能请求与路线图信号**
### **高优先级功能请求**
| Issue | 功能 | 状态 | 相关 PR | 链接 |
|-------|------|------|---------|------|
| **#64164** | 插件间事件总线（`ctx.emit()`/`ctx.subscribe()`） | OPEN | [#66085](https://github.com/NousResearch/hermes-agent/pull/66085) | [Issue](https://github.com/NousResearch/hermes-agent/issues/64164) |
| **#66020** | 上下文感知编排器模型路由（自动选择最优模型） | OPEN | 无 | [Issue](https://github.com/NousResearch/hermes-agent/issues/66020) |
| **#41957** | 支持 Windows 系统代理设置 | OPEN | 无 | [Issue](https://github.com/NousResearch/hermes-agent/issues/41957) |
| **#65481** | 自定义提供商支持独立的 `models_url` | OPEN | 无 | [Issue](https://github.com/NousResearch/hermes-agent/issues/65481) |
| **#26881** | 为辅助任务添加 `skip_parameters` 配置 | OPEN | 无 | [Issue](https://github.com/NousResearch/hermes-agent/issues/26881) |

**路线图信号**：
1. **插件系统升级**：事件总线功能（[#66085](https://github.com/NousResearch/hermes-agent/pull/66085)）已提交 PR，可能在下一版本中落地。
2. **多模型智能路由**：用户强烈需求自动选择最优模型的功能（[#66020](https://github.com/NousResearch/hermes-agent/issues/66020)），但尚无 PR。
3. **Windows 兼容性**：系统代理支持（[#41957](https://github.com/NousResearch/hermes-agent/issues/41957)）和安装问题（[#42972](https://github.com/NousResearch/hermes-agent/issues/42972)）需优先解决。

---

---

## **💬 用户反馈摘要**
### **痛点**
1. **性能问题**：
   - 本地模型（如 Ollama、llama.cpp）在使用 BG Review 时出现 OOM 和严重卡顿（[#54115](https://github.com/NousResearch/hermes-agent/issues/54115)）。
   - 模型选择器在启用 `discover_models` 时卡顿 ~5 秒（[#65650](https://github.com/NousResearch/hermes-agent/issues/65650)）。
2. **稳定性问题**：
   - 桌面端消息重复渲染（[#63679](https://github.com/NousResearch/hermes-agent/issues/63679)）。
   - Telegram 消息处理逻辑存在竞态条件，导致重复或丢失（[#66027](https://github.com/NousResearch/hermes-agent/pull/66027)）。
3. **配置问题**：
   - Windows 安装失败（[#42972](https://github.com/NousResearch/hermes-agent/issues/42972)）。
   - OpenRouter 提供商在桌面端模型选择器中缺失（[#65793](https://github.com/NousResearch/hermes-agent/issues/65793)）。
4. **安全问题**：
   - Skills 功能默认不扫描安全性，可能导致恶意代码执行（[#53491](https://github.com/NousResearch/hermes-agent/issues/53491)）。

### **满意点**
- **功能丰富**：用户肯定了 Hermes 的多模型支持、插件系统和网关功能。
- **响应迅速**：多个 Bug 在数小时内获得 PR 修复（如 [#66074](https://github.com/NousResearch/hermes-agent/issues/66074) → [#66082](https://github.com/NousResearch/hermes-agent/pull/66082)）。

---

---

## **⚠

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-07-17

---

## 📊 **今日速览**
过去24小时内，PicoClaw 项目保持中等活跃度：新增 **2条Issues**（1条新开、1条关闭）和 **9条PR**（全部待合并，无合并/关闭记录）。无新版本发布。依赖更新类PR占比高（6/9），显示项目在持续维护依赖安全性。社区关注点集中在 **ARM64兼容性**（Issue #3260已关闭）和 **OpenAI GPT集成问题**（Issue #3195持续活跃）。整体开发节奏稳定，但需关注长期未合并的功能性PR（如#3118、#3115）的积压风险。

---

## 🚀 **版本发布**
**无新版本发布**。

---

## 📈 **项目进展**
- **已关闭Issue**：
  - [#3260](https://github.com/sipeed/picoclaw/issues/3260) **ARM64启动器缺失问题** 已解决（无PR关联，可能通过其他渠道修复）。
    **影响**：修复了Raspberry Pi 3B（aarch64）用户无法从官方网站下载的ARM64版本运行PicoClaw的问题，提升了ARM架构兼容性。

- **待合并PR亮点**：
  - [#3261](https://github.com/sipeed/picoclaw/pull/3261) **新增繁体中文（zh-TW）本地化**：为WebUI和文档添加台湾用语的繁体中文翻译，完善国际化支持。
  - [#3118](https://github.com/sipeed/picoclaw/pull/3118) **远程Pico WebSocket模式**：为`picoclaw agent`命令新增远程模式，支持通过WebSocket连接远程Pico实例（如`ws://localhost:18790/pico/ws`）。
  - [#3115](https://github.com/sipeed/picoclaw/pull/3115) **修复内联数据URL提取bug**：修复工具输出中误将`data:image/...`字符串当作媒体附件处理的问题，避免会话历史损坏。

- **依赖更新**：
  6个依赖更新PR（如[#3238](https://github.com/sipeed/picoclaw/pull/3238) AWS SDK、[#3262](https://github.com/sipeed/picoclaw/pull/3262) GitHub Actions）均为自动化提交，显示项目对安全性和兼容性的持续关注。

---
---

## 🔥 **社区热点**
| 类型 | ID | 标题 | 活跃度 | 核心诉求 | 状态 |
|------|----|------|--------|----------|------|
| **Issue** | [#3195](https://github.com/sipeed/picoclaw/issues/3195) | OpenAI GPT在NanoKVM默认配置下无法工作 | 3评论 | 用户在NanoKVM 2.4.0上配置GPT-5.4时遇到交互失败问题，需调试配置兼容性 | **开放（活跃）** |
| **PR** | [#3261](https://github.com/sipeed/picoclaw/pull/3261) | 新增繁体中文本地化 | 新提交 | 台湾用户群体对本地化的需求 | **待合并** |
| **PR** | [#3118](https://github.com/sipeed/picoclaw/pull/3118) | 远程WebSocket模式 | 长期待合并 | 远程部署场景下的灵活性需求 | **待合并（积压）** |

**分析**：
- **NanoKVM集成问题**（#3195）反映了PicoClaw在特定硬件环境下的兼容性挑战，可能涉及网络代理或API配置。
- **本地化PR**（#3261）显示项目在扩展亚洲市场（繁体中文用户）的努力。
- **远程模式PR**（#3118）若合并，将显著提升PicoClaw在分布式场景下的实用性。

---
---

## 🐞 **Bug 与稳定性**
| 严重程度 | ID | 问题描述 | 影响范围 | 修复状态 |
|----------|----|----------|----------|----------|
| **高** | [#3260](https://github.com/sipeed/picoclaw/issues/3260) | ARM64版本缺少启动器 | Raspberry Pi 3B用户 | **已关闭（可能已修复）** |
| **中** | [#3195](https://github.com/sipeed/picoclaw/issues/3195) | OpenAI GPT在NanoKVM上配置失败 | NanoKVM 2.4.0用户 | **未修复** |
| **中** | [#3115](https://github.com/sipeed/picoclaw/pull/3115) | 内联数据URL误识别为媒体附件 | 所有使用工具输出的用户 | **PR待合并** |

**建议**：
- 优先审查#3115（数据提取bug）和#3195（NanoKVM兼容性），避免影响更多用户。
- 验证#3260的修复是否已发布到官方下载页面。

---
---

## 🎯 **功能请求与路线图信号**
1. **远程部署支持**：
   - PR [#3118](https://github.com/sipeed/picoclaw/pull/3118) 提出的WebSocket远程模式，若合并，将满足用户对分布式AI代理的需求。
   - **路线图可能性**：高（已提交PR，功能完整）。

2. **本地化扩展**：
   - PR [#3261](https://github.com/sipeed/picoclaw/pull/3261) 补充繁体中文，可能预示后续会增加更多语言支持。
   - **路线图可能性**：中（需社区反馈驱动）。

3. **硬件兼容性**：
   - Issue [#3195](https://github.com/sipeed/picoclaw/issues/3195) 反映了对NanoKVM等嵌入式设备的支持需求，可能推动官方文档或配置模板的优化。

---
---

## 🗣️ **用户反馈摘要**
- **痛点**：
  - **ARM64兼容性**：用户在Raspberry Pi上遇到启动器缺失问题（#3260），反映了对非x86架构支持的迫切需求。
  - **配置复杂性**：NanoKVM用户难以正确配置OpenAI GPT（#3195），可能需要更详细的文档或自动化配置工具。
  - **数据处理bug**：工具输出中的内联数据URL被误识别（#3115），影响会话历史的完整性。

- **满意点**：
  - 社区对新功能（如远程模式、本地化）的积极参与（PR #3261、#3118）。

- **使用场景**：
  - 嵌入式设备（NanoKVM、Raspberry Pi）用户占比较高，需重点关注此类环境的兼容性。

---
---

## ⚠️ **待处理积压**
| 类型 | ID | 标题 | 创建时间 | 最后更新 | 风险等级 | 建议 |
|------|----|------|----------|----------|----------|------|
| **PR** | [#3118](https://github.com/sipeed/picoclaw/pull/3118) | 远程WebSocket模式 | 2026-06-12 | 2026-07-16 | **高** | 优先审查，功能完整且需求明确 |
| **PR** | [#3115](https://github.com/sipeed/picoclaw/pull/3115) | 修复内联数据URL提取 | 2026-06-12 | 2026-07-16 | **高** | 影响数据完整性，建议快速合并 |
| **Issue** | [#3195](https://github.com/sipeed/picoclaw/issues/3195) | OpenAI GPT配置问题 | 2026-06-30 | 2026-07-16 | **中** | 需维护者介入调试或提供临时解决方案 |
| **PR** | [#3238](https://github.com/sipeed/picoclaw/pull/3238) | AWS SDK依赖更新 | 2026-07-09 | 2026-07-16 | **低** | 可批量合并依赖更新 |

**提醒**：
- **#3118** 和 **#3115** 已积压1个月，建议在下周内完成审查，避免功能分支过时。
- **#3195** 需维护者回复，否则可能影响NanoKVM用户群体的体验。

---
---
**数据来源**：[PicoClaw GitHub](https://github.com/sipeed/picoclaw) | **生成时间**：2026-07-17 00:00 UTC
**免责声明**：本报告基于公开GitHub数据生成，仅供参考。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# **NanoClaw 项目动态日报**
**日期：2026-07-17**
*数据来源：GitHub (github.com/qwibitai/nanoclaw)*

---

---

## **1. 今日速览**
- **活跃度高**：过去24小时内 **19个PR** 和 **5个Issue** 更新，其中 **16个PR待合并**，显示项目处于高度开发活跃期。
- **核心功能推进**：WhatsApp通道适配器冲突修复（PR #2913、#2914已合并），安全漏洞修补（PR #3065），以及LLM供应商故障切换机制（PR #3057、#3069）等关键功能正在推进。
- **稳定性关注**：新报告的 **Discord URL渲染问题（#3071）** 和 **通道适配器启动失败被静默（#3064）** 需要紧急关注。
- **社区互动**：Issue #3016（速率限制误报）和 #2911（WhatsApp通道冲突）讨论活跃，反映用户对稳定性和多通道集成的强烈需求。

---

---

## **2. 版本发布**
❌ **无新版本发布**（过去24小时内无Releases）。

---

---

## **3. 项目进展**
### **已合并/关闭的重要PR**
| PR | 类型 | 影响 | 链接 |
|----|------|------|------|
| **#2913** | 🐛 **修复** | 修复WhatsApp Cloud适配器与原生WhatsApp适配器注册冲突（使用独立`whatsapp-cloud`键） | [链接](https://github.com/nanocoai/nanoclaw/pull/2913) |
| **#2914** | 📚 **文档** | 补充WhatsApp Cloud webhook路由和状态命名空间迁移文档 | [链接](https://github.com/nanocoai/nanoclaw/pull/2914) |
| **#3061** | ⚙️ **其他** | 非功能性PR（已关闭，无详细说明） | [链接](https://github.com/nanocoai/nanoclaw/pull/3061) |

### **关键功能推进**
- **LLM供应商故障切换**：
  - PR **#3057**（[链接](https://github.com/nanocoai/nanoclaw/pull/3057)）和 **#3069**（[链接](https://github.com/nanocoai/nanoclaw/pull/3069)）引入 **Claude↔Codex自动配额回退机制**，支持按代理组透明切换，避免因配额耗尽中断服务。
  - 文档已补充（`docs/fallback.md`）。
- **WhatsApp通道统一**：
  - PR **#3070**（[链接](https://github.com/nanocoai/nanoclaw/pull/3070)）修复Baileys和Cloud路径下发送者ID不一致的问题。
- **安全加固**：
  - PR **#3065**（[链接](https://github.com/nanocoai/nanoclaw/pull/3065)）修复 **本地回环webhook未认证漏洞（GHSA-h9g4-589h-68xv）**，防止特权提升攻击。
- **容器优化**：
  - PR **#3060**（[链接](https://github.com/nanocoai/nanoclaw/pull/3060)）为代理容器添加`--init`参数，解决僵尸进程问题。

---

---

## **4. 社区热点**
| Issue/PR | 讨论度 | 核心诉求 | 状态 | 链接 |
|----------|--------|----------|------|------|
| **#3016** | 💬 **2评论** | 速率限制事件被误报为配额错误（实际允许请求） | **开放** | [链接](https://github.com/nanocoai/nanoclaw/issues/3016) |
| **#2911** | 💬 **1评论** | WhatsApp Cloud与原生WhatsApp适配器冲突 | **已关闭（修复中）** | [链接](https://github.com/nanocoai/nanoclaw/issues/2911) |
| **#3070** | 🚀 **高优先级** | 修复WhatsApp发送者ID分歧 | **PR待合并** | [链接](https://github.com/nanocoai/nanoclaw/pull/3070) |
| **#3069** | 🚀 **高优先级** | LLM供应商故障切换 | **PR待合并** | [链接](https://github.com/nanocoai/nanoclaw/pull/3069) |

**分析**：
- 用户对 **多通道集成稳定性**（WhatsApp、Discord）和 **LLM可用性** 的关注度最高。
- 速率限制误报（#3016）可能影响生产环境监控，需优先修复。

---

---

## **5. Bug 与稳定性**
### **🔴 高优先级（需紧急修复）**
| Issue | 问题 | 影响 | 修复状态 | 链接 |
|-------|------|------|----------|------|
| **#3064** | 通道适配器启动失败被静默，主机仍报告健康 | 导致通道失效但无错误提示 | **PR #3067提交** | [Issue](https://github.com/nanocoai/nanoclaw/issues/3064) / [PR](https://github.com/nanocoai/nanoclaw/pull/3067) |
| **#3071** | Discord中代理发送的裸URL被渲染为文本（非可点击链接） | 降低用户体验 | **无修复PR** | [链接](https://github.com/nanocoai/nanoclaw/issues/3071) |
| **#3016** | 速率限制事件误报为配额错误 | 干扰日志监控 | **无修复PR** | [链接](https://github.com/nanocoai/nanoclaw/issues/3016) |

### **🟡 中优先级**
| Issue | 问题 | 修复状态 | 链接 |
|-------|------|----------|------|
| **#2916** | 无意义Issue（"hi"） | 无需处理 | [链接](https://github.com/nanocoai/nanoclaw/issues/2916) |

---

---

## **6. 功能请求与路线图信号**
| 功能需求 | 相关PR/Issue | 状态 | 可能性 |
|----------|--------------|------|--------|
| **自动LLM供应商回退** | PR #3057、#3069 | **开发中** | ⭐⭐⭐⭐⭐（高优先级，已有实现方案） |
| **Dial通道适配器（SMS + AI语音通话）** | PR #3041、#3050 | **开发中** | ⭐⭐⭐⭐（新通道扩展） |
| **Signal读回执支持** | PR #3062 | **开发中** | ⭐⭐⭐（改善用户体验） |
| **任务调度跨会话可见性** | PR #3068 | **开发中** | ⭐⭐⭐（修复现有功能缺陷） |

**判断**：
- **LLM回退机制** 和 **WhatsApp通道修复** 将优先纳入下一版本。
- **Dial通道** 可能作为实验性功能发布。

---

---

## **7. 用户反馈摘要**
### **😠 痛点**
- **多通道冲突**：WhatsApp Cloud与原生WhatsApp适配器注册冲突（#2911）导致消息路由错误。
- **日志噪音**：速率限制误报为配额错误（#3016）干扰监控。
- **Discord URL渲染**：裸URL无法点击（#3071）影响用户交互体验。
- **静默失败**：通道适配器启动失败无错误提示（#3064）导致调试困难。

### **😊 正面反馈**
- 用户对 **LLM故障切换机制**（PR #3057、#3069）表示期待，认为能显著提升可用性。
- **WhatsApp Cloud适配器修复**（PR #2913）获得社区认可。

---

---

## **8. 待处理积压**
| Issue/PR | 类型 | 创建时间 | 状态 | 风险 |
|----------|------|----------|------|------|
| **#2695** | 🐛 **修复** | 2026-06-06 | **PR开放** | Signal附件路径问题（容器无法读取图片） | [链接](https://github.com/nanocoai/nanoclaw/pull/2695) |
| **#2851** | 🧪 **测试** | 2026-06-24 | **PR开放** | 修复测试中轮询循环泄漏问题 | [链接](https://github.com/nanocoai/nanoclaw/pull/2851) |
| **#2798** | 📚 **文档** | 2026-06-17 | **PR开放** | 补充v2.1.17变更日志 | [链接](https://github.com/nanocoai/nanoclaw/pull/2798) |

**提醒**：
- **#2695** 和 **#2851** 为长期开放的PR，建议维护者优先审查合并。
- **#2798** 为文档更新，可快速合并以保持文档同步。

---
---
**总结**：NanoClaw项目当前处于 **高速开发期**，核心功能（WhatsApp、LLM回退、安全）推进顺利，但需关注 **Discord URL渲染** 和 **通道适配器静默失败** 等稳定性问题。社区对多通道集成和可用性改进需求强烈，建议优先处理高优先级Bug并加速关键PR的合并。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报
**日期：2026-07-17** | **数据来源：GitHub (nullclaw/nullclaw)**

---

---

## 📌 **今日速览**
过去24小时内，NullClaw 项目活跃度较低，**无新版本发布**，**无PR合并**，但新增 **1个高优先级Bug报告**（Issue #976）。该Issue描述了在 **aarch64 Linux** 环境下，处理 **入站Telegram消息时因栈溢出导致SIGSEGV崩溃** 的问题，严重影响用户体验（消息丢失、服务循环重启）。项目当前处于 **稳定性修复需求高** 的状态，建议维护者优先关注此问题。

---

## 🚀 **版本发布**
无新版本发布。

---

## 📈 **项目进展**
- **无PR合并**：今日无代码贡献或修复被合并，项目功能推进暂时停滞。
- **积压问题**：Issue #976 仍处于开放状态，需进一步调查和修复。

---

## 🔥 **社区热点**
### 🐛 **Issue #976: SIGSEGV on every inbound Telegram message**
- **链接**：[nullclaw/nullclaw#976](https://github.com/nullclaw/nullclaw/issues/976)
- **作者**：@wonthoss | **创建时间**：2026-07-16 | **评论数**：1 | **👍**：0
- **问题描述**：
  - 在 **aarch64 Linux** 上运行 **v2026.5.29** 时，每收到一条入站Telegram消息，`nullclaw gateway` 服务（以 `systemd` 管理，`Restart=always`）会因 **栈溢出（~512 KB）** 触发 **SIGSEGV** 崩溃。
  - 服务循环重启导致消息丢失，用户无法收到回复。
  - 问题 **100% 可复现**，影响生产环境稳定性。
- **社区反应**：
  - 目前仅1条评论，但问题严重性高（涉及 **崩溃 + 数据丢失**）。
  - 无临时解决方案或PR提交，需维护者紧急介入。
- **背后诉求**：
  - 用户期望 **跨平台稳定性**（特别是ARM架构支持）。
  - 需要 **栈大小配置** 或 **内存管理优化** 的修复。

---

## 🐞 **Bug 与稳定性**
| 严重程度 | Issue | 状态 | 影响 | 修复状态 |
|----------|-------|------|------|----------|
| **🔴 严重** | [#976](https://github.com/nullclaw/nullclaw/issues/976) | OPEN | aarch64 Linux下入站消息导致SIGSEGV，服务循环崩溃 | ❌ 无PR |

**分析**：
- 该Bug属于 **高优先级**，直接影响 **生产环境可用性**。
- 可能原因：
  - 入站消息处理线程 **栈大小不足**（默认512KB可能不够）。
  - aarch64架构下 **内存对齐或指针处理** 存在问题。
- 建议：
  - 临时方案：增加线程栈大小（如通过 `ulimit -s` 或 `pthread_attr_setstacksize`）。
  - 永久方案：优化消息处理逻辑，减少栈使用或切换到堆分配。

---

## 🎯 **功能请求与路线图信号**
- 当前无新功能请求，但 Issue #976 反映出用户对 **跨平台稳定性** 的强烈需求。
- 结合历史数据（如需），可推测下一版本可能聚焦：
  - **ARM架构兼容性修复**。
  - **内存管理优化**（如动态栈大小调整）。

---

## 💬 **用户反馈摘要**
- **痛点**：
  - **稳定性差**：aarch64环境下服务频繁崩溃，消息丢失。
  - **缺乏错误恢复机制**：`systemd` 自动重启导致消息无法重新处理。
- **使用场景**：
  - 作为 **Telegram Gateway** 部署在ARM服务器（如树莓派或云ARM实例）。
- **不满意的地方**：
  - 无法在ARM架构上稳定运行，限制了部署灵活性。
- **满意的地方**：
  - 无正面反馈（当前Issue以问题为主）。

---

## ⏳ **待处理积压**
| 类型 | ID | 标题 | 创建时间 | 状态 | 风险 |
|------|----|------|----------|------|------|
| Issue | [#976](https://github.com/nullclaw/nullclaw/issues/976) | SIGSEGV on every inbound Telegram message | 2026-07-16 | OPEN | 🔴 高（影响生产） |

**提醒**：
- Issue #976 **已超过24小时未响应**，建议维护者：
  1. 确认问题可复现性。
  2. 分配优先级修复（如调整线程栈大小或优化消息处理逻辑）。
  3. 发布临时补丁或工作区绕行方案。

---
---
**📊 项目健康度评估**：
- **活跃度**：⚠️ 低（无PR，仅1个严重Bug报告）
- **稳定性**：🔴 需紧急修复（aarch64崩溃问题）
- **社区参与**：🟡 一般（Issue反馈积极但PR贡献不足）

**建议**：优先解决 #976，并考虑发布热修复版本。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-07-17

---

---

## 📌 **今日速览**
IronClaw 项目今日活跃度极高：**40 个 PR**（29 个待合并，11 个已合并/关闭）和 **17 个 Issues**（14 个新开/活跃，3 个已关闭）。核心工作集中在 **Reborn 架构重构**（如 `ironclaw_reborn_composition` crate 精简、runtime.rs 测试模块拆分）和 **WebUI v2 功能完善**（主题切换、Toast 组件优化、工作区下载反馈）。安全性问题（如 #6170 文件系统访问漏洞）和稳定性 Bug（如 #6155 失败后无响应）被优先关注。依赖更新（#6165）和 CI/CD 改进（#6167）持续推进，项目向 **多架构发布**（#6160）和 **Telegram 扩展**（#6159）方向演进。

---

---

## 🚀 **版本发布**
**无新版本发布**。上一个发布为 PR [#5598](https://github.com/nearai/ironclaw/pull/5598)（2026-07-03），包含破坏性变更（`ironclaw_common` 0.4.2 → 0.5.0，`ironclaw_skills` 0.3.0 → 0.4.0）。

---

---

## 📈 **项目进展**

### ✅ **已合并/关闭的重要 PR**
1. **[#6166](https://github.com/nearai/ironclaw/pull/6166) | OAuth 回滚**
   - **影响**：完全回滚了 [#6130](https://github.com/nearai/ironclaw/pull/6130)（OAuth 流生命周期修复），恢复到合并前的状态。表明 OAuth 流逻辑需进一步讨论。
   - **意义**：确保稳定性优先，避免引入新 Bug。

2. **[#6114](https://github.com/nearai/ironclaw/pull/6114) | OAuth 流一致性测试**
   - **功能**：为 `InMemoryAuthProductServices` 和 `FilesystemAuthProductServices` 添加共享测试套件，确保两者行为一致。
   - **价值**：修复了假数据与持久化数据间的差异，提升认证模块可靠性。

3. **[#6118](https://github.com/nearai/ironclaw/pull/6118) | 管理员 UI 中的用户密钥管理**
   - **功能**：在 Admin UI 中暴露用户密钥的 CRUD 操作（前端 API 已支持）。
   - **用户受益**：管理员可通过 WebUI 管理用户凭证，无需命令行。

4. **[#6117](https://github.com/nearai/ironclaw/pull/6117) | 工作区本地化与文件大小格式化**
   - **修复**：将 `home`/`memory` 等内部区域标识本地化，文件大小从原始字节数转换为人类可读格式（如 `5MB`）。
   - **影响**：改善用户体验， especially for non-English users.

5. **[#6111](https://github.com/nearai/ironclaw/pull/6111) | WebChat v2 模型选择与成本追踪**
   - **功能**：为 WebChat v2 API 添加模型选择和每次运行的使用量/成本统计（含默认模型定价）。
   - **背景**：与 OpenAI 兼容 API 对齐，提升透明度。

### 🔄 **关键进行中的 PR**
1. **[#6173](https://github.com/nearai/ironclaw/pull/6173) | runtime.rs 测试模块拆分（Phase 0）**
   - **目标**：将 `crates/ironclaw_reborn_composition/src/runtime.rs` 中的 6.9k 行内联测试代码拆分到 `runtime/tests/core.rs`。
   - **意义**：符合架构预算（runtime.rs 已超 3000 行），提升可维护性。

2. **[#6172](https://github.com/nearai/ironclaw/pull/6172) | Reborn CLI 后台服务安装**
   - **功能**：支持 `launchd`（macOS）和 `systemd`（Linux）的服务安装/卸载/启动/停止/状态/重启。
   - **依赖**：`ironclaw-reborn` 的 `full` feature 和 `libsql`。

3. **[#6167](https://github.com/nearai/ironclaw/pull/6167) | 开发指标与组合质量门控**
   - **工具**：新增 `scripts/dev_metrics.py`，提供三层开发指标报告（Git 历史 + GitHub API + 工作区）。
   - **门控**：为 `ironclaw_reborn_composition` 添加质量门控，防止代码膨胀。

4. **[#6159](https://github.com/nearai/ironclaw/pull/6159) | Telegram 扩展（Admin Bot 设置）**
   - **功能**：将 Telegram 作为 IronClaw 的一级入口，支持管理员配置 Bot、WebGeneratedCode 配对、DM 入口。
   - **架构**：基于统一扩展架构（[#6116](https://github.com/nearai/ironclaw/pull/6116)）。

5. **[#6162](https://github.com/nearai/ironclaw/pull/6162) & [#6163](https://github.com/nearai/ironclaw/pull/6163) | WebUI v2 工作区重设计**
   - **功能**：重设计遗留网关代理工作区，应用设计系统，并添加 **聊天优先的入职流程**（意图交接 → OAuth 入口 → 聊天优先工作区）。
   - **目标**：替代 [#5565](https://github.com/nearai/ironclaw/pull/5565)，分两部分合并。

---

---

## 🔥 **社区热点**

### 💬 **讨论最活跃的 Issues**
1. **[#6168](https://github.com/nearai/ironclaw/issues/6168) | 精简 `ironclaw_reborn_composition` god-crate（24% → ~10%）**
   - **背景**：该 crate 当前占 **156k 生产代码行**（项目中最大），但理应仅包含组合逻辑（`build_*`/`with_*`）。
   - **目标**：将行为逻辑拆分出去，降低耦合度。
   - **关联 PR**：[#6173](https://github.com/nearai/ironclaw/pull/6173)（测试模块拆分）、[#4471](https://github.com/nearai/ironclaw/issues/4471)（runtime.rs 分解）。
   - **评论热点**：如何平衡拆分粒度与依赖复杂度。

2. **[#6155](https://github.com/nearai/ironclaw/issues/6155) | 失败后后续消息无响应**
   - **问题**：运行失败（如模型提供商不可用）后，聊天完全无响应，用户无法询问“出了什么问题？”。
   - **影响**：严重影响用户体验，可能导致用户误以为系统崩溃。
   - **状态**：无 PR 修复，需优先处理。

3. **[#6126](https://github.com/nearai/ironclaw/issues/6126) | 新聊天首条消息无加载状态**
   - **问题**：发送首条消息时，UI 完全空白，无加载指示器或流式占位符。
   - **关联**：[#6127](https://github.com/nearai/ironclaw/issues/6127)（常规运行错误显示“上次运行仍在进行中”）。

4. **[#6160](https://github.com/nearai/ironclaw/issues/6160) | 多 CPU 架构发布二进制文件**
   - **需求**：验证 IronClaw Reborn 发布流水线能否在不同 CPU 架构和 OS 目标上正确构建。
   - **参考**：[Release workflow run](https://github.com/nearai/ironclaw/actions/runs/26905490192)。

### 🚀 **最受关注的 PR**
1. **[#6159](https://github.com/nearai/ironclaw/pull/6159) | Telegram 扩展**
   - **关注点**：如何与现有扩展架构集成，以及 Bot 配置的安全性。

2. **[#6173](https://github.com/nearai/ironclaw/pull/6173) | runtime.rs 拆分**
   - **争议**：是否应进一步拆分非测试代码？如何保证拆分后的模块边界清晰？

---

---

## 🐛 **Bug 与稳定性**

| 严重程度 | Issue/PR | 描述 | 状态 | 修复 PR |
|---------|----------|------|------|---------|
| **🔴 高** | [#6170](https://github.com/nearai/ironclaw/issues/6170) | **安全漏洞**：多租户实例中用户可通过 WebUI 执行 shell 命令访问文件系统（如 `ls -all`） | OPEN | 无 |
| **🟠 中** | [#6155](https://github.com/nearai/ironclaw/issues/6155) | 运行失败后聊天无响应 | OPEN | 无 |
| **🟠 中** | [#6126](https://github.com/nearai/ironclaw/issues/6126) | 新聊天首条消息无加载状态 | OPEN | 无 |
| **🟠 中** | [#6127](https://github.com/nearai/ironclaw/issues/6127) | 常规运行错误显示“上次运行仍在进行中” | OPEN | 无 |
| **🟠 中** | [#6149](https://github.com/nearai/ironclaw/issues/6149) | 工作区下载失败无用户反馈 | OPEN | 无 |
| **🟡 低** | [#6161](https://github.com/nearai/ironclaw/pull/6161) | WASM 工具返回纯文本时 `OutputDecode` 错误 | OPEN | **已提交 PR** |

> ⚠️ **建议**：#6170（安全漏洞）和 #6155（用户体验）应优先修复。

---

---

## 🎯 **功能请求与路线图信号**

| 功能请求 | Issue/PR | 状态 | 可能性 | 备注 |
|---------|----------|------|--------|------|
| **Telegram 扩展** | [#6159](https://github.com/nearai/ironclaw/pull/6159) | OPEN | ⭐⭐⭐⭐⭐ | 已提交 PR，基于统一扩展架构 |
| **多架构发布** | [#6160](https://github.com/nearai/ironclaw/issues/6160) | OPEN | ⭐⭐⭐⭐ | 需验证 CI/CD 流水线 |
| **繁体中文本地化** | [#6158](https://github.com/nearai/ironclaw/issues/6158) | OPEN | ⭐⭐⭐ | WebUI v2 目前仅支持简体中文 |
| **CLI 命令重命名** | [#6143](https://github.com/nearai/ironclaw/issues/6143) | OPEN | ⭐⭐⭐⭐ | `ironclaw-reborn` → `ironclaw`（v1 退役后） |
| **WebUI 根路径服务** | [#6142](https://github.com/nearai/ironclaw/issues/6142) | OPEN | ⭐⭐⭐⭐ | `/v2/chat` → `/chat` |
| **主题切换控制** | [#6146](https://github.com/nearai/ironclaw/issues/6146) | OPEN | ⭐⭐⭐ | 目前仅能通过侧边栏切换 |
| **Toast 组件优化** | [#6145](https://github.com/nearai/ironclaw/issues/6145) | OPEN | ⭐⭐⭐ | 支持手动关闭、悬停暂停自动关闭 |

> 📊 **路线图信号**：
> - **Reborn 架构稳定化**：runtime.rs 拆分、crate 精简、OAuth 流修复。
> - **WebUI v2 完善**：主题、Toast、工作区、入职流程。
> - **扩展生态**：Telegram、Slack（[#6169](https://github.com/nearai/ironclaw/pull/6169)）。
> - **部署优化**：多架构发布、后台服务安装。

---

---

## 🗣️ **用户反馈摘要**

### ✅ **满意点**
- **WebChat v2 成本透明度**：用户对 [#6111](https://github.com/nearai/ironclaw/pull/6111) 中的模型选择和成本追踪功能表示肯定。
- **本地化进展**：[#6117](https://github.com/nearai/ironclaw/pull/6117) 修复了工作区的本地化问题，繁体中文用户期待 [#6158](https://github.com/nearai/ironclaw/issues/6158)。

### ❌ **痛点**
1. **用户体验缺失**：
   - 首条消息无加载状态（[#6126](https://github.com/nearai/ironclaw/issues/6126)）导致用户误以为系统卡住。
   - 失败后无响应（[#6155](https://github.com/nearai/ironclaw/issues/6155)）让用户无法继续对话。
   - 下载失败无反馈（[#6149](https://github.com/nearai/ironclaw/issues/6149)）导致用户困惑。

2. **安全性担忧**：
   - 多租户实例中用户可通过 shell 访问文件系统（[#6170](https://github.com/nearai/ironclaw/issues/6170)），存在数据泄露风险。

3. **功能缺失**：
   - 缺少繁体中文支持（[#6158](https://github.com/nearai/ironclaw/issues/6158)）。
   - 主题切换仅能通过侧边栏操作，设置页面无控制（[#6146](https://github.com/nearai/ironclaw/issues/6146)）。

### 💡 **使用场景**
- **企业用户**：关注多租户隔离（[#6170](https://github.com/nearai/ironclaw/issues/6170)）和管理员 UI（[#6118](https://github.com/nearai/ironclaw/pull/6118)）。
- **开发者**：期待更稳定的 OAuth 流（[#6166](https://

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>


# LobsterAI 项目动态日报 - 2026-07-17

## 1. 今日速览

LobsterAI 项目今日活跃度较高，共有 19 个 PR 更新，其中 16 个已合并/关闭，显示维护团队持续推进产品稳定性和功能完善。主要工作集中在 Cowork 功能模块的 bug 修复和用户体验优化，包括剪贴板附件处理、会话滚动行为、以及Windows 状态栏适配等方面。社区成员持续提交增强型功能 PR，如侧边栏快捷键提示和会话列表骨架屏加载，这些都有助于提升产品的易用性和专业性。

## 2. 版本发布

暂无新版本发布。

## 3. 项目进展

### 已合并重要 PR

- **[PR #2346](https://github.com/netease-youdao/LobsterAI/pull/2346)** - 修复邮箱诊断在新聊天中打开的问题，防止历史记录或 IM 会话覆盖新会话的行为。
- **[PR #2345](https://github.com/netease-youdao/LobsterAI/pull/2345)** - 本地化 NSIS 网络安装程序下载提示，并修复进度条重叠问题。
- **[PR #2339](https://github.com/netease-youdao/LobsterAI/pull/2339)** - 改进更新卡片标题内容对齐，提高窄侧边栏下的响应式布局效果。
- **[PR #2329](https://github.com/netease-youdao/LobsterAI/pull/2329)** - 防止对话在流式输出期间发生滚动跳动，尊重用户手动滚动操作。
- **[PR #2300](https://github.com/netease-youdao/LobordAI/pull/2300)** - 在引导队列中支持附件功能，允许跟随消息包含文件附件、拖拽文件、粘贴文件、选定文本和图像载荷。
- **[PR #2310](https://github.com/netease-youdao/LobsterAI/pull/2310)** - 添加文件夹上下文附件功能，支持将本地文件夹作为可移除的提示附件发送给 OpenClaw。
- **[PR #2307](https://github.com/netease-youdao/LobsterAI/pull/2307)** - 精炼提示模式和引导后续处理，移除计划模式开关并改进状态栏样式。

## 4. 社区热点

### 最活跃讨论

- **[Issue #1317 / PR #1318](https://github.com/netease-youdao/LobsterAI/issues/1317)** - 添加侧边栏按钮键盘快捷键 kbd 提示功能
  - **热度指标**: 双向讨论（Issue + PR）
  - **核心诉求**: 显著降低新用户发现快捷键的学习成本，通过可视化提示让平台差异化展示（macOS vs Windows/Linux）
  - **PR 状态**: 开放中，展示良好的社区参与度

- **[Issue #1319 / PR #1320](https://github.com/netease-youdao/LobsterAI/issues/1319)** - 会话列表骨架屏加载状态优化
  - **热度指标**: 解决明显的 UX 缺陷（启动时的空状态闪烁）
  - **核心诉求**: 提升应用启动时的视觉连贯性，让用户明确知道系统正在加载数据
  - **PR 状态**: 开放中，显示开发者积极响应性能体验问题

## 5. Bug 与稳定性

### 高优先级问题

- **[Issue #1361](https://github.com/netease-youdao/LobsterAI/issues/1361)** - 自定义 Agent 详情页删除按钮显示英文 "delete"
  - **严重程度**: 低（纯 UI 文本国际化问题）
  - **状态**: 已关闭，暗示可能已修复

### 稳定性改进

- **[PR #2289](https://github.com/netease-youdao/LobsterAI/pull/2289)** - 清除停滞的压缩重试维护
  - **影响**: 防止因自动压缩重试不恢复导致的上下文维护泄漏

## 6. 功能请求与路线图信号

### 用户提出的增强功能

1. **侧边栏快捷键可视化提示** ([Issue #1317](https://github.com/netease-youdao/LobsterAI/issues/1317))
   - 已有对应 PR 提交，技术实现成熟，可能纳入即将发布的版本

2. **会话列表骨架屏加载** ([Issue #1319](https://github.com/netease-youdao/LobsterAI/issues/1319))
   - 已有 PR 实现，正在等待合并审核

3. **新建任务页工具栏增强** ([PR #1364](https://github.com/netease-youdao/LobsterAI/pull/1364))
   - 在输入框附近增加模型选择器，显著提升交互效率
   - 已关闭，暗示可能已集成或被采纳

## 7. 用户反馈摘要

### 痛点提炼

1. **国际化问题**: 用户 devilszy 报告了 UI 文本未本地化的问题，显示产品在全球化推广中仍需完善
2. **新手友好度**: 社区成员 MaoQianTu 指出快捷键隐藏导致的发现成本过高，反映出当前产品可能过于依赖于设置页面引导新功能
3. **加载状态体验**: 应用启动时界面状态切换不明显，用户可能会误认为历史记录丢失

### 满意方面

- 社区成员 kayo5994 提交了修复设置标签页切换时覆盖层残留的 PR，显示积极参与产品细节优化

## 8. 待处理积压

### 需要维护者关注的 Issue

所有列出的 Issue 都被标记为 `[stale]` 且长期未更新（自 2026-04-02 创建），这表明：

1. **[Issue #1317, #1319, #1321](https://github.com/netease-youdao/LobsterAI/issues/1317)** - 虽然相关 PR 已提交，但 Issue 本身状态并未明确关闭或合并标记
2. 建议维护者清理 stale 标签，或者明确这些功能请求/问题的处理结果

---

*报告生成时间: 2026-07-17*  
*数据来源: GitHub netease-youdao/LobsterAI*  
*分析方法: 基于公开仓库 Issue 和 PR 数据趋势判断*


</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报（2026-07-17）

---

## 1. 今日速览

Moltis 项目今日保持高效迭代，活跃度良好，代码库持续优化。过去24小时内共合并或关闭了3个 PR，涵盖多项新功能支持与关键体验优化。Issue区无新增或活跃，社区整体较为平稳。新版本发布，表明项目保持较快发布节奏，功能解锁与稳定性均获提升。

---

## 2. 版本发布

**新版本：20260716.01**
- [发布链接](https://github.com/moltis-org/moltis/releases/tag/20260716.01)
- **主要更新内容**：
  - 支持 Kimi K3 与 Kimi K2.7 Code Highspeed 新模型，丰富 Moonshot 和 Kimi Code 模型目录。
  - 优化代理与沙盒状态反馈，提升外部代理 session 元数据广播与历史记录持久化能力。
  - Web端体验改善，新增沙盒后端不可用时的直通模式展示及 E2E覆盖。
  - 配置模版、文档与 onboarding 流程细节优化，进一步简化设置流程。
- **破坏性变更/迁移注意事项**：
  - Kimi provider 配置可能需重新调整以适配新模型能力。
  - 沙盒后端变动可能影响定制执行逻辑，如有定制请验证兼容性。
  - Moonshot reasoning-effort参数更新，请关注文档说明。
- **未发现重大迁移障碍或兼容性警告。**

---

## 3. 项目进展

**今日合并/关闭的重要 Pull Request（全部由 penso 贡献）**
- [#1156 Add Kimi K3 provider support](https://github.com/moltis-org/moltis/pull/1156)
  - 集成 Kimi K3 及高速编码模型，更新模型目录与能力说明，增强 Moonshot 配置与 e2e 测试覆盖。推动多模型应用与高效推理场景落地。
- [#1155 Improve agent and sandbox status feedback](https://github.com/moltis-org/moltis/pull/1155)
  - 优化外部代理 session 反馈环节、历史上下文的持久化管理及 web 端 session store 安全性。提升多代理协作的稳定性和灵活性。
- [#1154 fix(web): show direct mode when sandbox is unavailable](https://github.com/moltis-org/moltis/pull/1154)
  - Web 端界面体验升级：沙盒后端不可用时切换直通模式，相关 toggle 禁用，强化端到端覆盖测试。改善极端场景下用户操作指引。
> 三项进展均为新能落实与体验优化，项目整体可用性与多模型场景支持明显增强。

---

## 4. 社区热点

- 今日社区活跃度主要集中于合并/关闭的 PR，无新增或开放讨论的 Issue。
- 讨论最集中的变更为 [#1156 Add Kimi K3 provider support](https://github.com/moltis-org/moltis/pull/1156)，该 PR实现重要新模型集成，推动多模型生态扩展。
- 由于评论数不详，无明显用户讨论热点，社区诉求以功能迭代为主。

---

## 5. Bug 与稳定性

- 今日无新报告的 Bug、崩溃或回归问题。
- Web端针对极端场景（沙盒不可用）已在 [#1154](https://github.com/moltis-org/moltis/pull/1154) 中补充修复与 E2E覆盖。
- 项目整体稳定性正向提升，暂无未修复高优先级问题。

---

## 6. 功能请求与路线图信号

- 今日无新用户功能请求或路线图讨论，Issue区归零。
- 近期 PR（如 [#1156](https://github.com/moltis-org/moltis/pull/1156)、[#1155](https://github.com/moltis-org/moltis/pull/1155)）反映项目正在主动扩展 provider 支持、多代理协作与极端场景体验，暗示下阶段将聚焦模型生态与交互弹性。
- Kimi K3、Moonshot reasoning-effort 等能力迭代，预计将成为近期继续强化方向。

---

## 7. 用户反馈摘要

- 今日无 Issue 评论数据，用户直接反馈暂无新内容。
- 从近期 PR实质内容看，优化沙盒与代理状态反馈（[#1155](https://github.com/moltis-org/moltis/pull/1155)），直通模式 UI 细节（[#1154](https://github.com/moltis-org/moltis/pull/1154)）均可能来源于用户真实痛点，即对模型与代理可用性、极端场景下体验的需求。

---

## 8. 待处理积压

- 当前无长期未响应的重要 Issue 或 PR，积压项为零。
- 项目维护节奏良好，建议保持周期性检查，持续跟进新诉求。

---

**整体评估：**  
Moltis 项目持续健康发展，技术演进与体验迭代均衡推进。模型生态、多代理协作、极端场景覆盖能力显著增强，社区稳健无积压，功能与稳定性齐头并进。建议维护团队持续聚焦模型扩展与极端体验场景，定期回收用户反馈与模型配置兼容性测试。

**GitHub项目主页：**  
[Moltis on GitHub](https://github.com/moltis-org/moltis)

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>


# CoPaw 项目动态日报 - 2026-07-17

## 1. 今日速览
**活跃度评估**: 🔥 非常活跃 | CoPaw 项目今日 Issues 和 PR 活动异常活跃，43 条 Issues 和 43 条 PR 更新，显示社区参与度高和项目维护速度快。重点修复了 Windows 权限问题、消息队列丢失、时区配置等稳定性问题，同时多个性能优化 PR 已就绪待合并。社区反馈集中在 2.0 升级后的兼容性问题和资源消耗异常上，但整体项目健康度良好，问题响应及时。

## 2. 版本发布
**暂无新版本发布**

## 3. 项目进展

### 已合并/关闭的重要 PR:

- **[fix(chat): refresh updated_at on user messages and invalidate stale messages](https://github.com/agentscope-ai/QwenPaw/pull/6180)** - 修复了会话列表 updatedAt 数据未更新的问题，确保用户消息处理后会重新排序显示活跃会话。
  
- **[fix(model_factory): resolve file:// URIs in DataBlock to local paths before formatting](https://github.com/agentscope-ai/QwenPaw/pull/6191)** - 解决了 DataBlock 中 file:// URI 解析问题，提高了模型工厂的稳定性。

- **[fix(cli): cron update preserves untouched runtime and request fields](https://github.com/agentscope-ai/QwenPaw/pull/6200)** - 修复了 cron 更新命令会重置部分配置字段的问题，提升了任务管理的可靠性。

- **[fix(console): require auto_memory_interval as int >= 0, disallow empty](https://github.com/agentscope-ai/QwenPaw/pull/6142)** - 增强了控制台表单验证，对自动记忆间隔时间进行了严格限制。

- **[fix(chat): preserve whitespace in streaming thinking/text deltas](https://github.com/agentscope-ai/QwenPaw/pull/6166)** - 解决了流式思考块中空格和换行丢失问题，提升了用户体验。

- **[test(e2e): adapt selectors for v2.0.0 UI redesigns](https://github.com/agentscope-ai/QwenPaw/pull/6185)** - 适配了端到端测试以匹配 2.0 版本的界面重设计，维护了测试体系完整性。

## 4. 社区热点

### 最高评论 Issues:
- **[#6161 Windows 更新后普通用户无法启动，卡在 "Waiting for HTTP ready..."](https://github.com/agentscope-ai/QwenPaw/issues/6161)** (7条评论) - 用户反馈 Windows 系统更新后 QwenPaw Desktop 需要管理员权限才能启动，这是一个严重的可用性问题。
  
- **[#6116 Doom loop: agent repeatedly triggers same tool call in single turn](https://github.com/agentscope-ai/QwenPaw/issues/6116)** (6条评论) - Agent 陷入无限循环调用同一工具的问题，浪费 API 调用和Token，尽管被标记为 wontfix，但反映了用户对效率的担忧。

- **[#6158 Token 用量异常，未对话仍有大量扣费](https://github.com/agentscope-ai/QwenPaw/issues/6158)** (5条评论) - 用户发现大量 Token 消耗但实际未使用 QwenPaw 进行对话，引发了对后台调用机制的质疑。

### 待合并高关注 PR:
- **[feat: bound multi-agent startup and improve readiness UX (#6198)](https://github.com/agentscope-ai/QwenPaw/pull/6198)** - 多智能体启动并发绑定和就绪性用户体验改进，可能解决了系统启动慢和资源竞争问题。

## 5. Bug 与稳定性

### 高严重性 Bug:
1. **[#6169 pip 安装的 QwenPaw 2.0.0.post2 强迫管理员权限启动](https://github.com/agentscope-ai/QwenPaw/issues/6169)** - pip 安装后启动强制要求管理员权限，用户拒绝则程序退出。**暂无 fix PR**
2. **[#6193 MCP drivers start sequentially instead of in parallel](https://github.com/agentscope-ai/QwenPaw/issues/6193)** - MCP 驱动串行启动导致 8 个客户端启动时间从 40 秒增加到 5 秒。**暂无 fix PR**
3. **[#6047 New chat reopens old session after upgrade with stale chats.json ordering](https://github.com/agentscope-ai/QwenPaw/issues/6047)** - 升级后新建聊天可能复用旧会话，违背用户预期。**暂无 fix PR**

### 中等严重性 Bug:
1. **[#5995 Messages silently dropped when session is busy](https://github.com/agentscope-ai/QwenPaw/issues/5995)** - 会话繁忙时新消息被飞书 webhook 接收但不入队处理，也不报错。**暂无 fix PR**
2. **[#6155 从 1.x 升级到 2.0 后，发现多个问题](https://github.com/agentscope-ai/QwenPaw/issues/6155)** - 升级后发现 embedding 映射 bug 和 auto-memo 问题。**暂无 fix PR**
3. **[#6201 A PubMed MCP causes an error in llama.cpp](https://github.com/agentscope-ai/QwenPaw/issues/6201)** - 启用 PubMed MCP 后 llama.cpp 报错，禁用则正常。**暂无 fix PR**

### 低严重性 Bug (已修复):
- **#6116 Doom loop** - 标记为 wontfix，系统检测后会警告但不中断
- **#6129 Missing spaces in thinking blocks** - 已通过 #6166 修复
- **#6131 会话列表updatedAt数据未更新** - 已通过 #6180 修复
- **#6003 控制台不能正确显示频道发送来的消息** - 已通过 #6180 修复

## 6. 功能请求与路线图信号

### 显著功能请求:
1. **[#6048 免认证主机白名单支持配置CIDR 段](https://github.com/agentscope-ai/QwenPaw/issues/6048)** (5条评论) - 请求支持 CIDR 格式的主机白名单配置，增强安全策略灵活性
2. **[#6163 Reusable Workflow Orchestration with Audit Trail](https://github.com/agentscope-ai/QwenPaw/issues/6163)** (2条评论) - 希望实现可复用的多步骤工作流程编排和审计跟踪功能
3. **[#6187 控制台「同步到技能池」按钮报错](https://github.com/agentscope-ai/QwenPaw/issues/6187)** (2条评论) - 技能同步功能报错，阻碍用户分享和复用技能
4. **[#6205 控制台网站js文件等能否设置压缩及缓存](https://github.com/agentscope-ai/QwenPaw/issues/6205)** (1条评论) - 请求前端资源压缩和缓存优化，提升加载速度

### 已有 PR 的路线图信号:
- **[#6208 fix(skill): skill-hub related memory leakage](https://github.com/agentscope-ai/QwenPaw/pull/6208)** - 内存泄漏修复表明下一版本将专注于稳定性和性能优化
- **[#6206 fix(memory): bound summary task history](https://github.com/agentscope-ai/QwenPaw/pull/6206)** - 记忆管理优化继续进行中
- **[#6190 fix(governance): auto-register tools via @tool_descriptor](https://github.com/agentscope-ai/QwenPaw/pull/6190)** - 工具注册机制统一，可能为插件生态做准备

## 7. 用户反馈摘要

### 痛点提炼:
- **升级兼容性**: 多个用户反映从 1.x 升级到 2.0 后遇到的各种问题，包括配置映射错误、记忆失效、会话管理异常
- **资源消耗监控**: 用户对 Token 消耗异常表示担忧，希望获得透明的后台调用日志
- **Windows 环境适配**: 管理员权限需求、时区配置等 Windows 特定问题频繻出现
- **性能体验**: MCP 启动慢、消息处理延迟是用户明显感受到的问题

### 使用场景:
- 企业用户使用飞书频道进行自动化工作流程
- 个人用户通过 cron 任务实现定时通知和数据处理
- 开发者希望利用 MCP 扩展功能，但遇到兼容性障碍
- 多智能体协作场景对启动速度和资源管理有较高要求

### 满意/不满意因素:
- **满意**: 项目活跃度高，问题响应及时；多渠道支持丰富；功能迭代快速
- **不满意**: 2.0 版本升级带来多个回归问题；资源消耗不透明；部分高级功能实现不完善

## 8. 待处理积压

### 长期未响应重要 Issue:
1. **[#4818 Cron agent 任务 share_session=true 时执行轨迹为空](https://github.com/agentscope-ai/QwenPaw/issues/4818)** (创建于 2026-05-29，4条评论) - Cron 任务共享会话时执行轨迹记录异常，问题存在近两个月
2. **[#5880 为policy增加清除失效和手动删除的功能](https://github.com/agentscope-ai/QwenPaw/issues/5880)** (创建于 2026-07-09，2条评论) - 安全审批功能需要管理界面，请求半个月未处理
3. **[#6076 Are there plans to release a non-Tauri variant for QwenPaw 2.0?](https://github.com/agentscope-ai/QwenPaw/issues/6076)** (创建于 2026-07-14，2条评论) - Win7 兼容性请求，涉及架构决策

### 提醒维护者关注:
这些长期存在的问题可能影响用户体验和项目 adoption，建议优先处理 #4818（cron 任务核心功能）和 #6169（Windows 安装问题），因为它们分别关系到自动化任务可靠性和基础安装体验。


</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报
**日期：2026-07-17 | 数据来源：GitHub API**

---

## 1. 今日速览
ZeptoClaw 项目在过去24小时内保持**中等活跃度**，共处理5个Issue（均已关闭），无新开PR或版本发布。所有Issue均为**安全文档类任务**，由贡献者YLChen-007完成对特定CSV行（121-125）的安全触发机制分类工作。项目整体**开发节奏稳定**，但缺乏新功能开发和社区互动，需关注长期维护活力。

🔗 [项目仓库](https://github.com/qhkm/zeptoclaw)

---

## 2. 版本发布
**无新版本发布**
- 最后一个Release版本：[查看历史版本](https://github.com/qhkm/zeptoclaw/releases)

---

## 3. 项目进展
今日**无PR合并**，但通过Issue处理推进了以下工作：
- **安全文档完善**：完成5个Issue的安全触发机制分类（Issue #264、#268、#271、#329、#466），涉及CSV行121-125的源代码验证与JSON记录更新。
- **流程标准化**：所有Issue均遵循统一的分析流程（源代码→LLM→自定义工具→Shell），提升了安全事件响应的可追溯性。

🔗 [Issue #631](https://github.com/qhkm/zeptoclaw/issues/631) | [Issue #632](https://github.com/qhkm/zeptoclaw/issues/632) | [Issue #633](https://github.com/qhkm/zeptoclaw/issues/633) | [Issue #634](https://github.com/qhkm/zeptoclaw/issues/634) | [Issue #635](https://github.com/qhkm/zeptoclaw/issues/635)

---

## 4. 社区热点
**无高热度讨论**（今日所有Issue均无新评论或👍反应）。建议维护者：
- 关注Issue #631-#635的评论区，确认社区对安全文档更新的反馈。
- 评估是否需要发起新的功能讨论或Bug报告征集。

---

## 5. Bug 与稳定性
**无新Bug报告**
- 今日关闭的Issue均为**文档类任务**，未涉及代码缺陷或稳定性问题。
- 建议定期扫描`bug`标签的Issue，确保及时响应。

🔗 [Bug标签Issue列表](https://github.com/qhkm/zeptoclaw/issues?q=is%3Aissue+is%3Aopen+label%3Abug)

---

## 6. 功能请求与路线图信号
**无新功能请求**
- 今日无用户提出新功能需求。
- 建议维护者：
  - 回顾[Roadmap讨论](https://github.com/qhkm/zeptoclaw/discussions)区，评估社区对新功能的期望。
  - 考虑发起关于AI助手集成、性能优化或安全扩展的功能征集。

🔗 [Roadmap讨论区](https://github.com/qhkm/zeptoclaw/discussions)

---

## 7. 用户反馈摘要
**无直接用户反馈**（今日Issue均为贡献者发起，无用户评论）。建议：
- 在安全文档更新后，主动征求用户对触发机制分类的意见。
- 关注Discussions区的用户提问，及时响应技术支持需求。

🔗 [Discussions区](https://github.com/qhkm/zeptoclaw/discussions)

---

## 8. 待处理积压
**无长期未响应的重要Issue/PR**
- 今日处理的5个Issue均为**短期任务**，无积压问题。
- 建议维护者：
  - 定期检查`help wanted`或`good first issue`标签的Issue，吸引新贡献者。
  - 评估是否需要清理过时的Issue或PR。

🔗 [帮助标签Issue](https://github.com/qhkm/zeptoclaw/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22)

---

### 项目健康度评估
| 指标               | 评分 (1-5) | 说明                          |
|--------------------|------------|-------------------------------|
| 活跃度             | 3          | 仅安全文档更新，缺乏新功能开发 |
| 社区响应           | 2          | 无用户反馈，贡献者活动集中     |
| 代码质量           | 4          | 文档更新严谨，无Bug报告        |
| 维护状态           | 3          | 缺乏新版本发布和路线图更新     |

**建议行动项**：
1. 发起新功能或性能优化的讨论，提升社区活力。
2. 定期发布Release版本，增强用户信任。
3. 征集用户对安全文档的反馈，完善开发者体验。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw 项目每日动态报告 – 2026‑07‑17**  

---

## 1. 今日速览  
- 近 24 h 内 **Issue 新增 8 条、闭合 1 条；PR 更新 50 条（已合并 2 条、待审 48 条）**，整体活跃度保持在 **中等**。  
- 当前 **无新发行版**，代码基于 `master` 分支的持续集成（CI）正在验证即将发布的功能。  
- 主要讨论集中在 **发行签名冲突、browser_open 酒店挂起、持久化内存平权** 等高风险议题，社区关注度较高。  
- 代码质量指标（CI 通过率、合并压力）保持在可接受范围，未出现重大回归。

---

## 2. 版本发布  
- **最新 Release：无**（截至 2026‑07‑17）  
-  versioning 仍在遵循 `v0.8.3` → `v0.8.4` 路线图，下一版本预计在 **2026‑07‑31** 随 `v0.8.4` 维护列车发布。

---

## 3. 项目进展  
| 合并 / 关闭的 PR / Issue | 关键变更 | 推动的功能/修复 |
|--------------------------|----------|----------------|
| **#7320** (CLOSED) | v0.8.3 里程碑索引及子追踪器全部关闭 | 标志着 **v0.8.3** 正式结束验证，所有已规划的功能已合并或迁出 |
| **已合并的 2 条 PR** (未列出具体编号) | 关闭或合并的更新 | 完成 **里程碑收尾**、**持久化内存** 初步实现等收尾工作 |

> **整体进展**：本轮合并主要是 **收尾与清理**，为 `v0.8.4` 的维护列车奠定基础，代码库已进入 **特性冻结** 状态，后续将聚焦细节完善与风险缓解。

---

## 4. 社区热点  

| 热点议题 | 链接 | 关键诉求 |
|----------|------|----------|
| **[Issue #9101]** Consolidate release attestation mechanisms | <https://github.com/zeroclaw-labs/zeroclaw/issues/9101> | 合并 **cosign bundles、GitHub artifact attestations、slsa-github-generator** 三套签名方案，消除 CI 冗余 |
| **[Issue #8560]** browser_open hangs the agent turn | <https://github.com/zeroclaw-labs/zeroclaw/issues/8560> | 解决 **headless/无显示环境下** `browser_open` 导致的无限等待，防止工作流阻塞 |
| **[Issue #8891]** Persistent memory – wire the curation, relevance, and operability planes to parity | <https://github.com/zeroclaw-labs/zeroclaw/issues/8891> | 为 **持久化记忆** 实现全平台一致的 **curation / relevance / operability** 接口 |
| **[Issue #9106]** RFC: A2A outbound client (A2ATool) | <https://github.com/zeroclaw-labs/zeroclaw/issues/9106> | 为 **A2ATool**（出站 A2A 调用）提供标准化实现，实现主动跨代理协作 |
| **[Issue #9103]** RFC: separate authoritative memory storage from optional enrichment connectors | <https://github.com/zeroclaw-labs/zeroclaw/issues/9103> | 拆分 **memory.backend** 的双重职责，明确 **authoritative store** 与 **enrichment connector** 的边界 |
| **[Issue #8358]** zerorelay milestone: stand up the nominated relay on the secure‑transport plane | <https://github.com/zeroclaw-labs/zeroclaw/issues/8358> | 搭建 **zerorelay** 以支持 NAT/CGNAT 场景的逆向连接，提升服务可达性 |
| **[PR #8909]** feat(plugins): add gateway and dashboard capability catalog | <https://github.com/zeroclaw-labs/zeroclaw/pull/8909> | 为插件系统提供统一的 **能力目录**，便于 UI 与 CLI 统一查询 |
| **[PR #9091]** feat(computer-use): add mac/linux/windows computer-use tool | <https://github.com/zeroclaw-labs/zeroclaw/pull/9091> | 新增 **跨平台 computer‑use** 工具，实现屏幕控制、手势输入等功能 |
| **[PR #8862]** feat(gateway): host webhook ingress → plugin inbound queue | <https://github.com/zeroclaw-labs/zeroclaw/pull/8862> | 引入 **Webhook Ingress**，实现插件入口的安全、可审计传输 |
| **[PR #8855]** feat(channels): mirror built‑in channels via plugin `provides` | <https://github.com/zeroclaw-labs/zeroclaw/pull/8855> | 允许 **镜像渠道** 通过 `provides` 合约自动映射已有通道，降低配置成本 |

**热点分析**：  
- **签名冲突**（#9101）与 **持久化内存统一**（#8891）是本轮最受关注的两大技术方向，均涉及 **风险/高** 标签，且拥有多段讨论。  
- **Agent 交互稳定性**（#8560）和 **跨平台计算工具**（#9091）是用户反馈频繁的实用性需求。  
- **A2A 出站支持**（#9106）以及 **记忆存储解耦**（#9103）体现了社区对 **代理协作** 与 **数据所有权** 的长远规划。

---

## 5. Bug 与稳定性  

| Bug 编号 | 简要描述 | 严重性 | 已有 Fix PR？ | 链接 |
|----------|----------|--------|--------------|------|
| **#8560** | `browser_open` 在无窗口环境下导致子进程无限等待，影响 TTS 与渠道脚本 | **S1（工作流阻塞）** | 有（#7960） | <https://github.com/zeroclaw-labs/zeroclaw/issues/8560> |
| **#9032** | macOS 发行版未正确嵌入 Dashboard（sidecar） | **high** | 有（#9032） | <https://github.com/zeroclaw-labs/zeroclaw/pull/9032> |
| **#9033** | 移除未使用的 Tauri shell plugin，防止依赖泄漏 | **high** | 有（#9033） | <https://github.com/zeroclaw-labs/zeroclaw/pull/9033> |
| **#8536** | `tokio::time::timeout` 丢失内部 `Elapsed` 错误信息 | **medium** | 有（#8536） | <https://github.com/zeroclaw-labs/zeroclaw/pull/8536> |
| **#7960** | `execute_pipeline` 绕过 `ToolAccessPolicy`，安全隐患 | **high** | 有（#7960） | <https://github.com/zeroclaw-labs/zeroclaw/pull/7960> |
| **#8571** | OAuth Provider 全局凭证误用导致权限泄露 | **high** | 有（#8571） | <https://github.com/zeroclaw-labs/zeroclaw/pull/8571> |
| **#8851** | WASM 插件与原生工具名冲突，导致错误的工具被调用 | **low** | 有（#8851） | <https://github.com/zeroclaw-labs/zeroclaw/pull/8851> |

> **总结**：当前 **Bug 关闭率** 较高（已有 6 条修复 PR），但仍有 **#8560** 等待深度修复，属于 **高风险** 项目，维护者需持续关注。

---

## 6. 功能请求与路线图信号  

| RFC/Issue | 关键需求 | 预计纳入版本 |
|-----------|----------|--------------|
| **#9106** A2A outbound client | 主动调用外部 A2A 兼容服务 | **v0.8.4**（已在讨论中） |
| **#9103** 记忆存储解耦 | 分离 **authoritative store** 与 **enrichment connector** | **v0.8.4** 或 **v0.9** |
| **#8358** zerorelay 部署 | NAT/CGNAT 场景的逆向代理 | **v0.8.4** 计划中 |
| **#8357** v0.8.4 maintenance train | 明确维护列车范围与时间表 | **即将发布的 v0.8.4** |
| **#8891** 持久化内存平权 | 将 curation、relevance、operability 接口统一 | **中长期（v0.9+）** |
| **#9101** 发行签名整合 | 统一 cosign、GitHub attestation、slsa‑generator | **v0.9**（后续大版本） |

> **判断依据**：上述 RFC 均已标记 **priority:p1–p2**、**risk:high**，且对应的 PR 或实现已在 `master` 分支上进展显著，故可视为 **下一版本（v0.8.4）** 的关键信号。

---

## 7. 用户反馈摘要  

- **“发行签名冗余”** – 多位维护者在 #9101 中指出 **三套并行签名** 增加 CI 时间 30%+，呼吁统一流程。  
- **“browser_open 酒店挂起”** – 多位用户反馈在 CI 环境（无显示器）下工作流卡死，影响自动化测试，期待 **#8560** 的修复。  
- **“记忆系统双重职责”** – #9103 的提问者强调 **`memory.backend`** 同时承担存储与插件挂载，导致 **Lucid** 等轻量后端被误认为完整后端，造成混淆。  
- **“需要 outbound A2A”** – Issue #9106 的提交者指出当前只能被动接收，缺乏主动调用能力，限制了 **多智能体协作** 的场景。  
- **“持久化内存平权”** – #8891 的追踪者希望把 **curation、relevance、operability** 三大维度提升到同等重要性，以实现跨会话的一致性体验。  
- **整体满意度** – 多数 comment 表示 **功能进展稳健**，但对 **高风险 Bug**（如 #8560）和 **CI 冗余** 持保留态度，期待快速闭环。

---

## 8. 待处理积压  

| 项目 | 创建时间 | 当前状态 | 关键风险 |
|------|----------|----------|----------|
| **#8560** browser_open 酒店挂起 | 2026‑06‑30 | OPEN | 工作流阻塞，已有 PR #7960 但尚未合并 |
| **#8891** 持久化内存平权追踪 | 2026‑07‑09 | OPEN | 需要跨 PR 协同实现，影响后续 **v0.8.4** |
| **#8358** zerorelay 部署 | 2026‑06‑26 | OPEN | 关键安全转发节点尚未上线，影响 NAT 场景 |
| **#9101** 发行签名整合 | 2026‑07‑16 | OPEN | 重复签名导致 CI 时间增加 |
| **#9106** A2A outbound client RFC | 2026‑07‑16 | OPEN | 需要进一步设计实现细节 |
| **#9103** 记忆存储解耦 RFC | 2026‑07‑16 | OPEN | 关联多个内部模块，改动量大 |
| **#8357** v0.8.4 maintenance train | 2026‑06‑26 | OPEN | 里程碑未正式公布，需维

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*