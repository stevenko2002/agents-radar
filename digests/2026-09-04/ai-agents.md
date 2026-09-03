# OpenClaw 生态日报 2026-09-04

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-03 22:15 UTC

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



# OpenClaw 项目动态日报 (2026-09-04)

## 1. 今日速览
过去24小时 OpenClaw 保持高频迭代节奏，共处理 500 条 Issues（345 活跃/新开、155 已关闭）与 500 条 PR（322 待合并、178 已合并/关闭）。今日发布 `v2026.9.1`，核心聚焦原生客户端体验与图表渲染能力。整体来看，项目正处于 2026.8.x 系列发布后的**稳定性强化期**，社区反馈与 PR 修复高度集中于内存管理、SQLite 持久化、会话压缩与多 Agent 路由等生产级痛点，健康度呈“高活跃度、高风险敞口、强修复响应”特征。

## 2. 版本发布
**v2026.9.1** 已于今日上线，主要更新如下：
- **Mermaid 图表全端渲染**：Control UI 及 macOS/iOS/Android 原生客户端现已支持 Mermaid 代码块直接渲染为可视化图表，新增放大预览与移动端渲染失败自动重试机制（#134913, #135746, #135470, #135342）。
- **安装到对话的衔接优化**：官方摘要提及从安装引导至首次对话的流程改进，进一步降低新手上手门槛（原文摘要截断，以官方 Release Notes 为准）。

> ⚠️ 迁移提示：本次为体验与原生 App 渲染增强，未声明破坏性 API 变更。使用自定义 Mermaid 插件或移动端深度集成的用户建议验证渲染边界情况。

## 3. 项目进展
今日 PR 流水线推进显著，核心修复围绕**会话状态一致性、网关生命周期与认证路径健壮性**展开：
- **[Fix] 会话历史保留** (#137381)：解决 `sessions_yield` 清理期间长时间 SQLite 会话暂时不可见的问题，保障审计与 UI 历史连续性。
- **[Fix] 心跳会话压缩绕过** (#136533)：直接关闭 P0 Issue #136452，修复心跳驱动会话忽略 `compaction.maxActiveTranscriptBytes` 导致 V8 OOM 的严重回归。
- **[Fix] 多 Agent 路由与诊断** (#137594)：MCP Server 不可用时在 Tool Search 中明确提示名称，替代原有的静默 Miss 循环。
- **[Fix] macOS 网关切换缓存** (#137502)：修复切换 Primary Gateway 时残留旧网关设置/草稿/控制项的问题。
- **[Fix] Codex 插件热更后崩溃** (#136926)：解决 `openclaw plugins update` 后原地重启导致 `state.desktopGenerationDrainChecks is not iterable` 的连续失败。
- **[Fix] 权限命令参数校验** (#137562)：拦截 `/exec` 误用位置参数，避免静默剥离命令前缀后错交由模型。

项目整体向**生产级会话治理**与**多运行时隔离**方向稳步收敛。

## 4. 社区热点
以下 Issue 评论密度最高，反映当前生产部署的核心焦虑：
| Issue | 主题 | 评论 | 核心诉求 |
|-------|------|------|----------|
| [#125626](https://github.com/openclaw/openclaw/issues/125626) | 2026.8.1 beta 反馈汇总 | 24 | 收集真实生产/测试环境的回归与行为偏差 |
| [#126360](https://github.com/openclaw/openclaw/issues/126360) | `AgentSelectionRequiredError` 日志风暴 | 12 | explicit 多 Agent 模式下全局 RPC 与 system-agent 缺乏 `agentId` 目标 |
| [#132762](https://github.com/openclaw/openclaw/issues/132762) | overflow-retry 成功但未交付 | 12 | 重试链在 toolResult 阶段误判成功，缺少最终 assistant 响应 |
| [#114612](https://github.com/openclaw/openclaw/issues/114612) | SQLite `memory_*` 表无淘汰策略 | 11 | `memory_index_chunks` / `memory_embedding_cache` 无限增长耗尽磁盘 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | hook/tool 子进程泄漏成僵尸 | 10 | `openclaw-hooks`/`bash`/`codex` 等进程未被 reap，长期运行后网关性能退化 |

**趋势研判**：社区已从“功能可用性验证”转向“长稳运行与资源治理”，对会话状态机、进程生命周期与存储清理的期待显著提升。

## 5. Bug 与稳定性
按严重程度分层，今日高风险问题集中爆发于**持久化层、内存检索与 CLI 后端**：

**🔴 P0 严重**
- [#126821](https://github.com/openclaw/openclaw/issues/126821) W

---

## 横向生态对比



## 今日重點摘要 (2026-09-04)

### 1. 重要更新

1. **OpenClaw** ([github.com/openclaw/openclaw](https://github.com/openclaw/openclaw)) — 发布 `v2026.9.1`，核心新增 Mermaid 图表全端渲染（Control UI 及 macOS/iOS/Android 原生客户端），并修复心跳驱动会话压缩绕过导致的 V8 OOM 严重回归。

2. **CoPaw** ([github.com/agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)) — `v2.2.0` 稳定版正式发布，核心亮点为多租户 QwenPaw Hub（支持本地进程/Docker 运行时、工作区级访问控制），ReMe 升级至 0.4.1.11 新增 Auto Fin 定时长期记忆源。

3. **LobsterAI** ([github.com/netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)) — 2026.8.31 版本发布分支已合并，2026.9.4 开发正式启动，首要功能是恢复交互式应用内 Agent 浏览器及 MCP bridge。

4. **NanoClaw** ([github.com/qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)) — 启动项目历史上最大规模架构重构：zvi-fried 提交 7 个 PR 将 provider 行为升级为可验证的运行时契约（runtime/host/setup 三层），并新增 admission gate 扩展点。

5. **IronClaw** ([github.com/nearai/ironclaw](https://github.com/nearai/ironclaw)) — 系统性清理 WebUI TypeScript 技术债，移除全部 94 个测试侧 `@ts-nocheck` 并为 64 个生产组件补充显式类型，同时修复 Slack/Telegram 回复串联暴露内部思考过程的缺陷。

6. **ZeroClaw** ([github.com/zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)) — Gateway Web Chat 多会话支持（新建/切换/重命名/删除 Session）功能进入实现完成阶段；同时关闭多个长期 Bug（Discord 音频转录绑定、Matrix transcription 配置忽略、JSONL Session 类型不一致等）。

7. **Hermes Agent** ([github.com/nousresearch/hermes-agent](https://github.com/nousresearch/hermes-agent)) — 新增 P0 Bug [#102194](https://github.com/NousResearch/hermes-agent/issues/102194)：CLI 路径下每次新对话首个 API 调用必定错过 prompt 缓存，直接影响推理成本与延迟，尚无 fix PR。

### 2. 活跃度概览

今日整体活跃度分化明显：**OpenClaw** 以 500 条 Issue/PR 的处理量遥遥领先，**Hermes Agent**、**ZeroClaw**、**CoPaw** 保持高迭代节奏（日均 50 条左右更新），**NanoClaw** 和 **IronClaw** 中等活跃，**NanoBot** 活跃但聚焦稳定性修复，**PicoClaw** 低强度维护，**Moltis** 处于静默评审期，**NullClaw** 与 **TinyClaw**、**ZeptoClaw** 无活动。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



# 📊 NanoBot 项目动态日报 | 2026-09-04

## 1. 今日速览
过去 24 小时 NanoBot 保持高频迭代节奏，累计处理 **4 条 Issue** 与 **24 条 PR**（13 条已合并/关闭，11 条待审）。项目重心已从基础功能搭建全面转向 **WebUI/TUI 体验打磨、渠道稳定性加固与 Provider 层可靠性修复**。核心运行时 (`agent` / `channels` / `providers`) 密集修复了内存泄漏、事件丢失与回退策略盲区，整体健康度良好，具备向 0.3.x 稳定版推进的条件。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日合并的 PR 高度聚焦于**运行时正确性**与**资源管理**，为后续功能扩展扫清技术债：
- **流式与事件总线**：修复 Gateway 重启后 WebUI  stuck 在转圈状态的问题 [#5514](https://github.com/HKUDS/nanobot/pull/5514)；保障 SDK 流关闭时队列事件不丢失 [#5635](https://github.com/HKUDS/nanobot/pull/5635)。
- **渠道鲁棒性**：补全 Element SAS 验证全流程 [#5385](https://github.com/HKUDS/nanobot/pull/5385)；修复 Matrix 消息投递失败传播 [#5637](https://github.com/HKUDS/nanobot/pull/5637)；完善 Signal 通配符白名单匹配逻辑 [#5472](https://github.com/HKUDS/nanobot/pull/5472)。
- **资源与性能**：对出站回复指纹缓存设置上限，防止长时运行网关内存无限增长 [#5634](https://github.com/HKUDS/nanobot/pull/5634)；修复 `tool_hints` 对普通参数未截断的问题 [#5629](https://github.com/HKUDS/nanobot/pull/5629)。
- **Provider 一致性**：将 fallback 策略扩展至抛出异常的错误路径 [#5413](https://github.com/HKUDS/nanobot/pull/5413)；保留 Codex 会话的 Prompt Cache 亲和性 [#5632](https://github.com/HKUDS/nanobot/pull/5632)。

项目整体向前迈进约 **一个稳定化周期**，核心链路的基础设施级问题已得到集中收敛。

## 4. 社区热点
当前社区关注点明显向 **可观测性** 与 **多端体验** 倾斜：
- **[PR #5504](https://github.com/HKUDS/nanobot/pull/5504)** `fix(ui): surface model retry status` — 在 WebSocket 中透出模型重试生命周期，TUI/WebUI 端展示倒计时与尝试进度，减少用户对“卡死”的误判。
- **[PR #5649](https://github.com/HKUDS/nanobot/pull/5649)** `feat(webui): visualize per-request context reuse` — 将 Token 用量移至折叠气泡并以堆叠柱状图展示，响应开发者对上下文消耗透明化的强烈诉求。
- **[PR #5640](https://github.com/HKUDS/nanobot/pull/5640)** & **[PR #5641](https://github.com/HKUDS/nanobot/pull/5641)** — 移动端键盘输入优化与 iOS PWA 点击穿透修复，反映移动场景用户基数的快速扩张。
- **[PR #5614](https://github.com/HKUDS/nanobot/pull/5614)** `feat(tg): add support for streaming rich messages` — Telegram 渠道正在补齐富媒体流式能力，有望成为下一批重点接入渠道。

## 5. Bug 与稳定性
| 级别 | Issue/PR | 问题描述 | 状态 |
|:---:|:---|:---|:---|
| 🔴 高 | [#5645](https://github.com/HKUDS/nanobot/issues/5645) | 0.3.0 默认缺失 `Current Time` runtime context（0.2.2 行为回归） | 待修复 |
| 🟠 中 | [#5647](https://github.com/HKUDS/nanobot/issues/5647) | 前端 envelope 未携带 `webui` 标志时会话标题不生成 | 待修复 |
| 🟡 低 | [#5644](https://github.com/HKUDS/nanobot/issues/5644) | 并发加载 locale 时 `translationsByChannel` 丢失映射 | 待修复 |
| ✅ 已修复 | [#5512](https://github.com/HKUDS/nanobot/issues/5512) | Gateway 重启后 WebUI 永远 spinning | 已合并 [#5514](https://github.com/HKUDS/nanobot/pull/5514) |
| ✅ 已修复 | [#5515](https://github.com/HKUDS/nanobot/issues/5515) | 会话回复超时任务失败被静默丢弃 | 已合并 |

整体稳定性呈上升趋势，但 **#5645 属于显性回归**，建议优先排期。

## 6. 功能请求与路线图信号
- **移动端优先**：[#5640](https://github.com/HKUDS/nanobot/pull/5640)、[#5641](https://github.com/HKUDS/nanobot/pull/5641) 连续推进触控交互与 PWA 兼容，下一版本极有可能包含移动端适配专项优化。
- **操作可观测性**：[#5504](https://github.com/HKUDS/nanobot/pull/5504)、[#5649](https://github.com/HKUDS/nanobot/pull/5649) 表明用户对重试机制、上下文复用率有明确可视化需求，预计将沉淀为 WebUI 标配面板。
- **多语言本土化**：[#5646](https://github.com/HKUDS/nanobot/pull/5646) 已落地“仅显示语言 native 名称”，反映国际化策略从“翻译优先”转向“尊重用户原生习惯”。
- **Telegram 深度支持**：[#5614](https://github.com/HKUDS/nanobot/pull/5614) 正在实现富消息流式发送，渠道矩阵向主流 IM 进一步靠拢。

## 7. 用户反馈摘要
- **痛点集中区**：并发时序问题（如 [#5644](https://github.com/HKUDS/nanobot/issues/5644) 的 locale 丢失）、网关重连状态清理（[#5512](https://github.com/HKUDS/nanobot/issues/5512)，已修复）、版本升级导致的隐式行为变更（[#5645](https://github.com/HKUDS/nanobot/issues/5645)）。
- **使用场景延伸**：移动端外场使用、长周期 Gateway 部署、多 Provider 容灾场景下的稳定性诉求显著增加。
- **满意度信号**：用户对本地化细节（native 语言名）、重试过程透明化、内存泄漏修复反馈积极，表明当前“稳态优先”的迭代方向与用户预期高度吻合。

## 8. 待处理积压
- 🔴 **

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-09-04

## 一、今日速览

过去 24 小时项目活跃度较高：共产生 50 条 Issue 更新与 50 条 PR 更新，其中新开/活跃 Issue 48 条、待合并 PR 44 条，无新版本发布。值得警惕的是 P0 级 Bug #102194（CLI 路径下每次新对话的首个 API 调用必定错过 prompt 缓存）今日新报。社区讨论集中于 Skills 索引持续降级（#66616，149 条评论）与自动化集成阻塞（#88584，60 条评论）。此外 9 月 3 日集中涌入了一批 v0.21.0 发布后的回归类报告（桌面端 profile 切换、session 锁冲突、systemd 兼容性等），说明新版本改动对下游生态的兼容性仍在消化中。整体看项目处于高迭代强度、需要警惕回归的窗口期。

---

## 二、版本发布

今日无新版本发布。

---

## 三、项目进展

**已合并/关闭 PR：**
- [#102169 [CLOSED] fix(docker)](https://github.com/NousResearch/hermes-agent/pull/102169)：修复 `is_container()` 在运行 Docker/containerd 的普通 Linux 主机上误判为容器的问题（作为重复 PR 关闭）。该修复方向另有并行的 [#58141](https://github.com/NousResearch/hermes-agent/pull/58141)（扫描 root mount 的替代方案）仍在开放中，将以更具兼容性的方式落地。
- 另有 5 条 PR 合入/关闭，主要涉及小的修复清理。

**值得关注的在途 PR（待合并）：**

| PR | 内容 | 状态 |
|---|---|---|
| [#102509](https://github.com/NousResearch/hermes-agent/pull/102509) | Dropbox MCP OAuth 增加 offline token_access_type，修复 4 小时 token 过期后静默失效问题 | 待 review |
| [#102508](https://github.com/NousResearch/hermes-agent/pull/102508) | 协商 systemd 瞬时 scope 可接受属性，修复旧版 systemd（<253）上重启安全 worker 全部失败问题，直指 #102486 | 待 review |
| [#102502](https://github.com/NousResearch/hermes-agent/pull/102502) | 解析 vLLM `max_tokens > max_model_len` 拒绝错误，避免误判为对话过长触发会话重置，直指 P2 Bug #102494 | 待 review |
| [#102505](https://github.com/NousResearch/hermes-agent/pull/102505) | Intel GPU 路由到 SYCL 构建 + vulkaninfo 检测兜底，修复 #100740 | 待 review |
| [#102506](https://github.com/NousResearch/hermes-agent/pull/102506) | 工具搜索可选 embedding 重排序器（#35457 的 rebase + 全面重构），无重排序器时也有轻量排名优化 | 待 review |
| [#102507](https://github.com/NousResearch/hermes-agent/pull/102507) | 桌面端 profile 选择持久化修复（主 gateway 已注册连接 ID 时不再丢失选择） | 待 review |
| [#102481](https://github.com/NousResearch/hermes-agent/pull/102481) | 仅对会"改变输出"的 transform_llm_output 钩子抑制流式输出，且逐 token 重新检查，修复插件延迟注册被遗漏的问题（#102203） | 待 review |

整体来看，今日在途 PR 集中在**本地运行时探测（Intel GPU/SYCL、WSL nvidia-smi）、systemd 兼容性、vLLM 错误解析、工具搜索增强**等方向，对 v0.21.0 引入的回归正进行密集修补。

---

## 四、社区热点

1. **[#66616 Skills 索引过期（degraded）— 149 条评论](https://github.com/NousResearch/hermes-agent/issues/66616)**
   技能中心索引已 29.8 小时未刷新（上限 26 小时），持续处于 degraded 状态。该 Issue 自 7 月 18 日创建以来已积累近 150 条评论，虽大部分来自自动化探针，但暴露出 `.github/workflows/skills-index.yml` 与 `deploy-site.yml` 两条流水线的可靠性长期未得到根治。

2. **[#88584 自动化 Nous-Enterkey 集成阻塞 — 60 条评论](https://github.com/NousResearch/hermes-agent/issues/88584)**
   定时合并任务在 `cron/jobs.py` 产生冲突导致集成长期阻断。社区通过高频评论持续表达对跨仓库自动化链路稳定性的关注。

3. **[#90663 TUI/SHIFT 键大写输入被破坏（P1）— 10 条评论，1 👍](https://github.com/NousResearch/hermes-agent/issues/90663)**
   在 macOS Ghostty 终端下，Ink TUI 中 Shift+字母 输入被强制转为小写，直接破坏密码/命令输入体验。虽是终端层面的兼容问题，但评论热度在非自动化 Issue 中居前，开发者对输入类回归容忍度极低。

4. **[#65038 delegation.fallback_providers 配置被忽略（P1）— 10 条评论](https://github.com/NousResearch/hermes-agent/issues/65038)**
   委派 worker 继承父 fallback 链已实现，但用户自定义的 `delegation.fallback_providers` 覆盖被静默接受却不生效。涉及配置语义一致性的信任问题。

5. **[#102163 v0.21.0 桌面端 profile 切换回归 — 3 条评论，1 👍](https://github.com/NousResearch/hermes-agent/issues/102163)**
   新版本强制 slot 上限 3 + session 所有权锁，导致第 4 个 profile 可靠崩溃。发布 3 天内即获用户确认，属高影响的版本级回归。

这些热点折射出社区对三类诉求的集中关注：**自动化流水线的可靠性**、**输入与配置等基础体验不被回归**、**新版本升级不破坏既有使用模式**。

---

## 五、Bug 与稳定性

按严重程度排列：

**P0：**
- [#102194 [Bug] CLI 路径永不持久化 api_content sidecar → 每轮首个 API 调用错过 prompt 缓存（cache_read 大幅缩水）](https://github.com/NousResearch/hermes-agent/issues/102194)——新增，2 条评论。直接影响推理成本与延迟。尚未见 fix PR。

**P1：**
- [#102486 systemd 249 拒绝 OOMPolicy=kill → 全部 cron worker dispatch 失败](https://github.com/NousResearch/hermes-agent/issues/102486)——v0.21.0 后升级 main 即触发，全量失败。已有对应 [PR #102508](https://github.com/NousResearch/hermes-agent/pull/102508)。
- [#90663 TUI 中 Shift+大写被转小写（Ghostty/macOS）](https://github.com/NousResearch/hermes-agent/issues/90663)——输入破坏，修复中待确认。10 条评论，有用户复现。
- [#65038 delegation.fallback_providers 配置被忽略，委派 worker 继承父级 fallback 链](https://github.com/NousResearch/hermes-agent/issues/65038)——配置语义缺陷，已有 10 条评论讨论边界。
- [#90806 已关闭] state.db WAL 侧车在 FTS 损坏处理中被替换，SQLite 3.53.1 反复结构损坏——**今日已关闭**，修复已落地。

**P2（部分）：**
- [#99956 cron bot-chat 投递在目标 profile 有活跃 session 锁时失败](https://github.com/NousResearch/hermes-agent/issues/99956)——涉及 session 并发模型，5 条评论，尚无 PR。
- [#62810 CLI dispatcher 丢弃整数退出码](https://github.com/NousResearch/hermes-agent/issues/62810)——影响 CI、set -e 等自动化场景。7 条评论。
- [#102163 v0.21.0 profile 切换回归：slot 3 硬限制 + session 所有权锁误伤](https://github.com/NousResearch/hermes-agent/issues/102163)——新版本回归，3 条评论，1 👍，高影响。
- [#102494 vLLM max_tokens 400 被误判为超长 → 会话死循环重置](https://github.com/NousResearch/hermes-agent/issues/102494)——已有对应 [PR #102502](https://github.com/NousResearch/hermes-agent/pull/102502)。
- [#102281 桌面端大 bot roster 在启动后约 2-3 分钟无法打开 bot（spawn cap 饿死前台）](https://github.com/NousResearch/hermes-agent/issues/102281)——#101930 合并后的回归。
- [#101416 桌面端每个新 session 首次提交必报 "Session already has a live owner"](https://github.com/NousResearch/hermes-agent/issues/101416)。

**值得注意的结构性问题：**
- 今日多条 P1/P2 涉及 **session 状态锁、profile 切换、桌面端**——这些是 v0.21.0 的核心改动区，回归密度偏高，建议维护者为本版本建立专项跟进清单。
- [#102442 已关闭（duplicate）]：SOUL.md/AGENTS.md 受保护指令门禁在默认安装下永不生效（安全语义缺陷），虽标记为重复，但原始问题仍待跟踪。

---

## 六、功能请求与路线图信号

值得关注的开放中 PR，预示可能的下一版本特性：

1. **工具搜索重排序增强（#102506，rebase #35457）**——为 `tool_search` 引入可选 embedding reranker + 名称覆盖加分。配合搜索质量优化路线，有独立价值且已通过多轮 review 打磨，**合入概率较高**。
2. **配置化 Discord 线程自动归档时长（#81172）**——从硬编码 24h 改为可选，满足运营侧需求，改动小、风险低，**后续版本大概率纳入**。
3. **agent-facing model_override 工具（#77993）**——允许 skill/agent 在会话内临时切换更强模型，避免全局配置改动。依赖 `delegate_task` 的 per-call override 先落地，方向明确但需决策，**列入观察**。
4. **会话身份透传 LiteLLM（#75008）**——修复上游可观测性缺口，改动集中于请求构建器，**潜在合入**。

社区提出的功能信号：
- **#375 Inception Prompting（3 条评论）**——受 CAMEL-AI 启发的防委派失败提示硬化，长期开放，社区持续关注但热度不算高。
- **#96683 Project Workspaces 与跨渠道 Session 路由提案（1 条评论）**——用消息源+身份之外再引入"项目工作区"维度，复杂度高，需架构决策。
- **#6152 Ollama 非推理模型传 `think: false`（4 条评论，3 👍）**——用户需求真实（CPU 推理场景省算力），改动小收益明确，但需求方集中在本地部署群体。

---

## 七、用户反馈摘要

从今日活跃 Issue 中可以提炼出以下几类真实用户声音：

1. **升级即回归的挫败感（v0.21.0）**
   - 多个用户在 8.31 升级后立即遭遇。如 #102163：*"Opening a 4th profile now reliably causes [crash]"*——过去 slot 限制非硬阻塞，新版本行为变化未被有效沟通。
   - #101416 报错文案 *'Session already has a live owner'* 出现在每次新建 session 的第一个消息，用户感到困惑且无从排查。

2. **桌面端体验被后台能力拖累**
   - #53328（4 条评论，1 👍）：Projects 范式每次启动扫描整个 home 目录找 git 仓库，无限制/禁用配置，隐私与性能双重顾虑。
   - #102281：bot 较多时启动数分钟内无法打开（spawn cap 饿死前台操作），用户对"为什么我点的 bot 打不开"的直接不满。
   - #101593：Kanban 标签页吞掉导航，无法回到此前 Bot 会话。

3. **"看似简单实际影响深"的基础输入/配置问题**
   - #90663 大写输入变小时，用户需要复制粘贴才能得到正确字符，密码类输入场景直接不可用。
   - #62810 CLI 退出码丢失导致 CI 静默通过——自动化用户对此类问题最为敏感，一条评论明确指出会破坏 `set -e`、`&&` 和调度器。

4. **本地推理用户的成本敏感**
   - #102194（P0 cache 错失）对 API 调用方意味着真金白银的浪费；#6152 关于 Ollama CPU 推理下 `think: false` 的诉求背后也是算力紧张的本地场景。
   - #102505 PR 的 Intel GPU SYCL 路由（修复 #100740）回应了 Intel Arc 用户在 llama.cpp 被错误 fallback 到 CPU 的痛点。

5. **集成与自动化稳定性焦虑**
   - #88584 的持续阻塞虽以机器人评论为主，但用户层面反应的是"依赖的自动化链路随时可能断掉"的不确定性；#66616 的索引 stale 同样影响文档使用者。

---

## 八、待处理积压

以下为长期未获解决/响应的重点 Issue，建议维护者给予关注：

1. **[#66616 Skills 索引 degraded（2026-07-18 创建，149 条评论，持续 47 天）](https://github.com/NousResearch/hermes-agent/issues/66616)**
   自动化流水线问题最长的尾巴，始终处于 degraded 或反复横跳状态。虽为探针自动追踪，但影响 /docs/skills 及技能索引消费方，建议投入人力根治。

2. **[#375 Inception Prompting（2026-03-04 创建，199 天无实质推进）](https://github.com/NousResearch/hermes-agent/issues/375)**
   有明确学术背景和设计蓝图的增强提议，长期搁置，建议至少给出 acceptance criteria 或明确不采纳的原因。

3. **[#6152 Ollama `think: false`（2026-04-08 创建，149 天未解决，3 👍 为该列表最高社区赞）](https://github.com/NousResearch/hermes-agent/issues/6152)**
   改动量小但直接触碰本地推理成本敏感用户的核心体验。社区票数累积已久，可以在 provider 层做快速胜利。

4. **[#54328 桌面端全盘扫描 git 仓库（2026-06-26 创建，4 条评论，1 👍）](https://github.com/NousResearch/hermes-agent/issues/53328)**
   隐私 + 性能双变量，无任何配置逃生口，搁置时间已超 70 天。

5. **自动化触发占比较高但真实用户在等的**：#88584（跨仓库 merge 冲突）、#62810（CLI 退出码影响 CI 用户）——前者 8 月 17 日起阻塞约 18 天，后者已 55 天。

---

**一句话总结**：项目迭代速度与社区参与度双高，但 v0.21.0 的 session/profile/桌面端改动引入了成簇回归，且多项基础体验问题（TUI 输入、prompt cache、systemd 兼容）在同日爆发，建议下一阶段优先集中修复已暴露的回归面，同时尽快清理 #66616 流水线长期隐患。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 —— 2026-09-04

---

## 1. 今日速览

PicoClaw 于 2026-09-03 经历了活跃的社区互动与代码维护活动。过去 24 小时内共处理了 5 个 Issues 与 7 个 PR，体现出项目仍处于频繁迭代阶段。虽然未发布新版本，但修复类 PR 与依赖更新密集展开，显示开发团队正聚焦于稳定性与兼容性问题。多位贡献者积极参与 Bug 修复与功能优化，社区反馈灵敏且细致，项目运行状态健康。

---

## 2. 版本发布

- **当前最新版本**：暂无新版本发布  
  [ Releases 页面](https://github.com/sipeed/picoclaw/releases)

---

## 3. 项目进展

- **PR #3329 已合并**：优化了 LINE 频道中无效配置项 `webhook_host` 和 `webhook_port` 的处理方式，避免潜在误配置风险。  
  🔗 [PR #3329](https://github.com/sipeed/picoclaw/pull/3329)

> 今日共有 1 个 PR 被合并或关闭，主要聚焦于优化已有逻辑或清理冗余配置。

---

## 4. 社区热点

- **Issue #3281**：Web UI 输入框卡顿问题引发广泛讨论，尤其在聊天记录较长时明显。该 Issue 已有 8 条评论，反映出用户在实际使用过程中对性能优化的强烈需求。  
  🔗 [Issue #3281](https://github.com/sipeed/picoclaw/issues/3281)

- **Issue #3339**：Google Antigravity 返回 429 错误引起关注，用户怀疑为配额或认证方面的问题。该 Issue 已被关闭，但仍有用户关注其根因分析。  
  🔗 [Issue #3339](https://github.com/sipeed/picoclaw/issues/3339)

---

## 5. Bug 与稳定性

| 严重程度 | 问题描述 | 链接 | 状态 |
|----------|------------|------|------|
| 高 | Slack 媒体上传失败（文件大小为零） | [Issue #3338](https://github.com/sipeed/picoclaw/issues/3338) | 存在修复 PR (#3340) |
| 中 | QQ频道授权认证异常（401 错误） | [Issue #3349](https://github.com/sipeed/picoclaw/issues/3349) | 未提供修复 PR |
| 中 | RKLLM 回复异常 | [Issue #3346](https://github.com/sipeed/picoclaw/issues/3346) | 无相关 PR |
| 低 | Web UI 聊天输入框卡顿 | [Issue #3281](https://github.com/sipeed/picoclaw/issues/3281) | 无相关 PR |

---

## 6. 功能请求与路线图信号

- **Issue #3349**：用户期望 PicoClaw 支持 QQ频道接入，当前存在认证失败的问题，暗示可能需要更完善的文档或配置引导。
- **Issue #3346**：用户希望优化 RKLLM 在 ARM 开发板上的表现，反映出项目在嵌入式设备上的使用需求。

暂无明确的功能性 PR 用于响应以上请求，但可预期这些方向将会被纳入后续版本的优化目标。

---

## 7. 用户反馈摘要

- **性能问题**：多名用户在聊天记录较多时遇到 Web UI 输入卡顿，影响使用体验。
- **集成难度**：部分用户在接入第三方平台（如 Slack、QQ频道）时遇到认证及上传失败，需提升 SDK 对接的容错性。
- **设备兼容性**：部分用户在 ARM 平台上运行 RKLLM 模型时产生异常输出，可能与模型适配有关。

---

## 8. 待处理积压

- **Issue #3281**：Web UI 输入卡顿问题长期未得到有效解决，建议优先评估前端渲染机制。
- **Issue #3346**：RKLLM 回复异常已存在一段时间，缺乏响应，可能影响嵌入式用户群体的使用体验。

---

如需进一步分析或自动化汇总报告，请随时告知！

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



# 📊 NanoClaw 项目动态日报
**日期：2026-09-04** | 数据来源：github.com/qwibitai/nanoclaw

---

## 1. 今日速览

NanoClaw 今日保持**中等活跃度**：过去24小时内收到6个Issues和25个PRs，其中1个Bug已关闭，3个PR已合并。核心开发集中在**provider contract重构**（zvi-fried贡献7个PR）和**agent-runner稳定性修复**（davekim917/glifocat），表明项目正处于架构强化阶段。无新版本发布，整体健康度良好，社区参与度稳定。

---

## 2. 版本发布

> ⚠️ 过去24小时无新版本发布，本段省略。

---

## 3. 项目进展

### 已关闭/合并（今日）

| ID | 类型 | 作者 | 说明 |
|---|---|---|---|
| [#3126](https://github.com/nanocoai/nanoclaw/pull/3126) | Fix | glifocat | **关键修复**：禁止向用户投递 `silence` 和 `<internal>` thinking 内容，保护用户侧信息隔离 |
| [#3427](https://github.com/nanocoai/nanoclaw/pull/3427) | Fix | glifocat | 修复 `send_card` 误导 agent 声称支持 callback actions，而实际被 Chat SDK bridge 静默丢弃的问题（关联 Issue #3426） |

### 重大进行中的 PR

- **Provider Contract 系列重构**（zvi-fried，7个PR #3581/#3584/#3585/#3586/#3588/#3591/#3592）：将 provider 行为从硬编码逻辑升级为**可验证的运行时契约**，涵盖 runtime contract、host contract、setup contract 三层，并新增 `speed` 推理属性。这是项目历史上最大的一次架构清理，完成后将显著提升多 provider 兼容性和可维护性。

- **Admission Gate 机制**（davekim917, #3707）：在 poll loop 顶部引入 `registerAdmissionGate` 钩子，为子实现提供注册入口，增强扩展性。

- **WhatsApp 媒体下载治理**（mmv, #3712）：停止下载未被请求的媒体文件，同时读取 document captions，减少不必要的资源消耗。

- **语音转录 V2**（jorgenclaw, #2003）：容器端主权优先的语音转录实现，满足核心团队的"最少宿主侧逻辑"设计要求。

---

## 4. 社区热点

### 高价值讨论 Issues

1. **[Issue #3705](https://github.com/nanocoai/nanoclaw/issues/3705)** — `ncl tasks update --recurrence` 不重新计算下次触发时间
   - 用户反馈修改 cron 后 `process_after` 仍沿用旧调度，导致任务仍然按原周期执行而非新周期
   - 反映**调度引擎状态同步**是用户的真实痛点，建议维护者优先处理

2. **[Issue #3706](https://github.com/nanocoai/nanoclaw/issues/3706)** — `add-mount --container` 接受绝对路径但生成错误的双嵌套目录
   - DawoudIO 指出 CLI 帮助文档未声明路径必须相对，用户按直觉传入绝对路径产生非预期行为
   - **文档-实现不一致**问题，需补充路径约束说明或自动规范化

3. **[Issue #3709](https://github.com/nanocoai/nanoclaw/issues/3709)** — Mailbox SQLite 测试使用固定 `/tmp` 临时根，并发 vitest 会互相删除数据库
   - davekim917 发现测试隔离问题，在多 worktree 或 CI 并行场景下测试会自毁
   - 典型的**并发安全**问题，建议改用 per-process temp root

4. **[Issue #3704](https://github.com/nanocoai/nanoclaw/issues/3704)** — 请求 `SqliteAgentMailbox` 子类化 hook
   - 维护 fork 的用户需要扩展 mailbox 表结构的能力，反映**扩展性需求**在商业化 fork 场景中的重要性

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | Fix状态 |
|---|---|---|---|
| 🔴 高 | [#3706](https://github.com/nanocoai/nanoclaw/issues/3706) | `add-mount --container` 接受绝对路径生成双嵌套错误路径 | ❌ 无 fix |
| 🔴 高 | [#3705](https://github.com/nanocoai/nanoclaw/issues/3705) | `--recurrence` 更新后 `process_after` 不重算 | ❌ 无 fix |
| 🟡 中 | [#3709](https://github.com/nanocoai/nanoclaw/issues/3709) | SQLite 测试并发冲突，固定 `/tmp` 路径 | ❌ 无 fix |
| 🟡 中 | [#3426](https://github.com/nanocoai/nanoclaw/issues/3426) | `send_card` 承诺 callback 按钮但 bridge 静默丢弃 | ✅ [#3427](https://github.com/nanocoai/nanoclaw/pull/3427) 已合并 |
| 🟢 低 | — | — | — |

---

## 6. 功能请求与路线图信号

| 需求来源 | 描述 | 对应PR | 纳入可能性 |
|---|---|---|---|
| Issue #3704 | SqliteAgentMailbox 子类化 hook | #3704 | ⭐⭐⭐ 高（已有PR讨论） |
| Issue #3701 | gateway 声明式 credential lane | #3701 | ⭐⭐ 中（多 group 场景需求明确） |
| PR #3713 | per-agent-group delivery mode 记录 | #3713 | ⭐⭐⭐ 高（数据层已完成，待消费侧对接） |
| PR #2003 | 容器端语音转录 V2 | #2003 | ⭐⭐⭐ 高（主权优先设计，团队反馈已正向） |
| PR #3356 | Cursor Agent SDK provider | #3356 | ⭐⭐ 中（按 skill 方式集成，不影响核心） |

**路线图信号**：项目正从"功能叠加"转向"契约固化"——provider contract 系列 PR 表明维护者希望建立可验证的 provider 接口规范，减少硬编码耦合。同时，admission gate 和 delivery mode 功能显示对**多租户/多 group 场景**的支持正在加强。

---

## 7. 用户反馈摘要

- **痛点集中区**：CLI 帮助文档与实际行为不一致（Issue #3706），调度状态更新不生效（Issue #3705），测试并发隔离不足（Issue #3709）。
- **满意点**：`send_card` 修复（#3427）让用户不再被 agent 虚假成功提示误导；admission gate 扩展点（#3707）受到 fork 维护者认可。
- **使用场景**：多 group 部署、多 provider 切换、CI 并行测试、容器内主权优先处理。
- **真实诉求**："我希望 fork 能安全地扩展 SQLite mailbox 而不必修改上游源码"（Issue #3704）；"gateway 应能按 group 管理 credential"（Issue #3701）。

---

## 8. 待处理积压

| ID | 类型 | 创建时间 | 说明 | 建议优先级 |
|---|---|---|---|---|
| [#3705](https://github.com/nanocoai/nanoclaw/issues/3705) | Bug | 2026-09-03 | `--recurrence` 不重算下次触发 | 🔴 高 |
| [#3706](https://github.com/nanocoai/nanoclaw/issues/3706) | Bug | 2026-09-03 | `add-mount` 绝对路径双嵌套 | 🔴 高 |
| [#3709](https://github.com/nanocoai/nanoclaw/issues/3709) | Bug | 2026-09-03 | SQLite 测试并发冲突 | 🟡 中 |
| [#3701](https://github.com/nanocoai/nanoclaw/issues/3701) | 功能请求 | 2026-09-02 | gateway credential lane | 🟡 中 |
| [#3704](https://github.com/nanocoai/nanoclaw/issues/3704) | 功能请求 | 2026-09-03 | SqliteAgentMailbox 子类化 hook | 🟡 中 |

> 📌 **维护者关注**：3个高优先级 Bug（#3705/#3706/#3709）均为今日提交且尚无 fix，建议优先响应以维护用户信任。Provider contract 系列 PR 虽大但质量高，合入后将显著提升架构清晰度。

---

*报告生成时间：2026-09-04 | 数据来源：NanoClaw GitHub API*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw 项目动态日报**  
**日期：2026-09-04 | 仓库：nearai/ironclaw**

---

### 1. 今日速览
过去 24 小时 IronClaw 维持高吞吐迭代节奏：共处理 **17 个 PR**（11 个已合并/关闭，6 个待合并）与 **6 个 Issue**（3 个关闭，3 个新增/活跃）。主分支曾因测试引用退役扩展 ID 而变红，但通过 2 个紧急修复在当日迅速恢复。核心工程进展集中在前端 TypeScript 技术债清理、LLM 上下文预算模型化，以及子代理权限通知链路补全。社区侧对 MCP 错误可观测性和提示词预算溢出风险提出了新的质量诉求。

---

### 2. 版本发布
今日无新版本发布。

---

### 3. 项目进展
今日合并的 11 个 PR 推动了以下关键进展：

- **WebUI 工程化质量跃升**  
  [italic-jinxin](https://github.com/italic-jinxin) 主导了 4 个关联 PR，系统性地移除了生产组件、测试基础设施与 CI 中的 `@ts-nocheck` 指令：  
  - [#8037](https://github.com/nearai/ironclaw/pull/8037) — 建立遗留 TypeScript 抑制基线与棘轮机制，防止新增 `@ts-nocheck`/`@ts-ignore`。  
  - [#8039](https://github.com/nearai/ironclaw/pull/8039) — 为 64 个生产组件、Hooks 与页面补充显式类型，覆盖 React Query、DOM、Timer、Ref 与认证载荷。  
  - [#8040](https://github.com/nearai/ironclaw/pull/8040) — 移除全部 94 个测试侧 `@ts-nocheck`，并为 VM 模块导出、Storage Mock 与合成 JSX 渲染提供共享类型助手。  
  - [#8038](https://github.com/nearai/ironclaw/pull/8038) — 在前端 API 边界引入运行时 Decoder，对 device-link、pairing、notification setup 等响应进行类型校验与缺失 ID 前置拒绝。

- **对话体验与代理架构**  
  - [#8051](https://github.com/nearai/ironclaw/pull/8051)（[BenKurrek](https://github.com/BenKurrek)）**已合并**：修复 Slack/Telegram 回复串联历史模型调用文本的缺陷，确保“答案仅来自当前模型调用”，避免将内部思考过程暴露给终端用户。  
  - [#8046](https://github.com/nearai/ironclaw/pull/8046)（[henrypark133](https://github.com/henrypark133)）**已合并**：实现子代理审批/授权门控通知直达父级收件箱（R3 slice 3a），解决了子 Run 被阻塞时对父级完全不可见的“黑盒”问题。

- **性能与工具链优化**  
  - [#8043](https://github.com/nearai/ironclaw/pull/8043)（[henrypark133](https://github.com/henrypark133)）**已合并**：将流式文本增量的重复全量处理改为合并后单次处理，将 O(N·k) 字节拷贝降至 O(N)，实测 16 KiB × 1,000 增量场景下栈分配从千次级降至常量级。  
  - [#7984](https://github.com/nearai/ironclaw/pull/7984)（[henrypark133](https://github.com/henrypark133)）**已合并**：`tool_search` 回复按模型“首览信封”（first-look envelope）尺寸约束，避免 16 KB 有效载荷被压成 857 B 的 `omitted` 标记。

- **基础设施与 CI 修复**  
  - [#8045](https://github.com/nearai/ironclaw/pull/8045) 修复 CLI 烟雾测试中仅检测 banner 而未确认 TCP 监听就绪的竞态条件。  
  - [#8055](https://github.com/nearai/ironclaw/pull/8055) 与 [#8058](https://github.com/nearai/ironclaw/pull/8058) 分别修复了 `trace-api.ts` 路径引用错误与退役扩展 ID `web-push` 导致的持续集成失败，当日即恢复主分支绿色状态。

---

### 4. 社区热点
今日社区结构化提交活跃，但公开讨论（评论）整体偏少，仅有 1 条 Issue 带有评论：

- **[#8009 MCP egress errors flatten to "response_error", making discovery failures undiagnosable](https://github.com/nearai/ironclaw/issues/8009)**  
  作者 [pranavraja99](https://github.com/pranavraja99) 指出 `mcp_http_error` 将 `RuntimeHttpEgressError` 折叠为单一稳定原因码 `response_error`，丢弃了底层原因与字节计数，导致托管 MCP 发现失败时完全无法诊断。该 Issue 获得 1 条评论，反映出集成外部工具链的开发者对**可观测性与错误溯源**的强诉求。其余 Issue/PR 评论数均为 0，表明当前协作更偏向代码驱动的结构化沟通。

---

### 5. Bug 与稳定性
按严重程度与处理状态排列：

| 严重程度 | 事项 | 状态 | Fix PR |
|---|---|---|---|
| **中** | **[#8009](https://github.com/nearai/ironclaw/issues/8009)** MCP 出口错误扁平化为单一 `response_error`，诊断链路完全丢失 | **OPEN** | 暂无 |
| **中** | **[#8056](https://github.com/nearai/ironclaw/pull/8056)** host-api 嵌入工具结果文本若出现 JSON 闭界符先于开界符，会触发 panic | **待合并** | [#8056](https://github.com/nearai/ironclaw/pull/8056) |
| **低** | **[#8059](https://github.com/nearai/ironclaw/pull/8059)** Responses API cancel 原因硬编码为产品表面不接受的字符串，导致取消请求始终返回 400 | **待合并** | [#8059](https://github.com/nearai/ironclaw/pull/8059) |
| **低** | **[#8054](https://github.com/nearai/ironclaw/pull/8054)** Telegram 未配对用户首次点击 Start 时，命令列表先于配对通知展示 | **待合并** | [#8054](https://github.com/nearai/ironclaw/pull/8054) |
| **低（已修复）** | **[#8058](https://github.com/nearai/ironclaw/pull/8058)** 测试误用已退役扩展 ID `web-push` 导致主分支红 | **已合并** | — |
| **低（已修复）** | **[#8055](https://github.com/nearai/ironclaw/pull/8055)** WebUI 资产测试因 `authorizeTraceHold` 路径未同步到 `trace-api.ts` 而 panic | **已合并** | — |
| **低（已修复）** | **[#8045](https://github.com/nearai/ironclaw/pull/8045)** CLI 烟雾测试未等待 TCP 监听就绪即发起连接 | **已合并** | — |

---

### 6. 功能请求与路线图信号
- **提示词预算模型化（高概率纳入）**  
  **[#8057](https://github.com/nearai/ironclaw/issues/8057)** 提出当前预算仅按 transcript 计算，未将 identity、skills、tool schemas 等非 transcript 材料纳入，导致实际请求可能超出 loop 预期。配套 XL 级 PR **[#8053](https://github.com/nearai/ironclaw/pull/8053)** 已实现从模型 advertised context window 派生预算（取 90% 作为上限），并保留 20k 的 floor 保护。该功能极可能在近期合并，成为下一代上下文管理的基础设施。

- **LLM 提供商适配层演进**  
  **[#8044](https://github.com/nearai/ironclaw/pull/8044)**（待合并）将 Claude 缓存支持从 allowlist 改为 denylist 机制，避免未来新家族（如 `claude-fable-*`）默认降级；同时为 OpenAI Responses  transport 补发 `prompt_cache_key`。这显示项目正在从“逐个型号适配”转向“可持续的提供商协议适配”。

- **多代理权限与治理**  
  **[#8046](https://github.com/nearai/ironclaw/pull/8046)** 的合并标志着“子代理审批/授权可达父级收件箱”成为默认行为，多代理协作（R3）是明确的长期路线图。

---

### 7. 用户反馈摘要
从 Issue 与 PR 描述中提炼的真实诉求与痛点：

- **可观测性瓶颈**：开发者在集成外部 MCP 服务时，一旦遭遇网络/认证/数据层故障，只能拿到单一代码 `response_error`，无字节计数、无原始原因，严重阻碍托管 MCP 的发现与排障（[#8009](https://github.com/nearai/ironclaw/issues/8009)）。
- **成本控制与预算精确性**：用户担忧 identity、skill snippet、tool schema 等“隐性 token”堆叠在 transcript 预算之上，既造成提供商请求超支，也带来不可预期的上下文截断（[#8057](https://github.com/nearai/ironclaw/issues/8057)）。
- **产品表面体验破碎**：在 [#8051](https://github.com/nearai/ironclaw/pull/8051) 修复前，Slack/Telegram 用户收到的是多次模型内部搜索/思考文本的拼接结果，而非最终答案；[#8054](https://github.com/nearai/ironclaw/pull/8054) 则暴露了 Telegram 新用户首次接触时先看到命令列表、看不到配对引导的流失风险。
- **质量监控内化**：[#8052](https://github.com/nearai/ironclaw/issues/8052) 的每日失败分类显示团队已将 benchmark（如 officeqa 上 deepseek-v4-flash 的 OCR 错误）纳入日常质量运营，追求“所有非通过项均为真实模型质量错误”而非系统噪声。

---

### 8. 待处理积压
以下 Issue/PR 已开放较长时间，建议维护者优先审阅：

- **[#7988](https://github.com/nearai/ironclaw/pull/7988) chore(agents): refresh codebase knowledge graph**  
  创建于 2026-08-29，由 nightly CI 自动生成，已积压约一周。虽属常规维护，但长期未合并会导致代码库记忆快照与主分支偏离，影响 agent 的上下文检索准确性。

- **[#8009](https://github.com/nearai/ironclaw/issues/8009) MCP egress errors flatten to "response_error"**  
  创建于 2026-08-31，已开放 4 天，尚无关联修复 PR。该问题直接破坏外部工具链的诊断能力，建议评估是否在 MCP 传输层增加原始错误透传字段或结构化日志，而非仅暴露稳定原因码。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**报告日期**：2026-09-04
**数据来源**：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览

LobsterAI 在过去 24 小时展现出较高的迭代活跃度，共处理 14 个 PR（已合并/关闭 9 个，待合并 5 个）与 6 个 Issue（已关闭 2 个，新开/活跃 4 个）。**当日最大的事件是 2026.8.31 正式版本的发布准备**（PR #2600 已合并），同时社区集中提交了多个面向 2026.9.4 版本线的功能恢复与缺陷修复 PR。项目整体处于"版本交付冲刺 + 下一版本功能预研"的双轨并行阶段，健康度良好，未出现 P0 级崩溃或重大回归。

---

## 2. 版本发布

⚠️ **无新版本发布**。但有一个关键里程碑值得注意：

- **2026.8.31 发布分支已合并**（PR [#2600](https://github.com/netease-youdao/LobsterAI/pull/2600)），预计即将打 tag。该版本主要变化：
  - 引导式首次运行体验（guided first-run）
  - Library 浏览性能与可靠性提升
  - 客户端支持分享模型生成的视频
  - 登录与配额提示文案优化
  - Windows 安装器恢复能力增强
- **下一版本 2026.9.4 的开发已启动**，从 PR #2602 的标题（"feat(browser): restore interactive in-app browser"）可以确认开发分支已切到 9.4 线。

---

## 3. 项目进展

今日共合并/关闭 9 个 PR，按重要性排列：

### 🚀 功能级进展
- **[#2602 feat(browser): 恢复交互式应用内浏览器](https://github.com/netease-youdao/LobsterAI/pull/2602)** — 作者 btc69m979y-dotcom。恢复 2026.9.4 版本的交互式应用内 Agent 浏览器、LobsterAI browser MCP bridge、加密凭据保存、审批门控的 Agent 自动填充等核心能力。**这是 9.4 版本最重要的功能模块回归**。

### 🛠️ 缺陷修复
- **[#2605](https://github.com/netease-youdao/LobsterAI/pull/2605)** — Windows 安装器声明 DPI-aware，修复模糊图标问题（fisherdaddy）
- **[#2606](https://github.com/netease-youdao/LobsterAI/pull/2606)** — Windows 安装器不再弹出控制台窗口（fisherdaddy）
- **[#2607](https://github.com/netease-youdao/LobsterAI/pull/2607)** — OpenClaw 插件包体积优化：移除 dsh 的 MCP server 注册与 coding 任务委派逻辑，**精简了不必要的依赖同步**（fisherdaddy）
- **[#2608](https://github.com/netease-youdao/LobsterAI/pull/2608)** — 文档与 dsh MCP 委派逻辑清理（fisherdaddy）
- **[#2604](https://github.com/netease-youdao/LobsterAI/pull/2604)** — Cowork 语音输入按钮在 ASR 配额耗尽时正确显示 dim 状态，并新增对应测试用例（liuzhq1986）
- **[#2603](https://github.com/netease-youdao/LobsterAI/pull/2603)** — 语音配额耗尽文案中英文 i18n 优化（liuzhq1986）
- **[#2599](https://github.com/netease-youdao/LobsterAI/pull/2599)** — IM 机器人卡片布局优化：最多两列响应式、空白添加卡片紧凑化（liuzhq1986）

### 📦 流程类
- **[#2600 Release: 2026.8.31](https://github.com/netease-youdao/LobsterAI/pull/2600)** — 版本发布主干合并

**总体评估**：今日 PR 节奏紧凑且目标明确，主要围绕"2026.8.31 收尾 + 2026.9.4 启动"，没有出现反复回滚或 hotfix，说明主线分支较为稳定。

---

## 4. 社区热点

今日讨论度最高的两个话题：

### 🔥 Issue #1556 — IM 机器人配置指南 404（已关闭）
- 链接：https://github.com/netease-youdao/LobsterAI/issues/1556
- 评论数：3
- **诉求分析**：用户发现官方文档链接（IM机器人配置指南）404，反映**官方文档链接维护是系统性痛点**。该 issue 被标记为 `stale` 后关闭，说明可能通过其他渠道（站点迁移/链接更新）已处理，但**维护者应建立文档链接的自动化巡检机制**。

### 🔥 Issue #1552 — AI 产物 Markdown 预览及文件卡片支持（已关闭）
- 链接：https://github.com/netease-youdao/LobsterAI/issues/1552
- 评论数：2
- **诉求分析**：用户希望 Write 工具创建文件后能直接在应用内预览（而非让 Agent 再 Read 一遍贴出来），并提出文件卡片（FileCard）设计。这是一个**典型的"输出可观测性"需求**——用户希望更直观地看到 Agent 的中间产物，对写作、文档生成场景意义重大。Issue 已关闭，**建议追踪后续是否有对应 PR 落地**。

### 🆕 Issue #2601 — 桌面端支持 MCP Apps / Prefab UI 渲染
- 链接：https://github.com/netease-youdao/LobsterAI/issues/2601
- 评论数：1（当日新开）
- **诉求分析**：用户希望桌面端支持 MCP Apps 扩展协议（如 PrefectHQ Prefab / FastMCP），以便渲染 MCP 服务返回的 `ui://` 交互式 HTML 资源。**这是一个面向生态兼容的前瞻性需求**，与 PR #2602 的浏览器恢复方向一致，说明社区正在推动 LobsterAI 向更开放的 MCP 生态靠拢。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🟠 高优先级（功能性 Bug，影响主流程）
| 编号 | 描述 | 严重度 | 是否有 fix |
|------|------|--------|----------|
| [#1088](https://github.com/netease-youdao/LobsterAI/issues/1088) | Prefetch 异步回调不校验 turnToken，可能跨轮次污染（`openclawRuntimeAdapter.ts:3809-3814`） | 高 — 会导致消息上下文错乱 | ❌ 暂无 PR |
| [#1089](https://github.com/netease-youdao/LobsterAI/issues/1089) | CoworkRunner startSession/continueSession 无重入保护，并发调用导致流式消息损坏与重复（`coworkRunner.ts:1425-1533`） | 高 — IM 批量投递场景下必现 | ❌ 暂无 PR |
| [#1082](https://github.com/netease-youdao/LobsterAI/issues/1082) | openclaw.version 停在 v2026.3.2，与国家互联网应急中心要求更新到最新版本的要求存在合规风险 | 中-高（合规） | ❌ 暂无 PR |

### 🟡 中优先级（体验类 Bug）
| 编号 | 描述 | 严重度 | 是否有 fix |
|------|------|--------|----------|
| [#1556](https://github.com/netease-youdao/LobsterAI/issues/1556) | IM 机器人配置指南文档链接 404 | 中 — 影响新用户上手 | ✅ 已关闭（推测已修复/链接更新） |

### 🟢 低优先级（已闭环）
- Windows 安装器 DPI 模糊（PR #2605 ✅）
- Windows 安装器弹出控制台窗口（PR #2606 ✅）
- 语音按钮配额耗尽状态显示（PR #2604 ✅）

**稳定性观察**：两个核心并发 Bug（#1088、#1089）已报告超过 5 个月（2026-03-31 创建），但至今没有对应的修复 PR。**这两个 Bug 在生产环境中很可能真实发生**，尤其 #1089（IM 网关批量投递触发），建议维护者优先排期。

---

## 6. 功能请求与路线图信号

今日可见的新功能信号：

| 需求 | 关联 Issue/PR | 进入下版本的可能性 |
|------|--------------|------------------|
| **MCP Apps / Prefab UI 渲染** | [#2601](https://github.com/netease-youdao/LobsterAI/issues/2601) | 高 — 与 9.4 的浏览器恢复方向一致 |
| **AI 产物 Markdown 预览与文件卡片** | [#1552](https://github.com/netease-youdao/LobsterAI/issues/1552)（已关闭） | 中 — 已被关闭但无对应 PR 落地，需跟进 |
| **定时任务失败时 IM 告警** | [PR #1078](https://github.com/netease-youdao/LobsterAI/pull/1078)（Open） | 中 — 需求明确，PR 长期未合 |
| **Cowork「当前进程」右侧面板 + diff 视图** | [PR #1079](https://github.com/netease-youdao/LobsterAI/pull/1079)（Open） | 中 — 提升 Cowork 可观测性，与 #1552 思路同源 |

**路线图信号**：项目下一阶段重点是"Agent 输出的可观测性"（文件卡片、进程面板、diff 视图）与"MCP 生态兼容性"（Prefab UI、browser MCP bridge）。

---

## 7. 用户反馈摘要

从今日活跃 Issues 的评论中提炼的真实用户痛点：

- 📌 **文档链接失效成系统性问题**（#1556）：用户对官方文档站点的稳定性缺乏信任，建议维护者建立自动化 404 巡检。
- 📌 **Agent 输出缺乏直观的中间产物展示**（#1552）：用户不得不让 Agent 自己 Read 文件再粘贴，浪费对话上下文，反映"工具调用结果可视化"是核心体验短板。
- 📌 **合规焦虑**（#1082）：用户主动引用国家互联网应急中心要求，担忧 openclaw 版本过旧存在安全风险，反映企业用户对供应链更新的重视。
- 📌 **并发场景下的消息可靠性**（#1088、#1089）：两位独立用户分别指出异步 Prefetch 与 IPC fire-and-forget 导致的会话状态污染，说明**快速连续发送 / IM 网关批量投递是高频场景**。

正面反馈：今日合并的 PR #2604（语音按钮 dim 状态）专门提到"保留点击可打开配额提示"，说明维护者注重体验而非简单禁用，是正向的产品决策。

---

## 8. 待处理积压

⚠️ **以下 PR/Issue 已超过 5 个月未响应，建议维护者优先关注**：

| 类型 | 编号 | 标题 | 创建日期 | 风险 |
|------|------|------|----------|------|
| Issue | [#1082](https://github.com/netease-youdao/LobsterAI/issues/1082) | openclaw 版本过旧合规风险 | 2026-03-30 | 合规 |
| Issue | [#1088](https://github.com/netease-youdao/LobsterAI/issues/1088) | Prefetch 跨轮次污染 | 2026-03-31 | 稳定性 |
| Issue | [#1089](https://github.com/netease-youdao/LobsterAI/issues/1089) | CoworkRunner 无重入保护 | 2026-03-31 | 稳定性（IM 批量投递必现） |
| PR | [#1078](https://github.com/netease-youdao/LobsterAI/pull/1078) | 定时任务失败 IM 告警 | 2026-03-30 | 用户体验 |
| PR | [#1079](https://github.com/netease-youdao/LobsterAI/pull/1079) | Cowork 当前进程面板 + diff | 2026-03-30 | 用户体验 |
| PR | [#1081](https://github.com/netease-youdao/LobsterAI/pull/1081) | MCP 同步提示 i18n 与弹窗样式 | 2026-03-30 | 体验细节 |
| PR | [#1087](https://github.com/netease-youdao/LobsterAI/pull/1087) | continueSession 重复错误消息 | 2026-03-31 | 用户体验 |
| PR | [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | electron 40.2.1 → 44.0.0 依赖升级 | 2026-04-02 | 安全/兼容性 |

**维护建议**：
1. **优先处理 #1089** —— IM 场景的并发必现 Bug，影响生产可用性；
2. **优先处理 #1088** —— 与 #1089 同源，可一并修复 agentEngine 的并发原语；
3. **关注 #1277** —— Electron 大版本升级（40 → 44）搁置 5 个月，应评估是否阻塞 9.4 版本；
4. **批量处理 #1078/#1079/#1081/#1087** —— 这 4 个 PR 都是体验改进类，可合并到 9.4 backlog。

---

## 📊 健康度评分

| 维度 | 评分 | 说明 |
|------|------|------|
| 提交活跃度 | ⭐⭐⭐⭐⭐ | 14 个 PR，节奏稳定 |
| 版本交付 | ⭐⭐⭐⭐ | 2026.8.31 收尾，9.4 启动顺利 |
| Bug 响应 | ⭐⭐ | 5 个月前报告的并发 Bug 仍未修复 |
| 社区互动 | ⭐⭐⭐ | Issues 数量适中，但评论密度偏低 |
| 文档维护 | ⭐⭐ | 存在文档链接 404 类系统性问题 |
| **综合** | **⭐⭐⭐** | 项目主线推进健康，但**积压响应能力**需加强 |

---

*报告生成时间：2026-09-04 | 数据范围：2026-09-03 ~ 2026-09-04*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报

**日期**：2026-09-04
**数据来源**：github.com/moltis-org/moltis

---

## 1. 今日速览

Moltis 项目在过去 24 小时内活跃度较低，处于**静默维护期**。无新增 Issues、无 PR 合并、无新版本发布，唯一动态是 1 条尚待合并的 PR（#1257），涉及 hooks 生命周期事件补全。整体而言，项目处于代码评审阶段，尚未出现明显的合并节奏。建议关注 PR #1257 的评审进展，以及它落地后对 hooks 子系统的稳定性影响。

---

## 2. 版本发布

无新版本发布。本节省略。

---

## 3. 项目进展

过去 24 小时内**无任何 PR 合入或关闭**，无新增里程碑式推进。整体方向未发生实质性变化。

---

## 4. 社区热点

社区交互显著清淡：

- **PR #1257**：标题 `fix(hooks): complete lifecycle dispatch`，作者 GTanger，⭐ 0、💬 0 评论，目前仅有代码提交、尚无审查反馈。该 PR 旨在补齐 hooks 模块中先前声明但未实际派发的事件（`AgentEnd`、`MessageSending`、`MessageSent`），并为关键 hook 入参引入 `tool_call_id`，以贯穿一次工具调用全链路的可关联性。
- Issues/PRs 评论数为 0，**社区参与度处于近期低位**，缺乏外部反馈推动。

📎 https://github.com/moltis-org/moltis/pull/1257

---

## 5. Bug 与稳定性

今日**未报告任何新 Bug、崩溃或回归问题**。值得注意的是，PR #1257 虽以 `fix` 命名，但其性质更偏向"功能补全 + 一致性修复"——它修复的是 hooks 事件声明与实际派发不一致的隐患，属于稳定性改进范畴。

- **严重程度**：中等（潜在——影响 hook 订阅者的预期行为）
- **修复 PR**：#1257（OPEN，待合并）

📎 https://github.com/moltis-org/moltis/pull/1257

---

## 6. 功能请求与路线图信号

无新增功能请求。但 PR #1257 反映出**项目自身演进的一个明确方向**：补齐 hooks 生命周期事件，提升 AI agent 在工具调用场景下的可观测性。这对于构建可靠的 agent 框架是必要的基础设施，预期会被纳入下一版本。

可纳入下一版本的潜在功能/改进：
- **完整的 hooks 事件流**（`AgentEnd`、`MessageSending`、`MessageSent`）
- **工具调用级 ID 关联**（`tool_call_id`）以便端到端追踪

📎 https://github.com/moltis-org/moltis/pull/1257

---

## 7. 用户反馈摘要

今日 Issues 评论为 0，**无真实用户痛点、使用场景或满意度反馈可供提炼**。从 PR #1257 的提交内容可间接推断出 hooks 集成方（可能包含本项目贡献者或下游用户）此前面临以下诉求：

> "声明过的生命周期事件理应真正派发，否则上层监听逻辑要么默默失效、要么被迫自兜底。"

这一诉求的满足将在下一版本中显著降低 hook 消费者的接入成本。

📎 https://github.com/moltis-org/moltis/pull/1257

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建/更新 | 状态 |
|---|---|---|---|---|
| PR | #1257 | fix(hooks): complete lifecycle dispatch | 2026-09-02 创建 / 2026-09-03 更新 | OPEN，0 评论、0 反应 |

**维护者关注建议**：

- PR #1257 已停留 1-2 天但尚无 reviewer 响应，作为修复 hooks 一致性的关键 PR，建议尽快指派 reviewer 推动评审并合入，避免积压成为长期悬挂项。
- 建议维护者同步检查是否还有其他已声明但未派发的事件，以一次性收敛相关技术债。

📎 https://github.com/moltis-org/moltis/pull/1257

---

## 项目健康度评估

| 维度 | 状态 |
|---|---|
| 代码合入节奏 | 🟡 静默（24h 内 0 合入） |
| Issue 响应 | 🟢 无积压新问题 |
| PR 评审速度 | 🟡 #1257 待响应 |
| 版本发布 | 🟢 未发现破坏性更新风险 |
| 社区参与度 | 🟡 评论/反应均为 0 |

**结论**：Moltis 当前处于典型的"小版本维护期"。核心信号是 PR #1257 触达的 hooks 完整性问题——它虽小但对 agent 框架的可扩展性影响较大，建议维护者优先处置。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>



# CoPaw 项目动态日报 — 2026-09-04

## 1. 今日速览

CoPaw 今日保持高度活跃：**v2.2.0 稳定版正式发布**，核心亮点为多租户 QwenPaw Hub；过去24小时新增/活跃 Issues 23条、PR 18条，社区反馈密集。安全类 Issue 引发关注（沙箱突破、危险指令规避），多 Agent 协作体验、WebUI 加载性能、渠道流式传输等痛点持续涌现。整体项目处于版本迭代后的快速反馈期，健康度良好。

---

## 2. 版本发布

### v2.2.0（Stable）

**核心更新：**
- **QwenPaw Hub 多租户版**：支持本地进程/Docker 运行时部署，提供工作区级访问控制、凭证管理和反向代理支持 ([PR #7112](https://github.com/agentscope-ai/QwenPaw/pull/7112))
- **ReMe 升级**：内置 ReMe 运行时升级至 `0.4.1.11`，新增 Auto Fin 定时长期记忆源 ([PR #7441](https://github.com/agentscope-ai/QwenPaw/pull/7441)，已合并)
- **受保护执行契约**：新增 workspace prompt 前的执行/澄清/授权契约机制 ([PR #7520](https://github.com/agentscope-ai/QwenPaw/pull/7520)，已合并)

**已知回退/注意事项：**
- PR #7337（`max_tokens` → `max_output_length` 迁移）导致自定义 Provider 加载失败，已有修复 Issue [#7474](https://github.com/agentscope-ai/QwenPaw/issues/7474)
- Desktop 端 `harnesses/codex` 后端在非流式场景下返回空响应，Issue [#7431](https://github.com/agentscope-ai/QwenPaw/issues/7431)
- 2.2.0 Beta 引入 `loop.rubric` 确认交互与 auto-fold 冲突，首条实质性回复被隐藏，Issue [#7467](https://github.com/agentscope-ai/QwenPaw/issues/7467)（已关闭）

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 类型 | 说明 |
|----|------|------|
| [#7267](https://github.com/agentscope-ai/QwenPaw/pull/7267) | Bug Fix | 渠道契约检查跨平台兼容修复（UTF-8 编码问题），关闭 #7264 |
| [#7441](https://github.com/agentscope-ai/QwenPaw/pull/7441) | Feature | ReMe 升级至 0.4.1.11，新增 Auto Fin 定时记忆源 |
| [#7520](https://github.com/agentscope-ai/QwenPaw/pull/7520) | Feature | 受保护执行契约（protected execution contract）落地 |
| [#7523](https://github.com/agentscope-ai/QwenPaw/pull/7523) | Bug Fix | 流式响应期间会话切换同步修复，支持多并发会话 |
| [#7515](https://github.com/agentscope-ai/QwenPaw/issues/7515) | Release | v2.2.0 安装验证通过（四节点全绿） |

**整体推进：** 本周期聚焦多租户架构落地、记忆系统增强、执行安全契约及关键 Bug 修复，项目从 Beta 向 Stable 过渡的关键基础设施已基本就位。

---

## 4. 社区热点

| Issue | 评论数 | 摘要 |
|-------|--------|------|
| [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | 16 | **QwenPaw Hub 多租户版路线图征集**——社区对团队协作功能诉求强烈，关联 #2324 等多用户需求 |
| [#7511](https://github.com/agentscope-ai/QwenPaw/issues/7511) | 9 | **安全沙箱被突破**（已关闭）——引用知乎文章，引发安全关注 |
| [#7450](https://github.com/agentscope-ai/QwenPaw/issues/7450) | 7 | **主/子 Agent 进度查询体验缺陷**——用户需主动询问才能触发子 Agent 状态同步，影响复杂任务可观测性 |
| [#4036](https://github.com/agentscope-ai/QwenPaw/issues/4036) | 6 | **添加模型步骤繁琐**——多次点击跳转，长期存在且标记为 good first issue |
| [#7443](https://github.com/agentscope-ai/QwenPaw/issues/7443) | 6 | **危险指令规避漏洞**——引用技术文章，与 #7511 同作者，反映安全审计需求 |

**热点分析：** 多租户功能（#7318）是社区最高关注点，用户期待 Hub 之后继续深化协作能力；安全类 Issue 集中出现（#7511、#7443），提示需加强安全审查和响应机制。

---

## 5. Bug 与稳定性

### 高优先级

| Issue | 严重程度 | 描述 | Fix PR |
|-------|----------|------|--------|
| [#7511](https://github.com/agentscope-ai/QwenPaw/issues/7511) | 🔴 高 | 安全沙箱突破 | —（已关闭，需跟进加固） |
| [#7443](https://github.com/agentscope-ai/QwenPaw/issues/7443) | 🔴 高 | 危险指令规避 | — |
| [#7534](https://github.com/agentscope-ai/QwenPaw/issues/7534) | 🟠 中高 | 飞书 session consumer 卡死，会话静默无响应 | — |
| [#7476](https://github.com/agentscope-ai/QwenPaw/issues/7476) | 🟠 中高 | Cron 任务在 misfire_grace 窗口内重复调度，备份脚本执行两次 | — |
| [#7431](https://github.com/agentscope-ai/QwenPaw/issues/7431) | 🟠 中高 | Codex 后端非流式网关返回空响应，usage 全 0 | — |
| [#7505](https://github.com/agentscope-ai/QwenPaw/issues/7505) | 🟡 中 | 局域网 LLM Server 频繁 client disconnect 导致超时 | — |
| [#7510](https://github.com/agentscope-ai/QwenPaw/issues/7510) | 🟡 中 | ReMe `/memory/status` 在 v2.2.0-beta.7 Desktop 返回 500 | — |
| [#7513](https://github.com/agentscope-ai/QwenPaw/issues/7513) | 🟡 中 | DeepSeek-v4-pro 对话中工具调用与 Agent 输出混合显示异常 | — |
| [#7516](https://github.com/agentscope-ai/QwenPaw/issues/7516) | 🟡 中 | WeCom 渠道不支持 base64 data URL 图片发送 | — |
| [#7507](https://github.com/agentscope-ai/QwenPaw/issues/7507) | 🟡 中 | WeCom 流式输出逐字延迟（150ms throttle），体验明显劣于微信 | — |
| [#7529](https://github.com/agentscope-ai/QwenPaw/issues/7529) | 🟡 中 | Langfuse 监控工具输出字段为空 | [PR #7532](https://github.com/agentscope-ai/QwenPaw/pull/7532)（待合并） |

---

## 6. 功能请求与路线图信号

| Issue/PR | 需求描述 | 关联 PR | 纳入可能性 |
|----------|----------|---------|------------|
| [#7519](https://github.com/agentscope-ai/QwenPaw/issues/7519) | 手机移动端远程连接桌面端 | — | 中等（与原生移动端方向相关） |
| [#7533](https://github.com/agentscope-ai/QwenPaw/issues/7533) | 消息按钮交互支持 | — | 待定 |
| [#7540](https://github.com/agentscope-ai/QwenPaw/issues/7540) | 可选关闭硬编码 identity line | — | 低（配置项扩展） |
| [#7535](https://github.com/agentscope-ai/QwenPaw/issues/7535) | Matrix 渠道 Element 兼容性（OIDC/MSC2965） | — | 低（渠道特定） |
| [#1775](https://github.com/agentscope-ai/QwenPaw/issues/1775) | Codex 风格 steer mode（执行中补充信息纠正行为） | — | 中等（与 Agent 交互模式相关） |
| [#7527](https://github.com/agentscope-ai/QwenPaw/issues/7527) | Context compaction 时保留 Agent 人设和对话风格 | — | 中等（记忆系统优化） |
| [#7541](https://github.com/agentscope-ai/QwenPaw/issues/7541) | 架构问题：会话不应按渠道隔离 | — | 高（架构层面需决策） |

**进行中的功能 PR：**
- [#7539](https://github.com/agentscope-ai/QwenPaw/pull/7539) — Playwright Chromium 懒加载，消除启动阻塞
- [#7538](https://github.com/agentscope-ai/QwenPaw/pull/7538) — 环境变量管理统一
- [#6960](https://github.com/agentscope-ai/QwenPaw/pull/6960) — 从 Codex/Qoder 导入配置/技能/项目
- [#7080](https://github.com/agentscope-ai/QwenPaw/pull/7080) — PowerContext 长期记忆后端
- [#7509](https://github.com/agentscope-ai/QwenPaw/pull/7509) — Make Skill v2（审批驱动的工作流）
- [#7378](https://github.com/agentscope-ai/QwenPaw/pull/7378) — QwenPaw 原生移动端（Expo/React Native，Draft 状态）

---

## 7. 用户反馈摘要

**痛点集中在以下场景：**

1. **多 Agent 协作可观测性不足**（#7450）：主 Agent 不主动轮询子 Agent 状态，用户需反复询问"进度如何"，影响复杂任务执行体验。

2. **渠道体验不一致**：WeCom 流式输出明显慢于微信（#7507），且不支持 base64 图片（#7516）；飞书 session consumer 卡死导致静默失败（#7534）。

3. **配置/添加模型门槛高**（#4036）：添加模型需多次跳转，已被标记为 good first issue 超过 4 个月。

4. **远程 WebUI 首次加载慢**（#7514/#7518）：移动端远程访问场景下对话历史加载滞后明显。

5. **安全焦虑**（#7511/#7443）：安全沙箱和指令规避问题引发用户信任担忧，需官方明确回应。

6. **会话架构设计争议**（#7541）：用户指出按渠道隔离会话的架构设计不合理，期望统一会话视图。

---

## 8. 待处理积压

| Issue/PR | 状态 | 创建时间 | 建议关注 |
|----------|------|----------|----------|
| [#4036](https://github.com/agentscope-ai/QwenPaw/issues/4036) | OPEN / good first issue | 2026-05-04 | **严重积压**：添加模型流程优化，6个月未处理 |
| [#1775](https://github.com/agentscope-ai/QwenPaw/issues/1775) | OPEN / good first issue | 2026-03-18 | **严重积压**：steer mode 交互，6个月+未处理 |
| [#7541](https://github.com/agentscope-ai/QwenPaw/issues/7541) | OPEN | 2026-09-03 | 架构级问题，需维护者决策 |
| [#7534](https://github.com/agentscope-ai/QwenPaw/issues/7534) | OPEN | 2026-09-03 | 飞书消费卡死，影响生产环境稳定性 |
| [#7476](https://github.com/agentscope-ai/QwenPaw/issues/7476) | OPEN | 2026-09-01 | Cron 重复调度，数据一致性风险 |
| [#7401](https://github.com/agentscope-ai/QwenPaw/pull/7401) | Under Review | 2026-08-29 | Windows ACP agent 启动卡死修复，等待审核 |
| [#7532](https://github.com/agentscope-ai/QwenPaw/pull/7532) | OPEN | 2026-09-03 | Langfuse 工具输出为空修复，待合并 |

---

*日报生成时间：2026-09-04 | 数据来源：github.com/agentscope-ai/CoPaw*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



# ZeroClaw 项目动态日报 — 2026-09-04

## 1. 今日速览

过去24小时 ZeroClaw 保持高活跃度：共处理 50 条 Issue 与 50 条 PR，其中新开/活跃 Issue 36 条、已关闭 14 条；PR 待合并 44 条、已合并/关闭 6 条。项目无新版本发布，但安全相关 RFC 讨论（沙箱策略、可验证意图）与多渠道一致性修复是今日焦点，整体开发节奏稳健，维护者团队对积压 issue 的清理力度明显增强。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日关闭/合并的关键工作：

| 编号 | 类型 | 内容摘要 |
|------|------|----------|
| [#7543](https://github.com/zeroclaw-labs/zeroclaw/issues/7543) | 功能已关闭 | Gateway Web Chat 多会话支持——Session 侧边栏（新建/切换/重命名/删除）功能已进入实现阶段并标记完成 |
| [#9654](https://github.com/zeroclaw-labs/zeroclaw/issues/9654) | Bug 已关闭 | 真实操作者拒绝被模型误解析为无意义字符串的问题已修复，与 PR #9423 配套完成 |
| [#9811](https://github.com/zeroclaw-labs/zeroclaw/issues/9811) | Bug 已关闭 | `/health` 端点错误报告未连接 Channel 为 healthy 的问题已修复 |
| [#10238](https://github.com/zeroclaw-labs/zeroclaw/issues/10238) | Bug 已关闭 | ZeroCode 在 daemon 退出后仍显示过时 Connected 状态的问题已修复 |
| [#9905](https://github.com/zeroclaw-labs/zeroclaw/issues/9905) | Bug 已关闭 | Discord 音频转录管理器未绑定到活跃 Agent Provider 的问题已修复 |
| [#9510](https://github.com/zeroclaw-labs/zeroclaw/issues/9510) | CI 改进已关闭 | 引入 blame-collapse 守卫，拒绝无共同祖先的 PR，防止 git blame 历史破坏 |
| [#9857](https://github.com/zeroclaw-labs/zeroclaw/issues/9857) | Bug 已关闭 | JSONL Session 文件类型定义不一致问题已修复 |
| [#10202](https://github.com/zeroclaw-labs/zeroclaw/issues/10202) | Bug 已关闭 | log-based 依赖记录无法到达 tracing subscriber 的问题已修复 |
| [#10486](https://github.com/zeroclaw-labs/zeroclaw/issues/10486) | Bug 已关闭 | Matrix Channel 忽略 `[providers.transcription.*]` 配置的问题已修复 |

**整体评估：** 6 条 PR 合入（主要集中在 RPC 连接管理、Cron 超时、Anthropic 拒绝处理、Cost 价格不可用提示），14 个 Issue 关闭，覆盖 security、channel、runtime、observability 多个领域，项目健康度良好。

---

## 4. 社区热点

### 🔥 评论最多 Issues（Top 6）

| Issue | 评论数 | 主题 | 链接 |
|-------|--------|------|------|
| #6996 | 23 | RFC: 细粒度沙箱策略——文件系统限制 | [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) |
| #9328 | 14 | Bug: 可验证意图未验证凭证链 | [#9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) |
| #8692 | 14 | Tracker: RFC/设计 Issue 维护者决策队列 | [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) |
| #10050 | 13 | RFC: Gateway 原始消息发送（无需 Agent Turn） | [#10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050) |
| #9975 | 12 | RFC: Web Bundle/Daemon 兼容性定义 | [#9975](https://github.com/zeroclaw-labs/zeroclaw/issues/9975) |
| #7822 | 12 | RFC: WASM 插件生命周期观察者订阅 | [#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822) |

**热点分析：**
- **安全架构讨论密集**：#6996（沙箱文件系统限制）与 #9328（可验证意图凭证链）是当前最受关注的两个安全议题，反映社区对 Agent 权限控制与可验证性的高度关切。
- **RFC 治理机制完善**：#8692 建立维护者决策队列，标志项目从"无序讨论"向"结构化治理"演进。
- **Gateway 扩展需求强烈**：#10050 提出不经过 Agent Turn 的原始消息发送，解决 Gateway 47 个 API 路径中缺失直接消息透传能力的痛点。

---

## 5. Bug 与稳定性

### 严重 Bug（P1 / S1-S2）

| Issue | 严重程度 | 组件 | 状态 | Fix PR | 链接 |
|-------|----------|------|------|--------|------|
| #9899 | P1 | Security/Dependencies | Blocked | — | [#9899](https://github.com/zeroclaw-labs/zeroclaw/issues/9899) |
| #10068 | S2 | Runtime/CLI | In-progress | — | [#10068](https://github.com/zeroclaw-labs/zeroclaw/issues/10068) |
| #10603 | S1 | Provider/OpenCode | Open | — | [#10603](https://github.com/zeroclaw-labs/zeroclaw/issues/10603) |
| #9387 | P1 | Channel/Security | Closed | ✅ | [#9387](https://github.com/zeroclaw-labs/zeroclaw/issues/9387) |
| #9231 | S1 | Runtime/Docker | Closed | ✅ | [#9231](https://github.com/zeroclaw-labs/zeroclaw/issues/9231) |
| #9983 | S3 | Provider | Closed | ✅ | [#9983](https://github.com/zeroclaw-labs/zeroclaw/issues/9983) |

**重点未解决问题：**
- **#9899（Blocked）**：`bitmaps 3.2.1` 通过 `imbl` 依赖引入 RUSTSEC-2026-0247 漏洞，CI 安全检查阻断，需上游依赖修复或替换方案。
- **#10603（Open/S1）**：OpenCode Provider 未发送 `x-opencode-session` Header，导致 Go 模型请求失败并存在账号封禁风险，**今日新开，需优先处理**。
- **#10068（In-progress）**：Interactive Agent Session 上下文被硬编码限制在 32,000 tokens，忽略 `max_context_tokens = 131072` 配置，影响长会话用户体验。

---

## 6. 功能请求与路线图信号

### 高优先级 RFC / 功能提案

| Issue | 类型 | 核心需求 | 纳入可能性 | 链接 |
|-------|------|----------|------------|------|
| #6996 | RFC | 细粒度沙箱策略，统一 Application 层与 OS 层文件系统限制 | ⭐⭐⭐ 高 | [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) |
| #10050 | RFC | Gateway 原始消息透传路由，无需 Agent Turn | ⭐⭐ 中 | [#10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050) |
| #9975 | RFC | Web Bundle/Daemon 兼容性契约（Rev 3） | ⭐⭐ 中 | [#9975](https://github.com/zeroclaw-labs/zeroclaw/issues/9975) |
| #7822 | RFC | WASM 插件 Observer Capability 生命周期订阅 | ⭐⭐ 中 | [#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822) |
| #10222 | RFC | 交互式 Agent 单 Tool Provider Round（opt-in） | ⭐⭐⭐ 高 | [#10222](https://github.com/zeroclaw-labs/zeroclaw/issues/10222) |

### 实施跟踪器（已接受 RFC 的落地协调）

- **#10405**：Session 级 Prompt Attachments 实现批次（#9998 的落地协调）
- **#10570**：Code-pane/ACP Session 内存连续性分阶段实现
- **#10406**：Gemini Speech-to-Speech Broker Channel 实现
- **#10330**：已接受 RFC 实现索引

**路线图信号：** 项目正系统性推进「安全沙箱化」「多 Provider 精细控制」「WASM 插件生态」三大方向，Anthropic Thinking Display 支持（#10529 已关闭）表明对主流 Provider 新特性的跟进节奏稳定。

---

## 7. 用户反馈摘要

| 反馈主题 | 来源 | 摘要 |
|----------|------|------|
| **上下文窗口配置被忽略** | #10068 | 交互式 Agent Session 强制 32k token 上限，用户配置 131072 无效，导致长对话过早压缩 |
| **模型编造拒绝原因** | #9654 | 操作者的真实拒绝响应被模型解读为无意义字符串，模型自行编造解释，影响可信度 |
| **Health 检查假阳性** | #9811 | Telegram Channel 从未连接（token 无效），但 `/health` 仍报告 healthy，误导运维判断 |
| **Daemon 重启后状态滞后** | #10238 | ZeroCode TUI 在 daemon 退出后仍显示绿色 Connected，缓存数据未及时刷新 |
| **转录配置被忽略** | #9905 / #10486 | Discord 和 Matrix Channel 均未正确读取 `[providers.transcription.*]` 配置，用户必须手动配置 legacy 格式 |
| **Docker 嵌套沙箱** | #9231 | Docker runtime 命令被嵌套在第二层 Docker sandbox 内，workflow 受阻 |
| **Cost 估算不准确** | #9939 (PR) | 价格不可用时代价为 $0，用户无法感知真实成本边界，现已修复为显式警告 |
| **OpenCode Provider 兼容** | #10603 | OpenCode relay 缺少必要 Header，Go 模型完全无法使用，存在账号风险 |

---

## 8. 待处理积压

| 编号 | 类型 | 创建日期 | 滞留时长 | 优先级 | 说明 | 链接 |
|------|------|----------|----------|--------|------|------|
| #9899 | Bug/Security | 2026-08-10 | 25 天 | P1 | bitmaps 漏洞依赖，CI 阻断，状态 Blocked | [#9899](https://github.com/zeroclaw-labs/zeroclaw/issues/9899) |
| #7685 | Tracker | 2026-06-15 | 81 天 | P2 | 跨 13 个 shard 的测试覆盖与陈旧测试跟进，长期开放 | [#7685](https://github.com/zeroclaw-labs/zeroclaw/issues/7685) |
| #10068 | Bug | 2026-08-18 | 17 天 | P2 | Interactive session 上下文硬编码上限，In-progress 但无合并 PR | [#10068](https://github.com/zeroclaw-labs/zeroclaw/issues/10068) |
| #10603 | Bug | 2026-09-03 | 1 天 | S1 | OpenCode Provider Header 缺失，workflow 阻断，今日新开 | [#10603](https://github.com/zeroclaw-labs/zeroclaw/issues/10603) |
| #7108 | RFC/CI | 2026-06-02 | 94 天 | P2 | CI Rust 构建缓存优化，长期开放且为多项 CI PR 的基础 | [#7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108) |

**维护者关注建议：**
- **#9899** 为安全阻塞项，需评估替换 `bitmaps` 依赖或推动上游修复。
- **#10603** 今日新开且为 S1 级别，建议优先分配排查。
- **#7685** 与 **#7108** 长期开放，建议维护者决策队列（#8692）中明确处理优先级。

---

**报告生成时间：** 2026-09-04 | **数据来源：** [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) GitHub API

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*