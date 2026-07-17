# OpenClaw 生态日报 2026-07-18

> Issues: 386 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-17 22:15 UTC

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


# OpenClaw 项目动态日报 - 2026-07-18

## 1. 今日速览

OpenClaw 保持高活跃度，24小时内 Issues 386 条（233 新/活跃，153 已关闭），PR 500 条（379 待合并，121 已合并/关闭），显示项目处于快速迭代阶段。今日发布 v2026.7.2-beta.2 版本，主要增强远程编码会话能力。同时发现多个严重回归问题和稳定性 Bug，包括数据库迁移导致网关启动失败、Codex 转场中断等。社区反映出对跨平台支持（Linux/Windows）、安全性（内存信任标签、文件沙箱）和稳定性（会话管理、Telegram 交付）的迫切需求。

## 2. 版本发布

### v2026.7.2-beta.2 发布

**更新内容:**
- **远程编码会话**: 支持在云工作器上运行 Control UI 会话；在终端中打开 Codex 和 Claude 编目会话；直接在终端恢复 OpenCode 和 Pi 会话
- **原生自动化和节点**: (内容不完整)

**破坏性变更:** 暂无明确声明

**迁移注意事项:**
- 从 beta.1 升级的用户可能遇到数据库迁移问题，详见 Issue #109867

[查看发布详情](https://github.com/openclaw/openclaw/releases/tag/v2026.7.2-beta.2)

## 3. 项目进展

### 今日已合并/关闭的重要 PR:

1. **PR #110197 - 预-beta.2 状态数据库升级修复** [🔗](https://github.com/openclaw/openclaw/pull/110197)
   - 解决升级后网关启动失败和 `doctor --fix` 失败的问题
   - 修复 agent_id 索引创建顺序问题

2. **PR #97175 - 上下文引擎延迟维护任务添加超时** [🔗](https://github.com/openclaw/openclaw/pull/97175)
   - 防止插件锁定导致维护任务挂起
   - 提升系统可靠性

3. **PR #110096 - OpenAI OAuth 在伪造IP代理后正常工作** [🔗](https://github.com/openclaw/openclaw/pull/110096)
   - 解决 Clash/Surge 等代理环境下的认证问题

[查看更多合并 PR](https://github.com/openclaw/openclaw/pulls?q=is%3Apr+updated%3A2026-07-18)

## 4. 社区热点

### 最热门讨论:

1. **Issue #75 - Linux/Windows Clawdbot Apps** [🔗](https://github.com/openclaw/openclaw/issues/75)
   - 113 条评论，81 个赞
   - 呼吁开发 Linux 和 Windows 版本的 Clawdbot 应用
   - 当前仅支持 macOS/iOS/Android

2. **Issue #88312 - Codex 回归性问题** [🔗](https://github.com/openclaw/openclaw/issues/88312)
   - 21 条评论
   - 2026.5.27 版本 Codex 应用服务器转场卡住
   - 影响 ChatGPT Plus 订阅用户

3. **Issue #10659 - 遮蔽秘密功能请求** [🔗](https://github.com/openclaw/openclaw/issues/10659)
   - 13 条评论
   - 防止代理访问原始 API 密钥
   - 提升安全防护能力

## 5. Bug 与稳定性

### 高优先级问题（P1/P0）:

1. **Issue #109867 - beta.2 数据库迁移阻塞网关启动** [🔗](https://github.com/openclaw/openclaw/issues/109867) | **[FIX PR 提出]**
   - 从 beta.1 升级后网关无法启动
   - SQLite 迁移顺序错误

2. **Issue #106920 - 2026.7.1 网关无法重启** [🔗](https://github.com/openclaw/openclaw/issues/106920) | **[已关闭]**
   - 严重回归，阻止服务恢复

3. **Issue #88312 - Codex 转场卡住** [🔗](https://github.com/openclaw/openclaw/issues/88312)
   - 多工具代理转场失败
   - 影响核心功能

4. **Issue #87744 - Telegram 超时问题** [🔗](https://github.com/openclaw/openclaw/issues/87744)
   - Codex 支持的 Telegram 会话超时

5. **Issue #108435 - 网关启动失败** [🔗](https://github.com/openclaw/openclaw/issues/108435)
   - 新版本部署失败

6. **Issue #78562 - 工具循环上下文溢出** [🔗](https://github.com/openclaw/openclaw/issues/78562)
   - 重复自动压缩循环影响用户体验

7. **Issue #108238 - 会话上下文用量计算错误** [🔗](https://github.com/openclaw/openclaw/issues/108238)
   - cacheRead 计入 totalTokens 导致误报

### 中优先级问题（P2/P3）:
- Issue #96242: Telegram 重复消息
- Issue #107464: Telegram 工具中断问题
- Issue #9546: WebChat 通知干扰
- Issue #9986: WebChat 图片附件路径错误

## 6. 功能请求与路线图信号

### 重要功能请求:

1. **Issue #76171 - 进程隔离核心** [🔗](https://github.com/openclaw/openclaw/issues/76171)
   - 高负载下工作进程累积导致性能下降
   - **相关 PR 已合并**

2. **Issue #106231 - 循环检测不终止代理运行** [🔗](https://github.com/openclaw/openclaw/issues/106231)
   - 资源消耗失控
   - **PR #109549 已准备好审核**

3. **Issue #110191 - Windows 存档清理重试循环** [🔗](https://github.com/openclaw/openclaw/pull/110191)
   - Windows 平台特定问题
   - **PR 已准备好审核**

4. **Issue #7707 - 内存信任标签** [🔗](https://github.com/openclaw/openclaw/issues/7707)
   - 防止内存投毒攻击
   - 安全相关功能

5. **Issue #7722 - 文件系统沙箱配置** [🔗](https://github.com/openclaw/openclaw/issues/7722)
   - 文件访问限制
   - **PR #98216 (Docker 环境支持) 已准备好审核**

## 7. 用户反馈摘要

### 真实痛点:

1. **跨平台支持缺失**: 用户普遍呼吁 Linux/Windows 版本 Clawdbot 应用（Issue #75）

2. **升级稳定性**: 多个用户反映新版本升级导致服务不可用的问题，特别是 beta.2 数据库迁移问题

3. **Telegram 交付可靠性**: 重复消息、超时、工具中断等问题影响用户体验

4. **安全性关注**: 内存信任标签、遮蔽秘密、文件沙箱等功能请求反映安全意识提升

5. **性能问题**: 特别是在 Windows 平台上出现的进程和存档清理问题

### 使用场景:
- 使用 ChatGPT Plus/Codex 的企业用户
- 自部署在 Linux/Windows 环境的用户
- 集成 Telegram/Discord/WhatsApp 等平台的用户
- 关注数据安全和隐私保护的用户

## 8. 待处理积压

### 需要维护者关注的长期 Issue:

1. **Issue #7722 - 文件系统沙箱配置** [🔗](https://github.com/openclaw/openclaw/issues/7722)
   - 创建于 2026-02-03，有安全相关标签但仍然 OPEN

2. **Issue #7540 - WhatsApp 呼叫事件订阅** [🔗](https://github.com/openclaw/openclaw/issues/7540)
   - 创建于 2026-02-02，缺失核心功能

3. **Issue #90781 - 内存核心叙事生成失败** [🔗](https://github.com/openclaw/openclaw/issues/90781)
   - 创建于 2026-06-05，影响梦境功能

4. **Issue #72611 - 梦境会话排除配置** [🔗](https://github.com/openclaw/openclaw/issues/72611)
   - 创建于 2026-04-27，缺失重要配置选项

---

*报告生成时间: 2026-07-18*
*数据来源: GitHub Issues 和 Pull Requests*


---

## 横向生态对比


## 今日重點

1. **OpenClaw** - 發布 v2026.7.2-beta.2 版本，增強遠程編碼會話能力並修復資料庫遷移導致網關啟動失敗等多個穩定性問題。此版本直接影響服務可用性與跨平台部署體驗。

2. **NanoBot** - 修復 Moonshot Kimi 模型溫度參數硬編碼問題，並新增 WebUI 對原生資料夾選擇器的支援，提升模型兼容性與使用者介面友好度。

3. **Hermes Agent** - 合併多項 MCP 工具鏈與 Desktop 應用穩定性修復，同時推出 Dreaming 自動背景記憶整合功能，反映對代理記憶與可靠性的創新努力。

4. **PicoClaw** - 修復 WhatsApp 打字狀態與 OAuth 超時問題，並處理 v2 至 v3 的設定檔遷移失敗，影響新舊版本升級與通訊即時性體驗。

5. **NanoClaw** - 發布 v2.0.0.post3 版本，修復 MCP 憑證遷移問題並加固 CI 流程；同時解決多代理啟動與 Windows 沙箱相關問題，提升系統穩定性。

6. **ZeroClaw** - 合併網關 webhook 入口與技能瀏覽器編輯功能，並推進供應鏈簽名與 RBAC 存取控制相關 RFC 討論，為 v0.9.0 版本安全與多租戶能力奠定基礎。

---

## 活躍度概览

今日 OpenClaw、Hermes Agent、IronClaw 和 ZeroClaw 四個項目活躍度最高，PR 和 Issue 數量分別達 500、50、49 和 50 筆，顯示社群參與度持續旺盛。其中 OpenClaw 與 ZeroClaw 在版本迭代與架構安全方面特別活躍；其他項目如 NanoClaw、PicoClaw 則聚焦在 bugfix 與平台相容性提升。


---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>


# NanoBot 项目动态日报 - 2026-07-18

## 1. 今日速览
NanoBot 项目今日活跃度较高，共处理 11 个 PR（7 个待合并，4 个已关闭）和 2 个 Issue（已关闭）。主要工作集中在 provider 支持优化、WebUI 改进以及平台部署支持上。项目维护者积极响应 Moonshot 模型 API 变更带来的兼容性问题，展现良好的社区反馈响应机制。

## 2. 版本发布
暂无新版本发布。

## 3. 项目进展
今日已合并/关闭的重要 PR 包括：
- **[PR #4962](https://github.com/HKUDS/nanobot/pull/4962)**：修复 Moonshot kimi-k2.6 温度参数硬编码问题，将温度从 1.0 修改为 0.6，解决该模型请求失败的问题
- **[PR #4967](https://github.com/HKUDS/nanobot/pull/4967)**：优化 Moonshot Kimi K2.5/K2.6 的温度参数处理，由 Moonshot 自行选择固定温度值
- **[PR #4958](https://github.com/HKUDS/nanobot/pull/4958)**：改进 zh-TW 繁体中文本地化质量
- **[PR #4953](https://github.com/HKUDS/nanobot/pull/4953)**：添加 WebUI 对原生文件夹选择器的支持

这些更新推进了项目稳定性和国际化支持，提升了用户体验。

## 4. 社区热点
**[Issue #4968](https://github.com/HKUDS/nanobot/issues/4968)** - *"Unbound cron jobs"* 是今日讨论最活跃的问题，4 条评论围绕是否应该允许创建未绑定的 cron jobs 展开讨论。该问题反映出开发者社区对于任务调度灵活性的需求。

**[PR #4965](https://github.com/HKUDS/nanobot/pull/4966)** - *"add Kimi K3 support"* 以新增官方 Kimi K3 模型支持引起关注，这是对最新模型的及时跟进。

## 5. Bug 与稳定性
**严重 Bug：**
- **[Issue #4961](https://github.com/HKUDS/nanobot/issues/4961)/[PR #4962](https://github.com/HKUDS/nanobot/pull/4962)**：Moonshot kimi-k2.6 模型温度参数硬编码导致所有请求失败 ✅ 已修复
- **[Issue #4961](https://github.com/HKUDS/nanobot/issues/4961)/[PR #4967](https://github.com/HKUDS/nanobot/pull/4967)**：Kimi K2.5/K2.6 温度参数处理不当 ✅ 已修复

**中等 Bug：**
- **[PR #4925](https://github.com/HKUDS/nanobot/pull/4925)**：上下文溢出错误处理不清晰（open 状态，priority p1）

## 6. 功能请求与路线图信号
- **[PR #4937](https://github.com/HKUDS/nanobot/pull/4937)**：一键部署到 Render 平台支持（priority p2）可能会被纳入下一版本
- **[PR #4965](https://github.com/HKUDS/nanobot/pull/4965)**：ModelScope 提供商支持（priority p1）很可能进入下一版本
- **[PR #4963](https://github.com/HKUDS/nanobot/pull/4963)**、**[PR #4964](https://github.com/HKUDS/nanobot/pull/4964)**：WebUI 输出优化和图像生成功能实时设置（priority 未指定）显示项目对前端体验持续投入

## 7. 用户反馈摘要
从今日 Issue 评论中提炼：
- 用户 SkyLeo-ozim 反馈 Moonshot API 变更给生产环境带来的直接影响，凸显了对模型兼容性维护的重要性
- wzrayyy 关于 cron jobs 限制的质疑表明高级用户希望获得更灵活的任务调度控制权
- 社区对繁体中文本地化质量的关注反映出项目国际化努力得到认可

## 8. 待处理积压
暂无特别突出的长期未响应重要 Issue 或 PR。维护团队对 provider 相关问题响应迅速，表明项目健康度良好。建议持续关注 **[PR #4908](https://github.com/HKUDS/nanobot/pull/4908)**（2026-07-13 创建）的频道重构工作，因其被标记为 priority p1 且存在冲突标志。


</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>


# Hermes Agent 项目动态日报 - 2026-07-18

## 1. 今日速览

Hermes Agent 今日活跃度较高，Issues 和 PRs 都达到 50 条，显示社区参与度旺盛。核心稳定性问题持续被修复，特别是 Desktop 应用和 MCP 工具链的连接问题。同时，内存管理和模型路由的创新特性正在讨论中，反映出项目在追求更强大的 agent 能力和更好的用户体验。整体来看，项目处于积极开发和维护状态。

## 2. 版本发布

**无新版本发布**

## 3. 项目进展

### 已合并/关闭的重要 PR：

- **PR #66045** (已关闭): 修复了 `openai-codex` provider 的 `prompt_cache_key` 长度问题，防止请求返回 400 错误
- **PR #66377** (相关修复): Telegram 网关轮询重连问题虽未合并，但引起了关注
- **PR #66429** (已关闭): 修复了助手消息空内容的 runaway 循环问题

### 整体推进：
项目主要在稳定性修复上取得进展，特别是 Desktop 应用和远程后端的集成问题得到了解决。同时，MCP 工具链的优化和模型路由的增强也在持续进行。

## 4. 社区热点

### 最活跃的 Issues：

1. **#25309** [OPEN] - 🌙 Dreaming: 自动背景记忆整合
   - 评论: 6 | 类型: 功能请求
   - 分析: 这是一个创新性的功能提议，受到生物睡眠周期和 OpenClaw Dreaming 过程的启发。用户希望在系统空闲时自动将短期会话记忆整合到长期记忆中，这可能是下一版本的重要路线图项目。
   - 链接: [Issue #25309](https://github.com/NousResearch/hermes-agent/issues/25309)

2. **PR #66234** [OPEN] - fix(desktop): preserve in-flight turns across gateway reconnects
   - 分析: 这是一个关键的稳定性修复，解决了 Desktop 应用在网关重连时消息丢失的问题。显示团队正在积极解决用户面临的现实问题。
   - 链接: [PR #66234](https://github.com/NousResearch/hermes-agent/pull/66234)

3. **#65384** [CLOSED] - [Bug]: Desktop App creates new session on every message when using non-default profile
   - 评论: 6 | 类型: Bug
   - 分析: 虽然已关闭，但显示了 Desktop 应用在配置文件管理上的挑战，这是许多用户遇到的实际问题。
   - 链接: [Issue #65384](https://github.com/NousResearch/hermes-agent/issues/65384)

## 5. Bug 与稳定性

### 严重 Bug（P1）：

1. **#66267** [OPEN] - Multimodal content list crashes interim processing and retries until API-call budget is exhausted
   - 描述: 在图像/视觉对话后，后续回合会进入无限重试循环，最终耗尽 API 预算
   - 状态: 已有 fix PR (#66550)
   - 链接: [Issue #66267](https://github.com/NousResearch/hermes-agent/issues/66267)

2. **#66377** [OPEN] - Telegram polling reconnect ladder stalls mid-way
   - 描述: Telegram 网关变得无响应，但进程仍在运行，导致需要手动重启
   - 链接: [Issue #66377](https://github.com/NousResearch/hermes-agent/issues/66377)

### 高优先级 Bug（P2）：

1. **#60144** [OPEN] - Desktop boot fails when platform adapter import or MCP registration exceeds 15s readiness timeout
   - 环境: Windows 10 特定问题
   - 链接: [Issue #60144](https://github.com/NousResearch/hermes-agent/issues/60144)

2. **#66360** [OPEN] - Codex app-server tool events never reach hermes serve WebSocket clients
   - 链接: [Issue #66360](https://github.com/NousResearch/hermes-agent/issues/66360)

3. **#66518** [OPEN] - stdio MCP watchdog kills every healthy child on WSL2
   - 链接: [Issue #66518](https://github.com/NousResearch/hermes-agent/issues/66518)

### 已有 Fix PR 的 Bug：

- **#66267**: 由 PR #66550 修复
- **#66429**: 由相关 PR 修复

## 6. 功能请求与路线图信号

### 创新功能：

1. **#25309** - Dreaming 自动背景记忆整合
   - 分析: 这可能成为下一版本的核心创新特性，受到高度关注
   - 链接: [Issue #25309](https://github.com/NousResearch/hermes-agent/issues/25309)

2. **#66473** - MCP Smart Loading: Lazy Connection, Tool Budget, Per-Session Scoping
   - 链接: [Issue #66473](https://github.com/NousResearch/hermes-agent/issues/66473)

### 模型路由增强：

1. **#66522** - feat(vertex): route Claude models through the AnthropicVertex SDK
   - 分析: 支持 Vertex 上 Claude 模型的正确路由，是云部署用户的重要需求
   - 链接: [PR #66522](https://github.com/NousResearch/hermes-agent/pull/66522)

2. **#66548** - feat(steer): cascade steer to active child agents
   - 链接: [PR #66548](https://github.com/NousResearch/hermes-agent/pull/66548)

### 可能纳入下一版本的功能：

- Dreaming 记忆整合系统
- MCP 智能加载和工具作用域控制
- Vertex Claude 模型支持
- 会话级工具路由优化

## 7. 用户反馈摘要

### 痛点：

1. **Desktop 应用稳定性**: 用户在多窗口使用、远程后端连接、文件附件处理方面遇到了各种问题（Issues #60144, #66555, #66473）

2. **MCP 工具链可靠性**: WSL2 环境下工具链频繁重启，连接管理不稳定（Issue #66518）

3. **配置管理复杂性**: 不同配置文件之间的同步问题导致意外行为（Issues #66406, #66541）

### 满意之处：

1. **创新特性讨论的活跃**: Dreaming 等创新想法得到了良好的社区响应

2. **快速 Bug 响应**: 高优先级 Bug 通常能在24小时内得到修复 PR

### 不满意之处：

1. **平台兼容性**: Windows 和 WSL2 用户遇到的特定问题较多

2. **文档同步**: 功能更新后文档常常滞后（Issue #66556）

## 8. 待处理积压

### 长期未响应的重要 Issue：

1. **#33981** [CLOSED] - RFC: Centralized Model/Provider Registry
   - 创建于 2026-05-28，讨论了模型/提供商注册中心的架构设计
   - 链接: [Issue #33981](https://github.com/NousResearch/hermes-agent/issues/33981)

2. **#46732** [OPEN] - Desktop: failed/unsent messages leak across multiple windows
   - 创建于 2026-06-15，涉及多窗口会话隔离问题
   - 链接: [Issue #46732](https://github.com/NousResearch/hermes-agent/issues/46732)

### 需要维护者关注的 PR：

1. **#11458** [OPEN] - Nextcloud Talk platform adapter
   - 创建于 2026-04-17，长期未合并的平台适配器 PR
   - 链接: [PR #11458](https://github.com/NousResearch/hermes-agent/pull/11458)

---

**项目健康度总结**: Hermes Agent 项目处于健康发展状态，社区参与度高，Bug 响应及时。核心稳定性问题正在被解决，同时在记忆管理、模型路由、工具链优化等方面持续创新。建议关注长期未处理的平台适配器 PR 和架构设计议题，以保持项目的可扩展性。


</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>


# PicoClaw 项目动态日报 (2026-07-18)

## 1. 今日速览
PicoClaw 项目在过去24小时保持较高活跃度，社区贡献者提交了12个PR和4个Issue，涵盖功能增强、Bug修复和安全性优化。近期开发重点集中在通道功能完善（如WhatsApp打字状态、QQ流式输出）和认证系统稳定性提升（OAuth刷新兼容性、TLS证书验证）。虽然未发布新版本，但代码库持续演进，表明项目维护活跃且社区参与度较高。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
### 已合并/关闭的PR:
- **[#3204](https://github.com/sipeed/picoclaw/pull/3204) fix(deps): restore Azure dependency freeze baseline**  
  恢复 Azure SDK 依赖至冻结稳定版本（azcore v1.21.1, azidentity v1.13.1），修复供应链兼容性问题。

- **[#3180](https://github.com/sipeed/picoclaw/pull/3180) fix(cli): skip tool calls with invalid arguments**  
  增强CLI工具调用容错性，避免因单个工具参数错误导致整个请求丢弃。

项目整体向前迈进取决于开放PR的审查合并速度，当前代码库稳步改进但缺乏重大功能发布。

## 4. 社区热点
### 🔥 最活跃Issue/PR:
- **[#3239](https://github.com/sipeed/picoclaw/issues/3239) OAuth refresh requests use incompatible provider semantics and can race**  
  分析OAuth刷新机制在不同供应商（OpenAI, Google）下的语义不兼容及并发安全问题，引发开发者关注。

- **[#3242](https://github.com/sipeed/picoclaw/pull/3242) feat(whatsapp): add native typing presence**  
  实现WhatsApp通道打字状态显示，响应用户反馈缺失反馈的问题。

## 5. Bug 与稳定性
### 🐞 严重Bug:
- **[#3206](https://github.com/sipeed/picoclaw/issues/3206) v2→v3 config migration fails**  
  配置文件迁移失败导致服务无法启动，影响新用户安装体验。已标记closed但需确认是否存在持久性问题。

### 🛠️ 已提交修复PR:
- **[#3246](https://github.com/sipeed/picoclaw/pull/3246) refactor(security): MQTT TLS, OAuth timeouts, bounded search reads**  
  修复MQTT默认忽略TLS证书验证、OAuth超时缺失及搜索操作内存边界问题。

## 6. 功能请求与路线图信号
### 🚀 核心功能请求:
- **[#3201](https://github.com/sipeed/picoclaw/issues/3201) Support streaming output for QQ channel**  
  用户希望QQ通道支持Token级实时输出，类似Telegram/WebSocket实现。

- **[#3240](https://github.com/sipeed/picoclaw/issues/3240) Add typing presence to WhatsApp native replies**  
  已对应PR [#3242](https://github.com/sipeed/picoclaw/pull/3242) 提供实现，预计将合并入主干。

### 📌 路线图倾向:
- OAuth认证体系（[#3241](https://github.com/sipeed/picoclaw/pull/3241)）  
- 多语言支持扩展（[#3247](https://github.com/sipeed/picoclaw/pull/3247)）  
- 性能优化（多个PR聚集于`seahorse`组件，见[#3243](https://github.com/sipeed/picoclaw/pull/3243)-[#3245](https://github.com/sipeed/picoclaw/pull/3245))

## 7. 用户反馈摘要
### 💬 用户痛点:
- **缺乏即时反馈**：QQ和WhatsApp用户在长时间等待LLM响应时无视觉提示（[#3201](https://github.com/sipeed/picoclaw/issues/3201), [#3240](https://github.com/sipeed/3239))。
- **安装/配置障碍**：v2至v3迁移失败阻碍新用户上手（[#3206](https://github.com/sipeed/picoclaw/issues/3206))。
- **OAuth集成不便**：不同平台的OAuth行为差异导致集成难度增加（[#3239](https://github.com/sipeed/picoclaw/issues/3239))。

## 8. 待处理积压
### ⏳ 长期未响应Issue/PR:
- **[#1951](https://github.com/sipeed/picoclaw/pull/1951) chore: move installation scripts** (创建于2026-03-24, 更新7月17日)  
  长期未合并的维护型PR，建议维护者跟进确定必要性。

---
*日报由 AI 分析自动生成，数据来源于 GitHub API。*


</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>


# NanoClaw 项目动态日报 (2026-07-18)

---

## 1. 今日速览

- **活跃度评估:** 高活跃。24小时内，Issues 5条（4新增/活跃，1关闭），PRs 8条（7新增/活跃，1关闭），无重大版本发布。
- **重点动态:** 社区活跃反馈包括 Discord 链接点击问题、Claude/OpenRouter 集成异常、以及长时间运行下的内存/日志问题；同时，多个 PR 正在解决 WhatsApp 身份识别、LLM 服务降级及 Webhook 认证等问题。
- **技术栈动态:** PR 数量较多，主要围绕通道统一（iMessage）、任务跨会话管理、文档优化及安全漏洞修复展开。
- **项目健康度:** 维护团队响应及时，已合并 PR #3063（文档清理），多个关键 Bug 已提出，整体开发节奏稳定。

---

## 2. 版本发布

- **本日暂无新版本发布。**

---

## 3. 项目进展

- **PR #3063** ([CLOSED](https://github.com/nanocoai/nanoclaw/pull/3063))  
  - 类型: 文档  
  - 内容: 清理 CHANGELOG.md 中的重复条目  
  - 影响: 提升项目文档与发布信息的准确性，便于用户了解更新历史  

- **PR #3070** ([OPEN](https://github.com/nanocoai/nanoclaw/pull/3070))  
  - 类型: 功能/修复  
  - 标题: 修复 WhatsApp 在 Baileys 和 Cloud 模式下发送者身份不一致的问题  
  - 背景: 同一手机号在两种路径下生成不同的用户 ID，可能导致消息识别异常  
  - 进展: 解决了来自 Issue #3069 的实际问题  

- **PR #3068** ([OPEN](https://github.com/nanocoai/nanoclaw/pull/3068))  
  - 类型: 功能/修复  
  - 标题: 增强定时任务跨会话可见性和错误提示  
  - 背景: 定时任务为组级但工具操作在不同会话间表现不一致  
  - 进展: 提升了 Agent 群组内定时任务的稳定性与可用性  

- **PR #3065** ([OPEN](https://github.com/nanocoai/nanoclaw/pull/3065))  
  - 类型: 安全修复  
  - 标题: 防止通过未授权 Webhook 触发 Action（CVE: GHSA-h9g4-589h-68xv）  
  - 背景: 本地转发网关 Webhook 缺乏认证机制  
  - 进展: 修复了一个高危安全漏洞，提升系统防护能力  

- **PR #2999** ([OPEN](https://github.com/nanocoai/nanoclaw/pull/2999))  
  - 类型: 功能  
  - 标题: 统一 iMessage 通道，支持本地和托管两种后端  
  - 进展: 简化 iMessage 集成方式，降低用户配置复杂度  

---

## 4. 社区热点

- **Issue #3074** ([OPEN](https://github.com/nanocoai/nanoclaw/issues/3074))  
  - 类型: Bug  
  - 摘要: 使用自定义 ANTHROPIC_BASE_URL（OpenRouter）时，Claude provider 丢弃有效回复  
  - 热度: 用户讨论集中于 LLM 集成的灵活性与兼容性  
  - 链接: [nanocoai/nanoclaw#3074](https://github.com/nanocoai/nanoclaw/issues/3074)

- **Issue #3075** ([OPEN](https://github.com/nanocoai/nanoclaw/issues/3075))  
  - 类型: Bug  
  - 摘要: 长时间运行后日志丢失与消息重复插入问题  
  - 热度: 环境为 WSL2 + Docker，Matrix 本地服务器，反映出稳定性问题  
  - 链接: [nanocoai/nanoclaw#3075](https://github.com/nanocoai/nanoclaw/issues/3075)

- **PR #3069** ([OPEN](https://github.com/nanocoai/nanoclaw/pull/3069))  
  - 类型: 功能  
  - 摘要: 主机协 orchestration 在 LLM 配额耗尽时自动切换至备份模型  
  - 热度: 反映用户对服务高可用性的期望  
  - 链接: [nanocoai/nanoclaw#3069](https://github.com/nanocoai/nanoclaw/pull/3069)

---

## 5. Bug 与稳定性

| 优先级 | Issue | 描述 | 状态 | 是否有 Fix PR |
|--------|-------|------|------|---------------|
| ⚠️ 高 | [#3074](https://github.com/nanocoai/nanoclaw/issues/3074) | Claude + OpenRouter 时回复被丢弃 | [OPEN] | ❌ |
| ⚠️ 高 | [#3075](https://github.com/nanocoai/nanoclaw/issues/3075) | 长时间运行后日志丢失与消息重复 | [OPEN] | ❌ |
| 🛠 中 | [#3071](https://github.com/nanocoai/nanoclaw/issues/3071) | Discord 显示 URL 为非点击文本 | [CLOSED] | ✅ (由 SDK 层面修复) |
| 🛠 中 | [#3069](https://github.com/nanocoai/nanoclaw/issues/3069) | WhatsApp 身份识别不一致 | [OPEN] | ✅ (PR #3070) |

---

## 6. 功能请求与路线图信号

| Issue/PR | 类型 | 描述 | 可用性预测 |
|----------|------|------|------------|
| [#3073](https://github.com/nanocoai/nanoclaw/pull/3073) | 功能 (工具技能) | 添加 Adoption Companion 技能包（记忆收据 + 知识库） | 高 |
| [#2999](https://github.com/nanocoai/nanoclaw/pull/2999) | 功能 (通道) | 统一 iMessage 通道支持本地/远程后端 | 高 |
| [#3069](https://github.com/nanocoai/nanoclaw/pull/3069) | 功能 | LLM 使用上限触发自动降级机制 | 中等（需测试） |
| [#3072](https://github.com/nanocoai/nanoclaw/issues/3072) | 文档 | 文档仅提及 `/name` 格式，但仅适用于 Claude Code | 高（文档改进） |

---

## 7. 用户反馈摘要

- **痛点 1:** Discord 链接不可点击 → [Issue #3071](https://github.com/nanocoai/nanoclaw/issues/3071) （已关闭，归因于 SDK 行为）
- **痛点 2:** Claude/OpenRouter 集成异常 → [Issue #3074](https://github.com/nanocoai/nanoclaw/issues/3074) （用户希望支持更多 LLM 提供商）
- **痛点 3:** 长时间运行应用不稳定 → [Issue #3075](https://github.com/nanocoai/nanoclaw/issues/3075) （内存/日志管理需优化）
- **满意点:** iMessage 通道统一 ([PR #2999](https://github.com/nanocoai/nanoclaw/pull/2999)) 和 Webhook 安全增强 ([PR #3065](https://github.com/nanocoai/nanoclaw/pull/3065)) 被视为积极改进

---

## 8. 待处理积压

| Issue | 最后更新 | 描述 | 链接 |
|-------|----------|------|------|
| [#2916](https://github.com/nanocoai/nanoclaw/issues/2916) | 2026-07-16 | 内容空白，仅 “hi” | [查看](https://github.com/nanocoai/nanoclaw/issues/2916) |
| - | - | 当前无明显长期未回应但重要的 Issue 或 PR | — |

--- 

📌 **维护提醒:**
- Issue #3074 和 #3075 是当前最需关注的 Bug，建议尽快排查和修复。
- PR #3065 和 #3070 是高优先级 PR，建议尽快合并。
- 考虑定期审核和清理荒废 Issue（如 #2916），保持仓库整洁。


</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>


# NullClaw 项目动态日报（2026-07-18）

## 1. 今日速览  
- NullClaw 项目今日活跃度较低，仅有 1 条 Issue 更新，无 PR 或版本发布。  
- [Issue #976](https://github.com/nullclaw/nullclaw/issues/976) 指出 aarch64 Linux 上版本 `v2026.5.29` 发生 SIGSEGV 崩溃，导致网关进程 crash-loop，严重影响 Telegram 消息处理。  
- 该问题可能与工作线程栈大小设置导致溢出相关，需紧急修复。  
- 社区反映出对应用稳定性的强烈依赖，但当前维护响应不足。

## 2. 版本发布  
无更新，上一版本为 `v2026.5.29`。

## 3. 项目进展  
- 今日无 PR 合并或关闭。  
- 项目功能开发和代码贡献暂未有进展。

## 4. 社区热点  
- [Issue #976](https://github.com/nullclaw/nullclaw/issues/976)：用户 [wonhotoss](https://github.com/wonhotoss) 报告在 aarch64 Linux 上每收到一条 Telegram 消息即发生 SIGSEGV，服务 crash-loop，消息丢失。  
  - 症状：`inbound worker thread spawned with a ~512 KB stack overflows`  
  - 评论数: 2，暂无维护者回应  
  - 背景: 作为 systemd 服务运行，配置了 `Restart=always`，但消息无法被正确处理  
  - **分析**：该问题直接影响核心功能（消息接收），且涉及特定平台兼容性，表明潜在的内存管理或平台移植问题。

## 5. Bug 与稳定性  
### 🔴 严重 Bug  
- [Issue #976](https://github.com/nullclaw/nullclaw/issues/976): SIGSEGV on aarch64 Linux  
  - 严重程度：🔴 高（服务不可用）  
  - 状态：Open，无 fix PR  
  - 描述：每一条入站 Telegram 消息都会触发段错误，导致进程重启并丢弃消息  

> ⚠️ **注意**：该 Bug 可能影响其他架构平台，但目前仅 aarch64 被确认。需尽快排查栈大小配置及底层依赖库兼容性。

## 6. 功能请求与路线图信号  
- 今日未新增功能请求。  
- 现有 Issue 均围绕稳定性和平台兼容性，暂无明确功能 roadmap 指向。

## 7. 用户反馈摘要  
- 来自 [Issue #976](https://github.com/nullclaw/nullclaw/issues/976) 的反馈显示：
  - 用户依赖 NullClaw 作为 Telegram 消息网关，但因频繁崩溃导致实际使用受阻。
  - 希望服务能在 aarch64 平台上稳定运行，尤其在服务端场景中，稳定性需求极高。
  - 当前版本 `v2026.5.29` 可能存在架构局限性，需补充多平台测试与支持。

## 8. 待处理积压  
- [Issue #976](https://github.com/nullclaw/nullclaw/issues/976)：
  - 创建于 2026-07-16，更新于 2026-07-17，已有 2 条评论但维护者尚未回应。
  - 问题性质严重，建议优先处理。  
- 其他 Issue 和 PR 均暂无显著积压。

---

**总结**  
NullClaw 项目今日活跃度不高，但遇到了关键稳定性问题。[Issue #976](https://github.com/nullclaw/nullclaw/issues/976) 表明在 aarch64 平台上的严重崩溃，需维护者尽快响应并调查。建议增加平台兼容性测试、栈大小调优及错误日志增强，以提高系统健壮性。


</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>


# IronClaw 项目日报（2026-07-18）

## 1. 今日速览
IronClaw 项目今日活跃度较高，共处理 50 个 Issues（23 个已关闭）和 49 个 PR（22 个已合并/关闭），无新版本发布。主要工作集中在 Engine v2 的架构优化和重构（如 #6209、#6203 等）、以及多渠道支持和 Telegram 集成。同时，多个 Bug 修复和稳定性改进已完成（如 #6161、#6188）。项目正朝着统一的 Reborn 架构迁移和代码简化方向发展，技术债清理工作正在加速。

## 2. 版本发布
暂无新版本发布。

## 3. 项目进展
### 已合并/关闭的重要 PR：

*   **#6161**: 修复 Reborn WASM 工具返回纯文本内容时导致的 `OutputDecode` 错误。此前，非 JSON 输出会导致整个调用失败，现将纯文本内容直接传递给模型。这提升了 WASM 工具的兼容性和鲁棒性。[链接](https://github.com/nearai/ironclaw/pull/6161)
*   **#6188**: 跳过 Release 工作流程中的 Docker 发布步骤。这优化了 CI/CD 流程，避免不必要的镜像构建和发布，专注于核心代码的发布效率。[链接](https://github.com/nearai/ironclaw/pull/6188)
*   **#6202**: 为 `hosted-single-tenant` 模式添加不带主机 Shell 的多用户配置文件。解决了该模式下为每个 WebUI 用户提供非沙盒主机 Shell 的安全隐患。[链接](https://github.com/nearai/ironclaw/pull/6202)
*   **#6200**: 将进程存储迁移到 RootFilesystem，删除 InMemoryProcessStore。这是架构简化的一步，将原型设计中的内存存储替换为持久化存储，提高数据一致性和可靠性。[链接](https://github.com/nearai/ironclaw/pull/6200)
*   **#6197**: 将能力租约（CapabilityLease）存储迁移到 RootFilesystem，删除 InMemoryCapabilityLeaseStore。进一步推进架构简化计划，统一存储层。[链接](https://github.com/nearai/ironclaw/pull/6197)

## 4. 社区热点

*   **#2767** - Epic: Separate engine v2 capability background from callable tool schemas  
    这是当前 Engine v2 架构优化的核心议题，讨论了如何将引擎 v2 的能力背景与可调用工具架构分离。具有重要的架构影响。[链接](https://github.com/nearai/ironclaw/issues/2767)
*   **#2813** - engine-v2: add typed assistant content model for final vs internal tool-use text  
    针对 Engine v2 在助手文本处理上的细节优化，讨论区较为活跷。[链接](https://github.com/nearai/ironclaw/issues/2813)
*   **#2835** - Tool discovery: add curated summaries for core built-ins used by engine v2 prompting  
    讨论了如何为 Engine v2 的内置工具提供更丰富的提示信息，属于提升用户体验的方向。[链接](https://github.com/nearai/ironclaw/issues/2835)

## 5. Bug 与稳定性

**严重：**
*   **#6170**: 多租户实例用户可通过 WebUI 中的 shell 命令访问整个文件系统，绕过工作空间限制。已关闭，需确认是否存在修复 PR。[链接](https://github.com/nearai/ironclaw/issues/6170)
*   **#3465**: ENGINE_V2 下 `tool_info` 被重复调用，尤其是在图像生成/编辑提示中。可能影晌性能和用户体验。[链接](https://github.com/nearai/ironclaw/issues/3465)

**一般：**
*   **#5331**: Tool-approval 'always' 设置可能无法自动批准下一次相同工具的调用（Engine v2）。属于中置信度的疑似产品 Bug。[链接](https://github.com/nearai/ironclaw/issues/5331)
*   **#3464**: ENGINE_V2 下失败的工具调用在 Gateway UI 中的渲染不一致。已关闭，需确认是否存在修复 PR。[链接](https://github.com/nearai/ironclaw/issues/3464)
*   **#3463**: Engine v2 生成的图像无法正确渲染在 Gateway UI 中。尽管工具调用成功，但图片未显示。[链接](https://github.com/nearai/ironclaw/issues/3463)

## 6. 功能请求与路线图信号

*   **#4644**: Universal attachments across all channels: 将旧版附件管道集成到 v1，支持可扩展格式，优化 Web UI。这是提升多渠道附件支持的重要功能。结合 PR #6159（Telegram 扩展），表明项目正在加强多渠道能力。[链接](https://github.com/nearai/ironclaw/issues/4644)
*   **#3577**: Track v1 ports for legacy channels, using the Reborn channel-porting guide. 这与 Telegram 支持和架构迁移方向一致，表明将持续完善 Reborn 架构下的旧版组件迁移。[链接](https://github.com/nearai/ironclaw/issues/3577)
*   **#4181**: Carry legacy NEAR wallet login into WebChat v2. 将 v1 的 NEAR 钱包登录行为移植到 WebChat v2，属于用户身份认证体系的完善。[链接](https://github.com/nearai/ironclaw/issues/4181)

## 7. 用户反馈摘要

*   来自 Issue #3465 和 #3463 的反馈，用户在使用 Engine v2 进行图像生成任务时，遇到了工具行为不一致和 UI 渲染问题，影响了任务完成效率。
*   Issue #6170 指出了多租户部署下的安全风险，用户对隔离性和权限控制提出了担忧。
*   Issue #4278 提出了 Engine v2 下会话上下文增长无上限的问题，可能导致资源耗尽，用户需关注系统可扩展性。

## 8. 待处理积压

*   **#6080**: Retire legacy runtime: 删除旧版 runtime 代码并添加防护措施。这是一个关键的技术债清理任务，但截至今日仍未关闭。[链接](https://github.com/nearai/ironclaw/issues/6080)
*   **#5219**: harden activity identity invariants after gate lifecycle refactor. 是 gate 生命周期重构后的后续工作，需进一步加强活动身份不变式。[链接](https://github.com/nearai/ironclaw/issues/5219)
*   **#6198**: [EPIC] Pre-v1 refactoring & legacy cleanup. 跟踪 v1 发布前的重构和技术债务工作，包含多个子任务，需持续关注。[链接](https://github.com/nearai/ironclaw/issues/6198)


</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>


# LobsterAI 项目动态日报 (2026-07-18)

## 1. 今日速览

LobsterAI 项目今日保持高活跃度，共处理 22 条开发事务（7 条 Issues + 15 条 PRs），其中 13 条 PR 已合并完毕。项目发布了 2026.7.16 版本，包含重要功能新增和代码重构。今日 Issues 主要围绕稳定性问题和表格 UI 展示展开，社区参与度较高，但仍存部分长期未解决的功能请求。总体而言，项目健康度良好，开发节奏稳定。

## 2. 版本发布

### LobsterAI 2026.7.16 (2026-07-16 发布)
**更新内容：**
- `refactor(cowork)`: 提取剪贴板附件文件提取功能为可测试的辅助方法 ([PR #2343](https://github.com/netease-youdao/LobsterAI/pull/2343))
- `feat`: 新增活动最终奖励领取功能

**破坏性变更：** 无  
**迁移注意事项：** 无  
**发布链接：** [LobsterAI 2026.7.16](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.7.16)

## 3. 项目进展

### 已合并 PR 亮点：

1. **[PR #2357](https://github.com/netease-youdao/LobsterAI/pull/2357)** - 修复 artifacts 面板布局稳定性问题，避免预览子树重建导致的闪动
2. **[PR #2352](https://github.com/netease-youdao/LobsterAI/pull/2352)** - 新增 AI 生成应用皮肤体验，支持皮肤管理和浅色/深色模式偏好设置
3. **[PR #2348](https://github.com/netease-youdao/LobsterAI/pull/2348)** - 在错误 UI 中展示结构化运行失败详情，提升调试体验
4. **[PR #2347](https://github.com/netease-youdao/LobsterAI/pull/2347)** - 将自动更新检查间隔从 12 小时缩短为 2 小时
5. **[PR #2345](https://github.com/netease-youdao/LobsterAI/pull/2345)** - 修复 NSIS 网络安装程序下载提示本地化和进度条重叠问题

这些变更推进了界面体验、错误处理和更新机制方面，项目整体向前迈进约 **3-5 个重要功能点**。

## 4. 社区热点

### 高活跃 Issues：

1. **[Issue #1311](https://github.com/netease-youdao/LobsterAI/issues/1311)** - 表格内容换行展示带原始标签 & 长文本截断后支持 hover 展示全文  
   **评论数：** 1 | **背后诉求：** 提升表格组件显示效果，改善信息可读性

2. **[Issue #1314](https://github.com/netease-youdao/LobsterAI/issues/1314)** - 支持拖拽调整侧边栏宽度  
   **评论数：** 1 | **背后诉求：** 提升 UI 适配性，增强用户自定义体验  
   **关联 PR：** [PR #1315](https://github.com/netease-youdao/LobsterAI/pull/1315) (OPEN)

### 热议 PR：
**[PR #2352](https://github.com/netease-youdao/LobsterAI/pull/2352)** - AI 生成皮肤体验相关  
**讨论热度：** 高 | **意义：** 标志着项目在 UI 定制化方向上的重要探索

## 5. Bug 与稳定性

### 已关闭严重 Bug：

1. **[Issue #1354](https://github.com/netease-youdao/LobsterAI/issues/1354)** - Windows 蓝屏问题（偶现，已附日志）
2. **[Issue #1357](https://github.com/netease-youdao/LobsterAI/issues/1357)** - "帮我开启pageant" 命令响应错误（必现）
3. **[Issue #1358](https://github.com/netease-youdao/LobsterAI/issues/1358)** - 定时任务点击后无交互反馈
4. **[Issue #1359](https://github.com/netease-youdao/LobsterAI/issues/1359)** - 删除的任务重启后复出
5. **[Issue #1360](https://github.com/netease-youdao/LobsterAI/issues/1360)** - Agent 创建未做重名验证

**状态：** 所有严重 bug 已关闭，但部分可能需要进一步验证是否存在 fix PR。

## 6. 功能请求与路线图信号

### 显著功能请求：

1. **[Issue #1314](https://github.com/netease-youdao/LobsterAI/issues/1314)** - 拖拽调整侧边栏宽度  
   **状态：** OPEN | **关联 PR：** [PR #1315](https://github.com/netease-youdao/LobsterAI/pull/1315) (实现中)  
   **可能性：** ★★★★☆ 高概率纳入下一版本

2. **[Issue #1311](https://github.com/netease-youdao/LobsterAI/issues/1311)** - 表格展示优化  
   **状态：** OPEN | **可能性：** ★★★☆☆ 中等概率

3. **[PR #1308](https://github.com/netease-youdao/LobsterAI/pull/1308)** - 主屏输入草稿按 agent 隔离  
   **状态：** OPEN | **可能性：** ★★★☆☆ 被考虑中

## 7. 用户反馈摘要

从 Issues 评论中提炼出的关键反馈：

- **痛点场景：** 用户对 pageant 相关自动化功能期望较高，但当前实现存在稳定性问题，影响了生产环境的实际应用
- **满意点：** 项目在界面交互和功能响应速度方面获得了正面评价
- **不满意点：** 
  - 任务管理功能（定时任务、删除任务复出）使用体验不佳
  - UI 组件（特别是表格）在特定场景下的展示效果欠佳
  - Agent 管理功能缺乏基本数据验证

## 8. 待处理积压

### 需要维护者关注的长期 Issue/PR：

1. **[PR #1315](https://github.com/netease-youdao/LobsterAI/pull/1315) (OPEN)** - 侧边栏宽度拖拽功能  
   **历史：** 2026-04-02 创建，2026-07-17 更新  
   **状态：** 实现已就绪，等待合并

2. **[PR #1308](https://github.com/netease-youdao/LobsterAI/pull/1308) (OPEN)** - 主屏输入草稿按 agent 隔离  
   **历史：** 2026-04-02 创建，2026-07-17 更新  
   **状态：** 长期未响应，功能合理性值得讨论

3. **[Issue #1311](https://github.com/netease-youdao/LobsterAI/issues/1311) (OPEN)** - 表格展示优化  
   **历史：** 2026-04-02 创建，2026-07-17 更新  
   **状态：** 界面体验问题，用户体验影响较大

---

**日报摘要：** 今日项目活动频繁，稳定性问题逐步得到解决，UI 体验优化工作持续推进。建议维护者优先处理积压的功能实现 PR，以及表格展示等高影响用户体验的问题。


</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>


---

# **Moltis 项目动态日报（2026-07-18）**

---

## 1. **今日速览**
Moltis 项目在过去24小时内展示出中等活跃度，主要围绕 ACP（Agent Communication Protocol）支持与代理状态反馈机制展开开发。社区活跃度较低，仅有 1 条 Issue 和 2 条 PR 更新，但两次版本发布表明项目维护节奏较快。当前开发重点集中于提升代理配置灵活性及模型路由能力，整体健康度稳定，技术迭代持续推进。

---

## 2. **版本发布**
### v20260717.03
- **更新内容**：支持仅 ACP 模型的聊天设置初始化流程；在 LLM 引导流程中展示已安装 ACP 代理，并允许 ACP-Only 配置不报错；自动筛选和选择具备 ACP 能力的外部代理；禁用底部模型选择器，在无 LLM 模型配置时使用 ACP 代理。
- **链接**：[Release #20260717.03](https://github.com/moltis-org/moltis/releases/tag/20260717.03)

### v20260717.02
- **更新内容**：优化外部代理会话元数据广播逻辑；提升沙箱与代理状态反馈的实时性；支持 Apple Container 的安装代理识别；确保 web 会话存储在上下文请求中保持合并安全。
- **链接**：[Release #20260717.02](https://github.com/moltis-org/moltis/releases/tag/20260717.02)

> ✅ **迁移建议**：两次发布无重大变更，升级可直接进行。建议开发者测试 ACP-Only 初始化流程对现有 Agent 配置的兼容性。

---

## 3. **项目进展**
### ✅ PR #1155：Improve agent and sandbox status feedback（已关闭）
- **贡献**：增强了外部代理会话元数据的广播机制，优化了代理与沙箱状态的反馈逻辑。同时支持 Apple Container 作为安装代理的后端，并确保 web 会话 store 在上下文合并过程中不会冲突。
- **链接**：[PR #1155](https://github.com/moltis-org/moltis/pull/1155)

### 🔍 PR #1157：fix(web): support ACP-only chat setup（开放中）
- **进展**：正在开发对 ACP-Only 模式的支持，包括 UI 显示逻辑调整和模型选择器行为控制。这将允许用户在无 LLM 模型配置时，仅依赖 ACP 代理进行通信。
- **链接**：[PR #1157](https://github.com/moltis-org/moltis/pull/1157)

---

## 4. **社区热点**
### 🧩 Issue #574：[Feature] Model Routing Per topic
- **作者**：azharkov78  
- **创建日期**：2026-04-06  
- **最后活动**：2026-07-17（评论更新）  
- **互动情况**：2 条评论，1 个赞  
- **摘要**：用户请求支持按主题（topic）路由不同模型，以实现更灵活的模型调用策略。当前系统缺乏基于业务场景的模型分配机制，限制了多模型协作的效率。
- **链接**：[Issue #574](https://github.com/moltis-org/moltis/issues/574)

> 💬 **分析**：该 Issue 反映出用户在多模型部署场景下的实际需求，尤其是在复杂 Agent 架构中进行精细化模型调度的迫切性。结合 PR #1157 的 ACP-Only 支持，可以看出项目正向“轻量级 Agent”与“模型动态路由”两个方向演进。

---

## 5. **Bug 与稳定性**
- **今日 Bug 报告**：❌ 暂无新 Bug 报告
- **崩溃/回归问题**：❌ 暂无
- **备注**：尽管没有新 Bug 报告，但 PR #1155 与 #1157 的改动若不仔细测试，可能引入外部代理状态同步或模型选择器逻辑上的边缘问题。

---

## 6. **功能请求与路线图信号**
### 📌 Issue #574：Model Routing Per topic
- **诉求**：支持基于消息主题或领域自动选择模型
- **路线图信号**：结合最近 PR 的 ACP 集成趋势，预计该功能可能纳入 v20260718.xx 或后续版本，用于构建可插拔模型路由层
- **链接**：[Issue #574](https://github.com/moltis-org/moltis/issues/574)

> 🛠️ **预测**：该功能将增强 Moltis 在企业级或多场景 Agent 架构中的适用性，与“模型热切换”“动态负载均衡”等功能构成完整解决方案链条。

---

## 7. **用户反馈摘要**
- **痛点**：
  - 当前模型选择器不支持 ACP-Only 模式，导致部分轻量级 Agent 架构无法顺利部署
  - 缺少按主题/业务类型动态路由模型的能力
- **满意点**：
  - 项目迭代速度快，ACP 支持逐步完善
  - 沙箱与代理状态反馈机制优化，提升调试体验
- **反馈来源**：[Issue #574](https://github.com/moltis-org/moltis/issues/574), [PR #1157](https://github.com/moltis-org/moltis/pull/1157)

---

## 8. **待处理积压**
- **长期未响应 Issue/PR**：
  - 当前暂无高优先级积压 Issue，但 Issue #574 已持续 3 个月仍未合入，建议维护者关注其实现计划
- **链接**：[Issue #574](https://github.com/moltis-org/moltis/issues/574)

---

📅 **下一日报预告**：关注 ACP-Only 模式是否完整上线，以及模型路由功能的技术设计讨论是否进入 RFC 阶段。

📌 **健康度评分**：⭐️⭐️⭐️⭐️☆（4/5）  
活跃维护，功能迭代聚焦但需扩展社区参与度。

--- 

* generated @ 2026-07-18 09:00 UTC  
* 项目地址: [github.com/moltis-org/moltis](https://github.com/moltis-org/moltis)


</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>


# CoPaw 项目动态日报 - 2026-07-18

## 1. 今日速览

CoPaw 项目今日整体活跃度较高，PR 和 Issue 活动频繁（24小时内 PR 42 条，Issue 25 条），显示社区参与度旺盛。在 bugfix、性能优化和功能增强方面均有显著进展。新版本 v2.0.0.post3 发布，主要修复 MCP 凭证迁移问题和 CI 流程加固。用户反映的 Windows 环境下的一些权限和启动问题正在逐步解决，但仍存在一些关键 Bug 需要关注。

## 2. 版本发布

### v2.0.0.post3 发布
- **发布时间**: 2026-07-17
- **更新内容**:
  - `fix(mcp)`: 迁移 `${VAR}` 头格式到环境变量凭证引用，解决驱动迁移过程中的凭证处理问题
  - `refactor(ci)`: 加固桌面端工作流程，移除旧版验证死代码
- **破坏性变更**: 无
- **迁移注意事项**: 建议用户升级以修复 MCP 驱动凭证迁移相关问题，特别是在升级后的环境中遇到认证问题的用户
- **链接**: https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.0.post3

## 3. 项目进展

### 今日已合并/关闭的重要 PR

1. **#6198 - 绑定多代理启动并改善准备就绪体验** ([CLOSED](https://github.com/agentscope-ai/QwenPaw/pull/6198))
   - 解决启动多个代理时内存峰值过高的问题
   - 改善了启动过程中的用户体验反馈

2. **#6234 - 使用绝对导入修复 Tauri 入口点** ([CLOSED](https://github.com/agentscope-ai/QwenPaw/pull/6234))
   - 修复了 Windows 沙箱启动助手中的导入问题
   - 添加了回归测试保障

3. **#6217 - 将未探测的多模态判定为失败打开状态** ([CLOSED](https://github.com/agentscope-ai/QwenPaw/pull/6217))
   - 解决了图像被错误剥离的问题
   - 提升了多模态模型兼容性

4. **#6220 - 避免在关闭时持久化未初始化缓存** ([CLOSED](https://github.com/agentscope-ai/QwenPaw/pull/6220))
   - 修复了 token usage buffer 在关闭时的潜在问题

5. **#6170 - 为浏览器使用添加最大等待时间限制** ([CLOSED](https://github.com/agentscope-ai/QwenPaw/pull/6170))
   - 防止模型误用等待时间导致代理阻塞

这些 PR 的合并推进了项目稳定性和性能表现，特别是在多代理场景和 Windows 环境下的使用体验。

## 4. 社区热点

### 最活跃 Issues

1. **#6161 - Windows 更新后普通用户无法启动** ([CLOSED](https://github.com/agentscope-ai/QwenPaw/issues/6161))
   - 7 条评论，反映用户在 Windows 更新后只能以管理员权限运行
   - 虽已标记为无效，但显示用户在权限管理方面遇到实际困难

2. **#5995 - 会话忙时消息被无声丢弃** ([OPEN](https://github.com/agentscope-ai/QwenPaw/issues/5995))
   - 6 条评论，揭示了消息队列和会话管理的关键问题
   - 影响用户在高并发场景下的消息可靠性

3. **#6155 - 从 1.x 升级到 2.0 后的多个问题** ([OPEN](https://github.com/agentscope-ai/QwenPaw/issues/6155))
   - 5 条评论，反映版本迁移过程中的兼容性问题
   - 包含嵌入模型配置映射错误

这些热点反映了用户在系统集成、会话管理和版本迁移方面的核心痛点。

## 5. Bug 与稳定性

### 高严重程度 Bug

1. **#5995 - 会话忙时消息无声丢弃** ([OPEN](https://github.com/agentscope-ai/QwenPaw/issues/5995))
   - **严重程度**: 高
   - **影响**: 消息可靠性，用户无法察觉消息丢失
   - **状态**: 无 fix PR

2. **#6155 - 升级 2.0 后多个问题** ([OPEN](https://github.com/agentscope-ai/QwenPaw/issues/6155))
   - **严重程度**: 中等
   - **影响**: 升级后配置兼容性，嵌入模型参数传递错误
   - **状态**: 无 fix PR

### 中等严重程度 Bug

1. **#6193 - MCP 驱动串行启动** ([OPEN](https://github.com/agentscope-ai/QwenPaw/issues/6193))
   - **严重程度**: 中等（性能问题）
   - **影响**: 启动时间显著增加（8 倍差距）
   - **状态**: 已有相关讨论，可能需要后续 PR

2. **#6219 - Desktop 强制终止后端进程** ([OPEN](https://github.com/agentscope-ai/QwenPaw/issues/6219))
   - **严重程度**: 中等
   - **影响**: 优雅关闭失败，可能导致数据丢失
   - **状态**: 已有 fix PR #6225

### 低严重程度 Bug

1. **#6003 - 控制台频道消息显示不正确** ([CLOSED](https://github.com/agentscope-ai/QwenPaw/issues/6003))
   - **严重程度**: 低
   - **状态**: 已关闭

## 6. 功能请求与路线图信号

### 今日提出的重要功能请求

1. **#6231 - 为同一模型 ID 添加不同配置** ([OPEN](https://github.com/agentscope-ai/QwenPaw/issues/6231))
   - 允许同一提供商下创建不同配置的模型实例
   - **可能纳入下一版本**: 高概率，涉及核心配置灵活性

2. **#6227 - 每个聊天 MCP 服务器选择与工具级控制** ([OPEN](https://github.com/agentscope-ai/QwenPaw/issues/6227))
   - 提供更细粒度的 MCP 工具控制
   - **可能纳入下一版本**: 高概率，已获 1 个赞

3. **#6229 - 用户可控推理深度选择** ([OPEN](https://github.com/agentscope-ai/QwenPaw/issues/6229))
   - 平衡速度与彻底性
   - **可能纳入下一版本**: 中等概率

4. **#6228 - 每个聊天启用/禁用网络搜索** ([OPEN](https://github.com/agentscope-ai/QwenPaw/issues/6228))
   - 给用户对外部数据访问的控制权
   - **可能纳入下一版本**: 中等概率

### 相关 PR 进展

- **#6232 - 静态资源缓存和压缩** ([OPEN](https://github.com/agentscope-ai/QwenPaw/pull/6232)): 与 #6205 功能请求直接对应

## 7. 用户反馈摘要

### 痛点分析

1. **权限与启动问题**
   - 来自 #6161 和 #6169 的反馈显示，Windows 环境下管理员权限要求是障碍
   - 用户希望常规权限即可正常运行

2. **配置复杂度**
   - #5919 和 #6155 反映用户希望更简便的全局配置管理
   - 版本升级后的手动配置成本过高

3. **性能需求**
   - #6193 用户报告 MCP 驱动串行启动导致 40 秒启动时间
   - 高并发用户对启动速度敏感

4. **消息可靠性**
   - #5995 显示用户对消息丢失问题非常关注
   - 特别是在群聊场景下，消息顺序和完整性重要

5. **网络环境适应性**
   - #6205 和 #6232 反映带宽有限用户的需求
   - 对静态资源优化有实际压力

## 8. 待处理积压

### 长期未响应的重要 Issue/PR

1. **#5919 - 增加配置全局运行配置功能** ([OPEN](https://github.com/agentscope-ai/QwenPaw/issues/5919))
   - **创建时间**: 2026-07-10
   - **当前状态**: 8 天无更新
   - **重要性**: 高，影响配置管理效率

2. **#6193 - MCP 驱动启动性能问题** ([OPEN](https://github.com/agentscope-ai/QwenPaw/issues/6193))
   - **创建时间**: 2026-07-16
   - **当前状态**: 2 天无更新
   - **重要性**: 高，用户报告 8 倍性能差距

3. **#5698 - 适配 AgentScope 2.0 的工具运行批处理** ([OPEN](https://github.com/agentscope-ai/QwenPaw/pull/5698))
   - **创建时间**: 2026-07-01
   - **当前状态**: 17 天持续更新
   - **重要性**: 高，涉及核心工具链升级

维护者应优先关注启动性能问题和配置管理的长期痛点，这些直接影响用户核心体验。


</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>


# ZeptoClaw 项目动态日报 (2026-07-18)

---

## 1. 今日速览

ZeptoClaw 项目在过去 24 小时内活跃度较低，主要聚焦于数据维护工作。所有 8 条 Issues 均已关闭，内容集中在刷新 D5 门控点（gate point）元数据和跨组件（cross-component）信息。这表明项目当前处于稳定维护阶段，持续优化 CVE 数据的准确性和完整性。尽管无新版本发布或 PR 活动，但数据更新工作对提升项目的分析能力和可靠性具有重要价值。当前项目健康度良好，但缺乏新增功能开发的迹象。

---

## 2. 版本发布

**无新版本发布**  
[🔗 查看 Releases](https://github.com/qhkm/zeptoclaw/releases)

---

## 3. 项目进展

### 今日关闭的重要 Issues：

- **[#643](https://github.com/qhkm/zeptoclaw/issues/643)**：更新 D5 门控点和跨组件元数据，针对 Issue #466 的 JSON 记录（Row 38）。  
- **[#642](https://github.com/qhkm/zeptoclaw/issues/642)**：刷新 CSV Row 37 对应 Issue #329 的 D5 数据字段。  
- **[#641](https://github.com/qhkm/zeptoclaw/issues/641)**：针对 Issue #268，更新门控点和跨组件信息，补充工作流证明。  
- **[#640](https://github.com/qhkm/zeptoclaw/issues/640)**：更新 D5 门控点和跨组件字段，关联 Issue #466（Row 38）。  
- **[#639](https://github.com/qhkm/zeptoclaw/issues/639)**：处理 CSV Row 37 对应 Issue #329，刷新元数据记录。  
- **[#638](https://github.com/qhkm/zeptoclaw/issues/638)**：针对 Issue #268，更新 D5 门控点和跨组件信息（Row 36）。  
- **[#637](https://github.com/qhkm/zeptoclaw/issues/637)**：更新 Issue #264 的 D5 数据（Row 35）。  
- **[#636](https://github.com/qhkm/zeptoclaw/issues/636)**：重新分析 Issue #263 的 D5 门控点（Row 34），更新 JSON 记录。

> 所有 Issue 均由 YLChen-007 提交并闭合并进行了简单评论回复。这些工作主要围绕 `llm-enhance/official-cve/issue-security/` 目录下的 CVE JSON 文件展开，涉及对已有漏洞数据的结构化补充，未涉及代码逻辑变更。

---

## 4. 社区热点

今日讨论最活跃的内容集中在[**#643**](https://github.com/qhkm/zeptoclaw/issues/643)和[**#640**](https://github.com/qhkm/zeptoclaw/issues/640)，两者均针对同一 CVE 记录（Issue #466）进行 D5 数据更新。尽管每个 Issue 仅有一次评论，但它们体现了团队在保证数据一致性和准确性方面的持续投入。这可能与项目用于 AI 辅助漏洞分析的目标相关，强调了训练数据质量的重要性。

---

## 5. Bug 与稳定性

- **无新的 Bug 报告或崩溃问题**  
- 所有 Issue 属于数据维护类型，无功能性缺陷或回归问题提出。

---

## 6. 功能请求与路线图信号

- **无新功能请求或 PR 提出**  
- 当前工作聚焦于数据完善，暗示项目可能正准备进行内部模型训练或分析能力增强，而非面向用户的新功能开发。

---

## 7. 用户反馈摘要

从 Issue 评论中提炼的信息有限，仅有简单的确认与闭合操作。尚未发现用户关于使用体验的实质性反馈或痛点表达。若项目面向外部用户，建议增加反馈渠道或文档以鼓励更多社区参与讨论。

---

## 8. 待处理积压

- **无长期未响应的 Issue 或 PR**  
- 当前所有 Issue 均于 2026-07-17 提交并当天关闭，表明项目维护者对任务反应迅速，积压情况良好。

---

## 总结

ZeptoClaw 项目今日以数据维护为主要活动，展示了对 CVE 数据质量的持续关注。尽管缺乏用户可见的新功能或版本更新，但背靠的大模型训练与安全分析目标驱动了这些结构化数据的迭代需求。项目整体稳定，维护效率高，但社区互动和新功能开发仍有提升空间。

--- 

*注：本报告基于 GitHub 公开数据生成，所有链接指向原仓库地址。*


</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>


# ZeroClaw 项目日报 - 2026-07-18

## 1. 今日速览

ZeroClaw 项目今日保持高活跃度，24小时内 Issues 和 PR 活动均达 50 条，显示社区参与度旺盛。安全性和架构改进是今日主要议题，多个 RFC 围绕供应链签名、身份验证和沙箱政策展开讨论。同时，多代理部署、A2A 协议支持及 Discord 渠道增强功能持续吸引关注。项目正在向 v0.9.0 目标版本稳步推进，安全加固和跨会话记忆功能处于关键开发阶段。

## 2. 版本发布

暂无新版本发布。

## 3. 项目进展

### 今日已合并/关闭的重要 PR：

- **[feat(gateway): host webhook ingress → plugin inbound queue](https://github.com/zeroclaw-labs/zeroclaw/pull/8862)** - 实现了通道插件的 webhook 入口能力，支持类型化拒绝 ABI 并路由到可处置的 WASM 解析器，增强了网关的插件集成能力。
  
- **[feat(skills)!: replace built-in ClawHub source with git-catalog](https://github.com/zeroclaw-labs/zeroclaw/pull/8638)** - 移除硬编码的 ClawHub 技能安装路径，改用基于 git 的通用技能安装方式，提升了技能来源的灵活性和去中心化程度。

- **[fix(zerocode): expose channel root settings](https://github.com/zeroclaw-labs/zeroclaw/pull/8768)** - 在 ZeroCode TUI 中暴露通道根设置，使直接通道配置如 `show_tool_calls` 更容易发现和修改。

- **[docs(sop): add no-toml syntax examples](https://github.com/zeroclaw-labs/zeroclaw/pull/8742)** - 为 SOP 语法页面添加无 TOML 的示例，帮助用户更好地理解技能编辑方法。

- **[feat(web): link skills to editor](https://github.com/zeroclaw-labs/zeroclaw/pull/8558)** - 在技能浏览器中添加编辑链接，支持直接导航到技能包编辑器，改善 Web UI 体验。

这些合并显著推进了插件系统架构、技能管理灵活性以及用户界面易用性，项目向着更加模块化和用户友好的方向迈进。

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）：

1. **[RFC: Supply chain signing - hardware PGP, hermetic builds, and SLSA provenance](https://github.com/zeroclaw-labs/zeroclaw/issues/8177)** (11 评论) - 讨论引入硬件支持的 PGP 密钥、多方共识签署和 SLSA 来源证明机制，针对容器镜像和发布二进制文件，这是提升供应链安全的关键议题。

2. **[RFC: OIDC authentication provider support](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)** (7 评论) - 关于支持可插拔的 OIDC 身份验证提供程序，这将扩展 ZeroClaw 的身份管理能力，满足企业级部署需求。

3. **[RFC: Air-gapped execution mode with companion daemon over unix socket](https://github.com/zeroclaw-labs/zeroclaw/issues/6293)** (5 评论) - 讨论将 ZeroClaw 拆分为在线/离线双进程架构，通过 Unix 套接字通信，以支持隔离执行环境，满足高安全场景需求。

这些热门议题反映了社区对安全性、身份认证和隔离执行的高度关注，尤其是在供应链安全和企业部署方面提出了建设性的建议。

## 5. Bug 与稳定性

### 今日报告的 Bug（按严重程度排列）：

**S1 - 工作流程阻塞：**

- **[macos app not work](https://github.com/zeroclaw-labs/zeroclaw/issues/7527)** - macOS 应用安装后无法检测到授予的权限，窗口响应为空，重启后应用窗口消失。无 fix PR。
  
- **[SOPs are not available to the agent through the web dashboard chat session](https://github.com/zeroclaw-labs/zeroclaw/issues/8563)** - 配置的 SOP 文件在 Web 仪表盘聊天会话中不可用，影响任务自动化能力。无 fix PR。

- **[browser_open hangs the agent turn when the launcher cannot open a window](https://github.com/zeroclaw-labs/zeroclaw/issues/8560)** - 当浏览器启动器无法打开窗口时（如无显示环境），agent 进程会无限期挂起，严重影响用户体验。无 fix PR。

**S2 - 降级行为：**

- **[Daemon service auto-starts on boot, causes port conflict for manual runs](https://github.com/zeroclaw-labs/zeroclaw/issues/5628)** - 安装为 systemd 服务后开机自启动占用端口，导致手动运行时冲突。已有解决方案讨论中。

**安全相关：**

- **[security: rumqttc v0.25.1 pins rustls-webpki 0.102.x and rustls-pemfile — RUSTSEC advisory cluster](https://github.com/zeroclaw-labs/zeroclaw/issues/5869)** - MQTT 客户端依赖版本引发多个 RUSTSEC 安全警告，阻止依赖升级。status:blocked。

这些 Bug 揭示了跨平台兼容性、资源竞争和第三方依赖安全方面的问题，需要优先关注。

## 6. 功能请求与路线图信号

### 今日新提出或活跃的功能请求：

- **[Per-sender RBAC for multi-tenant agent deployments](https://github.com/zeroclaw-labs/zeroclaw/issues/5982)** - 提供基于发件人角色的访问控制，支持多租户场景下的隔离工作空间和权限管理，符合 v0.9.0 路线图规划。

- **[A2A (Agent-to-Agent) Protocol Support](https://github.com/zeroclaw-labs/zeroclaw/issues/3566)** - 原生支持 Agent2Agent 协议，增强与其他代理系统的互操作性，是多代理架构的重要组成部分。

- **[Granular sandbox policy — filesystem and network restrictions](https://github.com/zeroclaw-labs/zeroclaw/issues/6996)** - 提供更细粒度的沙箱策略配置，允许对文件系统和网络访问进行精确控制，增强了安全政策的灵活性。

- **[Turn-level OTel trace correlation](https://github.com/zeroclaw-labs/zeroclaw/issues/6641)** - 实现 OpenTelemetry 跟踪关联，将 LLM 调用、工具调用和记忆操作嵌套在单个回合跟踪下，提高可观测性。

这些功能请求大多与当前正在开发的 v0.9.0 版本相关，特别是安全隔离、身份认证和可观测性方面，表明项目正向着更成熟的架构演进。

## 7. 用户反馈摘要

从 Issues 评论中提炼出的真实用户痛点：

- **安装体验不佳**：用户反馈安装文档不够清晰，缺少关键步骤说明，如 `cargo binstall zeroclaw` 等命令缺乏指导，影响新用户上手。

- **跨平台兼容性问题**：macOS 用户遇到的权限检测失败和应用窗口消失问题，反映出桌面端体验不够稳定。

- **资源冲突**：服务自启动引起端口占用问题，表明系统集成和服务管理不够灵活。

- **多代理部署需求**：企业用户强烈需要多租户 RBAC 和隔离能力，以支持复杂的组织结构部署。

- **供应链信任度**：开发者呼吁引入硬件 PGP 和 SLSA 来源证明，以满足合规和安全审计要求。

用户对核心功能的接受度较高，但在安装、部署和跨平台适配层面存在明显痛点。

## 8. 待处理积压

### 长期未响应的重要 Issue/PR：

- **[security: rumqttc v0.25.1 pins rustls-webpki](https://github.com/zeroclaw-labs/zeroclaw/issues/5869)** - 自2026-04-18 以来持续阻塞依赖升级，由 security 模块维护者需要介入。

- **[[Bug]: Improve Installation Documentation & Methods](https://github.com/zeroclaw-labs/zeroclaw/issues/5269)** - 反映基础安装流程问题，虽然被接受但缺乏后续跟进，维护者应优先处理。

- **[RFC: Move translated .ftl and .po files into a git submodule](https://github.com/zeroclaw-labs/zeroclaw/issues/7184)** - 涉及国际化内容管理架构调整，需架构决策后推进。

- **[feat(channels): notify before context compression](https://github.com/zeroclaw-labs/zeroclaw/pull/7162)** - 需要作者进一步完善，目前处于阻塞状态。

建议维护者优先关注安全 advisory 阻塞的问题，以及影响新用户入门的安装优化工作。


</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*