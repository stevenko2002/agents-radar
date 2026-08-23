# OpenClaw 生态日报 2026-08-24

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-23 22:15 UTC

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

**OpenClaw 项目日报（2026‑08‑24）**  
*基于过去 24 h 的 GitHub 数据（Issues 更新 500 条，PR 更新 500 条，无新版本发布）*

---

## 1. 今日速览
- 项目保持高强度活跃度：过去 24 h 内有 500 条 Issue 更新（新开/活跃 454，已关闭 46）和 500 条 PR 更新（待合并 389，已合并/关闭 111），说明社区与维护团队均在持续推进 bug 修复、功能增强和发布验证工作。  
- 未有新版本发布，但有多个 **beta 验证**（如 #125626）和 **回归修复** PR 正在待合并，表明下一个正式版本的准备工作正在进行。  
- 整体健康度良好：大部分讨论聚焦在已有功能的稳定性（内存泄漏、子进程僵尸、会话状态丢失等），而非新需求的激增，项目处于“修复‑稳定”阶段。

## 2. 版本发布
> **无新版本发布**。  
> 最近的 beta 候选版本为 `v2026.8.1-beta.2`（见 Issue #125626），仍在验证阶段，暂无正式发布计划。

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 状态 | 标题 / 目的 | 关联 Issue | 影响 |
|----|------|--------------|------------|------|
| #128371 | CLOSED | **fix(release): authorize focused beta evidence** – 解决 beta.3 发布阻塞，使仅通过部分验证的 beta 能被接受。 | #125626（beta 验证） | 为后续 beta 发布铺平道路，减少发布流程摩擦。 |
| #123442 | CLOSED | **fix(gateway): invalidate stale worker disk-space projections** – 防止 `sessions.list` 返回过期的磁盘空间预测。 | 间接影响会话状态与资源监控 | 提升网关在长期运行下的资源报告准确性。 |
| #123975 | CLOSED | **fix(scripts): clean up tsgo process trees on timeout or signal** – 防止 `tsgo` 包裹的编译器进程核在超时或信号后残留。 | 无直接 Issue，但提升 CI/脚本可靠性 | 减少构建卡死，提升 CI 稳定性。 |
| #120900 | CLOSED | **feat(ui): review install policy warnings** – 在 Control UI 中添加安装策略警告的确认流程。 | #116489（相关功能） | 增强安全可审计性，防止误装危险插件。 |
| #125471 | CLOSED | **fix(models): keep Claude CLI OAuth available in Control UI** – 保持 Claude CLI OAuth 凭据在网关重启后不被覆盖。 | 间接关联身份验证问题 | 解决 OAuth 凭据丢失导致的模型调用失败。 |
| #126566 | OPEN（待合并） | **fix(agents): stop fallback tasks hanging after primary model failures** – 在主模型终止失败时阻止回落任务无限运行。 | #126311（回落模型卡住） | 一旦合并，将彻底解决子agent 卡死问题。 |
| #122023 | OPEN（待合并） | **fix: turn fails with generic auto‑compaction error when fixed context overhead exceeds the budget** – 修复因固定上下文开销过大导致的回合失败。 | #121617（自动压缩错误） | 有望减少因上下文预算不足导致的 turn 中断。 |
| #121478 | OPEN（待合并） | **fix(gateway): preserve paired restart session refs** – 在网关重启时保留配对会话引用，防止会话丢失。 | #121869（会话恢复） | 合并后将提升重启后的会话一致性。 |

> **合并/关闭PR总计**：今日有 6 个 PR 被合并/关闭（上表中标记 CLOSED 的），其余大量 PR 仍处于待合并状态，显示维护团队正在审查并逐步消化积压。

## 4. 社区热点（今日评论最多、反应最多的 Issues/PRs）

| 排名 | 类型 | ID | 标题 | 评论数 | 👍 | 链接 | 热点分析 |
|------|------|----|------|--------|----|------|----------|
| 1 | Issue | #125626 | Release validation: v2026.8.1-beta.2 | 18 | 0 | [链接](https://github.com/openclaw/openclaw/issues/125626) | beta 验证过程需要多名测试者填写工作表，反映社区对发布质量的高度关注。 |
| 2 | Issue | #119796 | Windows: vitest teardown fails with EBUSY unlink on agent state DB | 15 | 0 | [链接](https://github.com/openclaw/openclaw/issues/119796) | Windows 文件锁定导致测试 teardown 失败，是跨平台 CI 的痛点。 |
| 3 | Issue | #121953 | Cron agent stalls on DeepSeek due to `[cron:<jobId> <name>]` prefix | 13 | 0 | [链接](https://github.com/openclaw/openclaw/issues/121953) | 特定模型（DeepSeek）对自定义前缀敏感，暴露出模型前缀处理的兼容性问题。 |
| 4 | Issue | #39476 | A2A sessions_send can cause duplicate messages | 12 | 0 | [链接](https://github.com/openclaw/openclaw/issues/39476) | 会话双向调用导致消息重复，影响对话可靠性，是长期讨论的核心问题。 |
| 5 | Issue | #6599 | Feature: Add `/models test-fallback` command to verify fallback chain | 11 | 1 | [链接](https://github.com/openclaw/openclaw/issues/6599) | 用户希望在真实故障前验证模型回退链，显示对可观测性的需求。 |
| 6 | PR | #128371 | fix(release): authorize focused beta evidence | 0（评论未显示） | 0 | [链接](https://github.com/openclaw/openclaw/pull/128371) | 虽然评论数未显示，但该 PR 直接关系到 beta 发布阻塞，是今日最关键的合并目标。 |
| 7 | PR | #123442 | fix(gateway): invalidate stale worker disk-space projections | 0 | 0 | [链接](https://github.com/openclaw/openclaw/pull/123442) | 资源监控准确性对运维告警至关重要，因而受到关注。 |

**社区诉求概览**  
- **跨平台稳定性**（尤其是 Windows 文件锁定、子进程僵尸）是最频繁的抱怨。  
- **模型兼容性**：对特定模型（DeepSeek、Claude）的前缀或 OAuth 凭据处理需求明显。  
- **发布流程透明度**：社区希望 beta 验证更灵活，不必要求全量验证通过才能发布。  
- **可观测性与调试**：用户强烈希望能在不等待真实故障的情况下验证 fallback 链和磁盘资源状态。

## 5. Bug 与�定性（今日报告的问题，按严重程度排序）

| 严重程度 | Issue ID | 标题 | 是否有对应 fix PR | 链接 |
|----------|----------|------|-------------------|------|
| **P0 / Critical** | #126423 | Voice Mode deletes conversations & breaks layout | 无直接 PR（需跟进） | [链接](https://github.com/openclaw/openclaw/issues/126423) |
| **P0 / Critical** | #126821 | SQLite corruption recurs on pristine rebuilt DBs (WSL2) | 无直接 PR | [链接](https://github.com/openclaw/openclaw/issues/126821) |
| **P1** | #119796 | Windows vitest teardown EBUSY | 无直接 PR | [链接](https://github.com/openclaw/openclaw/issues/119796) |
| **P1** | #121953 | Cron agent stall on DeepSeek | 无直接 PR | [链接](https://github.com/openclaw/openclaw/issues/121953) |
| **P1** | #39476 | A2A duplicate messages | 无直接 PR | [链接](https://github.com/openclaw/openclaw/issues/39476) |
| **P1** | #97616 | OpenClaw leaks unreaped hook/tool child processes (zombies) | 无直接 PR | [链接](https://github.com/openclaw/openclaw/issues/97616) |
| **P1** | #126311 | Fallback model keeps running after primary terminal error | **#126566**（待合并） | [链接](https://github.com/openclaw/openclaw/issues/126311) |
| **P1** | #126707 | Native Codex compaction repeats successful message send | 无直接 PR | [链接](https://github.com/openclaw/openclaw/issues/126707) |
| **P2** | #115001 | Hybrid memory search returns spurious 1.0 similarity scores | 无直接 PR | [链接](https://github.com/openclaw/openclaw/issues/115001) |
| **P2** | #116010 | All persistent sessions capped at 128k context | 无直接 PR | [链接](https://github.com/openclaw/openclaw/issues/116010) |

> **注意**：上述 P0 问题目前尚未有对应的修复 PR，建议维护团队优先 triage。

## 6. 功能请求与路线图信号

| 功能请求 | 关联 Issue/PR | 现状 | 是否可能进入下一版本 |
|----------|---------------|------|----------------------|
| `/models test-fallback` 命令（验证模型回退链） | Issue #6599 | 待评审，无 PR | 中等概率 – 有明确需求且实现相对简单。 |
| 增强 Kubernetes 部署文档 | Issue #91455 | 待评审，无 PR | 低概率 – 文档类改动通常优先级低，除非有赞助。 |
| Slack 线程回复在 origin tuple 丢失后仍能送达 | Issue #96692 | 待评审，无 PR | 中等概率 – 涉及消息传递可靠性，是稳定性方向。 |
| UI 质量更新基于 UX 评分 | Issue #75947 | 待评审，无 PR | 低概率 – 大规模 UI 改动需要设计资源。 |
| 智能 Session 自动命名（懒惰生成、主题感知） | Issue #99583 | 待评审，无 PR | 中等概率 – 已有 `llm-slug-generator` 复用，实现成本较低。 |
| 在 Control UI 诊断 overlay 中显示磁盘空间 | PR #128384（待合并） | 已提交，等待维护审查 | 高概率 – 直接提升运维可见性，符合最近的监控需求。 |
| 允许管理员暂时关闭 sidebar 更新指示器 | PR #128365（待合并） | 已提交，等待审查 | 高概率 – 小 UI 改动，风险低。 |

## 7. 用户反馈摘要（从 Issues 评论中提炼）

- **跨平台文件锁定**（Windows）导致测试和运行时异常，用户反复提到需要更健壮的文件句柄管理或在 teardown 中加强等待/重试机制。  
- **子进程僵尸**（hook/tool）随时间累积，影响网关性能；多位用户建议在 `openclaw doctor` 中加入自动清理或在插件注册时强制使用 `waitpid`。  
- **模型前缀兼容性**：对 DeepSeek 等模型的自定义前缀 `[cron:…]` 造成低优先级调度，用户希望能

---

## 横向生态对比

**今日重點摘要**

---

### 1️⃣ 重要更新（5‑8 條）

| 項目 | 更新內容 | 影響／意義 |
|------|----------|------------|
| **OpenClaw** – <https://github.com/openclaw/openclaw> | PR **#128371**（CLOSED）解除 beta.3 發布阻塞，允許僅通過部分驗證的 beta 直接授權。 | 加速 beta 發布流程，降低發佈門檻。 |
| **NanoBot** – <https://github.com/HKUDS/nanobot> | PR **#5445**（CLOSED）將 OAuth 憑證寫入掛載目錄，Docker 重啟後仍保留授權。 | 解決容器重啟後的登入失效問題，提升部署穩定性。 |
| **Hermes Agent** – <https://github.com/NousResearch/hermes-agent> | PR **#93217**（CLOSED）修復 Bot Mode 斷線後 “Bot Chat” 會話無法恢復的問題。 | 保障 Bot 會話在 WebSocket 掉線後自動復原，提升對話持久性。 |
| **PicoClaw** – <https://github.com/sipeed/picoclaw> | PR **#3322‑#3324**（CLOSED）為 QQ、Telegram、Discord、LINE、Slack、WeCom、Weixin 等入站媒體下載統一加入 `BlockPrivateTargets` 防護。 | 防止 SSRF 攻擊，阻斷內部網路請求，增強跨平台安全性。 |
| **NanoClaw** – <https://github.com/qwibitai/nanoclaw> | PR **#3320**（CLOSED）升級 `whatsmeow` 依賴，修復 WhatsApp 因 “Client outdated (405)” 而掉線的致命故障。 | 恢復原生 WhatsApp 通道的可用性，避免服務中斷。 |
| **NullClaw** – <https://github.com/nullclaw/nullclaw> | Issue **#991**（OPEN）報告在 Proxmox CT 中 `stdio` MCP 被占用導致 Agent 無限期掛起。 | 可能導致服務不可用，需優先 triage 以提供臨時解決方案。 |
| **CoPaw** – <https://github.com/agentscope-ai/qwenpaw> | PR **#7219**（OPEN）在「Token Usage」頁面新增全代理 LLM 與工具調用趨勢圖，並提供 `/api/agent‑stats/llm‑tool‑trend` 接口。 | 提升可觀測性，讓運維與開發者快速定位資源瓶頸。 |
| **ZeroClaw** – <https://github.com/zeroclaw-labs/zeroclaw> | RFC **#9487**（OPEN）“Runtime‑owned conversation sessions” 取得 25 條評論，聚焦會話所有權與持久化機制。 | 為下一代會話管理框架奠基，影響未來版本的 session 生命周期設計。 |

---

### 2️⃣ 活躍度概覽

- **OpenClaw**、**Hermes Agent**、**ZeroClaw** 今日各產生 **≈500 條 Issue/PR**（OpenClaw）或 **50 條 Issue/PR**（Hermes Agent、ZeroClaw），是本日最活躍的三個倉庫，說明社群與核心維護者同時保持高密度討論與審核。  
- **NanoBot**、**PicoClaw**、**NanoClaw** 雖 PR 合併數有限，但均有關鍵安全或部署穩定性的 PR 在本日合併，顯示維護者正聚焦於基礎設施與安全修復。  
- 其餘倉庫（NullClaw、CoPaw、ZeptoClaw）活動相對較低，僅有少量 Issue/PR 更新。  

整體而言，今天的開源 AI 助手生態呈現「高討論 + 核心功能/安全修復」的雙重特徵，特別是會話持久化、跨平台安全與部署可靠性是社群當前的焦點。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot 项目日报（2026‑08‑24）**  
*基于 GitHub 事件：Issues 2 条（新开/活跃 1，已关闭 1），PR 19 条（待合并 14，已合并/关闭 5），无新版本发布。*

---

### 1. 今日速览
- 项目整体活跃度较高：过去 24 小时内有 19 条 PR 参与讨论，其中 5 条已合并/关闭，显示持续的代码流入。  
- 今天唯一的已关闭 Issue（#5444）反映了 Docker 环境下 OpenAI OAuth 登录的 bug 已得到修复（见 PR #5445）。  
- 新增的功能需求（如文档预览、Linear 集成、配置统一编辑器）均以 OPEN 状态出现，表明社区对易用性和扩展性的关注持续升温。  
- 未解决的长期挂起 PR（#5152、#5385、#5388、#5386）提醒维护者关注老旧但仍具价值的改动。

### 2. 版本发布
> **无新版本发布**（今日没有 Release）。

### 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 标题 | 关键贡献 | 状态 | 链接 |
|----|------|----------|------|------|
| #5420 | feat(runtime): add user‑controlled turn recovery | 在 WebSocket 中断时保存轻量级检查点，提供手动 **Continue / Dismiss**，避免自动恢复导致的重复模型调用。 | CLOSED | [HKUDS/nanobot#5420](https://github.com/HKUDS/nanobot/pull/5420) |
| #5491 | fix(webui): keep answer text outside reasoning shell | 确保助手的答案片段在答案 → 工具 → 答案的循环中完整保留，防止答案被误入推理区域。 | CLOSED | [HKUDS/nanobot#5491](https://github.com/HKUDS/nanobot/pull/5491) |
| #5492 | feat(cli): expose nanobot process identities | 为不同角色（agent、webui、gateway、tui）分配明确的进程名，便于监控和调试；保留 Windows 可执行文件原有身份。 | CLOSED | [HKUDS/nanobot#5492](https://github.com/HKUDS/nanobot/pull/5492) |
| #5475 | refactor: remove remaining dead code | 清理零使用的运行时、设置、渠道、测试帮助函数及未读状态，移除无用的 `websocket-client` 依赖，收紧 WebUI/TUI 导出符号。 | CLOSED | [HKUDS/nanobot#5475](https://github.com/HKUDS/nanobot/pull/5475) |
| #5445 | fix(docker): persist OAuth client data | 将 OAuth 凭据写入挂载的 Nanobot 实例目录（XDG），使容器重启后凭据得以保留，解决 #5444 登录失败问题。 | CLOSED | [HKUDS/nanobot#5445](https://github.com/HKUDS/nanobot/pull/5445) |

> **整体影响**：以上合并的 PR 共同提升了系统的可恢复性（#5420）、前端渲染正确性（#5491）、运维可观测性（#5492）、代码健康度（#5475）以及 Docker 部署的可用性（#5445），为后续功能扫除技术债务。

### 4. 社区热点（讨论最活跃的 Issues/PRs）

| 项 | 互动指标 | 主要讨论内容 | 链接 |
|----|----------|--------------|------|
| Issue #5444 | 2 条评论，0 👍 | 用户在 Docker 中通过 OAuth 登录 OpenAI 时卡住，日志显示授权码交换阶段超时。评论中提供了复现步骤和临时 workaround（手动粘贴回调 URL）。 | [HKUDS/nanobot#5444](https://github.com/HKUDS/nanobot/issues/5444) |
| PR #5498 | 0 评论（但标记 p2、多标签） | 提议在 Agent TUI 中统一Onboarding流程，引入完整的配置编辑器契约。虽然目前无评论，但其多标签（documentation、enhancement、webui、feature、test）表明社区对统一配置体验的期待较高。 | [HKUDS/nanobot#5498](https://github.com/HKUDS/nanobot/pull/5498) |
| PR #5495 | 0 评论（p2） | 新增原生 Linear Agent 聊天渠道，包含 OAuth+PKCE、 rotating token 以及 SQLite 持久化 webhook 队列。该功能直接响应了企业用户对项目管理工具集成的需求。 | [HKUDS/nanobot#5495](https://github.com/HKUDS/nanobot/pull/5495) |

> **背后诉求**：用户最迫切希望解决登录卡顿（Issue #5444），并在 TUI/WebUI 中获得更统一、可预览的配置与文档体验（#5493、#5498）。

### 5. Bug 与稳定性（今日报告的问题，按严重程度排序）

| 严重度 | 描述 | 关联 Issue/PR | 是否有修复 PR | 备注 |
|--------|------|----------------|--------------|------|
| **高** | **TUI 中无工具模型请求可能导致会话卡死**（无超时保护） | Issue 未直接报出，但 PR #5496 提供 fix | ✅ PR #5496（OPEN） | 需尽快合并，防止长时间占用资源。 |
| **高** | **OpenAI Codex 请求频繁重建 TLS 上下文导致延迟** | Issue 未直接报出，PR #5500 提供 fix | ✅ PR #5500（OPEN） | 并发场景尤为明显。 |
| **中** | **Docker 中 OAuth 凭据不可持久化导致登录失败** | Issue #5444（CLOSED） | ✅ PR #5445（CLOSED） | 已通过 #5445 解决。 |
| **中** | **WebUI 聚合 token 使用展示不准确（遗漏模型调用计数）** | Issue 未直接报出，PR #5490 提供 fix | ✅ PR #5490（OPEN） | 影响使用成本感知。 |
| **低** | **TUI 退出时未保存空会话，导致潜在内存泄漏** | Issue 未直接报出，PR #5499 提供 fix | ✅ PR #5499（OPEN） | 轻微，可在后续版本合并。 |
| **低** | **WebUI 中答案片段被误入推理区域（已修复）** | Issue 未直接报出，PR #5491 已合并 | ✅ 已合并 | 已解决。 |

> **总体稳定性**：已有针对高危回归的 PR 在审核中（#5496、#5500），建议优先合并；其余中低危问题均有对应的修复 PR。

### 6. 功能请求与路线图信号

| 功能需求 | 关联 Issue/PR | 现状 | 是否可能进入下一版本 |
|----------|----------------|------|----------------------|
| HTML / .txt / .md 文档预览（原生 iframe + srcdoc） | Issue #5493（OPEN） | 尚无实现 PR | 高 – 需求明确，易于原型实现。 |
| 配置统一编辑器（完整 schema、秘密脱敏、共享存储） | PR #5498、#5497（均 OPEN） | 设计已完成，等待合并 | 高 – 与现有 WebUI 设置共享存储，实现成本中等。 |
| 原生 Linear Agent 渠道（OAuth+PKCE、 rotating token、持久化 webhook 队列） | PR #5495（OPEN） | 功能基本完成，待合并 | 中‑高 – 需要进一步的端‑到‑端测试。 |
| CLI 进程身份命名（已实现） | PR #5492（CLOSED） | 已合并 | 已交付。 |
| 用户可控 turn recovery（已实现） | PR #5420（CLOSED） | 已合并 | 已交付。 |

> **路线图暗示**：围绕**配置统一**、**多渠道预览**以及**企业级集成（Linear）** 的工作正在加速，预计将在下一个里程碑版本中一起推出。

### 7. 用户反馈摘要（从 Issues 评论提炼）

- **登录卡顿**（Issue #5444）：用户描述在 Docker 容器里通过 OAuth 授权码交换时卡住，需手动粘贴回调 URL。评论中指出，容器重启后凭据丢失导致每次都要重新授权，影响自动化工作流。  
- **文档预览需求**（Issue #5493）：用户期望在聊天界面直接查看附件的 HTML、Markdown、纯文本内容，而不必下载。建议使用 iframe+srcdoc 以获得安全沙箱。  
- **配置复杂性**：多个 PR（#5498、#5497）的出现表明现有配置入口分散，用户希望有一个统一的、可搜索的设置页，尤其是对密钥等敏感信息的处理。  
- **进程可见性**：PR #5492 获得赞同（虽然评论为 0），表明运维和调试同感受到“无法快速定位哪个进程对应哪个角色”的痛点。  

> **总体情绪**：用户对核心功能（代理、对话）基本满意，但在部署便利性（Docker 凭据持久化）、使用便利性（文档预览、统一配置）以及可观测性（进程命名、资源泄漏）方面仍有改善空间。

### 8. 待处理积压（长期未响应的重要 Issue/PRs）

| 项 | 创建时间 | 未更新天数 | 关键内容 | 链接 |
|----|----------|-----------|----------|------|
| PR #5152 | 2026‑07‑28 | 27 天 | subagent 部分完成结果的标记，防止模型错误推断未完成任务。 | [HKUDS/nanobot#5152](https://github.com/HKUDS/nanobot/pull/5152) |
| PR #5385 | 2026‑08‑13 | 11 天 | Matrix 元素 SAS 请求流程完善。 | [HKUDS/nanobot#5385](https://github.com/HKUDS/nanobot/pull/5385) |
| PR #5388 | 2026‑08‑13 | 11 天 | 预算控制的 model‑visible MCP 工具 schema。 |

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**日期：2026-08-24**
**数据周期：过去 24 小时**

---

## 1. 今日速览

Hermes Agent 今日继续保持高度活跃的工程节奏，过去 24 小时共有 **50 条 Issue 更新**（46 新开/活跃，4 已关闭）和 **50 条 PR 更新**（48 待合并，2 已合并/关闭），无新版本发布。项目当前的核心关注点集中在 **Bot Mode 稳定性、子进程安全边界、跨平台安装与更新体验** 三大方向。安全相关 Issue 出现了 2 条标记为 CRITICAL/HIGH 的子进程凭据泄露风险，提示维护团队需优先处理。整体而言，项目处于密集修缮期，社区贡献活跃，PR 待合并池较大（48 条），合并压力值得关注。

---

## 2. 版本发布

**本周期无新版本发布。**

当前最新版本仍为社区中提及的 v0.20.5（commit `b2c4f1f376` / `f293e7206`），多项 Bug 与安全问题正围绕该版本复现与修复。

---

## 3. 项目进展

### 已合并/关闭 PR

- **[PR #93217](https://github.com/NousResearch/hermes-agent/pull/93217)** `fix(bot-mode): resurrect canonical Bot Chat archived by recoverable reasons on reopen` — 修复 Bot Mode 下 WebSocket 掉线后 `ws_orphan_reap` 归档的 "Bot Chat" 永久会话无法复活、每次点击都生成临时会话的问题。Close #92687。Bot Mode 的会话可靠性向前迈进一步。

- **[PR #93217 同期关闭的 #92687](https://github.com/NousResearch/hermes-agent/issues/92687)** 标志着 Bot Mode 永久会话管理这一长期痛点获得首轮闭环修复。

### 待合并但已通过 CI 准备就绪的重点 PR

- **[PR #93042](https://github.com/NousResearch/hermes-agent/pull/93042)** `feat(update): complete Phase 4 fleet UX and canary rollouts` — 完成 #91277 的 Phase 4，含完整的 5×2×3 对抗验证证据，是 Hermes 跨平台更新体验走向成熟的关键里程碑。
- **[PR #92616](https://github.com/NousResearch/hermes-agent/pull/92616)** `feat: expose live Discord adapter health in gateway state` — 将 Discord 适配器实时健康度写入 `gateway_state.json`，补齐可观测性短板。
- **[PR #92633](https://github.com/NousResearch/hermes-agent/pull/92633)** `fix(terminal): gate lifecycle block on process ownership, not inherited env` — 用 PID 文件取代易被伪造的环境变量，关闭一处权限边界缺陷。
- **[PR #92596](https://github.com/NousResearch/hermes-agent/pull/92596)** `fix(mcp): reconnect when server credentials change` — MCP 会话在凭据变更后能自动重连，无需重启。
- **[PR #93249](https://github.com/NousResearch/hermes-agent/pull/93249)** `fix(browser): recover Camofox stale tabs on HTTP 410 Gone` — 浏览器工具在 Camofox 后端重启后的自愈能力补完（410 错误恢复）。
- **[PR #93252](https://github.com/NousResearch/hermes-agent/pull/93252)** `fix(security): exclude credential stores from profile clone-all` — `profile create --clone-all` 不再携带 `.env` 与 `auth.json`，降低凭据误传风险。
- **[PR #93253 / #93254 / #93255](https://github.com/NousResearch/hermes-agent/pull/93253)** 一组 OAuth 凭据管理修复：避免 MiniMax OAuth 重复入库、凭据删除的耐久性、按稳定账户主体 upsert，覆盖 OpenAI/MiniMax/Nous/Codex/xAI 多个 Provider。

**整体评估**：今日 Bot Mode 与 Auth/MCP 两条主线均有实质推进，但合并速度（2/50）落后于产出速度（50/24h），建议维护者集中清理积压 PR。

---

## 4. 社区热点

### 高讨论度 Issues（按评论数）

- 🔥 **[Issue #66616](https://github.com/NousResearch/hermes-agent/issues/66616)** — `[skills-index-watchdog] Skills index is stale or degraded`，**83 条评论**。Skills Hub 的统一索引自 7 月起多次探针失败（最新：29.8h 旧，超过 26h 限制）。这是当前最久拖未决的运营级问题，反映出 GitHub Workflow cron（6/18 UTC）+ Deploy 工作流的可靠性需要重构。
- 👍 **[Issue #18715](https://github.com/NousResearch/hermes-agent/issues/18715)** — `Support remote Hermes agent with local tool execution`，**26 👍 / 16 评论**。社区呼声最高的 Feature Request：远端 Agent + 本地工具执行的混合部署模型，触及会话、技能、内存、Provider 配置的全栈复用。`needs-decision` 标签表明方案尚需架构权衡。
- **[Issue #67605](https://github.com/NousResearch/hermes-agent/issues/67605)** — Dashboard/desktop profile 切换为"半切换"（MCP 工具不加载，`secrets/${VAR}` 解析错误），**8 评论**。直接破坏多 Profile 用户的工作流。
- **[Issue #93063](https://github.com/NousResearch/hermes-agent/issues/93063)** — Fedora 44 安装脚本失败，**8 评论**。Linux 发行版兼容性回归，影响企业/开发者采用面。
- **[Issue #93091](https://github.com/NousResearch/hermes-agent/issues/93091)** — Bot Mode 可靠性计划（类型化失败原因、envelope TTL、leader 路由组群），**6 评论**。是社区对 Bot Mode 系统性补强的纲领性提案。

**诉求分析**：高赞/高评论 Issue 集中指向**部署模型扩展（远程 Agent）**、**基础设施可靠性（Skills 索引、Profile 切换）**、**Bot Mode 健壮性**三类，提示下一阶段路线图应重点投入。

---

## 5. Bug 与稳定性

### 🔴 Critical / High 严重度（需优先处理）

| Issue | 标题 | 组件 | 状态 |
|---|---|---|---|
| [#93230](https://github.com/NousResearch/hermes-agent/issues/93230) | **[CRITICAL P0]** `tui_gateway/host_supervisor.py` 子进程凭据环泄露（scrub 后被 `env.update(os.environ)` 覆盖） | tui_gateway | **无 fix PR** |
| [#93233](https://github.com/NousResearch/hermes-agent/issues/93233) | **[HIGH P1]** `agent/lsp/client.py:292` `dict(os.environ)` 导致 LSP spawn 全凭据泄露（影响 pyright/typescript/gopls/rust-analyzer） | lsp | **无 fix PR** |

### 🟠 P2 严重度（影响主流程）

| Issue | 标题 | 是否已有 fix PR |
|---|---|---|
| [#67605](https://github.com/NousResearch/hermes-agent/issues/67605) | Dashboard/desktop profile 切换部分生效，MCP/secret 解析错位 | ❌ |
| [#93063](https://github.com/NousResearch/hermes-agent/issues/93063) | Fedora 44 安装失败 | ❌ |
| [#91115](https://github.com/NousResearch/hermes-agent/issues/91115) | macOS 更新后 Keychain 反复弹窗（ad-hoc 签名导致 ACL 失效） | ❌ |
| [#91675](https://github.com/NousResearch/hermes-agent/issues/91675) | Windows gateway 6s liveness 后假死；冷启动只恢复 active profile | ❌ |
| [#93022](https://github.com/NousResearch/hermes-agent/issues/93022) | 防抖动熔断器误触发，整段会话压缩永久禁用（v0.20.5 可复现） | ❌ |
| [#92859](https://github.com/NousResearch/hermes-agent/issues/92859) | Discord DM `delegate_task` 子代理窃取父路由键，父会话被 `session_switch` 终止 | ❌ |
| [#93215（PR）](https://github.com/NousResearch/hermes-agent/pull/93215) | SSH config 写入审批门 100% `TypeError`（`single_query_deny_message` 缺参） | ✅ PR 待合并 |

### 🟡 P3 / 其他

- [#92361](https://github.com/NousResearch/hermes-agent/issues/92361) camofox 首次绘制慢导致 navigate 失败 ✅ [PR 待合并 #93249 关联]
- [#80276](https://github.com/NousResearch/hermes-agent/issues/80276) Camofox HTTP 410 后 stale tab 卡死 ✅ [PR #93249](https://github.com/NousResearch/hermes-agent/pull/93249)
- [#76175](https://github.com/NousResearch/hermes-agent/issues/76175) iMessage 原生投票静默丢弃
- [#93235](https://github.com/NousResearch/hermes-agent/issues/93235) Desktop SSH 远程 + Bot Mode 后端通道重复，Send 静默失效
- [#93197](https://github.com/NousResearch/hermes-agent/issues/93197) Desktop "Show all profiles" 每次重启都需手动重设
- [#82010](https://github.com/NousResearch/hermes-agent/issues/82010) 零工具状态配置 fail-open（安全敏感）
- [#93143](https://github.com/NousResearch/hermes-agent/issues/93143) BlueBubbles 附件上传在事件循环同步 I/O（性能）

**观察**：本周期高严重度安全 Issue 集中爆发在**子进程环境变量清理失效**这一类系统性缺陷，建议团队横向扫描所有 `dict(os.environ)` 与 `env.update(os.environ)` 调用点。

---

## 6. 功能请求与路线图信号

| 提案 | 链接 | 信号 |
|---|---|---|
| **远程 Agent + 本地工具执行**（混合部署） | [#18715](https://github.com/NousResearch/hermes-agent/issues/18715) | 👍26，是社区最强需求之一，架构决策待定 |
| **Bot Mode 可靠性计划**（类型化失败原因 / TTL / 注意力徽章 / leader 路由） | [#93091](https://github.com/NousResearch/hermes-agent/issues/93091) | 与今日 #93217/#93077/#93222 一组修复同向，路线图明确 |
| **完整可机读 model-facing 工具枚举端点** | [#92711](https://github.com/NousResearch/hermes-agent/issues/92711) | 服务于 Agent 隔离验证（安全合规方向） |
| **`pre_api_request` 升级为 Transform hook**（插件可改 model/provider/base_url） | [#90432](https://github.com/NousResearch/hermes-agent/issues/90432) | 提升插件可扩展性 |
| **Kanban 原生工作流聚合**（持久化、重放、并发合约） | [PR #75281](https://github.com/NousResearch/hermes-agent/pull/75281) | 已挂 PR，决策待定 |
| **Cron 会话按 job tag 过滤** | [#93176](https://github.com/NousResearch/hermes-agent/issues/93176) | 跟随 #68482/#68820 的元数据扩展 |
| **OpenRouter 目录新增 Inkling 免费模型** | [PR #93250](https://github.com/NousResearch/hermes-agent/pull/93250) | 即将可用，扩展模型选择面 |
| **Interactive skin selector + 自动昼夜主题**（curses UI） | [#46150](https://github.com/NousResearch/hermes-agent/issues/46150) | UX 改进，长期挂起 |

**路线图判断**：Bot Mode 健壮性（#93091）已具备 "issue 纲领 + 多 PR 实施" 的清晰推进结构，最有可能进入下个版本；远程 Agent（#18715）属架构级变更，需设计文档先行。

---

## 7. 用户反馈摘要

- **多 Profile 用户感到挫败**：#67605、#82010、#93197、#93235 多条都指向"Profile 切换不是所见即所得"，跨表面（Desktop/TUI/Dashboard/SSH）的会话与凭据边界存在系统性不一致。
- **Bot Mode 用户对"自动化失控"敏感**：#93129 中用户反映 bot 在被显式 stop 后仍自行 resume 并规划任务，反映出 Bot 终止语义不清晰（缺少 `needs-decision` 标签）。
- **Windows / macOS / Linux 三端体验落差大**：Windows gateway 冷启动 (#91675)、macOS Keychain 弹窗 (#91115)、Fedora 安装失败 (#93063) 集中出现，非 macOS 用户感到二等公民。
- **Discord 用户遭遇会话路由灾难**：#92859 中 `delegate_task` 让父会话被替身终止 6 分钟，影响批量委派类工作流。
- **正向信号**：Bot Mode canonical session 复活机制（#92687 → #93217）的快速闭环，以及 Discord 实时健康度（PR #92616）这类可观测性增强受到欢迎。
- **企业采用门槛信号**：#18715（远程 Agent）的 26 👍 暗示已有团队在尝试多机部署但被当前架构阻塞。

---

## 8. 待处理积压（提醒维护者）

| Issue/PR | 标题 | 开放时长 | 提示 |
|---|---|---|---|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | Skills index stale/degraded | **~37 天**（07-18 起） | 最高评论数（83），需专门 owner |
| [#18715](https://github.com/NousResearch/hermes-agent/issues/18715) | Remote Hermes + local tools | **~114 天**（05-02 起） | 👍26，需要架构决策会议 |
| [#64704](https://github.com/NousResearch/hermes-agent/issues/64704) | Weixin iLink 图片发送 ret:-2 | **~40 天** | 微信生态完全中断，三种发送路径全堵 |
| [#82010](https://github.com/NousResearch/hermes-agent/issues/82010) | 零工具状态 fail-open（安全敏感） | **~16 天** | 等待 fix PR |
| [#46150](https://github.com/NousResearch/hermes-agent/issues/46150) | Interactive skin selector | **~71 天** | 长期挂起 Feature |
| [PR #75281](https://github.com/NousResearch/hermes-agent/pull/75281) | Kanban native workflow aggregates | **~24 天** | 大型 Feature PR 待审 |
| [PR #56766](https://github.com/NousResearch/hermes-agent/pull/56766) | `kanban list --all` cross-board | **~53 天** | 已关闭的 #54464 待合并 |
| [PR #80758](https://github.com/NousResearch/hermes-agent/pull/80758) | hashline-guard content-addressed patches | **~17 天** | 增强插件安全模型 |

**积压特征**：当前积压集中在三类——**运营基础设施（Skills 索引）**、**架构级 Feature（远程 Agent / Kanban 工作流）**、**安全修复（零工具状态 / 子进程 env）**。建议维护者本周优先清理 2 条 P0/P1 安全 Issue 与 Bot Mode 收尾 PR 群。

---

*本报告基于 GitHub 公开数据自动生成，仅反映过去 24 小时窗口的项目动态；长期趋势需结合多日数据综合判断。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报

**日期**：2026-08-24
**数据来源**：[github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw)

---

## 1. 今日速览

PicoClaw 过去 24 小时整体活跃度处于**较低水平**，呈现典型的「stale 清理日」特征：当日所有 2 条 Issue 与 5 条 PR 均被系统标记为 `[stale]` 后关闭，无新增 Issue 或活跃讨论。剩余 2 条待合并 PR（#3344 新提交的设备配对功能、#3222 长期开放的 DeltaChat 重构）成为社区当前主要的待处理工作。无新版本发布，项目节奏整体偏冷清，但安全相关的 SSRF 修复 PR 集中关闭表明项目在治理积压。

---

## 2. 版本发布

无新版本发布。本日无 Release 活动。

---

## 3. 项目进展

今日合并/关闭的 PR 共 5 条，整体方向集中在**安全性加固**与**性能优化**，呈现以下几类推进：

### 🔒 安全合规：多通道 SSRF 防护统一化（重点）

贡献者 [SashaMIT](https://github.com/sashaMIT) 的三个 PR 形成完整闭环，将平台原有分散的 HTTP 客户端统一接入 SSRF 防护：

- [PR #3322](https://github.com/sipeed/picoclaw/pull/3322) `fix(channels): block private targets on inbound media downloads`
  - 为 QQ / Telegram / Discord / LINE / Slack 的入站附件下载统一加上 `BlockPrivateTargets` 防护（仅 OneBot 此前已具备），修复了攻击者可通过伪造媒体 URL 触发 loopback / RFC1918 内网请求的风险。
- [PR #3323](https://github.com/sipeed/picoclaw/pull/3323) `fix(wecom): use CreateSafeHTTPClient for media downloads`
- [PR #3324](https://github.com/sipeed/picoclaw/pull/3324) `fix(weixin): use CreateSafeHTTPClient for media downloads`

### ⚡ 性能与依赖更新

- [PR #3321](https://github.com/sipeed/picoclaw/pull/3321) `fix(agent): move dynamic context after history to preserve prefix caching`
  - 由 [grrowl](https://github.com/grrowl) 提交。把 `## Current Time / Runtime / Session / Sender` 等每请求动态上下文从系统提示词开头移到历史之后，借助 LLM 推理引擎的位置前缀缓存（positional prefix caching），降低长对话场景下的 token 重复计算开销。
- [PR #3320](https://github.com/sipeed/picoclaw/pull/3320) `fix(deps): bump whatsmeow to unblock WhatsApp "client outdated (405)"`
  - 升级 `whatsmeow` 依赖，修复 WhatsApp 原生通道因客户端版本过旧被服务器以 `405 Client outdated` 拒绝连接、5 秒后掉线且无重连的致命故障，让原生 WhatsApp 通道恢复可用。

**总结**：本日合并/关闭的 5 条 PR 共同推进了项目在 **SSRF 安全面收敛、WhatsApp 通道恢复、LLM 推理成本优化** 三条主线上的健壮性，属于「积压治理型」而非「功能推进型」。

---

## 4. 社区热点

本日社区讨论热度极低，全部 Issue 与 PR 均无新增评论，`stale` 机器人自动清理是主要事件源：

- [Issue #3302](https://github.com/sipeed/picoclaw/issues/3302)（4 条评论）— 关于为 MCP 服务器支持 OAuth 2.1 的功能请求，是昨日评论数最高的 Issue，但今日已被系统关闭。
- [Issue #3325](https://github.com/sipeed/picoclaw/issues/3325)（2 条评论）— 关于在 Telegram 中使用 Bot API 10.1 的 `rich messages` 原生表格渲染能力。

**诉求分析**：两条被关闭的 Issue 分别代表两类典型诉求——**协议标准化**（OAuth 2.1）与**渲染体验升级**（原生表格）。两者均带有「Enhancement」标签，因长期无人响应而被 stale 机制清理，社区参与度有待激活。

---

## 5. Bug 与稳定性

今日无新增 Bug 报告，但有两条历史严重问题随 PR 关闭得到处理：

| 严重程度 | 问题 | 状态 | 链接 |
|---|---|---|---|
| 🔴 高 | WhatsApp 原生通道被服务端以 `405 Client outdated` 拒绝，5 秒后掉线且无重连 | ✅ 已有 fix PR（#3320，今日关闭 stale） | [#3320](https://github.com/sipeed/picoclaw/pull/3320) |
| 🟠 中-高 | QQ/Telegram/Discord/LINE/Slack 入站媒体下载未启用 `BlockPrivateTargets`，存在 SSRF 风险 | ✅ 已有 fix PR（#3322，今日关闭 stale） | [#3322](https://github.com/sipeed/picoclaw/pull/3322) |
| 🟡 中 | WeCom / Weixin 媒体下载 HTTP 客户端未走安全通道，redirect 可达 loopback/私网 | ✅ 已有 fix PR（#3323、#3324，今日关闭 stale） | [#3323](https://github.com/sipeed/picoclaw/pull/3323) / [#3324](https://github.com/sipeed/picoclaw/pull/3324) |

**注**：这些 PR 被标记为 stale 并自动关闭，但其中安全相关修复（尤其 WhatsApp 405 与 SSRF）仍需维护者手动 reopen 并合并，否则生产环境将持续面临风险。

---

## 6. 功能请求与路线图信号

今日两条被关闭的功能请求虽未进入正式 Roadmap，但反映出社区的明确方向：

- **MCP OAuth 2.1 支持**（[#3302](https://github.com/sipeed/picoclaw/issues/3302)）— 引用关联 issue [#2546](https://github.com/sipeed/picoclaw/issues/2546)，作者标注为「Nice-to-Have」，与 MCP 生态标准化趋势一致，具备被纳入中版本路线图的潜力。
- **Telegram 原生表格渲染**（[#3325](https://github.com/sipeed/picoclaw/issues/3325)）— 利用 Telegram Bot API 10.1 的 `rich messages` 能力，将 Markdown 表格由代码块降级渲染升级为原生 UI，对运营类用户有较强吸引力。

另有两项长期开放 PR 体现路线图新方向：
- [PR #3344](https://github.com/sipeed/picoclaw/pull/3344) **Build Remote Agent 设备配对**（gbr/1 协议，QR + 8 位配对码，仅绑定 127.0.0.1:8788 / stdio）— 引入移动端 spectate 模式，扩展多端协同能力。
- [PR #3222](https://github.com/sipeed/picoclaw/pull/3222) **DeltaChat 通道重构**（-200 LOC，删除遗留特性、引用官方 relay 列表、废弃密码配置）— 精简实现，文档完善。

---

## 7. 用户反馈摘要

由于本日所有讨论均为 stale 关闭且无新增评论，从历史 Issue 中可提炼出以下真实诉求：

- **MCP 生态集成**（[#3302](https://github.com/sipeed/picoclaw/issues/3302)）：用户希望 PicoClaw 与上游 MCP 服务器鉴权体系对齐，反映出企业级部署对 OAuth 2.1 的实际需求。
- **富格式渲染**（[#3325](https://github.com/sipeed/picoclaw/issues/3325)）：用户明确表达对当前 Telegram Markdown 表格退化为代码块的不满，期望 Bot API 10.1 的原生表格 UI。
- **安全性期望**：PR 贡献者自驱的安全加固行为（SashaMIT）说明社区对 SSRF / 私网请求防护的重视程度，且发现 iLink、WeCom、Weixin 等多个通道存在同类隐患。

**满意度信号**：社区尚未表达明显的满意/不满意情绪反馈，但 stale 清理机制本身暴露了**维护者响应链路偏长**的潜在问题。

---

## 8. 待处理积压

以下 PR 当前仍处于 OPEN 状态，建议维护者优先关注：

| PR | 标题 | 状态 | 链接 |
|---|---|---|---|
| #3222 | refactor(deltachat): cleanup implementation, documentation -200LOC | OPEN（已开放 ~52 天，最早创建于 2026-07-03） | [链接](https://github.com/sipeed/picoclaw/pull/3222) |
| #3344 | Add Build Remote Agent phone pairing (gbr/1) | OPEN（2026-08-23 新开） | [链接](https://github.com/sipeed/picoclaw/pull/3344) |

**维护者提醒**：

1. **安全性 PR 复核**：#3320（WhatsApp 405）、#3322–#3324（SSRF 防护）虽被 stale 自动关闭，但其修复内容对生产稳定性与安全合规至关重要，建议维护者手动 reopen 并评估合并。
2. **#3222 长期挂起**：DeltaChat 通道重构已开放近两个月，建议维护者明确接受或拒绝策略，避免长期阻塞。
3. **stale 策略审视**：单日 7 条 PR、2 条 Issue 全部因 stale 关闭，建议项目组评估是否需要调宽 stale 阈值或增加主动审查频率，避免优质贡献被自动机制吞没。

---

*日报生成时间：2026-08-24 | 数据周期：2026-08-23 至 2026-08-24*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-08-24

## 一、今日速览

今日 NanoClaw 项目整体活跃度**偏高**，过去 24 小时共产生 4 条 Issue 更新（3 条新开/活跃、1 条关闭）和 50 条 PR 更新（30 条待合并、20 条已合并/关闭）。核心团队正在推进一系列**通道层依赖升级与基础设施修复**（Chat SDK 4.32.0 锁定升级、pnpm minimumReleaseAge 门控、typing-indicator 生命周期声明），并已为上游修复准备好了完整的 stacked PR 链。值得关注的是，**3 条新 Issue 中有 2 条与消息交付/轮询稳定性相关**（#3455、#3457），均为中高风险问题。另有 4 个新功能/集成类 PR 提交（#3494/#3493/#3489/#3355/#3356），涉及新 provider 适配，社区贡献活跃。今日无新版本正式发布（但 v2.3.0 的 release PR #3495 已合并，见下文说明）。

## 二、版本发布

今日正式 Release 数量为 0。但值得注意：**v2.3.0 的 release PR（#3495）已合并**，版本号已升至 2.3.0，各 `[BREAKING]` 条目均保留了迁移说明，正式 tag 与发布公告预计将于近日落地。请使用者提前关注 CHANGELOG 中**破坏性变更**对应的迁移路径。此外，合并 PR #3496 将镜像重新钉到 `hardened-2026-08-23`，修复了 **2026-08-21 起新安装环境 setup 失败**的问题（锁 sha256 标签比对失败导致无法拉取可用镜像），运维人员部署新版本时可一并受益。

## 三、项目进展

今日项目核心推进集中在**基础设施稳定性和通道层依赖升级**，主要方向包括：

- **发布与版本修复**：v2.3.0 release PR（#3495）正式合并；同时重钉 hardened 镜像（#3496）修复 8 月 21 日起的安装失败问题，两条 PR 均已在今日关闭。
- **Chat SDK 4.32.0 锁定升级**：核心团队今日对 `main` 分支推起了 **3 层 stacked PR 链**（#3490 ← #3491 ← #3492），依次覆盖：① Chat SDK 核心及所有 channel skill 固定到 4.32.0；② 允许通道适配器声明 typing-indicator 生命周期（WhatsApp 25 秒等）；③ 开启 pnpm minimumReleaseAge 门控并加回归测试。该链尚未合并但 CI 已就绪，底部的 #3490 合并后其余会自动 retarget。其对应的 channels/providers 分支 twin PR（#3465/#3468/#3470/#3471）也已在今日提交。
- **新 provider 与集成**：新增 **Build Remote Agent 手机配对适配器**（#3494，gbr/1 协议）、**MindsHub 提供方指南与 setup skill**（#3493，文档类）、**Cursor Agent SDK 接入**（#3355/#3356）、**Codex provider 结构化 setup-driver 认证**（#3489），均处于待评审状态，表明项目在 provider 生态扩展上持续收编外部贡献。
- **遗留功能持续优化**：Signal 适配器附件路径修复（#3142）与 GitHub polling 模式（#2301）虽为 5 月/7 月提出的 PR，今日仍有更新，处于持续推进状态。

## 四、社区热点

今日讨论最热门的条目是 **Issue #2404**（4 条评论，为今日最高）：

> **[OPEN] Double delivery when agent uses send_message MCP tool and \<message\> blocks in the same turn** by mshirel
> https://github.com/nanocoai/nanoclaw/issues/2404

**诉求分析**：该问题触发于 agent 同时通过 `send_message` MCP 工具与 `<message>` 块输出同一文本时，消息会被**双重投递**。作者已定位到根因：MCP 服务器（`StdioServerTransport`）在**独立子进程**中运行，与主轮询链路各自输出。该问题能引发聊天通道的重复消息与用户困惑，社区讨论集中于如何统一两条输出路径。结合今日 #3457（重试中的 UNIQUE 约束崩溃）也涉及重复投递症状，可推断**消息去重与幂等投递**是当前稳定性短板中的高频关注点。

## 五、Bug 与稳定性

按严重程度排列：

| 严重程度 | Issue | 状态 | 摘要 | 是否有 fix PR |
|---|---|---|---|---|
| **高** | [#3455](https://github.com/nanocoai/nanoclaw/issues/3455) | OPEN | `poll-loop` 心跳问题：claim 与首个 SDK 事件之间未刷新心跳，导致 claim-stuck watchdog（60s）误杀**正常忙碌（而非卡死）**的 turn，且无自愈，会无限重复失败，可能永久阻塞某会话的回复 | 暂无 |
| **高** | [#3456](https://github.com/nanocoai/nanoclaw/issues/3456) | **CLOSED** | chat-sdk-bridge 中 ask_question 卡片按钮**同时带上 `id` 和 `value`** 导致 Discord approval 的 custom_id 损坏，造成静默拒绝+重复重发；含"数据未被破坏"等描述 | ✅ 已关闭，说明修复已合入 |
| **中** | [#3457](https://github.com/nanocoai/nanoclaw/issues/3457) | OPEN | `insertMessage()` 使用普通 `INSERT`，在**同一 message id 重试投递**时触发 UNIQUE 约束崩溃，表现为反复 "Message delivery failed, will retry"，并可能放大重复消息问题 | 暂无 |
| **中** | [#2404](https://github.com/nanocoai/nanoclaw/issues/2404) | OPEN | agent 同时使用 `send_message` MCP 工具与 `<message>` 块时消息**双投递**；根因：MCP 服务器运行于独立子进程，与主链路各自输出 | 暂无（社区已有讨论） |

**综合判断**：今日 4 条 Issue 中有 3 条指向消息链路（投递、重试、去重），1 条指向轮询状态机。其中 #3456 已修复关闭，说明团队对高风险问题响应较快；但 #3455 与 #3457 尚无 fix PR，且 #3455 可能导致**永久性会话阻塞**，建议优先跟进。

## 六、功能请求与路线图信号

- **Provider 生态扩展**：今日新增 4 个 provider/skill 相关 PR —— **Build Remote Agent 手机配对**（#3494，支持通过 QR 码/8 位码让手机旁观桌面 agent）、**Cursor Agent**（#3355/#3356）、**Codex 认证改造**（#3489）、**MindsHub 文档指南**（#3493）。可见项目正积极拥抱多 provider 生态，下一版本大概率会纳入上述新接入或至少合入其中依赖检查合规的几个。
- **通道能力增强**：核心团队的 **typing-indicator 生命周期声明**（#3491，如 WhatsApp 25s 打字指示器）处于 PR 链中，是近期**明确的通道层功能增强**，随 v2.3.x 后续迭代落地的可能性较高。
- **SDK 版本统一加固**：Chat SDK 4.32.0 固定升级 + pnpm 发布门控（#3490/#3492），反映团队在**供应链/依赖可靠性治理**上的投入，属工程基础设施方向。

## 七、用户反馈摘要

- **消息重复/双投递是高频痛点**：#2404（MCP+消息块双投递）和 #3457（重试触发约束崩溃导致重复错误）虽然根因不同，但用户侧表现趋同——聊天通道出现**重复消息**，且 #3457 反复出现 "Message delivery failed, will retry" 会持续打扰用户，易造成信任感下降。
- **Discord 审批卡片此前不可用**（#3456）：`ask_question` 卡片上的每个按钮点击都会解析到错误选项，属于"每个点击都错"级别的体验问题，已被修复关闭。社区用户（DawoudIO）做了较详尽的 root-cause 分析，说明其参与深度较高。
- **安装与部署的阻点**（PR #3496）：2026-08-21 起新安装环境被迫 enable，带 label 版本比对失败导致 setup 无法完成——社区期望维护对镜像锁版本的响应速度（当前已用 stopgap 修复）。

## 八、待处理积压

**长期未合并的 PR（需维护者关注优先级）：**

| PR | 主题 | 创建时间 | 最近更新 | 状态 |
|---|---|---|---|---|
| [#2301](https://github.com/nanocoai/nanoclaw/pull/2301) | GitHub polling 模式 + 安全秘钥合并 | 2026-05-06 | 2026-08-23 | OPEN（超过 3 个月） |
| [#2537](https://github.com/nanocoai/nanoclaw/pull/2537) | CI：pre-commit hooks（prettier/eslint/typecheck/vitest） | 2026-05-18 | 2026-08-23 | OPEN（超过 3 个月） |
| [#3142](https://github.com/nanocoai/nanoclaw/pull/3142) | Signal 附件路径修复（改为挂载的 inbox） | 2026-07-27 | 2026-08-23 | OPEN（约 1 个月） |

**无 fix PR 的高风险 Issue（需尽快安排）：**

- [#3455](https://github.com/nanocoai/nanoclaw/issues/3455)（claim 心跳 watchdog 误杀，可能永久阻塞回复）
- [#3457](https://github.com/nanocoai/nanoclaw/issues/3457)（UNIQUE 约束崩溃在重试场景触发）
- [#2404](https://github.com/nanocoai/nanoclaw/issues/2404)（MCP 与消息块双投递）

**整体健康度评估**：核心团队对通道层基础设施的治理力度明显增强（stacked PR 链模式 + 版本门控），高风险 Issue 响应速度尚可（#3456 当日修复）；但消息投递幂等性相关缺陷有所抬头，且存在多个月未动的功能 PR 积压，建议在下一版本迭代中平衡"新集成扩张"与"存量稳定性修复"的投入比重。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw 项目日报 – 2026‑08‑24**  
*数据来源：GitHub仓库 `nullclaw/nullclaw`（Issues/PRs 最近 24 h）*

---

## 1. 今日速览
- 项目在过去 24 小时内仅有 **1 条新开 Issue**（#991），**无 PR**、**无新版本发布**。  
- 开发活动处于低谷，整体活跃度偏低，但已有社区成员开始讨论一个潜在的稳定性问题。  
- 目前尚未有维护者对该 Issue 作出回应或标记优先级，后续跟进将决定是否需要尽快修复。

## 2. 版本发布
> **今日无新版本发布**。（如有后续版本，请参考项目的 Releases 页面。）

## 3. 项目进展
- **今日无 PR 被合并或关闭**。因此代码库在功能或修复方面没有直接前进的里程碑。  
- 项目进展主要依赖于后续 Issue 的讨论和可能的修复提交。

## 4. 社区热点
| 热点类型 | 编号 | 链接 | 评论数 | 👍 | 简要描述 |
|----------|------|------|--------|----|----------|
| Issue（活跃） | #991 | [nullclaw/nullclaw#991](https://github.com/nullclaw/nullclaw/issues/991) | 2 | 0 | 描述在 Proxmox 环境下，`nullclaw agent` 因 stdio MCP 被长期网关占用而可能无限期挂起。 |

- 该 Issue 是今日唯一的讨论点，评论集中在复现步骤、环境细节（Proxmox CT 151、NullClaw 2026.8.22、只读 Proxmox MCP 桥接）以及可能的临时 workaround（例如手动释放锁或调整启动顺序）。  
- 尽管目前点赞数为 0，但涉及的场景（Proxmox 虚拟化环境下的守护进程交互）对部分生产用户具有实际影响，因而值得关注。

## 5. Bug 与稳定性
| 严重程度 | Issue | 链接 | 现状 | 是否有修复 PR |
|----------|-------|------|------|----------------|
| 中等（可能导致服务不可用） | #991 – MCP stdio 调用在 Proxmox launcher 锁定后无限期挂起 | [#991](https://github.com/nullclaw/nullclaw/issues/991) | 新开，等待 triage | 无 |

- 挂起会导致 agent 无法响应，进而影响依赖其 MCP 调用的自动化流程。虽然目前尚未有明确的崩溃日志，但 **可重现的无响应** 属于稳定性风险，建议维护者尽快评估并提供临时缓解方案或根本修复。

## 6. 功能请求与路线图信号
- **今日无新功能请求 Issue**。  
- 现有 Issue #991 指出了一种**资源竞争**问题，若修复方案涉及改进 MCP 通信层的锁机制或增加超时/重试逻辑，这可能成为未来版本中的**稳定性增强**项，而非全新功能。

## 7. 用户反馈摘要（基于 Issue 评论）
- **复现环境**：用户在 Proxmox 容器中运行只读的 Proxmox MCP 桥接（约 148 工具），启动 `nullclaw-gateway.service` 后尝试独立调用 `nullclaw agent`，观察到进程卡住。  
- **痛点**：缺乏明确的超时机制导致手动干预（kill 进程）才能恢复，影响自动化部署和监控脚本的可靠性。  
- **满意度**：用户对 NullClaw 功能本身表示认可（“工具丰富、易于配置”），但对该特定集成场景下的容错能力提出改进需求。  
- **建议**：在评论中暗示可以在 agent 启动时检测 stdio MCP 是否已被占用，并在超时后返回明确错误而非挂起。

## 8. 待处理积压
| 项编号 | 类型 | 链接 | 未响应时长 | 备注 |
|--------|------|------|------------|------|
| #991 | Issue（Bug） | [#991](https://github.com/nullclaw/nullclaw/issues/991) | 1 天（新开） | 等待维护者 triage、标记优先级或提供临时 workaround。 |

- 目前这是仓库中唯一的未处理项，属于**高优先级候选**（因其可能导致服务不可用），建议项目维护者在接下来的工作周内进行评估，并考虑加入下一个补丁版本的修复计划。

---

### 总结
今日 NullClaw 项目处于相对静止状态：没有新代码合并，也没有版本发布。唯一的活跃议题是一个与 Proxmox 环境相关的潜在挂起 Bug（Issue #991），该问题涉及 stdio MCP 锁竞争，若不及时解决可能影响依赖该 agent 的自动化流程。社区反馈表明用户对功能满意，但在特定虚拟化场景下对容错性有更高期望。建议维护者尽快对 #991 进行 triage，给出临时缓解措施或制定修复路线图，以保持项目的稳定性声誉和用户信任。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw 项目动态日报 (2026‑08‑24)**  

---

### 1. 今日速览  
- 项目保持高活跃度：过去 24 小时产生 **9 条新/活跃 Issue**、**24 条 PR 更新**（其中 19 条待合并、5 条已合并/关闭），但未发布新版本。  
- 大部分活动集中在依赖升级与 CI 流水线改进（如 nextest 集成、工具链统一），以及若干功能原型（持久沙箱、建议生成、代理凭据绑定）的讨论与实现。  
- 今日合并的 PR 均为依赖哨兵（Dependabot）自动更新，未看到功能性代码的直接合并，说明主干开发仍在审查阶段。  
- 社区讨论最热的议题是 **#7732**（持久 per‑user sandbox 与 iron‑proxy），获得 9 条评论，表明该功能是当前优先级最高的技术需求。  
- 整体来看，项目处于“功能准备‑稳定化”阶段：核心架构改进正在进行中，而日常维护（依赖哨兵、CI 优化）持续推进。

### 2. 版本发布  
> 今日无新版本发布。

### 3. 项目进展（今日合并/关闭的重要 PR）  
| PR | 状态 | 主要内容 | 关联 Issue | 链接 |
|----|------|----------|------------|------|
| #7730 | CLOSED | **chore(deps)**: 将 *everything‑else* 依赖组在根目录批量升级 6 项（uuid、base64、toml 等） | 依赖维护 | [nearai/ironclaw#7730](https://github.com/nearai/ironclaw/pull/7730) |
| #7406 | CLOSED | **chore(deps)**: 更新 GitHub Actions 组（claude‑code‑action、setup‑node、swatinem/rust‑cache、docker/login-action）共 4 项 | CI 工作流 | [nearai/ironclaw#7406](https://github.com/nearai/ironclaw/pull/7406) |
| #7262 | CLOSED | **chore(deps)**: 升级 WASM 组（wit‑component、wit‑parser）共 2 项 | WASM 工具链 | [nearai/ironclaw#7262](https://github.com/nearai/ironclaw/pull/7262) |

> 以上三个 PR 均由 Dependabot 自动发起，属于例行依赖哨兵更新，未引入功能变更或破坏性改动。它们的合并有助于保持项目依赖链的最新状态，降低因已知漏洞导致的安全风险。

### 4. 社区热点（今日讨论最活跃的 Issues/PRs）  
- **#7732** – *[Epic] Persistent per‑user sandbox with iron‑proxy; defer loop executors*  
  - 评论数：9（今日最高）  
  - 链接：[nearai/ironclaw#7732](https://github.com/nearai/ironclaw/issues/7732)  
  - 热点背景：社区就如何实现“真正的持久用户沙箱”展开深度讨论，涉及 Docker 容器生命周期、`/workspace` 持久化以及 iron‑proxy 的出站凭据代理。该议题直接关联到 v1.4.0 里程碑，预计将成为下一个 minor 版本的核心特性。  

- **#7832** 与 **#7827** – Slack 产品反馈聚合（最近 3 小时）  
  - 各自评论数为 0，但均为自动化 triage 产生的 Issue，反馈量大（源自 #x-ai-product-feedback Slack 频道），表明社区正在通过 Slack 持续产出使用场景与痛点。  
  - 链接：[#7832](https://github.com/nearai/ironclaw/issues/7832)、[#7827](https://github.com/nearai/ironclaw/issues/7827)  

- **#7810** – *[feat(sandbox)] manifest‑declared direct‑exec credential bindings behind the managed proxy*  
  - 虽未显示评论数，但 PR 规格为 XL、风险 low，且与 #7732 紧耦合（实现持久沙箱的凭据代理），是当前技术实现的关键路径。  
  - 链接：[nearai/ironclaw#7810](https://github.com/nearai/ironclaw/pull/7810)  

### 5. Bug 与稳定性（今日报告的问题）  
| 严重度 | Issue | 简述 | 是否有对应 fix PR | 链接 |
|--------|-------|------|-------------------|------|
| 高 | #7830 – Notion extension fails to install in IronClaw | 用户反馈 Notion 工具安装失败，影响生态集成。 | 暂无直接 fix PR，需调查安装流程、UI 路由及权限。 | [#7830](https://github.com/nearai/ironclaw/issues/7830) |
| 高 | #7829 – Gmail setup fails in web UI with auth popup disappearing | 授权弹窗仅显示 1 秒即消失，导致 Gmail 无法完成 OAuth 流程。 | 暂无 fix PR，建议检查 WebUI 中的弹窗生命周期及后端代理转发。 | [#7829](https://github.com/nearai/ironclaw/issues/7829) |
| 中 | #7828 – Slack setup fails in NEAR Foundation account | 特定组织账号的 Slack 集合卡住，需认证流程排查。 | 暂无 fix PR。 | [#7828](https://github.com/nearai/ironclaw/issues/7828) |
| 中 | #7825 – Sandbox egress auth: native iron‑proxy recipes with host credential broker | 现有 GitHub‑specific 凭据代理亟需泛化，以免后续出现凭据泄露或失效。 | 已有相关实现 PR #7810（正在审查）。 | [#7825](https://github.com/nearai/ironclaw/issues/7825) |
| 低 | #7836 – Tool advertisement: filter by availability | 工具列表展示不可用功能，导致模型调用失败。 | 暂无 fix PR，但可在后续工具注册阶段加入可用性过滤。 | [#7836](https://github.com/nearai/ironclaw/issues/7836) |

### 6. 功能请求与路线图信号  
| 功能需求 | 关联 Issue/PR | 备注 |
|----------|----------------|------|
| 持久 per‑user sandbox + iron‑proxy（含凭据代理） | #7732（Epic） + #7810（PR） | 已列入 v1.4.0 里程碑，是当前最高优先级的架构改动。|
| 建议生成使用用户自身只读工具（尊重权限） | #7812（Issue） + #7833（PR） | PR 已提交，待审查合并，将使 AI 建议更具数据依据。|
| 工具广告过滤（仅显示可用工具） | #7836（Issue） | 需要在 `ironclaw.tool_search` 与前端预览中加入可用性检查。|
| 沙箱出站凭据通用 broker（退出 GitHub‑specific 实现） | #7825（Issue） | #7810 为第一步（GH），后续计划扩展至其他供应商（如 AWS、GCP）。|
| Notion / Gmail / Slack 集成稳定性改善 | #7830、#7829、#7828（Issue） | 需要 UI/授权流程的回归测试以及错误上报改进。|
| 文档与治理：APDD Kit 评估 | #7255（PR） | 长期挂起，若评估通过可能在下个季度纳入治理框架。|

### 7. 用户反馈摘要（从 Issues 评论中提炼）  
- 持久沙箱需求强烈：多位评论者指出目前的 `builtin.shell` 每次启动容器导致工作区状态丢失，期望 `/workspace` 能像传统开发机一样持久化。  
- 凭据代理的透明度是关注点：用户希望在不暴露真实 secret 的前提下，能够像本地一样使用 `gh`、`gcloud` 等 CLI，且代理应仅在实际请求时注入 token。  
- 集成安装体验不一致：Notion、Gmail、Slack 的报错均指向弹窗生命周期或 UI 路由问题，表明 WebUI 中的授权流程仍需统一错误处理与重试机制。  
- 建议生成的“空洞感”被多次提及：目前的建议仅基于内部工具（memory、extensions），用户期望能够看到真实数据片段（如最近邮件、文档片段）以提升信任度。  
- 反馈渠道活跃：Slack #x-ai-product-feedback 频道产生大量未结构化的产品想法，已通过自动化 triage（#7827、#7832）转化为可跟踪的 Issue，显示社区参与度高但需要更好的反馈闭环。

### 8. 待处理积压（长期未响应的重要 Issue/PRs）  
| 项目 | 最后更新时长 | 简述 | 建议行动 |
|------|--------------|------|----------|
| #7516 – feat(webui): operator surface for the IronHub agent link | 更新于 2026‑08‑12（约 12 天） | WebUI 缺少展示 IronHub 注册 URL与共享密钥的入口，导致代理链接只能通过 CLI 完成。 | 审查 UI 设计，考虑在 Extensions 页面加入“Agent Link”面板；如无争议，可尽快合并。 |
| #7255 – docs(governance): evaluate the APDD kit + propose scoped integration | 更新于 2026‑08‑05（约 19 天） | 长期挂起的治理框架评估 PR，尚未得到维护者反馈。 | 安排一次治理会议或指派负责人完成评估，以决定是否采纳 APDD Kit。 |
| #7020 – chore(deps): bump tokio‑tungstenite from 0.29.0 to 0.30.0 | 更新于 2026‑08‑02（约 22 天） | 依赖更新 PR 已悬置较久，虽然是小版本 bump，但仍然应尽快合并以保持安全基线。 | 检查是否存在冲突；若无，直接合并或让 Dependabot 重新触发。 |
| #7839 / #7838 – THROWAWAY CI 次分支（仅用于跑 CI） | 更新于 2026‑08‑23（当天） | 虽标记为 “do not merge”，但长期占用分支命名空间，可能造成混淆。 | CI 流水线稳定后，可考虑删除这些临时分支或采用更明确的命名约定（如 `ci/nextest‑arm‑…`）。 |

---

**总结**：今天的活动主要聚焦在依赖维护与核心架构（持久沙箱、凭据代理）的讨论上，功能合并仍在审查阶段。项目整体健康度良好，但仍有一些中等及以上的 Bug（Notion、Gmail、Slack 集成）和长期挂起的治理/UI 改进需关注。建议维护者优先审查 #7810、#7833 等已就绪的功能 PR，并尽快处理积压的 #7516 与 #7255，以保持版本迭代节奏与社区满意度。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI 项目日报（2026‑08‑24）**  
*数据来源：GitHub Issues/PR 更新（过去 24 h）*  

---

## 1. 今日速览
- 在过去 24 小时内，项目 **没有新增 Issue 或 PR**，全部活动为 **关闭/已合并** 的旧条目（4 个 Issue、3 个 PR），均带有 `[stale]` 标签，说明这些讨论已长期无新进展。  
- 没有新版本发布，维护者近期未推送代码。  
- 整体活跃度偏低：近期仅有维护性的清理工作（关闭陈旧议题），功能推进和社区互动均处于停滞状态。

## 2. 版本发布
> **无新版本发布**（過去 24 h 沒有 Release）。  
> 若需查看歷史版本，請參閱 [Releases 頁面](https://github.com/netease-youdao/LobsterAI/releases)。

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR # | 标题 | 关键变更 | 相关 Issue | 链接 |
|------|------|----------|------------|------|
| **#1199** | feat(model): add context window and token settings | - 在 Settings 中新增每模型的 `contextWindow`、`maxTokens` 可配置项；<br>- 这些字段随模型列表持久化、导出，并在直聊请求、Cowork/OpenClaw 配置中使用。 | – | [#1199](https://github.com/netease-youdao/LobsterAI/pull/1199) |
| **#1197** | Feature/Agent 管理页面交互优化 | - 将删除操作从卡片详情面板提升至列表行内直接可点，缩短交互路径；<br>- 优化侧边栏展开/收起逻辑，提升页面响应速度。 | – | [#1197](https://github.com/netease-youdao/LobsterAI/pull/1197) |
| **#1201** | [Bug] NIM 超大群消息中 teamTypeNum 硬编码错误导致群名无法正确获取 | - 修正 `nimGateway.ts` 第 917 行的 `teamTypeNum` 传参，使其与 V2NIM SDK 枚举保持一致（超大群 → `SuperTeam`，普通群 → `Team`，P2P → `P2P`）。<br>- 随附注释已更新，防止后续回归。 | #1200 | [#1201](https://github.com/netease-youdao/LobsterAI/pull/1201) |

**整体推进**：  
- 功能层面，**#1199** 为模型使用带来更细粒度的上下文与 token 控制，有助于提升生成质量与防止超限。  
- 交互层面，**#1197** 降低了 Agent 管理的操作成本，提升了日常使用流畅度。  
- 稳定性层面，**#1201** 修复了一个导致群名显示错误的核心 bug，直接影响到超大群及普通群中的 @机器人体验。

## 4. 社区热点（今日讨论最活跃的 Issues/PRs）

所有今日更新的条目均只有 **2 条评论**、**0 个点赞**，且均标记为 `[stale]`，说明社区讨论度极低。若按评论数排序，以下四条并列：

1. **#1196** – 不要强制在工作目录中建立 Agents.md、User.md 等 6 个文件  
   - 链接：[#1196](https://github.com/netease-youdao/LobsterAI/issues/1196)  
   - 诉求：用户希望能够将这些系统文件放置在公共或隐藏目录，避免每次切换工作目录时重复生成和手动删除。  

2. **#1198** – 网关重启到一半进度条消失，也不知道重启状态，后面的对话都显示模型不可用  
   - 链接：[#1198](https://github.com/netease-youdao/LobsterAI/issues/1198)  
   - 诉求：重启过程缺乏明确的进度反馈，导致用户误以为服务不可用。  

3. **#1200** – [Bug] NIM 超大群消息中 teamTypeNum 硬编码错误导致群名无法正确获取  
   - 链接：[#1200](https://github.com/netease-youdao/LobsterAI/issues/1200)  
   - 诉求：与 PR #1201 对应，期望修复群名显示错误。  

4. **#1202** – 【bug】agent 泄漏 model key 信息，存在敏感信息泄漏风险  
   - 链接：[#1202](https://github.com/netease-youdao/LobsterAI/issues/1202)  
   - 诉求：Agent 在被询问 key 配置时会直接返回目录或环境变量路径，存在安全隐患。  

> **热点分析**：虽然评论数不高，但 #1202 涉及 **安全泄漏**，是潜在的高风险点；#1196 与 #1198 反映了用户对工作流程便利性和状态透明度的诉求，均可视为改进方向。

## 5. Bug 与稳定性（按严重程度排序）

| 严重程度 | 描述 | 关联 Issue / PR | 是否已有 Fix | 链接 |
|----------|------|----------------|--------------|------|
| **高** | Agent 泄漏 model key 信息（潜在敏感数据暴露） | Issue #1202 | **无**（目前尚未见修复 PR） | [#1202](https://github.com/netease-youdao/LobsterAI/issues/1202) |
| **中** | NIM 超大群/普通群 teamTypeNum 硬编码错误导致群名显示错误 | Issue #1200 / PR #1201 | **已修复**（PR #1201 已合并） | [#1201](https://github.com/netease-youdao/LobsterAI/pull/1201) |
| **低** | 网关重启进度条消失、状态不明确 | Issue #1198 | **无** | [#1198](https://github.com/netease-youdao/LobsterAI/issues/1198) |
| **低** | 强制在工作目录创建 6 个系统文件（体验问题） | Issue #1196 | **无** | [#1196](https://github.com/netease-youdao/LobsterAI/issues/1196) |

> **注意**：高危的 key 泄漏问题目前仍未有对应的修复 PR，建议维护者尽快评估并实施防护（如对 key 相关查询返回脱敏或拒绝响应）。

## 6. 功能请求与路线图信号

| 功能请求 | 来源 Issue/PR | 现状 | 路线图推断 |
|----------|----------------|------|------------|
| **可配置的系统文件位置（公共或隐藏目录）** | Issue #1196 | 未实现 | 若采纳，可减少工作目录冗余，提升多人协作友好度。 |
| **网关重启过程的进度反馈或状态提示** | Issue #1198 | 未实现 | 加入轮询或 WebSocket 状态推送可改善用户感知。 |
| **模型级别的上下文窗口与 token 上限**（已实现） | PR #1199 | 已合并 | 后续可考虑在 UI 中提供预设模板（如 “长对话”、“代码补全”）并自动填充对应值。 |
| **Agent 安全防护（禁止泄漏 key）** | Issue #1202 | 未实现 | 应列为安全 Sprint 的最高优先级，建议在下一个版本中加入输入过滤或权限校验。 |

## 7. 用户反馈摘要（从 Issues 评论中提炼）

- **工作目录文件冗余**：多位用户提到 “每次换目录都要删掉 Agents.md、User.md 等文件，既麻烦又容易误删”。  
- **重启透明度缺失**：用户在看到进度条消失后会误判服务崩溃，频繁刷新页面导致额外负载。  
- **安全顾虑**：有用户尝试向 Agent 询问 “当前 key 放在哪里？”，得到明确的路径或环境变量名，感到“不安全”。  
- **群名显示错误**：在超大群中 @机器人时，机器人回复中仍显示原始群 ID，影响业务流程的自动化处理。  

总体反馈指向 **易用性**、**状态可见性** 与 **安全防护** 三方面的改进需求。

## 8. 待处理积压（长期未响应的重要 Issue/PRs）

所有今日更新的条目均已超过 **4 个月**无新活动（创建于 2026‑04‑01，最后更新于 2026‑08‑23），可视为 **长期积压**。值得维护者特别关注的包括：

- **Issue #1202**（Key 泄漏）– 高危安全问题，尚未有修复 PR。  
- **Issue #1196**（强制系统文件生成）– 影响日常使用体验，易被误删。  
- **Issue #1198**（网关重启进度缺失）– 影响用户对服务可用性的感知。  

建议：  
1. **安全优先**：为 #1202 分配专门的安全评估与修复任务。  
2. **体验 Sprint**：将 #1196、#1198 合并进一个 “工作流改善” 迭代，考虑配置文件统一管理 + 状态通知机制。  
3. **回归测试**：在合并 #1201 后，为 NIM 相关功能添加自动化测试，防止类似硬编码错误再次出现。  

---

**结语**：今日项目处于维护清理阶段，无新功能发布，社区活跃度低。唯一已合并的改进（#1199、#1197、#1201）为模型配置、UI 交互及群名修复带来了正向影响，但高危的 key 泄漏问题尚未得到解决，亟需尽快跟进以保障项目健康度与用户信任。请维护者根据上述建议制定近期 Sprint 计划，提升项目的响应速度和安全基线。  

*报告生成时间：2026‑08‑24 00:00 UTC*  
*数据来源：GitHub API（过去 24 小时 Issues/PR 事件）*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis 项目日报 – 2026‑08‑24**  
*基于 GitHub 事件（Issues 3，PR 6，无新リリース）*  

---

## 1. 今日速览  
- 项目在过去 24 小时内保持中等活跃度：共收到 **3 条 Issue 更新**（2 条新开/活跃，1 条已关闭）和 **6 条 PR 更新**，全部仍处于待合并状态。  
- 没有新版本发布，因而今日的工作集中在 Bug 修复、功能完善以及代码质量提升上。  
- 最受关注的讨论集中在 **Issue #245**（TLS + WebSocket ALPN 问题），已有 2 条评论，说明该问题对部分用户仍有影响。  
- 整体来看，代码库的提交频率稳健，但尚未有 PR 被合并，说明审查流程可能略有延迟；维护者建议关注待合并 PR 的审查进度，以免积压。

---

## 2. 版本发布  
> **今日无新版本发布。**  

---

## 3. 项目进展（已合并/关闭的重要 PR）  
- **今日无 PR 被合并或关闭**。所有 6 条 PR 均处于 *open* 状态，等待审查/合并。  
- 尽管尚未合并，这些 PR 已经围绕核心子系统（内存、技能、 Cron、MCP、WhatsApp）提出了具体的改进方向，待合并后将直接推动功能完善和稳定性提升。

---

## 4. 社区热点（讨论最活跃的 Issues/PRs）  

| 项目 | 类型 | 评论数 | 链接 | 主要诉求 |
|------|------|--------|------|----------|
| **Issue #245** | Bug (TLS + WebSocket) | 2 | [moltis-org/moltis#245](https://github.com/moltis-org/moltis/issues/245) | 浏览器在新建连接时协商 h2 导致 WebSocket 升级返回 405；期望在 TLS 握手时降级或正确处理 h2。 |
| Issue #1230 | Feature (fail‑closed 错误策略) – 已关闭 | 1 | [moltis-org/moltis#1230](https://github.com/moltis-org/moltis/issues/1230) | 提出针对安全 Hook 的可选 *fail‑closed* 策略，以防止 Hook 运行时错误导致策略失效。 |
| PR #1236 | Fix (内存嵌入批次上限) | 0（评论字段未填） | [moltis-org/moltis#1236](https://github.com/moltis-org/moltis/pull/1236) | 限制本地 GGUF 嵌入编码器的 batch 大小，防止超长 token 导致进程崩溃。 |
| PR #1233 | Feature (WhatsApp 文档下载) | 0 | [moltis-org/moltis#1233](https://github.com/moltis-org/moltis/pull/1233) | 为 WhatsApp 连接器添加可选的入站文档下载能力，使代理能够实际检查文件内容。 |

*热点背后的诉求：*  
- **#245** 凸显了在混合 HTTP/2 与 WebSocket 使用场景下的协议兼容性需求，尤其对依赖实时通信的用户影响显著。  
- **#1230** 虽已关闭，但反映了社区对安全边界更严格错误处理的期待。  
- **#1233** 表明用户希望在聊天平台中获得完整的文件内容，而不仅是元数据，以支持更复杂的代理工作流。

---

## 5. Bug 与�定性（按严重程度排序）  

| 严重度 | 描述 | 关联 Issue/PR | 是否有对应修复 PR | 链接 |
|--------|------|----------------|-------------------|------|
| **高** | TLS 中广告 h2 作为首个 ALPN 导致新建 WebSocket 连接返回 405（浏览器刷新或新 tab 失效） | Issue #245 | 待修复（尚无直接 PR） | [#245](https://github.com/moltis-org/moltis/issues/245) |
| **中** | 在共享 Slack 频道中，Tools 在一定时间后停止响应 | Issue #1224 | 无直接 PR（需进一步调研） | [#1224](https://github.com/moltis-org/moltis/issues/1224) |
| **中** | 本地 GGUF 嵌入编码器在 token 超过 512 时可能导致进程崩溃 | — | PR #1236（已提出修复） | [#1236](https://github.com/moltis-org/moltis/pull/1236) |
| **低** | 内存后端配置值未统一（sqlite → builtin）导致配置混乱 | — | PR #1235（配置统一） | [#1235](https://github.com/moltis-org/moltis/pull/1235) |
| **低** | 技能打包时递归 sidecar 未正确解压，导致文件找不到 | — | PR #1234（修复 sidecar 路径） | [#1234](https://github.com/moltis-org/moltis/pull/1234) |
| **低** | Cron 调度输出未发送至来源聊天，造成通知丢失 | — | PR #1226（添加 transient 投递字段） | [#1226](https://github.com/moltis-org/moltis/pull/1226) |
| **低** | MCP 工具桥在服务器重启后仍使用旧 client 实例，导致调用失败 | — | PR #1231（保持 server‑client 关联） | [#1231](https://github.com/moltis-org/moltis/pull/1231) |
| **低** | WhatsApp 文档仅传递元数据，未下载实际字节 | — | PR #1233（添加可选下载） | [#1233](https://github.com/moltis-org/moltis/pull/1233) |

> **总结**：目前最高优先级的 Bug 是 **#245**（TLS/WebSocket），建议维护者尽快评估并合并相关修复（若社区尚未提供 PR，可考虑内部实施）。其他中等严重度问题均已有对应的修复 PR，审查通过后将显著提升系统稳定性。

---

## 6. 功能请求与路线图信号  

| 功能 | 关联 Issue/PR | 现状 | 路线图暗示 |
|------|----------------|------|------------|
| **可选的 fail‑closed 安全 Hook 策略** | Issue #1230（已关闭） | 已实现并关闭，说明该需求已被采纳。 | 未来版本可能将该策略作为默认或推荐配置。 |
| **WhatsApp 入站文档自动下载** | PR #1233（待合并） | 功能实现完毕，等待审查。 | 一旦合并，将扩展 Moltis 在聊天平台上的文件处理能力，符合“多模态输入”路线图。 |
| **内存后端配统一（sqlite → builtin）** | PR #1235（待合并） | 配置清理工作，为后期插件化内存后端奠基。 | 预示着未来可能支持更多后端（如 RocksDB、Redis）而无需改动上层代码。 |
| **Cron 投递到来源聊天** | PR #1226（待合并） | 提升调度任务的可追溯性。 | 符合“任务上下文保持”方向，便于审计和用户体验。 |
| **MCP 客户端在服务器重启后自动恢复** | PR #1231（待合并） | 提高长连接工具的鲁棒性。 | 展示对长运行服务的容错增强。 |

> **信号**：社区正在围绕 **安全策略细化**、**多平台文件处理**、**内部配置统一**以及 **调度任务可靠性** 四个方向积极贡献代码。这些都与项目近期的“稳定性 + 功能扩展”路线图高度一致。

---

## 7. 用户反馈摘要（从 Issues 评论中提取）  

- **Issue #245**（2 条评论）：  
  - 用户描述：“在新标签页或刷新后，WebSocket 连接会立即断开，控制台只有 405 错误，没有堆栈。”  
  - 暗示用户依赖实时协作功能，对连接中断敏感。  
- **Issue #1230**（1 条评论，已关闭）：  
  - 评论者称赞该 fail‑closed 方案“是安全 Hook 缺失的一块拼图”，并表示已在本地测试通过。  

总体反馈表明，**实时通信的可靠性**是用户最关切的痛点，而 **安全 Hook 的严格错误处理**则获得正面认可。

---

## 8. 待处理积压（长期未响应或需关注的 Item）  

| Item | 类型 | 创建时间 | 最后更新 | 备注 |
|------|------|----------|----------|------|
| **Issue #245** | Bug (TLS/WebSocket) | 2026‑02‑26 | 2026‑08‑23 | 已悬置约 6 个月，虽然最近有评论，但尚未有修复 PR。建议维护者评估是否需要内部实施或激励社区提交修复。 |
| **Issue #1224** | Bug (Slack 工具失效) | 2026‑08‑21 | 2026‑08‑23 | 虽然只有两天，但已有用户报告在生产环境中出现，建议尽快复现并给出临时解决方案。 |
| **PR #1236** | Fix (内存嵌入 batch) | 2026‑08‑23 | 2026‑08‑23 | 虽新近，但若长期未审查可能导致类似崩溃风险持续存在。 |
| **PR #1233** | Feature (WhatsApp 文档下载) | 2026‑08‑23 | 2026‑08‑23 | 同样待审查，功能完整度高，建议优先合并以提升多平台吸引力。 |

> **行动建议**：  
> 1. **优先审查并合并**针对高危 Bug 的 PR（如 #1236、#1235），以快速消除已知崩溃路径。  
> 2. 为 **#245** 指定一个负责人或发放 bounty，以加速社区修复。  
> 3. 对于 **#1224**，尝试在可复现的环境中加详细日志，以便定位根因。  
> 4. 保持 PR 审查节奏（每日至少审查 1–2 条），防止待合并积压导致项目停滞。

---

*以上内容完全基于所提供的 GitHub 事件数据生成，旨在帮助项目维护者快速了解今日项目脉搏。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw (agentscope-ai/QwenPaw) 项目动态日报**  
*日期：2026‑08‑24*  

---  

## 1. 今日速览  
- **活跃度**：过去 24 小时内新增 **6 个 Issue**（全部仍为 open），PR 更新 **14 条**，其中 **8 条已合并/关闭**，**6 条待合并**。总体代码活跃度高，但 Issue 未得到闭合，表明开发侧推进较快，而问题跟踪仍有积压。  
- **版本**：今日未有新版本发布（Latest Releases 为空）。  
- **关注点**：内存泄漏（#7222）和零停机重载导致插件工作区注册丢失（#7221）是目前讨论最多的两个话题；同时，社区开始提出工具链集成需求（如 Aider CLI 接入 #7224）和可观测性增强（#7219）。  

---  

## 2. 版本发布  
> **无新版本发布**。  

---  

## 3. 项目进展（今日合并/关闭的重要 PR）  

| PR # | 标题 | 类型 | 主要贡献 | 链接 |
|------|------|------|----------|------|
| #6220 | fix(token_usage): don't persist an unseeded cache on shutdown | bugfix | 防止在关闭时写入未初始化的 token 使用缓存，避免无效磁盘 I/O。 | agentscope-ai/QwenPaw PR #6220 |
| #6203 | fix(utils): bound and hide the Windows tasklist liveness probe | bugfix | 为 Windows 上的 `tasklist` 调用添加超时并隐藏无用输出，提升进程存活检测的稳健性。 | agentscope-ai/QwenPaw PR #6203 |
| #6616 | fix(cli): build a valid user message for the headless task command | bugfix | 修正 `qwenpaw task` 在无头模式下构造的 `Msg` 类型不匹配问题，使得任务能够正常提交。 | agentscope-ai/QwenPaw PR #6616 |
| #7033 | [Under Review] feat(skill-system): dynamic skill loading + auto‑unload + frontmatter fix | feature | 引入技能的运行时加载/卸载机制，修复前置元数据路径 bug，为热插拔技能奠定基础。 | agentscope-ai/QwenPaw PR #7033 |
| #7031 | feat(skill-system): dynamic skill loading + auto‑unload + frontmatter fix | feature | 与 #7033 同目的的另一个实现分支（已合并），同步提供动态技能生命周期支持。 | agentscope-ai/QwenPaw PR #7031 |
| #7027 | [first-time-contributor] feat: auto-title-sync + skill-system cleanup | feature/chore | 实现会话标题随自动记忆更新（“auto‑title‑sync”），并清理 skill‑system 产生的临时备份文件。 | agentscope-ai/QwenPaw PR #7027 |
| #7032 | [Under Review] feat(auto-title-sync): auto-memory linked chat title refresh + observability | feature | 让聊天标题随自动记忆条目实时刷新，提升历史记录的可浏览性。 | agentscope-ai/QwenPaw PR #7032 |
| #7030 | feat(auto-title-sync): auto-memory linked chat title refresh + observability | feature | 与 #7032 同义的另一个实现（已合并），完成标题同步功能。 | agentscope-ai/QwenPaw PR #7030 |
| #7183 | [first-time-contributor] feat(skills): add workspace-scoped always-on loading | feature | 引入工作区范围的 `always_on` 技能模式，使核心行为技能在 Agent 首次决策前预加载。 | agentscope-ai/QwenPaw PR #7183 |
| #7220 | [first-time-contributor] fix(media): reject oversized image dimensions | bugfix | 在仅检查 2 MiB 大小后，增加对视觉提供者像素上限的校验，防止因超大图像导致的前端卡死。 | agentscope-ai/QwenPaw PR #7220 |
| #7219 | feat(console): show all-agent LLM and tool-call trend on Token Usage | feature | 在「Token Usage」页面新增全代理 LLM 调用与工具使用趋势图，后端提供 `/api/agent-stats/llm-tool-trend` 接口。 | agentscope-ai/QwenPaw PR #7219 |
| #7187 | fix(chat): exclude reasoning from generated titles | bugfix | 防止模型推理内容被写入自动生成的聊天标题，保持思考过程的独立性。 | agentscope-ai/QwenPaw PR #7187 |
| #7066 | [first-time-contributor, Under Review] fix(drivers): persist rotated refresh_token for OAuth2 auth-code providers | bugfix | 对使用旋转 refresh_token 的 OAuth2 授权码流程（如 XMind）进行持久化，解决 token 过期后无法刷新的问题。 | agentscope-ai/QwenPaw PR #7066 |

**整体进展**：今日合并的 PR 集中在 **稳定性（token 使用、Windows 进程探测、CLI 消息构造、媒体尺度检查）**、**功能完善（动态技能生命周期、自动标题同步、OAuth2 refresh_token 持久化、全代理使用趋势可视化）** 以及 **用户体验（聊天标题排除推理、技能预加载）**。这些变更为后续版本的可靠性和可观测性奠定了基础。  

---  

## 4. 社区热点（讨论最活跃的 Issues/PRs）  

| 排名 | 类型 | ID | 标题 | 评论数 | 👍 | 链接 |
|------|------|----|------|--------|----|------|
| 1 | Issue | #7221 | [enhancement] reload_agent() drops plugin workspace-scoped registrations after any config change | 3 | 0 | agentscope-ai/QwenPaw Issue #7221 |
| 2 | Issue | #7222 | [Performance] Long-running qwenpaw-backend memory grows unbounded to 20GB+ | 2 | 0 | agentscope-ai/QwenPaw Issue #7222 |
| 3 | Issue | #7224 | [HELP] Как подключить Aider CLI (aider-chat) как агента в QwenPaw | 1 | 0 | agentscope-ai/QwenPaw Issue #7224 |
| 4 | PR | #7219 | feat(console): show all-agent LLM and tool-call trend on Token Usage | 0 (评论未填) | 0 | agentscope-ai/QwenPaw PR #7219 |
| 5 | PR | #7183 | feat(skills): add workspace-scoped always-on loading | 0 | 0 | agentscope-ai/QwenPaw PR #7183 |

**热点分析**  
- **#7221** 是目前评论最多的 Issue，反映用户在零停机重载场景下遇到插件工作区范围注册（如运行时 hook、mode、slash command）被意外清除的痛点，直接影响到插件的可用性。  
- **#7222** 描述了后端在连续运行约 2 天内内存持续攀升至 20 GB+ 的现象，是社区关注的性能稳定性问题。  
- **#7224** 表明社区有强烈的工具链集成需求，特别是把外部 AI 编码助手（Aider CLI）纳入 QwenPaw 作为代理的诉求。  
- **#7219** 虽然目前评论为 0，但其功能（全代理 LLM & tool‑call 趋势图）直接回应了用户对使用情况可观测性的需求，预计后续会得到更多关注。  

---  

## 5. Bug 与稳定性（今日新报告 Bug，按严重程度排序）  

| 严重度 | Issue ID | 标题 | 关联的 fix PR（若有） | 说明 |
|--------|----------|------|----------------------|------|
| **高** | #7222 | Long-running qwenpaw-backend memory grows unbounded to 20GB+ | — | 内存泄漏导致长时间运行后资源耗尽，影响生产可用性。 |
| **高** | #7218 | peer closed connection without sending complete message body (incomplete chunked read) | — | 长文本或长时间推理时出现连接提前关闭，可能导致请求失败。 |
| **中** | #7217 | 中途停止任务或对话后，下一次对话会完全按照上一次的进行（包括其思考） | — | 状态未正确重置，导致对话内容污染。 |
| **中** | #7216 | execute_shell_command 工具名在 LLM 输出中被间歇性字符替换（如 l→|），导致 ToolNotFoundError | — | 工具名称被错误转义，造成工具调用失败。 |
| **低** | #7221 | reload_agent() drops plugin workspace-scoped registrations after any config change | — | 虽标记为 enhancement，但实际表现为功能回滚，影响插件可用性。 |
| **低** | #7220 | fix(media): reject oversized image dimensions | #7220 (已合并) | 已通过 PR #7220 修复，限制图像像素上限。 |

**已有 fix PR**：  
- #7220 已合并，解决图像尺寸过大导致的前端卡死。  
- 其他高严重性 Bug（#7222、#7218、#7217、#7216）目前尚无对应的合并 PR，需优先跟进。  

---  

## 6. 功能请求与路线图信号  

| 功能请求 | 来源 Issue/PR | 是否有对应 PR（已合并/待合并） | 路线图暗示 |
|----------|--------------|------------------------------|------------|
| **Aider CLI 接入** | #7224 (HELP) | 无直接 PR | 社区对外部代理工具的集成需求明显，若后续提供统一的代理适配器框架，可纳入下一版本的「代理生态」里程碑。 |
| **工作区范围 always‑on 技能** | #7183 (PR) | 待合并 PR #7183 | 已有实现，预计将在下个小版本（v2.1.1）中随技能系统动态加载特性一起发布。 |
| **全代理 LLM & tool‑call 趋势可视化** | #7219 (PR) | 待合并 PR #7219 | 直接提升可观测性，符合项目对「Token Usage」面板的增强规划。 |
| **持久化旋转 refresh_token（OAuth2）** | #7066 (PR) | 待合并 PR #7066 | 安全与兼容性改进，预计在下次安全补丁中合并。 |
| **自动标题排除推理内容** | #7187 (PR) | 已合并 PR #7187 | 已完成，将在即将发布的补丁中上线。 |
| **动态技能加载/卸载 + 前置元数据修复** | #7033 / #7031 (PR) | 待合并（Under Review） | 核心技能生命周期特性，是实现热插拔与资源回收的基石，值得优先合并。 |
| **聊天标题随自动记忆实时刷新** | #7032 / #7030 (PR) | 待合并（Under Review） | 提升历史记录可读性，符合用户对会话管理的期待。 |

**总体信号**：社区正在推动 **可观测性（使用趋势、标题同步）**、**插件/代理生态（Aider 接入、工作区技能）**，以及 **安全/稳定性（OAuth2 token 持久化、内存泄漏修复）**。这些方向与项目最近合并的动态技能系统、自动标题同步等工作形成互补，预计将在 **v2.1.1‑v2.1.2** 时间窗口内陆续发布。  

---  

## 7. 用户反馈摘要（从 Issues 评论中提炼）  

- **内存泄漏**（#7222）：用户报告后台进程在 2 天内内存从几百 MB 增至 20 GB+, 导致机器负载升高，要求定期重启或提供内存回收机制。  
- **零停机重载丢失插件注册**（#7221）：开发者描述在更改配置触发 `reload_agent()` 时，原先注册的运行时 hook、模式、斜杠命令随即消失，使得插件无法正常工作，需在重载后恢复工作区范围的注册。  
- **连接提前中断**（#7218）：在长文本或长时间推理场景下，出现 “peer closed connection without sending complete message body” 错误，用户猜测可能是服务器端超时或读取不完整的块导致，建议加大读取缓冲或提供可配置的超时。  
- **任务状态残留**（#7217）：中途取消后，后续对话会继承之前的思考链和上下文，用户期望每次新对话都从干净状态开始。  
- **工具名称字符替换**（#7216）：LLM 输出中工具名

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

The user wants me to generate a daily project report for ZeroClaw based on the provided GitHub data. The date is 2026-08-24.

Let me analyze the data:

Data overview:
- Past 24h Issues: 50 (new/active: 39, closed: 11)
- Past 24h PRs: 50 (pending merge: 45, merged/closed: 5)
- New releases: 0

Latest Issues (showing top 30 by comment count):
Many RFCs and feature requests, mostly architecture-related. Key ones:
- #9487 RFC: Runtime-owned conversation sessions (25 comments)
- #9488 RFC: Unified attachment architecture (19 comments)
- #6850 RFC: Decouple memory lifecycle policy (17 comments)
- #8780 RFC: Realtime speech-to-speech for Gemini Live (17 comments)
- #8692 Tracker: Maintainer decision queue (13 comments)
- #8424 RFC: Workspace-relative forbidden path patterns (12 comments)
- #6996 RFC: Granular sandbox policy (11 comments)
- #2503 CLOSED feature request for napcat/qq channel (10 comments)
- #9600 Tracker: Session-persistence contract (7 comments)
- #2467 CLOSED webhook transforms (7 comments)
- #9825 RFC: Publish-safe exceptions for blockchain identifiers (6 comments)
- #8132 RFC: Replace React/Vite with Rust→Wasm (6 comments, 1 like)
- #10050 RFC: Verbatim channel send (5 comments)
- #9810 RFC: Load Agent Plugins 1.0 (4 comments)
- #9666 CLOSED filesystem listener cancellation-aware (3 comments)
- etc.

Latest PRs (showing top 20 by comment count - but all have undefined/comment count not shown well):
Many open PRs, mostly fixes and features. Key ones:
- #10253 fix(cron): preserve scheduler workspace policy
- #9999 fix(compatible): classify output-limited terminal responses
- #9447 fix(anthropic): classify incomplete terminal responses
- #9713 feat(runtime): expose token accounting
- #10252 feat(memory): add category-scoped cross-agent grants
- #9109 feat(providers): add native Hailo-Ollama support
- #10284 chore(ci): remove dead labeler paths
- #10241 fix(channels): restore supervised shell approval routing
- #10250 fix(security): contain plugin private egress carveouts
- #10144 fix(providers): complete lifecycle provider accounting
- #10169 docs(adr): file ADR-014
- #10256 fix(gateway): redact duplicate idempotency keys
- #9707 fix(config): migrate bare vision_model_provider
- #10278 fix(zerocode): respect paste input ownership
- #10217 CLOSED fix(channels): make filesystem listener cancellation-aware
- #10283 docs: Add Build Remote Agent phone pairing
- #10146 feat(plugins): activate logical channel instances
- #10098 fix(security): grant Landlock access to DNS and TLS
- #9977 fix(tools): confine filesystem mutations to workspace
- #9739 feat(zerocode): multi-session panes

Now I need to organize this into the requested sections:

1. 今日速览 (Today overview) - 3-5 sentences summarizing overall status, activity evaluation
2. 版本发布 - None (skip or state none)
3. 项目进展 - Important merged/closed PRs. Only #10217 is explicitly CLOSED in PR list. Others are OPEN. So progress is mostly open work, but #10217 closed fixes filesystem listener. Overall progress: 5 PRs merged/closed out of 50, 45 pending.
4. 社区热点 - Most active issues: #9487 (25 comments, RFC session ownership), #9488 (19 comments, attachments), #6850 (17 comments, memory), #8780 (17 comments, Gemini Live speech), #8692 (13 comments, maintainer tracker). Also mention closed ones that had recent updates (#2503, #2467, #9666).
5. Bug 与稳定性 - Bugs: #9666 (filesystem listener cancellation - CLOSED with fix #10217?), #6105 (cron context missing - open, blocked), #10098 (Landlock DNS/TLS - PR open), #9977 (filesystem mutations - PR open), #10253 (cron scheduler security policy - PR open), #9999/#9447 (provider terminal responses - stacked PRs open). Severity levels.
6. 功能请求与路线图信号 - Feature requests: channels (#6427 Twilio, #6437 Zulip, #6435 Rocket.Chat, #6423 Mastodon, #6441 Lemmy - all open/accepted), #6448 Home Assistant, #8132 Rust→Wasm UI, #8780 Gemini Live voice, #9810 Agent Plugins 1.0, #10050 verbatim gateway send, #10076 WASM plugin architecture. Many have corresponding PRs or are tracked.
7. 用户反馈摘要 - From issues: Users want more channels (napcat/qq, Twilio SMS, Mastodon, Zulip, Rocket.Chat, Lemmy), better security/sandbox policies (#8424, #6996), memory lifecycle separation (#6850), attachment architecture (#9488), session persistence (#9487, #9600), webhook transforms (#2467 - closed?), cron context awareness (#6105).
8. 待处理积压 - Long-term open issues: #6850 (May 22), #6427/6437/6435/6423/6441/6448 (May 6), #6105 (Apr 25), #8692 (Jul 4 - tracker needs maintainer review). PR backlog: 45 open PRs pending merge, stacked #9447/#9999 waiting for parent-first land, #9713 (token accounting), #10146 (logical channel instances).

Wait, I need to check which PRs were merged/closed. The data says: "待合并: 45，已合并/关闭: 5". But in the listed PRs, only #10217 shows [CLOSED]. The others are [OPEN]. So 4 others were merged/closed but not shown in the top 20? Or perhaps some of the issues being closed correspond? Anyway, I should mention that 5 PRs were resolved but most listed are open.

Actually, looking carefully at the PR list, #10217 is CLOSED. The others shown are OPEN. The 5 merged/closed likely include #10217 and others not in the top 20 by comment (or maybe some issues correspond? No, issues are separate).

Let me structure the report professionally in Chinese as requested.

Important: Every item needs GitHub links.

Let me draft each section:

1. 今日速览
- 过去24小时 Issues 50 条（39 新开/活跃，11 关闭），PR 50 条（45 待合并，5 已合并/关闭），无新版本发布。
- 讨论热度高度集中在架构级 RFC：运行时会话所有权（#9487）、统一附件架构（#9488）、内存生命周期解耦（#6850）及实时语音通道（#8780）。
- PR 侧主要推进安全修复、提供者生命周期修复、内存授权、WASM 插件激活及 CI 清理，但合并率仅 10%（5/50），积压压力大。
- 整体健康度：社区参与活跃，架构路线图清晰，但维护者审查队列（#8692）和长期功能请求（Mastodon/Twilio 等）需关注。

2. 版本发布
- 无（省略或明确说明无新版本）。

3. 项目进展
- 关键已关闭/合并：
  - #10217 [CLOSED] fix(channels): make the filesystem listener cancellation-aware — 修复文件系统通道阻塞取消问题，与 Issue #9666 对应。
  - 其余 4 条已合并/关闭 PR 未在展示列表中（数据概览显示共 5 条）。
- 重要待审 PR 推进：
  - #10241 fix(channels): restore supervised shell approval routing — 修复通道驱动的受监督 Shell 审批路径。
  - #10250 fix(security): contain plugin private egress carveouts — 收紧插件私有出口规则。
  - #10098 fix(security): grant Landlock access to DNS and TLS — 修复沙箱内 DNS/TLS 解析失败。
  - #10253 fix(cron): preserve scheduler workspace policy — 修复 cron 调度器安全策略继承。
  - #10256 fix(gateway): redact duplicate idempotency keys — 日志脱敏修复。
  - #10169 docs(adr): file ADR-014 plugin egress authority — 架构决策记录。
  - #10284 chore(ci): remove dead labeler paths — CI 清理。
- 整体评估：修复类 PR 活跃，核心架构 PR（#10146 插件逻辑通道激活、#9739 Zerocode 多会话）仍在排队。

4. 社区热点
- #9487 [OPEN] RFC: Runtime-owned conversation sessions... (25 评论) — 讨论运行时会话和传输适配器所有权边界，涉及 #9487/#9488/#9600 三者协同，风险高。
  链接: https://github.com/zeroclaw-labs/zeroclaw/issues/9487
- #9488 [OPEN] RFC: Unified attachment architecture... (19 评论) — Web 聊天与通道的统一附件架构提案。
  链接: https://github.com/zeroclaw-labs/zeroclaw/issues/9488
- #6850 [OPEN] RFC: Decouple memory lifecycle policy... (17 评论) — 内存生命周期与存储后端解耦，已持续 3 个月讨论。
  链接: https://github.com/zeroclaw-labs/zeroclaw/issues/6850
- #8780 [OPEN] RFC: Realtime speech-to-speech channel for Gemini Live (17 评论) — Gemini 实时语音通道重写为 broker contract（v2，2026-08-16）。
  链接: https://github.com/zeroclaw-labs/zeroclaw/issues/8780
- #8692 [OPEN] [Tracker] Maintainer decision queue... (13 评论) — 维护者决策队列，协调 RFC 接受/拒绝。
  链接: https://github.com/zeroclaw-labs/zeroclaw/issues/8692
- 近期关闭的高评论 Issue：
  - #2503 [CLOSED] napcat/onebot 通道需求 (10 评论) — 似已关闭，用户寻求 QQ/OneBot 通道。
  - #2467 [CLOSED] Webhook transforms (7 评论) — 自定义 Webhook 路径与转换需求已关闭。
  - #9666 [CLOSED] filesystem listener cancellation-aware (3 评论) — 对应 PR #10217 已修复。

5. Bug 与稳定性
- 高严重性 (S1/S2 或 risk:high)：
  - #9666 [CLOSED] 文件系统监听器阻塞取消 — 已由 PR #10217 修复（取消感知修复）。
    链接: https://github.com/zeroclaw-labs/zeroclaw/issues/9666 / PR #10217
  - #6105 [OPEN] [Bug]: Agent 没有 cron job 上下文 — 阻塞状态，影响定时任务上下文传递。
    链接: https://github.com/zeroclaw-labs/zeroclaw/issues/6105
  - PR #10098 fix(security): Landlock 沙箱缺失 DNS/TLS 配置访问 — 影响所有沙箱子进程网络解析。
    链接: https://github.com/zeroclaw-labs/zeroclaw/pull/10098
  - PR #10253 fix(cron): 调度器工作空间策略继承错误 — 安全策略解析重复问题。
    链接: https://github.com/zeroclaw-labs/zeroclaw/pull/10253
- 中严重性：
  - PR #9999 / #9447 叠加修复：Anthropic 和 OpenAI 兼容提供者终端响应分类（stacked，需先合并父 PR #9447）。
    链接: https://github.com/zeroclaw-labs/zeroclaw/pull/9999 / #9447
  - PR #10241 修复通道驱动受监督 Shell 审批路由缺失。
    链接: https://github.com/zeroclaw-labs/zeroclaw/pull/10241
  - PR #9977 fix(tools): 限制文件系统修改到工作空间内，防止越界写入。
    链接: https://github.com/zeroclaw-labs/zeroclaw/pull/9977
- 低严重性 / CI：
  - PR #10284 CI 标签路径清理。
    链接: https://github.com/zeroclaw-labs/zeroclaw/pull/10284

6. 功能请求与路线图信号
- 通道扩展（高频长期需求）：
  - #6427 Twilio SMS 通道 (May 6, 3 评论) — 网关路由 Webhook + REST 发送。
  - #6437 Zulip 通道 (May 6) — 长轮询事件 MVP。
  - #6435 Rocket.Chat 通道 (May 6) — REST 轮询。
  - #6423 Mastodon (ActivityPub) 通道 (May 6, 1 赞) — 联邦社交通道。
  - #6441 Lemmy 通道 (May 6) — 私信轮询。
  - #6448 Home Assistant 集成工具 (May 6)。
  链接分别列出。
- 架构与协议：
  - #9487 / #9488 / #9600 会话与附件 RFC，已被接受并跟踪，可能成为 v0.9 或后续版本核心。
  - #10050 RFC: Verbatim channel send — 网关直接通道发送，无需 Agent 轮次。
  - #9810 RFC: Agent Plugins 1.0 技能与 MCP 包加载。
  - #10076 RFC: 综合 WASM 插件架构（hook/backend/capability 层）。
  - #8132 RFC: 用 Rust→Wasm 替代 React/Vite 构建。
- 提供者与工具：
  - #9109 PR 已提交：原生 Hailo-Ollama 提供者支持。
  - #9575 OpenAI 兼容连接预热修复（/models 而非 /chat/completions）。
  - #10144 PR：提供者生命周期完整会计。
- 路线图判断：通道多样化（Twilio/Mastodon 等）和安全沙箱（#6996、#8424）是用户最迫切的功能信号；架构 RFC（#9487 系列、#6850）则定义长期技术债务清偿方向。

7. 用户反馈摘要
- 通道缺失痛点：多位用户反复请求 QQ/OneBot（#2503，已关闭但可能未完全满足）、Mastodon、Zulip、Rocket.Chat、Lemmy、Twilio SMS，说明多平台联邦与企业通讯需求强烈。
  链接: https://github.com/zeroclaw-labs/zeroclaw/issues/6423 等
- 安全与沙箱：#8424 用户要求工作区内部敏感文件（.env、config.yaml、rust-toolchain.toml）受保护；#6996 需要文件系统与网络限制的颗粒度沙箱策略。
  链接: https://github.com/zeroclaw-labs/zeroclaw/issues/8424 / #6996
- 内存与上下文：#6850 提出内存生命周期与存储后端解耦，避免每个网关重复实现治理；#6105 报告定时任务缺乏上下文，用户无法获得有意义的提醒。
  链接: https://github.com/zeroclaw-labs/zeroclaw/issues/6850 / #6105
- 附件与多媒体：#9488 强调 Web 聊天与通道需要统一附件架构，避免碎片化处理。
- 性能与稳定性：#9666 的阻塞监听器问题直接影响守护进程关闭与重载，反映生产环境部署的可靠性关切。
- 满意/不满意：无明确正面评价数据，但高评论 RFC（25 条）表明核心贡献者深度投入；功能请求长期未关闭（May 6 至今）暗示维护资源紧张或优先级待明确。

8. 待处理积压
- 维护者审查队列（#8692）需要处理：
  - #9487、#9488、#9600（会话/附件/所有权边界）需统一决策。
  - #8780（Gemini Live 实时语音，v2 已重写为 broker contract）需评审。
  - #8132（Rust→Wasm UI 替代）、#10076（WASM 插件架构）、#9703（Goal mode v3 异步子任务监督）为大型架构提案。
- 长期未响应功能请求（2026-05-06 起持续开放）：
  - #6427、#6435、#6437、#6423、#6441、#6448（六个通道与集成请求，均为 status:accepted 但无合并 PR）。
  链接列表。
- PR 积压（45 条待合并）：
  - 叠加修复：#9447（Anthropic）→ #9999（Compatible），必须按顺序合并。
  - 大型 PR：#9713（运行时令牌会计）、#10146（插件逻辑通道激活，依赖 #9126 已合并）、#10144（提供者生命周期会计）、#9739（Zerocode 多会话面板，依赖 #9738 已合并）。
  链接分别列出。
- 建议维护者优先关注：#8692 队列中的 #9487/#9488 边界决策；#6105 cron 阻塞修复；#10241 受监督 Shell 路由修复。

Now I need to ensure the tone is objective, data-driven, highlights project health

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*