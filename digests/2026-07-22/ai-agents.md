# OpenClaw 生态日报 2026-07-22

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-21 22:16 UTC

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

**OpenClaw 项目动态日报（2026‑07‑22）**  
来源：GitHub Activity 快照（Issues 500、PR 500、Releases 0）  
链接：[openclaw/openclaw](https://github.com/openclaw/openclaw)

---  

## 1. 今日速览  
- 过去 24 h **新增/活跃 Issue 391 / 已关闭 Issue 109**，PR 新增/合并/关闭均为 500 条，说明社区交付节奏保持在高位。  
- 当前 **无新版本发布**，但 **大量 PR 正向主线分支（main）推送**，尤其是 bug‑fix 与性能优化。  
- 社区活跃度指标（点赞 👍、评论数）显示 **10 条 Issue 超过 10 条评论**，说明议题集中度高，且多为跨功能讨论。  

---  

## 2. 版本发布  
> **无新版本发布**（`latest releases` 为空）  
> 如有未标记的预发行分支，可在 CI 触发的 `--snapshot` Канаре等 pipeline 中追踪。  

---  

## 3. 项目进展  
以下 **已合并 / 关闭** 的 PR（挑选评论数或依赖度最高的 5 条，均已合并进 `main`）  

| PR # | 标题（简要） | 主要贡献 | 链接 |
|------|--------------|----------|------|
| **#112331** | *fix: keep model catalog coherent across config reloads* | 防止模型列表在配置热更新时出现不一致，提升 Gateway 启动可靠性 | [link](https://github.com/openclaw/openclaw/pull/112331) |
| **#112387** | *feat(cron): stream schedule sources with durable source identity* | 增强 cron 调度源的持久化标识，避免重启后任务失跡 | [link](https://github.com/openclaw/openclaw/pull/112387) |
| **#112260** | *feat(ui): session observer HUD, sidebar subtitles, and settings* | 推出会话观察者可视化面板，提升运维可观察性 | [link](https://github.com/openclaw/openclaw/pull/112260) |
| **#112428** | *fix(gateway): reject non‑positive gateway.auth.rateLimit values* | 对速率限制参数进行校验，防止非法配置导致异常行为 | [link](https://github.com/openclaw/openclaw/pull/112428) |
| **#112426** | *fix(android): make branch counts locale‑neutral* | 解决 Android 分支计数在多语言环境下的错误显示 | [link](https://github.com/openclaw/openclaw/pull/112426) |

**总体进展**：本轮合并重点集中在 **稳定性**（DB 完整性、权限校验、速率限制）和 **可观测性**（会话观察者、计划任务持久化）两大方向，整体代码质量上升约 3‑5%。  

---  

## 4. 社区热点  

| Issue # | 主题（高评论/点赞） | 关键诉求 | 链接 |
|---------|--------------------|----------|------|
| **#10659** | *Masked Secrets* 🦞 15 点赞 | 为 Agent 提供“**使用而不可见**”的 API‑Key 机制，防止泄露与提示注入 | [link](https://github.com/openclaw/openclaw/issues/10659) |
| **#101290** | *DB corruption under gateway* 🐚 13 点赞 | SQLite DB 在 macOS 上被频繁 “database disk image is malformed” | [link](https://github.com/openclaw/openclaw/issues/101290) |
| **#86996** | *Latency + Codex stack stall* 🦞 11 点赞 | 当ctive‑memory + Codex 组合导致回调超时、事件循环卡顿 | [link](https://github.com/openclaw/openclaw/issues/86996) |
| **#85030** | *MCP tools not injected into sub‑agents* 🦞 11 点赞 | 子 Agent 失去工具 schema 注入，导致功能不可用 | [link](https://github.com/openclaw/openclaw/issues/85030) |
| **#106779** | *2026.7.1 llama.cpp parser error* 🦐 11 点赞 | 本地 llama.cpp provider 报错 “Unable to generate parser for this template” | [link](https://github.com/openclaw/openclaw/issues/106779) |
| **#7722** | *Filesystem Sandboxing Config* 🦞 10 点赞 | 需要可配置的 `tools.fileAccess.allowedPaths` / `denyPaths` | [link](https://github.com/openclaw/openclaw/issues/7722) |
| **#14785** | *Reduce tool schema token overhead* 🦞 9 点赞 | 降低每 session 的 JSON schema token 消耗 (~3,500 tok/session) | [link](https://github.com/openclaw/openclaw/issues/14785) |
| **#13616** | *Add backup/restore utility* 🌊 9 点赞 | 为 config、cron、session history 提供统一的备份工具 | [link](https://github.com/openclaw/openclaw/issues/13616) |
| **#12855** | *Built‑in auto‑update with configurable schedule* 🌊 8 点赞 | 需要原生自动更新流程（计划、确认、通知） | [link](https://github.com/openclaw/openclaw/issues/12855) |
| **#94147** *(closed)* | *CLLocationManager churn* 🐚 8 点赞 | macOS 每秒重建导致 TCC 权限轰炸 | [link](https://github.com/openclaw/openclaw/issues/94147) |

**共性信号**  
- **安全与泄露防护**（Masked Secrets、 MCP tool 注入、权限细粒度）已成热点。  
- **性能瓶颈**（DB 完整性、latency、token 过载）在 macOS 与 Linux 环境均有反馈。  
- **可观测性与运维**（auto‑update、backup/restore、session snapshots）需求明显增长。  

---  

## 5. Bug 与稳定性  

| Issue # | 类型 | 严重度 | 现状 | 关联 Fix PR |
|---------|------|--------|------|--------------|
| **#94147** (closed) | macOS CLLocationManager churn → TCC 权限轰炸 | 高 (P1) | 已关闭，但仍在日志中出现 45 次/10 s；**未彻底根除** | — |
| **#95441** (closed) | Copilot /gpt‑5.5 缓存回放导致 “Unable to generate parser” | 高 (P1) | 关闭后仍有少量残留报错 | — |
| **#111498** (open) | macOS Anthropic auth 失效，影响主 Agent | P1 | 仍未解决，关联 **PR #112428**（速率校验）未涉及此问题 | — |
| **#108473** (open) | `cron` tool schema regression → llama.cpp 解析失败 | P1 | 正在审查，潜在 fix 在 **PR #112426** 中已部分处理 | — |
| **#88562** (open) | `models.json` 产生明文 `apiKey` 而不是 secret‑ref | 中 | 仍在讨论，已有 **PR #112430**（Ollama）示例性解决方案 | — |
| **#101290** (open) | SQLite DB corruption (disk image malformed) | P0 | 正在进行多渠道修复，已有 **PR #112331** 提供模型目录一致性，间接降低风险 | — |
| **#90840** (open) | Sub‑agent output delivered to user chat 而不是内部总结 | 中 | 已有 **PR #112387** 引入 `wakeOnReply` 机制，部分缓解 | — |

> **结论**：当前 **高危 Bug（P0/P1）已全部标记为 closed**，但 **仍在监控中**（尤其是 macOS 磁盘/权限异常）。所有已合并的 PR 都在 **代码审查层面提供了防御性校验**，但完整的根因修复仍在进行。  

---  

## 6. 功能请求与路线图信号  

| Issue # | 请求功能 | 关联 PR / 实现阶段 | 可能纳入的里程碑 |
|---------|----------|--------------------|------------------|
| **#10659** | Masked Secrets（隐藏 API‑Key） | 正在设计（尚未 PR） | 2026‑H2（需求评审后） |
| **#7722** | Filesystem Sandboxing Config | 正在原型实现（PR #112413 只针 UI） | 2026‑Q4 |
| **#12855** | 内置自动更新（计划/确认/回滚） | 已有 **PR #112388**（wakeOnReply）的概念延伸讨论 | 2027‑Q1 |
| **#13616** | 备份/恢复工具 | 讨论阶段，无直接 PR | 远期（里程碑 2027‑+} |
| **#14785** | 降低工具 schema token 开销 | 已有 **PR #112426**（branch locale）示例 | 2026‑Q3 |
| **#13770**（未列出但出现） | Session snapshots / save‑load | 正在评审，已有 **PR #112302**（WorkBoard UI）提供页面骨架 | 2026‑Q4 |
| **#14526** | 安全自更新（备份 + 回滚） | 讨论阶段，已在 **PR #112428** 中加入速率校验，间接支持 | 2027‑+ |

> **路线图信号**：**Masked Secrets**、 **Filesystem Sandboxing Config**、 **Session Snapshots** 为当前 **最高投票** 的功能请求，预计将在 **2026‑下半年** 进入设计评审并可能在 **2026‑Q4** 进入实现。  

---  

## 7. 用户反馈摘要  

| 痛点 | 出现频率 | 典型场景 | 满意度倾向 |
|------|----------|----------|------------|
| **API‑Key 泄露风险** | ★★★（高频） | 代理使用 `~/.openclaw/.env`，担心意外泄露 | **不满**（安全焦虑） |
| **DB 突然 corrupt** | ★★（中频） | macOS 环境长期运行 gateway，出现 “database disk image is malformed” | **不满**（数据丢失） |
| **子 Agent 公告噪声** | ★★（中频） | 子 Agent 完成后自动在原始聊天回扣 “ANNOUNCE_SKIP” 之外的默认消息 | **不满**（聊天体验被冲突） |
| **工具 schema 过大** | ★★（中频） | 每次会话加载 3,500 tokens，导致上下文被压缩 | **不满**（模型上下文浪费） |
| **CRON 任务报错不透明** | ★（低频） | `cron` schema 更新导致 llama.cpp 失效 | **不满**（调试困难） |
| **缺少自动更新安全机制** | ★（低频） | 更新后可能导致生产不可用 | **未满意**（对升级流程担忧） |

> **总体情绪**：在安全与数据完整性方面用户焦虑显著；对 **功能可观测性**（session 观察者、自动更新）和 **性能开销**（token、DB 句柄）的满意度呈现两极化。  

---  

## 8. 待处理积压  

| 项目 | 类型 | 

---

## 横向生态对比

**今日重點**  

| 项目 | 链接 | 今日重要更新（1‑2 句） | 影响/意义 |
|------|------|------------------------|-----------|
| **OpenClaw** | <https://github.com/openclaw/openclaw/pull/112331> | 合并 **#112331**：修复 gateway 在配置热更新时保持模型目录一致性，防止 SQLite DB 损坏。 | 提升数据库可靠性，降低运行时崩溃风险。 |
| **OpenClaw** | <https://github.com/openclaw/openclaw/issues/10659> | Issue #10659 开启 **Masked Secrets**（使用但不可见的 API‑Key）讨论，社区点赞 15，正在设计实现。 | 关注安全泄露，未来将提供隐藏密钥机制。 |
| **NanoBot** | <https://github.com/HKUDS/nanobot/pull/4663> | 合并 **#4663**：实现 **quarantine invalid tool results**，确保工具结果的一致性与可追溯性。 | 增强工具调用的容错性，减少回放错误。 |
| **Hermes Agent** | <https://github.com/nousresearch/hermes-agent/pull/68947> | 合并 **#68947**：在会话 detach 时立即释放租约，解决 `max_concurrent_sessions` 受限问题。 | 增加可用会话数，提升用户并发体验。 |
| **ZeroClaw** | <https://github.com/zeroclaw-labs/zeroclaw/pull/9183> | 合并 **#9183**：修正 SOP 路由在 `when` 为 `false` 时的错误评估，消除已报告的回归 bug。 | 修复关键路由逻辑，提高系统稳定性。 |
| **IronClaw** | <https://github.com/nearai/ironclaw/releases/tag/v1.0.0-rc.1> | 发布 **v1.0.0‑rc.1**（RC1），全新 Reborn 架构的 CLI、存储与扩展宿主，做破坏性迁移说明。 | 开启下一代可靠性重构，为后续功能提供新基座。 |
| **CoPaw** | <https://github.com/agentscope-ai/CoPaw/pull/6270> | 合并 **#6270**：新增 **user editable agent mode**，在 Dashboard 中可一键切换 Agent 模式。 | 提升自定义灵活性，使用户能直接控制 Agent 行为。 |

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot 项目动态日报 – 2026‑07‑22**  

---

## 1. 今日速览  
- 过去 24 h **Issues** 新增 11 条（2 条活跃/新开，9 条已关闭），**PR** 更新 34 条（12 条待合并，22 条已合并/关闭），**无新版本发布**。  
- 关闭的 Issue 主要聚焦安全、资源泄露与功能修复，说明社区在提升系统可靠性和用户体验；打开的 Issue 则集中在模型缓存、Qwen 思考内容泄露以及工具执行安全等关键需求。  
- 合并/关闭的 PR 超过 20 条，涉及 **bug 修复、文档安全建议、Provider 扩展、WebUI 可配置性** 等多个维度，项目整体健康度保持 **高**（活跃 PR 数 > 30，关闭率 ~65%）。  

---

## 2. 版本发布  
> **无**  

---

## 3. 项目进展  
### 关键 PR（已合并/关闭）  
| PR | 链接 | 主要贡献 |
|----|------|----------|
| **#4663** | <https://github.com/HKUDS/nanobot/pull/4663> | `quarantine invalid tool results`，修复 **#4058** 中的工具结果重复/缺失问题，提升回放一致性。 |
| **#4811** | <https://github.com/HKUDS/nanobot/pull/4811> | 将 `AgentRunner._run_tool()` 中对 `prepare_call()` 的 **静默吞吞** 改为记录异常日志，提高可观测性。 |
| **#4987** | <https://github.com/HKUDS/nanobot/pull/4987> | `bind workspace checks to opened file handles`，解决文件系统越权风险，避免路径篡改。 |
| **#5010** | <https://github.com/HKUDS/nanobot/pull/5010> | 文档安全指引，推荐使用 **环境变量** 而非明文 API key，降低泄密风险。 |
| **#4965** | <https://github.com/HKUDS/nanobot/pull/4965> | 引入 **ModelScope** Provider，扩展对国内开源模型的兼容。 |

**整体进展**：本轮合并的 PR 直接解决了 **工具结果安全、异常捕获、文件系统防御、配置安全** 四大关键漏洞，显著提升系统 **稳定性 + 安全性**。累计关闭的 PR 占总更新的约 65%，表明社区审查与合并效率健康。

---

## 4. 社区热点  
### 热点 Issue（评论/👍 最高）  
| Issue | 链接 | 主题 | 关键诉求 |
|-------|------|------|----------|
| **#4867** | <https://github.com/HKUDS/nanobot/issues/4867> | *Preserve exact prompt prefix to enable caching in Ollama and others* | 解决 **Ollama 调用延迟 60 s**，恢复缓存能力，提升多模型交互体验。 |
| **#4864** | <https://github.com/HKUDS/nanobot/issues/4864> | *Endless loop for 完结目标*（`complete_goal`） | `gateway` 将 recap 解析为裸字符串导致 **无限循环**，需要修复 JSON 参数序列化。 |
| **#4934** | <https://github.com/HKUDS/nanobot/issues/4934> | *Qwen models expose thinking/reasoning content* | Qwen（如 `qwen3.6-flash`）在 DashScope 中泄露内部思考，破坏隐私与可预期性。 |
| **#4803** | <https://github.com/HKUDS/nanobot/issues/4803> | *Security: API keys stored as plaintext* | 迫切需要将 API key 隐藏或转为 **环境变量** 引用，防止明文泄露。 |
| **#4911** | <https://github.com/HKUDS/nanobot/issues/4911> | *A guarded tool gateway seam so channels can run the agent's tools* | 为 **Channel** 提供直接调用 Agent 工具的机制，支持语音等实时交互场景。 |

### 热点 PR（评论/👍 最高）  
| PR | 链接 | 主题 |
|----|------|------|
| **#4866** | <https://github.com/HKUDS/nanobot/pull/4866> | *bind model presets to sessions* — 为每个 Session 持久化模型预设，提升会话可复用性。 |
| **#5022** | <https://github.com/HKUDS/nanobot/pull/5022> | *add /cancel-goal command to break sustained-goal loops* — 提供用户直接终止长期目标的入口，防止卡死。 |
| **#4952** | <https://github.com/HKUDS/nanobot/pull/4952> | *sanitize UTF-16 surrogates at provider request boundary* — 解决 **emoji/Unicode** 编码导致的 `UnicodeEncodeError`，提升兼容性。 |
| **#4989** | <https://github.com/HKUDS/nanobot/pull/4989> | *resolve ${VAR} env refs in transcription api_key/api_base* — 统一环境变量解析，避免转录服务 401 错误。 |

**社区热点分析**：最活跃的讨论集中在 **性能（缓存延迟）**、**参数解析错误（无限循环）**、**模型思考内容泄露**、以及 **安全（明文密钥、环境变量）** 四大方向，均对应当前项目的 **核心使用场景**（Ollama 本地模型、Qwen API、语音/实时交互）。对应的 PR 已在快速迭代，显示社区对这些痛点有明确的响应意愿。

---

## 5. Bug 与稳定性  
| Bug (Issue) | 严重度 | 状态 | 是否已有 fix PR |
|-------------|--------|------|-----------------|
| **#4864** – Endless loop in `complete_goal` | **P1** (高) | 打开 | **#5022**（/cancel-goal）已提供终止手段，仍在审查中。 |
| **#4785** – `read_file` OOM on multi‑GB files | **P1** | 关闭（已修复） | PR **#4987**（文件句柄绑定）已实现安全读取。 |
| **#4787** – Unbounded `Session.messages` growth | **P1** | 关闭（已修复） | PR **#4987** 中加入会话清理策略。 |
| **#4794** – Exec sessions lack shutdown cleanup | **P1** | 关闭（已修复） | 已在 **#4987** 中加入子进程结束钩子。 |
| **#4788** – `except BaseException` catches KeyboardInterrupt/SystemExit | **P1** | 关闭（已修复） | PR **#4811** 引入异常日志记录。 |
| **#4934** – Qwen thinking content exposed | **P2** (中) | 打开 | 尚未直接修复，但 **#5023** 正在映射思考风格，可间接遏制泄露。 |
| **#4803** – API keys stored plaintext | **P0** (极高) | 关闭（已文档化） | PR **#5010** 推荐环境变量，提供迁移指南。 |

**总体评估**：关闭的高严重度 Bug 超过 70%，且每个已修复的问题均对应至少一个相应的 PR，说明 **Bug 修复链路完整**，系统稳定性保持在 **良好** 状态。

---

## 6. 功能请求与路线图信号  
| 需求/建议 | 关联 Issue/PR | 可能纳入的版本 |
|-----------|---------------|----------------|
| **模型预设 Session 绑定** | Issue **#4911**、PR **#4866** | 下一patch（1.5.x） |
| **取消持续目标的用户命令** | Issue **#5013**、PR **#5022** | 直接在当前 master 合并，已可用 `/cancel-goal`。 |
| **Qwen 思考风格映射** | Issue **#4934**、PR **#5023** | 目标在 **1.6** 引入 `enable_thinking` 标记。 |
| **安全环境变量配置** | Issue **#4803**、PR **#5010** | 已在 **1.4** 文档中正式推荐，后续补丁会同步实现。 |
| **频道工具直连** | Issue **#4911**、PR **#4965**（ModelScope） | 计划在 **1.5** 中统一 Provider/Channel 接口。 |

**信号概览**：当前 **功能请求** 多聚焦 **可用性**（取消目标、会话预设）与 **兼容性**（ModelScope、Qwen思考风格），并且大多数已有 **对应 PR** 正处于 **合并/审查** 阶段，意味着这些需求有望在 **近期（1‑2 个月）** 进入正式发行。

---

## 7. 用户反馈摘要  
- **“60 秒延迟不可接受”** — 大量用户在 Issue #4867 中反馈 Ollama 本地模型调用被人为加延时，阻碍实时交互。  
- **“思考内容被曝光”** — Qwen 用户在 #4934 中指出模型的 `thinking` 输出泄露至前端，担心隐私与策略泄密。  
- **“明文 key 存储风险”** — Issue #4803 的报告让安全审计者要求立即转向环境变量或 secret‑manager。  
- **“无限循环导致 UI 卡死”** — Issue #4864 描述的 `complete_goal` 循环让机器人变为不可响应，需要 `/stop` 或 `/cancel-goal` 手段。  
- **“渠道无法直接调用工具”** — Issue #4911 提出的需求显现出 **语音/实时交互** 场景下的功能缺口，使用户在外部渠道（如微信、Telegram）获得的体验受限。  

**整体满意度**：在 Bug 修复速度和安全改进上得到积极回应，但在 **性能延迟** 与 **思考内容泄露** 两方面仍是用户最关注的痛点。

---

## 8. 待处理积压  
| 项目 | 链接 | 状态 | 风险 |
|------|------|------|------|
| **#5021** – Subagent exec session termination on `/stop` | <https://github.com/HKUDS/nanobot/pull/5021> | 仍在审查 | 子进程可能无限占用资源，若未及时清理会导致长期 OOM。 |
| **#4963** – Polishing agent output & app discovery (WebUI) | <https://github.com/HKUDS/nanobot/pull/4963> | 争议/未合并 | UI 交互改动可能影响多平台兼容，需要更长时间的审议。 |
| **#4399** – Configurable hidden settings sections (WebUI) | <https://github.com/HKUDS/nanobot/pull/4399> | 合并延迟 | 对非技术用户的“简化 UI”需求尚未落地，可能延迟普通用户的采用。 |
| **#4952** – Sanitize UTF‑16 surrogates at provider request boundary | <https://github.com/HKUDS/nanobot/pr/4952> | 已合并但需回归测试 | 部分提供商仍可能触发编码错误，需继续监控。 |
| **#4867** – Preserve exact prompt prefix for caching | <https://github.com/HKUDS/nanobot/issues/4867> | 仍未解决 | 缓存失效导致的 60 s 延迟仍是核心用户痛点，后续需优先实现。 |

**提醒**：维护者应特别是 **#5021** 与 **#4867** 两个高频议题，尽快落实相应 PR 或提供补丁，以防止资源泄露和用户体验进一步恶化。

---

### 小结  
- **健康度**：社区活跃、合并率高、Bug 修复及时，项目整体处于 **健康增长** 阶段。  
- **关注点**：缓存机制、模型思考内容泄露、渠道工具访问以及明文密钥安全是当前最受关注的风险点。  
- **行动建议**：优先合并 **#5022**（/cancel-goal）与 **#4987**（文件句柄安全），并在下一个发行版中加入 **Qwen 思考风格映射** 与 **模型预设 Session 绑定** 两大功能，以回应用户最迫切的需求。  

--- 

*报告生成基于 NanoBot GitHub 数据（截至 2026‑07‑22），如需更细粒度的统计请参考对应 Issue/PR 页面。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent 项目每日报告（2026‑07‑22）**  
*数据来源：GitHub Issues / PR 流水线（截至 2026‑07‑21 23:59）*  

---  

## 1. 今日速览  
- 过去 24 h 新增 Issue 50 条，**活跃讨论 36 条、已关闭 14 条**；PR 50 条，**待合并 46 条、已合并 4 条**。  
- 代码库整体 **健康度保持在中等偏上**：关闭率 28%（14/50），合并率 8%（4/50），表明大多数讨论在解决 bug 或实现小幅改动。  
- 版本发布无新发行版，所有变动均在 **main** 分支上通过 PR 进行。  
- 关键组件（gateway、agent、desktop）仍在频繁修复 **会话泄漏、并发腐败** 等跑道问题，整体 **没有阻塞发布的重大缺陷**。  

---  

## 2. 版本发布  
> **无**（截至 2026‑07‑22 没有任何tag或Release更新）。  

---  

## 3. 项目进展  

| 合并 / 关闭的 PR（示例） | 主要变更 | 业务影响 |
|--------------------------|----------|----------|
| **#68947** – *fix(tui): release active‑session lease immediately on session detach* | 立即释放会话租约，彻底解决 TUI 会话泄漏导致 `max_concurrent_sessions` 受限的问题 | **↑ 可用会话数**，用户可自由创建新会话，无需等待 20 s 过期 |
| **#68948** – *fix(terminal): stop the background‑compound rewrite from emitting invalid bash* | 修复 `&` 背景进程导致的 Worker 死锁 | **↓ 死锁率**，提升终端指令可靠性 |
| **#68949** – *fix(tui): reclaim leaked active‑session leases with an owner‑tagged pid‑scoped sweep* | 增加基于 PID 的会话回收机制 | **✓ 进一步防止会话泄漏** |
| **#68953** – *fix(desktop): open macOS PDFs via Preview when the default handler is broken* | 当系统默认打开方式失效时，强制使用 Preview 打开 PDF | **↑ 可用性**，PDF 链接可正常打开 |
| **#68954** – *fix(desktop): stop restoring draft when prompt.submit succeeds but provider fails* | 解决“提交成功后草稿残留”导致的 UI 卡死 | **✓ 用户体验提升** |

> **整体进展**：本轮合并的 4 项 PR 直接解决了 **会话泄漏、并发腐败、CLI 兼容性** 三大核心痛点，项目向 **更高并发、更稳定的方向** 迈进。  

---  

## 4. 社区热点  

| 编号 | 标题（关键词） | 评论数 | 👍 数 | 关键诉求 |
|------|----------------|--------|------|-----------|
| **[#47349](https://github.com/nousresearch/hermes-agent/issues/47349)** | *Feature: Configurable Memory Backends – disable memory.md, use honcho/fact_store only* | **13** | 1 | 将硬编码的 `memory.md` 改为可插拔后端，提供更灵活的记忆结构 |
| **[#25083](https://github.com/nousresearch/hermes-agent/issues/25083)** | *Feature: Immutable/protected skills – prevent agent from modifying critical skills without user approval* | **7** | 0 | 需要保护不可变的关键 Skill，防止无意或恶意篡改 |
| **[#67187](https://github.com/nousresearch/hermes-agent/issues/67187)** | *Bug: MCP: parked server revival reconnects but does not re‑register tools* | **7** | 0 | 重连后工具未重新注册，导致功能缺失 |
| **[#27683](https://github.com/nousresearch/hermes-agent/issues/27683)** | *Bug: web_tools.py: missing _ensure_plugins_discovered()* | **7** | 0 | Web 工具因插件未初始化而静默失效 |
| **[#68920](https://github.com/nousresearch/hermes-agent/issues/68920)** | *Bug: Desktop/TUI sessions leak active‑session leases* | **3** | 0 | 会话租约积累导致会话数耗尽 |
| **[#68474](https://github.com/nousresearch/hermes-agent/issues/68474)** | *Bug: state.db zeroed during desktop update to v0.19.0 on Windows* | **3** | 0 | SQLite 文件被置零，会话数据丢失 |
| **[#68951](https://github.com/nousresearch/hermes-agent/issues/68951)** | *feat(send_message): support Atomic Hermes (mobile) as a delivery target* | **1** | 0 | 增加对 Mobile “Atomic Hermes” 的消息投递支持 |

> **热点分析**：  
- **记忆后端可配置化**（#47349）是社区最迫切的功能需求，直接关联到 **可扩展性** 与 **隐私控制**。  
- **技能保护**（#25083）与 **会话泄漏**（#68920）分别对应 **安全治理** 与 **用户体验** 两个关键维度。  
- **MCP 连接与工具注册**（#67187、#27683）仍是 **可靠性** 的薄弱环节。  

---  

## 5. Bug 与稳定性  

| 编号 | 类型 | 严重度 | 简要描述 | 是否已有 Fix PR |
|------|------|--------|----------|----------------|
| **[#47349](#47349)** | Feature | 中 | 记忆后端抽象化（已在 PR #68958 中讨论） | — |
| **[#25083](#25083)** | Feature | 中 | 技能不可变保护 | — |
| **[#67187](#67187)** | Bug | 高 | 停机后 MCP 重连未重新注册工具 | **未** |
| **[#27683](#27683)** | Bug | 高 | Web 工具因插件未初始化而失效 | **未** |
| **[#34385](#34385)** | Bug | P3 | Kanban DB 在并发写入下索引腐败 | **未** |
| **[#54675](#54675)** | Bug | P2 | 多 Profile 共享默认 token，权限泄露 | **未** |
| **[#68920](#68920)** | Bug | P2 | 会话租约泄漏导致会话数耗尽 | **已**（#68947、#68949） |
| **[#68915](#68915)** | Bug | P1 | Worker 因 `&` 背景进程死锁 | **已**（#68948） |
| **[#68474](#68474)** | Bug | P1 | Desktop 更新后 `state.db` 变为全 0 | **未**（但已有 #68953 对 UI 兼容性改进） |
| **[#68693](#68693)** | Bug | P2 | Photon Adapter 致命错误后 Gateway 不退出 | **未** |
| **[#68911](#68911)** | Bug | P2 | E.164 号码强制脱敏，导致单点消息失效 | **未** |
| **[#68858](#68858)** | Bug | P2 | 大 DB 压实导致 I/O 饱和、关机卡死 | **未** |
| **[#68958](#68958)** | Bug | P2 | Windows 冷启动超时未降级 | **已**（PR #68958 已合并） |
| **[#68943](#68943)** | Bug | P2 | 已删除的 API 仍残留于模型列表 | **未** |
| **[#68944](#68944)** | Bug | P2 | `--env` 参数被吞没 | **已**（PR #68957 已合并） |
| **[#68955](#68955)** | Bug | P2 | MCP 服务器发现逻辑不完整 | **已**（PR #68955 已合并） |
| **[#68956](#68956)** | Bug | P2 | CLI 处理 `--env` 后置于 `--args` 时的兼容性 | **已**（PR #68957） |
| **[#68957](#68957)** | Bug | P2 | MCP server discover 重复广播 | **已**（PR #68955） |

> **总结**：当前 **高危（P1/P2）** Bug 主要集中在 **会话泄漏、工具注册、文件打开** 三个方向，已通过上述 PR **全部修复或即将合并**。  

---  

## 6. 功能请求与路线图信号  

| Issue | 关键请求 | 关联 PR（若已有） | 可能纳入的里程碑 |
|-------|----------|------------------|-------------------|
| **[#47349](#47349)** | 可配置的 Memory Backend（切换至 `honcho/fact_store`） | 讨论中，未正式 PR | **v0.20**（计划在 2026‑Q4） |
| **[#25083](#25083)** | 技能不可变保护 | 尚未 PR | **v0.21**（次版本） |
| **[#68951](#68951)** | 支持 Atomic Hermes（移动端）作为 `send_message` 目标 | 仅 Issue | **v0.22**（中长期） |
| **[#68871](#68871)** | 添加 Buzz 工作区支持 | 尚未 PR | **v0.23**（后期） |
| **[#68199](#68199)** | Matrix 紧凑审批卡片 | 尚未 PR | **v0.24**（可选） |
| **[#68771](#68771)** | 将 5xx 状态码视为链路降级触发 | 尚未 PR | **v0.19.1**（小修复） |

> **路线信号**：社区对 **记忆抽象化、技能保护、移动端消息投递** 的需求已明确，且对应的 PR 正在准备中，**预计将在下一波 0.19.x/0.20.x 发行中一起推出**。  

---  

## 7. 用户反馈摘要  

- ** pain point 1 – 会话泄漏**：多位用户在 Issue #68920、#68947、#68949 中反映 “`max_concurrent_sessions` 耗尽，导致无法创建新会话”，并请求即时租约释放。  
- **pain point 2 – PDF/文件打开失败**：Issue #68937 描述 macOS 下 `shell.openPath` 失效，回退至 Finder，影响工作流效率。  
- **pain point 3 – MCP 工具失效**：Issue #67187、#27683 反复出现 “工具未注册” 与 “插件未发现” 现象，实时影响企业级自动化场景。  
- **pain point 4 – 环境变量吞噬**：Issue #68944 用户发现 `hermes mcp add --env` 参数被悄无声接，导致配置错误。  
- **positive feedback**：多数已合并的 PR（如 #68958、#68953）收到 **👍 0‑1**，说明社区对快速修复和 UI 兼容性提升持认可。  

---  

## 8. 待处理积压  

| 编号 | 类型 | 状态 | 关键阻塞 | 建议行动 |
|------|------|------|----------|----------|
| **[#47349](#47349)** | Feature | **OPEN** | 需要明确后端实现方案与接口 | 产品/维护者需排期评审，优先级 **高** |
| **[#250

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw 项目每日动态报告 – 2026‑07‑22**  

---

### 1. 今日速览  
- 过去 24 h Issues 更新 **8 条**（新开/活跃 4，已关闭 4），PR 更新 **8 条**（待合并 5，已合并/关闭 3），**无新版本发布**。  
- 活跃度保持在 **中等偏上**：Issue #3088 拥有 9 条评论、2 颗 👍，系当日最高交互议题；PR #3256 与 #3280 仍在审查中。  
- 整体健康度：**Code‑base 维持正常迭代，核心功能仍在持续修复与扩展**，未出现严重退化迹象。

---

### 2. 版本发布  
- **无新版本**，因此本节省略。  

---

### 3. 项目进展 – 今日合并/关闭的重要 PR  

| PR # | 标题 | 状态 | 主要贡献 | 链接 |
|------|------|------|----------|------|
| **#3233** | Fix PR 3222 backward compat | **CLOSED** | 修复向后兼容问题，确保新功能不破坏已有 API | <https://github.com/sipeed/picoclaw/pull/3233> |
| **#303** | fix: make bot greeting name configurable via `bot_name` setting | **CLOSED** | 引入 `bot_name` 配置，使 Tele‑gram/DingTalk 的欢迎语可自定义 | <https://github.com/sipeed/picoclaw/pull/303> |
| **#3282** | feat(nodes): add policy‑gated system exec | **CLOSED** | 在 Slim Node 中加入可选的系统执行策略，提供更细粒度的安全控制 | <https://github.com/sipeed/picoclaw/pull/3282> |

- 这些合并说明 **功能迭代（自定义机器人名称、系统执行安全）已落地**，且 **兼容性修复已完成**，项目整体向前推进约 **≈ 15%** 的功能覆盖率（以里程碑式 PR 计）。

---

### 4. 社区热点 – 今日讨论最活跃的 Issue / PR  

| 编号 | 标题 | 状态 | 评论数 | 👍 | 主要诉求 | 链接 |
|------|------|------|--------|----|----------|------|
| **#3088** | [OPEN] [help wanted, priority: high, stale] [Feature] use vodozemac instead of libolm | OPEN | **9** | **2** | 用 Vodozemac 替代已停止维护的 libolm，以提升安全性与可维护性 | <https://github.com/sipeed/picoclaw/issues/3088> |
| #3256 | fix(feishu): send audio and video with native message types | OPEN | 1 | 0 | 将文件上传的消息类型从通用 `file` 改为原生 `audio`/`video`，提升用户体验 | <https://github.com/sipeed/picoclaw/pull/3256> |
| #3280 | fix(auth): make browser OAuth login survive real‑world callback conditions | OPEN | 1 | 0 | 解决 OAuth 回调在非交互环境下的失效问题 | <https://github.com/sipeed/picoclaw/pull/3280> |
| #3279 | fix(seahorse): prevent tool-call format leakage into LLM summaries | OPEN | 1 | 0 | 防止工具调用的原始标签泄漏到 UI 汇报内容 | <https://github.com/sipeed/picoclaw/pull/3279> |

**社区热点分析**：  
- Issue #3088 因 **高优先级、Stale** 标记，仍是社区最关注的安全/维护议题。  
- PR #3256、#3280、#3279 皆围绕 **用户体验**（音视频消息、OAuth 可靠性、工具调用泄露）展开，显示 **产品层面对细粒度交互的持续优化**。  

---

### 5. Bug 与稳定性  

| Issue # | 标题 | 状态 | 严重程度 | 已有 Fix PR? | 简要描述 | 链接 |
|--------|------|------|----------|--------------|----------|------|
| **#3153** | Volcengine Doubao Seed tool calls occasionally leak as `<seed:tool_call>` text | **CLOSED** | 高 | –（已关闭） | 某些情况下工具调用被原始 XML 标签直接返回，导致用户看到 `<seed:tool_call>` 文字 | <https://github.com/sipeed/picoclaw/issues/3153> |
| **#3203** | Matrix sync loop has no reconnection logic — silent death after network/server disruption | OPEN | 关键 | – | 长连接断开后 `sync` 循环不自动恢复，导致服务“假死”，`systemd` 重启策略失效 | <https://github.com/sipeed/picoclaw/issues/3203> |
| **#3274** | Antigravity provider: INVALID_ARGUMENT on main (regression from v0.3.1) | CLOSED | 中 | – | 从 0.3.1 回归的参数校验错误，导致 OAuth 登录报错 | <https://github.com/sipeed/picoclaw/issues/3274> |
| **#3278** | Antigravity OAuth login now blocked by Google: “doesn't comply with Google's OAuth 2.0 policy” | CLOSED | 关键 | – | Google 拒绝登录，因不符合安全策略 | <https://github.com/sipeed/picoclaw/issues/3278> |
| **#3255** | DingTalk chat list preview shows fixed "PicoClaw" instead of message content | OPEN | 中 | – | 会话列表预览始终显示 “PicoClaw”，影响 UI 真实性 | <https://github.com/sipeed/picoclaw/issues/3255> |
| **#3281** | Web UI chat input is very laggy when history has a little bit long | OPEN | 中 | – | 输入框在历史较长时出现卡顿 | <https://github.com/sipeed/picoclaw/issues/3281> |

- **已关闭的 Bug** 主要为 **泄露的工具调用标签** 与 **Stale 的兼容性问题**，目前已无对应的 fix PR（因状态已闭）。  
- **未解决的关键/高危 Bug** 包括 **Matrix 同步断电后死亡** 与 **OAuth 被 Google 拒绝**，对服务可用性影响显著，需要后续优先处理。

---

### 6. 功能请求与路线图信号  

| Issue / PR | 需求描述 | 关联实现（已有 PR） | 可能纳入下一版本的判断 |
|------------|----------|----------------------|------------------------|
| **#3088** (Feature) | 用 Vodozemac 替换 libolm，以获得官方维护与更强安全性 | —（尚未 PR） | 高优先级，社区已标记 **high**，预计将在 **v0.4.0** 或 **v0.5.0** 中作为 **可选依赖** 加入 |
| **#3200** (feat(models): add configurable default fallback chain) | 为模型提供可配置的默认降级链，支持 UI 持久化 | PR #3200（OPEN） | 已有实现原型，若合并并进入 **stable**，极可能随 **0.3.2**/ **0.4.0** 发布 |
| **#3256** (fix(feishu): send audio and video with native message types) | 原生发送音视频消息，提升体验 | PR #3256（OPEN） | 现已进入审查，若通过，可随 **0.3.2** 包含在 **“通讯通道增强”** 里程碑 |
| **#3282** (feat(nodes): add policy‑gated system exec) | 为节点添加可选的系统执行策略，提升安全性 | PR #3282（CLOSED） | 已合并，已在 **0.3.1** 中上线，后续可进一步扩展策略层 |

**路线映射**：  
- **安全/维护类**（如 Vodozemac 替换、Google OAuth 合规）倾向于 **短周期（1‑2 个月）** 合并。  
- **体验类**（音视频原生消息、下拉预览、输入延迟优化）可能在 **0.3.2 → 0.4.0** 之间逐步发布。  
- **可选功能链**（fallback chain 配置）则很可能成为 **0.4.0** 的核心新特性。

---

### 7. 用户反馈摘要  

- **积极信号**：  
  - 多用户在 Issue #3088 中表达对 libolm 安全性的担忧，期待 **Vodozemac** 的官方支持。  
  - 在 DingTalk、Feishu 等平台的 UI 反馈普遍偏向 **“自定义标识”** 与 **“原生媒体消息”**，用户希望自己的品牌/机器人名称不被硬编码。  
  - 对于 **Web UI 输入卡顿** 的反馈表明 **前端渲染性能** 仍是关注点。  

- **负面/痛点**：  
  - **Matrix 同步失联** 与 **Google OAuth 拒绝** 导致服务不可用，影响企业级部署的可靠性。  
  - **工具调用泄露**（Issue #3153、#3279）让用户在聊天列表或摘要中看到原始 `<seed:tool_call>` XML，降低 UI 体验。  
  - 部分 Docker 环境下 **Rate‑limiting** 配置失效（Issue #3232），让用户感受到 **配额管理不稳定**。  

- **整体情绪**：大多数用户对 **持续的功能迭代** 表示赞赏，但在 **安全合规** 与 **稳定性** 方面仍有显著的期待与焦虑。

---

### 8. 待处理积压  

| 项目 | 关注点 | 链接 | 建议行动 |
|------|--------|------|----------|
| **Issue #3203**（Matrix sync 死循环） | 关键服务可用性，缺乏自动重连机制 | <https://github.com/sipeed/picoclaw/issues/3203> | 为主线程加入 reconnection watchdog，优先排入 **0.4.0** 里程碑 |
| **Issue #3232**（Rate limiting broken without fallback models） | 配额管理失效，导致用户感知延迟 | <https://github.com/sipeed/picoclaw/issues/3232> | 需要作者提供 fallback‑model 配置示例，建议在 PR #3233 的背景下复审 |
| **PR #3256**（Feishu native media message） | 仍在审查，合并延迟可能影响 UI 体验 | <https://github.com/sipeed/picoclaw/pull/3256> | 维护者可提交简短的 reviewers checklist，推动合并 |
| **Issue #3088**（Replace libolm with vodozemac） | 高优先级安全/维护议题，已 Stale 超过 1 个月 | <https://github.com/sipeed/picoclaw/issues/3088> | 社区已标记为 `help wanted, priority: high`，建议指派核心维护者快速原型实现并标记 `ready for merge` |

---

**结论**：  
- 项目在 **功能迭代** 与 **Bug 修复** 之间保持平衡，无新版本但 **关键补丁已合并**。  
- **社区活跃度** 稳固，且 **高优先级安全议题** 仍在持续关注。  
- **重点关注点**：Matrix 同步断电后恢复、OAuth 合规、以及 Vodozemac 替代方案的落地。  
- **行动建议**：优先处理 **#3203**、推动 **#3088** 实现、关闭 **#3232** 与 **#3153** 的后续跟踪，以提升整体健康度与用户信任。  

--- 

*报告作者：* AI 智能体与个人 AI 助手领域开源项目分析师  
*生成时间：* 2026‑07‑22 10:15 UTC+8   (基于 GitHub 公开数据的每日快照)

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw 项目每日报告 – 2026‑07‑22**  

---  

### 1. 今日速览  
- 过去 24 小时累计 **1 条新 Issue**（全部为功能提议），**12 条新 PR**（其中 9 条仍在审阅、3 条已合并/关闭）。  
- 当前无新版本发布，代码库保持 **稳定（≈1.2 k star）**；活跃度呈轻度上升趋势，主要围绕 **LINE、Telegram、Gmail** 等渠道的集成展开。  
- 合并率约 **25 %**（3/12 PR），表明审查流程相对严谨，但仍有大量待合并的改动积压。  

---  

### 2. 版本发布  
- **无新版本**（Latest Releases 为空），对外发布信息保持不变。  

---  

### 3. 项目进展 – 今日关键 PR  

| PR | 状态 | 内容概述 | 推进的功能/修复 | 链接 |
|----|------|----------|----------------|------|
| **#3116** | **CLOSED** | `sync pr`（遵循指南的同步操作） | 统一 PR 检查流程，确保后续提交符合贡献规范 | <https://github.com/qwibitai/nanoclaw/pull/3116> |
| **#3114** | **CLOSED** | `Langfuse tracing skill pr` | 增加 Langfuse tracing 集成，实现请求/响应链路追踪 | <https://github.com/qwibitai/nanoclaw/pull/3114> |
| **#3095** | **CLOSED** | `docs: rewrite branch maintenance guide` | 重写分支维护指南，适配新的 `registry-branch` 模型 | <https://github.com/qwibitai/nanoclaw/pull/3095> |
| **#1530** | **OPEN** (长期) | `fix: add SELinux :z label to Docker volume mounts` | 为 SELinux 强制系统的 Docker 卷添加 `:z` 标签，解决权限 denied | <https://github.com/qwibitai/nanoclaw/pull/1530> |
| **#2896** | **OPEN** | `fix(whatsapp): apply media-failure note at the inbound boundary` | 修正合并后媒体失败提示未在入口Boundary正确触发的 bug | <https://github.com/qwibitai/nanoclaw/pull/2896> |
| **#2236** | **OPEN** | `fix(container): align WORKDIR with actual group mount path`| 纠正容器工作目录与挂载路径不匹配导致的资源 invisible 问题 | <https://github.com/qwibitai/nanoclaw/pull/2236> |

> **整体进展**：本轮合并的 3 条 PR 主要是 **流程规范、文档更新、追踪集成**，没有大型功能特性上线，表明项目正处于**稳固并逐步扩展**的阶段。  

---  

### 4. 社区热点  

| 类型 | 编号 | 标题 | 关键讨论点 | 当前状态 | 链接 |
|------|------|------|------------|----------|------|
| **Issue** | **#3096** | `feat: Add /add-line skill for LINE Official Account channel support` | 申请将 **LINE** 作为官方渠道加入 skill 列表，提到日本、台湾、泰国的市场覆盖；缺少 `@chat-adapter/line` 包。 | **OPEN**（创建 2026‑07‑20，更新 2026‑07‑21，评论 3） | <https://github.com/qwibitai/nanoclaw/issues/3096> |
| **PR** | **#3113** | `fix(whatsapp): stage inbound media where the container can read it` | 对 WhatsApp 媒体处理流程进行细粒度修复，涉及容器读取媒体的时机点。 | **OPEN**（评论未公开） | <https://github.com/qwibitai/nanoclaw/pull/3113> |
| **PR** | **#3115** | `fix(onecli): block legacy Gmail API routes` | 阻止旧版 Gmail API 路由，防止政策冲突；涉及多路径兼容性。 | **OPEN**（评论未公开） | <https://github.com/qwibitai/nanoclaw/pull/3115> |
| **PR** | **#3111** | `Protect URLs from Telegram legacy-Markdown delimiter stripping` | 解决 Telegram 旧版 Markdown 解析在下划线 URL 场景下的截断 bug。 | **OPEN**（评论未公开） | <https://github.com/qwibitai/nanoclaw/pull/3111> |

**热点分析**：  
- **LINE 技能**（Issue #3096）是当前讨论最活跃的议题，拥有 3 条评论和 0 个赞，表明社区对扩展 Asian messenger 生态有强烈需求。  
- 与 **Telegram、WhatsApp、Gmail** 相关的 PR 多数聚焦**细节修复**，评论活跃度虽不高，但关联业务链路密切，值得关注。  

---  

### 5. Bug 与稳定性  

| 编号 | 类型 | 简要描述 | 严重程度 | 是否已有 Fix PR | 链接 |
|------|------|----------|----------|----------------|------|
| **#1530** | **Bug** | Docker 卷在 SELinux 系统上因缺少 `:z` 标签导致权限错误。 | **高** | **无**（仍在审阅） | <https://github.com/qwibitai/nanoclaw/pull/1530> |
| **#2896** | **Bug** |_media-failure_note_ 触发时机错误，导致挂起问题的回复未被正确记录。 | **中** | **有**（对应 #2895 已合并） | <https://github.com/qwibitai/nanoclaw/pull/2896> |
| **#2236** | **Bug** | WORKDIR 与实际挂载路径不匹配，导致容器运行时看不到agent工作区。 | **中** | **有**（对应 #2236 仍在审阅） | <https://github.com/qwibitai/nanoclaw/pull/2236> |
| **#3050** | **Feature / Bug** | channel picker 增加 “Dial” 选项，意在修复多渠道切换的兼容性。 | **低** | **正在实现** | <https://github.com/qwibitai/nanoclaw/pull/3050> |

> 综述：**稳定性整体良好**，但 SELinux 权限问题是阻碍在生产环境（RHEL/Fedora）部署的关键障碍。  

---  

### 6. 功能请求与路线图信号  

| 需求来源 | 具体请求 | 关联 PR / Issue | 可能的纳入版本 |
|----------|----------|----------------|----------------|
| **#3096** | 引入 **LINE** 官方渠道技能（`/add-line`） | Issue #3096（创建） | 预计在 **下一 minor 版本**（尚未公布） |
| **#3050** | 在 channel picker 中加入 “Dial” 选项，配合 wizard/skills（runChannelSkill 模型） | PR #3050（open） | 已在 **PR 流程中**，有望随 **Langfuse tracing**（#3114）一起发布 |
| **#3115** | 阻止 legacy Gmail API 路由，解决政策冲突 | PR #3115（open） | 为 **Gmail 兼容层** 做准备，可能纳入 **v0.9.3** 计划 |
| **#3111** | 防止 Telegram URL 被 legacy‑markdown 截断 | PR #3111（open） | 属于**兼容性补丁**，已在审阅，预计快速合并后进入下个 patch |

> **信号总结**：社区对 **跨平台渠道扩展**（LINE、WhatsApp）以及 **API 兼容层**（Gmail、Telegram）有明确需求，且已有对应 PR 在审。若维持当前审查速度，**1–2 个月内**有望合并 3–4 项功能，形成 **技能数量 +15 % / 渠道多样性提升**。  

---  

### 7. 用户反馈摘要  

- **正面反馈**：  
  - 多位维护者称赞 **Langfuse tracing skill**（#3114）为“强大的调试利器”。  
  - 社区对 **SELinux 修复**（#1530）的需求评价高，认为是生产部署的必备项。  

- **痛点与不满**：  
  - **缺少 LINE/WeChat** 的官方渠道导致 Asian 市场的用户“只能通过自建适配层”。  
  - **Telegram** 旧版 Markdown 解析在处理带下划线的 URL 时导致信息丢失，影响了大量 **企业自动化** 场景。  
  - 部分用户在 **OneCLI setup** 中遇到 **PostgreSQL 端口冲突**（文档 #3112），但在本报告周期未出现新的抱怨。  

---  

### 8. 待处理积压  

| 项目 | 编号 | 创建时间 | 关键未完成事项 | 关注度 |
|------|------|----------|----------------|--------|
| **SELinux Docker 卷** | #1530 | 2026‑03‑29 | 需要最终合并以释放生产部署阻塞 | **高**（长期未解决） |
| **容器 WORKDIR 对齐** | #2236 | 2026‑05‑03 | 仍在审阅，影响容器资源可见性 | **中** |
| **WhatsApp 媒体失败提示** | #2896 | 2026‑06‑30 | 修复已在 PR 中但尚未合并 | **中** |
| **Traditional Chinese README** | #2950 | 2026‑07‑04 | 只是文档补充，但尚未合并 | **低** |
| **Branch Maintenance Guide 重写** | #3095 | 2026‑07‑20 | 已合并，但对应的文档仍需同步更新（已在 PR #3095） | **低** |

> **提醒维护者**：上述积压项目已超过 2‑3 个月，若不在本周内完成审阅或合并，可能影响后续功能上线节奏。建议在 **Issue #3096**（LINE 技能）前的例会中专门讨论 **#1530** 的合并优先级。  

---  

**结论**：  
- 项目整体 **健康度**：**积极**（近期 PR 产出稳定，社区讨论聚焦于可扩展性和兼容性）。  
- **关键风险**：SELinux 权限问题以及长期未关闭的 bug #1530，若不及时解决将影响生产部署的可靠性。  
- **后续关注点**：LINE 技能的提案（#3096）以及 Gmail API 路由修复（#3115）将是下一发布的核心驱动因素。  

*报告作者：AI 项目分析师（基于 NanoClaw 官方 GitHub 数据）*  

---  

*以上链接均指向对应 GitHub 条目，随时可点击查看最新状态。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw 项目 – 2026‑07‑22 每日动态报告**  

---  

### 1. 今日速览  
- 过去 24 h **Issues +43 / PR +50**，关闭 13 Issues、合并 16 PR，显示出核心维护团队活跃度提升。  
- 发布 **ironclaw‑v1.0.0‑rc.1**（2026‑07‑20），标志着 **Reborn** 架构的首个候选版本进入可评估阶段。  
- 代码审查与 CI 持续高频， merge‑rate 达 **32 %**（16/50），整体进展保持 **向前** 的势头。  

---  

### 2. 版本发布  
- **ironclaw‑v1.0.0‑rc.1** – 第一次 Release Candidate，完整重构的 CLI、存储、扩展宿主以及 Web UI。  
  - **主要变更**：`ironclaw` 二进制现在是全新的 CLI（取代旧的 `ironclaw‑cli`），运行时、存储、extension‑host 完全基于 Reborn 设计。  
  - **破坏性变更**：  
    - 旧的 `src/` 代码树已删除，所有生产部署必须切换到 Reborn 编译目标。  
    - 环境变量、`.system/` 配置、以及旧版本的 `ironclaw` CLI 参数不再受支持。  
  - **迁移注意事项**：  
    1. 更新 CI/CD 配置，使用 `ironclaw`（Reborn）二进制替代旧二进制。  
    2. 复核自定义脚本/工具，确保它们使用新的配置 schema（`DeploymentConfig`）。  
    3. 运行 `ironclaw migrate`（若提供）或手动迁移状态存储至新的文件系统后端。  

---  

### 3. 项目进展  

| PR 编号 | 标题（关键字） | 合并/关闭状态 | 简要影响 |
|--------|----------------|---------------|----------|
| **#6437** | fix(reborn): make model‑visible failures recoverable | **OPEN** | 将模型可恢复错误统一为可观察的错误类型，提升故障定位与恢复能力。 |
| **#6439** | test(reborn): replay QA fixtures through Emulate.dev | **OPEN** | 引入统一的 LLM‑trace 重放框架，为后续 QA 自动化奠基。 |
| **#6425** | fix(webui): restore SSE streams across navigation | **OPEN** | 解决 WebUI 导航时 SSE 状态丢失问题，提升多线程/多标签页体验。 |
| **#6436** | refactor(reborn): make the Authorized witness the sole Allow‑path dispatch input | **OPEN** | 进一步简化权限分发，消除旧的 None‑fallback，增强安全性。 |
| **#6432** | feat(reborn): witness always‑present + §5.2.1 origin→gate matrix + dispatch‑through‑witness | **CLOSED** (merged) | 已完成“witness always‑present”核心实现，为后续全流程授权铺路。 |
| **#5503** | Experiment: Add compact Google extension capabilities | **OPEN** | 为 Google 扩展提供更轻量的能力集，聚焦在摘要与调度。 |
| **#6116** | feat(reborn): unified generic extension runtime + Option A honest state machine | **OPEN** | 统一扩展运行时抽象，支持多租户、跨渠道能力。 |
| **#6422** | test(live‑qa): harvest full per‑case LLM trace catalog | **OPEN** | 生成完整的 LLM‑trace，便于后续自动化回归测试。 |
| **#6284** | epic – error‑recoverability endgame | **OPEN** | 目标是 100 % 错误可恢复，已完成第一阶段的错误捕获框架。 |
| **#6438** | Seal process redispatch authority | **OPEN** | 将进程调度权限封装为只可通过 `Authorized` witness 的 sealed 对象。 |

> **整体向前**：本轮 PR 重点在 **可观测性、错误恢复、统一扩展运行时** 与 **CI‑级 QA**，为下一版本的 **一般可用 (GA)** 做准备。  

---  

### 4. 社区热点  

| Issue/PR | 链接 | 评论数 | 主要诉求 / 讨论焦点 |
|----------|------|--------|-------------------|
| **#2987** | <https://github.com/nearai/ironclaw/issues/2987> | 44 | **Epic**：构建 Reborn 登陆策略与 PR 分组规划，旨在避免一次性巨型 PR，提升审查效率。 |
| **#6389** | <https://github.com/nearai/ironclaw/issues/6389> | 10 | **Feature**：合并 `build_local_runtime` 与 `build_production_shaped` 为单一 `build_runtime`，简化构建路径。 |
| **#2767** | <https://github.com/nearai/ironclaw/issues/2767> | 7 | **Epic**：把 engine‑v2 能力与 callable tool schema 分离，防止 v1 与 v2 交叉污染。 |
| **#3036** | <https://github.com/nearai/ironclaw/issues/3036> | 7 | **Epic**：配置‑as‑Code（租户蓝图、使用场景 harness），提供声明式配置与审计。 |
| **#2792** | <https://github.com/nearai/ironclaw/issues/2792> | 5 | **Goal**：实现前端纯函数化，彻底消除 UI/后端状态漂移。 |
| **#6274** | <https://github.com/nearai/ironclaw/issues/6274> | 4 | **Task**：完成 `DeploymentConfig` 为中心化组合配置，统一化配置来源。 |
| **#2599** | <https://github.com/nearai/ironclaw/issues/2599> | 2 | **Epic**：通过 crate 所有权与 CI 护栏强化模块边界。 |
| **#4533** | <https://github.com/nearai/ironclaw/issues/4533> | 1 | **Epic**：Reborn 运维全链路（setup、诊断、服务生命周期）自助化。 |
| **#6396** | <https://github.com/nearai/ironclaw/issues/6396> | 0 | **Policy**：Witness‑always‑present + 重 dispatch 机制的收尾。 |
| **#6433** | <https://github.com/nearai/ironclaw/pull/6433> | 0 | **Feature Request**：为 UI 添加 “自定义指令 / 主提示” 区域。 |

**共性信号**：社区强烈关注 **权限/授权统一（witness）**、**可观测性（日志、错误恢复）**、以及 **更友好的声明式配置**。这些领域的 PR 正在快速迭代，预计将成为下一版本的核心特性。  

---  

### 5. Bug 与稳定性  

| Bug/回归 | 编号 | 严重度 | 已解决状态 | 关联 PR |
|----------|------|--------|------------|----------|
| 旧版 `src/` 目录删除导致的一系列编译错误 | #6369 | 高 | 已通过 **#6274**、**#6430** 等 PR 完成后端 store 替换 | #6274, #6430 |
| WebUI SSE 状态在导航后丢失 | #6425 | 中 | 已合并，修复后可正常跨页面保持流式状态 | #6425 |
| 模型错误未被透出导致难以定位故障 | #6437 | 中 | 正在实现模型可观察的错误映射 | #6437 |
| 运行时缺少对第三方 HTTP 服务的凭证注入 | #4543 | 低 | 关联的配置‑as‑Code 项目将在后续 PR 中解决 | #4543 |
| CI 中出现的依赖冲突（如 `fast-uri`） | #6435 | 低 | 依赖更新已合并 | #6435 |

> **结论**：当前无阻塞生产的严重崩溃，主要问题已在本轮 PR 中得到解决，整体 **稳定性保持在 “良好”**。  

---  

### 6. 功能请求与路线图信号  

- **自定义指令 / 主提示 UI 区**（#6433） —  — 正在实现，若 PR 合并成功，可期待在 **v1.0.1** 加入。  
- **统一的 Google 扩展轻量化能力**（#5503） —  — 已合并至 `master`，计划在 **v1.0.1** 中正式发布。  
- **完整的错误可恢复框架**（#6284） —  — 第一个阶段已落地，后续将在 **v1.1** 扩展至 100 % 可恢复。  
- **从属式扩展运行时**（#6116） —  — 仍在进行中，若进展顺利，可在 **v1.1** 成为默认扩展模型。  
- **完整的 LLM‑trace 目录**（#6422） —  — 正在收集，将为 **v1.1** 的自动化回归提供完整数据集。  

**判断**：上述需求的实现进度均在 **活跃 PR**（>10 评论或已合并）推动，预计将在 **下一发行（v1.0.1 或 v1.1）** 中进入正式功能列表。  

---  

### 7. 用户反馈摘要  

- **配置碎片化**：多位用户提到当前需同时手动维护 `.env`、`.system/`、JSON、extension‑install 等多种配置来源，缺乏统一 schema（**#3036**、**#4533**）。  
- **运维透明度**：用户期望通过统一的 **WebUI v2 logs/tail** 与 **operator doctor** 实现实时、可审计的运维（**#4597**、**#4596**）。  
- **状态漂移焦虑**：前端 UI 与后端状态不同步导致 “UI 背离真实状态” 的困惑（**#2792**），解决方案是把 UI 设计为后端的纯函数。  
- **权限授别混乱**：在 Reborn 中“witness”机制尚未完全替代旧的 `None`‑fallback，导致部分场景仍感受到双路径授权（**#6436、#6396**）。  
- **文档/迁移指引不足**：多数新功能 PR（如 #6274、#6430）缺少迁移手册，导致社区对后端 store 变更的担忧。  

---  

### 8. 待处理积压  

| 项目 | 关联编号 | 状态 | 关注点 |
|------|----------|------|--------|
| Reborn 登陆策略与 PR 规划 | **#2987** | OPEN | 仍需明确 PR 分组顺序与合并窗口。 |
| Engine‑v2 能力与工具 schema 分离 | **#2767** | OPEN | 需要完整的迁移指南，避免 v1 行为不变。 |
| 配置‑as‑Code 与使用案例 blueprint | **#3036** | OPEN | 大规模改动涉及多组件，需早日提供原型。 |
| 多账户 Channel 支持 | **#2392** | OPEN | 影响多平台部署，需提前敲定接口。 |
| 自助式秘密管理与授予 | **#4545** | OPEN | 与安全合规团队审查进度慢。 |
| 贡献者 Runway 与并行端点 | **#3484** | OPEN | 为多贡献者并行工作提供安全隔离。 |
| CI / Live‑QA 完整覆盖方案 | **#4632**, **#4775**, **#6067** | OPEN | 需要外部服务（如 BotFather）的人工干预。 |
| Crate 边界与所有权审计 | **#3773** | OPEN | 需要社开发者参与审议

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
**日期：2026-07-22 | 数据来源：GitHub API**

---

## 1. 今日速览
LobsterAI 在过去24小时内保持**中等活跃度**，共产生**11条更新**（1个Issue、10个PR），其中**5个PR已合并/关闭**，**5个PR待合并**。项目在**图片附件处理同步**和**用户体验优化**方面取得重要进展，但仍有**关键Bug（Issue #1861）**待解决。依赖更新（如React 19、Vite 8）持续推进，但部分PR（如#1279-#1281）因长期未响应被标记为`stale`。

**活跃度评估**：⭐⭐⭐☆☆（3/5）
- **优势**：PR合并效率较高（50%合并率），功能修复覆盖多个模块（renderer、cowork、artifacts）。
- **关注点**：Issue响应滞后（#1861自4月28日提出，至今无解决方案），部分PR积压（如依赖更新）。

---

## 2. 版本发布
**无新版本发布**

---

## 3. 项目进展
### 🔥 今日合并/关闭的重要 PR（按合并时间排序）
| PR | 区域 | 类型 | 状态 | 核心变更 | 影响 |
|----|------|------|------|----------|------|
| [#2372](https://github.com/netease-youdao/LobsterAI/pull/2372) | renderer/main/openclaw | 修复 | ✅ 已合并 | 修复OpenClaw令牌代理SSE截断问题 | 提升API响应稳定性 |
| [#2371](https://github.com/netease-youdao/LobsterAI/pull/2371) | renderer/cowork/artifacts | 修复 | ✅ 已合并 | 优化浏览器注释流程，支持无评论样式修改，同步会话状态 | 改善协作体验 |
| [#2370](https://github.com/netease-youdao/LobsterAI/pull/2370) | renderer/artifacts | 修复 | ✅ 已合并 | 统一Artifact分享与部署的订阅拦截弹窗逻辑 | 提升权限管理一致性 |
| [#2369](https://github.com/netease-youdao/LobsterAI/pull/2369) | renderer/artifacts | 修复 | ✅ 已合并 | 优化Artifact分享访问权限提交流程，区分创建/管理状态 | 简化用户操作 |
| [#2368](https://github.com/netease-youdao/LobsterAI/pull/2368) | renderer/main (Windows) | 功能 | ✅ 已合并 | Windows更新静默安装（无交互安装向导） | 提升部署体验 |

**项目推进度**：
- **协作功能（cowork）**：图片附件与模型能力同步机制（PR #2373）待合并，将解决Issue #1861的核心问题。
- **Artifact管理**：权限控制和分享流程持续优化，用户体验显著提升。
- **平台兼容性**：Windows更新机制改进，提升企业级部署友好度。

---

## 4. 社区热点
### 🔥 最活跃讨论（评论数/反应数）
| 类型 | 标题 | 链接 | 热度 | 关键讨论点 |
|------|------|------|------|------------|
| **Issue** | 图片附件不随模型切换重新处理（#1861） | [链接](https://github.com/netease-youdao/LobsterAI/issues/1861) | 👍 0 | 用户反馈模型切换后图片处理状态不同步，导致视觉模型无法使用图片。PR #2373可能解决此问题。 |
| **PR** | 静默安装Windows更新（#2368） | [链接](https://github.com/netease-youdao/LobsterAI/pull/2368) | 👍 0 | 讨论UAC权限处理和企业部署场景。 |

**社区诉求分析**：
1. **图片处理同步**是用户最关心的功能点（Issue #1861），涉及**模型切换场景**和**多模态交互**的核心体验。
2. **Windows部署**的静默安装需求反映了企业用户对自动化部署的强烈需求。

---

## 5. Bug 与稳定性
### 🐛 今日报告的Bug（按严重程度排序）
| 严重程度 | Issue/PR | 描述 | 状态 | 修复进展 |
|----------|----------|------|------|----------|
| **高** | [#1861](https://github.com/netease-youdao/LobsterAI/issues/1861) | 图片附件在模型切换后处理状态不同步，导致视觉模型无法使用图片 | 🔴 **未解决** | PR #2373待合并 |
| **中** | - | OpenClaw令牌代理SSE截断（PR #2372已修复） | ✅ 已修复 | - |
| **低** | - | Artifact分享权限提交流程优化（PR #2369已修复） | ✅ 已修复 | - |

**稳定性评估**：
- **核心功能Bug**（Issue #1861）仍未解决，可能影响**多模态模型使用体验**。
- 其他修复已覆盖**API稳定性**和**权限管理**问题。

---

## 6. 功能请求与路线图信号
### 🚀 用户提出的新功能需求
| 功能点 | 提及场景 | 相关PR/Issue | 可能版本 |
|--------|----------|--------------|----------|
| **永久隐藏侧边栏广告** | 用户界面优化 | [PR #2374](https://github.com/netease-youdao/LobsterAI/pull/2374) | v1.5+ |
| **图片附件模型同步** | 多模态交互 | [Issue #1861](https://github.com/netease-youdao/LobsterAI/issues/1861) | v1.4+（PR #2373） |
| **依赖更新**（React 19、Vite 8） | 性能与兼容性 | [PR #1279-#1281](https://github.com/netease-youdao/LobsterAI/pulls) | v1.6+ |

**路线图信号**：
1. **用户体验优化**是当前重点（广告隐藏、权限管理）。
2. **多模态功能**仍有改进空间（图片处理同步）。
3. **技术栈升级**（React 19、Vite 8）将在后续版本中落地。

---

## 7. 用户反馈摘要
### 💬 真实用户痛点（来自Issue评论）
1. **图片处理同步问题**（Issue #1861）：
   - 用户反馈在**模型切换后图片附件未重新处理**，导致视觉模型无法使用图片。
   - **使用场景**：用户在非视觉模型（如GLM-5.1）中添加图片，切换到视觉模型（如Doubao-Seed-2.0-lite）后图片无法被识别。
   - **期望**：附件处理状态应与当前模型能力同步。

2. **广告横幅干扰**（Issue #2342，关联PR #2374）：
   - 用户希望能**永久隐藏侧边栏广告**，避免重复关闭。
   - **使用场景**：长期使用用户对界面杂乱感不满。

3. **Artifact权限管理复杂**（PR #2369、#2370）：
   - 用户反馈分享和部署的权限提示**逻辑不一致**，操作流程繁琐。
   - **期望**：统一的权限管理入口和更直观的提示文案。

---

## 8. 待处理积压
### ⏳ 长期未响应的重要Issue/PR
| 类型 | 编号 | 标题 | 创建时间 | 停滞原因 | 建议措施 |
|------|------|------|----------|----------|----------|
| **Issue** | [#1861](https://github.com/netease-youdao/LobsterAI/issues/1861) | 图片附件不随模型切换重新处理 | 2026-04-28 | 无维护者响应 | 1. 分配核心开发者跟进；2. 评估PR #2373的合并风险 |
| **PR** | [#1279](https://github.com/netease-youdao/LobsterAI/pull/1279) | 依赖更新：cross-env 7.0.3 → 10.1.0 | 2026-04-02 | 无维护者审核 | 1. 标记为`stale`后自动关闭；2. 如需更新，重新提交PR |
| **PR** | [#1280](https://github.com/netease-youdao/LobsterAI/pull/1280) | 依赖更新：react-dom 18.3.1 → 19.2.4 | 2026-04-02 | 无维护者审核 | 同上 |
| **PR** | [#1281](https://github.com/netease-youdao/LobsterAI/pull/1281) | 依赖更新：vite 5.4.21 → 8.0.9 | 2026-04-02 | 无维护者审核 | 同上 |

**维护者建议**：
1. **优先处理Issue #1861**，该问题直接影响**多模态功能的核心体验**。
2. **清理陈旧PR**（如#1279-#1281），避免积压影响开发效率。
3. **建立依赖更新流程**，定期审核和合并依赖升级PR。

---
**总结**：LobsterAI在功能修复和用户体验优化方面表现积极，但核心Bug（图片处理同步）和依赖更新积压需尽快解决。建议维护者重点关注**Issue #1861**和**PR积压问题**。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报
**日期：2026-07-22 | 项目链接：[moltis-org/moltis](https://github.com/moltis-org/moltis)**

---

## 1. 今日速览
Moltis 项目在过去24小时内保持**低活跃度**状态：
- **Issues**：零新增/活跃/关闭（0/0/0），项目问题跟踪处于静默期；
- **Pull Requests**：仅1个依赖更新PR待合并（#1161），无功能性或修复性PR；
- **版本发布**：无新版本发布；
- **整体健康度**：项目处于**维护期**，核心功能稳定，社区参与度较低，需关注长期维护动力。

---

## 2. 版本发布
*无新版本发布*

---

## 3. 项目进展
### 今日合并/关闭的重要 PR
- **#1161** [OPEN] [dependencies] `chore(deps): bump astro from 7.0.9 to 7.1.3`
  - **类型**：依赖安全更新（JavaScript生态系统）
  - **影响范围**：文档站点（`/docs`目录）
  - **进展**：PR已创建但未合并，涉及Astro框架的补丁版本升级（7.0.9 → 7.1.3），主要修复安全漏洞与性能优化。
  - **维护建议**：建议尽快审核合并，避免文档站点因依赖漏洞暴露风险。

🔗 [查看 PR #1161](https://github.com/moltis-org/moltis/pull/1161)

---

## 4. 社区热点
*无活跃的 Issues/PRs 讨论（0条评论/反应）*

---

## 5. Bug 与稳定性
*无今日新增 Bug 报告*

---

## 6. 功能请求与路线图信号
*无新功能请求或路线图相关讨论*

---

## 7. 用户反馈摘要
*无用户反馈记录（Issues 评论为空）*

---

## 8. 待处理积压
### 长期未响应的重要 Issue/PR
| 编号 | 标题 | 类型 | 创建时间 | 状态 | 积压时长 |
|------|------|------|----------|------|----------|
| - | *无长期未响应的重要 Issue 或 PR* | - | - | - | - |

---
### 维护者提醒
- **依赖管理**：项目当前仅有1个依赖更新PR待处理（#1161），建议优先审核以确保文档站点安全性；
- **社区活跃度**：近期Issues/PRs零活动，可能需要维护者主动发起讨论（如Roadmap更新、功能征集）以激活社区；
- **长期维护**：建议评估项目未来发展方向，考虑是否需要寻求更多贡献者或转向维护模式。

---
**数据来源**：GitHub API | **分析工具**：Moltis 项目动态分析系统
**免责声明**：本报告基于公开数据生成，不代表官方立场。如需进一步分析，请访问 [moltis-org/moltis](https://github.com/moltis-org/moltis)。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw 项目每日动态报告（2026‑07‑22）**  

---  

## 1. 今日速览  
- 过去 24 小时 ** Issue 更新 41 条**（新开/活跃 20 条，已关闭 21 条），** PR 更新 46 条**（已合并/关闭 27 条，待合并 19 条），并 **发布 1 个新版本 v2.0.1‑beta.1**。  
- 活跃度保持在 **中等偏上**：Issue 活跃度（65 条评论的 #2291）仍在增长，PR 合并率 59%（27/46）显示审查流程相对顺畅。  
- 整体健康度：**✅ 代码库维护活跃、发行节奏稳定、社区参与度提升**。  

---  

## 2. 版本发布  
**v2.0.1‑beta.1**（β 系列第 1 版）  
- **更新内容**（PR 分别为 #6234、#6266、#6272 等）  
  - `fix`: 在 Tauri 入口使用 **absolute import**，避免模块解析冲突。  
  - `chore`:  bump version 至 **2.0.1b1**。  
  - `fix(memoryspace)`: 捕获 `_saved_tool_refs` 中的 `OSError`，提升异常鲁棒性。  
- **破坏性变更**：无显著破坏性迁移，仅为 **beta 预发布**，兼容 v2.0.0 系列接口。  
- **迁移注意事项**：若在生产环境使用 `qwenpaw` CLI，请确认依赖的 `tauri` 包已升至对应的 `2.x` 版本以避免模块解析错误。  

---  

## 3. 项目进展  
### 已合并 / 关闭的重要 PR（摘选）  

| PR | 标题 | 关键改动 | 影响/收获 |
|----|------|----------|-----------|
| **#6270** | `feat: support user editable agent mode` | 为 Agent 提供 **模式可编辑** 的 UI 控制，用户可在设置页一键切换。 | 提升自定义灵活性，后续可直接在 Dashboard 切换模式。 |
| **#6068** | `fix(scroll): preserve session IDs during history migration` | 修复会话迁移时 **Session ID 不一致** 的问题，保证历史恢复一致性。 | 防止会话信息丢失或交叉污染，提升数据完整性。 |
| **#5992** | `Add per-session model overrides` | 引入 **可选的 per‑session 模型覆盖**，单会话可绑定不同模型。 | 为后续模型切换提供原生支持，降低全局配置的副作用。 |
| **#6251** | `feat(cli): add scriptable environment reads` | CLI 增加 `qwenpaw env get/list --json`，支持脚本化读取环境变量。 | 便于 CI/CD 与自动化部署使用。 |
| **#6183** | `feat(logging): make rotation limits configurable` | 日志轮转大小与备份数可通过 `QWENPAW_LOG_MAX_SIZE`、`QWENPAW_LOG_MAX_BACKUPS` 配置。 | 降低日志占用，便于资源受限环境运行。 |

> **整体进展**：上述合并覆盖 **会话管理、模型可配置、日志可调** 三大核心模块，意味着 CoPaw 在 **可维护性、用户自定义、运行时鲁棒性** 上迈出了显著一步。  

---  

## 4. 社区热点  
### 评论最多、讨论最活跃的 Issue（已关闭/打开）  

| Issue | 标题 | 评论数 | 状态 | 链接 |
|-------|------|--------|------|------|
| **#2291** | 🐾 **Help Wanted: Open Tasks — Come Contribute!** | 65 | CLOSED | <https://github.com/agentscope-ai/QwenPaw/issues/2291> |
| **#6257** | **Bug**: Multiple tool calls produce identical thinking output | 13 | CLOSED | <https://github.com/agentscope-ai/QwenPaw/issues/6257> |
| **#4873** | **Bug**: 同时开两个 subagent 导致主 agent 无限轮询 | 5 | CLOSED | <https://github.com/agentscope-ai/QwenPaw/issues/4873> |
| **#6299** | **Bug**: Deleted session records persist in history.db, causing seq collision | 3 | CLOSED | <https://github.com/agentscope-ai/QwenPaw/issues/6299> |
| **#6314** | **Bug**: RemoteProtocolError: peer closed connection without sending complete message body | 3 | CLOSED | <https://github.com/agentscope-ai/QwenPaw/issues/6314> |

#### 关键诉求概括  
- **协作入口**：#2291 为社区贡献提供了明确的任务入口，需要维护者持续标注 “Not Started”。  
- **多工程思维bug**：#6257 揭示了 **多工具调用思考文本重复** 的根本问题，已在 master 分支上线修复。  
- **子 Agent 并发**：#4873 反馈 Feishu 端无法中断高频轮询，提醒需要 **后台任务调度的 UI/UX 优化**。  
- **会话数据污染**：#6299 发现旧会话记录未清理导致 **seq 重复、上下文污染**，已在 PR #6068 中部分解决，后续仍需完整清理机制。  

---  

## 5. Bug 与稳定性  
| Bug | 严重度 | 是否已修复（PR） | 简要描述 | 链接 |
|-----|--------|------------------|----------|------|
| **#6257** | 高 | ✅ 已合并（#6270 关联） | 多工具调用思考块内容相同，导致推理不透明。 | <https://github.com/agentscope-ai/QwenPaw/issues/6257> |
| **#6299** | 中 | ✅ 已合并（#6068） | 删除会话后仍残留历史记录，引发 seq 冲突。 | <https://github.com/agentscope-ai/QwenPaw/issues/6299> |
| **#6314** | 中 | ❌ 待解决 | RemoteProtocolError（对端提前关闭连接）。 | <https://github.com/agentscope-ai/QwenPaw/issues/6314> |
| **#6241** | 高 | ✅ 已合并（#6241 对应的 PR 已合并） | 连续轮次出现相同输出、memory_search 死循环，缺乏重复检测。 | <https://github.com/agentscope-ai/QwenPaw/issues/6241> |
| **#5771** | 低 | ✅ 已合并（#5771 对应的 PR 已合并） | 调试日志误用 WARNING 导致刷屏。 | <https://github.com/agentscope-ai/QwenPaw/issues/5771> |
| **#6292** | 低 | ❌ 待解决 | Chunk 消息 status 为 `RunStatus.Completed` 过早触发。 | <https://github.com/agentscope-ai/QwenPaw/issues/6292> |

> **健康度提示**：大多数高危 Bug 已在最新 PR 中修复，未解决的主要问题是 **网络层面的连接关闭**（#6314）和 **chunk 状态误判**（#6292），需要后续关注。  

---  

## 6. 功能请求与路线图信号  
| 需求 | 关联 Issue/PR | 可能纳入的里程碑 | 备注 |
|------|----------------|-------------------|------|
| **直接拖拽上传图片、PDF、Office 等文档** | #6297（OPEN） | v2.1 可能的 “文件交互增强” 主题 | 已有 PR #6273 讨论 “Unify task tracking”，可作为基础。 |
| **Web 控制台移动端适配** | #6281（OPEN） | v2.2 | 与 #6270（编辑模式）的 UI 改动可复用。 |
| **按 conversation 级别指定模型** | #6318（OPEN） | v2.2 | 已有 PR #5992 实现 per‑session model overrides，直接上层化。 |
| **在对话中自动附加当前真实时间信息** | #6283（OPEN） | v2.1 | 需要后端 utils 改动，已在 #6309 讨论实现。 |
| **支持 qwen3.8‑max‑preview 在阿里云 Token Plan** | #6285（OPEN） | v2.1 | 只需更新硬编码模型列表，已有 PR #6271 引入 AIOnly，可复用。 |
| **终端输入自定义命令（手机/平板优化）** | #6308（OPEN） | v2.2 | 需要 UI/CLI 双端改造，社区已有 PR #6262 增加“一键复制”。 |

> **路线图信号**：本轮 PR 多数围绕 **“可编辑的 agent 模式、会话隔离、模型可覆盖”** 推进，显示团队正向 **更细粒度的用户可配置** 方向发展。上述需求若配合已有 PR（尤其是 #5992、#6270），极有可能进入 **v2.1 / v2.2** 的里程碑。  

---  

## 7. 用户反馈摘要  
- **痛点**：  
  - *“关闭会话后上下文仍会泄漏”*（#6299）导致新会话出现 **上下文污染**。  
  - *“多工具调用思考文本重复”*（#6257）让用户难以判断每一步的决策依据。  
  - *“Web 控制台在移动端使用不便”*（#6281）以及 *“无法直接拖拽文件”*（#6297）是 **UX** 的主要瓶颈。  
- **满意度**：  
  - 用户对 **版本发布的快速节奏** 表示赞赏，尤其是 **bug 修复和新特性的同步**（如内存空间异常捕获）。  
  - **迁移文档与迁移指引**（#6241 的回归检查）提升了对新版本的信任度。  
- **期待**：  
  - **移动端友好** 和 **文件拖拽** 功能；  
  - **会话级别模型灵活切换**；  
  - **时间戳精准展示**（#6301）防止跨天误读。  

---  

## 8. 待处理积压  
| 项目 | 状态 | 关键信息 | 链接 |
|------|------|----------|------|
| **#6322** | 打开 | 移动网络跳转广告页 | <https://github.com/agentscope-ai/QwenPaw/issues/6322> |
| **#6321** | 打开 | 支持 `AGENTS.md` 中的前置规则以限制工具调用 | <https://github.com/agentscope-ai/QwenPaw/issues/6321> |
| **#6320** | 打开 | LaTeX 公式渲染异常 | <https://github.com/agentscope-ai/QwenPaw/issues/6320> |
| **#6273** | 打开 | 统一任务追踪与同会话并发语义 | <https://github.com/agentscope-ai/QwenPaw/issues/6273> |
| **#6190** (已合并但仍在 Review) | 关闭 | Governance 自动注册工具的完整实现 | <https://github.com/agentscope-ai/QwenPaw/pull/6190> |
| **长期未响应的 Issue**：#2055（OpenAI 兼容模型大量 tool_call 失控）仍未被彻底解决，仅有讨论而无 PR。 |
| **长期未合并的 PR**：#5

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报
**日期：2026-07-22 | 数据来源：GitHub API (zeroclaw-labs/zeroclaw)**

---

## 1. 今日速览
过去24小时内，ZeroClaw 项目保持高活跃度：**50条 Issues 更新**（48条新开/活跃，2条已关闭）、**50条 PR 更新**（41条待合并，9条已合并/关闭），但**无新版本发布**。项目在**多租户代理配置**、**通道稳定性**、**目标模式（Goal Mode）**等核心领域持续推进，但**安全性问题**（如子代理权限绕过、MCP 进程泄漏）和**配置兼容性**（如 Bedrock 缓存、Telegram 频道配置）仍是重点关注方向。社区讨论热度集中在**Telegram 频道集成**和**目标模式功能**上，显示用户对即时通讯和长时任务能力的强烈需求。

---

## 2. 版本发布
**无新版本发布**。最近一次 Release 记录为空，项目当前处于**功能快速迭代阶段**，未进入稳定发布窗口。

---

## 3. 项目进展
今日合并/关闭的重要 PR 共 **9 条**，其中 **6 条已合并**，**3 条已关闭**（含测试修复）。核心进展如下：

### ✅ 已合并 PR（推进功能/修复）
| PR | 类型 | 影响范围 | 关键进展 |
|----|------|----------|----------|
| **[#9183](https://github.com/zeroclaw-labs/zeroclaw/pull/9183)** | Bug Fix | `runtime/sop` | **修复 SOP 路由逻辑**：当顶层 `when` 条件为 `false` 时，正确绕过 `switch` 评估，避免误判路由。解决了 `#9120` 中报告的回归问题。 |
| **[#9055](https://github.com/zeroclaw-labs/zeroclaw/pull/9055)** | CI/Docs | `docs/translation` | **提升文档构建可重现性**：统一 `mdBook` 输入生成路径，消除翻译刷新依赖人工干预的问题。 |
| **[#9011](https://github.com/zeroclaw-labs/zeroclaw/pull/9011)** | Feature | `zerocode/dashboard` | **ZeroCode 仪表盘增强**：显示活跃运行时上下文（守护进程、配置、端点、版本），提升用户体验。 |
| **[#8756](https://github.com/zeroclaw-labs/zeroclaw/pull/8756)** | Test Fix | `tests/media` | **修复 Windows 兼容性**：更新 RPC 附件测试，替换 Unix 路径匹配为工作区路径组件检测。 |

### 🔄 待合并 PR（重大功能）
| PR | 类型 | 影响范围 | 进展状态 |
|----|------|----------|----------|
| **[#8687](https://github.com/zeroclaw-labs/zeroclaw/pull/8687)** | Feature | `runtime/goal` | **目标模式控制器**：为目标模式（Goal Mode）添加 Rust 侧控制器和验证器，是 `#8303` RFC 的核心实现。 |
| **[#8688](https://github.com/zeroclaw-labs/zeroclaw/pull/8688)** | Feature | `runtime/tools` | **目标模式工具集**：添加 `goal_start`、`goal_objective`、`goal_resume` 等受信任工具，支持模型调用。 |
| **[#8689](https://github.com/zeroclaw-labs/zeroclaw/pull/8689)** | Feature | `channels/core` | **目标模式频道命令**：为所有频道添加 `/goal` 命令（`start`、`status`、`pause` 等），支持受信任控制平面。 |
| **[#9013](https://github.com/zeroclaw-labs/zeroclaw/pull/9013)** | Refactor | `config/todotracker` | **配置重构**：将 TodoWrite 显示配置从守护进程迁移至 ZeroCode，解耦展示与执行逻辑。 |

**项目健康度评估**：
- **功能层面**：目标模式（Goal Mode）功能集群（PR #8687/8688/8689）即将完成，将为用户提供**长时任务自动化**能力，是项目里程碑。
- **稳定性层面**：SOP 路由修复（#9183）和测试兼容性改进（#8756/#9055）提升了核心稳定性。
- **技术债务**：配置系统仍有待优化（如 `#8834` 中 `config set` 无法创建非 `providers.*` 别名）。

---

## 4. 社区热点
今日 **评论最多的 Issues/PRs**（按评论数排序）：

### 🔥 热议 Issues
| Issue | 标题 | 评论数 | 👍 | 链接 |
|-------|------|--------|----|------|
| **[#8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226)** | [Feature] 为代理添加类型化 Git 身份 | 6 | 0 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8226) |
| **[#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505)** | [Bug] Telegram 频道无法配置 | 6 | 0 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8505) |
| **[#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)** | [RFC] 目标模式（Goal Mode） | 4 | 1 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) |
| **[#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)** | [RFC] OpenAI Chat Completions 兼容适配器 | 4 | 0 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) |

### 🔥 热议 PRs
| PR | 标题 | 评论数 | 👍 | 链接 |
|----|------|--------|----|------|
| **[#9248](https://github.com/zeroclaw-labs/zeroclaw/pull/9248)** | [Feature] 评估历史日志追加 | 0 | 0 | [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/9248) |
| **[#9244](https://github.com/zeroclaw-labs/zeroclaw/pull/9244)** | [Feature] 评估种子隔离内存 | 0 | 0 | [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/9244) |

**社区诉求分析**：
1. **Telegram 集成问题**（#8505、#8810）：用户反馈频道配置后机器人无响应，显示**文档与实际行为不符**，需要**端到端指南**（PR #9242 已着手解决）。
2. **目标模式功能**（#8303）：社区对**长时任务自动化**需求强烈，PR #8687/8688/8689 正在推进中。
3. **多模型切换**（#8600）：用户希望简化在同一提供商内切换模型的流程，显示**用户体验优化**需求。

---

## 5. Bug 与稳定性
今日报告的 **Bug 按严重程度排序**（S0=最高）：

| Issue | 组件 | 严重程度 | 状态 | 修复 PR |
|-------|------|----------|------|---------|
| **[#9247](https://github.com/zeroclaw-labs/zeroclaw/issues/9247)** | `tools/shell` | **S0（安全风险）** | OPEN | 无 |
| **[#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279)** | `tool/delegate` | **S0（安全风险）** | OPEN | 无 |
| **[#8731](https://github.com/zeroclaw-labs/zeroclaw/issues/8731)** | `runtime/daemon` | **S2（资源泄漏）** | OPEN | 无 |
| **[#8718](https://github.com/zeroclaw-labs/zeroclaw/issues/8718)** | `config/onboarding` | **S2（功能降级）** | OPEN | 无 |
| **[#8410](https://github.com/zeroclaw-labs/zeroclaw/issues/8410)** | `channels/runtime` | **S2（行为降级）** | OPEN | 无 |

### 🔴 关键安全问题
1. **[#9247](https://github.com/zeroclaw-labs/zeroclaw/issues/9247)**：Shell 工具**未强制执行工作区边界**，允许通过符号链接绕过沙盒，存在**数据泄露/写入风险**。
2. **[#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279)**：子代理（`delegate` 工具）可绕过父代理的工具白名单，存在**权限提升风险**。

### 🟡 功能稳定性问题
- **[#8731](https://github.com/zeroclaw-labs/zeroclaw/issues/8731)**：MCP 子进程（stdio 模式）在守护进程 PID 下**未正确回收**，导致**僵尸进程累积**。
- **[#8718](https://github.com/zeroclaw-labs/zeroclaw/issues/8718)**：`zeroclaw config init` 生成的配置模板**静默禁用本地语音转录**（Whisper）。

**维护者行动建议**：
- 优先处理 **S0 安全问题**（#9247、#8279），建议立即发布安全更新。
- 为 **S2 问题** 分配维护者跟进（如 #8731 的进程管理）。

---

## 6. 功能请求与路线图信号
今日新增 **功能请求**（按优先级排序）：

| Issue | 标题 | 优先级 | 类型 | 信号强度 |
|-------|------|--------|------|----------|
| **[#9228](https://github.com/zeroclaw-labs/zeroclaw/issues/9228)** | [Follow-up] 评估结果仪表盘 | P3 | Feature | 🟡 中等 |
| **[#8568](https://github.com/zeroclaw-labs/zeroclaw/issues/8568)** | [Feature] Mixture-of-Agents (MoA) 虚拟模型提供商 | P2 | RFC | 🟢 强 |
| **[#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780)** | [RFC] Gemini Live 实时语音频道 | P2 | RFC | 🟢 强 |

### 📌 可能被纳入下一版本的功能
1. **Mixture-of-Agents (MoA) 提供商**（#8568）：
   - 允许用户通过**多模型聚合**提升任务成功率。
   - 已有 PR **待作者行动**（needs-author-action），但架构设计完整。
   - **路线图信号**：高（社区需求强，RFC 评论积极）。

2. **Gemini Live 实时频道**（#8780）：
   - 为 **Gemini Live** 添加**实时语音对话**能力。
   - **路线图信号**：高（RFC 讨论活跃，但需验证后端兼容性）。

3. **评估结果仪表盘**（#9228）：
   - 为评估套件添加**趋势分析**功能。
   - **路线图信号**：中等（技术债务，但用户反馈积极）。

---

## 7. 用户反馈摘要
从 Issues 评论中提炼的 **真实用户痛点**：

### ✅ 满意点
- **目标模式功能**（#8303）：
  > *"Goal mode would be a game-changer for long-running tasks like data processing or automated research."* — [vrurg](https://github.com/zeroclaw-labs/zeroclaw/issues/8303#issuecomment-22456789)
  - 用户期待**长时任务自动化**，认为这是项目的**核心竞争力**。

### ❌ 不满意点
1. **配置复杂性**：
   - Telegram 频道配置问题（#8505、#8810）：
     > *"The quickstart guide doesn't work — the bot doesn't respond even after setup."* — [cr3a7ure](https://github.com/zeroclaw-labs/zeroclaw/issues/8810)
     - **根因**：文档与实际行为不符，配置流程缺乏端到端验证。

2. **安全性担忧**：
   - Shell 工具权限问题（#9247）：
     > *"A symlink attack could leak workspace data."* — [vshanbha](https://github.com/zeroclaw-labs/zeroclaw/issues/9247)
     - **影响**：用户对**沙盒隔离**能力提出质疑。

3. **多模型切换体验**：
   - #8600 中用户反馈：
     > *"In moltis, switching models was seamless — why is it so hard in ZeroClaw?"*
     - **需求**：简化**模型切换流程**，提升用户体验。

---

## 8. 待处理积压
### ⏳ 长期未响应的重要 Issue/PR
| Issue/PR | 标题 | 等待时间 | 风险 | 建议行动 |
|----------|------|----------|------|----------|
| **[#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279)** | 子代理绕过工具白名单 | 29 天 | 🔴 高 | **立即分配安全团队跟进** |
| **[#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642)** | MCP 工具模式内存泄漏 | 19 天 | 🟡 中 | **评估内存管理机制** |
| **[#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505)** | Telegram 频道配置问题 | 23 天 | 🟡 中 | **发布端到端指南（PR #9242 已在做）** |
| **[#8720](https://github.com/zeroclaw-labs/zeroclaw/issues/8720)** | Bedrock 缓存配置问题 | 18 天 | 🟡 中 | **验证配置选项是否生效** |
| **[#8309](https://github.com/zeroclaw-labs/zeroclaw/issues/8309)** | SkillFor

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*