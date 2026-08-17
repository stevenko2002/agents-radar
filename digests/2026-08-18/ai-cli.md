# AI CLI 工具社区动态日报 2026-08-18

> 生成时间: 2026-08-17 22:16 UTC | 覆盖工具: 12 个

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

# 今日重點摘要（2026-08-18）
1. **Claude Code** 发布v2.1.234小版本，新增`CLAUDE_CODE_PROJECT_DIR_NAME`环境变量与`selection:clear`键位绑定功能，同时修复MCP服务器指令重复注入、子代理内存泄漏等历史高热度bug。
链接：https://github.com/anthropics/claude-code/releases/tag/v2.1.234
2. **OpenAI Codex** 发布0.148.0-alpha.21预览版，合入远程TUI工作区信任提示、Windows沙盒加固、TUI渲染性能优化等多项修复，新增桌面应用诊断工具。
链接：https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.21
3. **Qwen Code** 发布v0.21.13正式版与v0.21.11-nightly预览版，新增Web Shell拖拽/粘贴文本附件、对话分支功能，修复模型端点图片MIME兼容、新建文件权限配置等问题。
链接：https://github.com/QwenLM/qwen-code/releases/tag/v0.21.13
4. **Gemini CLI** 发布v0.56.0-nightly版本，修复SSR Agent的TypeScript编译配置问题，同时合并子代理终止原因保留、TUI无限卡死修复等关键PR。
链接：https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-nightly.20260817.g9a15c45fb
5. **llama.cpp** 发布b10455-b10472共4个小版本，修复AMD APU显存误判问题，优化SYCL量化拷贝与多GPU张量切分性能，新增Granite滑动窗口注意力模型支持。
链接：https://github.com/ggml-org/llama.cpp/releases
6. **ComfyUI** v0.33.2回移版本合入6项关键修复，包括Seedance 2.5 1080p分辨率支持、FishAudio语音合成节点、AOTriton内核启动验证修复等。
链接：https://github.com/Comfy-Org/ComfyUI/pull/15691
7. **Pi（CodeWhale）** 发布v0.9.9正式版，修复shell工具卡死会话的严重bug，支持DeepSeek V4分时动态定价，新增嵌套技能加载、OpenAI补全思维链预算字段通用化等优化。
链接：https://github.com/Hmbown/CodeWhale/releases/tag/v0.9.9

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据范围：github.com/anthropics/skills，截止 2026-08-18。PR 排序按评论数（原始数据中评论字段为 undefined，以下按数据呈现顺序及关联 Issue 热度综合排序）。

---

## 1. 热门 Skills 排行

| # | PR | Skill 名称 | 功能 | 讨论热点 | 状态 |
|---|-----|-----------|------|---------|------|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator / run_eval.py 修复 | 修复评估脚本始终报 0% recall 的核心缺陷，涉及 eval artifact 安装、Windows 流读取、触发检测、并行 worker | 直接对应 Issue [#556](https://github.com/anthropics/skills/issues/556)（12 评论、7 👍、10+ 独立复现），是当前最高优先级的工具链 bug | OPEN |
| 2 | [#514](https://github.com/anthropics/skills/pull/514) | document-typography | 对 AI 生成文档做排版质量控制：孤行/寡行、章节标题孤立、编号错位 | 覆盖"每个 Claude 生成的文档都存在但用户很少主动要求"的痛点，定位独特 | OPEN |
| 3 | [#568](https://github.com/anthropics/skills/pull/568) | servicenow | 覆盖 ServiceNow 全栈：ITSM/ITOM/ITAM/FSM/HRSD/CSM/SPM/SecOps/CSDM/IntegrationHub | 企业级广度最高，2026-08-12 仍活跃更新，企业用户关注度高 | OPEN |
| 4 | [#83](https://github.com/anthropics/skills/pull/83) | skill-quality-analyzer + skill-security-analyzer | 两个元 Skill：质量五维评估 + 安全分析 | 契合社区对 Skill 信任边界的强烈关注（见 Issue [#492](https://github.com/anthropics/skills/issues/492)，43 评论），属"元治理"方向 | OPEN |
| 5 | [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit | 交付前自审：机械文件校验 + 四维推理质量门，v1.3.0 | 对应 Proposal Issue [#1385](https://github.com/anthropics/skills/issues/1385)（4 评论），与 #83 形成互补的"质量门"赛道 | OPEN |
| 6 | [#486](https://github.com/anthropics/skills/pull/486) | odt | OpenDocument 创建/填充/解析为 HTML，触发词覆盖 ODT/ODS/ODF/LibreOffice | 填补开源文档格式空白，跨平台用户刚需 | OPEN |
| 7 | [#210](https://github.com/anthropics/skills/pull/210) | frontend-design（改进） | 提升前端设计 Skill 的清晰度与可执行性，确保每条指令在单轮对话内可完成 | 对 Skill 编写规范本身有示范意义，与 Issue [#202](https://github.com/anthropics/skills/issues/202)（8 评论）同源 | OPEN |
| 8 | [#723](https://github.com/anthropics/skills/pull/723) | testing-patterns | 全栈测试：Testing Trophy、AAA、React Testing Library、集成/E2E | 代码质量赛道，与 self-audit、skill-quality-analyzer 形成测试/审计矩阵 | OPEN |

---

## 2. 社区需求趋势

从 Issues 评论热度提炼出五条主线：

**① Skill 信任与安全边界（最热）**
- [#492](https://github.com/anthropics/skills/issues/492)（43 评论）：社区 Skill 冒用 `anthropic/` 命名空间，造成信任边界滥用。社区呼吁签名/命名空间隔离机制。
- [#412](https://github.com/anthropics/skills/issues/412)（6 评论）：提议 agent-governance Skill，覆盖策略执行、威胁检测、信任评分、审计轨迹。

**② Skill 共享与组织级协作**
- [#228](https://github.com/anthropics/skills/issues/228)（16 评论、8 👍）：要求组织内共享 Skill 库或直链分享，替代当前"下载 .skill → Slack → 手动上传"的低效流程。

**③ 评估与工具链可靠性**
- [#556](https://github.com/anthropics/skills/issues/556)（12 评论、7 👍）：`run_eval.py` 触发率 0%，导致描述优化循环"对噪声优化"。#1298、#1099、#1050 三个 PR 均为此而设。
- [#202](https://github.com/anthropics/skills/issues/202)（8 评论）：skill-creator 应从"开发者文档"改为"可执行操作指令"，提升 token 效率。

**④ 上下文与内存管理**
- [#1329](https://github.com/anthropics/skills/issues/1329)（9 评论）：提议 compact-memory Skill，用符号记法压缩长程 agent 状态。
- [#1487](https://github.com/anthropics/skills/issues/1487)（4 评论）：`claude-api` Skill 单次注入 ~156k token 耗尽上下文窗口，迫切需要懒加载。

**⑤ 企业平台与生态互操作**
- [#29](https://github.com/anthropics/skills/issues/29)（4 评论）：AWS Bedrock 适配诉求。
- [#16](https://github.com/anthropics/skills/issues/16)（4 评论）：将 Skill 暴露为 MCP，统一 AI 软件接口协议。
- [#1175](https://github.com/anthropics/skills/issues/1175)（4 评论）：SharePoint Online 文档处理时的访问控制与上下文安全。

---

## 3. 高潜力待合并 Skills

以下 PR 讨论活跃、关联 Issue 热度高，且修复/能力属"刚需"，近期落地可能性较大：

| PR | 关联 Issue 信号 | 落地理由 |
|----|----------------|---------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | [#556](https://github.com/anthropics/skills/issues/556)（12 评论、7 👍、10+ 复现） | 修复评估工具链的根本性失效，阻塞所有 Skill 描述优化，优先级最高 |
| [#1367](https://github.com/anthropics/skills/pull/1367) | [#1385](https://github.com/anthropics/skills/issues/1385)（4 评论 Proposal） | 已有完整 Proposal 背书，v1.3.0 成熟度高，与治理赛道呼应 |
| [#568](https://github.com/anthropics/skills/pull/568) | 2026-08-12 仍在更新 | 企业 ServiceNow 全栈覆盖，商业价值明确，维护活跃 |
| [#83](https://github.com/anthropics/skills/pull/83) | [#492](https://github.com/anthropics/skills/issues/492)（43 评论）安全议题 | 直接回应"信任边界"最热议题，元 Skill 复用价值高 |
| [#514](https://github.com/anthropics/skills/pull/514) | 无对应 Issue，但痛点普适 | 排版问题影响"每个生成文档"，差异化定位强 |
| [#538](https://github.com/anthropics/skills/pull/538) + [#541](https://github.com/anthropics/skills/pull/541) | [#12](https://github.com/anthropics/skills/issues/12)（4 评论、1 👍） | 修复大小写敏感与 `w:id` 冲突导致的文档损坏，属关键缺陷修复 |

---

## 4. Skills 生态洞察

> **当前社区在 Skills 层面最集中的诉求是"可信任的 Skill 治理与可靠的评估工具链"** —— 命名空间冒用（#492，43 评论）、`run_eval.py` 0% 触发（#556，12 评论）、skill-creator 规范化（#202，8 评论）三条主线同时指向同一痛点：社区贡献爆炸式增长后，亟需官方建立签名、命名空间隔离、评估可信度与质量门机制，让"第三方 Skill"从"可用"走向"可信赖"。

---

用户现在需要我生成2026-08-18的Claude Code社区动态日报，首先得按照要求的结构来，首先先理清楚给的数据是截至2026-08-17的对吧？因为数据是最新24小时到17号的，日报是18号的，所以开头要说明数据截至时间？
首先第一部分今日速览，要2-3句话，得抓重点：首先有小版本v2.1.234发布，加了两个小功能，然后社区那边最火的是啥？哦对，一堆Opus 4.8的安全过滤误报问题，还有之前的子代理、VSCode集成、OAuth登录的bug修复关闭，还有几个安全过滤的issue还在开着，还有开发者提的几个脚本和插件开发的PR合并了。对，速览要概括：首先今日Claude Code发布v2.1.234小版本，新增环境变量和清空选择键位功能；社区层面多起Opus 4.8模型触发的安全过滤误报问题成为焦点，同时多份历史高热度bug（子代理内存泄漏、VSCode集成异常、OAuth登录故障等）已标记为关闭，另有多个针对插件开发、脚本健壮性的PR完成合并。
然后第二部分版本发布，就是v2.1.234，两个更新点：第一个是新增可选环境变量`CLAUDE_CODE_PROJECT_DIR_NAME`，支持主机为每个会话设置独立的短名称项目转录目录；第二个是新增`selection:clear`键位绑定动作，支持用户绑定快捷键快速清空应用内选中内容。要准确，别加多余的。
第三部分社区热点Issues，要选10个最值得关注的，首先得排序，先看评论数、标签、重要性：
第一个肯定是#48680，那个MCP服务器指令每次会话都注入上下文的问题，8评论，1赞，bug，macOS，MCP，内存，已经关闭了，为什么重要？因为MCP生态是Claude Code扩展能力的核心，这个问题会导致marketplace的MCP服务指令无意义重复注入，浪费上下文窗口，影响使用体验，社区讨论多，现在已经修复关闭了。
然后第二个#71423，Windows上自动模式 spawned 低效子代理烧token要退款，8评论，bug，Windows，成本，模型，代理，关闭。重要吗？对，自动模式是很多用户用的，子代理无授权启动浪费token直接涉及用户成本，是核心痛点，社区反馈强烈，已经关闭说明修复了？
第三个#63687，Opus 4.8 1M上下文频繁tool_use malformed错误，7评论，5赞，bug，Windows，工具，模型，关闭。哦这个赞很高，5个赞，说明很多人遇到，用1M上下文的Opus用户都会碰到，工具调用失败直接影响使用，已经关了说明修复了。
第四个#60095，后台子代理退出后后台任务芯片还显示运行，停止按钮失效，7评论，bug，macOS，TUI，代理，关闭。这个也是高频问题，后台任务状态不同步，用户没法正确管理后台任务，影响TUI使用体验，已经修复关闭。
第五个#68065，顺序启动的后台代理通知路由到错误的代理ID，5评论，4赞，bug，代理，关闭。赞高，后台代理的通知错乱，用户没法对应任务结果，是代理模块的核心bug，已经修复。
第六个#71766，OAuth登录/刷新失败，UNABLE_TO_GET_ISSUER_CERT，3评论，bug，Windows+Linux，认证，安全，回归，关闭。这个影响所有用OAuth登录的用户，是登录故障，已经修复。
第七个#75160，那个Opus 4.8安全过滤误报， blocked 无人机密钥管理项目的README审查，OPEN，4评论，cyber标签，session halted。这个重要，因为现在一堆Opus 4.8的误报，这个是其中一个，影响合法开发工作，现在还是开的，社区在反馈。
第八个#75153，同样Opus 4.8误报， blocked 守护进程+进程扫描的构建任务，OPEN，4评论，和上面那个是一波的，都是安全过滤的假阳性，现在待修复。
第九个#72261，VSCode扩展忽略Claude环境设置，3评论，2赞，bug，macOS，IDE，VSCode，关闭。VSCode是很多用户用的IDE，环境设置不生效影响自定义配置，已经修复。
第十个#71594，会话限制错误，刚重置就提示超限，5评论，bug，Linux，API，关闭。影响API调用，会话使用异常，已经修复。
等下，要每个都说明为什么重要，社区反应，还要附链接。对，每个条目后面放链接。
然后第四部分重要PR进展，选10个，看给的PR：
第一个#87395，ralph-wiggum插件修复：用disable-model-invocation防止模型自行调用/ralph-loop命令，OPEN，2026-08-17更新的。重要吗？对，之前插件的前端元数据不支持，模型会无限循环调用这个命令，现在修复了，防止插件滥用。
第二个#79131，修复validate-settings.sh在无匹配小写frontmatter键时直接退出的问题，OPEN。重要吗？这个脚本是用户验证Claude Code设置的工具，之前会静默失败，现在修复了，能正确报错，提升开发者调试体验。
第三个#84004，修复插件开发中的frontmatter解析问题：只解析开头YAML块，拒绝没有闭合标记的文件，CLOSED。重要吗？之前的sed解析会被Markdown里的水平规则干扰，解析错误，现在修复了，提升插件开发的稳定性。
第四个#84003，修复脚本中顶层失败未正确传播的问题：之前.catch只打日志，现在返回失败状态，CLOSED。重要吗？之前的脚本失败会被忽略，导致后续流程异常，现在正确传播错误，提升自动化流程的可靠性。
第五个#83999，修复gh包装器的标志值验证问题：之前缺值的标志会被跳过，现在正确拒绝，CLOSED。重要吗？gh是GitHub CLI的包装，之前参数验证有漏洞，可能导致命令执行异常，现在修复了安全性。
第六个#83995，修复--add-label/--remove-label缺值时的报错问题，之前会触发unbound变量错误，现在正确验证，CLOSED。提升脚本的健壮性。
第七个#83993，修复comment-on-duplicates.sh的自引用问题：之前会把自己的issue标记为自己的重复，现在阻止自引用，CLOSED。避免自动化脚本产生无效数据。
第八个#83992，修复test-hook.sh的钩子决策验证问题：新增--expect参数，可以验证钩子是允许还是拒绝操作，之前无法 catch 允许危险操作的钩子，现在提升插件钩子的测试能力，CLOSED。
第九个#83990，修复test-hook.sh未检测jq依赖的问题：之前jq没装会误报输入是非法JSON，现在提前检查依赖，CLOSED。提升插件开发者的调试体验。
第十个#72451，修复init-firewall.sh中statsig.anthropic.com无法解析导致启动失败的问题，CLOSED。重要吗？devcontainer启动的时候因为过期的statsig域名解析失败整个脚本退出，现在移除了无效域名，解决开发容器启动故障。
哦对，还有#30692是容器隔离的例子，加了guard hook，不过前面的更优先？或者要不要换？不，用户要10个，就选上面这些，都是和开发者、用户直接相关的。
然后第五部分功能需求趋势，从所有issue里提炼，首先看标签：最多的几个方向：1. 安全过滤优化：现在一堆Opus 4.8的cyber误报，用户要求优化安全分类器的阈值，减少对合法开发场景（比如安卓root开发、密钥管理、进程扫描）的误拦截，这个是当前最热的诉求。2. 代理与子任务稳定性：很多issue是关于子代理的状态同步、后台任务管理、通知路由、自动模式 runaway 问题，用户希望子代理的行为更可控，状态更准确，避免token浪费。3. 跨平台IDE集成：VSCode扩展的问题很多，比如忽略环境设置、聊天面板执行错误、历史记录丢失，还有Windows平台的兼容性问题，用户希望IDE集成更稳定，支持更多自定义配置。4. 成本控制与透明度：有用户反映自动模式无授权启动子代理烧token、定价计算错误、会话限制误判，用户希望增加成本控制的开关，以及更透明的token消耗和计费反馈。5. 模型兼容性：Opus 4.8 1M上下文的工具调用错误，还有模型性能下降的问题，用户希望新模型的工具调用、长上下文稳定性更好。
然后第六部分开发者关注点，总结痛点和高频需求：1. 插件开发工具链完善：很多PR是修复插件开发的脚本、解析、测试问题，说明开发者对Claude Code的插件生态关注度高，希望有更稳定的开发、测试、调试工具。2. 安全过滤的可配置性：当前的cyber安全过滤器是服务器端强制触发，用户无法自定义白名单，导致合法工作被拦截，开发者希望增加本地/项目级的白名单配置能力。3. 后台任务与子代理的管控能力：用户希望可以更精细地控制子代理的启动权限、后台任务的生命周期，避免自动模式下的 runaway 行为造成资源浪费。4. 跨平台一致性：Windows、macOS、Linux上的TUI、IDE扩展、OAuth登录体验差异大，很多bug是平台特有的，开发者希望全平台的体验一致。
等下，还要注意语言是简洁专业，适合技术开发者，每个条目附GitHub链接，还有要说明数据是截至2026-08-17的，因为日报是18号的，数据是过去24小时到17号的。
哦对，开头要不要加个说明？比如「**Claude Code 社区动态日报 | 2026-08-18** | 数据截至 2026-08-17 24:00，来源：github.com/anthropics/claude-code」？
对，然后第一部分今日速览，要准确：
### 1. 今日速览
今日Claude Code发布v2.1.234小版本更新，新增项目目录命名环境变量与选择清空键位功能；社区层面Opus 4.8模型触发的安全过滤误报成为当前最热议问题，多起历史高热度子代理、IDE集成、认证相关bug已标记为关闭，同时多个针对插件开发健壮性与脚本安全性的PR完成合并。
然后第二部分版本发布：
### 2. 版本发布
#### v2.1.234（2026-08-17 发布）
1. 新增可选环境变量 `CLAUDE_CODE_PROJECT_DIR_NAME`：支持主机为每个独立会话配置短名称的项目级转录目录，解决多会话场景下目录命名过长的问题。
2. 新增 `selection:clear` 键位绑定动作：用户可通过自定义快捷键快速清空应用内的选中内容，提升TUI操作效率。
链接：https://github.com/anthropics/claude-code/releases/tag/v2.1.234
然后第三部分社区热点Issues，10个，每个要说明为什么重要，社区反应，链接：
### 3. 社区热点 Issues（共筛选10个高关注度条目）
1. **[CLOSED] #48680 claude.ai marketplace MCP 服务器指令每次会话无意义注入上下文**
   标签：bug/macOS/MCP/内存 | 评论8 | 👍1
   重要性：MCP生态是Claude Code扩展能力的核心，该问题会导致第三方MCP服务的指令在所有会话中重复注入，无意义占用上下文窗口，增加token消耗。社区反馈该问题影响所有使用Marketplace MCP服务的用户，目前已标记为关闭，说明已修复。
   链接：https://github.com/anthropics/claude-code/issues/48680
2. **[CLOSED] #71423 Windows 平台自动模式无授权启动低效子代理，导致token浪费要求退款**
   标签：bug/Windows/成本/模型/代理 | 评论8 | 👍1
   重要性：自动模式是用户高频使用的功能，子代理无授权启动直接导致用户产生不必要的API调用成本，是涉及用户核心利益的严重问题，社区讨论热度高，目前已修复关闭。
   链接：https://github.com/anthropics/claude-code/issues/71423
3. **[CLOSED] #63687 Opus 4.8 1M上下文模型频繁出现`tool_use malformed`错误**
   标签：bug/Windows/工具/模型 | 评论7 | 👍5（全表最高赞）
   重要性：该问题影响所有使用Opus 4.8 1M上下文版本的用户，工具调用失败会直接中断开发流程，社区反馈该问题在长上下文会话中复现率极高，用户被迫降级到旧版本模型作为 workaround，目前已修复关闭。
   链接：https://github.com/anthropics/claude-code/issues/63687
4. **[CLOSED] #60095 子代理退出后后台任务状态仍显示运行，停止按钮失效**
   标签：bug/macOS/TUI/代理 | 评论7 | 👍0
   重要性：后台任务状态不同步是TUI端的高频痛点，用户无法准确判断任务执行状态，停止按钮失效会导致用户无法终止僵尸进程，影响任务管理体验，目前已修复关闭。
   链接：https://github.com/anthropics/claude-code/issues/60095
5. **[CLOSED] #68065 顺序启动的后台代理通知路由到错误的代理ID**
   标签：bug/代理 | 评论5 | 👍4
   重要性：后台代理的通知路由错误会导致用户无法对应任务执行结果，严重干扰多代理并行任务的 workflow，社区反馈该问题在2.1.172+版本后复现，目前已修复关闭。
   链接：https://github.com/anthropics/claude-code/issues/68065
6. **[OPEN] #75160 Opus 4.8 安全过滤误报：拦截合法的无人机密钥管理项目README审查**
   标签：bug/macOS/模型/安全 | 评论4 | 👍0
   重要性：当前Opus 4.8模型触发的安全过滤误报是社区最关注的未解决问题，该问题会直接中断合法开发工作，属于服务器端强制触发的session-halted级别故障，目前仍处于开放状态待修复。
   链接：https://github.com/anthropics/claude-code/issues/75160
7. **[OPEN] #75153 Opus 4.8 安全过滤误报：拦截合法的守护进程+进程扫描构建任务**
   标签：bug/模型/安全 | 评论4 | 👍0
   重要性：与#75160同属Opus 4.8安全过滤误报问题集群，涉及系统开发、进程管理等合法开发场景被错误拦截，目前仍处于开放状态，社区已有多个同类issue反馈。
   链接：https://github.com/anthropics/claude-code/issues/75153
8. **[CLOSED] #71766 OAuth登录/刷新失败，报UNABLE_TO_GET_ISSUER_CERT错误**
   标签：bug/Windows+Linux/认证/安全/回归 | 评论3 | 👍0
   重要性：该问题影响所有使用OAuth登录Claude Code的用户，属于平台级登录故障，由Let's Encrypt证书链变更引发，波及范围广，目前已修复关闭。
   链接：https://github.com/anthropics/claude-code/issues/71766
9. **[CLOSED] #72261 VSCode扩展忽略Claude本地环境配置**
   标签：bug/macOS/IDE/VSCode | 评论3 | 👍2
   重要性：VSCode是用户使用Claude Code的主流IDE之一，环境配置不生效会导致用户自定义的API密钥、模型参数、沙盒规则等失效，严重影响使用体验，目前已修复关闭。
   链接：https://github.com/anthropics/claude-code/issues/72261
10. **[CLOSED] #71594 会话限制误判：刚重置配额即提示达到上限**
    标签：bug/Linux/API | 评论5 | 👍1
    重要性：会话限制误判会直接中断用户的使用流程，影响API调用的稳定性，社区反馈该问题在配额重置时间点复现率极高，目前已修复关闭。
    链接：https://github.com/anthropics/claude-code/issues/71594
对，这10个够了，覆盖了已修复的热点和未解决的热点。
然后第四部分重要PR进展，10个：
### 4. 重要 PR 进展（共筛选10个高价值条目）
1. **[OPEN] #87395 修复ralph-wiggum插件的无限循环调用问题**
   更新：2026-08-17 | 作者：bcherny
   内容：为`/ralph-loop`和`/cancel-ralph`命令添加`disable-model-invocation`配置，防止模型自行调用该命令触发无限循环，解决插件元数据字段不被支持导致的滥用问题。
   链接：https://github.com/anthropics/claude-code/pull/87395
2. **[OPEN] #79131 修复validate-settings.sh无匹配配置时静默退出的问题**
   更新：2026-08-17 | 作者：Codeturion
   内容：修复脚本在无小写frontmatter键匹配时因`grep`返回非零状态直接退出的问题，现在会正确输出诊断信息，避免用户配置验证时无反馈。
   链接：https://github.com/anthropics/claude-code/pull/79131
3. **[CLOSED] #84004 修复插件开发中的frontmatter解析错误问题**
   更新：2026-08-17 | 作者：RerankerGuo
   内容：限制YAML frontmatter仅解析开头标记块，拒绝没有闭合标记的文件，解决之前Markdown内容中的水平规则会干扰解析、导致配置读取错误的bug。
   链接：https://github.com/anthropics/claude-code/pull/84004
4. **[CLOSED] #84003 修复脚本顶层失败未正确传播的问题**
   更新：2026-08-17 | 作者：RerankerGuo
   内容：修改自动化脚本的错误处理逻辑，将顶层 failures 返回非零退出状态，之前仅打日志的错误现在会被上游流程识别，避免静默失败导致后续流程异常。
   链接：https://github.com/anthropics/claude-code/pull/84003
5. **[CLOSED] #83999 修复gh包装器的命令行标志值验证漏洞**
   更新：2026-08-17 | 作者：RerankerGuo
   内容：修复`gh`（GitHub CLI）包装器对缺值标志的验证逻辑，之前如`--limit`无值时会跳过验证执行非法命令，现在会正确拒绝不完整的标志输入，提升脚本安全性。
   链接：

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-08-18

---

## 1. 今日速览

Codex CLI 发布了 `0.148.0-alpha.21` 预览版本，同时社区围绕 MCP OAuth 令牌刷新、Windows 桌面应用性能退化、以及多代理会话存储膨胀等问题展开大量讨论。今日共有约 20 个 PR 合入，涵盖远程 TUI 工作区信任提示、Windows 沙盒加固、TUI 渲染性能优化、桌面诊断工具增强等改进，显示出团队正在集中修复桌面端稳定性和资源管理问题。

---

## 2. 版本发布

**rust-v0.148.0-alpha.21**
- 发布时间：过去 24 小时内
- 版本类型：Alpha 预览版
- 说明：Release 0.148.0-alpha.21，延续 0.148.0 alpha 迭代线。从 Issue 中可见 0.148.0-alpha.9 ~ alpha.20 已被多位用户在实际环境中使用，本次 alpha.21 应包含近期合入的多项修复。

---

## 3. 社区热点 Issues

### #28969 [OPEN] 请求增加设置以禁用 60 秒自动解决问题机制
- **作者**: antoyo | **👍**: 195 | **评论**: 78
- **标签**: bug, CLI, config, plan
- **为何重要**: 这是社区呼声最高的 Issue 之一（195 👍）。Codex CLI 在向用户提问后 60 秒自动解析（auto-resolve），导致用户来不及回答就被迫中断。该行为已影响大量 CLI 工作流，社区强烈要求可配置化。
- **链接**: [openai/codex#28969](https://github.com/openai/codex/issues/28969)

### #17265 [OPEN] Codex 不会自动刷新 MCP OAuth 令牌
- **作者**: infoseekAI | **👍**: 57 | **评论**: 31
- **标签**: bug, auth, mcp
- **为何重要**: Codex 持久化了 `refresh_token`，但在令牌过期后不会自动刷新，导致 MCP 工具调用全部失败。这是 MCP 生态集成的核心阻断问题，且与今日新报的 #39054 形成关联——被拒绝的 refresh token 仍被视为"可用"导致无限重试。
- **链接**: [openai/codex#17265](https://github.com/openai/codex/issues/17265)

### #24990 [OPEN] Codex ChatGPT 登录流程问题
- **作者**: D4Vinci-CDM | **👍**: 22 | **评论**: 26
- **标签**: bug, auth
- **为何重要**: 付费 ChatGPT Plus 用户无法通过官方登录流程使用 Codex，`codex login` 和 `codex login --device-auth` 均被重定向到 `auth.openai.com/add-phone`。这是阻碍新用户入门的严重阻断问题。
- **链接**: [openai/codex#24990](https://github.com/openai/codex/issues/24990)

### #37403 [OPEN] [macOS] 桌面端无法恢复远程控制/CLI 线程：`already has an active writer`
- **作者**: xkun1 | **👍**: 17 | **评论**: 21
- **标签**: bug, app, app-server, remote
- **为何重要**: 8月7日桌面更新后，此前正常工作的移动远程控制 → 桌面恢复工作流被阻断。`already has an active writer` 错误表明 app-server 的写入锁管理存在回归缺陷，直接影响跨设备协作场景。
- **链接**: [openai/codex#37403](https://github.com/openai/codex/issues/37403)

### #25744 [OPEN] macOS 上 Computer Use / MCP 辅助进程累积，导致 HID 延迟和 WindowServer 停顿
- **作者**: quasa0 | **👍**: 3 | **评论**: 19
- **标签**: bug, mcp, app, computer-use, performance
- **为何重要**: 长时间运行的 Codex 会话在 macOS 上积累大量未回收的子进程和僵尸进程，导致系统级输入延迟和窗口服务卡顿。与今日 #38925 和 #38754 共同指向 MCP 进程生命周期管理的系统性缺陷。
- **链接**: [openai/codex#25744](https://github.com/openai/codex/issues/25744)

### #11011 [OPEN] 线程切换非常缓慢
- **作者**: ImanYZ | **👍**: 19 | **评论**: 23
- **标签**: bug, app
- **为何重要**: ChatGPT Pro 用户报告更新后线程切换变得极慢且无响应。会话切换是桌面应用最基本的高频操作，性能退化严重影响日常使用体验。
- **链接**: [openai/codex#11011](https://github.com/openai/codex/issues/11011)

### #34268 [OPEN] 多代理 V2 全历史分叉复制历史压缩快照和内联图像，导致会话存储增长超 100 GiB
- **作者**: gonzalolarralde | **👍**: 6 | **评论**: 9
- **标签**: bug, context, app, subagent, session
- **为何重要**: 使用 Ultra 推理 + 多代理 V2 的长对话产生了约 110 GiB 本地会话数据。增长是乘法式的而非线性，表明分叉逻辑在复制压缩快照和图像时存在根本性设计缺陷。
- **链接**: [openai/codex#34268](https://github.com/openai/codex/issues/34268)

### #39059 [OPEN] GPT-5.6 Codex 将有界代码库工作转变为自我强化的验证和治理层
- **作者**: squarepots | **👍**: 0 | **评论**: 3
- **标签**: bug, model-behavior, windows-os, app
- **为何重要**: 在成熟生产代码库上，GPT-5.6 Codex 不是完成实际工作，而是不断构建自验证和治理层。这是一个模型行为层面的问题，触及 AI 编码工具的核心信任问题——模型是否在"真正干活"还是"制造看起来在干活的框架"。
- **链接**: [openai/codex#39059](https://github.com/openai/codex/issues/39059)

### #38518 [OPEN] [Windows] 打开或切换对话触发 350-800 MiB/s 持续读取循环
- **作者**: Gin-233 | **👍**: 0 | **评论**: 6
- **标签**: bug, windows-os, app, session, performance
- **为何重要**: Windows 桌面应用在打开或切换对话时触发极高磁盘读取循环，导致系统级卡顿。这是 Windows 平台性能问题的典型代表，与 #11011 的线程切换慢问题相互呼应。
- **链接**: [openai/codex#38518](https://github.com/openai/codex/issues/38518)

### #39054 [OPEN] MCP OAuth：被拒绝的 refresh token 仍"可用"，Codex 无限重试且不提示重新认证
- **作者**: rmanalan | **👍**: 0 | **评论**: 2
- **标签**: bug, auth, mcp, CLI, app-server
- **为何重要**: 在 0.140.0 至 0.148.0-alpha.20 多个版本上均可复现。被拒绝的 refresh token 不会触发重新认证流程，而是被无限重试。这是 #17265 的进阶版本，揭示了 MCP OAuth 错误处理链路的深层缺陷。
- **链接**: [openai/codex#39054](https://github.com/openai/codex/issues/39054)

---

## 4. 重要 PR 进展

### #39082 [CLOSED] 远程 TUI 工作区中提示项目信任
- **功能**: 在远程 TUI 会话启动线程前，查询远程 app-server 的项目配置层级，并在项目无既有信任决策时展示信任提示。同时解析相对远程工作目录和仓库根信任目标。
- **意义**: 补齐了远程 TUI 场景下的安全信任链，此前远程会话可能跳过本地已有的信任确认机制。
- **链接**: [openai/codex#39082](https://github.com/openai/codex/pull/39082)

### #39083 [CLOSED] 加固 Windows 沙盒配置以防御重解析点
- **功能**: 在提升权限的配置过程中，检测并阻止跟随目录联结（junction）或其他重解析点，防止 ACL 被应用到非预期的目录。
- **意义**: 直接关联 #35841 中 Windows SYSTEM-DPAPI 凭据问题的安全上下文，修复了沙盒配置可能被重解析点劫持的风险。
- **链接**: [openai/codex#39083](https://github.com/openai/codex/pull/39083)

### #39081 [CLOSED] 按增量大小限制 TUI 线程重放缓冲区
- **功能**: 合并同一线程、同一轮次、同一条目的相邻增量，并按增量大小限制缓冲区，防止非活跃线程的流式 agent 消息增量无限积累文本。
- **意义**: 直接缓解线程切换时的内存和性能压力，与 #11011（线程切换慢）和 #38518（磁盘读取循环）高度相关。
- **链接**: [openai/codex#39081](https://github.com/openai/codex/pull/39081)

### #39079 [CLOSED] 将用户 MCP 策略应用于选定执行器插件
- **功能**: 从有效用户配置中直接解析 MCP 服务器策略，应用服务器启用状态、工具允许/拒绝列表、以及默认和按工具审批模式，同时保留插件层更严格的限制。
- **意义**: 修复了 MCP 插件策略可能绕过用户配置的问题，回应了 #33599（桌面端静默无法附加 MCP 工具）等 Issue 的诉求。
- **链接**: [openai/codex#39079](https://github.com/openai/codex/pull/39079)

### #39060 [CLOSED] 为 `codex doctor` 添加桌面应用诊断
- **功能**: 检测 macOS 和 Windows 上已安装的 Codex 桌面应用，报告版本、运行状态和日志位置；检查活跃桌面会话的日志，报告最新的本地 app-server 握手结果。
- **意义**: 大幅提升用户自助排查能力，对于频繁遭遇桌面端问题的用户（如 #37403、#38518 等）尤为重要。
- **链接**: [openai/codex#39060](https://github.com/openai/codex/pull/39060)

### #39067 [CLOSED] 添加桌面安全强制诊断
- **功能**: macOS 上通过 Gatekeeper 评估应用并分类最近的 Gatekeeper 和 XProtect 事件；Windows 上检查 Microsoft Defender、AppLocker 等安全事件。
- **意义**: 为 #35841（Windows DPAPI 凭据问题）等安全相关 Issue 提供诊断支持，帮助用户理解安全强制层状态。
- **链接**: [openai/codex#39067](https://github.com/openai/codex/pull/39067)

### #39061 [CLOSED] 避免重新渲染流式代码围栏
- **功能**: 当流式 TUI 收到包含换行符的增量时，不再重新解析和语法高亮整个增长的代码块，而是仅处理新增部分。
- **意义**: 显著优化长代码块流式渲染性能，对 #17793（Backspace 问题）所反映的 TUI 输入体验有间接改善。
- **链接**: [openai/codex#39061](https://github.com/openai/codex/pull/39061)

### #39063 [CLOSED] 转录分页器仅渲染可见行
- **功能**: 滚动转录分页器时不再渲染从顶部到可见区域的所有隐藏内容，仅渲染视口内行。渲染工作量和缓冲区大小不再随滚动偏移增长。
- **意义**: 直接优化长会话中的滚动和渲染性能，对 #11011 和 #38518 的性能问题有缓解作用。
- **链接**: [openai/codex#39063](https://github.com/openai/codex/pull/39063)

### #39068 [CLOSED] 移除 Skill 模型委派支持
- **功能**: 停止解析和暴露 skill frontmatter 中的 `model` 字段，移除 skill 模型委派类型和指令生成。
- **意义**: 简化 skill 架构，可能与 #39021（Spreadsheet skill 未加载）相关。表明团队正在收敛 skill 的模型选择策略。
- **链接**: [openai/codex#39068](https://github.com/openai/codex/pull/39068)

### #31901 [CLOSED] 在 Code Mode 工具模式中解析本地 MCP 引用
- **功能**: 当 Code Mode 渲染 TypeScript 工具声明时，对本地 JSON Pointer `$ref` 值基于 schema 根进行解析，支持 `#/$defs/...` 和 `#/definitions/...`，包括 RFC 6901 转义路径段。
- **意义**: 修复 MCP 工具 schema 中 `$ref` 引用无法正确解析的问题，提升 MCP 工具集成的正确性。
- **链接**: [openai/codex#31901](https://github.com/openai/codex/pull/31901)

---

## 5. 功能需求趋势

从今日 Issues 和 PRs 中可提炼出以下社区最关注的方向：

| 趋势方向 | 代表 Issue/PR | 社区热度 |
|---|---|---|
| **MCP 进程生命周期管理** | #25744, #38925, #38754, #39079 | 🔴 高 — macOS 和 Windows 均存在 MCP/Computer Use 辅助进程累积和未回收问题，是当前最集中的系统性缺陷 |
| **桌面应用性能与资源管理** | #11011, #38518, #34268, #39081, #39063 | 🔴 高 — 线程切换慢、磁盘读取循环、会话存储超百 GiB 等问题频发，团队通过多个 PR 优化渲染和缓冲 |
| **认证与 OAuth 令牌管理** | #17265, #24990, #39054 | 🟠 中高 — MCP OAuth 令牌刷新失败、被拒绝令牌无限重试、ChatGPT 登录流程阻断 |
| **Windows 平台稳定性** | #35841, #38518, #38754, #38855, #31963 | 🟠 中高 — Windows 桌面端问题集中：DPAPI 凭据恢复失败、MCP 进程重复启动、i18n 翻译错误、自定义提供商标识符验证问题 |
| **远程协作与会话恢复** | #37403, #38927, #28238 | 🟡 中 — 远程控制恢复失败、SSH + Remote Control 双连接导致聊天消失、远程项目缺少 Worktree 选项 |
| **模型行为与推理质量** | #39059 | 🟡 中 — GPT-5.6 在生产代码库上倾向于构建冗余验证层而非完成实际工作 |
| **可配置性与用户控制** | #28969, #25281, #37585 | 🟡 中 — 社区要求更多可配置选项（禁用自动解析、分离字体设置、贡献者积分激励） |

---

## 6. 开发者关注点

### 🔥 核心痛点

1. **MCP 进程泄漏是跨平台系统性问题**
   macOS（#25744, #38925）和 Windows（#38754）均存在 MCP/Computer Use 辅助进程在会话内不断累积、未被正确回收的问题。尽管 #19753 曾修复了关闭路径，但活跃会话期间的累积仍然存在。开发者长期运行会话后系统资源被耗尽，影响整体机器响应。

2. **会话存储增长失控**
   多代理 V2 的全历史分叉导致会话存储呈乘法式增长（#34268，110 GiB），线程重放缓冲区也未限制增量文本量。开发者担心长会话的磁盘和内存消耗不可控。今日 PR #39081 已着手修复缓冲区问题。

3. **OAuth 认证链路存在多层缺陷**
   从基础的令牌不刷新（#17265），到被拒绝令牌仍被视为可用导致无限重试（#39054），再到 ChatGPT 登录流程阻断（#24990），MCP OAuth 认证链路在多个层面存在问题，缺乏统一的错误恢复和重新认证机制。

4. **Windows 平台体验明显落后**
   今日 50 条 Issue 中约 12 条标记为 `windows-os`，涵盖 DPAPI 凭据恢复、沙盒配置、MCP 进程管理、i18n 翻译、性能卡顿等多个领域。Windows 用户的核心体验（打开/切换对话、运行工具、安全沙盒）均有不同程度的问题。

5. **远程协作工作流回归**
   8月7日更新后，移动远程控制 → 桌面恢复的工作流被 `already has an active writer` 错误阻断（#37403）。SSH + Remote Control 双连接导致聊天在重启后消失（#38927）。跨设备无缝衔接是 Codex 的核心卖点之一，回归问题直接影响 Pro 用户的工作流。

6. **模型行为可控性引发关注**
   GPT-5.6 Codex 在真实生产代码库上倾向于"自我强化验证和治理层"而非完成实际编码任务（#39059），这触及了 AI 编码工具的深层信任问题——开发者需要的是执行者，而非一个不断搭建流程框架的"治理机器"。

### 📌 高频需求

- **可配置的自动行为**：禁用 60 秒自动解析（#28969，195 👍）、分字体设置（#25281）
- **`codex doctor` 诊断增强**：今日 3 个 PR（#39060, #39067, #39074）扩展了桌面应用、安全强制、更新检查的诊断能力，表明团队正在系统性提升用户自助排障能力
- **贡献者激励**：社区提议为高质量 Bug 报告提供额外使用额度（#37585），反映出积极参与反馈的用户希望获得认可

---

*数据来源：github.com/openai/codex | 报告生成时间：2026-08-18*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 | 2026-08-18

> 📊 数据来源：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)  
> 统计周期：过去 24 小时（截至 2026-08-17）

---

## 一、今日速览

今日 Gemini CLI 发布了 **v0.56.0-nightly** 版本，主要修复 SSR Agent 的 TypeScript 编译配置问题。社区活跃度持续高位，**50 条 Issue 更新、50 条 PR 更新**，核心聚焦于 **子代理（Subagent）可靠性修复** 和 **Agent 卡死/挂起问题**。值得关注的是，多个与 `MessageBus` 静默挂起、TUI 初始化卡死相关的 PR 已合并，显示团队正在集中攻坚稳定性问题。

---

## 二、版本发布

### 🔖 v0.56.0-nightly.20260817.g9a15c45fb

| 项目 | 内容 |
|------|------|
| **发布时间** | 2026-08-17 |
| **核心变更** | [SSR Agent] Issue Fix (21911): 为 `packages/cli/tsconfig` 添加 `composite` 标志 |
| **贡献者** | [@joneba-google](https://github.com/joneba-google) |
| **关联 PR** | [#28813](https://github.com/google-gemini/gemini-cli/pull/28813) |

> **说明**：此为 nightly 构建版本，修复了 CLI 包的 TypeScript 项目引用配置，解决 SSR Agent 构建链中的编译依赖问题。

📋 [完整 Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.56.0-nightly.20260816.g2a87e7be1...v0.56.0-nightly.2)

---

## 三、社区热点 Issues（Top 10）

### 🔴 P1 高优先级 — 需重点关注

| # | Issue | 评论 | 👍 | 核心问题 | 为什么重要 |
|---|-------|------|----|---------|-----------|
| 1 | **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** | 12 | 2 | 子代理达到 `MAX_TURNS` 后恢复时，错误地将中断报告为「GOAL 成功」 | **社区最热 Issue**。子代理状态报告机制存在根本性缺陷，用户无法区分真正的成功与被截断的执行，直接影响调试体验 |
| 2 | **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** | 8 | **8** | Generalist Agent 调用时永久卡死，简单操作（如创建文件夹）也无法完成 | **👍 最高**。影响面极广，用户反馈等待长达 1 小时无响应。临时方案是禁用子代理，但牺牲了核心功能 |
| 3 | **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** | 4 | 3 | Shell 命令执行完成后仍显示 "Waiting input"，界面卡住 | Shell 执行是 CLI 最基础的能力之一，此 Bug 导致工作流频繁中断 |
| 4 | **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** | 4 | 1 | 浏览器子代理在 Wayland 环境下失败 | Linux 桌面用户体验的关键阻碍，Wayland 已成为主流显示协议 |
| 5 | **[#22186](https://github.com/google-gemini/gemini-cli/issues/22186)** | 3 | 0 | `get-shit-done` 输出钩子在打印摘要阶段崩溃 | 影响任务完成后的结果展示环节，降低工具可信度 |

### 🟡 P2/P3 — 值得关注的功能与改进

| # | Issue | 评论 | 核心问题 | 社区价值 |
|---|-------|------|---------|---------|
| 6 | **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353)** | 7 | 组件级行为评估（Behavioral Eval）鲁棒性提升 | 已生成 76 个评估测试用例，覆盖 6 个模型，是质量保障的基础设施 |
| 7 | **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** | 7 | 评估 AST 感知的文件读取/搜索/映射能力 | 可能显著减少 token 消耗和误读，提升代码理解精度 |
| 8 | **[#21968](https://github google-gemini/gemini-cli/issues/21968)** | 6 | Gemini 几乎不主动使用自定义 Skills 和子代理 | 用户需显式指令才能触发，降低了自动化程度和工具利用率 |
| 9 | **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)** | 5 | Auto Memory 对低信号会话无限重试 | 导致后台资源浪费，Memory 系统系列 Bug 之一 |
| 10 | **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)** | 4 | Auto Memory 缺乏确定性脱敏，日志可能泄露敏感信息 | **安全问题**：内容在脱敏前已进入模型上下文，存在隐私风险 |

---

## 四、重要 PR 进展（Top 10）

### ✅ 已合并（CLOSED）

| PR | 标题 | 优先级 | 关键内容 |
|----|------|--------|---------|
| **[#28815](https://github.com/google-gemini/gemini-cli/pull/28815)** | Preserve original termination reason during subagent recovery | **P1** | 修复 Issue #22323：子代理达到执行限制后恢复时，保留原始终止原因而非错误标记为 GOAL 成功 |
| **[#28812](https://github.com/google-gemini/gemini-cli/pull/28812)** | Prevent indefinite TUI hang by adding execution timeouts | **P1** | 修复 Issue #21477：裸 Linux 终端启动 TUI 时因 `getProcessInfo()` 依赖 `execAsync` 调用 `ps` 而无限卡在 "Initializing..." |
| **[#28814](https://github.com/google-gemini/gemini-cli/pull/28814)** | Fix TypeScript strict-null errors in integration tests | P2 | 修复集成测试中的 TS 严格空值检查错误 |
| **[#28820](https://github.com/google-gemini/gemini-cli/pull/28820)** | Clarify privacy notice wording and selection options | P2 | 修复隐私声明措辞矛盾问题，优化用户选择体验 |
| **[#28624](https://github.com/google-gemini/gemini-cli/pull/28624)** | Prevent boolean thought parts leaking as `[Thought: true]` text | P2 | 修复模型思维过程以 `[Thought: true]` 文本形式泄露到输出的问题 |
| **[#20927](https://github.com/google-gemini/gemini-cli/pull/20927)** | Improve error message when GEMINI_API_KEY is missing | - | 改进 API Key 缺失时的错误提示，增加分步配置指南和平台特定命令 |

### 🔄 进行中（OPEN）

| PR | 标题 | 优先级 | 关键内容 |
|----|------|--------|---------|
| **[#28817](https://github.com/google-gemini/gemini-cli/pull/28817)** | Retain executing subagent tool calls in hook state | **P2** | 修复非根调度器（子代理）中 `Executing` 状态的工具调用在进入 hook 状态前被丢弃的问题 |
| **[#28816](https://github.com/google-gemini/gemini-cli/pull/28816)** | Fix silent hang in MessageBus.request when publish fails | **P2** | 修复 `MessageBus.request()` 中 `publish()` 失败时 Promise 静默挂起 60 秒的严重问题 |
| **[#28834](https://github.com/google-gemini/gemini-cli/pull/28834)** | Suppress spurious ENOENT warning for transient subdirs | **P1/P2** | 消除 BFS 工作区扫描时遇到瞬态锁目录产生的虚假 ENOENT 警告 |
| **[#28740](https://github.com/google-gemini/gemini-cli/pull/28740)** | Prevent supply chain RCE in eval-pr workflows | **🔒 安全关键** | 修复 `pull_request_target` 上下文中不可信 fork 代码可执行的高危漏洞，拆分 eval 工作流为安全构建步骤 |

---

## 五、功能需求趋势

基于全部 50 条活跃 Issue，提炼出以下 **六大方向**：

### 📈 趋势一：子代理（Subagent）可靠性工程（占比 ~30%）
- **状态报告准确性**：#22323、#21763 — 终止原因丢失、Bugreport 缺少子代理上下文
- **执行控制**：#22093 — 子代理未经授权自动运行；#22267 — Browser Agent 忽略 `settings.json` 配置
- **轨迹可见性**：#22598 — 子代理执行轨迹应可通过 `/chat share` 查看

### 📈 趋势二：Agent 卡死/挂起根治（占比 ~20%）
- **Generalist Agent 卡死**：#21409（最高 👍）
- **Shell 执行卡死**：#25166、#22465（交互式命令场景）
- **TUI 初始化卡死**：#21477 → PR #28812 已修复
- **MessageBus 静默挂起**：#22588 → PR #28816 进行中

### 📈 趋势三：Auto Memory 系统重构（占比 ~12%）
- **系列 Issue**：#26516（总追踪）、#26522（无限重试）、#26523（无效补丁）、#26525（安全脱敏）
- 核心问题：低信号会话处理、确定性脱敏、补丁验证缺失

### 📈 趋向四：AST 感知代码理解能力（占比 ~8%）
- **EPIC 追踪**：#22745（AST 工具价值评估）、#22746（代码库映射工具选型）
- 目标：减少 token 噪声、精确方法边界读取

### 📈 趋势五：浏览器代理增强（占比 ~8%）
- **Linux 兼容性**：#21983（Wayland 失败）
- **弹性策略**：#22232（自动会话接管、锁恢复）
- **配置生效**：#22267（maxTurns 等覆盖项）

### 📈 趋势六：安全与沙箱加固（占比 ~6%）
- **供应链安全**：#28740（eval-pr workflow RCE 修复）
- **行为约束**：#22672（阻止破坏性命令如 `git reset --force`）
- **权限管控**：#22093（子代理默认启用问题）

---

## 六、开发者关注点（痛点总结）

### ⚠️ Top 5 痛点

| 排名 | 痛点 | 影响 | 相关 Issue |
|------|------|------|-----------|
| **1** | **Agent 频繁卡死/无响应** | 工作流完全中断，最长等待 1 小时+ | #21409、#25166、#22465 |
| **2** | **子代理行为不可预测** | 状态报告失真、未经授权运行、上下文丢失 | #22323、#22093、#21763 |
| **3** | **Shell 执行不稳定** | 命令完成后界面卡住、临时脚本散落各处 | #25166、#23571 |
| **4** | **工具/Skills 利用率低** | 模型几乎不主动调用自定义 Skills 和子代理 | #21968、#24246（>128 工具致 400 错误）|
| **5** | **Memory 系统多缺陷** | 无限重试、敏感信息泄露风险、无效补丁静默丢弃 | #26522、#26525、#26523 |

### 💡 开发者高频建议
- **增加超时机制**：所有异步操作（TUI 初始化、消息总线请求、Shell 执行）都应有明确超时
- **改善日志与诊断**：Bugreport 应包含子代理完整轨迹（#21763）
- **AST 工具集成**：期望原生支持语法感知的代码读取，减少 token 浪费
- **安全默认值**：子代理应默认关闭（#22093），破坏性命令需二次确认（#22672）

---

> 📌 **免责声明**：本日报基于公开 GitHub 数据自动整理，Issue/PR 状态可能随时变更。  
> 🔄 **持续跟踪**：建议关注 [`joneba-google`](https://github.com/joneba-google) 近期提交的 SSR Agent 系列 PR，当前是活跃修复窗口期。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-08-18）
统计周期：截至2026-08-17 过去24小时 | 数据来源：github.com/github/copilot-cli

---

## 1. 今日速览
过去24小时 Copilot CLI 无新版本发布，核心动态包括：高热度交互类 Issue #1481（SHIFT+ENTER 换行逻辑异常）已修复关闭，社区集中反馈了 MCP OAuth 认证故障、会话稳定性缺陷、插件系统配置异常等多类问题，另有 1 个文档调整 PR 处于开放状态。

## 2. 版本发布
无新版本发布。

## 3. 社区热点 Issues（Top 10）
| 编号 | 标题 | 重要性说明 | 社区反应 | 链接 |
|------|------|------------|----------|------|
| #1481 | [CLOSED] SHIFT + ENTER 应触发换行但实际执行了 Prompt | 终端交互基础痛点，长期受用户吐槽，官方已修复关闭 | 28 条评论、17 个赞，社区讨论热度最高 | [链接](https://github.com/github/copilot-cli/issues/1481) |
| #4390 | 组织启用的 Claude Sonnet 5/Opus 5、Kimi K3 模型在 CLI 目录中缺失 | 直接影响企业付费用户的模型可用性，是模型支持的核心需求 | 8 条评论、7 个赞，企业用户反馈集中 | [链接](https://github.com/github/copilot-cli/issues/4390) |
| #4480 | 1.0.79 版本 Atlassian MCP OAuth 认证回归故障 | 与已关闭的 GitLab MCP OAuth 问题（#4439）同属 MCP 认证体系核心缺陷，阻断所有 Atlassian 工具链调用 | 5 条评论、6 个赞，MCP 集成用户关注度高 | [链接](https://github.com/github/copilot-cli/issues/4480) |
| #4506 | 内存看门狗在 23% 上下文占用时误触发强制压缩，导致 OOM | 严重稳定性缺陷，直接导致长会话崩溃 | 0 赞但属高优先级故障，长会话用户反馈强烈 | [链接](https://github.com/github/copilot-cli/issues/4506) |
| #4313 | 支持滚动查看当前会话历史 | 终端交互长期高频需求，当前仅支持 PageUp/PageDown 导航，体验不佳 | 5 条评论，覆盖所有需要回溯对话历史的用户 | [链接](https://github.com/github/copilot-cli/issues/4313) |
| #4507 | 非交互模式（`copilot -p`）下仓库级 `enabledPlugins` 配置失效 | 配置一致性缺陷，直接影响 CI/CD、自动化脚本场景的插件调用 | 1 条评论，自动化场景开发者关注 | [链接](https://github.com/github/copilot-cli/issues/4507) |
| #4509 | `--no-alt-screen` 标志被无通知移除，全屏模式不可控 | 老用户反馈的回归问题，全屏模式导致终端体验异常 | 1 个赞，长期使用全屏模式的用户吐槽集中 | [链接](https://github.com/github/copilot-cli/issues/4509) |
| #4512 | MCP 注册表策略获取失败时，本地自定义 stdio MCP 服务被错误阻断 | 安全策略与本地使用场景的冲突，阻断用户自建 MCP 服务调用 | 0 赞，自建 MCP 服务的开发者关注 | [链接](https://github.com/github/copilot-cli/issues/4512) |
| #4275 | ACP 模式暴露 `contextTier` 会话级配置（与非交互模式对齐） | 生态兼容性需求，面向 ACP 集成开发者，当前仅支持启动时配置 | 2 条评论、1 个赞，ACP 生态开发者关注 | [链接](https://github.com/github/copilot-cli/issues/4275) |
| #4513 | 插件市场缓存忽略 `ref` 字段，跨分支项目缓存冲突 | 多分支开发场景的插件使用缺陷 | 0 赞，多分支开发团队关注 | [链接](https://github.com/github/copilot-cli/issues/4513) |

## 4. 重要 PR 进展
过去24小时仅 1 个更新 PR：
- **#4510** [OPEN] 移除 README 中的 GitHub Copilot CLI 官方文档内容（包含安装指南、使用说明等）
  状态：开放未合并，推测为文档迁移或仓库职责调整，暂无进一步进展说明。
  链接：[PR #4510](https://github.com/github/copilot-cli/pull/4510)

## 5. 功能需求趋势
从当前 Issues 可提炼出 4 个核心关注方向：
1. **MCP 生态完善**：MCP 相关 Issue 占比超 30%，集中在 OAuth 认证兼容、本地服务策略适配、插件依赖管理、缓存机制优化四个方向，是当前社区最高频的需求领域。
2. **交互体验对齐通用习惯**：包括终端快捷键适配（如 SHIFT+ENTER 换行）、会话历史操作、主题自适应、全屏模式可控性等，核心是降低终端使用的学习成本。
3. **多场景配置对齐**：非交互模式与交互模式的功能 parity 是核心诉求，包括模型选择、插件配置、上下文 tier 设置等，覆盖自动化脚本、ACP 集成等开发场景。
4. **长会话稳定性优化**：内存管理、会话恢复、上下文压缩逻辑、统计准确性是长会话用户的核心痛点。

## 6. 开发者关注点
1. **MCP 集成可靠性是当前最高频故障点**：OAuth 认证不兼容、本地服务被策略误阻断、缓存冲突等问题，直接阻断 MCP 工具链的使用，是社区反馈最集中的故障类型。
2. **交互与配置一致性缺失**：快捷键不符合通用终端习惯、不同运行模式配置不同步、回归功能无通知移除等问题，大幅增加了使用成本。
3. **企业级功能缺口明显**：组织级自定义模型支持、插件依赖管理、ACP 功能对齐等需求，是付费企业用户的核心诉求，当前覆盖度不足。
4. **长会话场景稳定性待提升**：内存看门狗误触发、会话恢复失败、上下文统计不准等问题，严重影响长时运行的开发场景体验。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

## Kimi Code CLI 社区动态日报

**日期：2026-08-18**

### 1. 今日速览

过去24小时内，Kimi Code CLI 仓库没有新版本发布，Issue 列表无更新。唯一动态是一条已关闭的 PR #864，该 PR 提议新增 `--starting-prompt` 启动参数，允许在启动时传入初始提示词而不直接退出，相关讨论已收尾。

### 2. 版本发布

今日无新版本发布。

### 3. 社区热点 Issues

过去24小时内社区无 Issue 更新，因此本期暂无热点 Issue 可整理。建议关注后续活跃度变化。

### 4. 重要 PR 进展

过去24小时内仅有一条 PR 更新，无法凑足 10 条。以下为唯一动态：

- **[CLOSED] feat: --starting-prompt flag to prompt without exit**  
  作者：stebbins · 创建于 2026-02-02 · 更新于 2026-08-17  
  [PR #864](https://github.com/MoonshotAI/kimi-cli/pull/864)  
  新增 `--starting-prompt` / `-s` 标志，使用户可以在启动 CLI 时传入初始提示词，避免启动后立即退出。该 PR 关联 Issue #887，并引用了相关讨论。当前状态为已关闭，具体关闭原因（合并或关闭未合并）未在数据中体现。

### 5. 功能需求趋势

由于本期无新增或更新的 Issue，无法从当日数据中提炼功能需求趋势。但从历史遗留的 PR #864 来看，社区仍在关注 CLI 启动参数的灵活性和自动化脚本集成的便利性。

### 6. 开发者关注点

今日开发者反馈极少。唯一可观察到的关注点是通过 `--starting-prompt` 这类参数改进 CLI 的批处理与脚本化使用体验，减少交互式操作中的重复输入，提升自动化工作流效率。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报（2026-08-18）
数据来源：[GitHub anomalyco/opencode](https://github.com/anomalyco/opencode)

---

## 1. 今日速览
今日OpenCode社区无新版本发布，动态集中于Windows平台兼容性修复、V2核心功能迭代及遗留问题排查。高票功能需求（如Plan模式自动切换、会话归档恢复）持续获得社区关注，同时旧推理端点退役、Windows ARM64 TUI初始化失败等共性问题引发大量用户讨论。

---

## 2. 版本发布
过去24小时无新版本发布。

---

## 3. 社区热点 Issues（Top 10）
| 序号 | Issue 标题 | 重要性说明 | 社区反应 | 链接 |
|------|------------|------------|----------|------|
| 1 | Windows ARM64 原生版 OpenTUI 初始化失败（bun:ffi dlopen TinyCC 错误） | ARM64 原生用户的核心痛点，TUI 是主要交互入口，初始化失败将直接导致无法使用交互功能，非交互命令可正常运行但日常使用严重受阻 | 18条评论、12个赞，多位 ARM64 用户反馈同样问题，已等待近5个月修复 | [Issue #19130](https://github.com/anomalyco/opencode/issues/19130) |
| 2 | 使用旧推理端点返回 410 Gone 错误 | 官方已退役旧端点 `https://opencode.ai/inference/v1`，但大量用户未收到明确迁移引导，导致所有第三方 CLI 和旧版 OpenCode 完全无法使用 | 创建1天即获得15条评论，大量用户反馈同问题，仅 OpenCode 2 Beta 可正常使用 | [Issue #43105](https://github.com/anomalyco/opencode/issues/43105) |
| 3 | [FEATURE] Plan Mode 自动切换到 Build 模式 | 当前社区获赞最高的功能需求（32赞），用户希望在 Plan 模式完成规划后自动切换到 Build 模式执行任务，无需手动切换，可大幅提升使用效率 | 已持续讨论近8个月，核心需求已被官方确认，纳入后续迭代规划 | [Issue #7801](https://github.com/anomalyco/opencode/issues/7801) |
| 4 | MCP 工具连接成功但未暴露给 Agent | MCP 生态的核心问题，服务器可通过 `tools/list` 返回工具列表，但 Agent 无法调用，直接阻碍 MCP 插件在 OpenCode 中的使用 | 8条评论，多位 MCP 插件开发者反馈，影响 PDF 处理、代码检索等常用 MCP 工具的使用 | [Issue #33027](https://github.com/anomalyco/opencode/issues/33027) |
| 5 | [FEATURE] 支持归档会话的恢复/取消归档 | 会话管理的基础能力缺口，当前归档会话仅能在归档列表中查看，无法恢复回侧边栏，丢失历史会话的找回成本极高 | 8条评论、11个赞，是会话管理类的最高票需求 | [Issue #24153](https://github.com/anomalyco/opencode/issues/24153) |
| 6 | ChatGPT OAuth 拒绝欧盟工作区的 GPT-5.6 模型 | 涉及区域合规与模型访问权限问题，欧盟数据驻留的工作区无法通过 OAuth 调用 GPT-5.6 模型，但官方 Codex CLI 可正常使用，存在权限判断逻辑差异 | 9条评论，欧盟区域用户反馈集中，已持续近2周 | [Issue #40243](https://github.com/anomalyco/opencode/issues/40243) |
| 7 | Windows 外部目录路径权限配置不生效 | Windows 用户的高频痛点，配置 `external_directory` 后仍无法访问指定目录，缺乏 Windows 路径配置的官方文档说明 | 7条评论，多位 Windows 用户

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

用户现在需要我生成2026-08-18的Pi社区动态日报，基于给的GitHub数据，首先得先理清楚结构，每个部分都要符合要求，还要专业，给开发者看的。
首先第一部分是今日速览，得2-3句话，把最重要的东西说清楚，比如今天没有新版本发布，但是社区核心修复集中在上下文压缩、TUI稳定性、多模态支持这些方面，还有几个重要的bug修复已经合并了，对了还要提一下评论最多的那个上下文压缩的问题？还有今天的PR都是围绕核心体验和API兼容的对吧？
然后第二部分版本发布，数据里说最新Releases过去24小时无，所以直接说无新版本发布就行，不用硬编。
接下来第三部分社区热点Issues，要挑10个最值得关注的，首先得按重要性排吧？第一个肯定是#6879那个auto-compaction不触发的问题，评论18个，赞17，这个很重要啊，用户遇到上下文超过100%都不压缩，直到API拒绝，这个是核心功能bug，影响很大，得说清楚为什么重要，还有社区反应，很多人遇到类似问题吧？然后第二个是#534，Linux下配置文件夹位置不符合XDG规范，这个评论15，赞39，赞最多，说明社区呼声很高，很多Linux用户有这个痛点，现在虽然closed了，但是是长期的配置问题。第三个是#8029，prompt编辑器移动卡顿，大文本的时候箭头键按了1650ms，性能问题，影响大文本编辑体验。第四个是#3200，支持prompt命令传视频音频，多模态需求，现在只有图片，要加音视频，适配Gemma4、GPT-4o这些多模态模型，评论8个，是热门功能需求。第五个是#2144，粘贴图片到Pi，现在Claude Code支持，Pi不支持，用户反馈多，已经closed了，说明修复了？对，数据里是CLOSED的，之前的功能缺口。第六个是#7995，OpenAI-responses接口不支持Anthropic的cacheControl，导致用Claude通过OpenRouter成本高2.5倍，这个是成本相关的，对用OpenRouter的用户很重要，评论4个，是API兼容性问题。第七个是#8036，edit工具渲染大diff的时候TUI崩溃，14.5MB的diff就崩，影响大文件编辑体验，评论4个，是稳定性问题。第八个是#8166，自定义消息注入破坏tool_calls和tool的相邻关系，导致后续所有turn都400报错，这个是核心会话逻辑bug，影响使用，评论3个，比较严重。第九个是#7756，detectInstallMethod误判非pnpm安装，导致安装检测错误，影响包管理器兼容性，Linux用户可能遇到，评论3个。第十个是#8028，TUI fullRender渲染超长内容的时候V8字符串长度超限崩溃，适合处理大量媒体内容的agent场景，评论2个，是稳定性问题。对，这10个要每个都说明为什么重要，社区反应，还要附链接。
然后第四部分重要PR进展，挑10个，也要按重要性排。第一个肯定是#8258，修复Anthropic refusal错误和回退，对应之前的#8017 issue，解决压缩的时候Anthropic分类器认为非法导致的压缩失败，这个是核心bug修复，已经closed了。第二个是#8255，加载嵌套的markdown技能，对应#6479，之前子文件夹的技能用不了，现在修复了，扩展了技能系统的能力。第三个是#8275，通用化OpenAI补全的思维链token预算字段，对应#7994和#7638，之前只支持vLLM的字段，现在支持Qwen/SGLang、llama.cpp的字段，降低多后端适配成本。第四个是#8120，实验性追加压缩模式，对应上下文压缩的性能优化，复用提示缓存，减少压缩开销，这个是很重要的体验优化。第五个是#8262，在每个turn-start路径分发钩子，支持可取消的turn预检，修复了sendCustomMessage不触发钩子的问题，扩展了扩展系统的能力。第六个是#8254，防止Copilot策略登录限流，对应#7850，优化了Copilot登录的流程，减少被限流的概率。第七个是#8250，让子代理的进度和失败状态更可靠，修复了子代理还没完成就显示完成，失败信息丢失的问题，提升多代理协作的稳定性。第八个是#8249，刷新主题派生的文本，解决主题切换的时候旧的ANSI颜色残留，TUI闪烁的问题，提升UI体验。第九个是#8246，OpenAI补全的reasoning_details往返支持，对应#7994，解决了非加密的reasoning内容在重放的时候丢失的问题，提升推理链的可靠性。第十个是#8257，项目已经信任的话跳过项目代理确认，减少重复弹窗，提升 trusted repo 的使用体验。对，这10个也要说明内容，附链接。
然后第五部分功能需求趋势，从所有Issues里提炼，比如第一个是多模态能力扩展，除了图片，还要支持视频、音频输入，还有粘贴图片的优化，对应#3200、#2144这些。第二个是上下文管理优化，自动压缩的触发时机、压缩模式、成本优化，比如#6879、#8120、#7995这些。第三个是TUI稳定性和性能，大文本编辑、长会话渲染、大diff渲染不崩溃，还有终端兼容性，比如Konsole的快捷键、tmux resize的问题，#8029、#8036、#8028、#8278这些。第四个是模型和提供商兼容性，新增内置提供商（比如Neon AI Gateway、Bedrock Mantle）、对齐模型目录、支持新的模型能力（比如GLM的视觉模型、思维链预算字段），#7895、#8216、#8220、#8194这些。第五个是扩展系统能力，技能嵌套加载、钩子事件补全、子代理可靠性提升，#6479、#8262、#8250这些。第六个是跨平台和安装兼容性，Linux下符合XDG规范、SELinux容器支持、包管理器检测准确，#534、#7756、#8276这些。
然后第六部分开发者关注点，总结痛点和高频需求，比如第一个是上下文压缩的可靠性问题，很多用户遇到超过阈值不压缩，直到API拒绝，还有压缩失败的情况，是当前最突出的核心问题。第二个是成本优化，特别是通过OpenRouter用Anthropic模型的时候，缓存控制不支持导致成本高2.5倍，还有思维链相关的费用问题。第三个是大会话下的稳定性，长会话、大diff、大量媒体内容的时候TUI崩溃，V8字符串限制的问题，还有本地模型溢出的问题。第四个是Linux和容器环境的兼容性，配置路径不符合规范、SELinux权限、包管理器检测错误，这些在DevOps场景下很常见。第五个是扩展系统的易用性，技能嵌套、钩子事件不完善、子代理状态反馈不准，这些影响生态扩展。
对了，还要注意每个部分的链接都要附对，格式要清晰，语言要简洁专业，适合开发者看。还要注意今天是2026-08-18，数据是到2026-08-17的，所以开头可以提一下数据统计周期为2026-08-17 00:00至2026-08-18 00:00，来源是github.com/badlogic/pi-mono。
等下，速览部分要准确，比如：“今日无新版本发布，社区核心工作聚焦于上下文压缩可靠性、TUI稳定性及多提供商兼容性修复。过去24小时内共关闭20+项Issue，涵盖Anthropic拒绝回退、嵌套技能加载、Qwen模型目录对齐等关键问题，多项核心体验优化PR已合并。” 对，这样概括就行。
然后版本发布部分直接写“### 版本发布
无新版本发布（过去24小时无新Release）”
然后社区热点Issues，要挑10个，每个要标清楚状态、标题、为什么重要、社区反应、链接。比如第一个：
1. **[OPEN] #6879 [bug] 上下文超过压缩阈值后自动压缩不触发，直到Provider溢出报错**
   - 重要性：核心功能缺陷，用户反馈在长会话（如2小时+的Agent任务）中，上下文占用超过100%后压缩机制完全失效，直到API返回373k tokens的拒绝错误，直接影响长任务可用性。
   - 社区反应：评论18条、获赞17，为过去24小时评论数最高的Issue，多位用户反馈遇到类似场景。
   - 链接: earendil-works/pi Issue #6879
对，然后第二个#534，虽然closed了，但是是呼声很高的，赞39，最多：
2. **[CLOSED] #534 Linux下配置文件夹路径不符合XDG基础目录规范**
   - 重要性：Linux平台体验痛点，Pi默认将配置文件夹放在用户$HOME根目录，不符合主流Linux工具的XDG规范，可能导致配置混乱、权限问题。
   - 社区反应：评论15条、获赞39（全表最高），为长期反馈的高优先级需求，现已修复合并。
   - 链接: earendil-works/pi Issue #534
第三个#8029，OPEN的，性能问题：
3. **[OPEN] #8029 [bug] Prompt编辑器光标移动性能极差（大文本场景）**
   - 重要性：大文本编辑场景下的性能缺陷，当Prompt输入框有7000行文本时，单次方向键操作延迟高达1650ms，严重影响长提示词编写体验。
   - 社区反应：评论9条，多位长提示词用户反馈该问题。
   - 链接: earendil-works/pi Issue #8029
第四个#3200，功能需求，多模态：
4. **[OPEN] #3200 支持在prompt命令中传入视频/音频内容**
   - 重要性：多模态能力扩展需求，当前prompt仅支持图片输入，需要新增视频、音频类型支持，适配Gemma 4、GPT-4o等多模态模型，拓展Agent的媒体处理能力。
   - 社区反应：评论8条、获赞5，是多模态场景用户的热门需求。
   - 链接: earendil-works/pi Issue #3200
第五个#2144，CLOSED，图片粘贴：
5. **[CLOSED] #2144 [bug] 无法从剪贴板粘贴图片到Pi**
   - 重要性：基础多模态体验缺口，Claude Code等竞品已支持终端内剪贴板图片粘贴，Pi此前缺少该能力，影响截图、图片分析等场景的使用效率。
   - 社区反应：评论7条，已修复合并。
   - 链接: earendil-works/pi Issue #2144
第六个#7995，OPEN，成本问题：
6. **[OPEN] #7995 openai-responses接口不支持Anthropic风格缓存控制，使用Claude via OpenRouter成本高2.5倍**
   - 重要性：API兼容性导致的成本问题，OpenAI-responses实现未支持`cache_control`字段，无法使用Anthropic的提示缓存能力，经测试导致Claude模型调用成本上升2.5倍。
   - 社区反应：评论4条，由OpenRouter团队提交，影响所有通过OpenRouter使用Anthropic模型的用户。
   - 链接: earendil-works/pi Issue #7995
第七个#8036，OPEN，TUI崩溃：
7. **[OPEN] #8036 [bug] edit工具渲染大diff时TUI崩溃**
   - 重要性：稳定性缺陷，edit工具执行后生成14.5MB的超大diff时，TUI渲染阶段直接崩溃，影响大文件编辑、代码重构场景的可用性。
   - 社区反应：评论4条，多位处理大型代码库的用户反馈。
   - 链接: earendil-works/pi Issue #8036
第八个#8166，OPEN，会话逻辑bug：
8. **[OPEN] #8166 自定义消息注入破坏tool_calls与tool的相邻关系，导致后续所有会话轮次报错**
   - 重要性：核心会话逻辑缺陷，扩展调用`sendMessage`注入自定义消息后，会破坏后续消息的`tool_calls`/`tool`配对规则，导致所有后续轮次返回400错误，完全中断会话。
   - 社区反应：评论3条，扩展开发者反馈该问题影响自定义扩展的可用性。
   - 链接: earendil-works/pi Issue #8166
第九个#7756，OPEN，安装检测问题：
9. **[OPEN] #7756 detectInstallMethod错误将非pnpm安装标记为pnpm**
   - 重要性：包管理器兼容性问题，安装检测逻辑误将共享PNPM_HOME路径的非pnpm安装识别为pnpm，导致后续安装管理功能失效，影响多包管理器共存场景的用户。
   - 社区反应：评论3条，Linux开发环境用户反馈较多。
   - 链接: earendil-works/pi Issue #7756
第十个#8028，OPEN，渲染崩溃：
10. **[OPEN] #8028 [bug] TUI fullRender渲染超长内容时触发V8字符串长度限制崩溃**
    - 重要性：长会话稳定性缺陷，处理大量媒体内容（如视频帧分析）的Agent会话中，渲染输出超过V8字符串长度限制时直接崩溃，影响专业场景的可用性。
    - 社区反应：评论2条，多媒体Agent场景用户反馈。
    - 链接: earendil-works/pi Issue #8028
对，这10个就很好，覆盖了不同方面的热点。
然后重要PR进展，也是10个，每个要说明内容，链接：
1. **[CLOSED] #8258 fix(ai): 修复Anthropic拒绝错误及回退机制**
   - 内容：对应Issue #8017，修复了Anthropic返回`refusal`停止原因时的压缩失败问题，新增Anthropic API级别的`allowed_fallback_models`元数据支持，现在压缩失败时可以自动回退到允许的模型。
   - 链接: earendil-works/pi PR #8258
2. **[CLOSED] #8255 fix(coding-agent): 支持加载嵌套Markdown格式的技能**
   - 内容：对应Issue #6479，修复了技能发现逻辑仅识别`SKILL.md`目录、忽略子文件夹独立markdown技能文件的问题，现在支持`~/.agents/skills/third-party/xxx.md`格式的嵌套技能加载。
   - 链接: earendil-works/pi PR #8255
3. **[CLOSED] #8275 feat(ai): 通用化OpenAI补全的思维链token预算字段**
   - 内容：对应Issue #7638/#7994，扩展了`thinkingTokenBudgetField`配置，新增对Qwen/SGLang的`thinking_budget`、llama.cpp的`thinking_budget_tokens`字段支持，统一了不同后端的思维链预算配置方式。
   - 链接: earendil-works/pi PR #8275
4. **[CLOSED] #8120 feat(coding-agent): 新增实验性追加压缩模式**
   - 内容：通过环境变量`PI_EXPERIMENTAL=1`启用，该模式复用当前系统提示、工具、转换后的上下文和路由会话，让压缩后的前缀可以复用Provider的提示缓存，大幅降低压缩开销。
   - 链接: earendil-works/pi PR #8120
5. **[OPEN] #8262 feat(coding-agent): 在所有turn-start路径分发钩子，支持可取消的turn预检**
   - 内容：修复了`sendCustomMessage(triggerTurn: true)`不触发`input`钩子和`before_agent_start`事件的问题，新增可取消的turn预检逻辑，扩展了扩展系统的拦截能力。
   - 链接: earendil-works/pi PR #8262
6. **[CLOSED] #8254 fix(ai): 防止Copilot策略登录限流**
   - 内容：对应Issue #7850，优化了Copilot登录流程，在策略更新前先拉取账户模型目录，仅更新未配置的、支持工具能力的模型，对限流请求增加带边界的重试机制，降低登录被限流的概率。
   - 链接: earendil-works/pi PR #8254
7. **[CLOSED] #8250 fix(coding-agent): 提升子代理进度和失败状态的可靠性**
   - 内容：修复了子代理示例中“子任务未完成就标记为完成”“失败信息丢失”“单次/链式输出超过工具限制”等问题，新增专用的子代理状态跟踪逻辑，提升多代理协作的可靠性。
   - 链接: earendil-works/pi PR #8250
8. **[OPEN] #8249 fix(coding-agent,tui): 刷新主题派生的文本内容**
   - 内容：修复了主题切换时Markdown样式前缀、启动头、警告文本残留旧ANSI颜色的问题，解决了长会话中内容变化时TUI全屏闪烁的问题，提升UI体验的一致性。
   - 链接: earendil-works/pi PR #8249
9. **[CLOSED] #8246 feat(ai): 支持OpenAI补全的reasoning_details往返**
   - 内容：对应Issue #7994，修复了OpenAI补全实现仅支持加密的`reasoning`条目、非加密的推理内容在会话重放时丢失的问题，现在可以完整往返传输`reasoning.text`和`reasoning.summary`字段。
   - 链接: earendil-works/pi PR #8246
10. **[CLOSED] #8257 跳过已信任项目的子代理确认弹窗**
    - 内容：修复了项目已经被标记为可信时，每次运行项目本地代理仍会弹出确认框的问题，减少 trusted repo 下的重复交互。
    - 链接: earendil-works/pi PR #8257
对，这10个也覆盖了核心修复、功能优化、体验提升。
然后功能需求趋势，提炼一下：
### 功能需求趋势
从过去24小时的Issue及社区讨论来看，当前社区最关注的功能方向包括：
1. **多模态能力深化**：除基础的图片输入外，社区强烈需求支持视频、音频内容的输入，以及终端内剪贴板图片粘贴的体验优化，适配Gemma 4、GPT-4o等多模态模型的应用场景。
2. **上下文管理优化**：自动压缩的触发可靠性、压缩模式选择、提示缓存兼容是核心关注点，用户希望减少长会话下的API拒绝、成本过高的问题。
3. **大场景稳定性提升**：针对长会话、大文本编辑、大diff渲染、多媒体内容处理等场景的TUI崩溃、性能卡顿问题反馈密集，是当前稳定性优化的重点。
4

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报
**日期：** 2026-08-18

---

## 📌 今日速览

v0.21.13 正式版与 v0.21.11-nightly 双版本发布，重点增强 Web Shell 的多模态输入能力（支持拖拽/粘贴文本附件）和对话分支功能。社区反馈集中在 **上下文压缩后的状态不一致**、**Windows CLI 兼容性回归**、以及 **`qwen serve` 多工作空间资源治理** 三大方向，DSW EAS 端到端基准测试多轮迭代后整体验证通过。

---

## 🚀 版本发布

### v0.21.13（正式版）

**Highlights：**
- **Web Shell Composer 增强**：支持拖拽、放置和粘贴文本文件作为命名附件，与图片并列 ([#9180](https://github.com/QwenLM/qwen-code/pull/9180))
- **对话分支**：用户可从任意 Assistant 回复处 fork 对话

### v0.21.11-nightly.20260817.195128a17a

**关键变更：**
- **feat(autofix)**：默认拒绝的 footprint gate 和位置窗口 census ([#9156](https://github.com/QwenLM/qwen-code/pull/9156))
- fix(web-shell)：多项稳定性修复

### DSW EAS 基准测试进展

| 测试任务 | 状态 | 说明 |
|---|---|---|
| dsw-eas-tb-smoke r1/r3/r4 | ✅ SUCCEEDED | TB 2.0 + SWE-bench Verified 通过 |
| dsw-eas-tb-smoke r2 | ⚠️ QUARANTINED | 0/1 完成，已隔离 |
| dsw-eas-full r1/r2/r3 | ✅ | SWE 500 + TB 89 全量端到端验证 |

完整 Release 流水线经 wheelhouse bootstrap-parent 修复后稳定运行，所有基准均锚定 v0.21.13。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 重要性 | 链接 |
|---|---|---|---|
| [#9194](https://github.com/QwenLM/qwen-code/issues/9194) | **测试鲁棒性治理**：闭合 PR #9096 评审中暴露的 mutation-verified 测试钉扎漏洞（10 评论） | 测试加固领域系统性问题，影响自动化评审可信度 | [查看](https://github.com/QwenLM/qwen-code/issues/9194) |
| [#8316](https://github.com/QwenLM/qwen-code/issues/8316) | **取消提示时 prompt 不恢复到输入框**（9 评论） | 影响用户工作流，已存在近 3 周未修复 | [查看](https://github.com/QwenLM/qwen-code/issues/8316) |
| [#8051](https://github.com/QwenLM/qwen-code/issues/8051) | **`qwen serve` 多工作空间 daemon 资源限制**（9 评论） | 生产环境级性能/内存治理需求 | [查看](https://github.com/QwenLM/qwen-code/issues/8051) |
| [#9324](https://github.com/QwenLM/qwen-code/issues/9324) | **消息重复投递无重定向**（7 评论） | Qwen Desktop Code + Qwen 3.8 Max 场景的核心缺陷 | [查看](https://github.com/QwenLM/qwen-code/issues/9324) |
| [#6806](https://github.com/QwenLM/qwen-code/issues/6806) | **压缩后状态行上下文百分比不刷新**（6 评论） | `/compress` 与 `/compress-fast` 的 UI 一致性 bug | [查看](https://github.com/QwenLM/qwen-code/issues/6806) |
| [#9061](https://github.com/QwenLM/qwen-code/issues/9061) | **Windows CLI Ctrl+V 粘贴完全失效**（6 评论） | P1 回归 bug，0.21.0 之后版本受影响 | [查看](https://github.com/QwenLM/qwen-code/issues/9061) |
| [#9300](https://github.com/QwenLM/qwen-code/issues/9300) | **VP 模式内容未底对齐**（6 评论） | 渲染层视觉问题，影响默认终端缓冲体验 | [查看](https://github.com/QwenLM/qwen-code/issues/9300) |
| [#9296](https://github.com/QwenLM/qwen-code/issues/9296) | **Qwen Autofix 评审风暴与重复派发浪费算力**（4 评论） | 500 次运行 59% 被取消，效率严重低下 | [查看](https://github.com/QwenLM/qwen-code/issues/9296) |
| [#9320](https://github.com/QwenLM/qwen-code/issues/9320) | **`/compress-fast` 与 `/rewind` 后上下文丢失**（5 评论） | 与上下文管理相关的核心 session 问题 | [查看](https://github.com/QwenLM/qwen-code/issues/9320) |
| [#9250](https://github.com/QwenLM/qwen-code/issues/9250) | **`qwen serve` 写新文件硬编码 0600 权限**（4 评论） | 安全/协作场景下的可配置权限缺失 | [查看](https://github.com/QwenLM/qwen-code/issues/9250) |

---

## 🛠️ 重要 PR 进展（Top 10）

| # | PR | 内容 | 链接 |
|---|---|---|---|
| [#9358](https://github.com/QwenLM/qwen-code/pull/9358) | **fix(weixin)**：长轮询期间每 4 秒重发 TYPING 状态 | 修复微信渠道"对方正在输入"指示器中途过期 | [查看](https://github.com/QwenLM/qwen-code/pull/9358) |
| [#9202](https://github.com/QwenLM/qwen-code/pull/9202) | **fix(sdk)**：未识别诊断路由到有界侧通道 | 上限 50 条，避免污染 transcript blocks | [查看](https://github.com/QwenLM/qwen-code/pull/9202) |
| [#9303](https://github.com/QwenLM/qwen-code/pull/9303) | **fix(web-shell)**：daemon transcript 保留上限 | 解决浏览器端渲染 OOM 崩溃 | [查看](https://github.com/QwenLM/qwen-code/pull/9303) |
| [#9342](https://github.com/QwenLM/qwen-code/pull/9342) | **fix(review)**：清理 #9175 累积的 19 条建议积压 | review 流程维护性修复 | [查看](https://github.com/QwenLM/qwen-code/pull/9342) |
| [#9295](https://github.com/QwenLM/qwen-code/pull/9295) | **fix(core)**：过滤模型端点不支持的图片 MIME | 解决 HEIC/TIFF 等导致请求校验失败 | [查看](https://github.com/QwenLM/qwen-code/pull/9295) |
| [#9364](https://github.com/QwenLM/qwen-code/pull/9364) | **feat(daemon)**：`QWEN_SERVE_NEW_FILE_MODE` 可配置 | 新建文件权限可改为 umask 派生模式 | [查看](https://github.com/QwenLM/qwen-code/pull/9364) |
| [#8396](https://github.com/QwenLM/qwen-code/pull/8396) | **fix(hooks)**：关闭 hook 执行的 4 个信任边界漏洞 | HTTP 重定向、SSRF 等安全问题修复 | [查看](https://github.com/QwenLM/qwen-code/pull/8396) |
| [#9130](https://github.com/QwenLM/qwen-code/pull/9130) | **feat(triage)**：确定性 flake gate（沙箱验证） | PR 改动测试重跑 N 次（默认 5，可调 2–10） | [查看](https://github.com/QwenLM/qwen-code/pull/9130) |
| [#9190](https://github.com/QwenLM/qwen-code/pull/9190) | **feat(review)**：基于内容锚定的本地增量评审轮次 | 本地评审不再重扫整棵脏树，节省 token | [查看](https://github.com/QwenLM/qwen-code/pull/9190) |
| [#9131](https://github.com/QwenLM/qwen-code/pull/9131) | **feat(web-shell)**：composer skills 在 toggle 后增量刷新 | 优化 skill 切换时的渲染一致性 | [查看](https://github.com/QwenLM/qwen-code/pull/9131) |

---

## 📈 功能需求趋势

从近 24 小时活跃 Issue 提炼出的主要方向：

1. **跨客户端聊天面板统一化** — Web Shell / VSCode / Tauri Desktop / HTML 导出间的 transcript 契约（[#9354](https://github.com/QwenLM/qwen-code/issues/9354)、[#5883](https://github.com/QwenLM/qwen-code/issues/5883)）正在形成共识

2. **`qwen serve` / Daemon 资源治理** — 字节、WebSocket、文件描述符等维度的有界保护（[#8051](https://github.com/QwenLM/qwen-code/issues/8051)、[#9250](https://github.com/QwenLM/qwen-code/issues/9250)、[#8091](https://github.com/QwenLM/qwen-code/issues/8091)）

3. **微信渠道能力扩展** — 文件发送（[#9352](https://github.com/QwenLM/qwen-code/issues/9352)）、typing 指示器维持（[#9353](https://github.com/QwenLM/qwen-code/issues/9353)）、64 位消息 ID（[#9307](https://github.com/QwenLM/qwen-code/issues/9307)）形成系列诉求

4. **导出与回放能力** — HTML 导出需展示 thinking/工具结果的可展开/折叠视图（[#8208](https://github.com/QwenLM/qwen-code/issues/8208)）

5. **会话生命周期与计划任务** — 已存在会话复用创建计划任务（[#8906](https://github.com/QwenLM/qwen-code/issues/8906)）

6. **Provider 模型动态化** — ModelStudio Token Plan / Coding Plan 的模型列表应动态拉取（[#9368](https://github.com/QwenLM/qwen-code/issues/9368)）

---

## 💡 开发者关注点

### 🔥 高频痛点

| 类别 | 具体反馈 |
|---|---|
| **交互一致性回归** | v0.21.13 文本无法选中复制（[#9315](https://github.com/QwenLM/qwen-code/issues/9315)）、Windows Ctrl+V 粘贴失效（[#9061](https://github.com/QwenLM/qwen-code/issues/9061)）— 自定义终端交互层引发兼容问题 |
| **上下文管理语义模糊** | `/compress`、`/compress-fast`、`/rewind` 后的状态显示与 token 计数不一致（[#9320](https://github.com/QwenLM/qwen-code/issues/9320)、[#9309](https://github.com/QwenLM/qwen-code/issues/9309)、[#6806](https://github.com/QwenLM/qwen-code/issues/6806)） |
| **会话取消体验** | Ctrl+C 取消后 prompt 内容不恢复，用户需重输（[#8316](https://github.com/QwenLM/qwen-code/issues/8316)） |
| **桌面端消息投递异常** | 同一消息被多次接收并打乱专注流（[#9324](https://github.com/QwenLM/qwen-code/issues/9324)） |
| **渲染闪烁** | 输出内容过程中闪烁（[#3806](https://github.com/QwenLM/qwen-code/issues/3806)） |

### 🛡️ 安全与稳定性

- **Autofix 算力浪费**：59% 运行被取消，重复派发严重（[#9296](https://github.com/QwenLM/qwen-code/issues/9296)）
- **Hook 信任边界**：4 个独立漏洞需要闭合（[#8396](https://github.com/QwenLM/qwen-code/pull/8396)）
- **多 agent 模式崩溃**：打开错误状态的不完整 agent-team tab 会导致交互会话崩溃（[#9290](https://github.com/QwenLM/qwen-code/issues/9290)）

### 📊 仓库工程化

- **测试鲁棒性治理**：mutation-verified 测试钉扎成为 PR 评审中的反复出现的模式问题（[#9194](https://github.com/QwenLM/qwen-code/issues/9194)）
- **Repo Hygiene 报告**：2026-W33 报告 8 项发现（[#8835](https://github.com/QwenLM/qwen-code/issues/8835)）
- **Fleet Shepherd Dashboard**：自动维护中，bot 集群运行平稳（[#7167](https://github.com/QwenLM/qwen-code/issues/7167)）

---

*数据来源：[github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) | 报告生成时间：2026-08-18*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

用户现在需要我生成2026-08-18的DeepSeek TUI（哦这里注意数据里的仓库名是CodeWhale？哦看数据来源是Hmbown/DeepSeek-TUI但 Issues 和 PR 的链接都是Hmbown/CodeWhale的，应该是项目改名或者别名？不管，按照给的数据来）的社区动态日报，结构要清晰，分那六个部分，中文，技术向，每个带链接。

首先，先理清楚每个部分要什么：
1. 今日速览：2-3句话，概括今天最重要的。首先看今天（2026-08-17更新的，因为日报是2026-08-18的，过去24小时的数据就是17号的）最重要的动态：首先v0.9.9刚发布（看PR #5476是release 0.9.9，closed了，还有CHANGELOG的补充PR），然后有很多围绕v0.9.9的修复、文档本地化、TUI体验优化的PR，还有社区反馈的几个高优bug，比如CodeWhale配置路径跨平台不一致、大文本处理卡死、TUI崩溃这些问题还在讨论。对，速览要抓重点：v0.9.9正式发布，聚焦稳定性与透明度；同时社区提交了多份跨平台兼容性、TUI交互、文档本地化的优化PR，高优bug（大文本处理卡死、配置路径 fragmentation、TUI崩溃）仍在推进修复。

然后2. 版本发布：哦看PR #5476是release 0.9.9，closed了，还有几个addendum的PR，所以要总结v0.9.9的更新内容。首先看PR #5476的summary：是truth-and-resilience发布，修复了shell工具在主机磁盘/描述符不足时会卡死会话的bug（#5465）， honest标注未验证的上下文窗口、输出上限、遥测默认值，还有DeepSeek V4的分时定价支持（#5470），还有DSH海洋场景皮肤（#5484），网站文案优化（#5483），模型目录定价同步（#5485），还有两个社区贡献的修复（#5474 #5475，贡献者h3c-hexin和asto18089）。对，还要说明v0.9.9是刚发布的稳定版，核心是稳定性、定价准确性、用户体验优化。

接下来3. 社区热点Issues，要挑10个最值得关注的，每个说明重要性和社区反应。首先看评论数多的，还有高优的：
第一个：#2369，CodeWhale配置路径跨平台不一致+静默迁移bug，评论8，最高，而且跨Windows/Cygwin，影响用户配置持久化，有补丁提交，社区讨论多。
第二个：#5056，测试可靠性问题，flaky的背景验证器测试，12个未分类的忽略测试，影响CI稳定性，是维护者自己提的，高优。
第三个：#5324，agent工具32字段schema简化，已经closed了，之前模型会报错，现在简化了，解决了模型调用agent工具的兼容性问题，社区反馈的bug修复。
第四个：#5424，v0.9.7 Codewhale TUI崩溃，评论7，用户反馈用--continue启动，等1分钟输出就崩溃，高优bug，影响使用。
第五个：#1425，大文本处理会话卡死，评论7，用户处理300万字小说，子agent超时卡死，是性能/子agent调度的问题，很多做长文本处理的用户关注。
第六个：#5123，agent启动界面配置项过多，builder运行被阻塞，评论7，影响子agent调度的UX，是dogfooding发现的问题，高优。
第七个：#1651，YOLO Agent跑测试时VS Code崩溃，评论6，影响在VS Code集成的用户，环境兼容性问题。
第八个：#1829，SSH连接失败，TUI shell沙箱阻断TCP 22出站，评论6，影响需要远程操作的用户，跨平台网络问题。
第九个：#5374，agent输出文本乱码，评论5，macOS用户反馈，影响可读性，是显示层的bug。
第十个：#5482，文档全量中文化需求，评论1但刚提的，用户基数大，是社区高需求，提升中文用户体验。
哦对，每个要带链接，说明为什么重要，社区反应。比如#2369是跨平台配置的核心问题，已有用户提交补丁，讨论度高；#1425是大模型长文本处理的典型痛点，多位用户跟进反馈。

然后4. 重要PR进展，挑10个，看评论数？不，看重要性，都是2026-08-17更新的：
第一个：#5491，fix(tui): 持久化审批结果再执行，对应Issue #5360，解决审批结果丢失、会话恢复后审批状态不一致的问题，提升操作可靠性。
第二个：#5481，docs: 修复v0.9.9过时的A/B/C级引用和失效锚点，是文档维护的PR，清理过时内容。
第三个：#5490，feat(web): 共享组件的locale选择通过pickText路由，对应Issue #5337，修复非英语路由下可点击控件失效的问题，提升多语言体验。
第四个：#5488，feat(web): 文档壳迁移到字典 spine，对应#5337，解决非英语 locales 下文档页 hero 区域显示英文的问题，支持更多语言本地化。
第五个：#5486，fix(tui): 窄宽度下隐藏会话指标条，优化小窗口下的TUI显示，避免信息拥挤，提升UX。
第六个：#5473，perf(skills): 保持配置的技能提示稳定，解决技能路径显示混乱的问题，提升模型对技能的识别准确性。
第七个：#5474，perf(context): 压缩所有 noisy web 工具结果，减少上下文浪费，提升长会话的性能，社区贡献的PR。
第八个：#5475，fix(config): 安全解析小写模型选择器，解决模型名称大小写导致的配置解析错误，社区贡献的修复。
第九个：#5470，fix(tui): DeepSeek V4分时定价按回合解析，解决之前V4定价是固定值的问题，现在按UTC高峰/非高峰动态计算，定价更准确。
第十个：#5465，fix(tui): exec流创建软失败，避免shell工具卡死会话，是v0.9.9的核心修复，解决了主机资源不足时整个会话卡住的问题。
对，这些是重要的，每个带链接，说明内容。

然后5. 功能需求趋势，从所有Issues里提炼。看Issues的标签和内容：首先多语言/本地化是热点，尤其是中文，还有非英语路由的问题，比如#5337、#5290、#5482；然后是子agent/代理调度的优化，比如#5123、#1425、#5311（插件系统）；然后是跨平台兼容性，Windows/Cygwin/macOS的配置、网络、显示问题，比如#2369、#1829、#1651、#5424；然后是第三方模型配置简化，#5350提的预制模板，降低新手门槛；还有TUI交互优化，比如窄宽度适配、状态栏、审批流程优化，#5437、#5360、#5102（截图查看）；还有上下文和性能优化，比如#5239（1M上下文支持）、#5056（测试可靠性）、#4170（MCP能力元数据）。

然后6. 开发者关注点，就是高频的痛点：首先是跨平台兼容性问题，Windows/Cygwin下的配置路径、SSH沙箱限制、macOS下的输出乱码和崩溃，是用户反馈最多的问题；其次是长文本/大工程处理时的子agent调度稳定性，超时卡死、并行加载flake的问题；然后是定价和上下文窗口的透明度，之前定价不准、上下文压缩阈值太低（128K vs 1M支持）；还有新手友好度，第三方模型配置复杂、文档只有英文，门槛高。

哦对了，要注意，数据里的仓库名有时候是CodeWhale，有时候是DeepSeek-TUI？看数据来源是github.com/Hmbown/DeepSeek-TUI，但Issues和PR的链接都是Hmbown/CodeWhale，应该是项目的公开名是CodeWhale，是DeepSeek的TUI工具？所以要统一称呼，比如可以说「DeepSeek TUI（项目代号 CodeWhale）」，避免混淆。

还有，要注意日期是2026-08-18的日报，数据是过去24小时（也就是2026-08-17的更新），所以开头可以说明统计周期为2026-08-17 00:00至2026-08-18 00:00，数据来源为GitHub仓库 Hmbown/DeepSeek-TUI（CodeWhale）。

还有，每个Issue和PR都要附上链接，按要求。

哦对了，版本发布部分，因为v0.9.9是刚发布的，所以要写清楚，如果没有的话才省略，这里有，所以要写。看PR #5476是release 0.9.9，closed，还有后续的CHANGELOG补充，所以v0.9.9于2026-08-17正式发布，核心更新点要列清楚：
- 核心稳定性修复：修复shell工具在主机磁盘/文件描述符耗尽时会卡死整个会话的严重bug（#5465）
- 定价准确性：支持DeepSeek V4系列模型的分时（高峰/非高峰）动态定价，替换之前的固定费率（#5470）
- 用户体验优化：新增DSH海洋场景皮肤、优化网站文案、同步最新模型目录定价
- 透明度提升：明确标注未验证的上下文窗口、输出上限、遥测默认值，避免用户误判
- 社区贡献：合并2个社区提交的bug修复，更新贡献者名单。

然后社区热点Issues的10个，要排序，按重要性或者评论数，比如：
1. Issue #2369：CodeWhale 跨平台配置路径不一致与静默迁移bug
   链接：https://github.com/Hmbown/CodeWhale/issues/2369
   重要性：影响Windows/Cygwin用户的配置持久化，是跨平台兼容性的核心问题，已有用户提交针对性补丁，社区讨论热度最高（8条评论）。
2. Issue #5056：测试可靠性：flaky背景验证器测试与12个未分类忽略测试
   链接：https://github.com/Hmbown/CodeWhale/issues/5056
   重要性：由项目维护者提交，影响CI流水线的稳定性，是v0.9.x版本发布前的阻塞性问题，已明确相关代码位置和修复方向。
3. Issue #5424：v0.9.7 版本 Codewhale TUI 无故崩溃
   链接：https://github.com/Hmbown/CodeWhale/issues/5424
   重要性：高复现的用户侧崩溃bug，使用`--continue`启动会话后等待1分钟输出即崩溃，影响所有使用v0.9.7的用户。
4. Issue #1425：大文本处理工程后会话中断卡死
   链接：https://github.com/Hmbown/CodeWhale/issues/1425
   重要性：长文本处理场景的核心痛点，用户处理300万字小说时启动10个子agent后因超时卡死，是子agent调度机制的高优问题。
5. Issue #5123：Agent 启动界面配置项过多，builder 运行被阻塞
   链接：https://github.com/Hmbown/CodeWhale/issues/5123
   重要性：项目维护者dogfooding发现的问题，子agent调度界面的可读性和可用性缺陷，直接影响代理工作流的使用体验。
6. Issue #1651：YOLO Agent 执行测试脚本时 VS Code 崩溃
   链接：https://github.com/Hmbown/CodeWhale/issues/1651
   重要性：影响VS Code集成终端用户的使用，是IDE集成场景的兼容性bug。
7. Issue #1829：SSH 连接失败：TUI shell 沙箱阻断 TCP 22 出站
   链接：https://github.com/Hmbown/CodeWhale/issues/1829
   重要性：远程开发场景的核心问题，TUI内置shell沙箱默认阻断SSH出站，导致用户无法正常使用远程服务器。
8. Issue #5374：Agent 输出文本乱码
   链接：https://github.com/Hmbown/CodeWhale/issues/5374
   重要性：macOS用户高频反馈的显示层bug，影响agent输出的可读性，复现率100%。
9. Issue #5350：简化第三方模型配置，增加预制模板
   链接：https://github.com/Hmbown/CodeWhale/issues/5350
   重要性：社区高票需求，可大幅降低新手配置第三方模型的门槛，减少配置调试时间。
10. Issue #5482：文档全量中文化需求
    链接：https://github.com/Hmbown/CodeWhale/issues/5482
    重要性：针对快速增长的中文用户群体的核心需求，可降低非英语用户的使用门槛，社区响应度高。

然后重要PR进展的10个：
1. PR #5491：持久化审批结果后再执行操作
   链接：https://github.com/Hmbown/CodeWhale/pull/5491
   内容：修复审批结果丢失、会话恢复后审批状态不一致的问题，要求审批结果必须先持久化到会话日志才能执行操作，拒绝过期决策，对应Issue #5360。
2. PR #5470：DeepSeek V4 分时定价动态解析
   链接：https://github.com/Hmbown/CodeWhale/pull/5470
   内容：替换之前V4模型的固定定价，支持按UTC高峰/非高峰时段动态计算费用，定价准确性大幅提升。
3. PR #5465：Shell 执行流软失败，避免卡死会话
   链接：https://github.com/Hmbown/CodeWhale/pull/5465
   内容：v0.9.9核心修复，当主机资源不足（磁盘/描述符耗尽）时，shell执行流不再 wedge 整个会话，而是返回友好错误，避免会话卡死。
4. PR #5490：Web 端共享组件多语言路由优化
   链接：https://github.com/Hmbown/CodeWhale/pull/5490
   内容：修复非英语路由下可点击控件失效的问题，统一使用pickText处理多语言文本选择，对应Issue #5337。
5. PR #5488：文档壳迁移到多语言字典 spine
   链接：https://github.com/Hmbown/CodeWhale/pull/5488
   内容：修复非英语 locales 下文档页顶部hero区域强制显示英文的问题，支持8种小语种的文档翻译，对应Issue #5337。
6. PR #5474：压缩所有 Web 工具的输出结果
   链接：https://github.com/Hmbown/CodeWhale/pull/5474
   内容：社区贡献的优化，对Web、web_search、web.run、fetch_url等工具的 noisy 结果应用软限制，减少上下文浪费，提升长会话性能。
7. PR #5475：安全解析小写模型选择器
   链接：https://github.com/Hmbown/CodeWhale/pull/5475
   内容：社区贡献的修复，解决小写模型名称（如`glm-5.2`）被错误识别为其他 provider 模型的问题，提升模型配置的兼容性。
8. PR #5486：窄宽度下隐藏会话指标条
   链接：https://github.com/Hmbown/CodeWhale/pull/5486
   内容：TUI UX优化，当终端宽度低于60列时，自动隐藏冗余的会话指标条，避免信息拥挤，提升小窗口下的可读性。
9. PR #5473：保持配置的技能提示稳定
   链接：https://github.com/Hmbown/CodeWhale/pull/5473
   内容：优化技能目录的展示逻辑，避免配置的技能路径显示混乱，提升模型对自定义技能的识别准确率。
10. PR #5481：文档过时引用与锚点修复
    链接：https://github.com/Hmbown/CodeWhale/pull/5481
    内容：清理文档中过时的v0.9.9之前的A/B/C级引用、失效的页面锚点，修正与当前代码不一致的描述，提升文档准确性。

然后功能需求趋势，提炼：
1. 多语言与本地化：是当前最热门的需求方向，除全量中文化外，非英语路由的控件可用性、小语种文档支持都有大量诉求，中文用户增长带动本地化需求爆发。
2. 跨平台兼容性：Windows/Cygwin下的配置、网络、显示问题，macOS下的稳定性问题，是社区反馈最集中的方向，覆盖用户从配置到使用的全流程。
3. 子Agent与插件生态：子agent调度的稳定性、启动界面的简化、插件系统的完善（#5311 提的Kimi级插件市场）是高级用户的核心诉求，面向复杂工作流场景。
4. 新手友好度：第三方模型配置简化、内置预制模板、文档本地化，是降低新用户门槛的核心方向，社区多次提及减少配置调试时间。
5. 上下文与性能优化：1M上下文窗口支持、长文本处理稳定性、上下文压缩阈值调整，是处理大工程场景的用户的核心需求。

然后开发者关注点，也就是痛点：
1. 跨平台兼容性短板：Windows/Cygwin下的配置路径 fragmentation、SSH沙箱限制、macOS下的输出乱码和崩溃，是不同系统用户普遍反馈的问题，覆盖环境适配的全场景。
2. 长任务调度稳定性：大文本处理、并行子agent执行时的超时卡死、并行测试flake，是高负载场景下的核心痛点，影响复杂任务的可完成性。
3. 信息透明度不足：此前定价不准确、上下文压缩阈值不合理（默认128K despite模型支持1M）、未验证的默认值未标注，导致用户误判，是多次反馈的体验问题。
4. 文档与配置门槛：英文文档对非英语用户不友好，第三方模型配置无引导，新手调试成本高，是社区降低使用门槛的核心诉求。

哦对了，还要注意，数据里的项目名有时候是CodeWhale，有时候是DeepSeek-TUI，所以开头可以说明：「本日报统计周期为2026-08-17 00:00至2026-08-18 00:00，数据来源为GitHub仓库 [Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)（项目运行时代号 CodeWhale），聚焦 DeepSeek 系列 TUI 工具的社区动态。」

还有，速览部分要简洁，2-3句话：
「今日社区最核心的动态是 DeepSeek TUI（CodeWhale）v0.9.9 正式发布，该版本聚焦稳定性与透明度，修复了

</details>

<details>
<summary><strong>ComfyUI</strong> — <a href="https://github.com/comfyanonymous/ComfyUI">comfyanonymous/ComfyUI</a></summary>

# ComfyUI 社区动态日报 · 2026-08-18

---

## 1. 今日速览

DynamicVRAM / AIMDO 内存管理问题持续发酵，多个 Issue 反映回归后出现 OOM、无限挂起和性能严重退化，成为社区当前最大痛点。MiniMax H3 模型在多款 GPU 上暴露出 GPU 丢失、动态 VRAM 挂起、全分辨率 4x 降速等严重问题，社区高度关注。与此同时，v0.33.2 回移版本已合入多项修复，AOTriton 内核启动验证、Qwen3.5 离线执行修复等关键 PR 正在推进。

---

## 2. 版本发布

过去 24 小时无正式 Release 发布。但 PR #15691 已合入 **v0.33.2 回移版本**，包含以下修复回移：
- #15579、#15655、#15612、#15684、#15690、#15526

👉 [PR #15691](https://github.com/Comfy-Org/ComfyUI/pull/15691)

---

## 3. 社区热点 Issues

### ① Dynamic VRAM 流式传输崩溃导致所有生成失败（回归）
**#15255** · 🔥 56 评论 · OPEN
8 月 3 日更新引入的回归，`HostBuffer.read_file_slice` 失败导致 CUDA OOM。已报告 NVIDIA，临时方案：`--cuda-device 0` 或 `--disable-pinned-memory`。评论数极高，社区影响面广。
👉 [Issue #15255](https://github.com/Comfy-Org/ComfyUI/issues/15255)

### ② MiniMax H3 可复现导致 RTX 5070 Ti GPU 丢失 / TDR 黑屏
**#15488** · 9 评论 · OPEN
64GB RAM 系统上稳定复现 GPU 丢失，将 Windows 限制到 32GB 后完全稳定。疑似系统内存与 GPU 交互的底层问题，RTX 50 系列用户需重点关注。
👉 [Issue #15488](https://github.com/Comfy-Org/ComfyUI/issues/15488)

### ③ MiniMax H3 全分辨率生成 v0.32.0 后慢 4 倍
**#15665** · 2 评论 · OPEN
从 #15486 的 `v = v.clone()` 修改引入，1280x736/362帧从 ~26 分钟暴增至 ~2 小时。小分辨率不受影响，回归定位明确。
👉 [Issue #15665](https://github.com/Comfy-Org/ComfyUI/issues/15665)

### ④ DynamicVRAM 在 RTX 4070 12GB 上导致 MiniMax H3 无限挂起
**#15628** · 6 评论 · OPEN
禁用自定义节点后仍复现，底层 CUDA 非法内存访问，12GB 显存用户受影响严重。
👉 [Issue #15628](https://github.com/Comfy-Org/ComfyUI/issues/15628)

### ⑤ AIMDO VRAM 分配失败（非 OOM）
**#12943** · 21 评论 · OPEN
3 月即已报告，至今未解决，持续有用户反馈。AIMDO 内存分配机制在 17.1 版本中存在非 OOM 失败路径。
👉 [Issue #12943](https://github.com/Comfy-Org/ComfyUI/issues/12943)

### ⑥ v0.33.1 导致 FLUX2 无法正常使用 GGUF CLIP 模型
**#15616** · 1 评论 · OPEN
Cuda Graphs 提交将残差相加改为原地写回，对 Qwen3-8B GGUF CLIP 编码输出产生数值偏差，导致 FLUX2 条件编码错误。影响所有使用 GGUF 量化 CLIP 的用户。
👉 [Issue #15616](https://github.com/Comfy-Org/ComfyUI/issues/15616)

### ⑦ DynamicVRAM / AIMDO 导致 HDD 用户极端降速（10s → 15min）
**#15661** · 👍 1 · OPEN
RTX 4090 用户反映，模型存储在 HDD 时 DynamicVRAM 频繁换入换出导致 GPU 利用率极低，请求增加"优先 GPU / 禁用动态内存"选项。
👉 [Issue #15661](https://github.com/Comfy-Org/ComfyUI/issues/15661)

### ⑧ MiniMax H3 作为单图编辑模型的功能请求
**#15644** · 👍 8 · 今日最高赞
社区发现 MiniMax 可作为单图模型使用，但当前节点限制最小帧数为 5，请求支持 t=1。已有第三方 VAE 可用，社区呼声高。
👉 [Issue #15644](https://github.com/Comfy-Org/ComfyUI/issues/15644)

### ⑨ ImageUpscaleWithModel 为 17.9MB 模型预留 4.83GB 并驱逐其他模型
**#15573** · 2 评论 · OPEN
`load_models_gpu` 分配固定大小内存与实际模型大小无关，导致已加载的 checkpoint 被不必要驱逐，严重影响工作流效率。
👉 [Issue #15573](https://github.com/Comfy-Org/ComfyUI/issues/15573)

### ⑩ `--reserve-vram` 参数被忽略
**#15666** · 2 评论 · OPEN
用户设置 `--reserve-vram` 后 VRAM 使用仍超出限制，DynamicVRAM 机制似乎绕过了该参数的约束。
👉 [Issue #15666](https://github.com/Comfy-Org/ComfyUI/issues/15666)

---

## 4. 重要 PR 进展

### ① v0.33.2 回移版本
**#15691** · CLOSED（已合入）
回移 6 个修复到 v0.33.2，包括 Seedance 2.5 1080p、FishAudio 基础节点、工作流模板更新等。
👉 [PR #15691](https://github.com/Comfy-Org/ComfyUI/pull/15691)

### ② 修复 AOTriton 内核启动前验证
**#15648** · OPEN
`can_use_flash_attention()` 只检查参数兼容性但未验证内核是否为当前架构编译，导致运行时崩溃。修复后在启用前验证内核实际可启动。
👉 [PR #15648](https://github.com/Comfy-Org/ComfyUI/pull/15648)

### ③ 修复 Qwen3.5 DeltaNet 离线执行时参数设备不匹配
**#15685** · OPEN
`A_log` 和 `dt_bias` 在 CPU 离线时，GPU 执行的 manual-cast 层发生设备不匹配。修复方案：将小 float32 前向用副本 cast 到激活设备。
👉 [PR #15685](https://github.com/Comfy-Org/ComfyUI/pull/15685)

### ④ 添加 Gemini 3.7 Flash 到 Gemini 文本节点
**#15688** · OPEN
Partner Node 更新，新增 Gemini 3.7 Flash 模型支持，需定价更新。
👉 [PR #15688](https://github.com/Comfy-Org/ComfyUI/pull/15688)

### ⑤ Seedance 2.5 新增 1080p 分辨率
**#15684** · CLOSED（已合入）
ByteDance Seedance 2.5 视频生成节点增加 1080p 选项，已更新定价和计费测试。
👉 [PR #15684](https://github.com/Comfy-Org/ComfyUI/pull/15684)

### ⑥ FishAudio 基础节点实现
**#15612** · CLOSED（已合入）
新增 FishAudio 语音合成相关节点，已更新定价。
👉 [PR #15612](https://github.com/Comfy-Org/ComfyUI/pull/15612)

### ⑦ 修复损坏 safetensors 文件在 0.6+ 版本的友好错误提示
**#15687** · OPEN
safetensors 0.6 将错误信息从 Rust 枚举名改为自然语言描述，导致原有错误匹配失效。本 PR 适配新格式。
👉 [PR #15687](https://github.com/Comfy-Org/ComfyUI/pull/15687)

### ⑧ model_patcher: 支持 setter-backed WeightHooks 安全操作
**#15532** · OPEN
FP8/INT8 模块的 setter 拒绝 Hook 路径的 `inplace_update=True`，导致备份恢复丢失结构化量化信息。本 PR 改为完整替换语义。
👉 [PR #15532](https://github.com/Comfy-Org/ComfyUI/pull/15532)

### ⑨ model_patcher: 同步与释放离线 Hook 权重
**#15533** · OPEN
与 #15532 配套，修复 Hook 写回后普通权重委托在同步传输中的问题，并在 DynamicVRAM 卸载时释放 Hook 模型。
👉 [PR #15533](https://github.com/Comfy-Org/ComfyUI/pull/15533)

### ⑩ 修复空 extra_model_paths 配置导致启动崩溃
**#15686** · OPEN
空 YAML 或纯注释 YAML 解析为 `None` 而非空字典，导致 `load_extra_path_config()` 迭代失败。简单但影响启动的修复。
👉 [PR #15686](https://github.com/Comfy-Org/ComfyUI/pull/15686)

---

## 5. 功能需求趋势

| 方向 | 说明 | 关联 Issue |
|---|---|---|
| **DynamicVRAM / AIMDO 可控性** | 社区强烈要求增加"禁用动态内存"或"优先 GPU"选项，HDD 用户和低显存用户受影响尤其严重 | #15661, #15666, #15679 |
| **MiniMax H3 完善** | 单图模式支持（t=1）、GPU 稳定性、全分辨率性能回归，该模型生态尚不成熟 | #15644, #15488, #15628, #15665 |
| **量化模型精度保障** | GGUF/INT8/FP8 量化模型在原地操作和 Cuda Graphs 优化后精度受损，需要更严格的数值等价验证 | #15616, #15693 |
| **内存分配精确化** | 模型加载预留内存与实际大小脱节，导致不必要的驱逐和浪费 | #15573, #15575 |
| **Partner API 节点扩展** | Gemini 3.7 Flash、Seedance 2.5 1080p、FishAudio 等持续接入，API 节点生态快速扩展 | PR #15688, #15684, #15612 |

---

## 6. 开发者关注点

### 🔴 DynamicVRAM / AIMDO 是当前最大系统性问题
涉及 Issue 多达 **7 个以上**，症状涵盖：OOM 崩溃、无限挂起、4x 性能退化、HDD 用户极端降速、WSL 共享内存泄漏、`--reserve-vram` 失效。核心矛盾在于动态内存换入换出策略在多 GPU、HDD、WSL 等场景下缺乏足够的用户控制选项。社区急需一个"禁用/限制 DynamicVRAM"的开关。

### 🟡 MiniMax H3 适配不成熟
新模型在 RTX 5070 Ti（GPU 丢失）、RTX 4070 12GB（挂起）、全分辨率（4x 降速）等多场景出问题，且 `v = v.clone()` 回归表明模型与内存管理的交互未充分测试。建议使用 MiniMax H3 的用户暂避全分辨率，关注 v0.33.2 修复情况。

### 🟡 量化模型优化引入数值偏差
v0.33.1 的 Cuda Graphs 优化将残差加法改为原地写回，对 GGUF CLIP 产生数值影响。这是一个微妙但重要的信号：**性能优化不得以牺牲量化精度为代价**，需要更严格的数值回归测试。

### 🟢 Partner API 节点持续高速迭代
Gemini 3.7 Flash、Seedance 2.5 1080p、FishAudio、Kling v2 下线等，API 节点生态正在快速扩展。同时 Kling v2 将于 9 月 15 日退役，相关用户需提前迁移。

---

*数据来源：github.com/comfyanonymous/ComfyUI · 统计时间：2026-08-18*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

`导致工具调用死循环**
   重要性：该bug使DeepSeek V4 Flash云模型在agent场景中陷入无限工具调用循环，单次会话可消耗约31M Token，造成严重资源浪费。
   社区反应：已有多位agent开发者反馈遇到该问题，呼吁官方修复云模型的输出过滤逻辑。
4. **[ollama/ollama Issue #17825](https://github.com/ollama/ollama/issues/17825) qwen3.8工具调用解析失败后重试永久挂起**
   重要性：Qwen3.8在遇到XML格式的工具调用解析错误时，首次请求返回500后，后续相同请求会永久无响应，直到重启runner，严重影响agent场景的容错性。
   社区反应：发布当日即收到开发者反馈，属于高优先级的稳定性问题。
5. **[ollama/ollama Issue #17804](https://github.com/ollama/ollama/issues/17804) [bug] MLX vision runner高分辨率图像输入崩溃**
   重要性：Apple M5 Pro等48GB统一内存设备运行Qwen3.8-27B时，输入24.5MP高分辨率图像会申请125GB Metal缓冲区导致崩溃，阻塞高端Mac用户的视觉推理场景。
   社区反应：已有多位Mac用户反馈该问题，呼吁优化MLX视觉引擎的内存占用。
6. **[ollama/ollama Issue #17829](https://github.com/ollama/ollama/issues/17829) MLX引擎无prompt/prefix缓存**
   重要性：MLX引擎在多步agent场景中每次请求都重新计算全量prompt，导致首Token延迟（TTFT）随上下文增长线性上升，严重影响agent交互体验。
   社区反应：M1 Ultra等大内存Mac用户反馈明显，是MLX引擎的核心优化需求。
7. **[ollama/ollama Issue #17821](https://github.com/ollama/ollama/issues/17821) [bug] Ollama断网重启丢失会话**
   重要性：网络波动时Ollama会自动重启并丢失所有未保存的会话，严重影响本地开发的连续性。
   社区反应：Windows、Linux用户均有反馈，属于基础稳定性问题。
8. **[ollama/ollama Issue #17822](https://github.com/ollama/ollama/issues/17822) [bug] 本地API误报401 Invalid API Key**
   重要性：未配置任何云凭证、无反向代理的纯净本地环境，调用`/api/embed`和`/api/generate`会返回认证错误，阻塞所有本地API调用场景。
   社区反应：发布当日即收到多条反馈，属于严重的配置兼容bug。
9. **[ollama/ollama Issue #17814](https://github.com/ollama/ollama/issues/17814) qwen3.x视觉模型双图相同尺寸吞图**
   重要性：多图输入场景中，两张像素尺寸相同的图片会被模型忽略一张，且

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggerganov/llama.cpp">ggerganov/llama.cpp</a></summary>

# llama.cpp 社区动态日报 — 2026-08-18

## 今日速览

过去 24 小时发布 4 个小版本（b10455–b10472），重点修复 AMD APU 显存误判（b10472）并优化 SYCL 量化拷贝性能。社区讨论集中在推理性能回归（MTP、量化 KV cache）、多 GPU 张量切分稳定性，以及 llama-server 的功能演进（预填充/解码分离、路由模式、可观测性）等方向。多个 PR 聚焦内存安全与空指针解引用等稳定性加固。

---

## 版本发布

- **b10472**：CUDA 端为 HIP 构建跳过 UMA 覆盖逻辑（[#27083](https://github.com/ggml-org/llama.cpp/pull/27083)）——AMD APU 通过 `hipMemGetInfo` 报告准确内存，此前使用 `MemAvailable` 会在小显存分配场景过度承诺，修复 [#18159](https://github.com/ggml-org/llama.cpp/issues/18159)。
- **b10470**：CI 在 release.yml 中显式创建并推送 release tag（[#27261](https://github.com/ggml-org/llama.cpp/pull/27261)），替代依赖 Re（原文截断）的方式，提升发布流程可靠性。
- **b10456**：SYCL 修复量化 cpy kernel 的线程/块数量（[#27160](https://github.com/ggml-org/llama.cpp/pull/27160)），与量化尺寸成比例分配，减少过/欠订阅；q4_0→f32 路径在 Arc 70 上吞吐由 20.21 GB/s 明显提升。
- **b10455**：SYCL 支持 `OPT_STEP_ADAMW`、`OPT_STEP_SGD` 算子（[#25268](https://github.com/ggml-org/llama.cpp/pull/25268)）。

---

## 社区热点 Issues（精选 10 个）

1. **[#21266](https://github.com/ggml-org/llama.cpp/issues/21266)｜服务器：预填充/解码分离支持**（14 👍 / 33 评论）
   维护者 ggerganov 提出的 roadmap 需求，将 prompt 处理与 token 生成部署到不同设备（参考 perplexity 的 disaggregated 方案）。这是 llama-server 生产级演进的关键方向。

2. **[#25664](https://github.com/ggml-org/llama.cpp/issues/25664)｜Vulkan：Linux 7.x 内核 `vk::DeviceLostError`**（23 评论）
   Strix Halo（Framework Desktop 128GB）上 Vulkan 后端崩溃，涉及 DeepSeek-V4-Flash 等多模型，影响面较广。

3. **[#25489](https://github.com/ggml-org/llama.cpp/issues/25489)｜MTP 特性自 b9935 后性能回退**（10 评论）
   Qwen3.6-35B 使用 MTP 草稿模式在 Windows 上出现性能下降，属 speculative 解码回归，引发社区关注。

4. **[#27102](https://github.com/ggml-org/llama.cpp/issues/27102)｜CUDA kernel 停滞被看门狗杀掉**（3 👍 / 7 评论）
   RTX Pro 6000 Blackwell 上运行 Qwen3.8-27B 时 CUDA kernel 停滞并触发 watchdog，需进一步定位后端问题。

5. **[#27046](https://github.com/ggml-org/llama.cpp/issues/27046)｜GPU 卸载 SIGSEGV（空指针跳转）**（8 评论）
   Intel Lunar Lake iGPU（Arc 140V）上 `resolve_fused_ops` 误判导致崩溃，并可在 gemma4、qwen2 等不同架构复现，疑似非单点回归。

6. **[#26746](https://github.com/ggml-org/llama.cpp/issues/26746)｜ROCm gfx1151 RPC worker 在 TOP_K 崩溃**（8 评论）
   DeepSeek V4 在 prefill 4096 token 后 RPC worker 崩溃，涉及 HIP/RPC 后端，与多机协作推理稳定性相关。

7. **[#27109](https://github.com/ggml-org/llama.cpp/issues/27109)｜CUDA 4-bit KV cache 使 prefill 骤降至 ~34 t/s**（6 评论）
   RTX 3090 上使用 q4_1/q4_0 KV cache 后 prefill 速度异常下降，MMQ guard 通过但性能退化严重。

8. **[#27174](https://github.com/ggml-org/llama.cpp/issues/27174)｜Completions 端点 logprobs 仅返回生成 token**（5 评论）
   `/v1/completions` 的 `echo: true` + `logprobs: N` 不返回 prompt/echo logprobs，静默破坏 lm-eval 等 loglikelihood 评估工具链，属 API 合规性缺陷。

9. **[#27155](https://github.com/ggml-org/llama.cpp/issues/27155)｜DeepSeek V4 Flash + DSpark 出现 VRAM 泄漏**（2 评论）
   每轮 PP+TG 循环草稿 KV cache 增长约 10MB 并持续累积至 OOM，speculative 解码路径的内存管理问题。

10. **[#23704](https://github.com/ggml-org/llama.cpp/issues/23704)｜服务器路由模式：同一模型多预设（仅加载一次）**（6 👍 / 15 评论）
    期望路由模式下对同一模型维护多个配置预设而避免重复加载，是服务器易用性的高关注需求。

---

## 重要 PR 进展（精选 10 个）

1. **[#27287](https://github.com/ggml-org/llama.cpp/pull/27287)｜新增 llama 桌面应用**
   基于 Electron 对 `llama-server` 的轻量封装，面向非技术用户，降低命令行使用门槛，属产品化方向的新尝试。

2. **[#27280](https://github.com/ggml-org/llama.cpp/pull/27280)｜服务器：可选 OTLP/HTTP 追踪**
   为 llama-server 增加 OpenTelemetry 追踪（编译期可选开关），提升服务可观测性，适合生产部署。

3. **[#25726](https://github.com/ggml-org/llama.cpp/pull/25726)｜speculative：自适应草稿长度启发式（当前仅 MTP）**
   运行时通过滚动窗口启发式动态调整草稿生成长度（相关 [#24768](https://github.com/ggml-org/llama.cpp/issues/24768)），优化解码效率。

4. **[#26689](https://github.com/ggml-org/llama.cpp/pull/26689)｜SYCL：量化 KV decode 的 TILE kernel**
   将量化 KV（q4_0/q8_0）解码切换至 TILE kernel，BMG 上 Qwen3.6-35B、Gemma 4 系列在 32K/118K 上下文实测 +42% 至 +169%，零回退。

5. **[#25505](https://github.com/ggml-org/llama.cpp/pull/25505)｜新模型：GraniteSWAForCausalLM / GraniteMoeSWA**
   配合 HuggingFace transformers 上游 PR，为即将发布的 Granite 交错滑动窗口注意力（含 Attention Sinks）模型提供支持。

6. **[#26490](https://github.com/ggml-org/llama.cpp/pull/26490)｜DeepSeek 4：`-sm tensor` 支持**
   为 DeepSeek4 添加张量切分模式，镜像 FA（单 K head / Q 64），并向 meta backend 增加 `memset_tensor`。

7. **[#27286](https://github.com/ggml-org/llama.cpp/pull/27286)｜ggml-cpu：校验 mul_mat_id 的 expert id**
   修复 release 构建（`-DNDEBUG`）下 debug assert 被编译掉、越界 expert id 导致堆越界写入的问题，属安全加固。

8. **[#27285](https://github.com/ggml-org/llama.cpp/pull/27285)｜mtmd：解引用前检查缺失的可选张量**
   三个视觉模型图构建器对可选张量未判空即解引用，构造的 mmproj GGUF 缺失张量时会触发 NULL 页 SIGSEGV，提升稳定性。

9. **[#27060](https://github.com/ggml-org/llama.cpp/pull/27060)｜新模型：dots3-note**
   支持 HF 上的 dots-studio/dots3-note-prev，主要改动为 DSA + SWA，需扩展 `llama-kv-cache-dsa`。

10. **[#27278](https://github.com/ggml-org/llama.cpp/pull/27278)｜服务器：mtmd chunk 以占位符保存**
    仅以占位符存储 mtmd chunks（用于 token/位置计数，不含底层数据缓冲），降低服务器内存占用。

---

## 功能需求趋势

- **推理性能优化**：speculative 解码（MTP/DSpark）稳定性、量化 KV cache 解码、多 GPU 张量切分（`--split-mode tensor`）是当前优化主战场，出现多个性能回退修复与 kernel 级优化 PR。
- **服务器架构演进**：预填充/解码分离（[#21266](https://github.com/ggml-org/llama.cpp/issues/21266)）、路由模式多预设（[#23704](https://github.com/ggml-org/llama.cpp/issues/23704)）、OTLP 可观测性（[#27280](https://github.com/ggml-org/llama.cpp/pull/27280)）、桌面应用（[#27287](https://github.com/ggml-org/llama.cpp/pull/27287)），显示 llama-server 正向生产级、易用化形态演进。
- **多后端硬件覆盖**：SYCL（Intel Arc）、Vulkan、ROCm/HIP、OpenCL（Adreno）等非 CUDA 后端的适配与修复成为高频主题。
- **新模型支持**：Granite（滑动窗口注意力 + Attention Sinks）、dots3-note（DSA）、Orpheus TTS（[#12476](https://github.com/ggml-org/llama.cpp/issues/12476)，18 👍）、Nemotron Nano v2（[#15409](https://github.com/ggml-org/llama.cpp/issues/15409)，28 👍）持续受关注。
- **内存与安全加固**：多个 PR 专注越界读写（[#27284](https://github.com/ggml-org/llama.cpp/pull/27284)）、空指针解引用（[#27285](https://github.com/ggml-org/llama.cpp/pull/27285)）、越界 expert id（[#27286](https://github.com/ggml-org/llama.cpp/pull/27286)）等安全与稳定性问题。

---

## 开发者关注点

- **性能回归敏感**：MTP 自 b9935 回退（[#25489](https://github.com/ggml-org/llama.cpp/issues/25489)）、4-bit KV cache 导致 prefill 骤降（[#27109](https://github.com/ggml-org/llama.cpp/issues/27109)）、SYCL 张量切分比单卡慢 3 倍（[#26409](https://github.com/ggml-org/llama.cpp/issues/26409)）等被密集反馈，社区对性能变化高度敏感。
- **多 GPU 与异构稳定性**：tensor split 相关 GGML_ASSERT 失败（[#26902](https://github.com/ggml-org/llama.cpp/issues/26902)、[#27116](https://github.com/ggml-org/llama.cpp/issues/27116)）与 RPC 崩溃（[#26746](https://github.com/ggml-org/llama.cpp/issues/26746)）频发，是当前最痛的场景之一。
- **内存检测与泄漏**：AMD APU 显存误判（[#18159](https://github.com/ggml-org/llama.cpp/issues/18159)，b10472 已修复）、DSpark VRAM 泄漏（[#27155](https://github.com/ggml-org/llama.cpp/issues/27155)）、SYCL 主机固定内存高 CPU 占用（[#27038](https://github.com/ggml-org/llama.cpp/issues/27038)）反映内存管理仍是痛点。
- **API 合规性**：logprobs 只返回生成 token（[#27174](https://github.com/ggml-org/llama.cpp/issues/27174)）静默破坏评估工具链，说明 OpenAI 兼容接口的细节完备性仍需打磨。
- **CI/发布质量**：Windows ROCm 包缺 hipblas.dll（[#26996](https://github.com/ggml-org/llama.cpp/issues/26996)）、Release jobs 耗时 10+ 小时（[#26896](https://github.com/ggml-org/llama.cpp/issues/26896)）、OpenVINO Docker 崩溃（[#23100](https://github.com/ggml-org/llama.cpp/issues/23100)）等构建与发布管线问题也颇受关注。

</details>

---
*本日报由 [agents-radar](https://github.com/stevenko2002/agents-radar) 自动生成。*