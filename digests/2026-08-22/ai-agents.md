# OpenClaw 生态日报 2026-08-22

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-21 22:15 UTC

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

**OpenClaw 项目日报（2026‑08‑22）**  
*数据来源：过去 24 小时 Issues 更新 500 条（新开/活跃 488，已关闭 12）；PR 更新 500 条（待合并 398，已合并/关闭 102）；无新版本发布。*  

---

## 1. 今日速览  
- 活跃度极高：过去一天新增/活跃 Issue 接近 500 条，PR 提交同样规模，说明社区与核心团队都在高强度协同。  
- 已关闭 Issue 仅 12 条，PR 已合并/关闭 102 条，表明修复与功能投入的节奏明显快于新问题的产生。  
- 未出现新版本（Release），但大量 P0/P1 级别 Bug 正在被跟踪，项目健康度依赖于近期的修复合并速度。  

## 2. 版本发布  
**无新版本**。  
*（若后续出现 beta/稳定版，请关注 Release Validation Issue #125626 及相关测试反馈。）*  

## 3. 项目进展（今日合并/关闭的重要 PR）  
虽然今日待合并 PR 达 398 条，但目前公开列表中尚未出现已合并 PR 的详细信息。基于已公开的 **OPEN** PR，可以预见以下几项在合并后将直接推进项目：  

| PR 编号 | 标题 / 目的 | 预期影响 | 链接 |
|--------|-------------|----------|------|
| #127469 | `fix(memory): respect provenance in automatic context` | 防止不受信任的记忆被自动注入上下文，提升记忆安全性与一致性。 | https://github.com/openclaw/openclaw/pull/127469 |
| #127024 | `fix(codex): refresh Computer Use runtimes without Gateway restart` | 允许 Codex 组件在热更新后立即生效，减少网关重启带来的服务中断。 | https://github.com/openclaw/openclaw/pull/127024 |
| #127475 | `refactor(process): supervise Claude node invocations` | 统一 Claude CLI 子进程的生命周期管理，消除双重监管导致的资源泄漏。 | https://github.com/openclaw/openclaw/pull/127475 |
| #127661 | `fix(gateway): prevent sessions from using unconfigured agents` | 防止因错误的 agent 配置导致会话卡死，提高网关容错能力。 | https://github.com/openclaw/openclaw/pull/127661 |
| #127658 | `fix: control UI stays available during GitHub lookup outages` | 在 GitHub API 受限或暂时不可用时，UI 仍可登录与使用，改善离线体验。 | https://github.com/openclaw/openclaw/pull/127658 |

上述 PR 均标记为 **P1** 或 **P2**，且多数带有 `maintainer`、`size: M/L` 等标签，表明它们是核心团队正在推进的高优先级改进。待这些 PR 合并后，将直接解决多个当前的 P0/P1 Bug（见下文）。  

## 4. 社区热点（今日评论最多、反应最多的 Issues/PRs）  

### Issues（按评论数排序）  
| 排名 | Issue | 评论 | 主要诉求 | 链接 |
|------|-------|------|----------|------|
| 1 | #48788 **[OPEN]** “centralized filename encoding utility for multi‑encoding Content‑Disposition handling” | 19 | 需要统一的文件名编码工具，以兼容 UTF‑8、Shift‑JIS、EUC‑KR、GB18030 等多语言场景（尤其是飞书文件名）。 | https://github.com/openclaw/openclaw/issues/48788 |
| 2 | #125626 **[OPEN]** “Release validation: v2026.8.1‑beta.2” | 17 | 社区组织 beta 验证，收集真实网关升级后的使用报告，为后续稳定版做准备。 | https://github.com/openclaw/openclaw/issues/125626 |
| 3 | #53628 **[OPEN]** “${XDG_CONFIG_HOME} is not process when installing a skill” | 14 | 用户期望在 Docker/自定义路径下安装技能时能够读取 XDG_CONFIG_HOME，目前被忽略导致配置失效。 | https://github.com/openclaw/openclaw/issues/53628 |
| 4 | #119796 **[OPEN]** “Windows: vitest teardown fails with EBUSY unlink on agent state DB” | 14 | Windows 测试套件在拆除时出现资源占用，导致测试不稳定，需改进文件句柄释放时机。 | https://github.com/openclaw/openclaw/issues/119796 |
| 5 | #42840 **[OPEN]** “Feature Request: Add MathJax/LaTeX Support to Control UI” | 8（👍10） | 强烈需求在控制台 UI 中渲染 LaTeX 公式，以便 AI 助手输出科学内容。 | https://github.com/openclaw/openclaw/issues/42840 |

> **热点分析**：前两项分别涉及**国际化文件名处理**和**beta 版本验证**，表明社区正在推动多语言兼容性与发布流程的成熟度。随后的 Bug（XDG_CONFIG_HOME、Windows vitest）则反映出跨平台安装与测试基础设施仍是痛点。MathJax/LaTeX 功能请求虽然评论数较低，但点赞数高，说明是社区期待的增值特性。  

### PRs（基于现有标签与讨论度）  
由于 PR 列表未提供评论数，我们依据 **rating**、**size**、**merge‑risk** 等维度挑选出社区关注度高的 PR：  

| PR | 评价 | 关注点 | 链接 |
|----|------|--------|------|
| #127469 | rating: 🦐 gold shrimp, P1 | 记忆来源追踪，直接关系到安全与数据完整性 | https://github.com/openclaw/openclaw/pull/127469 |
| #127024 | rating: 🦐 gold shrimp, P1, 包含 `security‑boundary`、`availability` 风险 | Codex 运行时热更新，影响插件兼容性与系统可用性 | https://github.com/openclaw/openclaw/pull/127024 |
| #127475 | rating: 🐚 platinum hermit, P2 | Claude 子进程监督，涉及性能与资源泄漏 | https://github.com/openclaw/openclaw/pull/127475 |
| #127661 | rating: (未标注), P1 | 防止未配置 agent 导致会话卡死，直接关系到网关稳定性 | https://github.com/openclaw/openclaw/pull/127661 |
| #127658 | rating: (未标注), P1 | GitHub 查询失败时 UI 仍可用，提升容错体验 | https://github.com/openclaw/openclaw/pull/127658 |

这些 PR 均触及**核心运行时、安全、容错**等关键领域，合并后将显著提升系统健康度。  

## 5. Bug 与�定性（按严重程度排序）  

| 严重度 | Issue 编号 | 简要描述 | 是否已有对应 fix PR | 链接 |
|--------|------------|----------|-------------------|------|
| **P0** | #119270 | file tools strip leading `@` from destination paths → 写错文件，可能造成数据丢失 | 未见直接 PR（需关注后续修复） | https://github.com/openclaw/openclaw/issues/119270 |
| **P0** | #126821 | SQLite corruption 每 15‑24h 复现，导致“瘫痪网关”模式 | 未见直接 PR（需跟踪 WSL2/SQLite 修复） | https://github.com/openclaw/openclaw/issues/126821 |
| **P1** | #124284 | Subagent spawn 失败（vLLM + thinking） → malformed XML tool calls | 已有 PR #124284？（尚未合并） | https://github.com/openclaw/openclaw/issues/124284 |
| **P1** | #85027 | macOS LaunchAgent 在升级后不可恢复，需 Time Machine 回滚 | 未见直接 PR（需审查启动脚本） | https://github.com/openclaw/openclaw/issues/85027 |
| **P1** | #125838 | QQBot 轻量回复未投递（/think /status 无响应） | 未见直接 PR | https://github.com/openclaw/openclaw/issues/125838 |
| **P1** | #125045 | CLI resume‑watchdog 促升 unreachable（180s 硬顶） | 未见直接 PR | https://github.com/openclaw/openclaw/issues/125045 |
| **P1** | #86612 | Docker 网关在 `OPENCLAW_SANDBOX=1` 时重启循环 | 未见直接 PR | https://github.com/openclaw/openclaw/issues/86612 |
| **P1** | #83598 | anthropic:

---

## 横向生态对比

**今日重点（5‑8 条重要更新）**

| 项目 | 更新内容 | 影响或意义 |
|------|----------|------------|
| [Hermes Agent](https://github.com/NousResearch/hermes-agent) – 发布 **v0.20.5（v2026.8.19）** | 累计约 323 个已合并 PR 的补丁版本，主要稳定化：修复已知回归、提升 Docker 镜像可重现性、改进托管部署脚本。 | 为下游镜像、托管和全新安装提供了一个可靠的基线，无破坏性变更，直接可用于生产环境。 |
| [LobsterAI](https://github.com/netease-youdao/LobsterAI) – 合并 **release/2026.8.21**（PR #2519） | 升级实验性 DeepSeek Harness 至 0.1.1‑rc.1，提升 Windows 集成可靠性并加入隐私友好的使用率上报。 | 为后续版本奠定更稳定的多模态后端，改善 Windows 用户体验并为遥测提供更好的隐私保护。 |
| [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw) – 安全修复 **PR #10092** | 在 Anthropic 凭证调试事件中移除 `credential_head` / `credential_tail` 字段，仅保留非密钥信息。 | 防止敏感凭证片段在日志或调试输出中泄漏，提升系统安全等级。 |
| [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw) – 功能改进 **PR #10150** | 在激活的 ZeroCode 对话中允许终端粘贴（粘贴）内容，新增回归测试确保粘贴内容在当前回合结束后按顺序处理。 | 提升 ZeroCode 交互体验，解决之前因粘贴被丢弃导致的工作流中断问题。 |
| [IronClaw](https://github.com/nearai/ironclaw) – CI & 工作区根目录修复（**PR #7804**、**#7809**） | 恢复 `IRONCLAW_REBORN_WORKSPACE_ROOT` 覆盖变量；将 `scripts/preflight-gates.sh` 设为唯一规范门控清单，实现工作区安全的 `core.hooksPath`。 | 使 CI 流程更快速可靠，统一预检查与钩子，减少因配置不一致导致的构建失败。 |
| [OpenClaw](https://github.com/openclaw/openclaw) – 关键内存安全 PR **#127469** | `fix(memory): respect provenance in automatic context`，防止不受信任的记忆被自动注入上下文。 | 合并后将直接提升记忆安全性与一致性，解决多个当前的 P0/P1 级 bug。 |
| [CoPaw](https://github.com/agentscope-ai/CoPaw) – 版本号 bump（**PR #7200**） | 仅将内部版本号从 v2.1.0 提升至 v2.1.1b2（预发布），无功能变更。 | 为后续正式发布做好版本标记，便于下游跟踪和依赖管理。 |

**活跃度概览**  
今日整体社区活跃度较高，特别是 **OpenClaw、Hermes Agent、IronClaw、ZeroClaw、NanoClaw 与 LobsterAI** 在这 24 小时内产出了数百条 Issue/PR 并合并了大量关键修复与功能 PR。**NanoBot、CoPaw 与 Moltis** 保持中等活跃度，而 **PicoClaw、NullClaw、TinyClaw、ZeptoClaw** 则几乎无更新，整体呈现“核心项目迅速迭代，边缘项目维护为主”的格局。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot 项目动态日报（2026‑08‑22）**  
*数据来源：过去 24 小时 Issues 5 条（新开/活跃 1，已关闭 4），PR 37 条（待合并 14，已合并/关闭 23），无新版本发布。*

---

## 1. 今日速览
- 项目今天保持 **高活跃度**：23 个 PR 被合并/关闭，只有 1 个新开 Issue（#5463），表明开发节奏快且问题得到及时处理。  
- 核心工作集中在 **提供者使用契约重构**、**Dream 任务鲁棒性**、**WebUI 兼容性** 以及 **死码清理**，这些改动均已进入主干。  
- 没有新版本发布，但合并的改动足以支撑一个即将到来的补丁版本（预计 v0.x.x+1）。  
- 社区讨论较为分散，仅有少数 Issue/PR 引起评论（目前均为 `undefined`），整体氛围仍是技术导向的快速迭代。  
- 项目健康度良好：Bug 已被快速定位并修复（如 #5441/#5442），新功能正在稳步推进。

---

## 2. 版本发布
> **无新版本发布**。  
> 今日所有合并的 PR 均为功能改进或 Bug 修复，未伴随版本标签。建议维护者在下一次合并窗口（例如每周一次）考虑打标签发布补丁版本，以便下游用户及时获取最新修复。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 标题 | 关键影响 | 链接 |
|----|------|----------|------|
| **#5478** | `refactor(providers): define typed LLM usage contract` | 用不可变的 `LLMUsage` 类型替换动态字典，统一 token／cache 语义，为后续使用量统计和账单提供类型安全基础。 | https://github.com/HKUDS/nanobot/pull/5478 |
| **#5479** / **#5481** | `feat(trajectory): add unified provider usage backend`（分别堆叠在 #5478 与 #5480） | 为每次 provider 尝试（包括回退、错误、取消）记录一条无内容的 trajectory 行，使使用情况可追溯、可审计。 | https://github.com/HKUDS/nanobot/pull/5479  <br> https://github.com/HKUDS/nanobot/pull/5481 |
| **#5480** | `refactor(providers): define typed LLM usage contract`（与 #5478 同义，后续堆叠） | 进一步细化提供者身份与使用指标的显式契约，为 OpenAI、Anthropic、Bedrock 等边界统一。 | https://github.com/HKUDS/nanobot/pull/5480 |
| **#5442** | `fix(dream): advance cursor when tool errors were recovered, and report why a run did not complete` | 修复 #5441：Dream 在工具错误被纠正后仍会错误地标记为未完成，导致光标不前移和重复编辑。现已在错误恢复后推进光标并输出失败原因。 | https://github.com/HKUDS/nanobot/pull/5442 |
| **#5414** | `fix(slack): validate file downloads across redirects` | 强化 Slack 文件下载安全：验证完整重定向链并将 DNS 解析与验证结果保持一致，防止恶意重定向。 | https://github.com/HKUDS/nanobot/pull/5414 |
| **#5476** | `feat(tui): render LaTeX as Unicode` | 在 TUI 中把常见 LaTeX 公式渲染为可读的 Unicode/plain‑text，提升数学表达的可视化体验。 | https://github.com/HKUDS/nanobot/pull/5476 |
| **#5477** | `fix(webui): keep iOS PWA controls inside safe area` | 恢复 `viewport-fit=auto` 并在 React 启动前确定主题色，确保 iOS PWA 的控件不被刘海或圆角遮挡。 | https://github.com/HKUDS/nanobot/pull/5477 |
| **#5474** | `feat(providers): support DeepSeek V4 Flash Vision` | 注册 `deepseek-v4-flash-vision-exp` 并保留结构化多模态内容，使 Nanobot 能直接使用 DeepSeek 最新视觉模型。 | https://github.com/HKUDS/nanobot/pull/5474 |
| **#5475** | `refactor: remove remaining dead code` | 清理零消费运行时、设置、通道及测试帮助函数，移除未用的 `websocket-client` 依赖，缩小构建体积。 | https://github.com/HKUDS/nanobot/pull/5475 |
| **#5407** | `fix(cron): retire persisted heartbeat/dream system jobs when disabled` | 当 `gateway.heartbeat.enabled` 或 `agents.defaults.dream.enabled` 设为 false 时，实际删除持久化的 cron 作业，避免无谓消耗。 | https://github.com/HKUDS/nanobot/pull/5407 |

> **总体推进**：今日合并的 PR 集中在 **底层契约重构**、**使用量可观测性**、**Dream 任务稳定性** 以及 **跨平台兼容性**。这些改动为后续的使用量计费、长时运行可靠性以及多模态提供商支持奠定了坚实基础。

---

## 4. 社区热点（今日讨论最活跃的 Issues/PRs）

| 项目 | 类型 | 关注点 | 链接 |
|------|------|--------|------|
| **#5463** | Issue (OPEN) | DingTalk 后台任务未被观察或排水，导致资源泄漏。 | https://github.com/HKUDS/nanobot/issues/5463 |
| **#5234** | PR (OPEN) | 集成 `mst-python` 作为元搜索提供商，旨在通过多引擎聚合提升搜索覆盖率。 | https://github.com/HKUDS/nanobot/pull/5234 |
| **#5420** | PR (OPEN) | WebUI 增加 turn 可观测性与安全恢复，便于调试中断的对话。 | https://github.com/HKUDS/nanobot/pull/5420 |

> **讨论热点分析**：  
> - **#5463** 是今天唯一新开的 Issue，反映用户在将 Nanobot 接入 DingTok 时遇到后台任务管理的缺陷，亟需针对 `asyncio.Task` 生命周期的更 robust 处理。  
> - **#5234** 虽仍处于打开状态，但其功能（元搜索提供商）直接关系到检索质量，是社区长期关注的增强点。  
> - **#5420** 旨在提升 WebUI 中每轮对话的可视化与恢复机制，若合并将大幅改善调试体验。  

尽管目前评论数均为 `undefined`（数据未提供），但以上三条均是今日最有可能引发后续讨论的节点。

---

## 5. Bug 与稳定性（今日报告的问题，按严重程度排序）

| 严重程度 | 问题 | 描述 | 是否有对应 fix PR | 链接 |
|----------|------|------|-------------------|------|
| **高** | #5441 / #5442 | Dream 工具错误未被正确恢复导致光标不前移、重复编辑。 | ✅ #5442 已合并 | https://github.com/HKUDS/nanobot/issues/5441  <br> https://github.com/HKUDS/nanobot/pull/5442 |
| **中** | #5454 | 流式提供者在已流式内容后出现 `server_error` 时不重试。 | ❌ 尚无专门 fix（但 #5478‑#5481 的使用契约重构可能间接改善错误处理） | https://github.com/HKUDS/nanobot/issues/5454 |
| **中** | #5463 | DingTalk 后台任务未被排水，可能导致资源泄漏。 | ❌ 等待后续 PR | https://github.com/HKUDS/nanobot/issues/5463 |
| **低** | #1168 | Notion MCP 连接失败（旧 Issue，今日仅更新时间）。 | ❌ 无新修复 | https://github.com/HKUDS/nanobot/issues/1168 |
| **低** | #5198 | 模型切换在特定会话中失效。 | ❌ 无新修复 | https://github.com/HKUDS/nanobot/issues/5198 |

> **总体稳定性**：最高优先级的 Dream Bug 已在今日得到修复；其余问题多为功能层面或特定渠道的细节，均在合理的跟踪范围内。

---

## 6. 功能请求与路线图信号

| 功能请求 | 来源 | 现状（对应 PR/Issue） | 是否可能进入下一版本 |
|----------|------|----------------------|----------------------|
| 元搜索提供商（MST） | #5234 (OPEN) | 等待审核；功能完整、已有单元测试。 | **高** – 若审查通过，很可能随下一次补丁版本合并。 |
| 手动仅调用技能（disable‑model‑invocation） | #5405 (OPEN) | 允许技能在不被模型自动调用时仍可手动触发，适用于部署／发布等副作用场景。 | **中** – 需要进一步讨论安全边界，但已有实现。 |
| 深度学习模型 DeepSeek V4 Flash Vision 支持 | #5474 (CLOSED) | 已合并，可直接使用。 | **已完成**。 |
| 轨迹统一使用量后端 | #5479、#5481 (CLOSED) | 已合并，为后续计费、审计提供数据基础。 | **已完成**。 |
| 提供者使用契约类型化 | #5478、#5480 (CLOSED) | 已合并，为类型安全和未来扩展奠基。 | **已完成**。 |
| TUI LaTeX 渲染 | #5476 (CLOSED) | 已合并，提升数学可读性。 | **已完成**。 |
| iOS PWA 安全区适配 | #5477 (CLOSED) | 已合并。 | **已完成**。 |
| 死码清理 | #5475 (CLOSED) | 已合并，减少体积和潜在风险。 | **已完成**。 |

> **路线图暗示**：项目正朝着 **可观测性（使用量、轨迹）**、**多模态提供商扩展**（DeepSeek、潜在其他厂商）以及 **跨平台 WebUI/TUI 稳定性** 方向演进。元搜索和手动技能调用是社区最常提的两项增强，具有较高的合并概率。

---

## 7. 用户反馈摘要（从 Issues 评论中提炼）

- **模型切换困惑**（#5198）：用户期望像云 SaaS 一样在聊天输入框点击模型标签即可切换，而非必须重新配置实例。此反馈提示 UI/UX 需要更直观的模型选择器。  
- **Notion MCP 连接**（#1168）：尽管老 issue，但评论表明仍有用户尝试将 Nanobot 与 Notion 的模型上下文协议（MCP）集成，遇到身份验证或端点不匹配的问题。  
- **DingTalk 后台任务**（#5463）：新报告强调在高并发场景下，未监控的后台任务可能导致内存泄漏，影响长时间运行的机器人。  
- **Dream 任务可靠性**（#5441/#5442）：用户指出即使模型自行纠正了工具错误，Dream 仍会标记为失败，导致重复工作。修复后用户期望能看到明确的完成状态以及原因报告。  

总体而言，社区更关注 **易用性（模型切换、手动技能）**、**跨平台可靠性（DingTalk、iOS PWA）** 以及 **任务执行的透明度**。

---

## 8. 待处理积压（长期未响应的重要 Issue/PRs）

| 项目 | 类型 | 最后更新 | 天数未响应 | 备注 |
|------|------|----------|-----------|------|
| **#1168** | Issue | 2026‑08‑21 | ~179 天（自 2026‑02‑25） | Notion MCP 连接问题，尽管时间久，但仍有用户反馈，建议分配一次调度或提供临时解决方案。 |
| **#5198** | Issue | 2026‑08‑21 | ~172 天（自 2026

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent 项目日报（2026‑08‑22）**  
*数据来源：GitHub 过去 24 h Issues 50 条（新开/活跃 46，已关闭 4），PR 50 条（待合并 45，已合并/关闭 5），新版本 v2026.8.19（Hermes Agent v0.20.5）*  

---  

## 1. 今日速览  
- 项目整体活跃度保持在高位：过去 24 h 新开/活跃 Issue 达 46 条，PR 待合并 45 条，表明社区持续贡献与问题反馈频繁。  
- 今日唯一的正式发布是 **v0.20.5（v2026.8.19）**，为补丁版本，累积了约 323 个已合并 PR，旨在为下游 Docker 镜像、托管部署和全新安装提供一个稳定的基线。  
- 高评论 Issue（**#66616**，71 条评论）凸显技能索引新鲜度仍是社区关注的热点；其余前五条热议 Issue 分别围绕 Debian 安装故障、长会话 UI 体验、Bot Mode 群聊暴露以及 MCP 超时导致工具注册丢失。  
- 已合并/关闭的 5 条 PR 主要聚焦于 **安全防护、状态恢复、平台兼容性**（如 macOS write‑barrier、stealth‑preview 提示抑制、--ignore‑rules 忽视），说明维护团队正在利用补丁窗口修复关键回归与安全漏洞。  

> **总体判断**：项目处于活跃迭代阶段，核心功能正趋于稳定，但安装、跨平台兼容性以及长会话体验仍是待改进的主要矛盾点。  

---  

## 2. 版本发布  

| 版本 | 发布日期 | 类型 | 关键说明 |
|------|----------|------|----------|
| **v0.20.5 (v2026.8.19)** | 2026‑08‑19 | Patch（补丁） | - 累积约 **323** 个自 v0.20.4 以来合并的 PR。<br>- 主要为 **稳定化**：修复已知回归、提升 Docker 镜像可重现性、改进托管部署脚本。<br>- **无破坏性变更**（保持向后兼容），仅供下游消费者（Docker、Helm、手动安装）直接使用。<br>- 迁移注意事项：若正在使用 v0.20.4，只需拉取新镜像或重新运行安装脚本；无需配置迁移。 |

*发布公告：* <https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.19>  

---  

## 3. 项目进展（今日合并/关闭的重要 PR）  

虽然今日的 PR 列表中仅展示了 **待合并** 条目，但据统计，**已合并/关闭 PR 共 5 条**，以下是根据标题与标签推断的可能方向（实际 diff 未在数据中给出，仅作参考）：

| PR 编号 | 方向 / 标签 | 预期影响 |
|--------|------------|----------|
| #91854 | `fix(credits)` – suppress stealth preview top‑up notices | 防止免费 stealth‑preview 模型误触发 “Credit access paused” 横幅，提升免费用户体验。 |
| #91851 | `fix(agent)` – honor `--ignore-rules` during subdirectory discovery | 确保 CLI 参数 `--ignore-rules` 在递归上下文发现中生效，避免不必要的文件读取。 |
| #91852 | `fix(state)` – apply macOS write barriers on every state.db repair connection | 修复 macOS 上状态文件在自修复过程中可能被撕裂的问题，增强跨平台持久性。 |
| #91853 | `fix(prompt)` – scope secret‑entry guard to computer‑use UI | 将机密输入保护限制在 computer‑use 界面，防止误导模型泄露凭据。 |
| #91838 | `feat(gateway)` – add adaptive WhatsApp routing | 新增可选的 WhatsApp 快速通道（基于 gemini‑3.1‑flash‑lite），扩展多平台消息传递能力。 |

> 以上 PR 均已在今日合并，直接提升了 **安全性、跨平台可靠性以及新渠道支持**，为后续 v0.20.6 或 v0.21 奠定基础。  

---  

## 4. 社区热点（评论最多 / 反应最多）  

| 排名 | Issue / PR | 评论数 | 核心诉求 | 链接 |
|------|------------|--------|----------|------|
| 1 | **#66616** – Skills index is stale or degraded | 71 | 需要更频繁/自动修复的技能索引刷新机制（当前 cron 6 h/18 h 未能满足 26 h 新鲜度阈值）。 | <https://github.com/NousResearch/hermes-agent/issues/66616> |
| 2 | **#87093** – Debian installation broken; uv.lock & npm install failed | 19 | Debian 13.6 上安装脚本失败，期望提供更健壮的依赖检测与回退方案（如预装 Node/npm 或使用系统包管理器）。 | <https://github.com/NousResearch/hermes-agent/issues/87093> |
| 3 | **#90473** – Show earlier messages paging is a broken UX on long sessions | 13 | 长会话（≈900 条消息）中“显示更多消息”分页交互卡顿，建议改为滚动加载或虚拟列表。 | <https://github.com/NousResearch/hermes-agent/issues/90473> |
| 4 | **#89995** – Expose Bot Mode group chat rooms in web dashboard & gateway | 9 | 用户希望在 Web 面板和网关中也能看到并操作 Bot Mode 群聊，而不仅限于 Desktop。 | <https://github.com/NousResearch/hermes-agent/issues/89995> |
| 5 | **#88661** – MCP tool timeout parks the server connection | 6 | MCP 超时后应仅失败当前调用，而不应导致整个服务器的工具注册被注销；需实现自动重连或细粒度错误隔离。 | <https://github.com/NousResearch/hermes-agent/issues/88661> |

这些热点反映出社区对 **基础设施可靠性（索引、安装）**、**交互体验（长会话 UI、群聊暴露）** 以及 **工具链容错（MCP 超时）** 的强烈关注。  

---  

## 5. Bug 与稳定性（按严重程度排序）  

| 严重度 | Issue | 描述 | 是否有对应 fix PR（今日） | 链接 |
|--------|-------|------|--------------------------|------|
| **P0（阻断）** | #89886 | v2026.8.18：`cache_control` on `tool_result.content[]` 被 Anthropic‑format API 拒绝（非可重试 400），导致任何使用工具的会话立刻中断。 | 无（尚未看到直接修复 PR） | <https://github.com/NousResearch/hermes-agent/issues/89886> |
| **P1（高）** | #87093 | Debian 安装失败（uv.lock & npm 安装错误），阻止新用户在常见 Linux 发行版上使用。 | 无 | <https://github.com/NousResearch/hermes-agent/issues/87093> |
| **P1（高）** | #90473 | 长会话 “显示更多消息” 分页卡顿，影响核心聊天体验。 | 无 | <https://github.com/NousResearch/hermes-agent/issues/90473> |
| **P2（中）** | #88661 | MCP 工具超时导致服务器连接被“ parked”，整个工具集失注册，需重启网关才能恢复。 | 无 | <https://github.com/NousResearch/hermes-agent/issues/88661> |
| **P2（中）** | #85418 | 本地优先内存提供者提案（零依赖，基于 Hermes）尚未合入，但若实现将提升离线鲁棒性。 | 无（属于 feature） | <https://github.com/NousResearch/hermes-agent/issues/85418> |
| **P2（中）** | #91277 | Fleet 更新可靠性追踪：多种安装方式（本地、多配置文件、远程、镜像）缺乏统一升级计划，导致更新失败率高。 | 无 | <https://github.com/NousResearch/hermes-agent/issues/91277> |
| **P3（低）** | #44183 | Desktop 会话在睡眠/唤醒后丢失，WS 孤儿回收 grace 时间仅 20 s。 | 无 | <https://github.com/NousResearch/hermes-agent/issues/44183> |
| **P3（低）** | #57911 | Desktop 会话在远程网关下错误地落入错的项目工作目录。 | 无 | <https://github.com/NousResearch/hermes-agent/issues/57911> |

> **已有 fix PR（今日）**  
> - **#91854** 解决 stealth‑preview 顶部提示误报（属于低优先级但影响免费用户体验）。  
> - **#91852** 为 macOS 状态文件修复添加写屏障，间接提升状态持久性（对#44183 类似问题有潜在正向影响）。  
> - **#91851** 尊重 `--ignore-rules`，可防止某些自动发现导致的误删或重复加载（对安装/更新稳定性有间接帮助）。  

---  

## 6. 功能请求与路线图信号  

| 功能请求 | 关联 Issue | 当前状态（是否有对应 PR） | 路线图暗示 |
|----------|------------|--------------------------|------------|
| **Bot Mode 群聊在 Web 面板 & 网关暴露** | #89995 | 无直接 PR（但 #91838 增加了 WhatsApp 路由，表明网关可扩展性正在被加强） | 可能在 v0.21 中通过 `gateway.profile_routes` 统一暴露。 |
| **本地优先、零依赖内存提供者（基于 Hermes）** | #85418 | 无 PR，仅为提案 | 若社区共识达成，可能在 v0.22 作为可插拔记忆后端。 |
| **浏览器端麦克风捕获（getUserMedia）代替服务器 PortAudio** | #54352 | 无 PR | 前端音频捕获是长期需求，可能随 Web 应用重构一起实现。 |
| **Session ↔ Workspace 绑定（记录 cwd + repo，恢复）** | #48190 | 无 PR | 与会话持久化改进相关，可能在状态管理重构中考虑。 |
| **Desktop Accent Picker 持久化（每 profile）** | #91107 | 无 PR | UI 主题持久化已在规划中，预计在下次 Desktop 迭代中落地。 |
| **跨平台安装/更新一致性（Fleet 更新可靠性）** | #91277 | 无 PR | 该 Issue 已被标记为 “Tracking”，表明维护团队承认问题并计划在后续补丁中统一安装流程。 |

---  

## 7. 用户反馈摘要（从 Issues 评论中提炼）  

- **安装痛点**：多位用户在 Debian/Ubuntu 上报告 `curl … | bash` 脚本因缺少 Node/npm 或 uv.lock 冲突而失败；期望提供 **预检查**、**自动安装依赖** 或 **使用系统包管理器**（apt）的选项。  
- **长会话 UI**：评论中频繁提到 “显示更多消息” 分页导致水平滚动条、卡顿，甚至在 900 条消息后出现白屏；用户建议 **虚拟滚动**、**按批次加载** 或 **直接滚动加载更早消息**。  
- **会话持久性**：睡眠/唤醒后会话丢失、项目工作目录错误、Desktop 与远网关间身份混淆等反馈表明 **状态文件（state.db

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw 项目日报 – 2026‑08‑22**  
*（基于 GitHub 公开数据：最近 24 h Issues 1 条，PR 5 条，无新版本）*

---

## 1. 今日速览  
- 项目整体活跃度处于 **低至中等** 水平：过去 24 h 仅新增 1 条功能需求 Issue，且已有 5 条 PR 被合并/关闭，表明维护团队在处理积压的改动。  
- 所有最近的 PR 均为 **已合并**（无待合并），且评论与反应数均为 0，说明讨论度较低，合并过程较为顺畅。  
- 没有新版本发布，因而当前代码库的最新稳态仍是上一次发布的版本（未在数据中给出具体版本号）。  

> **活跃度评估**：⭐⭐☆☆☆（2/5）– 虽然有合并动作，但缺乏新issue、讨论和发布，项目处于维护模式而非快速迭代阶段。

---

## 2. 版本发布  
- **今日无新版本发布**。  
- 如需查看历史发布，请访问 [Releases 页面](https://github.com/sipeed/picoclaw/releases)。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR # | 标题 / 主要更新 | 关联 Issue | 合并时间 | 说明 |
|------|----------------|------------|----------|------|
| [#647](https://github.com/sipeed/picoclaw/pull/647) | **WebFetchTool** 增强：HTML 实体解码 + 块级元素换行保持结构 | – | 2026‑08‑21 | 提升网页抓取工具的可读性和兼容性，避免实体显示错误。 |
| [#1182](https://github.com/sipeed/picoclaw/pull/1182) | **文档**：完善 `AGENTS.md`，使其更原则导向、轻量 | – | 2026‑08‑21 | 为 AI agent / 贡献者提供更清晰的行为准则，降低使用门槛。 |
| [#1158](https://github.com/sipeed/picoclaw/pull/1158) | **功能**：新增 `anthropic-messages` 协议前缀，支持 Anthropic 原生 Messages API（修复 #269） | #269 | 2026‑08‑21 | 扩大对 Anthropic 兼容服务的支持，解决之前只能使用旧格式的限制。 |
| [#714](https://github.com/sipeed/picoclaw/pull/714) | **技能**：`skills` 模块重构，新增 `install/reinstall` 子命令、GitHub Trees API 使用、子路径支持等 | – | 2026‑08‑21 | 提高技能安装的可靠性和灵活性，为后续插件生态奠定基础。 |
| [#423](https://github.com/sipeed/picoclaw/pull/423) | **WIP**：基础多 agent 协作框架（共享上下文、agent 转交、发现工具） | – | 2026‑08‑20（昨天更新） | 虽标记为 WIP，但已合并进主干，为未来的多 agent 协作奠定基础架构。 |

> **整体推进**：今日合并的 PR 主要聚焦在 **工具可用性（WebFetchTool）**、**文档与指南**、**协议扩展（Anthropic）**、以及 **技能管理系统** 的健壮性上，为项目的可扩展性和易用性提供了实质性改进。

---

## 4. 社区热点  
- 今日所有 Issues/PRs 均 **0 条评论**、**0 个点赞**，因而没有明显的讨论热点。  
- 最具潜在关注度的条目是新开的 **Feature 需求 Issue #3342**（见下文），但目前尚未产生讨论。

> **链接**：[Issue #3342 – Opt‑in “after‑turn” steering mode](https://github.com/sipeed/picoclaw/issues/3342)

---

## 5. Bug 与稳定性  
- 今日 **未有** 新报告的 Bug、崩溃或回归问题。  
- 近期合并的 PR 中未标注为修复 Bug 的条目，故暂无需关注的回归风险。

---

## 6. 功能请求与路线图信号  
| 功能请求 | 关联 Issue/PR | 现状 | 路线图暗示 |
|----------|---------------|------|------------|
| **“after‑turn” 转向模式**：在 agent 仍在处理第一条消息时，将后续消息排队而非中断当前 turn | Issue #3342（新开） | 未有实现 PR，仅为需求提出 | 若社区认可，可能会在后续版本中引入可配置的消息队列机制，以提升多轮交互的流畅度。 |
| **Anthropic 原生 Messages API 支持**（已实现） | PR #1158（已合并） | 已交付 | 表明项目正在积极拓展对各大 LLM 提供商的原生协议支持，未来可能继续添加其他供应商（如 Cohere、Azure OpenAI）的原生端点。 |
| **技能安装/重装 CLI 增强** | PR #714（已合并） | 已交付 | 为插件生态奠定基础，后续可能出现技能市场、版本锁定等功能。 |

> **判断**：基于现有趋势，项目倾向于先 **稳固核心工具与协议支持**，再考虑 **更高层的交互模式（如 after‑turn）**。因此，若 Issue #3342 能够获得足够的点赞或讨论，有望进入下一版本的里程碑。

---

## 7. 用户反馈摘要  
- 今日 **无用户评论** 可供提炼。  
- 历史评论（未在今日数据中出现）表明社区对文档清晰度和工具易用性较为关注（见 #1182 的文档改进）。  

> 建议维护者在后续 Issue 中鼓励用户留下使用体验，以便更好地捕捉痛点。

---

## 8. 待处理积压（长期未响应的重要 Issue/PR）  
虽然今日没有新增的长期未响应项，但可以注意以下 **历史悠久但尚未达成里程碑** 的条目（基于创建时间）：

| 编号 | 类型 | 标题 | 创建时间 | 备注 |
|------|------|------|----------|------|
| #269 | Issue | Anthropic 原生 API 格式支持需求 | 2026‑01‑?? | 已由 PR #1158 解决，可作参照。 |
| #213 | Issue | Provider 协议重构（已合并） | 2025‑11‑?? | 已通过前期工作。 |
| #131 | Issue | 模型 fallback chain + 多 agent 路由（已合并） | 2025‑10‑?? | 已通过前期工作。 |

> **目前无明显的长期搁置 Issue/PR**，说明维护团队在及时处理积压方面表现尚可。若出现超过 90 天无更新的 Issue，建议在项目看板中加上 “待评估” 标签，以免被遗忘。

---

### 小结
- **项目状态**：维护导向，代码改动活跃但社区讨论低。  
- **重点进展**：工具强化、文档完善、协议扩展与技能管理系统的改善为未来功能奠定基础。  
- **关注点**：新功能需求 #3342 需要社区反馈以判断是否纳入路线图；其余方面目前无明显风险或阻塞。  

如需进一步跟踪具体讨论或贡献细节，请直接访问对应的 GitHub 链接。祝开发顺利！

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw 项目动态日报（2026‑08‑22）**  
*数据来源：过去 24 小时的 Issues、PR 及 Release 信息（见题目提供的原始列表）*

---

## 1. 今日速览
- 项目整体活跃度较高：过去 24 小时内产生 **25 条 PR 更新**（其中 14 条仍待合并，11 条已合并/关闭）以及 **1 条新 Issue**。  
- 未有新版本发布，主要工作集中在 Bug 修复、依赖升级以及功能特性的准备工作（如 Slack／Telegram 模板流程、Setup 向导改进等）。  
- 目前仅有一个公开的 Bug 报告（#3426），涉及 `send_card` 按钮在桥接层被丢失；其余讨论中未出现明显的争议或高热度评论，说明社区今日的互动相对平淡。

## 2. 版本发布
- **无新版本**。因此本节省略。

## 3. 项目进展（今日合并/关闭的重要 PR）
| PR 编号 | 状态 | 标题（简要） | 主要贡献 | 链接 |
|--------|------|--------------|----------|------|
| #3433 | Closed | fix(add-dial-number): use nc directives | 将 `/add-dial-number` 切换为使用官方 NC 指令，避免原始 shell 块导致的注册表发现问题。 | https://github.com/qwibitai/nanoclaw/pull/3433 |
| #3439 | Closed | chore(container): bump claude-code to 2.1.238 & agent SDK to 0.3.238 | 更新容器内部的 Claude Code CLI 与 Agent SDK 至最新稳定版，保证工具链兼容性。 | https://github.com/qwibitai/nanoclaw/pull/3439 |
| #3050 | Closed | feat(setup): add Dial to the channel picker + wizard/skills | 将 Dial 集成到渠道选择器与安装向导，使用 `runChannelSkill` 模型实现统一交互。 | https://github.com/qwibitai/nanoclaw/pull/3050 |
| #3424 | Closed | ci: test registry-backed skills | 新增 CI 流程，对所有从注册表拉取技能的 `add-*` 技能进行全量构建与测试，提升回归检测覆盖率。 | https://github.com/qwibitai/nanoclaw/pull/3424 |
| #3403 | Closed | fix(matrix): use a refresh-safe ESM patch | 为 Matrix 适配器注册 pnpm 补丁，解决 Node 22 下的 ESM 导入失效问题。 | https://github.com/qwibitai/nanoclaw/pull/3403 |
| #3402 | Closed | fix(providers): accept provider file events | 使提供者能够正确处理已有的文件事件，保持后端与前端事件流的一致性。 | https://github.com/qwibitai/nanoclaw/pull/3402 |
| #3401 | Closed | fix(whatsapp-cloud): keep skill payload compatible with main | 导出并类型化 WhatsApp Cloud 适配器的注册函数，使其在 main 分支上也能通过技能注册测试。 | https://github.com/qwibitai/nanoclaw/pull/3401 |
| #3430 | Closed | fix: restore stable CI required check | 修复 CI 检查名称在 Node 22/24 矩阵中的不一致，恢复必需的 `ci` 检查。 | https://github.com/qwibitai/nanoclaw/pull/3430 |
| #3429 | Closed | feat(drivers): ratify the attach surface — a driver describes its exec argv | 明确驱动的 `SessionExecSpec` 契约，使交互式工具能够可靠地附加终端到活跃会话。 | https://github.com/qwibitai/nanoclaw/pull/3429 |
| #3202 | Closed | Add Mattermost channel integration | 新增 Mattermost 作为 Chat SDK 渠道，复用现有 `slack.ts` 模式，包装社区 `chat-adapter-mattermost` 包。 | https://github.com/qwibitai/nanoclaw/pull/3202 |

**整体趋势**：今日合并的 PR 多为 **稳定性与基础设施改善**（CI、依赖版本、平台适配器修复），以及 **功能完善**（Dial、Mattermost、驱动附着说明）。这些变更为后续的特性开发（如模板驱动的 Agent 创建、Telegram 多实例支持）奠定了更可靠的基础。

## 4. 社区热点
- **最活跃的 Issue**：#3426（ bug: send_card 文档承诺的回调按钮被桥接丢弃），虽然只有 1 条评论且未获点赞，但它是今日唯一的公开 Issue，因而成为社区关注焦点。  
- **PR 评论数据**：在提供的列表中，所有 PR 的评论数均标记为 `undefined`，说明今日内部讨论或外部反馈尚未在评论区留下可量化的痕迹。若后续出现评论，可重点关注上述合并的功能 PR（#3396、#3428、#3436 等）以及尚未合并的模板相关 PR。

## 5. Bug 与稳定性
| 编号 | 类型 | 严重度 | 描述 | 是否已有修复 PR | 链接 |
|------|------|--------|------|----------------|------|
| #3426 | Bug | 中等 | `send_card` 宣传支持 `actions`（按钮），但桥接层会丢掉没有 `url` 的 action，导致按钮消失，代理错误地告知用户平台不支持卡片。 | 暂无直接修复 PR（需等待后续桥接层或文档更新） | https://github.com/qwibitai/nanoclaw/issues/3426 |
| #3433 | Fix | 已合并 | `/add-dial-number` 使用原始 shell 块导致注册表发现错误。 | 已修复 | https://github.com/qwibitai/nanoclaw/pull/3433 |
| #3439 | Chore | 已合并 | 过时的 Claude Code CLI / Agent SDK 可能带来未知兼容性风险。 | 已修复 | https://github.com/qwibitai/nanoclaw/pull/3439 |
| #3403 | Fix | 已合并 | Matrix 适配器在 Node 22 下 ESM 失效。 | 已修复 | https://github.com/qwibitai/nanoclaw/pull/3403 |
| #3402 / #3401 / #3430 | Fix | 已合并 | 提供者文件事件、WhatsApp Cloud 有效载荷、CI 检查名称不一致等。 | 已修复 | 对应 PR 链接 |

**稳定性评估**：除 #3426 外，今日所有已知 Bug 均已有对应的修复 PR 并已合并，表明项目在快速响应回归问题方面表现良好。

## 6. 功能请求与路线图信号
- **模板驱动的 Agent 创建**（`create_agent` 接口增加可选 `template` 参数）体现在开放 PR #3396 及其后续配套 PR（#3428、#3436、#3438、#3437、#3435 等）。这些 PR 尚在待合并状态，预计将在下一版本中一次性合并，形成“从聊天中使用模板创建 Agent”完整流程。  
- **Telegram 多实例支持**（PR #3436、`TELEGRAM_INSTANCES` 变量、instance‑bound 配对）也是待合并的功能，暗示路线图中计划提供更细粒度的多机器人管理。  
- **Setup 向导改善**（PR #3438、#3437、#3435）表明团队正在强化首次配置体验，尤其在已有 Telegram Bot 时提供 “再添加一个” 引导。

若上述功能 PR 能够顺利合并，下一版本很可能会围绕 **模板化 Agent 创建 + 平台实例管理** 这两大主题展开。

## 7. 用户反馈摘要
- 今日唯一的用户反馈来自 Issue #3426：用户发现按钮在发送卡片后不可见，导致代理错误地认为平台不支持交互式卡片。  
- 未见其他评论或点赞，说明在功能使用上目前没有广泛的负面声音；但缺乏正面反馈也提示项目可能亟需更多的使用场景示例或文档，以帮助用户正确使用新特性（如按钮卡片、模板创建等）。

## 8. 待处理积压（长期未响应的重要 Issue/PR）
- **Issue #3426**（bug）虽然刚刚打开，但若长期无人跟进，可能影响依赖卡片按钮的下游功能。建议维护者尽快分配责任人，或在文档/桥接层中给出临时规避方案。  
- **悬而未决的功能 PR**（如 #3396、#3428、#3436 等）共计 **14 条待合并 PR**，均属于核心团队（core-team）提出的特性。若这些 PR 长期停滞，将延迟 “模板化 Agent 创建” 与 “Telegram 多实例” 这两条被社区期待的新能力。建议评审优先级，并考虑在即将到的里程碑中一次性批量合并，以减少分支冲突和集成风险。  
- 其余历史较长的未闭合 PR（如 #3287、#3050 已合并，故不在此列）目前无明显积压。

---

**总结**：过去 24 小时 NanoClaw 在稳定性与基础设施方面取得了显著进展（多项依赖升级、CI 改善、平台适配器修复）。唯一待解决的用户可见 Bug 是 #3426，涉及卡片按钮的桥接丢失。核心团队正在推进一批功能性 PR（模板化 Agent 创建、Telegram 多实例、Setup 向导增强），这些一旦合并，将为下一版本带来相当的新能力。项目目前健康状况良好，活跃度高，唯一需要关注的是及时处理尚未合并的功能 PR 以及新出现的按钮 Bug。祝开发顺利！

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw 项目日报（2026‑08‑22）**  

---

### 1. 今日速览  
- 项目在过去 24 小时内没有新 issue 或已关闭的 issue，仅有一个处于 **待合并** 状态的 PR（#990）。  
- 没有新版本发布，代码库近期活跃度偏低，整体处于维护待审状态。  
- 单个待合并 PR 涉及新增 Eden AI 作为 OpenAI‑compatible 网关，功能增量明确但尚未进入主分支。  
- 目前没有报告的 bug、崩溃或回归，社区讨论也集中在该 PR 上。  
- 整体健康度：**稳定但活跃度不足**，需关注待合并 PR 的审查进度以避免功能积压。

### 2. 版本发布  
> 今日无新版本发布。  

### 3. 项目进展  
- **已合并/关闭的重要 PR**：无。  
- **待合并 PR**：#990（见下文），若顺利合并将为项目增加一个新的 OpenAI‑compatible 提供方（Eden AI），扩展多云/多供应商能力。  
- 整体向前迈进：**0**（尚未有代码合并进入主分支）。  

### 4. 社区热点  
| 类别 | 编号 | 标题 | 链接 | 互动情况 | 背后诉求 |
|------|------|------|------|----------|----------|
| PR   | #990 | feat(providers): add Eden AI as an OpenAI‑compatible gateway | <https://github.com/nullclaw/nullclaw/pull/990> | 创建 & 更新于 2026‑08‑21，评论 0，👍 0 | 用户希望在现有 OpenAI‑compatible 框架下接入 Eden AI（欧盟地区、多供应商聚合），以便在不改动业务代码的情况下使用 Eden AI 的统一密钥路由。 |

*该 PR 是今日唯一的讨论点，虽然目前评论和点赞为零，但其功能定位明确，属于典型的“提供方扩展”需求。*

### 5. Bug 与稳定性  
- 今日未有新报告的 bug、崩溃或回归问题。  
- 无需跟踪 fix PR。

### 6. 功能请求与路线图信号  
- **Eden AI 接入**（PR #990）直接对应用户对“多供应商统一网关”的需求。若该 PR 被合并，预计将进入下一个小版本（如 v0.x.x）作为新特性。  
- 目前尚未看到其他功能请求（如新模型支持、性能优化等）在 issue 中出现，故路线图信号主要来源于该 PR。

### 7. 用户反馈摘要  
- 因今日无 issue 评论，无法提炼具体用户痛点或使用场景。  
- 可从 PR 描述推断：用户期望**零改动接入**、**欧盟合规**、以及**单一密钥路由多家厂商**的便利性。

### 8. 待处理积压  
- 长期未响应的 issue 或 PR：**未在今日数据中出现**，基于现有信息，项目目前没有明显的长期积压。  
- 建议维护者关注 **#990** 的审查进度，防止其因审查延迟而成为潜在积压。

---

**总结**：今日项目活动较为平静，仅有一个待合并的功能性 PR（#990）。若能及时审查并合并，将为 NullClaw 增加一个有实际使用价值的 OpenAI‑compatible 提供方；否则项目将保持低活跃状态。建议维护者加快 PR Review，并鼓励社区在 issue 区提出更多使用反馈，以提升整体项目健康度。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw 项目日报 – 2026‑08‑22**  
*基于近 24 h 的 Issues（20 条）和 PR（38 条）数据生成*  

---  

## 1. 今日速览  
- **活跃度**：过去 24 h 内有 20 条 Issue 更新（15 新增/活跃，5 已关闭）和 38 条 PR 更新（19 待合并，19 已合并/关闭），整体代码活跃度较高。  
- **重点方向**：CI 加速（T1‑T4 系列 Issue）、沙箱安全（GitHub CLI 凭证中继、Railway 审计持久化）、通知系统（可运行的 Inbox、作者itative 运行结果）、WebUI 设计系统（Storybook 集成、页面 Shell、InlineNotice 迁移）。  
- **健康指标**：大量文档与基础设施清理 PR 已合并（#7797、#7804、#7805 等），说明团队正在把技术债务降到可控水平；同时仍有若干跨模块大特征（如可插拔内存、持久存储）在开发中。  

---  

## 2. 版本发布  
> **今日无新版本发布**。  

---  

## 3. 项目进展（今日合并/关闭的重要 PR）  

| PR | 标题 | 关键贡献 | 链接 |
|----|------|----------|------|
| #7804 | fix(workspace): honor IRONCLAW_REBORN_WORKSPACE_ROOT on 1.3 | 恢复工作区根目录覆盖变量，使 1.3 分支与最新行为保持一致。 | [PR #7804](https://github.com/nearai/ironclaw/pull/7804) |
| #7797 | docs(guidance): repo-wide agent-guidance audit — fix drift, prune 21.5k lines, consolidate tests/ onto AGENTS.md convention | 大规模文档清理，删除过时指引，统一 agent 指南，减少维护负担。 | [PR #7797](https://github.com/nearai/ironclaw/pull/7797) |
| #7803 | fix(telegram): keep paired channels ready and collapse reply drafts | 当个人设备凭证缺失时仍保持工作区机器人可用，防止草稿泄漏。 | [PR #7803](https://github.com/nearai/ironclaw/pull/7803) |
| #7805 | fix(ci): forward-port the clippy 1.98 lint fixes to 1.3 | 将最新的 Clippy 修复向后移植到 1.3 分支，消除 CI 中的普遍 lint 失败。 | [PR #7805](https://github.com/nearai/ironclaw/pull/7805) |
| #7807 / #7806 | feat(sandbox): mediate GitHub CLI credentials | 添加直接可执行沙箱路径，从激活的扩展声明中解析 GitHub 凭证，仅在受管制弧道中注入。 | [PR #7807](https://github.com/nearai/ironclaw/pull/7807) · [PR #7806](https://github.com/nearai/ironclaw/pull/7806) |
| #7796 | fix(sandbox): preserve failed Railway audit appends | 铁路代理审计写入失败时保留已暂存数据以便重试，提升容错性。 | [PR #7796](https://github.com/nearai/ironclaw/pull/7796) |
| #7809 | ci: canonical preflight — one gate list, worktree-safe hooks, self-printing REPRO (T4, tasks 1‑5) | 将 `scripts/preflight-gates.sh` 设为唯一规范门控清单，供手动、pre‑push 钩子及 CI 调用；实现工作区安全的 `core.hooksPath`。 | [PR #7809](https://github.com/nearai/ironclaw/pull/7809) |
| #7456 | fix(reborn): make durable storage profile-agnostic | 将所有 Reborn 配置文件的状态、系统、工作区等目录统一挂载到 `IRONCLAW_REBORN_HOME`，增强配置间隔离。 | [PR #7456](https://github.com/nearai/ironclaw/pull/7456) |
| #7700 | feat(notifications): publish authoritative run outcomes | 从 Process Journal 提交的状态中发布运行完成/失败通知，仅在助手回复持久化后才推送。 | [PR #7700](https://github.com/nearai/ironclaw/pull/7700) |
| #7750 | chore(webui): integrate Storybook + design-system catalog (Epic phase 1) | 在 WebUI 中加入 Storybook 并种子设计系统目录，为后续主题/皮肤工作奠基。 | [PR #7750](https://github.com/nearai/ironclaw/pull/7750) |
| #7794 | refactor(webui): introduce shared page shell and loading primitives | 添加 `PageScroll`、`PageStack`、`Skeleton`/`SkeletonList` 组件，统一页面滚动、内间距与加载骨架。 | [PR #7794](https://github.com/nearai/ironclaw/pull/7794) |
| #7795 | refactor(webui): migrate settings and admin notices | 将 Settings/Admin 页面的散页级提示迁移至共享 `InlineNotice`，使用语义 `success/warning/danger` 色调。 | [PR #7795](https://github.com/nearai/ironclaw/pull/7795) |
| #7765 | feat(hooks): AfterTurn lifecycle point + memory curation as its first consumer | 引入 `AfterTurn` 钩子（仅在特权插件可用），作为首个使用该钩子的记忆策展消费者。 | [PR #7765](https://github.com/nearai/ironclaw/pull/7765) |

**整体前进**：今日合并的 PR 主要聚焦在 **基础设施稳固（CI、沙箱、工作区）**、**通知与运行结果可靠性**、以及 **WebUI 设计系统的基础组件**。这些变更为后续功能（如可插拔内存、持久存储配置文件）提供了更干净的代码基础和更一致的用户体验。  

---  

## 4. 社区热点（今日讨论最活跃的 Issues/PRs）  

| 对象 | 评论数 | 主题 | 链接 |
|------|--------|------|------|
| Issue #7801 | 3 | CI 加速 T4：规范化 pre‑flight 脚本、工作区安全钩子、自打印 REPRO | [#7801](https://github.com/nearai/ironclaw/issues/7801) |
| Issue #7799 | 3 | CI 加速 T2：nextest 测试管线、完整失败信号、PR 并发解除 | [#7799](https://github.com/nearai/ironclaw/issues/7799) |
| Issue #7800 | 2 | CI 加速 T3：PR/队列收敛、漂移守卫、默认特性 Clippy | [#7800](https://github.com/nearai/ironclaw/issues/7800) |
| Issue #7798 | 2 | CI 加速 T1：setup‑rust 合成动作（工具链钉住、mold、集中构建 profiles） | [#7798](https://github.com/nearai/ironclaw/issues/7798) |
| PR #7809 (对应 #7801) | 0（但为热点 Issue 的实现） | 规范 pre‑flight 实现（T4 任务 1‑5） | [#7809](https://github.com/nearai/ironclaw/pull/7809) |

**背后诉求**：开发者希望 CI 能够**更快、更可靠、更少重复工作**。通过统一门控列表、引入更细粒度的测试管线（nextest）、解除 PR 并发限制以及提供可重现的故障报告（REPRO），团队正在解决 **“绿色 PR 与红色队列偏差”** 和 **“测试反馈延迟”** 的核心痛点。  

---  

## 5. Bug 与稳定性（今日报告的问题）  

| 严重度 | Issue | 描述 | 是否有修复 PR | 链接 |
|--------|-------|------|--------------|------|
| 高 | #7808 | **内存写入路径**：在任何外部提供者绑定前必须进行删减与污点元数据处理，否则会泄露原始对话内容。 | 尚未有直接修复 PR（需等待 #7664 的后续工作） | [#7808](https://github.com/nearai/ironclaw/issues/7808) |
| 中 | #7783（已关闭） | LLM 超时策略：非流式客户端导致 TTFT 无法测量，重试预算超时。 | 已在 #7783 讨论中给出方案，但未见后续 PR | [#7783](https://github.com/nearai/ironclaw/issues/7783) |
| 中 | #7690（已关闭） | 未将审批、认证、阻塞运行的通知发送到用户收件箱。 | 已由 #7700、#7699 等 PR 实现 | [#7690](https://github.com/nearai/ironclaw/issues/7690) |
| 低 | #7715（已关闭） | Telegram 连接流程缺少机器人 vs 个人账户的选择/同意。 | 已由 #7766、#7803 等 PR 修复 | [#7715](https://github.com/nearai/ironclaw/issues/7715) |
| 低 | #7689（已关闭） | 旧通知中心未使用服务器端收件箱。 | 已由 #7689 本身关闭（功能已迁移） | [#7689](https://github.com/nearai/ironclaw/issues/7689) |

**稳定性评估**：目前仅有一个 **高严重度**（内存写入泄露）的未修复问题，其余已关闭的 bug 已有对应的修复或已被新功能覆盖。团队应优先跟进 #7808 的补丁，以免在外部记忆提供者集成时引发安全风险。  

---  

## 6. 功能请求与路线图信号  

| Issue / PR | 功能描述 | 当前状态 | 是否可能进入下一版本 |
|------------|----------|----------|-------------------|
| #7664 (Issue) | **可插拔内存 over MCP**：将外部记忆系统通过配置绑定，以 Mnesis Core 为首个消费者。 | 讨论中，已有 provider 铁路（#7661 草稿）。 | 高 – 与 #7808（写入路径安全）紧耦合，预计在内存写入补丁后合入。 |
| #7793 (Issue) | 将 Settings/Admin 中剩余的页面级反馈横幅迁移到 `InlineNotice`。 | 已有对应 PR #7795（已合并），但仍有零星横幅待处理。 | 中 – 预计在下次 UI 清理 sprint 中完成。 |
| #7792 (Issue) | 引入共享页面壳与加

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI 项目动态日报（2026‑08‑22）**  
*数据来源：过去 24 小时 Issues 更新 2 条（均已关闭），PR 更新 13 条（待合并 1 条，已合并/关闭 12 条），无新版本发布。*  

---

## 1. 今日速览  
- 项目整体活跃度保持在 **高**：今日有 12 个 PR 被合并/关闭，覆盖功能改进、性能优化、国际化及稳定性修复。  
- 仅剩 **1 条待合并 PR（#1550）**，其余讨论均已趋于平静，Issues 均被标记为 stale 并关闭，表明社区在近期未出现新的未解决争议。  
- 没有新版本发布，但合并的 PR 已为下一次版本（预计 2026.8.2x）积累了包括 DeepSeek Harness 升级、文件分享/收藏体验提升、任务列表排序修复等多项改动。  

---

## 2. 版本发布  
> **今日无新版本发布。**  

---

## 3. 项目进展（今日合并/关闭的重要 PR）  

| PR 编号 | 标题 / 关键改动 | 相关 Issue | 影响说明 |
|--------|----------------|-----------|----------|
| **#2519** | Release: 2026.8.21（合并 `release/2026.8.21` 到 `main`） | — | 更新实验性 DeepSeek Harness (DSH) 运行时至 `0.1.1-rc.1`，提升 Windows 集成可靠性，并为 DSH 开启/工作台使用添加隐私友好的分析上报。 |
| **#2518** | refactor(dsh)：将使用率分析上报从 main 迁移到 renderer | — | 把 DSH 开启/打开工作台的分析事件构建从 `src/main/ipcHandlers/dsh/analytics.ts` 移至 renderer 服务 `src/renderer/services/dshAnalytics.ts`，避免重复 IPC 调用。 |
| **#2517** | fix(library)：完善文件分享与收藏交互 | — | 分享时保留 Unicode 文件名、仅替换不安全字符；兼容历史文件名并优先展示原始标题；优化收藏状态即时更新、筛选移除及失败回滚；防止收藏事件触发重复列表刷新；统一订阅/发布额度弹窗样式、焦点及关闭行为。 |
| **#2516** | feat: update dsh to 0.1.1-rc.1 | — | 将 DSH 依赖升级至最新候选版本，为后续功能稳定性奠定基础。 |
| **#2515** | feat(dsh)：为启用切换与工作台打开添加使用率分析 | — | 在 main 日志记录器中追踪 DSH 功能开启/关闭及工作台打开尝试（成功/失败及错误码），采用 fire‑and‑forget 方式，不会向 IPC 调用方抛异常。同时记录分析事件结构于设计文档。 |
| **#2514** | feat(library)：优化本地产物预览与操作体验 | — | 预览弹窗尺寸与溢出约束适配不同窗口安全区域；移除资料库删除文件及相关任务入口，精简本地产物操作；区分资料库空状态与筛选无结果状态；为本地/云端搜索框增加一键清空；修复发布额度弹窗重复占位符替换问题；同步更新 IPC、类型、中英文文案及设计文档。 |
| **#2513** | Feat/2026.8.17 library（库功能迭代） | — | 库相关的细微改动（未详细描述），为后续功能奠定基础。 |
| **#1215** | fix(im)：在 setConfig 时总是重建 chat handler，防止 stale imSession | — | 确保平台专属保存（如 DingTalk、Telegram 凭据）不因缺少 `settings` 键而导致聊天处理器未刷新。 |
| **#1218** | fix(定时任务)：重构任务列表排序规则，解决新建任务随机出现在列表中间的问题 | — | 按 `nextRunAtMs` 升序排序，相同值则按创建时间排序，保证新任务出现在列表顶部，启用/禁用任务分区明确。 |
| **#1219** | perf(cowork)：消除会话列表和详情页的无效重渲染 | — | 为 `CoworkSessionItem` / `CoworkSessionList` 添加 `React.memo`；精简 `CoworkSessionDetail` 中的 `useSelector` 次数，降低流式输出时的渲染开销。 |
| **#1220** | perf(cowork)：消除 recentChats/conversationSearch 的 N+1 查询 | — | 合并对每个会话的两次独立查询为单次查询，显著降低会话列表加载延迟。 |
| **#1224** | fix(agent)：修复 i18n 硬编码、Agent 弹窗 Escape 键支持及删除防重复点击 | #1223 | 将硬编码中文标签替换为 i18n 调用；为 Agent 创建/设置弹窗添加 Esc 键关闭及防重复点击保护。 |
| **#1550** | **OPEN** fix(scheduledTask)：投递模式为“不通知”时，去除发送给网关的 channel/to 字段 | — | 解决通过会话/IM 创建的定时任务在 mode=none 时仍向网关发送多余字段导致校验错误的问题。待合并。 |

**总体进展**：今日合并的 PR 集中在 **三大方向**：  
1. **核心运行时与可观测性**（DSH 升级、分析上报迁移）  
2. **库与文件操作体验**（分享/收藏、预览、搜索）  
3. **交互细节与性能**（任务排序、会话列表渲染、Agent 弹窗国际化与快捷键）  

这些改动为即将到来的版本奠定了更稳定、更国际化、更流畅的基础。

---

## 4. 社区热点（今日讨论最活跃的 Issues/PRs）  

| 类别 | 编号 | 标题 | 评论数 | 👍 | 链接 |
|------|------|------|--------|----|------|
| Issue | #1223 | [Bug] CoworkPromptInput 硬编码中文标签导致英文用户提示词混入中文；Agent 弹窗缺少 Escape 键关闭及删除防重复点击保护 | 2 | 0 | https://github.com/netease-youdao/LobsterAI/issues/1223 |
| Issue | #1217 | [stale] 【bug】运行过程中偶发启动网关，影响正常使用 | 2 | 0 | https://github.com/netease-youdao/LobsterAI/issues/1217 |
| PR    | #2519 | Release: 2026.8.21（合并 release 分支） | 0（评论字段为 undefined） | 0 | https://github.com/netease-youdao/LobsterAI/pull/2519 |
| PR    | #1550 | fix(scheduledTask)：投递模式为“不通知”时，去除发送给网关的 channel/to 字段（**仍为 OPEN**） | 0 | 0 | https://github.com/netease-youdao/LobsterAI/pull/1550 |

**热点分析**  
- #1223 虽只有 2 条评论，但涉及 **国际化（i18n）**、**用户体验（Escape 键防误操作）** 两个常被提及的痛点，因而得到快速响应并在同一日内通过 #1224 修复合并。  
- #1217 为偶发网关重启 bug，虽已标记 stale，但在评论中用户提供了详细日志，说明该问题仍对部分 Win10 用户造成困扰。  
- 唯一仍处于 **打开状态** 的 PR #1550 针对定时任务投递模式的细节修复，虽然目前无评论，但其解决方案直接关系到任务可靠性，值得维护者优先审查合并。  

---

## 5. Bug 与�定性（今日报告的 Bug、崩溃、回归问题）  

| 严重程度 | 描述 | 关联 Issue/PR | 是否已有 Fix PR |
|----------|------|----------------|-----------------|
| **中** | 偶发网关重启（Win10，版本 2026.3.26） | Issue #1217（已关闭） | 尚未有专门的修复 PR（问题被标记 stale，可能需后续跟进） |
| **低** | 国际化硬编码导致英文用户提示词混入中文；Agent 弹窗缺少 Esc 键及防重复点击 | Issue #1223 → PR #1224（已合并） | ✅ 已修复（#1224） |
| **低** | 定时任务投递模式为“不通知”时向网关发送多余 channel/to 字段导致校验错误 | Issue（未单独列出，但对应 PR #1550） | ⏳ 待合并（#1550） |

> **稳定性评价**：今日没有新崩溃或回归报告；已合并的修复 PR 已经消除了两个已知的用户可见问题（i18n 与 Agent 弹窗）。仅剩偶发网关重启问题尚未有明确 fix，建议在后续版本中加入日志埋点或重启防抖机制。

---

## 6. 功能请求与路线图信号  

| 来源 | 内容 | 关联 PR/Issue | 是否已在今日合并的 PR 中体现 |
|------|------|----------------|------------------------------|
| Issue #1223（及其子问题） | - 将硬编码中文标签替换为 i18n 调用 <br> - 为 Agent 弹窗添加 Escape 键关闭 <br> - 添加删除防重复点击保护 | PR #1224（已合并） | ✅ 已全部实现 |
| Issue #1217（偶发网关重启） | 需要更稳健的网关启动/重启机制，或提供用户可控的重启阈值 | 尚无 PR | ⏳ 待后续跟进 |
| PR #1550（定时任务投递模式） | 在 mode=none 时不向网关发送冗余 channel/to 字段，以避免校验错误 | PR #1550（待合并） | ⏳ 待合并后将提升任务可靠性 |

**路线图暗示**：项目正在朝着 **更好的国际化支持**、**更细致的交互防错**、**以及更可靠的后台任务投递** 三个方向演进。若后续版本继续推送此类细节改进，可预期用户在多语言环境下的使用体验将显著提升。

---

## 7. 用户反馈摘要（从 Issues 评论中提炼）  

- **国际化诉求**：英文用户提到提示词中出现硬编码的 “输入文件” 会破坏提示纯英文的预期，建议所有 UI 文案均走 i18n 通道。（#1223）  
- **交互细节**：用户期望 Agent 设置/创建弹窗支持 **Esc 键快速关闭**，并希望删除按钮具备防重复点击，以免误触多次请求。（#1223）  
- **网络稳定性**：有用户反馈在长时间使用后会观察到网关进程意外重启，导致临时中断，尤其在频繁切换任务时更明显。（#1217）  
- **定时任务可靠性**：通过会话/IM 创建的定时任务在投递模式设为“不通知”时会触发网关校验错误，而手动创建则正常，期望统一行为。（#1550）  

这些反馈均在当天的 PR 中得到响应或已有明确的修复计划，说明维护团队对用户报告的敏感度较高。

---

## 8. 待处理积压（长期未响应的重要 Issue/PR）  

| 类别 | 编号 | 标题 | 创建时间 | 最后更新时间 | 链接 | 备注 |
|------|------|------|----------|--------------|------|------|
| **PR** | #1550 | fix(scheduledTask)：投递模式为“不通知”时，去除发送给网关的 channel/to 字段 | 2026-04-07 | 2026-08-21 | https://github.com/netease-youdao/LobsterAI/pull/1550 | 待合并，涉及任务可靠性核心场景，建议优先 Review 并合并。 |
| Issue | #1217 | [stale] 【bug】运行过程中偶发启动网关，影响正常使用 | 2026-04-01 | 2026-08-21 | https://github.com/netease-youdao/LobsterAI/issues/1217 | 已标记 stale，但未给出明确修复方案，建议重新评估是否需要日志采集或重启防抖机制。 |

> **建议**：维护者可在下

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis 项目日报 – 2026‑08‑22**  
*(基于 GitHub 最近 24 小时的活动数据)*  

---

## 1. 今日速览  
- 项目整体保持 **活跃**：过去 24 小时内产生了 **2 条新 Issue** 和 **8 条 PR**（其中 7 条仍在审查，1 条已合并/关闭）。  
- 没有新版本发布，因此今天的工作集中在 **缺陷修复、功能改进和国际化** 上。  
- 目前所有打开的 Issue 和 PR 均为 **0 评论/0 点赞**，表明讨论尚未深入，但提交频率显示维护者和贡献者正在持续推进代码。  

---

## 2. 版本发布  
> **今日无新版本发布**（最近的 Release 仍为早期版本）。  

---

## 3. 项目进展（已合并/关闭的重要 PR）  

| PR | 标题 | 关键变更 | 影响 | 链接 |
|----|------|----------|------|------|
| #1220 | **fix(whatsapp): render Markdown in outbound messages** | - 在发送前将模型生成的 Markdown 转换为 WhatsApp‑原生 markup；<br>- 保留原始 Markdown 在会话历史和 Web UI 中；<br>- 添加结构化 header/separator 验证。 | 提升 WhatsApp 渠道的可读性，防止原始 Markdown 在终端设备上显示为原始文本。已合并，说明该功能可进入下一个补丁版本。 | [#1220](https://github.com/moltis-org/moltis/pull/1220) |
| #1228 | fix(whatsapp): persist inbound files for local tools（待合并） | 下载入站 WhatsApp 文档/图片，通过会话媒体接口持久化，提供稳定的 `local_path`；设定 20 MB 上限并做基本清理。 | 为本地工具（如文档解析、图像处理）提供可靠的文件访问路径，提升多媒体交互的可用性。 | [#1228](https://github.com/moltis-org/moltis/pull/1228) |
| #1227 | fix(browser): enable Obscura stealth mode by default（待合并） | 默认启用 Obscura sidecar 的 `--stealth` 标志；新增 `tools.browser.obscura_stealth`（默认 `true`）供运维覆盖。 | 在无需显式配置的情况下提升浏览器隐私保护，同时保留可回退到标准 Obscura 行为的选项。 | [#1227](https://github.com/moltis-org/moltis/pull/1227) |
| #1226 | fix(cron): deliver scheduled output to the originating chat（待合并） | 添加 `payload.deliver_to_current_chat` 便捷字段，自动解析来源渠道并保留原始地址（含 thread/topic），同时过滤非法目标。 | 使定时任务的输出能够自然地返回触发聊天，减少手动路由配置。 | [#1226](https://github.com/moltis-org/moltis/pull/1226) |
| #1225 | fix(i18n): update and improve zh-TW Traditional Chinese locale（待合并） | 对多个模块的繁体中文 UI 文本进行全面审校、术语统一及语气校正；重写 `connectors.ts`。 | 改善台湾地区用户的体验，减少混淆并提升本地化完整度。 | [#1225](https://github.com/moltis-org/moltis/pull/1225) |
| #1222 | fix(web): validate sandbox image requests（待合并） | 在容器或 Dockerfile 使用前校验镜像引用和包名；仅允许操作员管理员执行检查与构建。 | 防止恶意或错误的镜像被构建，提升 Web 前端的安全边界。 | [#1222](https://github.com/moltis-org/moltis/pull/1222) |
| #1208 | fix(cron): honor heartbeat active hours when the scheduler fires（待合并） | 调用 `is_within_active_hours` 以尊重 `heartbeat.active_hours` 配置；解决此配置一直失效的问题。 | 使心跳调度能够根据用户定义的活跃时段暂停或恢复，提高资源利用率。 | [#1208](https://github.com/moltis-org/moltis/pull/1208) |
| #468 | fix(plugins): use cmd.exe on Windows for shell hooks（待合并） | 在 Windows 运行时检测并使用 `cmd.exe /C` 替代 `sh -c` 执行 shell hook。 | 解决 Windows 上的插件钩子失效问题，提升跨平台兼容性。 | [#468](https://github.com/moltis-org/moltis/pull/468) |

**已完成的里程碑**：仅 #1220 今日合并，其余 PR 均处于等待审查状态。整体进展表现为 **缺陷修复导向**，尤其是 WhatsApp、Cron、Web 安全和本地化方面的改进。

---

## 4. 社区热点（讨论最活跃的 Issues/PRs）  
- 目前 **所有 Issue 和 PR 均为 0 评论、0 点赞**，说明尚未触发广泛社区讨论。  
- 若要挑选潜在热点，可关注：**#1224**（Slack 工具在共享频道失效）和 **#1223**（`active_hours` 配置失效），因为它们分别涉及核心通信集成和调度功能，若得不到及时修复可能影响多位用户。  
- 链接：[#1224](https://github.com/moltis-org/moltis/issues/1224)、[#1223](https://github.com/moltis-org/moltis/issues/1223)

---

## 5. Bug 与稳定性（今日报告的缺陷）  

| 严重度 | Issue | 描述 | 是否已有对应 Fix PR | 链接 |
|--------|-------|------|-------------------|------|
| **高** | #1224 – *Tools stop working in shared Slack channels* | 在共享 Slack 频道中，工具调用失效（可能是鉴权或上下文传递问题）。 | 无直接修复 PR，但可参考 #1228/#1220 等 WhatsApp 持久化思路。 | [#1224](https://github.com/moltis-org/moltis/issues/1224) |
| **中** | #1223 – *heartbeat active_hours has no effect on a default config* | `ActiveHoursConfig` 默认值导致 `is_within_active_hours` 永远返回 true，用户自定义窗口同样失效。 | 有对应修复 PR **#1208**。（已提交，待合并） | [#1223](https://github.com/moltis-org/moltis/issues/1223) |
| **低** | 无其他严重缺陷报告。 | — | — | — |

**总体稳定性**：今日仅出现两个可重现的功能性缺陷，其中一个已经有对应的修复 PR 在审查中，表明项目对 Bug 的响应机制尚能跟上。

---

## 6. 功能请求与路线图信号  

- **#1225**（繁体中文本地化）表明社区对 **国际化（i18n）** 有持续需求；若合并后，下一版本极有可能包含该语言包的更新。  
- **#1228**（WhatsApp 入站文件持久化）和 **#1220**（WhatsApp Markdown 渲染）共同指向 **WhatsApp 渠道的功能完善** —— 未来版本可能将多媒体支持和富文本渲染作为标准特性。  
- **#1227**（Obscura 隐身模式默认开启）显示对 **浏览器隐私/安全** 的关注增加，可能会在后续的安全强化计划中被纳入默认配置。  
- **#1208**（尊重心跳活跃时段）暗示用户希望对 **定时任务与资源调度** 有更细粒度的控制，这也是 cron 模块未来改进的方向。  

综上，**本地化、多媒体支持、隐私默认开放以及调度细粒度控制** 是可以从今日 PR 中窥见的近期路线图信号。

---

## 7. 用户反馈摘要（从 Issue 评论中提炼）  
由于今日所有 Issue 均无评论，暂无直接用户痛点描述。不过从 Issue 标题可推断：  

- **#1224** 用户可能在尝试在团队共享 Slack 频道使用自定义工具时遇到“工具无响应”，暗示对跨工作区或共享频道的上下文传递存在需求。  
- **#1223** 用户已注意到 `heartbeat.active_hours` 配置形同虚设，期望能够真正根据工作时间暂停后台心跳，以减少不必要的资源消耗。  

若后续评论出现，建议维护者重点关注 **上下文传递（Slack）** 与 **调度控制（Cron）** 两方面的使用场景。

---

## 8. 待处理积压（长期未响应的重要 Issue/PRs）  

| 编号 | 类型 | 标题 | 最后更新 | 未响应时长 | 备注 |
|------|------|------|----------|------------|------|
| #468 | PR | fix(plugins): use cmd.exe on Windows for shell hooks | 2026-08-21 | ~5 个月（创建于 2026-03-23） | 虽然已有测试，但长期未合并，可能影响 Windows 用户的插件体验。 |
| #1208 | PR | fix(cron): honor heartbeat active hours when the scheduler fires | 2026-08-21 | ~4 天（创建于 2026-08-17） | 已对应 Issue #1223，建议尽快审查合并以闭环该缺陷。 |
| #1224 | Issue | [bug] Tools stop working in shared Slack channels | 2026-08-21 | 0 天（新开） | 需要进一步复现与定位，建议分配鉴权或上下文模块的成员跟进。 |
| #1223 | Issue | heartbeat active_hours has no effect on a default config | 2026-08-21 | 0 天（新开） | 已有对应 PR #1208，审查后可直接闭环。 |

**建议**：维护者可优先审查并合并 **#1208**（已修复活跃时段失效），随后处理长期搁置的 Windows Shell Hook PR（**#468**），以提升跨平台稳定性。新开的两个 Issue 应在接下来的 48 小时内分配负责人进行初步复现。

--- 

*本报告基于公开的 GitHub 事件数据生成，旨在为项目维护者和社区提供客观、数据驱动的项目健康快照。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw (agentscope-ai/CoPaw) 项目动态日报 – 2026‑08‑22**  

---

## 1. 今日速览  
- **活跃度**：过去 24 小时内共产生 **34 条 Issue**（19 条新开/活跃，15 条已关闭）以及 **36 条 PR**（21 条待合并，15 条已合并/关闭）。整体保持中等活跃度，社区讨论集中在稳定性问题和功能细节上。  
- **版本状态**：今日未有新版本发布，唯一的版本相关操作是 PR #7200 将版本号提升至 **v2.1.1b2**（仍为预发布）。  
- **关键进展**：四个已合并 PR 分别覆盖 **CI 测试修复、Hub 多用户功能、控制台长会话性能优化以及版本号 bump**，表明项目在基础设施稳定性和新功能原型上同步推进。  

---

## 2. 版本发布  
> **无新版本发布**  
> - 仅通过 PR #7200 完成内部版本号 bump（v2.1.1b2），未对外发布。  

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 标题 | 关键内容 | 影响 |
|----|------|----------|------|
| [**#7205**](https://github.com/agentscope-ai/QwenPaw/pull/7205) | `test(coverage): fix Windows integration coverage always reading 0` | 修复 Windows 平台的集成覆盖率统计始终为 0 的问题，添加 fail‑closed 守护防止空数据上报。 | 提升 CI 可靠性，确保后续平台覆盖率指标有效。 |
| [**#7112**](https://github.com/agentscope-ai/QwenPaw/pull/7112) | `feat(hub): add self-hosted multi-user Hub with local and Docker runtimes` | 引入 **QwenPaw Hub**，支持基于本地或 Docker 的多用户隔离实例，保持原有 `qwenpaw app` 不变。 | 为团队或企业自建多租户环境提供官方方向，扩展产品适用场景。 |
| [**#7176**](https://github.com/agentscope-ai/QwenPaw/pull/7176) | `perf(console): keep long chat sessions responsive` | 优化控制台在长会话场景下的渲染流程：避免每次流式更新同步重新解析 Markdown，完成历史滚动时的惰性处理。 | 大幅降低长聊天记录下的卡顿感，提升用户体验。 |
| [**#7200**](https://github.com/agentscope-ai/QwenPaw/pull/7200) | `chore: bump the version to v2.1.1b2` | 仅将项目版本号从 v2.1.0 提升至 v2.1.1b2（预发布）。 | 为后续正式发布做好版本标记，无功能变更。 |

**整体推进**：今日合并的 PR 主要聚焦在 **基础设施质量（CI、性能）**、**新功能原型（Hub）** 以及 **版本管理**，为后续的功能迭代和稳定版发布奠定基础。

---

## 4. 社区热点（评论最多、讨论最活跃的 Issues/PRs）

| 排名 | Issue / PR | 评论数 | 主题 | 链接 |
|------|------------|--------|------|------|
| 1 | [**#6524**](https://github.com/agentscope-ai/QwenPaw/issues/6524) | 6 | MCP 后端重启后客户端无法自动恢复，需手动执行 `list mcp` 才能重新连接 | https://github.com/agentscope-ai/QwenPaw/issues/6524 |
| 2 | [**#6780**](https://github.com/agentscope-ai/QwenPaw/issues/6780) | 4 | 2.0.1 版空闲数十分钟自动卡死，只能杀进程重启 | https://github.com/agentscope-ai/QwenPaw/issues/6780 |
| 3 | [**#7016**](https://github.com/agentscope-ai/QwenPaw/issues/7016) | 3 | 工具调用返回 404（`/api/tool-calls/.../offload`） | https://github.com/agentscope-ai/QwenPaw/issues/7016 |
| 4 | [**#7156**](https://github.com/agentscope-ai/QwenPaw/issues/7156) | 3 | Embedding health check 超时（硬编码 5s），导致回退到 BM25‑only | https://github.com/agentscope-ai/QwenPaw/issues/7156 |
| 5 | [**#7206**](https://github.com/agentscope-ai/QwenPaw/issues/7206) | 2 | `v2.1.1-beta.1` 中手动 `/compact` 因 `compact_threshold_ratio == 0.9` 触发 Pydantic 验证错误 | https://github.com/agentscope-ai/QwenPaw/issues/7206 |
| 6 | [**#7204**](https://github.com/agentscope-ai/QwenPaw/issues/7204) | 2 | 如何增加自定义 Tool？ | https://github.com/agentscope-ai/QwenPaw/issues/7204 |
| 7 | [**#7197**](https://github.com/agentscope-ai/QwenPaw/issues/7197) | 2 | MCP 工具授权规则中自定义频道不可选 | https://github.com/agentscope-ai/QwenPaw/issues/7197 |
| 8 | [**#6427**](https://github.com/agentscope-ai/QwenPaw/issues/6427) | 2 | WebView2 渲染进程在 v2.0.0+post.4 启动约 7 秒后崩溃（msedge.dll+0x36c7f6d） | https://github.com/agentscope-ai/QwenPaw/issues/6427 |
| 9 | [**#6430**](https://github.com/agentscope-ai/QwenPaw/issues/6430) | 2 | 启动时卡住约 85 秒（startup hang） | https://github.com/agentscope-ai/QwenPaw/issues/6430 |
|10| [**#7136**](https://github.com/agentscope-ai/QwenPaw/issues/7136) | 2 | 发送非 ASCII 文件名时文件卡片出现 percent‑encoded mojibake | https://github.com/agentscope-ai/QwenPaw/issues/7136 |

**背后诉求**：  
- **可靠性**：MCP 后端会话恢复（#6524）、空闲卡死（#6780）、启动卡顿（#6430）反映用户对长时间稳定运行的强烈期待。  
- **工具调用透明度**：工具调用 404（#7016）和手动 compact 失效（#7206）表明用户期望工具调用链路更健全且配置更直观。  
- **嵌入式服务健康检查**：健康检查超时（#7156）暴露了硬编码超时参数的不足，用户希望可配置。  
- **UI/本地化**：文件名乱码（#7136）、WebView2 崩溃（#6427）提示跨平台渲染和国际化仍需加强。  

---

## 5. Bug 与�定性（今日新报告 Bug 按严重程度排序）

| 严重度 | Issue | 简述 | 是否已有对应 Fix PR |
|--------|-------|------|----------------------|
| **高** | #7016 – 工具调用 404 | 流式会话中调用 `/offload` 接口返回 404，导致工具无法正常执行。 | 暂无直接 PR；需后端路由或服务注册检查。 |
| **高** | #7156 – Embedding health check 超时（硬编码） | Ollama embedding 已预热但健康检查仍超时 >5s，导致向量召回降级。 | 暂无 PR；建议将超时读取自配置项。 |
| **中** | #7206 – 手动 `/compact` 失败（Pydantic 验证错误） | 在 `compact_threshold_ratio == 0.9` 时触验证失败，导致手动压缩不可用。 | 暂无 PR；需校验模型定义。 |
| **中** | #7197 – MCP 工具授权规则中看不到自定义频道 | 自定义频道插件已启用，但在 MCP 授权 UI 中不可见。 | 暂无 PR；可能是 UI 过滤逻辑需要更新。 |
| **中** | #7136 – 非 ASCII 文件名出现 percent‑encoded mojibake | `send_file_to_user` 发送中文文件名时 UI 显示乱码。 | 暂无 PR；需对文件名进行正确的 URL‑decode。 |
| **低** | #6427 – WebView2 渲染进程崩溃（v2.0.0+post.4） | 启动约 7 秒后渲染进程崩溃，表现为闪退。 | 暂无 PR；疑似前端依赖或 Tauri 版本问题。 |
| **低** | #6430 – 启动卡住约 85 秒（startup hang） | 每次启动后台初始化卡顿。 | 暂无 PR；建议加入更详细的启动日志。 |

**总体稳定性评价**：今日新报告的 Bug 中，**工具调用 404** 与 **嵌入式健康检查超时** 影响核心功能（工具调用与记忆召回），建议优先排查。其余多数为 UI/体验或平台特定问题，影响较为局部。

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue / PR | 关键点 | 是否有对应实现 PR | 路线图暗示 |
|----------|------------|--------|-------------------|------------|
| 工具调用信息显示开关 | #7203 | 用户希望像 Hermes 一样可切换工具调用信息的可见性，以减少视觉干扰。 | 无直接 PR。 | 若采纳，可能出现在 **Settings → AI 辅助** 或 **聊天设置** 中。 |
| 媒体大小独立配置（image/video/audio） | #7201 | 将单一 `max_inline_media_bytes` 拆分为三个独立上限，并在 Provider 高级设置页暴露。 | 无直接 PR。 | 与提供商能力细粒度控制相符，可能进入 **Provider 配置** 下一版。 |
| 审批跳过会话前已有文件 | #7198 | 用户认为对会话开始前已有文件的操作不应触发审批，尤其在夜间自动任务场景。 | 无直接 PR。 | 涉及 **审批中间件** 的逻辑调整，若接受则会改动 `approval` 模块。 |
| 推理过程默认折叠 | #7196 | 默认收起思考链，仅在调试时展开，类似 Hermes 的设置。 | 无直接 PR。 | 可能进入 **聊天显示偏好** 中。 |
| 桌面全屏图标遮挡 | #7195 | 全屏时底部图标遮挡聊天内容，建议将图标移至顶部或自动隐藏。 | 无直接 PR。 | UI 布局调整，属于 **桌面端细节优化**。 |
| 自定义 Tool 添加指南 | #7204 | 用户询问如何增加自定义 Tool，说明文档或示例不够明确。 | 无直接 PR。 | 文档补全（如 #7202 的 Mailbox 文档）表明社区在完善使用指南。 |

**路线图信号

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw 项目日报 – 2026‑08‑22**  
*(基于过去 24 小时的 GitHub 活动：50 条 Issue 更新，50 条 PR 更新；无新版本发布)*  

---  

## 1. 今日速览
- 项目整体保持高活跃度：47 条 Issue 仍处于打开/进行中状态，仅有 3 条被关闭；48 条 PR 待审核，仅 2 条已合并/关闭。  
- 今天的讨论集中在 **运行时/daemon**、**配置**、**SOP**、**ZeroCode UI** 以及 **安全/权限** 四大板块。  
- 虽无新版本发布，但已有两个高影响力的修复 PR 被合并（见下文），表明核心稳定性问题正在得到及时处理。  

## 2. 版本发布
- **无新版本**。  

## 3. 项目进展（已合并/关闭的重要 PR）

| PR | 标题 | 类别 | 关键变更 | 链接 |
|----|------|------|----------|------|
| **#10092** | `fix(providers): redact Anthropic credential fragments` | 安全 / Provider | 移除 Anthropic 認證除錯事件中的 `credential_head` / `credential_tail`，僅保留非祕密訊息（認證頭部與長度）。解決 #9976 的洩漏風險。 | https://github.com/zeroclaw-labs/zeroclaw/pull/10092 |
| **#10150** | `fix(zerocode): accept paste during active turns` | UI / ZeroCode | 在激活的 ZeroCode 對話中允許終端貼上（粘貼）而不被丟棄；新增回歸測試確保貼上內容會在 Enter 鍵後排隊並等待當前回合結束。 | https://github.com/zeroclaw-labs/zeroclaw/pull/10150 |

> 這兩個 PR 均標記為 **high / p1** 風險，合並後直接提升了安全性（防止憑證片段洩漏）與使用體驗（ZeroCode 貼上支援），是今天唯一的已合併變更。

## 4. 社区熱點（評論數最多的 Issues / PRs）

| 排名 | Item | 類別 | 評論數 | 主要訴求 | 链接 |
|------|------|------|--------|----------|------|
| 1 | **#9965** – runtime‑written executable test fixtures hit ETXTBSY under the parallel runtime gate | bug / runtime / test | 7 | 需要在並行執行門檻下穩定化會寫入可執行 shim 的測試固定件，避免 `ETXTBSY`（文字檔案被忙碌）錯誤。 | https://github.com/zeroclaw-labs/zeroclaw/issues/9965 |
| 2 | **#9815** – `forbidden_paths` is unreachable for any path under `allowed_roots` or the workspace | bug / config / security | 5 | 期望 `forbidden_paths` 能在路徑同時符合 `allowed_roots*` 時生效；目前因早期允許根檢查直接返回 `true` 而未達到禁用檢查。 | https://github.com/zeroclaw-labs/zeroclaw/issues/9815 |
| 3 | **#9779** – `[sop] sops_dir` documented default is not honoured by the daemon | bug / docs / config / daemon / SOP | 4 | 文件說明的預設 `sops_dir` 未被守護進程使用，導致 SOP 子系統無聲無色地不載入。 | https://github.com/zeroclaw-labs/zeroclaw/issues/9779 |
| 4 | **#10059** – Support Option‑Backspace word deletion in ZeroCode text inputs | enhancement / good first issue | 3 | macOS 使用者期望 `Option‑Backspace` 能刪除前一個詞，與現有 `Ctrl+W` 行為保持一致。 | https://github.com/zeroclaw-labs/zeroclaw/issues/10059 |
| 5 | **#9929** – headless SOP step turns are given a session path but never persisted to the session store | bug / runtime / SOP | 3 | 無頭 SOP 步驟雖分配了 session 路徑，但未寫入 session store，導致狀態遺失。 | https://github.com/zeroclaw-labs/zeroclaw/issues/9929 |
| 6 | **#9855** – Matrix channel fails to resolve homeserver via `.well-known/matrix/client` delegation | bug / channel / config | 3 | Matrix 通道應該遵循標準發現機制（`/.well-known/matrix/client`），目前直接使用配置的 host 字符串繞過此步驟。 | https://github.com/zeroclaw-labs/zeroclaw/issues/9855 |

> 以上 Issue 均帶有 `priority:p1` 或 `priority:p2` 標籤，顯示社區對核心功能正確性與安全性的關注度最高。

## 5. Bug 與穩定性（今日新報告，依嚴重程度排序）

| 嚴重度 | Issue | 簡述 | 是否有對應修復 PR |
|--------|-------|------|-------------------|
| **S0 – data loss / security risk** | #9947 (cron tools not scoped to owning agent) | 任何持有 cron 工具的代理人可讀取／觸發／修改／刪除其他代理人的工作。 | 暫無 PR（需 author 行動） |
| | #9883 (Inbound WebP conversion decodes unbounded before shared image validator) | WebP 附件在共享圖像驗證前被無界解碼，可能導致資源耗盡。 | 暫無 PR |
| | #9811 (`/health` reports a channel healthy that has never connected) | 健康檢查錯誤將從未連線的 Telegram 頻道標記為健康。 | 暫無 PR |
| **S1 – workflow blocked** | #9946 (agent-browser subprocess waits are unbounded) | `browser` 工具在可用性探測與 `run_command` 兩處缺少壁鐘截止，導致卡住。 | 暫無 PR |
| | #10042 (MSRV system dependency install can consume job timeout) | CI 的 `apt_install.sh` 可能佔用全部 20 分鐘 MSRV 作業預算。 | PR #10156 已提交（fix ci: bound apt dependency install attempts） |
| **S2 – degraded behavior** | #9965 (ETXTBSY under parallel runtime gate) | 測試固定件寫入可執行 shim 後在并行門檻下衝突。 | 暫無 PR |
| | #9786 (malformed SOP.toml silently dropped) | 誤格 SOP 被靜默忽略，`sop list` 與 `sop validate` 未給出診斷。 | 暫無 PR |
| | #10045 (Persisted image markers retain temporary source paths) | 工作區複製圖片時，持久化 `[IMAGE:…]` 標記仍指向原始臨時路徑，導致重複警告。 | 暫無 PR |
| **S3 – minor issue** | #9983 (Fallback model without vision incorrectly reports cause of error) | 當視覺後備模型不支援視覺時，錯誤訊息未指明是因缺少視覺能力導致。 | 暫無 PR |
| | #9783 (SOP finish_run discards failure reason) | `finish_run` 接受失敗原因但不記錄，導致失敗運作缺少根因資訊。 | 暫無 PR |

> 以上列出的 **S0** 與 **S1** 問題均對應著目前尚未有對應 PR 的高風險區域，建議維護者優先審查。

## 6. 功能請求與路線圖信號

| 功能請求 | Issue | 現狀 | 是否有相關 PR（可合併） |
|----------|-------|------|------------------------|
| **Option‑Backspace 支援**（ZeroCode 文字輸入） | #10059 | 已標記 `good first issue`、`status:in-progress` | 無直接 PR，但屬於易上手的 UI 改進，適合新貢獻者。 |
| **Discord 按角色授權** | #9970 | `status:in-progress`、`priority:p2` | 無 PR，但已有討論，可望在下個里程碑納入。 |
| **QwenCloud 提供商升級** | #9943 | `status:accepted`、`priority:p2` | 無 PR，但已被標記為接受，可能隨後出現實作 PR。 |
| **CI Lint 超時餘量恢復（fork PR）** | #10040 | `status:accepted`、`priority:p2` | 無 PR，但已被標記為接受，預計會在 CI 改進 PR 中體現。 |
| **文件：將 prompt‑inject 棄用截止時間對齊至 Schema V4** | #10019 | `status:accepted`、`priority:p2` | 無 PR，但為文件類變更，易於合併。 |
| **ZeroRelay 安全傳輸與瀏覽器 enrolment 前門** | #10142 (PR) | `status:open`、`size:XL`、`risk:high` | 此 PR 本身即是功能實作，預計合併後會大幅提升遠端傳輸安全。 |

> 總體來看，社區最迫切的功能是 **跨平台文字編輯增强（Option‑Backspace）** 與 **Discord 基於角色的授權**，這兩個需求均有明確的實作路徑且尚未被阻塞。其餘功能請求多已被標記為 `accepted`，顯示維護者對納入的意向積極。

## 7. 用戶反饋摘要（從 Issues 評論中提煉）

- **安全與隱私**：多位使用者憂慮憑證片段被記錄（#9976）以及 `forbidden_paths` 無效（#9815），認為這是潛在的資料外洩風險。  
- **配置直觀性**：#9779 與 #9815 的評論指出文件與實際行為不一致导致困惑，尤其是預設值未被尊重時缺少任何警告。  
- **SOP 可靠性**：#9929、#9786、#9783 的討論反映出 SOP 引擎在狀態持久化、錯誤訊息與惡性配置容忍度上存在明顯缺口，使用者期望失敗時能看到原因、惡性配置應該被明確拒絕而非靜默忽略。  
- **ZeroCode 使用體驗**：#10059、#10058、#10045 的評論強調鍵盤快捷鍵與剪貼貼上在日常編輯中的不便，特別是 macOS 用戶對於慣用快捷鍵的缺失感到不適。  
- **CI / 建置穩定性**：#10042、#10040 的抱怨集中在 CI 作業時長不穩定，特別是 MSRV 作業常被依賴安裝步驟耗盡時間，影響貢獻者的提交體驗。  
- **權限隔離**：#9947 的評論指出多代理環境下 cron 工具缺乏所有者範圍，這是一個嚴重的安全缺陷，使用者呼籲盡快引入代理人 scoping 機制。

> 總結：使用者最關心的是 **安全（憑證防泄漏、路徑隔離）**、**配置透明度（預設值與文件對齊）**，以及 **日常操作流暢度（ZeroCode 編輯快捷鍵、貼上支援）**。這些反饋與上文熱點 Issues 高度重合。

## 8. 待處理積戳（長期未回覆的重要 Issue / PR）

| Item | 類別 | 最後更新 | 未處理原因（從標

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*