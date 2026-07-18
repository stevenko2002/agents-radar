# OpenClaw 生态日报 2026-07-19

> Issues: 413 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-18 22:16 UTC

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

OpenClaw 项目今日活跃度异常高，24小时内产生413条Issue（260新活动中，153已关闭）和500条PR（287待合并，213已合并/关闭）。项目健康度显示出色的社区参与度和开发活跃性。今日重点聚集在Codex应用服务器的稳定性问题、跨平台支持缺陷以及安全增强功能上。多个P1级别的回归bug被及时修复，但同时也暴露出长期存在的平台兼容性和性能优化挑战。

## 2. 版本发布

暂无新版本发布。

## 3. 项目进展

今日合并的重要PR包括：

- **#110990** - 修复插件模型目录发现在无响应插件时可能引起的 stall 问题，提升网关稳定性 [🔗](https://github.com/openclaw/openclaw/pull/110990)
- **#110661** - 将Wear OS代理、会话和模型选择器迁移至主页，优化可穿戴设备用户体验 [🔗](https://github.com/openclaw/openclaw/pull/110661)
- **#108974** - 防止Gmail watch在停滞期间发生重复续订，修复邮件监听可靠性问题 [🔗](https://github.com/openclaw/openclaw/pull/108974)
- **#104054** - 修复HTML工具调用预览中表情符号损坏的问题，提升导出功能质量 [🔗](https://github.com/openclaw/openclaw/pull/104054)

这些合并推进了平台支持扩展、稳定性增强和用户体验优化。

## 4. 社区热点

### 最具讨论性Issue: **#75 Linux/Windows Clawdbot Apps** [🔗](https://github.com/openclaw/openclaw/issues/75)
- **评论数**: 113条，**点赞**: 81个
- **标签**: enhancement, help wanted, P2, impact:ux-friction
- **分析**: 社区强烈呼吁Linux和Windows平台的Clawdbot应用支持，当前仅支持macOS/iOS/Android。用户反映跨平台不一致严重影响工作流完整性，这是平台战略性缺口。

### 热门PR讨论: **#110989 feat(ui): approval UX overhaul** [🔗](https://github.com/openclaw/openclaw/pull/110989)
- **作者**: steipete
- **分析**: 涉及待处理执行/插件批准的用户界面重大改进，解决批准请求易遗漏和响应缓慢的问题。社区对此改善批权限流程的重要性反应热烈。

## 5. Bug 与稳定性

按严重程度排列的关键问题：

### P1级崩溃/回归问题：
- **#108435** - 2026.7.1更新后网关启动失败，systemd/Ollama环境下普遍报告 [🔗](https://github.com/openclaw/openclaw/issues/108435)
- **#83184** - Heartbeat驱动的代理回复导致pendingFinalDelivery卡住，阻碍后续心跳 [🔗](https://github.com/openclaw/openclaw/issues/83184) - **已有关联PR**
- **#89039** - EmbeddedAttemptSessionTakeoverError导致静默消息丢失 [🔗](https://github.com/openclaw/openclaw/pull/89039) - **fix PR已提交**

### P1级回归问题：
- **#88312** - Codex应用服务器在2026.5.27版本引入turn-completion stall回归 [🔗](https://github.com/openclaw/openclaw/issues/88312) - **已闭合**
- **#87299** - 大型Telegram会话出现"Something went wrong"和Codex应用服务器故障 [🔗](https://github.com/openclaw/openclaw/issues/87299)
- **#86827** - group chat会话卡在'failed'状态后无提示地丢弃后续消息 [🔗](https://github.com/openclaw/openclaw/issues/86827) - **已闭合**

### P1级功能性Bug：
- **#99910** - 内存梦运行导致网关事件循环卡顿10分钟，无法持久化短期记忆 [🔗](https://github.com/openclaw/openclaw/issues/99910)
- **#99071** - 重复Codex Apps插件发现导致单请求内大量磁盘I/O操作 [🔗](https://github.com/openclaw/openclaw/issues/99071)

## 6. 功能请求与路线图信号

### 高优先级功能请求：
- **#7707 Feature Request: Memory Trust Tagging by Source** [🔗](https://github.com/openclaw/openclaw/issues/7707) - 基于来源对代理记忆进行信任级别标记，防止记忆投毒攻击（17评论，0点赞，P2）
- **#10659 Feature Request: Masked Secrets** [🔗](https://github.com/openclaw/openclaw/issues/10659) - 允许代理使用API密钥而无法查看原始值，防提示注入泄露（13评论，4点赞，P1）
- **#11665 [Feature]: Webhook hook sessions should reuse existing session** [🔗](https://github.com/openclaw/openclaw/issues/11665) - Webhook钩子会话应支持多轮对话（10评论，P2）

### 可能纳入下一版本的功能：
- **#12219 [Feature]: Skill Permission Manifest Standard** [🔗](https://github.com/openclaw/openclaw/issues/12219) - 技能权限声明标准(skill.yaml)，目前正在讨论中
- **#108238 Bug] 2026.7.1中会话上下文用量误报压缩失败** [🔗](https://github.com/openclaw/openclaw/issues/108238) - 上下文计算错误修复工作已启动

## 7. 用户反馈摘要

从Issue评论中提炼的真实用户痛点：

1. **平台不一致体验**："#75 Linux/Windows缺失"反映开发者和企业用户无法在所有平台上部署一致的工作流
2. **Telegram集成问题**：多个Issue(#87299, #96242, #49104)集中反映消息重复、上下文丢失和HTML解析问题
3. **记忆管理局限**："#7707记忆信任标记"和"#10659掩码秘密"显示用户对AI代理记忆安全性越来越重视
4. **网关资源消耗**："#99910内存梦卡顿"和"#91009CPU绑定进程"表明长时间运行场景下的性能问题
5. **UI交互不完善**："#110989批准UX"和"#10118TUI多行输入"反映对人机交互细节的期待

## 8. 待处理积压

### 长期未响应的关键Issue：

- **#75 Linux/Windows Clawdbot Apps** [🔗](https://github.com/openclaw/openclaw/issues/75) - 已6个月(2026-01-01创建)，113条评论仍然OPEN，社区需求最高但缺乏技术方案深入讨论
- **#7722 Feature Request: Filesystem Sandboxing Config** [🔗](https://github.com/openclaw/openclaw/issues/7722) - 4月前创建的安全增强请求，尚无具体实施计划
- **#72611 Dreaming needs configurable session/cron exclusions** [🔗](https://github.com/openclaw/openclaw/issues/72611) - 记忆梦系统配置灵活性缺口，已有用户实验环境验证但维护者响应不足
- **#89147 Native hook relay starves mid-turn** [🔗](https://github.com/openclaw/openclaw/issues/89147) - Codex集成稳定性长期问题，需专门资源调查和修复

---

*本报告基于2026-07-18 UTC时间统计数据生成，数据来源：https://github.com/openclaw/openclaw*


---

## 横向生态对比


# 今日重點摘要

## 1. 重要更新

**LobsterAI (2026.7.17版本)** - 发布新版本，优化cowork功能展示结构化错误详情，增强服务部署数据持久化支持，解决用户调试效率问题。

**IronClaw (架构优化)** - 进行大规模架构简化工作，移除重复代码定义，引入闭合RuntimeLane枚举，推进核心稳定性和可维护性。

**PicoClaw (OAuth與WhatsApp)** - 修复OAuth令牌刷新跨提供商兼容性问题，实现WhatsApp通道打字状态指示，提升用户体验和系统稳定性。

**NanoBot (容器安全與記憶體)** - 硬化Docker默認安全配置移除SYS_ADMIN權限，實施LRU快取限制解決長期記憶體洩漏問題。

**OpenClaw (跨平台穿戴設備)** - 將Wear OS代理和模型選擇器遷移至主頁，解決可穿戴設備使用體驗不一致問題。

**Hermes Agent (任務恢復機制)** - 添加終端任務恢復操作，允許在預算耗盡阻塞狀態下進行顯式恢復，增強系統韌性。

**ZeroClaw (供應鏈安全)** - 提出供應鏈簽名RFC規劃，包括硬體PGP簽名和SLSA證明追溯，反映社區對軟體供應鏈安全日益關注。

## 2. 活躍度概览

今日OpenClaw最為活躍，24小時內產生413個Issue和500個PR；IronClaw和ZeroClaw亦保持極高活躍度；整體開源AI代理生態系繼續保持高發展能量，特別是在平台支援擴充、安全性增強與跨平台相容性改善方面。


---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>


# NanoBot 项目日报 - 2026-07-19

## 1. 今日速览

NanoBot 项目今日保持高频活跃度，24小时内共处理24个PR（16已合并/关闭，8待合并）和7个Issue（4已关闭，3处于活跃状态）。项目稳定性工作突出，多个关键Bug修复已合并入主线，包括Docker安全加固、会话缓存内存泄漏、以及上下文管理相关问题。新功能开发也在继续，特别是在WebUI体验优化和触发器系统方面。

## 2. 版本发布

暂无新版本发布。

## 3. 项目进展

### 已合并/关闭的重要 PR：

- **[PR #4955]** Security: Hardened default Docker Compose security configuration - 移除了默认的 `SYS_ADMIN` 权限和 AppArmor/seccomp 禁用配置，显著提升容器安全性
- **[PR #4957]** Fix: Bound the in-memory session cache - 实施128条目LRU缓存策略，解决长期运行时的内存泄漏问题
- **[PR #4960]** Fix: Preserve real cancellation in MCP paths - 引入任务取消判断辅助函数，区分真实取消与MCP集成泄漏的取消信号
- **[PR #4974]** Fix: Dual-case keys when loading jobs.json - 修复cron作业加载时大小写不匹配导致的调度失败问题
- **[PR #4925]** Fix: Guide recovery from oversized tool results - 改进工具结果大小处理，防止上下文超限错误

这些合并的PR推进了项目稳定性和安全性，特别是在资源管理、取消机制和基础设施方面取得实质性进展。

## 4. 社区热点

### 最具讨论价值的议题：

1. **[Issue #2343]** [CLOSED] Context window token management bug
   - 链接: https://github.com/HKUDS/nanobot/issues/2343
   - 状态: 已关闭但反映了用户在配置管理上的痛点
   - 用户 jermeyhu 报告模型上下文长度超限问题，引发了对配置一致性检查的讨论

2. **[Issue #4867]** [CLOSED] Ollama performance degradation
   - 链接: https://github.com/HKUDS/nanobot/issues/4867
   - 状态: 已关闭，揭示了本地模型部署的性能障碍
   - 用户反映Ollama调用额外耗时60秒，影响VRAM资源有限的场景

3. **[Issue #4940]** [OPEN] WebUI workspace_scope persistence issue
   - 链接: https://github.com/HKUDS/nanobot/issues/4940
   - 状态: 开放，引发了存储格式兼容性讨论
   - 新开session后重启丢失workspace范围设置

## 5. Bug 与稳定性

### 按严重程度分类的Bug报告：

**🔴 高优先级 (P1)**

- **[Issue #4980]** GitStore initialization failure with workspace path mismatch
  - 链接: https://github.com/HKUDS/nanobot/issues/4980
  - 状态: 开放 → **[PR #4979] Fix已提交**解决相对路径解析问题
  - 影响: Git存储在工作区与进程目录不同时初始化失败

- **[Issue #4975]** CLI Apps UTF-8 output corruption on Windows
  - 链接: https://github.com/HKUDS/nanobot/issues/4975
  - 状态: 开放 → **[PR #4976] Fix已提交**实施UTF-8显式解码
  - 影响: Windows非UTF-8环境下CLI应用输出乱码

**🟡 中等优先级**

- **[Issue #2343]** Context window oversize error
  - 链接: https://github.com/HKUDS/nanobot/issues/2343
  - 状态: 已关闭（配置调整解决）

- **[Issue #4886]** Docker security hardening issue
  - 链接: https://github.com/HKUDS/nanobot/issues/4886
  - 状态: 已关闭 → **[PR #4955] 已修复**

**🟢 低优先级**

- **[Issue #4786]** Session cache memory leak
  - 链接: https://github.com/HKUDS/nanobot/issues/4786
  - 状态: 已关闭 → **[PR #4957] 已修复**

## 6. 功能请求与路线图信号

### 新功能请求：

- **[Issue #4940]** Legacy filename format compatibility - 请求保持旧版session文件格式兼容性
- **[Issue #4867]** Prompt caching optimization - 为Ollama等本地模型优化缓存机制

### 路线图信号PR：

- **[PR #4942]** Session-local trigger management - 新增会话级触发器工具，展现自动化能力扩展方向
- **[PR #4854]** RTK command rewriter integration - 添加RealTime Kernel命令重写器，表明系统深度集成功能规划
- **[PR #4963]** WebUI output and discovery enhancement - 改进Web界面输出显示和应用发现体验

这些PR表明项目正在向两个方向发展：提高部署灵活性（本地模型优化）和增强自动化能力（触发器系统）。

## 7. 用户反馈摘要

### 关键用户痛点：

1. **配置管理复杂性**：Issue #2343中用户表达了在token限制配置上的困惑，希望简化参数一致性检查
2. **本地部署性能**：Issue #4867反映了资源受限环境（32GB VRAM）下性能体验问题
3. **跨平台兼容性**：Issue #4975暴露了Windows平台在字符编码处理上的挑战
4. **数据持久化期望**：Issue #4940体现了用户对session元数据持久化的依赖

### 满意方面：

- 社区积极响应Bug报告，多个P1问题在24小时内获得修复PR
- 项目持续关注安全性（Docker配置）和资源管理（缓存优化）

## 8. 待处理积压

### 需要维护者关注的长期议题：

1. **[Issue #4940]** Session metadata legacy format compatibility
   - 链接: https://github.com/HKUDS/nanobot/issues/4940
   - 原因: **PR #4977 Fix已提交等待合并**，解决存储格式向后兼容问题

2. **[Issue #4867]** Ollama performance optimization
   - 链接: https://github.com/HKUDS/nanobot/issues/4867
   - 原因: 已关闭但未提供永久性解决方案，可能需要后续优化

这些议题涉及用户数据兼容性和部署场景优化，建议优先处理以提升用户体验连续性。

---

*数据统计时间范围：2026-07-18 至 2026-07-19 (UTC)*


</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>


# Hermes Agent 项目动态日报 - 2026-07-19  

---

## 1. 今日速览  
Hermes Agent 今日活跃度持续高涨，共有 50 条 Issues 和 50 条 PR 更新。尽管未发布新版本，但项目维护者正在积极处理 Bug 和代码质量问题。其中 30 个 Issues 已关闭，反映出社区与开发团队对问题响应的效率；45 个 PR 待合并，表明当前开发工作处于高速迭代阶段。尤其关注 Windows、macOS 和 Provider 集成方面的稳定性挑战，同时功能请求（如技能发现、模型路由）正在推动项目架构演进。

---

## 2. 版本发布  
无新版本发布。  

---

## 3. 项目进展  

### 已合并 / 关闭的重要 PR：
- **[PR #66349]** - feat(kanban): 添加终端任务恢复操作  
  - 解决因预算耗尽导致的阻塞状态下的看板任务，可通过显式恢复机制继续处理。  
  - 链接: [https://github.com/NousResearch/hermes-agent/pull/66349](https://github.com/NousResearch/hermes-agent/pull/66349)

- **[PR #67168]** - test: 为 cron 后台 ticker 添加单元测试  
  - 增加了 4 个单元测试，增强对 `InProcessCronScheduler` 后台触发器的健壮性保障。  
  - 链接: [https://github.com/NousResearch/hermes-agent/pull/67168](https://github.com/NousResearch/hermes-agent/pull/67168)

- **[PR #66353]** - feat(telegram): 添加紧凑话题标题和语义图标  
  - 改进 Telegram 网关中会话标题展示灵活性，支持自定义图标映射。  
  - 链接: [https://github.com/NousResearch/hermes-agent/pull/66353](https://github.com/NousResearch/hermes-agent/pull/66353)

- **[PR #66358]** - fix(agent): 对流式 4xx 错误进行快速失败处理  
  - 修复代理在接收到嵌入式 SSE 错误帧时无法识别 HTTP 状态码的问题。  
  - 链接: [https://github.com/NousResearch/hermes-agent/pull/66358](https://github.com/NousResearch/hermes-agent/pull/66358)

- **[PR #66366]** - fix: 允许 tool.completed 事件通过网关回调  
  - 解决 Codex 平台下工具事件未传递至前端的问题，增强事件追踪能力。  
  - 链接: [https://github.com/NousResearch/hermes-agent/pull/66366](https://github.com/NousResearch/hermes-agent/pull/66366)

---

## 4. 社区热点  

### 讨论最活跃的 Issues：
- **[Issue #66327]** - [CLOSED] Duplicate slash commands & cluttered command wiki  
  - 描述了 CLI 帮助文档中存在重复或错误的斜杠命令（如 `/compact` vs `/compress`），用户反映影响使用体验。  
  - 链接: [https://github.com/NousResearch/hermes-agent/issues/66327](https://github.com/NousResearch/hermes-agent/issues/66327)

- **[Issue #66994]** - [OPEN] [Setup]: Installation didn't finish error  
  - 用户报告使用官方安装程序 `Hermes-Setup.exe` 时出现 PowerShell 脚本错误，阻碍安装流程。Windows 平台安装问题重现率较高。  
  - 链接: [https://github.com/NousResearch/hermes-agent/issues/66994](https://github.com/NousResearch/hermes-agent/issues/66994)

- **[Issue #59890]** - [OPEN] Kanban task event notifications never delivered  
  - 所有 18 个订阅均未收到事件通知，表明后端事件分发机制可能存在故障。  
  - 链接: [https://github.com/NousResearch/hermes-agent/issues/59890](https://github.com/NousResearch/hermes-agent/issues/59890)

---

## 5. Bug 与稳定性  

### P0 (关键)：
- **[Issue #66994]** - Windows 安装程序崩溃，阻止初始化  
  - 状态: 打开  
  - 关联 PR: 暂无  

### P1 (高)：
- **[Issue #67142]** - Anthropic 流式请求可能通过 TLS 文件描述符重用导致 SQLite 损坏  
  - 状态: 打开  
  - 关联 PR: 暂无  

### P2 (中)：
- **[Issue #57623]** - `computer_use` 在 Windows 特定 UI 框架下静默失败  
  - 状态: 打开  
  - 关联 PR: 暂无  

- **[Issue #67165/#67162]** - macOS ScreenCaptureKit 返回空屏幕数据  
  - 状态: #67162 已关闭，#67165 打开  
  - 关联 PR: 暂无  

- **[Issue #65743]** - Desktop 模型选择器不保存选择  
  - 状态: 关闭  
  - 关联 PR: 暂无  

- **[Issue #65814]** - 自定义 (Ollama) 与 OpenRouter 模型切换不持久  
  - 状态: 关闭  
  - 关联 PR: 暂无  

### P3 (低)：
- **[Issue #67151]** - Unicode 字符在 Windows 字体中显示异常  
  - 状态: 打开  
  - 关联 PR: 暂无  

- **[Issue #66324]** - 桌面端音频组件加载失败  
  - 状态: 关闭  
  - 关联 PR: 暂无  

---

## 6. 功能请求与路线图信号  

### 用户提出的重要功能请求：
- **[Issue #66020]** - Context-Aware Orchestrator Model Routing  
  - 用户希望根据任务类型自动选择不同模型，而无需手动切换。  
  - 链接: [https://github.com/NousResearch/hermes-agent/issues/66020](https://github.com/NousResearch/hermes-agent/issues/66020)

- **[Issue #67143]** - 发现项目级技能 `.hermes/skills/`  
  - 当前仅支持全局技能发现，用户希望支持局部技能加载。  
  - 链接: [https://github.com/NousResearch/hermes-agent/issues/67143](https://github.com/NousResearch/hermes-agent/issues/67143)

- **[Issue #67139]** - curator 支持旧式技能迁移  
  - 用户希望系统支持将旧版技能纳入 curator 管理，提升配置一致性。  
  - 链接: [https://github.com/NousResearch/hermes-agent/issues/67139](https://github.com/NousResearch/hermes-agent/issues/67139)

### 对应 PR 信号：
- **[PR #67164]** - feat(providers): OpenClaw-parity OpenAI 兼容模型提供商  
  - 预计将扩展更多 LLM 提供商支持，填补市场空白。  
  - 链接: [https://github.com/NousResearch/hermes-agent/pull/67164](https://github.com/NousResearch/hermes-agent/pull/67164)

---

## 7. 用户反馈摘要  

- **Windows 用户体验问题频发**：安装崩溃、字体渲染、模型选择器失效等问题反复出现，表明平台适配工作需加强。
- **技能管理复杂性**：用户希望技能能更灵活地组织和发现，尤其是在项目级别的隔离需求明显。
- **模型路由与任务调度需求强烈**：多模型策略与自动化调度的需求逐渐成为核心痛点。
- **Cron 任务与看板通知可靠性**：用户依赖定时任务和异步通知，但当前数据显示通知投递失败率高。

---

## 8. 待处理积压  

- **[Issue #57623]** - Windows `computer_use` 调度失败（开放 13 天，评论 2）  
  - 链接: [https://github.com/NousResearch/hermes-agent/issues/57623](https://github.com/NousResearch/hermes-agent/issues/57623)

- **[Issue #59890]** - Kanban 事件通知投递失败（开放 13 天，评论 3）  
  - 链接: [https://github.com/NousResearch/hermes-agent/issues/59890](https://github.com/NousResearch/hermes-agent/issues/59890)

- **[Issue #58274]** - 全面 Profile 平价支持（开放 15 天，评论 1）  
  - 链接: [https://github.com/NousResearch/hermes-agent/issues/58274](https://github.com/NousResearch/hermes-agent/issues/58274)

--- 

*报告生成时间: 2026-07-19*


</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>


# PicoClaw 项目动态日报 - 2026年7月19日

## 1. 今日速览

PicoClaw 项目今日保持较高活跃度，24小时内处理了12个PR（4个待合并，8个已合并/关闭），并关闭了2个已存在的Issue。核心开发者As-tsaqib连续提交了3个与OAuth认证和WhatsApp通道相关的重要修复。项目正在稳步推进平台兼容性和用户体验改进，虽无新版本发布，但合并的PR显示出对多平台支持（ARM架构、9router网关）和通信能力（WhatsApp打字状态）的重视。

## 2. 版本发布

**暂无新版本发布**

## 3. 项目进展

### 已合并PR重要更新

**[#3241](https://github.com/sipeed/picoclaw/pull/3241) - OAuth刷新机制提供者兼容性与并发安全修复**
由As-tsaqib完成，该PR解决了OAuth令牌刷新过程中的关键问题：OpenAI现在使用JSON格式请求，Google和其他提供者继续使用表单编码，移除了刷新过程中的授权范围声明，增加了30秒超时机制。此修复提高了系统稳定性和安全性。

**[#3242](https://github.com/sipeed/picoclaw/pull/3242) - WhatsApp原生打字状态支持**
实现了WhatsApp通道的打字指示功能，用户在等待机器人响应时能看到"正在输入"状态，显著提升了用户体验。系统会在开始处理时发送composing状态，并每10秒刷新一次，处理完成后发送paused状态。

**[#3165](https://github.com/sipeed/picoclaw/pull/3165) - OpenAI兼容模式恢复Seed XML工具调用**
修复了Volcengine Doubao Seed `<seed:tool_call>` XML块在OpenAI兼容响应中的解析问题，确保工具调用功能在不同AI提供商间正常工作。

**[#3208](https://github.com/sipeed/picoclaw/pull/3208) - 依赖更新：mautrix升级v0.27.0→v0.28.1**
自动化依赖更新，保持通信库最新状态，修复潜在的Matrix协议兼容性问题。

### 其他重要合并
- [#3211](https://github.com/sipeed/picoclaw/pull/3211) eslint开发依赖升级至v10.6.0
- [#3200](https://github.com/sipeed/picoclaw/pull/3200) 模型默认回退链配置功能
- [#2937](https://github.com/sipeed/picoclaw/pull/2937) 首个Agent协作总线实现

## 4. 社区热点

**[#3264](https://github.com/sipeed/picoclaw/issues/3264) - SplitMessage在过大围栏代码信息字符串时挂起**
这是今日唯一开放的Bug报告，描述了一个严重的无限循环问题：当围栏代码块起始位置靠近块开头且其信息字符串超出分割点时，SplitMessage组件会陷入死循环。该问题可能导致消息处理阻塞，尤其在处理长格式代码消息时，目前暂无fix PR，值得优先关注。

## 5. Bug 与稳定性

### 严重Bug
- **[#3264](https://github.com/sipeed/picoclaw/issues/3264)** - SplitMessage组件死循环风险
  - **严重程度**：高（可能导致服务不可用）
  - **状态**：开放中，暂无fix PR
  - **影响**：消息分割功能失效，特别是在处理包含长代码块的消息时

### 已修复问题
- OAuth刷新请求竞态条件（#3239, #3241）
- WhatsApp缺失用户反馈状态（#3240, #3242）

## 6. 功能请求与路线图信号

### 明确功能请求
- **[#3264](https://github.com/sipeed/picoclaw/issues/3264)** 隐含功能请求：需要更健壮的消息分割算法

### 路线图信号PR
- **[#3205](https://github.com/sipeed/picoclaw/pull/3205)** - 9router网关支持和Linux ARMv7构建目标
  表示项目向边缘计算设备（如Raspberry Pi）扩展
- **[#3193](https://github.com/sipeed/picoclaw/pull/3193)** - Simplex通道类型新增
  扩展通信协议支持，增强平台多样性
- **[#3225](https://github.com/sipeed/picoclaw/pull/3225)** - Agent特定运行时覆盖支持
  提升配置灵活性，支持差异化Agent行为

## 7. 用户反馈摘要

从今日Issues中提炼的关键反馈：

1. **OAuth集成痛点**：用户在使用OpenAI OAuth认证时遇到了请求格式不兼容问题，反映出在支持多种AI服务提供商时对API差异处理的挑战
2. **用户体验缺失**：WhatsApp用户反映在长时间处理过程中缺少反馈状态指示，导致用户不确定系统是否正在工作
3. **平台兼容性需求**：Raspberry Pi用户希望能在ARM架构上运行PicoClaw，显示出物联网场景的应用需求

## 8. 待处理积压

### 长期未响应Issue/PR
- **[#3202](https://github.com/sipeed/picoclaw/pull/3202)** - ID标准化下划线处理（创建于7月1日，标记为stale）
- **[#3248](https://github.com/sipeed/picoclaw/pull/3248)** - Go版本升级修复标准库漏洞（创建于7月10日，标记为stale）
- **[#3205](https://github.com/sipeed/picoclaw/pull/3205)** - 9router网关和ARMv7支持（创建于7月2日，标记为stale）

### 维护者注意事项
- **#3264 Bug** 应作为最高优先级处理，考虑分配专人立即修复
- 多个stale标记的PR需要评估是否仍具价值，避免遗忘有价值的社区贡献
- 考虑建立更频繁的代码审查周期，以防止PR长时间堆积

---
*数据来源: GitHub Issues/PRs (24小时窗口)*
*分析时间: 2026-07-19*


</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>


# **NanoClaw 项目动态日报 (2026-07-19)**  

---

## **1. 今日速览**  
今日项目活跃度较高，共合并关闭 6 个 PR，主要集中在 WhatsApp、Signal 和 Agent Runner 的稳定性修复及 iMessage 的统一适配。19 个 PR 中 13 个仍处于待合并状态，显示维护活动热烈。同时，1 个新 Bug 报告揭示了 WhatsApp 提及模式下的用户体验缺陷。项目整体健康度良好，社区参与度旺盛，尤其是在通讯通道适配和核心引擎优化方面。

---

## **2. 版本发布**  
**无**  

---

## **3. 项目进展**  

### ✅ 合并/关闭的重要 PR：

- **#3083** [`fix(agent-runner)`]：修复了 `compact_boundary` 被错误地转换为 `result` 事件的问题，导致 Agent 回复重复发送。此问题在上下文压缩边界附近产生错位行为，此修复显著提升 Agent 通信的准确性。[PR 链接](https://github.com/nanocoai/nanoclaw/pull/3083)

- **#3084** [`test(runner)`]：移除了 `/clear-abort` 集成测试中的临时诊断代码，恢复 CI 时间预算规范，保持测试环境的真实性。[PR 链接](https://github.com/nanocoai/nanoclaw/pull/3084)

- **#3062** [`fix(signal)`]：增加 `--send-read-receipts` 参数支持，使 Signal 消息接收方能够看到消息已读状态，提升用户体验一致性。[PR 链接](https://github.com/nanocoai/nanoclaw/pull/3062)

- **#2952 / #2951** [`Skill/fix(opencode)`]：关闭了 OpenCode 栈技能的实现及其环境变量配置优化，为开发者提供更灵活的定制能力。[PR 链接 #2952](https://github.com/nanocoai/nanoclaw/pull/2952) | [PR 链接 #2951](https://github.com/nanocoai/nanoclaw/pull/2951)

---

## **4. 社区热点**  

- 🔥 **#3085 [OPEN]** [`[bug]`]：**WhatsApp engage_mode=mention 仅在自动填充提及中触发，不支持手动输入 @name**  
  用户 `glifocat` 报告，在 WhatsApp 群组中，如果用户手动输入 `@<agent name>` 而不点击自动补全，则代理不会响应。这个问题在 `ignored_message_policy='accumulate'` 下被掩盖，导致消息被存储但未触发互动。  
  → 已由 PR #3087 提出修复方案，预计将很快解决。  
  [Issue 链接](https://github.com/nanocoai/nanoclaw/issues/3085)

- ⚠️ **#3065 [OPEN]** [`[security]`]：**本地 Webhook 缺乏认证，易受同一主机内进程伪造攻击**  
  漏洞编号：GHSA-h9g4-589h-68xv，涉及来自 `chat-sdk-bridge` 的未授权访问风险。虽无评论，但属于高优先级安全修复。  
  [PR 链接](https://github.com/nanocoai/nanoclaw/pull/3065)

---

## **5. Bug 与稳定性**  

| 严重性 | 描述 | 状态 | 链接 |
|--------|------|------|------|
| ❗ 高 | WhatsApp 提及模式不响应手动输入的 @ 提及 | 开放 | [Issue #3085](https://github.com/nanocoai/nanoclaw/issues/3085) |
| ❗ 高 | 同一 Agent 组下多个会话导致消息路由分叉 | 开放 | [PR #3078](https://github.com/nanocoai/nanoclaw/pull/3078) |
| ⚠️ 中 | Discord 附件仅暴露 URL，内容无法读取 | 开放 | [PR #2752](https://github.com/nanocoai/nanoclaw/pull/2752) |
| ⚠️ 低 | Telegram 回调查询与反应更新支持缺失 | 开放 | [PR #2544](https://github.com/nanocoai/nanoclaw/pull/2544) |

> 💡 注：如上 Bug 均有贡献者提交修复 PR，显示社区快速响应能力强。

---

## **6. 功能请求与路线图信号**  

- **#2999 / #3076**：计划将 iMessage 通道统一为单一技能，支持本地与托管双后端（ChatSDK Bridge + spectrum-ts v11）。这可能是下一个主要版本的核心增强内容。  
  [PR 链接 #2999](https://github.com/nanocoai/nanoclaw/pull/2999) | [PR 链接 #3076](https://github.com/nanocoai/nanoclaw/pull/3076)

- **#2971**：新增 `ncc` 实用 CLI 工具，用于主机操作与健康监控，可能成为运维工具链的一部分。  
  [PR 链接](https://github.com/nanocoai/nanoclaw/pull/2971)

- **#2544**：增强 Telegram 适配器，支持 `message_reaction` 与 `callback_query` 更新，提高互动完整性。  
  [PR 链接](https://github.com/nanocoai/nanoclaw/pull/2544)

---

## **7. 用户反馈摘要**  

- 用户反映在实际部署中，WhatsApp 的提及模式存在明显的交互缺陷：自动补全与手动输入的行为不一致，导致 Agent 无法响应关键指令。  
- 安全问题引发关注，特别是在多 Agent 场景下 Webhook 认证缺失可能导致跨 Agent 数据污染或指令劫持。  
- Telegram 用户希望支持更多的消息类型交互（如反应），当前适配器功能有限。  
- Discord 用户在接收附件时遇到解析失败，影响 Agent 理解消息内容的能力。

---

## **8. 待处理积压**  

- **#2752** [2026-06-12 开启]：Discord 附件下载逻辑未正确处理 URL-only 类型，长期未解决。  
  [PR 链接](https://github.com/nanocoai/nanoclaw/pull/2752)

- **#2544** [2026-05-18 开启]：Telegram 回调与反应支持延迟，社区用户期待已久。  
  [PR 链接](https://github.com/nanocoai/nanoclaw/pull/2544)

> 📌 建议维护团队重点审阅这两项，尤其是在即将进行的版本规划中，优先处理平台通道的完整性问题。

--- 

📅 本报告由 AI 智能体分析生成，基于 GitHub 公开数据。


</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>


# NullClaw 项目动态日报 - 2026-07-19  

---

## 1. 今日速览  
- NullClaw 项目今日活动较为冷寥，仅有 1 个新开或活跃的 Issue，无 Pull Requests 或版本发布。  
- 唯一的 Issue (#868) 反映了在 Android/Termux 平台（aarch64 架构）上运行 `zig build` 时出现的链接权限错误，影响特定环境下的构建流程。  
- 当前项目缺乏明显的开发推进迹象，社区反馈聚焦于平台兼容性和构建稳定性问题。  
- 维护者尚未对该 Issue 提供修复方案或回应。  
- 整体活跃度较低，需关注长期 Issue 的响应延迟及平台支持的广泛性。  

📎 [NullClaw GitHub 主页](https://github.com/nullclaw/nullclaw)

---

## 2. 版本发布  
- **无新版本发布**  

---

## 3. 项目进展  
- **无 Pull Requests 合并或关闭**  
- 当前无明显的代码或功能推进，项目状态维持不变。

---

## 4. 社区热点  
### 🔥 最活跃 Issue: [#868 - zig build fails on Android/Termux (aarch64)](https://github.com/nullclaw/nullclaw/issues/868)  
- **作者**: NOTJuangamer10  
- **创建时间**: 2026-04-23 | **最后更新**: 2026-07-18 | **评论数**: 7  
- **摘要**:  
  - 用户在 Android 平台（LineageOS 22.2 + Termux）上尝试使用 `zig build -Doptimize=ReleaseSmall` 时遇到链接失败错误，具体表现为 `AccessDenied on options.zig linkat`。  
  - 环境包括 aarch64 架构、Zig 0.16. 版本，错误指向链接阶段的文件操作权限问题。  
  - 该 Issue 已持续数月未关闭，反映出 Android 平台支持的不足。  
- **背后诉求**: 提升项目在移动开发场景下的适配能力，尤其是对 Android/Termux 用户的支持需求。

---

## 5. Bug 与稳定性  
### 🐞 严重 Bug 反馈  
| 等级 | 描述 | 状态 | 链接 |
|------|------|------|------|
| ⚠️ 高 | Android/Termux 下 `zig build` 链接失败，提示 `AccessDenied` 错误 | 开放中，无 fix PR | [#868](https://github.com/nullclaw/nullclaw/issues/868) |

- 该 BUG 涉及底层构建逻辑与移动平台的文件系统权限，可能限制了项目在嵌入式或移动开发领域的应用范围。  
- 没有维护者或社区成员提交修复 PR，问题仍悬而未决。

---

## 6. 功能请求与路线图信号  
- **无新功能请求**  
- 现有 Issue 和 PR 队列中未体现明确的新功能需求。

---

## 7. 用户反馈摘要  
- **真实用户场景**: 用户尝试在 Android 手机上通过 Termux 环境运行 Zig 构建，期望将 nullclaw 用于移动开发。  
- **痛点总结**:  
  - 构建过程不支持 Android 平台的文件权限模型。  
  - 缺少跨平台构建文档或指南，导致用户在非传统 PC/Linux 环境下难以调试。  
- **满意/不满意**:  
  - 用户表达了对项目潜力的期待，但因平台限制而无法继续使用。  
  - 无正面反馈记录，仅有技术层面的排障讨论。

---

## 8. 待处理积压  
### ⏳ 长期未响应 Issue  
| 编号 | 标题 | 创建时间 | 链接 |
|------|------|--------|------|
| #868 | [bug] zig build fails on Android/Termux (aarch64) | 2026-04-23 | [#868](https://github.com/nullclaw/nullclaw/issues/868) |

- 该 Issue 已超过三个月未关闭，表明维护资源或关注度不足，建议维护者优先评估 Android 平台支持的必要性与可行性。

---

📌 **维护者提醒**:  
- 建议检查 Zig 在 Android/Termux 上的文件访问权限机制，优化构建脚本对非标准环境的兼容性。  
- 可考虑添加 CI/CD 支持 Android 构建测试，以提升跨平台稳定性。  

📎 [NullClaw Issue Tracker](https://github.com/nullclaw/nullclaw/issues)


</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>


# IronClaw 项目动态日报 - 2026-07-19

## 1. 今日速览

IronClaw 项目今日活跃度极高，过去24小时内处理了50个PR（21待合并，29已合并/关闭），显示出活跃的开发和重构工作。项目正在进行大规模架构简化工作（Slice B/C系列PR），同时推进MCP服务器集成和能力系统重构。尽管没有新的版本发布，但核心维护者正在加紧架构优化和安全性改进。社区需求包括繁体中文本地化支持和Telegram频道集成，这些都反映了项目扩展性和国际化的迫切需求。

## 2. 版本发布

暂无新版本发布。

## 3. 项目进展

### 今日合并的重要变更

**[CLOSED] refactor(reborn): SafeSummary single definition** [#6236](https://github.com/nearai/ironclaw/pull/6236)
- 移除了loop-safe-summary红action规则的两个重复副本
- 将它们委托给单一规范的`ironclaw_host_api::SafeSummary`
- 这是架构简化"单一定义，由host_api拥有"方向的重要一步

**[CLOSED] feat(reborn): Slice C W1a — activate Authorized seal** [#6233](https://github.com/nearai/ironclaw/pull/6233)
- 引入了`RuntimeLane::from_runtime_kind`转换
- 为能力路径通过`authorize()`/`dispatch()`路由奠定基础
- 这是向闭合运行时车道(enum)迁移的第一步

**[CLOSED] refactor(host_runtime): delete dead trust_decision field** [#6234](https://github.com/nearai/ironclaw/pull/6234)
- 删除了在`RuntimeCapability*Request`家族中证明已死的`trust_decision`字段
- 清理了每个跳跃处都在复制的死字段

**[CLOSED] feat(host_api): result-record vocabulary** [#6237](https://github.com/nearai/ironclaw/pull/6237)
- 引入了`GateRecord`和`DenyRecord`新结构体
- 实现了"从记录渲染"能力-结果折叠(Q5.2.9合同)
- 为模型可见内容提供了规范数据结构

**[CLOSED] test(reborn): capability-DTO-collapse ratchet** [#6238](https://github.com/nearai/ironclaw/pull/6238)
- 实施了防止滑动的防错机制
- 冻结了镜像DTO结构，确保向后兼容性

**[CLOSED] refactor: deployment mode as config data** [#6235](https://github.com/nearai/ironclaw/pull/6235)
- 将部署目标实现为单个配置值
- 消除`LocalDev*`家族，部署模式作为政策而非内核类型

### 架构简化推进

近期正在进行的架构简化工作（参考[`docs/reborn/2026-07-17-architecture-simplification-dto-dyn-local.md`](https://github.com/nearai/ironclaw/blob/main/docs/reborn/2026-07-17-architecture-simplification-dto-dyn-local.md))：
- **Slice B**: 部署模式简化（4.4节、5.6节）
- **Slice C**: 移除动态分发，引入闭合`RuntimeLane`枚举（4.2节、5.5节）

## 4. 社区热点

### 最活跃讨论

**[OPEN] MCP server headers persist bearer tokens in plaintext** [#6247](https://github.com/nearai/ironclaw/issues/6247)
- **摘要**: `McpServerConfig.headers`中的Bearer令牌以明文形式存储在数据库设置行和worker挂载中
- **社区诉求**: 安全凭证存储的重要隐私和安全问题
- **影响**: 涉及备份/导出数据和worker环境中的敏感信息暴露

**[OPEN] Reborn: extensions-management API parity** [#6249](https://github.com/nearai/ironclaw/issues/6249)
- **摘要**: Reborn二进制缺乏v1网关的扩展管理API等效实现
- **社区诉求**: 保持API一致性，确保Reborn版本功能完整性

**[OPEN] Reborn: credential preflight** [#6248](https://github.com/nearai/ironclaw/issues/6248)
- **摘要**: 在批准/沙箱启动前检查必需的ProductAuthAccount凭证
- **社区诉求**: 改进用户体验，提前发现权限问题

**[OPEN] Add zh-TW Traditional Chinese localization** [#6158](https://github.com/nearai/ironclaw/issues/6158)
- **摘要**: 请求添加繁体中文(zh-TW)语言支持
- **社区诉求**: 国际化支持，解决用户界面语言偏好问题

## 5. Bug 与稳定性

### 严重级 Bug（可能的安全隐患）

**[OPEN] MCP server headers persist bearer tokens in plaintext** [#6247](https://github.com/nearai/ironclaw/issues/6247)
- **严重性**: 高 - 敏感凭证以明文存储
- **状态**: 已开issue，无fix PR
- **影响**: 数据库备份/导出和worker挂载环境中的token泄露风险

### 回归问题

**[OPEN] Reborn: model cost table / budget accountant not rebuilt** [#6215](https://github.com/nearai/ironclaw/issues/6215)
- **严重性**: 中等 - 与成本跟踪相关的核心功能回归
- **状态**: 已开issue，无fix PR
- **影响**: LLM重载 chokepoint不再重建模型成本表和预算会计

### 修复完成的问题

**[CLOSED] Support Telegram channel for IronClaw Reborn** [#5124](https://github.com/nearai/ironclaw/issues/5124)
- **状态**: 已关闭，Telegram频道支持工作可能已完成或暂时搁置

## 6. 功能请求与路线图信号

### 新功能请求

1. **Traditional Chinese Localization** [#6158](https://github.com/nearai/ironclaw/issues/6158)
   - 由于WebUI v2仅支持zh-CN，无法满足繁体中文用户需求
   - 高可能性加入后续版本，符合国际化趋势

2. **Extensions Management API Parity** [#6249](https://github.com/nearai/ironclaw/issues/6249)
   - Reborn版本缺少v1的扩展管理API
   - 核心维护者kirikov提出，高优先级跟进

3. **Credential Preflight Check** [#6248](https://github.com/nearai/ironclaw/issues/6248)
   - 提前检查OAuth账户凭证有效性
   - 与#6246 CLI配置功能相互补充

### 路线图信号

**[OPEN] feat(reborn-cli): config set CX** [#6246](https://github.com/nearai/ironclaw/pull/6246)
- 提供无需编辑文件即可配置能力的CLI命令
- 包括连接Google/Gmail、设置LLM凭证、切换Slack等功能
- 表明项目正向简化用户配置体验努力

## 7. 用户反馈摘要

基于Issues评论和描述，提取的关键用户痛点：

- **语言支持不足**: 用户希望支持zh-TW繁体中文，但当前WebUI v2仅提供zh-CN简体中文选项
- **API一致性问题**: Reborn版本相比v1缺少部分API端点，影响开发者迁移和集成
- **安全隐患关注**: MCP服务器配置中Bearer令牌明文存储引发安全担忧
- **配置复杂度**: 希望通过CLI简化能力配置过程，减少手动编辑配置文件的需求
- **凭证验证体验**: 在授权失败或沙箱启动前希望提前发现权限问题

## 8. 待处理积压

### 需要维护者关注的长期问题

**[OPEN] Reborn: extensions-management API parity** [#6249](https://github.com/nearai/ironclaw/issues/6249)
- **创建时间**: 2026-07-18（较新但属于架构核心）
- **维护者响应**: 已有核心贡献者kirikov参与

**[OPEN] Reborn: credential preflight** [#6248](https://github.com/nearai/ironclaw/issues/6248)
- **创建时间**: 2026-07-18
- **依赖**: 被阻塞在auth_resume设计上

**[OPEN] MCP server headers persist bearer tokens in plaintext** [#6247](https://github.com/nearai/ironclaw/issues/6247)
- **创建时间**: 2026-07-18
- **优先级**: 高（安全相关）
- **维护者响应**: 核心贡献者kirikov提出

---

*数据统计截止时间: 2026-07-19*
*项目状态: 积极开发中，架构优化阶段*


</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>


# LobsterAI 项目动态日报 2026-07-19

## 1. 今日速览
LobsterAI 项目今日活跃度中等，新增 6 个 Issue 和 3 个 PR。在过去24小时内，社区主要关注功能缺陷和用户体验问题，例如自定义 MCP 无法使用、长图解析错误及模型输入限制提示不准确等。项目近期发布了 2026.7.17 版本，带来了多项功能优化和服务部署数据持久化支持。2 个 PR 已关闭，显示项目持续推进稳定性和功能完善工作。

## 2. 版本发布
### LobsterAI 2026.7.17（2026-07-17）
**更新内容包括：**
- **cowork 功能优化**：在错误 UI 中展示结构化运行失败详情，提升调试效率
- **服务部署数据持久化**：增强服务部署模块数据保存能力，支持更可靠的状态管理
- **skin 相关改进**（具体内容不完整）：可能涉及界面主题或样式自定义功能

**破坏性变更/迁移注意事项：** 暂未标明 breaking changes，建议用户关注 release note 完整内容。

## 3. 项目进展
### 合并/关闭的重要 PR
- **#1353 feat(agent): Agent 技能选择器新增全选和清除功能**  
  优化 Agent 技能选择交互体验，新增“全选”和“清除”按钮，支持高效批量操作技能选择。仅修改 `AgentSkillSelector.tsx` 和 `i18n.ts`，影响面较小。
  
- **#1464 fix(im): add duplicate validation for instance name and credential ID**  
  修复钉钉、飞书、QQ 等 IM 平台多实例中实例名和凭证 ID 可重复的问题，增强数据完整性和用户体验。

### 开发中 PR
- **#2358 [area: renderer] fix(cowork): show feedback when session rename fails**  
  修复会话重命名失败时无提示的问题，增强用户操作反馈机制。关联 Issue #670，尚未合并。

## 4. 社区热点
### 高度讨论 Issue
- **#1293 [OPEN] [stale] 自定义studio http 的mcp无法使用**  
  用户反馈自定义 MCP 配置未能在 OpenCLaw 引擎中生效，仅支持 SSE 协议。反映平台扩展性和集成灵活性问题。  
  🔗 [Issue #1293](https://github.com/netease-youdao/LobsterAI/issues/1293)

- **#1302 [OPEN] [stale] feat(cowork): 为代码块添加行号显示切换按钮**  
  提议在代码块工具栏中添加行号切换功能，以提升长代码阅读效率。反映开发者对代码调试支持的迫切需求。  
  🔗 [Issue #1302](https://github.com/netease-youdao/LobsterAI/issues/1302)

## 5. Bug 与稳定性
| 严重程度 | Issue 链接 | 描述 | 状态 |
|---------|----------|------|------|
| 高 | [#1296](https://github.com/netease-youdao/LobsterAI/issues/1296) | 长图上传（3M）解析失败导致页面崩溃 | 开放，无 fix PR |
| 高 | [#1298](https://github.com/netease-youdao/LobsterAI/issues/1298) | 模型连接测试通过，但输入两个字提示“内容过长” | 开放，可能涉及输入长度校验逻辑 |
| 中 | [#1307](https://github.com/netease-youdao/LobsterAI/issues/1307) | 关闭模型提供商编辑面板后无法编辑其他提供商配置 | 开放，无 fix PR |

## 6. 功能请求与路线图信号
- **#1302: 代码块行号显示**  
  社区一致需求，涉及 UI 开发和语法高亮集成（react-syntax-highlighter）。PR #2358 显示项目正关注 cowork 相关交互优化，此功能可能被纳入下一版本。

- **#1353: Agent 技能选择器增强**  
  已通过 PR 实现，显示项目对 Agent 配置体验的持续投入。

## 7. 用户反馈摘要
- **痛点 1：平台集成限制**  
  用户希望支持更多自定义 MCP 类型，但当前仅限 SSE 协议，反映平台扩展性不足。

- **痛点 2：大文件处理能力**  
  长图上传导致应用崩溃，表明后端或前端对资源占用未做有效控制。

- **痛点 3：模型配置反馈不准确**  
  模型实际支持的输入长度与提示信息不符，影响开发效率和信任度。

## 8. 待处理积压
- **#1293, #1296, #1298, #1302, #1305, #1307**  
  所有 Issue 均标记为 `[stale]`，距今已超过3个月未关闭，建议维护者评估优先级并安排修复或响应。  
  🔗 [Issue #1293](https://github.com/netease-youdao/LobsterAI/issues/1293) | 🔗 [Issue #1296](https://github.com/netease-youdao/LobsterAI/issues/1296) | 🔗 [Issue #1298](https://github.com/netease-youdao/LobsterAI/issues/1298) | 🔗 [Issue #1302](https://github.com/netease-youdao/LobsterAI/issues/1302) | 🔗 [Issue #1305](https://github.com/netease-youdao/LobsterAI/issues/1305) | 🔗 [Issue #1307](https://github.com/netease-youdao/LobsterAI/issues/1307)

---

*注：本日报基于 2026-07-19 时间节点 GitHub 数据生成，链接可能随时间变化。*


</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>


# Moltis 项目动态日报（2026-07-19）

## 1. 今日速览
Moltis 项目今日活跃度中等，社区和开发者持续推进架构扩展和用户体验优化。本日新增 1 个功能请求 Issue（#574），并有 3 个 Pull Request 活动，其中 2 个已关闭（#1157、#1159），1 个处于开放状态（#1158）。项目稳定性良好，无重大 Bug 报告，新功能开发正在有序进行中。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
### ✅ 已关闭 PR 聚焦功能完善与用户体验提升
- **[PR #1157](https://github.com/moltis-org/moltis/pull/1157)** `fix(web)`：支持仅使用 Agent Completion Protocol (ACP) 的聊天配置。在 LLM 配置流程中识别并标记已安装的 ACP Agent，避免误导性错误提示。优化了会话头像选择器逻辑，提升了面向无 LLM 模型场景的用户引导能力。
- **[PR #1159](https://github.com/moltis-org/moltis/pull/1159)** `feat(slack)`：Slack 集成支持自定义 API 基础 URL。允许用户配置非默认 Slack API 地址，提升企业或私有部署场景下的灵活性，同时更新了相关文档和引导流程。

## 4. 社区热点
### 🔥 [Issue #574](https://github.com/moltis-org/moltis/issues/574) [OPEN] Model Routing Per topic
- **作者**: azharkov78  
- **创建日期**: 2026-04-06 | **更新日期**: 2026-07-18 | **评论数**: 3 | **点赞数**: 1  
- **摘要**: 提议实现基于话题的模型路由机制，允许用户为不同主题或类型的请求分配不同 LLM 或 Agent，以优化性能或成本。该需求反映了用户对更灵活、可定制的路由策略的迫切需求，尤其是在多模型部署场景下。

## 5. Bug 与稳定性
- 本日未报告新的崩溃或回归性 Bug。
- **[PR #1157](https://github.com/moltis-org/moltis/pull/1157)** 中的修复可能解决了过去在 ACP-only 环境下出现的配置错误或引导问题，提升了兼容性和稳定性。

## 6. 功能请求与路线图信号
- **[Issue #574](https://github.com/moltis-org/moltis/issues/574)** 是当前社区中持续讨论的高优先级功能请求，建议在后续版本中纳入模型路由框架设计。
- **[PR #1158](https://github.com/moltis-org/moltis/pull/1158)** 引入基于 Zvec 的向量数据库内存后端，作为实验性功能，默认启用。若反馈良好，可能成为未来记忆存储的标准选项之一。

## 7. 用户反馈摘要
- 用户关注点集中在 **配置灵活性** 和 **多模型支持** 上。
- Issue #574 和 PR #1157 都间接反映了用户希望在更复杂的部署环境中获得更贴合实际需求的支持。
- 开发者 demyanrogozhin 和 penso 持续投入贡献，显示出良好的社区协作氛围。

## 8. 待处理积压
- **[Issue #574](https://github.com/moltis-org/moltis/issues/574)** 自 4 月以来保持开放状态，近期重新更新，表明其仍具有持续关注度。建议维护者对其进行优先评估。
- 其他 Issue 和 PR 的响应及时，无明显积压情况。

---

**项目健康度评估**：🟢 良好 —— 活跃开发、稳定维护、社区参与度较高，适合持续关注。


</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>


# CoPaw 项目日报 - 2026-07-19

## 1. 今日速览

CoPaw 项目今日活跃度较高，24小时内新增11个Issue和6个PR，显示社区参与度旺盛。大部分问题集中在稳定性、沙箱控制和记忆管理方面，反映了在实际使用中发现的关键痛点。值得注意的是，两起严重回归问题（#6245、#6246）已有对应的修复PR在审查中，技术债清理正在进行中。Windows和Docker环境下的兼容性问题也在持续被报告，需要关注跨平台支持质量。

## 2. 版本发布

暂无新版本发布。上次发布的 v2.0.0.post3（#6223）仍处于安装验证阶段，建议关注其验收结果。

## 3. 项目进展

**已合并/关闭的重要PR:**
- **#1071** - 引入Mattermost频道集成功能（已关闭）

今日合并数量为0，主要资源投入在新功能开发和Bug修复上。其中 #6237（日期感知历史召回）和 #6238（驱动处理器并发初始化）代表性能优化方向的推进。

## 4. 社区热点

**最具讨论价值的Issue:**
- **#6245** [Session permanently blocked when shell command exceeds coordinator deadline](https://github.com/agentscope-ai/QwenPaw/issues/6245) - 涉及会话完全阻塞的严重回归问题，已引发2条评论讨论；**已有对应PR #6248修复**
- **#6246** [`_saved_tool_refs` crashes with OSError: File name too long](https://github.com/agentscope-ai/QwenPaw/issues/6246) - Git diff等特殊内容触发的文件系统错误，反映边界情况处理不足；**已有PR #6247修复正在审核**

**最新的功能PR热点:**
- **#6237** [feat(scroll): improve exchange and date-aware history recall](https://github.com/agentscope-ai/QwenPaw/pull/6237) - 提升历史记录检索体验，支持日期感知查询

## 5. Bug 与稳定性

按严重程度排列：

1. **🔴 严重** - #6245 Shell命令超时导致会话永久阻塞 | ✅ 已有 [PR #6248](https://github.com/agentscope-ai/QwenPaw/pull/6248) 修复
2. **🔴 严重** - #6246 `OSError: File name too long` 导致 `recall_history` 崩溃 | ✅ 已有 [PR #6247](https://github.com/agentscope-ai/QwenPaw/pull/6247) 等待合并
3. **🟠 高** - #6240 控制台末尾显示记忆注释 | ❌ 等待修复
4. **🟠 高** - #6242 嵌入维度设置未传递给OpenAI兼容API | ✅ 已有 [PR #6243](https://github.com/agentscope-ai/QwenPaw/pull/6243) 等待合并
5. **🟠 高** - #6241 Agent连续重复输出+memory_search死循环 | ❌ 缺少重复检测机制
6. **🟡 中** - #6250 沙箱不可用时硬编码弹审批，无法配置跳过 | ❌ 等待增强
7. **🟡 中** - #6239 Windows后端PATH拼接丢失分号 | ❌ 等待修复
8. **🟢 低** - #6249 TUI一直处于warming状态 | ❌ 需要调试支持
9. **🟢 低** - #4641 环境变量中session无法见到 | ⚠️ 长期Issue（5月23日创建）

## 6. 功能请求与路线图信号

**用户提出的重要功能需求:**
- **#6244** [记忆隔离能力](https://github.com/agentscope-ai/QwenPaw/issues/6244) - 请求引入"项目"概念实现记忆隔离，改善检索精度；可能成为下一版本的核心增强
- **#4641** [env set后subprocess不可见](https://github.com/agentscope-ai/QwenPaw/issues/4641) - 需要 `env get` 命令支持运行时获取环境变量；显示配置动态性需求强烈

从PR角度看，#6237（历史召回优化）、#6243（嵌入API配置暴露）表明记忆系统和API兼容性是当前迭代重点。建议优先考虑记忆隔离功能（#6244）加入v2.1规划。

## 7. 用户反馈摘要

**核心痛点:**
- 沙箱控制严格但缺乏灵活配置（#6250）
- 跨平台兼容性问题频发（Windows PATH #6239，Docker环境 #6245）
- 记忆系统边界处理不足（#6246文件过长，#6240注释泄露）
- 环境变量动态性缺失（#4641）

**正向反馈:**
- 社区活跃贡献者持续涌现（今日3个首次贡献PR）
- PR响应速度较快，关键Bug有修复版本跟进

## 8. 待处理积压

**长期未响应的重要Issue:**
- **#4641** [qwenpaw env set → subprocess can't see it](https://github.com/agentscope-ai/QwenPaw/issues/4641) - 5月23日创建，环境变量动态化需求迟未解决；建议作为配置系统重构的入口需求
- **#6223** [v2.0.0.post3发布验收](https://github.com/agentscope-ai/QwenPaw/issues/6223) - 7月17日创建，版本验证事项需要闭环确认

建议维护者优先处理跨平台兼容性和记忆稳定性问题，这些在最新版本升级中反映出较强的集中性缺陷信号。


</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>


# ZeroClaw 项目动态日报 - 2026-07-19

## 1. 今日速览

ZeroClaw 项目今日活跃度非常高，24小时内 Issues 动态达50条（含44条活跃讨论），PR 动态同样达50条（45条待合并）。项目社区讨论热烈，涵盖 Agent 能力增强、安全性改进、多渠道集成等多个核心方向。目前无新版本发布，但多个关键功能正在紧密开发中。

## 2. 版本发布

暂无新版本发布。

## 3. 项目进展

### 已合并/关闭的重要 PR:
- **#9135** - 修复文档生成中不必要的占位符展开问题 ([链接](https://github.com/zeroclaw-labs/zeroclaw/pull/9135))
- **#8778** - 优化项目图像资产体积 ([链接](https://github.com/zeroclaw-labs/zeroclaw/pull/8778))
- **#8440** - 为 Telegram 通道添加单独的消息去抖动配置 ([链接](https://github.com/zeroclaw-labs/zeroclaw/pull/8440))

这些合并推进了项目的可用性和性能，但主要集中在文档和细节体验优化上。

## 4. 社区热点

### 最具讨论性的 Issues/PRs:

**#5862 [Bug]: zeroclaw does not know it can add cron** ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5862))
- **评论数**: 14条
- **分析**: 用户发现 ZeroClaw 在回复 cron 任务需求时，并未主动提示可以使用内置的 `zeroclaw cron` 功能。这反映出 Agent 在自我认知和功能引导方面存在体验缺陷。

**#8177 [RFC]: Supply chain signing - hardware PGP, hermetic builds, and SLSA provenance** ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8177))
- **评论数**: 12条  
- **分析**: 提出加强供应链安全性的计划，包括硬件PGP签名、密封构建和SLSA来源追溯，显示社区对软件供应链安全越来越关注。

**#5146 [Feature]: Token consumption minimization via skill compilation** ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5146))
- **评论数**: 9条
- **分析**: 每次调用技能都会发送大量不必要的上下文，导致token浪费。该议题已被接受，有望成为下一版本优化目标。

## 5. Bug 与稳定性

### 高严重性 Bug:

1. **#8505 [Bug]: Telegram channel cannot be configured** ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8505))
   - **状态**: OPEN，优先级P1，S1严重程度
   - **问题**: 尽管按照快速入门配置了 Telegram 频道，ZeroClaw 仍报通道未配置，通过 CLI 可正常工作
   - **Fix PR**: 暂无关联 PR

2. **#6724 [Bug]: Enabled Signal or Voice Call channel with empty credentials can crashloop the supervisor** ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6724))
   - **状态**: OPEN，优先级P3，高风险
   - **问题**: 当启用 Signal 或语音通话通道但未填写凭证时，会触发 supervisor 持续重启
   - **Fix PR**: 暂无关联 PR

3. **#6672 [Bug]: reasoning_content not passed back in agentic tool-call loops** ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6672))
   - **状态**: CLOSED，S0严重程度
   - **问题**: 使用小米 mimo 模型的思考模式时，推理内容无法在工具调用循环中传递
   - **Fix PR**: 暂无关联 PR

### 中等严重性 Bug:

- **#6002 [Bug]: Not clearly addressed to the assistant** - Telegram 消息识别问题 ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6002))
- **#6558 [Bug]: providers erro** - 自定义提供商 API 错误处理 ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6558))

## 6. 功能请求与路线图信号

### 高潜力功能请求:

**#5146 Token consumption minimization via skill compilation** ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5146))
- **状态**: 已接受，准备开发
- **影响**: 显著降低运行成本，提高响应效率

**#2079 [Feature]: Restore GitHub as a native channel** ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/2079))
- **状态**: 已接受，准备开发
- **影响**: 增强 GitHub 生态集成，支持自动化协作

**#8424 [RFC]: Workspace-relative forbidden path patterns** ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8424))
- **状态**: 阻塞中，但正优先处理
- **影响**: 提升 Agent 在工作空间内的操作安全性

**#8226 [Feature]: Add typed per-agent git identity** ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8226))
- **状态**: 已接受
- **影响**: 改善多 Agent 环境下的身份隔离和多租户支持

## 7. 用户反馈摘要

从 Issues 评论中提炼出的用户真实反馈:

1. **安装体验问题**: 
   - Android/Termux 环境下安装脚本误选Linux aarch64二进制 (#7911)
   - macOS 桌面应用启动后无窗口或空白窗口 (#7527)

2. **配置复杂性**:
   - Telegram 频道配置困难，官方快速入门不够清晰 (#8505)
   - 凭证环境变量传递机制不明确 (#8738)

3. **功能认知缺失**:
   - Agent 不知道自己具备 cron 功能 (#5862)
   - OpenRouter 模型回退数组配置不支持 (#8138)

4. **性能与成本关切**:
   - 技能完整内容重复发送导致 token 浪费 (#5146)
   - 上下文溢出引发幻觉/话题漂移 (#6517)

## 8. 待处理积压

### 长期未响应的关键 Issue/PR:

**#5907 [RFC]: Opt-in LSP support for ZeroCode coding workflows** ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5907))
- **创建日期**: 2026-04-19 (超过3个月)
- **状态**: 阻塞中（blocked）
- **内容**: 启用 LSP 支持以减少编码幻觉

**#6105 [Bug]: Agent doesn't have context of the cron job it's run** ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6105))
- **创建日期**: 2026-04-25
- **状态**: 阻塞中
- **内容**: Agent 执行 cron 任务时缺乏上下文关联

**#3696 [Feature]: Pre/post message hooks for shell commands** ([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/3696))
- **创建日期**: 2026-03-16
- **状态**: 已接受但长期未更新
- **内容**: 为 shell 命令添加前/后挂钩支持

---

*报告生成时间: 2026-07-19*  
*数据来源: GitHub API && Project Activity Logs*


</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*