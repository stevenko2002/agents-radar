# OpenClaw 生态日报 2026-10-06

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-10-05 22:15 UTC

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



# OpenClaw 项目动态日报 (2026-10-06)

---

## 1. 今日速览

过去24小时内，OpenClaw 项目保持了极高的开发活跃度，Issues 和 PR 双双达到 500 条的更新量（新增/活跃 Issue 409 条，已关闭 91 条；待合并 PR 323 条，已合并/关闭 177 条）。项目发布了 **v2026.10.1-beta.1** 版本，重点围绕会话生命周期、内存管理和 Worker 架构进行优化。然而，社区仍面临严峻的稳定性挑战，特别是 Windows 平台的 SQLite WAL 增长、多版本更新失败率高以及严重的内存泄漏问题。整体来看，项目正处于**高速迭代与技术债务清理并存**的关键阶段。

---

## 2. 版本发布

### v2026.10.1-beta.1
*   **发布日期**：2026-10-06
*   **版本性质**：测试版（Beta），不建议生产环境立即升级。
*   **核心更新内容**：
    *   **会话与内存（Sessions and memory）**：优化了注册表变更时的使用保留机制，支持从远程工作区交付 Worker 附件；防止了队列取消和转录别名阻塞活跃轮次（active turns）；保持了续签签名（continuation signatures）对齐，并完成了嵌入缓存（embedding caches）的迁移。
*   **迁移与破坏性变更**：此版本为 Beta 测试版，包含底层会话存储和 Worker 通信协议的调整。升级前建议备份当前的 `state/` 和 `agents/` 目录，并注意可能因嵌入缓存迁移导致的短暂索引重建延迟。

---

## 3. 项目进展

近期合并与关闭的 PR 推动了项目在架构重构、性能优化和特定渠道修复上的关键步伐：

*   **架构重构与代码健康**：
    *   **[PR #165804]** 类型重构：梳理了 UI、包和插件 contracts，减少了定义漂移（deslop）。
    *   **[PR #165825]** 移除实验性功能：下线了 `openclaw fleet` 命令及其租户容器管理功能，简化了维护负担。
    *   **[PR #165785]** 会话重构：将 Goal（目标）管理逻辑移至 Agent 执行器（executor）中，实现了 Worker 拥有的事务化管理，减少了 Gateway 线程阻塞。
    *   **[PR #165799]** 持久化优化：将 Board 的会话准入和呈现读取迁移至 Worker 线程。
*   **性能优化（重点解决 Gateway 线程阻塞）**：
    *   **[PR #165684]** 将大规模注册表（Registry）的读取和 JSON 解码等批量操作从 Gateway 主线程剥离，降低冷启动和恢复时的卡顿。
    *   **[PR #165816]** 增强了 Worker 队列指标，能够更精准地归属任务和写入请求的成本，帮助运维人员定位队列竞争瓶颈。
*   **重要特性与功能落地**：
    *   **[PR #163645]** 新增 Worker 原生推理运行时（Native Inference Runtime），支持直接在 Worker 节点配置和执行本地模型推理，为后续去中心化推理打下基础。
    *   **[PR #148582]** 允许用户在 Web UI 中取消固定（unpin）Home 标签页并进行自定义分组，提升了界面灵活性。
*   **关键 Bug 修复**：
    *   **[PR #165824]** 修复了 Matrix 渠道在配置了去抖动（debounce）后，消息爆发被拆分为多个独立会话 turn 的问题。
    *   **[PR #165164]** 修复了 Telegram/WhatsApp/Discord 等渠道在延迟释放入口通道时，后发消息“超车”早于正在去抖动中的先发消息的乱序问题。
    *   **[PR #165728]** 修复了 Codex 聊天界面意外输出原始可视化指令的问题。

---

## 4. 社区热点

今日社区讨论的焦点高度集中在**数据持久化瓶颈、内存泄漏和更新可靠性**上：

*   **[Issue #143524] (108条评论)**：Windows 平台下 Agent SQLite WAL 文件无限增长（可达 1.4–2.8 GB），导致 Gateway 无法启动。这是目前社区反应最激烈、最集中的痛点，用户要求官方提供自动化的 WAL 定期 checkpoint 机制。
*   **[Issue #119720] (23条评论)**：同步的 Agent 持久化和转录维护在高并发规模下会阻塞 Gateway 事件循环。此问题直接推动了近期将持久化操作移至 Worker 的重构（如 PR #165785 和 #165684）。
*   **[Issue #159662] (16条评论)**：`prepared-model-catalog.worker.js` 存在无界内存泄漏，空闲状态下每小时泄漏 4-5 GB 内存。该问题已被标记为 P0 级崩溃循环，严重威胁网关存活时间。
*   **[Issue #145252] (13条评论)**：针对 2026.9.3 / 2026.9.4 版本的更新、升级和恢复可靠性追踪。社区用户普遍反馈自动更新流程中的 Doctor 校验和版本回滚机制不够健壮。

---

## 5. Bug 与稳定性

今日暴露的 Bug 依然以**崩溃循环（Crash-loop）、消息丢失和更新阻塞**为主，且多平台（Windows, macOS, Linux）均有分布：

### 严重程度：P0 / 阻塞发布 (ux-release-blocker)
*   **SQLite WAL 增长阻塞启动**：`#143524`（Windows，未修复，无新 PR）—— 数据库检查点失效，磁盘占用失控。
*   **Worker 内存泄漏**：`#159662`（跨平台，未修复，无新 PR）—— 预备模型目录工作线程内存失控。
*   **更新恢复机制失效**：
    *   `#164074`（Linux）：原生更新恢复卡在发布完成阶段。
    *   `#146887`（Linux）：2026.9.3 -> 2026.9.4 更新在多个阶段失败（stdio MCP 超时、lint 硬门禁、服务交接失败）。
    *   `#157319`（Linux）：2026.9.6 更新验证失败，状态迁移后无法回滚。
    *   `#164396`（Windows）：2026.9.8 安装后无法连接本地网关。
    *   `#146860`（Windows）：计划任务交互式令牌模式下，更新交接无法获取进程启动身份。

### 严重程度：P1 / 高影响
*   **事件循环阻塞**：`#119720`（跨平台，未修复）—— 影响大规模部署。
*   **插件热加载中断 Agent**：`#139710`（跨平台，未修复）—— 插件生成的热替换在 turn 中途杀死系统 Agent 及其规划器后备。
*   **子进程僵尸泄漏**：`#97616`（跨平台，未修复）—— Hook 和工具产生的子进程未被回收，导致系统资源劣化。
*   **WhatsApp 消息丢失**：`#161976`（Linux，未修复）—— 重启后持久化注册表交接时，WhatsApp 私信最终回复发送失败。
*   **Curated Memory 永久排除**：`#153426`（跨平台，P0级数据风险）—— `MEMORY.md`/`USER.md` 因 provenance ratchet 被静默且永久地排除在启动注入之外，且无恢复手段。

> **维护者注记**：上述大量 Issue 均带有 `clawsweeper:no-new-fix-pr` 或 `clawsweeper:needs-maintainer-review` 标签，表明社区贡献者暂未提交修复 PR，急需维护者进行路线决策或人工排查。

---

## 6. 功能请求与路线图信号

结合现有 PR 和社区讨论，以下功能请求可能在下个版本（或 2026.10.x 系列）中得到推进：

*   **本地/原生推理能见度**：**[Issue #51441]** 提出希望在 `session_status` 中暴露解析后的后端模型（如 LiteLLM 路由后的实际模型），这与 **[PR #163645]（Native Inference Runtime）** 的合并高度契合，预示着 10 月版本将强化多模型路由的可观测性。
*   **Mac 桌面端与移动端体验**：**[Issue #139262]**（Mac 桌面端远程网关附件下载跳转 Dashboard）和 **[Issue #146821]**（iOS Talk 45秒超时中断研究）的修复已被提上日程，移动与桌面端的原生体验

---

## 横向生态对比

 ## 今日重点

### 重要更新

**OpenClaw** ([github.com/openclaw/openclaw](https://github.com/openclaw/openclaw))  
发布 v2026.10.1-beta.1，围绕会话生命周期、内存管理和 Worker 架构进行优化，包含嵌入缓存迁移。  
影响：测试版不建议生产环境立即升级，升级前需备份 `state/` 和 `agents/` 目录。

**NanoClaw** ([github.com/nanocoai/nanoclaw](https://github.com/nanocoai/nanoclaw))  
发布 v2026.10.0-rc.2，首次采用日历版本号，并将 `/update-nanoclaw` 默认行为改为安装已发布版本而非 main 分支。  
影响：提升更新稳定性和可预测性，stable 通道用户仍需等待最终版。

**OpenClaw** ([github.com/openclaw/openclaw](https://github.com/openclaw/openclaw))  
合并 PR #163645，新增 Worker 原生推理运行时，支持在 Worker 节点直接配置和执行本地模型推理。  
影响：为后续去中心化推理打下基础。

**NanoBot** ([github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot))  
合并 PR #5299，在 API 中暴露结构化 token 使用记录。  
影响：响应社区对 token 消耗追踪的需求，提升成本可观测性。

**NanoBot** ([github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot))  
合并 PR #6066，修复 MCP 流式 HTTP 的读超时未覆盖 tool_timeout 的问题。  
影响：解决长时间运行工具调用被意外中断的缺陷。

**LobsterAI** ([github.com/netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI))  
修复多个高危安全漏洞，包括技能安装包任意目录删除、未认证代理访问、敏感信息泄露及路径遍历。  
影响：涉及安全边界，需尽快应用修复（PR #2794、#2798 等已提交）。

**NullClaw** ([github.com/nullclaw/nullclaw](https://github.com/nullclaw/nullclaw))  
合并 PR #1023，修复非 root Docker 镜像中 HOME 目录权限问题。  
影响：解决网关因 AccessDenied 退出的部署故障。

**Hermes Agent** ([github.com/nousresearch/hermes-agent](https://github.com/nousresearch/hermes-agent))  
合并 PR #133484，Windows 下构建/包管理器对新鲜解压目录重命名时加入重试机制。  
影响：修复 `hermes update` 和 `hermes pm install` 在 Windows 上因文件句柄占用导致的失败。

### 活跃度概览

今日 OpenClaw 社区动态最频繁，Issues 和 PR 更新量均接近 500 条；ZeroClaw PR 更新达 50 条但全部待合并、0 关闭；NanoBot、Hermes Agent、NullClaw 分别有 28、50、30 条 PR/Issue 更新。TinyClaw 与 ZeptoClaw 过去 24 小时无活动，PicoClaw 社区趋于停滞。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Thinking Process:

1.  **Understand the Goal**: The user wants a structured daily report (dated 2026-10-06) for the GitHub project `HKUDS/nanobot` based on provided data (Issues, PRs, Releases). The report needs to follow a specific structure with 8 sections, maintaining an objective, professional, data-driven tone, highlighting project health, and including GitHub links.

2.  **Analyze the Input Data**:
    *   **Date of report**: 2026-10-06 (based on prompt instruction "生成 2026-10-06 的项目动态日报", though the data says updated 2026-10-05). Let's use the requested date 2026-10-06 as the report date, but reference the data updated up to 2026-10-05/2026-10-06.
    *   **Overview**:
        *   Issues (last 24h): 7 total (6 open/active, 1 closed).
        *   PRs (last 24h): 28 total (21 pending merge, 7 merged/closed).
        *   New Releases: 0.
    *   **Latest Issues (7 total)**:
        *   `#5266` [OPEN] [enhancement] Logs about token consumption (too many tokens are burned) - Author: knoppix2, created 2026-08-06, updated 2026-10-05, 15 comments, 0 thumbs up. Token consumption tracing/logging.
        *   `#6065` [CLOSED] [bug] MCP streamable HTTP uses a fixed 30s read timeout despite tool_timeout - Author: wkdddd, created 2026-10-05, updated 2026-10-05, 1 comment. (Has a fix PR `#6066`).
        *   `#6031` [OPEN] Notify chat channels when a fallback model serves a turn (currently WebUI-only) - Author: GZY-SUPER-HACKER, created 2026-10-04, updated 2026-10-05, 1 comment. Failover notification to chat channels.
        *   `#6008` [OPEN] [bug] fix(webui): sidebar state is wiped after an update when the initial sidebar-state fetch fails - Author: morandot, created 2026-10-02, updated 2026-10-05, 1 comment.
        *   `#6079` [OPEN] [enhancement] Allow agents to observe group messages without always replying - Author: dmerkert, created 2026-10-05, updated 2026-10-05, 0 comments.
        *   `#6078` [OPEN] [enhancement] Allow a separate model preset for the heartbeat notification evaluator - Author: dmerkert, created 2026-10-05, updated 2026-10-05, 0 comments.
        *   `#6070` [OPEN] Cron completion consumes schedules changed during execution - Author: fhgffy, created 2026-10-05, updated 2026-10-05, 0 comments. (Has a fix PR `#6071`).
    *   **Latest PRs (28 total, showing top 20 by comments/activity)**:
        *   `#6080` [OPEN] feat(webui): show gateway commit in About settings - chengyongru, 2026-10-05.
        *   `#6064` [OPEN] fix(memory): serialize manual and scheduled Dream runs - KailBug, 2026-10-05.
        *   `#6076` [CLOSED] test: isolate Star invitation state and stabilize late-result waits - chengyongru, 2026-10-05.
        *   `#6075` [CLOSED] fix(webui): fit wide equations and refine math spacing - chengyongru, 2026-10-05.
        *   `#5299` [CLOSED] feat(api): expose structured token usage records - chengyongru, 2026-08-08, updated 2026-10-05. (Addresses token usage tracking, related to `#5266`).
        *   `#6066` [CLOSED] fix(mcp): let streamable HTTP read timeout cover tool_timeout - maxmilian, 2026-10-05. Fixes `#6065`.
        *   `#6057` [OPEN] feat(webui): choose the chat for scheduled tasks - Re-bin, 2026-10-04, updated 2026-10-05.
        *   `#6074` [CLOSED] feat(webui): unify icons and refine interaction feedback - chengyongru, 2026-10-05.
        *   `#6033` [OPEN] fix(session): preserve runtime sidecars across metadata updates - dajiaohuang, 2026-10-04, updated 2026-10-05.
        *   `#6060` [CLOSED] fix(documents): read cells beyond declared XLSX dimensions - takiAA, 2026-10-04, updated 2026-10-05.
        *   `#6073` [CLOSED] fix(webui): restore CJK line height and refine text wrapping - chengyongru, 2026-10-05.
        *   `#6072` [OPEN] feat(mcp): allow per-server environment proxy opt-out - wkdddd, 2026-10-05.
        *   `#6071` [OPEN] fix(cron): preserve schedules edited during execution - fhgffy, 2026-10-05. Fixes `#6070`.
        *   `#6032` [OPEN] feat(webui): add configurable local trusted extension surface - lsd-techno, 2026-10-04, updated 2026-10-05.
        *   `#6069` [OPEN] fix(security): pin validated DNS for bytes hostnames - wkdddd, 2026-10-05. Security fix.
        *   `#6068` [OPEN] feat(webui): add FXMacroData MCP preset - roberttidball, 2026-10-05.
        *   `#6067` [OPEN] fix(mcp): prevent credential leakage in discovery error logs - wkdddd, 2026-10-05. Security fix.
        *   `#5846` [OPEN] fix(agent): trace BUILD substage latency (#5843) - Solaris-star, 2026-09-21, updated 2026-10-05.
        *   `#4551` [OPEN] feat(heartbeat): add isolated_session config to allow shared session - dajiaohuang, 2026-06-26, updated 2026-10-05.
        *   `#4549` [OPEN] feat(heartbeat): add model_override config for cheaper heartbeat model - dajiaohuang, 2026-06-26, updated 2026-10-05.

3.  **Drafting the Sections**:

    *   **1. 今日速览 (Today's Overview)**:
        *   Summarize overall status: High activity, particularly in PRs (28 total, 7 merged/closed), indicating robust development momentum.
        *   Issue count is moderate (7 total, 6 active), mostly feature requests and minor bugs.
        *   No new version released today, but significant underlying fixes and features are being pushed (security, WebUI improvements, MCP enhancements).
        *   Project health is excellent, showing active community engagement and rapid response to bugs (e.g., MCP timeout, security leaks).

    *   **2. 版本发布 (Version Releases)**:
        *   None (无). No new releases published in the last 24 hours. Skip detailed description as per prompt ("无则省略").

    *   **3. 项目进展 (Project Progress / Merged & Closed PRs)**:
        *   Identify the closed/merged PRs (total 7):
            *   `#6066` [CLOSED] fix(mcp): let streamable HTTP read timeout cover tool_timeout (Fixes `#6065`). Crucial for MCP reliability.
            *   `#5299` [CLOSED] feat(api): expose structured token usage records. Direct response to token consumption concerns (`#5266`).
            *   `#6076` [CLOSED] test: isolate Star invitation state and stabilize late-result waits (Testing improvements).
            *   `#6075` [CLOSED] fix(webui): fit wide equations and refine math spacing (UI/UX fix).
            *   `#6074` [CLOSED] feat(webui): unify icons and refine interaction feedback (UI/UX enhancement).
            *   `#6060` [CLOSED] fix(documents): read cells beyond declared XLSX dimensions (Data parsing fix).
            *   `#6073` [CLOSED] fix(webui): restore CJK line height and refine text wrapping (Multilingual UI fix).
        *   Summary of progress: Major strides in API observability (token usage records), WebUI visual consistency (icons, math equations, CJK layout), backend robustness (MCP timeouts, XLSX parsing, test stability). Project is maturing with heavy focus on UI/UX refinement and operational visibility.

    *   **4. 社区热点 (Community Hotspots / Most Discussed)**:
        *   Look at the issues/PRs with most comments or interactions.
        *   `#5266` [OPEN] Logs about token consumption (too many tokens are burned) has 15 comments, making it the hottest issue. Users are highly concerned about invisible token burns, requesting detailed logging.
        *   `#5299` [CLOSED] feat(api): expose structured token usage records (0 comments listed but marked as closed, likely the core implementation addressing the token concern).
        *   Analysis of demands: Community is deeply focused on *cost control and observability* (token tracking) and *failure transparency* (fallback model notifications `#6031`, heartbeat model presets `#6078`).

    *   **5. Bug 与稳定性 (Bug & Stability)**:
        *   List bugs by severity:
            *   **High Severity / Security**:
                *   `#6069` [OPEN] fix(security): pin validated DNS for bytes hostnames (PR addressing potential DNS pinning bypass). Security is top priority (p1).
                *   `#6067` [OPEN] fix(mcp): prevent credential leakage in discovery error logs (PR addressing credential leaks in debug logs).
            *   **Medium Severity / Functional Bugs**:
                *   `#6065` [CLOSED] MCP streamable HTTP uses a fixed 30s read timeout despite tool_timeout (Fixed by `#6066`). High impact on long-running tool calls.
                *   `#6008` [OPEN] fix(webui): sidebar state is wiped after an update when the initial sidebar-state fetch fails (User data loss risk in WebUI).
                *   `#6070` [OPEN] Cron completion consumes schedules changed during execution (Fix PR `#6071` is open). Scheduler integrity issue.
                *   `#6064` [OPEN] fix(memory): serialize manual and scheduled Dream runs (Prevents memory corruption/overlapping writes).
            *   **Minor / UI / Documents**:
                *   `#6060` [CLOSED] fix(documents): read cells beyond declared XLSX dimensions.
                *   WebUI layout bugs (`#6075`, `#6073` closed).

    *   **6. 功能请求与路线图信号 (Feature Requests & Roadmap Signals)**:
        *   New features requested in Issues:
            *   `#6031` Notify chat channels when a fallback model serves a turn (currently WebUI-only) -> Cross-channel failover notifications.
            *   `#6079` Allow agents to observe group messages without always replying -> Group chat logic refinement.
            *   `#6078` Allow a separate model preset for the heartbeat notification evaluator -> Cost saving / specialized model routing.
        *   New features in PRs likely to be in next release:
            *   `#4549` & `#4551` Heartbeat model override and isolated session configs (Highly requested features, now in active PR stage).
            *   `#6057` Choose the chat for scheduled tasks (WebUI scheduling binding).
            *   `#6080` Show gateway commit in About settings (Diagnostic transparency).
            *   `#6032` Configurable local trusted extension surface (Extensibility).
            *   `#6068` FXMacroData MCP preset (Domain-specific integration).
            *   `#6072` Per-server environment proxy opt-out (Networking flexibility).

    *   **7. 用户反馈摘要 (User Feedback Summary)**:
        *   Extract real user pain points:
            *   *Token burning / Cost anxiety*: Users notice massive token consumption without visible activity (`#5266`). They need transparency on which call burns what.
            *   *Notification opacity*: When failover happens, chat channel users are blind to the model switch (`#6031`). They want seamless transparency.
            *   *Scheduler confusion*: Changing schedules mid-run breaks future executions (`#6070`).
            *   *WebUI stability*: Silent fallback to default states on API failure causes user work (sidebar pins, layouts) to be lost (`#6008`).
            *   *Satisfaction*: The rapid closure of bugs like `#6065` and the implementation of structured token records (`#5299`) shows the maintainers are highly responsive to community pain points.

    *   **8. 待处理积压 (Backlog / Long-standing items)**:
        *   Identify long-standing PRs/Issues:
            *   `#5266` Token consumption logging (Created 2026-08-06, updated 2026-10-05, 15 comments). Over 2 months old, highly discussed, still OPEN. Needs attention.
            *   `#4551` feat(heartbeat): add isolated_session config (Created 2026-06-26, updated 2026-10-05). Almost 4 months in PR state.
            *   `#4549` feat(heartbeat): add model_override config (Created 2026-06-26, updated 2026-10-05). Also ~4 months in PR state.
            *   `#5846` fix(agent): trace BUILD substage latency (Created 2026-09-21, updated 2026-10-05). Over 2 weeks, still open.
        *   Warning to maintainers: The heartbeat configuration PRs (`#4549`, `#4551`) have been in "OPEN" PR state for nearly 4 months, indicating potential maintenance bottleneck or need for review prioritization. The token consumption issue `#5266` is the highest user-concerned issue and remains open despite the closed API PR `#5299` (which only exposes records, doesn't solve the root logging of granular calls).

4.  **Refining Language and Style**:
    *   Ensure the tone is professional, objective, data-driven, and structured.
    *   Use Markdown formatting (bolding, lists, links).
    *   Check for accuracy against the provided data. E.g., date is 2026-10-06 (per prompt request). Data points to updates on 2026-10-05.
    *   Make sure to include links like `https://github.com/HKUDS/nanobot/issues/5266` or simply `HKUDS/nanobot Issue #5266` as provided in the prompt. Let's construct full URLs or use the format provided. The prompt provides links like `HKUDS/nanobot Issue #5266`, I will write them out clearly as standard GitHub URLs: `https://github.com/HKUDS/nanobot/issues/5266` and `https://github.com/HKUDS/nanobot/pull/6080` for professional formatting, while referencing the IDs.

Let's double check the exact IDs.
Issues:
- #5266: `https://github.com/HKUDS/nanobot/issues/5266`
- #6065: `https://github.com/HKUDS/nanobot/issues/6065`
- #6031: `https://github.com/HKUDS/nanobot/issues/6031`
- #6008: `https://github.com/HKUDS/nanobot/issues/6008`
- #6079: `https://github.com/HKUDS/nanobot/issues/6079`
- #6078: `https://github.com/HKUDS/nanobot/issues/6078`
- #6070: `https://github.com/HKUDS/nanobot/issues/6070`

PRs:
- #6080, #6064, #6076

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-10-06

## 1. 今日速览

过去 24 小时，Hermes Agent 社区保持高活跃度：Issues 更新 50 条（16 条活跃/新开、34 条关闭），Pull Requests 更新 50 条（20 条待合并、30 条已合并/关闭），无新版本发布。整体看，项目处于**密集 bug 修复与稳定性收尾阶段**——Desktop、SSH 网关、Kanban 调度、TUI 技能解析等核心路径均有重要修复落地。同时，多线程的 Agent 状态一致性、终端超时语义、上下文压缩呈现等偏架构的 PR 仍在Review中，说明质量门槛较高。

---

## 2. 版本发布

**无。**

今日未发布新版本（Releases: 0）。近期提交主要集中在缺陷修复与内部重构，建议关注后续是否会有针对 v0.21.x 的补丁版本。

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 内容 | 推进价值 |
|---|---|---|
| [NousResearch/hermes-agent#133484](https://github.com/NousResearch/hermes-agent/pull/133484) | Windows 下构建/包管理器对新鲜解压目录重命名时，加入重试以等待杀毒软件释放文件句柄 | 修复 `hermes update` / `hermes pm install` 在 Windows 上因 `[WinError 5]` 失败的问题 |
| [NousResearch/hermes-agent#132008](https://github.com/NousResearch/hermes-agent/pull/132008) | 对跨 Profile 的 Desktop 侧边栏项目文件夹去重 | 解决 Projects 列表重复渲染问题 |
| [NousResearch/hermes-agent#132018](https://github.com/NousResearch/hermes-agent/pull/132018) | 区分后端连接状态与消息网关健康状态 | 改善状态栏文案，避免用户误将后端离线当作“Gateway ready” |
| [NousResearch/hermes-agent#133264](https://github.com/NousResearch/hermes-agent/pull/133264) | 在 TUI 命令规范目录中注册精确技能命令，避免精确技能名被重定向到更长的别名 | 修复 TUI 中输入精确技能名无响应的问题 |
| [NousResearch/hermes-agent#133541](https://github.com/NousResearch/hermes-agent/pull/133541) | `npm run fix` 自动格式化 | 代码风格维护 |

**整体迈进：** 今日关闭的 PR 集中在“Windows 安装体验”“Desktop 侧边栏正确性”“网关状态语义”三个用户高频痛点上，属于可直接提升可用性的修复。

---

## 4. 社区热点

### 评论最多的 Issues / PRs

| # | 类型 | 标题 | 评论 | 核心诉求 |
|---|---|---|---|---|
| [NousResearch/hermes-agent#119070](https://github.com/NousResearch/hermes-agent/issues/119070) | Issue (OPEN) | Kanban 卡片在被限流后重试成功，但仍被永久标记为 `blocker_auth`，reviewer 永远不会被派发 | 11 | **工作流阻塞**：Kanban 调度器的 `check_respawn_guard` 在限流+重试成功后状态机未复位，导致任务虽完成但无法进入 review 阶段 |
| [NousResearch/hermes-agent#99867](https://github.com/NousResearch/hermes-agent/issues/99867) | Issue (CLOSED) | Windows 应用会话滚动条与右侧边栏调整控件重叠 | 5 | **桌面可用性**：滚动条可点击区域仅 3 像素，长会话操作困难 |
| [NousResearch/hermes-agent#113222](https://github.com/NousResearch/hermes-agent/issues/113222) | Issue (CLOSED) | `delegate_task` 异步批次在子任务心跳被判定为过期后，已完成的子任务仍显示 `running` | 5 | **Agent 状态一致性**：异步委托批次的完成报告与心跳过期清理存在竞态 |
| [NousResearch/hermes-agent#90004](https://github.com/NousResearch/hermes-agent/issues/90004) | Issue (CLOSED) | Skill 声明的环境变量首次调用 `execute_code` 时未传递 | 4 | **技能生态**：legacy `prerequisites.env_vars` 首次加载时的传值缺陷影响 Notion 等官方技能 |
| [NousResearch/hermes-agent#133409](https://github.com/NousResearch/hermes-agent/pull/133409) | PR (OPEN) | 插件依赖执行 14 天发布隔离，CI 检查整个插件目录可共同安装 | — | **供应链安全**：与 Catalog 插件集成的安全策略升级，防止未经充分审查的依赖进入 |

**诉求分析：** 社区最关心的是“状态机正确性”（Kanban、delegate_task、session 恢复）和“桌面/Windows 体验”。这两类问题直接影响日常工作流，讨论热度最高。

---

## 5. Bug 与稳定性

按严重程度排列：

### P1（高优先级，需重点关注）

| # | 标题 | 状态 | 是否有 Fix PR |
|---|---|---|---|
| [NousResearch/hermes-agent#133271](https://github.com/NousResearch/hermes-agent/pull/133271) | 终端批处理 420 秒超时不再被记为用户发送新消息，打断的轮次不再返回 `[response interrupted]` | PR OPEN | 自身即为修复 |
| [NousResearch/hermes-agent#112833](https://github.com/NousResearch/hermes-agent/pull/112833) | 限制“仅 reasoning-only 答案”的提升路径 | PR OPEN | 自身即为修复 |
| [NousResearch/hermes-agent#133232](https://github.com/NousResearch/hermes-agent/pull/133232) | 停止将模型复述的上下文压缩交接消息显示为普通助手回复 | PR OPEN | 自身即为修复 |

### P2（中优先级）

| # | 标题 | 状态 | 是否有 Fix PR |
|---|---|---|---|
| [NousResearch/hermes-agent#119070](https://github.com/NousResearch/hermes-agent/issues/119070) | Kanban 限流重试成功后永久卡死在 `blocker_auth` | OPEN | 暂无（需决策 `needs-decision`） |
| [NousResearch/hermes-agent#133321](https://github.com/NousResearch/hermes-agent/issues/133321) | Desktop 不显示 Project/Local 技能 | OPEN | 暂无 |
| [NousResearch/hermes-agent#133543](https://github.com/NousResearch/hermes-agent/pull/133543) | Desktop 重载回复按持久化行身份 settle，避免重复气泡 | PR OPEN | 自身即为修复 |
| [NousResearch/hermes-agent#133542](https://github.com/NousResearch/hermes-agent/pull/133542) | Gateway cleanup 误杀另一个 HERMES_HOME 的同名 profile 进程 | PR OPEN | 自身即为修复 |
| [NousResearch/hermes-agent#133540](https://github.com/NousResearch/hermes-agent/pull/133540) | Stall-guard 在 `llama.cpp`、`v0.31.0` 等带点 token 处误判 | PR OPEN | 自身即为修复 |
| [NousResearch/hermes-agent#133379](https://github.com/NousResearch/hermes-agent/pull/133379) | `/models` 价格解析失败导致按 $0.00 计费 | PR OPEN | 自身即为修复 |
| [NousResearch/hermes-agent#133535](https://github.com/NousResearch/hermes-agent/pull/133535) | `bot_relay` 从投递子进程环境中移除发送者身份固定 | PR OPEN | 自身即为修复 |
| [NousResearch/hermes-agent#123356](https://github.com/NousResearch/hermes-agent/pull/123356) | 终端 `notify` 参数布尔/anyOf 强制转换 | PR OPEN | 自身即为修复 |
| [NousResearch/hermes-agent#132001](https://github.com/NousResearch/hermes-agent/pull/132001) | 旧版侧边栏路径检测全局截断 | PR OPEN | 自身即为修复 |
| [NousResearch/hermes-agent#72637](https://github.com/NousResearch/hermes-agent/pull/72637) | 辅助上下文压缩失败时归因到实际失败的路由 | PR OPEN | 自身即为修复 |

### P3（低优先级）

| # | 标题 | 状态 | 是否有 Fix PR |
|---|---|---|---|
| [NousResearch/hermes-agent#108410](https://github.com/NousResearch/hermes-agent/issues/108410) | 会话断开后 Kanban 完成事件不能一致回放 | OPEN | 暂无 |
| [NousResearch/hermes-agent#119870](https://github.com/NousResearch/hermes-agent/issues/119870) | macOS 上 Kanban 内存保护完全失效（`sample_memory()` 返回 `{}`） | OPEN | 暂无 |
| [NousResearch/hermes-agent#133534](https://github.com/NousResearch/hermes-agent/pull/133534) | MiniMax OAuth 侧任务支持 | PR OPEN | 自身即为修复 |

---

## 6. 功能请求与路线图信号

| # | 类型 | 标题 | 纳入下一版本的可能性 |
|---|---|---|---|
| [NousResearch/hermes-agent#132795](https://github.com/NousResearch/hermes-agent/pull/132795) | PR | 新增 Nexus Memory Provider 插件目录条目（基于自托管 Qdrant 的长期记忆） | **高**：作为 MemoryProvider 插件，补全长期记忆生态 |
| [NousResearch/hermes-agent#133409](https://github.com/NousResearch/hermes-agent/pull/133409) | PR | 插件依赖 14 天隔离 + CI 全目录可安装性检查 | **高**：安全与 CI 基础设施改进，属于维护者主动推进 |
| [NousResearch/hermes-agent#133534](https://github.com/NousResearch/hermes-agent/pull/133534) | PR | MiniMax OAuth 侧任务支持 | **中**：Provider 生态扩展，取决于 review 进度 |

**判断依据：** 目录插件、供应链安全、OAuth provider 支持均符合当前 Hermes Agent “扩展插件生态 + 加固安全”的路线图方向。

---

## 7. 用户反馈摘要

### 高频痛点

1. **Windows 桌面体验仍有毛刺**
   - 滚动条重叠（[#99867](https://github.com/NousResearch/hermes-agent/issues/99867)）、安装更新时杀毒软件导致重命名失败（[#131884](https://github.com/NousResearch/hermes-agent/issues/131884) / [#133484](https://github.com/NousResearch/hermes-agent/pull/133484)）、SSH OS 探测被 PowerShell CLIXML 污染（[#99022](https://github.com/NousResearch/hermes-agent/issues/99022)）。
   - **诉求**：Windows 用户希望安装与桌面交互和 macOS/Linux 一样稳定。

2. **状态同步与会话恢复是核心焦虑**
   - Kanban 完成事件在断连后丢失（[#108410](https://github.com/NousResearch/hermes-agent/issues/108410)）、delegate_task 子任务状态不更新（[#113222](https://github.com/NousResearch/hermes-agent/issues/113222)）、重载回复出现重复气泡（[#133543](https://github.com/NousResearch/hermes-agent/pull/133543)）。
   - **诉求**：长时间运行或异步任务必须保证最终状态一致。

3. **配置/环境传递的“第一次”问题**
   - Skill 环境变量首次调用失败（[#90004](https://github.com/NousResearch/hermes-agent/issues/90004)）、`reasoning_effort` 对裸命名 provider 静默丢弃（[#119681](https://github.com/NousResearch/hermes-agent/issues/119681)）。
   - **诉求**：配置解析应更健壮，避免静默失败。

4. **桌面 UI 数据展示不完整**
   - 归档会话仅显示 200 条（[#88438](https://github.com/NousResearch/hermes-agent/issues/88438)）、项目文件夹重复（[#92588](https://github.com/NousResearch/hermes-agent/issues/92588) / [#132008](https://github.com/NousResearch/hermes-agent/pull/132008)）、Project/Local 技能不显示（[#133321](https://github.com/NousResearch/hermes-agent/issues/133321)）。
   - **诉求**：重度用户需要完整、准确的数据视图。

### 满意点

- 维护者对老旧 PR（如 [#132008](https://github.com/NousResearch/hermes-agent/pull/132008)、[#132018](https://github.com/NousResearch/hermes-agent/pull/132018)）进行了 cherry-pick 与现代化重构，体现出对社区贡献的接纳。
- 自动格式化机器人 `hermes-seaeye[bot]` 保持代码风格一致，降低人工负担。

---

## 8. 待处理积压

以下 Issue/PR 长期活跃但仍未关闭，建议维护者优先关注：

| # | 标题 | 首次创建 | 风险标签 | 提醒原因 |
|---|---|---|---|---|
| [NousResearch/hermes-agent#119070](https://github.com/NousResearch/hermes-agent/issues/119070) | Kanban 限流+重试成功后永久卡在 `blocker_auth` | 2026-09-22 | `sweeper:risk-automation` | 已 11 条评论，工作流完全阻塞，标记 `needs-decision` 多日 |
| [NousResearch/hermes-agent#108410](https://github.com/NousResearch/hermes-agent/issues/108410) | Kanban 完成事件断连后无法一致回放 | 2026-09-11 | `sweeper:risk-session-state`, `sweeper:risk-message-delivery` | 与 #119070 同属 Kanban 调度可靠性，应合并分析 |
| [NousResearch/hermes-agent#119870](https://github.com/NousResearch/hermes-agent/issues/119870) | macOS 上 Kanban 内存保护完全失效 | 2026-09-23 | `area/memory` | 平台级能力缺失，影响 macOS 并发控制 |
| [NousResearch/hermes-agent#133321](https://github.com/NousResearch/hermes-agent/issues/133321) | Desktop 不显示 Project/Local 技能 | 2026-10-05 | `comp/desktop` | 新建即高关注，影响技能发现 |
| [NousResearch/hermes-agent#72637](https://github.com/NousResearch/hermes-agent/pull/72637) | 辅助压缩失败归因到实际路由 | 2026-07-27 | `sweeper:blast-broad` | 已两个月未合并，影响 auto provider 故障排查 |
| [NousResearch/hermes-agent#112833](https://github.com/NousResearch/hermes-agent/pull/112833) | 限制 reasoning-only 答案提升 | 2026-09-16 | `sweeper:risk-session-state` | P1 PR，关乎本地模型解析兼容性 |

---

**结语：** Hermes Agent 今日活跃度健康，关闭问题数量（34 Issues + 30 PRs）显著高于新增/活跃数量，说明社区正在积极收尾。但 Kanban 调度、macOS 内存保护、Desktop 技能展示等几个结构性问题仍待决策，建议维护者将其列为本周优先级。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



好的，这是根据您提供的 GitHub 数据生成的 PicoClaw 项目动态日报（2026-10-06）。

---

### **PicoClaw 项目动态日报 - 2026-10-06**

#### **1. 今日速览**
PicoClaw 项目在过去24小时内活跃度处于较低水平，社区互动趋于停滞。所有更新的 Issues 和 Pull Requests 均已被标记为 `stale`，表明维护者或社区在近期缺乏主动的维护和开发活动。项目当前面临的主要挑战是社区信心和贡献者流失，这从 fork 项目的出现和安全漏洞报告的缺失中可见一斑。

#### **2. 版本发布**
无新版本发布。

#### **3. 项目进展**
今日无新的 PR 合并。仅有一条 PR 被关闭，但其内容具有长期价值：
- **PR #3354 (已关闭)**: 为 IRC 频道增加了对 IRCv3 多行消息协议的支持。尽管该 PR 因长期未更新而被关闭，但它代表了一项重要的功能增强，为未来可能的社区维护或 fork 项目提供了技术基础。

#### **4. 社区热点**
今日讨论最活跃的议题集中在项目维护状态和功能扩展上：
- **Issue #3366 (OpenAI 兼容提供商支持)**: 这是一个长期存在的功能请求，旨在增加对自定义 OpenAI 兼容提供商（如 9Router）的支持。它反映了用户对更高灵活性和可扩展性的强烈需求，是社区最关心的核心议题之一。
  - 链接: `sipeed/picoclaw#3366`
- **Issue #3405 (私有漏洞报告)**: 用户 x1F916 提出的安全问题，指出仓库未启用 GitHub 私有漏洞报告功能且缺少 `SECURITY.md` 文件。此议题直接关系到项目的安全性和社区信任，是当前最紧迫的社区关切之一。
  - 链接: `sipeed/picoclaw#3405`

#### **5. Bug 与稳定性**
今日无新的 Bug 报告。但历史积压的稳定性问题值得关注：
- **Issue #3404 (可靠性修复)**: 由 x1F916 提出，详细列举了在当前 `main` 分支和 v0.3.1 版本上可复现的多个核心模块（agent loop、channels manager、config、updater）的 bug。这表明项目存在已知的稳定性问题，且由于 issue 被标记为 stale，修复前景不明。
  - 链接: `sipeed/picoclaw#3404`
- **安全漏洞**: Issue #3405 本身就是一个潜在的安全流程漏洞，表明项目缺乏正式的漏洞接收渠道。

#### **6. 功能请求与路线图信号**
社区提出的功能请求清晰地勾勒出潜在的发展方向：
- **核心功能扩展**:
  - **OpenAI 兼容性增强**: 两个独立的请求（Issue #3366 和 #3397）都指向 OpenAI 兼容生态。一个是增加通用“OpenAI Compatible”提供商，另一个是将特定的提供商（Tsubasa）正式加入目录。这暗示“最大化 OpenAI 兼容性”可能是社区期望的下一个主要迭代方向。
  - **工具链增强**: PR #3370 尝试添加 Keenable 作为网络搜索提供商，表明社区希望丰富项目的工具集成能力。
- **潜在纳入判断**: 上述功能请求（尤其是 OpenAI 兼容性相关）如果项目恢复活跃，很可能成为下一个版本的核心内容。

#### **7. 用户反馈摘要**
从 Issues 中提炼出的用户反馈揭示了以下痛点与诉求：
- **痛点**: 项目当前的维护状态是最大的用户痛点。Issue #3398 中明确指出“主仓库似乎已停止维护”，直接导致了社区信心的动摇和 fork 项目的产生。
- **诉求**:
  - **灵活性与扩展性**: 用户希望项目能像其他现代 AI 智能体一样，轻松接入各种兼容 API。
  - **安全性与专业性**: 用户期望项目能提供正式的安全报告渠道，以体现项目的专业性和对安全的重视。
  - **稳定性**: 用户通过提交详细的可复现 bug（Issue #3404）表达了对项目当前稳定性的不满和对修复的迫切期望。

#### **8. 待处理积压**
项目存在多项长期未获响应的重要 Issue 和 PR，已进入“stale”状态，需高度关注：
- **关键 Issue**:
  - **#3366** (OpenAI 兼容支持): 创建于 9月4日，已超过一个月。
  - **#3405** (安全漏洞报告): 创建于 9月28日，安全问题悬而未决。
  - **#3404** (可靠性修复): 包含大量已知 bug，但无任何修复迹象。
- **关键 PR**:
  - **#3370** (Keenable 搜索): 创建于 9月7日，功能明确但无人评审。
  - **#3347** (Web UI 性能优化): 创建于 8月27日，针对前端体验的改进同样被搁置。
- **项目健康度警示**: 所有上述条目的 stale 状态，加上 Issue #3398 所述的 fork 情况，共同指向一个严重的项目健康度问题：**核心维护者可能已缺席，社区贡献者成为主要力量但缺乏协调，导致项目进入事实上的停滞状态。** 这是当前面临的最大风险。

---
**总结**: PicoClaw 项目正处于一个关键的十字路口。社区需求明确，技术积累（如已关闭的 PR）也存在，但缺乏核心驱动力。其未来走向取决于是否能有新的维护者接手，或社区能否在 fork 上形成有效的协作。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



好的，这是根据您提供的 NanoClaw GitHub 数据生成的 2026-10-06 项目动态日报。

---

### **NanoClaw 项目动态日报 - 2026-10-06**

#### **1. 今日速览**

NanoClaw 项目在 2026-10-06 呈现出极高的活跃度与开发节奏。核心里程碑是发布了 **v2026.10.0-rc.2**，标志着项目进入首个日历版本号时代，并引入了 `/update-nanoclaw` 的默认发布更新机制。开发团队今日重点集中在 **`channels` 分支的整合与修复**上，通过多个 PR 完成了主分支同步及关键 Bug 的修复。同时，社区活跃地提交了多个关于 Agent 运行时、定时任务和技能增强的功能与修复 PR，显示出项目在核心交互逻辑和生态扩展上的持续深化。整体健康度优秀，迭代迅速。

#### **2. 版本发布**

**发布版本：v2026.10.0-rc.2**

-   **更新内容**：此版本为 2026.10.0 版本的第二个候选发布（RC）。它是一个重要的转折点，**首次采用日历版本号**（CalVer），取代了之前的版本格式。
-   **破坏性变更与迁移注意事项**：
    1.  **默认更新行为变更**：这是最关键的变更。`/update-nanoclaw` 命令现在默认安装来自已发布版本（如 `v2026.10.0-rc.2`）的更新，而非 `main` 分支的最新提交。这提升了稳定性和可预测性。
    2.  **通道差异**：`beta` 通道的用户会自动收到此 RC 版本，而 `stable` 通道的用户仍需等待最终版。
-   **关联 PR**：[chore(release): v2026.10.0-rc.2 (#4038)](https://github.com/nanocoai/nanoclaw/pull/4038)
-   **建议**：维护者应评估将 `stable` 通道用户迁移到新更新机制的计划，并监控 `beta` 通道的反馈。

#### **3. 项目进展**

今日有 **12 个 PR 被合并或关闭**，其中多个对项目架构和稳定性至关重要：

-   **核心分支整合**：
    -   [chore(channels): merge main into channels (#4000)](https://github.com/nanocoai/nanoclaw/pull/4000) 和 [fix(channels): load every adapter and make the branch green (#3995)](https://github.com/nanocoai/nanoclaw/pull/3995)：成功将 `main` 分支的 463 个提交合并到 `channels` 分支并修复了相关问题，确保了新分支的独立性和可测试性。这是项目并行开发的关键一步。
-   **关键 Bug 修复**：
    -   [fix(update): wait for the launchd host to exit after bootout (#4037)](https://github.com/nanocoai/nanoclaw/pull/4037)：修复了 macOS 上 `/update-nanoclaw` 命令的竞争条件，避免了 I/O 错误，直接解决了 Issue #4021。
    -   [fix(agent-runner): never lose or repeat a reply around send_message (#3918)](https://github.com/nanocoai/nanoclaw/pull/3918)：针对不同提供商（流式 vs 非流式）的回复丢失或重复问题提供了统一解决方案，提升了核心消息传递的可靠性。
-   **功能与体验增强**：
    -   [feat(gateway): skip the approval card for reads that carry no credential (#4015)](https://github.com/nanocoai/nanoclaw/pull/4015)：优化了操作员体验，减少了不必要的确认卡。
    -   [feat(skills): add /add-lean-tasks for minimal-context scheduled task runs (#3932)](https://github.com/nanocoai/nanoclaw/pull/3932)：新增技能，允许轻量级定时任务运行，扩展了任务调度能力。

**整体进展评估**：项目在架构演进（`channels` 分支）、核心稳定性（消息、更新）和功能扩展（技能）三个层面均取得了显著进展。

#### **4. 社区热点**

今日数据中 PR 的评论数均为 `undefined`，表明社区互动可能主要通过其他渠道（如 Discord、论坛）进行，或评论功能未在此数据集中体现。但从 **PR 的合并状态和标签** 可以分析出社区关注的焦点：

-   **高优先级关注点**：`area/agent-runner` 和 `area/scheduled-tasks` 是标签最集中的区域。社区对 **Agent 运行时的健壮性**（如 Issue #3223， #3301）和 **任务调度的可靠性**（如 Issue #4033）有持续且深入的关切。
-   **生态扩展兴趣**：新提交的 PR #4040 (`feat: add FXMacroData MCP tool skill`) 和 PR #3932 (`feat(skills): add /add-lean-tasks`) 表明社区积极贡献，致力于丰富技能库和扩展 Agent 的能力边界。
-   **诉求分析**：社区的核心诉求是 **系统的稳定、可预测和高效**。无论是修复消息丢失、任务执行错误，还是优化更新流程，都指向一个目标：打造一个企业级可靠的 AI Agent 平台。

#### **5. Bug 与稳定性**

今日报告的 Bug 严重程度不一，部分已有修复 PR 或关联修复。

| 严重程度 | Issue/PR 描述 | 关联修复 | 状态 |
| :--- | :--- | :--- | :--- |
| **高** | **[#3643]** Hardcoded 30-min ABSOLUTE_CEILING_MS cold-kills long local-model turns; no config seam | 无已知修复 | **待处理** |
| **高** | **[#3223]** Scheduled-task turns that error produce an unroutable error message that is silently dropped | 无已知修复 | **待处理** |
| **高** | **[#3301]** Tasks firing in chat sessions run one-door: logs dropped, replies eaten, series unlisted | 无已知修复 | **待处理** |
| **中** | **[#4021]** update (macOS): stopService returns before the host exits, so the snapshot races shutdown and the re-bootstrap fails with I/O error 5 | **已修复** ([#4037](https://github.com/nanocoai/nanoclaw/pull/4037)) | **已关闭** |
| **中** | **[#4033]** poll-loop: a follow-up folded into the running turn leaves the turn queue one behind, so later replies are stamped with an earlier message's in_reply_to | 无已知修复 | **待处理** |

**分析**：高严重度的 Bug 集中在 **任务调度系统** 和 **本地模型长时间运行** 两个领域，是当前稳定性的主要挑战。其中 Issue #3643 尤其值得关注，因为它涉及一个生硬的超时限制，可能阻碍特定用例。

#### **6. 功能请求与路线图信号**

-   **明确的功能请求**：Issue #3223 和 #3301 虽然归类为 Bug，但其本质也包含了对更健壮的任务错误处理和任务/会话协同机制的功能性需求。
-   **路线图信号**：
    1.  **轻量化与灵活性**：PR #3932 (`/add-lean-tasks`) 和 Issue #3643（反对固定超时）共同指向一个趋势：为不同复杂度的任务提供可配置的运行时参数（如模型、上下文、超时）。
    2.  **Provider 抽象层**：PR #3925 (`refactor(agent-runner): add a provider-wrapper seam`) 表明项目正致力于构建更灵活的提供商抽象层，为未来接入更多后端模型奠定基础。
    3.  **技能生态扩展**：持续新增的技能 PR（如 #4040）是路线图上的活跃部分，表明项目重视通过技能来垂直集成外部能力。

#### **7. 用户反馈摘要**

从 Issue 描述中提炼出的用户痛点非常具体：

-   **对“静默失败”的深恶痛绝**：Issue #3223 的用户明确指出“操作员永远不知道任务失败了”，这反映了用户对系统 **可观测性** 和 **失败通知** 的强烈需求。他们期望即使任务失败，也能有明确的反馈路径。
-   **对复杂工作流协同的困惑**：Issue #3301 描述了任务在聊天会话中触发时导致的混乱（日志丢失、回复被覆盖），这表明用户正在尝试混合使用聊天和任务功能，但当前的实现未能提供清晰、可预测的行为。
-   **对本地部署的特定担忧**：Issue #3643 的用户使用了本地模型，遇到了超时问题，这突显了 **本地化部署场景** 的独特需求和挑战，需要区别于云端 API 的配置策略。

#### **8. 待处理积压**

以下 Issue 长期未响应且对稳定性有重要影响，需维护者关注：

-   **[#3223] (创建: 2026-08-10)**：定时任务错误消息被静默丢弃。已开放近两个月，直接影响用户对任务执行结果的感知。
-   **[#3301] (创建: 2026-08-17)**：任务在会话中触发导致行为异常。已开放近两个月，影响任务与会话的集成交互。
-   **[#3643] (创建: 2026-08-28)**：本地模型长时间运行被硬编码超时杀死。已开放一个多月，且优先级为高，可能阻塞特定用户群体的使用。

**建议**：维护者可考虑优先处理 Issue #3643，或至少为其创建一个可配置的超时参数，以缓解对本地模型用户的阻塞。对于 #3223 和 #3301，需要从架构层面重新审视任务消息的路由和执行模型。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报（2026-10-06）

## 1. 今日速览
过去24小时，NullClaw 项目活跃度**较高**：共更新 15 条 Issue（9 条新开/活跃，6 条关闭）和 30 条 PR（14 条待合并，16 条已合并/关闭）。核心维护者 `vernonstinebaker` 贡献了大量跟进性 Issue 与 PR，重点围绕 **cron 调度器可靠性、Docker 镜像修复、CLI 交互改进及文档更新**。社区参与度良好，问题响应与修复速度较快，但今日无新版本发布。整体项目健康度**良好**，在稳定性、安全性和用户体验方面持续进步。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日合并/关闭的重要 PR 显著推进了以下方面：

- **Docker 镜像修复**：[#1023](https://github.com/nullclaw/nullclaw/pull/1023) 修复了非 root 镜像中 HOME 目录不可写的问题，解决了 [#1017](https://github.com/nullclaw/nullclaw/issues/1017) 中网关因 `AccessDenied` 退出的严重缺陷。
- **CLI 交互改进**：[#970](https://github.com/nullclaw/nullclaw/pull/970) 为 `nullclaw agent` REPL 添加了原生行编辑器，支持箭头键、历史导航等，修复了 [#865](https://github.com/nullclaw/nullclaw/issues/865) 中控制字符乱码问题。
- **内存泄漏修复**：[#1011](https://github.com/nullclaw/nullclaw/pull/1011) 修复了 `parseXmlToolCalls` 在追加失败时的内存泄漏。
- **调度器安全**：[#959](https://github.com/nullclaw/nullclaw/pull/959) 为 cron 调度器持久化了作用域凭证，提升了认证安全性。
- **文档清理与补充**：[#777](https://github.com/nullclaw/nullclaw/pull/777)、[#776](https://github.com/nullclaw/nullclaw/pull/776)、[#775](https://github.com/nullclaw/nullclaw/pull/775)、[#774](https://github.com/nullclaw/nullclaw/pull/774) 归档过时文档、补充 MCP/子代理/技能/语音/硬件文档、去重 CLAUDE.md 并更新统计数据。
- **安全修复**：[#983](https://github.com/nullclaw/nullclaw/pull/983) 为代理请求使用固定 curl 路径，避免凭证泄露。

这些合并/关闭的 PR 在**稳定性、安全性、文档完善和用户体验**上均有明显推进，项目整体向前迈进了坚实一步。

## 4. 社区热点
今日讨论最活跃的 Issues/PRs：

- **[#941](https://github.com/nullclaw/nullclaw/issues/941) [CLOSED]**：Agent 类型 cron 作业不生成子进程，导致 Telegram 交付失败（7 条评论）。虽已关闭，但讨论最多，反映用户对 cron 作业可靠性的高度关注。
- **[#865](https://github.com/nullclaw/nullclaw/issues/865) [CLOSED]**：CLI 显示控制字符而非正常按键（4 条评论）。用户对原生终端体验诉求强烈。
- **[#817](https://github.com/nullclaw/nullclaw/issues/817) [CLOSED]**：询问是否支持微信二维码登录（3 条评论）。体现用户对多平台集成的期待。
- **[#1033](https://github.com/nullclaw/nullclaw/issues/1033) [OPEN]**：Cron agent 作业无默认超时，可能无限阻塞调度器（1 条评论）。新开即引发关注，是当前最严重的稳定性隐患。
- **PR 方面**：[#1042](https://github.com/nullclaw/nullclaw/pull/1042)（CI 门禁 Docker 变更）、[#1041](https://github.com/nullclaw/nullclaw/pull/1041)（CLI 终端宽度刷新）等跟进 PR 讨论活跃，显示维护者对上述问题的系统性修复。

**背后诉求**：用户对 cron 调度器的**可靠性**和 CLI 的**原生交互体验**要求极高，同时希望扩展平台集成（如微信），并期待更完善的文档和开箱即用体验。

## 5. Bug 与稳定性
按严重程度排列今日报告的 Bug/回归问题：

| 严重程度 | Issue | 状态 | 说明 | Fix PR |
|---------|-------|------|------|--------|
| 🔴 严重 | [#1033](https://github.com/nullclaw/nullclaw/issues/1033) | OPEN | Cron agent 作业无默认超时，可无限阻塞调度器线程 | 无直接 fix PR，但有文档 PR [#1032](https://github.com/nullclaw/nullclaw/pull/1032) 和测试 PR [#1038](https://github.com/nullclaw/nullclaw/pull/1038) 跟进 |
| 🔴 严重 | [#1017](https://github.com/nullclaw/nullclaw/issues/1017) | CLOSED | Docker 镜像网关因 `/nullclaw-data` 权限问题退出 `AccessDenied` | ✅ [#1023](https://github.com/nullclaw/nullclaw/pull/1023) 已合并 |
| 🟠 高 | [#941](https://github.com/nullclaw/nullclaw/issues/941) | CLOSED | Agent 类型 cron 作业不生成子进程，Telegram 交付失败 | 已关闭，但根本原因可能与 #1033 相关 |
| 🟡 中 | [#865](https://github.com/nullclaw/nullclaw/issues/865) | CLOSED | CLI 显示控制字符，箭头键失效 | ✅ [#970](https://github.com/nullclaw/nullclaw/pull/970) 已合并 |
| 🟡 中 | [#839](https://github.com/nullclaw/nullclaw/issues/839) | CLOSED | bit 无法访问调度器 | 已关闭 |
| 🔵 安全 | [#1026](https://github.com/nullclaw/nullclaw/issues/1026) | OPEN | 打开归档密钥条目时应不跟随符号链接并 fsync 父目录 | 待修复，有后续 PR 计划 |
| 🔵 稳定 | [#1024](https://github.com/nullclaw/nullclaw/issues/1024) | OPEN | WebSocket 通道停止时可能阻塞在 DNS/TCP 建立 | 待修复 |

## 6. 功能请求与路线图信号
用户提出的新功能需求及可能纳入下一版本的判断：

- **原生 Windows 控制台编辑**：[#1037](https://github.com/nullclaw/nullclaw/issues/1037) — 当前为 raw-mode 存根，未来可能完善跨平台支持。
- **终端宽度动态刷新与历史分隔符**：[#1028](https://github.com/nullclaw/nullclaw/issues/1028) — 已有 PR [#1041](https://github.com/nullclaw/nullclaw/pull/1041) 待合并。
- **CI 门禁 Docker 镜像变更**：[#1036](https://github.com/nullclaw/nullclaw/issues/1036) — 已有 PR [#1042](https://github.com/nullclaw/nullclaw/pull/1042) 待合并。
- **文档：修复旧卷 HOME 所有权**：[#1034](https://github.com/nullclaw/nullclaw/issues/1034) — 已有 PR [#1035](https://github.com/nullclaw/nullclaw/pull/1035) 待合并。
- **测试：cron/session 测试 hermetic 化**：[#1029](https://github.com/nullclaw/nullclaw/issues/1029) — 已有 PR [#1038](https://github.com/nullclaw/nullclaw/pull/1038) 待合并。
- **重构：用能力表替换精确 Claude 模型检查**：[#1027](https://github.com/nullclaw/nullclaw/issues/1027) — 已有 PR [#1031](https://github.com/nullclaw/nullclaw/pull/1031) 待合并。
- **安全：归档密钥符号链接防护**：[#1026](https://github.com/nullclaw/nullclaw/issues/1026) — 待后续 PR。
- **WebSocket 连接超时限制**：[#1024](https://github.com/nullclaw/nullclaw/issues/1024) — 待后续 PR。

**路线图信号**：项目正系统性地加强**安全性、测试可靠性、跨平台支持与文档完善**，上述需求大多已有对应 PR，预计将逐步纳入下一版本。

## 7. 用户反馈摘要
从 Issues 评论中提炼的真实用户反馈：

- **痛点**：
  - Cron 作业不可靠（[#941](https://github.com/nullclaw/nullclaw/issues/941)、[#1033](https://github.com/nullclaw/nullclaw/issues/1033)）：作业不执行、无超时导致调度器阻塞。
  - CLI 按键问题（[#865](https://github.com/nullclaw/nullclaw/issues/865)）：控制字符乱码，影响交互体验。
  - Docker 部署权限（[#1017](https://github.com/nullclaw/nullclaw/issues/1017)）：镜像开箱即用失败。
  - Anthropic API 配置困难（[#767](https://github.com/nullclaw/nullclaw/issues/767)）：原生 API 密钥配置不生效。
  - 调度器访问问题（[#839](https://github.com/nullclaw/nullclaw/issues/839)）：bit 无法访问调度器。
- **使用场景**：Telegram 交付、微信二维码登录、Anthropic 原生 API、Docker 部署、Windows 控制台编辑。
- **满意**：维护者响应迅速，大量 follow-up Issue/PR 显示问题被系统性追踪与解决。
- **不满意**：文档覆盖不足，配置复杂，跨平台支持待完善。

## 8. 待处理积压
长期未响应或开放时间较长的重要 Issue/PR，提醒维护者关注：

- **[#982](https://github.com/nullclaw/nullclaw/pull/982) [OPEN]**：`fix(telegram): use curl transport for explicit proxies` — 创建于 2026-08-03，已开放约 2 个月，等待合并。
- **[#1008](https://github.com/nullclaw/nullclaw/pull/1008) [OPEN]**：`docs: repair the index and add subsystem guides` — 创建于 2026-09-24，开放约 2 周，涉及文档索引修复和子系统指南。
- **[#1004](https://github.com/nullclaw/nullclaw/pull/1004) [OPEN]**：`fix(providers): log scrubbed provider error bodies on non-2xx` — 创建于 2026-09-24，有助于排查 provider 错误。
- **[#1033](https://github.com/nullclaw/nullclaw/issues/1033) [OPEN]**：Cron agent 超时问题虽为新开，但严重性高，建议优先修复。

建议维护者优先处理 **#1033** 的根本修复，并关注 **#982**、**#1008** 等长期开放 PR 的合并进度，以保持项目健康度。

---
*数据来源：NullClaw GitHub 仓库（github.com/nullclaw/nullclaw），截至 2026-10-06。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 · 2026-10-06

> 数据来源：github.com/nearai/ironclaw · 统计窗口：2026-10-05 → 2026-10-06

---

## 1. 今日速览

- 今日整体活跃度偏低：新增 Issues 2 个、PR 1 个，无版本发布、无 Issue/PR 关闭。
- 核心动态集中在 **WebChat 前端后台标签页状态 stale** 这一用户体验问题上，作者 heraisys-sas 同时提交了 Issue 和修复 PR，形成完整的"报告→修复"闭环。
- 另一条 Issue #8126 来自 pranavraja99，是每日自动生成的失败分类分析，属于质量监控流程的常规产出，尚未引发讨论。
- 项目当前处于**低波峰等待期**，维护者响应节奏值得关注。

---

## 2. 版本发布

**无新版本发布。** 最新仍为 `ironclaw serve 1.4.1`（WebChat v2 SPA）。

---

## 3. 项目进展

| PR | 状态 | 说明 |
|---|---|---|
| [#8125](https://github.com/nearai/ironclaw/pull/8125) | 🔵 OPEN | `refetchOnWindowFocus: false → true`，解决后台标签页返回后 run/action 状态陈旧问题，是 Issue #8124 的直接修复。 |

该项目今日**唯一向前推进的 PR 即为 #8125**，尚未合并，若维护者审核通过可立即改善后台标签页的用户体验。

---

## 4. 社区热点

- **[#8124](https://github.com/nearai/ironclaw/issues/8124)** & **[#8125](https://github.com/nearai/ironclaw/pull/8125)**：当前唯一形成讨论链的话题。诉求明确——**非 HTTPS 局域网部署下，浏览器后台标签页的 Web Push 通知与工具状态不同步**，影响自托管单租户用户的日常使用。
- 暂无高 👍 或大量评论的"爆点"议题。

---

## 5. Bug 与稳定性

| # | 严重度 | 描述 | 修复 PR |
|---|---|---|---|
| [#8124](https://github.com/nearai/ironclaw/issues/8124) | ⚠️ 中 | 后台标签页中 `tool-activity` / `activity` 状态不刷新，且任务完成无通知；非 HTTPS 部署下 Web Push 静默丢失 | [#8125](https://github.com/nearai/ironclaw/pull/8125)（待合并） |
| [#8126](https://github.com/nearai/ironclaw/issues/8126) | 🔍 观察 | OfficeQA 套件 37 项未通过，DeepSeek-V4-Flash 数值型模型质量 error | 无 |

> #8124 已有对应 fix PR；#8126 属于模型质量层面，需结合 benchmark 团队判断。

---

## 6. 功能请求与路线图信号

- 当前数据**无显式功能请求 Issue**。
- 但 #8124 中提及的"非 HTTPS 局域网部署"场景暗示：**自托管用户需要更健壮的离线/内网通知机制**，可视为隐性的体验增强需求，需关注后续是否有人提出 `service-worker` 轮询或 SSE 回退方案。

---

## 7. 用户反馈摘要

- **痛点**：自托管用户在非 TLS 环境下使用 WebChat 时，切换到后台再返回看到 stale 的 tool-activity 状态，且任务完成没有视觉/推送通知，影响工作流连续性。
- **场景**：单租户局域网部署、Chrome/Firefox 浏览器、长期运行的任务流。
- **满意/不满意**：不满意点集中在"后台不可见时状态丢失"；未采集到正面反馈。

---

## 8. 待处理积压

| 类型 | ID | 风险 | 建议 |
|---|---|---|---|
| PR | [#8125](https://github.com/nearai/ironclaw/pull/8125) | 等待合并超过 24h，可能阻塞用户升级体验 | 维护者尽快审核合并 |
| Issue | [#8124](https://github.com/nearai/ironclaw/issues/8124) | 已由 #8125 覆盖，需确认闭环 | 合并后及时 close |
| Issue | [#8126](https://github.com/nearai/ironclaw/issues/8126) | OfficeQA 37 项失败，需确认是否回归 | benchmark 团队复核基线 |

---

**健康度小结**：今日项目处于低活动期，但 #8124→#8125 形成了高质量的"问题→修复"闭环，是一个积极信号；主要风险在于 PR 审核延迟与 OfficeQA 大规模失败的归因尚未跟进。维护者建议今日至少完成 #8125 的合并评审。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



好的，这是根据您提供的 LobsterAI GitHub 数据生成的 2026-10-06 项目动态日报。

---

### **LobsterAI 项目动态日报 (2026-10-06)**

#### **1. 今日速览**
LobsterAI 项目在今日展现出较高的活跃度，核心开发团队针对近期发现的一系列安全漏洞进行了快速响应。项目主要动态集中在安全性问题的披露与修复上，共有 5 个与安全相关的 Issue 被提出，并已有 1 个对应的修复 PR 提交。同时，社区在功能兼容性和参数配置方面也有持续反馈。整体而言，项目正处于一个积极的安全加固与维护周期。

#### **2. 版本发布**
*   **无新版本发布。**

#### **3. 项目进展**
今日有 3 个 PR 被合并或关闭，标志着项目在安全性和技能管理方面取得了重要进展：
*   **安全漏洞修复落地**：PR `#2785` 已合并，修复了 `#2784` 中指出的 NIM P2P 直接消息策略失效的安全漏洞，确保了策略在 `disabled` 等状态下能够正确拒绝消息，而非默认放行。
*   **技能解析与安装优化**：两个关于技能（Skills）的修复 PR 被关闭：
    *   PR `#2800` 修复了 SKILL.md frontmatter 解析问题，使其行为与 OpenClaw 运行时保持一致，解决了技能列表丢失的问题。
    *   PR `#2799` 修复了技能安装时使用临时目录名作为唯一标识的问题，避免了重复安装和更新检查失败，提升了技能管理的稳定性。

#### **4. 社区热点**
今日社区讨论的焦点主要集中在安全性和功能兼容性上：
*   **安全问题成焦点**：由 `carfeii` 提出的 5 个安全相关 Issue（`#2793` 至 `#2797`）虽然评论数不多，但均获得了高度关注，因其涉及未认证访问、敏感信息泄露和任意目录删除等高风险问题。这直接促使了修复 PR `#2794` 和 `#2798` 的快速提交。
*   **Gemini 中转模型兼容性问题**：Issue `#831` “最新版不支持custom自定义的gemini中转模型” 获得了 4 条评论，是今日评论数最多的 Issue。这表明用户对特定 AI 模型的集成有明确需求，是功能扩展的一个信号。

#### **5. Bug 与稳定性**
今日报告的 Bug 按严重程度排列如下（高严重度问题均已或正在修复）：
1.  **严重安全漏洞**：
    *   **任意目录删除** (`#2793`)：技能安装包中的恶意元数据可导致用户目录被任意删除。**已有修复 PR `#2794`**。
    *   **未认证代理访问** (`#2797`)：OpenClaw token 代理接受未认证请求并转发用户令牌。**已有修复 PR `#2798`**。
    *   **敏感信息泄露** (`#2795`)：OAuth 令牌等敏感信息被写入诊断日志。**已有修复 PR `#2798`**。
    *   **路径遍历** (`#2796`)：HTML 预览服务器可访问许可目录外的文件。**已有修复 PR `#2798`**。
    *   **消息策略失效** (`#2784`)：P2P 消息策略在某些配置下失效，错误放行消息。**已通过 PR `#2785` 修复**。
2.  **功能缺陷**：
    *   **Tavily MCP 不可用** (`#989`)：配置 API Key 后仍返回 401 未授权错误，问题未解决。
    *   **Gemini 模型不兼容** (`#831`)：新版本无法使用自定义的 Gemini 中转模型。
    *   **平台功能差异** (`#834`)：Windows 和 macOS 应用内增值服务页面不一致，导致价格和登录状态异常。
    *   **SQLite 参数欠优化** (`#829`)：数据库连接参数未针对桌面应用进行性能调优。

#### **6. 功能请求与路线图信号**
*   **模型集成需求**：Issue `#831` 反映了用户对更灵活的 AI 模型后端（特别是 Gemini）的支持需求，这可能是下一版本需要考虑的重要功能扩展方向。
*   **性能优化诉求**：Issue `#829` 提示用户对桌面应用性能有更高期待，数据库等底层组件的参数优化应纳入维护路线图。
*   **安全加固常态化**：近期密集的安全问题及其快速修复表明，项目已将安全检查与响应作为开发流程的常态化部分，未来版本会更注重安全审计。

#### **7. 用户反馈摘要**
*   **痛点**：用户在使用特定功能（如 Gemini 模型、增值服务）时遇到阻碍，期望得到与官方模型或跨平台一致的体验。
*   **场景**：开发者用户（`carfeii`）通过深入分析主动提交了多个高质量的安全问题，体现了社区深度参与。
*   **满意度**：项目对安全问题的响应速度（数小时内即提交修复 PR）获得了潜在的正向反馈，显示了维护团队的责任感。

#### **8. 待处理积压**
以下 Issue 属于长期存在或尚未有明确解决方案的问题，需维护者关注：
*   **#831**：`[stale]` 标签表明该 Issue 已有一段时间未被积极处理，但用户需求依然存在。
*   **#989**：`[stale]` 标签，Tavily MCP 的 401 认证问题仍未解决。
*   **#829**：`[stale]` 标签，SQLite 参数优化建议长期未被采纳或回复。
*   **#834**：`[stale]` 标签，跨平台功能不一致问题影响用户体验，需统一处理。

---
**报告生成说明**：本报告基于提供的 GitHub 数据客观生成，数据截至 2026-10-06 所述周期。所有链接、作者、状态等信息均直接来源于数据。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis 项目日报 | 2026-10-06**

---

### 1. 今日速览
今日项目活跃度中等，新增 2 个 Issues 和 2 个 Pull Requests，均处于待处理状态，无版本发布。整体以修复性工作为主导，围绕技能定义解析和频道分类逻辑展开。社区反馈显示用户对技能 YAML 格式兼容性和群组消息凭证管理存在明确需求，项目维护者正在积极响应问题。

### 2. 版本发布
*今日无新版本发布。*

### 3. 项目进展
今日有 2 个 PR 待合并，推动了核心功能的稳定性修复：
- **PR #1293**（[链接](https://github.com/moltis-org/moltis/pull/1293)）：修复 `create_skill`/`update_skill` 写入未引用的 YAML frontmatter 问题，确保技能发现机制能正确解析含特殊字符的描述和工具列表。
- **PR #1295**（[链接](https://github.com/moltis-org/moltis/pull/1295)）：修复 Discord 直接消息（DM）被错误分类为共享会话的问题，使 1:1 对话能独立运行凭证作用域。

### 4. 社区热点
今日讨论集中在技能定义格式和群组凭证隔离两个维度：
- **Issue #1292**（[链接](https://github.com/moltis-org/moltis/issues/1292)）：`create_skill` 返回成功但生成的 SKILL.md 无法被发现，反映 YAML 序列化缺乏引号包裹导致解析失败。
- **Issue #1294**（[链接](https://github.com/moltis-org/moltis/issues/1294)）：请求群组聊天中按发送者分离 MCP 凭证，解决静态凭证导致的消息归属模糊问题。

### 5. Bug 与稳定性
按严重程度排列：
1. **[高]** 技能 YAML 解析失败（#1292）：`create_skill` 生成的 frontmatter 含未转义特殊字符（`: `、`#`、`&`、`!` 等），导致技能发现拒绝或误读。**已有修复 PR #1293**，待合并。
2. **[中]** Discord 私信凭证作用域错误（#1295 关联）：DM 被当作共享聊天处理，导致 1:1 会话继承群组凭证逻辑。**已有修复 PR #1295**，待合并。

### 6. 功能请求与路线图信号
- **Issue #1294** 提出的 per-sender MCP credentials 机制，若 PR #1295 的频道分类逻辑合并后，可作为凭证隔离的基础设施，可能进入下一版本路线图。建议关注维护者是否将凭证上下文与频道类型绑定。

### 7. 用户反馈摘要
从 Issues 摘要提炼：
- **痛点**：技能定义过程中，用户输入的合法 YAML 内容（如 `*`、`True`、`[`、`{`）被直接写入导致文件损坏，体验割裂。
- **场景**：Discord/Slack 群组中，机器人需区分不同操作员的 MCP 工具调用权限，当前静态凭证无法满足。
- **满意度**：PR #1293/#1295 表明维护者对格式安全和会话隔离有较高修复意愿。

### 8. 待处理积压
所有当日更新均处于 OPEN 状态，建议维护者优先审查：
- **PR #1293**（[链接](https://github.com/moltis-org/moltis/pull/1293)）：修复技能 YAML 引用，防止解析崩溃。
- **PR #1295**（[链接](https://github.com/moltis-org/moltis/pull/1295)）：修正 Discord DM 分类逻辑，避免凭证泄露。
- **Issue #1294**（[链接](https://github.com/moltis-org/moltis/issues/1294)）：长期待实现的功能，需评估实现复杂度。

---
*数据来源：github.com/moltis-org/moltis | 生成时间：2026-10-06*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-10-06）

> 说明：以下链接沿用数据中的 `agentscope-ai/QwenPaw` 仓库路径；项目现名为 CoPaw。

## 1. 今日速览

- 过去 24 小时 Issues 更新 **43 条**（新开/活跃 41，关闭 2），PR 更新 **25 条**（待合并 23，合并/关闭 2），**无新版本发布**。
- 社区活跃度维持高位，但议题以 **Bug 与稳定性问题**为主，集中在会话上下文污染、Provider 兼容性、安全沙箱与 Console 体验。
- 今日仅 **1 个可见 PR 关闭**（#8113 钉钉插件试点），**23 个 PR 待合并**，评审队列偏长，可能成为交付瓶颈。
- 项目健康度：用户参与度高，出现 AI 助手代提交 Issue 的自动化趋势；但核心稳定性问题（多次 400、会话丢失）尚未全部闭环，需优先处理。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

- **#8113 [CLOSED] feat(channels): pilot backward-compatible DingTalk plugin**  
  将钉钉渠道收发实现移为独立 `dingtalk` channel 插件，通过现有 PluginLoader 加载。兼容旧配置、启用状态、凭据与会话文件；升级后离线补装，不覆盖已有插件。这是渠道模块化的重要一步。  
  链接：[PR #8113](https://github.com/agentscope-ai/QwenPaw/pull/8113)
- **关闭 Issue 2 条**：  
  - #8104 OpenCode API 需为每个聊天会话新增 `x-opencode-session` header（已关闭）  
    链接：[Issue #8104](https://github.com/agentscope-ai/QwenPaw/issues/8104)  
  - #8109 流错误导致会话完全丢失（已关闭，需确认修复方式）  
    链接：[Issue #8109](https://github.com/agentscope-ai/QwenPaw/issues/8109)
- **大量修复 PR 排队待合并**，涵盖 Provider 兼容、安全、时区、浏览器、技能池、可观测性等，若合并将显著提升稳定性。

## 4. 社区热点

- **#8022（4 评论）**：`send_file_to_user` 产生的 file/image 内容块 + 空 assistant 消息污染会话上下文，导致后续请求对所有模型持续 400。  
  链接：[Issue #8022](https://github.com/agentscope-ai/QwenPaw/issues/8022)
- **#7991（4 评论）**：TaskTracker `_runs` 僵尸条目导致 `running_task_count` 膨胀，与 `/api/chats` 不一致。  
  链接：[Issue #7991](https://github.com/agentscope-ai/QwenPaw/issues/7991)
- **#7948（3 评论）**：Web Console 设计破坏用户输入。  
  链接：[Issue #7948](https://github.com/agentscope-ai/QwenPaw/issues/7948)
- 其他高关注 Issue（2 评论）：#8094、#8047、#8077、#8074、#8073、#8064、#8046、#7984、#8042、#8040、#8035、#8013、#8002、#7980、#7959、#7943、#7731，以及已关闭的 #8104、#8109。
- PR 评论数据缺失，但 #8113 规模 XL 且已关闭；#8051、#8096、#8090、#8050 等修复 PR 更新活跃。
- **诉求分析**：用户对会话可靠性、Provider 兼容性、Console 可用性和安全边界高度敏感；多个 Issue 由 AI 助手代提交，表明自动化报告渠道在形成。

## 5. Bug 与稳定性

按严重程度排列，标注 fix PR 情况：

### 严重（会话/数据损坏，持续 400）
- **#8022** 文件/图片内容块污染上下文，所有模型 400（OPEN，无直接 fix PR）  
  链接：[Issue #8022](https://github.com/agentscope-ai/QwenPaw/issues/8022)
- **#8064** DeepSeek + PDF 导致会话永久 400（OPEN，PR #8010 可能修复媒体载荷拒绝）  
  链接：[Issue #8064](https://github.com/agentscope-ai/QwenPaw/issues/8064) | [PR #8010](https://github.com/agentscope-ai/QwenPaw/pull/8010)
- **#8042** 工具输出文件自动回灌模型导致 Internal error（OPEN，PR #8010 相关）  
  链接：[Issue #8042](https://github.com/agentscope-ai/QwenPaw/issues/8042) | [PR #8010](https://github.com/agentscope-ai/QwenPaw/pull/8010)
- **#7980** `grep_search` 匹配 `history.db-wal` 导致会话状态污染和 doom loop（OPEN，PR #7988 已提交）  
  链接：[Issue #7980](https://github.com/agentscope-ai/QwenPaw/issues/7980) | [PR #7988](https://github.com/agentscope-ai/QwenPaw/pull/7988)
- **#8109** 流错误导致会话完全丢失（CLOSED，今日关闭）  
  链接：[Issue #8109](https://github.com/agentscope-ai/QwenPaw/issues/8109)

### 高（Provider 兼容性）
- **#8074** OpenAI gpt-6 系列 400，`_uses_max_completion_tokens` 白名单仅匹配 `gpt-5*` / `o*`（OPEN，PR #8090 已提交）  
  链接：[Issue #8074](https://github.com/agentscope-ai/QwenPaw/issues/8074) | [PR #8090](https://github.com/agentscope-ai/QwenPaw/pull/8090)
- **#7959** Moonshot kimi-k3 拒绝无 `type` 的 `anyOf` 联合（OPEN，PR #7962 已提交）  
  链接：[Issue #7959](https://github.com/agentscope-ai/QwenPaw/issues/7959) | [PR #7962](https://github.com/agentscope-ai/QwenPaw/pull/7962)
- **#8093** 运行时阻止图像输入，但 catalog/prober 标记支持多模态（OPEN，无 PR）  
  链接：[Issue #8093](https://github.com/agentscope-ai/QwenPaw/issues/8093)
- **#8047** MCP `server/discover` 422 纯文本未视为 legacy-protocol 证据（OPEN，PR #8051 已提交）  
  链接：[Issue #8047](https://github.com/agentscope-ai/QwenPaw/issues/8047) | [PR #8051](https://github.com/agentscope-ai/QwenPaw/pull/8051)
- **#7986** 自定义端点上下文窗口被静态表错误推断（OPEN，PR #7986 已提交）  
  链接：[Issue #7986](https://github.com/agentscope-ai/QwenPaw/issues/7986) | [PR #7986](https://github.com/agentscope-ai/QwenPaw/pull/7986)

### 高（安全）
- **#8002** Windows auto + sandbox off 允许内联 Office COM `Quit()` 关闭用户 PowerPoint（OPEN，PR #8028 / #8048 已提交）  
  链接：[Issue #8002](https://github.com/agentscope-ai/QwenPaw/issues/8002) | [PR #8028](https://github.com/agentscope-ai/QwenPaw/pull/8028) | [PR #8048](https://github.com/agentscope-ai/QwenPaw/pull/8048)
- **#7943** Windows 沙箱 ACL 在驱动器根工作区可能锁死卷（OPEN，无 PR）  
  链接：[Issue #7943](https://github.com/agentscope-ai/QwenPaw/issues/7943)

### 中（时间/UI/内存）
- **#8046** `_process_local_tz()` 冻结 UTC 偏移，DST 偏移错误（OPEN，PR #8050 已提交）  
  链接：[Issue #8046](https://github.com/agentscope-ai/QwenPaw/issues/8046) | [PR #8050](https://github.com/agentscope-ai/QwenPaw/pull/8050)
- **#7948** Web Console 设计破坏输入（OPEN，无 PR）  
  链接：[Issue #7948](https://github.com/agentscope-ai/QwenPaw/issues/7948)
- **#8094** Console 启动闪屏无重试和错误提示，WebView2 缓存可永久阻塞启动（OPEN，无 PR）  
  链接：[Issue #8094](https://github.com/agentscope-ai/QwenPaw/issues/8094)
- **#8073** V2.2.2.beta4 局域网访问时无法打开会话页（OPEN，无 PR）  
  链接：[Issue #8073](https://github.com/agentscope-ai/QwenPaw/issues/8073)
- **#8105** 工具审批按钮失效，同意/拒绝均执行拒绝（OPEN，无 PR）  
  链接：[Issue #8105](https://github.com/agentscope-ai/QwenPaw/issues/8105)
- **#8101** `/chat/<id>` 深链接跨 agent 失败（OPEN，无 PR）  
  链接：[Issue #8101](https://github.com/agentscope-ai/QwenPaw/issues/8101)
- **#8088** 图像路由到 `chat_with_image` 陷入 Bash+PIL 裁剪循环后被静默取消（OPEN，无 PR）  
  链接：[Issue #8088](https://github.com/agentscope-ai/QwenPaw/issues/8088)
- **#8013** 技能池下载大技能 30s 超时（OPEN，PR #8055 已提交）  
  链接：[Issue #8013](https://github.com/agentscope-ai/QwenPaw/issues/8013) | [PR #8055](https://github.com/agentscope-ai/QwenPaw/pull/8055)
- **#8040** embedding reindex 因 CJK 块超 token 限制静默丢弃整批（OPEN，PR #8062 已提交）  
  链接：[Issue #8040](https://github.com/agentscope-ai/QwenPaw/issues/8040) | [PR #8062](https://github.com/agentscope-ai/QwenPaw/pull/8062)
- **#8035** Transcription 设置页无法配置 `transcription_model`（OPEN，PR #8052 已提交）  
  链接：[Issue #8035](https://github.com/agentscope-ai/QwenPaw/issues/8035) | [PR #8052](https://github.com/agentscope-ai/QwenPaw/pull/8052)
- **#8106** 容器内插件安装失败，`PIP_TARGET` 泄漏（OPEN，无 PR）  
  链接：[Issue #8106](https://github.com/agentscope-ai/QwenPaw/issues/8106)

### 低（增强/文档）
- **#7731** Files 面板增加显示点文件开关（OPEN）  
  链接：[Issue #7731](https://github.com/agentscope-ai/QwenPaw/issues/7731)
- **#8085** 输出截断时暴露 `finish_reason="length"`（OPEN，PR #8096 已提交）  
  链接：[Issue #8085](https://github.com/agentscope-ai/QwenPaw/issues/8085) | [PR #8096](https://github.com/agentscope-ai/QwenPaw/pull/8096)
- **#8103** 模型静默降级时通知用户（OPEN）  
  链接：[Issue #8103](https://github.com/agentscope-ai/QwenPaw/issues/8103)
- **#8082** 补充 heartbeat 文档（OPEN）  
  链接：[Issue #8082](https://github.com/agentscope-ai/QwenPaw/issues/8082)

## 6. 功能请求与路线图信号

- **已有关联 PR，可能进入下一版本**：
  - #8085 → PR #8096 暴露 `finish_reason length`
  - #8040 → PR #8062 保留健康 embedding 向量
  - #8035 → PR #8052 可配置 Whisper API 模型名
  - #7984 → PR #8029 / #7987 浏览器默认启动参数排除
  - #8002 → PR #8028 / #8048 内联 Office COM 安全拦截
  - #8047 → PR #8051 MCP 422 视为 legacy
  - #8074 → PR #8090 识别新 GPT token 参数
  - #7959 → PR #7962 为 enum 工具 schema 添加 `type`
  - #8013 → PR #8055 技能池下载异步化
  - #8046 → PR #8050 DST 感知时区
  - #7980 → PR #7988 grep 跳过二进制/内部文件
  - #7995 → PR #7996 Files 面板刷新展开文件夹
- **无 PR 但呼声较高的功能请求**：#7731 点文件显示开关、#8103 降级通知、#8082 heartbeat 文档、#8093 多模态能力一致性、#8101 深链接修复。
- **路线图信号**：项目正从功能扩张转向**稳定性与兼容性加固**；渠道插件化（#8113）和 Provider 兼容修复是近期主线。

## 7. 用户反馈摘要

- **痛点**：
  - 会话稳定性：发送文件/图片后永久 400（#8022、#8064、#8042），流错误后会话丢失（#8109）。
  - Provider 兼容：新模型（gpt-6、kimi-k3）和自定义端点频繁 400 或能力判断错误（#8074、#7959、#7986、#8093）。
  - 安全与权限：Windows 下 Office COM 可被滥用（#8002），沙箱 ACL 可锁卷（#7943），工具审批按钮失效（#8105）。
  - Console/UI：Web Console 设计阻碍输入（#7948），启动闪屏无错误恢复（#8094），深链接失败（#8101），上下文用量表隐藏（#8077）。
  - 大文件/技能：技能池下载 30s 超时（#8013），容器插件安装失败（#8106）。
  - 可观测性：模型静默降级无提示（#8103），截断无 `finish_reason`（#8085），Langfuse 工具输出丢失（PR #7964）。
- **使用场景**：多渠道（钉钉、企业微信、Telegram）、桌面端、Docker/容器、自托管、第三方 agent（Qoder）、多模型 fallback。
- **满意度**：社区贡献活跃，多个首次贡献者 PR（#7987、#8012、#8010、#7988、#7962）；AI 助手代提交 Issue 显示生态自动化。不满意主要集中在稳定性与兼容性回归。

## 8. 待处理积压

- **长期未关闭 Issue（创建 >10 天，仍 OPEN）**：
  - #7731 2026-09-12 Files 点文件开关（2 评论，enhancement，无 PR）  
    [链接](https://github.com/agentscope-ai/QwenPaw/issues/7731)
  - #7943 2026-09-22 Windows 沙箱 ACL 锁卷（2 评论，无 PR）  
    [链接](https://github.com/agentscope-ai/QwenPaw/issues/7943)
  - #7948 2026-09-23 Web Console 设计破坏输入（3 评论，无 PR）  
    [链接](https://github.com/agentscope-ai/QwenPaw/issues/7948)
  - #7959 2026-09-23 Moonshot anyOf（2 评论，PR #7962 已开 12 天未合并）  
    [链接](https://github.com/agentscope-ai/QwenPaw/issues/7959)
  - #7984 2026-09-25 浏览器扩展（2 评论，PR #8029 / #7987 待合并）  
    [链接](https://github.com/agentscope-ai/QwenPaw/issues/7984)
  - #7980 2026-09-25 grep 二进制（2 评论，PR #7988 待合并）  
    [链接](https://github.com/agentscope-ai/QwenPaw/issues/7980)
  - #7991 2026-09-26 TaskTracker 僵尸条目（4 评论，无 PR）  
    [链接](https://github.com/agentscope-ai/QwenPaw/issues/7991)
  - #8002 2026-09-28 Office COM（2 评论，PR #8028 / #8048 待合并）  
    [链接](https://github.com/agentscope-ai/QwenPaw/issues/8002)
  - #8022 2026-09-29 会话上下文污染（4 评论，无 PR）  
    [链接](https://github.com/agentscope-ai/QwenPaw/issues/8022)
- **长期未合并 PR（创建 >10 天）**：
  - #7962 2026-09-24 Moonshot schema 修复  
    [链接](https://github.com/agentscope-ai/QwenPaw/pull/7962)
  - #7964 2026-09-24 Langfuse 工具输出  
    [链接](https://github.com/agentscope-ai/QwenPaw/pull/7964)
  - #7986 2026-09-25 自定义端点上下文窗口  
    [链接](https://github.com/agentscope-ai/QwenPaw/pull/7986)
  - #7987 2026-09-25 Playwright 默认参数排除  
    [链接](https://github.com/agentscope-ai/QwenPaw/pull/7987)
  - #7988 2026-09-25 grep 跳过二进制  
    [链接](https://github.com/agentscope-ai/QwenPaw/pull/7988)
- **建议**：维护者优先评审安全相关（#8028、#8048）和会话稳定性相关（#8010、#7988）PR，并回应高评论 Issue #8022、#7991、#7948。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报
**日期：2026-10-06** | 数据来源：github.com/zeroclaw-labs/zeroclaw

---

## 1. 今日速览

- **活跃度极高但"只进不出"**：过去 24 小时 Issues 更新 16 条、PR 更新高达 50 条，社区提交意愿旺盛；但 **PR 合并/关闭数为 0**，50 条全部处于待合并状态，评审吞吐与提交量严重失衡。
- **问题聚焦于稳定性与安全**：今日多条高优先级 Bug 涉及**配置数据丢失（p0/S0）**、**沙箱后端失效（S0/S1）**、**会话状态卡死**，稳定性风险集中爆发。
- **安全/运行时是主线**：从沙箱（bubblewrap/firejail）到配置保存、密钥、shell 子进程控制终端，多个改动围绕"安全边界"展开。
- **积压信号明显**：部分 PR 自 8 月底、9 月中旬起持续挂起，多个 PR 带 `needs-maintainer-review` / `needs-author-action` 标签，评审成为当前最大瓶颈。
- **无新版本发布**，当前工作重心仍停留在 v0.8.6 相关事项的收口阶段。

---

## 2. 版本发布

无新版本发布，本节省略。

---

## 3. 项目进展

> ⚠️ **今日 PR 合并/关闭数为 0**（50 条更新全部为 OPEN）。这意味着今日项目在"代码落地"维度上**净进展为零**，所有变更仍停留在评审队列中。

**今日关闭的 3 条 Issue（唯一实质收口）：**

| Issue | 标题 | 意义 |
|---|---|---|
| [#11294](https://github.com/zeroclaw-labs/zeroclaw/issues/11294) | Flaky: `configure_refuses_an_incarnation_replaced_under_the_lock` 在并行运行时门禁下与 150ms sleep 竞争 | 修复并行 CI 下的不稳定测试，提升 CI 可信度 |
| [#11482](https://github.com/zeroclaw-labs/zeroclaw/issues/11482) | Chat 更新被无关 log 通知阻塞（zerocode/tui） | 修复 TUI 聊天响应延迟，改善交互体验 |
| [#11335](https://github.com/zeroclaw-labs/zeroclaw/issues/11335) | 无终端 + stdin EOF 时 CLI 审批提示误报 `Denied by user` | 修正 fail-closed 拒绝的错误归因，利于 cron/CI 场景 |

**评估**：关闭的 3 条均为 Bug/测试类问题，属于"清账"性质，未推进新功能。**项目整体向前迈进的幅度今日偏低**，主要动能被积压在待合并 PR 队列中。

---

## 4. 社区热点

按评论数与 👍 排序：

| 排名 | 条目 | 评论 | 👍 | 链接 |
|---|---|---|---|---|
| 1 | [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) [Feature] 定义紧凑的 `local_small` 运行时 profile 与 prompt 预算契约 | **10** | **2** | 讨论最活跃 |
| 2 | [#10495](https://github.com/zeroclaw-labs/zeroclaw/issues/10495) [Bug] `Config::save()` 可能用近乎空文件覆盖配置 | 6 | 0 | 高关注度 p0 |
| 3 | [#11418](https://github.com/zeroclaw-labs/zeroclaw/issues/11418) [Bug] "Copy" 一键功能失效 | 4 | 0 | 用户可感知 |
| 4 | [#7891](https://github.com/zeroclaw-labs/zeroclaw/issues/7891) [Feature] Signal 媒体附件支持 | 3 | 1 | 长期需求 |
| 4 | [#10993](https://github.com/zeroclaw-labs/zeroclaw/issues/10993) [Feature] 完成公共运行时组合边界 | 3 | 0 | 架构演进 |
| 4 | [#11525](https://github.com/zeroclaw-labs/zeroclaw/issues/11525) [Bug] Android/Termux 上 quickstart 失败 | 3 | 0 | 平台兼容 |

**背后的诉求分析：**

- **#5287（本地小模型体验）** 是社区最热议题：用户希望在本地/低资源场景下减少 prompt 膨胀、关闭宽松回退解析、避免内部工具/系统指令泄漏到用户可见输出。反映出**"local-first" 用户的真实痛点**，且有明确的产品化价值。
- **#10495（配置覆盖）** 属于**数据丢失级事故**，任何部署 25 个 agent 的运营者都会高度关注，是当前最该优先止血的问题。
- **#7891（Signal 媒体）** 已进入 `status:parking-lot`，说明需求被认可但优先级被搁置，用户侧期待与维护侧排期存在落差。

> 说明：本次 PR 数据中评论数字段为 `undefined`，故热点排序以 Issues 为准。

---

## 5. Bug 与稳定性

按严重程度排列（S0/S1 优先）：

### 🔴 S0 — 数据丢失 / 安全风险

| Issue | 标题 | 状态 | 是否已有 fix PR |
|---|---|---|---|
| [#10495](https://github.com/zeroclaw-labs/zeroclaw/issues/10495) | `Config::save()` 用 702 字节空配置覆盖 109KB/25 agents 的 config.toml | p0, in-progress | ✅ 疑似对应 [#11527](https://github.com/zeroclaw-labs/zeroclaw/pull/11527)「refuse unproven full saves over existing files」 |
| [#11540](https://github.com/zeroclaw-labs/zeroclaw/issues/11540) | bubblewrap 沙箱在 Linux 上未被检测到，回退到应用层 | 新开 | ❌ 暂无 |

### 🟠 S1 — 工作流阻塞

| Issue | 标题 | 是否已有 fix PR |
|---|---|---|
| [#11525](https://github.com/zeroclaw-labs/zeroclaw/issues/11525) | Android 16 / Termux (aarch64) quickstart 无法创建 agent | ❌ 暂无 |
| [#11539](https://github.com/zeroclaw-labs/zeroclaw/issues/11539) | Firejail 沙箱报 `invalid --nowheel` | ❌ 暂无 |
| [#11538](https://github.com/zeroclaw-labs/zeroclaw/issues/11538) | Firejail 沙箱报 `invalid private directory` | ❌ 暂无 |
| [#11519](https://github.com/zeroclaw-labs/zeroclaw/issues/11519) | 恢复的 workspace split 隐藏已安装插件 | ❌ 暂无 |
| [#11418](https://github.com/zeroclaw-labs/zeroclaw/issues/11418) | zerocode TUI "Copy" 按钮失效 | ❌ 暂无 |

### 🟡 S2 — 行为降级

| Issue | 标题 | 是否已有 fix PR |
|---|---|---|
| [#11432](https://github.com/zeroclaw-labs/zeroclaw/issues/11432) | daemon 中途被杀导致 session 永久 `running` | ❌ 暂无 |
| [#8539](https://github.com/zeroclaw-labs/zeroclaw/issues/8539) | `AgentEnd` 事件缺失 `cost_usd`，channel 路径从不发出 | ❌ 暂无 |

**稳定性评述**：
- 沙箱相关三连报（#11538/#11539/#11540，均来自同一用户 `maacruz`）暴露出 **Linux 沙箱后端适配存在系统性问题**，且日志可观测性差（"日志完全不透明"），建议合并为一个 umbrella 议题处理。
- #10495 已有修复方向（#11527），是今日最有希望落地的止血项。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 关联 PR | 纳入下一版本可能性 |
|---|---|---|---|
| 紧凑 `local_small` 运行时 profile 与 prompt 预算契约 | [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) | — | 🟡 社区热度最高，但尚无 PR，需产品决策 |
| 完成公共运行时组合边界（可嵌入） | [#10993](https://github.com/zeroclaw-labs/zeroclaw/issues/10993) | 关联 #7432/#5559/#7430 | 🟢 架构收敛类，已有前置落地，标记 `release:v0.8.6` |
| Signal 媒体附件支持 | [#7891](https://github.com/zeroclaw-labs/zeroclaw/issues/7891) | — | 🔴 `parking-lot`，短期难纳入 |
| Microsoft Teams 渠道（Bot Framework） | — | [#11194](https://github.com/zeroclaw-labs/zeroclaw/pull/11194) | 🟢 已有 XL 级 PR，渠道扩展主线 |
| Cheaper Inference 模型提供商 | — | [#11104](https://github.com/zeroclaw-labs/zeroclaw/pull/11104) | 🟢 已有 S 级 PR，易合入 |
| WhatsApp Web `create_room` / `invite_user` | — | [#10979](https://github.com/zeroclaw-labs/zeroclaw/pull/10979) | 🟢 已有 PR |
| WhatsApp 投票结果回读 | — | [#10988](https://github.com/zeroclaw-labs/zeroclaw/pull/10988) | 🟢 已有 PR |
| 自定义 OpenAI 兼容端点默认启用原生工具调用 | — | [#10687](https://github.com/zeroclaw-labs/zeroclaw/pull/10687) | 🟢 已有 PR，面向 vLLM/llama.cpp/LiteLLM 用户 |

**判断**：渠道扩展（Teams、WhatsApp）与提供商适配（Cheaper Inference、OpenAI 兼容端点）是**已进入 PR 阶段、最可能随 v0.8.6 落地**的方向；而 `local_small` 虽是社区最热需求，但缺乏实现载体，属于**路线图待决策项**。

---

## 7. 用户反馈摘要

- **本地优先用户（#5287）**：核心痛点是 prompt 膨胀与内部指令泄漏到用户可见输出，期望一个"省资源、更干净"的本地模式。👍 2 表示共鸣较强。
- **多 agent 运营者（#10495）**：真实场景为 109KB、25 个 agent 的生产配置被一次测试运行覆盖为 702 字节——**对配置持久化安全性信任受损**，是最强烈的负面反馈。
- **移动端用户（#11525）**：Android/Termux 用户反馈 quickstart 直接失败，提示"磁盘上没有任何更改"，**平台覆盖不足**导致新用户上手受挫。
- **桌面交互用户（#11418 / #11482）**：TUI 的"Copy 无反应"、聊天响应被日志通知阻塞，反映**zerocode 前端体验仍需打磨**。
- **安全敏感用户（#11538/#11539/#11540）**：Linux 沙箱（firejail/bubblewrap）配置后无法正常工作，且**日志缺乏诊断信息**，用户在安全关键路径上"既不能用、也查不出"。
- **运维/CI 用户（#11335 已关闭）**：无终端环境下审批被误报为"用户拒绝"，影响自动化流水线——该问题已修复，属正向信号。

---

## 8. 待处理积压

以下条目**长期未收口**，建议维护者优先关注：

| 类型 | 条目 | 创建时间 | 滞留时长 | 备注 |
|---|---|---|---|---|
| Issue | [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) 本地小模型 profile | 2026-04-04 | **约 6 个月** | 社区最热但无 PR，需产品决策 |
| Issue | [#7891](https://github.com/zeroclaw-labs/zeroclaw/issues/7891) Signal 媒体 | 2026-06-17 | 约 3.7 个月 | `parking-lot` |
| Issue | [#8539](https://github.com/zeroclaw-labs/zeroclaw/issues/8539) AgentEnd 缺 cost_usd | 2026-06-30 | 约 3 个月 | `status:no-stale` |
| PR | [#10391](https://github.com/zeroclaw-labs/zeroclaw/pull/10391) delegate 边界修复 | 2026-08-26 | **约 40 天** | XL 级，多次 rebase，评审成本高 |
| PR | [#10687](https://github.com/zeroclaw-labs/zeroclaw/pull/10687) OpenAI 兼容端点原生工具调用 | 2026-09-07 | 约 1 个月 | 影响面广 |
| PR | [#10935](https://github.com/zeroclaw-labs/zeroclaw/pull/10935) / [#10938](https://github.com/zeroclaw-labs/zeroclaw/pull/10938) | 2026-09-17 | 约 19 天 | 均带 `needs-maintainer-review` |

**积压结构性问题**：
1. **评审瓶颈**：50 条 PR 零合并，多个带 `needs-maintainer-review`，维护者评审带宽是当前最大制约。
2. **大 PR 积压**：XL 级 PR（#10391、#10935、#10938、#11194、#11214）数量多、评审周期长，建议拆分或指定 reviewer。
3. **作者响应滞后**：多条 PR 带 `needs-author-action`（如 #10979、#11144、#11541、#11544），需提醒作者跟进。

---

## 📊 项目健康度总评

| 维度 | 评分 | 说明 |
|---|---|---|
| 社区活跃度 | 🟢 高 | 24h 内 16 Issues + 50 PR 更新 |
| 代码落地速度 | 🔴 低 | **0 合并 / 0 关闭 PR** |
| 稳定性 | 🟠 中 | S0×2、S1×5 集中爆发，沙箱问题系统化 |
| 响应时效 | 🟠 中 | 新 Bug 当日有人跟进，但积压长期化 |
| 版本节奏 | 🟡 停滞 | 无新版本，v0.8.6 相关事项仍在收口 |

**一句话结论**：ZeroClaw 社区热度充沛、议题质量高，但**当前最大风险是"提交—评审"失衡**——50 条 PR 零合入、多条 S0/S1 缺陷缺乏对应 fix PR，建议维护团队优先处理 #10495（配置丢失）与沙箱三连报，并集中清理评审队列，以恢复项目前进节奏。

---

*注：本日报仅基于所提供的 GitHub 数据生成；PR 评论数字段缺失，故相关排序以 Issues 与标签为准。*

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*