# OpenClaw 生态日报 2026-07-20

> Issues: 362 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-19 22:15 UTC

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


# OpenClaw 项目动态日报 - 2026-07-20

## 1. 今日速览
OpenClaw 项目今日活跃度极高，Issues 和 PR 数量双破 300/500，显示社区参与度和开发速度都在快速推进。发布了 v2026.7.2-beta.3 版本，继续推进云端编码会话和原生自动化能力。同时出现了多个严重的回归 Bug（包括 beta.2 导致的网关启动失败、Telegram 回复退化等），反映出版本发布过程中可能存在质量控制问题。

## 2. 版本发布
**v2026.7.2-beta.3** 已发布

### 更新内容
- **远程编码会话**：支持在云端工作进程上运行 Control UI 会话，打开 Codex 和 Claude 目录会话终端
- **原生自动化和节点**：基础设施增强（具体细节文档不完整）

### 迁移注意事项
- **⚠️ Beta 版本**：不建议在生产环境中升级
- **数据库迁移风险**：从 beta.1 到 beta.2 的迁移已导致 `agent_id` 索引创建顺序错误 (#109867)，可能阻塞网关启动
- **Telegram 回归**：部分用户报告 DM 回复功能退化 (#111519)

## 3. 项目进展
今日合并/关闭的重要 PR 包括：

- **[#111531](https://github.com/openclaw/openclaw/pull/111531)** - 修复 Control UI 文件拖放导航问题（L 级别，P2）  
- **[#111555](https://github.com/openclaw/openclaw/pull/111555)** - 改进 doctor 工具对活跃 profile 状态的修复可靠性（S 级别，P2）  
- **[#111545](https://github.com/openclaw/openclaw/pull/111545)** - 本地化一致性改进（XL 级别，P2，Telegram 可见性证明）  
- **[#111535](https://github.com/openclaw/openclaw/pull/111535)** - 迁移插件 SDK 保留合约文档（S 级别，P1）  
- **[#111554](https://github.com/openclaw/openclaw/pull/111554)** - 修复 Control UI 测试中跨文件 mock 泄漏问题（L 级别）  

项目在 UI/UX 细节、本地化支持和插件开发者体验方面取得了显著进展，同时维护者正在积极响应社区反馈。

## 4. 社区热点
### 最热讨论 Issues（评论数最多）

| Issue | 标题 | 评论数 | 核心诉求 |
|-------|------|--------|----------|
| **[#75](https://github.com/openclaw/openclaw/issues/75)** | Linux/Windows Clawdbot Apps | 🔥114 | 呼吁为 Linux/Windows 平台开发官方客户端，恢复功能平衡 |
| **[#7707](https://github.com/openclaw/openclaw/issues/7707)** | Memory Trust Tagging by Source | 🔥17 | 防止内存投毒攻击，按来源标记信任等级 |
| **[#10659](https://github.com/openclaw/openclaw/issues/10659)** | Masked Secrets | 🔥14 | 代理可以使用 API 密钥但无法查看原始值，增强安全性 |
| **[#13583](https://github.com/openclaw/openclaw/issues/13583)** | Pre-response enforcement hooks | 🔥14 | 在高风险场景中强制工具调用，禁用软规则 |
| **[#44431](https://github.com/openclaw/openclaw/issues/44431)** | Browser tool improvements | 🔥11 | 真实浏览器自动化测试提出 7 项改进建议 |

### 热门 PR 讨论

| PR | 标题 | 内容摘要 |
|-----|------|----------|
| **[#111524](https://github.com/openclaw/openclaw/pull/111524)** | Pinned MCP apps | 将 MCP 应用渲染为控制面板小部件，实现工具授予持久化 |
| **[#102228](https://github.com/openclaw/openclaw/pull/02228)** | ClawHub packages | 解决新 Claw 代理的安装流程和信任决策机制 |
| **[#89039](https://github.com/openclaw/openclaw/pull/89039)** | Prevent silent message loss | 修复因 OpenAI SDK 重试导致的会话锁释放问题 |

## 5. Bug 与稳定性 🔴

### 严重 Bug（P0/P1）

| 问题 | 类型 | 链接 | 状态 |
|------|------|------|------|
| **[#109867](https://github.com/openclaw/openclaw/issues/109867)** | 回归/启动阻塞 | 数据库迁移创建索引前未添加列 | **OPEN**，无 fix PR |
| **[#111519](https://github.com/openclaw/openclaw/issues/111519)** | 回归/消息丢失 | Telegram DM 回复在 beta.3 中退化 | **OPEN**，无 fix PR |
| **[#108075](https://github.com/openclaw/openclaw/issues/108075)** | 回归/LLM 请求失败 | LLM 拒绝请求架构 | **CLOSED** |
| **[#99310](https://github.com/openclaw/openclaw/issues/99310)** | 崩溃/主线程阻塞 | Memory Dreaming 运行卡死网关 10 分钟 | **OPEN**，无 fix PR |
| **[#85156](https://github.com/openclaw/openclaw/issues/85156)** | 回归/UI 崩溃 | npm 全局 + launchd 导致网关死锁 | **OPEN**，无 fix PR |

### 一般 Bug（P2/P3）

| 问题 | 类型 | 链接 | 状态 |
|------|------|------|------|
| **[#93139](https://github.com/openclaw/openclaw/issues/93139)** | 行为/字符串处理 | write 工具插入 `\n` 而非换行符 | **OPEN** |
| **[#87182](https://github.com/openclaw/openclaw/issues/87182)** | 数据丢失/时序问题 | 稳定叙述会话被提前清理 | **OPEN**，无 fix PR |
| **[#103198](https://github.com/openclaw/openclaw/issues/103198)** | 行为/媒体处理 | WebChat 图片附件路径映射失败 | **OPEN** |
| **[#111506](https://github.com/openclaw/openclaw/issues/111506)** | 会话锁竞争 | 快速请求导致 EmbeddedAttemptSessionTakeoverError | **OPEN** |

## 6. 功能请求与路线图信号 🚀

### 高优先级功能请求

| 请求 | 链接 | 投票数 | 实现进度 |
|------|------|--------|----------|
| **Memory Trust Tagging** (#7707) | 增强内存安全，按来源标记信任等级 | 0 | 社区讨论中 |
| **Masked Secrets** (#10659) | API 密钥不可见但可用机制 | 4 | 设计阶段 |
| **Pre-response enforcement hooks** (#13583) | 硬门控强制工具调用 | 2 | RFC 阶段 |
| **Denylist for exec-approvals** (#6615) | 补充现有 allowlist 的双项控制 | 7 | 等待维护者审查 |
| **Subagent orchestration improvements** (#92369) | cron 隔离会话中的子代理编排 | 2 | 讨论中 |

### 可能进入下一版本的特性

- **Denylist 支持 exec-approvals**（PR 可能随 v2026.7.3 合并）
- **MCP 应用仪表板挂件持久化**（#111524 PR 准备就绪）
- **Telegram 链接预览控制**（#111551 已解决）
- **ClawHub 包生命周期管理**（系列 PR 已进入 maintainer review）

## 7. 用户反馈摘要 💬

### 关键痛点提取

1. **平台不平等**：用户 steipete 强烈呼吁 Linux/Windows 客户端 (#75)，反映生态不完整的问题
2. **安全顾虑**：多位用户对内存投毒 (#7707)、密钥泄露 (#10659)、权限声明 (#12219) 表示担忧
3. **企业场景需求**：金融/量化用户 (#13583) 要求硬门控以符合合规要求
4. **浏览器自动化缺陷**：真实测试 (#44431) 揭露选择器支持、验证码处理等工程问题
5. **UI 细节抱怨**：TUI Shift+Enter (#10118)、Composer 消息消失 (#111540) 等体验问题频繁被提及

### 满意点

- 云端编码会话特性受到欢迎
- 工具调用稳定性总体良好（仅少数回归）
- 插件架构灵活性受到认可

## 8. 待处理积压 🕰️

### 长期未响应重要 Issue

| Issue | 年龄 | 链接 | 备注 |
|-------|------|------|------|
| **[#75](https://github.com/openclaw/openclaw/issues/75)** | >191天 | Linux/Windows Clawdbot Apps | 需要产品决策和维护者审查 |
| **[#12219](https://github.com/openclaw/openclaw/issues/12219)** | >167天 | Skill Permission Manifest | 安全审查挂起 |
| **[#79077](https://github.com/openclaw/openclaw/issues/79077)** | >134天 | Telegram Bot-to-Bot 支持 | 需要 live repro 验证 |
| **[#6615](https://github.com/openclaw/openclaw/issues/6615)** | >175天 | Exec-approvals denylist | 等待维护者审查 |
| **[#92369](https://github.com/openclaw/openclaw/issues/92369)** | >129天 | Subagent orchestration | 需要架构级解决方案 |

### 维护者提醒
当前 clawsweeper 标签显示多个 Issue 处于 `clawsweeeper:needs-maintainer-review`、`clawsweeeper:needs-security-review` 和 `clawsweeeper:needs-product-decision` 状态，建议维护团队优先处理这些关键决策点问题。


---

## 横向生态对比


# 2026-07-20 AI 智能体开源项目「今日重點」摘要

## 重要更新

1. **OpenClaw** (github.com/openclaw/openclaw) 发布了 **v2026.7.2-beta.3**，新增云端编码会话和原生自动化能力，但引入了严重回归 Bug 包括网关启动失败和 Telegram 回复功能退化。

2. **IronClaw** (github.com/nearai/ironclaw) 进行 **大规模架构重构**，合并 28 个 PR 推进 "reborn" 架构，统一部署配置和增强本地开发体验，但面临 PDF 文件处理等核心功能的 Bug 挑战。

3. **ZeroClaw** (github.com/zeroclaw-labs/zeroclaw) 关闭多个重要 Feature Issue，包括 **GitHub 原生频道恢复**、**SMTP 邮件发送功能**、**缓存输入令牌持久化用于成本计算**，但 Telegram 配置和 Windows 启动等 S1/S0 严重 Bug 仍然未修复。

4. **NanoClaw** (github.com/qwibitai/nanoclaw) 合并 28 个 PR，重点修复 **WhatsApp LID 模式下群组消息不可靠问题** 和 **远程 MCP 服务器支持**，提升即时通讯稳定性。

5. **NanoBot** (github.com/HKUDS/nanobot) 修复多个 Windows 兼容性问题，包括 **Bun 命令 shim** 和 **UTF-8 子进程输出乱码**，整体稳定性得到提升。

6. **Hermes Agent** (github.com/nousresearch/hermes-agent) 推进 **跨平台会话共享** 和 **Ollama 原生 API 集成优化**，但 TUI 稳定性和 Discord 适配器连接问题成为技术挑战。

7. **CoPaw** (github.com/agentscope-ai/CoPaw) 解决 **MCP 驱动串行初始化性能问题**，8 个客户端启动时间从 40 秒优化至 5 秒，但仍有核心模型配置 Token 限制问题未解决。

## 活躍度概览

今日整体活跃度较高，**OpenClaw**、**IronClaw** 和 **Hermes Agent** 表现最为活跃，分别处理 300+、50 和 50 个 Issue/PR。**NanoClaw** 和 **NanoBot** 也保持良好开发节奏，专注于 Bug 修复和平台兼容性优化。相较之下，**PicoClaw**、**Moltis**、**LobsterAI** 和两款极小型项目活跃度较低，主要处理技术债务和体验优化问题。


---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>


# NanoBot 项目动态日报 - 2026-07-20

## 1. 今日速览

NanoBot 项目今日活跃度较高，24小时内共处理29个 Issue/PR（5个 Issues，24个 PRs），其中9个 PR 已合并/关闭。项目主要聚焦于 Bugfix 密集开发和 WebUI 功能增强，尤其是 Windows 平台兼容性修复和渠道系统重构工作。维护团队快速响应，多条 P1 优先级的关键 Bug 已获得修复。长期存在的 Issue #1459（codex 执行行为异议）依然悬而未决，需要进一步跟进。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日合并/关闭的重要 PR 包括：

- **[PR #4994] fix(webui): resolve Windows package manager shims** - 解决 Windows 平台上 Bun 命令 shim 问题，修复 WebUI 构建辅助工具在 Windows 环境下的兼容性。[链接](https://github.com/HKUDS/nanobot/pull/4994)

- **[PR #4904] fix(providers): fail over across provider failure domains** - 实现提供商故障域之间的智能故障转移机制，提高服务可靠性。[链接](https://github.com/HKUDS/nanobot/pull/4904)

- **[PR #4990] fix(triggers): reject deliveries to disabled channels** - 阻止本地触发器在目标渠道禁用后继续运行，避免资源浪费。[链接](https://github.com/HKUDS/nanobot/pull/4990)

- **[PR #4979] fix(gitstore): resolve staged paths relative to workspace** - 解决 GitStore 在工作空间与进程工作目录不一致时的初始化失败问题。[链接](https://github.com/HKUDS/nanobot/pull/4979)

- **[PR #4976] fix(cli-apps): decode subprocess output as UTF-8** - 修复 Windows 非 UTF-8 区域设置下 CLI 应用输出乱码问题。[链接](https://github.com/HKUDS/nanobot/pull/4976)

- **[PR #4834] fix(whatsapp): allow group ids in allowFrom** - 恢复 WhatsApp 群组白名单支持，修复群组消息广播到所有群的问题。[链接](https://github.com/HKUDS/nanobot/pull/4834)

## 4. 社区热点

- **[Issue #1459] nanobot with codex-5.3-codex is lazy and doesn't actually execute** - 长期悬存 Issue（4个月），用户认为 NanoBot 在处理 codex-5.3 模型时表现迟缓、未能真正执行操作。该问题引发了6条评论和2个赞，表明用户对模型执行一致性和响应及时性有较高期待。[链接](https://github.com/HKUDS/nanobot/issues/1459)

- **[PR #4997] feat(webui): add secure browser companion launch** - 新增安全浏览器伴侣启动功能，包含 localhost 状态端点、直接导航启动流程及会话刷新机制。在安全性和兼容性方面做了显著工作，是 WebUI 体验优化的重要更新。[链接](https://github.com/HKUDS/nanobot/pull/4997)

## 5. Bug 与稳定性

### 严重 Bug（已修复）：

- **[Issue #4991] Local triggers report success after their target channel is disabled** → [PR #4990] 已修复  
  本地触发器在目标渠道禁用后继续运行，可能导致模型资源浪费。[链接](https://github.com/HKUDS/nanobot/issues/4991)

- **[Issue #4975] CLI Apps lose UTF-8 subprocess output on Windows non-UTF-8 locales** → [PR #4976] 已修复  
  Windows 非 UTF-8 区域设置下 CLI 子进程输出乱码，严重影响跨平台使用体验。[链接](https://github.com/HKUDS/nanobot/issues/4975)

- **[Issue #4980] GitStore fails to initialize when workspace differs from the process working directory** → [PR #4979] 已修复  
  工作空间配置错误导致 GitStore 初始化失败。[链接](https://github.com/HKUDS/nanobot/issues/4980)

### 回归问题：

- **[Issue #4823] whatsapp - groups** → [PR #4834] 已修复  
  WhatsApp 群组消息逻辑回退，导致消息错误广播到所有群组。[链接](https://github.com/HKUDS/nanobot/issues/4823)

## 6. 功能请求与路线图信号

- **[PR #4996] Add Atlas Cloud provider support** - 添加 Atlas Cloud 提供商支持，扩展模型提供商兼容性矩阵。[链接](https://github.com/HKUDS/nanobot/pull/4996)

- **[PR #4963] feat(webui): polish agent output and app discovery** - 统一 Agent 输出格式和应用发现机制，优化 WebUI 用户体验。[链接](https://github.com/HKUDS/nanobot/pull/4963)

- **[PR #4625] feat(exec): allow extra bwrap bind roots** - 允许配置额外的 bwrap 绑定根目录，增强沙箱灵活性和部署可定制性。[链接](https://github.com/HKUDS/nanobot/pull/4625)

- **[PR #1631] feat(channels): add MQTT channel support** - 新增 MQTT 渠道支持，拓展物联网设备通信能力。[链接](https://github.com/HKUDS/nanobot/pull/1631)

这些都有望纳入下一版本，特别是 MQTT 支持和 Atlas Cloud 提供商集成。

## 7. 用户反馈摘听

- 来自 **[Issue #4823]** 的反馈：WhatsApp 群组功能在 0.2.2 版本后出现回退，用户隐约表达了对隐私控制严格性的担忧。

- **[Issue #1459]** 中的用户表达了对于模型响应一致性的不满，特别是在执行类任务（阅读文件、总结指令）上的迟缓感。

## 8. 待处理积压

- **[Issue #1459]** - 长期未响应（4个月），涉及模型执行行为问题，需优先跟进。[链接](https://github.com/HKUDS/nanobot/issues/1459)

- **[PR #4625]** - 沙箱绑定目录增强功能，开放6天仍未合并，需要确认是否计划纳入或需要更多讨论。[链接](https://github.com/HKUDS/nanobot/pull/4625)


</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>


# Hermes Agent 项目动态日报 - 2026-07-20

## 1. 今日速览
Hermes Agent 今日活跃度高，24小时内 Issues 50 条（48 活跃）、PR 50 条（46 待合并），显示社区参与度旺盛。主要聚焦于代理集成优化、会话管理问题和多平台兼容性修复。其中包含多个高优先级 Bug（P1/P2）涉及 TUI 稳定性、认证边界和消息传递风险，反映项目在快速迭代中面临的技术挑战。同时，持续有新的功能提议围绕内存管理、速率限制处理和跨平台协作展开讨论。

## 2. 版本发布
暂无新版本发布。

## 3. 项目进展
今日合并 4 个 PR，主要推进：

- **PR #67708**: 修复 macOS 环境下 gateway 测试脚本 (`test_shutdown_forensics.py`) 的兼容性问题
- **PR #67700**: 解决 macOS 平台下 systemd 通知测试的平台守护逻辑
- **PR #67703**: 修复 macOS 环境下 WSL 网关测试的跨平台支持
- **PR #64810**: 解决 Windows 平台桌面端差异视图无法显示含空格路径文件的 Bug（已关闭）

这些合并主要集中在测试基础设施的跨平台稳定性提升，为项目构建和验证流程健壮性做出贡献。

## 4. 社区热点

### 🔥 最热讨论 Issue
**[#4505 - Optimize Ollama Integration](https://github.com/NousResearch/hermes-agent/issues/4505)** (13 评论, 2 👍)
*优化 Ollama 集成：使用原生 `/api/chat` 端点替代 OpenAI 兼容端点*
用户和开发者对性能提升（真正的 delta 流式传输）表达了强烈兴趣，这是当前最具争议性的技术决策话题。

### 🚀 最受关注 Feature Request
**[#4319 - KV cache invalidation on compression](https://github.com/NousResearch/hermes-agent/issues/4319)** (6 评论, 2 👍)
*当上下文压缩触发系统提示重建时，KV 缓存失效导致局部 MoE 模型性能严重下降*
对于使用 Qwen3.5 35B、Mixtral 等大模型的用户来说，这是一个关键性能瓶颈。

### 💡 新兴功能讨论
**[#67675 - French locale support](https://github.com/NousResearch/hermes-agent/pull/67675)**
法语本地化支持请求引发关于国际化策略的讨论，显示项目全球化努力受到关注。

## 5. Bug 与稳定性

### 🔴 高优先级 (P1/P2)
1. **[#67639 - Spurious TUI "stdin EOF"](https://github.com/NousResearch/hermes-agent/issues/67639)**
   TUI 在标准输入未关闭情况下出现假性 EOF 错误，风险标签为 `sweeper:risk-session-state`

2. **[#67691 - Credentials in memory context](https://github.com/NousResearch/hermes-agent/pull/67691)**
   内存工具可能将凭证引入模型上下文，存在安全边界风险

3. **[#66565 - Session colors feature](https://github.com/NousResearch/hermes-agent/issues/66565)**
   会话缺乏视觉标识，影响多会话管理效率

4. **[#67698 - Discord adapters event loss](https://github.com/NousResearch/hermes-agent/issues/67698)**
   Gateway 多路复用模式下特定 Discord 适配器连接后不接收消息事件

### 🟡 中优先级 (P3) - 多个 Bug
- **[#46785](https://github.com/NousResearch/hermes-agent/issues/46785)**: 安装器错误诊断 Electron 下载问题
- **[#67702](https://github.com/NousResearch/hermes-agent/issues/67639)**: Discord 交接创建私有线程但不邀请目标用户
- **[#67664](https://github.com/NousResearch/hermes-agent/issues/67664)**: 桌面端运行时状态检测失效
- **[#65613](https://github.com/NousResearch/hermes-agent/issues/65613)**: 链接标题预览 SSRF 漏洞风险

## 6. 功能请求与路线图信号

### 🎯 高潜力功能
1. **[Cross-platform session sharing (#4335)](https://github.com/NousResearch/hermes-agent/issues/4335)**
   CLI ↔ Telegram 会话上下文共享，解决多平台隔离问题

2. **[RPM-based rate limiting (#7489)](https://github.com/NousResearch/hermes-agent/issues/7489)**
   基于提供商响应头的预防性速率限制，避免 429 重试循环

3. **[Time-aware context injection (#64696)](https://github.com/NousResearch/hermes-agent/pull/64696)**
   时间感知注解注入，帮助代理理解用户间隔话语

4. **[Native voice streaming endpoint (#35040)](https://github.com/NousResearch/hermes-agent/pull/35040)**
   新增 `/api/voice/turns/stream` 端点，支持语音转文本流式传输

这些功能已有对应 PR 在 review 中，表明核心团队正在积极响应社区需求。

## 7. 用户反馈摘要

### 📈 积极反馈
- 用户赞赏 Hermes Agent 的多平台支持能力（Telegram、Discord、CLI）
- 对性能优化（特别是流式传输改进）表达强烈支持

### 📉 痛点反馈
- **Ollama 用户**：强烈希望采用原生 API 提升性能和稳定性
- **Windows 用户**：反映多个平台特定 Bug（安装器诊断、代理配置、文件路径处理）
- **多代理用户**：希望会话、记忆和环境变量的隔离/共享机制更灵活
- **长时间任务用户**：对上下文压缩导致的性能回退表示不满

### 🔄 工作流反馈
- 用户希望能够追踪代理在会话期间的所有文件变更（缺少 `/diff` 命令）
- 需要更好的记忆 retain 策略指导和实践
- 需要对模型配置变更及时警告以避免 cron 作业漂移

## 8. 待处理积压

### ⏳ 长期未响应 Issue
**[#3523 - hermes update regressions](https://github.com/NousResearch/hermes-agent/issues/3523)** (创建于 2026-03-28)
Git 输出隐藏和不必要的 stash 创建问题存在近4月，尽管标签显示 `needs-decision`，但尚未有明确解决方案。

---

*数据来源: GitHub Issues/PRs 统计 | 生成时间: 2026-07-20*


</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>


# PicoClaw 项目动态日报 - 2026-07-20

## 1. 今日速览

PicoClaw 项目今日活跃度较低，仅有3个Issues和3个PR产生更新，但均无合并或关闭的情况发生。项目主要聚焦于稳定性修复和细节优化，包括Anthropic提供商的缓存Token统计、身份ID规范化处理，以及授权令牌作用域修复。社区参与热情一般，Bug报告集中在通道启动和模型提供商解析方面，整体健康度稳定但发展势头不明显。

## 2. 版本发布

暂无新版本发布。

## 3. 项目进展

今日无PR被合并或关闭，三个开放PR分别处于待合并状态：
- **#3251** 计划为Anthropic提供商添加prompt cache token统计功能，提升运营监控能力
- **#3202** 修复身份ID规范化逻辑，增强ID处理的规范性和一致性  
- **#3267** 解决授权令牌刷新作用域传递错误，修复antigravity集成的权限问题

项目整体技术债务处理进展缓慢，需加强代码审查和合并效率。

## 4. 社区热点

**#3265 Gateway startup fails with 'channel deltachat has unknown type deltachat'** [GitHub Issue](https://github.com/sipeed/picoclaw/issues/3265)

该Issue由用户Cipher208于7月19日创建，反映网关启动时出现deltachat类型未知错误，尽管用户并未配置deltachat通道。这一诉求凸显项目配置加载机制可能存在隐式依赖或默认配置问题，影响用户部署体验。该Issue目前无评论和赞同数，但代表了用户面临的关键稳定性障碍。

## 5. Bug 与稳定性

**【高】**#3265 Gateway startup fails with 'channel deltachat has unknown type deltachat'  
→ 无fix PR关联 

**【中】**#3266 Weixin channel passes images to non-vision model, showing error before file handling  
→ 已关闭，说明该问题可能通过其他方式解决

**【低】**#3252 splitKnownProviderModel strips provider prefix when model ID contains known provider alias  
→ stale标记，表明长期存在但优先级较低

项目稳定性问题分布于启动流程和多通道集成，需重视默认依赖和类型注册机制的健壮性。

## 6. 功能请求与路线图信号

暂无明确新功能请求。已有PR#3251的prompt cache统计功能可视为运营能力增强，有望纳入下一版本。项目当前侧重于现有功能的稳定性和准确性优化，缺乏创新性功能开发动向。

## 7. 用户反馈摘要

从Issues分析得出以下用户痛点：
- **部署门槛高**：Issue#3265显示即使未使用的组件也可能干扰启动，增加了部署复杂度
- **多通道兼容性**：Issue#3266暴露出Weixin(iLink)通道对多模态模型支持不足，导致用户交互体验下降
- **配置灵活性**：长期存在的Issue#3252表明模型ID解析逻辑不够灵活，限制了高级定制场景

用户主要关注系统的可靠性和配置的灵活性，特别是在企业微信等特定通道的应用场景下。

## 8. 待处理积压

**#3252 splitKnownProviderModel strips provider prefix when model ID contains known provider alias** [GitHub Issue](https://github.com/sipeed/picoclaw/issues/3252)

该Issue由v2up-32mb于7月12日创建，已标记为stale但仍保持open状态超过一周，反映项目维护响应速度有待提高。建议维护者及时跟进解决，防止技术债务累积影响后续开发。

---

*本报告基于GitHub公开数据生成，旨在客观反映项目发展状况。如需进一步分析或投资决策支持，请联系项目官方或社区维护者获取更多信息。*


</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>


# NanoClaw 项目动态日报 - 2026-07-20

## 1. 今日速览

项目今日活跃度适中，Issues 方面集中在 Bug 修复和功能规划，共处理 16 条已关闭议题；PR 方面合并 28 条，主要集中在 WhatsApp 适配器的稳定性修复以及远程 MCP 服务器支持。当前项目处于持续维护和优化阶段，核心通道稳定性和扩展性成为关注焦点。

## 2. 版本发布

暂无新版本发布。

## 3. 项目进展

### 今日合并/关闭的重要 PR：

- **[PR #3038](https://github.com/nanocoai/nanoclaw/pull/3038)** - 修复了 LID 模式 WhatsApp 群组消息发送卡在"等待中"的问题  
- **[PR #3008](https://github.com/nanocoai/nanoclaw/pull/3008)** - 移除破坏 LID 群组 SKDM 的缓存组元数据  
- **[PR #2870](https://github.com/nanocoai/nanoclaw/pull/2870)** - 保留 WhatsApp 群组加密所需的原生参与者地址  
- **[PR #2688](https://github.com/nanocoai/nanoclaw/pull/2688)** - 停止将群组参与者转换为电话 JID，解决 LID 群组 ack 421 错误  
- **[PR #2847](https://github.com/nanocoai/nanoclaw/pull/2847)** - 支持基于 URL 的远程 MCP 服务器  
- **[PR #2306](https://github.com/nanocoai/nanoclaw/pull/2306)** - 新增 yt-dlp MCP 服务器技能  

这些 PR 推进了项目在即时通讯稳定性和 MCP 生态集成方面的能力，特别是 WhatsApp 在新模式下的群组通信支持。

## 4. 社区热点

### 今日活跃 Issues/PR：

- **[Issue #3091](https://github.com/nanocoai/nanoclaw/issues/3091)** - 功能请求：标准化可组合的主机扩展钩子  
- **[Issue #3088](https://github.com/nanocoai/nanoclaw/pull/3088)** - 新增 CLI 命令展示未知发送人挂起状态  
- **[PR #3092](https://github.com/nanocoai/nanoclaw/pull/3092)** - 支持远程 Streamable HTTP MCP 服务器  

背后诉求：开发者希望 NanoClaw 提供更灵活的主机级扩展机制；用户需要更清晰的权限审批工作流；社区也在推动 MCP 标准的远程化能力。

## 5. Bug 与稳定性

### 按严重程度排序的 Bug：

**⚠️ 高频致命 Bug（用户直接影响）**

- **[Issue #2506](https://github.com/nanocoai/nanoclaw/issues/2506)** - `send_message` 去重逻辑在 60 秒内连续轮次或流式查询中静默丢弃响应，导致客户端超时  
- **[Issue #2894](https://github.com/nanocoai/nanoclaw/issues/2894)** - WhatsApp 适配器在直连 CDN 获取失败时静默丢弃入站媒体附件  

**🔧 中等稳定性问题**

- **[Issue #3016](https://github.com/nanocoai/nanoclaw/issues/3016)** - 每个 rate_limit_event 都被记录为配额错误，即使状态为 "allowed"  
- **[Issue #2482](https://github.com/nanocoai/nanoclaw/issues/2482)** - 设置向导在 `su -` 调用下误检测 systemd 为缺失  
- **[Issue #2784](https://github.com/nanocoai/nanoclaw/issues/2784)** - 容器运行器仅监控 `index.ts`，忽略 `ipc-mcp-stdio.ts` 变更  

**🟢 已有 Fix PR**

- WhatsApp 相关 Bug 已被多个 PR 解决（#3038, #3008, #2870, #2688）

## 6. 功能请求与路线图信号

### 近期新增功能请求：

- **[Issue #1682](https://github.com/nanocoai/nanoclaw/issues/1682)** - 基于关键词的预轮模型选择路由  
- **[Issue #3089](https://github.com/nanocoai/nanoclaw/issues/3089)** - 让代理从经验中学习并创建技能  
- **[Issue #1981](https://github.com/nanocoai/nanoclaw/issues/1981)** - v2 设置在无头 Linux 上误检测 systemd 缺失  

### 可能纳入下一版本的功能：

远程 MCP 服务器支持（PR #3092, #2847）和模型路由功能（Issue #1682, #1681）已有实现或草图，较可能成为 v2.x 重要更新内容。

## 7. 用户反馈摘要

- **痛点**：WhatsApp LID 模式下群组消息不可靠、媒体附件丢失、systemd 环境检测不准确  
- **场景**：Proxmox LXC、Ubuntu 服务器、SSH 远程部署环境下频繁遇到 systemd 检测失败  
- **满意点**：技能安装流程（如 `/add-ytdlp`）被认为易用  
- **不满意点**：CLI 缺少对定时任务的直接控制能力（#2397）、容器挂载管理不完备（#2395）

## 8. 待处理积压

- **[Issue #1981](https://github.com/nanocoai/nanoclaw/issues/1981)**（创建于 2026-04-24，12+ 周未回应）- systemd 在无头 Linux 上误检测问题，已被多个用户重报  
- **[PR #2348](https://github.com/nanocoai/nanoclaw/pull/2348)**（创建于 2026-05-08， OPEN）- WhatsApp 单定时器重连与清理机制  
- **[PR #2694](https://github.com/nanocoai/nanoclaw/pull/2694)**（创建于 2026-06-06， OPEN）- Signal 适配器 DM 被丢弃问题  

维护者应优先处理 systemd 检测误报和 WhatsApp/Signal 适配器长期未合并的修复 PR。


</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>


# IronClaw 项目动态日报 (2026-07-20)

## 今日速览

IronClaw 今日活跃度极高，共处理 50 个 Pull Requests（其中 28 个已合并），仅 5 个 Issues 更新且全部保持开放状态。项目正处于重大架构重构期，核心开发者集中推进 "reborn" 架构简化工作，包括能力结果翻转、部署配置重构及本地开发体验优化。同时大量依赖组件更新及性能优化工作在进行中，整体项目健康度良好但面临持续的破坏性变更压力。

## 版本发布

暂无新版本发布。

## 项目进展

今日合并的 28 个 PR 主要推进以下关键领域：

**架构重构与能力模型升级：**
- [#6275](https://github.com/nearai/ironclaw/pull/6275)（已关闭）引入 `ResolutionBatch` 和 `parks()` 循环挂起谓词，为能力结果翻转做准备
- [#6278](https://github.com/nearai/ironclaw/pull/6278)（已关闭）完成主机端网关重建，增强本地开发环境持久化
- [#6281](https://github.com/nearai/ironclaw/pull/6281)（已关闭）优化 turn-state row store 性能，移除冗余全局提交门

**部署配置统一化：**
- [#6277](https://github.com/nearai/ironclaw/pull/6277)（已关闭）强制执行轴变为解析后的策略值，而非配置文件匹配
- [#6282](https://github.com/nearai/ironclaw/pull/6282)（已关闭）`RebornBuildInput` 现在承载 `DeploymentConfig` 数据
- [#6279](https://github.com/nearai/ironclaw/pull/6279)（已打开）`DeploymentConfig` 接管所有部署轴，消除模式分支逻辑

**本地开发体验：**
- [#6285](https://github.com/nearai/ironclaw/pull/6285)（已打开）实现无缝本地开发注册流程，包括自动提供服务和 REPL 模型向导

**依赖更新：**
- [#6165](https://github.com/nearai/ironclaw/pull/6165)（已关闭）更新 26 个 Rust 依赖组件
- [#6288](https://github.com/nearai/ironclaw/pull/6288)（已打开）更新 32 个依赖库
- [#6186](https://github.com/nearai/ironclaw/pull/6186)（已打开）升级 tokio 生态系统组件

## 社区热点

**最具讨论价值的 PR：**
- [#6273](https://github.com/nearai/ironclaw/pull/6273)[OPEN]：核心重构工作，`Resolution` 结构现携带模型可见失败诊断和拒绝内容。这是一个架构级变更，为 AI 模型提供更丰富的错误恢复上下文信息。

**架构演进信号：**
- [#6274](https://github.com/nearai/ironclaw/pull/6274)[OPEN]：作为部署配置主体化工作的里程碑 Issue，反映团队正在统一管理所有部署场景配置，减少重复逻辑。

## Bug 与稳定性

**高影响 Bug：**
1. [#6257](https://github.com/nearai/ironclaw/issues/6257)[OPEN] - PDF 文件发送/生成时出现 `"Invalid value (attachments.mime_type)"` 错误
   - 严重程度：高（阻碍核心功能使用）
   - 状态：暂无 fix PR，可能与底层工具集成或文件读取逻辑有关
   
2. [#6290](https://github.com/nearai/ironclaw/issues/6290)[OPEN] - 与 #6257 类似的 PDF mime_type 错误（疑似重复报告）
   - 严重程度：高
   - 来源：Slack 用户反馈

## 功能请求与路线图信号

**用户体验增强：**
- [#6289](https://github.com/nearai/ironclaw/pull/6289)[OPEN]：REPL 添加思考动画指示器和 Markdown 渲染支持，显著提升交互体验
- [#6285](https://github.com/nearai/ironclaw/pull/6285)[OPEN]：本地开发零配置上手体验，消除环境变量手动配置负担

**架构远景目标：**
- [#6284](https://github.com/nearai/ironclaw/issues/6284)[OPEN]：目标是实现 100% 错误恢复能力，确保模型能够看到并响应所有运行时错误，这将成为 IronClaw 差异化竞争力的关键特性

## 用户反馈摘要

从今日 Issue 评论中提取的关键用户痛点：
- **部署复杂性**：用户在首次运行时遇到 WebUI token 和用户 ID 缺失等问题，需要手动环境配置
- **文件处理能力**：PDF 等常见文档格式支持不足，直接影响实际业务场景应用
- **本地开发门槛**：缺乏一键式开发环境搭建，增加了试用和贡献难度

## 待处理积压

需维护者关注的长期 Issue：
- [#6263](https://github.com/nearai/ironclaw/issues/6263)[OPEN]（19日创建）：计划退役 `InMemoryTurnStateStore`，需要 Slice 0 oracle 验证和活锁证据。这是一个技术债务清理工作，对系统稳定性和性能有重要影响。

---

*注：本报告基于 GitHub 公开数据生成，旨在客观反映项目技术活动和社区反馈。对于开发者和用户来说，当前 IronClaw 正经历结构性质的重构，短期内可能会遇到 API 破坏性变更，但长期架构优化和开发体验提升值得期待。*


</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>


LobsterAI 2026-07-20 项目动态日报

## 1. 今日速览
LobsterAI 项目近24小时保持较低活跃度，仅有3个新Issue和3个PR更新，其中大部分已标记为'stale'状态。项目稳定性似乎面临一些挑战，特别是在IM机器人测试逻辑和代码块展示方面出现问题。值得注意的是，用户对长代码块的阅读体验提出了具体改进建议，该Issue可能对后续版本有积极影响。

## 2. 版本发布
暂无新版本发布。

## 3. 项目进展
#1350 PR已关闭，但未明确说明修复方案。该PR涉及skills文件长时间生成阻塞问题和模型理解偏差，这些都是影响用户体验的关键问题。项目在处理这些问题上仍需进一步跟进。

## 4. 社区热点
#1289 Issue讨论代码块折叠功能，这是用户体验层面的重要改进建议。链接：https://github.com/netease-youdao/LobsterAI/issues/1289

## 5. Bug 与稳定性
- #1287 Bug：IM机器人连通性测试存在逻辑漏洞，即使appkey、appsecret、aes key全填1也能测试通过，这可能导致安全隐患。
- #1352 Bug：任务运行中无法上传附件，用户无法在任务进行时添加必要文件支持。

## 6. 功能请求与路线图信号
#1289 提议为长代码块添加折叠/展开功能，这是一个显而易见的用户体验提升项，建议优先考虑纳入下一版本规划。

## 7. 用户反馈摘要
用户反映在使用过程中遇到的三个主要痛点：
- IM机器人测试逻辑不严谨，难以验证真实配置有效性
- 长代码块展示方式不佳，影响阅读体验  
- Skills生成过程阻塞且缺乏状态反馈，用户感知差

## 8. 待处理积压
#1287 和 #1289 均创建于2026-04-02，已持续4个月未得到有效解决，建议维护团队重新评估优先级。


</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>


# **Moltis 项目动态日报 - 2026-07-20**  

---

## 1. 今日速览  
Moltis 项目今日活跃度较低，但关键功能开发正在持续推进。新增了一个实验性内存后端 PR，以及关于模型路由策略的功能请求引发讨论。当前暂无 Bug 报告或 PR 合并，项目整体稳定性良好。版本 20260719.01 已发布，可能包含最新演进，但具体变更需参考发布说明。  

---

## 2. 版本发布  
**20260719.01** 已于 2026-07-19 发布。当前仅提供版本编号，未附带变更说明。推荐维护者补充 changelog 以明确本版本修复或新增内容。若此版本为常规轮版本（基于日期命名），可能包含最新提交的代码变更。  
🔗 [Release 20260719.01](https://github.com/moltis-org/moltis/releases/tag/20260719.01)  

---

## 3. 项目进展  
- **PR #1158**：新增 Zvec 向量数据库作为内存后端（默认启用 `full` 功能）。此 PR 探索性地引入 `zvec` 和 `redb` 实现，支持嵌入模型与独立部署的 `llama-cpp` 服务集成。当前处于开放状态，尚未合并。  
🔗 [PR #1158](https://github.com/moltis-org/moltis/pull/1158)  

---

## 4. 社区热点  
- **Issue #574**（模型主题路由）当前为最活跃 Issue，包含 4 条评论和 1 个赞。其背景涉及用户希望根据不同主题动态分配模型，提升多模型架构下的灵活性。此请求反映出用户对更精细化模型调度机制的需求，可能与 RAG 或多代理场景有关。  
🔗 [Issue #574](https://github.com/moltis-org/moltis/issues/574)  

---

## 5. Bug 与稳定性  
暂无 Bug 或崩溃报告。Issue #574 为功能增强类请求，PR #1158 引入实验性组件，需注意其兼容性与性能表现。建议在合并前补充测试与文档支持。  

---

## 6. 功能请求与路线图信号  
- **模型主题路由（#574）**：用户提出按主题路由模型请求的功能，目前无对应 PR，但可能成为未来版本的重要能力之一。  
- **Zvec 内存后端（#1158）**：若合并，将为项目增加另一种持久化记忆选项，尤其适用于嵌入模型 + 本地存储的场景。  

---

## 7. 用户反馈摘要  
- 来自 Issue #574 的讨论显示，用户在尝试多模型部署时遇到了路由效率和上下文一致性问题，希望通过主题维度进行模型分配。  
- PR #1158 的作者表示其为个人实验性实现，暗示社区可能正在探索替代记忆方案。  

---

## 8. 待处理积压  
- **Issue #574**：已存续 3 个月，尽管活跃度较高，但尚未关闭或规划开发。建议维护者对其优先级进行评估。  

--- 

📌 **总结**：Moltis 项目今日活跃度温和，但功能探索和社区需求指示未来发展方向。建议关注模型路由与记忆后端的演进，以支持更复杂的 AI 应用场景。


</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>


# CoPaw 项目日报 - 2026-07-20

## 1. 今日速览

CoPaw 项目在过去24小时内保持着较高的活跃度，社区贡献者积极参与问题反馈和功能开发。特别值得注意的是性能优化和用户体验改进问题引起了较多关注。项目健康度良好，社区参与度高，但当前存在一定的 Bug 积压需要及时处理。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日暂无 PR 被合并，6 个 PR 处于审核中状态。值得关注的 PR 包括：

- **#6247 fix(memoryspace): catch OSError in `_saved_tool_refs` is_file() check** - 修复了 `recall_history` 因文件名过长导致的崩溃问题，相关 Bug #6246 已得到解决
- **#6256 feat(governance): make sandbox-unavailable fallback action configurable** - 解决了沙箱不可用时行为不可配置的问题，提升了系统的灵活性和可控性

## 4. 社区热点

**讨论最活跃的 Issue: #6193 [Performance] MCP drivers start sequentially instead of in parallel**
- 链接: https://github.com/agentscope-ai/QwenPaw/issues/6193
- 本 Issue 详细描述了 MCP 驱动串行初始化导致启动时间过长的问题，配置8个 MCP 客户端需40秒，改为并行后仅需5秒，性能提升8倍
- 背后反映了用户对应用启动速度和资源利用效率的诉求日益增强

## 5. Bug 与稳定性

### 高严重程度
- **#6246 [Bug]: `_saved_tool_refs` crashes `recall_history` with OSError: [Errno 36] File name too long** - 数据库历史记录中存在过长文本导致系统崩溃
  - ✅ 已有 fix PR #6247
- **#6240 [Bug]: 末尾出现注释显示** - 对话界面显示内部注释，影响用户体验
  - ✅ 已关闭

### 中等严重程度
- **#6257 [Bug]: Multiple tool calls produce identical thinking output** - 多工具调用时思考输出重复
- **#6258 [Bug]: openai 模型最大输出token不生效** - 模型配置参数未生效
- **#6255 [Bug]: chat error 聊天报错** - 聊天过程中发生错误
- **#6261 [Bug]: 离线环境使用code模式，无法预览文件内容** - 离线环境功能受限
- **#6252 [Bug]: Desktop (Tauri) mode — Ctrl +/- / Ctrl + wheel zoom does not work on Linux** - Linux 桌面端缩放功能失效

## 6. 功能请求与路线图信号

### 重点功能请求
- **#6163 [Feature]: Reusable Workflow Orchestration with Audit Trail** - 引入可重用的多步骤工作流编排能力，支持审计跟踪
- **#6260 [Feature]: 在结果呈现上需要提升** - 用户希望将思考过程和工具调用折叠，以突出最终结果展示
- **#6263 [Feature]: Support per-agent auto-memory profiles** - 支持为不同代理配置独立的自动记忆模板

### 可能被纳入下一版本的 PR
- **#6262 feat(agents): add one-click copy of agent configuration** - 一键复制代理配置功能，提升使用便利性
- **#6259 feat(security): support CIDR in no-auth host allowlist** - 增强安全配置灵活性，支持 CIDR 格式的信任网络范围

## 7. 用户反馈摘要

### 痛点反映
- 启动性能问题：用户明显感觉 MCP 驱动初始化速度缓慢，特别是在多客户端配置下影响明显
- 界面体验问题：过多的调试信息（思考过程、工具调用）占据屏幕空间，用户更关注最终结果
- 跨平台兼容性：Linux 环境下桌面端功能缺陷导致使用障碍

### 使用场景
- 企业级部署：对安全配置（CIDR 支持）和审计跟踪功能有明确需求
- 离线环境：开发者在无网络环境下希望获得完整的功能体验
- 多代理协作：用户希望能够定义和重用复杂的代理工作流

## 8. 待处理积压

- **#6193 Performance Issue** - 尽管已被标记为 Performance，仍缺少官方回应和解决方案规划，建议优先处理
- **#6163 Reusable Workflow Orchestration** - 重要的架构级功能请求，长期缺少进展反馈
- **#6258 OpenAI Token Limit Issue** - 核心模型配置问题，可能影响大量用户正常使用

---

*备注: 本日报基于 GitHub 公开数据生成，旨在客观反映项目当前状态。维护团队应重点关注性能优化和核心稳定性问题。*


</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>


# ZeroClaw 项目动态日报 - 2026-07-20

## 1. 今日速览

ZeroClaw 项目今日活跃度较高，24小时内有50个 Issues 和 50个 PR 活动。项目处于密集开发阶段，无新版本发布但多个重要功能正在推进中。核心团队专注于架构优化、跨平台支持和内存系统完善，同时社区参与度良好，多项 RFC 和 Feature Request 获得广泛讨论。项目健康度整体稳定，但存在一些高优先级 Bug 需要及时处理。

## 2. 版本发布

暂无新版本发布。

## 3. 项目进展

### 今日关闭的重要 Issue/PR：

**Issue #2079** - [Feature]: Restore GitHub as a native channel
- 状态: CLOSED
- 分析: GitHub 频道恢复为原生支持，解决了当前自定义集成复杂性问题。这一功能完成标志着 ZeroClaw 在官方频道集成方面取得重要进展。
- 链接: [Issue #2079](https://github.com/zeroclaw-labs/zeroclaw/issues/2079)

**Issue #6378** - [Feature]: Discord Bot respond only in specific Discord channels  
- 状态: CLOSED
- 分析: Discord 频道增加 `allowed_channels` 配置选项，与 Matrix 和 Nextcloud Talk 的 `allowed_rooms` 模式保持一致，提升了配置一致性。
- 链接: [Issue #6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378)

**Issue #5573** - [Feature]: The "Send Emails via SMTP" function needs to be added
- 状态: CLOSED
- 分析: SMTP 邮件发送功能已实现，丰富了任务结果通知方式，特别适合定期检查和项目报告场景。
- 链接: [Issue #5573](https://github.com/zeroclaw-labs/zeroclaw/issues/5573)

**Issue #6510** - [Feature]: cron `delivery.mode = "announce"` enhancement
- 状态: CLOSED
- 分析: 增加选项仅发送最终助手消息，避免中间推理过程干扰，提升定时任务用户体验。
- 链接: [Issue #6510](https://github.com/zeroclaw-labs/zeroclaw/issues/6510)

**Issue #7248** - [Feature]: Persist cached input tokens for cost accounting
- 状态: CLOSED
- 分析: 提供商缓存提示令牌持久化和成本计算，满足了成本追踪需求，增强了计费透明度。
- 链接: [Issue #7248](https://github.com/zeroclaw-labs/zeroclaw/issues/7248)

## 4. 社区热点

**Issue #6808** - RFC: Work Lanes, Board Automation, and Label Cleanup
- 14 条评论，最高参与度
- 链接: [Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)
- 分析: 提议工作流自动化和标签清理机制，旨在简化维护者工作流程。社区对流程优化表现出强烈兴趣。

**Issue #8891** - [Tracker]: Persistent memory - wire the curation, relevance, and operability planes to parity
- 7 条评论
- 链接: [Issue #8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891)
- 分析: 持久化内存系统多PR协调中，反映了团队对长期记忆能力的重视。

**Issue #9127** - RFC: Abstract a `KeySource` trait
- 7 条评论
- 链接: [Issue #9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127)
- 分析: 安全凭证源抽象设计引发讨论，说明社区对安全架构的关注。

## 5. Bug 与稳定性

### 高严重程度 Bug：

**Issue #8505** - Telegram channel cannot be configured (S1)
- 6 条评论
- 链接: [Issue #8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505)
- 状态: OPEN，暂无 fix PR

**Issue #8559** - Agents stop working when exiting web dashboard (S1)
- 3 条评论
- 链接: [Issue #8559](https://github.com/zeroclaw-labs/zeroclaw/issues/8559)
- 状态: OPEN，暂无 fix PR

**Issue #7947** - execute_pipeline bypasses tool gating (S0 - 安全风险)
- 2 条评论
- 链接: [Issue #7947](https://github.com/zeroclaw-labs/zeroclaw/issues/7947)
- 状态: OPEN，暂无 fix PR

**Issue #9117** - ZeroCode won't start on Windows without ZEROCLAW_SOCKET
- 5 条评论
- 链接: [Issue #9117](https://github.com/zeroclaw-labs/zeroclaw/issues/9117)
- 状态: OPEN，暂无 fix PR

### 中等严重程度：

**Issue #7808** - CLI secret prompts give no feedback after paste (S2)
- 2 条评论
- 链接: [Issue #7808](https://github.com/zeroclaw-labs/zeroclaw/issues/7808)
- 状态: OPEN，暂无 fix PR

## 6. 功能请求与路线图信号

### 高可能性纳入下一版本：

**Issue #6641** - Turn-level OTel trace correlation
- 8 条评论，PR 已在进行中
- 链接: [Issue #6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641)
- 分析: OpenTelemetry 追踪关联功能，多个相关 PR 表示即将合并

**Issue #6055** - Slack: hydrate thread context from conversations.replies
- 7 条评论
- 链接: [Issue #6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055)
- 分析: Slack 线程上下文回填功能，处于开发中状态

**Issue #8850** - Move optional channels/tools to WASM plugins
- 4 条评论，有关联 PR
- 链接: [Issue #8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850)
- 分析: 编译时特征迁移到运行时插件，是重大架构调整方向

**Issue #7759** - Decouple gateway WebSocket lifetime from agent turns
- 4 条评论
- 链接: [Issue #7759](https://github.com/zeroclaw-labs/zeroclaw/issues/7759)
- 分析: WebSocket 生命周期与 agent 轮次解耦，提升网关稳定性

## 7. 用户反馈摘要

从 Issue 评论中提炼出的用户痛点：

1. **Windows 兼容性问题**：用户报告 ZeroCode 在 Windows 环境下启动困难，需要手动设置环境变量
2. ** Telegram 配置困难**：快速入门流程设置后仍提示频道未配置，阻塞用户体验
3. **Web 仪表盘任务中断**：用户离开聊天窗口导致正在进行的代理任务停止，影响生产力使用
4. **Slack 交互体验**：用户希望在长时间运行任务期间看到代理工作状态进展
5. **安全隐私关注**：用户对凭证管理和工具授权机制提出专业级安全要求

## 8. 待处理积压

### 长期未响应重要 Issue：

**Issue #5316** - Propose SearXNG search support and improve Web Search robustness
- 创建于2026-04-05，60多天未更新
- 链接: [Issue #5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316)
- 分析: 隐私搜索引擎支持请求和网络搜索健壮性改进，社区热度较高但缺乏进展

**Issue #7461** - Run test suite on Windows and macOS in CI
- 创建于2026-06-10，40多天无显著进展
- 链接: [Issue #7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461)
- 分析: 跨平台 CI 测试支持，虽已接受但实现滞后

---

*本报告基于 GitHub 数据自动生成，2026-07-20*


</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*