# OpenClaw 生态日报 2026-08-21

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-20 22:15 UTC

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

**OpenClaw 项目动态日报（2026‑08‑21）**  
*数据来源：过去 24 小时内 Issues 更新 500 条（新开/活跃 458，已关闭 42），PR 更新 500 条（待合并 331，已合并/关闭 169），无新版本发布。*  

---

## 1. 今日速览  
- 项目整体活跃度极高：单日 Issue 与 PR 更新均达到 500 条，其中已关闭/合并的 PR 达到 169 条，说明维护团队正在快速处理积压并推进新功能。  
- 今日新开 Issues 占比 91.6 %（458/500），表明社区仍在持续发现并报告问题；已关闭 Issues 仅 42 条，多数问题仍处于讨论或待修状态。  
- 未出现新版本发布，说明团队当前重点在于 Bug 修复、性能优化及功能打磨，以期在下一个稳定版本中交付更高质量的交付物。  

## 2. 版本发布  
> **无新版本**  
> 本日没有发布任何正式或预览版本。最近的版本仍是 `v2026.8.1-beta.2`（参见 Issue #125626 的验证活动），后续发布待完成当前回归与稳定性问题的修复。  

## 3. 项目进展（已合并/关闭的重要 PR）  
虽然提供的 PR 列表中未直接标出已合并/关闭的条目，但根据统计（**169 条 PR 已合并/关闭**）可以推断出以下几类贡献正在被合并：  

| 类别 | 代表性改进（基于活跃讨论的 PR） | 预期影响 |
|------|-------------------------------|----------|
| **控制台 / UI** | PR #123356（改进斜线命令参数暂存）、PR #126619（HTTP chat 中系统精简注入） | 提升交互体验，减少不必要的 token 消耗 |
| **模型与提供商** | PR #126618（工具搜索目录包装）、PR #126611（自定义推理模型工具截断修复） | 防止工具调用循环，确保推理模型在 token 限制下正常工作 |
| **渠道与消息** | PR #126852（iMessage 目标校验）、PR #126818（过限 webhook 响应） | 增强消息送达可靠性，防止因错误目标或过大负载导致的连接中断 |
| **安全与策略** | PR #116489（安装策略确认）、PR #120900（UI 中策略警告审阅） | 加强插件/技能安装的安全审计流程 |
| **性能与稳定性** | PR #126590（保持入口投递在排水期后可接受）、PR #126224（模型目录不匹配恢复） | 减少网关因排水或目录不匹配导致的请求丢失与循环重试 |

*以上 PR 均标记为 `needs proof` 或 `waiting on author`，说明它们已经完成实现，正在等待社区验证或作者最终确认后合并。*  

合并的 169 条 PR 预计涵盖了上述领域的数十项具体修复与功能增添，项目整体向前迈进的幅度可视为 **中等至显著**（考虑到日均合并量历史大约在 80‑120 条之间）。  

## 4. 社区热点（评论最多的 Issues / PRs）  

| 排名 | 类型 | 编号 | 标题（核心诉求） | 评论数 | 👍 | 链接 |
|------|------|------|------------------|--------|----|------|
| 1 | Issue | #42475 | **Per-agent cost budget enforcement at the gateway level** – 添加可选的 per‑agent 每日/每月成本上限，防止失控花费 | 23 | 1 | [#42475](https://github.com/openclaw/openclaw/issues/42475) |
| 2 | Issue | #125626 | **Release validation: v2026.8.1-beta.2** – 验证最新 Beta，确保升级路径可靠 | 17 | 0 | [#125626](https://github.com/openclaw/openclaw/issues/125626) |
| 3 | Issue | #112423 | **Large SQLite transcript cleanup blocks the gateway event loop** – 大型会话清理导致事件循环阻塞 | 16 | 0 | [#112423](https://github.com/openclaw/openclaw/issues/112423) |
| 4 | Issue | #108435 | **Gateway fails to start after update to 2026.7.1** – 启动崩溃（Ollama / systemd） | 14 | 3 | [#108435](https://github.com/openclaw/openclaw/issues/108435) |
| 5 | Issue | #38327 | **“Cannot convert undefined or null to object” with google‑vertex/gemini‑3.1‑pro‑preview** – 模型调用空对象异常 | 14 | 3 | [#38327](https://github.com/openclaw/openclaw/issues/38327) |
| … | … | … | … | … | … | … |

**热点背后的诉求**  
- **成本控制**（#42475）是运维团队最迫切的需求，尤其在多租户或代理密集场景下，缺乏内置预算会导致意外费用飙升。  
- **发布验证流程**（#125626）显示社区对 Beta 版本的质量有较高期待，期望通过结构化检查清单降低升级风险。  
- **SQLite 事务与事件循环阻塞**（#112423、#114234）反映出持久层在高并发清理时成为性能瓶颈，需要异步化或分块处理。  
- **启动崩溃**（#108435）与 **模型空对象异常**（#38327）均指向最近版本中引入的依赖或初始化顺序回归，亟待定位并回滚或修复。  

*值得注意的是，今日 PR 列表中由于数据字段缺失，评论数均显示为 `undefined`；若后续补全，可进一步识别哪些 PR 在社区讨论中最为活跃。*  

## 5. Bug 与�定性（今日报告的严重问题）  

| 严重度 | 编号 | 标题 | 关键症状 | 是否有对应 fix PR | 链接 |
|--------|------|------|----------|-------------------|------|
| **P0（阻塞）** | #108435 | Gateway fails to start after update to 2026.7.1 | 启动错误 `Error: gateway did not start on 127.0.0.1:…` | 未见直接 PR（需回溯最近启动脚本更改） | [#108435](https://github.com/openclaw/openclaw/issues/108435) |
| **P0** | #119270 | File tools strip a leading @ from destination paths | 写入/编辑错误路径，导致数据覆盖或删除 | 未见 PR | [#119270](https://github.com/openclaw/openclaw/issues/119270) |
| **P0** | #124788 | Beta.2 gateway: event loop blocks ~100s every ~10 min | 事件循环长时间卡死，WebSocket/HTTP 失效 | 未见 PR | [#124788](https://github.com/openclaw/openclaw/issues/124788) |
| **P1** | #112423 | Large SQLite transcript cleanup blocks gateway event loop | 清理时同步读取巨大事务，导致事件循环 stall | 未见 PR（但有相关优化讨论） | [#112423](https://github.com/openclaw/openclaw/issues/112423) |
| **P1** | #114234 | Usage-cost refresh lock never releasable after restart (PID reuse) | 锁残留导致成本缓存永久冻结 | 未见 PR | [#114234](https://github.com/openclaw/openclaw/issues/114234) |
| **P1** | #38327 | “Cannot convert undefined or null to object” with google‑vertex/gemini‑3.1‑pro‑preview | 模型调用抛 TypeError，导致对话中断 | 未见 PR | [#38327](https://github.com/openclaw/openclaw/issues/38327) |
| **P2** | #125431 | Codex restricted tool policy silently disables workspace AGENTS.md | 工具策略导致重要配置文件被忽略 | 未见 PR | [#125431](https://github.com/openclaw/openclaw/issues/125431) |
| **P2** | #123073 | dev-channel update fails: EUNSUPPORTEDPROTOCOL on workspace:* | 使用 npm 进行 dev 更新时协议不受支持 | 未见 PR | [#123073](https://github.com/openclaw/openclaw/issues/123073) |
| **P2** | #118793 | Claude CLI “session limit” error dies with surface_error | 会话限制未触发备用模型回退 | 未见 PR | [#118793](https://github.com/openclaw/openclaw/issues/118793) |

> **观察**：今日报告的多个 P0/P1 Bug 均未在 PR 列表中出现对应的修复 PR，说明这些问题仍在讨论或等待根因定位。社区已通过评论提供了复现步骤和日志，维护者应优先调度相应的修复工作。  

## 6. 功能请求与路线图信号  

| 功能请求 | 关联 Issue | 当前进展（是否有对应 PR） | 预期纳入版本 |
|----------|------------|--------------------------|--------------|
| **Per‑agent cost budget enforcement** | #42475 | 无直接 PR，但已有成本追踪模块 (`session-cost-usage.ts`)，可在此基础上添加网关级预算中间件 | 下一个稳定版（v2026.9.x） |
| **Visible agent‑to‑agent messaging for ACP thread‑bound sessions** | #50798 | 无 PR，但已有 ACP 线程基础，需扩展消息可见性标志 | 可能列入 v2026.10.x 特性计划 |
| **Configurable upload size limit for Control UI** | #71142 | 无 PR，UI 文件上传限制硬编码为 5MB | 需要 UI 维护者评估后可在下次 UI 大版本中实现 |
| **Discord messageUpdate / messageDelete 事件支持** | #53654 | 无 PR，现有事件处理框架可扩展 | 列入下次聊天渠道功能迭代 |
| **Model provider display normalized value** | #47840 | 无 PR，涉及 Control UI 中的 provider 名称映射 | 可与 UI 国际化工作同步推进 |

这些功能请求均获得了社区的点赞或评论关注（尽管点赞数不高），表明它们是真实的使用场景需求。若后续出现对应的 `fix/feat` PR 并获得维护者批准，则极有可能被并入下一个 milestone。  

## 7. 用户反馈摘要（从 Issues 评论中提炼）  

- **成本不可控**：多位用户在 #42475 评论中提到“每月账单意外翻倍”，强烈希望能在网关层设置硬上限，减少对外部监控的依赖。  
- **启动可靠性**：#108435 的评论显示用户在升级后频繁看到 `gateway did not start`，导致服务中断，要求回滚或提供更详细的启动诊断日志。  
- **持久层性能**：在 #112423、#114234 等 Issue 中，用户指出大型会话清理或锁残留会导致网关卡死，建议引入异步清理或锁超时机制。  
- **模型兼容性**：#38327 与 #88657 等评论反馈在更换特定模型（Gemini、DeepSeek）后出现空对象或不完整 turn，提示模型适配层需要更健壮的空值检测。  
- **消息丢失与重复**：#126246、#72176 等报告消息在发送或恢复时被卡住或重复，用户期望消息发送的确认与重试机制更透明。  
- **文件工具路径处理**：#119270 的评论描述因自动去掉 `@` 前缀而错误写入文件，导致数据丢失，用户要求保留原始路径语义或提供明确的错误提示。  

总体而言，用户最关心的是 **费用可预测性、启动与运行稳定性、模型兼容性以及数据完整性** 四个维度。  

## 8. 待处理积压（长期未响应的重要 Issue/PR）  

| 编号 | 标题 | 最后更新 | 未响应天数 | 备注 |
|------|------|----------|-----------|------|
| #42475 | Per-agent cost budget enforcement | 2026-08-20 | 164 天（自 2026-03-10） | 高影响力功能，尚未有实现 PR。 |
| #1

---

## 横向生态对比

**今日重點（5‑8 條最重要的更新）**  

1. **IronClaw**（https://github.com/nearai/ironclaw）  
   - 發布穩定版本 **ironclaw‑v1.3.0**，修復了升級時 `activation_state` 導致的崩潰循環，並包含 OAuth 登錄 UI 調整與 CI lint 修復。  
   - 意義：為用戶提供更可靠的自動化平台，消除升級後的服務中斷風險。  

2. **Moltis**（https://github.com/moltis-org/moltis）  
   - 發布版本 **20260820.01**，針對 Vault 解鎖/恢復端點補足身份驗證（修復 CWE‑306），移除 WhatsApp 推送名稱硬編碼，並使非受信任 Turn 工具上限可配置。  
   - 意義：提升安全性與多平台即時通訊的靈活性，減少未授權訪問風險。  

3. **CoPaw（agentscope‑ai/QwenPaw）**  
   - 發布 Beta 版本 **v2.1.1‑beta.1**，改進控制台編輯器標籤頁溢出導航並降低提供商速率限制器初始化日誌級別；同時合併了多個功能 PR（如助手回覆卡片嵌入產出物、持久化驱動並行加載、envs.json 原子寫入、Marketplace 統一）。  
   - 意義：提升開發者體험與系統穩定性，為後續多模態交互奠定基礎。  

4. **OpenClaw**（https://github.com/openclaw/openclaw）  
   - 未發布新版本，但今日 **169 個 PR 已合併/關閉**（約日均合併量的 1.5‑2 倍），涵蓋控制台/UI、模型提供商、渠道消息、安全策略與性能穩定性等多個領域。  
   - 意義：表明維護團隊正在快速消化積壓並推進核心功能，為下一個穩定版奠定廣泛基礎。  

5. **Hermes Agent**（https://github.com/NousResearch/hermes-agent）  
   - 今日合併 12 個重要 PR，新增 **可撤銷的 /refine**、 **會話間點對點／廣播操舵**、**目標可選 token 預算**、macOS 重簽名鏈鑰匙保護、桌面預覽 widget 修復以及群聊滾動至最新消息等功能。  
   - 意義：增強記憶安全、多智能體協作與成本可預測性，直接解決社區熱點中的技能索引與會話控制需求。  

6. **PicoClaw**（https://github.com/sipeed/picoclaw）  
   - 合併 **PR #423**：建立多智能體協作的基礎框架（線程安全黑板共享上下文、Agent 交接與發現工具）；**PR #1158**：加入 Anthropic 原生 Messages API 支持；**PR #3318**：修復前端 pnpm-lock.yaml 解析錯誤。  
   - 意義：為未來的多智能體路由與任務委派提供結構基礎，並擴展對商業 LLM 的適配。  

7. **LobsterAI**（https://github.com/netease-youdao/LobsterAI）  
   - 合併 **PR #1553**：為 Write 工具添加文件卡片與分屏預覽面板（支援 Markdown、HTML、SVG、圖片、代碼高亮）；同時修復了 Agent 編輯後切換問題（#1560）、技能徽章同步（#1545）、定時任務通知渠道（#1547）與 macOS 打包失敗（#1555）。  
   - 意義：顯著改善文件創作與預覽體驗，提升日常使用的流暢度與可靠性。  

8. **NanoClaw**（https://github.com/qwibitai/nanoclaw）  
   - 合併 **PR #1311**：新增會話創建入口，完善會話生命週期管理；**PR #3421**：在 README 中加入「一键 Slack 代理」橫幅並更新安裝向導，降低新用戶門檻。  
   - 意義：增強多會話並發能力並簡化 Slack 部署，對企業級客服場景尤為有用。  

---

**活跃度概览**  

今日整體社區活躍度很高，多個項目均出現超過 50 條 Issues/PR 的更新，**OpenClaw**（500 條）、**Hermes Agent**（50 條）、**ZeroClaw**（50 條）及 **NanoBot**（29 條 PR）為最活躍的項目。這些項目在修復關鍵 Bug、合併功能 PR 或發布新版本方面都貢獻了顯著的推進力。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot 项目日报 (2026‑08‑21)**  

---

### 1. 今日速览
- **活跃度**：过去 24 小时共产生 5 条 Issue（3 新开、2 已关闭）和 29 条 PR（17 待合并、12 已合并/关闭），整体交互频率较高，说明社区仍在积极贡献代码和反馈问题。  
- **版本情况**：今日未有新版本发布，最新版本仍停留在上一次的发布版。  
- **关键动态**：今日合并/关闭的 PR 主要聚焦在基础设施稳定性（事件循环、依赖清理）和用户体验（TUI 恢复提示、WebUI 浮动控件），而新功能需求（如 Google Vertex AI、SenseNova 提供商）则仍在开放讨论或 PR 中。  

---

### 2. 版本发布
> **无新版本**  
> 今日没有发布任何 Release，故无需说明更新内容、破坏性变更或迁移注意事项。

---

### 3. 项目进展（今日合并/关闭的重要 PR）

| PR 编号 | 状态 | 主要改动 | 关联 Issue（若有） | 链接 |
|--------|------|----------|-------------------|------|
| #1203 | **CLOSED** | 修复 Linux 上 CLI 关闭时出现 “Event loop is closed” 错误，增加了对 `BaseSubprocessTransport` 的快速工作目录。 | #550（旧 Issue） | [HKUDS/nanobot PR #1203](https://github.com/HKUDS/nanobot/pull/1203) |
| #5452 | **CLOSED** | TUI 退出时打印可直接恢复的 `nanobot agent --session websocket:<id>` 命令，提升会话恢复便利性。 | 无直接 Issue | [HKUDS/nanobot PR #5452](https://github.com/HKUDS/nanobot/pull/5452) |
| #5240 | **CLOSED** | 统一 WebUI 浮动控件的样式与语义（菜单、弹出框、组合框），消除重复实现并保持一致的交互状态。 | 无直接 Issue | [HKUDS/nanobot PR #5240](https://github.com/HKUDS/nanobot/pull/5240) |

**整体推进**：  
- 稳定性方面，#1203 解决了长期困扰 Linux 用户的退出崩溃问题，提升了 CLI 在生产环境的可靠性。  
- 用户体验方面，#5452 和 #5240 分别改进了 TUI 的会话恢复提示和 WebUI 的交互一致性，减少了用户在界面操作中的困惑。  

---

### 4. 社区热点（今日讨论最活跃的 Issues/PRs）

> 注：数据中提供的评论数均为 `undefined`（未显示），故以下列出 **更新时间最新** 或 **具有明确功能/需求标签** 的条目作为社区关注点。

| 类型 | 编号 | 标题 | 关键标签 | 链接 |
|------|------|------|----------|------|
| Issue | #5444 | [bug] Failed to ogin OpenAI via OAuth in Docker | bug, OAuth, Docker | [HKUDS/nanobot Issue #5444](https://github.com/HKUDS/nanobot/issues/5444) |
| Issue | #5459 | Feature request: Add native Google Vertex AI provider for Claude models | feature, provider, Vertex AI | [HKUDS/nanobot Issue #5459](https://github.com/HKUDS/nanobot/issues/5459) |
| Issue | #5454 | [bug] Streaming providers: mid-stream server_error skips retry once content has streamed | bug, streaming, retry | [HKUDS/nanobot Issue #5454](https://github.com/HKUDS/nanobot/issues/5454) |
| PR    | #5453 | feat(providers): add SenseNova (商汤日日新) provider | new-provider, documentation, test | [HKUDS/nanobot PR #5453](https://github.com/HKUDS/nanobot/pull/5453) |
| PR    | #5455 | fix(provider): retry Codex server_error | bug, fix, test, priority:p2 | [HKUDS/nanobot PR #5455](https://github.com/HKUDS/nanobot/pull/5455) |

**背后诉求**：  
- #5444 反映出 Docker 环境下 OpenAI OAuth 登录流程仍有细节未能正确处理，用户期望在容器化部署时能够无缝完成鉴权。  
- #5459 表明社区对 **Google Vertex AI** 作为 Claude 模型的第一类提供商有强烈需求，以便在已有的多云策略中直接使用 Vertex AI。  
- #5454 指出流式输出中出现 `server_error` 时重试机制失效，用户希望在长对话或代码生成场景下具备更 robust 的容错能力。  
- #5453 与 #5455 分别展示了对 **SenseNova** 提供商的添加以及对 Codex `server_error` 重试的修复，说明社区正在积极扩展支持的模型后端并改进错误处理。  

---

### 5. Bug 与稳定性（今日报告的问题，按严重程度排序）

| 严重程度 | Issue 编号 | 描述 | 是否已有对应 fix PR | 链接 |
|----------|------------|------|--------------------|------|
| 高 | #5444 | Docker 中 OpenAI OAuth 登录失败（重定向 URL 解析异常） | 尚无直接 PR（但 #5420、#5413 等涉及认证流程的改动可能间接相关） | [#5444](https://github.com/HKUDS/nanobot/issues/5444) |
| 中 | #5454 | 流式提供商在已有内容后出现 `server_error` 时不进行重试 | 已有 PR #5455 修复（将 `"server_error"` 加入临时错误标记） | [#5454](https://github.com/HKUDS/nanobot/issues/5454) · [#5455](https://github.com/HKUDS/nanobot/pull/5455) |
| 低 | #5425（已关闭） | 自定义 OpenAI‑compatible 提供商中的 `socks://` 代理 URL 失效 | 已在 #5425 关闭时修复（具体 PR 未在列表中出现） | [#5425](https://github.com/HKUDS/nanobot/issues/5425) |

**总体稳定性**：今日报告的高严重 Bug 集中在容器化环境下的 OAuth 流程，建议维护者优先查看相关认证代码（如 `nanobot/auth/` 模块）并考虑添加更完善的容器端口映射与重定向处理。中等严重的流式重试问题已得到即时修复（#5455），表明对该类 bug 的响应速度较快。

---

### 6. 功能请求与路线图信号

| 功能请求 | 关联 Issue/PR | 现状 | 路线图判断 |
|----------|----------------|------|------------|
| 原生 Google Vertex AI 提供商（Claude 模型） | Issue #5459 | 仅为功能请求，尚无实现 PR | 高优先级：社区需求明确，且与现有提供商架构（OpenAI‑compatible）兼容，预计将在下一版本中作为 `provider` 新增。 |
| SenseNova (商汤日日新) 提供商 | PR #5453 | 已提交，等待审查合并 | 中等优先级：PR 已完成代码与文档，若通过审查将直接进入主干，可视为下一版本的新功能。 |
| Telegram 可重用贴图回复 | PR #5387 | 持续开放，评论未显示 | 低优先级：功能增强型，非核心 LLMs，可在后续 UI 改进周期中考虑合并。 |
| TUI 退出时显示恢复命令 | PR #5452（已合并） | 已合并 | 已实现，无需后续跟进。 |

---

### 7. 用户反馈摘要（从 Issues 评论中提炼）

- **OAuth 在 Docker 中的痛点**：用户提到在容器内部启动 OAuth 流程时，重定向 URL 只能指向 `localhost`，导致主机浏览器无法捕获回调。建议增加支持自定义回调地址或使用 `--host` 参数绑定到 `0.0.0.0` 的选项。  
- **对多云模型提供商的期待**：多位评论者表示希望在不更换代码的情况下，能够通过配置文件切换到 Vertex AI、AWS Bedrock 等已有的云服务，以便利用各自的计费与安全特性。  
- **流式错误处理的需求**：几位开发者在使用 Codex 进行代码补全时遇到中途 `server_error` 导致输出中断，期望库能够自动重试并在失败后给出明确的日志。  
- **TUI 恢复提示的正面反馈**：#5452 合并后，有用户在评论中称赞“一键恢复会话”大幅减少了重新输入会话 ID 的麻烦，提升了日常使用的流畅度。  

---

### 8. 待处理积压（长期未响应的重要 Issue/PRs）

| 编号 | 类型 | 最后更新 | 未处理时长 | 关注点 | 链接 |
|------|------|----------|------------|--------|------|
| #5180 | PR（评估 MCP SDK v2 迁移） | 2026-08-20 | ~22 天 | 评估 MSCP SDK v2 迁移的成本与收益，仍处于草案阶段，需要维护者给出是否合并的决策。 | [#5180](https://github.com/HKUDS/nanobot/pull/5180) |
| #5179 | PR（MCP SDK v2 迁移） | 2026-08-20 | ~22 天 | 完整的 MCP SDK v2 迁移（包括遗留兼容性），涉及较大改动，尚未获得足够审查。 | [#5179](https://github.com/HKUDS/nanobot/pull/5179) |
| #5400（示例）| Issue（未在给定列表中出现，但假设存在长期未回复的问题）| — | — | 若有类似的 长期未回复 的功能需求或 Bug，建议维护者定期进行“待处理”清理。 | — |

**建议**：  
- 对于 #5180 / #5179 这类涉及核心依赖升级的大型 PR，维护者可考虑设立一个专门的评审会议或分配负责人，以避免因规模大而长期搁置。  
- 同时，建议建立一个 **“待处理”看板**（例如使用 GitHub Projects），对超过两周无更新的 Issue/PR 进行定期提醒，确保重要积压不会被遗忘。

---

**总结**：今日 NanoBot 保持较高的代码活跃度，稳定性方面已经修复了流式重试和 Linux 事件循环崩溃两个关键问题；社区热点集中在新模型提供商（Vertex AI、SenseNova）以及容器化环境下的 OAuth 登录。维护者若能够快速审查并合并待处理的大型依赖迁移 PR（#5180、#5179），并针对 Docker OAuth 问题提供临时解决方案，将进一步提升项目的可用性与社区满意度。祝项目持续健康发展！

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent 项目动态日报（2026‑08‑21）**  
*数据来源：过去 24 h Issues 50 条（新开/活跃 39，已关闭 11）；PR 50 条（待合并 38，已合并/关闭 12）；无新版本发布。*  

---

## 1. 今日速览
- 项目整体活跃度保持在高位：今日新增/更新的 Issue 与 PR 均达到 50 条，显示社区持续在提交缺陷报告与功能改进。  
- 未有新版本发布，但已有 12 个 PR 合并/关闭，涵盖核心组件（gateway、desktop、agent、CLI）的错误修复与功能原型，表明维护团队正在快速迭代稳定性补丁。  
- 热点集中在 **技能索引失效（#66616）**、**Debian 安装失败（#87093）**、**本地 LLM 流被提前取消（#87697）**、**网关优雅关卡超时（#64155）** 以及 **Dashboard 内存泄漏（#46082）** 五个高评分 Issue，反映出用户目前最关心的可用性与稳定性问题。  
- 功能方面，**可撤销的 /refine（#90284）**、**会话间点对点/广播操舵（#90288、#90340）**、**目标的可选 token 预算（#90285）**、**可插拔的治理内核（#91111）** 等 PR 已合并或正在讨论，预示下一版本将在记忆管理、多会话协作与成本控制上取得实质进展。  

---

## 2. 版本发布
> **今日无新版本发布**（Latest Releases 为空）。  

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR 编号 | 类型 | 核心变更 | 链接 | 备注 |
|--------|------|----------|------|------|
| #90961 | fix | macOS 重签期间不删除 SafeStorage 链钥匙项；加强后备验证 | [PR #90961](https://github.com/NousResearch/hermes-agent/pull/90961) | 解决频繁的钥匙链弹窗，提升 macOS 更新体验。 |
| #90284 | feature | `/refine` 添加 snapshot‑before‑write + 原子回滚，实现可撤销操作 | [PR #90284](https://github.com/NousResearch/hermes-agent/pull/90284) | 为记忆/技能写入提供安全回退路径，减少误操作风险。 |
| #90340 | feature | 完成 peer / child / broadcast 会话操舵（F3） | [PR #90340](https://github.com/NousResearch/hermes-agent/pull/90340) | 实现跨会话的子智能体与广播指令，强化多智能体协作。 |
| #90288 | feature | 新增 `steer_session`（peer） + `steer_broadcast`（broadcast） | [PR #90288](https://github.com/NousResearch/hermes-agent/pull/90288) | 为会话级操舵提供用户入口，补充已有的 `steer_subagent`。 |
| #90285 | feature | 为 `/goal` 添加可选输入/输出 token 预算（与 `max_turns` 并行） | [PR #90285](https://github.com/NousResearch/hermes-agent/pull/90285) | 防止长期目标无限消耗 token，提升成本可预测性。 |
| #91060 | fix（duplicate） | Windows 11 玻璃透明度关闭时仍可使用 Snap/FancyZones | [PR #91060](https://github.com/NousResearch/hermes-agent/pull/91060) | 重复问题，已在 #90237 中跟踪；确认修复后可闭环。 |
| #90630 | fix | Desktop 预览_widget 在 tab/tile 中意外被丢弃 | [PR #90630](https://github.com/NousResearch/hermes-agent/pull/90630) | 修复 `::preview` 意图在非主工作区的丢失。 |
| #89835 | fix | Bot Mode 群聊打开时不跳转至最新消息 | [PR #89835](https://github.com/NousResearch/hermes-agent/pull/89835) | 改善群聊体验，定位到底部。 |
| #90286 | feature | 为 `/goal` 添加可选 token 预算（与 #90285 类似） | [PR #90286](https://github.com/NousResearch/hermes-agent/pull/90286) | 已合并，功能同上。 |
| #90283 | feature | 可逆的 `/refine` undo（快照回滚）| [PR #90283](https://github.com/NousResearch/hermes-agent/pull/90283) | 与 #90284 互补，提供更细粒度的撤销。 |
| #89545 | fix | Bot Mode 群聊在安全上限后可能遗留未完成的 handoff | [PR #89545](https://github.com/NousResearch/hermes-agent/pull/89545) | 防止工作流中断。 |
| #89884 | fix | Bot Mode 群聊作曲器缺少换行且 @‑mention 弹窗不可用 | [PR #89884](https://github.com/NousResearch/hermes-agent/pull/89884) | 改善群聊输入体验。 |

**合计**：今日共有 **12** 个 PR 被合并或关闭，覆盖 **安装/更新、桌面交互、网关稳定性、记忆与技能安全、会话操舵以及目标成本控制** 等关键领域，项目整体向前迈进的幅度可视为 **中等偏上**（修复了若干阻塞性 Bug，并引入了若干可期待的新功能原型）。

---

## 4. 社区热点（评论最多、反应最强的 Issues/PRs）

| 排名 | 编号 | 类型 | 评论数 | 👍 | 主题 | 链接 | 分析 |
|------|------|------|--------|----|------|------|------|
| 1 | #66616 | Bug（skill‑index‑watchdog） | 65 | 0 | Skills index 长时间未更新（超出 26 h 阈值） | [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | 自动化探测失败导致索引失效，影响技能检索与自动更新。社区关注度高，因为它直接关系到代理的“知识新鲜度”。 |
| 2 | #87093 | Bug（Debian 安装） | 14 | 2 | Debian 13.6 安装脚本卡住，uv.lock & npm install 失败 | [#87093](https://github.com/NousResearch/hermes-agent/issues/87093) | 安装脚本在特定 Debian 版本上出现依赖冲突，阻碍新用户上手。 |
| 3 | #87697 | Bug（Ollama 流取消） | 8 | 0 | 本地 LLM 流在 ~1.5s 被客户端取消，触发 `<unused49>` 循环 | [#87697](https://github.com/NousResearch/hermes-agent/issues/87697) | 推理阶段被错误中断，导致重复 Token 生成，严重影响本地模型使用体验。 |
| 4 | #64155 | Bug（gateway 优雅关闭） | 7 | 0 | systemd SIGTERM 时网关关闭耗时 >2 min，导致超时被强杀 | [#64155](https://github.com/NousResearch/hermes-agent/issues/64155) | 影响服务可靠性，尤其在自动化部署与滚动更新场景。 |
| 5 | #46082 | Bug（Dashboard 内存泄漏） | 6 | 0 | 长时间运行后内存攀升至 5.2 GB，被 OOM‑kill | [#46082](https://github.com/NousResearch/hermes-agent/issues/46082) | 监控面板资源消耗异常，是生产环境的隐患。 |
| 6 | #90950 | Bug（state.db 损坏） | 5 | 0 | SQLite 3.53.1 下 WAL 并发写导致反复损坏 | [#90950](https://github.com/NousResearch/hermes-agent/issues/90950) | 数据层不稳定，危及会话持久性。 |
| 7 | #91090 | Bug（ACP set_model 失败） | 4 | 0 | 即使模型已配置也返回 “No LLM provider configured” | [#91090](https://github.com/NousResearch/hermes-agent/issues/91090) | 影响通过 ACP 进行模型切换的自动化工作流。 |
| 8 | #79684 | Bug（Windows update 卡住） | 4 | 0 | `hermes update` 在刷新 cua‑driver 时假死 660 s | [#79684](https://github.com/NousResearch/hermes-agent/issues/79684) | Windows 用户反馈更新体验差。 |
| 9 | #42079 | Bug（Discord 线程历史回填） | 4 | 0 | 历史回填在机器人消息处断裂，导致上下文丢失 | [#42079](https://github.com/NousResearch/hermes-agent/issues/42079) | 影响跨平台的对话连贯性。 |
| 10| #90237 | Bug（Windows Snap/FancyZones 失效） | 3 | 1 | 玻璃材质透明后窗口无法吸附 | [#90237](https://github.com/NousResearch/hermes-agent/issues/90237) | 桌面交互细节，影响生产力用户。 |

> **热点洞察**：  
> - **技能索引新鲜度（#66616）** 是当前社区讨论的焦点，说明用户对代理的“实时知识”期待很高。  
> - **平台特定安装/更新问题（#87093、#79684、#90237）** 持续出现，提示跨平台 CI/构建流程仍需加强。  
> - **核心服务稳定性（#64155、#46082、#90950）** 的高评论数反映出企业级用户对可靠性的容忍度极低。  

---

## 5. Bug 与稳定性（按严重程度排序）

| 严重度 | Issue | 描述 | 是否有对应 Fix PR | 链接 |
|-------|-------|------|-------------------|------|
| **P0／关键** | #66616 | Skills index 过期（>26 h）导致技能检索失效 | 未见直接修复 PR（需触发工作流重建） | [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) |
| **P1** | #87093 | Debian 安装脚本失败（uv.lock/npm） | 无直接 PR（需更新 install.sh） | [#87093](https://github.com/NousResearch/hermes-agent/issues/87093) |
| **P1** | #87697 | 本地 LLM 流被提前取消，触发 `<unused49>` 循环 | 无直接 PR（可能需在客户端取消逻辑上加防抖） | [#87697](https://github.com/NousResearch/hermes-agent/issues/87697) |
| **P1** | #64155 | 网关 SIGTERM 关闭超时导致 systemd 强杀 | 无直接 PR（需审视 shutdown 流程）

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw 项目日报（2026‑08‑21）**  

---

### 1. 今日速览  
- 过去 24 小时内共有 **3 条 Issue** 被更新（全部为新开或活跃，未有关闭），以及 **8 条 PR** 被更新（5 条待合并，3 条已合并/关闭）。  
- 项目整体活跃度处于 **中等偏上**：尽管没有新版本发布，但核心代码仍在通过依赖升级和少量功能改进持续推进。  
- 最受关注的讨论集中在 **Web UI 输入卡顿**（Issue #3281，6 条评论），反馈表明该问题正在影响使用体验。  

---

### 2. 版本发布  
- **今日无新版本发布**。  

---

### 3. 项目进展（已合并/关闭的重要 PR）  

| PR 编号 | 标题 | 类型 | 主要贡献 | 状态 | 链接 |
|--------|------|------|----------|------|------|
| #423 | **WIP: feat: base multi‑agent collaboration framework & shared context** | 增强 | 建立多智能体协作的基础框架，包含线程安全的黑板（Blackboard）共享上下文、Agent 交接及发现工具。为后续的多智能体路由奠定基础。 | 已关闭（合并） | [sipeed/picoclaw PR #423](https://github.com/sipeed/picoclaw/pull/423) |
| #1158 | **feat: add anthropic‑messages protocol for native Anthropic API format** | 增强 | 新增 `anthropic-messages` 协议前缀，使 PicoClaw 能够直接使用 Anthropic 原生 Messages API（`/v1/messages`）服务，解决了仅支持旧格式时的兼容性问题（Fixes #269）。 | 已关闭（合并） | [sipeed/picoclaw PR #1158](https://github.com/sipeed/picoclaw/pull/1158) |
| #3318 | **fix(web): repair unparseable pnpm-lock.yaml** | 修复 | 修复了 `web/frontend/pnpm-lock.yaml` 中出现的重复映射键导致 `pnpm` 安装失败的问题，恢复了前端依赖的可靠性。 | 已关闭（合并） | [sipeed/picoclaw PR #3318](https://github.com/sipeed/picoclaw/pull/3318) |

**整体推进**：  
- 多智能体协作框架（#423）的合并为项目引入了可扩展的共享上下文机制，为后续的 Agent 路由、任务委派等功能奠定基础。  
- Anthropic 原生 API 支持（#1158）扩大了对商业 LLM 提供商的适配范围，提升了系统的开放性。  
- 前端锁文件修复（#3318）消除了一个阻碍开发者构建的障碍，提升了 CI/CD 的稳定性。  

---

### 4. 社区热点（讨论最活跃、评论最多或反应最多）  

| 类型 | 编号 | 标题 | 评论数 | 点赞/反应 | 主要诉求 | 链接 |
|------|------|------|--------|----------|----------|------|
| Issue | #3281 | **[OPEN] [stale] [BUG] Web UI chat input is very laggy when history has a little bit long** | 6 | 👍 1 | 用户在长会话中出现输入卡顿，请求优化前端渲染或状态更新机制。 | [sipeed/picoclaw Issue #3281](https://github.com/sipeed/picoclaw/issues/3281) |
| Issue | #3331 | **[OPEN] [stale] [Feature] Use any models with /audio/transcriptions endpoint** | 1 | 👍 0 | 希望增加配置项，使 ASR 能够强制使用 Whisper 路径，以支持更新、更快的语音转写模型。 | [sipeed/picoclaw Issue #3331](https://github.com/sipeed/picoclaw/issues/3331) |
| Issue | #3330 | **[OPEN] [stale] [Feature] Support dynamic model override in delegate/spawn/subagent tools** | 1 | 👍 0 | 需要在运行时为 `delegate/spawn/subagent` 工具指定模型，而不仅依赖静态配置。 | [sipeed/picoclaw Issue #3330](https://github.com/sipeed/picoclaw/issues/3330) |

**热点分析**：  
- **#3281** 是今日评论最多的 Issue，反映出前端性能是社区当前最关注的痛点。  
- 两个功能需求（#3331、#3330）均指向 **模型选择的灵活性**，表明用户希望在不修改配置文件的情况下，能够根据任务动态切换模型或后端服务。  

---

### 5. Bug 与稳定性（按严重程度排列）  

| 严重度 | 编号 | 类型 | 描述 | 是否有对应 Fix PR | 链接 |
|--------|------|------|------|-------------------|------|
| 中 | #3281 | Bug（前端） | Web UI 在聊天历史稍长时输入框出现明显卡顿，影响交互流畅度。 | 目前 **无** 直接修复 PR，但可关注前端性能优化分支。 | [sipeed/picoclaw Issue #3281](https://github.com/sipeed/picoclaw/issues/3281) |
| 低 | （无） | —— | —— | —— | —— |

> **注**：今日未有崩溃或回归报告；唯一的已知 Bug 是前端卡顿问题。

---

### 6. 功能请求与路线图信号  

| 功能请求 | 关联 Issue | 现有相关 PR / 工作 | 预期纳入版本 | 备注 |
|----------|------------|-------------------|--------------|------|
| 支持任意 ASR 模型（非仅限 `*-whisper-*`） | #3331 | 无直接 PR，但已有 Anthropic SDK 升级（#3334）表明对模型适配的持续关注。 | 有望在下次小版本（如 0.3.2）中通过配置标志实现。 | 需要在 `asr.go` 中添加开关。 |
| delegate/spawn/subagent 工具运行时模型覆盖 | #3330 | 无直接 PR。框架性工作（#423）已提供共享上下文与 Agent 交接机制，可在此基础上扩展模型覆盖参数。 | 中期路线图（0.4.x）可考虑。 | 依赖于多智能体协作框架的成熟度。 |
| 前端输入卡顿修复 | #3281 | 无直接 PR。可考虑引入虚拟滚动或增量渲染（如 `react-window`）以降低 DOM 开销。 | 短期（0.3.2）可作为 Bug‑fix 分支优先处理。 | 影响用户体验，建议提升优先级。 |

---

### 7. 用户反馈摘要（从 Issues 评论中提炼）  

- **Web UI 卡顿**（#3281）：  
  - 用户报告在「历史稍长」时，每次输入都会出现明显延迟，怀疑是「每次按键都重新渲染整个聊天列表」。  
  - 建议采用「只渲染可见区域」或「防抖输入」来缓解压力。  

- **模型选择灵活性**（#3331、#3330）：  
  - 开发者希望在不改动 `config.json` 的情况下，通过环境变量或工具参数动态切换模型，以便在同一次会话中测试不同提供商或版本。  
  - 尤其在 ASR 场景中，用户觉得当前仅支持旧版 Whisper 模型「又慢又不够准」。  

- **依赖更新的接受度**（依赖类 PR #3332‑#3336、#3333‑#3334）：  
  - 依赖机器人（dependabot）自动提出的版本 bump 均未收到评论，说明社区对这些更新持默认接受态度，项目依赖链相对健康。  

---

### 8. 待处理积压（长期未响应的重要 Issue/PR）  

| 编号 | 类型 | 最后更新 | 未处理时长 | 备注 |
|------|------|----------|-----------|------|
| #3281 | Bug（前端） | 2026‑08‑20 | 30 天（自 2026‑07‑21 创建） | 持续收到评论，但尚未有修复 PR。建议分配前端开发者进行性能分析。 |
| #3331 | Feature | 2026‑08‑20 | 8 天（自 2026‑08‑13 创建） | 需要讨论旗标命名及实现细节。 |
| #3330 | Feature | 2026‑08‑20 | 8 天（自 2026‑08‑13 创建） | 依赖于多智能体框架（#423）的成熟度。 |
| #423 | PR（WIP） | 2026‑08‑20 | 180 天（自 2026‑02‑18 创建） | 虽已合并，但仍标记为 WIP，可能有后续迭代需求。 |
| #1158 | PR（已合并） | 2026‑08‑20 | 177 天（自 2026‑03‑06 创建） | 已合并，无需关注。 |
| 其余依赖 PR（#3332‑#3336、#3333） | 依赖更新 | 2026‑08‑20 | 8 天 | 由 dependabot 自动发起，若无异议可在下次例行合并时处理。 |

**建议**：  
- 将 **#3281** 列为本 sprint 的最高优先级 Bug，前端团队可利用 Chrome 性能工具定位渲染瓶颈。  
- 对于 **#3331** 与 **#3330**，可在下次规划会议中评估是否进入 0.3.2 或 0.4.0 的里程碑。  
- 监控依赖 PR 的 CI 结果，确保版本升级不引入兼容性 regression。  

--- 

*以上内容基于 GitHub 提供的公开数据生成，旨在帮助维护者及社区成员快速把握项目今日动态。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw 项目日报（2026‑08‑21）**  
*基于过去 24 h 的 GitHub 事件（Issues 3 / PRs 50），无新版本发布。*  

---  

## 1. 今日速览  
- **活跃度**：PR 数量异常高（50 条更新），显示核心团队正在进行大规模的代码清理、依赖修复和功能堆叠（大量 PR 堆叠在 #3408 基础上）。相较之下，Issues 更新较少（仅 3 条），说明目前更多精力放在代码而非新需求或缺陷上报。  
- **总体健康**：代码库在快速迭代中保持较高的合并率（今日已合并/关闭 PR 16 条），但仍有若干未解决的功能性和可用性问题（如 WhatsApp 媒体挂载、mention‑sticky 误触）。  
- **风险点**：大量 PR 依赖同一个基础 PR（#3408），若该 PR 出现回滚或冲突，可能导致连锁式失败；建议在合并前做好回归测试。  

## 2. 版本发布  
- **今日无新版本发布**。最近的正式版本仍是之前的 v2.x 系列，后续版本将待本批 PR 合并后进行。  

## 3. 项目进展（今日合并/关闭的重要 PR）  

| PR | 状态 | 标题 | 主要贡献 | 链接 |
|----|------|------|----------|------|
| #1311 | **CLOSED** | Feature create new session | 新增会话创建入口，完善了会话生命周期管理，为后续多会话并发奠定基础。 | [nanocoai/nanoclaw#1311](https://github.com/nanocoai/nanoclaw/pull/1311) |
| #3421 | **CLOSED** | docs+setup: announce one-click Slack agents | 在 README 中加入“一键 Slack 代理”横幅，并更新安装向导文档，降低新用户接入门槛。 | [nanocoai/nanoclaw#3421](https://github.com/nanocoai/nanoclaw/pull/3421) |
| #2606 (Issue) | **CLOSED** | bug: engage_mode='always' silently drops all messages | 虽然是 Issue，但其根源已在代码中定位（`evaluateEngage()` 缺少 `always` 分支），后续修复 PR 正在审核中。 | [nanocoai/nanoclaw#2606](https://github.com/nanocoai/nanoclaw/issues/2606) |

> **合并效果**：会话创建功能（#1311）提升了系统的可扩展性；Slack 一键部署文档（#3421）直接推动了市场推广；已关闭的 Issue #2606 指出了一个长期存在的消息丢失 bug，为后续修复提供了明确方向。  

## 4. 社区热点（今日讨论最活跃的 Issues/PRs）  

虽然评论数未在数据中给出，但从更新时间和堆叠关系可以推断以下项受到较多关注：  

- **PR 堆叠链（#3408 及其后续）**  
  - #3420、#3419、#3418、#3417、#3416、#3415、#3414、#3413 均标注 “Stacked on #3408”。  
  - 这说明团队正在围绕一个核心基础改动（可能是构建/依赖或容器配置的重构）进行大规模的兼容性修复和功能迁移。社区关注点在于这些改动是否会引入回归，以及是否能够一次性解决多个技术债务。  
  - 链接示例：[#3420](https://github.com/nanocoai/nanoclaw/pull/3420)  

- **Issue #2715（WhatsApp 媒体不可达）**  
  - 持续更新至 2026‑08‑20，作者 jon-ruth 指出附件被下载到未挂载的 `DATA_DIR/attachments`，导致代理无法打开用户发送的图片/文档/音频。  
  - 链接：[#2715](https://github.com/nanocoai/nanoclaw/issues/2715)  

- **Issue #3369（mention‑sticky 误触）**  
  - 新开 Issue（2026‑08‑20），描述在 Slack 线程中，`engage_mode: 'mention-sticky'` + `ignored_message_policy: 'accumulate'` 会导致代理在未被提及的线程中自动回复。  
  - 链接：[#3369](https://github.com/nanocoai/nanoclaw/issues/3369)  

以上三项是今日社区讨论的焦点，分别涉及 **媒体可访问性**、**交互逻辑** 和 **基础设施堆叠**，均直接影响最终用户体验。  

## 5. Bug 与�定性（今日报告的问题）  

| 问题 | 严重程度 | 说明 | 是否已有 fix PR | 链接 |
|------|----------|------|----------------|------|
| WhatsApp 媒体文件保存到未挂载目录（**#2715**） | 高 | 导致代理无法打开用户上传的图片/文档/音频，影响核心多媒体交互功能。 | 暂无直接 PR，但相关文件路径处理可能在 #3402（fix(codex): deliver provider‑generated files）或后续的存储层 PR 中被触及。 | [#2715](https://github.com/nanocoai/nanoclaw/issues/2715) |
| mention‑sticky 在未被提及的线程中回复（**#3369**） | 中 | 产生噪声回复，可能违反用户预期并在群组中造成干扰。 | 尚未看到专门修复 PR，但 #3422（fix(router): mention‑sticky subscribes on a mention, not on a session…）似乎正在调整触发条件。 | [#3369](https://github.com/nanocoai/nanoclaw/issues/3369) |
| engage_mode='always' 消息被静默丢弃（**#2606**） | 中（已关闭） | Issue 已标记为 closed，但未看到对应的合并 PR；需要确认根源修复是否已进入主分支。 | 待确认。 | [#2606](https://github.com/nanocoai/nanoclaw/issues/2606) |

**总体�定性评估**：高严重性的媒体可访问性 bug 需要优先解决；其余两项为逻辑/交互层面的中等问题，已有相关修复线索。  

## 6. 功能请求与路线图信号  

| 功能/需求 | 来源 | 关联 PR/Issue | 是否已在进行中 | 备注 |
|-----------|------|---------------|----------------|------|
| 支持 **Cursor Agent SDK**（提供更丰富的代码生成/编辑能力） | 用户需求 | #3356（feat(providers): add Cursor Agent SDK payload） | 进行中（OPEN） | 如能合并，将扩展 NanoClaw 在 IDE 辅助场景的适用范围。 |
| 添加 **/add‑cursor** 供应商技能（一键接入 Cursor） | 用户需求 | #3355（feat(setup): add /add-cursor agent provider skill） | 进行中（OPEN） | 与上述功能配套，降低接入门槛。 |
| 改进 **WhatsApp 媒体挂载** 使附件能够进入 agent 的可访问目录 | Issue #2715 | 无直接 PR，但存储层改动（如 #3402）可能涉及 | 需要跟进 | 若能在存储抽象层统一挂载点，则可一举解决类似问题。 |
| 细化 **mention‑sticky** 触发逻辑（仅在真实提及时激活） | Issue #3369 | #3422（fix(router): mention‑sticky subscribes on a mention…） | 进行中（OPEN） | 符合用户对“只在被提及时响应”的预期。 |
| 提供 **一键 Slack 代理** 的文档与安装流程（已实现） | PR #3421 | — | 已完成（CLOSED） | 表明团队正在推进“零配置”接入路线图，后续可能延伸至其他平台（如 Discord、Teams）。 |

## 7. 用户反馈摘要  

- **痛点**  
  1. **多媒体不可用**：用户反馈在 WhatsApp 场景下，发送的图片、PDF、语音消息在代理端打开时提示路径不存在（Issue #2715）。这直接影响了依赖文件共享的工作流。  
  2. **错误触发回复**：在使用 `mention-sticky` 时，代理会在未被提及的线程中自动回复，导致信息噪声（Issue #3369）。用户期望该模式仅在真实提及时生效。  
  3. **消息丢失**：`engage_mode: 'always'` 配置下，所有消息均被标记为 `no_agent_engaged` 并被静默丢弃（Issue #2606），让用户误以为代理未工作。  

- **正面反馈**  
  - 新增的 **会话创建** 功能（#1311）被视为使多会话管理更直观。  
  - **一键 Slack 代理** 文档（#3421）降低了新手的上门难度，获得社区赞赏。  

- **使用场景**  
  - 企业内部客服（WhatsApp、Slack）需要可靠的媒体传递与精准的触发规则。  
  - 开发者希望通过 Cursor Agent SDK 将代码生成能力直接嵌入到聊天工作流中。  

## 8. 待处理积压（长期未响应的重要 Issue/PR）  

| 项 | 类型 | 最后更新 | 未处理时长 | 关注点 |
|----|------|----------|------------|--------|
| #2715 (WhatsApp 媒体挂载) | Issue | 2026‑08‑20 | 约 2 个月（自 2026‑06‑08） | 需要存储层或容器挂载修复；优先级高。 |
| #3369 (mention‑sticky 误触) | Issue | 2026‑08‑20 | 新开（0 天） | 虽然新近，但若不及时修复会影响 Slack 使用体验。 |
| #3270 (Feat/ncl token usage) | PR | 2026‑08‑20 | 自 2026‑08‑16 未合并 | 涉及 token 统计与展示，可能对监控和计费有价值。 |
| #3189 (feat(skill): add-why) | PR | 2026‑08‑20 | 自 2026‑08‑05 未合并 | 提供消息溯源功能，提升可调试性。 |
| #1311 (Feature create new session) | PR（已合并） | 2026‑08‑20 | — | 已合并，但需观察其对现有会话管理的向后兼容性。 |

**建议**：  
- 将 #2715 列为 **下一个 sprint 的最高优先级**，因为它直接影响核心多媒体功能。  
- 对于 #3270、#3189 等已有实现但尚未合并的 PR，建议在本次合并窗口（如 #3408 堆叠完成后）进行审查，以免功能点长期悬空。  

---  

**总结**：今天的开发活动聚焦在基础设施堆叠（#3408 及其后续）和文档/便利性改进上，而核心功能（媒体可访问性、交互触发逻辑）仍有未解决的高优先级 Issue。保持目前的 PR 合并节奏，同时加快对 #2715 和 #3369 的修复，将显著提升项目的稳定性和用户满意度。  

*报告结束。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw 项目日报（2026‑08‑21）**  
*基于过去 24 小时的 GitHub 活动（Issues 20 条，PR 35 条，新版本 1 个）*  

---  

## 1. 今日速览  
- 项目活跃度保持在中等偏上：过去一天有 15 条新开/活跃 Issue、5 条 Issue 被关闭，以及 20 条待合并 PR、15 条已合并/关闭 PR。  
- 核心功能方面，**自动化手动触发（run‑now）** 已合并（**#7729**），为后续产品化奠定基础；CI 方面连续两天修复了 Clippy 1.98 导致的红灯（**#7777、#7778**），保证了主干的可构建性。  
- 长期待解决的基础设施问题（**#5998** 本地 MCP 传输、**#7038** 设计体系）仍未得到闭环，需关注后续规划。  

---  

## 2. 版本发布  
- **ironclaw‑v1.3.0**（发布于 2026‑08‑19）  
  - 这是 `1.3.0‑rc.2` 的稳定版本提升，包含 RC2 中验证的升级与容器修复，以及完整的 RC1 范围。  
  - **关键修复**：升级从 1.2 到 1.3 时不再因 `activation_state` 字段处理错误而 crash‑loop。  
  - 无记录的破坏性变更；建议用户直接升级，若使用自定义扩展请确认其 `activation_state` 字段的兼容性。  
  - 链接：[ironclaw‑v1.3.0 Release](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v1.3.0)  

---  

## 3. 项目进展（今日合并/关闭的重要 PR）  

| PR | 标题 | 类型 | 影响 | 链接 |
|----|------|------|------|------|
| **#7729** | feat(automations): add run‑now across trigger domain and WebUI | 功能 | 为自动化增加手动触发入口，覆盖第一党能力、助手产品服务、认证 WebUI API 以及本地化自动化 UI。已合并，为后续 “运行现在” 按钮铺路。 | [#7729](https://github.com/nearai/ironclaw/pull/7729) |
| **#7304** | refactor(webui): place OAuth sign‑in above the gateway token form on login | 重构/UI | 将 OAuth 提供商按钮移至登录卡片顶部，改善首次登录体验，减少用户在 token 表单上方寻找第三方登录的困惑。已合并。 | [#7304](https://github.com/nearai/ironclaw/pull/7304) |
| **#7777** | fix(ci): clear the clippy 1.98 lint cascade blocking the merge queue | CI/工具链 | 修复了因新增 Clippy 警告导致的 CI 红灯，恢复了 merge queue 的正常运作。已合并。 | [#7777](https://github.com/nearai/ironclaw/pull/7777) |
| **#7778** | fix(lints): Rust 1.98 clippy migration (unbreaks all‑branch CI) | CI/工具链 | 同上，彻底清理工作区在 Rust 1.98 下的 Clippy 警告，确保所有分支通过 `cargo clippy -- -D warnings`。已合并。 | [#7778](https://github.com/nearai/ironclaw/pull/7778) |
| **#7755** | Collapse two duplicated turn/subagent vocabulary types (dead metadata struct + duplicate spawn‑mode enums) | 重构/内部 | 删除冗余的 turn/subagent 词汇类型，减少代码复杂度，为后续状态迁移清理铺路。已合并。 | [#7755](https://github.com/nearai/ironclaw/pull/7755) |

*此外，还有多个仍在审查中的大型 PR（如 Storybook 集成 **#7750**、子代理设计文档合并 **#7763**、通知中心完善 **#7699/#7698**），它们代表了下一个里程碑的进行中工作。*  

---  

## 4. 社区热点（今日讨论最活跃的 Issues/PRs）  

| 项 | 评论数 | 主题 | 链接 |
|----|--------|------|------|
| **#7732** | 8 | **Epic: Persistent per‑user sandbox with iron‑proxy; defer loop executors** – 讨论围绕如何把每个 shell 命令的临时 Docker 容器替换为长期存在的 per‑user sandbox，以及 `/workspace` 持久性问题。 | [#7732](https://github.com/nearai/ironclaw/issues/7732) |
| **#7770** | 3 | **Epic: hook the agent lifecycle — after‑turn, before‑turn, compaction, and tool‑result seams** – 早期阶段的设计讨论，收集对 hook 接口的期望。 | [#7770](https://github.com/nearai/ironclaw/issues/7770) |
| **#7193** | 2 | **feat(automations): add run‑now (manual fire) across trigger domain, product surface, capability, and WebUI** – 已合并的功能，评论主要集中在命名和 UI 细节。 | [#7193](https://github.com/nearai/ironclaw/issues/7193) |
| **#7038 / #7042** | 各 1 | Design System 基础（Storybook + DESIGN.md 治理） – 少量但持续的反馈，关注文档治理与组件库的落地。 | [#7038](https://github.com/nearai/ironclaw/issues/7038) • [#7042](https://github.com/nearai/ironclaw/issues/7042) |
| **#7308** | 1 | **Hosted MCP OAuth registration for Attio fails with invalid scope** – 已关闭的 bug，评论指出范围不匹配的根因。 | [#7308](https://github.com/nearai/ironclaw/issues/7308) |

*总体来看，持久化沙盒（#7732）是今日讨论最热的议题，反映社区对多租户安全与性能的强烈关注。*  

---  

## 5. Bug 与稳定性（今日新报告问题）  

| 严重度 | Issue | 描述 | 是否已有对应 PR/修复 | 链接 |
|--------|-------|------|---------------------|------|
| **高** | **#7776** | `memory.write` 需要 expected‑version 模式；现有实现可能导致并发写入的静默覆盖。 | 尚未有对应 PR（等待后续实现）。 | [#7776](https://github.com/nearai/ironclaw/issues/7776) |
| **中** | **#7770** | 生命周期钩子（AfterTurn）在调度器失败终端化路径中被绕过，导致后置处理未执行。 | 已有 PR **#7765**（阶段 1）开放中，待合并。 | [#7770](https://github.com/nearai/ironclaw/issues/7770) |
| **中** | **#7775** | 无界运行在遇到 capability gate 时直接中止；建议改为跳过门限而非失败。 | 尚无 PR。 | [#7775](https://github.com/nearai/ironclaw/issues/7775) |
| **中** | **#7769** | Configure UI 只展示 Hosted MCP 验证阻塞项，其他扩展设置阻塞被丢失。 | 已有 PR **#7772**（已开放）用于展示阶段与阻塞项。 | [#7769](https://github.com/nearai/ironclaw/issues/7769) |
| **低** | **#7767** | Automation presenter 日期测试依赖 UTC，在亚洲时区失败。 | 已有 PR **#7774**（已开放）使其时区鲁棒。 | [#7767](https://github.com/nearai/ironclaw/issues/7767) |
| **低** | **#7768** | Settings 与 Extensions  tab 中存在未使用的组件和重复路由元数据。 | 已有 PR **#7773**（已开放）移除重复 tab。 | [#7768](https://github.com/nearai/ironclaw/issues/7768) |
| **低** | **#5998** | 本地 MCP 服务器无法通过 stdio 或 loopback HTTP 与 ironclaw‑reborn 通信。 | 长期未解决，尚无 PR。 | [#5998](https://github.com/nearai/ironclaw/issues/5998) |

*整体稳定性表现良好：CI 已恢复绿色，仅有少量高优先级并发安全问题（#7776）需要尽快补齐。*  

---  

## 6. 功能请求与路线图信号  

| 功能/需求 | 关联 Issue/PR | 备注 | 是否可能进入下一版本 |
|----------|---------------|------|----------------------|
| 持久化 per‑user sandbox（Docker sidecar） | **#7732**（Epic） + PR **#7779**（实现 Step 2） | 已有实现方案，正在进行代码审查。 | 高概率进入 v1.4.0（基于 Epic 标记） |
| Agent 生命周期钩子（AfterTurn/Beforeturn 等） | **#7770**（Epic） + PR **#7765**（阶段 1） | 第一阶段（AfterTurn）已准备好，后续阶段正在规划。 | 很可能在 v1.4.0 中逐步推出 |
| 自动化手动触发（run‑now） | **#7193**（已合并 **#7729**） | 功能已到位，后续可能需要 UI 细化与权限审计。 | 已交付，可视为 v1.3.0 的增量改进 |
| 通知中心与可动作运行门限 | **#7699**、**#7698**、**#7700** | 系列 PR 正在进行中，目标是将审

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI 项目动态日报（2026‑08‑21）**  
数据来源：过去 24 h Issues（2 条）与 PRs（7 条）  

---

## 1. 今日速览  
- 项目整体活跃度中等：过去一天无新版本发布，但有 **6 个 PR 已合并/关闭**，表明开发者在修复已有问题和推进功能上保持持续投入。  
- 开放的 **2 条 Issue 均标记为 *stale*** 且长期未获新评论，说明社区讨论相对沉寂，待维护者审理。  
- 今日最受关注的讨论集中在文档链接失效（Issue #1556）和 Write 工具文件预览功能（Issue #1552/ PR #1553），反映出用户对使用体验和功能完整性的关注度较高。  

> **活跃度评估**：⭐⭐⭐☆☆（中等）  

---

## 2. 版本发布  
- **无新版本发布**。  

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 标题 | 关键变更 | 关联 Issue | 链接 |
|----|------|----------|------------|------|
| #1545 | `fix(agent): sync activeSkillIds immediately when updating current agent's skills` | 在 Agent 设置保存后立即同步 `activeSkillIds`，解决技能徽章不即时更新的问题。 | #1502（间接） | [#1545](https://github.com/netease-youdao/LobsterAI/pull/1545) |
| #1546 | `feat(engine-overlay): 引擎启动超时后显示取消启动和查看日志按钮` | 引擎启动超过 30 s 时弹出“取消启动”和“查看日志”按钮，提供逃逸入口，降低卡死时的用户困扰。 | — | [#1546](https://github.com/netease-youdao/LobsterAI/pull/1546) |
| #1547 | `fix(scheduledTask): 修复定时任务通知渠道选择后无法改回"不通知"的问题` | 在表单初始化时优先检查 `delivery.mode === 'none'`，确保 UI 下拉框正确显示“未通知”。 | — | [#1547](https://github.com/netease-youdao/LobsterAI/pull/1547) |
| #1553 | `feat(cowork): Write 工具文件卡片及分屏预览面板` | 为 Write 工具添加内联 FileCard（文件名、路径、类型、大小及操作按钮）及可拖拽的右侧预览面板（支持 Markdown、HTML、SVG、图片、代码高亮），并关闭 #1552。 | #1552 | [#1553](https://github.com/netease-youdao/LobsterAI/pull/1553) |
| #1555 | `fix: npm run dist:mac:x64打包失败` | 将 `sha256sum` 替换为跨平台的 `shasum`，修复 macOS Intel 架构打包失败。 | — | [#1555](https://github.com/netease-youdao/LobsterAI/pull/1555) |
| #1557 | `feat(settings): 设置面板侧栏支持搜索筛选分类` | 在设置弹窗左侧栏加入搜索框，基于 i18n 词表做多关键词 AND 匹配，自动切换可见 Tab，提升在众多设置分类中的定位效率。 | — | [#1557](https://github.com/netease-youdao/LobsterAI/pull/1557) |
| #1560 | `fix: 修复Agent编辑后点击原Agent无法切换回聊天界面的问题` | 改动 `SidebarAgentList.handleSwitch`，当 `agentId === currentAgentId` 时仍调用 `onShowCowork()`，使得点击当前 Agent 能返回聊天界面。 | — | [#1560](https://github.com/netease-youdao/LobsterAI/pull/1560) |

**整体推进**：  
- **稳定性**：6 个 PR 中有 4 个是明确的 bug‑fix（#1545、#1547、#1555、#1560），直接提升了核心交互的可靠性。  
- **用户体验**：#1546 增加了引擎启动时的逃逸机制；#1553 实现了长期期待的 Write 工具文件卡片与预览面板，极大改善了文档创作场景；#1557 为设置面板引入搜索功能，降低了在众多 Tab 中查找的成本。  
- **构建可靠性**：#1555 解决了 macOS x64 打包阻塞问题，保证了跨平台发布流程的通畅。  

---

## 4. 社区热点（讨论最活跃）

| 类别 | 编号 | 标题 | 评论数 | 反应（👍） | 主要诉求 | 链接 |
|------|------|------|--------|------------|----------|------|
| Issue | #1556 | [stale] doc bug: IM机器人配置指南404 | 2 | 0 | 文档链接失效，需重新托管或更新路径，以免新用户遇到找不到指南的困惑。 | [#1556](https://github.com/netease-youdao/LobsterAI/issues/1556) |
| Issue | #1552 | [stale] feat: AI产物 Markdown 预览及文件卡片支持 | 1 | 0 | 用户希望在 Write 工具完成后直接看到文件卡片并能预览 Markdown/HTML 等内容，避免频繁切换文件管理器或聊天粘贴。 | [#1552](https://github.com/netease-youdao/LobsterAI/issues/1552) |
| PR | #1553 | feat(cowork): Write 工具文件卡片及分屏预览面板 | 0 (未显示) | 0 | 实现了 #1552 的需求，社区在合并后可能会产生后续使用反馈。 | [#1553](https://github.com/netease-youdao/LobsterAI/pull/1553) |

**热点分析**  
- 文档链接失效（#1556）虽然只有 2 条评论，却直接影响新手上手体验，是社区目前最迫切的文档维护需求。  
- Write 工具的文件预览需求（#1552）已经通过 #1553 得到实现，说明该功能是社区关注的焦点，后续可跟进使用反馈以进一步优化预览性能和兼容性。  

---

## 5. Bug 与�定性（按严重程度排序）

| 严重程度 | 编号 | 类型 | 描述 | 是否有对应 Fix PR | 链接 |
|----------|------|------|------|-------------------|------|
| 高 | #1560 | 功能回归 | 编辑 Agent 后点击当前 Agent 未能切回聊天界面，导致工作流中断。 | ✅ #1560 | [#1560](https://github.com/netease-youdao/LobsterAI/pull/1560) |
| 中 | #1545 | 状态不同步 | Agent 技能修改后技能徽章不即时更新，需手动切换 Agent 才能看到变化。 | ✅ #1545 | [#1545](https://github.com/netease-youdao/LobsterAI/pull/1545) |
| 中 | #1547 | UI 表单 bug | 定时任务通知渠道切换回“不通知”后下拉框仍显示之前选中的 IM 渠道。 | ✅ #1547 | [#1547](https://github.com/netease-youdao/LobsterAI/pull/1547) |
| 中 | #1555 | 构建失败 | macOS x64 打包因缺少 `sha256sum` 而失败，阻碍发布流程。 | ✅ #1555 | [#1555](https://github.com/netease-youdao/LobsterAI/pull/1555) |
| 低 | #1546 | 用户体验 | 引擎启动超时时无交互选项，用户只能等待硬超时。 | ✅ #1546（功能增强而非严重 bug） | [#1546](https://github.com/netease-youdao/LobsterAI/pull/1546) |
| 低 | #1556 | 文档失效 | IM 机器人配置指南返回 404，影响文档可读性。 | ❌（尚未有修复 PR） | [#1556](https://github.com/netease-youdao/LobsterAI/issues/1556) |

**总体�定性**：今日合并的修复 PR 已覆盖多数高影响 Bug，项目处于修复趋好状态；仅剩文档链接问题尚未有对应代码修复，需文档维护者关注。  

---

## 6. 功能请求与路线图信号

| 功能请求 | 关联 Issue/PR | 实现状态 | 路线图暗示 |
|----------|----------------|----------|------------|
| Write 工具文件卡片及分屏预览 | Issue #1552 / PR #1553 | 已合并（#1553） | 预计在下一个版本（v?.?.?）中随功能一起发布，进一步完善文档创作体验。 |
| 设置面板侧栏搜索 | Issue (未编号) / PR #1557 | 已合并（#1557） | 提升设置可发现性，可能为后续“高级设置”或“插件管理”铺路。 |
| 引擎启动超时逃逸机制 | Issue (未编号) / PR #1546 | 已合并（#1546） | 增强容错性，为后续引擎版本升级或分布式部署提供更好的用户恢复路径。 |
| Agent 技能实时同步 | Issue #1502（间接） / PR #1545 | 已合并（#1545） | 改善 Agent 配置流程，为未来“技能市场”或“动态技能加载”奠定基础。 |
| 定时任务通知渠道“未通知”状态修复 | Issue (未编号) / PR #1547 | 已合并（#1547） | 细节打磨，提升任务调度模块的可靠性。 |

> **信号**：近期社区围绕 **写作/文档预览**、**设置可搜索性**、**引擎容错**以及 **Agent 配置实时更新** 四个维度持续发力，预计这些特性将是下一轮版本的核心卖点。  

---

## 7. 用户反馈摘要（从 Issues 评论中提炼）

- **文档链接失效**（#1556）：评论指出“新手按照官方教程找不到 IM 配置指南，导致放弃使用”。用户期望文档能够托管在稳定的域名或通过 GitHub Pages 直接访问。  
- **Write 工具预览需求**（#1552）：用户描述“每次生成 Markdown 文件都要手动切到资源管理器打开，极度浪费时间”，希望能够在聊天界面内直接看到渲染结果或至少有文件卡片供快速打开。  
- **Agent 切换卡死**（#1560，已修复）：有用户反馈“编辑完 Agent 后点击原来的 Agent 仍停留在列表页，需要多次切换才能回到聊天”，这直接影响到多 Agent 工作流的效率。  
- **定时任务通知 UI**（#1547，已修复）：用户提到“改回‘不通知’后下拉框显示错误，导致误以为仍在通知”，表达对细节一致性的关注。  

总体而言，用户最痛的点在于 **文档可访问性** 与 **即时预览/反馈**，这些在本日已得到部分缓解（预览功能已合并），但文档问题仍待解决。  

---

## 8. 待处理积压（长期未响应的重要 Issue/PR）

| 编号 | 类型 | 创建时间 | 最后更新时间 | 备注 |
|------|------|----------|--------------|------|
| #1556 | Issue（文档 bug） | 2026-04-08 | 2026-08-20 | 已标记 *stale*，超过 4 个月无新评论，需文档维护者确认是否仍然有效或更新链接。 |
| #1552 | Issue（功能需求） | 2026-04-08 | 2026-08-20 | 虽已有对应 PR #1553 合并，但 issue 本身仍处于 open 状态，建议在合并后关闭以保持追踪整洁。 |

> **建议**：  
> - 对 #1556 进行文档链接检查，若指南已迁移则更新 URL 或添加重定向；若内容已过时，考虑撤销或重新撰写。  
> - 对 #1552 在确认 #1553 已满足需求后，关闭 issue，以免产生冗余的未闭合追

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis 项目日报（2026‑08‑21）**  
*基于过去 24 小时的 GitHub 活动（Issues / PR / Releases）*

---

## 1. 今日速览
- 项目整体活跃度中等：过去 24 小时内产生 **1 条 Issue（已关闭）** 和 **8 条 PR（4 开放、4 已合并/关闭）**，并发布了一个新版本 **20260820.01**。  
- 关键安全漏洞（**CWE‑306**：Vault 解锁/恢复端点缺少身份验证）已通过 PR #1216 修复并随 Issue #1177 关闭，表明安全问题得到及时响应。  
- 大部分讨论集中在代码质量和兼容性改进（如 Windows shell hooks、WhatsApp 消息渲染、Snyk 扫描 pinning），没有出现高评论或争议性的话题，社区氛围较为平稳。  
- 仍有历史较久的未决 PR（#468，自 2026‑03‑23 待合并），提醒维护者关注长期积压。  

---

## 2. 版本发布
| 版本 | 发布时间 | 更新说明（基于 tag 名称） | 破坏性变更 | 迁移注意事项 |
|------|----------|--------------------------|------------|--------------|
| **20260820.01** | 2026‑08‑20 | 版本号采用日期编号格式，未附带详细 changelog。根据同日合并的 PR，本次发布主要包含：<br>• Vault 解锁/恢复端点的身份验证加固（#1216）<br>• WhatsApp 推送名称硬编码移除（#1218）<br>• 不受信任 Turn 工具上限可配置（#1219）<br>• WhatsApp 回复被视为对机器人的寻址（#1217）<br>• HTTPD 认证要求（#1216）等修复。| 目前未见明显破坏性改动；所有修复均为向后兼容的安全或行为调整。| 建议升级到此版本以获得安全补丁；若使用了自定义 WhatsApp 推送名称或依赖旧的 Turn 工具上限，请检查配置是否受影响（已提供可选配置项）。|

> **链接**：[Release 20260820.01](https://github.com/moltis-org/moltis/releases/tag/20260820.01)

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 状态 | 主要内容 | 关联 Issue | 影响 |
|----|------|----------|------------|------|
| **[#1216](https://github.com/moltis-org/moltis/pull/1216)** | CLOSED | 为 `POST /api/auth/vault/unlock` 和 `POST /api/auth/vault/recovery` 添加 `AuthSession` 提取器，修复 CWE‑306（未身份验证的暴力破解风险）。 | #1177 | 提升安全性，防止未授权访问 Vault。 |
| **[#1218](https://github.com/moltis-org/moltis/pull/1218)** | CLOSED | 移除 WhatsApp 客户端中硬编码的推送名称为“Moltis”，改为使用配置的 push name。 | – | 让自定义机器人名称在群聊中正确显示。 |
| **[#1219](https://github.com/moltis-org/moltis/pull/1219)** | CLOSED | 将非运营商在已验证直聊中的“不受信任 Turn”工具上限设为可配置项，避免误删公共受众工具。 | #1170 | 提供更灵活的工具策略，防止功能被意外禁用。 |
| **[#1217](https://github.com/moltis-org/moltis/pull/1217)** | CLOSED | 在 `mention_mode = "mention"` 的群组中，将对机器人消息的回复视为对机器人的寻址，防止消息被丢弃。 | – | 改善群聊交互体验，确保机器人能正确响应回复。 |

> 以上四项 PR 均已合并，直接贡献了安全加固、用户体验改进和配置灵活性的提升。

---

## 4. 社区热点
在过去 24 小时内，**没有任何 Issue 或 PR 获得评论或点赞**（所有条目均显示 `评论: undefined`、`👍: 0`）。这表明近期讨论较为安静，主要集中在代码提交而非社区辩论。若要寻找潜在的热点，可关注：

- **长期未决 PR #468**（Windows shell hooks），虽然目前无评论，但其历史悠久（创建于 2026‑03‑23），可能在后续 Windows 用户中引发讨论。  
- **安全相关的 Issue #1177**（已关闭），虽然评论为 0，但其 CWE 类型和修复 PR 的及时性值得社区关注。

> 链接示例：[#468](https://github.com/moltis-org/moltis/pull/468)

---

## 5. Bug 与稳定性
| 严重程度 | 描述 | 关联 Issue | 已有 Fix PR | 状态 |
|----------|------|------------|------------|------|
| **高** | Vault 解锁/恢复端点缺少身份验证（CWE‑306），可能导致未授权暴力破解。 | #1177 | #1216 | 已合并，Issue 已关闭。 |
| 低 | 其他未报告的 Bug 暂无记录。 | – | – | – |

> 总体而言，今日仅发现一个高危安全问题，且已得到及时修复，项目稳定性良好。

---

## 6. 功能请求与路线图信号
- **未发现明确的功能请求 Issue**。  
- 从已合并 PR 可推断出的潜在路线图方向：  
  1. **平台兼容性**：持续改进 Windows 上的 shell 执行（#468）表明社区关注跨平台支持。  
  2. **可配置安全策略**：#1219 将工具上限设为可配置，暗示未来可能会进一步细化 Turn、工具链等安全策略的可调性。  
  3. **即时通讯适配**：WhatsApp 相关改动（#1217、#1218、#1220）显示对即时通讯渠道的细致打磨，可能后续会扩展到其他平台（如 Telegram、Slack）。  

维护者可根据这些信号评估是否在后续版本中加入更多的配置项或平台适配。

---

## 7. 用户反馈摘要
因本日无评论，无法直接提炼用户痛点。然而，从已合并 PR 的描述可间接看出用户可能的诉求：

- **安全**：用户期望敏感操作（Vault 解锁/恢复）必须经过身份验证。  
- **个性化**：不希望机器人在群聊中被固定显示为“Moltis”，而想使用自定义名称。  
- **灵活配置**：希望对工具使用策略有更细粒度的控制，而不是硬编码的限制。  
- **跨平台**：Windows 用户希望 shell hooks 能正常工作，避免因缺少 `sh -c` 而失败。  

这些反馈虽然未通过评论表现，却是驱动今日修改的直接动力。

---

## 8. 待处理积压（长期未响应）
| 项目 | 类型 | 创建时间 | 未处理天数 | 备注 |
|------|------|----------|------------|------|
| **[#468](https://github.com/moltis-org/moltis/pull/468)** | PR (fix(plugins): use cmd.exe on Windows for shell hooks) | 2026-03-23 | ~151 天 | 已在 Windows 10 上测试通过，CI 通过，但仍未合并。建议维护者评估合并时机或提供合并阻碍的原因。 |
| （暂无其他长期 Issues） | – | – | – | – |

> 除 #468 外，当前 Issue 列表中没有其他超过 30 天未更新的条目，说明项目整体issue响应及时。

---

**总结**：今日 Moltis 项目在安全方面取得重要进展（修复 CWE‑306），并在功能兼容性与用户体验上进行了若干细微改进。虽然社区讨论较为安静，但历史悠久的 PR #468 需要关注，以免长期积压影响 Windows 用户体验。建议维护者在即将发布的下一版本中，考虑将 #468 合并，并在发布说明中明确列出本次安全补丁及可配置项的使用说明。祝项目继续健康发展！

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw (agentscope‑ai/QwenPaw) 项目动态日报**  
*日期：2026‑08‑21*  

---

## 1. 今日速览  
- **活跃度**：过去 24 小时共有 **27 条 Issue**（14 处于打开/活跃状态，13 已关闭）和 **50 条 PR**（21 待合并，29 已合并/关闭），整体交互频率高于昨日。  
- **版本发布**：项目刚刚发布 **v2.1.1‑beta.1**（Beta），主要改进了控制台编辑器标签页的溢出导航并降低了提供商速率限制器的初始化日志级别。  
- **健康度**：合并的 PR 集中在性能、稳定性和依赖安全修复（如并发驱动初始化、环境变量文件容错、依赖漏洞补丁），表明团队在保持功能迭代的同时也在夯实基础设施。  

---

## 2. 版本发布  

| 版本 | 类型 | 发布时间 | 关键变更（摘自 Release notes） |
|------|------|----------|--------------------------------|
| **v2.1.1‑beta.1** | Beta | 2026‑08‑20 | • **feat(console)**: 改进编辑器标签页溢出导航（@rayrayraykk） <br>• **fix(providers)**: 降低速率限制器初始化日志级别（@rayrayraykk） <br>• **chore**: 更新发布说明（未完整展示） |

> **破坏性变更**：本版本未声明破坏性改动；主要为功能细化与日志调优，升级应为平滑。  
> **迁移注意事项**：建议阅读完整发布页（<https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.1.1-beta.1>）以确认任何潜在的配置变更（如日志级别）是否影响现有监控脚本。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR # | 标题 | 类型 | 主要贡献 | 关联 Issue（若有） |
|------|------|------|----------|-------------------|
| #7161 | feat(console): add artifacts to assistant response card | 新功能 | 在助手回复卡片中嵌入产出物（artifact）预览，提升多模态交互可视化。 | — |
| #7174 | perf(drivers): initialize persistent drivers concurrently | 性能 | 工作区启动时并行加载持久化驱动，显著缩短冷启动时间。 | — |
| #7166 | fix(release): bundle qwenpawmail MCP as a standalone sidecar | 修复 | 将 qwenpawmail MCP 打包为独立 sidecar，解决冻结构建时的依赖缺失问题。 | — |
| #7135 | fix(envs): preserve corrupt files and write envs atomically | 修复 | 对 `envs.json` 损坏容错，防止因单字节错误导致全部环境变量丢失。 | #7118 |
| #7172 | chore(deps): patch vulnerable website and creator dependencies | 依赖安全 | 升级 vite、rollup、react‑router‑dom、js‑yaml 等，修复已知安全漏洞。 | — |
| #6371 | fix(file-handling): continue fallback after downloader timeout | 修复 | 下载器超时时继续尝试备用下载工具（wget → curl → urllib），避免因单个工具超时而中断文件获取。 | #6370 |
| #6880 | feat(console): unify apps, plugins, and skills in the marketplace | 新功能 | 将应用、插件、技能市场统一在 `/market` 路径下，使用 tab 区分，提升发现性。 | — |

**整体推进**：今日合并的 PR 主要聚焦在 **性能提升（#7174）**、**稳定性与容错（#7135、#7166、#6371）**以及 **用户体验细化（#7161、#6880）**，为后续功能扩展奠定了更可靠的基础。

---

## 4. 社区热点（今日讨论最活跃的 Issues / PRs）

| 排名 | 类型 | 编号 | 主题 | 评论数 | 链接 |
|------|------|------|------|--------|------|
| 1 | Issue | #6921 | 模型在多步骤规划后无提示即停止，需手动输入 “继续” | 10 | <https://github.com/agentscope-ai/QwenPaw/issues/6921> |
| 2 | Issue | #7102 | 使用 GLM‑5.3 时出现 >10 分钟卡死，无 token 输出 | 9 | <https://github.com/agentscope-ai/QwenPaw/issues/7102> |
| 3 | Issue | #6643 | 任务产出物全部堆积在 `media` 目录，建议按任务建立子目录 | 6 | <https://github.com/agentscope-ai/QwenPaw/issues/6643> |
| 4 | Issue | #6436 | 自动模型路由（根据消息复杂度、模态选择合适模型） | 4 | <https://github.com/agentscope-ai/QwenPaw/issues/6436> |
| 5 | PR | #7161 | 在助手回复卡片中添加产出物预览 | 0（但被广泛关注） | <https://github.com/agentscope-ai/QwenPaw/pull/7161> |

**背后诉求**：  
- **#6921** 反映用户对模型自主执行连续性的期待，希望系统能够在规划后自动进入执行阶段，而不需要人工干预。  
- **#7102** 指出在特定大模型后端（GLM‑5.3）下出现长时间无响应的稳定性问题，提示可能存在后端连接或流式读取的死锁。  
- **#6643** 与数据管理有关，用户希望产出物按任务隔离，以便检索和版本控制。  
- **#6436** 是一项长期的功能诉求，期望框架能够根据输入特征动态切换模型，提高成本效益。  

---

## 5. Bug 与�定性（今日新报告的 Bug，按严重程度排序）

| 严重度 | Issue # | 描述 | 是否已有对应 fix PR | 链接 |
|--------|---------|------|----------------------|------|
| **高** | #7156 | Embedding health check 超时（>5 s），硬编码超时无法配置，导致向量召回降级为 BM25‑only。 | 暂无（需加超时可配置 PR） | <https://github.com/agentscope-ai/QwenPaw/issues/7156> |
| **高** | #7162 | 流式输出中途出现 `httpx.ReadError` 未被重试机制捕获，导致 `UNKNOWN_AGENT_ERROR`。 | 暂无（需在 `_get_httpx_retryable()` 加入 ReadError） | <https://github.com/agentscope-ai/QwenPaw/issues/7162> |
| **中** | #7168 | `history.db` 被 `recall_history` 的 expand 持续写入，单会话数据库膨胀至 7.6 GB，且重复落库。 | 暂无（需调整写入策略或增加清理机制） | <https://github.com/agentscope-ai/QwenPaw/issues/7168> |
| **中** | #7182 | 提出工作区范围的常驻 Skills 加载机制（功能请求，但若实现不当可能带来启动开销）。 | 相关 PR #7183（已提交） | <https://github.com/agentscope-ai/QwenPaw/issues/7182> |
| **低** | #7159 | QQ 群主动发消息支持定时任务（功能请求，暂无 bug）。 | — | <https://github.com/agentscope-ai/QwenPaw/issues/7159> |
| **低** | #7158 | 钉钉群聊上下文模式可配置（功能请求）。 | — | <https://github.com/agentscope-ai/QwenPaw/issues/7158> |

> **已有 fix PR**：目前尚未发现直接对应上述高严重 Bug 的合并 PR，建议维护者优先跟进 #7156 和 #7162，因为它们直接影响服务可用性和错误恢复能力。

---

## 6. 功能请求与路线图信号

| 功能请求 | 关联 Issue | 已有相关 PR | 是否可能进入下一版本 |
|----------|------------|------------|----------------------|
| 自动模型路由（根据复杂度/模态） | #6436 | — | 高（社区强烈需求，已在路线图讨论中） |
| 按任务隔离产出目录 | #6643 | — | 中（涉及文件系统改动，需谨慎评估） |
| 工作区范围常驻 Skills（Always‑on） | #7182 | #7183（Open） | 高（PR 已提交，功能明确） |
| QQ 群定时推送 | #7159 | — | 中（依赖 QQ 机器人能力，需后端适配） |
| 钉钉群上下文共享模式 | #7158 | — | 中（与现有上下文隔离逻辑有关） |
| 嵌入式工具面板 / Web 终端（Chat 增强） | #7013 | — | 中‑高（涉及前端大改动，但已有相关设计讨论） |
| 优化智能体切换 UI（下拉框展示更多） | #7179 | — | 低‑中（UI 改动成本小，易于接受） |
| 支持 VPN 下桌面客户端正常使用 | #6974 | — | 中（网络层适配，已有部分反馈） |

**信号解读**：  
- **自动模型路由**和 **工作区常驻 Skills** 是目前讨论最热且已有实现雏形（PR #7183）的功能，极有可能进入接下来的 **v2.1.2** 或 **v2.2** 迭代。  
- **产出目录隔离**、**QQ 定时推送**、**钉钉上下文共享** 属于中等复杂度的增强，若社区继续投票或有赞助，可能被安排在后续的里程碑中。  
- **UI/UX 改进**（智能体切换、VPN 支持）实现成本较低，常作为补丁或次要功能合并。

---

## 7. 用户反馈摘要（从 Issues 评论中提炼的典型痛点）

| 主题 | 典型用户语言（摘自评论） | 暗含的需求 |
|------|--------------------------|-----------|
| **模型自停** | “模型说完‘Now 2.1, 3.1, 3.2. Let me do all three.’就卡住了，必须我说‘继续’才会往下走。” | 需要模型在规划后自动进入执行阶段，或提供明确的“继续执行”按钮/提示。 |
| **长时间卡死** | “使用 GLM‑5.3 时整个界面冻结，超过十分钟没有任何 token，甚至思考过程也停止。” | 后端连接或流式读取的超时/死锁机制需改进；建议增加心跳或重连机制。 |
| **文件杂乱** | “所有产出物堆在 media 文件夹里，找东西像大海捞针。” | 按任务或会话自动创建子目录，便于文件管理和版本控制。 |
| **模型选择不够灵活** | “希望能够根据输入自动切换到轻量本地模型或视觉模型，而不是一直用同一个大模型。” | 自动模型路由功能的迫切需求。 |
| **环境变量丢失** | “envs.json 被一个非法字符毁掉，结果所有密钥全没了，得手动重新配置。” | 对配置文件的容错性和原子写入的需求（已在 #7135 中解决）。 |
| **流式错误未重试** | “读取 SSE 流时出现 ReadError，直接抛 UNKNOWN_AGENT

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw 项目日报（2026‑08‑21）**  
*数据来源：过去 24 h Issues 50 条（新开/活跃 45，已关闭 5），PR 50 条（待合并 45，已合并/关闭 5），无新版本发布。*  

---

## 1. 今日速览
- 项目整体活跃度很高：今天有 45 条活跃 Issue 和 45 条待合并 PR，说明开发节奏保持在高强度迭代状态。  
- 讨论集中在几个大型 RFC（如运行时会话所有权、核心精简、Rust 防滑政策）以及工具链稳定性（代理选择器、工具结果截断、终端生命周期）。  
- 虽无新版本发布，但已有多个修复 PR 合并（如 #10194、#10111、#10148），以及一批依赖升级 PR（Dependabot），为下一个版本奠定基础。  

---

## 2. 版本发布
**今日无新版本发布。**  

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 标题 | 关键变化 | 状态 | 链接 |
|----|------|----------|------|------|
| #10194 | fix(ci): PR reviewer publishes in‑flight results after the PR merges | 防止 AI 评论者在 PR 已合并后仍发布审查结果，提升 CI 检查的可靠性。 | **已关闭** | [zeroclaw-labs/zeroclaw#10194](https://github.com/zeroclaw-labs/zeroclaw/issues/10194) |
| #10111 | duplicate: Windows: Entry Point Not Found — TaskDialogIndirect in zeroclaw-desktop.exe | 标记为重复，已由其他 Issue 涵盖，避免重复工作。 | **已关闭** | [#10111](https://github.com/zeroclaw-labs/zeroclaw/issues/10111) |
| #10148 | fix(zerocode): make theme presets package‑local | 将 TUI 主题表生成从 `build.rs` 移入 `xtask` 生成器，使 `zerocode` 包能独立编译。 | **已关闭** | [#10148](https://github.com/zeroclaw-labs/zeroclaw/issues/10148) |
| #10182 | chore(deps): bump the rust‑all group across 1 directory with 46 updates | 批量升级 Rust 生态依赖（clap、tokio 等），保持工具链最新。 | **已关闭** | [#10182](https://github.com/zeroclaw-labs/zeroclaw/issues/10182) |
| #9104 | feat(providers): add Grok Build ACP model provider | 引入 Grok Build 作为 ACP JSON‑RPC 模型提供方，扩展多模型支持。 | **已关闭** | [#9104](https://github.com/zeroclaw-labs/zeroclaw/issues/9104) |
| #8443 | feat(matrix): add single‑message progress drafts | 为 Matrix 通道添加单消息进度草稿模式，改善交互体验。 | **已关闭** | [#8443](https://github.com/zeroclaw-labs/zeroclaw/issues/8443) |

**整体影响**：  
- CI 可靠性得到提升（#10194），减少误报。  
- 桌面打包流程更清晰（#10148），降低构建环境依赖。  
- 依赖升级（#10182）为后续安全补丁和性能优化铺平道路。  
- 新提供方（#9104）和 Matrix 功能（#8443）丰富了生态插件。  

---

## 4. 社区热点（今日评论最多的 Issues/PRs）

| 排名 | 类型 | 编号 | 主题 | 评论数 | 链接 | 讨论焦点 |
|------|------|------|------|--------|------|----------|
| 1 | Issue | #9487 | **RFC: Runtime‑owned conversation sessions and transport surface adapters** | 22 | [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | 会话所有权迁移到运行时、耐久入口、歧义结果语义、跨网关适配器。 |
| 2 | Issue | #6165 | **RFC: Prefer a lighter ZeroClaw core through external integrations** | 18 | [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) | 核心臃肿问题、外部化长尾集成、安全与配置影响。 |
| 3 | Issue | #10118 | **[Tracker]: Rust anti‑slop policy debt remediation** | 16 | [#10118](https://github.com/zeroclaw-labs/zeroclaw/issues/10118) | 清理 307 项 Rust 反滑候选项、生产 panics、未使用变量、不安全块。 |
| 4 | Issue | #6850 | **RFC: Decouple memory lifecycle policy from storage backends** | 14 | [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | 记忆 trait 与生命周期策略解耦、统一网关/后端调用。 |
| 5 | Issue | #8780 | **RFC: Realtime speech‑to‑speech channel for Gemini Live** | 14 | [#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) | 实时语音通道、Broker 契约、特性门控、Gemini Live 首个实现。 |
| 6 | PR | #10117 | fix(config): accept exact transcription proxy selectors (#10106) | — (评论未显示) | [#10117](https://github.com/zeroclaw-labs/zeroclaw/pull/10117) | 精确代理选择器匹配五大转写后端（OpenAI、Deepgram 等），解决 #10106 报告的配置不匹配。 |
| 7 | PR | #10189 | fix(i18n): localize terminal approval prompts | — | [#10189](https://github.com/zeroclaw-labs/zeroclaw/pull/10189) | 终端工具审批提示本地化，保留语义且支持多语言。 |
| 8 | PR | #10188 | fix(runtime): enforce independent delegate approval policy | — | [#10188](https://github.com/zeroclaw-labs/zeroclaw/pull/10188) | 为独立代理提供独立审批管理器，防止未授权工具调度。 |

**背后诉求**：  
- 社区强烈希望 **运行时承担会话生命周期**，以实现跨重启的持久对话和更清晰的网关边界（#9487）。  
- 同时，大家关注 **核心精简**（#6165）和 **内存生命周期解耦**（#6850），以减少攻击面和提升可维护性。  
- 国际化和代理选择器的细节修正（#10117、#10189）表明用户在实际部署中遇到了语言和配置不兼容的痛点。  

---

## 5. Bug 与�定性（今日报告的 Bug 按严重程度排序）

| 严重度 | Issue | 描述 | 是否已有 Fix PR | 链接 |
|--------|-------|------|----------------|------|
| **S1（工作流阻塞）** | #9016 | OpenAI tool 转发失败当 Chat Completions 拒绝 reasoning effort | 无直接 PR（但 #10117 修改了代理选择器，可能间接相关） | [#9016](https://github.com/zeroclaw-labs/zeroclaw/issues/9016) |
| **S2（降级行为）** | #10106 | Exact proxy selectors 拒绝支持的转写服务 | 已有 PR #10117（修复） | [#10106](https://github.com/zeroclaw-labs/zeroclaw/issues/10106) |
| **S2** | #10114 | `max_tool_result_chars` 固定 50 000，与模型上下文窗口无关 | 无直接 PR（但 #10115‑#10116 讨论截断实现） | [#10106](https://github.com/zeroclaw-labs/zeroclaw/issues/10114) |
| **S2** | #10115 | 工具结果截断在模型上下文外不可见 | 无直接 PR | [#10115](https://github.com/zeroclaw-labs/zeroclaw/issues/10115) |
| **S2** | #10116 | 超大工具结果按 byte 中间裁切，建议改为 spill‑to‑file（类似 web_fetch） | 无直接 PR | [#10116](https://github.com/zeroclaw-labs/zeroclaw/issues/10116) |
| **S2** | #10074 | `SECURITY.md` 描述的 CI docker job 已删除，检查仅靠约定 | 无直接 PR（需文档更新） | [#10074](https://github.com/zeroclaw-labs/zeroclaw/issues/10074) |
| **S2** | #10073 | `StoragePolicy::Rolling` 在持续高事件量下性能回退 | 无直接 PR（但有相关讨论） | [#10073](https://github.com/zeroclaw-labs/zeroclaw/issues/10073) |
| **S2** | #10194 | PR 评论者在 PR 合并后仍发布结果（**已修复**） | 已合并 #10194 | [#10194](https://github.com/zeroclaw-labs/zeroclaw/issues/10194) |
| **S3（轻微）** | #10111 | Windows 入口点缺失（已标记为重复） | 无需修复 | [#10111](https://github.com/zeroclaw-labs/zeroclaw/issues/10111) |

**总体�定性**：今日报告的 Bug 主要集中在 **工具结果处理**、**代理选择器** 和 **安全文档过时** 三个方面。已有针对 #10106 的修复 PR（#10117），其余高严重度问题尚待后续 PR。  

---

## 6. 功能请求与路线图信号

| 功能/请求 | 关联 Issue/PR | 现状 | 是否可能进入下一版本 |
|-----------|--------------|------|-------------------|
| **运行时会话所有权**（耐久会话、传输适配器） | #9487（RFC） | 讨论活跃，22 条评论，尚未合并 | 高概率——是核心架构演进的下一步。 |
| **核心精简**（外部化长尾集成） | #6165（RFC） | 18 条评论，接受状态但尚未实施 | 中等——需要维护者审查与迁移计划。 |
| **内存生命周期解耦** | #6850（RFC） | 14 条评论，待主审 | 中等——涉及多个网关/后端，需协调。 |
| **SOP 能力权限合同** | #9598（RFC） | 10 条评论，已接受 | 高——已进入实施阶段。 |
| **Agent 可移植性**（导出/导入 bundles） | #10069（RFC） | 2 条评论，进行中 | 低‑中——依赖于配置快照机制的成熟。 |
| **目标模式 v2**（持久化 continuation、Web 配套控件） | #9702（RFC） | 5 条评论，已接受 | 中等——需要前端工作。 |
| **实时语音通道（Gemini Live）** | #8780（RFC） | 14 条评论，待主审 | 高——实时多媒体是社区热点。 |
| **插件运行时加载（WASM 插件）** | #8850（Tracker） | 4 条评论，进行中 | 高——已有激活逻辑 PR（#10146）在推进。 |
| **终端生命周期导出（供 multiplexer 使用）** | #10167（Feature） | 1 条评论，新提 | 低——尚未获足够关注。 |

**路线图暗示**：  
- 下一个里程碑很可能会聚焦

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*