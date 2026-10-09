# AI CLI 工具社区动态日报 2026-10-10

> 生成时间: 2026-10-09 22:15 UTC | 覆盖工具: 12 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [ComfyUI](https://github.com/comfyanonymous/ComfyUI)
- [Ollama](https://github.com/ollama/ollama)
- [llama.cpp](https://github.com/ggerganov/llama.cpp)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比



以下是今日（2026-10-10）各 AI 开发工具最重要的 5-8 条更新摘要：

1. **Claude Code 发布 v2.1.296**：新增 `managed.policies[].code` 配置键以统一 CLI 与 Desktop Code Tab 的策略管理，并引入 `autoCompactWindow` 子代理参数。 ([链接](https://github.com/anthropics/claude-code/releases/tag/v2.1.296))
2. **OpenAI Codex 发布 v0.162.1**：修复了异步多行提问时 TUI 崩溃的问题，并解决了因后台服务器与 CLI 默认配置不一致导致的启动失败。 ([链接](https://github.com/openai/codex/releases/tag/rust-v0.162.1))
3. **Gemini CLI 发布 v0.64.0-preview.1**：通过 Cherry-pick 引入了安全补丁，消除了命令标志中的误报问题。 ([链接](https://github.com/google-gemini/gemini-cli/releases/tag/v0.64.0-preview.1))
4. **GitHub Copilot CLI 发布 v1.0.96-0 与 v1.0.95**：优化了 Git 仓库中的提示符启动速度，新增权限决策来源时间线展示，并在 macOS 上引入原生 Microsoft Entra 认证。 ([链接](https://github.com/github/copilot-cli/releases/tag/v1.0.96-0))
5. **Qwen Code 发布 v0.25.1-preview.1**：主要修复了 Agents 模块中远程 Host 替换时的绑定丢失问题，提升了多环境连接稳定性。 ([链接](https://github.com/QwenLM/qwen-code/releases/tag/v0.25.1-preview.1))
6. **llama.cpp 推出 b11528 至 b11538 系列版本**：修复了 MSVC 下的 CUDA 舍入错误与越界写入（OOB）问题，并重构了 Chat API。 ([链接](https://github.com/ggerganov/llama.cpp/releases))
7. **Claude Code 合并多项安全修复 PR**：重点修复了 hookify 插件的规则加载绕过与异常放行漏洞，以及 YAML 注入和符号链接凭证覆盖漏洞（如 PR #84711）。 ([链接](https://github.com/anthropics/claude-code/pull/84711))
8. **Pi 合并 PR #10739**：修复了自定义消息启动时 `before_agent_start` hook 未触发的问题，避免了系统 prompt 和 sections 处理程序的丢失。 ([链接](https://github.com/earendil-works/pi/pull/10739))

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills 社区热点报告
**数据截止：2026-10-10 | 来源：anthropics/skills**

---

## 一、热门 Skills 排行

> 注：PR 列表按评论数排序，但评论计数字段在当前数据中为 `undefined`。以下选取内容质量高、更新活跃且与社区核心痛点紧密相关的 PR。

### 1. #1961 — skill-creator: harden eval viewer（安全加固）
- **作者**: Joncik91 | **状态**: OPEN | **更新**: 2026-10-07
- **功能**: 为 `skill-creator` 的 eval viewer（`generate_review.py` + `viewer.html`）修补三处安全漏洞：脚本注入 breakout、DNS rebinding、跨站 POST 请求。viewer 是本地页面，渲染由模型写入的不受信数据，安全风险较高。
- **社区热点**: 对应 Issue #1394（escapeHtml XSS 漏洞），属于 skill-creator 工具链安全的延续讨论。
- 🔗 https://github.com/anthropics/skills/pull/1961

### 2. #1298 — fix(skill-creator): isolate trigger evals and handle Windows and runtime failures
- **作者**: MartinCajiao | **状态**: OPEN | **更新**: 2026-09-16
- **功能**: 修复 trigger evaluation 的多个缺陷——多 worker 命令竞争、Windows `select()` 管道失败、无关工具中断扫描、运行时失败被误判为 negative examples。
- **社区热点**: 对应 Issue #556（`claude -p` 触发率 0%）、#1352（并行 worker UUID 交叉匹配）、#1383（benchmark 静默失败），是 skill-creator 评估体系的系统性修复。
- 🔗 https://github.com/anthropics/skills/pull/1298

### 3. #1742 — fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers
- **作者**: Kuldeeep18 | **状态**: OPEN | **更新**: 2026-10-08
- **功能**: 适配 `mcp>=2.0.0` API 变更——`streamablehttp_client` → `streamable_http_client`，自定义 HTTP header 改用 `create_mcp_http_client` / `http_client` 注入。修复 Issue #1668。
- **社区热点**: MCP 生态快速迭代，mcp-builder skill 的兼容性是高频痛点。
- 🔗 https://github.com/anthropics/skills/pull/1742

### 4. #1771 — feat: add proofcore-contract-auditor for smart contract notarization
- **作者**: ProofCore-Protocol | **状态**: OPEN | **更新**: 2026-09-16
- **功能**: Web3 智能合约审计 Skill——对 Solidity/Rust 合约做静态分析，将审计证明锚定到 TON 公链（ProofCore 零存储 Merkle 协议）。
- **社区热点**: 首个将区块链审计与 Claude Skill 结合的 PR，Web3 开发者群体的定向贡献。
- 🔗 https://github.com/anthropics/skills/pull/1771

### 5. #1703 — Add md2video-audio skill
- **作者**: 70v-Yoyo | **状态**: OPEN | **更新**: 2026-09-15
- **功能**: 零成本将 Markdown 文档编译为专业级 MP4 视频，通过 Marp 生成幻灯片并附加类人声 voiceover。
- **社区热点**: 内容生成链路的自动化——从文本到视频的端到端能力，属于 AIGC 创作方向的典型需求。
- 🔗 https://github.com/anthropics/skills/pull/1703

### 6. #1245 — Add notion-spec-to-implementation and quantitative-resume-auditor skills
- **作者**: mrdesouzaphd-cmyk | **状态**: OPEN | **更新**: 2026-09-30
- **功能**: ① `notion-spec-to-implementation`：将产品/技术 spec 拆解为 Notion 任务，含验收标准与进度追踪；② `quantitative-resume-auditor`：量化简历审计。
- **社区热点**: 需求→实现的桥接 Skill，产品管理和工程效能交叉场景。
- 🔗 https://github.com/anthropics/skills/pull/1245

### 7. #822 — Add AWT (AI Watch Tester) — AI-powered E2E testing skill
- **作者**: ksgisang | **状态**: OPEN | **更新**: 2026-09-19
- **功能**: 零代码 E2E 测试生成——利用 Claude 的视觉与浏览器控制能力自动运行端到端测试。
- **社区热点**: 测试自动化是社区高频需求（见 Issues #1390、#1383），AWT 是社区贡献的完整测试方案。
- 🔗 https://github.com/anthropics/skills/pull/822

### 8. #83 — Add skill-quality-analyzer and skill-security-analyzer to marketplace
- **作者**: eovidiu | **状态**: OPEN | **更新**: 2026-01-07
- **功能**: 两个元 Skill——`skill-quality-analyzer`（五维度质量评估：结构/文档/功能/性能/安全）和 `skill-security-analyzer`（安全审计）。
- **社区热点**: 对应 Issue #492（社区 Skill 冒充官方命名空间），元分析工具是生态健康的关键基础设施。
- 🔗 https://github.com/anthropics/skills/pull/83

---

## 二、社区需求趋势

从 Issues 中提炼的 **Top 5 需求方向**：

| 方向 | 代表 Issue | 核心诉求 |
|------|-----------|---------|
| 🔐 **安全与信任** | #492（43 评论）| 社区 Skill 冒充 `anthropic/` 命名空间，需官方认证机制与安全审计工具 |
| 🏢 **组织协作** | #228（16 评论）| Skill 需支持组织内直接共享，而非手动传递 .skill 文件 |
| 🧠 **Agent 治理** | #412（已关闭）、#1385 | AI Agent 系统需要策略执行、威胁检测、信任评分、审计追踪等治理模式 |
| 💾 **上下文压缩** | #1329（9 评论）| `compact-memory` Skill——用符号化表示压缩 agent 状态，减少上下文膨胀 |
| 📄 **文档质量** | #514、#1734、#486 | 文档排版（ orphan word wrap ）、docx 评论 orphan 检测、ODT 格式支持——文档生成精度持续被追问 |

**其他值得关注的 Issue**：
- #556 / #1352 / #1383：skill-creator 评估体系的系统性缺陷（触发率失真、并行 bug、静默失败）
- #1487：`claude-api` Skill 惰性注入 ~156k token，单次工具调用即耗尽上下文
- #189：`document-skills` 与 `example-skills` 插件内容重复（已关闭）

---

## 三、高潜力待合并 PR

以下 PR 评论活跃、切中社区痛点且更新时间接近当前日期，**可能近期落地**：

| PR | 优先级 | 理由 |
|----|-------|------|
| **#1961** — eval viewer 安全加固 | 🔴 高 | 直接回应 Issue #1394 XSS 漏洞，安全类修复通常优先级最高；10 月最新提交 |
| **#1298** — skill-creator trigger eval 修复 | 🔴 高 | 覆盖 3 个以上关联 Issue（#556/#1352/#1383），是 skill-creator 核心链路修复 |
| **#1742** — mcp-builder MCP v2 兼容 | 🔴 高 | MCP 生态刚大版本升级，兼容性修复是社区刚需；作者 Kuldeeep18 也是 #1681 的贡献者，活跃度高 |
| **#1980** — webapp-testing 去除 shell=True | 🟡 中 | CWE-78 命令注入风险，安全类修复；10 月 6 日最新提交 |
| **#1792** — docx LibreOffice 超时验证 | 🟡 中 | 修复"超时却报成功"的静默错误，与 #1734（orphan docx 评论）同属 docx 质量提升线 |
| **#1730** — claude-api 死链修复 | 🟢 低 | 纯文档修复，无功能变更，但合并阻力最小 |

---

## 四、Skills 生态洞察

> **当前社区在 Skills 层面最集中的诉求是：在能力快速膨胀的同时，建立"安全可信、可审计、可共享"的治理基础设施——技能本身已经从"能不能做"进入了"做得安不安全、用得放不放心"的阶段。**

三个信号支撑这一判断：
1. **Issue #492 以 43 评论断层领先**，社区 Skill 冒充官方的问题已引起广泛警惕；
2. **安全类 PR 密集出现**（#1961 viewer 加固、#1980 去 shell=True、#83 skill-security-analyzer），修复型贡献远多于功能型；
3. **skill-creator 作为"元 Skill"** 成为被审计和修补最多的对象（#1298、#1681、#1961 均在其上），说明社区开始意识到"造工具的工具"本身需要更严格的工程标准。

---



# Claude Code 社区动态日报 — 2026-10-10

---

## 1. 今日速览

Claude Code 发布 **v2.1.296**，新增 `managed.policies[].code` 配置键（统一 CLI 与 Desktop Code Tab 的策略管理）以及 `autoCompactWindow` 子代理参数。社区层面，**网络安全与代理问题**（Cloud 环境 Chromium 连接重置、Playwright MCP 代理绕过）以及 **hookify 插件安全加固**成为最集中的讨论与修复方向。

---

## 2. 版本发布

### v2.1.296

| 变更项 | 说明 |
|---|---|
| `managed.policies[].code` | 新增 `code` 配置键，与 `cli` 设置一致，同时应用于 Claude Desktop 的 Code Tab；当值为 `desktop` 时，开启 Desktop 的 gateway 模式 |
| `autoCompactWindow` | 新增至子代理 frontmatter 与 `--agents` 定义中，支持更精细的上下文自动压缩窗口控制 |

> 链接: [anthropics/claude-code/releases/tag/v2.1.296](https://github.com/anthropics/claude-code/releases/tag/v2.1.296)

---

## 3. 社区热点 Issues（精选 10 条）

### 🔴 #73564 — Cloud 环境下 headless Chromium 全面断网
- **标签**: bug / has repro / web / networking / routines / stale
- **热度**: 5 评论 · 2 👍
- **摘要**: 在 claude.ai/code 的 Cloud 环境中，定时任务（routines）运行的 headless Chromium 即使 Network access 设为 Full，所有站点导航仍返回 `ERR_CONNECTION_RESET`（curl/Node fetch 正常）。
- **为何重要**: 直接阻断 Cloud 环境中的浏览器自动化能力，影响 routines 的核心使用场景。
- **链接**: [Issue #73564](https://github.com/anthropics/claude-code/issues/73564)

### 🔴 #85757 — Playwright MCP 浏览器无法穿越 HTTPS_PROXY 代理
- **标签**: bug / mcp / networking / stale
- **热度**: 2 评论 · 1 👍
- **摘要**: Playwright MCP 浏览器在会话强制 HTTPS_PROXY 代理环境下 100% 返回 `ERR_CONNECTION_RESET`，即使显式传入 `--proxy-server` 也无效。
- **为何重要**: MCP 生态中浏览器自动化的代理兼容性问题，影响企业内网场景。
- **链接**: [Issue #85757](https://github.com/anthropics/claude-code/issues/85757)

### 🟡 #86075 — Image 工具结果无法持久化，预算驱逐破坏 prompt cache
- **标签**: bug / has repro / windows / cost / core / vscode / stale
- **热度**: 2 评论 · 1 👍
- **摘要**: Image 工具结果无法被持久化，导致预算驱逐（budget eviction）时用 sentinel 替代，进而使 prompt cache 失效。
- **为何重要**: 直接影响多模态场景下的 token 成本与推理连续性。
- **链接**: [Issue #86075](https://github.com/anthropics/claude-code/issues/86075)

### 🟡 #85231 — CoworkVMService DACL 阻碍自身崩溃恢复配置
- **标签**: bug / desktop / stale
- **热度**: 2 评论 · 1 👍
- **摘要**: Windows 11 上 CoworkVMService 因 DACL 权限问题无法设置自身崩溃恢复策略，崩溃后服务不重启，Dispatch 挂起。
- **为何重要**: 影响 Desktop 在 Windows 上的稳定性与自愈能力。
- **链接**: [Issue #85231](https://github.com/anthropics/claude-code/issues/85231)

### 🟡 #78002 — Desktop 缩放快捷键绑定物理 US 键位，非 US 布局错键
- **标签**: bug / linux / desktop / keybindings / stale
- **热度**: 2 评论 · 1 👍
- **摘要**: Linux Desktop 的缩放快捷键绑定在物理 US 键位，挪威语等非 US 布局用户按错键。
- **为何重要**: 国际化输入体验的基础缺陷。
- **链接**: [Issue #78002](https://github.com/anthropics/claude-code/issues/78002)

### 🟡 #70368 — 聊天输出中 Markdown 标题层级视觉区分度不足
- **标签**: feature / desktop / stale
- **热度**: 3 评论 · 2 👍
- **摘要**: Desktop/web GUI 中 H1/H3/H4 几乎同尺寸同粗细，H2 反而渲染为灰色更不突出。
- **为何重要**: 长期影响阅读体验，社区呼声较高（2 👍）。
- **链接**: [Issue #70368](https://github.com/anthropics/claude-code/issues/70368)

### 🟡 #88065 — 恢复旧 .jsonl transcript 后侧边栏不显示会话
- **标签**: bug / has repro / windows / ui / desktop / stale
- **热度**: 3 评论
- **摘要**: Windows 重装后手动迁移 transcript 数据，`sessions-index.json` 缺失导致侧边栏不显示任何会话（数据本身完好）。
- **为何重要**: 数据迁移场景下的可用性问题，影响从旧版本升级的用户。
- **链接**: [Issue #88065](https://github.com/anthropics/claude-code/issues/88065)

### 🟡 #99061 — Safeguards 阻止测试本地运行的应用
- **标签**: bug / macos / permissions / needs-repro
- **热度**: 1 评论
- **摘要**: Safeguards 标记了用户本地运行测试的应用中的 bug，但用户尝试证明时被阻止。
- **为何重要**: 安全机制与开发者正常调试流程的冲突。
- **链接**: [Issue #99061](https://github.com/anthropics/claude-code/issues/99061)

### 🟡 #98993 — Safeguards 在无明确原因时频繁触发
- **标签**: bug / macos / model / security / needs-info / needs-repro
- **热度**: 1 评论
- **摘要**: 用户反馈 Safeguards 在没有明确原因的情况下反复弹出。
- **为何重要**: 误报会严重打断开发流程，影响信任度。
- **链接**: [Issue #98993](https://github.com/anthropics/claude-code/issues/98993)

### 🟡 #98893 — Project 通知未接收
- **标签**: bug / needs-info
- **热度**: 2 评论
- **摘要**: 用户未收到 Project 的任何通知。
- **链接**: [Issue #98893](https://github.com/anthropics/claude-code/issues/98893)

---

## 4. 重要 PR 进展（共 6 条，全部已合并/关闭）

| PR | 标题 | 说明 |
|---|---|---|
| [#100293](https://github.com/anthropics/claude-code/pull/100293) | Add HIPAA settings example | 新增 `examples/settings/` 下的 HIPAA 配置示例（`settings-hipaa.json`、`managed-mcp-hipaa.json`、`README-hipaa.md`），帮助有合规需求的组织限制会话内容外传 |
| [#85716](https://github.com/anthropics/claude-code/pull/85716) | fix(hookify): load rules from ancestor .claude | 修复 hookify 插件从祖先 `.claude` 目录加载规则时的静默绕过问题（Fixes #85613） |
| [#84747](https://github.com/anthropics/claude-code/pull/84747) | fix(hookify): enforce rule evaluation scope | 修复 hookify 中 `load_rules()` 在 `event=None` 时绕过事件过滤的逻辑漏洞，确保 Read/Browser 等工具仅触发 `all` 范围规则 |
| [#84711](https://github.com/anthropics/claude-code/pull/84711) | fix(security): yaml injection & symlink credential overwrite | 修复 YAML 注入与符号链接凭证覆盖漏洞（Fixes #76580），增加防御性检查 |
| [#84365](https://github.com/anthropics/claude-code/pull/84365) | fix(scripts): allow any user to prevent auto-close | 允许任何用户通过 👍/👎 反馈来阻止 issue 自动关闭（Fixes #79146） |
| [#84364](https://github.com/anthropics/claude-code/pull/84364) | fix(hookify): fail closed on exceptions | 修复 hookify pretooluse hook 中的异常处理漏洞——异常时不再以 status 0 放行，而是拒绝执行（Fixes 安全相关 issue） |

> 📌 **趋势观察**: 本周 PR 全部集中在 **hookify 插件安全加固**与**合规/安全配置**方向，反映社区对插件安全与企业合规的重视。

---

## 5. 功能需求趋势

从本周 Issues 中可提炼出以下社区关注方向：

| 方向 | 相关 Issue | 关注度 |
|---|---|---|
| **网络安全 / 代理兼容** | #73564, #85757 | 🔴 高（均有 repro，阻断核心场景） |
| **Safeguards 误报/过度拦截** | #99061, #98993, #98966, #99000, #98936 | 🟡 中高（多条 issue 集中反映） |
| **UI / 体验细节** | #70368（标题层级）、#78002（快捷键布局）、#88065（侧边栏恢复） | 🟡 中 |
| **数据持久化与缓存** | #86075（Image 结果持久化 → cache 失效） | 🟡 中 |
| **Desktop 稳定性** | #85231（CoworkVMService 崩溃恢复） | 🟡 中 |
| **GitHub 集成** | #99070, #99064, #99053 等（多为 CLOSED/needs-info） | 🟢 低（多为无效/重复报告） |

---

## 6. 开发者关注点总结

1. **Safeguards 误报问题突出**: 近期大量 issue 反映安全护栏在正常开发流程中意外触发（本地测试、安全调查、无原因弹窗），开发者期望更智能的上下文感知或更宽松的白名单机制。

2. **代理/网络环境兼容性是痛点**: Cloud 环境 Chromium 与 Playwright MCP 在代理环境下的行为不一致（curl 正常但浏览器失败），暗示底层网络栈或代理配置传递存在问题。

3. **hookify 插件安全被重点关注**: 社区贡献者（alifakbxr）近期密集提交 hookify 安全修复 PR，覆盖规则加载绕过、异常放行、YAML 注入等，说明该插件存在较多安全隐患，且社区有活跃的维护者参与。

4. **Markdown 渲染体验待改进**: 标题层级视觉区分度问题已持续较长时间，社区有明确的 UI 改进诉求。

5. **数据迁移与恢复**: Windows 重装后 transcript 恢复场景下 `sessions-index.json` 缺失导致侧边栏空白，提示数据层与索引层的解耦仍需加强。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Thinking Process:

1.  **Understand the Goal**: The user wants a Chinese daily report for the OpenAI Codex community dynamics on `2026-10-10`, based on provided GitHub data (Releases, Issues, PRs). The persona is a technical analyst focused on AI development tools.

2.  **Analyze the Input Data**:
    *   **Date of report**: 2026-10-10 (data covers updates mostly around 2026-10-09).
    *   **Releases**:
        *   `rust-v0.162.1` (Bug fixes: TUI crash with async multi-line questions, background server/CLI feature mismatch).
        *   `rust-v0.163.0-alpha.4` (Release).
        *   `rust-v0.163.0-alpha.2` (Release).
    *   **Issues (selected top 30 by comments)**:
        *   #51601 (114 comments, 30 👍): Windows app sandbox setup fails with sharing violation (Windows sandbox issue).
        *   #24103 (18 comments, 10 👍): Official Meta Ads MCP fails OAuth login with invalid_client_metadata.
        *   #47270 (15 comments): No ChatGPT browser route prevents Chrome and built-in browser tab discovery.
        *   #50771 (9 comments, 2 👍): Codex keeps stopping or losing the task before work is done (model behavior).
        *   #41164 (9 comments): bundled_plugins_marketplace_resolve_failed / plugin_marketplace_folder_write_failed on Windows.
        *   #42006 (8 comments, 1 👍): Windows desktop app crashes when in-app Browser route is torn down.
        *   #52033 (8 comments): node_repl.exe fails runtime validation with ERROR 32 sharing violation on Windows.
        *   #37738 (7 comments, 1 👍): Browser Use blocks localhost despite Allow browsing permission.
        *   #47941 (6 comments): Linux sandbox cannot re-exec Codex inside bwrap.
        *   #24777 (6 comments, 12 👍): Add scriptable Codex Cloud environment and task lifecycle management (enhancement).
        *   #49790 (6 comments, 3 👍): clicking steer does nothing.
        *   #48369 (6 comments, 2 👍): Send button remains disabled globally after OpenAI usage is exhausted.
        *   #26819 (5 comments, 6 👍): Add keyboard shortcuts for quickly switching reasoning effort and model.
        *   #52564 (5 comments): Feature request: persistent ChatGPT-style supervisor for Codex threads.
        *   #52407 (5 comments, 2 👍): Windows Dots: CUA MXC launcher fails with HRESULT 0x80070003.
        *   #52583 (4 comments): Windows sandbox fails before Get-Location: node_repl.exe sharing violation.
        *   #52503 (4 comments): Repeated approvals after Always allow, nonpending cards, and lost long-running upload results.
        *   #41175 (4 comments, 3 👍): Linux sandbox: node child_process.spawnSync/execFileSync returns EPERM after child exits successfully.
        *   #34970 (4 comments): apply_patch fails on Windows with multiple writable roots.
        *   #25274 (4 comments, 2 👍): Suggested prompts are cached but not shown for ChatGPT Pro account.
        *   #23787 (3 comments, 10 👍): Recovery tool for Codex App 0.130→0.131 startup crash (SQLx checksum drift).
        *   #50111 (CLOSED, 3 comments): Connected app tools unavailable: Google Drive, Notion and GitHub.
        *   #51921 (3 comments): Browser tool crashes on startup: node_repl kernel exited unexpectedly.
        *   #52573 (3 comments): GPT-6.1 Sol Ultrafast is not showing up (model availability).
        *   #52342 (3 comments): New chat fails with "Failed to load workspace settings" / DeviceCheck token generation fails on macOS.
        *   #23631 (2 comments, 1 👍): Remote Codex projects should render Markdown/HTML files like local projects.
        *   #52470 (2 comments, 2 👍): ChatGPT Work Send button disabled — DeviceCheck token generation failed on macOS.
        *   #50576 (2 comments): Possible cybersecurity false positive blocking authorized local integration review.
        *   #52684 (2 comments): Crash after sign-in in windows-updater.node.
        *   #52377 (2 comments, 2 👍): Windows: browser control trusted Node child exits before connecting to Edge.
    *   **PRs (top 20 by comments, mostly copyberry[bot])**:
        *   #52707: Migrate Windows MXC sandbox to split MXC crates.
        *   #52702: Retry bootstrap GETs through system proxy after request failures.
        *   #52700: Update exec-server stable compatibility baseline to Codex 0.162.1.
        *   #52696: Fix marketplace path matching for Windows junctions.
        *   #52689: Forward per-turn Cyber access programs to Guardian.
        *   #52686: Add opt-in retention for turn tool outputs.
        *   #52685: Preserve code mode cancellation during output serialization.
        *   #52682: Validate Windows sandbox accounts before password repair.
        *   #52681: Reject reserved Serde JSON keys in code mode.
        *   #52679: Add timeout-aware exec-server configuration reads.
        *   #52676: Refresh persisted capability roots from owner-provided configuration.
        *   #52674: Move exec-server test fixture into shared test support.
        *   #52671: Add retention annotations to submitted tool outputs.
        *   #52661: Prevent brokered credential aliases from bypassing MITM hooks.
        *   #52660: Handle completion events in either order in shell snapshot tests.
        *   #52659: Add an opt-in feature for subagent model context defaults.
        *   #52652: Bound local exec-server output draining after process exit.
        *   #52648: Limit daemon feature compatibility checks to explicit CLI overrides.
        *   #52640: Count interrupted goal continuations toward the no-activity limit.
        *   #52637: Add experimental thread item lookup by ID.

3.  **Drafting the Report Structure**:

    *   **Header**: Title, Date (2026-10-10), Source (openai/codex).
    *   **1. 今日速览 (Today's Overview)**:
        *   Summarize key points: Codex released `v0.162.1` fixing critical TUI and server compatibility bugs, and alpha versions `v0.163.0-alpha.4` are in progress.
        *   Community issues are heavily focused on Windows sandbox crashes (especially sharing violations on `node_repl.exe`), browser integration issues, and model behavior interruptions.
        *   PRs are heavily focused on security (cyber access, credential aliases, MITM hooks), Windows sandbox stability, and exec-server enhancements (retention, timeouts, test fixtures).
    *   **2. 版本发布 (Releases)**:
        *   `v0.162.1`: Fixes TUI crash with async multi-line questions, fixes background server/CLI compatibility mismatch.
        *   `v0.163.0-alpha.4` and `alpha.2`: Pre-release versions, focusing on ongoing testing and development.
    *   **3. 社区热点 Issues (Top 10 Key Issues)**:
        *   Need to select 10 high-impact ones. Let's prioritize high comments, high likes, or systemic issues.
        *   *Issue 1*: #51601 - Windows sandbox setup fails with sharing violation (High comments: 114, likes: 30). Critical blocker for Windows users.
        *   *Issue 2*: #24103 - Official Meta Ads MCP fails OAuth login (18 comments). Integration pain point for MCP users.
        *   *Issue 3*: #50771 - Codex keeps stopping or losing the task before work is done (9 comments). Core AI agent loop reliability issue.
        *   *Issue 4*: #47270 - Browser use cannot discover tabs (15 comments). Critical for desktop browser automation.
        *   *Issue 5*: #24777 - Scriptable Codex Cloud environment and task lifecycle management (6 comments, 12 👍). Highly requested feature for enterprise/devops.
        *   *Issue 6*: #41175 - Linux sandbox node spawn EPERM after child exits (4 comments, 3 👍). Technical sandbox bug.
        *   *Issue 7*: #48369 - Send button remains disabled globally after usage exhausted (6 comments). UX issue.
        *   *Issue 8*: #26819 - Add keyboard shortcuts for switching reasoning effort/model (5 comments, 6 👍). Popular productivity feature request.
        *   *Issue 9*: #52564 - Persistent ChatGPT-style supervisor for Codex threads (5 comments). Advanced agent orchestration request.
        *   *Issue 10*: #52573 - GPT-6.1 Sol Ultrafast not showing up (3 comments). Model availability/UX issue.
        *   (Add links and brief explanation of why it's important).
    *   **4. 重要 PR 进展 (Top 10 Key PRs)**:
        *   Select 10 PRs that represent major directions (security, sandbox, exec-server, developer experience).
        *   *PR 1*: #52686 & #52671 - Add opt-in retention for turn tool outputs / retention annotations. (Allowing tools to mark outputs for retention in history).
        *   *PR 2*: #52681 - Reject reserved Serde JSON keys in code mode. (Security/Deserialization safety).
        *   *PR 3*: #52661 - Prevent brokered credential aliases from bypassing MITM hooks. (Security).
        *   *PR 4*: #52707 - Migrate Windows MXC sandbox to split MXC crates. (Windows sandbox architecture).
        *   *PR 5*: #52682 - Validate Windows sandbox accounts before password repair. (Sandbox stability).
        *   *PR 6*: #52696 - Fix marketplace path matching for Windows junctions. (Windows filesystem compatibility).
        *   *PR 7*: #52679 - Add timeout-aware exec-server configuration reads. (Backend reliability).
        *   *PR 8*: #52659 - Add an opt-in feature for subagent model context defaults. (Subagent optimization).
        *   *PR 9*: #52648 - Limit daemon feature compatibility checks to explicit CLI overrides. (Daemon/server stability).
        *   *PR 10*: #52637 - Add experimental thread item lookup by ID. (API surface expansion).
    *   **5. 功能需求趋势 (Feature Request Trends)**:
        *   Summarize the main themes from the issues:
            *   *Windows & Sandbox Stability*: Massive amount of feedback on Windows sandbox crashes, sharing violations, and browser integration.
            *   *Agent Orchestration & Supervision*: Requests for persistent supervisors (#52564), scriptable cloud CLI (#24777), and subagent context control (#52659).
            *   *Developer Experience & Productivity*: Keyboard shortcuts for model/reasoning switching (#26819), remote file rendering (#23631), and better MCP integration (#24103).
            *   *Model Behavior & Reliability*: Concerns over the agent stopping early (#50771) and model availability (#52573).
    *   **6. 开发者关注点 (Developer Pain Points & Focus Areas)**:
        *   Cross-platform consistency (especially Windows sandbox vs Linux sandbox).
        *   Security and credential management (MITM hooks, OAuth flows, Serde key safety).
        *   Tool output lifecycle management (how long outputs are kept, retention flags).
        *   Desktop app stability (crashes on torn down browser routes, SQLx migrations, DeviceCheck issues on macOS).

4.  **Refining Language and Tone**:
    *   Professional, concise, structured, suitable for technical developers.
    *   Translate technical terms accurately (e.g., "sharing violation" -> "共享冲突" or "共享违规", "bwrap" -> "bwrap 沙箱", "Serde JSON keys" -> "Serde JSON 键", "MITM hooks" -> "中间人劫持钩子").
    *   Ensure all links are preserved and formatted nicely.

Let's double check some translations:
- `node_repl.exe fails runtime validation with ERROR 32 sharing violation` -> `node_repl.exe 运行时验证失败，报错 32（共享冲突）`
- `apply_patch fails on Windows with multiple writable roots` -> `apply_patch 在具有多个可写根目录的 Windows 上失败`
- `bwrap` -> Linux sandbox bubblewrap (bwrap).
- `MCP` -> Model Context Protocol.
- `DeviceCheck` -> Apple's DeviceCheck framework.
- `Cyber access programs` -> 网络安全访问计划 (likely related to Codex's safety/guardrails).

Let's write down the content section by section.

### Section 1: 今日速览
*   Codex 发布了稳定版 `v0.162.1`，重点修复了 TUI 多行异步提问崩溃及后台服务器与 CLI 默认配置不一致导致的启动失败问题。
*   社区反馈中，Windows 平台的沙箱稳定性问题（尤其是 `node_repl.exe` 的共享冲突和沙箱初始化失败）依然是被关注和投诉最多的痛点。
*   开发者提交了大量关于安全加固（如 MITM 防护、Serde 反序列化安全）、工具输出生命周期管理（retention 标注）以及 exec-server 增强的 PR，表明项目正朝着更安全、更可控的企业级方向演进。

### Section 2: 版本发布
*   **rust-v0.162.1**
    *   **修复 TUI 崩溃**：修复了异步多行提问时 TUI 崩溃的问题，完整保留了换行符和超链接目标。
    *   **修复启动失败**：修复了由于运行中的后台服务器功能设置与 CLI 默认值差异导致的启动失败，增强了兼容性检查。
    *   链接：`openai/codex` Releases page (specifically tag `rust-v0.162.1`).
*   **rust-v0.163.0-alpha.4 / alpha.2**
    *   处于 Alpha 测试阶段的预览版本，包含多项底层调整，正在向正式版迭代。

### Section 3: 社区热点 Issues (Top 10)
Choose 10 most critical/interesting ones:
1.  **#51601 - Windows 应用沙箱初始化失败（共享冲突）**
    *   为什么重要：Windows 版本 `26.1002.51308` 更新后，沙箱环境配置直接失败，导致所有命令无法执行。这是当前 Windows 用户面临的最大阻�问题（114条评论，30个赞）。
    *   链接: `https://github.com/openai/codex/issues/51601`
2.  **#24103 - 官方 Meta Ads MCP OAuth 登录失败**
    *   为什么重要：官方提供的 MCP 服务在 Codex 中无法完成 OAuth 授权，报 `invalid_client_metadata`，阻碍了第三方工具集成（18条评论，10个赞）。
    *   链接: `https://github.com/openai/codex/issues/24103`
3.  **#47270 - 浏览器工具无法发现 Chrome 和内置浏览器标签页**
    *   为什么重要：macOS 上的 Codex Desktop 浏览器使用（Browser Use）完全失效，无法发现和控制浏览器标签，直接影响 Web 自动化工作流（15条评论）。
    *   链接: `https://github.com/openai/codex/issues/47270`
4.  **#50771 - Codex 在任务完成前频繁停止或丢失任务**
    *   为什么重要：核心 Agent 循环行为问题。模型在承认错误、给出下一步计划后无故停止，需要用户手动输入“继续”才能执行，严重影响开发效率（9条评论，2个赞）。
    *   链接: `https://github.com/openai/codex/issues/50771`
5.  **#24777 - 增加可脚本化的 Codex Cloud 环境与任务生命周期管理**
    *   为什么重要：高价值的企业级功能需求（12个赞）。用户希望拥有完整的 CLI/API 来进行环境发现、任务分发和会话监控，而非仅限于单次命令执行。
    *   链接: `https://github.com/openai/codex/issues/24777`
6.  **#41175 - Linux 沙箱中 Node 子进程在成功退出后返回 EPERM 错误**
    *   为什么重要的底层 Bug：在沙箱内，Node.js 的 `spawnSync` 在子进程已成功执行并捕获 stdout 后，父进程却报 EPERM 权限错误退出，属于典型的沙箱隔离副作用（4条评论，3个赞）。
    *   �

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>



# Gemini CLI 社区动态日报 (2026-10-10)

> **分析师视角**：今日 Gemini CLI 社区活跃度极高，版本迭代聚焦于安全加固与体验微调，而社区讨论的核心正从“基础功能实现”向“Agent 智能、稳定性与大规模开发效率”深挖。子代理（Subagent）的行为边界、可见性以及工具调用的鲁棒性是当前开发者最关心的议题。

---

### 1. 今日速览
*   **版本更新**：Gemini CLI 发布了 `v0.64.0-preview.1` 预览版，主要通过 Cherry-pick 引入了安全补丁，消除了命令标志中的误报问题。
*   **社区核心痛点**：开发者反馈集中在 **Agent 卡死/无响应**（如通用代理挂起、交互式提示符卡顿）以及 **子代理的“虚假成功”反馈**（掩盖了实际中断）。
*   **技术趋势**：社区正积极推动 **AST（抽象语法树）感知工具**的应用，以解决大上下文 token 膨胀和文件读取精度问题。

---

### 2. 版本发布
#### `v0.64.0-preview.1` (Patch Release)
*   **更新核心**：针对 `v0.6

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



好的，这是为您整理的 2026-10-10 GitHub Copilot CLI 社区动态日报。

---

### **1. 今日速览**

Copilot CLI 今日发布了 v1.0.96-0 版本，重点优化了交互体验与权限管理透明度。社区讨论热点集中在 BYOK 模式的多模型切换、沙箱路径权限问题以及 MCP 工具集成等高级功能上，反映了用户对灵活性和稳定性的强烈需求。

### **2. 版本发布**

**v1.0.96-0** (最新预发布版)
*   **改进**:
    *   交互式会话在 Git 仓库中能更快到达输入提示符。
    *   时间线现在会明确显示每个权限决定是由用户、辅助权限策略、托管策略还是无人值守回退做出的。
*   **修复**:
    *   `/add-dir` 命令现在能为当前会话中添加的目录授予沙箱访问权限。
    *   修复了 `/user` 命令的相关问题。

**v1.0.95** (稳定版)
*   **改进**:
    *   在 macOS 上，当可用时使用原生 Microsoft Entra broker 进行认证，并提供浏览器回退方案。
    *   `copilot config` 命令现在支持 `sandbox.credential.injectHosts` 配置键，并在 Bash、Zsh 和 Fish 中提供键补全。
    *   `--context` 参数现在适用于新建和恢复的 ACP 会话，而不是静默使用默认或上次保存的上下文级别。
*   **修复**:
    *   修复了 `--context` 参数在 ACP 会话中的行为。

**链接**: [v1.0.96-0](https://github.com/github/copilot-cli/releases/tag/v1.0.96-0), [v1.0.95](https://github.com/github/copilot-cli/releases/tag/v1.0.95)

### **3. 社区热点 Issues**

以下是10个最受关注的 Issue，按重要性排序：

1.  **#3709 - 允许在单个会话中切换多种模型，包括 BYOK/本地提供商** (34👍, 9💬)
    *   **重要性**: 高。这是目前社区最强烈的呼声之一，直接限制了 BYOK 模式的可用性。用户希望在一次会话中能自由切换不同来源的模型。
    *   **链接**: https://github.com/github/copilot-cli/issues/3709

2.  **#3355 - 为 Claude Opus 4.6 允许配置上下文窗口（200K vs 1M）** (4👍, 5💬)
    *   **重要性**: 中高。直接影响深度技术会话的效率，当前限制导致频繁的自动摘要。
    *   **链接**: https://github.com/github/copilot-cli/issues/3355

3.  **#4686 - Node.js OOM 崩溃（约37分钟后）** (4💬)
    *   **重要性**: 高。一个严重的稳定性问题，涉及 libuv 句柄泄漏，导致会话完全不可用。
    *   **链接**: https://github.com/github/copilot-cli/issues/4686

4.  **#5076 - `/add-dir` 未将目录加入沙箱允许列表** (4💬)
    *   **重要性**: 中高。直接影响沙箱功能的核心安全性和可用性。
    *   **链接**: https://github.com/github/copilot-cli/issues/5076

5.  **#3035 - 工具可调用的 `cwd`（等价于 TUI `/cwd`）** (3💬)
    *   **重要性**: 中。增强脚本和自动化能力，允许技能或工具动态改变工作目录。
    *   **链接**: https://github.com/github/copilot-cli/issues/3035

6.  **#2536 - Atlassian MCP 每次启动 CLI 都需要重新授权** (3👍, 3💬)
    *   **重要性**: 中。影响与 Atlassian 产品集成的工作流效率。
    *   **链接**: https://github.com/github/copilot-cli/issues/2536

7.  **#5103 - BYOK: 子智能体总是使用会话的 wire API，导致跨模型系列失败** (新)
    *   **重要性**: 中高。BYOK 模式下的一个关键限制，使得协调不同 API 的模型变得困难。
    *   **链接**: https://github.com/github/copilot-cli/issues/5103

8.  **#5102 - 沙箱化 git 无法使用与 Copilot/gh 签名不同的凭据** (新)
    *   **重要性**: 中。限制了在沙箱环境中使用特定 Git 凭据（如 fine-grained PAT）的能力。
    *   **链接**: https://github.com/github/copilot-cli/issues/5102

9.  **#5101 - `--add-github-mcp-tool issue_write` 导致无 MCP 工具可用** (新)
    *   **重要性**: 中。新功能引入的回归问题，影响了特定 MCP 工具的添加。
    *   **链接**: https://github.com/github/copilot-cli/issues/5101

10. **#5091 - 会话队列挂起所有提示，并不断尝试重连已连接的 MCP** (新)
    *   **重要性**: 中高。导致会话完全卡死的严重 bug。
    *   **链接**: https://github.com/github/copilot-cli/issues/5091

### **4. 重要 PR 进展**

**#5093 - 安装脚本：验证与下载 tarball 匹配的校验和条目**
*   **功能/修复**: 此 PR 修复了安装脚本中的一个安全漏洞。该脚本的校验和验证可能报告成功，但实际上并未验证下载的 tarball，原因包括使用 `--ignore-missing` 导致的空验证和校验和文件不匹配。此修复确保了完整性检查的有效性。
*   **链接**: https://github.com/github/copilot-cli/pull/5093

### **5. 功能需求趋势**

从社区讨论中，可以提炼出以下最关注的功能方向：

*   **BYOK 模式的深度增强**: 这是当前最核心的需求方向，包括多模型切换（#3709）、跨模型系列的子智能体支持（#5103）以及独立的 Git 凭据管理（#5102）。
*   **沙箱与权限管理的精细化**: 用户希望对沙箱有更细粒度的控制，包括目录访问（#5076）、路径授权（#5098）和外部进程权限（#4516）。
*   **MCP 集成的稳定与扩展**: 对 MCP 服务器的易用性（如大小写不敏感匹配 #5050）、认证持久化（#2536）以及工具添加的可靠性（#5101, #3052）有大量反馈。
*   **性能与稳定性**: 尤其是内存泄漏（#4686）和长时间运行会话的稳定性（#5100）是关键痛点。
*   **用户体验优化**: 包括更直观的权限决策可视化（v1.0.96-0）、命令补全（#939）和历史记录导航（#4313）。

### **6. 开发者关注点**

开发者反馈中的高频痛点和需求总结如下：

*   **灵活性与控制权**: 开发者，特别是高级用户和 BYOK 模式的使用者，渴望对模型选择、API 端点、认证方式和工具行为有更大的控制权。当前的限制被视为主要瓶颈。
*   **开箱即用的可靠性**: 社区报告了多种导致会话无法使用或崩溃的稳定性问题（OOM、事件交付失败、MCP 重连循环）。确保核心功能的稳定是当务之急。
*   **安全与权限的透明度**: 用户需要清晰地了解 Copilot CLI 在权限和沙箱方面的决策和行为，既要有能力限制风险，也要有手段确保必要的功能正常工作。
*   **与外部工具链的集成**: 对 Git、MCP 服务器等外部工具集成的平滑度和可靠性有持续的需求和反馈。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

Thinking Process:

1.  **Understand the Goal**: The user wants a daily report (dated 2026-10-10) for the OpenCode community (`github.com/anomalyco/opencode`) based on provided GitHub data (Issues, Releases, PRs). The report must be in Chinese, structured, concise, and professional, tailored for technical developers/analysts.

2.  **Analyze the Input Data**:
    *   **Date**: 2026-10-10 (The report date, data updated mostly on 2026-10-09).
    *   **Releases**: None in the past 24 hours ("无").
    *   **Issues (Top 30 by comments)**:
        *   #54095: Cannot connect to API: self signed certificate (11 comments, OPEN, triaging).
        *   #51856: MCP Client advertises elicitation.form capability but never handles elicitation/create requests, causing tool calls to hang and timeout (10 comments, OPEN, 👍: 2).
        *   #51466: multiple reasoning_opaque values received in a single response. Only one thinking part per response is supported (7 comments, CLOSED).
        *   #53607: mcp: V2 does not import V1 MCP OAuth credentials from mcp-auth.json (5 comments, CLOSED).
        *   #52363: OpenAI models disappear when OpenCode Zen or Go is connected (5 comments, OPEN).
        *   #52761: V2: summary compaction still reads almost nothing from the prompt cache (5 comments, OPEN).
        *   #51020: [v2] Silent part persistence failure — message/part rows never written after sidecar startup (4 comments, OPEN).
        *   #54018: opencode v2 add project does not support symlinks (4 comments, CLOSED).
        *   #53614: [2.0] sessions: long-running processes started outside the harness are invisible (3 comments, CLOSED).
        *   #51916: Custom home screen logo (slot or setting; V1 home_logo has no V2 equivalent) (3 comments, OPEN, 👍: 2).
        *   #54156: Google Vertex ignores CLOUDSDK_CONFIG when locating ADC credentials (3 comments, CLOSED).
        *   #53611: Show running subagents under the prompt (3 comments, CLOSED).
        *   #54205: mcp: remote server {env:...} header credentials resolve empty until service restart (3 comments, CLOSED).
        *   #53599: for some reason it started talking about south korea (3 comments, CLOSED).
        *   #50257: desktop: model picker shows "No reasoning" for all V2 models — capabilities.reasoning is never set (3 comments, OPEN, 👍: 2).
        *   #54016: MCP client drops tool params with JSON Schema union types (3 comments, CLOSED).
        *   #54193: v2 session header has no terminal toggle button (3 comments, CLOSED).
        *   #50710: mcp: Windows service registers zero MCP servers from global config (3 comments, OPEN, 👍: 1).
        *   #54145: `/connect` shows providers that are disabled in the config (3 comments, OPEN).
        *   #54111: free tier: custom subagents rejected even via official CLI (3 comments, OPEN).
        *   #54183: web UI on mobile safari: send button is clipped (3 comments, CLOSED).
        *   #53616: mcp: `opencode mcp auth` fails with `client_id may not be blank` for plugin-managed auth (2 comments, CLOSED).
        *   #54019: Home renders empty (no projects/sessions) although the HTTP API returns them (serve) (2 comments, CLOSED).
        *   #50771: Fetch method in codemode can access the host (2 comments, OPEN, 👍: 1).
        *   #54200: agent: frontmatter description starting with '[' silently drops the agent (AgentNotFoundError) (2 comments, OPEN).
        *   #54014: Session shows 'working' forever when a provider stream goes silent (2 comments, CLOSED).
        *   #53514: let plugins call tools and read resources on the engine's MCP connections (2 comments, OPEN).
        *   #54007: command `@` includes go through the Read tool's 50 KB, 2000-line and 2000-character caps (2 comments, CLOSED).
        *   #54008: bash permission patterns match only each command's own text (2 comments, CLOSED).
        *   #54006: desktop: new sessions ignore default_agent and root model (2 comments, CLOSED).
    *   **PRs (Top 20 by comments/updates)**:
        *   #48182: docs: add opencode-token-norm to ecosystem (CLOSED).
        *   #48179: fix(web): resync sessions after mobile reconnects (CLOSED).
        *   #48177: fix(web): show sessions in Home for Windows subpaths (CLOSED).
        *   #48172: docs(ecosystem): add opencode-terminal to plugins section (CLOSED).
        *   #48167: fix(cli): print explicitly requested --help to stdout (CLOSED).
        *   #48162: fix(tui): exit cleanly when startup probes cannot reach the server (CLOSED).
        *   #48161: fix(client): back off reconnects when the stream never connects (CLOSED).
        *   #48160: fix(core): clarify the read tool's offset validation error (CLOSED).
        *   #48159: fix(core): hint when the skill tool is called with an agent name (CLOSED).
        *   #48154: feat(app): add manual refresh for the session file tree (CLOSED).
        *   #48149: fix(cli): Add trailing newline to subcommand help output (CLOSED).
        *   #48148: fix(cli): support auto permissions when attaching (CLOSED).
        *   #48145: fix(core): always generate lockfile to avoid repeated startup installs (CLOSED).
        *   #48143: fix(app): restore project and session sync across browsers (CLOSED).
        *   #48137: docs(ecosystem): add AllaiGate model router (CLOSED).
        *   #48136: docs(ecosystem): add opencode-fold-tools (CLOSED).
        *   #48132: fix(core): report malformed glob patterns (CLOSED).
        *   #48125: fix(app): restore session timeline scroll position after tab switches (CLOSED).
        *   #48124: feat(plugin): add select dialog shortcuts (CLOSED).
        *   #48117: fix(provider): resolve OpenRouter route-modifier suffixes in model IDs (CLOSED).

3.  **Drafting the Report Structure**:

    *   **Header**: OpenCode 社区动态日报 (2026-10-10)
    *   **1. 今日速览**: Summarize the key highlights (V2 migration issues, MCP bugs, UI/UX improvements, ecosystem expansion). Note that there are no new releases today, but high activity in issue triaging and PR cleanups.
    *   **2. 版本发布**: Clearly state "无" (None) as requested ("无则省略", but a brief note is fine, or just skip to issues if strictly "无则省略". Let's write "无最新版本发布，社区焦点集中在 V2 版本的 Bug 修复和 MCP 协议兼容性改进上。").
    *   **3. 社区热点 Issues (Pick 10 most important ones)**:
        *   Need to select the ones that are most technically significant, have high comments/likes, or represent critical bugs.
        *   *Candidate 1*: #54095 (Self-signed certificate issue - high comments 11, network problem).
        *   *Candidate 2*: #51856 (MCP elicitation capability bug causing hangs - 10 comments, 👍 2, critical for MCP tool use).
        *   *Candidate 3*: #51020 (V2 part persistence failure - message/part rows not written - 4 comments, critical data persistence bug).
        *   *Candidate 4*: #52363 (OpenAI models disappear when Zen/Go connected - 5 comments, provider registry bug).
        *   *Candidate 5*: #52761 (V2 summary compaction prompt cache issue - 5 comments, performance/cost issue).
        *   *Candidate 6*: #50257 (Desktop model picker shows "No reasoning" for V2 - 3 comments, 👍 2, capability mapping bug).
        *   *Candidate 7*: #54145 (`/connect` shows disabled providers - 3 comments, security/access control regression).
        *   *Candidate 8*: #54111 (free tier custom subagents rejected - 3 comments, permission/feature gate bug).
        *   *Candidate 9*: #54016 (MCP tool params with JSON Schema union types dropped - 3 comments, data parsing bug).
        *   *Candidate 10*: #50710 (Windows service registers zero MCP servers - 3 comments, 👍 1, platform specific config bug).
        *   *Candidate 11 (Feature)*: #51916 (Custom home screen logo - 👍 2, V1 to V2 feature gap).
        *   Let's write a brief summary for each of the 10 selected, highlighting why it's important (e.g., MCP core protocol bugs, data persistence, provider integration, security/UX).
    *   **4. 重要 PR 进展 (Pick 10 important PRs)**:
        *   The PRs are mostly "automated-pr-cleanup" but contain real fixes and features. Let's look closely at what they do.
        *   *PR 1*: #48179 & #48177 (Web session sync and Windows subpaths - fixing session display issues).
        *   *PR 2*: #48162 (TUI clean exit on server probe failure).
        *   *PR 3*: #48161 (Client back off reconnects when stream fails).
        *   *PR 4*: #48160 (Core: clarify read tool offset validation error).
        *   *PR 5*: #48159 (Core: hint when skill tool called with agent name).
        *   *PR 6*: #48154 (App: manual refresh for session file tree).
        *   *PR 7*: #48148 (CLI: support auto permissions when attaching).
        *   *PR 8*: #48145 (Core: always generate lockfile to avoid repeated installs).
        *   *PR 9*: #48125 (App: restore session timeline scroll position).
        *   *PR 10*: #48124 (Plugin: add select dialog shortcuts).
        *   *PR 11*: #48117 (Provider: resolve OpenRouter route-modifier suffixes).
        *   Let's select 10 and explain their technical contribution.
    *   **5. 功能需求趋势**:
        *   MCP (Model Context Protocol) ecosystem stability (elicitation, OAuth credential import, JSON schema union types, server registration).
        *   V2 Migration issues (persistence, model capabilities, home screen customization, terminal toggle).
        *   Provider integration and model routing (OpenAI disappearing, OpenRouter suffixes, Google Vertex ADC).
        *   UI/UX refinement (mobile Safari layout, session scroll position, file tree refresh).
    *   **6. 开发者关注点 (Pain points & high-frequency demands)**:
        *   MCP tooling fragility (hangs, credential migration, schema parsing).
        *   V2 data persistence and state synchronization (sidecar DB writing, multi-browser/multi-client sync).
        *   Configuration and permission granularity (disabled providers showing up, bash permission patterns).
        *   Desktop vs CLI behavior discrepancies (default_agent, model picker capabilities).

4.  **Refining Language and Tone**:
    *   Keep it professional, objective, structured, and easy to scan.
    *   Translate technical terms accurately (e.g., "self signed certificate" -> "自签名证书", "elicitation" -> " elicitation/form 能力/请求", "compaction" -> "上下文压缩/整理", "sidecar" -> "旁车进程/ Sidecar 进程", "lockfile" -> "锁文件").
    *   Ensure all links are correctly formatted with the issue/PR numbers.

Let's double-check the translations and technical concepts:
*   "multiple reasoning_opaque values received in a single response" -> 单次响应中收到多个 `reasoning_opaque` 值。
*   "summary compaction still reads almost nothing from the prompt cache" -> 摘要上下文压缩（compaction）几乎未读取任何提示缓存。
*   "message/part rows never written after sidecar startup" -> Sidecar 进程启动后未写入 `message`/`part` 数据行（数据持久化静默失败）。
*   "capabilities.reasoning is never set" -> 模型能力（capabilities.reasoning）未正确设置，导致桌面端模型选择器全部显示“无推理能力”。
*   "OpenRouter route-modifier suffixes" -> OpenRouter 路由修饰符后缀（如 `:floor`, `:nitro`）。

Let's write down the selected 10 Issues with detailed reasoning:
1.  **#54095 [OPEN]**: 自签名证书连接问题。用户在固定网络下遇到 API 连接失败，而无线热点正常。这表明底层网络环境或证书信任链配置（如 Node.js 的 `--use-system-ca`）是痛点。11条评论，关注度极高。
2.  **#51856 [OPEN]**: MCP 客户端声明了 `elicitation.form` 能力，但不处理 `elicitation/create` 请求，导致工具调用挂起和超时。这是 MCP 协议实现的核心 Bug，严重阻碍 MCP 工具的可用性。10条评论，2个赞。
3.  **#51020 [OPEN]**: V2 静默持久化失败。桌面端 Sidecar 进程启动后，`opencode.db` 中不再写入任何 `message` 或 `part` 行，导致会话数据丢失。这是致命的数据安全 Bug。
4.  **#52363 [OPEN]**: OpenAI 模型在连接 OpenCode Zen 或 Go 后消失。提供者注册表（provider registry）未正确注册 `openai` 提供者，影响 ChatGPT OAuth 登录后的正常使用。
5.  **#52761 [OPEN]**: V2 摘要压缩（compaction）几乎不读取 Prompt 缓存。这会导致 API 成本增加和延迟上升，属于性能倒退问题。
6.  **#50257 [OPEN]**: 桌面端模型选择器对所有 V2 模型显示“无推理能力”。根因是 `capabilities.reasoning` 未设置，导致具备推理能力的模型（如 deepseek-v4.1-flash）被误判，影响用户选择。3条评论，2个赞。
7.  **#54145 [OPEN]**: `/connect` 命令显示已被配置禁用的提供者。这破坏了企业环境通过 `enabled_providers` 限制模型使用的需求，属于权限控制倒退。
8.  **#54111 [OPEN]**: 免费版（contributor-free）自定义子智能体（subagents）被拒绝并报鉴权错误，而内置子智能体正常。这阻碍了社区自定义 Agent 的普及。
9.  **#54016 [CLOSED]**: MCP 客户端丢弃带有 JSON Schema 联合类型（如 `type: ["string", "null"]`）的工具参数，导致 JSON 解析失败（Unexpected EOF）。这是 MCP 工具参数传递的常见陷阱。
10. **#50710 [OPEN]**: Windows 服务注册全局配置中的 MCP 服务器数量为零。虽然配置解析正常，但运行时服务未注册，是特定平台的棘手 Bug。

Let's write down the selected 10 PRs with details:
1.  **#48179 / #48177**: Web 端会话修复。包括移动端重连后的会话同步，以及 Windows 子路径下 Home 会话列表的正确显示。解决了 UI 层面的数据同步和路径兼容问题。
2.  **#48162**: TUI 修复。当后台服务器正在选举或冷启动时，TUI 的启动探测无法到达服务器，改进了其优雅退出逻辑，避免卡死或报错混乱。
3.  **#48161**: 客户端重连退避。修复了事件流客户端在流从未连接成功时，以固定 1 秒延迟重试的问题，增加了退避策略，减轻服务器压力。
4.  **#48160**: 核心工具优化。澄清了 Read 工具 `offset` 参数的校验错误提示，解决模型幻觉负值（如 `offset: -1`）时的报错不明确问题。
5.  **#48159**: 核心工具提示。当模型调用 `skill` 工具时传入了子智能体（agent）的名字，给出明确的提示，而不是通用的 "Unable to load skill"。
6.  **#48154**: App 增强。为会话文件树添加了手动刷新按钮，解决外部修改文件或 watcher 事件丢失时，UI 视图滞后的痛点。
7.  **#4814

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

Thinking Process:

1.  **Understand the Goal**: The user wants a Chinese daily report for the Pi community (specifically the `github.com/badlogic/pi-mono` repository, though the issues/PRs link to `earendil-works/pi`) dated October 10, 2026 (based on the prompt's date "2026-10-10"). The report needs specific sections: Today's Summary, Releases (none, skip or note), Hot Issues (pick 10), Important PRs (pick 10), Feature Trends, and Developer Pain Points.

2.  **Analyze the Input Data**:
    *   **Date**: 2026-10-10 (data updated up to 2026-10-09).
    *   **Releases**: None in the past 24 hours.
    *   **Issues (top 30 by comments)**:
        *   #7547 (79 comments): Windows usage - how to use Pi on Windows, issues faced. (High interest, community guidance needed).
        *   #10031 (27 comments): Pi sporadically stuck in "Working..." when thinking is stopped with `<esc>`. (Bug, annoying UX).
        *   #10480 (17 comments): Direct openai connection not recognizing manual usage limit reset. (Bug, billing/quota issue).
        *   #8643 (12 comments): Bedrock: OpenAI models reject images nested in toolResult.content. (Feature/bug fix for Bedrock).
        *   #9773 (11 comments): `before_provider_request` does not fire for summarization/compaction requests. (API hook bug).
        *   #6300 (11 comments): Windows: Input line is redrawn on every keystroke. (Windows TUI bug).
        *   #10497 (11 comments): OpenRouter Error: 400 (context length exceeded). (Integration bug).
        *   #10267 (8 comments): Prompt text contributed in `before_agent_start` is dropped on runs without a user prompt, re-billing the whole prompt. (Critical bug for extensions, token waste).
        *   #9656 (5 comments): Mouse wheel scrolls prompt history instead of transcript in fullscreen on Windows + Zellij. (TUI UX bug).
        *   #10393 (5 comments): Copying text inside Pi CLI is broken in xterm-based terminals. (TUI UX bug).
        *   #10645 (5 comments): `resizeImage` resolves null in compiled (Bun) executables — all image attachments omitted since 0.87.x. (Critical bug for Bun/standalone binary users).
        *   #10250 (4 comments): tmux 3.6/3.6a fills input box with hex color garbage. (TUI theme bug).
        *   #8125 (4 comments): openai-codex: transient WebSocket failure pins session to SSE. (Network resilience bug).
        *   #10606 (3 comments): RPC: prompt sent during a previous prompt's preflight is acknowledged then silently dropped. (RPC race condition).
        *   #10082 (3 comments): Resuming a session will not render correct context level (llama.cpp). (Context management bug).
        *   #10157 (3 comments): Gemini tool-call thought signatures are dropped with AI Studio OpenAI-compatible endpoint. (Gemini integration bug).
        *   #6000 (3 comments): `/reload` doesn't pick up changes to an extension's imported `.mjs/.cjs` files. (Dev experience bug).
        *   #10697 (3 comments): Transport failures during streaming surface as a bare `terminated` because `error.cause` is dropped. (Error handling/debugging issue).
        *   #10386 (3 comments): Durable: host coding-agent extensions (AgentSession-backed runtime or hook parity). (Feature request for durable extensions).
        *   #10720 (3 comments): Kimi Code diverges from the official CLI and Moonshot, missing native tool loading. (Provider integration).
        *   #10749 (2 comments): packages/durable: cross-process event delivery for watch()/watchEvents. (Feature request).
        *   #10750 (2 comments): packages/durable README: document post-resume aborted salvage entries. (Documentation).
        *   #10743 (2 comments): Clipboard issues in ChromeOS Crostini. (Platform bug).
        *   #10746 (2 comments): Fullscreen: selecting inside a markdown table cell copies the whole row. (TUI rendering bug).
        *   #10742 (2 comments): Delayed OSC 10/11/4 color-query replies leak into input over Windows SSH/ConPTY. (Terminal protocol bug).
        *   #10741 (2 comments): Groq Qwen3.8 27B fails with HTTP 400 because Pi sends the `developer` role. (Model compatibility bug).
        *   #10719 (2 comments): Bun-installed pi + Node runtime: every extension fails with `Cannot find module 'jiti'`. (Installation/runtime bug).
        *   #10639 (2 comments): `sendCustomMessage({ triggerTurn: true })` sends the first request without the system prompt. (SDK/API bug).
        *   #10737 (2 comments): MCP OAuth: refresh rejected with access_denied leaves the server failed instead of asking for sign-in. (MCP auth bug).
        *   #10652 (2 comments): OpenRouter GPT Image 2.5 Flare generation fails because Pi uses chat completions. (Image generation API routing bug).
    *   **PRs (top 20)**:
        *   #10747: feat: allow custom cloudflare ai gateway domains and access credentials.
        *   #10672: feat(ai,coding-agent): list only the OpenRouter models a key may use.
        *   #10745: Option to disable cursor repositioning with mouse (`editorClickMovesCursor`).
        *   #9126: fix(coding-agent): settle tool results before disposal.
        *   #10739: fix(coding-agent): emit before_agent_start for runs started by custom messages (fixes #10267).
        *   #10734: fix(ai): drop orphaned tool results in transformMessages.
        *   #10733: SYN-9001: add PR dashboard demo note.
        *   #10730: fix(tui): render CJK emphasis next to fullwidth punctuation (fixes #10154).
        *   #9155: fix(coding-agent): prevent prompt and tree navigation overlap.
        *   #9222: fix(coding-agent): reject reload while running or compacting.
        *   #10165: fix(coding-agent): track discarded user bash output.
        *   #10663: feat(cli): pi auth --continue.
        *   #10726: fix: ignore Node watch notifications in codemode.
        *   #10722: 搭建前端聊天界面基础框架 (Frontend chat UI basic framework).
        *   #10718: fix(coding-agent): include system prompt in --export HTML.
        *   #10716: fix(env): include stderr in pi-env startup errors.
        *   #10715: fix(ai): enable explicit context cache for Qwen token plan models.
        *   #10703: feat(durable): let extensions annotate aborted tool results.
        *   #9301: feat(coding-agent): confirm device-code browser and clipboard actions.
        *   #9461: fix(ai): defer streamed tool argument parsing until read.

3.  **Drafting the Sections**:

    *   **1. 今日速览 (Today's Summary)**:
        *   Pi 社区活跃度极高，过去24小时内产生了大量关于 Windows 兼容性、TUI 渲染、RPC 模式稳定性以及 Durable 扩展能力的讨论。
        *   重点关注：Windows 平台使用问题（Issue #7547 引发近80条评论）、Pi 停止思考时卡死（Issue #10031）以及 Bun 编译版图像处理失效（Issue #10645）。
        *   PR 方面，社区正在积极修复 `before_agent_start` 触发逻辑（PR #10739）、OpenRouter 模型过滤（PR #10672）以及 TUI 的 CJK 渲染问题（PR #10730）。

    *   **2. 版本发布 (Releases)**:
        *   过去24小时无新版本发布。

    *   **3. 社区热点 Issues (Top 10 Hot Issues)**:
        *   Need to pick 10 significant ones, explain why they matter and community reaction.
        *   *Issue #7547 (Windows Usage Guide & Issues)*: Windows 用户基数大，但运行 Pi 的方式过多导致文档和 bug 修复优先级不明确。79条评论，社区呼声极高，急需官方指南。
        *   *Issue #10031 (Stuck in "Working..." on ESC)*: 用户报告按 ESC 停止思考后 Pi 卡死，必须重启，严重影响交互体验（自 v0.84.0 起出现）。27条评论，高频痛点。
        *   *Issue #10480 (ChatGPT Pro usage limit reset not recognized)*: 直连 OpenAI 时，手动重置订阅额度后 Pi 仍提示额度用尽，影响付费用户。 workaround 是重新登录。
        *   *Issue #10267 (Prompt re-billing / dropped in before_agent_start)*: 扩展在 `before_agent_start` 贡献的 prompt 在后台任务、续跑等无用户 prompt 场景下丢失，导致重复计费（re-billing the whole prompt）。对扩展开发者影响巨大。
        *   *Issue #10645 (resizeImage fails in Bun binaries)*: 编译版（Bun）Pi 中图片附件全部丢失（自 0.87.x 起），影响多模态能力在 standalone binary 的使用。
        *   *Issue #6300 (Windows input line redraw bug)*: Windows TUI 每次按键都会重绘输入行，导致字符换行。11条评论，基础 TUI 兼容性问题。
        *   *Issue #9773 (before_provider_request hook skip compaction)*: 钩子 `before_provider_request` 在摘要/压缩请求中不触发，导致 hook 功能不完整。
        *   *Issue #10497 (OpenRouter 400 Context Length)*: 使用 OpenRouter 注入文件上下文时偶尔报 400 超长，影响第三方模型集成。
        *   *Issue #10719 (Bun installed pi + Node runtime jiti error)*: Bun 安装的 Pi 用 Node 启动时扩展报 `Cannot find module 'jiti'`，影响 Bun 用户生态。
        *   *Issue #10652 (OpenRouter image gen model routing)*: OpenRouter 的图像生成模型被错误发送到 chat/completions 端点导致 404。

    *   **4. 重要 PR 进展 (Top 10 Important PRs)**:
        *   *PR #10739 (emit before_agent_start for custom message runs)*: 修复了 #10267，解决自定义消息启动时丢失系统 prompt 和 sections 处理程序的问题，保护 prompt 缓存和计费。非常重要。
        *   *PR #10672 (List only OpenRouter models a key may use)*: 优化 OpenRouter 集成，只展示用户密钥有权使用的模型，并获取准确的上下文/价格信息。
        *   *PR #10747 (Custom Cloudflare AI Gateway domains and credentials)*: 允许自定义 Cloudflare AI Gateway 的域名和访问凭证，提升网关灵活性。
        *   *PR #10730 (render CJK emphasis next to fullwidth punctuation)*: 修复 TUI 中文加粗（`**`）渲染 Bug，解决标点符号导致的加粗失效问题。
        *   *PR #10745 (Option to disable cursor repositioning with mouse)*: 新增 `editorClickMovesCursor` 设置，允许用户禁用点击重定位光标，改善鼠标选择体验。
        *   *PR #9126 (settle tool results before disposal)*: 修复工具执行期间销毁运行时导致持久化数据不完整（缺 tool result）的问题。
        *   *PR #10734 (drop orphaned tool results in transformMessages)*: 修复了历史记录中孤立 tool result 的裁剪问题，避免发送给 LLM 的消息结构异常。
        *   *PR #10718 (include system prompt in --export HTML)*: 修复了命令行 `--export` 导出 HTML 缺失系统 prompt 的问题，与交互式 `/export` 对齐。
        *   *PR #10715 (explicit context cache for Qwen token plan models)*: 修复 Qwen Token Plan 模型缓存命中率 0% 的问题，确保 `cache_control` 正确发送。
        *   *PR #10663 (feat: pi auth --continue)*: 新增 `pi auth --continue` 命令，作为认证流程的通用续接入口，支持 base64url JSON payload。

    *   **5. 功能需求趋势 (Feature Trends)**:
        *   *Windows 兼容性与 TUI 优化*: Windows 用户的输入法、鼠标交互、终端兼容性（如 tmux/Zellij/Crostini）是当前最突出的痛点。社区期待更开箱即用的 Windows 支持。
        *   *Provider/模型集成与网关增强*: 对 OpenRouter、Cloudflare、Kimi Code、Qwen Token Plan、Gemini 等模型的精细支持（如缓存、角色映射、模型过滤、图像生成路由）成为高频需求。
        *   *Durable 扩展与跨进程能力*: `@earendil-works/pi-durable` 的跨进程事件分发、扩展生命周期钩子对齐（如 `afterTool` 注释中止结果、`before_agent_start` 触发）是扩展生态的热点。
        *   *RPC/SDK 稳定性与开发体验*: 解决异步竞争（prompt 丢弃、重叠准备）、Bun/Node 运行时兼容性、热重载（`/reload`）对 secondary 文件的加载等开发级痛点。

    *   **6. 开发者关注点 (Developer Pain Points / High-frequency Demands)**:
        *   *Windows 平台碎片化*: Issue #7547 提出的核心问题——Pi 在 Windows 上的运行路径太多（WSL、原生、各种终端），开发者难以确定修复优先级，急需官方明确的 Windows 最佳实践指南。
        *   *API Hook 触发完整性*: `before_provider_request` 和 `before_agent_start` 在特定运行流程（压缩、自定义消息、后台任务）中不触发，导致扩展开发受限和潜在的计费/缓存失效。
        *   *多模态与编译二进制兼容性*: `resizeImage` 在 Bun 编译环境失效，导致图像附件完全无法在 standalone 模式下使用，限制了多模态在生产环境部署。
        *   *TUI 细节交互*: 输入重绘、复制粘贴失效、鼠标滚轮逻辑混乱、CJK 渲染错位等 TUI 微交互问题持续被反馈，表明 TUI 的跨平台和跨终端鲁棒性仍需加强。

4.  **Refine Language and Structure**:
    *   Ensure the tone is professional, concise, and tailored for technical developers (specifically AI tool developers).
    *   Include links to the GitHub issues/PRs as requested ("每个条目附上 GitHub 链接").
    *   Format nicely with bullet points and bold text for readability.

Let me double check the exact links format. The prompt provides links like `earendil-works/pi Issue #7547`. I will use the standard GitHub URL format: `https://github.com/earendil-works/pi/issues/7547` or just the shorthand `earendil-works/pi Issue #7547` if exact URLs aren't fully specified in the prompt, but standard GitHub URL format is better: `https://github.com/earendil-works/pi/issues/7547` (and same for PRs: `/pull/10739`). Let's construct standard URLs: `https://github.com/earendil-works/pi/issues/<number>` and `https://github.com/earendil-works/pi/pull/<number>`.

Let's do a quick translation of the summary points to make sure they sound authoritative.

*Today's Summary translation:*
今日 Pi 社区展现出极高的活跃度，核心焦点集中在 Windows 平台的兼容性讨论（Issue #7547 引发近 80 条评论）以及多项关键的 Bug 修复。社区贡献者积极推动了 `before_agent_start` 触发逻辑（PR #10739）、OpenRouter 模型过滤（PR #10672）和 TUI 中文渲染（PR #10730）等重要改进，同时也有大量关于 RPC 稳定性和 Durable 扩展能力的深度讨论。

Let's refine the selected 10 issues:
1. **#7547 Windows 平台使用指南与兼容性问题** (79 comments) - Windows 是巨大市场，但缺乏统一运行标准，社区急需官方最佳实践。
2. **#10031 按 ESC 停止思考时 Pi 卡死在 "Working..."** (27 comments) - 核心交互流程 Bug，严重影响用户体验，需紧急定位。
3. **#10480 直连 OpenAI 不识别手动额度重置

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>



# Qwen Code 社区动态日报 (2026-10-10)

> **数据来源**：GitHub `QwenLM/qwen-code` 仓库（统计周期：过去 24 小时内更新）
> **分析师视角**：Qwen Code 正处于从单机 CLI 向**托管代理（Managed Agent）平台**转型的关键架构期。今天的动态清晰地展示了这一主线：底层架构提案（#12380）正在快速落地为具体的生命周期与运行时规范（Stage D/G/H），同时社区对 XML 工具解析鲁棒性、会话状态恢复以及大上下文性能优化展开了深度治理。

---

### 1. 今日速览
* **版本迭代与 Host 修复**：Qwen Code 发布了 `v0.25.1-preview.1` 预览版与 `v0.25.0-nightly` 夜间版，核心聚焦于 **Agents 模块中远程 Host 替换时的绑定丢失修复**，提升了多环境连接的稳定性。
* **Managed Agent 架构主线推进**：社区核心开发者（如 `doudouOUC`、`wenshao`、`yiliang114`）正围绕 Issue #12380 推进多阶段架构落地。重点包括：Kubernetes 工具运行时交付（#13395）、权威化 Session 历史与写入 fencing（#12952），以及后台进程观察与流控（#13533）。
* **核心体验痛点治理**：针对 XML 工具调用恢复（#13492, #13787）、会话恢复状态粘连（#6710, #13765）以及大上下文压缩（#13788）的修复与讨论成为社区最活跃的技术焦点。

---

### 2. 版本发布
*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



# DeepSeek TUI (Codewhale) 社区动态日报
**日期：** 2026-10-10  
**数据来源：** [codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale) (DeepSeek TUI 核心仓库)

---

### 1. 今日速览

今天是 DeepSeek TUI 社区极其活跃的一天，核心焦点在于 **v0.10.2 版本的集成与收尾**，伴随着大量的底层架构重构（Runtime 拆分 RS 系列）和关键 Bug 修复。社区层面，由 SparkofSpike 发起的**中文汉化组召集令（#6804）**获得了极高的关注度，标志着社区自发解决多语言文档同步痛点的正式启动。

---

### 2. 版本发布

*   **最新版本：** 过去 24 小时内无新正式版本发布。
*   **版本状态：** **v0.10.2 候选版**正在紧密筹备中。主要特性合并 PR #6907 已关闭，新增了终端停靠栏（Terminal dock）、Shell 等待控制、运行时恢复等功能。同时，打包团队正在紧急修复 crates.io 10 MiB tarball 体积上限的发布阻塞问题（#6910）。

---

### 3. 社区热点 Issues（Top 10）

以下按关注度和社区影响力挑选了 10 个最值得关注的 Issue：

#### 1. 【本地化】#6804 召集：成立汉化组 (6条评论)
*   **摘要：** 面对海量英文文档 AI 翻译质量“只能意会”的痛点，发起人 SparkofSpike 呼吁成立志愿者汉化组，用爱发电，同步翻译和维护高质量的开源项目文档，降低简中用户门槛。
*   **重要性：** 社区驱动多语言生态的关键一步。
*   [链接](https://github.com/codewhale-hq/Codewhale/issues/6804)

#### 2. 【性能回退】#6728 CPU 使用率回退：v0.9.12 (空闲) -> v0.10.0 (高负载) (2条评论)
*   **摘要：** FreeBSD 15.0 用户反馈，从 v0.9.12 升级到 v0.10.0 后，即使在空闲状态下 CPU 占用率也显著上升，疑似引入了严重的性能或线程轮询回归。
*   **重要性：** 直接影响生产环境的运行成本与稳定性。
*   [链接](https://github.com/codewhale-hq/Codewhale/issues/6728)

#### 3. 【可靠性】#6842 Session Journal 无边界：Compaction 但保留所有旧版本在 RAM 中 (1条评论)
*   **摘要：** 用户报告会话压缩（compaction）虽然退役了实时消息，但将每个被取代的版本都保留在内存中，导致长时间运行时内存占用无界增长。
*   **重要性：** 内存泄露或未释放，属于高优先级的可靠性 Bug。
*   [链接](https://github.com/codewhale-hq/Codewhale/issues/6842)

#### 4. 【TUI/UX】#6652 TUI 滚动在长时间运行后变得像果冻一样卡顿 (2条评论)
*   **摘要：** 长时间运行后，TUI 界面的滚动性能严重下降，出现部分渲染延迟、不同步的视觉撕裂感。
*   **重要性：** 基础交互体验受损，影响长任务的实时监控。
*   [链接](https://github.com/codewhale-hq/Codewhale/issues/6652)

#### 5. 【工作流可见性】#6944 后台长时间运行工作不可见，Full Access 阻塞后台 API (1条评论)
*   **摘要：** 长时间运行的命令转入后台后，前端无感知；且 Full Access 模式下，单个后台 API 的卡死会阻塞整个工作流。
*   **重要性：** 影响 Agent 任务编排的透明度和安全控制。
*   [链接](https://github.com/codewhale-hq/Codewhale/issues/6944)

#### 6. 【Agent 交互】#6866 MCP 启动服务器失败时未提醒模型 (1条评论)
*   **摘要：** 设计讨论：当 MCP 服务器在会话启动失败（或恢复）时，模型由于获取不到工具信号，会尝试调用不存在的工具。需要设计一套失败/恢复的通知机制。
*   **重要性：** 提升 Agent 异常自愈和工具边界感知能力。
*   [链接](https://github.com/codewhale-hq/Codewhale/issues/6866)

#### 7. 【模型支持】#6923 针对 Gemini 429 错误的自动等待与重试机制 (2条评论)
*   **摘要：** 针对调用 Gemini API 触发 429 限流错误时，请求自动暂停并重试上一个任务的增强建议。
*   **重要性：** 优化多云模型供应商的容错体验。
*   [链接](https://github.com/codewhale-hq/Codewhale/issues/6923)

#### 8. 【安全与透明度】#6931 每一个 Bash/Shell 操作都应可 inspected（检查）和 stoppable（停止）
*   **摘要：** 用户反馈在 0.10.1/0.10.2 候选版中，运行中的 Shell 卡片在 UI 中折叠隐藏，用户无法直观看到“正在运行、已过期或无输出”的状态，也无法随时终止。
*   **重要性：** 增强 Agent 执行层操作的可控性与安全性。
*   [链接](https://github.com/codewhale-hq/Codewhale/issues/6931)

#### 9. 【打包发布】#6910 发布阻塞：在首次上传前需防护 crates.io 10 MiB tarball 上限 (0条评论)
*   **摘要：** 0.10.1 版本由于 TUI 二进制和

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>



以下是为您整理的 **2026-10-10 ComfyUI 社区动态日报**。作为技术分析师，我将从核心功能进展、社区痛点、 hot issues 以及技术趋势等维度为您梳理过去一天的核心动态。

---

### 1. 今日速览

今天 ComfyUI 社区的核心动态围绕 **循环工作流缓存优化、显存与显存流式传输（VRAM Streaming）稳定性修复，以及量化模型（如 ConvRot/QuaRot）的兼容性讨论** 展开。核心开发者团队（如 `lorenzozanee`、`ootsby`、`christian-byrne` 等）提交了多项关键的底层优化 PR，旨在解决循环节点缓存失效、显存竞争条件（Race Condition）以及自定义节点 ID 冲突等核心问题。此外，社区对原生 LoRA Stack 加载节点和新型逻辑节点的合并表示高度关注。

---

### 2. 版本发布

*   **最新版本：** 过去 24 小时内无新版本发布（`无`）。
*   社区目前主要基于 `v0.39.2` 及以上开发版本进行测试，部分用户已在使用 `v0.37.0` 稳定版，但主流开发焦点集中在解决特定硬件（如 Windows XPU、AMD gfx1031）的兼容性 Bug 上。

---

### 3. 社区热点 Issues（Top 10）

以下是过去一天中评论和关注度最高的 10 个 Issue，涵盖了性能瓶颈、量化支持、硬件兼容性等核心痛点：

#### 🔴 #14618 [潜在 Bug] 每次更改提示词时 ComfyUI 都会重新加载模型
*   **GitHub 链接：** [Comfy-Org/ComfyUI Issue #14618](https://github.com/Comfy-Org/ComfyUI/issues/14618)
*   **摘要：** 用户反馈在更改 prompt 时，模型会在无任何配置改动的情况下反复重新加载，严重拖慢迭代速度。社区评论高达 120 条，有 11 个赞，表明这是当前最普遍的性能痛点之一。

#### 🔴 #15255 [Bug] Dynamic VRAM streaming 崩溃导致所有生成中断（CUDA OOM）
*   **GitHub 链接：** [Comfy-Org/ComfyUI

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama 社区动态日报（2026-10-10）

> 数据来源：github.com/ollama/ollama

---

## 一、今日速览

今日无新版本发布，社区讨论集中在**推理后端稳定性**与**API 兼容性**两条主线。MLX（Apple Silicon）连续出现多起 runner panic 报告，同时 CUDA Blackwell、AMD Vulkan 等 GPU 后端问题持续发酵；OpenAI 兼容端点的行为缺陷（`max_tokens`、`reasoning_content`、响应 ID 空间）成为开发者集中吐槽的对象。此外，自动更新/自动升级机制带来的副作用（CUDA DLL 残留、磁盘占用）引发关注。

---

## 二、版本发布

过去 24 小时内**无新 Release**。不过社区反馈已指向 v0.40.x 系列存在的若干回归问题（详见下文 Issue #18856、#18909），建议关注后续修复版本。

---

## 三、社区热点 Issues（精选 10 条）

### 1. 🔴 MLX runner panic：qwen3.6:35b-mlx 在 0.40.x 回归
[#18856](https://github.com/ollama/ollama/issues/18856) · OPEN · bug/mlx · 👍4 · 评论 3
同一工作负载在 0.35.0 正常、0.40.0/0.40.1-rc0 崩溃，属于**明确回归**，且已获得最高点赞数，是今日最受关注的 bug。

### 2. 🔴 MLX runner 在 Mac mini M6 上持续 panic
[#18885](https://github.com/ollama/ollama/issues/18885) · OPEN · bug · 评论 1
16GB 内存设备加载小模型 `gemma4:e2b-mlx` 即报 `mlx runner failed: panic`。与上一条叠加，说明 MLX 路径存在普遍性稳定性问题，直接影响 Apple Silicon 用户体验。

### 3. 🔴 qwen3moe + Blackwell（sm_120）自动开启 Flash Attention 导致崩溃
[#18276](https://github.com/ollama/ollama/issues/18276) · OPEN · bug
RTX 5070 Ti 笔记本上 `qwen3-coder:30b` 显存分配成功却在 warmup 阶段以 `0xc0000409` 退出，错误信息误导为显存问题。属新硬件适配的关键阻塞项。

### 4. 🟠 AMD Radeon 780M Vulkan 后端回归（≥0.32.10）
[#17748](https://github.com/ollama/ollama/issues/17748) · OPEN · bug · 👍3 · 评论 3
大模型提交命令时 `ErrorDeviceLost`，同硬件在旧版本正常。跨版本回归已持续两个月未解决，AMD 集显用户受影响面广。

### 5. 🟠 Windows 自动更新残留 `ggml-cuda.dll.tmp` 导致 GPU 失效
[#18712](https://github.com/ollama/ollama/issues/18712) · OPEN · bug
自动更新后 CUDA 后端 DLL 变成 0 字节 `.tmp`，NVIDIA GPU 被静默降级为 CPU。暴露更新流程的原子性问题。

### 6. 🟠 mistral-medium-3.5:128b 内存占用异常
[#18770](https://github.com/ollama/ollama/issues/18770) · OPEN · needs more info
80GB 模型在 128GB M4 Mac 上占用 127GB 内存且速度降至「每分钟 1 词」，疑与量化/卸载策略有关，是高端硬件用户的典型痛点。

### 7. 🔴 【Billing】账户卡在 Stripe 自动重试循环，客服无响应
[#18683](https://github.com/ollama/ollama/issues/18683) · OPEN · 评论 2
无法升级/切换订阅，直接影响 Ollama Cloud 商业化体验。虽非技术 bug，但对付费用户影响严重。

### 8. ⭐ 长期呼声：原生 TTS 模型支持（如 Bark）
[#1234](https://github.com/ollama/ollama/issues/1234) · OPEN · feature request · 👍8
2023 年提出至今仍在更新，是当前获赞最高的功能请求之一，代表社区对**多模态输出能力**的持续期待。

### 9. 🟠 OpenAI 兼容端点静默忽略 `reasoning_content`
[#18534](https://github.com/ollama/ollama/issues/18534) · OPEN
按 DeepSeek 官方契约编写的客户端会丢失全部推理上下文，且无任何警告，属**协议保真度**问题。

### 10. 🟠 `/v1/chat/completions` 忽略 `max_tokens` 且覆盖 Modelfile 的 `num_predict`
[#18575](https://github.com/ollama/ollama/issues/18575) · CLOSED · needs more info
生成无法被限制，存在成本与资源失控风险，是 OpenAI 兼容层最常被提及的缺陷之一。

**其他值得关注**：
- [#18842](https://github.com/ollama/ollama/issues/18842) 拉取/更新模型 `max retries exceeded`（R2 存储链路）
- [#18655](https://github.com/ollama/ollama/issues/18655) 响应 ID 仅 `rand.Intn(999)` 共 999 种取值
- [#18890](https://github.com/ollama/ollama/issues/18890) 请求支持 d1-3B / d1-omni-600M 决策模型（报 `unsupported decision encoding`）
- [#18898](https://github.com/ollama/ollama/issues/18898) / [#18858](https://github.com/ollama/ollama/issues/18858) Gemma4:12b 与 clef-flash 加载报错

---

## 四、重要 PR 进展（精选 10 条）

### 1. 暂时移除本地模型兼容性迁移
[#18908](https://github.com/ollama/ollama/pull/18908) · CLOSED
背景迁移带来逐请求开销与 GC 压力（尤其影响 embedding 高并发场景），决定推迟到后续版本，属**性能回退修复**。

### 2. MLX 多模态 Embedding 支持
[#18820](https://github.com/ollama/ollama/pull/18820) · CLOSED
实现 EmbeddingGemma2 架构，`/api/embed` 支持按条目传入媒体，是**多模态检索**的重要基础能力。

### 3. MLX 新增 Kolibri 1 支持
[#18780](https://github.com/ollama/ollama/pull/18780) · OPEN（jmorganca）
官方维护者提交的新模型适配，值得关注。

### 4. 拆分 Mistral `[THINK]` 推理标签
[#18877](https://github.com/ollama/ollama/pull/18877) · OPEN
修复 Ministral-3 Reasoning 将思维链泄漏进正文的问题，与 Issue 侧多条 thinking 解析问题呼应。

### 5. Responses API 历史中接受自定义工具调用
[#18911](https://github.com/ollama/ollama/pull/18911) · OPEN
修复包含 `custom_tool_call` 的对话续写返回 HTTP 400，提升 OpenAI Responses 兼容度。

### 6. 修复 Windows 编译：定义 `NOMINMAX`
[#18660](https://github.com/ollama/ollama/pull/18660) · OPEN
`<windows.h>` 的 `min/max` 宏与 `std::min/max` 冲突导致编译失败，影响 Windows 构建。

### 7. 升级 seroval 至 1.6.2（CVE-2026-104846）
[#18907](https://github.com/ollama/ollama/pull/18907) · OPEN
安全依赖修复，虽作者未验证可达性，但属必要的供应链治理。

### 8. 保留 Olmo3 工具参数中的 Unicode
[#18906](https://github.com/ollama/ollama/pull/18906) · OPEN
修复 `splitArguments` 按 rune 起点偏移却只拷贝单字节，导致 `Zürich`、日文、emoji 等参数损坏。

### 9. qwen3.5 工具调用可能在 thinking 通道关闭前开启
[#18624](https://github.com/ollama/ollama/pull/18624) · OPEN
修正解析器先测部分标签、后测完整 `<tool_call>` 的顺序缺陷，避免工具调用体被误吞。

### 10. 丢弃未匹配的 thinking 关闭标签
[#18288](https://github.com/ollama/ollama/pull/18288) · OPEN
`<channel|>` 无前置开启标签时不再泄漏到正文，提升输出整洁度。

**其他 PR**：抑制 Claude Code 连接器警告 [#18878](https://github.com/ollama/ollama/pull/18878)；README 恢复 handy-ollama 中文教程链接 [#18905](https://github.com/ollama/ollama/pull/18905) / [#15070](https://github.com/ollama/ollama/pull/15070)；新增社区集成 Creatos [#18910](https://github.com/ollama/ollama/pull/18910)、AI Character Engine [#18904](https://github.com/ollama/ollama/pull/18904)；以及若干文档修正 [#18900](https://github.com/ollama/ollama/pull/18900)–[#18903](https://github.com/ollama/ollama/pull/18903)。

---

## 五、功能需求趋势

从全部 Issues 中可提炼出以下社区关注方向：

| 方向 | 代表 Issue | 说明 |
|---|---|---|
| **推理后端稳定性** | #18856、#18885、#18276、#17748 | MLX、CUDA Blackwell、Vulkan AMD 多点开花，是当前最高优先级 |
| **新模型支持** | #18890、#18850、#18760 | 决策模型（d1、basal-1.0）、云上新模型、编码格式扩展 |
| **多模态能力** | #1234、#18890 | TTS 原生支持、图像输入的决策模型 |
| **OpenAI API 兼容保真** | #18575、#18534、#18655、#18911 | 参数、字段、ID 空间、Responses API 全面对齐 |
| **推理/思考内容解析** | #18861、#18877、#18288、#18624 | thinking 标签的拆分、丢弃与状态机修复 |
| **运维体验** | #18909、#18712、#18842 | 自动升级可关闭、更新原子性、拉取重试 |

---

## 六、开发者关注点（痛点与高频需求）

1. **Apple Silicon（MLX）体验不稳**：多条 panic 报告且存在明确回归，Mac 用户是 Ollama 的核心群体，需优先处理。
2. **GPU 后端适配滞后**：Blackwell（sm_120）与 AMD Vulkan 问题长期未闭环，新硬件用户被迫回退 CPU。
3. **自动更新/自动升级「副作用」**：DLL 残留致 GPU 失效、自动下载占用 SSD，社区明确要求可关闭并提供空间提示。
4. **OpenAI 兼容层「形似神不似」**：`max_tokens` 失效、`reasoning_content` 被静默丢弃、响应 ID 仅 999 种取值——对依赖标准契约的下游框架是硬伤。
5. **生成边界不可控**：无法通过标准参数限制输出长度，带来成本与稳定性风险。
6. **云服务与计费支持**：Stripe 循环、手机号验证失败、客服无响应，付费转化链路存在阻塞。
7. **多语言/Unicode 正确性**：工具调用参数中的非 ASCII 字符损坏，影响非英语地区开发者。

**总体判断**：Ollama 正处于「新硬件 + 新模型 + 云服务」三线扩张期，但基础稳定性与协议保真度的欠账正在累积，建议官方优先收敛 MLX/GPU 回归问题，并系统性梳理 OpenAI 兼容层的参数语义。

---

*日报由 AI 工具分析生成，数据截至 2026-10-10。*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>



# llama.cpp 社区动态日报 (2026-10-10)

作为专注于 AI 开发工具的技术分析师，以下是为您整理的 llama.cpp 社区在 2026-10-10 的最新动态与深度分析。

---

### 1. 今日速览
今日 llama.cpp 社区活跃度极高，发布了多个版本（自 b11528 至 b11538），主要聚焦于 **CUDA 计算正确性修复（如 MSVC 下的舍入问题、OOB 写入）、OpenCL/A6X 编译修复、以及 Chat API 的重构**。社区议题方面，**量化模型上

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*