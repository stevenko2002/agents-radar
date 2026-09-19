# OpenClaw 生态日报 2026-09-20

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-19 22:15 UTC

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

# OpenClaw 项目动态日报
*2026-09-20*

---

## 📋 今日速览

OpenClaw 项目今天呈现出**高活跃但复杂多变的健康状态**。过去24小时共处理500条Issue更新和500条PR，显示出持续的社区维护与开发活动。两款新版本发布（v2026.9.5是最新版），但同时暴露出许多严重问题，包括内存泄漏、自我升级故障、Gateway崩溃等。项目虽然在积极推进新功能与修复，但系统稳定性与用户体验方面仍面临严峻挑战，需要集中修复。

---

## 🚀 版本发布

### v2026.9.5 - OpenClaw 2026.9.5
**发布概要:** 这是一次次要版本更新，包含**64个直接提交、4,179个拉取请求和503位贡献者**。

**主要更新:**
- **Linux 更新渠道**: OpenClaw Linux 更新频道已发布最新版本 v2026.9.5
- **安装包**: 提供AppImage和Debian包版本，方便用户快速安装
- **64个直接提交**表明内部代码质量改进，但**大量PR合并**显示了此版本主要通过集成社区贡献实现

**破坏性变更与迁移注意事项:**
- 多项关键Issue（如#152759、#152968、#152981）显示2026.9.5版本存在**自我升级故障、自主认证问题、Gateway启动悬挂**等严重问题
- **升级前建议**: 确保在非生产环境测试，尤其是涉及Codex插件和远程工作区集成的场景
- **升级时需注意**: 升级过程可能出现长时间失败（如#152759的"silent failure"）、配置验证问题等

**相关链接:**
- [发布说明](https://docs.openclaw.ai/rele...)
- [AppImage 下载](https://github.com/openclaw/openclaw/releases/download/v2026.9.5/OpenClaw-2026.9.5-amd64.AppImage)
- [Debian 包](https://github.com/openclaw/openclaw/releases/download/v2026.9.5/OpenClaw-2026.9.5-amd64.deb)

---

## 📈 项目进展

### 本日合并/关闭的重要PR

| PR # | 标题 | 影响 | 健康度评估 |
|------|--------|--------|-------------------|
| #153147 | `fix(update)`: 保留Doctor建议和终端报告 | 高 | ✅ 解决更新失败后的信息丢失问题 |
| #152919 | `fix(cli-runner)`: 会话重播修复 | 中 | ⚠️ 社区PR仍有合并风险 |
| #152466 | `fix()`: 前台Gateway更新故障修复 | 高 | ✅ 解决更新期间运行时文件替换问题 |
| #150898 | `fix(update)`: 共享Gateway更新冲突修复 | 高 | ✅ 解决多安装版本冲突 |
| #153190 | `fix(release)`: 7.34版本验证兼容性 | 中 | ✅ 修复验证选择不兼容组件 |

**项目推进分析:**
- **更新修复**是当今日志的核心关注点，有4个高优先级PR解决升级过程中的关键故障
- **认证与权限管理**问题持续存在，如#152968的Codex认证失败、#145252的升级可靠性问题
- **社区贡献**活跃但需要更好的质量把关，许多PR处于"等待作者"或"需要维护者审阅"状态

---

## 💬 社区热点

### 最受关注的Issue (评论数量)
1. **#149361** - *WebUI 性能与稳定性问题 umbrella* (50评论) - [链接](https://github.com/openclaw/openclaw/issues/149361)
   - **诉求**: WebUI性能问题汇总，需要跨桌面/移动端修复
   
2. **#97616** - *钩子/工具子进程泄漏导致僵尸进程累积* (30评论) - [链接](https://github.com/openclaw/openclaw/issues/97616)
   - **诉求**: 严重性能问题，长期积累导致系统资源耗尽

3. **#144911** - *MCP服务器初始化超时导致Gateway崩溃* (30评论) - [链接](https://github.com/openclaw/openclaw/issues/144911)
   - **诉求**: 30秒超时机制导致完整系统崩溃，需要更健壮的超时处理

### 活跃PR讨论
1. **#153126** - *远程工作区技能集成* - 讨论中，有兼容性风险
2. **#153124** - *远程工作区内存文件读写* - 安全边界问题值得关注
3. **#151863** - *Codex交付事实与审批语义* - 高合并风险，直接影响用户体验

---

## 🐛 Bug 与稳定性

### P0严重级Bug (立即修复)
| Issue # | 问题 | 影响 | 修复状态 |
|--------|---------|--------|------------|
| #152759 | `openclaw update` 升级失败并静默回滚 | 极高 | ❓ 待修复 |
| #152968 | 2026.9.5版本Codex认证失败 | 高 | ❓ 待修复 |
| #152981 | Gateway启动悬挂近17分钟 | 极高 | ❓ 待修复 |

### P1高优先级Bug
| Issue # | 问题 | 影响 | 修复状态 |
|--------|---------|--------|------------|
| #91588 | Gateway严重内存泄漏（350MB → 15.5GB） | 高 | 🔄 持续监控 |
| #115908 | 会话投影重读导致主线线程阻塞 | 中 | 🔄 部分修复 |
| #104992 | 转录文本改写在恢复时被重新应用 | 中 | 🔄 修复中 |

**稳定状态评估:**
- **系统稳定性**: 问题较多，多个P0级Bug导致服务可用性严重受损
- **性能问题**: 内存泄漏、进程泄漏和线程阻塞是主要隐患
- **升级可靠性**: 自我升级过程存在严重缺陷，需要集中修复

---

## ✨ 功能请求与路线图信号

### 新功能请求
1. **#115988** - *LLM输入/输出拦截钩子* (5评论)
   - **诉求**: 增强插件权限，允许修改LLM交互内容
   
2. **#152652** - *远程工作区文件交付* (讨论中)
   - **诉求**: 支持远程工作区与Gateway的文件同步
   
3. **#153126** - *远程工作区技能集成* (讨论中)
   - **诉求**: 让Gateway能够使用远程工作区的技能文件

### 合并预兆
- **社区意愿强**: 大量PR显示用户对功能扩展的需求强烈
- **维护者关注**: 多个PR已获"维护者审阅"标签，表明被纳入考虑
- **风险考量**: 安全边界和高合并风险的PR需要更严格验证

**下一版本可能包含:**
- 更新流程改进（多高质量PR支持）
- 认证与授权增强（修复当前多个Bug）
- 远程工作区集成（社区需求强烈）

---

## 💬 用户反馈摘要

### 真实用户痛点
1. **"升级就是场灾难"** - 多个用户报告2026.9.5版本升级失败（#152759、#152968）
2. **"内存吃包子"** - Gateway内存持续增长最终导致系统OOM (#91588)
3. **"一直崩溃，一直重启"** - 反复的crash-loop导致服务不稳定 (#56217)
4. **"登录都失败"** - 认证问题影响Codex等核心服务 (#152968)

### 用户满意点
- **界面改进**: 多个UI相关PR（#152254、#153198）显示界面体验持续改进
- **文档更新**: 版本说明和更新日志更加详细透明
- **社区参与**: 每天500个新PR显示活跃的开发生态

### 不满意点
- **更新过程缺乏反馈**: 静默失败让用户不知所措
- **错误信息不友好**: 技术细节晦涩难懂普通用户无法理解
- **稳定性问题频繁**: 多个版本更新后立即出现严重Bug

---

## 📋 待处理积压

### 长期未解决的重要Issue
1. **#91588** - *Gateway严重内存泄漏* (创建于2026-06-09，400+评论)
   - **状态**: 持续监控，尚无确定修复方案
   - **影响**: 影响所有用户，RSS从350MB增长到15.5GB
   - **提醒**: 优先级应提高到P0级，需要紧急解决

2. **#97616** - *子进程泄漏导致僵尸进程累积* (创建于2026-06-29)
   - **状态**: 存在已验证修复，但需要大规模集成
   - **影响**: 系统资源逐步耗尽，性能逐步下降

3. **#134993** - *Gateway CPU核心饱和* (创建于2026-09-01)
   - **状态**: 仍未解决，大规模agent fleet时特别严重
   - **影响**: 单服务占用单核资源

### 合并进展缓慢的PR
1. **#152243** - *技能工作坊语义审查* (等待作者提交，Size: XL)
2. **#152652** - *远程工作区文件交付* (等待作者提交)
3. **#153126** - *远程工作区技能集成* (安全边界审查中)

**维护者建议:**
- **立即关注**: v2026.9.5升级故障 (#152759、#152968、#152981)
- **优先级调整**: 将内存泄漏问题 (#91588) 提升到最高优先级
- **质量把关**: 加强对高风险PR（安全边界、兼容性）的审核
- **用户沟通**: 改进更新失败时的错误信息和恢复流程

---

## 📊 项目健康度评估

**短期健康度**: ⚠️ **中度风险** - 高活性但稳定性较差
- **优点**: 活跃的社区贡献，更新修复工作正在推进
- **缺点**: 多个P0级Bug，升级过程不可靠，内存泄漏严重

**建议**:
1. **立即行动**: 修复v2026.9.5升级故障和认证问题
2. **中期规划**: 集中解决内存泄漏和进程泄漏问题
3. **长期改进**: 加强更新过程的错误处理和用户反馈机制

**健康指标**:
- 🟢 **代码贡献**: 高 (每天500+ PR)
- 🟡 **质量控制**: 中等 (许多PR需要维护者审阅)
- 🔴 **稳定性**: 差 (多个严重Bug影响用户)
- 🟡 **用户体验**: 中等 (界面改进但故障频发)

---

*数据截止于2026-09-20，涵盖GitHub issues、pull requests和release活动*

---

## 横向生态对比



以下是基于各项目 2026-09-20 动态数据生成的「今日重点」摘要：

### 1. 重要更新

*   **OpenClaw 发布 v2026.9.5 版本**  
    *   **内容**：该版本包含 64 个直接提交、4,179 个拉取请求和 503 位贡献者，提供 Linux AppImage 和 Debian 安装包。  
    *   **影响**：这是近期重要的版本迭代，但伴随自我升级静默失败（#152759）、Codex 认证失败（#152968）及 Gateway 启动悬挂（#152981）等严重问题，升级风险较高。
    *   [OpenClaw](https://github.com/openclaw/openclaw)

*   **PicoClaw 官网因 TLS 证书过期全面不可访问**  
    *   **内容**：官方网站 `picoclaw.io` 的 TLS 证书已于 2026-09-10 过期，导致所有浏览器和 TLS 客户端无法连接。  
    *   **影响**：项目对外入口处于宕机状态，直接影响新用户的第一印象与信任。CRITICAL 级 Issue #3377 已被自动标记为 stale，面临被自动关闭的风险。
    *   [PicoClaw](https://github.com/sipeed/picoclaw)

*   **NanoBot 关闭两项 P1 级安全修复 PR**  
    *   **内容**：合并了 #4667（保护用户技能不被 Dream 写入，要求 `dream_managed: true` 前置条件）和 #4668（在消息出站分发前增加授权钩子，限制媒体附件路径）。  
    *   **影响**：显著强化了工作区文件写入与消息外发的安全边界，修复了长期挂起的高优先级安全隐患。
    *   [NanoBot](https://github.com/HKUDS/nanobot)

*   **ZeroClaw 暴露两个 S0 级安全漏洞，尚无修复**  
    *   **内容**：Issue #10968 报告非交互式代理轮次（cron/heartbeat 等）不构建 ApprovalManager，导致风险配置审批静默失效；Issue #10966 报告 Git `--attr-source` 可隐藏变异子命令，绕过审批分类。  
    *   **影响**：属于最高严重级别的安全与审批绕过风险，可能在自动化和多代理部署场景中引入未授权操作，亟待维护者响应。
    *   [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

*   **Hermes Agent 集中合并/关闭 35 条 PR**  
    *   **内容**：推进了 Desktop 安全边界（禁止渲染进程 window-open 副作用）、MCP OAuth 授权持久化、Windows 网关启动器自动重试，以及本地模型（LMStudio）空闲模型卸载与内存管理。  
    *   **影响**：多条高价值质量与安全性修复集中落地，显著提升了桌面端健壮性、授权一致性与本地模型资源利用率。
    *   [Hermes Agent](https://github.com/nousresearch/hermes-agent)

*   **LobsterAI 关闭 6 条 PR，聚焦数据完整性与构建兼容性**  
    *   **内容**：重构了 CoworkSessionDetail 组件；修复了 SQLite 存储层的 CASCADE 失效、非原子写入和初始化超时问题；支持 per-session MCP server 开关；解决了 Windows WSL 环境下的构建失败。  
    *   **影响**：有效解决了数据库层面的数据完整性与崩溃风险，并提升了跨平台构建与会话管理的用户体验。
    *   [LobsterAI](https://github.com/netease-youdao/LobsterAI)

*   **CoPaw 多个关键 Bug 修复 PR 待审，版本发布停滞**  
    *   **内容**：社区针对 v2.2.1 中严重阻碍使用的 Bug（如 DeepSeek 拒绝嵌套 file/audio part 导致会话永久报废、Console lazy chunk 加载失败后全局死锁）提交了针对性修复 PR（#7889、#7886、#7885），但项目今日无任何合并。  
    *   **影响**：高活跃的社区输入与零吞吐的合并现状形成鲜明对比，延长了用户面临严重缺陷的窗口期。
    *   [CoPaw](https://github.com/agentscope-ai/CoPaw)

*   **Moltis 报告高优先级语义 Bug，子代理工具失效**  
    *   **内容**：Issue #1277 报告 `spawn_agent` 将 `active_tools: []` 误判为空白名单，导致子代理被赋予零工具，目前尚无对应修复 PR。  
    *   **影响**：直接影响子代理核心功能可用性，属于影响面明确的高优先级缺陷。
    *   [Moltis](https://github.com/moltis-org/moltis)

---

### 2. 活跃度概览

今日整体活跃度呈现“高输入、分化输出”的特征，社区与开发者互动频繁。**OpenClaw、ZeroClaw 和 Hermes Agent 最为活跃**，分别在版本发布、安全漏洞报告和大批量 PR 收口上表现突出；然而，**CoPaw、IronClaw 和 Moltis** 面临明显的评审与合并瓶颈，代码库实际推进停滞。**PicoClaw** 则因官网证书过期面临严重的对外可达性危机。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-09-20）

## 今日速览

- 今日无新版本发布；过去 24 小时 Issue 更新 1 条，PR 更新 28 条，其中待合并 21 条、已合并/关闭 7 条，PR 维护活跃度明显高于 Issue 流入。
- 安全与稳定性是今日主线：#4072 工作区相对符号链接绕过 ExecTool 限制仍为 OPEN，且无评论、无修复 PR；同时 #4667、#4668 两条 p1 安全修复已关闭。
- 功能侧集中在 WebUI 与 provider 生态：ProviderPicker 搜索、SenseNova/aimlapi 接入、Telegram 自定义 API、WebUI 本地化、自更新流程等。
- 整体健康度：24 小时 PR 合并/关闭率约 25%（7/28），待合并 21 条且多条带 `conflict`/p2 标签长期挂起，积压压力较大；Issue 流入低，但高优安全 Issue 响应不足。

## 版本发布

今日无新版本发布。

## 项目进展

今日已合并/关闭 7 条 PR，展示数据中可见 3 条，另有 4 条未在 Top 20 列表中展示。

**已关闭/合并的重要 PR：**

- [PR #4667](https://github.com/HKUDS/nanobot/pull/4667) `[bug, security, priority: p1]` fix: protect user skills from dream writes  
  为 workspace skills 增加 Dream-only 写入保护，要求 `dream_managed: true` frontmatter 才能修改现有 skill；修复 #4075。属于安全边界加固。

- [PR #4668](https://github.com/HKUDS/nanobot/pull/4668) `[bug, channel, security, priority: p1]` fix: enforce message outbound policy  
  在 `message` 工具出站分发前增加授权钩子，接入 `allow_from` / `group_allow_from`，并将本地媒体附件限制在 workspace/media 根目录；修复 #4076。属于消息外发策略与媒体路径安全修复。

- [PR #5816](https://github.com/HKUDS/nanobot/pull/5816) `[CLOSED]` feat(webui): polish provider setup and unify settings controls  
  统一 provider logo、设置项控件、加载/错误/禁用状态，修正品牌资源与 provider 别名。属于 WebUI 体验收口。

**整体推进评估：**  
今日项目在安全修复和 WebUI 打磨上取得实质进展，尤其是两条长期挂起的 p1 安全 PR 关闭。但 21 条待合并 PR 中仍有多条 `conflict` 标记，说明分支落后或相互冲突，合并吞吐可能受限于 review 与 rebase 成本。

## 社区热点

> 注：给定数据中 PR 评论数均为 `undefined`，Issue #4072 评论数为 0、👍 为 0，因此无法按真实评论热度排序。以下依据“24 小时内更新 + 标签优先级 + 长期挂起”识别热点。

**1. [Issue #4072](https://github.com/HKUDS/nanobot/issues/4072) — ExecTool 工作区限制可被相对符号链接绕过**  
- 状态：OPEN，创建于 2026-05-29，更新于 2026-09-19，评论 0，👍 0。  
- 诉求：`restrict_to_workspace=True` 下，shell guard 只检查命令文本和绝对路径，未解析工作区内相对符号链接，导致可读取工作区外文件。  
- 分析：这是安全隔离类问题，且已开放约 114 天无评论、无修复 PR，属于高优先级积压。

**2. [PR #5403](https://github.com/HKUDS/nanobot/pull/5403) `[bug, fix, test, priority: p1]` — 使用 API 报告的 prompt tokens 触发 consolidation**  
- 创建于 2026-08-16，更新于 2026-09-19。  
- 诉求：本地 tiktoken 估算持续低估现代模型 prompt tokens（报告称低 30%–50%），导致对话超过上下文窗口后仍不触发 consolidation。  
- 分析：直接影响长对话记忆与上下文管理，p1 合理，建议优先 review。

**3. Provider 生态扩展集中出现**  
- [PR #5666](https://github.com/HKUDS/nanobot/pull/5666) 添加 aimlapi.com 作为 OpenAI-compatible gateway provider。  
- [PR #5453](https://github.com/HKUDS/nanobot/pull/5453) 添加 SenseNova（商汤日日新）provider。  
- [PR #4919](https://github.com/HKUDS/nanobot/pull/4919) Telegram 支持自定义 Bot API base URL 与额外 headers。  
- 分析：社区对“更多模型接入 + 自托管/企业网关”有明确需求，但 #5666、#5453 均带 `conflict`，合并前需解决冲突。

**4. WebUI 成熟度相关 PR 密集更新**  
- [PR #5776](https://github.com/HKUDS/nanobot/pull/5776) 为共享 ProviderPicker 增加搜索过滤。  
- [PR #5367](https://github.com/HKUDS/nanobot/pull/5367) WebUI Agent activity 本地化，覆盖 10 种 locale。  
- [PR #5641](https://github.com/HKUDS/nanobot/pull/5641) iOS PWA 点击与状态栏修复。  
- 分析：WebUI 正从“可用”向“好用、可本地化、移动端稳定”推进。

## Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 | 是否有 fix PR |
|---|---|---|---|
| 严重（安全） | [Issue #4072](https://github.com/HKUDS/nanobot/issues/4072) ExecTool 工作区限制可被相对符号链接绕过 | OPEN | 未看到 fix PR |
| 高 | [PR #5403](https://github.com/HKUDS/nanobot/pull/5403) 本地 token 估算低估，consolidation 不触发（fixes #5402） | OPEN | 有，待合并 |
| 中 | [PR #5748](https://github.com/HKUDS/nanobot/pull/5748) 恢复流程未在工具批次边界持久化部分进度（closes #5747） | OPEN | 有，待合并 |
| 中 | [PR #4819](https://github.com/HKUDS/nanobot/pull/4819) consolidation locks 使用 WeakValueDictionary 导致身份不稳定 | OPEN，`conflict` | 有，待合并 |
| 中 | [PR #4820](https://github.com/HKUDS/nanobot/pull/4820) web_fetch URL 非字符串值污染缓存签名 | OPEN | 有，待合并 |
| 中 | [PR #5257](https://github.com/HKUDS/nanobot/pull/5257) sustained goal 在 turn 空闲后继续执行缺乏边界 | OPEN | 有，待合并 |
| 中 | [PR #5292](https://github.com/HKUDS/nanobot/pull/5292) Matrix 房间级回复未关联触发 turn 的用户事件 | OPEN | 有，待合并 |
| 中 | [PR #5260](https://github.com/HKUDS/nanobot/pull/5260) 未忽略 tracked workspace 目录内的运行时文件 | OPEN | 有，待合并 |
| 中 | [PR #5641](https://github.com/HKUDS/nanobot/pull/5641) iOS PWA 首次点击被 `:hover` 吞掉、状态栏问题 | OPEN | 有，待合并 |
| 已关闭 | [PR #4667](https://github.com/HKUDS/nanobot/pull/4667) 保护用户 skills 不被 Dream 写入 | CLOSED | 已关闭 |
| 已关闭 | [PR #4668](https://github.com/HKUDS/nanobot/pull/4668) 强制执行消息出站策略 | CLOSED | 已关闭 |

**稳定性判断：**  
今日无崩溃类新 Issue，但安全类 #4072 长期未修复是最大风险点。p1 内存 consolidation 问题 #5403 已有 fix PR，若合并可显著改善长上下文稳定性。

## 功能请求与路线图信号

结合已有 PR，以下方向可能进入下一版本或近期迭代：

**高概率纳入：**

- **WebUI provider 管理增强**  
  [PR #5776](https://github.com/HKUDS/nanobot/pull/5776) ProviderPicker 搜索、[PR #5352](https://github.com/HKUDS/nanobot/pull/5352) provider 移除控制、[PR #5816](https://github.com/HKUDS/nanobot/pull/5816) 设置控件统一。WebUI 配置体验是当前最密集的迭代方向。

- **Provider 生态扩展**  
  [PR #5666](https://github.com/HKUDS/nanobot/pull/5666) aimlapi、[PR #5453](https://github.com/HKUDS/nanobot/pull/5453) SenseNova。若冲突解决，可能较快进入下一版本。

- **自更新与分发能力**  
  [PR #5817](https://github.com/HKUDS/nanobot/pull/5817) 增加稳定版 PyPI 自更新与 `--dev` 源码更新，内嵌校验过的 Bun runtime。对部署体验有直接提升。

- **Telegram 企业/自托管支持**  
  [PR #4919](https://github.com/HKUDS/nanobot/pull/4919) 支持自定义 Bot API base URL 与额外 headers，实现 #4702。

**中概率纳入：**

- **Email 收件人别名过滤**  
  [PR #5606](https://github.com/HKUDS/nanobot/pull/5606) 解决共享邮箱场景下无法按收件地址过滤的问题。

- **Matrix 回复关联**  
  [PR #5292](https://github.com/HKUDS/nanobot/pull/5292) 让房间级回复正确关联用户消息。

- **WebUI 本地化**  
  [PR #5367](https://github.com/HKUDS/nanobot/pull/5367) Agent activity 本地化，覆盖 10 种 locale。

**路线图建议：**  
安全修复 #4072 应优先于新功能合并；否则工作区隔离承诺与用户信任会持续受损。

## 用户反馈摘要

> 给定数据未包含 Issue 评论正文，以下从 Issue/PR 描述中提炼真实痛点与使用场景。

- **工作区隔离不可靠**：[Issue #4072](https://github.com/HKUDS/nanobot/issues/4072) 用户指出相对符号链接可绕过 `restrict_to_workspace=True`，期望 shell guard 在执行前解析 symlink。当前 0 评论、0 👍，说明该问题曝光度低但风险高。
- **长对话记忆不触发 consolidation**：[PR #5403](https://github.com/HKUDS/nanobot/pull/5403) 反映本地 tiktoken 估算比 API 实际计数低 30%–50%，导致上下文超限后仍不整理记忆。
- **共享邮箱场景**：[PR #5606](https://github.com/HKUDS/nanobot/pull/5606) 指出一个邮箱可能对应多个别名地址，当前 email channel 不区分收件人，容易处理错误邮件。
- **移动端体验**：[PR #5641](https://github.com/HKUDS/nanobot/pull/5641) 反映 iOS PWA 首次点击被吞、状态栏异常，影响移动端日常使用。
- **Matrix 回复链路断裂**：[PR #5292](https://github.com/HKUDS/nanobot/pull/5292) 房间级回复未关联用户原消息，客户端无法形成对话线程。
- **Telegram 部署限制**：[PR #4919](https://github.com/HKUDS/nanobot/pull/4919) 用户需要自托管 Bot API 或企业网关，硬编码 `api.telegram.org` 不满足合规/网络要求。
- **Provider 移除受阻**：[PR #5352](https://github.com/HKUDS/nanobot/pull/5352) 当模型预设或图像生成仍引用 provider 时无法删除，需要明确的阻止反馈与确认控件。
- **恢复流程丢失部分工具进度**：[PR #5748](https://github.com/HKUDS/nanobot/pull/5748) 进程在批次中间退出时，已完成工具结果与外部副作用证据无法区分，影响恢复可靠性。
- **运行时文件污染 workspace**：[PR #5260](https://github.com/HKUDS/nanobot/pull/5260) tracked workspace 目录内产生运行时 artifacts，需要忽略规则与脚手架修正。

## 待处理积压

以下为长期未响应或长期挂起的重要 Issue/PR，建议维护者优先关注：

**高优先级安全 Issue：**

- [Issue #4072](https://github.com/HKUDS/nanobot/issues/4072) ExecTool 工作区符号链接绕过  
  创建于 2026-05-29，已约 114 天；OPEN、0 评论、0 👍、无 fix PR。建议至少给出 triage 结论或指派负责人。

**长期开放且带冲突/高优先级 PR：**

- [PR #4819](https://github.com/HKUDS/nanobot/pull/4819) memory consolidation locks 修复，创建于 2026-07-06，约 76 天，`conflict`。
- [PR #4820](https://github.com/HKUDS/nanobot/pull/4820) web_fetch URL 类型校验，创建于 2026-07-06，约 76 天。
- [PR #4919](https://github.com/HKUDS/nanobot/pull/4919) Telegram 自定义 API，创建于 2026-07-14，约 68 天。
- [PR #5257](https://github.com/HKUDS/nanobot/pull/5257) sustained-goal 空闲边界，创建于 2026-08-05，约 46 天。
- [PR #5260](https://github.com/HKUDS/nanobot/pull/5260) 忽略 workspace 运行时文件，创建于 2026-08-05，约 46 天。
- [PR #5292](https://github.com/HKUDS/nanobot/pull/5292) Matrix 房间级回复关联，创建于 2026-08-08，约 43 天。
- [PR #5352](https://github.com/HKUDS/nanobot/pull/5352) provider 移除控制，创建于 2026-08-12，约 39 天，`conflict`。
- [PR #5367](https://github.com/HKUDS/nanobot/pull/5367) WebUI activity 本地化，创建于 2026-08-13，约 38 天。
- [PR #5403](https://github.com/HKUDS/nanobot/pull/5403) p1 内存 consolidation 修复，创建于 2026-08-16，约 35 天。
- [PR #5453](https://github.com/HKUDS/nanobot/pull/5453) SenseNova provider，创建于 2026-08-20，约 31 天，`conflict`。
- [PR #5606](https://github.com/HKUDS/nanobot/pull/5606) email 收件人别名过滤，创建于 2026-08-30，约 21 天。
- [PR #5666](https://github.com/HKUDS/nanobot/pull/5666) aimlapi provider，创建于 2026-09-04，约 16 天，`conflict`。

**积压判断：**  
今日 PR 更新量高，但大量 PR 停留在 OPEN 且部分带 `conflict`，说明维护者 review 带宽或合并流程存在瓶颈。建议优先处理 p1 与安全类，再批量清理冲突型 provider/WebUI PR。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报
**日期：2026-09-20** ｜ 数据来源：NousResearch/hermes-agent

---

## 1. 今日速览

项目今日保持**高强度运转**：过去 24 小时共有 50 条 Issue 更新（新开/活跃 37、关闭 13）与 50 条 PR 更新（待合并 15、已合并/关闭 35），合并吞吐显著高于积压增长，说明维护侧响应能力良好。功能侧以 Desktop、Gateway、BlueBubbles 适配器和 Cron 为主线持续推进，其中一批由 hicklax13 提交的 Desktop/CLI 修复集中关闭。稳定性方面，Windows 平台问题（进程残留、更新失败、路径处理）成为今日最集中的痛点，另有多个跨越数月的老问题仍在开放状态。整体判断：**活跃度高、维护健康，但平台兼容性与长期积压需要关注。**

---

## 2. 版本发布

今日**无新版本发布**，无破坏性变更与迁移事项。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

今日共 35 条 PR 合并/关闭，呈现明显的"批次收口"特征，主要推进如下：

| PR | 内容 | 方向 |
|---|---|---|
| [#99792](https://github.com/NousResearch/hermes-agent/pull/99792) | `fix(gateway)`：修复 Windows 网关启动器异常退出后的可观测性与自动重试 | Gateway 稳定性 |
| [#99787](https://github.com/NousResearch/hermes-agent/pull/99787) | `fix(mcp)`：将 MCP OAuth 授权显式持久化（dashboard/TUI/manager 三端一致） | 安全/授权 |
| [#99790](https://github.com/NousResearch/hermes-agent/pull/99790) | `fix(transcript)`：安全保留"仅展示"修正，分离持久化状态与用户可见投影 | 会话状态 |
| [#99785](https://github.com/NousResearch/hermes-agent/pull/99785) | `feat(lmstudio)`：本地模型内存管理（卸载空闲模型、保留热模型、按资源选参） | 本地模型 |
| [#99784](https://github.com/NousResearch/hermes-agent/pull/99784) | `fix(desktop)`：禁止渲染进程 window-open 副作用 | 安全边界 |
| [#99798](https://github.com/NousResearch/hermes-agent/pull/99798) | `fix(desktop)`：拒绝不完整的 Python 运行时 | 安装健壮性 |
| [#99800](https://github.com/NousResearch/hermes-agent/pull/99800) | `fix(desktop)`：合成 Git 提交禁用签名 | 构建体验 |
| [#99803](https://github.com/NousResearch/hermes-agent/pull/99803) | `fix(desktop)`：打开会话时清除持久化未读状态 | 会话体验 |
| [#99796](https://github.com/NousResearch/hermes-agent/pull/99796) | `test(desktop)`：E2E 窗口保持隐藏 | 测试基建 |
| [#99786](https://github.com/NousResearch/hermes-agent/pull/99786) | `feat(media)`：新增只读 YouTube 账号 Skill | 技能生态 |
| [#116050](https://github.com/NousResearch/hermes-agent/pull/116050) | `fix(kanban)`：done 列按完成时间排序 | 看板体验 |
| [#116432](https://github.com/NousResearch/hermes-agent/pull/116432) | `feat(desktop)`：多数表决 BiDi + 波斯字体（修复 RTL 可读性） | i18n |

**推进评估**：今日进展以"质量收口"为主——Desktop 安全边界、MCP 授权持久化、网关自恢复、本地模型资源管理四条线同时落地，属于**夯实基础而非扩张功能**的一天。项目在稳定性与多平台健壮性上明显向前迈进，但尚无新版本承载这些改动。

---

## 4. 社区热点（讨论最活跃）

1. **[#88584](https://github.com/NousResearch/hermes-agent/issues/88584)** — `[OPEN][comp/cron]` 自动化 Nous 集成被阻塞（**120 条评论**，今日最高）
   - 核心：`cron/jobs.py` 合并冲突，dashboard updater 停留在旧 Enterkey 版本。反映自动化集成流水线的长期阻塞，是评论量断层第一的话题。

2. **[#107307](https://github.com/NousResearch/hermes-agent/issues/107307)** — `[CLOSED][provider/openai]` Codex provider 在 Pro Full / Pro Light 下报错并中断 Hermes 工作（**19 条评论**）
   - 已关闭。Owner 报告失败间隔持续缩短直至立即失败，属于典型的高影响、长尾排查类问题。

3. **[#116305](https://github.com/NousResearch/hermes-agent/issues/116305)** — `[OPEN][comp/plugins]` Desktop 插件 SDK 钩子愿望清单（**9 条评论**）
   - 源自 2026-09-19 插件目录收录，涉及 composer draft、settings gateway、session list、sidebar、pill slot、typed bridge 等，是**插件生态扩张的强信号**。

4. **[#62810](https://github.com/NousResearch/hermes-agent/issues/62810)** — `[OPEN][comp/cli]` CLI 退出码兼容性：布尔 handler 成功却返回 exit 1（**8 条评论**，7 月至今）

5. **[#34372](https://github.com/NousResearch/hermes-agent/issues/34372)** — `[OPEN][comp/gateway]` BlueBubbles webhook 重复注册导致每条 iMessage 被处理两次（**7 条评论**，5 月至今）

**诉求分析**：热点集中在①自动化/集成的可靠性（#88584）；②Provider 行为一致性（Codex/GPT-5.6 系列）；③Desktop 插件与扩展能力。用户对"能稳定跑通"的诉求明显高于对新功能的好奇。

---

## 5. Bug 与稳定性

按严重程度排列（标注是否有 fix PR）：

**P2 高优先级**
- [#116376](https://github.com/NousResearch/hermes-agent/issues/116376) `[OPEN]` **Windows**：关闭窗口后主进程无限存活（0 窗口 / 0 BrowserWindow）。**无 fix PR**。
- [#116375](https://github.com/NousResearch/hermes-agent/issues/116375) `[OPEN]` **Windows**：桌面更新以 `exit 4` 中止，更新门在 `cmd.exe` 包装器死亡时提前打开。**无 fix PR**。
- [#116384](https://github.com/NousResearch/hermes-agent/issues/116384) `[OPEN]` **Windows**：`clear_stale_tmp_packs()` 静默不清理（git pack 临时文件只读，EACCES 被 debug 级日志吞掉）。**无 fix PR**。
- [#116270](https://github.com/NousResearch/hermes-agent/issues/116270) `[OPEN]` `search_files` grep 回退对符号链接路径静默返回 0 匹配。**无 fix PR**。
- [#106682](https://github.com/NousResearch/hermes-agent/issues/106682) `[OPEN]` `fleet_restart_pending` 标记在更新器外部重启时永不清除，导致误报与强制重启健康集群。**无 fix PR**。
- [#30708](https://github.com/NousResearch/hermes-agent/issues/30708) / [#34372](https://github.com/NousResearch/hermes-agent/issues/34372) `[OPEN]` BlueBubbles 缺乏入站去重 → 重复处理、双会话。
  - ✅ **已有 fix PR**：[#116401](https://github.com/NousResearch/hermes-agent/pull/116401)（待合并）。
- [#107949](https://github.com/NousResearch/hermes-agent/issues/107949) `[OPEN]` Desktop composer 的 reasoning effort 遮蔽 per-model 配置。
  - ✅ **已有 fix PR**：[#107951](https://github.com/NousResearch/hermes-agent/pull/107951)（待合并）。

**P3 / 中等**
- [#116213](https://github.com/NousResearch/hermes-agent/issues/116213) `[OPEN]` Cron preflight 无法从 credential_pool 解析 openai-codex OAuth。**无 fix PR**。
- [#99943](https://github.com/NousResearch/hermes-agent/issues/99943) `[OPEN]` 压缩器窗口被 `model.ollama_num_ctx` 钳制，云 provider 1M 窗口静默降到 65,536。**无 fix PR**。
- [#96715](https://github.com/NousResearch/hermes-agent/issues/96715) `[OPEN]` `hermes config set` 对 242 条运行时读取路径误报"未识别 key"。**无 fix PR**。
- [#94876](https://github.com/NousResearch/hermes-agent/issues/94876) `[OPEN][type/security]` `/debug` 未经同意非交互上传敏感会话数据（重开 #22016）。**无 fix PR**。
- [#91612](https://github.com/NousResearch/hermes-agent/issues/91612) `[OPEN]` Skills Hub 沙箱阻止自身外链与剪贴板操作。
- [#101880](https://github.com/NousResearch/hermes-agent/issues/101880) `[OPEN]` macOS 打印 Google Doc 触发 PrintCore SIGSEGV 崩溃。

**今日已修复/关闭**
- [#116416](https://github.com/NousResearch/hermes-agent/issues/116416) `[CLOSED]` 网关在 dashboard 内进程运行时状态误报为 stopped。
- [#108558](https://github.com/NousResearch/hermes-agent/issues/108558) `[CLOSED]` 推理模型在内部输出上限下被"饿死"返回空响应。

**趋势判断**：**Windows 平台是今日稳定性重灾区**（3 条 P2 集中爆发，且均无 fix PR），建议维护者优先排期。

---

## 6. 功能请求与路线图信号

| Issue | 诉求 | 纳入下一版本的可能性 |
|---|---|---|
| [#116305](https://github.com/NousResearch/hermes-agent/issues/116305) | Desktop 插件 SDK 钩子（composer/settings/session/sidebar/bridge） | **较高** — 已有目录收录基础，是生态扩张主方向 |
| [#100285](https://github.com/NousResearch/hermes-agent/issues/100285) | 项目/看板/卡片的用户自定义标签 | 中 — 已有 kanban 相关 PR 活动，属自然延伸 |
| [#95743](https://github.com/NousResearch/hermes-agent/issues/95743) `[CLOSED]` | OpenAI provider 增加 Authorization Code OAuth（企业环境） | 已关闭，方向或已纳入 |
| [#83080](https://github.com/NousResearch/hermes-agent/issues/83080) `[CLOSED]` | 自定义端点用于 image/video 生成 | 已关闭 |
| [#98852](https://github.com/NousResearch/hermes-agent/issues/98852) `[CLOSED]` | "X 小时后重试"按钮应对用量上限 | 已关闭 |
| [#116395](https://github.com/NousResearch/hermes-agent/issues/116395) | BlueBubbles 文档补齐（webhook URL、启用陷阱、多用户身份） | 高 — 配合 #116401 一并推进 |
| [#116439](https://github.com/NousResearch/hermes-agent/pull/116439) | 注册并文档化 tool search 延迟配置 | **已有 PR**（待合并） |
| [#116442](https://github.com/NousResearch/hermes-agent/pull/116442) | `/usage` 增加 GitHub Copilot 配额抓取 | **已有 PR**（待合并） |

**路线图信号**：插件 SDK、BlueBubbles 修复+文档、`/usage` 多 provider 配额、工具搜索配置化，是当前最可能进入下一版本的候选。

---

## 7. 用户反馈摘要

- **Provider 稳定性是最大痛点**：#97548 用户指出同一 provider/model 在 Codex 中流畅、在 Hermes Desktop 中却间歇性卡顿；#107307 反映 Pro 计划下 Codex 报错中断工作；#99943 指出云端大窗口被本地 Ollama 配置"污染"。核心不满：**同一模型在不同客户端行为不一致**。
- **Windows 体验集中吐槽**：#116376、#116375、#116384、#106716 均来自 Windows 用户，涉及进程残留、更新失败、SSH 命令行超限。使用场景为"git 安装 + 解包 Electron 桌面版"。
- **隐私担忧**：#94876 用户对 `/debug` 未经同意上传会话表示强烈不安，属安全信任层面反馈。
- **正向信号**：多条功能 Issue（#83080、#85426、#98852、#95743）被顺利关闭，说明用户提出的实用诉求能被及时消化；插件作者（apoapostolov 等）活跃提交 Desktop 插件，社区生态在自发成长。

**总体满意度**：功能采纳积极，但**平台一致性（尤其 Windows）与 Provider 行为稳定性**是拉低体验的主要因素。

---

## 8. 待处理积压（提醒维护者关注）

| Issue/PR | 类型 | 已开放时长 | 风险 |
|---|---|---|---|
| [#62810](https://github.com/NousResearch/hermes-agent/issues/62810) | CLI 退出码兼容性（exit 1） | 自 2026-07-11（约 2 个月） | 影响脚本/自动化集成 |
| [#34372](https://github.com/NousResearch/hermes-agent/issues/34372) | BlueBubbles 重复处理 | 自 2026-05-29（约 4 个月） | 有 fix PR #116401，可尽快合并 |
| [#30708](https://github.com/NousResearch/hermes-agent/issues/30708) | BlueBubbles 无入站去重 | 自 2026-05-23（约 4 个月） | 与 #34372 同源，建议合并处理 |
| [#88584](https://github.com/NousResearch/hermes-agent/issues/88584) | Nous 集成自动合并被阻塞 | 自 2026-08-17，120 条评论 | **高关注度、长期无解**，需专项跟进 |
| [#99943](https://github.com/NousResearch/hermes-agent/issues/99943) | 压缩器窗口被钳制 | 自 2026-09-01 | 影响云 provider 长上下文 |
| [#96715](https://github.com/NousResearch/hermes-agent/issues/96715) | config set 误报 | 自 2026-08-27 | 影响配置可用性 |
| [#94876](https://github.com/NousResearch/hermes-agent/issues/94876) | `/debug` 隐私问题 | 自 2026-08-25（重开） | **安全类，建议优先** |

**积压健康度评估**：单日 35 条 PR 收口显示维护节奏强劲，但 BlueBubbles 系列（#30708/#34372）与 CLI 兼容性（#62810）已积压 2–4 个月，且均属"有明确方案却未落地"的类型，建议纳入近期 sprint。

---

*本日报基于 2026-09-20 提供的 GitHub 数据快照生成，指标仅反映当日窗口内的活动。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
**日期：2026-09-20** ｜ 数据源：sipeed/picoclaw GitHub

---

## 1. 今日速览

- 过去 24 小时项目活跃度**偏低**：仅 1 条 Issue 更新、1 条 PR 关闭，无新版本发布。
- 唯一新动态是一条 **CRITICAL 级别的基础设施故障**：官网 `picoclaw.io` 的 TLS 证书于 2026-09-10 过期，全站对所有浏览器不可访问。
- 该 Issue 已被标记 `stale`，说明**可能长期无人处理**，与 `CRITICAL` 标签形成明显矛盾，是当前最需要关注的风险点。
- 唯一关闭的 PR #1349（QQ 渠道多媒体消息支持）历时约 6 个月终于落地，属于渠道能力增强的正向进展。
- 综合评估：**项目健康度中等偏弱** —— 代码侧有正常流转，但面向用户的官方入口处于不可用状态，且缺乏版本发布节奏。

---

## 2. 版本发布

无新版本发布（过去 24 小时 Releases 数量为 0），本节省略。

---

## 3. 项目进展

**PR #1349 — feat(qq): 支持解析与回复更多附件类型** ｜ [链接](https://github.com/sipeed/picoclaw/pull/1349)
- 状态：`CLOSED`（数据标注为「已合并/关闭」，无法区分是合并还是直接关闭，建议维护者确认）
- 作者：aishannon ｜ 创建：2026-03-11 ｜ 更新：2026-09-18 ｜ 👍 0
- 标签：`type: enhancement`、`domain: channel`、`go`
- 推进内容（据摘要）：
  1. 支持解析 QQ 频道 **emoji 结构**；
  2. 支持接收 QQ 频道的**语音、图片、视频、文件**消息；
  3. 支持以本地**语音/图片/视频/文件**附件形式回复（发送前先上传）；
  4. 回复优先使用 **Markdown** 消息，失败后降级到其他格式。

**推进幅度评估**：该 PR 把 QQ 渠道从「文本为主」提升到「多媒体全量收发 + Markdown 优先」的能力层级，是渠道适配层较实质的一次增强。但该 PR 自 3 月创建、9 月才关闭，**生命周期约 6 个月**，反映出渠道类 PR 的评审/合并周期偏长。今日整体向前推进幅度：**单一渠道功能增量，无核心架构或跨模块变化**。

---

## 4. 社区热点

今日讨论热度整体很低，两个条目均无高互动：

| 条目 | 类型 | 评论 | 👍 | 链接 |
|---|---|---|---|---|
| #3377 TLS 证书过期 | Issue | 1 | 1 | [链接](https://github.com/sipeed/picoclaw/issues/3377) |
| #1349 QQ 附件类型支持 | PR | 数据缺失（undefined） | 0 | [链接](https://github.com/sipeed/picoclaw/pull/1349) |

**背后诉求分析**：
- #3377 是**唯一具备真实外部影响**的讨论。诉求明确且紧迫：官网是仓库 README 中对外链接的项目主页，证书过期导致「每一个浏览器、每一个 TLS 客户端」都拒绝连接，直接影响新用户的第一印象与信任建立。评论 1 条、👍 1 条说明曝光度仍低，**存在被忽视的风险**。
- #1349 评论数据缺失，无法评估社区参与度；从 👍 0 看，社区关注度不高，属于维护者/贡献者之间的内部推进。

---

## 5. Bug 与稳定性

按严重程度排列：

**🔴 CRITICAL — #3377 官网 TLS 证书过期，站点全面不可访问**
- 链接：[sipeed/picoclaw/issues/3377](https://github.com/sipeed/picoclaw/issues/3377)
- 作者：dimonb ｜ 创建：2026-09-12 ｜ 更新：2026-09-19 ｜ 评论：1 ｜ 👍：1
- 状态：`OPEN` + `stale` + `CRITICAL`
- 事实描述：`https://picoclaw.io` 所服务的 TLS 证书已于 **2026-09-10 23:59:59 UTC** 过期。所有浏览器与 TLS 客户端均拒绝连接，站点对所有访客实际处于宕机状态。
- 影响面：非代码缺陷，而是**运维/发布链路问题**；影响的是项目对外形象、文档可达性与潜在用户转化。
- 是否已有 fix PR：**数据中未见对应修复 PR**。
- 额外风险提示：该 Issue 被自动打上 `stale` 标签，若仓库启用了 stale 机器人自动关闭策略，**这条 CRITICAL 问题可能被误关闭**，建议维护者立即手动 pin 或豁免。

> 今日未报告代码层面的崩溃、回归或功能性 Bug。

---

## 6. 功能请求与路线图信号

今日**没有新的功能请求型 Issue**。可纳入路线图判断的信号仅来自已关闭的 PR #1349：

- **QQ 渠道多媒体能力（emoji / 语音 / 图片 / 视频 / 文件收发 + Markdown 优先回复）** —— 已被实现并关闭，说明多模态消息处理是渠道适配方向上的既有共识。
- 推断信号：若 #1349 确实已合并，则下一版本很可能包含「QQ 渠道多模态支持」这一条目；若仅为关闭未合并，则该能力仍存在空缺，需要重新排期。
- 建议：结合 #1349 的最终归属（merged vs. closed）更新 CHANGELOG 与渠道能力矩阵。

---

## 7. 用户反馈摘要

今日可提炼的用户反馈来源有限（仅 1 条 Issue 评论），摘要如下：

- **痛点 1：官方入口不可用。** 用户 dimonb 指出证书过期已造成「站点对所有访客宕机」，并强调 **time-sensitive（时间敏感）** —— 拖得越久影响越大。这属于典型的「项目代码没问题、但外部感知很差」的体验断层。
- **痛点 2：响应链路缺失。** 该问题 9-12 提出、9-19 仍有更新，却只累积了 1 条评论，且被标记 stale，侧面反映**基础设施类问题缺少明确的责任人与 SLA**。
- **正向信号：** PR #1349 显示社区贡献者持续在渠道适配（QQ）上投入，说明项目在 IM 生态集成方向仍具吸引力。
- 使用场景推断：从 Issue 与 PR 内容看，PicoClaw 的用户/贡献者关注两条主线 —— ① 对外品牌与文档可达性；② 多 IM 渠道（QQ 等）的消息互通能力。

---

## 8. 待处理积压

| 条目 | 类型 | 滞留时长 | 风险 | 链接 |
|---|---|---|---|---|
| #3377 TLS 证书过期（CRITICAL + stale） | Issue | 创建至今约 8 天，证书已过期约 10 天 | 🔴 高：官方站点持续不可用，且面临被 stale 策略自动关闭 | [链接](https://github.com/sipeed/picoclaw/issues/3377) |
| #1349 QQ 附件支持 | PR | 创建 2026-03-11 → 更新 2026-09-18，约 6 个月 | 🟡 中：已关闭，但需确认是合并还是搁置 | [链接](https://github.com/sipeed/picoclaw/pull/1349) |

**维护者行动建议**：
1. **优先处理 #3377**：续期或更换 `picoclaw.io` 证书，并在恢复后回复 Issue 说明处理结果；同时将其从 stale 流程中豁免。
2. **核实 #1349 的最终状态**：若未合并，明确说明原因并给出后续方案；若已合并，补充 release note。
3. **建立基础设施类问题的响应机制**：为 `CRITICAL` 标签设置自动豁免 stale 与通知规则，避免高优先级问题被自动化流程淹没。

---

**数据说明**：本日报严格基于所提供的 GitHub 数据生成。PR #1349 的评论数缺失（undefined）、合并状态未明确，相关结论已作不确定性标注；「滞留时长」为基于创建/更新日期的时间差推算，非平台官方字段。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-09-20

---

## 1. 今日速览

NanoClaw 在过去 24 小时内保持中等活跃度：共收到 3 个新 Issue 和 5 个待处理 PR，均无被关闭或合并。项目社区仍在专注于改进 CLI 的健壮性与功能 completeness，尤其是在配置校验、运行时健康监测及服务提供商扩展方面。没有新版本发布，但多个潜在特性和修复正在开发中。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

当前所有 5 个 PR 均处于待合并状态，未见今日合并或关闭。以下为最具潜力的进展：

- **PR #3646** (`glifocat`)  
  修复 Sweep 模块中硬编码的 idle kill 超时为可配置项，并统一应用于两种 kill 路径。解决了本地模型响应缓慢时被误杀的问题。  
  🔗 [https://github.com/nanocoai/nanoclaw/pull/3646](https://github.com/nanocoai/nanoclaw/pull/3646)

- **PR #3856** (`prathish-ks`)  
  新增 `ncl health` 命令，实现零依赖本地只读健康检查，适用于宿主进程Down时的诊断场景。填补此前缺失的重要调试工具。  
  🔗 [https://github.com/nanocoai/nanoclaw/pull/3856](https://github.com/nanocoai/nanoclaw/pull/3856)

- **PR #3857** (`Z-Mackintosh`)  
  添加 Pi Coding Agent 提供商支持，通过 `/add-pi` 技能安装。拓展了第三方 LLM 提供商生态。  
  🔗 [https://github.com/nanocoai/nanoclaw/pull/3857](https://github.com/nanocoai/nanoclaw/pull/3857)

---

## 4. 社区热点

### 最活跃 Issue：#3855 – CLI 参数缺少输入验证

**发起人:** bmultini  
**类型:** Bug / Triage unresolved  
**链接:** [Issue #3855](https://github.com/nanocoai/nanoclaw/issues/3855)

**摘要：**  
`ncl groups config update --model` 接受任意字符串，未做任何验证，可能导致用户误配置模型名称，无警告提示。

**分析：**  
反映出 NanoClaw CLI 在用户输入校验方面的薄弱环节，尤其影响新手用户体验。建议引入枚举或模型列表提示机制。

---

## 5. Bug 与稳定性

| 序号 | 描述 | 严重性 | 是否有 Fix PR |
|------|------|--------|----------------|
| #3855 | `groups config update --model` 不校验参数合法性 | 中 | ❌ |
| #3854 | `groups/<folder>/CLAUDE.md` 编辑在 spawn 时被静默丢弃 | 中 | ❌ |
| #3680 | 允许列表绕过漏洞 (`allowlisted-extra` mount bypass) | 高 | ✅ (已提交 PR) |

🔗 [PR #3680](https://github.com/nanocoai/nanoclaw/pull/3680)

---

## 6. 功能请求与路线图信号

- **#3853**  
  用户 javexed 报告 `CLAUDE.md` 中的 `ncl` 命令表格不完整，缺少 `policies`, `messaging-groups send`, `sessions history` 等命令文档。  
  🔗 [Issue #3853](https://github.com/nanocoai/nanoclaw/issues/3853)  
  表示文档维护滞后于代码更新，影响开发者体验。

- **#3857**  
  新提供商集成：Pi Coding Agent。若合并，将丰富 NanoClaw 的多代理能力支持。  
  🔗 [PR #3857](https://github.com/nanocoai/nanoclaw/pull/3857)

- **#3856**  
  `ncl health` 功能增强运维可观测性，有助于生产环境故障排查。  
  🔗 [PR #3856](https://github.com/nanocoai/nanoclaw/pull/3856)

---

## 7. 用户反馈摘要

- **bmultini** 多次报告 CLI 行为不一致问题（如参数验证不足、编辑文件被丢弃），暴露出用户期望更清晰的反馈机制。
- **javexed** 关注文档同步问题，表示希望文档能快速跟进新功能。
- **社区未表现出对缺陷的强烈不满，但反映出对基础使用体验的关切。**

---

## 8. 待处理积压

以下 PR 长时间未合并，建议维护者尽快评估优先级：

| 序号 | 描述 | 最后更新 | 链接 |
|------|------|----------|------|
| #3646 | Sweep idle timeout 可配置化 | 2026-09-19 | [PR #3646](https://github.com/nanocoai/nanoclaw/pull/3646) |
| #3680 | 容器挂载安全绕过修复 | 2026-09-19 | [PR #3680](https://github.com/nanocoai/nanoclaw/pull/3680) |
| #3420 | macOS 状态栏标签适配 slug | 2026-09-18 | [PR #3420](https://github.com/nanocoai/nanoclaw/pull/3420) |

---

如需进一步的数据分析或生成自动汇总报告，请随时告知！

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 · 2026-09-20

> 数据来源：IronClaw (github.com/nearai/ironclaw) GitHub 公开数据
> 统计窗口：过去 24 小时（2026-09-19 ~ 2026-09-20）

---

## 1. 今日速览

今日 IronClaw 整体处于**低活跃度、零合并**状态：过去 24 小时无 Issues 更新、无新版本发布，仅 2 条 PR 有活动且全部处于 OPEN 待合并状态，合并/关闭数为 0。项目当前的主要动作集中在**存量 PR 的推进与刷新**上，而非新功能落地或缺陷收口。值得注意的是，两条待合并 PR 分别指向「身份/权限宿主集成」（#7499，XL 规模）和「扩展激活缺陷修复」（#8102），前者是首次贡献者提交的大型提案，后者是影响真实部署的功能性修复——两者均卡在待合并队列中，说明当前**评审吞吐是主要瓶颈**。整体健康度评级：**稳定但推进缓慢（Review-Bound）**。

---

## 2. 版本发布

今日无新版本发布，无 Release 记录，本节无内容。

---

## 3. 项目进展

**今日合并/关闭 PR：0 条。**

项目在代码主干层面今日**未向前推进任何已合入的变更**。以下两条 PR 虽有更新，但仍停留在待合并状态，尚未产生实际进展：

| PR | 状态 | 规模/风险 | 性质 |
|---|---|---|---|
| [#7499](https://github.com/nearai/ironclaw/pull/7499) | OPEN | XL / low risk | 功能提案（首次贡献者） |
| [#8102](https://github.com/nearai/ironclaw/pull/8102) | OPEN | 未标注 | 缺陷修复 |

**进展评估：0%（今日无合入）。** 从项目节奏看，这是典型的「输入有余、输出停滞」日——有两条待处理变更在队列中，但缺乏合并动作来消化积压。

---

## 4. 社区热点

今日 Issues 讨论量为 0，两条 PR 的评论数与点赞数均为 `undefined`（数据未提供，均为 0 👍）。因此**无法基于互动指标识别真正的社区热点**，仅能从变更本身的关注点推断讨论焦点：

- **热点候选 1：[PR #7499](https://github.com/nearai/ironclaw/pull/7499) — IdentyClaw Passport 宿主中介集成**
  涉及 `builtin.idcp` 宿主接缝、策略授权 / AskAlways 豁免机制，以及 `deploy/identyclaw/` 下的实践者工具包（Node CLI + 可选 `:3921` 回环辅助进程）。诉求核心是：让**无进程（processless）的 IronClaw 智能体**能够在不依赖 shell、不安装扩展的前提下调用 IdentyClaw Passport，降低身份能力的接入门槛。
- **热点候选 2：[PR #8102](https://github.com/nearai/ironclaw/pull/8102) — Provider 实例就绪状态实时解析**
  诉求核心是修复**通过 Web UI（管理员配置）而非环境变量配置 Google OAuth 客户端的部署无法激活 Gmail / Google Calendar** 的问题。

**分析：** 两条 PR 共同指向一个主题——**配置路径与集成接缝的鲁棒性**。社区（此处主要是贡献者）关注的不是新花哨能力，而是「同一功能在不同配置路径下能否一致工作」，这是项目从实验走向可用部署的信号。

---

## 5. Bug 与稳定性

今日无新开 Issue，未报告崩溃或回归。唯一的缺陷相关变更是 PR #8102，按影响面评估如下：

### 🔴 中高严重度 · 扩展激活失败（已有 Fix PR）
**[PR #8102](https://github.com/nearai/ironclaw/pull/8102) — fix(extensions): resolve provider-instance readiness live, administrator configuration first**
- **现象：** Gmail / Google Calendar 在任何「操作者通过 **Web UI** 配置 Google OAuth 客户端（管理员配置）」的部署上**无法激活**。
- **失败链路：** OAuth 全流程（consent → code → token exchange）均正常完成，但**激活阶段**以 `Provider...` 错误失败——即授权成功、激活失败，属于典型的「就绪状态判定与实际配置不一致」问题。
- **影响面：** 仅影响使用 Web UI 配置路径的部署；使用环境变量配置的部署不受影响。但对受影响用户而言是**功能性阻断**（扩展完全不可用）。
- **修复方向：** 实时解析 provider-instance 就绪状态，并优先采用管理员配置。
- **状态：** ✅ 已有 Fix PR（#8102），**尚未合并**。

> 说明：由于今日 Issues 更新为 0，无其他 Bug、崩溃或回归记录可评估。

---

## 6. 功能请求与路线图信号

今日无新功能请求类 Issue。基于现有 PR，可识别的路线图信号如下：

### 信号 A：IdentyClaw Passport 的原生宿主集成（可能纳入后续版本）
[PR #7499](https://github.com/nearai/ironclaw/pull/7499) 提出以「薄宿主接缝」方式接入身份能力，而非走可安装扩展路线。若被采纳，意味着 IronClaw 的方向是：
- 为**无进程智能体**提供免 shell、免扩展安装的内置身份调用路径；
- 引入**策略授权 / AskAlways 豁免**的权限模型；
- 提供面向实践者的部署工具包（`deploy/identyclaw/`）。

该 PR 标注 `scope: docs` + `scope: dependencies`、`risk: low`，但 `size: XL`——**规模大而风险低**，通常意味着评审重点在设计与文档一致性，而非运行时风险。这是最可能影响下一版本能力边界的方向性变更。

### 信号 B：多配置路径一致性
[PR #8102](https://github.com/nearai/ironclaw/pull/8102) 表明项目开始重视「管理员配置优先」这一语义，可能推动后续扩展系统统一就绪状态解析逻辑。

**判断：** 若两者合入，下一版本大概率会包含「身份接缝 + 扩展配置一致性」两项内容。但目前均为 OPEN，**尚无确证会被纳入**。

---

## 7. 用户反馈摘要

⚠️ **数据限制说明：** 今日 Issues 更新为 0 条，两条 PR 的评论数为 `undefined`，因此**无法从 Issue 评论中提炼真实用户痛点、使用场景或满意度反馈**。

仅能从 PR 摘要中提取一条**可确证的用户场景痛点**（来源：[PR #8102](https://github.com/nearai/ironclaw/pull/8102) 摘要）：

- **使用场景：** 操作者通过 Web UI（管理员配置）而非环境变量配置 Google OAuth 客户端。
- **痛点：** OAuth 授权端到端成功，但激活失败，且错误信息指向 `Provider...`（信息不完整），排查困难。
- **不满意点：** 配置路径之间存在行为差异，Web UI 配置未被正确识别为就绪状态。
- **潜在满意点：** 无正面反馈数据可提取。

建议后续补充 Issues 评论数据以形成有效的用户声音分析。

---

## 8. 待处理积压

今日虽无新 Issue，但**两条 PR 均处于待处理状态**，其中一条已明显滞留：

### ⏳ 长期滞留 · 高优先级关注
**[PR #7499](https://github.com/nearai/ironclaw/pull/7499) — feat(identyclaw): host-mediated Passport for practitioners**
- **创建：** 2026-08-11 ｜ **最近更新：** 2026-09-19
- **滞留时长：** 约 **39 天（5 周+）仍未合并**
- **风险标签：** `size: XL`、`risk: low`、`contributor: new`（**首次贡献者**）
- **提醒维护者：**
  1. **首次贡献者 + XL 规模**是典型的评审劝退组合，长期无合并结果可能直接导致贡献者流失；
  2. 该 PR 涉及权限模型（policy grant / AskAlways 豁免）与部署工具包，若设计方向不被认可，应尽早给出明确反馈而非静默滞留；
  3. 建议明确给出「接受 / 需拆分 / 需重设计」的结论性回复。

### ⏳ 短期待处理
**[PR #8102](https://github.com/nearai/ironclaw/pull/8102) — fix(extensions): provider-instance readiness**
- **创建：** 2026-09-18 ｜ **最近更新：** 2026-09-18
- 滞留仅 2 天，属正常评审周期。但因其修复的是**功能性阻断缺陷**，建议优先评审并尽快合并。

---

## 📊 项目健康度小结

| 维度 | 今日表现 | 评价 |
|---|---|---|
| 活跃度 | 0 Issues / 2 PR 更新 / 0 Release | 低 |
| 交付吞吐 | 0 合并、0 关闭 | 停滞 |
| 缺陷响应 | 1 个功能性缺陷已有 Fix PR | 响应积极 |
| 评审瓶颈 | 1 条 PR 滞留 39 天（首次贡献者） | ⚠️ 需关注 |
| 社区互动 | 无评论/反应数据 | 不可评估 |

**结论：** 项目今日无回归、无新增风险，稳定性良好；但**合并吞吐为零 + 首次贡献者 PR 长期滞留**是当前最需干预的健康度问题。建议维护者优先消化 #8102（缺陷修复），并对 #7499 给出结论性评审意见。

---

*注：本报告严格基于所提供的 GitHub 数据生成。评论数、点赞数等互动指标为 `undefined`，相关分析已作数据缺失标注，未做推测性补充。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 —— 2026-09-20

---

## 1. 今日速览

- 过去 24 小时内，LobsterAI 共处理了 **6 条 PR 更新** 和 **2 条 Issue 更新**，所有更新均已于 2026-09-19 被标记为 `stale` 并关闭，显示出项目维护活跃度有所下降。
- 所有 6 条 PR 均为 stale 自动清理所致，未见來自社区的新的开发贡献或热门功能变更。
- 虽然没有新的版本发布，但多个重要的 Bug 修复已在 PR 中完成并关闭，表明项目在技术债务和稳定性方面仍在持续推进。
- 社区活跃度较低，仅有 1 个开放的 Issue 被动更新。

---

## 2. 版本发布

- **今日无新版本发布**

---

## 3. 项目进展

以下是今日关闭的重要 PR，涵盖性能优化、功能增强、构建兼容性及数据安全等多个方面：

| PR 编号 | 类型 | 描述 | 链接 |
|--------|------|------|------|
| #1069 | 重构 | 拆分 `CoworkSessionDetail.tsx`（2100+ 行）为多个模块化文件，提升可维护性与渲染性能 | [🔗](https://github.com/netease-youdao/LobsterAI/pull/1069) |
| #1072 | Bug 修复 | 修复 SQLite 存储层存在的 CASCADE 失效、非原子写、初始化超时等数据完整性问题 | [🔗](https://github.com/netease-youdao/LobsterAI/pull/1072) |
| #1076 | Bug 修复 | 修复定时任务迁移时写入失败仍标记完成的问题，防止数据永久丢失 | [🔗](https://github.com/netease-youdao/LobsterAI/pull/1076) |
| #1070 | 功能增强 | 支持 per-session MCP server 开关控制，提升灵活性 | [🔗](https://github.com/netease-youdao/LobsterAI/pull/1070) |
| #1075 | 构建优化 | 修复 Windows 安装 WSL 时构建失败的问题，提升跨平台兼容性 | [🔗](https://github.com/netease-youdao/LobsterAI/pull/1075) |
| #1077 | UX 优化 | 删除当前 agent 后，自动刷新侧栏任务列表，提升一致性 | [🔗](https://github.com/netease-youdao/LobsterAI/pull/1077) |

这些 PR 涵盖前端性能优化、数据库安全性、跨平台兼容性等多个维度，反映出项目团队在技术治理与用户体验方面的持续关注。

---

## 4. 社区热点

暂无高评论或反应的 Issues 或 PRs。唯一活跃的 Issue 为：

- **#1014 [OPEN]** – 用户希望添加插件描述以提升 Dispatch 工具发现性  
  链接: [https://github.com/netease-youdao/LobsterAI/issues/1014](https://github.com/netease-youdao/LobsterAI/issues/1014)

该 Issue 由来自 VisionAIrySE 的用户提交，旨在通过增强工具元信息来提升第三方平台（如 Dispatch）的集成能力。目前仍处于开放状态，暂未收到更多评论。

---

## 5. Bug 与稳定性

| Issue / PR | 描述 | 严重级别 | 是否有 Fix |
|------------|------|-----------|-------------|
| #1071 / #1072 | SQLite CASCADE 失效导致孤儿消息堆积、非原子写入引发崩溃风险、初始化超时后永久故障 | 高危 | ✅ 已修复 (#1072) |
| #1076 | 定时任务迁移失败未通知导致数据丢失 | 高却 | ✅ 已修复 (#1076) |

虽然当前未见新的 Bug 报告，但上述两个高危问题已通过 PR 得到有效解决，有助于提升系统稳定性。

---

## 6. 功能请求与路线图信号

- **#1014 请求添加插件描述信息** 以提升工具在 Dispatch 平台上的发现性。
    - 此类请求有助于提升插件生态的可发现性，有一定产品价值。
    - 当前未与任何 PR 关联，建议纳入近期迭代计划。

---

## 7. 用户反馈摘要

- **#1014 提交者来自第三方平台 Dispatch**，他们希望通过增强插件元信息（如描述）来提升工具使用率。
    - 体现了用户希望项目更好地融入更广泛的 AI 开发者生态系统。
- **#1071 提交者为 MaoQianTu**，对 SQLite 存储层提出了一系列深入的安全与完整性问题。
    - 反映了对系统底层稳定性的重视，可能来自专业开发者或运维人员。

---

## 8. 待处理积压

以下为长期未活跃或未关闭的重要 Issue：

| Issue | 状态 | 最后更新时间 | 链接 |
|-------|------|----------------|------|
| #1014 | OPEN | 2026-09-19 | [🔗](https://github.com/netease-youdao/LobsterAI/issues/1014) |
| #1071 | CLOSED (Stale) | 2026-09-19 | [🔗](https://github.com/netease-youdao/LobsterAI/issues/1071) |

> ⚠️ 建议维护者回顾 #1014，评估是否将其作为提升插件生态的一部分功能纳入 roadmap。

---

如需进一步分析或历史趋势追踪，可随时联系。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 — 2026-09-20

## 1. 今日速览
- 过去24小时，Moltis 项目整体活跃度**偏低**：仅新增 1 条 Issue 和 1 条 PR，无新版本发布，无 PR 合并或关闭。
- 新 Issue #1277 报告了一个高优先级 Bug：`spawn_agent` 将 `active_tools: []` 误判为空白名单，导致子代理获得零工具。
- 新 PR #1276 由社区贡献者 Kaboka22 提交，为 Groq 提供一等公民支持，并改进零参数工具 schema 与 mutation 结果解析，属于较大功能推进，尚待维护者评审。
- 社区互动暂时沉寂，两条内容均无评论和点赞，项目健康度稳定但需关注后续评审与修复进度。

## 2. 版本发布
无新版本发布，本节省略。

## 3. 项目进展
今日**无合并或关闭的 PR**，主分支未发生代码推进。唯一待合并 PR 为：

- **#1276 [OPEN] Groq as a first-class provider, strict zero-parameter tool schemas, and mutation results that parse**  
  作者：Kaboka22 | 创建：2026-09-19 | 更新：2026-09-19 | 评论：未显示 | 👍：0  
  链接：https://github.com/moltis-org/moltis/pull/1276  
  摘要：该 PR 若被接受，将显著增强多模型提供商支持——Groq 从 genai fallback 升级为真正的 OpenAI 兼容 provider，所有已配置的 Groq 模型可注册工具并支持模型发现；同时将 Groq Compound 标记为不支持工具，并引入严格的零参数工具 schema 和可解析的 mutation 结果。该 PR 目前处于 OPEN 状态，是今日项目向前推进的主要潜在增量，但尚未合并，因此今日实际进展为 0。

## 4. 社区热点
由于过去24小时仅有两个条目且均无评论、无点赞，热点即为这两条内容：

- **Issue #1277** [OPEN] [bug] spawn_agent treats `active_tools: []` as an empty whitelist — sub-agent gets zero tools  
  链接：https://github.com/moltis-org/moltis/issues/1277  
  分析：用户 letsrock85 提交了详细的 preflight checklist，表明其使用最新版本并搜索过现有 issue。该问题反映用户对 `spawn_agent` 中 `active_tools` 空数组语义的预期与实现不一致：用户可能认为空数组表示“不限制”或“使用默认”，但当前实现将其视为空白名单，导致子代理无工具可用。这属于影响核心功能的语义缺陷。

- **PR #1276** [OPEN] Groq as a first-class provider, strict zero-parameter tool schemas, and mutation results that parse  
  链接：https://github.com/moltis-org/moltis/pull/1276  
  分析：贡献者 Kaboka22 积极扩展 provider 生态，解决 Groq 长期 fallback 的问题，并改进工具 schema 与结果解析。这显示社区对多模型兼容性和工具调用可靠性的诉求。

## 5. Bug 与稳定性
今日报告 1 个 Bug：

- **#1277 [OPEN] [bug] spawn_agent treats `active_tools: []` as an empty whitelist — sub-agent gets zero tools**  
  严重程度：**高**。  
  影响：当调用 `spawn_agent` 并传入 `active_tools: []` 时，子代理被赋予零工具，可能导致依赖工具的代理任务完全失效。  
  是否已有 fix PR：**否**。目前仅有 Issue 报告，尚无对应修复 PR。  
  链接：https://github.com/moltis-org/moltis/issues/1277

无崩溃、回归或其他稳定性问题报告。

## 6. 功能请求与路线图信号
今日无独立的功能请求 Issue，但以下 PR 和 Issue 可能影响下一版本路线图：

- **PR #1276** 带来的能力可能被纳入下一版本：
  - Groq 成为一等公民 provider，支持工具注册与模型发现；
  - 严格的零参数工具 schema；
  - 可解析的 mutation 结果。
  这些改进直接提升多模型兼容性和工具调用可靠性，若评审通过，可能成为下一个版本的重要特性。

- **Issue #1277** 可能推动对 `active_tools` 语义的文档澄清或行为调整。若维护者确认空数组应表示“不限制”，则需修复；若表示“空白名单”，则需在文档中明确说明。

## 7. 用户反馈摘要
今日可提炼的用户反馈有限：

- **Issue #1277 作者 letsrock85**：使用最新版本，痛点在于 `spawn_agent` 的 `active_tools: []` 行为不符合预期，导致子代理无工具。使用场景涉及子代理工具配置。该用户提交了规范的 preflight checklist，表明其认真排查过现有 issue，属于高质量反馈。
- **PR #1276 作者 Kaboka22**：通过代码贡献解决 Groq provider 长期 fallback 问题，反映社区对多 provider 支持和工具调用稳定性的正面诉求。该 PR 摘要详细，显示贡献者对 OpenAI 兼容层和工具 schema 有较深理解。

整体来看，今日用户反馈以缺陷报告和功能贡献为主，无满意度评价或负面情绪表达。

## 8. 待处理积压
今日数据未显示长期未响应的重要 Issue 或 PR。但以下两项建议维护者优先关注：

- **Issue #1277**：高优先级 Bug，无 fix PR，建议尽快确认 `active_tools: []` 的预期语义并修复。  
  链接：https://github.com/moltis-org/moltis/issues/1277
- **PR #1276**：较大功能 PR，若长时间未评审可能成为积压，建议安排 review 以决定是否纳入下一版本。  
  链接：https://github.com/moltis-org/moltis/pull/1276

---

**总结**：2026-09-20，Moltis 项目处于低活跃状态，无版本发布与代码合并。今日核心关注点为高优先级 Bug #1277 和待评审功能 PR #1276。项目健康度整体稳定，但需维护者及时响应，以避免缺陷影响用户体验并推动社区贡献落地。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-09-20

---

## 1. 今日速览

CoPaw（QwenPaw）项目在过去 24 小时内社区活跃度较高，但**代码合并完全停滞**——10 条 Issue 全部处于 OPEN 状态，7 条 PR 无一合并或关闭，无新版本发布。Bug 报告占主导（7/10），集中爆发在 **v2.2.1** 的多模型兼容性（DeepSeek 拒绝嵌套 file/audio part）、Console 渲染容错缺失（lazy chunk 加载失败后界面死锁）以及 MCP OAuth 握手缺陷。功能请求方面，社区对 **插件治理管道的 pre-tool-call 策略钩子** 需求明确，已有对应 PR 提交。整体来看，项目当前处于"高输入、零输出"状态，维护者需尽快审查并合入已就绪的修复 PR 以缓解用户痛点。

---

## 2. 版本发布

无新版本发布。当前最新稳定版仍为 **v2.2.1**，多个 Issue 报告的 Bug 均可在此版本复现，亟待下个修复版本。

---

## 3. 项目进展

今日**无 PR 合并、无 Issue 关闭**，项目代码基线未向前推进。不过有多个针对性修复 PR 已提交待审：

| PR | 方向 | 关联 Issue | 状态 |
|---|---|---|---|
| [#7889](https://github.com/agentscope-ai/QwenPaw/pull/7889) | Console DOM 异变渲染错误恢复 | #7888 | 待审 |
| [#7886](https://github.com/agentscope-ai/QwenPaw/pull/7886) | Agent 处理 `input_audio` 未知变体拒绝 | #7876 | 待审 |
| [#7885](https://github.com/agentscope-ai/QwenPaw/pull/7885) | Agent 不支持文件载荷错误后重试 | #7883 | 待审 |
| [#7887](https://github.com/agentscope-ai/QwenPaw/pull/7887) | Agent 处理未知 audio part 拒绝（与 #7886 同源） | #7876 | 待审 |
| [#7880](https://github.com/agentscope-ai/QwenPaw/pull/7880) | 插件 pre-tool-call 策略钩子 | #7878 | 待审（首次贡献者） |

> ⚠️ #7886 与 #7887 功能高度重叠，维护者需协调避免重复合入。

---

## 4. 社区热点

**评论最多的 Issue：**

1. **[#7815](https://github.com/agentscope-ai/QwenPaw/issues/7815)** — *Console does not recover from a failed lazy page chunk load*（5 条评论，创建于 09-16，持续活跃至 09-19）  
   Lazy import 失败后 Console 全局死锁，重试机制形同虚设，必须整页刷新。这是影响所有 Console 用户的通用性稳定性问题，讨论延续 4 天尚未解决。

2. **[#7878](https://github.com/agentscope-ai/QwenPaw/issues/7878)** — *Expose a plugin-visible pre-tool-call policy hook*（3 条评论）  
   企业用户强烈需要在外部治理管道中注入自定义策略判定（如合规审批），绕过现有 monkey-patch 方案。已有 PR [#7880](https://github.com/agentscope-ai/QwenPaw/pull/7880) 响应。

3. **[#7888](https://github.com/agentscope-ai/QwenPaw/issues/7888)** — *Chat 页面 React commitPlacement insertBefore NotFoundError*（2 条评论）  
   浏览器扩展注入 `<font>` 标签导致 React DOM 树断裂，Chat 页面永久卡在 "Something went wrong"。已有修复 PR [#7889](https://github.com/agentscope-ai/QwenPaw/pull/7889)。

**背后诉求：** 用户对 **Console 渲染容错** 和 **多模型协议兼容性** 的呼声最高，这两类问题一旦触发即导致会话不可用，属于 P0 级体验阻断。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 严重（会话/页面不可用）

| # | Bug 描述 | 版本 | Fix PR |
|---|---|---|---|
| [#7815](https://github.com/agentscope-ai/QwenPaw/issues/7815) | Console lazy chunk 加载失败后全局死锁，导航全部卡在错误页 | — | ❌ 无 |
| [#7888](https://github.com/agentscope-ai/QwenPaw/issues/7888) | Chat 页面 React insertBefore NotFoundError，浏览器注入 `<font>` 包裹文本节点 | 2.2.1 | ✅ [#7889](https://github.com/agentscope-ai/QwenPaw/pull/7889) |
| [#7876](https://github.com/agentscope-ai/QwenPaw/issues/7876) | DeepSeek 拒绝 `input_audio` part（422 unknown variant），音频回退分类器未触发，一次 wav 发送永久杀死会话 | 2.2.1 | ✅ [#7886](https://github.com/agentscope-ai/QwenPaw/pull/7886) / [#7887](https://github.com/agentscope-ai/QwenPaw/pull/7887) |
| [#7883](https://github.com/agentscope-ai/QwenPaw/issues/7883) | DeepSeek 拒绝嵌套 file part（400 file must have file_id or file_data），#7597 修复后仍可复现 | 2.2.1 | ✅ [#7885](https://github.com/agentscope-ai/QwenPaw/pull/7885) |

### 🟡 中等（功能受限/体验受损）

| # | Bug 描述 | 版本 | Fix PR |
|---|---|---|---|
| [#7879](https://github.com/agentscope-ai/QwenPaw/issues/7879) | MCP OAuth 握手缺 `client_id/resource`，无法接入静态 Bearer Key 类型的 MCP Server（如企查查 QCC） | — | ❌ 无 |
| [#7881](https://github.com/agentscope-ai/QwenPaw/issues/7881) | kimi-code ACP runner 绕过边界/破坏性命令检查不均匀——Edit 被拦截，Write & Bash 完全放行 | 2.2.1 | ❌ 无 |
| [#7882](https://github.com/agentscope-ai/QwenPaw/issues/7882) | OpenCode "免费"模型 API 调用 403 FreeTierError，UI 仍标记为免费 | 2.2.1 | ❌ 无 |
| [#7877](https://github.com/agentscope-ai/QwenPaw/issues/7877) | 会话级工作目录面板：可视区仅约 3 行、「最近项目」恒为空、选目录后「应用」按钮仍禁用 | 2.2.1 | ❌ 无 |

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue | 对应 PR | 纳入判断 |
|---|---|---|---|
| 插件级 pre-tool-call 策略钩子（治理管道决策预言机） | [#7878](https://github.com/agentscope-ai/QwenPaw/issues/7878) | [#7880](https://github.com/agentscope-ai/QwenPaw/pull/7880)（首次贡献者，声称已完成回归+单测） | **高概率纳入** — 需求明确、PR 已就绪，属于插件生态治理核心能力 |
| PawApp SDK 与控制面重新设计 | — | [#7874](https://github.com/agentscope-ai/QwenPaw/pull/7874) | **观察** — 大型重构 PR，需核心维护者深度评审 |
| Creator create-video 控制面规范文档 | — | [#7875](https://github.com/agentscope-ai/QwenPaw/pull/7875) | **观察** — 纯文档 PR，依赖 #7874 架构落地 |

---

## 7. 用户反馈摘要

从 Issue 评论中提炼以下真实痛点：

- **聊天历史过短**（[#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884)）：用户强烈不满历史消息被截断，认为"讨论过的问题往上翻看不到了"，体验极差。这反映了底层上下文窗口管理策略与用户预期之间的落差。
- **模型兼容性反复踩坑**（[#7883](https://github.com/agentscope-ai/QwenPaw/issues/7883)、[#7876](https://github.com/agentscope-ai/QwenPaw/issues/7876)）：DeepSeek 等非 OpenAI 系模型对嵌套 file/audio part 的拒绝，导致用户一旦触发便**会话永久报废**，用户认为之前声称已修复的问题并未真正解决。
- **免费模型标注误导**（[#7882](https://github.com/agentscope-ai/QwenPaw/issues/7882)）：UI 标记为"免费"的 OpenCode 模型实际 API 不可用，用户感觉被"欺骗"。
- **MCP 生态接入门槛高**（[#7879](https://github.com/agentscope-ai/QwenPaw/issues/7879)）：企业用户（如企查查场景）无法用简单的 Bearer Key 接入 MCP，OAuth 流程强绑定不合理。
- **安全边界不一致**（[#7881](https://github.com/agentscope-ai/QwenPaw/issues/7881)）：kimi-code ACP 对 Edit 拦截但对 Write/Bash 放行，用户担心生产环境中破坏性命令逃逸。

---

## 8. 待处理积压

| 项 | 天数 | 风险 | 建议 |
|---|---|---|---|
| [#7815](https://github.com/agentscope-ai/QwenPaw/issues/7815) Console lazy chunk 死锁 | **5 天**（09-16 创建，0 关闭） | 🔴 高 — 影响所有 Console 用户，尚无 Fix PR | 维护者应优先定位并提交修复，或至少确认 #7889 的 error boundary 方案是否可覆盖此场景 |
| [#7879](https://github.com/agentscope-ai/QwenPaw/issues/7879) MCP OAuth 缺陷 | 1 天 | 🟡 中 — 阻塞企业用户接入 MCP 生态 | 需后端架构决策：是否支持 static Bearer 模式 |
| [#7881](https://github.com/agentscope-ai/QwenPaw/issues/7881) kimi-code ACP 安全边界不均 | 1 天 | 🟡 中 — 潜在安全风险 | 需安全团队评审 ACP runner 的命令检查逻辑 |
| 7 条待合并 PR（含 4 条 Bug 修复） | 0–1 天 | 🟡 中 — 合并延迟延长用户受影响窗口 | 建议维护者本周内完成 #7889、#7885、#7886/#7887 的评审合入，为 v2.2.2 做准备 |

---

> **健康度评估：⚠️ 中等风险** — 社区输入活跃但吞吐量为零，Bug 积压增长（尤其 #7815 已 5 天无解），多个 P0 级修复 PR 已就绪但未合入。建议维护者在本周内集中评审合并，尽快发布 v2.2.2 热修复版本。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-09-20

---

## 1. 今日速览

ZeroClaw 在过去 24 小时内维持高活跃度：Issues 更新 35 条（新开/活跃 23 条，关闭 12 条），PR 更新 50 条但 **无任何 PR 被合并**，无新版本发布。社区注意力集中在三个方面：**WhatsApp Web 通道的多处功能缺失与 Bug 暴露**、**安全策略审批绕过漏洞（S0 级）的连续报告**、以及围绕 **Anthropic prompt-cache TTL 可配置化** 的功能与实现讨论。多个架构级 RFC（SOP 持久化原语、投递回执、通道溯源）正处早期审议阶段，预示 v0.8.6–v0.9.0 路线图正在密集成型中。整体来看，项目开发侧输入旺盛但合并节奏偏慢，存在一定的 PR 积压压力。

---

## 2. 版本发布

今日无新版本发布。当前最新 Release 仍为空。

---

## 3. 项目进展

**今日合并/关闭的 PR：无。** 全部 50 条 PR 均处于待合并状态，合入数为 0。

今日关闭的 12 条 Issues 中，部分标记为已修复或已跟进，但对应的修复 PR 尚未合并至 master：

| Issue | 状态 | 对应修复/跟进 |
|-------|------|--------------|
| [#10853](https://github.com/zeroclaw-labs/zeroclaw/issues/10853) OpenCode session header follow-ups | CLOSED | 随 #10604 修复后跟进项已处理 |
| [#10759](https://github.com/zeroclaw-labs/zeroclaw/issues/10759) SOP RPC 缺失 failure_reason | CLOSED | #9930 已落地 |
| [#9649](https://github.com/zeroclaw-labs/zeroclaw/issues/9649) Agent parity row 1 测试更新 | CLOSED | PR 9319 seal 已上 master |
| [#10736](https://github.com/zeroclaw-labs/zeroclaw/issues/10736) Reliable provider 流式回退跳过 | CLOSED | 已有对应修复 |
| [#9627](https://github.com/zeroclaw-labs/zeroclaw/issues/9627) git write verbs 绕过风险分类器 | CLOSED | 跟进项已处理 |
| [#10962](https://github.com/zeroclaw-labs/zeroclaw/issues/10962) Gateway /ws/chat 无 tool result payload | CLOSED | 已关闭（需 repro） |
| [#10973](https://github.com/zeroclaw-labs/zeroclaw/issues/10973) WhatsApp mentions 双向损坏 | CLOSED | — |
| [#10972](https://github.com/zeroclaw-labs/zeroclaw/issues/10972) WhatsApp inbound 图片不下载 | CLOSED | — |
| [#10667](https://github.com/zeroclaw-labs/zeroclaw/issues/10667) ZeroCode 流式响应重复渲染 | CLOSED | — |

**判断**：项目在 Issue 管理层面积极闭环，但代码合入管道停滞，50 个 open PR 中包含多个大型架构 PR（XL size），合并瓶颈值得关注。

---

## 4. 社区热点

### 评论数最多的 Issues

| 排名 | Issue | 评论 | 核心诉求 |
|------|-------|------|---------|
| 1 | [#8046](https://github.com/zeroclaw-labs/zeroclaw/issues/8046) Telegram Webhook 模式 | 5 | 当前 Telegram 通道仅支持 getUpdates 长轮询，用户希望可选 webhook ingress 以适配公网可达部署场景 |
| 2 | [#10531](https://github.com/zeroclaw-labs/zeroclaw/issues/10531) 暴露 delegate 子代理进度 | 4 | 父代理委托子代理后完全黑盒，需 tool receipts / partial output 实时可见 |
| 3 | [#10663](https://github.com/zeroclaw-labs/zeroclaw/issues/10663) Anthropic prompt-cache 1h TTL | 3 | 默认 5 分钟 TTL 对低频调用场景浪费 cache-write 溢价，需可配置 |
| 3 | [#10853](https://github.com/zeroclaw-labs/zeroclaw/issues/10853) OpenCode session header 跟进 | 3 | 安全头格式畸形时的回退行为需规范 |
| 3 | [#10759](https://github.com/zeroclaw-labs/zeroclaw/issues/10759) SOP RPC failure_reason 缺失 | 3 | 运维排障需要失败原因持久化可见 |

**分析**：讨论热度集中在 **代理可观测性**（#10531）和 **提供商成本优化**（#10663/#10960）两个方向，反映了生产用户对运行时透明度和 API 开销的实际关切。Telegram webhook（#8046）作为长期开放 Issue（6 月提出）持续被关注，说明社区对通道部署灵活性的需求强烈。

---

## 5. Bug 与稳定性

按严重程度排列今日报告/活跃的 Bug：

### 🔴 S0 — 数据丢失 / 安全风险

| Issue | 摘要 | Fix PR |
|-------|------|--------|
| [#10968](https://github.com/zeroclaw-labs/zeroclaw/issues/10968) | 非交互式代理轮次（cron/heartbeat/headless SOP/spawn_subagent）不构建 ApprovalManager，风险配置文件审批静默失效 | ❌ 无 |
| [#10966](https://github.com/zeroclaw-labs/zeroclaw/issues/10966) | Git `--attr-source` 可隐藏变异子命令，绕过审批分类 | ❌ 无（#9627 的同类变种） |
| [#9627](https://github.com/zeroclaw-labs/zeroclaw/issues/9627) | Git write verbs 通过全局选项 `-C`/`--git-dir` 绕过风险分类器 | CLOSED（跟进已处理，但 #10966 表明绕过面更广） |

### 🟠 S1 — 工作流阻塞

| Issue | 摘要 | Fix PR |
|-------|------|--------|
| [#8627](https://github.com/zeroclaw-labs/zeroclaw/issues/8627) | WhatsApp Web 设备链接被新 passkey/SHORTCAKE 门禁阻断 | ❌ 无（长期阻塞，7 月开立） |

### 🟡 S2 — 功能降级

| Issue | 摘要 | Fix PR |
|-------|------|--------|
| [#10952](https://github.com/zeroclaw-labs/zeroclaw/issues/10952) | Seam sanitizer 重写签名推理导致 Anthropic 拒绝重放 thinking | ❌ 无 |
| [#10981](https://github.com/zeroclaw-labs/zeroclaw/issues/10981) | WhatsApp 出站图片无 jpegThumbnail，手机显示空白卡片 | [#10982](https://github.com/zeroclaw-labs/zeroclaw/pull/10982) ✅ |
| [#10950](https://github.com/zeroclaw-labs/zeroclaw/issues/10950) | cost.warn_at_percent 预算警告被运行时忽略 | ❌ 无 |
| [#10948](https://github.com/zeroclaw-labs/zeroclaw/issues/10948) | interruption_scope_key 跨组件边界碰撞 | ❌ 无 |
| [#10951](https://github.com/zeroclaw-labs/zeroclaw/issues/10951) | ZeroCode Config 保存后重复刷新字段列表 | [#10964](https://github.com/zeroclaw-labs/zeroclaw/pull/10964) ✅ |

### 🟢 S3 — 轻微降级

| Issue | 摘要 | Fix PR |
|-------|------|--------|
| [#10973](https://github.com/zeroclaw-labs/zeroclaw/issues/10973) | WhatsApp mentions 双向损坏（CLOSED） | — |

**安全警告**：今日出现两个 S0 级安全 Bug 均与 **shell 工具审批绕过** 相关（#10968、#10966），且均无修复 PR。建议维护者立即优先处理。

---

## 6. 功能请求与路线图信号

### 高信号量 Feature Requests（已有对应 PR 或被 accepted）

| 功能请求 | Issue | 对应 PR | 路线图信号 |
|---------|-------|---------|-----------|
| Anthropic prompt-cache TTL 可配置 | [#10663](https://github.com/zeroclaw-labs/zeroclaw/issues/10663) | [#10724](https://github.com/zeroclaw-labs/zeroclaw/pull/10782) (feat, size:L, distinguished contributor) + [#10960](https://github.com/zeroclaw-labs/zeroclaw/pull/10960) (env var 快捷方式, size:XS) | **高** — 两个 PR 互补，主 PR 已持续更新，预计 v0.8.6 纳入 |
| WhatsApp 群组创建与邀请 | [#10977](https://github.com/zeroclaw-labs/zeroclaw/issues/10977) | ❌ 无 | 中 — 通道功能补全需求明确 |
| WhatsApp PDF 预览缩略图 | [#10812](https://github.com/zeroclaw-labs/zeroclaw/issues/10812) | [#10980](https://github.com/zeroclaw-labs/zeroclaw/pull/10980) ✅ | **高** — PR 已提交同日 |
| Delegate 子代理进度可见 | [#10531](https://github.com/zeroclaw-labs/zeroclaw/issues/10531) | ❌ 无 | 中 — 架构级变更，需 RFC |
| 通道溯源贯穿运行时 | [#10891](https://github.com/zeroclaw-labs/zeroclaw/issues/10891) | ❌ 无（accepted, in-progress） | **高** — #7432 tracker 项，v0.8.6 目标 |
| Cron/heartbeat 抖动窗口 | [#10969](https://github.com/zeroclaw-labs/zeroclaw/issues/10969) | ❌ 无 | 中 — 运维场景刚需 |
| 主机级并发与资源边界 | [#10970](https://github.com/zeroclaw-labs/zeroclaw/issues/10970) | ❌ 无 | 中 — 多代理部署场景刚需 |
| Gateway /ws/chat 转发 tool result | [#10962](https://github.com/zeroclaw-labs/zeroclaw/issues/10962) | ❌ 无（CLOSED, needs-repro） | 低 — 需先复现 |

### 架构级 RFC（影响 v0.9.0+）

| RFC | Issue | 状态 |
|-----|-------|------|
| SOP 持久化原语统一"代理问人类问题" | [#10930](https://github.com/zeroclaw-labs/zeroclaw/issues/10930) | OPEN, needs-maintainer-review |
| 出站消息投递回执 | [#10929](https://github.com/zeroclaw-labs/zeroclaw/issues/10929) | OPEN, needs-maintainer-review |
| v0.8.6 + v0.9.0 运行时与网关交付 tracker | [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | OPEN, accepted |

---

## 7. 用户反馈摘要

从今日 Issues 的描述与评论中提炼以下真实痛点：

- **WhatsApp 通道体验严重不足**：多位用户（RustLangLatam、coderbuzz）在同一天集中报告图片无预览（#10981）、PDF 无缩略图（#10812）、入站图片不下载仅显示 `[Image]`（#10972）、mentions 双向损坏（#10973）、群组功能缺失（#10977）、设备链接被新协议阻断（#8627）。**WhatsApp Web 通道是当前用户体验最薄弱环节**。

- **安全审批形同虚设的场景**：#10968 揭示 cron/heartbeat 等非交互式代理完全不经过审批，用户可能误以为风险配置在所有模式下生效——这是信任模型与实际行为的严重偏差。

- **Anthropic 成本优化需求强烈**：#10663 和 #10959（tool specs 排序不稳定导致 cache miss）共同反映：使用 Anthropic 的生产用户对 prompt-cache 命中率高度敏感，5 分钟 TTL 对间隔较长的自动化场景不可接受。

- **代理委托的黑盒问题**：#10531 和 #10963 指出 delegate 子代理运行期间父代理无法获取中间状态，也不传递 session identity，使得复杂工作流的监控和审计困难。

- **多代理并发部署缺乏资源隔离**：#10969（cron 集中触发）和 #10970（无主机级资源边界）反映运行多代理的用户遇到延迟尖峰和稳定性退化。

---

## 8. 待处理积压

### 长期未解决的高优先级 Issues

| Issue | 开立日期 | 优先级 | 风险 | 状态 | 呼吁 |
|-------|---------|--------|------|------|------|
| [#8627](https://github.com/zeroclaw-labs/zeroclaw/issues/8627) WhatsApp 设备链接被阻断 | 2026-07-02 | P1 | High | accepted, no-stale | **已阻塞近 3 个月**，S1 级工作流阻断，WhatsApp 通道核心功能不可用 |
| [#8046](https://github.com/zeroclaw-labs/zeroclaw/issues/8046) Telegram Webhook 模式 | 2026-06-20 | P2 | High | accepted, icebox | **3 个月仍在 icebox**，5 条评论表明持续需求 |
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) v0.8.6/v0.9.0 交付 tracker | 2026-06-09 | P2 | High | accepted, no-stale | 路线图主 tracker，需定期更新进展 |

### 长期 Open 的大型 PR（合并瓶颈）

| PR | 开立日期 | Size | 状态 | 呼吁 |
|----|---------|------|------|------|
| [#10321](https://github.com/zeroclaw-labs/zeroclaw/pull/10321) Browser PKCE + cross-surface enrollment | 2026-08-24 | XL | Open, stacked (10 层依赖) | **堆叠 PR 链深达 10 层**，任一层阻塞整链，建议拆分或推进底层 review |
| [#10525](https://github.com/zeroclaw-labs/zeroclaw/pull/10525) Relay-terminated browser enrollment | 2026-09-01 | XL | Open | 与 #10321 相关，需协调 |
| [#10610](https://github.com/zeroclaw-labs/zeroclaw/pull/10610) Shell V1 权限策略 (RFC #7155) | 2026-09-04 | XL | Open, needs-author-action | **needs-author-action 近 2 周**，#10966/#10968 的 S0 Bug 使此 PR 更紧迫 |
| [#10351](https://github.com/zeroclaw-labs/zeroclaw/pull/10351) 执行树迭代预算 | 2026-08-25 | XL | Open | 与 #10970 功能请求互补 |

### 今日新开且无 Fix PR 的 S0 安全 Issues

| Issue | 呼吁 |
|-------|------|
| [#10968](https://github.com/zeroclaw-labs/zeroclaw/issues/10968) 非交互式代理审批静默失效 | **紧急** — 需立即 triage 并开立修复 PR |
| [#10966](https://github.com/zeroclaw-labs/zeroclaw/issues/10966) `--attr-source` 绕过审批分类 | **紧急** — #9627 的变种，#10610 (Shell V1 策略) 可能部分覆盖 |

---

> **总结**：ZeroClaw 社区今日输入活跃（35 Issues、50 PRs），但合并管道停滞（0 merged）。两个 S0 安全漏洞亟待修复，WhatsApp 通道集中暴露体验缺陷（已有部分 fix PR），Anthropic 缓存优化与代理可观测性是生产用户最关注的功能方向。建议维护者优先处理安全审批绕过类 Bug，推动大型堆叠 PR 的底层 review，并关注 WhatsApp 通道的系统性质量提升。

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*