# OpenClaw 生态日报 2026-09-12

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-11 22:15 UTC

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

**OpenClaw 项目日报 – 2026‑09‑12**  
*数据来源：过去 24 小时 Issues 更新 500 条（新开/活跃 281，已关闭 219），PR 更新 500 条（待合并 293，已合并/关闭 207），以及新版本发布 v2026.9.4。*  

---

## 1. 今日速览
- 项目活跃度极高：过去一天产生了近千条交互（Issues+PR），其中近 40% 的 Issues 处于新开或活跃状态，显示社区持续在提交问题与讨论修复方案。  
- 已有 207 个 PR 完成合并或关闭，说明维护团队在当天成功消化了大量贡献，尤其在升级回滚、插件兼容性和资源泄漏方面取得实质进展。  
- 最新发布 **v2026.9.4** 引入了“兼容失败更新时的自动回滚”机制，为后续版本的稳定性奠定了基础。  
- 高评论 Issues（如 #119720、#97616、#96834）集中在网关事件阻塞、子进程僵尸以及多模态输入卡顿等核心运行问题，表明这些是当前社区关注的热点。  
- 整体趋势：Bug 报告与功能请求并存，修复节奏快于新功能堆积，项目健康度保持在良好区间。

---

## 2. 版本发布

| 版本 | 发布时间 | 关键更新 | 破坏性变更 | 迁移注意事项 |
|------|----------|----------|------------|--------------|
| **v2026.9.4** | 2026‑09‑11（数据中出现） | - **Recover from compatible failed updates**：在 schema 与配置检查通过后，自动保留先前版本的包并恢复之前的配置与服务（#140339）。<br>- 其他细微 bug 修复与性能改进（未在 highlights 中列出）。 | 无显著破坏性变更；回滚机制仅在兼容更新失败时触发，不会影响正常升级路径。 | - 数据库迁移仍然需要 **验证过的预更新备份**；若使用自定义备份脚本，请确保在执行 `openclaw update` 前完成备份。<br>- 建议在生产环境先在暂存集群上做一次完整升级回滚演练，以验证新回滚路径是否符合预期。 |

> 链接：[Release v2026.9.4](https://github.com/openclaw/openclaw/releases/tag/v2026.9.4)

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR 编号 | 标题 / 主要改动 | 关联 Issue | 状态 | 说明 |
|--------|----------------|------------|------|------|
| **#144005** | `fix(update): back up state before migrations and restore it on rollback` | #142770（兼容失败更新回滚） | **Open**（需证明） | 为 v2026.9.4 的回滚机制奠定实现基础；后续合并将确保升级失败时能够安全恢复。 |
| **#145169** | `fix: preserve newer data across failed update rollback` | #144005（同上） | **Open** | 互补 PR，确保在回滚过程中不丢失已成功写入的较新状态。 |
| **#145257** | `perf(models): reuse provider policies during catalog materialization` | 无直接 Issue | **Closed** | 减少模型目录构建时的重复策略加载，提升启动速度。 |
| **#145326** | `refactor: reuse Mattermost monitor test setup` | 无直接 Issue | **Closed** | 测试代码复用，降低维护成本。 |
| **#145317** | `fix(install): never replace or break an existing nvm during installation` | #145292 | **Open** | 防止安装脚本意外覆盖用户已有的 nvm 环境，解决了多位用户在安装后遇到的 “node version mismatch” 报错。 |
| **#145335** | `fix: complete Gateway upgrades after Node prefix changes` | #107930 | **Open（待作者）** | 解决在使用 nvm 切换 Node 前缀后，网关升级因前缀不匹配而失败的问题。 |
| **#145209** | `refactor(usage): await database admission and retain cache ownership` | 无直接 Issue | **Open** | 改进使用报告模块的数据库并发控制，减少因缓存刷新导致的阻塞。 |

> 以上 PR 均来自过去 24 小时的更新列表；已合并/关闭的 PR 虽未在列表中显示详细评论数，但从数量（207 条）可见维护团队当天处理了大量代码改动。

---

## 4. 社区热点（评论最多、反应最强的 Issues/PRs）

| 排名 | 编号 | 标题 | 评论数 | 👍 | 链接 | 主要讨论点 |
|------|------|------|--------|----|------|------------|
| 1 | **#119720** | Synchronous agent persistence and transcript maintenance block the Gateway event loop at scale | 17 | 0 | [链接](https://github.com/openclaw/openclaw/issues/119720) | 持久化写入与转录同步导致事件循环阻塞；社区提出异步写入、批量提交及检查点机制。 |
| 2 | **#97616** | OpenClaw leaks unreaped hook/tool child processes, causing zombie accumulation | 15 | 1 | [链接](https://github.com/openclaw/openclaw/issues/97616) | 僵尸进程积累导致运行时性能下降；讨论焦点在于 `waitpid` 调用位置和超时处理。 |
| 3 | **#96834** | WhatsApp 1:1: inbound image wedges main lane ~3min before processing | 15 | 1 | [链接](https://github.com/openclaw/openclaw/issues/96834) | 大图片上传导致主车道长时间卡住；建议将多模态输入卸载到 worker 线程或限制并发数。 |
| 4 | **#140620** | In-place upgrade 2026.7.1-2 → 2026.9.2: session-transcript reconciliation imports 27/~1500 sessions then stalls | 12 | 0 | [链接](https://github.com/openclaw/openclaw/issues/140620) | 升级时会话转录恢复卡死；涉及 SQLite 锁定和大量 *.trajectory.jsonl 文件的顺序读取。 |
| 5 | **#144712** | npm update fails at "global install swap"; intact rollback reported as "recovery is unverified" | 12 | 0 | [链接](https://github.com/openclaw/openclaw/issues/144712) | 全局安装交换步骤失败导致回滚不可用；社区强调需要更健壮的原子交换与锁机制。 |
| 6 | **#127148** | Codex sessions.compact acquires a second app-server and hits active-writer conflict | 12 | 0 | [链接](https://github.com/openclaw/openclaw/issues/127148) | 并发 compact 导致双写冲突；讨论引入写锁或串行化队列。 |
| 7 | **#142585** | Doctor refuses valid legacy workspace setup and attestation import when canonical rows are absent | 12 | 0 | [链接](https://github.com/openclaw/openclaw/issues/142585) | 迁移阻止器；社区询问是否可放宽对 legacy 行的校验。 |
| 8 | **#49876** (已关闭) | Cron sessions deliver hallucinated output instead of failing cleanly when tool calls fail | 12 | 1 | [链接](https://github.com/openclaw/openclaw/issues/49876) | 讨论仍在评论中出现，提醒团队关注 hallucination 风险。 |
| 9 | **#40786** (开放) | Feature Request: Add .gitignore-like exclude patterns to backup CLI | 12 | 1 | [链接](https://github.com/openclaw/openclaw/issues/40786) | 用户强烈希望备份工具支持排除模式，以减少体积和防止敏感信息泄露。 |
| 10 | **#9016** (已关闭) | Feature: Expose OpenRouter usage cost to agent runtime | 8 | 1 | [链接](https://github.com/openclaw/openclaw/issues/9016) | 成本透明度需求较高，已有实现 PR（如 #145248）在讨论中被引用。 |

**热点背后的诉求**  
- **性能与可伸缩性**：#119720、#97616、#96834 皆指向事件循环被同步阻塞或资源泄漏导致的吞吐下降。  
- **升级可靠性**：#140620、#144712 聚焦于就地升级过程中的状态不一致与回滚失效，直接呼应 v2026.9.4 中的回滚改进。  
- **功能完备性**：#40786、#9016 表明社区对备份灵活性和成本可见性有明确需求，尚未在主干合并。  

---

## 5. Bug 与稳定性（按严重程度排序）

| 严重度 | 编号 | 标题 | 关键症状 | 是否已有对应 fix PR | 链接 |
|--------|------|------|----------|----------------------|------|
| **P0 / Crash‑Loop** | #142476 | cron session reaper opens every agent database with a synchronous PRAGMA integrity_check, blocking the event loop 14‑76s every few minutes | 定时性事件循环长时间阻塞，导致网关卡死 | 未见直接 PR（需关注） | [链接](https://github.com/openclaw/openclaw/issues/142476) |
| **P0 / Crash‑Loop** | #144911 | MCP server init timeout crashes the Gateway — unhandled rejection "service child cleanup identity lost" | 未捕获的 Promise 拒绝导致进程退出 | 未见直接 PR | [链接](https://github.com/openclaw/openclaw/issues/144911) |
| **P0 / Crash‑Loop** | #140821 | Gateway restart hangs after updating to 2026.9.2 | 重启后卡在系统服务阶段 | 未见直接 PR | [链接](https://github.com/openclaw/openclaw/issues/140821) |
| **P0 / Session‑State** | #140620 | In-place upgrade stalls during session‑transcript reconciliation | 升级过程中会话恢复卡死 | #144005、#145169（回滚相关）在开发中 | [链接](https://github.com/openclaw/openclaw/issues/140620) |
| **P0 / UX‑Release‑Blocker** | #144742 | npm update fails at "global install swap"; intact rollback reported as "recovery is unverified" | 全局安装交换失败导致回滚不可用 | #144005、#145169（正在解决） | [链接](https://github.com/openclaw/openclaw/issues/144742) |
| **P1 / Message‑Loss** | #139847 | message sent while a reply run is active is dropped — "Reply operation has no active tool authority snapshot" | 高并发时消息被丢弃 | #142306（已开启）在等待证明 | [链接](https://github.com/openclaw/openclaw/issues/139847) |
| **P1 / Message‑Loss** | #126246 | Telegram durable outbound deliveries remain stuck in send_attempt_started and are lost on restart | Telegrams 消息在网关重启后丢失 | 未见直接 PR | [链接](https://github.com/openclaw/openclaw/issues/126246) |
| **P1 / Auth‑Provider** | #116691 | 使用openai-responses调用火山引擎，长对话出现 missing `input.status` parameter | 长对话时调用失败 | 未见直接 PR | [链接](https://github.com/openclaw/openclaw/issues/116691) |
| **P2 / UX‑Friction** | #141747 | Runtime scaffolding injects ~686 tokens/turn with no opt‑out | 每轮额外 token 消耗导致成本上升 | 未见直接 PR | [链接](https://github.com/openclaw/openclaw/issues/141747) |
| **P2 / Security** | #132601 | docs(plugin-sdk): clarify safe generated-video URL materialization | 文档缺失导致潜在安全风险 | 未见直接 PR | [链接](https://github.com/openclaw/openclaw/issues/132601) |

**观察**：  
- **崩溃/卡死类**（事件循环阻塞、未处理的 Promise 拒绝）占据最高优先级，且目前尚未有明确合并的 PR，建议维护团队在接下来的

---

## 横向生态对比

**今日重點（5‑8 條最重要更新）**

1. **OpenClaw（https://github.com/openclaw/openclaw）** – 發布 **v2026.9.4**，新增「兼容失敗更新時的自動回滾」機制，可在 schema 與配置檢查通過後保留先前版本並恢復配置，顯著提升升級穩定性。  
   *影響：減少因升級不相容導致的服務中斷，為後續版本奠定更可靠的基礎。*

2. **Hermes Agent（https://github.com/nousresearch/hermes-agent）** – 釋出 **v2026.9.11（v0.21.2）**，修復了 v0.21.0 中寫入 `state.db` 時的鎖競爭問題，解決多寫入者互相取消鎖導致的 session store 不穩定。  
   *影響：恢復本地狀態存儲的正常運作，避免因鎖衝突引起的卡死或數據損壞。*

3. **CoPaw（https://github.com/agentscope-ai/CoPaw）** – 發布 **v2.2.1 穩定版**，實現每個 Agent 獨立的模型路由（含偏好與回退），並引入 Auto Fin 主動內存審查以及 ReMe 模組升級，以提升長上下文對話效率。  
   *影響：使多智能體協作時模型選擇更精細，內存使用更可控，提升長對話場景的可用性。*

4. **NanoBot（https://github.com/HKUDS/nanobot）** – 今日合併多項關鍵 PR：DeepSeek 推理項修復（#5214）、Gemini 工具調用簽名回退（#5230）、gateway 關閉資源確定性（#5215），以及 WebUI 性能優化（長文本截圖、進度條去二進制、favicon 快取等）。  
   *影響：解決跨提供者的序列化錯誤與資源釋放問題，同時大幅降低 WebUI 頻寬與卡頓，提升穩定性與使用體驗。*

5. **NanoClaw（https://github.com/qwibitai/nanoclaw）** – 提交語音功能相關 PR：`/add-voice` 技能（#3764）與對應的 OpenAI GPT‑Live‑1 瀏覽器適配器（#3772），以及修復 uvx‑bootstrap 中 pnpm 未在 PATH（#3771）與併發 SQLite 遷移鎖（#3766）。  
   *影響：為多模態交互鋪路（全雙工瀏覽器語音），同時解決首次安裝與初始化失敗的兩大阻塞問題。*

6. **LobsterAI（https://github.com/netease-youdao/LobsterAI）** – 合併 PR #2653，修復 Windows 環境下插件清理時遞迴刪除誤移除宿主機運行時的嚴重 Bug；此外社區熱點聚焦於配置持久化（#1006、#2293）導致多 Agent 設定被覆蓋。  
   *影響：避免因插件清理造成的系統崩潰，並凸顯用戶對配置隔離與持久化的迫切需求。*

7. **Moltis（https://github.com/moltis-org/moltis）** – PR #1143 提交並待合併，**將 Requesty 作為新的 OpenAI‑相容提供者** 加入，採用表驅動設計複用現有 OpenRouter 接入邏輯。  
   *影響：擴充模型路由選擇，使用戶能透過 Requesty 靈活切換底層 LLM 服務，提升外掛生態相容性。*

---

**活躍度概覽**  
今日整體開發活躍度較高，尤其是 **OpenClaw、Hermes Agent、CoPaw、NanoBot、NanoClaw** 這五個項目在 PR 合併、Issue 討論與版本發布方面均有顯著貢獻。其他項目如 LobsterAI、Moltis 亦有具體的 Bug 修復或功能貢獻，但整體貢獻量與討論熱度略低於上述五項目。總體來看，社區正集中在核心穩定性（升級回滾、鎖競爭、資源釋放）、多模態擴展（語音、提供者相容）以及使用者體驗（WebUI 性能、配置持久化）上的改進。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**日期：2026-09-12**
**数据来源：github.com/HKUDS/nanobot（过去 24 小时）**

---

## 1. 今日速览

今日 NanoBot 呈"高并发、低噪音"的健康开发状态：24 小时内合入/关闭 PR 达 18 条，仅有 4 条 Issue 活跃，说明项目处于**开发冲刺期而非问题爆发期**。工作重心明显集中在 WebUI 性能优化、渠道（Email/Discord）稳定性修复与自动化管理交互简化，由 `chengyongru` 与 `Re-bin` 两位贡献者主导。社区侧值得关注的是 AnySearch 团队持续跟进集成（从搜索扩展到网页抓取），以及一条 P1 级登录初始化 Bug 尚未闭环。本日无新版本发布。

**健康度评估：** 节奏健康，合入量大，没有积压恶化的信号；但 P1 问题 #5726 需要尽快确认归属与修复方案。

---

## 2. 版本发布

本报告周期内无新版本发布（0 个 Release），暂无升级/迁移事项需要提示。

---

## 3. 项目进展

今日合入/关闭的重要 PR 主要推动了三类进展，项目在稳定性与前端体验上向前明显迈进：

**A. 稳定性与 Provider 兼容性（P1 级修复）**
- [#5214](https://github.com/HKUDS/nanobot/pull/5214) fix(providers): DeepSeek 推理项保持 wire-valid —— 解决 OpenAI Responses API 对输入类型的反序列化报错，DeepSeek 路由故障被修复。
- [#5230](https://github.com/HKUDS/nanobot/pull/5230) fix(gemini): 保留带签名回退的导入工具调用 —— 修复跨 Provider 迁移时 Gemini 3 拒绝无签名 function-call 的失败。
- [#5216](https://github.com/HKUDS/nanobot/pull/5216) fix(image): Gemini Flash 图像提示通过 `generationConfig.imageConfig` 传递 —— 修复 `HTTP 400 INVALID_ARGUMENT`。
- [#5215](https://github.com/HKUDS/nanobot/pull/5215) fix(gateway): 停止时确定性关闭 agent 资源 —— 消除 shutdown 阶段的 asyncio teardown 噪音与卡停。

**B. WebUI 性能与交互简化（体量最大）**
- [#5732](https://github.com/HKUDS/nanobot/pull/5732) / 拆分的 [#5738](https://github.com/HKUDS/nanobot/pull/5738)：长文本流式刷新开销降低，推理预览按 512 UTF-16 码元截断。
- [#5741](https://github.com/HKUDS/nanobot/pull/5741) fix(webui): 工具进度中剔除二进制数据 —— 解决图片读取导致的多 MB WebUI 记录与带宽消耗。
- [#5740](https://github.com/HKUDS/nanobot/pull/5740) 与 [#5742](https://github.com/HKUDS/nanobot/pull/5742)：自动化管理精简为响应式任务列表 + 详情弹窗，并修复删除后侧栏不可点击的回归。
- [#5736](https://github.com/HKUDS/nanobot/pull/5736) perf(webui): 公共 favicon 请求缓存，上限 128 条。
- [#5356](https://github.com/HKUDS/nanobot/pull/5356) feat(webui): 渠道目录改版为两列分组 + 紧凑设置弹窗（NAN-112），依赖安装与渠道激活解耦。
- [#5733](https://github.com/HKUDS/nanobot/pull/5733) refactor(webui): 拆分渠道设置职责，提升可维护性。

**C. 渠道与内部维护**
- [#5737](https://github.com/HKUDS/nanobot/pull/5737) fix(email): 禁用中间进度投递 —— Email 渠道不再生成无法呈现的中间事件。
- [#5734](https://github.com/HKUDS/nanobot/pull/5734) fix(memory): 明确 Dream 任务的提示词写入边界。
- [#5744](https://github.com/HKUDS/nanobot/pull/5744) chore: 移除未使用的 `core_agent_lines.sh` 计数脚本。

> 说明：这些 PR 中部分创建于 8 月初（如 #5214、#5230、#5215），于 2026-09-11 才关闭，可理解为长期在审、今日本批合入，提示项目在清理存量。

---

## 4. 社区热点

- **[Issue #5505 — AnySearch 作为 web 搜索提供方](https://github.com/HKUDS/nanobot/issues/5505)（8 条评论，已关闭）**：AnySearch 团队主动提出以 API/MCP/Skill 三种方式集成到 `web_search` 工具，今日关闭，说明集成已落地或进入提交阶段。
- **[Issue #5731 — AnySearch extract 作为 web_fetch 后端](https://github.com/HKUDS/nanobot/issues/5731)（新开，0 评论）**：同一团队在 #5505 关闭后立刻发起连环提案，意图把 AnySearch 的抓取能力也接入 `web_fetch`，诉求是"key 可选 + 匿名配额"。
- **[Issue #5726 — 初始密码问题](https://github.com/HKUDS/nanobot/issues/5726)（P1，2 条评论，Open）**：无头服务器部署用户无法通过 Web UI 继续，首次登录密码不明，属于阻塞级体验问题，社区关注度虽低但影响面直接。

> PR 侧数据未提供逐条评论数，但从主题聚类看，**WebUI 性能与自动化交互**是今日贡献者投入最密集的方向。

---

## 5. Bug 与稳定性

按严重程度排列：

| 级别 | Issue/PR | 状态 | 说明 | 是否有 fix PR |
|---|---|---|---|---|
| **P1** | [#5726 初始密码](https://github.com/HKUDS/nanobot/issues/5726) | Open | 无头部署后 Web UI 首次登录密码不明，无法继续使用 | ❌ 尚无 |
| P1 | [#5214 DeepSeek 推理项](https://github.com/HKUDS/nanobot/pull/5214) | 已合入 | 请求体反序列化失败 | ✅ 已修复 |
| P1 | [#5230 Gemini 工具调用](https://github.com/HKUDS/nanobot/pull/5230) | 已合入 | 跨 Provider 迁移后 function-call 被拒 | ✅ 已修复 |
| P1 | [#5215 gateway 资源关闭](https://github.com/HKUDS/nanobot/pull/5215) | 已合入 | shutdown teardown 噪音/卡停 | ✅ 已修复 |
| P2 | [#5719 Discord 压缩通知](https://github.com/HKUDS/nanobot/issues/5719) | 已关闭 | `sendProgress: false` 仍推送两条压缩消息 | 随渠道进度修复类 PR 解决 |
| P2 | [#5741 工具进度二进制](https://github.com/HKUDS/nanobot/pull/5741) | 已合入 | 图片读取产生多 MB 记录 | ✅ 已修复 |
| P2 | [#5216 Gemini Flash 图像提示](https://github.com/HKUDS/nanobot/pull/5216) | 已合入 | HTTP 400 INVALID_ARGUMENT | ✅ 已修复 |

**今日的稳定性重心已从"崩溃类"转向"资源占用与静默失败"类**，说明核心架构趋于稳定。

---

## 6. 功能请求与路线图信号

1. **AnySearch 双端集成（搜索 + 抓取）**：由 #5505（已关）+ #5731（Open）共同推进，外部团队维护、自带匿名配额，属于低成本、高价值的 Provider 扩展，**很可能进入下一版本**。
2. **DaoXE Gateway Provider**：[#5746](https://github.com/HKUDS/nanobot/pull/5746)（Open, P2）提出新增 DaoXE 网关 Provider，含文档与测试，属于标准新 Provider 流程。
3. **WebUI 大历史回放增量化 + 缓存**：[#5745](https://github.com/HKUDS/nanobot/pull/5745)（Open, P1）对 history replay 按消息/记录/字节设预算，并将解析、恢复等移出 gateway 事件循环，是性能方向的持续性投入，大概率纳入后续版本。
4. **设置目录控件简化**：[#5743](https://github.com/HKUDS/nanobot/pull/5743)（Open）延续 #5740 的简化方向，涉及自动化搜索/过滤常驻可见，交互趋向"减少隐藏、直达操作"。

---

## 7. 用户反馈摘要

- **无头/服务器部署是真实的痛点**：#5726 用户的完整路径是"无头服务器安装 → 默认启动链接无 JS 支持 → 换工作站用 Firefox 访问 → 不知道 Web UI 密码"，反映出**部署文档与初始配置指引存在断层**，尤其是首次密码的获取方式未在链路中明示。
- **Discord 用户在意"静默"承诺**：#5719 明确指出 `sendProgress: false` 只对普通进度生效，但空闲压缩仍打断聊天，说明**用户对"内部维护不干扰对话"的期望是严格的**，而非仅关掉常规进度条。
- **AnySearch 团队表现出强合作意愿**：连续两个 Issue、明确"已获授权提交 PR"、强调"匿名配额"，说明外部贡献者希望在**不增加用户配置负担**的前提下接入。

---

## 8. 待处理积压

- **[Issue #5726（P1 bug）](https://github.com/HKUDS/nanobot/issues/5726)**：阻塞级登录问题已开 2 天，仅有 2 条评论，未见维护者确认或 fix PR，**需要优先响应**，否则可能累积同类部署反馈。
- **[PR #5739 "Dev"（CI/CD, P2）](https://github.com/HKUDS/nanobot/pull/5739)**：标题与正文均为占位信息（摘要为空），疑为误提交或测试 PR，**建议维护者核实并关闭或补充描述**。
- **[PR #5255（conflict）](https://github.com/HKUDS/nanobot/pull/5255)**：Draft 性质的"对外部管理服务器的真实 API 状态 + `nanobot api status`"，因 conflict 被关闭，**核心诉求（网关未启动的 API 显示"Off"不实）尚未解决**，可能沉淀为待重提事项。
- **[PR #5745（P1, Open）](https://github.com/HKUDS/nanobot/pull/5745)**：今日最大的性能改造 PR，涉及回放预算与事件循环分离，**体量较大、需关注合并节奏与回归测试覆盖**。

---

*报告生成基于 GitHub 数据快照，PR 评论数未包含在数据源中。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-09-12)

**分析师：** AI 智能体与个人 AI 助手开源项目分析师

---

### 1. 今日速览
Hermes Agent 在过去 24 小时内表现出极高的活跃度，产生了 50 条 Issue 和 50 条 PR。项目今日发布了 **v2026.9.11** 补丁版本，旨在修复上版本引入的 `state.db` 锁竞争问题。目前社区焦点集中在 **CLI 更新稳定性、Desktop 端 UI 渲染以及特定平台（Linux/Windows）的兼容性 Bug** 上。整体项目状态活跃，正处于功能快速迭代后的故障修复与调优期。

---

### 2. 版本发布
**发布版本：** v2026.9.11 (v0.21.2)
*   **类型：** Patch Release (补丁版本)
*   **核心修复：** 修复了 v0.21.0 版本中重写 session store 连接处理后导致的 `state.db` 脆弱性。该版本解决了多个写入者可能相互取消锁的问题，确保了本地状态存储的稳定性。

---

### 3. 项目进展
今日合并/关闭了 8 个 PR，仍有 42 个 PR 待处理。主要进展集中在：
*   **环境隔离修复：** 修复了 Bot Mode 在后台发送消息时未使用 gateway 虚拟环境的问题 (PR #108632, #108631)。
*   **状态逻辑优化：** 修复了 Session 压缩（Compression）模式下消息计数不准确的 Bug (PR #107913, #107912)。
*   **安全与配置：** 修复了在 API Key 缺失时错误地进入 fallback 链的逻辑问题 (PR #107878)。

---

### 4. 社区热点
今日社区最关注的话题集中在以下领域：
*   **Skills Hub 索引失效 (#66616):** 评论数高达 198。自动化新鲜度检测失败，导致技能索引已过期 29.8 小时（超过 26 小时限制）。这直接影响 Agent 调用工具技能的准确性。[链接](https://github.com/NousResearch/hermes-agent/issues/66616)
*   **Nous 集成阻塞 (#88584):** 评论数 89。由于 `cron/jobs.py` 冲突，自动化的 Nous 集成合并被阻塞，导致仪表板无法更新。[链接](https://github.com/NousResearch/hermes-agent/issues/88584)
*   **CLI 更新警告 (#107402):** P1 级。`hermes update` 在网关进程树内调用时会永久留下“未重启运行中的网关”的警告。[链接](https://github.com/NousResearch/hermes-agent/issues/107402)

---

### 5. Bug 与稳定性 (按严重程度排序)
| 严重程度 | Issue ID | 描述摘要 | 状态/Fix PR |
| :--- | :--- | :--- | :--- |
| **P1** | #100573 | Linux/Wayland 下 Electron 频繁触发 `SIGTRAP` 崩溃 | 待处理 |
| **P1** | #107402 | `hermes update` 导致网关状态永久标记为 stale | 待处理 |
| **P2** | #108575 | `profile create --clone` 遗失 `max_turns` 配置，导致 4 次即耗尽 | 待处理 |
| **P2** | #89527 | `computer_use` 的工具能力被静默丢弃导致 element_token 无效 | 待处理 |
| **P2** | #102252 | Linux 下因 Page Cache 导致状态栏显示内存占用率虚高 | 待处理 |
| **P2** | #107232 | Windows 下执行 .cmd 文件时子进程挂起 | 待处理 |
| **P3** | #87739 | /hatch 管道在无法分割的动画行上反复重试消耗付费请求 | 待处理 |

---

### 6. 功能请求与路线图信号
*   **CLI 审计追踪 (Provenance):** 用户强烈要求在 CLI One-shot ( `hermes -z`) 中记录调用溯源（TTY、父进程等），但不存储原始提示词以保护隐私 (Issue #108618, #108629, #108622)。
*   **内存阈值配置化:** 请求将内存压力分类器的硬编码阈值改为可通过环境变量或配置控制 (Issue #90713, #108549)。
*   **Webex 支持:** 有一个将 Webex 作为原生网关支持的 PR 正在进行中 (PR #9855)。
*   **Session 标题重生成:** 希望在 Desktop 端增加基于 LLM 的自动刷新会话标题功能 (Issue #47803, #66616)。

---

### 7. 用户反馈摘要
*   **痛点：** 用户反馈在 Linux 环境下内存显示极不准确（受 Page Cache 影响），导致 UI 焦虑。
*   **痛点：** Desktop 端语音录制限制被忽略，用户手动配置的 120 秒以上限制无效 (Issue #108620)。
*   **场景：** 开发者在使用 Bot Mode 进行多 Agent 间通信时，频繁遇到环境路径解析回退到系统 Python 导致的崩溃。

---

### 8. 待处理积压
*   **安全风险：** #66616 和 #60056 指出自主 Agent 在生产环境中合并 PR 时缺乏人类确认机制（存在 VCS 操作和代码执行漏洞），属于高优先级安全隐患。
*   **稳定性风险：** #107070 提到的瞬时失败后持久化的消息在数日后被重放，导致模型执行过时请求。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-09-12)

## 1. 今日速览
今日 PicoClaw 项目保持了稳健的活跃状态，过去 24 小时内处理了 4 条 Issue 和 3 条 PR。项目目前主要集中在**第三方平台兼容性修复（Slack/飞书）**以及**模型 Provider 的扩展性增强**上。虽然今日没有新版本发布，但社区在 UI 性能优化和新模型适配方面表现活跃，整体开发者反映出项目在个人化 AI 助手领域具有良好的扩展性。

## 2. 版本发布
*今日无新版本发布。*

## 3. 项目进展
今日合并/关闭了 1 项关键 PR：
*   **[PR #3340] [fix(slack): set FileSize on media upload params](https://github.com/sipeed/picoclaw/pull/3340)**
    *   **进展说明**：修复了 Slack 媒体上传失败的 Bug。通过在 `SendMedia` 中显式设置 `FileSize`，解决了 `slack-go` SDK 因文件长度为 0 而拒绝请求的问题。
    *   **影响**：显著提升了 PicoClaw 与 Slack 平台交互的可靠性。

## 4. 社区热点
社区讨论主要集中在“多后端兼容性”上：
*   **OpenAI 兼容性扩展需求 ([Issue #3366](https://github.com/sipeed/picoclaw/issues/3366))**
    *   **深度分析**：用户希望支持自定义的 OpenAI 兼容提供者（如 9Router）。这反映了用户正逐渐从单一 API 服务转向私有化部署或多模型路由网关的趋势。
*   **OpenCode Go 适配 ([PR #3371](https://github.com/sipeed/picoclaw/pull/3371))**
    *   **深度分析**：开发者主动提交了 `opencode-go` Provider，并支持特定的 Session Header（`x-opencode-session`）。这显示出 PicoClaw 生态系统对新兴 AI 平台有极强的快速接入能力。

## 5. Bug 与稳定性
今日报告了两个稳定性问题，按严重程度排序如下：
1.  **飞书连接配置报错 ([Issue #3355](https://github.com/sipeed/picoclaw/issues/3355))**
    *   **描述**：`config.json` 包含未知字段 `channel_list.feishu.app_id` 导致连接失败。
    *   **严重程度**：高（核心功能不可用）。
    *   **状态**：Open 中。
2.  **RKLLM 回复异常 ([Issue #3346](https://github.com/sipeed/picoclaw/issues/3346))**
    *   **描述**：在 ARM 开发板上使用 Qwen3.5-0.8B 模型时出现异常答复。
    *   **严重程度**：中。
3.  **Slack 媒体上传失败 ([Issue #3338](https://github.com/sipeed/picoclaw/issues/3338))**
    *   **描述**：无法上传图片媒体内容（由于文件大小为0）。
    *   **状态**：已通过 [PR #3340] 修复并关闭。

## 6. 功能请求与路线图信号
从今日 PR 和 Issue 来看，未来的路线图可能包含以下方向：
*   **UI 性能优化**：**[PR #3347](https://github.com/sipeed/picoclaw/pull/3347)** 尝试解决长文本对话下 Web UI 的卡顿问题。如果被合并，将极大提升长对话场景的易用性。
*   **Provider 多态化**：支持 "OpenAI Compatible" 模式将成为下一个高优先级需求，有助于 PicoClaw 接入更广阔的 AI 接入网关生态。

## 7. 用户反馈摘要
*   **优点**：用户对 PicoClaw 在适配不同硬件（如 ARM 开发板、RKLLM）上的底层能力表示认可。
*   **痛点**：
    *   **配置严谨性**：飞书等插件的配置格式与代码逻辑不匹配，导致新用户配置时困扰。
    *   **性能瓶颈**：当聊天记录较多时，前端界面存在明显的渲染延迟。

## 8. 待处理积压
*   **[PR #3347] fix laggy interface](https://github.com/sipeed/picoclaw/pull/3347)**：该 PR 已标记为 `stale`，但解决的 UI 卡顿问题非常关键，建议维护者评估其代码兼容性并决定合并。
*   **[Issue #3366] Add support for OpenAI compatible providers](https://github.com/sipeed/picoclaw/issues/3366)**：该需求影响力较大，建议尽快将其设计化并制定实现方案。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw 项目动态日报（2026‑09‑12）**  

---

### 1. 今日速览  
- **活跃度**：过去 24 h 内共计 **7 条 Issues**（5 新/活跃，2 已关闭）和 **16 条 PR**（15 待合并，1 已合并/关闭），表明今日开发节奏活跃，PR 提交量高但大部分仍在审核中。  
- **版本状态**：暂无新版本发布，项目仍停留在上次发布的基线上。  
- **整体趋势**：大量与安装/初始化（uvx、pnpm、PATH）、容器冷杀、声 channel 以及迁移竞争相关的 bug 被报告，社区正在通过多个修复 PR 尝试解决这些阻塞问题；功能侧则有新增语音（/add‑voice）技能的提交，显示路线图向多模态交互迈进。  

---

### 2. 版本发布  
> **无新版本**  
> 今日没有发布任何 Release，因而无需说明更新内容、破坏性变更或迁移注意事项。  

---

### 3. 项目进展（已合并/关闭的重要 PR）  

| PR | 状态 | 关键变更 | 影响 | 链接 |
|----|------|----------|------|------|
| #3274 | **CLOSED** | 更新 `add-opencode` 技能文档，使其符合 `cli-tools.json` 模式；移除旧的 Dockerfile `ARG`+`RUN pnpm install -g` 指令及其守护测试。 | 消除了技能文档与实际容器构建之间的不一致，防止后续 `add-opencode` 升级时出现残留文件或构建失败。 | [nanocoai/nanoclaw PR #3274](https://github.com/nanocoai/nanoclaw/pull/3274) |
| #3761 | **CLOSED** | 仅为权限探测的标记 Issue（`probe-permission-test-do-not-merge`），无实际代码更改。 | 对项目功能无实质影响，仅用于内部测试流程。 | [nanocoai/nanoclaw Issue #3761](https://github.com/nanocoai/nanoclaw/issues/3761) |

> **其他 PR**：目前均处于 **OPEN** 状态，等待审核或修改。其中几个与今日热点 bug 高度相关（见下文），若顺利通过审核将直接提升稳定性。  

---

### 4. 社区热点（讨论最活跃、评论最多或反应最多的 Issues/PRs）  

| 类型 | 编号 | 主题 | 评论/反应 | 关键诉求 | 链接 |
|------|------|------|-----------|----------|------|
| Issue | #3769 | Fresh uvx bootstrap 找不到 pnpm（`~/.local/bin` 不在 PATH） | 0 评论，但今日新开且多次被引用在 PR #3771 中 | 需要在 uvx 安装流程中确保 `~/.local/bin` 被加入 PATH，或改用全局 fallback。 | [#3769](https://github.com/nanocoai/nanoclaw/issues/3769) |
| Issue | #3765 | 并发 SQLite 迁移导致初始化失败 | 0 评论，但与 PR #3766 直接对应 | 希望在 host 和 CLI-agent 初始化时加锁或重试机制，防止同一迁移被应用两次。 | [#3765](https://github.com/nanocoai/nanoclaw/issues/3765) |
| Issue | #3643 | 硬编码 30 min `ABSOLUTE_CEILING_MS` 杀死长本地模型回合 | 1 评论 | 用户希望将此上限变为可配置项（通过环境变量或配置文件），以支持长时推理任务。 | [#3643](https://github.com/nanocoai/nanoclaw/issues/3643) |
| PR | #3772 | 添加语音适配器（OpenAI GPT‑Live‑1 浏览器呼叫） | 0 评论，但为今日最受关注的功能 PR | 社区期待通过 `/add-voice` 实现全双工浏览器对话，提升交互体验。 | [#3772](https://github.com/nanocoai/nanoclaw/pull/3772) |
| PR | #3764 | `/add-voice` 技能（全双工浏览器对话） | 0 评论，与 #3772 配套 | 同样围绕语音功能的需求，表明这是当前的功能热点。 | [#3764](https://github.com/nanocoai/nanoclaw/pull/3764) |

> **分析**：今日的讨论集中在 **安装/启动可靠性**（uvx‑pnpm、PATH、SQLite 迁移）以及 **新功能语音通道** 上。前者直接影响用户首次体验，后者则反映出社区对多模态交互的强烈期待。  

---

### 5. Bug 与稳定性（按严重程度排列）  

| 严重程度 | 编号 | 类型 | 描述 | 是否已有对应 Fix PR | 链接 |
|----------|------|------|------|-------------------|------|
| **高** | #3765 | Bug（并发 SQLite 迁移） | 初始化时 host 和 CLI-agent 同时读取迁移账本，导致同一迁移被应用两次，脚本退出失败。 | **是** – PR #3766（fix(db): recheck migrations under SQLite write lock） | [#3766](https://github.com/nanocoai/nanoclaw/pull/3766) |
| **高** | #3769 | Bug（uvx‑bootstrap pnpm 未找到） | 新机器上使用 `uvx` 安装后，启动脚本找不到 `pnpm`，因为 `~/.local/bin` 未加入 PATH。 | **是** – PR #3771（fix: recover uvx-installed pnpm after bootstrap） | [#3771](https://github.com/nanocoai/nanoclaw/pull/3771) |
| **中** | #3643 | Bug（硬编码 30 min 冷杀） | 长时本地模型回合被容器绝对上限（1800 s）提前杀死，无法配置。 | **否** – 尚未见对应 PR，仅有讨论。 | [#3643](https://github.com/nanocoai/nanoclaw/issues/3643) |
| **中** | #3576 | Bug（率限错误通知重复） | 每次重试率限时都会通过 `deliverErrorResult` 发送重复错误提示，缺少回退/去重。 | **否** – 尚无修复 PR。 | [#3576](https://github.com/nanocoai/nanoclaw/issues/3576) |
| **低** | #3762 | Bug（add-opencode 留守旧 Dockerfile 守护测试） | 旧版 `/add-opencode` 安装遗留的测试文件未在移除/升级时清理。 | **是** – PR #3763（fix(add-opencode): drop the pre-cli-tools Dockerfile guard） | [#3763](https://github.com/nanocoai/nanoclaw/pull/3763) |

> **总结**：今日有 **2 个高严重性 bug** 已配套修复 PR（#3766、#3771），若合并将大幅提升首次安装成功率；其余中低严重性问题仍需后续跟进。  

---

### 6. 功能请求与路线图信号  

| 功能 | 相关 Issue/PR | 说明 | 是否有对应实现 PR | 预计纳入版本 |
|------|---------------|------|-------------------|--------------|
| 语音通道（全双工浏览器对话） | Issue #3764（技能）/ PR #3772（适配器） | 添加 `/add-voice` 技能及其 webhook 适配器，使用 OpenAI GPT‑Live‑1 实现浏览器端语音输入/输出。 | **是** – #3764、#3772 均为 OPEN，等待审核。 | 若本周内合并，预计随下一个功能版本（v2.4.x）一起发布。 |
| 可配置的容器绝对上限（ABSOLUTE_CEILING_MS） | Issue #3643 | 将硬编码的 30 min 上限暴露为环境变量或配置项，以支持长时本地模型。 | **否** – 尚无 PR。 | 需要社区贡献或维护者安排；可能进入 v2.5.x。 |
| 改进速率限制错误处理（去重/回退） | Issue #3576 | 在 `deliverErrorResult` 中加入退避和去重机制，避免频繁重复通知。 | **否** – 尚无 PR。 | 可作为稳定性补丁，可能在 v2.4.1 中快速跟进。 |
| PATH 修复（uvx‑pnpm） | Issue #3769 / PR #3771 | 确保 `~/.local/bin` 在启动脚本中被加入 PATH，以便找到 uvx 安装的 pnpm。 | **是** – PR #3771 已就绪。 | 预计将在下一个补丁版本（v2.3.1）中合并。 |

---

### 7. 用户反馈摘要（从 Issues 评论中提炼）  

- **安装痛点**：多位用户反馈在全新机器上使用 `uvx` 启动时报 `pnpm: command not found`（Issue #3769），导致首次体验中断。  
- **容器冷杀**：在运行较大本地模型时，用户观察到回合被莫名中断，日志显示 `Killing container past absolute ceiling`（Issue #3643），影响长时任务的可用性。  
- **重复错误提示**：当服务触发速率限制时，用户在聊天窗口看到大量相同的错误通知（Issue #3576），造成信息噪声。  
- **语音功能期待**：社区对 `/add-voice` 技能表现出强烈兴趣，认为这是实现更自然交互的关键一步（PR #3764、#3772 的快速提交）。  
- **文档与代码不一致**：旧版 `add-opencode` 技能文档仍指向不存在的 Dockerfile 指令（Issue #3204、#3762），导致升级时出现残留文件或构建失败。  

> **总体情感**：用户对项目的核心功能持肯定态度，但对首次安装的可靠性、长时任务的稳定性以及重复错误噪声表达不满；新功能（语音）则被视为提升吸引力的积极信号。  

---

### 8. 待处理积压（长期未响应的重要 Issue/PRs）  

| 编号 | 类型 | 未更新时间 | 主要问题 | 为什么值得关注 |
|------|------|------------|----------|----------------|
| #3287 | PR | 2026‑09‑11（已超过 25 天） | Strip agent‑group suffix from inbound platform message ID | 影响消息 ID 的准确性，可能导致依赖 ID 的功能（如任务追踪、审计）出现偏差。 |
| #3276 | PR | 2026‑09‑11（超过 25 天） | Sanitize path‑separator message IDs for attachment staging | 阻止 Google Chat 等平台的附件上传，影响多平台兼容性。 |
| #3281 | PR | 2026‑09‑11（超过 25 天） | Agent‑scoped ncl tasks 盲对预‑2.1.54 遗留会话 | 可能导致老会话中的任务无法被列出或管理，影响升级向后兼容性。 |
| #3286 | PR | 2026‑09‑11（超过 25 天） | Skip image rebuild in restart when no packages configured | 虽为优化，但长期未合并可能导致不必要的镜像构建，浪费 CI 资源。 |
| #3449 | PR | 2026‑09‑11（超过 20 天） | fix(telegram): pin explicit allowedUpdates | 未合并可能导致 Telegram bot 在服务器端配置变更后收不到更新，影响通知可靠性。 |

> **建议**：维护者可考虑在例行的 **triage 会议** 中批量审阅这些已超时的 PR，评估是否需要额外信息、 rebase 或直接关闭（若已被其他更改覆盖）。  

---

**报告结束**。祝项目开发顺利，期待下一个版本带来更稳定的安装体验和丰富的多模态交互功能！  

*数据来源：GitHub Issues & PRs（截止 2026‑09‑12 00:00 UTC）*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw 项目日报（2026‑09‑12）**  

---

### 1. 今日速览  
- 过去 24 小时内未出现新 Issues，且已关闭 Issues 也为 0，表明社区讨论与问题反馈近期处于低活跃状态。  
- 仅有一条 Pull Request（PR #8076）处于 **待合并** 状态，未出现新的合并或关闭事件，项目代码库在今天未有实质性的变更。  
- 未有新版本发布，说明近期没有里程碑式的发布计划或热修复需求。  
- 整体来看，项目今日处于 **维护待审** 状态：核心代码暂无新增，社区关注度较低，但仍有待审 PR 需要关注。  

### 2. 版本发布  
- 今日 **无** 新版本发布。  

### 3. 项目进展  
- **合并/关闭的 PR**：今日无 PR 被合并或关闭，因而没有直接推进的功能或修复。  
- **待合并 PR #8076**（[nearai/ironclaw PR #8076](https://github.com/nearai/ironclaw/pull/8076)）  
  - 主要内容：在助手（assistant）模块中增加对 **已断开的共享通道** 与 **未配对账户** 的区分，并在用户消息与机器人命令渲染时提供通道特定的引导信息；同时保持在产品、适配器及 OpenAI 兼容接口之间的拒绝分类一致；并更新了 Slack 能力。  
  - 该 PR 若被合并，将提升多平台下共享通道的用户体验，减少因状态不明导致的误操作，间接增强系统稳定性。  

### 4. 社区热点  
- 今日社区讨论最活跃的对象正是 **PR #8076**（评论数目前为 `undefined`，但因是唯一活跃 PR，故成为焦点）。  
- 讨论背后的诉求主要是：开发者希望在多渠道（尤其是 Slack）中能够清晰区分“已断开的共享通道”与“尚未配对的账户”，以便给予用户更精准的提示，减少因状态混淆导致的命令失败或错误提示。  

### 5. Bug 与稳定性  
- 今日 **未** 有新 Bug、崩溃或回归问题报告。  
- 由于没有新 Issues，暂无需跟踪的严重程度分类或对应的 fix PR。  

### 6. 功能请求与路线图信号  
- PR #8076 本身即是一项功能改进请求，聚焦于 **共享通道状态识别**。  
- 从其描述可看出，该需求已经得到开发者（be‑student）的实现，待合并后很有可能被纳入下一个例行版本（若项目遵循定期发布节奏）。  
- 未见其他功能请求（Issues 为空），故当前路线图信号主要依赖于此 PR 的后续处理。  

### 7. 用户反馈摘要  
- 因今日无 Issues 评论，无法直接提炼用户痛点或使用场景。  
- 然而，PR #8076 的标题与摘要间接反映了用户在使用共享通道时遇到的困惑：系统无法区分“已断开”和“未配对”两种状态，导致提示不够具体。若该 PR 被合并，预计能提升用户在跨平台协作时的满意度。  

### 8. 待处理积压  
- **长期未响应的重要 PR**：目前仓库中仅有一条待合并 PR（**#8076**），创建于 2026‑09‑06，最后更新于 2026‑09‑11，距今已超过 5 天仍未进入合并流程。  
  - 建议维护者审查该 PR 的代码质量、测试覆盖以及与现有分支的冲突情况，优先完成合并，以免其成为后续开发的阻塞点。  
- 由于没有长期未响应的 Issues，暂无其他积压需关注。  

---  

*以上内容均基于 GitHub 公开数据（Issues、PR、Releases）生成，旨在客观反映 IronClaw 当日的项目健康度与社区动态。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-09-12)

## 1. 今日速览
LobsterAI 今日保持了较高的开发活跃度，过去 24 小时处理了 8 条 PR（合并 6 条），主要集中在构建优化、插件清理机制及渲染性能修复上。然而，社区反馈正聚焦于“**配置持久化**”与“**Agent 配置冲突**”的问题上，多个用户反映软件重启后会导致自定义的 `USER.md` 和配置文件被重置，这严重影响了多 Agent 场景的使用体验。目前项目处于功能快速迭代期，但核心存储逻辑的稳定性仍需待重点解决。

## 2. 版本发布
*今日无新版本发布。*

## 3. 项目进展
今日合并并关闭了 6 条 PR，显著提升了构建的稳定性和跨平台兼容性：
*   **包体体积优化**：[PR #2655](https://github.com/netease-youdao/LobsterAI/pull/2655) 优化了 Windows 和 macOS 平台的安装包大小。
*   **插件清理修复**：[PR #2653](https://github.com/netease-youdao/LobsterAI/pull/2653) 修复了 Windows 环境下 Electron 递归删除插件时误删宿主机运行时（host runtime）的严重 Bug。
*   **网关自愈能力**：[PR #2656](https://github.com/netease-youdao/LobsterAI/pull/2656) 改进了 Gateway 启动的自愈机制。
*   **渲染与依赖修复**：[PR #2657](https://github.com/netease-youdao/LobsterAI/pull/2657) 解决了缩略图渲染及原生依赖构建的冲突问题。

## 4. 社区热点
今日新增/活跃的 3 条 均指向了核心数据丢失/覆盖风险：
*   **Agent 配置覆盖 Bug (高优先级)**：[Issue #2293](https://github.com/netease-youdao/LobsterAI/issue/2293)
    *   **痛点**：用户发现创建多个 Agent 后，修改其中一个的“关于你”或 `USER.md` 会导致所有 Agent 同步修改，且重启后所有 Agent 的配置会被主 Agent 的内容覆盖。
*   **配置文件与工作空间被重置 (高优先级)**：[Issue #1006](https://github.com/netease-youdao/LobsterAI/issue/1006)
    *   **痛点**：软件启动时会从内部模板重新生成 `openclaw.json` 和 `AGENTS.md`，导致用户自定义的渠道配置失效，目前只能通过定时任务临时规避。
*   **插件 Hooks 字段丢失**：[Issue #2654](https://github.com/netease-youdao/LobsterAI/issue/2654)
    *   **痛点**：由于同步逻辑（syncToDisk）未包含 `hooks` 字段，导致 Gateway 重启后插件钩子丢失。

## 5. Bug 与稳定性
*   **[严重] 配置文件覆盖风险**：见 Issue #2293 和 #1006。这属于核心逻辑类 Bug，可能存在数据持久化机制的缺陷，导致用户工作成果丢失。
*   **[中等] 插件 Hooks 丢失**：见 Issue #2654。已定位根因（`openclawConfigSync.ts` 返回值不全），已有明确的修复建议。
*   **[已修复] 宿主机误删**：通过 PR #2653 解决了 Windows 平台插件清理导致的系统崩溃问题。

## 6. 功能请求与路线图信号
*   **持久化保护机制**：用户建议在 Issue #1006 中提供官方的配置持久化方案，而非目前的过度激进的模板覆盖机制。
*   **多 Agent 隔离增强**：根据 Issue #2293 的反馈，项目需要强化不同 Agent 之间 `USER.md` 的物理/逻辑独立性。

## 7. 用户反馈摘要
*   **负面反馈**：用户对“重启即重置”的行为感到非常沮丧，认为目前的保护机制过于激进，导致无法为不同 Agent 建立差异化需求。
*   **体验建议**：用户目前被迫使用“定时任务 workaround（临时方案）”来保护配置，这极大地降低了产品的易用性。

## 8. 待处理积压
*   **Issue #1006**（创建于 2026-03-28，已存在 6 个月）：关于配置被重置的问题仍无官方解决方案，建议维护团队尽快介入。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-19-12)

## 1. 今日速览
今日 Moltis 项目处于平稳的维护状态。在过去 24 小时内，没有新的 Issue 产生或版本发布，但社区贡献者提交了一个关于功能扩展的 Pull Request。目前项目活跃度中等，重心集中在底层模型提供商的兼容性扩展上，整体健康度良好，显示出向更丰富的 LLM 生态系统持续演进。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
*   **[#1143: Add Requesty as an OpenAI-compatible provider](https://github.com/moltis-org/moltis/pull/1143)**
    *   **描述**：该 PR 提议引入 Requesty（一个 LLM 路由器）作为新的 OpenAI 兼容提供者。其实现采用了表驱动（table-driven）的设计，复刻了现有 `openrouter` 的接入逻辑。
    *   **影响**：此项合并后将显著增强 Moltis 对多模型路由的支持能力，允许用户通过 Requesty 灵活切换底层 AI 模型服务。

## 4. 社区热点
*   **[#1143: Add Requesty as an OpenAI-compatible provider](https://github.com/moltis-org/moltis/pull/1143)**
    *   **分析**：社区目前表现出对“模型路由器（LLM Router）”集成的高度关注。通过接入 Requesty 等工具，用户希望在不改变核心配置的情况下，实现更灵活的模型调度方案，这反映了个人 AI 助手用户对扩展性的追求。

## 5. Bug 与稳定性
今日无报告新的 Bug、崩溃或回归问题。

## 6. 功能请求与路线图信号
*   **生态兼容性扩展**：从 PR #1143 可以看出，Moltis 的路线图正倾向于深化“OpenAI 兼容生态”。开发者和社区正倾向于通过增加更多第三方 API 接入点（如 Requesty）来降低用户将不同模型集成到 AI 助手的门槛。

## 7. 用户反馈摘要
今日无新的 Issue 讨论反馈。

## 8. 待处理积压
今日无新增关注的长期积压项。

---
**分析师备注：** AI 智能体与开源项目分析师
**报告日期：** 2026-09-12

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (AgentScope) 项目动态日报 (2026-09-12)

## 1. 今日速览
CoPaw 今日呈现出极高的开发活跃度，过去 24 小时处理了 **41 条 PR** 和 **21 条 Issue**。项目不仅正式发布了 **v2.2.1 稳定版**，核心重心集中在**模型路由精细化、内存管理升级**以及**针对多租户 Hub 的架构演进**上。社区正处于从“个人助手”向“团队协作平台”转型的关键期，开发者正在积极解决子代理（Sub-agent）执行失效及多端同步等硬性痛点。

---

## 2. 版本发布
**新发布版本：v2.2.1 (Stable)**
*   **核心变更**：
    *   **模型路由优化**：支持为每个 Agent 独立配置模型路由，包括 Provider 偏好和回退机制（Fallback behavior）。
    *   **内存管理升级**：新增了 Auto Fin 主动内存审查功能，并升级了 ReMe 模块以提升长上下文对话的处理效率。

---

## 3. 项目进展 (重点 PR 动态)
今日合并/关闭了 18 条 PR，核心贡献包括：
*   **模型路由精细化**：[#7501](https://github.com/agentscope-ai/QwenPaw/pull/7501) 实现了 Agent 级别的独立路由配置，极大增强了复杂任务下的模型容错性。
*   **兼容性修复**：[#7677](https://github.com/agentscope-ai/QwenPaw/pull/7677) 修复了非有限输入（Non-finite inputs）导致 API 422 错误的问题，通过将错误信息转换为字符串 避免了程序崩溃，并确保了 JSON 格式安全。
*   **UI/UX 优化**：[#7688](https://github.com/agentscope-ai/QwenPaw/pull/7688) 改进了会话列表展示，将“折叠列表”改为“加载更多”分页模式，提升了长列表下的操作体验。
*   **测试保障**：[#7701](https://github.com/agentscope-ai/QwenPaw/pull/7701) 修复了审批命令处理器的单元测试 Stub，确保了在 Python 3.11/3.13 环境下的稳定性。

---

## 4. 社区热点 (高关注 Issue)
*   **多租户 Hub 演进讨论**：[#7318](https://github.com/agentscope-ai/QwenPaw/issue/7318)
    *   **热点**：QwenPaw 正从个人工具向团队工具转型。社区高度关注 2.2.0 后多租户版 Hub 的后续功能，如多用户访问、管理员管理技能等。
*   **Sub-agent 执行失效问题**：[#7678](https://github.com/agentscope-ai/QwenPaw/issue/7678)
    *   **热点**：用户反馈调用 `spawn_subagent` 后任务频繁失败或超时，且即使增加超时时间也无效，这是目前影响复杂协作的核心瓶颈。
*   **会话数据同步 Bug**：[#7698](https://github.com/agentscope-ai/QwenPaw/issue/7698)
    *   **热点**：Tauri 版本中会话索引与磁盘文件不同步，导致“幽灵会话”或内容丢失，严重影响用户数据安全。

---

## 5. Bug 与稳定性 (待修复/处理)
*   **[严重] 任务停止失效**：[#7567](https://github.com/agentscope-ai/QwenPaw/issue/7567) Web 端点击停止后显示成功，但后台任务仍在运行，导致后续指令产生 409 冲突。
*   **[体验] 定时任务输出异常**：[#7709](https://github.com/agentscope-ai/QwenPaw/issue/7709) 定时任务的结果经常被错误折叠在 Thinking 或步骤详情中，或干脆显示无输出。
*   **[回归] 目录设置丢失**：[#7708](https://github.com/agentscope-ai/QwenPaw/issue/7708) 切换智能体后，自定义的工作目录会意外重置为默认路径。
*   **[Bug] PDF 块传输兼容性**：[#7689](https://github.com/agentscope-ai/QwenPaw/issue/7689) 在使用 OpenAI 兼容的 endpoint 时，PDF 块仍未被正确序列化，导致请求被拒绝。

---

## 6. 功能请求与路线图信号
*   **多模型协作（High Priority）**：[#4901](https://github.com/agentscope-ai/QwenPaw/issue/4901) 建议 `spawn_subagent` 支持按任务选择模型（如简单任务用廉价模型，复杂推理用大模型），以节省 Token。
*   **上下文自动压缩命令**：[#7679](https://github.com/agentscope-ai/QwenPaw/issue/7679) 用户强烈建议在“目标”和“任务”模式下增加 `/compact` 命令，手动管理长上下文导致的 Token 浪费。
*   **移动端适配优化**：[#7707](https://github.com/agentscope-ai/QwenPaw/issue/7707) 用户反馈安卓端输入法没有回车键，点击换行即触发提交，导致长文本输入极其困难。
*   **新 Provider 扩展**：[#7711](https://github.com/agentscope-ai/QwenPaw/issue/7711) 社区引入 **Serply** 作为网页搜索的第三种后端。

---

## 7. 用户反馈摘要
*   **操作痛点**：用户反映 Web 部署首页布局不合理，操作入口位置靠下，在手机端操作极易误触“停止运行”[#7177]。
*   **命名冲突**：内置模板命名为“默认”与用户设置的“默认配置”存在概念混淆，建议更名为“标准”[#7714]。
*   **管理效率**：用户希望建立一个统一的 Bot 管理插件，能够查看微信、钉钉等多个通道的绑定关系，而不是分散在各个插件中[#7702]。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 (2026-09-12)

## 1. 今日速览
今日 ZeroClaw 社区表现出极高的活跃度，过去24 小时内产生了 50 条 Issue 更新和 50 条 PR 更新。项目重心高度集中在**安全架构重构（OIDC 与身份认证）**、**Windows 平台栈溢出修复**以及**多模态媒体处理优化**上。尽管 PR 合并率较低（6%），但由于存在大量复杂的堆叠 PR（Stacked PRs），反映出项目正处于大规模架构演进的攻坚期，维护者审查压力较大。

---

## 2. 版本发布
*   **无新版本发布。**

---

## 3. 项目进展
今日合并/关闭了 3 条 PR，主要涉及基础 Bug 修复和配置微调：
*   **安全架构重构 (核心)**：正在积极推进基于 OIDC 的身份认证里程碑（RFC 7141），通过重构移除旧的 `Nevis` 和 `iam_policy` 模型模块，为安全的身份隔离打下基础。
*   **平台性修复**：修复了 Windows 平台上常见的 2MB 栈溢出问题（Issue #10753），解决了 CI 环境中特定测试用例崩溃的问题。
*   **多媒体优化**：修复了 Telegram 频道媒体组的合并逻辑，将多张图片合并为一个多模态轮次，避免了 LLM 输出冗余导致的响应碎片化问题。

---

## 4. 社区热点
今日社区讨论主要集中在架构决策流程的优化和复杂的 Bug 复现：
*   **RFC 决策队列优化 (#8692, 15评论)**：维护者提议建立专门的 RFC 和设计问题“维护者决策队列”，以解决当前决策流程效率低的问题。这是目前项目治理优化的关键点。
*   **RFC 投票机制简化 (#10549, 9评论)**：开发者建议取消强制性的固定时长讨论窗口（48h/72h），引入 `REVISE` 命令直接停止当前快照，以提升开发迭代速度。
*   **栈溢出问题深度追踪 (#10734, 6评论)**：在 CI 流程中发现 `RpcDispatcher::process_line` 触及 2MB 栈保护边界，导致 Windows 环境频繁崩溃，风险等级为 P1。

---

## 5. Bug 与稳定性
今日报告了多个 P1/P2 级 Bug，需重点关注：
*   **[P1] Windows 栈溢出崩溃 (#10753, #10734)**：`session/new` 在 Windows 2MB 栈限制下会触发 `0xc0000fd` 错误。
*   **[P1/P2] 多模态缓存失效 (#10701, #10778)**：在处理兼容性 Provider 时，用户发送带图片的附件会导致整个历史缓存前缀失效，而不仅仅是新消息，这极大地增加了 Token 消耗成本。
*   **[P1] 持久化历史丢失 (#10788, #10782)**：当 Code/ACP 轮次因 Provider 错误（非用户取消）结束时，已接收的 Prompt 和已完成的工具交换将未写入持久化历史。
*   **[P2] 重试策略缺陷 (#10789)**：当 API 返回 429（配额耗尽）而非瞬时限制时，ZeroClaw 会进行立即重试而非执行指数退避，导致配额无效浪费。

---

## 6. 功能请求与路线图信号
*   **主动 Token 预算压缩恢复 (#10780)**：用户强烈要求恢复 v0.8.5 删除的基于 Token 预算的主动上下文压缩功能，目前仅支持基于消息数的裁剪，导致 `context_compression` 等配置项失效（Inert）。
*   **MCP 图像能力集成 (#9521)**：一项高优先级特性，旨在将 MCP `tools/call` 中的 `image` 类型内容直接映射到 ZeroClaw 的多模态视觉流水线，确保视觉模型接收到真实图像而非 JSON 文本 dump。
*   **评估框架建立 (#9967)**：计划启动建立一个可重复的 ZeroClaw 评估体系（Harness），通过基准测试和配置快照来指导开发方向。

---

## 7. 用户反馈摘要
*   **体验痛点**：用户反馈 `zerocode` 在长会话中存在明显的按键延迟和滚动缓慢问题（#9092），主由于 UI 渲染器在处理完整历史帧。
*   **配置一致性**：多个开发者指出 `zeroclaw config migrate` 建议的路径与实际运行的二进制文件路径不符（#10532），导致配置迁移困惑。
*   **功能透明度**：用户认为 `Code` 面板和 `Chat` 标签在视觉上相似，但底层逻辑（Code 不读写持久化内存）差异巨大，文档需要更清晰的说明（#9047）。

---

## 8. 待处理积压
*   **OIDC 里程碑 (#8289)**：涉及身份认证、隔离与授权的三个阶段实现，目前有多个大型堆叠 PR（#10248-#10275）等待维护者深度审查。
*   **跨平台日志兼容 (#10731)**：在 Linux systemd 环境下，`service logs` 无法正确合并 stdout 和 stderr，与 macOS/Windows 行为不。

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*